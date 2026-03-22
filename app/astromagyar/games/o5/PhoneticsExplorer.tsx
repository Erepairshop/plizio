"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Magánhangzók", tx1: "A magyar nyelvben 14 magánhangzó van. Elöl képzett: e, é, i, í. Közép: a, á. Hátul képzett: o, ó, ö, ő, u, ú, ü, ű.",
    q1: "Melyik a hátul képzett magánhangzó?", a1: "u", b1: "e", c1: "i", d1: "é",
    t2: "Mássalhangzók", tx2: "A mássalhangzók a levegő áramlásában akadályt képeznek. Például: b, c, d, f, g, h, j, k, l, m, n, p, r, s, sz, t, v, z, zs.",
    q2: "Hány mássalhangzó van az alábbi szóban: \"kutya\"?", a2: "kettő", b2: "egy", c2: "három", d2: "négy",
    t3: "Hangrend", tx3: "A magyar nyelvben a hangrend szabálya: elöl képzett magánhangzó után elöl képzett, hátul után hátul. Például: marok (nem marék).",
    q3: "Melyik szó követi helyesen a hangrend szabályát?", a3: "otthon", b3: "etek", c3: "ippar", d3: "únalom",
    t4: "Illeszkedés", tx4: "Az utótagok magánhangzója igazodik az előtag hangjához: ház-ban, ágya-t, csapa-t.",
    q4: "Mi a helyes végzet az alábbi szóhoz: \"szív___\"?", a4: "szív-em", b4: "szív-om", c4: "szív-um", d4: "szív-im",
    t5: "Hangtan gyakorlás", tx5: "Hallgass oda a szavak hangjára! Az utolsó hangtalan zöngésség is számít: ad-hoz vagy ad-nak?",
    q5: "Melyik szóban van olyan mássalhangzó-pár, amely gyakran felcserélhető?", a5: "szerep (sz-p)", b5: "ablak", c5: "óra", d5: "kör",
  },
  de: {
    t1: "Vokale", tx1: "Das Ungarische hat 14 Vokale. Vordere: e, é, i, í. Mittlere: a, á. Hintere: o, ó, ö, ő, u, ú, ü, ű.",
    q1: "Welcher ist ein hinterer Vokal?", a1: "u", b1: "e", c1: "i", d1: "é",
    t2: "Konsonanten", tx2: "Konsonanten bilden eine Blockade in der Luftströmung. Beispiele: b, c, d, f, g, h, j, k, l, m, n, p, r, s, sz, t, v, z, zs.",
    q2: "Wie viele Konsonanten hat das Wort 'kutya'?", a2: "zwei", b2: "eins", c2: "drei", d2: "vier",
    t3: "Vokalharmonie", tx3: "Die ungarische Vokalharmonie: vordere nach vorne, hintere nach hinten. Beispiel: marok (nicht marék).",
    q3: "Welches Wort folgt der Vokalharmonie korrekt?", a3: "otthon", b3: "etek", c3: "ippar", d3: "únalom",
    t4: "Angleichung", tx4: "Die Vokale der Suffixe passen sich dem Wortstamm an: ház-ban, ágya-t, csapa-t.",
    q4: "Was ist das korrekte Suffix für 'szív___'?", a4: "szív-em", b4: "szív-om", c4: "szív-um", d4: "szív-im",
    t5: "Lautlehre üben", tx5: "Achte auf die Laute der Wörter! Auch die Stimmlosigkeit von Konsonanten zählt.",
    q5: "Welches Wort hat Konsonanten, die oft verwechselt werden?", a5: "szerep (sz-p)", b5: "ablak", c5: "óra", d5: "kör",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e5f5 0%, #e8d5f2 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="url(#grad1)" opacity="0.5" />
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#b084cc", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#8b5a8c", stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <text x="60" y="80" textAnchor="middle" fontSize="24" fill="#6b4c8a" fontWeight="bold">a e i u</text>
          <text x="180" y="80" textAnchor="middle" fontSize="24" fill="#8b5a8c" fontWeight="bold">ö ü ő ű</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)" }}>
          <rect x="20" y="30" width="40" height="100" rx="8" fill="#c2185b" opacity="0.3" />
          <text x="40" y="90" textAnchor="middle" fontSize="20" fill="#880e4f" fontWeight="bold">b d g</text>
          <rect x="100" y="30" width="40" height="100" rx="8" fill="#e91e63" opacity="0.3" />
          <text x="120" y="90" textAnchor="middle" fontSize="20" fill="#ad1457" fontWeight="bold">p t k</text>
          <rect x="180" y="30" width="40" height="100" rx="8" fill="#f06292" opacity="0.3" />
          <text x="200" y="90" textAnchor="middle" fontSize="20" fill="#c2185b" fontWeight="bold">f s z</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)" }}>
          <defs>
            <linearGradient id="harmonyLeft" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ffb74d", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#ff9800", stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="harmonyRight" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ffd54f", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#fbc02d", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <circle cx="70" cy="80" r="30" fill="url(#harmonyLeft)" />
          <text x="70" y="85" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">elöl</text>
          <circle cx="170" cy="80" r="30" fill="url(#harmonyRight)" />
          <text x="170" y="85" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">hátul</text>
          <path d="M 100 80 L 140 80" stroke="#ff9800" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)" }}>
          <rect x="30" y="50" width="70" height="60" rx="8" fill="#1976d2" opacity="0.2" stroke="#1976d2" strokeWidth="2" />
          <text x="65" y="85" textAnchor="middle" fontSize="18" fill="#0d47a1" fontWeight="bold">szív</text>
          <rect x="140" y="50" width="70" height="60" rx="8" fill="#42a5f5" opacity="0.3" stroke="#1976d2" strokeWidth="2" />
          <text x="175" y="85" textAnchor="middle" fontSize="18" fill="#0d47a1" fontWeight="bold">-em</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)" }}>
          <defs>
            <linearGradient id="soundWave" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ab47bc", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#7b1fa2", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path d="M 20 80 Q 35 50, 50 80 T 80 80 T 110 80 T 140 80 T 170 80 T 200 80" stroke="url(#soundWave)" strokeWidth="3" fill="none" />
          <circle cx="120" cy="130" r="6" fill="#7b1fa2" opacity="0.8" />
          <circle cx="130" cy="135" r="4" fill="#7b1fa2" opacity="0.6" />
          <circle cx="110" cy="135" r="4" fill="#7b1fa2" opacity="0.6" />
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

export default function PhoneticsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
