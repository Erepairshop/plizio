"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "plizio_cookie_consent";

const T = {
  de: {
    text: "Wir nutzen Google Analytics um unsere Seite zu verbessern. Ihre Daten werden anonym verarbeitet.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    privacy: "Datenschutz",
  },
  en: {
    text: "We use Google Analytics to improve our site. Your data is processed anonymously.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy",
  },
  hu: {
    text: "Google Analytics-t használunk az oldal fejlesztéséhez. Az adatok anonimizálva kerülnek feldolgozásra.",
    accept: "Elfogadom",
    decline: "Elutasítom",
    privacy: "Adatvédelem",
  },
  ro: {
    text: "Folosim Google Analytics pentru a îmbunătăți site-ul. Datele sunt procesate anonim.",
    accept: "Accept",
    decline: "Refuz",
    privacy: "Confidențialitate",
  },
};

function detectLang(): keyof typeof T {
  if (typeof navigator === "undefined") return "en";
  const l = navigator.language?.toLowerCase() ?? "";
  if (l.startsWith("hu")) return "hu";
  if (l.startsWith("ro")) return "ro";
  if (l.startsWith("de")) return "de";
  return "en";
}

function loadGA() {
  if (typeof window === "undefined") return;
  if ((window as unknown as Record<string, unknown>).__plizio_ga_loaded) return;
  (window as unknown as Record<string, unknown>).__plizio_ga_loaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-BR2WCCRFG0";
  document.head.appendChild(s);
  s.onload = () => {
    const w = window as unknown as Record<string, unknown>;
    w.dataLayer = (w.dataLayer as unknown[]) || [];
    function gtag(...args: unknown[]) { (w.dataLayer as unknown[]).push(args); }
    gtag("js", new Date());
    gtag("config", "G-BR2WCCRFG0", { anonymize_ip: true });
  };
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<keyof typeof T>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted") { loadGA(); return; }
    if (saved === "declined") return;
    // No decision yet — show banner after short delay
    setLang(detectLang());
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    loadGA();
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  const t = T[lang];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "rgba(10,10,26,0.97)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <p style={{ color: "#b0b0cc", fontSize: 13, margin: 0, flex: "1 1 240px", lineHeight: 1.5 }}>
        {t.text}{" "}
        <a href="/privacy/" style={{ color: "#00D4FF", textDecoration: "underline", fontSize: 12 }}>{t.privacy}</a>
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{ fontSize: 13, fontWeight: 600, padding: "7px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#9999bb", cursor: "pointer" }}
        >
          {t.decline}
        </button>
        <button
          onClick={accept}
          style={{ fontSize: 13, fontWeight: 700, padding: "7px 18px", borderRadius: 8, border: "none", background: "linear-gradient(90deg,#00FF88,#00D4FF)", color: "#0A0A1A", cursor: "pointer" }}
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
