import type { ReactNode } from "react";

export type Language = "de" | "hu" | "en" | "ro";

export type LocalizedTextObject = Record<Language, string>;

export interface LocalizedTextProps {
  text?: string | LocalizedTextObject;
  lang: Language;
  fallback?: string;
  children?: ReactNode;
}

export default function LocalizedText({ text, lang, fallback = "", children }: LocalizedTextProps) {
  if (children) return children;
  if (!text) return fallback;
  if (typeof text === "string") return text;
  return text[lang] ?? text.en ?? fallback;
}
