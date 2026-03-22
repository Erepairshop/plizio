"use client";
// EnergyExplorer — Grade 4 Sachkunde: Energy & Electricity

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is Energy?",
    r1_text: "Energy is the ability to do work and cause change. It exists in many forms.",
    r1_fact1: "Energy: Ability to do work and make changes ⚡",
    r1_fact2: "Heat energy: Makes things warm 🔥",
    r1_fact3: "Light energy: Helps us see 💡",
    r1_fact4: "Kinetic energy: Energy of moving objects 🏃",

    r2_title: "Renewable vs Non-Renewable",
    r2_text: "Some energy sources can be replaced, while others are limited.",
    r2_fact1: "Renewable: Sun, wind, water, can be used again 🌞",
    r2_fact2: "Non-renewable: Coal, oil, gas, limited supply ⛽",
    r2_fact3: "Solar power: Energy from the sun ☀️",
    r2_fact4: "Wind power: Energy from moving air 💨",

    r3_title: "How We Use Energy",
    r3_text: "We use energy in our homes and activities every day.",
    r3_fact1: "Electricity: Powers lights, appliances, devices 🔌",
    r3_fact2: "Fuel: Coal, oil, gas burn to produce heat 🛢️",
    r3_fact3: "Efficiency: Using less energy for more work 💪",
    r3_fact4: "Batteries: Store electrical energy 🔋",
    r3_q: "Which is an example of renewable energy?",
    r3_a: "Solar power",
    r3_b: "Coal",
    r3_c: "Oil",
    r3_d: "Natural gas",

    r4_title: "Electric Circuits",
    r4_text: "Electricity flows through circuits, powering our devices.",
    r4_fact1: "Circuit: Closed loop for electricity to flow ⚡",
    r4_fact2: "Components: Battery, wire, bulb, switch 🔌",
    r4_fact3: "Open circuit: Broken path, no power 🔓",
    r4_fact4: "Closed circuit: Complete path, power flows 🔐",
    r4_q: "What is needed for electricity to flow in a circuit?",
    r4_a: "A complete closed loop",
    r4_b: "Just a battery",
    r4_c: "Just wires",
    r4_d: "Heat and light",

    r5_title: "Energy & Circuits Review",
    q1_q: "What is a renewable energy source?",
    q1_a: "Energy from sun, wind, or water",
    q1_b: "Energy from coal or oil",
    q1_c: "Energy from heat",
    q1_d: "Energy from chemicals",

    q2_q: "Which component stores electrical energy?",
    q2_a: "A battery",
    q2_b: "A wire",
    q2_c: "A light bulb",
    q2_d: "A switch",

    q3_q: "What happens when a circuit is open?",
    q3_a: "Electricity cannot flow",
    q3_b: "Electricity flows normally",
    q3_c: "The battery explodes",
    q3_d: "Nothing changes",
  },
  de: {
    r1_title: "Was ist Energie?",
    r1_text: "Energie ist die Fähigkeit, Arbeit zu leisten und Veränderungen zu verursachen. Sie existiert in vielen Formen.",
    r1_fact1: "Energie: Fähigkeit, Arbeit zu leisten 🌟⚡",
    r1_fact2: "Wärmeenergie: Macht Dinge warm 🔥",
    r1_fact3: "Lichtenergie: Hilft uns zu sehen 💡",
    r1_fact4: "Kinetische Energie: Energie von bewegten Objekten 🏃",

    r2_title: "Erneuerbar vs Nicht-erneuerbar",
    r2_text: "Einige Energiequellen können ersetzt werden, andere sind begrenzt.",
    r2_fact1: "Erneuerbar: Sonne, Wind, Wasser, kann erneut genutzt werden 🌞",
    r2_fact2: "Nicht-erneuerbar: Kohle, Öl, Gas, begrenzte Versorgung ⛽",
    r2_fact3: "Solarenergie: Energie von der Sonne ☀️",
    r2_fact4: "Windkraft: Energie aus bewegter Luft 💨",

    r3_title: "Wie wir Energie nutzen",
    r3_text: "Wir nutzen jeden Tag Energie in unseren Häusern und Aktivitäten.",
    r3_fact1: "Elektrizität: Betreibt Lichter, Geräte, Geräte 🔌",
    r3_fact2: "Brennstoff: Kohle, Öl, Gas brennen und produzieren Wärme 🛢️",
    r3_fact3: "Effizienz: Weniger Energie für mehr Arbeit nutzen 💪",
    r3_fact4: "Batterien: Speichern elektrische Energie 🔋",
    r3_q: "Welches ist ein Beispiel für erneuerbare Energie?",
    r3_a: "Solarenergie",
    r3_b: "Kohle",
    r3_c: "Öl",
    r3_d: "Erdgas",

    r4_title: "Stromkreise",
    r4_text: "Elektrizität fließt durch Stromkreise und betreibt unsere Geräte.",
    r4_fact1: "Stromkreis: Geschlossene Schleife für Stromfluss ⚡",
    r4_fact2: "Komponenten: Batterie, Draht, Glühbirne, Schalter 🔌",
    r4_fact3: "Offener Stromkreis: Unterbrochener Pfad, keine Stromversorgung 🔓",
    r4_fact4: "Geschlossener Stromkreis: Vollständiger Pfad, Strom fließt 🔐",
    r4_q: "Was ist notwendig, um Strom in einem Stromkreis fließen zu lassen?",
    r4_a: "Eine geschlossene Schleife",
    r4_b: "Nur eine Batterie",
    r4_c: "Nur Drähte",
    r4_d: "Wärme und Licht",

    r5_title: "Energie & Stromkreise Überprüfung",
    q1_q: "Was ist eine erneuerbare Energiequelle?",
    q1_a: "Energie von Sonne, Wind oder Wasser",
    q1_b: "Energie von Kohle oder Öl",
    q1_c: "Energie von Wärme",
    q1_d: "Energie von Chemikalien",

    q2_q: "Welche Komponente speichert elektrische Energie?",
    q2_a: "Eine Batterie",
    q2_b: "Ein Draht",
    q2_c: "Eine Glühbirne",
    q2_d: "Ein Schalter",

    q3_q: "Was passiert, wenn ein Stromkreis offen ist?",
    q3_a: "Elektrizität kann nicht fließen",
    q3_b: "Elektrizität fließt normal",
    q3_c: "Die Batterie explodiert",
    q3_d: "Nichts ändert sich",
  },
  hu: {
    r1_title: "Mi az energia?",
    r1_text: "Az energia a munka végzésének és a változások okozásának képessége. Sok formában létezik.",
    r1_fact1: "Energia: Munka végzésének képessége ⚡",
    r1_fact2: "Hőenergia: Dolgokat melegíti 🔥",
    r1_fact3: "Fényer: Segít nekünk látni 💡",
    r1_fact4: "Mozgási energia: Mozgó objektumok energiája 🏃",

    r2_title: "Megújítható vs Nem-megújítható",
    r2_text: "Néhány energiaforrás helyettesíthető, míg mások korlátozott.",
    r2_fact1: "Megújítható: Nap, szél, víz, újra használható 🌞",
    r2_fact2: "Nem-megújítható: Szén, olaj, gáz, korlátozott ellátás ⛽",
    r2_fact3: "Napenergia: Energia a Naptól ☀️",
    r2_fact4: "Szélenergia: Energia a mozgó levegőből 💨",

    r3_title: "Hogyan használunk energiát",
    r3_text: "Minden nap használunk energiát otthonunkban és tevékenységeinkben.",
    r3_fact1: "Elektromosság: Világít, készülékeket működtet 🔌",
    r3_fact2: "Üzemanyag: Szén, olaj, gáz égnek és hőt termelnek 🛢️",
    r3_fact3: "Hatékonyság: Kevesebb energia több munkáért 💪",
    r3_fact4: "Akkumulátorok: Tárolják az elektromos energiát 🔋",
    r3_q: "Melyik a megújítható energia példája?",
    r3_a: "Napenergia",
    r3_b: "Szén",
    r3_c: "Olaj",
    r3_d: "Földgáz",

    r4_title: "Elektromos áramkörök",
    r4_text: "Az elektromosság áramköröket visz, működteti az eszközöket.",
    r4_fact1: "Áramkör: Zárt hurok az áram áramlásához ⚡",
    r4_fact2: "Komponensek: Akku, drót, izzó, kapcsoló 🔌",
    r4_fact3: "Nyitott áramkör: Szakadt út, nincs áram 🔓",
    r4_fact4: "Zárt áramkör: Teljes út, áram folyik 🔐",
    r4_q: "Mi szükséges az áram áramköri áramlásához?",
    r4_a: "Teljes zárt hurok",
    r4_b: "Csak egy akku",
    r4_c: "Csak drót",
    r4_d: "Hő és fény",

    r5_title: "Energia és áramkörök felülvizsgálat",
    q1_q: "Mi az megújítható energiaforrás?",
    q1_a: "Energia a naptól, szélből vagy vízből",
    q1_b: "Energia a szénből vagy olajból",
    q1_c: "Energia a hőből",
    q1_d: "Energia a kémiai anyagokból",

    q2_q: "Mely komponens tárolt elektromos energiát?",
    q2_a: "Egy akku",
    q2_b: "Egy drót",
    q2_c: "Egy izzó",
    q2_d: "Egy kapcsoló",

    q3_q: "Mi történik, ha egy áramkör nyitott?",
    q3_a: "Az áram nem áramlik",
    q3_b: "Az áram normálisan áramlik",
    q3_c: "Az akku felrobban",
    q3_d: "Semmi sem változik",
  },
  ro: {
    r1_title: "Ce este energia?",
    r1_text: "Energia este capacitatea de a lucra și provoca schimbări. Există în multe forme.",
    r1_fact1: "Energie: Capacitate de a lucra ⚡",
    r1_fact2: "Energie termală: Face lucrurile calde 🔥",
    r1_fact3: "Energie luminoasă: Ajută pe noi să vedem 💡",
    r1_fact4: "Energie cinetică: Energie a obiectelor în mișcare 🏃",

    r2_title: "Regenerabil vs Non-regenerabil",
    r2_text: "Unele surse de energie pot fi înlocuite, în timp ce altele sunt limitate.",
    r2_fact1: "Regenerabil: Soare, vânt, apă, poate fi folosit din nou 🌞",
    r2_fact2: "Non-regenerabil: Cărbune, ulei, gaz, aprovizionare limitată ⛽",
    r2_fact3: "Energie solară: Energie din soare ☀️",
    r2_fact4: "Energie eoliană: Energie din aerul în mișcare 💨",

    r3_title: "Cum folosim energia",
    r3_text: "Folosim energie în casele și activitățile noastre în fiecare zi.",
    r3_fact1: "Electricitate: Alimentează luminile, aparatele, dispozitivele 🔌",
    r3_fact2: "Combustibil: Cărbune, ulei, gaz ard și produc căldură 🛢️",
    r3_fact3: "Eficiență: Folosire mai puțină energie pentru mai mult lucru 💪",
    r3_fact4: "Baterii: Stochează energia electrică 🔋",
    r3_q: "Care este un exemplu de energie regenerabilă?",
    r3_a: "Energia solară",
    r3_b: "Cărbune",
    r3_c: "Ulei",
    r3_d: "Gaz natural",

    r4_title: "Circuite electrice",
    r4_text: "Electricitatea curge prin circuite, alimentând dispozitivele noastre.",
    r4_fact1: "Circuit: Buclă închisă pentru curgerea electricității ⚡",
    r4_fact2: "Componente: Baterie, fir, bec, comutator 🔌",
    r4_fact3: "Circuit deschis: Cale întreruptă, fără energie 🔓",
    r4_fact4: "Circuit închis: Cale completă, curgerea electricității 🔐",
    r4_q: "Ce este necesar pentru ca electricitatea să curgă într-un circuit?",
    r4_a: "O buclă închisă completă",
    r4_b: "Doar o baterie",
    r4_c: "Doar fire",
    r4_d: "Căldură și lumină",

    r5_title: "Energie și circuite revizuire",
    q1_q: "Ce este o sursă de energie regenerabilă?",
    q1_a: "Energie din soare, vânt sau apă",
    q1_b: "Energie din cărbune sau ulei",
    q1_c: "Energie din căldură",
    q1_d: "Energie din substanțe chimice",

    q2_q: "Ce componentă stochează energia electrică?",
    q2_a: "O baterie",
    q2_b: "Un fir",
    q2_c: "Un bec",
    q2_d: "Un comutator",

    q3_q: "Ce se întâmplă când un circuit este deschis?",
    q3_a: "Electricitatea nu poate curge",
    q3_b: "Electricitatea curge normal",
    q3_c: "Bateria explodează",
    q3_d: "Nimic nu se schimbă",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#F0B27A" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            ⚡
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#E8960C" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🌞
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#D99500" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            💡
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#C68900" />
          <text x="120" y="85" textAnchor="middle" fontSize="56">
            🔌
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#A67400" />
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

export default function EnergyExplorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />
  );
}
