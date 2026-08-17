"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Crown, Lock, RefreshCw, Sparkles, Star, Trophy, Zap } from "lucide-react";
import { isMathGameAvailableForGrade } from "@/lib/visualLab/mathCurriculum";
const MathNinjaGame = dynamic(() => import("./MathNinjaGame"));
const MathDefenderGame = dynamic(() => import("./MathDefenderGame"));
const FractionReactorGame = dynamic(() => import("./FractionReactorGame"));
const AngleLaserGame = dynamic(() => import("./AngleLaserGame"));
const TimeWarpGame = dynamic(() => import("./TimeWarpGame"));
const StarMapperGame = dynamic(() => import("./StarMapperGame"));
const MeteorScaleGame = dynamic(() => import("./MeteorScaleGame"));

type Lang = "de" | "hu" | "ro" | "en";
type StageId = "orbit-forge" | "shield-grid" | "fraction-core" | "angle-lab" | "time-gate" | "star-map" | "balance-finale";
type StageKind = "arcade" | "precision" | "puzzle";

interface StageDef {
  id: StageId;
  gameId: "math-ninja" | "math-defender" | "fraction-reactor" | "angle-laser" | "time-warp" | "star-mapper" | "meteor-scale";
  kind: StageKind;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  accent: string;
  glow: string;
  baseScore: number;
}

interface StageResult { bestScore: number; stars: number; plays: number; completed: boolean; lastScore: number; }
interface SaveData { stages: Partial<Record<StageId, StageResult>>; }
interface Props { grade: number; lang: Lang; onDone?: (score: number) => void; }

const T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Math Odyssey", start: "Starten", resume: "Weiter", replay: "Wiederholen",
    back: "Hub", next: "Nächste", unlocked: "Frei", locked: "Gesperrt",
    completed: "Fertig", best: "Bestpunktzahl", stars: "⭐", totalStars: "Sterne gesamt",
    done: "Kampagne abgeschlossen", noProgress: "Noch kein Fortschritt.",
    progress: "Fortschritt", missions: "Missionen", rank: "Rang",
    route: "Missionsroute", reset: "Reset", score: "Punkte",
    nextHint: "Nächste Mission freigeschaltet.",
  },
  hu: {
    title: "Math Odyssey", start: "Indítás", resume: "Folytatás", replay: "Újra",
    back: "Hub", next: "Következő", unlocked: "Nyitott", locked: "Zárolva",
    completed: "Kész", best: "Legjobb", stars: "⭐", totalStars: "Összes csillag",
    done: "Kampány kész", noProgress: "Még nincs előrehaladás.",
    progress: "Haladás", missions: "Küldetések", rank: "Rang",
    route: "Küldetésútvonal", reset: "Reset", score: "Pont",
    nextHint: "A következő küldetés feloldva.",
  },
  ro: {
    title: "Math Odyssey", start: "Start", resume: "Continuă", replay: "Repetă",
    back: "Hub", next: "Următor", unlocked: "Deblocat", locked: "Blocat",
    completed: "Gata", best: "Record", stars: "⭐", totalStars: "Stele totale",
    done: "Campanie finalizată", noProgress: "Niciun progres salvat.",
    progress: "Progres", missions: "Misiuni", rank: "Rang",
    route: "Rută misiuni", reset: "Reset", score: "Scor",
    nextHint: "Misiunea următoare deblocată.",
  },
  en: {
    title: "Math Odyssey", start: "Start", resume: "Continue", replay: "Replay",
    back: "Hub", next: "Next", unlocked: "Open", locked: "Locked",
    completed: "Done", best: "Best", stars: "⭐", totalStars: "Total stars",
    done: "Campaign complete", noProgress: "No progress yet.",
    progress: "Progress", missions: "Missions", rank: "Rank",
    route: "Mission route", reset: "Reset", score: "Score",
    nextHint: "Next mission unlocked.",
  },
};

const STORAGE_PREFIX = "plizio:math-odyssey:v1";

const STAGES: StageDef[] = [
  { id: "orbit-forge", gameId: "math-ninja", kind: "arcade", title: { de: "Orbit Forge", hu: "Pályakovács", ro: "Forja Orbitală", en: "Orbit Forge" }, subtitle: { de: "Schneide die richtigen Zahlen", hu: "Vágd ki a helyes számokat", ro: "Taie numerele corecte", en: "Slice the right numbers" }, accent: "#38bdf8", glow: "#0ea5e9", baseScore: 25 },
  { id: "shield-grid", gameId: "math-defender", kind: "arcade", title: { de: "Shield Grid", hu: "Pajzsmező", ro: "Grilă de Scut", en: "Shield Grid" }, subtitle: { de: "Verteidige die Basis", hu: "Védd meg az állomást", ro: "Apără baza", en: "Defend the base" }, accent: "#a78bfa", glow: "#8b5cf6", baseScore: 35 },
  { id: "fraction-core", gameId: "fraction-reactor", kind: "puzzle", title: { de: "Fraction Core", hu: "Törzsmag", ro: "Nucleu Fracții", en: "Fraction Core" }, subtitle: { de: "Stabile Brüche laden", hu: "Tölts fel stabil törteket", ro: "Fracții stabile", en: "Load stable fractions" }, accent: "#34d399", glow: "#10b981", baseScore: 20 },
  { id: "angle-lab", gameId: "angle-laser", kind: "precision", title: { de: "Angle Lab", hu: "Szöglabor", ro: "Lab Unghiuri", en: "Angle Lab" }, subtitle: { de: "Treffe den exakten Winkel", hu: "Találd el a pontos szöget", ro: "Unghiul exact", en: "Hit the exact angle" }, accent: "#fbbf24", glow: "#f59e0b", baseScore: 4 },
  { id: "time-gate", gameId: "time-warp", kind: "puzzle", title: { de: "Time Gate", hu: "Időkapu", ro: "Poarta Timpului", en: "Time Gate" }, subtitle: { de: "Ordne die Zeitfenster", hu: "Állítsd be az időpontokat", ro: "Potrivește momentele", en: "Match the right moments" }, accent: "#22d3ee", glow: "#06b6d4", baseScore: 25 },
  { id: "star-map", gameId: "star-mapper", kind: "precision", title: { de: "Star Map", hu: "Csillagtérkép", ro: "Harta Stelelor", en: "Star Map" }, subtitle: { de: "Koordinaten präzise setzen", hu: "Pontos koordináták", ro: "Coordonate precise", en: "Lock coordinates" }, accent: "#f472b6", glow: "#ec4899", baseScore: 30 },
  { id: "balance-finale", gameId: "meteor-scale", kind: "arcade", title: { de: "Balance Finale", hu: "Mérleg-finálé", ro: "Final Balanță", en: "Balance Finale" }, subtitle: { de: "System ins Gleichgewicht bringen", hu: "Tedd egyensúlyba a rendszert", ro: "Echilibrează sistemul", en: "Bring the system to balance" }, accent: "#f97316", glow: "#fb923c", baseScore: 25 },
];

const RANK_ICONS = ["🌑", "🌒", "🌓", "🌔", "🌕", "⭐", "🏆", "👑"];
function rankIcon(totalStars: number) {
  const idx = Math.min(Math.floor(totalStars / 3), RANK_ICONS.length - 1);
  return RANK_ICONS[idx];
}

function loadSave(grade: number): SaveData {
  if (typeof window === "undefined") return { stages: {} };
  try { const r = window.localStorage.getItem(`${STORAGE_PREFIX}:g${grade}`); return r ? JSON.parse(r) : { stages: {} }; } catch { return { stages: {} }; }
}
function savePersist(grade: number, data: SaveData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}:g${grade}`, JSON.stringify(data));
  } catch {
    // The campaign remains playable when storage is blocked.
  }
}
function computeStars(stage: StageDef, grade: number, score: number) {
  if (score <= 0) return 0;
  const base = stage.kind === "precision" ? Math.max(2, Math.min(6, Math.ceil(grade / 2))) : stage.baseScore + grade * 4;
  if (score >= Math.floor(base * 1.6)) return 3;
  if (score >= Math.floor(base * 1.2)) return 2;
  return 1;
}

function StageRow({ stage, lang, result, unlocked, onStart }: { stage: StageDef; lang: Lang; result?: StageResult; unlocked: boolean; onStart: () => void; }) {
  return (
    <button
      onClick={onStart}
      disabled={!unlocked}
      className="w-full rounded-2xl border p-3 text-left transition active:scale-[0.98]"
      style={{
        background: unlocked ? `linear-gradient(135deg, ${stage.glow}20 0%, rgba(2,6,23,0.9) 60%)` : "rgba(255,255,255,0.02)",
        borderColor: unlocked ? `${stage.accent}40` : "rgba(255,255,255,0.06)",
        opacity: unlocked ? 1 : 0.5,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border" style={{ borderColor: unlocked ? `${stage.accent}50` : "rgba(255,255,255,0.08)", background: unlocked ? `${stage.accent}18` : "rgba(255,255,255,0.03)" }}>
          {result?.completed ? <Crown size={16} className="text-amber-300" /> : unlocked ? <Sparkles size={15} className="text-white/80" /> : <Lock size={14} className="text-white/30" />}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-black text-white/90">{stage.title[lang] ?? stage.title.en}</p>
          <p className="truncate text-xs text-white/50">{stage.subtitle[lang] ?? stage.subtitle.en}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {result?.completed
            ? Array.from({ length: 3 }).map((_, i) => <Star key={i} size={11} className={i < result.stars ? "fill-amber-300 text-amber-300" : "text-white/15"} />)
            : unlocked
            ? <ArrowRight size={14} className="text-white/40" />
            : <Lock size={12} className="text-white/25" />}
        </div>
      </div>
    </button>
  );
}

export default function MathCampaignGame({ grade, lang, onDone }: Props) {
  const t = T[lang] ?? T.en;
  const stages = useMemo(
    () => STAGES.filter((stage) => isMathGameAvailableForGrade(stage.gameId, grade)),
    [grade],
  );
  const [save, setSave] = useState<SaveData>(() => loadSave(grade));
  const [view, setView] = useState<"hub" | "stage" | "result">("hub");
  const [activeStageId, setActiveStageId] = useState<StageId | null>(null);
  const [runId, setRunId] = useState(0);
  const [stageScore, setStageScore] = useState(0);
  const handledRef = useRef(false);

  useEffect(() => { setSave(loadSave(grade)); setView("hub"); setActiveStageId(null); }, [grade]);

  const stageResults = save.stages;
  const completedCount = useMemo(() => stages.filter(s => stageResults[s.id]?.completed).length, [stages, stageResults]);
  const totalStars = useMemo(() => stages.reduce((sum, s) => sum + (stageResults[s.id]?.stars ?? 0), 0), [stages, stageResults]);
  const overallPct = Math.round((completedCount / stages.length) * 100);

  const unlockedIds = useMemo(() => {
    const s = new Set<StageId>([stages[0].id]);
    for (let i = 0; i < stages.length - 1; i++) if (stageResults[stages[i].id]?.completed) s.add(stages[i + 1].id);
    for (const st of stages) if (stageResults[st.id]?.completed) s.add(st.id);
    return s;
  }, [stages, stageResults]);

  const currentStage = activeStageId ? stages.find(s => s.id === activeStageId) ?? null : null;
  const nextStage = useMemo(() => { if (!activeStageId) return null; const idx = stages.findIndex(s => s.id === activeStageId); return idx >= 0 && idx < stages.length - 1 ? stages[idx + 1] : null; }, [activeStageId, stages]);

  const openStage = useCallback((id: StageId) => {
    if (!unlockedIds.has(id)) return;
    setActiveStageId(id); setStageScore(0); handledRef.current = false; setRunId(r => r + 1); setView("stage");
  }, [unlockedIds]);

  const persist = useCallback((next: SaveData) => { setSave(next); savePersist(grade, next); }, [grade]);

  const handleStageDone = useCallback((score: number) => {
    if (!currentStage || handledRef.current) return;
    handledRef.current = true;
    const stars = computeStars(currentStage, grade, score);
    const prev = stageResults[currentStage.id];
    const next: SaveData = { stages: { ...stageResults, [currentStage.id]: { bestScore: Math.max(prev?.bestScore ?? 0, score), stars: Math.max(prev?.stars ?? 0, stars), plays: (prev?.plays ?? 0) + 1, completed: stars > 0, lastScore: score } } };
    persist(next); setStageScore(score); setView("result"); onDone?.(score);
  }, [currentStage, grade, onDone, persist, stageResults]);

  const closeStage = useCallback(() => { setActiveStageId(null); setView("hub"); }, []);

  const playNext = useCallback(() => {
    if (!currentStage) return;
    if ((stageResults[currentStage.id]?.stars ?? 0) <= 0) { openStage(currentStage.id); return; }
    const idx = stages.findIndex(s => s.id === currentStage.id);
    const cand = stages[idx + 1];
    if (cand && unlockedIds.has(cand.id)) { openStage(cand.id); return; }
    closeStage();
  }, [closeStage, currentStage, openStage, stageResults, unlockedIds]);

  const resetProgress = useCallback(() => { persist({ stages: {} }); setView("hub"); setActiveStageId(null); }, [persist]);

  const renderGame = () => {
    if (!currentStage) return null;
    const k = `${currentStage.id}:${runId}`;
    const p = { grade, lang, onDone: handleStageDone };
    switch (currentStage.gameId) {
      case "math-ninja": return <MathNinjaGame key={k} {...p} />;
      case "math-defender": return <MathDefenderGame key={k} {...p} />;
      case "fraction-reactor": return <FractionReactorGame key={k} {...p} />;
      case "angle-laser": return <AngleLaserGame key={k} {...p} />;
      case "time-warp": return <TimeWarpGame key={k} {...p} />;
      case "star-mapper": return <StarMapperGame key={k} {...p} />;
      case "meteor-scale": return <MeteorScaleGame key={k} {...p} />;
      default: return null;
    }
  };

  /* ── STAGE VIEW ── */
  if (view === "stage" && currentStage) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-[#060614] p-3 text-white">
        <div className="mb-3 flex items-center justify-between gap-2">
          <button onClick={closeStage} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/70">
            <ArrowLeft size={13} /> {t.back}
          </button>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/60">
            <Star size={12} className="fill-amber-300 text-amber-300" />
            <span>{totalStars}</span>
            <span className="text-white/30">·</span>
            <span className="font-black" style={{ color: currentStage.accent }}>{currentStage.title[lang]}</span>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={`${currentStage.id}:${runId}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {renderGame()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  /* ── RESULT VIEW ── */
  if (view === "result" && currentStage) {
    const result = stageResults[currentStage.id];
    const stars = result?.stars ?? 0;
    return (
      <div className="rounded-[28px] border border-white/10 bg-[#060614] p-4 text-white">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={closeStage} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/70">
            <ArrowLeft size={13} /> {t.back}
          </button>
          <button onClick={resetProgress} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50">
            <RefreshCw size={12} /> {t.reset}
          </button>
        </div>

        <div className="rounded-2xl border p-4 mb-3" style={{ borderColor: `${currentStage.accent}30`, background: `${currentStage.glow}10` }}>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{currentStage.title[lang]}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star key={i} size={24} className={i < stars ? "fill-amber-300 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "text-white/15"} />
              ))}
            </div>
            <div className="text-right">
              <p className="text-xs text-white/40">{t.score}</p>
              <p className="text-2xl font-black text-white">{stageScore}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-xl bg-black/25 p-2">
              <Trophy size={14} className="mx-auto text-amber-300 mb-1" />
              <p className="text-sm font-black text-white">{result?.bestScore ?? 0}</p>
              <p className="text-[10px] text-white/40">{t.best}</p>
            </div>
            <div className="rounded-xl bg-black/25 p-2">
              <Zap size={14} className="mx-auto text-cyan-300 mb-1" />
              <p className="text-sm font-black text-white">{completedCount}/{stages.length}</p>
              <p className="text-[10px] text-white/40">{t.missions}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={playNext} className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 font-bold text-cyan-50 active:scale-[0.98] transition">
            <span className="text-sm">{(result?.stars ?? 0) > 0 ? (nextStage ? t.next : t.resume) : t.replay}</span>
            <ArrowRight size={16} />
          </button>
          <button onClick={closeStage} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/70 active:scale-[0.98] transition">
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  /* ── HUB VIEW ── */
  const continueStage = stages.find(s => !stageResults[s.id]?.completed && unlockedIds.has(s.id)) ?? stages[0];

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#060614] p-4 text-white">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Visual Lab</p>
          <h2 className="text-2xl font-black text-white">{t.title}</h2>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-2xl">
          {rankIcon(totalStars)}
        </div>
      </div>

      {/* Stats bar */}
      <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Star size={12} className="fill-amber-300 text-amber-300" />
            <span className="font-bold text-white">{totalStars}</span>
            <span>{t.totalStars}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Trophy size={12} className="text-cyan-400" />
            <span className="font-bold text-white">{completedCount}/{stages.length}</span>
            <span>{t.missions}</span>
          </div>
          <span className="text-xs font-bold text-white/70">{overallPct}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#38bdf8,#a78bfa,#f59e0b)" }} initial={{ width: 0 }} animate={{ width: `${overallPct}%` }} transition={{ duration: 0.6 }} />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mb-4 flex gap-2">
        <button onClick={() => openStage(continueStage.id)} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-black uppercase tracking-wide text-slate-950 transition active:scale-95">
          <Sparkles size={14} /> {completedCount > 0 ? t.resume : t.start}
        </button>
        <button onClick={resetProgress} className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-white/50 transition active:scale-95" title={t.reset}>
          <RefreshCw size={15} />
        </button>
      </div>

      {/* Stage list */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-widest text-white/35">{t.route}</p>
          <p className="text-xs text-white/30">{unlockedIds.size}/{stages.length}</p>
        </div>
        <div className="space-y-2">
          {stages.map((stage, idx) => (
            <motion.div key={stage.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }}>
              <StageRow stage={stage} lang={lang} result={stageResults[stage.id]} unlocked={unlockedIds.has(stage.id)} onStart={() => openStage(stage.id)} />
            </motion.div>
          ))}
        </div>
      </div>

      {completedCount === 0 && (
        <p className="mt-3 text-center text-xs text-white/40">{t.noProgress}</p>
      )}
    </div>
  );
}
