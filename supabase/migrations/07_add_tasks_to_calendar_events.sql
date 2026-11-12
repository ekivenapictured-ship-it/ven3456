-- Migration: Add tasks column to calendar_events
ALTER TABLE public.calendar_events 
ADD COLUMN IF NOT EXISTS tasks JSONB DEFAULT '[]'::jsonb;
