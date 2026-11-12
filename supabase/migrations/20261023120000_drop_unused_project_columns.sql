-- Migration: Hapus kolom yang TIDAK DIGUNAKAN di aplikasi
-- Semua kolom ini dikonfirmasi:
--   1. Tidak ada referensi di src/ (grep 0 kemunculan)
--   2. Tidak ada data (semua NULL/kosong di DB)
-- Dijalankan: 2026-10-23

-- ============================================================
-- TABEL: projects (11 kolom dihapus)
-- ============================================================

-- Kolom JSONB warisan yang sudah digantikan tabel relasi terpisah
ALTER TABLE projects DROP COLUMN IF EXISTS add_ons;
-- add_ons → digantikan tabel project_add_ons (M:N relation)

ALTER TABLE projects DROP COLUMN IF EXISTS team;
-- team → digantikan tabel project_team_assignments

ALTER TABLE projects DROP COLUMN IF EXISTS wedding_day_checklist;
-- wedding_day_checklist → digantikan tabel wedding_day_checklists

-- Kolom yang tidak pernah dibaca/ditulis di kode aplikasi
ALTER TABLE projects DROP COLUMN IF EXISTS image;
ALTER TABLE projects DROP COLUMN IF EXISTS color;
ALTER TABLE projects DROP COLUMN IF EXISTS transport_details;
ALTER TABLE projects DROP COLUMN IF EXISTS transport_used;
ALTER TABLE projects DROP COLUMN IF EXISTS inventory_items;
ALTER TABLE projects DROP COLUMN IF EXISTS event_details;
ALTER TABLE projects DROP COLUMN IF EXISTS rejection_reason;
ALTER TABLE projects DROP COLUMN IF EXISTS chat_history;

-- ============================================================
-- TABEL: profiles (3 kolom dihapus)
-- ============================================================

ALTER TABLE profiles DROP COLUMN IF EXISTS billing_templates;
ALTER TABLE profiles DROP COLUMN IF EXISTS receipt_share_template;
ALTER TABLE profiles DROP COLUMN IF EXISTS expense_share_template;
