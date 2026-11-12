-- 16_enable_rls_all_tables.sql
-- Mengaktifkan RLS (Row Level Security) untuk semua tabel agar data aman.
-- Karena aplikasi ini menggunakan anon key (bukan per-user auth JWT), 
-- kita pakai policy USING (true) / WITH CHECK (true) untuk memberi akses penuh
-- ke anon role — tapi RLS tetap aktif sehingga bisa dikunci lebih ketat nanti.
--
-- CARA PAKAI:
-- Jalankan script ini di Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- ============================================================
-- AKTIFKAN RLS + BUAT POLICY UNTUK SETIAP TABEL
-- ============================================================

-- 1. USERS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for users" ON public.users;
CREATE POLICY "Allow all for users"
    ON public.users FOR ALL
    USING (true) WITH CHECK (true);

-- 2. PROFILES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for profiles" ON public.profiles;
CREATE POLICY "Allow all for profiles"
    ON public.profiles FOR ALL
    USING (true) WITH CHECK (true);

-- 3. CLIENTS
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for clients" ON public.clients;
CREATE POLICY "Allow all for clients"
    ON public.clients FOR ALL
    USING (true) WITH CHECK (true);

-- 4. LEADS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for leads" ON public.leads;
CREATE POLICY "Allow all for leads"
    ON public.leads FOR ALL
    USING (true) WITH CHECK (true);

-- 5. TEAM MEMBERS
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for team_members" ON public.team_members;
CREATE POLICY "Allow all for team_members"
    ON public.team_members FOR ALL
    USING (true) WITH CHECK (true);

-- 6. PACKAGES
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for packages" ON public.packages;
CREATE POLICY "Allow all for packages"
    ON public.packages FOR ALL
    USING (true) WITH CHECK (true);

-- 7. ADD ONS
ALTER TABLE public.add_ons ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for add_ons" ON public.add_ons;
CREATE POLICY "Allow all for add_ons"
    ON public.add_ons FOR ALL
    USING (true) WITH CHECK (true);

-- 8. PROMO CODES
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for promo_codes" ON public.promo_codes;
CREATE POLICY "Allow all for promo_codes"
    ON public.promo_codes FOR ALL
    USING (true) WITH CHECK (true);

-- 9. CARDS
ALTER TABLE public.cards ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for cards" ON public.cards;
CREATE POLICY "Allow all for cards"
    ON public.cards FOR ALL
    USING (true) WITH CHECK (true);

-- 10. POCKETS
ALTER TABLE public.pockets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for pockets" ON public.pockets;
CREATE POLICY "Allow all for pockets"
    ON public.pockets FOR ALL
    USING (true) WITH CHECK (true);

-- 11. PROJECTS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for projects" ON public.projects;
CREATE POLICY "Allow all for projects"
    ON public.projects FOR ALL
    USING (true) WITH CHECK (true);

-- 12. TRANSACTIONS
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for transactions" ON public.transactions;
CREATE POLICY "Allow all for transactions"
    ON public.transactions FOR ALL
    USING (true) WITH CHECK (true);

-- 13. TEAM PROJECT PAYMENTS (buat jika belum ada)
CREATE TABLE IF NOT EXISTS public.team_project_payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    team_member_name VARCHAR(255) NOT NULL,
    team_member_id UUID REFERENCES public.team_members(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) NOT NULL,
    fee DECIMAL(15,2) NOT NULL
);
ALTER TABLE public.team_project_payments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for team_project_payments" ON public.team_project_payments;
CREATE POLICY "Allow all for team_project_payments"
    ON public.team_project_payments FOR ALL
    USING (true) WITH CHECK (true);

-- 14. TEAM PAYMENT RECORDS
ALTER TABLE public.team_payment_records ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for team_payment_records" ON public.team_payment_records;
CREATE POLICY "Allow all for team_payment_records"
    ON public.team_payment_records FOR ALL
    USING (true) WITH CHECK (true);

-- 15. CLIENT FEEDBACK
ALTER TABLE public.client_feedback ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for client_feedback" ON public.client_feedback;
CREATE POLICY "Allow all for client_feedback"
    ON public.client_feedback FOR ALL
    USING (true) WITH CHECK (true);

-- 16. NOTIFICATIONS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for notifications" ON public.notifications;
CREATE POLICY "Allow all for notifications"
    ON public.notifications FOR ALL
    USING (true) WITH CHECK (true);

-- 17. INVENTORY ITEMS (buat tabel dulu jika belum ada)
CREATE TABLE IF NOT EXISTS public.inventory_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    total_quantity INT DEFAULT 0,
    cover_image TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for inventory_items" ON public.inventory_items;
CREATE POLICY "Allow all for inventory_items"
    ON public.inventory_items FOR ALL
    USING (true) WITH CHECK (true);

-- 18. PROJECT TEAM ASSIGNMENTS (buat jika belum ada)
CREATE TABLE IF NOT EXISTS public.project_team_assignments (
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    member_id UUID REFERENCES public.team_members(id) ON DELETE CASCADE,
    member_name VARCHAR(255) NOT NULL,
    member_role VARCHAR(100) NOT NULL,
    fee DECIMAL(15,2) DEFAULT 0,
    sub_job VARCHAR(100),
    PRIMARY KEY (project_id, member_id)
);
ALTER TABLE public.project_team_assignments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for project_team_assignments" ON public.project_team_assignments;
CREATE POLICY "Allow all for project_team_assignments"
    ON public.project_team_assignments FOR ALL
    USING (true) WITH CHECK (true);

-- 19. PROJECT ADD ONS (buat jika belum ada)
CREATE TABLE IF NOT EXISTS public.project_add_ons (
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    add_on_id UUID REFERENCES public.add_ons(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, add_on_id)
);
ALTER TABLE public.project_add_ons ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for project_add_ons" ON public.project_add_ons;
CREATE POLICY "Allow all for project_add_ons"
    ON public.project_add_ons FOR ALL
    USING (true) WITH CHECK (true);

-- 20. WEDDING DAY CHECKLISTS (buat jika belum ada)
CREATE TABLE IF NOT EXISTS public.wedding_day_checklists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    category VARCHAR(255) NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT false,
    assigned_to VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.wedding_day_checklists ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for wedding_day_checklists" ON public.wedding_day_checklists;
CREATE POLICY "Allow all for wedding_day_checklists"
    ON public.wedding_day_checklists FOR ALL
    USING (true) WITH CHECK (true);

-- 21. GALLERIES (buat jika belum ada)
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
ALTER TABLE public.galleries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for galleries" ON public.galleries;
CREATE POLICY "Allow all for galleries"
    ON public.galleries FOR ALL
    USING (true) WITH CHECK (true);

-- 22. CALENDAR EVENTS (buat jika belum ada)
CREATE TABLE IF NOT EXISTS public.calendar_events (
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
ALTER TABLE public.calendar_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for calendar_events" ON public.calendar_events;
CREATE POLICY "Allow all for calendar_events"
    ON public.calendar_events FOR ALL
    USING (true) WITH CHECK (true);

-- 23. CONTRACTS
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for contracts" ON public.contracts;
DROP POLICY IF EXISTS "Allow all operations for contracts" ON public.contracts;
CREATE POLICY "Allow all for contracts"
    ON public.contracts FOR ALL
    USING (true) WITH CHECK (true);

-- 24. VENDOR PROFILES (buat jika belum ada)
CREATE TABLE IF NOT EXISTS public.vendor_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hero_title VARCHAR(255) DEFAULT 'Wujudkan Momen Terbaik Anda',
    hero_subtitle TEXT DEFAULT 'Layanan Vendor Dekorasi Profesional',
    hero_image_url TEXT,
    whatsapp_number VARCHAR(50) DEFAULT '+6281234567890',
    info_images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE public.vendor_profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all for vendor_profiles" ON public.vendor_profiles;
CREATE POLICY "Allow all for vendor_profiles"
    ON public.vendor_profiles FOR ALL
    USING (true) WITH CHECK (true);

-- 25. VENDOR PORTFOLIOS
-- (sudah ada policy sebelumnya, kita drop dan buat ulang yang bersih)
ALTER TABLE public.vendor_portfolios ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Portfolios are viewable by everyone." ON public.vendor_portfolios;
DROP POLICY IF EXISTS "Users can insert their own portfolios." ON public.vendor_portfolios;
DROP POLICY IF EXISTS "Users can update their own portfolios." ON public.vendor_portfolios;
DROP POLICY IF EXISTS "Users can delete their own portfolios." ON public.vendor_portfolios;
DROP POLICY IF EXISTS "Allow all for vendor_portfolios" ON public.vendor_portfolios;
CREATE POLICY "Allow all for vendor_portfolios"
    ON public.vendor_portfolios FOR ALL
    USING (true) WITH CHECK (true);

-- ============================================================
-- VERIFIKASI: query ini akan menampilkan status RLS semua tabel
-- ============================================================
-- SELECT tablename, rowsecurity
-- FROM pg_tables
-- WHERE schemaname = 'public'
-- ORDER BY tablename;
