"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Helyesírás összefoglalás",
    text1: "Az 7-8. osztály helyesírási szabályai: nagy- és kisbetűzés, kötőjel, pont, vessző, szóköz kezelése. Tanulságok: szabályok alkalmazása és kivételei.",
    hint1: "A helyesírás a közös megértés alapja.",
    q1: "Melyik szót írjuk nagy kezdobetűvel?",
    a1: "Személynevek", b1: "Szín nevek", c1: "Anyagnevek", d1: "Időjárási jelenségek",

    title2: "Mondatformák és írásjelek",
    text2: "Mondatformák: kijelentő, kérdő, felkiáltó. Írásjelek: pont (.), kérdőjel (?), felkiáltójel (!), vessző (,), stb.",
    hint2: "Az írásjelek segítik az olvasót a szöveg megértésében.",
    q2: "Melyik írájel a felkiáltó mondat végén?",
    a2: "Felkiáltójel (!)", b2: "Pont (.)", c2: "Kérdőjel (?)", d2: "Vessző (,)",

    title3: "Szóalkotás és szócsaládok",
    text3: "Szócsalád: közös gyök (tőszó) köré csoportosuló szavak. Szóalkotás: összetétel, képzés, előtagozás.",
    hint3: "A szócsaládok ismerete segít a szókincs bővítésében.",
    q3: "Mi az összetétel?",
    a3: "Két vagy több szótő összekapcsolása", b3: "Utótag hozzáadása", c3: "Előtag hozzáadása", d3: "Hangváltozás",

    title4: "Szövegszerkesztés és stílus",
    text4: "Szövegszerkesztés: gondolatok rendezése, logikus felépítés, érthető kifejezés. Stílus: az egyéni kifejezésmód és tón.",
    hint4: "Az érthető szöveg jól szervezett és világos.",
    q4: "Mit jelent a logikus szerkezet?",
    a4: "Gondolatok értelmes sorrendje", b4: "Hosszú mondatok", c4: "Sok szó", d4: "Nincs jelentősége",

    title5: "Irodalmi stílusok és műfajok",
    text5: "Stílusok: lírikus, epikus, drámai. Műfajok: vers, prózai műfajok (regény, novella), dráma. Az 7-8. osztályban megismerkedünk különféle szerzőkkel.",
    hint5: "A különböző műfajok különböző érzelmeket és gondolatokat közvetítenek.",
    q5: "Mi az epikus stílus?",
    a5: "Cselekmény elbeszélése", b5: "Érzelmek kifejezése", c5: "Párbeszéd", d5: "Csak valódi történetek",
  },
  de: {
    title1: "Rechtschreibung zusammengefasst",
    text1: "Rechtschreibungsregeln der Klassen 7-8: Groß- und Kleinschreibung, Bindestrich, Punkt, Komma, Leerzeichen. Lektionen: Regeln und ihre Ausnahmen.",
    hint1: "Rechtschreibung ist die Grundlage des gegenseitigen Verständnisses.",
    q1: "Welches Wort schreiben wir großbuchstabig?",
    a1: "Eigennamen", b1: "Farbnamen", c1: "Stoffnamen", d1: "Wetterphänomene",

    title2: "Satzarten und Satzzeichen",
    text2: "Satzarten: Aussage, Frage, Ausruf. Satzzeichen: Punkt (.), Fragezeichen (?), Ausrufezeichen (!), Komma (,).",
    hint2: "Satzzeichen helfen dem Leser, den Text zu verstehen.",
    q2: "Welches Satzzeichen kommt am Ende eines Ausrufesatzes?",
    a2: "Ausrufezeichen (!)", b2: "Punkt (.)", c2: "Fragezeichen (?)", d2: "Komma (,)",

    title3: "Wortbildung und Wortfamilien",
    text3: "Wortfamilie: Wörter, die um eine gemeinsame Wurzel gruppiert sind. Wortbildung: Komposition, Ableitung, Präfixbildung.",
    hint3: "Kenntnis von Wortfamilien hilft bei der Wortschatzerweiterung.",
    q3: "Was ist Komposition?",
    a3: "Verbindung von zwei oder mehr Wörtern", b3: "Hinzufügen eines Suffixes", c3: "Hinzufügen eines Präfix", d3: "Lautveränderung",

    title4: "Textbearbeitung und Stil",
    text4: "Textbearbeitung: Gedankenordnung, logischer Aufbau, verständlicher Ausdruck. Stil: individuelle Ausdrucksweise und Ton.",
    hint4: "Ein verständlicher Text ist gut organisiert und klar.",
    q4: "Was bedeutet logischer Aufbau?",
    a4: "Vernünftige Reihenfolge der Gedanken", b4: "Lange Sätze", c4: "Viele Wörter", d4: "Unbedeutsam",

    title5: "Literarische Stile und Gattungen",
    text5: "Stile: lyrisch, episch, dramatisch. Gattungen: Gedicht, Prosa-Gattungen (Roman, Novelle), Drama. In den Klassen 7-8 lernen wir verschiedene Autoren kennen.",
    hint5: "Verschiedene Gattungen vermitteln unterschiedliche Gefühle und Gedanken.",
    q5: "Was ist der epische Stil?",
    a5: "Erzählung eines Geschehens", b5: "Ausdruck von Gefühlen", c5: "Dialog", d5: "Nur wahre Geschichten",
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">✍️</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">🔤</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">🌳</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00FF88">📖</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FFD700">🎬</text>
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

export default function ComprehensiveTestExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
