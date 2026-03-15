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

      // Visual block types
      if (block.type.startsWith('visual_')) {
        const sq = block.subQuestions[sqIndex];
        if (!sq?.visualData?.params) return `${sqIndex + 1}.`;
        const p = sq.visualData.params;
        const fmt = (n: number) => n.toFixed(2).replace('.', ',');
        switch (sq.visualType) {
          case 'money': {
            const items = p.items as { name: string; price: number }[];
            const mode = (p.mode as string) || 'total';
            const budget = p.budget as number;
            const itemsStr = items.map(i => `${i.name} (${fmt(i.price)} EUR)`).join(', ');
            if (mode === 'change') return `${itemsStr} | ${lang === 'DE' ? 'Bezahlt' : lang === 'HU' ? 'Fizetes' : 'Paid'}: ${fmt(budget)} EUR → ${lang === 'DE' ? 'Wechselgeld' : lang === 'HU' ? 'Visszajaro' : 'Change'} = ?`;
            return `${itemsStr} → ${lang === 'DE' ? 'Summe' : lang === 'HU' ? 'Osszeg' : 'Total'} = ?`;
          }
          case 'grid-area': {
            const w = p.width as number; const h = p.height as number;
            const mode = p.mode as string;
            return `${w} x ${h} ${lang === 'DE' ? 'Kastchen' : 'grid'} → ${mode === 'area' ? (lang === 'DE' ? 'Flache' : 'Area') : (lang === 'DE' ? 'Umfang' : 'Perimeter')} = ?`;
          }
          case 'uhrzeit': return `${lang === 'DE' ? 'Uhrzeit ablesen' : lang === 'HU' ? 'Ora leolvasas' : 'Read the clock'} = ?`;
          case 'zeichnen': return `${lang === 'DE' ? 'Zeichne' : 'Draw'} ${p.targetLength} cm`;
          case 'messen': return `${lang === 'DE' ? 'Miss die Linie' : 'Measure the line'} = ? cm`;
          case 'sequence': {
            const seq = p.sequence as number[];
            const blanks = p.blanks as number;
            const shown = seq.slice(0, seq.length - blanks);
            return `${shown.join(', ')}, ___  (${p.rule})`;
          }
          case 'timeline': return `${p.startHour}:00 → ${p.endHour}:00 → ${lang === 'DE' ? 'Dauer' : 'Duration'} = ?`;
          case 'number-line': return `${lang === 'DE' ? 'Runde' : 'Round'} ${p.target} → ?`;
          case 'fraction-pizza': return `${lang === 'DE' ? 'Bruch erkennen' : 'Identify fraction'}: ?/${p.denominator}`;
          case 'place-value': return `${lang === 'DE' ? 'Stellenwert' : 'Place value'}: ${(p.number as number).toLocaleString()}`;
          case 'angle': return `${lang === 'DE' ? 'Zeichne einen Winkel' : 'Draw angle'}: ${p.targetAngle} Grad`;
          case 'circle-draw': return `${lang === 'DE' ? 'Zeichne einen Kreis' : 'Draw circle'}: r = ${p.radius} cm`;
          case 'symmetry': return `${lang === 'DE' ? 'Symmetrie erkennen' : 'Symmetry'}`;

          // ── Grade 1 visual types ──────────────────────────────────────
          case 'g1-clock': return `${lang === 'DE' ? 'Uhrzeit ablesen' : lang === 'HU' ? 'Ora leolvasas' : lang === 'RO' ? 'Citeste ceasul' : 'Read the clock'} = ?`;
          case 'g1-number-line': return `${lang === 'DE' ? 'Zahlenstrahl' : 'Number line'}: ${p.min}–${p.max} → ? (${lang === 'DE' ? 'Markierung' : 'marked'})`;
          case 'g1-place-value': {
            const pvQ = p.question as string;
            const pvLabel = pvQ === 'tens' ? (lang === 'DE' ? 'Zehner' : 'Tens') : pvQ === 'ones' ? (lang === 'DE' ? 'Einer' : 'Ones') : (lang === 'DE' ? 'Zahl' : 'Number');
            return `${lang === 'DE' ? 'Stellenwert' : 'Place value'}: ${p.number} → ${pvLabel} = ?`;
          }
          case 'g1-grid-count': return `${lang === 'DE' ? 'Zahle die farbigen Felder' : lang === 'HU' ? 'Szamold a szines mezoket' : 'Count the colored cells'} = ?`;
          case 'g1-sequence': {
            const seqArr = p.sequence as (number | null)[];
            const shown = seqArr.map(v => v !== null ? String(v) : '___').join(', ');
            return `${shown}`;
          }
          case 'g1-coins': {
            const coins = p.coins as { value: number; count: number }[];
            const coinStr = coins.map(c => `${c.count}x${c.value}${p.currency}`).join(' + ');
            return `${coinStr} = ?`;
          }
          case 'g1-timeline': return `${p.startHour}:00 → ${p.endHour}:00 → ${lang === 'DE' ? 'Dauer' : lang === 'HU' ? 'Idotartam' : 'Duration'} = ? h`;
          case 'g1-fraction': {
            const shp = p.shape as string;
            return `${lang === 'DE' ? 'Farbige Teile zahlen' : 'Count colored parts'} (${shp}, ${p.totalParts} ${lang === 'DE' ? 'Teile' : 'parts'}) = ?`;
          }

          // ── Grade 3 visual types ──────────────────────────────────────
          case 'g3-place-value': {
            const g3Q = p.question as string;
            const g3Label = g3Q === 'hundreds' ? (lang === 'DE' ? 'Hunderter' : 'Hundreds') : g3Q === 'tens' ? (lang === 'DE' ? 'Zehner' : 'Tens') : (lang === 'DE' ? 'Einer' : 'Ones');
            return `${lang === 'DE' ? 'Stellenwert' : 'Place value'}: ${p.number} → ${g3Label} = ?`;
          }
          case 'g3-pattern': {
            const patSeq = p.sequence as string[];
            const patBlanks = p.blanks as number;
            const patShown = patSeq.slice(0, patSeq.length - patBlanks).join(', ');
            return `${lang === 'DE' ? 'Muster fortsetzen' : 'Continue pattern'}: ${patShown}, ___, ___ = ?`;
          }
          case 'g3-scale': return `${p.weightA}g ${lang === 'DE' ? 'vs' : 'vs'} ${p.weightB}g → ${lang === 'DE' ? 'Schwerer/Leichter/Gleich' : 'Heavier/Lighter/Equal'}?`;
          case 'g3-shape': return `${lang === 'DE' ? 'Welche Form?' : 'Which shape?'} → ?`;
          case 'g3-barchart': {
            const cats = p.categories as { name: string; value: number }[];
            return `${lang === 'DE' ? 'Balkendiagramm' : 'Bar chart'}: ${cats.map(c => c.name).join(', ')} → ${lang === 'DE' ? 'Wert' : 'Value'} = ?`;
          }
          case 'g3-compose': return `${p.hundreds}H ${p.tens}Z ${p.ones}E = ?`;
          case 'g3-add-objects': return `${p.icon} ${p.groupA} + ${p.groupB} = ?`;
          case 'g3-sub-objects': return `${p.icon} ${p.groupA} − ${p.groupB} = ?`;
          case 'g3-nl-sub': return `${p.start} − ${p.stepSize} x ${p.steps} = ? (${lang === 'DE' ? 'Zahlenstrahl' : 'Number line'})`;
          case 'g3-mul-group': return `${p.icon} ${p.groupA} x ${p.groupB} = ?`;
          case 'g3-mul-array': return `${p.rows} x ${p.cols} = ? (${lang === 'DE' ? 'Punktfeld' : 'Dot array'})`;
          case 'g3-div-share': return `${p.icon} ${p.groupA} ÷ ${p.groupB} = ?`;
          case 'g3-rightangle': return `${lang === 'DE' ? 'Winkeltyp erkennen' : 'Identify angle type'}: ${lang === 'DE' ? 'rechter/spitzer/stumpfer Winkel' : 'right/acute/obtuse'}?`;
          case 'g3-perim-concept': return `${p.width} x ${p.height} → ${lang === 'DE' ? 'Umfang' : 'Perimeter'} = ?`;
          case 'g3-area-compare': {
            const sA = p.shapeA as { width: number; height: number };
            const sB = p.shapeB as { width: number; height: number };
            return `A: ${sA.width}x${sA.height} vs B: ${sB.width}x${sB.height} → ${lang === 'DE' ? 'Grosser' : 'Larger'}?`;
          }

          // ── Grade 5 visual types ──────────────────────────────────────
          case 'g5-place-million': return `${lang === 'DE' ? 'Stellenwert' : 'Place value'}: ${(p.number as number).toLocaleString()} → ?`;
          case 'g5-number-line': return `${lang === 'DE' ? 'Zahlenstrahl' : 'Number line'}: ${p.rangeStart.toLocaleString()}–${p.rangeEnd.toLocaleString()} → ?`;
          case 'g5-rounding-large': return `${lang === 'DE' ? 'Runde' : 'Round'} ${p.target.toLocaleString()} ${lang === 'DE' ? 'auf' : 'to'} ${p.step.toLocaleString()} → ?`;
          case 'g5-mul-array': return `${p.rows} x ${p.cols} = ? (${lang === 'DE' ? 'Punktfeld' : 'Array'})`;
          case 'g5-division-share': return `${p.total} ÷ ${p.groups} = ?`;
          case 'g5-frac-compare': {
            const [nA, dA] = p.fracA as [number, number];
            const [nB, dB] = p.fracB as [number, number];
            return `${nA}/${dA} ${lang === 'DE' ? 'oder' : 'or'} ${nB}/${dB} → ${lang === 'DE' ? 'Grosser' : 'Larger'}?`;
          }
          case 'g5-frac-equiv': {
            const hp = p.hidePart as string;
            return `${p.baseNum}/${p.baseDen} = ?/${p.baseDen * p.multiplier} (${hp === 'numerator' ? (lang === 'DE' ? 'Zahler' : 'numerator') : (lang === 'DE' ? 'Nenner' : 'denominator')})`;
          }
          case 'g5-decimal-place': return `${lang === 'DE' ? 'Dezimalstellen' : 'Decimal places'}: ${p.number} → ?`;
          case 'g5-decimal-line': return `${lang === 'DE' ? 'Dezimal-Zahlenstrahl' : 'Decimal line'}: ${p.rangeStart}–${p.rangeEnd} → ?`;
          case 'g5-balance-scale': {
            const wts = p.leftWeights as number[];
            return `${lang === 'DE' ? 'Waage' : 'Scale'}: ${wts.join('g + ')}g = ? g`;
          }
          case 'g5-shape-props': {
            const propName = p.askProperty === 'sides' ? (lang === 'DE' ? 'Seiten' : 'Sides')
              : p.askProperty === 'right_angles' ? (lang === 'DE' ? 'Rechte Winkel' : 'Right angles')
              : (lang === 'DE' ? 'Parallele Paare' : 'Parallel pairs');
            return `${p.shapeId} → ${propName} = ?`;
          }
          case 'g5-angle-classify': return `${p.degrees}° → ${lang === 'DE' ? 'Winkeltyp' : 'Angle type'}?`;
          case 'g5-neg-line': return `${p.startNum} + (${p.addNum}) = ? (${lang === 'DE' ? 'Zahlenstrahl' : 'Number line'})`;
          case 'g5-volume-cuboid': return `${p.length} x ${p.width} x ${p.height} = ? (${lang === 'DE' ? 'Volumen' : 'Volume'})`;
          case 'g5-perimeter': {
            const sides = p.sides as number[];
            return `${lang === 'DE' ? 'Umfang' : 'Perimeter'}: ${sides.join(' + ')} = ?`;
          }
          case 'g5-area-grid': return `${p.width} x ${p.height} → ${lang === 'DE' ? 'Flache' : 'Area'} = ?`;
          case 'g5-barchart': {
            const qt = p.questionType as string;
            const label = qt === 'max' ? 'Max' : qt === 'min' ? 'Min' : qt === 'total' ? 'Total' : 'Diff';
            return `${lang === 'DE' ? 'Balkendiagramm' : 'Bar chart'} → ${label} = ?`;
          }
          case 'g5-symmetry': return `${lang === 'DE' ? 'Symmetrie spiegeln' : 'Mirror symmetry'} (${p.axis})`;
          case 'g5-unit-convert': return `${p.value} ${p.from} = ? ${p.to}`;
          case 'g5-nl-arith': {
            const op = p.operation === 'add' ? '+' : '−';
            return `${p.start} ${op} ${p.operand} = ? (${lang === 'DE' ? 'Zahlenstrahl' : 'Number line'})`;
          }

          // ── Grade 6 visual types ──────────────────────────────────────
          case 'g6-coord-4q': return `(${p.pointX}, ${p.pointY}) → ${lang === 'DE' ? 'Quadrant' : 'Quadrant'} = ?`;
          case 'g6-pie-chart': {
            const slices = p.slices as { label: string; value: number }[];
            const ti = p.targetIndex as number;
            return `${lang === 'DE' ? 'Kreisdiagramm' : 'Pie chart'}: ${slices[ti]?.label} = ? %`;
          }
          case 'g6-ratio-table': return `${lang === 'DE' ? 'Verhalnistabelle' : 'Ratio table'}: ${p.unitValue} x ? = ?`;
          case 'g6-trapezoid-area': {
            const st = p.shapeType as string;
            const shapeLabel = st === 'trapezoid' ? (lang === 'DE' ? 'Trapez' : 'Trapezoid') : (lang === 'DE' ? 'Parallelogramm' : 'Parallelogram');
            return `${shapeLabel}: a=${p.baseA}, b=${p.baseB}, h=${p.height} → ${lang === 'DE' ? 'Flache' : 'Area'} = ?`;
          }
          case 'g6-percent-bar': return `${lang === 'DE' ? 'Prozent ablesen' : 'Read percentage'}: ? %`;

          // ── Grade 7 visual types ──────────────────────────────────────
          case 'g7-pythagorean': {
            const fc = p.findC as boolean;
            return fc ? `a=${p.a}, b=${p.b} → c = ? (Pythagoras)` : `a=${p.a}, c=${p.b} → b = ? (Pythagoras)`;
          }
          case 'g7-triangle-angles': return `${lang === 'DE' ? 'Dreieck' : 'Triangle'}: ${p.a}° + ${p.b}° + ? = 180°`;
          case 'g7-inequality-line': return `${p.expression} → x = ?`;
          case 'g7-power-grid': {
            const pt = p.type as string;
            return pt === 'square' ? `${p.n}² = ?` : `${p.n}³ = ?`;
          }
          case 'g7-circle': {
            const fa = p.findArea as boolean;
            return fa ? `r=${p.r} → ${lang === 'DE' ? 'Flache' : 'Area'} = ? (pi=3.14)` : `r=${p.r} → ${lang === 'DE' ? 'Umfang' : 'Circumference'} = ? (pi=3.14)`;
          }
          case 'g7-cylinder-volume': return `r=${p.r}, h=${p.h} → V = ? (pi=3.14)`;
          case 'g7-statistics': {
            const stLabel = p.statType === 'median' ? 'Median' : p.statType === 'mode' ? (lang === 'DE' ? 'Modus' : 'Mode') : (lang === 'DE' ? 'Spannweite' : 'Range');
            return `${lang === 'DE' ? 'Daten' : 'Data'}: [${(p.data as number[]).join(', ')}] → ${stLabel} = ?`;
          }

          // ── Grade 8 visual types ──────────────────────────────────────
          case 'g8-function-graph': {
            const sq8 = (p.subQuestions as any[])[0];
            const sign = sq8.b >= 0 ? '+' : '';
            return `f(x) = ${sq8.m}x ${sign} ${sq8.b} → f(${sq8.x}) = ?`;
          }
          case 'g8-probability-tree': {
            const sq8 = (p.subQuestions as any[])[0];
            const qtLabel = sq8.questionType === 'both' ? 'P(A∩B)' : sq8.questionType === 'neither' ? 'P(A\'∩B\')' : 'P(A∪B)';
            return `P(A)=${sq8.p1}%, P(B)=${sq8.p2}% → ${qtLabel} = ? %`;
          }
          case 'g8-quadratic-sqrt': {
            const sq8 = (p.subQuestions as any[])[0];
            return sq8.mode === 'perfect' ? `sqrt(${sq8.n}) = ?` : `sqrt(${sq8.n}) ≈ ? (${lang === 'DE' ? 'Schatzung' : 'estimate'})`;
          }
          case 'g8-systems-balance': {
            const sq8 = (p.subQuestions as any[])[0];
            return `${sq8.eq1}, ${sq8.eq2} → x = ?`;
          }
          case 'g8-transformation-grid': {
            const sq8 = (p.subQuestions as any[])[0];
            const tLabel = sq8.transform === 'translate' ? (lang === 'DE' ? 'Verschiebung' : 'Translation')
              : sq8.transform === 'reflectX' ? (lang === 'DE' ? 'Spiegelung X' : 'Reflect X') : (lang === 'DE' ? 'Spiegelung Y' : 'Reflect Y');
            return `(${sq8.x},${sq8.y}) → ${tLabel} → ?`;
          }
          case 'g8-statistics-histogram': {
            const sq8 = (p.subQuestions as any[])[0];
            const mLabel = sq8.mode === 'mean' ? (lang === 'DE' ? 'Mittelwert' : 'Mean') : 'Median';
            return `${lang === 'DE' ? 'Daten' : 'Data'}: [${(sq8.data as number[]).join(', ')}] → ${mLabel} = ?`;
          }
          case 'g8-cylinder-surface': {
            const sq8 = (p.subQuestions as any[])[0];
            const mLabel = sq8.mode === 'volume' ? 'V' : (lang === 'DE' ? 'Oberflache' : 'Surface');
            return `r=${sq8.r}, h=${sq8.h} → ${mLabel} = ? (pi≈3)`;
          }
          case 'g8-inequality-line': {
            const sq8 = (p.subQuestions as any[])[0];
            return `${sq8.lhs} ${sq8.op} ${sq8.rhs} → x = ?`;
          }
        }
      }

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

      // Helper: draw visual elements for visual blocks
      const drawVisualElement = (sq: SchoolTaskBlock['subQuestions'][0]) => {
        if (!sq.visualData?.params || !block.type.startsWith('visual_')) return;
        const p = sq.visualData.params;
        switch (sq.visualType) {
          case 'money': {
            const items = p.items as { name: string; price: number }[];
            const mode = (p.mode as string) || 'total';
            const budget = p.budget as number;
            const fmt = (n: number) => n.toFixed(2).replace('.', ',') + ' EUR';
            checkPageBreak(items.length * 5 + (mode === 'change' ? 10 : 5));
            // Draw shopping receipt
            doc.setFillColor(240, 253, 244);
            const receiptH = items.length * 6 + (mode === 'change' ? 8 : 2);
            doc.roundedRect(marginL + 8, y - 2, contentW - 16, receiptH, 2, 2, 'F');
            items.forEach(item => {
              doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(30, 41, 59);
              doc.text(item.name, marginL + 12, y + 2);
              doc.setFont('helvetica', 'bold'); doc.setTextColor(22, 101, 52);
              doc.text(fmt(item.price), marginL + contentW - 12, y + 2, { align: 'right' });
              y += 6;
            });
            if (mode === 'change') {
              doc.setDrawColor(187, 247, 208); doc.setLineWidth(0.3);
              doc.line(marginL + 12, y - 2, marginL + contentW - 12, y - 2);
              doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(100, 116, 139);
              const budgetLabel = lang === 'DE' ? 'Bezahlt' : lang === 'HU' ? 'Fizetes' : 'Paid';
              doc.text(`${budgetLabel}:`, marginL + 12, y + 2);
              doc.setTextColor(22, 101, 52);
              doc.text(fmt(budget), marginL + contentW - 12, y + 2, { align: 'right' });
              y += 6;
            }
            y += 2;
            break;
          }
          case 'grid-area': {
            const w = p.width as number; const h = p.height as number;
            const cellSize = 5;
            checkPageBreak(h * cellSize + 8);
            doc.setDrawColor(200, 210, 220); doc.setLineWidth(0.2);
            for (let r = 0; r <= h; r++) doc.line(marginL + 12, y + r * cellSize, marginL + 12 + w * cellSize, y + r * cellSize);
            for (let c = 0; c <= w; c++) doc.line(marginL + 12 + c * cellSize, y, marginL + 12 + c * cellSize, y + h * cellSize);
            y += h * cellSize + 4;
            break;
          }
          case 'uhrzeit': {
            const th = p.targetHour as number; const tm = p.targetMinute as number;
            const cx = marginL + 24; const cy = y + 14; const cr = 12;
            checkPageBreak(30);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.circle(cx, cy, cr); doc.setFillColor(255, 255, 255); doc.circle(cx, cy, cr, 'FD');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            for (let i = 1; i <= 12; i++) {
              const a = (i * 30 - 90) * Math.PI / 180;
              doc.text(String(i), cx + 9 * Math.cos(a), cy + 9 * Math.sin(a) + 1.5, { align: 'center' });
            }
            const hAngle = ((th % 12) + tm / 60) * 30 - 90;
            const mAngle = tm * 6 - 90;
            doc.setDrawColor(15, 23, 42); doc.setLineWidth(0.8);
            doc.line(cx, cy, cx + 6 * Math.cos(hAngle * Math.PI / 180), cy + 6 * Math.sin(hAngle * Math.PI / 180));
            doc.setLineWidth(0.5);
            doc.line(cx, cy, cx + 9 * Math.cos(mAngle * Math.PI / 180), cy + 9 * Math.sin(mAngle * Math.PI / 180));
            y += 30;
            break;
          }
          case 'fraction-pizza': {
            const num = p.numerator as number; const den = p.denominator as number;
            const cx = marginL + 24; const cy = y + 10; const cr = 8;
            checkPageBreak(22);
            for (let i = 0; i < den; i++) {
              const startA = (i * 360 / den - 90) * Math.PI / 180;
              const endA = ((i + 1) * 360 / den - 90) * Math.PI / 180;
              if (i < num) { doc.setFillColor(251, 191, 36); } else { doc.setFillColor(243, 244, 246); }
              // Draw wedge using triangle approximation
              doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
              doc.line(cx, cy, cx + cr * Math.cos(startA), cy + cr * Math.sin(startA));
            }
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.circle(cx, cy, cr);
            y += 22;
            break;
          }
          case 'sequence': {
            const seq = p.sequence as number[]; const blanks = p.blanks as number;
            checkPageBreak(8);
            const shown = seq.slice(0, seq.length - blanks).map(String);
            const blankArr = Array(blanks).fill('___');
            doc.setFont('courier', 'normal'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            doc.text([...shown, ...blankArr].join(',  '), marginL + 12, y + 2);
            y += 8;
            break;
          }
          // ── Grade 1 visual drawings ────────────────────────────────
          case 'g1-clock': {
            const th = p.hour as number; const tm = p.minute as number;
            const cx = marginL + 24; const cy = y + 14; const cr = 12;
            checkPageBreak(30);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.setFillColor(255, 255, 255); doc.circle(cx, cy, cr, 'FD');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            for (let i = 1; i <= 12; i++) {
              const a = (i * 30 - 90) * Math.PI / 180;
              doc.text(String(i), cx + 9 * Math.cos(a), cy + 9 * Math.sin(a) + 1.5, { align: 'center' });
            }
            const hAngle = ((th % 12) + tm / 60) * 30 - 90;
            const mAngle = tm * 6 - 90;
            doc.setDrawColor(15, 23, 42); doc.setLineWidth(0.8);
            doc.line(cx, cy, cx + 6 * Math.cos(hAngle * Math.PI / 180), cy + 6 * Math.sin(hAngle * Math.PI / 180));
            doc.setLineWidth(0.5);
            doc.line(cx, cy, cx + 9 * Math.cos(mAngle * Math.PI / 180), cy + 9 * Math.sin(mAngle * Math.PI / 180));
            y += 30;
            break;
          }
          case 'g1-number-line': {
            const nlMin = p.min as number; const nlMax = p.max as number;
            const nlStep = p.step as number; const nlMarked = p.markedValue as number;
            const lineW = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX = marginL + 12; const nlY2 = y + 6;
            doc.line(nlX, nlY2, nlX + lineW, nlY2);
            const ticks = Math.floor((nlMax - nlMin) / nlStep) + 1;
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(55, 65, 81);
            for (let i = 0; i < ticks; i++) {
              const val = nlMin + i * nlStep;
              const tx = nlX + (val - nlMin) / (nlMax - nlMin) * lineW;
              doc.line(tx, nlY2 - 2, tx, nlY2 + 2);
              if (i % 2 === 0 || ticks <= 11) doc.text(String(val), tx, nlY2 + 6, { align: 'center' });
            }
            // Arrow at marked position
            const mx = nlX + (nlMarked - nlMin) / (nlMax - nlMin) * lineW;
            doc.setDrawColor(220, 38, 38); doc.setLineWidth(0.6);
            doc.line(mx, nlY2 - 6, mx, nlY2 - 2);
            doc.text('?', mx, nlY2 - 7, { align: 'center' });
            y += 14;
            break;
          }
          case 'g1-place-value': {
            const pvNum = p.number as number;
            const tens = Math.floor(pvNum / 10); const ones = pvNum % 10;
            checkPageBreak(12);
            doc.setFont('courier', 'bold'); doc.setFontSize(12); doc.setTextColor(30, 41, 59);
            // Draw place value boxes
            const bx = marginL + 12;
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            doc.rect(bx, y - 3, 12, 8); doc.rect(bx + 14, y - 3, 12, 8);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(100, 116, 139);
            doc.text('T', bx + 6, y - 4, { align: 'center' }); doc.text('O', bx + 20, y - 4, { align: 'center' });
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            doc.text(String(tens), bx + 6, y + 3, { align: 'center' });
            doc.text(String(ones), bx + 20, y + 3, { align: 'center' });
            y += 12;
            break;
          }
          case 'g1-grid-count': {
            const grid = p.grid as boolean[][];
            const rows = grid.length; const cols = grid[0]?.length || 0;
            const cs = 4;
            checkPageBreak(rows * cs + 6);
            doc.setDrawColor(180, 195, 210); doc.setLineWidth(0.2);
            const gx = marginL + 12;
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                if (grid[r][c]) { doc.setFillColor(180, 180, 180); doc.rect(gx + c * cs, y + r * cs, cs, cs, 'FD'); }
                else { doc.rect(gx + c * cs, y + r * cs, cs, cs, 'S'); }
              }
            }
            y += rows * cs + 4;
            break;
          }
          case 'g1-sequence': {
            const seqArr = p.sequence as (number | null)[];
            checkPageBreak(10);
            doc.setFont('courier', 'normal'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            const seqStr = seqArr.map(v => v !== null ? String(v) : '___').join(',  ');
            doc.text(seqStr, marginL + 12, y + 2);
            y += 8;
            break;
          }
          case 'g1-coins': {
            const coins = p.coins as { value: number; count: number }[];
            checkPageBreak(10);
            let cx2 = marginL + 12;
            doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(55, 65, 81);
            coins.forEach(c => {
              for (let i = 0; i < c.count; i++) {
                doc.setDrawColor(100, 100, 100); doc.setLineWidth(0.3);
                doc.circle(cx2 + 4, y + 4, 4, 'S');
                doc.text(`${c.value}`, cx2 + 4, y + 5.5, { align: 'center' });
                cx2 += 10;
              }
              cx2 += 3;
            });
            y += 12;
            break;
          }
          case 'g1-timeline': {
            const sh = p.startHour as number; const eh = p.endHour as number;
            checkPageBreak(12);
            const txStart = marginL + 12; const txEnd = marginL + 12 + contentW - 24;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(txStart, y + 4, txEnd, y + 4);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(55, 65, 81);
            doc.text(`${sh}:00`, txStart, y + 10, { align: 'center' });
            doc.text(`${eh}:00`, txEnd, y + 10, { align: 'center' });
            // Tick marks for each hour
            for (let h = sh; h <= eh; h++) {
              const frac = (h - sh) / (eh - sh);
              const hx = txStart + frac * (txEnd - txStart);
              doc.line(hx, y + 2, hx, y + 6);
            }
            y += 14;
            break;
          }
          case 'g1-fraction': {
            const totalParts = p.totalParts as number; const coloredParts = p.coloredParts as number;
            const shape = p.shape as string;
            const cx = marginL + 24; const cy = y + 10; const cr = 8;
            checkPageBreak(22);
            if (shape === 'rectangle') {
              const rw = 6; const rh = 10;
              doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
              for (let i = 0; i < totalParts; i++) {
                if (i < coloredParts) { doc.setFillColor(180, 180, 180); } else { doc.setFillColor(243, 244, 246); }
                doc.rect(marginL + 12 + i * rw, y, rw, rh, 'FD');
              }
            } else {
              // Circle/pizza
              for (let i = 0; i < totalParts; i++) {
                const startA = (i * 360 / totalParts - 90) * Math.PI / 180;
                doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
                doc.line(cx, cy, cx + cr * Math.cos(startA), cy + cr * Math.sin(startA));
              }
              doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
              doc.circle(cx, cy, cr);
            }
            y += 22;
            break;
          }

          // ── Grade 3 visual drawings ────────────────────────────────
          case 'g3-place-value': {
            const n3 = p.number as number;
            const h = Math.floor(n3 / 100); const t = Math.floor((n3 % 100) / 10); const o = n3 % 10;
            checkPageBreak(12);
            const bx3 = marginL + 12;
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            doc.rect(bx3, y - 3, 12, 8); doc.rect(bx3 + 14, y - 3, 12, 8); doc.rect(bx3 + 28, y - 3, 12, 8);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(100, 116, 139);
            doc.text('H', bx3 + 6, y - 4, { align: 'center' }); doc.text('T', bx3 + 20, y - 4, { align: 'center' }); doc.text('O', bx3 + 34, y - 4, { align: 'center' });
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            doc.text(String(h), bx3 + 6, y + 3, { align: 'center' });
            doc.text(String(t), bx3 + 20, y + 3, { align: 'center' });
            doc.text(String(o), bx3 + 34, y + 3, { align: 'center' });
            y += 12;
            break;
          }
          case 'g3-pattern': {
            const patSeq = p.sequence as string[];
            const patBlanks = p.blanks as number;
            checkPageBreak(10);
            const labels: Record<string, string> = { red: 'R', blue: 'B', green: 'G', yellow: 'Y', purple: 'P' };
            doc.setFont('courier', 'bold'); doc.setFontSize(9); doc.setTextColor(30, 41, 59);
            const visible = patSeq.slice(0, patSeq.length - patBlanks).map(c => labels[c] || c[0].toUpperCase());
            const blanks = Array(patBlanks).fill('__');
            doc.text([...visible, ...blanks].join('  '), marginL + 12, y + 2);
            y += 8;
            break;
          }
          case 'g3-scale': {
            checkPageBreak(14);
            const wA = p.weightA as number; const wB = p.weightB as number;
            const sx = marginL + 12;
            // Simple balance drawing
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            // fulcrum
            doc.line(sx + 30, y + 10, sx + 30, y + 14);
            // beam
            doc.line(sx + 10, y + 10, sx + 50, y + 10);
            // pans
            doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(30, 41, 59);
            doc.text(`${wA}g`, sx + 10, y + 8, { align: 'center' });
            doc.text(`${wB}g`, sx + 50, y + 8, { align: 'center' });
            y += 16;
            break;
          }
          case 'g3-shape': {
            checkPageBreak(10);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(30, 41, 59);
            const opts = p.options as string[];
            doc.text(`[${opts.join(' / ')}]`, marginL + 12, y + 2);
            y += 8;
            break;
          }
          case 'g3-barchart': {
            const cats = p.categories as { name: string; value: number }[];
            const maxVal = Math.max(...cats.map(c => c.value));
            const barMaxH = 20; const barW = 10; const gap = 4;
            checkPageBreak(barMaxH + 12);
            const bx = marginL + 16;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            // y-axis
            doc.line(bx - 2, y, bx - 2, y + barMaxH + 2);
            // x-axis
            doc.line(bx - 2, y + barMaxH + 2, bx + cats.length * (barW + gap), y + barMaxH + 2);
            cats.forEach((cat, ci) => {
              const barH = (cat.value / maxVal) * barMaxH;
              const bxOff = bx + ci * (barW + gap);
              doc.setFillColor(180, 190, 200);
              doc.rect(bxOff, y + barMaxH + 2 - barH, barW, barH, 'F');
              doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.2);
              doc.rect(bxOff, y + barMaxH + 2 - barH, barW, barH, 'S');
              doc.setFont('helvetica', 'bold'); doc.setFontSize(6); doc.setTextColor(55, 65, 81);
              doc.text(cat.name, bxOff + barW / 2, y + barMaxH + 7, { align: 'center' });
              doc.setFont('helvetica', 'normal'); doc.setFontSize(5);
              doc.text(String(cat.value), bxOff + barW / 2, y + barMaxH - barH - 1, { align: 'center' });
            });
            y += barMaxH + 12;
            break;
          }
          case 'g3-compose': {
            checkPageBreak(10);
            const ch = p.hundreds as number; const ct = p.tens as number; const co = p.ones as number;
            const bx = marginL + 12;
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            doc.rect(bx, y - 3, 14, 8); doc.rect(bx + 16, y - 3, 14, 8); doc.rect(bx + 32, y - 3, 14, 8);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(100, 116, 139);
            doc.text('H', bx + 7, y - 4, { align: 'center' }); doc.text('T', bx + 23, y - 4, { align: 'center' }); doc.text('E', bx + 39, y - 4, { align: 'center' });
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            doc.text(String(ch), bx + 7, y + 3, { align: 'center' });
            doc.text(String(ct), bx + 23, y + 3, { align: 'center' });
            doc.text(String(co), bx + 39, y + 3, { align: 'center' });
            y += 10;
            break;
          }
          case 'g3-add-objects':
          case 'g3-sub-objects':
          case 'g3-mul-group':
          case 'g3-div-share': {
            const icon = p.icon as string; const gA = p.groupA as number; const gB = p.groupB as number;
            const mode = p.mode as string;
            checkPageBreak(10);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(30, 41, 59);
            const opStr = mode === 'add' ? '+' : mode === 'sub' ? '−' : mode === 'mul' ? 'x' : '÷';
            doc.text(`${icon.repeat(Math.min(gA, 12))}  ${opStr}  ${icon.repeat(Math.min(gB, 8))}  = ?`, marginL + 12, y + 2);
            y += 8;
            break;
          }
          case 'g3-mul-array': {
            const maRows = p.rows as number; const maCols = p.cols as number;
            const dotR = 1; const dotGap = 3.5;
            const drawRows = Math.min(maRows, 6); const drawCols = Math.min(maCols, 8);
            checkPageBreak(drawRows * dotGap + 6);
            doc.setFillColor(55, 65, 81);
            for (let r = 0; r < drawRows; r++) {
              for (let c = 0; c < drawCols; c++) {
                doc.circle(marginL + 14 + c * dotGap, y + 2 + r * dotGap, dotR, 'F');
              }
            }
            doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(100, 116, 139);
            doc.text(`${maRows} x ${maCols}`, marginL + 14 + drawCols * dotGap + 4, y + 2 + drawRows * dotGap / 2);
            y += drawRows * dotGap + 6;
            break;
          }
          case 'g3-nl-sub': {
            const nlStart = p.start as number; const nlStep = p.stepSize as number; const nlSteps = p.steps as number;
            const nlEnd = nlStart - nlStep * nlSteps;
            const lineW2 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX = marginL + 12; const nlBaseY = y + 6;
            doc.line(nlX, nlBaseY, nlX + lineW2, nlBaseY);
            // Marks at start and jumps
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(55, 65, 81);
            for (let i = 0; i <= nlSteps; i++) {
              const val = nlStart - i * nlStep;
              const frac = i / nlSteps;
              const tx = nlX + frac * lineW2 * 0.8;
              doc.line(tx, nlBaseY - 2, tx, nlBaseY + 2);
              if (i < nlSteps) doc.text(String(val), tx, nlBaseY + 6, { align: 'center' });
              else doc.text('?', tx, nlBaseY + 6, { align: 'center' });
            }
            y += 14;
            break;
          }
          case 'g3-rightangle': {
            checkPageBreak(14);
            const atype = p.angleType as string;
            const ox = marginL + 20; const oy = y + 10;
            const armLen = 10;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            // horizontal arm
            doc.line(ox, oy, ox + armLen, oy);
            // second arm at angle
            const deg = atype === 'right' ? 90 : atype === 'acute' ? 50 : 130;
            const rad = deg * Math.PI / 180;
            doc.line(ox, oy, ox + armLen * Math.cos(-rad), oy + armLen * Math.sin(-rad));
            // right angle marker
            if (atype === 'right') {
              doc.setLineWidth(0.3);
              doc.rect(ox, oy - 3, 3, 3, 'S');
            }
            y += 16;
            break;
          }
          case 'g3-perim-concept': {
            const pcW = p.width as number; const pcH = p.height as number;
            const cellSize = 4;
            checkPageBreak(pcH * cellSize + 8);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.rect(marginL + 12, y, pcW * cellSize, pcH * cellSize, 'S');
            // dimension labels
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(String(pcW), marginL + 12 + pcW * cellSize / 2, y - 2, { align: 'center' });
            doc.text(String(pcH), marginL + 12 + pcW * cellSize + 3, y + pcH * cellSize / 2);
            y += pcH * cellSize + 6;
            break;
          }
          case 'g3-area-compare': {
            const shA = p.shapeA as { width: number; height: number };
            const shB = p.shapeB as { width: number; height: number };
            const cs = 3;
            const maxH = Math.max(shA.height, shB.height) * cs;
            checkPageBreak(maxH + 10);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            // Shape A
            doc.rect(marginL + 12, y, shA.width * cs, shA.height * cs, 'S');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(55, 65, 81);
            doc.text('A', marginL + 12 + shA.width * cs / 2, y + shA.height * cs + 4, { align: 'center' });
            // Shape B
            const bOff = marginL + 12 + shA.width * cs + 12;
            doc.rect(bOff, y, shB.width * cs, shB.height * cs, 'S');
            doc.text('B', bOff + shB.width * cs / 2, y + shB.height * cs + 4, { align: 'center' });
            y += maxH + 8;
            break;
          }

          // ── Grade 4 missing visual drawings ────────────────────────
          case 'zeichnen': {
            checkPageBreak(10);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(100, 116, 139);
            const lbl = lang === 'DE' ? `Zeichne eine Linie: ${p.targetLength} cm` : `Draw a line: ${p.targetLength} cm`;
            doc.text(lbl, marginL + 12, y + 2);
            // Draw empty line space
            doc.setDrawColor(200, 210, 220); doc.setLineWidth(0.3);
            doc.line(marginL + 12, y + 6, marginL + 12 + 60, y + 6);
            y += 10;
            break;
          }
          case 'messen': {
            const tl = p.targetLength as number;
            const drawLen = Math.min(tl * 5, contentW - 24);
            checkPageBreak(10);
            doc.setDrawColor(30, 41, 59); doc.setLineWidth(0.6);
            doc.line(marginL + 12, y + 3, marginL + 12 + drawLen, y + 3);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(100, 116, 139);
            doc.text('= ? cm', marginL + 12 + drawLen + 3, y + 4);
            y += 10;
            break;
          }
          case 'timeline': {
            const sh = p.startHour as number; const eh = p.endHour as number;
            checkPageBreak(12);
            const txStart = marginL + 12; const txEnd = marginL + 12 + contentW - 24;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(txStart, y + 4, txEnd, y + 4);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(55, 65, 81);
            doc.text(`${sh}:00`, txStart, y + 10, { align: 'center' });
            doc.text(`${eh}:00`, txEnd, y + 10, { align: 'center' });
            for (let h = sh; h <= eh; h++) {
              const frac = (h - sh) / (eh - sh);
              const hx = txStart + frac * (txEnd - txStart);
              doc.line(hx, y + 2, hx, y + 6);
            }
            y += 14;
            break;
          }
          case 'number-line': {
            const nlMin2 = p.min as number; const nlMax2 = p.max as number; const nlTarget = p.target as number;
            const lineW2 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX2 = marginL + 12; const nlBaseY2 = y + 6;
            doc.line(nlX2, nlBaseY2, nlX2 + lineW2, nlBaseY2);
            // endpoints
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(55, 65, 81);
            doc.line(nlX2, nlBaseY2 - 2, nlX2, nlBaseY2 + 2);
            doc.text(String(nlMin2), nlX2, nlBaseY2 + 6, { align: 'center' });
            doc.line(nlX2 + lineW2, nlBaseY2 - 2, nlX2 + lineW2, nlBaseY2 + 2);
            doc.text(String(nlMax2), nlX2 + lineW2, nlBaseY2 + 6, { align: 'center' });
            // arrow at target
            const frac = (nlTarget - nlMin2) / (nlMax2 - nlMin2);
            const txx = nlX2 + frac * lineW2;
            doc.setDrawColor(220, 38, 38); doc.setLineWidth(0.6);
            doc.line(txx, nlBaseY2 - 6, txx, nlBaseY2 - 2);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6); doc.setTextColor(220, 38, 38);
            doc.text(String(nlTarget), txx, nlBaseY2 - 7, { align: 'center' });
            y += 14;
            break;
          }
          case 'place-value': {
            checkPageBreak(10);
            const pvNum = p.number as number;
            const digits = String(pvNum).split('');
            const bx = marginL + 12;
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            digits.forEach((d, i) => {
              doc.rect(bx + i * 12, y - 3, 10, 8, 'S');
              doc.setFont('courier', 'bold'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
              doc.text(d, bx + i * 12 + 5, y + 3, { align: 'center' });
            });
            y += 10;
            break;
          }
          case 'angle': {
            const deg = p.targetAngle as number;
            checkPageBreak(16);
            const ox = marginL + 20; const oy = y + 12;
            const armLen = 12;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.line(ox, oy, ox + armLen, oy);
            const rad = deg * Math.PI / 180;
            doc.line(ox, oy, ox + armLen * Math.cos(-rad), oy + armLen * Math.sin(-rad));
            doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(100, 116, 139);
            doc.text(`${deg}°`, ox + 6, oy - 2);
            y += 16;
            break;
          }
          case 'circle-draw': {
            const cr2 = p.radius as number;
            const drawR = Math.min(cr2 * 3, 12);
            checkPageBreak(drawR * 2 + 6);
            const cx2 = marginL + 24; const cy2 = y + drawR;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.circle(cx2, cy2, drawR, 'S');
            // radius label
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            doc.line(cx2, cy2, cx2 + drawR, cy2);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(`r=${cr2}`, cx2 + drawR / 2, cy2 - 2, { align: 'center' });
            y += drawR * 2 + 4;
            break;
          }
          case 'symmetry': {
            checkPageBreak(12);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(100, 116, 139);
            doc.text(lang === 'DE' ? '[Symmetrie-Aufgabe]' : '[Symmetry task]', marginL + 12, y + 2);
            y += 8;
            break;
          }

          // ── Grade 5 visual drawings ────────────────────────────────
          case 'g5-place-million': {
            checkPageBreak(10);
            const num = p.number as number;
            doc.setFont('courier', 'bold'); doc.setFontSize(12); doc.setTextColor(30, 41, 59);
            doc.text(num.toLocaleString(), marginL + 12, y + 4);
            y += 10;
            break;
          }
          case 'g5-number-line': {
            const rs = p.rangeStart as number; const re = p.rangeEnd as number; const tgt = p.target as number;
            const lineW3 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX3 = marginL + 12; const nlBaseY3 = y + 6;
            doc.line(nlX3, nlBaseY3, nlX3 + lineW3, nlBaseY3);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            doc.line(nlX3, nlBaseY3 - 2, nlX3, nlBaseY3 + 2);
            doc.text(rs.toLocaleString(), nlX3, nlBaseY3 + 5, { align: 'center' });
            doc.line(nlX3 + lineW3, nlBaseY3 - 2, nlX3 + lineW3, nlBaseY3 + 2);
            doc.text(re.toLocaleString(), nlX3 + lineW3, nlBaseY3 + 5, { align: 'center' });
            const frac5 = (tgt - rs) / (re - rs);
            const tx5 = nlX3 + frac5 * lineW3;
            doc.setDrawColor(220, 38, 38); doc.setLineWidth(0.6);
            doc.line(tx5, nlBaseY3 - 6, tx5, nlBaseY3 - 2);
            doc.text('?', tx5, nlBaseY3 - 7, { align: 'center' });
            y += 14;
            break;
          }
          case 'g5-rounding-large': {
            const tgt = p.target as number; const step = p.step as number;
            const lo = Math.floor(tgt / step) * step; const hi = lo + step;
            const lineW3 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX3 = marginL + 12; const nlBaseY3 = y + 6;
            doc.line(nlX3, nlBaseY3, nlX3 + lineW3, nlBaseY3);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            doc.text(lo.toLocaleString(), nlX3, nlBaseY3 + 5, { align: 'center' });
            doc.text(hi.toLocaleString(), nlX3 + lineW3, nlBaseY3 + 5, { align: 'center' });
            const frac5 = (tgt - lo) / (hi - lo);
            const tx5 = nlX3 + frac5 * lineW3;
            doc.setDrawColor(220, 38, 38); doc.setLineWidth(0.6);
            doc.line(tx5, nlBaseY3 - 6, tx5, nlBaseY3 - 2);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(5); doc.setTextColor(220, 38, 38);
            doc.text(tgt.toLocaleString(), tx5, nlBaseY3 - 7, { align: 'center' });
            y += 14;
            break;
          }
          case 'g5-mul-array': {
            const rows5 = p.rows as number; const cols5 = p.cols as number;
            checkPageBreak(10);
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            doc.text(`${rows5} x ${cols5} = ?`, marginL + 12, y + 4);
            // Small dot grid hint
            const drawR = Math.min(rows5, 4); const drawC = Math.min(cols5, 6);
            doc.setFillColor(150, 150, 150);
            for (let r = 0; r < drawR; r++) for (let c = 0; c < drawC; c++) doc.circle(marginL + 60 + c * 3, y + r * 3, 0.7, 'F');
            y += 10;
            break;
          }
          case 'g5-division-share': {
            checkPageBreak(8);
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            doc.text(`${p.total} ÷ ${p.groups} = ?`, marginL + 12, y + 4);
            y += 8;
            break;
          }
          case 'g5-frac-compare': {
            const [nA, dA] = p.fracA as [number, number];
            const [nB, dB] = p.fracB as [number, number];
            checkPageBreak(22);
            // Draw two fraction circles
            const r5 = 7;
            [{ n: nA, d: dA, cx: marginL + 20 }, { n: nB, d: dB, cx: marginL + 52 }].forEach(({ n, d, cx: fcx }) => {
              const fcy = y + r5 + 2;
              for (let i = 0; i < d; i++) {
                const sa = (i * 360 / d - 90) * Math.PI / 180;
                doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
                doc.line(fcx, fcy, fcx + r5 * Math.cos(sa), fcy + r5 * Math.sin(sa));
              }
              doc.circle(fcx, fcy, r5, 'S');
              doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(30, 41, 59);
              doc.text(`${n}/${d}`, fcx, fcy + r5 + 5, { align: 'center' });
            });
            y += 22;
            break;
          }
          case 'g5-frac-equiv': {
            checkPageBreak(8);
            const bn = p.baseNum as number; const bd = p.baseDen as number; const mul = p.multiplier as number;
            const hp = p.hidePart as string;
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            if (hp === 'numerator') {
              doc.text(`${bn}/${bd} = ?/${bd * mul}`, marginL + 12, y + 4);
            } else {
              doc.text(`${bn}/${bd} = ${bn * mul}/?`, marginL + 12, y + 4);
            }
            y += 8;
            break;
          }
          case 'g5-decimal-place': {
            checkPageBreak(10);
            doc.setFont('courier', 'bold'); doc.setFontSize(12); doc.setTextColor(30, 41, 59);
            doc.text(String(p.number), marginL + 12, y + 4);
            y += 10;
            break;
          }
          case 'g5-decimal-line': {
            const rs5 = p.rangeStart as number; const re5 = p.rangeEnd as number;
            const lineW4 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX4 = marginL + 12; const nlY4 = y + 6;
            doc.line(nlX4, nlY4, nlX4 + lineW4, nlY4);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(55, 65, 81);
            for (let i = 0; i <= 10; i++) {
              const tx = nlX4 + (i / 10) * lineW4;
              doc.line(tx, nlY4 - 2, tx, nlY4 + 2);
              if (i % 5 === 0) doc.text(String(rs5 + i / 10), tx, nlY4 + 6, { align: 'center' });
            }
            const frac5 = (p.target as number - rs5) / (re5 - rs5);
            const tx5 = nlX4 + frac5 * lineW4;
            doc.setDrawColor(220, 38, 38); doc.setLineWidth(0.6);
            doc.line(tx5, nlY4 - 6, tx5, nlY4 - 2);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6); doc.setTextColor(220, 38, 38);
            doc.text('?', tx5, nlY4 - 7, { align: 'center' });
            y += 14;
            break;
          }
          case 'g5-balance-scale': {
            const wts = p.leftWeights as number[];
            checkPageBreak(14);
            const sx = marginL + 12;
            // Fulcrum
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(sx + 30, y + 10, sx + 30, y + 14);
            doc.line(sx + 5, y + 10, sx + 55, y + 10);
            // Left side weights
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6); doc.setTextColor(30, 41, 59);
            doc.text(wts.map(w => `${w}g`).join('+'), sx + 5, y + 8, { align: 'left' });
            // Right side unknown
            doc.text('? g', sx + 50, y + 8, { align: 'center' });
            y += 16;
            break;
          }
          case 'g5-shape-props': {
            checkPageBreak(10);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(30, 41, 59);
            doc.text(`[${p.shapeId}] → ${p.askProperty} = ?`, marginL + 12, y + 2);
            y += 8;
            break;
          }
          case 'g5-angle-classify': {
            const deg5 = p.degrees as number;
            checkPageBreak(16);
            const ox = marginL + 20; const oy = y + 12;
            const armLen = 10;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.line(ox, oy, ox + armLen, oy);
            const rad5 = deg5 * Math.PI / 180;
            doc.line(ox, oy, ox + armLen * Math.cos(-rad5), oy + armLen * Math.sin(-rad5));
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(`${deg5}°`, ox + 5, oy - 3);
            y += 16;
            break;
          }
          case 'g5-neg-line': {
            const sn = p.startNum as number; const an = p.addNum as number;
            const lineW5 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX5 = marginL + 12; const nlY5 = y + 6;
            doc.line(nlX5, nlY5, nlX5 + lineW5, nlY5);
            // Ticks from -10 to 10
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            for (let v = -10; v <= 10; v += 2) {
              const fx = (v + 10) / 20;
              const tx = nlX5 + fx * lineW5;
              doc.line(tx, nlY5 - 1.5, tx, nlY5 + 1.5);
              doc.text(String(v), tx, nlY5 + 5, { align: 'center' });
            }
            // Mark start
            const sfx = (sn + 10) / 20;
            const stx = nlX5 + sfx * lineW5;
            doc.setFillColor(55, 65, 81); doc.circle(stx, nlY5, 1, 'F');
            y += 14;
            break;
          }
          case 'g5-volume-cuboid': {
            const vl = p.length as number; const vw = p.width as number; const vh = p.height as number;
            checkPageBreak(14);
            // Simple isometric box hint
            doc.setFont('courier', 'bold'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            doc.text(`${vl} x ${vw} x ${vh} = ?`, marginL + 12, y + 4);
            // Draw simple box
            const bx = marginL + 60; const by = y + 2;
            const bw = 14; const bh = 8; const bd = 5;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            doc.rect(bx, by, bw, bh, 'S');
            doc.line(bx + bd, by - bd, bx + bw + bd, by - bd);
            doc.line(bx + bw + bd, by - bd, bx + bw + bd, by + bh - bd);
            doc.line(bx, by, bx + bd, by - bd);
            doc.line(bx + bw, by, bx + bw + bd, by - bd);
            doc.line(bx + bw, by + bh, bx + bw + bd, by + bh - bd);
            y += 14;
            break;
          }
          case 'g5-perimeter': {
            const sides5 = p.sides as number[];
            const shType = p.shapeType as string;
            checkPageBreak(12);
            // Draw rectangle with side labels
            const rw5 = 20; const rh5 = 12;
            const rx5 = marginL + 12; const ry5 = y;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.rect(rx5, ry5, rw5, rh5, 'S');
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(String(sides5[0]), rx5 + rw5 / 2, ry5 - 1, { align: 'center' });
            if (shType !== 'square' && sides5.length > 1) {
              doc.text(String(sides5[1]), rx5 + rw5 + 2, ry5 + rh5 / 2);
            }
            y += 14;
            break;
          }
          case 'g5-area-grid': {
            const aw5 = p.width as number; const ah5 = p.height as number;
            checkPageBreak(10);
            // Just show dimensions for large grids
            doc.setFont('courier', 'bold'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            doc.text(`${aw5} x ${ah5} = ? (${lang === 'DE' ? 'Flache' : 'Area'})`, marginL + 12, y + 4);
            y += 8;
            break;
          }
          case 'g5-barchart': {
            const data5 = p.data as { label: string; value: number }[];
            const maxV = Math.max(...data5.map(d => d.value));
            const barH5 = 18; const barW5 = 8; const gap5 = 4;
            checkPageBreak(barH5 + 12);
            const bx5 = marginL + 16;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            doc.line(bx5 - 2, y, bx5 - 2, y + barH5 + 2);
            doc.line(bx5 - 2, y + barH5 + 2, bx5 + data5.length * (barW5 + gap5), y + barH5 + 2);
            data5.forEach((d, i) => {
              const bh = (d.value / maxV) * barH5;
              const bOff = bx5 + i * (barW5 + gap5);
              doc.setFillColor(180, 190, 200); doc.rect(bOff, y + barH5 + 2 - bh, barW5, bh, 'F');
              doc.setDrawColor(55, 65, 81); doc.rect(bOff, y + barH5 + 2 - bh, barW5, bh, 'S');
              doc.setFont('helvetica', 'bold'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
              doc.text(d.label, bOff + barW5 / 2, y + barH5 + 7, { align: 'center' });
              doc.setFont('helvetica', 'normal');
              doc.text(String(d.value), bOff + barW5 / 2, y + barH5 - bh - 1, { align: 'center' });
            });
            y += barH5 + 12;
            break;
          }
          case 'g5-symmetry': {
            checkPageBreak(8);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(100, 116, 139);
            const axLabel = p.axis === 'vertical' ? '|' : '—';
            doc.text(`${lang === 'DE' ? 'Spiegelachse' : 'Mirror axis'}: ${axLabel}`, marginL + 12, y + 2);
            y += 8;
            break;
          }
          case 'g5-unit-convert': {
            checkPageBreak(8);
            doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
            doc.text(`${p.value} ${p.from} = ___ ${p.to}`, marginL + 12, y + 4);
            y += 8;
            break;
          }
          case 'g5-nl-arith': {
            const start5 = p.start as number; const op5 = p.operand as number; const oper = p.operation as string;
            const lineW5 = contentW - 24;
            checkPageBreak(14);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const nlX5 = marginL + 12; const nlY5 = y + 6;
            doc.line(nlX5, nlY5, nlX5 + lineW5, nlY5);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6); doc.setTextColor(30, 41, 59);
            doc.text(start5.toLocaleString(), nlX5 + 10, nlY5 + 5, { align: 'center' });
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(`${oper === 'add' ? '+' : '−'} ${op5.toLocaleString()}`, nlX5 + lineW5 / 2, nlY5 - 3, { align: 'center' });
            doc.text('= ?', nlX5 + lineW5 - 10, nlY5 + 5, { align: 'center' });
            y += 14;
            break;
          }

          // ── Grade 6 visual drawings ────────────────────────────────
          case 'g6-coord-4q': {
            const px = p.pointX as number; const py = p.pointY as number;
            const gridSize = 24; const half = gridSize / 2;
            checkPageBreak(gridSize + 8);
            const ox = marginL + 12 + half; const oy = y + half;
            doc.setDrawColor(200, 210, 220); doc.setLineWidth(0.15);
            // Grid lines
            for (let i = -4; i <= 4; i++) {
              const gx = ox + (i / 4) * half; const gy = oy + (i / 4) * half;
              doc.line(gx, oy - half, gx, oy + half);
              doc.line(ox - half, gy, ox + half, gy);
            }
            // Axes
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(ox - half - 2, oy, ox + half + 2, oy);
            doc.line(ox, oy - half - 2, ox, oy + half + 2);
            // Point
            const ptx = ox + (px / 5) * half; const pty = oy - (py / 5) * half;
            doc.setFillColor(220, 38, 38); doc.circle(ptx, pty, 1.2, 'F');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6); doc.setTextColor(220, 38, 38);
            doc.text(`(${px},${py})`, ptx + 2, pty - 2);
            y += gridSize + 6;
            break;
          }
          case 'g6-pie-chart': {
            const slices = p.slices as { label: string; value: number; color: string }[];
            const tIdx = p.targetIndex as number;
            const cr6 = 10; const cx6 = marginL + 24; const cy6 = y + cr6 + 2;
            checkPageBreak(cr6 * 2 + 10);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            let cumAngle = -90;
            slices.forEach((sl, si) => {
              const sweep = sl.value / 100 * 360;
              const startRad = cumAngle * Math.PI / 180;
              const endRad = (cumAngle + sweep) * Math.PI / 180;
              doc.line(cx6, cy6, cx6 + cr6 * Math.cos(startRad), cy6 + cr6 * Math.sin(startRad));
              // Label at midpoint
              const midRad = (cumAngle + sweep / 2) * Math.PI / 180;
              doc.setFont('helvetica', 'bold'); doc.setFontSize(5);
              doc.setTextColor(si === tIdx ? 220 : 55, si === tIdx ? 38 : 65, si === tIdx ? 38 : 81);
              doc.text(`${sl.label}`, cx6 + (cr6 + 4) * Math.cos(midRad), cy6 + (cr6 + 4) * Math.sin(midRad), { align: 'center' });
              cumAngle += sweep;
            });
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.circle(cx6, cy6, cr6, 'S');
            y += cr6 * 2 + 8;
            break;
          }
          case 'g6-ratio-table': {
            const unit6 = p.unitValue as number;
            const qtys = p.quantities as number[];
            const hidIdx = p.hiddenIdx as number;
            checkPageBreak(12);
            const tx = marginL + 12;
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(55, 65, 81);
            qtys.forEach((q, qi) => {
              const cellX = tx + qi * 16;
              doc.rect(cellX, y, 14, 5, 'S');
              doc.text(String(q), cellX + 7, y + 3.5, { align: 'center' });
              doc.rect(cellX, y + 5, 14, 5, 'S');
              if (qi === hidIdx) {
                doc.setFont('helvetica', 'bold'); doc.setTextColor(220, 38, 38);
                doc.text('?', cellX + 7, y + 8.5, { align: 'center' });
                doc.setFont('helvetica', 'normal'); doc.setTextColor(55, 65, 81);
              } else {
                doc.text(String(q * unit6), cellX + 7, y + 8.5, { align: 'center' });
              }
            });
            y += 14;
            break;
          }
          case 'g6-trapezoid-area': {
            const a6 = p.baseA as number; const b6 = p.baseB as number; const h6 = p.height as number;
            const shType = p.shapeType as string;
            checkPageBreak(18);
            const ox = marginL + 12; const oy2 = y + 14;
            const scale = 2;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            if (shType === 'trapezoid') {
              const offset = (b6 - a6) / 2 * scale;
              doc.line(ox + offset, oy2 - h6 * scale, ox + offset + a6 * scale, oy2 - h6 * scale); // top
              doc.line(ox, oy2, ox + b6 * scale, oy2); // bottom
              doc.line(ox, oy2, ox + offset, oy2 - h6 * scale); // left
              doc.line(ox + b6 * scale, oy2, ox + offset + a6 * scale, oy2 - h6 * scale); // right
            } else {
              doc.rect(ox, oy2 - h6 * scale, a6 * scale, h6 * scale, 'S');
            }
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(100, 116, 139);
            doc.text(`a=${a6}`, ox + a6, oy2 - h6 * scale - 2, { align: 'center' });
            doc.text(`h=${h6}`, ox + b6 * scale + 4, oy2 - h6 * scale / 2);
            y += 20;
            break;
          }
          case 'g6-percent-bar': {
            const pct = p.percentage as number;
            const barW6 = contentW - 24; const barH6 = 6;
            checkPageBreak(12);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            doc.setFillColor(230, 230, 230);
            doc.rect(marginL + 12, y, barW6, barH6, 'FD');
            doc.setFillColor(100, 116, 139);
            doc.rect(marginL + 12, y, barW6 * pct / 100, barH6, 'F');
            // Ticks at 0, 25, 50, 75, 100
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            [0, 25, 50, 75, 100].forEach(v => {
              const tx = marginL + 12 + barW6 * v / 100;
              doc.line(tx, y + barH6, tx, y + barH6 + 2);
              doc.text(`${v}%`, tx, y + barH6 + 5, { align: 'center' });
            });
            y += 14;
            break;
          }

          // ── Grade 7 visual drawings ────────────────────────────────
          case 'g7-pythagorean': {
            const a7 = p.a as number; const b7 = p.b as number;
            checkPageBreak(18);
            // Draw right triangle
            const ox7 = marginL + 12; const oy7 = y + 14;
            const scale7 = 1.5;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(ox7, oy7, ox7 + a7 * scale7, oy7); // base
            doc.line(ox7 + a7 * scale7, oy7, ox7 + a7 * scale7, oy7 - b7 * scale7); // height
            doc.line(ox7, oy7, ox7 + a7 * scale7, oy7 - b7 * scale7); // hypotenuse
            // Right angle mark
            doc.setLineWidth(0.2);
            doc.rect(ox7 + a7 * scale7 - 2, oy7 - 2, 2, 2, 'S');
            // Labels
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(String(a7), ox7 + a7 * scale7 / 2, oy7 + 4, { align: 'center' });
            doc.text(p.findC ? String(b7) : '?', ox7 + a7 * scale7 + 3, oy7 - b7 * scale7 / 2);
            doc.text(p.findC ? '?' : String(b7), ox7 + a7 * scale7 / 2 - 3, oy7 - b7 * scale7 / 2 - 1);
            y += 20;
            break;
          }
          case 'g7-triangle-angles': {
            checkPageBreak(16);
            const ang1 = p.a as number; const ang2 = p.b as number;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            const ox7 = marginL + 12; const oy7 = y + 12;
            doc.line(ox7, oy7, ox7 + 30, oy7);
            doc.line(ox7 + 30, oy7, ox7 + 15, oy7 - 10);
            doc.line(ox7 + 15, oy7 - 10, ox7, oy7);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(`${ang1}°`, ox7 + 4, oy7 - 1);
            doc.text(`${ang2}°`, ox7 + 25, oy7 - 1);
            doc.text('?', ox7 + 15, oy7 - 8, { align: 'center' });
            y += 16;
            break;
          }
          case 'g7-inequality-line': {
            checkPageBreak(10);
            doc.setFont('courier', 'bold'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            doc.text(String(p.expression), marginL + 12, y + 4);
            y += 8;
            break;
          }
          case 'g7-power-grid': {
            const n7 = p.n as number; const pt = p.type as string;
            checkPageBreak(12);
            if (pt === 'square' && n7 <= 6) {
              // Draw a small grid
              const cs = 3;
              const drawN = Math.min(n7, 6);
              doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.2);
              for (let r = 0; r < drawN; r++) for (let c = 0; c < drawN; c++) {
                doc.rect(marginL + 12 + c * cs, y + r * cs, cs, cs, 'S');
              }
              doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(30, 41, 59);
              doc.text(`${n7}² = ?`, marginL + 12 + drawN * cs + 4, y + drawN * cs / 2 + 2);
            } else {
              doc.setFont('courier', 'bold'); doc.setFontSize(11); doc.setTextColor(30, 41, 59);
              doc.text(pt === 'square' ? `${n7}² = ?` : `${n7}³ = ?`, marginL + 12, y + 4);
            }
            y += 12;
            break;
          }
          case 'g7-circle': {
            const r7 = p.r as number;
            const drawR = Math.min(r7 * 1.5, 10);
            checkPageBreak(drawR * 2 + 8);
            const cx7 = marginL + 24; const cy7 = y + drawR + 2;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.5);
            doc.circle(cx7, cy7, drawR, 'S');
            doc.setDrawColor(100, 116, 139); doc.setLineWidth(0.3);
            doc.line(cx7, cy7, cx7 + drawR, cy7);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(100, 116, 139);
            doc.text(`r=${r7}`, cx7 + drawR / 2, cy7 - 2, { align: 'center' });
            y += drawR * 2 + 6;
            break;
          }
          case 'g7-cylinder-volume': {
            const r7c = p.r as number; const h7c = p.h as number;
            checkPageBreak(20);
            // Simple cylinder side view
            const cx7 = marginL + 24; const cy7top = y + 4; const cH = 12;
            const rDraw = Math.min(r7c * 2, 10);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            // Top ellipse
            doc.ellipse(cx7, cy7top, rDraw, 2, 'S');
            // Bottom ellipse
            doc.ellipse(cx7, cy7top + cH, rDraw, 2, 'S');
            // Side lines
            doc.line(cx7 - rDraw, cy7top, cx7 - rDraw, cy7top + cH);
            doc.line(cx7 + rDraw, cy7top, cx7 + rDraw, cy7top + cH);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(100, 116, 139);
            doc.text(`r=${r7c}`, cx7, cy7top - 3, { align: 'center' });
            doc.text(`h=${h7c}`, cx7 + rDraw + 3, cy7top + cH / 2);
            y += 22;
            break;
          }
          case 'g7-statistics': {
            const data7 = p.data as number[];
            checkPageBreak(8);
            doc.setFont('courier', 'normal'); doc.setFontSize(9); doc.setTextColor(30, 41, 59);
            doc.text(`[${data7.join(', ')}]`, marginL + 12, y + 4);
            y += 8;
            break;
          }

          // ── Grade 8 visual drawings ────────────────────────────────
          case 'g8-function-graph': {
            const sq8 = (p.subQuestions as any[])[0];
            const m = sq8.m as number; const b = sq8.b as number;
            const gridW8 = 28; const half = gridW8 / 2;
            checkPageBreak(gridW8 + 8);
            const ox8 = marginL + 12 + half; const oy8 = y + half;
            // Grid
            doc.setDrawColor(210, 220, 230); doc.setLineWidth(0.15);
            for (let i = -4; i <= 4; i++) {
              const gx = ox8 + (i / 5) * half;
              doc.line(gx, oy8 - half, gx, oy8 + half);
              const gy = oy8 + (i / 5) * half;
              doc.line(ox8 - half, gy, ox8 + half, gy);
            }
            // Axes
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(ox8 - half - 2, oy8, ox8 + half + 2, oy8);
            doc.line(ox8, oy8 - half - 2, ox8, oy8 + half + 2);
            // Draw line f(x) = mx + b
            const scale8 = half / 5;
            const x1 = -5; const y1 = m * x1 + b;
            const x2 = 5; const y2 = m * x2 + b;
            doc.setDrawColor(30, 80, 200); doc.setLineWidth(0.5);
            doc.line(ox8 + x1 * scale8, oy8 - y1 * scale8, ox8 + x2 * scale8, oy8 - y2 * scale8);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(30, 80, 200);
            const sign8 = b >= 0 ? '+' : '';
            doc.text(`f(x)=${m}x${sign8}${b}`, ox8 + half + 3, oy8 - half + 4);
            y += gridW8 + 6;
            break;
          }
          case 'g8-probability-tree': {
            const sq8 = (p.subQuestions as any[])[0];
            checkPageBreak(18);
            const ox8 = marginL + 16; const oy8 = y + 2;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            // Simple tree: root → A/A' → B/B'
            doc.line(ox8, oy8 + 6, ox8 + 16, oy8); // top branch
            doc.line(ox8, oy8 + 6, ox8 + 16, oy8 + 12); // bottom branch
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(55, 65, 81);
            doc.text(`A (${sq8.p1}%)`, ox8 + 17, oy8 + 1);
            doc.text(`A' (${100 - sq8.p1}%)`, ox8 + 17, oy8 + 13);
            // Second level
            doc.line(ox8 + 30, oy8, ox8 + 44, oy8 - 3);
            doc.line(ox8 + 30, oy8, ox8 + 44, oy8 + 3);
            doc.text(`B (${sq8.p2}%)`, ox8 + 45, oy8 - 2);
            doc.text(`B'`, ox8 + 45, oy8 + 4);
            y += 20;
            break;
          }
          case 'g8-quadratic-sqrt': {
            const sq8 = (p.subQuestions as any[])[0];
            checkPageBreak(8);
            doc.setFont('courier', 'bold'); doc.setFontSize(12); doc.setTextColor(30, 41, 59);
            doc.text(`sqrt(${sq8.n}) = ?`, marginL + 12, y + 4);
            y += 8;
            break;
          }
          case 'g8-systems-balance': {
            const sq8 = (p.subQuestions as any[])[0];
            checkPageBreak(10);
            doc.setFont('courier', 'bold'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            doc.text(sq8.eq1, marginL + 12, y + 2);
            doc.text(sq8.eq2, marginL + 12, y + 7);
            y += 12;
            break;
          }
          case 'g8-transformation-grid': {
            const sq8 = (p.subQuestions as any[])[0];
            const gridW8 = 20; const half = gridW8 / 2;
            checkPageBreak(gridW8 + 8);
            const ox8 = marginL + 12 + half; const oy8 = y + half;
            // Small grid
            doc.setDrawColor(210, 220, 230); doc.setLineWidth(0.15);
            for (let i = -3; i <= 3; i++) {
              const gx = ox8 + (i / 4) * half;
              doc.line(gx, oy8 - half, gx, oy8 + half);
              const gy = oy8 + (i / 4) * half;
              doc.line(ox8 - half, gy, ox8 + half, gy);
            }
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.line(ox8 - half - 1, oy8, ox8 + half + 1, oy8);
            doc.line(ox8, oy8 - half - 1, ox8, oy8 + half + 1);
            // Original point
            const s8 = half / 4;
            doc.setFillColor(55, 65, 81);
            doc.circle(ox8 + sq8.x * s8, oy8 - sq8.y * s8, 1, 'F');
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
            doc.text(`(${sq8.x},${sq8.y})`, ox8 + sq8.x * s8 + 2, oy8 - sq8.y * s8 - 2);
            y += gridW8 + 6;
            break;
          }
          case 'g8-statistics-histogram': {
            const sq8 = (p.subQuestions as any[])[0];
            const data8 = sq8.data as number[];
            const labels8 = sq8.labels as string[];
            const maxV = Math.max(...data8);
            const barH8 = 16; const barW8 = 8; const gap8 = 3;
            checkPageBreak(barH8 + 10);
            const bx8 = marginL + 14;
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.3);
            doc.line(bx8 - 2, y, bx8 - 2, y + barH8 + 2);
            doc.line(bx8 - 2, y + barH8 + 2, bx8 + data8.length * (barW8 + gap8), y + barH8 + 2);
            data8.forEach((v, i) => {
              const bh = (v / maxV) * barH8;
              const bOff = bx8 + i * (barW8 + gap8);
              doc.setFillColor(180, 190, 200); doc.rect(bOff, y + barH8 + 2 - bh, barW8, bh, 'F');
              doc.rect(bOff, y + barH8 + 2 - bh, barW8, bh, 'S');
              doc.setFont('helvetica', 'bold'); doc.setFontSize(5); doc.setTextColor(55, 65, 81);
              doc.text(labels8[i] || '', bOff + barW8 / 2, y + barH8 + 6, { align: 'center' });
              doc.text(String(v), bOff + barW8 / 2, y + barH8 - bh - 1, { align: 'center' });
            });
            y += barH8 + 10;
            break;
          }
          case 'g8-cylinder-surface': {
            const sq8 = (p.subQuestions as any[])[0];
            checkPageBreak(20);
            const cx8 = marginL + 24; const cy8top = y + 4; const cH8 = 12;
            const rD = Math.min(sq8.r * 2, 8);
            doc.setDrawColor(55, 65, 81); doc.setLineWidth(0.4);
            doc.ellipse(cx8, cy8top, rD, 2, 'S');
            doc.ellipse(cx8, cy8top + cH8, rD, 2, 'S');
            doc.line(cx8 - rD, cy8top, cx8 - rD, cy8top + cH8);
            doc.line(cx8 + rD, cy8top, cx8 + rD, cy8top + cH8);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(5); doc.setTextColor(100, 116, 139);
            doc.text(`r=${sq8.r}`, cx8, cy8top - 3, { align: 'center' });
            doc.text(`h=${sq8.h}`, cx8 + rD + 3, cy8top + cH8 / 2);
            y += 20;
            break;
          }
          case 'g8-inequality-line': {
            const sq8 = (p.subQuestions as any[])[0];
            checkPageBreak(8);
            doc.setFont('courier', 'bold'); doc.setFontSize(10); doc.setTextColor(30, 41, 59);
            doc.text(`${sq8.lhs} ${sq8.op} ${sq8.rhs}`, marginL + 12, y + 4);
            y += 8;
            break;
          }

          default:
            break;
        }
      };

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

        // Draw visual element (if applicable)
        drawVisualElement(sq);

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
