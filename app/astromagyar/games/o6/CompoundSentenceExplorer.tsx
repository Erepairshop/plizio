"use client";
// CompoundSentenceExplorer — Grade 6: Összetett mondatok
// Mellérendelés, alárendelés, kötőszók

import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: "Összetett mondatok",
    round1Title: "Mellérendelt mondatok",
    round1Hint: "A mellérendelt mondatoknak egyenlő rangú tagjai vannak.",
    round1Text: "A mellérendelt mondatban két vagy több mondat egyenlő függetlenséggel kapcsolódik. Pl: 'Olvasok és zenelek.' / 'Kijött a nap, vagy hamarosan kijön.'",
    round2Title: "Alárendelt mondatok",
    round2Hint: "Az alárendelt mondatban egy főmondat és mellékmondat kapcsolódik.",
    round2Text: "Az alárendelt mondatban a mellékmondat a főmondat szavát bővíti vagy jellemzi. Pl: 'Az a pohár, amelyet láttam, szép volt.'",
    round3Title: "Kötőszók típusai",
    round3Hint: "A kötőszók összekapcsolnak mondatokat vagy szavakat.",
    round3Text: "Mellérendelő kötőszók: és, vagy, de, azonban. Alárendelő kötőszók: hogy, ha, mivel, mert, amikor.",
    round4Title: "Kötőszó választás",
    round4Hint: "Válaszd ki a megfelelő kötőszót!",
    round4Text: "Egyes kötőszók bizonyos értelmi viszonyokat fejeznek ki: ok-okozat (mert), feltétel (ha), idő (amikor).",
    round5Title: "Vegyes gyakorlat",
    round5Hint: "Azonosítsd a mondatok típusát!",
    round5Text: "Minden összetett mondatban szerepel főmondat és/vagy mellékmondat, kötőszóval egyesítve.",
    q1: "Mi jellemzi a mellérendelt mondatot?",
    a1: "Egyenlő rangú tagjai vannak",
    b1: "Függő tagjai vannak",
    c1: "Csak főmondatból áll",
    d1: "Többszöri kötőszó nélkül",
    q2: "Mely kötőszó fejez ki oki viszony?",
    a2: "mert",
    b2: "amikor",
    c2: "amelyik",
    d2: "és",
    q3: "Az alárendelt mondatban a mellékmondat mit tesz?",
    a3: "A főmondat szavát bővíti",
    b3: "Másik mondatot követ",
    c3: "Függetlenül áll",
    d3: "Nincsen a mondatban",
    q4: "Válaszd ki a mellérendelő kötőszót!",
    a4: "és",
    b4: "mert",
    c4: "amelyik",
    d4: "hogy",
    q5: "A 'ha' kötőszó milyen viszonyt fejez ki?",
    a5: "Feltétel",
    b5: "Ok",
    c5: "Idő",
    d5: "Cél",
    next: "Tovább",
    finish: "Kész",
  },
  de: {
    title: "Zusammengesetzte Sätze",
    round1Title: "Beiordnende Sätze",
    round1Hint: "Beiordnende Sätze haben gleichrangige Teile.",
    round1Text: "Beiordnende Sätze verbinden zwei oder mehr Sätze mit gleicher Unabhängigkeit.",
    round2Title: "Unterordnende Sätze",
    round2Hint: "Unterordnende Sätze haben Haupt- und Nebensatz.",
    round2Text: "Der Nebensatz erweitert oder charakterisiert ein Wort des Hauptsatzes.",
    round3Title: "Konjunktionstypen",
    round3Hint: "Konjunktionen verbinden Sätze oder Wörter.",
    round3Text: "Beiordnende Konjunktionen: und, oder, aber. Unterordnende Konjunktionen: dass, wenn, weil, als.",
    round4Title: "Konjunktion wählen",
    round4Hint: "Wähle die richtige Konjunktion!",
    round4Text: "Verschiedene Konjunktionen drücken verschiedene logische Verhältnisse aus.",
    round5Title: "Gemischte Übung",
    round5Hint: "Identifiziere die Satztypen!",
    round5Text: "Jeder zusammengesetzte Satz enthält Haupt- und/oder Nebensätze mit Konjunktion.",
    q1: "Was charakterisiert den beiordnenden Satz?",
    a1: "Gleichrangige Teile",
    b1: "Abhängige Teile",
    c1: "Nur ein Hauptsatz",
    d1: "Keine Konjunktion",
    q2: "Welche Konjunktion drückt Kausalität aus?",
    a2: "weil",
    b2: "als",
    c2: "welcher",
    d2: "und",
    q3: "Was tut der Nebensatz im unterordnenden Satz?",
    a3: "Erweitert ein Wort des Hauptsatzes",
    b3: "Folgt einem anderen Satz",
    c3: "Steht unabhängig",
    d3: "Existiert nicht im Satz",
    q4: "Wähle die beiordnende Konjunktion!",
    a4: "und",
    b4: "weil",
    c4: "welcher",
    d4: "dass",
    q5: "Welches logische Verhältnis drückt 'wenn' aus?",
    a5: "Bedingung",
    b5: "Grund",
    c5: "Zeit",
    d5: "Zweck",
  },
  en: {
    title: "Compound Sentences",
    round1Title: "Coordinate Sentences",
    round1Hint: "Coordinate sentences have equal-rank parts.",
    round1Text: "Coordinate sentences join two or more clauses with equal independence.",
    round2Title: "Subordinate Sentences",
    round2Hint: "Subordinate sentences have main and dependent clauses.",
    round2Text: "The dependent clause modifies or characterizes a word in the main clause.",
    round3Title: "Conjunction Types",
    round3Hint: "Conjunctions connect sentences or words.",
    round3Text: "Coordinating: and, or, but. Subordinating: that, if, because, when.",
    round4Title: "Choose the Conjunction",
    round4Hint: "Select the correct conjunction!",
    round4Text: "Different conjunctions express different logical relationships.",
    round5Title: "Mixed Practice",
    round5Hint: "Identify the sentence types!",
    round5Text: "Every compound sentence contains main and/or dependent clauses with conjunctions.",
    q1: "What characterizes a coordinate sentence?",
    a1: "Equal-rank parts",
    b1: "Dependent parts",
    c1: "Only one main clause",
    d1: "No conjunction",
    q2: "Which conjunction expresses causality?",
    a2: "because",
    b2: "when",
    c2: "which",
    d2: "and",
    q3: "What does the dependent clause do?",
    a3: "Modifies a word in the main clause",
    b3: "Follows another sentence",
    c3: "Stands independently",
    d3: "Does not exist in the sentence",
    q4: "Choose the coordinating conjunction!",
    a4: "and",
    b4: "because",
    c4: "which",
    d4: "that",
    q5: "What logical relationship does 'if' express?",
    a5: "Condition",
    b5: "Reason",
    c5: "Time",
    d5: "Purpose",
  },
  ro: {
    title: "Propoziții compuse",
    round1Title: "Propoziții coordonate",
    round1Hint: "Propozițiile coordonate au părți de rang egal.",
    round1Text: "Propozițiile coordonate unesc două sau mai multe clauze cu independență egală.",
    round2Title: "Propoziții subordonate",
    round2Hint: "Propozițiile subordonate au o propoziție principală și una dependentă.",
    round2Text: "Propoziția dependentă modifică sau caracterizează un cuvânt din propoziția principală.",
    round3Title: "Tipuri de conjuncții",
    round3Hint: "Conjuncțiile conectează propoziții sau cuvinte.",
    round3Text: "Coordonatoare: și, sau, dar. Subordonate: că, dacă, pentru că, când.",
    round4Title: "Alege conjuncția",
    round4Hint: "Selectează conjuncția corectă!",
    round4Text: "Diferite conjuncții exprimă diferite relații logice.",
    round5Title: "Practică mixtă",
    round5Hint: "Identifică tipurile de propoziții!",
    round5Text: "Fiecare propoziție compusă conține propoziții principale și/sau dependente cu conjuncții.",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "round1Title",
      infoText: "round1Text",
      hintKey: "round1Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">
            🔗
          </text>
        </svg>
      ),
    },
    {
      type: "mcq",
      infoTitle: "round2Title",
      infoText: "round2Text",
      hintKey: "round2Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" />
          <text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">
            📚
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "a1",
        },
      ],
    },
    {
      type: "info",
      infoTitle: "round3Title",
      infoText: "round3Text",
      hintKey: "round3Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" />
          <text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">
            🏷️
          </text>
        </svg>
      ),
    },
    {
      type: "mcq",
      infoTitle: "round4Title",
      infoText: "round4Text",
      hintKey: "round4Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" />
          <text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">
            ✍️
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "a2",
        },
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "a3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "round5Title",
      infoText: "round5Text",
      hintKey: "round5Hint",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" />
          <text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">
            🎯
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "a4",
        },
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "a5",
        },
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

export default function CompoundSentenceExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
