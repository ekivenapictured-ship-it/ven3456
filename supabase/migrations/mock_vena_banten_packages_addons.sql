-- Mock packages and add-ons for Vena Pictures (Banten).
-- Prices are stored in rupiah, not in millions.
-- Safe to rerun: only rows with these fixed IDs are inserted or updated.

BEGIN;

INSERT INTO public.packages (
    id,
    name,
    price,
    category,
    processing_time,
    region,
    default_printing_cost,
    default_transport_cost,
    photographers,
    videographers,
    physical_items,
    digital_items,
    duration_options
) VALUES
(
    'b270c7e0-7a6d-4e11-9000-000000000001',
    'Intimate Wedding',
    4000000,
    'Wedding',
    'Belum ditentukan',
    'banten',
    0,
    0,
    '1 Fotografer',
    '1 Videografer',
    '[{"name":"Album (20x60), 10 sheet","price":0}]'::jsonb,
    '["300 foto telah diedit","Wedding teaser 1 menit","File JPG mentah melalui Google Drive","Transportasi belum termasuk harga"]'::jsonb,
    '[{"label":"4 Jam","price":4000000,"default":true}]'::jsonb
),
(
    'b270c7e0-7a6d-4e11-9000-000000000002',
    'Silver Wedding',
    6000000,
    'Wedding',
    'Belum ditentukan',
    'banten',
    0,
    0,
    '1 Fotografer + 1 Asisten',
    '1 Videografer',
    '[{"name":"Album (20x60), 10 sheet","price":0},{"name":"USB berisi file JPG mentah","price":0}]'::jsonb,
    '["350 foto telah diedit","Wedding teaser 1 menit","Cinematic clip 3 menit","Transportasi belum termasuk harga"]'::jsonb,
    '[{"label":"8 Jam","price":6000000,"default":true},{"label":"Full Day","price":8500000}]'::jsonb
),
(
    'b270c7e0-7a6d-4e11-9000-000000000003',
    'Gold Wedding',
    7900000,
    'Wedding',
    'Belum ditentukan',
    'banten',
    0,
    0,
    '2 Fotografer',
    '1 Videografer',
    '[{"name":"Album (20x60), 20 sheet","price":0},{"name":"Cetak kanvas (40x60)","price":0},{"name":"USB berisi file JPG mentah","price":0}]'::jsonb,
    '["400 foto telah diedit","Wedding teaser 1 menit","Cinematic clip 3-5 menit","Transportasi belum termasuk harga"]'::jsonb,
    '[{"label":"8 Jam","price":7900000,"default":true},{"label":"Full Day","price":11000000}]'::jsonb
),
(
    'b270c7e0-7a6d-4e11-9000-000000000004',
    'Platinum Wedding',
    12500000,
    'Wedding',
    'Belum ditentukan',
    'banten',
    0,
    0,
    '2 Fotografer',
    '2 Videografer',
    '[{"name":"2 Album (20x60), masing-masing 10 sheet","price":0},{"name":"2 cetak kanvas (40x60)","price":0},{"name":"USB berisi file JPG mentah","price":0}]'::jsonb,
    '["500 foto telah diedit","Wedding teaser 1 menit","Cinematic clip 3-5 menit","Same day edit 2-3 menit","Transportasi belum termasuk harga"]'::jsonb,
    '[{"label":"8 Jam","price":12500000,"default":true},{"label":"Full Day","price":15000000}]'::jsonb
),
(
    'b270c7e0-7a6d-4e11-9000-000000000005',
    'Candid Wedding',
    2500000,
    'Candid & Before-After',
    'Belum ditentukan',
    'banten',
    0,
    0,
    '1 Fotografer',
    NULL,
    '[]'::jsonb,
    '["200 foto telah diedit","File JPG mentah melalui Google Drive","Transportasi belum termasuk harga"]'::jsonb,
    '[{"label":"8 Jam","price":2500000,"default":true},{"label":"Full Day","price":5000000}]'::jsonb
),
(
    'b270c7e0-7a6d-4e11-9000-000000000006',
    'Before and After Wedding',
    3500000,
    'Candid & Before-After',
    'Belum ditentukan',
    'banten',
    0,
    0,
    '1 Fotografer',
    '1 Videografer',
    '[]'::jsonb,
    '["150 foto telah diedit","Teaser video 1 menit","File JPG mentah melalui Google Drive","Cocok untuk engagement, pengajian, siraman, maternity, dan acara sejenis","Transportasi belum termasuk harga"]'::jsonb,
    '[{"label":"4 Jam","price":3500000,"default":true}]'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    price = EXCLUDED.price,
    category = EXCLUDED.category,
    processing_time = EXCLUDED.processing_time,
    region = EXCLUDED.region,
    default_printing_cost = EXCLUDED.default_printing_cost,
    default_transport_cost = EXCLUDED.default_transport_cost,
    photographers = EXCLUDED.photographers,
    videographers = EXCLUDED.videographers,
    physical_items = EXCLUDED.physical_items,
    digital_items = EXCLUDED.digital_items,
    duration_options = EXCLUDED.duration_options;

INSERT INTO public.add_ons (id, name, price, region) VALUES
    ('b270c7e0-7a6d-4e11-9000-000000000101', 'Extra hours (per jam)', 500000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000102', 'Photographer', 2000000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000103', 'Videographer', 2000000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000104', 'Album (20x60), 10 sheet', 1000000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000105', 'Album (30x60), 20 sheet', 1500000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000106', 'Printed canvas (40x60) per pcs', 270000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000107', 'Extra video duration (per menit)', 300000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000108', 'Extra 1x revision', 500000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000109', 'Mini studio', 1000000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000110', 'Barcode', 1300000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000111', 'Drone', 1500000, 'banten'),
    ('b270c7e0-7a6d-4e11-9000-000000000112', 'Same day edit', 1500000, 'banten')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    price = EXCLUDED.price,
    region = EXCLUDED.region;

COMMIT;