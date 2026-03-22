"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🔀 Synonyme — Wörter mit gleicher Bedeutung",
    r1_info_text: "SYNONYME sind Wörter mit der GLEICHEN oder ÄHNLICHEN Bedeutung. 'Haus' = 'Gebäude'. 'Freund' = 'Kamerad'. 'Angst' = 'Furcht'. Synonyme helfen dir, Wiederholungen zu vermeiden und variativer zu schreiben!",
    r1_q: "Welches Wort ist ein SYNONYM zu 'glücklich'?",
    r1_a1: "froh",
    r1_a2: "traurig",
    r1_a3: "böse",
    r1_a4: "langweilig",
    r2_info_title: "🔀 Antonym — Gegenteilige Wörter",
    r2_info_text: "ANTONYME sind Wörter mit der GEGENTEILIGEN Bedeutung. 'Anfang' ↔ 'Ende'. 'Erfolg' ↔ 'Misserfolg'. 'Hell' ↔ 'Dunkel'. Antonyme helfen dir, Kontraste auszudrücken!",
    r2_q: "Welches Wort ist das ANTONYM zu 'kalt'?",
    r2_a1: "warm",
    r2_a2: "eiskalt",
    r2_a3: "kühl",
    r2_a4: "temperiert",
    r3_info_title: "🎯 Kontext-Abhängigkeit",
    r3_info_text: "Manchmal hat ein Wort VERSCHIEDENE Bedeutungen in verschiedenen Kontexten. 'Decke' = Woll-Decke ODER Zimmer-Decke. Das ändet die Synonyme! 'Decke' ≠ 'Bettdecke' (zu spezifisch). Immer den Kontext beachten!",
    r3_q: "Was ist ein bestes SYNONYM für 'schnell fahren'?",
    r3_a1: "rasen",
    r3_a2: "sitzen",
    r3_a3: "fliegen",
    r3_a4: "stehen",
    r4_info_title: "⭐ Nuancen: Feine Unterschiede",
    r4_info_text: "Nicht alle Synonyme sind PERFEKT identisch! 'Haus' und 'Villa' sind Synonyme, aber eine Villa ist größer und teurer. 'Angst' und 'Furcht' sind ähnlich, aber 'Furcht' klingt formaler. Die Nuancen sind wichtig!",
    r4_q: "Welche Aussage ist RICHTIG?",
    r4_a1: "'Haus' und 'Schloss' sind perfekte Synonyme.",
    r4_a2: "'Angst' und 'Furcht' haben unterschiedliche Nuancen.",
    r4_a3: "'Schnell' und 'langsam' sind Synonyme.",
    r4_a4: "Alle Synonyme sind 100% identisch.",
    r5_info_title: "✅ Wiederholung: Synonyme & Antonyme",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "SYNONYM zu 'helfen':",
    r5_q1_a1: "unterstützen",
    r5_q1_a2: "hindern",
    r5_q1_a3: "ignorieren",
    r5_q1_a4: "vergessen",
    r5_q2: "ANTONYM zu 'oben':",
    r5_q2_a1: "unten",
    r5_q2_a2: "oben",
    r5_q2_a3: "hinten",
    r5_q2_a4: "vorne",
    r5_q3: "Was ist ein gutes SYNONYM zu 'intelligent'?",
    r5_q3_a1: "klug",
    r5_q3_a2: "dumm",
    r5_q3_a3: "lustig",
    r5_q3_a4: "alt",
  },
  en: {
    r1_info_title: "🔀 Synonyms — Words with Same Meaning",
    r1_info_text: "SYNONYMS are words with the SAME or SIMILAR meaning. 'House' = 'Building'. 'Friend' = 'Companion'. 'Fear' = 'Dread'. Synonyms help you avoid repetition and write more variably!",
    r1_q: "Which word is a SYNONYM for 'happy'?",
    r1_a1: "joyful",
    r1_a2: "sad",
    r1_a3: "angry",
    r1_a4: "boring",
    r2_info_title: "🔀 Antonym — Opposite Words",
    r2_info_text: "ANTONYMS are words with OPPOSITE meaning. 'Beginning' ↔ 'End'. 'Success' ↔ 'Failure'. 'Light' ↔ 'Dark'. Antonyms help you express contrasts!",
    r2_q: "Which word is the ANTONYM of 'cold'?",
    r2_a1: "warm",
    r2_a2: "icy",
    r2_a3: "cool",
    r2_a4: "temperate",
    r3_info_title: "🎯 Context-Dependency",
    r3_info_text: "Sometimes a word has DIFFERENT meanings in different contexts. 'Ceiling' = Cloth ceiling OR Room ceiling. That changes the synonyms! 'Ceiling' ≠ 'Blanket' (too specific). Always consider the context!",
    r3_q: "What is a good SYNONYM for 'drive fast'?",
    r3_a1: "speed",
    r3_a2: "sit",
    r3_a3: "fly",
    r3_a4: "stand",
    r4_info_title: "⭐ Nuances: Fine Differences",
    r4_info_text: "Not all synonyms are PERFECTLY identical! 'House' and 'Mansion' are synonyms, but a mansion is bigger and more expensive. 'Fear' and 'Dread' are similar, but 'dread' sounds more formal. Nuances matter!",
    r4_q: "Which statement is TRUE?",
    r4_a1: "'House' and 'Palace' are perfect synonyms.",
    r4_a2: "'Fear' and 'Dread' have different nuances.",
    r4_a3: "'Fast' and 'Slow' are synonyms.",
    r4_a4: "All synonyms are 100% identical.",
    r5_info_title: "✅ Review: Synonyms & Antonyms",
    r5_info_text: "Test your knowledge!",
    r5_q1: "SYNONYM for 'help':",
    r5_q1_a1: "support",
    r5_q1_a2: "hinder",
    r5_q1_a3: "ignore",
    r5_q1_a4: "forget",
    r5_q2: "ANTONYM for 'above':",
    r5_q2_a1: "below",
    r5_q2_a2: "above",
    r5_q2_a3: "behind",
    r5_q2_a4: "front",
    r5_q3: "What is a good SYNONYM for 'intelligent'?",
    r5_q3_a1: "smart",
    r5_q3_a2: "stupid",
    r5_q3_a3: "funny",
    r5_q3_a4: "old",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🔀
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🔀
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
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
      questions: [{ question: "r4_q", choices: ["r4_a1", "r4_a2", "r4_a3", "r4_a4"], answer: "r4_a2" }],
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
        { question: "r5_q1", choices: ["r5_q1_a1", "r5_q1_a2", "r5_q1_a3", "r5_q1_a4"], answer: "r5_q1_a1" },
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

export default function SynonymAntonymExplorer({ color = "#F59E0B", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
