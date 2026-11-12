create or replace function public.get_dashboard_stats()
returns jsonb
language sql
stable       
security invoker
set search_path = ''
as $$
  with project_stats as (
    select
      count(*) as total,
      count(*) filter (where status is null or status not in ('Selesai', 'Dibatalkan')) as active
    from public.projects
  ),
  client_stats as (
    select count(*) as total, count(*) filter (where status = 'Aktif') as active
    from public.clients
  ),
  lead_stats as (
    select
      count(*) as total,
      count(*) filter (where status in ('Discussion', 'Sedang Diskusi')) as discussion,
      count(*) filter (where status in ('Follow Up', 'Menunggu Follow Up')) as follow_up
    from public.leads
  ),
  team_stats as (
    select count(*) as total from public.team_members
  ),
  transaction_stats as (
    select
      count(*) as total,
      coalesce(sum(amount) filter (where type = 'Pemasukan'), 0) as revenue,
      coalesce(sum(amount) filter (where type = 'Pengeluaran'), 0) as expense
    from public.transactions
  )
  select jsonb_build_object(
    'projects', project_stats.total,
    'activeProjects', project_stats.active,
    'clients', client_stats.total,
    'activeClients', client_stats.active,
    'leads', lead_stats.total,
    'discussionLeads', lead_stats.discussion,
    'followUpLeads', lead_stats.follow_up,
    'teamMembers', team_stats.total,
    'transactions', transaction_stats.total,
    'revenue', transaction_stats.revenue,
    'expense', transaction_stats.expense
  )
  from project_stats, client_stats, lead_stats, team_stats, transaction_stats;
$$;

revoke all on function public.get_dashboard_stats() from public;
revoke all on function public.get_dashboard_stats() from anon;
grant execute on function public.get_dashboard_stats() to authenticated;
