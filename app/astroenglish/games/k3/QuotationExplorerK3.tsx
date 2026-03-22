"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What are Quotation Marks?",
    r1_text: "Quotation marks (\" \") show the EXACT WORDS someone said. They go AROUND what the person said. Example: She said, \"I love reading.\"",
    r1_q: "Where do quotation marks go?",
    r1_a: "Before and after the spoken words",
    r1_b: "Around the speaker's name",
    r1_c: "At the end of the sentence",
    r1_d: "Before the period",
    r2_title: "Direct Speech",
    r2_text: "Direct speech is when you write the EXACT words someone said. Use quotation marks! Example: Tom said, \"I like pizza.\"",
    r2_q: "Which is correct direct speech?",
    r2_a: "Maria said I like dogs.",
    r2_b: "Maria said \"I like dogs.\"",
    r2_c: "Maria said, \"I like dogs.\"",
    r2_d: "\"Maria said I like dogs.\"",
    r3_title: "Punctuation with Quotes",
    r3_text: "The period, comma, and question mark go INSIDE the quotation marks. Example: \"How are you?\" she asked.",
    r3_q: "What is correct?",
    r3_a: "\"What time is it\" she asked?",
    r3_b: "\"What time is it?\" she asked.",
    r3_c: "She asked \"What time is it?\"",
    r3_d: "She asked, \"What time is it\"?",
    r4_title: "Quote Practice",
    r4_text: "Choose the correctly punctuated sentence!",
    r4_q: "Which sentence is correct?",
    r4_a: "\"I can't wait,\" said Alex excitedly.",
    r4_b: "\"I can't wait\" said Alex excitedly.",
    r4_c: "I can't wait,\" said \"Alex excitedly.",
    r4_d: "\"I can't wait said Alex excitedly.\"",
    r5_title: "⭐ Quotation Expert",
    r5_text: "Excellent! You know how to use quotation marks correctly!",
  },
  de: {
    r1_title: "Was sind Anführungszeichen?",
    r1_text: "Anführungszeichen (\" \") zeigen die GENAUEN WORTE, die jemand sagte. Sie gehen UM das, was die Person sagte. Beispiel: Sie sagte, \"Ich liebe Lesen.\"",
    r1_q: "Wo gehen Anführungszeichen hin?",
    r1_a: "Vor und nach den gesprochenen Worten",
    r1_b: "Rund um den Namen des Sprechers",
    r1_c: "Am Ende des Satzes",
    r1_d: "Vor dem Punkt",
    r2_title: "Direkte Rede",
    r2_text: "Direkte Rede ist wenn du die GENAUEN WORTE schreibst, die jemand sagte. Nutze Anführungszeichen! Beispiel: Tom sagte, \"Ich mag Pizza.\"",
    r2_q: "Welche ist korrekte direkte Rede?",
    r2_a: "Maria sagte Ich mag Hunde.",
    r2_b: "Maria sagte \"Ich mag Hunde.\"",
    r2_c: "Maria sagte, \"Ich mag Hunde.\"",
    r2_d: "\"Maria sagte Ich mag Hunde.\"",
    r3_title: "Satzzeichen mit Anführungszeichen",
    r3_text: "Der Punkt, das Komma und das Fragezeichen gehen INSIDE die Anführungszeichen. Beispiel: \"Wie geht es dir?\" fragte sie.",
    r3_q: "Was ist korrekt?",
    r3_a: "\"Wie spät ist es\" fragte sie?",
    r3_b: "\"Wie spät ist es?\" fragte sie.",
    r3_c: "Sie fragte \"Wie spät ist es?\"",
    r3_d: "Sie fragte, \"Wie spät ist es\"?",
    r4_title: "Anführungszeichen-Übung",
    r4_text: "Wähle den korrekt punktierten Satz!",
    r4_q: "Welcher Satz ist korrekt?",
    r4_a: "\"Ich kann es kaum erwarten,\" sagte Alex aufgeregt.",
    r4_b: "\"Ich kann es kaum erwarten\" sagte Alex aufgeregt.",
    r4_c: "Ich kann es kaum erwarten,\" sagte \"Alex aufgeregt.",
    r4_d: "\"Ich kann es kaum erwarten sagte Alex aufgeregt.\"",
    r5_title: "⭐ Anführungszeichen-Experte",
    r5_text: "Ausgezeichnet! Du weißt, wie man Anführungszeichen korrekt nutzt!",
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#3B82F6">
            "
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            💬
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
            .
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">
            ✓
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }],
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
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function QuotationExplorerK3({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
