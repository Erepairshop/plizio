"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "⏱️ Temporalsätze Basics",
    r1_info_text: "Ein Temporalsatz gibt die ZEIT oder den ZEITPUNKT einer Handlung an. Konjunktionen: 'als' (Vergangenheit, einmalig), 'wenn' (Gegenwart/Zukunft oder Wiederholung), 'während' (gleichzeitig), 'nachdem' (danach), 'bevor' (davor). 'ALS ich ankam, wartete er schon.' (einmaliger Moment in der Vergangenheit) 'WENN ich eintrete, grüßt er mich.' (wiederholt oder zukünftig)",
    r1_q: "Was gibt ein Temporalsatz an?",
    r1_a1: "Die Zeit oder den Zeitpunkt",
    r1_a2: "Den Grund oder die Ursache",
    r1_a3: "Die Bedingung oder Voraussetzung",
    r1_a4: "Das Ziel oder den Zweck",
    r2_info_title: "🔀 'Als' vs. 'Wenn'",
    r2_info_text: "ALS (Vergangenheit): 'Als ich zur Schule ging, traf ich meinen Freund.' (einmalige, abgeschlossene Handlung) WENN (Gegenwart/Zukunft oder Wiederholung): 'Wenn ich zur Schule gehe, treffe ich meinen Freund.' (wiederholt oder zukünftig) Als = Einmaligkeit in der Vergangenheit. Wenn = Wiederholung oder Zukunft.",
    r2_q: "Welcher Satz nutzt 'als' richtig?",
    r2_a1: "Als ich jeden Tag joggte, war ich fit.",
    r2_a2: "Als ich gestern aufwachte, regnete es.",
    r2_a3: "Als ich morgen komme, werde ich dir helfen.",
    r2_a4: "Als es immer regnet, nehme ich einen Schirm.",
    r3_info_title: "📝 Weitere Temporalkonjunktionen",
    r3_info_text: "WÄHREND: drückt Gleichzeitigkeit aus. 'Während ich las, telefonierte er.' (gleichzeitig) NACHDEM: beschreibt aufeinanderfolgende Handlungen. 'Nachdem ich aß, ging ich spazieren.' (erst essen, dann spazieren) BEVOR: drückt zeitliche Voraussetzung aus. 'Bevor ich gehe, räume ich auf.' (erst aufräumen, dann gehen) Jede Konjunktion hat eine spezifische zeitliche Bedeutung.",
    r3_q: "Welche Konjunktion drückt Gleichzeitigkeit aus?",
    r3_a1: "während",
    r3_a2: "nachdem",
    r3_a3: "bevor",
    r3_a4: "als",
    r4_info_title: "⭐ Zeitformen in Temporalsätzen",
    r4_info_text: "NACHDEM verlangt oft Tempusfolge: 'Nachdem ich gegessen HATTE, ging ich spazieren.' (Plusquamperfekt vor Präteritum) BEVOR nutzt oft gleiche oder verwandte Zeiten: 'Bevor ich gehe, packe ich.' (Präsens) Die Zeitform zeigt die logische Reihenfolge der Ereignisse.",
    r4_q: "Welcher Satz hat richtige Zeitenfolge nach 'nachdem'?",
    r4_a1: "Nachdem er gegessen hatte, ging er spazieren.",
    r4_a2: "Nachdem er isst, geht er spazieren.",
    r4_a3: "Nachdem er gehen wird, isst er.",
    r4_a4: "Nachdem er spazieren geht, isst er.",
    r5_info_title: "✅ Wiederholung: Temporalsätze",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Konjunktion für Gleichzeitigkeit: '____ ich arbeitete, hörte ich Musik.'",
    r5_q1_a1: "Während",
    r5_q1_a2: "Nachdem",
    r5_q1_a3: "Bevor",
    r5_q1_a4: "Als",
    r5_q2: "Welcher Satz ist zeitlich sinnvoll?",
    r5_q2_a1: "Wenn es schneit, nehme ich einen Schirm.",
    r5_q2_a2: "Als es jeden Winter schneit, nehme ich einen Schirm.",
    r5_q2_a3: "Wenn es gestern schneite, nehme ich einen Schirm.",
    r5_q2_a4: "Als ich morgen zu Hause bin, arbeite ich.",
    r5_q3: "Art des Temporalsatzes: 'Bevor die Schule beginnt, frühstücke ich.'",
    r5_q3_a1: "Temporal (Voraussetzung)",
    r5_q3_a2: "Kausal (Grund)",
    r5_q3_a3: "Konditional (Bedingung)",
    r5_q3_a4: "Final (Zweck)",
  },
  en: {
    r1_info_title: "⏱️ Temporal Clauses Basics",
    r1_info_text: "A temporal clause gives the TIME or MOMENT of an action. Conjunctions: 'als' (past, once), 'wenn' (present/future or repetition), 'während' (simultaneously), 'nachdem' (after), 'bevor' (before). 'ALS I arrived, he was already waiting.' 'WENN I enter, he greets me.' (repetition or future)",
    r1_q: "What does a temporal clause indicate?",
    r1_a1: "The time or moment",
    r1_a2: "The reason or cause",
    r1_a3: "The condition or requirement",
    r1_a4: "The goal or purpose",
    r2_info_title: "🔀 'Als' vs. 'Wenn'",
    r2_info_text: "ALS (past): 'Als I went to school, I met my friend.' (single, completed action) WENN (present/future or repetition): 'Wenn I go to school, I meet my friend.' (repeated or future) Als = single event in past. Wenn = repetition or future.",
    r2_q: "Which sentence uses 'als' correctly?",
    r2_a1: "Als I jogged every day, I was fit.",
    r2_a2: "Als I woke up yesterday, it was raining.",
    r2_a3: "Als I come tomorrow, I will help you.",
    r2_a4: "Als it always rains, I take an umbrella.",
    r3_info_title: "📝 More Temporal Conjunctions",
    r3_info_text: "WÄHREND: expresses simultaneity. 'Während I read, he telephoned.' NACHDEM: describes sequential actions. 'Nachdem I ate, I went for a walk.' BEVOR: expresses temporal prerequisite. 'Bevor I leave, I tidy up.' Each conjunction has specific temporal meaning.",
    r3_q: "Which conjunction expresses simultaneity?",
    r3_a1: "während",
    r3_a2: "nachdem",
    r3_a3: "bevor",
    r3_a4: "als",
    r4_info_title: "⭐ Tenses in Temporal Clauses",
    r4_info_text: "NACHDEM often requires tense sequence: 'Nachdem I eaten had, I went for a walk.' (Pluperfect before preterite) BEVOR uses often same tenses: 'Bevor I leave, I pack.' The tense shows the logical order of events.",
    r4_q: "Which sentence has correct tense sequence after 'nachdem'?",
    r4_a1: "After he had eaten, he went for a walk.",
    r4_a2: "After he eats, he goes for a walk.",
    r4_a3: "After he will go, he eats.",
    r4_a4: "After he goes for a walk, he eats.",
    r5_info_title: "✅ Review: Temporal Clauses",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Conjunction for simultaneity: '____ I worked, I heard music.'",
    r5_q1_a1: "While",
    r5_q1_a2: "After",
    r5_q1_a3: "Before",
    r5_q1_a4: "When",
    r5_q2: "Which sentence is temporally logical?",
    r5_q2_a1: "If it snows, I take an umbrella.",
    r5_q2_a2: "When it snows every winter, I take an umbrella.",
    r5_q2_a3: "If it snowed yesterday, I take an umbrella.",
    r5_q2_a4: "When I'm home tomorrow, I work.",
    r5_q3: "Type of temporal clause: 'Before school begins, I have breakfast.'",
    r5_q3_a1: "Temporal (prerequisite)",
    r5_q3_a2: "Causal (reason)",
    r5_q3_a3: "Conditional (condition)",
    r5_q3_a4: "Final (purpose)",
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
            ⏱️
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
            🔀
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
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            📝
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

export default function TemporalsatzExplorer({ color = "#14B8A6", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
