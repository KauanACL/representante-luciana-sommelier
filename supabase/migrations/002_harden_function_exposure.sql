create schema if not exists app_private;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function app_private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
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
for each row execute function app_private.handle_new_user();

create or replace function app_private.has_active_profile()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from public.profiles
    where id = (select auth.uid())
      and active = true
  );
$$;

grant usage on schema app_private to authenticated;
grant execute on function app_private.has_active_profile() to authenticated;
revoke execute on function app_private.handle_new_user() from public, anon, authenticated;

drop policy if exists profiles_select_active on public.profiles;
create policy profiles_select_active on public.profiles
for select to authenticated
using ((select app_private.has_active_profile()) or id = (select auth.uid()));

drop policy if exists clients_all_active on public.clients;
create policy clients_all_active on public.clients
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

drop policy if exists revenue_all_active on public.client_revenue_months;
create policy revenue_all_active on public.client_revenue_months
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

drop policy if exists visits_all_active on public.visits;
create policy visits_all_active on public.visits
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

drop policy if exists sales_all_active on public.sales;
create policy sales_all_active on public.sales
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

drop policy if exists services_all_active on public.sommelier_services;
create policy services_all_active on public.sommelier_services
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

drop policy if exists activities_all_active on public.activities;
create policy activities_all_active on public.activities
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

drop function if exists public.handle_new_user();
drop function if exists public.has_active_profile();

notify pgrst, 'reload schema';
