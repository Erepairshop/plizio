"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🔀 Kausalsätze",
    r1_info_text: "Ein Kausalsatz erklärt den GRUND oder die URSACHE einer Handlung. Konjunktionen: 'weil', 'da', 'zumal'. 'Ich gehe nach Hause, weil ich müde bin.' (Grund: müde sein) 'Ich blieb zuhause, da es regnete.' (Grund: Regen) Das Kausalsatz ist ein Nebensatz mit Verb am Ende. 'WEIL' ist die häufigste Konjunktion.",
    r1_q: "Was erklärt ein Kausalsatz?",
    r1_a1: "Den Grund oder die Ursache",
    r1_a2: "Die Zeit oder den Zeitpunkt",
    r1_a3: "Die Bedingung oder Voraussetzung",
    r1_a4: "Das Ziel oder den Zweck",
    r2_info_title: "❓ Konditionalsätze",
    r2_info_text: "Ein Konditionalsatz erklärt die BEDINGUNG oder VORAUSSETZUNG für etwas. Konjunktionen: 'wenn', 'falls', 'sofern'. 'Wenn es regnet, bleibe ich zuhause.' (Bedingung: Regen) 'Falls du Zeit hast, komm vorbei.' (Bedingung: Zeit haben) Der Konditionalsatz kann auch mit Präposition 'unter' starten: 'Unter der Voraussetzung, dass...'",
    r2_q: "Welcher Satz ist ein Konditionalsatz?",
    r2_a1: "Ich lerne, weil die Prüfung kommt.",
    r2_a2: "Wenn die Prüfung kommt, lerne ich.",
    r2_a3: "Ich lerne, obwohl die Prüfung kommt.",
    r2_a4: "Ich lerne, damit ich gut bin.",
    r3_info_title: "🔀 Unterschiede: Kausal vs. Konditional",
    r3_info_text: "KAUSAL (weil): 'Ich kaufe einen Regenschirm, WEIL es regnet.' (Der Grund ist real/aktuell) KONDITIONAL (wenn): 'Ich kaufe einen Regenschirm, WENN es regnet.' (Die Bedingung ist möglich/zukünftig) Weil bezieht sich auf die Gegenwart oder Vergangenheit. Wenn bezieht sich auf mögliche Zukünftiges.",
    r3_q: "Kausal oder Konditional? 'Wenn du studierst, wirst du schlau.'",
    r3_a1: "Konditional (Bedingung)",
    r3_a2: "Kausal (Grund)",
    r3_a3: "Final (Zweck)",
    r3_a4: "Temporal (Zeit)",
    r4_info_title: "⭐ Wortstellung im Nebensatz",
    r4_info_text: "In Kausal- und Konditionalsätzen (Nebensätze) steht das Verb am ENDE. 'Ich gehe raus, WEIL es schönes Wetter IST.' (ist am Ende) 'Wenn du kommst, ESSEN wir zusammen.' (essen am Ende) Das ist die wichtigste Regel für deutsche Nebensätze!",
    r4_q: "Welcher Satz hat korrekte Wortstellung?",
    r4_a1: "Wenn du Zeit hast, komm bitte vorbei.",
    r4_a2: "Wenn du hast Zeit, komm bitte vorbei.",
    r4_a3: "Wenn Zeit du hast, komm bitte vorbei.",
    r4_a4: "Wenn du kommst Zeit, bitte vorbei.",
    r5_info_title: "✅ Wiederholung: Kausal & Konditional",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Konjunktion für Grund: 'Ich blieb zuhause, ____ ich krank war.'",
    r5_q1_a1: "weil",
    r5_q1_a2: "wenn",
    r5_q1_a3: "obwohl",
    r5_q1_a4: "damit",
    r5_q2: "Art des Nebensatzes: 'Ich kenne dich seit zehn Jahren, da wir zusammen aufwuchsen.'",
    r5_q2_a1: "Kausalsatz",
    r5_q2_a2: "Konditionalsatz",
    r5_q2_a3: "Temporalsatz",
    r5_q2_a4: "Finalsatz",
    r5_q3: "Korrekt: 'Falls sie anruft, ...'",
    r5_q3_a1: "...sage ich ihr Bescheid.",
    r5_q3_a2: "...ich sage ihr Bescheid.",
    r5_q3_a3: "...sagen ich ihr Bescheid.",
    r5_q3_a4: "...Bescheid ich sage ihr.",
  },
  en: {
    r1_info_title: "🔀 Causal Clauses",
    r1_info_text: "A causal clause explains the REASON or CAUSE of an action. Conjunctions: 'weil' (because), 'da' (since), 'zumal' (especially since). 'Ich gehe nach Hause, weil ich müde bin.' (Reason: tired) The causal clause is a subordinate clause with verb at the end. 'WEIL' is the most common conjunction.",
    r1_q: "What does a causal clause explain?",
    r1_a1: "The reason or cause",
    r1_a2: "The time or moment",
    r1_a3: "The condition or requirement",
    r1_a4: "The goal or purpose",
    r2_info_title: "❓ Conditional Clauses",
    r2_info_text: "A conditional clause explains the CONDITION or REQUIREMENT for something. Conjunctions: 'wenn' (if), 'falls' (in case), 'sofern' (provided that). 'Wenn es regnet, bleibe ich zuhause.' (Condition: rain) The conditional clause introduces possible or future situations.",
    r2_q: "Which sentence is a conditional clause?",
    r2_a1: "I study because the exam comes.",
    r2_a2: "If the exam comes, I study.",
    r2_a3: "I study although the exam comes.",
    r2_a4: "I study so that I'm good.",
    r3_info_title: "🔀 Differences: Causal vs. Conditional",
    r3_info_text: "CAUSAL (weil): 'I buy an umbrella BECAUSE it rains.' (The reason is real/current) CONDITIONAL (wenn): 'I buy an umbrella IF it rains.' (The condition is possible/future) Because refers to present or past. If refers to possible future.",
    r3_q: "Causal or conditional? 'If you study, you will be smart.'",
    r3_a1: "Conditional (condition)",
    r3_a2: "Causal (reason)",
    r3_a3: "Final (purpose)",
    r3_a4: "Temporal (time)",
    r4_info_title: "⭐ Word Order in Subordinate Clause",
    r4_info_text: "In causal and conditional clauses (subordinate), the verb comes at the END. 'Ich gehe raus, WEIL es schönes Wetter IST.' (ist at end) 'Wenn du kommst, ESSEN wir zusammen.' (essen at end) This is the key rule for German subordinate clauses!",
    r4_q: "Which sentence has correct word order?",
    r4_a1: "If you have time, please come by.",
    r4_a2: "If you have time please, come by.",
    r4_a3: "If time you have, please come by.",
    r4_a4: "If you come time, please by.",
    r5_info_title: "✅ Review: Causal & Conditional",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Conjunction for reason: 'I stayed home ____ I was sick.'",
    r5_q1_a1: "because",
    r5_q1_a2: "if",
    r5_q1_a3: "although",
    r5_q1_a4: "so that",
    r5_q2: "Type of clause: 'I've known you for ten years, since we grew up together.'",
    r5_q2_a1: "Causal clause",
    r5_q2_a2: "Conditional clause",
    r5_q2_a3: "Temporal clause",
    r5_q2_a4: "Final clause",
    r5_q3: "Correct: 'If she calls, ...'",
    r5_q3_a1: "...I tell her.",
    r5_q3_a2: "...I tell her.",
    r5_q3_a3: "...tell I her.",
    r5_q3_a4: "...tell her I.",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🔀
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
            ❓
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

export default function KausalKonditionalExplorer({ color = "#6366F1", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
