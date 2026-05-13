"use client";
import { useEffect } from "react";
import { pois } from "@/lib/seo/slugs";
import { buildPoiPath, type Lang } from "@/lib/seo/slugs";
import { hasIndexableContent } from "@/lib/seo/routes";

const SUPPORTED: Lang[] = ["de", "hu", "ro", "en"];

export default function RandomPoiPage() {
  useEffect(() => {
    const indexable = pois.filter(
      (p) => p && p.type !== "region" && p.type !== "country" && hasIndexableContent(p),
    );
    if (indexable.length === 0) {
      window.location.href = "/";
      return;
    }
    const lang = (typeof navigator !== "undefined"
      ? (navigator.language || "de").slice(0, 2)
      : "de") as Lang;
    const chosen = indexable[Math.floor(Math.random() * indexable.length)];
    const usedLang = SUPPORTED.includes(lang) ? lang : "de";
    window.location.replace(buildPoiPath(usedLang, chosen));
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020408] text-white">
      <div className="text-center">
        <div className="text-5xl mb-4 animate-pulse">🎲</div>
        <p className="text-white/70 text-sm">Loading a random place…</p>
      </div>
    </main>
  );
}
