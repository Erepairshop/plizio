"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Ly és j helyesírása", tx1: "A 'ly' és 'j' használata különbözik a magyar helyesírásban. Az 'ly' után általában nem jön magánhangzó önmagában.",
    q1: "Melyik szó helyesen írott?", a1: "halló", b1: "fellyel", c1: "hallyal", d1: "feljel",

    t2: "Egybe- és különírás", tx2: "Egybeszerkesztett szavakban az összetett szavak össze vannak írva (pl. 'háztetö'), míg különálló szavak külön (pl. 'nagy ház').",
    q2: "Melyik szó helyesen írott?", a2: "nagy ház", b2: "nagyház", c2: "negyház", d2: "negy-ház",

    t3: "Kötőjel használata", tx3: "A kötőjel összetett szavakban és előtagok után alkalmazható. Például: 'fél-anya', 'angol-magyar szótár'.",
    q3: "Melyik helyesen írott?", a3: "angol magyar szótár", b3: "angol-magyar szótár", c3: "angol/magyar szótár", d3: "angol-magyar-szótár",

    t4: "Nagybetű és kisbetű", tx4: "A mondatok és tulajdonnevek nagybetűvel kezdődnek. Köznevek, melléknevek általában kisbetűvel.",
    q4: "Melyik mondat helyesen írott?", a4: "piroska elment az erdőbe.", b4: "Piroska elment az Erdőbe.", c4: "Piroska elment az erdőbe.", d4: "piroska Elment az erdőbe.",

    t5: "Rövidítések és rövidítendő szavak", tx5: "A rövidítések után pontot szoktunk tenni, kivéve ha a rövidítés végső betűje megegyezik az eredeti szóval.",
    q5: "Melyik helyesen rövidített?", a5: "dr. (doktor)", b5: "Dr (doktor)", c5: "dr (doktor)", d5: "D.R. (doktor)",
  },
  de: {
    t1: "Schreibung von ly und j", tx1: "Die Verwendung von 'ly' und 'j' unterscheidet sich in der ungarischen Rechtschreibung. Nach 'ly' folgt normalerweise kein Vokal selbst.",
    q1: "Welches Wort ist korrekt geschrieben?", a1: "halló", b1: "fellyel", c1: "hallyal", d1: "feljel",

    t2: "Zusammen- und Getrenntschreibung", tx2: "In zusammengesetzten Wörtern werden die Komponenten zusammengeschrieben (z.B. 'háztetö'), während separate Wörter getrennt werden (z.B. 'nagy ház').",
    q2: "Welches Wort ist korrekt geschrieben?", a2: "nagy ház", b2: "nagyház", c2: "negyház", d2: "negy-ház",

    t3: "Bindestrichverwendung", tx3: "Der Bindestrich wird in zusammengesetzten Wörtern und nach Präfixen verwendet. Zum Beispiel: 'fél-anya', 'angol-magyar szótár'.",
    q3: "Welches ist korrekt geschrieben?", a3: "angol magyar szótár", b3: "angol-magyar szótár", c3: "angol/magyar szótár", d3: "angol-magyar-szótár",

    t4: "Groß- und Kleinschreibung", tx4: "Sätze und Eigennamen beginnen mit Großbuchstaben. Gemeine Namen und Adjektive sind normalerweise klein geschrieben.",
    q4: "Welcher Satz ist korrekt geschrieben?", a4: "piroska elment az erdőbe.", b4: "Piroska elment az Erdőbe.", c4: "Piroska elment az erdőbe.", d4: "piroska Elment az erdőbe.",

    t5: "Abkürzungen und zu kürzende Wörter", tx5: "Nach Abkürzungen setzen wir normalerweise einen Punkt, es sei denn, der letzte Buchstabe der Abkürzung entspricht dem ursprünglichen Wort.",
    q5: "Welches ist korrekt abgekürzt?", a5: "dr. (doktor)", b5: "Dr (doktor)", c5: "dr (doktor)", d5: "D.R. (doktor)",
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
          <text x="80" y="85" fontSize="32" fill="#FF6B9D" fontWeight="bold">ly</text>
          <text x="155" y="85" fontSize="32" fill="#4ECDC4" fontWeight="bold">j</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Helyesírás</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <rect x="15" y="50" width="95" height="60" rx="6" fill="#00D4FF" opacity="0.3" stroke="#00D4FF" strokeWidth="2" />
          <text x="62" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">nagy ház</text>
          <text x="62" y="70" textAnchor="middle" fontSize="10" fill="white/60">Külön</text>
          <rect x="130" y="50" width="95" height="60" rx="6" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="177" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">nagyház</text>
          <text x="177" y="70" textAnchor="middle" fontSize="10" fill="white/60">Egybe</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="30" y="60" width="60" height="40" rx="4" fill="#B44DFF" opacity="0.3" />
          <text x="60" y="88" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">angol</text>
          <text x="120" y="88" fontSize="20" fill="#B44DFF" fontWeight="bold">-</text>
          <rect x="150" y="60" width="60" height="40" rx="4" fill="#B44DFF" opacity="0.3" />
          <text x="180" y="88" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">magyar</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Kötőjel</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <text x="60" y="90" fontSize="28" fill="#FF9500" fontWeight="bold">A</text>
          <text x="90" y="90" fontSize="28" fill="#4ECDC4" fontWeight="bold">b</text>
          <text x="120" y="90" fontSize="28" fill="#4ECDC4" fontWeight="bold">c</text>
          <text x="150" y="90" fontSize="28" fill="#4ECDC4" fontWeight="bold">d</text>
          <text x="180" y="90" fontSize="28" fill="#4ECDC4" fontWeight="bold">e</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Nagybetű-kisbetű</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <text x="60" y="85" fontSize="24" fill="#95E1D3" fontWeight="bold">dr.</text>
          <circle cx="90" cy="85" r="5" fill="#95E1D3" />
          <text x="120" y="85" fontSize="24" fill="#6FAADB" fontWeight="bold">Mr</text>
          <circle cx="145" cy="85" r="5" fill="#95E1D3" />
          <text x="175" y="85" fontSize="24" fill="#FF6B9D" fontWeight="bold">Rev.</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Rövidítések</text>
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

export default function SpellingExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
