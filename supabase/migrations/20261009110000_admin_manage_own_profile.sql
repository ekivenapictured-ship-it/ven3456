GRANT SELECT, INSERT, UPDATE ON TABLE public.profiles TO authenticated;

DROP POLICY IF EXISTS "Admins can manage own business profile" ON public.profiles;
CREATE POLICY "Admins can manage own business profile"
    ON public.profiles
    FOR ALL TO authenticated
    USING (
        admin_user_id = (SELECT auth.uid())
        AND EXISTS (
            SELECT 1
            FROM public.users AS app_user
            WHERE app_user.id = (SELECT auth.uid())
              AND app_user.role = 'Admin'
        )
    )
    WITH CHECK (
        admin_user_id = (SELECT auth.uid())
        AND EXISTS (
            SELECT 1
            FROM public.users AS app_user
            WHERE app_user.id = (SELECT auth.uid())
              AND app_user.role = 'Admin'
        )
    );