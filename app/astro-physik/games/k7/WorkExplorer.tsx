"use client";
// WorkExplorer — Work & Power (Arbeit und Leistung) Klasse 7
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Work & Force", r1_text: "Work is done when a force moves an object. W = F × d. Work depends on force and distance. If there is no movement, no work is done. Units of work: Joules (J). 1 Joule = 1 Newton × 1 meter.",
    r1_fact1: "Pushing a box 5 meters with 20 Newtons of force: Work = 20 × 5 = 100 Joules",
    r1_q: "You push a box 5m with 20N force. Work done?", r1_a: "100 J", r1_b: "25 J", r1_c: "4 J", r1_d: "50 J",
    r2_title: "Power & Time", r2_text: "Power is work divided by time. P = W/t. Power measures how fast work is done. Units: Watts (W). 1 Watt = 1 Joule per second. More power means the same work in less time.",
    r2_fact1: "If you do 100 Joules of work in 10 seconds, the power is 10 Watts",
    r2_q: "You do 100J of work in 10 seconds. Power?", r2_a: "10 W", r2_b: "100 W", r2_c: "1 W", r2_d: "1000 W",
    r3_title: "Gravitational Potential Energy", r3_text: "PE is the energy an object has due to its position. PE = m × g × h. Lifting an object higher increases its PE. m = mass (kg), g = 10 m/s² on Earth, h = height (m). Units: Joules (J).",
    r3_fact1: "Lifting a 2 kg book 3 meters high: PE = 2 × 10 × 3 = 60 Joules",
    r3_q: "Lifting a 2kg book 3m high. PE gained? (g=10)", r3_a: "60 J", r3_b: "30 J", r3_c: "6 J", r3_d: "100 J",
    r4_title: "Kinetic Energy", r4_text: "KE is the energy of motion. KE = ½ × m × v². Faster objects have much more KE because velocity is squared. Doubling speed quadruples KE (4× more energy!). Units: Joules (J).",
    r4_fact1: "A car moving at 10 m/s has 4 times more KE than a car at 5 m/s (same mass)",
    r4_q: "If speed doubles, kinetic energy...", r4_a: "Quadruples (×4)", r4_b: "Doubles (×2)", r4_c: "Stays same", r4_d: "Halves",
    r5_q1_q: "A ball pushed harder moves farther. This shows work depends on...", r5_q1_a: "Force and distance", r5_q1_b: "Only speed", r5_q1_c: "Only mass", r5_q1_d: "Only time",
    r5_q2_q: "Power is measured in... (units)", r5_q2_a: "Watts (W)", r5_q2_b: "Joules (J)", r5_q2_c: "Newtons (N)", r5_q2_d: "Meters (m)",
  },
  de: {
    r1_title: "Arbeit und Kraft", r1_text: "Arbeit wird verrichtet, wenn eine Kraft ein Objekt bewegt. W = F × d. Arbeit hängt von Kraft und Entfernung ab. Wenn es keine Bewegung gibt, wird keine Arbeit verrichtet. Einheiten der Arbeit: Joule (J). 1 Joule = 1 Newton × 1 Meter.",
    r1_fact1: "Eine Kiste 5 Meter mit 20 Newton Kraft drücken: Arbeit = 20 × 5 = 100 Joule",
    r1_q: "Du drückst eine Kiste 5m mit 20N Kraft. Arbeit geleistet?", r1_a: "100 J", r1_b: "25 J", r1_c: "4 J", r1_d: "50 J",
    r2_title: "Leistung und Zeit", r2_text: "Leistung ist Arbeit geteilt durch Zeit. P = W/t. Leistung misst, wie schnell Arbeit verrichtet wird. Einheiten: Watt (W). 1 Watt = 1 Joule pro Sekunde. Mehr Leistung bedeutet dieselbe Arbeit in weniger Zeit.",
    r2_fact1: "Wenn du 100 Joule Arbeit in 10 Sekunden verrichtest, die Leistung ist 10 Watt",
    r2_q: "Du verrichtest 100J Arbeit in 10 Sekunden. Leistung?", r2_a: "10 W", r2_b: "100 W", r2_c: "1 W", r2_d: "1000 W",
    r3_title: "Gravitationale potentielle Energie", r3_text: "PE ist die Energie, die ein Objekt aufgrund seiner Position hat. PE = m × g × h. Ein Objekt höher zu heben, erhöht seine PE. m = Masse (kg), g = 10 m/s² auf der Erde, h = Höhe (m). Einheiten: Joule (J).",
    r3_fact1: "Ein 2 kg Buch 3 Meter hoch heben: PE = 2 × 10 × 3 = 60 Joule",
    r3_q: "Ein 2kg Buch 3m hoch heben. PE gewonnen? (g=10)", r3_a: "60 J", r3_b: "30 J", r3_c: "6 J", r3_d: "100 J",
    r4_title: "Kinetische Energie", r4_text: "KE ist die Energie der Bewegung. KE = ½ × m × v². Schnellere Objekte haben viel mehr KE, da die Geschwindigkeit quadriert wird. Die Verdopplung der Geschwindigkeit vervierfacht die KE (4× mehr Energie!). Einheiten: Joule (J).",
    r4_fact1: "Ein Auto, das sich mit 10 m/s bewegt, hat 4-mal mehr KE als ein Auto mit 5 m/s (gleiche Masse)",
    r4_q: "Wenn die Geschwindigkeit verdoppelt wird, kinetische Energie...", r4_a: "Vervierfacht sich (×4)", r4_b: "Verdoppelt sich (×2)", r4_c: "Bleibt gleich", r4_d: "Halbiert sich",
    r5_q1_q: "Ein Ball, der härter gedrückt wird, bewegt sich weiter. Dies zeigt, dass Arbeit abhängt von...", r5_q1_a: "Kraft und Entfernung", r5_q1_b: "Nur Geschwindigkeit", r5_q1_c: "Nur Masse", r5_q1_d: "Nur Zeit",
    r5_q2_q: "Leistung wird gemessen in... (Einheiten)", r5_q2_a: "Watt (W)", r5_q2_b: "Joule (J)", r5_q2_c: "Newton (N)", r5_q2_d: "Meter (m)",
  },
  hu: {
    r1_title: "Munka és erő", r1_text: "Munka akkor végzett, amikor egy erő mozgat egy objektumot. W = F × d. A munka az erőtől és a távolságtól függ. Ha nincs mozgás, nincs munka. A munka egységei: Joule (J). 1 Joule = 1 Newton × 1 méter.",
    r1_fact1: "Egy doboz 5 méterrel 20 Newton erővel nyomva: Munka = 20 × 5 = 100 Joule",
    r1_q: "Egy dobozt 5m-rel nyomsz 20N erővel. Elvégzett munka?", r1_a: "100 J", r1_b: "25 J", r1_c: "4 J", r1_d: "50 J",
    r2_title: "Teljesítmény és idő", r2_text: "A teljesítmény a munka osztva az idővel. P = W/t. A teljesítmény azt méri, milyen gyorsan végzett munka. Egységek: Watt (W). 1 Watt = 1 Joule per másodperc. Nagyobb teljesítmény azt jelenti, hogy ugyanaz a munka kevesebb idő alatt.",
    r2_fact1: "Ha 100 Joule munkát végzel 10 másodperc alatt, a teljesítmény 10 Watt",
    r2_q: "100J munkát végzel 10 másodperc alatt. Teljesítmény?", r2_a: "10 W", r2_b: "100 W", r2_c: "1 W", r2_d: "1000 W",
    r3_title: "Gravitációs helyzeti energia", r3_text: "A PE az energia, amit egy objektum a helyzete miatt hord. PE = m × g × h. Egy objektum magasabbra emelésehelyzetét PE-jét. m = tömeg (kg), g = 10 m/s² a Föld felszínén, h = magasság (m). Egységek: Joule (J).",
    r3_fact1: "Egy 2 kg-os könyvet 3 méterrel felfelé emelni: PE = 2 × 10 × 3 = 60 Joule",
    r3_q: "Egy 2kg-os könyvet 3m-rel felfelé emelni. PE szerzett? (g=10)", r3_a: "60 J", r3_b: "30 J", r3_c: "6 J", r3_d: "100 J",
    r4_title: "Mozgási energia", r4_text: "KE a mozgás energiája. KE = ½ × m × v². A gyorsabb objektumok sokkal több KE-vel rendelkeznek, mivel a sebesség négyzetre van emelve. A sebesség megduplázása a KE-t négyszerezheti (4× több energia!). Egységek: Joule (J).",
    r4_fact1: "Egy autó, amely 10 m/s-cel mozog, 4-szer több KE-vel rendelkezik, mint egy autó 5 m/s-cel (ugyanaz a tömeg)",
    r4_q: "Ha a sebesség megduplázódik, a mozgási energia...", r4_a: "Négyszereződik (×4)", r4_b: "Megduplázódik (×2)", r4_c: "Ugyanaz marad", r4_d: "Feleződik",
    r5_q1_q: "Egy labdát erősebben nyomva tovább mozog. Ez azt mutatja, hogy a munka függ...-tól", r5_q1_a: "Az erőtől és a távolságtól", r5_q1_b: "Csak a sebességtől", r5_q1_c: "Csak a tömegtől", r5_q1_d: "Csak az időtől",
    r5_q2_q: "A teljesítményt mérjük... (egységek)", r5_q2_a: "Watt-ban (W)", r5_q2_b: "Joule-ban (J)", r5_q2_c: "Newton-ban (N)", r5_q2_d: "Méter-ben (m)",
  },
  ro: {
    r1_title: "Lucrul și forța", r1_text: "Munca se execută când o forță mișcă un obiect. W = F × d. Munca depinde de forță și distanță. Dacă nu existe mișcare, nu se execută munca. Unități de lucru: Joule (J). 1 Joule = 1 Newton × 1 metru.",
    r1_fact1: "Împingerea unei cutii 5 metri cu 20 de Newtoni de forță: Lucru = 20 × 5 = 100 Joule",
    r1_q: "Împingi o cutie 5m cu 20N de forță. Lucru executat?", r1_a: "100 J", r1_b: "25 J", r1_c: "4 J", r1_d: "50 J",
    r2_title: "Puterea și timp", r2_text: "Puterea este munca împărțită la timp. P = W/t. Puterea măsoară cât de repede se execută munca. Unități: Watt (W). 1 Watt = 1 Joule pe secundă. Putere mai mare înseamnă aceeași muncă în mai puțin timp.",
    r2_fact1: "Dacă execuți 100 Joule de muncă în 10 secunde, puterea este 10 Watt",
    r2_q: "Execuți 100J de muncă în 10 secunde. Putere?", r2_a: "10 W", r2_b: "100 W", r2_c: "1 W", r2_d: "1000 W",
    r3_title: "Energia potențială gravitațională", r3_text: "PE este energia pe care o are un obiect datorită poziției sale. PE = m × g × h. Ridicarea unui obiect mai sus crește PE-ul acestuia. m = masă (kg), g = 10 m/s² pe Pământ, h = înălțime (m). Unități: Joule (J).",
    r3_fact1: "Ridicarea unei cărți de 2 kg la 3 metri: PE = 2 × 10 × 3 = 60 Joule",
    r3_q: "Ridicarea unei cărți de 2kg la 3m. PE câștigat? (g=10)", r3_a: "60 J", r3_b: "30 J", r3_c: "6 J", r3_d: "100 J",
    r4_title: "Energia cinetică", r4_text: "KE este energia mișcării. KE = ½ × m × v². Obiectele mai rapide au mult mai multă KE, deoarece viteza este la pătrat. Dublarea vitezei cvadruplez KE (4× mai multă energie!). Unități: Joule (J).",
    r4_fact1: "O mașină care se mișcă cu 10 m/s are de 4 ori mai multă KE decât o mașină cu 5 m/s (aceeași masă)",
    r4_q: "Dacă viteza se dublează, energia cinetică...", r4_a: "Se cvadruplez (×4)", r4_b: "Se dublează (×2)", r4_c: "Rămâne la fel", r4_d: "Se înjumătățește",
    r5_q1_q: "O minge împinsă mai greu se mișcă mai departe. Aceasta arată că munca depinde de...", r5_q1_a: "Forță și distanță", r5_q1_b: "Doar viteză", r5_q1_c: "Doar masă", r5_q1_d: "Doar timp",
    r5_q2_q: "Puterea se măsoară în... (unități)", r5_q2_a: "Watt (W)", r5_q2_b: "Joule (J)", r5_q2_c: "Newton (N)", r5_q2_d: "Metru (m)",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">💪</text></svg>
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

export default function WorkExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
