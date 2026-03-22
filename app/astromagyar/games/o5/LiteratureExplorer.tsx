"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Vers és próza",
    text1: "A költészet és a próza az irodalom két alapvető formája. A vers ritmussal, rímmel és formával bír (szonett, tercina, tercet). A próza szabad szerkezetű, könnyebben olvasható, és történeteket vagy eszméket fejez ki. Mind a kettő fontos az irodalmi kifejezésben.",
    q1: "Mi a próza alapvető jellemzője?",
    a1: "szabad szerkezet",
    b1: "ritmus",
    c1: "rím",
    d1: "szótagszámlálás",
    q2: "Melyik vers forma szonett?",
    a2: "14 soros vers",
    b2: "10 soros vers",
    c2: "8 soros vers",
    d2: "16 soros vers",
    title2: "Költői eszközök: alliteráció és aszonnancia",
    text2: "Az alliteráció az azonos hanggal kezdődő szavak ismétlése (pl. \"régi rab rábia\"). Az aszonnancia az azonos hangok vagy hangzáslatok ismétlése szavak közepén (pl. \"kor-por-for\"). Ezek erősítik a költői hatást és a szöveg zeneiségét.",
    q3: "Mi az alliteráció?",
    a3: "azonos hanggal kezdődő szavak ismétlése",
    b3: "magánhangzó ismétlése",
    c3: "szavak ismétlése",
    d3: "verssorok ismétlése",
    q4: "Mit teremt az aszonnancia?",
    a4: "zenei hatást",
    b4: "képi hatást",
    c4: "szöveges hatást",
    d4: "logikai hatást",
    title3: "Versformák: jambusz és trocheus",
    text3: "A jambusz lejtése a könnyűtől a nehézhez megy ( ∪ — ), míg a trocheus a nehéztől a könnyűhöz ( — ∪ ). Ezek alapvetőek a magyar versészetben. Az üteme vagy a méter fontos szerepet játszik a vers hangzásában.",
    q5: "Melyik a trocheus lejtése?",
    a5: "nehéztől könnyűhöz",
    b5: "könnyűtől nehézhez",
    c5: "közepes ütem",
    d5: "szabad ütem",
    q6: "Mit határoznak meg a versformák?",
    a6: "a vers hangzást",
    b6: "a vers témáját",
    c6: "a vers hosszát",
    d6: "a vers szerzőjét",
    title4: "Irodalmi műfajok: epika, líra, dráma",
    text4: "Az epika nagyobb narratív formákat foglal magában (regény, novella), a líra személyes érzelmi kifejezésé (vers, dal), míg a dráma a szövegben lejátszódó konfliktusok bemutatása. A három műfaj különbözően fejezi ki az emberi tapasztalatot.",
    q7: "Melyik műfaj a személyes érzelmi kifejezés?",
    a7: "líra",
    b7: "epika",
    c7: "dráma",
    d7: "essays",
    q8: "Mit mutat be a dráma?",
    a8: "szövegbeli konfliktusokat",
    b8: "személyes érzelmet",
    c8: "történeti eseményeket",
    d8: "tudományos tényeket",
    title5: "Irodalmi elemzés gyakorlata",
    text5: "Az irodalmi elemzésben figyelj a szerkezetre, a szóhasználatra, a képekre és az érzelmi hangulatra. Kérdezd meg: mi a szerzőnek a célja? Milyen érzelmeket fejez ki? Milyen literáris eszközöket használ? Az irodalom mélyen megértéséhez szükséges a kritikai gondolkodás és a szöveg gondos olvasása.",
    q9: "Mit figyelsz meg az irodalmi elemzésben?",
    a9: "szerkezet, szóhasználat, képek",
    b9: "csak szavakat",
    c9: "csak hosszúságot",
    d9: "csak szerzőt",
    q10: "Mi a kulcs az irodalom megértésében?",
    a10: "kritikai gondolkodás és gondos olvasás",
    b10: "gyors olvasás",
    c10: "biográfia ismerete",
    d10: "szótár használata",
  },
  de: {
    title1: "Vers und Prosa",
    text1: "Poesie und Prosa sind zwei grundlegende Formen der Literatur. Das Gedicht hat Rhythmus, Reim und Form (Sonett, Terzine, Tercett). Die Prosa ist frei strukturiert, leichter zu lesen und drückt Geschichten oder Ideen aus. Beide sind wichtig für den literarischen Ausdruck.",
    q1: "Was ist das Grundmerkmal von Prosa?",
    a1: "freie Struktur",
    b1: "Rhythmus",
    c1: "Reim",
    d1: "Silbenzählung",
    q2: "Welches Versmaß ist ein Sonett?",
    a2: "14-zeiliges Gedicht",
    b2: "10-zeiliges Gedicht",
    c2: "8-zeiliges Gedicht",
    d2: "16-zeiliges Gedicht",
    title2: "Poetische Mittel: Alliteration und Assonanz",
    text2: "Alliteration ist die Wiederholung von Wörtern, die mit dem gleichen Laut beginnen. Assonanz ist die Wiederholung von gleichen Lauten oder Lautmustern in Wörtern. Diese verstärken die poetische Wirkung und die Musikalität des Textes.",
    q3: "Was ist Alliteration?",
    a3: "Wiederholung von Wörtern mit gleichem Anfangslaut",
    b3: "Wiederholung von Vokalen",
    c3: "Wiederholung von Wörtern",
    d3: "Wiederholung von Verszeilen",
    q4: "Was schafft Assonanz?",
    a4: "musikalische Wirkung",
    b4: "bildliche Wirkung",
    c4: "Textwirkung",
    d4: "logische Wirkung",
    title3: "Versmaße: Jambus und Trochäus",
    text3: "Der Jambus verläuft von Leicht zu Schwer (∪ —), während der Trochäus von Schwer zu Leicht (— ∪) verläuft. Diese sind fundamental in der ungarischen Poetik. Der Rhythmus oder das Metrum spielt eine wichtige Rolle im Klang des Gedichts.",
    q5: "Welches ist der Trochäusverlauf?",
    a5: "schwer zu leicht",
    b5: "leicht zu schwer",
    c5: "gemäßigter Rhythmus",
    d5: "freier Rhythmus",
    q6: "Was bestimmen die Versmaße?",
    a6: "den Klang des Gedichts",
    b6: "das Thema des Gedichts",
    c6: "die Länge des Gedichts",
    d6: "den Autor des Gedichts",
    title4: "Literarische Gattungen: Epik, Lyrik, Dramatik",
    text4: "Die Epik umfasst größere narrative Formen (Roman, Novelle), die Lyrik persönliche Gefühlsäußerungen (Gedicht, Lied), während die Dramatik die im Text ablaufenden Konflikte zeigt. Die drei Gattungen drücken die menschliche Erfahrung unterschiedlich aus.",
    q7: "Welche Gattung ist der persönliche Gefühlsausdruck?",
    a7: "Lyrik",
    b7: "Epik",
    c7: "Dramatik",
    d7: "Essays",
    q8: "Was zeigt die Dramatik?",
    a8: "Konflikte im Text",
    b8: "persönliche Gefühle",
    c8: "historische Ereignisse",
    d8: "wissenschaftliche Fakten",
    title5: "Literarische Analysepraktik",
    text5: "Bei der literarischen Analyse achte auf die Struktur, Wortverwendung, Bilder und emotionale Stimmung. Frage: Was ist die Absicht des Autors? Welche Gefühle drückt er aus? Welche literarischen Mittel benutzt er? Für ein tieferes Verständnis von Literatur ist kritisches Denken und sorgfältiges Lesen notwendig.",
    q9: "Worauf achtest du bei der literarischen Analyse?",
    a9: "Struktur, Wortverwendung, Bilder",
    b9: "nur Wörter",
    c9: "nur Länge",
    d9: "nur Autor",
    q10: "Was ist der Schlüssel zum Verständnis von Literatur?",
    a10: "kritisches Denken und sorgfältiges Lesen",
    b10: "schnelles Lesen",
    c10: "Biografie-Wissen",
    d10: "Wörterbuchnutzung",
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
          <text x="70" y="50" textAnchor="middle" fontSize="13" fill="#FF2D78" fontWeight="bold" fontStyle="italic">Vers</text>
          <text x="70" y="75" textAnchor="middle" fontSize="10" fill="#fff">ritmus</text>
          <text x="70" y="90" textAnchor="middle" fontSize="10" fill="#fff">rím</text>
          <text x="170" y="50" textAnchor="middle" fontSize="13" fill="#10B981" fontWeight="bold" fontStyle="italic">Próza</text>
          <text x="170" y="75" textAnchor="middle" fontSize="10" fill="#fff">szabad</text>
          <text x="170" y="90" textAnchor="middle" fontSize="10" fill="#fff">szerkezet</text>
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
          <rect x="20" y="35" width="100" height="90" rx="6" fill="#00D4FF" opacity="0.8" />
          <text x="70" y="65" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Alliteráció</text>
          <text x="70" y="85" textAnchor="middle" fontSize="10" fill="#fff">azonos hang</text>
          <rect x="140" y="35" width="100" height="90" rx="6" fill="#FFD700" opacity="0.8" />
          <text x="190" y="65" textAnchor="middle" fontSize="12" fill="#000" fontWeight="bold">Aszonnancia</text>
          <text x="190" y="85" textAnchor="middle" fontSize="10" fill="#000">közepű hang</text>
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
          <path d="M 40 120 L 60 80 L 80 120 L 100 80" fill="none" stroke="#FF2D78" strokeWidth="2" strokeLinecap="round" />
          <text x="70" y="65" textAnchor="middle" fontSize="12" fill="#FF2D78" fontWeight="bold">Jambusz</text>
          <path d="M 140 80 L 160 120 L 180 80 L 200 120" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <text x="170" y="65" textAnchor="middle" fontSize="12" fill="#10B981" fontWeight="bold">Trocheus</text>
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
          <rect x="10" y="35" width="60" height="90" rx="6" fill="#FF2D78" opacity="0.8" />
          <text x="40" y="85" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Epika</text>
          <rect x="90" y="35" width="60" height="90" rx="6" fill="#00D4FF" opacity="0.8" />
          <text x="120" y="85" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Líra</text>
          <rect x="170" y="35" width="60" height="90" rx="6" fill="#10B981" opacity="0.8" />
          <text x="200" y="85" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Dráma</text>
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
          <circle cx="50" cy="70" r="18" fill="none" stroke="#FF2D78" strokeWidth="2" />
          <text x="50" y="75" textAnchor="middle" fontSize="11" fill="#FF2D78" fontWeight="bold">Szerkezet</text>
          <circle cx="120" cy="70" r="18" fill="none" stroke="#00D4FF" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="11" fill="#00D4FF" fontWeight="bold">Szavak</text>
          <circle cx="190" cy="70" r="18" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="190" y="75" textAnchor="middle" fontSize="11" fill="#10B981" fontWeight="bold">Képek</text>
          <text x="120" y="135" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Irodalmi elemzés</text>
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

export default function LiteratureExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
