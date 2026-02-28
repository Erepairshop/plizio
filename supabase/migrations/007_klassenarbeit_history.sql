-- ============================================================================
-- 007: KLASSENARBEIT HISTORY – Storage & Retrieval
-- ============================================================================
-- Problem: Klassenarbeit data (sections, note, points) not persisted for history
-- Solution: Add klassenarbeit_data JSONB column + RPC for retrieval
-- ============================================================================

-- ─── Add klassenarbeit_data column to test_instances ────────────────────
ALTER TABLE test_instances
ADD COLUMN klassenarbeit_data JSONB DEFAULT NULL;

-- Create index for efficient klassenarbeit queries
CREATE INDEX idx_test_instances_klassenarbeit
  ON test_instances(user_id, created_at DESC)
  WHERE klassenarbeit_data IS NOT NULL;

-- ─── Drop old submit_test function and recreate with klassenarbeit_data storage ─
DROP FUNCTION IF EXISTS submit_test(UUID, JSONB, JSONB) CASCADE;

-- ─── Update submit_test RPC to store klassenarbeit_data ─────────────────
CREATE OR REPLACE FUNCTION submit_test(
  p_test_id UUID,
  p_answers JSONB,
  p_klassenarbeit_data JSONB DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_test test_instances%ROWTYPE;
  v_answer JSONB;
  v_item items%ROWTYPE;
  v_item_id UUID;
  v_idx INTEGER;
  v_correct BOOLEAN;
  v_points INTEGER;
  v_total_score INTEGER := 0;
  v_max_score INTEGER := 0;
  v_total_time INTEGER := 0;
  v_topic_breakdown JSONB := '{}';
  v_cognitive_breakdown JSONB := '{}';
  v_percentage NUMERIC(5,2);
  v_stars INTEGER := 0;
  v_xp INTEGER := 0;
  v_blueprint blueprints%ROWTYPE;
  v_is_first BOOLEAN;
  v_topic_key TEXT;
  v_cog_key TEXT;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- ─── VALIDATE klassenarbeit_data if provided ──────────────────────────────
  IF p_klassenarbeit_data IS NOT NULL THEN
    -- Check required fields
    IF NOT (
      p_klassenarbeit_data ? 'sectionResults' AND
      p_klassenarbeit_data ? 'totalPoints' AND
      p_klassenarbeit_data ? 'maxTotalPoints' AND
      p_klassenarbeit_data ? 'percentage' AND
      p_klassenarbeit_data ? 'note' AND
      p_klassenarbeit_data ? 'starsEarned'
    ) THEN
      RAISE EXCEPTION 'Invalid klassenarbeit_data: missing required fields';
    END IF;

    -- Validate note structure
    IF NOT (
      (p_klassenarbeit_data->'note') ? 'value' AND
      (p_klassenarbeit_data->'note') ? 'label'
    ) THEN
      RAISE EXCEPTION 'Invalid note in klassenarbeit_data: must have value and label';
    END IF;

    -- Validate note value range
    IF (p_klassenarbeit_data->'note'->>'value')::INTEGER < 1 OR
       (p_klassenarbeit_data->'note'->>'value')::INTEGER > 6 THEN
      RAISE EXCEPTION 'Invalid note value: must be 1-6';
    END IF;

    -- Validate numeric fields
    IF (p_klassenarbeit_data->>'totalPoints')::NUMERIC < 0 THEN
      RAISE EXCEPTION 'Invalid klassenarbeit_data: totalPoints cannot be negative';
    END IF;

    IF (p_klassenarbeit_data->>'maxTotalPoints')::NUMERIC <= 0 THEN
      RAISE EXCEPTION 'Invalid klassenarbeit_data: maxTotalPoints must be positive';
    END IF;

    IF (p_klassenarbeit_data->>'starsEarned')::INTEGER < 0 THEN
      RAISE EXCEPTION 'Invalid klassenarbeit_data: starsEarned cannot be negative';
    END IF;
  END IF;

  -- Load test and verify ownership
  SELECT * INTO v_test
  FROM test_instances
  WHERE id = p_test_id AND user_id = v_user_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Test not found or not yours';
  END IF;

  IF v_test.status = 'completed' THEN
    RAISE EXCEPTION 'Test already submitted';
  END IF;

  -- Load blueprint for reward rules
  IF v_test.blueprint_id IS NOT NULL THEN
    SELECT * INTO v_blueprint FROM blueprints WHERE id = v_test.blueprint_id;
  END IF;

  -- Check if this is a first attempt for this blueprint+grade combo
  SELECT NOT EXISTS(
    SELECT 1 FROM test_instances
    WHERE user_id = v_user_id
      AND blueprint_id = v_test.blueprint_id
      AND status = 'completed'
      AND id != p_test_id
  ) INTO v_is_first;

  -- ─── Grade each answer ──────────────────────────────────────────
  FOR v_answer IN SELECT * FROM jsonb_array_elements(p_answers)
  LOOP
    v_idx := (v_answer->>'question_index')::INTEGER;

    -- Safety: check index bounds
    IF v_idx < 0 OR v_idx >= array_length(v_test.item_ids, 1) THEN
      CONTINUE;
    END IF;

    v_item_id := v_test.item_ids[v_idx + 1];

    -- Load item WITH solution (server-side only!)
    SELECT * INTO v_item FROM items WHERE id = v_item_id;
    IF NOT FOUND THEN CONTINUE; END IF;

    -- Check correctness
    v_correct := FALSE;
    IF v_item.question_type = 'multiple_choice' OR v_item.question_type = 'numeric' THEN
      v_correct := (v_answer->>'answer')::NUMERIC = (v_item.solution_json->>'correctAnswer')::NUMERIC;
    END IF;

    v_points := CASE WHEN v_correct THEN v_item.max_points ELSE 0 END;
    v_total_score := v_total_score + v_points;
    v_max_score := v_max_score + v_item.max_points;
    v_total_time := v_total_time + COALESCE((v_answer->>'time_spent_sec')::INTEGER, 0);

    -- Store answer
    INSERT INTO user_answers (test_instance_id, item_id, question_index, answer_json, is_correct, points_awarded, time_spent_sec)
    VALUES (
      p_test_id, v_item_id, v_idx,
      jsonb_build_object('selected', v_answer->'answer'),
      v_correct, v_points,
      (v_answer->>'time_spent_sec')::INTEGER
    );

    -- Update item usage stats
    UPDATE items SET
      usage_count = usage_count + 1,
      correct_rate = CASE
        WHEN usage_count = 0 THEN CASE WHEN v_correct THEN 1.0 ELSE 0.0 END
        ELSE (correct_rate * usage_count + CASE WHEN v_correct THEN 1 ELSE 0 END) / (usage_count + 1)
      END
    WHERE id = v_item_id;

    -- ─── Build topic breakdown ────────────────────────────
    v_topic_key := v_item.topic;
    IF v_topic_breakdown ? v_topic_key THEN
      v_topic_breakdown := jsonb_set(v_topic_breakdown, ARRAY[v_topic_key, 'total'],
        to_jsonb(((v_topic_breakdown->v_topic_key->>'total')::INTEGER + 1)));
      IF v_correct THEN
        v_topic_breakdown := jsonb_set(v_topic_breakdown, ARRAY[v_topic_key, 'correct'],
          to_jsonb(((v_topic_breakdown->v_topic_key->>'correct')::INTEGER + 1)));
      END IF;
    ELSE
      v_topic_breakdown := v_topic_breakdown || jsonb_build_object(
        v_topic_key, jsonb_build_object(
          'correct', CASE WHEN v_correct THEN 1 ELSE 0 END,
          'total', 1
        )
      );
    END IF;

    -- ─── Build cognitive breakdown ────────────────────────
    v_cog_key := v_item.cognitive_level::TEXT;
    IF v_cognitive_breakdown ? v_cog_key THEN
      v_cognitive_breakdown := jsonb_set(v_cognitive_breakdown, ARRAY[v_cog_key, 'total'],
        to_jsonb(((v_cognitive_breakdown->v_cog_key->>'total')::INTEGER + 1)));
      IF v_correct THEN
        v_cognitive_breakdown := jsonb_set(v_cognitive_breakdown, ARRAY[v_cog_key, 'correct'],
          to_jsonb(((v_cognitive_breakdown->v_cog_key->>'correct')::INTEGER + 1)));
      END IF;
    ELSE
      v_cognitive_breakdown := v_cognitive_breakdown || jsonb_build_object(
        v_cog_key, jsonb_build_object(
          'correct', CASE WHEN v_correct THEN 1 ELSE 0 END,
          'total', 1
        )
      );
    END IF;

    -- ─── Update performance snapshot ──────────────────────
    INSERT INTO performance_snapshots (user_id, country, grade, subject, topic, subskill,
      correct_count, total_count, accuracy_percent, avg_time_sec,
      current_streak, best_streak, last_attempt_at)
    VALUES (
      v_user_id, v_item.country, v_item.grade, v_item.subject,
      v_item.topic, v_item.subskill,
      CASE WHEN v_correct THEN 1 ELSE 0 END,
      1,
      CASE WHEN v_correct THEN 100.0 ELSE 0.0 END,
      COALESCE((v_answer->>'time_spent_sec')::NUMERIC, 0),
      CASE WHEN v_correct THEN 1 ELSE 0 END,
      CASE WHEN v_correct THEN 1 ELSE 0 END,
      NOW()
    )
    ON CONFLICT (user_id, grade, subject, topic, subskill) DO UPDATE SET
      correct_count = performance_snapshots.correct_count + CASE WHEN v_correct THEN 1 ELSE 0 END,
      total_count = performance_snapshots.total_count + 1,
      accuracy_percent = (
        (performance_snapshots.correct_count + CASE WHEN v_correct THEN 1 ELSE 0 END)::NUMERIC /
        (performance_snapshots.total_count + 1)::NUMERIC * 100
      ),
      avg_time_sec = (
        (performance_snapshots.avg_time_sec * performance_snapshots.total_count
         + COALESCE((v_answer->>'time_spent_sec')::NUMERIC, 0))
        / (performance_snapshots.total_count + 1)
      ),
      current_streak = CASE
        WHEN v_correct THEN performance_snapshots.current_streak + 1
        ELSE 0
      END,
      best_streak = GREATEST(
        performance_snapshots.best_streak,
        CASE WHEN v_correct THEN performance_snapshots.current_streak + 1 ELSE 0 END
      ),
      mastery_level = (
        (performance_snapshots.correct_count + CASE WHEN v_correct THEN 1 ELSE 0 END)::NUMERIC /
        (performance_snapshots.total_count + 1)::NUMERIC
      ),
      last_attempt_at = NOW();
  END LOOP;

  -- ─── Calculate percentage ────────────────────────────────
  v_percentage := CASE
    WHEN v_max_score > 0 THEN (v_total_score::NUMERIC / v_max_score::NUMERIC * 100)
    ELSE 0
  END;

  -- ─── Calculate star rewards ──────────────────────────────────
  IF v_blueprint.star_rewards IS NOT NULL AND v_blueprint.star_rewards != '{}' THEN
    v_stars := CASE
      WHEN v_percentage >= 90 THEN COALESCE((v_blueprint.star_rewards->>'grade1')::INTEGER, 12)
      WHEN v_percentage >= 80 THEN COALESCE((v_blueprint.star_rewards->>'grade2')::INTEGER, 10)
      WHEN v_percentage >= 65 THEN COALESCE((v_blueprint.star_rewards->>'grade3')::INTEGER, 8)
      WHEN v_percentage >= 50 THEN COALESCE((v_blueprint.star_rewards->>'grade4')::INTEGER, 5)
      ELSE 0
    END;

    IF v_percentage = 100 THEN
      v_stars := v_stars + COALESCE((v_blueprint.star_rewards->>'perfectBonus')::INTEGER, 3);
    END IF;

    IF NOT v_is_first THEN
      v_stars := (v_stars * COALESCE((v_blueprint.star_rewards->>'retryMultiplier')::NUMERIC, 0.5))::INTEGER;
    END IF;
  ELSE
    v_stars := v_total_score;
  END IF;

  v_xp := v_total_score * 10;

  -- ─── Ensure user_streaks row exists ────────────────────────────
  INSERT INTO user_streaks (user_id)
  VALUES (v_user_id)
  ON CONFLICT (user_id) DO NOTHING;

  -- ─── SAFEGUARD: Ensure v_stars is never NULL ────────────────────
  v_stars := COALESCE(v_stars, 0);
  IF v_stars < 0 THEN
    v_stars := 0;
  END IF;

  -- ─── Check daily star cap ────────────────────────────────────
  UPDATE user_streaks SET
    stars_earned_today = CASE
      WHEN today_date = CURRENT_DATE THEN stars_earned_today
      ELSE 0
    END,
    today_date = CURRENT_DATE
  WHERE user_id = v_user_id;

  -- Apply daily cap (30 stars)
  DECLARE
    v_today_stars INTEGER;
    v_daily_cap INTEGER := 30;
  BEGIN
    SELECT stars_earned_today INTO v_today_stars
    FROM user_streaks WHERE user_id = v_user_id;

    IF COALESCE(v_today_stars, 0) + v_stars > v_daily_cap THEN
      v_stars := GREATEST(0, v_daily_cap - COALESCE(v_today_stars, 0));
    END IF;
  END;

  -- ─── Update test instance (including klassenarbeit_data) ──────────────────
  UPDATE test_instances SET
    status = 'completed',
    score = v_total_score,
    max_score = v_max_score,
    percentage = v_percentage,
    total_time_sec = v_total_time,
    topic_breakdown = v_topic_breakdown,
    cognitive_breakdown = v_cognitive_breakdown,
    stars_earned = COALESCE(v_stars, 0),
    xp_earned = v_xp,
    is_first_attempt = v_is_first,
    klassenarbeit_data = p_klassenarbeit_data,  -- ← STORE HERE
    completed_at = NOW()
  WHERE id = p_test_id;

  -- ─── Update user profile (stars + XP) ─────────────────────
  INSERT INTO user_profiles (id, stars, xp)
  VALUES (v_user_id, COALESCE(v_stars, 0), v_xp)
  ON CONFLICT (id) DO UPDATE SET
    stars = user_profiles.stars + EXCLUDED.stars,
    xp = user_profiles.xp + EXCLUDED.xp;

  -- ─── Star transaction ───────────────────────────────────────
  IF v_stars > 0 THEN
    INSERT INTO star_transactions (user_id, amount, reason, reference_id, balance_after)
    SELECT v_user_id, v_stars, 'test_completion', p_test_id, stars
    FROM user_profiles WHERE id = v_user_id;
  END IF;

  -- ─── Update streak ──────────────────────────────────────────
  UPDATE user_streaks SET
    current_streak = CASE
      WHEN last_activity_date = CURRENT_DATE - INTERVAL '1 day' THEN current_streak + 1
      WHEN last_activity_date = CURRENT_DATE THEN current_streak
      ELSE 1
    END,
    best_streak = GREATEST(best_streak, CASE
      WHEN last_activity_date = CURRENT_DATE - INTERVAL '1 day' THEN current_streak + 1
      WHEN last_activity_date = CURRENT_DATE THEN current_streak
      ELSE 1
    END),
    last_activity_date = CURRENT_DATE,
    total_tests_completed = total_tests_completed + 1,
    total_time_spent_sec = total_time_spent_sec + v_total_time,
    total_stars_earned = total_stars_earned + COALESCE(v_stars, 0),
    total_xp_earned = total_xp_earned + v_xp,
    stars_earned_today = stars_earned_today + COALESCE(v_stars, 0)
  WHERE user_id = v_user_id;

  -- ─── Return result (without solutions!) ─────────────────────
  RETURN jsonb_build_object(
    'test_id', p_test_id,
    'score', v_total_score,
    'max_score', v_max_score,
    'percentage', v_percentage,
    'total_time_sec', v_total_time,
    'topic_breakdown', v_topic_breakdown,
    'cognitive_breakdown', v_cognitive_breakdown,
    'stars_earned', COALESCE(v_stars, 0),
    'xp_earned', v_xp,
    'is_first_attempt', v_is_first
  );
END;
$$;

GRANT EXECUTE ON FUNCTION submit_test TO authenticated;

-- ─── GET_KLASSENARBEIT_HISTORY RPC ──────────────────────────────────────
-- Returns Klassenarbeit history for a user (most recent first)
CREATE OR REPLACE FUNCTION get_klassenarbeit_history()
RETURNS TABLE (
  test_id UUID,
  created_at TIMESTAMPTZ,
  percentage NUMERIC,
  note_value INTEGER,
  note_label TEXT,
  total_points NUMERIC,
  max_total_points NUMERIC,
  section_results JSONB
) AS $$
DECLARE
  v_user_id UUID := auth.uid();
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  RETURN QUERY
  SELECT
    ti.id,
    ti.created_at,
    ti.percentage,
    (ti.klassenarbeit_data->'note'->>'value')::INTEGER,
    (ti.klassenarbeit_data->'note'->>'label'),
    (ti.klassenarbeit_data->>'totalPoints')::NUMERIC,
    (ti.klassenarbeit_data->>'maxTotalPoints')::NUMERIC,
    ti.klassenarbeit_data->'sectionResults'
  FROM test_instances ti
  WHERE ti.user_id = v_user_id
    AND ti.klassenarbeit_data IS NOT NULL
  ORDER BY ti.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION get_klassenarbeit_history() TO authenticated;

-- ============================================================================
-- 007 MIGRATION COMPLETE
-- ============================================================================
-- Changes:
-- 1. Added klassenarbeit_data JSONB column to test_instances
-- 2. Updated submit_test RPC to persist klassenarbeit_data
-- 3. New get_klassenarbeit_history() RPC for retrieving history
-- 4. Index for efficient klassenarbeit data retrieval
-- ============================================================================
