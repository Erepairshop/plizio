"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Kausal- und Konditionalsatz",
    r1t: "Was ist ein Kausalsatz?", r1h: "Die Antwort auf 'Warum?' liegt im Kausalsatz!",
    r1i: "Ein Kausalsatz antwortet auf die Frage 'Warum?' Er beginnt mit 'weil', 'da', oder 'denn'. Beispiel: Sie ging nach Hause, weil sie müde war. Der Grund/die Ursache ist im Nebensatz.",
    r2t: "Konditionalsatz — Die Bedingung", r2h: "'Wenn..., dann...' — das ist ein Konditionalsatz!",
    r2i: "Ein Konditionalsatz drückt eine Bedingung aus. Er beginnt mit 'wenn' oder 'falls'. Beispiel: Wenn du fleißig lernst, dann bestehst du die Prüfung. Die Bedingung ist im Nebensatz, die Folge im Hauptsatz.",
    r3t: "Satzstellung und Komma", r3h: "Achte auf die Wortstellung!",
    r3i: "Im Nebensatz steht das Verb am Ende! Hauptsatz + Nebensatz: Ich gehe raus, weil ich Hunger habe. Nebensatz + Hauptsatz: Weil ich Hunger habe, gehe ich raus. (Komma trennt!)",
    r4t: "Praktische Übungen", r4h: "Erkenne die Satztypen in Texten!",
    r4i: "Lies Sätze und frage: 'Warum?' (Kausalsatz) oder 'Unter welcher Bedingung?' (Konditionalsatz). Das hilft dir, die Typen zu unterscheiden!",
    r5t: "Große Prüfung: Kausal & Konditional", r5h: "Teste dein Verständnis!",
    q1: "Was ist ein Kausalsatz?",
    a1a: "Ein Satz, der eine Bedingung ausdrückt",
    a1b: "Ein Satz, der einen Grund oder eine Ursache angibt",
    a1c: "Ein Satz, der eine Folge beschreibt",
    a1d: "Ein Satz mit zwei Hauptteilen",
    q2: "Welche Konjunktion leitet einen Konditionalsatz ein?",
    a2a: "weil",
    a2b: "wenn",
    a2c: "da",
    a2d: "denn",
    q3: "Erkenne den Satztyp: 'Wenn du viel trainierst, wirst du stark.'",
    a3a: "Kausalsatz",
    a3b: "Konditionalsatz",
    a3c: "Komparativsatz",
    a3d: "Konzessivsatz",
  },
  en: {
    title: "Causal and Conditional Clauses",
    r1t: "What is a Causal Clause?", r1h: "The answer to 'Why?' is in the causal clause!",
    r1i: "A causal clause answers the question 'Why?' It starts with 'because', 'since', or 'for'. Example: She went home because she was tired. The reason/cause is in the subordinate clause.",
    r2t: "Conditional Clause — The Condition", r2h: "'If..., then...' — that's a conditional clause!",
    r2i: "A conditional clause expresses a condition. It starts with 'if'. Example: If you study hard, then you pass the test. The condition is in the subordinate clause, the result in the main clause.",
    r3t: "Sentence Order and Comma", r3h: "Watch the word order!",
    r3i: "In the subordinate clause, the verb comes at the end! Main + subordinate: I go outside because I'm hungry. Subordinate + main: Because I'm hungry, I go outside. (Comma separates!)",
    r4t: "Practical Exercises", r4h: "Recognize clause types in texts!",
    r4i: "Read sentences and ask: 'Why?' (causal) or 'Under what condition?' (conditional). This helps you tell the types apart!",
    r5t: "Big Test: Causal & Conditional", r5h: "Test your understanding!",
    q1: "What is a causal clause?",
    a1a: "A clause that expresses a condition",
    a1b: "A clause that gives a reason or cause",
    a1c: "A clause that describes a result",
    a1d: "A clause with two main parts",
    q2: "Which conjunction introduces a conditional clause?",
    a2a: "because",
    a2b: "if",
    a2c: "since",
    a2d: "for",
    q3: "Recognize the clause type: 'If you train a lot, you'll be strong.'",
    a3a: "Causal",
    a3b: "Conditional",
    a3c: "Comparative",
    a3d: "Concessive",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1t",
      infoText: "r1i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="60">❓</text></svg>,
      questions: [{ question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2t",
      infoText: "r2i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚡</text></svg>,
      questions: [{ question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3t",
      infoText: "r3i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">📝</text></svg>,
      questions: [{ question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" }],
    },
    {
      type: "info",
      infoTitle: "r4t",
      infoText: "r4i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🎯</text></svg>,
    },
    {
      type: "mcq",
      infoTitle: "r5t",
      infoText: "r5h",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌟</text></svg>,
      questions: [
        { question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" },
        { question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" },
        { question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default memo(function K7KausalKonditionalExplorer({ color, lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
