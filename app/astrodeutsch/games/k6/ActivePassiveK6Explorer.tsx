"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🔄 Aktiv & Passiv",
    r1_info_text: "AKTIV: Das Subjekt führt die Handlung aus. 'Der Hund beißt den Mann.' PASSIV: Das Subjekt erlebt die Handlung. 'Der Mann wird vom Hund gebissen.' Beide Sätze bedeuten das Gleiche!",
    r1_q: "Welcher Satz ist AKTIV?",
    r1_a1: "Der Lehrer erklärt die Aufgabe.",
    r1_a2: "Die Aufgabe wird vom Lehrer erklärt.",
    r1_a3: "Die Aufgabe ist erklärt worden.",
    r1_a4: "Es wird erklärt.",
    r2_info_title: "📝 Passiv erkennen",
    r2_info_text: "PASSIV erkennst du an: werden/sein + Partizip II. Beispiel: 'Das Haus wird gebaut.' 'Das Fenster wurde geputzt.' Das Partizip II ist das -t oder -en am Ende des Verbs.",
    r2_q: "Welcher Satz steht im PASSIV?",
    r2_a1: "Maria schreibt einen Brief.",
    r2_a2: "Der Brief wird von Maria geschrieben.",
    r2_a3: "Maria hat einen Brief geschrieben.",
    r2_a4: "Ich schreibe oft Briefe.",
    r3_info_title: "🔀 Umformung: Aktiv → Passiv",
    r3_info_text: "Um von Aktiv zu Passiv zu wechseln: Das Objekt wird zum Subjekt, das Subjekt wird zur von/vom-Phrase. AKTIV: 'Ich esse einen Apfel.' PASSIV: 'Ein Apfel wird von mir gegessen.'",
    r3_q: "Wie heißt der Passivsatz? Aktiv: 'Der Künstler malt das Bild.'",
    r3_a1: "Das Bild wird vom Künstler gemalt.",
    r3_a2: "Das Bild ist vom Künstler gemalt.",
    r3_a3: "Der Künstler wird das Bild malen.",
    r3_a4: "Das Bild malt der Künstler.",
    r4_info_title: "⭐ Vorgangs- & Zustandspassiv",
    r4_info_text: "VORGANGSPASSIV (werden): betont den Prozess. 'Das Haus wird gebaut.' ZUSTANDSPASSIV (sein): betont das Ergebnis. 'Das Haus ist gebaut.' Merksatz: werden = Aktion, sein = Resultat!",
    r4_q: "Was ist richtig? 'Das Fenster _____ geöffnet.'",
    r4_a1: "wird (Vorgangspassiv — aktive Handlung)",
    r4_a2: "ist (Zustandspassiv — Resultat sichtbar)",
    r4_a3: "bist",
    r4_a4: "seid",
    r5_info_title: "✅ Wiederholung: Aktiv & Passiv",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Aktiv oder Passiv? 'Die Suppe wird gekocht.'",
    r5_q1_a1: "Aktiv",
    r5_q1_a2: "Passiv",
    r5_q1_a3: "Imperative",
    r5_q1_a4: "Konjunktiv",
    r5_q2: "Welcher Satz bedeutet das Gleiche wie 'Das Kind öffnet die Tür'?",
    r5_q2_a1: "Die Tür wird vom Kind geöffnet.",
    r5_q2_a2: "Das Kind wird die Tür öffnen.",
    r5_q2_a3: "Die Tür öffnet das Kind.",
    r5_q2_a4: "Das Kind hat die Tür geöffnet.",
    r5_q3: "Zustandspassiv oder Vorgangspassiv? 'Das Auto ist repariert.'",
    r5_q3_a1: "Vorgangspassiv",
    r5_q3_a2: "Zustandspassiv",
    r5_q3_a3: "Präteritum",
    r5_q3_a4: "Imperativ",
  },
  en: {
    r1_info_title: "🔄 Active & Passive",
    r1_info_text: "ACTIVE: The subject does the action. 'The dog bites the man.' PASSIVE: The subject experiences the action. 'The man is bitten by the dog.' Both sentences mean the same thing!",
    r1_q: "Which sentence is ACTIVE?",
    r1_a1: "The teacher explains the task.",
    r1_a2: "The task is explained by the teacher.",
    r1_a3: "The task has been explained.",
    r1_a4: "It is being explained.",
    r2_info_title: "📝 Recognizing Passive",
    r2_info_text: "PASSIVE is marked by: werden/sein + past participle. Example: 'Das Haus wird gebaut.' 'Das Fenster wurde geputzt.' The past participle ends in -t or -en.",
    r2_q: "Which sentence is in PASSIVE voice?",
    r2_a1: "Maria writes a letter.",
    r2_a2: "The letter is written by Maria.",
    r2_a3: "Maria has written a letter.",
    r2_a4: "I often write letters.",
    r3_info_title: "🔀 Converting: Active → Passive",
    r3_info_text: "To change from active to passive: The object becomes the subject, the subject becomes a von/vom phrase. ACTIVE: 'Ich esse einen Apfel.' PASSIVE: 'Ein Apfel wird von mir gegessen.'",
    r3_q: "How does the passive version sound? Active: 'The artist paints the picture.'",
    r3_a1: "The picture is painted by the artist.",
    r3_a2: "The picture was painted by the artist.",
    r3_a3: "The artist will paint the picture.",
    r3_a4: "The picture paints the artist.",
    r4_info_title: "⭐ Action Passive & State Passive",
    r4_info_text: "ACTION PASSIVE (werden): emphasizes the process. 'Das Haus wird gebaut.' STATE PASSIVE (sein): emphasizes the result. 'Das Haus ist gebaut.' Remember: werden = action, sein = result!",
    r4_q: "What's correct? 'Das Fenster _____ geöffnet.'",
    r4_a1: "wird (action passive — ongoing)",
    r4_a2: "ist (state passive — result visible)",
    r4_a3: "bist",
    r4_a4: "seid",
    r5_info_title: "✅ Review: Active & Passive",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Active or passive? 'Die Suppe wird gekocht.'",
    r5_q1_a1: "Active",
    r5_q1_a2: "Passive",
    r5_q1_a3: "Imperative",
    r5_q1_a4: "Subjunctive",
    r5_q2: "Which sentence means the same as 'The child opens the door'?",
    r5_q2_a1: "The door is opened by the child.",
    r5_q2_a2: "The child will open the door.",
    r5_q2_a3: "The door opens the child.",
    r5_q2_a4: "The child has opened the door.",
    r5_q3: "State or action passive? 'Das Auto ist repariert.'",
    r5_q3_a1: "Action passive",
    r5_q3_a2: "State passive",
    r5_q3_a3: "Preterite",
    r5_q3_a4: "Imperative",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)" }}>
          <rect x="20" y="40" width="60" height="60" rx="8" fill="#ea580c" opacity="0.8" />
          <text x="50" y="75" textAnchor="middle" fontSize="40">
            🔄
          </text>
          <rect x="160" y="40" width="60" height="60" rx="8" fill="#0284c7" opacity="0.8" />
          <text x="190" y="75" textAnchor="middle" fontSize="40">
            ↔️
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            📝
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
        { question: "r5_q1", choices: ["r5_q1_a1", "r5_q1_a2", "r5_q1_a3", "r5_q1_a4"], answer: "r5_q1_a2" },
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

export default function ActivePassiveK6Explorer({ color = "#FF9500", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
