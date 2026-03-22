"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🔧 Werden-Passiv Basics",
    r1_info_text: "Das Werden-Passiv wird mit werden + Partizip II gebildet. Es betont den Prozess oder die Aktion. Präsens: 'Das Haus wird gebaut.' Präteritum: 'Das Haus wurde gebaut.' Perfekt: 'Das Haus ist gebaut worden.' Das Werden-Passiv zeigt, dass etwas gerade passiert oder passiert ist.",
    r1_q: "Welcher Satz ist Werden-Passiv Präsens?",
    r1_a1: "Der Brief wird geschrieben.",
    r1_a2: "Der Brief ist geschrieben.",
    r1_a3: "Der Brief wird schreiben.",
    r1_a4: "Der Brief schreibt.",
    r2_info_title: "⏰ Zeitformen des Werden-Passiv",
    r2_info_text: "Präsens: wird + Partizip II (wird gebaut). Präteritum: wurde + Partizip II (wurde gebaut). Perfekt: ist + Partizip II + worden (ist gebaut worden). Die Formen zeigen, wann der Prozess stattfindet.",
    r2_q: "Präteritum Werden-Passiv zu 'bauen':?",
    r2_a1: "wurde gebaut",
    r2_a2: "wird gebaut",
    r2_a3: "ist gebaut worden",
    r2_a4: "baute",
    r3_info_title: "🔀 Umformung: Aktiv → Werden-Passiv",
    r3_info_text: "Aktiv: 'Der Schüler schreibt den Aufsatz.' Werden-Passiv: 'Der Aufsatz wird von dem Schüler geschrieben.' Das Objekt wird zum Subjekt, das Subjekt zur von-Phrase, das Verb wird zu werden + Partizip II.",
    r3_q: "Werden-Passiv zu: 'Ich repariere das Auto.'",
    r3_a1: "Das Auto wird von mir repariert.",
    r3_a2: "Das Auto repariert mich.",
    r3_a3: "Das Auto ist repariert.",
    r3_a4: "Ich werde das Auto reparieren.",
    r4_info_title: "✨ Agensangabe: 'von' vs. 'durch'",
    r4_info_text: "Die Agensangabe zeigt, wer die Handlung macht: 'Das Haus wird von dem Architekten geplant.' (von = Person). 'Das Haus wird durch Sturm beschädigt.' (durch = Kraft/Instrument). 'von' für Personen, 'durch' für Kräfte oder Mittel.",
    r4_q: "Was ist richtig? 'Das Lied wird ____ Beethoven komponiert.'",
    r4_a1: "von",
    r4_a2: "durch",
    r4_a3: "mit",
    r4_a4: "zu",
    r5_info_title: "✅ Wiederholung: Werden-Passiv",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Präsens Werden-Passiv von 'bringen': Das Paket wird ___.",
    r5_q1_a1: "gebracht",
    r5_q1_a2: "brächte",
    r5_q1_a3: "bringt",
    r5_q1_a4: "wird bringen",
    r5_q2: "Welcher Satz ist Werden-Passiv Perfekt?",
    r5_q2_a1: "Das Fenster ist geputzt worden.",
    r5_q2_a2: "Das Fenster wird geputzt.",
    r5_q2_a3: "Das Fenster wurde geputzt.",
    r5_q2_a4: "Das Fenster putzt sich.",
    r5_q3: "Agensangabe: 'Das Gemälde wird ___ Picasso gemalt.'",
    r5_q3_a1: "von",
    r5_q3_a2: "durch",
    r5_q3_a3: "mit",
    r5_q3_a4: "zu",
  },
  en: {
    r1_info_title: "🔧 Werden-Passive Basics",
    r1_info_text: "The werden-passive is formed with werden + past participle. It emphasizes the process or action. Present: 'Das Haus wird gebaut.' Preterite: 'Das Haus wurde gebaut.' Perfect: 'Das Haus ist gebaut worden.' The werden-passive shows something is happening or has happened.",
    r1_q: "Which sentence is werden-passive present?",
    r1_a1: "The letter is being written.",
    r1_a2: "The letter is written.",
    r1_a3: "The letter will write.",
    r1_a4: "The letter writes.",
    r2_info_title: "⏰ Tenses of Werden-Passive",
    r2_info_text: "Present: wird + past participle (wird gebaut). Preterite: wurde + past participle (wurde gebaut). Perfect: ist + past participle + worden (ist gebaut worden). The forms show when the process occurs.",
    r2_q: "Preterite werden-passive of 'bauen': ___.",
    r2_a1: "wurde gebaut",
    r2_a2: "wird gebaut",
    r2_a3: "ist gebaut worden",
    r2_a4: "baute",
    r3_info_title: "🔀 Converting: Active → Werden-Passive",
    r3_info_text: "Active: 'The student writes the essay.' Werden-passive: 'The essay is written by the student.' The object becomes the subject, the subject becomes the by-phrase, the verb becomes werden + past participle.",
    r3_q: "Werden-passive for: 'I repair the car.'",
    r3_a1: "The car is repaired by me.",
    r3_a2: "The car repairs me.",
    r3_a3: "The car is repaired.",
    r3_a4: "I will repair the car.",
    r4_info_title: "✨ Agent Phrase: 'von' vs. 'durch'",
    r4_info_text: "The agent phrase shows who does the action: 'Das Haus wird von dem Architekten geplant.' (von = person). 'Das Haus wird durch Sturm beschädigt.' (durch = force/instrument). Use 'von' for people, 'durch' for forces or means.",
    r4_q: "What's correct? 'The song is composed ___ Beethoven.'",
    r4_a1: "by (person)",
    r4_a2: "through (force)",
    r4_a3: "with",
    r4_a4: "to",
    r5_info_title: "✅ Review: Werden-Passive",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Present werden-passive of 'bring': The package is ___.",
    r5_q1_a1: "brought",
    r5_q1_a2: "would bring",
    r5_q1_a3: "brings",
    r5_q1_a4: "will bring",
    r5_q2: "Which sentence is werden-passive perfect?",
    r5_q2_a1: "The window has been cleaned.",
    r5_q2_a2: "The window is being cleaned.",
    r5_q2_a3: "The window was cleaned.",
    r5_q2_a4: "The window cleans itself.",
    r5_q3: "Agent phrase: 'The painting is painted ___ Picasso.'",
    r5_q3_a1: "by (person)",
    r5_q3_a2: "through (force)",
    r5_q3_a3: "with",
    r5_q3_a4: "to",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_info_title",
      infoText: "r1_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🔧
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a1", "r1_a2", "r1_a3", "r1_a4"], answer: "r1_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_info_title",
      infoText: "r2_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ⏰
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a1", "r2_a2", "r2_a3", "r2_a4"], answer: "r2_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_info_title",
      infoText: "r3_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)" }}>
          <text x="60" y="85" textAnchor="middle" fontSize="48">
            ➡️
          </text>
          <text x="180" y="85" textAnchor="middle" fontSize="48">
            🔀
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a1", "r3_a2", "r3_a3", "r3_a4"], answer: "r3_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_info_title",
      infoText: "r4_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ✨
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a1", "r4_a2", "r4_a3", "r4_a4"], answer: "r4_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_info_title",
      infoText: "r5_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ✅
          </text>
        </svg>
      ),
      questions: [
        { question: "r5_q1", choices: ["r5_q1_a1", "r5_q1_a2", "r5_q1_a3", "r5_q1_a4"], answer: "r5_q1_a1" },
        { question: "r5_q2", choices: ["r5_q2_a1", "r5_q2_a2", "r5_q2_a3", "r5_q2_a4"], answer: "r5_q2_a1" },
        { question: "r5_q3", choices: ["r5_q3_a1", "r5_q3_a2", "r5_q3_a3", "r5_q3_a4"], answer: "r5_q3_a1" },
      ],
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function WerdenPassivExplorer({ color = "#3B82F6", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
