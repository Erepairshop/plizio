"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { BattleArmy, BattlePhase, BattleResult, EnemyBuilding } from "@/lib/gravitas/sim/battle/types";

interface BattleViewProps {
  result: BattleResult;
  enemy: EnemyBuilding;
  army: BattleArmy;
  onComplete: () => void;
  lang: string;
}

type Snapshot = {
  playerHp: number;
  playerShield: number;
  enemyHp: number;
  enemyShield: number;
};

const BAR_MAX = 100;

function localize(lang: string, v: LocalizedString): string {
  if (lang === "hu") return v.hu;
  if (lang === "de") return v.de;
  if (lang === "ro") return v.ro;
  return v.en;
}

function eventIcon(event: BattlePhase["event"]): string {
  switch (event) {
    case "trait_activate":
      return "⚡";
    case "counter":
      return "🛡";
    case "critical_hit":
      return "💥";
    case "shield_break":
      return "🔻";
    case "victory":
      return "✅";
    case "defeat":
      return "❌";
    case "retreat":
      return "↩";
    default:
      return "⚔";
  }
}

function inferStartBars(result: BattleResult): Snapshot {
  const dmgIn = Math.max(80, result.stats.damageReceived);
  const dmgOut = Math.max(80, result.stats.damageDealt);
  return {
    playerHp: BAR_MAX,
    playerShield: clamp((dmgIn / (dmgIn + 140)) * 100 + 25, 35, 90),
    enemyHp: BAR_MAX,
    enemyShield: clamp((dmgOut / (dmgOut + 140)) * 100 + 25, 35, 90),
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function damageToBarDelta(damage: number): number {
  return clamp(damage / 35, 1.2, 18);
}

export default function BattleView({ result, enemy, army, onComplete, lang }: BattleViewProps) {
  const timeline = useMemo(() => [...result.phases].sort((a, b) => a.timestamp - b.timestamp), [result.phases]);
  const [snapshot, setSnapshot] = useState<Snapshot>(() => inferStartBars(result));
  const [log, setLog] = useState<BattlePhase[]>([]);
  const [progressMs, setProgressMs] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const doneRef = useRef(false);
  const currentIndexRef = useRef(-1);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    doneRef.current = false;
    currentIndexRef.current = -1;
    setSnapshot(inferStartBars(result));
    setLog([]);
    setProgressMs(0);
    setCurrentIndex(-1);

    const startAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startAt;
      setProgressMs(Math.min(result.durationMs, elapsed));

      if (timeline.length > 0) {
        const nextIndex = timeline.findIndex((p) => p.timestamp > elapsed) - 1;
        const safeIndex = nextIndex < 0 ? (elapsed >= timeline[0]!.timestamp ? 0 : -1) : nextIndex;
        if (safeIndex > currentIndexRef.current) {
          const newEvents = timeline.slice(currentIndexRef.current + 1, safeIndex + 1);
          currentIndexRef.current = safeIndex;
          setCurrentIndex(safeIndex);
          setLog((prev) => [...prev, ...newEvents].slice(-6));
          newEvents.forEach((ev) => {
            const dmg = ev.damage;
            if (!dmg) return;
            setSnapshot((prev) => {
              if (ev.source === "player") {
                const shieldHit = Math.min(prev.enemyShield, damageToBarDelta(dmg) * 0.65);
                const overflow = Math.max(0, damageToBarDelta(dmg) - shieldHit);
                return {
                  ...prev,
                  enemyShield: clamp(prev.enemyShield - shieldHit, 0, BAR_MAX),
                  enemyHp: clamp(prev.enemyHp - overflow, 0, BAR_MAX),
                };
              }
              const shieldHit = Math.min(prev.playerShield, damageToBarDelta(dmg) * 0.65);
              const overflow = Math.max(0, damageToBarDelta(dmg) - shieldHit);
              return {
                ...prev,
                playerShield: clamp(prev.playerShield - shieldHit, 0, BAR_MAX),
                playerHp: clamp(prev.playerHp - overflow, 0, BAR_MAX),
              };
            });
          });
        }
      }

      if (elapsed >= result.durationMs && !doneRef.current) {
        doneRef.current = true;
        window.clearInterval(timer);
        window.setTimeout(() => onCompleteRef.current(), 900);
      }
    }, 90);

    return () => window.clearInterval(timer);
  }, [result, timeline]);

  const isVictory = result.victory;
  const phaseSec = `${(progressMs / 1000).toFixed(1)}s / ${(result.durationMs / 1000).toFixed(1)}s`;
  const unitCount = Object.values(army.units).reduce((a, b) => a + (Number.isFinite(b) ? b : 0), 0);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-cyan-300/20 bg-[#050a16]/95 p-4 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_80%_24%,rgba(251,146,60,0.12),transparent_36%)]" />

      <div className="relative z-10 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
        <div className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-100/75">
          {localize(lang, { hu: "Auto-csata", en: "Auto Battle", de: "Auto-Kampf", ro: "Lupta auto" })}
        </div>
        <div className={`rounded-full px-2 py-0.5 text-[11px] font-black ${isVictory ? "bg-emerald-400/20 text-emerald-200" : "bg-rose-400/20 text-rose-200"}`}>
          {isVictory ? localize(lang, { hu: "Gyozelem", en: "Victory", de: "Sieg", ro: "Victorie" }) : localize(lang, { hu: "Vereseg", en: "Defeat", de: "Niederlage", ro: "Infrangere" })}
        </div>
      </div>

      <div className="relative z-10 mt-3 grid grid-cols-2 gap-3">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="rounded-2xl border border-cyan-300/22 bg-cyan-500/8 p-3">
          <div className="text-[11px] font-black uppercase tracking-[0.14em] text-cyan-100/75">
            {localize(lang, { hu: "Jatekos hadsereg", en: "Player Army", de: "Spielerarmee", ro: "Armata jucator" })}
          </div>
          <div className="mt-1 text-[10px] text-cyan-100/70">{localize(lang, { hu: "Egysegek", en: "Units", de: "Einheiten", ro: "Unitati" })}: {unitCount}</div>
          <Bar label={localize(lang, { hu: "HP", en: "HP", de: "HP", ro: "HP" })} value={snapshot.playerHp} tone="cyan" />
          <Bar label={localize(lang, { hu: "Pajzs", en: "Shield", de: "Schild", ro: "Scut" })} value={snapshot.playerShield} tone="violet" />
        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="rounded-2xl border border-orange-300/22 bg-orange-500/8 p-3">
          <div className="text-[11px] font-black uppercase tracking-[0.14em] text-orange-100/75">
            {localize(lang, { hu: "Ellenseg", en: "Enemy", de: "Feind", ro: "Inamic" })}
          </div>
          <div className="mt-1 text-[10px] text-orange-100/70">
            {localize(lang, { hu: "Neheseg", en: "Difficulty", de: "Schwierigkeit", ro: "Dificultate" })}: {enemy.difficulty}
          </div>
          <Bar label={localize(lang, { hu: "HP", en: "HP", de: "HP", ro: "HP" })} value={snapshot.enemyHp} tone="orange" />
          <Bar label={localize(lang, { hu: "Pajzs", en: "Shield", de: "Schild", ro: "Scut" })} value={snapshot.enemyShield} tone="sky" />
        </motion.div>
      </div>

      <div className="relative z-10 mt-3 rounded-2xl border border-white/10 bg-black/25 p-3">
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">
          {localize(lang, { hu: "Csata naplo", en: "Battle Log", de: "Kampfprotokoll", ro: "Jurnal de lupta" })}
        </div>
        <div className="mt-2 min-h-[124px] space-y-1.5">
          <AnimatePresence initial={false}>
            {log.map((entry, idx) => (
              <motion.div
                key={`${entry.timestamp}-${entry.event}-${idx}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/[0.03] px-2 py-1 text-[11px]"
              >
                <span className="w-4 text-center">{eventIcon(entry.event)}</span>
                <span className="flex-1 text-white/88">{localize(lang, entry.description)}</span>
                {entry.damage ? <span className="text-cyan-200/85">{Math.round(entry.damage)}</span> : null}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 mt-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
        <div className="flex items-center justify-between text-[11px] text-white/70">
          <span>{localize(lang, { hu: "Ido", en: "Time", de: "Zeit", ro: "Timp" })}</span>
          <span>{phaseSec}</span>
        </div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className={`h-full ${isVictory ? "bg-[linear-gradient(90deg,#10b981,#22d3ee)]" : "bg-[linear-gradient(90deg,#fb7185,#f97316)]"}`}
            animate={{ width: `${clamp((progressMs / result.durationMs) * 100, 0, 100)}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </div>
  );
}

function Bar({ label, value, tone }: { label: string; value: number; tone: "cyan" | "violet" | "orange" | "sky" }) {
  const barClass =
    tone === "cyan"
      ? "bg-[linear-gradient(90deg,#22d3ee,#67e8f9)]"
      : tone === "violet"
        ? "bg-[linear-gradient(90deg,#a78bfa,#c4b5fd)]"
        : tone === "orange"
          ? "bg-[linear-gradient(90deg,#fb923c,#fdba74)]"
          : "bg-[linear-gradient(90deg,#38bdf8,#7dd3fc)]";
  return (
    <div className="mt-2">
      <div className="mb-1 flex items-center justify-between text-[10px] text-white/70">
        <span>{label}</span>
        <span>{Math.round(value)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div className={`h-full ${barClass}`} animate={{ width: `${clamp(value, 0, 100)}%` }} transition={{ duration: 0.22 }} />
      </div>
    </div>
  );
}
