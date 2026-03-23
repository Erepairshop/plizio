"use client";
// MeasurementExplorer — Force Measurement (Kraftmessung) Grade 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Newton Unit", r1_text: "Force is measured in Newtons (N), named after Isaac Newton. 1 Newton is about the weight of a small apple.",
    r1_fact1: "One apple weighs approximately 1 Newton",
    r1_q: "What unit measures force?", r1_a: "Newton (N)", r1_b: "Kilogram", r1_c: "Meter", r1_d: "Liter",
    r2_title: "Spring Scale", r2_text: "A spring scale (Federkraftmesser) stretches when force is applied. More force causes more stretch, showing the strength on a dial.",
    r2_fact1: "The spring stretches more with greater force",
    r2_q: "How does a spring scale measure force?", r2_a: "By how much the spring stretches", r2_b: "By its color", r2_c: "By temperature", r2_d: "By sound",
    r3_title: "Measuring Weight", r3_text: "Your weight in Newtons equals your mass in kilograms times 10. A 50 kg person weighs about 500 Newtons on Earth.",
    r3_fact1: "Weight in N = mass in kg × 10 (on Earth)",
    r3_q: "A 3 kg book weighs approximately...", r3_a: "30 N", r3_b: "3 N", r3_c: "300 N", r3_d: "3000 N",
    r4_title: "Force Diagrams", r4_text: "In force diagrams, arrows represent forces. A longer arrow means a stronger force. The direction of the arrow shows the direction of the force.",
    r4_fact1: "Longer arrows represent stronger forces",
    r4_q: "In a force diagram, a longer arrow means...", r4_a: "A stronger force", r4_b: "A weaker force", r4_c: "No force", r4_d: "Same force",
    r5_q1_q: "What does 1 Newton represent?", r5_q1_a: "Weight of a small apple", r5_q1_b: "Length of a ruler", r5_q1_c: "Temperature", r5_q1_d: "Speed of sound",
    r5_q2_q: "A 2 kg object weighs approximately...", r5_q2_a: "20 N", r5_q2_b: "2 N", r5_q2_c: "200 N", r5_q2_d: "0.2 N",
  },
  de: {
    r1_title: "Newton-Einheit", r1_text: "Kraft wird in Newton (N) gemessen, benannt nach Isaac Newton. 1 Newton ist etwa das Gewicht eines kleinen Apfels.",
    r1_fact1: "Ein Apfel wiegt ungefähr 1 Newton",
    r1_q: "In welcher Einheit wird Kraft gemessen?", r1_a: "Newton (N)", r1_b: "Kilogramm", r1_c: "Meter", r1_d: "Liter",
    r2_title: "Federkraftmesser", r2_text: "Ein Federkraftmesser dehnt sich, wenn Kraft ausgeübt wird. Je mehr Kraft, desto mehr Dehnung – das Messinstrument zeigt die Stärke auf einer Skala.",
    r2_fact1: "Die Feder dehnt sich bei größerer Kraft mehr",
    r2_q: "Wie misst ein Federkraftmesser Kraft?", r2_a: "Durch die Dehnung der Feder", r2_b: "Durch seine Farbe", r2_c: "Durch Temperatur", r2_d: "Durch Sound",
    r3_title: "Gewicht messen", r3_text: "Dein Gewicht in Newton ist gleich deine Masse in Kilogramm mal 10. Eine 50 kg schwere Person wiegt etwa 500 Newton auf der Erde.",
    r3_fact1: "Gewicht in N = Masse in kg × 10 (auf der Erde)",
    r3_q: "Ein 3 kg Buch wiegt ungefähr...", r3_a: "30 N", r3_b: "3 N", r3_c: "300 N", r3_d: "3000 N",
    r4_title: "Kraftdiagramme", r4_text: "In Kraftdiagrammen stellen Pfeile Kräfte dar. Ein längerer Pfeil bedeutet eine stärkere Kraft. Die Pfeilrichtung zeigt die Kraftrichtung an.",
    r4_fact1: "Längere Pfeile stellen stärkere Kräfte dar",
    r4_q: "In einem Kraftdiagramm bedeutet ein längerer Pfeil...", r4_a: "Eine stärkere Kraft", r4_b: "Eine schwächere Kraft", r4_c: "Keine Kraft", r4_d: "Gleiche Kraft",
    r5_q1_q: "Was stellt 1 Newton dar?", r5_q1_a: "Gewicht eines kleinen Apfels", r5_q1_b: "Länge eines Lineals", r5_q1_c: "Temperatur", r5_q1_d: "Schallgeschwindigkeit",
    r5_q2_q: "Ein 2 kg Gegenstand wiegt ungefähr...", r5_q2_a: "20 N", r5_q2_b: "2 N", r5_q2_c: "200 N", r5_q2_d: "0,2 N",
  },
  hu: {
    r1_title: "Newton egység", r1_text: "Az erő Newtonban (N) mérendő, Isaac Newton után elnevezve. 1 Newton körülbelül egy kis alma súlya.",
    r1_fact1: "Egy alma súlya körülbelül 1 Newton",
    r1_q: "Milyen egységben mérjük az erőt?", r1_a: "Newton (N)", r1_b: "Kilogramm", r1_c: "Méter", r1_d: "Liter",
    r2_title: "Rugóskála", r2_text: "A rugóskála (Federkraftmesser) megnyúlik az erő hatására. Nagyobb erő nagyobb megnyúlást okoz, amely a skálán jelenik meg.",
    r2_fact1: "A rugó nagyobb erőnél jobban megnyúlik",
    r2_q: "Hogyan méri a rugóskála az erőt?", r2_a: "A rugó megnyúlásával", r2_b: "A szín alapján", r2_c: "A hőmérséklet alapján", r2_d: "A hang alapján",
    r3_title: "Súly mérése", r3_text: "A súlyod Newtonban = a tömeged kilogrammban × 10. Egy 50 kg-os személy súlya körülbelül 500 Newton a Földön.",
    r3_fact1: "Súly N-ben = tömeg kg-ban × 10 (a Földön)",
    r3_q: "Egy 3 kg-os könyv súlya körülbelül...", r3_a: "30 N", r3_b: "3 N", r3_c: "300 N", r3_d: "3000 N",
    r4_title: "Erődiagramok", r4_text: "Az erődiagramokban a nyilak az erőket jelölik. A hosszabb nyíl erősebb erőt jelent. A nyíl iránya az erő irányát mutatja.",
    r4_fact1: "A hosszabb nyilak erősebb erőket jelölnek",
    r4_q: "Az erődiagramban a hosszabb nyíl azt jelenti...", r4_a: "Erősebb erőt", r4_b: "Gyengébb erőt", r4_c: "Nincs erő", r4_d: "Ugyanaz az erő",
    r5_q1_q: "Mit jelent 1 Newton?", r5_q1_a: "Egy kis alma súlya", r5_q1_b: "Vonalzó hossza", r5_q1_c: "Hőmérséklet", r5_q1_d: "Hangsebesség",
    r5_q2_q: "Egy 2 kg-os tárgy súlya körülbelül...", r5_q2_a: "20 N", r5_q2_b: "2 N", r5_q2_c: "200 N", r5_q2_d: "0,2 N",
  },
  ro: {
    r1_title: "Unitatea Newton", r1_text: "Forța se măsoară în Newton (N), numit după Isaac Newton. 1 Newton este aproximativ greutatea unui măr mic.",
    r1_fact1: "Un măr cântărește aproximativ 1 Newton",
    r1_q: "În ce unitate se măsoară forța?", r1_a: "Newton (N)", r1_b: "Kilogram", r1_c: "Metru", r1_d: "Litru",
    r2_title: "Cântar cu arc", r2_text: "Un cântar cu arc se întinde atunci când se aplică o forță. Forța mai mare cauzează o întindere mai mare, arătând puterea pe o scală.",
    r2_fact1: "Arcul se întinde mai mult cu o forță mai mare",
    r2_q: "Cum măsoară cântarul cu arc forța?", r2_a: "Prin cât se întinde arcul", r2_b: "După culoare", r2_c: "Prin temperatură", r2_d: "Prin sunet",
    r3_title: "Măsurarea greutății", r3_text: "Greutatea ta în Newton = masa ta în kilograme × 10. O persoană de 50 kg cântărește aproximativ 500 Newton pe Pământ.",
    r3_fact1: "Greutate în N = masă în kg × 10 (pe Pământ)",
    r3_q: "O carte de 3 kg cântărește aproximativ...", r3_a: "30 N", r3_b: "3 N", r3_c: "300 N", r3_d: "3000 N",
    r4_title: "Diagrame de forță", r4_text: "În diagramele de forță, săgeții reprezintă forțele. O săgeată mai lungă înseamnă o forță mai puternică. Direcția săgeții arată direcția forței.",
    r4_fact1: "Săgeții mai lungi reprezintă forțe mai puternice",
    r4_q: "În diagrama de forță, o săgeată mai lungă înseamnă...", r4_a: "O forță mai puternică", r4_b: "O forță mai slabă", r4_c: "Nicio forță", r4_d: "Aceeași forță",
    r5_q1_q: "Ce reprezintă 1 Newton?", r5_q1_a: "Greutatea unui măr mic", r5_q1_b: "Lungimea unei rigle", r5_q1_c: "Temperatură", r5_q1_d: "Viteza sunetului",
    r5_q2_q: "Un obiect de 2 kg cântărește aproximativ...", r5_q2_a: "20 N", r5_q2_b: "2 N", r5_q2_c: "200 N", r5_q2_d: "0,2 N",
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

export default function MeasurementExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
