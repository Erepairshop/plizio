"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Stíluseszközök alapjai",
    text1: "A stíluseszközök a nyelv kifejezőerejét növelik. Fontosabbak: hasonlat, metafora, metonímia, szinekdoché, alliteráció, rímus.",
    hint1: "A stíluseszközöket szándékosan használja az írók a hatás fokozásához.",
    q1: "Mi a stíluseszköz?",
    a1: "Szándékos kifejezési módszer", b1: "Véletlenül használt szó", c1: "Nyelvtani szabály", d1: "Szóhibás fogalmazás",

    title2: "Trópusok: Hasonlat és metafora",
    text2: "A hasonlat nyíltan hasonlít két dolgot (mint, mintha). A metafora burkolt hasonlítás: 'az élet egy út'. Mind képiség fokozza a szöveget.",
    hint2: "Hasonlat: explicit, metafora: implicit hasonlítás.",
    q2: "Mi a különbség a hasonlat és a metafora között?",
    a2: "Hasonlat nyílt, metafora burkolt", b2: "Hasonlat rím, metafora nem", c2: "Hasonlat régi, metafora modern", d2: "Nincsen különbség",

    title3: "Metonímia és szinekdoché",
    text3: "Metonímia: egy dolgot másik szóval nevezünk meg (pl. 'az asztal ebédelni fog' = az asztal körüli emberek). Szinekdoché: rész helyett egész, vagy fordítva.",
    hint3: "Metonímia szorosabb kapcsolat, szinekdoché: rész-egész viszony.",
    q3: "Mi az a metonímia?",
    a3: "Egy dolgot másik szóval nevezünk meg", b3: "Szó hibás ismétlése", c3: "Rím és verselemzés", d3: "Szövegtani eszköz",

    title4: "Hangalak-stíluseszközök: Alliteráció, rímus",
    text4: "Alliteráció: azonos kezdőhangtalan szavak (pl. 'fáradt fej fordul fel'). Rímus: szavak végig hangi egyezése (pl. 'szép-kép').",
    hint4: "Az alliteráció és rímus a szöveg ritmusát, zeneiségét erősítik.",
    q4: "Mit értünk alliteration alatt?",
    a4: "Azonos kezdőhang ismétlése", b4: "Szó végigi hangi egyezés", c4: "Szóhibás szóhasználat", d4: "Nyelvtani szórend",

    title5: "Stíluseszközök a gyakorlatban",
    text5: "Az irodalmi szövegek sokféle stíluseszközt kombinálnak. Az elemzéshez szöveggel való munka szükséges, képzelet és ízlésgyakorlás.",
    hint5: "Az írónak az olvasóban érzelmet kell kiváltania a stíluseszközökkel.",
    q5: "Miért használunk stíluseszközöket?",
    a5: "A kifejezőerő fokozása", b5: "Szóhibák javítása", c5: "Nyelvtani szabály követése", d5: "Szótár hiányosságai miatt",
  },
  de: {
    title1: "Grundlagen von Stilmitteln",
    text1: "Stilmittel erhöhen die Ausdruckskraft der Sprache. Wichtige Stilmittel: Vergleich, Metapher, Metonymie, Synekdoche, Alliteration.",
    hint1: "Stilmittel werden absichtlich von Schriftstellern verwendet.",
    q1: "Was ist ein Stilmittel?",
    a1: "Absichtliche Ausdrucksmethode", b1: "Zufällig verwendetes Wort", c1: "Grammatische Regel", d1: "Sprachlicher Fehler",

    title2: "Tropen: Vergleich und Metapher",
    text2: "Vergleich: expliziter Vergleich (wie, als ob). Metapher: impliziter Vergleich ('das Leben ist ein Weg').",
    hint2: "Vergleich: explizit, Metapher: implizit.",
    q2: "Was ist der Unterschied zwischen Vergleich und Metapher?",
    a2: "Vergleich explizit, Metapher implizit", b2: "Vergleich Reim, Metapher nicht", c2: "Vergleich alt, Metapher modern", d2: "Kein Unterschied",

    title3: "Metonymie und Synekdoche",
    text3: "Metonymie: wir nennen ein Ding mit einem anderen Namen. Synekdoche: Teil statt Ganzes oder umgekehrt.",
    hint3: "Metonymie engere Beziehung, Synekdoche: Teil-Ganzes-Verhältnis.",
    q3: "Was ist Metonymie?",
    a3: "Wir nennen ein Ding mit anderem Namen", b3: "Wort wiederholungsfehler", c3: "Reim und Versanalyse", d3: "Textmerkmal",

    title4: "Klangstilmittel: Alliteration, Reim",
    text4: "Alliteration: wiederholte Anfangskonsonanten (z.B. 'fleißiger Fischer fängt Fische'). Reim: Gleichklang von Wortenden.",
    hint4: "Alliteration und Reim stärken Rhythmus und Musikalität.",
    q4: "Was ist Alliteration?",
    a4: "Wiederholung der Anfangskonsonanten", b4: "Gleichklang von Wortenden", c4: "Sprachfehler", d4: "Grammatische Wortordnung",

    title5: "Stilmittel in der Praxis",
    text5: "Literarische Texte kombinieren viele Stilmittel. Analyse erfordert Textarbeit, Imagination und Geschmacksbildung.",
    hint5: "Der Schriftsteller muss Gefühle beim Leser mit Stilmitteln wecken.",
    q5: "Warum verwenden wir Stilmittel?",
    a5: "Erhöhung der Ausdruckskraft", b5: "Behebung von Sprachfehlern", c5: "Befolgung grammatikalischer Regeln", d5: "Mangelnder Wortschatz",
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">🎨</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00FF88">🌟</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FFD700">🔗</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">🎵</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">💫</text>
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

export default function StyleDevicesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
