"use client";
// LightExplorer — Light & Optics (Licht und Optik) Klasse 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Light Sources", r1_text: "Light comes from luminous objects like the Sun, light bulbs, and fire. Non-luminous objects like the Moon and mirrors don't produce light—they reflect it.",
    r1_fact1: "The Sun is the brightest natural light source on Earth",
    r1_q: "Which is a light source?", r1_a: "The Sun", r1_b: "The Moon", r1_c: "A mirror", r1_d: "A book",
    r2_title: "Shadows", r2_text: "Light travels in straight lines. When light hits an opaque object, it cannot pass through, so a shadow forms on the other side.",
    r2_fact1: "Your shadow is longest when the Sun is low in the sky",
    r2_q: "Why do shadows form?", r2_a: "Objects block light", r2_b: "Light bends around objects", r2_c: "Darkness creates them", r2_d: "Wind causes them",
    r3_title: "Reflection", r3_text: "When light hits a smooth, shiny surface like a mirror, it bounces back. The angle at which light arrives equals the angle at which it leaves (angle of incidence = angle of reflection).",
    r3_fact1: "Mirrors reflect almost all the light that hits them",
    r3_q: "What happens when light hits a mirror?", r3_a: "It reflects", r3_b: "It disappears", r3_c: "It gets absorbed", r3_d: "It slows down",
    r4_title: "Refraction", r4_text: "Light bends when it passes between different materials like air and water. This is called refraction. When you look at a straw in water, it appears bent because light refracts at the surface.",
    r4_fact1: "A straw looks bent in water due to light refraction",
    r4_q: "Why does a straw look bent in water?", r4_a: "Light bends (refraction)", r4_b: "The straw actually bends", r4_c: "Water pushes it", r4_d: "An optical illusion only",
    r5_q1_q: "Which object produces its own light?", r5_q1_a: "A candle flame", r5_q1_b: "A painted wall", r5_q1_c: "A shadow", r5_q1_d: "A puddle",
    r5_q2_q: "What property of light is demonstrated by a rainbow?", r5_q2_a: "Refraction", r5_q2_b: "Absorption", r5_q2_c: "Total darkness", r5_q2_d: "Magnetic force",
  },
  de: {
    r1_title: "Lichtquellen", r1_text: "Licht kommt von leuchtenden Objekten wie der Sonne, Glühbirnen und Feuer. Nicht leuchtende Objekte wie der Mond und Spiegel produzieren kein Licht—sie reflektieren es.",
    r1_fact1: "Die Sonne ist die hellste natürliche Lichtquelle auf der Erde",
    r1_q: "Welches ist eine Lichtquelle?", r1_a: "Die Sonne", r1_b: "Der Mond", r1_c: "Ein Spiegel", r1_d: "Ein Buch",
    r2_title: "Schatten", r2_text: "Licht reist in geraden Linien. Wenn Licht auf ein undurchsichtiges Objekt trifft, kann es nicht hindurchgehen, so bildet sich auf der anderen Seite ein Schatten.",
    r2_fact1: "Dein Schatten ist am längsten, wenn die Sonne tief am Himmel steht",
    r2_q: "Warum entstehen Schatten?", r2_a: "Objekte blockieren Licht", r2_b: "Licht biegt sich um Objekte", r2_c: "Dunkelheit erzeugt sie", r2_d: "Wind verursacht sie",
    r3_title: "Reflexion", r3_text: "Wenn Licht auf eine glatte, glänzende Oberfläche wie einen Spiegel trifft, springt es zurück. Der Winkel, in dem Licht ankommt, entspricht dem Winkel, in dem es geht (Einfallswinkel = Reflexionswinkel).",
    r3_fact1: "Spiegel reflektieren fast das ganze Licht, das auf sie trifft",
    r3_q: "Was passiert, wenn Licht einen Spiegel trifft?", r3_a: "Es wird reflektiert", r3_b: "Es verschwindet", r3_c: "Es wird absorbiert", r3_d: "Es verlangsamt sich",
    r4_title: "Brechung", r4_text: "Licht biegt sich, wenn es zwischen verschiedenen Materialien wie Luft und Wasser hindurchgeht. Dies nennt man Brechung. Wenn du einen Strohhalm im Wasser ansiehst, sieht er gebogen aus, weil sich Licht an der Oberfläche bricht.",
    r4_fact1: "Ein Strohhalm sieht im Wasser wegen Lichtbrechung gebogen aus",
    r4_q: "Warum sieht ein Strohhalm im Wasser gebogen aus?", r4_a: "Licht bricht (Brechung)", r4_b: "Der Strohhalm biegt sich tatsächlich", r4_c: "Wasser drückt ihn", r4_d: "Nur eine optische Täuschung",
    r5_q1_q: "Welches Objekt erzeugt sein eigenes Licht?", r5_q1_a: "Eine Kerzenflamme", r5_q1_b: "Eine bemalte Wand", r5_q1_c: "Ein Schatten", r5_q1_d: "Eine Pfütze",
    r5_q2_q: "Welche Lichteigenschaft wird durch einen Regenbogen demonstriert?", r5_q2_a: "Brechung", r5_q2_b: "Absorption", r5_q2_c: "Totale Dunkelheit", r5_q2_d: "Magnetische Kraft",
  },
  hu: {
    r1_title: "Fényforrások", r1_text: "A fény fénylő objektumokból jön, mint a Nap, izzólámpák és tűz. Nem fénylő objektumok, mint a Hold és tükrök nem termelnek fényt—visszaverik azt.",
    r1_fact1: "A Nap a Föld legfényesebb természetes fényforrása",
    r1_q: "Melyik a fényforrás?", r1_a: "A Nap", r1_b: "A Hold", r1_c: "Egy tükör", r1_d: "Egy könyv",
    r2_title: "Árnyékok", r2_text: "A fény egyenes vonalban halad. Amikor a fény egy átlátszatlan objektumra ütközik, nem mehet át rajta, így az árnyék az másik oldalon képződik.",
    r2_fact1: "Az árnyékod a leghosszabb, amikor a Nap alacsonyan van az égen",
    r2_q: "Miért képződnek árnyékok?", r2_a: "Az objektumok blokkolják a fényt", r2_b: "A fény megkerüli az objektumokat", r2_c: "A sötétség hozza létre őket", r2_d: "A szél okozza őket",
    r3_title: "Visszaverődés", r3_text: "Amikor a fény egy sima, csillogó felületre, például tükörre ütközik, visszapattan. Az a szög, amelyen a fény érkezik, egyenlő azzal a szöggel, amelyen elmegy (beesési szög = visszaverődési szög).",
    r3_fact1: "A tükrök visszaverik a rájuk ható fény szinte összességét",
    r3_q: "Mi történik, amikor a fény egy tükörre ütközik?", r3_a: "Visszaverődik", r3_b: "Eltűnik", r3_c: "Elnyelődik", r3_d: "Lelassul",
    r4_title: "Fénytörés", r4_text: "A fény megtörik, amikor különböző anyagok, például levegő és víz között halad át. Ezt fénytörésnek nevezzük. Amikor egy szívószálat vízben nézol, megtörtnek tűnik, mert a fény a felületen törik meg.",
    r4_fact1: "A szívószál megtörtnek tűnik a vízben a fénytörés miatt",
    r4_q: "Miért tűnik megtörtnek a szívószál a vízben?", r4_a: "A fény megtörik (fénytörés)", r4_b: "A szívószál tényleg megtörik", r4_c: "A víz nyomja azt", r4_d: "Csak optikai illúzió",
    r5_q1_q: "Melyik objektum termel a maga saját fényt?", r5_q1_a: "Egy gyertya lángja", r5_q1_b: "Egy festett fal", r5_q1_c: "Egy árnyék", r5_q1_d: "Egy pocsolya",
    r5_q2_q: "Melyik fénytulajdonságot mutatja be a szivárvány?", r5_q2_a: "Fénytörés", r5_q2_b: "Elnyelés", r5_q2_c: "Teljes sötétség", r5_q2_d: "Mágneses erő",
  },
  ro: {
    r1_title: "Surse de lumină", r1_text: "Lumina provine din obiecte luminoase ca Soarele, becuri și foc. Obiectele non-luminoase, cum ar fi Luna și oglinzile, nu produc lumină—o reflectă.",
    r1_fact1: "Soarele este cea mai strălucitoare sursă naturală de lumină pe Pământ",
    r1_q: "Care este o sursă de lumină?", r1_a: "Soarele", r1_b: "Luna", r1_c: "O oglindă", r1_d: "O carte",
    r2_title: "Umbre", r2_text: "Lumina călătorește în linii drepte. Când lumina lovește un obiect opac, nu poate trece prin el, deci se formează o umbră pe cealaltă parte.",
    r2_fact1: "Umbra ta este cea mai lungă când Soarele este scăzut pe cer",
    r2_q: "De ce se formează umbrele?", r2_a: "Obiectele blochează lumina", r2_b: "Lumina se îndoaie în jurul obiectelor", r2_c: "Întunericul le creează", r2_d: "Vântul le provoacă",
    r3_title: "Reflexie", r3_text: "Când lumina lovește o suprafață netedă și strălucitoare ca o oglindă, se reflectă. Unghiul la care lumina sosește este egal cu unghiul la care pleacă (unghi de incidență = unghi de reflexie).",
    r3_fact1: "Oglinzile reflectă aproape toată lumina care le lovește",
    r3_q: "Ce se întâmplă când lumina lovește o oglindă?", r3_a: "Se reflectă", r3_b: "Dispare", r3_c: "Se absoarbe", r3_d: "Se încetinește",
    r4_title: "Refracție", r4_text: "Lumina se îndoaie când trece între materiale diferite, cum ar fi aerul și apa. Aceasta se numește refracție. Când privești o paie în apă, pare îndoită pentru că lumina se refractă la suprafață.",
    r4_fact1: "O paie pare îndoită în apă datorită refracției luminii",
    r4_q: "De ce pare îndoită o paie în apă?", r4_a: "Lumina se îndoaie (refracție)", r4_b: "Paia se îndoaie cu adevărat", r4_c: "Apa o împinge", r4_d: "Doar iluzie optică",
    r5_q1_q: "Care obiect produce propria lumină?", r5_q1_a: "O flacără de lumânare", r5_q1_b: "Un perete pictat", r5_q1_c: "O umbră", r5_q1_d: "O băltoacă",
    r5_q2_q: "Care proprietate a luminii este demonstrată de un curcubeu?", r5_q2_a: "Refracție", r5_q2_b: "Absorbție", r5_q2_c: "Întuneric total", r5_q2_d: "Forță magnetică",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">💡</text></svg>
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

export default function LightExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
