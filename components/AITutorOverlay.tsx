"use client";
// ─────────────────────────────────────────────────────────────────────────────
// AITutorOverlay — Global floating "Why?" bubble for all explorer games
//
// Mount ONCE per astro page. Listens for "plizio-wrong-answer" CustomEvent.
// Any explorer can trigger it with:
//   window.dispatchEvent(new CustomEvent("plizio-wrong-answer", {
//     detail: { question, wrongAnswer, correctAnswer, topic, lang }
//   }));
// ─────────────────────────────────────────────────────────────────────────────

import { memo, useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Volume2, Sparkles, X } from "lucide-react";
import { askWhyCorrect } from "@/lib/aiChat";

// ─── UI Labels ───────────────────────────────────────────────────────────────

const UI: Record<string, Record<string, string>> = {
  en: { why: "Why?", error: "Couldn't get an answer.", close: "Close" },
  de: { why: "Warum?", error: "Keine Antwort möglich.", close: "Schließen" },
  hu: { why: "Miért?", error: "Nem sikerült válaszolni.", close: "Bezár" },
  ro: { why: "De ce?", error: "Nu am putut răspunde.", close: "Închide" },
};

// ─── TTS helper ──────────────────────────────────────────────────────────────

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

// ─── Event detail type ───────────────────────────────────────────────────────

export interface WrongAnswerDetail {
  question: string;
  wrongAnswer: string;
  correctAnswer: string;
  topic: string;
  lang: string;
}

/** Helper to fire the event from any explorer — 1 line call */
export function fireWrongAnswer(detail: WrongAnswerDetail) {
  window.dispatchEvent(new CustomEvent("plizio-wrong-answer", { detail }));
}

// ─── Overlay Component ───────────────────────────────────────────────────────

function AITutorOverlay() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [detail, setDetail] = useState<WrongAnswerDetail | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Listen for wrong-answer events
  useEffect(() => {
    const handler = (e: Event) => {
      const d = (e as CustomEvent<WrongAnswerDetail>).detail;
      if (!d?.question || !d?.correctAnswer) return;

      // Reset state for new question
      setDetail(d);
      setResponse(null);
      setLoading(false);
      setVisible(true);

      // Auto-hide after 12s if user doesn't interact
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setVisible(false), 12000);
    };

    window.addEventListener("plizio-wrong-answer", handler);
    return () => window.removeEventListener("plizio-wrong-answer", handler);
  }, []);

  const handleAsk = useCallback(async () => {
    if (!detail || loading) return;

    // Cancel auto-hide — user is engaging
    if (hideTimerRef.current) { clearTimeout(hideTimerRef.current); hideTimerRef.current = null; }

    setLoading(true);
    const result = await askWhyCorrect({
      question: detail.question,
      wrongAnswer: detail.wrongAnswer,
      correctAnswer: detail.correctAnswer,
      topic: detail.topic,
      lang: detail.lang,
    });
    setLoading(false);

    const ui = UI[detail.lang] || UI.en;
    if (result) {
      setResponse(result);
      speakText(result, detail.lang);
    } else {
      setResponse(ui.error);
    }
  }, [detail, loading]);

  const handleClose = useCallback(() => {
    setVisible(false);
    if (hideTimerRef.current) { clearTimeout(hideTimerRef.current); hideTimerRef.current = null; }
  }, []);

  const lang = detail?.lang || "en";
  const ui = UI[lang] || UI.en;

  return (
    <AnimatePresence>
      {visible && detail && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-[60] max-w-sm mx-auto"
        >
          <div
            className="rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-md"
            style={{
              background: "linear-gradient(135deg, rgba(180,77,255,0.15), rgba(0,212,255,0.08))",
              border: "1.5px solid rgba(180,77,255,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(180,77,255,0.15)",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-white/40 hover:text-white/70 transition-colors"
            >
              <X size={12} />
            </button>

            {/* Before asking */}
            {!response && !loading && (
              <div className="flex items-center gap-3">
                <span className="text-xl">🤖</span>
                <motion.button
                  onClick={handleAsk}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all"
                  style={{
                    background: "rgba(180,77,255,0.2)",
                    border: "1.5px solid rgba(180,77,255,0.5)",
                    color: "#D4A0FF",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles size={14} />
                  {ui.why}
                </motion.button>
                <span className="text-xs text-white/30 flex-1">
                  {lang === "hu" ? "Kérdezd meg az AI-t!" : lang === "de" ? "Frag die KI!" : lang === "ro" ? "Întreabă AI-ul!" : "Ask the AI!"}
                </span>
              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="flex items-center gap-3 py-1">
                <span className="text-xl">🤖</span>
                <Loader2 size={16} className="animate-spin text-purple-400" />
                <span className="text-xs font-medium text-white/40">
                  {lang === "hu" ? "Gondolkodom..." : lang === "de" ? "Ich denke nach..." : lang === "ro" ? "Mă gândesc..." : "Thinking..."}
                </span>
              </div>
            )}

            {/* AI Response */}
            {response && (
              <div className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">🤖</span>
                <p className="text-xs font-medium text-white/75 leading-relaxed flex-1">{response}</p>
                <button
                  onClick={() => speakText(response, lang)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 transition-colors shrink-0"
                  style={{ background: "rgba(180,77,255,0.15)" }}
                >
                  <Volume2 size={12} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(AITutorOverlay);
