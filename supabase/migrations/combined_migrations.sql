-- =============================================================
-- COMBINED MIGRATIONS
-- Menggabungkan file migrasi 03 s/d 10 menjadi satu file
-- =============================================================


-- =============================================================
-- [03] calendar_events.sql
-- Add missing calendar_events table for internal events (meetings, surveys, etc)
-- =============================================================

CREATE TABLE IF NOT EXISTS calendar_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    start_time VARCHAR(50),
    end_time VARCHAR(50),
    notes TEXT,
    team JSONB DEFAULT '[]'::jsonb,
    image TEXT,
    location VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- =============================================================
-- [04] missing_project_tables.sql
-- Membuat tabel-tabel relasi proyek dan add-ons yang tertinggal
-- =============================================================

CREATE TABLE IF NOT EXISTS add_ons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    price DECIMAL(15,2) NOT NULL DEFAULT 0,
    region VARCHAR(100)
);
ALTER TABLE add_ons DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS project_team_assignments (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
    member_name VARCHAR(255) NOT NULL,
    member_role VARCHAR(100) NOT NULL,
    fee DECIMAL(15,2) DEFAULT 0,
    sub_job VARCHAR(100),
    PRIMARY KEY (project_id, member_id)
);
ALTER TABLE project_team_assignments DISABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS project_add_ons (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    add_on_id UUID REFERENCES add_ons(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, add_on_id)
);
ALTER TABLE project_add_ons DISABLE ROW LEVEL SECURITY;


-- =============================================================
-- [05] final_missing_tables_and_rls.sql
-- Membuat tabel galleries dan wedding_day_checklists yang tertinggal
-- Serta menonaktifkan RLS untuk SELURUH tabel agar aplikasi (anon) bisa mengaksesnya tanpa error 401/404.
-- =============================================================

CREATE TABLE IF NOT EXISTS wedding_day_checklists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    category VARCHAR(255) NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT false,
    assigned_to VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS galleries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    region VARCHAR(100) NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    public_id VARCHAR(255) UNIQUE NOT NULL,
    booking_link VARCHAR(255),
    pdf_url TEXT,
    pdf_name TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- MATIKAN RLS UNTUK SEMUA TABEL!
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE clients DISABLE ROW LEVEL SECURITY;
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
ALTER TABLE team_members DISABLE ROW LEVEL SECURITY;
ALTER TABLE packages DISABLE ROW LEVEL SECURITY;
ALTER TABLE pockets DISABLE ROW LEVEL SECURITY;
ALTER TABLE cards DISABLE ROW LEVEL SECURITY;
ALTER TABLE transactions DISABLE ROW LEVEL SECURITY;
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
ALTER TABLE client_feedback DISABLE ROW LEVEL SECURITY;
ALTER TABLE team_payment_records DISABLE ROW LEVEL SECURITY;
ALTER TABLE promo_codes DISABLE ROW LEVEL SECURITY;
ALTER TABLE notifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE add_ons DISABLE ROW LEVEL SECURITY;
ALTER TABLE project_team_assignments DISABLE ROW LEVEL SECURITY;
ALTER TABLE project_add_ons DISABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_day_checklists DISABLE ROW LEVEL SECURITY;
ALTER TABLE galleries DISABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_events DISABLE ROW LEVEL SECURITY;


-- =============================================================
-- [06] create_storage_buckets.sql
-- Membuat storage buckets untuk 'dp-proofs' dan 'gallery-images'
-- =============================================================

-- 1. Create dp-proofs bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('dp-proofs', 'dp-proofs', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Create gallery-images bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery-images', 'gallery-images', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Allow public access to everything in storage.objects
-- Since this is a dev/mock env without real auth, we just allow all operations
DROP POLICY IF EXISTS "Public Access" ON storage.objects;

CREATE POLICY "Public Access" 
ON storage.objects FOR ALL 
USING (true)
WITH CHECK (true);


-- =============================================================
-- [07] add_tasks_to_calendar_events.sql
-- Migration: Add tasks column to calendar_events
-- =============================================================

ALTER TABLE public.calendar_events 
ADD COLUMN IF NOT EXISTS tasks JSONB DEFAULT '[]'::jsonb;


-- =============================================================
-- [08] vendor_profiles_and_gallery_updates.sql
-- Membuat tabel vendor_profiles dan menambahkan cover_image_url ke galleries
-- =============================================================

CREATE TABLE IF NOT EXISTS vendor_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hero_title VARCHAR(255) DEFAULT 'Wujudkan Momen Terbaik Anda',
    hero_subtitle TEXT DEFAULT 'Layanan Vendor Dekorasi Profesional',
    hero_image_url TEXT,
    whatsapp_number VARCHAR(50) DEFAULT '+6281234567890',
    info_images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tambahkan satu data default jika tabel kosong
INSERT INTO vendor_profiles (id) 
SELECT gen_random_uuid() 
WHERE NOT EXISTS (SELECT 1 FROM vendor_profiles);

-- Menambahkan kolom cover_image_url ke tabel galleries jika belum ada
ALTER TABLE galleries 
ADD COLUMN IF NOT EXISTS cover_image_url TEXT;

-- Matikan RLS untuk vendor_profiles agar bisa diakses bebas
ALTER TABLE vendor_profiles DISABLE ROW LEVEL SECURITY;


-- =============================================================
-- [09] vendor_portfolios.sql
-- =============================================================

-- Enable uuid-ossp extension if not exists
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: vendor_portfolios
CREATE TABLE IF NOT EXISTS public.vendor_portfolios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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


-- =============================================================
-- [10] add_event_date_to_leads.sql
-- Migration: Add event_date column to leads table
-- This stores the planned wedding event date provided by the lead
-- =============================================================

ALTER TABLE leads ADD COLUMN IF NOT EXISTS event_date DATE;
