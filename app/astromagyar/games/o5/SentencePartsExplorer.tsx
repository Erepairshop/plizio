"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Alany és állítmány",
    text1: "Az alany az, aki vagy ami a cselekvést végzi. Az állítmány az ige, amely a cselekvést fejezi ki. Például: 'A macska alszik.' - 'macska' az alany, 'alszik' az állítmány. Az alany és állítmány a mondat fő részei.",
    q1: "Melyik a mondat alanya az 'A tanár magyarázza a leckét' mondatban?",
    a1: "tanár",
    b1: "magyarázza",
    c1: "lecke",
    d1: "a",
    q2: "Mi az állítmány az 'Az autó megy az úton' mondatban?",
    a2: "megy",
    b2: "autó",
    c2: "út",
    d2: "az",
    title2: "Tárgy és határozó",
    text2: "A tárgy az, amire a cselekvés irányul. A határozó a cselekvést körülbevesz (mikor, hol, hogyan, miért). Például: 'Anna szép költeményt ír papírra napi.' - 'költeményt' a tárgy, 'szép' a jelző, 'papírra' a helyhatározó, 'napi' az időhatározó.",
    q3: "Melyik a tárgy az 'János könyvet olvas az előszobában' mondatban?",
    a3: "könyvet",
    b3: "János",
    c3: "előszobában",
    d3: "olvas",
    q4: "Melyik a határozó az 'Gyorsan futottak az erdőben' mondatban?",
    a4: "az erdőben",
    b4: "gyorsan",
    c4: "futottak",
    d4: "az erdőben és gyorsan",
    title3: "Jelző",
    text3: "A jelző a főneveket vagy más szavakat bővít, módosít. A jelző lehet melléknév, számnév, főnév vagy egyéb szófaj. Például: 'szép ház' - 'szép' a jelző. 'három alma' - 'három' a jelző.",
    q5: "Mi a jelző az 'Az öregasszony gyorsan haladt' mondatban?",
    a5: "öreg",
    b5: "gyorsan",
    c5: "haladt",
    d5: "asszony",
    q6: "Melyik mondat nem tartalmaz mellékneveket?",
    a6: "A kutya szalad az utcán.",
    b6: "A kék ég szép.",
    c6: "Az nagy ház szép.",
    d6: "A vörös virág szép.",
    title4: "Mondatrészek gyakorlatban",
    text4: "A mondatelemzésben azonosítjuk az alanyat, állítmányt, tárgyat és határozókat. Például: 'A tanulók játszanak az iskola kertjében.' - Alany: tanulók, Állítmány: játszanak, Határozó: az iskola kertjében.",
    q7: "Hány fő mondatrészt tartalmaz az 'A bolond idős asszony az utcán beszél magában' mondat?",
    a7: "3 (alany, állítmány, határozó)",
    b7: "2 (alany, állítmány)",
    c7: "4 (alany, állítmány, tárgy, határozó)",
    d7: "5 (alany, állítmány, tárgy, jelző, határozó)",
    q8: "Melyik az alany az 'Három lány fut az udvaron' mondatban?",
    a8: "lány",
    b8: "három",
    c8: "udvaron",
    d8: "fut",
    title5: "Mondatrészek összetettebb szinten",
    text5: "Vannak még további mondatrészek: értelmezés, szabad határozó, közvetlen tárgy, közvetett tárgy. Például: 'Az eredeti önmagát ismerve boldogan állt.' - Itt az 'eredeti' értelmezés, 'magát' közvetett tárgy. Az összetett mondatokban ezek sokkal bonyolultabbak lehetnek.",
    q9: "Mi az értelmezés az 'Pál, az óvodapedagógus, kedvesen beszél' mondatban?",
    a9: "óvodapedagógus",
    b9: "Pál",
    c9: "kedvesen",
    d9: "beszél",
    q10: "Hány mondatrészt lehet azonosítani az 'A finom leves sós volt' mondatban?",
    a10: "4 (alany, jelző, jelző, állítmány)",
    b10: "3 (alany, jelző, állítmány)",
    c10: "2 (alany, állítmány)",
    d10: "5 (alany, jelző, jelző, állítmány, határozó)",
  },
  de: {
    title1: "Subjekt und Prädikat",
    text1: "Das Subjekt ist, wer oder was die Handlung ausführt. Das Prädikat ist das Verb, das die Handlung ausdrückt. Zum Beispiel: 'A macska alszik.' - 'macska' ist das Subjekt, 'alszik' ist das Prädikat. Subjekt und Prädikat sind die Hauptteile des Satzes.",
    q1: "Welches ist das Subjekt im Satz 'A tanár magyarázza a leckét'?",
    a1: "tanár",
    b1: "magyarázza",
    c1: "lecke",
    d1: "a",
    q2: "Welches ist das Prädikat im Satz 'Az autó megy az úton'?",
    a2: "megy",
    b2: "autó",
    c2: "út",
    d2: "az",
    title2: "Objekt und Bestimmungen",
    text2: "Das Objekt ist, worauf sich die Handlung richtet. Die Bestimmung umgibt die Handlung (wann, wo, wie, warum). Zum Beispiel: 'Anna schreibt ein schönes Gedicht aufs Papier täglich.' - 'Gedicht' ist das Objekt, 'schön' ist das Attribut, 'aufs Papier' ist die Ortsbestimmung.",
    q3: "Welches ist das Objekt im Satz 'János könyvet olvas az előszobában'?",
    a3: "könyvet",
    b3: "János",
    c3: "előszobában",
    d3: "olvas",
    q4: "Welche Bestimmung steht im Satz 'Gyorsan futottak az erdőben'?",
    a4: "az erdőben",
    b4: "gyorsan",
    c4: "futottak",
    d4: "az erdőben und gyorsan",
    title3: "Attribut",
    text3: "Das Attribut erweitert und modifiziert Nomina. Das Attribut kann ein Adjektiv, Numerale, Nomen oder eine andere Wortart sein. Zum Beispiel: 'schönes Haus' - 'schön' ist das Attribut. 'drei Äpfel' - 'drei' ist das Attribut.",
    q5: "Welches ist das Attribut im Satz 'Die alte Frau geht schnell'?",
    a5: "alt",
    b5: "schnell",
    c5: "geht",
    d5: "Frau",
    q6: "Welcher Satz hat kein Adjektiv?",
    a6: "Der Hund läuft auf der Straße.",
    b6: "Der blaue Himmel ist schön.",
    c6: "Das große Haus ist schön.",
    d6: "Die rote Blume ist schön.",
    title4: "Satzteile in der Praxis",
    text4: "Bei der Satzanalyse identifizieren wir das Subjekt, Prädikat, Objekt und Bestimmungen. Zum Beispiel: 'Die Schüler spielen im Schulgarten.' - Subjekt: Schüler, Prädikat: spielen, Bestimmung: im Schulgarten.",
    q7: "Wie viele Hauptsatzteile hat der Satz 'Der dumme alte Mann spricht auf der Straße mit sich selbst'?",
    a7: "3 (Subjekt, Prädikat, Bestimmung)",
    b7: "2 (Subjekt, Prädikat)",
    c7: "4 (Subjekt, Prädikat, Objekt, Bestimmung)",
    d7: "5 (Subjekt, Prädikat, Objekt, Attribut, Bestimmung)",
    q8: "Welches ist das Subjekt im Satz 'Drei Mädchen laufen auf dem Hof'?",
    a8: "Mädchen",
    b8: "drei",
    c8: "Hof",
    d8: "laufen",
    title5: "Komplexere Satzteile",
    text5: "Es gibt weitere Satzteile: Appositiv, freie Bestimmung, direktes Objekt, indirektes Objekt. Zum Beispiel: 'Paul, der Kindergärtner, spricht freundlich.' - Hier ist 'Kindergärtner' ein Appositiv. In komplexeren Sätzen können diese Teile sehr komplex sein.",
    q9: "Was ist die Apposition im Satz 'Paul, der Kindergärtner, spricht freundlich'?",
    a9: "Kindergärtner",
    b9: "Paul",
    c9: "freundlich",
    d9: "spricht",
    q10: "Wie viele Satzteile hat der Satz 'Die feine Suppe war salzig'?",
    a10: "4 (Subjekt, Attribut, Attribut, Prädikat)",
    b10: "3 (Subjekt, Attribut, Prädikat)",
    c10: "2 (Subjekt, Prädikat)",
    d10: "5 (Subjekt, Attribut, Attribut, Prädikat, Bestimmung)",
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
          <text x="80" y="85" textAnchor="middle" fontSize="50" fill="#FF9500">
            🔵
          </text>
          <text x="160" y="85" textAnchor="middle" fontSize="50" fill="#FF9500">
            ⚡
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Alany - Állítmány
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0ffe0 0%, #f0fff0 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="80" y="85" textAnchor="middle" fontSize="50" fill="#00FF88">
             📦
          </text>
          <text x="160" y="85" textAnchor="middle" fontSize="50" fill="#00FF88">
            📍
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Tárgy - Határozó
          </text>
        </svg>
      ),
      questions: [
        { question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" },
        { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "d4" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0f7ff 0%, #f0f9ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#00D4FF">
            ✨
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Jelző
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ffe0f0 0%, #fff0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#FF2D78">
            💬
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Gyakorlat
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f0e0ff 0%, #faf0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#B44DFF">
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

export default function SentencePartsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
