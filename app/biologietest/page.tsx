"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { K5_CURRICULUM, getK5Questions } from "@/lib/biologieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/biologieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/biologieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/biologieCurriculum8";
import type { BiologieQuestion } from "@/lib/biologieCurriculum5";
// Import generators so they self-register via setKNGeneratorMap
import "@/lib/biologieGenerators5";
import "@/lib/biologieGenerators6";
import "@/lib/biologieGenerators7";
import "@/lib/biologieGenerators8";
import { playCorrect, playIncorrect } from "@/lib/soundEffects";

type Screen = "grade-select" | "topic-select" | "playing" | "reward" | "levelComplete";

type Grade = 5 | 6 | 7 | 8;

const GRADE_DEFS: Record<Grade, {
  label: string;
  subtitle: string;
  color: string;
  curriculum: typeof K5_CURRICULUM;
  getQuestions: (ids: string[], count: number) => BiologieQuestion[];
}> = {
  5: {
    label: "Klasse 5",
    subtitle: "Wirbeltiere · Pflanzen · Körper",
    color: "#4CAF50",
    curriculum: K5_CURRICULUM,
    getQuestions: getK5Questions,
  },
  6: {
    label: "Klasse 6",
    subtitle: "Wirbellose · Ökosystem · Kreislauf",
    color: "#2ECC71",
    curriculum: K6_CURRICULUM,
    getQuestions: getK6Questions,
  },
  7: {
    label: "Klasse 7",
    subtitle: "Zellen · Stoffwechsel · Ökologie",
    color: "#3498DB",
    curriculum: K7_CURRICULUM,
    getQuestions: getK7Questions,
  },
  8: {
    label: "Klasse 8",
    subtitle: "Genetik · Hormone · Biotechnologie",
    color: "#9B59B6",
    curriculum: K8_CURRICULUM,
    getQuestions: getK8Questions,
  },
};

export default function BiologieTestPage() {
  // Avatar setup
  const [gender] = useState(getGender());
  const [activeSkin] = useState(getSkinDef(getActiveSkin()));
  const [activeFace] = useState(getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
  const [activeTrail] = useState(() => { const id = getActiveTrail(); return id ? getTrailDef(id) : null; });

  const avatarProps = {
    gender, activeSkin, activeFace, activeTop, activeBottom, activeShoe,
    activeCape, activeGlasses, activeGloves, activeHat, activeTrail,
  };

  // Test state
  const [screen, setScreen] = useState<Screen>("grade-select");
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [questions, setQuestions] = useState<BiologieQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [earnedCard, setEarnedCard] = useState<import("@/lib/cards").CardRarity | null>(null);
  const [score, setScore] = useState(0);
  const [milestones, setMilestones] = useState<string[]>([]);
  const avatarMoodRef = useRef<"idle" | "focused" | "happy" | "disappointed">("idle");

  const gradeColor = selectedGrade ? GRADE_DEFS[selectedGrade].color : "#4CAF50";

  // Topic selection
  const toggleTopic = (topicId: string) => {
    const newSet = new Set(selectedTopics);
    if (newSet.has(topicId)) {
      newSet.delete(topicId);
    } else {
      newSet.add(topicId);
    }
    setSelectedTopics(newSet);
  };

  const selectGrade = (grade: Grade) => {
    setSelectedGrade(grade);
    setSelectedTopics(new Set());
    setScreen("topic-select");
  };

  const startTest = () => {
    if (!selectedGrade || selectedTopics.size === 0) return;
    const def = GRADE_DEFS[selectedGrade];
    const subtopicIds = Array.from(selectedTopics);
    const qs = def.getQuestions(subtopicIds, 10);
    setQuestions(qs);
    setUserAnswers(new Array(qs.length).fill(null));
    setCurrentIndex(0);
    setUserAnswer("");
    setSubmitted(false);
    setScore(0);
    avatarMoodRef.current = "focused";
    setScreen("playing");
  };

  const handleSubmit = () => {
    if (!questions[currentIndex] || submitted) return;
    const q = questions[currentIndex];
    let isCorrect = false;

    if (q.type === "mcq") {
      const userIndex = parseInt(userAnswer);
      isCorrect = userIndex === q.correct;
    } else if (q.type === "typing") {
      const expected = Array.isArray(q.answer) ? q.answer : [q.answer];
      isCorrect = expected.some((e) =>
        userAnswer.toLowerCase().trim() === e.toLowerCase().trim()
      );
    }

    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = isCorrect ? "1" : "0";
    setUserAnswers(newAnswers);
    setSubmitted(true);

    if (isCorrect) {
      playCorrect();
      setScore((s) => s + 1);
      avatarMoodRef.current = "happy";
    } else {
      playIncorrect();
      avatarMoodRef.current = "disappointed";
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      setSubmitted(false);
      avatarMoodRef.current = "focused";
    } else {
      const rarity = calculateRarity(score, questions.length, 0, false);
      saveCard({
        id: generateCardId(),
        game: "biologietest",
        rarity,
        score,
        total: questions.length,
        date: new Date().toISOString(),
      });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      if (score === questions.length) incrementPerfectScores();
      const newMilestones = checkNewMilestones();
      setMilestones(newMilestones.map((m: any) => m.id ?? m));
      setEarnedCard(rarity);
      setScreen("reward");
    }
  };

  const resetToGradeSelect = () => {
    setScreen("grade-select");
    setSelectedGrade(null);
    setSelectedTopics(new Set());
    setQuestions([]);
    setScore(0);
    setCurrentIndex(0);
    avatarMoodRef.current = "idle";
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1A] via-[#0a1a0a] to-[#0A0A1A] text-white overflow-hidden relative">
      {/* Floating background */}
      <div className="absolute inset-0 pointer-events-none">
        {["🧬", "🔬", "🧪", "🌿", "🦠"].map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-5"
            style={{ left: `${10 + i * 18}%`, top: `${10 + i * 15}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      {/* Avatar */}
      <AvatarCompanion fixed={true} {...avatarProps} mood={avatarMoodRef.current} />

      {/* ── GRADE SELECT ──────────────────────────────────────────────────── */}
      {screen === "grade-select" && (
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-md w-full">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                🧬 BIOLOGIE TEST
              </h1>
              <p className="text-white/60 font-medium">Wähle deine Klasse</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {([5, 6, 7, 8] as Grade[]).map((grade) => {
                const def = GRADE_DEFS[grade];
                return (
                  <motion.button
                    key={grade}
                    onClick={() => selectGrade(grade)}
                    className="rounded-2xl p-5 text-left flex flex-col gap-2 border-2 transition-all"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${def.color}18 0%, rgba(255,255,255,0.03) 100%)`,
                      borderColor: `${def.color}44`,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-3xl">
                      {grade === 5 ? "🐟" : grade === 6 ? "🌲" : grade === 7 ? "🔬" : "🧬"}
                    </span>
                    <div>
                      <p className="font-black text-white text-base">{def.label}</p>
                      <p className="text-xs mt-1 font-medium leading-snug" style={{ color: `${def.color}cc` }}>
                        {def.subtitle}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 transition-colors font-semibold"
            >
              <Home size={18} /> Hauptmenü
            </Link>
          </div>
        </motion.div>
      )}

      {/* ── TOPIC SELECT ──────────────────────────────────────────────────── */}
      {screen === "topic-select" && selectedGrade && (
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8">
              <h1
                className="text-4xl font-black mb-2"
                style={{ color: gradeColor }}
              >
                🧬 {GRADE_DEFS[selectedGrade].label}
              </h1>
              <p className="text-white/60">Wähle deine Themen</p>
            </div>

            <div className="grid gap-4 mb-8">
              {GRADE_DEFS[selectedGrade].curriculum.map((topic) => (
                <div key={topic.id} className="space-y-2">
                  <h3 className="text-base font-bold text-white/90">
                    {topic.icon} {topic.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {topic.subtopics.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => toggleTopic(sub.id)}
                        className={`p-3 rounded-lg font-semibold text-sm transition-all text-left ${
                          selectedTopics.has(sub.id)
                            ? "text-white shadow-lg"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                        style={
                          selectedTopics.has(sub.id)
                            ? { background: gradeColor, boxShadow: `0 4px 16px ${gradeColor}44` }
                            : {}
                        }
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setScreen("grade-select")}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 transition-colors font-semibold"
              >
                <ArrowLeft size={18} /> Zurück
              </button>
              <button
                onClick={startTest}
                disabled={selectedTopics.size === 0}
                className="flex-1 px-6 py-3 rounded-xl text-white font-bold text-base hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{ background: selectedTopics.size > 0 ? `linear-gradient(135deg, ${gradeColor}, ${gradeColor}cc)` : undefined }}
              >
                TEST STARTEN → ({selectedTopics.size} Themen)
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── PLAYING ───────────────────────────────────────────────────────── */}
      {screen === "playing" && currentQuestion && (
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-2xl w-full">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-white/70 text-sm mb-2">
                <span>Aufgabe {currentIndex + 1}/{questions.length}</span>
                <span>{score} richtig</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ background: gradeColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
              <p className="text-xl font-semibold mb-6 text-white">{currentQuestion.question}</p>

              {currentQuestion.type === "mcq" ? (
                <div className="grid gap-3">
                  {currentQuestion.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => !submitted && setUserAnswer(String(i))}
                      disabled={submitted}
                      className={`p-4 rounded-lg font-semibold text-left transition-all ${
                        submitted
                          ? i === currentQuestion.correct
                            ? "bg-green-500 text-white"
                            : userAnswer === String(i)
                            ? "bg-red-500 text-white"
                            : "bg-white/5 text-white/70"
                          : userAnswer === String(i)
                          ? "text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                      style={
                        !submitted && userAnswer === String(i)
                          ? { background: gradeColor }
                          : {}
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => !submitted && setUserAnswer(e.target.value)}
                  disabled={submitted}
                  placeholder="Deine Antwort..."
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-green-500"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !submitted) handleSubmit();
                  }}
                />
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setScreen("topic-select");
                  setQuestions([]);
                }}
                className="px-6 py-3 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 font-semibold transition-colors"
              >
                Beenden
              </button>
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!userAnswer}
                  className="flex-1 px-6 py-3 rounded-lg text-white font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  style={{ background: `linear-gradient(135deg, ${gradeColor}, ${gradeColor}cc)` }}
                >
                  <Check size={20} className="inline mr-2" /> Abgeben
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 rounded-lg text-white font-bold hover:shadow-lg transition-all"
                  style={{ background: `linear-gradient(135deg, ${gradeColor}, ${gradeColor}cc)` }}
                >
                  {currentIndex < questions.length - 1 ? "Weiter →" : "Ergebnis →"}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* ── REWARD ────────────────────────────────────────────────────────── */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="biologietest"
          score={score}
          total={questions.length}
          onDone={() => setScreen("levelComplete")}
        />
      )}

      {/* ── RESULT ────────────────────────────────────────────────────────── */}
      {screen === "levelComplete" && (
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              🎉 Test beendet!
            </h1>
            {selectedGrade && (
              <p className="text-white/50 text-sm mb-2 font-medium">{GRADE_DEFS[selectedGrade].label}</p>
            )}
            <p className="text-5xl font-black mb-3 text-white">{score}/{questions.length}</p>
            <p className="text-white/70 mb-8">
              {Math.round((score / questions.length) * 100)}% richtig
            </p>

            {milestones.length > 0 && <MilestonePopup />}

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setScreen("topic-select");
                  setQuestions([]);
                  setSelectedTopics(new Set());
                }}
                className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-lg transition-all"
                style={{ background: `linear-gradient(135deg, ${gradeColor}, ${gradeColor}cc)` }}
              >
                <RotateCcw size={20} className="inline mr-2" /> Nochmal
              </button>
              <button
                onClick={resetToGradeSelect}
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Klasse wechseln
              </button>
              <Link
                href="/"
                className="px-8 py-4 rounded-xl bg-white/5 text-white/70 font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Home size={20} /> Hauptmenü
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
