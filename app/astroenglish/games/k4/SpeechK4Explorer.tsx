"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Direct Speech",
    r1_text: "DIRECT SPEECH shows the EXACT words someone said. Use quotation marks and report verbs like 'said,' 'asked,' 'replied.' Example: She said, \"I am happy.\"",
    r1_q: "Which is DIRECT speech?",
    r1_a: "She said that she is happy.",
    r1_b: "\"I am happy,\" she said.",
    r1_c: "She is very happy.",
    r1_d: "She said happiness is good.",
    r2_title: "Indirect Speech",
    r2_text: "INDIRECT SPEECH reports what someone said WITHOUT quotation marks. Use 'that'. Example: She said that she was happy. (Tense often changes!)",
    r2_q: "Which is INDIRECT speech?",
    r2_a: "\"I will go,\" he said.",
    r2_b: "He said, \"I will go.\"",
    r2_c: "He said that he would go.",
    r2_d: "He said I will go.",
    r3_title: "Reporting Verbs",
    r3_text: "Use different reporting verbs: said, asked, answered, replied, explained, insisted, whispered, shouted, complained. Example: \"Hello!\" she whispered.",
    r3_q: "Which reporting verb fits? '_____ ?' he asked.",
    r3_a: "said",
    r3_b: "replied",
    r3_c: "\"Where is the book\"",
    r3_d: "explained",
    r4_title: "Converting Speech",
    r4_text: "When converting direct to indirect, the tense changes: is→was, will→would, can→could. Example: 'I am tired'→She said she was tired.",
    r4_q: "Convert to indirect: 'I will help you,' she said.",
    r4_a: "She said she helps you.",
    r4_b: "She said she would help me.",
    r4_c: "She said she will help me.",
    r4_d: "She would help you.",
    r5_title: "⭐ Speech Expert",
    r5_text: "Excellent! You can use direct and indirect speech!",
  },
  de: {
    r1_title: "Direkte Rede",
    r1_text: "DIREKTE REDE zeigt die GENAUEN WORTE, die jemand sagte. Nutze Anführungszeichen und Berichtsverben wie 'sagte', 'fragte', 'antwortete'. Beispiel: Sie sagte, \"Ich bin glücklich.\"",
    r1_q: "Welches ist DIREKTE Rede?",
    r1_a: "Sie sagte, dass sie glücklich ist.",
    r1_b: "\"Ich bin glücklich,\" sagte sie.",
    r1_c: "Sie ist sehr glücklich.",
    r1_d: "Sie sagte, Glück ist gut.",
    r2_title: "Indirekte Rede",
    r2_text: "INDIREKTE REDE berichtet, was jemand sagte, OHNE Anführungszeichen. Nutze 'dass'. Beispiel: Sie sagte, dass sie glücklich war. (Die Zeit ändert sich oft!)",
    r2_q: "Welches ist INDIREKTE Rede?",
    r2_a: "\"Ich werde gehen,\" sagte er.",
    r2_b: "Er sagte, \"Ich werde gehen.\"",
    r2_c: "Er sagte, dass er gehen würde.",
    r2_d: "Er sagte, ich werde gehen.",
    r3_title: "Berichtsverben",
    r3_text: "Nutze verschiedene Berichtsverben: sagte, fragte, antwortete, erwiderte, erklärte, behauptete, flüsterte, schrie, beschwerte sich. Beispiel: \"Hallo!\" flüsterte sie.",
    r3_q: "Welches Berichtsverb passt? '_____ ?' fragte er.",
    r3_a: "sagte",
    r3_b: "erwiderte",
    r3_c: "\"Wo ist das Buch\"",
    r3_d: "erklärte",
    r4_title: "Rede konvertieren",
    r4_text: "Beim Konvertieren von direkt zu indirekt, ändert sich die Zeit: bin→war, werde→würde, kann→könnte. Beispiel: 'Ich bin müde'→Sie sagte, sie wäre müde.",
    r4_q: "Konvertiere zu indirekt: 'Ich werde dir helfen,' sagte sie.",
    r4_a: "Sie sagte, sie hilft mir.",
    r4_b: "Sie sagte, sie würde mir helfen.",
    r4_c: "Sie sagte, sie wird mir helfen.",
    r4_d: "Sie würde dir helfen.",
    r5_title: "⭐ Rede-Experte",
    r5_text: "Ausgezeichnet! Du kannst direkte und indirekte Rede verwenden!",
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
            💬
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
            🗣️
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
            🔊
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
            ↔️
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

export default function SpeechK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
