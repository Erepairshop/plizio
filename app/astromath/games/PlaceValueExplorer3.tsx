"use client";
// PlaceValueExplorer3 — Place value discovery for Grade 3 (island i1)
// Modernized with centralized SVG library

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Place Value Explorer",
    t1_title: "Hundreds, Tens, and Ones",
    t1_text: "A three-digit number is made of three place values: hundreds, tens, and ones. For example, 347 = 3 hundreds + 4 tens + 7 ones.",
    t1_b1: "Each digit has a place value",
    t1_b2: "The leftmost digit is hundreds",
    t1_b3: "Add the parts together to get the number",
    t1_inst: "Build 532: combine the parts!",
    t1_h1: "5 hundreds, 3 tens, 2 ones",
    t1_h2: "The total is 532",
    t1_q: "Which number is 2 hundreds + 6 tens + 8 ones?",
    t1_q_268: "268", t1_q_286: "286", t1_q_628: "628", t1_q_862: "862",
    t2_title: "Breaking Numbers Apart",
    t2_text: "We can split any number into its hundreds, tens, and ones. This is called decomposition. For 534: 534 = 500 + 30 + 4",
    t2_b1: "Decomposition shows the place values",
    t2_b2: "Hundreds always go first",
    t2_b3: "Zeros mean 'no tens' or 'no ones'",
    t2_inst: "Find 407 = 400 + 0 + 7",
    t2_h1: "4 hundreds, 0 tens, 7 ones",
    t2_h2: "400 + 0 + 7 = 407",
    t2_q: "Which decomposition is correct for 520?",
    t2_q_500_20: "500 + 20 + 0", t2_q_500_2: "500 + 2 + 0", t2_q_50_20: "50 + 20 + 0", t2_q_5_2: "5 + 2 + 0",
    t3_title: "Number Line to 1000",
    t3_text: "Numbers grow from left to right on a number line. Each hundred is 100 steps. Knowing place values helps us find numbers quickly on the line.",
    t3_b1: "The number line goes from 0 to 1000",
    t3_b2: "Hundreds are big jumps (0, 100, 200, 300...)",
    t3_b3: "We can locate any 3-digit number",
    t3_inst: "Tap position 350 on the number line!",
    t3_h1: "Between 300 and 400",
    t3_h2: "Exactly in the middle = 350",
    t3_q: "Which number is between 300 and 400 on the number line?",
    t3_q_250: "250", t3_q_350: "350", t3_q_150: "150", t3_q_450: "450",
  },
  de: {
    explorer_title: "Stellenwert-Entdecker",
    t1_title: "Hunderter, Zehner und Einer",
    t1_text: "Eine dreistellige Zahl besteht aus drei Stellenwerten: Hunderter, Zehner und Einer. Zum Beispiel: 347 = 3 Hunderter + 4 Zehner + 7 Einer.",
    t1_b1: "Jede Ziffer hat einen Stellenwert",
    t1_b2: "Die linke Ziffer ist der Hunderter",
    t1_b3: "Addiere die Teile zusammen",
    t1_inst: "Baue 532: Kombiniere die Teile!",
    t1_h1: "5 Hunderter, 3 Zehner, 2 Einer",
    t1_h2: "Die Gesamtzahl ist 532",
    t1_q: "Welche Zahl ist 2 Hunderter + 6 Zehner + 8 Einer?",
    t1_q_268: "268", t1_q_286: "286", t1_q_628: "628", t1_q_862: "862",
    t2_title: "Zahlen zerlegen",
    t2_text: "Wir können jede Zahl in Hunderter, Zehner und Einer aufteilen. Das heißt Zerlegung. Für 534: 534 = 500 + 30 + 4",
    t2_b1: "Zerlegung zeigt die Stellenwerte",
    t2_b2: "Hunderter kommen immer zuerst",
    t2_b3: "Nullen bedeuten 'keine Zehner' oder 'keine Einer'",
    t2_inst: "Finde 407 = 400 + 0 + 7",
    t2_h1: "4 Hunderter, 0 Zehner, 7 Einer",
    t2_h2: "400 + 0 + 7 = 407",
    t2_q: "Welche Zerlegung ist richtig für 520?",
    t2_q_500_20: "500 + 20 + 0", t2_q_500_2: "500 + 2 + 0", t2_q_50_20: "50 + 20 + 0", t2_q_5_2: "5 + 2 + 0",
    t3_title: "Zahlenstrahl bis 1000",
    t3_text: "Zahlen wachsen von links nach rechts auf einem Zahlenstrahl. Jeder Hunderter ist 100 Schritte. Wenn man Stellenwerte kennt, findet man Zahlen schnell.",
    t3_b1: "Der Zahlenstrahl geht von 0 bis 1000",
    t3_b2: "Hunderter sind große Sprünge (0, 100, 200, 300...)",
    t3_b3: "Wir können jede dreistellige Zahl finden",
    t3_inst: "Tippe auf Position 350 auf dem Zahlenstrahl!",
    t3_h1: "Zwischen 300 und 400",
    t3_h2: "Genau in der Mitte = 350",
    t3_q: "Welche Zahl liegt zwischen 300 und 400?",
    t3_q_250: "250", t3_q_350: "350", t3_q_150: "150", t3_q_450: "450",
  },
  hu: {
    explorer_title: "Helyiérték felfedezés",
    t1_title: "Százas, tízes és egyes",
    t1_text: "Egy háromjegyű szám három helyiértékből áll: százas, tízes és egyes. Például: 347 = 3 százas + 4 tízes + 7 egyes.",
    t1_b1: "Minden számjegynek van helyiértéke",
    t1_b2: "A bal szélső számjegy a százas",
    t1_b3: "Add össze a részeket",
    t1_inst: "Építsd fel az 532-t: rakd össze a részeket!",
    t1_h1: "5 százas, 3 tízes, 2 egyes",
    t1_h2: "Az összeg 532",
    t1_q: "Melyik szám az 2 százas + 6 tízes + 8 egyes?",
    t1_q_268: "268", t1_q_286: "286", t1_q_628: "628", t1_q_862: "862",
    t2_title: "Számok szétbontása",
    t2_text: "Bármilyen számot fel lehet bontani százasra, tízesre és egyesre. Ez a szétbontás. A 534-nél: 534 = 500 + 30 + 4",
    t2_b1: "A szétbontás mutatja a helyiértékeket",
    t2_b2: "A százas mindig az első",
    t2_b3: "A nullák azt jelentik, hogy 'nincsenek tízesek' vagy 'nincsenek egyesek'",
    t2_inst: "Keresd meg: 407 = 400 + 0 + 7",
    t2_h1: "4 százas, 0 tízes, 7 egyes",
    t2_h2: "400 + 0 + 7 = 407",
    t2_q: "Melyik szétbontás helyes az 520-ra?",
    t2_q_500_20: "500 + 20 + 0", t2_q_500_2: "500 + 2 + 0", t2_q_50_20: "50 + 20 + 0", t2_q_5_2: "5 + 2 + 0",
    t3_title: "Számegyenes 1000-ig",
    t3_text: "A számok balról jobbra nőnek a számegyenesen. Mindegyik százas 100 lépés. Ha ismerjük a helyiértékeket, gyorsan találunk számokat.",
    t3_b1: "A számegyenes 0-tól 1000-ig megy",
    t3_b2: "A százasok nagy ugrások (0, 100, 200, 300...)",
    t3_b3: "Bármelyik háromjegyű számot meg tudjuk találni",
    t3_inst: "Koppints a 350 helyes pozíciójára a számegyenesen!",
    t3_h1: "300 és 400 között",
    t3_h2: "Pontosan középen = 350",
    t3_q: "Melyik szám van 300 és 400 között?",
    t3_q_250: "250", t3_q_350: "350", t3_q_150: "150", t3_q_450: "450",
  },
  ro: {
    explorer_title: "Explorare valori poziționale",
    t1_title: "Sute, zeci și unități",
    t1_text: "Un număr cu trei cifre este format din trei valori poziționale: sute, zeci și unități. De exemplu: 347 = 3 sute + 4 zeci + 7 unități.",
    t1_b1: "Fiecare cifră are o valoare pozițională",
    t1_b2: "Cifra din stânga sunt sutele",
    t1_b3: "Adaugă părțile pentru a obține numărul",
    t1_inst: "Construiește 532: combină părțile!",
    t1_h1: "5 sute, 3 zeci, 2 unități",
    t1_h2: "Totalul este 532",
    t1_q: "Care este numărul cu 2 sute + 6 zeci + 8 unități?",
    t1_q_268: "268", t1_q_286: "286", t1_q_628: "628", t1_q_862: "862",
    t2_title: "Descompunerea numerelor",
    t2_text: "Putem descompune orice număr în sute, zeci și unități. Aceasta se numește descompunere. Pentru 534: 534 = 500 + 30 + 4",
    t2_b1: "Descompunerea arată valorile poziționale",
    t2_b2: "Sutele vin întotdeauna primele",
    t2_b3: "Zerourile înseamnă 'fără zeci' sau 'fără unități'",
    t2_inst: "Găsește 407 = 400 + 0 + 7",
    t2_h1: "4 sute, 0 zeci, 7 unități",
    t2_h2: "400 + 0 + 7 = 407",
    t2_q: "Care descompunere este corectă pentru 520?",
    t2_q_500_20: "500 + 20 + 0", t2_q_500_2: "500 + 2 + 0", t2_q_50_20: "50 + 20 + 0", t2_q_5_2: "5 + 2 + 0",
    t3_title: "Linia numerelor până la 1000",
    t3_text: "Numerele cresc de la stânga la dreapta pe linia numerelor. Fiecare sută este 100 pași. Dacă cunoaștem valorile poziționale, găsim numerele rapid.",
    t3_b1: "Linia numerelor merge de la 0 la 1000",
    t3_b2: "Sutele sunt salturi mari (0, 100, 200, 300...)",
    t3_b3: "Putem localiza orice număr cu trei cifre",
    t3_inst: "Atinge poziția 350 pe linia numerelor!",
    t3_h1: "Între 300 și 400",
    t3_h2: "Exact la mijloc = 350",
    t3_q: "Care număr este între 300 și 400?",
    t3_q_250: "250", t3_q_350: "350", t3_q_150: "150", t3_q_450: "450",
  },
};

// ─── Topic definitions ────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "math-diagram", name: "PlaceValue3DSvg", props: { hundreds: 3, tens: 4, ones: 7 } },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [3, 4, 7],
      answer: 14,
      blockIcon: "🔢",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_268", "t1_q_286", "t1_q_628", "t1_q_862"],
      answer: "t1_q_268",
    },
    quizSvg: { type: "math-diagram", name: "PlaceValue3DSvg", props: { hundreds: 2, tens: 6, ones: 8 } },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "math-diagram", name: "PlaceValue3DSvg", props: { hundreds: 5, tens: 3, ones: 4 } },
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [5, 3, 4],
      answer: 12,
      blockIcon: "🔢",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_500_20", "t2_q_500_2", "t2_q_50_20", "t2_q_5_2"],
      answer: "t2_q_500_20",
    },
    quizSvg: { type: "math-diagram", name: "PlaceValue3DSvg", props: { hundreds: 5, tens: 2, ones: 0 } },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "math-diagram", name: "NumberLineSvg", props: { highlight: 3, max: 10 } },
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 400,
      start: 0,
      target: 275,
      step: 25,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_250", "t3_q_350", "t3_q_150", "t3_q_450"],
      answer: "t3_q_350",
    },
    quizSvg: { type: "math-diagram", name: "NumberLineSvg", props: { highlight: 7, max: 10 } },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔢",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ──────────────────────────────────────────────────────────────────

const PlaceValueExplorer3 = memo(function PlaceValueExplorer3({
  color = "#B44DFF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="math_g3_placevalue" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValueExplorer3;
