"use client";

import dynamic from "next/dynamic";
import { PHYSIK_POOLS } from "@/lib/visualLab/pools/physikPool";
import { isPhysicsGameAvailableForGrade, isPhysicsSkillGameId, type PhysicsGameId } from "@/lib/visualLab/physicsCurriculum";
import { buildPhysicsSkillRounds } from "@/lib/visualLab/physicsSkillContent";
import { prepareLegacyPhysicsRounds } from "@/lib/visualLab/prepareLegacyPhysicsRounds";
import PhysicsRoundSession from "./PhysicsRoundSession";

const FormulaBlitzGame = dynamic(() => import("@/app/astro-physik/visual-lab/games/FormulaBlitzGame"));
const MeteorCatchGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/MeteorCatchGame"));
const OrbitSortGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/OrbitSortGame"));
const SignalRunnerGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/SignalRunnerGame"));
const ConstellationBuilderGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/ConstellationBuilderGame"));
const MemoryRadarGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/MemoryRadarGame"));
const PhysicsSkillGame = dynamic(() => import("@/app/astro-physik/visual-lab/games/PhysicsSkillGame"));

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

export default function PhysicsLab({ gameId: input, grade, lang, fallback }: { gameId: string; grade: number; lang: Lang; fallback?: string }) {
  const gameId = input as PhysicsGameId;
  if (!isPhysicsGameAvailableForGrade(gameId, grade)) return <EmptyState text={fallback || EMPTY[lang]} />;
  if (gameId === "formula-blitz") return <FormulaBlitzGame grade={grade} lang={lang} />;

  if (isPhysicsSkillGameId(gameId)) {
    return <PhysicsRoundSession gameId={gameId} grade={grade} lang={lang}
      rounds={(level, count) => buildPhysicsSkillRounds(gameId, grade, lang, level, count)}
      renderRound={(round, onDone, key) => <PhysicsSkillGame key={key} lang={lang} round={round} onDone={onDone} />} />;
  }

  const pool = PHYSIK_POOLS[grade];
  if (!pool) return <EmptyState text={fallback || EMPTY[lang]} />;
  switch (gameId) {
    case "meteor-catch": return <PhysicsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyPhysicsRounds(gameId, pool.meteorCatch, grade, level)} renderRound={(round, onDone, key) => <MeteorCatchGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "orbit-sort": return <PhysicsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyPhysicsRounds(gameId, pool.orbitSort, grade, level)} renderRound={(round, onDone, key) => <OrbitSortGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "signal-runner": return <PhysicsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyPhysicsRounds(gameId, pool.signalRunner, grade, level)} renderRound={(round, onDone, key) => <SignalRunnerGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "constellation-builder": return <PhysicsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyPhysicsRounds(gameId, pool.constellationBuilder, grade, level)} renderRound={(round, onDone, key) => <ConstellationBuilderGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "memory-radar": return <PhysicsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level) => prepareLegacyPhysicsRounds(gameId, pool.memoryRadar, grade, level)} renderRound={(round, onDone, key) => <MemoryRadarGame key={key} rounds={[localizeDeep(round, lang)]} onDone={onDone} />} />;
    default: return <EmptyState text={fallback || EMPTY[lang]} />;
  }
}
