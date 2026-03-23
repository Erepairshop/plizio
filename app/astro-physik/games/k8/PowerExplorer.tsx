"use client";
// PowerExplorer — Electric Power & Energy (Elektrische Leistung) Klasse 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Electric Power", r1_text: "Electric power measures how fast electrical energy is used. Power (P) is measured in Watts (W). Formulas: P = V × I = I²R = V²/R. A kilowatt (kW) equals 1000 Watts. Higher power means faster energy consumption.",
    r1_fact1: "A typical household appliance uses 100–2000 watts; a light bulb uses 10–100 watts",
    r1_q: "A 230V appliance draws 2A of current. What is the power consumption?", r1_a: "460 W", r1_b: "115 W", r1_c: "232 W", r1_d: "920 W",
    r2_title: "Electric Energy", r2_text: "Electric energy (E) is power multiplied by time: E = P × t. Energy is measured in Joules (J) or kilowatt-hours (kWh). When you see an electricity bill, it measures kWh. 1 kWh = 3.6 million Joules.",
    r2_fact1: "A 2kW heater running for 3 hours uses 6 kWh of energy",
    r2_q: "A 2kW heater runs for 3 hours. How much energy is used?", r2_a: "6 kWh", r2_b: "2 kWh", r2_c: "0.5 kWh", r2_d: "12 kWh",
    r3_title: "Cost of Electricity", r3_text: "Electricity costs depend on energy consumed (kWh) and the price per unit. The average price in Europe is about 30 cents per kWh. Your bill = energy × rate. Being energy-efficient saves money and protects the environment.",
    r3_fact1: "Running a 1kW device for 10 hours costs about €3 at 30 cents/kWh",
    r3_q: "6 kWh of electricity at 30 cents per kWh costs...", r3_a: "€1.80", r3_b: "€0.80", r3_c: "€3.00", r3_d: "€6.00",
    r4_title: "Energy Efficiency Ratings", r4_text: "Appliances are rated A+++, A++, A+, A, B, C, etc. for energy efficiency. A+++ is most efficient. LED bulbs are 10 times more efficient than incandescent bulbs: a 10W LED produces light equivalent to a 100W old bulb.",
    r4_fact1: "Switching to LED lighting and modern appliances can reduce energy bills by 30–50%",
    r4_q: "Which is more energy efficient?", r4_a: "A 10W LED bulb", r4_b: "A 60W incandescent bulb", r4_c: "Both use the same energy", r4_d: "LEDs use twice as much energy",
    r5_q1_q: "A 500W fan runs for 8 hours. How much energy does it use?", r5_q1_a: "4 kWh", r5_q1_b: "0.5 kWh", r5_q1_c: "8 kWh", r5_q1_d: "500 kWh",
    r5_q2_q: "If the price of electricity rises from 30 to 35 cents/kWh, how much more does 10 kWh cost?", r5_q2_a: "€0.50 more", r5_q2_b: "€1.00 more", r5_q2_c: "€3.50 more", r5_q2_d: "€5.00 more",
  },
  de: {
    r1_title: "Elektrische Leistung", r1_text: "Elektrische Leistung misst, wie schnell elektrische Energie verbraucht wird. Leistung (P) wird in Watt (W) gemessen. Formeln: P = U × I = I²R = U²/R. Ein Kilowatt (kW) entspricht 1000 Watt. Höhere Leistung bedeutet schnelleren Energieverbrauch.",
    r1_fact1: "Ein typisches Haushaltsgerät verbraucht 100–2000 Watt; eine Glühbirne verbraucht 10–100 Watt",
    r1_q: "Ein 230V-Gerät verbraucht 2A Strom. Wie groß ist die Leistung?", r1_a: "460 W", r1_b: "115 W", r1_c: "232 W", r1_d: "920 W",
    r2_title: "Elektrische Energie", r2_text: "Elektrische Energie (E) ist Leistung multipliziert mit Zeit: E = P × t. Energie wird in Joule (J) oder Kilowattstunden (kWh) gemessen. Auf Ihrer Stromrechnung wird die Energie in kWh gemessen. 1 kWh = 3,6 Millionen Joule.",
    r2_fact1: "Ein 2kW-Heizer, der 3 Stunden läuft, verbraucht 6 kWh Energie",
    r2_q: "Ein 2kW-Heizer läuft 3 Stunden. Wie viel Energie wird verbraucht?", r2_a: "6 kWh", r2_b: "2 kWh", r2_c: "0,5 kWh", r2_d: "12 kWh",
    r3_title: "Kosten für Strom", r3_text: "Die Stromkosten hängen vom Energieverbrauch (kWh) und dem Preis pro Einheit ab. Der Durchschnittspreis in Europa beträgt etwa 30 Cent pro kWh. Ihre Rechnung = Energie × Satz. Energieeffizienz spart Geld und schützt die Umwelt.",
    r3_fact1: "Das Betreiben eines 1kW-Geräts für 10 Stunden kostet etwa 3 € bei 30 Cent/kWh",
    r3_q: "6 kWh Strom bei 30 Cent pro kWh kostet...", r3_a: "1,80 €", r3_b: "0,80 €", r3_c: "3,00 €", r3_d: "6,00 €",
    r4_title: "Energieeffizienzklassen", r4_text: "Geräte sind mit A+++, A++, A+, A, B, C usw. für Energieeffizienz bewertet. A+++ ist am effizientesten. LED-Glühbirnen sind 10 Mal effizienter als Glühbirnen: eine 10W-LED erzeugt Licht, das einer 100W-Glühbirne entspricht.",
    r4_fact1: "Der Wechsel zu LED-Beleuchtung und modernen Geräten kann Energierechnungen um 30–50% senken",
    r4_q: "Welches ist energieeffizienter?", r4_a: "Eine 10W-LED-Glühbirne", r4_b: "Eine 60W-Glühbirne", r4_c: "Beide verbrauchen gleich viel Energie", r4_d: "LEDs verbrauchen doppelt so viel Energie",
    r5_q1_q: "Ein 500W-Lüfter läuft 8 Stunden. Wie viel Energie verbraucht er?", r5_q1_a: "4 kWh", r5_q1_b: "0,5 kWh", r5_q1_c: "8 kWh", r5_q1_d: "500 kWh",
    r5_q2_q: "Wenn der Strompreis von 30 auf 35 Cent/kWh steigt, wie viel teurer sind 10 kWh?", r5_q2_a: "0,50 € mehr", r5_q2_b: "1,00 € mehr", r5_q2_c: "3,50 € mehr", r5_q2_d: "5,00 € mehr",
  },
  hu: {
    r1_title: "Elektromos teljesítmény", r1_text: "Az elektromos teljesítmény azt méri, hogy milyen gyorsan használódik az elektromos energia. A teljesítményt wattban (W) mérik. Képletek: P = U × I = I²R = U²/R. Egy kilowatt (kW) 1000 wattnak felel meg. A magasabb teljesítmény gyorsabb energiafogyasztást jelent.",
    r1_fact1: "Egy tipikus háztartási készülék 100–2000 watt teljesítményt fogyaszt; egy izzó 10–100 wattot",
    r1_q: "Egy 230V-os készülék 2A áramot húz. Mekkora a teljesítmény?", r1_a: "460 W", r1_b: "115 W", r1_c: "232 W", r1_d: "920 W",
    r2_title: "Elektromos energia", r2_text: "Az elektromos energia (E) teljesítmény szorozva az idővel: E = P × t. Az energiát joule-ban (J) vagy kilowattórában (kWh) mérik. Az elektromos számla kWh-ban mér. 1 kWh = 3,6 millió joule.",
    r2_fact1: "Egy 2kW-os fűtőtest, amely 3 órán keresztül működik, 6 kWh energiát fogyaszt",
    r2_q: "Egy 2kW-os fűtőtest 3 órán keresztül működik. Mennyi energiát fogyaszt?", r2_a: "6 kWh", r2_b: "2 kWh", r2_c: "0,5 kWh", r2_d: "12 kWh",
    r3_title: "Elektromos energia költsége", r3_text: "Az elektromosság költsége a fogyasztott energia (kWh) és az egységár függ. Az átlagos ár Európában körülbelül 30 cent/kWh. Számla = energia × ár. Az energiahatékonyság pénzt takarít meg és védi a környezetet.",
    r3_fact1: "Egy 1kW-os eszköz 10 órás üzemeltetése körülbelül 3 € költség 30 cent/kWh áron",
    r3_q: "6 kWh elektromosság 30 cent/kWh-nál költsége...", r3_a: "1,80 €", r3_b: "0,80 €", r3_c: "3,00 €", r3_d: "6,00 €",
    r4_title: "Energiahatékonysági besorolások", r4_text: "A készülékek A+++, A++, A+, A, B, C stb. energiahatékonysági besorolásúak. Az A+++ a leghatékonyabb. Az LED-izzók 10-szer hatékonyabbak, mint az izzóizzók: egy 10W-os LED olyan fényt termel, amely egy 100W-os izzónak felel meg.",
    r4_fact1: "Az LED-világítás és a modern készülékek használatára való áttérés 30–50%-kal csökkentheti az energiaszámlákat",
    r4_q: "Melyik energiahatékonyabb?", r4_a: "Egy 10W-os LED-izzó", r4_b: "Egy 60W-os izzólámpa", r4_c: "Mindkettő azonos energiát fogyaszt", r4_d: "Az LED kétszer annyi energiát fogyaszt",
    r5_q1_q: "Egy 500W-os ventilátor 8 órán keresztül működik. Mennyi energiát fogyaszt?", r5_q1_a: "4 kWh", r5_q1_b: "0,5 kWh", r5_q1_c: "8 kWh", r5_q1_d: "500 kWh",
    r5_q2_q: "Ha az elektromosság ára 30-ról 35 cent/kWh-ra emelkedik, mennyivel drágább 10 kWh?", r5_q2_a: "0,50 € drágabb", r5_q2_b: "1,00 € drágabb", r5_q2_c: "3,50 € drágabb", r5_q2_d: "5,00 € drágabb",
  },
  ro: {
    r1_title: "Putere electrică", r1_text: "Puterea electrică măsoară cât de repede se consumă energia electrică. Puterea (P) se măsoară în wați (W). Formule: P = U × I = I²R = U²/R. Un kilowatt (kW) egal cu 1000 wați. Puterea mai mare înseamnă consum de energie mai rapid.",
    r1_fact1: "Un aparat electrocasnic tipic consumă 100–2000 wați; o bec consumă 10–100 wați",
    r1_q: "Un aparat de 230V trage 2A curent. Care este puterea?", r1_a: "460 W", r1_b: "115 W", r1_c: "232 W", r1_d: "920 W",
    r2_title: "Energie electrică", r2_text: "Energia electrică (E) este putere înmulțită cu timpul: E = P × t. Energia se măsoară în jouli (J) sau kilowați-oră (kWh). Pe factura dvs. de electricitate, energia se măsoară în kWh. 1 kWh = 3,6 milioane jouli.",
    r2_fact1: "Un încălzitor de 2kW care funcționează 3 ore consumă 6 kWh energie",
    r2_q: "Un încălzitor de 2kW funcționează 3 ore. Cât de multă energie se consumă?", r2_a: "6 kWh", r2_b: "2 kWh", r2_c: "0,5 kWh", r2_d: "12 kWh",
    r3_title: "Costul electricității", r3_text: "Costurile de electricitate depind de energia consumată (kWh) și prețul pe unitate. Prețul mediu în Europa este de aproximativ 30 de cenți pe kWh. Factură = energie × tarif. Eficiența energetică economisește bani și protejează mediul.",
    r3_fact1: "Rularea unui dispozitiv de 1kW timp de 10 ore costă aproximativ 3 € la 30 de cenți/kWh",
    r3_q: "6 kWh electricitate la 30 cenți pe kWh costă...", r3_a: "1,80 €", r3_b: "0,80 €", r3_c: "3,00 €", r3_d: "6,00 €",
    r4_title: "Clasificări de eficiență energetică", r4_text: "Aparatele sunt clasificate A+++, A++, A+, A, B, C etc. pentru eficiență energetică. A+++ este cel mai eficient. Becurile LED sunt de 10 ori mai eficiente decât becurile incandescente: un LED de 10W produce o lumină echivalentă cu un bec vechi de 100W.",
    r4_fact1: "Trecerea la iluminat LED și aparate moderne poate reduce facturile de energie cu 30–50%",
    r4_q: "Care este mai eficient din punct de vedere energetic?", r4_a: "Un bec LED de 10W", r4_b: "Un bec incandescent de 60W", r4_c: "Ambele folosesc aceeași energie", r4_d: "LED-urile folosesc de două ori mai multă energie",
    r5_q1_q: "Un ventilator de 500W funcționează 8 ore. Cât de multă energie consumă?", r5_q1_a: "4 kWh", r5_q1_b: "0,5 kWh", r5_q1_c: "8 kWh", r5_q1_d: "500 kWh",
    r5_q2_q: "Dacă prețul electricității crește de la 30 la 35 cenți/kWh, cu cât costă mai mult 10 kWh?", r5_q2_a: "0,50 € mai mult", r5_q2_b: "1,00 € mai mult", r5_q2_c: "3,50 € mai mult", r5_q2_d: "5,00 € mai mult",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">💡</text></svg>
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

export default function PowerExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
