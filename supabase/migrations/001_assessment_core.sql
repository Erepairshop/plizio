-- ============================================================================
-- PLIZIO ASSESSMENT ENGINE – CORE SCHEMA
-- ============================================================================
-- Supabase / PostgreSQL migration
-- Supports: HU, DE, GB, US, RO (multi-country)
-- Aligned with: OKM, VERA 3/8, SATs KS1/KS2, PARCC/SBAC, Evaluare Națională
-- Architecture: Blueprint-driven, Item-bank based, Adaptive-ready
-- ============================================================================

-- ─── EXTENSIONS ────────────────────────────────────────────────────────────────

CREATE EXTENSION IF NOT EXISTS "pgcrypto";      -- gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pg_trgm";       -- future: fuzzy text search on items

-- ─── CUSTOM TYPES ──────────────────────────────────────────────────────────────

CREATE TYPE question_type AS ENUM (
  'multiple_choice',    -- 4 options, 1 correct (current system)
  'multi_select',       -- multiple correct (US SBAC style)
  'numeric',            -- free numeric input
  'short_text',         -- short constructed response
  'extended_response',  -- multi-step open answer (future)
  'equation'            -- equation builder (future)
);

CREATE TYPE test_status AS ENUM (
  'generated',          -- test created, not started
  'in_progress',        -- student working on it
  'completed',          -- submitted and graded
  'abandoned'           -- started but never finished
);

CREATE TYPE test_type AS ENUM (
  'practice',           -- unlimited, no stakes
  'mini_test',          -- 10-15 min weekly test
  'klassenarbeit',      -- 30-45 min monthly test (DE: Klassenarbeit)
  'national_sim'        -- national assessment simulation (OKM/VERA/SATs/SBAC)
);

CREATE TYPE calculator_policy AS ENUM (
  'none',               -- no calculator allowed
  'partial',            -- some sections allow it
  'full'                -- calculator throughout
);

CREATE TYPE week_type AS ENUM (
  'introduction',       -- Week 1: new concept
  'consolidation',      -- Week 2: deepening + word problems
  'application',        -- Week 3: geometry/measurement + review
  'assessment'          -- Week 4: mixed practice + mini-test + Klassenarbeit
);

-- ─── HELPER: auto-update updated_at ────────────────────────────────────────────

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- 1. USER PROFILES (extends Supabase auth.users)
-- ============================================================================

CREATE TABLE user_profiles (
  id             UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name   TEXT,
  avatar_url     TEXT,
  country        TEXT NOT NULL DEFAULT 'HU',
  grade          INTEGER NOT NULL DEFAULT 1 CHECK (grade BETWEEN 1 AND 13),
  stars          INTEGER NOT NULL DEFAULT 0 CHECK (stars >= 0),
  xp             INTEGER NOT NULL DEFAULT 0 CHECK (xp >= 0),
  preferences    JSONB NOT NULL DEFAULT '{}',
  -- preferences example: { "language": "HU", "theme": "light", "avatarSkin": "default" }
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE INDEX idx_user_profiles_country ON user_profiles(country);
CREATE INDEX idx_user_profiles_grade ON user_profiles(grade);

-- ============================================================================
-- 2. ITEMS (Question Bank)
-- ============================================================================
-- The heart of the system. Each row = one question with full metadata.
-- content_json: what the student sees (question text, options)
-- solution_json: the answer (NEVER exposed to client!)
-- ============================================================================

CREATE TABLE items (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- ─── Classification ──────────────────────────────────
  country             TEXT NOT NULL,                              -- ISO: HU, DE, GB, US, RO
  grade               INTEGER NOT NULL CHECK (grade BETWEEN 1 AND 13),
  subject             TEXT NOT NULL DEFAULT 'math',
  topic               TEXT NOT NULL,                              -- e.g. "addition", "fractions"
  subskill            TEXT NOT NULL,                              -- e.g. "add_within_20", "fraction_add_same_denom"

  -- ─── Difficulty & Cognitive Level ────────────────────
  difficulty          INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
  -- 1=very easy, 2=easy, 3=medium, 4=hard, 5=very hard
  -- Maps to: 1-2=Basic(30%), 3=Medium(45%), 4-5=Advanced(25%)

  cognitive_level     INTEGER NOT NULL CHECK (cognitive_level BETWEEN 1 AND 3),
  -- 1 = Reproduktion / Recall / Felidézés
  -- 2 = Zusammenhänge / Application / Alkalmazás
  -- 3 = Verallgemeinern / Reasoning / Gondolkodás

  -- ─── Test Constraints ────────────────────────────────
  calculator_allowed  BOOLEAN NOT NULL DEFAULT FALSE,
  estimated_time_sec  INTEGER NOT NULL DEFAULT 30 CHECK (estimated_time_sec > 0),
  max_points          INTEGER NOT NULL DEFAULT 1 CHECK (max_points > 0),

  -- ─── Question Format ─────────────────────────────────
  question_type       question_type NOT NULL DEFAULT 'multiple_choice',

  -- ─── Exam Tags (which national assessments this fits) ─
  exam_tags           TEXT[] NOT NULL DEFAULT '{}',
  -- Examples: 'OKM', 'felveteli', 'VERA3', 'VERA8', 'MSA',
  --           'SATs_KS1', 'SATs_KS2', 'PARCC', 'SBAC',
  --           'evaluare_nationala', 'practice'

  -- ─── Content (what student sees) ─────────────────────
  content_json        JSONB NOT NULL,
  -- Structure:
  -- {
  --   "questionText": "Számold ki: 24 + 18 = ?",
  --   "options": [42, 38, 44, 36],        -- for multiple_choice
  --   "isWordProblem": false,
  --   "section": "kopfrechnen",            -- optional: test section hint
  --   "imageUrl": null                     -- future: diagram/graph
  -- }

  -- ─── Solution (NEVER sent to client) ─────────────────
  solution_json       JSONB NOT NULL,
  -- Structure:
  -- {
  --   "correctAnswer": 42,
  --   "correctOptions": [42],              -- for multi_select: [a, b]
  --   "explanation": "24 + 18 = 42",       -- future: step-by-step
  --   "rubric": null                       -- future: partial scoring guide
  -- }

  -- ─── Item Calibration (adaptive-ready) ───────────────
  generator_key       TEXT,                  -- which code generator created this
  is_generated        BOOLEAN NOT NULL DEFAULT TRUE,  -- dynamic vs hand-crafted
  usage_count         INTEGER NOT NULL DEFAULT 0,
  correct_rate        NUMERIC(5,4),          -- observed P(correct), NULL = uncalibrated
  irt_difficulty      NUMERIC(6,3),          -- future: IRT b-parameter
  irt_discrimination  NUMERIC(6,3),          -- future: IRT a-parameter

  -- ─── Timestamps ──────────────────────────────────────
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER items_updated_at
  BEFORE UPDATE ON items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── ITEM INDEXES ──────────────────────────────────────────────────────────────
-- Primary query pattern: SELECT by country+grade+subject, then filter by topic/difficulty

CREATE INDEX idx_items_country_grade_subject ON items(country, grade, subject);
CREATE INDEX idx_items_topic ON items(topic);
CREATE INDEX idx_items_subskill ON items(subskill);
CREATE INDEX idx_items_difficulty_cognitive ON items(difficulty, cognitive_level);
CREATE INDEX idx_items_exam_tags ON items USING GIN(exam_tags);
CREATE INDEX idx_items_generator_key ON items(generator_key) WHERE generator_key IS NOT NULL;
CREATE INDEX idx_items_question_type ON items(question_type);

-- ============================================================================
-- 3. BLUEPRINTS (Test Templates / Rules)
-- ============================================================================
-- Defines HOW to build a test. Every test is generated from a blueprint.
-- Blueprint-driven = no hardcoded country logic anywhere.
-- ============================================================================

CREATE TABLE blueprints (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- ─── Scope ───────────────────────────────────────────
  country                 TEXT NOT NULL,
  grade                   INTEGER NOT NULL CHECK (grade BETWEEN 1 AND 13),
  subject                 TEXT NOT NULL DEFAULT 'math',
  test_type               test_type NOT NULL DEFAULT 'practice',
  exam_type               TEXT NOT NULL DEFAULT 'practice',
  -- exam_type examples: 'practice', 'OKM', 'felveteli', 'VERA3', 'VERA8',
  --                     'MSA', 'SATs_KS1', 'SATs_KS2', 'PARCC', 'SBAC',
  --                     'evaluare_nationala', 'klassenarbeit'

  -- ─── Display ─────────────────────────────────────────
  name                    TEXT NOT NULL,
  description             TEXT,

  -- ─── Structure ───────────────────────────────────────
  total_questions         INTEGER NOT NULL DEFAULT 10 CHECK (total_questions > 0),
  total_points            INTEGER NOT NULL DEFAULT 10 CHECK (total_points > 0),
  time_limit_sec          INTEGER NOT NULL DEFAULT 600 CHECK (time_limit_sec > 0),
  -- Mini-Test: 600-900s (10-15 min)
  -- Klassenarbeit: 1800-2700s (30-45 min)
  -- National sim: 2700-5400s (45-90 min)

  calculator_policy       calculator_policy NOT NULL DEFAULT 'none',

  -- ─── Distribution Rules ──────────────────────────────
  difficulty_distribution JSONB NOT NULL DEFAULT '{"1":1,"2":3,"3":3,"4":2,"5":1}',
  -- How many questions per difficulty level
  -- Basic(1-2)=40%, Medium(3)=30%, Advanced(4-5)=30%

  cognitive_distribution  JSONB NOT NULL DEFAULT '{"1":4,"2":4,"3":2}',
  -- Matches all countries: ~40% recall, ~40% apply, ~20% reason

  topic_distribution      JSONB NOT NULL DEFAULT '{}',
  -- Example for Klassenarbeit:
  -- { "kopfrechnen": 4, "schriftlich": 4, "sachaufgaben": 4,
  --   "masseinheiten": 2, "geometrie": 2, "bonus": 1 }
  -- Empty = auto-distribute based on curriculum

  -- ─── Sections (for structured tests) ─────────────────
  sections                JSONB NOT NULL DEFAULT '[]',
  -- Array of sections, each with own rules:
  -- [
  --   { "name": "Kopfrechnen", "questions": 5, "points": 5,
  --     "calculator": false, "timeLimit": 300 },
  --   { "name": "Schriftlich rechnen", "questions": 4, "points": 8,
  --     "calculator": false },
  --   { "name": "Sachaufgaben", "questions": 3, "points": 9,
  --     "calculator": false },
  --   { "name": "Geometrie", "questions": 2, "points": 4 },
  --   { "name": "Bonus", "questions": 1, "points": 3 }
  -- ]

  -- ─── Topic Mix ───────────────────────────────────────
  current_topic_ratio     NUMERIC(3,2) NOT NULL DEFAULT 0.70,
  -- 70% current period topics, 30% review

  -- ─── Constraints ─────────────────────────────────────
  constraints             JSONB NOT NULL DEFAULT '{}',
  -- Future: { "noRepeatItems": true, "minWordProblems": 3,
  --           "requireReasoningTask": true }

  -- ─── Reward Rules ────────────────────────────────────
  star_rewards            JSONB NOT NULL DEFAULT '{}',
  -- From Master Spec:
  -- { "grade1": 12, "grade2": 10, "grade3": 8, "grade4": 5,
  --   "perfectBonus": 3, "monthCompletion": 3,
  --   "retryMultiplier": 0.5, "dailyCap": 30 }

  -- ─── Status ──────────────────────────────────────────
  is_active               BOOLEAN NOT NULL DEFAULT TRUE,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_blueprints_country_grade ON blueprints(country, grade);
CREATE INDEX idx_blueprints_exam_type ON blueprints(exam_type);
CREATE INDEX idx_blueprints_test_type ON blueprints(test_type);
CREATE INDEX idx_blueprints_active ON blueprints(is_active) WHERE is_active = TRUE;

-- ============================================================================
-- 4. CURRICULUM WEEKS (Weekly Progression)
-- ============================================================================
-- Stores the weekly curriculum from the docs.
-- Used to determine which topics are "current" for a given week.
-- ============================================================================

CREATE TABLE curriculum_weeks (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country         TEXT NOT NULL,
  grade           INTEGER NOT NULL CHECK (grade BETWEEN 1 AND 13),
  subject         TEXT NOT NULL DEFAULT 'math',
  month           INTEGER NOT NULL CHECK (month BETWEEN 1 AND 12),
  -- 1=Jan ... 9=Sep ... 12=Dec
  week            INTEGER NOT NULL CHECK (week BETWEEN 1 AND 5),
  week_type       week_type NOT NULL,

  -- ─── Content covered this week ───────────────────────
  topics          TEXT[] NOT NULL DEFAULT '{}',
  -- e.g. ['addition', 'subtraction', 'place_value']

  subskills       TEXT[] NOT NULL DEFAULT '{}',
  -- e.g. ['add_within_1000', 'sub_with_borrow', 'place_value_hundreds']

  description     TEXT,
  -- Human-readable: "Összeadás 100-ig tízes átlépéssel"

  -- ─── Cumulative Coverage ─────────────────────────────
  cumulative_topics    TEXT[] NOT NULL DEFAULT '{}',
  -- All topics covered so far this year (for "only test what's been taught" rule)

  cumulative_subskills TEXT[] NOT NULL DEFAULT '{}',
  -- All subskills covered so far

  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  UNIQUE(country, grade, subject, month, week)
);

CREATE INDEX idx_curriculum_country_grade ON curriculum_weeks(country, grade, subject);
CREATE INDEX idx_curriculum_month_week ON curriculum_weeks(month, week);
CREATE INDEX idx_curriculum_topics ON curriculum_weeks USING GIN(topics);
CREATE INDEX idx_curriculum_cumulative ON curriculum_weeks USING GIN(cumulative_topics);

-- ============================================================================
-- 5. TEST INSTANCES (Generated Tests)
-- ============================================================================

CREATE TABLE test_instances (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blueprint_id    UUID REFERENCES blueprints(id),
  user_id         UUID NOT NULL REFERENCES auth.users(id),

  -- ─── Status ──────────────────────────────────────────
  status          test_status NOT NULL DEFAULT 'generated',

  -- ─── Content ─────────────────────────────────────────
  item_ids        UUID[] NOT NULL,                   -- ordered array of item IDs
  section_map     JSONB NOT NULL DEFAULT '{}',       -- { "Kopfrechnen": [0,1,2,3,4], "Schriftlich": [5,6,7,8] }

  -- ─── Results (filled on completion) ──────────────────
  score           INTEGER,
  max_score       INTEGER,
  percentage      NUMERIC(5,2),
  total_time_sec  INTEGER,
  topic_breakdown JSONB,
  -- { "addition": { "correct": 3, "total": 4 },
  --   "subtraction": { "correct": 2, "total": 3 } }

  cognitive_breakdown JSONB,
  -- { "1": { "correct": 4, "total": 4 },
  --   "2": { "correct": 3, "total": 4 },
  --   "3": { "correct": 1, "total": 2 } }

  -- ─── Rewards ─────────────────────────────────────────
  stars_earned    INTEGER DEFAULT 0,
  xp_earned       INTEGER DEFAULT 0,
  is_first_attempt BOOLEAN DEFAULT TRUE,

  -- ─── Timestamps ──────────────────────────────────────
  started_at      TIMESTAMPTZ,
  completed_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_test_instances_user ON test_instances(user_id);
CREATE INDEX idx_test_instances_user_status ON test_instances(user_id, status);
CREATE INDEX idx_test_instances_blueprint ON test_instances(blueprint_id);
CREATE INDEX idx_test_instances_created ON test_instances(created_at DESC);

-- ============================================================================
-- 6. USER ANSWERS (Individual Responses)
-- ============================================================================

CREATE TABLE user_answers (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_instance_id    UUID NOT NULL REFERENCES test_instances(id) ON DELETE CASCADE,
  item_id             UUID NOT NULL REFERENCES items(id),
  question_index      INTEGER NOT NULL,              -- position in test (0-based)

  -- ─── Response ────────────────────────────────────────
  answer_json         JSONB NOT NULL,
  -- { "selected": 42 }                  -- multiple_choice
  -- { "selectedOptions": [42, 17] }     -- multi_select
  -- { "numericAnswer": 42 }             -- numeric
  -- { "textAnswer": "..." }             -- short_text

  -- ─── Grading (filled server-side) ───────────────────
  is_correct          BOOLEAN,
  points_awarded      INTEGER DEFAULT 0,
  time_spent_sec      INTEGER,

  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_user_answers_test ON user_answers(test_instance_id);
CREATE INDEX idx_user_answers_item ON user_answers(item_id);
CREATE UNIQUE INDEX idx_user_answers_unique ON user_answers(test_instance_id, question_index);

-- ============================================================================
-- 7. PERFORMANCE SNAPSHOTS (Aggregated Per Subskill)
-- ============================================================================
-- One row per user + grade + topic + subskill.
-- This is the data source for the adaptive engine.
-- ============================================================================

CREATE TABLE performance_snapshots (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  country           TEXT NOT NULL,
  grade             INTEGER NOT NULL,
  subject           TEXT NOT NULL DEFAULT 'math',
  topic             TEXT NOT NULL,
  subskill          TEXT NOT NULL,

  -- ─── Accuracy ────────────────────────────────────────
  correct_count     INTEGER NOT NULL DEFAULT 0,
  total_count       INTEGER NOT NULL DEFAULT 0,
  accuracy_percent  NUMERIC(5,2),                    -- calculated: correct/total * 100

  -- ─── Timing ──────────────────────────────────────────
  avg_time_sec      NUMERIC(7,2),

  -- ─── Streaks ─────────────────────────────────────────
  current_streak    INTEGER NOT NULL DEFAULT 0,      -- consecutive correct
  best_streak       INTEGER NOT NULL DEFAULT 0,

  -- ─── Adaptive-Ready Fields ───────────────────────────
  mastery_level     NUMERIC(5,4),                    -- 0.0 to 1.0, NULL = not enough data
  -- Calculated from accuracy + recency + consistency
  -- Used by future adaptive engine to select difficulty

  ability_estimate  NUMERIC(6,3),                    -- future: IRT theta parameter
  confidence        NUMERIC(5,4),                    -- future: how certain we are of ability

  last_attempt_at   TIMESTAMPTZ,
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  UNIQUE(user_id, grade, subject, topic, subskill)
);

CREATE TRIGGER performance_snapshots_updated_at
  BEFORE UPDATE ON performance_snapshots
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE INDEX idx_perf_user_grade ON performance_snapshots(user_id, grade, subject);
CREATE INDEX idx_perf_user_topic ON performance_snapshots(user_id, topic);
CREATE INDEX idx_perf_mastery ON performance_snapshots(mastery_level) WHERE mastery_level IS NOT NULL;
CREATE INDEX idx_perf_accuracy ON performance_snapshots(accuracy_percent);

-- ============================================================================
-- 8. USER STREAKS & ENGAGEMENT
-- ============================================================================

CREATE TABLE user_streaks (
  user_id               UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak        INTEGER NOT NULL DEFAULT 0,
  best_streak           INTEGER NOT NULL DEFAULT 0,
  last_activity_date    DATE,

  total_tests_completed INTEGER NOT NULL DEFAULT 0,
  total_time_spent_sec  INTEGER NOT NULL DEFAULT 0,
  total_stars_earned    INTEGER NOT NULL DEFAULT 0,
  total_xp_earned       INTEGER NOT NULL DEFAULT 0,

  -- ─── Daily Limits (from Master Spec) ─────────────────
  stars_earned_today    INTEGER NOT NULL DEFAULT 0,
  today_date            DATE,                          -- reset when date changes

  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER user_streaks_updated_at
  BEFORE UPDATE ON user_streaks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================================
-- 9. STAR TRANSACTIONS (Economy Audit Trail)
-- ============================================================================

CREATE TABLE star_transactions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount          INTEGER NOT NULL,                  -- positive = earned, negative = spent
  reason          TEXT NOT NULL,
  -- Reasons: 'test_grade_1', 'test_grade_2', ..., 'perfect_bonus',
  --          'month_completion', 'shop_purchase', 'daily_bonus'
  reference_id    UUID,                              -- test_instance_id or shop item
  balance_after   INTEGER NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_star_tx_user ON star_transactions(user_id, created_at DESC);

-- ============================================================================
-- 10. VIEWS
-- ============================================================================

-- Public item view: everything EXCEPT solution_json
-- Use this for client-side queries
CREATE VIEW items_public AS
SELECT
  id, country, grade, subject, topic, subskill,
  difficulty, cognitive_level, calculator_allowed,
  estimated_time_sec, max_points, question_type,
  exam_tags, content_json, generator_key, is_generated,
  created_at
FROM items;

-- User performance summary view
CREATE VIEW user_performance_summary AS
SELECT
  ps.user_id,
  ps.grade,
  ps.subject,
  ps.topic,
  ps.subskill,
  ps.accuracy_percent,
  ps.avg_time_sec,
  ps.current_streak,
  ps.mastery_level,
  ps.total_count,
  ps.last_attempt_at,
  CASE
    WHEN ps.accuracy_percent >= 80 AND ps.total_count >= 5 THEN 'mastered'
    WHEN ps.accuracy_percent >= 60 AND ps.total_count >= 3 THEN 'progressing'
    WHEN ps.total_count >= 3 THEN 'struggling'
    ELSE 'new'
  END AS status
FROM performance_snapshots ps;

-- Weak areas view (accuracy < 60% after 3+ attempts)
CREATE VIEW user_weak_areas AS
SELECT
  user_id, grade, subject, topic, subskill,
  accuracy_percent, total_count, last_attempt_at
FROM performance_snapshots
WHERE total_count >= 3
  AND accuracy_percent < 60
ORDER BY accuracy_percent ASC;


-- ============================================================================
-- SCHEMA COMPLETE
-- ============================================================================
-- Next migration: 002_rls_policies.sql
-- Next migration: 003_rpc_functions.sql
-- ============================================================================
