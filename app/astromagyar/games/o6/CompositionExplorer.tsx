"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    r1t: "Fogalmazás alapjai", r1x: "A fogalmazás gondolatok szöveges formában történő kifejezése.",
    r2t: "Elbeszélés", r2x: "Az elbeszélés időrendben sorolja fel az eseményeket.",
    r3t: "Leírás", r3x: "A leírás személyeket, helyeket vagy tárgyakat rajzol le részletesen.",
    r4t: "Érvelés", r4x: "Az érvelés érvelési alapon támogatja az álláspontokat.",
    r5t: "Gyakorlat", r5x: "Mely típus ez?",
    q1: "Mi a fogalmazás?", a1: "Gondolatok szöveges formában", b1: "Szavak listája", c1: "Nyelvtan", d1: "Helyesírás",
    q2: "Mit tesz az elbeszélés?", a2: "Eseményeket időrendben sorol", b2: "Helyeket ír le", c2: "Érvelést fejt ki", d2: "Szavakat felsorol",
    q3: "Mit mutat a leírás?", a3: "Személyeket, helyeket, tárgyakat", b3: "Eseményeket", c3: "Érvelést", d3: "Szavakat",
    q4: "Mit csinál az érvelés?", a4: "Álláspontok támogatása", b4: "Eseményeket sorol", c4: "Helyeket ír le", d4: "Szavakat felsorol",
    q5: "Mely típus a történet?", a5: "Elbeszélés", b5: "Leírás", c5: "Érvelés", d5: "Szókincs",
  },
  en: { r1t: "Composition", r1x: "Expressing thoughts in text form.", r2t: "Narrative", r2x: "Events in order.", r3t: "Description", r3x: "Details of subjects.", r4t: "Argument", r4x: "Supporting positions.", r5t: "Practice", r5x: "What type?", q1: "What?", a1: "Thoughts", b1: "List", c1: "Grammar", d1: "Spelling", q2: "Does?", a2: "Events", b2: "Places", c2: "Argument", d2: "Words", q3: "Shows?", a3: "Details", b3: "Events", c3: "Argument", d3: "Words", q4: "Supports?", a4: "Positions", b4: "Events", c4: "Places", d4: "Words", q5: "Type?", a5: "Narrative", b5: "Description", c5: "Argument", d5: "Vocabulary" },
  de: { r1t: "Aufsatz", r1x: "Gedanken in Textform.", r2t: "Erzählung", r2x: "Ereignisse in Ordnung.", r3t: "Beschreibung", r3x: "Details von Objekten.", r4t: "Argumentation", r4x: "Positionen stützen.", r5t: "Übung", r5x: "Welcher Typ?", q1: "Was?", a1: "Gedanken", b1: "Liste", c1: "Grammatik", d1: "Rechtschreibung", q2: "Tut?", a2: "Ereignisse", b2: "Orte", c2: "Argumentation", d2: "Wörter", q3: "Zeigt?", a3: "Details", b3: "Ereignisse", c3: "Argumentation", d3: "Wörter", q4: "Stützt?", a4: "Positionen", b4: "Ereignisse", c4: "Orte", d4: "Wörter", q5: "Typ?", a5: "Erzählung", b5: "Beschreibung", c5: "Argumentation", d5: "Wortschatz" },
  ro: { r1t: "Compoziție", r1x: "Exprimare gânduri în text.", r2t: "Narație", r2x: "Evenimente în ordine.", r3t: "Descriere", r3x: "Detalii obiecte.", r4t: "Argumentare", r4x: "Susținere poziții.", r5t: "Practică", r5x: "Ce tip?", q1: "Ce?", a1: "Gânduri", b1: "Listă", c1: "Gramatică", d1: "Ortografie", q2: "Face?", a2: "Evenimente", b2: "Locuri", c2: "Argumentare", d2: "Cuvinte", q3: "Arată?", a3: "Detalii", b3: "Evenimente", c3: "Argumentare", d3: "Cuvinte", q4: "Susține?", a4: "Poziții", b4: "Evenimente", c4: "Locuri", d4: "Cuvinte", q5: "Tip?", a5: "Narație", b5: "Descriere", c5: "Argumentare", d5: "Vocabular" },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1t", infoText: "r1x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">📝</text></svg> },
    { type: "mcq", infoTitle: "r2t", infoText: "r2x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">📖</text></svg>, questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }] },
    { type: "info", infoTitle: "r3t", infoText: "r3x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🎨</text></svg> },
    { type: "mcq", infoTitle: "r4t", infoText: "r4x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">💬</text></svg>, questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }, { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }] },
    { type: "mcq", infoTitle: "r5t", infoText: "r5x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🏆</text></svg>, questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }, { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }] },
  ],
};

export default function CompositionExplorer({ color, lang, onDone, onClose }: any) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
