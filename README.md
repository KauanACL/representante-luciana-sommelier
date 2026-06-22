# Luciana Sommelier CRM

Sistema web em React + Vite para organizar clientes, visitas, vendas, serviços de sommelier e relatórios.

## Rodar localmente

```bash
npm install
npm run dev
```

Crie um `.env.local` com as variáveis públicas do Supabase:

```text
VITE_SUPABASE_URL=https://cndtoxewpoileeryntss.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua_publishable_key
```

## Banco e seed Supabase

Use uma connection string Postgres apenas no terminal, sem gravar senha no código:

```bash
SUPABASE_DB_URL="postgresql://postgres:SENHA@HOST:5432/postgres" npm run supabase:bootstrap
```

Depois de criar o primeiro usuário no Supabase Auth, promova o perfil:

```bash
SUPABASE_DB_URL="postgresql://postgres:SENHA@HOST:5432/postgres" OWNER_EMAIL="email@dominio.com" npm run supabase:promote-owner
```

O fallback local continua disponível apenas para desenvolvimento quando as variáveis `VITE_SUPABASE_*` não estiverem configuradas.
