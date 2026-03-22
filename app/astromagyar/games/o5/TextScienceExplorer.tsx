"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szövegtípusok", tx1: "A szövegek különféle típusokra osztódnak: elbeszélő (narráció), leíró, érvelő, és párbeszédes szövegek.",
    q1: "Az alábbiak közül melyik szövegtípus?", a1: "Ebédszünetben találkoztam egy régi iskolatársommal.", b1: "Piroska volt egy szép, sötét hajú lány.", c1: "Ez a módszer sokkal jobb, mint az előző.", d1: "Mit hoztál ebédre?",

    t2: "Kohézió a szövegben", tx2: "A kohézió azt jelenti, hogy a szöveg részei szorosan kapcsolódnak egymáshoz. Ezt végigvezetett gondolatmenettel és logikus szerkezettel érjük el.",
    q2: "Mely szöveg mutat legjobb kohéziót?", a2: "Tegnap esett. Piroska otthon maradt. Később már nem esett.", b2: "Tegnap esett az eső. Mivel napos volt az előző nap, nem számítottunk erre. Ezért vizes ruhában kerültünk ki.", c2: "Esett. Piroska. Otthon.", d2: "Ma meleg volt. Tegnap hideg volt.",

    t3: "Bekezdésszerkesztés", tx3: "A jó bekezdéseknek van fő gondolatuk (topik mondat) és támogató szövegrészek, amelyek részletezik azt.",
    q3: "Melyik egy jó topik mondat egy bekezdéshez?", a3: "A macskák egy macska.", b3: "Az internetes kommunikáció számos előnyt kínál a modern világban.", c3: "Valaki mondott valamit.", d3: "Ott volt egy dolog.",

    t4: "Kapcsolódási szavak", tx4: "A kapcsolódási szavak (azonban, ezenkívül, például) segítenek az eszmék közötti logikus kapcsolatot megteremteni.",
    q4: "Melyik mondat helyes kapcsolódási szót használ?", a4: "Fáradt voltam. Azonban tanultam.", b4: "Szerettem az összes tantárgyat, például az angolt.", c4: "Ez fájdalmas volt, azonban jó volt.", d4: "Tudtam az anyagot, majd kell tanulnom.",

    t5: "Szöveg szerkezete", tx5: "Az értelmes szövegnek van bevezetése, fő részei és lezárása, amely visszatér a kezdeti gondolatra.",
    q5: "Mi az első lépés egy szöveg tervezésében?", a5: "Rögtön kezdj el írni.", b5: "Gondolkozz a célodról, olvasóidról és a fő gondolataidról.", c5: "Nézz meg sok szöveget.", d5: "Végzess nyelvtani gyakorlatokat.",
  },
  de: {
    t1: "Texttypen", tx1: "Texte werden in verschiedene Typen eingeteilt: Erzählung, Beschreibung, Argumentation und Dialog.",
    q1: "Welcher Texttyp ist das?", a1: "Mittags traf ich einen alten Schulkameraden.", b1: "Rotkäppchen war ein schönes Mädchen mit dunklem Haar.", c1: "Diese Methode ist besser als die vorherige.", d1: "Was hast du zum Mittag mitgebracht?",

    t2: "Kohäsion im Text", tx2: "Kohäsion bedeutet, dass die Teile eines Textes eng miteinander verbunden sind. Dies wird durch eine durchgehende Gedankenführung erreicht.",
    q2: "Welcher Text zeigt beste Kohäsion?", a2: "Gestern regnete es. Rotkäppchen blieb zu Hause. Später regnete es nicht mehr.", b2: "Gestern regnete es. Da der vorherige Tag sonnig war, rechneten wir nicht damit. Deshalb gingen wir in nasser Kleidung hinaus.", c2: "Regen. Rotkäppchen. Zuhause.", d2: "Heute war es warm. Gestern war es kalt.",

    t3: "Absatzgestaltung", tx3: "Gute Absätze haben einen Hauptgedanken (Themensatz) und unterstützende Teile, die ihn detaillieren.",
    q3: "Welcher ist ein guter Themensatz für einen Absatz?", a3: "Katzen sind eine Katze.", b3: "Die Online-Kommunikation bietet zahlreiche Vorteile in der modernen Welt.", c3: "Jemand sagte etwas.", d3: "Da war etwas.",

    t4: "Übergangswörter", tx4: "Übergangswörter (jedoch, außerdem, zum Beispiel) helfen, logische Verbindungen zwischen Ideen herzustellen.",
    q4: "Welcher Satz verwendet das richtige Übergangswort?", a4: "Ich war müde. Jedoch lernte ich.", b4: "Ich mochte alle Fächer, zum Beispiel Englisch.", c4: "Es war schmerzhaft, jedoch gut.", d4: "Ich wusste das Material, dann muss ich lernen.",

    t5: "Textstruktur", tx5: "Ein sinnvoller Text hat eine Einleitung, Hauptteile und einen Abschluss, der zur anfänglichen Idee zurückkehrt.",
    q5: "Was ist der erste Schritt beim Verfassen eines Textes?", a5: "Schreib einfach los.", b5: "Denk über dein Ziel, deine Leser und Hauptideen nach.", c5: "Lies viele Texte.", d5: "Mach Grammatikübungen.",
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
          <rect x="20" y="40" width="180" height="90" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="110" y="65" textAnchor="middle" fontSize="14" fill="#4ECDC4" fontWeight="bold">Elbeszélő</text>
          <text x="110" y="95" textAnchor="middle" fontSize="14" fill="#4ECDC4" fontWeight="bold">Leíró</text>
          <text x="110" y="120" textAnchor="middle" fontSize="14" fill="#4ECDC4" fontWeight="bold">Érvelő</text>
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
          <circle cx="60" cy="70" r="15" fill="#95E1D3" />
          <line x1="60" y1="70" x2="120" y2="70" stroke="#95E1D3" strokeWidth="2" />
          <circle cx="120" cy="70" r="15" fill="#95E1D3" />
          <line x1="120" y1="70" x2="180" y2="70" stroke="#95E1D3" strokeWidth="2" />
          <circle cx="180" cy="70" r="15" fill="#95E1D3" />
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Kapcsolódás</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <rect x="30" y="30" width="180" height="20" rx="4" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="1" />
          <line x1="30" y1="65" x2="210" y2="65" stroke="#4ECDC4" strokeWidth="1" />
          <line x1="30" y1="85" x2="210" y2="85" stroke="#4ECDC4" strokeWidth="1" />
          <line x1="30" y1="105" x2="180" y2="105" stroke="#4ECDC4" strokeWidth="1" />
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Topik-mondat</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="60" y="85" textAnchor="middle" fontSize="16" fill="#00D4FF" fontWeight="bold">Azonban</text>
          <text x="180" y="85" textAnchor="middle" fontSize="16" fill="#00D4FF" fontWeight="bold">Mivel</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Kötőszavak</text>
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
          <rect x="20" y="30" width="200" height="25" rx="4" fill="#B44DFF" opacity="0.3" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="50" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Bevezetés</text>
          <rect x="20" y="70" width="200" height="35" rx="4" fill="#6FAADB" opacity="0.3" stroke="#6FAADB" strokeWidth="2" />
          <text x="120" y="92" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Fő részek</text>
          <rect x="20" y="120" width="200" height="20" rx="4" fill="#10B981" opacity="0.3" stroke="#10B981" strokeWidth="2" />
          <text x="120" y="135" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Lezárás</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function TextScienceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
