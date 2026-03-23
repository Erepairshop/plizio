"use client";
// ModernExplorer — Special Relativity & Quantum Basics (Moderne Physik) Grade 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Special Relativity", r1_text: "Einstein showed that nothing travels faster than light (c = 3×10⁸ m/s). E = mc² shows that mass and energy are equivalent and interchangeable.",
    r1_fact1: "The speed of light is the same for all observers, no matter how fast they move",
    r1_q: "E = mc² tells us that...", r1_a: "Mass and energy are equivalent", r1_b: "Energy equals mass times gravity", r1_c: "Light travels slowly", r1_d: "Time moves faster",
    r2_title: "Photoelectric Effect", r2_text: "Light knocks electrons off metal surfaces. This proved light acts like particles (photons). Einstein won the Nobel Prize for explaining this.",
    r2_fact1: "The brighter the light, the faster the electrons fly out",
    r2_q: "The photoelectric effect proved that light...", r2_a: "Behaves as particles (photons)", r2_b: "Only travels as waves", r2_c: "Cannot move metals", r2_d: "Makes metals invisible",
    r3_title: "Wave-Particle Duality", r3_text: "Everything—light, electrons, even atoms—acts as both waves and particles. Electrons diffract like waves through slits, but hit like particles.",
    r3_fact1: "A single electron can go through 2 slits at the same time as a wave",
    r3_q: "Wave-particle duality means...", r3_a: "Things act as both waves and particles", r3_b: "Waves are stronger than particles", r3_c: "Particles can't be waves", r3_d: "Light has no properties",
    r4_title: "Quantum Basics", r4_text: "Energy comes in discrete packets called quanta. Heisenberg's Uncertainty Principle: we can't know both position and momentum exactly at once.",
    r4_fact1: "A photon is the smallest unit of light energy",
    r4_q: "A quantum of light energy is called a...", r4_a: "Photon", r4_b: "Wave front", r4_c: "Photosynthesis", r4_d: "Electron",
    r5_q1_q: "What is the speed of light?", r5_q1_a: "3×10⁸ m/s", r5_q1_b: "1×10⁴ m/s", r5_q1_c: "Infinite", r5_q1_d: "Unknown",
    r5_q2_q: "Who won the Nobel Prize for the photoelectric effect?", r5_q2_a: "Einstein", r5_q2_b: "Newton", r5_q2_c: "Planck", r5_q2_d: "Bohr",
  },
  de: {
    r1_title: "Spezielle Relativität", r1_text: "Einstein zeigte, dass nichts schneller als Licht reist (c = 3×10⁸ m/s). E = mc² zeigt, dass Masse und Energie äquivalent sind.",
    r1_fact1: "Die Lichtgeschwindigkeit ist für alle Beobachter gleich, egal wie schnell sie sich bewegen",
    r1_q: "E = mc² zeigt uns, dass...", r1_a: "Masse und Energie äquivalent sind", r1_b: "Energie gleich Masse mal Gravitation", r1_c: "Licht reist langsam", r1_d: "Zeit läuft schneller",
    r2_title: "Photoelektrischer Effekt", r2_text: "Licht schlägt Elektronen aus Metalloberflächen heraus. Dies bewies, dass Licht wie Teilchen (Photonen) wirkt. Einstein erhielt den Nobelpreis dafür.",
    r2_fact1: "Je heller das Licht, desto schneller fliegen die Elektronen heraus",
    r2_q: "Der photoelektrische Effekt bewies, dass Licht...", r2_a: "Als Teilchen wirkt (Photonen)", r2_b: "Nur als Welle reist", r2_c: "Keine Metalle bewegen kann", r2_d: "Metalle unsichtbar macht",
    r3_title: "Welle-Teilchen-Dualismus", r3_text: "Alles—Licht, Elektronen, sogar Atome—wirkt als Welle und Teilchen. Elektronen diffrahieren wie Wellen, treffen aber wie Teilchen.",
    r3_fact1: "Ein einzelnes Elektron kann gleichzeitig 2 Spalte als Welle durchgehen",
    r3_q: "Welle-Teilchen-Dualismus bedeutet...", r3_a: "Dinge wirken als Wellen und Teilchen", r3_b: "Wellen sind stärker als Teilchen", r3_c: "Teilchen können keine Wellen sein", r3_d: "Licht hat keine Eigenschaften",
    r4_title: "Quantengrundlagen", r4_text: "Energie kommt in diskreten Paketen, Quanten genannt. Heisenbergs Unschärfeprinzip: wir können nicht gleichzeitig Ort und Impuls kennen.",
    r4_fact1: "Ein Photon ist die kleinste Lichtenergie-Einheit",
    r4_q: "Ein Licht-Energie-Quantum heißt...", r4_a: "Photon", r4_b: "Wellenfront", r4_c: "Photosynthese", r4_d: "Elektron",
    r5_q1_q: "Wie ist die Lichtgeschwindigkeit?", r5_q1_a: "3×10⁸ m/s", r5_q1_b: "1×10⁴ m/s", r5_q1_c: "Unendlich", r5_q1_d: "Unbekannt",
    r5_q2_q: "Wer gewann den Nobelpreis für den photoelektrischen Effekt?", r5_q2_a: "Einstein", r5_q2_b: "Newton", r5_q2_c: "Planck", r5_q2_d: "Bohr",
  },
  hu: {
    r1_title: "Speciális relativitáselmélet", r1_text: "Einstein megmutatta, hogy semmi sem utazik gyorsabban a fénynél (c = 3×10⁸ m/s). E = mc² azt mutatja, hogy a tömeg és az energia ekvivalensek.",
    r1_fact1: "A fény sebessége azonos minden megfigyelő számára, függetlenül attól, hogy milyen gyorsan mozognak",
    r1_q: "E = mc² azt mondja nekünk...", r1_a: "A tömeg és az energia ekvivalensek", r1_b: "Az energia egyenlő a tömeggel szorozva a gravitációval", r1_c: "A fény lassan utazik", r1_d: "Az idő gyorsabban halad",
    r2_title: "Fotoelektromos effektus", r2_text: "A fény elektronokat taszít ki a fém felületeiből. Ez bebizonyította, hogy a fény részecskék (fotonok) módjára működik. Einstein Nobeldiját érte kapta.",
    r2_fact1: "Minél világosabb a fény, annál gyorsabban repülnek ki az elektronok",
    r2_q: "A fotoelektromos effektus bebizonyította, hogy a fény...", r2_a: "Részecskékként viselkedik (fotonok)", r2_b: "Csak hullámként utazik", r2_c: "Nem képes fémeket mozgatni", r2_d: "Láthatatlanná teszi a fémeket",
    r3_title: "Hullám-részecske kettősség", r3_text: "Minden—a fény, az elektronok, még az atomok is—hullámként és részecskékként működik. Az elektronok hullámként diffraktálódnak, de részecskékként ütköznek.",
    r3_fact1: "Egyetlen elektron egyszerre mehet át 2 részen hullámként",
    r3_q: "A hullám-részecske kettősség azt jelenti...", r3_a: "A dolgok hullámként és részecskékként viselkednek", r3_b: "A hullámok erősebbek, mint a részecskék", r3_c: "A részecskék nem lehetnek hullámok", r3_d: "A fénynek nincs tulajdonsága",
    r4_title: "Kvantum alapok", r4_text: "Az energia diszkrét csomagokból (kvantumokból) áll. Heisenberg Bizonytalanság-elve: nem tudhatjuk egyszerre a helyzetet és az impulzust.",
    r4_fact1: "A foton a fénythullám legkisebb energiaegysége",
    r4_q: "A fényhullám energiaegysége neve...", r4_a: "Foton", r4_b: "Hullámfront", r4_c: "Fotoszintézis", r4_d: "Elektron",
    r5_q1_q: "Mi a fény sebessége?", r5_q1_a: "3×10⁸ m/s", r5_q1_b: "1×10⁴ m/s", r5_q1_c: "Végtelen", r5_q1_d: "Ismeretlen",
    r5_q2_q: "Ki nyerte a Nobeldiját a fotoelektromos effektusáért?", r5_q2_a: "Einstein", r5_q2_b: "Newton", r5_q2_c: "Planck", r5_q2_d: "Bohr",
  },
  ro: {
    r1_title: "Relativitatea specială", r1_text: "Einstein a arătat că nimic nu călătorește mai rapid decât lumina (c = 3×10⁸ m/s). E = mc² arată că masa și energia sunt echivalente.",
    r1_fact1: "Viteza luminii este aceeași pentru toți observatorii, indiferent cât de repede se mișcă",
    r1_q: "E = mc² ne spune că...", r1_a: "Masa și energia sunt echivalente", r1_b: "Energia egală masa ori gravitația", r1_c: "Lumina călătorește lent", r1_d: "Timpul se mișcă mai repede",
    r2_title: "Efectul fotoelectric", r2_text: "Lumina loveşte electronii din suprafețele metalice. Aceasta a dovedit că lumina se comportă ca particule (fotoni). Einstein a câștigat Premiul Nobel pentru aceasta.",
    r2_fact1: "Cu cât mai strălucitoare este lumina, cu atât mai repede ies electronii",
    r2_q: "Efectul fotoelectric a dovedit că lumina...", r2_a: "Se comportă ca particule (fotoni)", r2_b: "Călătorește doar ca undă", r2_c: "Nu poate mișca metale", r2_d: "Face metale invizibile",
    r3_title: "Dualismul undă-particulă", r3_text: "Totul—lumina, electronii, chiar și atomii—funcționează atât ca undă cât și particulă. Electronii se difractează ca undele, dar lovesc ca particule.",
    r3_fact1: "Un singur electron poate trece prin 2 fante simultan ca undă",
    r3_q: "Dualismul undă-particulă înseamnă...", r3_a: "Lucrurile se comportă ca unde și particule", r3_b: "Undele sunt mai puternice decât particulele", r3_c: "Particulele nu pot fi unde", r3_d: "Lumina nu are proprietăți",
    r4_title: "Bazele cuantice", r4_text: "Energia vine în pachete discrete numite cuante. Principiul incertitudinii Heisenberg: nu putem cunoaște simultan poziția și impulsul exact.",
    r4_fact1: "Un foton este cea mai mică unitate de energie luminoasă",
    r4_q: "Un quantum de energie luminoasă se numește...", r4_a: "Foton", r4_b: "Frontul undei", r4_c: "Fotosinteză", r4_d: "Electron",
    r5_q1_q: "Care este viteza luminii?", r5_q1_a: "3×10⁸ m/s", r5_q1_b: "1×10⁴ m/s", r5_q1_c: "Infinit", r5_q1_d: "Necunoscut",
    r5_q2_q: "Cine a câștigat Premiul Nobel pentru efectul fotoelectric?", r5_q2_a: "Einstein", r5_q2_b: "Newton", r5_q2_c: "Planck", r5_q2_d: "Bohr",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#0a1428"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌌</text></svg>
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

export default function ModernExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
