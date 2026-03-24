"use client";
// SeparableVerbExplorerK3 — Island i2: Trennbare Verben
// Topics: 1) Was ist ein Präfix? 2) Satzklammer (Verb...Präfix) 3) Gebräuchliche Verben

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF1F2" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="60" height="40" rx="8" fill="#FB7185" />
        <text x="-50" y="5" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">auf-</text>
        
        <text x="0" y="5" fontSize="20" fontWeight="bold" fill="#E11D48" textAnchor="middle">+</text>
        
        <rect x="20" y="-20" width="70" height="40" rx="8" fill="#F43F5E" />
        <text x="55" y="5" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">stehen</text>
        
        <text x="0" y="45" fontSize="16" fontWeight="black" fill="#BE123C" textAnchor="middle">aufstehen 🚶‍♂️</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDFA" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-80" y="0" fontSize="16" fill="#14B8A6" textAnchor="middle">Ich</text>
        <rect x="-55" y="-15" width="50" height="30" fill="#5EEAD4" rx="4" />
        <text x="-30" y="5" fontSize="14" fontWeight="bold" fill="#0D9488" textAnchor="middle">stehe</text>
        
        <text x="15" y="0" fontSize="14" fill="#14B8A6" textAnchor="middle">früh</text>
        
        <rect x="40" y="-15" width="50" height="30" fill="#CCFBF1" stroke="#14B8A6" strokeDasharray="4 2" rx="4" />
        <text x="65" y="5" fontSize="14" fontWeight="bold" fill="#0D9488" textAnchor="middle">auf.</text>
        
        <path d="M -30,20 Q 17,40 65,20" fill="none" stroke="#0D9488" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#arrow)" />
        <text x="17" y="45" fontSize="10" fill="#0F766E" textAnchor="middle">Satzklammer</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-60" y="-15" fontSize="30" textAnchor="middle">📺</text>
        <text x="-60" y="15" fontSize="12" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">fernsehen</text>
        
        <text x="0" y="-15" fontSize="30" textAnchor="middle">🧹</text>
        <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">aufräumen</text>
        
        <text x="60" y="-15" fontSize="30" textAnchor="middle">📞</text>
        <text x="60" y="15" fontSize="12" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">anrufen</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Elváló igék",
    // Topic 1
    t1_title: "Was ist ein Präfix?",
    t1_text: "Einige Verben im Deutschen haben ein Präfix (einen kleinen Teil am Anfang). Bei trennbaren Verben löst sich dieses Präfix im Satz vom Hauptverb ab.",
    t1_b1: "auf + stehen = aufstehen",
    t1_b2: "an + rufen = anrufen",
    t1_b3: "mit + kommen = mitkommen",
    t1_inst: "Welches Präfix gehört zu welchem Verb? Verbinde sie!",
    t1_h1: "Denk an den Alltag: auf-stehen, an-rufen, mit-spielen.",
    t1_h2: "Verbinde die passenden Teile zu einem sinnvollen Wort.",
    t1_l1: "auf-", t1_r1: "stehen",
    t1_l2: "an-", t1_r2: "rufen",
    t1_l3: "mit-", t1_r3: "kommen",
    t1_l4: "fern-", t1_r4: "sehen",
    t1_q: "Wie heißt die Grundform (Infinitiv) von 'Ich rufe an'?",
    t1_q_a: "anrufen", t1_q_b: "ausrufen", t1_q_c: "mitrufen", t1_q_d: "nachrufen",

    // Topic 2
    t2_title: "Die Satzklammer",
    t2_text: "In einem Satz steht das ragozott Verb an Position 2. Das Präfix aber wandert ganz nach hinten, ans Ende des Satzes! Das nennt man Satzklammer.",
    t2_b1: "Position 2: Das Verb",
    t2_b2: "Satzende: Das Präfix",
    t2_b3: "Beispiel: Ich STEHE früh AUF.",
    t2_inst: "Bringe den Satz in die richtige Reihenfolge!",
    t2_h1: "Suche das ragozott Verb (stehe) für Position 2.",
    t2_h2: "Das Präfix 'auf.' muss ganz am Ende stehen.",
    t2_w1: "Ich", t2_w2: "stehe", t2_w3: "jeden Morgen", t2_w4: "früh", t2_w5: "auf.",
    t2_q: "Wo steht das Präfix (z.B. 'auf') in einem normalen Satz?",
    t2_q_a: "Am Ende des Satzes", t2_q_b: "Direkt nach dem Verb", t2_q_c: "Am Anfang des Satzes", t2_q_d: "Vor dem Subjekt",

    // Topic 3
    t3_title: "Häufige elváló igék",
    t3_text: "Es gibt viele wichtige Verben, die trennbar sind. Du benutzt sie jeden Tag: fernsehen, einkaufen, aufräumen oder anfangen.",
    t3_b1: "fernsehen 📺",
    t3_b2: "einkaufen 🛒",
    t3_b3: "aufräumen 🧹",
    t3_inst: "Welches Präfix fehlt im Satz? 'Mein Vater sieht abends ___.'",
    t3_h1: "Das Verb ist 'fernsehen'. 'sieht' steht schon da.",
    t3_h2: "Wähle das Präfix 'fern'.",
    t3_gap_sentence: "Mein Vater sieht abends {gap}.",
    t3_c1: "fern", t3_c2: "auf", t3_c3: "an",
    t3_q: "Was ist das richtige Verb für: 'Wir ___ im Supermarkt ein.'?",
    t3_q_a: "kaufen", t3_q_b: "rufen", t3_q_c: "stehen", t3_q_d: "sehen",
  },
  en: {
    explorer_title: "Separable Verbs",
    t1_inst: "Which prefix belongs to which verb? Match them!",
    t1_h1: "Think about daily life: auf-stehen, an-rufen, mit-spielen.",
    t1_h2: "Connect the parts to form a meaningful word.",
    t2_inst: "Put the sentence in the correct order!",
    t2_h1: "Find the conjugated verb (stehe) for position 2.",
    t2_h2: "The prefix 'auf.' must go at the very end.",
    t3_inst: "Which prefix is missing in the sentence?",
    t3_h1: "The verb is 'fernsehen' (to watch TV). 'sieht' is already there.",
  },
  hu: {
    explorer_title: "Elváló igék",
    t1_inst: "Melyik igekötő melyik igéhez tartozik? Kösd össze őket!",
    t1_h1: "Gondolj a mindennapokra: fel-kelni, fel-hívni, együtt-játszani.",
    t1_h2: "Párosítsd össze a darabokat értelmes szavakká.",
    t2_inst: "Tedd a mondatot a helyes sorrendbe!",
    t2_h1: "Keresd meg a ragozott igét (stehe) a 2. helyre.",
    t2_h2: "Az igekötőnek (auf.) a mondat legvégére kell kerülnie.",
    t3_inst: "Melyik igekötő hiányzik a mondatból?",
    t3_h1: "Az ige a 'fernsehen' (tévézni). A 'sieht' már ott van.",
  },
  ro: {
    explorer_title: "Verbe separabile",
    t1_inst: "Care prefix aparține cărui verb? Potrivește-le!",
    t1_h1: "Gândește-te la viața de zi cu zi: auf-stehen, an-rufen, mit-spielen.",
    t1_h2: "Conectează părțile pentru a forma un cuvânt cu sens.",
    t2_inst: "Așază propoziția în ordinea corectă!",
    t2_h1: "Caută verbul conjugat (stehe) pentru poziția 2.",
    t2_h2: "Prefixul 'auf.' trebuie să stea la sfârșitul propoziției.",
    t3_inst: "Ce prefix lipsește din propoziție?",
    t3_h1: "Verbul este 'fernsehen' (a se uita la TV). 'sieht' este deja acolo.",
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
        { left: "t1_l2", right: "t1_r2" }, // an-rufen
        { left: "t1_l3", right: "t1_r3" }, // mit-kommen
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
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4],
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
      choices: ["t3_c1", "t3_c2", "t3_c3"],
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
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✂️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SeparableVerbExplorerK3 = memo(function SeparableVerbExplorerK3({
  color = "#F43F5E",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_separable" color={color} lang={lang} onDone={onDone} />;
});

export default SeparableVerbExplorerK3;
