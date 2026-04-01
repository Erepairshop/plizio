"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "hu", flag: "🇭🇺", label: "Magyar" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "ro", flag: "🇷🇴", label: "Română" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = LANGS.find((l) => l.code === lang) || LANGS.find((l) => l.code === "en") || LANGS[0];

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Trigger — small globe + active flag */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-2.5 py-1.5 hover:bg-white/10 transition-colors"
        whileTap={{ scale: 0.92 }}
      >
        <Globe size={13} className="text-white/30" />
        <span suppressHydrationWarning className="text-base leading-none select-none">{active.flag}</span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 mt-1.5 flex flex-col bg-[#12122A]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {LANGS.map((l) => {
              const isActive = lang === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-[#00D4FF]/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white/90"
                  }`}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span className="font-medium">{l.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
