"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Action Verbs",
    r1_text: "Verbs are ACTION words! They describe what someone or something DOES. Examples: run, jump, eat, sleep, sing, dance.",
    r1_q: "Which is an action verb?",
    r1_a: "blue",
    r1_b: "happy",
    r1_c: "jump",
    r1_d: "big",
    r2_title: "Present Tense",
    r2_text: "PRESENT TENSE describes actions happening NOW or regularly. 'I eat apples.' 'She walks to school.' 'They play soccer.'",
    r2_q: "Which sentence is in present tense?",
    r2_a: "He walked to school.",
    r2_b: "She walks to school.",
    r2_c: "They will walk to school.",
    r2_d: "He was walking.",
    r3_title: "Past Tense",
    r3_text: "PAST TENSE describes actions that ALREADY HAPPENED. We often add -ED to make past tense: play → played, watch → watched.",
    r3_q: "What is the past tense of 'jump'?",
    r3_a: "jumping",
    r3_b: "jumps",
    r3_c: "jumped",
    r3_d: "jump",
    r4_title: "Verb Review",
    r4_text: "Let's check what you learned!",
    r4_q1: "Is 'run' a verb or a noun?",
    r4_a1: "noun",
    r4_b1: "verb",
    r4_q2: "Which shows present tense?",
    r4_a2: "looked",
    r4_b2: "looks",
    r4_q3: "What is the past of 'go'?",
    r4_a3: "goes",
    r4_b3: "went",
    r5_title: "⭐ Verb Master",
    r5_text: "You understand action words!",
  },
  de: {
    r1_title: "Handlungverben",
    r1_text: "Verben sind HANDLUNGSWÖRTER! Sie beschreiben, was jemand oder etwas TUT. Beispiele: laufen, springen, essen, schlafen, singen, tanzen.",
    r1_q: "Welches ist ein Handlungsverb?",
    r1_a: "blau",
    r1_b: "glücklich",
    r1_c: "springen",
    r1_d: "groß",
    r2_title: "Präsens",
    r2_text: "PRÄSENS beschreibt Handlungen, die JETZT passieren oder regelmäßig. 'Ich esse Äpfel.' 'Sie geht zur Schule.' 'Sie spielen Fußball.'",
    r2_q: "Welcher Satz ist im Präsens?",
    r2_a: "Er ging zur Schule.",
    r2_b: "Sie geht zur Schule.",
    r2_c: "Sie werden zur Schule gehen.",
    r2_d: "Er war gehen.",
    r3_title: "Präteritum",
    r3_text: "PRÄTERITUM beschreibt Handlungen, die SCHON PASSIERT SIND. Wir fügen oft -TE hinzu: spielen → spielte, zusehen → zusah.",
    r3_q: "Was ist das Präteritum von 'springen'?",
    r3_a: "springend",
    r3_b: "springt",
    r3_c: "sprang",
    r3_d: "springen",
    r4_title: "Verb-Wiederholung",
    r4_text: "Lass uns testen, was du gelernt hast!",
    r4_q1: "Ist 'laufen' ein Verb oder ein Substantiv?",
    r4_a1: "Substantiv",
    r4_b1: "Verb",
    r4_q2: "Welches zeigt Präsens?",
    r4_a2: "schaute",
    r4_b2: "schaut",
    r4_q3: "Was ist das Präteritum von 'gehen'?",
    r4_a3: "geht",
    r4_b3: "ging",
    r5_title: "⭐ Verb-Meister",
    r5_text: "Du verstehst Handlungswörter!",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EF4444">
            💨
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            ⏱️
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">
            ⏳
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            ❓
          </text>
        </svg>
      ),
      questions: [
        { question: "r4_q1", choices: ["r4_a1", "r4_b1"], answer: "r4_b1" },
        { question: "r4_q2", choices: ["r4_a2", "r4_b2"], answer: "r4_b2" },
        { question: "r4_q3", choices: ["r4_a3", "r4_b3"], answer: "r4_b3" },
      ],
    },
    {
      type: "info",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FFD700">
            ⭐
          </text>
        </svg>
      ),
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function VerbExplorer({ color = "#EF4444", lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
