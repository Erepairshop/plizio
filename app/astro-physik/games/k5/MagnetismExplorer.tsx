"use client";
// MagnetismExplorer — Magnetism Grand Finale (Magnetismus) Klasse 5
// R1-R4: each has info + 1 question, R5: 2 review questions

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    r1_title: "Magnets & Poles", r1_text: "Every magnet has a North pole and a South pole. Opposite poles attract each other, and same poles repel. Magnets attract iron and steel.",
    r1_fact1: "A magnet's strongest force is at its poles",
    r1_q: "What happens when two North poles meet?", r1_a: "They repel each other", r1_b: "They attract", r1_c: "Nothing happens", r1_d: "They stick together",
    r2_title: "Magnetic Fields", r2_text: "An invisible field surrounds every magnet. The field is strongest at the poles. Iron filings show the pattern of the magnetic field.",
    r2_fact1: "Iron filings align with the magnetic field lines",
    r2_q: "Where is a magnet's field strongest?", r2_a: "At the poles", r2_b: "In the middle", r2_c: "Everywhere equally", r2_d: "Outside the magnet",
    r3_title: "Compass", r3_text: "A compass needle is a tiny magnet. It points North because Earth has a large magnetic field. Compasses have been used for navigation for centuries.",
    r3_fact1: "Earth acts like a giant magnet with North and South poles",
    r3_q: "Why does a compass needle point North?", r3_a: "Earth's magnetic field", r3_b: "Gravity pulls it", r3_c: "Wind pushes it", r3_d: "The Sun attracts it",
    r4_title: "Electromagnets", r4_text: "Wire coiled around iron and connected to electricity creates an electromagnet. You can turn electromagnets on and off. More coils make stronger electromagnets.",
    r4_fact1: "Electromagnets lift heavy metal pieces in scrapyards",
    r4_q: "How can you make an electromagnet stronger?", r4_a: "Add more coils", r4_b: "Remove the iron", r4_c: "Turn off electricity", r4_d: "Use plastic wire",
    r5_q1_q: "What are the two poles of a magnet?", r5_q1_a: "North and South", r5_q1_b: "East and West", r5_q1_c: "Up and Down", r5_q1_d: "Left and Right",
    r5_q2_q: "What material is attracted to magnets?", r5_q2_a: "Iron and steel", r5_q2_b: "Copper", r5_q2_c: "Aluminum", r5_q2_d: "Gold",
  },
  de: {
    r1_title: "Magnete und Pole", r1_text: "Jeder Magnet hat einen Nordpol und einen Südpol. Unterschiedliche Pole ziehen sich an, gleiche Pole stoßen sich ab. Magnete ziehen Eisen und Stahl an.",
    r1_fact1: "Die stärkste Kraft eines Magnets ist an seinen Polen",
    r1_q: "Was passiert, wenn zwei Nordpole aufeinander treffen?", r1_a: "Sie stoßen sich ab", r1_b: "Sie ziehen sich an", r1_c: "Nichts passiert", r1_d: "Sie kleben zusammen",
    r2_title: "Magnetfelder", r2_text: "Ein unsichtbares Feld umgibt jeden Magneten. Das Feld ist an den Polen am stärksten. Eisenfeilspäne zeigen das Muster des Magnetfeldes.",
    r2_fact1: "Eisenfeilspäne richten sich nach den Feldlinien aus",
    r2_q: "Wo ist das Magnetfeld am stärksten?", r2_a: "An den Polen", r2_b: "In der Mitte", r2_c: "Überall gleich stark", r2_d: "Außerhalb des Magnets",
    r3_title: "Kompass", r3_text: "Eine Kompassnadel ist ein winziger Magnet. Sie zeigt nach Norden, weil die Erde ein großes Magnetfeld hat. Kompass wurden seit Jahrhunderten zur Navigation verwendet.",
    r3_fact1: "Die Erde wirkt wie ein riesiger Magnet mit Nord- und Südpol",
    r3_q: "Warum zeigt eine Kompassnadel nach Norden?", r3_a: "Das Magnetfeld der Erde", r3_b: "Schwerkraft zieht sie", r3_c: "Wind drückt sie", r3_d: "Die Sonne zieht sie an",
    r4_title: "Elektromagnete", r4_text: "Draht, der um Eisen gewickelt und an Strom angeschlossen ist, erzeugt einen Elektromagnet. Du kannst Elektromagnete ein- und ausschalten. Mehr Spulen machen stärkere Elektromagnete.",
    r4_fact1: "Elektromagnete heben schwere Metallstücke in Schrottplätzen",
    r4_q: "Wie machst du einen Elektromagnet stärker?", r4_a: "Mehr Spulen hinzufügen", r4_b: "Das Eisen entfernen", r4_c: "Strom ausschalten", r4_d: "Plastikdraht verwenden",
    r5_q1_q: "Was sind die beiden Pole eines Magnets?", r5_q1_a: "Nord und Süd", r5_q1_b: "Ost und West", r5_q1_c: "Oben und Unten", r5_q1_d: "Links und Rechts",
    r5_q2_q: "Welches Material wird von Magneten angezogen?", r5_q2_a: "Eisen und Stahl", r5_q2_b: "Kupfer", r5_q2_c: "Aluminium", r5_q2_d: "Gold",
  },
  hu: {
    r1_title: "Mágnesek és pólusok", r1_text: "Minden mágnesnek van egy északi és egy déli pólusai. Az ellentétes pólusok vonzzák egymást, az azonos pólusok taszítják. A mágnesek vasra és acélra vonzanak.",
    r1_fact1: "A mágnes legerősebb ereje a pólusainál van",
    r1_q: "Mi történik, amikor két északi pólus találkozik?", r1_a: "Taszítják egymást", r1_b: "Vonzzák egymást", r1_c: "Semmi nem történik", r1_d: "Összeragadnak",
    r2_title: "Mágneses mezők", r2_text: "Egy láthatatlan mező vesz körül minden mágnest. A mező a pólusoknál a legerősebb. A vasreszelék a mágneses mező mintáját mutatja.",
    r2_fact1: "A vasreszelék a terepi vonalak szerint igazodik",
    r2_q: "Hol a legerősebb egy mágnes mezője?", r2_a: "A pólusoknál", r2_b: "A közepén", r2_c: "Mindenhol egyformán", r2_d: "A mágnes kívül",
    r3_title: "Iránytű", r3_text: "Az iránytű tűje egy apró mágnes. Észak felé mutat, mert a Földnek nagy mágneses mezeje van. Az iránytűket évszázadok óta használják a tájékozódáshoz.",
    r3_fact1: "A Föld hatalmas mágnesként viselkedik északi és déli pólusokkal",
    r3_q: "Miért mutat észak felé az iránytű tűje?", r3_a: "A Föld mágneses mezeje", r3_b: "A gravitáció húzza", r3_c: "A szél nyomja", r3_d: "A Nap vonzza",
    r4_title: "Elektromágnesek", r4_text: "Drót, amely vasra van tekerve és áramhoz csatlakozik, elektromágnest hoz létre. Az elektromágneseket be és ki lehet kapcsolni. Több tekercs erősebb elektromágnest hoz létre.",
    r4_fact1: "Az elektromágnesek nehéz fémes darabokat emelnek fel a roncstelepen",
    r4_q: "Hogyan csinálhatsz egy elektromágnest erősebbé?", r4_a: "Több tekercs hozzáadása", r4_b: "A vas eltávolítása", r4_c: "Az áram kikapcsolása", r4_d: "Műanyag drót használata",
    r5_q1_q: "Melyek egy mágnes két pólusai?", r5_q1_a: "Észak és Dél", r5_q1_b: "Kelet és Nyugat", r5_q1_c: "Fel és Le", r5_q1_d: "Bal és Jobb",
    r5_q2_q: "Melyik anyagot vonzzák a mágnesek?", r5_q2_a: "Vas és acél", r5_q2_b: "Réz", r5_q2_c: "Alumínium", r5_q2_d: "Arany",
  },
  ro: {
    r1_title: "Magneți și poli", r1_text: "Fiecare magnet are un pol Nord și un pol Sud. Polii opuși se atrag reciproc, iar polii identici se resping. Magneții atrag fierul și oțelul.",
    r1_fact1: "Forța cea mai puternică a unui magnet este la poli",
    r1_q: "Ce se întâmplă când doi poli Nord se întâlnesc?", r1_a: "Se resping reciproc", r1_b: "Se atrag", r1_c: "Nimic nu se întâmplă", r1_d: "Se lipesc împreună",
    r2_title: "Câmpuri magnetice", r2_text: "Un câmp invizibil înconjoară fiecare magnet. Câmpul este cel mai puternic la poli. Filinele de fier arată modelul câmpului magnetic.",
    r2_fact1: "Filinele de fier se aliniază cu liniile câmpului magnetic",
    r2_q: "Unde este cel mai puternic câmpul unui magnet?", r2_a: "La poli", r2_b: "În mijloc", r2_c: "Peste tot în mod egal", r2_d: "În afara magnetului",
    r3_title: "Busolă", r3_text: "Acul busolei este un mic magnet. El arată spre Nord pentru că Pământul are un mare câmp magnetic. Busola este folosită pentru navigație de secole.",
    r3_fact1: "Pământul acționează ca un uriaș magnet cu poli Nord și Sud",
    r3_q: "De ce arată acul busolei spre Nord?", r3_a: "Câmpul magnetic al Pământului", r3_b: "Gravitația o trage", r3_c: "Vântul o împinge", r3_d: "Soarele o atrage",
    r4_title: "Electromagneți", r4_text: "Sârmă înfășurată în jurul fierului și conectată la electricitate creează un electromagnet. Puteți porni și opri electromagneții. Mai multe înfășurări fac electromagneți mai puternici.",
    r4_fact1: "Electromagneții ridică bucăți grele de metal în deșeurile de fier",
    r4_q: "Cum faci un electromagnet mai puternic?", r4_a: "Adaugă mai multe bobine", r4_b: "Îndepărtează fierul", r4_c: "Oprește electricitatea", r4_d: "Folosește sârmă de plastic",
    r5_q1_q: "Care sunt cei doi poli ai unui magnet?", r5_q1_a: "Nord și Sud", r5_q1_b: "Est și Vest", r5_q1_c: "Sus și Jos", r5_q1_d: "Stânga și Dreapta",
    r5_q2_q: "Ce material este atras de magneți?", r5_q2_a: "Fier și oțel", r5_q2_b: "Cupru", r5_q2_c: "Aluminiu", r5_q2_d: "Aur",
  },
};

const SimpleSvg = () => (
  <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2a4e"/><text x="120" y="90" textAnchor="middle" fontSize="50">🧲</text></svg>
);

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />, bulletKeys: ["r1_fact1"],
      questions: [{ question: "r1_q", choices: ["r1_a", "r1_b", "r1_c", "r1_d"], answer: "r1_a" }] },
    { type: "mcq", infoTitle: "r2_title", infoText: "r2_text", svg: () => <SimpleSvg />, bulletKeys: ["r2_fact1"],
      questions: [{ question: "r2_q", choices: ["r2_a", "r2_b", "r2_c", "r2_d"], answer: "r2_a" }] },
    { type: "mcq", infoTitle: "r3_title", infoText: "r3_text", svg: () => <SimpleSvg />, bulletKeys: ["r3_fact1"],
      questions: [{ question: "r3_q", choices: ["r3_a", "r3_b", "r3_c", "r3_d"], answer: "r3_a" }] },
    { type: "mcq", infoTitle: "r4_title", infoText: "r4_text", svg: () => <SimpleSvg />, bulletKeys: ["r4_fact1"],
      questions: [{ question: "r4_q", choices: ["r4_a", "r4_b", "r4_c", "r4_d"], answer: "r4_a" }] },
    { type: "mcq", infoTitle: "r1_title", infoText: "r1_text", svg: () => <SimpleSvg />,
      questions: [
        { question: "r5_q1_q", choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"], answer: "r5_q1_a" },
        { question: "r5_q2_q", choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"], answer: "r5_q2_a" },
      ] },
  ],
};

interface Props { color: string; lang?: string; onDone: (s: number, t: number) => void; onClose?: () => void; }

export default function MagnetismExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
