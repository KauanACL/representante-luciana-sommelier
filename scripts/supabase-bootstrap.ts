import fs from 'node:fs/promises'
import path from 'node:path'
import { Client as PgClient } from 'pg'
import { BRAZIL_CITIES, BRAZIL_STATES } from '../src/data/brazilLocations'
import { clientRevenueSeed, clientSeed } from '../src/data/seed'
import { normalizeClientLocation, normalizeLocationKey } from '../src/lib/locations'

const dbUrl = process.env.SUPABASE_DB_URL
const dbHost = process.env.SUPABASE_DB_HOST
const dbPassword = process.env.SUPABASE_DB_PASSWORD

if (!dbUrl && (!dbHost || !dbPassword)) {
  throw new Error('SUPABASE_DB_URL or SUPABASE_DB_HOST + SUPABASE_DB_PASSWORD is required.')
}

const pg = new PgClient({
  ...(dbUrl
    ? { connectionString: dbUrl }
    : {
        host: dbHost,
        port: Number(process.env.SUPABASE_DB_PORT ?? 5432),
        database: process.env.SUPABASE_DB_NAME ?? 'postgres',
        user: process.env.SUPABASE_DB_USER ?? 'postgres',
        password: dbPassword,
      }),
  ssl: { rejectUnauthorized: false },
})

const root = process.cwd()
const migrationsPath = path.join(root, 'supabase/migrations')

const toDateOrNull = (value: string) => {
  if (!value) return null
  return value.slice(0, 10)
}

const toPeriodDate = (period: string) => `${period.replace('/', '-')}-01`

const applyMigrations = async () => {
  const files = (await fs.readdir(migrationsPath)).filter((file) => file.endsWith('.sql')).sort()

  for (const file of files) {
    const migration = await fs.readFile(path.join(migrationsPath, file), 'utf8')
    await pg.query(migration)
  }
}

const seedBrazilLocations = async () => {
  for (const state of BRAZIL_STATES) {
    await pg.query(
      `
        insert into public.brazil_states (ibge_id, code, name, normalized_name)
        values ($1, $2, $3, $4)
        on conflict (ibge_id) do update
        set code = excluded.code,
            name = excluded.name,
            normalized_name = excluded.normalized_name
      `,
      [state.ibgeId, state.code, state.name, normalizeLocationKey(state.name)],
    )
  }

  for (const city of BRAZIL_CITIES) {
    await pg.query(
      `
        insert into public.brazil_cities (ibge_id, name, state_code, normalized_name)
        values ($1, $2, $3, $4)
        on conflict (ibge_id) do update
        set name = excluded.name,
            state_code = excluded.state_code,
            normalized_name = excluded.normalized_name
      `,
      [city.ibgeId, city.name, city.stateCode, normalizeLocationKey(city.name)],
    )
  }
}

const main = async () => {
  await pg.connect()
  try {
    await applyMigrations()

    await pg.query('begin')
    await seedBrazilLocations()

    await pg.query(`
      truncate table
        public.activities,
        public.client_contacts,
        public.sommelier_services,
        public.sales,
        public.visits,
        public.client_revenue_months,
        public.clients
      cascade
    `)

    const clientIdByLegacyId = new Map<string, string>()

    for (const client of clientSeed) {
      const normalizedClient = normalizeClientLocation(client)
      const result = await pg.query<{ id: string }>(
        `
          insert into public.clients (
            legacy_id,
            document,
            group_name,
            name,
            client_type,
            status,
            address,
            district,
            city,
            state,
            state_code,
            city_ibge_id,
            zip_code,
            email,
            phone,
            salesperson,
            manager,
            contact_description,
            last_imported_action,
            last_imported_action_date,
            created_at,
            updated_at
          )
          values (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15, $16, $17, $18,
            $19, $20, $21, $22
          )
          returning id
        `,
        [
          normalizedClient.id,
          normalizedClient.document,
          normalizedClient.group,
          normalizedClient.name,
          normalizedClient.type === 'PF' ? 'PF' : 'PJ',
          normalizedClient.status,
          normalizedClient.address || null,
          normalizedClient.district || null,
          normalizedClient.city || null,
          normalizedClient.state || null,
          normalizedClient.stateCode || null,
          normalizedClient.cityIbgeId ?? null,
          normalizedClient.zipCode || null,
          normalizedClient.email || null,
          normalizedClient.phone || null,
          normalizedClient.salesperson || null,
          normalizedClient.manager || null,
          normalizedClient.contactDescription || null,
          normalizedClient.lastImportedAction || null,
          toDateOrNull(normalizedClient.lastImportedActionDate),
          normalizedClient.createdAt,
          normalizedClient.updatedAt,
        ],
      )

      clientIdByLegacyId.set(normalizedClient.id, result.rows[0].id)
    }

    for (const revenue of clientRevenueSeed) {
      const clientId = clientIdByLegacyId.get(revenue.clientId)
      if (!clientId) continue

      await pg.query(
        `
          insert into public.client_revenue_months (
            legacy_id,
            client_id,
            period,
            amount
          )
          values ($1, $2, $3, $4)
          on conflict (client_id, period) do update
          set amount = excluded.amount
        `,
        [revenue.id, clientId, toPeriodDate(revenue.period), revenue.amount],
      )
    }

    await pg.query(
      `
        insert into public.activities (entity, entity_id, action, description)
        values ('system', 'seed', 'seed-imported', 'Base real importada da planilha clientes_consolidado_padronizado.xlsx.')
      `,
    )

    await pg.query('commit')

    const counts = await pg.query<{
      clients: string
      revenue_rows: string
      periods: string
      visits: string
      sales: string
      contacts: string
      services: string
    }>(`
      select
        (select count(*) from public.clients)::text as clients,
        (select count(*) from public.brazil_states)::text as states,
        (select count(*) from public.brazil_cities)::text as cities,
        (select count(*) from public.client_revenue_months)::text as revenue_rows,
        (select count(distinct period) from public.client_revenue_months)::text as periods,
        (select count(*) from public.visits)::text as visits,
        (select count(*) from public.sales)::text as sales,
        (select count(*) from public.client_contacts)::text as contacts,
        (select count(*) from public.sommelier_services)::text as services
    `)

    console.log(JSON.stringify(counts.rows[0], null, 2))
  } catch (error) {
    await pg.query('rollback').catch(() => undefined)
    throw error
  } finally {
    await pg.end()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
