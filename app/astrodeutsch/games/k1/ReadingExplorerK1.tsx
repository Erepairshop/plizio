"use client";
// ReadingExplorerK1 — Island i8: Lesen verstehen (Reading Basics)
// Topics: 1) Missing Letters  2) True or False (Richtig/Falsch)  3) Sentence Completion

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="readGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#readGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="5" fontSize="28" fontWeight="bold" fill="#7C3AED" textAnchor="middle" letterSpacing="2">
          Sch<tspan fill="#EF4444">_</tspan>le
        </text>
        <g transform="translate(0, 30)">
          <circle cx="0" cy="0" r="12" fill="#FDE047" />
          <text x="0" y="5" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">u</text>
          <path d="M 0,-15 L 0,-25" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" />
        </g>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 60)">
        <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">"Der Apfel ist rot."</text>
        
        <g transform="translate(-40, 20)">
          <text x="0" y="0" fontSize="24" textAnchor="middle">🍎</text>
          <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#15803D" textAnchor="middle">Richtig</text>
        </g>
        <g transform="translate(40, 20)">
          <text x="0" y="0" fontSize="24" textAnchor="middle">🫐</text>
          <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#DC2626" textAnchor="middle">Falsch</text>
        </g>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="readGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#readGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="5" fontSize="18" fontWeight="bold" fill="#0369A1" textAnchor="middle">Ich lese</text>
        <rect x="0" y="-12" width="50" height="20" fill="white" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" rx="4" />
        <text x="25" y="3" fontSize="14" fill="#0284C7" textAnchor="middle">?</text>
        <text x="70" y="5" fontSize="18" fontWeight="bold" fill="#0369A1" textAnchor="middle">.</text>
        <text x="0" y="40" fontSize="24" textAnchor="middle">📖</text>
      </g>
    </svg>
  );
});

// ─── LABELS (4 languages) ────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Lesen verstehen",

    // Topic 1
    t1_title: "Wörter lesen",
    t1_text: "Manchmal fehlen Buchstaben in einem Wort. Wenn wir das Wort lesen, wissen wir sofort, welcher Vokal (a, e, i, o, u) fehlt!",
    t1_b1: "Sch_le -> u (die Schule)",
    t1_b2: "K_nd -> i (das Kind)",
    t1_b3: "B_ch -> u (das Buch)",
    t1_inst: "Welcher Buchstabe fehlt? Verbinde die Paare!",
    t1_h1: "Lies das Wort laut vor.",
    t1_h2: "Sch_le braucht ein 'u'. K_nd braucht ein 'i'.",
    t1_l1: "Sch__le 🏫", t1_r1: "u",
    t1_l2: "K__nd 🧒", t1_r2: "i",
    t1_l3: "B__ch 📖", t1_r3: "u",
    t1_q: "Welcher Buchstabe fehlt im Wort 'H_us' (Haus)?",
    t1_q_a: "a", t1_q_b: "e", t1_q_c: "i", t1_q_d: "o",

    // Topic 2
    t2_title: "Richtig oder Falsch?",
    t2_text: "Lies den Satz: 'Der Apfel ist rot.' Stimmt das? Ja, das ist richtig! Was ist mit: 'Der Apfel ist blau'? Nein, das ist falsch!",
    t2_b1: "Richtig = es stimmt ✅",
    t2_b2: "Falsch = es stimmt nicht ❌",
    t2_b3: "Lies genau, was im Satz steht",
    t2_inst: "Lies: 'Die Sonne ist gelb.' Sortiere die Sätze: Richtig oder Falsch?",
    t2_h1: "Ist die Sonne gelb oder blau?",
    t2_h2: "Gelb ist richtig. Blau ist falsch.",
    t2_bucket_richtig: "Richtig ✅",
    t2_bucket_falsch: "Falsch ❌",
    t2_item_r1: "Die Sonne ist gelb", t2_item_r2: "Der Apfel ist rot",
    t2_item_f1: "Die Sonne ist blau", t2_item_f2: "Der Apfel ist grün mit lila Punkten",
    t2_q: "Ist der Satz 'Ein Hund kann fliegen' richtig oder falsch?",
    t2_q_a: "Falsch", t2_q_b: "Richtig", t2_q_c: "Vielleicht", t2_q_d: "Manchmal",

    // Topic 3
    t3_title: "Sinnvolle Sätze",
    t3_text: "Ein Satz muss Sinn machen. Wenn ich sage: 'Ich lese ein Auto', ist das lustig, aber falsch. Man liest ein Buch!",
    t3_b1: "Achte auf das Verb (Tunwort)",
    t3_b2: "lesen -> Buch",
    t3_b3: "essen -> Apfel",
    t3_inst: "Welches Wort macht den Satz sinnvoll? 'Ich lese ein ___.'",
    t3_h1: "Was kann man lesen?",
    t3_h2: "Ein Buch! 'Buch' ist die richtige Antwort.",
    t3_gap_text: "Ich lese ein {gap}.",
    t3_opt_buch: "Buch", t3_opt_auto: "Auto", t3_opt_apfel: "Apfel",
    t3_q: "Welches Wort passt: 'Ich esse einen ___.'",
    t3_q_a: "Apfel", t3_q_b: "Stuhl", t3_q_c: "Tisch", t3_q_d: "Hund",
  },
  en: {
    explorer_title: "Reading Basics",
    t1_title: "Reading Words",
    t1_text: "Sometimes letters are missing. When we read the word, we know which vowel (a, e, i, o, u) is missing!",
    t1_b1: "Sch_le -> u (die Schule / school)",
    t1_b2: "K_nd -> i (das Kind / child)",
    t1_b3: "B_ch -> u (das Buch / book)",
    t1_inst: "Which letter is missing? Match the pairs!",
    t1_h1: "Say the word out loud.",
    t1_h2: "Sch_le needs a 'u'. K_nd needs an 'i'.",
    t1_l1: "Sch__le 🏫", t1_r1: "u",
    t1_l2: "K__nd 🧒", t1_r2: "i",
    t1_l3: "B__ch 📖", t1_r3: "u",
    t1_q: "Which letter is missing in 'H_us' (house)?",
    t1_q_a: "a", t1_q_b: "e", t1_q_c: "i", t1_q_d: "o",

    t2_title: "True or False?",
    t2_text: "Read the sentence: 'Der Apfel ist rot.' (The apple is red.) Is that true? Yes (Richtig)! What about: 'Der Apfel ist blau'? No, that's false (Falsch)!",
    t2_b1: "Richtig = True ✅",
    t2_b2: "Falsch = False ❌",
    t2_b3: "Read the sentence carefully",
    t2_inst: "Sort the sentences: Are they Richtig (True) or Falsch (False)?",
    t2_h1: "Is the sun yellow or blue?",
    t2_h2: "Yellow is true (richtig). Blue is false (falsch).",
    t2_bucket_richtig: "Richtig ✅",
    t2_bucket_falsch: "Falsch ❌",
    t2_item_r1: "Die Sonne ist gelb", t2_item_r2: "Der Apfel ist rot",
    t2_item_f1: "Die Sonne ist blau", t2_item_f2: "Der Apfel ist grün mit lila Punkten",
    t2_q: "Is the sentence 'Ein Hund kann fliegen' (A dog can fly) true or false?",
    t2_q_a: "Falsch (False)", t2_q_b: "Richtig (True)", t2_q_c: "Vielleicht (Maybe)", t2_q_d: "Manchmal (Sometimes)",

    t3_title: "Sentences that make sense",
    t3_text: "A sentence must make sense. If I say: 'I read a car', that's funny but wrong. You read a book!",
    t3_b1: "Pay attention to the verb",
    t3_b2: "lesen (read) -> Buch (book)",
    t3_b3: "essen (eat) -> Apfel (apple)",
    t3_inst: "Which word makes sense? 'Ich lese ein ___.' (I read a ___.)",
    t3_h1: "What can you read?",
    t3_h2: "A book! 'Buch' is the correct answer.",
    t3_gap_text: "Ich lese ein {gap}.",
    t3_opt_buch: "Buch", t3_opt_auto: "Auto", t3_opt_apfel: "Apfel",
    t3_q: "Which word fits: 'Ich esse einen ___.' (I eat an ___.)",
    t3_q_a: "Apfel (apple)", t3_q_b: "Stuhl (chair)", t3_q_c: "Tisch (table)", t3_q_d: "Hund (dog)",
  },
  hu: {
    explorer_title: "Olvasás Alapok",
    t1_title: "Szavak olvasása",
    t1_text: "Néha hiányoznak betűk egy szóból. Ha felolvassuk, rögtön tudjuk, melyik magánhangzó (a, e, i, o, u) illik oda!",
    t1_b1: "Sch_le -> u (die Schule / iskola)",
    t1_b2: "K_nd -> i (das Kind / gyerek)",
    t1_b3: "B_ch -> u (das Buch / könyv)",
    t1_inst: "Melyik betű hiányzik? Kösd össze a párokat!",
    t1_h1: "Olvasd fel a szót hangosan.",
    t1_h2: "A Sch_le-be 'u' kell. A K_nd-be 'i'.",
    t1_l1: "Sch__le 🏫", t1_r1: "u",
    t1_l2: "K__nd 🧒", t1_r2: "i",
    t1_l3: "B__ch 📖", t1_r3: "u",
    t1_q: "Melyik betű hiányzik a 'H_us' (ház) szóból?",
    t1_q_a: "a", t1_q_b: "e", t1_q_c: "i", t1_q_d: "o",

    t2_title: "Igaz vagy Hamis?",
    t2_text: "Olvasd el a mondatot: 'Der Apfel ist rot.' (Az alma piros.) Ez igaz? Igen (Richtig)! És ez: 'Der Apfel ist blau'? Nem, ez hamis (Falsch)!",
    t2_b1: "Richtig = Igaz ✅",
    t2_b2: "Falsch = Hamis ❌",
    t2_b3: "Olvasd el pontosan a mondatot",
    t2_inst: "Igaz (Richtig) vagy Hamis (Falsch)? Húzd a megfelelő kosárba!",
    t2_h1: "A nap sárga vagy kék?",
    t2_h2: "A sárga az igaz (richtig). A kék a hamis (falsch).",
    t2_bucket_richtig: "Richtig ✅",
    t2_bucket_falsch: "Falsch ❌",
    t2_item_r1: "Die Sonne ist gelb", t2_item_r2: "Der Apfel ist rot",
    t2_item_f1: "Die Sonne ist blau", t2_item_f2: "Der Apfel ist grün mit lila Punkten",
    t2_q: "A 'Ein Hund kann fliegen' (Egy kutya tud repülni) mondat igaz vagy hamis?",
    t2_q_a: "Falsch (Hamis)", t2_q_b: "Richtig (Igaz)", t2_q_c: "Vielleicht (Talán)", t2_q_d: "Manchmal (Néha)",

    t3_title: "Értelmes mondatok",
    t3_text: "Egy mondatnak értelmesnek kell lennie. Ha azt mondom: 'Olvasok egy autót', az vicces, de helytelen. Könyvet szoktunk olvasni!",
    t3_b1: "Figyelj az igére (mit csinálunk?)",
    t3_b2: "lesen (olvasni) -> Buch (könyv)",
    t3_b3: "essen (enni) -> Apfel (alma)",
    t3_inst: "Melyik szóval lesz értelmes a mondat? 'Ich lese ein ___.' (Én olvasok egy ___.)",
    t3_h1: "Mit lehet olvasni?",
    t3_h2: "Egy könyvet! A 'Buch' a helyes válasz.",
    t3_gap_text: "Ich lese ein {gap}.",
    t3_opt_buch: "Buch", t3_opt_auto: "Auto", t3_opt_apfel: "Apfel",
    t3_q: "Melyik szó illik ide: 'Ich esse einen ___.' (Én eszem egy ___.)?",
    t3_q_a: "Apfel (almát)", t3_q_b: "Stuhl (széket)", t3_q_c: "Tisch (asztalt)", t3_q_d: "Hund (kutyát)",
  },
  ro: {
    explorer_title: "Baze de Citire",
    t1_title: "Citirea cuvintelor",
    t1_text: "Uneori lipsesc litere. Când citim cuvântul, știm care vocală (a, e, i, o, u) lipsește!",
    t1_b1: "Sch_le -> u (die Schule / școala)",
    t1_b2: "K_nd -> i (das Kind / copilul)",
    t1_b3: "B_ch -> u (das Buch / cartea)",
    t1_inst: "Ce literă lipsește? Potrivește perechile!",
    t1_h1: "Spune cuvântul cu voce tare.",
    t1_h2: "Sch_le are nevoie de 'u'. K_nd are nevoie de 'i'.",
    t1_l1: "Sch__le 🏫", t1_r1: "u",
    t1_l2: "K__nd 🧒", t1_r2: "i",
    t1_l3: "B__ch 📖", t1_r3: "u",
    t1_q: "Ce literă lipsește din 'H_us' (casă)?",
    t1_q_a: "a", t1_q_b: "e", t1_q_c: "i", t1_q_d: "o",

    t2_title: "Adevărat sau Fals?",
    t2_text: "Citește propoziția: 'Der Apfel ist rot.' (Mărul este roșu.) Este adevărat? Da (Richtig)! Dar: 'Der Apfel ist blau'? Nu, este fals (Falsch)!",
    t2_b1: "Richtig = Adevărat ✅",
    t2_b2: "Falsch = Fals ❌",
    t2_b3: "Citește propoziția cu atenție",
    t2_inst: "Sortează propozițiile: Sunt Richtig (Adevărate) sau Falsch (False)?",
    t2_h1: "Soarele este galben sau albastru?",
    t2_h2: "Galben este adevărat (richtig). Albastru este fals (falsch).",
    t2_bucket_richtig: "Richtig ✅",
    t2_bucket_falsch: "Falsch ❌",
    t2_item_r1: "Die Sonne ist gelb", t2_item_r2: "Der Apfel ist rot",
    t2_item_f1: "Die Sonne ist blau", t2_item_f2: "Der Apfel ist grün mit lila Punkten",
    t2_q: "Propoziția 'Ein Hund kann fliegen' (Un câine poate zbura) este adevărată sau falsă?",
    t2_q_a: "Falsch (Falsă)", t2_q_b: "Richtig (Adevărată)", t2_q_c: "Vielleicht (Poate)", t2_q_d: "Manchmal (Uneori)",

    t3_title: "Propoziții cu sens",
    t3_text: "O propoziție trebuie să aibă sens. Dacă spun: 'Eu citesc o mașină', e amuzant, dar greșit. Tu citești o carte!",
    t3_b1: "Atenție la verb (acțiune)",
    t3_b2: "lesen (a citi) -> Buch (carte)",
    t3_b3: "essen (a mânca) -> Apfel (măr)",
    t3_inst: "Ce cuvânt dă sens propoziției? 'Ich lese ein ___.' (Eu citesc o ___.)",
    t3_h1: "Ce poți să citești?",
    t3_h2: "O carte! 'Buch' este răspunsul corect.",
    t3_gap_text: "Ich lese ein {gap}.",
    t3_opt_buch: "Buch", t3_opt_auto: "Auto", t3_opt_apfel: "Apfel",
    t3_q: "Ce cuvânt se potrivește: 'Ich esse einen ___.' (Eu mănânc un ___.)",
    t3_q_a: "Apfel (măr)", t3_q_b: "Stuhl (scaun)", t3_q_c: "Tisch (masă)", t3_q_d: "Hund (câine)",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Missing Letters (match-pairs) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // Sch_le -> u
        { left: "t1_l2", right: "t1_r2" }, // K_nd -> i
        { left: "t1_l3", right: "t1_r3" }, // B_ch -> u
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // a (H_us)
    },
  },
  // ── Topic 2: True or False (drag-to-bucket) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "richtig", label: "t2_bucket_richtig" },
        { id: "falsch", label: "t2_bucket_falsch" },
      ],
      items: [
        { text: "t2_item_r1", bucketId: "richtig" },
        { text: "t2_item_f1", bucketId: "falsch" },
        { text: "t2_item_r2", bucketId: "richtig" },
        { text: "t2_item_f2", bucketId: "falsch" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Falsch
    },
  },
  // ── Topic 3: Sentence Completion (gap-fill) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_gap_text",
      options: ["t3_opt_buch", "t3_opt_auto", "t3_opt_apfel"],
      answer: "t3_opt_buch",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Apfel
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReadingExplorerK1 = memo(function ReadingExplorerK1({
  color = "#8B5CF6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="deutsch_k1_reading" color={color} lang={lang} onDone={onDone} />;
});

export default ReadingExplorerK1;
