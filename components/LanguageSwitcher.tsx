"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.div
      className="flex items-center gap-0.5 bg-white/[0.04] border border-white/10 rounded-2xl p-1"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {LANGS.map((l) => {
        const isActive = lang === l.code;
        return (
          <motion.button
            key={l.code}
            onClick={() => setLang(l.code)}
            className="relative px-2.5 py-1.5 rounded-xl text-xl select-none"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title={l.label}
          >
            {isActive && (
              <motion.div
                layoutId="lang-pill"
                className="absolute inset-0 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30"
                style={{ boxShadow: "0 0 14px rgba(0,212,255,0.25)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{l.flag}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
