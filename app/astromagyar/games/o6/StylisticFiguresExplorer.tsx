"use client";
// StylisticFiguresExplorer — Grade 6: Szóképek
// Metafora, megszemélyesítés, allegória, szinesztézia

import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: "Szóképek",
    round1Title: "Metafora",
    round1Hint: "A metafora két dolog között titkos hasonlóságot fejez ki.",
    round1Text: "A metafora közvetlenül, hasonlítószavak nélkül (mint, olyan) fejeződik ki. Pl: 'Az élet egy folyó.' / 'A szeme csillagok voltak.'",
    round2Title: "Hasonlat",
    round2Hint: "A hasonlat explicit módon fejezi ki az összevetést.",
    round2Text: "A hasonlat 'mint', 'olyan', 'olyan... mint' kifejezéseket használ. Pl: 'Csillagok születnek olyan fénnyel, mint új remények.'",
    round3Title: "Megszemélyesítés",
    round3Hint: "Az élettelen dolgok emberi tulajdonságokat kapnak.",
    round3Text: "Pl: 'A szél keseregett az utcákon.' / 'Az idő halad' (mozgás az időnek).",
    round4Title: "Allegória és szinesztézia",
    round4Hint: "Az allegória történet formájában fejez ki erkölcsi igazságot.",
    round4Text: "A szinesztézia érzékek közötti átjárást fejez ki: 'sötét zaj', 'meleg szín', 'könnyű illat'.",
    round5Title: "Vegyes szóképek",
    round5Hint: "Csoportosítsd a szóképeket típus szerint!",
    round5Text: "Minden szókép azért létezik, hogy a szöveg kifejezőbb, érzékletesebb legyen.",
    q1: "Mi a metafora legfontosabb jellemzője?",
    a1: "Hasonlítószavak nélkül fejezi ki a viszony",
    b1: "Mindig 'mint' szót használ",
    c1: "Soha nem hasonlít össze dolgokat",
    d1: "Csak költeményekben fordul elő",
    q2: "Mely szóképtípus használ 'mint' vagy 'olyan' szavakat?",
    a2: "Hasonlat",
    b2: "Metafora",
    c2: "Szinesztézia",
    d2: "Allegória",
    q3: "Mi a megszemélyesítés alapja?",
    a3: "Élettelen dolgokra emberi tulajdonságok ruházódnak",
    b3: "Emberek dologgá válnak",
    c3: "Szavak csereháza",
    d3: "Értelmek összemosása",
    q4: "Mely szókép 'sötét zaj' példát fejez ki?",
    a4: "Szinesztézia",
    b4: "Metafora",
    c4: "Allegória",
    d4: "Hasonlat",
    q5: "Mi az allegória funkciója?",
    a5: "Erkölcsi igazságot fejez ki történet formájában",
    b5: "Emberi tulajdonságokat ad dolgoknak",
    c5: "Érzékeket összekeveri",
    d5: "Szavak összehasonlítása",
    next: "Tovább",
    finish: "Kész",
  },
  de: {
    title: "Stilistische Figuren",
    round1Title: "Metapher",
    round1Hint: "Die Metapher drückt eine geheime Ähnlichkeit aus.",
    round1Text: "Die Metapher wird direkt ohne Vergleichswörter ausgedrückt.",
    round2Title: "Vergleich",
    round2Hint: "Der Vergleich drückt die Gegenüberstellung explizit aus.",
    round2Text: "Der Vergleich verwendet 'wie' oder 'als ob'.",
    round3Title: "Personifikation",
    round3Hint: "Unbelebte Dinge erhalten menschliche Eigenschaften.",
    round3Text: "Zum Beispiel: 'Der Wind weinte auf den Straßen.'",
    round4Title: "Allegorie und Synästhesie",
    round4Hint: "Allegorie drückt moralische Wahrheit in Geschichtenform aus.",
    round4Text: "Synästhesie verbindet verschiedene Sinneswahrnehmungen.",
    round5Title: "Gemischte Figuren",
    round5Hint: "Gruppiere die Figuren nach Typ!",
    round5Text: "Jede Figur existiert, um den Text ausdrucksvoller zu machen.",
    q1: "Was ist das Hauptmerkmal einer Metapher?",
    a1: "Sie drückt Beziehung ohne Vergleichswörter aus",
    b1: "Sie verwendet immer das Wort 'wie'",
    c1: "Sie vergleicht niemals Dinge",
    d1: "Sie kommt nur in Gedichten vor",
    q2: "Welche Figur verwendet 'wie' oder 'als ob'?",
    a2: "Vergleich",
    b2: "Metapher",
    c2: "Synästhesie",
    d2: "Allegorie",
    q3: "Was ist die Grundlage der Personifikation?",
    a3: "Unbelebten Dingen werden menschliche Eigenschaften gegeben",
    b3: "Menschen werden zu Dingen",
    c3: "Austausch von Wörtern",
    d3: "Vermischung von Bedeutungen",
    q4: "Welche Figur drückt 'dunkler Lärm' aus?",
    a4: "Synästhesie",
    b4: "Metapher",
    c4: "Allegorie",
    d4: "Vergleich",
    q5: "Welche Funktion hat Allegorie?",
    a5: "Sie drückt moralische Wahrheit in Geschichtenform aus",
    b5: "Sie gibt Dingen menschliche Eigenschaften",
    c5: "Sie vermischt Sinne",
    d5: "Sie vergleicht Wörter",
  },
  en: {
    title: "Stylistic Figures",
    round1Title: "Metaphor",
    round1Hint: "Metaphor expresses hidden similarity.",
    round1Text: "Metaphor is expressed directly without comparison words.",
    round2Title: "Simile",
    round2Hint: "Simile explicitly expresses comparison.",
    round2Text: "Simile uses 'like' or 'as if'.",
    round3Title: "Personification",
    round3Hint: "Inanimate things receive human qualities.",
    round3Text: "For example: 'The wind wept on the streets.'",
    round4Title: "Allegory and Synesthesia",
    round4Hint: "Allegory expresses moral truth in story form.",
    round4Text: "Synesthesia combines different senses.",
    round5Title: "Mixed Figures",
    round5Hint: "Group the figures by type!",
    round5Text: "Every figure exists to make the text more expressive.",
    q1: "What is the main feature of metaphor?",
    a1: "It expresses relationship without comparison words",
    b1: "It always uses the word 'like'",
    c1: "It never compares things",
    d1: "It only appears in poems",
    q2: "Which figure uses 'like' or 'as if'?",
    a2: "Simile",
    b2: "Metaphor",
    c2: "Synesthesia",
    d2: "Allegory",
    q3: "What is the basis of personification?",
    a3: "Inanimate things are given human qualities",
    b3: "People become things",
    c3: "Exchange of words",
    d3: "Mixture of meanings",
    q4: "Which figure expresses 'dark sound'?",
    a4: "Synesthesia",
    b4: "Metaphor",
    c4: "Allegory",
    d4: "Simile",
    q5: "What function does allegory have?",
    a5: "It expresses moral truth in story form",
    b5: "It gives things human qualities",
    c5: "It mixes senses",
    d5: "It compares words",
  },
  ro: {
    title: "Figuri stilistice",
    round1Title: "Metaforă",
    round1Hint: "Metafora exprimă o asemănare ascunsă.",
    round1Text: "Metafora se exprimă direct fără cuvinte de comparație.",
    round2Title: "Comparație",
    round2Hint: "Comparația exprimă explicit comparația.",
    round2Text: "Comparația folosește 'ca' sau 'parcă'.",
    round3Title: "Personificare",
    round3Hint: "Lucrurile inanimare primesc proprietăți umane.",
    round3Text: "De exemplu: 'Vântul plânse pe străzi.'",
    round4Title: "Alegorie și sinestesie",
    round4Hint: "Alegoria exprimă adevăr moral în formă de poveste.",
    round4Text: "Sinestesia combină senzații diferite.",
    round5Title: "Figuri mixte",
    round5Hint: "Grupează figurile după tip!",
    round5Text: "Fiecare figură există pentru a face textul mai expresiv.",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "round1Title",
      infoText: "round1Text",
      hintKey: "round1Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#00D4FF22" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">
            🎭
          </text>
        </svg>
      ),
    },
    {
      type: "info",
      infoTitle: "round2Title",
      infoText: "round2Text",
      hintKey: "round2Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#00D4FF22" />
          <text x="120" y="90" textAnchor="middle" fontSize="45" fill="#00D4FF">
            🪜
          </text>
        </svg>
      ),
    },
    {
      type: "mcq",
      infoTitle: "round3Title",
      infoText: "round3Text",
      hintKey: "round3Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#00D4FF22" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">
            👤
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "a1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "round4Title",
      infoText: "round4Text",
      hintKey: "round4Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#00D4FF22" />
          <text x="120" y="90" textAnchor="middle" fontSize="40" fill="#00D4FF">
            ✨
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "a2",
        },
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "a3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "round5Title",
      infoText: "round5Text",
      hintKey: "round5Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#00D4FF22" />
          <text x="120" y="90" textAnchor="middle" fontSize="40" fill="#00D4FF">
            🎨
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "a4",
        },
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "a5",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function StylisticFiguresExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
