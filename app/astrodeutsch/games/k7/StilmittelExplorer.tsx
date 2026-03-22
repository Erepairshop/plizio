"use client";

import React from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    r1_info_title: "🎭 Stilmittel Überblick",
    r1_info_text: "Stilmittel sind sprachliche Techniken, die Texte ausdrucksstärker und interessanter machen. Die wichtigsten sind: Metapher (bildlicher Ausdruck: 'Das Herz brach.'), Vergleich (mit 'wie': 'stark wie ein Löwe'), Personifikation (Natur wird Person: 'Der Wind flüstert'), Alliteration (gleiche Anfangsbuchstaben: 'viel Vergnügen'), Hyperbel (Übertreibung: 'Ich hab dir tausendmal gesagt!').",
    r1_q: "Welcher Satz nutzt eine Metapher?",
    r1_a1: "Das Herz brach.",
    r1_a2: "Das Herz war wie Glas.",
    r1_a3: "Das Herz war traurig.",
    r1_a4: "Das Herz klopfte.",
    r2_info_title: "📖 Metapher & Vergleich",
    r2_info_text: "METAPHER: Zwei Dinge werden gleichgesetzt ohne 'wie'. 'Das Leben ist eine Reise.' (Leben = Reise) VERGLEICH: Zwei Dinge werden mit 'wie' verbunden. 'Das Leben ist wie eine Reise.' Beide nutzen Bilder um Gefühle oder Ideen auszudrücken, der Vergleich ist direkter.",
    r2_q: "Welcher Satz ist ein Vergleich?",
    r2_a1: "Die Nacht war eine Königin.",
    r2_a2: "Die Nacht war wie eine Königin.",
    r2_a3: "Die Nacht herrschte.",
    r2_a4: "Die Nacht war dunkel.",
    r3_info_title: "🌟 Personifikation & Hyperbel",
    r3_info_text: "PERSONIFIKATION: Nichtlebende Dinge bekommen menschliche Eigenschaften. 'Die Sonne lächelt.' 'Der Baum weint Tränen.' HYPERBEL: Extreme Übertreibung zur Verstärkung. 'Ich bin so müde, dass ich hier sterbe.' 'Das ist das Teuerste auf der ganzen Welt.' Beide verstärken emotionale Wirkung.",
    r3_q: "Welcher Satz zeigt Personifikation?",
    r3_a1: "Der Mond überblickt die Stadt.",
    r3_a2: "Der Mond ist weit weg.",
    r3_a3: "Der Mond ist hell.",
    r3_a4: "Der Mond steht am Himmel.",
    r4_info_title: "✨ Alliteration & weitere Mittel",
    r4_info_text: "ALLITERATION: Wiederholung von Anfangsbuchstaben. 'Mit Musik macht's mehr Spaß.' 'Leise läuten die Glocken.' ASSONANZ: Wiederholung von Vokalen. 'Süße Steine' ONOMATOPOESIE: Das Wort klingt wie sein Sinn. 'Das Wasser rauscht', 'Peng!' Diese Mittel schaffen Rhythmus und Klang.",
    r4_q: "Welcher Satz zeigt Alliteration?",
    r4_a1: "Müde Menschen machen Mittagsschlaf.",
    r4_a2: "Lange Leute sind groß.",
    r4_a3: "Die Personen waren müde.",
    r4_a4: "Menschen schlafen am Mittag.",
    r5_info_title: "✅ Wiederholung: Stilmittel",
    r5_info_text: "Teste dein Wissen!",
    r5_q1: "Art des Stilmittels? 'Die Zeit fliegt.'",
    r5_q1_a1: "Metapher",
    r5_q1_a2: "Vergleich",
    r5_q1_a3: "Alliteration",
    r5_q1_a4: "Hyperbel",
    r5_q2: "Welches Stilmittel liegt vor? 'schnell sprinten'",
    r5_q2_a1: "Alliteration",
    r5_q2_a2: "Personifikation",
    r5_q2_a3: "Metapher",
    r5_q2_a4: "Hyperbel",
    r5_q3: "Stilmittel: 'Das Licht drang wie ein Schwert durch die Dunkelheit.'",
    r5_q3_a1: "Vergleich und Metapher",
    r5_q3_a2: "Personifikation",
    r5_q3_a3: "Alliteration",
    r5_q3_a4: "Hyperbel",
  },
  en: {
    r1_info_title: "🎭 Figures of Speech Overview",
    r1_info_text: "Figures of speech are language techniques that make texts more expressive and interesting. The main ones are: Metaphor (figurative expression: 'The heart broke.'), Simile (with 'like': 'strong like a lion'), Personification (nature becomes a person: 'The wind whispers'), Alliteration (same starting letters: 'lovely loud laughter'), Hyperbole (exaggeration: 'I've told you a thousand times!').",
    r1_q: "Which sentence uses a metaphor?",
    r1_a1: "The heart broke.",
    r1_a2: "The heart was like glass.",
    r1_a3: "The heart was sad.",
    r1_a4: "The heart beat.",
    r2_info_title: "📖 Metaphor & Simile",
    r2_info_text: "METAPHOR: Two things are equated without 'like'. 'Life is a journey.' SIMILE: Two things are connected with 'like'. 'Life is like a journey.' Both use images to express feelings or ideas, the simile is more direct.",
    r2_q: "Which sentence is a simile?",
    r2_a1: "Night was a queen.",
    r2_a2: "Night was like a queen.",
    r2_a3: "Night ruled.",
    r2_a4: "Night was dark.",
    r3_info_title: "🌟 Personification & Hyperbole",
    r3_info_text: "PERSONIFICATION: Non-living things get human qualities. 'The sun smiles.' 'The tree weeps tears.' HYPERBOLE: Extreme exaggeration for emphasis. 'I'm so tired I could die.' 'That's the most expensive thing in the world.' Both strengthen emotional impact.",
    r3_q: "Which sentence shows personification?",
    r3_a1: "The moon overlooks the city.",
    r3_a2: "The moon is far away.",
    r3_a3: "The moon is bright.",
    r3_a4: "The moon is in the sky.",
    r4_info_title: "✨ Alliteration & More",
    r4_info_text: "ALLITERATION: Repetition of starting letters. 'With music makes it more merry.' 'Softly sound the silver bells.' ASSONANCE: Repetition of vowels. 'Sweet steals' ONOMATOPOEIA: The word sounds like its meaning. 'Water rushes', 'Bang!' These create rhythm and sound.",
    r4_q: "Which sentence shows alliteration?",
    r4_a1: "Weary workers want a weekend.",
    r4_a2: "Tall people are big.",
    r4_a3: "The people were tired.",
    r4_a4: "People sleep in the afternoon.",
    r5_info_title: "✅ Review: Figures of Speech",
    r5_info_text: "Test your knowledge!",
    r5_q1: "Type of figure? 'Time flies.'",
    r5_q1_a1: "Metaphor",
    r5_q1_a2: "Simile",
    r5_q1_a3: "Alliteration",
    r5_q1_a4: "Hyperbole",
    r5_q2: "Which figure is present? 'Rapidly racing'",
    r5_q2_a1: "Alliteration",
    r5_q2_a2: "Personification",
    r5_q2_a3: "Metaphor",
    r5_q2_a4: "Hyperbole",
    r5_q3: "Figure: 'Light pierced like a sword through the darkness.'",
    r5_q3_a1: "Simile and metaphor",
    r5_q3_a2: "Personification",
    r5_q3_a3: "Alliteration",
    r5_q3_a4: "Hyperbole",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_info_title",
      infoText: "r1_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🎭
          </text>
        </svg>
      ),
      questions: [{ question: "r1_q", choices: ["r1_a1", "r1_a2", "r1_a3", "r1_a4"], answer: "r1_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r2_info_title",
      infoText: "r2_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            📖
          </text>
        </svg>
      ),
      questions: [{ question: "r2_q", choices: ["r2_a1", "r2_a2", "r2_a3", "r2_a4"], answer: "r2_a2" }],
    },
    {
      type: "mcq",
      infoTitle: "r3_info_title",
      infoText: "r3_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            🌟
          </text>
        </svg>
      ),
      questions: [{ question: "r3_q", choices: ["r3_a1", "r3_a2", "r3_a3", "r3_a4"], answer: "r3_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r4_info_title",
      infoText: "r4_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ✨
          </text>
        </svg>
      ),
      questions: [{ question: "r4_q", choices: ["r4_a1", "r4_a2", "r4_a3", "r4_a4"], answer: "r4_a1" }],
    },
    {
      type: "mcq",
      infoTitle: "r5_info_title",
      infoText: "r5_info_text",
      svg: () => (
        <svg viewBox="0 0 240 160" style={{ background: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)" }}>
          <text x="120" y="80" textAnchor="middle" fontSize="60">
            ✅
          </text>
        </svg>
      ),
      questions: [
        { question: "r5_q1", choices: ["r5_q1_a1", "r5_q1_a2", "r5_q1_a3", "r5_q1_a4"], answer: "r5_q1_a1" },
        { question: "r5_q2", choices: ["r5_q2_a1", "r5_q2_a2", "r5_q2_a3", "r5_q2_a4"], answer: "r5_q2_a1" },
        { question: "r5_q3", choices: ["r5_q3_a1", "r5_q3_a2", "r5_q3_a3", "r5_q3_a4"], answer: "r5_q3_a1" },
      ],
    },
  ],
};

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function StilmittelExplorer({ color = "#F59E0B", lang = "de", onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
