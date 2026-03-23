"use client";
import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const PlaceValueGridSvg = memo(function PlaceValueGridSvg({ number = 5847 }: { number?: number }) {
  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  const places = [
    { value: thousands, label: "thousands", color: "#FF6B9D", abbr: "Th" },
    { value: hundreds, label: "hundreds", color: "#C44569", abbr: "H" },
    { value: tens, label: "tens", color: "#F8B195", abbr: "T" },
    { value: ones, label: "ones", color: "#FFD700", abbr: "O" },
  ];
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="pvg4G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFB3D9" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#pvg4G)" rx="16" />
      {places.map((place, col) => (
        <g key={col} transform={`translate(${20 + col * 55}, 50)`}>
          <text x="25" y="12" fontSize="10" fontWeight="bold" fill={place.color} textAnchor="middle">{place.abbr}</text>
          {Array.from({ length: Math.min(place.value, 3) }, (_, i) => (
            <rect key={i} x={i * 12} y="20" width="10" height="10" fill={place.color} opacity="0.7" rx="1" />
          ))}
          {place.value > 3 && (
            <text x="6" y="35" fontSize="9" fill={place.color} opacity="0.8" textAnchor="middle">+{place.value - 3}</text>
          )}
          <text x="25" y="55" fontSize="14" fontWeight="bold" fill={place.color} textAnchor="middle">{place.value}</text>
          <text x="25" y="68" fontSize="8" fill={place.color} opacity="0.7" textAnchor="middle">{place.label}</text>
        </g>
      ))}
      <text x="120" y="145" fontSize="18" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">{number}</text>
    </svg>
  );
});

const DecompositionSvg4 = memo(function DecompositionSvg4({ number = 5847 }: { number?: number }) {
  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  const parts = [thousands * 1000, hundreds * 100, tens * 10, ones];
  const colors = ["#FF6B9D", "#C44569", "#F8B195", "#FFD700"];
  return (
    <svg width="100%" viewBox="0 0 240 110">
      <text x="120" y="20" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">{number} = {parts.join(" + ")}</text>
      <g transform="translate(15, 40)">
        {parts.map((part, i) => (
          <g key={i} transform={`translate(${i * 55}, 0)`} opacity="1">
            <rect width="48" height="30" fill={colors[i]} opacity="0.15" rx="6" />
            <text x="24" y="12" fontSize="11" fontWeight="bold" fill={colors[i]} textAnchor="middle">{part}</text>
            <text x="24" y="24" fontSize="8" fill={colors[i]} textAnchor="middle" opacity="0.8">{["thousands", "hundreds", "tens", "ones"][i]}</text>
          </g>
        ))}
      </g>
    </svg>
  );
});

const ExpandedFormSvg = memo(function ExpandedFormSvg({ number = 5847 }: { number?: number }) {
  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  const digits = [
    { digit: thousands, place: "1000s", x: 40 },
    { digit: hundreds, place: "100s", x: 100 },
    { digit: tens, place: "10s", x: 160 },
    { digit: ones, place: "1s", x: 200 },
  ];
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="expandG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7FE3DE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#expandG)" rx="16" />
      <text x="120" y="20" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="middle">Expanded form:</text>
      {digits.map((d, i) => (
        <g key={i} transform={`translate(${d.x - 20}, 50)`}>
          <rect width="40" height="50" fill="rgba(255,255,255,0.08)" rx="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="20" y="20" fontSize="13" fontWeight="bold" fill="#FFD700" textAnchor="middle">{d.digit}</text>
          <text x="20" y="35" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle" fontWeight="500">×</text>
          <text x="20" y="50" fontSize="10" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">{d.place}</text>
        </g>
      ))}
      <text x="120" y="125" fontSize="12" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="middle">= {number}</text>
    </svg>
  );
});

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Place Value Explorer",
    t1_title: "Thousands, Hundreds, Tens, and Ones",
    t1_text: "A four-digit number is made of four place values: thousands, hundreds, tens, and ones. For example, 5847 = 5 thousands + 8 hundreds + 4 tens + 7 ones.",
    t1_b1: "Each digit tells us how many of that place value",
    t1_b2: "The leftmost digit is thousands",
    t1_b3: "Add all parts together to get the whole number",
    t1_q: "What is 3 thousands + 6 hundreds + 2 tens + 5 ones?",
    t1_q_3625: "3625",
    t1_q_3265: "3265",
    t1_q_5623: "5623",
    t1_q_6325: "6325",
    t2_title: "Breaking Down Large Numbers",
    t2_text: "We can break any four-digit number into its place values. For 7203: 7203 = 7000 + 200 + 0 + 3. Notice how zeros mean 'no tens'.",
    t2_b1: "Decomposition shows each place value",
    t2_b2: "Zeros mean that place is empty",
    t2_b3: "All parts add up to the original number",
    t2_q: "Which decomposition is correct for 6040?",
    t2_q_6040: "6000 + 0 + 40 + 0",
    t2_q_6400: "6000 + 400 + 0 + 0",
    t2_q_64: "600 + 40 + 0 + 0",
    t2_q_604: "60 + 0 + 40 + 0",
    t3_title: "Expanded Form",
    t3_text: "Expanded form shows a number as digits × place values. For 5847: (5 × 1000) + (8 × 100) + (4 × 10) + (7 × 1). This helps us understand each digit's real value.",
    t3_b1: "Each digit multiplies by its place value",
    t3_b2: "Place values are 1000, 100, 10, and 1",
    t3_b3: "Expanded form shows the true value of each digit",
    t3_q: "In 4382, what is the value of the digit 3?",
    t3_q_3: "3",
    t3_q_30: "30",
    t3_q_300: "300",
    t3_q_3000: "3000",
  },
  de: {
    explorer_title: "Stellenwert-Entdecker",
    t1_title: "Tausender, Hunderter, Zehner und Einer",
    t1_text: "Eine vierstellige Zahl besteht aus vier Stellenwerten: Tausender, Hunderter, Zehner und Einer. Zum Beispiel: 5847 = 5 Tausender + 8 Hunderter + 4 Zehner + 7 Einer.",
    t1_b1: "Jede Ziffer zeigt, wie viele dieser Stellenwert",
    t1_b2: "Die linke Ziffer ist der Tausender",
    t1_b3: "Addiere alle Teile zusammen",
    t1_q: "Was ist 3 Tausender + 6 Hunderter + 2 Zehner + 5 Einer?",
    t1_q_3625: "3625",
    t1_q_3265: "3265",
    t1_q_5623: "5623",
    t1_q_6325: "6325",
    t2_title: "Große Zahlen zerlegen",
    t2_text: "Wir können jede vierstellige Zahl in ihre Stellenwerte aufteilen. Für 7203: 7203 = 7000 + 200 + 0 + 3. Beachte: Null bedeutet 'kein Zehner'.",
    t2_b1: "Zerlegung zeigt jeden Stellenwert",
    t2_b2: "Nullen bedeuten, dieser Platz ist leer",
    t2_b3: "Alle Teile ergeben zusammen die ursprüngliche Zahl",
    t2_q: "Welche Zerlegung ist richtig für 6040?",
    t2_q_6040: "6000 + 0 + 40 + 0",
    t2_q_6400: "6000 + 400 + 0 + 0",
    t2_q_64: "600 + 40 + 0 + 0",
    t2_q_604: "60 + 0 + 40 + 0",
    t3_title: "Ausführliche Form",
    t3_text: "Die ausführliche Form zeigt eine Zahl als Ziffern × Stellenwerte. Für 5847: (5 × 1000) + (8 × 100) + (4 × 10) + (7 × 1). So verstehen wir den echten Wert jeder Ziffer.",
    t3_b1: "Jede Ziffer wird mit ihrem Stellenwert multipliziert",
    t3_b2: "Stellenwerte sind 1000, 100, 10 und 1",
    t3_b3: "Ausführliche Form zeigt den echten Wert",
    t3_q: "In 4382, was ist der Wert der Ziffer 3?",
    t3_q_3: "3",
    t3_q_30: "30",
    t3_q_300: "300",
    t3_q_3000: "3000",
  },
  hu: {
    explorer_title: "Helyiérték-felfedező",
    t1_title: "Ezres, százas, tízes és egyes",
    t1_text: "Egy négyjegyű szám négy helyiértékből áll: ezres, százas, tízes és egyes. Például: 5847 = 5 ezres + 8 százas + 4 tízes + 7 egyes.",
    t1_b1: "Minden számjegy megmutatja az adott helyiérték mennyiségét",
    t1_b2: "A bal szélső számjegy az ezres",
    t1_b3: "Add össze az részeket az egész szám megadásához",
    t1_q: "Mi az 3 ezres + 6 százas + 2 tízes + 5 egyes?",
    t1_q_3625: "3625",
    t1_q_3265: "3265",
    t1_q_5623: "5623",
    t1_q_6325: "6325",
    t2_title: "Nagyobb számok szétbontása",
    t2_text: "Bármilyen négyjegyű számot fel lehet bontani helyiértékeire. A 7203-nél: 7203 = 7000 + 200 + 0 + 3. Figyelj oda: a nulla azt jelenti, hogy nincsenek tízesek.",
    t2_b1: "A szétbontás mutatja az egyes helyiértékeket",
    t2_b2: "A nullák azt jelentik, hogy az adott hely üres",
    t2_b3: "Minden rész összeadva az eredeti számot adja",
    t2_q: "Melyik szétbontás helyes a 6040-re?",
    t2_q_6040: "6000 + 0 + 40 + 0",
    t2_q_6400: "6000 + 400 + 0 + 0",
    t2_q_64: "600 + 40 + 0 + 0",
    t2_q_604: "60 + 0 + 40 + 0",
    t3_title: "Kiterjesztett alak",
    t3_text: "A kiterjesztett alak egy számot számjegy × helyiérték formában mutat. A 5847-nél: (5 × 1000) + (8 × 100) + (4 × 10) + (7 × 1). Így megértjük minden számjegy valódi értékét.",
    t3_b1: "Minden számjegy a helyiértékével szorzódik",
    t3_b2: "A helyiértékek: 1000, 100, 10, 1",
    t3_b3: "A kiterjesztett alak mutatja az igazi értéket",
    t3_q: "A 4382-ben mekkora az 3-as számjegy értéke?",
    t3_q_3: "3",
    t3_q_30: "30",
    t3_q_300: "300",
    t3_q_3000: "3000",
  },
  ro: {
    explorer_title: "Explorare valori poziționale",
    t1_title: "Mii, sute, zeci și unități",
    t1_text: "Un număr cu patru cifre este format din patru valori poziționale: mii, sute, zeci și unități. De exemplu: 5847 = 5 mii + 8 sute + 4 zeci + 7 unități.",
    t1_b1: "Fiecare cifră arată câte sunt din acea valoare pozițională",
    t1_b2: "Cifra din stânga sunt miile",
    t1_b3: "Adună toate părțile pentru a obține numărul întreg",
    t1_q: "Ce este 3 mii + 6 sute + 2 zeci + 5 unități?",
    t1_q_3625: "3625",
    t1_q_3265: "3265",
    t1_q_5623: "5623",
    t1_q_6325: "6325",
    t2_title: "Descompunerea numerelor mari",
    t2_text: "Putem descompune orice număr cu patru cifre în valorile sale poziționale. Pentru 7203: 7203 = 7000 + 200 + 0 + 3. Observă: zero înseamnă 'fără zeci'.",
    t2_b1: "Descompunerea arată fiecare valoare pozițională",
    t2_b2: "Zerourile înseamnă că locul este gol",
    t2_b3: "Toate părțile adunate dau numărul original",
    t2_q: "Care descompunere este corectă pentru 6040?",
    t2_q_6040: "6000 + 0 + 40 + 0",
    t2_q_6400: "6000 + 400 + 0 + 0",
    t2_q_64: "600 + 40 + 0 + 0",
    t2_q_604: "60 + 0 + 40 + 0",
    t3_title: "Formă expandată",
    t3_text: "Forma expandată arată un număr ca cifre × valori poziționale. Pentru 5847: (5 × 1000) + (8 × 100) + (4 × 10) + (7 × 1). Aceasta ne ajută să înțelegem valoarea adevărată a fiecărei cifre.",
    t3_b1: "Fiecare cifră se înmulțește cu valoarea sa pozițională",
    t3_b2: "Valorile poziționale sunt 1000, 100, 10 și 1",
    t3_b3: "Forma expandată arată valoarea adevărată a fiecărei cifre",
    t3_q: "În 4382, care este valoarea cifrei 3?",
    t3_q_3: "3",
    t3_q_30: "30",
    t3_q_300: "300",
    t3_q_3000: "3000",
  },
};

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔢",
  rounds: [
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <PlaceValueGridSvg number={5847} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <PlaceValueGridSvg number={5847} />,
      questions: [{ question: "t1_q", choices: ["t1_q_3625", "t1_q_3265", "t1_q_5623", "t1_q_6325"], answer: "t1_q_3625" }],
    },
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionSvg4 number={7203} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionSvg4 number={6040} />,
      questions: [{ question: "t2_q", choices: ["t2_q_6040", "t2_q_6400", "t2_q_64", "t2_q_604"], answer: "t2_q_6040" }],
    },
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <ExpandedFormSvg number={5847} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <ExpandedFormSvg number={4382} />,
      questions: [
        { question: "t3_q", choices: ["t3_q_3", "t3_q_30", "t3_q_300", "t3_q_3000"], answer: "t3_q_300" },
        { question: "t1_q", choices: ["t1_q_3625", "t1_q_3265", "t1_q_5623", "t1_q_6325"], answer: "t1_q_3625" },
        { question: "t2_q", choices: ["t2_q_6040", "t2_q_6400", "t2_q_64", "t2_q_604"], answer: "t2_q_6040" },
      ],
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function PlaceValueExplorer4({ color = "#FF6B9D", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine def={EXPLORER_DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} grade={4} />
  );
}
