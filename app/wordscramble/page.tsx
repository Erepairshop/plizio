"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, Trophy, Timer, Delete, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import AvatarCompanion from "@/components/AvatarCompanion";
import wordsEn from "@/data/words.json";
import wordsHu from "@/data/words-hu.json";
import wordsDe from "@/data/words-de.json";
import wordsRo from "@/data/words-ro.json";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type WSBadgeId = "reveal" | "time" | "reshuffle" | "shield";
type Screen = "expedition" | "playing" | "levelComplete" | "failed" | "complete" | "reward";
type WordState = "playing" | "correct" | "wrong" | "timeout";

interface WSLevelConfig {
  level: number;
  wordCount: number;
  timePerWord: number;
  minCorrect: number;
  minLen: number;
  maxLen: number;
  fakeLetters: number;
  badgeReward: WSBadgeId | null;
  emoji: string;
}

interface WSExpeditionSave {
  currentLevel: number;
  completedLevels: number[];
  earnedBadges: WSBadgeId[];
  levelScores: Record<number, number>;
}

const WS_STORAGE_KEY = "ws_expedition_v1";

// ─── LEVEL CONFIGS ─────────────────────────────────────────────────────────────
const LEVEL_CONFIGS: WSLevelConfig[] = [
  { level: 1,  wordCount: 3, timePerWord: 25, minCorrect: 2, minLen: 4, maxLen: 4, fakeLetters: 0, badgeReward: null,         emoji: "🌱" },
  { level: 2,  wordCount: 4, timePerWord: 22, minCorrect: 3, minLen: 4, maxLen: 5, fakeLetters: 0, badgeReward: "reveal",      emoji: "🌿" },
  { level: 3,  wordCount: 4, timePerWord: 18, minCorrect: 3, minLen: 5, maxLen: 6, fakeLetters: 0, badgeReward: null,         emoji: "🌲" },
  { level: 4,  wordCount: 5, timePerWord: 15, minCorrect: 4, minLen: 5, maxLen: 6, fakeLetters: 0, badgeReward: "time",       emoji: "⛰️" },
  { level: 5,  wordCount: 5, timePerWord: 13, minCorrect: 4, minLen: 6, maxLen: 6, fakeLetters: 0, badgeReward: null,         emoji: "🌋" },
  { level: 6,  wordCount: 6, timePerWord: 12, minCorrect: 5, minLen: 6, maxLen: 7, fakeLetters: 1, badgeReward: "reshuffle",  emoji: "🌀" },
  { level: 7,  wordCount: 6, timePerWord: 11, minCorrect: 5, minLen: 7, maxLen: 7, fakeLetters: 1, badgeReward: null,         emoji: "🌊" },
  { level: 8,  wordCount: 6, timePerWord: 10, minCorrect: 5, minLen: 7, maxLen: 8, fakeLetters: 2, badgeReward: "shield",     emoji: "🔥" },
  { level: 9,  wordCount: 7, timePerWord: 10, minCorrect: 6, minLen: 7, maxLen: 8, fakeLetters: 2, badgeReward: null,         emoji: "⚡" },
  { level: 10, wordCount: 7, timePerWord: 12, minCorrect: 5, minLen: 4, maxLen: 8, fakeLetters: 2, badgeReward: null,         emoji: "🏆" },
];

const BADGE_DEFS: Record<WSBadgeId, { emoji: string; name: Record<Language, string>; desc: Record<Language, string> }> = {
  reveal: {
    emoji: "🔍",
    name: { hu: "Felfedés", de: "Enthüllen", en: "Reveal", ro: "Dezvăluie" },
    desc: { hu: "Felfedi a következő helyes betűt", de: "Zeigt den nächsten richtigen Buchstaben", en: "Reveals the next correct letter", ro: "Dezvăluie litera corectă" },
  },
  time: {
    emoji: "⏰",
    name: { hu: "+8 mp", de: "+8 Sek", en: "+8 sec", ro: "+8 sec" },
    desc: { hu: "+8 másodpercet ad az aktuális szóhoz", de: "Gibt +8 Sekunden für das aktuelle Wort", en: "Adds +8 seconds to the current word", ro: "Adaugă +8 secunde la cuvântul curent" },
  },
  reshuffle: {
    emoji: "🔄",
    name: { hu: "Keverés", de: "Mischen", en: "Shuffle", ro: "Amestecă" },
    desc: { hu: "Újra összekeveri a betűket", de: "Buchstaben neu mischen", en: "Reshuffles the available letters", ro: "Amestecă din nou literele" },
  },
  shield: {
    emoji: "🛡️",
    name: { hu: "Pajzs", de: "Schild", en: "Shield", ro: "Scut" },
    desc: { hu: "Egy elrontott szó nem számít hibának", de: "Ein falsches Wort zählt nicht als Fehler", en: "One wrong word doesn't count as a miss", ro: "Un cuvânt greșit nu contează" },
  },
};

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  hu: {
    title: "BETŰKEVERŐ EXPEDÍCIÓ",
    subtitle: "10 szint · Növekvő nehézség",
    start: "Expedíció indítása",
    continueBtn: "Folytatás",
    reset: "Újrakezd",
    level: "Szint",
    levelComplete: "Szint teljesítve!",
    newBadge: "Új power badge!",
    nextLevel: "Következő szint",
    expeditionFailed: "Expedíció vége",
    failedDesc: "Nem sikerült elég szót megfejteni. Újrakezded?",
    restartExpedition: "Újrakezd",
    expeditionComplete: "Expedíció teljesítve!",
    legendaryCard: "Legendary kártyát szereztél!",
    mainMenu: "Főmenü",
    score: "pont",
    minCorrect: "minimum",
    wordsLeft: "szó van hátra",
    correct: "Helyes!",
    wrong: "Tévesztés",
    timeout: "Lejárt az idő",
    shieldActive: "Pajzs aktív",
    badgeLimitReached: "Max 2 badge/szint",
    fakeLetter: "Álbetűk aktívak!",
    boss: "BOSS SZINT",
    delete: "Töröl",
    levelInfo: "szó · minimum helyes",
    retry: "Újra próba",
    expeditionMap: "Expedíció térkép",
  },
  de: {
    title: "BUCHSTABENSALAT EXPEDITION",
    subtitle: "10 Stufen · Wachsende Schwierigkeit",
    start: "Expedition starten",
    continueBtn: "Weiter",
    reset: "Neu starten",
    level: "Stufe",
    levelComplete: "Stufe abgeschlossen!",
    newBadge: "Neues Power Badge!",
    nextLevel: "Nächste Stufe",
    expeditionFailed: "Expedition vorbei",
    failedDesc: "Nicht genug Wörter entschlüsselt. Neu starten?",
    restartExpedition: "Neu starten",
    expeditionComplete: "Expedition abgeschlossen!",
    legendaryCard: "Legendäre Karte erhalten!",
    mainMenu: "Hauptmenü",
    score: "Punkte",
    minCorrect: "minimum",
    wordsLeft: "Wörter übrig",
    correct: "Richtig!",
    wrong: "Falsch",
    timeout: "Zeit abgelaufen",
    shieldActive: "Schild aktiv",
    badgeLimitReached: "Max 2 Badges/Stufe",
    fakeLetter: "Falschbuchstaben aktiv!",
    boss: "BOSS-STUFE",
    delete: "Löschen",
    levelInfo: "Wörter · min. richtig",
    retry: "Nochmal versuchen",
    expeditionMap: "Expeditionskarte",
  },
  en: {
    title: "WORD SCRAMBLE EXPEDITION",
    subtitle: "10 levels · Rising difficulty",
    start: "Start Expedition",
    continueBtn: "Continue",
    reset: "Restart",
    level: "Level",
    levelComplete: "Level complete!",
    newBadge: "New power badge!",
    nextLevel: "Next level",
    expeditionFailed: "Expedition over",
    failedDesc: "Not enough words solved. Restart?",
    restartExpedition: "Restart",
    expeditionComplete: "Expedition complete!",
    legendaryCard: "You earned a Legendary card!",
    mainMenu: "Main menu",
    score: "pts",
    minCorrect: "minimum",
    wordsLeft: "words left",
    correct: "Correct!",
    wrong: "Wrong",
    timeout: "Time's up",
    shieldActive: "Shield active",
    badgeLimitReached: "Max 2 badges/level",
    fakeLetter: "Fake letters active!",
    boss: "BOSS LEVEL",
    delete: "Delete",
    levelInfo: "words · min. correct",
    retry: "Try Again",
    expeditionMap: "Expedition Map",
  },
  ro: {
    title: "EXPEDIȚIA LITERELOR AMESTECATE",
    subtitle: "10 niveluri · Dificultate crescândă",
    start: "Pornește Expediția",
    continueBtn: "Continuă",
    reset: "Reîncepe",
    level: "Nivel",
    levelComplete: "Nivel completat!",
    newBadge: "Badge nou!",
    nextLevel: "Nivelul următor",
    expeditionFailed: "Expediție terminată",
    failedDesc: "Nu s-au rezolvat suficiente cuvinte. Reîncepi?",
    restartExpedition: "Reîncepe",
    expeditionComplete: "Expediție completată!",
    legendaryCard: "Ai câștigat un card legendar!",
    mainMenu: "Meniu principal",
    score: "pct",
    minCorrect: "minim",
    wordsLeft: "cuvinte rămase",
    correct: "Corect!",
    wrong: "Greșit",
    timeout: "Timp depășit",
    shieldActive: "Scut activ",
    badgeLimitReached: "Max 2 badge-uri/nivel",
    fakeLetter: "Litere false active!",
    boss: "NIVEL BOSS",
    delete: "Șterge",
    levelInfo: "cuvinte · min. corecte",
    retry: "Încearcă din nou",
    expeditionMap: "Hartă expediție",
  },
};

const RARITY_COLORS: Record<CardRarity, string> = {
  legendary: "#B44DFF", gold: "#FFD700", silver: "#C0C0C0", bronze: "#CD7F32",
};
const RARITY_LABELS: Record<Language, Record<CardRarity, string>> = {
  hu: { legendary: "Legendás", gold: "Arany",     silver: "Ezüst",  bronze: "Bronz"  },
  de: { legendary: "Legendär", gold: "Gold",      silver: "Silber", bronze: "Bronze" },
  en: { legendary: "Legendary",gold: "Gold",      silver: "Silver", bronze: "Bronze" },
  ro: { legendary: "Legendar", gold: "Aur",       silver: "Argint", bronze: "Bronz"  },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const WORD_LISTS: Record<Language, string[]> = {
  en: wordsEn as string[],
  hu: wordsHu as string[],
  de: wordsDe as string[],
  ro: wordsRo as string[],
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWordsForLevel(lang: Language, cfg: WSLevelConfig, usedWords: string[]): string[] {
  const all = WORD_LISTS[lang];
  let pool = all.filter(w => w.length >= cfg.minLen && w.length <= cfg.maxLen);
  if (pool.length < cfg.wordCount) {
    // widen pool if not enough words
    pool = all.filter(w => w.length >= cfg.minLen - 1 && w.length <= cfg.maxLen + 1);
  }
  if (pool.length === 0) pool = all;
  const available = pool.filter(w => !usedWords.includes(w));
  const finalPool = available.length >= cfg.wordCount ? available : pool;
  return shuffleArray(finalPool).slice(0, cfg.wordCount);
}

function buildLetterPool(word: string, fakeCount: number): { letter: string; isFake: boolean }[] {
  const letters = word.split("").map(l => ({ letter: l, isFake: false }));
  for (let i = 0; i < fakeCount; i++) {
    let fake: string;
    do { fake = ALPHABET[Math.floor(Math.random() * ALPHABET.length)]; }
    while (word.includes(fake));
    letters.push({ letter: fake, isFake: true });
  }
  return shuffleArray(letters);
}

function updateStreak(): number {
  const today = new Date().toDateString();
  const data = localStorage.getItem("plizio_streak");
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastDate === today) return count;
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

function freshExpedition(): WSExpeditionSave {
  return { currentLevel: 1, completedLevels: [], earnedBadges: [], levelScores: {} };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function WordScramblePage() {
  const { lang } = useLang();
  const t = T[lang as Language] ?? T.en;

  // ── Screens ──
  const [screen, setScreen] = useState<Screen>("expedition");

  // ── Expedition state ──
  const [exped, setExped] = useState<WSExpeditionSave>(freshExpedition);

  // ── Level state ──
  const [cfg, setCfg] = useState<WSLevelConfig>(LEVEL_CONFIGS[0]);
  const [levelWords, setLevelWords] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shieldActive, setShieldActive] = useState(false);
  const [badgesUsedThisLevel, setBadgesUsedThisLevel] = useState(0);

  // ── Word state ──
  const [currentWord, setCurrentWord] = useState("");
  const [letterPool, setLetterPool] = useState<{ letter: string; used: boolean; isFake: boolean }[]>([]);
  const [guess, setGuess] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [wordState, setWordState] = useState<WordState>("playing");

  // ── Result state ──
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [earnedBadge, setEarnedBadge] = useState<WSBadgeId | null>(null);
  const [jumpTrigger, setJumpTrigger] = useState<{ reaction: "happy" | "victory" | null; timestamp: number } | undefined>(undefined);

  // ── Avatar ──
  const [gender, setGenderState] = useState<AvatarGender>("girl");
  const [activeSkin,    setActiveSkinState]    = useState(() => getSkinDef("default"));
  const [activeFace,    setActiveFaceState]    = useState(() => getFaceDef("default"));
  const [activeTop,     setActiveTopState]     = useState<ReturnType<typeof getTopDef>>(null);
  const [activeBottom,  setActiveBottomState]  = useState<ReturnType<typeof getBottomDef>>(null);
  const [activeShoe,    setActiveShoeState]    = useState<ReturnType<typeof getShoeDef>>(null);
  const [activeCape,    setActiveCapeState]    = useState<ReturnType<typeof getCapeDef>>(null);
  const [activeGlasses, setActiveGlassesState] = useState<ReturnType<typeof getGlassesDef>>(null);
  const [activeGloves,  setActiveGlovesState]  = useState<ReturnType<typeof getGloveDef>>(null);
  const [activeHat,     setActiveHatState]     = useState<ReturnType<typeof getHatDef>>(null);
  const [activeTrail,   setActiveTrailState]   = useState<ReturnType<typeof getTrailDef>>(null);

  const transitionRef = useRef(false);

  // Load avatar + expedition
  useEffect(() => {
    setGenderState(getGender());
    setActiveSkinState(getSkinDef(getActiveSkin()));
    setActiveFaceState(getFaceDef(getActiveFace()));
    const top  = getActive("top");     if (top)  setActiveTopState(getTopDef(top));
    const bot  = getActive("bottom");  if (bot)  setActiveBottomState(getBottomDef(bot));
    const shoe = getActive("shoe");    if (shoe) setActiveShoeState(getShoeDef(shoe));
    const cape = getActive("cape");    if (cape) setActiveCapeState(getCapeDef(cape));
    const gls  = getActive("glasses"); if (gls)  setActiveGlassesState(getGlassesDef(gls));
    const glv  = getActive("gloves");  if (glv)  setActiveGlovesState(getGloveDef(glv));
    const hat  = getActiveHat();       if (hat)  setActiveHatState(getHatDef(hat));
    const trl  = getActiveTrail();     if (trl)  setActiveTrailState(getTrailDef(trl));

    const saved = localStorage.getItem(WS_STORAGE_KEY);
    if (saved) {
      try { setExped(JSON.parse(saved)); }
      catch { setExped(freshExpedition()); }
    }
  }, []);

  const saveExped = useCallback((e: WSExpeditionSave) => {
    setExped(e);
    localStorage.setItem(WS_STORAGE_KEY, JSON.stringify(e));
  }, []);

  // ── Start a level ──
  const startLevel = useCallback((levelNum: number, currentExped: WSExpeditionSave) => {
    const levelCfg = LEVEL_CONFIGS[levelNum - 1];
    const words = getWordsForLevel(lang as Language, levelCfg, []);
    const firstWord = words[0];
    const pool = buildLetterPool(firstWord, levelCfg.fakeLetters);

    setCfg(levelCfg);
    setLevelWords(words);
    setWordIndex(0);
    setScore(0);
    setShieldActive(false);
    setBadgesUsedThisLevel(0);
    setCurrentWord(firstWord);
    setLetterPool(pool.map(l => ({ ...l, used: false })));
    setGuess([]);
    setTimeLeft(levelCfg.timePerWord);
    setWordState("playing");
    setJumpTrigger(undefined);
    transitionRef.current = false;
    setScreen("playing");
  }, [lang]);

  // ── Load next word ──
  const loadWord = useCallback((idx: number, words: string[], levelCfg: WSLevelConfig) => {
    const word = words[idx];
    const pool = buildLetterPool(word, levelCfg.fakeLetters);
    setCurrentWord(word);
    setLetterPool(pool.map(l => ({ ...l, used: false })));
    setGuess([]);
    setTimeLeft(levelCfg.timePerWord);
    setWordState("playing");
    transitionRef.current = false;
  }, []);

  // ── Timer ──
  useEffect(() => {
    if (wordState !== "playing" || screen !== "playing") return;
    if (timeLeft <= 0) {
      if (transitionRef.current) return;
      transitionRef.current = true;
      // Timeout
      if (shieldActive) {
        setShieldActive(false);
        // Shield absorbs — still move to next word as "missed" but no penalty
        const nextIdx = wordIndex + 1;
        setWordIndex(nextIdx);
        if (nextIdx >= levelWords.length) {
          finishLevel(score, cfg, exped);
        } else {
          setWordState("timeout");
          setTimeout(() => loadWord(nextIdx, levelWords, cfg), 1200);
        }
      } else {
        setWordState("timeout");
        const nextIdx = wordIndex + 1;
        setTimeout(() => {
          setWordIndex(nextIdx);
          if (nextIdx >= levelWords.length) {
            finishLevel(score, cfg, exped);
          } else {
            loadWord(nextIdx, levelWords, cfg);
          }
        }, 1200);
      }
      return;
    }
    const timer = setTimeout(() => setTimeLeft(v => v - 1), 1000);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordState, timeLeft, screen]);

  // ── Add letter ──
  const addLetter = useCallback((poolIndex: number) => {
    if (wordState !== "playing" || letterPool[poolIndex].used) return;
    const newPool = [...letterPool];
    newPool[poolIndex] = { ...newPool[poolIndex], used: true };
    setLetterPool(newPool);
    const newGuess = [...guess, letterPool[poolIndex].letter];
    setGuess(newGuess);

    if (newGuess.length === currentWord.length) {
      if (transitionRef.current) return;
      transitionRef.current = true;
      const guessWord = newGuess.join("");
      const isCorrect = guessWord === currentWord;
      setWordState(isCorrect ? "correct" : "wrong");
      const newScore = isCorrect ? score + 1 : score;
      if (isCorrect) {
        setScore(newScore);
        setJumpTrigger({ reaction: "happy", timestamp: Date.now() });
      }
      const nextIdx = wordIndex + 1;
      setTimeout(() => {
        setWordIndex(nextIdx);
        if (nextIdx >= levelWords.length) {
          finishLevel(newScore, cfg, exped);
        } else {
          loadWord(nextIdx, levelWords, cfg);
        }
      }, 1200);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordState, letterPool, guess, currentWord, score, wordIndex, levelWords, cfg, exped]);

  // ── Remove last letter ──
  const removeLast = useCallback(() => {
    if (wordState !== "playing" || guess.length === 0) return;
    const lastLetter = guess[guess.length - 1];
    const newPool = [...letterPool];
    for (let i = newPool.length - 1; i >= 0; i--) {
      if (newPool[i].used && newPool[i].letter === lastLetter) {
        newPool[i] = { ...newPool[i], used: false };
        break;
      }
    }
    setLetterPool(newPool);
    setGuess(guess.slice(0, -1));
  }, [wordState, guess, letterPool]);

  // ── Finish level ──
  const finishLevel = useCallback((finalScore: number, levelCfg: WSLevelConfig, currentExped: WSExpeditionSave) => {
    const passed = finalScore >= levelCfg.minCorrect;
    const streak = updateStreak();
    incrementTotalGames();
    if (finalScore === levelCfg.wordCount) incrementPerfectScores();

    let rarity: CardRarity;
    if (levelCfg.level === 10) {
      rarity = "legendary";
    } else {
      const raw = calculateRarity(finalScore, levelCfg.wordCount, streak);
      rarity = raw === "legendary" ? "gold" : raw;
    }
    saveCard({ id: generateCardId(), game: "wordscramble", rarity, score: finalScore, total: levelCfg.wordCount, date: new Date().toISOString() });
    setEarnedCard(rarity);

    if (!passed) {
      setScreen("failed");
      return;
    }

    const badge = levelCfg.badgeReward;
    const newExped: WSExpeditionSave = {
      ...currentExped,
      currentLevel: Math.max(currentExped.currentLevel, levelCfg.level + 1),
      completedLevels: [...currentExped.completedLevels.filter(l => l !== levelCfg.level), levelCfg.level],
      earnedBadges: (badge && !currentExped.completedLevels.includes(levelCfg.level)) ? [...currentExped.earnedBadges, badge] : currentExped.earnedBadges,
      levelScores: { ...currentExped.levelScores, [levelCfg.level]: finalScore },
    };
    saveExped(newExped);
    setEarnedBadge(badge);

    if (levelCfg.level === 10) {
      setJumpTrigger({ reaction: "victory", timestamp: Date.now() });
      setScreen("reward");
    } else {
      setScreen("levelComplete");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveExped]);

  // ── Badge usage ──
  const useBadge = useCallback((badgeId: WSBadgeId) => {
    if (badgesUsedThisLevel >= 2 || wordState !== "playing") return;
    const idx = exped.earnedBadges.indexOf(badgeId);
    if (idx === -1) return;
    const newBadges = [...exped.earnedBadges];
    newBadges.splice(idx, 1);
    const newExped = { ...exped, earnedBadges: newBadges };
    saveExped(newExped);
    setBadgesUsedThisLevel(n => n + 1);

    if (badgeId === "reveal") {
      const nextPos = guess.length;
      if (nextPos >= currentWord.length) return;
      const correctLetter = currentWord[nextPos];
      const newPool = [...letterPool];
      for (let i = 0; i < newPool.length; i++) {
        if (!newPool[i].used && newPool[i].letter === correctLetter) {
          newPool[i] = { ...newPool[i], used: true };
          break;
        }
      }
      setLetterPool(newPool);
      const newGuess = [...guess, correctLetter];
      setGuess(newGuess);

      if (newGuess.length === currentWord.length) {
        if (transitionRef.current) return;
        transitionRef.current = true;
        const isCorrect = newGuess.join("") === currentWord;
        setWordState(isCorrect ? "correct" : "wrong");
        const newScore = isCorrect ? score + 1 : score;
        if (isCorrect) {
          setScore(newScore);
          setJumpTrigger({ reaction: "happy", timestamp: Date.now() });
        }
        const nextIdx = wordIndex + 1;
        setTimeout(() => {
          setWordIndex(nextIdx);
          if (nextIdx >= levelWords.length) {
            finishLevel(newScore, cfg, newExped);
          } else {
            loadWord(nextIdx, levelWords, cfg);
          }
        }, 1200);
      }
    } else if (badgeId === "time") {
      setTimeLeft(t => t + 8);
    } else if (badgeId === "reshuffle") {
      const unused = letterPool.filter(l => !l.used);
      const used = letterPool.filter(l => l.used);
      setLetterPool([...used, ...shuffleArray(unused)]);
    } else if (badgeId === "shield") {
      setShieldActive(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badgesUsedThisLevel, wordState, exped, guess, currentWord, letterPool, score, wordIndex, levelWords, cfg, saveExped, finishLevel, loadWord]);

  const restartExpedition = useCallback(() => {
    const fresh = freshExpedition();
    saveExped(fresh);
    setEarnedCard(null);
    setEarnedBadge(null);
    setScreen("expedition");
  }, [saveExped]);

  const avatarMood = (() => {
    if (wordState === "correct") return "happy" as const;
    if (wordState === "wrong" || wordState === "timeout") return "disappointed" as const;
    if (timeLeft <= 5) return "confused" as const;
    return "focused" as const;
  })();

  const avatarProps = {
    mood: avatarMood, fixed: false, gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape,
    activeGlasses, activeGloves, activeHat, activeTrail, jumpTrigger,
  };

  const timerColor = timeLeft <= 3 ? "text-neon-pink" : timeLeft <= 7 ? "text-gold" : "text-neon-green";

  // ═══════════════════════════════════════════════════════════════════
  // ── EXPEDITION HOME SCREEN ──────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "expedition") {
    const hasProgress = exped.completedLevels.length > 0;
    return (
      <main className="min-h-screen flex flex-col px-4 pt-4 pb-6 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <Link href="/">
            <motion.div className="p-2 rounded-xl bg-white/5 border border-white/10" whileTap={{ scale: 0.9 }}>
              <ArrowLeft size={18} className="text-white/40" />
            </motion.div>
          </Link>
          <div>
            <p className="text-white font-black tracking-[0.15em] text-sm">{t.title}</p>
            <p className="text-white/35 text-xs">{t.subtitle}</p>
          </div>
          {hasProgress && (
            <motion.button
              onClick={restartExpedition}
              className="ml-auto text-white/25 text-xs flex items-center gap-1"
              whileTap={{ scale: 0.9 }}
            >
              <RotateCcw size={12} />
              {t.reset}
            </motion.button>
          )}
        </div>

        {/* Level path */}
        <div className="flex flex-col gap-2 flex-1">
          {LEVEL_CONFIGS.map((lc) => {
            const done = exped.completedLevels.includes(lc.level);
            const current = lc.level === exped.currentLevel;
            const locked = lc.level > exped.currentLevel;
            const levelScore = exped.levelScores[lc.level];
            return (
              <motion.div
                key={lc.level}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${
                  current
                    ? "border-yellow-400/40 bg-yellow-400/8"
                    : done
                    ? "border-emerald-500/25 bg-emerald-500/5"
                    : "border-white/6 bg-white/2"
                }`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: locked ? 0.35 : 1, x: 0 }}
                transition={{ delay: lc.level * 0.04 }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                  style={{ background: done ? "rgba(34,197,94,0.2)" : current ? "rgba(250,204,21,0.2)" : "rgba(255,255,255,0.05)" }}>
                  {done ? "✅" : current ? lc.emoji : locked ? "🔒" : lc.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white/60 text-xs font-bold">{t.level} {lc.level}</span>
                    {lc.level === 10 && <span className="text-[9px] font-black text-amber-400 bg-amber-400/15 px-1.5 py-0.5 rounded-full">{t.boss}</span>}
                    {lc.badgeReward && (
                      <span className="text-[11px] opacity-70">{BADGE_DEFS[lc.badgeReward].emoji}</span>
                    )}
                  </div>
                  <div className="text-[10px] text-white/30">
                    {lc.wordCount} {t.levelInfo}: {lc.minCorrect}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {done && levelScore !== undefined && (
                    <span className="text-emerald-400 text-xs font-bold">{levelScore}/{lc.wordCount}</span>
                  )}
                  {lc.fakeLetters > 0 && !locked && (
                    <span className="text-[9px] text-pink-400/60 font-bold">+{lc.fakeLetters} fake</span>
                  )}
                  {!locked && (
                    <button
                      onClick={() => startLevel(lc.level, exped)}
                      className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all active:scale-95 ${
                        lc.level === 10
                          ? "bg-amber-400/20 border border-amber-400/40 text-amber-300"
                          : current
                          ? "bg-emerald-500 text-white shadow-[0_0_10px_rgba(0,255,136,0.3)]"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {done ? "↩" : <ChevronRight size={14} />}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge inventory */}
        {exped.earnedBadges.length > 0 && (
          <div className="mt-4 p-3 rounded-2xl border border-white/8 bg-white/3">
            <p className="text-white/30 text-[10px] font-bold tracking-wider mb-2 uppercase">Power Badges</p>
            <div className="flex gap-2 flex-wrap">
              {exped.earnedBadges.map((bid, i) => (
                <div key={i} className="flex items-center gap-1 px-2 py-1 rounded-xl bg-purple-500/10 border border-purple-400/20">
                  <span className="text-base">{BADGE_DEFS[bid].emoji}</span>
                  <span className="text-purple-300 text-[10px] font-bold">{BADGE_DEFS[bid].name[lang as Language]}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── PLAYING SCREEN ──────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "playing") {
    const limitReached = badgesUsedThisLevel >= 2;
    return (
      <main className="min-h-screen flex flex-col items-center px-4 pb-6 relative">
        {/* HUD */}
        <div className="w-full max-w-md pt-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2">
                <ArrowLeft size={16} className="text-white/40" />
              </div>
            </Link>
            {/* Progress dots */}
            <div className="flex gap-1.5">
              {levelWords.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${
                  i < wordIndex
                    ? "bg-neon-green"
                    : i === wordIndex
                    ? "bg-neon-blue"
                    : "bg-white/15"
                }`} />
              ))}
            </div>
            {/* Score */}
            <div className="flex items-center gap-1.5 text-gold font-bold">
              <Trophy size={14} className="text-gold" />
              <span>{score}</span>
              <span className="text-white/25 text-xs">/ {cfg.minCorrect} min</span>
            </div>
          </div>

          {/* Level info */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-white/30 text-xs">{t.level} {cfg.level}</span>
            {cfg.fakeLetters > 0 && (
              <span className="text-pink-400/70 text-[10px] font-bold bg-pink-500/10 px-2 py-0.5 rounded-full">{t.fakeLetter}</span>
            )}
          </div>
        </div>

        {/* Avatar + Timer row */}
        <div className="flex items-center justify-between w-full max-w-md mb-4">
          <div className="w-20 h-20">
            <AvatarCompanion {...avatarProps} />
          </div>

          {/* Timer */}
          <motion.div
            className={`text-5xl font-black ${timerColor}`}
            key={timeLeft}
            animate={{ scale: timeLeft <= 5 ? [1, 1.15, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Timer size={28} />
              {timeLeft}
            </div>
          </motion.div>

          {/* Badge tray */}
          <div className="flex flex-col gap-1.5 items-end w-20">
            {shieldActive && (
              <motion.div
                className="text-xs text-blue-300 bg-blue-400/10 border border-blue-400/30 px-2 py-1 rounded-xl"
                initial={{ scale: 0 }} animate={{ scale: 1 }}
              >
                🛡️
              </motion.div>
            )}
            {exped.earnedBadges.slice(0, 3).map((bid, i) => (
              <motion.button
                key={`${bid}-${i}`}
                onClick={() => useBadge(bid)}
                disabled={limitReached || wordState !== "playing"}
                className={`flex items-center gap-1 px-2 py-1 rounded-xl border text-[10px] font-bold transition-all ${
                  limitReached || wordState !== "playing"
                    ? "border-white/5 bg-white/3 opacity-30 text-white/30"
                    : "border-purple-400/40 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 active:scale-95"
                }`}
                whileTap={!limitReached ? { scale: 0.88 } : undefined}
                title={BADGE_DEFS[bid].desc[lang as Language]}
              >
                <span>{BADGE_DEFS[bid].emoji}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Guess slots */}
        <div className="flex gap-2 justify-center flex-wrap mb-6 w-full max-w-sm">
          {currentWord.split("").map((_, i) => (
            <motion.div
              key={i}
              className={`w-11 h-12 rounded-xl border-2 flex items-center justify-center text-xl font-black ${
                wordState === "correct"
                  ? "border-neon-green bg-neon-green/10 text-neon-green"
                  : wordState === "wrong"
                  ? "border-neon-pink bg-neon-pink/10 text-neon-pink"
                  : wordState === "timeout"
                  ? "border-white/20 bg-white/5 text-white/30"
                  : guess[i]
                  ? "border-white/40 bg-white/8 text-white"
                  : "border-white/10 bg-white/[0.02]"
              }`}
              initial={guess[i] ? { scale: 0.7 } : {}}
              animate={guess[i] ? { scale: 1 } : {}}
            >
              {guess[i] || ""}
            </motion.div>
          ))}
        </div>

        {/* Wrong / Timeout reveal */}
        <AnimatePresence>
          {(wordState === "wrong" || wordState === "timeout") && (
            <motion.div
              className="text-white/50 text-sm font-bold tracking-wider mb-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              → {currentWord}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter pool */}
        <div className="flex gap-2 justify-center flex-wrap max-w-sm mb-4">
          {letterPool.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => addLetter(i)}
              className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-lg font-black transition-all ${
                item.used
                  ? "border-white/5 bg-transparent text-transparent"
                  : item.isFake
                  ? "border-pink-500/25 bg-pink-500/8 text-pink-300 hover:bg-pink-500/15"
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
              }`}
              whileHover={!item.used ? { scale: 1.1 } : {}}
              whileTap={!item.used ? { scale: 0.9 } : {}}
              disabled={item.used || wordState !== "playing"}
            >
              {item.letter}
            </motion.button>
          ))}
        </div>

        {/* Controls */}
        {wordState === "playing" && guess.length > 0 && (
          <motion.button
            onClick={removeLast}
            className="flex items-center gap-2 text-white/35 text-sm font-bold hover:text-white/55 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <Delete size={16} />
            {t.delete}
          </motion.button>
        )}

        {/* Feedback icons */}
        <AnimatePresence>
          {wordState === "correct" && (
            <motion.div className="mt-3" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <CheckCircle size={44} className="text-neon-green" style={{ filter: "drop-shadow(0 0 12px rgba(0,255,136,0.6))" }} />
            </motion.div>
          )}
          {(wordState === "wrong" || wordState === "timeout") && (
            <motion.div className="mt-3" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <XCircle size={44} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 12px rgba(255,45,120,0.6))" }} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── LEVEL COMPLETE SCREEN ───────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "levelComplete") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 max-w-md mx-auto">
        <motion.div
          className="flex flex-col items-center gap-5 w-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <motion.div className="text-6xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: "spring" }}>
            🏆
          </motion.div>
          <p className="text-2xl font-black text-emerald-400">{t.levelComplete}</p>
          <p className="text-white/50 text-sm">{t.level} {cfg.level} — {score}/{cfg.wordCount} {t.score}</p>

          {/* Earned card */}
          {earnedCard && (
            <motion.div
              className="px-5 py-2.5 rounded-2xl border text-center"
              style={{ background: `${RARITY_COLORS[earnedCard]}15`, borderColor: `${RARITY_COLORS[earnedCard]}35` }}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-black tracking-widest" style={{ color: RARITY_COLORS[earnedCard] }}>
                {RARITY_LABELS[lang as Language]?.[earnedCard] ?? earnedCard}
              </p>
            </motion.div>
          )}

          {/* New badge */}
          {earnedBadge && (
            <motion.div
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-purple-400/30 bg-purple-500/10"
              initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="text-2xl">{BADGE_DEFS[earnedBadge].emoji}</span>
              <div>
                <p className="text-purple-300 text-xs font-black">{t.newBadge}</p>
                <p className="text-white/60 text-xs">{BADGE_DEFS[earnedBadge].name[lang as Language]}</p>
              </div>
            </motion.div>
          )}

          <motion.button
            onClick={() => { setEarnedCard(null); setEarnedBadge(null); setScreen("expedition"); }}
            className="w-full py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          >
            {t.nextLevel} →
          </motion.button>
          <MilestonePopup />
        </motion.div>
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── FAILED SCREEN ───────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "failed") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 max-w-md mx-auto">
        <motion.div
          className="flex flex-col items-center gap-5 w-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <motion.div className="text-6xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: "spring" }}>
            💀
          </motion.div>
          <p className="text-2xl font-black text-neon-pink">{t.expeditionFailed}</p>
          <p className="text-white/50 text-sm text-center">{t.failedDesc}</p>
          <p className="text-white/35 text-xs">{score}/{cfg.wordCount} — min {cfg.minCorrect}</p>

          {earnedCard && (
            <motion.div
              className="px-5 py-2.5 rounded-2xl border text-center"
              style={{ background: `${RARITY_COLORS[earnedCard]}15`, borderColor: `${RARITY_COLORS[earnedCard]}35` }}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
            >
              <p className="text-sm font-black tracking-widest" style={{ color: RARITY_COLORS[earnedCard] }}>
                {RARITY_LABELS[lang as Language]?.[earnedCard] ?? earnedCard}
              </p>
            </motion.div>
          )}

          <div className="flex flex-col gap-3 w-full">
            <motion.button
              onClick={() => startLevel(cfg.level, exped)}
              className="w-full py-3.5 rounded-2xl font-black text-sm bg-neon-pink text-white shadow-[0_0_16px_rgba(255,45,120,0.4)]"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              🔄 {t.retry}
            </motion.button>
            <motion.button
              onClick={() => setScreen("expedition")}
              className="w-full py-3.5 rounded-2xl font-bold text-sm border border-white/15 text-white/40 bg-white/5"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            >
              📍 {t.expeditionMap}
            </motion.button>
          </div>
          <MilestonePopup />
        </motion.div>
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── REWARD (Level 10 complete) ──────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "reward") {
    return (
      <RewardReveal
        rarity="legendary"
        game="wordscramble"
        score={score}
        total={cfg.wordCount}
        onDone={() => setScreen("complete")}
      />
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── COMPLETE SCREEN ─────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "complete") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 max-w-md mx-auto">
        <motion.div
          className="flex flex-col items-center gap-5 w-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <motion.div className="text-7xl" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.1, type: "spring", stiffness: 200 }}>
            🏆
          </motion.div>
          <p className="text-3xl font-black text-gold text-glow-gold text-center">{t.expeditionComplete}</p>
          <p className="text-white/50 text-sm text-center">{t.legendaryCard}</p>

          <div className="w-28 h-28">
            <AvatarCompanion {...avatarProps} mood="victory" />
          </div>

          <div className="flex gap-3 w-full">
            <motion.button
              onClick={restartExpedition}
              className="flex-1 py-3.5 rounded-2xl font-black text-sm border border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              🔄 {t.restartExpedition}
            </motion.button>
            <Link href="/" className="flex-1">
              <motion.div
                className="w-full py-3.5 rounded-2xl font-black text-sm border border-white/10 text-white/40 bg-white/5 text-center"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              >
                {t.mainMenu}
              </motion.div>
            </Link>
          </div>
          <MilestonePopup />
        </motion.div>
      </main>
    );
  }

  return null;
}
