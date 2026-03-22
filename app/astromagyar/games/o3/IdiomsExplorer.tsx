"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szólások és közmondások", tx1: "A szólások rövid kifejezések, amelyeknek a szó szerinti jelentésén túl jelent még van. Például: 'Vékony a jég'.",
    q1: "Mit jelent a 'Hideg a szél' szólás?", a1: "az időjárás hideg", b1: "nagyon fázni", c1: "nem egyezünk véleményen", d1: "messze van",

    t2: "Közmondások", tx2: "A közmondások dolgokra vonatkozó bölcs megjegyzések, amely az emberek tapasztalatait tükrözik. Például: 'Sok csatornának nem folyik a vize.'",
    q2: "Mi a mondás tanulsága: 'Aki sokat igér, sokat tartozik'?", a2: "Az igéretek fontosak", b2: "szándék és valóság közti különbség", c2: "az adósságok fizetendőek", d2: "a szavak értékesek",

    t3: "Figyelmes olvasás", tx3: "A szólások és közmondások megértéséhez óvatosan kell olvasni és a szövegből értelmezni.",
    q3: "Mit jelent: 'Szűk az időnk'?", a3: "fizikai szűk hely", b3: "kevés idő van", c3: "szűk a szoba", d3: "idő múlik",

    t4: "Szólások és költészet", tx4: "Az írók gyakran használnak szólásokat és közmondásokat az írásaik szépségéhez.",
    q4: "Melyik az igaz szólás?", a4: "Fekete a remény", b4: "Fehér a remény", c4: "Zöld a remény", d4: "Piros a remény",

    t5: "Szólások gyakorlása", tx5: "A szólások és közmondások megismerése segít az irodalom megértésében.",
    q5: "Mit jelent: 'Aranyból a szív'?", a5: "szív fájdalma", b5: "nagyon jó szív", c5: "drága szív", d5: "fizikai szív",
  },
  de: {
    t1: "Redewendungen und Sprichwörter", tx1: "Redewendungen sind kurze Ausdrücke mit einer Bedeutung über ihren wörtlichen Sinn hinaus. Zum Beispiel: 'Dünnes Eis'.",
    q1: "Was bedeutet 'Kalter Wind'?", a1: "das Wetter ist kalt", b1: "stark frieren", c1: "wir sind uneinig", d1: "weit weg",

    t2: "Sprichwörter", tx2: "Sprichwörter sind weise Bemerkungen über Dinge, die menschliche Erfahrungen widerspiegeln.",
    q2: "Was lehrt: 'Wer viel verspricht, schuldet viel'?", a2: "Versprechungen sind wichtig", b2: "Unterschied zwischen Absicht und Wirklichkeit", c2: "Schulden müssen gezahlt werden", d2: "Worte sind wertvoll",

    t3: "Aufmerksames Lesen", tx3: "Um Redewendungen und Sprichwörter zu verstehen, muss man sorgfältig lesen und interpretieren.",
    q3: "Was bedeutet: 'Unsere Zeit ist knapp'?", a3: "physischer enger Platz", b3: "wir haben wenig Zeit", c3: "das Zimmer ist eng", d3: "Zeit vergeht",

    t4: "Redewendungen und Poesie", tx4: "Schriftsteller verwenden häufig Redewendungen und Sprichwörter zur Verschönerung ihrer Werke.",
    q4: "Welches ist ein echtes Sprichwort?", a4: "Schwarz ist die Hoffnung", b4: "Weiß ist die Hoffnung", c4: "Grün ist die Hoffnung", d4: "Rot ist die Hoffnung",

    t5: "Redewendungen üben", tx5: "Das Kennen von Redewendungen und Sprichwörtern hilft beim Verstehen von Literatur.",
    q5: "Was bedeutet: 'Gold ist das Herz'?", a5: "Herzschmerz", b5: "ein sehr gutes Herz", c5: "teures Herz", d5: "physisches Herz",
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
          <rect x="40" y="50" width="160" height="60" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="80" textAnchor="middle" fontSize="14" fill="#4ECDC4" fontWeight="bold">Szólás</text>
          <text x="120" y="100" textAnchor="middle" fontSize="11" fill="white/60">(más jelentés)</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "c1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="120" cy="60" r="20" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="68" textAnchor="middle" fontSize="20" fill="#FF6B9D" fontWeight="bold">💡</text>
          <text x="120" y="110" textAnchor="middle" fontSize="12" fill="#FF6B9D" fontWeight="bold">Közmondás</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="white/60">bölcsesség</text>
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
          <path d="M 40 80 L 210 80" stroke="#95E1D3" strokeWidth="2" />
          <text x="60" y="60" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">szó szerinti</text>
          <path d="M 130 65 L 150 95" stroke="#FFD700" strokeWidth="2" />
          <text x="180" y="100" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">valódi értelme</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <rect x="20" y="50" width="200" height="60" rx="8" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="13" fill="#B44DFF" fontWeight="bold">Szólások az irodalomban</text>
          <text x="120" y="100" textAnchor="middle" fontSize="11" fill="white/60">szépség és tartalom</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="60" cy="80" r="18" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">szólás</text>
          <circle cx="120" cy="80" r="18" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">értelmez</text>
          <circle cx="180" cy="80" r="18" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">tanul</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function IdiomsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
