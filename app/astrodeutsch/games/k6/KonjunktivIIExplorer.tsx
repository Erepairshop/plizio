"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🌀 Konjunktiv II — Die Welt der Träume",
    r1_info_text: "KONJUNKTIV II drückt Wünsche, Träume und irreale Situationen aus. 'Wenn ich reich WÄRE, würde ich reisen.' Basis: Präteritum + Umlaut (ä, ö, ü). 'ich wäre, du wärst, er/sie würde'",
    r1_q: "Was ist der Konjunktiv II von 'sein'?",
    r1_a1: "ich wäre",
    r1_a2: "ich bin",
    r1_a3: "ich werde sein",
    r1_a4: "ich war",
    r2_info_title: "💭 Wünsche ausdrücken",
    r2_info_text: "Mit Konjunktiv II kannst du höflich Wünsche sagen: 'Ich würde gerne Tee trinken' (statt 'Gib mir Tee!'). Oder träumen: 'Wenn ich fliegen könnte...' Das klingt viel höflicher und fantasievoller!",
    r2_q: "Welcher Satz ist HÖFLICH im Konjunktiv II?",
    r2_a1: "Könntest du mir helfen?",
    r2_a2: "Hilf mir!",
    r2_a3: "Du musst mir helfen!",
    r2_a4: "Hilfst du mir?",
    r3_info_title: "🎯 Irreale Bedingungssätze",
    r3_info_text: "Irreale Bedingung = Etwas kann nicht passieren, aber wir träumen davon. 'Wenn ich Zeit HÄTTE, würde ich spielen.' (Aber ich habe keine Zeit!) Form: Wenn-Satz im Konjunktiv II + Hauptsatz auch Konjunktiv II.",
    r3_q: "Vervollständige: 'Wenn ich mehr Geld _____, würde ich ein Haus kaufen.'",
    r3_a1: "hätte",
    r3_a2: "habe",
    r3_a3: "hatte",
    r3_a4: "werde haben",
    r4_info_title: "⭐ würde + Infinitiv (Modern)",
    r4_info_text: "'würde + Infinitiv' ist die moderne, häufige Form des Konjunktiv II. Statt 'Ich täte...' sagen wir 'Ich würde... tun'. Klingt natürlicher und ist für viele Verben einfacher!",
    r4_q: "Was ist die moderne Konjunktiv-II-Form von 'tanzen'?",
    r4_a1: "Ich würde tanzen.",
    r4_a2: "Ich tanze.",
    r4_a3: "Ich tanzte.",
    r4_a4: "Ich bin getanzt.",
    r5_info_title: "✅ Wiederholung: Konjunktiv II",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Konjunktiv II von 'haben': 'Du _____ recht.'",
    r5_q1_a1: "hättest",
    r5_q1_a2: "hast",
    r5_q1_a3: "hattest",
    r5_q1_a4: "wirst haben",
    r5_q2: "Wunsch oder Realität? 'Wenn es regnet, bleibe ich zu Hause.'",
    r5_q2_a1: "Realität (Indikativ)",
    r5_q2_a2: "Konjunktiv II",
    r5_q2_a3: "Imperativ",
    r5_q2_a4: "Passiv",
    r5_q3: "Höfliche Bitte im Konjunktiv II: 'Würdest du...'",
    r5_q3_a1: "Ja, das ist Konjunktiv II.",
    r5_q3_a2: "Nein, das ist Indikativ.",
    r5_q3_a3: "Das ist Imperativ.",
    r5_q3_a4: "Das ist Präsens.",
  },
  en: {
    r1_info_title: "🌀 Subjunctive II — The World of Dreams",
    r1_info_text: "SUBJUNCTIVE II expresses wishes, dreams, and unreal situations. 'If I were rich, I would travel.' Basis: Preterite + umlaut (ä, ö, ü). 'ich wäre, du wärst, er/sie würde'",
    r1_q: "What is the subjunctive II form of 'sein'?",
    r1_a1: "ich wäre",
    r1_a2: "ich bin",
    r1_a3: "ich werde sein",
    r1_a4: "ich war",
    r2_info_title: "💭 Expressing Wishes",
    r2_info_text: "With subjunctive II you can express wishes politely: 'Ich würde gerne Tee trinken' (instead of 'Give me tea!'). Or dream: 'If I could fly...' Much more polite and imaginative!",
    r2_q: "Which sentence is POLITE in subjunctive II?",
    r2_a1: "Könntest du mir helfen?",
    r2_a2: "Hilf mir!",
    r2_a3: "Du musst mir helfen!",
    r2_a4: "Hilfst du mir?",
    r3_info_title: "🎯 Unreal Conditionals",
    r3_info_text: "Unreal condition = Something can't happen, but we dream about it. 'If I had time, I would play.' (But I don't have time!) Form: If-clause in subjunctive II + main clause also subjunctive II.",
    r3_q: "Complete: 'If I had more money, I _____ buy a house.'",
    r3_a1: "würde",
    r3_a2: "would",
    r3_a3: "habe",
    r3_a4: "werde",
    r4_info_title: "⭐ würde + Infinitive (Modern)",
    r4_info_text: "'würde + Infinitive' is the modern, frequent form of subjunctive II. Instead of 'I did...' we say 'I would do...' Sounds more natural and is easier for many verbs!",
    r4_q: "What is the modern subjunctive II form of 'tanzen'?",
    r4_a1: "Ich würde tanzen.",
    r4_a2: "Ich tanze.",
    r4_a3: "Ich tanzte.",
    r4_a4: "Ich bin getanzt.",
    r5_info_title: "✅ Review: Subjunctive II",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Subjunctive II of 'haben': 'You _____ right.'",
    r5_q1_a1: "hättest",
    r5_q1_a2: "hast",
    r5_q1_a3: "hattest",
    r5_q1_a4: "wirst haben",
    r5_q2: "Wish or reality? 'If it rains, I stay home.'",
    r5_q2_a1: "Reality (Indicative)",
    r5_q2_a2: "Subjunctive II",
    r5_q2_a3: "Imperative",
    r5_q2_a4: "Passive",
    r5_q3: "Polite request in subjunctive II: 'Würdest du...'",
    r5_q3_a1: "Yes, that is subjunctive II.",
    r5_q3_a2: "No, that is indicative.",
    r5_q3_a3: "That is imperative.",
    r5_q3_a4: "That is present.",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🌀
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
            💭
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🎯
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)" }}>
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)" }}>
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

export default function KonjunktivIIExplorer({ color = "#EF4444", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
