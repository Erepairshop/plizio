"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Context Clues",
    r1_text: "Context clues are hints in the text that help you understand new words. Look at nearby words, sentences, and ideas.",
    r1_q: "What does 'famished' mean? 'After not eating for hours, the famished boy ate quickly.'",
    r1_a: "happy",
    r1_b: "very hungry",
    r1_c: "lazy",
    r1_d: "confused",
    r2_title: "Definition Clues",
    r2_text: "Sometimes the text gives a definition or explanation. Example: 'The benevolent teacher, who was kind and caring, helped all students.'",
    r2_q: "What does 'benevolent' mean here?",
    r2_a: "strict",
    r2_b: "kind and caring",
    r2_c: "intelligent",
    r2_d: "experienced",
    r3_title: "Example Clues",
    r3_text: "Examples can explain a word. Example: 'Vegetables like carrots, broccoli, and spinach are healthy.' (vegetables = carrots, broccoli, spinach)",
    r3_q: "What does 'diurnal' mean? 'Diurnal animals, like squirrels and birds, are active during the day.'",
    r3_a: "nocturnal",
    r3_b: "large",
    r3_c: "active during the day",
    r3_d: "living in trees",
    r4_title: "Contrast Clues",
    r4_text: "Opposites can help. Example: 'Unlike the gregarious puppy, the cat was aloof and unfriendly.' (aloof = opposite of friendly)",
    r4_q: "What does 'pristine' mean? 'While the messy room was cluttered, the garage was pristine.'",
    r4_a: "full of things",
    r4_b: "very clean",
    r4_c: "dangerous",
    r4_d: "dark",
    r5_title: "⭐ Context Expert",
    r5_text: "Perfect! You can use context clues to understand new words!",
  },
  de: {
    r1_title: "Kontexthilfen",
    r1_text: "Kontexthilfen sind Hinweise im Text, die dir helfen, neue Wörter zu verstehen. Schau auf nahegelegene Wörter, Sätze und Ideen.",
    r1_q: "Was bedeutet 'ausgehungert'? 'Nach nicht essen für Stunden aß der ausgehungerte Junge schnell.'",
    r1_a: "glücklich",
    r1_b: "sehr hungrig",
    r1_c: "faul",
    r1_d: "verwirrt",
    r2_title: "Definitionshilfen",
    r2_text: "Manchmal gibt der Text eine Definition oder Erklärung. Beispiel: 'Der wohlwollende Lehrer, der freundlich und fürsorglich war, half allen Schülern.'",
    r2_q: "Was bedeutet 'wohlwollend' hier?",
    r2_a: "streng",
    r2_b: "freundlich und fürsorglich",
    r2_c: "intelligent",
    r2_d: "erfahren",
    r3_title: "Beispielhilfen",
    r3_text: "Beispiele können ein Wort erklären. Beispiel: 'Gemüse wie Karotten, Brokkoli und Spinat sind gesund.' (Gemüse = Karotten, Brokkoli, Spinat)",
    r3_q: "Was bedeutet 'tagaktiv'? 'Tagaktive Tiere, wie Eichhörnchen und Vögel, sind während des Tages aktiv.'",
    r3_a: "nachtaktiv",
    r3_b: "groß",
    r3_c: "während des Tages aktiv",
    r3_d: "leben in Bäumen",
    r4_title: "Gegensatzhilfen",
    r4_text: "Gegensätze können helfen. Beispiel: 'Im Gegensatz zum geselligen Welpen war die Katze distanziert und unfreundlich.' (distanziert = Gegenteil von freundlich)",
    r4_q: "Was bedeutet 'makellos'? 'Während das unordentliche Zimmer vollgestellt war, war die Garage makellos.'",
    r4_a: "voller Dinge",
    r4_b: "sehr sauber",
    r4_c: "gefährlich",
    r4_d: "dunkel",
    r5_title: "⭐ Kontext-Experte",
    r5_text: "Perfekt! Du kannst Kontexthilfen verwenden, um neue Wörter zu verstehen!",
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
            🔍
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
            📖
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
            📚
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

export default function ContextK4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
