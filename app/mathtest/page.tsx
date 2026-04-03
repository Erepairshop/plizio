"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Calculator, ArrowLeft, Check, X as XIcon,
  RotateCcw, Home, BookOpen, Sparkles, Clock, Download,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import {
  generateTest,
  generateKlassenarbeit,
  generateKlassenarbeitFromBank,
  generateRealisticKlassenarbeit,
  calculateGradeResult,
  calculateKlassenarbeitResult,
  calculateRealisticKlassenarbeitResult,
  getMathGrade,
  saveMathGrade,
  updateMathStats,
  getPeriod,
  getPeriodLabel,
  type MathQuestion,
  type GradeResult,
  type KlassenarbeitResult,
  type GroupedTask,
  type RealisticKlassenarbeit,
  getENThemes,
  getDEThemes,
  getROThemes,
  getHUThemes,
} from "@/lib/mathCurriculum";
import {
  generateTest as generateThemeBasedTest,
  getAvailableThemes,
  type Test as ThemeBasedTest,
} from "@/lib/mathTestGenerator";
import HierarchicalThemeSelector, { type Theme as ThemeSelectorTheme } from "@/components/HierarchicalThemeSelector";
import { fetchCurriculum, type CurriculumData } from "@/lib/curriculum/curriculumApi";

import { mapCurriculumToThemes } from "@/components/math-test/themeMapper";
import { Scene3D } from "@/components/math-test/Scene3D";
import { GradeScene } from "@/components/math-test/GradeScene";
import { getStreak, updateStreak } from "@/components/math-test/streakUtils";

// ─── MAIN COMPONENT ─────────────────────────────

type GameState = "country-select" | "grade-select" | "theme-select" | "playing" | "grading" | "result" | "reward";
type TestType = "klassenarbeit" | null;

import { CountrySelect } from "@/components/math-test/CountrySelect";
import { GradeSelect } from "@/components/math-test/GradeSelect";
import { ThemeSelect } from "@/components/math-test/ThemeSelect";

export default function MathTestPage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>("country-select");
  const [country, setCountry] = useState<CountryConfig | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [previousGrade, setPreviousGrade] = useState<number | null>(null);
  const [testType, setTestType] = useState<TestType>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [generatingTest, setGeneratingTest] = useState(false);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | string | null)[]>([]);
  const [gradingIndex, setGradingIndex] = useState(-1);
  const [showTeacherNote, setShowTeacherNote] = useState(false);
  const [teacherNoteScore, setTeacherNoteScore] = useState(0);
  const [gradeResult, setGradeResult] = useState<GradeResult | null>(null);
  const [cardRarity, setCardRarity] = useState<CardRarity | null>(null);
  const [saved, setSaved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [klassenarbeitResult, setKlassenarbeitResult] = useState<KlassenarbeitResult | null>(null);

  // ─── Realistic Klassenarbeit (Grouped Tasks) ───────────────────
  const [realisticKlassenarbeit, setRealisticKlassenarbeit] = useState<RealisticKlassenarbeit | null>(null);
  const [groupedTaskAnswers, setGroupedTaskAnswers] = useState<Record<string, string | number>>({});

  // ─── School Test (iskolai dolgozat stílus, grade 1-4) ────────────
  const [schoolTasks, setSchoolTasks] = useState<SchoolTaskBlockType[]>([]);
  const [schoolAnswers, setSchoolAnswers] = useState<SchoolTaskAnswers>({});
  const [schoolResult, setSchoolResult] = useState<{ earned: number; total: number; percentage: number } | null>(null);

  // ─── Klassenarbeit timer (30 minutes) ───────────────────────
  const [klassenarbeitStartTime, setKlassenarbeitStartTime] = useState<number | null>(null);
  const [klassenarbeitTimeLeft, setKlassenarbeitTimeLeft] = useState(1800); // 30 * 60 = 1800 seconds
  const klassenarbeitTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const klassenarbeitMaxTimeRef = useRef(40 * 60); // default 40 minutes, updated dynamically

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Supabase integration state ───────────────────────
  const { user } = useAuth();
  const useSupabase = isSupabaseConfigured() && !!user;
  const [testSession, setTestSession] = useState<TestSession | null>(null);
  const [serverResult, setServerResult] = useState<TestResultFromServer | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // ─── Supabase Curriculum state ───────────────────────
  const [supabaseCurriculum, setSupabaseCurriculum] = useState<CurriculumData | null>(null);
  const [curriculumLoading, setCurriculumLoading] = useState(false);
  const answerTimesRef = useRef<number[]>([]); // per-question time tracking
  const lastAnswerTimeRef = useRef<number>(0);

  // ─── Avatar Companion State ───────────────────────────────────
  const [avatarMood, setAvatarMood] = useState<'idle' | 'focused' | 'happy' | 'disappointed' | 'victory'>('idle');
  const avatarMoodTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [avatarGender, setAvatarGender] = useState<'girl' | 'boy'>('girl');
  const [avatarSkin, setAvatarSkin] = useState<ReturnType<typeof getSkinDef> | null>(null);
  const [avatarFace, setAvatarFace] = useState<ReturnType<typeof getFaceDef> | null>(null);
  const [avatarTop, setAvatarTop] = useState<ReturnType<typeof getTopDef> | null>(null);
  const [avatarBottom, setAvatarBottom] = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [avatarShoe, setAvatarShoe] = useState<ReturnType<typeof getShoeDef> | null>(null);
  const [avatarCape, setAvatarCape] = useState<ReturnType<typeof getCapeDef> | null>(null);
  const [avatarGlasses, setAvatarGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [avatarGloves, setAvatarGloves] = useState<ReturnType<typeof getGloveDef> | null>(null);
  const [avatarHat, setAvatarHat] = useState<ReturnType<typeof getHatDef> | null>(null);
  const [avatarTrail, setAvatarTrail] = useState<ReturnType<typeof getTrailDef> | null>(null);

  // Load all avatar customization on mount
  useEffect(() => {
    setAvatarGender(getGender());
    setAvatarSkin(getSkinDef(getActiveSkin()));
    setAvatarFace(getFaceDef(getActiveFace()));
    const topId = getActive('top'); setAvatarTop(topId ? getTopDef(topId) : null);
    const bottomId = getActive('bottom'); setAvatarBottom(bottomId ? getBottomDef(bottomId) : null);
    const shoeId = getActive('shoe'); setAvatarShoe(shoeId ? getShoeDef(shoeId) : null);
    const capeId = getActive('cape'); setAvatarCape(capeId ? getCapeDef(capeId) : null);
    const glassesId = getActive('glasses'); setAvatarGlasses(glassesId ? getGlassesDef(glassesId) : null);
    const glovesId = getActive('gloves'); setAvatarGloves(glovesId ? getGloveDef(glovesId) : null);
    const hatId = getActiveHat(); setAvatarHat(hatId ? getHatDef(hatId) : null);
    const trailId = getActiveTrail(); setAvatarTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  // Load saved country + grade on mount
  useEffect(() => {
    const LANG_TO_COUNTRY: Record<string, string> = { hu: "HU", de: "DE", en: "US", ro: "RO" };
    const langCode = LANG_TO_COUNTRY[getLanguage()] || "US";
    const savedCode = langCode;
    setCountry(getCountryByCode(savedCode));
    saveCountry(savedCode);
    setGameState("grade-select");
    const prev = getMathGrade();
    if (prev) setPreviousGrade(prev);
  }, []);


  const handleCountrySelect = (c: CountryConfig) => {
    setCountry(c);
    saveCountry(c.code);
    setGameState("grade-select");
  };

  // Ensure scroll to top when entering playing state
  useEffect(() => {
    if (gameState === "playing") {
      // Mark test as started in Supabase
      if (useSupabase && testSession) {
        startSupabaseTest(testSession.testId).catch((err) => console.error("[Supabase] startTest failed:", err));
      }
      // Scroll to top when test starts
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  }, [gameState, useSupabase, testSession]);

  // Timer during playing
  useEffect(() => {
    if (gameState === "playing") {
      timerRef.current = setInterval(() => setElapsedTime((t) => t + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // ─── Klassenarbeit Timer (30 minutes) ─────────────────────
  useEffect(() => {
    if (gameState !== "playing" || testType !== "klassenarbeit") {
      if (klassenarbeitTimerRef.current) clearInterval(klassenarbeitTimerRef.current);
      return;
    }

    // Load start time from localStorage if available (page refresh recovery)
    let startTime = klassenarbeitStartTime;
    if (!startTime) {
      const stored = localStorage.getItem("klassenarbeitStartTime");
      if (stored) {
        startTime = parseInt(stored, 10);
        setKlassenarbeitStartTime(startTime);
      }
    }

    if (!startTime) {
      startTime = Date.now();
      setKlassenarbeitStartTime(startTime);
      localStorage.setItem("klassenarbeitStartTime", startTime.toString());
    }

    // Calculate remaining time based on elapsed time since start
    const calculateTimeLeft = () => {
      const elapsed = Math.floor((Date.now() - startTime!) / 1000);
      const remaining = Math.max(0, klassenarbeitMaxTimeRef.current - elapsed);
      return remaining;
    };

    // Update time left
    const updateTimeLeft = () => {
      const remaining = calculateTimeLeft();
      setKlassenarbeitTimeLeft(remaining);

      // Auto-submit when time runs out
      if (remaining <= 0) {
        if (klassenarbeitTimerRef.current) clearInterval(klassenarbeitTimerRef.current);
        // Trigger grading flow which will auto-submit
        setGameState("grading");
        setSubmitting(true);
      }
    };

    klassenarbeitTimerRef.current = setInterval(updateTimeLeft, 1000);
    updateTimeLeft(); // Initial call to update immediately

    return () => {
      if (klassenarbeitTimerRef.current) clearInterval(klassenarbeitTimerRef.current);
    };
  }, [gameState, testType, klassenarbeitStartTime]);

  // Grading animation
  useEffect(() => {
    if (gameState !== "grading") return;

    // Handle school test grading (grade 1-4)
    if (schoolTasks.length > 0) {
      const result = gradeSchoolTest(schoolTasks, schoolAnswers);
      setSchoolResult(result);
      const roundedEarned = Math.round(result.earned * 100) / 100;
      const roundedTotal = Math.round(result.total * 100) / 100;
      const grResult = calculateGradeResult(roundedEarned, roundedTotal);
      setGradeResult(grResult);
      const pct = result.total > 0 ? Math.round((result.earned / result.total) * 100) : 0;
      // Show corrected test, then teacher note, then result — same as MCQ flow
      setTimeout(() => {
        setTeacherNoteScore(pct);
        setShowTeacherNote(true);
        setTimeout(() => {
          setShowTeacherNote(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setGameState("result");
        }, 7500);
      }, 1500);
      return;
    }

    // Handle grouped tasks grading
    if (realisticKlassenarbeit) {
      // All graded for realistic Klassenarbeit
      const kaResult = calculateRealisticKlassenarbeitResult(realisticKlassenarbeit.tasks, groupedTaskAnswers);
      setKlassenarbeitResult(kaResult);
      const gradeResult = calculateGradeResult(kaResult.totalPoints, kaResult.maxTotalPoints);
      setGradeResult(gradeResult);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setGameState("result");
      }, 600);
      return;
    }

    if (gradingIndex < questions.length) {
      const t = setTimeout(() => setGradingIndex((i) => i + 1), 900);
      return () => clearTimeout(t);
    } else {
      // All graded
      let pct = 0;
      // Only use klassenarbeit scoring if questions actually have sections
      const hasSections = questions.some(q => q.section);
      if (testType === "klassenarbeit" && hasSections) {
        // Klassenarbeit: szekciós pontozás
        const kaResult = calculateKlassenarbeitResult(questions, answers);
        setKlassenarbeitResult(kaResult);
        const gradeResult = calculateGradeResult(kaResult.totalPoints, kaResult.maxTotalPoints);
        setGradeResult(gradeResult);
        pct = kaResult.maxTotalPoints > 0 ? Math.round((kaResult.totalPoints / kaResult.maxTotalPoints) * 100) : 0;
      } else {
        // Practice / theme test: egyszerű pontozás
        const score = answers.reduce<number>(
          (acc, a, i) => acc + (a === questions[i].correctAnswer ? 1 : 0),
          0,
        );
        const result = calculateGradeResult(score, questions.length);
        setGradeResult(result);
        pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
      }
      // Show teacher note before going to result
      setTeacherNoteScore(pct);
      setShowTeacherNote(true);
      setTimeout(() => {
        setShowTeacherNote(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setGameState("result");
      }, 7500);
    }
  }, [gameState, gradingIndex, questions, answers, testType, realisticKlassenarbeit, groupedTaskAnswers]);

  // ─── Avatar Mood Control ───────────────────────────────────
  useEffect(() => {
    // During playing with Klassenarbeit → focused
    if (gameState === "playing" && testType === "klassenarbeit") {
      setAvatarMood("focused");
      return;
    }

    // During grading → show reaction to answer
    if (gameState === "grading" && gradingIndex >= 0 && gradingIndex < questions.length) {
      const isCorrect = answers[gradingIndex] === questions[gradingIndex].correctAnswer;
      const newMood = isCorrect ? "happy" : "disappointed";
      setAvatarMood(newMood);

      // Reset to idle after 800ms
      if (avatarMoodTimeoutRef.current) clearTimeout(avatarMoodTimeoutRef.current);
      avatarMoodTimeoutRef.current = setTimeout(() => {
        setAvatarMood("idle");
      }, 800);

      return () => {
        if (avatarMoodTimeoutRef.current) clearTimeout(avatarMoodTimeoutRef.current);
      };
    }

    // After grading complete: check for victory (Note 1-2 on Klassenarbeit)
    if (gameState === "result" && testType === "klassenarbeit" && klassenarbeitResult) {
      if (klassenarbeitResult.note.value <= 2) {
        setAvatarMood("victory");
      } else {
        setAvatarMood("idle");
      }
      return;
    }

    // Default: idle
    setAvatarMood("idle");
  }, [gameState, gradingIndex, questions, answers, testType, klassenarbeitResult]);

  // Save card & stats on result
  useEffect(() => {
    if (gameState !== "result" || saved || !gradeResult || !selectedGrade) return;
    setSaved(true);

    const streak = updateStreak();
    updateStats({ highestStreak: streak });
    // Időbónusz (láthatatlan): 60s várható idő, max 150 pont
    const mathTimeBonus = Math.min(150, Math.max(0, (60 - elapsedTime) * 10));
    const mathMaxScore = gradeResult.total * 100 + 150;
    const mathCombined = gradeResult.score * 100 + mathTimeBonus;
    const rarity: CardRarity = gradeResult.score === gradeResult.total && streak >= 3
      ? "legendary"
      : calculateRarity(mathCombined, mathMaxScore, streak, 85);
    setCardRarity(rarity);

    saveCard({
      id: generateCardId(),
      game: "mathtest",
      theme: country?.gradeLabel(selectedGrade) || `${selectedGrade}. osztály`,
      rarity,
      score: gradeResult.score,
      total: gradeResult.total,
      date: new Date().toISOString(),
    });
    window.dispatchEvent(new Event("plizio-cards-changed"));

    // In Supabase mode, stats are tracked server-side.
    // Still update local stats as fallback / offline cache.
    if (schoolTasks.length > 0 && schoolResult) {
      updateMathStats(selectedGrade, schoolResult.percentage, []);
    } else {
      const topicResults = questions.map((q, i) => ({
        topic: q.topic,
        correct: answers[i] === q.correctAnswer,
      }));
      updateMathStats(selectedGrade, gradeResult.percentage, topicResults);
    }

    incrementTotalGames();
    if (gradeResult.percentage === 100) incrementPerfectScores();
  }, [gameState, saved, gradeResult, selectedGrade, questions, answers, schoolTasks, schoolResult]);

  // ─── Fetch Supabase curriculum when country+grade are selected ───
  useEffect(() => {
    if (!country || !selectedGrade) return;
    let cancelled = false;
    setCurriculumLoading(true);
    fetchCurriculum(country.code, selectedGrade).then((data) => {
      if (!cancelled) {
        setSupabaseCurriculum(data);
        setCurriculumLoading(false);
      }
    }).catch(() => {
      if (!cancelled) setCurriculumLoading(false);
    });
    return () => { cancelled = true; };
  }, [country, selectedGrade]);

  // Resolved themes: all countries use Supabase get_curriculum RPC
  const resolvedThemes = useMemo((): ThemeSelectorTheme[] => {
    const cc = country?.code;
    const langPrefix =
      cc === 'US' || cc === 'GB' ? 'en' :
      cc === 'DE' || cc === 'AT' || cc === 'CH' ? 'de' :
      cc === 'RO' ? 'ro' :
      cc === 'HU' ? 'hu' : null;
      // All countries use generator-based themes from mathCurriculum.ts

    if (langPrefix && selectedGrade) {
      const srcThemes =
        langPrefix === 'en' ? getENThemes(selectedGrade) :
        langPrefix === 'de' ? getDEThemes(selectedGrade) :
        langPrefix === 'hu' ? getHUThemes(selectedGrade) :
        langPrefix === 'ro' ? getROThemes(selectedGrade) :
        getENThemes(selectedGrade);
      return srcThemes.map(theme => ({
        id: theme.key,
        name: theme.name,
        color: theme.color,
        icon: theme.icon,
        description: theme.topics.map(t => t.name).join(' · '),
        subtopics: theme.topics.map(topic => ({
          id: `${langPrefix}_topic_${selectedGrade}_${topic.key}`,
          name: topic.name,
          color: topic.color,
          icon: topic.icon,
          taskFile: '',
          taskIds: [],
          isVisual: isVisualTopicKey(topic.key),
        })),
      }));
    }
    if (supabaseCurriculum && supabaseCurriculum.themes.length > 0) {
      return mapCurriculumToThemes(supabaseCurriculum);
    }
    return [];
  }, [supabaseCurriculum, country, selectedGrade]);

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    saveMathGrade(grade);
    setTestType("klassenarbeit");
    setSelectedSubtopics([]);
    setGradeResult(null);
    setKlassenarbeitResult(null);
    setSupabaseCurriculum(null);

    setGameState("theme-select");
  };


  const handleSubtopicToggle = (subtopicId: string) => {
    setSelectedSubtopics((prev) => {
      if (prev.includes(subtopicId)) {
        return prev.filter(id => id !== subtopicId);
      } else {
        return [...prev, subtopicId];
      }
    });
  };

  const handlePreviewSubtopic = (subtopicId: string) => {
    console.log(`Preview subtopic: ${subtopicId}`);
    // Todo: Show preview modal with sample questions
  };

  const handleStartMultiThemeTest = async () => {
    if (!selectedGrade || !testType || selectedSubtopics.length === 0) return;

    setGeneratingTest(true);
    setElapsedTime(0);
    setGradingIndex(-1);
    setGradeResult(null);
    setKlassenarbeitResult(null);
    setServerResult(null);
    setSaved(false);
    setCardRarity(null);
    setTestSession(null);
    setSchoolResult(null);
    answerTimesRef.current = [];
    lastAnswerTimeRef.current = 0;

    // ─── Initialize timer (all grades) ──────────────────
    const now = Date.now();
    setKlassenarbeitStartTime(now);
    klassenarbeitMaxTimeRef.current = 40 * 60; // will be updated after tasks are generated
    setKlassenarbeitTimeLeft(40 * 60);
    localStorage.setItem("klassenarbeitStartTime", now.toString());

    // Supabase HU slug → HU_THEMES generator topic key mapping
    const HU_SLUG_TO_KEY: Record<string, string> = {
      // Grade 1
      'osszead-20': 'add20', 'kivonas-20': 'sub20', 'osszehasonlitas': 'compare',
      'egyszer-szoveges': 'word', 'sikidomok': 'compare', 'ora-penz': 'add10',
      // Grade 2
      'osszead-100': 'add100', 'kivonas-100': 'sub100', 'tizesek': 'add100',
      'szorzotabla': 'mul', 'osztas': 'div',
      'szamsorok': 'sequence', 'hosszusag-ido': 'units', 'penzszamolas': 'units',
      // Grade 3
      'muveletek-1000': 'add1000', 'irasbeli': 'add1000',
      'szorzas': 'mul', 'hianyzo': 'mul',
      'szamsorozatok': 'sequence', 'hossz-tomeg-ido': 'units', 'atvaltas': 'units',
      // Grade 4
      'szamok-10000': 'place', 'ossz-kiv': 'mul', 'szorz-oszt': 'mul',
      'kerulet-terulet': 'geo', 'testek': 'geo', 'szimmetria': 'geo',
      'hosszusagmeres': 'units', 'tomeg-terfogat': 'units', 'idomeres': 'units',
      'tablazatok': 'geo', 'valoszinuseg': 'geo',
      // Grade 5
      'nagy-szamok': 'large', 'muveleti-sorrend': 'ops',
      'tortszamok': 'frac', 'szazalekszamitas': 'pct',
      'formak': 'geo', 'kedvezmeny': 'word', 'muvsorrend-alk': 'word',
      // Grade 6
      'negativ-muveletek': 'neg', 'szamegyenes': 'neg',
      'tort-szorzas': 'frac', 'tort-osztas': 'frac',
      'aranyok': 'ratio', 'szazalek': 'pct',
      'teruletszamitas': 'geo', 'sebesseg': 'ratio',
      // Grade 7
      'hatvanyok': 'powers', 'algebrai-kif': 'algebra',
      'linearis-egyenletek': 'eq', 'egyenlet-felallitas': 'eq',
      'szogek': 'tri', 'kulonleges-haromszogek': 'tri',
      'atfogo': 'pyth', 'befogo': 'pyth',
      // Grade 8
      'negyzetgyokok': 'sqrt', 'osszetett-kif': 'complex',
      'ketoldalas': 'eq', 'megoldas': 'eq',
      'linearis-fuggv': 'func', 'fuggvenyertekek': 'func',
      'alapok': 'prob', 'alkalmazasok': 'prob',
      // közös (több osztálynál is)
      'szoveges-feladatok': 'word', 'szoveges': 'word',
      'mertekegysegek': 'units',
    };

    // DE Supabase slug → DE_THEMES generator key mapping
    // Includes both abbreviated AND full 'und'-containing variants
    const DE_SLUG_TO_KEY: Record<string, string> = {
      // Grade 1
      'addition-bis-20': 'add20', 'subtraktion-bis-20': 'sub20',
      'vergleichen-ordnen': 'compare', 'fehlende-zahlen': 'missing',
      'einfache-textaufgaben': 'word', 'rechengeschichten': 'word',
      'formen-erkennen': 'compare', 'uhr-und-geld': 'add10', 'uhr-geld': 'add10',
      // Grade 2
      'addition-bis-100': 'add100', 'subtraktion-bis-100': 'sub100',
      'zehnerzahlen': 'add100', 'einmaleins-2-5-10': 'mul', 'einmaleins': 'mul',
      'einfache-division': 'div', 'textaufgaben': 'word',
      'zahlenreihen': 'sequence', 'laengen-zeit': 'units', 'laengen-und-zeit': 'units',
      'geld-rechnen': 'units',
      // Grade 3
      'add-sub-1000': 'add1000', 'addition-subtraktion-bis-1000': 'add1000', 'schriftlich': 'add1000',
      'multiplikation': 'mul', 'division': 'div', 'fehlende-faktoren': 'mul',
      'multiplikation-und-division': 'mul',
      'zahlenfolgen': 'sequence',
      'laenge-gewicht-zeit': 'units', 'laenge-und-gewicht-und-zeit': 'units', 'umrechnen': 'units',
      // Grade 4
      'zahlen-bis-1000': 'place1k', 'zahlen-bis-10000': 'place', 'stellenwerte': 'place',
      'addition-subtraktion': 'place', 'addition-und-subtraktion': 'place',
      'multiplikation-division': 'mul',
      'schriftlich-multiplizieren': 'mul', 'schriftlich-dividieren': 'div',
      'sachaufgaben': 'word', 'sachaufgaben-wortprobleme': 'word', 'wortprobleme': 'word',
      'umfang-flaeche': 'geo', 'umfang-und-flaeche': 'geo',
      '3d-koerper': 'geo', 'symmetrie-dreiecke': 'geo', 'symmetrie-und-dreiecke': 'geo',
      'laengen-kilometer': 'units', 'gewicht-volumen': 'units', 'gewicht-und-volumen': 'units',
      'zeit': 'units', 'umrechnung': 'units',
      'tabellen-diagramme': 'geo', 'wahrscheinlichkeit': 'geo', 'datenanalyse': 'geo',
      'brueche': 'frac', 'dezimalzahlen': 'place',
      // Visual topics (Grade 4)
      'zeichnen-visuelle': 'zeichnen', 'messen-visuelle': 'messen', 'uhrzeit-digital': 'uhrzeit',
      'zeichnen': 'zeichnen', 'messen': 'messen', 'uhrzeit': 'uhrzeit',
      // Phase 2-4 visual topics (Grade 4)
      'stellenwert-visuelle': 'place_value', 'brueche-visuelle': 'fraction_pizza',
      'zahlenfolgen-visuelle': 'sequence', 'runden-visuelle': 'number_line',
      'flaeche-umfang-visuelle': 'grid_area', 'symmetrie-visuelle': 'symmetry',
      'winkel-visuelle': 'angle', 'kreis-visuelle': 'circle_draw',
      'zeitdauer-visuelle': 'timeline', 'geld-visuelle': 'money',
      // Grade 5
      'grosse-zahlen': 'large', 'rechenregeln': 'ops', 'punkt-vor-strich': 'ops',
      'bruchrechnung': 'frac', 'prozentrechnung': 'pct', 'prozent': 'pct',
      'formen-masse': 'geo', 'rabatt-einkauf': 'word', 'rechenregeln-anwenden': 'word',
      // Grade 6
      'rechnen-negativ': 'neg', 'negative-zahlen': 'neg', 'zahlenstrahl': 'neg',
      'brueche-multiplizieren': 'frac', 'brueche-dividieren': 'frac',
      'brueche-multiplizieren-und-dividieren': 'frac',
      'verhaeltnisse': 'ratio', 'verhaeltnisse-und-geschwindigkeit': 'ratio',
      'flaechen': 'geo', 'geschwindigkeit': 'ratio',
      // Grade 7
      'potenzen': 'powers', 'algebra': 'algebra', 'algebrai-kif': 'algebra',
      'lineare-gleichungen': 'eq', 'gleichungen-aufstellen': 'eq',
      'lineare-gleichungen-und-aufstellen': 'eq',
      'winkel': 'tri', 'besondere-dreiecke': 'tri', 'winkel-und-dreiecke': 'tri',
      'hypotenuse': 'pyth', 'kathete': 'pyth', 'satz-des-pythagoras': 'pyth',
      // Grade 8
      'quadratwurzeln': 'sqrt', 'wurzeln': 'sqrt',
      'komplexe-terme': 'complex', 'terme': 'complex',
      'zwei-seiten': 'eq', 'gleichungen-loesen': 'eq',
      'lineare-funktionen': 'func', 'funktionswerte': 'func', 'funktionen': 'func',
      'grundlagen': 'prob', 'anwendungen': 'prob', 'wahrscheinlichkeitsrechnung': 'prob',
    };

    {
      // ─── Extract topic blocks from selectedSubtopics (all grades) ──────────
      // GARANTÁLTAN MINDEGYIK selectedSubtopic bekerül a topicBlocks-ba!
      const topicBlocks: Array<{ key: string; name: string }> = [];
      const topicKeysSeen = new Set<string>();
      const processedSubtopics = new Set<string>();

      const slugMap = country!.code === 'DE' ? DE_SLUG_TO_KEY : HU_SLUG_TO_KEY;

      // Normalize a slug: remove connector words (-und-, -és-, -and-), collapse dashes
      const normalizeSlug = (s: string) =>
        s.replace(/-und-/g, '-').replace(/-és-/g, '-').replace(/-and-/g, '-')
         .replace(/-\(.*?\)/g, '').replace(/--+/g, '-').replace(/-$/, '');

      // If slug is missing, generate one from the subtopic name
      const slugifyName = (name: string): string =>
        name.toLowerCase()
          .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
          .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
          .replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/--+/g, '-');

      // Build generator topic list for name-based fallback
      const cc = country!.code;
      const genThemes = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? getDEThemes(selectedGrade!)
        : cc === 'HU' ? getHUThemes(selectedGrade!)
        : cc === 'RO' ? getROThemes(selectedGrade!)
        : getENThemes(selectedGrade!);
      const genTopics = genThemes.flatMap(t => t.topics);

      // VÉGIGMEGYÜNK MINDEGYIK selectedSubtopic-on és garantáljuk a feldolgozást
      for (const subtopicId of selectedSubtopics) {
        processedSubtopics.add(subtopicId);
        let key: string | undefined;
        let name = subtopicId;

        // 1. GENERATOR-ALAPÚ ID: en_topic_X_key, de_topic_X_key, ro_topic_X_key, hu_topic_X_key
        if (subtopicId.startsWith('en_topic_') || subtopicId.startsWith('de_topic_') || subtopicId.startsWith('ro_topic_') || subtopicId.startsWith('hu_topic_')) {
          key = subtopicId.split('_').slice(3).join('_');
          // Név lekérése a themesből
          for (const theme of resolvedThemes) {
            const sub = theme.subtopics.find(s => s.id === subtopicId);
            if (sub) { name = sub.name; break; }
          }
        } else {
          // 2. SUPABASE-ALAPÚ ID: slug alapú mapping
          const sub = resolvedThemes.flatMap(t => t.subtopics).find(s => s.id === subtopicId);
          if (sub) {
            name = sub.name;
            const effectiveSlug = sub.slug || (sub.name ? slugifyName(sub.name) : undefined);

            // a) Exact slug match
            if (effectiveSlug) {
              key = slugMap[effectiveSlug];
            }

            // b) Normalized slug match
            if (!key && effectiveSlug) {
              key = slugMap[normalizeSlug(effectiveSlug)];
            }

            // c) Name-keyword fallback: find generator topic whose name overlaps sub.name
            if (!key && sub.name) {
              const subWords = sub.name.toLowerCase().split(/[\s\/\-,]+/).filter(w => w.length > 3);
              for (const gt of genTopics) {
                const gtWords = gt.name.toLowerCase().split(/[\s\/\-,]+/);
                const overlap = subWords.filter(w => gtWords.some(gw => gw.includes(w) || w.includes(gw)));
                if (overlap.length >= Math.min(2, subWords.length)) {
                  key = gt.key;
                  break;
                }
              }
            }

            // d) FALLBACK: Ha semmi nem működik, ID-ből generálunk egy key-t
            if (!key) {
              key = subtopicId
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '_')
                .replace(/_+/g, '_')
                .slice(0, 20);
              console.warn(`[MathTest] No generator mapping for subtopic "${name}" (${subtopicId}), using fallback key: ${key}`);
            }
          }
        }

        // Hozzáadás a topicBlocks-hoz (duplikátumok elkerülése)
        if (key && !topicKeysSeen.has(key)) {
          topicKeysSeen.add(key);
          topicBlocks.push({ key, name });
          console.log(`[MathTest] Added topic: ${key} (${name})`);
        }
      }

      if (topicBlocks.length === 0) {
        console.warn(`[MathTest] Nincs topicBlocks generálva! selectedSubtopics: ${selectedSubtopics.join(', ')}`);
      }

      // ─── Generate school test (all grades) ────────────────────────────────
      const tasks = generateSchoolTest(
        selectedGrade!,
        country?.code || 'DE',
        topicBlocks.length > 0 ? topicBlocks : undefined
      );
      // Dynamic timer: 40 min base + 3 min per extra block beyond 10
      const extraBlocks = Math.max(0, tasks.length - 10);
      const dynamicMaxTime = 40 * 60 + extraBlocks * 3 * 60;
      klassenarbeitMaxTimeRef.current = dynamicMaxTime;
      setKlassenarbeitTimeLeft(dynamicMaxTime);
      setSchoolTasks(tasks);
      setSchoolAnswers({});
      setRealisticKlassenarbeit(null);
      setQuestions([]);
      setAnswers([]);
      setAvatarMood('focused');
      setGameState('playing');
      setGeneratingTest(false);
      return;
    }

  };

  const handleThemeSelect = async (theme: string) => {
    if (!selectedGrade || !testType) return;

    setSelectedTheme(theme);
    setElapsedTime(0);
    setGradingIndex(-1);
    setGradeResult(null);
    setKlassenarbeitResult(null);
    setServerResult(null);
    setSaved(false);
    setCardRarity(null);
    setTestSession(null);
    answerTimesRef.current = [];
    lastAnswerTimeRef.current = 0;

    // ─── Initialize Klassenarbeit timer (40 minutes for theme-based tests) ─────────────────────
    const now = Date.now();
    setKlassenarbeitStartTime(now);
    klassenarbeitMaxTimeRef.current = 40 * 60;
    setKlassenarbeitTimeLeft(40 * 60); // 40 minutes = 2400 seconds
    localStorage.setItem("klassenarbeitStartTime", now.toString());

    try {
      // Generate theme-based test (15 questions: 5 easy, 7 medium, 3 hard)
      const themeBasedTest = generateThemeBasedTest(selectedGrade, theme);
      console.log(`[Theme Test] Generated ${themeBasedTest.tasks.length} questions for theme "${theme}"`);

      if (themeBasedTest.tasks.length === 0) {
        throw new Error("No questions generated");
      }

      // Convert Theme-based test to MathQuestion format
      const mathQuestions: MathQuestion[] = themeBasedTest.tasks.map((task, index) => {
        const numOptions = task.options.map(opt => typeof opt === 'number' ? opt : parseInt(opt as string, 10));
        return {
        question: task.question,
        correctAnswer: numOptions[task.correct], // The actual value, not the index
        options: numOptions,
        topic: task.id,
        isWordProblem: false,
        };
      });

      setQuestions(mathQuestions);
      setAnswers(new Array(mathQuestions.length).fill(null));
      setRealisticKlassenarbeit(null);
      setAvatarMood("idle");
      setGameState("playing");
    } catch (err) {
      console.error("[Theme Test] Failed:", err);
      alert("Error generating test. Please try again.");
      setGameState("theme-select");
    }
  };

  const handleAnswer = (questionIndex: number, answer: number | string, scroll = true) => {
    // Track time per question for Supabase submission
    if (useSupabase && answerTimesRef.current.length > 0) {
      const now = elapsedTime;
      answerTimesRef.current[questionIndex] = Math.max(1, now - lastAnswerTimeRef.current);
      lastAnswerTimeRef.current = now;
    }

    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = answer;
      console.log(`[Answer Q${questionIndex}] Set to ${answer}, Filled: ${next.filter(a => a !== null).length}/${next.length}`);
      return next;
    });

    // Scroll to next question (forward) - only when explicitly requested
    if (scroll) {
      setTimeout(() => {
        const nextQuestionIndex = questionIndex + 1;
        if (nextQuestionIndex < questions.length) {
          const nextElement = document.querySelector(`[data-question-id="q_${nextQuestionIndex}"]`);
          if (nextElement) {
            nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
  };

  const handleGroupedTaskAnswer = (taskIndex: number, subQuestionId: string, answer: string | number, fieldId?: string) => {
    let key: string;
    if (fieldId) {
      // For multi_input and table_fill types with field IDs
      key = `task_${taskIndex}_${subQuestionId}_${fieldId}`;
    } else {
      // For simple types
      key = `task_${taskIndex}_${subQuestionId}`;
    }
    setGroupedTaskAnswers((prev) => ({
      ...prev,
      [key]: answer,
    }));
  };

  const handleSchoolSubmit = () => {
    setGameState("grading");
  };

  const handleSubmit = async () => {
    // Always show grading animation (pencil) first
    setGradingIndex(0);
    setGameState("grading");

    // Submit to Supabase in background if applicable
    if (useSupabase && testSession) {
      try {
        const submitAnswers: SubmitAnswer[] = answers.map((a, i) => ({
          question_index: i,
          answer: a ?? 0,
          time_spent_sec: answerTimesRef.current[i] || Math.ceil(elapsedTime / questions.length),
        }));

        let klassenarbeitMeta: KlassenarbeitMetadata | undefined;
        if (testType === "klassenarbeit" && klassenarbeitResult) {
          klassenarbeitMeta = {
            sectionResults: klassenarbeitResult.sectionResults,
            totalPoints: klassenarbeitResult.totalPoints,
            maxTotalPoints: klassenarbeitResult.maxTotalPoints,
            percentage: klassenarbeitResult.percentage,
            note: {
              value: klassenarbeitResult.note.value,
              label: klassenarbeitResult.note.label,
            },
            starsEarned: klassenarbeitResult.starsEarned,
          };
        }

        const result = await submitSupabaseTest(testSession.testId, submitAnswers, klassenarbeitMeta);
        setServerResult(result);
      } catch (err) {
        console.error("[Supabase] submitTest failed:", err);
      }
    }
  };

  const handlePlayAgain = () => {
    if (selectedGrade) {
      setSelectedSubtopics([]);
      setSchoolTasks([]);
      setSchoolAnswers({});
      setSchoolResult(null);
      setGameState("theme-select");
    }
  };

  const allAnswered = schoolTasks.length > 0
    ? schoolTasks.every((block) =>
        block.subQuestions.every((sq) => {
          const v = schoolAnswers[sq.id];
          return v !== undefined && String(v).trim() !== '';
        })
      )
    : realisticKlassenarbeit
    ? realisticKlassenarbeit.tasks.every((task) =>
        task.subQuestions.every((sq) => `task_${task.taskNumber - 1}_${sq.id}` in groupedTaskAnswers)
      )
    : answers.every((a) => a !== null);

  const ui = country?.ui;

  // ─── COUNTRY SELECT SCREEN ─────────────────────────────

  if (gameState === "country-select") {
    return <CountrySelect onSelect={handleCountrySelect} avatarProps={{ mood: avatarMood, gender: avatarGender, activeSkin: avatarSkin, activeFace: avatarFace, activeTop: avatarTop, activeBottom: avatarBottom, activeShoe: avatarShoe, activeCape: avatarCape, activeGlasses: avatarGlasses, activeGloves: avatarGloves, activeHat: avatarHat, activeTrail: avatarTrail }} />;
  }

  // ─── GRADE SELECT SCREEN ─────────────────────────────

  // ─── GRADE 1 TOPIC SELECT SCREEN ──────────────────────

  const langCode = (cc: string): 'hu' | 'de' | 'en' | 'ro' => {
    if (cc === 'DE' || cc === 'AT' || cc === 'CH') return 'de';
    if (cc === 'HU') return 'hu';
    if (cc === 'RO') return 'ro';
    return 'en';
  };

  // ─── THEME SELECT SCREEN (Hierarchical) ─────────────────────────────

  if (gameState === "theme-select" && country && selectedGrade && testType) {
    return <ThemeSelect country={country} resolvedThemes={resolvedThemes} selectedSubtopics={selectedSubtopics} generatingTest={generatingTest} curriculumLoading={curriculumLoading} onBack={() => setGameState("grade-select")} onSubtopicToggle={handleSubtopicToggle} onPreview={handlePreviewSubtopic} onStartTest={handleStartMultiThemeTest} onClearSelection={() => setSelectedSubtopics([])} avatarProps={{ mood: avatarMood, gender: avatarGender, activeSkin: avatarSkin, activeFace: avatarFace, activeTop: avatarTop, activeBottom: avatarBottom, activeShoe: avatarShoe, activeCape: avatarCape, activeGlasses: avatarGlasses, activeGloves: avatarGloves, activeHat: avatarHat, activeTrail: avatarTrail }} />;
  }

  // ─── TEST PAPER (PLAYING & GRADING) ─────────────────────────────

  if (gameState === "playing" || gameState === "grading") {
    const isGrading = gameState === "grading";

    const handlePrintBlank = () => {
      const now = new Date();
      const dateStr = `${now.getFullYear()}. ${(now.getMonth() + 1).toString().padStart(2, "0")}. ${now.getDate().toString().padStart(2, "0")}.`;
      const gradeLabel = country?.gradeLabel(selectedGrade!) || `${selectedGrade}. ${ui?.classLabel || "class"}`;
      const subject = ui?.subject || ui?.title || "MATH TEST";

      // ─── Build questionsHtml from schoolTasks OR questions ───────────
      let questionsHtml = "";
      let totalPoints = 0;

      if (schoolTasks.length > 0) {
        // School task blocks (grade 1-8 with subtopics)
        totalPoints = schoolTasks.reduce((s, b) => s + b.totalPoints, 0);
        questionsHtml = schoolTasks.map((block, bi) => {
          const blockHtml: string[] = [];
          blockHtml.push(`<div class="question"><div class="question-header"><span class="q-num">${bi + 1}.</span><span class="q-text" style="font-weight:700">${block.title}</span><span class="q-pts">(${block.totalPoints} ${ui?.pointsUnit || 'pts'})</span></div>`);

          const d = block.data as Record<string, unknown>;
          switch (block.type) {
            case 'kopfrechnen': {
              const items = (d as { items: { expr: string }[] }).items;
              blockHtml.push('<div class="kopf-grid">');
              items.forEach((item, idx) => {
                const expr = item.expr.replace('___', '<span class="blank-line">______</span>');
                blockHtml.push(`<div class="kopf-item"><span class="sub-num">${idx + 1}.</span> ${expr}</div>`);
              });
              blockHtml.push('</div>');
              break;
            }
            case 'schriftlich': {
              const items = (d as { items: { a: number; b: number; op: string }[] }).items;
              blockHtml.push('<div class="schrift-grid">');
              items.forEach((item) => {
                const maxLen = Math.max(String(item.a).length, String(item.b).length) + 1;
                const pad = (n: number) => String(n).padStart(maxLen, '\u00A0');
                blockHtml.push(`<div class="schrift-item"><div class="schrift-num">${pad(item.a)}</div><div class="schrift-num">${item.op} ${pad(item.b).slice(1)}</div><div class="schrift-line"></div><div class="schrift-answer">&nbsp;</div></div>`);
              });
              blockHtml.push('</div>');
              break;
            }
            case 'sachaufgabe': {
              const items = (d as { items: { text: string; calcSpaceLines: number; answerUnit: string }[] }).items;
              items.forEach((item, idx) => {
                blockHtml.push(`<div class="sach-item">`);
                if (items.length > 1) blockHtml.push(`<span class="sub-num">${idx + 1}.</span> `);
                blockHtml.push(`<div class="sach-text">${item.text}</div>`);
                for (let l = 0; l < item.calcSpaceLines; l++) blockHtml.push('<div class="calc-line"></div>');
                blockHtml.push(`<div class="answer-row"><span class="answer-label">${country?.code === 'DE' ? 'Antwort' : country?.code === 'HU' ? 'Válasz' : country?.code === 'RO' ? 'Răspuns' : 'Answer'}:</span> <span class="blank-line">______________</span> ${item.answerUnit}</div></div>`);
              });
              break;
            }
            case 'aufgaben': {
              const items = (d as { items: { question: string }[] }).items;
              items.forEach((item, idx) => {
                const q = item.question.replace('___', '<span class="blank-line">______</span>');
                blockHtml.push(`<div class="aufg-item"><span class="sub-num">${idx + 1}.</span> ${q}</div>`);
              });
              break;
            }
            case 'zahlenreihe': {
              const rows = (d as { rows: { given: number[]; blanks: number; rule: string }[] }).rows;
              rows.forEach((row, idx) => {
                const nums = row.given.map(String).concat(Array(row.blanks).fill('___')).join(', ');
                blockHtml.push(`<div class="aufg-item"><span class="sub-num">${idx + 1}.</span> ${nums} <span style="color:#888; font-size:9pt">(${row.rule})</span></div>`);
              });
              break;
            }
            case 'hiany': {
              const items = (d as { items: { topRow: (number|null)[]; addRow: (number|null)[]; op: string; resultRow: (number|null)[] }[] }).items;
              blockHtml.push('<div class="hiany-grid">');
              items.forEach((item) => {
                const renderRow = (row: (number|null)[]) => row.map(v => v === null ? '<span class="blank-cell">___</span>' : `<span class="filled-cell">${v}</span>`).join('');
                blockHtml.push(`<div class="hiany-item"><div class="hiany-row">${renderRow(item.topRow)}</div><div class="hiany-row">${item.op} ${renderRow(item.addRow)}</div><div class="hiany-line"></div><div class="hiany-row">${renderRow(item.resultRow)}</div></div>`);
              });
              blockHtml.push('</div>');
              break;
            }
            case 'tabelle': {
              const td = d as { headers: string[]; rows: { label: string; cells: (string|null)[] }[] };
              blockHtml.push('<table class="tab-table"><thead><tr><th></th>');
              td.headers.forEach(h => blockHtml.push(`<th>${h}</th>`));
              blockHtml.push('</tr></thead><tbody>');
              td.rows.forEach(row => {
                blockHtml.push(`<tr><td class="tab-label">${row.label}</td>`);
                row.cells.forEach(c => blockHtml.push(`<td>${c === null ? '<span class="blank-line">___</span>' : c}</td>`));
                blockHtml.push('</tr>');
              });
              blockHtml.push('</tbody></table>');
              break;
            }
            default: {
              // Visual block types — render sub-questions with print-friendly HTML
              if (block.type.startsWith('visual_')) {
                block.subQuestions.forEach((sq, idx) => {
                  const p = sq.visualData?.params as Record<string, any>;
                  if (!p) return;
                  const label = String.fromCharCode(97 + idx) + ')';
                  blockHtml.push(`<div class="visual-sub" style="margin:8px 0; padding:8px 12px; background:rgba(255,255,255,0.6); border-radius:6px;">`);
                  blockHtml.push(`<div style="font-weight:700; font-size:10pt; color:#4b5563; margin-bottom:4px;">${label}</div>`);
                  blockHtml.push(renderVisualPrintHtml(sq.visualType, p, sq.question, country?.code));
                  blockHtml.push('</div>');
                });
              }
              break;
            }
          }
          blockHtml.push('</div>');
          return blockHtml.join('\n');
        }).join('\n');
      } else {
        // Legacy questions array
        totalPoints = questions.reduce((sum, q) => sum + (q.maxPoints || 1), 0);
        questionsHtml = questions.map((q, i) => {
          const pts = q.maxPoints || 1;
          const sectionTag = q.section ? `<div class="section-label">${q.section}</div>` : "";
          return `
            ${sectionTag}
            <div class="question">
              <div class="question-header">
                <span class="q-num">${i + 1}.</span>
                <span class="q-text">${q.question}</span>
                <span class="q-pts">(${pts} ${ui?.pointsUnit || 'pts'})</span>
              </div>
              <div class="answer-box"></div>
            </div>`;
        }).join("");
      }

      const html = `<!DOCTYPE html>
<html lang="${country?.code?.toLowerCase() || 'en'}">
<head>
  <meta charset="UTF-8">
  <title>${subject} – ${gradeLabel}</title>
  <style>
    @page { size: A4; margin: 1.5cm 1.8cm 1.5cm 2.2cm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 11pt;
      color: #1a1a2e;
      background: white;
      background-image:
        linear-gradient(rgba(100,149,237,0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100,149,237,0.18) 1px, transparent 1px);
      background-size: 0.5cm 0.5cm;
      min-height: 29.7cm;
    }
    .page-content { background: transparent; position: relative; }

    /* ── FEJLÉC ── */
    .header {
      border-bottom: 3px solid #1a1a2e;
      padding-bottom: 10px;
      margin-bottom: 16px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 10px;
    }
    .header-left h1 {
      font-size: 17pt;
      font-weight: 900;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #1a1a2e;
      line-height: 1.1;
    }
    .header-left .grade-badge {
      display: inline-block;
      margin-top: 4px;
      font-size: 9pt;
      font-weight: 700;
      color: #4b5563;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border: 1.5px solid #d1d5db;
      border-radius: 4px;
      padding: 1px 8px;
      background: rgba(255,255,255,0.7);
    }
    .score-box {
      border: 2px solid #1a1a2e;
      border-radius: 6px;
      min-width: 100px;
      padding: 6px 10px;
      text-align: center;
      background: rgba(255,255,255,0.8);
      flex-shrink: 0;
    }
    .score-box .score-label { font-size: 7pt; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; }
    .score-box .score-value { font-size: 18pt; font-weight: 900; color: #1a1a2e; line-height: 1.1; }
    .score-box .score-total { font-size: 8pt; color: #9ca3af; }

    .fields { display: flex; gap: 16px; flex-wrap: wrap; }
    .field { flex: 1; min-width: 150px; }
    .field label { font-size: 7.5pt; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 2px; }
    .field .line {
      border-bottom: 1.5px solid #374151;
      min-height: 22px;
      background: rgba(255,255,255,0.6);
    }

    /* ── KÉRDÉSEK ── */
    .section-label {
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #6b7280;
      margin: 18px 0 6px 0;
      padding-bottom: 3px;
      border-bottom: 1px dashed #d1d5db;
    }
    .question {
      margin-bottom: 14px;
      background: rgba(255,255,255,0.55);
      border-radius: 5px;
      padding: 8px 10px 6px 10px;
      border-left: 3px solid rgba(100,149,237,0.4);
    }
    .question-header {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      margin-bottom: 4px;
    }
    .q-num { font-weight: 800; font-size: 11pt; min-width: 22px; color: #1a1a2e; }
    .q-text { flex: 1; font-size: 11pt; line-height: 1.4; color: #1a1a2e; }
    .q-pts { font-size: 8pt; color: #9ca3af; white-space: nowrap; font-style: italic; margin-top: 2px; }
    .answer-box {
      margin-top: 4px;
      margin-left: 28px;
      border-bottom: 1px solid #d1d5db;
      min-height: 28px;
    }

    /* ── SCHOOL TASK TYPES ── */
    .kopf-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 16px; margin-top: 6px; font-family: monospace; font-size: 11pt; }
    .kopf-item { padding: 3px 0; }
    .sub-num { font-weight: 800; font-size: 10pt; color: #4b5563; min-width: 18px; display: inline-block; }
    .blank-line { border-bottom: 1.5px solid #374151; padding: 0 12px; }
    .schrift-grid { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 6px; font-family: monospace; font-size: 12pt; }
    .schrift-item { min-width: 100px; text-align: right; }
    .schrift-num { white-space: pre; letter-spacing: 2px; }
    .schrift-line { border-top: 2px solid #1a1a2e; margin: 3px 0; }
    .schrift-answer { min-height: 24px; }
    .sach-item { margin: 8px 0; }
    .sach-text { font-size: 11pt; line-height: 1.5; padding: 4px 8px; border-left: 3px solid rgba(100,149,237,0.4); background: rgba(240,245,255,0.6); margin-bottom: 6px; }
    .calc-line { border-bottom: 1px solid #e5e7eb; height: 22px; background-image: linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px); background-size: 20px 100%; }
    .answer-row { margin-top: 6px; font-size: 11pt; }
    .answer-label { font-weight: 700; color: #4b5563; }
    .aufg-item { margin: 4px 0; font-size: 11pt; line-height: 1.5; }
    .hiany-grid { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 6px; font-family: monospace; font-size: 11pt; }
    .hiany-item { text-align: right; }
    .hiany-row { white-space: pre; }
    .hiany-line { border-top: 2px solid #1a1a2e; margin: 2px 0; }
    .blank-cell { border-bottom: 1.5px solid #374151; padding: 0 6px; }
    .filled-cell { padding: 0 6px; }
    .tab-table { border-collapse: collapse; margin-top: 6px; font-size: 10pt; }
    .tab-table th, .tab-table td { border: 1px solid #d1d5db; padding: 4px 10px; text-align: center; }
    .tab-table th { background: rgba(240,245,255,0.6); font-weight: 700; font-size: 9pt; }
    .tab-label { font-weight: 600; text-align: left !important; }

    /* ── VISUAL BLOCKS ── */
    .visual-sub { page-break-inside: avoid; }
    .visual-sub svg { display: inline-block; }

    /* ── WATERMARK ── */
    .watermark {
      position: fixed;
      bottom: 0.8cm;
      right: 1.2cm;
      font-size: 7pt;
      color: #d1d5db;
      font-family: monospace;
      letter-spacing: 0.15em;
      pointer-events: none;
    }

    @media print {
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>
<div class="page-content">
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        <h1>${subject}</h1>
        <span class="grade-badge">${gradeLabel}</span>
      </div>
      <div class="score-box">
        <div class="score-label">${ui?.scoreLabel || 'Score'}</div>
        <div class="score-value">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="score-total">/ ${totalPoints} ${ui?.pointsUnit || 'pts'}</div>
      </div>
    </div>
    <div class="fields">
      <div class="field">
        <label>${ui?.nameLabel || 'Name'}</label>
        <div class="line"></div>
      </div>
      <div class="field" style="max-width:120px">
        <label>${ui?.classFieldLabel || 'Class'}</label>
        <div class="line"></div>
      </div>
      <div class="field" style="max-width:130px">
        <label>${ui?.dateLabel || 'Date'}</label>
        <div class="line" style="padding-top:4px; font-size:9pt; color:#374151;">${dateStr}</div>
      </div>
    </div>
  </div>

  ${questionsHtml}
</div>
<div class="watermark">PLIZIO</div>
</body>
</html>`;

      const win = window.open("", "_blank");
      if (win) {
        win.document.write(html);
        win.document.close();
        // Wait for the document to fully render before printing
        setTimeout(() => {
          win.print();
        }, 500);
      }
    };

    return (
      <DraftProvider>
      <>
        <ModernPaperTest
          title={ui?.subject || ui?.title || "MATH TEST"}
          gradeLabel={country?.gradeLabel(selectedGrade!) || `${selectedGrade}. ${ui?.classLabel || "Class"}`}
          date={new Date().toISOString()}
          timeLeft={testType === "klassenarbeit" ? klassenarbeitTimeLeft : elapsedTime}
          solved={schoolTasks.length > 0
            ? Object.values(schoolAnswers).filter((v) => String(v).trim() !== '').length
            : answers.filter((a) => a !== null).length}
          total={schoolTasks.length > 0
            ? schoolTasks.reduce((s, b) => s + b.subQuestions.length, 0)
            : questions.length}
          isGrading={isGrading}
          onExit={() => setGameState("grade-select")}
          onPrint={handlePrintBlank}
          userName={user?.user_metadata?.full_name || getUsername() || user?.email?.split('@')[0] || ui?.guest || 'Guest'}
          dateLocale={ui?.dateLocale || 'en-US'}
          exitLabel={ui?.exit || 'Exit'}
        >
          <div>
          <div className="relative max-w-lg mx-auto" style={{ borderLeft: "2px solid rgba(220, 100, 100, 0.4)" }}>
            <div className="px-4 sm:px-6 py-4 pb-4" style={{ paddingTop: "0" }}>
              {/* Header */}
              {realisticKlassenarbeit && testType === "klassenarbeit" && selectedGrade ? (
                <KlassenarbeitHeader
                  grade={selectedGrade}
                  studentName={user?.user_metadata?.full_name || getUsername() || user?.email?.split('@')[0] || undefined}
                  subject={ui?.subject || "Mathematics"}
                  startTime={Date.now()}
                />
              ) : null}

              {/* School Test Mode (grade 1-4) */}
              {schoolTasks.length > 0 && (
                <div className="space-y-0">
                  {schoolTasks.map((block, bi) => (
                    <SchoolTaskBlock
                      key={block.id}
                      block={block}
                      blockIndex={bi}
                      answers={schoolAnswers}
                      onChange={(sqId, val) =>
                        !isGrading && setSchoolAnswers((prev) => ({ ...prev, [sqId]: val }))
                      }
                      isGrading={isGrading}
                      cc={country?.code || 'DE'}
                      speakLang={selectedGrade && selectedGrade <= 2
                        ? ({ DE: "de-DE", HU: "hu-HU", US: "en-US", GB: "en-GB", RO: "ro-RO" }[country?.code ?? ""] ?? undefined)
                        : undefined}
                    />
                  ))}
                </div>
              )}

              {/* Realistic Klassenarbeit (Grouped Tasks) */}
              {!schoolTasks.length && realisticKlassenarbeit && (
                <RealisticKlassenarbeitDisplay
                  tasks={realisticKlassenarbeit.tasks}
                  answers={groupedTaskAnswers}
                  onAnswerChange={handleGroupedTaskAnswer}
                  isGrading={isGrading}
                  gradeIndex={gradingIndex}
                  testId={`ka_${selectedGrade}_${testType}`}
                  countryCode={country?.code}
                />
              )}

              {/* Individual Questions - All using MathQuestionDisplay */}
              {questions.map((question, qi) => {
                const isGraded = isGrading && qi < gradingIndex;
                const isCorrect = answers[qi] === question.correctAnswer;

                // Show section header if this question has a section and it's different from previous
                const currentSection = question.section;
                const prevSection = qi > 0 ? questions[qi - 1].section : null;
                const showSectionHeader = currentSection && currentSection !== prevSection;

                return (
                  <motion.div
                    key={qi}
                    data-question-id={`q_${qi}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: isGrading ? 0 : qi * 0.05 }}
                    className="mb-6"
                  >
                    {/* Section header (Klassenarbeit only) */}
                    {showSectionHeader && (
                      <motion.div
                        className="mt-6 mb-4 pb-2 border-b-2 border-gray-400/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <h3 className="text-sm font-black text-gray-700 uppercase tracking-wider">
                          {currentSection}
                          {question.maxPoints && <span className="ml-2 text-gray-500 font-normal">({question.maxPoints} {ui?.pointsUnit || 'pts'})</span>}
                        </h3>
                      </motion.div>
                    )}

                    {/* Use MathQuestionDisplay for all questions - includes inline draft */}
                    <MathQuestionDisplay
                      question={convertToExtendedQuestion(question)}
                      selectedAnswer={answers[qi]}
                      onSelectAnswer={(optIdx) => !isGrading && handleAnswer(qi, question.options[optIdx], false)}
                      showResult={isGrading && isGraded}
                      isCorrect={isCorrect}
                      useTextInput={!question.hasStringOptions}
                      onTextAnswer={(textAnswer, noScroll) => {
                        const numAnswer = Number(textAnswer);
                        if (textAnswer !== '' && !isNaN(numAnswer)) {
                          handleAnswer(qi, numAnswer, !noScroll);
                        }
                      }}
                      testId={`test_${selectedGrade}_${testType}`}
                      questionId={`q_${qi}`}
                      countryCode={country?.code}
                      speakLang={selectedGrade && selectedGrade <= 2
                        ? ({ DE: "de-DE", HU: "hu-HU", US: "en-US", GB: "en-GB", RO: "ro-RO" }[country?.code ?? ""] ?? undefined)
                        : undefined}
                    />

                    {/* Inline grading pencil - shows on the question currently being graded */}
                    {isGrading && qi === gradingIndex && (
                      <InlineGradingPencil label={ui?.grading} />
                    )}

                    {/* Grading mark */}
                    {isGrading && isGraded && (
                      <motion.div
                        className="absolute -right-8 top-6"
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {isCorrect ? (
                          <Check
                            size={28}
                            className="text-green-500"
                            style={{ filter: "drop-shadow(0 0 4px rgba(34,197,94,0.5))" }}
                          />
                        ) : (
                          <XIcon
                            size={28}
                            className="text-red-500"
                            style={{ filter: "drop-shadow(0 0 4px rgba(239,68,68,0.5))" }}
                          />
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}

              {/* Inline teacher note - appears on the test paper after all questions are graded */}
              {showTeacherNote && (
                <InlineTeacherNote
                  playerName={user?.user_metadata?.full_name || getUsername() || user?.email?.split('@')[0] || ''}
                  percentage={teacherNoteScore}
                  countryCode={country?.code}
                />
              )}
            </div>

            {/* Floating Submit Button - Center bottom, above avatar */}
            {!isGrading && (
              <motion.div
                className="fixed left-1/2 -translate-x-1/2 bottom-24 z-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.button
                  onClick={() => {
                    if (allAnswered) {
                      if (schoolTasks.length > 0) {
                        handleSchoolSubmit();
                      } else {
                        handleSubmit();
                      }
                    }
                  }}
                  disabled={!allAnswered}
                  className={`px-8 py-3 rounded-lg font-bold shadow-lg transition-all ${
                    allAnswered
                      ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                  }`}
                  whileHover={allAnswered ? { scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)" } : {}}
                  whileTap={allAnswered ? { scale: 0.95 } : {}}
                >
                  {ui?.submit || 'Submit'}
                </motion.button>
              </motion.div>
            )}


          </div>
        </div>
        </ModernPaperTest>
        {/* Realistic pencil cursor during grading */}
        {isGrading && gradingIndex < questions.length && (
          <GradingPencil gradingIndex={gradingIndex} total={questions.length} />
        )}

        {/* TeacherNote is now rendered inline on the test paper above */}

        {/* Avatar - Always visible, outside test UI */}
        <div
          className="fixed bottom-0 right-0 z-50 pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            paddingBottom: "max(80px, calc(80px + env(safe-area-inset-bottom)))",
            paddingRight: "max(20px, env(safe-area-inset-right))",
          }}
        >
          <AvatarCompanion mood={avatarMood} gender={avatarGender} activeSkin={avatarSkin} activeFace={avatarFace} activeTop={avatarTop} activeBottom={avatarBottom} activeShoe={avatarShoe} activeCape={avatarCape} activeGlasses={avatarGlasses} activeGloves={avatarGloves} activeHat={avatarHat} activeTrail={avatarTrail} />
        </div>
      </>
      </DraftProvider>
    );
  }

  // ─── RESULT SCREEN ─────────────────────────────

  if (gameState === "result" && gradeResult) {
    // Klassenarbeit vs Practice display (school tests also use practice display)
    const isKlassenarbeit = testType === "klassenarbeit" && klassenarbeitResult;

    return (
      <>
        <main className="min-h-screen bg-bg flex items-center justify-center px-4">
        {isKlassenarbeit && klassenarbeitResult ? (
          // ─── KLASSENARBEIT RESULT (New Exam Display) ─────────────────────────────
          <motion.div
            className="w-full max-w-5xl px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring" }}
          >
            {realisticKlassenarbeit && (
              <ExamResultsDisplay
                tasks={realisticKlassenarbeit.tasks}
                answers={groupedTaskAnswers}
                grade={Math.round(klassenarbeitResult.note.value)}
                totalPoints={klassenarbeitResult.maxTotalPoints}
                earnedPoints={klassenarbeitResult.totalPoints}
                sections={klassenarbeitResult.sectionResults.map((section) => ({
                  section: section.name,
                  earned: section.earnedPoints,
                  total: section.maxPoints,
                  percentage: Math.round((section.earnedPoints / section.maxPoints) * 100),
                }))}
              />
            )}

            {/* Fallback for old format */}
            {!realisticKlassenarbeit && (
              <motion.div
                className="flex flex-col items-center gap-6 max-w-2xl w-full mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {/* Note display */}
                <div className="text-center">
                  {(() => {
                    const isEN = country?.code === 'US' || country?.code === 'GB';
                    const v = klassenarbeitResult.note.value;
                    const display = isEN ? ['','A','B','C','D','F','F'][v] : String(v);
                    const labels: Record<string, string[]> = {
                      EN: ['','Excellent','Good','Satisfactory','Adequate','Poor','Failing'],
                      HU: ['','Jeles','Jó','Közepes','Elégséges','Elégtelen','Elégtelen'],
                      RO: ['','Excelent','Bine','Satisfăcător','Suficient','Insuficient','Insuficient'],
                    };
                    const cc = country?.code ?? '';
                    const langKey = (cc === 'US' || cc === 'GB') ? 'EN' : cc === 'RO' ? 'RO' : cc === 'HU' ? 'HU' : null;
                    const label = langKey ? labels[langKey][v] : klassenarbeitResult.note.label;
                    return (<>
                      <div className="text-8xl font-black mb-3" style={{ color: klassenarbeitResult.note.color }}>
                        {klassenarbeitResult.note.emoji} {display}
                      </div>
                      <p className="text-3xl font-black" style={{ color: klassenarbeitResult.note.color }}>
                        {label}
                      </p>
                    </>);
                  })()}
                  <p className="text-white/60 text-sm mt-2">
                    {klassenarbeitResult.totalPoints}/{klassenarbeitResult.maxTotalPoints} {ui?.pointsUnit || 'pts'} ({klassenarbeitResult.percentage}%)
                  </p>
                </div>

                {/* Stars earned */}
                {klassenarbeitResult.starsEarned > 0 && (
                  <p className="text-yellow-400 text-lg font-bold">
                    {klassenarbeitResult.note.emoji} +{klassenarbeitResult.starsEarned} {ui?.starUnit || 'star'}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        ) : (
          // ─── PRACTICE RESULT (Original) ─────────────────────────────
          <motion.div
            className="flex flex-col items-center gap-6 max-w-sm w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            {/* 3D Grade */}
            <div className="relative">
              <GradeScene grade={gradeResult.percentage >= 90 ? 5 : gradeResult.percentage >= 75 ? 4 : gradeResult.percentage >= 60 ? 3 : gradeResult.percentage >= 40 ? 2 : 1} />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <span
                  className="text-7xl font-black"
                  style={{ color: gradeResult.mark.color, textShadow: `0 0 30px ${gradeResult.mark.color}60, 0 0 60px ${gradeResult.mark.color}30` }}
                >
                  {gradeResult.mark.display}
                </span>
              </motion.div>
            </div>

            {/* Grade label */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-3xl font-black" style={{ color: gradeResult.mark.color }}>
                {gradeResult.mark.label}
              </p>
              <p className="text-white/40 text-sm mt-1">
                {gradeResult.score}/{gradeResult.total} ({gradeResult.percentage}%)
              </p>
              <p className="text-white/30 text-xs mt-1 font-mono">
                {country?.gradeLabel(selectedGrade!) || `${selectedGrade}. ${ui?.classLabel || 'class'}`} &bull;{" "}
                {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, "0")}
              </p>
              {serverResult && serverResult.stars_earned > 0 && (
                <p className="text-yellow-400 text-sm mt-2 font-bold">
                  +{serverResult.stars_earned} {ui?.starUnit || 'star'} &bull; +{serverResult.xp_earned} XP
                </p>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Buttons - shared */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isKlassenarbeit ? 1.0 : 0.7 }}
        >
          <motion.div
            className="flex gap-3 w-full max-w-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isKlassenarbeit ? 1.1 : 0.7 }}
          >
            {/* Retry */}
            <motion.button
              onClick={handlePlayAgain}
              className="flex-1 py-3 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2"
              style={{
                borderColor: isKlassenarbeit ? `${klassenarbeitResult?.note.color}40` : `${gradeResult.mark.color}40`,
                color: isKlassenarbeit ? klassenarbeitResult?.note.color : gradeResult.mark.color,
                background: isKlassenarbeit ? `${klassenarbeitResult?.note.color}10` : `${gradeResult.mark.color}10`
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <RotateCcw size={18} />
              {ui?.retry}
            </motion.button>

            {/* Card */}
            <motion.button
              onClick={() => setGameState("reward")}
              className="flex-1 py-3 rounded-xl border-2 border-gold/40 text-gold font-bold text-sm flex items-center justify-center gap-2"
              style={{ background: "rgba(255,215,0,0.1)" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={18} />
              {ui?.card}
            </motion.button>

            {/* Different grade */}
            <motion.button
              onClick={() => setGameState("grade-select")}
              className="flex-1 py-3 rounded-xl border-2 border-white/10 text-white/50 font-bold text-sm flex items-center justify-center gap-2"
              style={{ background: "rgba(255,255,255,0.05)" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen size={18} />
              {ui?.other}
            </motion.button>
          </motion.div>

          {/* PDF Download */}
          <motion.button
            onClick={() => {
              const now = new Date();
              const dateStr = `${now.getDate().toString().padStart(2, "0")}.${(now.getMonth() + 1).toString().padStart(2, "0")}.${now.getFullYear()}`;
              generateTestPdf({
                gradeLevel: country?.gradeLabel(selectedGrade!) || `${selectedGrade}. ${ui?.classLabel || 'class'}`,
                testType: testType === "klassenarbeit" ? "klassenarbeit" : "practice",
                date: dateStr,
                elapsedTime,
                questions,
                answers,
                gradeResult,
                klassenarbeitResult: klassenarbeitResult || undefined,
                studentName: user?.user_metadata?.full_name || getUsername() || user?.email?.split('@')[0] || undefined,
                countryCode: country?.code,
                schoolTasks: schoolTasks.length > 0 ? schoolTasks : undefined,
                schoolAnswers: schoolTasks.length > 0 ? schoolAnswers : undefined,
              });
            }}
            className="flex-1 py-3 rounded-xl border-2 border-sky-400/40 text-sky-400 font-bold text-sm flex items-center justify-center gap-2"
            style={{ background: "rgba(56,189,248,0.1)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={18} />
            PDF
          </motion.button>

          {/* Home */}
          <motion.button
            onClick={() => router.push("/")}
            className="py-2.5 px-6 rounded-xl bg-white/5 border border-white/10 text-white/40 text-sm font-bold flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isKlassenarbeit ? 1.2 : 0.9 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={16} />
            {ui?.home}
          </motion.button>
        </motion.div>

        {/* Milestone popup */}
        <MilestonePopup />
        </main>
        <AvatarCompanion mood={avatarMood} gender={avatarGender} activeSkin={avatarSkin} activeFace={avatarFace} activeTop={avatarTop} activeBottom={avatarBottom} activeShoe={avatarShoe} activeCape={avatarCape} activeGlasses={avatarGlasses} activeGloves={avatarGloves} activeHat={avatarHat} activeTrail={avatarTrail} />
      </>
    );
  }

  // ─── REWARD SCREEN ─────────────────────────────

  if (gameState === "reward" && cardRarity && gradeResult) {
    return (
      <>
        <RewardReveal
          rarity={cardRarity}
          game="mathtest"
          score={gradeResult.score}
          total={gradeResult.total}
          onDone={() => router.push("/")}
        />
        <AvatarCompanion mood={avatarMood} gender={avatarGender} activeSkin={avatarSkin} activeFace={avatarFace} activeTop={avatarTop} activeBottom={avatarBottom} activeShoe={avatarShoe} activeCape={avatarCape} activeGlasses={avatarGlasses} activeGloves={avatarGloves} activeHat={avatarHat} activeTrail={avatarTrail} />
      </>
    );
  }

  return null;
}
