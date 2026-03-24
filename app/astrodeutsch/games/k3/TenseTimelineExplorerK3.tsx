"use client";
// TenseTimelineExplorerK3 — Island i5: Objekte & Zeitformen (Objects & Tenses)
// Topics: 1) Das Akkusativ-Objekt (Wen oder was?) 2) Präsens vs. Perfekt 3) Perfekt-Satzbau

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-30" fontSize="14" fontWeight="bold" fill="#0369A1" textAnchor="middle">Akkusativ-Objekt</text>
        <rect x="-40" y="-10" width="80" height="40" rx="5" fill="#BAE6FD" stroke="#0EA5E9" strokeWidth="2" />
        <text x="0" y="15" fontSize="18" textAnchor="middle">🎁</text>
        <text x="0" y="50" fontSize="12" fontWeight="bold" fill="#0284C7" textAnchor="middle">Wen oder was?</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <line x1="-100" y1="20" x2="100" y2="20" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrow)" />
        <circle cx="-50" cy="20" r="6" fill="#059669" />
        <text x="-50" y="5" fontSize="10" fill="#047857" textAnchor="middle">Vergangenheit (Perfekt)</text>
        
        <circle cx="50" cy="20" r="8" fill="#10B981" stroke="white" strokeWidth="2" />
        <text x="50" y="5" fontSize="10" fontWeight="bold" fill="#065F46" textAnchor="middle">Jetzt (Präsens)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="50" height="30" rx="4" fill="#FFEDD5" stroke="#F97316" />
        <text x="-65" y="5" fontSize="12" fontWeight="bold" fill="#9A3412" textAnchor="middle">haben</text>
        
        <text x="0" y="5" fontSize="14" fill="#C2410C" textAnchor="middle">...</text>
        
        <rect x="40" y="-15" width="55" height="30" rx="4" fill="#FED7AA" stroke="#F97316" />
        <text x="67" y="5" fontSize="12" fontWeight="bold" fill="#9A3412" textAnchor="middle">ge-spiel-t</text>
        
        <path d="M -65,20 Q 0,40 67,20" fill="none" stroke="#EA580C" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Objekte & Zeitformen",
    // Topic 1
    t1_title: "Das Akkusativ-Objekt",
    t1_text: "Das Objekt ergänzt den Satz. Das Akkusativ-Objekt antwortet auf die Frage: Wen oder was? Viele Verben (wie essen, sehen, haben) brauchen ein Objekt.",
    t1_b1: "Ich esse EINEN APFEL. (Was esse ich?)",
    t1_b2: "Ich sehe DEN HUND. (Wen sehe ich?)",
    t1_b3: "Achtung: Der Artikel ändert sich (der -> den).",
    t1_inst: "Finde das Akkusativ-Objekt im Satz!",
    t1_h1: "Frage: Wen oder was liest das Mädchen?",
    t1_h2: "Das Objekt ist 'ein spannendes Buch'.",
    t1_w1: "Das", t1_w2: "Mädchen", t1_w3: "liest", t1_w4: "ein", t1_w5: "spannendes", t1_w6: "Buch.",
    t1_q: "Wie fragt man nach dem Akkusativ-Objekt?",
    t1_q_a: "Wen oder was?", t1_q_b: "Wer oder was?", t1_q_c: "Wo?", t1_q_d: "Wie?",

    // Topic 2
    t2_title: "Präsens und Perfekt",
    t2_text: "Wir benutzen das Präsens, wenn etwas jetzt passiert. Wenn wir über etwas sprechen, das schon fertig ist, benutzen wir oft das Perfekt.",
    t2_b1: "Präsens: Ich spiele Fußball.",
    t2_b2: "Perfekt: Ich habe Fußball gespielt.",
    t2_b3: "Perfekt = haben/sein + Partizip II (ge...t)",
    t2_inst: "In welcher Zeitform steht der Satz? Sortiere sie!",
    t2_h1: "Sätze mit 'habe' und 'ge...' am Ende sind im Perfekt.",
    t2_h2: "Ein einfaches Verb (wie 'lacht') steht im Präsens.",
    t1_bucket_praesens: "Präsens (Jetzt)",
    t1_bucket_perfekt: "Perfekt (Vergangen)",
    t2_item_p1: "Ich lache viel.", t2_item_p2: "Du gehst nach Hause.",
    t2_item_pf1: "Ich habe viel gelacht.", t2_item_pf2: "Du bist nach Hause gegangen.",
    t2_q: "Aus welchen zwei Teilen besteht das Perfekt?",
    t2_q_a: "Hilfsverb + Partizip II", t2_q_b: "Nomen + Adjektiv", t2_q_c: "Zwei Verben im Präsens", t2_q_d: "Nur ein Verb mit 'ge-'",

    // Topic 3
    t3_title: "Satzbau im Perfekt",
    t3_text: "Im Perfekt-Satz bilden das Hilfsverb (haben/sein) und das Partizip II eine Klammer. Das Hilfsverb steht an Position 2, das Partizip II steht ganz am Ende.",
    t3_b1: "Ich HABE den Film GESEHEN.",
    t3_b2: "Haben/Sein wird konjugiert (ich habe, du hast...)",
    t3_b3: "Das Partizip II bleibt immer gleich.",
    t3_inst: "Welche Form des Hilfsverbs passt? 'Du ___ heute viel gelernt.'",
    t3_h1: "Wer ist das Subjekt? Es ist 'du'.",
    t3_h2: "Die passende Form von 'haben' für 'du' ist 'hast'.",
    t3_gap_sentence: "Du {gap} heute viel gelernt.",
    t3_c1: "hast", t3_c2: "habe", t3_c3: "hat",
    t3_q: "Wo steht das Partizip II (z.B. 'gegessen') im Perfekt-Satz?",
    t3_q_a: "Ganz am Ende", t3_q_b: "An Position 2", t3_q_c: "Direkt vor dem Hilfsverb", t3_q_d: "Am Satzanfang",
  },
  en: {
    explorer_title: "Objects & Tenses",
    t1_inst: "Find the accusative object in the sentence!",
    t1_h1: "Question: Who or what is the girl reading?",
    t1_h2: "The object is 'ein spannendes Buch' (an exciting book).",
    t2_inst: "In which tense is the sentence? Sort them!",
    t2_h1: "Sentences with 'habe' and 'ge...' at the end are in the Perfect tense.",
    t2_h2: "A simple verb (like 'lacht') is in the Present tense.",
    t1_bucket_praesens: "Present (Now)",
    t1_bucket_perfekt: "Perfect (Past)",
    t3_inst: "Which form of the auxiliary verb fits?",
    t3_h1: "Who is the subject? It is 'du' (you).",
    t3_h2: "The matching form of 'haben' for 'du' is 'hast'.",
  },
  hu: {
    explorer_title: "Tárgy és Igeidők",
    t1_inst: "Keresd meg a tárgyat a mondatban!",
    t1_h1: "Kérdés: Mit olvas a lány?",
    t1_h2: "A tárgy: 'ein spannendes Buch'.",
    t2_inst: "Melyik igeidőben van a mondat? Válogasd szét őket!",
    t2_h1: "A 'habe' és a mondat végi 'ge...' a befejezett múltra (Perfekt) utal.",
    t2_h2: "Az egyszerű igealak (pl. 'lacht') jelen időben (Präsens) van.",
    t1_bucket_praesens: "Jelen (Most)",
    t1_bucket_perfekt: "Múlt (Befejezett)",
    t3_inst: "A segédige melyik alakja illik oda?",
    t3_h1: "Ki az alany? Az 'du' (te).",
    t3_h2: "A 'haben' ragozott alakja 'du' mellett: 'hast'.",
  },
  ro: {
    explorer_title: "Obiecte și Timpuri verbale",
    t1_inst: "Găsește obiectul (în cazul acuzativ) în propoziție!",
    t1_h1: "Întrebare: Pe cine sau ce citește fata?",
    t1_h2: "Obiectul este 'ein spannendes Buch'.",
    t2_inst: "La ce timp este propoziția? Sortează-le!",
    t2_h1: "Propozițiile cu 'habe' și 'ge...' la sfârșit sunt la perfect compus (Perfekt).",
    t2_h2: "Un verb simplu (ca 'lacht') este la prezent (Präsens).",
    t1_bucket_praesens: "Prezent (Acum)",
    t1_bucket_perfekt: "Perfect (Trecut)",
    t3_inst: "Ce formă a verbului auxiliar se potrivește?",
    t3_h1: "Cine este subiectul? Este 'du'.",
    t3_h2: "Forma corectă a lui 'haben' pentru 'du' este 'hast'.",
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
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], // Das Mädchen liest ein spannendes Buch.
      correctIndices: [3, 4, 5], // ein spannendes Buch
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
        { id: "praesens", label: "t1_bucket_praesens" },
        { id: "perfekt", label: "t1_bucket_perfekt" },
      ],
      items: [
        { text: "t2_item_p1", bucketId: "praesens" },
        { text: "t2_item_pf1", bucketId: "perfekt" },
        { text: "t2_item_p2", bucketId: "praesens" },
        { text: "t2_item_pf2", bucketId: "perfekt" },
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
      type: "gap-fill",
      sentence: "t3_gap_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"], // hast, habe, hat
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
  icon: "⏳",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const TenseTimelineExplorerK3 = memo(function TenseTimelineExplorerK3({
  color = "#14B8A6",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_tense" color={color} lang={lang} onDone={onDone} />;
});

export default TenseTimelineExplorerK3;
