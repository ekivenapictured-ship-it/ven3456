CREATE TABLE IF NOT EXISTS public.suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  message TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  channel TEXT
);

CREATE INDEX IF NOT EXISTS suggestions_date_idx
  ON public.suggestions (date DESC);

ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON TABLE public.suggestions TO anon, authenticated;
GRANT SELECT ON TABLE public.suggestions TO authenticated;
GRANT ALL ON TABLE public.suggestions TO service_role;

DROP POLICY IF EXISTS "Anyone can submit suggestions" ON public.suggestions;
CREATE POLICY "Anyone can submit suggestions"
  ON public.suggestions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can read suggestions" ON public.suggestions;
CREATE POLICY "Admins can read suggestions"
  ON public.suggestions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.users AS app_user
      WHERE lower(app_user.email) = lower((SELECT auth.jwt() ->> 'email'))
        AND app_user.role = 'Admin'
    )
  );

NOTIFY pgrst, 'reload schema';
