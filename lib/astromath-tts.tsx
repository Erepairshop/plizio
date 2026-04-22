"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, VolumeOff } from "lucide-react";

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

// Strict check: does the system actually have a voice matching the base language?
// If false, calling speak() will silently no-op (better than wrong-accent fallback).
export function isTtsAvailable(lang: string): boolean {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  const bcp47 = LANG_TO_TTS[lang] ?? "en-US";
  const voice = getBestVoice(bcp47);
  if (!voice) return false;
  const baseLang = bcp47.split("-")[0].toLowerCase();
  return voice.lang.toLowerCase().startsWith(baseLang);
}

// User-facing message when TTS voice is missing for a language
const TTS_MISSING_MSG: Record<string, string> = {
  hu: "Magyar hangolvasás nem elérhető ezen az eszközön.\n\nAndroid telepítés:\nBeállítások → Általános kezelés → Nyelv és bevitel → Szöveg-beszéd → Google beszédszolgáltatás → Magyar nyelvcsomag\n\niPhone:\nBeállítások → Kisegítő lehetőségek → Felolvasás → Hangok → Magyar",
  de: "Deutsche Sprachausgabe nicht verfügbar.\n\nAndroid:\nEinstellungen → Sprache und Eingabe → Text-zu-Sprache → Google TTS → Deutsch-Sprachpaket installieren\n\niPhone:\nEinstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Deutsch",
  en: "Speech voice not available on this device.\n\nAndroid:\nSettings → Language & Input → Text-to-Speech → Google TTS → Install English voice\n\niPhone:\nSettings → Accessibility → Spoken Content → Voices → English",
  ro: "Vocea de citire în limba română nu este disponibilă.\n\nAndroid:\nSetări → Limbă și introducere → Text-to-Speech → Google TTS → Instalează pachetul română\n\niPhone:\nSetări → Accesibilitate → Conținut vorbit → Voci → Română",
};

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

export function speak(text: string, lang: string, onEnd?: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const clean = emojiToSpoken(text, lang);
  if (!clean) return;
  const bcp47 = LANG_TO_TTS[lang] ?? "en-US";
  const voice = getBestVoice(bcp47);
  const baseLang = bcp47.split("-")[0].toLowerCase();
  // Strict: if no voice matches the requested language, skip speaking
  // (better silent than wrong-accent fallback like English for Hungarian)
  if (!voice || !voice.lang.toLowerCase().startsWith(baseLang)) {
    if (onEnd) onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(clean);
  const params = LANG_TTS_PARAMS[lang] ?? { rate: 0.88, pitch: 1.1 };
  utt.lang = bcp47;
  utt.rate = params.rate;
  utt.pitch = params.pitch;
  utt.voice = voice;
  if (onEnd) { utt.onend = onEnd; utt.onerror = onEnd; }
  window.speechSynthesis.speak(utt);
}

export function SpeakButton({ text, lang, size = 18 }: { text: string; lang: string; size?: number }) {
  const [speaking, setSpeaking] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => { setSpeaking(false); }, [text]);

  // Re-check voice availability when voices load (Safari/iOS mount race)
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const check = () => setAvailable(isTtsAvailable(lang));
    check();
    window.speechSynthesis.addEventListener("voiceschanged", check);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", check);
  }, [lang]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!available) {
      const msg = TTS_MISSING_MSG[lang] ?? TTS_MISSING_MSG.en;
      alert(msg);
      return;
    }
    if (speaking || (typeof window !== "undefined" && window.speechSynthesis?.speaking)) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    } else {
      speak(text, lang, () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  const unavailableClass = "bg-white/5 text-white/30 hover:bg-white/10";
  const speakingClass = "bg-blue-500/30 text-blue-300 hover:bg-blue-500/40";
  const idleClass = "bg-white/10 text-white/70 hover:bg-white/20 active:bg-white/30";

  return (
    <motion.button
      onClick={handleClick}
      aria-label={!available ? "TTS not available" : speaking ? "Stop" : "Speak question"}
      title={!available ? "TTS nem elérhető — kattints az útmutatóért" : undefined}
      className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors flex-shrink-0 ${
        !available ? unavailableClass : speaking ? speakingClass : idleClass
      }`}
      whileTap={{ scale: 0.9 }}
      animate={speaking ? { scale: [1, 1.08, 1] } : {}}
      transition={speaking ? { repeat: Infinity, duration: 1.2 } : {}}>
      {!available ? <VolumeOff size={size} /> : speaking ? <VolumeX size={size} /> : <Volume2 size={size} />}
    </motion.button>
  );
}
