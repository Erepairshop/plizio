-- ============================================================================
-- PLIZIO ASSESSMENT ENGINE – RLS POLICIES
-- ============================================================================
-- Security principle: Users can only access their own data.
-- solution_json is NEVER accessible from the client.
-- Grading happens server-side via RPC (service_role).
-- ============================================================================

-- ─── ENABLE RLS ON ALL TABLES ──────────────────────────────────────────────────

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blueprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_weeks ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE star_transactions ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- COLUMN-LEVEL SECURITY: Revoke solution_json from client
-- ============================================================================
-- This is the most critical security measure.
-- Even if RLS allows reading items, the client CANNOT see solutions.
-- Grading must go through server-side RPC using service_role.
-- ============================================================================

-- Revoke all default access, then grant back everything EXCEPT solution_json
REVOKE ALL ON items FROM authenticated;
REVOKE ALL ON items FROM anon;

GRANT SELECT (
  id, country, grade, subject, topic, subskill,
  difficulty, cognitive_level, calculator_allowed,
  estimated_time_sec, max_points, question_type,
  exam_tags, content_json, generator_key, is_generated,
  usage_count, correct_rate, created_at, updated_at
) ON items TO authenticated;

-- anon gets read access to items_public view only (for demo/preview)
GRANT SELECT ON items_public TO anon;
GRANT SELECT ON items_public TO authenticated;

-- ============================================================================
-- 1. USER PROFILES
-- ============================================================================

-- Users can read and update their own profile
CREATE POLICY "users_read_own_profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "users_update_own_profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

CREATE POLICY "users_insert_own_profile"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());

-- ============================================================================
-- 2. ITEMS
-- ============================================================================
-- All authenticated users can READ items (minus solution_json via column grant).
-- Only service_role can INSERT/UPDATE/DELETE items.

CREATE POLICY "anyone_can_read_items"
  ON items FOR SELECT
  TO authenticated
  USING (TRUE);

-- No INSERT/UPDATE/DELETE policies for authenticated = only service_role can modify

-- ============================================================================
-- 3. BLUEPRINTS
-- ============================================================================
-- Blueprints are templates, everyone can read active ones.
-- Only service_role can create/modify.

CREATE POLICY "anyone_can_read_active_blueprints"
  ON blueprints FOR SELECT
  TO authenticated
  USING (is_active = TRUE);

-- Anon can also read (for preview before login)
CREATE POLICY "anon_can_read_active_blueprints"
  ON blueprints FOR SELECT
  TO anon
  USING (is_active = TRUE);

-- ============================================================================
-- 4. CURRICULUM WEEKS
-- ============================================================================
-- Everyone can read curriculum (it's public knowledge).

CREATE POLICY "anyone_can_read_curriculum"
  ON curriculum_weeks FOR SELECT
  TO authenticated
  USING (TRUE);

CREATE POLICY "anon_can_read_curriculum"
  ON curriculum_weeks FOR SELECT
  TO anon
  USING (TRUE);

-- ============================================================================
-- 5. TEST INSTANCES
-- ============================================================================
-- Users can only see and interact with their own test instances.

CREATE POLICY "users_read_own_tests"
  ON test_instances FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "users_create_own_tests"
  ON test_instances FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Users can update their own tests (start test, update status)
-- But actual grading/scoring goes through RPC with service_role
CREATE POLICY "users_update_own_tests"
  ON test_instances FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- ============================================================================
-- 6. USER ANSWERS
-- ============================================================================
-- Users can only submit and view their own answers.
-- Answers can only be inserted, never updated (immutable after submission).

CREATE POLICY "users_read_own_answers"
  ON user_answers FOR SELECT
  TO authenticated
  USING (
    test_instance_id IN (
      SELECT id FROM test_instances WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "users_submit_own_answers"
  ON user_answers FOR INSERT
  TO authenticated
  WITH CHECK (
    test_instance_id IN (
      SELECT id FROM test_instances
      WHERE user_id = auth.uid()
        AND status IN ('generated', 'in_progress')
    )
  );

-- No UPDATE policy = answers are immutable once submitted

-- ============================================================================
-- 7. PERFORMANCE SNAPSHOTS
-- ============================================================================
-- Users can only read their own performance.
-- Updates happen through server-side RPC only.

CREATE POLICY "users_read_own_performance"
  ON performance_snapshots FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- No INSERT/UPDATE for authenticated = service_role only (via RPC)

-- ============================================================================
-- 8. USER STREAKS
-- ============================================================================

CREATE POLICY "users_read_own_streaks"
  ON user_streaks FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- No INSERT/UPDATE for authenticated = service_role only (via RPC)

-- ============================================================================
-- 9. STAR TRANSACTIONS
-- ============================================================================

CREATE POLICY "users_read_own_transactions"
  ON star_transactions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- No INSERT for authenticated = service_role only (via RPC)

-- ============================================================================
-- 10. VIEWS – Grant access
-- ============================================================================

GRANT SELECT ON user_performance_summary TO authenticated;
GRANT SELECT ON user_weak_areas TO authenticated;

-- Views inherit RLS from underlying tables, but add explicit security:
-- user_performance_summary and user_weak_areas filter by user_id in their
-- base table (performance_snapshots) which has RLS, so users only see own data.

-- ============================================================================
-- SECURITY SUMMARY
-- ============================================================================
--
-- ┌──────────────────────┬──────────┬──────────┬──────────┬──────────┐
-- │ Table                │ SELECT   │ INSERT   │ UPDATE   │ DELETE   │
-- ├──────────────────────┼──────────┼──────────┼──────────┼──────────┤
-- │ user_profiles        │ own      │ own      │ own      │ -        │
-- │ items                │ all*     │ service  │ service  │ service  │
-- │ blueprints           │ active   │ service  │ service  │ service  │
-- │ curriculum_weeks     │ all      │ service  │ service  │ service  │
-- │ test_instances       │ own      │ own      │ own      │ -        │
-- │ user_answers         │ own      │ own**    │ -        │ -        │
-- │ performance_snapshots│ own      │ service  │ service  │ service  │
-- │ user_streaks         │ own      │ service  │ service  │ service  │
-- │ star_transactions    │ own      │ service  │ service  │ service  │
-- └──────────────────────┴──────────┴──────────┴──────────┴──────────┘
--
-- * items: SELECT all BUT solution_json column is revoked
-- ** user_answers: INSERT only for own in-progress tests
-- service = only service_role (server-side RPC functions)
--
-- CRITICAL: solution_json is protected at COLUMN level.
-- Even admin dashboard queries won't leak it to the client.
-- ============================================================================
