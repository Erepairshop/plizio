"use client";
// NuclearExplorer — Nuclear Energy & Power (Kernenergie) Grade 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Nuclear Fission", r1_text: "A heavy nucleus splits into lighter nuclei, releasing neutrons and huge energy. Used in nuclear power plants to generate electricity.",
    r1_fact1: "One uranium-235 fission releases as much energy as a ton of coal",
    r1_q: "Nuclear fission means a nucleus...", r1_a: "Splits into smaller parts", r1_b: "Combines with another", r1_c: "Decays into electrons", r1_d: "Emits light",
    r2_title: "Chain Reaction", r2_text: "One fission releases neutrons that trigger more fissions. Control rods absorb neutrons to slow the reaction in reactors.",
    r2_fact1: "Without control, a chain reaction becomes an explosion",
    r2_q: "Control rods in a reactor...", r2_a: "Absorb neutrons to slow the reaction", r2_b: "Speed up the reaction", r2_c: "Produce electricity", r2_d: "Cool the water",
    r3_title: "Nuclear Fusion", r3_text: "Light nuclei combine (fuse) into heavier nuclei, releasing even more energy. Fusion powers the Sun and stars. Requires extreme heat and pressure.",
    r3_fact1: "Fusion is how the Sun produces its heat and light",
    r3_q: "Nuclear fusion powers...", r3_a: "The Sun and stars", r3_b: "Nuclear plants on Earth", r3_c: "Wind turbines", r3_d: "Solar panels",
    r4_title: "Nuclear Problems", r4_text: "Nuclear energy produces no CO₂ during operation, but radioactive waste stays dangerous for thousands of years. Accidents can be catastrophic.",
    r4_fact1: "A nuclear power plant produces 200 tons of waste per year",
    r4_q: "The main problem with nuclear energy is...", r4_a: "Radioactive waste", r4_b: "It's too slow", r4_c: "It costs nothing", r4_d: "It's renewable",
    r5_q1_q: "Which fuel causes fission?", r5_q1_a: "Uranium-235", r5_q1_b: "Coal", r5_q1_c: "Natural gas", r5_q1_d: "Oil",
    r5_q2_q: "How long does radioactive waste stay dangerous?", r5_q2_a: "Thousands of years", r5_q2_b: "A few weeks", r5_q2_c: "One year", r5_q2_d: "Forever",
  },
  de: {
    r1_title: "Kernspaltung", r1_text: "Ein schwerer Kern spaltet sich in leichtere Kerne, setzt Neutronen und riesige Energie frei. Wird in Kernkraftwerken zur Stromerzeugung genutzt.",
    r1_fact1: "Eine Uran-235-Spaltung setzt so viel Energie frei wie eine Tonne Kohle",
    r1_q: "Kernspaltung bedeutet, ein Kern...", r1_a: "Spaltet sich in kleinere Teile", r1_b: "Vereinigt sich mit einem anderen", r1_c: "Zerfällt zu Elektronen", r1_d: "Gibt Licht ab",
    r2_title: "Kettenreaktion", r2_text: "Eine Spaltung setzt Neutronen frei, die mehr Spaltungen auslösen. Regelstäbe absorbieren Neutronen, um die Reaktion zu verlangsamen.",
    r2_fact1: "Ohne Kontrolle wird eine Kettenreaktion zur Explosion",
    r2_q: "Regelstäbe in einem Reaktor...", r2_a: "Absorbieren Neutronen, um zu verlangsamen", r2_b: "Beschleunigen die Reaktion", r2_c: "Erzeugen Strom", r2_d: "Kühlen das Wasser",
    r3_title: "Kernfusion", r3_text: "Leichte Kerne verschmelzen (fusionieren) zu schwereren Kernen und setzen noch mehr Energie frei. Fusion treibt die Sonne an. Erfordert extreme Hitze.",
    r3_fact1: "Fusion ist wie die Sonne ihre Wärme und ihr Licht erzeugt",
    r3_q: "Kernfusion treibt an...", r3_a: "Die Sonne und Sterne", r3_b: "Kernkraftwerke auf der Erde", r3_c: "Windkraftanlagen", r3_d: "Solaranlagen",
    r4_title: "Kernprobleme", r4_text: "Kernenergie produziert kein CO₂, aber radioaktive Abfälle bleiben tausende Jahre gefährlich. Unfälle können katastrophal sein.",
    r4_fact1: "Ein Kernkraftwerk produziert 200 Tonnen Abfall pro Jahr",
    r4_q: "Das Hauptproblem der Kernenergie ist...", r4_a: "Radioaktive Abfälle", r4_b: "Sie ist zu langsam", r4_c: "Sie kostet nichts", r4_d: "Sie ist erneuerbar",
    r5_q1_q: "Welcher Brennstoff verursacht Spaltung?", r5_q1_a: "Uran-235", r5_q1_b: "Kohle", r5_q1_c: "Erdgas", r5_q1_d: "Öl",
    r5_q2_q: "Wie lange bleibt radioaktiver Abfall gefährlich?", r5_q2_a: "Tausende von Jahren", r5_q2_b: "Ein paar Wochen", r5_q2_c: "Ein Jahr", r5_q2_d: "Für immer",
  },
  hu: {
    r1_title: "Magreakció", r1_text: "Egy nehéz mag könnyebb magokra hasad, neutronokat és hatalmas energiát felszabadít. Magenergetikában használják az áramtermeléshez.",
    r1_fact1: "Egy urán-235 hasadás annyi energiát szabadít fel, mint egy tonna szén",
    r1_q: "Maghasadás azt jelenti, hogy egy mag...", r1_a: "Kisebb részekre hasad", r1_b: "Egy másikkal egyesül", r1_c: "Elektronokra bomlik", r1_d: "Fényt ad ki",
    r2_title: "Lánc-reakió", r2_text: "Egy hasadás neutronokat szabadít fel, amelyek több hasadást indítanak. A szabályozó rudak elnyelik a neutronokat a lassítás érdekében.",
    r2_fact1: "Szabályozás nélkül a láncreakció robbanássá válik",
    r2_q: "A reaktor szabályozó rudai...", r2_a: "Elnyelik a neutronokat a lassítás érdekében", r2_b: "Felgyorsítják a reakciót", r2_c: "Áramot termelnek", r2_d: "Lehűtik a vizet",
    r3_title: "Magfúzió", r3_text: "Könnyű magok összeolvadnak (fúzionálnak) nehezebb magokká, még több energiát felszabadítva. A fúzió hajtja meg a Napot. Szélsőséges hőt igényel.",
    r3_fact1: "A fúzió az, ahogy a Nap hőt és fényt termel",
    r3_q: "A magfúzió azt hajtja...", r3_a: "A Napot és a csillagokat", r3_b: "A Föld atomreaktorait", r3_c: "Szélmalmokat", r3_d: "Napelemet",
    r4_title: "Mag-problémák", r4_text: "A magenergia nem termel CO₂-t, de a radioaktív hulladék ezredes ideig marad veszélyes. A balesetek katasztrofálisak lehetnek.",
    r4_fact1: "Egy atomreaktor évente 200 tonna hulladékot termel",
    r4_q: "A magenergia fő problémája...", r4_a: "Radioaktív hulladék", r4_b: "Túl lassú", r4_c: "Ingyen kerül", r4_d: "Megújuló",
    r5_q1_q: "Melyik üzemanyag okoz hasadást?", r5_q1_a: "Urán-235", r5_q1_b: "Szén", r5_q1_c: "Földgáz", r5_q1_d: "Olaj",
    r5_q2_q: "Meddig marad a radioaktív hulladék veszélyes?", r5_q2_a: "Ezredes ideig", r5_q2_b: "Néhány hét", r5_q2_c: "Egy év", r5_q2_d: "Örökké",
  },
  ro: {
    r1_title: "Fisiunea nucleară", r1_text: "Un nucleu greu se împarte în nuclee mai ușoare, eliberând neutroni și energie imensă. Folosit în centralele nucleare pentru a genera electricitate.",
    r1_fact1: "O fisiune de uraniu-235 eliberează cât de multă energie cât o tonă de cărbune",
    r1_q: "Fisiunea nucleară înseamnă că un nucleu...", r1_a: "Se împarte în piese mai mici", r1_b: "Se combină cu altul", r1_c: "Se descompune în electroni", r1_d: "Emite lumină",
    r2_title: "Reacție în lanț", r2_text: "O fisiune eliberează neutroni care declanșează mai multe fisiuni. Barele de control absorb neutroni pentru a încetini reacția.",
    r2_fact1: "Fără control, o reacție în lanț devine o explozie",
    r2_q: "Barele de control dintr-un reactor...", r2_a: "Absorb neutroni pentru a încetini", r2_b: "Accelerează reacția", r2_c: "Produc electricitate", r2_d: "Răcesc apa",
    r3_title: "Fuziunea nucleară", r3_text: "Nuclee ușoare se fuzionează în nuclee mai grele, eliberând și mai multă energie. Fuziunea alimentează Soarele. Necesită căldură extremă.",
    r3_fact1: "Fuziunea este cum Soarele produce căldura și lumina",
    r3_q: "Fuziunea nucleară alimentează...", r3_a: "Soarele și stelele", r3_b: "Centralele nucleare de pe Pământ", r3_c: "Turbinele eoliene", r3_d: "Panourile solare",
    r4_title: "Probleme nucleare", r4_text: "Energia nucleară nu produce CO₂, dar deșeurile radioactive rămân periculoase pentru mii de ani. Accidentele pot fi catastrofale.",
    r4_fact1: "O centrală nucleară produce 200 de tone de deșeuri pe an",
    r4_q: "Principala problemă a energiei nucleare este...", r4_a: "Deșeurile radioactive", r4_b: "Este prea lentă", r4_c: "Costă nimic", r4_d: "Este regenerabilă",
    r5_q1_q: "Ce combustibil provoacă fisiunea?", r5_q1_a: "Uraniu-235", r5_q1_b: "Cărbune", r5_q1_c: "Gaze naturale", r5_q1_d: "Petrol",
    r5_q2_q: "Cât timp rămâne deșeul radioactiv periculos?", r5_q2_a: "Mii de ani", r5_q2_b: "Câteva săptămâni", r5_q2_c: "Un an", r5_q2_d: "Pentru totdeauna",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f0e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🏭</text></svg>
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

export default function NuclearExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
