"use client";
// VerbExplorerK4 — Island i7: Verben & Futur (Verbs, Future & Passive)
// Topics: 1) Trennbare Verben 2) Das Futur 3) Das Passiv 4) Wörtliche Rede 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="50" height="30" rx="4" fill="#FECACA" />
        <text x="-55" y="0" fontSize="14" fontWeight="bold" fill="#B91C1C" textAnchor="middle">auf</text>
        <text x="-15" y="0" fontSize="18" fontWeight="bold" fill="#E11D48" textAnchor="middle">+</text>
        <rect x="0" y="-20" width="80" height="30" rx="4" fill="#FCA5A5" />
        <text x="40" y="0" fontSize="14" fontWeight="bold" fill="#991B1B" textAnchor="middle">stehen</text>
        <path d="M -55,15 Q 0,40 40,15" fill="none" stroke="#E11D48" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
        <text x="0" y="45" fontSize="12" fill="#9F1239" textAnchor="middle">Ich stehe ... auf.</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="30" textAnchor="middle">🚀</text>
        <text x="0" y="15" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Zukunft (Futur)</text>
        <text x="0" y="35" fontSize="12" fill="#0284C7" textAnchor="middle">werden + Infinitiv</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="24" textAnchor="middle">🏠</text>
        <path d="M -20,-15 L 20,-15" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="50" y="-10" fontSize="24" textAnchor="middle">🏗️</text>
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#15803D" textAnchor="middle">Das Haus WIRD GEBAUT.</text>
        <text x="0" y="45" fontSize="10" fill="#166534" textAnchor="middle">(Wer es baut, ist unwichtig)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">Er sagt:</text>
        <text x="0" y="20" fontSize="20" fontWeight="black" fill="#D97706" textAnchor="middle">„Hallo!“</text>
        <path d="M -35,25 L -35,35 L -25,35" fill="none" stroke="#F59E0B" strokeWidth="2" />
        <path d="M 35,-5 L 35,-15 L 25,-15" fill="none" stroke="#F59E0B" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad7_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad7_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="30" textAnchor="middle">⏳</text>
        <text x="40" y="0" fontSize="30" textAnchor="middle">🛠️</text>
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Verben-Quiz</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verben & Futur",

    // T1
    t1_title: "Trennbare Verben",
    t1_text: "Erinnerung: Bei trennbaren Verben (wie aufstehen, ankommen) steht das konjugierte Verb an Position 2 und das Präfix wandert ganz ans Ende des Satzes.",
    t1_b1: "auf + stehen = aufstehen",
    t1_b2: "an + kommen = ankommen",
    t1_b3: "Satzklammer: Ich KOMME heute AN.",
    t1_inst: "Welches Präfix gehört zu welchem Verb? Verbinde sie!",
    t1_h1: "Denk an Alltagswörter: auf-stehen, ein-kaufen.",
    t1_h2: "an-kommen und fern-sehen gehören auch zusammen.",
    t1_l1: "auf-", t1_r1: "stehen",
    t1_l2: "ein-", t1_r2: "kaufen",
    t1_l3: "an-", t1_r3: "kommen",
    t1_l4: "fern-", t1_r4: "sehen",
    t1_q: "Wo steht das Präfix (z.B. 'auf') in einem normalen Hauptsatz?",
    t1_q_a: "Ganz am Ende", t1_q_b: "Direkt nach dem Verb", t1_q_c: "Ganz am Anfang", t1_q_d: "Vor dem Subjekt",

    // T2
    t2_title: "Das Futur (Zukunft)",
    t2_text: "Um über die Zukunft zu sprechen, benutzen wir das Futur. Wir bilden es mit dem Hilfsverb 'werden' (an Position 2) und dem Infinitiv (Grundform) am Satzende.",
    t2_b1: "werden + Infinitiv",
    t2_b2: "Beispiel: Ich WERDE morgen SPIELEN.",
    t2_b3: "werden wird konjugiert (ich werde, du wirst, er wird).",
    t2_inst: "Bringe den Satz im Futur in die richtige Reihenfolge!",
    t2_h1: "Das Subjekt 'Ich' und das Hilfsverb 'werde' stehen am Anfang.",
    t2_h2: "Der Infinitiv 'spielen.' muss ganz ans Ende.",
    t2_w1: "Ich", t2_w2: "werde", t2_w3: "morgen", t2_w4: "spielen.",
    t2_q: "Welches Hilfsverb benutzt man für das Futur (Zukunft)?",
    t2_q_a: "werden", t2_q_b: "haben", t2_q_c: "sein", t2_q_d: "können",

    // T3
    t3_title: "Das Passiv",
    t3_text: "Das Passiv benutzen wir, wenn die Handlung wichtig ist, nicht wer sie macht. Wir bilden es mit 'werden' und dem Partizip II (ge...t).",
    t3_b1: "Aktiv: Der Mann repariert das Auto.",
    t3_b2: "Passiv: Das Auto WIRD REPARIERT.",
    t3_b3: "werden (Position 2) + Partizip II (Satzende).",
    t3_inst: "Welches Hilfsverb fehlt im Passivsatz? 'Das Haus ___ gebaut.'",
    t3_h1: "Das Haus ist 'es' (3. Person Singular).",
    t3_h2: "Die Form von werden für 'es' ist 'wird'.",
    t3_gap_sentence: "Das Haus {gap} gebaut.",
    t3_c1: "wird", t3_c2: "werden", t3_c3: "werde",
    t3_q: "Aus welchen zwei Teilen besteht das Passiv?",
    t3_q_a: "werden + Partizip II", t3_q_b: "haben + Infinitiv", t3_q_c: "sein + Partizip II", t3_q_d: "werden + Infinitiv",

    // T4
    t4_title: "Die wörtliche Rede",
    t4_text: "Wenn wir aufschreiben, was jemand genau sagt, benutzen wir die wörtliche Rede. Wichtig sind der Doppelpunkt und die Anführungszeichen („ unten, “ oben).",
    t4_b1: "Begleitsatz vorne: Er sagt: „Hallo!“",
    t4_b2: "Satzzeichen der Rede (, ? !) stehen VOR dem Schlusszeichen (“).",
    t4_b3: "Das erste Wort der Rede wird großgeschrieben.",
    t4_inst: "Markiere die gesprochenen Worte (die direkte Rede) im Satz!",
    t4_h1: "Die wörtliche Rede steht immer zwischen den Anführungszeichen („ ... “).",
    t4_h2: "Markiere alles von „Ich bis gleich.“",
    t4_w1: "Er", t4_w2: "sagt:", t4_w3: "„Ich", t4_w4: "komme", t4_w5: "gleich.“",
    t4_q: "Wo stehen die Anführungszeichen am Anfang der Rede im Deutschen?",
    t4_q_a: "Unten („)", t4_q_b: "Oben (“)", t4_q_c: "In der Mitte", t4_q_d: "Es gibt keine",

    // T5
    t5_title: "Futur oder Passiv?",
    t5_text: "Beide Formen benutzen das Wort 'werden'. Wie unterscheiden sie sich? Futur hat am Ende einen Infinitiv (z.B. spielen). Passiv hat am Ende ein Partizip II (z.B. gespielt).",
    t5_b1: "Futur: Ich werde SPIELEN. (Zukunft)",
    t5_b2: "Passiv: Das Spiel wird GESPIELT. (Handlung)",
    t5_b3: "Achte auf das Wort am Ende!",
    t5_inst: "Ist es Futur (Zukunft) oder Passiv? Sortiere die Sätze!",
    t5_h1: "Endet der Satz auf -en (Grundform)? Dann ist es Futur.",
    t5_h2: "Endet der Satz auf ge- (Partizip)? Dann ist es Passiv.",
    t5_bucket_fut: "Futur (Zukunft)",
    t5_bucket_pas: "Passiv (Handlung)",
    t5_item_f1: "Er wird kommen", t5_item_f2: "Ich werde lesen",
    t5_item_p1: "Es wird gemacht", t5_item_p2: "Das Auto wird geputzt",
    t5_q: "Welcher Satz steht im Futur?",
    t5_q_a: "Wir werden singen.", t5_q_b: "Das Lied wird gesungen.", t5_q_c: "Wir haben gesungen.", t5_q_d: "Wir sangen.",
  },
  en: {
    explorer_title: "Verbs & Future Tense",
    t1_inst: "Which prefix belongs to which verb? Match them!",
    t1_h1: "Think of everyday words: auf-stehen, ein-kaufen.",
    t1_h2: "an-kommen and fern-sehen also go together.",
    t2_inst: "Put the sentence in the Future tense in the correct order!",
    t2_h1: "The subject 'Ich' and auxiliary 'werde' are at the beginning.",
    t2_h2: "The infinitive 'spielen.' must go to the very end.",
    t3_inst: "Which auxiliary verb is missing in the passive sentence?",
    t3_h1: "Das Haus is 'es' (3rd person singular).",
    t3_h2: "The form of werden for 'es' is 'wird'.",
    t4_inst: "Highlight the spoken words (the direct speech) in the sentence!",
    t4_h1: "Direct speech is always between the quotation marks („ ... “).",
    t4_h2: "Highlight everything from „Ich to gleich.“",
    t5_inst: "Is it Future tense or Passive voice? Sort the sentences!",
    t5_h1: "Does the sentence end with -en (base form)? Then it's Future.",
    t5_h2: "Does the sentence end with ge- (participle)? Then it's Passive.",
    t5_bucket_fut: "Futur",
    t5_bucket_pas: "Passiv",
  },
  hu: {
    explorer_title: "Igék és Jövő idő",
    t1_inst: "Melyik igekötő melyik igéhez tartozik? Kösd össze őket!",
    t1_h1: "Gondolj mindennapi szavakra: auf-stehen, ein-kaufen.",
    t1_h2: "Az an-kommen és a fern-sehen is összetartoznak.",
    t2_inst: "Tedd a jövő idejű mondatot a helyes sorrendbe!",
    t2_h1: "Az alany 'Ich' és a segédige 'werde' áll az elején.",
    t2_h2: "A főnévi igenév 'spielen.' a mondat legvégére kerül.",
    t3_inst: "Melyik segédige hiányzik a szenvedő (passzív) mondatból?",
    t3_h1: "A 'Das Haus' az 'es' (E/3).",
    t3_h2: "A 'werden' alakja E/3-ban: 'wird'.",
    t4_inst: "Jelöld ki az elhangzott szavakat (az egyenes beszédet) a mondatban!",
    t4_h1: "Az egyenes beszéd mindig az idézőjelek („ ... “) között van.",
    t4_h2: "Jelölj ki mindent a „Ich -től a gleich.“-ig.",
    t5_inst: "Ez Jövő idő (Futur) vagy Szenvedő szerkezet (Passzív)? Válogasd szét!",
    t5_h1: "A mondat -en-re (főnévi igenév) végződik? Akkor Futur.",
    t5_h2: "A mondat ge-vel (Partizip) végződik? Akkor Passiv.",
    t5_bucket_fut: "Jövő idő (Futur)",
    t5_bucket_pas: "Szenvedő (Passzív)",
  },
  ro: {
    explorer_title: "Verbe și Timpul Viitor",
    t1_inst: "Care prefix aparține cărui verb? Leagă-le!",
    t1_h1: "Gândește-te la cuvinte de zi cu zi: auf-stehen, ein-kaufen.",
    t1_h2: "an-kommen și fern-sehen merg de asemenea împreună.",
    t2_inst: "Așază propoziția la Viitor în ordinea corectă!",
    t2_h1: "Subiectul 'Ich' și auxiliarul 'werde' stau la început.",
    t2_h2: "Infinitivul 'spielen.' trebuie să fie la final.",
    t3_inst: "Ce verb auxiliar lipsește în propoziția pasivă?",
    t3_h1: "'Das Haus' este 'es' (persoana a 3-a singular).",
    t3_h2: "Forma lui werden pentru 'es' este 'wird'.",
    t4_inst: "Marchează cuvintele rostite (vorbirea directă) în propoziție!",
    t4_h1: "Vorbirea directă stă mereu între ghilimele („ ... “).",
    t4_h2: "Marchează totul de la „Ich până la gleich.“",
    t5_inst: "Este Viitor (Futur) sau Pasiv (Passiv)? Sortează propozițiile!",
    t5_h1: "Propoziția se termină cu -en (infinitiv)? Atunci este Futur.",
    t5_h2: "Propoziția se termină cu ge- (participiu)? Atunci este Passiv.",
    t5_bucket_fut: "Viitor (Futur)",
    t5_bucket_pas: "Pasiv (Passiv)",
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
        { left: "t1_l1", right: "t1_r1" }, // auf-stehen
        { left: "t1_l2", right: "t1_r2" }, // ein-kaufen
        { left: "t1_l3", right: "t1_r3" }, // an-kommen
        { left: "t1_l4", right: "t1_r4" }, // fern-sehen
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"], // Ich werde morgen spielen.
      correctOrder: [0, 1, 2, 3],
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // wird, werden, werde
      correctIndex: 0,
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"], // Er sagt: „Ich komme gleich.“
      correctIndices: [2, 3, 4], // „Ich komme gleich.“
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "fut", label: "t5_bucket_fut" },
        { id: "pas", label: "t5_bucket_pas" },
      ],
      items: [
        { text: "t5_item_f1", bucketId: "fut" },
        { text: "t5_item_p1", bucketId: "pas" },
        { text: "t5_item_f2", bucketId: "fut" },
        { text: "t5_item_p2", bucketId: "pas" },
      ],
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
  icon: "🚀",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VerbExplorerK4 = memo(function VerbExplorerK4({
  color = "#E11D48",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_verb" color={color} lang={lang} onDone={onDone} />;
});

export default VerbExplorerK4;
