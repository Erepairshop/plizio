"use client";
// SpeedExplorer — Speed & Velocity, Acceleration (Geschwindigkeit und Beschleunigung) Klasse 7
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Speed & Velocity", r1_text: "Speed is how fast something moves. Velocity includes both speed and direction. Speed = distance ÷ time. v = d/t. Common units: m/s or km/h.",
    r1_fact1: "A car traveling 100 km in 2 hours has a speed of 50 km/h",
    r1_q: "A car travels 100 km in 2 hours. What is its speed?", r1_a: "50 km/h", r1_b: "25 km/h", r1_c: "200 km/h", r1_d: "100 km/h",
    r2_title: "Velocity & Direction", r2_text: "Velocity is speed with direction. For example, 50 km/h east is a velocity. Velocity can be negative (moving backwards). Speed is always positive.",
    r2_fact1: "A ball moving 10 m/s to the left has a velocity of -10 m/s if right is positive",
    r2_q: "What is the main difference between speed and velocity?", r2_a: "Velocity includes direction", r2_b: "They are the same", r2_c: "Speed includes direction", r2_d: "Velocity is always slower",
    r3_title: "Acceleration", r3_text: "Acceleration is how quickly velocity changes. a = Δv ÷ t. If speed increases, acceleration is positive. If speed decreases, acceleration is negative (deceleration). Units: m/s².",
    r3_fact1: "A car accelerating from 0 to 20 m/s in 5 seconds has an acceleration of 4 m/s²",
    r3_q: "A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?", r3_a: "4 m/s²", r3_b: "25 m/s²", r3_c: "0.25 m/s²", r3_d: "20 m/s²",
    r4_title: "Distance-Time Graphs", r4_text: "On a distance-time graph, a steeper slope means faster speed. A flat line means no movement. A curved line means acceleration.",
    r4_fact1: "A steep straight line on a distance-time graph shows constant high speed",
    r4_q: "On a distance-time graph, what does a steeper line mean?", r4_a: "Greater speed", r4_b: "Greater acceleration", r4_c: "Deceleration", r4_d: "No movement",
    r5_q1_q: "A person walks 500 meters in 10 minutes. What is the speed?", r5_q1_a: "50 m/min", r5_q1_b: "5 m/min", r5_q1_c: "500 m/min", r5_q1_d: "100 m/min",
    r5_q2_q: "A train decelerates (slows down). Its acceleration is...", r5_q2_a: "Negative", r5_q2_b: "Positive", r5_q2_c: "Zero", r5_q2_d: "Constant",
  },
  de: {
    r1_title: "Geschwindigkeit und Geschwindigkeit mit Richtung", r1_text: "Geschwindigkeit ist, wie schnell sich etwas bewegt. Geschwindigkeit mit Richtung (Velocity) umfasst Geschwindigkeit und Richtung. Geschwindigkeit = Entfernung ÷ Zeit. v = s/t. Einheiten: m/s oder km/h.",
    r1_fact1: "Ein Auto, das 100 km in 2 Stunden fährt, hat eine Geschwindigkeit von 50 km/h",
    r1_q: "Ein Auto fährt 100 km in 2 Stunden. Wie hoch ist seine Geschwindigkeit?", r1_a: "50 km/h", r1_b: "25 km/h", r1_c: "200 km/h", r1_d: "100 km/h",
    r2_title: "Geschwindigkeit mit Richtung und Richtung", r2_text: "Geschwindigkeit mit Richtung ist Geschwindigkeit plus Richtung. Zum Beispiel ist 50 km/h nach Osten eine Geschwindigkeit mit Richtung. Sie kann negativ sein (rückwärts). Die Geschwindigkeit ist immer positiv.",
    r2_fact1: "Ein Ball, der sich 10 m/s nach links bewegt, hat eine Geschwindigkeit mit Richtung von -10 m/s, wenn rechts positiv ist",
    r2_q: "Was ist der Hauptunterschied zwischen Geschwindigkeit und Geschwindigkeit mit Richtung?", r2_a: "Geschwindigkeit mit Richtung umfasst Richtung", r2_b: "Sie sind gleich", r2_c: "Geschwindigkeit umfasst Richtung", r2_d: "Geschwindigkeit mit Richtung ist immer langsamer",
    r3_title: "Beschleunigung", r3_text: "Beschleunigung ist die Geschwindigkeit der Geschwindigkeitsänderung. a = Δv ÷ t. Wenn die Geschwindigkeit zunimmt, ist die Beschleunigung positiv. Wenn sie abnimmt, ist die Beschleunigung negativ. Einheiten: m/s².",
    r3_fact1: "Ein Auto, das in 5 Sekunden von 0 auf 20 m/s beschleunigt, hat eine Beschleunigung von 4 m/s²",
    r3_q: "Ein Auto beschleunigt in 5 Sekunden von 0 auf 20 m/s. Welche Beschleunigung hat es?", r3_a: "4 m/s²", r3_b: "25 m/s²", r3_c: "0,25 m/s²", r3_d: "20 m/s²",
    r4_title: "Weg-Zeit-Diagramme", r4_text: "In einem Weg-Zeit-Diagramm bedeutet eine steilere Steigung eine höhere Geschwindigkeit. Eine flache Linie bedeutet keine Bewegung. Eine gekrümmte Linie bedeutet Beschleunigung.",
    r4_fact1: "Eine steile gerade Linie in einem Weg-Zeit-Diagramm zeigt konstant hohe Geschwindigkeit",
    r4_q: "Was bedeutet eine steilere Linie in einem Weg-Zeit-Diagramm?", r4_a: "Höhere Geschwindigkeit", r4_b: "Höhere Beschleunigung", r4_c: "Verzögerung", r4_d: "Keine Bewegung",
    r5_q1_q: "Eine Person geht 500 Meter in 10 Minuten. Wie hoch ist die Geschwindigkeit?", r5_q1_a: "50 m/min", r5_q1_b: "5 m/min", r5_q1_c: "500 m/min", r5_q1_d: "100 m/min",
    r5_q2_q: "Ein Zug verlangsamt sich (Verzögerung). Seine Beschleunigung ist...", r5_q2_a: "Negativ", r5_q2_b: "Positiv", r5_q2_c: "Null", r5_q2_d: "Konstant",
  },
  hu: {
    r1_title: "Sebesség és irányított sebesség", r1_text: "A sebesség azt mutatja, milyen gyorsan mozog valami. Az irányított sebesség (velocity) a sebességet és az irányt is tartalmazza. Sebesség = távolság ÷ idő. v = s/t. Közös egységek: m/s vagy km/h.",
    r1_fact1: "Egy autó, amely 100 km-t 2 óra alatt tesz meg, sebessége 50 km/h",
    r1_q: "Egy autó 100 km-t tesz meg 2 óra alatt. Mekkora a sebessége?", r1_a: "50 km/h", r1_b: "25 km/h", r1_c: "200 km/h", r1_d: "100 km/h",
    r2_title: "Irányított sebesség és irány", r2_text: "Az irányított sebesség a sebesség plusz az irány. Például a 50 km/h keleti irányban egy irányított sebesség. Lehet negatív (visszafelé mozog). A sebesség mindig pozitív.",
    r2_fact1: "Egy labda, amely 10 m/s-cel balra mozog, -10 m/s irányított sebességgel rendelkezik, ha jobbra pozitív",
    r2_q: "Mi a fő különbség a sebesség és az irányított sebesség között?", r2_a: "Az irányított sebesség tartalmazza az irányt", r2_b: "Ugyanazok", r2_c: "A sebesség tartalmazza az irányt", r2_d: "Az irányított sebesség mindig lassabb",
    r3_title: "Gyorsulás", r3_text: "A gyorsulás a sebesség változásának mértéke. a = Δv ÷ t. Ha a sebesség nő, a gyorsulás pozitív. Ha csökken, negatív (lassulás). Egységek: m/s².",
    r3_fact1: "Egy autó, amely 5 másodperc alatt 0-ról 20 m/s-re gyorsul, 4 m/s² gyorsulással rendelkezik",
    r3_q: "Egy autó 5 másodperc alatt 0-ról 20 m/s-re gyorsul. Mekkora a gyorsulása?", r3_a: "4 m/s²", r3_b: "25 m/s²", r3_c: "0,25 m/s²", r3_d: "20 m/s²",
    r4_title: "Út-idő diagramok", r4_text: "Az út-idő diagramban a meredekebb vonal nagyobb sebességet jelent. A vízszintes vonal azt jelenti, hogy nincs mozgás. A görbe vonal gyorsulást jelent.",
    r4_fact1: "Az út-idő diagramban a meredek egyenes vonal állandó magas sebességet mutat",
    r4_q: "Mit jelent a meredekebb vonal az út-idő diagramban?", r4_a: "Nagyobb sebesség", r4_b: "Nagyobb gyorsulás", r4_c: "Lassulás", r4_d: "Nincs mozgás",
    r5_q1_q: "Egy személy 500 métert tesz meg 10 perc alatt. Mekkora a sebessége?", r5_q1_a: "50 m/perc", r5_q1_b: "5 m/perc", r5_q1_c: "500 m/perc", r5_q1_d: "100 m/perc",
    r5_q2_q: "Egy vonat lassul (lassulás). A gyorsulása...", r5_q2_a: "Negatív", r5_q2_b: "Pozitív", r5_q2_c: "Nulla", r5_q2_d: "Állandó",
  },
  ro: {
    r1_title: "Viteză și viteza direcționată", r1_text: "Viteza este cât de repede se mișcă ceva. Viteza direcționată (velocity) include atât viteza, cât și direcția. Viteză = distanță ÷ timp. v = s/t. Unități comune: m/s sau km/h.",
    r1_fact1: "O mașină care călătorește 100 km în 2 ore are o viteză de 50 km/h",
    r1_q: "O mașină călătorește 100 km în 2 ore. Care este viteza ei?", r1_a: "50 km/h", r1_b: "25 km/h", r1_c: "200 km/h", r1_d: "100 km/h",
    r2_title: "Viteza direcționată și direcție", r2_text: "Viteza direcționată este viteza plus direcția. De exemplu, 50 km/h la est este o viteză direcționată. Poate fi negativă (se mișcă înapoi). Viteza este întotdeauna pozitivă.",
    r2_fact1: "O minge care se mișcă la 10 m/s spre stânga are o viteză direcționată de -10 m/s dacă dreapta este pozitivă",
    r2_q: "Care este diferența principală dintre viteză și viteza direcționată?", r2_a: "Viteza direcționată include direcția", r2_b: "Sunt la fel", r2_c: "Viteza include direcția", r2_d: "Viteza direcționată este întotdeauna mai lentă",
    r3_title: "Accelerație", r3_text: "Accelerația este cât de repede se schimbă viteza. a = Δv ÷ t. Dacă viteza crește, accelerația este pozitivă. Dacă scade, accelerația este negativă (decelerație). Unități: m/s².",
    r3_fact1: "O mașină care accelerează de la 0 la 20 m/s în 5 secunde are o accelerație de 4 m/s²",
    r3_q: "O mașină accelerează de la 0 la 20 m/s în 5 secunde. Care este accelerația ei?", r3_a: "4 m/s²", r3_b: "25 m/s²", r3_c: "0,25 m/s²", r3_d: "20 m/s²",
    r4_title: "Grafice distanță-timp", r4_text: "Pe un grafic distanță-timp, o pantă mai abruptă înseamnă o viteză mai mare. O linie plană înseamnă nicio mișcare. O linie curbă înseamnă accelerație.",
    r4_fact1: "O linie dreaptă abruptă pe un grafic distanță-timp arată o viteză constantă mare",
    r4_q: "Pe un grafic distanță-timp, ce înseamnă o linie mai abruptă?", r4_a: "Viteză mai mare", r4_b: "Accelerație mai mare", r4_c: "Decelerație", r4_d: "Nicio mișcare",
    r5_q1_q: "O persoană merge 500 de metri în 10 minute. Care este viteza?", r5_q1_a: "50 m/min", r5_q1_b: "5 m/min", r5_q1_c: "500 m/min", r5_q1_d: "100 m/min",
    r5_q2_q: "Un tren decelerează (încetinește). Accelerația lui este...", r5_q2_a: "Negativă", r5_q2_b: "Pozitivă", r5_q2_c: "Zero", r5_q2_d: "Constantă",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🏎️</text></svg>
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

export default function SpeedExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
