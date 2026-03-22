"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Stílus szintjei", tx1: "A nyelv használata különböző szinteken: beszéltnyelv (közvetlen), közszint (normális), köznyelv (formális). Minden megfelelő helye van.",
    q1: "Mely szint a legformálisabb?", a1: "köznyelv", b1: "beszéltnyelv", c1: "közszint", d1: "szárcínyelv",
    t2: "Szóképek: metafora", tx2: "A metafora nem szó szerinti hasonlat, hanem közvetlen azonosítás. Pl: \"Az élet egy utazás\" vagy \"Ő arany szív.\"",
    q2: "Melyik a metafora?", a2: "Az élet egy utazás", b2: "Az élet olyan, mint az utazás", c2: "Az élet könnyű", d2: "Az élet szürke",
    t3: "Szóképek: hasonlat", tx3: "A hasonlat szó szerinti összehasonlítás valami másikkal. Pl: \"Olyan szilaj, mint a szél\" vagy \"Csendes, mint az éjszaka.\"",
    q3: "Melyik a hasonlat?", a3: "Olyan szilaj, mint a szél", b3: "A szél szilaj", c3: "Szilaj szél", d3: "Szélsebesen szilaj",
    t4: "Metonímia és szinekdoché", tx4: "Metonímia: szócsere (pl: \"Olvass el egy Móriczot!\" - nem a szerzőt, hanem művét). Szinekdoché: rész helyett az egész vagy fordítva.",
    q4: "Mi a metonímia a mondatban: \"A város felvetette a lázadást\"?", a4: "a város lakói felvetették", b4: "a város épülete", c4: "a város szél", d4: "a város tér",
    t5: "Irodalmi stílusok gyakorlása", tx5: "Az irodalmi stílusok összessége teszi egyedivé az írót. Az egyéni stílus a szóválasztástól, ritmusától, képeitől függ.",
    q5: "Mit határozza meg az egyéni írói stílust?", a5: "szóválasztás, ritmus, képek", b5: "betűtípus", c5: "papírméret", d5: "ceruzaszín",
  },
  de: {
    t1: "Sprachebenen", tx1: "Die Sprache wird auf verschiedenen Ebenen verwendet: Umgangssprache (direkt), Standardsprache (normal), Formalsprache (förmlich). Jede hat ihren Platz.",
    q1: "Welche Ebene ist am formellsten?", a1: "Formalsprache", b1: "Umgangssprache", c1: "Standardsprache", d1: "Schriftsprache",
    t2: "Sprachbilder: Metapher", tx2: "Die Metapher ist kein wörtlicher Vergleich, sondern direkte Gleichsetzung. Z.B.: \"Das Leben ist eine Reise\" oder \"Er hat ein goldenes Herz.\"",
    q2: "Welche ist eine Metapher?", a2: "Das Leben ist eine Reise", b2: "Das Leben ist wie eine Reise", c2: "Das Leben ist leicht", d2: "Das Leben ist grau",
    t3: "Sprachbilder: Vergleich", tx3: "Der Vergleich ist ein wörtlicher Vergleich mit etwas anderem. Z.B.: \"Wild wie der Wind\" oder \"Still wie die Nacht.\"",
    q3: "Welcher ist ein Vergleich?", a3: "Wild wie der Wind", b3: "Der Wind ist wild", c3: "Wilder Wind", d3: "Wildheit des Windes",
    t4: "Metonymie und Synekdoche", tx4: "Metonymie: Wortvertauschung (z.B. \"Lies einen Móricz!\" - nicht den Autor, sondern sein Werk). Synekdoche: Teil statt Ganzes oder umgekehrt.",
    q4: "Was ist die Metonymie im Satz: 'Die Stadt erhob sich zum Aufstand'?", a4: "die Stadtbewohner erhoben sich", b4: "die Gebäude der Stadt", c4: "der Stadtwind", d4: "der Stadtplatz",
    t5: "Literarische Stile üben", tx5: "Der literarische Stil eines Autors besteht aus seinen Wortwahlentscheidungen, seinem Rhythmus und seinen Bildern.",
    q5: "Was bestimmt den individuellen Schreibstil?", a5: "Wortwahlentscheidungen, Rhythmus, Bilder", b5: "Schriftart", c5: "Papiergröße", d5: "Stiftfarbe",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fff8e1 0%, #fff59d 100%)" }}>
          <rect x="15" y="35" width="45" height="90" rx="6" fill="#fbc02d" opacity="0.3" stroke="#f57f17" strokeWidth="1.5" />
          <text x="37.5" y="85" textAnchor="middle" fontSize="10" fill="#f57f17" fontWeight="bold">Beszéltnyelv</text>
          <rect x="70" y="35" width="45" height="90" rx="6" fill="#fdd835" opacity="0.3" stroke="#f9a825" strokeWidth="1.5" />
          <text x="92.5" y="85" textAnchor="middle" fontSize="10" fill="#f57f17" fontWeight="bold">Közszint</text>
          <rect x="125" y="35" width="100" height="90" rx="6" fill="#ffee58" opacity="0.3" stroke="#f57f17" strokeWidth="1.5" />
          <text x="175" y="85" textAnchor="middle" fontSize="10" fill="#f57f17" fontWeight="bold">Köznyelv</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ffccbc 0%, #ffab91 100%)" }}>
          <defs>
            <linearGradient id="metaphorGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff5722", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#e64a19", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="50" r="25" fill="url(#metaphorGrad)" />
          <text x="60" y="55" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Élet</text>
          <path d="M 85 50 L 115 50" stroke="#ff5722" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <circle cx="160" cy="50" r="25" fill="url(#metaphorGrad)" />
          <text x="160" y="55" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Utazás</text>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#e64a19" fontWeight="bold">Szó szerinti azonosítás</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)" }}>
          <defs>
            <linearGradient id="simileGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4caf50", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#2e7d32", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="50" r="25" fill="url(#simileGrad)" />
          <text x="60" y="55" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">szilaj</text>
          <text x="120" y="55" textAnchor="middle" fontSize="14" fill="#2e7d32" fontWeight="bold">mint</text>
          <circle cx="160" cy="50" r="25" fill="url(#simileGrad)" />
          <text x="160" y="55" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">szél</text>
          <text x="120" y="130" textAnchor="middle" fontSize="11" fill="#2e7d32" fontWeight="bold">Szó szerinti hasonlat</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)" }}>
          <rect x="20" y="35" width="70" height="90" rx="6" fill="#9c27b0" opacity="0.3" stroke="#6a1b9a" strokeWidth="2" />
          <text x="55" y="60" textAnchor="middle" fontSize="10" fill="#6a1b9a" fontWeight="bold">Metonímia</text>
          <text x="55" y="85" textAnchor="middle" fontSize="9" fill="#4a148c">szócsere</text>
          <rect x="150" y="35" width="70" height="90" rx="6" fill="#ba68c8" opacity="0.3" stroke="#6a1b9a" strokeWidth="2" />
          <text x="185" y="60" textAnchor="middle" fontSize="10" fill="#6a1b9a" fontWeight="bold">Szinekdoché</text>
          <text x="185" y="85" textAnchor="middle" fontSize="9" fill="#4a148c">rész-egész</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%)" }}>
          <defs>
            <linearGradient id="styleGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#01579b", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#0277bd", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="70" r="22" fill="url(#styleGrad)" />
          <text x="50" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Szó</text>
          <circle cx="120" cy="70" r="22" fill="url(#styleGrad)" />
          <text x="120" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Ritmus</text>
          <circle cx="190" cy="70" r="22" fill="url(#styleGrad)" />
          <text x="190" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Képek</text>
          <path d="M 72 70 L 98 70" stroke="#0277bd" strokeWidth="1.5" />
          <path d="M 142 70 L 168 70" stroke="#0277bd" strokeWidth="1.5" />
          <text x="120" y="145" textAnchor="middle" fontSize="10" fill="#01579b" fontWeight="bold">= Egyéni stílus</text>
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

export default function StyleBasicsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
