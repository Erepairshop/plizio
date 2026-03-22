"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Hangtan ismétlés",
    text1: "A magyar nyelvben 14 magánhangzó van: a, e, i, o, ö, u, ü, és sok mássalhangzó. A hangrend az elöl- és hátul artikulált magánhangzók közötti különbség. A hasonulás amikor hangok hasonlóvá válnak. Ezek a fogalmak alapvetőek a helyesírásban.",
    q1: "Hány magánhangzó van a magyarban?",
    a1: "14",
    b1: "10",
    c1: "8",
    d1: "12",
    q2: "Mi a hangrend?",
    a2: "elöl- és hátul artikuláció",
    b2: "rím",
    c2: "ritmus",
    d2: "próza",
    title2: "Szóelemzés ismétlés",
    text2: "A szótő az alapvető jelentéshordozó rész. A toldalékoknak több típusa van: képzők (szófajváltoztatás), jelek (nyelvtani viszony), ragok (mondatbeli szerep). A szóelemzés segít megérteni a szavak szerkezetét és jelentését.",
    q3: "Mi a szótő?",
    a3: "az alapvető jelentéshordozó rész",
    b3: "a végzésódés",
    c3: "a második szótag",
    d3: "a hangsúlyos szótag",
    q4: "Mit fejez ki a rag?",
    a4: "mondatbeli szerep",
    b4: "szófajváltoztatás",
    c4: "szótagok száma",
    d4: "kiejtés módja",
    title3: "Szófajok ismétlés",
    text3: "A magyar nyelvben nyolc fő szófaj van: ige, főnév, melléknév, határozószó, névmás, számnév, elöljáró, kötőszó. Mindegyik más-más nyelvtani szerepet tölt be. Az igék cselekvéseket, az főnevek tárgyakat vagy személyeket jelölnek.",
    q5: "Melyik szófaj jelöl személyt vagy tárgyat?",
    a5: "főnév",
    b5: "ige",
    c5: "melléknév",
    d5: "határozószó",
    q6: "Mi az ige feladata?",
    a6: "cselekvés jelölése",
    b6: "tulajdonság leírása",
    c6: "szám megjelölése",
    d6: "viszonyozás",
    title4: "Mondatrészek ismétlés",
    text4: "A mondat alanya és állítmánya a legfontosabb részek. A tárgy a cselekvés tárgyát, a határozó a körülményt (hely, idő, mód) adja meg. A jelző a szót vagy a személyt egyénít. E részek összekapcsolódása adja a mondat értelmét.",
    q7: "Mi az alany?",
    a7: "a cselekvés végzője",
    b7: "a cselekvés tárgya",
    c7: "a cselekvés körülménye",
    d7: "a cselekvés végpont",
    q8: "Mit jelöl a határozó?",
    a8: "körülményt",
    b8: "végpontot",
    c8: "személyt",
    d8: "tárgyat",
    title5: "Nagy próba: vegyes feladatok",
    text5: "Az ötödik osztály végén a tanulónak ismernie kell a hang-tan, szóelemzés, szófajok, mondatrészek és stílustan alapjait. Fontos a rendszeres gyakorlás, az alapvető szabályok megértése és az irodalmi szövegek gondos olvasása. Minden tanult témát alkalmaz majd az írásban és beszédben is!",
    q9: "Mit taníttunk az O5 szintjén?",
    a9: "hangtan, szóelemzés, szófajok",
    b9: "csak verseket",
    c9: "csak helyesírást",
    d9: "csak irodalmat",
    q10: "Mi a siker kulcsa a magyar nyelvben?",
    a10: "rendszeres gyakorlás és megértés",
    b10: "gyors olvasás",
    c10: "sok szó megtanulása",
    d10: "szótárak nélkül tanulás",
  },
  de: {
    title1: "Phonetik Wiederholung",
    text1: "Im Ungarischen gibt es 14 Vokale und viele Konsonanten. Die Vokalharmonie unterscheidet vordere und hintere Vokale. Die Assimilation tritt auf, wenn Laute ähnlich werden. Diese Konzepte sind grundlegend für die Rechtschreibung.",
    q1: "Wie viele Vokale gibt es im Ungarischen?",
    a1: "14",
    b1: "10",
    c1: "8",
    d1: "12",
    q2: "Was ist Vokalharmonie?",
    a2: "vordere und hintere Vokale",
    b2: "Reim",
    c2: "Rhythmus",
    d2: "Prosa",
    title2: "Wortanalyse Wiederholung",
    text2: "Der Stamm ist der Bedeutungsträger. Suffixe haben mehrere Typen: Ableitungsmorpheme, grammatische Marker, Kasus. Die Wortanalyse hilft, die Wortstruktur zu verstehen.",
    q3: "Was ist der Stamm?",
    a3: "der Bedeutungsträger",
    b3: "die Endung",
    c3: "die zweite Silbe",
    d3: "die betonte Silbe",
    q4: "Was drückt der Kasus aus?",
    a4: "grammatische Rolle",
    b4: "Wortartenwechsel",
    c4: "Silbenzahl",
    d4: "Ausspracheweise",
    title3: "Wortarten Wiederholung",
    text3: "Im Ungarischen gibt es acht Hauptwortarten: Verb, Nomen, Adjektiv, Adverb, Pronomen, Zahlwort, Präposition, Konjunktion. Jede erfüllt eine andere grammatische Rolle.",
    q5: "Welche Wortart benennt eine Person oder ein Ding?",
    a5: "Nomen",
    b5: "Verb",
    c5: "Adjektiv",
    d5: "Adverb",
    q6: "Was ist die Aufgabe des Verbs?",
    a6: "Handlung anzeigen",
    b6: "Eigenschaft beschreiben",
    c6: "Zahl angeben",
    d6: "Verhältnis zeigen",
    title4: "Satzglieder Wiederholung",
    text4: "Subjekt und Prädikat sind die wichtigsten Teile. Das Objekt ist das Ziel der Handlung, die Adverbiale gibt die Umstände an. Das Attribut individualisiert. Diese Teile bilden zusammen den Satz.",
    q7: "Was ist das Subjekt?",
    a7: "der Handlungsträger",
    b7: "das Handlungsziel",
    c7: "die Handlungsumstände",
    d7: "der Handlungsendpunkt",
    q8: "Was zeigt die Adverbiale?",
    a8: "Umstände",
    b8: "Endpunkt",
    c8: "Person",
    d8: "Ding",
    title5: "Große Prüfung: gemischte Aufgaben",
    text5: "Am Ende der fünften Klasse sollte der Schüler die Grundlagen von Phonetik, Wortanalyse, Wortarten, Satzgliedern und Stilistik kennen. Regelmäßiges Üben, Verständnis von Grundregeln und sorgfältiges Lesen literarischer Texte sind wichtig.",
    q9: "Was unterrichten wir auf O5 Niveau?",
    a9: "Phonetik, Wortanalyse, Wortarten",
    b9: "nur Gedichte",
    c9: "nur Rechtschreibung",
    d9: "nur Literatur",
    q10: "Was ist der Schlüssel zum Erfolg im Ungarischen?",
    a10: "regelmäßiges Üben und Verständnis",
    b10: "schnelles Lesen",
    c10: "viele Wörter lernen",
    d10: "ohne Wörterbuch lernen",
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
          <circle cx="60" cy="70" r="25" fill="#FF2D78" opacity="0.7" />
          <text x="60" y="75" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Hang</text>
          <circle cx="120" cy="70" r="25" fill="#00D4FF" opacity="0.7" />
          <text x="120" y="75" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Rend</text>
          <circle cx="180" cy="70" r="25" fill="#10B981" opacity="0.7" />
          <text x="180" y="75" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Soron</text>
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
          <rect x="30" y="40" width="50" height="80" rx="5" fill="#FFD700" opacity="0.7" />
          <text x="55" y="85" textAnchor="middle" fontSize="11" fill="#000" fontWeight="bold">Szótő</text>
          <rect x="95" y="40" width="50" height="80" rx="5" fill="#FFD700" opacity="0.5" />
          <text x="120" y="85" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Képző</text>
          <rect x="160" y="40" width="50" height="80" rx="5" fill="#FFD700" opacity="0.3" />
          <text x="185" y="85" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Rag</text>
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
          <text x="40" y="45" textAnchor="middle" fontSize="11" fill="#FF2D78" fontWeight="bold">Ige</text>
          <text x="40" y="85" textAnchor="middle" fontSize="10" fill="#fff">cselekvés</text>
          <text x="120" y="45" textAnchor="middle" fontSize="11" fill="#00D4FF" fontWeight="bold">Főnév</text>
          <text x="120" y="85" textAnchor="middle" fontSize="10" fill="#fff">személy</text>
          <text x="200" y="45" textAnchor="middle" fontSize="11" fill="#10B981" fontWeight="bold">Jelző</text>
          <text x="200" y="85" textAnchor="middle" fontSize="10" fill="#fff">tulajdonság</text>
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
          <rect x="20" y="40" width="50" height="80" rx="5" fill="#FF2D78" opacity="0.8" />
          <text x="45" y="85" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Alany</text>
          <rect x="85" y="40" width="50" height="80" rx="5" fill="#00D4FF" opacity="0.8" />
          <text x="110" y="85" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Tárgy</text>
          <rect x="150" y="40" width="70" height="80" rx="5" fill="#10B981" opacity="0.8" />
          <text x="185" y="85" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Határozó</text>
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
          <path d="M 50 40 L 80 70 L 50 100 L 20 70 Z" fill="#FF2D78" opacity="0.7" />
          <path d="M 120 40 L 150 70 L 120 100 L 90 70 Z" fill="#00D4FF" opacity="0.7" />
          <path d="M 190 40 L 220 70 L 190 100 L 160 70 Z" fill="#10B981" opacity="0.7" />
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Nagy próba!</text>
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

export default function ReviewO5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
