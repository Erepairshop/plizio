-- Migration: Add options, explanation, and is_active to question_bank
-- This migration extends the question_bank table with additional fields for multiple choice questions

-- Add new columns to question_bank table
ALTER TABLE question_bank
ADD COLUMN IF NOT EXISTS options jsonb DEFAULT NULL COMMENT 'Multiple choice options as JSON array: [{"text": "option", "isCorrect": boolean}, ...]',
ADD COLUMN IF NOT EXISTS explanation text DEFAULT NULL COMMENT 'Detailed explanation for the answer',
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true COMMENT 'Soft delete: true if question is active';

-- Create index on frequently queried columns for performance
CREATE INDEX IF NOT EXISTS idx_question_bank_grade_section_active
ON question_bank(grade, section, is_active);

CREATE INDEX IF NOT EXISTS idx_question_bank_grade_difficulty
ON question_bank(grade, difficulty);

-- Add constraint to ensure solution is valid (for numeric answers)
ALTER TABLE question_bank
ADD CONSTRAINT check_solution_numeric CHECK (solution ~ '^\d+(\.\d+)?$');
