"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Werden-Passiv",
    r1t: "Was ist Passiv?", r1h: "Im Passiv ist die Handlung wichtig, nicht die Person!",
    r1i: "Im Aktivsatz ist der Täter wichtig: Der Hund beißt den Mann. Im Passivsatz ist die Handlung wichtig: Der Mann wird gebissen. Mit 'werden' + Partizip II bilden wir das Passiv.",
    r2t: "Werden-Passiv Formen", r2h: "Sieh alle Zeitformen des Passivs!",
    r2i: "Präsens Passiv: wird gespielt. Präteritum Passiv: wurde gespielt. Perfekt Passiv: ist gespielt worden. Das Partizip II bleibt gleich!",
    r3t: "Aktiv in Passiv umwandeln", r3h: "Wandle Aktivsätze in Passivsätze um!",
    r3i: "Das Objekt aus dem Aktivsatz wird zum Subjekt im Passivsatz. Der Täter kann mit 'von' genannt werden. Der Hund beißt den Mann → Der Mann wird vom Hund gebissen.",
    r4t: "Sinn und Zweck", r4h: "Wann benutzen wir das Passiv?",
    r4i: "Das Passiv verwendest du, wenn die Handlung wichtiger ist als der Täter, oder wenn du den Täter nicht kennst: Das Fenster wurde zerbrochen. (Wir wissen nicht, wer es zerbrochen hat.)",
    r5t: "Große Prüfung: Werden-Passiv", r5h: "Teste dein Verständnis!",
    q1: "Was ist das Passiv?",
    a1a: "Ein Satz, in dem die Handlung im Fokus ist",
    a1b: "Ein Satz, in dem der Täter im Fokus ist",
    a1c: "Ein Satz in der Vergangenheit",
    a1d: "Ein Satz, der eine Anleitung gibt",
    q2: "Wie heißt das Präsens-Passiv von 'spielen'?",
    a2a: "spielt",
    a2b: "wird gespielt",
    a2c: "spielte",
    a2d: "ist gespielt",
    q3: "Wandle um: Der Lehrer erklärt die Aufgabe. (Passiv)",
    a3a: "Der Lehrer wird erklärt",
    a3b: "Die Aufgabe wird vom Lehrer erklärt",
    a3c: "Die Aufgabe erklärt der Lehrer",
    a3d: "Der Lehrer erklärte",
  },
  en: {
    title: "Passive Voice with werden",
    r1t: "What is Passive?", r1h: "In passive voice, the action is important, not the person!",
    r1i: "In active voice, the doer is important: The dog bites the man. In passive voice, the action is important: The man is bitten. We form passive with 'werden' + participle II.",
    r2t: "Werden-Passive Forms", r2h: "See all tenses of the passive!",
    r2i: "Present passive: wird gespielt. Past passive: wurde gespielt. Perfect passive: ist gespielt worden. The participle II stays the same!",
    r3t: "Transform Active to Passive", r3h: "Turn active sentences into passive!",
    r3i: "The object from active becomes the subject in passive. The doer can be named with 'von'. The dog bites the man → The man is bitten by the dog.",
    r4t: "Purpose and Use", r4h: "When do we use passive?",
    r4i: "Use passive when the action is more important than the doer, or when you don't know the doer: The window was broken. (We don't know who broke it.)",
    r5t: "Big Test: Werden-Passive", r5h: "Test your understanding!",
    q1: "What is passive voice?",
    a1a: "A sentence where the action is in focus",
    a1b: "A sentence where the doer is in focus",
    a1c: "A sentence in the past tense",
    a1d: "A sentence that gives instructions",
    q2: "What is the present passive of 'spielen'?",
    a2a: "spielt",
    a2b: "wird gespielt",
    a2c: "spielte",
    a2d: "ist gespielt",
    q3: "Transform: The teacher explains the task. (Passive)",
    a3a: "The teacher is explained",
    a3b: "The task is explained by the teacher",
    a3c: "The task explains the teacher",
    a3d: "The teacher explained",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1t",
      infoText: "r1i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="60">⚙️</text></svg>,
      questions: [{ question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1a" }],
    },
    {
      type: "mcq",
      infoTitle: "r2t",
      infoText: "r2i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">📚</text></svg>,
      questions: [{ question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3t",
      infoText: "r3i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔀</text></svg>,
      questions: [{ question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" }],
    },
    {
      type: "info",
      infoTitle: "r4t",
      infoText: "r4i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">💡</text></svg>,
    },
    {
      type: "mcq",
      infoTitle: "r5t",
      infoText: "r5h",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌟</text></svg>,
      questions: [
        { question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1a" },
        { question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" },
        { question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default memo(function K7WerdenPassivExplorer({ color, lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
