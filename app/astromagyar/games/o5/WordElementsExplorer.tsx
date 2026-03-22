"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Szótő és toldalék",
    text1: "A szó alapegysége a szótő. Ehhez toldalékokat adhatunk. A szótő a szó tartalma, az alapjelentést hordozza. Például: 'ház' szótő, 'házak' szóban a toldalék az '-ak' végződés.",
    q1: "Mi a szótő?",
    a1: "a szó alapegysége",
    b1: "a szó végződése",
    c1: "a szó kezdete",
    d1: "egy szócsalád",
    q2: "Mely szóban van toldalék?",
    a2: "házak",
    b2: "ház",
    c2: "háza",
    d2: "házban",
    title2: "Képzők",
    text2: "A képzők új szavakat hoznak létre. Például: 'tanít' szóból a képzővel 'tanító' vagy 'tanítás' lehet. A képzők megváltoztathatják a szó szófaját is: főnévből lehet melléknevé vagy igenevé.",
    q3: "Mi a képző feladata?",
    a3: "új szavakat hozni létre",
    b3: "a szó számát jelezni",
    c3: "a szó időjét jelezni",
    d3: "a szó hangsúlyát jelölni",
    q4: "Melyik a képző az 'olvasás' szóban?",
    a4: "-ás",
    b4: "-ol",
    c4: "-vas",
    d4: "-ás-ol",
    title3: "Jelek",
    text3: "A jelek a szó grammatikai funkcióját jelölik, de nem hoznak új szavakat létre. Például: a '-t' tárgyeset-jel, a '-nak/-nek' részeshatározó-jel. A jelek megjelenése kötelező az adott grammatikai helyzetben.",
    q5: "Mi a jel?",
    a5: "grammatikai funkciót jelöl",
    b5: "új szót hoz létre",
    c5: "a szót szótagokra osztja",
    d5: "a szó hangejtését mutatja",
    q6: "Melyik a jel az 'háznak' szóban?",
    a6: "-nak",
    b6: "-ház",
    c6: "-nnak",
    d6: "-nak-nak",
    title4: "Ragok",
    text4: "A ragok a toldalékok egy fajtája, amelyek a szó viszonyát jelölik. Például: alanyeset, tárgyeset, részeshatározó, helyhatározó. A magyar nyelvben több mint 20 eset létezik. Például: 'macska' → 'macskában' (helyhatározó rag).",
    q7: "Mit fejeznek ki a ragok?",
    a7: "a szó viszonyát",
    b7: "az ige idejét",
    c7: "a szó hangsúlyát",
    d7: "a szó hosszúságát",
    q8: "Melyik szóban van helyhatározó rag?",
    a8: "házban",
    b8: "házak",
    c8: "házat",
    d8: "háznak",
    title5: "Szóelemzés gyakorlatban",
    text5: "A szóelemzés során azonosítjuk a szótövet, képzőket, jeleket és ragokat. Például: 'tanítóhöz' szóban: 'tanít' szótő + '-ó' képző (tanító) + '-hoz' rag (allativus). Ez a szisztematikus megközelítés segít a helyesírásban és a nyelvtanban.",
    q9: "Mi a 'olvasónak' szó szótője?",
    a9: "olvas",
    b9: "olvasó",
    c9: "olvaso",
    d9: "olvas-ó-nak",
    q10: "Hány elemből áll a 'tanítóban' szó?",
    a10: "3 (szótő, képző, rag)",
    b10: "2 (szótő, rag)",
    c10: "4 (szótő, 2 képző, rag)",
    d10: "1 (szótő)",
  },
  de: {
    title1: "Wortstamm und Suffix",
    text1: "Die Grundeinheit eines Wortes ist der Wortstamm. Dazu können Suffixe hinzugefügt werden. Der Stamm trägt die grundlegende Bedeutung. Zum Beispiel: 'ház' ist der Stamm, 'házak' enthält das Suffix '-ak'.",
    q1: "Was ist ein Wortstamm?",
    a1: "die Grundeinheit eines Wortes",
    b1: "die Endung eines Wortes",
    c1: "der Anfang eines Wortes",
    d1: "eine Wortfamilie",
    q2: "Welches Wort hat ein Suffix?",
    a2: "házak",
    b2: "ház",
    c2: "háza",
    d2: "házban",
    title2: "Ableitungssuffixe",
    text2: "Ableitungssuffixe bilden neue Wörter. Zum Beispiel: aus 'tanít' kann 'tanító' oder 'tanítás' werden. Suffixe können die Wortart ändern: von Nomen zu Adjektiv oder Verbalsubstantiv.",
    q3: "Was ist die Aufgabe eines Ableitungssuffixes?",
    a3: "neue Wörter zu bilden",
    b3: "die Anzahl anzuzeigen",
    c3: "die Zeit anzuzeigen",
    d3: "den Akzent zu markieren",
    q4: "Welches ist das Suffix in 'olvasás'?",
    a4: "-ás",
    b4: "-ol",
    c4: "-vas",
    d4: "-ás-ol",
    title3: "Kasusmarkierungen",
    text3: "Kasusmarkierungen zeigen die grammatikalische Funktion an, bilden aber keine neuen Wörter. Zum Beispiel: '-t' für Akkusativ, '-nak/-nek' für Dativ. Sie sind obligatorisch in bestimmten grammatikalischen Positionen.",
    q5: "Was ist eine Kasusmarkierung?",
    a5: "zeigt grammatikalische Funktion",
    b5: "bildet neue Wörter",
    c5: "teilt das Wort in Silben",
    d5: "zeigt die Aussprache",
    q6: "Welche ist die Kasusmarkierung in 'háznak'?",
    a6: "-nak",
    b6: "-ház",
    c6: "-nnak",
    d6: "-nak-nak",
    title4: "Fälle und Verhältnisse",
    text4: "Fälle zeigen das Verhältnis des Wortes. Zum Beispiel: Nominativ, Akkusativ, Dativ, Lokativ. Das Ungarische hat über 20 Kasus. Zum Beispiel: 'macska' → 'macskában' (Lokativ).",
    q7: "Was drücken Fälle aus?",
    a7: "das Verhältnis des Wortes",
    b7: "die Vergangenheit",
    c7: "den Akzent",
    d7: "die Wortlänge",
    q8: "Welches Wort hat einen Lokativ?",
    a8: "házban",
    b8: "házak",
    c8: "házat",
    d8: "háznak",
    title5: "Wortanalyse in der Praxis",
    text5: "Bei der Wortanalyse identifizieren wir den Stamm, Ableitungssuffixe und Kasusmarkierungen. Zum Beispiel: 'tanítóhöz': 'tanít' (Stamm) + '-ó' (Suffix) + '-hoz' (Kasus). Dieser systematische Ansatz hilft bei Rechtschreibung und Grammatik.",
    q9: "Welcher ist der Stamm von 'olvasónak'?",
    a9: "olvas",
    b9: "olvasó",
    c9: "olvaso",
    d9: "olvas-ó-nak",
    q10: "Aus wie vielen Teilen besteht 'tanítóban'?",
    a10: "3 (Stamm, Suffix, Kasus)",
    b10: "2 (Stamm, Kasus)",
    c10: "4 (Stamm, 2 Suffixe, Kasus)",
    d10: "1 (Stamm)",
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0f7ff 0%, #f0f9ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#00D4FF">
            🔤
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Szóelemzés
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
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #ffe0f0 0%, #fff0ff 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#FF2D78">
            ✨
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Képzők
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
            📌
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Jelek
          </text>
        </svg>
      ),
      questions: [
        { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" },
        { question: "q6", choices: ["a6", "b6", "c6", "d6"], answer: "a6" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fff0e0 0%, #fffaf0 100%)" }}>
          <rect x="0" y="0" width="240" height="160" rx="16" fill="none" />
          <text x="120" y="85" textAnchor="middle" fontSize="50" fill="#FF9500">
            📍
          </text>
          <text x="120" y="120" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">
            Ragok
          </text>
        </svg>
      ),
      questions: [
        { question: "q7", choices: ["a7", "b7", "c7", "d7"], answer: "a7" },
        { question: "q8", choices: ["a8", "b8", "c8", "d8"], answer: "a8" },
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
        { question: "q9", choices: ["a9", "b9", "c9", "d9"], answer: "a9" },
        { question: "q10", choices: ["a10", "b10", "c10", "d10"], answer: "a10" },
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

export default function WordElementsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
