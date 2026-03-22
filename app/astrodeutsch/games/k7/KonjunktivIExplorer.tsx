"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "💭 Konjunktiv I Basics",
    r1_info_text: "Der Konjunktiv I wird oft in der indirekten Rede (indirekte Rede) verwendet. Er drückt aus, was jemand anderes gesagt hat, ohne es direkt zu zitieren. Konjunktiv I von 'sein': ich sei, du seiest, er/sie sei, wir seien, ihr seiet, sie seien.",
    r1_q: "Welcher Satz nutzt Konjunktiv I?",
    r1_a1: "Er sagte, er sei krank.",
    r1_a2: "Er sagte, er ist krank.",
    r1_a3: "Er sagte, er war krank.",
    r1_a4: "Er sagte, er wird krank.",
    r2_info_title: "📰 Indirekte Rede",
    r2_info_text: "Bei indirekter Rede nutzen wir Konjunktiv I, um Aussagen anderer Personen wiederzugeben. Direkt: 'Ich bin müde.' → Indirekt: 'Er sagte, er sei müde.' Das 'sei' ist Konjunktiv I von 'sein'.",
    r2_q: "Wähle die indirekte Rede mit Konjunktiv I!",
    r2_a1: "Sie sagte, dass sie Zeit hat.",
    r2_a2: "Sie sagte, sie habe Zeit.",
    r2_a3: "Sie sagte, sie hatte Zeit.",
    r2_a4: "Sie sagte, sie wird Zeit haben.",
    r3_info_title: "🔀 Umformung: Direkt → Indirekt",
    r3_info_text: "Direkte Rede: Maria sagt: 'Ich bin glücklich.' Indirekte Rede: Maria sagt, sie sei glücklich. Das Verb wird in Konjunktiv I umgeformt und das Pronomen angepasst.",
    r3_q: "Indirekte Rede zu: 'Ich habe den Film gesehen.'",
    r3_a1: "Er sagte, er habe den Film gesehen.",
    r3_a2: "Er sagte, er sieht den Film.",
    r3_a3: "Er sagte, er hat den Film gesehen.",
    r3_a4: "Er sagte, er sah den Film.",
    r4_info_title: "⭐ Konjunktiv I Formen",
    r4_info_text: "Konjunktiv I wird vom Präsensstamm gebildet. haben: ich habe (→ ich hätte im Konj. II), sein: ich sei, gehen: ich gehe (→ Konj. I), machen: ich mache. Oft nutzen wir Konjunktiv II wenn Konj. I zu ähnlich wie Präsens klingt.",
    r4_q: "Konjunktiv I von 'haben':?",
    r4_a1: "ich habe",
    r4_a2: "ich hätte",
    r4_a3: "ich hab",
    r4_a4: "ich gehabt",
    r5_info_title: "✅ Wiederholung: Konjunktiv I",
    r5_info_text: "Teste dein Wissen über indirekte Rede!",
    r5_q1: "Konjunktiv I von 'sein': ich ___.",
    r5_q1_a1: "sei",
    r5_q1_a2: "bin",
    r5_q1_a3: "wäre",
    r5_q1_a4: "war",
    r5_q2: "Indirekte Rede: 'Ich komme später.' → Er meinte, er ___.",
    r5_q2_a1: "komme später",
    r5_q2_a2: "kommt später",
    r5_q2_a3: "kam später",
    r5_q2_a4: "würde später kommen",
    r5_q3: "Welcher Satz steht in indirekter Rede?",
    r5_q3_a1: "Maria sagt: 'Ich bin schnell.'",
    r5_q3_a2: "Maria sagt, sie sei schnell.",
    r5_q3_a3: "Maria ist schnell.",
    r5_q3_a4: "Maria sagt, sie ist schnell.",
  },
  en: {
    r1_info_title: "💭 Subjunctive I Basics",
    r1_info_text: "The Subjunctive I (Konjunktiv I) is used mainly in indirect speech (indirekte Rede). It expresses what someone else said without direct quotation. Subjunctive I of 'sein': ich sei, du seiest, er/sie sei, wir seien, ihr seiet, sie seien.",
    r1_q: "Which sentence uses Subjunctive I?",
    r1_a1: "He said he is sick.",
    r1_a2: "He said he is sick.",
    r1_a3: "He said he was sick.",
    r1_a4: "He said he will be sick.",
    r2_info_title: "📰 Indirect Speech",
    r2_info_text: "In indirect speech we use Subjunctive I to report what others said. Direct: 'I am tired.' → Indirect: 'He said he be tired.' We adjust pronouns and use Subjunctive I forms.",
    r2_q: "Choose the indirect speech with Subjunctive I!",
    r2_a1: "She said that she has time.",
    r2_a2: "She said she has time.",
    r2_a3: "She said she had time.",
    r2_a4: "She said she will have time.",
    r3_info_title: "🔀 Converting: Direct → Indirect",
    r3_info_text: "Direct speech: Maria says: 'I am happy.' Indirect speech: Maria says she be happy. The verb becomes Subjunctive I and the pronoun changes.",
    r3_q: "Indirect speech for: 'I have seen the film.'",
    r3_a1: "He said he has seen the film.",
    r3_a2: "He said he sees the film.",
    r3_a3: "He said he has seen the film.",
    r3_a4: "He said he saw the film.",
    r4_info_title: "⭐ Subjunctive I Forms",
    r4_info_text: "Subjunctive I is formed from the present stem. haben: ich habe, sein: ich sei, gehen: ich gehe, machen: ich mache. Often we use Subjunctive II if Subjunctive I sounds too similar to present.",
    r4_q: "Subjunctive I of 'haben': ich ___.",
    r4_a1: "habe",
    r4_a2: "hätte",
    r4_a3: "hab",
    r4_a4: "gehabt",
    r5_info_title: "✅ Review: Subjunctive I",
    r5_info_text: "Test your knowledge of indirect speech!",
    r5_q1: "Subjunctive I of 'sein': ich ___.",
    r5_q1_a1: "be",
    r5_q1_a2: "am",
    r5_q1_a3: "were",
    r5_q1_a4: "was",
    r5_q2: "Indirect speech: 'I come later.' → He meant he ___.",
    r5_q2_a1: "come later",
    r5_q2_a2: "comes later",
    r5_q2_a3: "came later",
    r5_q2_a4: "would come later",
    r5_q3: "Which sentence is in indirect speech?",
    r5_q3_a1: "Maria says: 'I am quick.'",
    r5_q3_a2: "Maria says she be quick.",
    r5_q3_a3: "Maria is quick.",
    r5_q3_a4: "Maria says she is quick.",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            💭
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
            📰
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a1", "r2_a2", "r2_a3", "r2_a4"], answer: "r2_a2" }],
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ⭐
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
        { question: "r5_q3", choices: ["r5_q3_a1", "r5_q3_a2", "r5_q3_a3", "r5_q3_a4"], answer: "r5_q3_a2" },
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

export default function KonjunktivIExplorer({ color = "#B44DFF", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
