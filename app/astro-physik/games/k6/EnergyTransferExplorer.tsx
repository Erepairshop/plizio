"use client";
// EnergyTransferExplorer — Energy Transfer, Efficiency, Power (Energieübertragung) Grade 6

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Energy Chains", r1_text: "Energy flows in chains: Sun → chemical (food) → kinetic (movement) → thermal (heat). At each step, some energy is lost as heat. Nothing is 100% efficient.",
    r1_fact1: "When you run, chemical energy (food) converts to kinetic energy and heat",
    r1_q: "What happens to energy at each step in a chain?", r1_a: "Some is lost as heat", r1_b: "All energy stays", r1_c: "Energy multiplies", r1_d: "No energy changes",
    r2_title: "Efficiency", r2_text: "Efficiency = (Useful output ÷ Total input) × 100%. LED bulbs are ~80% efficient (80% light, 20% heat). Incandescent bulbs are ~5% efficient (5% light, 95% heat).",
    r2_fact1: "LED bulbs are much more efficient than incandescent bulbs, so they waste less energy",
    r2_q: "Which bulb is more efficient?", r2_a: "LED bulb", r2_b: "Incandescent bulb", r2_c: "Same efficiency", r2_d: "Depends on size",
    r3_title: "Power Plants", r3_text: "Power plants convert chemical or nuclear energy → heat → steam → turbine → electricity. Coal and nuclear plants burn fuel to boil water, creating steam that spins turbines.",
    r3_fact1: "Coal power plants burn coal to create heat, which boils water into steam for turbines",
    r3_q: "How does a coal power plant make electricity?", r3_a: "Heat water → steam → spin turbines", r3_b: "Direct burning of coal", r3_c: "Chemical reaction in wire", r3_d: "Magnetic waves",
    r4_title: "Renewable vs Fossil Fuels", r4_text: "Renewable: Solar, wind, hydro—unlimited and clean. Fossil: Coal, oil, gas—limited supply and pollute. Using renewables helps protect the environment and the energy supply.",
    r4_fact1: "Solar panels convert sunlight directly to electricity, creating zero pollution",
    r4_q: "Which is a renewable energy source?", r4_a: "Solar power", r4_b: "Coal", r4_c: "Oil", r4_d: "Natural gas",
    r5_q1_q: "What is efficiency in simple terms?", r5_q1_a: "How much useful work you get from energy input", r5_q1_b: "Total energy you have", r5_q1_c: "Heat produced", r5_q1_d: "Speed of a machine",
    r5_q2_q: "Why are fossil fuels a problem?", r5_q2_a: "They pollute and supply is limited", r5_q2_b: "They are expensive", r5_q2_c: "They are too fast", r5_q2_d: "They are too light",
  },
  de: {
    r1_title: "Energieketten", r1_text: "Energie fließt in Ketten: Sonne → chemisch (Lebensmittel) → kinetisch (Bewegung) → thermisch (Wärme). Bei jedem Schritt geht etwas Energie verloren. Nichts ist 100% effizient.",
    r1_fact1: "Wenn du rennst, wandelt sich chemische Energie (Lebensmittel) in kinetische Energie und Wärme um",
    r1_q: "Was passiert mit Energie bei jedem Schritt einer Kette?", r1_a: "Einiges geht als Wärme verloren", r1_b: "Alle Energie bleibt", r1_c: "Energie multipliziert sich", r1_d: "Keine Energieänderung",
    r2_title: "Effizienz", r2_text: "Effizienz = (Nutzbarer Ausgang ÷ Gesamteingabe) × 100%. LED-Birnen sind ~80% effizient (80% Licht, 20% Wärme). Glühbirnen sind ~5% effizient (5% Licht, 95% Wärme).",
    r2_fact1: "LED-Birnen sind viel effizienter als Glühbirnen und verschwenden weniger Energie",
    r2_q: "Welche Birne ist effizienter?", r2_a: "LED-Birne", r2_b: "Glühbirne", r2_c: "Gleiche Effizienz", r2_d: "Hängt von Größe ab",
    r3_title: "Kraftwerke", r3_text: "Kraftwerke wandeln chemische oder nukleare Energie → Wärme → Dampf → Turbine → Strom um. Kohle- und Kernkraftwerke verbrennen Brennstoff, um Wasser zu kochen und Dampf zu erzeugen.",
    r3_fact1: "Kohlekraftwerke verbrennen Kohle, um Wärme zu erzeugen, die Wasser zu Dampf für Turbinen kocht",
    r3_q: "Wie erzeugt ein Kohlekraftwerk Strom?", r3_a: "Wasser heizen → Dampf → Turbinen drehen", r3_b: "Direktes Verbrennen von Kohle", r3_c: "Chemische Reaktion in Draht", r3_d: "Magnetische Wellen",
    r4_title: "Erneuerbar vs Fossile Brennstoffe", r4_text: "Erneuerbar: Sonne, Wind, Wasser—unbegrenzt und sauber. Fossile: Kohle, Öl, Gas—begrenzte Versorgung und Verschmutzung. Die Nutzung erneuerbarer Energien schützt die Umwelt und Energieversorgung.",
    r4_fact1: "Sonnenpanels wandeln Sonnenlicht direkt in Strom um und erzeugen null Verschmutzung",
    r4_q: "Welche ist eine erneuerbare Energiequelle?", r4_a: "Solarstrom", r4_b: "Kohle", r4_c: "Öl", r4_d: "Erdgas",
    r5_q1_q: "Was ist Effizienz in einfachen Worten?", r5_q1_a: "Wie viel nützliche Arbeit man aus Energieeinsatz bekommt", r5_q1_b: "Gesamte Energie, die man hat", r5_q1_c: "Erzeugte Wärme", r5_q1_d: "Geschwindigkeit einer Maschine",
    r5_q2_q: "Warum sind fossile Brennstoffe ein Problem?", r5_q2_a: "Sie verschmutzen und die Versorgung ist begrenzt", r5_q2_b: "Sie sind teuer", r5_q2_c: "Sie sind zu schnell", r5_q2_d: "Sie sind zu leicht",
  },
  hu: {
    r1_title: "Energia láncok", r1_text: "Az energia láncban folyik: Nap → kémia (élelmiszer) → kinetikus (mozgás) → termikus (hő). Minden lépésnél valamennyi energia hőveszteségként elmegy. Semmi sem 100% hatékony.",
    r1_fact1: "Amikor futasz, a kémiai energia (élelmiszer) kinetikus energiává és hővé alakul",
    r1_q: "Mi történik az energiával a lánc minden lépésében?", r1_a: "Néhány hőként elvész", r1_b: "Az összes energia marad", r1_c: "Az energia szaporodik", r1_d: "Nincs energia változás",
    r2_title: "Hatékonyság", r2_text: "Hatékonyság = (Hasznos kimenet ÷ Teljes bemenet) × 100%. LED izzók ~80% hatékonyak (80% fény, 20% hő). Izzólámpa ~5% hatékony (5% fény, 95% hő).",
    r2_fact1: "Az LED izzók sokkal hatékonyabbak, mint az izzólámpák, így kevesebb energiát pazarolnak",
    r2_q: "Melyik izzó hatékonyabb?", r2_a: "LED izzó", r2_b: "Izzólámpa", r2_c: "Azonos hatékonyság", r2_d: "Mérettől függ",
    r3_title: "Erőművek", r3_text: "Az erőművek kémiai vagy nukleáris energiát alakítanak → hő → gőz → turbina → elektromosság. A szén- és atomerőművek üzemanyagot égetnek el a víz forralásához.",
    r3_fact1: "A szénenergiamű szenet éget el, hogy hőt hozzon létre, amely vízet gőzzé változtat a turbinákhoz",
    r3_q: "Hogyan termel villamos energiát egy szénenergiamű?", r3_a: "Víz hevítése → gőz → turbinákat forgatni", r3_b: "Szén közvetlen égése", r3_c: "Kémiai reakció vezetékben", r3_d: "Mágneses hullámok",
    r4_title: "Megújuló vs Fosszilis tüzelőanyagok", r4_text: "Megújuló: Nap, szél, víz—korlátlan és tiszta. Fosszilis: Szén, olaj, gáz—korlátozott ellátás és szennyezés. A megújuló energiák használata megvédi a környezetet és az energiaellátást.",
    r4_fact1: "A napelem közvetlenül a napfényt elektromossággá alakítja, nulla szennyezést okozva",
    r4_q: "Melyik egy megújuló energiaforrás?", r4_a: "Nap energia", r4_b: "Szén", r4_c: "Olaj", r4_d: "Földgáz",
    r5_q1_q: "Mi a hatékonyság egyszerű szavakkal?", r5_q1_a: "Mennyi hasznos munkát kapsz az energiabehozatalból", r5_q1_b: "Az összes energia, amit van", r5_q1_c: "Létrehozott hő", r5_q1_d: "Gép sebessége",
    r5_q2_q: "Miért problémásak a fosszilis tüzelőanyagok?", r5_q2_a: "Szennyezik és az ellátás korlátozott", r5_q2_b: "Túl drágák", r5_q2_c: "Túl gyorsak", r5_q2_d: "Túl könnyűek",
  },
  ro: {
    r1_title: "Lanțuri de energie", r1_text: "Energia curge în lanțuri: Soare → chimică (mâncare) → cinetică (mișcare) → termică (căldură). La fiecare pas, se pierde o oarecare energie. Nimic nu este 100% eficient.",
    r1_fact1: "Când alergezi, energia chimică (mâncare) se convertește în energie cinetică și căldură",
    r1_q: "Ce se întâmplă cu energia la fiecare pas din lanț?", r1_a: "Ceva se pierde ca căldură", r1_b: "Toată energia rămâne", r1_c: "Energia se multiplică", r1_d: "Fără modificare energie",
    r2_title: "Eficiență", r2_text: "Eficiență = (Ieșire utilă ÷ Intrare totală) × 100%. Becurile LED sunt ~80% eficiente (80% lumină, 20% căldură). Becurile incandescente sunt ~5% eficiente (5% lumină, 95% căldură).",
    r2_fact1: "Becurile LED sunt mult mai eficiente decât becurile incandescente și risipesc mai puțin",
    r2_q: "Care bec este mai eficient?", r2_a: "Bec LED", r2_b: "Bec incandescent", r2_c: "Aceeași eficiență", r2_d: "Depinde de mărime",
    r3_title: "Centrale electrice", r3_text: "Centralele electrice convertesc energia chimică sau nucleară → căldură → aburi → turbină → electricitate. Centralele pe cărbune și nucleare ard combustibil pentru a fierbe apa.",
    r3_fact1: "O centrală pe cărbune arde cărbune pentru a crea căldură care fierbe apa în aburi pentru turbine",
    r3_q: "Cum o centrală pe cărbune generează electricitate?", r3_a: "Fierbe apă → aburi → rotesc turbine", r3_b: "Ardere directă de cărbune", r3_c: "Reacție chimică în fir", r3_d: "Unde magnetice",
    r4_title: "Regenerabile vs Combustibili fosilii", r4_text: "Regenerabilă: Soare, vânt, apă—nelimitată și curată. Fosilă: Cărbune, petrol, gaz—aprovizionare limitată și poluare. Utilizarea energiilor regenerabile ajută la protejarea mediului și aprovizionării cu energie.",
    r4_fact1: "Panourile solare convertesc direct lumina solară în electricitate, creând zero poluare",
    r4_q: "Care este o sursă de energie regenerabilă?", r4_a: "Energie solară", r4_b: "Cărbune", r4_c: "Petrol", r4_d: "Gaze naturale",
    r5_q1_q: "Ce este eficiența în termeni simpli?", r5_q1_a: "Cât de mult lucru util obții din intrarea de energie", r5_q1_b: "Toată energia pe care o ai", r5_q1_c: "Căldură produsă", r5_q1_d: "Viteza unei mașini",
    r5_q2_q: "De ce sunt combustibilii fosilii o problemă?", r5_q2_a: "Poluează și aprovizionarea este limitată", r5_q2_b: "Sunt prea scumpi", r5_q2_c: "Sunt prea rapizi", r5_q2_d: "Sunt prea ușori",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🏭</text></svg>
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

export default function EnergyTransferExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
