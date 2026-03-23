"use client";
// HydraulicsExplorer — Hydraulics & Buoyancy (Hydraulik & Auftrieb) Grade 6
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Pascal's Principle", r1_text: "Pressure in an enclosed fluid is transmitted equally in all directions. This principle allows hydraulic machines to amplify force.",
    r1_fact1: "Hydraulic systems multiply force by using different piston areas",
    r1_q: "Pascal's principle states that pressure in a fluid is...", r1_a: "Transmitted equally in all directions", r1_b: "Lost with distance", r1_c: "Reduced at depth", r1_d: "Unchanged at the edges",
    r2_title: "Hydraulic Machines", r2_text: "Hydraulic systems are found everywhere. Car brakes use hydraulic fluid. Excavators and hydraulic lifts amplify human force to move heavy loads.",
    r2_fact1: "A small hydraulic pump can lift a car with minimal effort",
    r2_q: "Which uses a hydraulic system?", r2_a: "Car brakes", r2_b: "Electric motor", r2_c: "Wind turbine", r2_d: "Solar panel",
    r3_title: "Buoyancy", r3_text: "Buoyancy is an upward force on objects in a fluid. An object floats if the buoyant force equals or exceeds its weight.",
    r3_fact1: "Ships made of steel float because their total weight is less than water displaced",
    r3_q: "What is buoyancy?", r3_a: "Upward force on objects in fluid", r3_b: "Downward water pressure", r3_c: "Sideways water flow", r3_d: "Air resistance",
    r4_title: "Archimedes' Principle", r4_text: "The buoyant force equals the weight of the fluid displaced by the object. This explains why large objects can float and submarines can submerge.",
    r4_fact1: "A submarine controls buoyancy by letting water in and out of ballast tanks",
    r4_q: "Archimedes' principle states the buoyant force equals...", r4_a: "Weight of fluid displaced", r4_b: "Object's weight", r4_c: "Pressure at depth", r4_d: "Speed of movement",
    r5_q1_q: "A heavy ship floats because...", r5_q1_a: "Buoyant force equals ship weight", r5_q1_b: "Water has no gravity", r5_q1_c: "Ships are made of plastic", r5_q1_d: "Pressure decreases",
    r5_q2_q: "Hydraulic jacks can lift heavy cars because...", r5_q2_a: "Pressure is multiplied by area difference", r5_q2_b: "Cars are hollow", r5_q2_c: "Oil is lighter than water", r5_q2_d: "Friction increases force",
  },
  de: {
    r1_title: "Pascals Prinzip", r1_text: "Der Druck in einer eingeschlossenen Flüssigkeit wird gleichmäßig in alle Richtungen übertragen. Dieses Prinzip ermöglicht hydraulischen Maschinen, Kraft zu verstärken.",
    r1_fact1: "Hydraulische Systeme verstärken Kraft durch unterschiedliche Kolbenflächen",
    r1_q: "Pascals Prinzip besagt, dass Druck in einer Flüssigkeit...", r1_a: "Gleichmäßig in alle Richtungen übertragen wird", r1_b: "Mit der Entfernung verloren geht", r1_c: "In der Tiefe reduziert wird", r1_d: "An den Rändern unverändert bleibt",
    r2_title: "Hydraulische Maschinen", r2_text: "Hydraulische Systeme sind überall zu finden. Autobremsen verwenden Hydraulikflüssigkeit. Bagger und hydraulische Heber verstärken menschliche Kraft, um schwere Lasten zu bewegen.",
    r2_fact1: "Eine kleine Hydraulikpumpe kann ein Auto mit minimalem Aufwand heben",
    r2_q: "Welches nutzt ein hydraulisches System?", r2_a: "Autobremsen", r2_b: "Elektromotor", r2_c: "Windkraftanlage", r2_d: "Sonnenkollektoren",
    r3_title: "Auftrieb", r3_text: "Auftrieb ist eine Aufwärtskraft auf Objekte in einer Flüssigkeit. Ein Objekt schwimmt, wenn die Auftriebskraft sein Gewicht gleicht oder übersteigt.",
    r3_fact1: "Schiffe aus Stahl schwimmen, weil ihr Gesamtgewicht kleiner ist als das verdrängte Wasser",
    r3_q: "Was ist Auftrieb?", r3_a: "Aufwärtskraft auf Objekte in der Flüssigkeit", r3_b: "Abwärtswasserdruck", r3_c: "Seitlicher Wasserfluss", r3_d: "Luftwiderstand",
    r4_title: "Archimedes' Prinzip", r4_text: "Die Auftriebskraft entspricht dem Gewicht der vom Objekt verdrängten Flüssigkeit. Dies erklärt, warum große Objekte schwimmen können und U-Boote untergetaucht werden können.",
    r4_fact1: "Ein U-Boot steuert den Auftrieb, indem es Wasser in und aus Ballasttanks lässt",
    r4_q: "Archimedes' Prinzip besagt, dass die Auftriebskraft gleich ist mit...", r4_a: "Gewicht der verdrängten Flüssigkeit", r4_b: "Gewicht des Objekts", r4_c: "Druck in der Tiefe", r4_d: "Bewegungsgeschwindigkeit",
    r5_q1_q: "Ein schweres Schiff schwimmt, weil...", r5_q1_a: "Auftriebskraft gleich Schiffsgewicht ist", r5_q1_b: "Wasser hat keine Schwerkraft", r5_q1_c: "Schiffe sind aus Kunststoff", r5_q1_d: "Druck nimmt ab",
    r5_q2_q: "Hydraulische Heber können schwere Autos heben, weil...", r5_q2_a: "Druck wird durch Flächendifferenz multipliziert", r5_q2_b: "Autos sind hohl", r5_q2_c: "Öl ist leichter als Wasser", r5_q2_d: "Reibung erhöht Kraft",
  },
  hu: {
    r1_title: "Pascal törvénye", r1_text: "A nyomás egy zárt folyadékban egyenlően terjed minden irányban. Ez az elv lehetővé teszi a hidraulikus gépeknek az erő fokozódást.",
    r1_fact1: "A hidraulikus rendszerek az erőt a különböző dugattyú területekkel sokszorozják",
    r1_q: "Pascal törvénye kimondja, hogy a nyomás egy folyadékban...", r1_a: "Egyenlően terjed minden irányban", r1_b: "Veszít a távolsággal", r1_c: "Csökkentett mélységben", r1_d: "Széleken változatlan marad",
    r2_title: "Hidraulikus gépek", r2_text: "Hidraulikus rendszerek mindenhol megtalálhatók. Az autófékek hidraulikus folyadékot használnak. Az excavátorok és hidraulikus emelek felerősítik az emberi erőt, hogy nehéz terheléseket mozgassanak.",
    r2_fact1: "Egy kis hidraulikus szivattyú minimális erővel fel tud emelni egy autót",
    r2_q: "Melyik használ hidraulikus rendszert?", r2_a: "Autófékek", r2_b: "Elektromágneses motor", r2_c: "Szélkerék", r2_d: "Napelem",
    r3_title: "Felhajtóerő", r3_text: "A felhajtóerő a folyadékban lévő tárgyakra ható felfelé irányuló erő. Egy tárgy lebeg, ha a felhajtóerő megegyezik vagy meghaladja a súlyát.",
    r3_fact1: "Az acélból készült hajók úsznak, mert teljes súlyuk kisebb, mint az elmozdított víz",
    r3_q: "Mi az a felhajtóerő?", r3_a: "Felfelé irányuló erő a folyadékban lévő tárgyakra", r3_b: "Lefelé irányuló víznyomás", r3_c: "Oldalsó vízáramlás", r3_d: "Légellenállás",
    r4_title: "Archimedes elve", r4_text: "A felhajtóerő megegyezik a tárgy által elmozdított folyadék súlyával. Ez megmagyarázza, hogy miért tudnak nagy tárgyak úszni és a tengeralattjárók búvni.",
    r4_fact1: "A tengeralattjáró a felhajtóerőt úgy szabályozza, hogy vizet enged be és ki a ballast tankokból",
    r4_q: "Archimedes elve kimondja, hogy a felhajtóerő megegyezik...", r4_a: "Az elmozdított folyadék súlyával", r4_b: "A tárgy súlyával", r4_c: "Nyomás a mélységben", r4_d: "Mozgás sebessége",
    r5_q1_q: "Egy nehéz hajó úszik, mert...", r5_q1_a: "A felhajtóerő megegyezik a hajó súlyával", r5_q1_b: "A víz nem játszik gravitációs szerepet", r5_q1_c: "A hajók műanyagból vannak", r5_q1_d: "Nyomás csökken",
    r5_q2_q: "A hidraulikus emelek nehéz autókat tudnak emelni, mert...", r5_q2_a: "A nyomás szorozódik a terület különbséggel", r5_q2_b: "Az autók üresek", r5_q2_c: "Az olaj könnyebb, mint a víz", r5_q2_d: "A súrlódás növeli az erőt",
  },
  ro: {
    r1_title: "Principiul lui Pascal", r1_text: "Presiunea într-un fluid închis se transmite în mod egal în toate direcțiile. Acest principiu permite mașinilor hidraulice să amplifice forța.",
    r1_fact1: "Sistemele hidraulice multiplică forța folosind diferite arii de piston",
    r1_q: "Principiul lui Pascal afirmă că presiunea într-un fluid este...", r1_a: "Transmisă în mod egal în toate direcțiile", r1_b: "Pierdută cu distanța", r1_c: "Redusă la adâncime", r1_d: "Neschimbată la margini",
    r2_title: "Mașini hidraulice", r2_text: "Sistemele hidraulice se găsesc peste tot. Frânele auto folosesc fluid hidraulic. Excavatoarele și ridicătoarele hidraulice amplifică forța umană pentru a muta sarcini grele.",
    r2_fact1: "O mică pompă hidraulică poate ridica o mașină cu efort minim",
    r2_q: "Care folosește un sistem hidraulic?", r2_a: "Frânele auto", r2_b: "Motor electric", r2_c: "Turbină eoliene", r2_d: "Panouri solare",
    r3_title: "Plutire", r3_text: "Plutirea este o forță ascendentă pe obiecte într-un fluid. Un obiect plutește dacă forța flotantă este egală cu sau depășește greutatea acestuia.",
    r3_fact1: "Navele din oțel plutesc pentru că greutatea lor totală este mai mică decât apa deplasată",
    r3_q: "Ce este plutirea?", r3_a: "Forță ascendentă pe obiecte în fluid", r3_b: "Presiune descendentă a apei", r3_c: "Flux de apă lateral", r3_d: "Rezistență la aer",
    r4_title: "Principiul Arhimede", r4_text: "Forța flotantă este egală cu greutatea fluidului deplasat de obiect. Aceasta explică de ce obiectele mari pot pluti și submarinele pot se scufunda.",
    r4_fact1: "Un submarin controlează plutirea prin a lasa apa sa intre și iasă din rezervoare de balast",
    r4_q: "Principiul Arhimede afirmă că forța de plutire este egală cu...", r4_a: "Greutatea fluidului deplasat", r4_b: "Greutatea obiectului", r4_c: "Presiune la adâncime", r4_d: "Viteză de mișcare",
    r5_q1_q: "O navă grea plutește pentru că...", r5_q1_a: "Forța de plutire egală greutate navă", r5_q1_b: "Apa nu are gravitație", r5_q1_c: "Navele sunt din plastic", r5_q1_d: "Presiune scade",
    r5_q2_q: "Ridicătoarele hidraulice pot ridica mașini grele pentru că...", r5_q2_a: "Presiunea se multiplică prin diferență de arie", r5_q2_b: "Mașinile sunt goale", r5_q2_c: "Uleiul este mai ușor decât apa", r5_q2_d: "Frecarea crește forța",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🚢</text></svg>
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

export default function HydraulicsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
