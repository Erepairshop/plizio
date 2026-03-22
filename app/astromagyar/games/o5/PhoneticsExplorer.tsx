"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Magánhangzók", tx1: "A magyar nyelvben öt alapmagánhangzó van: a, e, i, o, u. Ezek továbbá elöl és hátul képzett magánhangzókra osztódnak.",
    q1: "Melyik hangzó tartozik az elöl képzett magánhangzók közé?", a1: "e", b1: "a", c1: "o", d1: "u",

    t2: "Mássalhangzók", tx2: "A mássalhangzók a hangszálak rezgésével és a szájnyílás módosításával képződnek. Vannak zöngés és zöngétlen mássalhangzók.",
    q2: "Az alábbiak közül melyik zöngés mássalhangzó?", a2: "b", b2: "p", c2: "f", d2: "t",

    t3: "Hangrend", tx3: "A hangrend az a jelenség, hogy a magánhangzók elöl és hátulis képzettségüknek megfelelően az azonos szóban ismétlődnek vagy összhangban vannak.",
    q3: "Az alábbiak közül melyik szó felel meg a kevert hangrend szabályának?", a3: "szék", b3: "ház", c3: "kutya", d3: "piros",

    t4: "Hosszú-rövid magánhangzók", tx4: "A hosszú magánhangzókat hosszú jelöléssel (á, é, í, ó, ú, ő, ű) írjuk. Ezek eltérő jelentést hozhatnak (pál vs pal).",
    q4: "Mely szó különbözik csak a magánhangzó hosszúságában?", a4: "sur - súr", b4: "ház - hos", c4: "ten - ten", d4: "kap - kop",

    t5: "Szótagoltás", tx5: "A szótagok magánhangzó körül csoportosulnak. Az egy magánhangzót körülvevő mássalhangzókat hangsúlyozva olvasva helyes a szótag osztás.",
    q5: "Hány szótagra osztható a 'természet' szó?", a5: "3", b5: "4", c5: "2", d5: "5",
  },
  de: {
    t1: "Vokale", tx1: "Im Ungarischen gibt es fünf Grundvokale: a, e, i, o, u. Sie werden in vordere und hintere Vokale eingeteilt.",
    q1: "Welcher Vokal ist ein vorderer Vokal?", a1: "e", b1: "a", c1: "o", d1: "u",

    t2: "Konsonanten", tx2: "Konsonanten entstehen durch Stimmbandschwingungen und Veränderung der Mundöffnung. Es gibt stimmhafte und stimmlose Konsonanten.",
    q2: "Welcher ist ein stimmhafter Konsonant?", a2: "b", b2: "p", c2: "f", d2: "t",

    t3: "Vokalharmonie", tx3: "Die Vokalharmonie bedeutet, dass sich Vokale in vorderen und hinteren Qualitäten im gleichen Wort oder in der Silbe harmonisieren.",
    q3: "Welches Wort folgt der gemischten Vokalharmonie?", a3: "szék", b3: "ház", c3: "kutya", d3: "piros",

    t4: "Lange-kurze Vokale", tx4: "Lange Vokale werden mit Diakritika geschrieben (á, é, í, ó, ú, ő, ű). Sie können Bedeutungsunterschiede verursachen.",
    q4: "Welche Wörter unterscheiden sich nur in der Vokallänge?", a4: "sur - súr", b4: "ház - hos", c4: "ten - ten", d4: "kap - kop",

    t5: "Silbenteilung", tx5: "Silben gruppieren sich um Vokale. Korrekte Silbenteilung folgt der natürlichen Betonung.",
    q5: "In wie viele Silben teilt sich das Wort 'természet'?", a5: "3", b5: "4", c5: "2", d5: "5",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <circle cx="60" cy="50" r="20" fill="#FF6B9D" />
          <text x="60" y="60" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">A</text>
          <circle cx="120" cy="50" r="20" fill="#4ECDC4" />
          <text x="120" y="60" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">E</text>
          <circle cx="180" cy="50" r="20" fill="#95E1D3" />
          <text x="180" y="60" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">I</text>
          <text x="120" y="140" textAnchor="middle" fontSize="16" fill="white/60">Magánhangzók</text>
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
          <rect x="40" y="50" width="60" height="60" rx="8" fill="#B44DFF" opacity="0.3" />
          <text x="70" y="90" textAnchor="middle" fontSize="20" fill="#B44DFF" fontWeight="bold">B</text>
          <rect x="140" y="50" width="60" height="60" rx="8" fill="#FF9500" opacity="0.3" />
          <text x="170" y="90" textAnchor="middle" fontSize="20" fill="#FF9500" fontWeight="bold">P</text>
          <text x="120" y="140" textAnchor="middle" fontSize="14" fill="white/60">Zöngés - Zöngétlen</text>
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
          <path d="M 30 80 Q 60 50 90 80 Q 120 110 150 80 Q 180 50 210 80" stroke="#00D4FF" strokeWidth="3" fill="none" />
          <circle cx="60" cy="80" r="8" fill="#00D4FF" />
          <circle cx="120" cy="80" r="8" fill="#00D4FF" />
          <circle cx="180" cy="80" r="8" fill="#00D4FF" />
          <text x="120" y="140" textAnchor="middle" fontSize="14" fill="white/60">Hangrend-illeszkedés</text>
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
          <text x="60" y="90" textAnchor="middle" fontSize="28" fill="#FFD700" fontWeight="bold">á</text>
          <text x="60" y="120" textAnchor="middle" fontSize="12" fill="white/60">hosszú</text>
          <text x="180" y="90" textAnchor="middle" fontSize="28" fill="#FF9500" fontWeight="bold">a</text>
          <text x="180" y="120" textAnchor="middle" fontSize="12" fill="white/60">rövid</text>
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
          <rect x="20" y="60" width="50" height="50" rx="4" fill="#4ECDC4" opacity="0.4" stroke="#4ECDC4" strokeWidth="2" />
          <text x="45" y="92" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">ter</text>
          <rect x="95" y="60" width="50" height="50" rx="4" fill="#95E1D3" opacity="0.4" stroke="#95E1D3" strokeWidth="2" />
          <text x="120" y="92" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">mé</text>
          <rect x="170" y="60" width="50" height="50" rx="4" fill="#6FAADB" opacity="0.4" stroke="#6FAADB" strokeWidth="2" />
          <text x="195" y="92" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">zet</text>
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

export default function PhoneticsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
