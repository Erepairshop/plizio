"use client";
// EnergyExplorer — Energy Forms (Energieformen) Klasse 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Forms of Energy", r1_text: "Energy comes in many forms: kinetic energy (movement), potential energy (stored), thermal energy (heat), light energy, and sound energy.",
    r1_fact1: "Every object and process has energy in different forms",
    r1_q: "A moving car has which type of energy?", r1_a: "Kinetic energy", r1_b: "Light energy", r1_c: "Sound energy", r1_d: "Chemical energy",
    r2_title: "Kinetic Energy", r2_text: "Kinetic energy is the energy of motion. The faster an object moves, the more kinetic energy it has. Heavier objects have more kinetic energy than lighter ones moving at the same speed.",
    r2_fact1: "A fast truck has much more kinetic energy than a slow bicycle",
    r2_q: "Which has more kinetic energy?", r2_a: "A fast truck", r2_b: "A slow bicycle", r2_c: "A parked car", r2_d: "A sleeping cat",
    r3_title: "Potential Energy", r3_text: "Potential energy is stored energy due to an object's position or state. A ball resting on a high shelf has gravitational potential energy. A stretched rubber band has elastic potential energy.",
    r3_fact1: "The higher an object is, the more gravitational potential energy it has",
    r3_q: "A stretched rubber band has which type of energy?", r3_a: "Elastic potential energy", r3_b: "Kinetic energy", r3_c: "Light energy", r3_d: "Sound energy",
    r4_title: "Thermal Energy", r4_text: "Thermal energy is heat energy created by vibrating particles. Hot objects have more thermal energy than cold objects. When you warm something, you increase its thermal energy.",
    r4_fact1: "Boiling water has much more thermal energy than an ice cube",
    r4_q: "Which has more thermal energy?", r4_a: "Boiling water", r4_b: "Ice cube", r4_c: "Cold juice", r4_d: "Frozen yogurt",
    r5_q1_q: "Which is an example of kinetic energy?", r5_q1_a: "A rolling ball", r5_q1_b: "A compressed spring", r5_q1_c: "A light bulb", r5_q1_d: "A quiet room",
    r5_q2_q: "What is thermal energy?", r5_q2_a: "Heat energy from vibrating particles", r5_q2_b: "Energy of movement", r5_q2_c: "Stored energy in a spring", r5_q2_d: "Energy from light waves",
  },
  de: {
    r1_title: "Energieformen", r1_text: "Energie kommt in vielen Formen vor: Bewegungsenergie (kinetische Energie), gespeicherte Energie (potenzielle Energie), Wärmeenergie, Lichtenergie und Schallenergie.",
    r1_fact1: "Jedes Objekt und jeden Prozess hat Energie in verschiedenen Formen",
    r1_q: "Ein fahrendes Auto hat welche Art von Energie?", r1_a: "Kinetische Energie", r1_b: "Lichtenergie", r1_c: "Schallenergie", r1_d: "Chemische Energie",
    r2_title: "Bewegungsenergie (Kinetische Energie)", r2_text: "Kinetische Energie ist die Energie der Bewegung. Je schneller sich ein Objekt bewegt, desto mehr kinetische Energie hat es. Schwerere Objekte haben mehr kinetische Energie als leichtere, die mit der gleichen Geschwindigkeit fahren.",
    r2_fact1: "Ein schneller Lastwagen hat viel mehr kinetische Energie als ein langsames Fahrrad",
    r2_q: "Was hat mehr kinetische Energie?", r2_a: "Ein schneller Lastwagen", r2_b: "Ein langsames Fahrrad", r2_c: "Ein geparktes Auto", r2_d: "Eine schlafende Katze",
    r3_title: "Potenzielle Energie (Lageenergie)", r3_text: "Potenzielle Energie ist gespeicherte Energie aufgrund der Position oder des Zustands eines Objekts. Ein Ball auf einem hohen Regal hat gravitationale potenzielle Energie. Ein gespanntes Gummiband hat elastische potenzielle Energie.",
    r3_fact1: "Je höher ein Objekt ist, desto mehr potenzielle Energie hat es",
    r3_q: "Ein gespanntes Gummiband hat welche Art von Energie?", r3_a: "Elastische potenzielle Energie", r3_b: "Kinetische Energie", r3_c: "Lichtenergie", r3_d: "Schallenergie",
    r4_title: "Wärmeenergie (Thermische Energie)", r4_text: "Wärmeenergie ist Energie von vibrierten Partikeln. Heiße Objekte haben mehr Wärmeenergie als kalte Objekte. Wenn du etwas wärmst, erhöhst du seine Wärmeenergie.",
    r4_fact1: "Kochendes Wasser hat viel mehr Wärmeenergie als ein Eiswürfel",
    r4_q: "Welches hat mehr Wärmeenergie?", r4_a: "Kochendes Wasser", r4_b: "Eiswürfel", r4_c: "Kalter Saft", r4_d: "Gefrorenes Joghurt",
    r5_q1_q: "Welches ist ein Beispiel für kinetische Energie?", r5_q1_a: "Ein rollender Ball", r5_q1_b: "Eine gespannte Feder", r5_q1_c: "Eine Glühbirne", r5_q1_d: "Ein ruhiger Raum",
    r5_q2_q: "Was ist Wärmeenergie?", r5_q2_a: "Wärmeenergie von vibrierten Partikeln", r5_q2_b: "Energie der Bewegung", r5_q2_c: "Gespeicherte Energie in einer Feder", r5_q2_d: "Energie von Lichtwellen",
  },
  hu: {
    r1_title: "Energiaformák", r1_text: "Az energia sok formában jelenik meg: mozgási energia (kinetikus energia), tárolt energia (potenciális energia), hőenergia, fényenergia és hangenergia.",
    r1_fact1: "Minden objektumnak és folyamatnak energia van különféle formákban",
    r1_q: "Egy mozgó autónak milyen típusú energiája van?", r1_a: "Kinetikus energia", r1_b: "Fényenergia", r1_c: "Hangenergia", r1_d: "Kémiai energia",
    r2_title: "Mozgási energia (Kinetikus energia)", r2_text: "A kinetikus energia a mozgás energiája. Minél gyorsabban mozog egy tárgy, annál több kinetikus energiája van. A nehezebb objektumok több kinetikus energiával rendelkeznek, mint a könnyebbek ugyanolyan sebességnél.",
    r2_fact1: "Egy gyors teherautónak sokkal több kinetikus energiája van, mint egy lassú kerékpárnak",
    r2_q: "Melyiknek van több kinetikus energiája?", r2_a: "Egy gyors teherautónak", r2_b: "Egy lassú kerékpárnak", r2_c: "Egy parkoló autónak", r2_d: "Egy alvó macskának",
    r3_title: "Potenciális energia (Helyzeti energia)", r3_text: "A potenciális energia a tárgy pozíciójából vagy állapotából eredő tárolt energia. Egy labda egy magas polcon potenciális gravitációs energiával rendelkezik. Egy megnyújtott gumiszalag rugalmas potenciális energiával rendelkezik.",
    r3_fact1: "Minél magasabban van egy tárgy, annál több potenciális energiája van",
    r3_q: "Egy megnyújtott gumiszalagnak milyen típusú energiája van?", r3_a: "Rugalmas potenciális energia", r3_b: "Kinetikus energia", r3_c: "Fényenergia", r3_d: "Hangenergia",
    r4_title: "Hőenergia (Termikus energia)", r4_text: "A hőenergia a rezgő részecskék energiája. A meleg objektumok több hőenergiával rendelkeznek, mint a hidegek. Amikor melegítesz valamit, növeled annak hőenergiáját.",
    r4_fact1: "A forró víz sokkal több hőenergiával rendelkezik, mint egy jégkocka",
    r4_q: "Melyiknek van több hőenergiája?", r4_a: "Forró víznek", r4_b: "Jégkockának", r4_c: "Hideg levesnek", r4_d: "Fagyasztott joghurtnak",
    r5_q1_q: "Melyik a kinetikus energia példája?", r5_q1_a: "Egy gördülő labda", r5_q1_b: "Egy megfeszített rugó", r5_q1_c: "Egy izzólámpa", r5_q1_d: "Egy csendes szoba",
    r5_q2_q: "Mi a hőenergia?", r5_q2_a: "Hőenergia rezgő részecskékből", r5_q2_b: "Mozgás energiája", r5_q2_c: "Tárolt energia egy rugóban", r5_q2_d: "Energia fényhullámokból",
  },
  ro: {
    r1_title: "Forme de energie", r1_text: "Energia apare în multe forme: energia cinetică (mișcare), energia potențială (stocată), energia termică (căldură), energia luminoasă și energia sonoră.",
    r1_fact1: "Fiecare obiect și proces are energie în forme diferite",
    r1_q: "O mașină în mișcare are ce tip de energie?", r1_a: "Energia cinetică", r1_b: "Energia luminoasă", r1_c: "Energia sonoră", r1_d: "Energia chimică",
    r2_title: "Energia cinetică (Energie de mișcare)", r2_text: "Energia cinetică este energia mișcării. Cu cât mai repede se mișcă un obiect, cu atât mai multă energie cinetică are. Obiectele mai grele au mai multă energie cinetică decât cele mai ușoare la aceeași viteză.",
    r2_fact1: "Un camion rapid are mult mai multă energie cinetică decât o bicicletă lentă",
    r2_q: "Care are mai multă energie cinetică?", r2_a: "Un camion rapid", r2_b: "O bicicletă lentă", r2_c: "O mașină parcată", r2_d: "O pisică care doarme",
    r3_title: "Energia potențială (Energie de poziție)", r3_text: "Energia potențială este energia stocată din cauza poziției sau stării unui obiect. O minge pe un raft înalt are energie potențială gravitațională. O bandă elastică întinsă are energie potențială elastică.",
    r3_fact1: "Cu cât mai sus este un obiect, cu atât mai multă energie potențială are",
    r3_q: "O bandă elastică întinsă are ce tip de energie?", r3_a: "Energie potențială elastică", r3_b: "Energia cinetică", r3_c: "Energia luminoasă", r3_d: "Energia sonoră",
    r4_title: "Energia termică (Căldură)", r4_text: "Energia termică este energia din particulele care vibrează. Obiectele fierbinți au mai multă energie termică decât obiectele reci. Când încălzești ceva, crești energia termică a acestuia.",
    r4_fact1: "Apa fierbinte are mult mai multă energie termică decât un cub de gheață",
    r4_q: "Care are mai multă energie termică?", r4_a: "Apa fierbinte", r4_b: "Un cub de gheață", r4_c: "Suc rece", r4_d: "Iaurt congelat",
    r5_q1_q: "Care este un exemplu de energie cinetică?", r5_q1_a: "O minge care se rostogolește", r5_q1_b: "Un arc comprimat", r5_q1_c: "Un bec", r5_q1_d: "O cameră liniștită",
    r5_q2_q: "Ce este energia termică?", r5_q2_a: "Energie de căldură din particule care vibrează", r5_q2_b: "Energia mișcării", r5_q2_c: "Energia stocată într-un arc", r5_q2_d: "Energie din unde de lumină",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚡</text></svg>
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

export default function EnergyExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
