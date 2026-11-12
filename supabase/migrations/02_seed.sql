-- 02_seed.sql
-- Comprehensive mock data for testing

-- 1. USERS
INSERT INTO users (id, email, full_name, company_name, role) VALUES 
('11111111-1111-1111-1111-111111111111', 'atter@admin.com', 'Attera', 'Attera', 'Admin');

-- 2. PROFILES
INSERT INTO profiles (admin_user_id, full_name, email, phone, company_name, address, bank_account, authorized_signer, brand_color) VALUES 
('11111111-1111-1111-1111-111111111111', 'Attera', 'atter@admin.com', '08123456789', 'Attera', 'Jl. Sukajadi No. 123, Bandung', 'BCA 1234567890 a.n Admin', 'Admin Utama', '#3B82F6');
