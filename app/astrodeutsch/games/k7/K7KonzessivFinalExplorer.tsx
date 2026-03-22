"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Konzessiv- und Finalsatz",
    r1t: "Konzessivsatz — Die Einräumung", r1h: "Etwas erlauben, obwohl... das ist ein Konzessivsatz!",
    r1i: "Ein Konzessivsatz räumt etwas ein, aber widerspricht der Erwartung. Beginnt mit 'obwohl', 'trotzdem' oder 'trtz'. Beispiel: Obwohl es regnete, gingen wir spazieren. Die erwartete Folge (wir bleiben drinnen) tritt nicht ein!",
    r2t: "Finalsatz — Die Absicht", r2h: "'Um zu...', 'damit...' — das sind Finalsätze!",
    r2i: "Ein Finalsatz drückt eine Absicht oder einen Zweck aus. Beginnt mit 'um...zu' oder 'damit'. Beispiel: Ich lerne, um eine gute Note zu bekommen. Der Zweck/die Absicht ist im Nebensatz.",
    r3t: "Der Unterschied", r3h: "Konzessiv vs. Final — merkst du den Unterschied?",
    r3i: "Konzessiv: trotz eines Hindernisses. 'Obwohl es kalt war, spielten wir Fußball.' Final: mit einer Absicht. 'Wir spielten, um uns zu wärmen.' Konzessiv = Gegensatz, Final = Absicht!",
    r4t: "In der Praxis", r4h: "Erkenne diese Sätze in echten Texten!",
    r4i: "Konzessivsätze findest du oft in Geschichten (Überraschungen). Finalsätze findest du in Anleitungen und Zweckbeschreibungen. Frag dich: 'Obwohl...?' (konzessiv) oder 'Mit welcher Absicht?' (final)?",
    r5t: "Große Prüfung: Konzessiv & Final", r5h: "Teste beide Satztypen!",
    q1: "Was ist ein Konzessivsatz?",
    a1a: "Ein Satz, der eine Absicht ausdrückt",
    a1b: "Ein Satz, der trotz eines Hindernisses berichtet",
    a1c: "Ein Satz, der einen Grund gibt",
    a1d: "Ein Satz, der eine Bedingung stellt",
    q2: "Welche Konjunktion leitet einen Finalsatz ein?",
    a2a: "obwohl",
    a2b: "um...zu / damit",
    a2c: "weil",
    a2d: "wenn",
    q3: "Erkenne: 'Ich atme tief, damit ich mich beruhige.'",
    a3a: "Konzessivsatz",
    a3b: "Kausalsatz",
    a3c: "Finalsatz",
    a3d: "Konditionalsatz",
  },
  en: {
    title: "Concessive and Final Clauses",
    r1t: "Concessive Clause — The Concession", r1h: "Allowing something despite... that's a concessive clause!",
    r1i: "A concessive clause concedes something, but contradicts expectation. Starts with 'although', 'despite', 'even though'. Example: Although it was raining, we went for a walk. The expected result (we stay inside) doesn't happen!",
    r2t: "Final Clause — The Purpose", r2h: "'In order to...', 'so that...' — those are final clauses!",
    r2i: "A final clause expresses a purpose or intention. Starts with 'in order to' or 'so that'. Example: I study in order to get a good grade. The purpose/intention is in the subordinate clause.",
    r3t: "The Difference", r3h: "Concessive vs. Final — can you tell the difference?",
    r3i: "Concessive: despite an obstacle. 'Although it was cold, we played football.' Final: with an intention. 'We played in order to warm up.' Concessive = contrast, Final = purpose!",
    r4t: "In Practice", r4h: "Recognize these clauses in real texts!",
    r4i: "Concessive clauses are common in stories (surprises). Final clauses appear in instructions and purpose descriptions. Ask: 'Despite...?' (concessive) or 'With what intention?' (final)?",
    r5t: "Big Test: Concessive & Final", r5h: "Test both clause types!",
    q1: "What is a concessive clause?",
    a1a: "A clause that expresses a purpose",
    a1b: "A clause that reports despite an obstacle",
    a1c: "A clause that gives a reason",
    a1d: "A clause that sets a condition",
    q2: "Which conjunction introduces a final clause?",
    a2a: "although",
    a2b: "in order to / so that",
    a2c: "because",
    a2d: "if",
    q3: "Recognize: 'I breathe deeply so that I calm down.'",
    a3a: "Concessive",
    a3b: "Causal",
    a3c: "Final",
    a3d: "Conditional",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1t",
      infoText: "r1i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="60">🎪</text></svg>,
      questions: [{ question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2t",
      infoText: "r2i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🎯</text></svg>,
      questions: [{ question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3t",
      infoText: "r3i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚖️</text></svg>,
      questions: [{ question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3c" }],
    },
    {
      type: "info",
      infoTitle: "r4t",
      infoText: "r4i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">📖</text></svg>,
    },
    {
      type: "mcq",
      infoTitle: "r5t",
      infoText: "r5h",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌟</text></svg>,
      questions: [
        { question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" },
        { question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" },
        { question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3c" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default memo(function K7KonzessivFinalExplorer({ color, lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
