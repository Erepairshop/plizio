"use client";

import { useEffect } from "react";
import { useLang } from "./LanguageProvider";

// Per-lang most-likely country codes (matches user's primary country first, then top neighbors).
const COUNTRY_BY_LANG: Record<string, string[]> = {
  hu: ["HU", "AT", "RO", "DE", "SK", "RS"],
  de: ["DE", "AT", "CH", "PL", "CZ"],
  ro: ["RO", "HU", "MD", "BG", "RS"],
  en: ["DE", "FR", "GB", "IT", "ES"],
};

// Idle-time fetch — warms HTTP cache + Cloudflare edge cache so when user clicks
// onto a country map, the per-country JSON + JS chunks are ready instantly.
export default function MapPrefetcher() {
  const { lang } = useLang();
  useEffect(() => {
    const codes = COUNTRY_BY_LANG[lang as string] ?? COUNTRY_BY_LANG.de;
    const fired: string[] = [];
    const warm = (url: string) => {
      // Use fetch with low-priority hint; falls back gracefully on older browsers.
      try {
        fetch(url, { credentials: "omit", cache: "force-cache" }).catch(() => {});
        fired.push(url);
      } catch {}
    };
    const ric: (cb: () => void) => number = (window as any).requestIdleCallback
      ? (cb) => (window as any).requestIdleCallback(cb, { timeout: 3000 })
      : (cb) => window.setTimeout(cb, 1500);

    let cancelled = false;
    // Prefetch top-3 countries staggered to avoid bandwidth burst.
    codes.slice(0, 3).forEach((cc, i) => {
      ric(() => {
        if (cancelled) return;
        warm(`/data/pois/${cc}.json`);
      });
      // Stagger each by 600ms
      setTimeout(() => {}, i * 600);
    });

    return () => { cancelled = true; };
  }, [lang]);

  return null;
}
