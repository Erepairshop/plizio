"use client";
// SentencePartExplorerK4 — Island i5: Satzglieder (Sentence Parts)
// Topics: 1) Subjekt & Prädikat 2) Objekte (Akk/Dat) 3) Adverbiale Bestimmungen 4) Umstellprobe 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="70" height="30" rx="4" fill="#BAE6FD" />
        <text x="-45" y="5" fontSize="12" fontWeight="bold" fill="#0284C7" textAnchor="middle">Subjekt</text>
        
        <text x="0" y="5" fontSize="20" fontWeight="bold" fill="#0284C7" textAnchor="middle">+</text>
        
        <rect x="10" y="-15" width="70" height="30" rx="4" fill="#7DD3FC" />
        <text x="45" y="5" fontSize="12" fontWeight="bold" fill="#0284C7" textAnchor="middle">Prädikat</text>
        
        <text x="0" y="40" fontSize="10" fill="#0369A1" textAnchor="middle">Der Kern eines jeden Satzes!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-15" fontSize="24" textAnchor="middle">🎁</text>
        <text x="-40" y="25" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">Akkusativ</text>
        <text x="-40" y="40" fontSize="10" fill="#9D174D" textAnchor="middle">(Wen/Was?)</text>
        
        <text x="40" y="-15" fontSize="24" textAnchor="middle">👦</text>
        <text x="40" y="25" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">Dativ</text>
        <text x="40" y="40" fontSize="10" fill="#9D174D" textAnchor="middle">(Wem?)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="0" fontSize="24" textAnchor="middle">⏰</text>
        <text x="-60" y="25" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">wann?</text>
        
        <text x="0" y="0" fontSize="24" textAnchor="middle">🌍</text>
        <text x="0" y="25" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">wo?</text>
        
        <text x="60" y="0" fontSize="24" textAnchor="middle">⚡</text>
        <text x="60" y="25" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">wie?</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="40" height="20" fill="#FCD34D" rx="2" />
        <rect x="-30" y="-20" width="40" height="20" fill="#F59E0B" rx="2" />
        <rect x="20" y="-20" width="40" height="20" fill="#FCD34D" rx="2" />
        
        <path d="M -60,5 C -60,20 40,20 40,5" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
        <text x="-10" y="35" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Umstellprobe</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad5_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad5_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🧩</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Satzglieder-Mix</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzglieder",

    // T1
    t1_title: "Subjekt & Prädikat",
    t1_text: "Satzglieder sind die Bausteine eines Satzes. Ein Satz braucht immer mindestens zwei Bausteine: Das Subjekt (Wer/Was?) und das Prädikat (Was tut das Subjekt?).",
    t1_b1: "Subjekt = Täter (z.B. Der Hund)",
    t1_b2: "Prädikat = Aktion (z.B. bellt)",
    t1_b3: "Das Prädikat (Verb) steht oft an Position 2.",
    t1_inst: "Wo ist das Subjekt? Markiere es im Satz!",
    t1_h1: "Frage dich: Wer liest das spannende Buch?",
    t1_h2: "Die Antwort lautet 'Der Lehrer'.",
    t1_w1: "Der", t1_w2: "Lehrer", t1_w3: "liest", t1_w4: "das", t1_w5: "Buch.",
    t1_q: "Welches Satzglied besteht immer aus einem Verb (Tunwort)?",
    t1_q_a: "Das Prädikat", t1_q_b: "Das Subjekt", t1_q_c: "Das Objekt", t1_q_d: "Das Adverb",

    // T2
    t2_title: "Die Objekte",
    t2_text: "Objekte sind Ergänzungen im Satz. Das Akkusativ-Objekt fragt 'Wen oder was?'. Das Dativ-Objekt fragt 'Wem?'. Oft gibt es beides in einem Satz!",
    t2_b1: "Akkusativ: Ich esse DEN APFEL.",
    t2_b2: "Dativ: Ich helfe DEM FREUND.",
    t2_b3: "Zusammen: Ich gebe DEM FREUND DEN APFEL.",
    t2_inst: "Akkusativ (Wen/Was) oder Dativ (Wem)? Sortiere die Objekte!",
    t2_h1: "'den Hund' und 'einen Ball' antworten auf Wen/Was (Akkusativ).",
    t2_h2: "'dem Mann' und 'der Frau' antworten auf Wem (Dativ).",
    t2_bucket_akk: "Akkusativ-Objekt",
    t2_bucket_dat: "Dativ-Objekt",
    t2_item_a1: "den Hund", t2_item_a2: "einen Ball", t2_item_a3: "das Auto",
    t2_item_d1: "dem Mann", t2_item_d2: "der Frau", t2_item_d3: "einem Kind",
    t2_q: "Wie fragst du nach dem Dativ-Objekt?",
    t2_q_a: "Wem?", t2_q_b: "Wen oder was?", t2_q_c: "Wessen?", t2_q_d: "Woher?",

    // T3
    t3_title: "Adverbiale Bestimmungen",
    t3_text: "Diese Satzglieder geben uns genaue Infos zu den Umständen: Wann (Zeit), Wo (Ort), Wie (Art und Weise) oder Warum (Grund) passiert etwas?",
    t3_b1: "Ort (Wo?): im Garten, nach Hause",
    t3_b2: "Zeit (Wann?): heute, um 8 Uhr",
    t3_b3: "Art (Wie?): schnell, gerne",
    t3_inst: "Welche Frage passt zu welcher Angabe? Verbinde sie!",
    t3_h1: "'heute' ist eine Zeit (Wann?).",
    t3_h2: "'im Garten' ist ein Ort (Wo?). 'schnell' ist die Art (Wie?).",
    t3_l1: "Wann?", t3_r1: "heute",
    t3_l2: "Wo?", t3_r2: "im Garten",
    t3_l3: "Wie?", t3_r3: "sehr schnell",
    t3_l4: "Warum?", t3_r4: "wegen dem Regen",
    t3_q: "Nach welcher Bestimmung fragt man mit 'Wann?'?",
    t3_q_a: "Zeit", t3_q_b: "Ort", t3_q_c: "Grund", t3_q_d: "Person",

    // T4
    t4_title: "Die Umstellprobe",
    t4_text: "Man kann die Bausteine eines Satzes verschieben. Das nennt man Umstellprobe. Wichtig: Das Prädikat (Verb) muss in einem Aussagesatz IMMER an Position 2 bleiben!",
    t4_b1: "Ich spiele heute im Garten.",
    t4_b2: "Heute spiele ich im Garten.",
    t4_b3: "Im Garten spiele ich heute.",
    t4_inst: "Bringe den Satz in eine neue, richtige Reihenfolge! Beginne mit 'Heute'.",
    t4_h1: "Wenn 'Heute' auf Position 1 steht, muss das Verb 'spiele' auf Position 2.",
    t4_h2: "Danach folgt das Subjekt 'ich', dann 'im Garten'.",
    t4_w1: "Heute", t4_w2: "spiele", t4_w3: "ich", t4_w4: "im", t4_w5: "Garten.",
    t4_q: "Welches Satzglied bleibt bei der Umstellprobe im Aussagesatz fest auf Position 2?",
    t4_q_a: "Das Prädikat (Verb)", t4_q_b: "Das Subjekt", t4_q_c: "Die Zeitangabe", t4_q_d: "Das Objekt",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Lass uns prüfen, ob du die Satzglieder erkennst. Subjekt, Prädikat, Objekt oder adverbiale Bestimmung?",
    t5_b1: "Erkenne den Kern (S+P)",
    t5_b2: "Finde die Objekte",
    t5_b3: "Beachte die Umstände (Wann/Wo/Wie)",
    t5_inst: "Welches Satzglied fehlt in der Lücke? 'Die Kinder spielen ___ im Park.'",
    t5_h1: "Wir suchen eine adverbiale Bestimmung der Zeit (Wann?).",
    t5_h2: "'heute' passt perfekt.",
    t5_gap_sentence: "Die Kinder spielen {gap} im Park.",
    t5_c1: "heute", t5_c2: "der Ball", t5_c3: "lachen",
    t5_q: "Welches Satzglied ist 'auf dem Tisch' im Satz: 'Das Buch liegt auf dem Tisch.'?",
    t5_q_a: "Adverbiale Bestimmung (Ort)", t5_q_b: "Subjekt", t5_q_c: "Akkusativ-Objekt", t5_q_d: "Prädikat",
  },
  en: {
    explorer_title: "Sentence Parts",
    t1_inst: "Where is the subject? Highlight it in the sentence!",
    t1_h1: "Ask yourself: Who is reading the exciting book?",
    t1_h2: "The answer is 'Der Lehrer' (The teacher).",
    t2_inst: "Accusative (Whom/What) or Dative (To whom)? Sort the objects!",
    t2_h1: "'den Hund' and 'einen Ball' answer Whom/What (Accusative).",
    t2_h2: "'dem Mann' and 'der Frau' answer To whom (Dative).",
    t2_bucket_akk: "Accusative Object",
    t2_bucket_dat: "Dative Object",
    t3_inst: "Which question matches which detail? Connect them!",
    t3_h1: "'heute' (today) is a time (When?).",
    t3_h2: "'im Garten' is a place (Where?). 'schnell' is a manner (How?).",
    t4_inst: "Put the sentence in a new, correct order! Start with 'Heute'.",
    t4_h1: "If 'Heute' is in position 1, the verb 'spiele' must be in position 2.",
    t4_h2: "Followed by the subject 'ich', then 'im Garten'.",
    t5_inst: "Which sentence part is missing? 'Die Kinder spielen ___ im Park.'",
    t5_h1: "We are looking for an adverbial of time (When?).",
    t5_h2: "'heute' (today) fits perfectly.",
  },
  hu: {
    explorer_title: "Mondatrészek",
    t1_inst: "Hol van az alany? Jelöld ki a mondatban!",
    t1_h1: "Kérdezd meg magadtól: Ki olvassa az izgalmas könyvet?",
    t1_h2: "A válasz: 'Der Lehrer' (A tanár).",
    t2_inst: "Tárgyeset (Kit/Mit) vagy Részeseset (Kinek)? Válogasd szét a tárgyakat!",
    t2_h1: "A 'den Hund' és 'einen Ball' a Kit/Mit kérdésre válaszol (Akkusativ).",
    t2_h2: "A 'dem Mann' és 'der Frau' a Kinek kérdésre (Dativ).",
    t2_bucket_akk: "Tárgyeset (Akkusativ)",
    t2_bucket_dat: "Részeseset (Dativ)",
    t3_inst: "Melyik kérdés melyik határozóhoz illik? Kösd össze őket!",
    t3_h1: "A 'heute' (ma) egy időhatározó (Mikor?).",
    t3_h2: "Az 'im Garten' helyhatározó (Hol?). A 'schnell' módhatározó (Hogyan?).",
    t4_inst: "Tedd a mondatot egy új, helyes sorrendbe! Kezdd a 'Heute' szóval.",
    t4_h1: "Ha a 'Heute' az 1. helyen van, a 'spiele' igének a 2. helyre kell kerülnie.",
    t4_h2: "Utána jön az 'ich' alany, majd az 'im Garten'.",
    t5_inst: "Melyik mondatrész hiányzik? 'Die Kinder spielen ___ im Park.'",
    t5_h1: "Egy időhatározót keresünk (Mikor?).",
    t5_h2: "A 'heute' (ma) tökéletesen illik ide.",
  },
  ro: {
    explorer_title: "Părți de propoziție",
    t1_inst: "Unde este subiectul? Marchează-l în propoziție!",
    t1_h1: "Întreabă-te: Cine citește cartea interesantă?",
    t1_h2: "Răspunsul este 'Der Lehrer' (Profesorul).",
    t2_inst: "Acuzativ (Pe cine/Ce) sau Dativ (Cui)? Sortează obiectele!",
    t2_h1: "'den Hund' și 'einen Ball' răspund la Pe cine/Ce (Acuzativ).",
    t2_h2: "'dem Mann' și 'der Frau' răspund la Cui (Dativ).",
    t2_bucket_akk: "Obiect în Acuzativ",
    t2_bucket_dat: "Obiect în Dativ",
    t3_inst: "Ce întrebare se potrivește cărui detaliu? Leagă-le!",
    t3_h1: "'heute' (astăzi) este un timp (Când?).",
    t3_h2: "'im Garten' este un loc (Unde?). 'schnell' este un mod (Cum?).",
    t4_inst: "Pune propoziția într-o ordine nouă și corectă! Începe cu 'Heute'.",
    t4_h1: "Dacă 'Heute' este pe prima poziție, verbul 'spiele' trebuie să fie pe a doua.",
    t4_h2: "Apoi subiectul 'ich', urmat de 'im Garten'.",
    t5_inst: "Ce parte de propoziție lipsește? 'Die Kinder spielen ___ im Park.'",
    t5_h1: "Căutăm un circumstanțial de timp (Când?).",
    t5_h2: "'heute' (astăzi) se potrivește perfect.",
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
      type: "highlight-text",
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5"], // Der Lehrer liest das Buch.
      correctIndices: [0, 1], // Der Lehrer
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
      type: "drag-to-bucket",
      buckets: [
        { id: "akk", label: "t2_bucket_akk" },
        { id: "dat", label: "t2_bucket_dat" },
      ],
      items: [
        { text: "t2_item_a1", bucketId: "akk" },
        { text: "t2_item_d1", bucketId: "dat" },
        { text: "t2_item_a2", bucketId: "akk" },
        { text: "t2_item_d2", bucketId: "dat" },
        { text: "t2_item_a3", bucketId: "akk" },
        { text: "t2_item_d3", bucketId: "dat" },
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
        { left: "t3_l1", right: "t3_r1" }, // Wann? -> heute
        { left: "t3_l2", right: "t3_r2" }, // Wo? -> im Garten
        { left: "t3_l3", right: "t3_r3" }, // Wie? -> sehr schnell
        { left: "t3_l4", right: "t3_r4" }, // Warum? -> wegen dem Regen
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"], // Heute spiele ich im Garten.
      correctOrder: [0, 1, 2, 3, 4],
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
      type: "gap-fill",
      sentence: "t5_gap_sentence",
      choices: ["t5_c1", "t5_c2", "t5_c3"], // heute, der Ball, lachen
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
  icon: "🧱",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentencePartExplorerK4 = memo(function SentencePartExplorerK4({
  color = "#0284C7",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone?: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_sentencepart" color={color} lang={lang} onDone={onDone} />;
});

export default SentencePartExplorerK4;
