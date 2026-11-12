UPDATE public.users
SET email = 'atter@admin.com'
WHERE lower(email) = 'admin@vena.com';

UPDATE public.profiles
SET email = 'atter@admin.com'
WHERE lower(email) = 'admin@vena.com';
