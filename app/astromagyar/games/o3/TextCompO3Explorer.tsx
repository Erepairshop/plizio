"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szövegértés alapjai", tx1: "A szövegértés azt jelenti, hogy megértjük az olvasott szöveg jelentését. Meg kell figyelni a bekezdéseket és a lényeg szavakat.",
    q1: "Mi az a szövegértés?", a1: "A szöveg lényegének megértése", b1: "Az összes szó megjegyzése", c1: "A gyors olvasás", d1: "Az írásbeliség",

    t2: "Bekezdések felismerése", tx2: "A szövegek bekezdésekre osztottak. Egy bekezdés egy ötletről szól. Az elején új sor kezdődik.",
    q2: "Hány bekezdésből áll a szöveg általában?", a2: "Az egyes szövegek különböző számú bekezdésből állnak", b2: "Mindig egy bekezdésből", c2: "Mindig három bekezdésből", d2: "Szövegek nem összeférhető bekezdésekből",

    t3: "Főmondat és részletek", tx3: "Minden bekezdésnek van egy főmondata, amely az ötlet fő gondolata. A többi mondat részleteket ad hozzá.",
    q3: "Mi a bekezdés főmondata?", a3: "Az ötlet fő gondolata", b3: "Az utolsó mondat", c3: "A leghosszabb mondat", d3: "Az összes mondat egyforma",

    t4: "Szövegből tanulás", tx4: "Az olvasottból tanulunk. Figyelnünk kell az új információkra és a fontosabb részletekre.",
    q4: "Mit csinálunk az olvasott szöveggel?", a4: "Megjegyezzük a lényeget és a fontos részleteket", b4: "Megjegyezzük a minden szót", c4: "Elhagyjuk a gondolatot után", d4: "Nincs szükség a memóriára",

    t5: "Szövegértés gyakorlása", tx5: "A szövegértés fejlődik az olvasással és gyakorlásával. Rendszeres olvasás javítja a megértést.",
    q5: "Hogyan fejleszthető a szövegértés?", a5: "Rendszeres olvasással és a szövegről gondolkodással", b5: "Egyáltalán nem lehet fejleszteni", c5: "Csak hallgatással", d5: "Írásból nem tanulható",
  },
  de: {
    t1: "Grundlagen des Textverständnisses", tx1: "Das Textverständnis bedeutet, den Sinn des gelesenen Textes zu verstehen. Man muss auf Absätze und Schlüsselwörter achten.",
    q1: "Was ist Textverständnis?", a1: "Das Verstehen der Textbedeutung", b1: "Das Merken aller Wörter", c1: "Das schnelle Lesen", d1: "Die Schriftlichkeit",

    t2: "Absätze erkennen", tx2: "Texte sind in Absätze unterteilt. Ein Absatz behandelt eine Idee. Am Anfang beginnt eine neue Zeile.",
    q2: "Wie viele Absätze hat ein Text?", a2: "Je nach Text unterschiedlich viele", b2: "Immer einen Absatz", c2: "Immer drei Absätze", d2: "Texte haben keine Absätze",

    t3: "Hauptsatz und Details", tx3: "Jeder Absatz hat einen Hauptsatz, der die Hauptidee ausdrückt. Die anderen Sätze geben Details hinzu.",
    q3: "Was ist der Hauptsatz eines Absatzes?", a3: "Die Hauptidee", b3: "Der letzte Satz", c3: "Der längste Satz", d3: "Alle Sätze sind gleich",

    t4: "Aus Texten lernen", tx4: "Wir lernen aus dem, was wir lesen. Wir müssen auf neue Informationen und wichtige Details achten.",
    q4: "Was tun wir mit dem gelesenen Text?", a4: "Wir merken uns die Kernideen und wichtigen Details", b4: "Wir merken uns jedes Wort", c4: "Wir vergessen den Gedanken", d4: "Gedächtnis ist nicht nötig",

    t5: "Textverständnis üben", tx5: "Das Textverständnis entwickelt sich durch Lesen und Üben. Regelmäßiges Lesen verbessert das Verständnis.",
    q5: "Wie kann man Textverständnis entwickeln?", a5: "Durch regelmäßiges Lesen und Nachdenken über den Text", b5: "Es kann nicht entwickelt werden", c5: "Nur durch Hören", d5: "Man lernt nicht aus dem Schreiben",
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
          <rect x="30" y="30" width="180" height="100" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="35" y1="50" x2="205" y2="50" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="35" y1="65" x2="205" y2="65" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="35" y1="80" x2="205" y2="80" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="35" y1="95" x2="205" y2="95" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="35" y1="110" x2="205" y2="110" stroke="#4ECDC4" strokeWidth="1.5" />
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">Szövegértés</text>
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
          <rect x="20" y="25" width="200" height="40" rx="6" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <line x1="25" y1="35" x2="215" y2="35" stroke="#B44DFF" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="45" x2="215" y2="45" stroke="#B44DFF" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="55" x2="215" y2="55" stroke="#B44DFF" strokeWidth="1" opacity="0.6" />
          <rect x="20" y="75" width="200" height="40" rx="6" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <line x1="25" y1="85" x2="215" y2="85" stroke="#95E1D3" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="95" x2="215" y2="95" stroke="#95E1D3" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="105" x2="215" y2="105" stroke="#95E1D3" strokeWidth="1" opacity="0.6" />
          <text x="120" y="145" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Bekezdések</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <circle cx="120" cy="60" r="18" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="67" textAnchor="middle" fontSize="12" fill="#FF6B9D" fontWeight="bold">Fő</text>
          <line x1="80" y1="100" x2="110" y2="80" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="160" y1="100" x2="130" y2="80" stroke="#4ECDC4" strokeWidth="2" />
          <circle cx="80" cy="100" r="10" fill="#4ECDC4" opacity="0.7" />
          <circle cx="160" cy="100" r="10" fill="#4ECDC4" opacity="0.7" />
          <text x="80" y="105" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">D1</text>
          <text x="160" y="105" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">D2</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <rect x="40" y="50" width="160" height="70" rx="6" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <path d="M 60 70 L 80 60 L 100 75 L 120 55 L 140 80 L 160 65 L 180 85" stroke="#4ECDC4" strokeWidth="2" fill="none" />
          <text x="120" y="135" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Tanulás</text>
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
          <circle cx="60" cy="65" r="20" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="60" y="72" textAnchor="middle" fontSize="14" fill="#95E1D3">📖</text>
          <circle cx="180" cy="65" r="20" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="180" y="72" textAnchor="middle" fontSize="14" fill="#B44DFF">🧠</text>
          <path d="M 85 65 Q 120 50 155 65" stroke="#FF6B9D" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          <text x="120" y="40" textAnchor="middle" fontSize="9" fill="#FF6B9D" fontWeight="bold">Gyakorlás</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function TextCompO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
