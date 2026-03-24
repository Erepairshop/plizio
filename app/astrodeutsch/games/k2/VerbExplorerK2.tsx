"use client";
// VerbExplorerK2 — Island i2: Verben & Personalpronomen (Verbs & Pronouns)
// Topics: 1) Verben & ich/du/er  2) wir/ihr/sie  3) Die Befehlsform (Imperativ)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="verbGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#verbGrad1)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="0" y="-20" fontSize="24" fontWeight="bold" fill="#B45309" textAnchor="middle">geh<tspan fill="#D97706">en</tspan></text>
        
        <rect x="-80" y="5" width="45" height="25" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="-57" y="22" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">ich -<tspan fill="#DC2626">e</tspan></text>
        
        <rect x="-25" y="5" width="50" height="25" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="0" y="22" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">du -<tspan fill="#DC2626">st</tspan></text>
        
        <rect x="35" y="5" width="55" height="25" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="62" y="22" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">er/sie -<tspan fill="#DC2626">t</tspan></text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="24" textAnchor="middle">👨‍👩‍👧</text>
        <text x="-50" y="20" fontSize="14" fontWeight="bold" fill="#4338CA" textAnchor="middle">wir (we)</text>
        <text x="-50" y="40" fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">-en</text>
        
        <text x="50" y="-10" fontSize="24" textAnchor="middle">👦👧</text>
        <text x="50" y="20" fontSize="14" fontWeight="bold" fill="#4338CA" textAnchor="middle">ihr (you)</text>
        <text x="50" y="40" fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">-t</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="verbGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F87171" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#verbGrad3)" rx="20" />
      <g transform="translate(120, 70)">
        <text x="-40" y="5" fontSize="24" fontWeight="bold" fill="#B91C1C" textAnchor="middle">Komm!</text>
        <text x="30" y="5" fontSize="24" fontWeight="bold" fill="#B91C1C" textAnchor="middle">Lauf!</text>
        <text x="0" y="35" fontSize="12" fill="#991B1B" textAnchor="middle">Das Verb steht ganz am Anfang!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (Translations) ───────────────────────────────────────────
// K2 Rule: 'de' has full text. 'en/hu/ro' have ONLY UI/instructions.

const LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Verben & Endungen",

    // Topic 1
    t1_title: "Ich, du, er, sie, es",
    t1_text: "Verben (Tunwörter) verändern sich, je nachdem, wer etwas tut. Man nennt das 'Konjugation'. Der Wortstamm bleibt gleich, aber die Endung ändert sich: ich geh-e, du geh-st, er/sie/es geh-t.",
    t1_b1: "ich (I) -> Endung: -e (ich gehe)",
    t1_b2: "du (you) -> Endung: -st (du gehst)",
    t1_b3: "er/sie/es -> Endung: -t (er geht)",
    t1_inst: "Wer tut was? Verbinde das Pronomen mit dem richtigen Verb!",
    t1_h1: "Achte auf die Endung! 'ich' braucht ein '-e'.",
    t1_h2: "'ich' -> 'spiele', 'du' -> 'spielst', 'er' -> 'spielt'.",
    t1_l1: "ich 🙋‍♂️", t1_r1: "spiele ⚽",
    t1_l2: "du 👉", t1_r2: "spielst ⚽",
    t1_l3: "er 👦", t1_r3: "spielt ⚽",
    t1_q: "Welche Endung bekommt das Verb bei 'du'?",
    t1_q_a: "-st", t1_q_b: "-e", t1_q_c: "-t", t1_q_d: "-en",

    // Topic 2
    t2_title: "Wir, ihr, sie",
    t2_text: "Wenn mehrere Personen etwas tun, benutzen wir die Plural-Formen: wir (alle zusammen), ihr (die anderen da) oder sie (viele andere).",
    t2_b1: "wir (we) -> Endung: -en (wir laufen)",
    t2_b2: "ihr (you all) -> Endung: -t (ihr lauft)",
    t2_b3: "sie (they) -> Endung: -en (sie laufen)",
    t2_inst: "Welches Verb passt in die Lücke? 'Wir ___ ein Lied.'",
    t2_h1: "Bei 'wir' endet das Verb fast immer auf '-en'.",
    t2_h2: "Wir singen. 'singt' passt zu 'ihr' oder 'er'.",
    t2_gap_text: "Wir {gap} ein Lied.",
    t2_opt_singen: "singen", t2_opt_singt: "singt", t2_opt_singst: "singst",
    t2_q: "Welches Wort passt: '___ geht in die Schule.'?",
    t2_q_a: "Er", t2_q_b: "Wir", t2_q_c: "Ich", t2_q_d: "Du",

    // Topic 3
    t3_title: "Die Befehlsform",
    t3_text: "Wenn du jemandem sagst, was er tun soll (eine Bitte oder ein Befehl), benutzt du den Imperativ. Das Verb steht dann ganz am Anfang vom Satz und hat bei 'du' oft gar keine Endung!",
    t3_b1: "Komm her! (Kommen -> Komm)",
    t3_b2: "Das Verb steht an Position 1",
    t3_b3: "Am Ende steht oft ein Ausrufezeichen (!)",
    t3_inst: "Bringe den Befehl in die richtige Reihenfolge!",
    t3_h1: "Das Verb (Tunwort) muss ganz nach vorne.",
    t3_h2: "Beginne mit 'Komm', dann 'bitte', 'schnell', 'her!'.",
    t3_w1: "Komm", t3_w2: "bitte", t3_w3: "schnell", t3_w4: "her!",
    t3_q: "Wie lautet die Befehlsform (für 'du') von 'trinken'?",
    t3_q_a: "Trink!", t3_q_b: "Trinkst!", t3_q_c: "Trinken!", t3_q_d: "Trinkt!",
  },
  en: {
    explorer_title: "Verbs & Endings",
    t1_inst: "Who is doing what? Match the pronoun with the correct verb!",
    t1_h1: "Pay attention to the ending! 'ich' needs an '-e'.",
    t1_h2: "'ich' -> 'spiele', 'du' -> 'spielst', 'er' -> 'spielt'.",
    t2_inst: "Which verb fits the gap? 'Wir ___ ein Lied.' (We ___ a song.)",
    t2_h1: "With 'wir' (we), the verb almost always ends in '-en'.",
    t2_h2: "Wir singen (we sing).",
    t3_inst: "Put the command in the correct order!",
    t3_h1: "The verb (action word) must go to the very front.",
    t3_h2: "Start with 'Komm' (Come), then 'bitte' (please), 'schnell' (quickly), 'her!' (here).",
  },
  hu: {
    explorer_title: "Igék és Végződések",
    t1_inst: "Ki mit csinál? Kösd össze a névmást a helyes igével!",
    t1_h1: "Figyelj a végződésre! Az 'ich'-hez '-e' kell.",
    t1_h2: "'ich' -> 'spiele', 'du' -> 'spielst', 'er' -> 'spielt'.",
    t2_inst: "Melyik ige illik az űrbe? 'Wir ___ ein Lied.' (Mi ___ egy dalt.)",
    t2_h1: "A 'wir' (mi) esetében az ige majdnem mindig '-en'-re végződik.",
    t2_h2: "Wir singen (Mi énekelünk).",
    t3_inst: "Tedd sorba a felszólítást!",
    t3_h1: "Az igének (cselekvés) a legelső helyre kell kerülnie.",
    t3_h2: "Kezdd a 'Komm' (Gyere) szóval, majd 'bitte', 'schnell', 'her!'.",
  },
  ro: {
    explorer_title: "Verbe și Terminații",
    t1_inst: "Cine ce face? Potrivește pronumele cu verbul corect!",
    t1_h1: "Atenție la terminație! 'ich' are nevoie de '-e'.",
    t1_h2: "'ich' -> 'spiele', 'du' -> 'spielst', 'er' -> 'spielt'.",
    t2_inst: "Ce verb se potrivește în spațiu? 'Wir ___ ein Lied.' (Noi ___ un cântec.)",
    t2_h1: "Cu 'wir' (noi), verbul se termină aproape mereu în '-en'.",
    t2_h2: "Wir singen (Noi cântăm).",
    t3_inst: "Așează porunca în ordinea corectă!",
    t3_h1: "Verbul (acțiunea) trebuie să stea pe prima poziție.",
    t3_h2: "Începe cu 'Komm' (Vino), apoi 'bitte', 'schnell', 'her!'.",
  },
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ── Topic 1: Pronouns and conjugations (match-pairs) ──
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // ich -> spiele
        { left: "t1_l2", right: "t1_r2" }, // du -> spielst
        { left: "t1_l3", right: "t1_r3" }, // er -> spielt
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // -st
    },
  },
  // ── Topic 2: Plural pronouns (gap-fill) ──
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_text",
      choices: ["t2_opt_singen", "t2_opt_singt", "t2_opt_singst"],
      correctIndex: 0, // singen
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // Er
    },
  },
  // ── Topic 3: Imperative / Befehlsform (word-order) ──
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "word-order",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4"], // Komm bitte schnell her!
      correctOrder: [0, 1, 2, 3],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // Trink!
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🏃",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VerbExplorerK2 = memo(function VerbExplorerK2({
  color = "#F59E0B",
  onDone,
  lang = "de",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="deutsch_k2_verb" color={color} lang={lang} onDone={onDone} />;
});

export default VerbExplorerK2;
