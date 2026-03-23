"use client";
// ForcesExplorer — Forces Basics (Push & Pull, Friction) Grade 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Push & Pull Forces", r1_text: "Forces are pushes and pulls that make things move, stop, or change direction. Pushing a shopping cart and pulling a door handle are examples of forces in action.",
    r1_fact1: "Forces can make a stationary object move or a moving object stop",
    r1_q: "What happens when you push a stationary ball?", r1_a: "It starts moving", r1_b: "It gets heavier", r1_c: "It disappears", r1_d: "It changes color",
    r2_title: "Friction Force", r2_text: "Friction is a force that opposes motion and slows things down. Rough surfaces create more friction than smooth surfaces. A skater slides farther on ice than on sand.",
    r2_fact1: "Friction causes objects to slow down and eventually stop moving",
    r2_q: "On which surface is friction greatest?", r2_a: "Rough sandpaper", r2_b: "Smooth ice", r2_c: "Polished glass", r2_d: "Wet floor",
    r3_title: "Types of Forces", r3_text: "Contact forces like push, pull, and friction happen when objects touch. Non-contact forces like gravity and magnetism work at a distance without touching.",
    r3_fact1: "Gravity pulls you toward Earth even though it does not touch you directly",
    r3_q: "Which is a non-contact force?", r3_a: "Gravity", r3_b: "Friction", r3_c: "Pushing", r3_d: "Pulling",
    r4_title: "Deformation by Forces", r4_text: "Forces can stretch, compress, twist, or deform objects. When you pull a spring, it stretches. When you compress it, it gets shorter. These changes show how forces affect objects.",
    r4_fact1: "Springs return to their original shape when the force is removed",
    r4_q: "What happens to a spring when you pull it?", r4_a: "It stretches", r4_b: "It gets heavier", r4_c: "It melts", r4_d: "It shrinks",
    r5_q1_q: "What does friction do to moving objects?", r5_q1_a: "Slows them down", r5_q1_b: "Speeds them up", r5_q1_c: "Makes them lighter", r5_q1_d: "Changes their color",
    r5_q2_q: "Which force keeps you on the ground?", r5_q2_a: "Gravity", r5_q2_b: "Friction", r5_q2_c: "Magnetism", r5_q2_d: "Air pressure",
  },
  de: {
    r1_title: "Drück- und Zugkräfte", r1_text: "Kräfte sind Drücke und Züge, die Dinge bewegen, stoppen oder die Richtung ändern. Ein Einkaufswagen schieben und eine Tür ziehen sind Beispiele für Kräfte in Aktion.",
    r1_fact1: "Kräfte können ein stillstehendes Objekt bewegen oder ein bewegtes Objekt stoppen",
    r1_q: "Was passiert, wenn du einen ruhenden Ball schiebst?", r1_a: "Er beginnt sich zu bewegen", r1_b: "Er wird schwerer", r1_c: "Er verschwindet", r1_d: "Er ändert die Farbe",
    r2_title: "Reibungskraft", r2_text: "Reibung ist eine Kraft, die Bewegung verhindert und Dinge verlangsamt. Raue Oberflächen erzeugen mehr Reibung als glatte Oberflächen. Ein Skater gleitet auf Eis weiter als auf Sand.",
    r2_fact1: "Reibung lässt Objekte langsamer werden und schließlich stehen bleiben",
    r2_q: "Auf welcher Oberfläche ist Reibung am größten?", r2_a: "Raues Schleifpapier", r2_b: "Glattes Eis", r2_c: "Poliertes Glas", r2_d: "Nasse Oberfläche",
    r3_title: "Arten von Kräften", r3_text: "Kontaktkräfte wie Druck, Zug und Reibung entstehen, wenn Objekte berührt werden. Fernkräfte wie Schwerkraft und Magnetismus wirken über eine Entfernung ohne Berührung.",
    r3_fact1: "Die Schwerkraft zieht dich zur Erde, ohne dich direkt zu berühren",
    r3_q: "Welche ist eine Fernkraft?", r3_a: "Schwerkraft", r3_b: "Reibung", r3_c: "Drücken", r3_d: "Ziehen",
    r4_title: "Verformung durch Kräfte", r4_text: "Kräfte können Objekte dehnen, komprimieren, drehen oder verformen. Wenn du eine Feder ziehst, dehnt sie sich. Wenn du sie komprimierst, wird sie kürzer. Diese Änderungen zeigen, wie Kräfte Objekte beeinflussen.",
    r4_fact1: "Federn kehren zu ihrer ursprünglichen Form zurück, wenn die Kraft entfernt wird",
    r4_q: "Was passiert mit einer Feder, wenn du sie ziehst?", r4_a: "Sie dehnt sich", r4_b: "Sie wird schwerer", r4_c: "Sie schmilzt", r4_d: "Sie schrumpft",
    r5_q1_q: "Was tut Reibung mit sich bewegenden Objekten?", r5_q1_a: "Verlangsamt sie", r5_q1_b: "Beschleunigt sie", r5_q1_c: "Macht sie leichter", r5_q1_d: "Ändert ihre Farbe",
    r5_q2_q: "Welche Kraft hält dich auf dem Boden?", r5_q2_a: "Schwerkraft", r5_q2_b: "Reibung", r5_q2_c: "Magnetismus", r5_q2_d: "Luftdruck",
  },
  hu: {
    r1_title: "Nyomás és húzás erőik", r1_text: "Az erők olyan nyomások és húzások, amelyek mozgatnak, megállítanak vagy megváltoztatnak irányokat. A bevásárlókocsi tolása és az ajtó húzása az erőknek való kitettség példái.",
    r1_fact1: "Az erők mozgásban lévő vagy álló tárgyakat mozgathatnak vagy megállíthatnak",
    r1_q: "Mi történik, ha egy mozdulatlan labdát tolsz?", r1_a: "Elkezdődik a mozgás", r1_b: "Nehezebbé válik", r1_c: "Eltűnik", r1_d: "Színt változtat",
    r2_title: "Súrlódási erő", r2_text: "A súrlódás egy erő, amely ellentmond a mozgásnak és lelassítja a dolgokat. A durva felületek több súrlódást okoznak, mint a sima felületek. A korcsolyázó tovább csúszik a jégen, mint a homokra.",
    r2_fact1: "A súrlódás a tárgyakat lelassítja és végül megállítja",
    r2_q: "Melyik felületen a legnagyobb a súrlódás?", r2_a: "Durva csiszolópapír", r2_b: "Sima jég", r2_c: "Csiszolt üveg", r2_d: "Nedves felület",
    r3_title: "Az erők fajtái", r3_text: "Az érintkezési erők, mint a nyomás, húzás és súrlódás akkor jönnek létre, amikor az objektumok érintkeznek. A távolsági erők, mint a gravitáció és a mágnesség, távolságon keresztül működnek anélkül, hogy érintkeznének.",
    r3_fact1: "A gravitáció az Föld felé húz téged, anélkül hogy közvetlenül érintkezne",
    r3_q: "Melyik a távolsági erő?", r3_a: "Gravitáció", r3_b: "Súrlódás", r3_c: "Nyomás", r3_d: "Húzás",
    r4_title: "Alakváltozás erőkkel", r4_text: "Az erők nyújthatnak, összenyomhatnak, csavarhatnak vagy deformálhatnak tárgyakat. Amikor egy rugót húzol, megnyúlik. Amikor összenyomod, rövidebb lesz. Ez a változás mutatja, hogyan hatnak az erők a tárgyakra.",
    r4_fact1: "A rugók visszatérnek eredeti alakjukra, amikor az erőt eltávolítod",
    r4_q: "Mi történik egy rugóval, ha húzod?", r4_a: "Megnyúlik", r4_b: "Nehezebbé válik", r4_c: "Megolvad", r4_d: "Zsugorodik",
    r5_q1_q: "Mit csinál a súrlódás a mozgó tárgyakkal?", r5_q1_a: "Lelassítja őket", r5_q1_b: "Felgyorsítja őket", r5_q1_c: "Könnyebbé teszi őket", r5_q1_d: "Megváltoztatja a színüket",
    r5_q2_q: "Melyik erő tart meg a talajon?", r5_q2_a: "Gravitáció", r5_q2_b: "Súrlódás", r5_q2_c: "Mágnesség", r5_q2_d: "Légnyomás",
  },
  ro: {
    r1_title: "Forțe de împingere și tragere", r1_text: "Forțele sunt împingeri și trageri care mișcă, opresc sau schimbă direcția lucrurilor. Împingerea unui cărucior de cumpărături și trragerea unui mâner de ușă sunt exemple de forțe în acțiune.",
    r1_fact1: "Forțele pot mișca un obiect imobil sau pot opri un obiect în mișcare",
    r1_q: "Ce se întâmplă când împingi o minge în repaos?", r1_a: "Aceasta începe să se miște", r1_b: "Devine mai grea", r1_c: "Dispare", r1_d: "Se schimbă culoarea",
    r2_title: "Forța de frecare", r2_text: "Frecarea este o forță care se opune mișcării și încetinește lucrurile. Suprafețele rugoase creează mai multă frecare decât suprafețele netede. Un patinator alunecă mai departe pe gheață decât pe nisip.",
    r2_fact1: "Frecarea face ca obiectele să se încetinească și în final să se oprească",
    r2_q: "Pe care suprafață este frecarea cea mai mare?", r2_a: "Hârtie de șlefuit aspră", r2_b: "Gheață netedă", r2_c: "Sticlă lustruită", r2_d: "Suprafață udă",
    r3_title: "Tipuri de forțe", r3_text: "Forțele de contact cum ar fi împingerea, tragerea și frecarea apar când obiectele se ating. Forțele de la distanță cum ar fi gravitația și magnetismul funcționează la distanță fără a se atinge.",
    r3_fact1: "Gravitația te trage către Pământ fără a te atinge direct",
    r3_q: "Care este o forță la distanță?", r3_a: "Gravitația", r3_b: "Frecarea", r3_c: "Împingerea", r3_d: "Tragerea",
    r4_title: "Deformație prin forțe", r4_text: "Forțele pot întinde, comprima, răsuci sau deforma obiectele. Când tragi o sarcină, aceasta se întinde. Când o comprimi, devine mai scurtă. Aceste schimbări arată cum afectează forțele obiectele.",
    r4_fact1: "Arcurile se întorc la forma lor originală când forța este eliminată",
    r4_q: "Ce se întâmplă cu un arc când îl tragi?", r4_a: "Se întinde", r4_b: "Devine mai greu", r4_c: "Se topește", r4_d: "Se micșorează",
    r5_q1_q: "Ce face frecarea cu obiectele în mișcare?", r5_q1_a: "Le încetinește", r5_q1_b: "Le accelerează", r5_q1_c: "Le face mai ușoare", r5_q1_d: "Le schimbă culoarea",
    r5_q2_q: "Care forță te ține pe pământ?", r5_q2_a: "Gravitația", r5_q2_b: "Frecarea", r5_q2_c: "Magnetismul", r5_q2_d: "Presiunea aerului",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">➡️</text></svg>
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

export default function ForcesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
