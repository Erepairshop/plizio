"use client";
// CircuitsExplorer — Series & Parallel Circuits (Reihen- & Parallelschaltung) Grade 6
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Series Circuits", r1_text: "In a series circuit, components are connected in a single loop. If one component breaks, the entire circuit stops working.",
    r1_fact1: "String lights that go dark when one bulb burns out are in series",
    r1_q: "In a series circuit, if one bulb burns out...", r1_a: "All lights go out", r1_b: "Only that light goes out", r1_c: "Other lights glow brighter", r1_d: "Nothing happens",
    r2_title: "Parallel Circuits", r2_text: "In a parallel circuit, components are on separate branches. If one component breaks, the others continue to work.",
    r2_fact1: "House electrical outlets are wired in parallel",
    r2_q: "In a parallel circuit, if one bulb burns out...", r2_a: "Other lights keep working", r2_b: "All lights go out", r2_c: "Other lights dim", r2_d: "The circuit explodes",
    r3_title: "Voltage", r3_text: "Voltage is the electrical potential that pushes current through a circuit. Measured in Volts (V). A battery provides voltage to power devices.",
    r3_fact1: "A typical household wall outlet provides 110-120V",
    r3_q: "What is voltage?", r3_a: "Electrical potential that pushes current", r3_b: "Resistance to current", r3_c: "Loss of electrical energy", r3_d: "Type of circuit",
    r4_title: "Comparing Circuits", r4_text: "In series circuits: same current throughout, voltage splits between components. In parallel circuits: same voltage across branches, current splits.",
    r4_fact1: "Understanding series vs. parallel is key to designing safe electrical systems",
    r4_q: "In a series circuit, the voltage...", r4_a: "Splits between components", r4_b: "Stays the same everywhere", r4_c: "Increases", r4_d: "Disappears",
    r5_q1_q: "Which circuit type is safer for household wiring?", r5_q1_a: "Parallel", r5_q1_b: "Series", r5_q1_c: "Mixed", r5_q1_d: "Single wire",
    r5_q2_q: "In a parallel circuit, the current...", r5_q2_a: "Splits at junctions", r5_q2_b: "Stays constant", r5_q2_c: "Doubles", r5_q2_d: "Reverses direction",
  },
  de: {
    r1_title: "Reihenschaltung", r1_text: "In einer Reihenschaltung sind die Komponenten in einer einzelnen Schleife verbunden. Wenn eine Komponente ausfällt, funktioniert der gesamte Stromkreis nicht mehr.",
    r1_fact1: "Lichterketten, die erlischen, wenn eine Glühbirne durchbrennt, sind in Reihe geschaltet",
    r1_q: "In einer Reihenschaltung, wenn eine Glühbirne durchbrennt...", r1_a: "Gehen alle Lichter aus", r1_b: "Geht nur dieses Licht aus", r1_c: "Andere Lichter leuchten heller", r1_d: "Nichts passiert",
    r2_title: "Parallelschaltung", r2_text: "In einer Parallelschaltung sind die Komponenten auf separaten Zweigen. Wenn eine Komponente ausfällt, funktionieren die anderen weiter.",
    r2_fact1: "Haushaltssteckdosen sind parallel verdrahtet",
    r2_q: "In einer Parallelschaltung, wenn eine Glühbirne durchbrennt...", r2_a: "Andere Lichter funktionieren weiter", r2_b: "Gehen alle Lichter aus", r2_c: "Andere Lichter dimmen", r2_d: "Der Stromkreis explodiert",
    r3_title: "Spannung", r3_text: "Spannung ist das elektrische Potenzial, das den Strom durch einen Stromkreis treibt. Gemessen in Volt (V). Eine Batterie liefert Spannung, um Geräte zu betreiben.",
    r3_fact1: "Ein typischer Haushaltsstecker liefert 110–120 V",
    r3_q: "Was ist Spannung?", r3_a: "Elektrisches Potenzial, das Strom antreibt", r3_b: "Widerstand gegen Strom", r3_c: "Verlust von elektrischer Energie", r3_d: "Art von Stromkreis",
    r4_title: "Vergleich von Stromkreisen", r4_text: "In Reihenschaltungen: gleicher Strom überall, Spannung teilt sich zwischen Komponenten. In Parallelschaltungen: gleiche Spannung über Zweige, Strom teilt sich.",
    r4_fact1: "Das Verständnis von Reihen vs. Parallel ist Schlüssel für sichere Stromkreise",
    r4_q: "In einer Reihenschaltung wird die Spannung...", r4_a: "Zwischen Komponenten aufgeteilt", r4_b: "Bleibt überall gleich", r4_c: "Nimmt zu", r4_d: "Verschwindet",
    r5_q1_q: "Welche Stromkreisart ist sicherer für die Hausverkabelung?", r5_q1_a: "Parallelschaltung", r5_q1_b: "Reihenschaltung", r5_q1_c: "Gemischt", r5_q1_d: "Einzelner Draht",
    r5_q2_q: "In einer Parallelschaltung wird der Strom...", r5_q2_a: "An Verzweigungen aufgeteilt", r5_q2_b: "Bleibt konstant", r5_q2_c: "Verdoppelt sich", r5_q2_d: "Ändert die Richtung",
  },
  hu: {
    r1_title: "Soros kapcsolás", r1_text: "A soros kapcsolásban az összetevők egy egyetlen hurkokban vannak csatlakoztatva. Ha egy összetevő meghibásodik, az egész áramkör leáll.",
    r1_fact1: "Az égősor, amely eltűnik, ha egy izzó kiég, soros kapcsolásban van",
    r1_q: "Soros kapcsolásban, ha egy izzó kiég...", r1_a: "Minden fény elalszik", r1_b: "Csak ez a fény szűnik meg", r1_c: "Más fények erősebben világítanak", r1_d: "Semmi sem történik",
    r2_title: "Párhuzamos kapcsolás", r2_text: "Párhuzamos kapcsolásban az összetevők külön ágakon vannak. Ha egy összetevő meghibásodik, a többi továbbra is működik.",
    r2_fact1: "Az otthoni elektromos dugalj párhuzamosan van bekötve",
    r2_q: "Párhuzamos kapcsolásban, ha egy izzó kiég...", r2_a: "Más fények működnek", r2_b: "Minden fény elalszik", r2_c: "Más fények halványabban világítanak", r2_d: "Az áramkör felrobban",
    r3_title: "Feszültség", r3_text: "A feszültség az az elektromos potenciál, amely az áramot az áramkörön keresztül hajtja. Voltban (V) mérik. Az akkumulátor biztosítja a feszültséget az eszközök működtetéséhez.",
    r3_fact1: "Egy tipikus háztartási fali dugalj 110–120 V-ot biztosít",
    r3_q: "Mi a feszültség?", r3_a: "Az áramot hajtó elektromos potenciál", r3_b: "Az áram ellenállása", r3_c: "Az elektromos energia vesztesége", r3_d: "Az áramkör típusa",
    r4_title: "Áramkörök összehasonlítása", r4_text: "Soros kapcsolásban: azonos áram mindenhol, feszültség megosztódik. Párhuzamosban: azonos feszültség az ágakon, áram megosztódik.",
    r4_fact1: "A soros vs. párhuzamos megértése kulcs a biztonságos áramkörökhöz",
    r4_q: "Soros kapcsolásban a feszültség...", r4_a: "Megosztódik az összetevők között", r4_b: "Mindenhol azonos marad", r4_c: "Növekszik", r4_d: "Eltűnik",
    r5_q1_q: "Melyik áramkörtípus biztonságosabb a háztartási vezetékhez?", r5_q1_a: "Párhuzamos", r5_q1_b: "Soros", r5_q1_c: "Vegyes", r5_q1_d: "Egyetlen vezeték",
    r5_q2_q: "Párhuzamos kapcsolásban az áram...", r5_q2_a: "Megosztódik az ágakon", r5_q2_b: "Állandó marad", r5_q2_c: "Megduplázódik", r5_q2_d: "Fordított irányba halad",
  },
  ro: {
    r1_title: "Circuit în serie", r1_text: "Într-un circuit în serie, componentele sunt conectate într-o singură buclă. Dacă o componentă se defectează, întregul circuit nu mai funcționează.",
    r1_fact1: "Luminile de șir care se sting când o bec se arde sunt în serie",
    r1_q: "Într-un circuit în serie, dacă o bec se arde...", r1_a: "Toate luminile se sting", r1_b: "Doar acea lumină se stinge", r1_c: "Alte lumini strălucesc mai mult", r1_d: "Nimic nu se întâmplă",
    r2_title: "Circuit în paralel", r2_text: "Într-un circuit în paralel, componentele sunt pe ramuri separate. Dacă o componentă se defectează, celelalte continuă să funcționeze.",
    r2_fact1: "Prizele electrice din casă sunt conectate în paralel",
    r2_q: "Într-un circuit în paralel, dacă o bec se arde...", r2_a: "Alte lumini continuă să funcționeze", r2_b: "Toate luminile se sting", r2_c: "Alte lumini se estompează", r2_d: "Circuitul explodează",
    r3_title: "Tensiune", r3_text: "Tensiunea este potențialul electric care împinge curentul prin circuit. Se măsoară în Volți (V). O baterie furnizează tensiune pentru a alimenta dispozitivele.",
    r3_fact1: "O priză de perete tipică din casă furnizează 110–120 V",
    r3_q: "Ce este tensiunea?", r3_a: "Potențialul electric care împinge curentul", r3_b: "Rezistență la curent", r3_c: "Pierderea energiei electrice", r3_d: "Tip de circuit",
    r4_title: "Compararea circuitelor", r4_text: "În circuitele în serie: curent egal peste tot, tensiune se împarte între componente. În cele în paralel: tensiune egală pe ramuri, curent se împarte.",
    r4_fact1: "Înțelegerea seriei vs. paraleluluieste cheie pentru sisteme electrice sigure",
    r4_q: "Într-un circuit în serie, tensiunea...", r4_a: "Se împarte între componente", r4_b: "Rămâne aceeași peste tot", r4_c: "Crește", r4_d: "Dispare",
    r5_q1_q: "Care tip de circuit este mai sigur pentru cablarea casei?", r5_q1_a: "Paralel", r5_q1_b: "Serie", r5_q1_c: "Mixt", r5_q1_d: "Un singur fir",
    r5_q2_q: "Într-un circuit în paralel, curentul...", r5_q2_a: "Se împarte la joncțiuni", r5_q2_b: "Rămâne constant", r5_q2_c: "Se dublează", r5_q2_d: "Se inversează direcția",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔌</text></svg>
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

export default function CircuitsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
