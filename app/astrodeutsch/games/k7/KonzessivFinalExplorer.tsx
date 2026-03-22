"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🎯 Konzessivsätze",
    r1_info_text: "Ein Konzessivsatz zeigt einen GEGENSATZ oder EINWAND. Trotz einer Bedingung passiert etwas anderes. Konjunktionen: 'obwohl', 'obgleich', 'trotzdem'. 'Obwohl ich müde bin, gehe ich zum Sport.' (Einwand: müde sein, aber Sport trotzdem) 'Ich gehe zum Sport, trotzdem bin ich müde.' (Trotzdem zeigt den Gegensatz) Der Konzessivsatz zeigt: 'Das Gegenteil von dem, was man erwartet, passiert.'",
    r1_q: "Was zeigt ein Konzessivsatz?",
    r1_a1: "Einen Gegensatz oder Einwand",
    r1_a2: "Den Grund oder die Ursache",
    r1_a3: "Die Bedingung oder Voraussetzung",
    r1_a4: "Das Ziel oder den Zweck",
    r2_info_title: "🎯 Finalsätze",
    r2_info_text: "Ein Finalsatz erklärt den ZWECK oder das ZIEL einer Handlung. Konjunktionen: 'damit', 'um...zu' (mit Infinitiv). 'Ich lerne, DAMIT ich die Prüfung bestehe.' (Zweck: Prüfung bestehen) 'Ich lerne, UM die Prüfung zu bestehen.' (Zweck mit Infinitiv) Finalsätze mit 'damit' haben ein konjugiertes Verb, mit 'um...zu' einen Infinitiv.",
    r2_q: "Welcher Satz ist ein Finalsatz?",
    r2_a1: "Ich lerne, weil die Prüfung kommt.",
    r2_a2: "Ich lerne, damit ich die Prüfung bestehe.",
    r2_a3: "Ich lerne, obwohl die Prüfung kommt.",
    r2_a4: "Ich lerne, wenn die Prüfung kommt.",
    r3_info_title: "🔀 Unterschiede: Konzessiv vs. Final",
    r3_info_text: "KONZESSIV (obwohl): 'Obwohl es kalt ist, gehe ich schwimmen.' (Es ist kalt, aber ich schwimme trotzdem — Gegensatz) FINAL (damit): 'Ich lerne, damit ich die Note verbessere.' (Ich lerne für den Zweck, meine Note zu verbessern) Konzessiv = Gegensatz trotz etwas. Final = Absicht/Zweck einer Handlung.",
    r3_q: "Konzessiv oder Final? 'Ich ging spazieren, damit ich Bewegung kriege.'",
    r3_a1: "Final (Zweck)",
    r3_a2: "Konzessiv (Gegensatz)",
    r3_a3: "Kausal (Grund)",
    r3_a4: "Temporal (Zeit)",
    r4_info_title: "⭐ Um...zu vs. Damit",
    r4_info_text: "UM...ZU (+ Infinitiv) — nur wenn Subjekt gleich: 'Ich lerne, UM eine gute Note zu bekommen.' DAMIT (+ konjugiertes Verb) — Subjekt kann unterschiedlich sein: 'Ich lerne, DAMIT du stolz auf mich bist.' (Ich lerne, du wirst stolz) Wenn das Subjekt des Finalsatzes anders ist, muss man 'damit' nutzen.",
    r4_q: "Was ist richtig? 'Er trainiert, ____ er stark wird.'",
    r4_a1: "damit",
    r4_a2: "um zu",
    r4_a3: "obwohl",
    r4_a4: "während",
    r5_info_title: "✅ Wiederholung: Konzessiv & Final",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Konjunktion für Gegensatz: 'Er ist arm, ____ er ist glücklich.'",
    r5_q1_a1: "obwohl",
    r5_q1_a2: "damit",
    r5_q1_a3: "weil",
    r5_q1_a4: "wenn",
    r5_q2: "Art des Nebensatzes: 'Du musst dich beeilen, damit du nicht zu spät kommst.'",
    r5_q2_a1: "Finalsatz",
    r5_q2_a2: "Konzessivsatz",
    r5_q2_a3: "Kausalsatz",
    r5_q2_a4: "Temporalsatz",
    r5_q3: "Welcher Satz nutzt 'um...zu'?",
    r5_q3_a1: "Ich spiele Klavier, um Musiker zu werden.",
    r5_q3_a2: "Ich spiele Klavier, damit mein Lehrer zufrieden ist.",
    r5_q3_a3: "Ich spiele Klavier, obwohl ich faul bin.",
    r5_q3_a4: "Ich spiele Klavier, weil es Spaß macht.",
  },
  en: {
    r1_info_title: "🎯 Concessive Clauses",
    r1_info_text: "A concessive clause shows a CONTRAST or OBJECTION. Despite a condition, something else happens. Conjunctions: 'obwohl' (although), 'obgleich', 'trotzdem'. 'Although I am tired, I go to sports.' (Objection: tired, but still go) The concessive clause shows: 'The opposite of what you expect happens.'",
    r1_q: "What does a concessive clause show?",
    r1_a1: "A contrast or objection",
    r1_a2: "The reason or cause",
    r1_a3: "The condition or requirement",
    r1_a4: "The goal or purpose",
    r2_info_title: "🎯 Final Clauses",
    r2_info_text: "A final clause explains the PURPOSE or GOAL of an action. Conjunctions: 'damit', 'um...zu' (with infinitive). 'Ich lerne, DAMIT ich die Prüfung bestehe.' (Purpose: pass exam) 'Ich lerne, UM die Prüfung zu bestehen.' (Purpose with infinitive) Final clauses with 'damit' have a conjugated verb, with 'um...zu' an infinitive.",
    r2_q: "Which sentence is a final clause?",
    r2_a1: "I study because the exam comes.",
    r2_a2: "I study so that I pass the exam.",
    r2_a3: "I study although the exam comes.",
    r2_a4: "I study if the exam comes.",
    r3_info_title: "🔀 Differences: Concessive vs. Final",
    r3_info_text: "CONCESSIVE (obwohl): 'Although it's cold, I go swimming.' (It's cold, but I swim anyway — contrast) FINAL (damit): 'I study so that I improve my grade.' (I study for the purpose of improving) Concessive = contrast despite something. Final = intention/purpose of an action.",
    r3_q: "Concessive or final? 'I went for a walk so that I get movement.'",
    r3_a1: "Final (purpose)",
    r3_a2: "Concessive (contrast)",
    r3_a3: "Causal (reason)",
    r3_a4: "Temporal (time)",
    r4_info_title: "⭐ Um...zu vs. Damit",
    r4_info_text: "UM...ZU (+ infinitive) — only if subject is the same: 'I study TO GET a good grade.' DAMIT (+ conjugated verb) — subject can be different: 'I study SO THAT you are proud of me.' If the final clause's subject is different, use 'damit'.",
    r4_q: "What's correct? 'He trains ____ he becomes strong.'",
    r4_a1: "so that",
    r4_a2: "in order to",
    r4_a3: "although",
    r4_a4: "while",
    r5_info_title: "✅ Review: Concessive & Final",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Conjunction for contrast: 'He is poor, ____ he is happy.'",
    r5_q1_a1: "although",
    r5_q1_a2: "so that",
    r5_q1_a3: "because",
    r5_q1_a4: "if",
    r5_q2: "Type of clause: 'You must hurry so that you don't come late.'",
    r5_q2_a1: "Final clause",
    r5_q2_a2: "Concessive clause",
    r5_q2_a3: "Causal clause",
    r5_q2_a4: "Temporal clause",
    r5_q3: "Which sentence uses 'um...zu'?",
    r5_q3_a1: "I play piano in order to become a musician.",
    r5_q3_a2: "I play piano so that my teacher is satisfied.",
    r5_q3_a3: "I play piano although I'm lazy.",
    r5_q3_a4: "I play piano because it's fun.",
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
            🎯
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
            🎯
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
            🔀
          </text>
          <text x="180" y="85" textAnchor="middle" fontSize="48">
            ⚖️
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

export default function KonzessivFinalExplorer({ color = "#EC4899", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
