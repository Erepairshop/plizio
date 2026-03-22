"use client";
// GrandReviewK2Explorer — Grand Review of all Grade 2 topics (Island 9 finale)
// R1-R4: each has info + 1 review question from mixed topics, R5: 2 more review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Health Review", r1_text: "Let's review what we learned about staying healthy: eating well, hygiene, sleep, and exercise.",
    r1_fact1: "A healthy lifestyle keeps us strong and happy",
    r1_q: "How many hours of sleep do kids need?", r1_a: "8-10 hours", r1_b: "3 hours", r1_c: "16 hours", r1_d: "No sleep needed",
    r2_title: "Nature Review", r2_text: "Recall what we learned: plants have parts, water cycles, animals have habitats, and nature helps us all.",
    r2_fact1: "Every living thing needs air, food, and water",
    r2_q: "What do plant roots do?", r2_a: "Drink water from soil", r2_b: "Make flowers", r2_c: "Catch sunlight", r2_d: "Create wind",
    r3_title: "Community Review", r3_text: "People in jobs help our community. Jobs like doctors, teachers, farmers, and police keep us safe and healthy.",
    r3_fact1: "Everyone's job is important for our town",
    r3_q: "Who teaches children in school?", r3_a: "Teacher", r3_b: "Doctor", r3_c: "Farmer", r3_d: "Firefighter",
    r4_title: "Safety & Science Review", r4_text: "We learned about staying safe from fire, strangers, and accidents. Science shows us magnets, water, and matter.",
    r4_fact1: "Learning science helps us understand the world",
    r4_q: "What will float in water?", r4_a: "A cork", r4_b: "A rock", r4_c: "A nail", r4_d: "A coin",
    r5_q1_q: "Which is a liquid?", r5_q1_a: "Water", r5_q1_b: "Ice", r5_q1_c: "Wood", r5_q1_d: "Steel",
    r5_q2_q: "What number do you call in an emergency?", r5_q2_a: "911", r5_q2_b: "123", r5_q2_c: "000", r5_q2_d: "777",
  },
  de: {
    r1_title: "Gesundheit Zusammenfassung", r1_text: "Lassen Sie uns überprüfen, was wir über die Gesundheit gelernt haben: gut essen, Hygiene, Schlaf und Bewegung.",
    r1_fact1: "Ein gesunder Lebensstil hält uns stark und glücklich",
    r1_q: "Wie viele Stunden Schlaf brauchen Kinder?", r1_a: "8-10 Stunden", r1_b: "3 Stunden", r1_c: "16 Stunden", r1_d: "Kein Schlaf nötig",
    r2_title: "Natur Zusammenfassung", r2_text: "Erinnern Sie sich: Pflanzen haben Teile, Wasser kreist, Tiere haben Lebensräume, und die Natur hilft uns allen.",
    r2_fact1: "Jedes Lebewesen braucht Luft, Nahrung und Wasser",
    r2_q: "Was machen Pflanzenwurzeln?", r2_a: "Wasser aus Erde trinken", r2_b: "Blüten machen", r2_c: "Sonne fangen", r2_d: "Wind schaffen",
    r3_title: "Gemeinschaft Zusammenfassung", r3_text: "Menschen in Berufen helfen unserer Gemeinschaft. Ärzte, Lehrer, Bauern und Polizei halten uns sicher und gesund.",
    r3_fact1: "Jeder Beruf ist wichtig für unsere Stadt",
    r3_q: "Wer unterrichtet Kinder in der Schule?", r3_a: "Lehrer", r3_b: "Arzt", r3_c: "Bauer", r3_d: "Feuerwehrmann",
    r4_title: "Sicherheit und Wissenschaft Zusammenfassung", r4_text: "Wir lernten, uns vor Feuer, Fremden und Unfällen zu schützen. Wissenschaft zeigt Magnete, Wasser und Materie.",
    r4_fact1: "Wissenschaft zu lernen hilft uns die Welt zu verstehen",
    r4_q: "Was wird in Wasser schwimmen?", r4_a: "Ein Kork", r4_b: "Ein Stein", r4_c: "Ein Nagel", r4_d: "Eine Münze",
    r5_q1_q: "Welches ist ein Flüssigkeit?", r5_q1_a: "Wasser", r5_q1_b: "Eis", r5_q1_c: "Holz", r5_q1_d: "Stahl",
    r5_q2_q: "Welche Nummer rufst du im Notfall an?", r5_q2_a: "112", r5_q2_b: "123", r5_q2_c: "000", r5_q2_d: "777",
  },
  hu: {
    r1_title: "Egészség Áttekintés", r1_text: "Foglaljuk össze, mit tanultunk az egészségről: jó étkezés, higiénia, alvás és testmozgás.",
    r1_fact1: "Az egészséges életmód erősen és boldogan tart bennünket",
    r1_q: "Hány óra alvásra van szüksége a gyermekeknek?", r1_a: "8-10 óra", r1_b: "3 óra", r1_c: "16 óra", r1_d: "Nincs alvásra szükség",
    r2_title: "Természet Áttekintés", r2_text: "Emlékezzünk: a növényeknek részei vannak, a vízkörkör, az állatok élőhelyei, és a természet segít nekünk.",
    r2_fact1: "Minden élő dolog levegőre, táplálékra és vízre van szükség",
    r2_q: "Mit csinálnak a növényi gyökerek?", r2_a: "Vizet isznak a talajból", r2_b: "Virágokat csinálnak", r2_c: "Napfényt fognak", r2_d: "Szelet csinálnak",
    r3_title: "Közösség Áttekintés", r3_text: "Az emberek munkájában segítünk közösségünknek. Az orvosok, tanárok, farmerek és rendőrök biztonságban és egészségesek maradnak.",
    r3_fact1: "Minden munka fontos a városunka számára",
    r3_q: "Ki tanít gyerekeket az iskolában?", r3_a: "Tanár", r3_b: "Orvos", r3_c: "Farmer", r3_d: "Tűzoltó",
    r4_title: "Biztonság és Tudomány Áttekintés", r4_text: "Megtanultunk megvédni magunkat tűztől, idegenektől és balesetektől. A tudomány mutatja a mágneseket, vizet és anyagot.",
    r4_fact1: "A tudomány tanulása segít megérteni a világot",
    r4_q: "Mi fog úszni a vízben?", r4_a: "Egy dugó", r4_b: "Egy kő", r4_c: "Egy szög", r4_d: "Egy érme",
    r5_q1_q: "Melyik egy folyadék?", r5_q1_a: "Víz", r5_q1_b: "Jég", r5_q1_c: "Fa", r5_q1_d: "Acél",
    r5_q2_q: "Melyik számot hívsz vészhelyzetben?", r5_q2_a: "112", r5_q2_b: "123", r5_q2_c: "000", r5_q2_d: "777",
  },
  ro: {
    r1_title: "Revizuirea Sănătății", r1_text: "Să trecem în revistă ce am învățat despre sănătate: mâncare bună, igienă, somn și exercițiu.",
    r1_fact1: "Un stil de viață sănătos ne ține puternici și fericiți",
    r1_q: "Câte ore de somn au nevoie copiii?", r1_a: "8-10 ore", r1_b: "3 ore", r1_c: "16 ore", r1_d: "Fără somn necesar",
    r2_title: "Revizuirea Naturii", r2_text: "Reamintire: plantele au părți, apa se ciclează, animalele au habitate, și natura ne ajută pe toți.",
    r2_fact1: "Fiecare lucru viu are nevoie de aer, mâncare și apă",
    r2_q: "Ce fac rădăcinile plantelor?", r2_a: "Beau apă din pământ", r2_b: "Fac flori", r2_c: "Capturează lumina soarelui", r2_d: "Creează vânt",
    r3_title: "Revizuirea Comunității", r3_text: "Oamenii din locuri de muncă ajută comunitatea noastră. Doctori, profesori, fermierii și poliție ne ține în siguranță și sănătoși.",
    r3_fact1: "Fiecare job este important pentru orașul nostru",
    r3_q: "Cine predă copiilor la școală?", r3_a: "Profesor", r3_b: "Doctor", r3_c: "Fermier", r3_d: "Pompier",
    r4_title: "Revizuirea Siguranței și Științei", r4_text: "Am învățat cum să ne protejăm de incendiu, străini și accidente. Știința ne arată magneți, apă și materie.",
    r4_fact1: "Învățarea științei ne ajută să înțelegem lumea",
    r4_q: "Ce va plutii în apă?", r4_a: "O plută", r4_b: "O piatră", r4_c: "Un cui", r4_d: "O monedă",
    r5_q1_q: "Care este un lichid?", r5_q1_a: "Apă", r5_q1_b: "Gheață", r5_q1_c: "Lemn", r5_q1_d: "Oțel",
    r5_q2_q: "Ce număr suni în urgență?", r5_q2_a: "112", r5_q2_b: "123", r5_q2_c: "000", r5_q2_d: "777",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#ffd700"/><text x="120" y="90" textAnchor="middle" fontSize="50">🌟</text></svg>
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

export default function GrandReviewK2Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
