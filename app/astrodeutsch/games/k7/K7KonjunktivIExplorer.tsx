"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Konjunktiv I — Indirekte Rede",
    r1t: "Die indirekte Rede", r1h: "Hörst du jemanden etwas berichten? Das ist indirekte Rede!",
    r1i: "Konjunktiv I wird verwendet, um auszudrücken, was jemand anderes gesagt hat, ohne es direkt zu zitieren. Direktzitat: 'Ich bin müde,' sagt Anna. Indirekte Rede: Anna sagt, dass sie müde sei.",
    r2t: "Konjunktiv I formen", r2h: "Sieh, wie die Verbformen sich ändern!",
    r2i: "Im Konjunktiv I nehmen wir den Präsensstamm und fügen Endungen hinzu. Besonderheit: Bei 'sein' wird es ganz besondere: ich sei, du seiest, er/sie sei.",
    r3t: "Aussagen umformen", r3h: "Wandle Direktzitate in indirekte Rede um!",
    r3i: "Wenn du indirekte Rede schreibst, musst du Verben in Konjunktiv I setzen. Das zeigt: Das sind die Worte einer anderen Person, nicht meine!",
    r4t: "Mündliche Übung", r4h: "Sprich die Konjunktiv I Formen laut!",
    r4i: "Das laute Sprechen hilft deinem Gehirn, die Formen zu merken. Probiere mehrmals!",
    r5t: "Große Prüfung: Konjunktiv I", r5h: "Alles zusammen — zeige dein Wissen!",
    q1: "Was ist indirekte Rede?",
    a1a: "Eine Aussage einer anderen Person in eigenen Worten weitergeben",
    a1b: "Ein direktes Zitat mit Anführungszeichen",
    a1c: "Eine Frage, die jemand stellt",
    a1d: "Ein Befehl oder eine Anweisung",
    q2: "Welche Form ist Konjunktiv I von 'sagen'?",
    a2a: "ich sage",
    a2b: "ich sagte",
    a2c: "ich sage",
    a2d: "ich sagte",
    q3: "Wandle um: 'Ich bin glücklich,' sagt Markus. (Indirekte Rede)",
    a3a: "Markus sagt, dass er glücklich ist",
    a3b: "Markus sagt, dass er glücklich sei",
    a3c: "Markus ist glücklich",
    a3d: "Markus sagte, dass er glücklich sei",
  },
  en: {
    title: "Subjunctive I — Indirect Speech",
    r1t: "Indirect Speech", r1h: "Do you hear someone reporting something? That's indirect speech!",
    r1i: "Subjunctive I (Konjunktiv I) expresses what someone else has said, without quoting directly. Direct quote: 'I am tired,' says Anna. Indirect: Anna says that she be tired.",
    r2t: "Subjunctive I Forms", r2h: "See how verb forms change!",
    r2i: "In Subjunctive I, we take the present stem and add endings. Special: With 'sein' it's unique: ich sei, du seiest, er/sie sei.",
    r3t: "Transform Statements", r3h: "Turn direct quotes into indirect speech!",
    r3i: "When writing indirect speech, you must set verbs in Subjunctive I. This shows: these are someone else's words, not mine!",
    r4t: "Spoken Practice", r4h: "Say the Subjunctive I forms aloud!",
    r4i: "Speaking aloud helps your brain remember the forms. Try multiple times!",
    r5t: "Big Test: Subjunctive I", r5h: "Everything together — show your knowledge!",
    q1: "What is indirect speech?",
    a1a: "Repeating someone's words in your own words",
    a1b: "A direct quote with quotation marks",
    a1c: "A question someone asks",
    a1d: "A command or instruction",
    q2: "Which form is Subjunctive I of 'sagen'?",
    a2a: "ich sage",
    a2b: "ich sagte",
    a2c: "ich sage",
    a2d: "ich sagte",
    q3: "Transform: 'I am happy,' says Markus. (Indirect speech)",
    a3a: "Markus says that he is happy",
    a3b: "Markus says that he be happy",
    a3c: "Markus is happy",
    a3d: "Markus said that he were happy",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1t",
      infoText: "r1i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="60">💭</text></svg>,
      questions: [{ question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1a" }],
    },
    {
      type: "mcq",
      infoTitle: "r2t",
      infoText: "r2i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">📝</text></svg>,
      questions: [{ question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2c" }],
    },
    {
      type: "mcq",
      infoTitle: "r3t",
      infoText: "r3i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔄</text></svg>,
      questions: [{ question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" }],
    },
    {
      type: "info",
      infoTitle: "r4t",
      infoText: "r4i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🎤</text></svg>,
    },
    {
      type: "mcq",
      infoTitle: "r5t",
      infoText: "r5h",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌟</text></svg>,
      questions: [
        { question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1a" },
        { question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2c" },
        { question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" },
      ],
    },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default memo(function K7KonjunktivIExplorer({ color, lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
