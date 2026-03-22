"use client";
// WildAnimalExplorer — Wild Animals & Behavior (Wildtiere) Grade 2

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Predators and Prey", r1_text: "Some animals hunt other animals for food. The hunter is called a predator, and the hunted animal is called prey.",
    r1_fact1: "Lions hunt zebras and antelopes",
    r1_q: "What is an animal that hunts others called?", r1_a: "Predator", r1_b: "Herbivore", r1_c: "Plant", r1_d: "Prey",
    r2_title: "Herbivores and Carnivores", r2_text: "Herbivores eat only plants. Carnivores eat meat. Some animals eat both plants and meat (omnivores).",
    r2_fact1: "Rabbits are herbivores that eat grass and vegetables",
    r2_q: "What does a herbivore eat?", r2_a: "Plants", r2_b: "Meat only", r2_c: "Other animals", r2_d: "Nothing",
    r3_title: "Nocturnal and Diurnal Animals", r3_text: "Some animals sleep during the day and hunt at night (nocturnal). Others are active during the day (diurnal).",
    r3_fact1: "Owls are nocturnal and hunt at night",
    r3_q: "When are nocturnal animals active?", r3_a: "At night", r3_b: "During the day", r3_c: "All the time", r3_d: "Never",
    r4_title: "Animal Adaptations", r4_text: "Animals have special features to help them survive. Camouflage helps them hide from predators.",
    r4_fact1: "A rabbit's white fur helps it hide in snow",
    r4_q: "What helps an animal hide from predators?", r4_a: "Camouflage", r4_b: "Loud noise", r4_c: "Speed only", r4_d: "Bright color",
    r5_q1_q: "Which animal is a carnivore?", r5_q1_a: "Tiger", r5_q1_b: "Deer", r5_q1_c: "Cow", r5_q1_d: "Sheep",
    r5_q2_q: "What is an animal that eats plants only?", r5_q2_a: "Herbivore", r5_q2_b: "Carnivore", r5_q2_c: "Predator", r5_q2_d: "Hunter",
  },
  de: {
    r1_title: "Räuber und Beute", r1_text: "Manche Tiere jagen andere Tiere zur Nahrung. Der Jäger heißt Raubtier und das gejagte Tier heißt Beute.",
    r1_fact1: "Löwen jagen Zebras und Antilopen",
    r1_q: "Wie heißt ein Tier, das andere jagt?", r1_a: "Raubtier", r1_b: "Pflanzenfresser", r1_c: "Pflanze", r1_d: "Beute",
    r2_title: "Pflanzenfresser und Fleischfresser", r2_text: "Pflanzenfresser essen nur Pflanzen. Fleischfresser essen Fleisch. Manche Tiere essen beide (Allesfresser).",
    r2_fact1: "Kaninchen sind Pflanzenfresser, die Gras und Gemüse essen",
    r2_q: "Was frisst ein Pflanzenfresser?", r2_a: "Pflanzen", r2_b: "Nur Fleisch", r2_c: "Andere Tiere", r2_d: "Nichts",
    r3_title: "Nacht- und Tagtiere", r3_text: "Manche Tiere schlafen tagsüber und jagen nachts (Nachttiere). Andere sind tagsüber aktiv (Tagtiere).",
    r3_fact1: "Eulen sind Nachttiere und jagen nachts",
    r3_q: "Wann sind Nachttiere aktiv?", r3_a: "Nachts", r3_b: "Tagsüber", r3_c: "Die ganze Zeit", r3_d: "Niemals",
    r4_title: "Tierverstecke", r4_text: "Tiere haben spezielle Fähigkeiten zum Überleben. Tarnung hilft ihnen, sich vor Raubtieren zu verstecken.",
    r4_fact1: "Das weiße Fell eines Kaninchens hilft ihm, sich im Schnee zu verstecken",
    r4_q: "Was hilft einem Tier, sich vor Raubtieren zu verstecken?", r4_a: "Tarnung", r4_b: "Lautes Geräusch", r4_c: "Nur Geschwindigkeit", r4_d: "Helle Farbe",
    r5_q1_q: "Welches Tier ist ein Fleischfresser?", r5_q1_a: "Tiger", r5_q1_b: "Hirsch", r5_q1_c: "Kuh", r5_q1_d: "Schaf",
    r5_q2_q: "Wie heißt ein Tier, das nur Pflanzen frisst?", r5_q2_a: "Pflanzenfresser", r5_q2_b: "Fleischfresser", r5_q2_c: "Raubtier", r5_q2_d: "Jäger",
  },
  hu: {
    r1_title: "Ragadozók és zsákmány", r1_text: "Egyes állatok vadásznak más állatokra táplálékért. A vadász ragadozónak nevezzük, a vadászott állat zsákmánynak.",
    r1_fact1: "Az oroszlánok zebrákra és antilopokra vadásznak",
    r1_q: "Hogyan hívják az állatot, amely másokat vadászik?", r1_a: "Ragadozó", r1_b: "Növényi étrend", r1_c: "Növény", r1_d: "Zsákmány",
    r2_title: "Növényi és húsevők", r2_text: "A növényi ételeket csak növények esznek. A húsevők húst esznek. Néhány állat mindkettőt eszik (omnivore).",
    r2_fact1: "A nyulak növényevő állatok, amelyek füvet és zöldséget esznek",
    r2_q: "Mit eszik egy növényi etető?", r2_a: "Növények", r2_b: "Csak húst", r2_c: "Más állatok", r2_d: "Semmit",
    r3_title: "Éjszakai és nappali állatok", r3_text: "Egyes állatok napközben alszanak és éjszaka vadásznak (éjszakai). Mások nappali aktívak (nappali).",
    r3_fact1: "A báránykák éjszakai állatok és éjszaka vadásznak",
    r3_q: "Mikor aktívak az éjszakai állatok?", r3_a: "Éjszaka", r3_b: "Nappali", r3_c: "Az egész idő", r3_d: "Soha",
    r4_title: "Állat adaptációk", r4_text: "Az állatoknak speciális jellegzetességeik vannak a túléléshez. A maszkírozás segít rejtve maradni a ragadozóktól.",
    r4_fact1: "A nyúl fehér szőrzete segít a hóban rejtve maradni",
    r4_q: "Mit segít az állatnak a ragadozóktól rejtve maradni?", r4_a: "Maszkírozás", r4_b: "Hangos zaj", r4_c: "Csak sebesség", r4_d: "Fényes szín",
    r5_q1_q: "Melyik állat húsevő?", r5_q1_a: "Tigris", r5_q1_b: "Szarvas", r5_q1_c: "Tehén", r5_q1_d: "Juh",
    r5_q2_q: "Hogyan hívják az állatot, amely csak növényt eszik?", r5_q2_a: "Növényevő", r5_q2_b: "Húsevő", r5_q2_c: "Ragadozó", r5_q2_d: "Vadász",
  },
  ro: {
    r1_title: "Prădători și pradă", r1_text: "Unele animale vânează alte animale pentru hrană. Vânătorul se numește pradă, iar animalul vânat se numește pradă.",
    r1_fact1: "Leii vânează zebre și antilope",
    r1_q: "Cum se numește un animal care vânează altele?", r1_a: "Prădător", r1_b: "Erbivore", r1_c: "Plantă", r1_d: "Pradă",
    r2_title: "Erbivore și carnivore", r2_text: "Erbivore mănâncă doar plante. Carnivorele mănâncă carne. Unele animale mănâncă atât plante, cât și carne (omnivor).",
    r2_fact1: "Iepurii sunt erbivore care mănâncă iarba și legume",
    r2_q: "Ce mănâncă un erbivore?", r2_a: "Plante", r2_b: "Doar carne", r2_c: "Alte animale", r2_d: "Nimic",
    r3_title: "Animale nocturne și diurne", r3_text: "Unele animale dorm ziua și vânează noaptea (nocturne). Altele sunt active ziua (diurne).",
    r3_fact1: "Ciufuleții sunt animale nocturne și vânează noaptea",
    r3_q: "Când sunt active animalele nocturne?", r3_a: "Noaptea", r3_b: "Ziua", r3_c: "Tot timpul", r3_d: "Niciodată",
    r4_title: "Adaptări ale animalelor", r4_text: "Animalele au caracteristici speciale pentru a supraviețui. Camuflajul le ajută să se ascundă de prădători.",
    r4_fact1: "Blana albă a iepurelui o ajută să se ascundă în zăpadă",
    r4_q: "Ce ajută un animal să se ascundă de prădători?", r4_a: "Camuflaj", r4_b: "Zgomot puternic", r4_c: "Doar viteza", r4_d: "Culoare strălucitoare",
    r5_q1_q: "Ce animal este carnivor?", r5_q1_a: "Tigru", r5_q1_b: "Cărăbușă", r5_q1_c: "Vacă", r5_q1_d: "Oaie",
    r5_q2_q: "Cum se numește un animal care mănâncă doar plante?", r5_q2_a: "Erbivore", r5_q2_b: "Carnivor", r5_q2_c: "Prădător", r5_q2_d: "Vânător",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#3a2a1a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🦁</text></svg>
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

export default function WildAnimalExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
