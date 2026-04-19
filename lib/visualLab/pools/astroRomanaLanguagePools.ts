import { LanguageGradePool } from "../languageTypes";

const TS_THEME = { bg: "#0d0a1f", accent: "#a855f7" };
const WW_THEME = { bg: "#0f172a", accent: "#38bdf8" };
const AA_THEME = { bg: "#1e1b4b", accent: "#c084fc" };
const SS_THEME = { bg: "#052e16", accent: "#a7f3d0" };
const SL_THEME = { bg: "#4c1d95", accent: "#f472b6" };
const VV_THEME = { bg: "#2e1065", accent: "#fbbf24" };

export const ASTRO_ROMANA_LANGUAGE_POOL: Record<number, LanguageGradePool> = {
  1: {
    grade: 1,
    tippSturm: [
      {
        id: "ro-ts-k1-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["sus", "nas", "apă", "arc", "lac"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["foc", "sus", "cap", "cub", "mic"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["apă", "lup", "mic", "rău", "urs"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["foc", "om", "alb", "rău", "jos"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["mic", "pat", "foc", "pom", "rău"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["urs", "alb", "pom", "sac", "lac"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["om", "sus", "foc", "pom", "cub"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["lup", "sus", "apă", "sac", "lac"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["rău", "lup", "pat", "sus", "mic"],
        flashDuration: 5000,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k1-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["pat", "urs", "roz", "foc", "sac"],
        flashDuration: 5000,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k1-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "pat",
        wrongWords: ["patx", "paty", "patz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lac",
        wrongWords: ["lacx", "lacy", "lacz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "cap",
        wrongWords: ["capx", "capy", "capz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "apă",
        wrongWords: ["apăx", "apăy", "apăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "cap",
        wrongWords: ["capx", "capy", "capz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "arc",
        wrongWords: ["arcx", "arcy", "arcz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "sac",
        wrongWords: ["sacx", "sacy", "sacz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "om",
        wrongWords: ["omx", "omy", "omz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "apă",
        wrongWords: ["apăx", "apăy", "apăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k1-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lup",
        wrongWords: ["lupx", "lupy", "lupz"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k1-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "lup", article: "două" }, { word: "sac", article: "doi" }, { word: "roz", article: "un" }, { word: "jos", article: "un" }, { word: "arc", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "om", article: "două" }, { word: "urs", article: "un" }, { word: "alb", article: "două" }, { word: "foc", article: "un" }, { word: "jos", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "urs", article: "două" }, { word: "cap", article: "doi" }, { word: "sus", article: "doi" }, { word: "nas", article: "două" }, { word: "mic", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "sac", article: "doi" }, { word: "mic", article: "un" }, { word: "sus", article: "un" }, { word: "lup", article: "o" }, { word: "pat", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "jos", article: "doi" }, { word: "foc", article: "o" }, { word: "bun", article: "două" }, { word: "om", article: "o" }, { word: "cub", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "rău", article: "un" }, { word: "pat", article: "doi" }, { word: "arc", article: "două" }, { word: "sus", article: "o" }, { word: "pom", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "arc", article: "doi" }, { word: "om", article: "doi" }, { word: "bun", article: "două" }, { word: "rău", article: "un" }, { word: "apă", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "pom", article: "doi" }, { word: "roz", article: "două" }, { word: "rău", article: "un" }, { word: "jos", article: "un" }, { word: "foc", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "om", article: "doi" }, { word: "alb", article: "o" }, { word: "jos", article: "două" }, { word: "apă", article: "un" }, { word: "lac", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k1-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "arc", article: "două" }, { word: "alb", article: "două" }, { word: "nas", article: "o" }, { word: "pom", article: "două" }, { word: "urs", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k1-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["aici", "Voi", "sunteți"],
        correctOrder: ["Voi", "sunteți", "aici"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["e", "Ea", "sus"],
        correctOrder: ["Ea", "e", "sus"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["sus", "e", "Ea"],
        correctOrder: ["Ea", "e", "sus"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["aici", "sunteți", "Voi"],
        correctOrder: ["Voi", "sunteți", "aici"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["măr", "am", "Eu"],
        correctOrder: ["Eu", "am", "măr"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["sunteți", "aici", "Voi"],
        correctOrder: ["Voi", "sunteți", "aici"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["am", "Eu", "măr"],
        correctOrder: ["Eu", "am", "măr"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Voi", "aici", "sunteți"],
        correctOrder: ["Voi", "sunteți", "aici"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Eu", "măr", "am"],
        correctOrder: ["Eu", "am", "măr"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k1-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["sunteți", "Voi", "aici"],
        correctOrder: ["Voi", "sunteți", "aici"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k1-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "cub", syllables: ["c", "ub"] }, { word: "lac", syllables: ["l", "ac"] }, { word: "lup", syllables: ["l", "up"] }, { word: "arc", syllables: ["a", "rc"] }, { word: "foc", syllables: ["f", "oc"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "roz", syllables: ["r", "oz"] }, { word: "lac", syllables: ["l", "ac"] }, { word: "alb", syllables: ["a", "lb"] }, { word: "rău", syllables: ["r", "\u0103u"] }, { word: "pat", syllables: ["p", "at"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "sus", syllables: ["s", "us"] }, { word: "roz", syllables: ["r", "oz"] }, { word: "alb", syllables: ["a", "lb"] }, { word: "pom", syllables: ["p", "om"] }, { word: "urs", syllables: ["u", "rs"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "om", syllables: ["o", "m"] }, { word: "sus", syllables: ["s", "us"] }, { word: "sac", syllables: ["s", "ac"] }, { word: "urs", syllables: ["u", "rs"] }, { word: "cap", syllables: ["c", "ap"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "bun", syllables: ["b", "un"] }, { word: "cub", syllables: ["c", "ub"] }, { word: "lac", syllables: ["l", "ac"] }, { word: "alb", syllables: ["a", "lb"] }, { word: "urs", syllables: ["u", "rs"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "bun", syllables: ["b", "un"] }, { word: "foc", syllables: ["f", "oc"] }, { word: "sac", syllables: ["s", "ac"] }, { word: "lac", syllables: ["l", "ac"] }, { word: "cub", syllables: ["c", "ub"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "foc", syllables: ["f", "oc"] }, { word: "lac", syllables: ["l", "ac"] }, { word: "jos", syllables: ["j", "os"] }, { word: "sac", syllables: ["s", "ac"] }, { word: "arc", syllables: ["a", "rc"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "lac", syllables: ["l", "ac"] }, { word: "pom", syllables: ["p", "om"] }, { word: "om", syllables: ["o", "m"] }, { word: "sus", syllables: ["s", "us"] }, { word: "jos", syllables: ["j", "os"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "roz", syllables: ["r", "oz"] }, { word: "jos", syllables: ["j", "os"] }, { word: "lup", syllables: ["l", "up"] }, { word: "mic", syllables: ["m", "ic"] }, { word: "pat", syllables: ["p", "at"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k1-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "sac", syllables: ["s", "ac"] }, { word: "om", syllables: ["o", "m"] }, { word: "sus", syllables: ["s", "us"] }, { word: "pom", syllables: ["p", "om"] }, { word: "jos", syllables: ["j", "os"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k1-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a lua",
        wrongVerbs: ["a luax", "a luay", "a luaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a fi",
        wrongVerbs: ["a fix", "a fiy", "a fiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a sta",
        wrongVerbs: ["a stax", "a stay", "a staz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a da",
        wrongVerbs: ["a dax", "a day", "a daz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a lua",
        wrongVerbs: ["a luax", "a luay", "a luaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a avea",
        wrongVerbs: ["a aveax", "a aveay", "a aveaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a sta",
        wrongVerbs: ["a stax", "a stay", "a staz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a sta",
        wrongVerbs: ["a stax", "a stay", "a staz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a da",
        wrongVerbs: ["a dax", "a day", "a daz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k1-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a lua",
        wrongVerbs: ["a luax", "a luay", "a luaz"],
        theme: VV_THEME
      },
    ],
  },
  2: {
    grade: 2,
    tippSturm: [
      {
        id: "ro-ts-k2-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["pauză", "tablă", "lecție", "floare", "stilou"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["scaun", "carte", "clasă", "curte", "tablă"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["bancă", "minge", "clasă", "lecție", "scaun"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["tablă", "școală", "băiat", "fată", "bancă"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["băiat", "școală", "stilou", "fată", "copac"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["pădure", "tablă", "floare", "lecție", "curte"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["clasă", "școală", "fată", "băiat", "curte"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["carte", "școală", "caiet", "soare", "pauză"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["carte", "pădure", "copac", "bancă", "curte"],
        flashDuration: 4600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k2-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["tablă", "carte", "caiet", "munte", "pauză"],
        flashDuration: 4600,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k2-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "soare",
        wrongWords: ["soarex", "soarey", "soarez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lecție",
        wrongWords: ["lecțiex", "lecțiey", "lecțiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "munte",
        wrongWords: ["muntex", "muntey", "muntez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "cretă",
        wrongWords: ["cretăx", "cretăy", "cretăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lecție",
        wrongWords: ["lecțiex", "lecțiey", "lecțiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lecție",
        wrongWords: ["lecțiex", "lecțiey", "lecțiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "pauză",
        wrongWords: ["pauzăx", "pauzăy", "pauzăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "pădure",
        wrongWords: ["pădurex", "pădurey", "pădurez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "clasă",
        wrongWords: ["clasăx", "clasăy", "clasăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k2-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "curte",
        wrongWords: ["curtex", "curtey", "curtez"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k2-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "pauză", article: "o" }, { word: "carte", article: "două" }, { word: "lecție", article: "două" }, { word: "scaun", article: "doi" }, { word: "cretă", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "munte", article: "două" }, { word: "floare", article: "un" }, { word: "scaun", article: "două" }, { word: "carte", article: "o" }, { word: "pauză", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "minge", article: "un" }, { word: "pauză", article: "o" }, { word: "lecție", article: "doi" }, { word: "scaun", article: "doi" }, { word: "școală", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "copac", article: "un" }, { word: "băiat", article: "doi" }, { word: "școală", article: "două" }, { word: "lecție", article: "două" }, { word: "scaun", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "băiat", article: "două" }, { word: "carte", article: "o" }, { word: "fată", article: "doi" }, { word: "pădure", article: "două" }, { word: "stilou", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "floare", article: "o" }, { word: "cretă", article: "un" }, { word: "curte", article: "o" }, { word: "fată", article: "o" }, { word: "clasă", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "soare", article: "o" }, { word: "cretă", article: "două" }, { word: "curte", article: "două" }, { word: "bancă", article: "o" }, { word: "munte", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "copac", article: "doi" }, { word: "lecție", article: "un" }, { word: "stilou", article: "două" }, { word: "minge", article: "două" }, { word: "curte", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "cretă", article: "două" }, { word: "tablă", article: "doi" }, { word: "pădure", article: "o" }, { word: "minge", article: "o" }, { word: "munte", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k2-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "floare", article: "două" }, { word: "stilou", article: "un" }, { word: "bancă", article: "doi" }, { word: "scaun", article: "doi" }, { word: "pădure", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k2-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["muzica", "Ei", "ascultă"],
        correctOrder: ["Ei", "ascultă", "muzica"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Noi", "acasă", "mergem"],
        correctOrder: ["Noi", "mergem", "acasă"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["scrie", "Fata", "tema"],
        correctOrder: ["Fata", "scrie", "tema"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Băiatul", "citește", "cartea"],
        correctOrder: ["Băiatul", "citește", "cartea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Ei", "muzica", "ascultă"],
        correctOrder: ["Ei", "ascultă", "muzica"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["cartea", "citește", "Băiatul"],
        correctOrder: ["Băiatul", "citește", "cartea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Băiatul", "cartea", "citește"],
        correctOrder: ["Băiatul", "citește", "cartea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["fotbal", "Voi", "jucați"],
        correctOrder: ["Voi", "jucați", "fotbal"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["ascultă", "Ei", "muzica"],
        correctOrder: ["Ei", "ascultă", "muzica"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k2-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["scrie", "tema", "Fata"],
        correctOrder: ["Fata", "scrie", "tema"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k2-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "pădure", syllables: ["p\u0103d", "ure"] }, { word: "curte", syllables: ["cu", "rte"] }, { word: "clasă", syllables: ["cl", "as\u0103"] }, { word: "carte", syllables: ["ca", "rte"] }, { word: "lecție", syllables: ["lec", "\u021bie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "copac", syllables: ["co", "pac"] }, { word: "tablă", syllables: ["ta", "bl\u0103"] }, { word: "școală", syllables: ["\u0219co", "al\u0103"] }, { word: "băiat", syllables: ["b\u0103", "iat"] }, { word: "floare", syllables: ["flo", "are"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "scaun", syllables: ["sc", "aun"] }, { word: "fată", syllables: ["fa", "t\u0103"] }, { word: "bancă", syllables: ["ba", "nc\u0103"] }, { word: "munte", syllables: ["mu", "nte"] }, { word: "stilou", syllables: ["sti", "lou"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "carte", syllables: ["ca", "rte"] }, { word: "tablă", syllables: ["ta", "bl\u0103"] }, { word: "lecție", syllables: ["lec", "\u021bie"] }, { word: "curte", syllables: ["cu", "rte"] }, { word: "pădure", syllables: ["p\u0103d", "ure"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "școală", syllables: ["\u0219co", "al\u0103"] }, { word: "floare", syllables: ["flo", "are"] }, { word: "băiat", syllables: ["b\u0103", "iat"] }, { word: "bancă", syllables: ["ba", "nc\u0103"] }, { word: "fată", syllables: ["fa", "t\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "școală", syllables: ["\u0219co", "al\u0103"] }, { word: "copac", syllables: ["co", "pac"] }, { word: "caiet", syllables: ["ca", "iet"] }, { word: "scaun", syllables: ["sc", "aun"] }, { word: "pădure", syllables: ["p\u0103d", "ure"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "pădure", syllables: ["p\u0103d", "ure"] }, { word: "fată", syllables: ["fa", "t\u0103"] }, { word: "cretă", syllables: ["cr", "et\u0103"] }, { word: "minge", syllables: ["mi", "nge"] }, { word: "carte", syllables: ["ca", "rte"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "clasă", syllables: ["cl", "as\u0103"] }, { word: "minge", syllables: ["mi", "nge"] }, { word: "tablă", syllables: ["ta", "bl\u0103"] }, { word: "bancă", syllables: ["ba", "nc\u0103"] }, { word: "floare", syllables: ["flo", "are"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "munte", syllables: ["mu", "nte"] }, { word: "bancă", syllables: ["ba", "nc\u0103"] }, { word: "minge", syllables: ["mi", "nge"] }, { word: "copac", syllables: ["co", "pac"] }, { word: "tablă", syllables: ["ta", "bl\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k2-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "munte", syllables: ["mu", "nte"] }, { word: "scaun", syllables: ["sc", "aun"] }, { word: "minge", syllables: ["mi", "nge"] }, { word: "bancă", syllables: ["ba", "nc\u0103"] }, { word: "școală", syllables: ["\u0219co", "al\u0103"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k2-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a scrie",
        wrongVerbs: ["a scriex", "a scriey", "a scriez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a juca",
        wrongVerbs: ["a jucax", "a jucay", "a jucaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a cânta",
        wrongVerbs: ["a cântax", "a cântay", "a cântaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a juca",
        wrongVerbs: ["a jucax", "a jucay", "a jucaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a juca",
        wrongVerbs: ["a jucax", "a jucay", "a jucaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a scrie",
        wrongVerbs: ["a scriex", "a scriey", "a scriez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a dansa",
        wrongVerbs: ["a dansax", "a dansay", "a dansaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a citi",
        wrongVerbs: ["a citix", "a citiy", "a citiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a scrie",
        wrongVerbs: ["a scriex", "a scriey", "a scriez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k2-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a scrie",
        wrongVerbs: ["a scriex", "a scriey", "a scriez"],
        theme: VV_THEME
      },
    ],
  },
  3: {
    grade: 3,
    tippSturm: [
      {
        id: "ro-ts-k3-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["fereastră", "mamă", "casă", "bunică", "învățător"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["unchi", "bunic", "tată", "bunică", "mătușă"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["bunică", "învățător", "director", "masă", "părinte"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["învățător", "casă", "director", "părinte", "soră"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["văr", "tată", "mamă", "unchi", "masă"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["bunică", "unchi", "soră", "casă", "masă"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["tată", "soră", "verișoară", "familie", "profesor"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["tată", "casă", "masă", "director", "coleg"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["părinte", "frate", "văr", "verișoară", "fereastră"],
        flashDuration: 4200,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k3-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["bunică", "familie", "văr", "mătușă", "mamă"],
        flashDuration: 4200,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k3-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "bunic",
        wrongWords: ["bunicx", "bunicy", "bunicz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "bunică",
        wrongWords: ["bunicăx", "bunicăy", "bunicăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "văr",
        wrongWords: ["vărx", "văry", "vărz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "mătușă",
        wrongWords: ["mătușăx", "mătușăy", "mătușăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "învățător",
        wrongWords: ["învățătorx", "învățătory", "învățătorz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "coleg",
        wrongWords: ["colegx", "colegy", "colegz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "director",
        wrongWords: ["directorx", "directory", "directorz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "învățător",
        wrongWords: ["învățătorx", "învățătory", "învățătorz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "soră",
        wrongWords: ["sorăx", "sorăy", "sorăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k3-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "casă",
        wrongWords: ["casăx", "casăy", "casăz"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k3-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "prieten", article: "doi" }, { word: "bunică", article: "două" }, { word: "învățător", article: "două" }, { word: "profesor", article: "o" }, { word: "fereastră", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "părinte", article: "o" }, { word: "văr", article: "un" }, { word: "tată", article: "un" }, { word: "casă", article: "o" }, { word: "mătușă", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "coleg", article: "doi" }, { word: "învățător", article: "o" }, { word: "frate", article: "o" }, { word: "mătușă", article: "o" }, { word: "verișoară", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "verișoară", article: "o" }, { word: "soră", article: "o" }, { word: "tată", article: "doi" }, { word: "mătușă", article: "o" }, { word: "profesor", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "soră", article: "o" }, { word: "casă", article: "un" }, { word: "mătușă", article: "două" }, { word: "tată", article: "un" }, { word: "masă", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "masă", article: "doi" }, { word: "director", article: "o" }, { word: "familie", article: "două" }, { word: "casă", article: "doi" }, { word: "mamă", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "verișoară", article: "o" }, { word: "bunic", article: "un" }, { word: "casă", article: "două" }, { word: "director", article: "un" }, { word: "familie", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "mamă", article: "o" }, { word: "verișoară", article: "o" }, { word: "masă", article: "doi" }, { word: "unchi", article: "doi" }, { word: "bunică", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "văr", article: "un" }, { word: "casă", article: "două" }, { word: "masă", article: "un" }, { word: "bunic", article: "două" }, { word: "profesor", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k3-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "învățător", article: "doi" }, { word: "director", article: "o" }, { word: "părinte", article: "o" }, { word: "mamă", article: "o" }, { word: "bunică", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k3-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Fratele", "învață", "meu"],
        correctOrder: ["Fratele", "meu", "învață"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["masa", "pregătește", "Mama"],
        correctOrder: ["Mama", "pregătește", "masa"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["este", "Prietenul", "aici", "meu"],
        correctOrder: ["Prietenul", "meu", "este", "aici"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["meu", "învață", "Fratele"],
        correctOrder: ["Fratele", "meu", "învață"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["conduce", "Tata", "mașina"],
        correctOrder: ["Tata", "conduce", "mașina"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Tata", "mașina", "conduce"],
        correctOrder: ["Tata", "conduce", "mașina"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["pregătește", "Mama", "masa"],
        correctOrder: ["Mama", "pregătește", "masa"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Profesorul", "lecția", "explică"],
        correctOrder: ["Profesorul", "explică", "lecția"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["explică", "Profesorul", "lecția"],
        correctOrder: ["Profesorul", "explică", "lecția"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k3-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["mașina", "Tata", "conduce"],
        correctOrder: ["Tata", "conduce", "mașina"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k3-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "mamă", syllables: ["ma", "m\u0103"] }, { word: "profesor", syllables: ["prof", "esor"] }, { word: "prieten", syllables: ["pri", "eten"] }, { word: "bunic", syllables: ["bu", "nic"] }, { word: "unchi", syllables: ["un", "chi"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "văr", syllables: ["v", "\u0103r"] }, { word: "masă", syllables: ["ma", "s\u0103"] }, { word: "coleg", syllables: ["co", "leg"] }, { word: "mătușă", syllables: ["m\u0103t", "u\u0219\u0103"] }, { word: "fereastră", syllables: ["fere", "astr\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "mamă", syllables: ["ma", "m\u0103"] }, { word: "văr", syllables: ["v", "\u0103r"] }, { word: "profesor", syllables: ["prof", "esor"] }, { word: "tată", syllables: ["ta", "t\u0103"] }, { word: "soră", syllables: ["so", "r\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "tată", syllables: ["ta", "t\u0103"] }, { word: "coleg", syllables: ["co", "leg"] }, { word: "frate", syllables: ["fr", "ate"] }, { word: "prieten", syllables: ["pri", "eten"] }, { word: "familie", syllables: ["fam", "ilie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "prieten", syllables: ["pri", "eten"] }, { word: "învățător", syllables: ["\u00eenv\u0103", "\u021b\u0103tor"] }, { word: "frate", syllables: ["fr", "ate"] }, { word: "mătușă", syllables: ["m\u0103t", "u\u0219\u0103"] }, { word: "tată", syllables: ["ta", "t\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "familie", syllables: ["fam", "ilie"] }, { word: "tată", syllables: ["ta", "t\u0103"] }, { word: "frate", syllables: ["fr", "ate"] }, { word: "mamă", syllables: ["ma", "m\u0103"] }, { word: "unchi", syllables: ["un", "chi"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "tată", syllables: ["ta", "t\u0103"] }, { word: "prieten", syllables: ["pri", "eten"] }, { word: "masă", syllables: ["ma", "s\u0103"] }, { word: "profesor", syllables: ["prof", "esor"] }, { word: "mătușă", syllables: ["m\u0103t", "u\u0219\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "unchi", syllables: ["un", "chi"] }, { word: "coleg", syllables: ["co", "leg"] }, { word: "părinte", syllables: ["p\u0103r", "inte"] }, { word: "învățător", syllables: ["\u00eenv\u0103", "\u021b\u0103tor"] }, { word: "frate", syllables: ["fr", "ate"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "masă", syllables: ["ma", "s\u0103"] }, { word: "verișoară", syllables: ["veri", "\u0219oar\u0103"] }, { word: "unchi", syllables: ["un", "chi"] }, { word: "frate", syllables: ["fr", "ate"] }, { word: "bunic", syllables: ["bu", "nic"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k3-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "văr", syllables: ["v", "\u0103r"] }, { word: "părinte", syllables: ["p\u0103r", "inte"] }, { word: "prieten", syllables: ["pri", "eten"] }, { word: "casă", syllables: ["ca", "s\u0103"] }, { word: "învățător", syllables: ["\u00eenv\u0103", "\u021b\u0103tor"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k3-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a merge",
        wrongVerbs: ["a mergex", "a mergey", "a mergez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a vorbi",
        wrongVerbs: ["a vorbix", "a vorbiy", "a vorbiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a învăța",
        wrongVerbs: ["a învățax", "a învățay", "a învățaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a privi",
        wrongVerbs: ["a privix", "a priviy", "a priviz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a asculta",
        wrongVerbs: ["a ascultax", "a ascultay", "a ascultaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a vorbi",
        wrongVerbs: ["a vorbix", "a vorbiy", "a vorbiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a vorbi",
        wrongVerbs: ["a vorbix", "a vorbiy", "a vorbiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a vorbi",
        wrongVerbs: ["a vorbix", "a vorbiy", "a vorbiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a merge",
        wrongVerbs: ["a mergex", "a mergey", "a mergez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k3-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a învăța",
        wrongVerbs: ["a învățax", "a învățay", "a învățaz"],
        theme: VV_THEME
      },
    ],
  },
  4: {
    grade: 4,
    tippSturm: [
      {
        id: "ro-ts-k4-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["frică", "frumos", "adevăr", "iubire", "bucurie"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["iubire", "urât", "război", "libertate", "bine"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["frică", "tristețe", "speranță", "iubire", "prost"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["frică", "iubire", "pace", "curaj", "bine"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["urât", "bucurie", "dreptate", "bine", "minciună"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["iubire", "pace", "urât", "frumos", "bucurie"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["minciună", "rău", "adevăr", "bine", "iubire"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["bine", "bucurie", "frică", "dreptate", "adevăr"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["război", "prost", "iubire", "ură", "pace"],
        flashDuration: 3900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k4-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["bine", "speranță", "pace", "frică", "frumos"],
        flashDuration: 3900,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k4-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "iubire",
        wrongWords: ["iubirex", "iubirey", "iubirez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "prost",
        wrongWords: ["prostx", "prosty", "prostz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "război",
        wrongWords: ["războix", "războiy", "războiz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "libertate",
        wrongWords: ["libertatex", "libertatey", "libertatez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "tristețe",
        wrongWords: ["tristețex", "tristețey", "tristețez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "război",
        wrongWords: ["războix", "războiy", "războiz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "pace",
        wrongWords: ["pacex", "pacey", "pacez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "dreptate",
        wrongWords: ["dreptatex", "dreptatey", "dreptatez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "minciună",
        wrongWords: ["minciunăx", "minciunăy", "minciunăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k4-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "urât",
        wrongWords: ["urâtx", "urâty", "urâtz"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k4-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "ură", article: "un" }, { word: "speranță", article: "două" }, { word: "curaj", article: "doi" }, { word: "urât", article: "un" }, { word: "prost", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "război", article: "o" }, { word: "iubire", article: "un" }, { word: "bucurie", article: "o" }, { word: "frică", article: "două" }, { word: "ură", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "război", article: "doi" }, { word: "tristețe", article: "doi" }, { word: "libertate", article: "o" }, { word: "bine", article: "doi" }, { word: "ură", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "nedreptate", article: "două" }, { word: "frică", article: "un" }, { word: "tristețe", article: "doi" }, { word: "prost", article: "o" }, { word: "libertate", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "pace", article: "un" }, { word: "ură", article: "un" }, { word: "frică", article: "doi" }, { word: "bucurie", article: "două" }, { word: "curaj", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "bine", article: "doi" }, { word: "ură", article: "două" }, { word: "pace", article: "o" }, { word: "război", article: "o" }, { word: "prost", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "iubire", article: "două" }, { word: "curaj", article: "doi" }, { word: "dreptate", article: "o" }, { word: "bine", article: "o" }, { word: "inteligent", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "tristețe", article: "o" }, { word: "curaj", article: "o" }, { word: "libertate", article: "o" }, { word: "bucurie", article: "două" }, { word: "ură", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "speranță", article: "un" }, { word: "curaj", article: "doi" }, { word: "rău", article: "o" }, { word: "bucurie", article: "un" }, { word: "frumos", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k4-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "prost", article: "un" }, { word: "dreptate", article: "doi" }, { word: "minciună", article: "un" }, { word: "frumos", article: "doi" }, { word: "ură", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k4-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["citit", "carte", "Am", "interesantă", "o"],
        correctOrder: ["Am", "citit", "o", "carte", "interesantă"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["vor", "Ei", "mâine", "pleca"],
        correctOrder: ["Ei", "vor", "pleca", "mâine"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["interesantă", "citit", "Am", "o", "carte"],
        correctOrder: ["Am", "citit", "o", "carte", "interesantă"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Noi", "vizitat", "muzeu", "am", "un"],
        correctOrder: ["Noi", "am", "vizitat", "un", "muzeu"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["cântă", "Ea", "melodie", "o"],
        correctOrder: ["Ea", "cântă", "o", "melodie"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["mesaj", "Voi", "un", "scrie"],
        correctOrder: ["Voi", "scrie", "un", "mesaj"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["un", "scrie", "mesaj", "Voi"],
        correctOrder: ["Voi", "scrie", "un", "mesaj"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Ea", "o", "cântă", "melodie"],
        correctOrder: ["Ea", "cântă", "o", "melodie"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["o", "Am", "citit", "interesantă", "carte"],
        correctOrder: ["Am", "citit", "o", "carte", "interesantă"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k4-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["pleca", "mâine", "vor", "Ei"],
        correctOrder: ["Ei", "vor", "pleca", "mâine"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k4-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "curaj", syllables: ["cu", "raj"] }, { word: "inteligent", syllables: ["intel", "igent"] }, { word: "bine", syllables: ["bi", "ne"] }, { word: "urât", syllables: ["ur", "\u00e2t"] }, { word: "bucurie", syllables: ["buc", "urie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "frică", syllables: ["fr", "ic\u0103"] }, { word: "urât", syllables: ["ur", "\u00e2t"] }, { word: "pace", syllables: ["pa", "ce"] }, { word: "minciună", syllables: ["minc", "iun\u0103"] }, { word: "iubire", syllables: ["iub", "ire"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "iubire", syllables: ["iub", "ire"] }, { word: "minciună", syllables: ["minc", "iun\u0103"] }, { word: "rău", syllables: ["r", "\u0103u"] }, { word: "urât", syllables: ["ur", "\u00e2t"] }, { word: "inteligent", syllables: ["intel", "igent"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "dreptate", syllables: ["drep", "tate"] }, { word: "urât", syllables: ["ur", "\u00e2t"] }, { word: "prost", syllables: ["pr", "ost"] }, { word: "nedreptate", syllables: ["nedre", "ptate"] }, { word: "minciună", syllables: ["minc", "iun\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "război", syllables: ["r\u0103z", "boi"] }, { word: "curaj", syllables: ["cu", "raj"] }, { word: "speranță", syllables: ["sper", "an\u021b\u0103"] }, { word: "dreptate", syllables: ["drep", "tate"] }, { word: "ură", syllables: ["u", "r\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "rău", syllables: ["r", "\u0103u"] }, { word: "pace", syllables: ["pa", "ce"] }, { word: "adevăr", syllables: ["ade", "v\u0103r"] }, { word: "ură", syllables: ["u", "r\u0103"] }, { word: "inteligent", syllables: ["intel", "igent"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "rău", syllables: ["r", "\u0103u"] }, { word: "frumos", syllables: ["fru", "mos"] }, { word: "pace", syllables: ["pa", "ce"] }, { word: "ură", syllables: ["u", "r\u0103"] }, { word: "curaj", syllables: ["cu", "raj"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "iubire", syllables: ["iub", "ire"] }, { word: "frică", syllables: ["fr", "ic\u0103"] }, { word: "război", syllables: ["r\u0103z", "boi"] }, { word: "rău", syllables: ["r", "\u0103u"] }, { word: "libertate", syllables: ["libe", "rtate"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "libertate", syllables: ["libe", "rtate"] }, { word: "minciună", syllables: ["minc", "iun\u0103"] }, { word: "urât", syllables: ["ur", "\u00e2t"] }, { word: "prost", syllables: ["pr", "ost"] }, { word: "frică", syllables: ["fr", "ic\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k4-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "frică", syllables: ["fr", "ic\u0103"] }, { word: "libertate", syllables: ["libe", "rtate"] }, { word: "minciună", syllables: ["minc", "iun\u0103"] }, { word: "prost", syllables: ["pr", "ost"] }, { word: "adevăr", syllables: ["ade", "v\u0103r"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k4-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a gândi",
        wrongVerbs: ["a gândix", "a gândiy", "a gândiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a simți",
        wrongVerbs: ["a simțix", "a simțiy", "a simțiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a gândi",
        wrongVerbs: ["a gândix", "a gândiy", "a gândiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a urî",
        wrongVerbs: ["a urîx", "a urîy", "a urîz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a simți",
        wrongVerbs: ["a simțix", "a simțiy", "a simțiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a urî",
        wrongVerbs: ["a urîx", "a urîy", "a urîz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a spera",
        wrongVerbs: ["a sperax", "a speray", "a speraz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a iubi",
        wrongVerbs: ["a iubix", "a iubiy", "a iubiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a iubi",
        wrongVerbs: ["a iubix", "a iubiy", "a iubiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k4-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a urî",
        wrongVerbs: ["a urîx", "a urîy", "a urîz"],
        theme: VV_THEME
      },
    ],
  },
  5: {
    grade: 5,
    tippSturm: [
      {
        id: "ro-ts-k5-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["spaniolă", "japoneză", "biologie", "franceză", "română"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["engleză", "japoneză", "fizică", "spaniolă", "germană"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["rusă", "religie", "matematică", "română", "desen"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["chineză", "biologie", "matematică", "japoneză", "engleză"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["biologie", "informatică", "germană", "japoneză", "italiană"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["chimie", "italiană", "engleză", "religie", "japoneză"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["română", "franceză", "sport", "matematică", "chimie"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["biologie", "informatică", "rusă", "geografie", "germană"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["matematică", "istorie", "religie", "fizică", "japoneză"],
        flashDuration: 3600,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k5-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["sport", "biologie", "muzică", "geografie", "chineză"],
        flashDuration: 3600,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k5-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "fizică",
        wrongWords: ["fizicăx", "fizicăy", "fizicăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "matematică",
        wrongWords: ["matematicăx", "matematicăy", "matematicăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "spaniolă",
        wrongWords: ["spaniolăx", "spaniolăy", "spaniolăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "engleză",
        wrongWords: ["englezăx", "englezăy", "englezăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "religie",
        wrongWords: ["religiex", "religiey", "religiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "biologie",
        wrongWords: ["biologiex", "biologiey", "biologiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "geografie",
        wrongWords: ["geografiex", "geografiey", "geografiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "franceză",
        wrongWords: ["francezăx", "francezăy", "francezăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "română",
        wrongWords: ["românăx", "românăy", "românăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k5-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "chineză",
        wrongWords: ["chinezăx", "chinezăy", "chinezăz"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k5-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "franceză", article: "doi" }, { word: "română", article: "un" }, { word: "desen", article: "un" }, { word: "geografie", article: "o" }, { word: "chimie", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "română", article: "un" }, { word: "informatică", article: "doi" }, { word: "japoneză", article: "doi" }, { word: "chimie", article: "o" }, { word: "istorie", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "religie", article: "două" }, { word: "germană", article: "două" }, { word: "franceză", article: "doi" }, { word: "japoneză", article: "două" }, { word: "engleză", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "muzică", article: "un" }, { word: "matematică", article: "o" }, { word: "chimie", article: "doi" }, { word: "franceză", article: "un" }, { word: "fizică", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "germană", article: "doi" }, { word: "religie", article: "două" }, { word: "fizică", article: "un" }, { word: "sport", article: "două" }, { word: "istorie", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "spaniolă", article: "un" }, { word: "italiană", article: "două" }, { word: "chineză", article: "două" }, { word: "desen", article: "o" }, { word: "engleză", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "desen", article: "o" }, { word: "italiană", article: "o" }, { word: "muzică", article: "o" }, { word: "franceză", article: "doi" }, { word: "informatică", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "biologie", article: "doi" }, { word: "geografie", article: "doi" }, { word: "chineză", article: "două" }, { word: "chimie", article: "un" }, { word: "franceză", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "matematică", article: "două" }, { word: "muzică", article: "un" }, { word: "rusă", article: "un" }, { word: "germană", article: "doi" }, { word: "geografie", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k5-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "informatică", article: "o" }, { word: "desen", article: "un" }, { word: "spaniolă", article: "un" }, { word: "geografie", article: "o" }, { word: "fizică", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k5-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["natura", "Fizica", "explică"],
        correctOrder: ["Fizica", "explică", "natura"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Istoria", "despre", "ne", "trecut", "învață"],
        correctOrder: ["Istoria", "ne", "învață", "despre", "trecut"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["natura", "explică", "Fizica"],
        correctOrder: ["Fizica", "explică", "natura"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["analizează", "substanțele", "Chimia"],
        correctOrder: ["Chimia", "analizează", "substanțele"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["învață", "Istoria", "despre", "trecut", "ne"],
        correctOrder: ["Istoria", "ne", "învață", "despre", "trecut"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["este", "grea", "Matematica", "materie", "o"],
        correctOrder: ["Matematica", "este", "o", "materie", "grea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Istoria", "trecut", "ne", "învață", "despre"],
        correctOrder: ["Istoria", "ne", "învață", "despre", "trecut"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Chimia", "substanțele", "analizează"],
        correctOrder: ["Chimia", "analizează", "substanțele"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Chimia", "substanțele", "analizează"],
        correctOrder: ["Chimia", "analizează", "substanțele"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k5-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["viața", "Biologia", "studiază"],
        correctOrder: ["Biologia", "studiază", "viața"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k5-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "spaniolă", syllables: ["span", "iol\u0103"] }, { word: "chimie", syllables: ["chi", "mie"] }, { word: "italiană", syllables: ["ital", "ian\u0103"] }, { word: "muzică", syllables: ["muz", "ic\u0103"] }, { word: "chineză", syllables: ["chi", "nez\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "română", syllables: ["rom", "\u00e2n\u0103"] }, { word: "engleză", syllables: ["eng", "lez\u0103"] }, { word: "spaniolă", syllables: ["span", "iol\u0103"] }, { word: "japoneză", syllables: ["japo", "nez\u0103"] }, { word: "fizică", syllables: ["fiz", "ic\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "franceză", syllables: ["fran", "cez\u0103"] }, { word: "chineză", syllables: ["chi", "nez\u0103"] }, { word: "engleză", syllables: ["eng", "lez\u0103"] }, { word: "chimie", syllables: ["chi", "mie"] }, { word: "muzică", syllables: ["muz", "ic\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "geografie", syllables: ["geog", "rafie"] }, { word: "sport", syllables: ["sp", "ort"] }, { word: "rusă", syllables: ["ru", "s\u0103"] }, { word: "chimie", syllables: ["chi", "mie"] }, { word: "franceză", syllables: ["fran", "cez\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "spaniolă", syllables: ["span", "iol\u0103"] }, { word: "geografie", syllables: ["geog", "rafie"] }, { word: "biologie", syllables: ["biol", "ogie"] }, { word: "rusă", syllables: ["ru", "s\u0103"] }, { word: "japoneză", syllables: ["japo", "nez\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "religie", syllables: ["rel", "igie"] }, { word: "italiană", syllables: ["ital", "ian\u0103"] }, { word: "matematică", syllables: ["matem", "atic\u0103"] }, { word: "engleză", syllables: ["eng", "lez\u0103"] }, { word: "biologie", syllables: ["biol", "ogie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "sport", syllables: ["sp", "ort"] }, { word: "rusă", syllables: ["ru", "s\u0103"] }, { word: "română", syllables: ["rom", "\u00e2n\u0103"] }, { word: "matematică", syllables: ["matem", "atic\u0103"] }, { word: "chineză", syllables: ["chi", "nez\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "germană", syllables: ["ger", "man\u0103"] }, { word: "desen", syllables: ["de", "sen"] }, { word: "geografie", syllables: ["geog", "rafie"] }, { word: "muzică", syllables: ["muz", "ic\u0103"] }, { word: "română", syllables: ["rom", "\u00e2n\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "desen", syllables: ["de", "sen"] }, { word: "fizică", syllables: ["fiz", "ic\u0103"] }, { word: "română", syllables: ["rom", "\u00e2n\u0103"] }, { word: "istorie", syllables: ["ist", "orie"] }, { word: "geografie", syllables: ["geog", "rafie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k5-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "chineză", syllables: ["chi", "nez\u0103"] }, { word: "religie", syllables: ["rel", "igie"] }, { word: "română", syllables: ["rom", "\u00e2n\u0103"] }, { word: "rusă", syllables: ["ru", "s\u0103"] }, { word: "biologie", syllables: ["biol", "ogie"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k5-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a studia",
        wrongVerbs: ["a studiax", "a studiay", "a studiaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a studia",
        wrongVerbs: ["a studiax", "a studiay", "a studiaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a înțelege",
        wrongVerbs: ["a înțelegex", "a înțelegey", "a înțelegez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a studia",
        wrongVerbs: ["a studiax", "a studiay", "a studiaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a explica",
        wrongVerbs: ["a explicax", "a explicay", "a explicaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a analiza",
        wrongVerbs: ["a analizax", "a analizay", "a analizaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a înțelege",
        wrongVerbs: ["a înțelegex", "a înțelegey", "a înțelegez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a analiza",
        wrongVerbs: ["a analizax", "a analizay", "a analizaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a explica",
        wrongVerbs: ["a explicax", "a explicay", "a explicaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k5-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a studia",
        wrongVerbs: ["a studiax", "a studiay", "a studiaz"],
        theme: VV_THEME
      },
    ],
  },
  6: {
    grade: 6,
    tippSturm: [
      {
        id: "ro-ts-k6-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["orbita", "asteroid", "uranus", "univers", "stea"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["jupiter", "cometă", "galaxie", "univers", "gravitație"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["pământ", "meteor", "marte", "cometă", "neptun"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["marte", "uranus", "stea", "galaxie", "orbita"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["asteroid", "cometă", "satelit", "galaxie", "meteor"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["soare", "galaxie", "planetă", "satelit", "jupiter"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["stea", "meteor", "univers", "gravitație", "saturn"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["uranus", "planetă", "univers", "asteroid", "pământ"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["soare", "saturn", "neptun", "univers", "lună"],
        flashDuration: 3300,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k6-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["satelit", "jupiter", "orbita", "soare", "uranus"],
        flashDuration: 3300,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k6-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "galaxie",
        wrongWords: ["galaxiex", "galaxiey", "galaxiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "saturn",
        wrongWords: ["saturnx", "saturny", "saturnz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lună",
        wrongWords: ["lunăx", "lunăy", "lunăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "lună",
        wrongWords: ["lunăx", "lunăy", "lunăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "uranus",
        wrongWords: ["uranusx", "uranusy", "uranusz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "satelit",
        wrongWords: ["satelitx", "satelity", "satelitz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "neptun",
        wrongWords: ["neptunx", "neptuny", "neptunz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "meteor",
        wrongWords: ["meteorx", "meteory", "meteorz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "jupiter",
        wrongWords: ["jupiterx", "jupitery", "jupiterz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k6-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "neptun",
        wrongWords: ["neptunx", "neptuny", "neptunz"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k6-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "galaxie", article: "un" }, { word: "asteroid", article: "doi" }, { word: "jupiter", article: "două" }, { word: "stea", article: "un" }, { word: "soare", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "venus", article: "doi" }, { word: "galaxie", article: "două" }, { word: "saturn", article: "două" }, { word: "stea", article: "două" }, { word: "marte", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "cometă", article: "doi" }, { word: "venus", article: "doi" }, { word: "asteroid", article: "două" }, { word: "orbita", article: "o" }, { word: "neptun", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "satelit", article: "un" }, { word: "gravitație", article: "un" }, { word: "lună", article: "doi" }, { word: "planetă", article: "un" }, { word: "jupiter", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "univers", article: "două" }, { word: "gravitație", article: "două" }, { word: "uranus", article: "două" }, { word: "lună", article: "un" }, { word: "saturn", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "stea", article: "două" }, { word: "gravitație", article: "o" }, { word: "marte", article: "un" }, { word: "neptun", article: "două" }, { word: "lună", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "venus", article: "două" }, { word: "jupiter", article: "un" }, { word: "cometă", article: "două" }, { word: "pământ", article: "doi" }, { word: "neptun", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "soare", article: "un" }, { word: "stea", article: "un" }, { word: "jupiter", article: "doi" }, { word: "neptun", article: "două" }, { word: "univers", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "neptun", article: "o" }, { word: "meteor", article: "doi" }, { word: "satelit", article: "două" }, { word: "orbita", article: "două" }, { word: "cometă", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k6-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "soare", article: "doi" }, { word: "cometă", article: "două" }, { word: "meteor", article: "două" }, { word: "stea", article: "un" }, { word: "neptun", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k6-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["este", "Luna", "Pământului", "satelitul"],
        correctOrder: ["Luna", "este", "satelitul", "Pământului"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["este", "Universul", "infinit"],
        correctOrder: ["Universul", "este", "infinit"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["imense", "sunt", "Galaxiile"],
        correctOrder: ["Galaxiile", "sunt", "imense"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["satelitul", "Pământului", "este", "Luna"],
        correctOrder: ["Luna", "este", "satelitul", "Pământului"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["noaptea", "strălucesc", "Stelele"],
        correctOrder: ["Stelele", "strălucesc", "noaptea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Stelele", "noaptea", "strălucesc"],
        correctOrder: ["Stelele", "strălucesc", "noaptea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["noaptea", "strălucesc", "Stelele"],
        correctOrder: ["Stelele", "strălucesc", "noaptea"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Pământului", "este", "satelitul", "Luna"],
        correctOrder: ["Luna", "este", "satelitul", "Pământului"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["jurul", "în", "Soarelui", "orbitează", "Pământul"],
        correctOrder: ["Pământul", "orbitează", "în", "jurul", "Soarelui"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k6-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["imense", "sunt", "Galaxiile"],
        correctOrder: ["Galaxiile", "sunt", "imense"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k6-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "venus", syllables: ["ve", "nus"] }, { word: "soare", syllables: ["so", "are"] }, { word: "planetă", syllables: ["pla", "net\u0103"] }, { word: "neptun", syllables: ["nep", "tun"] }, { word: "jupiter", syllables: ["jup", "iter"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "meteor", syllables: ["met", "eor"] }, { word: "satelit", syllables: ["sat", "elit"] }, { word: "orbita", syllables: ["orb", "ita"] }, { word: "gravitație", syllables: ["gravi", "ta\u021bie"] }, { word: "cometă", syllables: ["com", "et\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "neptun", syllables: ["nep", "tun"] }, { word: "orbita", syllables: ["orb", "ita"] }, { word: "cometă", syllables: ["com", "et\u0103"] }, { word: "saturn", syllables: ["sat", "urn"] }, { word: "venus", syllables: ["ve", "nus"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "stea", syllables: ["st", "ea"] }, { word: "uranus", syllables: ["ura", "nus"] }, { word: "pluto", syllables: ["pl", "uto"] }, { word: "satelit", syllables: ["sat", "elit"] }, { word: "meteor", syllables: ["met", "eor"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "univers", syllables: ["uni", "vers"] }, { word: "jupiter", syllables: ["jup", "iter"] }, { word: "orbita", syllables: ["orb", "ita"] }, { word: "soare", syllables: ["so", "are"] }, { word: "galaxie", syllables: ["gal", "axie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "marte", syllables: ["ma", "rte"] }, { word: "stea", syllables: ["st", "ea"] }, { word: "galaxie", syllables: ["gal", "axie"] }, { word: "neptun", syllables: ["nep", "tun"] }, { word: "cometă", syllables: ["com", "et\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "galaxie", syllables: ["gal", "axie"] }, { word: "marte", syllables: ["ma", "rte"] }, { word: "asteroid", syllables: ["aste", "roid"] }, { word: "jupiter", syllables: ["jup", "iter"] }, { word: "univers", syllables: ["uni", "vers"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "uranus", syllables: ["ura", "nus"] }, { word: "soare", syllables: ["so", "are"] }, { word: "pluto", syllables: ["pl", "uto"] }, { word: "planetă", syllables: ["pla", "net\u0103"] }, { word: "asteroid", syllables: ["aste", "roid"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "marte", syllables: ["ma", "rte"] }, { word: "venus", syllables: ["ve", "nus"] }, { word: "soare", syllables: ["so", "are"] }, { word: "jupiter", syllables: ["jup", "iter"] }, { word: "galaxie", syllables: ["gal", "axie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k6-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "asteroid", syllables: ["aste", "roid"] }, { word: "saturn", syllables: ["sat", "urn"] }, { word: "univers", syllables: ["uni", "vers"] }, { word: "planetă", syllables: ["pla", "net\u0103"] }, { word: "jupiter", syllables: ["jup", "iter"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k6-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a inventa",
        wrongVerbs: ["a inventax", "a inventay", "a inventaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a observa",
        wrongVerbs: ["a observax", "a observay", "a observaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a inventa",
        wrongVerbs: ["a inventax", "a inventay", "a inventaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a cerceta",
        wrongVerbs: ["a cercetax", "a cercetay", "a cercetaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a observa",
        wrongVerbs: ["a observax", "a observay", "a observaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a explora",
        wrongVerbs: ["a explorax", "a exploray", "a exploraz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a descoperi",
        wrongVerbs: ["a descoperix", "a descoperiy", "a descoperiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a cerceta",
        wrongVerbs: ["a cercetax", "a cercetay", "a cercetaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a inventa",
        wrongVerbs: ["a inventax", "a inventay", "a inventaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k6-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a observa",
        wrongVerbs: ["a observax", "a observay", "a observaz"],
        theme: VV_THEME
      },
    ],
  },
  7: {
    grade: 7,
    tippSturm: [
      {
        id: "ro-ts-k7-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["personificare", "elegie", "poveste", "metaforă", "epitet"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["metaforă", "comparație", "poezie", "epopee", "odă"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["basm", "mit", "poveste", "doină", "poezie"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["literatură", "proză", "metaforă", "poezie", "nuvelă"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["comparație", "baladă", "fabulă", "literatură", "odă"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["legendă", "roman", "epitet", "doină", "odă"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["epopee", "poveste", "fabulă", "odă", "roman"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["legendă", "poezie", "odă", "nuvelă", "mit"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["basm", "poveste", "proză", "metaforă", "doină"],
        flashDuration: 3100,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k7-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["poveste", "imn", "nuvelă", "roman", "odă"],
        flashDuration: 3100,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k7-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "roman",
        wrongWords: ["romanx", "romany", "romanz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "basm",
        wrongWords: ["basmx", "basmy", "basmz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "elegie",
        wrongWords: ["elegiex", "elegiey", "elegiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "nuvelă",
        wrongWords: ["nuvelăx", "nuvelăy", "nuvelăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "poezie",
        wrongWords: ["poeziex", "poeziey", "poeziez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "nuvelă",
        wrongWords: ["nuvelăx", "nuvelăy", "nuvelăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "doină",
        wrongWords: ["doinăx", "doinăy", "doinăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "epopee",
        wrongWords: ["epopeex", "epopeey", "epopeez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "literatură",
        wrongWords: ["literaturăx", "literaturăy", "literaturăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k7-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "baladă",
        wrongWords: ["baladăx", "baladăy", "baladăz"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k7-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "odă", article: "un" }, { word: "poveste", article: "o" }, { word: "basm", article: "o" }, { word: "comparație", article: "o" }, { word: "literatură", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "literatură", article: "o" }, { word: "fabulă", article: "două" }, { word: "epitet", article: "două" }, { word: "imn", article: "două" }, { word: "poveste", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "legendă", article: "un" }, { word: "odă", article: "un" }, { word: "doină", article: "doi" }, { word: "metaforă", article: "doi" }, { word: "epopee", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "basm", article: "doi" }, { word: "poveste", article: "o" }, { word: "nuvelă", article: "o" }, { word: "epitet", article: "doi" }, { word: "metaforă", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "comparație", article: "doi" }, { word: "basm", article: "doi" }, { word: "legendă", article: "un" }, { word: "imn", article: "o" }, { word: "proză", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "fabulă", article: "o" }, { word: "imn", article: "o" }, { word: "doină", article: "doi" }, { word: "nuvelă", article: "doi" }, { word: "epopee", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "legendă", article: "o" }, { word: "elegie", article: "doi" }, { word: "nuvelă", article: "o" }, { word: "poezie", article: "două" }, { word: "comparație", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "poezie", article: "două" }, { word: "fabulă", article: "o" }, { word: "epopee", article: "doi" }, { word: "imn", article: "un" }, { word: "roman", article: "un" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "imn", article: "un" }, { word: "proză", article: "un" }, { word: "fabulă", article: "un" }, { word: "baladă", article: "o" }, { word: "roman", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k7-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "proză", article: "o" }, { word: "comparație", article: "doi" }, { word: "mit", article: "o" }, { word: "roman", article: "o" }, { word: "odă", article: "doi" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k7-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Eminescu", "scris", "a", "poezii", "Mihai"],
        correctOrder: ["Mihai", "Eminescu", "a", "scris", "poezii"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["a", "George", "poezii", "scris", "Bacovia"],
        correctOrder: ["George", "Bacovia", "a", "scris", "poezii"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Ion", "Creangă", "a", "amintiri", "povestit"],
        correctOrder: ["Ion", "Creangă", "a", "povestit", "amintiri"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["religiile", "studiat", "a", "Mircea", "Eliade"],
        correctOrder: ["Mircea", "Eliade", "a", "studiat", "religiile"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["poezii", "scris", "George", "Bacovia", "a"],
        correctOrder: ["George", "Bacovia", "a", "scris", "poezii"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Eminescu", "scris", "a", "Mihai", "poezii"],
        correctOrder: ["Mihai", "Eminescu", "a", "scris", "poezii"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Creangă", "amintiri", "a", "Ion", "povestit"],
        correctOrder: ["Ion", "Creangă", "a", "povestit", "amintiri"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["scris", "George", "poezii", "a", "Bacovia"],
        correctOrder: ["George", "Bacovia", "a", "scris", "poezii"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["George", "scris", "poezii", "a", "Bacovia"],
        correctOrder: ["George", "Bacovia", "a", "scris", "poezii"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k7-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["a", "amintiri", "Creangă", "povestit", "Ion"],
        correctOrder: ["Ion", "Creangă", "a", "povestit", "amintiri"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k7-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "imn", syllables: ["i", "mn"] }, { word: "poveste", syllables: ["pov", "este"] }, { word: "mit", syllables: ["m", "it"] }, { word: "legendă", syllables: ["leg", "end\u0103"] }, { word: "proză", syllables: ["pr", "oz\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "personificare", syllables: ["person", "ificare"] }, { word: "poezie", syllables: ["poe", "zie"] }, { word: "odă", syllables: ["o", "d\u0103"] }, { word: "proză", syllables: ["pr", "oz\u0103"] }, { word: "nuvelă", syllables: ["nuv", "el\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "epitet", syllables: ["epi", "tet"] }, { word: "roman", syllables: ["ro", "man"] }, { word: "mit", syllables: ["m", "it"] }, { word: "proză", syllables: ["pr", "oz\u0103"] }, { word: "poveste", syllables: ["pov", "este"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "legendă", syllables: ["leg", "end\u0103"] }, { word: "nuvelă", syllables: ["nuv", "el\u0103"] }, { word: "poezie", syllables: ["poe", "zie"] }, { word: "mit", syllables: ["m", "it"] }, { word: "doină", syllables: ["do", "in\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "epitet", syllables: ["epi", "tet"] }, { word: "imn", syllables: ["i", "mn"] }, { word: "poveste", syllables: ["pov", "este"] }, { word: "mit", syllables: ["m", "it"] }, { word: "proză", syllables: ["pr", "oz\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "basm", syllables: ["ba", "sm"] }, { word: "baladă", syllables: ["bal", "ad\u0103"] }, { word: "imn", syllables: ["i", "mn"] }, { word: "comparație", syllables: ["compa", "ra\u021bie"] }, { word: "mit", syllables: ["m", "it"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "proză", syllables: ["pr", "oz\u0103"] }, { word: "personificare", syllables: ["person", "ificare"] }, { word: "roman", syllables: ["ro", "man"] }, { word: "epitet", syllables: ["epi", "tet"] }, { word: "basm", syllables: ["ba", "sm"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "basm", syllables: ["ba", "sm"] }, { word: "poveste", syllables: ["pov", "este"] }, { word: "proză", syllables: ["pr", "oz\u0103"] }, { word: "baladă", syllables: ["bal", "ad\u0103"] }, { word: "roman", syllables: ["ro", "man"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "nuvelă", syllables: ["nuv", "el\u0103"] }, { word: "doină", syllables: ["do", "in\u0103"] }, { word: "poveste", syllables: ["pov", "este"] }, { word: "baladă", syllables: ["bal", "ad\u0103"] }, { word: "mit", syllables: ["m", "it"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k7-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "nuvelă", syllables: ["nuv", "el\u0103"] }, { word: "poveste", syllables: ["pov", "este"] }, { word: "legendă", syllables: ["leg", "end\u0103"] }, { word: "odă", syllables: ["o", "d\u0103"] }, { word: "doină", syllables: ["do", "in\u0103"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k7-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a povesti",
        wrongVerbs: ["a povestix", "a povestiy", "a povestiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a redacta",
        wrongVerbs: ["a redactax", "a redactay", "a redactaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a compune",
        wrongVerbs: ["a compunex", "a compuney", "a compunez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a povesti",
        wrongVerbs: ["a povestix", "a povestiy", "a povestiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a crea",
        wrongVerbs: ["a creax", "a creay", "a creaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a compune",
        wrongVerbs: ["a compunex", "a compuney", "a compunez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a povesti",
        wrongVerbs: ["a povestix", "a povestiy", "a povestiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a povesti",
        wrongVerbs: ["a povestix", "a povestiy", "a povestiz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a crea",
        wrongVerbs: ["a creax", "a creay", "a creaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k7-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a povesti",
        wrongVerbs: ["a povestix", "a povestiy", "a povestiz"],
        theme: VV_THEME
      },
    ],
  },
  8: {
    grade: 8,
    tippSturm: [
      {
        id: "ro-ts-k8-1",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["viață", "arhitectură", "natură", "artă", "drept"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-2",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["tehnologie", "istorie", "civilizație", "drept", "psihologie"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-3",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["medicină", "societate", "arhitectură", "univers", "filosofie"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-4",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["economie", "medicină", "istorie", "psihologie", "artă"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-5",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["medicină", "tehnologie", "societate", "artă", "natură"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-6",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["civilizație", "arhitectură", "natură", "inginerie", "societate"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-7",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["economie", "civilizație", "sociologie", "medicină", "istorie"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-8",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["civilizație", "inginerie", "medicină", "viață", "artă"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-9",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["politică", "cultură", "psihologie", "arhitectură", "sociologie"],
        flashDuration: 2900,
        theme: TS_THEME
      },
      {
        id: "ro-ts-k8-10",
        title: {"de": "TippSturm", "en": "TypeStorm", "hu": "Gépelés-Vihar", "ro": "Furtuna de Tastare"},
        instruction: {"de": "Merke das Wort! Dann tippe es auf!", "en": "Memorize the word! Then type it!", "hu": "Jegyezd meg a szót! Aztán írd le!", "ro": "Memorează cuvântul! Apoi scrie-l!"},
        words: ["filosofie", "civilizație", "societate", "tehnologie", "istorie"],
        flashDuration: 2900,
        theme: TS_THEME
      },
    ],
    wortWaechter: [
      {
        id: "ro-ww-k8-1",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "istorie",
        wrongWords: ["istoriex", "istoriey", "istoriez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-2",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "viață",
        wrongWords: ["viațăx", "viațăy", "viațăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-3",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "filosofie",
        wrongWords: ["filosofiex", "filosofiey", "filosofiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-4",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "inginerie",
        wrongWords: ["ingineriex", "ingineriey", "ingineriez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-5",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "drept",
        wrongWords: ["dreptx", "drepty", "dreptz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-6",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "univers",
        wrongWords: ["universx", "universy", "universz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-7",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "geografie",
        wrongWords: ["geografiex", "geografiey", "geografiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-8",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "filosofie",
        wrongWords: ["filosofiex", "filosofiey", "filosofiez"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-9",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "arhitectură",
        wrongWords: ["arhitecturăx", "arhitecturăy", "arhitecturăz"],
        theme: WW_THEME
      },
      {
        id: "ro-ww-k8-10",
        title: {"de": "Wort-Wächter", "en": "Word-Watcher", "hu": "Szó-Őrző", "ro": "Paznicul Cuvintelor"},
        instruction: {"de": "Welches Wort ist richtig?", "en": "Which word is correct?", "hu": "Melyik szó a helyes?", "ro": "Care cuvânt este corect?"},
        targetWord: "filosofie",
        wrongWords: ["filosofiex", "filosofiey", "filosofiez"],
        theme: WW_THEME
      },
    ],
    artikelAsteroids: [
      {
        id: "ro-aa-k8-1",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "economie", article: "un" }, { word: "univers", article: "doi" }, { word: "cultură", article: "un" }, { word: "filosofie", article: "un" }, { word: "politică", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-2",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "geografie", article: "doi" }, { word: "tehnologie", article: "o" }, { word: "natură", article: "două" }, { word: "drept", article: "două" }, { word: "medicină", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-3",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "cultură", article: "o" }, { word: "economie", article: "un" }, { word: "filosofie", article: "o" }, { word: "societate", article: "un" }, { word: "medicină", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-4",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "economie", article: "doi" }, { word: "artă", article: "două" }, { word: "psihologie", article: "un" }, { word: "inginerie", article: "un" }, { word: "societate", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-5",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "civilizație", article: "două" }, { word: "artă", article: "două" }, { word: "societate", article: "doi" }, { word: "economie", article: "un" }, { word: "filosofie", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-6",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "societate", article: "două" }, { word: "sociologie", article: "două" }, { word: "medicină", article: "o" }, { word: "filosofie", article: "un" }, { word: "psihologie", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-7",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "geografie", article: "doi" }, { word: "viață", article: "o" }, { word: "tehnologie", article: "două" }, { word: "societate", article: "un" }, { word: "cultură", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-8",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "univers", article: "două" }, { word: "economie", article: "o" }, { word: "natură", article: "doi" }, { word: "medicină", article: "două" }, { word: "filosofie", article: "două" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-9",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "inginerie", article: "două" }, { word: "geografie", article: "doi" }, { word: "arhitectură", article: "două" }, { word: "natură", article: "două" }, { word: "univers", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
      {
        id: "ro-aa-k8-10",
        title: {"de": "Artikel-Asteroiden", "en": "Article-Asteroids", "hu": "Névelő-Aszteroidák", "ro": "Asteroizii Articolelor"},
        instruction: {"de": "Zerstöre die Asteroiden mit dem richtigen Artikel!", "en": "Destroy the asteroids with the correct article!", "hu": "Pusztítsd el az aszteroidákat a helyes névelővel!", "ro": "Distruge asteroizii cu articolul corect!"},
        words: [{ word: "geografie", article: "două" }, { word: "artă", article: "un" }, { word: "arhitectură", article: "o" }, { word: "civilizație", article: "o" }, { word: "economie", article: "o" }],
        categories: ["un", "o", "doi", "două"],
        theme: AA_THEME
      },
    ],
    satzbauSniper: [
      {
        id: "ro-ss-k8-1",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["statul", "organizează", "Politica"],
        correctOrder: ["Politica", "organizează", "statul"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-2",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["se", "cu", "ocupă", "Economia", "resursele"],
        correctOrder: ["Economia", "se", "ocupă", "cu", "resursele"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-3",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Filosofia", "de", "iubirea", "este", "înțelepciune"],
        correctOrder: ["Filosofia", "este", "iubirea", "de", "înțelepciune"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-4",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["cu", "Economia", "ocupă", "resursele", "se"],
        correctOrder: ["Economia", "se", "ocupă", "cu", "resursele"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-5",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["studiază", "mintea", "umană", "Psihologia"],
        correctOrder: ["Psihologia", "studiază", "mintea", "umană"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-6",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Filosofia", "de", "înțelepciune", "iubirea", "este"],
        correctOrder: ["Filosofia", "este", "iubirea", "de", "înțelepciune"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-7",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["înțelepciune", "Filosofia", "iubirea", "de", "este"],
        correctOrder: ["Filosofia", "este", "iubirea", "de", "înțelepciune"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-8",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["Filosofia", "de", "este", "înțelepciune", "iubirea"],
        correctOrder: ["Filosofia", "este", "iubirea", "de", "înțelepciune"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-9",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["mintea", "Psihologia", "umană", "studiază"],
        correctOrder: ["Psihologia", "studiază", "mintea", "umană"],
        theme: SS_THEME
      },
      {
        id: "ro-ss-k8-10",
        title: {"de": "Satzbau-Sniper", "en": "Sentence-Sniper", "hu": "Mondat-Mester", "ro": "Lunetistul Propozițiilor"},
        instruction: {"de": "Schieße die Wörter in der richtigen Reihenfolge ab!", "en": "Shoot the words in the correct order!", "hu": "Lődd le a szavákat a helyes sorrendben!", "ro": "Trage în cuvinte în ordinea corectă!"},
        words: ["societatea", "Sociologia", "analizează"],
        correctOrder: ["Sociologia", "analizează", "societatea"],
        theme: SS_THEME
      },
    ],
    silbenSlicer: [
      {
        id: "ro-sl-k8-1",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "tehnologie", syllables: ["tehno", "logie"] }, { word: "viață", syllables: ["vi", "a\u021b\u0103"] }, { word: "arhitectură", syllables: ["arhit", "ectur\u0103"] }, { word: "drept", syllables: ["dr", "ept"] }, { word: "cultură", syllables: ["cul", "tur\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-2",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "natură", syllables: ["nat", "ur\u0103"] }, { word: "sociologie", syllables: ["socio", "logie"] }, { word: "istorie", syllables: ["ist", "orie"] }, { word: "arhitectură", syllables: ["arhit", "ectur\u0103"] }, { word: "civilizație", syllables: ["civil", "iza\u021bie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-3",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "natură", syllables: ["nat", "ur\u0103"] }, { word: "psihologie", syllables: ["psiho", "logie"] }, { word: "filosofie", syllables: ["filo", "sofie"] }, { word: "viață", syllables: ["vi", "a\u021b\u0103"] }, { word: "drept", syllables: ["dr", "ept"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-4",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "cultură", syllables: ["cul", "tur\u0103"] }, { word: "natură", syllables: ["nat", "ur\u0103"] }, { word: "politică", syllables: ["poli", "tic\u0103"] }, { word: "știință", syllables: ["\u0219ti", "in\u021b\u0103"] }, { word: "civilizație", syllables: ["civil", "iza\u021bie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-5",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "geografie", syllables: ["geog", "rafie"] }, { word: "știință", syllables: ["\u0219ti", "in\u021b\u0103"] }, { word: "politică", syllables: ["poli", "tic\u0103"] }, { word: "natură", syllables: ["nat", "ur\u0103"] }, { word: "societate", syllables: ["soci", "etate"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-6",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "politică", syllables: ["poli", "tic\u0103"] }, { word: "psihologie", syllables: ["psiho", "logie"] }, { word: "societate", syllables: ["soci", "etate"] }, { word: "economie", syllables: ["econ", "omie"] }, { word: "inginerie", syllables: ["ingi", "nerie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-7",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "psihologie", syllables: ["psiho", "logie"] }, { word: "medicină", syllables: ["medi", "cin\u0103"] }, { word: "geografie", syllables: ["geog", "rafie"] }, { word: "filosofie", syllables: ["filo", "sofie"] }, { word: "natură", syllables: ["nat", "ur\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-8",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "arhitectură", syllables: ["arhit", "ectur\u0103"] }, { word: "inginerie", syllables: ["ingi", "nerie"] }, { word: "civilizație", syllables: ["civil", "iza\u021bie"] }, { word: "filosofie", syllables: ["filo", "sofie"] }, { word: "geografie", syllables: ["geog", "rafie"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-9",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "drept", syllables: ["dr", "ept"] }, { word: "natură", syllables: ["nat", "ur\u0103"] }, { word: "civilizație", syllables: ["civil", "iza\u021bie"] }, { word: "societate", syllables: ["soci", "etate"] }, { word: "cultură", syllables: ["cul", "tur\u0103"] }],
        theme: SL_THEME
      },
      {
        id: "ro-sl-k8-10",
        title: {"de": "Silben-Slicer", "en": "Syllable-Slicer", "hu": "Szótag-Szeletelő", "ro": "Tăietorul de Silabe"},
        instruction: {"de": "Zerschneide die Wörter in Silben!", "en": "Slice the words into syllables!", "hu": "Vágd szét a szavákat szótagokra!", "ro": "Taie cuvintele în silabe!"},
        words: [{ word: "politică", syllables: ["poli", "tic\u0103"] }, { word: "natură", syllables: ["nat", "ur\u0103"] }, { word: "arhitectură", syllables: ["arhit", "ectur\u0103"] }, { word: "sociologie", syllables: ["socio", "logie"] }, { word: "civilizație", syllables: ["civil", "iza\u021bie"] }],
        theme: SL_THEME
      },
    ],
    verbenVortex: [
      {
        id: "ro-vv-k8-1",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a argumenta",
        wrongVerbs: ["a argumentax", "a argumentay", "a argumentaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-2",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a dezbate",
        wrongVerbs: ["a dezbatex", "a dezbatey", "a dezbatez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-3",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a evalua",
        wrongVerbs: ["a evaluax", "a evaluay", "a evaluaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-4",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a dezbate",
        wrongVerbs: ["a dezbatex", "a dezbatey", "a dezbatez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-5",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a demonstra",
        wrongVerbs: ["a demonstrax", "a demonstray", "a demonstraz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-6",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a evalua",
        wrongVerbs: ["a evaluax", "a evaluay", "a evaluaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-7",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a evalua",
        wrongVerbs: ["a evaluax", "a evaluay", "a evaluaz"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-8",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a convinge",
        wrongVerbs: ["a convingex", "a convingey", "a convingez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-9",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a convinge",
        wrongVerbs: ["a convingex", "a convingey", "a convingez"],
        theme: VV_THEME
      },
      {
        id: "ro-vv-k8-10",
        title: {"de": "Verben-Vortex", "en": "Verb-Vortex", "hu": "Ige-Örvény", "ro": "Vortexul Verbelor"},
        instruction: {"de": "Finde das richtige Verb!", "en": "Find the correct verb!", "hu": "Találd meg a helyes igét!", "ro": "Găsește verbul corect!"},
        pronoun: "eu",
        correctVerb: "a argumenta",
        wrongVerbs: ["a argumentax", "a argumentay", "a argumentaz"],
        theme: VV_THEME
      },
    ],
  },
};