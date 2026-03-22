"use client";
// ScienceExplorer — Science Experiments & Physics (Magnetismus & Schwimmen/Sinken) Grade 2
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Magnets", r1_text: "Magnets have an invisible force that can pull metal objects toward them. North and south poles attract opposite poles.",
    r1_fact1: "Magnets attract iron, nickel, and cobalt but not plastic or paper",
    r1_q: "What do magnets attract?", r1_a: "Metal objects", r1_b: "Plastic", r1_c: "Paper", r1_d: "Wood",
    r2_title: "Magnetic Force", r2_text: "The stronger the magnet, the stronger the pull. Two magnets can push apart or stick together depending on their poles.",
    r2_fact1: "The Earth itself is like a giant magnet",
    r2_q: "What happens when same magnetic poles face each other?", r2_a: "They push apart", r2_b: "They stick together", r2_c: "Nothing happens", r2_d: "They disappear",
    r3_title: "Sinking & Floating", r3_text: "Heavy objects sink in water. Light objects float. Things that float are less dense than water.",
    r3_fact1: "Wood floats but rocks sink because wood is lighter",
    r3_q: "What happens to a heavy object in water?", r3_a: "It sinks", r3_b: "It floats", r3_c: "It freezes", r3_d: "It disappears",
    r4_title: "States of Matter", r4_text: "Things can be solid, liquid, or gas. Solids keep their shape. Liquids flow. Gases spread out everywhere.",
    r4_fact1: "Ice is solid water, but it can melt into liquid water",
    r4_q: "Which is a liquid?", r4_a: "Water", r4_b: "Ice", r4_c: "Steam", r4_d: "Rock",
    r5_q1_q: "Which material will a magnet pick up?", r5_q1_a: "Iron nail", r5_q1_b: "Rubber ball", r5_q1_c: "Plastic toy", r5_q1_d: "Paper",
    r5_q2_q: "What will float in water?", r5_q2_a: "A cork", r5_q2_b: "A stone", r5_q2_c: "A nail", r5_q2_d: "A coin",
  },
  de: {
    r1_title: "Magnete", r1_text: "Magnete haben eine unsichtbare Kraft, die Metallobjekte zu sich ziehen kann. Nord- und Südpol ziehen gegensätzliche Pole an.",
    r1_fact1: "Magnete ziehen Eisen, Nickel und Kobalt an, aber nicht Kunststoff oder Papier",
    r1_q: "Was ziehen Magnete an?", r1_a: "Metallobjekte", r1_b: "Kunststoff", r1_c: "Papier", r1_d: "Holz",
    r2_title: "Magnetische Kraft", r2_text: "Je stärker der Magnet, desto stärker die Anziehung. Zwei Magnete können sich abstoßen oder zusammenkleben je nach Pol.",
    r2_fact1: "Die Erde ist selbst wie ein Riesenmagnet",
    r2_q: "Was passiert, wenn gleiche Magnetpole sich gegenüberstehen?", r2_a: "Sie stoßen sich ab", r2_b: "Sie kleben zusammen", r2_c: "Nichts passiert", r2_d: "Sie verschwinden",
    r3_title: "Sinken und Schwimmen", r3_text: "Schwere Objekte sinken im Wasser. Leichte Objekte schwimmen. Dinge, die schwimmen, sind weniger dicht als Wasser.",
    r3_fact1: "Holz schwimmt, aber Steine sinken, weil Holz leichter ist",
    r3_q: "Was passiert mit einem schweren Objekt im Wasser?", r3_a: "Es sinkt", r3_b: "Es schwimmt", r3_c: "Es gefriert", r3_d: "Es verschwindet",
    r4_title: "Aggregatzustände", r4_text: "Dinge können fest, flüssig oder gasförmig sein. Festkörper behalten ihre Form. Flüssigkeiten fließen. Gase verteilen sich überall.",
    r4_fact1: "Eis ist festes Wasser, aber es kann zu flüssigem Wasser schmelzen",
    r4_q: "Welches ist eine Flüssigkeit?", r4_a: "Wasser", r4_b: "Eis", r4_c: "Dampf", r4_d: "Stein",
    r5_q1_q: "Welches Material wird ein Magnet aufheben?", r5_q1_a: "Eisennagel", r5_q1_b: "Gummiball", r5_q1_c: "Kunststoffspielzeug", r5_q1_d: "Papier",
    r5_q2_q: "Was wird in Wasser schwimmen?", r5_q2_a: "Ein Kork", r5_q2_b: "Ein Stein", r5_q2_c: "Ein Nagel", r5_q2_d: "Ein Münze",
  },
  hu: {
    r1_title: "Mágnesek", r1_text: "A mágneseknek van egy láthatatlan ereje, amely fémes tárgyakat vonzhat magukhoz. Az északi és a dél-pólusok vonzzák a megfordított pólusokat.",
    r1_fact1: "A mágnesek vonzzák a vasat, a nikelt és a kobaltot, de nem a műanyagot vagy papírt",
    r1_q: "Mit vonzanak a mágnesek?", r1_a: "Fémes tárgyakat", r1_b: "Műanyagot", r1_c: "Papírt", r1_d: "Fát",
    r2_title: "Mágneses erő", r2_text: "Minél erősebb a mágnes, annál erősebb a vonzalom. Két mágnes tolódhat egymásra vagy összeragadhat a pólust függően.",
    r2_fact1: "A Föld maga olyan, mint egy óriás mágnes",
    r2_q: "Mi történik, amikor azonos mágneses pólusok kerülnek egymás elé?", r2_a: "Tolódnak egymásnak", r2_b: "Összeragadnak", r2_c: "Semmi sem történik", r2_d: "Eltűnnek",
    r3_title: "Süllyedés és úszás", r3_text: "A nehéz tárgyak elsüllyednek a vízben. A könnyű tárgyak úsznak. Az úszó dolgok kevésbé sűrűek, mint a víz.",
    r3_fact1: "A fa úszik, de a kövek süllyednek, mert a fa könnyebb",
    r3_q: "Mi történik egy nehéz tárgyakkal a vízben?", r3_a: "Elsüllyednek", r3_b: "Úsznak", r3_c: "Megfagynak", r3_d: "Eltűnnek",
    r4_title: "Halmazállapotok", r4_text: "A dolgok lehetnek szilárd, folyékony vagy gáz. A szilárd anyagok megtartják alakjukat. A folyadékok folynak. A gázok mindenhol szétszóródnak.",
    r4_fact1: "A jég szilárd víz, de megolvadhat folyékony vízbe",
    r4_q: "Melyik egy folyadék?", r4_a: "Víz", r4_b: "Jég", r4_c: "Gőz", r4_d: "Kő",
    r5_q1_q: "Melyik anyagot vesz fel egy mágnes?", r5_q1_a: "Vasszög", r5_q1_b: "Gumilabda", r5_q1_c: "Műanyag játék", r5_q1_d: "Papír",
    r5_q2_q: "Mi fog úszni a vízben?", r5_q2_a: "Egy dugó", r5_q2_b: "Egy kő", r5_q2_c: "Egy szög", r5_q2_d: "Egy érme",
  },
  ro: {
    r1_title: "Magneți", r1_text: "Magnetii au o forță invizibilă care poate trage obiecte metalice către ei. Polul nord și sud atrag polii opuși.",
    r1_fact1: "Magnetii atrag fier, nichel și cobalt, dar nu plastic sau hârtie",
    r1_q: "Ce atrag magnetii?", r1_a: "Obiecte metalice", r1_b: "Plastic", r1_c: "Hârtie", r1_d: "Lemn",
    r2_title: "Forța magnetică", r2_text: "Cu cât este mai puternic magnetul, cu atât mai puternică este atracția. Doi magneți se pot respinge sau lipi în funcție de polul lor.",
    r2_fact1: "Pământul în sine este ca un magnet gigant",
    r2_q: "Ce se întâmplă când polii magnetici identici se confruntă?", r2_a: "Se resping", r2_b: "Se lipesc", r2_c: "Nimic nu se întâmplă", r2_d: "Dispar",
    r3_title: "Înecarea și plutire", r3_text: "Obiectele grele se scufundă în apă. Obiectele ușoare plutesc. Lucrurile care plutesc sunt mai puțin dense decât apa.",
    r3_fact1: "Lemnul plutește, dar pietrele se scufundă pentru că lemnul este mai ușor",
    r3_q: "Ce se întâmplă cu un obiect greu în apă?", r3_a: "Se scufundă", r3_b: "Plutește", r3_c: "Se congeleaza", r3_d: "Dispare",
    r4_title: "Stări ale materiei", r4_text: "Lucrurile pot fi solide, lichide sau gaze. Solidele-și păstrează forma. Lichidele curg. Gazele se răspândesc peste tot.",
    r4_fact1: "Gheața este apă solidă, dar se poate topi în apă lichidă",
    r4_q: "Care este un lichid?", r4_a: "Apă", r4_b: "Gheață", r4_c: "Aburi", r4_d: "Piatră",
    r5_q1_q: "Ce material va ridica un magnet?", r5_q1_a: "Cui de fier", r5_q1_b: "Minge de cauciuc", r5_q1_c: "Jucărie din plastic", r5_q1_d: "Hârtie",
    r5_q2_q: "Ce va plutii în apă?", r5_q2_a: "O plută", r5_q2_b: "O piatră", r5_q2_c: "Un cui", r5_q2_d: "O monedă",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#6a1b9a"/><text x="120" y="90" textAnchor="middle" fontSize="50">🧲</text></svg>
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

export default function ScienceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
