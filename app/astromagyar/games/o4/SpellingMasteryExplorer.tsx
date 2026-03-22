"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Igekötő elhelyezése",
    tx1: "Az igekötő az ige előtt vagy után állhat, a szószerkezettől függően.",
    q1: "Melyik mondat helyesen használja az igekötőt?",
    a1: "Ő felhívta a barátját.",
    b1: "Ő fel hívta a barátját.",
    c1: "Ő hívta fel a barátját.",
    d1: "Ő felhivta a barátját.",
    t2: "Különírás: összetett szavak",
    tx2: "Az összetett szavakat akkor írjuk össze, amikor egy fogalmat hoznak létre.",
    q2: "Melyik helyesen írásban helyes?",
    a2: "Ő a szép- házban lakik.",
    b2: "Ő a szép házban lakik.",
    c2: "Ő a szépházban lakik.",
    d2: "Ő a szép házbán lakik.",
    t3: "Kettős mássalhangzó",
    tx3: "Kettős mássalhangzót akkor írunk, amikor a magánhangzó rövid.",
    q3: "Melyik szó helyesen írott?",
    a3: "Az iskolában tanulok.",
    b3: "Az iskólában tanulok.",
    c3: "Az iskolaban tanulok.",
    d3: "Az iskollában tanulok.",
    t4: "Nagybetű használata",
    tx4: "Tulajdonneveket nagybetűvel írjuk: személynevek, városnevek, országnevek.",
    q4: "Melyik mondat helyesen írott?",
    a4: "budapest szép város.",
    b4: "Budapest szép város.",
    c4: "budapest szép Város.",
    d4: "Budapest szép város.",
    t5: "Központozás: vessző",
    tx5: "A mellékmondat előtt általában vesszőt teszünk.",
    q5: "Melyik mondat helyesen központozott?",
    a5: "Amikor szép az idő játszunk.",
    b5: "Amikor szép az idő, játszunk.",
    c5: "Amikor, szép az idő játszunk.",
    d5: "Amikor szép az idő, játszunk,.",
  },
  de: {
    t1: "Verbpartikeln Platzierung",
    tx1: "Verbpartikeln können vor oder nach dem Verb stehen, je nach Satzstruktur.",
    q1: "Welcher Satz verwendet die Partikel richtig?",
    a1: "Er rief seinen Freund an.",
    b1: "Er an rief seinen Freund.",
    c1: "Er rief an seinen Freund.",
    d1: "Er anriefte seinen Freund.",
    t2: "Zusammenschreibung: Komposita",
    tx2: "Zusammensetzungen schreiben wir zusammen, wenn sie einen Begriff bilden.",
    q2: "Welches Wort ist richtig geschrieben?",
    a2: "Das schöne-Haus ist groß.",
    b2: "Das schöne Haus ist groß.",
    c2: "Das schönehaus ist groß.",
    d2: "Das schöne-Hause ist groß.",
    t3: "Doppelkonsonanten",
    tx3: "Doppelkonsonanten schreiben wir, wenn der Vokal kurz ist.",
    q3: "Welches Wort ist richtig geschrieben?",
    a3: "Das Scule ist groß.",
    b3: "Das Schule ist groß.",
    c3: "Das Schuule ist groß.",
    d3: "Das Schule ist groß.",
    t4: "Großschreibung: Eigennamen",
    tx4: "Eigennamen schreiben wir groß: Personennamen, Städte, Länder.",
    q4: "Welcher Satz ist richtig geschrieben?",
    a4: "berlin ist eine schöne stadt.",
    b4: "Berlin ist eine schöne Stadt.",
    c4: "berlin ist eine schöne Stadt.",
    d4: "Berlin ist eine Schöne Stadt.",
    t5: "Zeichensetzung: Komma",
    tx5: "Vor dem Nebensatz setzen wir normalerweise ein Komma.",
    q5: "Welcher Satz ist richtig gepunktet?",
    a5: "Wenn das Wetter schön ist spielen wir.",
    b5: "Wenn das Wetter schön ist, spielen wir.",
    c5: "Wenn, das Wetter schön ist spielen wir.",
    d5: "Wenn das Wetter schön ist spielen wir.",
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
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="80" y="85" textAnchor="middle" fontSize="32">
            ↑
          </text>
          <text x="160" y="85" textAnchor="middle" fontSize="32">
            ↓
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Igekötő pozíciók
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
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="40" y="60" width="70" height="50" rx="4" fill="#FF6B6B" opacity="0.2" />
          <text x="75" y="90" textAnchor="middle" fontSize="12" fill="#FFF">
            szép
          </text>
          <rect x="130" y="60" width="70" height="50" rx="4" fill="#FF6B6B" opacity="0.2" />
          <text x="165" y="90" textAnchor="middle" fontSize="12" fill="#FFF">
            ház
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Összetett szavak
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "b2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="60" y="85" textAnchor="middle" fontSize="36" fill="#FFE66D">
            aa
          </text>
          <text x="180" y="85" textAnchor="middle" fontSize="36" fill="#FFE66D">
            bb
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Kettős mássalhangzók
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "a3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="60" textAnchor="middle" fontSize="48" fill="#FFD700">
            A
          </text>
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#AAA">
            Nagybetű
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "d4",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="50" y="60" width="140" height="50" rx="4" fill="#10B981" opacity="0.2" />
          <text x="120" y="80" textAnchor="middle" fontSize="20" fill="#FFF" fontWeight="bold">
            Mondat
          </text>
          <text x="120" y="105" textAnchor="middle" fontSize="16" fill="#10B981">
            ,
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Központozás
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "b5",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function SpellingMasteryExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine
      def={DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
