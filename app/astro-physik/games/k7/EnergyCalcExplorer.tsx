"use client";
// EnergyCalcExplorer — Energy Calculations, Mechanical Advantage (Energieberechnung, Hebelgesetz) Klasse 7
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Energy Conservation", r1_text: "Energy is conserved. It changes form but does not disappear. At the top of a hill, an object has mostly potential energy (PE). At the bottom, it has mostly kinetic energy (KE). Total energy = PE + KE = constant.",
    r1_fact1: "A ball rolling down a hill converts PE to KE; at the bottom, all PE became KE",
    r1_q: "A ball at the top of a hill has mostly...", r1_a: "Potential energy", r1_b: "Kinetic energy", r1_c: "Heat", r1_d: "Sound energy",
    r2_title: "Energy Transfers in Motion", r2_text: "Pendulum: swings like PE ↔ KE. At the highest point (PE max), speed is zero (KE min). At the lowest point (PE min), speed is highest (KE max). Roller coaster: PE at top converts to KE at bottom, then back to PE at the other top.",
    r2_fact1: "At the bottom of a swing, energy is mostly kinetic (the swing moves fastest)",
    r2_q: "At the bottom of a swing, energy is mostly...", r2_a: "Kinetic", r2_b: "Potential", r2_c: "Gravitational", r2_d: "Heat",
    r3_title: "Mechanical Advantage", r3_text: "Mechanical advantage (MA) = Load ÷ Effort. Levers, pulleys, and ramps increase MA. A lever with MA=4 allows you to lift 200N with only 50N of effort. Less effort needed, but you move farther. Trade-off: effort down, distance up.",
    r3_fact1: "A lever with MA=4 lifts 200N load with 50N effort",
    r3_q: "A lever lifts 200N with 50N effort. MA is...", r3_a: "4", r3_b: "2", r3_c: "0.25", r3_d: "250",
    r4_title: "Efficiency & Energy Loss", r4_text: "Efficiency = (useful output ÷ total input) × 100%. Real machines lose energy to friction and heat. A machine with 1000J input and 800J useful output has efficiency = 800÷1000 × 100 = 80%. No real machine is 100% efficient; some energy is always wasted.",
    r4_fact1: "A car engine might only be 30% efficient; 70% energy becomes heat",
    r4_q: "A machine uses 1000J input, gives 800J useful output. Efficiency?", r4_a: "80%", r4_b: "50%", r4_c: "200%", r4_d: "20%",
    r5_q1_q: "A person uses a lever to lift a heavy box. The lever provides...", r5_q1_a: "Mechanical advantage", r5_q1_b: "More energy", r5_q1_c: "Gravity", r5_q1_d: "Friction",
    r5_q2_q: "In a real machine, some input energy becomes...", r5_q2_a: "Heat and friction", r5_q2_b: "Kinetic energy", r5_q2_c: "Useful work", r5_q2_d: "Gravitational PE",
  },
  de: {
    r1_title: "Energieerhaltung", r1_text: "Energie wird erhalten. Sie ändert die Form, aber verschwindet nicht. An der Spitze eines Hügels hat ein Objekt hauptsächlich potenzielle Energie (PE). Am Boden hat es hauptsächlich kinetische Energie (KE). Gesamtenergie = PE + KE = konstant.",
    r1_fact1: "Ein Ball, der einen Hügel hinunterrollt, wandelt PE in KE um; am Boden wurde alle PE zu KE",
    r1_q: "Ein Ball an der Spitze eines Hügels hat hauptsächlich...", r1_a: "Potentielle Energie", r1_b: "Kinetische Energie", r1_c: "Wärmenergie", r1_d: "Schallenergie",
    r2_title: "Energieüberträge in Bewegung", r2_text: "Pendel: schwingt wie PE ↔ KE. Am höchsten Punkt (PE max) ist die Geschwindigkeit null (KE min). Am niedrigsten Punkt (PE min) ist die Geschwindigkeit am höchsten (KE max). Achterbahn: PE oben wird zu KE unten, dann zurück zu PE oben auf der anderen Seite.",
    r2_fact1: "Am untersten Punkt eines Pendels ist die Energie hauptsächlich kinetisch (das Pendel bewegt sich am schnellsten)",
    r2_q: "Am untersten Punkt eines Pendels ist die Energie hauptsächlich...", r2_a: "Kinetisch", r2_b: "Potentiell", r2_c: "Gravitativ", r2_d: "Wärme",
    r3_title: "Mechanischer Vorteil", r3_text: "Mechanischer Vorteil (MA) = Last ÷ Anstrengung. Hebel, Rollen und Rampen erhöhen MA. Ein Hebel mit MA=4 ermöglicht es dir, 200N mit nur 50N Anstrengung zu heben. Weniger Anstrengung nötig, aber du bewegst dich weiter. Kompromiss: Anstrengung runter, Entfernung rauf.",
    r3_fact1: "Ein Hebel mit MA=4 hebt 200N Last mit 50N Anstrengung",
    r3_q: "Ein Hebel hebt 200N mit 50N Anstrengung. MA ist...", r3_a: "4", r3_b: "2", r3_c: "0,25", r3_d: "250",
    r4_title: "Wirkungsgrad und Energieverlust", r4_text: "Wirkungsgrad = (nutzbarer Output ÷ Gesamteingabe) × 100%. Echte Maschinen verlieren Energie durch Reibung und Wärme. Eine Maschine mit 1000J Eingabe und 800J nützlichem Output hat einen Wirkungsgrad = 800÷1000 × 100 = 80%. Keine echte Maschine ist 100% effizient; etwas Energie wird immer verschwendet.",
    r4_fact1: "Ein Automotor könnte nur 30% effizient sein; 70% der Energie wird Wärme",
    r4_q: "Eine Maschine verwendet 1000J Eingabe, gibt 800J nützlichen Output. Wirkungsgrad?", r4_a: "80%", r4_b: "50%", r4_c: "200%", r4_d: "20%",
    r5_q1_q: "Eine Person benutzt einen Hebel, um eine schwere Kiste zu heben. Der Hebel bietet...", r5_q1_a: "Mechanischen Vorteil", r5_q1_b: "Mehr Energie", r5_q1_c: "Gravitation", r5_q1_d: "Reibung",
    r5_q2_q: "In einer echten Maschine wird etwas der Eingabeenergie zu...", r5_q2_a: "Wärme und Reibung", r5_q2_b: "Kinetischer Energie", r5_q2_c: "Nützliche Arbeit", r5_q2_d: "Gravitationalem PE",
  },
  hu: {
    r1_title: "Energia megmaradása", r1_text: "Az energia megmarad. A forma megváltozik, de nem tűnik el. Egy hegy tetején egy objektum főleg helyzeti energiával (PE) rendelkezik. Az alján főleg mozgási energiával (KE) rendelkezik. Teljes energia = PE + KE = állandó.",
    r1_fact1: "Egy labda, amely egy hegyről legurul, PE-t KE-vé alakít; az alján az összes PE KE-vé lett",
    r1_q: "Egy labda a hegy tetején főleg... rendelkezik", r1_a: "Helyzeti energiával", r1_b: "Mozgási energiával", r1_c: "Hőenergiával", r1_d: "Hangenergiával",
    r2_title: "Energia-átvitelek mozgásban", r2_text: "Inga: lenggett mint PE ↔ KE. A legmagasabb ponton (PE max) a sebesség nulla (KE min). A legalacsonyabb ponton (PE min) a sebesség a legmagasabb (KE max). Hullámvasút: PE fent KE-vé válik lent, majd vissza PE-vé a másik tetején.",
    r2_fact1: "Az inga alján az energia főleg mozgási (az inga a leggyorsabban mozog)",
    r2_q: "Az inga alján az energia főleg...", r2_a: "Mozgási", r2_b: "Helyzeti", r2_c: "Gravitációs", r2_d: "Hő",
    r3_title: "Mechanikai előny", r3_text: "Mechanikai előny (MA) = terhelés ÷ erőfeszítés. A karok, csigák és lejtők növelik az MA-t. Egy kar MA=4-vel lehetővé teszi, hogy 200N-t emeljél fel csak 50N erőfeszítéssel. Kevesebb erőfeszítés szükséges, de távolabb mozogsz. Kompromisszum: erőfeszítés lefelé, távolság felfelé.",
    r3_fact1: "Egy kar MA=4-vel 200N terhelést emeli fel 50N erőfeszítéssel",
    r3_q: "Egy kar 200N-t emel fel 50N erőfeszítéssel. MA...", r3_a: "4", r3_b: "2", r3_c: "0,25", r3_d: "250",
    r4_title: "Hatékonyság és energiaveszteség", r4_text: "Hatékonyság = (hasznos kimenet ÷ teljes bemenet) × 100%. A valódi gépek energiát veszítenek súrlódás és hő miatt. Egy gép 1000J bemenettel és 800J hasznos kimenettel rendelkezik: hatékonyság = 800÷1000 × 100 = 80%. Nincs 100%-osan hatékony gép; valamilyen energia mindig veszteséges.",
    r4_fact1: "Egy autómotor csak 30%-osan hatékony lehet; 70% energiája hővé válik",
    r4_q: "Egy gép 1000J bemenetet használ, 800J hasznos kimenetet ad. Hatékonyság?", r4_a: "80%", r4_b: "50%", r4_c: "200%", r4_d: "20%",
    r5_q1_q: "Egy személy egy kart használ egy nehéz doboz emeléséhez. A kar... biztosít", r5_q1_a: "Mechanikai előnyt", r5_q1_b: "Több energiát", r5_q1_c: "Gravitációt", r5_q1_d: "Súrlódást",
    r5_q2_q: "Egy valódi gépben a bemeneti energia egy része... válik", r5_q2_a: "Hővé és súrlódássá", r5_q2_b: "Mozgási energiává", r5_q2_c: "Hasznos munkává", r5_q2_d: "Gravitációs PE-vé",
  },
  ro: {
    r1_title: "Conservarea energiei", r1_text: "Energia se conservă. Ea schimbă forma, dar nu dispare. În vârful unui deal, un obiect are în principal energie potențială (PE). În jos, are în principal energie cinetică (KE). Energia totală = PE + KE = constantă.",
    r1_fact1: "O minge care se rostogolește pe un deal convertește PE în KE; în jos, toată PE a devenit KE",
    r1_q: "O minge în vârful unui deal are în principal...", r1_a: "Energie potențială", r1_b: "Energie cinetică", r1_c: "Energie termică", r1_d: "Energie sonoră",
    r2_title: "Transferuri de energie în mișcare", r2_text: "Pendul: se leagănă ca PE ↔ KE. La cel mai înalt punct (PE max), viteza este zero (KE min). La cel mai jos punct (PE min), viteza este cea mai mare (KE max). Roller coaster: PE în vârf se convertește în KE în jos, apoi înapoi în PE în vârful celălalt.",
    r2_fact1: "În punctul cel mai jos al unui leagăn, energia este în principal cinetică (leagănul se mișcă cel mai repede)",
    r2_q: "În punctul cel mai jos al unui leagăn, energia este în principal...", r2_a: "Cinetică", r2_b: "Potențială", r2_c: "Gravitațională", r2_d: "Termică",
    r3_title: "Avantajul mecanic", r3_text: "Avantajul mecanic (MA) = sarcină ÷ efort. Pârghiile, scripetele și rampele cresc MA. O pârghie cu MA=4 te permite să ridici 200N cu doar 50N efort. Efort mai mic, dar te mișți mai departe. Compromis: efort scade, distanță crește.",
    r3_fact1: "O pârghie cu MA=4 ridică sarcina de 200N cu 50N efort",
    r3_q: "O pârghie ridică 200N cu 50N efort. MA este...", r3_a: "4", r3_b: "2", r3_c: "0,25", r3_d: "250",
    r4_title: "Eficiență și pierdere de energie", r4_text: "Eficiență = (ieșire utilă ÷ intrare totală) × 100%. Mașinile reale pierd energie din cauza fricțiunii și căldurii. O mașină cu intrare de 1000J și ieșire utilă de 800J are eficiență = 800÷1000 × 100 = 80%. Nicio mașină reală nu este 100% eficientă; ceva energie este întotdeauna risipită.",
    r4_fact1: "Un motor de mașină ar putea fi doar 30% eficient; 70% din energie devine căldură",
    r4_q: "O mașină utilizează 1000J intrare, dă 800J ieșire utilă. Eficiență?", r4_a: "80%", r4_b: "50%", r4_c: "200%", r4_d: "20%",
    r5_q1_q: "O persoană folosește o pârghie pentru a ridica o cutie grea. Pârghia oferă...", r5_q1_a: "Avantaj mecanic", r5_q1_b: "Mai multă energie", r5_q1_c: "Gravitație", r5_q1_d: "Frecare",
    r5_q2_q: "Într-o mașină reală, o parte a energiei de intrare devine...", r5_q2_a: "Căldură și frecare", r5_q2_b: "Energie cinetică", r5_q2_c: "Lucru util", r5_q2_d: "PE gravitațional",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔋</text></svg>
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

export default function EnergyCalcExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
