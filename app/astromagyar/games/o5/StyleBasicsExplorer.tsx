"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Stílus és stíluscél",
    text1: "A stílus a szöveg egyéni kifejezésmódja, amely az írástudó gondolatait és érzelmi nyilatkozatait tükrözi. A stíluscél az, hogy az olvasóban milyen hatást szeretnénk elérni: meggyőzés, szórakoztatás, tanítás vagy megindítás.",
    q1: "Mi a stílus?",
    a1: "szöveg egyéni kifejezésmódja",
    b1: "szöveg hosszúsága",
    c1: "szöveg témája",
    d1: "szöveg szerkezete",
    q2: "Melyik nem stíluscél?",
    a2: "betűtípus kiválasztása",
    b2: "meggyőzés",
    c2: "szórakoztatás",
    d2: "tanítás",
    title2: "Köznyelv és irodalmi nyelv",
    text2: "A köznyelv a szóbeszéd és az informális írásban használatos. Az irodalmi nyelv formálisabb, választékosabb, és tudatosan megválasztott szavakat alkalmaz. Az irodalmi nyelv emeli a szöveg igényes szintjét.",
    q3: "Melyik a köznyelvben használatos?",
    a3: "beszélgetés barátokkal",
    b3: "költemény",
    c3: "szépprózai mű",
    d3: "tudományos értekezés",
    q4: "Mit jellemez az irodalmi nyelv?",
    a4: "választékos szóhasználat",
    b4: "rövidítések",
    c4: "szleng kifejezések",
    d4: "gyerekies szavak",
    title3: "Szóképek: hasonlat és metafora",
    text3: "A hasonlat két dolgot explicit módon hasonlít össze (például: „olyan fehér, mint a hó"). A metafora egy dolgot más dolognak nevez meg anélkül, hogy ezt kifejezné (például: „a szívem fa"). Mindkettő szépséget és kifejezésügyelmet ad a szövegnek.",
    q5: "Mi a különbség a hasonlat és metafora között?",
    a5: "hasonlat explicit, metafora implicit",
    b5: "kettő ugyanaz",
    c5: "hasonlat csak prózában, metafora csak versben",
    d5: "hasonlat nyelvtani, metafora stilisztikai",
    q6: "Melyik a metafora?",
    a6: "a szívem fa",
    b6: "olyan hideg, mint jég",
    c6: "olyan fényes, mint a nap",
    d6: "olyan gyors, mint a futó",
    title4: "Ismétlés és ritmus",
    text4: "Az ismétlés szavak, hangok vagy szerkezetek megismétlésének retorikai eszköze. Az ismétlés erősen hat az olvasóra és emlékeztetőbb. A ritmus a szöveg ütemesítése, amely a mondatok hosszúsága és szerkezete alapján alakul. A jó ritmus olvasatlanabbá és kellemesebbé teszi a szöveget.",
    q7: "Mit érünk el az ismétléssel?",
    a7: "erőteljesebb hatást",
    b7: "rövidebb szöveget",
    c7: "több szót",
    d7: "más nyelvét",
    q8: "Mi a ritmus?",
    a8: "szöveg ütemesítése",
    b8: "szöveghosszúsága",
    c8: "szöveg témája",
    d8: "szöveg szerkezete",
    title5: "Stíluselemzés gyakorlat",
    text5: "A stílus elemzéséhez figyeld meg a szóhasználatot, a mondatszerkezeteket, az ismétléseket és a metaforákat. Kérdezd meg: milyen érzelmi hatást akarna elérni az szerző? Milyen szókincs jellemzi a szöveget? Mit érzesz az olvasásnál? Az ilyen kérdések segítik a stílus mélyebb megértését.",
    q9: "Mit figyelsz meg a stíluselemzésben?",
    a9: "szóhasználat, szerkezet, metaforák",
    b9: "csak szavakat",
    c9: "csak mondatokat",
    d9: "csak betűtípust",
    q10: "Milyen kérdésekre kell válaszolni a stílus megértéséhez?",
    a10: "szerző célja, szókincs, érzelmek",
    b10: "szöveg hossza",
    c10: "szöveg színe",
    d10: "szöveg mérete",
  },
  de: {
    title1: "Stil und Stilzweck",
    text1: "Der Stil ist die persönliche Ausdrucksweise eines Textes. Der Stilzweck ist der Effekt, den wir beim Leser erreichen möchten: Überzeugung, Unterhaltung, Belehrung oder Ergreifung.",
    q1: "Was ist Stil?",
    a1: "persönliche Ausdrucksweise des Textes",
    b1: "Textlänge",
    c1: "Textthema",
    d1: "Textstruktur",
    q2: "Welcher ist kein Stilzweck?",
    a2: "Schriftartauswahl",
    b2: "Überzeugung",
    c2: "Unterhaltung",
    d2: "Belehrung",
    title2: "Umgangssprache und literarische Sprache",
    text2: "Die Umgangssprache wird in Gesprächen und informellem Schreiben verwendet. Die literarische Sprache ist formeller, wählerischer und verwirklicht bewusst gewählte Wörter.",
    q3: "Welcher wird in der Umgangssprache verwendet?",
    a3: "Gespräche mit Freunden",
    b3: "Gedicht",
    c3: "Prosawerk",
    d3: "wissenschaftliche Abhandlung",
    q4: "Was kennzeichnet literarische Sprache?",
    a4: "wählerische Wortverwendung",
    b4: "Abkürzungen",
    c4: "Slang-Ausdrücke",
    d4: "kindliche Wörter",
    title3: "Sprachbilder: Vergleich und Metapher",
    text3: "Der Vergleich vergleicht zwei Dinge explizit (z.B. 'so weiß wie Schnee'). Die Metapher benennt ein Ding als ein anderes ohne dies auszudrücken (z.B. 'mein Herz ist Holz'). Beide geben Schönheit und Klarheit.",
    q5: "Was ist der Unterschied zwischen Vergleich und Metapher?",
    a5: "Vergleich explizit, Metapher implizit",
    b5: "beide sind gleich",
    c5: "Vergleich nur in Prosa, Metapher nur in Vers",
    d5: "Vergleich grammatikalisch, Metapher stilistisch",
    q6: "Welcher ist eine Metapher?",
    a6: "mein Herz ist Holz",
    b6: "so kalt wie Eis",
    c6: "so hell wie die Sonne",
    d6: "so schnell wie der Läufer",
    title4: "Wiederholung und Rhythmus",
    text4: "Wiederholung ist ein rhetorisches Mittel, bei dem Wörter, Laute oder Strukturen wiederholt werden. Der Rhythmus ist die Kadenz des Textes, die sich aus der Länge und Struktur der Sätze ergibt.",
    q7: "Was erreichen wir mit Wiederholung?",
    a7: "stärkere Wirkung",
    b7: "kürzerer Text",
    c7: "mehr Wörter",
    d7: "andere Sprache",
    q8: "Was ist Rhythmus?",
    a8: "Takt des Textes",
    b8: "Textlänge",
    c8: "Textthema",
    d8: "Textstruktur",
    title5: "Stilanalysepraxis",
    text5: "Um den Stil zu analysieren, beobachte die Wortverwendung, Satzstrukturen, Wiederholungen und Metaphern. Frage: Welchen Effekt möchte der Autor erreichen? Welcher Wortschatz kennzeichnet den Text?",
    q9: "Worauf achtest du bei der Stilanalyse?",
    a9: "Wortverwendung, Struktur, Metaphern",
    b9: "nur Wörter",
    c9: "nur Sätze",
    d9: "nur Schriftart",
    q10: "Welchen Fragen musst du für das Verständnis des Stils nachgehen?",
    a10: "Autor-Absicht, Wortschatz, Gefühle",
    b10: "Textlänge",
    c10: "Textfarbe",
    d10: "Textgröße",
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
          <rect x="30" y="35" width="80" height="90" rx="6" fill="#B44DFF" opacity="0.8" />
          <rect x="130" y="35" width="80" height="90" rx="6" fill="#B44DFF" opacity="0.5" />
          <text x="70" y="65" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Stílus</text>
          <text x="170" y="65" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Cél</text>
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
          <text x="60" y="60" textAnchor="middle" fontSize="14" fill="#10B981" fontWeight="bold" fontStyle="italic">Köznyelv</text>
          <text x="60" y="80" textAnchor="middle" fontSize="11" fill="#fff">informális</text>
          <text x="180" y="60" textAnchor="middle" fontSize="14" fill="#FF2D78" fontWeight="bold" fontStyle="italic">Irodalmi</text>
          <text x="180" y="80" textAnchor="middle" fontSize="11" fill="#fff">formális</text>
          <line x1="90" y1="95" x2="150" y2="95" stroke="#FFD700" strokeWidth="2" />
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
          <text x="60" y="60" textAnchor="middle" fontSize="13" fill="#00D4FF" fontWeight="bold">Hasonlat</text>
          <text x="60" y="85" textAnchor="middle" fontSize="11" fill="#fff" fontStyle="italic">mint a hó</text>
          <text x="180" y="60" textAnchor="middle" fontSize="13" fill="#FFD700" fontWeight="bold">Metafora</text>
          <text x="180" y="85" textAnchor="middle" fontSize="11" fill="#fff" fontStyle="italic">a szív fa</text>
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
          <text x="60" y="60" textAnchor="middle" fontSize="13" fill="#FF2D78" fontWeight="bold">Ismétlés</text>
          <text x="60" y="80" textAnchor="middle" fontSize="11" fill="#fff">szó, hang</text>
          <text x="60" y="100" textAnchor="middle" fontSize="11" fill="#fff">szerkezet</text>
          <text x="180" y="60" textAnchor="middle" fontSize="13" fill="#10B981" fontWeight="bold">Ritmus</text>
          <text x="180" y="80" textAnchor="middle" fontSize="11" fill="#fff">ütemesítés</text>
          <text x="180" y="100" textAnchor="middle" fontSize="11" fill="#fff">szerkezet</text>
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
          <circle cx="60" cy="70" r="25" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="60" y="75" textAnchor="middle" fontSize="11" fill="#B44DFF" fontWeight="bold">Szó-</text>
          <text x="60" y="88" textAnchor="middle" fontSize="11" fill="#B44DFF" fontWeight="bold">használat</text>
          <circle cx="120" cy="50" r="25" fill="none" stroke="#FF2D78" strokeWidth="2" />
          <text x="120" y="55" textAnchor="middle" fontSize="11" fill="#FF2D78" fontWeight="bold">Szerkezet</text>
          <circle cx="180" cy="70" r="25" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="180" y="75" textAnchor="middle" fontSize="11" fill="#10B981" fontWeight="bold">Meta-</text>
          <text x="180" y="88" textAnchor="middle" fontSize="11" fill="#10B981" fontWeight="bold">forák</text>
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

export default function StyleBasicsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
