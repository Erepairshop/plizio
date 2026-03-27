// lib/explorerPools/types.ts
// Data-driven pool types — pure TypeScript, no JSX
// These replace the JSX svg: (lang) => ReactNode field with serialisable SvgConfig data.
// TopicSvgRenderer.tsx converts SvgConfig → actual SVG at render time.

import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Descriptors ─────────────────────────────────────────────────────────

export type SvgConfig =
  /** Row of colored circles each showing a letter — good for vowels, alphabet */
  | {
      type: "letter-circles";
      letters: string[];
      color: string;         // hex — circle fill color
      showNotes?: boolean;   // show ♪ ♫ music notes (for vowels lesson)
    }
  /** Two bordered box groups for classification — good for vowel/consonant, gender */
  | {
      type: "two-groups";
      left:  { items: string[]; bg: string; border: string };
      right: { items: string[]; bg: string; border: string };
      bg?: string;           // overall background hex
    }
  /** Big letter → small letter pairs — good for uppercase/lowercase */
  | {
      type: "letter-pairs";
      pairs: [string, string][];  // [upper, lower]
      color: string;
      dimColor?: string;          // lighter color for the small letter
    }
  /** Word split into syllable parts with optional clap icons */
  | {
      type: "word-syllables";
      parts: string[];    // e.g. ["Son", "ne"]
      color: string;
      showClap?: boolean;
    }
  /** Row of colored oval/bubble items — good for diphthongs, articles */
  | {
      type: "text-bubbles";
      items: { text: string; emoji?: string; color: string; bg: string }[];
    }
  /** Two words with + sign and result — good for compound words */
  | {
      type: "compound-word";
      word1: string;
      word2: string;
      result: string;
      color: string;
    }
  /** Article + noun pair — good for German articles (der/die/das) */
  | {
      type: "article-noun";
      article: string;
      articleColor: string;
      noun: string;
      emoji?: string;
    }
  /** Grid of emoji icons with optional labels */
  | {
      type: "icon-grid";
      items: { emoji: string; label?: string }[];
      bg?: string;
    }
  /** Two rhyming words side by side */
  | {
      type: "rhyme-pair";
      word1: string;
      word2: string;
      emoji1?: string;
      emoji2?: string;
      color: string;
    }
  /** A sentence with optional word highlighting */
  | {
      type: "sentence-display";
      words: string[];
      highlightIndices?: number[];
      color: string;
    }
  /** Single word with optional character-level highlighting */
  | {
      type: "word-display";
      word: string;
      highlightChars?: string[];  // individual chars to highlight
      color: string;
      subtitle?: string;
    }
  /** One large emoji with optional title — simple fallback */
  | {
      type: "simple-icon";
      icon: string;
      title?: string;
      bg?: string;
      color?: string;
    };

// ─── Pool Topic ───────────────────────────────────────────────────────────────

export interface PoolTopicDef {
  /** Label key for topic title shown on info screen */
  infoTitle: string;
  /** Label key for teaching text paragraph */
  infoText: string;
  /** Data-driven SVG — rendered by TopicSvgRenderer */
  svg: SvgConfig;
  /** Optional label keys for bullet-point facts */
  bulletKeys?: string[];
  /** Optional label key for hint text */
  hintKey?: string;
  /** Interactive activity config (same type as ExplorerEngine) */
  interactive: TopicInteractive;
  /** Single MCQ quiz question after the interactive */
  quiz: {
    question: string;          // label key
    choices: string[];         // label keys (4 options)
    answer: string;            // label key of the correct choice
  };
  /** Optional difficulty tag for structured picking */
  difficulty?: "easy" | "medium" | "hard";
}
