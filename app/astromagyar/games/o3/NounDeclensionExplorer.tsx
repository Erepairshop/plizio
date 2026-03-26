"use client";
// NounDeclensionExplorer.tsx — AstroMagyar Grade 3: i2 Névszók szigete
// POOL-Powered ⚡: ESET_POOL és TOLDALÉK_POOL használatával

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
// IMPORTÁLJUK A SZÜKSÉGES ADATOKAT
import { ESET_POOL, TOLDALÉK_POOL, SZÓFAJ_POOL } from "@/lib/visualGenerators";

// ─── ILUSZTRÁCIÓK ───────────────────

const NounSvg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#082F49" rx="20" />
    <g transform="translate(120, 70)">
      {/* Kapcsolódó láncszemek (ragozás szimbóluma) */}
      <rect x="-40" y="-10" width="30" height="20" rx="10" fill="none" stroke="#00D4FF" strokeWidth="4" />
      <rect x="-15" y="-10" width="30" height="20" rx="10" fill="none" stroke="#BAE6FD" strokeWidth="4" />
      <rect x="10" y="-10" width="30" height="20" rx="10" fill="none" stroke="#00D4FF" strokeWidth="4" />
      <text x="0" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">NÉVSZÓK RAGOZÁSA</text>
    </g>
  </svg>
));

// ─── ADATOK ELŐKÉSZÍTÉSE ───────────────────

// Kiválasztunk 2 alanyesetet és 2 helyhatározót az ESET_POOL-ból
const alanyok = ESET_POOL.filter(e => e.case === 'A').slice(0, 2);
const helyhatarozok = ESET_POOL.filter(e => e.case === 'G').slice(0, 2);

// Toldalék példa
const toldalekPeldak = TOLDALÉK_POOL.slice(0, 2);

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Névszók szigete",
    t1_title: "Esetek és ragok",
    t1_text: "A főnevekhez ragokat kapcsolunk, hogy megmutassuk a szerepüket a mondatban. Az alany (Ki? Mi?) nem kap ragot, a helyhatározó viszont megmondja, hol van valami.",
    t1_inst: "Válogasd szét a szavakat: Alany vagy Helyhatározó?",
    t1_alany: "Alany (Ki? Mi?)",
    t1_hely: "Helyhatározó (Hol?)",
    
    t2_title: "Melyik toldalék illik hozzá?",
    t2_text: "A szavak végére illő toldalékot a magánhangzók hangrendje dönti el. Válaszd ki a helyes befejezést!",
    t2_inst: "Pótold a hiányzó toldalékot!",
    
    t3_title: "Keresd az esetet!",
    t3_text: "Egy mondatban a kiemelt szó elárulja, milyen nyelvtani esetben van. Figyelj a ragokra!",
    t3_inst: "Jelöld ki a mondatban a kért szót!",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <NounSvg />,
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "A", label: "t1_alany" },
        { id: "G", label: "t1_hely" },
      ],
      items: [
        { text: alanyok[0].highlight, bucketId: "A" },
        { text: helyhatarozok[0].highlight, bucketId: "G" },
        { text: alanyok[1].highlight, bucketId: "A" },
        { text: helyhatarozok[1].highlight, bucketId: "G" },
      ],
      instruction: "t1_inst",
      hint1: "Alany = rag nélkül",
      hint2: "Hely = -ban, -ben, -on...",
    },
    quiz: {
      question: "Melyik kérdésre felel a helyhatározó?",
      choices: ["Hol?", "Ki?", "Mit?", "Milyen?"],
      answer: "Hol?",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <NounSvg />,
    interactive: {
      type: "gap-fill",
      // Toldalékválasztás dinamikusan
      sentence: `${toldalekPeldak[0].root}___`,
      choices: toldalekPeldak[0].endings,
      correctIndex: toldalekPeldak[0].correctIndex,
      instruction: "t2_inst",
      hint1: "Figyelj a hangrendre!",
      hint2: "Magas vagy mély?",
    },
    quiz: {
      question: "Hogy hívjuk a szó végét, ami megváltoztatja a jelentését?",
      choices: ["Toldalék", "Szótő", "Betű", "Mondat"],
      answer: "Toldalék",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <NounSvg />,
    interactive: {
      type: "highlight-text",
      // Mondat és kijelölés az ESET_POOL-ból
      tokens: ESET_POOL[0].sentence.replace(/_/g, "").split(" "),
      correctIndices: [1], // Itt érdemesebb manuálisan belőni a POOL alapján
      instruction: "Keresd meg a mondat alanyát!",
      hint1: "Ki a cselekvő?",
      hint2: "Keresd a főnevet!",
    },
    quiz: {
      question: "Mi a 'macska' szó ragja a 'macskát' szóban?",
      choices: ["-t", "-a", "-at", "nincs rag"],
      answer: "-t",
    },
  },
  {
    infoTitle: "Láncszem-kapó",
    infoText: "Szuperül ragozol! Gyűjts össze 6 láncszemet a győzelemhez!",
    svg: () => <NounSvg />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🔗", count: 6 },
      instruction: "Kapd el a láncszemeket!",
      hint1: "Gyorsan kattints!",
      hint2: "Már majdnem kész!",
    },
    quiz: {
      question: "Melyik szó van helyesen leírva?",
      choices: ["házban", "házben", "házon", "háznál"],
      answer: "házban",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔗",
  topics: TOPICS,
  rounds: [],
};

export default function NounDeclensionExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i2" color="#00D4FF" lang={lang} onDone={onDone} />;
}
