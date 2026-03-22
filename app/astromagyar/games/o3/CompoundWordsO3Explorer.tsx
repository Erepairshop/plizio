"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Összetett szavak", tx1: "Az összetett szavak két vagy több szó összekapcsolódásából keletkeznek. Az első szó általában jelzőként működik.",
    q1: "Melyik szó összetett?", a1: "ceruzatartó", b1: "ceruza", c1: "tartó", d1: "ceruzásan",

    t2: "Szóösszetétel szabályai", tx2: "Az összetett szó jelentése az összetevő szavakból jön létre. Például: szakácskönyv = szakács + könyv.",
    q2: "Mit jelent az 'asztalláb'?", a2: "az asztal mellett", b2: "az asztal lábát", c2: "az asztal egyik lábáról", d2: "az asztal lábával",

    t3: "Szóösszetételes kép", tx3: "Közös összetett szavak: tájkép, képeslap, levélváltás, szóösszetétel.",
    q3: "Melyik összetett szó jó?", a3: "tájkép", b3: "táj-kép", c3: "kép-táj", d3: "képtáj",

    t4: "Összetett szavak felismerése", tx4: "Az összetett szavakat az összeadódó szavak alapján tudjuk megérteni és helyesen írni.",
    q4: "Melyik szó nem összetett?", a4: "napló", b4: "könyvtár", c4: "szék", d4: "ceruzatartó",

    t5: "Szóösszetételek gyakorlása", tx5: "Az összetett szavak használata az írás és az olvasás alapja.",
    q5: "Válassz összetett szót! Mely szó képzett: 'nap' + 'ló'?", a5: "napló", b5: "napról", c5: "napi", d5: "naplóban",
  },
  de: {
    t1: "Zusammengesetzte Wörter", tx1: "Zusammengesetzte Wörter entstehen aus zwei oder mehr Wörtern. Das erste Wort funktioniert oft als Attribut.",
    q1: "Welches Wort ist zusammengesetzt?", a1: "Stifthalter", b1: "Stift", c1: "Halter", d1: "Stiftweise",

    t2: "Regeln der Wortkomposition", tx2: "Die Bedeutung eines zusammengesetzten Wortes ergibt sich aus seinen Komponenten. Zum Beispiel: Kochbuch = Koch + Buch.",
    q2: "Was bedeutet 'Tischbein'?", a2: "neben dem Tisch", b2: "das Bein des Tisches", c2: "vom Tischbein", d2: "mit dem Tischbein",

    t3: "Zusammengesetzte Wörter", tx3: "Häufige zusammengesetzte Wörter: Landschaft, Bildpostkarte, Briefwechsel, Wortbildung.",
    q3: "Welches ist richtig?", a3: "Landschaft", b3: "Land-schaft", c3: "Schaft-Land", d3: "Schaftland",

    t4: "Erkennung zusammengesetzter Wörter", tx4: "Zusammengesetzte Wörter können wir anhand ihrer Komponenten verstehen und richtig schreiben.",
    q4: "Welches Wort ist nicht zusammengesetzt?", a4: "Tagebuch", b4: "Bücherei", c4: "Stuhl", d4: "Stifthalter",

    t5: "Übung der Wortkomposition", tx5: "Die Verwendung zusammengesetzter Wörter ist grundlegend für Schreiben und Lesen.",
    q5: "Wähle ein zusammengesetztes Wort! Welches ist aus 'Tag' + 'Buch'?", a5: "Tagebuch", b5: "vom Tagbuch", c5: "täglich", d5: "Tagebuch-weise",
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
          <rect x="20" y="50" width="50" height="60" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="45" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">ceruza</text>
          <text x="95" y="85" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">+</text>
          <rect x="125" y="50" width="50" height="60" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="150" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">tartó</text>
          <text x="190" y="85" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">=</text>
          <text x="220" y="85" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" display="none">összetett</text>
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
          <circle cx="60" cy="80" r="25" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="12" fill="#FF6B9D" fontWeight="bold">szakács</text>
          <text x="105" y="85" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">+</text>
          <circle cx="170" cy="80" r="25" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="170" y="88" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">könyv</text>
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
          <rect x="30" y="60" width="180" height="50" rx="6" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">tájkép</text>
          <text x="120" y="95" textAnchor="middle" fontSize="12" fill="white/60">összetett szó</text>
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
          <circle cx="60" cy="80" r="22" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">összetett</text>
          <circle cx="150" cy="80" r="22" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="150" y="88" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">szék</text>
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
          <text x="120" y="70" textAnchor="middle" fontSize="16" fill="#B44DFF" fontWeight="bold">szóösszetételek</text>
          <path d="M 30 100 L 210 100" stroke="white/30" strokeWidth="1" />
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">alapja az írásnak</text>
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

export default function CompoundWordsO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
