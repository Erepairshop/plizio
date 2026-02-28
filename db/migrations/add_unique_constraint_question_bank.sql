-- Migration: Add unique constraint to prevent duplicate questions
-- This ensures that the same question cannot be inserted twice in the same section

-- Add unique constraint on (grade, section, question) combination
ALTER TABLE question_bank
ADD CONSTRAINT unique_question_per_section
UNIQUE(grade, section, question)
DEFERRABLE INITIALLY DEFERRED;

-- Drop old manual migration seed data if exists
DELETE FROM question_bank
WHERE grade = 5
  AND question_bank.created_at IS NOT NULL
  AND question_bank.created_at < NOW() - INTERVAL '1 hour'
  AND is_active = true;
