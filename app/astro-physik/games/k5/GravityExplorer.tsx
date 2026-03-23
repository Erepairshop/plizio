"use client";
// GravityExplorer — Gravity & Weight (Schwerkraft) Klasse 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Gravity", r1_text: "Earth pulls everything toward its center. Gravity gives objects their weight.",
    r1_fact1: "Gravity is the force that makes things fall down",
    r1_q: "What causes objects to fall?", r1_a: "Gravity", r1_b: "Wind", r1_c: "Magnetism", r1_d: "Light",
    r2_title: "Weight vs Mass", r2_text: "Mass is the amount of matter in an object. Weight is the force of gravity pulling on that mass. On the Moon, mass stays the same, but weight changes.",
    r2_fact1: "Your mass is the same on Earth and the Moon, but you weigh less on the Moon",
    r2_q: "On the Moon, your mass...", r2_a: "Stays the same", r2_b: "Doubles", r2_c: "Disappears", r2_d: "Halves",
    r3_title: "Air Resistance", r3_text: "Air pushes against moving objects. Parachutes use air resistance to slow down. Objects with more surface area experience more air resistance.",
    r3_fact1: "Parachutes have a large surface area to create lots of air resistance",
    r3_q: "Why does a parachute slow you down?", r3_a: "Air resistance", r3_b: "Gravity increases", r3_c: "You become lighter", r3_d: "Wind pushes up",
    r4_title: "Free Fall", r4_text: "Without air, all objects fall at the same speed no matter their weight. A feather and a hammer fall equally fast in a vacuum.",
    r4_fact1: "In space with no air, a feather and a rock fall at the same speed",
    r4_q: "In a vacuum, which falls faster?", r4_a: "They fall at the same speed", r4_b: "A rock", r4_c: "A feather", r4_d: "Neither falls",
    r5_q1_q: "What is the difference between mass and weight?", r5_q1_a: "Mass is matter, weight is gravity's pull", r5_q1_b: "Mass is weight on the Moon", r5_q1_c: "Weight never changes", r5_q1_d: "They are the same thing",
    r5_q2_q: "How does air resistance help objects?", r5_q2_a: "It slows down falling objects", r5_q2_b: "It makes them heavier", r5_q2_c: "It creates gravity", r5_q2_d: "It pushes them up",
  },
  de: {
    r1_title: "Schwerkraft", r1_text: "Die Erde zieht alles zu ihrem Mittelpunkt hin. Die Schwerkraft gibt Objekten ihr Gewicht.",
    r1_fact1: "Schwerkraft ist die Kraft, die Dinge nach unten fallen lässt",
    r1_q: "Was lässt Objekte fallen?", r1_a: "Schwerkraft", r1_b: "Wind", r1_c: "Magnetismus", r1_d: "Licht",
    r2_title: "Gewicht gegen Masse", r2_text: "Masse ist die Menge an Materie in einem Objekt. Gewicht ist die Kraft der Schwerkraft auf diese Masse. Auf dem Mond bleibt die Masse gleich, aber das Gewicht ändert sich.",
    r2_fact1: "Deine Masse ist auf der Erde und auf dem Mond gleich, aber du wiegst weniger auf dem Mond",
    r2_q: "Auf dem Mond bleibt deine Masse...", r2_a: "Gleich", r2_b: "Doppelt", r2_c: "Verschwindet", r2_d: "Halb",
    r3_title: "Luftwiderstand", r3_text: "Luft drückt gegen bewegte Objekte. Fallschirme nutzen Luftwiderstand, um zu verlangsamen. Objekte mit größerer Fläche erleben mehr Luftwiderstand.",
    r3_fact1: "Fallschirme haben eine große Fläche, um viel Luftwiderstand zu erzeugen",
    r3_q: "Warum verlangsamt dich ein Fallschirm?", r3_a: "Luftwiderstand", r3_b: "Schwerkraft nimmt zu", r3_c: "Du wirst leichter", r3_d: "Wind drückt dich hoch",
    r4_title: "Freier Fall", r4_text: "Ohne Luft fallen alle Objekte mit der gleichen Geschwindigkeit, egal wie schwer sie sind. Eine Feder und ein Hammer fallen im Vakuum gleich schnell.",
    r4_fact1: "Im Weltall ohne Luft fallen eine Feder und ein Stein mit der gleichen Geschwindigkeit",
    r4_q: "Was fällt im Vakuum schneller?", r4_a: "Sie fallen gleich schnell", r4_b: "Ein Stein", r4_c: "Eine Feder", r4_d: "Nichts fällt",
    r5_q1_q: "Was ist der Unterschied zwischen Masse und Gewicht?", r5_q1_a: "Masse ist Materie, Gewicht ist Schwerkraftzug", r5_q1_b: "Masse ist Gewicht auf dem Mond", r5_q1_c: "Gewicht ändert sich nie", r5_q1_d: "Sie sind das Gleiche",
    r5_q2_q: "Wie hilft Luftwiderstand Objekten?", r5_q2_a: "Er verlangsamt fallende Objekte", r5_q2_b: "Er macht sie schwerer", r5_q2_c: "Er erzeugt Schwerkraft", r5_q2_d: "Er drückt sie hoch",
  },
  hu: {
    r1_title: "Gravitáció", r1_text: "A Föld minden tárgyat a középpontja felé húz. A gravitáció teszi olyan nehézzé az objektumokat.",
    r1_fact1: "A gravitáció az az erő, amely a dolgokat lefelé ejti",
    r1_q: "Mi okozza az objektumok esését?", r1_a: "Gravitáció", r1_b: "Szél", r1_c: "Mágnesség", r1_d: "Fény",
    r2_title: "Súly és tömeg", r2_text: "A tömeg az anyag mennyisége egy tárgyban. A súly a gravitációs erő hatása a tömegre. A Holdon a tömeg ugyanaz marad, de a súly megváltozik.",
    r2_fact1: "A tömeged a Földön és a Holdon ugyanaz, de a Holdon kevesebbet súlyozol",
    r2_q: "A Holdon a tömeged...", r2_a: "Megmarad", r2_b: "Megduplázódik", r2_c: "Eltűnik", r2_d: "Feleződik",
    r3_title: "Légellenállás", r3_text: "A levegő nyomást gyakorol a mozgó tárgyakra. Az ejtőernyők a légellenállást használják a lassuláshoz. A nagyobb felületű objektumok nagyobb légellenállást tapasztalnak.",
    r3_fact1: "Az ejtőernyőknek nagy felületük van, hogy sok légellenállást hozzanak létre",
    r3_q: "Miért lassít az ejtőernyő?", r3_a: "Légellenállás", r3_b: "A gravitáció nő", r3_c: "Könnyebbé válsz", r3_d: "A szél felfelé tol",
    r4_title: "Szabad esés", r4_text: "Levegő nélkül az összes objektum ugyanazzal a sebességgel esik, függetlenül a súlyuktól. A toll és a kalapács vákuumban egyforma gyorsan esik.",
    r4_fact1: "Az űrben, levegő nélkül, a toll és a kő ugyanazzal a sebességgel esik",
    r4_q: "Melyik esik gyorsabban a vákuumban?", r4_a: "Egyforma sebességgel esik", r4_b: "Egy kő", r4_c: "Egy toll", r4_d: "Semmi nem esik",
    r5_q1_q: "Mi a különbség a tömeg és a súly között?", r5_q1_a: "A tömeg anyag, a súly a gravitáció húzása", r5_q1_b: "A tömeg a súly a Holdon", r5_q1_c: "A súly soha nem változik", r5_q1_d: "Ugyanazok",
    r5_q2_q: "Hogyan segít a légellenállás az objektumoknak?", r5_q2_a: "Lelassítja az esést", r5_q2_b: "Nehézebbé teszi", r5_q2_c: "Gravitációt hoz létre", r5_q2_d: "Felfelé tol",
  },
  ro: {
    r1_title: "Gravitație", r1_text: "Pământul trage totul către centrul său. Gravitația face ca obiectele să fie grele.",
    r1_fact1: "Gravitația este forța care face ca lucrurile să cadă",
    r1_q: "Ce determină căderea obiectelor?", r1_a: "Gravitație", r1_b: "Vânt", r1_c: "Magnetism", r1_d: "Lumină",
    r2_title: "Greutate vs Masă", r2_text: "Masa este cantitatea de materie dintr-un obiect. Greutatea este forța gravitației pe acea masă. Pe Lună, masa rămâne aceeași, dar greutatea se schimbă.",
    r2_fact1: "Masa ta este aceeași pe Pământ și pe Lună, dar cântărești mai puțin pe Lună",
    r2_q: "Pe Lună, masa ta...", r2_a: "Rămâne aceeași", r2_b: "Se dublează", r2_c: "Dispare", r2_d: "Se înjumătățește",
    r3_title: "Rezistența aerului", r3_text: "Aerul apasă asupra obiectelor în mișcare. Parașutele folosesc rezistența aerului pentru a încetini. Obiectele cu o suprafață mai mare experimentează mai multă rezistență a aerului.",
    r3_fact1: "Parașutele au o suprafață mare pentru a crea multă rezistență a aerului",
    r3_q: "De ce te încetinește un parașut?", r3_a: "Rezistența aerului", r3_b: "Gravitația crește", r3_c: "Devenești mai ușor", r3_d: "Vântul te împinge în sus",
    r4_title: "Cădere liberă", r4_text: "Fără aer, toate obiectele cad cu aceeași viteză, indiferent de greutate. O pană și un ciocan cad la fel de repede în vid.",
    r4_fact1: "În spațiu fără aer, o pană și o piatră cad cu aceeași viteză",
    r4_q: "Ce cade mai repede în vid?", r4_a: "Cad cu aceeași viteză", r4_b: "O piatră", r4_c: "O pană", r4_d: "Nimic nu cade",
    r5_q1_q: "Care este diferența dintre masă și greutate?", r5_q1_a: "Masa este materie, greutatea este tragerea gravitației", r5_q1_b: "Masa este greutate pe Lună", r5_q1_c: "Greutatea nu se schimbă niciodată", r5_q1_d: "Sunt același lucru",
    r5_q2_q: "Cum ajută rezistența aerului obiectele?", r5_q2_a: "Încetinește obiectele care cad", r5_q2_b: "Le face mai grele", r5_q2_c: "Creează gravitație", r5_q2_d: "Le împinge în sus",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#0a3d5c"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌍</text></svg>
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

export default function GravityExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
