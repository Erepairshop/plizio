"use client";
// WaterExplorer — Water & Water Cycle (Wasserkreislauf) Grade 2
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Water States", r1_text: "Water can be solid ice, liquid water, or invisible water vapor in the air.",
    r1_fact1: "Ice cubes are frozen solid water",
    r1_q: "What is water when it freezes?", r1_a: "Ice", r1_b: "Vapor", r1_c: "Gas", r1_d: "Steam",
    r2_title: "Evaporation", r2_text: "When the sun heats water, it turns into invisible vapor and goes up into the sky.",
    r2_fact1: "Wet clothes dry in the sun because water evaporates",
    r2_q: "What happens when water heats up?", r2_a: "It becomes vapor", r2_b: "It gets colder", r2_c: "It stays the same", r2_d: "It freezes",
    r3_title: "Condensation", r3_text: "Cool air makes water vapor turn back into water droplets. This forms clouds.",
    r3_fact1: "Morning dew is water that condensed during the cold night",
    r3_q: "How are clouds made?", r3_a: "From condensed vapor", r3_b: "From ice", r3_c: "From rain", r3_d: "From wind",
    r4_title: "Precipitation", r4_text: "When clouds get heavy, water falls back to Earth as rain, snow, or sleet.",
    r4_fact1: "The water cycle starts again when rain falls",
    r4_q: "What is it called when water falls from clouds?", r4_a: "Precipitation", r4_b: "Evaporation", r4_c: "Condensation", r4_d: "Freezing",
    r5_q1_q: "Which is water in gas form?", r5_q1_a: "Vapor", r5_q1_b: "Ice", r5_q1_c: "Liquid", r5_q1_d: "Solid",
    r5_q2_q: "What helps water evaporate?", r5_q2_a: "Heat from the sun", r5_q2_b: "Cold air", r5_q2_c: "Wind only", r5_q2_d: "Rain",
  },
  de: {
    r1_title: "Wasserzustände", r1_text: "Wasser kann festes Eis, flüssiges Wasser oder unsichtbarer Wasserdampf in der Luft sein.",
    r1_fact1: "Eiswürfel sind gefrorenes festes Wasser",
    r1_q: "Wie heißt Wasser, wenn es gefriert?", r1_a: "Eis", r1_b: "Dampf", r1_c: "Gas", r1_d: "Wasserdampf",
    r2_title: "Verdunstung", r2_text: "Wenn die Sonne Wasser heizt, wird es unsichtbarer Dampf und geht in den Himmel.",
    r2_fact1: "Nasse Kleidung trocknet in der Sonne, weil Wasser verdunstet",
    r2_q: "Was passiert, wenn Wasser heiß wird?", r2_a: "Es wird Dampf", r2_b: "Es wird kälter", r2_c: "Es bleibt gleich", r2_d: "Es gefriert",
    r3_title: "Kondensation", r3_text: "Kühle Luft lässt Wasserdampf zurück zu Wassertropfen werden. Das bildet Wolken.",
    r3_fact1: "Morgentau ist Wasser, das in der kalten Nacht kondensiert",
    r3_q: "Wie entstehen Wolken?", r3_a: "Aus kondensiertem Dampf", r3_b: "Aus Eis", r3_c: "Aus Regen", r3_d: "Aus Wind",
    r4_title: "Niederschlag", r4_text: "Wenn Wolken schwer werden, fällt Wasser als Regen, Schnee oder Sleet auf die Erde.",
    r4_fact1: "Der Wasserkreislauf beginnt wieder, wenn es regnet",
    r4_q: "Wie heißt es, wenn Wasser aus Wolken fällt?", r4_a: "Niederschlag", r4_b: "Verdunstung", r4_c: "Kondensation", r4_d: "Gefrieren",
    r5_q1_q: "Welches ist Wasser in Gasform?", r5_q1_a: "Dampf", r5_q1_b: "Eis", r5_q1_c: "Flüssig", r5_q1_d: "Fest",
    r5_q2_q: "Was hilft Wasser zu verdunsten?", r5_q2_a: "Wärmevon der Sonne", r5_q2_b: "Kalte Luft", r5_q2_c: "Nur Wind", r5_q2_d: "Regen",
  },
  hu: {
    r1_title: "Vízállapotok", r1_text: "A víz lehet szilárd jég, folyékony víz vagy láthatatlan vízgőz a levegőben.",
    r1_fact1: "A jégkockák fagyott szilárd víz",
    r1_q: "Mi a víz, amikor megfagy?", r1_a: "Jég", r1_b: "Gőz", r1_c: "Gáz", r1_d: "Pára",
    r2_title: "Párolgás", r2_text: "Amikor a nap felmelegíti a vizet, láthatatlan gőzzé válik és felszáll az égbe.",
    r2_fact1: "A nedves ruhák a napban száradnak, mivel a víz elpárolog",
    r2_q: "Mi történik, amikor a víz felmelegszik?", r2_a: "Gőzzé válik", r2_b: "Lehűl", r2_c: "Ugyanaz marad", r2_d: "Megfagy",
    r3_title: "Kondenzáció", r3_text: "A hűvös levegő a vízgőzt visszavezeti vízcseppekké. Ez felhőket alkot.",
    r3_fact1: "A reggeli harmat az a víz, amely a hideg éjszakában kondenzálódott",
    r3_q: "Hogyan készülnek a felhők?", r3_a: "Kondenzálódott gőzből", r3_b: "Jégből", r3_c: "Esőből", r3_d: "Szélből",
    r4_title: "Csapadék", r4_text: "Amikor a felhők nehézzé válnak, a víz eső, hó vagy jégeső formájában esik vissza a Földre.",
    r4_fact1: "A vízkörkör újrakezdődik, amikor esik az eső",
    r4_q: "Milyen csapadék esik a felhőkből?", r4_a: "Csapadék", r4_b: "Párolgás", r4_c: "Kondenzáció", r4_d: "Fagyás",
    r5_q1_q: "Melyik gázhalmazállapotú víz?", r5_q1_a: "Gőz", r5_q1_b: "Jég", r5_q1_c: "Folyékony", r5_q1_d: "Szilárd",
    r5_q2_q: "Mi segíti a víz párologtatását?", r5_q2_a: "Hő a naptól", r5_q2_b: "Hideg levegő", r5_q2_c: "Csak szél", r5_q2_d: "Eső",
  },
  ro: {
    r1_title: "Stările apei", r1_text: "Apa poate fi gheață solidă, apă lichidă sau vapori de apă invizibili în aer.",
    r1_fact1: "Cuburile de gheață sunt apă solidă congelată",
    r1_q: "Ce este apa când se congeleaza?", r1_a: "Gheață", r1_b: "Abur", r1_c: "Gaz", r1_d: "Vapori",
    r2_title: "Evaporare", r2_text: "Când soarele încălzește apa, se transformă în aburi invizibili și se ridică în cer.",
    r2_fact1: "Hainele ude se usucă în soare pentru că apa se evaporă",
    r2_q: "Ce se întâmplă când apa se încălzește?", r2_a: "Devine aburi", r2_b: "Se răcește", r2_c: "Rămâne la fel", r2_d: "Se congeleaza",
    r3_title: "Condensare", r3_text: "Aerul rece transformă vaporii de apă înapoi în picături de apă. Aceasta formează nori.",
    r3_fact1: "Roua din dimineață este apa care s-a condensat în noaptea rece",
    r3_q: "Cum se formează norii?", r3_a: "Din aburi condensați", r3_b: "Din gheață", r3_c: "Din ploaie", r3_d: "Din vânt",
    r4_title: "Precipitații", r4_text: "Când norii devin grei, apa cade pe Pământ sub formă de ploaie, zăpadă sau lapoviță.",
    r4_fact1: "Ciclul apei începe din nou când cade ploaia",
    r4_q: "Cum se numește apa când cade din nori?", r4_a: "Precipitații", r4_b: "Evaporare", r4_c: "Condensare", r4_d: "Congelație",
    r5_q1_q: "Care este apa în formă gazoasă?", r5_q1_a: "Aburi", r5_q1_b: "Gheață", r5_q1_c: "Lichid", r5_q1_d: "Solid",
    r5_q2_q: "Ce ajută apa să se evapore?", r5_q2_a: "Căldura de la soare", r5_q2_b: "Aer rece", r5_q2_c: "Numai vânt", r5_q2_d: "Ploaie",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#0d47a1"/><text x="120" y="90" textAnchor="middle" fontSize="50">💧</text></svg>
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

export default function WaterExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
