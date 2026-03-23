"use client";
// ─────────────────────────────────────────────────────────────────────────────
// AIWhyBubble — Drop-in AI "Why?" button for any explorer/quiz
// Shows after a wrong answer. Calls Claude Haiku for explanation + TTS.
// Usage: <AIWhyBubble show={feedback==="wrong"} question="..." wrongAnswer="..."
//          correctAnswer="..." topic="..." lang={lang} color={color} />
// ─────────────────────────────────────────────────────────────────────────────

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Volume2, Sparkles } from "lucide-react";
import { askWhyCorrect } from "@/lib/aiChat";

const UI: Record<string, Record<string, string>> = {
  en: { why: "Why?", error: "Couldn't get an answer.", speaking: "..." },
  de: { why: "Warum?", error: "Keine Antwort möglich.", speaking: "..." },
  hu: { why: "Miért?", error: "Nem sikerült válaszolni.", speaking: "..." },
  ro: { why: "De ce?", error: "Nu am putut răspunde.", speaking: "..." },
};

function speakText(text: string, lang: string) {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const targetLang = lang === "hu" ? "hu" : lang === "de" ? "de" : lang === "ro" ? "ro" : "en";
  u.lang = lang === "hu" ? "hu-HU" : lang === "de" ? "de-DE" : lang === "ro" ? "ro-RO" : "en-US";
  const voices = window.speechSynthesis.getVoices();
  const langVoices = voices.filter(v => v.lang.startsWith(targetLang));
  const preferred = langVoices.find(v => /google|microsoft|online|natural|neural/i.test(v.name))
    || langVoices.find(v => !v.localService)
    || langVoices[0];
  if (preferred) u.voice = preferred;
  if (lang === "hu") { u.rate = 0.82; u.pitch = 1.1; }
  else { u.rate = 0.9; u.pitch = 1.0; }
  window.speechSynthesis.speak(u);
}

interface Props {
  /** Show the bubble (typically: feedback === "wrong" && locked) */
  show: boolean;
  /** The question text the student saw */
  question: string;
  /** What the student chose (wrong answer) */
  wrongAnswer: string;
  /** The correct answer */
  correctAnswer: string;
  /** Topic/context for better AI response */
  topic: string;
  /** Language code */
  lang?: string;
  /** Accent color */
  color?: string;
  /** Called when user taps "Why?" — can be used to pause auto-advance timers */
  onTap?: () => void;
}

function AIWhyBubble({
  show, question, wrongAnswer, correctAnswer, topic,
  lang = "en", color = "#B44DFF", onTap,
}: Props) {
  const ui = UI[lang] || UI.en;
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [asked, setAsked] = useState(false);

  // Reset when show changes to false (next question)
  const [prevShow, setPrevShow] = useState(false);
  if (show !== prevShow) {
    setPrevShow(show);
    if (!show) { setResponse(null); setAsked(false); setLoading(false); }
  }

  const handleAsk = useCallback(async () => {
    if (loading || asked) return;
    onTap?.();
    setAsked(true);
    setLoading(true);
    const result = await askWhyCorrect({ question, wrongAnswer, correctAnswer, topic, lang });
    setLoading(false);
    if (result) {
      setResponse(result);
      speakText(result, lang);
    } else {
      setResponse(ui.error);
    }
  }, [loading, asked, question, wrongAnswer, correctAnswer, topic, lang, onTap, ui.error]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        className="flex flex-col items-center gap-2 w-full"
      >
        {/* Why button — before asking */}
        {!asked && (
          <motion.button
            onClick={handleAsk}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all"
            style={{
              background: `${color}18`,
              border: `1.5px solid ${color}40`,
              color,
            }}
            whileHover={{ scale: 1.05, borderColor: `${color}80` }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={13} />
            {ui.why} 🤖
          </motion.button>
        )}

        {/* Loading spinner */}
        {loading && (
          <div className="flex items-center gap-2 px-4 py-2">
            <Loader2 size={14} className="animate-spin" style={{ color }} />
            <span className="text-xs font-medium text-white/40">{ui.speaking}</span>
          </div>
        )}

        {/* AI Response */}
        {response && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full rounded-2xl px-4 py-3 flex items-start gap-3"
            style={{
              background: `linear-gradient(135deg, ${color}12, ${color}06)`,
              border: `1px solid ${color}25`,
            }}
          >
            <span className="text-lg shrink-0 mt-0.5">🤖</span>
            <p className="text-xs font-medium text-white/70 leading-relaxed flex-1">{response}</p>
            <button
              onClick={() => speakText(response, lang)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 transition-colors shrink-0"
              style={{ background: `${color}15` }}
            >
              <Volume2 size={12} />
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default memo(AIWhyBubble);
