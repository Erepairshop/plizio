"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Stilmittel — Sprachliche Kunstgriffe",
    r1t: "Was sind Stilmittel?", r1h: "Kunstgriffe, um Texte lebendiger zu machen!",
    r1i: "Stilmittel sind sprachliche Techniken, die Texte interessanter, ausdrucksvoller oder schöner machen. Metapher, Vergleich, Alliteration, Personifikation, Hyperbel — das sind Beispiele.",
    r2t: "Metapher vs. Vergleich", r2h: "Der erste wichtige Unterschied!",
    r2i: "Metapher: direkte Übertragung. 'Das Leben ist ein Kampf.' Vergleich: mit 'wie' oder 'als'. 'Das Leben ist wie ein Kampf.' Der Vergleich ist milder, die Metapher direkter.",
    r3t: "Mehr Stilmittel", r3h: "Lerne weitere wichtige Mittel!",
    r3i: "Alliteration: Gleiche Anfangsbuchstaben. 'Vater Verlust verursacht Verdruss.' Personifikation: Menschliche Eigenschaften bei Objekten. 'Der Wind flüsterte leise.' Hyperbel: Übertreibung. 'Ich habe dir tausendmal gesagt!'",
    r4t: "Warum Stilmittel?", r4h: "Wozu dienen diese Kunstgriffe?",
    r4i: "Stilmittel machen Texte ausdrucksstärker, emotionaler und einprägsamer. Sie helfen dir, deine Gefühle auszudrücken und den Leser zu fesseln. Nutze sie in Aufsätzen und Gedichten!",
    r5t: "Große Prüfung: Stilmittel", r5h: "Erkenne alle Stilmittel!",
    q1: "Was ist eine Metapher?",
    a1a: "Ein Vergleich mit 'wie'",
    a1b: "Eine direkte Bedeutungsübertragung",
    a1c: "Eine Wiederholung von Worten",
    a1d: "Ein Satz mit zwei Aussagen",
    q2: "Welches Stilmittel ist 'Der Wald raunt mir Geheimnisse zu'?",
    a2a: "Metapher",
    a2b: "Personifikation",
    a2c: "Hyperbel",
    a2d: "Alliteration",
    q3: "Erkenne: 'Das Feuer flackerte wie ein Tänzer.'",
    a3a: "Metapher",
    a3b: "Vergleich",
    a3c: "Personifikation",
    a3d: "Alliteration",
  },
  en: {
    title: "Figures of Speech — Literary Devices",
    r1t: "What are Figures of Speech?", r1h: "Tricks to make texts more vivid!",
    r1i: "Figures of speech are language techniques that make texts more interesting, expressive, or beautiful. Metaphor, simile, alliteration, personification, hyperbole — these are examples.",
    r2t: "Metaphor vs. Simile", r2h: "The first important difference!",
    r2i: "Metaphor: direct transfer of meaning. 'Life is a battle.' Simile: with 'like' or 'as'. 'Life is like a battle.' The simile is milder, the metaphor more direct.",
    r3t: "More Figures of Speech", r3h: "Learn more important techniques!",
    r3i: "Alliteration: Same starting letters. 'Lots of little lilies.' Personification: Human qualities to objects. 'The wind whispered softly.' Hyperbole: Exaggeration. 'I've told you a thousand times!'",
    r4t: "Why Figures of Speech?", r4h: "What's the purpose of these devices?",
    r4i: "Figures of speech make texts more expressive, emotional, and memorable. They help you express your feelings and captivate the reader. Use them in essays and poems!",
    r5t: "Big Test: Figures of Speech", r5h: "Recognize all devices!",
    q1: "What is a metaphor?",
    a1a: "A comparison with 'like'",
    a1b: "A direct transfer of meaning",
    a1c: "A repetition of words",
    a1d: "A sentence with two statements",
    q2: "Which figure: 'The forest whispers secrets to me'?",
    a2a: "Metaphor",
    a2b: "Personification",
    a2c: "Hyperbole",
    a2d: "Alliteration",
    q3: "Recognize: 'The fire flickered like a dancer.'",
    a3a: "Metaphor",
    a3b: "Simile",
    a3c: "Personification",
    a3d: "Alliteration",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1t",
      infoText: "r1i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="60">🎭</text></svg>,
      questions: [{ question: "q1", choices: ["a1a", "a1b", "a1c", "a1d"], answer: "a1b" }],
    },
    {
      type: "mcq",
      infoTitle: "r2t",
      infoText: "r2i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚖️</text></svg>,
      questions: [{ question: "q2", choices: ["a2a", "a2b", "a2c", "a2d"], answer: "a2b" }],
    },
    {
      type: "mcq",
      infoTitle: "r3t",
      infoText: "r3i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">✨</text></svg>,
      questions: [{ question: "q3", choices: ["a3a", "a3b", "a3c", "a3d"], answer: "a3b" }],
    },
    {
      type: "info",
      infoTitle: "r4t",
      infoText: "r4i",
      svg: () => <svg viewBox="0 0 240 160" className="w-full"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">💫</text></svg>,
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
export default memo(function K7StilmittelExplorer({ color, lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
