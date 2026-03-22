"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Mammals", tx1: "Mammals have fur and feed milk to their babies.",
    t2: "Birds", tx2: "Birds have feathers and can fly. They lay eggs.",
    t3: "Reptiles", tx3: "Reptiles have scales and are cold-blooded.",
    t4: "Insects", tx4: "Insects have 6 legs and are the largest animal group.",
    t5: "Food Chains", tx5: "Animals are connected in food chains in nature.",
    q1: "What covers a mammal's skin?", q1a: "Fur", q1b: "Scales", q1c: "Feathers", q1d: "Skin only",
    q2: "How many legs does a bird have?", q2a: "2", q2b: "4", q2c: "6", q2d: "8",
    q3: "Are reptiles warm or cold-blooded?", q3a: "Cold-blooded", q3b: "Warm-blooded", q3c: "Both", q3d: "Neither",
    q4: "How many legs do insects have?", q4a: "6", q4b: "4", q4c: "8", q4d: "10",
    q5: "In a food chain, plants are:", q5a: "Producers", q5b: "Consumers", q5c: "Decomposers", q5d: "Predators",
  },
  de: {
    t1: "Säugetiere", tx1: "Säugetiere haben Fell und füttern ihre Babys mit Milch.",
    t2: "Vögel", tx2: "Vögel haben Federn und können fliegen. Sie legen Eier.",
    t3: "Reptilien", tx3: "Reptilien haben Schuppen und sind kaltblütig.",
    t4: "Insekten", tx4: "Insekten haben 6 Beine und sind die größte Tiergruppe.",
    t5: "Nahrungsketten", tx5: "Tiere sind in Nahrungsketten in der Natur verbunden.",
    q1: "Was bedeckt die Haut eines Säugetiers?", q1a: "Fell", q1b: "Schuppen", q1c: "Federn", q1d: "Nur Haut",
    q2: "Wie viele Beine hat ein Vogel?", q2a: "2", q2b: "4", q2c: "6", q2d: "8",
    q3: "Sind Reptilien warm oder kaltblütig?", q3a: "Kaltblütig", q3b: "Warmblütig", q3c: "Beides", q3d: "Keines",
    q4: "Wie viele Beine haben Insekten?", q4a: "6", q4b: "4", q4c: "8", q4d: "10",
    q5: "In einer Nahrungskette sind Pflanzen:", q5a: "Erzeuger", q5b: "Verbraucher", q5c: "Zersetzer", q5d: "Raubtiere",
  },
  hu: {
    t1: "Emlősök", tx1: "Az emlősöknek szőrük van és anyatejjel táplálják a fiaikat.",
    t2: "Madarak", tx2: "A madaraknak tolluk van és tudnak repülni. Tojásokat raknak.",
    t3: "Hüllők", tx3: "A hüllőknek pikkelyük van és hidegvérek.",
    t4: "Rovarok", tx4: "A rovaroknak 6 lábuk van és az állatok legnagyobb csoportja.",
    t5: "Táplálékláncok", tx5: "Az állatok táplálékláncokkal vannak összekapcsolva a természetben.",
    q1: "Mi fedi az emlős bőrét?", q1a: "Szőr", q1b: "Pikkelyek", q1c: "Tollak", q1d: "Csak bőr",
    q2: "Hány lábja van egy madarnak?", q2a: "2", q2b: "4", q2c: "6", q2d: "8",
    q3: "A hüllők meleg vagy hidegvérek?", q3a: "Hidegvérek", q3b: "Melegvérek", q3c: "Mindkettő", q3d: "Egyik sem",
    q4: "Hány lábja van a rovaroknak?", q4a: "6", q4b: "4", q4c: "8", q4d: "10",
    q5: "Egy táplálékláncban a növények:", q5a: "Termelők", q5b: "Fogyasztók", q5c: "Lebomlasztók", q5d: "Ragadozók",
  },
  ro: {
    t1: "Mamifere", tx1: "Mamiferele au blană și hrănesc bebelușii cu lapte.",
    t2: "Păsări", tx2: "Păsările au pene și pot zbura. Pun ouă.",
    t3: "Reptile", tx3: "Reptilele au solzi și sunt cu sânge rece.",
    t4: "Insecte", tx4: "Insectele au 6 picioare și sunt cel mai mare grup animal.",
    t5: "Lanțuri alimentare", tx5: "Animalele sunt conectate în lanțuri alimentare în natură.",
    q1: "Ce acoperă pielea unui mamifer?", q1a: "Blană", q1b: "Solzi", q1c: "Pene", q1d: "Doar piele",
    q2: "Câte picioare are o pasăre?", q2a: "2", q2b: "4", q2c: "6", q2d: "8",
    q3: "Reptilele sunt calde sau reci?", q3a: "Reci", q3b: "Calde", q3c: "Ambele", q3d: "Nici una",
    q4: "Câte picioare au insectele?", q4a: "6", q4b: "4", q4c: "8", q4d: "10",
    q5: "Într-un lanț alimentar, plantele sunt:", q5a: "Producători", q5b: "Consumatori", q5c: "Descompunători", q5d: "Prădători",
  },
};

function AnimalSvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e1a" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#F7DC6F">🦁</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <AnimalSvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <AnimalSvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <AnimalSvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <AnimalSvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <AnimalSvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function AnimalKingdomExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
