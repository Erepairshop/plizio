"use client";

import jsPDF from "jspdf";

export interface DeutschPdfData {
  gradeLevel: string;     // "Klasse 3"
  date: string;           // "17.03.2026"
  questions: Array<{
    question: string;
    type: string;
  }>;
  answers: Array<{
    correct: boolean;
    given: string;
    expected: string;
  }>;
  scoreCount: number;
  totalCount: number;
  percentage: number;
  noteValue: number;      // 1-6
  noteLabel: string;      // "Sehr gut"
  noteColor: string;      // hex color e.g. "#FFD700"
  studentName?: string;
}

// ─── Note color → RGB ────────────────────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return [r, g, b];
}

// ─── Teacher messages (DE only — Deutsch Test is always German) ───────────────
const DE_MSGS = {
  excellent: [
    (n: string) => `Bravo, ${n}! Ausgezeichnet!`,
    (n: string) => `${n}, du bist eine Sprachkünstlerin!`,
    (n: string) => `Wunderbar, ${n}! Ich bin so stolz!`,
    (n: string) => `Fantastisch, ${n}! Weiter so!`,
    (n: string) => `Super gemacht, ${n}! Top-Leistung!`,
    (n: string) => `Klasse, ${n}! Du hast alles drauf!`,
    (n: string) => `Sehr gut, ${n}! Eine echte Spitzenleistung!`,
  ],
  good: [
    (n: string) => `Gut gemacht, ${n}! Üb weiter!`,
    (n: string) => `${n}, du bist auf dem richtigen Weg!`,
    (n: string) => `Nicht schlecht, ${n}! Du kannst noch mehr!`,
    (n: string) => `Weiter so, ${n}! Du wirst immer besser!`,
    (n: string) => `Prima, ${n}! Ich glaube an dich!`,
    (n: string) => `Ordentlich, ${n}! Ein bisschen mehr üben!`,
    (n: string) => `Brav gemacht, ${n}! Du schaffst es!`,
  ],
  improve: [
    (n: string) => `Üb weiter, ${n}! Du schaffst das!`,
    (n: string) => `Nicht aufgeben, ${n}! Jeder lernt!`,
    (n: string) => `${n}, versuche es nochmal! Ich glaube an dich!`,
    (n: string) => `Kopf hoch, ${n}! Beim nächsten Mal klappt es!`,
    (n: string) => `${n}, üben macht den Meister! Weiter so!`,
    (n: string) => `Kein Problem, ${n}! Wir üben zusammen!`,
    (n: string) => `${n}, du gibst nicht auf! Das ist toll!`,
  ],
};

function getTeacherMessage(pct: number, name: string): string {
  const seed = Math.floor(Date.now() / 10000) % 7;
  if (pct >= 85) return DE_MSGS.excellent[seed](name);
  if (pct >= 55) return DE_MSGS.good[seed](name);
  return DE_MSGS.improve[seed](name);
}

// ─── Visual question type → human-readable description ───────────────────────
function describeVisualType(type: string, question: string): string {
  const visualTypes: Record<string, string> = {
    "genus-sort": "[Genus-Sortierung]",
    "satz-ordnen": "[Satz ordnen]",
    "bild-beschriften": "[Bild beschriften]",
    "fehler-finden": "[Fehler finden]",
    "wortfamilien-baum": "[Wortfamilien-Baum]",
    "geschichte-sortieren": "[Geschichte sortieren]",
    "wortarten-sortieren": "[Wortarten sortieren]",
    "zeitformen-zuordnen": "[Zeitformen zuordnen]",
    "satzglied-markieren": "[Satzglied markieren]",
    "kasus-markieren": "[Kasus markieren]",
    "adjektiv-endungen": "[Adjektivendungen]",
    "luecken-text": "[Lückentext]",
    "satzgefuge-diagram": "[Satzgefüge-Diagramm]",
    "epochen-zeitstrahl": "[Epochen-Zeitstrahl]",
  };
  const prefix = visualTypes[type];
  if (!prefix) return question;
  // Combine the visual type label with the question text for context
  return question ? `${prefix} ${question}` : prefix;
}

export function generateDeutschTestPdf(data: DeutschPdfData): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = 210;
  const pageH = 297;
  const marginL = 22;
  const marginR = 16;
  const contentW = pageW - marginL - marginR;
  let y = 0;

  const studentLabel = "Schüler";

  // ── Helpers ──────────────────────────────────────────────────────────
  const drawPageDecoration = () => {
    // Cream paper background
    doc.setFillColor(255, 253, 240);
    doc.rect(0, 0, pageW, pageH, "F");

    // Fine grid lines (like notebook paper)
    doc.setDrawColor(190, 205, 220);
    doc.setLineWidth(0.15);
    for (let gy = 25; gy < pageH; gy += 7) {
      doc.line(marginL - 4, gy, pageW - 8, gy);
    }
    // Red margin line
    doc.setDrawColor(220, 100, 100);
    doc.setLineWidth(0.6);
    doc.line(marginL - 4, 10, marginL - 4, pageH - 10);
  };

  const newPage = () => {
    doc.addPage();
    y = 28;
    drawPageDecoration();
  };

  const checkPageBreak = (needed = 12) => {
    if (y + needed > pageH - 20) newPage();
  };

  // ── Start first page ──────────────────────────────────────────────────
  drawPageDecoration();
  y = 14;

  // ── HEADER (blue bar at top) ──────────────────────────────────────────
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageW, 12, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text("DEUTSCH TEST", marginL - 2, 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(data.gradeLevel, pageW - marginR, 8, { align: "right" });

  y = 18;

  // ── STUDENT INFO ROW ──────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  const displayName = data.studentName || studentLabel;
  doc.text(displayName, marginL, y);

  // Date right-aligned
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(data.date, pageW - marginR, y, { align: "right" });

  y += 5;

  // Thin separator below student info
  doc.setDrawColor(200, 210, 220);
  doc.setLineWidth(0.4);
  doc.line(marginL - 2, y, pageW - marginR, y);
  y += 8;

  // ── GRADE CIRCLE ─────────────────────────────────────────────────────
  const noteRGB = hexToRgb(data.noteColor);
  const noteDisplay = String(data.noteValue);

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
  doc.text(data.noteLabel, circleX, circleY + circleR + 4, { align: "center" });

  // Score text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(`${data.scoreCount}/${data.totalCount} richtig`, marginL, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(`${data.percentage}%`, marginL, y + 13);

  y += 28;

  // ── DIVIDER before questions ──────────────────────────────────────────
  doc.setDrawColor(180, 195, 210);
  doc.setLineWidth(0.3);
  doc.line(marginL - 2, y, pageW - marginR, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  doc.text("Aufgaben und Korrekturen", marginL, y);
  y += 7;

  // ── QUESTIONS LIST ────────────────────────────────────────────────────
  data.questions.forEach((q, i) => {
    const ans = data.answers[i];
    if (!ans) return;

    const isCorrect = ans.correct;

    // Get display text — use visual type description for non-text questions
    const isVisual = ![
      "mcq", "typing", "bild-wort", "anlaut-bild",
    ].includes(q.type);
    const displayText = isVisual
      ? describeVisualType(q.type, q.question)
      : q.question;

    const qLines = doc.splitTextToSize(displayText, contentW - 10);
    checkPageBreak(qLines.length * 4.5 + 8);

    // Colored circle indicator
    doc.setFillColor(isCorrect ? 22 : 220, isCorrect ? 163 : 38, isCorrect ? 74 : 38);
    doc.circle(marginL + 2.5, y - 1.5, 2.8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.text(String(i + 1), marginL + 2.5, y - 0.2, { align: "center" });

    // Question text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    doc.text(qLines, marginL + 8, y);
    y += qLines.length * 4.8;

    // Answer display
    if (isCorrect) {
      doc.setTextColor(22, 163, 74);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      const displayGiven = ans.given || ans.expected;
      doc.text(`\u2713  ${displayGiven}`, marginL + 10, y);
    } else {
      if (ans.given && ans.given.trim() !== "") {
        // Wrong answer with strikethrough
        doc.setTextColor(220, 38, 38);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        const wrongTxt = ans.given;
        doc.text(wrongTxt, marginL + 10, y);
        const wrongW = doc.getTextWidth(wrongTxt);
        doc.setDrawColor(220, 38, 38);
        doc.setLineWidth(0.5);
        doc.line(marginL + 10, y - 1.5, marginL + 10 + wrongW, y - 1.5);
        doc.setTextColor(22, 163, 74);
        doc.setFont("helvetica", "bold");
        doc.text(` \u2192 ${ans.expected}`, marginL + 10 + wrongW + 2, y);
      } else {
        // No answer given
        doc.setTextColor(220, 38, 38);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.text("\u2014", marginL + 10, y);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(22, 163, 74);
        doc.text(` \u2192 ${ans.expected}`, marginL + 16, y);
      }
    }

    y += 5.5;

    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.2);
    doc.line(marginL + 6, y - 1, pageW - marginR - 4, y - 1);
    y += 2;
  });

  // ── TEACHER NOTE SECTION ──────────────────────────────────────────────
  checkPageBreak(40);
  y += 4;

  // Yellow sticky-note background
  doc.setFillColor(255, 253, 231);
  doc.setDrawColor(253, 230, 138);
  doc.setLineWidth(0.5);
  const noteBoxY = y;

  const teacherMsg = getTeacherMessage(data.percentage, displayName);
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
  doc.text("Lehrerin:", marginL + 6, y + 7);

  // Note badge
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.text(`Note: ${noteDisplay}  \u2014  ${data.noteLabel}`, marginL + 6, y + 13);

  // Teacher message
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  doc.setTextColor(55, 65, 81);
  doc.text(msgLines, marginL + 6, y + 20);

  y = noteBoxY + noteBoxH + 8;

  // ── WATERMARK "PLIZIO" ────────────────────────────────────────────────
  // (included in footer on each page)

  // ── FOOTER on every page ──────────────────────────────────────────────
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Seite ${p}/${pageCount}   \u00B7   ${data.date}   \u00B7   PLIZIO`,
      pageW / 2,
      pageH - 6,
      { align: "center" }
    );
  }

  // ── SAVE ──────────────────────────────────────────────────────────────
  const safeName = displayName.replace(/[^a-zA-ZÄÖÜäöüßáéíóöőúüű0-9]/g, "_");
  const fileName = `deutsch-test-${safeName}.pdf`;
  doc.save(fileName);
}
