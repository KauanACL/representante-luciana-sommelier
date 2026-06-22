create extension if not exists unaccent with schema extensions;

create or replace function app_private.location_key(value text)
returns text
language sql
stable
set search_path = extensions, pg_temp
as $$
  select trim(
    regexp_replace(
      lower(unaccent(coalesce(value, ''))),
      '[^a-z0-9]+',
      ' ',
      'g'
    )
  );
$$;

revoke execute on function app_private.location_key(text) from public, anon, authenticated;

create table if not exists public.brazil_states (
  ibge_id integer primary key,
  code text not null unique check (code ~ '^[A-Z]{2}$'),
  name text not null,
  normalized_name text not null
);

create table if not exists public.brazil_cities (
  ibge_id integer primary key,
  name text not null,
  state_code text not null references public.brazil_states(code) on update cascade,
  normalized_name text not null,
  unique (state_code, normalized_name)
);

alter table public.clients add column if not exists state_code text;
alter table public.clients add column if not exists city_ibge_id integer;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'clients_state_code_fkey'
      and conrelid = 'public.clients'::regclass
  ) then
    alter table public.clients
    add constraint clients_state_code_fkey
    foreign key (state_code) references public.brazil_states(code) on update cascade;
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'clients_city_ibge_id_fkey'
      and conrelid = 'public.clients'::regclass
  ) then
    alter table public.clients
    add constraint clients_city_ibge_id_fkey
    foreign key (city_ibge_id) references public.brazil_cities(ibge_id) on update cascade;
  end if;
end $$;

create index if not exists brazil_cities_state_code_idx on public.brazil_cities (state_code);
create index if not exists brazil_cities_normalized_name_idx on public.brazil_cities (normalized_name);
create index if not exists clients_state_code_idx on public.clients (state_code);
create index if not exists clients_city_ibge_id_idx on public.clients (city_ibge_id);

alter table public.brazil_states enable row level security;
alter table public.brazil_cities enable row level security;

drop policy if exists brazil_states_select_active on public.brazil_states;
create policy brazil_states_select_active on public.brazil_states
for select to authenticated
using ((select app_private.has_active_profile()));

drop policy if exists brazil_cities_select_active on public.brazil_cities;
create policy brazil_cities_select_active on public.brazil_cities
for select to authenticated
using ((select app_private.has_active_profile()));

revoke all on public.brazil_states from anon, authenticated;
revoke all on public.brazil_cities from anon, authenticated;
grant select on public.brazil_states to authenticated;
grant select on public.brazil_cities to authenticated;

notify pgrst, 'reload schema';
