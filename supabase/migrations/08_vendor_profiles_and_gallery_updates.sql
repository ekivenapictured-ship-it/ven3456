-- 08_vendor_profiles_and_gallery_updates.sql
-- Membuat tabel vendor_profiles dan menambahkan cover_image_url ke galleries

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
