"use client";

import jsPDF from "jspdf";
import type { GradeResult, KlassenarbeitResult, MathQuestion, SectionResult } from "./mathCurriculum";

interface PdfTestData {
  // Test info
  gradeLevel: string; // e.g. "3. Klasse"
  testType: "practice" | "klassenarbeit";
  date: string;
  elapsedTime: number; // seconds

  // Questions & answers
  questions: MathQuestion[];
  answers: (number | string | null)[];

  // Results
  gradeResult: GradeResult;
  klassenarbeitResult?: KlassenarbeitResult;
}

// Teacher comments based on performance
function getTeacherComment(percentage: number): string {
  if (percentage >= 95)
    return "Hervorragende Leistung! Du hast das Thema ausgezeichnet verstanden. Weiter so!";
  if (percentage >= 85)
    return "Sehr gute Arbeit! Nur kleine Fehler. Du bist auf einem tollen Weg!";
  if (percentage >= 75)
    return "Gute Leistung! Einige Aufgaben waren noch schwierig, aber du machst Fortschritte.";
  if (percentage >= 60)
    return "Befriedigende Leistung. Übe die markierten Aufgaben nochmals, dann wird es besser!";
  if (percentage >= 45)
    return "Es gibt noch Übungsbedarf. Bitte wiederhole die Grundlagen und übe regelmäßig.";
  return "Bitte übe diese Themen intensiv nach. Frag um Hilfe, wenn du etwas nicht verstehst!";
}

export function generateTestPdf(data: PdfTestData): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = 210;
  const marginL = 18;
  const marginR = 18;
  const contentW = pageW - marginL - marginR;
  let y = 15;

  // Colors
  const red = [220, 38, 38] as const;
  const green = [22, 163, 74] as const;
  const darkGray = [30, 41, 59] as const;
  const lightGray = [148, 163, 184] as const;
  const blue = [59, 130, 246] as const;

  // ─── HEADER ────────────────────────────────────────────────
  // Top border line
  doc.setDrawColor(...blue);
  doc.setLineWidth(1.2);
  doc.line(marginL, y, pageW - marginR, y);
  y += 8;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...darkGray);
  const title =
    data.testType === "klassenarbeit"
      ? "Klassenarbeit - Mathematik"
      : "Mathe-Übungstest";
  doc.text(title, pageW / 2, y, { align: "center" });
  y += 8;

  // Subtitle
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...lightGray);
  doc.text(data.gradeLevel, pageW / 2, y, { align: "center" });
  y += 7;

  // Date + time row
  doc.setFontSize(10);
  doc.text(`Datum: ${data.date}`, marginL, y);
  const mins = Math.floor(data.elapsedTime / 60);
  const secs = data.elapsedTime % 60;
  doc.text(
    `Zeit: ${mins}:${secs.toString().padStart(2, "0")} Min.`,
    pageW - marginR,
    y,
    { align: "right" }
  );
  y += 4;

  // Bottom border
  doc.setDrawColor(...blue);
  doc.setLineWidth(0.5);
  doc.line(marginL, y, pageW - marginR, y);
  y += 8;

  // ─── GRADE BOX ─────────────────────────────────────────────
  const gradeBoxW = 45;
  const gradeBoxH = 30;
  const gradeBoxX = pageW / 2 - gradeBoxW / 2;

  // Background
  const noteColor = data.gradeResult.percentage >= 60 ? green : red;
  doc.setFillColor(noteColor[0], noteColor[1], noteColor[2]);
  doc.setDrawColor(noteColor[0], noteColor[1], noteColor[2]);
  doc.roundedRect(gradeBoxX, y, gradeBoxW, gradeBoxH, 4, 4, "FD");

  // Grade number
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  const displayGrade =
    data.klassenarbeitResult
      ? String(Math.round(data.klassenarbeitResult.note.value))
      : data.gradeResult.mark.display;
  doc.text(displayGrade, pageW / 2, y + 14, { align: "center" });

  // Grade label
  doc.setFontSize(10);
  doc.text(
    data.klassenarbeitResult
      ? data.klassenarbeitResult.note.label
      : data.gradeResult.mark.label,
    pageW / 2,
    y + 22,
    { align: "center" }
  );

  // Score
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...darkGray);
  y += gradeBoxH + 5;
  doc.text(
    `${data.gradeResult.score}/${data.gradeResult.total} richtig (${data.gradeResult.percentage}%)`,
    pageW / 2,
    y,
    { align: "center" }
  );
  y += 10;

  // ─── SECTION RESULTS (Klassenarbeit only) ──────────────────
  if (data.klassenarbeitResult && data.klassenarbeitResult.sectionResults.length > 1) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...darkGray);
    doc.text("Ergebnisse nach Abschnitt:", marginL, y);
    y += 6;

    data.klassenarbeitResult.sectionResults.forEach((section: SectionResult) => {
      const pct = Math.round((section.earnedPoints / section.maxPoints) * 100);
      const sColor = pct >= 60 ? green : red;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...darkGray);
      doc.text(`${section.name}:`, marginL + 2, y);

      // Score
      doc.text(
        `${section.earnedPoints}/${section.maxPoints} P. (${pct}%)`,
        marginL + 70,
        y
      );

      // Mini bar
      const barX = marginL + 115;
      const barW = 50;
      const barH = 3;
      doc.setFillColor(230, 230, 230);
      doc.rect(barX, y - 3, barW, barH, "F");
      doc.setFillColor(sColor[0], sColor[1], sColor[2]);
      doc.rect(barX, y - 3, (barW * pct) / 100, barH, "F");

      y += 6;
    });
    y += 4;
  }

  // ─── QUESTIONS & ANSWERS ───────────────────────────────────
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(marginL, y, pageW - marginR, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...darkGray);
  doc.text("Aufgaben und Korrekturen", marginL, y);
  y += 8;

  data.questions.forEach((q, i) => {
    // Check if we need a new page
    if (y > 265) {
      doc.addPage();
      y = 20;
    }

    const userAnswer = data.answers[i];
    const isCorrect =
      userAnswer !== null && String(userAnswer) === String(q.correctAnswer);

    // Question number + text
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...darkGray);

    const qText = `${i + 1}. ${q.question}`;
    // Split long text
    const lines = doc.splitTextToSize(qText, contentW - 10);
    doc.text(lines, marginL, y);
    y += lines.length * 4.5;

    // Answer line
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    if (isCorrect) {
      // Correct answer - green check
      doc.setTextColor(...green);
      doc.text(`Antwort: ${userAnswer}  ✓ Richtig`, marginL + 4, y);
    } else {
      // Wrong answer - red strike-through + correction
      if (userAnswer !== null) {
        doc.setTextColor(...red);
        // User's wrong answer
        const wrongText = `Antwort: ${userAnswer}`;
        doc.text(wrongText, marginL + 4, y);
        const wrongW = doc.getTextWidth(wrongText);
        // Strike-through line
        doc.setDrawColor(...red);
        doc.setLineWidth(0.4);
        doc.line(marginL + 4, y - 1.2, marginL + 4 + wrongW, y - 1.2);

        // Correct answer
        doc.setTextColor(...green);
        doc.setFont("helvetica", "bold");
        doc.text(
          `→ Richtig: ${q.correctAnswer}`,
          marginL + 4 + wrongW + 4,
          y
        );
      } else {
        // No answer
        doc.setTextColor(...red);
        doc.text("Keine Antwort", marginL + 4, y);
        doc.setTextColor(...green);
        doc.setFont("helvetica", "bold");
        doc.text(`→ Richtig: ${q.correctAnswer}`, marginL + 55, y);
      }
    }
    y += 6;

    // Light separator
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.15);
    doc.line(marginL + 4, y - 2, pageW - marginR - 4, y - 2);
    y += 2;
  });

  // ─── TEACHER COMMENT ───────────────────────────────────────
  if (y > 240) {
    doc.addPage();
    y = 20;
  }

  y += 6;
  doc.setDrawColor(...blue);
  doc.setLineWidth(0.5);
  doc.line(marginL, y, pageW - marginR, y);
  y += 8;

  // Comment box
  doc.setFillColor(240, 249, 255);
  doc.setDrawColor(147, 197, 253);
  doc.setLineWidth(0.5);
  const commentBoxY = y;
  const commentText = getTeacherComment(data.gradeResult.percentage);
  const commentLines = doc.splitTextToSize(commentText, contentW - 20);
  const commentBoxH = commentLines.length * 5 + 16;
  doc.roundedRect(marginL, commentBoxY, contentW, commentBoxH, 3, 3, "FD");

  // Comment header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...blue);
  doc.text("Kommentar der Lehrkraft:", marginL + 8, commentBoxY + 8);

  // Comment text
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(...darkGray);
  doc.text(commentLines, marginL + 8, commentBoxY + 15);

  y = commentBoxY + commentBoxH + 10;

  // ─── FOOTER ────────────────────────────────────────────────
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...lightGray);
    doc.text(
      `Seite ${p}/${pageCount} — Generiert am ${data.date}`,
      pageW / 2,
      290,
      { align: "center" }
    );
  }

  // ─── DOWNLOAD ──────────────────────────────────────────────
  const fileName = data.testType === "klassenarbeit"
    ? `Klassenarbeit_Mathe_${data.date.replace(/\./g, "-")}.pdf`
    : `Mathetest_${data.date.replace(/\./g, "-")}.pdf`;
  doc.save(fileName);
}
