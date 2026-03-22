"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Magyar helyesírás szabályai",
    text1: "A magyar helyesírás feladata: azonos módon írunk és olvasunk. Szabályok: nagy kezdőbetűk, elválasztás, szóképzés, összetett szavak.",
    hint1: "A helyesírás szabályai a nyelv egységesítésére szolgálnak.",
    q1: "Mi a helyesírás célja?",
    a1: "Azonos írásmód biztosítása", b1: "Szóhibák keresése", c1: "Betűk számlálása", d1: "Betűk ábécé szerinti rendezése",

    title2: "Nagy kezdőbetűk használata",
    text2: "Nagy kezdőbetűvel írunk: mondatok első szavát, tulajdonneveket (Menschen, helyek), földrajzi neveket, intézmények nevét.",
    hint2: "A nagy kezdőbetű a szöveg szervezettségét segíti.",
    q2: "Mikor írunk nagy kezdőbetűvel?",
    a2: "Mondatok kezdete és tulajdonnevek", b2: "Összes főnév", c2: "Magánhangzók előtt", d2: "Csak az ábécé kezdetét",

    title3: "Szóelválasztás szabályai",
    text3: "Szóelválasztás: ahol a szó két sora vágódik, teljes szótagokra kell szétválasztani. Szabály: egy magánhangzó marad az előző sorban.",
    hint3: "Szóelválasztás: szótagokra bontás sor végén.",
    q3: "Milyen alapelv alapján választunk el szót?",
    a3: "Teljes szótagokra", b3: "Betűnként", c3: "Véletlenül", d3: "Szó közepén",

    title4: "Összetett szavak írása",
    text4: "Összetett szavak: különírás (két szó), egybeírás (egy szó), kötőjeles írás. Meghatározás: szoros összetartozás → egybeírás.",
    hint4: "Az összetett szavak írása: szoros összetartozás figyelembevétele.",
    q4: "Hogyan írunk összetett szavakat?",
    a4: "Szoros összetartozás szerint", b4: "Mindig kötőjellel", c4: "Mindig különírás", d4: "Szerzői választás",

    title5: "Helyesírás kivételei és problémás szavak",
    text5: "Kivételek: idegen szavak, archaikus szavak, szokásos rossz írások. Például: 'hiába' vs 'hiabán', 'talán' vs 'talám'. Sok szó okoz gyakorlást.",
    hint5: "A helyesírás ráírása sok gyakorlást igényel.",
    q5: "Mit kell tudnunk a helyesírás kivételeiről?",
    a5: "Speciális szabályok, szokásos hibák", b5: "Nincsenek kivételek", c5: "Csak új szavakra vonatkoznak", d5: "A szerzőre bízott",
  },
  de: {
    title1: "Regeln der ungarischen Rechtschreibung",
    text1: "Aufgabe der Rechtschreibung: einheitliches Schreiben. Regeln: Großbuchstaben, Silbentrennung, Wortbildung, Komposita.",
    hint1: "Rechtschreibungsregeln dienen der Spracheinheit.",
    q1: "Was ist der Zweck der Rechtschreibung?",
    a1: "Einheitliche Schreibweise", b1: "Sprachfehlersuche", c1: "Buchstabenzählung", d1: "Alphabetische Reihenfolge",

    title2: "Verwendung von Großbuchstaben",
    text2: "Großbuchstabe: Satzanfang, Eigennamen (Menschen, Orte), geografische Namen, Institutionsnamen.",
    hint2: "Der Großbuchstabe hilft bei der Textorganisation.",
    q2: "Wann schreiben wir mit Großbuchstaben?",
    a2: "Satzanfang und Eigennamen", b2: "Alle Substantive", c2: "Vor Vokalen", d2: "Nur Alphabetanfang",

    title3: "Silbentennungsregeln",
    text3: "Silbentrennung: Wo das Wort auf zwei Zeilen verteilt wird, komplette Silben. Regel: ein Vokal bleibt in der vorherigen Zeile.",
    hint3: "Silbentrennung: Zerlegung in Silben am Zeilenende.",
    q3: "Nach welchem Prinzip trennen wir Wörter?",
    a3: "In komplette Silben", b3: "Nach Buchstaben", c3: "Zufällig", d3: "In der Wortmitte",

    title4: "Schreibweise von Komposita",
    text4: "Komposita: Getrenntschreibung (zwei Wörter), Zusammenschreibung (ein Wort), Bindestrich. Bestimmung: enge Zusammengehörigkeit → Zusammenschreibung.",
    hint4: "Komposita-Schreibweise: Zusammengehörigkeit beachten.",
    q4: "Wie schreiben wir Komposita?",
    a4: "Beachte die Zusammengehörigkeit", b4: "Immer mit Bindestrich", c4: "Immer getrennt", d4: "Autorische Wahl",

    title5: "Ausnahmen und problematische Wörter",
    text5: "Ausnahmen: Fremdwörter, archaische Wörter, übliche Schreibfehler. Viele Wörter erfordern Übung.",
    hint5: "Rechtschreibung erfordert viel Übung.",
    q5: "Was müssen wir über Ausnahmen wissen?",
    a5: "Spezialregeln, übliche Fehler", b5: "Es gibt keine Ausnahmen", c5: "Nur für neue Wörter", d5: "Autorische Wahl",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      hintKey: "hint1",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FFD700">✍️</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      hintKey: "hint2",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">A</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      hintKey: "hint3",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#10B981">|</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      hintKey: "hint4",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">🔗</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      hintKey: "hint5",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">❓</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function SpellingSummaryExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
