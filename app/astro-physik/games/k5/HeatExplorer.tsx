"use client";
// HeatExplorer — Heat & States of Matter (Wärme & Aggregatzustände) Grade 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Temperature & Heat", r1_text: "Temperature measures how hot or cold something is. Heat is energy that moves from hot to cold. Water freezes at 0°C and boils at 100°C.",
    r1_fact1: "Temperature is measured in degrees Celsius (°C) or Fahrenheit (°F)",
    r1_q: "At what temperature does water boil?", r1_a: "100°C", r1_b: "0°C", r1_c: "50°C", r1_d: "200°C",
    r2_title: "Heat Transfer", r2_text: "Heat moves from hot objects to cold objects in three ways: conduction (through solids), convection (through fluids), and radiation (through waves).",
    r2_fact1: "A metal spoon in hot soup gets hot by conduction",
    r2_q: "How does a metal spoon get hot in soup?", r2_a: "Conduction", r2_b: "Radiation", r2_c: "Evaporation", r2_d: "Magnetism",
    r3_title: "States of Matter", r3_text: "Matter has three states: solid (fixed shape and volume), liquid (fixed volume but flows), and gas (fills any container). Particles move faster when heated.",
    r3_fact1: "Particles move fastest in gases, slowest in solids",
    r3_q: "In which state do particles move the fastest?", r3_a: "Gas", r3_b: "Solid", r3_c: "Liquid", r3_d: "They all move the same",
    r4_title: "Melting, Boiling & Freezing", r4_text: "When ice heats up, it melts into water (solid to liquid). When water heats up, it boils into steam (liquid to gas). Freezing is the opposite of melting.",
    r4_fact1: "Ice melts at 0°C and water boils at 100°C",
    r4_q: "What is it called when ice becomes water?", r4_a: "Melting", r4_b: "Boiling", r4_c: "Evaporation", r4_d: "Condensation",
    r5_q1_q: "Which process happens when steam turns back into liquid water?", r5_q1_a: "Condensation", r5_q1_b: "Melting", r5_q1_c: "Evaporation", r5_q1_d: "Boiling",
    r5_q2_q: "How does heat travel through a vacuum (empty space)?", r5_q2_a: "Radiation", r5_q2_b: "Conduction", r5_q2_c: "Convection", r5_q2_d: "It cannot travel",
  },
  de: {
    r1_title: "Temperatur und Wärme", r1_text: "Die Temperatur misst, wie heiß oder kalt etwas ist. Wärme ist Energie, die von heiß zu kalt fließt. Wasser gefriert bei 0 °C und kocht bei 100 °C.",
    r1_fact1: "Temperatur wird in Grad Celsius (°C) oder Fahrenheit (°F) gemessen",
    r1_q: "Bei welcher Temperatur kocht Wasser?", r1_a: "100 °C", r1_b: "0 °C", r1_c: "50 °C", r1_d: "200 °C",
    r2_title: "Wärmeleitung", r2_text: "Wärme fließt von heißen Objekten zu kalten Objekten auf drei Arten: Leitung (durch Feststoffe), Strömung (durch Flüssigkeiten) und Strahlung (durch Wellen).",
    r2_fact1: "Ein Metalllöffel in heißer Suppe wird durch Leitung heiß",
    r2_q: "Wie wird ein Metalllöffel in Suppe heiß?", r2_a: "Leitung", r2_b: "Strahlung", r2_c: "Verdampfung", r2_d: "Magnetismus",
    r3_title: "Aggregatzustände", r3_text: "Materie hat drei Zustände: fest (feste Form und Volumen), flüssig (festes Volumen, aber fließt) und gasförmig (füllt jeden Behälter). Teilchen bewegen sich schneller, wenn sie erhitzt werden.",
    r3_fact1: "Teilchen bewegen sich in Gasen am schnellsten und in Feststoffen am langsamsten",
    r3_q: "In welchem Zustand bewegen sich Teilchen am schnellsten?", r3_a: "Gas", r3_b: "Fest", r3_c: "Flüssig", r3_d: "Sie bewegen sich alle gleich",
    r4_title: "Schmelzen, Kochen und Gefrieren", r4_text: "Wenn Eis sich erwärmt, schmilzt es zu Wasser (Fest zu Flüssig). Wenn Wasser sich erwärmt, kocht es zu Dampf (Flüssig zu Gas). Gefrieren ist das Gegenteil von Schmelzen.",
    r4_fact1: "Eis schmilzt bei 0 °C und Wasser kocht bei 100 °C",
    r4_q: "Wie nennt man es, wenn Eis zu Wasser wird?", r4_a: "Schmelzen", r4_b: "Kochen", r4_c: "Verdampfung", r4_d: "Kondensation",
    r5_q1_q: "Welcher Prozess findet statt, wenn Dampf wieder zu flüssigem Wasser wird?", r5_q1_a: "Kondensation", r5_q1_b: "Schmelzen", r5_q1_c: "Verdampfung", r5_q1_d: "Kochen",
    r5_q2_q: "Wie reist Wärme durch ein Vakuum (leeren Raum)?", r5_q2_a: "Strahlung", r5_q2_b: "Leitung", r5_q2_c: "Strömung", r5_q2_d: "Sie kann nicht reisen",
  },
  hu: {
    r1_title: "Hőmérséklet és hőenergia", r1_text: "A hőmérséklet azt méri, hogy valami milyen meleg vagy hideg. A hő energia, amely a forróból a hidegbe áramlik. A víz 0 °C-on fagy és 100 °C-on forr.",
    r1_fact1: "A hőmérsékletet Celsius-fokban (°C) vagy Fahrenheit-ben (°F) mérik",
    r1_q: "Milyen hőmérsékleten forr a víz?", r1_a: "100 °C", r1_b: "0 °C", r1_c: "50 °C", r1_d: "200 °C",
    r2_title: "Hőátvitel", r2_text: "A hő három módon áramlik a forró objektumokból a hideg objektumokba: vezetés (szilárd anyagokon keresztül), konvekció (folyadékokon keresztül) és sugárzás (hullámok keresztül).",
    r2_fact1: "Egy fém kanál a forró levesben vezetés által válik forróvá",
    r2_q: "Hogyan válik forróvá egy fém kanál a levesben?", r2_a: "Vezetés", r2_b: "Sugárzás", r2_c: "Párolgás", r2_d: "Mágnesesség",
    r3_title: "Az anyag halmazállapotai", r3_text: "Az anyagnak három halmazállapota van: szilárd (rögzített forma és térfogat), folyékony (rögzített térfogat, de folyik) és gáz (bármelyik edényt kitölt). A részecskék gyorsabban mozognak, ha felmelegednek.",
    r3_fact1: "A részecskék a gázokban mozognak a leggyorsabban, a szilárd anyagban a leglassabban",
    r3_q: "Melyik halmazállapotban mozognak a részecskék a leggyorsabban?", r3_a: "Gáz", r3_b: "Szilárd", r3_c: "Folyékony", r3_d: "Mind egyformán mozognak",
    r4_title: "Olvadás, forrás és fagyás", r4_text: "Ha a jég felmelegszik, vívá olvad (szilárd folyadékká válik). Ha a víz felmelegszik, forrá változik vízgőzzé (folyékony gázzá válik). A fagyás az olvadás ellentéte.",
    r4_fact1: "A jég 0 °C-on olvad, a víz 100 °C-on forr",
    r4_q: "Hogyan hívják azt a folyamatot, amikor a jég vívá válik?", r4_a: "Olvadás", r4_b: "Forrás", r4_c: "Párolgás", r4_d: "Lecsapódás",
    r5_q1_q: "Melyik folyamat történik, amikor a vízgőz vissza folyadék vívá válik?", r5_q1_a: "Lecsapódás", r5_q1_b: "Olvadás", r5_q1_c: "Párolgás", r5_q1_d: "Forrás",
    r5_q2_q: "Hogyan utazik a hő az űrön (üres téren) keresztül?", r5_q2_a: "Sugárzás", r5_q2_b: "Vezetés", r5_q2_c: "Konvekció", r5_q2_d: "Nem tud utazni",
  },
  ro: {
    r1_title: "Temperatură și căldură", r1_text: "Temperatura măsoară cât de fierbinte sau rece este ceva. Căldura este energia care se deplasează de la fierbinte la rece. Apa se congică la 0 °C și fierbe la 100 °C.",
    r1_fact1: "Temperatura se măsoară în grade Celsius (°C) sau Fahrenheit (°F)",
    r1_q: "La ce temperatură fierbe apa?", r1_a: "100 °C", r1_b: "0 °C", r1_c: "50 °C", r1_d: "200 °C",
    r2_title: "Transfer de căldură", r2_text: "Căldura se deplasează de la obiecte fierbinti la obiecte reci în trei moduri: conducție (prin solide), convecție (prin fluide) și radiație (prin unde).",
    r2_fact1: "O lingură de metal în supă fierbinte devine fierbinte prin conducție",
    r2_q: "Cum devine fierbinte o lingură de metal în supă?", r2_a: "Conducție", r2_b: "Radiație", r2_c: "Evaporare", r2_d: "Magnetism",
    r3_title: "Stări de agregare", r3_text: "Materia are trei stări: solidă (formă și volum fix), lichidă (volum fix, dar curgătoare) și gazoasă (umple orice recipient). Particulele se mișcă mai repede când sunt încălzite.",
    r3_fact1: "Particulele se mișcă cel mai repede în gazuri și cel mai lent în solide",
    r3_q: "În care stare de agregare se mișcă particulele cel mai repede?", r3_a: "Gaz", r3_b: "Solid", r3_c: "Lichid", r3_d: "Se mișcă la fel",
    r4_title: "Topire, fierbere și congelație", r4_text: "Când gheața se încălzește, se topește în apă (solid în lichid). Când apa se încălzește, fierbe în abur (lichid în gaz). Congelația este opusul topirii.",
    r4_fact1: "Gheața se topește la 0 °C și apa fierbe la 100 °C",
    r4_q: "Cum se numește procesul când gheața devine apă?", r4_a: "Topire", r4_b: "Fierbere", r4_c: "Evaporare", r4_d: "Condensare",
    r5_q1_q: "Ce proces se întâmplă când aborul se transformă înapoi în apă lichidă?", r5_q1_a: "Condensare", r5_q1_b: "Topire", r5_q1_c: "Evaporare", r5_q1_d: "Fierbere",
    r5_q2_q: "Cum se deplasează căldura prin vid (spațiu gol)?", r5_q2_a: "Radiație", r5_q2_b: "Conducție", r5_q2_c: "Convecție", r5_q2_d: "Nu se poate deplasa",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌡️</text></svg>
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

export default function HeatExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
