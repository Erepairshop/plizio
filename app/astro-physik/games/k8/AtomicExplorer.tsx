"use client";
// AtomicExplorer — Atomic Structure & Radioactivity (Atomare Struktur) Grade 8
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Atomic Structure", r1_text: "The nucleus contains protons and neutrons. Electrons orbit around it in electron clouds. The proton number equals the atomic number.",
    r1_fact1: "Protons and neutrons make up almost all atomic mass",
    r1_q: "The nucleus contains...", r1_a: "Protons and neutrons", r1_b: "Only electrons", r1_c: "Only protons", r1_d: "Only neutrons",
    r2_title: "Radioactivity", r2_text: "Unstable nuclei emit radiation to become stable. Alpha (α): 2 protons + 2 neutrons. Beta (β): electron. Gamma (γ): electromagnetic wave.",
    r2_fact1: "Radiation can be detected with a Geiger counter",
    r2_q: "Which radiation is an electromagnetic wave?", r2_a: "Gamma (γ)", r2_b: "Alpha (α)", r2_c: "Beta (β)", r2_d: "All of them",
    r3_title: "Half-Life", r3_text: "Half-life is the time for half of radioactive atoms to decay. Different isotopes have different half-lives: seconds to billions of years.",
    r3_fact1: "Carbon-14 has a half-life of 5,730 years",
    r3_q: "After 2 half-lives, what fraction remains?", r3_a: "1/4 (one quarter)", r3_b: "1/2 (one half)", r3_c: "1/8", r3_d: "None",
    r4_title: "Uses & Dangers", r4_text: "Radioactive isotopes are used in medical imaging, PET scans, and cancer treatment. Radiation damages DNA and can harm cells.",
    r4_fact1: "Radioactive tracers help doctors see diseases early",
    r4_q: "Radioactive tracers are used in...", r4_a: "Medical imaging", r4_b: "Food storage", r4_c: "Water cleaning", r4_d: "Cooking",
    r5_q1_q: "What is the proton number called?", r5_q1_a: "Atomic number", r5_q1_b: "Mass number", r5_q1_c: "Nucleon number", r5_q1_d: "Electron number",
    r5_q2_q: "How many alpha particles are in an alpha emission?", r5_q2_a: "One nucleus (2p + 2n)", r5_q2_b: "Thousands", r5_q2_c: "None", r5_q2_d: "Millions",
  },
  de: {
    r1_title: "Atomare Struktur", r1_text: "Der Kern enthält Protonen und Neutronen. Elektronen kreisen in Elektronenhüllen um ihn. Die Protonenzahl ist gleich der Ordnungszahl.",
    r1_fact1: "Protonen und Neutronen machen fast die ganze Atommasse aus",
    r1_q: "Der Atomkern enthält...", r1_a: "Protonen und Neutronen", r1_b: "Nur Elektronen", r1_c: "Nur Protonen", r1_d: "Nur Neutronen",
    r2_title: "Radioaktivität", r2_text: "Instabile Kerne senden Strahlung aus. Alpha (α): 2 Protonen + 2 Neutronen. Beta (β): Elektron. Gamma (γ): elektromagnetische Welle.",
    r2_fact1: "Strahlung kann mit einem Geigerzähler gemessen werden",
    r2_q: "Welche Strahlung ist eine elektromagnetische Welle?", r2_a: "Gamma (γ)", r2_b: "Alpha (α)", r2_c: "Beta (β)", r2_d: "Alle",
    r3_title: "Halbwertszeit", r3_text: "Die Halbwertszeit ist die Zeit, bis die Hälfte der radioaktiven Atome zerfallen. Unterschiedliche Isotope haben unterschiedliche Halbwertszeiten.",
    r3_fact1: "Kohlenstoff-14 hat eine Halbwertszeit von 5.730 Jahren",
    r3_q: "Nach 2 Halbwertszeiten, welcher Anteil bleibt?", r3_a: "1/4 (ein Viertel)", r3_b: "1/2 (die Hälfte)", r3_c: "1/8", r3_d: "Nichts",
    r4_title: "Anwendungen & Gefahren", r4_text: "Radioaktive Isotope werden in der medizinischen Bildgebung und Krebsbehandlung verwendet. Strahlung beschädigt DNA.",
    r4_fact1: "Radioaktive Tracer helfen Ärzten, Krankheiten früh zu erkennen",
    r4_q: "Radioaktive Tracer werden verwendet in...", r4_a: "Medizinischer Bildgebung", r4_b: "Lebensmittellagerung", r4_c: "Wasserreinigung", r4_d: "Kochen",
    r5_q1_q: "Wie heißt die Protonenzahl?", r5_q1_a: "Ordnungszahl", r5_q1_b: "Massenzahl", r5_q1_c: "Nukleonenzahl", r5_q1_d: "Elektronenzahl",
    r5_q2_q: "Wie viele Alphateilchen sind in einer Alphastrahlung?", r5_q2_a: "Ein Kern (2p + 2n)", r5_q2_b: "Tausende", r5_q2_c: "Keine", r5_q2_d: "Millionen",
  },
  hu: {
    r1_title: "Atomi szerkezet", r1_text: "Az atommag protonokból és neutronokból áll. Az elektronok körülötte keringenek. A protonszám megegyezik az rendszámmal.",
    r1_fact1: "A protonok és neutronok szinte az egész atomi tömegből állnak",
    r1_q: "Az atommag tartalmaz...", r1_a: "Protonokat és neutronokat", r1_b: "Csak elektronokat", r1_c: "Csak protonokat", r1_d: "Csak neutronokat",
    r2_title: "Radioaktivitás", r2_text: "Az instabil magok sugárzást bocsátanak ki. Alfa (α): 2 proton + 2 neutron. Béta (β): elektron. Gamma (γ): elektromágneses hullám.",
    r2_fact1: "A sugárzást Geiger-számlálóval lehet mérni",
    r2_q: "Melyik sugárzás elektromágneses hullám?", r2_a: "Gamma (γ)", r2_b: "Alfa (α)", r2_c: "Béta (β)", r2_d: "Mindegyik",
    r3_title: "Felezési idő", r3_text: "A felezési idő az az idő, amely alatt a radioaktív atomok fele elbomlík. Az izotópoknak különböző felezési idői vannak.",
    r3_fact1: "A 14-es szénnek 5730 év a felezési ideje",
    r3_q: "2 felezési idő után mekkora rész marad?", r3_a: "1/4 (egyquearter)", r3_b: "1/2 (fele)", r3_c: "1/8", r3_d: "Semmi",
    r4_title: "Alkalmazások & Veszélyek", r4_text: "Radioaktív izotópokat az orvosi képalkotásban és rákkezelésben használnak. A sugárzás a DNS-t károsítja.",
    r4_fact1: "A radioaktív nyomjelzők segítik az orvosokat a betegségek korai felismerésében",
    r4_q: "A radioaktív nyomjelzőket használják...", r4_a: "Orvosi képalkotásban", r4_b: "Élelmiszer-tárolásban", r4_c: "Víztisztításban", r4_d: "Főzésben",
    r5_q1_q: "Mi a neve a protonszámnak?", r5_q1_a: "Rendszám", r5_q1_b: "Tömegszám", r5_q1_c: "Nukleonszám", r5_q1_d: "Elektronszám",
    r5_q2_q: "Hány alfareszecskevan az alfa-sugárzásban?", r5_q2_a: "Egy mag (2p + 2n)", r5_q2_b: "Ezrek", r5_q2_c: "Nulla", r5_q2_d: "Milliók",
  },
  ro: {
    r1_title: "Structura atomică", r1_text: "Nucleul conține protoni și neutroni. Electronii orbitează în jurul lui. Numărul de protoni este egal cu numărul atomic.",
    r1_fact1: "Protonii și neutronii formează aproape toată masa atomică",
    r1_q: "Nucleul conține...", r1_a: "Protoni și neutroni", r1_b: "Doar electroni", r1_c: "Doar protoni", r1_d: "Doar neutroni",
    r2_title: "Radioactivitate", r2_text: "Nucleele instabile emit radiații. Alfa (α): 2 protoni + 2 neutroni. Beta (β): electron. Gamma (γ): undă electromagnetică.",
    r2_fact1: "Radiația poate fi detectată cu un contor Geiger",
    r2_q: "Care radiație este o undă electromagnetică?", r2_a: "Gamma (γ)", r2_b: "Alfa (α)", r2_c: "Beta (β)", r2_d: "Toate",
    r3_title: "Timp de înjumătățire", r3_text: "Timpul de înjumătățire este intervalul în care jumătate din atomii radioactivi se descompun. Izotopii diferiti au timpi diferiți.",
    r3_fact1: "Carbonul-14 are un timp de înjumătățire de 5.730 ani",
    r3_q: "După 2 timpi de înjumătățire, ce fracție rămâne?", r3_a: "1/4 (un sfert)", r3_b: "1/2 (jumătate)", r3_c: "1/8", r3_d: "Nimic",
    r4_title: "Aplicații & Pericole", r4_text: "Izotopii radioactivi sunt folosiți în imagistica medicală și tratamentul cancerului. Radiația dăunează ADN-ului.",
    r4_fact1: "Traseii radioactivi ajută medicii să detecteze bolile devreme",
    r4_q: "Traseii radioactivi sunt folosiți în...", r4_a: "Imagistica medicală", r4_b: "Depozitarea alimentelor", r4_c: "Purificarea apei", r4_d: "Gătit",
    r5_q1_q: "Cum se numește numărul de protoni?", r5_q1_a: "Număr atomic", r5_q1_b: "Număr de masă", r5_q1_c: "Număr de nucleoni", r5_q1_d: "Număr de electroni",
    r5_q2_q: "Câte particule alfa sunt într-o emisie alfa?", r5_q2_a: "Un nucleu (2p + 2n)", r5_q2_b: "Mii", r5_q2_c: "Niciuna", r5_q2_d: "Milioane",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2a3e"/><text x="120" y="90" textAnchor="middle" fontSize="50">☢️</text></svg>
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

export default function AtomicExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
