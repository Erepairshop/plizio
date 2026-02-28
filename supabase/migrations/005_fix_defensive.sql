-- ============================================================================
-- 005: DEFENSIVE FIXES – Auto-create missing user_profiles & user_streaks
-- ============================================================================
-- Problem: if initialize_user fails silently, submit_test UPDATE-s affect 0 rows.
-- Fix: use INSERT...ON CONFLICT instead of UPDATE for user_profiles & user_streaks.
-- Also: add COALESCE for profile fields in get_user_dashboard.
-- ============================================================================
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query → Paste → Run)
-- ============================================================================

-- ──────────────────────────────────────────────────────────────────────────────
-- 1. FIX: get_user_dashboard – add COALESCE for profile fields
-- ──────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION get_user_dashboard()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_profile user_profiles%ROWTYPE;
  v_streak user_streaks%ROWTYPE;
  v_recent_tests JSONB;
  v_weak_areas JSONB;
  v_strong_areas JSONB;
BEGIN
  SELECT * INTO v_profile FROM user_profiles WHERE id = v_user_id;
  SELECT * INTO v_streak FROM user_streaks WHERE user_id = v_user_id;

  -- Last 10 tests
  SELECT jsonb_agg(t ORDER BY t->>'created_at' DESC) INTO v_recent_tests
  FROM (
    SELECT jsonb_build_object(
      'id', id, 'score', score, 'max_score', max_score,
      'percentage', percentage, 'total_time_sec', total_time_sec,
      'stars_earned', stars_earned, 'created_at', created_at
    ) AS t
    FROM test_instances
    WHERE user_id = v_user_id AND status = 'completed'
    ORDER BY created_at DESC
    LIMIT 10
  ) sub;

  -- Weak areas (accuracy < 60%, 3+ attempts)
  SELECT jsonb_agg(jsonb_build_object(
    'topic', topic, 'subskill', subskill,
    'accuracy', accuracy_percent, 'attempts', total_count
  )) INTO v_weak_areas
  FROM performance_snapshots
  WHERE user_id = v_user_id AND total_count >= 3 AND accuracy_percent < 60;

  -- Strong areas (accuracy >= 80%, 5+ attempts)
  SELECT jsonb_agg(jsonb_build_object(
    'topic', topic, 'subskill', subskill,
    'accuracy', accuracy_percent, 'streak', best_streak
  )) INTO v_strong_areas
  FROM performance_snapshots
  WHERE user_id = v_user_id AND total_count >= 5 AND accuracy_percent >= 80;

  RETURN jsonb_build_object(
    'profile', jsonb_build_object(
      'country', COALESCE(v_profile.country, 'HU'),
      'grade', COALESCE(v_profile.grade, 5),
      'stars', COALESCE(v_profile.stars, 0),
      'xp', COALESCE(v_profile.xp, 0)
    ),
    'streak', jsonb_build_object(
      'current', COALESCE(v_streak.current_streak, 0),
      'best', COALESCE(v_streak.best_streak, 0),
      'tests_completed', COALESCE(v_streak.total_tests_completed, 0)
    ),
    'recent_tests', COALESCE(v_recent_tests, '[]'::JSONB),
    'weak_areas', COALESCE(v_weak_areas, '[]'::JSONB),
    'strong_areas', COALESCE(v_strong_areas, '[]'::JSONB)
  );
END;
$$;

-- ──────────────────────────────────────────────────────────────────────────────
-- 2. FIX: submit_test – auto-create user_profiles & user_streaks if missing
-- ──────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION submit_test(
  p_test_id UUID,
  p_answers JSONB
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

    v_item_id := v_test.item_ids[v_idx + 1]; -- PostgreSQL arrays are 1-indexed

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

  -- ─── Calculate percentage ────────────────────────────────────
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

  v_xp := v_total_score * 10; -- 10 XP per correct answer

  -- ─── Ensure user_streaks row exists ────────────────────────────
  INSERT INTO user_streaks (user_id)
  VALUES (v_user_id)
  ON CONFLICT (user_id) DO NOTHING;

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

  -- ─── Update test instance ───────────────────────────────────
  UPDATE test_instances SET
    status = 'completed',
    score = v_total_score,
    max_score = v_max_score,
    percentage = v_percentage,
    total_time_sec = v_total_time,
    topic_breakdown = v_topic_breakdown,
    cognitive_breakdown = v_cognitive_breakdown,
    stars_earned = v_stars,
    xp_earned = v_xp,
    is_first_attempt = v_is_first,
    completed_at = NOW()
  WHERE id = p_test_id;

  -- ─── Update user profile (stars + XP) – auto-create if missing ─
  INSERT INTO user_profiles (id, stars, xp)
  VALUES (v_user_id, v_stars, v_xp)
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
    total_stars_earned = total_stars_earned + v_stars,
    total_xp_earned = total_xp_earned + v_xp,
    stars_earned_today = stars_earned_today + v_stars
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
    'stars_earned', v_stars,
    'xp_earned', v_xp,
    'is_first_attempt', v_is_first
  );
END;
$$;
