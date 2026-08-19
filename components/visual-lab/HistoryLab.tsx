"use client";

import dynamic from "next/dynamic";
import { GESCHICHTE_POOLS } from "@/lib/visualLab/pools/geschichtePool";
import { isHistoryGameAvailableForGrade, isHistorySkillGameId, type HistoryGameId } from "@/lib/visualLab/historyCurriculum";
import { buildHistorySkillRounds } from "@/lib/visualLab/historySkillContent";
import { prepareLegacyHistoryRounds } from "@/lib/visualLab/prepareLegacyHistoryRounds";
import HistoryRoundSession from "./HistoryRoundSession";

const MeteorCatchGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/MeteorCatchGame"));
const OrbitSortGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/OrbitSortGame"));
const SignalRunnerGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/SignalRunnerGame"));
const ConstellationBuilderGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/ConstellationBuilderGame"));
const MemoryRadarGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/MemoryRadarGame"));
const HistorySkillGame = dynamic(() => import("@/app/astro-geschichte/visual-lab/games/HistorySkillGame"));

type Lang = "de" | "hu" | "ro" | "en";
const EMPTY: Record<Lang, string> = {
  de: "Für diese Klasse sind noch keine passenden Aufgaben verfügbar.",
  hu: "Ehhez az osztályhoz még nincs megfelelő feladat.",
  ro: "Nu există încă exerciții potrivite pentru această clasă.",
  en: "No suitable tasks are available for this grade yet.",
};

function localizeDeep(obj: unknown, lang: Lang): any {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const value = obj as Record<string, unknown>;
    if (["de", "en", "hu", "ro"].every((key) => typeof value[key] === "string")) return value[lang] ?? value.de ?? "";
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localizeDeep(item, lang)]));
  }
  if (Array.isArray(obj)) return obj.map((item) => localizeDeep(item, lang));
  return obj;
}

function EmptyState({ text }: { text: string }) {
  return <div className="rounded-xl border border-amber-300/25 bg-amber-950/25 p-5 text-center font-semibold text-amber-100">{text}</div>;
}

export default function HistoryLab({ gameId: input, grade, lang, fallback }: { gameId: string; grade: number; lang: Lang; fallback?: string }) {
  const gameId = input as HistoryGameId;
  if (!isHistoryGameAvailableForGrade(gameId, grade)) return <EmptyState text={fallback || EMPTY[lang]} />;
  if (isHistorySkillGameId(gameId)) {
    return <HistoryRoundSession gameId={gameId} grade={grade} lang={lang}
      rounds={(level, count) => buildHistorySkillRounds(gameId, grade, lang, level, count)}
      renderRound={(round, onDone, key) => <HistorySkillGame key={key} lang={lang} round={round} onDone={onDone} />} />;
  }

  const pool = GESCHICHTE_POOLS[grade];
  if (!pool) return <EmptyState text={fallback || EMPTY[lang]} />;
  switch (gameId) {
    case "meteor-catch": return <HistoryRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyHistoryRounds(gameId, pool.meteorCatch, grade, level)} renderRound={(round, onDone, key) => <MeteorCatchGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "orbit-sort": return <HistoryRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyHistoryRounds(gameId, pool.orbitSort, grade, level)} renderRound={(round, onDone, key) => <OrbitSortGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "signal-runner": return <HistoryRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyHistoryRounds(gameId, pool.signalRunner, grade, level)} renderRound={(round, onDone, key) => <SignalRunnerGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "constellation-builder": return <HistoryRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyHistoryRounds(gameId, pool.constellationBuilder, grade, level)} renderRound={(round, onDone, key) => <ConstellationBuilderGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "memory-radar": return <HistoryRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyHistoryRounds(gameId, pool.memoryRadar, grade, level)} renderRound={(round, onDone, key) => <MemoryRadarGame key={key} rounds={[localizeDeep(round, lang)]} onDone={onDone} />} />;
    default: return <EmptyState text={fallback || EMPTY[lang]} />;
  }
}
