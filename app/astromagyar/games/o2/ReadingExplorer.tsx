"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Szövegértés alapok", tx1: "Az olvasás során figyeljünk az történetre és a szereplőkre. Ez segít megérteni a szöveg lényegét.",
    q1: "Milyen képesség szükséges ahhoz, hogy megértsük az olvasott szöveget?", a1: "Figyelem", b1: "Tempó", c1: "Hangerő", d1: "Méret",

    t2: "Kulcsszavak", tx2: "A kulcsszavak a szöveg legfontosabb szavai. Ezek segítik a fő gondolat megértését.",
    q2: "Mi a kulcsszó egy szövegben?", a2: "A legfontosabb szó", b2: "Az első szó", c2: "A leghosszabb szó", d2: "Az utolsó szó",

    t3: "Kérdések megválaszolása", tx3: "Amikor kérdéseket kapunk a szövegről, vissza kell gondolnunk az olvasott részletekre.",
    q3: "Mit tehetünk, ha nem emlékszünk a szöveg tartalmára?", a3: "Újra elolvasni a szöveget", b3: "Feladni", c3: "Tippelni", d3: "Másodtól kérdezni",

    t4: "Helyesírás az olvasásban", tx4: "A helyesen írt szavak könnyebben olvashatóak és megérthetőek.",
    q4: "Melyik szó van helyesen írva?", a4: "házban", b4: "házbán", c4: "házban", d4: "házaban",

    t5: "Összefoglaló olvasás", tx5: "Az olvasott szöveg lényegét néhány mondatban össze tudjuk foglalni.",
    q5: "Hogyan tudjuk még jobban megérteni a szöveget?", a5: "Újra elolvasni", b5: "Gyorsabban olvasni", c5: "Halkan olvasni", d5: "Hangosan olvasni",
  },
  de: {
    t1: "Leseverständnis-Grundlagen", tx1: "Während des Lesens sollten wir auf die Geschichte und die Charaktere achten. Dies hilft, den Sinn des Textes zu verstehen.",
    q1: "Welche Fähigkeit ist notwendig, um einen gelesenen Text zu verstehen?", a1: "Aufmerksamkeit", b1: "Tempo", c1: "Lautstärke", d1: "Größe",

    t2: "Schlüsselwörter", tx2: "Schlüsselwörter sind die wichtigsten Wörter im Text. Sie helfen, die Hauptidee zu verstehen.",
    q2: "Was ist ein Schlüsselwort in einem Text?", a2: "Das wichtigste Wort", b2: "Das erste Wort", c2: "Das längste Wort", d2: "Das letzte Wort",

    t3: "Fragen beantworten", tx3: "Wenn wir Fragen zum Text bekommen, müssen wir an die gelesenen Details zurückdenken.",
    q3: "Was können wir tun, wenn wir uns nicht an den Inhalt erinnern?", a3: "Den Text erneut lesen", b3: "Aufgeben", c3: "Raten", d3: "Jemanden fragen",

    t4: "Rechtschreibung beim Lesen", tx4: "Korrekt geschriebene Wörter sind leichter zu lesen und zu verstehen.",
    q4: "Welches Wort ist korrekt geschrieben?", a4: "házban", b4: "házbán", c4: "házban", d4: "házaban",

    t5: "Zusammenfassendes Lesen", tx5: "Den Inhalt eines gelesenen Textes können wir in wenigen Sätzen zusammenfassen.",
    q5: "Wie können wir den Text besser verstehen?", a5: "Erneut lesen", b5: "Schneller lesen", c5: "Leise lesen", d5: "Laut lesen",
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
          <rect x="20" y="30" width="200" height="100" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="30" y="55" fontSize="11" fill="#4ECDC4">Egy szép reggel Anna az</text>
          <text x="30" y="72" fontSize="11" fill="#4ECDC4">erdőbe ment, ahol sok</text>
          <text x="30" y="89" fontSize="11" fill="#4ECDC4">virág virított...</text>
          <circle cx="210" cy="120" r="8" fill="#FFD700" />
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
          <circle cx="120" cy="80" r="40" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="88" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">LÉNYEG</text>
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <path d="M 120 30 L 120 100" stroke="#FF6B9D" strokeWidth="3" />
          <circle cx="120" cy="30" r="8" fill="#FF6B9D" />
          <text x="120" y="50" textAnchor="middle" fontSize="12" fill="#FF6B9D" fontWeight="bold">?</text>
          <path d="M 80 100 L 160 100" stroke="#FF6B9D" strokeWidth="3" />
          <circle cx="80" cy="100" r="6" fill="#FF6B9D" />
          <circle cx="160" cy="100" r="6" fill="#FF6B9D" />
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <text x="60" y="95" textAnchor="middle" fontSize="20" fill="#4ECDC4" fontWeight="bold">házban</text>
          <circle cx="60" cy="125" r="5" fill="#4ECDC4" />
          <text x="180" y="95" textAnchor="middle" fontSize="20" fill="#FF6B9D" fontWeight="bold">házbán</text>
          <circle cx="180" cy="125" r="5" fill="#FF6B9D" />
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <path d="M 30 40 L 210 40" stroke="#95E1D3" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 30 70 L 210 70" stroke="#95E1D3" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 30 100 L 210 100" stroke="#95E1D3" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 30 130 L 210 130" stroke="#95E1D3" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="50" cy="70" r="4" fill="#95E1D3" />
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

export default function ReadingExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
