-- ============================================================
-- Migration: create_push_subscriptions
-- Purpose  : Create the push_subscriptions table required by
--            the send-web-push Edge Function and the frontend
--            webPush.ts service (upsert on conflict 'endpoint').
--
-- Root cause of send-web-push HTTP 500:
--   The edge function SELECTs from push_subscriptions; without
--   this table the query throws PGRST205 → catch → 500.
-- ============================================================

create table if not exists public.push_subscriptions (
  id           uuid        primary key default gen_random_uuid(),
  vendor_id    uuid        not null,
  user_id      uuid        references auth.users(id) on delete set null,
  endpoint     text        not null,
  p256dh       text        not null,
  auth         text        not null,
  user_agent   text,
  device_type  text        check (device_type in ('ios','android','desktop','safari_mac','other')),
  is_active    boolean     not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),

  -- Required by webPush.ts upsert: .upsert(payload, { onConflict: 'endpoint' })
  constraint push_subscriptions_endpoint_unique unique (endpoint)
);

-- Index for the edge function's query:
--   .eq("vendor_id", vendor_id).eq("is_active", true)
create index if not exists idx_push_subscriptions_vendor_active
  on public.push_subscriptions (vendor_id, is_active);

-- Index for optional user-scoped queries:
--   .eq("user_id", user_id)
create index if not exists idx_push_subscriptions_user_id
  on public.push_subscriptions (user_id);

-- ── Row Level Security ───────────────────────────────────────
-- The edge function uses the service-role key (bypasses RLS).
-- The frontend uses the authenticated user session key and needs:
--   - INSERT/UPDATE to save/update their own subscription.
--   - SELECT to check existing subscriptions.
--   - UPDATE for unsubscribe (set is_active = false).
-- Vendors (authenticated users) may only read/write their own
-- subscriptions (where vendor_id = auth.uid()).

alter table public.push_subscriptions enable row level security;

-- Allow authenticated users to insert their own subscription
create policy "push_subscriptions_insert_own"
  on public.push_subscriptions
  for insert
  to authenticated
  with check (vendor_id = auth.uid());

-- Allow authenticated users to select their own subscriptions
create policy "push_subscriptions_select_own"
  on public.push_subscriptions
  for select
  to authenticated
  using (vendor_id = auth.uid());

-- Allow authenticated users to update their own subscriptions
-- (e.g. set is_active = false on unsubscribe, or re-upsert on re-subscribe)
create policy "push_subscriptions_update_own"
  on public.push_subscriptions
  for update
  to authenticated
  using (vendor_id = auth.uid())
  with check (vendor_id = auth.uid());

-- Allow authenticated users to delete their own subscriptions
create policy "push_subscriptions_delete_own"
  on public.push_subscriptions
  for delete
  to authenticated
  using (vendor_id = auth.uid());

-- ── Realtime ─────────────────────────────────────────────────
-- Not strictly needed for push_subscriptions (server-side only),
-- but added for consistency with other tables.
-- To enable: alter publication supabase_realtime add table public.push_subscriptions;
-- (skipped here to avoid enabling realtime on a security-sensitive table)
