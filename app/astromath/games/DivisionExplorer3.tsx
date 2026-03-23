"use client";
// DivisionExplorer3 — Division Island (Sharing, Grouping, Inverse of Multiplication)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Sharing (fair distribution) ────────────────────────────────────────

const SharingSvg = memo(function SharingSvg({ total = 12, groups = 3 }: { total?: number; groups?: number }) {
  const each = total / groups;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="sharG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#66FFB2" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#sharG)" rx="16" />

      {/* Total items at top */}
      <g transform="translate(50, 15)">
        <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#00FF88" opacity="0.8">
          Total: {total}
        </text>
      </g>

      {/* Distribute into groups */}
      {Array.from({ length: groups }, (_, g) => {
        const startX = 20 + (g % 2) * 110;
        const startY = 50 + Math.floor(g / 2) * 45;
        return (
          <g key={g} transform={`translate(${startX}, ${startY})`}>
            {Array.from({ length: each }, (_, i) => (
              <circle key={i} cx={i * 16 + 8} cy="0" r="5" fill="#00FF88" opacity="0.7" />
            ))}
            <text x={each * 8} y="22" fontSize="10" fontWeight="bold" fill="#00FF88">
              {each}
            </text>
          </g>
        );
      })}

      {/* Result */}
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#00CC66" textAnchor="middle" opacity="0.8">
        {total} ÷ {groups} = {each}
      </text>
    </svg>
  );
});

// ─── SVG: Grouping (making equal groups) ─────────────────────────────────────

const GroupingSvg = memo(function GroupingSvg({ total = 12, groupSize = 3 }: { total?: number; groupSize?: number }) {
  const numGroups = total / groupSize;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="grpSvg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#66FFB2" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#grpSvg)" rx="16" />

      {/* Items grouped */}
      {Array.from({ length: numGroups }, (_, g) => {
        const startX = 20 + (g % 2) * 110;
        const startY = 50 + Math.floor(g / 2) * 45;
        return (
          <g key={g} transform={`translate(${startX}, ${startY})`}>
            <rect x="0" y="0" width={groupSize * 14 + 8} height="18" fill="rgba(0, 255, 136, 0.1)" rx="2" />
            {Array.from({ length: groupSize }, (_, i) => (
              <circle key={i} cx={i * 14 + 8} cy="9" r="4" fill="#00FF88" opacity="0.7" />
            ))}
            <text x={groupSize * 7 + 4} y="32" fontSize="10" fontWeight="bold" fill="#00FF88" textAnchor="middle">
              {groupSize}
            </text>
          </g>
        );
      })}

      {/* Result */}
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#00CC66" textAnchor="middle" opacity="0.8">
        {total} ÷ {groupSize} = {numGroups}
      </text>
    </svg>
  );
});

// ─── SVG: Inverse of multiplication ──────────────────────────────────────────

const InverseSvg = memo(function InverseSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="invG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#66FFB2" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#invG)" rx="16" />

      {/* Multiplication equation */}
      <g transform="translate(30, 20)">
        <text x="0" y="0" fontSize="13" fontWeight="bold" fill="#00FF88">
          3 × 4 = 12
        </text>
      </g>

      {/* Arrow down */}
      <line x1="120" y1="45" x2="120" y2="60" stroke="#00FF88" strokeWidth="2" opacity="0.4" />

      {/* Division equation */}
      <g transform="translate(30, 75)">
        <text x="0" y="0" fontSize="13" fontWeight="bold" fill="#00FF88">
          12 ÷ 4 = 3
        </text>
      </g>

      {/* Connection text */}
      <text x="120" y="128" fontSize="11" fontWeight="bold" fill="#00CC66" textAnchor="middle" opacity="0.7">
        Multiplication ↔ Division
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Division Explorer",
    // Topic 1: Sharing
    t1_title: "Sharing Equally",
    t1_text: "Division is sharing fairly! If you have 12 items and 3 people, each person gets 4. That's 12 ÷ 3 = 4.",
    t1_b1: "Start with total items",
    t1_b2: "Share into equal groups",
    t1_b3: "Each gets the same amount",
    t1_inst: "Share 12 items among 3 friends!",
    t1_h1: "12 items, 3 friends",
    t1_h2: "Each friend gets 4 items",
    t1_q: "If 15 apples are shared by 5 children, how many each?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_15: "15",
    // Topic 2: Grouping
    t2_title: "Making Equal Groups",
    t2_text: "Division is also making equal groups! 12 ÷ 3 means: make groups of 3 from 12 items. How many groups can you make? 4 groups!",
    t2_b1: "Start with total items",
    t2_b2: "Make groups of the same size",
    t2_b3: "Count how many groups",
    t2_inst: "How many groups of 4 in 16?",
    t2_h1: "16 items, make groups of 4",
    t2_h2: "You can make 4 groups",
    t2_q: "16 ÷ 2 = how many groups of 2?",
    t2_q_6: "6",
    t2_q_8: "8",
    t2_q_14: "14",
    t2_q_18: "18",
    // Topic 3: Inverse of multiplication
    t3_title: "Division is Opposite of Multiplication",
    t3_text: "Multiplication and division are opposites! If 3 × 4 = 12, then 12 ÷ 4 = 3 and 12 ÷ 3 = 4.",
    t3_b1: "Multiplication: 3 × 4 = 12",
    t3_b2: "Division: 12 ÷ 4 = 3",
    t3_b3: "They're connected!",
    t3_inst: "If 5 × 6 = 30, what is 30 ÷ 6?",
    t3_h1: "Use multiplication to check division",
    t3_h2: "If 5 × 6 = 30, then 30 ÷ 6 = 5",
    t3_q: "If 4 × 8 = 32, what is 32 ÷ 4?",
    t3_q_4: "4",
    t3_q_8: "8",
    t3_q_32: "32",
    t3_q_2: "2",
  },
  de: {
    explorer_title: "Division entdecken",
    t1_title: "Gerecht teilen",
    t1_text: "Division ist gerechtes Teilen! Wenn du 12 Gegenstände und 3 Personen hast, bekommt jede Person 4. Das ist 12 ÷ 3 = 4.",
    t1_b1: "Beginne mit Gesamtgegenständen",
    t1_b2: "Teile in gleiche Gruppen",
    t1_b3: "Jeder bekommt gleich viel",
    t1_inst: "Teile 12 Gegenstände unter 3 Freunden!",
    t1_h1: "12 Gegenstände, 3 Freunde",
    t1_h2: "Jeder Freund bekommt 4 Gegenstände",
    t1_q: "Wenn 15 Äpfel auf 5 Kinder verteilt werden, wie viele jedes?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_15: "15",
    t2_title: "Gleiche Gruppen bilden",
    t2_text: "Division ist auch das Bilden gleicher Gruppen! 12 ÷ 3 bedeutet: Mache Gruppen von 3 aus 12 Gegenständen. Wie viele Gruppen kannst du machen? 4 Gruppen!",
    t2_b1: "Beginne mit Gesamtgegenständen",
    t2_b2: "Mache Gruppen gleicher Größe",
    t2_b3: "Zähle, wie viele Gruppen",
    t2_inst: "Wie viele Gruppen von 4 in 16?",
    t2_h1: "16 Gegenstände, mache Gruppen von 4",
    t2_h2: "Du kannst 4 Gruppen machen",
    t2_q: "16 ÷ 2 = wie viele Gruppen von 2?",
    t2_q_6: "6",
    t2_q_8: "8",
    t2_q_14: "14",
    t2_q_18: "18",
    t3_title: "Division ist das Gegenteil von Multiplikation",
    t3_text: "Multiplikation und Division sind Gegensätze! Wenn 3 × 4 = 12, dann 12 ÷ 4 = 3 und 12 ÷ 3 = 4.",
    t3_b1: "Multiplikation: 3 × 4 = 12",
    t3_b2: "Division: 12 ÷ 4 = 3",
    t3_b3: "Sie sind verbunden!",
    t3_inst: "Wenn 5 × 6 = 30, was ist 30 ÷ 6?",
    t3_h1: "Benutze Multiplikation, um Division zu überprüfen",
    t3_h2: "Wenn 5 × 6 = 30, dann 30 ÷ 6 = 5",
    t3_q: "Wenn 4 × 8 = 32, was ist 32 ÷ 4?",
    t3_q_4: "4",
    t3_q_8: "8",
    t3_q_32: "32",
    t3_q_2: "2",
  },
  hu: {
    explorer_title: "Osztás felfedezés",
    t1_title: "Igazságos felosztás",
    t1_text: "Az osztás igazságos felosztás! Ha 12 tárgyad van és 3 ember, mindegyik ember 4-et kap. Ez 12 ÷ 3 = 4.",
    t1_b1: "Kezd az összes tárggyal",
    t1_b2: "Oszd fel egyenlő csoportokra",
    t1_b3: "Mindenki ugyanannyit kap",
    t1_inst: "Oszd meg a 12 tárgyat 3 barát között!",
    t1_h1: "12 tárgy, 3 barát",
    t1_h2: "Minden barát 4 tárgyat kap",
    t1_q: "Ha 15 almát 5 gyerek között osztod, mekkora egy-egy?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_15: "15",
    t2_title: "Egyenlő csoportok készítése",
    t2_text: "Az osztás egyenlő csoportok készítése is! 12 ÷ 3 azt jelenti: készíts 3-as csoportokat 12 tárgyból. Hány csoportot tudsz készíteni? 4 csoport!",
    t2_b1: "Kezd az összes tárggyal",
    t2_b2: "Készíts egyenlő méretű csoportokat",
    t2_b3: "Számold meg, hány csoport van",
    t2_inst: "Hány 4-es csoport van 16-ban?",
    t2_h1: "16 tárgy, készíts 4-es csoportokat",
    t2_h2: "4 csoportot tudsz készíteni",
    t2_q: "16 ÷ 2 = hány 2-es csoport?",
    t2_q_6: "6",
    t2_q_8: "8",
    t2_q_14: "14",
    t2_q_18: "18",
    t3_title: "Az osztás a szorzás ellentéte",
    t3_text: "A szorzás és az osztás ellentétes! Ha 3 × 4 = 12, akkor 12 ÷ 4 = 3 és 12 ÷ 3 = 4.",
    t3_b1: "Szorzás: 3 × 4 = 12",
    t3_b2: "Osztás: 12 ÷ 4 = 3",
    t3_b3: "Összekapcsolódnak!",
    t3_inst: "Ha 5 × 6 = 30, mi az 30 ÷ 6?",
    t3_h1: "Használd a szorzást az osztás ellenőrzésére",
    t3_h2: "Ha 5 × 6 = 30, akkor 30 ÷ 6 = 5",
    t3_q: "Ha 4 × 8 = 32, mi az 32 ÷ 4?",
    t3_q_4: "4",
    t3_q_8: "8",
    t3_q_32: "32",
    t3_q_2: "2",
  },
  ro: {
    explorer_title: "Explorare împărțire",
    t1_title: "Sharing Just",
    t1_text: "Împărțirea este distribuirea corectă! Dacă ai 12 obiecte și 3 persoane, fiecare persoană primește 4. Asta e 12 ÷ 3 = 4.",
    t1_b1: "Începe cu obiecte totale",
    t1_b2: "Distribuie în grupuri egale",
    t1_b3: "Fiecare primește la fel",
    t1_inst: "Distribuie 12 obiecte între 3 prieteni!",
    t1_h1: "12 obiecte, 3 prieteni",
    t1_h2: "Fiecare prieten primește 4 obiecte",
    t1_q: "Dacă 15 mere sunt distribuite între 5 copii, câte fiecare?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_15: "15",
    t2_title: "Formarea grupurilor egale",
    t2_text: "Împărțirea este și formarea de grupuri egale! 12 ÷ 3 înseamnă: formează grupuri de 3 din 12 obiecte. Câte grupuri poți forma? 4 grupuri!",
    t2_b1: "Începe cu obiecte totale",
    t2_b2: "Formează grupuri de aceeași dimensiune",
    t2_b3: "Numără câte grupuri",
    t2_inst: "Câte grupuri de 4 în 16?",
    t2_h1: "16 obiecte, formează grupuri de 4",
    t2_h2: "Poți forma 4 grupuri",
    t2_q: "16 ÷ 2 = câte grupuri de 2?",
    t2_q_6: "6",
    t2_q_8: "8",
    t2_q_14: "14",
    t2_q_18: "18",
    t3_title: "Împărțire este opusul înmulțirii",
    t3_text: "Înmulțirea și împărțirea sunt opuse! Dacă 3 × 4 = 12, atunci 12 ÷ 4 = 3 și 12 ÷ 3 = 4.",
    t3_b1: "Înmulțire: 3 × 4 = 12",
    t3_b2: "Împărțire: 12 ÷ 4 = 3",
    t3_b3: "Sunt conectate!",
    t3_inst: "Dacă 5 × 6 = 30, ce este 30 ÷ 6?",
    t3_h1: "Folosește înmulțirea pentru a verifica împărțirea",
    t3_h2: "Dacă 5 × 6 = 30, atunci 30 ÷ 6 = 5",
    t3_q: "Dacă 4 × 8 = 32, ce este 32 ÷ 4?",
    t3_q_4: "4",
    t3_q_8: "8",
    t3_q_32: "32",
    t3_q_2: "2",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➗",
  rounds: [
    // ─ R1: Sharing ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <SharingSvg total={12} groups={3} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <SharingSvg total={12} groups={3} />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_3", "t1_q_4", "t1_q_5", "t1_q_15"],
          answer: "t1_q_3",
        },
      ],
    },

    // ─ R2: Grouping ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <GroupingSvg total={16} groupSize={4} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <GroupingSvg total={16} groupSize={4} />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_6", "t2_q_8", "t2_q_14", "t2_q_18"],
          answer: "t2_q_8",
        },
      ],
    },

    // ─ R3: Inverse of multiplication ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <InverseSvg />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <InverseSvg />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_2", "t3_q_4", "t3_q_8", "t3_q_32"],
          answer: "t3_q_8",
        },
        {
          question: "t1_q",
          choices: ["t1_q_3", "t1_q_4", "t1_q_5", "t1_q_15"],
          answer: "t1_q_3",
        },
        {
          question: "t2_q",
          choices: ["t2_q_6", "t2_q_8", "t2_q_14", "t2_q_18"],
          answer: "t2_q_8",
        },
      ],
    },
  ],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function DivisionExplorer3({ color = "#00FF88", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={3}
    />
  );
}
