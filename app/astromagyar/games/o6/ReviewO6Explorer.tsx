"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    r1t: "Nagy Próba", r1x: "Az összes 6. osztályos témát felölelő ismétlés.",
    r2t: "Mondattan", r2x: "Mondatok szerkezete és típusai.",
    r3t: "Szókincs", r3x: "Szavak jelentése és használata.",
    r4t: "Retorika", r4x: "Szónoklat és meggyőzés elemei.",
    r5t: "Végső kérdés", r5x: "Mit tanultál a legtöbbet?",
    q1: "Melyik nem mondattípus?", a1: "Szókincs", b1: "Kijelentő", c1: "Kérdő", d1: "Felkiáltó",
    q2: "Mi a szócsalád?", a2: "Közös gyökerű szavak", b2: "Összetett szavak", c2: "Idegen szavak", d2: "Rövidítések",
    q3: "Mit fejez ki a metafora?", a3: "Képies kifejezés", b3: "Szó szinonímája", c3: "Szó ellentéke", d3: "Szó hosszú alakja",
    q4: "Mely eszköz az alliteráció?", a4: "Hangismétlés", b4: "Szóismétlés", c4: "Gondolat-ismétlés", d4: "Ritmusismétlés",
    q5: "Mit jelent a stilizáció?", a5: "Stílusos kifejezés", b5: "Nyelvtan", c5: "Helyesírás", d5: "Szókincs",
  },
  en: { r1t: "Big Test", r1x: "Review of all Grade 6 topics.", r2t: "Syntax", r2x: "Sentence structure and types.", r3t: "Vocabulary", r3x: "Word meanings and usage.", r4t: "Rhetoric", r4x: "Speaking and persuasion.", r5t: "Final Q", r5x: "What learned most?", q1: "Not type?", a1: "Vocabulary", b1: "Declarative", c1: "Interrogative", d1: "Exclamatory", q2: "Word family?", a2: "Common root", b2: "Compound", c2: "Foreign", d2: "Abbreviation", q3: "Metaphor?", a3: "Figurative", b3: "Synonym", c3: "Antonym", d3: "Long form", q4: "Alliteration?", a4: "Sound repeat", b4: "Word repeat", c4: "Thought repeat", d4: "Rhythm repeat", q5: "Stylization?", a5: "Stylish expression", b5: "Grammar", c5: "Spelling", d5: "Vocabulary" },
  de: { r1t: "Großer Test", r1x: "Wiederholung aller Themen der Klasse 6.", r2t: "Syntax", r2x: "Satzstruktur und -typen.", r3t: "Wortschatz", r3x: "Wortbedeutung und -verwendung.", r4t: "Rhetorik", r4x: "Sprechen und Überzeugung.", r5t: "Letzte F", r5x: "Was gelernt?", q1: "Nicht Typ?", a1: "Wortschatz", b1: "Aussage", c1: "Frage", d1: "Ausruf", q2: "Wortfamilie?", a2: "Gemeinsame Wurzel", b2: "Zusammensetzung", c2: "Fremd", d2: "Abkürzung", q3: "Metapher?", a3: "Bildlich", b3: "Synonym", c3: "Antonym", d3: "Langform", q4: "Alliteration?", a4: "Laut wiederholt", b4: "Wort wiederholt", c4: "Gedanke wiederholt", d4: "Rhythmus wiederholt", q5: "Stilisierung?", a5: "Stilvoller Ausdruck", b5: "Grammatik", c5: "Rechtschreibung", d5: "Wortschatz" },
  ro: { r1t: "Test Mare", r1x: "Recapitulare teme Clasa 6.", r2t: "Sintaxă", r2x: "Structură și tipuri propoziții.", r3t: "Vocabular", r3x: "Sensuri cuvinte și utilizare.", r4t: "Retorică", r4x: "Vorbire și persuasiune.", r5t: "Ultima I", r5x: "Ce învățat?", q1: "Nu tip?", a1: "Vocabular", b1: "Declarat", c1: "Întrebare", d1: "Exclamație", q2: "Familie cuvinte?", a2: "Rădăcină comună", b2: "Compus", c2: "Străin", d2: "Abreviere", q3: "Metaforă?", a3: "Figurat", b3: "Sinonim", c3: "Antonim", d3: "Formă lungă", q4: "Aliterație?", a4: "Sunet repetat", b4: "Cuvânt repetat", c4: "Gând repetat", d4: "Ritm repetat", q5: "Stilizare?", a5: "Expresie stilată", b5: "Gramatică", c5: "Ortografie", d5: "Vocabular" },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1t", infoText: "r1x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">⭐</text></svg> },
    { type: "mcq", infoTitle: "r2t", infoText: "r2x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">📚</text></svg>, questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }] },
    { type: "info", infoTitle: "r3t", infoText: "r3x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🔤</text></svg> },
    { type: "mcq", infoTitle: "r4t", infoText: "r4x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🎤</text></svg>, questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }, { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }] },
    { type: "mcq", infoTitle: "r5t", infoText: "r5x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🏆</text></svg>, questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }, { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }] },
  ],
};

export default function ReviewO6Explorer({ color, lang, onDone, onClose }: any) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
