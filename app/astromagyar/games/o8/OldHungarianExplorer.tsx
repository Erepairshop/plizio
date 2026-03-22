"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Ómagyar kori nyelvemlékek",
    text1: "Az ómagyar kor (1000-1500) nyelvi maradványai: Halotti beszéd, Tihanyi apátság alapítólevele, Ómagyar Mária-siralom.",
    hint1: "A Halotti beszéd a legrégebbi magyar szövegemlék (XI. sz.).",
    q1: "Melyik a legrégebbi fennmaradt magyar nyelvű szövegemlék?",
    a1: "Halotti beszéd", b1: "Tihanyi alapítólevél", c1: "Ómagyar Mária-siralom", d1: "Pais-kódex",

    title2: "Hangváltozások az ómagyar korban",
    text2: "Hangváltozások: ö → u átmenet, ny → gy hangsímulás, s → sz szótagváltás példái a régi szövegekben.",
    hint2: "Az ömagyar szövegek sok hangváltozást mutatnak a modern magyar helyett.",
    q2: "Milyen hangváltozást figyelhetünk meg az ómagyar szövegekben?",
    a2: "Nagyobb hangváltozás", b2: "Főleg szóvégi mássalhangzó-változás", c2: "Hely- és időjárási tényezők hatása", d2: "Írásmódváltás",

    title3: "A Tihanyi apátság alapítólevele",
    text3: "A Tihanyi alapítólevél (1055) II. András által adományozott okirat, mely magyar helyneveket tartalmaz.",
    hint3: "Ez a dokumentum magyar helyneveket őrzött meg.",
    q3: "Ki adományozta a Tihanyi apátság alapítólevelét?",
    a3: "I. István", b3: "II. András", c3: "III. Béla", d3: "IV. Béla",

    title4: "Ómagyar Mária-siralom",
    text4: "Az Ómagyar Mária-siralom egy 12. századi szöveg, mely Mária fájdalmát énekli meg az órifikus tradícióban.",
    hint4: "Ez egy vallásos költemény az Összefüggő magyar irodalom kezdeteiből.",
    q4: "Mi az Ómagyar Mária-siralom témája?",
    a4: "Mária fájdalma", b4: "Krisztus életútja", c4: "Apostolok története", d4: "Az Egyiptomi királyok",

    title5: "Ómagyar tanulságok",
    text5: "Az ómagyar szövegemlékek tanulsága: nyelvünk belső szerkezete, szókincs, és a magyar identitás alakulása.",
    hint5: "Az ómagyar szövegemlékek fontos kulturális és nyelvtörténeti forrásunk.",
    q5: "Milyen információt nyújtanak az ómagyar szövegemlékek a nyelvünkről?",
    a5: "Nyelvtörténeti információ", b5: "Csak az irányításról szóló adatok", c5: "Főleg vallásos szövegeket", d5: "Csak írásrendszert",
  },
  de: {
    title1: "Altungarische Sprachdenkm¨aler",
    text1: "Sprachreste aus der altungarischen Zeit (1000-1500): Totenrede, Gründungsurkunde der Abtei Tihany.",
    hint1: "Die Totenrede ist das älteste erhaltene ungarische Textdenkmal (11. Jh.).",
    q1: "Welches ist das älteste erhaltene ungarische Textdenkmal?",
    a1: "Totenrede", b1: "Tihanyer Gründungsurkunde", c1: "Altungarische Marienkl­age", d1: "Pais-Kodex",

    title2: "Lautveränderungen im Altungarischen",
    text2: "Lautveränderungen: ö → u Übergang, ny → gy Lautangleichung, s → sz Silbenwechsel.",
    hint2: "Die altungarischen Texte zeigen viele Lautveränderungen.",
    q2: "Welche Lautveränderung beobachten wir in altungarischen Texten?",
    a2: "Größere Lautveränderung", b2: "Hauptsächlich Auslautveränderung", c2: "Geografische und zeitliche Faktoren", d2: "Schreibweise",

    title3: "Gründungsurkunde von Tihany",
    text3: "Die Tihanyer Gründungsurkunde (1055) ist ein von Andreas II. ausgestelltes Dokument mit ungarischen Ortsnamen.",
    hint3: "Dieses Dokument hat ungarische Ortsnamen bewahrt.",
    q3: "Wer verlieh die Gründungsurkunde der Abtei Tihany?",
    a3: "Stephan I.", b3: "Andreas II.", c3: "Béla III.", d3: "Béla IV.",

    title4: "Altungarische Marienklage",
    text4: "Die Altungarische Marienklage ist ein Liedtext des 12. Jahrhunderts über Marias Schmerz.",
    hint4: "Dies ist ein religiöses Gedicht aus den Anfängen der zusammenhängenden ungarischen Literatur.",
    q4: "Welches ist das Thema der Altungarischen Marienklage?",
    a4: "Marias Schmerz", b4: "Christi Lebensweg", c4: "Geschichte der Apostel", d4: "Ägyptische Könige",

    title5: "Lektionen aus dem Altungarischen",
    text5: "Lehre aus altungarischen Sprachdenkm¨alern: innere Struktur unserer Sprache, Wortschatz und Kulturidentität.",
    hint5: "Altungarische Sprachdenkm¨aler sind eine wichtige kulturhistorische Quelle.",
    q5: "Welche Informationen liefern uns altungarische Sprachdenkm¨aler?",
    a5: "Sprachhistorische Information", b5: "Nur Daten über Verwaltung", c5: "Hauptsächlich religiöse Texte", d5: "Nur Schreibsystem",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      hintKey: "hint1",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">📜</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      hintKey: "hint2",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">🔤</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      hintKey: "hint3",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#10B981">🏛️</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      hintKey: "hint4",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF9500">🕊️</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      hintKey: "hint5",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">💎</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function OldHungarianExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
