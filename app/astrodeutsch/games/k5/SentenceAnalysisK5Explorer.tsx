"use client";
// SentenceAnalysisK5Explorer — Island i4: Mondatelemzés (Sentence Analysis)
// Topics: 1) Subjekt 2) Prädikat 3) Objekte 4) Adverbiale Bestimmungen 5) Gemischtes Quiz

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-10" r="30" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
        <text x="0" y="0" fontSize="24" textAnchor="middle">👤</text>
        <text x="0" y="35" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Das Subjekt</text>
        <text x="0" y="50" fontSize="10" fill="#0284C7" textAnchor="middle">Wer oder was?</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-40" y="-30" width="80" height="40" rx="8" fill="#FBCFE8" stroke="#BE185D" strokeWidth="2" />
        <text x="0" y="-5" fontSize="20" textAnchor="middle">🏃‍♀️</text>
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">Das Prädikat</text>
        <text x="0" y="45" fontSize="10" fill="#BE185D" textAnchor="middle">Was tut das Subjekt?</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="24" textAnchor="middle">🎁</text>
        <text x="-40" y="20" fontSize="12" fontWeight="bold" fill="#15803D" textAnchor="middle">Akkusativ</text>
        <text x="-40" y="35" fontSize="10" fill="#166534" textAnchor="middle">(Wen/Was?)</text>
        
        <text x="40" y="-10" fontSize="24" textAnchor="middle">👦</text>
        <text x="40" y="20" fontSize="12" fontWeight="bold" fill="#15803D" textAnchor="middle">Dativ</text>
        <text x="40" y="35" fontSize="10" fill="#166534" textAnchor="middle">(Wem?)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="24" textAnchor="middle">⏰</text>
        <text x="-50" y="20" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Wann?</text>
        
        <text x="0" y="-10" fontSize="24" textAnchor="middle">🌍</text>
        <text x="0" y="20" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Wo?</text>
        
        <text x="50" y="-10" fontSize="24" textAnchor="middle">❓</text>
        <text x="50" y="20" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">Warum?</text>
        
        <text x="0" y="45" fontSize="12" fill="#D97706" textAnchor="middle">Adverbiale Bestimmungen</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k5Grad4_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k5Grad4_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="30" textAnchor="middle">🔍</text>
        <text x="0" y="25" fontSize="16" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Satz-Detektiv</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Satzanalyse K5",

    // T1
    t1_title: "Das Subjekt",
    t1_text: "Das Subjekt ist der 'Chef' im Satz. Es bestimmt, wie das Verb konjugiert wird. Wir finden es mit der Frage: Wer oder was tut etwas?",
    t1_b1: "Beispiel: Der schlaue Fuchs jagt.",
    t1_b2: "Frage: Wer jagt? ➔ Der schlaue Fuchs.",
    t1_b3: "Das Subjekt steht immer im Nominativ.",
    t1_inst: "Wo ist das Subjekt? Markiere es im Satz!",
    t1_h1: "Frage: Wer fängt einen Hasen?",
    t1_h2: "Die Antwort ist 'Der schlaue Fuchs'.",
    t1_w1: "Der", t1_w2: "schlaue", t1_w3: "Fuchs", t1_w4: "fängt", t1_w5: "einen", t1_w6: "Hasen.",
    t1_q: "Mit welcher Frage findet man das Subjekt?",
    t1_q_a: "Wer oder was?", t1_q_b: "Wen oder was?", t1_q_c: "Wem?", t1_q_d: "Wo?",

    // T2
    t2_title: "Das Prädikat",
    t2_text: "Das Prädikat ist das Herz des Satzes. Es drückt die Handlung aus und ist immer ein Verb. Wir fragen: Was tut das Subjekt?",
    t2_b1: "Beispiel: Die Kinder SPIELEN im Garten.",
    t2_b2: "Es kann auch aus zwei Teilen bestehen (Satzklammer).",
    t2_b3: "In einem normalen Aussagesatz steht es an Position 2.",
    t2_inst: "Welches Prädikat passt in die Lücke?",
    t2_h1: "Das Subjekt 'Die Kinder' ist Plural (sie).",
    t2_h2: "Wir brauchen das Verb in der Pluralform: 'spielen'.",
    t2_gap_sentence: "Die Kinder {gap} fröhlich im Garten.",
    t2_c1: "spielen", t2_c2: "spielt", t2_c3: "Spiel",
    t2_q: "Welche Wortart bildet das Prädikat?",
    t2_q_a: "Ein Verb", t2_q_b: "Ein Nomen", t2_q_c: "Ein Adjektiv", t2_q_d: "Ein Pronomen",

    // T3
    t3_title: "Die Objekte (Akkusativ & Dativ)",
    t3_text: "Objekte ergänzen das Prädikat. Viele Verben brauchen ein Objekt, um Sinn zu machen. Das Akkusativ-Objekt fragt nach 'Wen oder was?'. Das Dativ-Objekt fragt nach 'Wem?'.",
    t3_b1: "Akkusativ: Ich sehe DEN BALL (Wen/Was?).",
    t3_b2: "Dativ: Ich helfe DEM FREUND (Wem?).",
    t3_b3: "Manche Verben brauchen beides (geben, schenken).",
    t3_inst: "Ist es ein Akkusativ- oder Dativ-Objekt? Sortiere sie!",
    t3_h1: "Wörter mit 'den' oder 'einen' sind Akkusativ (Wen/Was).",
    t3_h2: "Wörter mit 'dem' oder 'der' (beim Helfen) sind Dativ (Wem).",
    t3_bucket_akk: "Akkusativ (Wen/Was?)",
    t3_bucket_dat: "Dativ (Wem?)",
    t3_item_den_ball: "den Ball", t3_item_einen_apfel: "einen Apfel",
    t3_item_dem_freund: "dem Freund", t3_item_der_mutter: "der Mutter",
    t3_q: "Wie erfragt man das Akkusativ-Objekt?",
    t3_q_a: "Wen oder was?", t3_q_b: "Wer oder was?", t3_q_c: "Wem?", t3_q_d: "Wo?",

    // T4
    t4_title: "Adverbiale Bestimmungen",
    t4_text: "Diese Satzglieder beschreiben die Umstände einer Handlung genauer. Es gibt sie für Zeit (Wann?), Ort (Wo/Wohin?), Art & Weise (Wie?) und den Grund (Warum?).",
    t4_b1: "Zeit: morgens, um 8 Uhr",
    t4_b2: "Ort: im Park, nach Hause",
    t4_b3: "Art: schnell, laut / Grund: wegen des Regens",
    t4_inst: "Welches Fragewort passt zu welcher Bestimmung? Verbinde!",
    t4_h1: "'morgen' ist eine Zeit (Wann?). 'im Park' ist ein Ort (Wo?).",
    t4_h2: "'schnell' ist die Art (Wie?).",
    t4_l1: "Wann?", t4_r1: "morgen",
    t4_l2: "Wo?", t4_r2: "im Park",
    t4_l3: "Wie?", t4_r3: "schnell",
    t4_l4: "Warum?", t4_r4: "wegen des Regens",
    t4_q: "Was ist 'heute Nachmittag' für eine Bestimmung?",
    t4_q_a: "Adverbiale Bestimmung der Zeit", t4_q_b: "Adverbiale Bestimmung des Ortes", t4_q_c: "Dativ-Objekt", t4_q_d: "Subjekt",

    // T5
    t5_title: "Gemischtes Quiz",
    t5_text: "Jetzt bauen wir einen kompletten Satz mit vielen Satzgliedern! Denke daran: Subjekt und Prädikat sind der Kern. Dann kommen die Adverbialen Bestimmungen und die Objekte.",
    t5_b1: "Satzglieder kann man mit der Umstellprobe verschieben.",
    t5_b2: "Das Verb (Prädikat) bleibt in Aussagesätzen auf Position 2.",
    t5_b3: "Bringe den Satz in die richtige Reihenfolge.",
    t5_inst: "Bringe die Satzglieder in die richtige Reihenfolge!",
    t5_h1: "Der Satz beginnt mit dem Subjekt 'Der Hund'. Dann das Verb 'holt'.",
    t5_h2: "Danach die Art 'schnell', dann das Objekt 'den Ball'.",
    t5_w1: "Der", t5_w2: "Hund", t5_w3: "holt", t5_w4: "schnell", t5_w5: "den", t5_w6: "Ball.",
    t5_q: "Welches Satzglied fehlt hier? 'Wir essen einen Apfel.'",
    t5_q_a: "Adverbiale Bestimmung", t5_q_b: "Subjekt", t5_q_c: "Prädikat", t5_q_d: "Akkusativ-Objekt",
  },
  en: {
    explorer_title: "Sentence Analysis",
    t1_inst: "Where is the subject? Highlight it in the sentence!",
    t1_h1: "Ask yourself: Who catches a hare?",
    t1_h2: "The answer is 'Der schlaue Fuchs'.",
    t2_inst: "Which predicate (verb) fits in the gap?",
    t2_h1: "The subject 'Die Kinder' is plural (they).",
    t2_h2: "We need the verb in plural form: 'spielen'.",
    t3_inst: "Is it an Accusative or Dative object? Sort them!",
    t3_h1: "Words with 'den' or 'einen' are Accusative (Whom/What).",
    t3_h2: "Words with 'dem' or 'der' (helping) are Dative (To whom).",
    t3_bucket_akk: "Accusative Object",
    t3_bucket_dat: "Dative Object",
    t4_inst: "Which question word matches which detail? Connect!",
    t4_h1: "'morgen' is a time (When?). 'im Park' is a place (Where?).",
    t4_h2: "'schnell' is a manner (How?).",
    t5_inst: "Put the sentence parts in the correct order!",
    t5_h1: "Start with the subject 'Der Hund'. Then the verb 'holt'.",
    t5_h2: "Then the manner 'schnell', and the object 'den Ball'.",
  },
  hu: {
    explorer_title: "Mondatelemzés",
    t1_inst: "Hol van az alany? Jelöld ki a mondatban!",
    t1_h1: "Kérdezd meg: Ki fog meg egy nyulat?",
    t1_h2: "A válasz: 'Der schlaue Fuchs'.",
    t2_inst: "Melyik állítmány (ige) illik az űrbe?",
    t2_h1: "A 'Die Kinder' alany többes szám (ők).",
    t2_h2: "Az ige többes számú alakja kell: 'spielen'.",
    t3_inst: "Ez egy tárgyeset (Akkusativ) vagy részeseset (Dativ)? Válogasd szét!",
    t3_h1: "A 'den' vagy 'einen' szavak Akkusativ-ok (Kit/Mit).",
    t3_h2: "A 'dem' vagy 'der' (segítésnél) Dativ-ok (Kinek).",
    t3_bucket_akk: "Tárgyeset (Akk)",
    t3_bucket_dat: "Részeseset (Dat)",
    t4_inst: "Melyik kérdőszó melyik határozóhoz illik? Kösd össze!",
    t4_h1: "A 'morgen' (holnap) egy idő (Mikor?). Az 'im Park' hely (Hol?).",
    t4_h2: "A 'schnell' módhatározó (Hogyan?).",
    t5_inst: "Tedd a mondatrészeket a helyes sorrendbe!",
    t5_h1: "Kezdd a 'Der Hund' alannyal. Aztán az ige: 'holt'.",
    t5_h2: "Utána a mód: 'schnell', végül a tárgy: 'den Ball'.",
  },
  ro: {
    explorer_title: "Analiza propoziției",
    t1_inst: "Unde este subiectul? Marchează-l în propoziție!",
    t1_h1: "Întreabă-te: Cine prinde un iepure?",
    t1_h2: "Răspunsul este 'Der schlaue Fuchs'.",
    t2_inst: "Ce predicat (verb) se potrivește în spațiu?",
    t2_h1: "Subiectul 'Die Kinder' este la plural (ei/ele).",
    t2_h2: "Avem nevoie de verb la plural: 'spielen'.",
    t3_inst: "Este obiect în Acuzativ sau Dativ? Sortează-le!",
    t3_h1: "Cuvintele cu 'den' sau 'einen' sunt Acuzativ (Pe cine/Ce).",
    t3_h2: "Cuvintele cu 'dem' sau 'der' (la a ajuta) sunt Dativ (Cui).",
    t3_bucket_akk: "Obiect în Acuzativ",
    t3_bucket_dat: "Obiect în Dativ",
    t4_inst: "Ce cuvânt interogativ se potrivește cărui detaliu? Leagă!",
    t4_h1: "'morgen' este un timp (Când?). 'im Park' este un loc (Unde?).",
    t4_h2: "'schnell' arată modul (Cum?).",
    t5_inst: "Așază părțile de propoziție în ordinea corectă!",
    t5_h1: "Începe cu subiectul 'Der Hund'. Apoi verbul 'holt'.",
    t5_h2: "Apoi modul 'schnell', urmat de obiectul 'den Ball'.",
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
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], // Der schlaue Fuchs fängt einen Hasen.
      correctIndices: [0, 1, 2], // Der schlaue Fuchs
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"], // spielen, spielt, Spiel
      correctIndex: 0,
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
      type: "drag-to-bucket",
      buckets: [
        { id: "akk", label: "t3_bucket_akk" },
        { id: "dat", label: "t3_bucket_dat" },
      ],
      items: [
        { text: "t3_item_den_ball", bucketId: "akk" },
        { text: "t3_item_dem_freund", bucketId: "dat" },
        { text: "t3_item_einen_apfel", bucketId: "akk" },
        { text: "t3_item_der_mutter", bucketId: "dat" },
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
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" }, // Wann? -> morgen
        { left: "t4_l2", right: "t4_r2" }, // Wo? -> im Park
        { left: "t4_l3", right: "t4_r3" }, // Wie? -> schnell
        { left: "t4_l4", right: "t4_r4" }, // Warum? -> wegen des Regens
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "word-order",
      words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6"], // Der Hund holt schnell den Ball.
      correctOrder: [0, 1, 2, 3, 4, 5],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a", // Es fehlt die Adverbiale Bestimmung
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔍",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceAnalysisK5Explorer = memo(function SentenceAnalysisK5Explorer({
  color = "#2563EB",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="deutsch_k5_sentence_analysis" color={color} lang={lang} onDone={onDone} />;
});

export default SentenceAnalysisK5Explorer;
