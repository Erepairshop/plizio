"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "⚙️ Passiv + Modalverb",
    r1_info_text: "Kombination aus Passiv und Modalverben. Struktur: Modalverb + werden + Partizip II. 'Das Auto kann repariert werden.' = Das Auto kann repariert werden (es ist möglich). 'Das Fenster muss geputzt werden.' = Das Fenster muss geputzt werden (es ist nötig). Die Modalverben sind: können, müssen, sollen, wollen, dürfen, mögen.",
    r1_q: "Welcher Satz ist Passiv mit Modalverb?",
    r1_a1: "Das Haus kann gebaut werden.",
    r1_a2: "Das Haus kann bauen.",
    r1_a3: "Das Haus bauen können.",
    r1_a4: "Das Haus wird bauen.",
    r2_info_title: "📋 Modalverben im Passiv",
    r2_info_text: "können: Das Auto kann repariert werden. (Möglichkeit) müssen: Das Auto muss repariert werden. (Notwendigkeit) sollen: Das Auto soll repariert werden. (Auftrag) wollen: Das Auto will nicht repariert werden. (Wunsch) dürfen: Das Auto darf repariert werden. (Erlaubnis) mögen: Das Auto mag nicht repariert werden. (Einstellung)",
    r2_q: "Was bedeutet 'Das Problem muss gelöst werden'?",
    r2_a1: "Das Problem ist notwendig zu lösen.",
    r2_a2: "Das Problem kann gelöst werden.",
    r2_a3: "Das Problem soll gelöst werden.",
    r2_a4: "Das Problem will gelöst werden.",
    r3_info_title: "🔀 Umformung mit Modalverb",
    r3_info_text: "Aktiv mit Modalverb: 'Der Arzt muss den Patienten untersuchen.' Passiv mit Modalverb: 'Der Patient muss untersucht werden.' Das Objekt wird zum Subjekt, das Modalverb bleibt, werden + Partizip II folgt.",
    r3_q: "Passiv zu: 'Die Firma sollte das Projekt finanzieren.'",
    r3_a1: "Das Projekt sollte finanziert werden.",
    r3_a2: "Das Projekt wird finanziert.",
    r3_a3: "Das Projekt konnte finanziert werden.",
    r3_a4: "Das Projekt finanzieren sollen.",
    r4_info_title: "⭐ Verschiedene Zeitformen",
    r4_info_text: "Präsens: kann gemacht werden. Präteritum: konnte gemacht werden. Perfekt: hat gemacht werden können / konnte gemacht werden. Plusquamperfekt: hatte gemacht werden können. Die Zeitformen zeigen unterschiedliche Momente.",
    r4_q: "Präteritum Passiv: Das Bild durfte ___ werden.",
    r4_a1: "gemalt",
    r4_a2: "malen",
    r4_a3: "gemaltes",
    r4_a4: "malend",
    r5_info_title: "✅ Wiederholung: Passiv + Modal",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Welcher Satz ist korrekt?",
    r5_q1_a1: "Das Fenster kann geöffnet werden.",
    r5_q1_a2: "Das Fenster kann öffnen werden.",
    r5_q1_a3: "Das Fenster mögen geöffnet werden.",
    r5_q1_a4: "Das Fenster wird geöffnet können.",
    r5_q2: "Passiv-Modalverb zu: 'Der Lehrer soll die Aufgabe erklären.'",
    r5_q2_a1: "Die Aufgabe soll erklärt werden.",
    r5_q2_a2: "Die Aufgabe wird erklärt sollen.",
    r5_q2_a3: "Die Aufgabe soll erklären.",
    r5_q2_a4: "Der Lehrer wird die Aufgabe erklären.",
    r5_q3: "Bedeutung: 'Der Brief muss unterschrieben werden.'",
    r5_q3_a1: "Es ist notwendig, den Brief zu unterschreiben.",
    r5_q3_a2: "Der Brief kann unterschrieben werden.",
    r5_q3_a3: "Der Brief will unterschrieben werden.",
    r5_q3_a4: "Der Brief darf unterschrieben werden.",
  },
  en: {
    r1_info_title: "⚙️ Passive + Modal Verbs",
    r1_info_text: "Combination of passive voice and modal verbs. Structure: Modal verb + werden + past participle. 'Das Auto kann repariert werden.' = The car can be repaired. 'Das Fenster muss geputzt werden.' = The window must be cleaned. The modal verbs are: können, müssen, sollen, wollen, dürfen, mögen.",
    r1_q: "Which sentence has passive with modal verb?",
    r1_a1: "The house can be built.",
    r1_a2: "The house can build.",
    r1_a3: "The house build can.",
    r1_a4: "The house will build.",
    r2_info_title: "📋 Modal Verbs in Passive",
    r2_info_text: "können: The car can be repaired. (possibility) müssen: The car must be repaired. (necessity) sollen: The car should be repaired. (order) wollen: The car doesn't want to be repaired. (desire) dürfen: The car may be repaired. (permission) mögen: The car doesn't like to be repaired. (attitude)",
    r2_q: "What does 'The problem must be solved' mean?",
    r2_a1: "It is necessary to solve the problem.",
    r2_a2: "The problem can be solved.",
    r2_a3: "The problem should be solved.",
    r2_a4: "The problem wants to be solved.",
    r3_info_title: "🔀 Converting with Modal Verb",
    r3_info_text: "Active with modal: 'The doctor must examine the patient.' Passive with modal: 'The patient must be examined.' The object becomes the subject, the modal verb remains, werden + past participle follows.",
    r3_q: "Passive for: 'The company should finance the project.'",
    r3_a1: "The project should be financed.",
    r3_a2: "The project is financed.",
    r3_a3: "The project could be financed.",
    r3_a4: "The project finance should.",
    r4_info_title: "⭐ Different Tenses",
    r4_info_text: "Present: can be done. Preterite: could be done. Perfect: could have been done. Pluperfect: could have been done (earlier). The tenses show different moments.",
    r4_q: "Preterite passive: The picture was allowed to ___ .",
    r4_a1: "be painted",
    r4_a2: "paint",
    r4_a3: "painted",
    r4_a4: "painting",
    r5_info_title: "✅ Review: Passive + Modal",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Which sentence is correct?",
    r5_q1_a1: "The window can be opened.",
    r5_q1_a2: "The window can open.",
    r5_q1_a3: "The window like be opened.",
    r5_q1_a4: "The window will open can.",
    r5_q2: "Passive-modal for: 'The teacher should explain the task.'",
    r5_q2_a1: "The task should be explained.",
    r5_q2_a2: "The task will be explained should.",
    r5_q2_a3: "The task should explain.",
    r5_q2_a4: "The teacher will explain the task.",
    r5_q3: "Meaning: 'The letter must be signed.'",
    r5_q3_a1: "It is necessary to sign the letter.",
    r5_q3_a2: "The letter can be signed.",
    r5_q3_a3: "The letter wants to be signed.",
    r5_q3_a4: "The letter may be signed.",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dbeafe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ⚙️
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
            📋
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

export default function PassivModalExplorer({ color = "#10B981", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
