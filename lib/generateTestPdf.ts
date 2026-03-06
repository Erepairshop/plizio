"use client";

import jsPDF from "jspdf";
import type { GradeResult, KlassenarbeitResult, MathQuestion, SectionResult } from "./mathCurriculum";
import type {
  SchoolTaskBlock,
  SchoolTaskAnswers,
  KopfrechnenData,
  SchriftlichData,
  ZahlenreiheData,
  SachaufgabeData,
  AufgabenData,
} from "./schoolTaskGenerator";

interface PdfTestData {
  gradeLevel: string;
  testType: "practice" | "klassenarbeit";
  date: string;
  elapsedTime: number;
  questions: MathQuestion[];
  answers: (number | string | null)[];
  gradeResult: GradeResult;
  klassenarbeitResult?: KlassenarbeitResult;
  studentName?: string;
  countryCode?: string;
  // School test (grade 1-4)
  schoolTasks?: SchoolTaskBlock[];
  schoolAnswers?: SchoolTaskAnswers;
}

type PdfLang = 'DE' | 'EN' | 'HU' | 'RO';
function getPdfLang(cc?: string): PdfLang {
  if (cc === 'US' || cc === 'GB') return 'EN';
  if (cc === 'AT' || cc === 'CH') return 'DE';
  if (cc === 'RO') return 'RO';
  if (cc === 'DE') return 'DE';
  return 'HU';
}

// ─── Grade: numeric (DE/HU/RO) vs letter (EN) ────────────────────
function getNoteValue(pct: number): number {
  if (pct >= 90) return 1;
  if (pct >= 80) return 2;
  if (pct >= 65) return 3;
  if (pct >= 50) return 4;
  if (pct >= 30) return 5;
  return 6;
}

// For EN: A/B/C/D/F letters mapped to note positions 1-6
const EN_LETTER: Record<number, string> = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'F', 6: 'F' };

const NOTE_LABELS: Record<PdfLang, Record<number, string>> = {
  DE: { 1: 'Sehr gut', 2: 'Gut', 3: 'Befriedigend', 4: 'Ausreichend', 5: 'Mangelhaft', 6: 'Ungenügend' },
  EN: { 1: 'Excellent', 2: 'Good', 3: 'Satisfactory', 4: 'Adequate', 5: 'Poor', 6: 'Failing' },
  HU: { 1: 'Jeles', 2: 'Jó', 3: 'Közepes', 4: 'Elégséges', 5: 'Elégtelen', 6: 'Elégtelen' },
  RO: { 1: 'Excelent', 2: 'Bine', 3: 'Satisfăcător', 4: 'Suficient', 5: 'Insuficient', 6: 'Insuficient' },
};

function getNoteLabel(note: number, lang: PdfLang): string {
  return NOTE_LABELS[lang][note] || '';
}

function getNoteColorRGB(note: number): [number, number, number] {
  const map: Record<number, [number, number, number]> = {
    1: [22, 163, 74],
    2: [37, 99, 235],
    3: [217, 119, 6],
    4: [234, 88, 12],
    5: [220, 38, 38],
    6: [124, 58, 237],
  };
  return map[note] ?? [100, 100, 100];
}

// ─── Teacher messages per language ───────────────────────────────
const PDF_MSGS: Record<PdfLang, { excellent: ((n: string) => string)[]; good: ((n: string) => string)[]; improve: ((n: string) => string)[] }> = {
  DE: {
    excellent: [
      (n) => `Bravo, ${n}! Ausgezeichnet!`, (n) => `${n}, du bist ein Mathegenie!`,
      (n) => `Wunderbar, ${n}! Ich bin so stolz!`, (n) => `Fantastisch, ${n}! Weiter so!`,
      (n) => `Super gemacht, ${n}! Top-Leistung!`, (n) => `Klasse, ${n}! Du hast alles drauf!`,
      (n) => `Sehr gut, ${n}! Eine echte Spitzenleistung!`,
    ],
    good: [
      (n) => `Gut gemacht, ${n}! Ub weiter!`, (n) => `${n}, du bist auf dem richtigen Weg!`,
      (n) => `Nicht schlecht, ${n}! Du kannst noch mehr!`, (n) => `Weiter so, ${n}! Du wirst immer besser!`,
      (n) => `Prima, ${n}! Ich glaube an dich!`, (n) => `Ordentlich, ${n}! Ein bisschen mehr ueben!`,
      (n) => `Brav gemacht, ${n}! Du schaffst es!`,
    ],
    improve: [
      (n) => `Ub weiter, ${n}! Du schaffst das!`, (n) => `Nicht aufgeben, ${n}! Jeder lernt!`,
      (n) => `${n}, versuche es nochmal! Ich glaube an dich!`, (n) => `Kopf hoch, ${n}! Beim naechsten Mal klappt es!`,
      (n) => `${n}, ueben macht den Meister! Weiter so!`, (n) => `Kein Problem, ${n}! Wir ueben zusammen!`,
      (n) => `${n}, du gibst nicht auf! Das ist toll!`,
    ],
  },
  EN: {
    excellent: [
      (n) => `Bravo, ${n}! Outstanding!`, (n) => `${n}, you're a math genius!`,
      (n) => `Wonderful, ${n}! I'm so proud!`, (n) => `Fantastic, ${n}! Keep it up!`,
      (n) => `Great work, ${n}! Top performance!`, (n) => `Excellent, ${n}! You've got it all!`,
      (n) => `Very well done, ${n}! A true star!`,
    ],
    good: [
      (n) => `Good job, ${n}! Keep practicing!`, (n) => `${n}, you're on the right track!`,
      (n) => `Not bad, ${n}! You can do even more!`, (n) => `Keep going, ${n}! You're improving!`,
      (n) => `Nice work, ${n}! I believe in you!`, (n) => `Solid effort, ${n}! A little more practice!`,
      (n) => `Well done, ${n}! You can do it!`,
    ],
    improve: [
      (n) => `Keep practicing, ${n}! You'll get there!`, (n) => `Don't give up, ${n}! Everyone learns!`,
      (n) => `${n}, try again! I believe in you!`, (n) => `Chin up, ${n}! Next time will be better!`,
      (n) => `${n}, practice makes perfect! Keep going!`, (n) => `No problem, ${n}! We'll practice together!`,
      (n) => `${n}, you didn't give up! That's great!`,
    ],
  },
  HU: {
    excellent: [
      (n) => `Bravo, ${n}! Remek munka!`, (n) => `${n}, te igazi matek zseni vagy!`,
      (n) => `Csodalatos, ${n}! Nagyon buszke vagyok rad!`, (n) => `Fantasztikus, ${n}! Csak igy tovabb!`,
      (n) => `Szuper, ${n}! Kivalo teljesitmeny!`, (n) => `Nagyszeruu, ${n}! Mindent tud!`,
      (n) => `Nagyon jo, ${n}! Valodi sztarteljesitmeny!`,
    ],
    good: [
      (n) => `Jo munka, ${n}! Gyakorolj tovabb!`, (n) => `${n}, jo uton jarsz!`,
      (n) => `Nem rossz, ${n}! Meg tobb is kitelik tolled!`, (n) => `Csak igy tovabb, ${n}! Egyre jobb leszel!`,
      (n) => `Szep, ${n}! Hiszek benned!`, (n) => `Rendesen, ${n}! Meg egy kicsit gyakorolj!`,
      (n) => `Ugyesen, ${n}! Sikerulni fog!`,
    ],
    improve: [
      (n) => `Gyakorolj tovabb, ${n}! Sikerulni fog!`, (n) => `Ne add fel, ${n}! Mindenki tanul!`,
      (n) => `${n}, probald meg ujra! Hiszek benned!`, (n) => `Tartsd a fejed, ${n}! Legkozelebb menni fog!`,
      (n) => `${n}, a gyakorlat teszi a mestert!`, (n) => `Semmi gond, ${n}! Egyutt tanulunk!`,
      (n) => `${n}, nem adtad fel! Ez nagyszeruu!`,
    ],
  },
  RO: {
    excellent: [
      (n) => `Bravo, ${n}! Excelent!`, (n) => `${n}, esti un geniu la matematica!`,
      (n) => `Minunat, ${n}! Sunt atat de mandru!`, (n) => `Fantastic, ${n}! Continua tot asa!`,
      (n) => `Super, ${n}! Performanta de top!`, (n) => `Excelent, ${n}! Le stii pe toate!`,
      (n) => `Foarte bine, ${n}! O adevarata stea!`,
    ],
    good: [
      (n) => `Bine, ${n}! Continua sa exersezi!`, (n) => `${n}, esti pe drumul cel bun!`,
      (n) => `Nu e rau, ${n}! Poti si mai mult!`, (n) => `Continua, ${n}! Te imbunatatesti!`,
      (n) => `Frumos, ${n}! Cred in tine!`, (n) => `Corect, ${n}! Mai putin exercitiu!`,
      (n) => `Bun, ${n}! Poti reusi!`,
    ],
    improve: [
      (n) => `Exerseaza, ${n}! O sa reusesti!`, (n) => `Nu renunta, ${n}! Toti invatam!`,
      (n) => `${n}, mai incearca! Cred in tine!`, (n) => `Tine capul sus, ${n}! Data viitoare va fi mai bine!`,
      (n) => `${n}, practica face perfectul!`, (n) => `Nicio problema, ${n}! Exersam impreuna!`,
      (n) => `${n}, nu ai renuntat! Asta e grozav!`,
    ],
  },
};

const PDF_UI: Record<PdfLang, {
  header: string; headerPractice: string; correct: string; teacher: string;
  noteWord: string; section: string; tasks: string; student: string; page: string;
}> = {
  DE: { header: 'KLASSENARBEIT — MATHEMATIK', headerPractice: 'MATHE-ÜBUNGSTEST', correct: 'richtig', teacher: 'Lehrerin', noteWord: 'Note', section: 'Ergebnisse nach Abschnitt:', tasks: 'Aufgaben und Korrekturen', student: 'Schüler', page: 'Seite' },
  EN: { header: 'MATH TEST', headerPractice: 'MATH PRACTICE TEST', correct: 'correct', teacher: 'Teacher', noteWord: 'Grade', section: 'Results by section:', tasks: 'Questions & Corrections', student: 'Student', page: 'Page' },
  HU: { header: 'MATEK DOLGOZAT', headerPractice: 'MATEK GYAKORLÓTEST', correct: 'helyes', teacher: 'Tanár', noteWord: 'Jegy', section: 'Eredmények részletesen:', tasks: 'Feladatok és javítások', student: 'Tanuló', page: 'Oldal' },
  RO: { header: 'TEST DE MATEMATICĂ', headerPractice: 'TEST DE PRACTICĂ MATEMATICĂ', correct: 'corect', teacher: 'Profesor', noteWord: 'Nota', section: 'Rezultate pe secțiuni:', tasks: 'Întrebări și corecturi', student: 'Elev', page: 'Pagina' },
};

function getTeacherMessage(pct: number, name: string, lang: PdfLang): string {
  const seed = Math.floor(Date.now() / 10000) % 7;
  const pool = PDF_MSGS[lang];
  if (pct >= 85) return pool.excellent[seed](name);
  if (pct >= 55) return pool.good[seed](name);
  return pool.improve[seed](name);
}

export function generateTestPdf(data: PdfTestData): void {
  const lang = getPdfLang(data.countryCode);
  const ui = PDF_UI[lang];
  const isEN = lang === 'EN';
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = 210;
  const pageH = 297;
  const marginL = 22; // left margin (space for the red line)
  const marginR = 16;
  const contentW = pageW - marginL - marginR;
  let y = 0;

  // ── Helpers ──────────────────────────────────────────────────────────
  const newPage = () => {
    doc.addPage();
    y = 28;
    drawPageDecoration();
  };

  const checkPageBreak = (needed = 12) => {
    if (y + needed > pageH - 20) newPage();
  };

  // Draw the paper background decoration (grid + red margin line)
  const drawPageDecoration = () => {
    // Cream paper background
    doc.setFillColor(255, 253, 240);
    doc.rect(0, 0, pageW, pageH, "F");

    // Fine grid lines (like notebook paper)
    doc.setDrawColor(190, 205, 220);
    doc.setLineWidth(0.15);
    // Horizontal lines every 7mm
    for (let gy = 25; gy < pageH; gy += 7) {
      doc.line(marginL - 4, gy, pageW - 8, gy);
    }
    // Red margin line
    doc.setDrawColor(220, 100, 100);
    doc.setLineWidth(0.6);
    doc.line(marginL - 4, 10, marginL - 4, pageH - 10);
  };

  // ── Start first page ─────────────────────────────────────────────────
  drawPageDecoration();
  y = 14;

  // ── HEADER (blue bar at top) ──────────────────────────────────────────
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageW, 12, "F");

  // Title in header bar
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  const title = data.testType === "klassenarbeit" ? ui.header : ui.headerPractice;
  doc.text(title, marginL - 2, 8);

  // Grade level right-aligned in header
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(data.gradeLevel, pageW - marginR, 8, { align: "right" });

  y = 18;

  // ── STUDENT INFO ROW ──────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  const displayName = data.studentName || ui.student;
  doc.text(displayName, marginL, y);

  // Date right-aligned
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  const mins = Math.floor(data.elapsedTime / 60);
  const secs = data.elapsedTime % 60;
  doc.text(`${data.date}  ·  ${mins}:${secs.toString().padStart(2, "0")} min`, pageW - marginR, y, { align: "right" });

  y += 5;

  // Thin separator below student info
  doc.setDrawColor(200, 210, 220);
  doc.setLineWidth(0.4);
  doc.line(marginL - 2, y, pageW - marginR, y);
  y += 8;

  // ── GRADE CIRCLE ─────────────────────────────────────────────────────
  const noteValue = data.klassenarbeitResult
    ? Math.round(data.klassenarbeitResult.note.value)
    : getNoteValue(data.gradeResult.percentage);
  const noteLabel = getNoteLabel(noteValue, lang);
  const noteRGB = getNoteColorRGB(noteValue);
  // EN uses letter grades (A/B/C/D/F), others use numbers (1-6)
  const noteDisplay = isEN ? EN_LETTER[noteValue] : String(noteValue);

  // Draw circle
  const circleX = pageW - marginR - 14;
  const circleY = y + 12;
  const circleR = 12;
  doc.setFillColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.setDrawColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.circle(circleX, circleY, circleR, "F");

  // Grade number inside circle
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text(noteDisplay, circleX, circleY + 5, { align: "center" });

  // Note label below circle
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.text(noteLabel, circleX, circleY + circleR + 4, { align: "center" });

  // Score text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  const displayScore = Number.isInteger(data.gradeResult.score) ? data.gradeResult.score : Math.round(data.gradeResult.score * 10) / 10;
  const displayTotal = Number.isInteger(data.gradeResult.total) ? data.gradeResult.total : Math.round(data.gradeResult.total * 10) / 10;
  doc.text(`${displayScore}/${displayTotal} ${ui.correct}`, marginL, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(`${data.gradeResult.percentage}%`, marginL, y + 13);

  y += 28;

  // ── SECTION RESULTS (Klassenarbeit only) ────────────────────────────
  if (data.klassenarbeitResult && data.klassenarbeitResult.sectionResults.length > 1) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    doc.text(ui.section, marginL, y);
    y += 5;

    data.klassenarbeitResult.sectionResults.forEach((sec: SectionResult) => {
      checkPageBreak(7);
      const pct = Math.round((sec.earnedPoints / sec.maxPoints) * 100);
      const sRGB = pct >= 60 ? getNoteColorRGB(1) : getNoteColorRGB(5);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text(`${sec.name}:`, marginL + 2, y);
      doc.text(`${sec.earnedPoints}/${sec.maxPoints} P.  (${pct}%)`, marginL + 65, y);

      // Mini bar
      const barX = marginL + 110;
      const barW = 48;
      doc.setFillColor(220, 230, 240);
      doc.rect(barX, y - 3, barW, 3, "F");
      doc.setFillColor(sRGB[0], sRGB[1], sRGB[2]);
      doc.rect(barX, y - 3, (barW * pct) / 100, 3, "F");

      y += 6;
    });
    y += 3;
  }

  // ── DIVIDER before questions ─────────────────────────────────────────
  doc.setDrawColor(180, 195, 210);
  doc.setLineWidth(0.3);
  doc.line(marginL - 2, y, pageW - marginR, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  doc.text(ui.tasks, marginL, y);
  y += 7;

  // ── QUESTIONS (MCQ) or SCHOOL TASKS ─────────────────────────────────────
  if (data.schoolTasks && data.schoolTasks.length > 0) {
    // ── SCHOOL TASKS ─────────────────────────────────────────────────────
    const schoolAnswers = data.schoolAnswers || {};

    // Helper: extract readable question text from block data
    const getQText = (block: SchoolTaskBlock, sqIndex: number): string => {
      const d = block.data;
      if (block.type === 'kopfrechnen') return (d as KopfrechnenData).items[sqIndex]?.expr || `${sqIndex + 1}.`;
      if (block.type === 'schriftlich') {
        const item = (d as SchriftlichData).items[sqIndex];
        return item ? `${item.a} ${item.op} ${item.b} = ?` : `${sqIndex + 1}.`;
      }
      if (block.type === 'zahlenreihe') {
        const row = (d as ZahlenreiheData).rows[sqIndex];
        if (!row) return `${sqIndex + 1}.`;
        const given = row.given.map((n, i) => row.given[i] !== undefined ? n : '?').join(', ');
        return `${given}, ...`;
      }
      if (block.type === 'sachaufgabe') return (d as SachaufgabeData).items[sqIndex]?.text || `${sqIndex + 1}.`;
      if (block.type === 'aufgaben') return (d as AufgabenData).items[sqIndex]?.question || `${sqIndex + 1}.`;
      return `${sqIndex + 1}.`;
    };

    const CIRCLE_NUMS = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];

    data.schoolTasks.forEach((block, bi) => {
      checkPageBreak(14);

      // Block header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59);
      const circleNum = CIRCLE_NUMS[bi] || `${bi + 1}.`;
      doc.text(`${circleNum}  ${block.title}`, marginL, y);

      // Points badge
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(`${block.totalPoints} P.`, pageW - marginR, y, { align: "right" });

      y += 6;

      // Separator under header
      doc.setDrawColor(180, 195, 210);
      doc.setLineWidth(0.3);
      doc.line(marginL, y - 1, pageW - marginR, y - 1);
      y += 3;

      // Sub-questions
      block.subQuestions.forEach((sq, qi) => {
        const userAnswer = schoolAnswers[sq.id];
        const isCorrect = userAnswer !== undefined && String(userAnswer).trim() === String(sq.answer).trim();
        const questionText = getQText(block, qi);

        const qLines = doc.splitTextToSize(`${qi + 1}.  ${questionText}`, contentW - 10);
        checkPageBreak(qLines.length * 4.5 + 8);

        // Colored circle indicator
        doc.setFillColor(isCorrect ? 22 : 220, isCorrect ? 163 : 38, isCorrect ? 74 : 38);
        doc.circle(marginL + 2.5, y - 1.5, 2.8, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7);
        doc.text(String(qi + 1), marginL + 2.5, y - 0.2, { align: "center" });

        // Question text
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(30, 41, 59);
        const qTextLines = doc.splitTextToSize(questionText, contentW - 12);
        doc.text(qTextLines, marginL + 8, y);
        y += qTextLines.length * 4.5;

        // Answer
        if (isCorrect) {
          doc.setTextColor(22, 163, 74);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.text(`✓  ${userAnswer}`, marginL + 10, y);
        } else if (userAnswer !== undefined && String(userAnswer).trim() !== '') {
          // Wrong answer with strikethrough
          doc.setTextColor(220, 38, 38);
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          const wrongTxt = String(userAnswer);
          doc.text(wrongTxt, marginL + 10, y);
          const wrongW = doc.getTextWidth(wrongTxt);
          doc.setDrawColor(220, 38, 38);
          doc.setLineWidth(0.5);
          doc.line(marginL + 10, y - 1.5, marginL + 10 + wrongW, y - 1.5);
          doc.setTextColor(22, 163, 74);
          doc.setFont("helvetica", "bold");
          doc.text(` → ${sq.answer}`, marginL + 10 + wrongW + 2, y);
        } else {
          // No answer
          doc.setTextColor(220, 38, 38);
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.text("—", marginL + 10, y);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(22, 163, 74);
          doc.text(` → ${sq.answer}`, marginL + 16, y);
        }

        y += 5;
        doc.setDrawColor(210, 220, 230);
        doc.setLineWidth(0.2);
        doc.line(marginL + 6, y - 1, pageW - marginR - 4, y - 1);
        y += 2;
      });

      y += 3;
    });
  } else {
    // ── MCQ QUESTIONS ────────────────────────────────────────────────────
    data.questions.forEach((q, i) => {
      const userAnswer = data.answers[i];
      const isCorrect = userAnswer !== null && String(userAnswer) === String(q.correctAnswer);

      const qLines = doc.splitTextToSize(`${i + 1}.  ${q.question}`, contentW - 6);
      checkPageBreak(qLines.length * 4.5 + 8);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      if (isCorrect) {
        doc.setFillColor(22, 163, 74);
      } else {
        doc.setFillColor(220, 38, 38);
      }
      doc.circle(marginL + 2.5, y - 1.5, 2.8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(7);
      doc.text(String(i + 1), marginL + 2.5, y - 0.2, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      const qText = doc.splitTextToSize(q.question, contentW - 10);
      doc.text(qText, marginL + 8, y);
      y += qText.length * 4.8;

      if (isCorrect) {
        doc.setTextColor(22, 163, 74);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text(`✓  ${userAnswer}`, marginL + 10, y);
      } else {
        if (userAnswer !== null) {
          doc.setTextColor(220, 38, 38);
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          const wrongTxt = String(userAnswer);
          doc.text(wrongTxt, marginL + 10, y);
          const wrongW = doc.getTextWidth(wrongTxt);
          doc.setDrawColor(220, 38, 38);
          doc.setLineWidth(0.5);
          doc.line(marginL + 10, y - 1.5, marginL + 10 + wrongW, y - 1.5);
          doc.setTextColor(22, 163, 74);
          doc.setFont("helvetica", "bold");
          doc.text(` → ${q.correctAnswer}`, marginL + 10 + wrongW + 2, y);
        } else {
          doc.setTextColor(220, 38, 38);
          doc.setFont("helvetica", "italic");
          doc.setFontSize(9);
          doc.text("—", marginL + 10, y);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(22, 163, 74);
          doc.text(` → ${q.correctAnswer}`, marginL + 16, y);
        }
      }
      y += 5.5;

      doc.setDrawColor(210, 220, 230);
      doc.setLineWidth(0.2);
      doc.line(marginL + 6, y - 1, pageW - marginR - 4, y - 1);
      y += 2;
    });
  }

  // ── TEACHER NOTE SECTION ─────────────────────────────────────────────
  checkPageBreak(40);
  y += 4;

  // Yellow sticky-note background
  doc.setFillColor(255, 253, 231);
  doc.setDrawColor(253, 230, 138);
  doc.setLineWidth(0.5);
  const noteBoxY = y;

  const teacherMsg = getTeacherMessage(data.gradeResult.percentage, data.studentName || ui.student, lang);
  const msgLines = doc.splitTextToSize(teacherMsg, contentW - 24);
  const noteBoxH = msgLines.length * 5 + 28;
  doc.roundedRect(marginL, noteBoxY, contentW, noteBoxH, 3, 3, "FD");

  // Ruled lines inside note
  doc.setDrawColor(147, 197, 253);
  doc.setLineWidth(0.4);
  for (let nl = 1; nl <= 4; nl++) {
    const lineY = noteBoxY + 8 + nl * 5.5;
    if (lineY < noteBoxY + noteBoxH - 5) {
      doc.line(marginL + 4, lineY, marginL + contentW - 4, lineY);
    }
  }

  // "Lehrerin:" label
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text(`${ui.teacher}:`, marginL + 6, y + 7);

  // Note badge: "Note: X – Label"
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.text(`${ui.noteWord}: ${noteDisplay}  —  ${noteLabel}`, marginL + 6, y + 13);

  // Teacher message
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  doc.setTextColor(55, 65, 81);
  doc.text(msgLines, marginL + 6, y + 20);

  y = noteBoxY + noteBoxH + 8;

  // ── FOOTER on every page ──────────────────────────────────────────────
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `${ui.page} ${p}/${pageCount}   ·   ${data.date}   ·   PLIZIO`,
      pageW / 2, pageH - 6,
      { align: "center" }
    );
  }

  // ── SAVE ──────────────────────────────────────────────────────────────
  const safeName = (data.studentName || ui.student).replace(/[^a-zA-ZÄÖÜäöüßáéíóöőúüű0-9]/g, "_");
  const prefix = isEN
    ? (data.testType === "klassenarbeit" ? "Math_Test" : "Math_Practice")
    : (data.testType === "klassenarbeit" ? "Klassenarbeit_Mathe" : "Mathetest");
  const fileName = `${prefix}_${safeName}_${data.date.replace(/\./g, "-")}.pdf`;
  doc.save(fileName);
}
