"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Fogalmazás alapjai", tx1: "A fogalmazás azt jelenti, hogy gondolatainkat írásban kifejezzük. Egy jó fogalmazás világos, érdekes és rendezett.",
    q1: "Mi a fogalmazás célja?", a1: "Gondolatokat és érzéseket írásban kifejezni", b1: "Gyors írás", c1: "Sok szót használni", d1: "Csak nyelvtant gyakorolni",

    t2: "Elbeszélés írása", tx2: "Az elbeszélés egy történet. Egy kezdete, közepe és vége van. Logikus sorrendben történnek az események.",
    q2: "Mi jellemzi az elbeszélést?", a2: "Van kezdete, közepe és vége, időbeli sorrendben", b2: "Nincs sorrend, véletlenszerű események", c2: "Csak egy mondat lehet", d2: "Nincsenek személyek",

    t3: "Leírás írása", tx3: "A leírás egy tárgy vagy hely jellemzésére szolgál. Érzékek segítségével írjuk le: szín, méret, forma, szag.",
    q3: "Mit tartalmaz egy jó leírás?", a3: "Részleteket a tárgy vagy hely tulajdonságairól", b3: "Csak a szín", c3: "Csak a méret", d3: "Nincs részlet",

    t4: "Gondolatok rendezése", tx4: "A fogalmazás írása előtt meg kell tervezni. Gondolatokat csoportosítunk és logikus sorrendbe helyezzük.",
    q4: "Hogyan kell írni egy fogalmazást?", a4: "Terveket csinálni, gondolatokat rendezni, majd írni", b4: "Azonnal írni gondolkodás nélkül", c4: "Csak egy gondolatot írni", d4: "Nincs szükség tervezésre",

    t5: "Fogalmazás gyakorlása", tx5: "A fogalmazás fejlődik az írásgyakorlattal. Rendszeres írás fejleszti a kifejezés képességét.",
    q5: "Hogyan fejleszthető a fogalmazás?", a5: "Rendszeres írásgyakorlattal és visszajelzésből tanulva", b5: "Nem lehet fejleszteni", c5: "Csak olvasásból tanulható", d5: "Egy történettel elég",
  },
  de: {
    t1: "Grundlagen der Zusammensetzung", tx1: "Zusammensetzung bedeutet, unsere Gedanken schriftlich auszudrücken. Eine gute Zusammensetzung ist klar, interessant und geordnet.",
    q1: "Was ist der Zweck der Zusammensetzung?", a1: "Gedanken und Gefühle schriftlich ausdrücken", b1: "Schnell schreiben", c1: "Viele Wörter verwenden", d1: "Nur Grammatik üben",

    t2: "Eine Geschichte schreiben", tx2: "Eine Erzählung ist eine Geschichte. Sie hat einen Anfang, eine Mitte und ein Ende. Die Ereignisse folgen in logischer Reihenfolge.",
    q2: "Was zeichnet eine Erzählung aus?", a2: "Sie hat einen Anfang, eine Mitte und ein Ende in zeitlicher Reihenfolge", b2: "Keine Reihenfolge, zufällige Ereignisse", c2: "Nur ein Satz möglich", d2: "Keine Personen",

    t3: "Eine Beschreibung schreiben", tx3: "Die Beschreibung dient zur Charakterisierung eines Gegenstands oder Ortes. Wir verwenden Sinne zum Beschreiben: Farbe, Größe, Form, Geruch.",
    q3: "Was enthält eine gute Beschreibung?", a3: "Details über die Eigenschaften des Gegenstands oder Ortes", b3: "Nur die Farbe", c3: "Nur die Größe", d3: "Keine Details",

    t4: "Gedanken ordnen", tx4: "Vor dem Schreiben einer Zusammensetzung muss man planen. Wir ordnen Gedanken und setzen sie in logische Reihenfolge.",
    q4: "Wie schreibt man eine Zusammensetzung?", a4: "Pläne machen, Gedanken ordnen, dann schreiben", b4: "Sofort schreiben ohne zu denken", c4: "Nur einen Gedanken schreiben", d4: "Planung ist nicht nötig",

    t5: "Zusammensetzung üben", tx5: "Zusammensetzung entwickelt sich durch Schreibpraxis. Regelmäßiges Schreiben verbessert die Ausdrucksfähigkeit.",
    q5: "Wie kann man Zusammensetzung entwickeln?", a5: "Durch regelmäßiges Schreiben und Lernen aus Feedback", b5: "Kann nicht entwickelt werden", c5: "Nur durch Lesen lernbar", d5: "Eine Geschichte reicht",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a52" />
          <rect x="30" y="30" width="180" height="100" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="40" y1="45" x2="200" y2="45" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="40" y1="60" x2="200" y2="60" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="40" y1="75" x2="200" y2="75" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="40" y1="90" x2="200" y2="90" stroke="#4ECDC4" strokeWidth="1.5" />
          <line x1="40" y1="105" x2="180" y2="105" stroke="#4ECDC4" strokeWidth="1.5" />
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">Fogalmazás</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="60" cy="65" r="14" fill="#B44DFF" opacity="0.8" />
          <text x="60" y="70" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">1</text>
          <circle cx="120" cy="65" r="14" fill="#95E1D3" opacity="0.8" />
          <text x="120" y="70" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">2</text>
          <circle cx="180" cy="65" r="14" fill="#4ECDC4" opacity="0.8" />
          <text x="180" y="70" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">3</text>
          <line x1="75" y1="65" x2="105" y2="65" stroke="#FF6B9D" strokeWidth="2" />
          <line x1="135" y1="65" x2="165" y2="65" stroke="#FF6B9D" strokeWidth="2" />
          <text x="60" y="110" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Kezdet</text>
          <text x="120" y="110" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Közepe</text>
          <text x="180" y="110" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Vége</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="60" y="40" width="120" height="80" rx="8" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <circle cx="80" cy="60" r="6" fill="#FF6B9D" />
          <text x="95" y="65" fontSize="9" fill="#FF6B9D">szín</text>
          <circle cx="80" cy="80" r="6" fill="#FF6B9D" />
          <text x="95" y="85" fontSize="9" fill="#FF6B9D">méret</text>
          <circle cx="80" cy="100" r="6" fill="#FF6B9D" />
          <text x="95" y="105" fontSize="9" fill="#FF6B9D">forma</text>
          <circle cx="160" cy="70" r="6" fill="#FF6B9D" />
          <text x="145" y="65" fontSize="9" fill="#FF6B9D" textAnchor="end">tapintás</text>
          <circle cx="160" cy="100" r="6" fill="#FF6B9D" />
          <text x="145" y="105" fontSize="9" fill="#FF6B9D" textAnchor="end">szag</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <rect x="40" y="35" width="160" height="30" rx="6" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="56" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Tervezés</text>
          <line x1="120" y1="65" x2="120" y2="80" stroke="#95E1D3" strokeWidth="2" />
          <rect x="40" y="80" width="160" height="30" rx="6" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="120" y="101" textAnchor="middle" fontSize="11" fill="#95E1D3" fontWeight="bold">Gondolatok</text>
          <line x1="120" y1="110" x2="120" y2="125" stroke="#B44DFF" strokeWidth="2" />
          <rect x="40" y="125" width="160" height="30" rx="6" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="146" textAnchor="middle" fontSize="11" fill="#B44DFF" fontWeight="bold">Írás</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <path d="M 40 130 Q 80 30 120 30 Q 160 30 200 130" stroke="#95E1D3" strokeWidth="3" fill="none" />
          <circle cx="40" cy="130" r="8" fill="#4ECDC4" />
          <text x="40" y="150" textAnchor="middle" fontSize="9" fill="#4ECDC4" fontWeight="bold">Start</text>
          <circle cx="200" cy="130" r="8" fill="#FF6B9D" />
          <text x="200" y="150" textAnchor="middle" fontSize="9" fill="#FF6B9D" fontWeight="bold">Cél</text>
          <circle cx="120" cy="30" r="6" fill="#B44DFF" />
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function CompositionO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
