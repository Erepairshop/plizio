"use client";
import { useEffect } from "react";

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
  useEffect(() => {
    loadGA();
  }, []);

  return null;
}
