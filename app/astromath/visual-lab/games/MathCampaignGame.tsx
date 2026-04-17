"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Crown, Lock, RefreshCw, Sparkles, Star, Trophy } from "lucide-react";
import MathNinjaGame from "./MathNinjaGame";
import MathDefenderGame from "./MathDefenderGame";
import FractionReactorGame from "./FractionReactorGame";
import AngleLaserGame from "./AngleLaserGame";
import TimeWarpGame from "./TimeWarpGame";
import StarMapperGame from "./StarMapperGame";
import MeteorScaleGame from "./MeteorScaleGame";

type Lang = "de" | "hu" | "ro" | "en";

type StageId =
  | "orbit-forge"
  | "shield-grid"
  | "fraction-core"
  | "angle-lab"
  | "time-gate"
  | "star-map"
  | "balance-finale";

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

interface StageResult {
  bestScore: number;
  stars: number;
  plays: number;
  completed: boolean;
  lastScore: number;
}

interface SaveData {
  stages: Partial<Record<StageId, StageResult>>;
}

interface Props {
  grade: number;
  lang: Lang;
  onDone?: (score: number) => void;
}

const T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Math Odyssey",
    subtitle: "Ein Kampagnen-Modus aus mehreren Mathe-Missionen.",
    start: "Kampagne starten",
    resume: "Weiter spielen",
    replay: "Mission wiederholen",
    back: "Zurück zum Hub",
    continue: "Nächste Mission",
    unlocked: "Freigeschaltet",
    locked: "Gesperrt",
    completed: "Abgeschlossen",
    best: "Bestwert",
    stars: "Sterne",
    totalStars: "Gesamtsterne",
    totalCompleted: "Abgeschlossene Missionen",
    goal: "Sammle Sterne, schalte neue Sektoren frei und verbessere deine Flotte.",
    noProgress: "Kein Fortschritt gespeichert.",
    done: "Kampagne abgeschlossen",
    nextHint: "Die nächste Mission ist bereits freigeschaltet.",
  },
  hu: {
    title: "Math Odyssey",
    subtitle: "Több, egymásra épülő matek-küldetés egyetlen kampányban.",
    start: "Kampány indítása",
    resume: "Folytatás",
    replay: "Küldetés újrajátszása",
    back: "Vissza a központba",
    continue: "Következő küldetés",
    unlocked: "Feloldva",
    locked: "Zárolva",
    completed: "Teljesítve",
    best: "Legjobb",
    stars: "Csillag",
    totalStars: "Összes csillag",
    totalCompleted: "Teljesített küldetés",
    goal: "Gyűjts csillagokat, oldj fel új zónákat, és fejleszd a flottádat.",
    noProgress: "Nincs még mentett előrehaladás.",
    done: "A kampány kész",
    nextHint: "A következő küldetés már fel van oldva.",
  },
  ro: {
    title: "Math Odyssey",
    subtitle: "O campanie cu misiuni matematice conectate.",
    start: "Pornește campania",
    resume: "Continuă",
    replay: "Repetă misiunea",
    back: "Înapoi la hub",
    continue: "Misiunea următoare",
    unlocked: "Deblocat",
    locked: "Blocat",
    completed: "Finalizat",
    best: "Record",
    stars: "Stele",
    totalStars: "Stele totale",
    totalCompleted: "Misiuni finalizate",
    goal: "Câștigă stele, deblochează sectoare noi și îți îmbunătățești flota.",
    noProgress: "Niciun progres salvat.",
    done: "Campanie finalizată",
    nextHint: "Misiunea următoare este deja deblocată.",
  },
  en: {
    title: "Math Odyssey",
    subtitle: "A campaign mode made from multiple math missions.",
    start: "Start campaign",
    resume: "Continue",
    replay: "Replay mission",
    back: "Back to hub",
    continue: "Next mission",
    unlocked: "Unlocked",
    locked: "Locked",
    completed: "Completed",
    best: "Best",
    stars: "Stars",
    totalStars: "Total stars",
    totalCompleted: "Completed missions",
    goal: "Earn stars, unlock new sectors, and upgrade your fleet.",
    noProgress: "No saved progress yet.",
    done: "Campaign complete",
    nextHint: "The next mission is already unlocked.",
  },
};

const STORAGE_PREFIX = "plizio:math-odyssey:v1";

const STAGES: StageDef[] = [
  {
    id: "orbit-forge",
    gameId: "math-ninja",
    kind: "arcade",
    title: { de: "Orbit Forge", hu: "Pályakovács", ro: "Forja Orbitală", en: "Orbit Forge" },
    subtitle: { de: "Schneide die richtigen Zahlen", hu: "Vágd ki a helyes számokat", ro: "Taie numerele corecte", en: "Slice the right numbers" },
    accent: "#38bdf8",
    glow: "#0ea5e9",
    baseScore: 25,
  },
  {
    id: "shield-grid",
    gameId: "math-defender",
    kind: "arcade",
    title: { de: "Shield Grid", hu: "Pajzsmező", ro: "Grilă de Scut", en: "Shield Grid" },
    subtitle: { de: "Verteidige die Basis", hu: "Védd meg az állomást", ro: "Apără baza", en: "Defend the base" },
    accent: "#a78bfa",
    glow: "#8b5cf6",
    baseScore: 35,
  },
  {
    id: "fraction-core",
    gameId: "fraction-reactor",
    kind: "puzzle",
    title: { de: "Fraction Core", hu: "Törzsmag", ro: "Nucleu de fracții", en: "Fraction Core" },
    subtitle: { de: "Stabile Brüche laden", hu: "Tölts fel stabil törteket", ro: "Încarcă fracții stabile", en: "Load stable fractions" },
    accent: "#34d399",
    glow: "#10b981",
    baseScore: 20,
  },
  {
    id: "angle-lab",
    gameId: "angle-laser",
    kind: "precision",
    title: { de: "Angle Lab", hu: "Szöglabor", ro: "Laborator de unghiuri", en: "Angle Lab" },
    subtitle: { de: "Treffe den exakten Winkel", hu: "Találd el a pontos szöget", ro: "Lovește unghiul exact", en: "Hit the exact angle" },
    accent: "#fbbf24",
    glow: "#f59e0b",
    baseScore: 4,
  },
  {
    id: "time-gate",
    gameId: "time-warp",
    kind: "puzzle",
    title: { de: "Time Gate", hu: "Időkapu", ro: "Poarta timpului", en: "Time Gate" },
    subtitle: { de: "Ordne die Zeitfenster", hu: "Állítsd be az időpontokat", ro: "Potrivește momentele", en: "Match the right moments" },
    accent: "#22d3ee",
    glow: "#06b6d4",
    baseScore: 25,
  },
  {
    id: "star-map",
    gameId: "star-mapper",
    kind: "precision",
    title: { de: "Star Map", hu: "Csillagtérkép", ro: "Harta stelelor", en: "Star Map" },
    subtitle: { de: "Ziele präzise koordinieren", hu: "Pontos koordináták", ro: "Coordonate precise", en: "Lock coordinates precisely" },
    accent: "#f472b6",
    glow: "#ec4899",
    baseScore: 30,
  },
  {
    id: "balance-finale",
    gameId: "meteor-scale",
    kind: "arcade",
    title: { de: "Balance Finale", hu: "Mérleg-finálé", ro: "Final de balanță", en: "Balance Finale" },
    subtitle: { de: "Bringe das System ins Gleichgewicht", hu: "Tedd egyensúlyba a rendszert", ro: "Adaugă echilibru sistemului", en: "Bring the system into balance" },
    accent: "#f97316",
    glow: "#fb923c",
    baseScore: 25,
  },
];

function storageKey(grade: number) {
  return `${STORAGE_PREFIX}:g${grade}`;
}

function emptySave(): SaveData {
  return { stages: {} };
}

function loadSave(grade: number): SaveData {
  if (typeof window === "undefined") return emptySave();
  try {
    const raw = window.localStorage.getItem(storageKey(grade));
    if (!raw) return emptySave();
    const parsed = JSON.parse(raw) as SaveData;
    return { stages: parsed.stages ?? {} };
  } catch {
    return emptySave();
  }
}

function saveData(grade: number, data: SaveData) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(grade), JSON.stringify(data));
}

function stageLabel(stage: StageDef, lang: Lang) {
  return stage.title[lang] ?? stage.title.en;
}

function stageSubtitle(stage: StageDef, lang: Lang) {
  return stage.subtitle[lang] ?? stage.subtitle.en;
}

function computeStars(stage: StageDef, grade: number, score: number) {
  if (score <= 0) return 0;
  const base = stage.kind === "precision"
    ? Math.max(2, Math.min(6, Math.ceil(grade / 2)))
    : stage.baseScore + grade * 4;
  const silver = Math.max(1, Math.floor(base * 1.2));
  const gold = Math.max(silver + 1, Math.floor(base * 1.6));
  if (score >= gold) return 3;
  if (score >= silver) return 2;
  return 1;
}

function starsForSummary(totalStars: number) {
  if (totalStars >= 18) return "Crown";
  if (totalStars >= 12) return "Trophy";
  if (totalStars >= 6) return "Spark";
  return "Pulse";
}

function StageButton({
  stage,
  lang,
  result,
  unlocked,
  active,
  onStart,
}: {
  stage: StageDef;
  lang: Lang;
  result?: StageResult;
  unlocked: boolean;
  active: boolean;
  onStart: () => void;
}) {
  const statusText = result?.completed
    ? `${result.stars} ${result.stars === 1 ? "star" : "stars"}`
    : unlocked
    ? "open"
    : "locked";

  return (
    <button
      onClick={onStart}
      disabled={!unlocked}
      className={`group relative w-full overflow-hidden rounded-[26px] border p-4 text-left transition duration-300 ${
        active
          ? "border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          : unlocked
          ? "border-white/10 hover:border-white/20"
          : "border-white/5 opacity-60"
      }`}
      style={{
        background: unlocked
          ? `linear-gradient(135deg, ${stage.glow}25 0%, rgba(2,6,23,0.95) 55%)`
          : "rgba(255,255,255,0.02)",
      }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 0% 0%, ${stage.accent}18, transparent 55%)` }} />
      <div className="relative flex items-start gap-3">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
          style={{
            borderColor: unlocked ? `${stage.accent}55` : "rgba(255,255,255,0.08)",
            background: unlocked ? `${stage.accent}15` : "rgba(255,255,255,0.03)",
            boxShadow: unlocked ? `0 0 28px ${stage.glow}25` : "none",
          }}
        >
          {unlocked ? <Sparkles size={20} className="text-white" /> : <Lock size={18} className="text-white/40" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
                {unlocked ? "Mission" : "Locked sector"}
              </p>
              <h3 className="mt-1 truncate text-lg font-black text-white/95">{stageLabel(stage, lang)}</h3>
            </div>
            <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              {statusText}
            </div>
          </div>
          <p className="mt-2 text-sm text-white/65">{stageSubtitle(stage, lang)}</p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-white/75">
              {result?.completed ? (
                Array.from({ length: result.stars }).map((_, i) => <Star key={i} size={13} className="fill-amber-300 text-amber-300" />)
              ) : (
                <span className="text-xs uppercase tracking-[0.25em] text-white/35">{unlocked ? "Ready" : "Locked"}</span>
              )}
            </div>
            <div className="text-xs font-semibold text-white/45">
              {result?.completed ? `Best ${result.bestScore}` : unlocked ? "Tap to enter" : "Complete previous sector"}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function MathCampaignGame({ grade, lang, onDone }: Props) {
  const t = T[lang] ?? T.en;
  const [save, setSave] = useState<SaveData>(() => loadSave(grade));
  const [view, setView] = useState<"hub" | "stage" | "result">("hub");
  const [activeStageId, setActiveStageId] = useState<StageId | null>(null);
  const [runId, setRunId] = useState(0);
  const [stageScore, setStageScore] = useState(0);
  const handledDoneRef = useRef(false);

  useEffect(() => {
    setSave(loadSave(grade));
    setView("hub");
    setActiveStageId(null);
  }, [grade]);

  const stageResults = save.stages;
  const completedStages = useMemo(
    () => STAGES.filter((stage) => stageResults[stage.id]?.completed),
    [stageResults]
  );
  const totalStars = useMemo(
    () => STAGES.reduce((sum, stage) => sum + (stageResults[stage.id]?.stars ?? 0), 0),
    [stageResults]
  );

  const unlockedStageIds = useMemo(() => {
    const unlocked = new Set<StageId>([STAGES[0].id]);
    for (let i = 0; i < STAGES.length - 1; i++) {
      if (stageResults[STAGES[i].id]?.completed) unlocked.add(STAGES[i + 1].id);
    }
    for (const stage of STAGES) {
      if (stageResults[stage.id]?.completed) unlocked.add(stage.id);
    }
    return unlocked;
  }, [stageResults]);

  const currentStage = activeStageId ? STAGES.find((stage) => stage.id === activeStageId) ?? null : null;
  const nextStage = useMemo(() => {
    if (!activeStageId) return null;
    const idx = STAGES.findIndex((stage) => stage.id === activeStageId);
    if (idx < 0 || idx >= STAGES.length - 1) return null;
    return STAGES[idx + 1];
  }, [activeStageId]);

  const activeStageIndex = activeStageId ? STAGES.findIndex((stage) => stage.id === activeStageId) : -1;
  const overallProgress = Math.round((completedStages.length / STAGES.length) * 100);

  const openStage = useCallback((stageId: StageId) => {
    if (!unlockedStageIds.has(stageId)) return;
    setActiveStageId(stageId);
    setStageScore(0);
    handledDoneRef.current = false;
    setRunId((r) => r + 1);
    setView("stage");
  }, [unlockedStageIds]);

  const persist = useCallback((next: SaveData) => {
    setSave(next);
    saveData(grade, next);
  }, [grade]);

  const handleStageDone = useCallback((score: number) => {
    if (!currentStage || handledDoneRef.current) return;
    handledDoneRef.current = true;

    const stars = computeStars(currentStage, grade, score);
    const previous = save.stages[currentStage.id];
    const nextStageResults: StageResult = {
      bestScore: Math.max(previous?.bestScore ?? 0, score),
      stars: Math.max(previous?.stars ?? 0, stars),
      plays: (previous?.plays ?? 0) + 1,
      completed: stars > 0,
      lastScore: score,
    };

    const nextSave: SaveData = {
      stages: {
        ...save.stages,
        [currentStage.id]: nextStageResults,
      },
    };

    persist(nextSave);
    setStageScore(score);
    setView("result");
    onDone?.(score);
  }, [currentStage, grade, onDone, persist, save.stages]);

  const closeStage = useCallback(() => {
    setActiveStageId(null);
    setView("hub");
  }, []);

  const playNext = useCallback(() => {
    if (!currentStage) return;
    const currentStars = stageResults[currentStage.id]?.stars ?? 0;
    if (currentStars <= 0) {
      openStage(currentStage.id);
      return;
    }
    const idx = STAGES.findIndex((stage) => stage.id === currentStage.id);
    const candidate = STAGES[idx + 1];
    if (candidate && unlockedStageIds.has(candidate.id)) {
      openStage(candidate.id);
      return;
    }
    closeStage();
  }, [closeStage, currentStage, openStage, stageResults, unlockedStageIds]);

  const resetProgress = useCallback(() => {
    const next = emptySave();
    persist(next);
    setView("hub");
    setActiveStageId(null);
  }, [persist]);

  const renderStageGame = () => {
    if (!currentStage) return null;
    const common = { key: `${currentStage.id}:${runId}`, grade, lang, onDone: handleStageDone };
    switch (currentStage.gameId) {
      case "math-ninja":
        return <MathNinjaGame {...common} />;
      case "math-defender":
        return <MathDefenderGame {...common} />;
      case "fraction-reactor":
        return <FractionReactorGame {...common} />;
      case "angle-laser":
        return <AngleLaserGame {...common} />;
      case "time-warp":
        return <TimeWarpGame {...common} />;
      case "star-mapper":
        return <StarMapperGame {...common} />;
      case "meteor-scale":
        return <MeteorScaleGame {...common} />;
      default:
        return null;
    }
  };

  const summaryIcon = starsForSummary(totalStars);

  if (view === "stage" && currentStage) {
    return (
      <div className="mx-auto max-w-6xl rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(2,6,23,0.95)_45%)] p-4 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <button
            onClick={closeStage}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08]"
          >
            <ArrowLeft size={16} /> {t.back}
          </button>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">
            <Crown size={16} className="text-amber-300" />
            <span>{t.totalStars}: {totalStars}</span>
          </div>
        </div>

        <div className="mb-4 rounded-[28px] border border-white/10 bg-white/[0.02] p-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">Mission sector</p>
              <h2 className="mt-1 text-2xl font-black text-white">{stageLabel(currentStage, lang)}</h2>
              <p className="mt-1 text-sm text-white/60">{stageSubtitle(currentStage, lang)}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">{t.best}</p>
              <p className="text-xl font-black text-white">{stageResults[currentStage.id]?.bestScore ?? 0}</p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentStage.id}:${runId}`}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {renderStageGame()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  if (view === "result" && currentStage) {
    const result = stageResults[currentStage.id];
    const stars = result?.stars ?? 0;
    return (
      <div className="mx-auto max-w-4xl rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(2,6,23,0.96)_48%)] p-5 text-white shadow-[0_0_90px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={closeStage}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08]"
          >
            <ArrowLeft size={16} /> {t.back}
          </button>
          <button
            onClick={resetProgress}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white/60 transition hover:bg-white/[0.08]"
          >
            <RefreshCw size={16} /> Reset
          </button>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">
              {stars > 0 ? t.completed : t.locked}
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">{stageLabel(currentStage, lang)}</h2>
            <p className="mt-2 text-white/65">{stageSubtitle(currentStage, lang)}</p>

            <div className="mt-6 flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={i < stars ? "fill-amber-300 text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.45)]" : "text-white/15"}
                />
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">{t.best}</p>
                <p className="mt-1 text-xl font-black text-white">{result?.bestScore ?? 0}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">{t.stars}</p>
                <p className="mt-1 text-xl font-black text-white">{stars}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">Score</p>
                <p className="mt-1 text-xl font-black text-white">{stageScore}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-amber-300/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                  <Trophy size={24} className="text-amber-300" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">{t.totalCompleted}</p>
                  <p className="text-2xl font-black text-white">{completedStages.length}/{STAGES.length}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">{t.nextHint}</p>
            </div>

            <button
              onClick={playNext}
              className="inline-flex items-center justify-between gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-left font-semibold text-cyan-50 transition hover:bg-cyan-400/15"
            >
              <span>{(result?.stars ?? 0) > 0 ? (nextStage ? t.continue : t.resume) : t.replay}</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={closeStage}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left font-semibold text-white/80 transition hover:bg-white/[0.08]"
            >
              {t.back}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const continueStage = STAGES.find((stage) => !stageResults[stage.id]?.completed && unlockedStageIds.has(stage.id)) ?? STAGES[0];

  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_rgba(2,6,23,0.97)_40%)] p-5 text-white shadow-[0_0_100px_rgba(0,0,0,0.45)]">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/35">Visual Lab / Astromath</p>
              <h2 className="mt-2 text-3xl font-black text-white">{t.title}</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">{t.subtitle}</p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-black/25">
              <Star size={28} className="fill-amber-300 text-amber-300" />
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-white/10 bg-black/25 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">Fleet status</p>
                <p className="mt-2 text-2xl font-black text-white">{overallProgress}%</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">{t.totalStars}</p>
                <p className="mt-2 text-2xl font-black text-white">{totalStars}</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #38bdf8, #a78bfa, #f59e0b)" }}
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <p className="mt-4 text-sm text-white/65">{t.goal}</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">{t.totalCompleted}</p>
              <p className="mt-2 text-2xl font-black text-white">{completedStages.length}</p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">{t.totalStars}</p>
              <p className="mt-2 text-2xl font-black text-white">{totalStars}</p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35">Rank</p>
              <p className="mt-2 text-2xl font-black text-white">{summaryIcon}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => openStage(continueStage.id)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:scale-[1.01]"
            >
              <Sparkles size={16} /> {completedStages.length > 0 ? t.resume : t.start}
            </button>
            <button
              onClick={resetProgress}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/[0.08]"
            >
              <RefreshCw size={16} /> Reset
            </button>
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.9))] p-4">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-6 top-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute right-8 top-24 h-32 w-32 rounded-full bg-fuchsia-400/20 blur-3xl" />
              <div className="absolute bottom-12 left-20 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl" />
            </div>

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">Campaign route</p>
                <h3 className="mt-1 text-xl font-black text-white">Mission sectors</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                {t.unlocked}: {unlockedStageIds.size}/{STAGES.length}
              </div>
            </div>

            <div className="relative mt-5">
              <div className="absolute left-[27px] top-5 bottom-5 w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-amber-300/40" />
              <div className="space-y-3">
                {STAGES.map((stage, index) => {
                  const unlocked = unlockedStageIds.has(stage.id);
                  const result = stageResults[stage.id];
                  const active = activeStageId === stage.id;
                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="relative z-10 mt-2 flex h-14 w-14 items-center justify-center rounded-2xl border"
                          style={{
                            borderColor: unlocked ? `${stage.accent}70` : "rgba(255,255,255,0.08)",
                            background: unlocked ? `${stage.accent}14` : "rgba(255,255,255,0.03)",
                            boxShadow: unlocked ? `0 0 24px ${stage.glow}25` : "none",
                          }}
                        >
                          {result?.completed ? (
                            <Crown size={20} className="text-amber-300" />
                          ) : unlocked ? (
                            <Sparkles size={18} className="text-white" />
                          ) : (
                            <Lock size={18} className="text-white/35" />
                          )}
                        </div>
                        <div className="flex-1">
                          <StageButton
                            stage={stage}
                            lang={lang}
                            result={result}
                            unlocked={unlocked}
                            active={active}
                            onStart={() => openStage(stage.id)}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!stageResults[continueStage.id]?.completed && (
        <div className="mt-5 rounded-[24px] border border-cyan-400/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50/80">
          {stageResults[continueStage.id] ? t.resume : t.start}
        </div>
      )}

      {completedStages.length === 0 && (
        <div className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/60">
          {t.noProgress}
        </div>
      )}
    </div>
  );
}
