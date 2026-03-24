"use client";
// ReviewExplorerK4 — Island i9: Große Prüfung (The Big K4 Review)
// Topics: 1) Kasus 2) Zeitformen 3) Wortarten 4) Rechtschreibung 5) Gemischtes Finale

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="24" textAnchor="middle">🕵️‍♂️</text>
        <text x="0" y="15" fontSize="16" fontWeight="bold" fill="#0369A1" textAnchor="middle">Kasus-Check</text>
        <text x="0" y="35" fontSize="10" fill="#0284C7" textAnchor="middle">Nom, Gen, Dat, Akk</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FDF2F8" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-5" fontSize="24" textAnchor="middle">⏳</text>
        <path d="M -20,-10 L 20,-10" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
        <text x="50" y="-5" fontSize="24" textAnchor="middle">🚀</text>
        <text x="0" y="30" fontSize="14" fontWeight="bold" fill="#9D174D" textAnchor="middle">Zeitformen</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="50" height="25" rx="4" fill="#A7F3D0" />
        <text x="-55" y="-3" fontSize="12" fontWeight="bold" fill="#065F46" textAnchor="middle">Nomen</text>
        
        <rect x="-10" y="-20" width="40" height="25" rx="4" fill="#6EE7B7" />
        <text x="10" y="-3" fontSize="12" fontWeight="bold" fill="#065F46" textAnchor="middle">Verb</text>
        
        <rect x="40" y="-20" width="50" height="25" rx="4" fill="#34D399" />
        <text x="65" y="-3" fontSize="12" fontWeight="bold" fill="#065F46" textAnchor="middle">Adjektiv</text>
        
        <text x="0" y="30" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">Wortarten</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="0" fontSize="20" fontWeight="bold" fill="#C2410C" textAnchor="middle">dass</text>
        <text x="0" y="0" fontSize="20" fontWeight="bold" fill="#EA580C" textAnchor="middle">|</text>
        <text x="40" y="0" fontSize="20" fontWeight="bold" fill="#C2410C" textAnchor="middle">ß / ss</text>
        <text x="0" y="35" fontSize="14" fontWeight="bold" fill="#9A3412" textAnchor="middle">Rechtschreibung</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="k4Grad9_5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#k4Grad9_5)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="45" textAnchor="middle">👑</text>
        <text x="0" y="30" fontSize="18" fontWeight="black" fill="#B45309" textAnchor="middle">Klasse 4 gemeistert!</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Die große K4 Prüfung",

    // T1
    t1_title: "Kasus-Meister",
    t1_text: "Weißt du noch, wie man nach den 4 Fällen fragt? Der Nominativ ist das Subjekt. Der Genitiv zeigt den Besitzer. Der Dativ den Empfänger. Der Akkusativ das Ziel.",
    t1_b1: "Nom (Wer/Was?), Gen (Wessen?)",
    t1_b2: "Dat (Wem?), Akk (Wen/Was?)",
    t1_b3: "Achte auf die Artikel (der/dem/den/des)!",
    t1_inst: "Welches Fragewort gehört zu welchem Fall? Verbinde sie!",
    t1_h1: "Wem? -> Dativ. Wen oder was? -> Akkusativ.",
    t1_h2: "Wer oder was? -> Nominativ. Wessen? -> Genitiv.",
    t1_l1: "Wer oder was?", t1_r1: "Nominativ",
    t1_l2: "Wessen?", t1_r2: "Genitiv",
    t1_l3: "Wem?", t1_r3: "Dativ",
    t1_l4: "Wen oder was?", t1_r4: "Akkusativ",
    t1_q: "In welchem Fall steht 'dem Mann'?",
    t1_q_a: "Dativ", t1_q_b: "Akkusativ", t1_q_c: "Nominativ", t1_q_d: "Genitiv",

    // T2
    t2_title: "Zeitmaschinen-Profi",
    t2_text: "Wir reisen durch die Zeit! Präsens (jetzt), Präteritum (war), Perfekt (habe/bin ... ge-t) und Futur (werde ... -en).",
    t2_b1: "Perfekt: Satzklammer mit haben/sein.",
    t2_b2: "Futur: Satzklammer mit werden.",
    t2_b3: "Nebensätze: Verb immer ans Ende!",
    t2_inst: "Bringe den Satz im Perfekt in die richtige Reihenfolge!",
    t2_h1: "Der Satz beginnt mit dem Subjekt 'Wir' und dem Hilfsverb 'sind'.",
    t2_h2: "Das Partizip II 'geflogen.' muss an das Satzende.",
    t2_w1: "Wir", t2_w2: "sind", t2_w3: "gestern", t2_w4: "nach", t2_w5: "Berlin", t2_w6: "geflogen.",
    t2_q: "Welche Zeitform ist: 'Ich werde morgen spielen.'?",
    t2_q_a: "Futur (Zukunft)", t2_q_b: "Präsens (Gegenwart)", t2_q_c: "Perfekt (Vergangenheit)", t2_q_d: "Präteritum",

    // T3
    t3_title: "Wortarten-Checker",
    t3_text: "Nomen schreibst du groß. Verben sind Tunwörter. Adjektive beschreiben etwas und lassen sich steigern. Pronomen ersetzen Nomen.",
    t3_b1: "Nomen: das Haus, die Tür ➔ die Haustür",
    t3_b2: "Verben: gehen, lachte, gespielt",
    t3_b3: "Adjektive: schnell ➔ schneller",
    t3_inst: "Ist es ein Nomen, Verb oder Adjektiv? Sortiere die Wörter!",
    t3_h1: "Großgeschrieben = Nomen. Wörter mit -en am Ende sind meist Verben.",
    t3_h2: "'schön' und 'groß' sind Adjektive.",
    t3_bucket_nom: "Nomen",
    t3_bucket_verb: "Verben",
    t3_bucket_adj: "Adjektive",
    t3_item_baum: "Baum", t3_item_hund: "Hund",
    t3_item_laufen: "laufen", t3_item_essen: "essen",
    t3_item_schoen: "schön", t3_item_gross: "groß",
    t3_q: "Welches Wort ist ein Pronomen?",
    t3_q_a: "ich", t3_q_b: "und", t3_q_c: "Haus", t3_q_d: "schnell",

    // T4
    t4_title: "Rechtschreib-Detektiv",
    t4_text: "das oder dass? ss oder ß? Groß oder klein? In der 4. Klasse achtest du auf jedes Detail!",
    t4_b1: "dass: Bindewort (mit Komma davor).",
    t4_b2: "ss nach kurz, ß nach lang.",
    t4_b3: "Nominalisierung: das Lesen.",
    t4_inst: "Welches Wort fehlt? 'Ich glaube, ___ er heute kommt.'",
    t4_h1: "Es leitet einen Nebensatz ein. Man kann nicht 'dieses' sagen.",
    t4_h2: "Wir brauchen das Wort mit doppeltem 's'.",
    t4_gap_sentence: "Ich glaube, {gap} er heute kommt.",
    t4_c1: "dass", t4_c2: "das", t4_c3: "daß",
    t4_q: "Welches Wort ist richtig geschrieben?",
    t4_q_a: "der Fluss (kurzes u)", t4_q_b: "der Fluß", t4_q_c: "der Fuss (langes u)", t4_q_d: "die Strasse (langes a)",

    // T5
    t5_title: "Das große Finale",
    t5_text: "Hier kommt alles zusammen! Zeig, was du in Klasse 4 gelernt hast. Finde das gesuchte Satzglied.",
    t5_b1: "Subjekt = Wer/Was?",
    t5_b2: "Prädikat = Verb(en)",
    t5_b3: "Du bist bereit für die 5. Klasse!",
    t5_inst: "Finde das Prädikat (Verb) im Satz und markiere es!",
    t5_h1: "Was tut der kleine Hund?",
    t5_h2: "Das Tunwort (Prädikat) ist 'bellt'.",
    t5_w1: "Der", t5_w2: "kleine", t5_w3: "Hund", t5_w4: "bellt", t5_w5: "sehr", t5_w6: "laut.",
    t5_q: "Welcher Satz ist ein korrekter Nebensatz?",
    t5_q_a: "..., weil ich müde bin.", t5_q_b: "..., weil ich bin müde.", t5_q_c: "Weil ich müde bin.", t5_q_d: "Ich bin müde, weil.",
  },
  en: {
    explorer_title: "The Big K4 Exam",
    t1_inst: "Which question word belongs to which case? Match them!",
    t1_h1: "Wem? -> Dativ. Wen oder was? -> Akkusativ.",
    t1_h2: "Wer oder was? -> Nominativ. Wessen? -> Genitiv.",
    t2_inst: "Put the sentence in the Perfekt tense in the correct order!",
    t2_h1: "The sentence starts with the subject 'Wir' and auxiliary 'sind'.",
    t2_h2: "The participle 'geflogen.' must go to the end of the sentence.",
    t3_inst: "Is it a noun, verb, or adjective? Sort the words!",
    t3_h1: "Capitalized = Noun. Words ending in -en are mostly Verbs.",
    t3_h2: "'schön' and 'groß' are Adjectives.",
    t3_bucket_nom: "Nouns",
    t3_bucket_verb: "Verbs",
    t3_bucket_adj: "Adjectives",
    t4_inst: "Which word is missing? 'Ich glaube, ___ er heute kommt.'",
    t4_h1: "It introduces a subordinate clause. You cannot substitute 'dieses'.",
    t4_h2: "We need the word with double 's'.",
    t5_inst: "Find the predicate (verb) in the sentence and highlight it!",
    t5_h1: "What is the little dog doing?",
    t5_h2: "The action word (predicate) is 'bellt' (barks).",
  },
  hu: {
    explorer_title: "A Nagy K4 Vizsga",
    t1_inst: "Melyik kérdőszó melyik esethez tartozik? Kösd össze őket!",
    t1_h1: "Wem? (Kinek?) -> Dativ. Wen/Was? (Kit/Mit?) -> Akkusativ.",
    t1_h2: "Wer/Was? (Ki/Mi?) -> Nominativ. Wessen? (Kinek a..?) -> Genitiv.",
    t2_inst: "Tedd a Perfekt mondatot a helyes sorrendbe!",
    t2_h1: "A mondat a 'Wir' alannyal és a 'sind' segédigével kezdődik.",
    t2_h2: "A 'geflogen.' igenévnek a mondat végére kell kerülnie.",
    t3_inst: "Főnév, Ige vagy Melléknév? Válogasd szét a szavakat!",
    t3_h1: "Nagybetű = Főnév. Az -en végűek többnyire Igék.",
    t3_h2: "A 'schön' és 'groß' Melléknevek.",
    t3_bucket_nom: "Főnevek",
    t3_bucket_verb: "Igék",
    t3_bucket_adj: "Melléknevek",
    t4_inst: "Melyik szó hiányzik? 'Ich glaube, ___ er heute kommt.'",
    t4_h1: "Mellékmondatot vezet be. Nem helyettesíthető 'dieses'-zel.",
    t4_h2: "A dupla 's'-es szóra van szükségünk (dass).",
    t5_inst: "Keresd meg az állítmányt (igét) a mondatban és jelöld ki!",
    t5_h1: "Mit csinál a kis kutya?",
    t5_h2: "A cselekvést kifejező szó (állítmány) a 'bellt' (ugat).",
  },
  ro: {
    explorer_title: "Marele Examen K4",
    t1_inst: "Care cuvânt interogativ aparține cărui caz? Leagă-le!",
    t1_h1: "Wem? -> Dativ. Wen/Was? -> Akkusativ.",
    t1_h2: "Wer/Was? -> Nominativ. Wessen? -> Genitiv.",
    t2_inst: "Așază propoziția la Perfekt în ordinea corectă!",
    t2_h1: "Propoziția începe cu subiectul 'Wir' și auxiliarul 'sind'.",
    t2_h2: "Participiul 'geflogen.' trebuie să fie la finalul propoziției.",
    t3_inst: "Este un substantiv, verb sau adjectiv? Sortează cuvintele!",
    t3_h1: "Majusculă = Substantiv. Cuvintele terminate în -en sunt Verbe.",
    t3_h2: "'schön' și 'groß' sunt Adjective.",
    t3_bucket_nom: "Substantive",
    t3_bucket_verb: "Verbe",
    t3_bucket_adj: "Adjective",
    t4_inst: "Ce cuvânt lipsește? 'Ich glaube, ___ er heute kommt.'",
    t4_h1: "Introduce o propoziție secundară. Nu poate fi înlocuit cu 'dieses'.",
    t4_h2: "Avem nevoie de cuvântul cu 's' dublu.",
    t5_inst: "Găsește predicatul (verbul) în propoziție și marchează-l!",
    t5_h1: "Ce face micul câine?",
    t5_h2: "Cuvântul care exprimă acțiunea (predicatul) este 'bellt' (latră).",
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
        { left: "t1_l1", right: "t1_r1" }, // Wer/Was -> Nom
        { left: "t1_l2", right: "t1_r2" }, // Wessen -> Gen
        { left: "t1_l3", right: "t1_r3" }, // Wem -> Dat
        { left: "t1_l4", right: "t1_r4" }, // Wen/Was -> Akk
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
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6"], // Wir sind gestern nach Berlin geflogen.
      correctOrder: [0, 1, 2, 3, 4, 5],
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
        { id: "nom", label: "t3_bucket_nom" },
        { id: "verb", label: "t3_bucket_verb" },
        { id: "adj", label: "t3_bucket_adj" },
      ],
      items: [
        { text: "t3_item_baum", bucketId: "nom" },
        { text: "t3_item_laufen", bucketId: "verb" },
        { text: "t3_item_schoen", bucketId: "adj" },
        { text: "t3_item_hund", bucketId: "nom" },
        { text: "t3_item_essen", bucketId: "verb" },
        { text: "t3_item_gross", bucketId: "adj" },
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
      type: "gap-fill",
      sentence: "t4_gap_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"], // dass, das, daß
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a", // der Fluss (kurzes u)
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t5_w1", "t5_w2", "t5_w3", "t5_w4", "t5_w5", "t5_w6"], // Der kleine Hund bellt sehr laut.
      correctIndices: [3], // bellt
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
  icon: "👑",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ReviewExplorerK4 = memo(function ReviewExplorerK4({
  color = "#D97706",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="deutsch_k4_review" color={color} lang={lang} onDone={onDone} />;
});

export default ReviewExplorerK4;
