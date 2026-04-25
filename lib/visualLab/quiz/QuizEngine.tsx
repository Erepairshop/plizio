"use client";
import { useState, useCallback, useEffect, useMemo } from "react";
import { X, CheckCircle, XCircle, RotateCcw, ChevronRight } from "lucide-react";
import type { POI } from "../data/poi";
import type { QuizTask, QuizResult, PoiTypeFilterValue } from "./types";
import { getQuizPool } from "./data/index";

type Lang = "de" | "hu" | "ro" | "en";

// ──────────────────────────────────────────────
// Utilities
// ──────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function getPoiName(poi: POI, lang: Lang): string {
  const n = poi.name as Record<string, string>;
  return n[lang] ?? n.en ?? n.de ?? poi.id;
}

function readScore(key: string): { correct: number; total: number } {
  if (typeof window === "undefined") return { correct: 0, total: 0 };
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { correct: 0, total: 0 };
    return JSON.parse(raw) as { correct: number; total: number };
  } catch {
    return { correct: 0, total: 0 };
  }
}

function writeScore(key: string, s: { correct: number; total: number }) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(s));
}

// ──────────────────────────────────────────────
// POI type filter derivation
// ──────────────────────────────────────────────

/**
 * Derive which POI types to show based on the task's referenced POI ids.
 * Falls back to [] (hide all POIs) for click_county tasks.
 * Returns null if we can't determine (show all).
 */
function deriveFromTask(task: QuizTask, pois: POI[]): PoiTypeFilterValue[] | null {
  if (task.type === "click_county") {
    // County task: no POIs needed, just the highlighted region
    return [];
  }

  // Collect all POI ids referenced by this task
  const poiIds: string[] = [];
  if (task.targetPoiId) poiIds.push(task.targetPoiId);
  if (task.targetPoiId2) poiIds.push(task.targetPoiId2);
  if (task.optionPoiIds) poiIds.push(...task.optionPoiIds);
  if (task.orderedPoiIds) poiIds.push(...task.orderedPoiIds);

  if (poiIds.length === 0) return null;

  const typeSet = new Set<PoiTypeFilterValue>();
  for (const id of poiIds) {
    const poi = pois.find((p) => p.id === id);
    if (poi) {
      // Map POI type to our filter type (they are the same union, just cast)
      typeSet.add(poi.type as PoiTypeFilterValue);
    }
  }

  if (typeSet.size === 0) return null;
  return Array.from(typeSet);
}

// ──────────────────────────────────────────────
// Quiz state types
// ──────────────────────────────────────────────

type QuizPhase =
  | "waiting"        // waiting for map interaction
  | "distance_a"     // clicked first POI for distance
  | "order_n"        // waiting for Nth click in order_by
  | "answered";      // answer submitted, showing feedback

export interface QuizEngineState {
  task: QuizTask | null;
  phase: QuizPhase;
  result: QuizResult | null;
  // for distance_guess: first poi clicked
  distancePoiA: POI | null;
  distancePoiB: POI | null;
  // for order_by: how many correct so far
  orderProgress: number;
  // for spot_error / order_by: re-shuffle trigger (used in SVG highlights)
  highlightPoiIds: string[];
}

// ──────────────────────────────────────────────
// Translations
// ──────────────────────────────────────────────

const QT: Record<Lang, Record<string, string>> = {
  de: {
    quiz: "Karten-Quiz",
    score: "Punkte",
    next: "Nächste",
    retry: "Nochmal",
    close: "Schließen",
    correct: "Richtig!",
    wrong: "Falsch!",
    noPool: "Kein Quiz für dieses Land verfügbar.",
    clickPoi: "Klicke auf den markierten Ort auf der Karte.",
    clickCounty: "Klicke auf das markierte Bundesland / den Kreis auf der Karte.",
    distanceA: "Klicke zuerst auf den ersten Ort.",
    distanceB: "Jetzt klicke auf den zweiten Ort.",
    spotError: "Klicke auf den falsch beschrifteten Ort.",
    orderProgress: "Klicke in der richtigen Reihenfolge.",
    orderWrong: "Falsche Reihenfolge! Versuche es erneut.",
    distanceResult: "Gemessene Entfernung",
    km: "km",
    expectedKm: "Erwartete Entfernung",
    tolerance: "±25%",
    skip: "Überspringen",
  },
  hu: {
    quiz: "Térkép-kvíz",
    score: "Pont",
    next: "Következő",
    retry: "Újra",
    close: "Bezárás",
    correct: "Helyes!",
    wrong: "Helytelen!",
    noPool: "Ehhez az országhoz nincs elérhető kvíz.",
    clickPoi: "Kattints a jelölt helyre a térképen.",
    clickCounty: "Kattints a jelölt tartományra / kerületre a térképen.",
    distanceA: "Előbb kattints az első helyre.",
    distanceB: "Most kattints a második helyre.",
    spotError: "Kattints a hibásan jelölt helyre.",
    orderProgress: "Kattints a helyes sorrendben.",
    orderWrong: "Rossz sorrend! Próbáld újra.",
    distanceResult: "Mért távolság",
    km: "km",
    expectedKm: "Elvárt távolság",
    tolerance: "±25%",
    skip: "Kihagyás",
  },
  ro: {
    quiz: "Quiz harta",
    score: "Puncte",
    next: "Următorul",
    retry: "Reîncearcă",
    close: "Închide",
    correct: "Corect!",
    wrong: "Greșit!",
    noPool: "Nu există quiz disponibil pentru această țară.",
    clickPoi: "Apasă pe locul marcat pe hartă.",
    clickCounty: "Apasă pe județul / land-ul marcat pe hartă.",
    distanceA: "Apasă mai întâi pe primul loc.",
    distanceB: "Acum apasă pe al doilea loc.",
    spotError: "Apasă pe locul etichetat greșit.",
    orderProgress: "Apasă în ordinea corectă.",
    orderWrong: "Ordine greșită! Încearcă din nou.",
    distanceResult: "Distanța măsurată",
    km: "km",
    expectedKm: "Distanța așteptată",
    tolerance: "±25%",
    skip: "Sari peste",
  },
  en: {
    quiz: "Map Quiz",
    score: "Score",
    next: "Next",
    retry: "Retry",
    close: "Close",
    correct: "Correct!",
    wrong: "Wrong!",
    noPool: "No quiz available for this country.",
    clickPoi: "Click on the marked location on the map.",
    clickCounty: "Click on the marked state / county on the map.",
    distanceA: "Click the first location first.",
    distanceB: "Now click the second location.",
    spotError: "Click on the incorrectly labeled location.",
    orderProgress: "Click in the correct order.",
    orderWrong: "Wrong order! Try again.",
    distanceResult: "Measured distance",
    km: "km",
    expectedKm: "Expected distance",
    tolerance: "±25%",
    skip: "Skip",
  },
};

// ──────────────────────────────────────────────
// QuizEngine hook — exposes state + handlers
// ──────────────────────────────────────────────

export function useQuizEngine({
  countryCode,
  pois,
}: {
  countryCode: string;
  pois: POI[];
}) {
  const scoreKey = `plizio:vlab:quiz:${countryCode}`;
  const [pool, setPool] = useState<QuizTask[]>([]);
  const [pointer, setPointer] = useState(0);
  const [score, setScore] = useState<{ correct: number; total: number }>(() =>
    readScore(scoreKey)
  );

  const [engineState, setEngineState] = useState<QuizEngineState>({
    task: null,
    phase: "waiting",
    result: null,
    distancePoiA: null,
    distancePoiB: null,
    orderProgress: 0,
    highlightPoiIds: [],
  });

  // Load pool on mount
  useEffect(() => {
    const tasks = getQuizPool(countryCode);
    if (tasks.length === 0) return;
    const shuffled = shuffle(tasks);
    setPool(shuffled);
    setPointer(0);
    activateTask(shuffled[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  const activateTask = useCallback((task: QuizTask) => {
    let highlights: string[] = [];
    if (task.type === "spot_error" && task.optionPoiIds) {
      highlights = [...task.optionPoiIds];
    } else if (task.type === "order_by" && task.orderedPoiIds) {
      highlights = [...task.orderedPoiIds];
    } else if (task.type === "distance_guess") {
      highlights = [task.targetPoiId, task.targetPoiId2].filter(Boolean) as string[];
    } else if (task.type === "click_poi" && task.targetPoiId) {
      highlights = [task.targetPoiId];
    }
    setEngineState({
      task,
      phase: "waiting",
      result: null,
      distancePoiA: null,
      distancePoiB: null,
      orderProgress: 0,
      highlightPoiIds: highlights,
    });
  }, []);

  const advanceScore = useCallback((correct: boolean) => {
    setScore((prev) => {
      const next = { correct: prev.correct + (correct ? 1 : 0), total: prev.total + 1 };
      writeScore(scoreKey, next);
      return next;
    });
  }, [scoreKey]);

  /** Called by InteractiveMap when a POI is clicked in quiz mode */
  const handlePoiClick = useCallback(
    (poi: POI) => {
      setEngineState((prev) => {
        if (!prev.task || prev.phase === "answered") return prev;
        const { task } = prev;

        if (task.type === "click_poi") {
          const correct = poi.id === task.targetPoiId;
          advanceScore(correct);
          return {
            ...prev,
            phase: "answered",
            result: { correct },
          };
        }

        if (task.type === "spot_error") {
          const correct = poi.id === task.wrongPoiId;
          advanceScore(correct);
          return {
            ...prev,
            phase: "answered",
            result: { correct },
          };
        }

        if (task.type === "distance_guess") {
          if (prev.phase === "waiting") {
            // Elso kattintas: ha nem az egyik target -> rossz valasz azonnal
            const isTargetA = poi.id === task.targetPoiId;
            const isTargetB = poi.id === task.targetPoiId2;
            if (!isTargetA && !isTargetB) {
              advanceScore(false);
              return { ...prev, phase: "answered", distancePoiA: poi, result: { correct: false } };
            }
            return { ...prev, phase: "distance_a", distancePoiA: poi };
          }
          if (prev.phase === "distance_a" && prev.distancePoiA) {
            if (poi.id === prev.distancePoiA.id) return prev; // ugyanaz, ignoraljuk
            const isOtherTarget =
              poi.id === task.targetPoiId || poi.id === task.targetPoiId2;
            const km = haversineKm(
              [prev.distancePoiA.coords[0], prev.distancePoiA.coords[1]],
              [poi.coords[0], poi.coords[1]]
            );
            const expected = task.expectedKm ?? 0;
            // Helyes csak ha mindket POI a celpontja ÉS a tavolsag a tureshatáron belul
            const correct = isOtherTarget && expected > 0 && Math.abs(km - expected) <= expected * 0.25;
            advanceScore(correct);
            return { ...prev, phase: "answered", distancePoiB: poi, result: { correct } };
          }
          return prev;
        }

        if (task.type === "order_by") {
          const ordered = task.orderedPoiIds ?? [];
          const expected = ordered[prev.orderProgress];
          if (poi.id !== expected) {
            // wrong order — show wrong result, user must retry
            return {
              ...prev,
              phase: "answered",
              result: { correct: false },
            };
          }
          const nextProgress = prev.orderProgress + 1;
          if (nextProgress >= ordered.length) {
            advanceScore(true);
            return {
              ...prev,
              phase: "answered",
              orderProgress: nextProgress,
              result: { correct: true },
            };
          }
          return {
            ...prev,
            orderProgress: nextProgress,
          };
        }

        return prev;
      });
    },
    [advanceScore]
  );

  /** Called by InteractiveMap when a county/region is clicked in quiz mode */
  const handleCountyClick = useCallback(
    (countyId: string) => {
      setEngineState((prev) => {
        if (!prev.task || prev.phase === "answered") return prev;
        if (prev.task.type !== "click_county") return prev;
        const correct = countyId === prev.task.targetCountyId;
        advanceScore(correct);
        return {
          ...prev,
          phase: "answered",
          result: { correct },
        };
      });
    },
    [advanceScore]
  );

  const handleNext = useCallback(() => {
    if (pool.length === 0) return;
    const nextPtr = pointer + 1;
    let newPool = pool;
    let newPtr = nextPtr;
    if (nextPtr >= pool.length) {
      newPool = shuffle(pool);
      newPtr = 0;
      setPool(newPool);
    }
    setPointer(newPtr);
    activateTask(newPool[newPtr]);
  }, [pool, pointer, activateTask]);

  const handleRetry = useCallback(() => {
    if (!engineState.task) return;
    activateTask(engineState.task);
  }, [engineState.task, activateTask]);

  // Compute the effective POI type filter for the current task
  const visiblePoiTypes = useMemo((): PoiTypeFilterValue[] | null => {
    const task = engineState.task;
    if (!task) return null;
    if (task.poiTypeFilter !== undefined) return task.poiTypeFilter;
    return deriveFromTask(task, pois);
  }, [engineState.task, pois]);

  // For tasks with an explicit list of option POIs (spot_error, order_by, distance_guess),
  // restrict rendering to ONLY those ids so the user isn't distracted by other cities on the map.
  const visiblePoiIds = useMemo((): Set<string> | null => {
    const task = engineState.task;
    if (!task) return null;
    const ids: string[] = [];
    if (task.type === "spot_error" && task.optionPoiIds) ids.push(...task.optionPoiIds);
    if (task.type === "order_by" && task.orderedPoiIds) ids.push(...task.orderedPoiIds);
    if (task.type === "distance_guess") {
      if (task.targetPoiId) ids.push(task.targetPoiId);
      if (task.targetPoiId2) ids.push(task.targetPoiId2);
    }
    return ids.length > 0 ? new Set(ids) : null;
  }, [engineState.task]);

  return {
    engineState,
    score,
    visiblePoiTypes,
    visiblePoiIds,
    handlePoiClick,
    handleCountyClick,
    handleNext,
    handleRetry,
  };
}

// ──────────────────────────────────────────────
// QuizPanel — UI panel (header bar + feedback)
// ──────────────────────────────────────────────

export function QuizPanel({
  lang,
  engineState,
  score,
  onNext,
  onRetry,
  onClose,
  pois,
}: {
  lang: Lang;
  engineState: QuizEngineState;
  score: { correct: number; total: number };
  onNext: () => void;
  onRetry: () => void;
  onClose: () => void;
  pois: POI[];
}) {
  const t = QT[lang] ?? QT.de;
  const { task, phase, result, distancePoiA, distancePoiB, orderProgress } = engineState;

  const getHintText = (): string => {
    if (!task) return "";
    switch (task.type) {
      case "click_poi": return t.clickPoi;
      case "click_county": return t.clickCounty;
      case "spot_error": return t.spotError;
      case "order_by": return t.orderProgress;
      case "distance_guess":
        return phase === "distance_a" ? t.distanceB : t.distanceA;
      default: return "";
    }
  };

  const distanceKm = useMemo(() => {
    if (!distancePoiA || !distancePoiB) return null;
    return haversineKm(
      [distancePoiA.coords[0], distancePoiA.coords[1]],
      [distancePoiB.coords[0], distancePoiB.coords[1]]
    );
  }, [distancePoiA, distancePoiB]);

  if (!task) {
    return (
      <div className="mb-2 px-1">
        <div className="bg-[#0A1929]/90 border border-cyan-400/30 rounded-xl px-3 py-2 text-white/50 text-xs">
          {t.noPool}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 mb-2 px-1">
      {/* Header row: title + score + close */}
      <div className="flex items-center gap-2 bg-[#0A1929]/90 border border-cyan-400/30 rounded-xl px-3 py-2 backdrop-blur-sm">
        <span className="text-cyan-200 text-xs font-semibold flex-1">{t.quiz}</span>
        <span className="text-white/60 text-xs">
          {t.score}: <span className="text-cyan-300 font-bold">{score.correct}</span>
          <span className="text-white/35">/{score.total}</span>
        </span>
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white p-0.5 rounded transition ml-1"
        >
          <X size={14} />
        </button>
      </div>

      {/* Question */}
      <div className="bg-[#0A1929]/80 border border-cyan-400/20 rounded-xl px-3 py-2">
        <p className="text-white/90 text-sm font-medium leading-snug">
          {task.question[lang] ?? task.question.en}
        </p>
        {phase !== "answered" && (
          <p className="text-white/45 text-xs mt-1">{getHintText()}</p>
        )}
        {task.type === "order_by" && phase !== "answered" && (task.orderedPoiIds?.length ?? 0) > 0 && (
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {(task.orderedPoiIds ?? []).map((poiId, idx) => {
              const poi = pois.find((p) => p.id === poiId);
              const done = idx < orderProgress;
              const current = idx === orderProgress;
              return (
                <span
                  key={poiId}
                  className={`text-[10px] px-2 py-0.5 rounded-full border transition
                    ${done ? "bg-green-500/20 border-green-400/30 text-green-300" :
                      current ? "bg-cyan-500/25 border-cyan-400/40 text-cyan-200 font-bold" :
                      "bg-white/5 border-white/10 text-white/35"}`}
                >
                  {idx + 1}. {poi ? getPoiName(poi, lang) : poiId}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Distance progress */}
      {task.type === "distance_guess" && phase === "distance_a" && distancePoiA && (
        <div className="px-1 text-xs text-cyan-300/80">
          A: {getPoiName(distancePoiA, lang)} → {t.distanceB}
        </div>
      )}

      {/* Skip gomb — csak ha meg nem valaszolt */}
      {phase !== "answered" && (
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] text-white/55 hover:text-white/85 hover:bg-white/5 transition"
          >
            {t.skip} <ChevronRight size={11} />
          </button>
        </div>
      )}

      {/* Feedback */}
      {phase === "answered" && result && (
        <div
          className={`flex flex-col gap-2 rounded-xl border px-3 py-2 backdrop-blur-sm
            ${result.correct
              ? "bg-green-500/15 border-green-400/40"
              : "bg-red-500/15 border-red-400/40"}`}
        >
          <div className="flex items-center gap-2">
            {result.correct ? (
              <CheckCircle size={16} className="text-green-400 shrink-0" />
            ) : (
              <XCircle size={16} className="text-red-400 shrink-0" />
            )}
            <span
              className={`text-sm font-semibold ${result.correct ? "text-green-300" : "text-red-300"}`}
            >
              {result.correct ? t.correct : t.wrong}
            </span>
          </div>

          {/* Distance result detail */}
          {task.type === "distance_guess" && distanceKm !== null && (
            <div className="text-xs text-white/65 flex flex-wrap gap-2">
              <span>
                {t.distanceResult}:{" "}
                <span className="text-cyan-200 font-bold">{Math.round(distanceKm)} {t.km}</span>
              </span>
              {task.expectedKm && (
                <span>
                  {t.expectedKm}:{" "}
                  <span className="text-white/80">{task.expectedKm} {t.km}</span>{" "}
                  <span className="text-white/40">({t.tolerance})</span>
                </span>
              )}
            </div>
          )}

          {result.feedback && (
            <p className="text-xs text-white/60">{result.feedback[lang] ?? result.feedback.en}</p>
          )}

          {/* Buttons */}
          <div className="flex gap-2 mt-1">
            <button
              onClick={onNext}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-cyan-600/80 hover:bg-cyan-500/90 text-white text-xs font-semibold transition"
            >
              {t.next} <ChevronRight size={13} />
            </button>
            <button
              onClick={onRetry}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-xs transition"
            >
              <RotateCcw size={12} /> {t.retry}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** SVG overlay for quiz — flash ring on target POI(s) */
export function QuizSvgOverlay({
  engineState,
  pois,
  projectCoords,
  viewScale,
}: {
  engineState: QuizEngineState;
  pois: POI[];
  projectCoords: (lon: number, lat: number) => [number, number];
  viewScale: number;
}) {
  const { task, phase, highlightPoiIds, distancePoiA } = engineState;
  if (!task) return null;

  return (
    <>
      {/* Highlight ring CSAK valasz utan (helyes/rossz visszajelzes), VAGY distance_guess kozben az elso kattintasra */}
      {highlightPoiIds.map((poiId) => {
        const poi = pois.find((p) => p.id === poiId);
        if (!poi) return null;
        const isWrong = task.type === "spot_error" && poiId === task.wrongPoiId && phase === "answered";
        const isDistA = poiId === distancePoiA?.id;
        // Csak ha rossz valasz utan (piros) VAGY distance_guess elso POI ki van valasztva (kek visszajelzes)
        if (!isWrong && !isDistA) return null;
        const [cx, cy] = projectCoords(poi.coords[0], poi.coords[1]);
        const color = isWrong ? "#EF4444" : "#22D3EE";
        return (
          <circle
            key={`quiz-ring-${poiId}`}
            cx={cx}
            cy={cy}
            r={15 / viewScale}
            fill="none"
            stroke={color}
            strokeWidth={2.5 / viewScale}
            opacity={0.85}
            style={{ pointerEvents: "none" }}
          />
        );
      })}

      {/* Distance line when both poi clicked */}
      {task.type === "distance_guess" && engineState.distancePoiA && engineState.distancePoiB && (() => {
        const a = engineState.distancePoiA!;
        const b = engineState.distancePoiB!;
        const [ax, ay] = projectCoords(a.coords[0], a.coords[1]);
        const [bx, by] = projectCoords(b.coords[0], b.coords[1]);
        return (
          <line
            x1={ax} y1={ay} x2={bx} y2={by}
            stroke="#22D3EE"
            strokeWidth={2 / viewScale}
            strokeDasharray={`${8 / viewScale},${4 / viewScale}`}
            opacity={0.8}
            style={{ pointerEvents: "none" }}
          />
        );
      })()}

      {/* Target county highlight handled in parent via county path fill override */}
    </>
  );
}
