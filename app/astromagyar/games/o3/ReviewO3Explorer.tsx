"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Igeidők ismétlése", tx1: "Az igeidők (múlt, jelen, jövő) alapvető a nyelvtanban. Fontos az igeidőket helyesen használni.",
    q1: "Melyik ige van jelen időben?", a1: "Olvasok", b1: "Olvastam", c1: "Olvasni fogok", d1: "Olvastál",

    t2: "Ragozás és szócsaládok", tx2: "A szavak ragozásai és a szócsaládok összekapcsolódnak. Ugyanabból a szóból sok szó születik.",
    q2: "Melyik szó tartozik a 'szín' szócsaládba?", a2: "Sárga", b2: "Futni", c2: "Asztal", d2: "Szomorú",

    t3: "Helyesírás gyakorlása", tx3: "A helyesírás szabályai segítik az érthető írást. Az egybe- és különírás fontos összetevője.",
    q3: "Melyik szó helyesen van írva?", a3: "Autóval jöttem", b3: "Autóvaljöttem", c3: "Auto val jöttem", d3: "Autó val jöttem",

    t4: "Szövegértés feladatok", tx4: "A szövegértés fejlesztése a rendszeres olvasással lehetséges. Meg kell érteni az olvasott szöveg lényegét.",
    q4: "Mi szükséges a szövegértéshez?", a4: "Gondos olvasás és a gondolatok megértése", b4: "Gyors olvasás", c4: "Az összes szó megjegyzése", d4: "Nincs szükség erre",

    t5: "Nagy Próba - Vegyes ismétlés", tx5: "A nagy próba az összes tanult anyagot lefedi. Tedd össze a tudásod és jelöld a helyes választ!",
    q5: "Melyik nem nyelvtani kategória?", a5: "Az asztal", b5: "Az ige", c5: "Az mellékév", d5: "Az névelő",
  },
  de: {
    t1: "Wiederholung der Zeiten", tx1: "Die Zeiten (Vergangenheit, Gegenwart, Zukunft) sind grundlegend in der Grammatik. Es ist wichtig, die Zeiten richtig zu verwenden.",
    q1: "Welches Verb ist in der Gegenwart?", a1: "Ich lese", b1: "Ich las", c1: "Ich werde lesen", d1: "Ich laßt",

    t2: "Flexion und Wortfamilien", tx2: "Die Flexionen von Wörtern und Wortfamilien sind miteinander verbunden. Aus einem Wort entstehen viele Wörter.",
    q2: "Welches Wort gehört zur Wortfamilie 'Farbe'?", a2: "Gelb", b2: "Laufen", c2: "Tisch", d2: "Traurig",

    t3: "Rechtschreibung üben", tx3: "Die Rechtschreibregeln unterstützen das verständliche Schreiben. Zusammenschreibung und Trennung sind wichtig.",
    q3: "Welches Wort ist richtig geschrieben?", a3: "Ich bin mit dem Auto gekommen", b3: "Ichbinmitdemautogekommen", c3: "Ich bin mit dem Auto gekommen", d3: "Ichbin mit dem Auto gekommen",

    t4: "Textverständnis-Aufgaben", tx4: "Die Entwicklung des Textverständnisses ist durch regelmäßiges Lesen möglich. Die Idee des Textes muss verstanden werden.",
    q4: "Was ist für das Textverständnis notwendig?", a4: "Sorgfältiges Lesen und Verständnis der Gedanken", b4: "Schnelles Lesen", c4: "Merken aller Wörter", d4: "Nicht nötig",

    t5: "Große Prüfung - Wiederholung gemischt", tx5: "Die große Prüfung deckt das gesamte Lernstoff ab. Nutze dein Wissen und markiere die richtige Antwort!",
    q5: "Welches ist keine grammatikalische Kategorie?", a5: "Der Tisch", b5: "Das Verb", c5: "Das Adjektiv", d5: "Der Artikel",
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
          <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">Múlt</text>
          <text x="120" y="55" textAnchor="middle" fontSize="12" fill="#95E1D3" fontWeight="bold">Jelen</text>
          <text x="190" y="55" textAnchor="middle" fontSize="12" fill="#B44DFF" fontWeight="bold">Jövő</text>
          <circle cx="50" cy="80" r="12" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <circle cx="120" cy="80" r="12" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <circle cx="190" cy="80" r="12" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <line x1="70" y1="80" x2="100" y2="80" stroke="#FF6B9D" strokeWidth="2" />
          <line x1="140" y1="80" x2="170" y2="80" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Igeidők</text>
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
          <circle cx="120" cy="65" r="20" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="72" textAnchor="middle" fontSize="11" fill="#B44DFF" fontWeight="bold">szín</text>
          <circle cx="70" cy="100" r="12" fill="#4ECDC4" opacity="0.7" />
          <text x="70" y="107" textAnchor="middle" fontSize="8" fill="white">sárga</text>
          <circle cx="120" cy="110" r="12" fill="#95E1D3" opacity="0.7" />
          <text x="120" y="117" textAnchor="middle" fontSize="8" fill="white">piros</text>
          <circle cx="170" cy="100" r="12" fill="#FF6B9D" opacity="0.7" />
          <text x="170" y="107" textAnchor="middle" fontSize="8" fill="white">kék</text>
          <line x1="100" y1="85" x2="80" y2="95" stroke="#95E1D3" strokeWidth="1" opacity="0.5" />
          <line x1="120" y1="85" x2="120" y2="98" stroke="#95E1D3" strokeWidth="1" opacity="0.5" />
          <line x1="140" y1="85" x2="160" y2="95" stroke="#95E1D3" strokeWidth="1" opacity="0.5" />
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
          <rect x="30" y="40" width="180" height="80" rx="8" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="60" textAnchor="middle" fontSize="10" fill="#FF6B9D" fontWeight="bold">Helyesírás</text>
          <line x1="40" y1="70" x2="200" y2="70" stroke="#FF6B9D" strokeWidth="1" opacity="0.5" />
          <text x="60" y="90" fontSize="9" fill="#FF6B9D">Egybe</text>
          <text x="120" y="90" fontSize="9" fill="#FF6B9D">Külön</text>
          <text x="180" y="90" fontSize="9" fill="#FF6B9D">Kötőjel</text>
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Helyes írás</text>
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
          <rect x="40" y="30" width="160" height="100" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="45" y1="45" x2="195" y2="45" stroke="#4ECDC4" strokeWidth="1" opacity="0.4" />
          <line x1="45" y1="60" x2="195" y2="60" stroke="#4ECDC4" strokeWidth="1" opacity="0.4" />
          <line x1="45" y1="75" x2="195" y2="75" stroke="#4ECDC4" strokeWidth="1" opacity="0.4" />
          <line x1="45" y1="90" x2="195" y2="90" stroke="#4ECDC4" strokeWidth="1" opacity="0.4" />
          <line x1="45" y1="105" x2="195" y2="105" stroke="#4ECDC4" strokeWidth="1" opacity="0.4" />
          <text x="120" y="135" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Szövegértés</text>
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
          <circle cx="50" cy="50" r="14" fill="#4ECDC4" opacity="0.8" />
          <text x="50" y="57" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">1</text>
          <circle cx="100" cy="80" r="14" fill="#95E1D3" opacity="0.8" />
          <text x="100" y="87" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">2</text>
          <circle cx="150" cy="60" r="14" fill="#B44DFF" opacity="0.8" />
          <text x="150" y="67" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">3</text>
          <circle cx="190" cy="90" r="14" fill="#FF6B9D" opacity="0.8" />
          <text x="190" y="97" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">4</text>
          <path d="M 50 50 L 100 80 L 150 60 L 190 90" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.6" />
          <text x="120" y="135" textAnchor="middle" fontSize="11" fill="#FFD700" fontWeight="bold">Vegyes Próba</text>
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

export default function ReviewO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
