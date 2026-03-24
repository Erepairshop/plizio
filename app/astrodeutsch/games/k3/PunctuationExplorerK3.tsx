"use client";
// PunctuationExplorerK3 — Island i8: Zeichensetzung (Punctuation)
// Topics: 1) Aufzählungen & Komma 2) Satzende (. ! ?) 3) Anführungszeichen (Review)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-35" fontSize="16" fontWeight="bold" fill="#166534" textAnchor="middle">Das Komma ( , )</text>
        <text x="0" y="-5" fontSize="12" fill="#15803D" textAnchor="middle">Apfel, Birne und Ei</text>
        <path d="M -32,2 L -32,10 L -35,8" fill="none" stroke="#166534" strokeWidth="2" />
        <text x="0" y="30" fontSize="12" fill="#15803D" textAnchor="middle">..., dass / ..., weil</text>
        <path d="M -28,38 L -28,46 L -31,44" fill="none" stroke="#166534" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="-60" cy="0" r="25" fill="#C7D2FE" stroke="#4338CA" strokeWidth="2" />
        <text x="-60" y="10" fontSize="30" fontWeight="bold" fill="#312E81" textAnchor="middle">.</text>
        
        <circle cx="0" cy="0" r="25" fill="#A5B4FC" stroke="#4338CA" strokeWidth="2" />
        <text x="0" y="10" fontSize="30" fontWeight="bold" fill="#312E81" textAnchor="middle">!</text>
        
        <circle cx="60" cy="0" r="25" fill="#818CF8" stroke="#4338CA" strokeWidth="2" />
        <text x="60" y="10" fontSize="30" fontWeight="bold" fill="#312E81" textAnchor="middle">?</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="14" fontWeight="bold" fill="#9A3412" textAnchor="middle">Wörtliche Rede</text>
        <text x="0" y="20" fontSize="24" fontWeight="black" fill="#EA580C" textAnchor="middle">„ ... “</text>
        <path d="M -40,35 L 40,35" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" />
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zeichensetzung",
    // Topic 1
    t1_title: "Das Komma setzen",
    t1_text: "Das Komma hilft uns, Sätze zu ordnen. Wir brauchen es bei Aufzählungen (zwischen den Wörtern, aber nicht vor 'und') und vor Bindewörtern wie 'dass' oder 'weil'.",
    t1_b1: "Aufzählung: Ich mag Äpfel, Birnen und Bananen.",
    t1_b2: "Vor 'dass': Ich weiß, dass du kommst.",
    t1_b3: "Vor 'weil': Ich lache, weil es lustig ist.",
    t1_inst: "Wo muss ein Komma hin? Markiere die richtigen Stellen!",
    t1_h1: "Suche das Wort 'weil'. Davor muss immer ein Komma stehen.",
    t1_h2: "Markiere die Lücke vor 'weil'.",
    t1_w1: "Ich", t1_w2: "bin", t1_w3: "froh", t1_w4: "[komma]", t1_w5: "weil", t1_w6: "heute", t1_w7: "die", t1_w8: "Sonne", t1_w9: "scheint.",
    t1_q: "Wann setzen wir KEIN Komma in einer Aufzählung?",
    t1_q_a: "Vor dem Wort 'und'", t1_q_b: "Zwischen zwei Nomen", t1_q_c: "Vor dem Wort 'weil'", t1_q_d: "Nach dem ersten Wort",

    // Topic 2
    t2_title: "Satzende-Check",
    t2_text: "Am Ende eines Satzes steht immer ein Zeichen. Der Punkt (.) für Aussagen, das Fragezeichen (?) für Fragen und das Ausrufezeichen (!) für Befehle oder Ausrufe.",
    t2_b1: "Aussage: Heute ist Montag.",
    t2_b2: "Frage: Kommst du mit?",
    t2_b3: "Befehl: Pass jetzt auf!",
    t2_inst: "Welches Satzzeichen fehlt? 'Wie alt bist du{gap}'",
    t2_h1: "Das ist eine Frage. Man möchte eine Information wissen.",
    t2_h2: "Fragesätze enden mit egy Fragezeichen: ?",
    t2_gap_sentence: "Wie alt bist du{gap}",
    t2_c1: "?", t2_c2: "!", t2_c3: ".",
    t2_q: "Welches Zeichen nutzt man bei einem starken Befehl (z.B. Stopp!)?",
    t2_q_a: "Ausrufezeichen (!)", t2_q_b: "Punkt (.)", t2_q_c: "Fragezeichen (?)", t2_q_d: "Komma (,)",

    // Topic 3
    t3_title: "Rede und Zeichen",
    t3_text: "Bei der wörtlichen Rede müssen die Satzzeichen an der richtigen Stelle stehen. Der Doppelpunkt leitet die Rede ein, und die Anführungszeichen umschließen sie.",
    t3_b1: "Begleitsatz vorne: Er sagt: „...“",
    t3_b2: "Satzzeichen am Ende der Rede stehen VOR dem Anführungszeichen.",
    t3_b3: "Beispiel: Sie ruft: „Komm her!“",
    t3_inst: "Bringe die Satzzeichen in die richtige Reihenfolge!",
    t3_h1: "Zuerst kommt der Begleitsatz mit dem Doppelpunkt.",
    t3_h2: "Dann die Anführungszeichen unten für den Redebeginn.",
    t3_w1: "Mama", t3_w2: "ruft:", t3_w3: "„Essen", t3_w4: "ist", t3_w5: "fertig!“",
    t3_q: "Welches Zeichen steht direkt nach dem Begleitsatz 'Er fragt'?",
    t3_q_a: "Doppelpunkt (:)", t3_q_b: "Komma (,)", t3_q_c: "Anführungszeichen", t3_q_d: "Ausrufezeichen",
  },
  en: {
    explorer_title: "Punctuation",
    t1_inst: "Where does a comma go? Highlight the correct spots!",
    t1_h1: "Look for the word 'weil' (because). A comma always goes before it.",
    t2_inst: "Which punctuation mark is missing? 'Wie alt bist du{gap}' (How old are you?)",
    t2_h1: "This is a question. You want to know something.",
    t3_inst: "Put the sentence and punctuation in the correct order!",
    t3_h1: "First comes the speech intro with the colon.",
    t3_h2: "Then the opening quotation marks at the bottom."
  },
  hu: {
    explorer_title: "Írásjelek",
    t1_inst: "Hová kell a vessző? Jelöld ki a helyes pontokat!",
    t1_h1: "Keresd a 'weil' (mert) szót. Elé mindig kell vessző.",
    t2_inst: "Melyik írásjel hiányzik? 'Wie alt bist du{gap}' (Hány éves vagy?)",
    t2_h1: "Ez egy kérdés. Információt szeretnénk kapni.",
    t3_inst: "Tedd a mondatot és az írásjeleket a helyes sorrendbe!",
    t3_h1: "Először a kísérőmondat jön a kettősponttal.",
    t3_h2: "Aztán az alsó idézőjel a beszéd elején."
  },
  ro: {
    explorer_title: "Punctuație",
    t1_inst: "Unde trebuie pusă virgula? Marchează locurile corecte!",
    t1_h1: "Caută cuvântul 'weil' (deoarece). Virgula stă mereu înaintea lui.",
    t2_inst: "Ce semn de punctuație lipsește? 'Wie alt bist du{gap}' (Câți ani ai?)",
    t2_h1: "Aceasta este o întrebare. Se dorește o informație.",
    t3_inst: "Așază propoziția și semnele de punctuație în ordinea corectă!",
    t3_h1: "Mai întâi vine fraza de însoțire cu două puncte.",
    t3_h2: "Apoi ghilimelele de deschidere jos."
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
      tokens: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9"], // Ich bin froh [komma] weil heute die Sonne scheint.
      correctIndices: [3],
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
      choices: ["t2_c1", "t2_c2", "t2_c3"], // ?, !, .
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
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"], // Mama ruft: „Essen ist fertig!“
      correctOrder: [0, 1, 2, 3, 4],
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
  icon: "✍️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PunctuationExplorerK3 = memo(function PunctuationExplorerK3({
  color = "#6366F1",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="deutsch_k3_punctuation" color={color} lang={lang} onDone={onDone} />;
});

export default PunctuationExplorerK3;
