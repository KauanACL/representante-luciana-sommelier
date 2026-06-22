import fs from 'node:fs/promises'
import path from 'node:path'
import { Client as PgClient } from 'pg'
import { clientRevenueSeed, clientSeed } from '../src/data/seed'

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
const migrationPath = path.join(root, 'supabase/migrations/001_initial_schema.sql')

const toDateOrNull = (value: string) => {
  if (!value) return null
  return value.slice(0, 10)
}

const toPeriodDate = (period: string) => `${period.replace('/', '-')}-01`

const main = async () => {
  await pg.connect()
  try {
    const migration = await fs.readFile(migrationPath, 'utf8')
    await pg.query(migration)

    await pg.query('begin')
    await pg.query(`
      truncate table
        public.activities,
        public.sommelier_services,
        public.sales,
        public.visits,
        public.client_revenue_months,
        public.clients
      cascade
    `)

    const clientIdByLegacyId = new Map<string, string>()

    for (const client of clientSeed) {
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
            $19, $20
          )
          returning id
        `,
        [
          client.id,
          client.document,
          client.group,
          client.name,
          client.type === 'PF' ? 'PF' : 'PJ',
          client.status,
          client.address || null,
          client.district || null,
          client.city || null,
          client.state || null,
          client.zipCode || null,
          client.email || null,
          client.phone || null,
          client.salesperson || null,
          client.manager || null,
          client.contactDescription || null,
          client.lastImportedAction || null,
          toDateOrNull(client.lastImportedActionDate),
          client.createdAt,
          client.updatedAt,
        ],
      )

      clientIdByLegacyId.set(client.id, result.rows[0].id)
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
      services: string
    }>(`
      select
        (select count(*) from public.clients)::text as clients,
        (select count(*) from public.client_revenue_months)::text as revenue_rows,
        (select count(distinct period) from public.client_revenue_months)::text as periods,
        (select count(*) from public.visits)::text as visits,
        (select count(*) from public.sales)::text as sales,
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
