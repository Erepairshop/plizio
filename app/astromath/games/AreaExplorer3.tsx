"use client";
// AreaExplorer3 — Geometry, Perimeter & Area Island (3 topics)
// Modernized with centralized SVG library

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── LABELS ────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Area & Perimeter Explorer",
    area_title: "🔲 Rectangle Area",
    area_teach: "Count the square units inside a rectangle. Multiply length × width.",
    area_hint_1: "How many unit squares fit inside?",
    area_hint_2: "Length 5, Width 3 → Area = 5 × 3 = 15 square units",
    area_hint_3: "Area tells us how much space is inside the shape",
    t1_inst: "Tap the grid to count squares. What is the area?",
    t1_h1: "Count: 4 columns × 3 rows",
    t1_h2: "Area = 4 × 3 = 12 square units",
    perim_title: "📏 Perimeter",
    perim_teach: "Walk around the edge of the shape and add all the sides.",
    perim_hint_1: "Add all four sides of the rectangle",
    perim_hint_2: "Perimeter = 6 + 4 + 6 + 4 = 20 units",
    perim_hint_3: "Perimeter is the distance around the shape",
    t2_inst: "Drag markers around the perimeter. Total all four sides.",
    t2_h1: "Top + Right + Bottom + Left",
    t2_h2: "Perimeter = 7 + 5 + 7 + 5 = 24 units",
    shapes_title: "✨ Shape Quiz",
    shapes_teach: "Identify and describe different shapes and their measurements.",
    shapes_hint_1: "What do area and perimeter measure?",
    shapes_hint_2: "Area = space inside, Perimeter = distance around",
    shapes_hint_3: "Different shapes need different formulas",
    t3_inst: "Select the correct answer for each shape measurement.",
    t3_h1: "Remember: Area = length × width",
    t3_h2: "Perimeter = sum of all sides",
    shapes_q1: "What is the area of a 6×4 rectangle?",
    shapes_q1_a: "18", shapes_q1_b: "24", shapes_q1_c: "30", shapes_q1_d: "20",
    shapes_q2: "What is the perimeter of a 5×3 rectangle?",
    shapes_q2_a: "8", shapes_q2_b: "15", shapes_q2_c: "16", shapes_q2_d: "18",
    shapes_q3: "A square has sides of 4 units. What is its area?",
    shapes_q3_a: "8", shapes_q3_b: "12", shapes_q3_c: "16", shapes_q3_d: "20",
  },
  de: {
    explorer_title: "Fläche & Umfang entdecken",
    area_title: "🔲 Rechteck-Fläche",
    area_teach: "Zähle die Quadrat-Einheiten im Rechteck. Multipliziere Länge × Breite.",
    area_hint_1: "Wie viele Einheits-Quadrate passen hinein?",
    area_hint_2: "Länge 5, Breite 3 → Fläche = 5 × 3 = 15 Quadrat-Einheiten",
    area_hint_3: "Fläche zeigt den Platz im Inneren der Form",
    t1_inst: "Tippe auf das Gitter, um die Quadrate zu zählen. Wie groß ist die Fläche?",
    t1_h1: "Zähle: 4 Spalten × 3 Reihen",
    t1_h2: "Fläche = 4 × 3 = 12 Quadrat-Einheiten",
    perim_title: "📏 Umfang",
    perim_teach: "Gehe um die Kante und addiere alle Seiten.",
    perim_hint_1: "Addiere alle vier Seiten des Rechtecks",
    perim_hint_2: "Umfang = 6 + 4 + 6 + 4 = 20 Einheiten",
    perim_hint_3: "Umfang ist die Entfernung um die Form",
    t2_inst: "Ziehe Marker um den Umfang. Addiere alle vier Seiten.",
    t2_h1: "Oben + Rechts + Unten + Links",
    t2_h2: "Umfang = 7 + 5 + 7 + 5 = 24 Einheiten",
    shapes_title: "✨ Formen-Quiz",
    shapes_teach: "Erkenne und beschreibe verschiedene Formen und Messungen.",
    shapes_hint_1: "Was messen Fläche und Umfang?",
    shapes_hint_2: "Fläche = Platz innen, Umfang = Entfernung außen",
    shapes_hint_3: "Verschiedene Formen brauchen verschiedene Formeln",
    t3_inst: "Wähle die richtige Antwort für jede Formenmessung.",
    t3_h1: "Denk dran: Fläche = Länge × Breite",
    t3_h2: "Umfang = Summe aller Seiten",
    shapes_q1: "Welche Fläche hat ein 6×4 Rechteck?",
    shapes_q1_a: "18", shapes_q1_b: "24", shapes_q1_c: "30", shapes_q1_d: "20",
    shapes_q2: "Welcher Umfang hat ein 5×3 Rechteck?",
    shapes_q2_a: "8", shapes_q2_b: "15", shapes_q2_c: "16", shapes_q2_d: "18",
    shapes_q3: "Ein Quadrat hat Seiten von 4 Einheiten. Welche Fläche?",
    shapes_q3_a: "8", shapes_q3_b: "12", shapes_q3_c: "16", shapes_q3_d: "20",
  },
  hu: {
    explorer_title: "Terület & Kerület felfedezés",
    area_title: "🔲 Téglalap területe",
    area_teach: "Számold meg a négyzet-egységeket a téglalapban. Szorozd a hosszúságot × szélességgel.",
    area_hint_1: "Hány egység-négyzet fér be?",
    area_hint_2: "Hosszúság 5, Szélesség 3 → Terület = 5 × 3 = 15 négyzetegység",
    area_hint_3: "A terület az alakzat belsejének méretét mutatja",
    t1_inst: "Kattints a rácsra a négyzetek számlálásához. Mekkora a terület?",
    t1_h1: "Szám: 4 oszlop × 3 sor",
    t1_h2: "Terület = 4 × 3 = 12 négyzetegység",
    perim_title: "📏 Kerület",
    perim_teach: "Menj körül az alakzat szélén és add össze az összes oldalt.",
    perim_hint_1: "Add össze a téglalap mind a négy oldalát",
    perim_hint_2: "Kerület = 6 + 4 + 6 + 4 = 20 egység",
    perim_hint_3: "A kerület az alakzat körüli távolság",
    t2_inst: "Húzd a markereket a kerület körül. Add össze mind a négy oldalt.",
    t2_h1: "Fent + Jobb + Lent + Bal",
    t2_h2: "Kerület = 7 + 5 + 7 + 5 = 24 egység",
    shapes_title: "✨ Alakzat-kvíz",
    shapes_teach: "Ismerd fel és írd le a különböző alakzatokat és méreteiket.",
    shapes_hint_1: "Mit mérnek a terület és kerület?",
    shapes_hint_2: "Terület = belső hely, Kerület = külső távolság",
    shapes_hint_3: "Különböző alakzatok eltérő képleteket igényelnek",
    t3_inst: "Válaszd ki a helyes választ minden alakzat-mérésnél.",
    t3_h1: "Emlékezz: Terület = hosszúság × szélesség",
    t3_h2: "Kerület = összes oldal összege",
    shapes_q1: "Mekkora egy 6×4 téglalap területe?",
    shapes_q1_a: "18", shapes_q1_b: "24", shapes_q1_c: "30", shapes_q1_d: "20",
    shapes_q2: "Mekkora egy 5×3 téglalap kerülete?",
    shapes_q2_a: "8", shapes_q2_b: "15", shapes_q2_c: "16", shapes_q2_d: "18",
    shapes_q3: "Egy négyzetnek 4 egység hosszú oldalai vannak. Mekkora a területe?",
    shapes_q3_a: "8", shapes_q3_b: "12", shapes_q3_c: "16", shapes_q3_d: "20",
  },
  ro: {
    explorer_title: "Explorare Arie & Perimetru",
    area_title: "🔲 Aria dreptunghiului",
    area_teach: "Numără unitățile pătrate din dreptunghi. Înmulțește lungimea × lățimea.",
    area_hint_1: "Câte pătrate unitare se potrivesc?",
    area_hint_2: "Lungimea 5, Lățimea 3 → Aria = 5 × 3 = 15 unități pătrate",
    area_hint_3: "Aria arată spațiul din interiorul formei",
    t1_inst: "Atinge grila pentru a număra pătratele. Care este aria?",
    t1_h1: "Numără: 4 coloane × 3 rânduri",
    t1_h2: "Aria = 4 × 3 = 12 unități pătrate",
    perim_title: "📏 Perimetru",
    perim_teach: "Merge în jurul formei și adună toate laturile.",
    perim_hint_1: "Adună toate patru laturi ale dreptunghiului",
    perim_hint_2: "Perimetru = 6 + 4 + 6 + 4 = 20 unități",
    perim_hint_3: "Perimetrul este distanța din jurul formei",
    t2_inst: "Trage markerii în jurul perimetrului. Adună toate patru laturile.",
    t2_h1: "Sus + Dreapta + Jos + Stânga",
    t2_h2: "Perimetru = 7 + 5 + 7 + 5 = 24 unități",
    shapes_title: "✨ Quiz de forme",
    shapes_teach: "Identifică și descrie diferite forme și măsurătorile lor.",
    shapes_hint_1: "Ce măsoară aria și perimetrul?",
    shapes_hint_2: "Aria = spațiu interior, Perimetru = distanță exterior",
    shapes_hint_3: "Formele diferite necesită formule diferite",
    t3_inst: "Selectează răspunsul corect pentru fiecare măsurare de formă.",
    t3_h1: "Ține minte: Aria = lungime × lățime",
    t3_h2: "Perimetru = suma tuturor laturilor",
    shapes_q1: "Care este aria unui dreptunghi 6×4?",
    shapes_q1_a: "18", shapes_q1_b: "24", shapes_q1_c: "30", shapes_q1_d: "20",
    shapes_q2: "Care este perimetrul unui dreptunghi 5×3?",
    shapes_q2_a: "8", shapes_q2_b: "15", shapes_q2_c: "16", shapes_q2_d: "18",
    shapes_q3: "Un pătrat are laturi de 4 unități. Care este aria?",
    shapes_q3_a: "8", shapes_q3_b: "12", shapes_q3_c: "16", shapes_q3_d: "20",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📐",
  topics: [
    {
      infoTitle: "area_title",
      infoText: "area_teach",
      svg: () => null,
      bulletKeys: ["area_hint_1", "area_hint_2", "area_hint_3"],
      interactive: {
        type: "block-drag",
        mode: "combine",
        groups: [3, 3, 3, 3],
        answer: 12,
        blockIcon: "🟦",
        instruction: "t1_inst",
        hint1: "t1_h1",
        hint2: "t1_h2",
      },
      quiz: {
        question: "shapes_q1",
        choices: ["shapes_q1_a", "shapes_q1_b", "shapes_q1_c", "shapes_q1_d"],
        answer: "shapes_q1_b",
      },
    },
    {
      infoTitle: "perim_title",
      infoText: "perim_teach",
      svg: () => null,
      bulletKeys: ["perim_hint_1", "perim_hint_2", "perim_hint_3"],
      interactive: {
        type: "number-line",
        min: 0,
        max: 30,
        start: 0,
        target: 24,
        step: 2,
        instruction: "t2_inst",
        hint1: "t2_h1",
        hint2: "t2_h2",
      },
      quiz: {
        question: "shapes_q2",
        choices: ["shapes_q2_a", "shapes_q2_b", "shapes_q2_c", "shapes_q2_d"],
        answer: "shapes_q2_c",
      },
    },
    {
      infoTitle: "shapes_title",
      infoText: "shapes_teach",
      svg: () => null,
      bulletKeys: ["shapes_hint_1", "shapes_hint_2", "shapes_hint_3"],
      interactive: {
        type: "block-drag",
        mode: "combine",
        groups: [4, 4, 4, 4],
        answer: 16,
        blockIcon: "🟩",
        instruction: "t3_inst",
        hint1: "t3_h1",
        hint2: "t3_h2",
      },
      quiz: {
        question: "shapes_q3",
        choices: ["shapes_q3_a", "shapes_q3_b", "shapes_q3_c", "shapes_q3_d"],
        answer: "shapes_q3_c",
      },
    },
  ],
  rounds: [],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AreaExplorer3({ color = "#FF9500", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={3}
    />
  );
}
