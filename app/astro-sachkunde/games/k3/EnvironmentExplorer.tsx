"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Pollution", tx1: "Pollution is when air, water, or soil becomes dirty.",
    t2: "Recycling", tx2: "Recycling turns old things into new products.",
    t3: "Conservation", tx3: "We must protect nature and save resources.",
    t4: "Endangered Species", tx4: "Some animals are in danger of disappearing forever.",
    t5: "Earth Care", tx5: "We all must help protect our planet Earth.",
    q1: "What is pollution?", q1a: "Dirty environment", q1b: "Clean water", q1c: "Fresh air", q1d: "Healthy soil",
    q2: "What happens when we recycle?", q2a: "Old things become new", q2b: "Things are thrown away", q2c: "Things burn", q2d: "Things disappear",
    q3: "Why do we need conservation?", q3a: "Save nature", q3b: "Make more trash", q3c: "Pollute more", q3d: "Destroy forests",
    q4: "What is an endangered species?", q4a: "Animal in danger", q4b: "Strong animal", q4c: "Healthy animal", q4d: "Common animal",
    q5: "How can we help Earth?", q5a: "Recycle and conserve", q5b: "Pollute more", q5c: "Waste resources", q5d: "Ignore nature",
  },
  de: {
    t1: "Umweltverschmutzung", tx1: "Verschmutzung ist, wenn Luft, Wasser oder Boden schmutzig wird.",
    t2: "Recycling", tx2: "Recycling verwandelt alte Dinge in neue Produkte.",
    t3: "Naturschutz", tx3: "Wir müssen die Natur schützen und Ressourcen sparen.",
    t4: "Bedrohte Arten", tx4: "Einige Tiere sind in Gefahr zu verschwinden.",
    t5: "Schutz der Erde", tx5: "Wir alle müssen unseren Planeten Erde schützen.",
    q1: "Was ist Verschmutzung?", q1a: "Schmutzige Umwelt", q1b: "Sauberes Wasser", q1c: "Frische Luft", q1d: "Gesunder Boden",
    q2: "Was passiert beim Recyceln?", q2a: "Alte Dinge werden neu", q2b: "Dinge werden geworfen", q2c: "Dinge brennen", q2d: "Dinge verschwinden",
    q3: "Warum brauchen wir Naturschutz?", q3a: "Natur speichern", q3b: "Mehr Müll machen", q3c: "Mehr verschmutzen", q3d: "Wälder zerstören",
    q4: "Was ist eine bedrohte Art?", q4a: "Tier in Gefahr", q4b: "Starkes Tier", q4c: "Gesundes Tier", q4d: "Häufiges Tier",
    q5: "Wie können wir der Erde helfen?", q5a: "Recyceln und schützen", q5b: "Mehr verschmutzen", q5c: "Ressourcen verschwenden", q5d: "Natur ignorieren",
  },
  hu: {
    t1: "Szennyezés", tx1: "A szennyezés akkor történik, amikor a levegő, víz vagy talaj szennyezetté válik.",
    t2: "Újrahasznosítás", tx2: "Az újrahasznosítás régi dolgokat új termékekké alakít.",
    t3: "Természetvédelem", tx3: "Meg kell óvnunk a természetet és meg kell spórolnunk az erőforrásokat.",
    t4: "Veszélyeztetett fajok", tx4: "Egyes állatok veszélybe vannak, hogy örökre eltűnjenek.",
    t5: "Föld gondozása", tx5: "Mindannyian segítünk a Föld bolygónk védelmében.",
    q1: "Mi az a szennyezés?", q1a: "Szennyezett környezet", q1b: "Tiszta víz", q1c: "Friss levegő", q1d: "Egészséges talaj",
    q2: "Mi történik az újrahasznosításnál?", q2a: "Régi dolgok új válnak", q2b: "A dolgok kidobnak", q2c: "A dolgok égnek", q2d: "A dolgok eltűnnek",
    q3: "Miért szükséges a természetvédelem?", q3a: "Természet mentése", q3b: "Több szemét készítés", q3c: "Több szennyezés", q3d: "Erdők megsemmisítése",
    q4: "Mi az a veszélyeztetett faj?", q4a: "Veszélyben lévő állat", q4b: "Erős állat", q4c: "Egészséges állat", q4d: "Gyakori állat",
    q5: "Hogyan segíthetünk a Földnek?", q5a: "Újrahasznosít és megóvunk", q5b: "Több szennyez", q5c: "Erőforrásokat pazarol", q5d: "Figyelmen kívül hagyom a természetet",
  },
  ro: {
    t1: "Poluare", tx1: "Poluarea este când aerul, apa sau solul devin murdare.",
    t2: "Reciclare", tx2: "Reciclarea transformă lucrurile vechi în produse noi.",
    t3: "Conservare", tx3: "Trebuie să protejăm natura și să economisim resursele.",
    t4: "Specii pe cale de dispariție", tx4: "Unele animale sunt în pericol de a dispărea pentru totdeauna.",
    t5: "Grijă pentru Pământ", tx5: "Toți trebuie să ajutți la protejarea planetei noastre Pământ.",
    q1: "Ce este poluarea?", q1a: "Mediu murdar", q1b: "Apă curată", q1c: "Aer proaspăt", q1d: "Sol sănătos",
    q2: "Ce se întâmplă când reciclăm?", q2a: "Lucruri vechi devin noi", q2b: "Lucruri sunt aruncate", q2c: "Lucruri arde", q2d: "Lucruri dispar",
    q3: "De ce avem nevoie de conservare?", q3a: "Salvează natura", q3b: "Faceți mai mulți deșeuri", q3c: "Poluați mai mult", q3d: "Distrugeți păduri",
    q4: "Ce este o specie pe cale de dispariție?", q4a: "Animal în pericol", q4b: "Animal puternic", q4c: "Animal sănătos", q4d: "Animal comun",
    q5: "Cum putem ajuta Pământul?", q5a: "Reciclați și conservați", q5b: "Poluați mai mult", q5c: "Risipa resurse", q5d: "Ignoră natura",
  },
};

function EnvironmentSvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e1a" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#10B981">♻️</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <EnvironmentSvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <EnvironmentSvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <EnvironmentSvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <EnvironmentSvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <EnvironmentSvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function EnvironmentExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
