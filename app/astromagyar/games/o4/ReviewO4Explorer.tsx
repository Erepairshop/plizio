"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Végső igeragozás teszt", tx1: "Az igeragozás alanyi, tárgyas, parancsforma, feltételes - tudod ezeket?",
    q1: "Melyik a tárgyas ragozás?", a1: "futok", b1: "futod", c1: "futsz", d1: "fut",

    t2: "Szóalakítás", tx2: "Szóalakítás képzőkkel és ragokkal: szógyök + képző = új szó.",
    q2: "Mit jelent a szóalakítás?", a2: "szavak összeírása", b2: "szavak szétbontása", c2: "szavak képzése", d2: "szavak megismétlése",

    t3: "Helyesírás mestere", tx3: "Helyesírás: ékezetek, egybe-különírás, szóösszetételek, kötőjeles írás.",
    q3: "Melyik helyes?", a3: "ceruzatartó", b3: "ceruza tartó", c3: "ceruza-tartó", d3: "Ceruza Tartó",

    t4: "Szóképzés és toldalékolás", tx4: "Szóképzés új szavak létrehozása. Toldalékolás szó végét módosítja.",
    q4: "Mi az igaz?", a4: "játék + -os = játékos (képzés)", b4: "játék + -nak = játéknak (ragozás)", c4: "mindkettő igaz", d4: "egyik sem",

    t5: "Végzetes nagy próba!", tx5: "Gratulálok! Az 4. osztályos magyar nyelv nagy tesztét sikeresen teljesítetted. Kiváló teljesítmény!",
    q5: "Hogyan érzed magad?", a5: "büszke", b5: "fáradt", c5: "elégedett", d5: "mosolygós",
  },
  de: {
    t1: "Finaler Verbkonjugationstest", tx1: "Verbkonjugation subjektiv, objektiv, Befehlsform, Konditional - kennst du diese?",
    q1: "Welche ist die objektive Konjugation?", a1: "ich laufe", b1: "ich laufe es", c1: "du läufst", d1: "er läuft",

    t2: "Wortbildung", tx2: "Wortbildung mit Suffixen und Suffixen: Wortstamm + Suffix = neues Wort.",
    q2: "Was bedeutet Wortbildung?", a2: "Wörter zusammenschreiben", b2: "Wörter zerlegen", c2: "Wörter bilden", d2: "Wörter wiederholen",

    t3: "Rechtschreibungsmeister", tx3: "Rechtschreibung: Diakritika, Getrennt-/Zusammenschreibung, zusammengesetzte Wörter, Bindestrich.",
    q3: "Welches ist richtig?", a3: "Stifthalter", b3: "Stift Halter", c3: "Stift-Halter", d3: "Stift halter",

    t4: "Wortbildung und Flexion", tx4: "Wortbildung schafft neue Wörter. Flexion ändert das Wortende.",
    q4: "Was ist wahr?", a4: "spielen + -end = spielend (Bildung)", b4: "spielen + -datI = spielend (Flexion)", c4: "beide wahr", d4: "keins",

    t5: "Finaler großer Test!", tx5: "Glückwunsch! Du hast den finalen Deutsch Test für Klasse 4 erfolgreich bestanden. Ausgezeichnete Leistung!",
    q5: "Wie fühlst du dich?", a5: "stolz", b5: "müde", c5: "zufrieden", d5: "lächelnd",
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
          <circle cx="60" cy="80" r="16" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">alanyi</text>
          <circle cx="120" cy="80" r="16" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">tárgyas</text>
          <circle cx="180" cy="80" r="16" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="88" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">parancs</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "b1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <text x="80" y="60" fontSize="11" fill="#B44DFF" fontWeight="bold">szó +</text>
          <text x="80" y="80" fontSize="11" fill="#B44DFF" fontWeight="bold">képző =</text>
          <text x="80" y="100" fontSize="11" fill="#B44DFF" fontWeight="bold">új szó</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "c2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="30" y="60" width="90" height="50" rx="4" fill="#FFD700" opacity="0.2" stroke="#FFD700" strokeWidth="2" />
          <text x="75" y="90" textAnchor="middle" fontSize="12" fill="#FFD700" fontWeight="bold">ceruzatartó</text>
          <text x="150" y="90" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">✓</text>
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
          <text x="120" y="60" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">szóképzés</text>
          <text x="120" y="80" textAnchor="middle" fontSize="11" fill="white/60">új szavak</text>
          <text x="120" y="110" textAnchor="middle" fontSize="12" fill="#4ECDC4" fontWeight="bold">toldalékolás</text>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="white/60">módosítás</text>
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
          <circle cx="120" cy="70" r="35" fill="none" stroke="#FFD700" strokeWidth="3" />
          <circle cx="120" cy="70" r="28" fill="#FFD700" opacity="0.2" />
          <text x="120" y="75" textAnchor="middle" fontSize="24" fill="#FFD700" fontWeight="bold">🎉</text>
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#FFD700" fontWeight="bold">Végzet!</text>
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

export default function ReviewO4Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
