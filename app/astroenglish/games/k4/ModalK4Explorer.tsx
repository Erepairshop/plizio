"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Modal Verbs",
    r1_text: "Modal verbs (can, could, should, must, may, will) show ability, permission, obligation, or possibility. Examples: Can you help? Should I go?",
    r1_q: "Which is a modal verb?",
    r1_a: "running",
    r1_b: "should",
    r1_c: "beautiful",
    r1_d: "quickly",
    r2_title: "Ability & Permission",
    r2_text: "CAN = present ability (I can swim). COULD = past ability (I could swim as a child). MAY = permission (May I go?).",
    r2_q: "Which is CORRECT?",
    r2_a: "She can to sing very well.",
    r2_b: "She can sing very well.",
    r2_c: "She cans sing very well.",
    r2_d: "She can singing very well.",
    r3_title: "Obligation & Advice",
    r3_text: "MUST = strong obligation (You must listen). SHOULD = advice (You should study). HAVE TO = necessity (I have to go).",
    r3_q: "Which shows ADVICE?",
    r3_a: "You must eat vegetables.",
    r3_b: "You have to eat vegetables.",
    r3_c: "You should eat vegetables.",
    r3_d: "You can eat vegetables.",
    r4_title: "Modal Practice",
    r4_text: "Choose the correct modal verb!",
    r4_q: "I _____ read this book because it's required for class.",
    r4_a: "can",
    r4_b: "could",
    r4_c: "must",
    r4_d: "may",
    r5_title: "⭐ Modal Expert",
    r5_text: "Excellent! You understand modal verbs!",
  },
  de: {
    r1_title: "Modalverben",
    r1_text: "Modalverben (können, dürfen, sollen, müssen, mögen, werden) zeigen Fähigkeit, Erlaubnis, Verpflichtung oder Möglichkeit. Beispiele: Kannst du mir helfen? Sollte ich gehen?",
    r1_q: "Welches ist ein Modalverb?",
    r1_a: "läufig",
    r1_b: "sollte",
    r1_c: "schön",
    r1_d: "schnell",
    r2_title: "Fähigkeit & Erlaubnis",
    r2_text: "KANN = gegenwärtige Fähigkeit (Ich kann schwimmen). KONNTE = frühere Fähigkeit (Ich konnte als Kind schwimmen). DARF = Erlaubnis (Darf ich gehen?).",
    r2_q: "Welches ist RICHTIG?",
    r2_a: "Sie kann sehr gut singen.",
    r2_b: "Sie kann zu singen sehr gut.",
    r2_c: "Sie kanns sehr gut singen.",
    r2_d: "Sie kann singend sehr gut.",
    r3_title: "Verpflichtung & Ratschlag",
    r3_text: "MUSS = starke Verpflichtung (Du musst zuhören). SOLLTE = Ratschlag (Du solltest lernen). MUSS = Notwendigkeit (Ich muss gehen).",
    r3_q: "Welches zeigt RATSCHLAG?",
    r3_a: "Du musst Gemüse essen.",
    r3_b: "Du musst Gemüse essen.",
    r3_c: "Du solltest Gemüse essen.",
    r3_d: "Du kannst Gemüse essen.",
    r4_title: "Modal-Übung",
    r4_text: "Wähle das richtige Modalverb!",
    r4_q: "Ich _____ dieses Buch lesen, weil es für die Klasse erforderlich ist.",
    r4_a: "kann",
    r4_b: "konnte",
    r4_c: "muss",
    r4_d: "darf",
    r5_title: "⭐ Modal-Experte",
    r5_text: "Ausgezeichnet! Du verstehst Modalverben!",
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
            🎯
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
            💪
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
            ⚖️
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
          <text x="120" y="90" textAnchor="middle" fontSize="48" fill="#10B981">
            ✓
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_c" }],
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
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_c" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function ModalK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
