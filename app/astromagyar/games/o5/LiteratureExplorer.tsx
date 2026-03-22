"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Versformák", tx1: "A versformák különféle metrumokra osztódnak. Az alexandrin, a jambusz és a spondikus sorok a leggyakoriabbak a magyar irodalomban.",
    q1: "Melyik versmérték a jambusz?", a1: "— u — u — u", b1: "u — u — u —", c1: "— — — — — —", d1: "u u u u u u",

    t2: "Rím és rímkülönbség", tx2: "A rím a sorok végén szereplő hangzás-egyezés. A teljes rím minden hangzatra vonatkozik, míg a részleges rím csak néhányra.",
    q2: "Melyik egy teljes rím?", a2: "ház - hús", b2: "hall - harcol", c2: "tó - hó", d2: "bútor - búz",

    t3: "Lírikus műfajok", tx3: "A lírikus műfajok közé tartozik az óda, az elégia, a balladikus versek, az epigramma és a szatíra.",
    q3: "Melyik a legszemélyesebb lírikus műfaj?", a3: "Elbeszélő költemény", b3: "Óda", c3: "Elégia", d3: "Ballada",

    t4: "Metrikai lehetőségek", tx4: "A vers ritmusát a sorok metrikai szerkezete határozza meg. A verstani szabályok segítik a ritmus és a dallamosság érzékeltetését.",
    q4: "Melyik verstani eszköz használata a leggyakoribb?", a4: "Alliteration", b4: "Metafora", c4: "Spondeus", d4: "Rím",

    t5: "Irodalmi korszakok", tx5: "A magyar irodalom különféle korszakokra osztódik: Romantika, Realista, Szimbolista, Modernitás stb.",
    q5: "Melyik korszakban élt Petőfi Sándor?", a5: "Reneszánsz", b5: "Barokk", c5: "Romantika", d5: "Realista",
  },
  de: {
    t1: "Versformen", tx1: "Versformen werden in verschiedene Metren eingeteilt. Der Alexandriner, der Jambus und der Spondeus sind die häufigsten in der ungarischen Literatur.",
    q1: "Welches Versmaß ist ein Jambus?", a1: "— u — u — u", b1: "u — u — u —", c1: "— — — — — —", d1: "u u u u u u",

    t2: "Reim und Reimunterschied", tx2: "Der Reim ist die Klanggleichheit am Ende von Verszeilen. Ein vollständiger Reim bezieht sich auf alle Laute, ein teilweiser Reim nur auf einige.",
    q2: "Welcher ist ein vollständiger Reim?", a2: "ház - hús", b2: "hall - harcol", c2: "tó - hó", d2: "bútor - búz",

    t3: "Lyrische Gattungen", tx3: "Zu den lyrischen Gattungen gehören die Ode, die Elegie, die Balladenverse, das Epigramm und die Satire.",
    q3: "Welche ist die persönlichste lyrische Gattung?", a3: "Erzählgedicht", b3: "Ode", c3: "Elegie", d3: "Ballade",

    t4: "Metrische Möglichkeiten", tx4: "Der Rhythmus eines Gedichts wird durch die metrische Struktur der Zeilen bestimmt. Verstechnische Regeln tragen zur Wahrnehmung von Rhythmus und Melodiosität bei.",
    q4: "Welches Versstil-Mittel ist am häufigsten in Gebrauch?", a4: "Alliteration", b4: "Metapher", c4: "Spondeus", d4: "Reim",

    t5: "Literarische Epochen", tx5: "Die ungarische Literatur wird in verschiedene Epochen eingeteilt: Romantik, Realismus, Symbolismus, Moderne usw.",
    q5: "In welcher Epoche lebte Sándor Petőfi?", a5: "Renaissance", b5: "Barock", c5: "Romantik", d5: "Realismus",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f3a4d" />
          <text x="120" y="50" textAnchor="middle" fontSize="20" fill="#4ECDC4" fontWeight="bold">Versmérték</text>
          <line x1="30" y1="80" x2="50" y2="95" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="60" y1="95" x2="80" y2="80" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="90" y1="80" x2="110" y2="95" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="120" y1="95" x2="140" y2="80" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="150" y1="80" x2="170" y2="95" stroke="#4ECDC4" strokeWidth="2" />
          <line x1="180" y1="95" x2="200" y2="80" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Jambusz</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "b1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="20" y="50" width="80" height="60" rx="6" fill="#B44DFF" opacity="0.3" stroke="#B44DFF" strokeWidth="2" />
          <text x="60" y="87" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">Teljes rím</text>
          <rect x="140" y="50" width="80" height="60" rx="6" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="180" y="87" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">Részleges rím</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "c2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="60" y="70" fontSize="16" fill="#00D4FF" fontWeight="bold">Óda</text>
          <text x="120" y="70" fontSize="16" fill="#00D4FF" fontWeight="bold">Elégia</text>
          <text x="180" y="70" fontSize="16" fill="#00D4FF" fontWeight="bold">Ballada</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Lírikus műfajok</text>
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
          <circle cx="50" cy="60" r="12" fill="#FF6B9D" opacity="0.4" />
          <text x="50" y="67" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Ritmus</text>
          <circle cx="120" cy="60" r="12" fill="#4ECDC4" opacity="0.4" />
          <text x="120" y="67" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Rím</text>
          <circle cx="190" cy="60" r="12" fill="#95E1D3" opacity="0.4" />
          <text x="190" y="67" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Vers</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Verstani eszközök</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "d4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <text x="120" y="50" textAnchor="middle" fontSize="16" fill="#FF6B9D" fontWeight="bold">Irodalmi korszakok</text>
          <rect x="15" y="70" width="45" height="35" rx="4" fill="#B44DFF" opacity="0.3" />
          <text x="37" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Romantika</text>
          <rect x="70" y="70" width="45" height="35" rx="4" fill="#6FAADB" opacity="0.3" />
          <text x="92" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Realista</text>
          <rect x="125" y="70" width="45" height="35" rx="4" fill="#10B981" opacity="0.3" />
          <text x="147" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Modern</text>
          <rect x="180" y="70" width="45" height="35" rx="4" fill="#FF9500" opacity="0.3" />
          <text x="202" y="93" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Kortárs</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "c5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function LiteratureExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
