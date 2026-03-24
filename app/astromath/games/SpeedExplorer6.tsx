"use client";
// MotionExplorer6 — Speed, Time & Distance for Grade 6 (island i4)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="motGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F87171" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#motGrad1)" rx="16" />
      {/* Magic Triangle: s / v * t */}
      <g transform="translate(120, 75)">
        <path d="M -50,40 L 50,40 L 0,-50 Z" fill="none" stroke="#B91C1C" strokeWidth="3" />
        <line x1="-38" y1="0" x2="38" y2="0" stroke="#B91C1C" strokeWidth="2" />
        <line x1="0" y1="0" x2="0" y2="40" stroke="#B91C1C" strokeWidth="2" />
        
        <text x="0" y="-10" fontSize="24" fontWeight="black" fill="#991B1B" textAnchor="middle">s</text>
        <text x="-20" y="30" fontSize="20" fontWeight="bold" fill="#B91C1C" textAnchor="middle">v</text>
        <text x="20" y="30" fontSize="20" fontWeight="bold" fill="#B91C1C" textAnchor="middle">t</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="motGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#motGrad2)" rx="16" />
      {/* Car moving along a line */}
      <g transform="translate(40, 80)">
        <line x1="0" y1="0" x2="160" y2="0" stroke="#1E40AF" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="120" y="-15" width="30" height="15" fill="#2563EB" rx="4" />
        <circle cx="128" cy="5" r="4" fill="#1E3A8A" />
        <circle cx="142" cy="5" r="4" fill="#1E3A8A" />
        
        <path d="M 0,-10 Q 60,-40 115,-15" fill="none" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="60" y="-35" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">s = 120 km</text>
        <text x="60" y="20" fontSize="12" fill="#1E40AF" textAnchor="middle">v = 60 km/h | t = 2 h</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="motGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#motGrad3)" rx="16" />
      {/* Average speed visual: Total distance / Total time */}
      <g transform="translate(120, 70)">
        <text x="0" y="5" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">distance</text>
        <line x1="-50" y1="12" x2="50" y2="12" stroke="#B45309" strokeWidth="2" />
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">time</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Motion & Speed",
    t1_title: "The Motion Triangle",
    t1_text: "Speed (v) tells us how much distance (s) we cover in a certain time (t). The formula is simple: s = v · t. If you know two, you can find the third!",
    t1_b1: "s = distance (km or m)",
    t1_b2: "v = speed (km/h or m/s)",
    t1_b3: "t = time (h or s)",
    t1_inst: "A cyclist travels at 20 km/h. How far do they get in 4 hours? Use the slider!",
    t1_h1: "Multiply speed by time: 20 * 4.",
    t1_h2: "Set the slider to 80 km.",
    t1_q: "If v = 50 km/h and t = 2 h, what is s?",
    t1_q_a: "100 km",
    t1_q_b: "25 km",
    t1_q_c: "52 km",
    t1_q_d: "150 km",
    t2_title: "Finding the Time",
    t2_text: "To find the time (t), we use the formula: t = s / v. For example, if you need to travel 120 km at a speed of 60 km/h, how long will it take?",
    t2_b1: "Time equals distance divided by speed",
    t2_b2: "Check your units (km and km/h match)",
    t2_b3: "Faster speed means shorter time",
    t2_inst: "Solve the equation: 60 * t = 120 (Find the time in hours!)",
    t2_step1: "Divide both sides by 60",
    t2_h1: "How many times does 60 fit into 120?",
    t2_h2: "The answer is 2 hours.",
    t2_q: "A train goes 300 km at 100 km/h. How many hours is the trip?",
    t2_q_a: "3 h",
    t2_q_b: "30 h",
    t2_q_c: "2 h",
    t2_q_d: "4 h",
    t3_title: "Average Speed",
    t3_text: "Usually, we don't go at the same speed all the time. Average speed is the TOTAL distance divided by the TOTAL time spent on the journey.",
    t3_b1: "Add up all the distances",
    t3_b2: "Add up all the times (including breaks!)",
    t3_b3: "Divide Total Distance / Total Time",
    t3_inst: "Look at the graph! A car traveled some distance. At x=4 hours, what was the distance (y)?",
    t3_h1: "Check the point where the line meets x=4.",
    t3_h2: "The y value is 200. Tap on 200.",
    t3_q: "If you travel 100 km in 2 hours and 200 km in 3 hours, what is the total distance?",
    t3_q_a: "300 km",
    t3_q_b: "150 km",
    t3_q_c: "5 h",
    t3_q_d: "60 km/h",
  },
  hu: {
    explorer_title: "Sebesség és mozgás",
    t1_title: "A bűvös háromszög",
    t1_text: "A sebesség (v) megmutatja, mekkora utat (s) teszünk meg adott idő (t) alatt. A képlet egyszerű: s = v · t. Ha kettőt ismersz, a harmadikat kiszámolhatod!",
    t1_b1: "s = út (km vagy m)",
    t1_b2: "v = sebesség (km/h vagy m/s)",
    t1_b3: "t = idő (h vagy s)",
    t1_inst: "Egy biciklis 20 km/h-val halad. Milyen messzire jut 4 óra alatt? Állítsd be a csúszkán!",
    t1_h1: "Szorozd össze a sebességet az idővel: 20 * 4.",
    t1_h2: "Húzd a csúszkát 80 km-re.",
    t1_q: "Ha v = 50 km/h és t = 2 h, mennyi az s?",
    t1_q_a: "100 km",
    t1_q_b: "25 km",
    t1_q_c: "52 km",
    t1_q_d: "150 km",
    t2_title: "Az idő kiszámítása",
    t2_text: "Az idő (t) kiszámításához az utat elosztjuk a sebességgel: t = s / v. Például, ha 120 km-t kell megtenned 60 km/h-val, mennyi ideig tart?",
    t2_b1: "Az idő az út és a sebesség hányadosa",
    t2_b2: "Figyelj a mértékegységekre!",
    t2_b3: "Nagyobb sebesség = rövidebb idő",
    t2_inst: "Oldd meg az egyenletet: 60 * t = 120 (Keresd a t értékét órában!)",
    t2_step1: "Oszd el mindkét oldalt 60-nal",
    t2_h1: "Hányszor van meg a 60 a 120-ban?",
    t2_h2: "Az eredmény 2 óra.",
    t2_q: "Egy vonat 300 km-t tesz meg 100 km/h-val. Hány órás az út?",
    t2_q_a: "3 h",
    t2_q_b: "30 h",
    t2_q_c: "2 h",
    t2_q_d: "4 h",
    t3_title: "Átlagsebesség",
    t3_text: "Ritkán haladunk végig ugyanazzal a sebességgel. Az átlagsebesség az ÖSSZES megtett út osztva az ÖSSZES eltelt idővel.",
    t3_b1: "Add össze a rész-utakat",
    t3_b2: "Add össze az időket (a pihenőket is!)",
    t3_b3: "Átlag = Összes út / Összes idő",
    t3_inst: "Nézd a grafikont! Egy autó haladását mutatja. Mennyi utat (y) tett meg x=4 óra alatt?",
    t3_h1: "Keresd meg az x=4 ponthoz tartozó y értéket.",
    t3_h2: "Az y érték 200. Koppints a 200-ra.",
    t3_q: "Ha 100 km-t mész 2 óra alatt, majd 200 km-t 3 óra alatt, mennyi az összes út?",
    t3_q_a: "300 km",
    t3_q_b: "150 km",
    t3_q_c: "5 h",
    t3_q_d: "60 km/h",
  },
  de: {
    explorer_title: "Geschwindigkeit & Bewegung",
    t1_title: "Das Formeldreieck",
    t1_text: "Die Geschwindigkeit (v) gibt an, welche Strecke (s) wir in einer bestimmten Zeit (t) zurücklegen. Die Formel lautet: s = v · t.",
    t1_b1: "s = Strecke (km oder m)",
    t1_b2: "v = Geschwindigkeit (km/h oder m/s)",
    t1_b3: "t = Zeit (h oder s)",
    t1_inst: "Ein Radfahrer fährt 20 km/h. Wie weit kommt er in 4 Stunden? Nutze den Regler!",
    t1_h1: "Multipliziere v mit t: 20 * 4.",
    t1_h2: "Stelle den Regler auf 80 km.",
    t1_q: "Wenn v = 50 km/h und t = 2 h, was ist s?",
    t1_q_a: "100 km",
    t1_q_b: "25 km",
    t1_q_c: "52 km",
    t1_q_d: "150 km",
    t2_title: "Die Zeit berechnen",
    t2_text: "Um die Zeit (t) zu finden, teilen wir die Strecke durch die Geschwindigkeit: t = s / v.",
    t2_b1: "Zeit ist Strecke geteilt durch Geschwindigkeit",
    t2_b2: "Achte auf die Einheiten",
    t2_b3: "Höheres Tempo bedeutet kürzere Zeit",
    t2_inst: "Löse die Gleichung: 60 * t = 120 (Finde die Zeit in Stunden!)",
    t2_step1: "Teile beide Seiten durch 60",
    t2_h1: "Wie oft passt 60 in 120?",
    t2_h2: "Das Ergebnis ist 2 Stunden.",
    t2_q: "Ein Zug fährt 300 km mit 100 km/h. Wie lange dauert die Fahrt?",
    t2_q_a: "3 h",
    t2_q_b: "30 h",
    t2_q_c: "2 h",
    t2_q_d: "4 h",
    t3_title: "Durchschnittsgeschwindigkeit",
    t3_text: "Meistens fahren wir nicht konstant gleich schnell. Die Durchschnittsgeschwindigkeit ist die GESAMTstrecke geteilt durch die GESAMTzeit.",
    t3_b1: "Addiere alle Teilstrecken",
    t3_b2: "Addiere alle Zeiten (auch Pausen!)",
    t3_b3: "Durchschnitt = Gesamtstrecke / Gesamtzeit",
    t3_inst: "Schau dir den Graphen an! Wie viel Strecke (y) wurde nach x=4 Stunden zurückgelegt?",
    t3_h1: "Suche den y-Wert bei x=4.",
    t3_h2: "Der y-Wert ist 200. Tippe auf 200.",
    t3_q: "100 km in 2h und 200 km in 3h. Was ist die Gesamtstrecke?",
    t3_q_a: "300 km",
    t3_q_b: "150 km",
    t3_q_c: "5 h",
    t3_q_d: "60 km/h",
  },
  ro: {
    explorer_title: "Mișcare și Viteză",
    t1_title: "Triunghiul Mișcării",
    t1_text: "Viteza (v) ne arată ce distanță (s) parcurgem într-un anumit timp (t). Formula este s = v · t.",
    t1_b1: "s = distanța (km sau m)",
    t1_b2: "v = viteza (km/h sau m/s)",
    t1_b3: "t = timpul (h sau s)",
    t1_inst: "Un biciclist merge cu 20 km/h. Ce distanță parcurge în 4 ore? Folosește cursorul!",
    t1_h1: "Înmulțește viteza cu timpul: 20 * 4.",
    t1_h2: "Setează cursorul la 80 km.",
    t1_q: "Dacă v = 50 km/h și t = 2 h, cât este s?",
    t1_q_a: "100 km",
    t1_q_b: "25 km",
    t1_q_c: "52 km",
    t1_q_d: "150 km",
    t2_title: "Calcularea Timpului",
    t2_text: "Pentru a afla timpul (t), împărțim distanța la viteză: t = s / v.",
    t2_b1: "Timpul este distanța împărțită la viteză",
    t2_b2: "Verifică unitățile de măsură",
    t2_b3: "Viteză mai mare înseamnă timp mai scurt",
    t2_inst: "Rezolvă ecuația: 60 * t = 120 (Află timpul în ore!)",
    t2_step1: "Împarte ambele părți la 60",
    t2_h1: "De câte ori intră 60 în 120?",
    t2_h2: "Răspunsul este 2 ore.",
    t2_q: "Un tren merge 300 km cu 100 km/h. Câte ore durează călătoria?",
    t2_q_a: "3 h",
    t2_q_b: "30 h",
    t2_q_c: "2 h",
    t2_q_d: "4 h",
    t3_title: "Viteza Medie",
    t3_text: "Viteza medie este distanța TOTALĂ împărțită la timpul TOTAL al călătoriei.",
    t3_b1: "Adună toate distanțele",
    t3_b2: "Adună toți timpii (inclusiv pauzele!)",
    t3_b3: "Media = Distanța Totală / Timp Total",
    t3_inst: "Uită-te la grafic! Ce distanță (y) a parcurs mașina în x=4 ore?",
    t3_h1: "Verifică valoarea y pentru x=4.",
    t3_h2: "Valoarea y este 200. Atinge 200.",
    t3_q: "Dacă parcurgi 100 km în 2 ore și 200 km în 3 ore, care este distanța totală?",
    t3_q_a: "300 km",
    t3_q_b: "150 km",
    t3_q_c: "5 h",
    t3_q_d: "60 km/h",
  },
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1,      // 1 hour
      basePrice: 20,     // 20 km
      targetValue: 4,    // 4 hours
      targetPrice: 80,   // 80 km
      unitName: "h",
      currency: "km",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "60 * t = 120",
      steps: [
        { 
          instruction: "t2_step1", 
          choices: [1, 2, 3, 4], 
          answer: 2, 
          equation: "t = 2" 
        }
      ],
      finalAnswer: 2,
      variable: "t",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "graph-plotter",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 50 },
        { x: 2, y: 100 },
        { x: 3, y: 150 },
        { x: 4, y: 200 }
      ],
      targetX: 4,
      targetY: 200,
      chartType: "line",
      xLabel: "h",
      yLabel: "km",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🚗",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const MotionExplorer6 = memo(function MotionExplorer6({
  color = "#EF4444",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_motion" color={color} lang={lang} onDone={onDone} />;
});

export default MotionExplorer6;
