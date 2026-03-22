"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🌟 Große Prüfung: K7 Übersicht",
    r1_info_text: "Willkommen zur Großen Prüfung! Hier werden alle Themen der 7. Klasse abgefragt. Du wirst Fragen zu Konjunktiv I, Passiv, Stilmitteln, Nebensätzen und Infinitivkonstruktionen beantworten. Jede Frage prüft dein Verständnis dieser wichtigen Grammatikthemen. Viel Erfolg!",
    r1_q: "Welcher Satz steht in indirekter Rede mit Konjunktiv I?",
    r1_a1: "Er sagte, er sei glücklich.",
    r1_a2: "Er sagte, er ist glücklich.",
    r1_a3: "Er sagte, er war glücklich.",
    r1_a4: "Er sagte, er wird glücklich sein.",
    r2_info_title: "🔄 Passiv & Modalverben",
    r2_info_text: "Du kennst jetzt Werden-Passiv, Sein-Passiv und Passiv mit Modalverben. Erinnere dich: werden + Partizip II = Aktion, sein + Partizip II = Zustand. Modalverben im Passiv: können, müssen, sollen, wollen, dürfen.",
    r2_q: "Was ist korrekt? 'Das Problem muss gelöst ___.'",
    r2_a1: "werden",
    r2_a2: "sein",
    r2_a3: "haben",
    r2_a4: "machen",
    r3_info_title: "🎭 Stilmittel & Nebensätze",
    r3_info_text: "Stilmittel (Metapher, Vergleich, Personifikation, Alliteration, Hyperbel) machen Texte ausdrucksstärker. Nebensätze (Kausal-, Konditional-, Konzessiv-, Final-, Temporal-) erweitern die Satzstruktur. Beides ist wichtig für gutes Schreiben und Verstehen.",
    r3_q: "Welches Stilmittel liegt vor? 'Das Herz brach.'",
    r3_a1: "Metapher",
    r3_a2: "Vergleich",
    r3_a3: "Alliteration",
    r3_a4: "Hyperbel",
    r4_info_title: "🌿 Infinitivkonstruktionen",
    r4_info_text: "Infinitivkonstruktionen mit um...zu, ohne...zu und anstatt...zu ersetzen Nebensätze und machen Texte kürzer. Wichtig: Bei um...zu müssen die Subjekte gleich sein. Diese Konstruktionen sind stilistisch besser als lange Nebensätze.",
    r4_q: "Was ist korrekt? 'Ich gehe zur Schule, ____ zu lernen.'",
    r4_a1: "um",
    r4_a2: "ohne",
    r4_a3: "damit",
    r4_a4: "obwohl",
    r5_info_title: "✅ Finale Wiederholung: K7",
    r5_info_text: "Teste all dein Wissen der 7. Klasse!",
    r5_q1: "Zeitenfolge nach 'nachdem': 'Nachdem er ___ hatte, ____ er.'",
    r5_q1_a1: "gegessen / ging spazieren",
    r5_q1_a2: "isst / ging spazieren",
    r5_q1_a3: "essen / ging spazieren",
    r5_q1_a4: "gegessen / geht spazieren",
    r5_q2: "Korrekt: 'Während ich ___ las, telefonierte __.'",
    r5_q2_a1: "ein Buch / er",
    r5_q2_a2: "bücher / ihm",
    r5_q2_a3: "das Buch / mich",
    r5_q2_a4: "die Zeitung / sie",
    r5_q3: "Finalsatz oder Konzessivsatz? 'Ich trainiere, obwohl ich müde bin.'",
    r5_q3_a1: "Konzessivsatz",
    r5_q3_a2: "Finalsatz",
    r5_q3_a3: "Kausalsatz",
    r5_q3_a4: "Temporalsatz",
  },
  en: {
    r1_info_title: "🌟 Big Test: Grade 7 Overview",
    r1_info_text: "Welcome to the Big Test! All Grade 7 topics will be tested here. You will answer questions about Subjunctive I, passive voice, figures of speech, subordinate clauses, and infinitive constructions. Each question tests your understanding of these important grammar topics. Good luck!",
    r1_q: "Which sentence is in indirect speech with Subjunctive I?",
    r1_a1: "He said he be happy.",
    r1_a2: "He said he is happy.",
    r1_a3: "He said he was happy.",
    r1_a4: "He said he will be happy.",
    r2_info_title: "🔄 Passive & Modal Verbs",
    r2_info_text: "You now know werden-passive, sein-passive, and passive with modal verbs. Remember: werden + past participle = action, sein + past participle = state. Modal verbs in passive: können, müssen, sollen, wollen, dürfen.",
    r2_q: "What's correct? 'The problem must be solved ___.'",
    r2_a1: "be (verb form)",
    r2_a2: "is",
    r2_a3: "have",
    r2_a4: "make",
    r3_info_title: "🎭 Figures of Speech & Clauses",
    r3_info_text: "Figures of speech (metaphor, simile, personification, alliteration, hyperbole) make texts more expressive. Subordinate clauses (causal, conditional, concessive, final, temporal) expand sentence structure. Both are important for good writing and understanding.",
    r3_q: "Which figure of speech is present? 'The heart broke.'",
    r3_a1: "Metaphor",
    r3_a2: "Simile",
    r3_a3: "Alliteration",
    r3_a4: "Hyperbole",
    r4_info_title: "🌿 Infinitive Constructions",
    r4_info_text: "Infinitive constructions with um...zu, ohne...zu, and anstatt...zu replace subordinate clauses and make texts shorter. Important: With um...zu the subjects must be the same. These constructions are stylistically better than long clauses.",
    r4_q: "What's correct? 'I go to school ____ to learn.'",
    r4_a1: "in order",
    r4_a2: "without",
    r4_a3: "so that",
    r4_a4: "although",
    r5_info_title: "✅ Final Review: Grade 7",
    r5_info_text: "Test all your Grade 7 knowledge!",
    r5_q1: "Tense sequence after 'after': 'After he ___ had, he ___.'",
    r5_q1_a1: "eaten / went for walk",
    r5_q1_a2: "eats / went for walk",
    r5_q1_a3: "eat / went for walk",
    r5_q1_a4: "eaten / goes for walk",
    r5_q2: "Correct: 'While I ___ read, he ___.'",
    r5_q2_a1: "a book / called",
    r5_q2_a2: "books / called him",
    r5_q2_a3: "the book / me",
    r5_q2_a4: "the newspaper / her",
    r5_q3: "Final or concessive clause? 'I train although I'm tired.'",
    r5_q3_a1: "Concessive clause",
    r5_q3_a2: "Final clause",
    r5_q3_a3: "Causal clause",
    r5_q3_a4: "Temporal clause",
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
            🌟
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
            🔄
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
            🎭
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
            🌿
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

export default function ReviewK7Explorer({ color = "#4ECDC4", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
