"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "@/lib/language";
import { getLanguage, saveLanguage } from "@/lib/language";

interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LangContext = createContext<LangContextType>({ lang: "hu", setLang: () => {} });

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  /** Force a language (per-lang routes like /de/astromath). When set, this lang
   *  is used for the static (build-time) render AND persisted, so the prerendered
   *  HTML is correctly localized for search engines instead of the "hu" default. */
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang ?? "hu");

  useEffect(() => {
    if (initialLang) {
      setLangState(initialLang);
      saveLanguage(initialLang);
    } else {
      setLangState(getLanguage());
    }

    const handleStorage = () => {
      setLangState(getLanguage());
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [initialLang]);

  const setLang = (l: Language) => {
    setLangState(l);
    saveLanguage(l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
