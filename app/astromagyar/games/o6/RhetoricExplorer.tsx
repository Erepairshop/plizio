"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    r1t: "Retorika alapjai", r1x: "A retorika a szónoklat és a meggyőzés művelete.",
    r2t: "Érvelés", r2x: "Az érvelés logikus felépítésből áll: tétel, érv, konklúzió.",
    r3t: "Szónoki eszközök", r3x: "Metafora, szinesztézia, hyperbola segítik a kifejezést.",
    r4t: "Meggyőzés", r4x: "A pátosz, lógosz és étosz segítségével győzzünk meg.",
    r5t: "Gyakorlat", r5x: "Melyik szónoki eszköz ez?",
    q1: "Mi a retorika?", a1: "Szónoklat és meggyőzés", b1: "Nyelvtan", c1: "Költészet", d1: "Beszédtechnika",
    q2: "Mi az érvelés három lépése?", a2: "Tétel, érv, konklúzió", b2: "Bevezetés, test, zárás", c2: "Kérdés, válasz, reflexió", d2: "Szín, hang, ritmus",
    q3: "Mely szónoki eszköz a metafora?", a3: "Hasonlat", b3: "Szóképek", c3: "Személyesítés", d3: "Túlzás",
    q4: "Melyik eszköz érzelmeket ébreszt?", a4: "Pátosz", b4: "Lógosz", c4: "Ethos", d4: "Ritmus",
    q5: "Mi az étosz?", a5: "Beszélő személyisége", b5: "Logikus érvelés", c5: "Érzelmi hatás", d5: "Szókincs",
  },
  en: {
    r1t: "Rhetoric Basics", r1x: "Rhetoric is the art of speaking and persuasion.",
    r2t: "Argumentation", r2x: "Argument consists of thesis, evidence, and conclusion.",
    r3t: "Rhetorical Devices", r3x: "Metaphor, synesthesia, hyperbole aid expression.",
    r4t: "Persuasion", r4x: "Use pathos, logos, and ethos to persuade.",
    r5t: "Practice", r5x: "Which rhetorical device is this?",
    q1: "What is rhetoric?", a1: "Speaking and persuasion", b1: "Grammar", c1: "Poetry", d1: "Speech technique",
    q2: "What are the three steps of argumentation?", a2: "Thesis, evidence, conclusion", b2: "Intro, body, conclusion", c2: "Question, answer, reflection", d2: "Color, sound, rhythm",
    q3: "Which device is metaphor?", a3: "Simile", b3: "Figurative language", c3: "Personification", d3: "Exaggeration",
    q4: "Which awakens emotions?", a4: "Pathos", b4: "Logos", c4: "Ethos", d4: "Rhythm",
    q5: "What is ethos?", a5: "Speaker's character", b5: "Logical reasoning", c5: "Emotional appeal", d5: "Vocabulary",
  },
  de: {
    r1t: "Rhetorik Grundlagen", r1x: "Rhetorik ist die Kunst der Rede und Überzeugung.",
    r2t: "Argumentation", r2x: "Argumentation besteht aus These, Beweis und Schlussfolgerung.",
    r3t: "Rhetorische Mittel", r3x: "Metapher, Synästhesie, Hyperbel unterstützen den Ausdruck.",
    r4t: "Überzeugung", r4x: "Nutze Pathos, Logos und Ethos zur Überzeugung.",
    r5t: "Übung", r5x: "Welches rhetorische Mittel ist das?",
    q1: "Was ist Rhetorik?", a1: "Redekünstler und Überzeugung", b1: "Grammatik", c1: "Poesie", d1: "Sprechweise",
    q2: "Was sind die drei Schritte der Argumentation?", a2: "These, Beweis, Schluss", b2: "Einführung, Körper, Schluss", c2: "Frage, Antwort, Reflexion", d2: "Farbe, Ton, Rhythmus",
    q3: "Welches Mittel ist Metapher?", a3: "Vergleich", b3: "Bildliche Sprache", c3: "Personifikation", d3: "Übertreibung",
    q4: "Welches weckt Emotionen?", a4: "Pathos", b4: "Logos", c4: "Ethos", d4: "Rhythmus",
    q5: "Was ist Ethos?", a5: "Charaktere des Sprechers", b5: "Logisches Denken", c5: "Emotionaler Appell", d5: "Wortschatz",
  },
  ro: {
    r1t: "Retorică de bază", r1x: "Retorica este arta vorbirii și persuasiunii.",
    r2t: "Argumentare", r2x: "Argumentarea constă din teză, dovadă și concluzie.",
    r3t: "Instrumente retorici", r3x: "Metafora, sinestesie, hiperbolă ajută expresia.",
    r4t: "Persuasiune", r4x: "Folosește patos, logos și ethos pentru a persuada.",
    r5t: "Practică", r5x: "Care instrument retoric este acesta?",
    q1: "Ce este retorica?", a1: "Vorbire și persuasiune", b1: "Gramatică", c1: "Poezie", d1: "Tehnică de vorbire",
    q2: "Care sunt cele trei pași ai argumentării?", a2: "Teză, dovadă, concluzie", b2: "Introducere, corp, concluzie", c2: "Întrebare, răspuns, reflecție", d2: "Culoare, ton, ritm",
    q3: "Care instrument este metafora?", a3: "Comparație", b3: "Limbaj figurat", c3: "Personificare", d3: "Exagerare",
    q4: "Care trezește emoții?", a4: "Patos", b4: "Logos", c4: "Ethos", d4: "Ritm",
    q5: "Ce este ethos?", a5: "Caracterul vorbitorului", b5: "Gândire logică", c5: "Apel emoțional", d5: "Vocabular",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1t", infoText: "r1x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">🎤</text></svg> },
    { type: "mcq", infoTitle: "r2t", infoText: "r2x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">📝</text></svg>, questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }] },
    { type: "info", infoTitle: "r3t", infoText: "r3x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">✨</text></svg> },
    { type: "mcq", infoTitle: "r4t", infoText: "r4x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">💭</text></svg>, questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }, { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }] },
    { type: "mcq", infoTitle: "r5t", infoText: "r5x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🎯</text></svg>, questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }, { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }] },
  ],
};

export default function RhetoricExplorer({ color, lang, onDone, onClose }: any) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
