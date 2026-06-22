create table if not exists public.client_contacts (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  contact_at timestamptz not null default now(),
  channel text not null default 'other',
  outcome text not null default 'contacted',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint client_contacts_channel_check check (
    channel in ('whatsapp', 'phone', 'email', 'in_person', 'other')
  ),
  constraint client_contacts_outcome_check check (
    outcome in (
      'contacted',
      'lead',
      'proposal',
      'sale',
      'return_scheduled',
      'no_answer',
      'not_interested'
    )
  )
);

create index if not exists client_contacts_client_id_idx
on public.client_contacts (client_id);

create index if not exists client_contacts_contact_at_idx
on public.client_contacts (contact_at);

create index if not exists client_contacts_outcome_idx
on public.client_contacts (outcome);

drop trigger if exists client_contacts_set_updated_at on public.client_contacts;
create trigger client_contacts_set_updated_at
before update on public.client_contacts
for each row
execute function public.set_updated_at();

alter table public.client_contacts enable row level security;

drop policy if exists contacts_all_active on public.client_contacts;
create policy contacts_all_active on public.client_contacts
for all to authenticated
using ((select app_private.has_active_profile()))
with check ((select app_private.has_active_profile()));

grant select, insert, update, delete on public.client_contacts to authenticated;

notify pgrst, 'reload schema';
