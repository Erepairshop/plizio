"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Magyar nyelvtan alapjai",
    text1: "A magyar nyelvtan alapjai: szótan (szófajok), mondattan (mondatok szerkezete), alaktan (toldalékolás), szintaxis (szórend).",
    hint1: "A nyelvtan ismerete az érthető kommunikáció alapja.",
    q1: "Mit tanulmányoz az alaktan?",
    a1: "Szavak toldalékolást", b1: "Mondatok szerkezetét", c1: "Szófajokat", d1: "Szórendet",

    title2: "Irodalmi értelmezés és műelemzés",
    text2: "Irodalmi értelmezés: szöveg mélyebb megértése szimbólumok, metaforák, motivumok keresésével. Műelemzés: szerkezet, stílus, karakterek vizsgálata.",
    hint2: "Az irodalmi művek emberi életre szóló tanulságokat hordoznak.",
    q2: "Mi a műelemzés fő feladata?",
    a2: "A mű szerkezetét és stílusát vizsgálni", b2: "Szókeresés", c2: "Helyesírás ellenőrzése", d2: "Szöveg másolása",

    title3: "Szövegtípusok és kommunikáció",
    text3: "Szövegtípusok: elbeszélő, leíró, érvelő, párbeszédformák. Kommunikáció: szóbeli és írott formák, kontextus-függő alkalmazás.",
    hint3: "A szövegtípus megválasztása a kommunikáció sikerétől függ.",
    q3: "Melyik nem szövegtípus?",
    a3: "Számítógépes programozási szöveg", b3: "Elbeszélő szöveg", c3: "Leíró szöveg", d3: "Érvelő szöveg",

    title4: "Irodalomtörténeti ismeret",
    text4: "Irodalomtörténet: magyar irodalom fejlődése a kezdetektől napjainkig. Periódusok: ómagyar, régi magyar, felvilágosodás, romantika, realizmus, modernség.",
    hint4: "Az irodalom a kor tükre, mely az emberek gondolkodásáról tanúskodik.",
    q4: "Melyik irodalmi periódus a romantika után jött?",
    a4: "Realizmus", b4: "Ómagyar", c4: "Felvilágosodás", d4: "Reneszánsz",

    title5: "Végzős próba - tudásfelmérés",
    text5: "A végzős próbában az 8. osztályos tananyag összes aspektusát gyakoroljuk: helyesírás, nyelvtan, irodalom, érvelés, szövegértés.",
    hint5: "Ez a tudásfelmérés megmutatja, mire jó vagy szöveges kifejezésben.",
    q5: "Mi a végzős próba célja?",
    a5: "Az 8. osztályos tananyag összegzése", b5: "Szórakozás", c5: "Nyelvtan gyakorlása", d5: "Írásbeli vizsga",
  },
  de: {
    title1: "Grundlagen der ungarischen Grammatik",
    text1: "Grundlagen der ungarischen Grammatik: Wortlehre (Wortarten), Satzlehre (Satzstruktur), Formenlehre (Deklination), Syntax (Wortstellung).",
    hint1: "Grammatikkenntnis ist die Grundlage verständlicher Kommunikation.",
    q1: "Was untersucht die Formenlehre?",
    a1: "Deklination von Wörtern", b1: "Satzstruktur", c1: "Wortarten", d1: "Wortstellung",

    title2: "Literarische Interpretation und Werkanalyse",
    text2: "Literarische Interpretation: Tieferes Textverständnis durch Suche nach Symbolen, Metaphern, Motiven. Werkanalyse: Struktur, Stil, Charaktere untersuchen.",
    hint2: "Literarische Werke tragen Lehren für das menschliche Leben in sich.",
    q2: "Welche ist die Hauptaufgabe der Werkanalyse?",
    a2: "Struktur und Stil des Werkes untersuchen", b2: "Wörter suchen", c2: "Rechtschreibung überprüfen", d2: "Text kopieren",

    title3: "Texttypen und Kommunikation",
    text3: "Texttypen: Erzählung, Beschreibung, Argumentation, Dialog. Kommunikation: mündliche und schriftliche Formen, kontextabhängige Anwendung.",
    hint3: "Die Wahl des Texttyps bestimmt den Erfolg der Kommunikation.",
    q3: "Welcher ist kein Texttyp?",
    a3: "Computerprogrammierungscode", b3: "Erzählender Text", c3: "Beschreibender Text", d3: "Argumentativer Text",

    title4: "Literaturhistorisches Wissen",
    text4: "Literaturgeschichte: Entwicklung der ungarischen Literatur von Anfang bis heute. Perioden: Altungarisch, Altungarisch-Literatur, Aufklärung, Romantik, Realismus, Moderne.",
    hint4: "Literatur ist ein Spiegel der Zeit, der von Gedanken der Menschen zeugt.",
    q4: "Welche Literaturperiode kam nach der Romantik?",
    a4: "Realismus", b4: "Altungarisch", c4: "Aufklärung", d4: "Renaissance",

    title5: "Abschlussprüfung - Wissensprüfung",
    text5: "In der Abschlussprüfung üben wir alle Aspekte des Unterrichts der Klasse 8: Rechtschreibung, Grammatik, Literatur, Argumentation, Textverständnis.",
    hint5: "Diese Wissensprüfung zeigt, wie gut du in schriftlichem Ausdruck bist.",
    q5: "Was ist der Zweck der Abschlussprüfung?",
    a5: "Zusammenfassung des Unterrichtsstoffs der Klasse 8", b5: "Unterhaltung", c5: "Grammatikübung", d5: "Schriftliche Prüfung",
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">📚</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">🎭</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00FF88">💭</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      hintKey: "hint4",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FFD700">⏳</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#B44DFF">🌟</text>
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

export default function GrandFinalExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
