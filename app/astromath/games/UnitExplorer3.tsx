"use client";
// UnitExplorer3 — Units & Measurement Island (Length, Weight, Time - to 1000 units)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Length comparison ──────────────────────────────────────────────────

const LengthSvg = memo(function LengthSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="lenG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFEB99" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#lenG)" rx="16" />

      {/* cm ruler */}
      <line x1="20" y1="40" x2="220" y2="40" stroke="#FFD700" strokeWidth="3" opacity="0.7" />
      {Array.from({ length: 21 }, (_, i) => (
        <line key={i} x1={20 + i * 10} y1={i % 5 === 0 ? 30 : 35} x2={20 + i * 10} y2="45" stroke="#FFD700" strokeWidth={i % 5 === 0 ? 2 : 1} />
      ))}
      <text x="120" y="25" fontSize="11" fontWeight="bold" fill="#FFD700" textAnchor="middle">
        20 cm
      </text>

      {/* 1 meter = 100 cm explanation */}
      <text x="20" y="75" fontSize="12" fontWeight="bold" fill="#FFD700" opacity="0.8">
        {t.len_meter}
      </text>
      <text x="20" y="95" fontSize="12" fontWeight="bold" fill="#FFD700" opacity="0.8">
        {t.len_km}
      </text>

      {/* Info */}
      <text x="20" y="120" fontSize="11" fill="#FFD700" opacity="0.7">
        {t.len_info}
      </text>
    </svg>
  );
});

// ─── SVG: Weight comparison ──────────────────────────────────────────────────

const WeightSvg = memo(function WeightSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wgtG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFEB99" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wgtG)" rx="16" />

      {/* Scale 1 */}
      <g transform="translate(50, 40)">
        <line x1="0" y1="30" x2="0" y2="0" stroke="#FFD700" strokeWidth="2" />
        <line x1="-15" y1="30" x2="15" y2="30" stroke="#FFD700" strokeWidth="2" />
        <text x="0" y="50" fontSize="11" fontWeight="bold" fill="#FFD700" textAnchor="middle">
          500g
        </text>
      </g>

      {/* Scale 2 */}
      <g transform="translate(150, 40)">
        <line x1="0" y1="30" x2="0" y2="0" stroke="#FFD700" strokeWidth="2" />
        <line x1="-15" y1="30" x2="15" y2="30" stroke="#FFD700" strokeWidth="2" />
        <text x="0" y="50" fontSize="11" fontWeight="bold" fill="#FFD700" textAnchor="middle">
          500g
        </text>
      </g>

      {/* Info */}
      <text x="20" y="100" fontSize="12" fontWeight="bold" fill="#FFD700" opacity="0.8">
        {t.wgt_kg}
      </text>
      <text x="20" y="120" fontSize="11" fill="#FFD700" opacity="0.7">
        {t.wgt_info}
      </text>
    </svg>
  );
});

// ─── SVG: Time display ───────────────────────────────────────────────────────

const TimeSvg = memo(function TimeSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="timG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFEB99" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#timG)" rx="16" />

      {/* Clock circle */}
      <circle cx="120" cy="50" r="30" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.6" />
      <circle cx="120" cy="50" r="3" fill="#FFD700" />

      {/* Hour and minute hands - 3:00 */}
      <line x1="120" y1="50" x2="120" y2="30" stroke="#FFD700" strokeWidth="2" opacity="0.8" />
      <line x1="120" y1="50" x2="145" y2="50" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />

      {/* Time display */}
      <text x="120" y="100" fontSize="18" fontWeight="bold" fill="#FFD700" textAnchor="middle">
        3:00
      </text>

      {/* Info */}
      <text x="20" y="125" fontSize="12" fontWeight="bold" fill="#FFD700" opacity="0.8">
        {t.tim_hour}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Units & Measurement",
    // Topic 1: Length
    t1_title: "Measuring Length",
    t1_text: "We measure length (how long) with units! The smallest unit is centimeter (cm). 100 cm = 1 meter (m). 1000 m = 1 kilometer (km).",
    t1_b1: "cm = centimeter (smallest)",
    t1_b2: "m = meter (100 cm)",
    t1_b3: "km = kilometer (1000 m)",
    t1_inst: "Tap the numbers to convert: 5 m = ? cm",
    t1_h1: "1 meter = 100 cm",
    t1_h2: "So 5 × 100 = 500 cm",
    t1_q: "How many cm is 5 meters?",
    t1_q_50: "50 cm",
    t1_q_500: "500 cm",
    t1_q_5000: "5000 cm",
    t1_q_5: "5 cm",
    len_meter: "1 meter = 100 cm",
    len_km: "1 km = 1000 m",
    len_info: "Measure length with units",
    // Topic 2: Weight
    t2_title: "Measuring Weight",
    t2_text: "We measure weight (how heavy) with units! The smallest common unit is gram (g). 1000 g = 1 kilogram (kg). A pencil weighs about 5 grams.",
    t2_b1: "g = gram (small)",
    t2_b2: "kg = kilogram (1000 g)",
    t2_b3: "1 kg is 1000 grams",
    t2_inst: "Tap the numbers to convert: 3 kg = ? g",
    t2_h1: "1 kilogram = 1000 grams",
    t2_h2: "So 3 × 1000 = 3000 grams",
    t2_q: "3 kg = how many grams?",
    t2_q_3: "3 g",
    t2_q_300: "300 g",
    t2_q_3000: "3000 g",
    t2_q_30: "30 g",
    wgt_kg: "1 kg = 1000 g",
    wgt_info: "Measure weight with units",
    // Topic 3: Time
    t3_title: "Telling Time",
    t3_text: "We measure time with hours and minutes! There are 60 minutes in 1 hour. 24 hours in 1 day. An hour has 60 minutes: think of the clock with 12 numbers around it.",
    t3_b1: "1 hour = 60 minutes",
    t3_b2: "1 day = 24 hours",
    t3_b3: "Read the clock: hour hand + minute hand",
    t3_inst: "Tap the numbers to find: 2 hours = ? minutes",
    t3_h1: "1 hour = 60 minutes",
    t3_h2: "So 2 × 60 = 120 minutes",
    t3_q: "How many minutes are in 2 hours?",
    t3_q_2: "2 minutes",
    t3_q_60: "60 minutes",
    t3_q_120: "120 minutes",
    t3_q_240: "240 minutes",
    tim_hour: "1 hour = 60 minutes",
  },
  de: {
    explorer_title: "Einheiten & Messung",
    t1_title: "Längenmessung",
    t1_text: "Wir messen Länge (wie lang) mit Einheiten! Die kleinste Einheit ist Zentimeter (cm). 100 cm = 1 Meter (m). 1000 m = 1 Kilometer (km).",
    t1_b1: "cm = Zentimeter (kleinste)",
    t1_b2: "m = Meter (100 cm)",
    t1_b3: "km = Kilometer (1000 m)",
    t1_inst: "Tippe die Zahlen an: 5 m = ? cm",
    t1_h1: "1 Meter = 100 cm",
    t1_h2: "Also 5 × 100 = 500 cm",
    t1_q: "Wie viele cm sind 5 Meter?",
    t1_q_50: "50 cm",
    t1_q_500: "500 cm",
    t1_q_5000: "5000 cm",
    t1_q_5: "5 cm",
    len_meter: "1 Meter = 100 cm",
    len_km: "1 km = 1000 m",
    len_info: "Länge mit Einheiten messen",
    t2_title: "Gewichtsmessung",
    t2_text: "Wir messen Gewicht (wie schwer) mit Einheiten! Die kleinste übliche Einheit ist Gramm (g). 1000 g = 1 Kilogramm (kg). Ein Bleistift wiegt etwa 5 Gramm.",
    t2_b1: "g = Gramm (klein)",
    t2_b2: "kg = Kilogramm (1000 g)",
    t2_b3: "1 kg = 1000 Gramm",
    t2_inst: "Tippe die Zahlen an: 3 kg = ? g",
    t2_h1: "1 Kilogramm = 1000 Gramm",
    t2_h2: "Also 3 × 1000 = 3000 Gramm",
    t2_q: "3 kg = wie viele Gramm?",
    t2_q_3: "3 g",
    t2_q_300: "300 g",
    t2_q_3000: "3000 g",
    t2_q_30: "30 g",
    wgt_kg: "1 kg = 1000 g",
    wgt_info: "Gewicht mit Einheiten messen",
    t3_title: "Uhrzeit ablesen",
    t3_text: "Wir messen Zeit mit Stunden und Minuten! Es gibt 60 Minuten in 1 Stunde. 24 Stunden in 1 Tag. Eine Stunde hat 60 Minuten: denk an die Uhr mit 12 Zahlen.",
    t3_b1: "1 Stunde = 60 Minuten",
    t3_b2: "1 Tag = 24 Stunden",
    t3_b3: "Uhr ablesen: Stundenzeiger + Minutenzeiger",
    t3_inst: "Tippe die Zahlen an: 2 Stunden = ? Minuten",
    t3_h1: "1 Stunde = 60 Minuten",
    t3_h2: "Also 2 × 60 = 120 Minuten",
    t3_q: "Wie viele Minuten sind in 2 Stunden?",
    t3_q_2: "2 Minuten",
    t3_q_60: "60 Minuten",
    t3_q_120: "120 Minuten",
    t3_q_240: "240 Minuten",
    tim_hour: "1 Stunde = 60 Minuten",
  },
  hu: {
    explorer_title: "Egységek & Mérés",
    t1_title: "Hosszmérés",
    t1_text: "A hosszt (milyen hosszú) egységekkel mérjük! A legkisebb egység a centiméter (cm). 100 cm = 1 méter (m). 1000 m = 1 kilométer (km).",
    t1_b1: "cm = centiméter (legkisebb)",
    t1_b2: "m = méter (100 cm)",
    t1_b3: "km = kilométer (1000 m)",
    t1_inst: "Koppintsd a számokat: 5 m = ? cm",
    t1_h1: "1 méter = 100 cm",
    t1_h2: "Tehát 5 × 100 = 500 cm",
    t1_q: "Hány cm az 5 méter?",
    t1_q_50: "50 cm",
    t1_q_500: "500 cm",
    t1_q_5000: "5000 cm",
    t1_q_5: "5 cm",
    len_meter: "1 méter = 100 cm",
    len_km: "1 km = 1000 m",
    len_info: "Hossz mérése egységekkel",
    t2_title: "Súlymérés",
    t2_text: "A súlyt (milyen nehéz) egységekkel mérjük! A legkisebb közös egység a gramm (g). 1000 g = 1 kilogramm (kg). Egy ceruza körülbelül 5 gramm.",
    t2_b1: "g = gramm (kicsi)",
    t2_b2: "kg = kilogramm (1000 g)",
    t2_b3: "1 kg = 1000 gramm",
    t2_inst: "Koppintsd a számokat: 3 kg = ? g",
    t2_h1: "1 kilogramm = 1000 gramm",
    t2_h2: "Tehát 3 × 1000 = 3000 gramm",
    t2_q: "3 kg = hány gramm?",
    t2_q_3: "3 g",
    t2_q_300: "300 g",
    t2_q_3000: "3000 g",
    t2_q_30: "30 g",
    wgt_kg: "1 kg = 1000 g",
    wgt_info: "Súly mérése egységekkel",
    t3_title: "Idő leolvasása",
    t3_text: "Az időt órákkal és percekkel mérjük! 1 órában 60 perc van. 1 napban 24 óra van. Az óra 60 percből áll: gondolj az órára 12 számmal körül.",
    t3_b1: "1 óra = 60 perc",
    t3_b2: "1 nap = 24 óra",
    t3_b3: "Óra leolvasása: óra mutató + perc mutató",
    t3_inst: "Koppintsd a számokat: 2 óra = ? perc",
    t3_h1: "1 óra = 60 perc",
    t3_h2: "Tehát 2 × 60 = 120 perc",
    t3_q: "Hány perc van 2 órában?",
    t3_q_2: "2 perc",
    t3_q_60: "60 perc",
    t3_q_120: "120 perc",
    t3_q_240: "240 perc",
    tim_hour: "1 óra = 60 perc",
  },
  ro: {
    explorer_title: "Unități & Măsurare",
    t1_title: "Măsurarea lungimii",
    t1_text: "Măsurăm lungimea (cât de lungă) cu unități! Unitatea cea mai mică este centimetrul (cm). 100 cm = 1 metru (m). 1000 m = 1 kilometru (km).",
    t1_b1: "cm = centimetru (cel mai mic)",
    t1_b2: "m = metru (100 cm)",
    t1_b3: "km = kilometru (1000 m)",
    t1_inst: "Atinge numerele: 5 m = ? cm",
    t1_h1: "1 metru = 100 cm",
    t1_h2: "Deci 5 × 100 = 500 cm",
    t1_q: "Câți cm sunt 5 metri?",
    t1_q_50: "50 cm",
    t1_q_500: "500 cm",
    t1_q_5000: "5000 cm",
    t1_q_5: "5 cm",
    len_meter: "1 metru = 100 cm",
    len_km: "1 km = 1000 m",
    len_info: "Măsoară lungimea cu unități",
    t2_title: "Măsurarea greutății",
    t2_text: "Măsurăm greutatea (cât de greu) cu unități! Unitatea obișnuită cea mai mică este gramul (g). 1000 g = 1 kilogram (kg). Un creion cântărește aproximativ 5 grame.",
    t2_b1: "g = gram (mic)",
    t2_b2: "kg = kilogram (1000 g)",
    t2_b3: "1 kg = 1000 grame",
    t2_inst: "Atinge numerele: 3 kg = ? g",
    t2_h1: "1 kilogram = 1000 grame",
    t2_h2: "Deci 3 × 1000 = 3000 grame",
    t2_q: "3 kg = câte grame?",
    t2_q_3: "3 g",
    t2_q_300: "300 g",
    t2_q_3000: "3000 g",
    t2_q_30: "30 g",
    wgt_kg: "1 kg = 1000 g",
    wgt_info: "Măsoară greutatea cu unități",
    t3_title: "Citirea orei",
    t3_text: "Măsurăm timpul cu ore și minute! Sunt 60 de minute într-o oră. 24 de ore într-o zi. O oră are 60 de minute: gândește-te la ceas cu 12 numere în jurul.",
    t3_b1: "1 oră = 60 minute",
    t3_b2: "1 zi = 24 ore",
    t3_b3: "Citire ceas: orar + minutar",
    t3_inst: "Atinge numerele: 2 ore = ? minute",
    t3_h1: "1 oră = 60 minute",
    t3_h2: "Deci 2 × 60 = 120 minute",
    t3_q: "Câte minute sunt în 2 ore?",
    t3_q_2: "2 minute",
    t3_q_60: "60 minute",
    t3_q_120: "120 minute",
    t3_q_240: "240 minute",
    tim_hour: "1 oră = 60 minute",
  },
};

// ─── TOPICS DEFINITION ───────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // ─ Topic 1: Length ─
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <LengthSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 100, max: 500, start: 100, target: 300, step: 100,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_5", "t1_q_50", "t1_q_500", "t1_q_5000"],
      answer: "t1_q_500",
    },
  },

  // ─ Topic 2: Weight ─
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <WeightSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 1000, max: 3000, start: 1000, target: 2000, step: 500,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_3", "t2_q_30", "t2_q_300", "t2_q_3000"],
      answer: "t2_q_3000",
    },
  },

  // ─ Topic 3: Time ─
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <TimeSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 60, max: 180, start: 60, target: 120, step: 30,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_2", "t3_q_60", "t3_q_120", "t3_q_240"],
      answer: "t3_q_120",
    },
  },
];

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📏",
  topics: TOPICS,
  rounds: [],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function UnitExplorer3({ color = "#FFD700", lang, onDone, onClose }: Props) {
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
