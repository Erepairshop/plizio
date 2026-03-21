"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, X as XIcon, Home, RotateCcw } from "lucide-react";
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
import { K5_CURRICULUM, getK5Questions } from "@/lib/biologieCurriculum";
import type { BiologieQuestion } from "@/lib/biologieCurriculum";
import { getUsername } from "@/lib/username";
import { playCorrect, playIncorrect } from "@/lib/soundEffects";

type Screen = "topic-select" | "playing" | "reward" | "levelComplete" | "levelFailed";

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

  // Test state
  const [screen, setScreen] = useState<Screen>("topic-select");
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [questions, setQuestions] = useState<BiologieQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [earnedCard, setEarnedCard] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [milestones, setMilestones] = useState<string[]>([]);
  const avatarMoodRef = useRef<"idle" | "focused" | "happy" | "disappointed">("idle");

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

  const startTest = () => {
    if (selectedTopics.size === 0) return;
    const subtopicIds = Array.from(selectedTopics);
    const qs = getK5Questions(subtopicIds, 10);
    setQuestions(qs);
    setUserAnswers(new Array(qs.length).fill(null));
    setCurrentIndex(0);
    setUserAnswer("");
    setSubmitted(false);
    setScore(0);
    avatarMoodRef.current = "focused";
    setScreen("playing");
  };

  // Answer submission
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
      // Test finished
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
      setMilestones(newMilestones);
      setEarnedCard(rarity);
      setScreen("reward");
    }
  };

  const currentQuestion = questions[currentIndex];
  const currentAnswer = userAnswers[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1A] via-[#1a1a3e] to-[#0A0A1A] text-white overflow-hidden relative">
      {/* Floating background */}
      <div className="absolute inset-0 pointer-events-none">
        {["🧬", "🔬", "🧪"].map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-5"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      {/* Avatar */}
      <div className="fixed bottom-4 right-4 z-20 w-32 h-32">
        <AvatarCompanion
          fixed={true}
          gender={gender}
          activeSkin={activeSkin}
          activeFace={activeFace}
          activeTop={activeTop}
          activeBottom={activeBottom}
          activeShoe={activeShoe}
          activeCape={activeCape}
          activeGlasses={activeGlasses}
          activeGloves={activeGloves}
          activeHat={activeHat}
          activeTrail={activeTrail}
          mood={avatarMoodRef.current}
        />
      </div>

      {/* Topic Selection Screen */}
      {screen === "topic-select" && (
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-2xl w-full">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                🧬 BIOLOGIE TEST
              </h1>
              <p className="text-white/70">Klasse 5 — Wähle deine Themen</p>
            </div>

            {/* Topics Grid */}
            <div className="grid gap-4 mb-8">
              {K5_CURRICULUM.map((topic) => (
                <div key={topic.id} className="space-y-2">
                  <h3 className="text-lg font-bold text-white/90">{topic.icon} {topic.name}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {topic.subtopics.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => toggleTopic(sub.id)}
                        className={`p-3 rounded-lg font-semibold text-sm transition-all ${
                          selectedTopics.has(sub.id)
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/50"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Start Button */}
            <div className="flex gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 transition-colors font-semibold"
              >
                <ArrowLeft size={20} /> Zurück
              </Link>
              <button
                onClick={startTest}
                disabled={selectedTopics.size === 0}
                className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                TEST STARTEN → ({selectedTopics.size} Themen)
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Playing Screen */}
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
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
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
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
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
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
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
                  setSelectedTopics(new Set());
                }}
                className="px-6 py-3 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 font-semibold transition-colors"
              >
                Beenden
              </button>
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!userAnswer}
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Check size={20} className="inline mr-2" /> Abgeben
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all"
                >
                  {currentIndex < questions.length - 1 ? "Weiter →" : "Ergebnis →"}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Reward Screen */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="biologietest"
          score={score}
          total={questions.length}
          onDone={() => setScreen("levelComplete")}
        />
      )}

      {/* Result Screen */}
      {screen === "levelComplete" && (
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              🎉 Test beendet!
            </h1>
            <p className="text-5xl font-black mb-4 text-white">{score}/{questions.length}</p>
            <p className="text-white/70 mb-8">
              {Math.round((score / questions.length) * 100)}% richtig
            </p>

            {milestones.length > 0 && (
              <MilestonePopup
                milestones={milestones}
                onDone={() => {}}
              />
            )}

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setScreen("topic-select");
                  setQuestions([]);
                  setSelectedTopics(new Set());
                }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg hover:shadow-lg transition-all"
              >
                <RotateCcw size={20} className="inline mr-2" /> Nochmal
              </button>
              <Link
                href="/"
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
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
