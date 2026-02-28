-- ============================================================================
-- PLIZIO ASSESSMENT ENGINE – SEED DATA: Default Blueprints
-- ============================================================================
-- One practice + one national blueprint per country per grade (1-8).
-- Based on the curriculum docs.
-- ============================================================================

-- ─── HELPER: Default star rewards ──────────────────────────────────────────────
-- From Master Spec: Star Economy

-- Practice blueprint rewards (lower)
-- National sim rewards (higher)

-- ============================================================================
-- HUNGARY (HU) – OKM + Központi felvételi aligned
-- ============================================================================

-- HU Practice Blueprints (Grade 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
SELECT
  'HU', g, 'practice', 'practice',
  'Gyakorlás ' || g || '. osztály',
  'Szabad gyakorlás az aktuális tananyagból',
  10, 10, 600, 'none',
  '{"1":2,"2":3,"3":3,"4":2}'::JSONB,
  '{"1":4,"2":4,"3":2}'::JSONB,
  0.70,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[]'::JSONB
FROM generate_series(1, 8) AS g;

-- HU Mini-Test Blueprints (Grade 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
SELECT
  'HU', g, 'mini_test', 'mini_test',
  'Mini-teszt ' || g || '. osztály',
  'Heti mini-teszt (10-15 perc)',
  10, 10, 900, 'none',
  '{"1":2,"2":3,"3":3,"4":2}'::JSONB,
  '{"1":4,"2":4,"3":2}'::JSONB,
  0.80,
  '{"grade1":4,"grade2":4,"grade3":4,"grade4":4,"perfectBonus":2,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[]'::JSONB
FROM generate_series(1, 8) AS g;

-- HU Klassenarbeit / Témazáró (Grade 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
SELECT
  'HU', g, 'klassenarbeit', 'temazaro',
  'Témazáró ' || g || '. osztály',
  'Havi témazáró dolgozat (30-45 perc)',
  15, 25, 2700, 'none',
  '{"1":2,"2":4,"3":5,"4":3,"5":1}'::JSONB,
  '{"1":5,"2":6,"3":4}'::JSONB,
  0.60,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"monthCompletion":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[{"name":"Fejszámolás","questions":4,"points":4,"calculator":false},{"name":"Írásbeli műveletek","questions":4,"points":6,"calculator":false},{"name":"Szöveges feladatok","questions":4,"points":9,"calculator":false},{"name":"Geometria/Mérés","questions":2,"points":4,"calculator":false},{"name":"Bonus","questions":1,"points":2,"calculator":false}]'::JSONB
FROM generate_series(1, 8) AS g;

-- HU OKM Simulation (Grade 6 & 8 only)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
VALUES
  ('HU', 6, 'national_sim', 'OKM', 'OKM szimuláció 6. osztály',
   'Országos Kompetenciamérés gyakorló (90 perc)',
   20, 40, 5400, 'none',
   '{"1":3,"2":5,"3":6,"4":4,"5":2}'::JSONB,
   '{"1":6,"2":9,"3":5}'::JSONB,
   0.50,
   '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB),
  ('HU', 8, 'national_sim', 'OKM', 'OKM szimuláció 8. osztály',
   'Országos Kompetenciamérés gyakorló (90 perc)',
   20, 40, 5400, 'none',
   '{"1":3,"2":5,"3":6,"4":4,"5":2}'::JSONB,
   '{"1":6,"2":9,"3":5}'::JSONB,
   0.50,
   '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB),
  ('HU', 8, 'national_sim', 'felveteli', 'Központi felvételi szimuláció',
   'Központi írásbeli felvételi vizsga gyakorló (45 perc, 50 pont)',
   15, 50, 2700, 'none',
   '{"1":2,"2":4,"3":5,"4":3,"5":1}'::JSONB,
   '{"1":4,"2":6,"3":5}'::JSONB,
   0.50,
   '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB);

-- ============================================================================
-- GERMANY (DE) – VERA + Klassenarbeit + MSA aligned
-- ============================================================================

-- DE Practice (Grade 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
SELECT
  'DE', g, 'practice', 'practice',
  'Übung Klasse ' || g,
  'Freie Übung zum aktuellen Lernstoff',
  10, 10, 600, 'none',
  '{"1":2,"2":3,"3":3,"4":2}'::JSONB,
  '{"1":4,"2":4,"3":2}'::JSONB,
  0.70,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[]'::JSONB
FROM generate_series(1, 8) AS g;

-- DE Klassenarbeit (Grade 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
SELECT
  'DE', g, 'klassenarbeit', 'klassenarbeit',
  'Klassenarbeit Klasse ' || g,
  'Monatliche Klassenarbeit (30-45 Min.)',
  15, 30, 2700, 'none',
  '{"1":3,"2":4,"3":5,"4":2,"5":1}'::JSONB,
  '{"1":5,"2":6,"3":4}'::JSONB,
  0.60,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"monthCompletion":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[{"name":"Kopfrechnen","questions":5,"points":5,"calculator":false},{"name":"Schriftlich rechnen","questions":4,"points":8,"calculator":false},{"name":"Maßeinheiten","questions":2,"points":4,"calculator":false},{"name":"Sachaufgaben","questions":3,"points":9,"calculator":false},{"name":"Geometrie","questions":1,"points":4,"calculator":false}]'::JSONB
FROM generate_series(1, 8) AS g;

-- DE VERA 3 (Grade 3 only)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
VALUES ('DE', 3, 'national_sim', 'VERA3', 'VERA 3 Simulation',
  'Vergleichsarbeit Klasse 3 (45-60 Min.)',
  20, 30, 3600, 'none',
  '{"1":4,"2":6,"3":6,"4":3,"5":1}'::JSONB,
  '{"1":8,"2":8,"3":4}'::JSONB,
  0.50,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB);

-- DE VERA 8 (Grade 8 only)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
VALUES ('DE', 8, 'national_sim', 'VERA8', 'VERA 8 Simulation',
  'Vergleichsarbeit Klasse 8 (90 Min.)',
  20, 40, 5400, 'partial',
  '{"1":3,"2":5,"3":6,"4":4,"5":2}'::JSONB,
  '{"1":6,"2":9,"3":5}'::JSONB,
  0.50,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB);

-- ============================================================================
-- ENGLAND (GB) – SATs aligned
-- ============================================================================

-- GB Practice (Year 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
SELECT
  'GB', g, 'practice', 'practice',
  'Practice Year ' || g,
  'Free practice on current topics',
  10, 10, 600, 'none',
  '{"1":2,"2":3,"3":3,"4":2}'::JSONB,
  '{"1":4,"2":4,"3":2}'::JSONB,
  0.70,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB
FROM generate_series(1, 8) AS g;

-- GB SATs KS1 (Year 2)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
VALUES ('GB', 2, 'national_sim', 'SATs_KS1', 'KS1 SATs Simulation',
  'Key Stage 1 SATs practice (Paper 1: Arithmetic + Paper 2: Reasoning)',
  20, 25, 3300, 'none',
  '{"1":4,"2":6,"3":6,"4":3,"5":1}'::JSONB,
  '{"1":6,"2":8,"3":6}'::JSONB,
  0.50,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[{"name":"Arithmetic","questions":12,"points":12,"calculator":false,"timeLimit":1500},{"name":"Reasoning","questions":8,"points":13,"calculator":false,"timeLimit":1800}]'::JSONB);

-- GB SATs KS2 (Year 6)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards, sections)
VALUES ('GB', 6, 'national_sim', 'SATs_KS2', 'KS2 SATs Simulation',
  'Key Stage 2 SATs practice (Arithmetic + Reasoning Paper 2 + Reasoning Paper 3)',
  25, 40, 6600, 'none',
  '{"1":4,"2":7,"3":8,"4":4,"5":2}'::JSONB,
  '{"1":6,"2":11,"3":8}'::JSONB,
  0.50,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB,
  '[{"name":"Arithmetic","questions":10,"points":10,"calculator":false,"timeLimit":1800},{"name":"Reasoning Paper 2","questions":8,"points":15,"calculator":false,"timeLimit":2400},{"name":"Reasoning Paper 3","questions":7,"points":15,"calculator":false,"timeLimit":2400}]'::JSONB);

-- ============================================================================
-- USA (US) – PARCC/SBAC aligned
-- ============================================================================

-- US Practice (Grade 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
SELECT
  'US', g, 'practice', 'practice',
  'Practice Grade ' || g,
  'Free practice on current topics',
  10, 10, 600,
  CASE WHEN g >= 6 THEN 'partial'::calculator_policy ELSE 'none'::calculator_policy END,
  '{"1":2,"2":3,"3":3,"4":2}'::JSONB,
  '{"1":4,"2":4,"3":2}'::JSONB,
  0.70,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB
FROM generate_series(1, 8) AS g;

-- US SBAC Simulation (Grade 3-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
SELECT
  'US', g, 'national_sim', 'SBAC',
  'SBAC Simulation Grade ' || g,
  'State assessment simulation (90 min)',
  20, 40, 5400,
  CASE WHEN g >= 6 THEN 'partial'::calculator_policy ELSE 'none'::calculator_policy END,
  '{"1":3,"2":6,"3":6,"4":3,"5":2}'::JSONB,
  '{"1":6,"2":9,"3":5}'::JSONB,
  0.50,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB
FROM generate_series(3, 8) AS g;

-- ============================================================================
-- ROMANIA (RO) – Evaluare Națională aligned
-- ============================================================================

-- RO Practice (Clasa 1-8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
SELECT
  'RO', g, 'practice', 'practice',
  'Exersare Clasa ' || g,
  'Practică liberă pe materia curentă',
  10, 10, 600, 'none',
  '{"1":2,"2":3,"3":3,"4":2}'::JSONB,
  '{"1":4,"2":4,"3":2}'::JSONB,
  0.70,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB
FROM generate_series(1, 8) AS g;

-- RO Evaluare Națională (Clasa 8)
INSERT INTO blueprints (country, grade, test_type, exam_type, name, description,
  total_questions, total_points, time_limit_sec, calculator_policy,
  difficulty_distribution, cognitive_distribution, current_topic_ratio,
  star_rewards)
VALUES ('RO', 8, 'national_sim', 'evaluare_nationala', 'Evaluare Națională Simulare',
  'Simulare Evaluare Națională Clasa a VIII-a (120 min)',
  20, 100, 7200, 'none',
  '{"1":3,"2":5,"3":6,"4":4,"5":2}'::JSONB,
  '{"1":6,"2":9,"3":5}'::JSONB,
  0.50,
  '{"grade1":12,"grade2":10,"grade3":8,"grade4":5,"perfectBonus":3,"retryMultiplier":0.5,"dailyCap":30}'::JSONB);

-- ============================================================================
-- SEED COMPLETE
-- ============================================================================
-- Total blueprints seeded:
-- HU: 8 practice + 8 mini-test + 8 klassenarbeit + 3 national = 27
-- DE: 8 practice + 8 klassenarbeit + 2 VERA = 18
-- GB: 8 practice + 2 SATs = 10
-- US: 8 practice + 6 SBAC = 14
-- RO: 8 practice + 1 evaluare = 9
-- TOTAL: 78 blueprints
-- ============================================================================
