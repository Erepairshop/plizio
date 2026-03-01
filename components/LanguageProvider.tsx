"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "@/lib/language";
import { getLanguage, saveLanguage } from "@/lib/language";

interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LangContext = createContext<LangContextType>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    setLangState(getLanguage());
  }, []);

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
