import React from "react";

export type Lang = "hu" | "en" | "de" | "ro";

export interface LocalizedString {
  hu: string;
  en: string;
  de: string;
  ro: string;
}

export type MathMissionCategory = "explore" | "build" | "challenge";

export interface MathProgress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

export type MathCheckpointTopics = Record<string, LocalizedString>;

export interface MathMissionConfig {
  id: string;
  label: LocalizedString;
  icon: string;
  gameType: string; // matches the screen state
  category: MathMissionCategory;
  visualType?: string; // used for VisualChallenge
}

export interface MathIslandConfig {
  id: string;
  name: LocalizedString;
  icon: string;
  color: string;
  svgX: number;
  svgY: number;
  missions: MathMissionConfig[];
  sortRange?: [number, number]; // for NumberDuel/GravitySort
  topicKeys?: string[]; // for TrueFalseBlitz
}

export const MATH_CATEGORY_CONFIG: Record<MathMissionCategory, {
  label: LocalizedString;
  desc: LocalizedString;
  color: string; bg: string; border: string;
}> = {
  explore: {
    label: { en: "Explore", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" },
    desc: {
      en: "Discover the concept visually — no wrong answers!",
      hu: "Fedezd fel vizuálisan — nincs hibás válasz!",
      de: "Entdecke das Konzept visuell — keine falschen Antworten!",
      ro: "Descoperă conceptul vizual — fără răspunsuri greșite!",
    },
    color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.35)",
  },
  build: {
    label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" },
    desc: {
      en: "Guided questions — take your time!",
      hu: "Vezérelt feladatok — nincs sietség!",
      de: "Geführte Aufgaben — kein Zeitdruck!",
      ro: "Exerciții ghidate — fără grabă!",
    },
    color: "#34D399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.35)",
  },
  challenge: {
    label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" },
    desc: {
      en: "Fast & timed — show what you know!",
      hu: "Gyors és időre — mutasd meg tudásod!",
      de: "Schnell & timed — zeig was du kannst!",
      ro: "Rapid și la timp — arată ce știi!",
    },
    color: "#FB923C", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.35)",
  },
};
