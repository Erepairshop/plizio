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
import { getUsername } from "@/lib/username";
import BlockDrag from "@/components/interactive/BlockDrag";
import NumberLineTap from "@/components/interactive/NumberLineTap";

// ─────────────────────────────────────────────────────────────────────────────
// Public Types (used by content files)
// ─────────────────────────────────────────────────────────────────────────────

export interface MCQQuestion {
  question: string;        // label key
  choices: string[];       // label keys
  answer: string;          // label key (correct choice)
}

/** Tap-count round: student taps emoji objects to count them */
export interface TapCountConfig {
  emoji: string;
  count: number;
}

/** Compare round: student picks which group has more */
export interface CompareConfig {
  left: { emoji: string; count: number };
  right: { emoji: string; count: number };
}

/** Match round: student pairs left items with right items */
export interface MatchPairConfig {
  pairs: { left: string; right: string }[];  // label keys
}

/** Sort round: student sorts items into categories */
export interface SortConfig {
  categories: { key: string; label: string }[];  // label keys for category names
  items: { label: string; category: string }[];   // label key + which category key
}

/** Fill-in round: student types missing value */
export interface FillInConfig {
  prompt: string;          // label key with ___ for blank
  answer: string;          // label key (correct answer)
  hint?: string;           // label key
}

/** Custom round: renders an arbitrary React component */
export interface CustomRoundConfig {
  component: (props: { color: string; lang: string; onDone: (score: number, total: number) => void }) => React.ReactNode;
}

/** A single round definition */
export interface RoundDef {
  /** Round type */
  type: "info" | "mcq" | "order" | "tap-count" | "compare" | "match" | "sort" | "fill-in" | "custom";
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
  /** For "tap-count": emoji counting config */
  tapCount?: TapCountConfig;
  /** For "compare": group comparison config */
  compare?: CompareConfig;
  /** For "match": pair matching config */
  matchPairs?: MatchPairConfig;
  /** For "sort": category sorting config */
  sortConfig?: SortConfig;
  /** For "fill-in": text input config */
  fillIn?: FillInConfig;
  /** For "custom": renders custom component */
  custom?: CustomRoundConfig;
}

/** Full explorer content definition */
export interface ExplorerDef {
  /** Labels object: Record<langCode, Record<labelKey, string>> */
  labels: Record<string, Record<string, string>>;
  /** Rounds (typically 5, but flexible) — legacy flat mode */
  rounds: RoundDef[];
  /** Optional: explorer title label key (enables welcome screen) */
  title?: string;
  /** Optional: explorer icon emoji (e.g. "🐟") */
  icon?: string;
  /** Topic-based mode: each topic = teach → interact → quiz (overrides rounds) */
  topics?: TopicDef[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Topic-based explorer (new structured mode)
// ─────────────────────────────────────────────────────────────────────────────

/** A single topic in the structured teach→interact→quiz flow */
export interface TopicDef {
  /** Label key for topic title */
  infoTitle: string;
  /** Label key for teaching text */
  infoText: string;
  /** SVG illustration for teaching phase */
  svg: (lang: string) => React.ReactNode;
  /** Optional bullet point keys for extra info */
  bulletKeys?: string[];
  /** Optional hint key */
  hintKey?: string;
  /** Interactive activity config */
  interactive: TopicInteractive;
  /** Single quiz question (teaching style) */
  quiz: MCQQuestion;
}

/** Interactive activity within a topic */
export type TopicInteractive =
  | {
      type: "block-drag";
      mode: "combine" | "split" | "place-value";
      groups: number[];
      answer: number;
      blockIcon?: string;
      blockColor?: string;
      tens?: number;
      ones?: number;
      instruction: string;  // label key
      hint1: string;        // label key
      hint2: string;        // label key
    }
  | {
      type: "number-line";
      min: number;
      max: number;
      start: number;
      target: number;
      step?: number;
      showJumps?: boolean;
      jumpCount?: number;
      instruction: string;  // label key
      hint1: string;        // label key
      hint2: string;        // label key
    };

// ─────────────────────────────────────────────────────────────────────────────
// Engine Props
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  def: ExplorerDef;
  color?: string;
  lang?: string;
  /** Unique ID for tracking play count (e.g. "bio_k5_fish"). If provided, enables AI enhanced mode on 2nd+ play. */
  explorerId?: string;
  /** Grade level (1-8). Adjusts AI language complexity for the student's age. */
  grade?: number;
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
  en: { gotIt: "Got it! →", next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite!", orderInProgress: "Keep going!", orderDone: "Perfect! ✓", askWhy: "Why?", askAnything: "Ask anything...", listening: "Listening...", thinking: "Thinking...", aiError: "Couldn't get an answer. Try again!", whatDoYouThink: "What do you think?", funFact: "Fun fact", shareThought: "Share your thought...", letsFind: "Let's find out! →", goodThought: "Interesting thought!", tapToCount: "Tap each one to count!", counted: "counted", great: "Great!", thereAre: "There are", objects: "objects!", whichMore: "Which group has MORE?", leftHas: "Left has", rightHas: "Right has", isMore: "is more!", isEqual: "They are equal!", tapReveal: "Tap to see the answer", wellDone: "Well done!", typeAnswer: "Type your answer...", check: "Check", welcomeHi: "Hey", welcomeTopics: "Today we'll explore:", welcomeGo: "Let's go! →" },
  de: { gotIt: "Verstanden! →", next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz!", orderInProgress: "Weiter so!", orderDone: "Perfekt! ✓", askWhy: "Warum?", askAnything: "Frag etwas...", listening: "Hört zu...", thinking: "Denkt nach...", aiError: "Keine Antwort möglich. Versuch nochmal!", whatDoYouThink: "Was denkst du?", funFact: "Wusstest du?", shareThought: "Teile deine Idee...", letsFind: "Lass uns herausfinden! →", goodThought: "Interessanter Gedanke!", tapToCount: "Tippe auf jedes, um zu zählen!", counted: "gezählt", great: "Super!", thereAre: "Es gibt", objects: "Stück!", whichMore: "Welche Gruppe hat MEHR?", leftHas: "Links hat", rightHas: "Rechts hat", isMore: "ist mehr!", isEqual: "Sie sind gleich!", tapReveal: "Tippe für die Antwort", wellDone: "Toll gemacht!", typeAnswer: "Antwort eingeben...", check: "Prüfen", welcomeHi: "Hallo", welcomeTopics: "Heute lernen wir:", welcomeGo: "Los geht's! →" },
  hu: { gotIt: "Értem! →", next: "Tovább", finish: "Kész", correct: "Helyes! ✓", wrong: "Nem egészen!", orderInProgress: "Folytasd!", orderDone: "Tökéletes! ✓", askWhy: "Miért?", askAnything: "Kérdezz bármit...", listening: "Hallgatom...", thinking: "Gondolkodom...", aiError: "Nem sikerült válaszolni. Próbáld újra!", whatDoYouThink: "Mit gondolsz?", funFact: "Tudtad?", shareThought: "Oszd meg a gondolatod...", letsFind: "Derítsük ki! →", goodThought: "Érdekes gondolat!", tapToCount: "Koppints mindegyikre a számoláshoz!", counted: "megszámolva", great: "Szuper!", thereAre: "Összesen", objects: "van!", whichMore: "Melyik csoportban van TÖBB?", leftHas: "Bal oldalon", rightHas: "Jobb oldalon", isMore: "a több!", isEqual: "Egyenlőek!", tapReveal: "Koppints a válaszhoz", wellDone: "Ügyes!", typeAnswer: "Írd be a válaszod...", check: "Ellenőrzés", welcomeHi: "Szia", welcomeTopics: "Ma ezeket fedezzük fel:", welcomeGo: "Rajt! →" },
  ro: { gotIt: "Înțeles! →", next: "Următorul", finish: "Gata", correct: "Corect! ✓", wrong: "Nu tocmai!", orderInProgress: "Continuă!", orderDone: "Perfect! ✓", askWhy: "De ce?", askAnything: "Întreabă orice...", listening: "Ascult...", thinking: "Mă gândesc...", aiError: "Nu am putut răspunde. Încearcă din nou!", whatDoYouThink: "Ce crezi?", funFact: "Știai că?", shareThought: "Împărtășește gândul tău...", letsFind: "Hai să aflăm! →", goodThought: "Gând interesant!", tapToCount: "Atinge fiecare pentru a număra!", counted: "numărate", great: "Super!", thereAre: "Sunt", objects: "obiecte!", whichMore: "Care grup are MAI MULTE?", leftHas: "Stânga are", rightHas: "Dreapta are", isMore: "este mai mult!", isEqual: "Sunt egale!", tapReveal: "Atinge pentru răspuns", wellDone: "Bravo!", typeAnswer: "Scrie răspunsul...", check: "Verifică", welcomeHi: "Salut", welcomeTopics: "Azi vom explora:", welcomeGo: "Să începem! →" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Engine Component
// ─────────────────────────────────────────────────────────────────────────────

type Phase = "welcome" | "info" | "question" | "think-first" | "interactive"
  | "topic-teach" | "topic-interact" | "topic-quiz";

// ─── Play count tracking (localStorage) ──────────────────────────────────
function getPlayCount(id: string): number {
  if (typeof window === "undefined") return 0;
  try { return parseInt(localStorage.getItem(`explorer_plays_${id}`) || "0", 10); } catch { return 0; }
}
function incrementPlayCount(id: string): void {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(`explorer_plays_${id}`, String(getPlayCount(id) + 1)); } catch { /* */ }
}

function ExplorerEngine({ def, color = "#3B82F6", onDone, onClose, lang = "en", explorerId, grade }: Props) {
  const langCode = lang || "en";
  const t = def.labels[langCode] || def.labels.en;
  const ui = UI_LABELS[langCode] || UI_LABELS.en;
  const rounds = def.rounds;
  const totalRounds = rounds.length;

  // AI enhanced mode — activates on 2nd+ play
  const [aiEnhanced] = useState(() => explorerId ? getPlayCount(explorerId) >= 1 : false);
  const playCountTracked = useRef(false);

  // Track play count on mount
  useEffect(() => {
    if (explorerId && !playCountTracked.current) {
      playCountTracked.current = true;
      incrementPlayCount(explorerId);
    }
  }, [explorerId]);

  // ── Topic-based mode detection ──────────────────────────────────────────
  const isTopicMode = !!(def.topics && def.topics.length > 0);
  const topics = def.topics || [];
  const totalTopics = topics.length;

  const [round, setRound] = useState(0);
  const hasWelcome = !!(def.title || def.icon);
  const firstIsInteractive = rounds[0] && (rounds[0].type === "tap-count" || rounds[0].type === "compare" || rounds[0].type === "fill-in" || rounds[0].type === "custom");

  // Topic-based state
  const [topicIdx, setTopicIdx] = useState(0);
  const [topicPhase, setTopicPhase] = useState<"topic-teach" | "topic-interact" | "topic-quiz">("topic-teach");

  const [phase, setPhase] = useState<Phase>(
    hasWelcome ? "welcome"
    : isTopicMode ? "topic-teach"
    : firstIsInteractive ? "interactive"
    : aiEnhanced ? "think-first"
    : "info"
  );

  // Username for welcome screen
  const username = useMemo(() => {
    if (typeof window === "undefined") return null;
    return getUsername();
  }, []);

  // Topic list for welcome screen — from topics[] or rounds[]
  const welcomeTopics = useMemo(() => {
    if (isTopicMode) {
      return topics.map(t => t.infoTitle).slice(0, 5);
    }
    const seen = new Set<string>();
    const list: string[] = [];
    for (const r of rounds) {
      if (r.infoTitle && !seen.has(r.infoTitle)) {
        seen.add(r.infoTitle);
        list.push(r.infoTitle);
      }
    }
    return list.slice(0, 5);
  }, [rounds, topics, isTopicMode]);
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
  const [thinkAnswer, setThinkAnswer] = useState("");
  const [thinkFeedback, setThinkFeedback] = useState<string | null>(null);
  const [funFact, setFunFact] = useState<string | null>(null);
  const [funFactLoading, setFunFactLoading] = useState(false);
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
      const nextRound = rounds[round + 1];
      const nextIsInteractive = nextRound && (nextRound.type === "tap-count" || nextRound.type === "compare" || nextRound.type === "fill-in" || nextRound.type === "custom");
      setRound(round + 1);
      // Interactive rounds skip info phase (they ARE the visual experience)
      setPhase(nextIsInteractive ? "interactive" : aiEnhanced ? "think-first" : "info");
      setSubIdx(0);
      setSelected(null);
      setLocked(false);
      setTapped([]);
      setOrderWrong(false);
      setThinkAnswer("");
      setThinkFeedback(null);
      setFunFact(null);
    } else {
      onDone?.(scoreRef.current, totalRef.current);
    }
  }, [round, totalRounds, rounds, onDone, aiEnhanced]);

  // State for interactive rounds (tap-count, compare, fill-in)
  const [tapCountSet, setTapCountSet] = useState<Set<number>>(new Set());
  const [tapCountRevealed, setTapCountRevealed] = useState(false);
  const [compareSide, setCompareSide] = useState<"left" | "right" | null>(null);
  const [compareRevealed, setCompareRevealed] = useState(false);
  const [fillInValue, setFillInValue] = useState("");
  const [fillInFeedback, setFillInFeedback] = useState<"correct" | "wrong" | null>(null);

  const resetInteractiveState = useCallback(() => {
    setTapCountSet(new Set());
    setTapCountRevealed(false);
    setCompareSide(null);
    setCompareRevealed(false);
    setFillInValue("");
    setFillInFeedback(null);
  }, []);

  const handleNext = useCallback(() => {
    if (currentRound.type === "info") {
      advanceRound();
    } else if (currentRound.type === "tap-count" || currentRound.type === "compare" || currentRound.type === "fill-in" || currentRound.type === "custom") {
      resetInteractiveState();
      setPhase("interactive");
    } else {
      setSelected(null);
      setLocked(false);
      setPhase("question");
    }
  }, [currentRound, advanceRound, resetInteractiveState]);

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

  // ── Welcome screen TTS — auto-read greeting + topics on mount ───────────
  const welcomeSpoken = useRef(false);
  useEffect(() => {
    if (phase !== "welcome" || welcomeSpoken.current) return;
    welcomeSpoken.current = true;
    // Small delay so voices are loaded
    const timer = setTimeout(() => {
      const name = username || "";
      const greeting = name
        ? `${ui.welcomeHi}, ${name}!`
        : `${ui.welcomeHi}!`;
      const explorerTitle = def.title ? L(def.title) : "";
      const topicList = welcomeTopics.map(k => L(k)).join(". ");
      const fullText = [greeting, explorerTitle, ui.welcomeTopics, topicList].filter(Boolean).join(". ");
      speak(fullText);
    }, 400);
    return () => clearTimeout(timer);
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Dismiss welcome → go to first round
  const dismissWelcome = useCallback(() => {
    window.speechSynthesis.cancel();
    if (isTopicMode) {
      setPhase("topic-teach");
    } else {
      setPhase(firstIsInteractive ? "interactive" : aiEnhanced ? "think-first" : "info");
    }
  }, [firstIsInteractive, aiEnhanced, isTopicMode]);

  // ── Topic-mode: advance through teach → interact → quiz → next topic ───
  const advanceTopicPhase = useCallback(() => {
    if (topicPhase === "topic-teach") {
      setTopicPhase("topic-interact");
      setPhase("topic-interact");
    } else if (topicPhase === "topic-interact") {
      setTopicPhase("topic-quiz");
      setPhase("topic-quiz");
    } else {
      // quiz done → next topic or finish
      if (topicIdx < totalTopics - 1) {
        setTopicIdx(topicIdx + 1);
        setTopicPhase("topic-teach");
        setPhase("topic-teach");
      } else {
        onDone?.(scoreRef.current, totalRef.current);
      }
    }
  }, [topicPhase, topicIdx, totalTopics, onDone]);

  // Topic interactive done handler
  const handleTopicInteractiveDone = useCallback((correct: boolean) => {
    totalRef.current += 1;
    if (correct) scoreRef.current += 1;
    setTimeout(() => advanceTopicPhase(), 800);
  }, [advanceTopicPhase]);

  // Topic quiz answer handler
  const [topicQuizSelected, setTopicQuizSelected] = useState<string | null>(null);
  const [topicQuizLocked, setTopicQuizLocked] = useState(false);

  const handleTopicQuizAnswer = useCallback((choice: string) => {
    if (topicQuizLocked) return;
    setTopicQuizLocked(true);
    setTopicQuizSelected(choice);
    const topic = topics[topicIdx];
    if (!topic) return;
    totalRef.current += 1;
    const isCorrect = choice === topic.quiz.answer;
    if (isCorrect) scoreRef.current += 1;

    // Auto-advance after feedback
    setTimeout(() => {
      setTopicQuizSelected(null);
      setTopicQuizLocked(false);
      advanceTopicPhase();
    }, isCorrect ? 1500 : 2500);
  }, [topicQuizLocked, topics, topicIdx, advanceTopicPhase]);

  // ── AI: "Think first" — constructivist question at round start ──────────
  const handleThinkSubmit = useCallback(async (text: string) => {
    if (!text.trim() || aiLoading) return;
    setAiLoading(true);
    const topicTitle = L(currentRound.infoTitle);
    const topicText = L(currentRound.infoText);
    const result = await askAITutor({
      question: text,
      context: `Grade ${grade || "?"} student. Topic: "${topicTitle}". Correct info: "${topicText}". Respond encouragingly to their guess, then say "Let's find out more!" Keep it to 2 sentences.`,
      lang: langCode,
      maxTokens: 100,
      grade,
    });
    setAiLoading(false);
    if (result) {
      setThinkFeedback(result);
      speak(result);
    } else {
      setThinkFeedback(ui.goodThought);
    }
  }, [aiLoading, currentRound, langCode, speak, L, ui.goodThought]);

  // ── AI: Fun fact generation (enhanced mode) — 6s timeout ───────────────
  const loadFunFact = useCallback(async () => {
    if (!aiEnhanced || funFactLoading) return;
    setFunFactLoading(true);
    const topicTitle = L(currentRound.infoTitle);
    try {
      const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 6000));
      const rng = Math.random().toString(36).slice(2, 6);
      const request = askAITutor({
        question: `Tell me a surprising, fun fact about "${topicTitle}" that a grade ${grade || "?"} student (age ${grade && grade <= 2 ? "6-7" : grade && grade <= 4 ? "8-10" : "10-14"}) would find amazing and understand. Just the fun fact, 1-2 sentences. Start with a fun emoji. Be creative and pick something different each time (seed: ${rng}).`,
        context: `Grade ${grade || "?"}: ${topicTitle}`,
        lang: langCode,
        maxTokens: 100,
        grade,
      });
      const result = await Promise.race([request, timeout]);
      setFunFactLoading(false);
      if (result) setFunFact(result);
    } catch {
      setFunFactLoading(false);
    }
  }, [aiEnhanced, funFactLoading, currentRound, langCode, L, grade]);

  // Load fun fact when entering info phase in enhanced mode
  useEffect(() => {
    if (aiEnhanced && phase === "info") {
      setFunFact(null);
      loadFunFact();
    }
  }, [round, phase]); // eslint-disable-line react-hooks/exhaustive-deps

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
      grade,
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
      context: `Grade ${grade || "?"}: ${L(currentRound.infoTitle)} — ${L(currentRound.infoText)}`,
      lang: langCode,
      grade,
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
      setIsListening(false);
      if (phase === "think-first") {
        setThinkAnswer(text);
        handleThinkSubmit(text);
      } else {
        setVoiceText(text);
        handleAskFree(text);
      }
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isListening, langCode, handleAskFree]);

  // Clear AI state on round/sub change
  useEffect(() => {
    setAiResponse(null);
    setAiLoading(false);
    setAiActive(false);
    setVoiceText("");
  }, [round, subIdx]);

  // Clear think state on round change
  useEffect(() => {
    setThinkAnswer("");
    setThinkFeedback(null);
  }, [round]);

  return (
    <div className="min-h-screen bg-[#060614] text-white px-4 py-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Close button */}
      <button
        onClick={() => onClose ? onClose() : onDone?.(scoreRef.current, totalRef.current)}
        className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold z-10"
      >✕</button>

      {/* ── WELCOME SCREEN ── */}
      {phase === "welcome" && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center px-6"
          style={{ background: "linear-gradient(180deg, #060614 0%, #0D0D2B 50%, #060614 100%)" }}
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: color }} />
            {/* Floating small stars */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white"
                style={{ left: `${10 + (i * 7) % 80}%`, top: `${8 + (i * 13) % 75}%` }}
                animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-5 max-w-sm w-full">
            {/* Icon with pulsing glow */}
            {def.icon && (
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full blur-2xl opacity-30" style={{ background: color }} />
                <div
                  className="relative w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-xl"
                  style={{ background: `${color}20`, border: `2px solid ${color}40` }}
                >
                  {def.icon}
                </div>
              </motion.div>
            )}

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-center"
            >
              <h1 className="text-2xl font-black text-white/90">
                {ui.welcomeHi}{username ? `, ${username}` : ""}! 👋
              </h1>
              {def.title && (
                <p className="text-base font-bold mt-1.5" style={{ color }}>{L(def.title)}</p>
              )}
            </motion.div>

            {/* Topic list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="w-full rounded-2xl p-4"
              style={{ background: `${color}08`, border: `1px solid ${color}18` }}
            >
              <p className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">
                {ui.welcomeTopics}
              </p>
              <div className="flex flex-col gap-2">
                {welcomeTopics.map((key, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black text-white shrink-0"
                      style={{ background: `${color}30` }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm font-semibold text-white/75">{L(key)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Go button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + welcomeTopics.length * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={dismissWelcome}
              className="w-full py-3.5 rounded-2xl text-white font-extrabold text-base shadow-lg mt-1"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 4px 25px ${color}40` }}
            >
              {ui.welcomeGo}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* ── TOPIC-MODE PROGRESS + RENDER ── */}
      {isTopicMode && phase !== "welcome" ? (
        <>
          {/* Topic progress: grouped dots (teach·interact·quiz) per topic */}
          <div className="flex gap-3 mb-6 items-center">
            {topics.map((_, ti) => {
              const phases = ["topic-teach", "topic-interact", "topic-quiz"] as const;
              return (
                <div key={ti} className="flex gap-1 items-center">
                  {phases.map((p, pi) => {
                    const globalStep = ti * 3 + pi;
                    const currentStep = topicIdx * 3 + (topicPhase === "topic-teach" ? 0 : topicPhase === "topic-interact" ? 1 : 2);
                    const done = globalStep < currentStep;
                    const active = globalStep === currentStep;
                    const icon = pi === 0 ? "📖" : pi === 1 ? "🎮" : "❓";
                    return (
                      <div
                        key={pi}
                        className={`rounded-full transition-all flex items-center justify-center ${
                          active ? "w-5 h-5 text-[9px]" : "w-3 h-3 text-[7px]"
                        }`}
                        style={{
                          backgroundColor: done ? color : active ? color : "rgba(255,255,255,0.12)",
                          opacity: done ? 0.5 : active ? 1 : 0.3,
                        }}
                      >
                        {active ? icon : ""}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Topic mode main content */}
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {/* ── TOPIC TEACH PHASE ── */}
              {phase === "topic-teach" && topics[topicIdx] && (
                <motion.div
                  key={`topic-teach-${topicIdx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center gap-4"
                >
                  {/* Topic badge */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black text-white" style={{ background: `${color}30` }}>
                      {topicIdx + 1}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>{L(topics[topicIdx].infoTitle)}</span>
                  </div>

                  {/* SVG illustration */}
                  <div className="w-full rounded-2xl overflow-hidden" style={{ background: `${color}08`, border: `1px solid ${color}15` }}>
                    {topics[topicIdx].svg(langCode)}
                  </div>

                  {/* Teaching text */}
                  <div className="text-center px-2">
                    <p className="text-sm text-white/80 leading-relaxed">{L(topics[topicIdx].infoText)}</p>
                  </div>

                  {/* Bullet points */}
                  {topics[topicIdx].bulletKeys && topics[topicIdx].bulletKeys!.length > 0 && (
                    <div className="w-full rounded-xl p-3 flex flex-col gap-1.5" style={{ background: `${color}08` }}>
                      {topics[topicIdx].bulletKeys!.map((bk, bi) => (
                        <div key={bi} className="flex items-start gap-2">
                          <span className="text-xs mt-0.5" style={{ color }}>●</span>
                          <span className="text-xs text-white/65">{L(bk)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TTS + Continue */}
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => speak(L(topics[topicIdx].infoText))}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 text-white/60 hover:bg-white/15 transition-colors shrink-0"
                    >
                      <Volume2 size={16} />
                    </button>
                    <button
                      onClick={advanceTopicPhase}
                      className="flex-1 py-2.5 rounded-xl text-white font-extrabold text-sm"
                      style={{ background: color, boxShadow: `0 2px 15px ${color}30` }}
                    >
                      {ui.gotIt}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── TOPIC INTERACT PHASE ── */}
              {phase === "topic-interact" && topics[topicIdx] && (
                <motion.div
                  key={`topic-interact-${topicIdx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  {/* Interactive header */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-lg">🎮</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50">{L(topics[topicIdx].infoTitle)}</span>
                  </div>

                  {/* Render interactive component */}
                  {(() => {
                    const inter = topics[topicIdx].interactive;
                    if (inter.type === "block-drag") {
                      return (
                        <BlockDrag
                          mode={inter.mode}
                          groups={inter.groups}
                          answer={inter.answer}
                          tens={inter.tens}
                          ones={inter.ones}
                          blockIcon={inter.blockIcon}
                          blockColor={inter.blockColor}
                          color={color}
                          instruction={L(inter.instruction)}
                          hint1={L(inter.hint1)}
                          hint2={L(inter.hint2)}
                          lang={langCode}
                          onDone={handleTopicInteractiveDone}
                        />
                      );
                    }
                    if (inter.type === "number-line") {
                      return (
                        <NumberLineTap
                          min={inter.min}
                          max={inter.max}
                          start={inter.start}
                          target={inter.target}
                          step={inter.step}
                          showJumps={inter.showJumps}
                          jumpCount={inter.jumpCount}
                          color={color}
                          instruction={L(inter.instruction)}
                          hint1={L(inter.hint1)}
                          hint2={L(inter.hint2)}
                          lang={langCode}
                          onDone={handleTopicInteractiveDone}
                        />
                      );
                    }
                    return null;
                  })()}
                </motion.div>
              )}

              {/* ── TOPIC QUIZ PHASE ── */}
              {phase === "topic-quiz" && topics[topicIdx] && (
                <motion.div
                  key={`topic-quiz-${topicIdx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center gap-4"
                >
                  {/* Quiz header */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">❓</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50">{L(topics[topicIdx].infoTitle)}</span>
                  </div>

                  {/* Question */}
                  <p className="text-base font-bold text-center text-white/90 px-2">
                    {L(topics[topicIdx].quiz.question)}
                  </p>

                  {/* Answer options */}
                  <div className="w-full flex flex-col gap-2">
                    {topics[topicIdx].quiz.choices.map((choiceKey, ci) => {
                      const isSelected = topicQuizSelected === choiceKey;
                      const isCorrect = choiceKey === topics[topicIdx].quiz.answer;
                      const showCorrect = topicQuizLocked && isCorrect;
                      const showWrong = topicQuizLocked && isSelected && !isCorrect;

                      let bg = "bg-white/5";
                      let border = "border-white/10";
                      let textCol = "text-white/80";
                      if (showCorrect) { bg = "bg-green-500/20"; border = "border-green-400/50"; textCol = "text-green-300"; }
                      else if (showWrong) { bg = "bg-red-500/15"; border = "border-red-400/40"; textCol = "text-red-300"; }
                      else if (isSelected) { bg = `bg-[${color}]/15`; border = `border-[${color}]/40`; }

                      return (
                        <motion.button
                          key={choiceKey}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + ci * 0.06, type: "spring", stiffness: 300, damping: 25 }}
                          whileTap={!topicQuizLocked ? { scale: 0.97 } : {}}
                          onClick={() => handleTopicQuizAnswer(choiceKey)}
                          disabled={topicQuizLocked}
                          className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-left border ${bg} ${border} ${textCol} transition-colors`}
                          style={
                            showCorrect ? {} :
                            showWrong ? {} :
                            isSelected ? { background: `${color}15`, borderColor: `${color}40` } : {}
                          }
                        >
                          <span className="inline-flex items-center gap-2.5">
                            <span
                              className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0"
                              style={{
                                background: showCorrect ? "rgba(34,197,94,0.3)" : showWrong ? "rgba(239,68,68,0.3)" : `${color}20`,
                                color: showCorrect ? "#4ade80" : showWrong ? "#f87171" : color,
                              }}
                            >
                              {showCorrect ? "✓" : showWrong ? "✗" : String.fromCharCode(65 + ci)}
                            </span>
                            {L(choiceKey)}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Teaching feedback after answer */}
                  {topicQuizLocked && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`w-full rounded-xl p-3 text-center text-sm font-bold ${
                        topicQuizSelected === topics[topicIdx].quiz.answer
                          ? "bg-green-500/10 text-green-300"
                          : "bg-red-500/10 text-red-300"
                      }`}
                    >
                      {topicQuizSelected === topics[topicIdx].quiz.answer
                        ? ui.correct
                        : `${ui.wrong} → ${L(topics[topicIdx].quiz.answer)}`}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      ) : phase !== "welcome" ? (
        <>
          {/* ── LEGACY FLAT ROUNDS MODE ── */}
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
          {/* ── THINK-FIRST PHASE (AI enhanced, 2nd+ play) ── */}
          {phase === "think-first" && (
            <motion.div
              key={`think-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: `${color}20` }}>
                🤔
              </div>
              <h2 className="text-xl font-black text-center" style={{ color }}>
                {ui.whatDoYouThink}
              </h2>
              <p className="text-sm text-white/60 text-center px-4">
                {L(currentRound.infoTitle)}
              </p>

              {/* Voice + text input */}
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
                  value={thinkAnswer}
                  onChange={(e) => setThinkAnswer(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleThinkSubmit(thinkAnswer); }}
                  placeholder={isListening ? ui.listening : ui.shareThought}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50"
                />
                {thinkAnswer.trim() && !aiLoading && !thinkFeedback && (
                  <button
                    onClick={() => handleThinkSubmit(thinkAnswer)}
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

              {/* AI feedback on student's guess */}
              {thinkFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 text-sm text-white/80 leading-relaxed"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-base mt-0.5">🤖</span>
                    <p>{thinkFeedback}</p>
                  </div>
                </motion.div>
              )}

              <button
                onClick={() => { setPhase("info"); }}
                className="mt-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2 group"
              >
                {thinkFeedback ? ui.letsFind : ui.gotIt}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

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

              {/* ── Fun Fact (AI enhanced mode, first round only) ── */}
              {aiEnhanced && round === 0 && (funFact || funFactLoading) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full bg-amber-500/10 border border-amber-500/20 rounded-xl p-3"
                >
                  {funFactLoading ? (
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-medium justify-center">
                      <Loader2 size={14} className="animate-spin" />
                      {ui.funFact}...
                    </div>
                  ) : (
                    <div className="flex items-start gap-2 text-sm text-amber-200/90 leading-relaxed">
                      <span className="font-bold text-amber-400 shrink-0">{ui.funFact}:</span>
                      <span>{funFact}</span>
                    </div>
                  )}
                </motion.div>
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
                {ui.gotIt}
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
          {/* ── TAP-COUNT PHASE ── */}
          {phase === "interactive" && currentRound.type === "tap-count" && currentRound.tapCount && (() => {
            const tc = currentRound.tapCount;
            const allTapped = tapCountSet.size >= tc.count;
            return (
              <motion.div
                key={`tapcount-${round}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <div className="flex items-center gap-2">
                  <p className="text-white/60 text-xs font-bold text-center">{ui.tapToCount}</p>
                  <button onClick={() => speak(ui.tapToCount)}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white shrink-0">
                    <Volume2 size={14} />
                  </button>
                </div>

                {/* Emoji grid */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {Array.from({ length: tc.count }, (_, i) => (
                    <motion.button key={i}
                      onClick={() => { if (!tapCountRevealed) setTapCountSet(prev => { const n = new Set(prev); n.add(i); return n; }); }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl relative"
                      style={{
                        background: tapCountSet.has(i) ? `${color}33` : "rgba(255,255,255,0.06)",
                        border: `2px solid ${tapCountSet.has(i) ? color : "rgba(255,255,255,0.12)"}`,
                      }}
                      animate={tapCountSet.has(i) ? { scale: [1, 1.15, 1] } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      {tc.emoji}
                      {tapCountSet.has(i) && (
                        <span className="absolute -top-2 -right-2 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center"
                          style={{ background: color, color: "white" }}>
                          {Array.from(tapCountSet).sort((a, b) => a - b).indexOf(i) + 1}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Counter */}
                <div className="text-center">
                  <span className="text-2xl font-black" style={{ color: allTapped ? "#00FF88" : color }}>
                    {tapCountSet.size} / {tc.count}
                  </span>
                  <span className="text-white/40 text-sm ml-2">{ui.counted}</span>
                </div>

                {/* Reveal button */}
                {allTapped && !tapCountRevealed && (
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onClick={() => { setTapCountRevealed(true); scoreRef.current += 1; totalRef.current += 1; }}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {ui.tapReveal}
                  </motion.button>
                )}

                {/* Result + Next */}
                {tapCountRevealed && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-2 items-center w-full">
                    <div className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                      <p className="text-center text-sm font-bold text-white/60">{ui.great}</p>
                      <p className="text-center text-2xl font-black" style={{ color: "#00FF88" }}>
                        {ui.thereAre} {tc.count} {tc.emoji} {ui.objects}
                      </p>
                    </div>
                    <button onClick={() => { resetInteractiveState(); advanceRound(); }}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                    >
                      {round + 1 >= totalRounds ? ui.finish : ui.next} <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })()}

          {/* ── COMPARE PHASE ── */}
          {phase === "interactive" && currentRound.type === "compare" && currentRound.compare && (() => {
            const c = currentRound.compare;
            const moreIsLeft = c.left.count > c.right.count;
            const isEqual = c.left.count === c.right.count;
            return (
              <motion.div
                key={`compare-${round}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <div className="flex items-center gap-2">
                  <p className="text-white/60 text-xs font-bold text-center">{ui.whichMore}</p>
                  <button onClick={() => speak(ui.whichMore)}
                    className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white shrink-0">
                    <Volume2 size={14} />
                  </button>
                </div>

                <div className="flex gap-4 w-full">
                  {/* Left group */}
                  <motion.button onClick={() => !compareRevealed && setCompareSide("left")}
                    className="flex-1 rounded-2xl p-3 flex flex-col items-center gap-2"
                    style={{
                      background: compareSide === "left" ? `${color}22` : "rgba(255,255,255,0.04)",
                      border: `2px solid ${compareSide === "left" ? color : "rgba(255,255,255,0.12)"}`,
                    }}
                    whileTap={!compareRevealed ? { scale: 0.97 } : {}}>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {Array.from({ length: c.left.count }, (_, i) => (
                        <span key={i} className="text-xl">{c.left.emoji}</span>
                      ))}
                    </div>
                  </motion.button>
                  {/* Right group */}
                  <motion.button onClick={() => !compareRevealed && setCompareSide("right")}
                    className="flex-1 rounded-2xl p-3 flex flex-col items-center gap-2"
                    style={{
                      background: compareSide === "right" ? `${color}22` : "rgba(255,255,255,0.04)",
                      border: `2px solid ${compareSide === "right" ? color : "rgba(255,255,255,0.12)"}`,
                    }}
                    whileTap={!compareRevealed ? { scale: 0.97 } : {}}>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {Array.from({ length: c.right.count }, (_, i) => (
                        <span key={i} className="text-xl">{c.right.emoji}</span>
                      ))}
                    </div>
                  </motion.button>
                </div>

                {/* Reveal button */}
                {compareSide && !compareRevealed && (
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onClick={() => {
                      setCompareRevealed(true);
                      totalRef.current += 1;
                      const correctSide = isEqual ? compareSide : moreIsLeft ? "left" : "right";
                      if (compareSide === correctSide) scoreRef.current += 1;
                    }}
                    className="w-full py-3 rounded-2xl font-black text-white text-sm"
                    style={{ background: `${color}22`, border: `2px solid ${color}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {ui.tapReveal}
                  </motion.button>
                )}

                {/* Result */}
                {compareRevealed && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-2 items-center w-full">
                    <div className="w-full rounded-2xl px-5 py-4"
                      style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                      <p className="text-center text-sm font-bold text-white/60">
                        {ui.leftHas} {c.left.count} · {ui.rightHas} {c.right.count}
                      </p>
                      <p className="text-center text-2xl font-black mt-1" style={{ color: "#00FF88" }}>
                        {isEqual ? ui.isEqual : `${moreIsLeft ? c.left.count : c.right.count} ${ui.isMore}`}
                      </p>
                    </div>
                    <button onClick={() => { resetInteractiveState(); advanceRound(); }}
                      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                    >
                      {round + 1 >= totalRounds ? ui.finish : ui.next} <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })()}

          {/* ── FILL-IN PHASE ── */}
          {phase === "interactive" && currentRound.type === "fill-in" && currentRound.fillIn && (() => {
            const fi = currentRound.fillIn;
            return (
              <motion.div
                key={`fillin-${round}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <h3 className="text-lg font-bold text-center text-white/80">{L(fi.prompt)}</h3>
                {fi.hint && <p className="text-xs text-white/40 text-center">{L(fi.hint)}</p>}

                <input
                  type="text"
                  value={fillInValue}
                  onChange={(e) => setFillInValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && fillInValue.trim() && !fillInFeedback) {
                      totalRef.current += 1;
                      const correct = fillInValue.trim().toLowerCase() === L(fi.answer).toLowerCase();
                      if (correct) scoreRef.current += 1;
                      setFillInFeedback(correct ? "correct" : "wrong");
                    }
                  }}
                  disabled={!!fillInFeedback}
                  placeholder={ui.typeAnswer}
                  className="w-full bg-white/10 border-2 rounded-xl px-4 py-3 text-center text-lg font-bold text-white placeholder:text-white/30 focus:outline-none transition-colors"
                  style={{ borderColor: fillInFeedback === "correct" ? "#00FF88" : fillInFeedback === "wrong" ? "#FF4444" : `${color}40` }}
                />

                {!fillInFeedback && fillInValue.trim() && (
                  <button
                    onClick={() => {
                      totalRef.current += 1;
                      const correct = fillInValue.trim().toLowerCase() === L(fi.answer).toLowerCase();
                      if (correct) scoreRef.current += 1;
                      setFillInFeedback(correct ? "correct" : "wrong");
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-sm"
                    style={{ background: `${color}33`, border: `2px solid ${color}`, color }}
                  >
                    {ui.check}
                  </button>
                )}

                {fillInFeedback && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3 w-full">
                    <span className={`font-bold text-sm ${fillInFeedback === "correct" ? "text-green-400" : "text-red-400"}`}>
                      {fillInFeedback === "correct" ? ui.correct : `${ui.wrong} → ${L(fi.answer)}`}
                    </span>
                    <button onClick={() => { resetInteractiveState(); advanceRound(); }}
                      className="w-full py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                    >
                      {round + 1 >= totalRounds ? ui.finish : ui.next} <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })()}

          {/* ── CUSTOM PHASE ── */}
          {phase === "interactive" && currentRound.type === "custom" && currentRound.custom && (
            <motion.div
              key={`custom-${round}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              {currentRound.custom.component({
                color,
                lang: langCode,
                onDone: (s, t) => {
                  scoreRef.current += s;
                  totalRef.current += t;
                  resetInteractiveState();
                  advanceRound();
                },
              })}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
        </>
      ) : null}
    </div>
  );
}

export default memo(ExplorerEngine);
