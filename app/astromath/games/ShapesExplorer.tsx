"use client";
// ShapesExplorer — Shape discovery (G1 i7)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const noSvg = () => null;

const LABELS = {
  en: {
    title: "Shapes",
    intro: "Shapes have sides and corners!",
    q1: "How many sides does a triangle have?",
    q2: "How many corners does a square have?",
    q3: "Which shape is round with no sides?",
    q4: "A rectangle has ? sides",
    q5: "A pentagon has ? corners",
    q6: "How many sides does a hexagon have?",
    triangle: "triangle",
    square: "square",
    circle: "circle",
    rectangle: "rectangle",
    pentagon: "pentagon",
    hexagon: "hexagon",
  },
  hu: {
    title: "Alakzatok",
    intro: "Az alakzatoknak oldalai és sarkaik vannak!",
    q1: "Hány oldala van egy háromszögnek?",
    q2: "Hány sarka van egy négyzetnek?",
    q3: "Melyik alakzat kerek és nincs oldala?",
    q4: "Egy téglalapnak ? oldala van",
    q5: "Egy ötszögnek ? sarka van",
    q6: "Hány oldala van egy hatszögnek?",
    triangle: "háromszög",
    square: "négyzet",
    circle: "kör",
    rectangle: "téglalap",
    pentagon: "ötszög",
    hexagon: "hatszög",
  },
  de: {
    title: "Formen",
    intro: "Formen haben Seiten und Ecken!",
    q1: "Wie viele Seiten hat ein Dreieck?",
    q2: "Wie viele Ecken hat ein Quadrat?",
    q3: "Welche Form ist rund und hat keine Seiten?",
    q4: "Ein Rechteck hat ? Seiten",
    q5: "Ein Fünfeck hat ? Ecken",
    q6: "Wie viele Seiten hat ein Sechseck?",
    triangle: "Dreieck",
    square: "Quadrat",
    circle: "Kreis",
    rectangle: "Rechteck",
    pentagon: "Fünfeck",
    hexagon: "Sechseck",
  },
  ro: {
    title: "Forme",
    intro: "Formele au laturi și colțuri!",
    q1: "Câte laturi are un triunghi?",
    q2: "Câte colțuri are un pătrat?",
    q3: "Care formă este rotundă și nu are laturi?",
    q4: "Un dreptunghi are ? laturi",
    q5: "Un pentagon are ? colțuri",
    q6: "Câte laturi are un hexagon?",
    triangle: "triunghi",
    square: "pătrat",
    circle: "cerc",
    rectangle: "dreptunghi",
    pentagon: "pentagon",
    hexagon: "hexagon",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "intro",
      svg: noSvg,
      bulletKeys: ["q1", "q2"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q1",
      svg: noSvg,
      questions: [{ question: "q1", choices: ["3", "4", "5", "6"], answer: "3" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q2",
      svg: noSvg,
      questions: [{ question: "q2", choices: ["4", "3", "5", "6"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q3",
      svg: noSvg,
      questions: [{ question: "q3", choices: ["circle", "triangle", "square", "rectangle"], answer: "circle" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: noSvg,
      questions: [
        { question: "q4", choices: ["4", "3", "5", "6"], answer: "4" },
        { question: "q5", choices: ["5", "4", "6", "3"], answer: "5" },
        { question: "q6", choices: ["6", "5", "4", "7"], answer: "6" },
      ],
    },
  ],
};

const ShapesExplorer = memo(function ShapesExplorer({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_shapes" color={color} lang={lang} onDone={onDone} />;
});

export default ShapesExplorer;
