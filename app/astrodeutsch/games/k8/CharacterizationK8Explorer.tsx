"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS = {
  en: {
    // R1: Direkte Charakterisierung
    r1_title: "Direct Characterization",
    r1_text: "The narrator or other characters describe a person directly. For example: 'He was a tall, quiet man.' The author explicitly states the character's traits.",
    r1_bullet1: "The narrator tells us the character's traits directly",
    r1_bullet2: "Characteristics are stated explicitly",
    r1_bullet3: "No interpretation by the reader needed",
    r1_q1: "Which is an example of direct characterization?",
    r1_a1_correct: "The narrator says: 'She was brave and determined.'",
    r1_a1_w1: "Through her actions, we see she is brave.",
    r1_a1_w2: "The reader must figure out the character's traits.",
    r1_a1_w3: "The character never describes themselves.",

    // R2: Indirekte Charakterisierung
    r2_title: "Indirect Characterization",
    r2_text: "Through actions, speech, thoughts, and behavior of a character, the reader must deduce their traits. What a character does and says reveals who they are.",
    r2_bullet1: "Character traits shown through actions",
    r2_bullet2: "Revealed through speech and thoughts",
    r2_bullet3: "Reader must interpret and conclude",
    r2_q1: "What reveals character indirectly?",
    r2_a1_correct: "Actions and behavior of the character",
    r2_a1_w1: "Direct description by the narrator",
    r2_a1_w2: "The title of the text",
    r2_a1_w3: "The setting of the story",

    // R3: Aufbau einer Charakterisierung
    r3_title: "Structure of a Character Analysis",
    r3_text: "A good character analysis follows this structure: Introduction (work, author, character), Main part (appearance → inner traits → behavior → development), Conclusion (significance/evaluation).",
    r3_bullet1: "Introduction: Name work, author, character",
    r3_bullet2: "Main part: Appearance, inner life, behavior, development",
    r3_bullet3: "Conclusion: Character's significance",
    r3_q1: "What should the main part include?",
    r3_a1_correct: "Appearance, inner traits, and behavior of the character",
    r3_a1_w1: "Only the character's name",
    r3_a1_w2: "Only the reader's opinion",
    r3_a1_w3: "The title of the book",

    // R4: Inhaltsangabe (Summary)
    r4_title: "Inhaltsangabe (Summary Writing)",
    r4_text: "A summary uses present tense, own words (no direct quotes!), indirect speech (Konjunktiv I), and answers the W-questions in the introduction: Who? What? Where? When?",
    r4_bullet1: "Use present tense (Präsens)",
    r4_bullet2: "Use own words, never direct quotes",
    r4_bullet3: "Use Konjunktiv I for reported speech",
    r4_q1: "What tense should you use in a summary?",
    r4_a1_correct: "Present tense (Präsens)",
    r4_a1_w1: "Past tense (Präteritum)",
    r4_a1_w2: "Perfect tense (Perfekt)",
    r4_a1_w3: "Future tense (Futur)",

    // R5: Review Quiz
    r5_title: "Review: Characterization & Summary",
    r5_text: "Let's review the key concepts of character analysis and summary writing!",
    r5_q1: "What should NOT be in a summary?",
    r5_a1_correct: "Direct word-for-word quotes from the text",
    r5_a1_w1: "Key events in own words",
    r5_a1_w2: "Present tense narrative",
    r5_a1_w3: "Answers to the W-questions",
    r5_q2: "If a character constantly lies throughout the story, this is an example of...",
    r5_a2_correct: "Indirect characterization",
    r5_a2_w1: "Direct characterization",
    r5_a2_w2: "A literary device only",
    r5_a2_w3: "Inhaltsangabe",
  },

  de: {
    // R1: Direkte Charakterisierung
    r1_title: "Direkte Charakterisierung",
    r1_text: "Der Erzähler oder andere Figuren beschreiben eine Person direkt. Zum Beispiel: 'Er war ein großer, stiller Mann.' Der Autor nennt die Eigenschaften der Figur ausdrücklich.",
    r1_bullet1: "Der Erzähler nennt die Eigenschaften direkt",
    r1_bullet2: "Merkmale werden ausdrücklich genannt",
    r1_bullet3: "Keine Interpretation durch den Leser nötig",
    r1_q1: "Welches ist ein Beispiel für direkte Charakterisierung?",
    r1_a1_correct: "Der Erzähler sagt: 'Sie war mutig und entschlossen.'",
    r1_a1_w1: "Durch ihre Taten sehen wir, dass sie mutig ist.",
    r1_a1_w2: "Der Leser muss die Eigenschaften selbst erkennen.",
    r1_a1_w3: "Die Figur beschreibt sich nie selbst.",

    // R2: Indirekte Charakterisierung
    r2_title: "Indirekte Charakterisierung",
    r2_text: "Durch Handlungen, Rede, Gedanken und Verhalten einer Figur muss der Leser ihre Eigenschaften erschließen. Was eine Figur tut und sagt, offenbart, wer sie ist.",
    r2_bullet1: "Figuren-Eigenschaften durch Handlungen gezeigt",
    r2_bullet2: "Offenbart durch Rede und Gedanken",
    r2_bullet3: "Leser muss interpretieren und schließen",
    r2_q1: "Was offenbart einen Charakter indirekt?",
    r2_a1_correct: "Handlungen und Verhalten der Figur",
    r2_a1_w1: "Direkte Beschreibung durch den Erzähler",
    r2_a1_w2: "Der Titel des Textes",
    r2_a1_w3: "Der Schauplatz der Geschichte",

    // R3: Aufbau einer Charakterisierung
    r3_title: "Aufbau einer Charakterisierung",
    r3_text: "Eine gute Charakterisierung folgt dieser Struktur: Einleitung (Werk, Autor, Figur), Hauptteil (Äußeres → Inneres → Verhalten → Entwicklung), Schluss (Bedeutung/Bewertung).",
    r3_bullet1: "Einleitung: Werk, Autor, Figur nennen",
    r3_bullet2: "Hauptteil: Äußeres, innere Merkmale, Verhalten, Entwicklung",
    r3_bullet3: "Schluss: Bedeutung der Figur",
    r3_q1: "Was sollte der Hauptteil enthalten?",
    r3_a1_correct: "Äußeres, innere Merkmale und Verhalten der Figur",
    r3_a1_w1: "Nur den Namen der Figur",
    r3_a1_w2: "Nur die Meinung des Lesers",
    r3_a1_w3: "Den Titel des Buches",

    // R4: Inhaltsangabe
    r4_title: "Inhaltsangabe",
    r4_text: "Eine Inhaltsangabe verwendet Präsens, eigene Worte (keine direkten Zitate!), indirekte Rede (Konjunktiv I) und beantwortet die W-Fragen in der Einleitung: Wer? Was? Wo? Wann?",
    r4_bullet1: "Verwende Präsens (Gegenwart)",
    r4_bullet2: "Verwende eigene Worte, nie direkte Zitate",
    r4_bullet3: "Verwende Konjunktiv I für indirekte Rede",
    r4_q1: "Welche Zeitform solltest du in einer Inhaltsangabe verwenden?",
    r4_a1_correct: "Präsens (Gegenwart)",
    r4_a1_w1: "Präteritum (Vergangenheit)",
    r4_a1_w2: "Perfekt (Perfekt)",
    r4_a1_w3: "Futur (Zukunft)",

    // R5: Review Quiz
    r5_title: "Wiederholung: Charakterisierung & Inhaltsangabe",
    r5_text: "Lass uns die Schlüsselkonzepte von Charakterisierung und Inhaltsangabe wiederholen!",
    r5_q1: "Was sollte NICHT in einer Inhaltsangabe sein?",
    r5_a1_correct: "Wörtliche Zitate direkt aus dem Text",
    r5_a1_w1: "Wichtige Ereignisse in eigenen Worten",
    r5_a1_w2: "Präsens-Erzählung",
    r5_a1_w3: "Antworten auf die W-Fragen",
    r5_q2: "Wenn eine Figur ständig lügt, ist das ein Beispiel für...",
    r5_a2_correct: "Indirekte Charakterisierung",
    r5_a2_w1: "Direkte Charakterisierung",
    r5_a2_w2: "Ein Stilmittel",
    r5_a2_w3: "Inhaltsangabe",
  },
};

const SVG_R1 = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" fill="#E8F4F8" rx="8" />
    <circle cx="80" cy="60" r="20" fill="#8B6F47" />
    <path d="M 80 80 L 70 110 L 65 155" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
    <path d="M 80 90 L 50 115" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
    <path d="M 80 90 L 110 115" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
    <path d="M 70 110 L 60 155" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
    <path d="M 90 110 L 100 155" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
    <text x="130" y="50" fontSize="14" fontWeight="bold" fill="#1A5F7A">Brave</text>
    <text x="130" y="70" fontSize="14" fontWeight="bold" fill="#1A5F7A">Quiet</text>
    <text x="130" y="90" fontSize="14" fontWeight="bold" fill="#1A5F7A">Tall</text>
  </svg>
);

const SVG_R2 = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" fill="#FFF4E6" rx="8" />
    <circle cx="70" cy="50" r="18" fill="#D97706" />
    <path d="M 70 68 L 60 100 L 55 150" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
    <path d="M 70 78 L 40 105" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
    <path d="M 70 78 L 100 105" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
    <path d="M 60 100 L 50 150" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
    <path d="M 80 100 L 90 150" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
    <g transform="translate(130, 40)">
      <path d="M 0 0 L 5 10 L -5 10 Z" fill="#D97706" />
      <text x="-12" y="25" fontSize="11" fontWeight="bold" fill="#1A5F7A">Action</text>
    </g>
    <g transform="translate(130, 85)">
      <circle cx="0" cy="0" r="4" fill="#D97706" />
      <path d="M 5 0 L 25 0" stroke="#D97706" strokeWidth="2" />
      <text x="-12" y="15" fontSize="11" fontWeight="bold" fill="#1A5F7A">Thought</text>
    </g>
  </svg>
);

const SVG_R3 = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" fill="#F0E8FF" rx="8" />
    <rect x="20" y="20" width="100" height="30" fill="#8B6F47" rx="4" />
    <text x="70" y="42" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
      Introduction
    </text>
    <rect x="20" y="60" width="100" height="60" fill="#B8A87E" rx="4" />
    <text x="70" y="78" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">
      Main part
    </text>
    <text x="70" y="92" fontSize="9" fill="white" textAnchor="middle">
      Appearance
    </text>
    <text x="70" y="104" fontSize="9" fill="white" textAnchor="middle">
      Behavior
    </text>
    <rect x="20" y="130" width="100" height="25" fill="#6B5C47" rx="4" />
    <text x="70" y="147" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
      Conclusion
    </text>
    <circle cx="180" cy="30" r="6" fill="#10B981" />
    <circle cx="180" cy="55" r="6" fill="#10B981" />
    <circle cx="180" cy="80" r="6" fill="#10B981" />
    <circle cx="180" cy="105" r="6" fill="#10B981" />
    <circle cx="180" cy="130" r="6" fill="#10B981" />
    <text x="200" y="145" fontSize="11" fontWeight="bold" fill="#1A5F7A">
      Order
    </text>
  </svg>
);

const SVG_R4 = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" fill="#F9E8E8" rx="8" />
    <rect x="15" y="15" width="210" height="130" fill="white" stroke="#8B6F47" strokeWidth="2" rx="6" />
    <text x="120" y="35" fontSize="13" fontWeight="bold" fill="#1A5F7A" textAnchor="middle">
      Inhaltsangabe
    </text>
    <line x1="25" y1="45" x2="215" y2="45" stroke="#D1D5DB" strokeWidth="1" />
    <text x="25" y="62" fontSize="10" fill="#1A5F7A">Wer? Was? Wo? Wann?</text>
    <text x="25" y="80" fontSize="10" fill="#1A5F7A">• Own words (keine Zitate)</text>
    <text x="25" y="98" fontSize="10" fill="#1A5F7A">• Präsens (Gegenwart)</text>
    <text x="25" y="116" fontSize="10" fill="#1A5F7A">• Konjunktiv I (indirekte Rede)</text>
    <circle cx="220" cy="70" r="12" fill="#D97706" />
    <text x="220" y="75" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
      ✓
    </text>
  </svg>
);

const SVG_R5 = () => (
  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="160" fill="#E8F8F0" rx="8" />
    <g transform="translate(50, 50)">
      <circle cx="0" cy="0" r="18" fill="#10B981" />
      <text x="0" y="6" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">
        C
      </text>
    </g>
    <text x="90" y="45" fontSize="11" fontWeight="bold" fill="#1A5F7A">
      Characterization
    </text>
    <text x="90" y="65" fontSize="10" fill="#059669">
      Direct & Indirect
    </text>
    <g transform="translate(50, 100)">
      <rect width="80" height="40" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" rx="4" />
      <text x="40" y="12" fontSize="9" fontWeight="bold" fill="#1A5F7A" textAnchor="middle">
        Review Quiz
      </text>
      <text x="40" y="26" fontSize="8" fill="#059669" textAnchor="middle">
        Test your knowledge!
      </text>
    </g>
    <circle cx="200" cy="110" r="8" fill="#10B981" />
    <circle cx="215" cy="110" r="8" fill="#10B981" />
  </svg>
);

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      bulletKeys: ["r1_bullet1", "r1_bullet2", "r1_bullet3"],
      svg: SVG_R1,
      questions: [
        {
          question: "r1_q1",
          choices: ["r1_a1_correct", "r1_a1_w1", "r1_a1_w2", "r1_a1_w3"],
          answer: "r1_a1_correct",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      bulletKeys: ["r2_bullet1", "r2_bullet2", "r2_bullet3"],
      svg: SVG_R2,
      questions: [
        {
          question: "r2_q1",
          choices: ["r2_a1_correct", "r2_a1_w1", "r2_a1_w2", "r2_a1_w3"],
          answer: "r2_a1_correct",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      bulletKeys: ["r3_bullet1", "r3_bullet2", "r3_bullet3"],
      svg: SVG_R3,
      questions: [
        {
          question: "r3_q1",
          choices: ["r3_a1_correct", "r3_a1_w1", "r3_a1_w2", "r3_a1_w3"],
          answer: "r3_a1_correct",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      bulletKeys: ["r4_bullet1", "r4_bullet2", "r4_bullet3"],
      svg: SVG_R4,
      questions: [
        {
          question: "r4_q1",
          choices: ["r4_a1_correct", "r4_a1_w1", "r4_a1_w2", "r4_a1_w3"],
          answer: "r4_a1_correct",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: SVG_R5,
      questions: [
        {
          question: "r5_q1",
          choices: ["r5_a1_correct", "r5_a1_w1", "r5_a1_w2", "r5_a1_w3"],
          answer: "r5_a1_correct",
        },
        {
          question: "r5_q2",
          choices: ["r5_a2_correct", "r5_a2_w1", "r5_a2_w2", "r5_a2_w3"],
          answer: "r5_a2_correct",
        },
      ],
    },
  ],
};

const CharacterizationK8Explorer = memo(function CharacterizationK8Explorer({
  color = "#8B5CF6",
  lang = "en",
  onDone,
  onClose,
}: {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}) {
  return (
    <ExplorerEngine
      def={DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
});

export default CharacterizationK8Explorer;
