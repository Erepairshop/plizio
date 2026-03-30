// lib/explorerPools/magyarO1.ts

import type { PoolTopicDef } from "./types";

export const MAGYAR_O1_I1_LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Betűsziget",
    t1_title: "Magánhangzók",
    t1_text: "A magánhangzók a beszéd alapkövei. Lehetnek rövidek vagy hosszúak.",
    t2_title: "Mássalhangzók",
    t2_text: "A mássalhangzókat a magánhangzókkal együtt használjuk a szavak alkotásához.",
    t3_title: "ABC-sorrend",
    t3_text: "A betűk sorrendje segít a szavak és nevek rendezésében.",
    t4_title: "Szótagszám",
    t4_text: "A szavakat szótagokra bonthatjuk. Egy szótagban mindig van egy magánhangzó.",
    t5_title: "Szótagelválasztás",
    t5_text: "A szavakat írásban a szótagok mentén választjuk el, ha nem férnek ki egy sorba.",
    t6_title: "Betűpárok",
    t6_text: "Vannak betűk, amik gyakran állnak párban, mint a 'gy', 'ny', 'ty'.",
    t7_title: "Rövid és hosszú magánhangzók",
    t7_text: "A magánhangzók kiejtésének időtartama megváltoztathatja a szó jelentését.",
    t8_title: "A 'j' és 'ly' hangok",
    t8_text: "A 'j' és 'ly' kiejtése azonos, de írásban meg kell őket különböztetni.",
    t9_title: "Főnevek",
    t9_text: "A főnevek élőlényeket, élettelen tárgyakat vagy gondolati dolgokat neveznek meg.",
    t10_title: "Igék",
    t10_text: "Az igék cselekvést, történést vagy létezést fejeznek ki.",
  },
};

export const MAGYAR_O1_I1_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "simple-icon", icon: "A", title: "Magánhangzók", bg: "#FFDDC1", color: "#FF6B6B" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/maganhangzok",
    },
    quiz: { generate: "magyar_o1_i1_t1" },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "simple-icon", icon: "B", title: "Mássalhangzók", bg: "#C1FFD7", color: "#6BFF6B" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/massalhangzok",
    },
    quiz: { generate: "magyar_o1_i1_t2" },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔠", title: "ABC", bg: "#D7C1FF", color: "#6B6BFF" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/abc_sorrend",
    },
    quiz: { generate: "magyar_o1_i1_t3" },
  },
  {
    difficulty: "medium",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "simple-icon", icon: "✂️", title: "Szótagszám", bg: "#FFD7C1", color: "#FF9B6B" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/szotagszam",
    },
    quiz: { generate: "magyar_o1_i1_t4" },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "simple-icon", icon: "📏", title: "Elválasztás", bg: "#C1D7FF", color: "#6B9BFF" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/elvalasztas",
    },
    quiz: { generate: "magyar_o1_i1_t5" },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "simple-icon", icon: "GY", title: "Betűpárok", bg: "#FFFDC1", color: "#FFD66B" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/betuparak",
    },
    quiz: { generate: "magyar_o1_i1_t6" },
  },
  {
    difficulty: "hard",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "Á", title: "Hosszú magánhangzók", bg: "#FFC1C1", color: "#FF6B6B" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/rovid_hosszu",
    },
    quiz: { generate: "magyar_o1_i1_t7" },
  },
  {
    difficulty: "hard",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "simple-icon", icon: "J", title: "J/LY", bg: "#C1FFC1", color: "#6BFF6B" },
    interactive: {
      type: "lang-mcq",
      topic: "betuk/j_ly",
    },
    quiz: { generate: "magyar_o1_i1_t8" },
  },
  {
    difficulty: "easy",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🍎", title: "Főnevek", bg: "#FFC1E9", color: "#FF6BCB" },
    interactive: {
      type: "lang-mcq",
      topic: "szavak/fonevek",
    },
    quiz: { generate: "magyar_o1_i1_t9" },
  },
  {
    difficulty: "easy",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🏃", title: "Igék", bg: "#C1FFEE", color: "#6BFFDE" },
    interactive: {
      type: "lang-mcq",
      topic: "szavak/igek",
    },
    quiz: { generate: "magyar_o1_i1_t10" },
  },
];
