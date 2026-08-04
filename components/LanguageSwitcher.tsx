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

const SWITCHER_LABEL: Record<Language, string> = {
  de: "Sprache auswählen",
  en: "Choose language",
  hu: "Nyelv kiválasztása",
  ro: "Alege limba",
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = LANGS.find((l) => l.code === lang) || LANGS.find((l) => l.code === "hu") || LANGS[0];

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Trigger — small globe + active flag */}
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={SWITCHER_LABEL[lang]}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-switcher-menu"
        className="flex items-center gap-1.5 border border-[#ddd4c2] bg-[#fbf8f1]/95 px-2.5 py-1.5 text-[#211d18] shadow-[2px_2px_0_rgba(33,29,24,.14)] transition-colors hover:border-[#b4502a]"
        whileTap={{ scale: 0.92 }}
      >
        <Globe size={13} className="text-[#6b6356]" />
        <span suppressHydrationWarning className="text-base leading-none select-none">{active.flag}</span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="language-switcher-menu"
            role="menu"
            aria-label={SWITCHER_LABEL[lang]}
            className="absolute top-full left-0 z-50 mt-1.5 flex flex-col overflow-hidden border border-[#ddd4c2] bg-[#fbf8f1]/95 shadow-xl backdrop-blur-xl"
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
                  role="menuitemradio"
                  aria-checked={isActive}
                  className={`flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-[#f3e7df] text-[#8f3d1f]"
                      : "text-[#6b6356] hover:bg-[#efe8da] hover:text-[#211d18]"
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
