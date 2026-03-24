"use client";
// PluralFamilyExplorerK3 — Island i1: Pluralformen & Wortfamilien
// Topics: 1) Plural-Endungen (-e, -er, -n, -s) 2) Umlaut im Plural 3) Wortfamilien-Stamm

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-10" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Singular</text>
        <text x="60" y="-10" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Plural</text>
        <path d="M -20,-10 L 20,-10" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <text x="-60" y="20" fontSize="12" fill="#0284C7" textAnchor="middle">das Kind</text>
        <text x="60" y="20" fontSize="12" fontWeight="900" fill="#0369A1" textAnchor="middle">die Kind<tspan fill="#EF4444">er</tspan></text>
        
        <text x="-60" y="40" fontSize="12" fill="#0284C7" textAnchor="middle">der Hund</text>
        <text x="60" y="40" fontSize="12" fontWeight="900" fill="#0369A1" textAnchor="middle">die Hund<tspan fill="#EF4444">e</tspan></text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="16" fontWeight="bold" fill="#9A3412" textAnchor="middle">Umlaut-Wechsel</text>
        <circle cx="-40" cy="10" r="25" fill="#FFEDD5" stroke="#FB923C" />
        <text x="-40" y="18" fontSize="24" fontWeight="900" fill="#EA580C" textAnchor="middle">a</text>
        
        <path d="M -10,10 L 10,10" stroke="#F97316" strokeWidth="2" markerEnd="url(#arrow)" />
        
        <circle cx="40" cy="10" r="25" fill="#FFEDD5" stroke="#FB923C" />
        <text x="40" y="18" fontSize="24" fontWeight="900" fill="#EA580C" textAnchor="middle">ä</text>
        <text x="0" y="50" fontSize="12" fill="#C2410C" textAnchor="middle">Baum ➔ Bäume</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F5F3FF" rx="20" />
      <g transform="translate(120, 75)">
        <path d="M 0,20 L 0,-25 M -40,-10 L 40,-10" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 2" />
        <text x="0" y="40" fontSize="18" fontWeight="black" fill="#5B21B6" textAnchor="middle">TRAUM</text>
        <text x="-60" y="-15" fontSize="12" fill="#7C3AED" textAnchor="middle">träumen</text>
        <text x="0" y="-35" fontSize="12" fill="#7C3AED" textAnchor="middle">traumhaft</text>
        <text x="60" y="-15" fontSize="12" fill="#7C3AED" textAnchor="middle">Träumer</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Plural & Wortfamilien",
    // Topic 1
    t1_title: "Die Plural-Endungen",
    t1_text: "Nomen im Plural (Mehrzahl) haben verschiedene Endungen. Die häufigsten sind -e, -er, -n/-en és -s. Der Artikel ist im Plural immer 'die'.",
    t1_b1: "Hunde, Tische (-e)",
    t1_b2: "Kinder, Bilder (-er)",
    t1_b3: "Autos, Parks (-s)",
    t1_inst: "Welche Endung passt? Sortiere die Wörter!",
    t1_h1: "Hör auf den Klang: Kind-er oder Kind-e?",
    t1_h2: "Hunde und Tische gehören in die -e Gruppe.",
    t1_bucket_e: "Endung -e",
    t1_bucket_er: "Endung -er",
    t1_item_hunde: "Hunde", t1_item_tische: "Tische",
    t1_item_kinder: "Kinder", t1_item_bilder: "Bilder",
    t1_q: "Wie heißt der Plural von 'Geist'?",
    t1_q_a: "Geister", t1_q_b: "Geiste", t1_q_c: "Geisten", t1_q_d: "Geists",

    // Topic 2
    t2_title: "Umlaute im Plural",
    t2_text: "Viele Nomen verändern ihren Stammvokal im Plural. Aus a wird ä, aus o wird ö, und aus u wird ü. Das passiert oft bei einsilbigen Wörtern.",
    t2_b1: "Hand ➔ Hände",
    t2_b2: "Buch ➔ Bücher",
    t2_b3: "Vogel ➔ Vögel",
    t2_inst: "Wähle das richtige Wort für den Satz aus!",
    t2_h1: "Es sind zwei Dinge, also brauchen wir den Plural mit Umlaut.",
    t2_h2: "Der Plural von Hand ist Hände.",
    t2_gap_sentence: "Ich wasche meine zwei {gap}.",
    t2_c1: "Hände", t2_c2: "Hande", t2_c3: "Händen",
    t2_q: "Was passiert mit dem 'au' im Wort 'Baum' im Plural?",
    t2_q_a: "Es wird zu 'äu' (Bäume)", t2_q_b: "Es bleibt 'au'", t2_q_c: "Es wird zu 'eu'", t2_q_d: "Es fällt weg",

    // Topic 3
    t3_title: "Wortfamilien erkennen",
    t3_text: "Wörter einer Wortfamilie haben den gleichen Wortstamm. Wenn du den Stamm kennst, verstehst du viele neue Wörter (Verben, Nomen, Adjektive).",
    t3_b1: "Stamm: SPIEL (spielen, Spielzeug)",
    t3_b2: "Stamm: FAHR (fahren, Fahrt)",
    t3_b3: "Stamm: LAUF (laufen, Läufer)",
    t3_inst: "Bringe die Wörter einer Familie in die richtige Reihenfolge!",
    t3_h1: "Hier suchen wir Wörter zum Stamm 'TRAUM'.",
    t3_h2: "Die Reihenfolge ist egal, aber alle müssen zum Thema Träumen passen.",
    t3_w1: "Traum", t3_w2: "träumen", t3_w3: "traumhaft", t3_w4: "Träumer",
    t3_q: "Welches Wort gehört NICHT zur Wortfamilie 'fahren'?",
    t3_q_a: "Fahrrad", t3_q_b: "Gefahr", t3_q_c: "Fahrer", t3_q_d: "Abfahrt",
  },
  en: {
    explorer_title: "Plurals & Families",
    t1_inst: "Which ending fits? Sort the words!",
    t1_h1: "Listen to the sound: Kind-er or Kind-e?",
    t1_h2: "Hunde and Tische go into the -e group.",
    t1_bucket_e: "Ending -e",
    t1_bucket_er: "Ending -er",
    t2_inst: "Choose the correct word for the sentence!",
    t2_h1: "There are two things, so we need the plural with an umlaut.",
    t2_h2: "The plural of 'Hand' is 'Hände'.",
    t3_inst: "Put the words of one family in order!",
    t3_h1: "We are looking for words with the stem 'TRAUM'.",
  },
  hu: {
    explorer_title: "Többes szám és Szócsaládok",
    t1_inst: "Melyik végződés illik hozzá? Válogasd szét a szavakat!",
    t1_h1: "Figyeld a hangzást: Kind-er vagy Kind-e?",
    t1_h2: "A Hunde és a Tische az -e csoportba tartozik.",
    t1_bucket_e: "-e végződés",
    t1_bucket_er: "-er végződés",
    t2_inst: "Válaszd ki a mondatba illő helyes szót!",
    t2_h1: "Két dologról van szó, tehát umlautos többes szám kell.",
    t2_h2: "A 'Hand' többes száma a 'Hände'.",
    t3_inst: "Tedd sorba egy szócsalád tagjait!",
    t3_h1: "A 'TRAUM' (álom) tőhöz tartozó szavakat keressük.",
  },
  ro: {
    explorer_title: "Plural și Familii de cuvinte",
    t1_inst: "Ce terminație se potrivește? Sortează cuvintele!",
    t1_h1: "Ascultă sunetul: Kind-er sau Kind-e?",
    t1_h2: "Hunde și Tische aparțin grupului -e.",
    t1_bucket_e: "Terminația -e",
    t1_bucket_er: "Terminația -er",
    t2_inst: "Alege cuvântul corect pentru propoziție!",
    t2_h1: "Sunt două lucruri, deci avem nevoie de plural cu umlaut.",
    t2_h2: "Pluralul lui 'Hand' este 'Hände'.",
    t3_inst: "Pune în ordine cuvintele dintr-o familie!",
    t3_h1: "Căutăm cuvinte cu rădăcina 'TRAUM'.",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "e", label: "t1_bucket_e" },
        { id: "er", label: "t1_bucket_er" },
      ],
      items: [
        { text: "t1_item_hunde", bucketId: "e" },
        { text: "t1_item_kinder", bucketId: "er" },
        { text: "t1_item_tische", bucketId: "e" },
        { text: "t1_item_bilder", bucketId: "er" },
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
      type: "gap-fill",
      sentence: "t2_gap_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
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
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"],
      correctOrder: [0, 1, 2, 3],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_b",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "👨‍👩‍👧‍👦",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PluralFamilyExplorerK3 = memo(function PluralFamilyExplorerK3({
  color = "#0EA5E9",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_plural" color={color} lang={lang} onDone={onDone} />;
});

export default PluralFamilyExplorerK3;
