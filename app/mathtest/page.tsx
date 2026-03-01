"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Calculator, ArrowLeft, Check, X as XIcon,
  RotateCcw, Home, BookOpen, Sparkles, Clock,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores } from "@/lib/milestones";
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
} from "@/lib/mathCurriculum";
import {
  generateTest as generateThemeBasedTest,
  getAvailableThemes,
  type Test as ThemeBasedTest,
} from "@/lib/mathTestGenerator";
import HierarchicalThemeSelector, { type Theme as ThemeSelectorTheme } from "@/components/HierarchicalThemeSelector";
import { fetchCurriculum, type CurriculumData } from "@/lib/curriculum/curriculumApi";
import curriculum1 from "@/data/mathematics/class-1/curriculum.json";
import curriculum2 from "@/data/mathematics/class-2/curriculum.json";
import curriculum3 from "@/data/mathematics/class-3/curriculum.json";
import curriculum4 from "@/data/mathematics/class-4/curriculum.json";
import curriculum5 from "@/data/mathematics/class-5/curriculum.json";
import curriculum6 from "@/data/mathematics/class-6/curriculum.json";
import curriculum7 from "@/data/mathematics/class-7/curriculum.json";
import curriculum8 from "@/data/mathematics/class-8/curriculum.json";

const CURRICULA: Record<number, typeof curriculum4> = {
  1: curriculum1, 2: curriculum2, 3: curriculum3, 4: curriculum4,
  5: curriculum5, 6: curriculum6, 7: curriculum7, 8: curriculum8,
};

/**
 * Convert Supabase CurriculumData themes to the ThemeSelectorTheme format
 */
function mapCurriculumToThemes(data: CurriculumData): ThemeSelectorTheme[] {
  return data.themes.map((t) => ({
    id: t.id,
    name: t.name,
    color: t.color,
    icon: t.icon,
    description: t.description,
    slug: t.slug,
    subtopics: t.subtopics.map((s) => ({
      id: s.id,
      name: s.name,
      color: s.color,
      icon: s.icon,
      slug: s.slug,
    })),
  }));
}
import {
  COUNTRIES,
  getCountryByCode,
  getSavedCountry,
  saveCountry,
  type CountryConfig,
} from "@/lib/mathLocale";
import {
  createTest as createSupabaseTest,
  startTest as startSupabaseTest,
  submitTest as submitSupabaseTest,
  findBlueprint,
  isSupabaseConfigured,
  type TestSession,
  type TestResultFromServer,
  type SubmitAnswer,
  type KlassenarbeitMetadata,
} from "@/lib/assessment/testFlow";
import { useAuth } from "@/lib/supabase/useAuth";
import AvatarCompanion from "@/components/AvatarCompanion";
import RealisticKlassenarbeitDisplay from "@/components/RealisticKlassenarbeitDisplay";
import KlassenarbeitHeader from "@/components/KlassenarbeitHeader";
import ExamResultsDisplay from "@/components/ExamResultsDisplay";
import MathQuestionDisplay from "@/components/MathQuestionDisplay";
import { DraftProvider } from "@/components/draft";
import { convertToExtendedQuestion, isVisualQuestion } from "@/lib/mathQuestionUtils";
import ModernPaperTest from "@/components/ModernPaperTest";
import { getActiveSkin, SKINS } from "@/lib/skins";

// ─── 3D FLOATING BACKGROUND ─────────────────────────────

const NEON_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF"];

function FloatingShape({
  position, scale, speed, rotSpeed, color, shapeType,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  rotSpeed: number;
  color: string;
  shapeType: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const startY = position[1];
  const startX = position[0];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003 * rotSpeed;
    ref.current.rotation.y += 0.005 * rotSpeed;
    ref.current.rotation.z += 0.002 * rotSpeed;
    ref.current.position.y = startY + Math.sin(state.clock.elapsedTime * speed) * 0.8;
    ref.current.position.x = startX + Math.sin(state.clock.elapsedTime * speed * 0.7 + 1) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {shapeType === 0 && <boxGeometry args={[1, 1, 1]} />}
      {shapeType === 1 && <octahedronGeometry args={[0.7]} />}
      {shapeType === 2 && <dodecahedronGeometry args={[0.6]} />}
      {shapeType === 3 && <icosahedronGeometry args={[0.6]} />}
      {shapeType === 4 && <tetrahedronGeometry args={[0.7]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.5}
        wireframe={shapeType % 2 === 0}
      />
    </mesh>
  );
}

function MathBackground() {
  const groupRef = useRef<THREE.Group>(null);
  const shapes = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10 - 3,
        ] as [number, number, number],
        scale: 0.2 + Math.random() * 0.5,
        speed: 0.2 + Math.random() * 0.6,
        rotSpeed: 0.5 + Math.random() * 1.5,
        color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
        shapeType: Math.floor(Math.random() * 5),
      })),
    [],
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </group>
  );
}

function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#FFD700" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#00D4FF" />
      <pointLight position={[0, 8, -5]} intensity={0.2} color="#FF2D78" />
      <fog attach="fog" args={["#0A0A1A", 8, 25]} />
      <MathBackground />
    </Canvas>
  );
}

// ─── 3D GRADE REVEAL ─────────────────────────────

function ParticleDot({
  pos, scale, speed, color,
}: {
  pos: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = pos[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    ref.current.position.y = pos[1] + Math.cos(state.clock.elapsedTime * speed * 0.8) * 0.5;
    ref.current.position.z = pos[2] + Math.sin(state.clock.elapsedTime * speed * 0.6 + 1) * 0.3;
  });

  return (
    <mesh ref={ref} position={pos} scale={scale}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
    </mesh>
  );
}

function GradeShape({ grade }: { grade: number }) {
  const ref = useRef<THREE.Group>(null);
  const gradeColor = grade >= 4 ? "#FFD700" : grade === 3 ? "#00D4FF" : grade === 2 ? "#FF6B00" : "#FF2D78";

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  const particles = useMemo(
    () =>
      Array.from({ length: grade >= 4 ? 40 : 20 }, () => ({
        pos: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        scale: 0.03 + Math.random() * 0.08,
        speed: 0.5 + Math.random() * 2,
      })),
    [grade],
  );

  return (
    <group ref={ref}>
      {grade === 5 && (
        <mesh>
          <dodecahedronGeometry args={[1.5]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.8} wireframe />
        </mesh>
      )}
      {grade === 4 && (
        <mesh>
          <octahedronGeometry args={[1.3]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.6} wireframe />
        </mesh>
      )}
      {grade === 3 && (
        <mesh>
          <icosahedronGeometry args={[1.2]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.4} wireframe />
        </mesh>
      )}
      {grade <= 2 && (
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.3} wireframe />
        </mesh>
      )}
      {particles.map((p, i) => (
        <ParticleDot key={i} {...p} color={gradeColor} />
      ))}
    </group>
  );
}

function GradeScene({ grade }: { grade: number }) {
  const gradeColor = grade >= 4 ? "#FFD700" : grade === 3 ? "#00D4FF" : grade === 2 ? "#FF6B00" : "#FF2D78";
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "200px", height: "200px" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color={gradeColor} />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#fff" />
      <GradeShape grade={grade} />
    </Canvas>
  );
}

// ─── STREAK ─────────────────────────────

function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  if (!data) return 0;
  const { count, lastDate } = JSON.parse(data);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === today || lastDate === yesterday) return count;
  return 0;
}

function updateStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  const today = new Date().toDateString();
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    if (lastDate === today) return count;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

// ─── MAIN COMPONENT ─────────────────────────────

type GameState = "country-select" | "grade-select" | "theme-select" | "countdown" | "playing" | "grading" | "result" | "reward";
type TestType = "klassenarbeit" | null;

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
  const [countdown, setCountdown] = useState(3);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [gradingIndex, setGradingIndex] = useState(-1);
  const [gradeResult, setGradeResult] = useState<GradeResult | null>(null);
  const [cardRarity, setCardRarity] = useState<CardRarity | null>(null);
  const [saved, setSaved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [klassenarbeitResult, setKlassenarbeitResult] = useState<KlassenarbeitResult | null>(null);

  // ─── Realistic Klassenarbeit (Grouped Tasks) ───────────────────
  const [realisticKlassenarbeit, setRealisticKlassenarbeit] = useState<RealisticKlassenarbeit | null>(null);
  const [groupedTaskAnswers, setGroupedTaskAnswers] = useState<Record<string, string | number>>({});

  // ─── Klassenarbeit timer (30 minutes) ───────────────────────
  const [klassenarbeitStartTime, setKlassenarbeitStartTime] = useState<number | null>(null);
  const [klassenarbeitTimeLeft, setKlassenarbeitTimeLeft] = useState(1800); // 30 * 60 = 1800 seconds
  const klassenarbeitTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
  const [avatarSkinColor, setAvatarSkinColor] = useState('#ffd4a3');
  const [avatarOutfitColor, setAvatarOutfitColor] = useState('#4a90e2');
  const avatarMoodTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load avatar colors from active skin on mount
  useEffect(() => {
    const skinId = getActiveSkin();
    const skin = SKINS.find(s => s.id === skinId) || SKINS[0];
    setAvatarSkinColor(skin.headColor);
    setAvatarOutfitColor(skin.bodyColor);
  }, []);

  // Load saved country + grade on mount
  useEffect(() => {
    const savedCode = getSavedCountry() || "DE";
    setCountry(getCountryByCode(savedCode));
    if (savedCode) {
      setGameState("grade-select");
    }
    const prev = getMathGrade();
    if (prev) setPreviousGrade(prev);
  }, []);


  const handleCountrySelect = (c: CountryConfig) => {
    setCountry(c);
    saveCountry(c.code);
    setGameState("grade-select");
  };

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) {
      // Mark test as started in Supabase
      if (useSupabase && testSession) {
        startSupabaseTest(testSession.testId).catch((err) => console.error("[Supabase] startTest failed:", err));
      }
      lastAnswerTimeRef.current = 0;
      window.scrollTo(0, 0);
      setGameState("playing");
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 800);
    return () => clearTimeout(t);
  }, [gameState, countdown, useSupabase, testSession]);

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
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(0, 1800 - elapsed); // 30 * 60 = 1800 seconds
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
      const t = setTimeout(() => setGradingIndex((i) => i + 1), 400);
      return () => clearTimeout(t);
    } else {
      // All graded
      if (testType === "klassenarbeit") {
        // Klassenarbeit: szekciós pontozás
        const kaResult = calculateKlassenarbeitResult(questions, answers);
        setKlassenarbeitResult(kaResult);
        // GradeResult is set for compatibility, but kaResult is primary
        const gradeResult = calculateGradeResult(kaResult.totalPoints, kaResult.maxTotalPoints);
        setGradeResult(gradeResult);
      } else {
        // Practice: egyszerű pontozás
        const score = answers.reduce<number>(
          (acc, a, i) => acc + (a === questions[i].correctAnswer ? 1 : 0),
          0,
        );
        const result = calculateGradeResult(score, questions.length);
        setGradeResult(result);
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setGameState("result");
      }, 600);
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
    const rarity = calculateRarity(gradeResult.score, gradeResult.total, streak);
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

    // In Supabase mode, stats are tracked server-side.
    // Still update local stats as fallback / offline cache.
    const topicResults = questions.map((q, i) => ({
      topic: q.topic,
      correct: answers[i] === q.correctAnswer,
    }));
    updateMathStats(selectedGrade, gradeResult.percentage, topicResults);

    incrementTotalGames();
    if (gradeResult.percentage === 100) incrementPerfectScores();
  }, [gameState, saved, gradeResult, selectedGrade, questions, answers]);

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

  // Resolved themes: prefer Supabase, fall back to JSON
  const resolvedThemes = useMemo((): ThemeSelectorTheme[] => {
    if (supabaseCurriculum && supabaseCurriculum.themes.length > 0) {
      return mapCurriculumToThemes(supabaseCurriculum);
    }
    const fallback = selectedGrade ? CURRICULA[selectedGrade] : null;
    if (fallback) return fallback.themes as unknown as ThemeSelectorTheme[];
    return [];
  }, [supabaseCurriculum, selectedGrade]);

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
    answerTimesRef.current = [];
    lastAnswerTimeRef.current = 0;

    // ─── Initialize 40-minute timer ─────────────────────
    const now = Date.now();
    setKlassenarbeitStartTime(now);
    setKlassenarbeitTimeLeft(40 * 60); // 40 minutes = 2400 seconds
    localStorage.setItem("klassenarbeitStartTime", now.toString());

    try {
      // ─── Collect task IDs from selected subtopics ─────────────
      // Works with both JSON themes (slug-based) and Supabase themes (UUID-based)
      const allTaskIds: string[] = [];
      const taskFilesNeeded = new Set<string>();

      // Build a slug→subtopic lookup from JSON curriculum for fallback matching
      const gradeCurriculum = CURRICULA[selectedGrade!];
      const jsonSubtopicMap = new Map<string, { taskFile: string; taskIds: string[] }>();
      if (gradeCurriculum) {
        for (const theme of gradeCurriculum.themes) {
          for (const sub of theme.subtopics) {
            jsonSubtopicMap.set(sub.id, { taskFile: sub.taskFile, taskIds: sub.taskIds });
          }
        }
      }

      // Iterate through resolvedThemes to find selected subtopics
      for (const theme of resolvedThemes) {
        for (const subtopic of theme.subtopics) {
          if (!selectedSubtopics.includes(subtopic.id)) continue;

          // Case 1: JSON theme (has taskFile + taskIds)
          if (subtopic.taskFile && subtopic.taskIds) {
            allTaskIds.push(...subtopic.taskIds);
            taskFilesNeeded.add(subtopic.taskFile);
          }
          // Case 2: Supabase theme (UUID-based) → match by slug to JSON
          else if (subtopic.slug) {
            const jsonMatch = jsonSubtopicMap.get(subtopic.slug);
            if (jsonMatch) {
              allTaskIds.push(...jsonMatch.taskIds);
              taskFilesNeeded.add(jsonMatch.taskFile);
            }
          }
        }
      }

      // If no tasks found via themes, try all JSON subtopics as last resort
      if (allTaskIds.length === 0 && gradeCurriculum) {
        for (const theme of gradeCurriculum.themes) {
          for (const sub of theme.subtopics) {
            allTaskIds.push(...sub.taskIds);
            taskFilesNeeded.add(sub.taskFile);
          }
        }
      }

      if (allTaskIds.length === 0) {
        throw new Error("No tasks found for selected subtopics");
      }

      console.log(`[Multi-Theme Test] Collected ${allTaskIds.length} tasks from ${selectedSubtopics.length} subtopics`);

      // Load all relevant task files
      const allTasks: any[] = [];

      // Load and parse JSON files
      for (const fileName of taskFilesNeeded) {
        try {
          const module = await import(`@/data/mathematics/class-${selectedGrade}/${fileName.replace('.json', '')}`);
          const fileData = module.default;

          if (fileData.tasks) {
            const relevantTasks = fileData.tasks.filter((task: any) => allTaskIds.includes(task.id));
            allTasks.push(...relevantTasks);
          }
        } catch (err) {
          console.error(`Failed to load ${fileName}:`, err);
        }
      }

      if (allTasks.length === 0) {
        throw new Error("Failed to load tasks");
      }

      // Shuffle and select 15 questions with balanced difficulty
      const easyTasks = allTasks.filter(t => t.difficulty === 'easy');
      const mediumTasks = allTasks.filter(t => t.difficulty === 'medium');
      const hardTasks = allTasks.filter(t => t.difficulty === 'hard');

      const shuffleArray = <T,>(arr: T[]): T[] => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

      const selectedTasks = [
        ...shuffleArray(easyTasks).slice(0, 5),      // 5 easy
        ...shuffleArray(mediumTasks).slice(0, 7),    // 7 medium
        ...shuffleArray(hardTasks).slice(0, 3),      // 3 hard
      ];

      const testTasks = shuffleArray(selectedTasks);

      // Convert to MathQuestion format
      const mathQuestions: MathQuestion[] = testTasks.map((task) => ({
        question: task.question,
        correctAnswer: task.correct,
        options: task.options.map((opt: any) => typeof opt === 'number' ? opt : parseInt(opt as string, 10)),
        topic: task.id,
        isWordProblem: false,
      }));

      console.log(`[Multi-Theme Test] Generated ${mathQuestions.length} balanced questions`);

      setQuestions(mathQuestions);
      setAnswers(new Array(mathQuestions.length).fill(null));
      setRealisticKlassenarbeit(null);
      setAvatarMood("idle");

      // Start test directly without countdown
      lastAnswerTimeRef.current = 0;
      // Scroll to top immediately
      window.scrollTo(0, 0);
      setTimeout(() => setGameState("playing"), 50);
    } catch (err) {
      console.error("[Multi-Theme Test] Failed:", err);
      alert("Error generating test. Please try again.");
    } finally {
      setGeneratingTest(false);
    }
  };

  const handleThemeSelect = async (theme: string) => {
    if (!selectedGrade || !testType) return;

    setSelectedTheme(theme);
    setCountdown(3);
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
      const mathQuestions: MathQuestion[] = themeBasedTest.tasks.map((task, index) => ({
        question: task.question,
        correctAnswer: task.correct, // Store the index, not the value
        options: task.options.map(opt => typeof opt === 'number' ? opt : parseInt(opt as string, 10)),
        topic: task.id,
        isWordProblem: false,
      }));

      setQuestions(mathQuestions);
      setAnswers(new Array(mathQuestions.length).fill(null));
      setRealisticKlassenarbeit(null);
      setAvatarMood("idle");
      setGameState("countdown");
    } catch (err) {
      console.error("[Theme Test] Failed:", err);
      alert("Error generating test. Please try again.");
      setGameState("theme-select");
    }
  };

  const handleAnswer = (questionIndex: number, answer: number) => {
    // Track time per question for Supabase submission
    if (useSupabase && answerTimesRef.current.length > 0) {
      const now = elapsedTime;
      answerTimesRef.current[questionIndex] = Math.max(1, now - lastAnswerTimeRef.current);
      lastAnswerTimeRef.current = now;
    }

    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = answer;
      return next;
    });

    // Scroll to next question (forward)
    setTimeout(() => {
      const nextQuestionIndex = questionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        const nextElement = document.querySelector(`[data-question-id="q_${nextQuestionIndex}"]`);
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
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

  const handleSubmit = async () => {
    if (useSupabase && testSession) {
      // ─── Server-side grading flow ─────────────────
      setSubmitting(true);
      try {
        // Build answer payload
        const submitAnswers: SubmitAnswer[] = answers.map((a, i) => ({
          question_index: i,
          answer: a ?? 0,
          time_spent_sec: answerTimesRef.current[i] || Math.ceil(elapsedTime / questions.length),
        }));

        // Prepare Klassenarbeit metadata if applicable
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

        // Convert server result to local GradeResult format for UI compatibility
        const gradeRes = calculateGradeResult(result.score, result.max_score);
        setGradeResult(gradeRes);
        setSubmitting(false);

        // Skip grading animation, go straight to result
        setGameState("result");
      } catch (err) {
        console.error("[Supabase] submitTest failed:", err);
        // Fallback: grade locally if server fails
        setSubmitting(false);
        setGradingIndex(0);
        setGameState("grading");
      }
    } else {
      // ─── Local grading flow (guest mode) ──────────
      setGradingIndex(0);
      setGameState("grading");
    }
  };

  const handlePlayAgain = () => {
    if (selectedGrade) {
      setSelectedSubtopics([]);
      setGameState("theme-select");
    }
  };

  const allAnswered = realisticKlassenarbeit
    ? realisticKlassenarbeit.tasks.every((task) =>
        task.subQuestions.every((sq) => `task_${task.taskNumber - 1}_${sq.id}` in groupedTaskAnswers)
      )
    : answers.every((a) => a !== null);

  const ui = country?.ui;

  // ─── COUNTRY SELECT SCREEN ─────────────────────────────

  if (gameState === "country-select") {
    return (
      <>
        <main className="min-h-screen relative overflow-hidden bg-bg">
          <Scene3D />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
          {/* Back */}
          <motion.div className="absolute top-6 left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/">
              <motion.div
                className="p-2 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={20} className="text-white/60" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,215,0,0.1)", boxShadow: "0 0 30px rgba(255,215,0,0.15)" }}
            >
              <Calculator
                size={40}
                className="text-gold"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))" }}
              />
            </motion.div>
            <h1
              className="text-3xl font-black text-white tracking-wider"
              style={{ textShadow: "0 0 20px rgba(255,215,0,0.3)" }}
            >
              MATH TEST
            </h1>
          </motion.div>

          {/* Country question */}
          <motion.p
            className="text-white/60 text-lg font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welches Land besuchst du die Schule?
          </motion.p>

          {/* Country buttons */}
          <motion.div
            className="flex flex-col gap-3 w-full max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {COUNTRIES.map((c, i) => (
              <motion.button
                key={c.code}
                onClick={() => handleCountrySelect(c)}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,215,0,0.08)", borderColor: "rgba(255,215,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-3xl">{c.flag}</span>
                <span className="text-white/70 font-bold text-sm">{c.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
        </main>
        <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
      </>
    );
  }

  // ─── GRADE SELECT SCREEN ─────────────────────────────

  // ─── THEME SELECT SCREEN (Hierarchical) ─────────────────────────────

  if (gameState === "theme-select" && country && selectedGrade && testType) {
    return (
      <>
        <main className="min-h-screen relative overflow-hidden bg-bg">
          <Scene3D />
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
            {/* Back Button */}
            <motion.div className="absolute top-6 left-6 md:top-8 md:left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.button
                onClick={() => setGameState("grade-select")}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={24} className="text-white" />
              </motion.button>
            </motion.div>

            {/* Hierarchical Theme Selector */}
            <HierarchicalThemeSelector
              themes={resolvedThemes}
              selectedSubtopics={selectedSubtopics}
              onSubtopicToggle={handleSubtopicToggle}
              onPreview={handlePreviewSubtopic}
              onStartTest={handleStartMultiThemeTest}
              onClearSelection={() => setSelectedSubtopics([])}
              loading={generatingTest || curriculumLoading}
            />
          </div>
        </main>
        <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
      </>
    );
  }


  // ─── GRADE SELECT SCREEN ─────────────────────────────

  if (gameState === "grade-select" && country) {
    return (
      <>
        <main className="min-h-screen relative overflow-hidden bg-bg">
          <Scene3D />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
          {/* Back */}
          <motion.div className="absolute top-6 left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/">
              <motion.div
                className="p-2 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={20} className="text-white/60" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Country flag - tap to change */}
          <motion.button
            className="absolute top-6 right-6 text-2xl p-2 rounded-xl bg-white/5 border border-white/10"
            onClick={() => setGameState("country-select")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {country.flag}
          </motion.button>

          {/* Title */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,215,0,0.1)", boxShadow: "0 0 30px rgba(255,215,0,0.15)" }}
            >
              <Calculator
                size={40}
                className="text-gold"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))" }}
              />
            </motion.div>
            <h1
              className="text-3xl font-black text-white tracking-wider"
              style={{ textShadow: "0 0 20px rgba(255,215,0,0.3)" }}
            >
              {ui?.title}
            </h1>
            <p className="text-white/40 text-sm font-medium">{getPeriodLabel(getPeriod(), country?.code)}</p>
          </motion.div>

          {/* Question */}
          <motion.p
            className="text-white/60 text-lg font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {ui?.gradeQuestion}
          </motion.p>

          {/* Grade buttons */}
          <motion.div
            className="grid grid-cols-4 gap-3 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {country.grades.map((grade, i) => (
              <motion.button
                key={grade}
                onClick={() => handleGradeSelect(grade)}
                className="relative w-16 h-16 rounded-2xl font-black text-2xl border transition-all"
                style={{
                  background: previousGrade === grade ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.05)",
                  borderColor: previousGrade === grade ? "rgba(255,215,0,0.4)" : "rgba(255,255,255,0.1)",
                  color: previousGrade === grade ? "#FFD700" : "rgba(255,255,255,0.7)",
                  boxShadow: previousGrade === grade ? "0 0 20px rgba(255,215,0,0.2)" : undefined,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,215,0,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                {grade}.
                {previousGrade === grade && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-gold/50 font-bold whitespace-nowrap">
                    {ui?.lastUsed || "LEGUTÓBB"}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
        </main>
        <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
      </>
    );
  }

  // ─── COUNTDOWN ─────────────────────────────

  if (gameState === "countdown") {
    return (
      <>
        <main className="min-h-screen bg-bg flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={countdown}
              className="text-8xl font-black text-gold"
              style={{ textShadow: "0 0 40px rgba(255,215,0,0.5)" }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {countdown > 0 ? countdown : "✏️"}
            </motion.div>
          </AnimatePresence>
        </main>
        <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
      </>
    );
  }

  // ─── TEST PAPER (PLAYING & GRADING) ─────────────────────────────

  if (gameState === "playing" || gameState === "grading") {
    const isGrading = gameState === "grading";

    return (
      <DraftProvider>
      <>
        <ModernPaperTest
          title={ui?.title || "MATEMATIKA DOLGOZAT"}
          gradeLabel={`${selectedGrade}. ${ui?.classLabel || "Osztály"}`}
          date={new Date().toISOString()}
          timeLeft={testType === "klassenarbeit" ? klassenarbeitTimeLeft : elapsedTime}
          solved={answers.filter((a) => a !== null).length}
          total={questions.length}
          isGrading={isGrading}
          onExit={() => setGameState("grade-select")}
          userName={user?.user_metadata?.full_name || user?.email || undefined}
        >
          <div>
          <div className="relative max-w-lg mx-auto" style={{ borderLeft: "2px solid rgba(220, 100, 100, 0.4)" }}>
            <div className="px-4 sm:px-6 py-4 pb-4" style={{ paddingTop: "0" }}>
              {/* Header */}
              {realisticKlassenarbeit && testType === "klassenarbeit" && selectedGrade ? (
                <KlassenarbeitHeader
                  grade={selectedGrade}
                  subject={country?.name === "Hungary" ? "Matematika" : country?.name === "Germany" ? "Mathematik" : country?.name === "Romania" ? "Matematică" : "Mathematics"}
                  startTime={Date.now()}
                />
              ) : null}

              {/* Realistic Klassenarbeit (Grouped Tasks) */}
              {realisticKlassenarbeit && (
                <RealisticKlassenarbeitDisplay
                  tasks={realisticKlassenarbeit.tasks}
                  answers={groupedTaskAnswers}
                  onAnswerChange={handleGroupedTaskAnswer}
                  isGrading={isGrading}
                  gradeIndex={gradingIndex}
                  testId={`ka_${selectedGrade}_${testType}`}
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
                          {question.maxPoints && <span className="ml-2 text-gray-500 font-normal">({question.maxPoints} pont)</span>}
                        </h3>
                      </motion.div>
                    )}

                    {/* Use MathQuestionDisplay for all questions - includes inline draft */}
                    <MathQuestionDisplay
                      question={convertToExtendedQuestion(question)}
                      selectedAnswer={answers[qi]}
                      onSelectAnswer={(optIdx) => !isGrading && handleAnswer(qi, question.options[optIdx])}
                      showResult={isGrading && isGraded}
                      isCorrect={isCorrect}
                      useTextInput={true}
                      onTextAnswer={(textAnswer) => {
                        const numAnswer = parseInt(textAnswer);
                        if (!isNaN(numAnswer)) {
                          handleAnswer(qi, numAnswer);
                        }
                      }}
                      testId={`test_${selectedGrade}_${testType}`}
                      questionId={`q_${qi}`}
                    />

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
            </div>

            {/* Floating Absence Button - Center bottom, above avatar */}
            {!isGrading && (
              <motion.div
                className="fixed left-1/2 -translate-x-1/2 bottom-24 z-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.button
                  onClick={() => {
                    if (answers.some((a) => a !== null)) {
                      setGameState("grading");
                    }
                  }}
                  disabled={!answers.some((a) => a !== null)}
                  className={`px-8 py-3 rounded-lg font-bold shadow-lg transition-all ${
                    answers.some((a) => a !== null)
                      ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                  }`}
                  whileHover={answers.some((a) => a !== null) ? { scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)" } : {}}
                  whileTap={answers.some((a) => a !== null) ? { scale: 0.95 } : {}}
                >
                  Anfrage
                </motion.button>
              </motion.div>
            )}


          </div>
        </div>
        </ModernPaperTest>
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
          <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
        </div>
      </>
      </DraftProvider>
    );
  }

  // ─── RESULT SCREEN ─────────────────────────────

  if (gameState === "result" && gradeResult) {
    // Klassenarbeit vs Practice display
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
                  <div
                    className="text-8xl font-black mb-3"
                    style={{ color: klassenarbeitResult.note.color }}
                  >
                    {klassenarbeitResult.note.emoji} {klassenarbeitResult.note.value}
                  </div>
                  <p
                    className="text-3xl font-black"
                    style={{ color: klassenarbeitResult.note.color }}
                  >
                    {klassenarbeitResult.note.label}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    {klassenarbeitResult.totalPoints}/{klassenarbeitResult.maxTotalPoints} Pont ({klassenarbeitResult.percentage}%)
                  </p>
                </div>

                {/* Stars earned */}
                {klassenarbeitResult.starsEarned > 0 && (
                  <p className="text-yellow-400 text-lg font-bold">
                    {klassenarbeitResult.note.emoji} +{klassenarbeitResult.starsEarned} csillag
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
                {country?.gradeLabel(selectedGrade!) || `${selectedGrade}. osztály`} &bull;{" "}
                {Math.floor(elapsedTime / 60)}:{(elapsedTime % 60).toString().padStart(2, "0")}
              </p>
              {serverResult && serverResult.stars_earned > 0 && (
                <p className="text-yellow-400 text-sm mt-2 font-bold">
                  +{serverResult.stars_earned} star &bull; +{serverResult.xp_earned} XP
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
        <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
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
        <AvatarCompanion mood={avatarMood} skinColor={avatarSkinColor} outfitColor={avatarOutfitColor} />
      </>
    );
  }

  return null;
}
