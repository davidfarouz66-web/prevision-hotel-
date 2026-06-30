create table if not exists public.app_state (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.app_status (
  id text primary key,
  last_active timestamptz not null default now()
);

alter table public.app_state enable row level security;
alter table public.app_status enable row level security;

drop policy if exists "odem event app_state select" on public.app_state;
drop policy if exists "odem event app_state insert" on public.app_state;
drop policy if exists "odem event app_state update" on public.app_state;
drop policy if exists "odem event app_status select" on public.app_status;
drop policy if exists "odem event app_status insert" on public.app_status;
drop policy if exists "odem event app_status update" on public.app_status;

create policy "odem event app_state select"
on public.app_state for select
to anon
using (true);

create policy "odem event app_state insert"
on public.app_state for insert
to anon
with check (true);

create policy "odem event app_state update"
on public.app_state for update
to anon
using (true)
with check (true);

create policy "odem event app_status select"
on public.app_status for select
to anon
using (true);

create policy "odem event app_status insert"
on public.app_status for insert
to anon
with check (true);

create policy "odem event app_status update"
on public.app_status for update
to anon
using (true)
with check (true);
