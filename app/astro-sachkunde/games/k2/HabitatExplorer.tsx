"use client";
// HabitatExplorer — Habitats & Animals (Lebensräume) Grade 2

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Forest Habitat", r1_text: "Forests are full of trees, and many animals live there. Deer, squirrels, and birds find food and shelter.",
    r1_fact1: "Forests have tall trees that provide homes for animals",
    r1_q: "Which animal lives in a forest?", r1_a: "Squirrel", r1_b: "Polar bear", r1_c: "Camel", r1_d: "Penguin",
    r2_title: "Water Habitat", r2_text: "Rivers, lakes, and oceans are home to fish, frogs, and ducks. These animals have special adaptations to live in water.",
    r2_fact1: "Fish have gills to breathe underwater",
    r2_q: "Where do frogs live?", r2_a: "Near water", r2_b: "In deserts", r2_c: "In mountains", r2_d: "On ice",
    r3_title: "Desert Habitat", r3_text: "Deserts are hot and dry with little water. Animals like camels and snakes adapt to survive there.",
    r3_fact1: "Camels store water in their humps",
    r3_q: "What helps a camel survive in the desert?", r3_a: "It stores water", r3_b: "It eats ice", r3_c: "It sleeps all day", r3_d: "It drinks soda",
    r4_title: "Arctic Habitat", r4_text: "The Arctic is very cold and icy. Polar bears, seals, and penguins have thick fur or feathers to stay warm.",
    r4_fact1: "Penguins have waterproof feathers and blubber for warmth",
    r4_q: "What keeps polar bears warm?", r4_a: "Thick fur", r4_b: "Dark skin", r4_c: "Eating ice", r4_d: "Small size",
    r5_q1_q: "Which habitat is cold and icy?", r5_q1_a: "Arctic", r5_q1_b: "Desert", r5_q1_c: "Forest", r5_q1_d: "River",
    r5_q2_q: "What adaptation helps fish live in water?", r5_q2_a: "Gills for breathing", r5_q2_b: "Fur for warmth", r5_q2_c: "Wings for flying", r5_q2_d: "Legs for walking",
  },
  de: {
    r1_title: "Waldlebensraum", r1_text: "Wälder sind voller Bäume, und viele Tiere leben dort. Hirsche, Eichhörnchen und Vögel finden Nahrung und Unterschlupf.",
    r1_fact1: "Wälder haben hohe Bäume, die Häuser für Tiere bieten",
    r1_q: "Welches Tier lebt im Wald?", r1_a: "Eichhörnchen", r1_b: "Eisbär", r1_c: "Kamel", r1_d: "Pinguin",
    r2_title: "Wasserlebensraum", r2_text: "Flüsse, Seen und Ozeane sind Heimat von Fischen, Fröschen und Enten. Diese Tiere haben besondere Anpassungen zum Wasserleben.",
    r2_fact1: "Fische haben Kiemen zum Atmen unter Wasser",
    r2_q: "Wo leben Frösche?", r2_a: "Nähe Wasser", r2_b: "In Wüsten", r2_c: "In Bergen", r2_d: "Auf Eis",
    r3_title: "Wüstenlebensraum", r3_text: "Wüsten sind heiß und trocken mit wenig Wasser. Tiere wie Kamele und Schlangen passen sich an, um dort zu überleben.",
    r3_fact1: "Kamele speichern Wasser in ihren Höckern",
    r3_q: "Was hilft einem Kamel, in der Wüste zu überleben?", r3_a: "Es speichert Wasser", r3_b: "Es isst Eis", r3_c: "Es schläft den ganzen Tag", r3_d: "Es trinkt Limonade",
    r4_title: "Arktislebensraum", r4_text: "Die Arktis ist sehr kalt und eisig. Eisbären, Robben und Pinguine haben dickes Fell oder Federn, um warm zu bleiben.",
    r4_fact1: "Pinguine haben wasserfeste Federn und Fettschicht zur Wärmung",
    r4_q: "Was hält Eisbären warm?", r4_a: "Dickes Fell", r4_b: "Dunkle Haut", r4_c: "Eis essen", r4_d: "Kleine Größe",
    r5_q1_q: "Welcher Lebensraum ist kalt und eisig?", r5_q1_a: "Arktis", r5_q1_b: "Wüste", r5_q1_c: "Wald", r5_q1_d: "Fluss",
    r5_q2_q: "Welche Anpassung hilft Fischen im Wasser zu leben?", r5_q2_a: "Kiemen zum Atmen", r5_q2_b: "Fell zur Wärmung", r5_q2_c: "Flügel zum Fliegen", r5_q2_d: "Beine zum Gehen",
  },
  hu: {
    r1_title: "Erdő élőhely", r1_text: "Az erdőkben sok fa van, és sok állat él ott. Az őzek, mókusok és madarak táplálékot és menedéket találnak.",
    r1_fact1: "Az erdőkben magas fák vannak, amelyek házakat adnak az állatoknak",
    r1_q: "Melyik állat él az erdőben?", r1_a: "Mókus", r1_b: "Jegesmedve", r1_c: "Teve", r1_d: "Pingvin",
    r2_title: "Víz élőhely", r2_text: "A folyók, tavak és океán halak, békák és kacsák otthona. Ezeknek az állatoknak speciális alkalmazkodásuk van a vízi életre.",
    r2_fact1: "A halaknak lebenyek vannak a víz alatti lélegzéshez",
    r2_q: "Hol élnek a békák?", r2_a: "Vízhez közeli helyen", r2_b: "Sivatagban", r2_c: "Hegyekben", r2_d: "Jégen",
    r3_title: "Sivatag élőhely", r3_text: "A sivatagok forróak és szárazak, kevés vízzel. Az olyan állatok, mint a teve és a kígyó alkalmazkodnak az ott való túléléshez.",
    r3_fact1: "A tevék vizet tárolnak a púpjaikban",
    r3_q: "Mit segít a tevének a sivatagban túlélni?", r3_a: "Vizet tárol", r3_b: "Jeget eszik", r3_c: "Egész nap alszik", r3_d: "Szódát iszik",
    r4_title: "Arktikus élőhely", r4_text: "Az Arktusz nagyon hideg és jeges. A jegesmedvék, fókák és pingvinek vastag szőrzet vagy tollak vannak a meleg tartáshoz.",
    r4_fact1: "A pingvineknek vízálló tollak és réteg vannak az értékhez",
    r4_q: "Mit tartja melegen a jegesmedveeket?", r4_a: "Vastag szőrzet", r4_b: "Sötét bőr", r4_c: "Jég evés", r4_d: "Kis méret",
    r5_q1_q: "Melyik élőhely hideg és jeges?", r5_q1_a: "Arktusz", r5_q1_b: "Sivatag", r5_q1_c: "Erdő", r5_q1_d: "Folyó",
    r5_q2_q: "Milyen alkalmazkodás segít a halaknak vízben élni?", r5_q2_a: "Lebenyek a lélegzéshez", r5_q2_b: "Szőrzet a melegítéshez", r5_q2_c: "Szárnyak a repüléshez", r5_q2_d: "Lábak a járáshoz",
  },
  ro: {
    r1_title: "Habitat pădure", r1_text: "Pădurile sunt pline de copaci și mulți animale trăiesc acolo. Cerbi, veverițe și păsări găsesc mâncare și adăpost.",
    r1_fact1: "Pădurile au copaci înalți care oferă case animalelor",
    r1_q: "Ce animal trăiește într-o pădure?", r1_a: "Veveriță", r1_b: "Urs polar", r1_c: "Cămilă", r1_d: "Pinguin",
    r2_title: "Habitat apă", r2_text: "Râurile, lacurile și oceanele sunt acasă pentru pești, broaște și rațe. Aceste animale au adaptări speciale pentru a trăi în apă.",
    r2_fact1: "Peștii au branhii pentru a respira sub apă",
    r2_q: "Unde trăiesc broaștele?", r2_a: "Lângă apă", r2_b: "În deșerturi", r2_c: "În munți", r2_d: "Pe gheață",
    r3_title: "Habitat deșert", r3_text: "Deșerturile sunt fierbinți și uscate cu puțină apă. Animale ca cămilele și șerpii se adaptează pentru a supraviețui acolo.",
    r3_fact1: "Cămilele stochează apă în cocoașele lor",
    r3_q: "Ce ajută o cămilă să supraviețuiască în deșert?", r3_a: "Stochează apă", r3_b: "Mânâncă gheață", r3_c: "Doarme toată ziua", r3_d: "Bea limonadă",
    r4_title: "Habitat arctic", r4_text: "Arctici este foarte rece și plin de gheață. Ursii polari, focile și pinguinii au blană sau pene groase pentru a rămâne caldi.",
    r4_fact1: "Pinguinii au pene impermeabile și strat de grăsime pentru căldură",
    r4_q: "Ce ține ursii polari caldi?", r4_a: "Blană groasă", r4_b: "Piele închisă", r4_c: "Mâncarea gheții", r4_d: "Dimensiune mică",
    r5_q1_q: "Ce habitat este rece și plin de gheață?", r5_q1_a: "Arctic", r5_q1_b: "Deșert", r5_q1_c: "Pădure", r5_q1_d: "Râu",
    r5_q2_q: "Ce adaptare ajută peștii să trăiască în apă?", r5_q2_a: "Branhii pentru respirație", r5_q2_b: "Blană pentru căldură", r5_q2_c: "Aripi pentru zbor", r5_q2_d: "Picioare pentru mers",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌲</text></svg>
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

export default function HabitatExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
