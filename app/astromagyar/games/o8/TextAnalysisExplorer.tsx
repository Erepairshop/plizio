"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Szövegelemzés alapok",
    text1: "A szövegelemzés során vizsgáljuk a szöveg szerkezetét, céljait, eszközeit. Fontos elemek: téma, szándék, előadásmód, címadás.",
    hint1: "Szövegelemzés = alapos olvasás és kritikai gondolkodás.",
    q1: "Mit nevezünk szövegelemzésnek?",
    a1: "Szöveg szerkezetének és céljának vizsgálata", b1: "Csupán nyelvtani hibakeresés", c1: "Szók számlálása", d1: "Helyesírás ellenőrzése",

    title2: "Szöveg szerkezete és felépítése",
    text2: "Szöveg szerkezete: bevezetés (téma bemutatása), közép (fejlesztés), lezárás (konklúzió). Logikai koherencia: a gondolatok összekapcsolódnak.",
    hint2: "A jó szövegnek logikus, követhető szerkezete van.",
    q2: "Mi a szöveg szerkezete?",
    a2: "Bevezetés, közép, lezárás", b2: "Csak hosszú mondatok", c2: "Versszakokra bontás", d2: "Fejezetek száma",

    title3: "Téma és szándék",
    text3: "Téma: miről szól a szöveg. Szándék: mit akar elérni az author (közöl, szórakoztat, persuadál). Azonosítása: olvasás, reflexió, kontextus.",
    hint3: "A szerzőnek mindig van valamilyen célja: información, érzelmi hatás stb.",
    q3: "Mit jelent a szerzői szándék?",
    a3: "Mit akar elérni a szerző", b3: "A szöveg hosszúsága", c3: "Csak a kezdete, vége", d3: "A betűk száma",

    title4: "Irodalmi elemzés: Stílus és hang",
    text4: "Stílus: az author jellegzetes kifejezési módja. Hang: a szövegből 'hallható' attitűd (komikus, komoly, érzelmes). Eszközök: szóválasztás, mondatszerkezet.",
    hint4: "Az íróstílus azonosító: ugyanúgy írnak, mint ahogyan gondolkodnak.",
    q4: "Mi az a szerzői stílus?",
    a4: "Az author jellegzetes kifejezési módja", b4: "Csupán a nyelvtani helyes írás", c4: "Szöveg hosszúsága", d4: "Szövegforrása",

    title5: "Kritikai gondolkodás szövegről",
    text5: "Kritikai elemzés: érvelés vizsgálata, feltételezések azonosítása, következmények mérlegelése. Kérdések: Igaz-e? Támogatott-e? Van-e alternatíva?",
    hint5: "A kritikai gondolkodás nemcsak passzív olvasás, hanem aktív értékelés.",
    q5: "Mit jelent kritikai gondolkodás szövegről?",
    a5: "Érvelés és feltételezések vizsgálata", b5: "Összesen negatív értékelés", c5: "Szöveg másolása", d5: "Szerzővel való egyetértés",
  },
  de: {
    title1: "Grundlagen der Textanalyse",
    text1: "Bei der Textanalyse untersuchen wir Aufbau, Ziele und Mittel des Textes. Wichtig: Thema, Absicht, Ausdrucksweise, Titel.",
    hint1: "Textanalyse = genaues Lesen und kritisches Denken.",
    q1: "Was ist Textanalyse?",
    a1: "Untersuchung von Aufbau und Zielen", b1: "Nur Grammatikfehlersuche", c1: "Worthäufigkeit zählen", d1: "Rechtschreibung prüfen",

    title2: "Textaufbau und Struktur",
    text2: "Textaufbau: Einleitung (Thema), Mitte (Entwicklung), Schluss (Konklusion). Logische Kohärenz: Gedanken sind verbunden.",
    hint2: "Guter Text hat logischen, verfolgbaren Aufbau.",
    q2: "Was ist der Textaufbau?",
    a2: "Einleitung, Mitte, Schluss", b2: "Nur lange Sätze", c2: "Stropheneinteilung", d2: "Kapitelanzahl",

    title3: "Thema und Absicht",
    text3: "Thema: Worüber geht es. Absicht: Was will der Autor erreichen (informieren, unterhalten, persuadieren). Identifikation durch Lesen, Reflexion.",
    hint3: "Der Autor hat immer ein Ziel.",
    q3: "Was bedeutet Autorenabsicht?",
    a3: "Was der Autor erreichen will", b3: "Textlänge", c3: "Nur Anfang und Ende", d3: "Buchstabenanzahl",

    title4: "Literarische Analyse: Stil und Ton",
    text4: "Stil: Charakteristische Ausdrucksweise des Autors. Ton: Haltung aus dem Text (komisch, ernst, emotional). Mittel: Wortschatz, Satzaufbau.",
    hint4: "Schreibstil ist charakteristisch: wie sie schreiben, so denken sie.",
    q4: "Was ist Schreibstil?",
    a4: "Charakteristische Ausdrucksweise", b4: "Nur grammatikalisch korrekt", c4: "Textlänge", d4: "Textquelle",

    title5: "Kritisches Denken über Text",
    text5: "Kritische Analyse: Untersuchung von Argumenten, Annahmen, Folgen. Fragen: Wahr? Gestützt? Alternative?",
    hint5: "Kritisches Denken ist aktive Bewertung, nicht passive Lektüre.",
    q5: "Was bedeutet kritisches Denken über Text?",
    a5: "Untersuchung von Argumenten", b5: "Nur negative Bewertung", c5: "Text kopieren", d5: "Mit Autor einverstanden",
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00FF88">🔍</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FFD700">🏗️</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">🎯</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">✍️</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">🧠</text>
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

export default function TextAnalysisExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
