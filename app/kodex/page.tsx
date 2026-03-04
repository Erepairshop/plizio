"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, X, RotateCcw, ChevronRight, Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";
import {
  getLevelConfig, getPuzzleForLevel, getSecretCode, getSecretCodeCount,
  getSpecialKeys, getVowels,
  LEVEL_CONFIGS, BADGE_DEFS,
  type BadgeId, type LevelConfig,
} from "@/lib/kodex-words";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores } from "@/lib/milestones";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import AvatarCompanion from "@/components/AvatarCompanion";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Screen = "expedition" | "playing" | "levelComplete" | "failed" | "complete";

type ExpeditionSave = {
  currentLevel: number;       // next level to play (1–10)
  completedLevels: number[];
  collectedLetters: string[]; // one letter per completed level 1-9
  earnedBadges: BadgeId[];    // available (not yet used) badges
  secretCodeIndex: number;    // which secret code was drawn for this expedition
};

const STORAGE_KEY = "kodex_expedition_v2";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  hu: {
    title: "KÓDEX EXPEDÍCIÓ",
    subtitle: "10 szint · Titkos kód",
    start: "Expedíció indítása",
    continueBtn: "Folytatás",
    reset: "Újrakezd",
    level: "Szint",
    lives: "Élet",
    secret: "Titkos Kód",
    secretDesc: "Fejtsd meg a végső kódot!",
    levelComplete: "Szint teljesítve!",
    newBadge: "Új power badge!",
    letterCollected: "Betű megszerzve:",
    nextLevel: "Következő szint",
    expeditionFailed: "Expedíció vége",
    failedDesc: "Az expedíció sikertelen volt. Újrakezded?",
    restartExpedition: "Újrakezd",
    expeditionComplete: "Expedíció befejezve!",
    legendaryDesc: "Megszerezted a legendás Kódex Mester kártyát!",
    mainMenu: "Főmenü",
    answer: "A megoldás:",
    perfect: "Hibátlan!",
    won: "Megfejtve!",
    lost: "Nincs több élet",
    cat: "Téma",
    badgeUse: "Használj egy badge-et (max 2/szint)",
    badgeUsed: "Badge elhasználva",
    shieldActive: "Pajzs aktív",
    badgeLimitReached: "2 badge elhasználva ebben a szintben",
    secretReveal: "Gyűjtött betűid feltárulnak...",
    secretPlay: "Fejtsd meg a maradék betűket! (3 élet)",
    exitConfirm: "Kilép az expedícióból? (A haladásod megmarad)",
    exitYes: "Igen, kilép",
    exitNo: "Maradok",
    vocalsDesc: "Vokális badge: minden magánhangzó feltárul!",
    shieldDesc: "Pajzs badge: a következő hiba nem számít!",
    explorerDesc: "Felfedező badge: a kategória neve megjelenik!",
    trackerDesc: "Nyomkövető badge: a leggyakoribb betű feltárul!",
    keyDesc: "Kulcs badge: egy véletlenszerű betű feltárul!",
    retry: "Újra próba",
    expeditionMap: "Expedíció térkép",
  },
  de: {
    title: "KÓDEX EXPEDITION",
    subtitle: "10 Stufen · Geheimcode",
    start: "Expedition starten",
    continueBtn: "Weiter",
    reset: "Neu starten",
    level: "Stufe",
    lives: "Leben",
    secret: "Geheimcode",
    secretDesc: "Entschlüssele den finalen Code!",
    levelComplete: "Stufe abgeschlossen!",
    newBadge: "Neues Power Badge!",
    letterCollected: "Buchstabe gesammelt:",
    nextLevel: "Nächste Stufe",
    expeditionFailed: "Expedition vorbei",
    failedDesc: "Die Expedition ist gescheitert. Neu starten?",
    restartExpedition: "Neu starten",
    expeditionComplete: "Expedition abgeschlossen!",
    legendaryDesc: "Du hast die legendäre Kódex Meister Karte erhalten!",
    mainMenu: "Hauptmenü",
    answer: "Die Lösung:",
    perfect: "Perfekt!",
    won: "Gelöst!",
    lost: "Kein Leben mehr",
    cat: "Thema",
    badgeUse: "Verwende ein Badge (max 2/Stufe)",
    badgeUsed: "Badge verwendet",
    shieldActive: "Schild aktiv",
    badgeLimitReached: "2 Badges in dieser Stufe verwendet",
    secretReveal: "Deine gesammelten Buchstaben erscheinen...",
    secretPlay: "Entschlüssele die restlichen Buchstaben! (3 Leben)",
    exitConfirm: "Expedition verlassen? (Fortschritt bleibt erhalten)",
    exitYes: "Ja, verlassen",
    exitNo: "Bleiben",
    vocalsDesc: "", shieldDesc: "", explorerDesc: "", trackerDesc: "", keyDesc: "",
    retry: "Nochmal versuchen",
    expeditionMap: "Expeditionskarte",
  },
  en: {
    title: "KÓDEX EXPEDITION",
    subtitle: "10 levels · Secret code",
    start: "Start Expedition",
    continueBtn: "Continue",
    reset: "Restart",
    level: "Level",
    lives: "Lives",
    secret: "Secret Code",
    secretDesc: "Crack the final code!",
    levelComplete: "Level complete!",
    newBadge: "New power badge!",
    letterCollected: "Letter collected:",
    nextLevel: "Next level",
    expeditionFailed: "Expedition over",
    failedDesc: "The expedition has failed. Restart?",
    restartExpedition: "Restart",
    expeditionComplete: "Expedition complete!",
    legendaryDesc: "You earned the legendary Kódex Master card!",
    mainMenu: "Main menu",
    answer: "The answer:",
    perfect: "Perfect!",
    won: "Solved!",
    lost: "No lives left",
    cat: "Theme",
    badgeUse: "Use a badge (max 2/level)",
    badgeUsed: "Badge used",
    shieldActive: "Shield active",
    badgeLimitReached: "2 badges used this level",
    secretReveal: "Your collected letters are being revealed...",
    secretPlay: "Crack the remaining letters! (3 lives)",
    exitConfirm: "Exit expedition? (Progress is saved)",
    exitYes: "Yes, exit",
    exitNo: "Stay",
    vocalsDesc: "", shieldDesc: "", explorerDesc: "", trackerDesc: "", keyDesc: "",
    retry: "Try Again",
    expeditionMap: "Expedition Map",
  },
  ro: {
    title: "EXPEDIȚIA KÓDEX",
    subtitle: "10 niveluri · Cod secret",
    start: "Pornește Expediția",
    continueBtn: "Continuă",
    reset: "Reîncepe",
    level: "Nivel",
    lives: "Vieți",
    secret: "Cod Secret",
    secretDesc: "Descifrea codul final!",
    levelComplete: "Nivel completat!",
    newBadge: "Badge nou!",
    letterCollected: "Literă colectată:",
    nextLevel: "Nivelul următor",
    expeditionFailed: "Expediție terminată",
    failedDesc: "Expediția a eșuat. Reîncepi?",
    restartExpedition: "Reîncepe",
    expeditionComplete: "Expediție completată!",
    legendaryDesc: "Ai câștigat cardul legendar Maestrul Kódex!",
    mainMenu: "Meniu principal",
    answer: "Răspunsul:",
    perfect: "Perfect!",
    won: "Rezolvat!",
    lost: "Fără vieți",
    cat: "Temă",
    badgeUse: "Folosește un badge (max 2/nivel)",
    badgeUsed: "Badge folosit",
    shieldActive: "Scut activ",
    badgeLimitReached: "2 badge-uri folosite în acest nivel",
    secretReveal: "Literele colectate apar...",
    secretPlay: "Descifrea literele rămase! (3 vieți)",
    exitConfirm: "Ieși din expediție? (Progresul se salvează)",
    exitYes: "Da, ieși",
    exitNo: "Rămân",
    vocalsDesc: "", shieldDesc: "", explorerDesc: "", trackerDesc: "", keyDesc: "",
    retry: "Încearcă din nou",
    expeditionMap: "Hartă expediție",
  },
};

const RARITY_COLORS: Record<CardRarity, string> = {
  legendary: "#B44DFF", gold: "#FFD700", silver: "#C0C0C0", bronze: "#CD7F32",
};
const RARITY_LABELS: Record<Language, Record<CardRarity, string>> = {
  hu: { legendary: "Legendás", gold: "Arany",    silver: "Ezüst",  bronze: "Bronz"  },
  de: { legendary: "Legendär", gold: "Gold",     silver: "Silber", bronze: "Bronze" },
  en: { legendary: "Legendary",gold: "Gold",     silver: "Silver", bronze: "Bronze" },
  ro: { legendary: "Legendar", gold: "Aur",      silver: "Argint", bronze: "Bronz"  },
};

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

function freshExpedition(): ExpeditionSave {
  return {
    currentLevel: 1,
    completedLevels: [],
    collectedLetters: [],
    earnedBadges: ["vocals", "shield", "key"],
    secretCodeIndex: Math.floor(Math.random() * 5),
  };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function KodexPage() {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;

  // ── Screens ──
  const [screen, setScreen] = useState<Screen>("expedition");
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // ── Expedition state ──
  const [exped, setExped] = useState<ExpeditionSave>(freshExpedition);

  // ── Playing state ──
  const [cfg, setCfg] = useState<LevelConfig>(getLevelConfig(1));
  const [puzzle, setPuzzle] = useState("");
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrongCount, setWrongCount] = useState(0);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [shieldPending, setShieldPending] = useState(false);
  const [badgesUsedThisLevel, setBadgesUsedThisLevel] = useState(0);
  const [explorerRevealed, setExplorerRevealed] = useState(false);

  // ── Level 10 secret code animation ──
  const [secretPhase, setSecretPhase] = useState<"animating" | "playing">("playing");
  const [animCount, setAnimCount] = useState(0);
  const animTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Level complete data ──
  const [completeBadge, setCompleteBadge] = useState<BadgeId | null>(null);
  const [completeLetter, setCompleteLetter] = useState<string>("");
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);

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
  const [jumpTrigger,   setJumpTrigger]        = useState<{ reaction: "happy" | "victory" | null; timestamp: number } | undefined>(undefined);

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

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed: ExpeditionSave = JSON.parse(saved);
        // Migration: starter badges for fresh expeditions
        if (parsed.earnedBadges.length === 0 && parsed.completedLevels.length === 0) {
          parsed.earnedBadges = ["vocals", "shield", "key"];
        }
        // Migration: assign random secret code if missing
        if (parsed.secretCodeIndex === undefined) {
          parsed.secretCodeIndex = Math.floor(Math.random() * getSecretCodeCount(lang));
        }
        setExped(parsed);
      } catch { setExped(freshExpedition()); }
    }
  }, []);

  const saveExped = useCallback((e: ExpeditionSave) => {
    setExped(e);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(e));
  }, []);

  // ── Start a level ──
  const startLevel = useCallback((levelNum: number, currentExped: ExpeditionSave) => {
    const levelCfg = getLevelConfig(levelNum);
    setCfg(levelCfg);
    setWrongCount(0);
    setGameState("playing");
    setShieldPending(false);
    setBadgesUsedThisLevel(0);
    setExplorerRevealed(false);
    setJumpTrigger(undefined);

    if (levelCfg.type === "secretcode") {
      // Level 10: initialize with collected letters pre-guessed
      const secretData = getSecretCode(lang, exped.secretCodeIndex);
      setPuzzle(secretData.text);
      // Start animation phase
      setAnimCount(0);
      setSecretPhase("animating");
      setGuessed(new Set<string>());
      setScreen("playing");
    } else {
      const p = getPuzzleForLevel(lang, levelNum);
      setPuzzle(p);
      setGuessed(new Set<string>());
      setSecretPhase("playing");
      setScreen("playing");
    }
  }, [lang]);

  // Secret code animation: reveal letters one by one
  useEffect(() => {
    if (secretPhase !== "animating" || cfg.type !== "secretcode") return;
    const secretData = getSecretCode(lang, exped.secretCodeIndex);
    const letters = exped.collectedLetters;
    if (animCount >= letters.length) {
      // Animation done — seed guessed letters
      setGuessed(new Set(letters));
      setSecretPhase("playing");
      return;
    }
    animTimer.current = setTimeout(() => {
      setAnimCount(c => c + 1);
    }, 350);
    return () => { if (animTimer.current) clearTimeout(animTimer.current); };
  }, [secretPhase, animCount, cfg.type, exped.collectedLetters, lang]);

  // ── Guess handler ──
  const handleGuess = useCallback((letter: string) => {
    const upper = letter.toUpperCase();
    if (gameState !== "playing" || guessed.has(upper) || secretPhase === "animating") return;

    const newGuessed = new Set(guessed);
    newGuessed.add(upper);
    setGuessed(newGuessed);

    if (puzzle.includes(upper)) {
      const allRevealed = [...puzzle].every(l => l === " " || newGuessed.has(l));
      if (allRevealed) {
        const streak = updateStreak();
        const maxLives = cfg.lives;
        const score = Math.max(0, maxLives - wrongCount);
        incrementTotalGames();
        if (wrongCount === 0) incrementPerfectScores();
        // Legendary card ONLY for level 10 (secret code) completion
        if (cfg.type === "secretcode") {
          saveCard({ id: generateCardId(), game: "kodex", theme: cfg.theme.key, rarity: "legendary", score, total: maxLives, date: new Date().toISOString() });
          setEarnedCard("legendary");
        } else {
          // Levels 1-9: bronze/silver/gold only (legendary reserved for level 10)
          const raw = calculateRarity(score, maxLives, streak);
          const rarity: CardRarity = raw === "legendary" ? "gold" : raw;
          saveCard({ id: generateCardId(), game: "kodex", theme: cfg.theme.key, rarity, score, total: maxLives, date: new Date().toISOString() });
          setEarnedCard(rarity);
        }
        setGameState("won");
        setJumpTrigger({ reaction: "victory", timestamp: Date.now() });
      } else {
        setJumpTrigger({ reaction: "happy", timestamp: Date.now() });
      }
    } else {
      if (shieldPending) {
        // Shield absorbs this wrong guess
        setShieldPending(false);
      } else {
        const nw = wrongCount + 1;
        setWrongCount(nw);
        if (nw >= cfg.lives) {
          incrementTotalGames();
          setGameState("lost");
        }
      }
    }
  }, [gameState, guessed, puzzle, cfg, wrongCount, shieldPending, secretPhase]);

  // Keyboard event handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length === 1 && /[a-zA-ZÁÉÍÓÖŐÚÜŰáéíóöőúüűÄÖÜäöüĂÂÎȘȚăâîșț]/.test(e.key)) {
        handleGuess(e.key);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleGuess]);

  // ── Badge usage ──
  const useBadge = useCallback((badgeId: BadgeId) => {
    if (badgesUsedThisLevel >= 2 || gameState !== "playing") return;

    const newExped = { ...exped, earnedBadges: [...exped.earnedBadges] };
    const idx = newExped.earnedBadges.indexOf(badgeId);
    if (idx === -1) return;
    newExped.earnedBadges.splice(idx, 1);
    saveExped(newExped);
    setBadgesUsedThisLevel(n => n + 1);

    if (badgeId === "vocals") {
      const vowels = getVowels(lang);
      const newGuessed = new Set(guessed);
      vowels.forEach(v => { if (puzzle.includes(v)) newGuessed.add(v); });
      setGuessed(newGuessed);
      const allRevealed = [...puzzle].every(l => l === " " || newGuessed.has(l));
      if (allRevealed) {
        const streak = updateStreak();
        const maxLives = cfg.lives;
        const score = Math.max(0, maxLives - wrongCount);
        incrementTotalGames();
        if (wrongCount === 0) incrementPerfectScores();
        if (cfg.type === "secretcode") {
          saveCard({ id: generateCardId(), game: "kodex", theme: cfg.theme.key, rarity: "legendary", score, total: maxLives, date: new Date().toISOString() });
          setEarnedCard("legendary");
        } else {
          const raw = calculateRarity(score, maxLives, streak);
          const rarity: CardRarity = raw === "legendary" ? "gold" : raw;
          saveCard({ id: generateCardId(), game: "kodex", theme: cfg.theme.key, rarity, score, total: maxLives, date: new Date().toISOString() });
          setEarnedCard(rarity);
        }
        setGameState("won");
        setJumpTrigger({ reaction: "victory", timestamp: Date.now() });
      }
    } else if (badgeId === "shield") {
      setShieldPending(true);
    } else if (badgeId === "explorer") {
      setExplorerRevealed(true);
    } else if (badgeId === "tracker") {
      // Reveal most frequent unguessed letter
      const freq: Record<string, number> = {};
      for (const c of puzzle) {
        if (c !== " " && !guessed.has(c)) freq[c] = (freq[c] ?? 0) + 1;
      }
      const best = Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0];
      if (best) handleGuess(best);
    } else if (badgeId === "key") {
      // Reveal one random unguessed letter
      const unknown = [...new Set([...puzzle].filter(c => c !== " " && !guessed.has(c)))];
      if (unknown.length) handleGuess(unknown[Math.floor(Math.random() * unknown.length)]);
    }
  }, [badgesUsedThisLevel, gameState, exped, saveExped, guessed, puzzle, lang, cfg, handleGuess]);

  // ── Level won → level complete screen ──
  const handleLevelWon = useCallback(() => {
    const levelNum = cfg.levelNum;
    const secretData = getSecretCode(lang, exped.secretCodeIndex);
    const collectedLetter = levelNum <= 9 ? (secretData.revealLetters[levelNum - 1] ?? "") : "";
    const badge = cfg.badgeReward ?? null;

    const alreadyCompleted = exped.completedLevels.includes(levelNum);
    const newExped: ExpeditionSave = {
      ...exped,
      currentLevel: Math.max(exped.currentLevel, levelNum + 1),
      completedLevels: [...new Set([...exped.completedLevels, levelNum])],
      collectedLetters: (collectedLetter && !alreadyCompleted) ? [...exped.collectedLetters, collectedLetter] : exped.collectedLetters,
      earnedBadges: (badge && !alreadyCompleted) ? [...exped.earnedBadges, badge] : exped.earnedBadges,
    };
    saveExped(newExped);

    setCompleteBadge(badge);
    setCompleteLetter(collectedLetter);

    if (levelNum === 10) {
      setScreen("complete");
    } else {
      setScreen("levelComplete");
    }
  }, [cfg, lang, exped, saveExped]);

  // ── Level lost → expedition failed ──
  const handleLevelLost = useCallback(() => {
    setScreen("failed");
  }, []);

  // ── Restart expedition ──
  const restartExpedition = useCallback(() => {
    const fresh = freshExpedition();
    saveExped(fresh);
    setScreen("expedition");
  }, [saveExped]);

  // Special keys for language
  const specialKeys = getSpecialKeys(lang);

  // Key color
  const keyBg = (key: string) => {
    const upper = key.toUpperCase();
    if (!guessed.has(upper)) return "bg-white/10 hover:bg-white/20 active:scale-90 text-white";
    if (puzzle.includes(upper)) return "bg-green-500/20 border border-green-500/40 text-green-400";
    return "bg-white/4 border border-white/8 text-white/20";
  };

  const avatarMood = (() => {
    if (gameState === "won")  return "victory"     as const;
    if (gameState === "lost") return "disappointed" as const;
    if (wrongCount === 0)     return "focused"      as const;
    if (wrongCount <= 2)      return "surprised"    as const;
    if (wrongCount <= 4)      return "confused"     as const;
    return "disappointed" as const;
  })();

  const avatarProps = {
    mood: avatarMood, fixed: false, gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape,
    activeGlasses, activeGloves, activeHat, activeTrail, jumpTrigger,
  };

  // ── Word display component ──
  const WordDisplay = ({ text, guessedSet }: { text: string; guessedSet: Set<string> }) => {
    const noSpaces = text.replace(/ /g, "");
    const len = noSpaces.length;
    const tileW = len > 22 ? 15 : len > 16 ? 19 : len > 12 ? 23 : 28;
    const textSize = len > 22 ? "text-xs" : len > 16 ? "text-sm" : len > 12 ? "text-base" : "text-xl";
    return (
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 w-full px-2">
        {text.split(" ").map((word, wi) => (
          <div key={wi} className="flex gap-[3px]">
            {[...word].map((ch, ci) => (
              <div key={ci} className="flex flex-col items-center gap-1">
                <AnimatePresence mode="wait">
                  {guessedSet.has(ch) ? (
                    <motion.span
                      key="letter"
                      className={`${textSize} font-black text-white leading-none`}
                      style={{ minWidth: tileW, textAlign: "center" }}
                      initial={{ scale: 0, y: -8 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {ch}
                    </motion.span>
                  ) : (
                    <span
                      key="blank"
                      className={`${textSize} font-black leading-none`}
                      style={{ minWidth: tileW, visibility: "hidden" }}
                    >A</span>
                  )}
                </AnimatePresence>
                <div style={{
                  width: tileW, height: 2, borderRadius: 9999,
                  background: guessedSet.has(ch) ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.30)",
                  boxShadow: guessedSet.has(ch) ? "0 0 6px rgba(255,255,255,0.4)" : "none",
                }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // ── Badge tray ──
  const BadgeTray = () => {
    const available = exped.earnedBadges;
    if (available.length === 0 && !shieldPending) return null;
    const limitReached = badgesUsedThisLevel >= 2;
    return (
      <div className="flex items-center justify-center gap-2 py-1">
        {shieldPending && (
          <motion.div
            className="px-3 py-1.5 rounded-xl border border-blue-400/40 bg-blue-400/10 flex items-center gap-1.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
          >
            <span className="text-lg">🛡️</span>
            <span className="text-blue-300 text-xs font-bold">{t.shieldActive}</span>
          </motion.div>
        )}
        {available.map((badgeId, i) => {
          const def = BADGE_DEFS[badgeId];
          return (
            <motion.button
              key={`${badgeId}-${i}`}
              onClick={() => useBadge(badgeId)}
              disabled={limitReached || gameState !== "playing"}
              className={`flex flex-col items-center gap-0.5 p-2 rounded-xl border transition-all ${
                limitReached || gameState !== "playing"
                  ? "border-white/5 bg-white/3 opacity-40"
                  : "border-purple-400/40 bg-purple-500/10 hover:bg-purple-500/20 active:scale-95"
              }`}
              whileTap={!limitReached ? { scale: 0.9 } : undefined}
              title={def.desc[lang as keyof typeof def.desc] ?? ""}
            >
              <span className="text-xl leading-none">{def.emoji}</span>
              <span className="text-[9px] font-bold text-purple-300 leading-none">
                {def.name[lang as keyof typeof def.name]}
              </span>
            </motion.button>
          );
        })}
        {limitReached && available.length > 0 && (
          <span className="text-white/30 text-[10px] text-center px-2">{t.badgeLimitReached}</span>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════
  // ── EXPEDITION HOME SCREEN ──────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "expedition") {
    const hasProgress = exped.completedLevels.length > 0;
    const secretData = getSecretCode(lang, exped.secretCodeIndex);
    return (
      <div className="flex flex-col min-h-screen pb-24">

        {/* Header */}
        <div className="flex items-center justify-between p-4 pt-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Home size={20} /><span className="text-sm font-bold">{t.mainMenu}</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B00] text-lg">🔤</span>
            <span className="text-lg font-black tracking-wider text-[#FF6B00]">{t.title}</span>
          </div>
          <div className="w-24 flex justify-end">
            {hasProgress && (
              <button
                onClick={restartExpedition}
                className="text-white/25 text-xs flex items-center gap-1 hover:text-white/50 transition-colors"
              >
                <RotateCcw size={12} />{t.reset}
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-white/40 text-sm mb-6 px-4">{t.subtitle}</p>

        {/* Progress bar */}
        <div className="px-6 mb-5">
          <div className="flex justify-between text-xs text-white/40 mb-1">
            <span>{exped.completedLevels.length}/10 {t.level}</span>
            <span>{exped.collectedLetters.length}/9 🔐</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(to right, #FF6B00, #FF2D78)" }}
              initial={false}
              animate={{ width: `${(exped.completedLevels.length / 10) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Secret code preview */}
        <div className="px-4 mb-5 max-w-sm mx-auto w-full">
          <div className="p-4 rounded-2xl border border-[#FF6B0020] bg-[#FF6B0008]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">🔐</span>
              <span className="text-[#FF6B00] text-xs font-bold tracking-wider uppercase">{t.secret}</span>
              <span className="ml-auto text-white/30 text-[10px]">{t.secretDesc}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {[...secretData.text].map((ch, i) =>
                ch === " " ? (
                  <div key={i} className="w-3" />
                ) : (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span className={`font-black text-sm w-5 text-center ${
                      exped.collectedLetters.includes(ch) ? "text-[#FF6B00]" : "text-transparent"
                    }`}>{ch}</span>
                    <div className={`w-5 h-[2px] rounded-full ${
                      exped.collectedLetters.includes(ch) ? "bg-[#FF6B00]/70" : "bg-white/20"
                    }`} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Level list */}
        <div className="px-4 flex flex-col gap-3 max-w-sm mx-auto w-full">
          {LEVEL_CONFIGS.map((lc, i) => {
            const done = exped.completedLevels.includes(lc.levelNum);
            const current = lc.levelNum === exped.currentLevel;
            const locked = lc.levelNum > exped.currentLevel;
            const isSecret = lc.type === "secretcode";
            const letter = done && lc.levelNum <= 9 ? secretData.revealLetters[lc.levelNum - 1] : null;
            return (
              <motion.div
                key={lc.levelNum}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  done
                    ? "bg-[#1a0a00] border-[#FF6B0040]"
                    : isSecret && current
                    ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current
                    ? "bg-[#1a0c00] border-[#FF6B00] shadow-[0_0_20px_#FF6B0033]"
                    : "bg-[#0f0f22] border-white/10 opacity-60"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                  done
                    ? "bg-[#FF6B0020] text-[#FF6B00]"
                    : isSecret && current
                    ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current
                    ? "bg-[#FF6B0020] text-[#FF6B00]"
                    : "bg-white/5 text-white/30"
                }`}>
                  {done ? "✓" : locked ? "🔒" : isSecret ? "🔐" : lc.theme.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-black text-sm ${isSecret ? "text-[#B44DFF]" : "text-white"}`}>
                      {isSecret ? t.secret : `${t.level} ${lc.levelNum}`}
                    </span>
                    {lc.badgeReward && !done && (
                      <span className="text-xs opacity-60">{BADGE_DEFS[lc.badgeReward].emoji}</span>
                    )}
                    {done && <span className="text-[#FF6B00] text-xs">✓</span>}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">
                    {isSecret ? t.secretDesc : lc.theme.label[lang as keyof typeof lc.theme.label] ?? lc.theme.label.en}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {Array.from({ length: lc.lives }).map((_, idx) => (
                      <span key={idx} className="text-[10px]">❤️</span>
                    ))}
                    {letter && (
                      <span className="ml-1 px-1.5 py-0.5 rounded-md bg-[#FF6B0020] border border-[#FF6B0040] text-[#FF6B00] font-black text-xs">{letter}</span>
                    )}
                  </div>
                </div>

                {!locked && (
                  <button
                    onClick={() => startLevel(lc.levelNum, exped)}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                      isSecret
                        ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current
                        ? "bg-[#FF6B00] text-white shadow-[0_0_12px_#FF6B0066]"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {done ? "↩" : <ChevronRight size={18} />}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Badge inventory */}
        {exped.earnedBadges.length > 0 && (
          <div className="mt-8 px-4 max-w-sm mx-auto w-full">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/40 text-xs font-bold mb-3 tracking-wider">BADGE KÉSZLET</p>
              <div className="flex gap-2 flex-wrap">
                {exped.earnedBadges.map((bid, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF6B0010] border border-[#FF6B0030]">
                    <span className="text-base">{BADGE_DEFS[bid].emoji}</span>
                    <span className="text-[#FF6B00] text-xs font-bold">{BADGE_DEFS[bid].name[lang as keyof typeof BADGE_DEFS[typeof bid]["name"]]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <motion.div className="text-6xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: "spring" }}>
            🏆
          </motion.div>
          <p className="text-2xl font-black text-green-400">{t.levelComplete}</p>

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
          {completeBadge && (
            <motion.div
              className="w-full p-4 rounded-2xl border border-purple-400/40 bg-purple-500/10 text-center"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
            >
              <p className="text-purple-300 text-xs font-bold tracking-wider mb-2">{t.newBadge}</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">{BADGE_DEFS[completeBadge].emoji}</span>
                <div className="text-left">
                  <p className="text-white font-black text-base">{BADGE_DEFS[completeBadge].name[lang as keyof typeof BADGE_DEFS[typeof completeBadge]["name"]]}</p>
                  <p className="text-white/40 text-xs">{BADGE_DEFS[completeBadge].desc[lang as keyof typeof BADGE_DEFS[typeof completeBadge]["desc"]]}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Collected letter */}
          {completeLetter && (
            <motion.div
              className="w-full p-3 rounded-2xl border border-purple-400/30 bg-purple-500/8 flex items-center justify-between"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
            >
              <div>
                <p className="text-white/40 text-xs">{t.letterCollected}</p>
                <p className="text-purple-300 text-xs mt-0.5">Titkos kódhoz hozzáadva</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                <span className="text-2xl font-black text-purple-300">{completeLetter}</span>
              </div>
            </motion.div>
          )}

          <motion.button
            onClick={() => startLevel(exped.currentLevel, exped)}
            className="w-full py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
          >
            {exped.currentLevel === 10 ? "🔐 " : ""}{t.nextLevel} →
          </motion.button>

          <motion.button
            onClick={() => setScreen("expedition")}
            className="text-white/30 text-sm"
            whileTap={{ scale: 0.95 }}
          >
            Expedíció áttekintése
          </motion.button>
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
          className="flex flex-col items-center gap-5 w-full max-w-xs"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div className="text-6xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }}>
            🌊
          </motion.div>
          <p className="text-2xl font-black text-red-400">{t.expeditionFailed}</p>
          <p className="text-white/40 text-sm text-center">{t.failedDesc}</p>
          <p className="text-white/25 text-xs">
            {t.answer} <span className="text-white/60 font-bold">{puzzle}</span>
          </p>
          <div className="flex flex-col gap-3 w-full">
            <motion.button
              onClick={() => startLevel(cfg.levelNum, exped)}
              className="w-full py-4 rounded-2xl font-black text-white text-base shadow-[0_0_16px_rgba(255,107,107,0.4)]"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8C00)" }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            >
              🔄 {t.retry}
            </motion.button>
            <motion.button
              onClick={() => setScreen("expedition")}
              className="w-full py-3 rounded-2xl font-bold text-sm border border-white/15 text-white/40 bg-white/5"
              whileTap={{ scale: 0.95 }}
            >
              📍 {t.expeditionMap}
            </motion.button>
          </div>
        </motion.div>
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── COMPLETE SCREEN (Legendary) ─────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  if (screen === "complete") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 max-w-md mx-auto">
        <motion.div
          className="flex flex-col items-center gap-6 w-full max-w-xs"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          {/* Animated stars */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed text-2xl pointer-events-none"
              style={{ left: `${15 + i * 14}%`, top: "10%" }}
              animate={{ y: [-20, -60, -20], opacity: [0, 1, 0] }}
              transition={{ delay: i * 0.2, duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              ⭐
            </motion.div>
          ))}

          <motion.div className="text-7xl" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}>
            🏅
          </motion.div>

          <div className="text-center">
            <p className="text-3xl font-black text-yellow-400">{t.expeditionComplete}</p>
            <p className="text-white/50 text-sm mt-1">{t.legendaryDesc}</p>
          </div>

          {/* Legendary card */}
          <motion.div
            className="w-full p-6 rounded-3xl border text-center"
            style={{
              background: "linear-gradient(135deg, rgba(180,77,255,0.15), rgba(255,215,0,0.1))",
              borderColor: "#B44DFF55",
              boxShadow: "0 0 40px rgba(180,77,255,0.3)",
            }}
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <p className="text-4xl mb-3">🔐</p>
            <p className="text-xl font-black text-yellow-400 tracking-wider">KÓDEX MESTER</p>
            <p className="text-purple-300 text-sm mt-1">Legendary</p>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-white/30 text-xs">10/10 szint teljesítve</p>
            </div>
          </motion.div>

          <motion.button
            onClick={() => { restartExpedition(); }}
            className="w-full py-3 rounded-2xl font-bold text-sm border border-white/15 text-white/60"
            whileTap={{ scale: 0.95 }}
          >
            {t.reset}
          </motion.button>
          <motion.button
            onClick={() => router.push("/")}
            className="text-white/30 text-sm"
            whileTap={{ scale: 0.95 }}
          >
            {t.mainMenu}
          </motion.button>
        </motion.div>
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // ── PLAYING SCREEN ──────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════
  const MAX_WRONG = cfg.lives;
  const displayCatEmoji = cfg.showCatEmoji || explorerRevealed;
  const displayCatName  = cfg.showCatName  || explorerRevealed;

  // For secret code: show collected letters during animation phase
  const secretData = cfg.type === "secretcode" ? getSecretCode(lang, exped.secretCodeIndex) : null;
  const displayGuessed = cfg.type === "secretcode" && secretPhase === "animating"
    ? new Set(exped.collectedLetters.slice(0, animCount))
    : guessed;

  return (
    <main className="min-h-screen flex flex-col px-4 pt-3 pb-2 max-w-lg mx-auto select-none md:max-w-2xl">

      {/* Exit confirm overlay */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-6"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-xs flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5"
              initial={{ scale: 0.85 }} animate={{ scale: 1 }}
            >
              <p className="text-white text-base font-bold text-center">{t.exitConfirm}</p>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => { setShowExitConfirm(false); setScreen("expedition"); }}
                  className="flex-1 py-3 rounded-xl bg-white/8 border border-white/10 text-white/60 font-bold text-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  {t.exitYes}
                </motion.button>
                <motion.button
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.exitNo}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-3">
        <motion.button
          onClick={() => setShowExitConfirm(true)}
          className="p-2 rounded-xl bg-white/5 border border-white/10"
          whileTap={{ scale: 0.9 }}
        >
          <X size={16} className="text-white/50" />
        </motion.button>

        {/* Level progress dots */}
        <div className="flex items-center gap-1.5">
          {LEVEL_CONFIGS.map(lc => (
            <div
              key={lc.levelNum}
              className="rounded-full transition-all"
              style={{
                width: lc.levelNum === cfg.levelNum ? 12 : 6,
                height: lc.levelNum === cfg.levelNum ? 12 : 6,
                background: exped.completedLevels.includes(lc.levelNum)
                  ? "#22C55E"
                  : lc.levelNum === cfg.levelNum
                  ? "#FFD700"
                  : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        {/* Lives */}
        <div className="flex gap-0.5">
          {Array.from({ length: MAX_WRONG }).map((_, i) => (
            <motion.span
              key={i}
              className="text-base leading-none"
              animate={{
                opacity: i < MAX_WRONG - wrongCount ? 1 : 0.12,
                scale: i === MAX_WRONG - wrongCount - 1 && wrongCount > 0 ? [1, 1.35, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              ❤️
            </motion.span>
          ))}
          {shieldPending && <span className="text-base leading-none">🛡️</span>}
        </div>
      </div>

      {/* ── Level info (visible) ── */}
      <div className="flex items-center gap-2.5 mb-3 px-1">
        <span className="text-xs font-bold tracking-widest text-white/50 shrink-0">
          {t.level} {cfg.levelNum}/10
        </span>
        <div className="w-px h-3 bg-white/15 shrink-0" />
        {displayCatEmoji && <span className="text-xl leading-none shrink-0">{cfg.theme.emoji}</span>}
        {displayCatName ? (
          <span className="text-white font-bold text-sm tracking-wide">
            {cfg.theme.label[lang as keyof typeof cfg.theme.label] ?? cfg.theme.label.en}
          </span>
        ) : displayCatEmoji ? (
          <span className="text-white/40 text-sm">{t.cat}?</span>
        ) : (
          <span className="text-white/25 text-sm">???</span>
        )}
      </div>

      {/* ── Secret code labels ── */}
      {cfg.type === "secretcode" && secretPhase === "animating" && (
        <motion.p
          className="text-center text-purple-300 text-sm font-bold mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          {t.secretReveal}
        </motion.p>
      )}
      {cfg.type === "secretcode" && secretPhase === "playing" && (
        <p className="text-center text-white/35 text-xs mb-2">{t.secretPlay}</p>
      )}

      {/* ── Word display — full width ── */}
      <div className="w-full flex items-center justify-center py-4 mb-1" style={{ minHeight: 96 }}>
        <WordDisplay text={puzzle} guessedSet={displayGuessed} />
      </div>

      {/* ── Avatar + Badge tray row ── */}
      <div className="flex items-end gap-3 mb-2 px-1">
        {/* Avatar with water-sink animation */}
        <div className="relative shrink-0 overflow-hidden rounded-2xl" style={{ width: 72, height: 72 }}>
          <motion.div
            className="absolute inset-0"
            animate={{ y: gameState === "lost" ? 52 : (wrongCount / MAX_WRONG) * 28 }}
            transition={{ duration: gameState === "lost" ? 0.35 : 0.65, ease: "easeOut" }}
          >
            <AvatarCompanion {...avatarProps} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            animate={{ height: gameState === "lost" ? "100%" : `${(wrongCount / MAX_WRONG) * 85}%` }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            style={{ zIndex: 5 }}
          >
            <motion.div
              className="absolute -top-2 left-0 right-0 h-4 pointer-events-none"
              animate={{ scaleX: [1, 1.05, 0.97, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ background: "radial-gradient(ellipse 90% 100% at 50% 100%, rgba(96,210,255,0.55) 0%, transparent 100%)", borderRadius: "50%" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(56,185,255,0.20), rgba(14,70,200,0.50))" }} />
          </motion.div>
        </div>
        {/* Badge tray fills the rest */}
        <div className="flex-1 flex items-center pb-1">
          <BadgeTray />
        </div>
      </div>

      {/* ── Keyboard ── */}
      <div className="flex flex-col items-center gap-1.5 mt-auto">
        {KEYBOARD_ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleGuess(key)}
                disabled={guessed.has(key) || gameState !== "playing" || secretPhase === "animating"}
                className={`w-8 h-10 md:w-9 md:h-11 rounded-lg text-sm font-black transition-all ${keyBg(key)}`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        {specialKeys.length > 0 && (
          <div className="flex gap-1 flex-wrap justify-center mt-0.5 max-w-xs">
            {specialKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleGuess(key)}
                disabled={guessed.has(key.toUpperCase()) || gameState !== "playing" || secretPhase === "animating"}
                className={`w-10 h-9 rounded-lg text-xs font-black transition-all ${keyBg(key)}`}
              >
                {key}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Win / Lose overlay */}
      <AnimatePresence>
        {gameState !== "playing" && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center px-6 z-40"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <motion.div
              className="flex flex-col items-center gap-4 w-full max-w-xs"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            >
              <motion.div className="text-6xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring" }}>
                {gameState === "won" ? "🏆" : "🌊"}
              </motion.div>

              <div className="text-center">
                <p className="text-2xl font-black mb-1" style={{ color: gameState === "won" ? "#00FF88" : "#FF4444" }}>
                  {gameState === "won" ? t.won : t.lost}
                </p>
                {wrongCount === 0 && gameState === "won" && (
                  <p className="text-yellow-400 text-sm font-bold">⭐ {t.perfect}</p>
                )}
                {gameState === "lost" && (
                  <p className="text-white/40 text-sm mt-1">
                    {t.answer} <span className="text-white/70 font-bold">{puzzle}</span>
                  </p>
                )}
              </div>

              {earnedCard && gameState === "won" && (
                <motion.div
                  className="px-5 py-2.5 rounded-2xl border text-center"
                  style={{ background: `${RARITY_COLORS[earnedCard]}15`, borderColor: `${RARITY_COLORS[earnedCard]}35` }}
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
                >
                  <p className="text-sm font-black tracking-widest" style={{ color: RARITY_COLORS[earnedCard] }}>
                    {RARITY_LABELS[lang as Language]?.[earnedCard] ?? earnedCard}
                  </p>
                </motion.div>
              )}

              <div className="flex gap-3 w-full mt-1">
                {gameState === "won" ? (
                  <motion.button
                    onClick={handleLevelWon}
                    className="flex-1 py-3 rounded-xl font-bold text-sm text-black"
                    style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cfg.levelNum === 10 ? "🏅 " : ""}
                    {cfg.levelNum < 10 ? t.nextLevel : t.expeditionComplete}
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={handleLevelLost}
                    className="flex-1 py-3 rounded-xl font-bold text-sm text-black"
                    style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8C00)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.restartExpedition}
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
