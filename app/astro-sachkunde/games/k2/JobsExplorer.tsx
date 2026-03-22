"use client";
// JobsExplorer — Jobs & Community Helpers (Verschiedene Berufe) Grade 2
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Helping Jobs", r1_text: "Many people have jobs that help our community. Doctors, teachers, and firefighters help us stay safe.",
    r1_fact1: "Doctors help sick people get better",
    r1_q: "Who helps us learn at school?", r1_a: "Teacher", r1_b: "Police officer", r1_c: "Chef", r1_d: "Farmer",
    r2_title: "Keeping Us Safe", r2_text: "Police officers and firefighters protect our communities. Crossing guards help children cross safely.",
    r2_fact1: "Firefighters put out fires and rescue people",
    r2_q: "Who puts out fires?", r2_a: "Firefighter", r2_b: "Teacher", r2_c: "Doctor", r2_d: "Baker",
    r3_title: "Food & Shelter Jobs", r3_text: "Farmers grow food. Bakers make bread. Builders make houses. Everyone has important jobs.",
    r3_fact1: "Farmers work hard to grow vegetables and fruits",
    r3_q: "Who makes bread for us?", r3_a: "Baker", r3_b: "Farmer", r3_c: "Teacher", r3_d: "Nurse",
    r4_title: "Medical Helpers", r4_text: "Doctors and nurses help keep us healthy. Dentists check our teeth. All jobs are important for our town.",
    r4_fact1: "Nurses help doctors care for sick and hurt people",
    r4_q: "Who checks your teeth?", r4_a: "Dentist", r4_b: "Teacher", r4_c: "Doctor", r4_d: "Baker",
    r5_q1_q: "What job helps people when they are sick?", r5_q1_a: "Doctor", r5_q1_b: "Teacher", r5_q1_c: "Farmer", r5_q1_d: "Baker",
    r5_q2_q: "Who grows food on a farm?", r5_q2_a: "Farmer", r5_q2_b: "Chef", r5_q2_c: "Baker", r5_q2_d: "Gardener",
  },
  de: {
    r1_title: "Hilfsbrushe", r1_text: "Viele Menschen haben Berufe, die unsere Gemeinschaft helfen. Ärzte, Lehrer und Feuerwehrleute helfen uns sicher zu bleiben.",
    r1_fact1: "Ärzte helfen kranken Menschen, besser zu werden",
    r1_q: "Wer hilft uns in der Schule zu lernen?", r1_a: "Lehrer", r1_b: "Polizist", r1_c: "Koch", r1_d: "Bauer",
    r2_title: "Uns Sicherheit halten", r2_text: "Polizisten und Feuerwehrleute schützen unsere Gemeinden. Verkehrshelfer helfen Kindern sicher zu überqueren.",
    r2_fact1: "Feuerwehrleute löschen Brände und retten Menschen",
    r2_q: "Wer löscht Brände?", r2_a: "Feuerwehrmann", r2_b: "Lehrer", r2_c: "Arzt", r2_d: "Bäcker",
    r3_title: "Essen und Wohnung Berufe", r3_text: "Bauern bauen Essen an. Bäcker machen Brot. Baumeister bauen Häuser. Jeder Job ist wichtig.",
    r3_fact1: "Bauern arbeiten hart, um Gemüse und Obst anzubauen",
    r3_q: "Wer macht Brot für uns?", r3_a: "Bäcker", r3_b: "Bauer", r3_c: "Lehrer", r3_d: "Krankenschwester",
    r4_title: "Medizinische Helfer", r4_text: "Ärzte und Krankenschwestern helfen uns gesund zu bleiben. Zahnärzte überprüfen unsere Zähne.",
    r4_fact1: "Krankenschwestern helfen Ärzten, kranke und verletzte Menschen zu pflegen",
    r4_q: "Wer überprüft deine Zähne?", r4_a: "Zahnarzt", r4_b: "Lehrer", r4_c: "Arzt", r4_d: "Bäcker",
    r5_q1_q: "Welcher Job hilft Menschen, wenn sie krank sind?", r5_q1_a: "Arzt", r5_q1_b: "Lehrer", r5_q1_c: "Bauer", r5_q1_d: "Bäcker",
    r5_q2_q: "Wer wächst Essen auf einem Bauernhof?", r5_q2_a: "Bauer", r5_q2_b: "Koch", r5_q2_c: "Bäcker", r5_q2_d: "Gärtner",
  },
  hu: {
    r1_title: "Segítő foglalkozások", r1_text: "Sok embernek van olyan állása, amely segít közösségünknek. Az orvosok, tanárok és tűzoltók segítenek minket biztonságosan tartani.",
    r1_fact1: "Az orvosok segítenek a beteg embereknek jobban lenni",
    r1_q: "Ki segít nekünk az iskolában tanulni?", r1_a: "Tanár", r1_b: "Rendőr", r1_c: "Szakács", r1_d: "Farmer",
    r2_title: "Biztonságunk megtartása", r2_text: "A rendőrök és tűzoltók megvédelik közösségünket. Az útbiztosok segítenek a gyermekeknek biztonságosan átkelni.",
    r2_fact1: "A tűzoltók megsemmisítik a tüzeket és kimentenek embereket",
    r2_q: "Ki olt meg tüzeket?", r2_a: "Tűzoltó", r2_b: "Tanár", r2_c: "Orvos", r2_d: "Pék",
    r3_title: "Élelmiszer és szállás foglalkozások", r3_text: "A farmerek élelmiszereket termesztenek. A pékek kenyeret készítenek. Az építők házakat építenek. Minden munka fontos.",
    r3_fact1: "A farmerek keményen dolgoznak a zöldségek és gyümölcsök termesztéséért",
    r3_q: "Ki készít kenyeret nekünk?", r3_a: "Pék", r3_b: "Farmer", r3_c: "Tanár", r3_d: "Ápolónő",
    r4_title: "Orvosi segítők", r4_text: "Az orvosok és ápolónők segítenek egészségesnek maradni. A fogorvosok ellenőrzik a fogainkat.",
    r4_fact1: "Az ápolók segítenek az orvosoknak gondozni a beteg és sérült embereket",
    r4_q: "Ki ellenőrzi a fogaidat?", r4_a: "Fogorvos", r4_b: "Tanár", r4_c: "Orvos", r4_d: "Pék",
    r5_q1_q: "Melyik munka segít az embereknek, amikor betegek?", r5_q1_a: "Orvos", r5_q1_b: "Tanár", r5_q1_c: "Farmer", r5_q1_d: "Pék",
    r5_q2_q: "Ki termeszt élelmiszert egy farmon?", r5_q2_a: "Farmer", r5_q2_b: "Szakács", r5_q2_c: "Pék", r5_q2_d: "Kertész",
  },
  ro: {
    r1_title: "Meserii ajutoare", r1_text: "Mulți oameni au locuri de muncă care ajută comunitatea noastră. Doctorii, profesorii și pompierii ne ajută să rămânem în siguranță.",
    r1_fact1: "Doctorii ajută oamenii bolnavi să se vindece",
    r1_q: "Cine ne ajută să învățăm la școală?", r1_a: "Profesor", r1_b: "Polițist", r1_c: "Bucătar", r1_d: "Fermier",
    r2_title: "Pastrandu-ne in siguranta", r2_text: "Polițiștii și pompierii protejează comunitatea noastră. Paznicii de trafic ajută copiii să traverseze în siguranță.",
    r2_fact1: "Pompierii stingau incendiile și salvează oamenii",
    r2_q: "Cine stinge incendiile?", r2_a: "Pompier", r2_b: "Profesor", r2_c: "Doctor", r2_d: "Brutar",
    r3_title: "Mese si adapost meserii", r3_text: "Fermierii cultivă mâncare. Brutarii fac pâine. Constructorii fac case. Fiecare meserie este importantă.",
    r3_fact1: "Fermierii lucrează din greu pentru a cultiva legume și fructe",
    r3_q: "Cine ne face pâinea?", r3_a: "Brutar", r3_b: "Fermier", r3_c: "Profesor", r3_d: "Asistentă",
    r4_title: "Asistenți medicali", r4_text: "Doctorii și asistentele ne ajută să rămânem sănătoși. Dentistul verifică dinții noștri.",
    r4_fact1: "Asistentele ajută doctorii să îngrijească oamenii bolnavi și răniți",
    r4_q: "Cine-ți verifică dinții?", r4_a: "Dentist", r4_b: "Profesor", r4_c: "Doctor", r4_d: "Brutar",
    r5_q1_q: "Ce meserie ajută oamenii când sunt bolnavi?", r5_q1_a: "Doctor", r5_q1_b: "Profesor", r5_q1_c: "Fermier", r5_q1_d: "Brutar",
    r5_q2_q: "Cine cultivă mâncare pe o fermă?", r5_q2_a: "Fermier", r5_q2_b: "Bucătar", r5_q2_c: "Brutar", r5_q2_d: "Grădinar",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#c62828"/><text x="120" y="90" textAnchor="middle" fontSize="50">👨‍⚕️</text></svg>
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

export default function JobsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
