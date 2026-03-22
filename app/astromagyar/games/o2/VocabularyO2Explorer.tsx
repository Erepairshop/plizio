"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szócsaládok", tx1: "Az egy szótőből képzett szavak szócsaládot alkotnak. Például a 'játék' szótőből: játékos, játszani, játékszer.",
    q1: "Melyik szó nem tartozik a 'fut' szócsaládjába?", a1: "futó", b1: "futás", c1: "futni", d1: "futball",

    t2: "Ellentétes szavak", tx2: "Az ellentétes szavak (antonimák) egymásnak az ellenkezőjét fejezik ki. Például: meleg - hideg, éhes - jóllakott.",
    q2: "Mi az 'éhes' szó ellentéte?", a2: "fáradt", b2: "jóllakott", c2: "beteg", d2: "szomorú",

    t3: "Szóok képzése", tx3: "A szavakból új szavakat képezhetünk képzőkkel. Például: játék + -os = játékos, szép + -en = szépen.",
    q3: "Melyik szó képzése helyes?", a3: "szépség (szép + ség)", b3: "szépség (szép + ek)", c3: "szépké (szép + ké)", d3: "szépő (szép + ő)",

    t4: "Szavak csoportosítása témák szerint", tx4: "A szavakat csoportosíthatjuk témák vagy jelentések szerint. Például: állatok: kutya, macska, madár.",
    q4: "Melyik szó nem tartozik az 'ételek' témakörébe?", a4: "kenyér", b4: "leves", c4: "virág", d4: "gyümölcs",

    t5: "Szókincs bővítése", tx5: "Minél több szót ismerünk, annál jobban megértjük az olvasott szövegeket és jobban tudunk kommunikálni.",
    q5: "Válassz ki egy szócsalád tagot! Az 'olvas' szócsaládjához tartozik:", a5: "olvasó", b5: "olvadt", c5: "olajoz", d5: "okoz",
  },
  de: {
    t1: "Wortfamilien", tx1: "Wörter, die von einem Wortstamm stammen, bilden eine Wortfamilie. Zum Beispiel aus 'Spiel': Spieler, Spielzeug, spielen.",
    q1: "Welches Wort gehört nicht zur Familie von 'laufen'?", a1: "Läufer", b1: "Lauf", c1: "laufen", d1: "läufig",

    t2: "Gegensatzwörter", tx2: "Gegensatzwörter (Antonyme) drücken das Gegenteil aus. Zum Beispiel: warm - kalt, hungrig - satt.",
    q2: "Was ist das Gegenteil von 'hungrig'?", a2: "müde", b2: "satt", c2: "krank", d2: "traurig",

    t3: "Wortbildung mit Suffixen", tx3: "Neue Wörter entstehen durch Zusätze. Zum Beispiel: schön + -heit = Schönheit, schnell + -igkeit = Schnelligkeit.",
    q3: "Welche Wortbildung ist korrekt?", a3: "Schönheit (schön + heit)", b3: "Schönheit (schön + ek)", c3: "Schönke (schön + ke)", d3: "Schönö (schön + ö)",

    t4: "Wörter nach Themen gruppieren", tx4: "Wir können Wörter nach Themen oder Bedeutung ordnen. Zum Beispiel Tiere: Hund, Katze, Vogel.",
    q4: "Welches Wort gehört nicht zu 'Lebensmittel'?", a4: "Brot", b4: "Suppe", c4: "Blume", d4: "Obst",

    t5: "Wortschatz erweitern", tx5: "Je mehr Wörter wir kennen, desto besser verstehen wir Texte und können besser kommunizieren.",
    q5: "Wähle ein Mitglied der Wortfamilie von 'lesen'! Welches gehört dazu?", a5: "Leser", b5: "geleckt", c5: "läd", d5: "dreht",
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
          <circle cx="120" cy="50" r="12" fill="#FFD700" stroke="#FFD700" strokeWidth="1" />
          <text x="120" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">játék</text>
          <line x1="120" y1="65" x2="70" y2="85" stroke="#4ECDC4" strokeWidth="1" />
          <line x1="120" y1="65" x2="120" y2="85" stroke="#4ECDC4" strokeWidth="1" />
          <line x1="120" y1="65" x2="170" y2="85" stroke="#4ECDC4" strokeWidth="1" />
          <circle cx="70" cy="90" r="10" fill="#4ECDC4" opacity="0.4" />
          <text x="70" y="95" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">játékos</text>
          <circle cx="120" cy="90" r="10" fill="#4ECDC4" opacity="0.4" />
          <text x="120" y="95" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">játszani</text>
          <circle cx="170" cy="90" r="10" fill="#4ECDC4" opacity="0.4" />
          <text x="170" y="95" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">játékszer</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "d1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="20" y="50" width="70" height="60" rx="8" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="55" y="85" textAnchor="middle" fontSize="16" fill="#FF6B9D" fontWeight="bold">meleg</text>
          <line x1="100" y1="80" x2="130" y2="80" stroke="#FFD700" strokeWidth="2" />
          <rect x="150" y="50" width="70" height="60" rx="8" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="185" y="85" textAnchor="middle" fontSize="16" fill="#4ECDC4" fontWeight="bold">hideg</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="50" y="70" textAnchor="middle" fontSize="14" fill="#95E1D3" fontWeight="bold">szép</text>
          <text x="95" y="70" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">+</text>
          <text x="130" y="70" textAnchor="middle" fontSize="14" fill="#95E1D3" fontWeight="bold">ség</text>
          <text x="175" y="70" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">=</text>
          <text x="210" y="70" textAnchor="middle" fontSize="14" fill="#95E1D3" fontWeight="bold">szépség</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">szóképzés</text>
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
          <g>
            <rect x="20" y="50" width="50" height="50" rx="4" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="1" />
            <text x="45" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">kutya</text>
            <text x="45" y="90" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">macska</text>
          </g>
          <g>
            <rect x="90" y="50" width="50" height="50" rx="4" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="1" />
            <text x="115" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">kenyér</text>
            <text x="115" y="90" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">leves</text>
          </g>
          <g>
            <rect x="160" y="50" width="50" height="50" rx="4" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="1" />
            <text x="185" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">piros</text>
            <text x="185" y="90" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">kék</text>
          </g>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="120" cy="80" r="40" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">szókincs</text>
          <text x="120" y="95" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">bővítés</text>
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

export default function VocabularyO2Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
