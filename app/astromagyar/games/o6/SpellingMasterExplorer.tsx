"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    r1t: "Helyesírás mestere", r1x: "Az összetett szavak helyesírása speciális szabályok követi.",
    r2t: "Mozaikszók", r2x: "A mozaikszók rövidítésekből állnak és új szóként működnek.",
    r3t: "Rövidítések", r3x: "A rövidítések szavak rövid alakjai, amelyeket ponttal jelölünk.",
    r4t: "Összetett szavak", r4x: "Az összetett szavak összeírva vagy kötőjellel íródnak.",
    r5t: "Felismerés", r5x: "Mely szó helyesírása helyes?",
    q1: "Hogyan írjuk az összetett szavakat?", a1: "Összeírva vagy kötőjellel", b1: "Mindig szóközzel", c1: "Mindig kötőjellel", d1: "Szabályok nélkül",
    q2: "Mi az mozaikszó?", a2: "Rövidítésekből képzett új szó", b2: "Összetett szó", c2: "Idegen szó", d2: "Szócsalád",
    q3: "Mi a rövidítés?", a3: "Szó rövid alakja, ponttal jelölt", b3: "Teljes szó", c3: "Új szó", d3: "Összetett szó",
    q4: "Mely szó helyes?", a4: "újpapír", b4: "új papír", c4: "új-papír", d4: "UJ papir",
    q5: "Mely szó mozaikszó?", a5: "TV-n", b5: "hosszú szó", c5: "összeírt szó", d5: "rövidített szó",
  },
  en: {
    r1t: "Spelling Master", r1x: "Spelling of compound words follows special rules.",
    r2t: "Acronyms", r2x: "Acronyms are formed from abbreviations and function as new words.",
    r3t: "Abbreviations", r3x: "Abbreviations are short forms of words marked with a period.",
    r4t: "Compound Words", r4x: "Compound words are written together or with a hyphen.",
    r5t: "Recognition", r5x: "Which word is spelled correctly?",
    q1: "How do we write compound words?", a1: "Together or with hyphen", b1: "Always with space", c1: "Always with hyphen", d1: "Without rules",
    q2: "What is an acronym?", a2: "New word from abbreviations", b2: "Compound word", c2: "Foreign word", d2: "Word family",
    q3: "What is an abbreviation?", a3: "Short form marked with period", b3: "Full word", c3: "New word", d3: "Compound word",
    q4: "Which word is correct?", a4: "together-written", b4: "space written", c4: "hyphen-written", d4: "No spacing",
    q5: "Which is an acronym?", a5: "TV on", b5: "long word", c5: "compound", d5: "shortened",
  },
  de: {
    r1t: "Rechtschreibmeister", r1x: "Die Rechtschreibung von Zusammensetzungen folgt besonderen Regeln.",
    r2t: "Akronyme", r2x: "Akronyme werden aus Abkürzungen gebildet und funktionieren als neue Wörter.",
    r3t: "Abkürzungen", r3x: "Abkürzungen sind kurze Formen von Wörtern, gekennzeichnet mit Punkt.",
    r4t: "Zusammensetzungen", r4x: "Zusammensetzungen werden zusammengeschrieben oder mit Bindestrich.",
    r5t: "Erkennung", r5x: "Welches Wort ist korrekt geschrieben?",
    q1: "Wie schreiben wir Zusammensetzungen?", a1: "Zusammen oder mit Bindestrich", b1: "Immer mit Leerzeichen", c1: "Immer mit Bindestrich", d1: "Ohne Regeln",
    q2: "Was ist ein Akronym?", a2: "Neues Wort aus Abkürzungen", b2: "Zusammensetzung", c2: "Fremdwort", d2: "Wortfamilie",
    q3: "Was ist eine Abkürzung?", a3: "Kurzform mit Punkt", b3: "Volles Wort", c3: "Neues Wort", d3: "Zusammensetzung",
    q4: "Welches Wort ist richtig?", a4: "zusammengeschrieben", b4: "mit Leerzeichen", c4: "mit Bindestrich", d4: "Keine Abstände",
    q5: "Welches ist ein Akronym?", a5: "TV auf", b5: "langes Wort", c5: "Zusammensetzung", d5: "Abkürzung",
  },
  ro: {
    r1t: "Meister al ortografiei", r1x: "Ortografia cuvintelor compuse urmează reguli speciale.",
    r2t: "Acronime", r2x: "Acronimele sunt formate din abrevieri și funcționează ca cuvinte noi.",
    r3t: "Abrevieri", r3x: "Abrevierile sunt forme scurte ale cuvintelor, marcate cu punct.",
    r4t: "Cuvinte compuse", r4x: "Cuvintele compuse se scriu împreună sau cu linie de legătură.",
    r5t: "Recunoaștere", r5x: "Care cuvânt este scris corect?",
    q1: "Cum scriem cuvintele compuse?", a1: "Împreună sau cu linie de legătură", b1: "Întotdeauna cu spațiu", c1: "Întotdeauna cu linie", d1: "Fără reguli",
    q2: "Ce este un acronim?", a2: "Cuvânt nou din abrevieri", b2: "Cuvânt compus", c2: "Cuvânt străin", d2: "Familie de cuvinte",
    q3: "Ce este o abreviere?", a3: "Formă scurtă cu punct", b3: "Cuvânt întreg", c3: "Cuvânt nou", d3: "Cuvânt compus",
    q4: "Care cuvânt este corect?", a4: "Scris împreună", b4: "Cu spațiu", c4: "Cu linie de legătură", d4: "Fără spații",
    q5: "Care este un acronim?", a5: "TV pe", b5: "cuvânt lung", c5: "compus", d5: "scurtat",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1t", infoText: "r1x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">✏️</text></svg> },
    { type: "mcq", infoTitle: "r2t", infoText: "r2x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🔤</text></svg>, questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }] },
    { type: "info", infoTitle: "r3t", infoText: "r3x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">📋</text></svg> },
    { type: "mcq", infoTitle: "r4t", infoText: "r4x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🔗</text></svg>, questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }, { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }] },
    { type: "mcq", infoTitle: "r5t", infoText: "r5x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🎯</text></svg>, questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }, { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }] },
  ],
};

export default function SpellingMasterExplorer({ color, lang, onDone, onClose }: any) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
