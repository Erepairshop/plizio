-- ============================================================================
-- PLIZIO ASSESSMENT ENGINE – RPC FUNCTIONS
-- ============================================================================
-- Server-side logic. These run with elevated privileges (SECURITY DEFINER)
-- so they can read solution_json and update performance tables.
--
-- Frontend calls these via supabase.rpc('function_name', { params })
-- ============================================================================

-- ============================================================================
-- 1. INITIALIZE USER (called after sign-up)
-- ============================================================================
-- Creates user_profiles, user_streaks entries for a new user.

CREATE OR REPLACE FUNCTION initialize_user(
  p_country TEXT DEFAULT 'HU',
  p_grade INTEGER DEFAULT 1,
  p_display_name TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Create profile (ignore if exists)
  INSERT INTO user_profiles (id, country, grade, display_name)
  VALUES (v_user_id, p_country, p_grade, p_display_name)
  ON CONFLICT (id) DO UPDATE SET
    country = EXCLUDED.country,
    grade = EXCLUDED.grade,
    display_name = COALESCE(EXCLUDED.display_name, user_profiles.display_name);

  -- Create streak record
  INSERT INTO user_streaks (user_id)
  VALUES (v_user_id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN jsonb_build_object('success', TRUE, 'user_id', v_user_id);
END;
$$;

-- ============================================================================
-- 2. CREATE TEST INSTANCE
-- ============================================================================
-- Called by frontend after generating items client-side.
-- Stores the test instance and its items in the database.
-- Items are INSERT-ed (if new) or referenced (if existing).
--
-- This hybrid approach: frontend generates questions using TypeScript generators,
-- then sends them to Supabase for storage, tracking, and secure grading.

CREATE OR REPLACE FUNCTION create_test_instance(
  p_blueprint_id UUID,
  p_items JSONB            -- Array of item objects from frontend generators
  -- Each item: { country, grade, topic, subskill, difficulty, cognitive_level,
  --              calculator_allowed, estimated_time_sec, max_points, question_type,
  --              exam_tags, content_json, solution_json, generator_key }
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_item JSONB;
  v_item_id UUID;
  v_item_ids UUID[] := '{}';
  v_test_id UUID;
  v_blueprint blueprints%ROWTYPE;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Load blueprint (optional - can be NULL for free practice)
  IF p_blueprint_id IS NOT NULL THEN
    SELECT * INTO v_blueprint FROM blueprints WHERE id = p_blueprint_id AND is_active;
    IF NOT FOUND THEN
      RAISE EXCEPTION 'Blueprint not found or inactive';
    END IF;
  END IF;

  -- Insert each item into the items table and collect IDs
  FOR v_item IN SELECT * FROM jsonb_array_elements(p_items)
  LOOP
    INSERT INTO items (
      country, grade, subject, topic, subskill,
      difficulty, cognitive_level, calculator_allowed,
      estimated_time_sec, max_points, question_type,
      exam_tags, content_json, solution_json,
      generator_key, is_generated
    ) VALUES (
      v_item->>'country',
      (v_item->>'grade')::INTEGER,
      COALESCE(v_item->>'subject', 'math'),
      v_item->>'topic',
      v_item->>'subskill',
      (v_item->>'difficulty')::INTEGER,
      (v_item->>'cognitive_level')::INTEGER,
      COALESCE((v_item->>'calculator_allowed')::BOOLEAN, FALSE),
      COALESCE((v_item->>'estimated_time_sec')::INTEGER, 30),
      COALESCE((v_item->>'max_points')::INTEGER, 1),
      COALESCE((v_item->>'question_type')::question_type, 'multiple_choice'),
      COALESCE(ARRAY(SELECT jsonb_array_elements_text(v_item->'exam_tags')), '{}'),
      v_item->'content_json',
      v_item->'solution_json',
      v_item->>'generator_key',
      TRUE
    )
    RETURNING id INTO v_item_id;

    v_item_ids := v_item_ids || v_item_id;
  END LOOP;

  -- Create test instance
  INSERT INTO test_instances (blueprint_id, user_id, status, item_ids, max_score)
  VALUES (
    p_blueprint_id,
    v_user_id,
    'generated',
    v_item_ids,
    COALESCE(v_blueprint.total_points, jsonb_array_length(p_items))
  )
  RETURNING id INTO v_test_id;

  -- Return test ID + item IDs (without solutions!)
  RETURN jsonb_build_object(
    'test_id', v_test_id,
    'item_count', array_length(v_item_ids, 1),
    'status', 'generated'
  );
END;
$$;

-- ============================================================================
-- 3. GET TEST ITEMS (without solutions)
-- ============================================================================
-- Returns test items for display. Solutions are NEVER included.

CREATE OR REPLACE FUNCTION get_test_items(p_test_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_test test_instances%ROWTYPE;
  v_items JSONB;
BEGIN
  -- Verify ownership
  SELECT * INTO v_test FROM test_instances WHERE id = p_test_id AND user_id = v_user_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Test not found or not yours';
  END IF;

  -- Get items WITHOUT solution_json
  SELECT jsonb_agg(
    jsonb_build_object(
      'id', i.id,
      'topic', i.topic,
      'subskill', i.subskill,
      'difficulty', i.difficulty,
      'cognitive_level', i.cognitive_level,
      'calculator_allowed', i.calculator_allowed,
      'estimated_time_sec', i.estimated_time_sec,
      'max_points', i.max_points,
      'question_type', i.question_type,
      'content', i.content_json
    ) ORDER BY idx
  ) INTO v_items
  FROM unnest(v_test.item_ids) WITH ORDINALITY AS t(item_id, idx)
  JOIN items i ON i.id = t.item_id;

  RETURN jsonb_build_object(
    'test_id', v_test.id,
    'blueprint_id', v_test.blueprint_id,
    'status', v_test.status,
    'items', v_items,
    'section_map', v_test.section_map
  );
END;
$$;

-- ============================================================================
-- 4. START TEST (mark as in_progress)
-- ============================================================================

CREATE OR REPLACE FUNCTION start_test(p_test_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
BEGIN
  UPDATE test_instances
  SET status = 'in_progress', started_at = NOW()
  WHERE id = p_test_id
    AND user_id = v_user_id
    AND status = 'generated';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Cannot start test: not found, not yours, or already started';
  END IF;

  RETURN jsonb_build_object('success', TRUE, 'started_at', NOW());
END;
$$;

-- ============================================================================
-- 5. SUBMIT TEST (Grade + Update Performance)
-- ============================================================================
-- The most critical function. This is where grading happens SERVER-SIDE.
-- Solutions are read from the database, compared with answers, and results stored.

CREATE OR REPLACE FUNCTION submit_test(
  p_test_id UUID,
  p_answers JSONB
  -- Array of: { "question_index": 0, "answer": 42, "time_spent_sec": 15 }
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
        -- Simple mastery: weighted accuracy + consistency
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
  -- Based on Master Spec star economy
  IF v_blueprint.star_rewards IS NOT NULL AND v_blueprint.star_rewards != '{}' THEN
    -- Map percentage to grade, then to stars
    v_stars := CASE
      WHEN v_percentage >= 90 THEN COALESCE((v_blueprint.star_rewards->>'grade1')::INTEGER, 12)
      WHEN v_percentage >= 80 THEN COALESCE((v_blueprint.star_rewards->>'grade2')::INTEGER, 10)
      WHEN v_percentage >= 65 THEN COALESCE((v_blueprint.star_rewards->>'grade3')::INTEGER, 8)
      WHEN v_percentage >= 50 THEN COALESCE((v_blueprint.star_rewards->>'grade4')::INTEGER, 5)
      ELSE 0
    END;

    -- Perfect bonus
    IF v_percentage = 100 THEN
      v_stars := v_stars + COALESCE((v_blueprint.star_rewards->>'perfectBonus')::INTEGER, 3);
    END IF;

    -- Retry multiplier (half stars on second attempt)
    IF NOT v_is_first THEN
      v_stars := (v_stars * COALESCE((v_blueprint.star_rewards->>'retryMultiplier')::NUMERIC, 0.5))::INTEGER;
    END IF;
  ELSE
    -- Default: 1 star per correct answer
    v_stars := v_total_score;
  END IF;

  v_xp := v_total_score * 10; -- 10 XP per correct answer

  -- ─── Check daily star cap ────────────────────────────────────
  UPDATE user_streaks SET
    stars_earned_today = CASE
      WHEN today_date = CURRENT_DATE THEN stars_earned_today
      ELSE 0 -- reset if new day
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

    IF v_today_stars + v_stars > v_daily_cap THEN
      v_stars := GREATEST(0, v_daily_cap - v_today_stars);
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

  -- ─── Update user profile (stars + XP) ───────────────────────
  UPDATE user_profiles SET
    stars = stars + v_stars,
    xp = xp + v_xp
  WHERE id = v_user_id;

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

-- ============================================================================
-- 6. GET USER DASHBOARD
-- ============================================================================
-- Returns a summary of user's progress for the dashboard.

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
      'country', v_profile.country,
      'grade', v_profile.grade,
      'stars', v_profile.stars,
      'xp', v_profile.xp
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

-- ============================================================================
-- 7. GET RECOMMENDED BLUEPRINT
-- ============================================================================
-- Suggests a blueprint based on user's weak areas.
-- Adaptive-ready: this is where the adaptive engine will plug in.

CREATE OR REPLACE FUNCTION get_recommended_blueprint(
  p_grade INTEGER DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_profile user_profiles%ROWTYPE;
  v_grade INTEGER;
  v_weak_topics TEXT[];
  v_blueprint blueprints%ROWTYPE;
BEGIN
  SELECT * INTO v_profile FROM user_profiles WHERE id = v_user_id;
  v_grade := COALESCE(p_grade, v_profile.grade);

  -- Find weak topics
  SELECT array_agg(DISTINCT topic) INTO v_weak_topics
  FROM performance_snapshots
  WHERE user_id = v_user_id
    AND grade = v_grade
    AND total_count >= 3
    AND accuracy_percent < 60;

  -- Find matching blueprint (prefer practice type for weak areas)
  SELECT * INTO v_blueprint
  FROM blueprints
  WHERE country = v_profile.country
    AND grade = v_grade
    AND is_active = TRUE
  ORDER BY
    -- Prefer practice blueprints when user has weak areas
    CASE WHEN v_weak_topics IS NOT NULL AND test_type = 'practice' THEN 0 ELSE 1 END,
    created_at DESC
  LIMIT 1;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('found', FALSE, 'message', 'No blueprints available');
  END IF;

  RETURN jsonb_build_object(
    'found', TRUE,
    'blueprint_id', v_blueprint.id,
    'name', v_blueprint.name,
    'test_type', v_blueprint.test_type,
    'total_questions', v_blueprint.total_questions,
    'time_limit_sec', v_blueprint.time_limit_sec,
    'weak_topics', COALESCE(v_weak_topics, '{}')
  );
END;
$$;

-- ============================================================================
-- GRANT EXECUTE to authenticated users
-- ============================================================================

GRANT EXECUTE ON FUNCTION initialize_user TO authenticated;
GRANT EXECUTE ON FUNCTION create_test_instance TO authenticated;
GRANT EXECUTE ON FUNCTION get_test_items TO authenticated;
GRANT EXECUTE ON FUNCTION start_test TO authenticated;
GRANT EXECUTE ON FUNCTION submit_test TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_dashboard TO authenticated;
GRANT EXECUTE ON FUNCTION get_recommended_blueprint TO authenticated;

-- ============================================================================
-- RPC FUNCTIONS COMPLETE
-- ============================================================================
-- Flow:
-- 1. User signs up → initialize_user()
-- 2. User starts test → frontend generates items → create_test_instance()
-- 3. Show test → get_test_items() (no solutions!)
-- 4. User clicks start → start_test()
-- 5. User submits → submit_test() (grading happens SERVER-SIDE)
-- 6. Dashboard → get_user_dashboard()
-- 7. Recommendations → get_recommended_blueprint()
-- ============================================================================
