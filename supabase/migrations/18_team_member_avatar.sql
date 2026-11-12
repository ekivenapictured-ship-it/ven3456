-- Add the profile avatar URL used by team and vendor profiles.
ALTER TABLE public.team_members
    ADD COLUMN IF NOT EXISTS avatar_url TEXT;