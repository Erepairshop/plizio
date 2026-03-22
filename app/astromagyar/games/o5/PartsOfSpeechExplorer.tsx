"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Ige - a cselekvés szava",
    text1: "Az ige a cselekvés, történés vagy állapot szavá. Például: fut, gondolkodik, van, marad, nézeti. Az igék konjugálódnak személyekben és időben: én futok, te futsz, ő fut.",
    q1: "Melyik az ige?",
    a1: "futni",
    b1: "szép",
    c1: "gyorsan",
    d1: "futás",
    q2: "Melyik mondat tartalmaz igét?",
    a2: "A gyermek fut az iskola felé.",
    b2: "Ez a szép ház.",
    c2: "A kutyám fáradt.",
    d2: "Volt egyszer egy vár.",
    title2: "Főnév - a lét, dolog, személy szava",
    text2: "A főnév konkrét vagy absztrakt dolgokat, személyeket, helyeket jelöl. Például: ház, szék, tanár, barátság, város. A főnevek számosíthatóak (egyes → többes): ház → házak.",
    q3: "Melyik a főnév?",
    a3: "ház",
    b3: "szép",
    c3: "futni",
    d3: "gyorsan",
    q4: "Mely szó az absztrakt főnév?",
    a4: "szépség",
    b4: "szék",
    c4: "barát",
    d4: "város",
    title3: "Melléknév - a tulajdonság szava",
    text3: "A melléknév a főneveket vagy más szavakat módosít, tulajdonságokat fejez ki. Például: szép, okos, nagy, vörös, fárad. A melléknevek fokozhatóak: szép → szebb → legszebb.",
    q5: "Melyik a melléknév?",
    a5: "szép",
    b5: "szépség",
    c5: "szépül",
    d5: "szépíteni",
    q6: "Mely melléknevek fokozatai helyesek?",
    a6: "szép → szebb → legszebb",
    b6: "szép → szépesebb → legszépesebb",
    c6: "szép → szépebb → legszépebb",
    d6: "szép → szépen → legszépbben",
    title4: "Határozószó - az ige bővítménye",
    text4: "A határozószó az igét, mellékneveket vagy más szavakat módosít, körülményeket fejez ki. Például: gyorsan, ma, ott, nagyon. A határozószó nem változik személyekben és számban.",
    q7: "Melyik a határozószó?",
    a7: "gyorsan",
    b7: "gyors",
    c7: "gyorsul",
    d7: "gyorsulás",
    q8: "Mi a határozószó szerepe?",
    a8: "az ige körülményeit fejezi ki",
    b8: "a főnevet módosítja",
    c8: "új szavakat hoz létre",
    d8: "az igét konjugálja",
    title5: "Szófajok összetettebb esetek",
    text5: "Van még több szófaj: névmás, számnév, előljáró, kötőszó, igenevek (infinitív, igenév, melléknévi igenév). Például: én (névmás), három (számnév), alatt (előljáró), és (kötőszó), futni (infinitív).",
    q9: "Melyik az igenév?",
    a9: "futni",
    b9: "fut",
    c9: "futás",
    d9: "futó",
    q10: "Melyik szófaj a 'három'?",
    a10: "számnév",
    b10: "határozószó",
    c10: "főnév",
    d10: "melléknév",
  },
  de: {
    title1: "Verb - das Wort der Handlung",
    text1: "Das Verb drückt eine Handlung, ein Ereignis oder einen Zustand aus. Zum Beispiel: futni (laufen), gondolkodik (denken), van (sein). Verben konjugieren: én futok, te futsz, ő fut.",
    q1: "Welches ist ein Verb?",
    a1: "futni",
    b1: "szép",
    c1: "gyorsan",
    d1: "futás",
    q2: "Welcher Satz enthält ein Verb?",
    a2: "A gyermek fut az iskola felé.",
    b2: "Ez a szép ház.",
    c2: "A kutyám fáradt.",
    d2: "Volt egyszer egy vár.",
    title2: "Nomen - das Wort des Wesens",
    text2: "Das Nomen drückt konkrete oder abstrakte Dinge, Personen, Orte aus. Zum Beispiel: ház (Haus), szék (Stuhl), tanár (Lehrer), barátság (Freundschaft). Nomina können pluralisiert werden: ház → házak.",
    q3: "Welches ist ein Nomen?",
    a3: "ház",
    b3: "szép",
    c3: "futni",
    d3: "gyorsan",
    q4: "Welches Wort ist ein abstraktes Nomen?",
    a4: "szépség",
    b4: "szék",
    c4: "barát",
    d4: "város",
    title3: "Adjektiv - das Wort der Eigenschaft",
    text3: "Das Adjektiv modifiziert Nomina, drückt Eigenschaften aus. Zum Beispiel: szép (schön), okos (klug), nagy (groß), vörös (rot). Adjektive können gesteigert werden: szép → szebb → legszebb.",
    q5: "Welches ist ein Adjektiv?",
    a5: "szép",
    b5: "szépség",
    c5: "szépül",
    d5: "szépíteni",
    q6: "Welche Adjektive sind korrekt gesteigert?",
    a6: "szép → szebb → legszebb",
    b6: "szép → szépesebb → legszépesebb",
    c6: "szép → szépebb → legszépebb",
    d6: "szép → szépen → legszépbben",
    title4: "Adverb - die Bestimmung des Verbs",
    text4: "Das Adverb modifiziert das Verb, Adjektive oder andere Wörter, drückt Umstände aus. Zum Beispiel: gyorsan (schnell), ma (heute), ott (dort), nagyon (sehr). Das Adverb ändert nicht seine Form.",
    q7: "Welches ist ein Adverb?",
    a7: "gyorsan",
    b7: "gyors",
    c7: "gyorsul",
    d7: "gyorsulás",
    q8: "Was ist die Rolle eines Adverbs?",
    a8: "drückt die Umstände des Verbs aus",
    b8: "modifiziert das Nomen",
    c8: "schafft neue Wörter",
    d8: "konjugiert das Verb",
    title5: "Komplexere Wortarten",
    text5: "Es gibt weitere Wortarten: Pronomen, Numerale, Präposition, Konjunktion, Verbalsubstantive (Infinitiv, Gerundium). Zum Beispiel: én (Pronomen), három (Numerale), alatt (Präposition), és (Konjunktion), futni (Infinitiv).",
    q9: "Welches ist ein Infinitiv?",
    a9: "futni",
    b9: "fut",
    c9: "futás",
    d9: "futó",
    q10: "Welche Wortart ist 'három'?",
    a10: "Numerale",
    b10: "Adverb",
    c10: "Nomen",
    d10: "Adjektiv",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fff0e0 0%, #fffaf0 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#FF9500">
            ✍️
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Ige
          </text>
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0f7ff 0%, #f0f9ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#00D4FF">
            🏠
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Főnév
          </text>
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0ffe0 0%, #f0fff0 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#00FF88">
            🌈
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Melléknév
          </text>
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f0e0ff 0%, #faf0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#B44DFF">
            ⚡
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Határozószó
          </text>
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ffe0f0 0%, #fff0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#FF2D78">
            ✓
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Összegzés
          </text>
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
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function PartsOfSpeechExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
