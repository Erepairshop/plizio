"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Grammar Review",
    r1_text: "Test your knowledge of pronouns, modal verbs, adjectives, sentences, and speech!",
    r1_q: "Which sentence uses a modal verb correctly?",
    r1_a: "She will can sing.",
    r1_b: "She can sing very well.",
    r1_c: "She can to sing.",
    r1_d: "She cans sing.",
    r2_title: "Capitalization & Punctuation",
    r2_text: "Remember: capitalize proper nouns, first words, and after periods. Use quotation marks for direct speech!",
    r2_q: "Which sentence is CORRECT?",
    r2_a: "\"she asked, what time is it?\"",
    r2_b: "\"She asked, what time is it?\"",
    r2_c: "She asked, \"What time is it?\"",
    r2_d: "she asked \"what time is it?\"",
    r3_title: "Vocabulary & Context",
    r3_text: "Use context clues to understand new words. Recognize synonyms, antonyms, similes, and metaphors!",
    r3_q: "What does 'meticulous' mean? 'The meticulous artist paid attention to every detail.'",
    r3_a: "careless",
    r3_b: "very careful",
    r3_c: "artistic",
    r3_d: "quick",
    r4_title: "Advanced Structures",
    r4_text: "Complex sentences, direct/indirect speech, and sentence variety are important!",
    r4_q: "Which is CORRECT indirect speech?",
    r4_a: "She said, \"I will go.\"",
    r4_b: "She said that she would go.",
    r4_c: "She said she will go.",
    r4_d: "She said, \"She will go.\"",
    r5_title: "⭐ Grade 4 Master",
    r5_text: "Congratulations! You are now an expert in Grade 4 English!",
  },
  de: {
    r1_title: "Grammatik-Wiederholung",
    r1_text: "Teste dein Wissen über Pronomen, Modalverben, Adjektive, Sätze und Rede!",
    r1_q: "Welcher Satz nutzt ein Modalverb korrekt?",
    r1_a: "Sie kann singen wird.",
    r1_b: "Sie kann sehr gut singen.",
    r1_c: "Sie kann zu singen.",
    r1_d: "Sie kanns singen.",
    r2_title: "Großbuchstaben & Satzzeichen",
    r2_text: "Denk dran: Großschreibe Eigennamen, erste Worte und nach Punkten. Nutze Anführungszeichen für direkte Rede!",
    r2_q: "Welcher Satz ist RICHTIG?",
    r2_a: "\"sie fragte, wie spät ist es?\"",
    r2_b: "\"Sie fragte, wie spät ist es?\"",
    r2_c: "Sie fragte, \"Wie spät ist es?\"",
    r2_d: "sie fragte \"wie spät ist es?\"",
    r3_title: "Wortschatz & Kontext",
    r3_text: "Nutze Kontexthilfen, um neue Wörter zu verstehen. Erkenne Synonyme, Antonyme, Vergleiche und Metaphern!",
    r3_q: "Was bedeutet 'pingelig'? 'Der peinige Künstler achtete auf jedes Detail.'",
    r3_a: "unaufmerksam",
    r3_b: "sehr sorgfältig",
    r3_c: "künstlerisch",
    r3_d: "schnell",
    r4_title: "Fortgeschrittene Strukturen",
    r4_text: "Komplexe Sätze, direkte/indirekte Rede und Satzvielfalt sind wichtig!",
    r4_q: "Welches ist KORREKTE indirekte Rede?",
    r4_a: "Sie sagte, \"Ich werde gehen.\"",
    r4_b: "Sie sagte, dass sie gehen würde.",
    r4_c: "Sie sagte, dass sie wird gehen.",
    r4_d: "Sie sagte, \"Sie werden gehen.\"",
    r5_title: "⭐ Klasse-4-Meister",
    r5_text: "Glückwunsch! Du bist jetzt ein Experte in Englisch der 4. Klasse!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#6366F1">
            📖
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">
            🅰️
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_c" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            📚
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            ✓
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#FBBF24">
            ⭐
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_b" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function BigTestK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
