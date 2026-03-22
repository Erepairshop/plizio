"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Forest Layers", tx1: "Forests have different layers: canopy, understory, and forest floor.",
    t2: "Trees & Plants", tx2: "Trees provide food and shelter for forest animals.",
    t3: "Forest Animals", tx3: "Deer, bears, squirrels, and birds live in forests.",
    t4: "Food Webs", tx4: "In forests, herbivores eat plants, carnivores eat meat.",
    t5: "Seasons", tx5: "Forests change dramatically with the seasons.",
    q1: "Which layer is the top of the forest?", q1a: "Canopy", q1b: "Understory", q1c: "Floor", q1d: "Root layer",
    q2: "What do trees provide?", q2a: "Food and shelter", q2b: "Water only", q2c: "Air only", q2d: "Light only",
    q3: "What does a herbivore eat?", q3a: "Plants", q3b: "Meat", q3c: "Both", q3d: "Insects only",
    q4: "In autumn, what happens to trees?", q4a: "Leaves change color", q4b: "They grow", q4c: "They rest", q4d: "They die",
    q5: "What is a forest predator?", q5a: "Bear", q5b: "Deer", q5c: "Rabbit", q5d: "Squirrel",
  },
  de: {
    t1: "Waldschichten", tx1: "Wälder haben verschiedene Schichten: Kronendach, Unterschicht und Waldboden.",
    t2: "Bäume & Pflanzen", tx2: "Bäume bieten Nahrung und Unterschlupf für Waldtiere.",
    t3: "Waldtiere", tx3: "Hirsche, Bären, Eichhörnchen und Vögel leben in Wäldern.",
    t4: "Nahrungsnetze", tx4: "In Wäldern fressen Pflanzenfresser Pflanzen, Fleischfresser Fleisch.",
    t5: "Jahreszeiten", tx5: "Wälder ändern sich dramatisch mit den Jahreszeiten.",
    q1: "Welche Schicht ist die Spitze des Waldes?", q1a: "Kronendach", q1b: "Unterschicht", q1c: "Boden", q1d: "Wurzelebene",
    q2: "Was bieten Bäume?", q2a: "Nahrung und Unterschlupf", q2b: "Nur Wasser", q2c: "Nur Luft", q2d: "Nur Licht",
    q3: "Was frisst ein Pflanzenfresser?", q3a: "Pflanzen", q3b: "Fleisch", q3c: "Beides", q3d: "Nur Insekten",
    q4: "Was passiert im Herbst mit Bäumen?", q4a: "Blätter ändern Farbe", q4b: "Sie wachsen", q4c: "Sie ruhen", q4d: "Sie sterben",
    q5: "Was ist ein Waldräuber?", q5a: "Bär", q5b: "Hirsch", q5c: "Kaninchen", q5d: "Eichhörnchen",
  },
  hu: {
    t1: "Erdő rétegei", tx1: "Az erdőknek különböző rétegei vannak: lombkoron, alulnézet és erdőtalaj.",
    t2: "Fák és növények", tx2: "A fák táplálékot és menedéket biztosítanak az erdei állatoknak.",
    t3: "Erdei állatok", tx3: "Szarvasok, medvék, mókusok és madarak élnek az erdőkben.",
    t4: "Táplálékháló", tx4: "Az erdőkben a növényevők növényt esznek, a húsevők húst.",
    t5: "Évszakok", tx5: "Az erdők drámaian megváltoznak az évszakokkal.",
    q1: "Melyik réteg az erdő csúcsa?", q1a: "Lombkoron", q1b: "Alulnézet", q1c: "Talaj", q1d: "Gyökerréteg",
    q2: "Mit nyújtanak a fák?", q2a: "Táplálék és menedék", q2b: "Csak viz", q2c: "Csak levegő", q2d: "Csak fény",
    q3: "Mit eszik egy növényevő?", q3a: "Növényeket", q3b: "Húst", q3c: "Mindkettőt", q3d: "Csak rovarokat",
    q4: "Az őszben mi történik a fákkal?", q4a: "A levelek színt változtatnak", q4b: "Nőnek", q4c: "Pihennek", q4d: "Meghalnak",
    q5: "Mi az erdei ragadozó?", q5a: "Medve", q5b: "Szarvas", q5c: "Nyúl", q5d: "Mókus",
  },
  ro: {
    t1: "Straturi de pădure", tx1: "Pădurile au straturi diferite: coroană, substrat și sol.",
    t2: "Copaci și plante", tx2: "Copacii oferă hrană și adăpost animalelor din pădure.",
    t3: "Animale din pădure", tx3: "Cerbi, urși, veverițe și păsări trăiesc în păduri.",
    t4: "Rețele alimentare", tx4: "În păduri, erbivore mănâncă plante, carnivore mănâncă carne.",
    t5: "Anotimpuri", tx5: "Pădurile se schimbă dramatic cu anotimpurile.",
    q1: "Care strat este vârful pădurii?", q1a: "Coroană", q1b: "Substrat", q1c: "Sol", q1d: "Strat rădăcină",
    q2: "Ce oferă copacii?", q2a: "Hrană și adăpost", q2b: "Doar apă", q2c: "Doar aer", q2d: "Doar lumină",
    q3: "Ce mănâncă un erbivor?", q3a: "Plante", q3b: "Carne", q3c: "Ambele", q3d: "Doar insecte",
    q4: "Ce se întâmplă cu copacii toamna?", q4a: "Frunzele se schimbă culoare", q4b: "Cresc", q4c: "Se odihnesc", q4d: "Mor",
    q5: "Ce este un prădător din pădure?", q5a: "Urs", q5b: "Cerb", q5c: "Iepure", q5d: "Veverită",
  },
};

function ForestSvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3d1a" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#95E1D3">🌲</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <ForestSvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <ForestSvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <ForestSvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <ForestSvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <ForestSvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function ForestLifeExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
