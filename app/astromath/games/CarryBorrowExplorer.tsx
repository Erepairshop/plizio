"use client";
// CarryBorrowExplorer — Addition with carrying / Subtraction with borrowing for Grade 2 (islands i5, i6)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Carrying (ones overflow into tens) ──────────────────────────────────

const CarrySvg = memo(function CarrySvg({ a = 47, b = 36 }: { a?: number; b?: number }) {
  const onesA = a % 10; const onesB = b % 10;
  const onesSum = onesA + onesB;
  const carry = onesSum >= 10 ? 1 : 0;
  const result = a + b;
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="carryG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#carryG)" rx="16" />
      {/* Carry label */}
      {carry === 1 && (
        <g>
          <circle cx="122" cy="22" r="12" fill="#FFD700" opacity="0.9" />
          <text x="122" y="22" fontSize="13" fontWeight="900"
            fill="#1a1a2e" textAnchor="middle" dominantBaseline="middle">1</text>
          <text x="165" y="22" fontSize="9" fill="#FFD700" opacity="0.7"
            textAnchor="middle" dominantBaseline="middle">← carry</text>
        </g>
      )}
      {/* Column headers */}
      <text x="138" y="42" fontSize="10" fontWeight="700"
        fill="#06B6D4" textAnchor="middle" opacity="0.75">T</text>
      <text x="185" y="42" fontSize="10" fontWeight="700"
        fill="#FFD700" textAnchor="middle" opacity="0.75">O</text>
      <line x1="110" y1="46" x2="210" y2="46"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="160" y1="44" x2="160" y2="140"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* + */}
      <text x="100" y="78" fontSize="18" fontWeight="900"
        fill="rgba(255,255,255,0.5)" textAnchor="middle" dominantBaseline="middle">+</text>
      {/* Row A */}
      <text x="138" y="78" fontSize="22" fontWeight="900"
        fill="#06B6D4" textAnchor="middle" dominantBaseline="middle">{Math.floor(a/10)}</text>
      <text x="185" y="78" fontSize="22" fontWeight="900"
        fill="#FFD700" textAnchor="middle" dominantBaseline="middle">{onesA}</text>
      {/* Row B */}
      <text x="138" y="110" fontSize="22" fontWeight="900"
        fill="#06B6D4" textAnchor="middle" dominantBaseline="middle">{Math.floor(b/10)}</text>
      <text x="185" y="110" fontSize="22" fontWeight="900"
        fill="#FFD700" textAnchor="middle" dominantBaseline="middle">{onesB}</text>
      {/* Result line */}
      <line x1="110" y1="122" x2="210" y2="122"
        stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      {/* Result */}
      <text x="138" y="144" fontSize="22" fontWeight="900"
        fill="#B44DFF" textAnchor="middle" dominantBaseline="middle">{Math.floor(result/10)}</text>
      <text x="185" y="144" fontSize="22" fontWeight="900"
        fill="#B44DFF" textAnchor="middle" dominantBaseline="middle">{result%10}</text>
    </svg>
  );
});

// ─── SVG: Borrowing (borrow from tens when ones aren't enough) ────────────────

const BorrowSvg = memo(function BorrowSvg({ a = 62, b = 35 }: { a?: number; b?: number }) {
  const onesA = a % 10; const onesB = b % 10;
  const needBorrow = onesA < onesB;
  const result = a - b;
  return (
    <svg width="100%" viewBox="0 0 240 155">
      <defs>
        <linearGradient id="borrowG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9B9B" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="155" fill="url(#borrowG)" rx="16" />
      {needBorrow && (
        <g>
          <text x="120" y="20" fontSize="9" fill="#FF6B6B" opacity="0.8" textAnchor="middle">
            {onesA} &lt; {onesB} → borrow 1 ten!
          </text>
          <text x="120" y="33" fontSize="9" fill="#FF6B6B" opacity="0.6" textAnchor="middle">
            {onesA} + 10 = {onesA + 10}  |  tens: {Math.floor(a/10)} − 1 = {Math.floor(a/10) - 1}
          </text>
        </g>
      )}
      <text x="138" y="52" fontSize="10" fontWeight="700"
        fill="#06B6D4" textAnchor="middle" opacity="0.75">T</text>
      <text x="185" y="52" fontSize="10" fontWeight="700"
        fill="#FFD700" textAnchor="middle" opacity="0.75">O</text>
      <line x1="110" y1="56" x2="210" y2="56"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="160" y1="54" x2="160" y2="135"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="100" y="85" fontSize="18" fontWeight="900"
        fill="rgba(255,255,255,0.5)" textAnchor="middle" dominantBaseline="middle">−</text>
      <text x="138" y="85" fontSize="22" fontWeight="900"
        fill="#06B6D4" textAnchor="middle" dominantBaseline="middle">{Math.floor(a/10)}</text>
      <text x="185" y="85" fontSize="22" fontWeight="900"
        fill="#FFD700" textAnchor="middle" dominantBaseline="middle">{onesA}</text>
      <text x="138" y="115" fontSize="22" fontWeight="900"
        fill="#06B6D4" textAnchor="middle" dominantBaseline="middle">{Math.floor(b/10)}</text>
      <text x="185" y="115" fontSize="22" fontWeight="900"
        fill="#FFD700" textAnchor="middle" dominantBaseline="middle">{onesB}</text>
      <line x1="110" y1="127" x2="210" y2="127"
        stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <text x="138" y="147" fontSize="22" fontWeight="900"
        fill="#FF6B6B" textAnchor="middle" dominantBaseline="middle">{Math.floor(result/10)}</text>
      <text x="185" y="147" fontSize="22" fontWeight="900"
        fill="#FF6B6B" textAnchor="middle" dominantBaseline="middle">{result%10}</text>
    </svg>
  );
});

// ─── SVG: Overview both operations ───────────────────────────────────────────

const OverviewSvg = memo(function OverviewSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="ovG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill="url(#ovG)" rx="16" />
      {/* Carry side */}
      <text x="60" y="30" fontSize="10" fontWeight="700"
        fill="#B44DFF" textAnchor="middle" opacity="0.85">CARRY</text>
      <text x="60" y="60" fontSize="20" fontWeight="900"
        fill="rgba(255,255,255,0.8)" textAnchor="middle">47 + 36</text>
      <text x="60" y="85" fontSize="14" fontWeight="800"
        fill="#B44DFF" textAnchor="middle">= 83</text>
      <text x="60" y="105" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">
        ones overflow → +1 ten
      </text>
      {/* Divider */}
      <line x1="120" y1="20" x2="120" y2="110"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Borrow side */}
      <text x="180" y="30" fontSize="10" fontWeight="700"
        fill="#FF6B6B" textAnchor="middle" opacity="0.85">BORROW</text>
      <text x="180" y="60" fontSize="20" fontWeight="900"
        fill="rgba(255,255,255,0.8)" textAnchor="middle">62 − 35</text>
      <text x="180" y="85" fontSize="14" fontWeight="800"
        fill="#FF6B6B" textAnchor="middle">= 27</text>
      <text x="180" y="105" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle">
        ones not enough → −1 ten
      </text>
    </svg>
  );
});

// ─── Labels ───────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Carrying & Borrowing",
    t1_title: "Carrying in Addition",
    t1_text: "When ones add up to 10 or more, we CARRY 1 ten to the tens column! 47 + 36: ones: 7 + 6 = 13 → write 3, carry 1. Tens: 4 + 3 + 1 (carry) = 8. Answer: 83!",
    t1_b1: "Ones sum ≥ 10 → carry 1 ten",
    t1_b2: "Write the ones digit, carry the 1",
    t1_b3: "Add the carry to the tens column",
    t1_inst: "Start at 47 and add 36 — watch the carry!",
    t1_h1: "Ones: 7+6=13. Write 3, carry 1. Tens: 4+3+1=8",
    t1_h2: "Answer is 83 — tap 83!",
    t1_q: "What is 58 + 27?",
    t1_q_85: "85",
    t1_q_715: "715",
    t1_q_75: "75",
    t1_q_80: "80",
    t2_title: "Borrowing in Subtraction",
    t2_text: "When we can't subtract ones (top < bottom), we BORROW 1 ten! 62 − 35: ones: 2 < 5 → borrow 1 ten: 12 − 5 = 7. Tens: 6 − 1 (borrowed) − 3 = 2. Answer: 27!",
    t2_b1: "Ones top < ones bottom → borrow 1 ten",
    t2_b2: "Top ones gets +10, tens gets −1",
    t2_b3: "Then subtract normally",
    t2_inst: "Start at 62 and subtract 35 — watch the borrow!",
    t2_h1: "Ones: 2<5, borrow: 12−5=7. Tens: 6−1−3=2",
    t2_h2: "Answer is 27 — tap 27!",
    t2_q: "What is 74 − 38?",
    t2_q_36: "36",
    t2_q_112: "112",
    t2_q_44: "44",
    t2_q_46: "46",
    t3_title: "Carry or Borrow?",
    t3_text: "How do you know which to use? For ADDITION: if ones ≥ 10, carry. For SUBTRACTION: if top ones < bottom ones, borrow. Check the ones column first!",
    t3_b1: "Addition: ones ≥ 10 → carry",
    t3_b2: "Subtraction: top < bottom → borrow",
    t3_b3: "Always check the ones column first!",
    t3_inst: "Start at 65 and add 48 — carry the ten!",
    t3_h1: "Ones: 5+8=13. Write 3, carry 1. Tens: 6+4+1=11",
    t3_h2: "Answer is 113 — tap 113!",
    t3_q: "65 + 48 = ?",
    t3_q_113: "113",
    t3_q_1013: "1013",
    t3_q_103: "103",
    t3_q_11: "11",
  },
  de: {
    explorer_title: "Übertrag & Entbündeln",
    t1_title: "Übertrag beim Addieren",
    t1_text: "Wenn die Einer 10 oder mehr ergeben, TRAGEN wir 1 Zehner über! 47 + 36: Einer: 7 + 6 = 13 → schreibe 3, Übertrag 1. Zehner: 4 + 3 + 1 = 8. Ergebnis: 83!",
    t1_b1: "Einersumme ≥ 10 → 1 Zehner übertragen",
    t1_b2: "Einerziffer aufschreiben, 1 übertragen",
    t1_b3: "Übertrag zur Zehnerspalte addieren",
    t1_inst: "Starte bei 47 und addiere 36 — beachte den Übertrag!",
    t1_h1: "Einer: 7+6=13. Schreibe 3, Übertrag 1. Zehner: 4+3+1=8",
    t1_h2: "Ergebnis ist 83 — tippe auf 83!",
    t1_q: "Was ist 58 + 27?",
    t1_q_85: "85",
    t1_q_715: "715",
    t1_q_75: "75",
    t1_q_80: "80",
    t2_title: "Entbündeln beim Subtrahieren",
    t2_text: "Wenn wir die Einer nicht subtrahieren können (oben < unten), ENTBÜNDELN wir 1 Zehner! 62 − 35: Einer: 2 < 5 → Entbündeln: 12 − 5 = 7. Zehner: 6 − 1 − 3 = 2. Ergebnis: 27!",
    t2_b1: "Einer oben < Einer unten → Entbündeln",
    t2_b2: "Einer +10, Zehner −1",
    t2_b3: "Dann normal subtrahieren",
    t2_inst: "Starte bei 62 und subtrahiere 35 — beachte das Entbündeln!",
    t2_h1: "Einer: 2<5, Entbündeln: 12−5=7. Zehner: 6−1−3=2",
    t2_h2: "Ergebnis ist 27 — tippe auf 27!",
    t2_q: "Was ist 74 − 38?",
    t2_q_36: "36",
    t2_q_112: "112",
    t2_q_44: "44",
    t2_q_46: "46",
    t3_title: "Übertrag oder Entbündeln?",
    t3_text: "Woran erkennst du es? Bei ADDITION: Einer ≥ 10 → Übertrag. Bei SUBTRAKTION: oben < unten → Entbündeln. Immer zuerst die Einerspalte prüfen!",
    t3_b1: "Addition: Einer ≥ 10 → Übertrag",
    t3_b2: "Subtraktion: oben < unten → Entbündeln",
    t3_b3: "Immer zuerst die Einerspalte prüfen!",
    t3_inst: "Starte bei 65 und addiere 48 — Übertrag beachten!",
    t3_h1: "Einer: 5+8=13. Schreibe 3, Übertrag 1. Zehner: 6+4+1=11",
    t3_h2: "Ergebnis ist 113 — tippe auf 113!",
    t3_q: "65 + 48 = ?",
    t3_q_113: "113",
    t3_q_1013: "1013",
    t3_q_103: "103",
    t3_q_11: "11",
  },
  hu: {
    explorer_title: "Átvitel és kölcsönzés",
    t1_title: "Átvitel az összeadásban",
    t1_text: "Ha az egyesek összege 10 vagy több, ÁTVISZÜNK 1 tízest a tízesek oszlopba! 47 + 36: egyesek: 7 + 6 = 13 → írj 3-at, vigyél át 1-et. Tízesek: 4 + 3 + 1 = 8. Eredmény: 83!",
    t1_b1: "Egyesek összege ≥ 10 → 1 tízes átvitele",
    t1_b2: "Egyes számjegyet leírjuk, az 1-et visszük",
    t1_b3: "Az átvitt 1-et a tízesek oszlophoz adjuk",
    t1_inst: "Indulj a 47-ről és add hozzá a 36-ot — figyeld az átvitelt!",
    t1_h1: "Egyesek: 7+6=13. Írj 3-at, vigy át 1-et. Tízesek: 4+3+1=8",
    t1_h2: "Az eredmény 83 — koppints a 83-ra!",
    t1_q: "Mennyi 58 + 27?",
    t1_q_85: "85",
    t1_q_715: "715",
    t1_q_75: "75",
    t1_q_80: "80",
    t2_title: "Kölcsönzés a kivonásban",
    t2_text: "Ha az egyeseket nem tudjuk kivonni (felső < alsó), KÖLCSÖNZÜNK 1 tízest! 62 − 35: egyesek: 2 < 5 → kölcsönzés: 12 − 5 = 7. Tízesek: 6 − 1 − 3 = 2. Eredmény: 27!",
    t2_b1: "Felső egyes < alsó egyes → kölcsönzés",
    t2_b2: "Egyesek +10 kapnak, tízesek −1 veszítenek",
    t2_b3: "Majd normálisan kivonunk",
    t2_inst: "Indulj a 62-ről és von ki 35-öt — figyeld a kölcsönzést!",
    t2_h1: "Egyesek: 2<5, kölcsönzés: 12−5=7. Tízesek: 6−1−3=2",
    t2_h2: "Az eredmény 27 — koppints a 27-re!",
    t2_q: "Mennyi 74 − 38?",
    t2_q_36: "36",
    t2_q_112: "112",
    t2_q_44: "44",
    t2_q_46: "46",
    t3_title: "Átvitel vagy kölcsönzés?",
    t3_text: "Honnan tudod, melyiket? ÖSSZEADÁSNÁL: ha egyesek ≥ 10, átvitel. KIVONASNÁL: ha felső < alsó, kölcsönzés. Mindig az egyesek oszlopát ellenőrizd először!",
    t3_b1: "Összeadás: egyesek ≥ 10 → átvitel",
    t3_b2: "Kivonás: felső < alsó → kölcsönzés",
    t3_b3: "Mindig az egyesek oszlopát ellenőrizd!",
    t3_inst: "Indulj a 65-ről és add hozzá a 48-at — vigy át!",
    t3_h1: "Egyesek: 5+8=13. Írj 3-at, vigy át 1-et. Tízesek: 6+4+1=11",
    t3_h2: "Az eredmény 113 — koppints a 113-ra!",
    t3_q: "65 + 48 = ?",
    t3_q_113: "113",
    t3_q_1013: "1013",
    t3_q_103: "103",
    t3_q_11: "11",
  },
  ro: {
    explorer_title: "Transport și împrumut",
    t1_title: "Transport la adunare",
    t1_text: "Când unitățile dau 10 sau mai mult, TRANSPORTĂM 1 zece la coloana zecilor! 47 + 36: unități: 7 + 6 = 13 → scriem 3, transport 1. Zeci: 4 + 3 + 1 = 8. Rezultat: 83!",
    t1_b1: "Suma unităților ≥ 10 → transport 1 zece",
    t1_b2: "Scriem cifra unităților, transportăm 1",
    t1_b3: "Adăugăm transportul la coloana zecilor",
    t1_inst: "Pornește de la 47 și adaugă 36 — urmărește transportul!",
    t1_h1: "Unități: 7+6=13. Scriem 3, transport 1. Zeci: 4+3+1=8",
    t1_h2: "Rezultatul este 83 — atinge 83!",
    t1_q: "Cât este 58 + 27?",
    t1_q_85: "85",
    t1_q_715: "715",
    t1_q_75: "75",
    t1_q_80: "80",
    t2_title: "Împrumut la scădere",
    t2_text: "Când nu putem scădea unitățile (sus < jos), ÎMPRUMUTĂM 1 zece! 62 − 35: unități: 2 < 5 → împrumut: 12 − 5 = 7. Zeci: 6 − 1 − 3 = 2. Rezultat: 27!",
    t2_b1: "Unități sus < unități jos → împrumut",
    t2_b2: "Unități primesc +10, zeci pierd −1",
    t2_b3: "Apoi scădem normal",
    t2_inst: "Pornește de la 62 și scade 35 — urmărește împrumutul!",
    t2_h1: "Unități: 2<5, împrumut: 12−5=7. Zeci: 6−1−3=2",
    t2_h2: "Rezultatul este 27 — atinge 27!",
    t2_q: "Cât este 74 − 38?",
    t2_q_36: "36",
    t2_q_112: "112",
    t2_q_44: "44",
    t2_q_46: "46",
    t3_title: "Transport sau împrumut?",
    t3_text: "Cum știi care să folosești? La ADUNARE: unități ≥ 10 → transport. La SCĂDERE: sus < jos → împrumut. Verifică întâi coloana unităților!",
    t3_b1: "Adunare: unități ≥ 10 → transport",
    t3_b2: "Scădere: sus < jos → împrumut",
    t3_b3: "Verifică întotdeauna coloana unităților!",
    t3_inst: "Pornește de la 65 și adaugă 48 — transportă!",
    t3_h1: "Unități: 5+8=13. Scriem 3, transport 1. Zeci: 6+4+1=11",
    t3_h2: "Rezultatul este 113 — atinge 113!",
    t3_q: "65 + 48 = ?",
    t3_q_113: "113",
    t3_q_1013: "1013",
    t3_q_103: "103",
    t3_q_11: "11",
  },
};

// ─── Topic definitions ────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <CarrySvg a={47} b={36} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 78,
      max: 92,
      step: 1,
      start: 58,
      target: 85,
      showJumps: true,
      jumpCount: 27,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_715", "t1_q_75", "t1_q_80", "t1_q_85"],
      answer: "t1_q_85",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <BorrowSvg a={62} b={35} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 20,
      max: 45,
      step: 1,
      start: 62,
      target: 27,
      showJumps: true,
      jumpCount: 35,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_112", "t2_q_44", "t2_q_46", "t2_q_36"],
      answer: "t2_q_36",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <OverviewSvg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [6, 5],
      answer: 113,
      blockIcon: "🟣",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_1013", "t3_q_103", "t3_q_11", "t3_q_113"],
      answer: "t3_q_113",
    },
  },
];

// ─── Explorer definition ──────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔢",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const CarryBorrowExplorer = memo(function CarryBorrowExplorer({
  color = "#B44DFF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="math_g2_carryborrow" color={color} lang={lang} onDone={onDone} />;
});

export default CarryBorrowExplorer;
