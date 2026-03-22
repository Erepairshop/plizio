"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🌐 Fremdwörter — Woher kommen sie?",
    r1_info_text: "FREMDWÖRTER sind Wörter aus anderen Sprachen, die im Deutschen benutzt werden. 'Computer' (English), 'Restaurant' (Französisch), 'Pizza' (Italienisch), 'Yoga' (Sanskrit). Sie sind überall — in Technik, Essen, Sport, Kultur!",
    r1_q: "Welches Wort ist ein FREMDWORT?",
    r1_a1: "Computer",
    r1_a2: "Haus",
    r1_a3: "Baum",
    r1_a4: "Stuhl",
    r2_info_title: "🌍 Fremdwörter-Quellen",
    r2_info_text: "LATEINISCH & GRIECHISCH: 'Telefon' (tele=fern, phon=Stimme). FRANZÖSISCH: 'Hotel', 'Reservieren'. ENGLISCH: 'Email', 'Download', 'Manager'. ITALIENISCH: 'Balkon', 'Konzert'. SPANISCH: 'Guerilla', 'Tornado'.",
    r2_q: "Welche Sprache ist die Quelle von 'Restaurant'?",
    r2_a1: "Französisch",
    r2_a2: "Spanisch",
    r2_a3: "Englisch",
    r2_a4: "Italienisch",
    r3_info_title: "🎯 Fremdwörter erkennen",
    r3_info_text: "Viele Fremdwörter haben TYPISCHE MERKMALE: '-tion' (Information), '-ment' (Management), 'ph' statt 'f' (Telefon), 'ch' griechisch (Chaos). Diese Muster helfen dir, neue Fremdwörter zu erkennen!",
    r3_q: "Was deutet darauf hin, dass 'Präsentation' ein Fremdwort ist?",
    r3_a1: "Die Endung -tion",
    r3_a2: "Das Wort ist kurz",
    r3_a3: "Es klingt hart",
    r3_a4: "Es hat einen Umlaut",
    r4_info_title: "⭐ Aussprache & Betonung",
    r4_info_text: "Fremdwörter behalten oft ihre ORIGINAL-AUSSPRACHE & BETONUNG! 'Computer' → [kom-PI-ter] (Betonung auf -pu-), nicht [KOM-pu-ter]. 'Reservoir' → [rES-er-vuar] (französisch). Manche Aussprachen sind schwer — das ist normal!",
    r4_q: "Wie spricht man 'Café' aus?",
    r4_a1: "[ka-FEE] — Betonung auf FEE",
    r4_a2: "[KA-fe] — Betonung auf KA",
    r4_a3: "[ka-fe-ay]",
    r4_a4: "[kaf]",
    r5_info_title: "✅ Wiederholung: Fremdwörter",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Welches ist KEIN Fremdwort?",
    r5_q1_a1: "Telefon",
    r5_q1_a2: "Stuhl",
    r5_q1_a3: "Sandwich",
    r5_q1_a4: "Zentner",
    r5_q2: "Aus welcher Sprache kommt 'Balkon'?",
    r5_q2_a1: "Italienisch",
    r5_q2_a2: "Englisch",
    r5_q2_a3: "Französisch",
    r5_q2_a4: "Spanisch",
    r5_q3: "Welcher Wort-Teil deutet auf Griechisch hin?",
    r5_q3_a1: "ph statt f",
    r5_q3_a2: "sch am Ende",
    r5_q3_a3: "eu am Anfang",
    r5_q3_a4: "tz in der Mitte",
  },
  en: {
    r1_info_title: "🌐 Foreign Words — Where Do They Come From?",
    r1_info_text: "FOREIGN WORDS are words from other languages used in German. 'Computer' (English), 'Restaurant' (French), 'Pizza' (Italian), 'Yoga' (Sanskrit). They're everywhere — in tech, food, sports, culture!",
    r1_q: "Which word is a FOREIGN WORD?",
    r1_a1: "Computer",
    r1_a2: "Haus",
    r1_a3: "Baum",
    r1_a4: "Stuhl",
    r2_info_title: "🌍 Sources of Foreign Words",
    r2_info_text: "LATIN & GREEK: 'Telefon' (tele=far, phon=voice). FRENCH: 'Hotel', 'Reservieren'. ENGLISH: 'Email', 'Download', 'Manager'. ITALIAN: 'Balkon', 'Konzert'. SPANISH: 'Guerilla', 'Tornado'.",
    r2_q: "Which language is the source of 'Restaurant'?",
    r2_a1: "French",
    r2_a2: "Spanish",
    r2_a3: "English",
    r2_a4: "Italian",
    r3_info_title: "🎯 Recognizing Foreign Words",
    r3_info_text: "Many foreign words have TYPICAL PATTERNS: '-tion' (Information), '-ment' (Management), 'ph' instead of 'f' (Telefon), 'ch' Greek (Chaos). These patterns help you recognize new foreign words!",
    r3_q: "What indicates that 'Präsentation' is a foreign word?",
    r3_a1: "The ending -tion",
    r3_a2: "The word is short",
    r3_a3: "It sounds hard",
    r3_a4: "It has an umlaut",
    r4_info_title: "⭐ Pronunciation & Stress",
    r4_info_text: "Foreign words often keep their ORIGINAL PRONUNCIATION & STRESS! 'Computer' → [kom-PI-ter] (stress on -pu-), not [KOM-pu-ter]. 'Reservoir' → [rES-er-vuar] (French). Some pronunciations are hard — that's normal!",
    r4_q: "How do you pronounce 'Café'?",
    r4_a1: "[ka-FEE] — stress on FEE",
    r4_a2: "[KA-fe] — stress on KA",
    r4_a3: "[ka-fe-ay]",
    r4_a4: "[kaf]",
    r5_info_title: "✅ Review: Foreign Words",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Which is NOT a foreign word?",
    r5_q1_a1: "Telefon",
    r5_q1_a2: "Stuhl",
    r5_q1_a3: "Sandwich",
    r5_q1_a4: "Zentner",
    r5_q2: "Which language is 'Balkon' from?",
    r5_q2_a1: "Italian",
    r5_q2_a2: "English",
    r5_q2_a3: "French",
    r5_q2_a4: "Spanish",
    r5_q3: "Which word part indicates Greek origin?",
    r5_q3_a1: "ph instead of f",
    r5_q3_a2: "sch at the end",
    r5_q3_a3: "eu at the beginning",
    r5_q3_a4: "tz in the middle",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_info_title",
      infoText: "r1_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🌐
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a1", "r1_a2", "r1_a3", "r1_a4"], answer: "r1_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_info_title",
      infoText: "r2_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🌍
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a1", "r2_a2", "r2_a3", "r2_a4"], answer: "r2_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_info_title",
      infoText: "r3_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🎯
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a1", "r3_a2", "r3_a3", "r3_a4"], answer: "r3_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_info_title",
      infoText: "r4_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ⭐
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a1", "r4_a2", "r4_a3", "r4_a4"], answer: "r4_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_info_title",
      infoText: "r5_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ✅
          </text>
        </svg>
      ),
      questions: [
        { question: "r5_q1", choices: ["r5_q1_a1", "r5_q1_a2", "r5_q1_a3", "r5_q1_a4"], answer: "r5_q1_a2" },
        { question: "r5_q2", choices: ["r5_q2_a1", "r5_q2_a2", "r5_q2_a3", "r5_q2_a4"], answer: "r5_q2_a1" },
        { question: "r5_q3", choices: ["r5_q3_a1", "r5_q3_a2", "r5_q3_a3", "r5_q3_a4"], answer: "r5_q3_a1" },
      ],
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function FremdwoerterExplorer({ color = "#6366F1", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
