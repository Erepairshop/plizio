"use client";
// DensityExplorer — Density, Floating & Sinking, Archimedes (Dichte) Grade 6

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "What is Density?", r1_text: "Density = mass ÷ volume (ρ = m/V). Unit: kg/m³ or g/cm³. Water density = 1000 kg/m³. Denser objects sink in water.",
    r1_fact1: "Lead is much denser than wood, so lead sinks and wood floats",
    r1_q: "What is density?", r1_a: "Mass divided by volume", r1_b: "Weight times volume", r1_c: "The color of material", r1_d: "How hot something is",
    r2_title: "Floating and Sinking", r2_text: "An object floats if its density is less than the fluid's density. Ships float because of trapped air inside, which reduces overall density.",
    r2_fact1: "A ship floats because air-filled spaces make its average density less than water",
    r2_q: "Why does a ship float in water?", r2_a: "Trapped air reduces its average density", r2_b: "Ships are made of plastic", r2_c: "Water pushes ships up", r2_d: "Ships weigh nothing",
    r3_title: "Calculating Density", r3_text: "Example: A 500g object has a volume of 100 cm³. Density = 500g ÷ 100 cm³ = 5 g/cm³. Compare this to water (1 g/cm³) to predict if it floats or sinks.",
    r3_fact1: "Oil floats on water because oil density (0.8 g/cm³) is less than water (1 g/cm³)",
    r3_q: "A 500g object with 100 cm³ volume has density of...", r3_a: "5 g/cm³", r3_b: "0.2 g/cm³", r3_c: "600 g/cm³", r3_d: "50 g/cm³",
    r4_title: "Archimedes' Discovery", r4_text: "'Eureka!' Archimedes discovered that an object's displaced water volume equals its own volume. This helps measure volume by water displacement. He used this to detect if a crown was fake gold!",
    r4_fact1: "Archimedes used water displacement to prove a golden crown was not pure gold",
    r4_q: "How did Archimedes measure the crown's volume?", r4_a: "By measuring displaced water", r4_b: "By weighing it", r4_c: "By looking at its size", r4_d: "By melting it",
    r5_q1_q: "What happens to density when volume increases and mass stays same?", r5_q1_a: "Density decreases", r5_q1_b: "Density increases", r5_q1_c: "Density stays same", r5_q1_d: "Density doubles",
    r5_q2_q: "Cork has density 0.24 g/cm³. Will it float or sink in water?", r5_q2_a: "Float", r5_q2_b: "Sink", r5_q2_c: "Stay suspended", r5_q2_d: "Dissolve",
  },
  de: {
    r1_title: "Was ist Dichte?", r1_text: "Dichte = Masse ÷ Volumen (ρ = m/V). Einheit: kg/m³ oder g/cm³. Wasserdichte = 1000 kg/m³. Dichtere Objekte sinken im Wasser.",
    r1_fact1: "Blei ist viel dichter als Holz, daher sinkt Blei und Holz schwimmt",
    r1_q: "Was ist Dichte?", r1_a: "Masse geteilt durch Volumen", r1_b: "Gewicht mal Volumen", r1_c: "Die Farbe des Materials", r1_d: "Wie heiß etwas ist",
    r2_title: "Schwimmen und Sinken", r2_text: "Ein Objekt schwimmt, wenn seine Dichte geringer ist als die Dichte der Flüssigkeit. Schiffe schwimmen, weil eingefangene Luft innen die Gesamtdichte verringert.",
    r2_fact1: "Ein Schiff schwimmt, weil Lufträume seine durchschnittliche Dichte unter der von Wasser halten",
    r2_q: "Warum schwimmt ein Schiff auf dem Wasser?", r2_a: "Eingefangene Luft verringert seine durchschnittliche Dichte", r2_b: "Schiffe sind aus Kunststoff", r2_c: "Wasser drückt Schiffe hoch", r2_d: "Schiffe wiegen nichts",
    r3_title: "Dichte berechnen", r3_text: "Beispiel: Ein 500g-Objekt hat ein Volumen von 100 cm³. Dichte = 500g ÷ 100 cm³ = 5 g/cm³. Vergleiche mit Wasser (1 g/cm³) um vorherzusagen, ob es schwimmt oder sinkt.",
    r3_fact1: "Öl schwimmt auf Wasser, weil Öldichte (0,8 g/cm³) weniger als Wasser (1 g/cm³) ist",
    r3_q: "Ein 500g-Objekt mit 100 cm³ Volumen hat eine Dichte von...", r3_a: "5 g/cm³", r3_b: "0,2 g/cm³", r3_c: "600 g/cm³", r3_d: "50 g/cm³",
    r4_title: "Archimedes' Entdeckung", r4_text: "'Eureka!' Archimedes entdeckte, dass das verdrängte Wasservolumen eines Objekts gleich seinem eigenen Volumen ist. Dies hilft, das Volumen durch Wasserverdrängung zu messen. Er nutzte dies, um nachzuweisen, dass eine Krone nicht reines Gold war!",
    r4_fact1: "Archimedes nutzte Wasserverdrängung, um zu beweisen, dass eine goldene Krone nicht reines Gold war",
    r4_q: "Wie maß Archimedes das Volumen der Krone?", r4_a: "Durch Messung des verdrängten Wassers", r4_b: "Durch Wiegen", r4_c: "Durch Anschauen ihrer Größe", r4_d: "Durch Schmelzen",
    r5_q1_q: "Was passiert mit der Dichte, wenn das Volumen zunimmt und die Masse gleich bleibt?", r5_q1_a: "Dichte nimmt ab", r5_q1_b: "Dichte nimmt zu", r5_q1_c: "Dichte bleibt gleich", r5_q1_d: "Dichte verdoppelt sich",
    r5_q2_q: "Kork hat eine Dichte von 0,24 g/cm³. Wird es schwimmen oder sinken?", r5_q2_a: "Schwimmen", r5_q2_b: "Sinken", r5_q2_c: "Schwebt", r5_q2_d: "Löst sich auf",
  },
  hu: {
    r1_title: "Mi a sűrűség?", r1_text: "Sűrűség = tömeg ÷ térfogat (ρ = m/V). Egység: kg/m³ vagy g/cm³. Víz sűrűsége = 1000 kg/m³. Sűrűbb tárgyak vízben süllyednek.",
    r1_fact1: "Az ólom sokkal sűrűbb, mint a fa, ezért az ólom elsüllyed és fa úszik",
    r1_q: "Mi a sűrűség?", r1_a: "Tömeg osztva térfogattal", r1_b: "Súly szorozva térfogattal", r1_c: "Az anyag színe", r1_d: "Milyen meleg valami",
    r2_title: "Úszás és süllyedés", r2_text: "Egy tárgy úszik, ha sűrűsége kisebb, mint a folyadék sűrűsége. A hajók úsznak, mert a bennük levő levegő csökkenti az átlagos sűrűséget.",
    r2_fact1: "A hajó úszik, mert a levegő-kitöltött terek az átlagos sűrűséget a víz alatt tartják",
    r2_q: "Miért úszik egy hajó a vízben?", r2_a: "A csapott levegő az átlagos sűrűséget csökkenti", r2_b: "A hajók műanyagból készülnek", r2_c: "A víz felfelé nyomja a hajókat", r2_d: "A hajók nem nyomnak",
    r3_title: "Sűrűség kiszámítása", r3_text: "Példa: Egy 500g-os tárgynak 100 cm³ a térfogata. Sűrűség = 500g ÷ 100 cm³ = 5 g/cm³. Hasonlítsd össze a vízzel (1 g/cm³) az úszás vagy süllyedés előrejelzéséhez.",
    r3_fact1: "Az olaj a vízre úszik, mert az olaj sűrűsége (0,8 g/cm³) kevesebb, mint a víz (1 g/cm³)",
    r3_q: "Egy 500g-os tárgy 100 cm³ térfogattal sűrűsége...", r3_a: "5 g/cm³", r3_b: "0,2 g/cm³", r3_c: "600 g/cm³", r3_d: "50 g/cm³",
    r4_title: "Archimedes felfedezése", r4_text: "'Heureka!' Archimedes felfedezett, hogy egy tárgy által kiszorított víz térfogata megegyezik a saját térfogatával. Ez segít a térfogat mérésében vízeltolódás által. Ezt használta annak bizonyítására, hogy egy korona nem tiszta arany volt!",
    r4_fact1: "Archimedes vízeltolódást használt annak bizonyítására, hogy egy aranykorona nem volt tiszta arany",
    r4_q: "Hogyan mérte Archimedes a korona térfogatát?", r4_a: "A kiszorított víz mérésével", r4_b: "Mérlegeléssel", r4_c: "A méretét nézve", r4_d: "Olvasztva",
    r5_q1_q: "Mi történik a sűrűséggel, ha a térfogat növekszik és a tömeg marad?", r5_q1_a: "Sűrűség csökken", r5_q1_b: "Sűrűség nő", r5_q1_c: "Sűrűség marad", r5_q1_d: "Sűrűség duplázódik",
    r5_q2_q: "A parafa sűrűsége 0,24 g/cm³. Úszik vagy elsüllyed a vízben?", r5_q2_a: "Úszik", r5_q2_b: "Elsüllyed", r5_q2_c: "Lebeg", r5_q2_d: "Feloldódik",
  },
  ro: {
    r1_title: "Ce este densitatea?", r1_text: "Densitate = masă ÷ volum (ρ = m/V). Unitate: kg/m³ sau g/cm³. Densitate apă = 1000 kg/m³. Obiectele mai dense se scufundă în apă.",
    r1_fact1: "Plumbul este mult mai dens decât lemnul, deci plumbul se scufundă și lemnul plutește",
    r1_q: "Ce este densitatea?", r1_a: "Masă împărțită la volum", r1_b: "Greutate înmulțit cu volum", r1_c: "Culoarea materialului", r1_d: "Cât de cald este ceva",
    r2_title: "Plutire și scufundare", r2_text: "Un obiect plutește dacă densitatea sa este mai mică decât densitatea fluidului. Navele plutesc datorită aerului captiv în interior, care reduce densitatea totală.",
    r2_fact1: "O navă plutește datorită spațiilor pline cu aer care reduc densitatea medie sub cea a apei",
    r2_q: "De ce plutește o navă pe apă?", r2_a: "Aerul captiv reduce densitatea medie", r2_b: "Navele sunt din plastic", r2_c: "Apa împinge navele în sus", r2_d: "Navele nu cântăresc nimic",
    r3_title: "Calcularea densității", r3_text: "Exemplu: Un obiect de 500g are volum de 100 cm³. Densitate = 500g ÷ 100 cm³ = 5 g/cm³. Compară cu apa (1 g/cm³) pentru a prezice dacă plutește sau se scufundă.",
    r3_fact1: "Uleiul plutește pe apă pentru că densitate ulei (0,8 g/cm³) este mai mică decât apă (1 g/cm³)",
    r3_q: "Un obiect de 500g cu volum 100 cm³ are densitate de...", r3_a: "5 g/cm³", r3_b: "0,2 g/cm³", r3_c: "600 g/cm³", r3_d: "50 g/cm³",
    r4_title: "Descoperirea lui Arhimede", r4_text: "'Eureka!' Arhimede a descoperit că volumul apei deplasate de un obiect este egal cu volumul propriu. Aceasta ajută la măsurarea volumului prin deplasare apă. A folosit aceasta pentru a dovedi că o coroană nu era aur pur!",
    r4_fact1: "Arhimede a folosit deplasarea apei pentru a dovedi că o coroană aurească nu era aur pur",
    r4_q: "Cum a măsurat Arhimede volumul coroanei?", r4_a: "Prin măsurarea apei deplasate", r4_b: "Prin cântărire", r4_c: "Prin a-i privi mărimea", r4_d: "Prin topire",
    r5_q1_q: "Ce se întâmplă densității când volumul crește și masa rămâne aceeași?", r5_q1_a: "Densitate scade", r5_q1_b: "Densitate crește", r5_q1_c: "Densitate rămâne aceeași", r5_q1_d: "Densitate se dublează",
    r5_q2_q: "Pluta are densitate 0,24 g/cm³. Va plutii sau se va scufunda în apă?", r5_q2_a: "Plutește", r5_q2_b: "Se scufundă", r5_q2_c: "Suspendată", r5_q2_d: "Se dizolvă",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚖️</text></svg>
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

export default function DensityExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
