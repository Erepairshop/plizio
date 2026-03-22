"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Személyes névmások",
    tx1: "A személyes névmások helyettesítik a személyeket: én, te, ő, mi, ti, ők.",
    q1: "Melyik mondat helyes?",
    a1: "Én szeretek játszani.",
    b1: "Me szeretek játszani.",
    c1: "I szeretek játszani.",
    d1: "én- szeretek játszani.",
    t2: "Mutató névmások",
    tx2: "A mutató névmások a közeli vagy távolabbi dolgokat mutatják: ez, az, olyan.",
    q2: "Melyik helyes mutató névmás?",
    a2: "Az kutya fut az erdőbe.",
    b2: "Ez kutya fut az erdőbe.",
    c3: "Olyan kutya fut az erdőbe.",
    d2: "Az az kutya fut az erdőbe.",
    t3: "Kérdő névmások",
    tx3: "A kérdő névmások kérdésekhez használatosak: ki?, mi?, melyik?, mennyi?",
    q3: "Melyik helyes kérdő névmás?",
    a3: "Melyik te játszottál?",
    b3: "Ki játszottál?",
    c3: "Melyik játszottál?",
    d3: "Mit játszottál te?",
    t4: "Visszaható névmások",
    tx4: "A visszaható névmások önmagunkra, önmagára mutatnak: magam, magad, maga, magunk, magatokat, maguk.",
    q4: "Melyik helyes visszaható névmás?",
    a4: "Én magam ezt teszem.",
    b4: "Én magamat ezt teszem.",
    c4: "Én magam ezt teszi.",
    d4: "Én magam ezt tesz.",
    t5: "Birtokos névmások",
    tx5: "A birtokos névmások a köztünk és közötte levő kapcsolatot mutatják: az én, a te, az ő, a mi, a ti, az ő.",
    q5: "Melyik helyes birtokos névmás?",
    a5: "A én macskám szép.",
    b5: "Az én macskám szép.",
    c5: "Én macskám szép.",
    d5: "Az mein macskám szép.",
  },
  de: {
    t1: "Personalpronomen",
    tx1: "Personalpronomen ersetzen Personen: ich, du, er, sie, es, wir, ihr, sie.",
    q1: "Welcher Satz ist korrekt?",
    a1: "Ich mag spielen.",
    b1: "Mich mag spielen.",
    c1: "Mir mag spielen.",
    d1: "Ich- mag spielen.",
    t2: "Demonstrativpronomen",
    tx2: "Demonstrativpronomen zeigen auf Dinge in der Nähe oder Ferne: dieser, diese, dieses, jener, jene, jenes.",
    q2: "Welches Demonstrativpronomen ist richtig?",
    a2: "Dieses Hund läuft.",
    b2: "Dieser Hund läuft.",
    c2: "Diese Hund läuft.",
    d2: "Jene Hund läuft.",
    t3: "Interrogativpronomen",
    tx3: "Interrogativpronomen werden in Fragen verwendet: wer?, was?, welcher?, wie viel?",
    q3: "Welches Interrogativpronomen ist richtig?",
    a3: "Welche spieltest du?",
    b3: "Wer spieltest du?",
    c3: "Welches spieltest du?",
    d3: "Was spieltest du?",
    t4: "Reflexivpronomen",
    tx4: "Reflexivpronomen beziehen sich auf die handelnde Person: mich, dich, sich, uns, euch, sich.",
    q4: "Welches Reflexivpronomen ist richtig?",
    a4: "Ich selbst das tun.",
    b4: "Ich mich das tun.",
    c4: "Ich mir das tue.",
    d4: "Ich mich das tue.",
    t5: "Possessivpronomen",
    tx5: "Possessivpronomen zeigen Besitz an: mein, dein, sein, ihr, unser, euer, ihr.",
    q5: "Welches Possessivpronomen ist richtig?",
    a5: "Mein Katze ist schön.",
    b5: "Meine Katze ist schön.",
    c5: "Mein katze ist schön.",
    d5: "Mine Katze ist schön.",
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
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="60" cy="80" r="18" fill="#FF6B6B" opacity="0.3" />
          <text x="60" y="88" textAnchor="middle" fontSize="20" fill="#FFF">
            I
          </text>
          <circle cx="120" cy="80" r="18" fill="#4ECDC4" opacity="0.3" />
          <text x="120" y="88" textAnchor="middle" fontSize="20" fill="#FFF">
            You
          </text>
          <circle cx="180" cy="80" r="18" fill="#FFE66D" opacity="0.3" />
          <text x="180" y="88" textAnchor="middle" fontSize="20" fill="#FFF">
            He
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "a1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <g opacity="0.4">
            <rect x="40" y="70" width="40" height="40" rx="4" fill="#4ECDC4" />
            <text x="60" y="100" textAnchor="middle" fontSize="12">
              ez
            </text>
          </g>
          <g opacity="0.4">
            <rect x="160" y="70" width="40" height="40" rx="4" fill="#FF6B6B" />
            <text x="180" y="100" textAnchor="middle" fontSize="12">
              az
            </text>
          </g>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Mutató névmások
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c3", "d2"],
          answer: "a2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="75" textAnchor="middle" fontSize="40">
            ❓
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Kérdő névmások
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "d3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="120" cy="80" r="35" fill="#B44DFF" opacity="0.2" />
          <text x="120" y="88" textAnchor="middle" fontSize="28">
            🪞
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "a4",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="50" y="50" width="140" height="70" rx="8" fill="#10B981" opacity="0.2" />
          <text x="80" y="95" textAnchor="middle" fontSize="14" fill="#FFF">
            magam
          </text>
          <text x="180" y="95" textAnchor="middle" fontSize="14" fill="#FFF">
            -ad
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "b5",
        },
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

export default function PronounsO4Explorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine
      def={DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
