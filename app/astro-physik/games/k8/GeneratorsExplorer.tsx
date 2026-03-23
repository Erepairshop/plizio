"use client";
// GeneratorsExplorer — Generators, Transformers, Motors (Generatoren & Motoren) Klasse 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Generators", r1_text: "A generator converts mechanical energy (like wind or water) into electrical energy. Inside, a coil rotates in a magnetic field. As the coil rotates, the changing magnetic flux induces an EMF (voltage). The faster the rotation, the more power generated. Most of the world's electricity comes from generators powered by fossil fuels, nuclear energy, or renewables.",
    r1_fact1: "Wind turbines and hydroelectric dams are generators that convert renewable energy to electricity",
    r1_q: "A generator converts...", r1_a: "Mechanical energy to electrical energy", r1_b: "Heat to light", r1_c: "Electrical to magnetic energy", r1_d: "Chemical to thermal energy",
    r2_title: "Alternating vs. Direct Current", r2_text: "AC (alternating current) periodically changes direction. In most countries, mains electricity is AC at 50Hz (Europe, Asia) or 60Hz (Americas). DC (direct current) flows in one constant direction, used in batteries and electronics. AC is easier to transmit over long distances because transformers can efficiently change voltage.",
    r2_fact1: "AC generators naturally produce alternating current; DC requires special commutators or rectifiers",
    r2_q: "Mains electricity is...", r2_a: "Alternating current (AC)", r2_b: "Direct current (DC)", r2_c: "A mixture of both", r2_d: "Only during certain hours",
    r3_title: "Transformers", r3_text: "A transformer changes AC voltage efficiently using two coils with different numbers of turns. The voltage ratio equals the turn ratio: V₁/V₂ = N₁/N₂. Step-up transformers increase voltage for long-distance transmission (reduces power loss). Step-down transformers reduce voltage for household use.",
    r3_fact1: "Power lines transmit at high voltage (hundreds of kV) to reduce losses; transformers step it down to 230V",
    r3_q: "A step-up transformer...", r3_a: "Increases voltage", r3_b: "Decreases voltage", r3_c: "Converts AC to DC", r3_d: "Generates its own power",
    r4_title: "Electric Motors", r4_text: "A motor is essentially a generator running in reverse. Current flowing through a coil in a magnetic field creates a force that rotates the coil. Motors convert electrical energy into mechanical energy. They power everything from electric drills to electric cars. AC induction motors are the most common type in industry.",
    r4_fact1: "Brushless DC motors are more efficient than brushed motors and are used in modern appliances",
    r4_q: "An electric motor converts...", r4_a: "Electrical energy to mechanical energy", r4_b: "Mechanical to light energy", r4_c: "Heat to kinetic energy", r4_d: "Sound to electrical energy",
    r5_q1_q: "If a transformer has 10 turns on the primary coil and 100 turns on the secondary coil, is it a step-up or step-down?", r5_q1_a: "Step-up (voltage increases 10×)", r5_q1_b: "Step-down (voltage decreases)", r5_q1_c: "Neutral (no change)", r5_q1_d: "It converts to DC",
    r5_q2_q: "Why does AC electricity transmission use step-up transformers at power plants?", r5_q2_a: "To reduce power loss during long-distance transmission", r5_q2_b: "To increase cooling efficiency", r5_q2_c: "To make the lights brighter", r5_q2_d: "To prevent short circuits",
  },
  de: {
    r1_title: "Generatoren", r1_text: "Ein Generator wandelt mechanische Energie (wie Wind oder Wasser) in elektrische Energie um. Darin rotiert eine Spule in einem Magnetfeld. Wenn sich die Spule dreht, induziert der sich ändernde Magnetfluss eine EMF (Spannung). Je schneller die Drehung, desto mehr Leistung wird erzeugt. Der Großteil der Weltelektrizität kommt von Generatoren, die durch fossile Brennstoffe, Kernenergie oder erneuerbare Energien angetrieben werden.",
    r1_fact1: "Windkraftanlagen und Wasserkraftwerke sind Generatoren, die erneuerbare Energie in Strom umwandeln",
    r1_q: "Ein Generator wandelt um...", r1_a: "Mechanische Energie in elektrische Energie", r1_b: "Wärme in Licht", r1_c: "Elektrische in magnetische Energie", r1_d: "Chemische in Wärmeenergie",
    r2_title: "Wechselstrom vs. Gleichstrom", r2_text: "AC (Wechselstrom) ändert regelmäßig die Richtung. In den meisten Ländern ist die Stromversorgung AC bei 50Hz (Europa, Asien) oder 60Hz (Amerika). DC (Gleichstrom) fließt in einer konstanten Richtung, verwendet in Batterien und Elektronik. AC ist leichter über lange Strecken zu übertragen, da Transformatoren die Spannung effizient ändern können.",
    r2_fact1: "AC-Generatoren produzieren natürlicherweise Wechselstrom; DC erfordert spezielle Kommutatoren oder Gleichrichter",
    r2_q: "Netzstrom ist...", r2_a: "Wechselstrom (AC)", r2_b: "Gleichstrom (DC)", r2_c: "Ein Gemisch aus beiden", r2_d: "Nur zu bestimmten Zeiten",
    r3_title: "Transformatoren", r3_text: "Ein Transformator ändert die AC-Spannung effizient mit zwei Spulen mit unterschiedlicher Windungszahl. Das Spannungsverhältnis gleicht dem Windungsverhältnis: U₁/U₂ = N₁/N₂. Hochspannungstransformatoren erhöhen die Spannung für die Fernübertragung (reduziert Verluste). Herabtransformatoren reduzieren die Spannung für den Hausgebrauch.",
    r3_fact1: "Stromleitungen übertragen bei hoher Spannung (Hunderte kV) um Verluste zu reduzieren; Transformatoren senken sie auf 230V",
    r3_q: "Ein Hochspannungstransformator...", r3_a: "Erhöht die Spannung", r3_b: "Verringert die Spannung", r3_c: "Wandelt AC in DC um", r3_d: "Erzeugt seine eigene Leistung",
    r4_title: "Elektromotoren", r4_text: "Ein Motor ist im Wesentlichen ein Generator, der rückwärts läuft. Strom, der durch eine Spule in einem Magnetfeld fließt, erzeugt eine Kraft, die die Spule dreht. Motoren wandeln elektrische Energie in mechanische Energie um. Sie treiben alles von Elektrobohrmaschinen bis zu Elektroautos an. AC-Induktionsmotoren sind der häufigste Typ in der Industrie.",
    r4_fact1: "Bürstenlose DC-Motoren sind effizienter als bürstengebundene Motoren und werden in modernen Geräten verwendet",
    r4_q: "Ein Elektromotor wandelt um...", r4_a: "Elektrische Energie in mechanische Energie", r4_b: "Mechanische in Lichtenergie", r4_c: "Wärme in kinetische Energie", r4_d: "Schall in elektrische Energie",
    r5_q1_q: "Wenn ein Transformator 10 Windungen auf der Primärspule und 100 auf der Sekundärspule hat, ist es ein Hochspannungs- oder Herabtransformator?", r5_q1_a: "Hochspannungs (Spannung erhöht sich 10×)", r5_q1_b: "Herab (Spannung verringert sich)", r5_q1_c: "Neutral (keine Änderung)", r5_q1_d: "Es konvertiert zu DC",
    r5_q2_q: "Warum verwenden AC-Stromübertragungen Hochspannungstransformatoren in Kraftwerken?", r5_q2_a: "Um Verluste bei der Fernübertragung zu reduzieren", r5_q2_b: "Um die Kühleffizienz zu erhöhen", r5_q2_c: "Um die Lichter heller zu machen", r5_q2_d: "Um Kurzschlüsse zu verhindern",
  },
  hu: {
    r1_title: "Generátorok", r1_text: "A generátor mechanikai energiát (például szél vagy víz) elektromos energiává alakít. Benne egy tekercs egy mágneses mezőben forog. Ahogy a tekercs forog, a változó mágneses fluxus EMF-et (feszültséget) indukál. Minél gyorsabb a forgatás, annál nagyobb teljesítmény termelődik. A világ szinte összes elektromossága olyan generátorokból származik, amelyeket fosszilis tüzelőanyag, nukleáris energia vagy megújuló energiaforrások hajtanak.",
    r1_fact1: "A szélturbinák és vízierőművek olyan generátorok, amelyek a megújuló energiát áramokká alakítják",
    r1_q: "A generátor konvertál...", r1_a: "Mechanikai energiát elektromos energiára", r1_b: "Hőt fényre", r1_c: "Elektromos energiát mágneses energiára", r1_d: "Kémiai energiát hőenergiára",
    r2_title: "Váltakozó vs. egyenáram", r2_text: "Az AC (váltakozó áram) rendszeres időközönként megváltoztatja az irányát. A legtöbb országban a hálózati elektromosság AC 50Hz (Európa, Ázsia) vagy 60Hz (Amerika) frekvencián. A DC (egyenáram) egy konstans irányban folyik, amelyet akkumulátorok és elektronika használnak. Az AC könnyebben továbbítható nagy távolságok felett, mert a transzformátorok hatékonyan megváltoztathatják a feszültséget.",
    r2_fact1: "Az AC-generátorok természetesen váltakozó áramot termelnek; a DC speciális kommutátorokat vagy egyenirányítókat igényel",
    r2_q: "A hálózati elektromosság...", r2_a: "Váltakozó áram (AC)", r2_b: "Egyenáram (DC)", r2_c: "Mindkettő keveréke", r2_d: "Csak bizonyos órákban",
    r3_title: "Transzformátorok", r3_text: "A transzformátor hatékonyan megváltoztatja az AC-feszültséget két különböző számú tekercset használva. A feszültségarány megegyezik a fordulat aránnyal: U₁/U₂ = N₁/N₂. A feszültségemelő transzformátorok a nagyobb feszültséget használják a távolsági szállításhoz (csökkenti a veszteségeket). A feszültségleszálító transzformátorok csökkentik a feszültséget a háztartási használatra.",
    r3_fact1: "A fővezetékek nagy feszültségen (százak kV) továbbítanak a veszteségek csökkentéséhez; transzformátorok 230V-ra csökkentik",
    r3_q: "Egy feszültségemelő transzformátor...", r3_a: "Megemeli a feszültséget", r3_b: "Csökkenti a feszültséget", r3_c: "AC-t DC-vé konvertál", r3_d: "Saját teljesítményt termel",
    r4_title: "Elektromos motorok", r4_text: "A motor lényegében egy fordított futó generátor. Az egy mágneses mezőben lévő tekercs által áramló áram erőt hoz létre, amely a tekercset elforgatja. A motorok elektromos energiát mechanikai energiává alakítanak. Mindent hajtanak az elektromos fúrógéptől az elektromos autókig. Az AC-indukciómootorok a leggyakoribb típus az iparban.",
    r4_fact1: "A kefementes DC-motorok hatékonyabbak, mint a kefés motorok, és modern készülékekben használják őket",
    r4_q: "Egy elektromos motor konvertál...", r4_a: "Elektromos energiát mechanikai energiára", r4_b: "Mechanikai energiát fényre", r4_c: "Hőt kinetikus energiára", r4_d: "Hangot elektromos energiára",
    r5_q1_q: "Ha egy transzformátornak 10 fordulata van az elsődleges tekercsen és 100 a másodlagos tekercsen, ez feszültségemelő vagy feszültségleszálító?", r5_q1_a: "Feszültségemelő (feszültség 10×-re nő)", r5_q1_b: "Feszültségleszálító (feszültség csökken)", r5_q1_c: "Semleges (nincs változás)", r5_q1_d: "DC-vé konvertál",
    r5_q2_q: "Miért használnak az AC-teljesítmény-szállítások feszültségemelő transzformátorokat az erőművekben?", r5_q2_a: "A távolsági szállítás során a veszteségek csökkentésére", r5_q2_b: "A hűtési hatékonyság fokozására", r5_q2_c: "Annak érdekében, hogy a fények fényesebbek legyenek", r5_q2_d: "A rövidzárlatok megelőzésére",
  },
  ro: {
    r1_title: "Generatoare", r1_text: "Un generator transformă energia mecanică (cum ar fi vânt sau apă) în energie electrică. În interior, o bobină se rotește într-un câmp magnetic. Pe măsură ce bobina se rotește, fluxul magnetic care se schimbă induce o EMF (tensiune). Cu cât mai rapid este rotația, cu atât mai multă putere se generează. Majoritatea electricității mondiale provine din generatoare acționate de combustibili fosili, energie nucleară sau surse regenerabile.",
    r1_fact1: "Turbinele eoliene și barajele hidroelectrice sunt generatoare care transformă energia regenerabilă în electricitate",
    r1_q: "Un generator convertește...", r1_a: "Energia mecanică în energie electrică", r1_b: "Căldură în lumină", r1_c: "Energie electrică în energie magnetică", r1_d: "Energie chimică în energie termică",
    r2_title: "Curent alternativ vs. curent continuu", r2_text: "AC (curent alternativ) se schimbă periodic în direcție. În majoritatea țărilor, electricitatea din rețea este AC la 50Hz (Europa, Asia) sau 60Hz (America). DC (curent continuu) curge într-o singură direcție constantă, utilizată în baterii și electronică. AC este mai ușor de transmis pe distanțe lungi, deoarece transformatoarele pot schimba eficient tensiunea.",
    r2_fact1: "Generatoarele AC produc natural curent alternativ; DC necesită comutatoare speciale sau redresoare",
    r2_q: "Electricitatea din rețea este...", r2_a: "Curent alternativ (AC)", r2_b: "Curent continuu (DC)", r2_c: "Un amestec din ambele", r2_d: "Doar la anumite ore",
    r3_title: "Transformatoare", r3_text: "Un transformator schimbă eficient tensiunea AC folosind două bobine cu numere diferite de spire. Raportul de tensiune este egal cu raportul de spire: U₁/U₂ = N₁/N₂. Transformatoarele de ridicare cresc tensiunea pentru transmisie pe distanță lungă (reduce pierderile). Transformatoarele de coborâre reduc tensiunea pentru utilizarea în gospodărie.",
    r3_fact1: "Liniile de energie transmit la tensiune înaltă (sute kV) pentru a reduce pierderile; transformatoarele o reduc la 230V",
    r3_q: "Un transformator de ridicare...", r3_a: "Mărește tensiunea", r3_b: "Scade tensiunea", r3_c: "Convertește AC în DC", r3_d: "Generează propria sa putere",
    r4_title: "Motoare electrice", r4_text: "Un motor este în esență un generator care funcționează invers. Curentul care curge prin o bobină într-un câmp magnetic creează o forță care rotește bobina. Motoarele transformă energia electrică în energie mecanică. Ele alimentează totul, de la burghie electrice la mașini electrice. Motoarele asincrone AC sunt cel mai comun tip din industrie.",
    r4_fact1: "Motoarele DC fără perii sunt mai eficiente decât motoarele cu perii și sunt utilizate în aparatele moderne",
    r4_q: "Un motor electric convertează...", r4_a: "Energie electrică în energie mecanică", r4_b: "Energie mecanică în lumină", r4_c: "Căldură în energie cinetică", r4_d: "Sunet în energie electrică",
    r5_q1_q: "Dacă un transformator are 10 spire pe bobina primară și 100 pe bobina secundară, este de ridicare sau coborâre?", r5_q1_a: "De ridicare (tensiunea crește de 10×)", r5_q1_b: "De coborâre (tensiunea scade)", r5_q1_c: "Neutru (fără schimbare)", r5_q1_d: "Se convertește în DC",
    r5_q2_q: "De ce transmisia de electricitate AC utilizează transformatoare de ridicare la centrale electrice?", r5_q2_a: "Pentru a reduce pierderea de putere în transmisia pe distanță lungă", r5_q2_b: "Pentru a crește eficiența răcirii", r5_q2_c: "Pentru a face luminile mai luminoase", r5_q2_d: "Pentru a preveni scurtcircuitele",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚙️</text></svg>
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

export default function GeneratorsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
