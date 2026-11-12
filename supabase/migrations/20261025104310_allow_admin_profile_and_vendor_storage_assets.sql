-- The app stores non-gallery admin assets in gallery-images under these
-- namespaces (and backgrounds under YYYY/MM). Permit only signed-in admins.
-- Keep the existing gallery-owner policy for customer gallery uploads intact.
create policy "Admins can upload profile and vendor assets"
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
  and (
    (storage.foldername(name))[1] in (
      'profile-assets',
      'package-covers',
      'project-signatures',
      'team-payment-signatures',
      'transaction-signatures',
      'vendor'
    )
    or (
      (storage.foldername(name))[1] ~ '^[0-9]{4}$'
      and (storage.foldername(name))[2] ~ '^(1[0-2]|[1-9])$'
    )
  )
);

-- Allow admins to remove only app-owned assets, not client gallery objects.
create policy "Admins can delete profile and vendor assets"
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
  and (
    (storage.foldername(name))[1] in (
      'profile-assets',
      'package-covers',
      'project-signatures',
      'team-payment-signatures',
      'transaction-signatures',
      'vendor'
    )
    or (
      (storage.foldername(name))[1] ~ '^[0-9]{4}$'
      and (storage.foldername(name))[2] ~ '^(1[0-2]|[1-9])$'
    )
  )
);
