-- Vendor portfolio cover and gallery objects are stored under
-- <vendor_portfolios.id>/... rather than in the galleries table namespace.
-- Keep this limited to existing portfolio IDs and signed-in app admins.
create policy "Admins can upload vendor portfolio assets"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'gallery-images'
  and storage.extension(name) in ('jpg', 'jpeg', 'png', 'webp')
  and exists (
    select 1
    from public.users as app_user
    where app_user.id = (select auth.uid())
      and app_user.role = 'Admin'
  )
  and exists (
    select 1
    from public.vendor_portfolios as portfolio
    where portfolio.id::text = (storage.foldername(name))[1]
  )
);

create policy "Admins can delete vendor portfolio assets"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'gallery-images'
  and exists (
    select 1
    from public.users as app_user
    where app_user.id = (select auth.uid())
      and app_user.role = 'Admin'
  )
  and exists (
    select 1
    from public.vendor_portfolios as portfolio
    where portfolio.id::text = (storage.foldername(name))[1]
  )
);
