"use client";
// PlaceValue20Explorer — Numbers 11-20 (tens & ones) for Grade 1 (island i5)
// Uses new topic-based mode: teach → interact → quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Number Line 10-20 ──────────────────────────────────────────────────────

const NumberLine1120Svg = memo(function NumberLine1120Svg({ highlight = 15 }: { highlight?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="nl1120G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#nl1120G)" rx="16" />
      {/* Number line */}
      <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: 11 }, (_, i) => {
        const num = 10 + i;
        const x = 20 + i * 20;
        const isHl = num === highlight;
        return (
          <g key={i}>
            <line x1={x} y1="39" x2={x} y2="51" stroke={isHl ? "#F59E0B" : "rgba(255,255,255,0.3)"} strokeWidth={isHl ? 2.5 : 1.5} />
            <text x={x} y="67" fontSize={isHl ? "12" : "10"} fontWeight={isHl ? "800" : "500"} fill={isHl ? "#F59E0B" : "rgba(255,255,255,0.5)"} textAnchor="middle">
              {num}
            </text>
            {isHl && <circle cx={x} cy="33" r="5" fill="#F59E0B" opacity="0.8" />}
          </g>
        );
      })}
    </svg>
  );
});

// ─── SVG: Place Value Visual (1 ten + ones) ──────────────────────────────────────

const PlaceValueSvg = memo(function PlaceValueSvg({
  ones = 4,
  label = "14",
}: {
  ones?: number;
  label?: string;
}) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="pvG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#pvG)" rx="16" />

      {/* Tens rod */}
      <g transform="translate(60, 50)">
        <rect x="-8" y="-18" width="16" height="36" fill="none" stroke="#F59E0B" strokeWidth="2" rx="1.5" />
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={`ten-${i}`}
            x="-6"
            y={-15 + i * 3.6}
            width="12"
            height="3.2"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="0.8"
            opacity="0.85"
          />
        ))}
        <text x="0" y="28" fontSize="10" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
          1 TEN
        </text>
      </g>

      {/* Plus sign */}
      <text x="120" y="65" fontSize="20" fontWeight="900" fill="#F59E0B" textAnchor="middle">
        +
      </text>

      {/* Ones dots */}
      <g transform="translate(175, 50)">
        {Array.from({ length: Math.min(ones, 10) }, (_, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          return (
            <circle
              key={`one-${i}`}
              cx={col * 14 - 12}
              cy={row * 14 - 10}
              r="5"
              fill="#FBBF24"
              stroke="#F59E0B"
              strokeWidth="1"
            />
          );
        })}
        <text x="0" y="28" fontSize="10" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
          {ones} ONES
        </text>
      </g>

      {/* Equals and result */}
      <line x1="50" y1="105" x2="190" y2="105" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="120" y="125" fontSize="18" fontWeight="900" fill="#FCD34D" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
});

// ─── SVG: Sequence with gap ──────────────────────────────────────────────────────

const SequenceSvg = memo(function SequenceSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 100">
      <defs>
        <linearGradient id="seqG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="100" fill="url(#seqG)" rx="16" />

      {/* Boxes with numbers */}
      {[12, 13, 14, "?", 16].map((num, idx) => {
        const x = 40 + idx * 40;
        const isGap = num === "?";
        return (
          <g key={idx}>
            <rect
              x={x - 15}
              y="30"
              width="30"
              height="30"
              fill={isGap ? "#F59E0B" : "#FCD34D"}
              stroke="#F59E0B"
              strokeWidth="1.5"
              rx="4"
              opacity={isGap ? 0.5 : 0.85}
            />
            <text
              x={x}
              y="51"
              fontSize="14"
              fontWeight="bold"
              fill={isGap ? "#F59E0B" : "#000"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {num}
            </text>
            {idx < 4 && <path d={`M ${x + 18} 45 L ${x + 22} 45`} stroke="#F59E0B" strokeWidth="1.5" />}
          </g>
        );
      })}
      <text x="120" y="82" fontSize="10" fontWeight="bold" fill="#F59E0B" opacity="0.7" textAnchor="middle">
        Count forward: 12, 13, 14, __, 16
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Numbers 11-20",
    // Topic 1: Numbers 11-20 intro
    t1_title: "Numbers 11-20",
    t1_text: "After 10 comes 11, 12, 13... up to 20! Each number from 11-20 is made of 1 TEN and some ONES. For example: 15 = 1 ten + 5 ones.",
    t1_b1: "All numbers 11-20 start with 1 ten",
    t1_b2: "The second digit shows how many ONES",
    t1_b3: "Count: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
    t1_inst: "Tap the number 15 on the number line!",
    t1_h1: "It comes after 14 and before 16",
    t1_h2: "15 is in the middle of the range 11-20",
    t1_q: "What number comes after 17?",
    t1_q_16: "16",
    t1_q_18: "18",
    t1_q_19: "19",
    t1_q_14: "14",
    // Topic 2: Place value (tens and ones)
    t2_title: "Tens and Ones",
    t2_text: "Numbers 11-20 are made of 1 TEN (= 10 dots) and ONES (= single dots). For example: 14 = 1 ten + 4 ones. When you see 16, it means 1 ten and 6 ones!",
    t2_b1: "1 ten = 10 single dots in a rod",
    t2_b2: "Ones = single dots placed separately",
    t2_b3: "Together: 1 ten + some ones = the number",
    t2_inst: "Build the number 14! Tap the dots to select.",
    t2_h1: "14 needs 1 ten + 4 ones",
    t2_h2: "Start by selecting the ten-rod, then 4 ones",
    t2_q: "How many tens in the number 16?",
    t2_q_0: "0",
    t2_q_1: "1",
    t2_q_6: "6",
    t2_q_16: "16",
    // Topic 3: Sequences and counting
    t3_title: "Counting Forward",
    t3_text: "Count numbers in order: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Each number is one more than the previous. When you count forward, you go: 12, 13, 14, 15 (and so on!).",
    t3_b1: "Each number is one more than before",
    t3_b2: "Count in order from 11 to 20",
    t3_b3: "Every gap in a sequence has ONE answer",
    t3_inst: "Find the missing number: 12, 13, 14, __, 16!",
    t3_h1: "The gap is between 14 and 16",
    t3_h2: "14 + 1 = 15 — tap number 15!",
    t3_q: "What comes next: 14, 15, 16, __?",
    t3_q_13: "13",
    t3_q_17: "17",
    t3_q_18: "18",
    t3_q_19: "19",
  },
  de: {
    explorer_title: "Zahlen 11-20",
    t1_title: "Zahlen 11-20",
    t1_text: "Nach 10 kommt 11, 12, 13... bis 20! Jede Zahl von 11-20 besteht aus 1 ZEHNER und einigen EINERN. Zum Beispiel: 15 = 1 Zehner + 5 Einer.",
    t1_b1: "Alle Zahlen 11-20 beginnen mit 1 Zehner",
    t1_b2: "Die zweite Ziffer zeigt, wie viele EINER",
    t1_b3: "Zähle: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
    t1_inst: "Tippe auf die Zahl 15 auf dem Zahlenstrahl!",
    t1_h1: "Sie kommt nach 14 und vor 16",
    t1_h2: "15 ist in der Mitte des Bereichs 11-20",
    t1_q: "Welche Zahl kommt nach 17?",
    t1_q_16: "16",
    t1_q_18: "18",
    t1_q_19: "19",
    t1_q_14: "14",
    t2_title: "Zehner und Einer",
    t2_text: "Zahlen 11-20 bestehen aus 1 ZEHNER (= 10 Punkte) und EINERN (= einzelne Punkte). Zum Beispiel: 14 = 1 Zehner + 4 Einer. Wenn du 16 siehst, bedeutet es 1 Zehner und 6 Einer!",
    t2_b1: "1 Zehner = 10 einzelne Punkte in einem Stab",
    t2_b2: "Einer = einzelne Punkte separat angeordnet",
    t2_b3: "Zusammen: 1 Zehner + einige Einer = die Zahl",
    t2_inst: "Baue die Zahl 14! Tippe auf die Punkte.",
    t2_h1: "14 benötigt 1 Zehner + 4 Einer",
    t2_h2: "Beginne mit dem Zehnerstab, dann 4 Einer",
    t2_q: "Wie viele Zehner in der Zahl 16?",
    t2_q_0: "0",
    t2_q_1: "1",
    t2_q_6: "6",
    t2_q_16: "16",
    t3_title: "Vorwärts zählen",
    t3_text: "Zähle Zahlen der Reihe nach: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Jede Zahl ist eins mehr als die vorherige. Beim Vorwärtszählen geht es so: 12, 13, 14, 15 (und so weiter!).",
    t3_b1: "Jede Zahl ist eins mehr als vorher",
    t3_b2: "Zähle der Reihe nach von 11 bis 20",
    t3_b3: "Jede Lücke in einer Reihe hat EINE Antwort",
    t3_inst: "Finde die fehlende Zahl: 12, 13, 14, __, 16!",
    t3_h1: "Die Lücke ist zwischen 14 und 16",
    t3_h2: "14 + 1 = 15 — tippe auf 15!",
    t3_q: "Was kommt danach: 14, 15, 16, __?",
    t3_q_13: "13",
    t3_q_17: "17",
    t3_q_18: "18",
    t3_q_19: "19",
  },
  hu: {
    explorer_title: "Számok 11-20",
    t1_title: "Számok 11-20",
    t1_text: "A 10 után jön 11, 12, 13... 20-ig! A 11-20 közötti minden szám 1 TÍZESBŐL és néhány EGYESBŐL áll. Például: 15 = 1 tízes + 5 egyes.",
    t1_b1: "A 11-20 közötti számok mind 1 tízessel kezdődnek",
    t1_b2: "A második számjegy mutatja, hány EGYES",
    t1_b3: "Számolj: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
    t1_inst: "Koppints a számegyenesen a 15-re!",
    t1_h1: "A 14 után és a 16 előtt van",
    t1_h2: "A 15 a 11-20 tartomány közepén van",
    t1_q: "Melyik szám van a 17 után?",
    t1_q_16: "16",
    t1_q_18: "18",
    t1_q_19: "19",
    t1_q_14: "14",
    t2_title: "Tízesek és egyesek",
    t2_text: "A 11-20 közötti számok 1 TÍZESBŐL (= 10 pont) és EGYESEKBŐL (= egyetlen pontok) állnak. Például: 14 = 1 tízes + 4 egyes. Amikor látod a 16-ot, ez 1 tízes és 6 egyes!",
    t2_b1: "1 tízes = 10 egyedi pont egy rúdban",
    t2_b2: "Egyesek = egyedi pontok külön elhelyezve",
    t2_b3: "Együtt: 1 tízes + néhány egyes = a szám",
    t2_inst: "Építsd meg a 14-es számot! Koppints a pontokra.",
    t2_h1: "A 14-hez 1 tízes + 4 egyes kell",
    t2_h2: "Kezdd az ezerkiváló rúddal, majd 4 egyessel",
    t2_q: "Hány tízes van a 16-os számban?",
    t2_q_0: "0",
    t2_q_1: "1",
    t2_q_6: "6",
    t2_q_16: "16",
    t3_title: "Előre számolás",
    t3_text: "Számolj előre sorban: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Minden szám eggyel több az előzőnél. Az előre számoláskor így megy: 12, 13, 14, 15 (és így tovább!).",
    t3_b1: "Minden szám eggyel több az előzőnél",
    t3_b2: "Számolj sorban 11-től 20-ig",
    t3_b3: "Minden rés egy sorozatban EGY válasza van",
    t3_inst: "Találd meg a hiányzó számot: 12, 13, 14, __, 16!",
    t3_h1: "A rés 14 és 16 között van",
    t3_h2: "14 + 1 = 15 — koppints a 15-re!",
    t3_q: "Mi jön ezután: 14, 15, 16, __?",
    t3_q_13: "13",
    t3_q_17: "17",
    t3_q_18: "18",
    t3_q_19: "19",
  },
  ro: {
    explorer_title: "Numere 11-20",
    t1_title: "Numere 11-20",
    t1_text: "După 10 vin 11, 12, 13... până la 20! Fiecare număr de la 11-20 este format din 1 ZECE și câteva UNITĂȚI. De exemplu: 15 = 1 zece + 5 unități.",
    t1_b1: "Toate numerele 11-20 încep cu 1 zece",
    t1_b2: "A doua cifră arată câte UNITĂȚI",
    t1_b3: "Numără: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
    t1_inst: "Atinge numărul 15 pe linia numerelor!",
    t1_h1: "Vine după 14 și înainte de 16",
    t1_h2: "15 este în mijlocul intervalului 11-20",
    t1_q: "Ce număr vine după 17?",
    t1_q_16: "16",
    t1_q_18: "18",
    t1_q_19: "19",
    t1_q_14: "14",
    t2_title: "Zeci și unități",
    t2_text: "Numerele 11-20 sunt formate din 1 ZECE (= 10 puncte) și UNITĂȚI (= puncte unice). De exemplu: 14 = 1 zece + 4 unități. Când vezi 16, înseamnă 1 zece și 6 unități!",
    t2_b1: "1 zece = 10 puncte unice într-o bară",
    t2_b2: "Unități = puncte unice plasate separat",
    t2_b3: "Împreună: 1 zece + câteva unități = numărul",
    t2_inst: "Construiește numărul 14! Atinge punctele.",
    t2_h1: "14 are nevoie de 1 zece + 4 unități",
    t2_h2: "Începe cu bara de zecimi, apoi 4 unități",
    t2_q: "Câte zeci în numărul 16?",
    t2_q_0: "0",
    t2_q_1: "1",
    t2_q_6: "6",
    t2_q_16: "16",
    t3_title: "Numărare înainte",
    t3_text: "Numără numerele în ordine: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Fiecare număr este cu unu mai mult decât cel anterior. Când numeri înainte, mergi: 12, 13, 14, 15 (și tot așa!).",
    t3_b1: "Fiecare număr este cu unu mai mult decât cel anterior",
    t3_b2: "Numără în ordine de la 11 la 20",
    t3_b3: "Fiecare gol în secvență are UN răspuns",
    t3_inst: "Găsește numărul lipsă: 12, 13, 14, __, 16!",
    t3_h1: "Golul este între 14 și 16",
    t3_h2: "14 + 1 = 15 — atinge 15!",
    t3_q: "Ce vine mai departe: 14, 15, 16, __?",
    t3_q_13: "13",
    t3_q_17: "17",
    t3_q_18: "18",
    t3_q_19: "19",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Numbers 11-20
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <NumberLine1120Svg highlight={15} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 10,
      max: 20,
      start: 10,
      target: 15,
      showJumps: true,
      jumpCount: 5,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_16", "t1_q_18", "t1_q_19", "t1_q_14"],
      answer: "t1_q_18",
    },
  },

  // Topic 2: Place value (tens and ones)
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceValueSvg ones={4} label="14" />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "place-value",
      groups: [],
      tens: 1,
      ones: 4,
      answer: 14,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_0", "t2_q_1", "t2_q_6", "t2_q_16"],
      answer: "t2_q_1",
    },
  },

  // Topic 3: Sequences and counting forward
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <SequenceSvg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 10,
      max: 20,
      start: 13,
      target: 15,
      showJumps: true,
      jumpCount: 2,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_13", "t3_q_17", "t3_q_18", "t3_q_19"],
      answer: "t3_q_17",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔟",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────

const PlaceValue20Explorer = memo(function PlaceValue20Explorer({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_placevalue20" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValue20Explorer;
