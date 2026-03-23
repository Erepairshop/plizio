"use client";
// SoundExplorer — Sound & Waves (Schall und Wellen) Grade 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Sound Waves", r1_text: "Sound is caused by vibrations. Vibrations travel through air, water, and solids. Sound cannot travel in a vacuum (empty space).",
    r1_fact1: "Vibrations create waves that move through different materials",
    r1_q: "Sound cannot travel through...", r1_a: "A vacuum (empty space)", r1_b: "Water", r1_c: "Metal", r1_d: "Air",
    r2_title: "Pitch & Volume", r2_text: "Pitch is how high or low a sound is—determined by frequency of vibration. Volume is how loud or quiet—determined by amplitude. Higher frequency = higher pitch.",
    r2_fact1: "Small vibrations create soft sounds; large vibrations create loud sounds",
    r2_q: "What determines the pitch of a sound?", r2_a: "Frequency of vibration", r2_b: "Color of the object", r2_c: "Temperature", r2_d: "Weight",
    r3_title: "Echo", r3_text: "Sound bounces off hard surfaces and comes back to us. Echoes are reflected sound waves. Sonar systems use echoes to find objects underwater.",
    r3_fact1: "Echoes are sound waves bouncing off hard walls and returning",
    r3_q: "What causes an echo?", r3_a: "Sound reflecting off a surface", r3_b: "Wind carrying sound", r3_c: "Sound getting louder", r3_d: "Vibrations stopping",
    r4_title: "Speed of Sound", r4_text: "Sound travels at different speeds in different materials. In air it travels about 340 m/s. In water it's faster (~1500 m/s), and fastest in solids like steel (~5000 m/s).",
    r4_fact1: "Sound travels faster in solids and water than in air",
    r4_q: "Where does sound travel fastest?", r4_a: "Through steel (solid)", r4_b: "Through air", r4_c: "Through water", r4_d: "Through space",
    r5_q1_q: "What happens to sound when it hits a hard wall?", r5_q1_a: "It bounces back (reflects)", r5_q1_b: "It disappears", r5_q1_c: "It changes color", r5_q1_d: "It gets absorbed",
    r5_q2_q: "What creates sound waves?", r5_q2_a: "Vibrations of objects", r5_q2_b: "Heat and temperature", r5_q2_c: "Light energy", r5_q2_d: "Wind movement",
  },
  de: {
    r1_title: "Schallwellen", r1_text: "Schall wird durch Vibrationen erzeugt. Vibrationen breiten sich durch Luft, Wasser und feste Körper aus. Schall kann sich nicht im Vakuum (leerer Raum) ausbreiten.",
    r1_fact1: "Vibrationen erzeugen Wellen, die sich durch verschiedene Materialien ausbreiten",
    r1_q: "Schall kann sich nicht ausbreiten durch...", r1_a: "Ein Vakuum (leeren Raum)", r1_b: "Wasser", r1_c: "Metall", r1_d: "Luft",
    r2_title: "Tonhöhe und Lautstärke", r2_text: "Tonhöhe ist die Höhe oder Tiefe eines Tons—bestimmt durch die Frequenz der Vibration. Lautstärke ist, wie laut oder leise—bestimmt durch die Amplitude. Höhere Frequenz = höhere Tonhöhe.",
    r2_fact1: "Kleine Vibrationen erzeugen leise Töne; große Vibrationen erzeugen laute Töne",
    r2_q: "Was bestimmt die Tonhöhe eines Schalls?", r2_a: "Frequenz der Vibration", r2_b: "Farbe des Objekts", r2_c: "Temperatur", r2_d: "Gewicht",
    r3_title: "Echo", r3_text: "Schall prallt von harten Oberflächen ab und kommt zu uns zurück. Echos sind reflektierte Schallwellen. Sonargeräte nutzen Echos, um Objekte unter Wasser zu finden.",
    r3_fact1: "Echos sind Schallwellen, die von harten Wänden abprallen und zurückkehren",
    r3_q: "Was verursacht ein Echo?", r3_a: "Schall, der von einer Oberfläche reflektiert wird", r3_b: "Wind, der Schall trägt", r3_c: "Schall wird lauter", r3_d: "Vibrationen stoppen",
    r4_title: "Schallgeschwindigkeit", r4_text: "Schall breitet sich in verschiedenen Materialien unterschiedlich schnell aus. In Luft beträgt sie etwa 340 m/s. In Wasser ist sie schneller (~1500 m/s) und am schnellsten in Feststoffen wie Stahl (~5000 m/s).",
    r4_fact1: "Schall breitet sich in Feststoffen und Wasser schneller aus als in Luft",
    r4_q: "Wo breitet sich Schall am schnellsten aus?", r4_a: "Durch Stahl (Festkörper)", r4_b: "Durch Luft", r4_c: "Durch Wasser", r4_d: "Durch den Weltraum",
    r5_q1_q: "Was passiert mit Schall, wenn er auf eine harte Wand trifft?", r5_q1_a: "Er prallt ab (wird reflektiert)", r5_q1_b: "Er verschwindet", r5_q1_c: "Er ändert die Farbe", r5_q1_d: "Er wird absorbiert",
    r5_q2_q: "Was erzeugt Schallwellen?", r5_q2_a: "Vibrationen von Objekten", r5_q2_b: "Wärme und Temperatur", r5_q2_c: "Lichtenenergie", r5_q2_d: "Windbewegung",
  },
  hu: {
    r1_title: "Hanghullámok", r1_text: "A hang vibrációk által keletkezik. A vibrációk légen, vizen és szilárd anyagokon keresztül terjednek. A hang nem tud terjedni vákuumban (üres térben).",
    r1_fact1: "A vibrációk hullámokat hoznak létre, amelyek különféle anyagokon terjednek",
    r1_q: "A hang nem tud terjedni...", r1_a: "Vákuumban (üres térben)", r1_b: "Vízben", r1_c: "Fémben", r1_d: "Levegőben",
    r2_title: "Magasság és hangerő", r2_text: "A magasság a hang magassága vagy mélysége—a vibráció frekvenciája határozza meg. A hangerő az, hogy milyen hangos vagy csendes—az amplitúdó határozza meg. Magasabb frekvencia = magasabb hang.",
    r2_fact1: "Kis vibrációk halk hangokat hoznak létre; nagy vibrációk hangos hangokat hoznak létre",
    r2_q: "Mi határozza meg a hang magasságát?", r2_a: "A vibráció frekvenciája", r2_b: "Az objektum színe", r2_c: "Hőmérséklet", r2_d: "Súly",
    r3_title: "Visszhang", r3_text: "A hang kemény felületekről visszapattan és hozzánk visszajut. A visszhangok visszaverődött hanghullámok. A szonárkészülékek visszhangok segítségével találnak meg objektumokat a víz alatt.",
    r3_fact1: "A visszhangok hanghullámok, amelyek kemény falakról visszapattannak és visszatérnek",
    r3_q: "Mit okoz a visszhang?", r3_a: "A hang egy felületről visszaverődik", r3_b: "A szél viszi a hangot", r3_c: "A hang erősebbé válik", r3_d: "A vibrációk megállnak",
    r4_title: "Hangsebességet", r4_text: "A hang különböző sebességgel terjed különféle anyagokban. Levegőben körülbelül 340 m/s. Vízben gyorsabb (~1500 m/s), és a legjobb szilárd anyagokban, például acélban (~5000 m/s).",
    r4_fact1: "A hang gyorsabban terjed a szilárd anyagokban és a vízben, mint a levegőben",
    r4_q: "Hol terjed a hang a leggyorsabban?", r4_a: "Az acélon keresztül (szilárd)", r4_b: "A levegőn keresztül", r4_c: "A vizen keresztül", r4_d: "Az űrön keresztül",
    r5_q1_q: "Mi történik a hanggal, amikor kemény falat ér?", r5_q1_a: "Visszapattan (visszaverődik)", r5_q1_b: "Eltűnik", r5_q1_c: "Megváltoztatja a színét", r5_q1_d: "Felszívódik",
    r5_q2_q: "Mit hoz létre a hanghullámokat?", r5_q2_a: "Az objektumok rezgéseit", r5_q2_b: "Hő és hőmérséklet", r5_q2_c: "Fénysugárzási energia", r5_q2_d: "Szélmozgás",
  },
  ro: {
    r1_title: "Undele sonorei", r1_text: "Sunetul este creat de vibrații. Vibrațiile se propagă prin aer, apă și corpuri solide. Sunetul nu poate să se propagă în vid (spațiu gol).",
    r1_fact1: "Vibrațiile creează unde care se propagă prin diferite materiale",
    r1_q: "Sunetul nu poate să se propagă prin...", r1_a: "Vidul (spațiu gol)", r1_b: "Apă", r1_c: "Metal", r1_d: "Aer",
    r2_title: "Înălțimea și volumul", r2_text: "Înălțimea este cât de înalt sau cât de jos este un sunet—determinată de frecvența vibrației. Volumul este cât de tare sau de ușor—determinat de amplitudine. Frecvență mai mare = înălțime mai mare.",
    r2_fact1: "Vibrații mici creează sunete slabe; vibrații mari creează sunete tare",
    r2_q: "Ce determină înălțimea unui sunet?", r2_a: "Frecvența vibrației", r2_b: "Culoarea obiectului", r2_c: "Temperatura", r2_d: "Greutatea",
    r3_title: "Ecou", r3_text: "Sunetul sare de suprafețele dure și se întoarce la noi. Ecourile sunt unde sonorei reflectate. Sistemele sonar folosesc ecourile pentru a găsi obiecte sub apă.",
    r3_fact1: "Ecourile sunt unde sonorei care sare de pereți duri și se întorc",
    r3_q: "Ce cauzează un ecou?", r3_a: "Sunetul reflectat de o suprafață", r3_b: "Vântul purtând sunetul", r3_c: "Sunetul devenind mai tare", r3_d: "Vibrațiile se opresc",
    r4_title: "Viteza sunetului", r4_text: "Sunetul se propagă cu viteze diferite în materiale diferite. În aer se propagă la aproximativ 340 m/s. În apă este mai rapid (~1500 m/s) și cel mai rapid în solide precum oțelul (~5000 m/s).",
    r4_fact1: "Sunetul se propagă mai rapid în solide și apă decât în aer",
    r4_q: "Unde se propagă sunetul cel mai rapid?", r4_a: "Prin oțel (solid)", r4_b: "Prin aer", r4_c: "Prin apă", r4_d: "Prin spațiu",
    r5_q1_q: "Ce se întâmplă cu sunetul atunci când lovește un perete dur?", r5_q1_a: "Se reflectă (se întoarce)", r5_q1_b: "Dispare", r5_q1_c: "Își schimbă culoarea", r5_q1_d: "Este absorbit",
    r5_q2_q: "Ce creează unde sonorei?", r5_q2_a: "Vibrațiile obiectelor", r5_q2_b: "Căldură și temperatură", r5_q2_c: "Energie de radiații luminoase", r5_q2_d: "Mișcare vântului",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a5f"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔊</text></svg>
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

export default function SoundExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
