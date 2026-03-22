"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Szövegtípusok",
    text1: "A szövegtípusok alapján csoportosíthatjuk az írott vagy szóbeli közléseket. Főbb típusok: elbeszélés (történet), leírás (helyzetkép), érvelés (véleménycseréltetés) és utasítás (hogyan csináljunk valamit).",
    q1: "Melyik szövegtípus egy történet mesélése?",
    a1: "elbeszélés",
    b1: "leírás",
    c1: "érvelés",
    d1: "utasítás",
    q2: "Mit tartalmaz egy leírás szöveg?",
    a2: "jellemzéseket és képeket",
    b2: "érveléseket",
    c2: "utasításokat",
    d2: "kérdéseket",
    title2: "Kohézió és kohérencia",
    text2: "A kohézió a szöveg összekapcsolódását jelenti (szavak, mondatok, bekezdések közötti kapcsolatok). A kohérencia a szöveg értelmezhetőségét biztosítja. Mindkettő fontos az érthetős szöveghez.",
    q3: "Mi a kohézió?",
    a3: "szöveg részei közötti kapcsolat",
    b3: "szöveg hosszúsága",
    c3: "szöveg témája",
    d3: "szöveg nyelvi szintje",
    q4: "Mi biztosítja a szöveg értelmezhetőségét?",
    a4: "kohérencia",
    b4: "szójegyzék",
    c4: "betűméret",
    d4: "szöveg színe",
    title3: "Bekezdésszerkesztés",
    text3: "A bekezdés egy önálló gondolati egység, amely általában egy fő mondat körül szerveződik. Jó bekezdésszerkesztésben egy fő mondatot (topic sentence) támogató részletek követnek. A bekezdések közötti lezárás és nyitás biztosítja a szöveg folyamatosságát.",
    q5: "Mi a bekezdés alapja?",
    a5: "egy gondolati egység",
    b5: "egy mondat",
    c5: "egy szó",
    d5: "egy kitöltendő hely",
    q6: "Mit tartalmazhat egy bekezdés főmondatát támogatva?",
    a6: "részleteket és magyarázatokat",
    b6: "csak szavakat",
    c6: "csak kérdéseket",
    d6: "szövegeket idegen nyelvről",
    title4: "Szövegformálás",
    text4: "A szöveg szerkezetét meghatározza, hogy milyen sorrendben helyezzük el az információkat. Három alapforma: lineáris (kezdettől végig), analitikus (lezárással és konkluziók), illetve szintetikus (összetett szerkezet). Minden szövegtípusnak saját szerkezeti követelménye van.",
    q7: "Mi a szövegtípus meghatározása?",
    a7: "a szöveg célja és szerkezete",
    b7: "a szöveg hosszúsága",
    c7: "a szöveg témája",
    d7: "a szöveg szerzője",
    q8: "Mely szövegforma kezdődik lezárással?",
    a8: "analitikus forma",
    b8: "lineáris forma",
    c8: "szintetikus forma",
    d8: "intuitív forma",
    title5: "Szövegtani gyakorlat",
    text5: "A szövegtanulmányozásban fontos látni az szöveg sík- és mélyszerkesztéseit. Mindig kérdezd meg: mi a szöveg célja? Hogyan szerveződik? Milyen nyelvezetet használ? Ezek a kérdések segítenek a szöveg megértésében és elemzésében.",
    q9: "Melyek a szöveg alapvető elemei?",
    a9: "cél, szerkezet, nyelvezet",
    b9: "szavak, mondatok",
    c9: "bekezdések, bekezdések",
    d9: "oldalak, fejezetek",
    q10: "Mi a kulcs a szöveg megértésében?",
    a10: "a szöveg céljának meghatározása",
    b10: "gyors olvasás",
    c10: "szótár használata",
    d10: "többszöri felolvasás",
  },
  de: {
    title1: "Texttypen",
    text1: "Texte können nach ihrem Zweck klassifiziert werden: Erzählung (Geschichte), Beschreibung (Szenerie), Argumentation (Meinung) und Anleitung (Anweisungen). Jeder Texttyp hat seine eigenen Merkmale und Strukturen.",
    q1: "Welcher Texttyp erzählt eine Geschichte?",
    a1: "Erzählung",
    b1: "Beschreibung",
    c1: "Argumentation",
    d1: "Anleitung",
    q2: "Was enthält eine Beschreibung?",
    a2: "Charakterisierungen und Bilder",
    b2: "Argumente",
    c2: "Anweisungen",
    d2: "Fragen",
    title2: "Kohäsion und Kohärenz",
    text2: "Kohäsion ist die Verbindung zwischen Textteilen. Kohärenz macht den Text verständlich. Beide sind wichtig für einen verständlichen Text.",
    q3: "Was ist Kohäsion?",
    a3: "Verbindung zwischen Textteilen",
    b3: "Textlänge",
    c3: "Textthema",
    d3: "Textniveau",
    q4: "Was sorgt für Textverständlichkeit?",
    a4: "Kohärenz",
    b4: "Wörterbuch",
    c4: "Schriftgröße",
    d4: "Textfarbe",
    title3: "Absatzstruktur",
    text3: "Ein Absatz ist eine Gedankeneinheit, normalerweise um einen Hauptsatz organisiert. Unterstützende Details folgen dem Hauptsatz. Absätze müssen nahtlos zusammenhängen.",
    q5: "Worauf basiert ein Absatz?",
    a5: "eine Gedankeneinheit",
    b5: "ein Satz",
    c5: "ein Wort",
    d5: "ein Leerzeichen",
    q6: "Was kann einen Hauptsatz unterstützen?",
    a6: "Details und Erklärungen",
    b6: "nur Wörter",
    c6: "nur Fragen",
    d6: "Texte in Fremdsprachen",
    title4: "Textformung",
    text4: "Die Textstruktur hängt von der Informationsanordnung ab: linear, analytisch oder synthetisch. Jeder Texttyp hat seine eigenen Strukturanforderungen.",
    q7: "Was bestimmt den Texttyp?",
    a7: "Ziel und Struktur des Textes",
    b7: "Textlänge",
    c7: "Textthema",
    d7: "Autor des Textes",
    q8: "Welche Form beginnt mit einem Abschluss?",
    a8: "analytische Form",
    b8: "lineare Form",
    c8: "synthetische Form",
    d8: "intuitive Form",
    title5: "Textanalysepraktik",
    text5: "Beim Textstudium ist es wichtig, die oberflächliche und tiefe Struktur zu sehen. Stelle immer Fragen: Was ist das Ziel des Textes? Wie ist er organisiert? Welche Sprache wird verwendet? Diese Fragen helfen beim Verstehen und Analysieren des Textes.",
    q9: "Was sind die Grundelemente eines Textes?",
    a9: "Ziel, Struktur, Sprache",
    b9: "Wörter, Sätze",
    c9: "Absätze, Absätze",
    d9: "Seiten, Kapitel",
    q10: "Was ist der Schlüssel zum Textverständnis?",
    a10: "Bestimmung des Textzwecks",
    b10: "schnelles Lesen",
    c10: "Wörterbuchnutzung",
    d10: "wiederholtes Vorlesen",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="40" y="30" width="160" height="100" rx="8" fill="#2a2a5e" stroke="#FF2D78" strokeWidth="2" />
          <text x="120" y="60" textAnchor="middle" fontSize="14" fill="#FF2D78" fontWeight="bold">Szövegtípusok</text>
          <text x="120" y="85" textAnchor="middle" fontSize="11" fill="#fff">Elbeszélés · Leírás</text>
          <text x="120" y="105" textAnchor="middle" fontSize="11" fill="#fff">Érvelés · Utasítás</text>
        </svg>
      ),
      questions: [
        { question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" },
        { question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="80" cy="80" r="30" fill="none" stroke="#00D4FF" strokeWidth="2" />
          <text x="80" y="85" textAnchor="middle" fontSize="12" fill="#00D4FF" fontWeight="bold">Kohézió</text>
          <circle cx="160" cy="80" r="30" fill="none" stroke="#00D4FF" strokeWidth="2" />
          <text x="160" y="85" textAnchor="middle" fontSize="12" fill="#00D4FF" fontWeight="bold">Kohérencia</text>
          <line x1="110" y1="80" x2="130" y2="80" stroke="#00D4FF" strokeWidth="2" markerEnd="url(#arrowHead)" />
        </svg>
      ),
      questions: [
        { question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" },
        { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="20" y="30" width="200" height="20" rx="4" fill="#4ECDC4" opacity="0.8" />
          <rect x="20" y="60" width="200" height="20" rx="4" fill="#4ECDC4" opacity="0.6" />
          <rect x="20" y="90" width="200" height="20" rx="4" fill="#4ECDC4" opacity="0.4" />
          <rect x="20" y="120" width="200" height="20" rx="4" fill="#4ECDC4" opacity="0.2" />
          <text x="120" y="145" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Bekezdésszerkesztés</text>
        </svg>
      ),
      questions: [
        { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" },
        { question: "q6", choices: ["a6", "b6", "c6", "d6"], answer: "a6" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <path d="M 40 130 L 120 40 L 200 130 Z" fill="none" stroke="#FFD700" strokeWidth="2" />
          <circle cx="40" cy="130" r="4" fill="#FFD700" />
          <circle cx="120" cy="40" r="4" fill="#FFD700" />
          <circle cx="200" cy="130" r="4" fill="#FFD700" />
          <text x="120" y="155" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Szövegformálás</text>
        </svg>
      ),
      questions: [
        { question: "q7", choices: ["a7", "b7", "c7", "d7"], answer: "a7" },
        { question: "q8", choices: ["a8", "b8", "c8", "d8"], answer: "a8" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="70" cy="50" r="20" fill="#FF2D78" opacity="0.7" />
          <circle cx="170" cy="50" r="20" fill="#00D4FF" opacity="0.7" />
          <circle cx="120" cy="110" r="20" fill="#FFD700" opacity="0.7" />
          <text x="120" y="155" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Szövegtani alapok</text>
        </svg>
      ),
      questions: [
        { question: "q9", choices: ["a9", "b9", "c9", "d9"], answer: "a9" },
        { question: "q10", choices: ["a10", "b10", "c10", "d10"], answer: "a10" },
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

export default function TextScienceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
