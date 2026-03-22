"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🌿 Infinitivkonstruktionen Basics",
    r1_info_text: "Infinitivkonstruktionen sind Satzteile, die mit einem Infinitiv enden. Beispiel: 'Ich habe vor, morgen zu kommen.' Die Struktur ist meist: Präposition + Infinitiv mit 'zu'. Es gibt verschiedene Arten: 'um...zu' (Zweck), 'ohne...zu' (ohne dass), 'anstatt/statt...zu' (Gegensatz). Diese Konstruktionen ersetzen oft Nebensätze und machen Texte kürzer.",
    r1_q: "Was ist eine Infinitivkonstruktion?",
    r1_a1: "Ein Satzteil mit Infinitiv + zu",
    r1_a2: "Ein Hauptsatz mit Infinitiv",
    r1_a3: "Ein Verb ohne Infinitiv",
    r1_a4: "Ein Satz mit Partizip",
    r2_info_title: "🎯 Um...zu (Zweck)",
    r2_info_text: "UM...ZU drückt den ZWECK oder die ABSICHT aus. 'Ich fahre nach München, UM die Kirche zu besichtigen.' (Zweck: Kirche sehen) 'Sie trainiert täglich, UM stärker zu werden.' (Absicht: stärker werden) Die Struktur ist: Hauptsatz + um + Infinitiv mit zu. Das Subjekt des Hauptsatzes muss gleich sein!",
    r2_q: "Welcher Satz nutzt 'um...zu' richtig?",
    r2_a1: "Ich gehe zur Schule, um zu lernen.",
    r2_a2: "Ich gehe zur Schule, um lerne.",
    r2_a3: "Ich gehe zur Schule, um lernen zu.",
    r2_a4: "Ich gehe zur Schule, um gelernt zu.",
    r3_info_title: "🚫 Ohne...zu & Anstatt...zu",
    r3_info_text: "OHNE...ZU: beschreibt das Fehlen von etwas. 'Er ging, ohne sich zu verabschieden.' (Er verabschiedete sich nicht) ANSTATT/STATT...ZU: zeigt einen Gegensatz. 'Anstatt zu arbeiten, spielte er.' (Er spielte, statt zu arbeiten — Gegensatz) Beide Konstruktionen nutzen zu + Infinitiv nach der Präposition.",
    r3_q: "Was bedeutet 'ohne zu'?",
    r3_a1: "Das Fehlen von etwas",
    r3_a2: "Die Absicht oder der Zweck",
    r3_a3: "Die Bedingung oder Voraussetzung",
    r3_a4: "Der Grund oder die Ursache",
    r4_info_title: "⭐ Ersatz für Nebensätze",
    r4_info_text: "Infinitivkonstruktionen ersetzen oft Nebensätze: Nebensatz: 'Ich fahre, DAMIT ich die Kirche besichtige.' → Infinitivkonstruktion: 'Ich fahre, UM die Kirche zu besichtigen.' Nebensatz: 'Er ging, OHNE DASS er sich verabschiedete.' → Infinitivkonstruktion: 'Er ging, OHNE sich zu verabschieden.' Infinitivkonstruktionen sind kürzer und stilistisch besser.",
    r4_q: "Ersetze durch Infinitivkonstruktion: 'Er arbeitet, damit er Geld verdient.'",
    r4_a1: "Er arbeitet, um Geld zu verdienen.",
    r4_a2: "Er arbeitet, ohne Geld zu verdienen.",
    r4_a3: "Er arbeitet, anstatt Geld zu verdienen.",
    r4_a4: "Er arbeitet, ohne zu arbeiten.",
    r5_info_title: "✅ Wiederholung: Infinitivkonstruktionen",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Was ist korrekt? 'Sie studiert Medizin, ____ Ärztin zu werden.'",
    r5_q1_a1: "um",
    r5_q1_a2: "ohne",
    r5_q1_a3: "anstatt",
    r5_q1_a4: "damit",
    r5_q2: "Bedingung für richtige um...zu: Das Subjekt ___.",
    r5_q2_a1: "muss gleich sein",
    r5_q2_a2: "muss unterschiedlich sein",
    r5_q2_a3: "kann gleich oder unterschiedlich sein",
    r5_q2_a4: "ist immer 'er'",
    r5_q3: "Welcher Satz hat korrekte Struktur?",
    r5_q3_a1: "Anstatt zu schlafen, arbeitete er.",
    r5_q3_a2: "Anstatt schlafen, arbeitete er.",
    r5_q3_a3: "Anstatt zu schlafen arbeitet, er.",
    r5_q3_a4: "Anstatt schafen zu, arbeitete er.",
  },
  en: {
    r1_info_title: "🌿 Infinitive Constructions Basics",
    r1_info_text: "Infinitive constructions are sentence parts that end with an infinitive. Example: 'I plan to come tomorrow.' The structure is usually: preposition + infinitive with 'to/zu'. There are different types: 'um...zu' (purpose), 'ohne...zu' (without), 'anstatt...zu' (instead of). These replace subordinate clauses and make texts shorter.",
    r1_q: "What is an infinitive construction?",
    r1_a1: "A sentence part with infinitive + zu",
    r1_a2: "A main clause with infinitive",
    r1_a3: "A verb without infinitive",
    r1_a4: "A clause with participle",
    r2_info_title: "🎯 Um...zu (Purpose)",
    r2_info_text: "UM...ZU expresses PURPOSE or INTENTION. 'I go to Munich TO SEE the church.' (Purpose: see church) 'She trains daily TO GET stronger.' (Intention: get stronger) The structure is: main clause + um + infinitive with zu. The subject of main clause must be the same!",
    r2_q: "Which sentence uses 'um...zu' correctly?",
    r2_a1: "I go to school to learn.",
    r2_a2: "I go to school to learn.",
    r2_a3: "I go to school to learning.",
    r2_a4: "I go to school to learned.",
    r3_info_title: "🚫 Ohne...zu & Anstatt...zu",
    r3_info_text: "OHNE...ZU: describes the absence of something. 'He left without saying goodbye.' ANSTATT/STATT...ZU: shows a contrast. 'Instead of working, he played.' Both constructions use zu + infinitive after the preposition.",
    r3_q: "What does 'ohne zu' mean?",
    r3_a1: "The absence of something",
    r3_a2: "The intention or purpose",
    r3_a3: "The condition or requirement",
    r3_a4: "The reason or cause",
    r4_info_title: "⭐ Replacing Subordinate Clauses",
    r4_info_text: "Infinitive constructions often replace subordinate clauses: Subordinate: 'I go SO THAT I see the church.' → Infinitive: 'I go TO SEE the church.' Subordinate: 'He left WITHOUT SAYING goodbye.' → Infinitive: 'He left without saying goodbye.' Infinitives are shorter and stylistically better.",
    r4_q: "Replace with infinitive construction: 'He works so that he earns money.'",
    r4_a1: "He works to earn money.",
    r4_a2: "He works without earning money.",
    r4_a3: "He works instead of earning money.",
    r4_a4: "He works without working.",
    r5_info_title: "✅ Review: Infinitive Constructions",
    r5_info_text: "Test your knowledge!",
    r5_q1: "What's correct? 'She studies medicine ____ doctor to become.'",
    r5_q1_a1: "in order to",
    r5_q1_a2: "without",
    r5_q1_a3: "instead of",
    r5_q1_a4: "so that",
    r5_q2: "Requirement for correct um...zu: The subject ___.",
    r5_q2_a1: "must be the same",
    r5_q2_a2: "must be different",
    r5_q2_a3: "can be same or different",
    r5_q2_a4: "is always 'he'",
    r5_q3: "Which sentence has correct structure?",
    r5_q3_a1: "Instead of sleeping, he worked.",
    r5_q3_a2: "Instead of sleep, he worked.",
    r5_q3_a3: "Instead of sleeping work, he.",
    r5_q3_a4: "Instead sleep to, he worked.",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🌿
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
      questions: [{ question: "r2_q", choices: ["r2_a1", "r2_a2", "r2_a3", "r2_a4"], answer: "r2_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_info_title",
      infoText: "r3_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🚫
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

export default function InfinitivConstructionExplorer({ color = "#A855F7", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
