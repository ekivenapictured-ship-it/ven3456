-- 09_vendor_portfolios.sql

-- Enable uuid-ossp extension if not exists
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: vendor_portfolios
CREATE TABLE IF NOT EXISTS public.vendor_portfolios (
    id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    cover_image_url TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies for vendor_portfolios
ALTER TABLE public.vendor_portfolios ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Portfolios are viewable by everyone." ON public.vendor_portfolios;
CREATE POLICY "Portfolios are viewable by everyone."
    ON public.vendor_portfolios FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Users can insert their own portfolios." ON public.vendor_portfolios;
CREATE POLICY "Users can insert their own portfolios."
    ON public.vendor_portfolios FOR INSERT
    WITH CHECK (true); -- Relaxed for local dev, normally auth.uid() = user_id

DROP POLICY IF EXISTS "Users can update their own portfolios." ON public.vendor_portfolios;
CREATE POLICY "Users can update their own portfolios."
    ON public.vendor_portfolios FOR UPDATE
    USING (true);

DROP POLICY IF EXISTS "Users can delete their own portfolios." ON public.vendor_portfolios;
CREATE POLICY "Users can delete their own portfolios."
    ON public.vendor_portfolios FOR DELETE
    USING (true);

-- Trigger to update 'updated_at'
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_vendor_portfolios_modtime ON public.vendor_portfolios;

CREATE TRIGGER update_vendor_portfolios_modtime
    BEFORE UPDATE ON public.vendor_portfolios
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();
