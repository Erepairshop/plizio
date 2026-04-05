"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ChevronDown,
  Factory,
  FlaskConical,
  Handshake,
  Radar,
  Shield,
  Swords,
  X,
} from "lucide-react";

/* ═══════════════════════════ TYPES ═══════════════════════════ */

type BonusType = "buff" | "debuff" | "neutral";

interface MultiplierBreakdown {
  label: Record<string, string>;
  source: string;
  value: number;
  type: BonusType;
}

interface TacticalCategory {
  id: string;
  icon: React.ReactNode;
  label: Record<string, string>;
  accentColor: string;
  accentGlow: string;
  borderColor: string;
  bgColor: string;
  multipliers: {
    key: string;
    label: Record<string, string>;
    total: number;
    breakdown: MultiplierBreakdown[];
  }[];
}

interface CommanderTacticalOverviewProps {
  open: boolean;
  onClose: () => void;
  lang: string;
  /** When real data arrives from sim, pass it here. Falls back to mock. */
  categories?: TacticalCategory[];
}

/* ═══════════════════════════ i18n ═══════════════════════════ */

const L = {
  tagline:  { en: "TACTICAL FEED",         hu: "TAKTIKAI ADATFOLYAM",       de: "TAKTISCHES FEED",           ro: "FLUX TACTIC" },
  title:    { en: "COMMANDER'S OVERVIEW",   hu: "PARANCSNOKI ÁTTEKINTÉS",    de: "KOMMANDANTEN-ÜBERSICHT",    ro: "PREZENTAREA COMANDANTULUI" },
  base:     { en: "Base",                   hu: "Alap",                      de: "Basis",                     ro: "Bază" },
  total:    { en: "Total",                  hu: "Összesen",                  de: "Gesamt",                    ro: "Total" },
  close:    { en: "DISMISS",               hu: "BEZÁRÁS",                   de: "SCHLIESSEN",                ro: "ÎNCHIDE" },
};

function t(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en ?? "";
}

/* ═══════════════════════════ MOCK DATA ═══════════════════════ */

function getMockCategories(): TacticalCategory[] {
  return [
    {
      id: "economy",
      icon: <Factory size={14} />,
      label: { en: "ECONOMY", hu: "GAZDASÁG", de: "WIRTSCHAFT", ro: "ECONOMIE" },
      accentColor: "text-amber-400",
      accentGlow: "shadow-[0_0_8px_rgba(251,191,36,0.15)]",
      borderColor: "border-amber-500/20",
      bgColor: "bg-amber-950/20",
      multipliers: [
        {
          key: "production",
          label: { en: "Production Rate", hu: "Termelési ráta", de: "Produktionsrate", ro: "Rată de producție" },
          total: 1.15,
          breakdown: [
            { label: { en: "Base", hu: "Alap", de: "Basis", ro: "Bază" }, source: "base", value: 1.0, type: "neutral" },
            { label: { en: "Logistics Lv8", hu: "Logisztika Lv8", de: "Logistik Lv8", ro: "Logistică Lv8" }, source: "module", value: 0.10, type: "buff" },
            { label: { en: "Calm Trait", hu: "Nyugodt Jellemvonás", de: "Ruhiges Merkmal", ro: "Trăsătură Calm" }, source: "trait", value: 0.10, type: "buff" },
            { label: { en: "Imperial Tax", hu: "Birodalmi Adó", de: "Imperiale Steuer", ro: "Taxă Imperială" }, source: "faction", value: -0.05, type: "debuff" },
          ],
        },
        {
          key: "tradeYield",
          label: { en: "Trade Yield", hu: "Kereskedelmi hozam", de: "Handelsertrag", ro: "Randament comercial" },
          total: 1.10,
          breakdown: [
            { label: { en: "Base", hu: "Alap", de: "Basis", ro: "Bază" }, source: "base", value: 1.0, type: "neutral" },
            { label: { en: "Merchant Alliance", hu: "Kereskedő Szövetség", de: "Händlerallianz", ro: "Alianța Comercianților" }, source: "faction", value: 0.10, type: "buff" },
          ],
        },
      ],
    },
    {
      id: "tech",
      icon: <FlaskConical size={14} />,
      label: { en: "RESEARCH", hu: "KUTATÁS", de: "FORSCHUNG", ro: "CERCETARE" },
      accentColor: "text-cyan-400",
      accentGlow: "shadow-[0_0_8px_rgba(6,182,212,0.15)]",
      borderColor: "border-cyan-500/20",
      bgColor: "bg-cyan-950/20",
      multipliers: [
        {
          key: "research",
          label: { en: "Research Speed", hu: "Kutatási sebesség", de: "Forschungsgeschwindigkeit", ro: "Viteză cercetare" },
          total: 1.20,
          breakdown: [
            { label: { en: "Base", hu: "Alap", de: "Basis", ro: "Bază" }, source: "base", value: 1.0, type: "neutral" },
            { label: { en: "Sensor Lv6", hu: "Szenzor Lv6", de: "Sensor Lv6", ro: "Senzor Lv6" }, source: "module", value: 0.12, type: "buff" },
            { label: { en: "Analyst Officer", hu: "Elemző Tiszt", de: "Analytiker-Offizier", ro: "Ofițer Analist" }, source: "officer", value: 0.08, type: "buff" },
          ],
        },
      ],
    },
    {
      id: "military",
      icon: <Swords size={14} />,
      label: { en: "MILITARY", hu: "KATONASÁG", de: "MILITÄR", ro: "MILITAR" },
      accentColor: "text-red-400",
      accentGlow: "shadow-[0_0_8px_rgba(248,113,113,0.15)]",
      borderColor: "border-red-500/20",
      bgColor: "bg-red-950/15",
      multipliers: [
        {
          key: "repair",
          label: { en: "Repair Efficiency", hu: "Javítási hatékonyság", de: "Reparatureffizienz", ro: "Eficiență reparație" },
          total: 0.90,
          breakdown: [
            { label: { en: "Base", hu: "Alap", de: "Basis", ro: "Bază" }, source: "base", value: 1.0, type: "neutral" },
            { label: { en: "Battle Fatigue", hu: "Harci Fáradtság", de: "Kampfmüdigkeit", ro: "Oboseală de luptă" }, source: "status", value: -0.10, type: "debuff" },
          ],
        },
        {
          key: "expRisk",
          label: { en: "Expedition Risk", hu: "Expedíciós kockázat", de: "Expeditionsrisiko", ro: "Risc expediție" },
          total: 1.05,
          breakdown: [
            { label: { en: "Base", hu: "Alap", de: "Basis", ro: "Bază" }, source: "base", value: 1.0, type: "neutral" },
            { label: { en: "Scout Drone Recon", hu: "Felderítő Drón", de: "Aufklärungsdrohne", ro: "Dronă de recunoaștere" }, source: "unit", value: 0.05, type: "buff" },
          ],
        },
      ],
    },
    {
      id: "diplomacy",
      icon: <Handshake size={14} />,
      label: { en: "DIPLOMACY", hu: "DIPLOMÁCIA", de: "DIPLOMATIE", ro: "DIPLOMAȚIE" },
      accentColor: "text-violet-400",
      accentGlow: "shadow-[0_0_8px_rgba(167,139,250,0.15)]",
      borderColor: "border-violet-500/20",
      bgColor: "bg-violet-950/15",
      multipliers: [
        {
          key: "reputation",
          label: { en: "Reputation Gain", hu: "Reputáció növekedés", de: "Reputationsgewinn", ro: "Câștig reputație" },
          total: 1.08,
          breakdown: [
            { label: { en: "Base", hu: "Alap", de: "Basis", ro: "Bază" }, source: "base", value: 1.0, type: "neutral" },
            { label: { en: "Diplomat Officer", hu: "Diplomata Tiszt", de: "Diplomat-Offizier", ro: "Ofițer Diplomat" }, source: "officer", value: 0.05, type: "buff" },
            { label: { en: "Velari Favor", hu: "Velari Szívesség", de: "Velari-Gunst", ro: "Favoarea Velari" }, source: "faction", value: 0.03, type: "buff" },
          ],
        },
      ],
    },
  ];
}

/* ═══════════════════════════ ANIMATIONS ═══════════════════════ */

const backdropV = {
  hidden: { opacity: 0 } as const,
  visible: { opacity: 1, transition: { duration: 0.4 } } as const,
  exit: { opacity: 0, transition: { duration: 0.25 } } as const,
};

const modalV = {
  hidden: { opacity: 0, y: 36, scale: 0.95 } as const,
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 22, stiffness: 220, delay: 0.1 },
  },
  exit: { opacity: 0, y: 24, scale: 0.96, transition: { duration: 0.2 } } as const,
};

const scanV = {
  hidden: { scaleX: 0, opacity: 0 } as const,
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.35, ease: "easeOut" as const },
  },
};

const headerV = {
  hidden: { opacity: 0, y: -6 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.45 } } as const,
};

const catV = {
  hidden: { opacity: 0, x: -16 } as const,
  visible: { opacity: 1, x: 0 } as const,
};

const rowV = {
  hidden: { opacity: 0, x: -10 } as const,
  visible: { opacity: 1, x: 0 } as const,
};

const expandV = {
  collapsed: { height: 0, opacity: 0 } as const,
  expanded: { height: "auto" as const, opacity: 1, transition: { duration: 0.25 } },
};

const btnV = {
  hidden: { opacity: 0, y: 6 } as const,
  visible: { opacity: 1, y: 0, transition: { delay: 1.4, duration: 0.35 } } as const,
};

/* ═══════════════════════════ HELPERS ═══════════════════════════ */

function fmtMult(n: number): string {
  return n.toFixed(2) + "x";
}

function fmtDelta(n: number): string {
  if (n === 1.0) return "1.00x";
  const sign = n >= 0 ? "+" : "";
  return sign + n.toFixed(2) + "x";
}

function deltaColor(type: BonusType): string {
  if (type === "buff") return "text-emerald-400";
  if (type === "debuff") return "text-red-400";
  return "text-white/50";
}

function deltaBg(type: BonusType): string {
  if (type === "buff") return "bg-emerald-500/5";
  if (type === "debuff") return "bg-red-500/5";
  return "bg-white/[0.02]";
}

/* ═════════════════════ MULTIPLIER ROW (expandable) ═════════════ */

function MultiplierRow({
  mult,
  lang,
  index,
  catDelay,
}: {
  mult: TacticalCategory["multipliers"][number];
  lang: string;
  index: number;
  catDelay: number;
}) {
  const [open, setOpen] = useState(false);

  const totalColor =
    mult.total > 1.0
      ? "text-cyan-300"
      : mult.total < 1.0
      ? "text-red-300"
      : "text-white/70";

  return (
    <motion.div
      variants={rowV}
      initial="hidden"
      animate="visible"
      transition={{ delay: catDelay + 0.08 + index * 0.06, duration: 0.28 }}
    >
      {/* Header row — clickable */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
      >
        <span className="text-[13px] text-white/70 font-medium truncate">
          {t(mult.label, lang)}
        </span>

        <span className="flex items-center gap-1.5 shrink-0">
          <span className={`text-sm font-mono font-bold ${totalColor}`}>
            {fmtMult(mult.total)}
          </span>
          <ChevronDown
            size={12}
            className={`text-white/30 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {/* Expandable breakdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={expandV}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="mt-1 ml-2 mr-1 mb-2 rounded-lg border border-white/[0.05] bg-black/30 overflow-hidden">
              {mult.breakdown.map((b, bi) => (
                <div
                  key={bi}
                  className={`flex items-center justify-between px-3 py-1.5 ${deltaBg(b.type)} ${
                    bi > 0 ? "border-t border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-[11px] text-white/50 font-medium">
                    {t(b.label, lang)}
                  </span>
                  <span className={`text-[12px] font-mono font-bold ${deltaColor(b.type)}`}>
                    {fmtDelta(b.value)}
                  </span>
                </div>
              ))}

              {/* Total line */}
              <div className="flex items-center justify-between px-3 py-1.5 border-t border-cyan-500/15 bg-cyan-950/15">
                <span className="text-[11px] font-mono font-bold tracking-widest text-white/40 uppercase">
                  {t(L.total, lang)}
                </span>
                <span className="text-[13px] font-mono font-black text-cyan-300">
                  {fmtMult(mult.total)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════ MAIN COMPONENT ═══════════════════ */

export default function CommanderTacticalOverview({
  open,
  onClose,
  lang,
  categories,
}: CommanderTacticalOverviewProps) {
  const cats = categories ?? getMockCategories();

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[96] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            variants={backdropV}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalV}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[93vw] max-w-xl max-h-[85vh] flex flex-col rounded-[28px] border border-cyan-500/15 bg-[#060d1b]/[0.97] shadow-[0_0_80px_rgba(6,182,212,0.08),0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            {/* Top scanline */}
            <motion.div
              variants={scanV}
              initial="hidden"
              animate="visible"
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent origin-left"
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 h-7 w-7 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <X size={12} className="text-white/50" />
            </button>

            {/* Header */}
            <motion.div
              variants={headerV}
              initial="hidden"
              animate="visible"
              className="pt-6 pb-3 px-6 text-center shrink-0"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <Radar size={13} className="text-cyan-400/50 animate-pulse" />
                <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-cyan-400/40 uppercase">
                  {t(L.tagline, lang)}
                </span>
                <Activity size={13} className="text-cyan-400/50 animate-pulse" />
              </div>

              <h2 className="text-base sm:text-lg font-black tracking-[0.14em] text-white/90">
                {t(L.title, lang)}
              </h2>
            </motion.div>

            {/* Divider */}
            <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent shrink-0" />

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 min-h-0">
              {cats.map((cat, ci) => {
                const catDelay = 0.55 + ci * 0.18;

                return (
                  <motion.div
                    key={cat.id}
                    variants={catV}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: catDelay, duration: 0.3 }}
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-[1px] flex-1 ${cat.borderColor}`} />
                      <span className={`${cat.accentColor} opacity-70`}>{cat.icon}</span>
                      <span
                        className={`text-[9px] font-mono font-bold tracking-[0.22em] uppercase ${cat.accentColor} opacity-60`}
                      >
                        {t(cat.label, lang)}
                      </span>
                      <div className={`h-[1px] flex-1 ${cat.borderColor}`} />
                    </div>

                    {/* Multiplier rows */}
                    <div className="space-y-1.5">
                      {cat.multipliers.map((mult, mi) => (
                        <MultiplierRow
                          key={mult.key}
                          mult={mult}
                          lang={lang}
                          index={mi}
                          catDelay={catDelay}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom divider */}
            <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent shrink-0" />

            {/* Dismiss */}
            <motion.div
              variants={btnV}
              initial="hidden"
              animate="visible"
              className="px-6 pt-3 pb-5 shrink-0"
            >
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl font-black text-sm tracking-[0.2em] uppercase transition-all duration-300 border border-cyan-400/30 bg-cyan-500/8 text-cyan-200/80 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_18px_rgba(6,182,212,0.12)] active:scale-[0.98]"
              >
                {t(L.close, lang)}
              </button>
            </motion.div>

            {/* Bottom scanline */}
            <motion.div
              variants={scanV}
              initial="hidden"
              animate="visible"
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent origin-right"
            />

            {/* Ambient corner accents */}
            <div className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-l border-t border-cyan-500/[0.07] rounded-tl-[28px]" />
            <div className="pointer-events-none absolute top-0 right-0 w-16 h-16 border-r border-t border-cyan-500/[0.07] rounded-tr-[28px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-16 h-16 border-l border-b border-cyan-500/[0.05] rounded-bl-[28px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-r border-b border-cyan-500/[0.05] rounded-br-[28px]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
