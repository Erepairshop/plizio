"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Kijelentő mondat", tx1: "A kijelentő mondat egy állítást fejez ki, és ponttal végződik. Például: Anna szép virágokat szedett.",
    q1: "Melyik a kijelentő mondat?", a1: "Anna szép virágokat szedett.", b1: "Anna szép virágokat szedett?", c1: "Anna szép virágokat szedett!", d1: "Anna szép virágokat szedett.",

    t2: "Kérdő mondat", tx2: "A kérdő mondat egy kérdést fejez ki, és kérdőjellel végződik. Például: Merre mész?",
    q2: "Melyik a kérdő mondat?", a2: "Hol lakol.", b2: "Hol lakol?", c2: "Hol lakol!", d2: "Hol lakol,",

    t3: "Felszólító mondat", tx3: "A felszólító mondat egy parancsot vagy kérést fejez ki, és felkiáltójellel végződik. Például: Ülj le!",
    q3: "Melyik a felszólító mondat?", a3: "Menj el", b3: "Menj el.", c3: "Menj el?", d3: "Menj el!",

    t4: "Mondatok pontosítása", tx4: "Az interpunkció (pont, kérdőjel, felkiáltójel) segít a mondatok helyes értelmezésében.",
    q4: "Mi a különbség a mondat típusok között?", a4: "A végzet interpunkció", b4: "A szavak", c4: "A hossz", d4: "A szín",

    t5: "Mondattan gyakorlása", tx5: "A helyes mondattan használatával tisztábban tudjuk kifejezni gondolatainkat.",
    q5: "Melyik mondatpár helyesen írva?", a5: "Mit csináltál? Tudok játszani.", b5: "Mit csináltál. Tudok játszani!", c5: "Mit csináltál? Tudok játszani!", d5: "Mit csináltál! Tudok játszani?",
  },
  de: {
    t1: "Aussagesatz", tx1: "Der Aussagesatz drückt eine Aussage aus und endet mit einem Punkt. Zum Beispiel: Anna hat schöne Blumen gepflückt.",
    q1: "Welcher ist ein Aussagesatz?", a1: "Anna hat schöne Blumen gepflückt.", b1: "Anna hat schöne Blumen gepflückt?", c1: "Anna hat schöne Blumen gepflückt!", d1: "Anna hat schöne Blumen gepflückt.",

    t2: "Fragesatz", tx2: "Der Fragesatz drückt eine Frage aus und endet mit einem Fragezeichen. Zum Beispiel: Wohin gehst du?",
    q2: "Welcher ist ein Fragesatz?", a2: "Wo wohnst du.", b2: "Wo wohnst du?", c2: "Wo wohnst du!", d2: "Wo wohnst du,",

    t3: "Aufforderungssatz", tx3: "Der Aufforderungssatz drückt einen Befehl oder eine Bitte aus und endet mit einem Ausrufezeichen. Zum Beispiel: Sitz hin!",
    q3: "Welcher ist ein Aufforderungssatz?", a3: "Geh weg", b3: "Geh weg.", c3: "Geh weg?", d3: "Geh weg!",

    t4: "Satzzeichen Klarstellung", tx4: "Die Satzzeichen (Punkt, Fragezeichen, Ausrufezeichen) helfen bei der korrekten Interpretation von Sätzen.",
    q4: "Was ist der Unterschied zwischen den Satztypen?", a4: "Das Satzzeichen am Ende", b4: "Die Wörter", c4: "Die Länge", d4: "Die Farbe",

    t5: "Satzlehre üben", tx5: "Mit korrekter Satzlehre können wir unsere Gedanken klarer ausdrücken.",
    q5: "Welches Satzpaar ist korrekt geschrieben?", a5: "Was hast du gemacht? Ich kann spielen.", b5: "Was hast du gemacht. Ich kann spielen!", c5: "Was hast du gemacht? Ich kann spielen!", d5: "Was hast du gemacht! Ich kann spielen?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a52" />
          <rect x="30" y="40" width="180" height="50" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="70" textAnchor="middle" fontSize="14" fill="#4ECDC4" fontWeight="bold">Anna játszik.</text>
          <circle cx="210" cy="70" r="8" fill="#4ECDC4" />
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="30" y="40" width="180" height="50" rx="8" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="70" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">Hol vagy?</text>
          <circle cx="210" cy="70" r="8" fill="#B44DFF" />
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="30" y="40" width="180" height="50" rx="8" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="70" textAnchor="middle" fontSize="14" fill="#FF6B9D" fontWeight="bold">Ülj le!</text>
          <circle cx="210" cy="70" r="8" fill="#FF6B9D" />
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "d3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <circle cx="60" cy="50" r="10" fill="#4ECDC4" opacity="0.3" />
          <text x="60" y="55" textAnchor="middle" fontSize="16" fill="#4ECDC4" fontWeight="bold">.</text>
          <circle cx="120" cy="50" r="10" fill="#FF9500" opacity="0.3" />
          <text x="120" y="55" textAnchor="middle" fontSize="16" fill="#FF9500" fontWeight="bold">?</text>
          <circle cx="180" cy="50" r="10" fill="#FF6B9D" opacity="0.3" />
          <text x="180" y="55" textAnchor="middle" fontSize="16" fill="#FF6B9D" fontWeight="bold">!</text>
          <text x="60" y="120" textAnchor="middle" fontSize="10" fill="white/60">Kijelentő</text>
          <text x="120" y="120" textAnchor="middle" fontSize="10" fill="white/60">Kérdő</text>
          <text x="180" y="120" textAnchor="middle" fontSize="10" fill="white/60">Felszólító</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="20" y="30" width="200" height="100" rx="8" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="30" y="55" fontSize="11" fill="#95E1D3">1. Mit csináltál?</text>
          <text x="30" y="75" fontSize="11" fill="#95E1D3">2. Tudok játszani!</text>
          <text x="30" y="95" fontSize="11" fill="#95E1D3">3. Merre mentek.</text>
          <circle cx="220" cy="55" r="6" fill="#4ECDC4" />
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "c5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function GrammarO2Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
