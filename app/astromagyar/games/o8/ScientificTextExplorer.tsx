"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Tudományos szöveg jellemzői",
    text1: "A tudományos szöveg főbb ismertetőjegyei: objektívség, szakszókincs, logikus szerkezet, precizitás, és forráshivatkozások.",
    hint1: "A tudományos szövegek célja az információ közlése, nem pedig a szórakoztatás.",
    q1: "Melyik nem jellemzo a tudományos szövegekre?",
    a1: "Szubjektív értékítéletek", b1: "Szakszókincs", c1: "Logikus szerkezet", d1: "Forráshivatkozások",

    title2: "Szaknyelv és terminológia",
    text2: "Szaknyelv: egy adott tudományterület vagy szakterület specifikus szókincsét jelenti. Pl. kémia: katalizátor, oxidáció; medicina: diagnózis, terápia.",
    hint2: "A szakszavak pontos meghatározása a tudományos szöveg alapja.",
    q2: "Mit értünk szaknyelven?",
    a2: "Egy szakterület specifikus szókincsét", b2: "Minden új szót a nyelvben", c2: "Csak német szavakat", d2: "Régi, elavult szavakat",

    title3: "Forráskritika és hivatkozás",
    text3: "Forráskritika: az információk forrásainak hitelességének, megbízhatóságának és relevancia értékelése. Hivatkozás: a használt források feltüntetése.",
    hint3: "A tudományos munkában mindig fel kell tüntetni, honnan vettük az információt.",
    q3: "Miért fontos a forráskritika a tudományos szövegekben?",
    a3: "Az információk megbízhatóságának felmérése érdekében", b3: "Szépítés céljából", c3: "Mert az iskola megköveteli", d3: "Nincs rá valódi oka",

    title4: "A tudományos szöveg szerkezete",
    text4: "Tipikus szerkezet: bevezetés (téma felvetése), fejlesztés (részletezés, bizonyítás), lezárás (összegzés, következtetés).",
    hint4: "A logikus felépítés segíti az olvasót az információ feldolgozásában.",
    q4: "Mit tartalmaz a tudományos szöveg fejlesztő része?",
    a4: "Részletezést és bizonyítást", b4: "Csak a téma megnevezését", c4: "Csupán szórakoztató elemeket", d4: "Ellentétes nézeteket",

    title5: "Tudományos szöveg elemzése",
    text5: "A tudományos szöveg elemzésekor figyeljünk: a fő gondolatra, a támogató érvekre, a szakszavakra, és az érvelés logikájára.",
    hint5: "Az ügyes olvasó azonosítja a szöveg legfontosabb elemeit.",
    q5: "Mit nem kell elemezni a tudományos szövegben?",
    a5: "A szerző érzelmi állapotát", b5: "A főgondolatot", c5: "Az érvelés logikáját", d5: "A szakszókincsét",
  },
  de: {
    title1: "Merkmale wissenschaftlicher Texte",
    text1: "Hauptmerkmale wissenschaftlicher Texte: Objektivität, Fachterminologie, logischer Aufbau, Präzision und Quellenangaben.",
    hint1: "Wissenschaftliche Texte zielen auf Informationsvermittlung ab, nicht auf Unterhaltung.",
    q1: "Was ist kein Merkmal wissenschaftlicher Texte?",
    a1: "Subjektive Werturteile", b1: "Fachterminologie", c1: "Logischer Aufbau", d1: "Quellenangaben",

    title2: "Fachsprache und Terminologie",
    text2: "Fachsprache bezeichnet das spezifische Wortgut einer Wissenschaft oder eines Fachgebiets. Beispiele: Chemie: Katalysator, Oxidation; Medizin: Diagnose, Therapie.",
    hint2: "Genaue Definitionen von Fachtermini sind die Grundlage des wissenschaftlichen Textes.",
    q2: "Was verstehen wir unter Fachsprache?",
    a2: "Das spezifische Wortgut eines Fachgebietes", b2: "Jedes neue Wort in der Sprache", c2: "Nur deutsche Wörter", d2: "Alte, veraltete Wörter",

    title3: "Quellenkritik und Quellenangabe",
    text3: "Quellenkritik: Bewertung der Zuverlässigkeit, Glaubwürdigkeit und Relevanz von Informationsquellen. Quellenangabe: Auflistung der verwendeten Quellen.",
    hint3: "In wissenschaftlichen Arbeiten müssen Quellen immer angegeben werden.",
    q3: "Warum ist Quellenkritik in wissenschaftlichen Texten wichtig?",
    a3: "Um die Zuverlässigkeit von Informationen zu bewerten", b3: "Zu Verschönerungszwecken", c3: "Weil die Schule es verlangt", d3: "Es gibt keinen echten Grund",

    title4: "Aufbau des wissenschaftlichen Textes",
    text4: "Typischer Aufbau: Einleitung (Thema), Entwicklung (Details, Argumentation), Abschluss (Zusammenfassung, Fazit).",
    hint4: "Logischer Aufbau hilft dem Leser bei der Informationsverarbeitung.",
    q4: "Was enthält der entwickelnde Teil eines wissenschaftlichen Textes?",
    a4: "Details und Beweis", b4: "Nur die Themenbenennung", c4: "Nur Unterhaltungselemente", d4: "Nur gegensätzliche Sichtweisen",

    title5: "Analyse wissenschaftlicher Texte",
    text5: "Bei der Analyse wissenschaftlicher Texte beachten: Kerngedanke, unterstützende Argumente, Fachtermini, Logik der Argumentation.",
    hint5: "Der geschickte Leser identifiziert die wichtigsten Elemente des Textes.",
    q5: "Was muss man nicht im wissenschaftlichen Text analysieren?",
    a5: "Den emotionalen Zustand des Autors", b5: "Die Hauptidee", c5: "Die Logik der Argumentation", d5: "Das Fachvokabular",
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#10B981">📚</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF9500">🔬</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">📖</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#B44DFF">🏗️</text>
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
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">🧪</text>
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

export default function ScientificTextExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
