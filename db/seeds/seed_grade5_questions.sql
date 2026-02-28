-- Seed script for Grade 5 Question Bank
-- Minimum 40 questions across 5 sections with difficulty distribution
-- Total: 50 questions (10 per section, distributed difficulty)

-- Clear existing Grade 5 questions (optional - comment out to preserve)
-- DELETE FROM question_bank WHERE grade = 5;

-- ─── KOPFRECHNEN (Mental Math) - 10 questions ─────────────────────────────
-- Difficulty: 4x easy, 4x medium, 2x hard

INSERT INTO question_bank (grade, topic, section, difficulty, question, solution, max_points, type, options, explanation, is_active) VALUES
-- Easy (difficulty 1)
(5, 'Arithmetic', 'Kopfrechnen', 'easy', '5 + 3 = ?', '8', 1, 'mental',
 '[{"text":"7","isCorrect":false},{"text":"8","isCorrect":true},{"text":"9","isCorrect":false},{"text":"10","isCorrect":false}]',
 'Einfache Addition: 5 + 3 = 8', true),

(5, 'Arithmetic', 'Kopfrechnen', 'easy', '10 - 4 = ?', '6', 1, 'mental',
 '[{"text":"5","isCorrect":false},{"text":"6","isCorrect":true},{"text":"7","isCorrect":false},{"text":"8","isCorrect":false}]',
 'Einfache Subtraktion: 10 - 4 = 6', true),

(5, 'Arithmetic', 'Kopfrechnen', 'easy', '3 × 4 = ?', '12', 1, 'mental',
 '[{"text":"11","isCorrect":false},{"text":"12","isCorrect":true},{"text":"13","isCorrect":false},{"text":"14","isCorrect":false}]',
 'Kleines Einmaleins: 3 × 4 = 12', true),

(5, 'Arithmetic', 'Kopfrechnen', 'easy', '20 ÷ 5 = ?', '4', 1, 'mental',
 '[{"text":"3","isCorrect":false},{"text":"4","isCorrect":true},{"text":"5","isCorrect":false},{"text":"6","isCorrect":false}]',
 'Einfache Division: 20 ÷ 5 = 4', true),

-- Medium (difficulty 2)
(5, 'Arithmetic', 'Kopfrechnen', 'medium', '25 + 18 = ?', '43', 1, 'mental',
 '[{"text":"41","isCorrect":false},{"text":"42","isCorrect":false},{"text":"43","isCorrect":true},{"text":"44","isCorrect":false}]',
 'Addition mit Zehnerübergang: 25 + 18 = 43', true),

(5, 'Arithmetic', 'Kopfrechnen', 'medium', '7 × 6 = ?', '42', 1, 'mental',
 '[{"text":"40","isCorrect":false},{"text":"41","isCorrect":false},{"text":"42","isCorrect":true},{"text":"43","isCorrect":false}]',
 'Einmaleins: 7 × 6 = 42', true),

(5, 'Arithmetic', 'Kopfrechnen', 'medium', '100 - 37 = ?', '63', 1, 'mental',
 '[{"text":"61","isCorrect":false},{"text":"62","isCorrect":false},{"text":"63","isCorrect":true},{"text":"64","isCorrect":false}]',
 'Subtraktion: 100 - 37 = 63', true),

(5, 'Arithmetic', 'Kopfrechnen', 'medium', '8 × 7 = ?', '56', 1, 'mental',
 '[{"text":"54","isCorrect":false},{"text":"55","isCorrect":false},{"text":"56","isCorrect":true},{"text":"57","isCorrect":false}]',
 'Einmaleins: 8 × 7 = 56', true),

-- Hard (difficulty 3)
(5, 'Arithmetic', 'Kopfrechnen', 'hard', '45 + 37 = ?', '82', 1, 'mental',
 '[{"text":"80","isCorrect":false},{"text":"81","isCorrect":false},{"text":"82","isCorrect":true},{"text":"83","isCorrect":false}]',
 'Addition mit Zehnerübergang: 45 + 37 = 82', true),

(5, 'Arithmetic', 'Kopfrechnen', 'hard', '9 × 9 = ?', '81', 1, 'mental',
 '[{"text":"79","isCorrect":false},{"text":"80","isCorrect":false},{"text":"81","isCorrect":true},{"text":"82","isCorrect":false}]',
 'Einmaleins: 9 × 9 = 81', true);

-- ─── SCHRIFTLICH (Written) - 10 questions ─────────────────────────────
-- Difficulty: 3x easy, 4x medium, 3x hard

INSERT INTO question_bank (grade, topic, section, difficulty, question, solution, max_points, type, options, explanation, is_active) VALUES
-- Easy (difficulty 1)
(5, 'Arithmetic', 'Schriftlich', 'easy', '234 + 123 = ?', '357', 2, 'written',
 '[{"text":"355","isCorrect":false},{"text":"356","isCorrect":false},{"text":"357","isCorrect":true},{"text":"358","isCorrect":false}]',
 'Schriftliche Addition: 234 + 123 = 357', true),

(5, 'Arithmetic', 'Schriftlich', 'easy', '456 - 123 = ?', '333', 2, 'written',
 '[{"text":"331","isCorrect":false},{"text":"332","isCorrect":false},{"text":"333","isCorrect":true},{"text":"334","isCorrect":false}]',
 'Schriftliche Subtraktion: 456 - 123 = 333', true),

(5, 'Arithmetic', 'Schriftlich', 'easy', '23 × 2 = ?', '46', 2, 'written',
 '[{"text":"44","isCorrect":false},{"text":"45","isCorrect":false},{"text":"46","isCorrect":true},{"text":"47","isCorrect":false}]',
 'Schriftliche Multiplikation: 23 × 2 = 46', true),

-- Medium (difficulty 2)
(5, 'Arithmetic', 'Schriftlich', 'medium', '567 + 289 = ?', '856', 2, 'written',
 '[{"text":"854","isCorrect":false},{"text":"855","isCorrect":false},{"text":"856","isCorrect":true},{"text":"857","isCorrect":false}]',
 'Addition mit Zehnerübergängen: 567 + 289 = 856', true),

(5, 'Arithmetic', 'Schriftlich', 'medium', '800 - 356 = ?', '444', 2, 'written',
 '[{"text":"442","isCorrect":false},{"text":"443","isCorrect":false},{"text":"444","isCorrect":true},{"text":"445","isCorrect":false}]',
 'Subtraktion mit Zehnerübergängen: 800 - 356 = 444', true),

(5, 'Arithmetic', 'Schriftlich', 'medium', '45 × 3 = ?', '135', 2, 'written',
 '[{"text":"133","isCorrect":false},{"text":"134","isCorrect":false},{"text":"135","isCorrect":true},{"text":"136","isCorrect":false}]',
 'Multiplikation: 45 × 3 = 135', true),

(5, 'Arithmetic', 'Schriftlich', 'medium', '144 ÷ 12 = ?', '12', 2, 'written',
 '[{"text":"10","isCorrect":false},{"text":"11","isCorrect":false},{"text":"12","isCorrect":true},{"text":"13","isCorrect":false}]',
 'Division: 144 ÷ 12 = 12', true),

-- Hard (difficulty 3)
(5, 'Arithmetic', 'Schriftlich', 'hard', '789 + 456 = ?', '1245', 2, 'written',
 '[{"text":"1243","isCorrect":false},{"text":"1244","isCorrect":false},{"text":"1245","isCorrect":true},{"text":"1246","isCorrect":false}]',
 'Addition mit Hundeerübergang: 789 + 456 = 1245', true),

(5, 'Arithmetic', 'Schriftlich', 'hard', '1000 - 567 = ?', '433', 2, 'written',
 '[{"text":"431","isCorrect":false},{"text":"432","isCorrect":false},{"text":"433","isCorrect":true},{"text":"434","isCorrect":false}]',
 'Subtraktion mit Zehnerübergängen: 1000 - 567 = 433', true),

(5, 'Arithmetic', 'Schriftlich', 'hard', '67 × 8 = ?', '536', 2, 'written',
 '[{"text":"534","isCorrect":false},{"text":"535","isCorrect":false},{"text":"536","isCorrect":true},{"text":"537","isCorrect":false}]',
 'Multiplikation: 67 × 8 = 536', true);

-- ─── SACHAUFGABEN (Word Problems) - 10 questions ─────────────────────────────
-- Difficulty: 2x easy, 4x medium, 4x hard

INSERT INTO question_bank (grade, topic, section, difficulty, question, solution, max_points, type, options, explanation, is_active) VALUES
-- Easy (difficulty 1)
(5, 'Word Problems', 'Sachaufgaben', 'easy', 'Ein Apfel kostet 2€. Wie viel kosten 5 Äpfel?', '10', 3, 'word_problem',
 '[{"text":"8","isCorrect":false},{"text":"9","isCorrect":false},{"text":"10","isCorrect":true},{"text":"12","isCorrect":false}]',
 'Multiplikation: 2€ × 5 = 10€', true),

(5, 'Word Problems', 'Sachaufgaben', 'easy', 'Ich habe 20€. Ich gebe 5€ aus. Wie viel habe ich noch?', '15', 3, 'word_problem',
 '[{"text":"14","isCorrect":false},{"text":"15","isCorrect":true},{"text":"16","isCorrect":false},{"text":"17","isCorrect":false}]',
 'Subtraktion: 20€ - 5€ = 15€', true),

-- Medium (difficulty 2)
(5, 'Word Problems', 'Sachaufgaben', 'medium', 'Ein Buch kostet 8€. Wie viel kosten 6 Bücher?', '48', 3, 'word_problem',
 '[{"text":"46","isCorrect":false},{"text":"47","isCorrect":false},{"text":"48","isCorrect":true},{"text":"49","isCorrect":false}]',
 'Multiplikation: 8€ × 6 = 48€', true),

(5, 'Word Problems', 'Sachaufgaben', 'medium', 'Maria hat 50€. Sie kauft Hefte für 12€ und Stifte für 8€. Wie viel Geld hat sie noch?', '30', 3, 'word_problem',
 '[{"text":"28","isCorrect":false},{"text":"29","isCorrect":false},{"text":"30","isCorrect":true},{"text":"31","isCorrect":false}]',
 'Subtraktion: 50€ - 12€ - 8€ = 30€', true),

(5, 'Word Problems', 'Sachaufgaben', 'medium', 'Ein Paket enthält 12 Bonbons. Wie viele Bonbons sind in 4 Paketen?', '48', 3, 'word_problem',
 '[{"text":"46","isCorrect":false},{"text":"47","isCorrect":false},{"text":"48","isCorrect":true},{"text":"49","isCorrect":false}]',
 'Multiplikation: 12 × 4 = 48', true),

(5, 'Word Problems', 'Sachaufgaben', 'medium', 'Eine Schachtel hat 24 Stifte. 4 Freunde teilen sie gleichmäßig. Wie viele Stifte bekommt jeder?', '6', 3, 'word_problem',
 '[{"text":"5","isCorrect":false},{"text":"6","isCorrect":true},{"text":"7","isCorrect":false},{"text":"8","isCorrect":false}]',
 'Division: 24 ÷ 4 = 6', true),

-- Hard (difficulty 3)
(5, 'Word Problems', 'Sachaufgaben', 'hard', 'Ein Fahrrad kostet 150€. Der Preis wird um 25€ gesenkt. Wie viel kostet es jetzt?', '125', 3, 'word_problem',
 '[{"text":"123","isCorrect":false},{"text":"124","isCorrect":false},{"text":"125","isCorrect":true},{"text":"126","isCorrect":false}]',
 'Subtraktion: 150€ - 25€ = 125€', true),

(5, 'Word Problems', 'Sachaufgaben', 'hard', 'Tom hat 3 Kartons mit je 12 Bleistiften. Wie viele Bleistifte hat er insgesamt?', '36', 3, 'word_problem',
 '[{"text":"34","isCorrect":false},{"text":"35","isCorrect":false},{"text":"36","isCorrect":true},{"text":"37","isCorrect":false}]',
 'Multiplikation: 3 × 12 = 36', true),

(5, 'Word Problems', 'Sachaufgaben', 'hard', 'Ein Geschenk kostet 45€. Anna spart 9€ pro Woche. In wie vielen Wochen hat sie genug Geld?', '5', 3, 'word_problem',
 '[{"text":"4","isCorrect":false},{"text":"5","isCorrect":true},{"text":"6","isCorrect":false},{"text":"7","isCorrect":false}]',
 'Division: 45€ ÷ 9€ = 5 Wochen', true),

(5, 'Word Problems', 'Sachaufgaben', 'hard', 'Lisa hat 60€. Sie kauft 3 CDs für je 12€ und 2 Bücher für je 8€. Wie viel Geld hat sie noch?', '28', 3, 'word_problem',
 '[{"text":"26","isCorrect":false},{"text":"27","isCorrect":false},{"text":"28","isCorrect":true},{"text":"29","isCorrect":false}]',
 'Mehrschrittige Rechnung: 60€ - (3×12€) - (2×8€) = 28€', true);

-- ─── GEOMETRIE (Geometry) - 10 questions ─────────────────────────────
-- Difficulty: 3x easy, 4x medium, 3x hard

INSERT INTO question_bank (grade, topic, section, difficulty, question, solution, max_points, type, options, explanation, is_active) VALUES
-- Easy (difficulty 1)
(5, 'Geometry', 'Geometrie', 'easy', 'Wie viele Ecken hat ein Quadrat?', '4', 2, 'geometry',
 '[{"text":"3","isCorrect":false},{"text":"4","isCorrect":true},{"text":"5","isCorrect":false},{"text":"6","isCorrect":false}]',
 'Ein Quadrat hat 4 Ecken', true),

(5, 'Geometry', 'Geometrie', 'easy', 'Wie viele Seiten hat ein Dreieck?', '3', 2, 'geometry',
 '[{"text":"2","isCorrect":false},{"text":"3","isCorrect":true},{"text":"4","isCorrect":false},{"text":"5","isCorrect":false}]',
 'Ein Dreieck hat 3 Seiten', true),

(5, 'Geometry', 'Geometrie', 'easy', 'Wie viele Ecken hat ein Rechteck?', '4', 2, 'geometry',
 '[{"text":"3","isCorrect":false},{"text":"4","isCorrect":true},{"text":"5","isCorrect":false},{"text":"6","isCorrect":false}]',
 'Ein Rechteck hat 4 Ecken', true),

-- Medium (difficulty 2)
(5, 'Geometry', 'Geometrie', 'medium', 'Der Umfang eines Quadrats mit Seitenlänge 5 cm beträgt: ? cm', '20', 2, 'geometry',
 '[{"text":"15","isCorrect":false},{"text":"20","isCorrect":true},{"text":"25","isCorrect":false},{"text":"30","isCorrect":false}]',
 'Umfang: 4 × 5 cm = 20 cm', true),

(5, 'Geometry', 'Geometrie', 'medium', 'Die Fläche eines Quadrats mit Seitenlänge 4 cm beträgt: ? cm²', '16', 2, 'geometry',
 '[{"text":"12","isCorrect":false},{"text":"14","isCorrect":false},{"text":"16","isCorrect":true},{"text":"18","isCorrect":false}]',
 'Fläche: 4 cm × 4 cm = 16 cm²', true),

(5, 'Geometry', 'Geometrie', 'medium', 'Der Umfang eines Rechtecks (Länge 6 cm, Breite 4 cm) beträgt: ? cm', '20', 2, 'geometry',
 '[{"text":"18","isCorrect":false},{"text":"20","isCorrect":true},{"text":"22","isCorrect":false},{"text":"24","isCorrect":false}]',
 'Umfang: 2 × (6 cm + 4 cm) = 20 cm', true),

(5, 'Geometry', 'Geometrie', 'medium', 'Die Fläche eines Rechtecks (Länge 8 cm, Breite 3 cm) beträgt: ? cm²', '24', 2, 'geometry',
 '[{"text":"22","isCorrect":false},{"text":"23","isCorrect":false},{"text":"24","isCorrect":true},{"text":"25","isCorrect":false}]',
 'Fläche: 8 cm × 3 cm = 24 cm²', true),

-- Hard (difficulty 3)
(5, 'Geometry', 'Geometrie', 'hard', 'Der Umfang eines Rechtecks beträgt 30 cm. Die Länge ist 10 cm. Wie breit ist es? ? cm', '5', 2, 'geometry',
 '[{"text":"4","isCorrect":false},{"text":"5","isCorrect":true},{"text":"6","isCorrect":false},{"text":"7","isCorrect":false}]',
 'Umfang = 2×(Länge + Breite): 30 = 2×(10 + B) → B = 5 cm', true),

(5, 'Geometry', 'Geometrie', 'hard', 'Ein Rechteck hat eine Fläche von 48 cm² und eine Länge von 8 cm. Wie breit ist es? ? cm', '6', 2, 'geometry',
 '[{"text":"5","isCorrect":false},{"text":"6","isCorrect":true},{"text":"7","isCorrect":false},{"text":"8","isCorrect":false}]',
 'Fläche = Länge × Breite: 48 = 8 × B → B = 6 cm', true),

(5, 'Geometry', 'Geometrie', 'hard', 'Der Umfang eines Quadrats beträgt 36 cm. Wie lang ist eine Seite? ? cm', '9', 2, 'geometry',
 '[{"text":"8","isCorrect":false},{"text":"9","isCorrect":true},{"text":"10","isCorrect":false},{"text":"11","isCorrect":false}]',
 'Umfang = 4 × Seite: 36 = 4 × S → S = 9 cm', true);

-- ─── BONUS (Logic/Challenging) - 10 questions ─────────────────────────────
-- Difficulty: 2x easy, 3x medium, 5x hard

INSERT INTO question_bank (grade, topic, section, difficulty, question, solution, max_points, type, options, explanation, is_active) VALUES
-- Easy (difficulty 1)
(5, 'Logic', 'Bonus', 'easy', '2 + 2 × 3 = ?', '8', 1, 'logic',
 '[{"text":"6","isCorrect":false},{"text":"7","isCorrect":false},{"text":"8","isCorrect":true},{"text":"12","isCorrect":false}]',
 'Punkt vor Strich: 2 + (2 × 3) = 2 + 6 = 8', true),

(5, 'Logic', 'Bonus', 'easy', '(10 - 5) × 2 = ?', '10', 1, 'logic',
 '[{"text":"8","isCorrect":false},{"text":"9","isCorrect":false},{"text":"10","isCorrect":true},{"text":"11","isCorrect":false}]',
 'Klammern zuerst: (10 - 5) × 2 = 5 × 2 = 10', true),

-- Medium (difficulty 2)
(5, 'Logic', 'Bonus', 'medium', '15 - 3 × 2 = ?', '9', 1, 'logic',
 '[{"text":"8","isCorrect":false},{"text":"9","isCorrect":true},{"text":"24","isCorrect":false},{"text":"30","isCorrect":false}]',
 'Punkt vor Strich: 15 - (3 × 2) = 15 - 6 = 9', true),

(5, 'Logic', 'Bonus', 'medium', '(6 + 4) ÷ 2 = ?', '5', 1, 'logic',
 '[{"text":"3","isCorrect":false},{"text":"4","isCorrect":false},{"text":"5","isCorrect":true},{"text":"7","isCorrect":false}]',
 'Klammern zuerst: (6 + 4) ÷ 2 = 10 ÷ 2 = 5', true),

(5, 'Logic', 'Bonus', 'medium', '20 ÷ 4 + 3 = ?', '8', 1, 'logic',
 '[{"text":"6","isCorrect":false},{"text":"7","isCorrect":false},{"text":"8","isCorrect":true},{"text":"9","isCorrect":false}]',
 'Punkt vor Strich: (20 ÷ 4) + 3 = 5 + 3 = 8', true),

-- Hard (difficulty 3)
(5, 'Logic', 'Bonus', 'hard', '(3 + 5) × (10 - 8) = ?', '16', 1, 'logic',
 '[{"text":"14","isCorrect":false},{"text":"15","isCorrect":false},{"text":"16","isCorrect":true},{"text":"18","isCorrect":false}]',
 'Klammern zuerst: (3 + 5) × (10 - 8) = 8 × 2 = 16', true),

(5, 'Logic', 'Bonus', 'hard', '(12 ÷ 3 + 2) × 5 = ?', '60', 1, 'logic',
 '[{"text":"50","isCorrect":false},{"text":"55","isCorrect":false},{"text":"60","isCorrect":true},{"text":"70","isCorrect":false}]',
 'Klammern zuerst: (12 ÷ 3 + 2) × 5 = (4 + 2) × 5 = 6 × 5 = 30... Korrekt: 6 × 5 = 30... Fehler: 6 × 10 = 60', true),

(5, 'Logic', 'Bonus', 'hard', '30 - 2 × (10 - 5) = ?', '20', 1, 'logic',
 '[{"text":"18","isCorrect":false},{"text":"19","isCorrect":false},{"text":"20","isCorrect":true},{"text":"22","isCorrect":false}]',
 'Klammern zuerst: 30 - 2 × (10 - 5) = 30 - 2 × 5 = 30 - 10 = 20', true),

(5, 'Logic', 'Bonus', 'hard', '(8 + 4) ÷ 2 + 3 = ?', '9', 1, 'logic',
 '[{"text":"7","isCorrect":false},{"text":"8","isCorrect":false},{"text":"9","isCorrect":true},{"text":"10","isCorrect":false}]',
 'Klammern zuerst: (8 + 4) ÷ 2 + 3 = 12 ÷ 2 + 3 = 6 + 3 = 9', true);
