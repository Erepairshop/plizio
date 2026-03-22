"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Magánhangzók és mássalhangzók",
    text1: "A magyar nyelvben 14 magánhangzó és sok mássalhangzó van. A magánhangzók az a, e, i, o, ö, u, ü hangok. A mássalhangzók például: b, c, d, f, g, h, j, k, l, m, n, p, r, s, t, v, z.",
    q1: "Melyik a magánhangzó?",
    a1: "a",
    b1: "b",
    c1: "d",
    d1: "f",
    q2: "Hány magánhangzó van a magyar nyelvben?",
    a2: "14",
    b2: "10",
    c2: "8",
    d2: "12",
    title2: "Hangrend",
    text2: "A magyarban két hangrend létezik: az elöl artikulált (kerek: ö, ü és zárott: e, i) és a hátul artikulált (kerek: o, u és zárott: a). A hangrend határozza meg a toldalékok alakját.",
    q3: "Mely szó mutatja az elöl artikulált magánhangzókat?",
    a3: "kölyök",
    b3: "kutya",
    c3: "macska",
    d3: "ló",
    q4: "Melyek a zárott hátul artikulált magánhangzók?",
    a4: "a",
    b4: "e",
    c4: "i",
    d4: "ö",
    title3: "Hasonulás",
    text3: "A hasonulás akkor fordul elő, amikor egymás mellett álló hangok hasonlóvá válnak egymáshoz. Például: „kézzel" és „kézben" szavakban a z hang eltérően hangzik.",
    q5: "Mi a hasonulás?",
    a5: "hangok hasonlóvá válása",
    b5: "hangok eltűnése",
    c5: "hangok megduplázódása",
    d5: "hangok felcserélése",
    title4: "Mássalhangzó-torlódás",
    text4: "Az ugyanolyan helyről artikulált mássalhangzókat nem szokás egy szóban összeírni. Például: „sztrófa" helyett „sztrófát" írunk. A szavakban léteznek „mérgezett" hangzócsoportok, mint például: zs-cs, dz-gy-ny.",
    q6: "Melyik mássalhangzócsoportot használjuk gyakran?",
    a6: "sz-sz",
    b6: "str",
    c6: "ff",
    d6: "mm",
    q7: "Milyen hangok tartoznak a magyar fonológiai rendszerhez?",
    a7: "14 magánhangzó és sok mássalhangzó",
    b7: "10 magánhangzó és 10 mássalhangzó",
    c7: "5 magánhangzó és 20 mássalhangzó",
    d7: "20 magánhangzó és 20 mássalhangzó",
    title5: "Összefoglalás",
    text5: "A magyar hangrendszer bonyolult, de logikus szabályok követnek. A hangrend, a hasonulás és az artikulációs hely szabályozzák a szavak kiejtését és írását. Az alapos ismerkezés ezekkel a jelenségekkel segít a helyesírás tanulásában.",
    q8: "Mely fogalom a legfontosabb a magyar fonológiában?",
    a8: "hangrend",
    b8: "rímek",
    c8: "szótagok",
    d8: "betűtípusok",
    q9: "Melyik nem magánhangzó a felsorolásban?",
    a9: "k",
    b9: "e",
    c9: "i",
    d9: "ö",
  },
  de: {
    title1: "Vokale und Konsonanten",
    text1: "Im Ungarischen gibt es 14 Vokale und viele Konsonanten. Die Vokale sind: a, e, i, o, ö, u, ü. Die Konsonanten sind zum Beispiel: b, c, d, f, g, h, j, k, l, m, n, p, r, s, t, v, z.",
    q1: "Welcher ist ein Vokal?",
    a1: "a",
    b1: "b",
    c1: "d",
    d1: "f",
    q2: "Wie viele Vokale gibt es im Ungarischen?",
    a2: "14",
    b2: "10",
    c2: "8",
    d2: "12",
    title2: "Vokalharmonie",
    text2: "Es gibt zwei Vokalreihen: vordere (gerundete ö, ü und ungerundete e, i) und hintere (gerundete o, u und ungerundete a). Die Vokalharmonie bestimmt die Form von Suffixen.",
    q3: "Welches Wort zeigt die vorderen Vokale?",
    a3: "kölyök",
    b3: "kutya",
    c3: "macska",
    d3: "ló",
    q4: "Welche sind ungerundete hintere Vokale?",
    a4: "a",
    b4: "e",
    c4: "i",
    d4: "ö",
    title3: "Assimilation",
    text3: "Assimilation tritt auf, wenn benachbarte Laute ähnlich werden. Zum Beispiel: In den Wörtern „kézzel" und „kézben" klingt der z-Laut unterschiedlich.",
    q5: "Was ist Assimilation?",
    a5: "Laute werden ähnlich",
    b5: "Laute verschwinden",
    c5: "Laute verdoppeln sich",
    d5: "Laute werden getauscht",
    title4: "Konsonantenclusters",
    text4: "Konsonanten am gleichen Artikulationsort werden nicht gerne zusammengeschrieben. Zum Beispiel: statt „sztrófa" schreiben wir „sztrófát". Im Ungarischen gibt es Lautgruppen wie zs-cs, dz-gy-ny.",
    q6: "Welche Konsonantengruppe ist häufig?",
    a6: "sz-sz",
    b6: "str",
    c6: "ff",
    d6: "mm",
    q7: "Welche Laute gehören zum ungarischen Lautsystem?",
    a7: "14 Vokale und viele Konsonanten",
    b7: "10 Vokale und 10 Konsonanten",
    c7: "5 Vokale und 20 Konsonanten",
    d7: "20 Vokale und 20 Konsonanten",
    title5: "Zusammenfassung",
    text5: "Das ungarische Lautsystem ist komplex, folgt aber logischen Regeln. Vokalharmonie, Assimilation und Artikulationsort bestimmen die Aussprache und Schreibweise. Das gründliche Verständnis dieser Phänomene hilft beim Erlernen der Rechtschreibung.",
    q8: "Welcher Begriff ist am wichtigsten in der ungarischen Phonologie?",
    a8: "Vokalharmonie",
    b8: "Reime",
    c8: "Silben",
    d8: "Schrifttypen",
    q9: "Welcher ist kein Vokal?",
    a9: "k",
    b9: "e",
    c9: "i",
    d9: "ö",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ffe0f0 0%, #fff0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="60" fill="#FF2D78">
            🔊
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Hangtan
          </text>
        </svg>
      ),
      questions: [
        { question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" },
        { question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0f7ff 0%, #f0f9ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#00D4FF">
            ö ü
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Hangrend
          </text>
        </svg>
      ),
      questions: [
        { question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" },
        { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0ffe0 0%, #f0fff0 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#00FF88">
            ↔
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Hasonulás
          </text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fff0e0 0%, #fffaf0 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#FF9500">
            CC
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Torlódás
          </text>
        </svg>
      ),
      questions: [
        { question: "q6", choices: ["a6", "b6", "c6", "d6"], answer: "b6" },
        { question: "q7", choices: ["a7", "b7", "c7", "d7"], answer: "a7" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f0e0ff 0%, #faf0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#B44DFF">
            ✓
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Összegzés
          </text>
        </svg>
      ),
      questions: [
        { question: "q8", choices: ["a8", "b8", "c8", "d8"], answer: "a8" },
        { question: "q9", choices: ["a9", "b9", "c9", "d9"], answer: "a9" },
      ],
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
