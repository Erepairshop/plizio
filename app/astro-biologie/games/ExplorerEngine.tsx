"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ExplorerEngine — Shared engine for all biology explorer games
// Each explorer only provides DATA (labels, questions, SVGs).
// This engine handles ALL UI, state, animations, scoring.
// ─────────────────────────────────────────────────────────────────────────────

import { memo, useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Volume2, Mic, MicOff, MessageCircleQuestion, Loader2 } from "lucide-react";
import { askWhyCorrect, askAITutor } from "@/lib/aiChat";

// ─────────────────────────────────────────────────────────────────────────────
// Public Types (used by content files)
// ─────────────────────────────────────────────────────────────────────────────

export interface MCQQuestion {
  question: string;        // label key
  choices: string[];       // label keys
  answer: string;          // label key (correct choice)
}

/** A single round definition */
export interface RoundDef {
  /** "info" = teach only (no question), "mcq" = multiple choice, "order" = tap-in-order */
  type: "info" | "mcq" | "order";
  /** Label key for info screen title */
  infoTitle: string;
  /** Label key for info screen text */
  infoText: string;
  /** SVG illustration function — receives lang, returns ReactNode */
  svg: (lang: string) => React.ReactNode;
  /** For "mcq": question pool (1+ questions) */
  questions?: MCQQuestion[];
  /** For "order": correct sequence of label keys */
  orderSequence?: readonly string[];
  /** Optional hint label key (shown below info text) */
  hintKey?: string;
  /** Optional extra info text lines (label keys) — shown as bullet points below main text */
  bulletKeys?: string[];
}

/** Full explorer content definition */
export interface ExplorerDef {
  /** Labels object: Record<langCode, Record<labelKey, string>> */
  labels: Record<string, Record<string, string>>;
  /** 5 rounds */
  rounds: RoundDef[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Engine Props
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  def: ExplorerDef;
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Common UI labels (not content-specific)
const UI_LABELS: Record<string, Record<string, string>> = {
  en: { gotIt: "Got it! →", next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite!", orderInProgress: "Keep going!", orderDone: "Perfect! ✓", askWhy: "Why?", askAnything: "Ask anything...", listening: "Listening...", thinking: "Thinking...", aiError: "Couldn't get an answer. Try again!" },
  de: { gotIt: "Verstanden! →", next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz!", orderInProgress: "Weiter so!", orderDone: "Perfekt! ✓", askWhy: "Warum?", askAnything: "Frag etwas...", listening: "Hört zu...", thinking: "Denkt nach...", aiError: "Keine Antwort möglich. Versuch nochmal!" },
  hu: { gotIt: "Értem! →", next: "Tovább", finish: "Kész", correct: "Helyes! ✓", wrong: "Nem egészen!", orderInProgress: "Folytasd!", orderDone: "Tökéletes! ✓", askWhy: "Miért?", askAnything: "Kérdezz bármit...", listening: "Hallgatom...", thinking: "Gondolkodom...", aiError: "Nem sikerült válaszolni. Próbáld újra!" },
  ro: { gotIt: "Înțeles! →", next: "Următorul", finish: "Gata", correct: "Corect! ✓", wrong: "Nu tocmai!", orderInProgress: "Continuă!", orderDone: "Perfect! ✓", askWhy: "De ce?", askAnything: "Întreabă orice...", listening: "Ascult...", thinking: "Mă gândesc...", aiError: "Nu am putut răspunde. Încearcă din nou!" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Engine Component
// ─────────────────────────────────────────────────────────────────────────────

type Phase = "info" | "question";

function ExplorerEngine({ def, color = "#3B82F6", onDone, onClose, lang = "en" }: Props) {
  const langCode = lang || "en";
  const t = def.labels[langCode] || def.labels.en;
  const ui = UI_LABELS[langCode] || UI_LABELS.en;
  const rounds = def.rounds;
  const totalRounds = rounds.length;

  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<Phase>("info");
  const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]);
  const [orderWrong, setOrderWrong] = useState(false);

  // AI tutor state
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  const recognitionRef = useRef<any>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  const currentRound = rounds[round];

  // Shuffle order sequence once per mount
  const shuffledOrders = useMemo(() => {
    return rounds.map((r) =>
      r.type === "order" && r.orderSequence
        ? shuffle([...r.orderSequence])
        : []
    );
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  // Shuffle MCQ pools for review rounds (rounds with multiple questions)
  const shuffledQuestions = useMemo(() => {
    return rounds.map((r) =>
      r.questions && r.questions.length > 1 ? shuffle(r.questions) : r.questions || []
    );
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  // Get current MCQ question
  const getCurrentQuestion = useCallback((): MCQQuestion | null => {
    if (currentRound.type !== "mcq") return null;
    const pool = shuffledQuestions[round];
    if (!pool || pool.length === 0) return null;
    if (pool.length === 1) return pool[0];
    return pool[subIdx] || null;
  }, [round, subIdx, currentRound, shuffledQuestions]);

  // How many sub-questions in this round?
  const subCount = useMemo(() => {
    if (currentRound.type !== "mcq") return 0;
    const pool = shuffledQuestions[round];
    return pool ? pool.length : 0;
  }, [round, currentRound, shuffledQuestions]);

  const advanceRound = useCallback(() => {
    if (round < totalRounds - 1) {
      setRound(round + 1);
      setPhase("info");
      setSubIdx(0);
      setSelected(null);
      setLocked(false);
      setTapped([]);
      setOrderWrong(false);
    } else {
      onDone?.(scoreRef.current, totalRef.current);
    }
  }, [round, totalRounds, onDone]);

  const handleNext = useCallback(() => {
    if (currentRound.type === "info") {
      advanceRound();
    } else {
      setSelected(null);
      setLocked(false);
      setPhase("question");
    }
  }, [currentRound, advanceRound]);

  const advanceSub = useCallback(() => {
    if (currentRound.type === "mcq" && subIdx < subCount - 1) {
      setSubIdx(subIdx + 1);
      setSelected(null);
      setLocked(false);
    } else {
      advanceRound();
    }
  }, [currentRound, subIdx, subCount, advanceRound]);

  const handleAnswer = useCallback(
    (choice: string) => {
      if (locked) return;
      setSelected(choice);
      setLocked(true);

      const currentQ = getCurrentQuestion();
      if (!currentQ) return;

      totalRef.current += 1;
      if (choice === currentQ.answer) {
        scoreRef.current += 1;
      }

      if (choice === currentQ.answer) {
        // Correct — auto-advance after 1.5s
        if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
        autoAdvanceRef.current = setTimeout(() => advanceSub(), 1500);
      }
      // Wrong — NO auto-advance, user must click "Next" or "Why?"
    },
    [locked, getCurrentQuestion, advanceSub]
  );

  const handleOrderTap = useCallback(
    (key: string) => {
      if (tapped.includes(key)) return;
      const seq = currentRound.orderSequence;
      if (!seq) return;

      const nextIndex = tapped.length;
      const correct = seq[nextIndex] === key;

      if (!correct) {
        setOrderWrong(true);
        setTimeout(() => setOrderWrong(false), 400);
        return;
      }

      totalRef.current += 1;
      scoreRef.current += 1;
      const newTapped = [...tapped, key];
      setTapped(newTapped);

      if (newTapped.length === seq.length) {
        setTimeout(() => advanceRound(), 1000);
      }
    },
    [tapped, currentRound, advanceRound]
  );

  // Label lookup helper
  const L = (key: string) => t[key] || key;

  // TTS speak helper — tries to pick the best available voice
  const speak = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const targetLang = langCode === "hu" ? "hu" : langCode === "de" ? "de" : langCode === "ro" ? "ro" : "en";
    u.lang = langCode === "hu" ? "hu-HU" : langCode === "de" ? "de-DE" : langCode === "ro" ? "ro-RO" : "en-US";

    // Try to find a better voice (prefer Google/Microsoft voices over default)
    const voices = window.speechSynthesis.getVoices();
    const langVoices = voices.filter(v => v.lang.startsWith(targetLang));
    const preferred = langVoices.find(v => /google|microsoft|online|natural|neural/i.test(v.name))
      || langVoices.find(v => !v.localService) // cloud voices are usually better
      || langVoices[0];
    if (preferred) u.voice = preferred;

    // Hungarian: slower + higher pitch = less robotic
    if (langCode === "hu") {
      u.rate = 0.82;
      u.pitch = 1.1;
    } else {
      u.rate = 0.9;
      u.pitch = 1.0;
    }
    window.speechSynthesis.speak(u);
  }, [langCode]);

  // ── AI: "Why?" after wrong answer ──────────────────────────────────────
  const handleAskWhy = useCallback(async () => {
    const currentQ = getCurrentQuestion();
    if (!currentQ || !selected || aiLoading) return;

    // Stop auto-advance — user wants to read the explanation
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
    setAiActive(true);
    setAiLoading(true);
    setAiResponse(null);
    const result = await askWhyCorrect({
      question: L(currentQ.question),
      wrongAnswer: L(selected),
      correctAnswer: L(currentQ.answer),
      topic: L(currentRound.infoTitle),
      lang: langCode,
    });
    setAiLoading(false);
    if (result) {
      setAiResponse(result);
      speak(result);
    } else {
      setAiResponse(ui.aiError);
    }
  }, [getCurrentQuestion, selected, aiLoading, currentRound, langCode, speak, L, ui.aiError]);

  // ── AI: Free question (voice or text) ──────────────────────────────────
  const handleAskFree = useCallback(async (text: string) => {
    if (!text.trim() || aiLoading) return;
    setAiLoading(true);
    setAiResponse(null);
    const result = await askAITutor({
      question: text,
      context: L(currentRound.infoTitle) + " — " + L(currentRound.infoText),
      lang: langCode,
    });
    setAiLoading(false);
    if (result) {
      setAiResponse(result);
      speak(result);
    } else {
      setAiResponse(ui.aiError);
    }
  }, [aiLoading, currentRound, langCode, speak, L, ui.aiError]);

  // ── Voice recognition (STT) ────────────────────────────────────────────
  const toggleVoice = useCallback(() => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = langCode === "hu" ? "hu-HU" : langCode === "de" ? "de-DE" : langCode === "ro" ? "ro-RO" : "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setVoiceText(text);
      setIsListening(false);
      handleAskFree(text);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isListening, langCode, handleAskFree]);

  // Clear AI state on round change
  useEffect(() => {
    setAiResponse(null);
    setAiLoading(false);
    setAiActive(false);
    setVoiceText("");
  }, [round, subIdx]);

  return (
    <div className="min-h-screen bg-[#060614] text-white px-4 py-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Close button */}
      <button
        onClick={() => onClose ? onClose() : onDone?.(scoreRef.current, totalRef.current)}
        className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold z-10"
      >✕</button>

      {/* Progress dots — filled = done, outlined = current, dim = future */}
      <div className="flex gap-2 mb-6 items-center">
        {rounds.map((r, i) => {
          const done = i < round;
          const active = i === round;
          const isQuiz = r.type === "mcq" || r.type === "order";
          return (
            <div
              key={i}
              className={`rounded-full transition-all flex items-center justify-center text-[8px] font-bold ${
                done ? "w-3 h-3" : active ? "w-4 h-4" : "w-2.5 h-2.5"
              }`}
              style={{
                backgroundColor: done ? color : active ? color : "rgba(255,255,255,0.15)",
                opacity: done ? 0.6 : active ? 1 : 0.4,
              }}
            >
              {active && isQuiz ? "?" : ""}
            </div>
          );
        })}
      </div>

      {/* Main container */}
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {/* ── INFO PHASE ── */}
          {phase === "info" && (
            <motion.div
              key={`info-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-center" style={{ color }}>
                  {L(currentRound.infoTitle)}
                </h2>
                <button
                  onClick={() => speak(L(currentRound.infoTitle) + ". " + L(currentRound.infoText))}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors shrink-0"
                >
                  <Volume2 size={16} />
                </button>
              </div>

              <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10">
                {currentRound.svg(langCode)}
              </div>

              <p className="text-sm text-white/70 leading-relaxed text-center px-2">
                {L(currentRound.infoText)}
              </p>

              {/* Bullet points — key facts for teaching rounds */}
              {currentRound.bulletKeys && currentRound.bulletKeys.length > 0 && (
                <div className="w-full bg-white/5 rounded-xl p-3 space-y-1.5">
                  {currentRound.bulletKeys.map((bk, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      <span>{L(bk)}</span>
                    </div>
                  ))}
                </div>
              )}

              {currentRound.hintKey && (
                <p className="text-xs font-semibold text-center" style={{ color }}>
                  {L(currentRound.hintKey)}
                </p>
              )}

              {/* ── AI Ask Section (info phase) ── */}
              <div className="w-full flex flex-col items-center gap-2 mt-1">
                <div className="flex items-center gap-2 w-full">
                  <button
                    onClick={toggleVoice}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      isListening
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                  </button>
                  <input
                    type="text"
                    value={voiceText}
                    onChange={(e) => setVoiceText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleAskFree(voiceText); }}
                    placeholder={isListening ? ui.listening : ui.askAnything}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50"
                  />
                  {voiceText.trim() && !aiLoading && (
                    <button
                      onClick={() => handleAskFree(voiceText)}
                      className="w-10 h-10 rounded-full bg-purple-500/30 text-purple-300 flex items-center justify-center hover:bg-purple-500/40 transition-colors shrink-0"
                    >
                      <ChevronRight size={18} />
                    </button>
                  )}
                </div>

                {aiLoading && (
                  <div className="flex items-center gap-2 text-purple-300 text-xs font-medium">
                    <Loader2 size={14} className="animate-spin" />
                    {ui.thinking}
                  </div>
                )}

                {aiResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 text-sm text-white/80 leading-relaxed"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 text-base mt-0.5">🤖</span>
                      <p>{aiResponse}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              <button
                onClick={handleNext}
                className="mt-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2 group"
              >
                {currentRound.type === "info" ? ui.gotIt : ui.gotIt}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* ── MCQ PHASE ── */}
          {phase === "question" && currentRound.type === "mcq" && (
            <motion.div
              key={`q-${round}-${subIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h3 className="text-lg font-bold text-center">
                    {L(getCurrentQuestion()?.question || "")}
                  </h3>
                  <button
                    onClick={() => speak(L(getCurrentQuestion()?.question || ""))}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-colors shrink-0"
                  >
                    <Volume2 size={14} />
                  </button>
                </div>

                <div className="space-y-3">
                  {getCurrentQuestion()?.choices.map((choice, idx) => {
                    const isCorrect = choice === getCurrentQuestion()?.answer;
                    const isSelected = selected === choice;
                    const wasWrong = locked && selected !== getCurrentQuestion()?.answer;

                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleAnswer(choice)}
                        whileHover={!locked ? { scale: 1.02 } : {}}
                        disabled={locked}
                        className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 ${
                          isSelected
                            ? isCorrect
                              ? "bg-green-500/20 border-green-500 text-green-300"
                              : "bg-red-500/20 border-red-500 text-red-300"
                            : locked && isCorrect && wasWrong
                              ? "bg-green-500/20 border-green-500 text-green-300"
                              : locked
                                ? "bg-white/5 border-white/10 text-white/50"
                                : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                        }`}
                      >
                        {L(choice)}
                      </motion.button>
                    );
                  })}
                </div>

                {locked && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex flex-col items-center gap-2"
                  >
                    <span className={`font-bold text-sm ${
                      selected === getCurrentQuestion()?.answer
                        ? "text-green-400"
                        : "text-red-400"
                    }`}>
                      {selected === getCurrentQuestion()?.answer ? ui.correct : ui.wrong}
                    </span>

                    {/* Wrong answer: "Why?" + "Next" buttons */}
                    {selected !== getCurrentQuestion()?.answer && !aiResponse && !aiLoading && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <button
                          onClick={handleAskWhy}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-colors"
                        >
                          <MessageCircleQuestion size={14} />
                          {ui.askWhy}
                        </button>
                        <button
                          onClick={() => advanceSub()}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white/10 border border-white/20 text-white/70 hover:bg-white/20 transition-colors"
                        >
                          {ui.next} <ChevronRight size={14} />
                        </button>
                      </motion.div>
                    )}

                    {/* AI loading spinner */}
                    {aiLoading && (
                      <div className="flex items-center gap-2 text-purple-300 text-xs font-medium">
                        <Loader2 size={14} className="animate-spin" />
                        {ui.thinking}
                      </div>
                    )}

                    {/* AI response bubble + manual continue */}
                    {aiResponse && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full flex flex-col items-center gap-3"
                      >
                        <div className="w-full bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 text-sm text-white/80 leading-relaxed">
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400 text-base mt-0.5">🤖</span>
                            <p>{aiResponse}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => { setAiActive(false); advanceSub(); }}
                          className="px-5 py-2 rounded-xl font-bold text-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center gap-1.5"
                        >
                          {ui.next} <ChevronRight size={14} />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── ORDER PHASE ── */}
          {phase === "question" && currentRound.type === "order" && (
            <motion.div
              key={`order-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {tapped.length > 0 && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex gap-3 flex-wrap justify-center">
                    {tapped.map((key, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg text-sm"
                      >
                        {L(key)}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-lg font-bold text-center">
                {tapped.length === (currentRound.orderSequence?.length || 0)
                  ? ui.orderDone
                  : ui.orderInProgress}
              </h3>

              <div className="space-y-2">
                {shuffledOrders[round]?.map((key) => {
                  const isTapped = tapped.includes(key);
                  return (
                    <motion.button
                      key={key}
                      onClick={() => handleOrderTap(key)}
                      disabled={isTapped}
                      whileHover={!isTapped ? { scale: 1.02 } : {}}
                      animate={orderWrong ? { x: [-5, 5, -5, 0] } : {}}
                      transition={orderWrong ? { duration: 0.3 } : { duration: 0 }}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 ${
                        isTapped
                          ? "bg-green-500/20 border-green-500 text-green-300 opacity-50"
                          : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                      }`}
                    >
                      {L(key)}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default memo(ExplorerEngine);
