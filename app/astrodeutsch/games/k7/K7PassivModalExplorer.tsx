"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Passiv + Modalverb",
    r1t: "Passivsätze mit Modalverben", r1h: "Verben wie 'können', 'müssen', 'dürfen' im Passiv!",
    r1i: "Du kennst Modalverben: ich kann spielen, ich muss arbeiten. Diese Modalverben können auch mit Passiv verwendet werden! Das Buch kann gelesen werden. Der Brief muss geschrieben werden.",
    r2t: "Das Modalverb im Passiv", r2h: "Sieh die Struktur: Modalverb + Partizip II!",
    r2i: "Struktur: Modalverb + Partizip II. Beispiele: Der Brief muss geschrieben werden. Das Fenster kann geöffnet werden. Die Aufgabe darf nicht vergessen werden.",
    r3t: "Beispiele und Übersetzung", r3h: "Verstehe die Bedeutung!",
    r3i: "Das Auto kann repariert werden = It's possible to repair the car. Der Raum muss gereinigt werden = The room has to be cleaned. Diese Konstruktion zeigt: Es ist möglich / nötig / erlaubt, dass etwas passiert.",
    r4t: "In der Praxis", r4h: "Wo findest du diese Form?",
    r4i: "Du findest diese Form in Anleitungen, Regeln und Beschreibungen. Im Restaurant: Diese Speise kann mitgenommen werden. Im Krankenhaus: Dieser Trank darf vom Patienten nicht mitgenommen werden.",
    r5t: "Große Prüfung: Passiv + Modal", r5h: "Alles zusammen testen!",
    q1: "Was ist 'Das Buch kann gelesen werden'?",
    a1a: "Präsens Aktiv",
    a1b: "Präsens Passiv mit Modalverb",
    a1c: "Imperativ",
    a1d: "Konjunktiv",
    q2: "Welches Modalverb passt: 'Die Aufgabe ___ gemacht werden.'",
    a2a: "kann",
    a2b: "will",
    a2c: "muss",
    a2d: "hat",
    q3: "Übersetze: The room must be cleaned. (Auf Deutsch, Passiv + Modalverb)",
    a3a: "Das Zimmer muss gereinigt werden",
    a3b: "Das Zimmer wird gereinigt",
    a3c: "Das Zimmer reinigte",
    a3d: "Das Zimmer kann reinigen",
  },
  en: {
    title: "Passive Voice + Modal Verbs",
    r1t: "Passive Sentences with Modals", r1h: "Verbs like 'can', 'must', 'may' in passive!",
    r1i: "You know modal verbs: I can play, I must work. These modal verbs can be used with passive too! The book can be read. The letter must be written.",
    r2t: "The Modal in Passive", r2h: "See the structure: Modal + Participle II!",
    r2i: "Structure: Modal verb + Participle II. Examples: The letter must be written. The window can be opened. The task must not be forgotten.",
    r3t: "Examples and Translation", r3h: "Understand the meaning!",
    r3i: "Das Auto kann repariert werden = The car can be repaired. Der Raum muss gereinigt werden = The room must be cleaned. This construction shows: It's possible/necessary/allowed that something happens.",
    r4t: "In Practice", r4h: "Where do you find this form?",
    r4i: "You find this form in instructions, rules, and descriptions. In a restaurant: This meal can be taken away. In a hospital: This drink may not be taken by the patient.",
    r5t: "Big Test: Passive + Modal", r5h: "Test everything together!",
    q1: "What is 'Das Buch kann gelesen werden'?",
    a1a: "Present Active",
    a1b: "Present Passive with Modal",
    a1c: "Imperative",
    a1d: "Subjunctive",
    q2: "Which modal fits: 'The task ___ done.'",
    a2a: "can",
    a2b: "will",
    a2c: "must",
    a2d: "has",
    q3: "Translate: The room must be cleaned. (In German, Passive + Modal)",
    a3a: "Das Zimmer muss gereinigt werden",
    a3b: "Das Zimmer wird gereinigt",
    a3c: "Das Zimmer reinigte",
    a3d: "Das Zimmer kann reinigen",
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
      questions: [{ question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2t",
      infoText: "r2i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">📋</text></svg>,
      questions: [{ question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2c" }],
    },
    {
      type: "mcq",
      infoTitle: "r3t",
      infoText: "r3i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔍</text></svg>,
      questions: [{ question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3a" }],
    },
    {
      type: "info",
      infoTitle: "r4t",
      infoText: "r4i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🏥</text></svg>,
    },
    {
      type: "mcq",
      infoTitle: "r5t",
      infoText: "r5h",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌟</text></svg>,
      questions: [
        { question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" },
        { question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2c" },
        { question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3a" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default memo(function K7PassivModalExplorer({ color, lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
