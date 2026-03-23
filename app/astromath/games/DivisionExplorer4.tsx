"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

const SharingModelSvg = memo(function SharingModelSvg({ total = 20, groups = 4, lang = "en" }: { total?: number; groups?: number; lang?: string }) {
  const perGroup = Math.floor(total / groups);
  const colors = ["#FF6B9D", "#4ECDC4", "#FFD700", "#9B59B6"];
  const t = LABELS[lang] || LABELS.en;
  const perGroupLabel = { en: "per group", de: "pro Gruppe", hu: "csoportonként", ro: "per grup" }[lang] || "per group";
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="shareG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFB3D9" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#shareG)" rx="16" />
      {Array.from({ length: groups }, (_, g) => (
        <g key={g} transform={`translate(${30 + g * 55}, 40)`}>
          <circle cx="0" cy="0" r="20" fill={colors[g % colors.length]} opacity="0.15" stroke={colors[g % colors.length]} strokeWidth="2" />
          {Array.from({ length: perGroup }, (_, i) => (
            <circle key={i} cx={-12 + (i % 3) * 8} cy={-8 + Math.floor(i / 3) * 8} r="2.5" fill={colors[g % colors.length]} opacity="0.8" />
          ))}
          <text x="0" y="35" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
            {perGroup}
          </text>
        </g>
      ))}
      <text x="120" y="135" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {total} ÷ {groups} = {perGroup}
      </text>
      <text x="120" y="150" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        ({total} ÷ {groups} = {perGroup} {perGroupLabel})
      </text>
    </svg>
  );
});

const GroupingModelSvg = memo(function GroupingModelSvg({ total = 24, size = 6, lang = "en" }: { total?: number; size?: number; lang?: string }) {
  const groups = Math.floor(total / size);
  const groupsLabel = { en: "groups", de: "Gruppen", hu: "csoport", ro: "grupuri" }[lang] || "groups";
  const eachLabel = { en: "each", de: "je", hu: "darab", ro: "fiecare" }[lang] || "each";
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="groupG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7FE3DE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#groupG)" rx="16" />
      {Array.from({ length: Math.min(groups, 6) }, (_, g) => (
        <g key={g} transform={`translate(${20 + (g % 3) * 70}, ${40 + Math.floor(g / 3) * 70})`}>
          <rect width="50" height="50" fill="rgba(78,205,196,0.1)" rx="6" stroke="#4ECDC4" strokeWidth="1" />
          {Array.from({ length: Math.min(size, 4) }, (_, i) => (
            <circle key={i} cx={10 + (i % 2) * 15} cy={15 + Math.floor(i / 2) * 15} r="3" fill="#4ECDC4" opacity="0.7" />
          ))}
          {size > 4 && (
            <text x="25" y="48" fontSize="8" fill="#4ECDC4" opacity="0.6" textAnchor="middle">
              +{size - 4}
            </text>
          )}
        </g>
      ))}
      <text x="120" y="135" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {total} ÷ {size} = {groups}
      </text>
      <text x="120" y="150" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        ({groups} {groupsLabel} × {size} {eachLabel} = {total})
      </text>
    </svg>
  );
});

const NumberLineSubSvg = memo(function NumberLineSubSvg({ total = 30, size = 5, lang = "en" }: { total?: number; size?: number; lang?: string }) {
  const groups = Math.floor(total / size);
  const max = total;
  const jumpsLabel = { en: "jumps", de: "Sprünge", hu: "ugrás", ro: "salturi" }[lang] || "jumps";
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <defs>
        <linearGradient id="nlsubG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFE66D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="130" fill="url(#nlsubG)" rx="16" />
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      {[0, size, size * 2, size * 3, size * 4, size * 5, max].filter(v => v <= max).map((val) => {
        const x = 20 + (val / max) * 200;
        return (
          <g key={val}>
            <line x1={x} y1="45" x2={x} y2="55" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <text x={x} y="75" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
              {val}
            </text>
          </g>
        );
      })}
      {Array.from({ length: groups + 1 }, (_, i) => (
        <g key={`jump-${i}`}>
          <circle cx={20 + (i * size / max) * 200} cy="50" r="5" fill="#FFD700" opacity="0.7" />
          {i < groups && (
            <path d={`M ${20 + (i * size / max) * 200 + 5} 48 Q ${20 + ((i + 0.5) * size / max) * 200} 25 ${20 + ((i + 1) * size / max) * 200 - 5} 48`} stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.5" />
          )}
        </g>
      ))}
      <text x="120" y="115" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {total} ÷ {size} = {groups} {jumpsLabel}
      </text>
    </svg>
  );
});

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Division Explorer",
    t1_title: "Sharing Equally",
    t1_text: "Division means sharing things equally. If we have 20 items to share among 4 friends, each friend gets 5 items. We write this as 20 ÷ 4 = 5.",
    t1_b1: "Division shares items into equal groups",
    t1_b2: "Each group must have the same amount",
    t1_b3: "The answer is how many in each group",
    t1_inst: "Drag items into each group box. Each group should have the same amount.",
    t1_h1: "Group 1",
    t1_h2: "Group 2",
    t1_q: "If you share 24 cookies among 6 friends, how many does each get?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t2_title: "Making Groups",
    t2_text: "Division can also mean making equal groups. If we have 30 items and make groups of 5, we can make 6 groups. We write: 30 ÷ 5 = 6.",
    t2_b1: "Grouping creates equal-sized groups",
    t2_b2: "Count how many groups you can make",
    t2_b3: "The answer is the number of groups",
    t2_inst: "Drag items into group boxes. Make groups of exactly 5 items each.",
    t2_h1: "Make groups",
    t2_h2: "Use all 30",
    t2_q: "How many groups of 8 can you make from 48 items?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t3_title: "Number Line Division",
    t3_text: "On a number line, division uses repeated subtraction. To find 35 ÷ 5, count how many jumps of 5 it takes to reach 35. The answer is 7 jumps, so 35 ÷ 5 = 7.",
    t3_b1: "Each jump is the same size (the divisor)",
    t3_b2: "Count the jumps to reach the total",
    t3_b3: "The number of jumps is the answer",
    t3_inst: "Drag jump markers on the number line. Show how many jumps of 6 reach 54.",
    t3_h1: "Jumps of 6",
    t3_h2: "Reach 54",
    t3_q: "How many jumps of 6 does it take to reach 54?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_11: "11",
  },
  de: {
    explorer_title: "Divisions-Entdecker",
    t1_title: "Gleich verteilen",
    t1_text: "Division bedeutet, Dinge gleich zu verteilen. Wenn wir 20 Items auf 4 Freunde verteilen, bekommt jeder 5. Wir schreiben: 20 ÷ 4 = 5.",
    t1_b1: "Division verteilt Items in gleiche Gruppen",
    t1_b2: "Jede Gruppe muss gleich viel haben",
    t1_b3: "Die Antwort ist, wie viel in jeder Gruppe",
    t1_inst: "Ziehe Items in jede Gruppenbox. Jede Gruppe sollte gleich viel haben.",
    t1_h1: "Gruppe 1",
    t1_h2: "Gruppe 2",
    t1_q: "Wenn du 24 Kekse auf 6 Freunde verteilst, wie viel bekommt jeder?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t2_title: "Gruppen machen",
    t2_text: "Division kann auch Gruppen machen bedeuten. Wenn wir 30 Items haben und Gruppen von 5 machen, bekommen wir 6 Gruppen. Wir schreiben: 30 ÷ 5 = 6.",
    t2_b1: "Gruppieren schafft gleich große Gruppen",
    t2_b2: "Zähle, wie viele Gruppen du machen kannst",
    t2_b3: "Die Antwort ist die Anzahl der Gruppen",
    t2_inst: "Ziehe Items in Gruppenboxen. Mache Gruppen von genau 5 Items.",
    t2_h1: "Gruppen machen",
    t2_h2: "Alle 30 nutzen",
    t2_q: "Wie viele Gruppen von 8 kannst du aus 48 Items machen?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t3_title: "Zahlenstrahl Division",
    t3_text: "Auf einem Zahlenstrahl benutzt Division wiederholte Subtraktion. Um 35 ÷ 5 zu finden, zähle, wie viele Sprünge von 5 du brauchst bis 35. Die Antwort ist 7 Sprünge, also 35 ÷ 5 = 7.",
    t3_b1: "Jeder Sprung ist gleich groß (der Divisor)",
    t3_b2: "Zähle die Sprünge bis zum Total",
    t3_b3: "Die Anzahl der Sprünge ist die Antwort",
    t3_inst: "Ziehe Sprung-Marker auf den Zahlenstrahl. Zeige, wie viele Sprünge von 6 bis 54 gehen.",
    t3_h1: "Sprünge von 6",
    t3_h2: "Erreiche 54",
    t3_q: "Wie viele Sprünge von 6 brauchst du bis 54?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_11: "11",
  },
  hu: {
    explorer_title: "Osztás-felfedező",
    t1_title: "Egyenlő elosztás",
    t1_text: "Az osztás azt jelenti, hogy dolgokat egyenlően elosztunk. Ha 20 tárgyat 4 barátnak osztunk, mindegyik 5-öt kap. Ezt így írjuk: 20 ÷ 4 = 5.",
    t1_b1: "Az osztás tárgyakat egyenlő csoportokra osztja",
    t1_b2: "Minden csoportnak egyenlő mennyiséget kell tartalmaznia",
    t1_b3: "A válasz az, hogy hány van minden csoportban",
    t1_inst: "Húzz tárgyakat minden csoport dobozba. Minden csoport egyenlő mennyiséget kapjon.",
    t1_h1: "1. csoport",
    t1_h2: "2. csoport",
    t1_q: "Ha 24 kekszet 6 barátnak osztasz, hányat kap mindegyik?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t2_title: "Csoportok készítése",
    t2_text: "Az osztás azt is jelentheti, hogy csoportokat készítünk. Ha 30 tárgyunk van és 5-ös csoportokat készítünk, 6 csoportot kapunk. Ezt így írjuk: 30 ÷ 5 = 6.",
    t2_b1: "A csoportosítás egyenlő csoportokat hoz létre",
    t2_b2: "Számold meg, hány csoportot tudsz csinálni",
    t2_b3: "A válasz a csoportok száma",
    t2_inst: "Húzz tárgyakat csoport dobozokba. Készíts pontosan 5 tárgyból álló csoportokat.",
    t2_h1: "Csoportok készítése",
    t2_h2: "Használd mind a 30-at",
    t2_q: "Hány 8-as csoport készíthető 48 tárgyból?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t3_title: "Számegyenes osztás",
    t3_text: "A számegyenesen az osztás ismételt kivonást jelent. Az 35 ÷ 5 megtalálásához számold meg, hány 5-ös ugrásra van szükség a 35-hez. A válasz 7 ugrás, tehát 35 ÷ 5 = 7.",
    t3_b1: "Minden ugrás ugyanakkora (az osztó)",
    t3_b2: "Számláld meg az ugrásokat az összesig",
    t3_b3: "Az ugrások száma a válasz",
    t3_inst: "Húzz ugrás jelölőket a számegyenesre. Mutasd, hány 6-os ugrás ér el 54-ig.",
    t3_h1: "Ugrások 6-szal",
    t3_h2: "Elérj 54-ig",
    t3_q: "Hány 6-os ugrás kell 54-ig?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_11: "11",
  },
  ro: {
    explorer_title: "Explorare Diviziune",
    t1_title: "Distribuire Egală",
    t1_text: "Diviziunea înseamnă să distribuiești lucruri în mod egal. Dacă ai 20 obiecte de distribuit între 4 prieteni, fiecare primește 5. Scriem: 20 ÷ 4 = 5.",
    t1_b1: "Diviziunea distribuie obiecte în grupuri egale",
    t1_b2: "Fiecare grup trebuie să aibă aceeași cantitate",
    t1_b3: "Răspunsul este cât din fiecare grup",
    t1_inst: "Trage obiecte în fiecare cutie de grup. Fiecare grup trebuie să aibă aceeași cantitate.",
    t1_h1: "Grupul 1",
    t1_h2: "Grupul 2",
    t1_q: "Dacă distribui 24 de biscuiți între 6 prieteni, câți primește fiecare?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t2_title: "Formarea grupurilor",
    t2_text: "Diviziunea poate insemna si crearea grupurilor egale. Daca ai 30 obiecte si faci grupuri de 5, poti face 6 grupuri. Scriem: 30 ÷ 5 = 6.",
    t2_b1: "Gruparea crează grupuri de mărime egală",
    t2_b2: "Numără câte grupuri poți face",
    t2_b3: "Răspunsul este numărul de grupuri",
    t2_inst: "Trage obiecte în cutii de grup. Fă grupuri de exact 5 obiecte.",
    t2_h1: "Fă grupuri",
    t2_h2: "Folosește toate 30",
    t2_q: "Câte grupuri de 8 poți face din 48 obiecte?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t3_title: "Linie Numerică Diviziune",
    t3_text: "Pe o linie numerică, diviziunea folosește scădere repetată. Pentru 35 ÷ 5, numără câte salturi de 5 iau până la 35. Răspunsul este 7 salturi, deci 35 ÷ 5 = 7.",
    t3_b1: "Fiecare salt are aceeași mărime (divizorul)",
    t3_b2: "Numără săriturii până la total",
    t3_b3: "Numărul de salturi este răspunsul",
    t3_inst: "Trage marcatori de săritură pe linia numerică. Arată câte salturi de 6 ajung la 54.",
    t3_h1: "Sărituri de 6",
    t3_h2: "Ajunge la 54",
    t3_q: "Câte salturi de 6 iau până la 54?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_11: "11",
  },
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <SharingModelSvg total={20} groups={4} lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [4, 4],
      answer: 4,
      blockIcon: "🔵",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: { question: "t1_q", choices: ["t1_q_3", "t1_q_4", "t1_q_5", "t1_q_6"], answer: "t1_q_4" },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <GroupingModelSvg total={30} size={5} lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [5, 5, 5],
      answer: 3,
      blockIcon: "🔵",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: { question: "t2_q", choices: ["t2_q_5", "t2_q_6", "t2_q_7", "t2_q_8"], answer: "t2_q_6" },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <NumberLineSubSvg total={35} size={5} lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 54,
      start: 0,
      target: 54,
      step: 6,
      showJumps: true,
      jumpCount: 9,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: { question: "t3_q", choices: ["t3_q_8", "t3_q_9", "t3_q_10", "t3_q_11"], answer: "t3_q_9" },
  },
];

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➗",
  topics: TOPICS,
  rounds: [],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function DivisionExplorer4({ color = "#9B59B6", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine def={EXPLORER_DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} grade={4} />
  );
}
