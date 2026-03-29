"use client";

import dynamic from "next/dynamic";
import type { AstroRomanaGradeConfig } from "@/app/astroromana/AstroRomanaGradePage";
import * as romana1 from "@/lib/astroRomana";
import * as romana2 from "@/lib/astroRomana2";
import * as romana3 from "@/lib/astroRomana3";
import * as romana4 from "@/lib/astroRomana4";
import * as romana5 from "@/lib/astroRomana5";
import * as romana6 from "@/lib/astroRomana6";
import * as romana7 from "@/lib/astroRomana7";
import * as romana8 from "@/lib/astroRomana8";

const DEFAULT_BG_COLOR = "#FF2D78";

const C1Explorer = dynamic(() => import("@/app/astroromana/games/c1/C1Explorer"), { ssr: false });
const C2Explorer = dynamic(() => import("@/app/astroromana/games/c2/C2Explorer"), { ssr: false });
const C3Explorer = dynamic(() => import("@/app/astroromana/games/c3/C3Explorer"), { ssr: false });
const C4Explorer = dynamic(() => import("@/app/astroromana/games/c4/C4Explorer"), { ssr: false });
const C5Explorer = dynamic(() => import("@/app/astroromana/games/c5/C5Explorer"), { ssr: false });
const C6Explorer = dynamic(() => import("@/app/astroromana/games/c6/C6Explorer"), { ssr: false });
const C7Explorer = dynamic(() => import("@/app/astroromana/games/c7/C7Explorer"), { ssr: false });
const C8Explorer = dynamic(() => import("@/app/astroromana/games/c8/C8Explorer"), { ssr: false });

export const romanaC1Config: AstroRomanaGradeConfig = {
  grade: 1,
  label: {
    en: "Class 1 · Language & Communication",
    hu: "1. osztály · Nyelv és kommunikáció",
    de: "Klasse 1 · Sprache & Kommunikation",
    ro: "Clasa 1 · Limbă și comunicare",
  },
  islands: romana1.C1_ISLANDS,
  checkpointMap: romana1.C1_CHECKPOINT_MAP,
  loadProgress: romana1.loadC1Progress,
  saveProgress: romana1.saveC1Progress,
  isMissionDone: romana1.isMissionDoneC1,
  isIslandDone: romana1.isIslandDoneC1,
  isIslandUnlocked: romana1.isIslandUnlockedC1,
  isCheckpointUnlocked: romana1.isCheckpointUnlockedC1,
  isCheckpointDone: romana1.isCheckpointDoneC1,
  completeMission: romana1.completeMissionC1,
  islandTotalStars: romana1.islandTotalStarsC1,
  completeTest: romana1.completeTestC1,
  generateIslandQuestions: romana1.generateIslandQuestionsC1,
  generateCheckpointQuestions: romana1.generateCheckpointQuestionsC1,
  ExplorerComponent: C1Explorer,
  checkpointTopics: {
    en: { test1: "Alphabet, vowels & consonants", test2: "Sentences, punctuation & spelling", test3: "Review — all topics" },
    hu: { test1: "Ábécé, magán- & mássalhangzók", test2: "Mondatok, írásjelek & helyesírás", test3: "Összefoglalás" },
    de: { test1: "Alphabet, Vokale & Konsonanten", test2: "Sätze, Satzzeichen & Rechtschreibung", test3: "Wiederholung" },
    ro: { test1: "Alfabetul, vocale & consoane", test2: "Propoziții, punctuație & ortografie", test3: "Recapitulare" },
  },
  noQuestionsTypes: ["romana-explore"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC2Config: AstroRomanaGradeConfig = {
  grade: 2,
  label: {
    en: "Class 2 · Grammar & Reading",
    hu: "2. osztály · Nyelvtan és olvasás",
    de: "Klasse 2 · Grammatik und Lesen",
    ro: "Clasa 2 · Gramatică și lectură",
  },
  islands: romana2.C2_ISLANDS,
  checkpointMap: romana2.C2_CHECKPOINT_MAP,
  loadProgress: romana2.loadC2Progress,
  saveProgress: romana2.saveC2Progress,
  isMissionDone: romana2.isMissionDoneC2,
  isIslandDone: romana2.isIslandDoneC2,
  isIslandUnlocked: romana2.isIslandUnlockedC2,
  isCheckpointUnlocked: romana2.isCheckpointUnlockedC2,
  isCheckpointDone: romana2.isCheckpointDoneC2,
  completeMission: romana2.completeMissionC2,
  islandTotalStars: romana2.islandTotalStarsC2,
  completeTest: romana2.completeTestC2,
  generateIslandQuestions: romana2.generateIslandQuestionsC2,
  generateCheckpointQuestions: romana2.generateCheckpointQuestionsC2,
  ExplorerComponent: C2Explorer,
  checkpointTopics: {
    en: { test1: "Nouns, verbs, adjectives & sentence basics", test2: "Spelling rules, punctuation & simple sentences", test3: "Narrative texts, reading & vocabulary" },
    hu: { test1: "Főnevek, igék, melléknevek és mondatalapok", test2: "Helyesírás, írásjelek és egyszerű mondatok", test3: "Elbeszélő szövegek, olvasás és szókincs" },
    de: { test1: "Substantive, Verben, Adjektive & Satzgrundlagen", test2: "Rechtschreibung, Satzzeichen & einfache Sätze", test3: "Erzähltexte, Lesen & Wortschatz" },
    ro: { test1: "Substantivul, verbul, adjectivul & baza propoziției", test2: "Ortografie, punctuație & propoziții simple", test3: "Texte narative, lectură & vocabular" },
  },
  noQuestionsTypes: ["romana-explore", "gravity-sort"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC3Config: AstroRomanaGradeConfig = {
  grade: 3,
  label: {
    en: "Class 3 · Grammar & Reading",
    hu: "3. osztály · Nyelvtan és olvasás",
    de: "Klasse 3 · Grammatik und Lesen",
    ro: "Clasa 3 · Gramatică și lectură",
  },
  islands: romana3.C3_ISLANDS,
  checkpointMap: romana3.C3_CHECKPOINT_MAP,
  loadProgress: romana3.loadC3Progress,
  saveProgress: romana3.saveC3Progress,
  isMissionDone: romana3.isMissionDoneC3,
  isIslandDone: romana3.isIslandDoneC3,
  isIslandUnlocked: romana3.isIslandUnlockedC3,
  isCheckpointUnlocked: romana3.isCheckpointUnlockedC3,
  isCheckpointDone: romana3.isCheckpointDoneC3,
  completeMission: romana3.completeMissionC3,
  islandTotalStars: romana3.islandTotalStarsC3,
  completeTest: romana3.completeTestC3,
  generateIslandQuestions: romana3.generateIslandQuestionsC3,
  generateCheckpointQuestions: romana3.generateCheckpointQuestionsC3,
  ExplorerComponent: C3Explorer,
  checkpointTopics: {
    en: { test1: "Nouns, verbs & adjective agreement", test2: "Pronouns, spelling & sentence building", test3: "Reading comprehension & narrative texts" },
    hu: { test1: "Főnevek, igék és melléknévi egyeztetés", test2: "Névmások, helyesírás és mondatalkotás", test3: "Szövegértés és elbeszélő szövegek" },
    de: { test1: "Substantive, Verben & Adjektivkongruenz", test2: "Pronomen, Rechtschreibung & Satzbildung", test3: "Leseverstehen & Erzähltexte" },
    ro: { test1: "Substantiv, verb și acordul adjectivului", test2: "Pronume, ortografie și alcătuirea propoziției", test3: "Înțelegerea textului și texte narative" },
  },
  noQuestionsTypes: ["romana-explore", "gravity-sort"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC4Config: AstroRomanaGradeConfig = {
  grade: 4,
  label: {
    en: "Class 4 · Advanced Grammar & Writing",
    hu: "4. osztály · Haladó nyelvtan és fogalmazás",
    de: "Klasse 4 · Fortgeschrittene Grammatik und Schreiben",
    ro: "Clasa 4 · Gramatică avansată și redactare",
  },
  islands: romana4.C4_ISLANDS,
  checkpointMap: romana4.C4_CHECKPOINT_MAP,
  loadProgress: romana4.loadC4Progress,
  saveProgress: romana4.saveC4Progress,
  isMissionDone: romana4.isMissionDoneC4,
  isIslandDone: romana4.isIslandDoneC4,
  isIslandUnlocked: romana4.isIslandUnlockedC4,
  isCheckpointUnlocked: romana4.isCheckpointUnlockedC4,
  isCheckpointDone: romana4.isCheckpointDoneC4,
  completeMission: romana4.completeMissionC4,
  islandTotalStars: romana4.islandTotalStarsC4,
  completeTest: romana4.completeTestC4,
  generateIslandQuestions: romana4.generateIslandQuestionsC4,
  generateCheckpointQuestions: romana4.generateCheckpointQuestionsC4,
  ExplorerComponent: C4Explorer,
  checkpointTopics: {
    en: { test1: "Nouns, verbs, adjectives & pronouns", test2: "Sentence parts, spelling & punctuation", test3: "Writing, summaries & reading themes" },
    hu: { test1: "Főnevek, igék, melléknevek és névmások", test2: "Mondatrészek, helyesírás és írásjelek", test3: "Fogalmazás, összefoglalás és olvasási témák" },
    de: { test1: "Substantive, Verben, Adjektive & Pronomen", test2: "Satzglieder, Rechtschreibung & Satzzeichen", test3: "Schreiben, Zusammenfassungen & Lesethemen" },
    ro: { test1: "Substantive, verbe, adjective și pronume", test2: "Părți de propoziție, ortografie și punctuație", test3: "Compuneri, rezumate și teme de lectură" },
  },
  noQuestionsTypes: ["romana-explore", "gravity-sort"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC5Config: AstroRomanaGradeConfig = {
  grade: 5,
  label: {
    en: "Class 5 · Language & Literature",
    hu: "5. osztály · Nyelv és irodalom",
    de: "Klasse 5 · Sprache und Literatur",
    ro: "Clasa 5 · Limbă și literatură",
  },
  islands: romana5.C5_ISLANDS,
  checkpointMap: romana5.C5_CHECKPOINT_MAP,
  loadProgress: romana5.loadC5Progress,
  saveProgress: romana5.saveC5Progress,
  isMissionDone: romana5.isMissionDoneC5,
  isIslandDone: romana5.isIslandDoneC5,
  isIslandUnlocked: romana5.isIslandUnlockedC5,
  isCheckpointUnlocked: romana5.isCheckpointUnlockedC5,
  isCheckpointDone: romana5.isCheckpointDoneC5,
  completeMission: romana5.completeMissionC5,
  islandTotalStars: romana5.islandTotalStarsC5,
  completeTest: romana5.completeTestC5,
  generateIslandQuestions: romana5.generateIslandQuestionsC5,
  generateCheckpointQuestions: romana5.generateCheckpointQuestionsC5,
  ExplorerComponent: C5Explorer,
  checkpointTopics: {
    en: { test1: "Phonetics, nouns, verbs & spelling", test2: "Pronouns, non-finite verbs & syntax", test3: "Literary genres, vocabulary & complex sentences" },
    hu: { test1: "Fonetika, főnevek, igék és helyesírás", test2: "Névmások, nem személyes igealakok és szintaxis", test3: "Irodalmi műfajok, szókincs és összetett mondatok" },
    de: { test1: "Phonetik, Substantive, Verben & Rechtschreibung", test2: "Pronomen, infinite Verbformen & Syntax", test3: "Literarische Gattungen, Wortschatz & komplexe Sätze" },
    ro: { test1: "Fonetică, substantiv, verb și ortografie", test2: "Pronume, moduri nepersonale și sintaxă", test3: "Genuri literare, vocabular și enunțuri complexe" },
  },
  noQuestionsTypes: ["romana-explore"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC6Config: AstroRomanaGradeConfig = {
  grade: 6,
  label: {
    en: "Class 6 · Grammar & Literary Study",
    hu: "6. osztály · Nyelvtan és irodalmi elemzés",
    de: "Klasse 6 · Grammatik und Literaturanalyse",
    ro: "Clasa 6 · Gramatică și studiu literar",
  },
  islands: romana6.C6_ISLANDS,
  checkpointMap: romana6.C6_CHECKPOINT_MAP,
  loadProgress: romana6.loadC6Progress,
  saveProgress: romana6.saveC6Progress,
  isMissionDone: romana6.isMissionDoneC6,
  isIslandDone: romana6.isIslandDoneC6,
  isIslandUnlocked: romana6.isIslandUnlockedC6,
  isCheckpointUnlocked: romana6.isCheckpointUnlockedC6,
  isCheckpointDone: romana6.isCheckpointDoneC6,
  completeMission: romana6.completeMissionC6,
  islandTotalStars: romana6.islandTotalStarsC6,
  completeTest: romana6.completeTestC6,
  generateIslandQuestions: romana6.generateIslandQuestionsC6,
  generateCheckpointQuestions: romana6.generateCheckpointQuestionsC6,
  ExplorerComponent: C6Explorer,
  checkpointTopics: {
    en: { test1: "Morphology, verb voices & sentence parts", test2: "Clauses, style & figures of speech", test3: "Spelling, literary text & review" },
    hu: { test1: "Morfológia, igei diatézisek és mondatrészek", test2: "Tagmondatok, stílus és alakzatok", test3: "Helyesírás, irodalmi szöveg és ismétlés" },
    de: { test1: "Morphologie, Verbdiathesen & Satzglieder", test2: "Nebensätze, Stil & Stilmittel", test3: "Rechtschreibung, literarischer Text & Wiederholung" },
    ro: { test1: "Morfologie, diateze verbale și părți de propoziție", test2: "Fraza, stil și figuri de stil", test3: "Ortografie, text literar și recapitulare" },
  },
  noQuestionsTypes: ["romana-explore"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC7Config: AstroRomanaGradeConfig = {
  grade: 7,
  label: {
    en: "Class 7 · Syntax & Literature",
    hu: "7. osztály · Szintaxis és irodalom",
    de: "Klasse 7 · Syntax und Literatur",
    ro: "Clasa 7 · Sintaxă și literatură",
  },
  islands: romana7.C7_ISLANDS,
  checkpointMap: romana7.C7_CHECKPOINT_MAP,
  loadProgress: romana7.loadC7Progress,
  saveProgress: romana7.saveC7Progress,
  isMissionDone: romana7.isMissionDoneC7,
  isIslandDone: romana7.isIslandDoneC7,
  isIslandUnlocked: romana7.isIslandUnlockedC7,
  isCheckpointUnlocked: romana7.isCheckpointUnlockedC7,
  isCheckpointDone: romana7.isCheckpointDoneC7,
  completeMission: romana7.completeMissionC7,
  islandTotalStars: romana7.islandTotalStarsC7,
  completeTest: romana7.completeTestC7,
  generateIslandQuestions: romana7.generateIslandQuestionsC7,
  generateCheckpointQuestions: romana7.generateCheckpointQuestionsC7,
  ExplorerComponent: C7Explorer,
  checkpointTopics: {
    en: { test1: "Adjectives, numerals, indicative & subordination", test2: "Subjunctive, voices & adverbial clauses", test3: "Epic and lyric texts, vocabulary & review" },
    hu: { test1: "Melléknevek, számnevek, kijelentő mód és alárendelés", test2: "Kötőmód, diatézisek és határozói mellékmondatok", test3: "Epikus és lírai szövegek, szókincs és ismétlés" },
    de: { test1: "Adjektive, Numerale, Indikativ & Subordination", test2: "Konjunktiv, Diathesen & Adverbialsätze", test3: "Epische und lyrische Texte, Wortschatz & Wiederholung" },
    ro: { test1: "Adjectivul, numeralul, indicativul și subordonarea", test2: "Conjunctivul, diatezele și subordonatele circumstanțiale", test3: "Text epic și liric, vocabular și recapitulare" },
  },
  noQuestionsTypes: ["romana-explore"],
  defaultBgColor: DEFAULT_BG_COLOR,
};

export const romanaC8Config: AstroRomanaGradeConfig = {
  grade: 8,
  label: {
    en: "Class 8 · Exam Preparation",
    hu: "8. osztály · Vizsgafelkészítő",
    de: "Klasse 8 · Prüfungsvorbereitung",
    ro: "Clasa 8 · Pregătire pentru examen",
  },
  islands: romana8.C8_ISLANDS,
  checkpointMap: romana8.C8_CHECKPOINT_MAP,
  loadProgress: romana8.loadC8Progress,
  saveProgress: romana8.saveC8Progress,
  isMissionDone: romana8.isMissionDoneC8,
  isIslandDone: romana8.isIslandDoneC8,
  isIslandUnlocked: romana8.isIslandUnlockedC8,
  isCheckpointUnlocked: romana8.isCheckpointUnlockedC8,
  isCheckpointDone: romana8.isCheckpointDoneC8,
  completeMission: romana8.completeMissionC8,
  islandTotalStars: romana8.islandTotalStarsC8,
  completeTest: romana8.completeTestC8,
  generateIslandQuestions: romana8.generateIslandQuestionsC8,
  generateCheckpointQuestions: romana8.generateCheckpointQuestionsC8,
  ExplorerComponent: C8Explorer,
  checkpointTopics: {
    en: { test1: "Morphology, pronouns & sentence syntax", test2: "Subordination, stylistics & literary genres", test3: "Commentary, non-literary texts & exam simulation" },
    hu: { test1: "Morfológia, névmások és mondattan", test2: "Alárendelés, stilisztika és irodalmi műfajok", test3: "Kommentár, nem irodalmi szövegek és vizsgaszimuláció" },
    de: { test1: "Morphologie, Pronomen & Satzsyntax", test2: "Subordination, Stilistik & literarische Gattungen", test3: "Kommentar, nichtliterarische Texte & Prüfungssimulation" },
    ro: { test1: "Morfologie, pronume și sintaxa propoziției", test2: "Subordonare, stilistică și genuri literare", test3: "Comentariu, texte non-literare și simulare de examen" },
  },
  noQuestionsTypes: ["romana-explore"],
  defaultBgColor: DEFAULT_BG_COLOR,
};
