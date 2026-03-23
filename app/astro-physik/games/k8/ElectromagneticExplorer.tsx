"use client";
// ElectromagneticExplorer — Electromagnets & Induction (Elektromagnetismus) Klasse 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Electromagnets", r1_text: "An electromagnet is created by wrapping wire around an iron core and running electric current through it. The magnetic field strength depends on the current and the number of coils. Increase current or add more turns to make it stronger. Turn off the current, and the magnetic field disappears.",
    r1_fact1: "Electromagnets are used in electric motors, relays, MRI machines, and scrapyard cranes",
    r1_q: "How to make an electromagnet stronger?", r1_a: "Increase current or add more coils", r1_b: "Use a plastic core instead of iron", r1_c: "Reduce the wire diameter", r1_d: "Decrease the voltage",
    r2_title: "Electromagnetic Induction", r2_text: "When a magnet moves near a coil of wire, it induces an electrical voltage (EMF) in the coil. This is Faraday's law of electromagnetic induction. The faster the magnet moves, the stronger the voltage. This principle allows generators to convert mechanical energy into electrical energy.",
    r2_fact1: "A moving magnet induces current; a moving coil near a stationary magnet also works",
    r2_q: "Moving a magnet into a coil produces...", r2_a: "An induced voltage", r2_b: "Only heat", r2_c: "Magnetic reflection", r2_d: "No electrical effect",
    r3_title: "Lenz's Law", r3_text: "Lenz's law states that an induced current always opposes the change that caused it. If you push a magnet into a coil, the induced current creates a magnetic field that repels the magnet. This represents conservation of energy: energy is required to push the magnet against this opposing force.",
    r3_fact1: "Lenz's law explains why eddy current brakes in trains work; they oppose motion",
    r3_q: "Lenz's law says the induced current...", r3_a: "Opposes the change causing it", r3_b: "Always flows in the same direction", r3_c: "Cannot be reversed", r3_d: "Follows Ohm's law only",
    r4_title: "Applications of Electromagnetic Induction", r4_text: "Induction cooktops heat pans by creating a changing magnetic field. Electric guitar pickups use induction to detect string vibrations. Wireless charging uses electromagnetic induction to transfer energy across air gaps. Transformers use induction to step voltage up or down.",
    r4_fact1: "Induction cooktops heat only ferromagnetic pans; aluminum and glass don't work",
    r4_q: "Induction cooktops heat pans using...", r4_a: "Electromagnetic induction", r4_b: "Direct flame", r4_c: "Resistive coils", r4_d: "Microwaves",
    r5_q1_q: "If you increase the number of turns in an electromagnet coil, what happens to its strength?", r5_q1_a: "It increases", r5_q1_b: "It decreases", r5_q1_c: "It stays the same", r5_q1_d: "It becomes random",
    r5_q2_q: "What does Faraday's law describe?", r5_q2_a: "Electromagnetic induction from changing magnetic flux", r5_q2_b: "The color of light", r5_q2_c: "Sound waves in water", r5_q2_d: "Temperature change in circuits",
  },
  de: {
    r1_title: "Elektromagnete", r1_text: "Ein Elektromagnet wird erzeugt, indem man einen Draht um einen Eisenkern wickelt und Strom hindurchfließen lässt. Die Magnetfeldstärke hängt vom Strom und der Anzahl der Spulen ab. Erhöhen Sie den Strom oder fügen Sie mehr Windungen hinzu, um ihn stärker zu machen. Schalten Sie den Strom aus, und das Magnetfeld verschwindet.",
    r1_fact1: "Elektromagnete werden in Elektromotoren, Relais, MRT-Maschinen und Schrottplatzgreifen verwendet",
    r1_q: "Wie macht man einen Elektromagnet stärker?", r1_a: "Erhöhen Sie den Strom oder fügen Sie mehr Spulen hinzu", r1_b: "Verwenden Sie einen Kunststoffkern statt Eisen", r1_c: "Reduzieren Sie den Drahtdurchmesser", r1_d: "Verringern Sie die Spannung",
    r2_title: "Elektromagnetische Induktion", r2_text: "Wenn ein Magnet in der Nähe einer Drahtspule bewegt wird, wird in der Spule eine elektrische Spannung (EMF) induziert. Dies ist Faradays Gesetz der elektromagnetischen Induktion. Je schneller sich der Magnet bewegt, desto stärker ist die Spannung. Dieses Prinzip ermöglicht es Generatoren, mechanische Energie in elektrische Energie umzuwandeln.",
    r2_fact1: "Ein bewegter Magnet induziert Strom; eine bewegte Spule neben einem stationären Magneten funktioniert auch",
    r2_q: "Das Bewegen eines Magneten in eine Spule erzeugt...", r2_a: "Eine induzierte Spannung", r2_b: "Nur Wärme", r2_c: "Magnetische Reflexion", r2_d: "Keine elektrische Wirkung",
    r3_title: "Lenz-Regel", r3_text: "Die Lenz-Regel besagt, dass ein induzierter Strom der Änderung, die ihn verursacht hat, immer entgegenwirkt. Wenn Sie einen Magneten in eine Spule schieben, erzeugt der induzierte Strom ein Magnetfeld, das den Magneten abstoßt. Dies stellt eine Energieerhaltung dar: Es ist Energie erforderlich, um den Magneten gegen diese entgegengesetzte Kraft zu drücken.",
    r3_fact1: "Die Lenz-Regel erklärt, warum Wirbelstrombremsen in Zügen funktionieren; sie widersprechen der Bewegung",
    r3_q: "Lenz-Regel sagt der induzierte Strom...", r3_a: "Widersetzt sich der Änderung, die ihn verursacht", r3_b: "Fließt immer in die gleiche Richtung", r3_c: "Kann nicht umgekehrt werden", r3_d: "Folgt nur dem Ohmschen Gesetz",
    r4_title: "Anwendungen der elektromagnetischen Induktion", r4_text: "Induktionskochfelder heizen Pfannen, indem sie ein sich änderndes Magnetfeld erzeugen. E-Gitarren-Tonabnehmer nutzen Induktion, um Saitenvibration zu erfassen. Kabelloses Laden nutzt elektromagnetische Induktion, um Energie über Luftspalte zu übertragen. Transformatoren nutzen Induktion, um die Spannung zu erhöhen oder zu senken.",
    r4_fact1: "Induktionskochfelder heizen nur ferromagnetische Pfannen; Aluminium und Glas funktionieren nicht",
    r4_q: "Induktionskochfelder heizen Pfannen mit...", r4_a: "Elektromagnetischer Induktion", r4_b: "Direkter Flamme", r4_c: "Widerstandsspulen", r4_d: "Mikrowellen",
    r5_q1_q: "Wenn Sie die Anzahl der Windungen in einer Elektromagnetspule erhöhen, was passiert mit ihrer Stärke?", r5_q1_a: "Sie nimmt zu", r5_q1_b: "Sie nimmt ab", r5_q1_c: "Sie bleibt gleich", r5_q1_d: "Sie wird zufällig",
    r5_q2_q: "Was beschreibt Faradays Gesetz?", r5_q2_a: "Elektromagnetische Induktion durch Änderung des Magnetflusses", r5_q2_b: "Die Farbe des Lichts", r5_q2_c: "Schallwellen im Wasser", r5_q2_d: "Temperaturänderung in Schaltkreisen",
  },
  hu: {
    r1_title: "Elektromágnesek", r1_text: "Egy elektromágneszt úgy hozunk létre, hogy vezetéket tekerünk egy vasmagra és elektromos áramot vezetünk át rajta. A mágneses tér erőssége az áramtól és a tekercsek számától függ. Növelje az áramot vagy adjon hozzá több fordulót, hogy erősebb legyen. Kapcsolja ki az áramot, és a mágneses mező eltűnik.",
    r1_fact1: "Az elektromágneseket elektromotorokban, relékban, MRI-gépekben és hulladéklerakó darukban használják",
    r1_q: "Hogyan lehet egy elektromágnest erősebbé tenni?", r1_a: "Növelje az áramot vagy adjon hozzá több tekercseket", r1_b: "Használjon műanyag magot vas helyett", r1_c: "Csökkentse a vezeték átmérőjét", r1_d: "Csökkentse a feszültséget",
    r2_title: "Elektromágneses indukció", r2_text: "Amikor egy mágnes egy vezetéktekercs közelében mozog, elektromos feszültséget (EMF) indukál a tekercsben. Ez Faraday elektromágneses indukciós törvénye. Minél gyorsabban mozog a mágnes, annál erősebb a feszültség. Ez az elv lehetővé teszi a generátoroknak, hogy a mechanikai energiát elektromos energiává alakítsák.",
    r2_fact1: "Egy mozgó mágnes áramot indukál; egy mozgó tekercs egy stacionárius mágnes mellett is működik",
    r2_q: "Egy mágnes mozgatása egy tekercsbe produkál...", r2_a: "Egy indukált feszültséget", r2_b: "Csak hőt", r2_c: "Mágneses reflexiót", r2_d: "Nincs elektromos hatás",
    r3_title: "Lenz-törvénye", r3_text: "Lenz törvénye kimondja, hogy az indukált áram mindig ellentmond az azt okozó változásnak. Ha egy mágnest egy tekercsbe tolunk, az indukált áram egy olyan mágneses teret hoz létre, amely taszítja a mágnesét. Ez az energia megmaradását képviseli: energia szükséges a mágnes felfelé tolásához ezen az ellentétes erő ellen.",
    r3_fact1: "Lenz törvénye magyarázza, miért működnek az örvényáram-fékek a vonatokban; ellentmondanak a mozgásnak",
    r3_q: "Lenz törvénye azt mondja az indukált áramnak...", r3_a: "Ellentmond az azt okozó változásnak", r3_b: "Mindig ugyanabban az irányban folyik", r3_c: "Nem lehet visszafordítani", r3_d: "Csak az Ohm-törvényt követi",
    r4_title: "Az elektromágneses indukció alkalmazásai", r4_text: "Az indukciós főzőlap váltakozó mágneses mezővel melegíti a serpenyőket. Az elektromos gitár hangfelvétele az indukciót használja a húr rezgésének érzékeléséhez. A vezeték nélküli töltés elektromágneses indukciót használ az energia átadásához légréseken keresztül. A transzformátorok indukciót használnak a feszültség fel- vagy leszállítására.",
    r4_fact1: "Az indukciós főzőlapok csak ferromágneses serpenyőket melegítenek; az alumínium és az üveg nem működik",
    r4_q: "Az indukciós főzőlapok serpenyőket melegítenek...", r4_a: "Elektromágneses indukciót", r4_b: "Közvetlen lánggal", r4_c: "Ellenálló tekercsekkel", r4_d: "Mikrohullámokkal",
    r5_q1_q: "Ha egy elektromágnes tekercsben a tekercsek számát növeli, mi történik az erősségével?", r5_q1_a: "Nő", r5_q1_b: "Csökken", r5_q1_c: "Ugyanaz marad", r5_q1_d: "Véletlen lesz",
    r5_q2_q: "Mit ír le Faraday törvénye?", r5_q2_a: "Elektromágneses indukció a mágneses fluxus változásából", r5_q2_b: "A fény színe", r5_q2_c: "Hanghullámok a vízben", r5_q2_d: "Hőmérséklet-változás az áramkörökben",
  },
  ro: {
    r1_title: "Electromagneți", r1_text: "Un electromagnet se creează prin înfășurarea firului în jurul unui miez de fier și trecerea curentului electric prin el. Puterea câmpului magnetic depinde de curent și de numărul de spire. Creșteți curentul sau adăugați mai multe spire pentru a-l face mai puternic. Opriți curentul și câmpul magnetic dispare.",
    r1_fact1: "Electromagneții sunt utilizați în motoare electrice, relee, mașini RMN și macarale de fierăstrău",
    r1_q: "Cum să faci un electromagnet mai puternic?", r1_a: "Creșteți curentul sau adăugați mai multe bobine", r1_b: "Utilizați un miez de plastic în loc de fier", r1_c: "Reduceți diametrul firului", r1_d: "Reduceți tensiunea",
    r2_title: "Inducția electromagnetică", r2_text: "Când un magnet se mișcă lângă o bobină de sârmă, induce o tensiune electrică (EMF) în bobină. Aceasta este legea inducției electromagnetice a lui Faraday. Cu cât se mișcă mai repede magnetul, cu atât mai puternică este tensiunea. Acest principiu permite generatoarelor să convertească energia mecanică în energie electrică.",
    r2_fact1: "Un magnet în mișcare induce curent; o bobină în mișcare lângă un magnet staționar funcționează de asemenea",
    r2_q: "Mișcarea unui magnet într-o bobină produce...", r2_a: "O tensiune indusă", r2_b: "Doar căldură", r2_c: "Reflexie magnetică", r2_d: "Fără efect electric",
    r3_title: "Legea lui Lenz", r3_text: "Legea lui Lenz afirmă că un curent indus se opune întotdeauna schimbării care l-a cauzat. Dacă apăsați un magnet într-o bobină, curentul indus creează un câmp magnetic care respinge magnetul. Aceasta reprezintă conservarea energiei: energia este necesară pentru a împinge magnetul împotriva acestei forțe opuse.",
    r3_fact1: "Legea lui Lenz explică de ce funcționează frânele cu curent turbionar din trenuri; se opun mișcării",
    r3_q: "Legea lui Lenz spune că curentul indus...", r3_a: "Se opune schimbării care o provoacă", r3_b: "Curge întotdeauna în aceeași direcție", r3_c: "Nu poate fi inversat", r3_d: "Urmează doar legea lui Ohm",
    r4_title: "Aplicații ale inducției electromagnetice", r4_text: "Plitele cu inducție încălzesc tigaile prin crearea unui câmp magnetic care se schimbă. Captoarele de chitară electrică folosesc inducția pentru a detecta vibrațiile șirurilor. Încărcarea wireless folosește inducția electromagnetică pentru a transfera energie peste spații de aer. Transformatoarele folosesc inducția pentru a crește sau a scădea tensiunea.",
    r4_fact1: "Plitele cu inducție încălzesc doar tigaile feromagnetice; aluminiul și sticla nu funcționează",
    r4_q: "Plitele cu inducție încălzesc tigaile folosind...", r4_a: "Inducția electromagnetică", r4_b: "Flacără directă", r4_c: "Bobine rezistive", r4_d: "Microunde",
    r5_q1_q: "Dacă creșteți numărul de spire în bobina unui electromagnet, ce se întâmplă cu puterea sa?", r5_q1_a: "Crește", r5_q1_b: "Scade", r5_q1_c: "Rămâne la fel", r5_q1_d: "Devine aleatorie",
    r5_q2_q: "Ce descrie legea lui Faraday?", r5_q2_a: "Inducția electromagnetică din fluxul magnetic în schimbare", r5_q2_b: "Culoarea luminii", r5_q2_c: "Undele sonore în apă", r5_q2_d: "Schimbarea temperaturii în circuite",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🧲</text></svg>
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

export default function ElectromagneticExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
