"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Simple Machines", tx1: "Levers, pulleys, and wheels help us move things.",
    t2: "Gears & Wheels", tx2: "Gears turn together. Wheels help transport.",
    t3: "Energy Sources", tx3: "Sun, wind, and water provide energy.",
    t4: "Technology", tx4: "Computers, phones, and cars use electricity.",
    t5: "Inventions", tx5: "Inventions make our lives easier and better.",
    q1: "What is a lever?", q1a: "Simple machine for lifting", q1b: "A wheel", q1c: "Energy", q1d: "A computer",
    q2: "What do gears do?", q2a: "Turn together", q2b: "Store energy", q2c: "Create heat", q2d: "Make light",
    q3: "What is a natural energy source?", q3a: "Wind", q3b: "Plastic", q3c: "Steel", q3d: "Rubber",
    q4: "What needs electricity?", q4a: "Computer", q4b: "Rock", q4c: "Water", q4d: "Tree",
    q5: "Why do we invent things?", q5a: "To make life easier", q5b: "To waste time", q5c: "To complicate things", q5d: "To break things",
  },
  de: {
    t1: "Einfache Maschinen", tx1: "Hebel, Flaschenzüge und Räder helfen uns, Dinge zu bewegen.",
    t2: "Zahnräder & Räder", tx2: "Zahnräder drehen sich zusammen. Räder helfen beim Transport.",
    t3: "Energiequellen", tx3: "Sonne, Wind und Wasser liefern Energie.",
    t4: "Technologie", tx4: "Computer, Telefone und Autos nutzen Elektrizität.",
    t5: "Erfindungen", tx5: "Erfindungen machen unser Leben leichter und besser.",
    q1: "Was ist ein Hebel?", q1a: "Einfache Maschine zum Heben", q1b: "Ein Rad", q1c: "Energie", q1d: "Ein Computer",
    q2: "Was tun Zahnräder?", q2a: "Drehen sich zusammen", q2b: "Speichern Energie", q2c: "Erzeugent Wärme", q2d: "Machen Licht",
    q3: "Was ist eine natürliche Energiequelle?", q3a: "Wind", q3b: "Kunststoff", q3c: "Stahl", q3d: "Gummi",
    q4: "Was braucht Elektrizität?", q4a: "Computer", q4b: "Stein", q4c: "Wasser", q4d: "Baum",
    q5: "Warum erfinden wir Dinge?", q5a: "Um das Leben leichter zu machen", q5b: "Um Zeit zu verschwenden", q5c: "Um Dinge zu verkomplizieren", q5d: "Um Dinge zu zerstören",
  },
  hu: {
    t1: "Egyszerű gépek", tx1: "Az emelők, csigák és kerekek segítenek a dolgok mozgatásában.",
    t2: "Fogaskerekek és kerekek", tx2: "A fogaskerekek együtt forognak. A kerekek szállítást segítenek.",
    t3: "Energiaforrások", tx3: "A nap, szél és víz energiát biztosít.",
    t4: "Technológia", tx4: "A számítógépek, telefonok és autók elektromosságot használnak.",
    t5: "Találmányok", tx5: "A találmányok könnyebbé és jobbá teszik az életet.",
    q1: "Mi az az emelő?", q1a: "Egyszerű gép emeléshez", q1b: "Egy kerék", q1c: "Energia", q1d: "Egy számítógép",
    q2: "Mit csinálnak a fogaskerekek?", q2a: "Forognak együtt", q2b: "Tárolják az energiát", q2c: "Hőt termelnek", q2d: "Fényt készítenek",
    q3: "Mi a természetes energiaforrás?", q3a: "Szél", q3b: "Műanyag", q3c: "Acél", q3d: "Gumi",
    q4: "Mi igényel elektromosságot?", q4a: "Számítógép", q4b: "Kő", q4c: "Víz", q4d: "Fa",
    q5: "Miért találunk fel dolgokat?", q5a: "Az élet könnyebbé tételéhez", q5b: "Időpazarláshoz", q5c: "Dolgok bonyolítéséhez", q5d: "Dolgok összetöréséhez",
  },
  ro: {
    t1: "Mașini simple", tx1: "Pârghiile, scripetele și roțile ne ajută să mutăm lucruri.",
    t2: "Roți dințate și roți", tx2: "Roțile dințate se rotesc împreună. Roțile ajută transportul.",
    t3: "Surse de energie", tx3: "Soarele, vântul și apa furnizează energie.",
    t4: "Tehnologie", tx4: "Computerele, telefoanele și mașinile folosesc electricitate.",
    t5: "Invenții", tx5: "Invenții fac viața mai ușoară și mai bună.",
    q1: "Ce este o pârghie?", q1a: "Mașină simplă pentru ridicare", q1b: "O roată", q1c: "Energie", q1d: "Un computer",
    q2: "Ce fac roțile dințate?", q2a: "Se rotesc împreună", q2b: "Stochează energie", q2c: "Crează căldură", q2d: "Fac lumină",
    q3: "Care este o sursă naturală de energie?", q3a: "Vânt", q3b: "Plastic", q3c: "Oțel", q3d: "Cauciuc",
    q4: "Ce are nevoie de electricitate?", q4a: "Computer", q4b: "Piatră", q4c: "Apă", q4d: "Copac",
    q5: "De ce inventez lucruri?", q5a: "Pentru a face viață mai ușoară", q5b: "Pentru a irosi timp", q5c: "Pentru a complica lucruri", q5d: "Pentru a sparge lucruri",
  },
};

function TechSvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#2e2a1a" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#F0B27A">⚙️</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <TechSvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <TechSvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <TechSvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <TechSvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <TechSvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function TechMachinesExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
