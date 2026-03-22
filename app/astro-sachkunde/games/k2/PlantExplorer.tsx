"use client";
// PlantExplorer — Plants & Plant Parts (Pflanzenteile) Grade 2
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Plant Parts", r1_text: "Plants have roots, stems, leaves, and flowers. Each part has a special job.",
    r1_fact1: "Roots drink water from the soil",
    r1_q: "What do roots do?", r1_a: "Drink water", r1_b: "Make flowers", r1_c: "Grow leaves", r1_d: "Fly in the wind",
    r2_title: "Stems & Leaves", r2_text: "Stems hold up the plant and help water move up. Leaves catch sunlight.",
    r2_fact1: "Leaves turn sunlight into food for the plant",
    r2_q: "What helps a plant stand tall?", r2_a: "The stem", r2_b: "The roots", r2_c: "The flower", r2_d: "The seeds",
    r3_title: "Flowers & Seeds", r3_text: "Flowers make seeds. Seeds grow into new plants when they get sun, water, and soil.",
    r3_fact1: "A seed contains a baby plant inside",
    r3_q: "What comes from flowers?", r3_a: "Seeds", r3_b: "Leaves", r3_c: "Stems", r3_d: "Roots",
    r4_title: "Plant Growth", r4_text: "Plants need sunlight, water, and good soil to grow big and strong.",
    r4_fact1: "Plants grow taller when they get enough water and sunlight",
    r4_q: "What do plants need to grow?", r4_a: "Sun, water, and soil", r4_b: "Just water", r4_c: "Just sunlight", r4_d: "Just soil",
    r5_q1_q: "Which part of a plant makes food?", r5_q1_a: "Leaves", r5_q1_b: "Roots", r5_q1_c: "Stem", r5_q1_d: "Flower",
    r5_q2_q: "Where does a plant drink water?", r5_q2_a: "The roots", r5_q2_b: "The leaves", r5_q2_c: "The stem", r5_q2_d: "The flower",
  },
  de: {
    r1_title: "Pflanzenteile", r1_text: "Pflanzen haben Wurzeln, Stiele, Blätter und Blüten. Jeder Teil hat eine besondere Aufgabe.",
    r1_fact1: "Wurzeln trinken Wasser aus der Erde",
    r1_q: "Was machen die Wurzeln?", r1_a: "Wasser trinken", r1_b: "Blüten machen", r1_c: "Blätter wachsen lassen", r1_d: "Im Wind fliegen",
    r2_title: "Stiel und Blätter", r2_text: "Der Stiel hält die Pflanze und hilft Wasser nach oben zu befördern. Blätter fangen Sonnenlicht.",
    r2_fact1: "Blätter wandeln Sonnenlicht in Nahrung für die Pflanze um",
    r2_q: "Was hilft einer Pflanze, aufrecht zu stehen?", r2_a: "Der Stiel", r2_b: "Die Wurzeln", r2_c: "Die Blüte", r2_d: "Die Samen",
    r3_title: "Blüten und Samen", r3_text: "Blüten machen Samen. Samen wachsen zu neuen Pflanzen mit Sonne, Wasser und Erde.",
    r3_fact1: "Ein Samen enthält eine kleine Pflanze",
    r3_q: "Was kommt von Blüten?", r3_a: "Samen", r3_b: "Blätter", r3_c: "Stiele", r3_d: "Wurzeln",
    r4_title: "Pflanzenwachstum", r4_text: "Pflanzen brauchen Sonne, Wasser und gute Erde, um groß und stark zu wachsen.",
    r4_fact1: "Pflanzen werden größer, wenn sie genug Wasser und Sonne bekommen",
    r4_q: "Was brauchen Pflanzen zum Wachsen?", r4_a: "Sonne, Wasser und Erde", r4_b: "Nur Wasser", r4_c: "Nur Sonne", r4_d: "Nur Erde",
    r5_q1_q: "Welcher Teil der Pflanze macht Nahrung?", r5_q1_a: "Blätter", r5_q1_b: "Wurzeln", r5_q1_c: "Stiel", r5_q1_d: "Blüte",
    r5_q2_q: "Wo trinkt eine Pflanze Wasser?", r5_q2_a: "Die Wurzeln", r5_q2_b: "Die Blätter", r5_q2_c: "Der Stiel", r5_q2_d: "Die Blüte",
  },
  hu: {
    r1_title: "Növényrészek", r1_text: "A növényeknek vannak gyökerek, szárak, levelek és virágok. Mindegyik résznek speciális feladata van.",
    r1_fact1: "A gyökerek vizet isznak a talajból",
    r1_q: "Mit csinálnak a gyökerek?", r1_a: "Vizet isznak", r1_b: "Virágot csinálnak", r1_c: "Levelek nőnek", r1_d: "A szélben repülnek",
    r2_title: "Szár és levelek", r2_text: "A szár tartja a növényt és segít a víznek felfelé mozogni. A levelek megfogják a napfényt.",
    r2_fact1: "A levelek a napfényt táplálékká alakítják a növénynek",
    r2_q: "Mi segít egy növénynek felmerészkedni?", r2_a: "A szár", r2_b: "A gyökerek", r2_c: "A virág", r2_d: "A magvak",
    r3_title: "Virágok és magvak", r3_text: "A virágok magvakat csinálnak. A magvak új növénnyé nőnek nap, víz és talaj segítségével.",
    r3_fact1: "A mag egy kis növényt tartalmaz",
    r3_q: "Mit csinálnak a virágok?", r3_a: "Magvakat", r3_b: "Leveleket", r3_c: "Szárakat", r3_d: "Gyökereket",
    r4_title: "Növénynövekedés", r4_text: "A növényeknek napfényre, vízre és jó talajra van szükségük, hogy nagyok és erősek legyenek.",
    r4_fact1: "A növények nőnek, ha elegendő vízet és napfényt kapnak",
    r4_q: "Mit kell a növényeknek a növekedéshez?", r4_a: "Nap, víz és talaj", r4_b: "Csak víz", r4_c: "Csak napfény", r4_d: "Csak talaj",
    r5_q1_q: "A növény mely része készít táplálékot?", r5_q1_a: "Levelek", r5_q1_b: "Gyökerek", r5_q1_c: "Szár", r5_q1_d: "Virág",
    r5_q2_q: "Hol iszik egy növény vizet?", r5_q2_a: "A gyökerek", r5_q2_b: "A levelek", r5_q2_c: "A szár", r5_q2_d: "A virág",
  },
  ro: {
    r1_title: "Părți ale plantei", r1_text: "Plantele au rădăcini, tulpini, frunze și flori. Fiecare parte are o sarcină specială.",
    r1_fact1: "Rădăcinile beau apă din pământ",
    r1_q: "Ce fac rădăcinile?", r1_a: "Beau apă", r1_b: "Fac flori", r1_c: "Cresc frunze", r1_d: "Zboară în vânt",
    r2_title: "Tulpina și frunzele", r2_text: "Tulpina ține planta în picioare și ajută apa să se miște în sus. Frunzele capturează lumina soarelui.",
    r2_fact1: "Frunzele transformă lumina soarelui în hrană pentru plantă",
    r2_q: "Ce ajută o plantă să stea în picioare?", r2_a: "Tulpina", r2_b: "Rădăcinile", r2_c: "Floarea", r2_d: "Semințele",
    r3_title: "Flori și semințe", r3_text: "Florile fac semințe. Semințele devin plante noi cu soare, apă și pământ.",
    r3_fact1: "O sămânță conține o plantă mică în interior",
    r3_q: "Ce vine din flori?", r3_a: "Semințe", r3_b: "Frunze", r3_c: "Tulpini", r3_d: "Rădăcini",
    r4_title: "Creșterea plantei", r4_text: "Plantele au nevoie de soare, apă și pământ bun pentru a crește mari și puternice.",
    r4_fact1: "Plantele cresc mai mari când primesc suficientă apă și soare",
    r4_q: "Ce au nevoie plantele ca să crească?", r4_a: "Soare, apă și pământ", r4_b: "Doar apă", r4_c: "Doar soare", r4_d: "Doar pământ",
    r5_q1_q: "Care parte a plantei face hrană?", r5_q1_a: "Frunzele", r5_q1_b: "Rădăcinile", r5_q1_c: "Tulpina", r5_q1_d: "Floarea",
    r5_q2_q: "Unde bea o plantă apă?", r5_q2_a: "Rădăcinile", r5_q2_b: "Frunzele", r5_q2_c: "Tulpina", r5_q2_d: "Floarea",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1f5e3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌱</text></svg>
);

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />, bulletKeys: ["r1_fact1"],
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }] },
    { type: "mcq", infoTitle: "r2_title", infoText: "r2_text", svg: () => <SimpleSvg />, bulletKeys: ["r2_fact1"],
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: () => <SimpleSvg />, bulletKeys: ["r3_fact1"],
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: () => <SimpleSvg />, bulletKeys: ["r4_fact1"],
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }] },
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />,
      questions: [
        { question: "r5_q1_q", choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"], answer: "r5_q1_a" },
        { question: "r5_q2_q", choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"], answer: "r5_q2_a" },
      ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }

export default function PlantExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
