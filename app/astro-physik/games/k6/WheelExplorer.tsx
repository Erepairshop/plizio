"use client";
// WheelExplorer — Wheel & Axle, Screw, Gears (Rad und Achse) Grade 6

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Wheel and Axle", r1_text: "A wheel attached to a smaller axle. Turning the wheel applies a bigger force at the axle. Makes work easier!",
    r1_fact1: "A doorknob and steering wheel are examples of wheel and axle",
    r1_q: "What is a wheel and axle?", r1_a: "A wheel attached to an axle", r1_b: "A spinning tire", r1_c: "A circular door", r1_d: "A rod",
    r2_title: "Screw", r2_text: "An inclined plane wrapped around a cylinder. Used to lift, hold, or apply pressure. Much stronger force at the tip.",
    r2_fact1: "Screws convert rotational motion into downward force",
    r2_q: "A screw is actually a wrapped...", r2_a: "Inclined plane", r2_b: "Lever", r2_c: "Pulley", r2_d: "Wheel",
    r3_title: "Gear Wheels", r3_text: "Interlocking teeth transfer motion between wheels. Small gear drives large gear = more force, less speed. Large drives small = more speed.",
    r3_fact1: "Gears in a bicycle chain transfer power from pedals to wheels",
    r3_q: "What happens when a small gear drives a large gear?", r3_a: "More force, less speed", r3_b: "Same force, same speed", r3_c: "Less force, more speed", r3_d: "No motion transfer",
    r4_title: "Machines Using Simple Machines", r4_text: "Complex machines combine simple machines. A bicycle uses wheels, levers, gears, and pulleys. Understanding simple machines helps us understand how everything works!",
    r4_fact1: "A bicycle uses wheel, lever (pedal), and gear simple machines",
    r4_q: "Which simple machines does a bicycle use?", r4_a: "Wheel, lever, and gear", r4_b: "Only wheels", r4_c: "Only levers", r4_d: "Only pulleys",
    r5_q1_q: "A doorknob is an example of...", r5_q1_a: "Wheel and axle", r5_q1_b: "Screw", r5_q1_c: "Lever", r5_q1_d: "Pulley",
    r5_q2_q: "What force does a screw apply?", r5_q2_a: "Downward force", r5_q2_b: "Sideways force", r5_q2_c: "No force", r5_q2_d: "Upward force",
  },
  de: {
    r1_title: "Rad und Achse", r1_text: "Ein Rad ist an einer kleineren Achse befestigt. Das Drehen des Rades erzeugt eine größere Kraft an der Achse. Macht die Arbeit leichter!",
    r1_fact1: "Ein Türknauf und ein Lenkrad sind Beispiele für Rad und Achse",
    r1_q: "Was ist Rad und Achse?", r1_a: "Ein Rad an einer Achse befestigt", r1_b: "Ein drehendes Rad", r1_c: "Eine kreisförmige Tür", r1_d: "Eine Stange",
    r2_title: "Schraube", r2_text: "Eine schiefe Ebene, die um einen Zylinder gewickelt ist. Wird verwendet, um zu heben, zu halten oder Druck auszuüben. Viel stärkere Kraft am Ende.",
    r2_fact1: "Schrauben wandeln Rotationsbewegung in Abwärtskraft um",
    r2_q: "Eine Schraube ist eigentlich eine gewickelte...", r2_a: "Schiefe Ebene", r2_b: "Hebel", r2_c: "Flaschenzug", r2_d: "Rad",
    r3_title: "Zahnräder", r3_text: "Verflochtene Zähne übertragen Bewegung zwischen Rädern. Kleines Rad treibt großes Rad = mehr Kraft, weniger Geschwindigkeit. Großes treibt kleines = mehr Geschwindigkeit.",
    r3_fact1: "Zahnräder in einer Fahrradkette übertragen Kraft von Pedalen zu Rädern",
    r3_q: "Was passiert, wenn ein kleines Zahnrad ein großes Rad antreibt?", r3_a: "Mehr Kraft, weniger Geschwindigkeit", r3_b: "Gleiche Kraft, gleiche Geschwindigkeit", r3_c: "Weniger Kraft, mehr Geschwindigkeit", r3_d: "Keine Bewegungsübertragung",
    r4_title: "Maschinen mit einfachen Maschinen", r4_text: "Komplexe Maschinen kombinieren einfache Maschinen. Ein Fahrrad verwendet Räder, Hebel, Zahnräder und Flaschenzüge. Das Verständnis einfacher Maschinen hilft uns alles zu verstehen!",
    r4_fact1: "Ein Fahrrad nutzt Rad-, Hebel- und Zahnradeinfache Maschinen",
    r4_q: "Welche einfachen Maschinen nutzt ein Fahrrad?", r4_a: "Rad, Hebel und Zahnrad", r4_b: "Nur Räder", r4_c: "Nur Hebel", r4_d: "Nur Flaschenzüge",
    r5_q1_q: "Ein Türknauf ist ein Beispiel für...", r5_q1_a: "Rad und Achse", r5_q1_b: "Schraube", r5_q1_c: "Hebel", r5_q1_d: "Flaschenzug",
    r5_q2_q: "Welche Kraft übt eine Schraube aus?", r5_q2_a: "Abwärtskraft", r5_q2_b: "Seitliche Kraft", r5_q2_c: "Keine Kraft", r5_q2_d: "Aufwärtskraft",
  },
  hu: {
    r1_title: "Kerék és tengely", r1_text: "Egy kerék egy kisebb tengelyhez van rögzítve. A kerék elfordítása nagyobb erőt fejt ki a tengelynél. Megkönnyíti a munkát!",
    r1_fact1: "Az ajtógomb és a kormánykerék a kerék és tengely példái",
    r1_q: "Mi a kerék és tengely?", r1_a: "Egy tengelyhez rögzített kerék", r1_b: "Egy forgó kerék", r1_c: "Egy kerek ajtó", r1_d: "Egy rúd",
    r2_title: "Csavar", r2_text: "Egy ferde sík, amely egy henger köré van tekerve. Felhajtásra, rögzítésre vagy nyomás alkalmazására használják. Sokkal nagyobb erő a végén.",
    r2_fact1: "A csavarok a forgási mozgást lefelé irányuló erővé alakítják",
    r2_q: "A csavar valójában egy burkolt...", r2_a: "Ferde sík", r2_b: "Emelő", r2_c: "Csigasor", r2_d: "Kerék",
    r3_title: "Fogaskerekek", r3_text: "Az összefonódó fogak átviszik a mozgást a kerekek között. Kis kerék nagy kereket hajt = több erő, kevesebb sebesség. Nagy kerék kisebbet hajt = több sebesség.",
    r3_fact1: "A kerékpárlánc fogaskerekei átviszik az erőt a pedálokról a kerekekre",
    r3_q: "Mi történik, amikor egy kis fogaskerék egy nagy kereket hajt?", r3_a: "Több erő, kevesebb sebesség", r3_b: "Ugyanannyi erő, ugyanannyi sebesség", r3_c: "Kevesebb erő, több sebesség", r3_d: "Nincs mozgásátvitel",
    r4_title: "Gépek egyszerű gépekkel", r4_text: "Az összetett gépek egyszerű gépeket kombinálnak. A kerékpár kerekeket, karokokat, fogaskerekeket és csigasorokat használ. Az egyszerű gépek megértése segít mindent megérteni!",
    r4_fact1: "A kerékpár kerék-, karok- és fogaskerék-egyszerű gépeket használ",
    r4_q: "Milyen egyszerű gépeket használ a kerékpár?", r4_a: "Kerék, karok és fogaskerék", r4_b: "Csak kerekek", r4_c: "Csak karok", r4_d: "Csak csigasorok",
    r5_q1_q: "Az ajtógomb egy példa...", r5_q1_a: "Kerék és tengely", r5_q1_b: "Csavar", r5_q1_c: "Emelő", r5_q1_d: "Csigasor",
    r5_q2_q: "Milyen erőt fejt ki a csavar?", r5_q2_a: "Lefelé irányuló erő", r5_q2_b: "Oldalsó erő", r5_q2_c: "Nincs erő", r5_q2_d: "Felfelé irányuló erő",
  },
  ro: {
    r1_title: "Roată și axă", r1_text: "O roată este atașată la o axă mai mică. Rotirea roții aplică o forță mai mare la axă. Face munca mai ușoară!",
    r1_fact1: "O maniță de ușă și o volan sunt exemple de roată și axă",
    r1_q: "Ce este roata și axa?", r1_a: "O roată atașată la o axă", r1_b: "O roată rotativă", r1_c: "O ușă circulară", r1_d: "O bară",
    r2_title: "Șurub", r2_text: "Un plan înclinat înfășurat în jurul unui cilindru. Folosit pentru a ridica, a ține sau a aplica presiune. Forță mult mai mare la vârf.",
    r2_fact1: "Șuruburile convertesc mișcarea de rotație în forță descendentă",
    r2_q: "Un șurub este de fapt un plan...", r2_a: "Înclinat", r2_b: "Pîrghie", r2_c: "Scripete", r2_d: "Roată",
    r3_title: "Roți dințate", r3_text: "Dinții încleștați transferă mișcare între roți. Roată mică acționează roată mare = mai multă forță, mai puțin viteză. Roată mare acționează roată mică = mai multă viteză.",
    r3_fact1: "Roțile dințate din lanțul bicicletei transferă forța de la pedale la roți",
    r3_q: "Ce se întâmplă când o roată mică acționează o roată mare?", r3_a: "Mai multă forță, mai puțin viteză", r3_b: "Aceeași forță, aceeași viteză", r3_c: "Mai puțin forță, mai multă viteză", r3_d: "Fără transfer de mișcare",
    r4_title: "Mașini cu mașini simple", r4_text: "Mașinile complexe combină mașini simple. O bicicletă folosește roți, pîrghii, roți dințate și scripeți. Înțelegerea mașinilor simple ne ajută să înțelegem totul!",
    r4_fact1: "O bicicletă folosește mașini simple: roată, pîrghie și roată dințată",
    r4_q: "Ce mașini simple folosește o bicicletă?", r4_a: "Roată, pîrghie și roată dințată", r4_b: "Doar roți", r4_c: "Doar pîrghii", r4_d: "Doar scripeți",
    r5_q1_q: "O maniță de ușă este un exemplu de...", r5_q1_a: "Roată și axă", r5_q1_b: "Șurub", r5_q1_c: "Pîrghie", r5_q1_d: "Scripete",
    r5_q2_q: "Ce forță aplică un șurub?", r5_q2_a: "Forță descendentă", r5_q2_b: "Forță laterală", r5_q2_c: "Fără forță", r5_q2_d: "Forță ascendentă",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🔩</text></svg>
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

export default function WheelExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
