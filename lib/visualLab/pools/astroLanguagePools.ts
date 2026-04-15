import { LanguagePools } from "../languageTypes";

export const ASTRO_LANGUAGE_POOLS: LanguagePools = {
  de: {
    1: {
      grade: 1,
      wortWaechter: [
        {
          id: "de-ww-k1-1",
          title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Hund",
          wrongWords: ["Hunt", "Hundt", "Hunnd"],
          theme: { bg: "#0f172a", accent: "#38bdf8" }
        }
      ],
      artikelAsteroids: [
        {
          id: "de-aa-k1-1",
          title: "Artikel-Asteroiden",
          instruction: "Sortiere die Nomen!",
          words: [
            { word: "Hund", article: "der" },
            { word: "Katze", article: "die" },
            { word: "Haus", article: "das" }
          ],
          categories: ["der", "die", "das"],
          theme: { bg: "#1e1b4b", accent: "#c084fc" }
        }
      ],
      satzbauSniper: [
        {
          id: "de-ss-k1-1",
          title: "Satzbau-Sniper",
          instruction: "Bilde den Satz!",
          words: ["Hund", "Der", "bellt"],
          correctOrder: ["Der", "Hund", "bellt"],
          theme: { bg: "#052e16", accent: "#a7f3d0" }
        }
      ],
      silbenSlicer: [
        {
          id: "de-sl-k1-1",
          title: "Silben-Slicer",
          instruction: "Zerschneide die Wörter!",
          words: [
            { word: "Katze", syllables: ["Kat", "ze"] },
            { word: "Hunde", syllables: ["Hun", "de"] }
          ],
          theme: { bg: "#4c1d95", accent: "#f472b6" }
        }
      ],
      verbenVortex: [
        {
          id: "de-vv-k1-1",
          title: "Verben-Vortex",
          instruction: "Welches Verb passt?",
          pronoun: "ich",
          correctVerb: "gehe",
          wrongVerbs: ["geht", "gehen", "gehst"],
          theme: { bg: "#2e1065", accent: "#fbbf24" }
        }
      ]
    },
    8: {
      grade: 8,
      wortWaechter: [
        {
          id: "de-ww-k8-1",
          title: "Wort-Wächter",
          instruction: "Welches Wort ist richtig?",
          targetWord: "Rhythmus",
          wrongWords: ["Rythmus", "Rytmus", "Ryhtmus"],
          theme: { bg: "#0f172a", accent: "#38bdf8" }
        }
      ],
      artikelAsteroids: [],
      satzbauSniper: [],
      silbenSlicer: [],
      verbenVortex: []
    }
  },
  hu: { 1: { grade: 1, wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [] } },
  ro: { 1: { grade: 1, wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [] } },
  en: { 1: { grade: 1, wortWaechter: [], artikelAsteroids: [], satzbauSniper: [], silbenSlicer: [], verbenVortex: [] } }
};
