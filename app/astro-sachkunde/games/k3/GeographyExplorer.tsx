"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    t1: "Water Bodies", tx1: "Rivers flow downhill. Oceans are the largest water bodies.",
    t2: "Compass Directions", tx2: "North, south, east, and west help us navigate.",
    t3: "Maps", tx3: "Maps show us where places are located.",
    t4: "Mountains & Valleys", tx4: "Mountains are high peaks. Valleys are low areas between.",
    t5: "Landforms", tx5: "Islands, peninsulas, and deserts are different landforms.",
    q1: "What is the largest water body?", q1a: "Ocean", q1b: "River", q1c: "Lake", q1d: "Pond",
    q2: "Which direction is opposite north?", q2a: "South", q2b: "East", q2c: "West", q2d: "Up",
    q3: "What do maps show?", q3a: "Locations", q3b: "Time", q3c: "Weather", q3d: "Numbers",
    q4: "What is a valley?", q4a: "Low area", q4b: "High peak", q4c: "Flat desert", q4d: "Ocean",
    q5: "What is a peninsula?", q5a: "Land with water around 3 sides", q5b: "Island", q5c: "Mountain", q5d: "Desert",
  },
  de: {
    t1: "Gewässer", tx1: "Flüsse fließen bergab. Ozeane sind die größten Gewässer.",
    t2: "Himmelsrichtungen", tx2: "Norden, Süden, Osten und Westen helfen uns zu navigieren.",
    t3: "Karten", tx3: "Karten zeigen uns, wo sich Orte befinden.",
    t4: "Berge & Täler", tx4: "Berge sind hohe Gipfel. Täler sind tiefe Gegenden dazwischen.",
    t5: "Landformen", tx5: "Inseln, Halbinseln und Wüsten sind verschiedene Landformen.",
    q1: "Welches ist das größte Gewässer?", q1a: "Ozean", q1b: "Fluss", q1c: "See", q1d: "Teich",
    q2: "Welche Richtung ist gegenüber von Norden?", q2a: "Süden", q2b: "Osten", q2c: "Westen", q2d: "Oben",
    q3: "Was zeigen Karten?", q3a: "Orte", q3b: "Zeit", q3c: "Wetter", q3d: "Zahlen",
    q4: "Was ist ein Tal?", q4a: "Tiefe Gegend", q4b: "Hoher Gipfel", q4c: "Flache Wüste", q4d: "Ozean",
    q5: "Was ist eine Halbinsel?", q5a: "Land mit Wasser rundum 3 Seiten", q5b: "Insel", q5c: "Berg", q5d: "Wüste",
  },
  hu: {
    t1: "Vízterek", tx1: "A folyók lefelé folynak. Az óceánok a legnagyobb vízterek.",
    t2: "Iránytű irányok", tx2: "Az észak, dél, kelet és nyugat segít a navigálásban.",
    t3: "Térképek", tx3: "A térképek megmutatják, hol helyezkednek el a helyek.",
    t4: "Hegyek és völgyek", tx4: "A hegyek magas csúcsok. A völgyek közötti alacsony területek.",
    t5: "Landformák", tx5: "A szigetek, félszigerek és sivatagok különböző landformák.",
    q1: "Melyik a legnagyobb víztér?", q1a: "Óceán", q1b: "Folyó", q1c: "Tó", q1d: "Tározó",
    q2: "Melyik irány az észak ellentéte?", q2a: "Dél", q2b: "Kelet", q2c: "Nyugat", q2d: "Fel",
    q3: "Mit mutatnak a térképek?", q3a: "Helyeket", q3b: "Időt", q3c: "Időjárást", q3d: "Számokat",
    q4: "Mi az a völgy?", q4a: "Alacsony terület", q4b: "Magas csúcs", q4c: "Lapos sivatag", q4d: "Óceán",
    q5: "Mi az a félsziget?", q5a: "Föld 3 oldalán vízzel", q5b: "Sziget", q5c: "Hegy", q5d: "Sivatag",
  },
  ro: {
    t1: "Corpuri de apă", tx1: "Râurile curg în jos. Oceanele sunt cele mai mari corpuri de apă.",
    t2: "Direcții cardinale", tx2: "Nord, sud, est și vest ne ajută să navighez.",
    t3: "Hărți", tx3: "Hărțile ne arată unde sunt localizate locurile.",
    t4: "Munți și văi", tx4: "Munții sunt vârfuri înalte. Văile sunt zone joase între.",
    t5: "Forme de teren", tx5: "Insulele, peninsulele și deșerturile sunt diferite forme de teren.",
    q1: "Care este cel mai mare corp de apă?", q1a: "Ocean", q1b: "Râu", q1c: "Lac", q1d: "Iaz",
    q2: "Ce direcție este opusă nordului?", q2a: "Sud", q2b: "Est", q2c: "Vest", q2d: "Sus",
    q3: "Ce arată hărțile?", q3a: "Locuri", q3b: "Timp", q3c: "Vreme", q3d: "Numere",
    q4: "Ce este o vale?", q4a: "Zonă joasă", q4b: "Vârf înalt", q4c: "Deșert plat", q4d: "Ocean",
    q5: "Ce este o peninsulă?", q5a: "Teren cu apă pe 3 laturi", q5b: "Insulă", q5c: "Munte", q5d: "Deșert",
  },
};

function GeographySvg() {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e3a" />
      <text x="120" y="90" textAnchor="middle" fontSize="60" fill="#4ECDC4">🏔️</text>
    </svg>
  );
}

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "t1", infoText: "tx1", svg: () => <GeographySvg />, questions: [{ question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" }] },
    { type: "mcq", infoTitle: "t2", infoText: "tx2", svg: () => <GeographySvg />, questions: [{ question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" }] },
    { type: "mcq", infoTitle: "t3", infoText: "tx3", svg: () => <GeographySvg />, questions: [{ question: "q3", choices: ["q3a", "q3b", "q3c", "q3d"], answer: "q3a" }] },
    { type: "mcq", infoTitle: "t4", infoText: "tx4", svg: () => <GeographySvg />, questions: [{ question: "q4", choices: ["q4a", "q4b", "q4c", "q4d"], answer: "q4a" }] },
    { type: "mcq", infoTitle: "t5", infoText: "tx5", svg: () => <GeographySvg />, questions: [
      { question: "q1", choices: ["q1a", "q1b", "q1c", "q1d"], answer: "q1a" },
      { question: "q2", choices: ["q2a", "q2b", "q2c", "q2d"], answer: "q2a" },
      { question: "q5", choices: ["q5a", "q5b", "q5c", "q5d"], answer: "q5a" },
    ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }
export default function GeographyExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
