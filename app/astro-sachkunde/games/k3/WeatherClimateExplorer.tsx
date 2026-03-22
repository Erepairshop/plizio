"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Weather Tools", tx1: "Thermometers measure temperature. Barometers measure air pressure.",
    t2: "Weather Types", tx2: "We have sunny, cloudy, rainy, and snowy weather.",
    t3: "Seasons", tx3: "Spring, summer, autumn, and winter bring different weather.",
    t4: "Water Cycle", tx4: "Water evaporates, condenses, and falls as rain.",
    t5: "Climate Zones", tx5: "Different areas have hot, cold, or rainy climates.",
    q1: "What measures temperature?", q1a: "Thermometer", q1b: "Barometer", q1c: "Compass", q1d: "Map",
    q2: "Which is a weather type?", q2a: "Rainy", q2b: "Angry", q2c: "Happy", q2d: "Sad",
    q3: "How many seasons are there?", q3a: "4", q3b: "3", q3c: "5", q3d: "12",
    q4: "Water falls from clouds as:", q4a: "Rain", q4b: "Wind", q4c: "Sun", q4d: "Snow only",
    q5: "What is a climate zone?", q5a: "Area with same weather", q5b: "A mountain", q5c: "A desert only", q5d: "A city",
  },
  de: {
    t1: "Wetter-Instrumente", tx1: "Thermometer messen die Temperatur. Barometer messen den Luftdruck.",
    t2: "Wettertypen", tx2: "Wir haben sonniges, bewölktes, regnerisches und schneeiges Wetter.",
    t3: "Jahreszeiten", tx3: "Frühling, Sommer, Herbst und Winter bringen verschiedenes Wetter.",
    t4: "Wasserkreislauf", tx4: "Wasser verdunstet, kondensiert und fällt als Regen.",
    t5: "Klimazonen", tx5: "Verschiedene Gegenden haben heiße, kalte oder regnerische Klimazonen.",
    q1: "Was misst die Temperatur?", q1a: "Thermometer", q1b: "Barometer", q1c: "Kompass", q1d: "Karte",
    q2: "Welches ist ein Wettertyp?", q2a: "Regnerisch", q2b: "Wütend", q2c: "Glücklich", q2d: "Traurig",
    q3: "Wie viele Jahreszeiten gibt es?", q3a: "4", q3b: "3", q3c: "5", q3d: "12",
    q4: "Wasser fällt aus Wolken als:", q4a: "Regen", q4b: "Wind", q4c: "Sonne", q4d: "Nur Schnee",
    q5: "Was ist eine Klimazone?", q5a: "Gegend mit gleichem Wetter", q5b: "Ein Berg", q5c: "Ein Wüste", q5d: "Eine Stadt",
  },
  hu: {
    t1: "Időjárási eszközök", tx1: "A hőmérők mérték a hőmérsékletet. A barométerek mérték a légnyomást.",
    t2: "Időjárási típusok", tx2: "Van napsütötte, felhős, esős és havas időnk.",
    t3: "Évszakok", tx3: "A tavasz, nyár, ősz és tél különböző időjárást hoznak.",
    t4: "Víz körforgása", tx4: "A víz elpárolog, lecsapódik és esőként esik.",
    t5: "Éghajlati zónák", tx5: "Különböző területek meleg, hideg vagy esős éghajlattal rendelkeznek.",
    q1: "Mi méri a hőmérsékletet?", q1a: "Hőmérő", q1b: "Barométer", q1c: "Iránytű", q1d: "Térkép",
    q2: "Melyik időjárási típus?", q2a: "Esős", q2b: "Dühös", q2c: "Boldog", q2d: "Szomorú",
    q3: "Hány évszak van?", q3a: "4", q3b: "3", q3c: "5", q3d: "12",
    q4: "A víz felhőkből esik mint:", q4a: "Eső", q4b: "Szél", q4c: "Nap", q4d: "Csak hó",
    q5: "Mi az éghajlati zóna?", q5a: "Terület azonos időjárással", q5b: "Egy hegy", q5c: "Egy sivatag", q5d: "Egy város",
  },
  ro: {
    t1: "Instrumente meteo", tx1: "Termometrele măsoară temperatura. Barometrele măsoară presiunea aerului.",
    t2: "Tipuri de vreme", tx2: "Avem vreme însorită, noroasă, ploioasă și zăpezii.",
    t3: "Anotimpuri", tx3: "Primăvara, vara, toamna și iarna aduc vreme diferită.",
    t4: "Ciclul apei", tx4: "Apa se evaporă, se condensează și cade ca ploaie.",
    t5: "Zone climatice", tx5: "Diferite zone au climate calde, reci sau ploioase.",
    q1: "Ce măsoară temperatura?", q1a: "Termometru", q1b: "Barometru", q1c: "Busolă", q1d: "Hartă",
    q2: "Care este un tip de vreme?", q2a: "Ploios", q2b: "Supărat", q2c: "Fericit", q2d: "Trist",
    q3: "Câte anotimpuri sunt?", q3a: "4", q3b: "3", q3c: "5", q3d: "12",
    q4: "Apa cade din nori ca:", q4a: "Ploaie", q4b: "Vânt", q4c: "Soare", q4d: "Doar zăpadă",
    q5: "Ce este o zonă climatică?", q5a: "Zonă cu aceeași vreme", q5b: "Un munte", q5c: "Un deșert", q5d: "Un oraș",
  },
};

function WeatherSvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e3e" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#85C1E9">🌦️</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <WeatherSvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <WeatherSvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <WeatherSvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <WeatherSvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <WeatherSvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function WeatherClimateExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
