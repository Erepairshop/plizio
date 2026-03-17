-- Add extra_data JSONB column to user_data for syncing avatar, clothing, room, game progress
-- This single column stores all additional sync data that doesn't warrant its own column.
ALTER TABLE user_data ADD COLUMN IF NOT EXISTS extra_data JSONB DEFAULT '{}'::jsonb;
