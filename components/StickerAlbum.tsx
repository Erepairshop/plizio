"use client";

// components/StickerAlbum.tsx
// Plizio-stilusu sticker-album (ur-tema, lila/kek gradiens, sotet hatter).
// Hasznalja a lib/plizioStickers data-t + components/StickerArt SVG-ket + lib/plizioStickerProgress unlock-allapotot.

import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Lock, Sparkles, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import {
  PLIZIO_STICKERS,
  RARITY_COLOR,
  RARITY_LABEL_4L,
  resolveStatValue,
  stickerName,
  type LocalizedText,
  type StickerDef,
  type StickerRarity,
} from "@/lib/plizioStickers";
import {
  STICKERS_EVT_CHANGED,
  getUnlockedStickerIds,
} from "@/lib/plizioStickerProgress";
import { STICKER_ART } from "@/components/StickerArt";

type Lang = "de" | "en" | "hu" | "ro";

const UI_COPY: Record<
  "title" | "subtitle" | "collected" | "open" | "complete" | "allStickers" | "close" | "unknown" | "back",
  LocalizedText
> = {
  title: { de: "Sticker-Album", en: "Sticker Album", hu: "Matrica-album", ro: "Album de stickere" },
  subtitle: {
    de: "Deine Weltraum-Sammlung",
    en: "Your space collection",
    hu: "Az űr-gyűjteményed",
    ro: "Colecția ta spațială",
  },
  collected: { de: "Gesammelt", en: "Collected", hu: "Összegyűjtve", ro: "Colectate" },
  open: { de: "offen", en: "open", hu: "hátra", ro: "de colectat" },
  complete: { de: "komplett", en: "complete", hu: "kész", ro: "complet" },
  allStickers: { de: "Alle Sticker", en: "All stickers", hu: "Minden matrica", ro: "Toate stickerele" },
  close: { de: "Schließen", en: "Close", hu: "Bezárás", ro: "Închide" },
  unknown: { de: "???", en: "???", hu: "???", ro: "???" },
  back: { de: "Zurück", en: "Back", hu: "Vissza", ro: "Înapoi" },
};

const ALL_KEY: LocalizedText = { de: "Alle", en: "All", hu: "Mind", ro: "Toate" };

function rarityFrame(rarity: StickerRarity): string {
  // Tailwind-kompatibilis, de szin-egyediseg miatt inline-olt borderColor-t hasznalunk.
  switch (rarity) {
    case "legendary":
      return "shadow-[0_0_30px_rgba(255,204,42,0.35),0_0_60px_rgba(255,204,42,0.12)]";
    case "epic":
      return "shadow-[0_0_24px_rgba(199,123,255,0.35)]";
    case "rare":
      return "shadow-[0_0_20px_rgba(74,168,255,0.30)]";
    default:
      return "shadow-[0_0_14px_rgba(154,160,196,0.25)]";
  }
}

function StickerCard({
  sticker,
  index,
  locked,
  lang,
  onClick,
}: {
  sticker: StickerDef;
  index: number;
  locked: boolean;
  lang: Lang;
  onClick: (s: StickerDef) => void;
}) {
  const Art = STICKER_ART[sticker.id];
  const rarityColor = RARITY_COLOR[sticker.rarity];
  const label = RARITY_LABEL_4L[sticker.rarity][lang] ?? RARITY_LABEL_4L[sticker.rarity].de;
  const name = locked ? UI_COPY.unknown[lang] : stickerName(sticker, lang);

  return (
    <button
      type="button"
      onClick={() => !locked && onClick(sticker)}
      disabled={locked}
      aria-label={locked ? `${label} — ${UI_COPY.unknown[lang]}` : `${label} — ${name}`}
      className={`group relative flex flex-col items-stretch rounded-2xl border transition-all outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
        locked ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5 cursor-pointer"
      } ${rarityFrame(sticker.rarity)}`}
      style={{
        background: "linear-gradient(180deg, rgba(30,14,74,0.85) 0%, rgba(15,7,40,0.9) 100%)",
        borderColor: `${rarityColor}66`,
      }}
    >
      {/* Halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${sticker.halo}, transparent 60%)`,
        }}
      />

      {/* Top bar: rarity chip + # */}
      <div className="relative z-10 flex items-center justify-between px-2.5 pt-2 text-[10px] font-extrabold uppercase tracking-wider">
        <span
          className="rounded-full px-2 py-0.5"
          style={{ color: rarityColor, background: `${rarityColor}22`, border: `1px solid ${rarityColor}55` }}
        >
          {label}
        </span>
        <span className="text-white/40">#{String(index + 1).padStart(2, "0")}</span>
      </div>

      {/* Art */}
      <div className="relative z-10 flex items-center justify-center px-3 py-2 aspect-square">
        {locked ? (
          <Lock size={40} className="text-white/30" aria-hidden />
        ) : Art ? (
          <Art />
        ) : null}
      </div>

      {/* Name */}
      <div className="relative z-10 px-3 pb-2.5 text-center">
        <div className="text-white/90 font-bold text-sm leading-tight truncate">{name}</div>
      </div>
    </button>
  );
}

function StickerModal({
  sticker,
  lang,
  onClose,
}: {
  sticker: StickerDef | null;
  lang: Lang;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!sticker) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sticker, onClose]);

  return (
    <AnimatePresence>
      {sticker && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={stickerName(sticker, lang)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 24, stiffness: 220 }}
            className="relative w-full max-w-md rounded-3xl border p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(180deg, #1a0a4a 0%, #0a0528 100%)",
              borderColor: `${RARITY_COLOR[sticker.rarity]}66`,
              boxShadow: `0 20px 60px ${RARITY_COLOR[sticker.rarity]}33`,
            }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={UI_COPY.close[lang]}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 flex items-center justify-center transition"
            >
              <X size={18} />
            </button>

            {/* Art */}
            <div className="flex items-center justify-center py-3">
              <div
                className="relative w-48 h-48 rounded-3xl flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${sticker.halo}, transparent 65%)`,
                }}
              >
                {(() => {
                  const Art = STICKER_ART[sticker.id];
                  return Art ? <Art /> : null;
                })()}
              </div>
            </div>

            {/* Name + tags */}
            <div className="px-1">
              <h2 className="text-2xl font-black text-white tracking-tight">{stickerName(sticker, lang)}</h2>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
                <span className="rounded-full px-2.5 py-1 bg-white/10 text-white/80">
                  {sticker.category[lang] ?? sticker.category.de}
                </span>
                <span
                  className="rounded-full px-2.5 py-1"
                  style={{
                    color: RARITY_COLOR[sticker.rarity],
                    background: `${RARITY_COLOR[sticker.rarity]}22`,
                    border: `1px solid ${RARITY_COLOR[sticker.rarity]}55`,
                  }}
                >
                  {"\u2605 "}
                  {RARITY_LABEL_4L[sticker.rarity][lang] ?? RARITY_LABEL_4L[sticker.rarity].de}
                </span>
              </div>

              {/* Fact */}
              <div className="mt-4 text-white/85 text-[15px] leading-relaxed flex gap-2">
                <Sparkles size={18} className="text-yellow-300 shrink-0 mt-0.5" aria-hidden />
                <p>{sticker.fact[lang] ?? sticker.fact.de}</p>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                {sticker.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <div className="text-[10px] uppercase tracking-wider font-extrabold text-white/50">
                      {s.label[lang] ?? s.label.de}
                    </div>
                    <div className="text-white/90 font-bold text-sm leading-tight mt-0.5">
                      {resolveStatValue(s.value, lang)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function StickerAlbum() {
  const router = useRouter();
  const { lang } = useLang();
  const l = ((lang as Lang) ?? "de") as Lang;

  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [active, setActive] = useState<StickerDef | null>(null);
  const [filter, setFilter] = useState<string>("__all__");

  // Read + subscribe to localStorage unlocks
  useEffect(() => {
    setUnlockedIds(getUnlockedStickerIds());
    const onChanged = () => setUnlockedIds(getUnlockedStickerIds());
    window.addEventListener(STICKERS_EVT_CHANGED, onChanged);
    window.addEventListener("storage", onChanged);
    return () => {
      window.removeEventListener(STICKERS_EVT_CHANGED, onChanged);
      window.removeEventListener("storage", onChanged);
    };
  }, []);

  const unlockedSet = useMemo(() => new Set(unlockedIds), [unlockedIds]);

  const categoryOptions = useMemo(() => {
    const map = new Map<string, { key: string; label: LocalizedText; count: number }>();
    map.set("__all__", { key: "__all__", label: ALL_KEY, count: PLIZIO_STICKERS.length });
    PLIZIO_STICKERS.forEach((s) => {
      const key = s.category.de;
      const entry = map.get(key);
      if (entry) entry.count += 1;
      else map.set(key, { key, label: s.category, count: 1 });
    });
    return Array.from(map.values());
  }, []);

  const visible = useMemo(() => {
    if (filter === "__all__") return PLIZIO_STICKERS;
    return PLIZIO_STICKERS.filter((s) => s.category.de === filter);
  }, [filter]);

  const total = PLIZIO_STICKERS.length;
  const count = unlockedSet.size;
  const pct = Math.round((count / total) * 100);
  const remaining = total - count;

  const handleBack = useCallback(() => {
    router.push("/learn");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#060614] text-white relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 3) % 100}%`,
              width: (i % 4) * 0.5 + 0.5,
              height: (i % 4) * 0.5 + 0.5,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 2 + (i % 5) * 0.4, delay: (i % 9) * 0.3, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Purple/blue space gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 500px at 50% -10%, rgba(124,77,255,0.25), transparent 70%), radial-gradient(800px 500px at 90% 10%, rgba(59,109,255,0.18), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-5 pb-20">
        {/* Header */}
        <header className="flex items-center gap-3 mb-6">
          <button
            onClick={handleBack}
            aria-label={UI_COPY.back[l]}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 flex items-center justify-center transition"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-black leading-tight">{UI_COPY.title[l]}</h1>
            <p className="text-white/50 text-xs">{UI_COPY.subtitle[l]}</p>
          </div>
        </header>

        {/* Progress card */}
        <div
          className="rounded-3xl p-4 sm:p-5 border border-white/10 mb-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,20,90,0.7) 0%, rgba(20,10,45,0.85) 100%)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-wider font-extrabold text-white/60">
              {UI_COPY.collected[l]}
            </div>
            <div className="text-2xl sm:text-3xl font-black">
              {count}
              <span className="text-white/40 text-base sm:text-lg"> / {total}</span>
            </div>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", damping: 20, stiffness: 120 }}
              style={{
                background:
                  "linear-gradient(90deg, #7c4dff 0%, #4aa8ff 60%, #22d3a0 100%)",
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider font-extrabold text-white/50">
            <span>
              {pct}% {UI_COPY.complete[l]}
            </span>
            <span>
              {remaining} {UI_COPY.open[l]}
            </span>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categoryOptions.map((opt) => {
            const label = opt.label[l] ?? opt.label.de;
            const active = filter === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setFilter(opt.key)}
                aria-pressed={active}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition border ${
                  active
                    ? "bg-white text-[#140732] border-white"
                    : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
                }`}
              >
                {label}
                <span className="ml-1 opacity-60">{opt.count}</span>
              </button>
            );
          })}
        </div>

        {/* Section title */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-white/70">
            {UI_COPY.allStickers[l]}
          </h2>
          <span className="text-xs font-bold text-white/50 bg-white/5 px-2 py-0.5 rounded-full">
            {visible.length}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {visible.map((s) => {
            const idx = PLIZIO_STICKERS.findIndex((x) => x.id === s.id);
            const locked = !unlockedSet.has(s.id);
            return (
              <StickerCard
                key={s.id}
                sticker={s}
                index={idx}
                locked={locked}
                lang={l}
                onClick={setActive}
              />
            );
          })}
        </div>
      </div>

      <StickerModal sticker={active} lang={l} onClose={() => setActive(null)} />
    </div>
  );
}
