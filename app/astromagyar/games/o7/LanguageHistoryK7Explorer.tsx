"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    r1t: "Nyelvtörténet", r1x: "A magyar nyelv története és fejlődése.",
    r2t: "Nyelvcsalád", r2x: "A magyar az uráli nyelvcsaládhoz tartozik.",
    r3t: "Ómagyar", r3x: "A Halotti beszéd az első magyar nyelvemléke.",
    r4t: "Hangváltozások", r4x: "A hangtörvények a nyelvfejlődés szabályai.",
    r5t: "Gyakorlat", r5x: "Mi az ómagyar jellemzője?",
    q1: "Mely nyelvcsaládhoz tartozik a magyar?", a1: "Uráli", b1: "Indo-európai", c1: "Turkic", d1: "Szláv",
    q2: "Melyik az első magyar nyelvemlék?", a2: "Halotti beszéd", b2: "Ómagyar Mária-siralom", c2: "Codex Cumanicus", d2: "Jókai Mór",
    q3: "Mi az ómagyar nyelv jellemzője?", a3: "Érkezetesen írva", b3: "Modern szókincs", c3: "Latin hatás", d3: "Német eredetű szavak",
    q4: "Mit jelent a hangtörvény?", a4: "Hangtani fejlődés szabálya", b4: "Szókincs változása", c4: "Nyelvtani változás", d4: "Stílus változása",
    q5: "Mely szó származik az ómagyarból?", a5: "Isten", b5: "szabadság", c5: "tiszta", d5: "helyes",
  },
  en: { r1t: "Language History", r1x: "Hungarian language history and development.", r2t: "Language Family", r2x: "Hungarian belongs to Uralic family.", r3t: "Old Hungarian", r3x: "Funeral Oration is first monument.", r4t: "Sound Changes", r4x: "Phonetic rules of language development.", r5t: "Practice", r5x: "Old Hungarian characteristic?", q1: "Language family?", a1: "Uralic", b1: "Indo-European", c1: "Turkic", d1: "Slavic", q2: "First monument?", a2: "Funeral Oration", b2: "Mary's Lament", c2: "Codex Cumanicus", d2: "Jókai", q3: "Old Hungarian feature?", a3: "Accented written", b3: "Modern vocabulary", c3: "Latin influence", d3: "German origin", q4: "Sound law?", a4: "Phonetic rule", b4: "Vocabulary change", c4: "Grammar change", d4: "Style change", q5: "Old Hungarian word?", a5: "God", b5: "freedom", c5: "clean", d5: "correct" },
  de: { r1t: "Sprachgeschichte", r1x: "Geschichte und Entwicklung der ungarischen Sprache.", r2t: "Sprachfamilie", r2x: "Ungarisch gehört zur uralischen Familie.", r3t: "Altungarisch", r3x: "Die Leichenrede ist erste Sprachdenkmal.", r4t: "Lautveränderungen", r4x: "Lautgesetze der Sprachentwicklung.", r5t: "Übung", r5x: "Altungarisches Merkmal?", q1: "Sprachfamilie?", a1: "Uralisch", b1: "Indogermanisch", c1: "Turkisch", d1: "Slawisch", q2: "Erste Denkmal?", a2: "Leichenrede", b2: "Marienklage", c2: "Codex Cumanicus", d2: "Jókai", q3: "Altungarisches Merkmal?", a3: "Mit Akzent geschrieben", b3: "Moderner Wortschatz", c3: "Lateinischer Einfluss", d3: "Deutsche Herkunft", q4: "Lautgesetz?", a4: "Lautregel", b4: "Wortschatzänderung", c4: "Grammatikänderung", d4: "Stiländerung", q5: "Altungarisches Wort?", a5: "Gott", b5: "Freiheit", c5: "sauber", d5: "richtig" },
  ro: { r1t: "Istorie limbă", r1x: "Istorie și dezvoltare limba maghiară.", r2t: "Familie limbă", r2x: "Maghiara aparține familiei uralice.", r3t: "Maghiară veche", r3x: "Oraţiunea funerară este monument limbă.", r4t: "Schimbări sunet", r4x: "Legile fonetice dezvoltare limbă.", r5t: "Practică", r5x: "Caracteristic maghiară veche?", q1: "Familie limbă?", a1: "Uralică", b1: "Indo-europeană", c1: "Turcică", d1: "Slavă", q2: "Prim monument?", a2: "Oraţiunea funerară", b2: "Plângerea Mariei", c2: "Codex Cumanicus", d2: "Jókai", q3: "Caracteristic veche?", a3: "Cu accent scris", b3: "Vocabular modern", c3: "Influență latină", d3: "Origine germană", q4: "Lege sunet?", a4: "Regulă fonetică", b4: "Schimbare vocabular", c4: "Schimbare gramatică", d4: "Schimbare stil", q5: "Cuvânt vechi?", a5: "Dumnezeu", b5: "libertate", c5: "curat", d5: "corect" },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    { type: "info", infoTitle: "r1t", infoText: "r1x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">📜</text></svg> },
    { type: "mcq", infoTitle: "r2t", infoText: "r2x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🌍</text></svg>, questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }] },
    { type: "info", infoTitle: "r3t", infoText: "r3x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">📖</text></svg> },
    { type: "mcq", infoTitle: "r4t", infoText: "r4x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="40" fill="#FF2D78">🔤</text></svg>, questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }, { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }] },
    { type: "mcq", infoTitle: "r5t", infoText: "r5x", svg: () => <svg viewBox="0 0 240 160"><rect x="0" y="0" width="240" height="160" rx="16" fill="#FF2D7822" /><text x="120" y="90" textAnchor="middle" fontSize="45" fill="#FF2D78">🏆</text></svg>, questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }, { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }] },
  ],
};

export default function LanguageHistoryK7Explorer({ color, lang, onDone, onClose }: any) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
