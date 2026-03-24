"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS = {
  en: {
    // Round 1: Aufklärung
    r1_title: "Enlightenment (1720-1785)",
    r1_text: "The Enlightenment emphasized reason, understanding, and tolerance. Gotthold Ephraim Lessing was a major representative with works like \"Nathan the Wise,\" which promoted religious tolerance and rational thought.",
    r1_q1: "Which is a characteristic of the Enlightenment?",
    r1_c1: "Reason and tolerance",
    r1_c2: "Emotional excess",
    r1_c3: "Longing for nature",
    r1_c4: "Critique through realism",

    // Round 2: Sturm und Drang
    r2_title: "Storm and Stress (1765-1785)",
    r2_text: "Sturm und Drang placed emotion above reason, celebrated genius, and rebelled against strict rules. Goethe's \"The Sorrows of Young Werther\" and Schiller's \"The Robbers\" are key works showing passion, nature worship, and individualism.",
    r2_q1: "What characterizes Storm and Stress?",
    r2_c1: "Emotion and rebellion against rules",
    r2_c2: "Strict formal rules",
    r2_c3: "Reason over emotion",
    r2_c4: "Objective description",

    // Round 3: Weimarer Klassik
    r3_title: "Weimar Classicism (1786-1805)",
    r3_text: "Weimar Classicism sought harmony, humanity, and beauty. Goethe and Schiller lived and worked together in Weimar, creating masterpieces like \"Faust\" and \"William Tell\" that balanced reason and emotion.",
    r3_q1: "What is the ideal of Classicism?",
    r3_c1: "Harmony of reason and emotion",
    r3_c2: "Only emotion matters",
    r3_c3: "Only reason matters",
    r3_c4: "Social critique",

    // Round 4: Romantik
    r4_title: "Romanticism (1795-1848)",
    r4_text: "Romanticism valued longing, nature, fantasy, and the wondrous. Authors like Eichendorff, Novalis, and E.T.A. Hoffmann celebrated imagination and the supernatural. The \"Blue Flower\" became a symbol of romantic yearning.",
    r4_q1: "What does the 'Blue Flower' represent?",
    r4_c1: "Symbol of longing in Romanticism",
    r4_c2: "A poem by Goethe",
    r4_c3: "A plant from Classicism",
    r4_c4: "A literary device",

    // Round 5: Review
    r5_title: "Literature & Epochs Review",
    r5_text: "Test your knowledge of German literary epochs and their characteristics!",
    r5_q1: "Who wrote \"The Robbers\"?",
    r5_c1: "Friedrich Schiller",
    r5_c2: "Johann Wolfgang Goethe",
    r5_c3: "Gotthold Ephraim Lessing",
    r5_c4: "Joseph von Eichendorff",
    r5_q2: "\"Back to nature\" and yearning — which epoch?",
    r5_c2_1: "Romanticism",
    r5_c2_2: "Enlightenment",
    r5_c2_3: "Weimar Classicism",
    r5_c2_4: "Storm and Stress",
  },
  de: {
    // Round 1: Aufklärung
    r1_title: "Aufklärung (1720-1785)",
    r1_text: "Die Aufklärung betonte Vernunft, Verstand und Toleranz. Gotthold Ephraim Lessing war ein Hauptvertreter mit Werken wie \"Nathan der Weise\", der religiöse Toleranz und rationales Denken förderte.",
    r1_q1: "Welche Eigenschaft charakterisiert die Aufklärung?",
    r1_c1: "Vernunft und Toleranz",
    r1_c2: "Gefühlsüberschwang",
    r1_c3: "Sehnsucht nach Natur",
    r1_c4: "Kritik durch Realismus",

    // Round 2: Sturm und Drang
    r2_title: "Sturm und Drang (1765-1785)",
    r2_text: "Sturm und Drang setzte Gefühl über Vernunft, feierte das Genie und rebellierte gegen strenge Regeln. Goethes \"Die Leiden des jungen Werthers\" und Schillers \"Die Räuber\" zeigen Leidenschaft, Naturverehrung und Individualismus.",
    r2_q1: "Was charakterisiert Sturm und Drang?",
    r2_c1: "Gefühl und Rebellion gegen Regeln",
    r2_c2: "Strenge Formregeln",
    r2_c3: "Vernunft über Gefühl",
    r2_c4: "Sachliche Beschreibung",

    // Round 3: Weimarer Klassik
    r3_title: "Weimarer Klassik (1786-1805)",
    r3_text: "Die Weimarer Klassik strebte nach Harmonie, Humanität und Schönheit. Goethe und Schiller lebten und arbeiteten zusammen in Weimar und schufen Meisterwerke wie \"Faust\" und \"Wilhelm Tell\".",
    r3_q1: "Was ist das Ideal der Klassik?",
    r3_c1: "Harmonie von Verstand und Gefühl",
    r3_c2: "Nur Gefühl zählt",
    r3_c3: "Nur Vernunft zählt",
    r3_c4: "Gesellschaftskritik",

    // Round 4: Romantik
    r4_title: "Romantik (1795-1848)",
    r4_text: "Die Romantik schätzte Sehnsucht, Natur, Fantasie und das Wunderbare. Autoren wie Eichendorff, Novalis und E.T.A. Hoffmann feierten Phantasie und das Übernatürliche. Die \"Blaue Blume\" wurde zum Symbol der romantischen Sehnsucht.",
    r4_q1: "Was symbolisiert die 'Blaue Blume'?",
    r4_c1: "Symbol der Sehnsucht in der Romantik",
    r4_c2: "Ein Gedicht von Goethe",
    r4_c3: "Eine Pflanze aus der Klassik",
    r4_c4: "Ein Stilmittel",

    // Round 5: Review
    r5_title: "Literatur & Epochen Review",
    r5_text: "Teste dein Wissen über deutsche Literaturepochen und ihre Charakteristiken!",
    r5_q1: "Wer schrieb \"Die Räuber\"?",
    r5_c1: "Friedrich Schiller",
    r5_c2: "Johann Wolfgang Goethe",
    r5_c3: "Gotthold Ephraim Lessing",
    r5_c4: "Joseph von Eichendorff",
    r5_q2: "\"Zurück zur Natur\" und Sehnsucht — welche Epoche?",
    r5_c2_1: "Romantik",
    r5_c2_2: "Aufklärung",
    r5_c2_3: "Weimarer Klassik",
    r5_c2_4: "Sturm und Drang",
  },
};

const SVG_R1 = (lang: string) => (
  <svg viewBox="0 0 240 160" className="w-full h-full">
    <defs>
      <linearGradient id="enlightenmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDD835" />
        <stop offset="100%" stopColor="#FFB300" />
      </linearGradient>
    </defs>
    {/* Background light */}
    <circle cx="120" cy="40" r="35" fill="url(#enlightenmentGrad)" opacity="0.8" />
    {/* Light rays */}
    <line x1="120" y1="10" x2="120" y2="5" stroke="#FFD54F" strokeWidth="2" />
    <line x1="155" y1="25" x2="160" y2="18" stroke="#FFD54F" strokeWidth="2" />
    <line x1="85" y1="25" x2="80" y2="18" stroke="#FFD54F" strokeWidth="2" />
    {/* Books */}
    <rect x="50" y="85" width="35" height="45" fill="#8B4513" rx="2" />
    <rect x="52" y="87" width="31" height="41" fill="#D2691E" />
    <line x1="52" y1="100" x2="83" y2="100" stroke="#8B4513" strokeWidth="0.5" />
    <rect x="155" y="85" width="35" height="45" fill="#654321" rx="2" />
    <rect x="157" y="87" width="31" height="41" fill="#A0522D" />
    <line x1="157" y1="100" x2="188" y2="100" stroke="#654321" strokeWidth="0.5" />
    {/* Quill pen */}
    <circle cx="120" cy="95" r="4" fill="#FFD700" />
    <path d="M 124 95 L 135 85 L 133 83 Z" fill="#8B4513" />
    {/* Scroll with text hint */}
    <rect x="80" y="130" width="80" height="20" fill="#FFF8DC" rx="2" />
    <text x="120" y="143" fontSize="8" textAnchor="middle" fill="#333">
      {lang === "de" ? "Vernunft & Toleranz" : "Reason & Tolerance"}
    </text>
  </svg>
);

const SVG_R2 = (lang: string) => (
  <svg viewBox="0 0 240 160" className="w-full h-full">
    <defs>
      <linearGradient id="stormGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7B68EE" />
        <stop offset="100%" stopColor="#4B0082" />
      </linearGradient>
    </defs>
    {/* Dark stormy sky */}
    <rect width="240" height="160" fill="url(#stormGrad)" />
    {/* Lightning bolt */}
    <path d="M 80 20 L 75 50 L 85 50 L 70 90 Z" fill="#FFE135" />
    {/* Thunder clouds */}
    <ellipse cx="40" cy="30" rx="30" ry="20" fill="#333" opacity="0.7" />
    <ellipse cx="65" cy="35" rx="25" ry="18" fill="#333" opacity="0.7" />
    {/* Wind lines */}
    <line x1="120" y1="70" x2="150" y2="70" stroke="#FFF" strokeWidth="2" opacity="0.6" />
    <line x1="140" y1="90" x2="165" y2="90" stroke="#FFF" strokeWidth="2" opacity="0.6" />
    {/* Book blowing in wind */}
    <rect x="170" y="85" width="30" height="35" fill="#8B4513" rx="2" />
    <rect x="172" y="87" width="26" height="31" fill="#D2691E" />
    {/* Heart symbol (emotion) */}
    <path d="M 120 110 Q 115 105 110 105 Q 105 105 105 110 Q 105 115 120 125 Q 135 115 135 110 Q 135 105 130 105 Q 125 105 120 110 Z" fill="#FF1493" />
    {/* Text hint */}
    <text x="120" y="150" fontSize="10" textAnchor="middle" fill="#FFF" fontWeight="bold">
      {lang === "de" ? "Gefühl & Rebellion" : "Emotion & Rebellion"}
    </text>
  </svg>
);

const SVG_R3 = (lang: string) => (
  <svg viewBox="0 0 240 160" className="w-full h-full">
    <defs>
      <linearGradient id="classicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>
    {/* Golden background */}
    <rect width="240" height="160" fill="url(#classicGrad)" opacity="0.3" />
    {/* Classical columns */}
    <rect x="40" y="50" width="15" height="80" fill="#F5DEB3" stroke="#8B7355" strokeWidth="1" />
    <rect x="185" y="50" width="15" height="80" fill="#F5DEB3" stroke="#8B7355" strokeWidth="1" />
    <rect x="35" y="45" width="170" height="12" fill="#D2B48C" stroke="#8B7355" strokeWidth="1" />
    {/* Scale of balance (harmony) */}
    <line x1="120" y1="40" x2="120" y2="55" stroke="#8B7355" strokeWidth="2" />
    <circle cx="100" cy="55" r="8" fill="#FFE4B5" stroke="#8B7355" strokeWidth="1" />
    <circle cx="140" cy="55" r="8" fill="#FFE4B5" stroke="#8B7355" strokeWidth="1" />
    <text x="100" y="60" fontSize="8" textAnchor="middle" fill="#333">V</text>
    <text x="140" y="60" fontSize="8" textAnchor="middle" fill="#333">G</text>
    {/* Books in center */}
    <rect x="105" y="95" width="30" height="40" fill="#8B4513" rx="2" />
    <rect x="107" y="97" width="26" height="36" fill="#D2691E" />
    {/* Text */}
    <text x="120" y="145" fontSize="9" textAnchor="middle" fill="#333" fontWeight="bold">
      {lang === "de" ? "Harmonie" : "Harmony"}
    </text>
  </svg>
);

const SVG_R4 = (lang: string) => (
  <svg viewBox="0 0 240 160" className="w-full h-full">
    <defs>
      <linearGradient id="romanticGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4169E1" />
        <stop offset="100%" stopColor="#8A2BE2" />
      </linearGradient>
    </defs>
    {/* Twilight sky */}
    <rect width="240" height="160" fill="url(#romanticGrad)" />
    {/* Moon */}
    <circle cx="180" cy="40" r="25" fill="#FFF" opacity="0.9" />
    {/* Stars */}
    <circle cx="50" cy="30" r="2" fill="#FFE135" />
    <circle cx="100" cy="25" r="2" fill="#FFE135" />
    <circle cx="200" cy="35" r="2" fill="#FFE135" />
    {/* Blue Flower (central) */}
    <circle cx="120" cy="95" r="8" fill="#4169E1" />
    <ellipse cx="110" cy="85" rx="6" ry="8" fill="#6495ED" />
    <ellipse cx="130" cy="85" rx="6" ry="8" fill="#6495ED" />
    <ellipse cx="105" cy="100" rx="6" ry="8" fill="#6495ED" />
    <ellipse cx="135" cy="100" rx="6" ry="8" fill="#6495ED" />
    {/* Glow around flower */}
    <circle cx="120" cy="95" r="15" fill="#4169E1" opacity="0.2" />
    {/* Misty forest silhouettes */}
    <path d="M 30 110 L 40 80 L 50 110 Z" fill="#1E3A5F" opacity="0.7" />
    <path d="M 190 120 L 200 85 L 210 120 Z" fill="#1E3A5F" opacity="0.7" />
    {/* Text */}
    <text x="120" y="140" fontSize="10" textAnchor="middle" fill="#FFF" fontWeight="bold">
      {lang === "de" ? "Blaue Blume" : "Blue Flower"}
    </text>
  </svg>
);

const SVG_R5 = (lang: string) => (
  <svg viewBox="0 0 240 160" className="w-full h-full">
    <defs>
      <linearGradient id="reviewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="50%" stopColor="#FFD93D" />
        <stop offset="100%" stopColor="#6BCB77" />
      </linearGradient>
    </defs>
    {/* Rainbow gradient background */}
    <rect width="240" height="160" fill="url(#reviewGrad)" opacity="0.3" />
    {/* Timeline circles for epochs */}
    <circle cx="40" cy="80" r="8" fill="#FDD835" stroke="#8B7355" strokeWidth="1" />
    <circle cx="85" cy="80" r="8" fill="#7B68EE" stroke="#8B7355" strokeWidth="1" />
    <circle cx="130" cy="80" r="8" fill="#D4AF37" stroke="#8B7355" strokeWidth="1" />
    <circle cx="175" cy="80" r="8" fill="#4169E1" stroke="#8B7355" strokeWidth="1" />
    {/* Connecting line */}
    <line x1="48" y1="80" x2="177" y2="80" stroke="#8B7355" strokeWidth="2" />
    {/* Epoch labels */}
    <text x="40" y="105" fontSize="7" textAnchor="middle" fill="#333" fontWeight="bold">
      {lang === "de" ? "Aufklär" : "Enlight"}
    </text>
    <text x="85" y="105" fontSize="7" textAnchor="middle" fill="#FFF" fontWeight="bold">
      S&D
    </text>
    <text x="130" y="105" fontSize="7" textAnchor="middle" fill="#333" fontWeight="bold">
      {lang === "de" ? "Klassik" : "Classic"}
    </text>
    <text x="175" y="105" fontSize="7" textAnchor="middle" fill="#FFF" fontWeight="bold">
      {lang === "de" ? "Roman" : "Roman"}
    </text>
    {/* Central quill */}
    <circle cx="120" cy="40" r="6" fill="#FFD700" />
    <path d="M 126 40 L 140 30 L 138 28 Z" fill="#8B4513" />
    {/* Text */}
    <text x="120" y="150" fontSize="9" textAnchor="middle" fill="#333" fontWeight="bold">
      {lang === "de" ? "Literaturgeschichte" : "Literary History"}
    </text>
  </svg>
);

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      questions: [
        {
          question: "r1_q1",
          choices: ["r1_c1", "r1_c2", "r1_c3", "r1_c4"],
          answer: "r1_c1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      questions: [
        {
          question: "r2_q1",
          choices: ["r2_c1", "r2_c2", "r2_c3", "r2_c4"],
          answer: "r2_c1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      questions: [
        {
          question: "r3_q1",
          choices: ["r3_c1", "r3_c2", "r3_c3", "r3_c4"],
          answer: "r3_c1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      questions: [
        {
          question: "r4_q1",
          choices: ["r4_c1", "r4_c2", "r4_c3", "r4_c4"],
          answer: "r4_c1",
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
          choices: ["r5_c1", "r5_c2", "r5_c3", "r5_c4"],
          answer: "r5_c1",
        },
        {
          question: "r5_q2",
          choices: ["r5_c2_1", "r5_c2_2", "r5_c2_3", "r5_c2_4"],
          answer: "r5_c2_1",
        },
      ],
    },
  ],
};

const LiteratureEpochK8Explorer = memo(function LiteratureEpochK8Explorer({
  color = "#8B4513",
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
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
});

export default LiteratureEpochK8Explorer;
