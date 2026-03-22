"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "∞ Infinitiv mit zu",
    r1_info_text: "Der INFINITIV mit zu ist ein Verb in der Grundform mit 'zu' davor. Beispiele: 'zu laufen', 'zu spielen', 'zu lesen'. Man benutzt es nach bestimmten Verben: 'Ich versuche zu schlafen.' 'Es ist wichtig zu lernen.'",
    r1_q: "Welcher Satz enthält einen Infinitiv mit zu?",
    r1_a1: "Ich versuche zu verstehen.",
    r1_a2: "Ich verstehe alles.",
    r1_a3: "Ich habe verstanden.",
    r1_a4: "Ich werde verstehen.",
    r2_info_title: "🎯 Wann benutzt man 'zu'?",
    r2_info_text: "Nach Verben wie: versuchen, anfangen, aufhören, vergessen, hoffen, fahren, gehen, bitten, erlauben, verbieten. Beispiel: 'Ich beginne zu laufen.' 'Er bittet mich zu kommen.' Nach Adjektiven: 'Es ist schön zu tanzen.'",
    r2_q: "Welcher Satz ist grammatisch RICHTIG?",
    r2_a1: "Ich versuche zu schreiben.",
    r2_a2: "Ich versuche schreiben.",
    r2_a3: "Ich versuche geschrieben.",
    r2_a4: "Ich versuche schreibend.",
    r3_info_title: "🔢 Wo steht zu?",
    r3_info_text: "Bei einfachen Verben: zu DIREKT vor dem Infinitiv. 'zu laufen', 'zu singen'. Bei Verben mit Präfix: zu ZWISCHEN Präfix und Stamm! 'einzuladen' (nicht 'zu einladen'). 'aufzumachen', 'einzusteigen'",
    r3_q: "Wo steht das zu? 'Ich versuche, ihn einzu_____.'",
    r3_a1: "einfach so: einzu + laden → 'zu einladen'",
    r3_a2: "zwischen Präfix und Stamm: 'einzuladen'",
    r3_a3: "am Ende: 'einladen zu'",
    r3_a4: "gar nicht: 'einladen'",
    r4_info_title: "⭐ Satzzeichen: Das Komma!",
    r4_info_text: "Infinitivsätze mit zu werden oft mit Komma abgetrennt, besonders wenn sie lang sind. 'Ich versuche, pünktlich zu Hause anzukommen.' Das Komma ist nicht immer Pflicht, aber es macht den Satz klarer!",
    r4_q: "Welcher Satz hat die richtige Kommasetzung?",
    r4_a1: "Ich hoffe zu gewinnen.",
    r4_a2: "Ich hoffe, zu gewinnen.",
    r4_a3: "Ich hoffe zu, gewinnen.",
    r4_a4: "Hoffe, zu gewinnen, ich.",
    r5_info_title: "✅ Wiederholung: Infinitiv mit zu",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Infinitiv mit zu: 'Ich beginne _____ spielen.'",
    r5_q1_a1: "zu",
    r5_q1_a2: "um zu",
    r5_q1_a3: "ohne zu",
    r5_q1_a4: "anstatt zu",
    r5_q2: "Welcher Satz ist FALSCH?",
    r5_q2_a1: "Er versucht zu lesen.",
    r5_q2_a2: "Sie bittet mich zu helfen.",
    r5_q2_a3: "Ich schreibe zu lesen.",
    r5_q2_a4: "Das ist schwer zu verstehen.",
    r5_q3: "Wo steht zu bei 'mitarbeiten'?",
    r5_q3_a1: "'mitzuarbeiten' (zwischen Präfix und Stamm)",
    r5_q3_a2: "'zu mitarbeiten'",
    r5_q3_a3: "'mitarbeiten zu'",
    r5_q3_a4: "'mitarbeitzu'",
  },
  en: {
    r1_info_title: "∞ Infinitive with zu",
    r1_info_text: "The INFINITIVE with zu is a verb in base form with 'zu' before it. Examples: 'zu laufen', 'zu spielen', 'zu lesen'. You use it after certain verbs: 'Ich versuche zu schlafen.' 'It is important zu lernen.'",
    r1_q: "Which sentence contains an infinitive with zu?",
    r1_a1: "Ich versuche zu verstehen.",
    r1_a2: "Ich verstehe alles.",
    r1_a3: "Ich habe verstanden.",
    r1_a4: "Ich werde verstehen.",
    r2_info_title: "🎯 When to use zu?",
    r2_info_text: "After verbs like: versuchen, anfangen, aufhören, vergessen, hoffen, fahren, gehen, bitten, erlauben, verbieten. Example: 'I begin zu laufen.' 'He asks me zu kommen.' After adjectives: 'It is beautiful zu tanzen.'",
    r2_q: "Which sentence is grammatically CORRECT?",
    r2_a1: "Ich versuche zu schreiben.",
    r2_a2: "Ich versuche schreiben.",
    r2_a3: "Ich versuche geschrieben.",
    r2_a4: "Ich versuche schreibend.",
    r3_info_title: "🔢 Where does zu go?",
    r3_info_text: "For simple verbs: zu DIRECTLY before the infinitive. 'zu laufen', 'zu singen'. For verbs with prefix: zu BETWEEN prefix and stem! 'einzuladen' (not 'zu einladen'). 'aufzumachen', 'einzusteigen'",
    r3_q: "Where does zu go? 'Ich versuche, ihn einzu_____.'",
    r3_a1: "Simply: einzu + laden → 'zu einladen'",
    r3_a2: "Between prefix and stem: 'einzuladen'",
    r3_a3: "At the end: 'einladen zu'",
    r3_a4: "Not at all: 'einladen'",
    r4_info_title: "⭐ Punctuation: The Comma!",
    r4_info_text: "Infinitive clauses with zu are often separated by comma, especially if they're long. 'Ich versuche, pünktlich zu Hause anzukommen.' The comma is not always required, but it makes the sentence clearer!",
    r4_q: "Which sentence has correct punctuation?",
    r4_a1: "Ich hoffe zu gewinnen.",
    r4_a2: "Ich hoffe, zu gewinnen.",
    r4_a3: "Ich hoffe zu, gewinnen.",
    r4_a4: "Hoffe, zu gewinnen, ich.",
    r5_info_title: "✅ Review: Infinitive with zu",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Infinitive with zu: 'Ich beginne _____ spielen.'",
    r5_q1_a1: "zu",
    r5_q1_a2: "um zu",
    r5_q1_a3: "ohne zu",
    r5_q1_a4: "anstatt zu",
    r5_q2: "Which sentence is WRONG?",
    r5_q2_a1: "Er versucht zu lesen.",
    r5_q2_a2: "Sie bittet mich zu helfen.",
    r5_q2_a3: "Ich schreibe zu lesen.",
    r5_q2_a4: "Das ist schwer zu verstehen.",
    r5_q3: "Where does zu go in 'mitarbeiten'?",
    r5_q3_a1: "'mitzuarbeiten' (between prefix and stem)",
    r5_q3_a2: "'zu mitarbeiten'",
    r5_q3_a3: "'mitarbeiten zu'",
    r5_q3_a4: "'mitarbeitzu'",
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
            ∞
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)" }}>
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🔢
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a1", "r3_a2", "r3_a3", "r3_a4"], answer: "r3_a2" }],
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
      questions: [{ question: "r4_q", choices: ["r4_a1", "r4_a2", "r4_a3", "r4_a4"], answer: "r4_a2" }],
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
        { question: "r5_q2", choices: ["r5_q2_a1", "r5_q2_a2", "r5_q2_a3", "r5_q2_a4"], answer: "r5_q2_a3" },
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

export default function InfinitivZuExplorer({ color = "#10B981", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
