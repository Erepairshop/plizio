-- ============================================================
-- Migration 008: Multi-Country Curriculum System
-- ============================================================
-- Adds normalized curriculum tables for scalable, country-independent
-- topic/skill management. Extends items with optional FK references.
-- ============================================================

-- ─── 1. COUNTRIES ─────────────────────────────────────────────
CREATE TABLE countries (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code        TEXT NOT NULL UNIQUE,          -- 'HU', 'DE', 'GB', 'US', 'RO'
  name        TEXT NOT NULL,                 -- 'Magyarország', 'Deutschland', ...
  flag        TEXT NOT NULL DEFAULT '',      -- emoji flag
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── 2. GRADES ────────────────────────────────────────────────
CREATE TABLE grades (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country_id    UUID NOT NULL REFERENCES countries(id) ON DELETE CASCADE,
  grade_number  INTEGER NOT NULL CHECK (grade_number BETWEEN 1 AND 13),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(country_id, grade_number)
);

CREATE INDEX idx_grades_country ON grades(country_id);

-- ─── 3. SUBJECTS ──────────────────────────────────────────────
CREATE TABLE subjects (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL UNIQUE,          -- 'math', 'physics', ...
  label       TEXT NOT NULL DEFAULT '',      -- display name: 'Mathematik'
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── 4. CURRICULUM TOPICS (hierarchical) ──────────────────────
CREATE TABLE curriculum_topics (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  grade_id      UUID NOT NULL REFERENCES grades(id) ON DELETE CASCADE,
  subject_id    UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  parent_id     UUID REFERENCES curriculum_topics(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,
  slug          TEXT NOT NULL,
  icon          TEXT NOT NULL DEFAULT '',
  color         TEXT NOT NULL DEFAULT '#3b82f6',
  description   TEXT NOT NULL DEFAULT '',
  order_index   INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_topics_grade      ON curriculum_topics(grade_id);
CREATE INDEX idx_topics_subject    ON curriculum_topics(subject_id);
CREATE INDEX idx_topics_parent     ON curriculum_topics(parent_id);
CREATE INDEX idx_topics_slug       ON curriculum_topics(slug);
CREATE INDEX idx_topics_order      ON curriculum_topics(grade_id, subject_id, order_index);

CREATE TRIGGER curriculum_topics_updated_at
  BEFORE UPDATE ON curriculum_topics
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── 5. CURRICULUM SKILLS ─────────────────────────────────────
CREATE TABLE curriculum_skills (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id      UUID NOT NULL REFERENCES curriculum_topics(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,
  difficulty    INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
  description   TEXT NOT NULL DEFAULT '',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_skills_topic      ON curriculum_skills(topic_id);
CREATE INDEX idx_skills_difficulty  ON curriculum_skills(difficulty);

-- ─── 6. EXTEND ITEMS TABLE ────────────────────────────────────
-- Add optional FK references (nullable for backwards compat)

ALTER TABLE items ADD COLUMN IF NOT EXISTS country_id UUID REFERENCES countries(id);
ALTER TABLE items ADD COLUMN IF NOT EXISTS grade_id   UUID REFERENCES grades(id);
ALTER TABLE items ADD COLUMN IF NOT EXISTS topic_id   UUID REFERENCES curriculum_topics(id);
ALTER TABLE items ADD COLUMN IF NOT EXISTS skill_id   UUID REFERENCES curriculum_skills(id);

CREATE INDEX idx_items_country_id ON items(country_id);
CREATE INDEX idx_items_grade_id   ON items(grade_id);
CREATE INDEX idx_items_topic_id   ON items(topic_id);
CREATE INDEX idx_items_skill_id   ON items(skill_id);

-- ─── 7. UPDATE items_public VIEW ──────────────────────────────
-- Add new FK columns to the public view (solution_json still hidden)
DROP VIEW IF EXISTS items_public;
CREATE VIEW items_public AS
SELECT
  id, country, grade, subject, topic, subskill,
  difficulty, cognitive_level, calculator_allowed,
  estimated_time_sec, max_points, question_type,
  exam_tags, content_json, generator_key, is_generated,
  country_id, grade_id, topic_id, skill_id,
  created_at
FROM items;

-- ─── 8. UPDATE COLUMN GRANTS ─────────────────────────────────
-- Re-grant SELECT including new columns (still excluding solution_json)
GRANT SELECT (
  id, country, grade, subject, topic, subskill,
  difficulty, cognitive_level, calculator_allowed,
  estimated_time_sec, max_points, question_type,
  exam_tags, content_json, generator_key, is_generated,
  usage_count, correct_rate, created_at, updated_at,
  country_id, grade_id, topic_id, skill_id
) ON items TO authenticated;

-- ─── 9. ROW LEVEL SECURITY ───────────────────────────────────
ALTER TABLE countries         ENABLE ROW LEVEL SECURITY;
ALTER TABLE grades            ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects          ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_skills ENABLE ROW LEVEL SECURITY;

-- Read-only for authenticated users
CREATE POLICY "countries_select_authenticated"
  ON countries FOR SELECT TO authenticated USING (true);
CREATE POLICY "grades_select_authenticated"
  ON grades FOR SELECT TO authenticated USING (true);
CREATE POLICY "subjects_select_authenticated"
  ON subjects FOR SELECT TO authenticated USING (true);
CREATE POLICY "topics_select_authenticated"
  ON curriculum_topics FOR SELECT TO authenticated USING (true);
CREATE POLICY "skills_select_authenticated"
  ON curriculum_skills FOR SELECT TO authenticated USING (true);

-- Anon access (guest mode)
CREATE POLICY "countries_select_anon"
  ON countries FOR SELECT TO anon USING (true);
CREATE POLICY "grades_select_anon"
  ON grades FOR SELECT TO anon USING (true);
CREATE POLICY "subjects_select_anon"
  ON subjects FOR SELECT TO anon USING (true);
CREATE POLICY "topics_select_anon"
  ON curriculum_topics FOR SELECT TO anon USING (true);
CREATE POLICY "skills_select_anon"
  ON curriculum_skills FOR SELECT TO anon USING (true);

-- Service role can write (for admin/seeding)
CREATE POLICY "countries_all_service"
  ON countries FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "grades_all_service"
  ON grades FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "subjects_all_service"
  ON subjects FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "topics_all_service"
  ON curriculum_topics FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "skills_all_service"
  ON curriculum_skills FOR ALL TO service_role USING (true) WITH CHECK (true);

-- ─── 10. RPC: GET CURRICULUM FOR COUNTRY+GRADE ────────────────
CREATE OR REPLACE FUNCTION get_curriculum(
  p_country_code TEXT,
  p_grade_number INTEGER,
  p_subject_name TEXT DEFAULT 'math'
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_country_id UUID;
  v_grade_id   UUID;
  v_subject_id UUID;
  v_result     JSONB;
BEGIN
  -- Resolve IDs
  SELECT id INTO v_country_id FROM countries WHERE code = p_country_code;
  IF v_country_id IS NULL THEN
    RETURN jsonb_build_object('error', 'Country not found', 'themes', '[]'::jsonb);
  END IF;

  SELECT id INTO v_grade_id FROM grades
  WHERE country_id = v_country_id AND grade_number = p_grade_number;
  IF v_grade_id IS NULL THEN
    RETURN jsonb_build_object('error', 'Grade not found', 'themes', '[]'::jsonb);
  END IF;

  SELECT id INTO v_subject_id FROM subjects WHERE name = p_subject_name;
  IF v_subject_id IS NULL THEN
    RETURN jsonb_build_object('error', 'Subject not found', 'themes', '[]'::jsonb);
  END IF;

  -- Build hierarchical JSON: parent topics with nested subtopics
  SELECT jsonb_build_object(
    'country', p_country_code,
    'grade', p_grade_number,
    'subject', p_subject_name,
    'themes', COALESCE(jsonb_agg(
      jsonb_build_object(
        'id', t.id,
        'slug', t.slug,
        'name', t.name,
        'icon', t.icon,
        'color', t.color,
        'description', t.description,
        'order_index', t.order_index,
        'subtopics', COALESCE(t.subtopics, '[]'::jsonb)
      ) ORDER BY t.order_index
    ), '[]'::jsonb)
  ) INTO v_result
  FROM (
    SELECT
      parent.id,
      parent.slug,
      parent.name,
      parent.icon,
      parent.color,
      parent.description,
      parent.order_index,
      jsonb_agg(
        jsonb_build_object(
          'id', child.id,
          'slug', child.slug,
          'name', child.name,
          'icon', child.icon,
          'color', child.color,
          'order_index', child.order_index
        ) ORDER BY child.order_index
      ) FILTER (WHERE child.id IS NOT NULL) AS subtopics
    FROM curriculum_topics parent
    LEFT JOIN curriculum_topics child
      ON child.parent_id = parent.id
    WHERE parent.grade_id = v_grade_id
      AND parent.subject_id = v_subject_id
      AND parent.parent_id IS NULL
    GROUP BY parent.id, parent.slug, parent.name, parent.icon,
             parent.color, parent.description, parent.order_index
  ) t;

  RETURN COALESCE(v_result, jsonb_build_object('themes', '[]'::jsonb));
END;
$$;

-- ─── 11. SEED DATA ────────────────────────────────────────────

-- Countries
INSERT INTO countries (code, name, flag) VALUES
  ('HU', 'Magyarország', '🇭🇺'),
  ('DE', 'Deutschland', '🇩🇪'),
  ('GB', 'United Kingdom', '🇬🇧'),
  ('US', 'United States', '🇺🇸'),
  ('RO', 'România', '🇷🇴')
ON CONFLICT (code) DO NOTHING;

-- Subjects
INSERT INTO subjects (name, label) VALUES
  ('math', 'Mathematik')
ON CONFLICT (name) DO NOTHING;

-- Grades (1-8 for each country)
DO $$
DECLARE
  v_country RECORD;
  v_g INTEGER;
BEGIN
  FOR v_country IN SELECT id FROM countries LOOP
    FOR v_g IN 1..8 LOOP
      INSERT INTO grades (country_id, grade_number)
      VALUES (v_country.id, v_g)
      ON CONFLICT (country_id, grade_number) DO NOTHING;
    END LOOP;
  END LOOP;
END;
$$;

-- ─── SEED GERMAN (DE) CURRICULUM TOPICS ───────────────────────
-- Uses the existing JSON curriculum data for all 8 grades

DO $$
DECLARE
  v_de_id       UUID;
  v_math_id     UUID;
  v_grade_id    UUID;
  v_parent_id   UUID;
BEGIN
  SELECT id INTO v_de_id FROM countries WHERE code = 'DE';
  SELECT id INTO v_math_id FROM subjects WHERE name = 'math';

  -- ════════════════════════════════════════════════════════════
  -- GRADE 1
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 1;

  -- Theme: Zahlen und Rechnen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Zahlen und Rechnen', 'zahlen-und-rechnen', '🔢', '#3b82f6', 'Addition und Subtraktion im Zahlenraum bis 20', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Addition bis 20', 'addition-bis-20', '➕', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Subtraktion bis 20', 'subtraktion-bis-20', '➖', '#3b82f6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Vergleichen und Ordnen', 'vergleichen-ordnen', '⚖️', '#1e40af', 3),
    (v_grade_id, v_math_id, v_parent_id, 'Fehlende Zahlen', 'fehlende-zahlen', '❓', '#1e3a8a', 4);

  -- Theme: Sachaufgaben
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Sachaufgaben', 'sachaufgaben', '📖', '#f59e0b', 'Einfache Textaufgaben und Rechengeschichten', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Einfache Textaufgaben', 'einfache-textaufgaben', '📝', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Rechengeschichten', 'rechengeschichten', '📚', '#f59e0b', 2);

  -- Theme: Geometrie und Größen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometrie und Größen', 'geometrie-groessen', '📐', '#ec4899', 'Formen erkennen, Uhr lesen und Geld zählen', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Formen erkennen', 'formen-erkennen', '🔷', '#f472b6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Uhr und Geld', 'uhr-und-geld', '⏰', '#ec4899', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 2
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 2;

  -- Theme: Zahlen und Rechnen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Zahlen und Rechnen', 'zahlen-und-rechnen', '🔢', '#3b82f6', 'Addition und Subtraktion im Zahlenraum bis 100', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Addition bis 100', 'addition-bis-100', '➕', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Subtraktion bis 100', 'subtraktion-bis-100', '➖', '#3b82f6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Zehnerzahlen', 'zehnerzahlen', '🔟', '#1e40af', 3);

  -- Theme: Multiplikation und Division
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Multiplikation und Division', 'multiplikation-division', '✖️', '#8b5cf6', 'Einmaleins und einfache Division', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Einmaleins (×2, ×5, ×10)', 'einmaleins-2-5-10', '🔢', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Division', 'einfache-division', '➗', '#8b5cf6', 2);

  -- Theme: Sachaufgaben
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Sachaufgaben', 'sachaufgaben', '📖', '#f59e0b', 'Textaufgaben und Zahlenreihen', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Textaufgaben', 'textaufgaben', '📝', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Zahlenreihen', 'zahlenreihen', '🔄', '#f59e0b', 2);

  -- Theme: Größen und Messen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Größen und Messen', 'groessen-messen', '📏', '#10b981', 'Längen, Zeit und Geld', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Längen und Zeit', 'laengen-zeit', '📏', '#6ee7b7', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Geld rechnen', 'geld-rechnen', '💰', '#10b981', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 3
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 3;

  -- Theme: Zahlen und Rechnen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Zahlen und Rechnen', 'zahlen-und-rechnen', '🔢', '#3b82f6', 'Addition und Subtraktion bis 1000, schriftliches Rechnen', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Addition und Subtraktion bis 1000', 'add-sub-1000', '➕', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Schriftliches Rechnen', 'schriftlich', '📝', '#3b82f6', 2);

  -- Theme: Einmaleins
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Einmaleins', 'einmaleins', '✖️', '#8b5cf6', 'Multiplikation, Division und fehlende Faktoren', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Multiplikation', 'multiplikation', '✖️', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Division', 'division', '➗', '#8b5cf6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Fehlende Faktoren', 'fehlende-faktoren', '❓', '#6d28d9', 3);

  -- Theme: Sachaufgaben
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Sachaufgaben', 'sachaufgaben', '📖', '#f59e0b', 'Textaufgaben und Zahlenfolgen', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Textaufgaben', 'textaufgaben', '📝', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Zahlenfolgen', 'zahlenfolgen', '🔢', '#f59e0b', 2);

  -- Theme: Größen und Einheiten
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Größen und Einheiten', 'groessen-einheiten', '⚖️', '#10b981', 'Länge, Gewicht, Zeit und Umrechnen von Einheiten', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Länge, Gewicht, Zeit', 'laenge-gewicht-zeit', '📏', '#6ee7b7', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Umrechnen', 'umrechnen', '🔄', '#10b981', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 4
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 4;

  -- Theme: Zahlen und Operationen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Zahlen und Operationen', 'zahlen-und-operationen', '🔢', '#3b82f6', 'Addition, Subtraktion, Multiplikation und Division', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Zahlen bis 1000', 'zahlen-bis-1000', '📝', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Addition und Subtraktion', 'addition-subtraktion', '➕', '#3b82f6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Multiplikation und Division', 'multiplikation-division', '✖️', '#1e40af', 3),
    (v_grade_id, v_math_id, v_parent_id, 'Sachaufgaben (Wortprobleme)', 'sachaufgaben', '📖', '#0f172a', 4);

  -- Theme: Geometrie
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometrie', 'geometrie', '🔷', '#ec4899', 'Formen, Linien, Flächen und räumliches Denken', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Umfang und Fläche', 'umfang-flaeche', '📐', '#f472b6', 1),
    (v_grade_id, v_math_id, v_parent_id, '3D Körper', '3d-koerper', '🎲', '#ec4899', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Symmetrie und Dreiecke', 'symmetrie-dreiecke', '🔻', '#be185d', 3);

  -- Theme: Größen und Messen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Größen und Messen', 'groessen-messen', '⚖️', '#8b5cf6', 'Längenmessungen, Gewichte, Zeit und Volumen', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Längenmessungen (m, cm, km)', 'laengen-kilometer', '📏', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Gewicht und Volumen', 'gewicht-volumen', '🧪', '#8b5cf6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Zeit messen', 'zeit', '⏱️', '#6d28d9', 3),
    (v_grade_id, v_math_id, v_parent_id, 'Einheiten umrechnen', 'umrechnung', '🔄', '#4c1d95', 4);

  -- Theme: Daten und Wahrscheinlichkeit
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Daten und Wahrscheinlichkeit', 'daten-wahrscheinlichkeit', '📊', '#10b981', 'Tabellen, Diagramme, Wahrscheinlichkeit und Datenanalyse', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Tabellen und Diagramme', 'tabellen-diagramme', '📈', '#6ee7b7', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Wahrscheinlichkeit', 'wahrscheinlichkeit', '🎲', '#10b981', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Datenanalyse und Durchschnitt', 'datenanalyse', '📊', '#059669', 3);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 5
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 5;

  -- Theme: Grundrechenarten
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Grundrechenarten', 'grundrechenarten', '🔢', '#3b82f6', 'Große Zahlen, Runden und Rechenregeln', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Große Zahlen und Runden', 'grosse-zahlen', '🔢', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Rechenregeln (Punkt vor Strich)', 'rechenregeln', '⚙️', '#3b82f6', 2);

  -- Theme: Brüche und Prozent
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Brüche und Prozent', 'brueche-prozent', '🥧', '#8b5cf6', 'Bruchrechnung und Prozentrechnung', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Bruchrechnung', 'bruchrechnung', '🥧', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Prozentrechnung', 'prozentrechnung', '💯', '#8b5cf6', 2);

  -- Theme: Geometrie
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometrie', 'geometrie', '📐', '#ec4899', 'Umfang, Fläche, Formen und Maße', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Umfang und Fläche', 'umfang-flaeche', '📐', '#f472b6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Formen und Maße', 'formen-masse', '🔷', '#ec4899', 2);

  -- Theme: Sachaufgaben
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Sachaufgaben', 'sachaufgaben', '📖', '#f59e0b', 'Rabatt, Einkauf und Rechenregeln anwenden', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Rabatt und Einkauf', 'rabatt-einkauf', '🛒', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Rechenregeln anwenden', 'rechenregeln-anwenden', '📝', '#f59e0b', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 6
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 6;

  -- Theme: Negative Zahlen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Negative Zahlen', 'negative-zahlen', '➖', '#ef4444', 'Rechnen mit negativen Zahlen und Zahlenstrahl', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Rechnen mit negativen Zahlen', 'rechnen-negativ', '➖', '#ef4444', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Zahlenstrahl', 'zahlenstrahl', '📏', '#dc2626', 2);

  -- Theme: Bruchrechnung
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Bruchrechnung', 'bruchrechnung', '🥧', '#8b5cf6', 'Brüche multiplizieren und dividieren', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Brüche multiplizieren', 'brueche-multiplizieren', '✖️', '#8b5cf6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Brüche dividieren', 'brueche-dividieren', '➗', '#7c3aed', 2);

  -- Theme: Verhältnisse und Prozent
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Verhältnisse und Prozent', 'verhaeltnisse-prozent', '💯', '#f59e0b', 'Verhältnisse verstehen und Prozentrechnung', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Verhältnisse', 'verhaeltnisse', '⚖️', '#f59e0b', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Prozentrechnung', 'prozent', '💯', '#d97706', 2);

  -- Theme: Geometrie
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometrie', 'geometrie', '📐', '#ec4899', 'Flächen berechnen und Geschwindigkeit', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Flächen berechnen', 'flaechen', '📐', '#ec4899', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Geschwindigkeit und Weg', 'geschwindigkeit', '🚗', '#db2777', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 7
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 7;

  -- Theme: Potenzen und Algebra
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Potenzen und Algebra', 'potenzen-algebra', '🔢', '#3b82f6', 'Potenzen berechnen und algebraische Ausdrücke vereinfachen', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Potenzen', 'potenzen', '²️', '#3b82f6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Algebraische Ausdrücke', 'algebra', '🔤', '#2563eb', 2);

  -- Theme: Gleichungen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Gleichungen', 'gleichungen', '⚖️', '#8b5cf6', 'Lineare Gleichungen lösen und aufstellen', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Lineare Gleichungen', 'lineare-gleichungen', '⚖️', '#8b5cf6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Gleichungen aufstellen', 'gleichungen-aufstellen', '📝', '#7c3aed', 2);

  -- Theme: Dreiecke
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Dreiecke', 'dreiecke', '🔺', '#ec4899', 'Winkel im Dreieck und besondere Dreiecke', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Winkel im Dreieck', 'winkel', '📐', '#ec4899', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Besondere Dreiecke', 'besondere-dreiecke', '🔺', '#db2777', 2);

  -- Theme: Satz des Pythagoras
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Satz des Pythagoras', 'pythagoras', '📏', '#10b981', 'Hypotenuse und Kathete mit dem Satz des Pythagoras berechnen', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Hypotenuse berechnen', 'hypotenuse', '📏', '#10b981', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Kathete berechnen', 'kathete', '📐', '#059669', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 8
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 8;

  -- Theme: Wurzeln und Terme
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Wurzeln und Terme', 'wurzeln-terme', '√', '#3b82f6', 'Quadratwurzeln berechnen und komplexe Terme vereinfachen', 1)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Quadratwurzeln', 'quadratwurzeln', '√', '#3b82f6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Komplexe Terme', 'komplexe-terme', '🔢', '#2563eb', 2);

  -- Theme: Gleichungen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Gleichungen', 'gleichungen', '⚖️', '#8b5cf6', 'Gleichungen mit Variablen auf beiden Seiten lösen', 2)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Gleichungen mit zwei Seiten', 'zwei-seiten', '⚖️', '#8b5cf6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Gleichungen lösen', 'gleichungen-loesen', '📝', '#7c3aed', 2);

  -- Theme: Funktionen
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Funktionen', 'funktionen', '📈', '#ec4899', 'Lineare Funktionen verstehen und Funktionswerte berechnen', 3)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Lineare Funktionen', 'lineare-funktionen', '📈', '#ec4899', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Funktionswerte', 'funktionswerte', '🔢', '#db2777', 2);

  -- Theme: Wahrscheinlichkeit
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Wahrscheinlichkeit', 'wahrscheinlichkeit', '🎲', '#10b981', 'Grundlagen der Wahrscheinlichkeitsrechnung und Anwendungen', 4)
  RETURNING id INTO v_parent_id;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Grundlagen', 'grundlagen', '🎲', '#10b981', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Anwendungen', 'anwendungen', '📊', '#059669', 2);

END;
$$;

-- ─── SEED HUNGARIAN (HU) CURRICULUM TOPICS ────────────────────
-- Hungarian NAT-based math curriculum for grades 1-8

DO $$
DECLARE
  v_hu_id       UUID;
  v_math_id     UUID;
  v_grade_id    UUID;
  v_parent_id   UUID;
BEGIN
  SELECT id INTO v_hu_id FROM countries WHERE code = 'HU';
  SELECT id INTO v_math_id FROM subjects WHERE name = 'math';

  -- ════════════════════════════════════════════════════════════
  -- GRADE 1
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 1;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Számok és műveletek', 'szamok-muveletek', '🔢', '#3b82f6', 'Összeadás és kivonás 20-ig', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Összeadás 20-ig', 'osszead-20', '➕', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Kivonás 20-ig', 'kivonas-20', '➖', '#3b82f6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Összehasonlítás', 'osszehasonlitas', '⚖️', '#1e40af', 3);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Szöveges feladatok', 'szoveges', '📖', '#f59e0b', 'Egyszerű szöveges feladatok', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Szöveges feladatok', 'egyszer-szoveges', '📝', '#fbbf24', 1);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometria', 'geometria', '📐', '#ec4899', 'Formák és mérés', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Síkidomok', 'sikidomok', '🔷', '#f472b6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Óra és pénz', 'ora-penz', '⏰', '#ec4899', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 2
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 2;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Számok és műveletek', 'szamok-muveletek', '🔢', '#3b82f6', 'Összeadás és kivonás 100-ig', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Összeadás 100-ig', 'osszead-100', '➕', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Kivonás 100-ig', 'kivonas-100', '➖', '#3b82f6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Tízesek', 'tizesek', '🔟', '#1e40af', 3);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Szorzás és osztás', 'szorzas-osztas', '✖️', '#8b5cf6', 'Szorzótábla és egyszerű osztás', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Szorzótábla (×2, ×5, ×10)', 'szorzotabla', '🔢', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Osztás', 'osztas', '➗', '#8b5cf6', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Szöveges feladatok', 'szoveges', '📖', '#f59e0b', 'Szöveges feladatok és számsorok', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Szöveges feladatok', 'szoveges-feladatok', '📝', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Számsorok', 'szamsorok', '🔄', '#f59e0b', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Mértékegységek', 'mertekegysegek', '📏', '#10b981', 'Hosszúság, idő és pénz', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Hosszúság és idő', 'hosszusag-ido', '📏', '#6ee7b7', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Pénzszámolás', 'penzszamolas', '💰', '#10b981', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 3
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 3;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Számok és műveletek', 'szamok-muveletek', '🔢', '#3b82f6', 'Összeadás és kivonás 1000-ig, írásbeli műveletek', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Műveletek 1000-ig', 'muveletek-1000', '➕', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Írásbeli számolás', 'irasbeli', '📝', '#3b82f6', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Szorzótábla', 'szorzotabla', '✖️', '#8b5cf6', 'Szorzás, osztás és hiányzó tényezők', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Szorzás', 'szorzas', '✖️', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Osztás', 'osztas', '➗', '#8b5cf6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Hiányzó tényezők', 'hianyzo', '❓', '#6d28d9', 3);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Szöveges feladatok', 'szoveges', '📖', '#f59e0b', 'Szöveges feladatok és számsorozatok', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Szöveges feladatok', 'szoveges-feladatok', '📝', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Számsorozatok', 'szamsorozatok', '🔢', '#f59e0b', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Mértékegységek', 'mertekegysegek', '⚖️', '#10b981', 'Hosszúság, tömeg, idő és átváltás', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Hosszúság, tömeg, idő', 'hossz-tomeg-ido', '📏', '#6ee7b7', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Átváltás', 'atvaltas', '🔄', '#10b981', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 4
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 4;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Számok és műveletek', 'szamok-muveletek', '🔢', '#3b82f6', 'Összeadás, kivonás, szorzás és osztás', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Számok 10000-ig', 'szamok-10000', '📝', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Összeadás és kivonás', 'ossz-kiv', '➕', '#3b82f6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Szorzás és osztás', 'szorz-oszt', '✖️', '#1e40af', 3),
    (v_grade_id, v_math_id, v_parent_id, 'Szöveges feladatok', 'szoveges', '📖', '#0f172a', 4);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometria', 'geometria', '🔷', '#ec4899', 'Síkidomok, kerület, terület', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Kerület és terület', 'kerulet-terulet', '📐', '#f472b6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Testek', 'testek', '🎲', '#ec4899', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Szimmetria', 'szimmetria', '🔻', '#be185d', 3);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Mértékegységek', 'mertekegysegek', '⚖️', '#8b5cf6', 'Hosszúság, tömeg, idő és térfogat', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Hosszúságmérés', 'hosszusagmeres', '📏', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Tömeg és térfogat', 'tomeg-terfogat', '🧪', '#8b5cf6', 2),
    (v_grade_id, v_math_id, v_parent_id, 'Időmérés', 'idomeres', '⏱️', '#6d28d9', 3);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Adatok és valószínűség', 'adatok', '📊', '#10b981', 'Táblázatok, diagramok és valószínűség', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Táblázatok és diagramok', 'tablazatok', '📈', '#6ee7b7', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Valószínűség', 'valoszinuseg', '🎲', '#10b981', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 5
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 5;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Alapműveletek', 'alapmuveletek', '🔢', '#3b82f6', 'Nagy számok, kerekítés és műveleti sorrend', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Nagy számok és kerekítés', 'nagy-szamok', '🔢', '#60a5fa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Műveleti sorrend', 'muveleti-sorrend', '⚙️', '#3b82f6', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Törtek és százalék', 'tortek-szazalek', '🥧', '#8b5cf6', 'Törtszámok és százalékszámítás', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Törtszámok', 'tortszamok', '🥧', '#a78bfa', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Százalékszámítás', 'szazalekszamitas', '💯', '#8b5cf6', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometria', 'geometria', '📐', '#ec4899', 'Kerület, terület és formák', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Kerület és terület', 'kerulet-terulet', '📐', '#f472b6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Formák és méretek', 'formak', '🔷', '#ec4899', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Szöveges feladatok', 'szoveges', '📖', '#f59e0b', 'Kedvezmény, vásárlás és műveleti sorrend', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Kedvezmény és vásárlás', 'kedvezmeny', '🛒', '#fbbf24', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Műveleti sorrend alkalmazása', 'muvsorrend-alk', '📝', '#f59e0b', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 6
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 6;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Negatív számok', 'negativ-szamok', '➖', '#ef4444', 'Műveletek negatív számokkal', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Számolás negatív számokkal', 'negativ-muveletek', '➖', '#ef4444', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Számegyenes', 'szamegyenes', '📏', '#dc2626', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Törtszámítás', 'tortszamitas', '🥧', '#8b5cf6', 'Törtek szorzása és osztása', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Törtek szorzása', 'tort-szorzas', '✖️', '#8b5cf6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Törtek osztása', 'tort-osztas', '➗', '#7c3aed', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Arányok és százalék', 'aranyok-szazalek', '💯', '#f59e0b', 'Arányok és százalékszámítás', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Arányok', 'aranyok', '⚖️', '#f59e0b', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Százalékszámítás', 'szazalek', '💯', '#d97706', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Geometria', 'geometria', '📐', '#ec4899', 'Területszámítás és sebesség', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Területszámítás', 'teruletszamitas', '📐', '#ec4899', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Sebesség és út', 'sebesseg', '🚗', '#db2777', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 7
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 7;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Hatványok és algebra', 'hatvanyok-algebra', '🔢', '#3b82f6', 'Hatványszámítás és algebrai kifejezések', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Hatványok', 'hatvanyok', '²️', '#3b82f6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Algebrai kifejezések', 'algebrai-kif', '🔤', '#2563eb', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Egyenletek', 'egyenletek', '⚖️', '#8b5cf6', 'Lineáris egyenletek megoldása és felállítása', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Lineáris egyenletek', 'linearis-egyenletek', '⚖️', '#8b5cf6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Egyenletek felállítása', 'egyenlet-felallitas', '📝', '#7c3aed', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Háromszögek', 'haromszogek', '🔺', '#ec4899', 'Szögek a háromszögben és különleges háromszögek', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Szögek a háromszögben', 'szogek', '📐', '#ec4899', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Különleges háromszögek', 'kulonleges-haromszogek', '🔺', '#db2777', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Pitagorasz-tétel', 'pitagorasz', '📏', '#10b981', 'Átfogó és befogó számítása', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Átfogó számítása', 'atfogo', '📏', '#10b981', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Befogó számítása', 'befogo', '📐', '#059669', 2);

  -- ════════════════════════════════════════════════════════════
  -- GRADE 8
  -- ════════════════════════════════════════════════════════════
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_hu_id AND grade_number = 8;

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Gyökök és kifejezések', 'gyokok-kifejezesek', '√', '#3b82f6', 'Négyzetgyökök és összetett kifejezések', 1)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Négyzetgyökök', 'negyzetgyokok', '√', '#3b82f6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Összetett kifejezések', 'osszetett-kif', '🔢', '#2563eb', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Egyenletek', 'egyenletek', '⚖️', '#8b5cf6', 'Egyenletek mindkét oldalon változókkal', 2)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Kétoldalas egyenletek', 'ketoldalas', '⚖️', '#8b5cf6', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Egyenletek megoldása', 'megoldas', '📝', '#7c3aed', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Függvények', 'fuggvenyek', '📈', '#ec4899', 'Lineáris függvények és függvényértékek', 3)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Lineáris függvények', 'linearis-fuggv', '📈', '#ec4899', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Függvényértékek', 'fuggvenyertekek', '🔢', '#db2777', 2);

  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, description, order_index)
  VALUES (v_grade_id, v_math_id, NULL, 'Valószínűség', 'valoszinuseg', '🎲', '#10b981', 'Valószínűségszámítás alapjai és alkalmazások', 4)
  RETURNING id INTO v_parent_id;
  INSERT INTO curriculum_topics (grade_id, subject_id, parent_id, name, slug, icon, color, order_index) VALUES
    (v_grade_id, v_math_id, v_parent_id, 'Alapok', 'alapok', '🎲', '#10b981', 1),
    (v_grade_id, v_math_id, v_parent_id, 'Alkalmazások', 'alkalmazasok', '📊', '#059669', 2);

END;
$$;
