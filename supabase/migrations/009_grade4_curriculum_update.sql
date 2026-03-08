-- ============================================================
-- Migration 009: Update Grade 4 German Curriculum with New Topics
-- ============================================================
-- Adds "Runden" and "Kreis & Geometrie" topics to Grade 4 DE curriculum

DO $$
DECLARE
  v_de_id       UUID;
  v_math_id     UUID;
  v_grade_id    UUID;
  v_parent_id   UUID;
BEGIN
  SELECT id INTO v_de_id FROM countries WHERE code = 'DE';
  SELECT id INTO v_math_id FROM subjects WHERE name = 'math';
  SELECT id INTO v_grade_id FROM grades WHERE country_id = v_de_id AND grade_number = 4;

  -- Check if Grade 4 already has these topics (avoid duplicates)
  IF NOT EXISTS (
    SELECT 1 FROM curriculum_topics
    WHERE grade_id = v_grade_id AND slug = 'runden-zahlen'
  ) THEN
    -- Add "Runden" subtopic to "Zahlen und Operationen" parent
    SELECT id INTO v_parent_id FROM curriculum_topics
    WHERE grade_id = v_grade_id AND slug = 'zahlen-und-operationen' AND parent_id IS NULL;

    IF v_parent_id IS NOT NULL THEN
      INSERT INTO curriculum_topics
        (grade_id, subject_id, parent_id, name, slug, icon, color, order_index)
      VALUES
        (v_grade_id, v_math_id, v_parent_id, 'Runden (10er, 100er)', 'runden-zahlen', '🔄', '#06b6d4', 5);
    END IF;
  END IF;

  -- Add "Kreis & Geometrie" as new subtopic under "Geometrie" parent
  IF NOT EXISTS (
    SELECT 1 FROM curriculum_topics
    WHERE grade_id = v_grade_id AND slug = 'kreis-geometrie'
  ) THEN
    SELECT id INTO v_parent_id FROM curriculum_topics
    WHERE grade_id = v_grade_id AND slug = 'geometrie' AND parent_id IS NULL;

    IF v_parent_id IS NOT NULL THEN
      INSERT INTO curriculum_topics
        (grade_id, subject_id, parent_id, name, slug, icon, color, order_index)
      VALUES
        (v_grade_id, v_math_id, v_parent_id, 'Kreis & Geometrie', 'kreis-geometrie', '⭕', '#f97316', 4);
    END IF;
  END IF;

  -- Update "Zahlen bis 1000" to "Zahlen bis 1 Million"
  UPDATE curriculum_topics
  SET name = 'Zahlen bis 1 Million',
      slug = 'zahlen-bis-1million'
  WHERE grade_id = v_grade_id
    AND slug = 'zahlen-bis-1000'
    AND parent_id IS NOT NULL;

END;
$$;
