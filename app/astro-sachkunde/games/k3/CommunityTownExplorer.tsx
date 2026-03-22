"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Villages & Towns", tx1: "Villages are small. Towns are larger with more people.",
    t2: "Community Services", tx2: "Police, doctors, and teachers help our community.",
    t3: "Local Government", tx3: "Mayors and councils make decisions for our community.",
    t4: "Community Jobs", tx4: "Farmers, builders, and shopkeepers help our town.",
    t5: "Rules & Safety", tx5: "Rules keep us safe and help communities work together.",
    q1: "What is a village?", q1a: "Small community", q1b: "Large city", q1c: "A forest", q1d: "A mountain",
    q2: "Who helps sick people?", q2a: "Doctor", q2b: "Teacher", q2c: "Farmer", q2d: "Builder",
    q3: "What does a teacher do?", q3a: "Teach children", q3b: "Sell food", q3c: "Fix cars", q3d: "Build houses",
    q4: "Who helps make community decisions?", q4a: "Mayor and council", q4b: "Farmers", q4c: "Shopkeepers", q4d: "Children",
    q5: "Why do we have rules?", q5a: "To keep us safe", q5b: "To make things hard", q5c: "To stop fun", q5d: "To make noise",
  },
  de: {
    t1: "Dörfer & Städte", tx1: "Dörfer sind klein. Städte sind größer mit mehr Menschen.",
    t2: "Gemeinschaftsdienste", tx2: "Polizei, Ärzte und Lehrer helfen unserer Gemeinde.",
    t3: "Lokale Regierung", tx3: "Bürgermeister und Räte treffen Entscheidungen für unsere Gemeinde.",
    t4: "Gemeinschaftsberufe", tx4: "Bauern, Bauarbeiter und Ladenbesitzer helfen unserer Stadt.",
    t5: "Regeln & Sicherheit", tx5: "Regeln halten uns sicher und helfen Gemeinden zusammenzuarbeiten.",
    q1: "Was ist ein Dorf?", q1a: "Kleine Gemeinde", q1b: "Große Stadt", q1c: "Ein Wald", q1d: "Ein Berg",
    q2: "Wer hilft kranken Menschen?", q2a: "Arzt", q2b: "Lehrer", q2c: "Bauer", q2d: "Bauarbeiter",
    q3: "Was macht ein Lehrer?", q3a: "Unterrichtet Kinder", q3b: "Verkauft Essen", q3c: "Repariert Autos", q3d: "Baut Häuser",
    q4: "Wer hilft, Entscheidungen zu treffen?", q4a: "Bürgermeister und Rat", q4b: "Bauern", q4c: "Ladenbesitzer", q4d: "Kinder",
    q5: "Warum haben wir Regeln?", q5a: "Um uns sicher zu halten", q5b: "Um Dinge schwer zu machen", q5c: "Um Spaß zu stoppen", q5d: "Um Lärm zu machen",
  },
  hu: {
    t1: "Községek és városok", tx1: "A községek kicsik. A városok nagyobbak több emberrel.",
    t2: "Közösségi szolgáltatások", tx2: "A rendőrség, orvosok és tanárok segítik a közösséget.",
    t3: "Helyi kormányzat", tx3: "A polgármester és tanács döntéseket hoznak a közösségről.",
    t4: "Közösségi munkák", tx4: "Mezőgazdászok, építők és üzletesek segítik a város.",
    t5: "Szabályok és biztonság", tx5: "A szabályok biztonsággal tartanak és a közösségek együttműködést segítenek.",
    q1: "Mi az a község?", q1a: "Kis közösség", q1b: "Nagy város", q1c: "Egy erdő", q1d: "Egy hegy",
    q2: "Ki segít a beteg embereknek?", q2a: "Orvos", q2b: "Tanár", q2c: "Mezőgazdász", q2d: "Építő",
    q3: "Mit csinál egy tanár?", q3a: "Tanít gyerekeket", q3b: "Eladja az ételt", q3c: "Autókat javít", q3d: "Házakat épít",
    q4: "Ki segít közösségi döntésekben?", q4a: "Polgármester és tanács", q4b: "Mezőgazdászok", q4c: "Üzletesek", q4d: "Gyerekek",
    q5: "Miért vannak szabályok?", q5a: "A biztonság tartásához", q5b: "Dolgok nehézzé tételéhez", q5c: "Szórakozás megállításához", q5d: "Zaj készítéséhez",
  },
  ro: {
    t1: "Sate și orașe", tx1: "Satele sunt mici. Orașele sunt mai mari cu mai mulți oameni.",
    t2: "Servicii comunale", tx2: "Poliția, medicii și profesorii ajută comunitatea noastră.",
    t3: "Guvern local", tx3: "Primarii și consiliile iau decizii pentru comunitatea noastră.",
    t4: "Locuri de muncă în comunitate", tx4: "Fermieri, constructori și negustori ajută orașul.",
    t5: "Reguli și siguranță", tx5: "Regulile ne păstrează în siguranță și ajută comunităților să lucreze împreună.",
    q1: "Ce este un sat?", q1a: "Comunitate mică", q1b: "Oraș mare", q1c: "O pădure", q1d: "Un munte",
    q2: "Cine ajută oamenii bolnavi?", q2a: "Doctor", q2b: "Profesor", q2c: "Fermier", q2d: "Constructor",
    q3: "Ce face un profesor?", q3a: "Învață copii", q3b: "Vinde mâncare", q3c: "Repară mașini", q3d: "Construiește case",
    q4: "Cine ajută la luarea deciziilor?", q4a: "Primar și consiliu", q4b: "Fermieri", q4c: "Negustori", q4d: "Copii",
    q5: "De ce avem reguli?", q5a: "Pentru a ne păstra în siguranță", q5b: "Pentru a face lucruri dificile", q5c: "Pentru a opri divertismentul", q5d: "Pentru a face zgomot",
  },
};

function CommunitySvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#2e1a2e" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#BB8FCE">🏘️</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <CommunitySvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <CommunitySvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <CommunitySvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <CommunitySvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <CommunitySvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function CommunityTownExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
