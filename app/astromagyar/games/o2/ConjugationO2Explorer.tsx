"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Igék ragozása", tx1: "Az igéket ragozni kell a személyhez. Például: én futok, te futsz, ő fut.",
    q1: "Az 'ő fut' mely személy?", a1: "harmadik személyt fejezi ki", b1: "első személyt fejezi ki", c1: "második személyt fejezi ki", d1: "többes számot fejezi ki",

    t2: "Első személy", tx2: "Az első személyű igealak az azt fejezi ki, hogy a beszélő teszi a cselekvést. Például: én futok, én olvasok.",
    q2: "Melyik az első személyű igealak?", a2: "futok", b2: "futsz", c2: "futnak", d2: "fut",

    t3: "Második személy", tx3: "A második személyű igealak az azt fejezi ki, hogy az a személy teszi a cselekvést, akivel beszélünk. Például: te futsz, te olvasol.",
    q3: "Melyik az második személyű igealak?", a3: "futok", b3: "futsz", c3: "futnak", d3: "fut",

    t4: "Harmadik személy", tx4: "A harmadik személyű igealak az azt fejezi ki, hogy az a személy teszi a cselekvést, aki nincs jelen a beszélgetésben. Például: ő fut, ő olvas.",
    q4: "Melyik az harmadik személyű igealak?", a4: "futok", b4: "futsz", c4: "fut", d4: "futunk",

    t5: "Igék ragozása összefoglalása", tx5: "A ragozás alapvető a magyar nyelvben. Segít megérteni, hogy ki végzi a cselekvést.",
    q5: "Válassz igealakot! Mely szó fejezi ki az 'ő játszik' jelentést?", a5: "játszik", b5: "játszol", c5: "játszunk", d5: "játszom",
  },
  de: {
    t1: "Verbkonjugation", tx1: "Verben müssen nach der Person konjugiert werden. Zum Beispiel: ich laufe, du läufst, er läuft.",
    q1: "Was bedeutet 'ő fut'?", a1: "dritte Person Singular", b1: "erste Person Singular", c1: "zweite Person Singular", d1: "Plural",

    t2: "Erste Person", tx2: "Die erste Person drückt aus, dass der Sprecher die Aktion ausführt. Zum Beispiel: ich laufe, ich lese.",
    q2: "Welche ist die erste Person Singular?", a2: "futok", b2: "futsz", c2: "futnak", d2: "fut",

    t3: "Zweite Person", tx3: "Die zweite Person drückt aus, dass die Person, mit der man spricht, die Aktion ausführt. Zum Beispiel: du läufst, du liest.",
    q3: "Welche ist die zweite Person Singular?", a3: "futok", b3: "futsz", c3: "futnak", d3: "fut",

    t4: "Dritte Person", tx4: "Die dritte Person drückt aus, dass jemand anderes die Aktion ausführt. Zum Beispiel: er läuft, sie liest.",
    q4: "Welche ist die dritte Person Singular?", a4: "futok", b4: "futsz", c4: "fut", d4: "futunk",

    t5: "Verbkonjugation zusammengefasst", tx5: "Die Konjugation ist grundlegend im Ungarischen. Sie zeigt, wer die Aktion ausführt.",
    q5: "Wähle die richtige Verbform aus! Welches Wort bedeutet 'er/sie spielt'?", a5: "játszik", b5: "játszol", c5: "játszunk", d5: "játszom",
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
          <circle cx="60" cy="80" r="28" fill="#B44DFF" opacity="0.3" stroke="#B44DFF" strokeWidth="2" />
          <text x="60" y="95" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">én futok</text>
          <circle cx="180" cy="80" r="28" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="180" y="95" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">ő fut</text>
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
          <circle cx="120" cy="80" r="35" fill="#FF6B9D" opacity="0.2" stroke="#FF6B9D" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="18" fill="#FF6B9D" fontWeight="bold">én</text>
          <text x="120" y="95" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">-ok</text>
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
          <circle cx="120" cy="80" r="35" fill="#95E1D3" opacity="0.2" stroke="#95E1D3" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="18" fill="#95E1D3" fontWeight="bold">te</text>
          <text x="120" y="95" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">-sz</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <circle cx="120" cy="80" r="35" fill="#4ECDC4" opacity="0.2" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="75" textAnchor="middle" fontSize="18" fill="#4ECDC4" fontWeight="bold">ő</text>
          <text x="120" y="95" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">∅</text>
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
          <circle cx="50" cy="60" r="16" fill="#FF6B9D" />
          <text x="50" y="67" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">1</text>
          <circle cx="120" cy="60" r="16" fill="#95E1D3" />
          <text x="120" y="67" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">2</text>
          <circle cx="190" cy="60" r="16" fill="#4ECDC4" />
          <text x="190" y="67" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">3</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Személyek</text>
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

export default function ConjugationO2Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
