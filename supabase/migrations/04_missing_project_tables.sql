-- 04_missing_project_tables.sql
-- Membuat tabel-tabel relasi proyek dan add-ons yang tertinggal

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
