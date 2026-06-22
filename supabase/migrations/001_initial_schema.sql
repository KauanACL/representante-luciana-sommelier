create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  role text not null default 'user' check (role in ('owner', 'admin', 'user')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  legacy_id text unique,
  document text not null,
  group_name text not null default 'OFF',
  name text not null,
  client_type text not null default 'PJ' check (client_type in ('PF', 'PJ')),
  status text not null default 'active' check (status in ('active', 'inactive', 'prospect', 'attention')),
  address text,
  district text,
  city text,
  state text,
  zip_code text,
  email text,
  phone text,
  salesperson text,
  manager text,
  contact_description text,
  last_imported_action text,
  last_imported_action_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.clients drop constraint if exists clients_document_key;

create table if not exists public.client_revenue_months (
  id uuid primary key default gen_random_uuid(),
  legacy_id text unique,
  client_id uuid not null references public.clients(id) on delete cascade,
  period date not null,
  amount numeric(12,2) not null default 0 check (amount >= 0),
  created_at timestamptz not null default now(),
  unique (client_id, period)
);

create table if not exists public.visits (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  scheduled_for timestamptz not null,
  purpose text not null,
  notes text,
  status text not null default 'scheduled' check (status in ('scheduled', 'completed', 'canceled')),
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sales (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  title text not null,
  amount numeric(12,2) not null default 0 check (amount >= 0),
  stage text not null default 'lead' check (stage in ('lead', 'proposal', 'won', 'lost')),
  expected_close_date timestamptz not null,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sommelier_services (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  service_type text not null check (service_type in ('Degustacao', 'Treinamento', 'Harmonizacao', 'Consultoria')),
  scheduled_for timestamptz not null,
  status text not null default 'scheduled' check (status in ('scheduled', 'completed', 'canceled')),
  amount numeric(12,2) not null default 0 check (amount >= 0),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  entity text not null check (entity in ('client', 'visit', 'sale', 'service', 'system')),
  entity_id text not null,
  action text not null,
  description text not null,
  created_at timestamptz not null default now()
);

create index if not exists clients_document_idx on public.clients (document);
create index if not exists clients_status_idx on public.clients (status);
create index if not exists clients_city_idx on public.clients (city);
create index if not exists profiles_email_idx on public.profiles (email);
create index if not exists profiles_active_idx on public.profiles (active);
create index if not exists client_revenue_months_client_id_idx on public.client_revenue_months (client_id);
create index if not exists client_revenue_months_period_idx on public.client_revenue_months (period);
create index if not exists visits_client_id_idx on public.visits (client_id);
create index if not exists visits_scheduled_for_idx on public.visits (scheduled_for);
create index if not exists visits_status_idx on public.visits (status);
create index if not exists sales_client_id_idx on public.sales (client_id);
create index if not exists sales_stage_idx on public.sales (stage);
create index if not exists sommelier_services_client_id_idx on public.sommelier_services (client_id);
create index if not exists sommelier_services_scheduled_for_idx on public.sommelier_services (scheduled_for);
create index if not exists sommelier_services_status_idx on public.sommelier_services (status);

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists clients_set_updated_at on public.clients;
create trigger clients_set_updated_at
before update on public.clients
for each row execute function public.set_updated_at();

drop trigger if exists visits_set_updated_at on public.visits;
create trigger visits_set_updated_at
before update on public.visits
for each row execute function public.set_updated_at();

drop trigger if exists sales_set_updated_at on public.sales;
create trigger sales_set_updated_at
before update on public.sales
for each row execute function public.set_updated_at();

drop trigger if exists sommelier_services_set_updated_at on public.sommelier_services;
create trigger sommelier_services_set_updated_at
before update on public.sommelier_services
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, role, active)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'name', 'Luciana'),
    case when not exists (select 1 from public.profiles) then 'owner' else 'user' end,
    true
  )
  on conflict (id) do update
  set email = excluded.email,
      updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

with ranked_auth_users as (
  select
    users.id,
    coalesce(users.email, '') as email,
    coalesce(users.raw_user_meta_data ->> 'name', 'Luciana') as name,
    row_number() over (order by users.created_at asc) as profile_order
  from auth.users
)
insert into public.profiles (id, email, name, role, active)
select
  id,
  email,
  name,
  case
    when profile_order = 1 and not exists (select 1 from public.profiles where role = 'owner')
      then 'owner'
    else 'user'
  end,
  true
from ranked_auth_users
on conflict (id) do update
set email = excluded.email,
    name = coalesce(public.profiles.name, excluded.name),
    updated_at = now();

do $$
begin
  if not exists (select 1 from public.profiles where role = 'owner') then
    update public.profiles
    set role = 'owner',
        active = true,
        updated_at = now()
    where id = (
      select id
      from public.profiles
      order by created_at asc
      limit 1
    );
  end if;
end;
$$;

create or replace function public.has_active_profile()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = (select auth.uid())
      and active = true
  );
$$;

alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.client_revenue_months enable row level security;
alter table public.visits enable row level security;
alter table public.sales enable row level security;
alter table public.sommelier_services enable row level security;
alter table public.activities enable row level security;

drop policy if exists profiles_select_active on public.profiles;
create policy profiles_select_active on public.profiles
for select to authenticated
using ((select public.has_active_profile()) or id = (select auth.uid()));

drop policy if exists profiles_update_self on public.profiles;

drop policy if exists clients_all_active on public.clients;
create policy clients_all_active on public.clients
for all to authenticated
using ((select public.has_active_profile()))
with check ((select public.has_active_profile()));

drop policy if exists revenue_all_active on public.client_revenue_months;
create policy revenue_all_active on public.client_revenue_months
for all to authenticated
using ((select public.has_active_profile()))
with check ((select public.has_active_profile()));

drop policy if exists visits_all_active on public.visits;
create policy visits_all_active on public.visits
for all to authenticated
using ((select public.has_active_profile()))
with check ((select public.has_active_profile()));

drop policy if exists sales_all_active on public.sales;
create policy sales_all_active on public.sales
for all to authenticated
using ((select public.has_active_profile()))
with check ((select public.has_active_profile()));

drop policy if exists services_all_active on public.sommelier_services;
create policy services_all_active on public.sommelier_services
for all to authenticated
using ((select public.has_active_profile()))
with check ((select public.has_active_profile()));

drop policy if exists activities_all_active on public.activities;
create policy activities_all_active on public.activities
for all to authenticated
using ((select public.has_active_profile()))
with check ((select public.has_active_profile()));

grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.clients to authenticated;
grant select on public.client_revenue_months to authenticated;
grant select, insert, update, delete on public.visits to authenticated;
grant select, insert, update, delete on public.sales to authenticated;
grant select, insert, update, delete on public.sommelier_services to authenticated;
grant select, insert on public.activities to authenticated;

notify pgrst, 'reload schema';
