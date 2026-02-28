-- Migration: Optimize question_bank for Klassenarbeit selection
-- Add indexes for fast filtering and repeat prevention tracking

-- ─── INDEXES FOR PERFORMANCE ─────────────────────────────

-- Primary query index: (grade, section, is_active, difficulty)
CREATE INDEX IF NOT EXISTS idx_qb_grade_section_active_difficulty
ON question_bank(grade, section, is_active, difficulty);

-- For repeat prevention queries
CREATE INDEX IF NOT EXISTS idx_qb_grade_section_active
ON question_bank(grade, section, is_active);

-- For difficulty filtering
CREATE INDEX IF NOT EXISTS idx_qb_difficulty
ON question_bank(difficulty);

-- ─── TABLE STRUCTURE FOR REPEAT PREVENTION ─────────────────────────────

-- Create test_question_history table to track used questions per user
CREATE TABLE IF NOT EXISTS test_question_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES question_bank(id) ON DELETE CASCADE,
  test_instance_id UUID,
  test_type TEXT DEFAULT 'klassenarbeit', -- klassenarbeit or practice
  used_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for repeat prevention queries
CREATE INDEX IF NOT EXISTS idx_test_qh_user_question_recent
ON test_question_history(user_id, question_id, used_at DESC)
WHERE test_type = 'klassenarbeit';

-- Index for cleanup
CREATE INDEX IF NOT EXISTS idx_test_qh_user_recent
ON test_question_history(user_id, used_at DESC)
WHERE test_type = 'klassenarbeit';

-- ─── FUNCTION FOR REPEAT PREVENTION ─────────────────────────────

-- SQL function to check if question was used recently (7 days)
CREATE OR REPLACE FUNCTION is_question_used_recently(
  p_user_id UUID,
  p_question_id UUID,
  p_days INT DEFAULT 7
)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS(
    SELECT 1 FROM test_question_history
    WHERE user_id = p_user_id
      AND question_id = p_question_id
      AND test_type = 'klassenarbeit'
      AND used_at > NOW() - INTERVAL '1 day' * p_days
  );
END;
$$ LANGUAGE plpgsql;

-- ─── COMMENT DOCUMENTATION ─────────────────────────────

COMMENT ON TABLE test_question_history IS 'Tracks which questions have been used in Klassenarbeit tests per user to prevent repetition within 7 days';

COMMENT ON COLUMN test_question_history.user_id IS 'User who took the test';

COMMENT ON COLUMN test_question_history.question_id IS 'Question used in the test';

COMMENT ON COLUMN test_question_history.test_instance_id IS 'Reference to test_instances table';

COMMENT ON COLUMN test_question_history.used_at IS 'When the question was used';

COMMENT ON FUNCTION is_question_used_recently(UUID, UUID, INT) IS 'Check if a question was used by user in the last N days (default 7)';
