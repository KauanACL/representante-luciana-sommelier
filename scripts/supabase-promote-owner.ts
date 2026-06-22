import { Client as PgClient } from 'pg'

const dbUrl = process.env.SUPABASE_DB_URL
const dbHost = process.env.SUPABASE_DB_HOST
const dbPassword = process.env.SUPABASE_DB_PASSWORD
const ownerEmail = process.env.OWNER_EMAIL

if (!dbUrl && (!dbHost || !dbPassword)) {
  throw new Error('SUPABASE_DB_URL or SUPABASE_DB_HOST + SUPABASE_DB_PASSWORD is required.')
}
if (!ownerEmail) throw new Error('OWNER_EMAIL is required.')

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

const main = async () => {
  await pg.connect()
  try {
    const ensureProfile = await pg.query(
      `
        insert into public.profiles (id, email, name, role, active)
        select
          users.id,
          coalesce(users.email, ''),
          coalesce(users.raw_user_meta_data ->> 'name', 'Luciana'),
          'user',
          true
        from auth.users
        where lower(users.email) = lower($1)
        on conflict (id) do update
        set email = excluded.email,
            updated_at = now()
        returning id
      `,
      [ownerEmail],
    )

    if (ensureProfile.rowCount !== 1) {
      throw new Error(`Auth user not found for ${ownerEmail}. Create the Auth user first.`)
    }

    const result = await pg.query(
      `
        update public.profiles
        set role = 'owner',
            active = true,
            updated_at = now()
        where lower(email) = lower($1)
        returning id, email, role, active
      `,
      [ownerEmail],
    )

    console.log(JSON.stringify(result.rows[0], null, 2))
  } finally {
    await pg.end()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
