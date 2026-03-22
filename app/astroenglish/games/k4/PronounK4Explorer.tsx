"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Subject & Object Pronouns",
    r1_text: "Subject pronouns do the action (I, you, he, she, it, we, they). Object pronouns receive the action (me, you, him, her, it, us, them).",
    r1_q: "Which is a SUBJECT pronoun?",
    r1_a: "me",
    r1_b: "him",
    r1_c: "she",
    r1_d: "us",
    r2_title: "Using Pronouns Correctly",
    r2_text: "Use subject pronouns as the subject. Use object pronouns after verbs. Example: SHE gave the book to HIM (not him gave).",
    r2_q: "Which is CORRECT?",
    r2_a: "Me and him went to school.",
    r2_b: "He and I went to school.",
    r2_c: "Us went to school.",
    r2_d: "Them are my friends.",
    r3_title: "Possessive Pronouns",
    r3_text: "Possessive pronouns show ownership: mine, yours, his, hers, its, ours, theirs. Example: This book is MINE (not my).",
    r3_q: "Which is CORRECT?",
    r3_a: "This coat is her.",
    r3_b: "This coat is hers.",
    r3_c: "This coat is she.",
    r3_d: "This coat is herself.",
    r4_title: "Relative Pronouns",
    r4_text: "Relative pronouns (who, whom, whose, which, that) connect ideas. Example: The boy WHO ran fast won.",
    r4_q: "Which is CORRECT?",
    r4_a: "The girl which won the race.",
    r4_b: "The girl that won the race.",
    r4_c: "The girl whom won the race.",
    r4_d: "The girl whose won the race.",
    r5_title: "⭐ Pronoun Master",
    r5_text: "Perfect! You understand all types of pronouns!",
  },
  de: {
    r1_title: "Subjekt- & Objektpronomen",
    r1_text: "Subjektpronomen führen die Handlung aus (Ich, du, er, sie, es, wir, sie). Objektpronomen erhalten die Handlung (mich, dich, ihn, sie, es, uns, sie).",
    r1_q: "Welches ist ein SUBJEKT-Pronomen?",
    r1_a: "mich",
    r1_b: "ihn",
    r1_c: "sie",
    r1_d: "uns",
    r2_title: "Pronomen korrekt verwenden",
    r2_text: "Nutze Subjektpronomen als Subjekt. Nutze Objektpronomen nach Verben. Beispiel: SIE gab das Buch IHM (nicht ihm gab).",
    r2_q: "Welches ist RICHTIG?",
    r2_a: "Ich und er gingen zur Schule.",
    r2_b: "Er und ich gingen zur Schule.",
    r2_c: "Wir gingen zur Schule.",
    r2_d: "Sie sind meine Freunde.",
    r3_title: "Possessivpronomen",
    r3_text: "Possessivpronomen zeigen Besitz: meins, deins, seins, ihrs, unseres, ihres. Beispiel: Dieses Buch ist MEINS (nicht mein).",
    r3_q: "Welches ist RICHTIG?",
    r3_a: "Dieser Mantel ist ihr.",
    r3_b: "Dieser Mantel ist ihrer.",
    r3_c: "Dieser Mantel ist sie.",
    r3_d: "Dieser Mantel ist sich selbst.",
    r4_title: "Relativpronomen",
    r4_text: "Relativpronomen (wer, wen, wessen, welches, das) verbinden Ideen. Beispiel: Das Mädchen, DAS schnell lief, gewann.",
    r4_q: "Welches ist RICHTIG?",
    r4_a: "Das Mädchen, die das Rennen gewann.",
    r4_b: "Das Mädchen, das das Rennen gewann.",
    r4_c: "Das Mädchen, wen das Rennen gewann.",
    r4_d: "Das Mädchen, wessen das Rennen gewann.",
    r5_title: "⭐ Pronomen-Meister",
    r5_text: "Perfekt! Du verstehst alle Arten von Pronomen!",
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
            👤
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#EC4899">
            ✓
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#F59E0B">
            🎁
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
            🔗
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

export default function PronounK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
