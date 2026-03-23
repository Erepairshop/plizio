"use client";
// MachinesExplorer — Simple Machines (Einfache Maschinen) Grade 6
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Levers", r1_text: "A lever is a rigid bar that pivots on a fulcrum. Class 1: fulcrum between effort and load, like a seesaw.",
    r1_fact1: "Seesaws, crowbars, and scissors use lever principles",
    r1_q: "What is the pivot point of a lever called?", r1_a: "Fulcrum", r1_b: "Pivot pin", r1_c: "Hinge", r1_d: "Axis",
    r2_title: "Pulleys", r2_text: "A pulley changes the direction of force. Multiple pulleys reduce the effort needed to lift heavy objects.",
    r2_fact1: "Pulleys are used in construction cranes and window blinds",
    r2_q: "What does a pulley do?", r2_a: "Changes force direction", r2_b: "Creates friction", r2_c: "Reduces speed", r2_d: "Breaks objects",
    r3_title: "Inclined Plane", r3_text: "A ramp reduces the force needed but increases the distance traveled. Slopes are inclined planes.",
    r3_fact1: "Ramps, stairs, and ladders are inclined planes",
    r3_q: "An inclined plane reduces...", r3_a: "The force needed", r3_b: "The distance", r3_c: "The speed", r3_d: "The weight",
    r4_title: "Mechanical Advantage", r4_text: "Mechanical Advantage (MA) = Load ÷ Effort. Higher MA means easier to lift heavy objects.",
    r4_fact1: "A pulley system with MA=3 divides the effort needed by three",
    r4_q: "If you lift 100N with 25N effort, the mechanical advantage is...", r4_a: "4", r4_b: "2.5", r4_c: "75", r4_d: "125",
    r5_q1_q: "Which tool uses a lever?", r5_q1_a: "Crowbar", r5_q1_b: "Hammer", r5_q1_c: "Saw", r5_q1_d: "Drill",
    r5_q2_q: "A wedge is a type of...", r5_q2_a: "Inclined plane", r5_q2_b: "Pulley", r5_q2_c: "Lever", r5_q2_d: "Wheel",
  },
  de: {
    r1_title: "Hebel", r1_text: "Ein Hebel ist eine starre Stange, die sich um einen Drehpunkt dreht. Klasse 1: Drehpunkt zwischen Kraft und Last, wie eine Wippe.",
    r1_fact1: "Wippen, Brechstangen und Scheren verwenden Hebelprinzipien",
    r1_q: "Wie heißt der Drehpunkt eines Hebels?", r1_a: "Drehpunkt", r1_b: "Drehzapfen", r1_c: "Scharnier", r1_d: "Achse",
    r2_title: "Rollen", r2_text: "Eine Rolle ändert die Richtung der Kraft. Mehrere Rollen reduzieren die Kraft, die zum Heben schwerer Gegenstände erforderlich ist.",
    r2_fact1: "Rollen werden in Baukränen und Jalousien verwendet",
    r2_q: "Was macht eine Rolle?", r2_a: "Ändert die Kraftrichtung", r2_b: "Erzeugt Reibung", r2_c: "Verringert die Geschwindigkeit", r2_d: "Bricht Objekte",
    r3_title: "Schiefe Ebene", r3_text: "Eine Rampe reduziert die erforderliche Kraft, erhöht aber die Entfernung. Hänge sind schiefe Ebenen.",
    r3_fact1: "Rampen, Treppen und Leitern sind schiefe Ebenen",
    r3_q: "Eine schiefe Ebene reduziert...", r3_a: "Die erforderliche Kraft", r3_b: "Die Entfernung", r3_c: "Die Geschwindigkeit", r3_d: "Das Gewicht",
    r4_title: "Mechanischer Vorteil", r4_text: "Mechanischer Vorteil (MA) = Last ÷ Kraft. Höherer MA bedeutet einfacher, schwere Gegenstände zu heben.",
    r4_fact1: "Ein Rollensystem mit MA=3 teilt die erforderliche Kraft durch drei",
    r4_q: "Wenn du 100N Last mit 25N Kraft hebst, ist der mechanische Vorteil...", r4_a: "4", r4_b: "2,5", r4_c: "75", r4_d: "125",
    r5_q1_q: "Welches Werkzeug verwendet einen Hebel?", r5_q1_a: "Brechstange", r5_q1_b: "Hammer", r5_q1_c: "Säge", r5_q1_d: "Bohrmaschine",
    r5_q2_q: "Ein Keil ist eine Art von...", r5_q2_a: "Schiefe Ebene", r5_q2_b: "Rolle", r5_q2_c: "Hebel", r5_q2_d: "Rad",
  },
  hu: {
    r1_title: "Emelők", r1_text: "Az emelő egy merev rúd, amely egy támaszpont körül forog. 1. osztály: támaszpont az erő és terhelés között, mint egy fűrészpad.",
    r1_fact1: "A fűrészpadok, feszítővasak és olló emelőelveket használnak",
    r1_q: "Az emelő támaszpontját miként hívják?", r1_a: "Támaszpont", r1_b: "Forgáspont", r1_c: "Csuklópont", r1_d: "Tengely",
    r2_title: "Csigák", r2_text: "A csiga megváltoztatja az erő irányát. Több csiga csökkenti a nehéz tárgyak emeléséhez szükséges erőt.",
    r2_fact1: "A csigákat építőkranokban és leponyvázban használják",
    r2_q: "Mit csinál a csiga?", r2_a: "Megváltoztatja az erő irányát", r2_b: "Súrlódást hoz létre", r2_c: "Csökkenti a sebességet", r2_d: "Tárgyakat törik",
    r3_title: "Ferde sík", r3_text: "A lejtő csökkenti a szükséges erőt, de növeli a megtett távolságot. A lejtők ferde síkok.",
    r3_fact1: "A rámpák, lépcsők és létrákok ferde síkok",
    r3_q: "A ferde sík csökkenti...", r3_a: "A szükséges erőt", r3_b: "A távolságot", r3_c: "A sebességet", r3_d: "A súlyt",
    r4_title: "Mechanikai előny", r4_text: "Mechanikai előny (MA) = Terhelés ÷ Erő. Magasabb MA könnyebbé teszi a nehéz tárgyak emelését.",
    r4_fact1: "Az MA=3 csigarendszer a szükséges erőt háromra osztja",
    r4_q: "Ha 100N terhelést 25N erővel emelsz, a mechanikai előny...", r4_a: "4", r4_b: "2,5", r4_c: "75", r4_d: "125",
    r5_q1_q: "Melyik eszköz használ emelőt?", r5_q1_a: "Feszítővas", r5_q1_b: "Kalapács", r5_q1_c: "Fűrész", r5_q1_d: "Fúrógép",
    r5_q2_q: "Az ék egy fajta...", r5_q2_a: "Ferde sík", r5_q2_b: "Csiga", r5_q2_c: "Emelő", r5_q2_d: "Kerék",
  },
  ro: {
    r1_title: "Pârghii", r1_text: "O pârghie este o bară rigidă care se rotește pe un punct de sprijin. Clasa 1: punct de sprijin între efort și sarcină, ca o leagănă.",
    r1_fact1: "Leagănele, pârghiile și foarfecele folosesc principii de pârghie",
    r1_q: "Cum se numește punctul de rotire al unei pârghii?", r1_a: "Punct de sprijin", r1_b: "Pivot", r1_c: "Balamală", r1_d: "Ax",
    r2_title: "Scripete", r2_text: "Un scripete schimbă direcția forței. Mai multe scripete reduc efortul necesar pentru a ridica obiecte grele.",
    r2_fact1: "Scripeții sunt folosiți în macarale de construcție și jaluzele",
    r2_q: "Ce face un scripete?", r2_a: "Schimbă direcția forței", r2_b: "Creează frecare", r2_c: "Reduce viteza", r2_d: "Rupe obiecte",
    r3_title: "Plan înclinat", r3_text: "O rampă reduce forța necesară, dar crește distanța parcursă. Pantele sunt planuri înclinate.",
    r3_fact1: "Rampele, scările și scările sunt planuri înclinate",
    r3_q: "Un plan înclinat reduce...", r3_a: "Forța necesară", r3_b: "Distanța", r3_c: "Viteza", r3_d: "Greutatea",
    r4_title: "Avantaj mecanic", r4_text: "Avantaj mecanic (MA) = Sarcină ÷ Efort. MA mai mare înseamnă mai ușor de ridicat obiecte grele.",
    r4_fact1: "Un sistem de scripete cu MA=3 împarte efortul necesar la trei",
    r4_q: "Dacă ridici 100N cu 25N efort, avantajul mecanic este...", r4_a: "4", r4_b: "2,5", r4_c: "75", r4_d: "125",
    r5_q1_q: "Care unealtă folosește o pârghie?", r5_q1_a: "Pârghie de demontare", r5_q1_b: "Ciocan", r5_q1_c: "Ferăstrău", r5_q1_d: "Burghiu",
    r5_q2_q: "Un pană este un fel de...", r5_q2_a: "Plan înclinat", r5_q2_b: "Scripete", r5_q2_c: "Pârghie", r5_q2_d: "Roată",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a2e"/><text x="120" y="90" textAnchor="middle" fontSize="50">⚙️</text></svg>
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

export default function MachinesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
