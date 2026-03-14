"use client";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

// ─── Language → BCP-47 mapping ────────────────────────────────────────────────
export const LANG_TO_TTS: Record<string, string> = {
  hu: "hu-HU", de: "de-DE", en: "en-US", ro: "ro-RO",
};

// Per-language TTS tuning: slower rate + neutral pitch helps robotic voices
const LANG_TTS_PARAMS: Record<string, { rate: number; pitch: number }> = {
  hu: { rate: 0.78, pitch: 1.0 },
  de: { rate: 0.88, pitch: 1.1 },
  en: { rate: 0.90, pitch: 1.1 },
  ro: { rate: 0.84, pitch: 1.05 },
};

// Cache the chosen voice per BCP-47 code so we don't re-scan every time
const voiceCache: Record<string, SpeechSynthesisVoice | null> = {};

// Bust voice cache when the browser finishes loading voices (Safari / iOS needs this)
if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    Object.keys(voiceCache).forEach((k) => delete voiceCache[k]);
    window.speechSynthesis.getVoices(); // eagerly populate
  };
}

function getBestVoice(bcp47: string): SpeechSynthesisVoice | null {
  if (bcp47 in voiceCache) return voiceCache[bcp47];
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null; // not loaded yet

  const baseLang = bcp47.split("-")[0].toLowerCase();

  const premium = voices.find(v =>
    v.lang.toLowerCase() === bcp47.toLowerCase() &&
    /google|enhanced|premium|neural/i.test(v.name)
  );
  if (premium) return (voiceCache[bcp47] = premium);

  const premiumBase = voices.find(v =>
    v.lang.toLowerCase().startsWith(baseLang) &&
    /google|enhanced|premium|neural/i.test(v.name)
  );
  if (premiumBase) return (voiceCache[bcp47] = premiumBase);

  const exact = voices.find(v => v.lang.toLowerCase() === bcp47.toLowerCase());
  if (exact) return (voiceCache[bcp47] = exact);

  const base = voices.find(v => v.lang.toLowerCase().startsWith(baseLang));
  return (voiceCache[bcp47] = base ?? null);
}

export function emojiToSpoken(text: string, lang = "en"): string {
  const ops: Record<string, Record<string, string>> = {
    minus:  { de: "minus", en: "minus", hu: "mínusz", ro: "minus" },
    plus:   { de: "plus",  en: "plus",  hu: "plusz",  ro: "plus"  },
    times:  { de: "mal",   en: "times", hu: "szorozva", ro: "înmulțit cu" },
    div:    { de: "geteilt durch", en: "divided by", hu: "osztva", ro: "împărțit la" },
    equals: { de: "gleich", en: "equals", hu: "egyenlő", ro: "egal cu" },
  };
  const l = lang in ops.minus ? lang : "en";
  return text
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]+/gu, (run) => {
      const count = [...run].length;
      return count > 1 ? String(count) : "";
    })
    .replace(/\s*÷\s*/g, ` ${ops.div[l]} `)
    .replace(/\s*×\s*/g, ` ${ops.times[l]} `)
    .replace(/\s*\*\s*/g, ` ${ops.times[l]} `)
    .replace(/\s*-\s*/g, ` ${ops.minus[l]} `)
    .replace(/\s*\+\s*/g, ` ${ops.plus[l]} `)
    .replace(/\s*=\s*\?/g, ` ${ops.equals[l]} ?`)
    .replace(/\s*=\s*/g, ` ${ops.equals[l]} `)
    .replace(/\?/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function speak(text: string, lang: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const clean = emojiToSpoken(text, lang);
  if (!clean) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(clean);
  const bcp47 = LANG_TO_TTS[lang] ?? "en-US";
  const params = LANG_TTS_PARAMS[lang] ?? { rate: 0.88, pitch: 1.1 };
  utt.lang = bcp47;
  utt.rate = params.rate;
  utt.pitch = params.pitch;
  const voice = getBestVoice(bcp47);
  if (voice) utt.voice = voice;
  window.speechSynthesis.speak(utt);
}

export function SpeakButton({ text, lang, size = 18 }: { text: string; lang: string; size?: number }) {
  return (
    <motion.button
      onClick={(e) => { e.stopPropagation(); speak(text, lang); }}
      aria-label="Speak question"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 active:bg-white/30 transition-colors flex-shrink-0"
      whileTap={{ scale: 0.9 }}>
      <Volume2 size={size} />
    </motion.button>
  );
}
