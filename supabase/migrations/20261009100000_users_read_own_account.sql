DROP POLICY IF EXISTS "Users can read own account" ON public.users;

CREATE POLICY "Users can read own account"
    ON public.users
    FOR SELECT TO authenticated
    USING (id = (SELECT auth.uid()));