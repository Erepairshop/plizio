"use client";
// G2MeasurementExplorer — Measurement for Grade 2 (island i9)
// Teaches: length (m/cm), time (hours/minutes), weight (kg/g)
// Modernized with centralized SVG library

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Measurement Explorer",
    t1_title: "Length: Meters and Centimeters",
    t1_text: "We measure length with a RULER. 1 meter = 100 centimeters (cm). Short things: cm (pencil ≈ 17 cm). Long things: m (door ≈ 2 m). 1 m = 100 cm!",
    t1_b1: "cm = centimeter (small things)",
    t1_b2: "m = meter (big things): 1 m = 100 cm",
    t1_b3: "50 cm = half a meter",
    t1_inst: "The pencil is 7 cm long — jump 7 steps on the ruler!",
    t1_h1: "Start at 0 cm on the ruler...",
    t1_h2: "Count 7 steps forward = 7 cm — tap 7!",
    t1_q: "A table is 80 cm wide. How many meters is that?",
    t1_q_08: "0.8 m", t1_q_800: "800 m", t1_q_8: "8 m", t1_q_80: "80 m",
    t2_title: "Time: Hours and Minutes",
    t2_text: "We read time on a CLOCK. The short hand = HOURS. The long hand = MINUTES. 1 hour = 60 minutes. Half past 3 = 3:30 (30 minutes past 3).",
    t2_b1: "Short hand = hours",
    t2_b2: "Long hand = minutes (full circle = 60 min)",
    t2_b3: "1 hour = 60 minutes",
    t2_inst: "The clock shows 3:00 — jump 30 minutes forward on the number line!",
    t2_h1: "3:00 → 30 more minutes = 3:30",
    t2_h2: "Half past 3 = 3:30 — tap 30!",
    t2_q: "How many minutes are in 2 hours?",
    t2_q_120: "120 minutes", t2_q_200: "200 minutes", t2_q_20: "20 minutes", t2_q_60: "60 minutes",
    t3_title: "Weight: Kilograms and Grams",
    t3_text: "We measure weight with a SCALE. 1 kilogram (kg) = 1000 grams (g). Light things: g (apple ≈ 200 g). Heavy things: kg (bag ≈ 5 kg). A balanced scale = equal weight!",
    t3_b1: "g = gram (light things)",
    t3_b2: "kg = kilogram (heavy things): 1 kg = 1000 g",
    t3_b3: "500 g = half a kilogram",
    t3_inst: "The scale is balanced with 2 kg on each side — jump to 2 on the number line!",
    t3_h1: "2 kg on left, same on right = balanced",
    t3_h2: "Each side = 2 kg — tap 2!",
    t3_q: "A watermelon weighs 3 kg. How many grams is that?",
    t3_q_3000: "3000 g", t3_q_300: "300 g", t3_q_30: "30 g", t3_q_3: "3 g",
  },
  de: {
    explorer_title: "Messen entdecken",
    t1_title: "Länge: Meter und Zentimeter",
    t1_text: "Wir messen Längen mit einem LINEAL. 1 Meter = 100 Zentimeter (cm). Kurze Dinge: cm (Bleistift ≈ 17 cm). Lange Dinge: m (Tür ≈ 2 m). 1 m = 100 cm!",
    t1_b1: "cm = Zentimeter (kleine Dinge)",
    t1_b2: "m = Meter (große Dinge): 1 m = 100 cm",
    t1_b3: "50 cm = ein halber Meter",
    t1_inst: "Der Bleistift ist 7 cm lang — springe 7 Schritte auf dem Lineal!",
    t1_h1: "Starte bei 0 cm auf dem Lineal...",
    t1_h2: "Zähle 7 Schritte = 7 cm — tippe auf 7!",
    t1_q: "Ein Tisch ist 80 cm breit. Wie viel Meter ist das?",
    t1_q_08: "0,8 m", t1_q_800: "800 m", t1_q_8: "8 m", t1_q_80: "80 m",
    t2_title: "Zeit: Stunden und Minuten",
    t2_text: "Wir lesen die Zeit auf einer UHR. Der kurze Zeiger = STUNDEN. Der lange Zeiger = MINUTEN. 1 Stunde = 60 Minuten. Halb vier = 3:30 (30 Minuten nach 3).",
    t2_b1: "Kurzer Zeiger = Stunden",
    t2_b2: "Langer Zeiger = Minuten (voller Kreis = 60 Min)",
    t2_b3: "1 Stunde = 60 Minuten",
    t2_inst: "Die Uhr zeigt 3:00 — springe 30 Minuten vorwärts!",
    t2_h1: "3:00 → 30 Minuten mehr = 3:30",
    t2_h2: "Halb vier = 3:30 — tippe auf 30!",
    t2_q: "Wie viele Minuten sind 2 Stunden?",
    t2_q_120: "120 Minuten", t2_q_200: "200 Minuten", t2_q_20: "20 Minuten", t2_q_60: "60 Minuten",
    t3_title: "Gewicht: Kilogramm und Gramm",
    t3_text: "Wir messen Gewichte mit einer WAAGE. 1 Kilogramm (kg) = 1000 Gramm (g). Leichte Dinge: g (Apfel ≈ 200 g). Schwere Dinge: kg (Tasche ≈ 5 kg). Ausgeglichene Waage = gleiches Gewicht!",
    t3_b1: "g = Gramm (leichte Dinge)",
    t3_b2: "kg = Kilogramm (schwere Dinge): 1 kg = 1000 g",
    t3_b3: "500 g = ein halbes Kilogramm",
    t3_inst: "Die Waage ist ausgeglichen mit je 2 kg — springe auf 2!",
    t3_h1: "2 kg links, gleiches rechts = ausgeglichen",
    t3_h2: "Jede Seite = 2 kg — tippe auf 2!",
    t3_q: "Eine Wassermelone wiegt 3 kg. Wie viele Gramm?",
    t3_q_3000: "3000 g", t3_q_300: "300 g", t3_q_30: "30 g", t3_q_3: "3 g",
  },
  hu: {
    explorer_title: "Mérések felfedezés",
    t1_title: "Hossz: méter és centiméter",
    t1_text: "A hosszt VONALZÓVAL mérjük. 1 méter = 100 centiméter (cm). Kis dolgok: cm (ceruza ≈ 17 cm). Nagy dolgok: m (ajtó ≈ 2 m). 1 m = 100 cm!",
    t1_b1: "cm = centiméter (kis dolgok)",
    t1_b2: "m = méter (nagy dolgok): 1 m = 100 cm",
    t1_b3: "50 cm = fél méter",
    t1_inst: "A ceruza 7 cm hosszú — ugorj 7 lépést a vonalzón!",
    t1_h1: "Indulj a 0 cm-ről a vonalzón...",
    t1_h2: "Számolj 7 lépést = 7 cm — koppints a 7-re!",
    t1_q: "Az asztal 80 cm széles. Hány méter ez?",
    t1_q_08: "0,8 m", t1_q_800: "800 m", t1_q_8: "8 m", t1_q_80: "80 m",
    t2_title: "Idő: órák és percek",
    t2_text: "Az időt ÓRÁRÓL olvassuk. A rövid mutató = ÓRÁKAT mutat. A hosszú mutató = PERCEKET mutat. 1 óra = 60 perc. Fél négy = 3:30 (3 után 30 perccel).",
    t2_b1: "Rövid mutató = óra",
    t2_b2: "Hosszú mutató = perc (teljes kör = 60 perc)",
    t2_b3: "1 óra = 60 perc",
    t2_inst: "Az óra 3:00-t mutat — ugorj 30 percet előre a számegyenesen!",
    t2_h1: "3:00 → 30 perc múlva = 3:30",
    t2_h2: "Fél négy = 3:30 — koppints a 30-ra!",
    t2_q: "Hány perc van 2 órában?",
    t2_q_120: "120 perc", t2_q_200: "200 perc", t2_q_20: "20 perc", t2_q_60: "60 perc",
    t3_title: "Tömeg: kilogramm és gramm",
    t3_text: "A tömeget MÉRLEGGEL mérjük. 1 kilogramm (kg) = 1000 gramm (g). Könnyű dolgok: g (alma ≈ 200 g). Nehéz dolgok: kg (táska ≈ 5 kg). Kiegyensúlyozott mérleg = egyenlő tömeg!",
    t3_b1: "g = gramm (könnyű dolgok)",
    t3_b2: "kg = kilogramm (nehéz dolgok): 1 kg = 1000 g",
    t3_b3: "500 g = fél kilogramm",
    t3_inst: "A mérleg egyensúlyban van, mindkét oldalon 2 kg — ugorj a 2-re!",
    t3_h1: "Bal oldalon 2 kg, jobb oldalon ugyanannyi = egyensúly",
    t3_h2: "Minden oldal = 2 kg — koppints a 2-re!",
    t3_q: "Egy görögdinnye 3 kg. Hány gramm ez?",
    t3_q_3000: "3000 g", t3_q_300: "300 g", t3_q_30: "30 g", t3_q_3: "3 g",
  },
  ro: {
    explorer_title: "Explorare măsurători",
    t1_title: "Lungime: metri și centimetri",
    t1_text: "Măsurăm lungimile cu o RIGLĂ. 1 metru = 100 centimetri (cm). Lucruri scurte: cm (creion ≈ 17 cm). Lucruri lungi: m (ușă ≈ 2 m). 1 m = 100 cm!",
    t1_b1: "cm = centimetru (lucruri mici)",
    t1_b2: "m = metru (lucruri mari): 1 m = 100 cm",
    t1_b3: "50 cm = jumătate de metru",
    t1_inst: "Creionul are 7 cm — sari 7 pași pe riglă!",
    t1_h1: "Pornești de la 0 cm pe riglă...",
    t1_h2: "Numără 7 pași = 7 cm — atinge 7!",
    t1_q: "O masă are 80 cm lățime. Câți metri este?",
    t1_q_08: "0,8 m", t1_q_800: "800 m", t1_q_8: "8 m", t1_q_80: "80 m",
    t2_title: "Timp: ore și minute",
    t2_text: "Citim timpul pe un CEAS. Acul scurt = ORE. Acul lung = MINUTE. 1 oră = 60 minute. Jumătate după trei = 3:30 (30 minute după ora 3).",
    t2_b1: "Ac scurt = ore",
    t2_b2: "Ac lung = minute (cerc complet = 60 min)",
    t2_b3: "1 oră = 60 minute",
    t2_inst: "Ceasul arată 3:00 — sari 30 minute înainte!",
    t2_h1: "3:00 → cu 30 minute mai mult = 3:30",
    t2_h2: "Jumătate după trei = 3:30 — atinge 30!",
    t2_q: "Câte minute sunt în 2 ore?",
    t2_q_120: "120 minute", t2_q_200: "200 minute", t2_q_20: "20 minute", t2_q_60: "60 minute",
    t3_title: "Greutate: kilograme și grame",
    t3_text: "Măsurăm greutatea cu un CÂNTAR. 1 kilogram (kg) = 1000 grame (g). Lucruri ușoare: g (măr ≈ 200 g). Lucruri grele: kg (geantă ≈ 5 kg). Cântar echilibrat = greutăți egale!",
    t3_b1: "g = gram (lucruri ușoare)",
    t3_b2: "kg = kilogram (lucruri grele): 1 kg = 1000 g",
    t3_b3: "500 g = jumătate de kilogram",
    t3_inst: "Cântarul este echilibrat cu câte 2 kg — atinge 2 pe dreapta numerelor!",
    t3_h1: "2 kg stânga, același dreapta = echilibrat",
    t3_h2: "Fiecare parte = 2 kg — atinge 2!",
    t3_q: "Un pepene cântărește 3 kg. Câte grame este?",
    t3_q_3000: "3000 g", t3_q_300: "300 g", t3_q_30: "30 g", t3_q_3: "3 g",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => null,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 12,
      step: 1,
      start: 0,
      target: 7,
      showJumps: true,
      jumpCount: 7,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_800", "t1_q_8", "t1_q_80", "t1_q_08"],
      answer: "t1_q_08",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => null,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 60,
      step: 5,
      start: 0,
      target: 30,
      showJumps: true,
      jumpCount: 6,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_200", "t2_q_20", "t2_q_60", "t2_q_120"],
      answer: "t2_q_120",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => null,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 5,
      step: 1,
      start: 0,
      target: 2,
      showJumps: true,
      jumpCount: 2,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_300", "t3_q_30", "t3_q_3", "t3_q_3000"],
      answer: "t3_q_3000",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📏",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const G2MeasurementExplorer = memo(function G2MeasurementExplorer({
  color = "#E879F9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="math_g2_measurement" color={color} lang={lang} onDone={onDone} />;
});

export default G2MeasurementExplorer;
