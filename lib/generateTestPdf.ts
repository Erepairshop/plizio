"use client";

import jsPDF from "jspdf";
import type { GradeResult, KlassenarbeitResult, MathQuestion, SectionResult } from "./mathCurriculum";

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
}

// Note value from percentage
function getNoteValue(pct: number): number {
  if (pct >= 90) return 1;
  if (pct >= 80) return 2;
  if (pct >= 65) return 3;
  if (pct >= 50) return 4;
  if (pct >= 30) return 5;
  return 6;
}
function getNoteLabel(note: number): string {
  return ['', 'Sehr gut', 'Gut', 'Befriedigend', 'Ausreichend', 'Mangelhaft', 'Ungenügend'][note] || '';
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

// Teacher messages (same pool as TeacherNote.tsx)
const excellentMsgs = [
  (n: string) => `Bravo, ${n}! Ausgezeichnet!`,
  (n: string) => `${n}, du bist ein Mathegenie!`,
  (n: string) => `Wunderbar, ${n}! Ich bin so stolz!`,
  (n: string) => `Fantastisch, ${n}! Weiter so!`,
  (n: string) => `Super gemacht, ${n}! Top-Leistung!`,
  (n: string) => `Klasse, ${n}! Du hast alles drauf!`,
  (n: string) => `Sehr gut, ${n}! Eine echte Spitzenleistung!`,
];
const goodMsgs = [
  (n: string) => `Gut gemacht, ${n}! Üb weiter!`,
  (n: string) => `${n}, du bist auf dem richtigen Weg!`,
  (n: string) => `Nicht schlecht, ${n}! Du kannst noch mehr!`,
  (n: string) => `Weiter so, ${n}! Du wirst immer besser!`,
  (n: string) => `Prima, ${n}! Ich glaube an dich!`,
  (n: string) => `Ordentlich, ${n}! Ein bisschen mehr üben!`,
  (n: string) => `Brav gemacht, ${n}! Du schaffst es!`,
];
const improveMsgs = [
  (n: string) => `Üb weiter, ${n}! Du schaffst das!`,
  (n: string) => `Nicht aufgeben, ${n}! Jeder lernt!`,
  (n: string) => `${n}, versuche es nochmal! Ich glaube an dich!`,
  (n: string) => `Kopf hoch, ${n}! Beim naechsten Mal klappt es!`,
  (n: string) => `${n}, ueben macht den Meister! Weiter so!`,
  (n: string) => `Kein Problem, ${n}! Wir ueben zusammen!`,
  (n: string) => `${n}, du gibst nicht auf! Das ist toll!`,
];

function getTeacherMessage(pct: number, name: string): string {
  const seed = Math.floor(Date.now() / 10000) % 7;
  if (pct >= 85) return excellentMsgs[seed](name);
  if (pct >= 55) return goodMsgs[seed](name);
  return improveMsgs[seed](name);
}

export function generateTestPdf(data: PdfTestData & { studentName?: string }): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = 210;
  const pageH = 297;
  const marginL = 22; // left margin (space for the red line)
  const marginR = 16;
  const contentW = pageW - marginL - marginR;
  let y = 0;

  // ── Helpers ──────────────────────────────────────────────────────────
  const newPage = () => {
    drawPageDecoration();
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
  const title = data.testType === "klassenarbeit" ? "KLASSENARBEIT — MATHEMATIK" : "MATHE-ÜBUNGSTEST";
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
  const displayName = data.studentName || "Schüler";
  doc.text(displayName, marginL, y);

  // Date right-aligned
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  const mins = Math.floor(data.elapsedTime / 60);
  const secs = data.elapsedTime % 60;
  doc.text(`${data.date}  ·  ${mins}:${secs.toString().padStart(2, "0")} Min.`, pageW - marginR, y, { align: "right" });

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
  const noteLabel = data.klassenarbeitResult
    ? data.klassenarbeitResult.note.label
    : getNoteLabel(noteValue);
  const noteRGB = getNoteColorRGB(noteValue);

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
  doc.text(String(noteValue), circleX, circleY + 5, { align: "center" });

  // Note label below circle
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.text(noteLabel, circleX, circleY + circleR + 4, { align: "center" });

  // Score text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(`${data.gradeResult.score}/${data.gradeResult.total} richtig`, marginL, y + 7);

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
    doc.text("Ergebnisse nach Abschnitt:", marginL, y);
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
  doc.text("Aufgaben und Korrekturen", marginL, y);
  y += 7;

  // ── QUESTIONS ────────────────────────────────────────────────────────
  data.questions.forEach((q, i) => {
    const userAnswer = data.answers[i];
    const isCorrect = userAnswer !== null && String(userAnswer) === String(q.correctAnswer);

    // Estimate height needed
    const qLines = doc.splitTextToSize(`${i + 1}.  ${q.question}`, contentW - 6);
    checkPageBreak(qLines.length * 4.5 + 8);

    // Question number + text
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    // Number in small colored circle
    if (isCorrect) {
      doc.setFillColor(22, 163, 74);
    } else {
      doc.setFillColor(220, 38, 38);
    }
    doc.circle(marginL + 2.5, y - 1.5, 2.8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.text(String(i + 1), marginL + 2.5, y - 0.2, { align: "center" });

    // Question text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    const qText = doc.splitTextToSize(q.question, contentW - 10);
    doc.text(qText, marginL + 8, y);
    y += qText.length * 4.8;

    // Answer line
    if (isCorrect) {
      // Green tick + answer
      doc.setTextColor(22, 163, 74);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text(`✓  ${userAnswer}`, marginL + 10, y);
    } else {
      // Wrong: strikethrough user answer + correct in green
      if (userAnswer !== null) {
        doc.setTextColor(220, 38, 38);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        const wrongTxt = String(userAnswer);
        doc.text(wrongTxt, marginL + 10, y);
        const wrongW = doc.getTextWidth(wrongTxt);
        // Strikethrough
        doc.setDrawColor(220, 38, 38);
        doc.setLineWidth(0.5);
        doc.line(marginL + 10, y - 1.5, marginL + 10 + wrongW, y - 1.5);
        // Correct answer
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

    // Light separator line
    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.2);
    doc.line(marginL + 6, y - 1, pageW - marginR - 4, y - 1);
    y += 2;
  });

  // ── TEACHER NOTE SECTION ─────────────────────────────────────────────
  checkPageBreak(40);
  y += 4;

  // Yellow sticky-note background
  doc.setFillColor(255, 253, 231);
  doc.setDrawColor(253, 230, 138);
  doc.setLineWidth(0.5);
  const noteBoxY = y;

  const teacherMsg = getTeacherMessage(data.gradeResult.percentage, data.studentName || 'Schüler');
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

  // Note badge: "Note: X – Label"
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(noteRGB[0], noteRGB[1], noteRGB[2]);
  doc.text(`Note: ${noteValue}  —  ${noteLabel}`, marginL + 6, y + 13);

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
      `Seite ${p}/${pageCount}   ·   ${data.date}   ·   PLIZIO`,
      pageW / 2, pageH - 6,
      { align: "center" }
    );
  }

  // ── SAVE ──────────────────────────────────────────────────────────────
  const safeName = (data.studentName || "Schüler").replace(/[^a-zA-ZÄÖÜäöüß0-9]/g, "_");
  const fileName = data.testType === "klassenarbeit"
    ? `Klassenarbeit_Mathe_${safeName}_${data.date.replace(/\./g, "-")}.pdf`
    : `Mathetest_${safeName}_${data.date.replace(/\./g, "-")}.pdf`;
  doc.save(fileName);
}
