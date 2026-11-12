ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_admin_user_id_fkey;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_admin_user_id_fkey
  FOREIGN KEY (admin_user_id)
  REFERENCES public.users(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;

ALTER TABLE public.galleries
  DROP CONSTRAINT IF EXISTS galleries_user_id_fkey;

ALTER TABLE public.galleries
  ADD CONSTRAINT galleries_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES public.users(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE;
