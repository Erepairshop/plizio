"use client";
import React, { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    round1Title: "Forest Layers", round1Text: "Forests have layers: canopy, understory, forest floor. Many animals live here!",
    q1: "Where is the forest canopy?", a1: "Top of trees", a2: "On the ground", a3: "Underground", a4: "In water",
    round2Title: "Forest Food Chain", round2Text: "Plants → herbivores → carnivores. Everything is connected!",
    q2: "What eats plants in the forest?", a5: "Deer", a6: "Lions", a7: "Eagles", a8: "Snakes",
    round3Title: "Forest Animals", round3Text: "Bears, deer, squirrels, birds live in forests. Each needs different food!",
    q3: "Which animal is a forest predator?", a9: "Bear", a10: "Rabbit", a11: "Squirrel", a12: "Deer",
    round4Title: "Seasons Change", round4Text: "Forests change with seasons. Trees lose leaves in fall. Animals prepare!",
    q4: "What happens to trees in fall?", a13: "Lose leaves", a14: "Grow new leaves", a15: "Sleep", a16: "Grow berries",
    round5Title: "Review", round5Text: "Forest knowledge questions!",
    q5: "Which layer gets the most sunlight?", a17: "Canopy", a18: "Understory", a19: "Forest floor", a20: "Roots",
    q6: "What protects animals in the forest?", a21: "Trees", a22: "Grass", a23: "Rocks", a24: "Water",
  },
  de: {
    round1Title: "Waldschichten", round1Text: "Wälder haben Schichten: Baldachin, Unterschicht, Waldboden. Viele Tiere leben hier!",
    q1: "Wo ist das Walddach?", a1: "Oben in den Bäumen", a2: "Auf dem Boden", a3: "Unter der Erde", a4: "Im Wasser",
    round2Title: "Waldnahrungskette", round2Text: "Pflanzen → Herbivoren → Karnivoren. Alles ist verbunden!",
    q2: "Was frisst Pflanzen im Wald?", a5: "Hirsch", a6: "Löwen", a7: "Adler", a8: "Schlangen",
    round3Title: "Waldtiere", round3Text: "Bären, Hirsche, Eichhörnchen, Vögel leben in Wäldern. Jeder braucht anderes Futter!",
    q3: "Welches Tier ist ein Waldräuber?", a9: "Bär", a10: "Hase", a11: "Eichhörnchen", a12: "Hirsch",
    round4Title: "Jahreszeiten ändern sich", round4Text: "Wälder ändern sich mit den Jahreszeiten. Bäume verlieren Blätter im Herbst. Tiere bereiten sich vor!",
    q4: "Was passiert mit Bäumen im Herbst?", a13: "Blätter verlieren", a14: "Neue Blätter wachsen", a15: "Schlafen", a16: "Beeren wachsen",
    round5Title: "Wiederholung", round5Text: "Waldwissen Fragen!",
    q5: "Welche Schicht bekommt das meiste Sonnenlicht?", a17: "Baldachin", a18: "Unterschicht", a19: "Waldboden", a20: "Wurzeln",
    q6: "Was schützt Tiere im Wald?", a21: "Bäume", a22: "Gras", a23: "Felsen", a24: "Wasser",
  },
  hu: {
    round1Title: "Erdőrétegek", round1Text: "Az erdőknek vannak rétegei: lombkoronaszint, alsó szint, erdőtalaj. Sok állat él itt!",
    q1: "Hol van az erdő lombkoronaszintje?", a1: "A fák tetején", a2: "A föld szintjén", a3: "A föld alatt", a4: "A vízben",
    round2Title: "Erdő táplálékláncok", round2Text: "Növények → füvesevők → húsevők. Minden összekapcsolódik!",
    q2: "Mi eszi a növényeket az erdőben?", a5: "Szarvas", a6: "Oroszlánok", a7: "Sasok", a8: "Kígyók",
    round3Title: "Erdő állatok", round3Text: "Medvék, szarvasok, mókusok, madarak élnek az erdőben. Mind másféle élelmet kell!",
    q3: "Melyik állat egy erdei ragadozó?", a9: "Medve", a10: "Nyúl", a11: "Mókus", a12: "Szarvas",
    round4Title: "Évszakok változnak", round4Text: "Az erdők változnak az évszakokkal. A fák ősz felé elveszítik a levelüket. Állatok készülnek!",
    q4: "Mi történik a fákkal ősszel?", a13: "Leveleket veszítenek", a14: "Új levelek nőnek", a15: "Alszanak", a16: "Bogyók nőnek",
    round5Title: "Ismétlés", round5Text: "Erdőtudás kérdések!",
    q5: "Melyik réteg kapja a legtöbb napfényt?", a17: "Lombkoronaszint", a18: "Alsó szint", a19: "Erdőtalaj", a20: "Gyökerek",
    q6: "Mi védi az állatokat az erdőben?", a21: "Fák", a22: "Fű", a23: "Sziklák", a24: "Víz",
  },
  ro: {
    round1Title: "Straturile pădurii", round1Text: "Pădurile au straturi: baldachin, sub-pătrunderi, sol pădure. Multe animale trăiesc aici!",
    q1: "Unde este baldachinul pădurii?", a1: "Deasupra copacilor", a2: "Pe sol", a3: "Sub pământ", a4: "În apă",
    round2Title: "Lanț alimentar pădure", round2Text: "Plante → erbivore → carnivore. Tot este conectat!",
    q2: "Ce mănâncă plante în pădure?", a5: "Cerb", a6: "Leoni", a7: "Vulturi", a8: "Șerpi",
    round3Title: "Animale din pădure", round3Text: "Urși, cerbi, veverițe, păsări trăiesc în păduri. Fiecare are nevoie de mâncare diferită!",
    q3: "Ce animal este un pradator pădure?", a9: "Urs", a10: "Iepure", a11: "Veverață", a12: "Cerb",
    round4Title: "Anotimpuri se schimbă", round4Text: "Pădurile se schimbă cu anotimpurile. Copacii pierd frunze toamna. Animalele se pregătesc!",
    q4: "Ce se întâmplă cu copacii toamna?", a13: "Pierd frunze", a14: "Cresc frunze noi", a15: "Dorm", a16: "Cresc bobice",
    round5Title: "Revizuire", round5Text: "Întrebări cunoaștere pădure!",
    q5: "Ce strat primește cea mai multă lumină soarelui?", a17: "Baldachin", a18: "Sub-pătrunteri", a19: "Sol pădure", a20: "Rădăcini",
    q6: "Ce protejează animalele din pădure?", a21: "Copaci", a22: "Iarbă", a23: "Pietre", a24: "Apă",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "round1Title",
      infoText: "round1Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🌲</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "a2", "a3", "a4"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "round2Title",
      infoText: "round2Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🦌</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a5", "a6", "a7", "a8"], answer: "a5" }],
    },
    {
      type: "mcq",
      infoTitle: "round3Title",
      infoText: "round3Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🐻</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a9", "a10", "a11", "a12"], answer: "a9" }],
    },
    {
      type: "mcq",
      infoTitle: "round4Title",
      infoText: "round4Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🍂</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a13", "a14", "a15", "a16"], answer: "a13" }],
    },
    {
      type: "mcq",
      infoTitle: "round5Title",
      infoText: "round5Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">❓</text>
        </svg>
      ),
      questions: [
        { question: "q5", choices: ["a17", "a18", "a19", "a20"], answer: "a17" },
        { question: "q6", choices: ["a21", "a22", "a23", "a24"], answer: "a21" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default memo(function ForestLifeExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
