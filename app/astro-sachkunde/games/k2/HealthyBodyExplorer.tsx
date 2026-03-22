"use client";
// HealthyBodyExplorer — Healthy Body & Nutrition (Gesunder Körper) Grade 2
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Healthy Foods", r1_text: "Fruits, vegetables, and grains help our bodies grow strong.",
    r1_fact1: "Apples, carrots, and berries are healthy snacks",
    r1_q: "Which food is healthiest?", r1_a: "Apple", r1_b: "Candy", r1_c: "Soda", r1_d: "Cookies",
    r2_title: "Food Groups", r2_text: "We need different types of food: proteins, vegetables, fruits, and grains.",
    r2_fact1: "Chicken and beans give us protein for strong muscles",
    r2_q: "What do we get from vegetables?", r2_a: "Vitamins and fiber", r2_b: "Only sugar", r2_c: "Fat", r2_d: "Salt",
    r3_title: "Daily Hygiene", r3_text: "Wash your hands, brush your teeth, and keep clean to stay healthy.",
    r3_fact1: "Brush teeth twice a day to prevent cavities",
    r3_q: "When should you wash your hands?", r3_a: "Before eating", r3_b: "Only on Mondays", r3_c: "Never", r3_d: "Once per week",
    r4_title: "Sleep & Exercise", r4_text: "Get 8-10 hours of sleep and play outside to keep strong and happy.",
    r4_fact1: "Running, cycling, and sports are fun exercise",
    r4_q: "How many hours of sleep do you need?", r4_a: "8-10 hours", r4_b: "2 hours", r4_c: "14 hours", r4_d: "6 hours",
    r5_q1_q: "Which meal should we eat every day?", r5_q1_a: "Breakfast", r5_q1_b: "Candy", r5_q1_c: "Ice cream", r5_q1_d: "Cookies",
    r5_q2_q: "What helps teeth stay healthy?", r5_q2_a: "Brushing twice daily", r5_q2_b: "Eating candy", r5_q2_c: "Not rinsing", r5_q2_d: "Soda",
  },
  de: {
    r1_title: "Gesunde Lebensmittel", r1_text: "Obst, Gemüse und Getreide helfen unserem Körper, stark zu wachsen.",
    r1_fact1: "Äpfel, Karotten und Beeren sind gesunde Snacks",
    r1_q: "Welches Essen ist am gesündesten?", r1_a: "Apfel", r1_b: "Süßigkeit", r1_c: "Limonade", r1_d: "Kekse",
    r2_title: "Lebensmittelgruppen", r2_text: "Wir brauchen verschiedene Arten von Essen: Proteine, Gemüse, Obst und Getreide.",
    r2_fact1: "Hähnchen und Bohnen geben uns Protein für starke Muskeln",
    r2_q: "Was bekommen wir von Gemüse?", r2_a: "Vitamine und Ballaststoffe", r2_b: "Nur Zucker", r2_c: "Fett", r2_d: "Salz",
    r3_title: "Tägliche Hygiene", r3_text: "Wasch deine Hände, putze deine Zähne und bleib sauber, um gesund zu bleiben.",
    r3_fact1: "Zweimal täglich Zähne putzen verhindert Karies",
    r3_q: "Wann solltest du deine Hände waschen?", r3_a: "Vor dem Essen", r3_b: "Nur montags", r3_c: "Nie", r3_d: "Einmal pro Woche",
    r4_title: "Schlaf und Bewegung", r4_text: "Schlafe 8–10 Stunden und spiele draußen, um stark und glücklich zu bleiben.",
    r4_fact1: "Laufen, Radfahren und Sport sind lustige Bewegungen",
    r4_q: "Wie viele Stunden Schlaf brauchst du?", r4_a: "8–10 Stunden", r4_b: "2 Stunden", r4_c: "14 Stunden", r4_d: "6 Stunden",
    r5_q1_q: "Welche Mahlzeit sollten wir jeden Tag essen?", r5_q1_a: "Frühstück", r5_q1_b: "Süßigkeit", r5_q1_c: "Eis", r5_q1_d: "Kekse",
    r5_q2_q: "Was hilft den Zähnen, gesund zu bleiben?", r5_q2_a: "Zweimal täglich putzen", r5_q2_b: "Süßigkeiten essen", r5_q2_c: "Nicht spülen", r5_q2_d: "Limonade",
  },
  hu: {
    r1_title: "Egészséges élelmiszerek", r1_text: "A gyümölcs, zöldség és gabona segít testünknek erősen növekedni.",
    r1_fact1: "Az almák, sárgarépa és bogyók egészséges snackok",
    r1_q: "Melyik étel a legegészségesebb?", r1_a: "Alma", r1_b: "Cukorka", r1_c: "Szóda", r1_d: "Keksz",
    r2_title: "Élelmiszercsoportok", r2_text: "Különféle ételekre van szükségünk: fehérjék, zöldség, gyümölcs és gabona.",
    r2_fact1: "A csirke és bab fehérjét ad az erős izomhoz",
    r2_q: "Mit kapunk a zöldségből?", r2_a: "Vitaminok és rost", r2_b: "Csak cukrot", r2_c: "Zsírt", r2_d: "Sót",
    r3_title: "Napi higiénia", r3_text: "Moss kezet, mosoly fogat és maradj tiszta az egészség fenntartásához.",
    r3_fact1: "Naponta kétszer mosogass fogat a fogszuvasodás megelőzéséhez",
    r3_q: "Mikor kell kezet mosni?", r3_a: "Az étkezés előtt", r3_b: "Csak hétfőn", r3_c: "Soha", r3_d: "Hetente egyszer",
    r4_title: "Alvás és mozgás", r4_text: "Aludj 8–10 órát és játssz kívül, hogy erős és boldog maradj.",
    r4_fact1: "A futás, kerékpározás és sport szórakoztató mozgások",
    r4_q: "Hány óra alvásra van szükséged?", r4_a: "8–10 óra", r4_b: "2 óra", r4_c: "14 óra", r4_d: "6 óra",
    r5_q1_q: "Mely étkezéseket kell naponta megenni?", r5_q1_a: "Reggeli", r5_q1_b: "Cukorka", r5_q1_c: "Fagyi", r5_q1_d: "Keksz",
    r5_q2_q: "Mi segít a fogaknak egészségesnek maradni?", r5_q2_a: "Naponta kétszer mosni", r5_q2_b: "Cukorkákat enni", r5_q2_c: "Nem öblíteni", r5_q2_d: "Szódát inni",
  },
  ro: {
    r1_title: "Alimente sănătoase", r1_text: "Fructele, legumele și cerealele ajută corpul nostru să crească puternic.",
    r1_fact1: "Merele, morcovii și boagele sunt gustări sănătoase",
    r1_q: "Care aliment este cel mai sănătos?", r1_a: "Măr", r1_b: "Bomboană", r1_c: "Limonadă", r1_d: "Biscuiți",
    r2_title: "Grupurile alimentare", r2_text: "Avem nevoie de diferite tipuri de alimente: proteine, legume, fructe și cereale.",
    r2_fact1: "Puiul și fasolea ne dau proteine pentru mușchi puternici",
    r2_q: "Ce obținem din legume?", r2_a: "Vitamine și fibre", r2_b: "Doar zahăr", r2_c: "Grăsimi", r2_d: "Sare",
    r3_title: "Igiena zilnică", r3_text: "Spală-ți mâinile, curăță-ți dinții și rămâi curat ca să rămâi sănătos.",
    r3_fact1: "Curățarea dinților de două ori pe zi previne cariile",
    r3_q: "Când trebuie să-ți speli mâinile?", r3_a: "Înainte de a mânca", r3_b: "Doar luni", r3_c: "Niciodată", r3_d: "O dată pe săptămână",
    r4_title: "Somn și exercițiu", r4_text: "Dormi 8–10 ore și joacă-te afară ca să rămâi puternic și fericit.",
    r4_fact1: "Alergarea, bicicleta și sportul sunt exerciții distractive",
    r4_q: "Câte ore de somn ai nevoie?", r4_a: "8–10 ore", r4_b: "2 ore", r4_c: "14 ore", r4_d: "6 ore",
    r5_q1_q: "Care mese trebuie să mâncăm zilnic?", r5_q1_a: "Micul dejun", r5_q1_b: "Bomboană", r5_q1_c: "Înghețată", r5_q1_d: "Biscuiți",
    r5_q2_q: "Ce ajută dinții să rămână sănătoși?", r5_q2_a: "Curățarea de două ori zilnic", r5_q2_b: "Mâncare bomboane", r5_q2_c: "Nu clătire", r5_q2_d: "Băuturi cu sifon",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🍎</text></svg>
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

export default function HealthyBodyExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
