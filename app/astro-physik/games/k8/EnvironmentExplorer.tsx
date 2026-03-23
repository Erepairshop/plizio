"use client";
// EnvironmentExplorer — Renewable Energy & Efficiency (Erneuerbare Energien) Grade 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Renewable Energy Sources", r1_text: "Solar, wind, hydro, geothermal, and biomass are renewable. They're unlimited and clean but sometimes intermittent. Fossil fuels are finite and produce CO₂.",
    r1_fact1: "The Sun sends more energy to Earth in 1 hour than humans use in a whole year",
    r1_q: "Which is NOT a renewable energy source?", r1_a: "Natural gas", r1_b: "Solar power", r1_c: "Wind power", r1_d: "Hydroelectric power",
    r2_title: "Solar Energy", r2_text: "Photovoltaic cells convert sunlight directly to electricity. Solar panels on rooftops and solar farms can power homes and cities.",
    r2_fact1: "A single solar panel can power a laptop for 8 hours per day",
    r2_q: "Photovoltaic cells convert...", r2_a: "Sunlight to electricity", r2_b: "Electricity to sunlight", r2_c: "Heat to light", r2_d: "Wind to electricity",
    r3_title: "Wind Energy", r3_text: "Wind turbines convert the kinetic energy of wind into electricity. They work best in open, windy areas like plains, coasts, and mountains.",
    r3_fact1: "A single modern wind turbine can power 300 homes",
    r3_q: "Wind turbines convert...", r3_a: "Wind kinetic energy to electrical energy", r3_b: "Solar heat to electricity", r3_c: "Water pressure to wind", r3_d: "Electricity to wind",
    r4_title: "Energy Efficiency", r4_text: "Better insulation, LED bulbs, efficient appliances, and smart thermostats reduce wasted energy. Smart grids optimize distribution. Every watt saved is a watt not produced.",
    r4_fact1: "LED bulbs use 75% less electricity than incandescent bulbs",
    r4_q: "The best way to reduce energy waste at home is...", r4_a: "Better insulation", r4_b: "Using more lights", r4_c: "Bigger appliances", r4_d: "Longer showers",
    r5_q1_q: "Which energy source produces electricity without pollution?", r5_q1_a: "Wind turbines", r5_q1_b: "Coal plants", r5_q1_c: "Gas generators", r5_q1_d: "Oil refineries",
    r5_q2_q: "What is the main advantage of renewable energy?", r5_q2_a: "It's unlimited and clean", r5_q2_b: "It's always available", r5_q2_c: "It's free", r5_q2_d: "It's dangerous",
  },
  de: {
    r1_title: "Erneuerbare Energiequellen", r1_text: "Solar, Wind, Wasser, Geothermie und Biomasse sind erneuerbar. Sie sind unbegrenzt und sauber, aber manchmal unterbrochen. Fossile Brennstoffe sind endlich und produzieren CO₂.",
    r1_fact1: "Die Sonne sendet in 1 Stunde mehr Energie zur Erde als Menschen in einem Jahr verbrauchen",
    r1_q: "Welche ist KEINE erneuerbare Energiequelle?", r1_a: "Erdgas", r1_b: "Solarenergie", r1_c: "Windenergie", r1_d: "Wasserkraft",
    r2_title: "Solarenergie", r2_text: "Photovoltaikzellen wandeln Sonnenlicht direkt in Strom um. Solarpanels auf Dächern und Solarfarmen können Häuser und Städte mit Strom versorgen.",
    r2_fact1: "Ein einzelnes Solarpanel kann einen Laptop 8 Stunden täglich betreiben",
    r2_q: "Photovoltaikzellen wandeln um...", r2_a: "Sonnenlicht zu Strom", r2_b: "Strom zu Sonnenlicht", r2_c: "Wärme zu Licht", r2_d: "Wind zu Strom",
    r3_title: "Windenergie", r3_text: "Windkraftanlagen wandeln die kinetische Energie des Windes in Strom um. Sie funktionieren am besten in offenen, windigen Gebieten.",
    r3_fact1: "Eine einzelne moderne Windkraftanlage kann 300 Häuser mit Strom versorgen",
    r3_q: "Windkraftanlagen wandeln um...", r3_a: "Wind-Bewegungsenergie in Elektrizität", r3_b: "Sonnenwärme in Strom", r3_c: "Wasserdruck in Wind", r3_d: "Elektrizität in Wind",
    r4_title: "Energieeffizienz", r4_text: "Bessere Isolierung, LED-Lampen, effiziente Geräte und intelligente Thermostate reduzieren Energieverschwendung. Intelligente Netze optimieren die Verteilung.",
    r4_fact1: "LED-Lampen verbrauchen 75% weniger Strom als Glühbirnen",
    r4_q: "Der beste Weg, Energieverschwendung zu Hause zu reduzieren, ist...", r4_a: "Bessere Isolierung", r4_b: "Mehr Lichter verwenden", r4_c: "Größere Geräte", r4_d: "Längere Duschen",
    r5_q1_q: "Welche Energiequelle erzeugt Strom ohne Verschmutzung?", r5_q1_a: "Windkraftanlagen", r5_q1_b: "Kohlewerke", r5_q1_c: "Gasgeneratoren", r5_q1_d: "Ölraffinerien",
    r5_q2_q: "Was ist der Hauptvorteil erneuerbarer Energien?", r5_q2_a: "Sie sind unbegrenzt und sauber", r5_q2_b: "Sie sind immer verfügbar", r5_q2_c: "Sie sind kostenlos", r5_q2_d: "Sie sind gefährlich",
  },
  hu: {
    r1_title: "Megújuló energiaforrások", r1_text: "A napenergia, szél, víz, geotermia és biomassza megújuló. Korlátlanok és tiszták, de néha szaggatottak. A fosszilis tüzelőanyagok végesek és CO₂-t termelnek.",
    r1_fact1: "A Nap 1 óra alatt több energiát küld a Földre, mint amit az emberek egy év alatt felhasználnak",
    r1_q: "Melyik NEM megújuló energiaforrás?", r1_a: "Természetgáz", r1_b: "Napenergia", r1_c: "Szélenergia", r1_d: "Vízenergia",
    r2_title: "Napenergia", r2_text: "A fotovoltaikus cellák közvetlenül átalakítják a napfényt áramra. A tetőn elhelyezett napelemek és napenergetikai farmok lakóházakat és városokat táplálhatnak.",
    r2_fact1: "Egy naptábla egy laptopot 8 órán keresztül naponta betáplálhat",
    r2_q: "A fotovoltaikus cellák átalakulnak...", r2_a: "Napfény áramra", r2_b: "Áram napfényre", r2_c: "Hő fényre", r2_d: "Szél áramra",
    r3_title: "Szélenergia", r3_text: "A szélmalmok átalakítják a szél mozgási energiáját áramra. Nyílt, szeles területeken működnek a legjobban, például síkságokon, tengerpartokon.",
    r3_fact1: "Egyetlen modern szélmalom 300 házat táplálhat",
    r3_q: "A szélmalmok átalakítják...", r3_a: "A szél mozgási energiáját elektromosságra", r3_b: "A napmeleg áramra", r3_c: "Víznyomást szélre", r3_d: "Áramot szélre",
    r4_title: "Energiahatékonyság", r4_text: "Jobb szigetelés, LED-izzók, hatékony készülékek és okos termosztátok csökkentik az energia-pazarlást. Az intelligens hálózatok optimalizálják az elosztást.",
    r4_fact1: "Az LED-izzók 75%-kal kevesebb áramot fogyasztanak, mint az izzólámpa",
    r4_q: "A legjobb módja az otthoni energia-pazarlás csökkentésére...", r4_a: "Jobb szigetelés", r4_b: "Több lámpa használata", r4_c: "Nagyobb készülékek", r4_d: "Hosszabb tusolás",
    r5_q1_q: "Melyik energiaforrás termel áramot szennyezés nélkül?", r5_q1_a: "Szélmalmok", r5_q1_b: "Szénerőművek", r5_q1_c: "Gázgenerátorok", r5_q1_d: "Olajtermékek",
    r5_q2_q: "Mi a megújuló energia fő előnye?", r5_q2_a: "Korlátlan és tiszta", r5_q2_b: "Mindig rendelkezésre áll", r5_q2_c: "Ingyenes", r5_q2_d: "Veszélyes",
  },
  ro: {
    r1_title: "Surse de energie regenerabilă", r1_text: "Soare, vânt, apă, geotermal și biomasă sunt regenerabile. Sunt nelimitate și curate, dar uneori întrerupte. Combustibilii fosili sunt limitați și produc CO₂.",
    r1_fact1: "Soarele trimite în 1 oră mai multă energie pe Pământ decât oamenii consumă într-un an",
    r1_q: "Care NU este o sursă de energie regenerabilă?", r1_a: "Gaze naturale", r1_b: "Energie solară", r1_c: "Energie eoliană", r1_d: "Energie hidroelectrică",
    r2_title: "Energie solară", r2_text: "Celulele fotovoltaice convertesc lumina soarelui direct în electricitate. Panourile solare pe acoperișuri și fermele solare pot alimenta case și orașe.",
    r2_fact1: "Un singur panou solar poate alimenta un laptop 8 ore pe zi",
    r2_q: "Celulele fotovoltaice convertesc...", r2_a: "Lumina soarelui în electricitate", r2_b: "Electricitate în lumina soarelui", r2_c: "Căldură în lumină", r2_d: "Vânt în electricitate",
    r3_title: "Energie eoliană", r3_text: "Turbinele eoliene convertesc energia cinetică a vântului în electricitate. Funcționează cel mai bine în zone deschise, foarte vântoase.",
    r3_fact1: "O singură turbină eoliene modernă poate alimenta 300 de case",
    r3_q: "Turbinele eoliene convertesc...", r3_a: "Energia cinetică a vântului în electricitate", r3_b: "Căldura soarelui în electricitate", r3_c: "Presiunea apei în vânt", r3_d: "Electricitate în vânt",
    r4_title: "Eficiență energetică", r4_text: "Izolare mai bună, becuri LED, aparate eficiente și termostati inteligenți reduc risipa de energie. Rețelele inteligente optimizează distribuția.",
    r4_fact1: "Becurile LED consumă 75% mai puțin curent decât becurile incandescente",
    r4_q: "Cel mai bun mod de a reduce risipa de energie la domiciliu este...", r4_a: "Izolare mai bună", r4_b: "Utilizarea mai multor lumini", r4_c: "Aparate mai mari", r4_d: "Dușuri mai lungi",
    r5_q1_q: "Care sursă de energie produce electricitate fără poluare?", r5_q1_a: "Turbinele eoliene", r5_q1_b: "Centrale pe cărbune", r5_q1_c: "Generatoare de gaze", r5_q1_d: "Rafinării de petrol",
    r5_q2_q: "Care este avantajul principal al energiei regenerabile?", r5_q2_a: "Este nelimitată și curată", r5_q2_b: "Este întotdeauna disponibilă", r5_q2_c: "Este gratuită", r5_q2_d: "Este periculoasă",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a1a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌍</text></svg>
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

export default function EnvironmentExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
