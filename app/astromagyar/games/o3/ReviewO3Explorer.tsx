"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Igeidők végjátéka", tx1: "Most próbáljuk ismét az igeidőket: múlt, jelen, jövő. Tudsz-e felismerni mindegyiket?",
    q1: "Melyik a múlt idő?", a1: "tegnap olvastam", b1: "ma olvasok", c1: "holnap olvasni fogok", d1: "éppen olvasok",

    t2: "Főnevekragozása", tx2: "A főnevek ragozása fontos: -ban/-ben, -nak/-nek, -t végződések.",
    q2: "Melyik a helyes ragozás?", a2: "házban", b2: "házat", c2: "háznak", d2: "házra",

    t3: "Szólások és közmondások", tx3: "A szólások és közmondások segítik az irodalom megértését.",
    q3: "Mit jelent a szólás: 'Hideg a szél'?", a3: "az időjárás hideg", b3: "nagyon fázni", c3: "nem egyezünk", d3: "messze van",

    t4: "Mondatelemzés", tx4: "Az alany, állítmány és tárgy megkülönböztetése fontos.",
    q4: "Melyik az alany? 'A tanár magyarázza a leckét.'", a4: "magyarázza", b4: "a leckét", c4: "a tanár", d4: "szó",

    t5: "Végeredmény - Gratulálok!", tx5: "Végigmented a 3. osztályos magyar nyelv nagy próbáját. Kitartó munkád meghozta gyümölcsét!",
    q5: "Milyen volt a próba?", a5: "könnyű", b5: "nehéz", c5: "érdekes", d5: "gond nélküli",
  },
  de: {
    t1: "Zeitformen Finale", tx1: "Jetzt versuchen wir wieder die Zeitformen: Vergangenheit, Gegenwart, Zukunft. Kannst du jede erkennen?",
    q1: "Welche ist die Vergangenheit?", a1: "ich las gestern", b1: "ich lese heute", c1: "ich werde morgen lesen", d1: "ich lese gerade",

    t2: "Nomendeklination", tx2: "Die Nomendeklination ist wichtig: -ban/-ben, -nak/-nek, -t Endungen.",
    q2: "Welche Beugung ist richtig?", a2: "Haus-in", b2: "Haus-akk", c2: "Haus-dat", d2: "Haus-auf",

    t3: "Redewendungen und Sprichwörter", tx3: "Redewendungen und Sprichwörter helfen beim Verständnis von Literatur.",
    q3: "Was bedeutet: 'Kalter Wind'?", a3: "das Wetter ist kalt", b3: "stark frieren", c3: "wir sind uneinig", d3: "weit weg",

    t4: "Satzanalyse", tx4: "Das Unterscheiden von Subjekt, Prädikat und Objekt ist wichtig.",
    q4: "Welches ist das Subjekt? 'Der Lehrer erklärt die Lektion.'", a4: "erklärt", b4: "die Lektion", c4: "der Lehrer", d4: "Wort",

    t5: "Endergebnis - Glückwunsch!", tx5: "Du hast die Abschlussprüfung für Ungarisch 3. Klasse bestanden. Deine Ausdauer hat sich gelohnt!",
    q5: "Wie war die Prüfung?", a5: "leicht", b5: "schwer", c5: "interessant", d5: "problemlos",
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
          <circle cx="50" cy="80" r="14" fill="#FF6B9D" />
          <text x="50" y="87" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">múlt</text>
          <circle cx="120" cy="80" r="14" fill="#FFD700" />
          <text x="120" y="87" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">jelen</text>
          <circle cx="190" cy="80" r="14" fill="#4ECDC4" />
          <text x="190" y="87" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">jövő</text>
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
          <text x="40" y="50" fontSize="12" fill="#95E1D3" fontWeight="bold">ház</text>
          <text x="40" y="70" fontSize="12" fill="#95E1D3" fontWeight="bold">házban</text>
          <text x="40" y="90" fontSize="12" fill="#95E1D3" fontWeight="bold">háznak</text>
          <text x="40" y="110" fontSize="12" fill="#95E1D3" fontWeight="bold">házat</text>
          <rect x="120" y="40" width="100" height="100" rx="8" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="170" y="95" textAnchor="middle" fontSize="11" fill="#95E1D3" fontWeight="bold">Ragozás</text>
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
          <rect x="30" y="50" width="180" height="60" rx="8" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="80" textAnchor="middle" fontSize="13" fill="#FF6B9D" fontWeight="bold">Szólások</text>
          <text x="120" y="100" textAnchor="middle" fontSize="10" fill="white/60">irodalom kulcsa</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "c3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <circle cx="60" cy="80" r="16" fill="#B44DFF" opacity="0.3" stroke="#B44DFF" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">alany</text>
          <circle cx="120" cy="80" r="16" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">áll.</text>
          <circle cx="180" cy="80" r="16" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">tárgy</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="120" cy="70" r="35" fill="none" stroke="#FFD700" strokeWidth="2" />
          <circle cx="120" cy="70" r="30" fill="#FFD700" opacity="0.15" />
          <text x="120" y="75" textAnchor="middle" fontSize="22" fill="#FFD700" fontWeight="bold">🏆</text>
          <text x="120" y="130" textAnchor="middle" fontSize="13" fill="#FFD700" fontWeight="bold">Gratulálok!</text>
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

export default function ReviewO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
