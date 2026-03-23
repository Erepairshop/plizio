"use client";
// ConversionExplorer — Energy Conversion (Energieumwandlung) Grade 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Energy Conversion", r1_text: "Energy changes from one form to another. A lamp converts electrical energy into light and heat.",
    r1_fact1: "Every energy change produces heat as a byproduct",
    r1_q: "A lamp converts electrical energy into...", r1_a: "Light and heat", r1_b: "Sound", r1_c: "Kinetic energy", r1_d: "Chemical energy",
    r2_title: "Energy Chains", r2_text: "Energy passes through chains: the Sun gives energy to plants, plants give energy as food, and food gives energy to our bodies.",
    r2_fact1: "The Sun is the original source of energy for most life on Earth",
    r2_q: "Where does a plant get its energy?", r2_a: "From the Sun", r2_b: "From the soil", r2_c: "From water", r2_d: "From air",
    r3_title: "Conservation of Energy", r3_text: "Energy cannot be created or destroyed, only transformed. The total amount of energy stays the same.",
    r3_fact1: "This rule applies everywhere in the universe",
    r3_q: "Can energy be destroyed?", r3_a: "No, only transformed", r3_b: "Yes, it disappears", r3_c: "Yes, when burned", r3_d: "Yes, it evaporates",
    r4_title: "Energy Efficiency", r4_text: "Not all energy goes where we want. Some is always lost as heat. LED bulbs waste less energy than old light bulbs.",
    r4_fact1: "Efficient machines waste less energy and cost less money to run",
    r4_q: "Where does 'wasted' energy usually go?", r4_a: "Into heat", r4_b: "It disappears", r4_c: "Into nothing", r4_d: "Into light",
    r5_q1_q: "When you burn wood in a fireplace, the chemical energy converts to...", r5_q1_a: "Heat and light", r5_q1_b: "Electricity", r5_q1_c: "Cold air", r5_q1_d: "Sound",
    r5_q2_q: "Which device is most energy efficient?", r5_q2_a: "LED bulb", r5_q2_b: "Old incandescent bulb", r5_q2_c: "Halogen lamp", r5_q2_d: "Neon tube",
  },
  de: {
    r1_title: "Energieumwandlung", r1_text: "Energie ändert ihre Form von einer zur anderen. Eine Lampe wandelt elektrische Energie in Licht und Wärme um.",
    r1_fact1: "Jede Energieumwandlung produziert Wärme als Nebenprodukt",
    r1_q: "Eine Lampe wandelt elektrische Energie um in...", r1_a: "Licht und Wärme", r1_b: "Schall", r1_c: "Bewegungsenergie", r1_d: "Chemische Energie",
    r2_title: "Energieketten", r2_text: "Energie fließt durch Ketten: die Sonne gibt Energie an Pflanzen, Pflanzen als Nahrung an Tiere und Menschen, die diese umwandeln.",
    r2_fact1: "Die Sonne ist die ursprüngliche Energiequelle für das meiste Leben auf der Erde",
    r2_q: "Woher bekommt eine Pflanze ihre Energie?", r2_a: "Von der Sonne", r2_b: "Aus dem Boden", r2_c: "Aus Wasser", r2_d: "Aus der Luft",
    r3_title: "Energieerhaltung", r3_text: "Energie kann nicht erschaffen oder zerstört werden, nur umgewandelt. Die Gesamtmenge bleibt gleich.",
    r3_fact1: "Diese Regel gilt überall im Universum",
    r3_q: "Kann Energie zerstört werden?", r3_a: "Nein, nur umgewandelt", r3_b: "Ja, sie verschwindet", r3_c: "Ja, beim Verbrennen", r3_d: "Ja, sie verdunstet",
    r4_title: "Energieeffizienz", r4_text: "Nicht alle Energie geht dahin, wo wir sie haben wollen. Immer geht etwas als Wärme verloren. LED-Lampen verschwenden weniger Energie.",
    r4_fact1: "Effiziente Maschinen verschwenden weniger Energie und kosten weniger zum Betreiben",
    r4_q: "Wohin geht 'vergeudete' Energie normalerweise?", r4_a: "In Wärme", r4_b: "Sie verschwindet", r4_c: "Ins Nichts", r4_d: "In Licht",
    r5_q1_q: "Wenn Sie Holz im Kamin verbrennen, wandelt sich die chemische Energie um in...", r5_q1_a: "Wärme und Licht", r5_q1_b: "Elektrizität", r5_q1_c: "Kalte Luft", r5_q1_d: "Schall",
    r5_q2_q: "Welches Gerät ist am energieeffizientesten?", r5_q2_a: "LED-Lampe", r5_q2_b: "Alte Glühbirne", r5_q2_c: "Halogenlampe", r5_q2_d: "Neonröhre",
  },
  hu: {
    r1_title: "Energiaátalakulás", r1_text: "Az energia egyik formából a másikba változik. A lámpa az elektromos energiát fényre és hőre alakítja.",
    r1_fact1: "Minden energiaátalakulás hőt termel mellékproduktként",
    r1_q: "A lámpa az elektromos energiát felül alakítja...", r1_a: "Fényre és hőre", r1_b: "Hangra", r1_c: "Mozgási energiára", r1_d: "Kémiai energiára",
    r2_title: "Energialáncok", r2_text: "Az energia láncok között folyik: a Nap energiát ad a növényeknek, a növények táplálékként az állatoknak és az embereknek.",
    r2_fact1: "A Nap a legtöbb élet energiaforrása a Földön",
    r2_q: "Honnan kapja a növény az energiáját?", r2_a: "A Naptól", r2_b: "A talajból", r2_c: "A vízből", r2_d: "A levegőből",
    r3_title: "Energiamegmaradás", r3_text: "Az energia nem hozható létre és nem semmisíthető meg, csak átalakítható. Az összes energia mennyisége ugyanaz marad.",
    r3_fact1: "Ez a szabály mindenhol az univerzumban érvényes",
    r3_q: "Lehet-e az energia megsemmisíteni?", r3_a: "Nem, csak átalakítható", r3_b: "Igen, eltűnik", r3_c: "Igen, égéskor", r3_d: "Igen, elpárolog",
    r4_title: "Energiahatékonyság", r4_text: "Nem minden energia oda kerül, ahol akarjuk. Mindig elvész hőként. A LED-izzók kevesebb energiát pazarolnak.",
    r4_fact1: "A hatékony gépek kevesebb energiát vesztegetnek és olcsóbb a üzemeltetésük",
    r4_q: "Hova megy a 'pazarolt' energia általában?", r4_a: "Hővé", r4_b: "Eltűnik", r4_c: "A semmibe", r4_d: "Fénnyé",
    r5_q1_q: "Amikor fát ég a kandallóban, a kémiai energia átalakulása...", r5_q1_a: "Hővé és fénnyé", r5_q1_b: "Elektromossággá", r5_q1_c: "Hideg levegővé", r5_q1_d: "Hanggá",
    r5_q2_q: "Melyik eszköz a leghatékonyabb?", r5_q2_a: "LED-izzó", r5_q2_b: "Régi izzólámpa", r5_q2_c: "Halogénlámpa", r5_q2_d: "Neoncsík",
  },
  ro: {
    r1_title: "Transformarea energiei", r1_text: "Energia se schimbă dintr-o formă în alta. O lampă transformă energia electrică în lumină și căldură.",
    r1_fact1: "Fiecare transformare a energiei produce căldură ca produs secundar",
    r1_q: "O lampă transformă energia electrică în...", r1_a: "Lumină și căldură", r1_b: "Sunet", r1_c: "Energie cinetică", r1_d: "Energie chimică",
    r2_title: "Lanțuri energetice", r2_text: "Energia curge prin lanțuri: Soarele dă energie plantelor, plantele dau energie ca hrană animalelor și oamenilor.",
    r2_fact1: "Soarele este sursa inițială de energie pentru cea mai mare parte a vieții de pe Pământ",
    r2_q: "De unde primește o plantă energia sa?", r2_a: "De la Soare", r2_b: "Din pământ", r2_c: "Din apă", r2_d: "Din aer",
    r3_title: "Conservarea energiei", r3_text: "Energia nu poate fi creată sau distrugă, doar transformată. Cantitatea totală de energie rămâne aceeași.",
    r3_fact1: "Această regulă se aplică peste tot în univers",
    r3_q: "Poate energia fi distrusă?", r3_a: "Nu, doar transformată", r3_b: "Da, dispare", r3_c: "Da, când arde", r3_d: "Da, se evaporă",
    r4_title: "Eficiență energetică", r4_text: "Nu toată energia merge acolo unde o dorim. Ceva se pierde întotdeauna sub formă de căldură. Becurile LED risipesc mai puțin.",
    r4_fact1: "Mașinile eficiente risipesc mai puțin și costă mai puțin la funcționare",
    r4_q: "Unde merge de obicei energia 'risipită'?", r4_a: "În căldură", r4_b: "Dispare", r4_c: "În nimic", r4_d: "În lumină",
    r5_q1_q: "Când ardeți lemn în șemineu, energia chimică se transformă în...", r5_q1_a: "Căldură și lumină", r5_q1_b: "Electricitate", r5_q1_c: "Aer rece", r5_q1_d: "Sunet",
    r5_q2_q: "Care dispozitiv este cel mai eficient energetic?", r5_q2_a: "Bec LED", r5_q2_b: "Bec incandescent vechi", r5_q2_c: "Lampă halogena", r5_q2_d: "Tub neon",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔄</text></svg>
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

export default function ConversionExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
