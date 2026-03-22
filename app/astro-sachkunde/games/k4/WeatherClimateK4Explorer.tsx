"use client";
// WeatherClimateK4Explorer — Grade 4 Sachkunde: Weather & Climate

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Weather Systems",
    r1_text: "Weather is the atmospheric conditions (temperature, wind, rain) that change daily.",
    r1_fact1: "Weather: Daily atmospheric conditions 🌦️",
    r1_fact2: "Temperature: Measured in Celsius (°C) or Fahrenheit (°F) 🌡️",
    r1_fact3: "Wind: Moving air caused by pressure differences 💨",
    r1_fact4: "Precipitation: Rain, snow, sleet, hail falling from clouds 🌧️",

    r2_title: "Climate Zones",
    r2_text: "Climate is the average weather patterns over long periods. Earth has different climate zones.",
    r2_fact1: "Tropical: Hot and humid year-round 🏝️",
    r2_fact2: "Temperate: Four seasons with mild winters 🍂",
    r2_fact3: "Polar: Very cold with ice and snow ❄️",
    r2_fact4: "Desert: Hot and dry with little rain 🏜️",

    r3_title: "The Water Cycle",
    r3_text: "Water continuously moves between the ocean, atmosphere, and land.",
    r3_fact1: "Evaporation: Water heats up and becomes vapor 💧",
    r3_fact2: "Condensation: Vapor cools and forms clouds ☁️",
    r3_fact3: "Precipitation: Water falls as rain or snow 🌧️",
    r3_fact4: "Collection: Water collects in oceans and lakes 🌊",
    r3_q: "What is the first step of the water cycle?",
    r3_a: "Evaporation",
    r3_b: "Condensation",
    r3_c: "Precipitation",
    r3_d: "Collection",

    r4_title: "Weather Patterns",
    r4_text: "Different weather patterns bring different conditions. Understanding them helps us prepare.",
    r4_fact1: "High pressure: Usually brings clear, sunny weather ☀️",
    r4_fact2: "Low pressure: Usually brings storms and clouds 🌩️",
    r4_fact3: "Fronts: Boundaries between warm and cold air masses ⛈️",
    r4_fact4: "Seasons: Earth's tilt causes seasonal weather changes 🔄",
    r4_q: "What type of weather does low pressure usually bring?",
    r4_a: "Storms and clouds",
    r4_b: "Clear and sunny",
    r4_c: "Very hot",
    r4_d: "Very cold",

    r5_title: "Weather & Climate Review",
    q1_q: "Which climate zone is hot and humid year-round?",
    q1_a: "Tropical",
    q1_b: "Temperate",
    q1_c: "Polar",
    q1_d: "Desert",

    q2_q: "In the water cycle, what happens after condensation?",
    q2_a: "Precipitation",
    q2_b: "Evaporation",
    q2_c: "Collection",
    q2_d: "Freezing",

    q3_q: "What causes Earth to have seasons?",
    q3_a: "Earth's tilt as it orbits the Sun",
    q3_b: "Distance from the Sun",
    q3_c: "Ocean currents",
    q3_d: "Wind patterns",
  },
  de: {
    r1_title: "Wettersysteme",
    r1_text: "Wetter sind die Atmosphärenbedingungen (Temperatur, Wind, Regen), die sich täglich ändern.",
    r1_fact1: "Wetter: Tägliche atmosphärische Bedingungen 🌦️",
    r1_fact2: "Temperatur: Gemessen in Celsius (°C) oder Fahrenheit (°F) 🌡️",
    r1_fact3: "Wind: Bewegte Luft durch Druckunterschiede 💨",
    r1_fact4: "Niederschlag: Regen, Schnee, Graupel, Hagel 🌧️",

    r2_title: "Klimazonen",
    r2_text: "Klima sind die durchschnittlichen Wettermuster über lange Zeiträume. Die Erde hat verschiedene Klimazonen.",
    r2_fact1: "Tropisch: Heiß und feucht ganzjährig 🏝️",
    r2_fact2: "Gemäßigt: Vier Jahreszeiten mit milden Wintern 🍂",
    r2_fact3: "Polar: Sehr kalt mit Eis und Schnee ❄️",
    r2_fact4: "Wüste: Heiß und trocken mit wenig Regen 🏜️",

    r3_title: "Der Wasserkreislauf",
    r3_text: "Wasser bewegt sich ständig zwischen Ozean, Atmosphäre und Land.",
    r3_fact1: "Verdunstung: Wasser wird erhitzt und wird zu Dampf 💧",
    r3_fact2: "Kondensation: Dampf kühlt ab und bildet Wolken ☁️",
    r3_fact3: "Niederschlag: Wasser fällt als Regen oder Schnee 🌧️",
    r3_fact4: "Sammlung: Wasser sammelt sich in Ozeanen und Seen 🌊",
    r3_q: "Was ist der erste Schritt des Wasserkreislaufs?",
    r3_a: "Verdunstung",
    r3_b: "Kondensation",
    r3_c: "Niederschlag",
    r3_d: "Sammlung",

    r4_title: "Wettermuster",
    r4_text: "Verschiedene Wettermuster bringen unterschiedliche Bedingungen. Das Verständnis hilft uns zu planen.",
    r4_fact1: "Hochdruck: Bringt meist klares, sonniges Wetter ☀️",
    r4_fact2: "Tiefendruck: Bringt meist Stürme und Wolken 🌩️",
    r4_fact3: "Fronten: Grenzen zwischen warmen und kalten Luftmassen ⛈️",
    r4_fact4: "Jahreszeiten: Neigung der Erde verursacht Jahreszeiten 🔄",
    r4_q: "Was bringt Tiefendruck normalerweise mit sich?",
    r4_a: "Stürme und Wolken",
    r4_b: "Klar und sonnig",
    r4_c: "Sehr heiß",
    r4_d: "Sehr kalt",

    r5_title: "Wetter & Klima Überprüfung",
    q1_q: "Welche Klimazone ist ganzjährig heiß und feucht?",
    q1_a: "Tropisch",
    q1_b: "Gemäßigt",
    q1_c: "Polar",
    q1_d: "Wüste",

    q2_q: "Im Wasserkreislauf, was passiert nach Kondensation?",
    q2_a: "Niederschlag",
    q2_b: "Verdunstung",
    q2_c: "Sammlung",
    q2_d: "Einfrieren",

    q3_q: "Was verursacht, dass die Erde Jahreszeiten hat?",
    q3_a: "Neigung der Erde während ihrer Umlaufbahn",
    q3_b: "Entfernung von der Sonne",
    q3_c: "Meeresströmungen",
    q3_d: "Windmuster",
  },
  hu: {
    r1_title: "Időjárási rendszerek",
    r1_text: "Az időjárás az atmoszféra körülményei (hőmérséklet, szél, eső), amelyek napi szinten változnak.",
    r1_fact1: "Időjárás: Napi atmoszféra körülmények 🌦️",
    r1_fact2: "Hőmérséklet: Celsiusban (°C) vagy Fahrenheitben (°F) mérve 🌡️",
    r1_fact3: "Szél: Nyomáskülönbségek által okozott mozgó levegő 💨",
    r1_fact4: "Csapadék: Eső, hó, havas zápor, jégeső 🌧️",

    r2_title: "Éghajlati övezetek",
    r2_text: "Az éghajlat hosszú időszakon át az átlagos időjárási minták. A Földnek különböző éghajlati övezetei vannak.",
    r2_fact1: "Trópusi: Egész éven át meleg és páratartalom 🏝️",
    r2_fact2: "Mérsékelt: Négy évszak enyhe telekkel 🍂",
    r2_fact3: "Sarkvidék: Nagyon hideg jéggel és hóval ❄️",
    r2_fact4: "Sivatag: Meleg és száraz kevés csapadékkal 🏜️",

    r3_title: "A víz körforgása",
    r3_text: "A víz folyamatosan mozog az óceán, atmoszféra és föld között.",
    r3_fact1: "Párolgás: Víz felforr és gőzöt képez 💧",
    r3_fact2: "Kondenzáció: Gőz lehűl és felhőket alkot ☁️",
    r3_fact3: "Csapadék: Víz esik, mint eső vagy hó 🌧️",
    r3_fact4: "Gyűjtés: Víz gyűlik az óceánokba és tavakba 🌊",
    r3_q: "Mi az első lépés a víz körforgásában?",
    r3_a: "Párolgás",
    r3_b: "Kondenzáció",
    r3_c: "Csapadék",
    r3_d: "Gyűjtés",

    r4_title: "Időjárási minták",
    r4_text: "A különböző időjárási minták különböző körülményeket hoznak. Az értelmezés segít felkészülni.",
    r4_fact1: "Magas nyomás: Általában tiszta, napos időt hoz ☀️",
    r4_fact2: "Alacsony nyomás: Viharokat és felhőket hoz 🌩️",
    r4_fact3: "Frontok: Meleg és hideg levegő tömegek közötti határok ⛈️",
    r4_fact4: "Évszakok: Föld dőlésszöge okozza az évszakos időjárást 🔄",
    r4_q: "Milyen időjárást hoz általában az alacsony nyomás?",
    r4_a: "Viharokat és felhőket",
    r4_b: "Tiszta és napos",
    r4_c: "Nagyon meleg",
    r4_d: "Nagyon hideg",

    r5_title: "Időjárás és éghajlat felülvizsgálat",
    q1_q: "Melyik éghajlati övezet meleg és páratartalom egész éven?",
    q1_a: "Trópusi",
    q1_b: "Mérsékelt",
    q1_c: "Sarkvidék",
    q1_d: "Sivatag",

    q2_q: "A víz körforgásában, mi történik a kondenzáció után?",
    q2_a: "Csapadék",
    q2_b: "Párolgás",
    q2_c: "Gyűjtés",
    q2_d: "Fagyás",

    q3_q: "Mi okozza, hogy a Földnek vannak évszakai?",
    q3_a: "Föld dőlésszöge pályáján",
    q3_b: "Naptól való távolság",
    q3_c: "Óceáni áramlások",
    q3_d: "Szélminták",
  },
  ro: {
    r1_title: "Sisteme meteorologice",
    r1_text: "Vremea sunt condițiile atmosferice (temperatură, vânt, ploaie) care se schimbă zilnic.",
    r1_fact1: "Vreme: Condiții atmosferice zilnice 🌦️",
    r1_fact2: "Temperatură: Măsurată în Celsius (°C) sau Fahrenheit (°F) 🌡️",
    r1_fact3: "Vânt: Aer în mișcare din diferențe de presiune 💨",
    r1_fact4: "Precipitație: Ploaie, zăpadă, lapoviță, grindină 🌧️",

    r2_title: "Zone climatice",
    r2_text: "Clima sunt modelele meteorologice medii pe perioade lungi. Pământul are zone climatice diferite.",
    r2_fact1: "Tropical: Cald și umed tot anul 🏝️",
    r2_fact2: "Temperat: Patru anotimpuri cu ierni ușoare 🍂",
    r2_fact3: "Polar: Foarte rece cu gheață și zăpadă ❄️",
    r2_fact4: "Deșert: Cald și uscat cu puțină ploaie 🏜️",

    r3_title: "Ciclul apei",
    r3_text: "Apa se mișcă continuu între ocean, atmosferă și uscat.",
    r3_fact1: "Evaporare: Apa se încălzește și devine vapori 💧",
    r3_fact2: "Condensare: Vapori se răcesc și formează nori ☁️",
    r3_fact3: "Precipitație: Apa cade ca ploaie sau zăpadă 🌧️",
    r3_fact4: "Colectare: Apa se colectează în oceane și lacuri 🌊",
    r3_q: "Care este primul pas al ciclului apei?",
    r3_a: "Evaporare",
    r3_b: "Condensare",
    r3_c: "Precipitație",
    r3_d: "Colectare",

    r4_title: "Modele meteorologice",
    r4_text: "Diferitele modele meteorologice aduc condiții diferite. Înțelegerea ajută să ne pregătim.",
    r4_fact1: "Presiune ridicată: Aduce obicei vreme clară și soareoasă ☀️",
    r4_fact2: "Presiune joasă: Aduce obicei furtuni și nori 🌩️",
    r4_fact3: "Fronturi: Granițe între mase de aer cald și rece ⛈️",
    r4_fact4: "Anotimpuri: Înclinația Pământului provoacă anotimpuri 🔄",
    r4_q: "Ce tip de vreme aduce obicei presiunea joasă?",
    r4_a: "Furtuni și nori",
    r4_b: "Clar și soare",
    r4_c: "Foarte cald",
    r4_d: "Foarte rece",

    r5_title: "Revizuire vreme și climă",
    q1_q: "Care zonă climatică este caldă și umedă tot anul?",
    q1_a: "Tropical",
    q1_b: "Temperat",
    q1_c: "Polar",
    q1_d: "Deșert",

    q2_q: "În ciclul apei, ce se întâmplă după condensare?",
    q2_a: "Precipitație",
    q2_b: "Evaporare",
    q2_c: "Colectare",
    q2_d: "Îngheț",

    q3_q: "Ce provoacă Pământul să aibă anotimpuri?",
    q3_a: "Înclinația Pământului pe orbita sa",
    q3_b: "Distanță de la Soare",
    q3_c: "Curenți oceanici",
    q3_d: "Modele de vânt",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#85C1E9" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌦️
          </text>
        </svg>
      ),
      bulletKeys: ["r1_fact1", "r1_fact2", "r1_fact3", "r1_fact4"],
    },
    {
      type: "info",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#5DADE2" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌍
          </text>
        </svg>
      ),
      bulletKeys: ["r2_fact1", "r2_fact2", "r2_fact3", "r2_fact4"],
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#3498DB" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            💧
          </text>
        </svg>
      ),
      bulletKeys: ["r3_fact1", "r3_fact2", "r3_fact3", "r3_fact4"],
      questions: [
        {
          question: "r3_q",
          choices: ["r3_a", "r3_b", "r3_c", "r3_d"],
          answer: "r3_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2E86C1" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            ⛈️
          </text>
        </svg>
      ),
      bulletKeys: ["r4_fact1", "r4_fact2", "r4_fact3", "r4_fact4"],
      questions: [
        {
          question: "r4_q",
          choices: ["r4_a", "r4_b", "r4_c", "r4_d"],
          answer: "r4_a",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_title",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1B4965" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            📚
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q1_q",
          choices: ["q1_a", "q1_b", "q1_c", "q1_d"],
          answer: "q1_a",
        },
        {
          question: "q2_q",
          choices: ["q2_a", "q2_b", "q2_c", "q2_d"],
          answer: "q2_a",
        },
        {
          question: "q3_q",
          choices: ["q3_a", "q3_b", "q3_c", "q3_d"],
          answer: "q3_a",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function WeatherClimateK4Explorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />
  );
}
