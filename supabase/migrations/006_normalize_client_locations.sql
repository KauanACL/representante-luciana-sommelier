update public.clients as client
set state_code = state.code,
    state = state.code
from public.brazil_states as state
where state.code = upper(trim(coalesce(client.state, '')))
   or state.normalized_name = app_private.location_key(client.state);

update public.clients
set city = null,
    city_ibge_id = null
where app_private.location_key(city) in ('', 'mg', 'minas gerais');

with matched as (
  select
    client.id,
    city.ibge_id,
    city.name,
    city.state_code
  from public.clients as client
  join public.brazil_cities as city
    on city.state_code = client.state_code
   and city.normalized_name = app_private.location_key(client.city)
  where app_private.location_key(client.city) not in ('', 'mg', 'minas gerais')
)
update public.clients as client
set city = matched.name,
    state = matched.state_code,
    state_code = matched.state_code,
    city_ibge_id = matched.ibge_id
from matched
where client.id = matched.id;

with unique_city_names as (
  select normalized_name, min(ibge_id) as ibge_id
  from public.brazil_cities
  group by normalized_name
  having count(*) = 1
),
matched as (
  select
    client.id,
    city.ibge_id,
    city.name,
    city.state_code
  from public.clients as client
  join unique_city_names as unique_city
    on unique_city.normalized_name = app_private.location_key(client.city)
  join public.brazil_cities as city
    on city.ibge_id = unique_city.ibge_id
  where client.city_ibge_id is null
    and app_private.location_key(client.city) not in ('', 'mg', 'minas gerais')
)
update public.clients as client
set city = matched.name,
    state = matched.state_code,
    state_code = matched.state_code,
    city_ibge_id = matched.ibge_id
from matched
where client.id = matched.id;

notify pgrst, 'reload schema';
