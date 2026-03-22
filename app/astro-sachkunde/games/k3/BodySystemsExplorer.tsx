"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Skeleton", tx1: "Our skeleton supports and protects our body.",
    t2: "Bones & Joints", tx2: "We have 206 bones that can move at joints.",
    t3: "Muscles", tx3: "Muscles pull on bones to help us move.",
    t4: "Heart & Lungs", tx4: "The heart pumps blood. Lungs help us breathe.",
    t5: "Digestion", tx5: "Food travels through our digestive system for energy.",
    q1: "How many bones does an adult have?", q1a: "206", q1b: "100", q1c: "300", q1d: "50",
    q2: "What are joints for?", q2a: "Moving bones", q2b: "Making blood", q2c: "Breathing", q2d: "Thinking",
    q3: "Muscles help us to:", q3a: "Move", q3b: "Sleep", q3c: "Eat", q3d: "Think",
    q4: "What pumps blood?", q4a: "Heart", q4b: "Lungs", q4c: "Brain", q4d: "Stomach",
    q5: "Food is broken down in:", q5a: "Stomach", q5b: "Heart", q5c: "Lungs", q5d: "Brain",
  },
  de: {
    t1: "Skelett", tx1: "Unser Skelett stützt und schützt unseren Körper.",
    t2: "Knochen & Gelenke", tx2: "Wir haben 206 Knochen, die sich an Gelenken bewegen.",
    t3: "Muskeln", tx3: "Muskeln ziehen an Knochen, um uns zu helfen, zu bewegen.",
    t4: "Herz & Lungen", tx4: "Das Herz pumpt Blut. Lungen helfen uns zu atmen.",
    t5: "Verdauung", tx5: "Nahrung reist durch unser Verdauungssystem für Energie.",
    q1: "Wie viele Knochen hat ein Erwachsener?", q1a: "206", q1b: "100", q1c: "300", q1d: "50",
    q2: "Wofür sind Gelenke?", q2a: "Knochen bewegen", q2b: "Blut machen", q2c: "Atmen", q2d: "Denken",
    q3: "Muskeln helfen uns zu:", q3a: "Bewegen", q3b: "Schlafen", q3c: "Essen", q3d: "Denken",
    q4: "Was pumpt Blut?", q4a: "Herz", q4b: "Lunge", q4c: "Gehirn", q4d: "Magen",
    q5: "Essen wird aufgelöst in:", q5a: "Magen", q5b: "Herz", q5c: "Lunge", q5d: "Gehirn",
  },
  hu: {
    t1: "Csontváz", tx1: "A csontváz támogatja és védi testünket.",
    t2: "Csontok és ízületek", tx2: "206 csontunk van, amelyek ízületekben mozognak.",
    t3: "Izmok", tx3: "Az izmok meghúzzák a csontokat, hogy mozogni tudjunk.",
    t4: "Szív és tüdő", tx4: "A szív pumpálja a vért. A tüdő segít a légzésben.",
    t5: "Emésztés", tx5: "Az étel átmegy az emésztőrendszeren az energiáért.",
    q1: "Hány csontja van egy felnőttnek?", q1a: "206", q1b: "100", q1c: "300", q1d: "50",
    q2: "Mire valók az ízületek?", q2a: "Csontok mozgatása", q2b: "Vér készítése", q2c: "Légzés", q2d: "Gondolkodás",
    q3: "Izmok segítnek nekünk:", q3a: "Mozogni", q3b: "Aludni", q3c: "Enni", q3d: "Gondolkodni",
    q4: "Mi pumpálja a vért?", q4a: "Szív", q4b: "Tüdő", q4c: "Agy", q4d: "Gyomor",
    q5: "Az étel felbomlott:", q5a: "Gyomor", q5b: "Szív", q5c: "Tüdő", q5d: "Agy",
  },
  ro: {
    t1: "Schelet", tx1: "Scheletul nostru susține și protejează corpul.",
    t2: "Oase și articulații", tx2: "Avem 206 oase care se mișcă la articulații.",
    t3: "Mușchi", tx3: "Mușchii trag oasele pentru a ne ajuta să ne mișcăm.",
    t4: "Inimă și plămâni", tx4: "Inima pompează sânge. Plămânii ne ajută să respirăm.",
    t5: "Digestie", tx5: "Mâncarea parcurge sistemul digestiv pentru energie.",
    q1: "Câte oase are un adult?", q1a: "206", q1b: "100", q1c: "300", q1d: "50",
    q2: "Pentru ce sunt articulațiile?", q2a: "Mișcarea oaselor", q2b: "Făcerea sângelui", q2c: "Respirație", q2d: "Gândire",
    q3: "Mușchii ne ajută să:", q3a: "Ne mișcăm", q3b: "Dormim", q3c: "Mâncăm", q3d: "Gândim",
    q4: "Ce pompează sânge?", q4a: "Inimă", q4b: "Plămân", q4c: "Creier", q4d: "Stomac",
    q5: "Mâncarea se descompune în:", q5a: "Stomac", q5b: "Inimă", q5c: "Plămân", q5d: "Creier",
  },
};

function BodySvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#FF6B9D">🫀</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => <BodySvg />,
      questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => <BodySvg />,
      questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => <BodySvg />,
      questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => <BodySvg />,
      questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => <BodySvg />,
      questions: [
        { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
        { question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" },
        { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function BodySystemsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
