-- Create contracts table
CREATE TABLE IF NOT EXISTS public.contracts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    contract_number TEXT NOT NULL,
    client_id UUID NOT NULL,
    project_id UUID NOT NULL,
    signing_date DATE NOT NULL,
    signing_location TEXT,
    client_name1 TEXT NOT NULL,
    client_address1 TEXT,
    client_phone1 TEXT,
    client_name2 TEXT,
    client_address2 TEXT,
    client_phone2 TEXT,
    shooting_duration TEXT,
    guaranteed_photos TEXT,
    album_details TEXT,
    digital_files_format TEXT,
    other_items TEXT,
    personnel_count TEXT,
    delivery_timeframe TEXT,
    dp_date DATE,
    final_payment_date DATE,
    cancellation_policy TEXT,
    jurisdiction TEXT,
    vendor_signature TEXT,
    client_signature TEXT,
    include_meterai BOOLEAN DEFAULT false,
    meterai_placement TEXT DEFAULT 'client',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;

-- Allow all operations for authenticated users (or anon if this app uses anon keys for everything)
CREATE POLICY "Allow all operations for contracts" ON public.contracts
    FOR ALL
    USING (true)
    WITH CHECK (true);
