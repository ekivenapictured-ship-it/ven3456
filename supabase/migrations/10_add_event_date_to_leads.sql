-- Migration: Add event_date column to leads table
-- This stores the planned wedding event date provided by the lead

ALTER TABLE leads ADD COLUMN IF NOT EXISTS event_date DATE;
