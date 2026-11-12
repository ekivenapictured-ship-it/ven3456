-- Repair vendor-related tables and columns used by the public vendor profile UI.
-- Safe to run repeatedly; existing rows and table security policies are preserved.

CREATE TABLE IF NOT EXISTS public.galleries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    region VARCHAR(100) NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    public_id VARCHAR(255) UNIQUE NOT NULL,
    booking_link VARCHAR(255),
    images JSONB DEFAULT '[]'::jsonb,
    cover_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.galleries
    ADD COLUMN IF NOT EXISTS cover_image_url TEXT;

CREATE TABLE IF NOT EXISTS public.vendor_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hero_title VARCHAR(255) DEFAULT 'Wujudkan Momen Terbaik Anda',
    hero_subtitle TEXT DEFAULT 'Layanan Vendor Dekorasi Profesional',
    hero_image_url TEXT,
    hero_images JSONB NOT NULL DEFAULT '[]'::jsonb,
    whatsapp_number VARCHAR(50) DEFAULT '+6281234567890',
    info_images JSONB DEFAULT '[]'::jsonb,
    faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
    partners JSONB NOT NULL DEFAULT '[]'::jsonb,
    videos JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.vendor_profiles
    ADD COLUMN IF NOT EXISTS hero_images JSONB NOT NULL DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS partners JSONB NOT NULL DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS videos JSONB NOT NULL DEFAULT '[]'::jsonb;

CREATE TABLE IF NOT EXISTS public.vendor_portfolios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    cover_image_url TEXT,
    youtube_url TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.vendor_portfolios
    ADD COLUMN IF NOT EXISTS youtube_url TEXT;

NOTIFY pgrst, 'reload schema';