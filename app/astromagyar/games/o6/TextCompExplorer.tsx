"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    r1t: "Szövegértelmezés", r1x: "A szövegértelmezés a tartalom, szerkezet és stílus felismerése.",
    r2t: "Kulcsszavak", r2x: "A kulcsszavak a szöveg fő gondolatait hordozzák.",
    r3t: "Összefoglalás", r3x: "Az összefoglalás a szöveg lényegét tartalmazza.",
    r4t: "Elemzés", r4x: "Az elemzés a szöveg részleteit vizsgálja.",
    r5t: "Gyakorlat", r5x: "Mely kifejezés a fő gondolat?",
    q1: "Mi a szövegértelmezés?", a1: "Tartalom, szerkezet, stílus felismerése", b1: "Szavak felolvasása", c1: "Nyelvtani elemzés", d1: "Helyesírás ellenőrzése",
    q2: "Mit teszik a kulcsszavak?", a2: "Fő gondolatokat hordoznak", b2: "Dekorálják a szöveget", c2: "Hosszabbítják a szöveget", d2: "Nehezítik a szövegét",
    q3: "Mit tartalmaz az összefoglalás?", a3: "A szöveg lényegét", b3: "Az összes részletet", c3: "Csak az első részt", d3: "Véleményt a szövegről",
    q4: "Mit vizsgál az elemzés?", a4: "A szöveg részleteit", b4: "Csak a szavakat", c4: "Csak a ritmusét", d4: "Csak az érzelmeket",
    q5: "Mi a szöveg szerkezete?", a5: "Bevezetés, test, zárás", b5: "Csak mondatok sorozata", c5: "Szavak felsorolása", d5: "Ritmikus minta",
  },
  en: {
    r1t: "Text Comprehension", r1x: "Text comprehension is recognizing content, structure, and style.",
    r2t: "Key Words", r2x: "Key words carry the main ideas of the text.",
    r3t: "Summary", r3x: "A summary contains the essence of the text.",
    r4t: "Analysis", r4x: "Analysis examines the details of the text.",
    r5t: "Practice", r5x: "Which expression is the main idea?",
    q1: "What is text comprehension?", a1: "Recognizing content, structure, style", b1: "Reading aloud", c1: "Grammar analysis", d1: "Spelling check",
    q2: "What do key words do?", a2: "Carry main ideas", b2: "Decorate the text", c2: "Lengthen the text", d2: "Complicate the text",
    q3: "What does a summary contain?", a3: "The essence of the text", b3: "All details", c3: "Only the first part", d3: "Opinion about the text",
    q4: "What does analysis examine?", a4: "Details of the text", b4: "Only words", c4: "Only rhythm", d4: "Only emotions",
    q5: "What is text structure?", a5: "Intro, body, conclusion", b5: "Just a series of sentences", c5: "List of words", d5: "Rhythmic pattern",
  },
  de: {
    r1t: "Textverstehen", r1x: "Textverstehen ist das Erkennen von Inhalt, Struktur und Stil.",
    r2t: "Schlüsselwörter", r2x: "Schlüsselwörter tragen die Hauptideen des Textes.",
    r3t: "Zusammenfassung", r3x: "Eine Zusammenfassung enthält das Wesentliche des Textes.",
    r4t: "Analyse", r4x: "Analyse untersucht die Details des Textes.",
    r5t: "Übung", r5x: "Welcher Ausdruck ist die Hauptidee?",
    q1: "Was ist Textverstehen?", a1: "Erkennen von Inhalt, Struktur, Stil", b1: "Laut vorlesen", c1: "Grammatikanalyse", d1: "Rechtschreibprüfung",
    q2: "Was tun Schlüsselwörter?", a2: "Tragen Hauptideen", b2: "Verzieren den Text", c2: "Verlängern den Text", d2: "Verkomplizieren den Text",
    q3: "Was enthält eine Zusammenfassung?", a3: "Das Wesentliche des Textes", b3: "Alle Details", c3: "Nur den ersten Teil", d3: "Meinung zum Text",
    q4: "Was untersucht die Analyse?", a4: "Details des Textes", b4: "Nur Wörter", c4: "Nur Rhythmus", d4: "Nur Emotionen",
    q5: "Was ist Textstruktur?", a5: "Einführung, Körper, Schluss", b5: "Nur eine Reihe von Sätzen", c5: "Wortliste", d5: "Rhythmisches Muster",
  },
  ro: {
    r1t: "Înțelegere text", r1x: "Înțelegerea textului este recunoașterea conținutului, structurii și stilului.",
    r2t: "Cuvinte cheie", r2x: "Cuvintele cheie poartă ideile principale ale textului.",
    r3t: "Rezumat", r3x: "Un rezumat conține esența textului.",
    r4t: "Analiză", r4x: "Analiza examinează detaliile textului.",
    r5t: "Practică", r5x: "Care expresie este ideea principală?",
    q1: "Ce este înțelegerea textului?", a1: "Recunoașterea conținutului, structurii, stilului", b1: "Citire cu voce tare", c1: "Analiză gramaticală", d1: "Verificare ortografică",
    q2: "Ce fac cuvintele cheie?", a2: "Poartă ideile principale", b2: "Decorează textul", c2: "Lungesc textul", d2: "Complică textul",
    q3: "Ce conține un rezumat?", a3: "Esența textului", b3: "Toate detaliile", c3: "Doar prima parte", d3: "Opinie despre text",
    q4: "Ce examinează analiza?", a4: "Detaliile textului", b4: "Doar cuvinte", c4: "Doar ritm", d4: "Doar emoții",
    q5: "Care este structura textului?", a5: "Introducere, corp, concluzie", b5: "Doar o serie de propoziții", c5: "Lista de cuvinte", d5: "Modelul ritmic",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1t", infoText: "r1x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">📖</text></svg> },
    { type: "mcq", infoTitle: "r2t", infoText: "r2x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🔑</text></svg>, questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }] },
    { type: "info", infoTitle: "r3t", infoText: "r3x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">📝</text></svg> },
    { type: "mcq", infoTitle: "r4t", infoText: "r4x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🔍</text></svg>, questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }, { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }] },
    { type: "mcq", infoTitle: "r5t", infoText: "r5x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🎯</text></svg>, questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }, { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }] },
  ],
};

export default function TextCompExplorer({ color, lang, onDone, onClose }: any) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
