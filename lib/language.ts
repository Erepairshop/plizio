export type Language = "hu" | "de" | "en" | "ro";

const STORAGE_KEY = "plizio_language";

export function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "hu";
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("hu")) return "hu";
  if (nav.startsWith("de")) return "de";
  if (nav.startsWith("ro")) return "ro";
  return "hu";
}

export function getSavedLanguage(): Language | null {
  if (typeof window === "undefined") return null;
  return (localStorage.getItem(STORAGE_KEY) as Language) || null;
}

export function saveLanguage(lang: Language): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, lang);
}

export function getLanguage(): Language {
  return getSavedLanguage() ?? detectBrowserLanguage();
}
