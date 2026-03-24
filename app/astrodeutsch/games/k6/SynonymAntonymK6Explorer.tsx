"use client";
// SynonymAntonymK6Explorer — Island i4: Synonyme, Antonyme & Stilebenen (K6)
// Topics: 1) Synonyme 2) Antonyme 3) Wortfelder (sagen) 4) Stilebenen 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="70" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="-45" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">schnell</text>
        <text x="0" y="5" fontSize="18" fontWeight="black" fill="#0EA5E9" textAnchor="middle">≈</text>
        <rect x="10" y="-20" width="70" height="40" rx="8" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="45" y="5" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">rasant</text>
        <text x="0" y="40" fontSize="10" fill="#0284C7" textAnchor="middle">Synonyme (ähnlich)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-50" cy="0" r="25" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
        <text x="-50" y="5" fontSize="10" fontWeight="bold" fill="#9F1239" textAnchor="middle">HELL</text>
        <path d="M -20,0 L 20,0" stroke="#F43F5E" strokeWidth="3" markerEnd="url(#arrow)" />
        <circle cx="50" cy="0" r="25" fill="#475569" stroke="#1E293B" strokeWidth="2" />
        <text x="50" y="5" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">DUNKEL</text>
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#9F1239" textAnchor="middle">Antonyme (Gegenteil)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="black" fill="#0D9488" textAnchor="middle">SAGEN</text>
        <path d="M 0,-15 L -40,10 M 0,-15 L 0,10 M 0,-15 L 40,10" stroke="#5EEAD4" strokeWidth="2" />
        <text x="-50" y="25" fontSize="10" fill="#0F766E" textAnchor="middle">flüstern</text>
        <text x="0" y="25" fontSize="10" fill="#0F766E" textAnchor="middle">rufen</text>
        <text x="50" y="25" fontSize="10" fill="#0F766E" textAnchor="middle">behaupten</text>
        <text x="0" y="50" fontSize="12" fontWeight="bold" fill="#14B8A6" textAnchor="middle">Wortfelder</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Wortschatz-Profi K6",
    // T1
    t1_title: "Synonyme (Bedeutungsgleichheit)",
    t1_text: "Synonyme sind Wörter, die fast dasselbe bedeuten. Sie helfen uns, Texte abwechslungsreich zu schreiben, ohne uns ständig zu wiederholen.",
    t1_b1: "Beispiel: Auto ➔ Fahrzeug, PKW, Wagen",
    t1_b2: "Beispiel: groß ➔ riesig, gewaltig, enorm",
    t1_b3: "Achtung: Nicht jedes Wort passt in jeden Kontext!",
    t1_inst: "Verbinde die Wörter mit der gleichen Bedeutung!",
    t1_h1: "Suche Wörter, die man gegeneinander austauschen könnte.",
    t1_h2: "'sprechen' ist fast dasselbe wie 'reden'.",
    t1_l1: "beginnen", t1_r1: "anfangen",
    t1_l2: "betrachten", t1_r2: "ansehen",
    t1_l3: "klug", t1_r3: "intelligent",
    t1_l4: "sprechen", t1_r4: "reden",
    t1_q: "Wie nennt man Wörter mit gleicher oder ähnlicher Bedeutung?",
    t1_q_a: "Synonyme", t1_q_b: "Antonyme", t1_q_c: "Homonyme", t1_q_d: "Akronyme",

    // T2
    t2_title: "Antonyme (Gegensätze)",
    t2_text: "Antonyme sind Wörter mit der gegenteiligen Bedeutung. Wir nutzen sie oft für Vergleiche oder um Kontraste zu verdeutlichen.",
    t2_b1: "Beispiel: heiß ➔ kalt",
    t2_b2: "Beispiel: Sieg ➔ Niederlage",
    t2_b3: "Beispiel: finden ➔ verlieren",
    t2_inst: "Finde das Gegenteil! Verbinde die Paare.",
    t2_h1: "Was ist das Gegenteil von 'hell'?",
    t2_h2: "Hell und dunkel sind Gegensätze.",
    t2_l1: "hell", t2_r1: "dunkel",
    t2_l2: "teuer", t2_r2: "billig",
    t2_l3: "mutig", t2_r3: "feige",
    t2_l4: "fröhlich", t2_r4: "traurig",
    t2_q: "Was ist das Antonym von 'stark'?",
    t2_q_a: "schwach", t2_q_b: "kräftig", t2_q_c: "groß", t2_q_d: "hart",

    // T3
    t3_title: "Wortfelder (Präzise Sprache)",
    t3_text: "Ein Wortfeld umfasst Wörter einer Wortart, die sachlich eng verwandt sind. Anstatt immer nur 'sagen' oder 'gehen' zu nutzen, wählen wir präzisere Verben.",
    t3_b1: "Wortfeld sagen: flüstern, murmeln, schreien, antworten",
    t3_b2: "Wortfeld gehen: schleichen, rennen, humpeln, spazieren",
    t3_b3: "Präzise Verben machen Geschichten lebendig!",
    t3_inst: "Welches präzise Verb passt zur Situation? Verbinde!",
    t3_h1: "Wenn man sehr leise spricht, dann 'flüstert' man.",
    t3_h2: "Wenn man sich ganz leise bewegt, dann 'schleicht' man.",
    t3_l1: "leise sprechen", t3_r1: "flüstern",
    t3_l2: "laut sprechen", t3_r2: "schreien",
    t3_l3: "leise bewegen", t3_r3: "schleichen",
    t3_l4: "schnell bewegen", t3_r4: "rennen",
    t3_q: "Welches Wort gehört NICHT zum Wortfeld 'gehen'?",
    t3_q_a: "singen", t3_q_b: "hüpfen", t3_q_c: "schleichen", t3_q_d: "wandern",

    // T4
    t4_title: "Stilebenen (Wie wir sprechen)",
    t4_text: "Wir passen unsere Sprache der Situation an. Man unterscheidet zwischen umgangssprachlich (mit Freunden), neutral (Schule/Alltag) und gehoben (festlich/Literatur).",
    t4_b1: "Umgangssprachlich: pennen, Kohle",
    t4_b2: "Neutral: schlafen, Geld",
    t4_b3: "Gehoben: ruhen, Vermögen",
    t4_inst: "In welche Stilebene gehört das Wort? Sortiere!",
    t4_h1: "'glotzen' ist umgangssprachlich.",
    t4_h2: "'sehen' ist neutral, 'erblicken' ist gehoben.",
    t4_bucket_umg: "Umgangssprachlich",
    t4_bucket_neu: "Neutral",
    t4_bucket_geh: "Gehoben",
    t4_item_u1: "pennen", t4_item_u2: "glotzen",
    t4_item_n1: "schlafen", t4_item_n2: "sehen",
    t4_item_g1: "ruhen", t4_item_g2: "erblicken",
    t4_q: "Welche Stilebene nutzt man normalerweise in einer offiziellen E-Mail an den Schulleiter?",
    t4_q_a: "Neutral oder gehoben", t4_q_b: "Umgangssprachlich", t4_q_c: "Jugendsprache", t4_q_d: "Dialekt",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Teste dein Wissen über die Vielfalt der deutschen Sprache. Kannst du Sätze durch bessere Wörter ersetzen?",
    t5_b1: "Synonyme vermeiden Wiederholungen.",
    t5_b2: "Antonyme zeigen Kontraste.",
    t5_b3: "Stilebenen beachten.",
    t5_inst: "Welches Synonym passt am besten in die Lücke? 'Das Wetter war ___.'",
    t5_h1: "Wir suchen ein schöneres Wort für 'gut' oder 'schön'.",
    t5_h2: "'herrlich' klingt viel besser.",
    t5_gap_sentence: "Das Wetter im Urlaub war absolut {gap}.",
    t5_c1: "herrlich", t5_c2: "okay", t5_c3: "da",
    t5_q: "Welches dieser Paare sind Antonyme?",
    t5_q_a: "Anfang / Ende", t5_q_b: "Haus / Gebäude", t5_q_c: "laufen / rennen", t5_q_d: "klug / schlau",
  },
  en: {
    explorer_title: "Vocabulary Pro",
    t1_inst: "Connect words with the same meaning!",
    t2_inst: "Find the opposite! Connect the pairs.",
    t3_inst: "Which precise verb fits the situation? Match them!",
    t4_inst: "Into which style level does the word belong? Sort!",
    t5_inst: "Which synonym fits best in the gap?",
  },
  hu: {
    explorer_title: "Szókincs-profiknak",
    t1_inst: "Kösd össze az azonos jelentésű szavakat!",
    t1_h2: "A 'sprechen' szinte ugyanaz, mint a 'reden'.",
    t2_inst: "Keresd meg az ellentéteket! Párosítsd össze őket.",
    t3_inst: "Melyik pontosabb ige illik a szituációhoz? Kösd össze!",
    t4_inst: "Melyik stílusrétegbe tartozik a szó? Válogasd szét!",
    t4_bucket_umg: "Bizalmas (Szleng)",
    t4_bucket_neu: "Semleges",
    t4_bucket_geh: "Választékos",
    t5_inst: "Melyik szinonima illik legjobban az űrbe?",
  },
  ro: {
    explorer_title: "Expert Vocabular",
    t1_inst: "Conectează cuvintele cu același înțeles!",
    t2_inst: "Găsește antonimul! Conectează perechile.",
    t3_inst: "Care verb precis se potrivește situației? Leagă-le!",
    t4_inst: "Cărui nivel stilistic îi aparține cuvântul? Sortează!",
    t5_inst: "Care sinonim se potrivește cel mai bine în spațiu?",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
        { left: "t1_l4", right: "t1_r4" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
        { left: "t2_l4", right: "t2_r4" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
        { left: "t3_l4", right: "t3_r4" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "umg", label: "t4_bucket_umg" },
        { id: "neu", label: "t4_bucket_neu" },
        { id: "geh", label: "t4_bucket_geh" },
      ],
      items: [
        { text: "t4_item_u1", bucketId: "umg" },
        { text: "t4_item_n1", bucketId: "neu" },
        { text: "t4_item_g1", bucketId: "geh" },
        { text: "t4_item_u2", bucketId: "umg" },
        { text: "t4_item_n2", bucketId: "neu" },
        { text: "t4_item_g2", bucketId: "geh" },
      ],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c1", "t5_c2", "t5_c3"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📚",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SynonymAntonymK6Explorer = memo(function SynonymAntonymK6Explorer({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="deutsch_k6_synonym_antonym" color={color} lang={lang} onDone={onDone} />;
});

export default SynonymAntonymK6Explorer;
