"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Az 'j' és 'ly'", tx1: "Az 'j' és 'ly' a magyar helyesírás egyik trükkös párosítása. Hallásra nagyon hasonlók, de különbözőképpen írjuk őket.",
    q1: "Melyik szó van helyesen írva?", a1: "játék", b1: "lyáték", c1: "játék", d1: "lyatik",

    t2: "Ékezetek", tx2: "Az ékezetek (á, é, í, ó, ú, ő, ű) az összes magyar szóban fontos szerepet játszanak.",
    q2: "Melyik szó van helyesen írva ékezettel?", a2: "gyermek", b2: "gyermék", c2: "mély", d2: "mel",

    t3: "Nagybetű a mondat elején", tx3: "A mondat első szavát nagybetűvel írjuk. Az nevek is nagybetűvel kezdődnek.",
    q3: "Melyik mondat van helyesen írva?", a3: "Anna szép virágokat szedett.", b3: "anna szép virágokat szedett.", c3: "ANNA szép virágokat szedett.", d3: "Anna szép VIRÁGOKAT szedett.",

    t4: "Szavak össze- és különírása", tx4: "Egyes szavakat össze, másokat pedig külön írunk. Például: kép + függesztő = képfüggesztő.",
    q4: "Melyik szóösszetétel van helyesen írva?", a4: "napló", b4: "nap ló", c4: "nappló", d4: "nap-ló",

    t5: "Helyesírás gyakorlása", tx5: "A helyes helyesírás gyakorlásával sokat javíthatunk íráskészségünkön.",
    q5: "Melyik szó van helyesen írva?", a5: "szék", b5: "székk", c5: "szék", d5: "székh",
  },
  de: {
    t1: "Das 'j' und 'ly'", tx1: "Das 'j' und 'ly' sind eine knifflige Paarung in der ungarischen Rechtschreibung. Sie klingen ähnlich, werden aber unterschiedlich geschrieben.",
    q1: "Welches Wort ist korrekt geschrieben?", a1: "játék", b1: "lyáték", c1: "játék", d1: "lyatik",

    t2: "Diakritische Zeichen", tx2: "Diakritische Zeichen (á, é, í, ó, ú, ő, ű) spielen in allen ungarischen Wörtern eine wichtige Rolle.",
    q2: "Welches Wort ist korrekt mit Diakritika geschrieben?", a2: "gyermek", b2: "gyermék", c2: "mély", d2: "mel",

    t3: "Großbuchstabe am Satzanfang", tx3: "Das erste Wort eines Satzes schreiben wir mit Großbuchstaben. Namen beginnen auch mit Großbuchstaben.",
    q3: "Welcher Satz ist korrekt geschrieben?", a3: "Anna szép virágokat szedett.", b3: "anna szép virágokat szedett.", c3: "ANNA szép virágokat szedett.", d3: "Anna szép VIRÁGOKAT szedett.",

    t4: "Zusammen- und Getrenntschreibung", tx4: "Manche Wörter schreiben wir zusammen, andere trennen wir. Zum Beispiel: nap + ló = napló.",
    q4: "Welches zusammengesetzte Wort ist korrekt geschrieben?", a4: "napló", b4: "nap ló", c4: "nappló", d4: "napló",

    t5: "Rechtschreibung üben", tx5: "Durch das Üben von korrekter Rechtschreibung können wir unsere Schreibfähigkeiten verbessern.",
    q5: "Welches Wort ist korrekt geschrieben?", a5: "szék", b5: "székk", c5: "szék", d5: "székh",
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
          <text x="60" y="90" textAnchor="middle" fontSize="32" fill="#4ECDC4" fontWeight="bold">j</text>
          <text x="60" y="130" textAnchor="middle" fontSize="12" fill="#4ECDC4">játék</text>
          <text x="180" y="90" textAnchor="middle" fontSize="32" fill="#FF6B9D" fontWeight="bold">ly</text>
          <text x="180" y="130" textAnchor="middle" fontSize="12" fill="#FF6B9D">lyuk</text>
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
          <text x="120" y="50" textAnchor="middle" fontSize="14" fill="#B44DFF">áéíóúőű</text>
          <circle cx="40" cy="100" r="12" fill="#B44DFF" opacity="0.3" />
          <text x="40" y="108" textAnchor="middle" fontSize="16" fill="#B44DFF" fontWeight="bold">á</text>
          <circle cx="120" cy="100" r="12" fill="#B44DFF" opacity="0.3" />
          <text x="120" y="108" textAnchor="middle" fontSize="16" fill="#B44DFF" fontWeight="bold">ő</text>
          <circle cx="200" cy="100" r="12" fill="#B44DFF" opacity="0.3" />
          <text x="200" y="108" textAnchor="middle" fontSize="16" fill="#B44DFF" fontWeight="bold">ű</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "c2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="20" y="30" width="200" height="100" rx="8" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="35" y="55" fontSize="12" fill="#FF6B9D" fontWeight="bold">Anna</text>
          <text x="55" y="55" fontSize="12" fill="#FF6B9D">szép virágokat szedett.</text>
          <circle cx="30" cy="50" r="8" fill="#FF6B9D" opacity="0.5" />
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
          <rect x="20" y="50" width="45" height="50" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="42" y="82" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">nap</text>
          <text x="75" y="82" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">+</text>
          <rect x="95" y="50" width="45" height="50" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="117" y="82" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">ló</text>
          <text x="150" y="82" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">=</text>
          <rect x="165" y="50" width="60" height="50" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="195" y="82" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">napló</text>
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
          <circle cx="60" cy="80" r="30" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="60" y="85" textAnchor="middle" fontSize="28" fill="#95E1D3" fontWeight="bold">✓</text>
          <rect x="140" y="50" width="80" height="60" rx="8" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="75" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">szék</text>
          <text x="180" y="100" textAnchor="middle" fontSize="10" fill="#95E1D3">házban</text>
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

export default function SpellingO2Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
