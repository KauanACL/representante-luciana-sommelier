alter table public.sales
add column if not exists closed_at timestamptz;

create index if not exists sales_closed_at_idx
on public.sales (closed_at);

alter table public.client_contacts
drop constraint if exists client_contacts_outcome_check;

alter table public.client_contacts
add constraint client_contacts_outcome_check check (
  outcome in (
    'contacted',
    'responded',
    'lead',
    'proposal',
    'proposal_later',
    'sale',
    'return_scheduled',
    'no_answer',
    'not_interested'
  )
);

create or replace function public.register_control_action(
  p_client_id uuid,
  p_contact_at timestamptz default now(),
  p_channel text default 'other',
  p_outcome text default 'contacted',
  p_notes text default null,
  p_sale_title text default null,
  p_sale_amount numeric default null,
  p_sale_stage text default null,
  p_sale_expected_close_date timestamptz default null,
  p_sale_closed_at timestamptz default null,
  p_visit_scheduled_for timestamptz default null,
  p_visit_purpose text default null,
  p_visit_notes text default null
)
returns jsonb
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  v_contact_id uuid;
  v_sale_id uuid;
  v_visit_id uuid;
begin
  if not (select app_private.has_active_profile()) then
    raise insufficient_privilege using message = 'Active profile required.';
  end if;

  if p_channel not in ('whatsapp', 'phone', 'email', 'in_person', 'other') then
    raise invalid_parameter_value using message = 'Invalid contact channel.';
  end if;

  if p_outcome not in (
    'contacted',
    'responded',
    'lead',
    'proposal',
    'proposal_later',
    'sale',
    'return_scheduled',
    'no_answer',
    'not_interested'
  ) then
    raise invalid_parameter_value using message = 'Invalid contact outcome.';
  end if;

  insert into public.client_contacts (
    client_id,
    contact_at,
    channel,
    outcome,
    notes
  )
  values (
    p_client_id,
    coalesce(p_contact_at, now()),
    p_channel,
    p_outcome,
    p_notes
  )
  returning id into v_contact_id;

  if p_sale_title is not null or p_sale_stage is not null then
    if nullif(trim(coalesce(p_sale_title, '')), '') is null then
      raise invalid_parameter_value using message = 'Sale title is required.';
    end if;

    if p_sale_stage not in ('lead', 'proposal', 'won', 'lost') then
      raise invalid_parameter_value using message = 'Invalid sale stage.';
    end if;

    insert into public.sales (
      client_id,
      title,
      amount,
      stage,
      expected_close_date,
      closed_at,
      notes
    )
    values (
      p_client_id,
      p_sale_title,
      coalesce(p_sale_amount, 0),
      p_sale_stage,
      coalesce(p_sale_expected_close_date, p_contact_at, now()),
      case
        when p_sale_stage = 'won'
          then coalesce(p_sale_closed_at, p_contact_at, now())
        else null
      end,
      p_notes
    )
    returning id into v_sale_id;
  end if;

  if p_visit_scheduled_for is not null or p_visit_purpose is not null then
    if p_visit_scheduled_for is null then
      raise invalid_parameter_value using message = 'Visit date is required.';
    end if;

    if nullif(trim(coalesce(p_visit_purpose, '')), '') is null then
      raise invalid_parameter_value using message = 'Visit purpose is required.';
    end if;

    insert into public.visits (
      client_id,
      scheduled_for,
      purpose,
      notes,
      status
    )
    values (
      p_client_id,
      p_visit_scheduled_for,
      p_visit_purpose,
      p_visit_notes,
      'scheduled'
    )
    returning id into v_visit_id;
  end if;

  return jsonb_build_object(
    'contactId', v_contact_id,
    'saleId', v_sale_id,
    'visitId', v_visit_id
  );
end;
$$;

grant execute on function public.register_control_action(
  uuid,
  timestamptz,
  text,
  text,
  text,
  text,
  numeric,
  text,
  timestamptz,
  timestamptz,
  timestamptz,
  text,
  text
) to authenticated;

notify pgrst, 'reload schema';
