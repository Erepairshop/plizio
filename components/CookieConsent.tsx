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
    // Defer GTM: load after first user interaction OR after 5 sec idle — whichever comes first.
    // This keeps TBT/LCP low while still capturing analytics for real users.
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      events.forEach((ev) => window.removeEventListener(ev, fire));
      loadGA();
    };
    const events: (keyof WindowEventMap)[] = ["scroll", "click", "keydown", "touchstart"];
    events.forEach((ev) => window.addEventListener(ev, fire, { passive: true, once: true }));

    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (idle) {
      idle(fire, { timeout: 5000 });
    } else {
      setTimeout(fire, 5000);
    }

    return () => events.forEach((ev) => window.removeEventListener(ev, fire));
  }, []);

  return null;
}
