-- 03_calendar_events.sql
-- Add missing calendar_events table for internal events (meetings, surveys, etc)

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
