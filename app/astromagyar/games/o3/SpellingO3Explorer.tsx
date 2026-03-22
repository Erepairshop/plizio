"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Egybe-különírás", tx1: "Néhány szó egybeírható vagy különírható. Például: 'visszajött' vagy 'vissza jött'.",
    q1: "Melyik helyes?", a1: "visszajött", b1: "vissza jött", c1: "visszajöt", d1: "vissza joett",

    t2: "Szóösszetételek helyesírása", tx2: "Az összetett szavakat általában egybeírjuk. Például: 'ceruzatartó', 'könyvespolc'.",
    q2: "Melyik összetett szó jó?", a2: "ceruza tartó", b2: "ceruzatartó", c2: "ceruza-tartó", d2: "Ceruza Tartó",

    t3: "Kötőjeles írás", tx3: "Néha kötőjellel írunk szavakat, különösen ha nehéz az olvasás. Például: 'közép-iskolai'.",
    q3: "Melyik igaz?", a3: "középiskola", b3: "közép iskola", c3: "közép-iskolai", d3: "Közép Iskola",

    t4: "Ékezetek helyes használata", tx4: "Az ékezetek fontos részei a helyesírásnak. Például: 'kép', 'könyv', 'iskola'.",
    q4: "Melyik szó jó ékezettel?", a4: "konyv", b4: "könyv", c4: "kőnyv", d4: "könyv",

    t5: "Helyesírás összefoglalása", tx5: "A helyes helyesírás fontos a tiszta és érthető írásban.",
    q5: "Melyik mondat helyes?", a5: "A ceruzatartó asztalon van.", b5: "A ceruza tartó asztalon van.", c5: "A ceruzatartó asztalon van", d5: "a ceruzatartó asztalon van",
  },
  de: {
    t1: "Getrennt- oder Zusammenschreibung", tx1: "Manche Wörter können zusammen oder getrennt geschrieben werden. Zum Beispiel: 'zurückgekommen' oder 'zurück gekommen'.",
    q1: "Welches ist richtig?", a1: "zurückgekommen", b1: "zurück gekommen", c1: "zurückgekomen", d1: "zurück geckommen",

    t2: "Schreibung zusammengesetzter Wörter", tx2: "Zusammengesetzte Wörter werden in der Regel zusammengeschrieben. Zum Beispiel: 'Stifthalter', 'Bücherstapel'.",
    q2: "Welches zusammengesetzte Wort ist richtig?", a2: "Stift Halter", b2: "Stifthalter", c2: "Stift-Halter", d2: "Stift halter",

    t3: "Bindestrich-Schreibung", tx3: "Manchmal schreiben wir Wörter mit Bindestrich, besonders wenn es schwer zu lesen ist.",
    q3: "Welches ist richtig?", a3: "Hauptschule", b3: "Haupt Schule", c3: "Haupt-Schuler", d3: "Haupt schule",

    t4: "Diakritika-Verwendung", tx4: "Diakritika sind wichtige Teile der Rechtschreibung. Zum Beispiel: 'Bild', 'Buch', 'Schule'.",
    q4: "Welches Wort hat die richtige Diakritika?", a4: "Buch", b4: "Buch", c4: "Buch", d4: "Buch",

    t5: "Rechtschreibung zusammengefasst", tx5: "Die richtige Rechtschreibung ist wichtig für klares und verständliches Schreiben.",
    q5: "Welcher Satz ist richtig?", a5: "Der Stifthalter steht auf dem Tisch.", b5: "Der Stift Halter steht auf dem Tisch.", c5: "Der Stifthalter steht auf dem Tisch", d5: "der Stifthalter steht auf dem Tisch",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a52" />
          <rect x="20" y="55" width="90" height="50" rx="4" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="65" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">visszajött</text>
          <text x="130" y="85" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">vs</text>
          <rect x="150" y="55" width="70" height="50" rx="4" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="185" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">vissza jött</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="30" y="55" width="180" height="50" rx="4" fill="none" stroke="#95E1D3" strokeWidth="2" />
          <text x="120" y="85" textAnchor="middle" fontSize="14" fill="#95E1D3" fontWeight="bold">ceruzatartó</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="80" y="85" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">közép-iskola</text>
          <text x="150" y="85" textAnchor="middle" fontSize="16" fill="#FFD700" fontWeight="bold">-</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "c3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <text x="60" y="70" textAnchor="middle" fontSize="20" fill="#FFD700" fontWeight="bold">á é í ó ú ő ű</text>
          <text x="120" y="120" textAnchor="middle" fontSize="11" fill="white/60">ékezetes magánhangzók</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <circle cx="120" cy="70" r="35" fill="none" stroke="#FFD700" strokeWidth="2" />
          <text x="120" y="78" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">helyesírás</text>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="white/60">tiszta írás</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function SpellingO3Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
