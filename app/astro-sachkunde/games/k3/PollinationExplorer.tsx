"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Flower Parts", tx1: "Flowers have petals, stamens, and pistils for reproduction.",
    t2: "Pollen & Seeds", tx2: "Pollen from flowers produces seeds for new plants.",
    t3: "Pollination", tx3: "Bees and insects move pollen between flowers.",
    t4: "Plant Life Cycle", tx4: "Seeds grow into plants that produce flowers and new seeds.",
    t5: "Seed Dispersal", tx5: "Seeds spread by wind, water, or animals to grow elsewhere.",
    q1: "What is the colorful part of a flower?", q1a: "Petals", q1b: "Stamens", q1c: "Pistils", q1d: "Leaves",
    q2: "What do pollinators do?", q2a: "Spread pollen", q2b: "Make leaves", q2c: "Stop growth", q2d: "Eat flowers",
    q3: "Which insect is a great pollinator?", q3a: "Bee", q3b: "Beetle", q3c: "Wasp", q3d: "Ant",
    q4: "What grows from a seed?", q4a: "Plant", q4b: "Flower", q4c: "Fruit", q4d: "All above",
    q5: "How do some seeds travel?", q5a: "By wind or water", q5b: "By staying still", q5c: "By sinking", q5d: "By dying",
  },
  de: {
    t1: "Blütenteile", tx1: "Blüten haben Blütenblätter, Staubgefäße und Stempel zur Fortpflanzung.",
    t2: "Pollen & Samen", tx2: "Blütenpollen produzieren Samen für neue Pflanzen.",
    t3: "Bestäubung", tx3: "Bienen und Insekten verteilen Pollen zwischen Blüten.",
    t4: "Pflanzenzyklus", tx4: "Samen wachsen zu Pflanzen heran, die Blüten und neue Samen produzieren.",
    t5: "Samenverbreitung", tx5: "Samen verbreiten sich durch Wind, Wasser oder Tiere.",
    q1: "Was ist der farbige Teil einer Blüte?", q1a: "Blütenblätter", q1b: "Staubgefäße", q1c: "Stempel", q1d: "Blätter",
    q2: "Was tun Bestäuber?", q2a: "Verteilen Pollen", q2b: "Machen Blätter", q2c: "Stoppt Wachstum", q2d: "Essen Blüten",
    q3: "Welches Insekt ist ein großartiger Bestäuber?", q3a: "Biene", q3b: "Käfer", q3c: "Wespe", q3d: "Ameise",
    q4: "Was wächst aus einem Samen?", q4a: "Pflanze", q4b: "Blüte", q4c: "Frucht", q4d: "Alles oben",
    q5: "Wie reisen manche Samen?", q5a: "Mit Wind oder Wasser", q5b: "Bleiben stehen", q5c: "Sinken", q5d: "Sterben",
  },
  hu: {
    t1: "Virág részei", tx1: "A virágoknak szirmok, porzók és bibék vannak a szaporodáshoz.",
    t2: "Virágpor és magok", tx2: "A virágpor magoknál termel új növények számára.",
    t3: "Beporzás", tx3: "A méhek és rovarok virágpot mozgatnak virágok között.",
    t4: "Növény életciklusa", tx4: "A magok növénnyé nőnek, amelyek virágoknál és új magoknál termelnek.",
    t5: "Magok terjedése", tx5: "A magok szél, víz vagy állatok által terjednek máshol.",
    q1: "Mi a virág színes része?", q1a: "Szirmok", q1b: "Porzók", q1c: "Bibék", q1d: "Levelek",
    q2: "Mit csinálnak a porozók?", q2a: "Virágport terjesztenek", q2b: "Leveleket készítenek", q2c: "Növekedést leállít", q2d: "Virágokat esznek",
    q3: "Melyik rovar nagyszerű porozó?", q3a: "Méh", q3b: "Bogár", q3c: "Darázs", q3d: "Hangya",
    q4: "Mit nő egy magból?", q4a: "Növény", q4b: "Virág", q4c: "Gyümölcs", q4d: "Mindegyik fent",
    q5: "Hogyan utaznak néhány mag?", q5a: "Szél vagy víz által", q5b: "Maradnak", q5c: "Süllyednek", q5d: "Meghalnak",
  },
  ro: {
    t1: "Părți de floare", tx1: "Florile au petale, stamine și pesteu pentru reproducere.",
    t2: "Polen și semințe", tx2: "Polenul de flori produce semințe pentru plante noi.",
    t3: "Polenizare", tx3: "Albinele și insectele mișcă polenul între flori.",
    t4: "Ciclul de viață al plantei", tx4: "Semințele cresc în plante care produc flori și semințe noi.",
    t5: "Dispersie semințe", tx5: "Semințele se răspândesc prin vânt, apă sau animale.",
    q1: "Care este partea colorată a unei flori?", q1a: "Petale", q1b: "Stamine", q1c: "Pistil", q1d: "Frunze",
    q2: "Ce fac polenizatorii?", q2a: "Răspândesc polen", q2b: "Fac frunze", q2c: "Opresc creșterea", q2d: "Mănâncă flori",
    q3: "Ce insectă este un polenizator minunat?", q3a: "Albină", q3b: "Gândac", q3c: "Viespe", q3d: "Furnică",
    q4: "Ce crește dintr-o semință?", q4a: "Plantă", q4b: "Floare", q4c: "Fruct", q4d: "Toate mai sus",
    q5: "Cum se deplasează anumite semințe?", q5a: "Prin vânt sau apă", q5b: "Rămân pe loc", q5c: "Se scufundă", q5d: "Mor",
  },
};

function FlowerSvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e2e" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#76D7C4">🌸</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <FlowerSvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <FlowerSvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <FlowerSvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <FlowerSvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4d" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <FlowerSvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function PollinationExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
