-- 06_create_storage_buckets.sql
-- Membuat storage buckets untuk 'dp-proofs' dan 'gallery-images'

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
