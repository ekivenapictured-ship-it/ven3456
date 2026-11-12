-- 01_schema.sql
-- Create core tables for the application

-- Drop existing tables if necessary for a clean setup (optional in dev)
-- DROP TABLE IF EXISTS notifications, client_feedback, team_payment_records, team_project_payments, transactions, projects, pockets, cards, promo_codes, add_ons, packages, team_members, leads, clients, profiles, users CASCADE;

-- 1. USERS
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    role VARCHAR(50) NOT NULL,
    permissions JSONB DEFAULT '[]'::jsonb,
    restricted_cards JSONB DEFAULT '[]'::jsonb
);

-- 2. PROFILES
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    instagram VARCHAR(255),
    address TEXT NOT NULL,
    bank_account TEXT NOT NULL,
    authorized_signer VARCHAR(255) NOT NULL,
    id_number VARCHAR(100),
    bio TEXT,
    income_categories JSONB DEFAULT '[]'::jsonb,
    expense_categories JSONB DEFAULT '[]'::jsonb,
    project_types JSONB DEFAULT '[]'::jsonb,
    event_types JSONB DEFAULT '[]'::jsonb,
    asset_categories JSONB DEFAULT '[]'::jsonb,
    sop_categories JSONB DEFAULT '[]'::jsonb,
    package_categories JSONB DEFAULT '[]'::jsonb,
    project_status_config JSONB DEFAULT '[]'::jsonb,
    notification_settings JSONB DEFAULT '{}'::jsonb,
    security_settings JSONB DEFAULT '{}'::jsonb,
    briefing_template TEXT,
    terms_and_conditions TEXT,
    logo_base64 TEXT,
    signature_base64 TEXT,
    brand_color VARCHAR(50),
    public_page_config JSONB DEFAULT '{}'::jsonb,
    package_share_template TEXT,
    booking_form_template TEXT,
    chat_templates JSONB DEFAULT '[]'::jsonb,
    billing_templates JSONB DEFAULT '[]'::jsonb,
    invoice_share_template TEXT,
    receipt_share_template TEXT,
    expense_share_template TEXT,
    portal_share_template TEXT,
    checklist_templates JSONB DEFAULT '[]'::jsonb,
    contract_template TEXT
);

-- 3. CLIENTS
CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    whatsapp VARCHAR(50),
    since TIMESTAMP WITH TIME ZONE,
    instagram VARCHAR(255),
    status VARCHAR(50) NOT NULL,
    client_type VARCHAR(50) NOT NULL,
    last_contact TIMESTAMP WITH TIME ZONE,
    portal_access_id VARCHAR(255) NOT NULL,
    address TEXT
);

-- 4. LEADS
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    contact_channel VARCHAR(50) NOT NULL,
    location VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    notes TEXT,
    whatsapp VARCHAR(50),
    address TEXT
);

-- 5. TEAM MEMBERS
CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    avatar_url TEXT,
    standard_fee DECIMAL(15,2) DEFAULT 0,
    no_rek VARCHAR(100),
    bank_name VARCHAR(100),
    specialization VARCHAR(255),
    location VARCHAR(255),
    emergency_contact VARCHAR(100),
    rating INT DEFAULT 5,
    performance_notes JSONB DEFAULT '[]'::jsonb,
    portal_access_id VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- 6. PACKAGES
CREATE TABLE IF NOT EXISTS packages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    region VARCHAR(100),
    physical_items JSONB DEFAULT '[]'::jsonb,
    digital_items JSONB DEFAULT '[]'::jsonb,
    processing_time VARCHAR(100) NOT NULL,
    default_printing_cost DECIMAL(15,2) DEFAULT 0,
    default_transport_cost DECIMAL(15,2) DEFAULT 0,
    photographers VARCHAR(255),
    videographers VARCHAR(255),
    cover_image TEXT,
    duration_options JSONB DEFAULT '[]'::jsonb
);

-- 7. ADD ONS
CREATE TABLE IF NOT EXISTS add_ons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    region VARCHAR(100)
);

-- 8. PROMO CODES
CREATE TABLE IF NOT EXISTS promo_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    discount_type VARCHAR(50) NOT NULL,
    discount_value DECIMAL(15,2) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    usage_count INT DEFAULT 0,
    max_usage INT,
    expiry_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. CARDS
CREATE TABLE IF NOT EXISTS cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    card_holder_name VARCHAR(255) NOT NULL,
    bank_name VARCHAR(100) NOT NULL,
    card_type VARCHAR(50) NOT NULL,
    last_four_digits VARCHAR(10) NOT NULL,
    expiry_date VARCHAR(10),
    balance DECIMAL(15,2) DEFAULT 0,
    color_gradient VARCHAR(100)
);

-- 10. POCKETS
CREATE TABLE IF NOT EXISTS pockets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    type VARCHAR(50) NOT NULL,
    amount DECIMAL(15,2) DEFAULT 0,
    goal_amount DECIMAL(15,2),
    lock_end_date TIMESTAMP WITH TIME ZONE,
    members JSONB DEFAULT '[]'::jsonb,
    source_card_id UUID REFERENCES cards(id) ON DELETE SET NULL
);

-- 11. PROJECTS
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_name VARCHAR(255) NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    project_type VARCHAR(100) NOT NULL,
    package_name VARCHAR(255) NOT NULL,
    package_id UUID REFERENCES packages(id) ON DELETE SET NULL,
    add_ons JSONB DEFAULT '[]'::jsonb,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    deadline_date TIMESTAMP WITH TIME ZONE,
    location VARCHAR(255) NOT NULL,
    progress INT DEFAULT 0,
    status VARCHAR(50) NOT NULL,
    active_sub_statuses JSONB DEFAULT '[]'::jsonb,
    total_cost DECIMAL(15,2) DEFAULT 0,
    amount_paid DECIMAL(15,2) DEFAULT 0,
    payment_status VARCHAR(50) NOT NULL,
    team JSONB DEFAULT '[]'::jsonb,
    notes TEXT,
    accommodation TEXT,
    drive_link TEXT,
    client_drive_link TEXT,
    final_drive_link TEXT,
    start_time VARCHAR(50),
    end_time VARCHAR(50),
    image TEXT,
    color VARCHAR(50),
    status_history JSONB DEFAULT '[]'::jsonb,
    promo_code_id UUID REFERENCES promo_codes(id) ON DELETE SET NULL,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    shipping_details TEXT,
    dp_proof_url TEXT,
    printing_details JSONB DEFAULT '[]'::jsonb,
    printing_cost DECIMAL(15,2) DEFAULT 0,
    transport_cost DECIMAL(15,2) DEFAULT 0,
    transport_paid BOOLEAN DEFAULT false,
    transport_note TEXT,
    printing_card_id UUID REFERENCES cards(id) ON DELETE SET NULL,
    transport_card_id UUID REFERENCES cards(id) ON DELETE SET NULL,
    transport_details JSONB DEFAULT '[]'::jsonb,
    transport_used BOOLEAN DEFAULT false,
    custom_costs JSONB DEFAULT '[]'::jsonb,
    is_editing_confirmed_by_client BOOLEAN DEFAULT false,
    is_printing_confirmed_by_client BOOLEAN DEFAULT false,
    is_delivery_confirmed_by_client BOOLEAN DEFAULT false,
    confirmed_sub_statuses JSONB DEFAULT '[]'::jsonb,
    client_sub_status_notes JSONB DEFAULT '{}'::jsonb,
    sub_status_confirmation_sent_at JSONB DEFAULT '{}'::jsonb,
    completed_digital_items JSONB DEFAULT '[]'::jsonb,
    invoice_signature TEXT,
    custom_sub_statuses JSONB DEFAULT '[]'::jsonb,
    booking_status VARCHAR(50),
    rejection_reason TEXT,
    chat_history JSONB DEFAULT '[]'::jsonb,
    duration_selection VARCHAR(100),
    unit_price DECIMAL(15,2),
    address TEXT,
    wedding_day_checklist JSONB DEFAULT '[]'::jsonb,
    inventory_items JSONB DEFAULT '[]'::jsonb,
    event_details JSONB DEFAULT '{}'::jsonb
);

-- 12. TRANSACTIONS
CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    description TEXT NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    type VARCHAR(50) NOT NULL,
    project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
    category VARCHAR(100) NOT NULL,
    method VARCHAR(100) NOT NULL,
    pocket_id UUID REFERENCES pockets(id) ON DELETE SET NULL,
    card_id UUID REFERENCES cards(id) ON DELETE SET NULL,
    printing_item_id VARCHAR(255),
    vendor_signature TEXT
);

-- 13. TEAM PROJECT PAYMENTS
CREATE TABLE IF NOT EXISTS team_project_payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    team_member_name VARCHAR(255) NOT NULL,
    team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) NOT NULL,
    fee DECIMAL(15,2) NOT NULL
);

-- 14. TEAM PAYMENT RECORDS
CREATE TABLE IF NOT EXISTS team_payment_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    record_number VARCHAR(100) NOT NULL,
    team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    project_payment_ids JSONB DEFAULT '[]'::jsonb,
    total_amount DECIMAL(15,2) NOT NULL,
    vendor_signature TEXT
);

-- 15. CLIENT FEEDBACK
CREATE TABLE IF NOT EXISTS client_feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name VARCHAR(255) NOT NULL,
    satisfaction VARCHAR(50) NOT NULL,
    rating INT NOT NULL,
    feedback TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL
);

-- 16. NOTIFICATIONS
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    is_read BOOLEAN DEFAULT false,
    icon VARCHAR(50) NOT NULL,
    link JSONB
);
