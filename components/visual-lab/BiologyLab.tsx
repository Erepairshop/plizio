"use client";

import dynamic from "next/dynamic";
import { BIOLOGIE_POOLS } from "@/lib/visualLab/pools/biologiePool";
import {
  isBiologyGameAvailableForGrade,
  isBiologySkillGameId,
  type BiologyGameId,
} from "@/lib/visualLab/biologyCurriculum";
import { buildBiologySkillRounds } from "@/lib/visualLab/biologySkillContent";
import { prepareLegacyBiologyRounds } from "@/lib/visualLab/prepareLegacyBiologyRounds";
import BiologyRoundSession from "./BiologyRoundSession";

const MeteorCatchGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/MeteorCatchGame"));
const OrbitSortGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/OrbitSortGame"));
const SignalRunnerGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/SignalRunnerGame"));
const ConstellationBuilderGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/ConstellationBuilderGame"));
const MemoryRadarGame = dynamic(() => import("@/app/astro-sachkunde/visual-lab/games/MemoryRadarGame"));
const BiologySkillGame = dynamic(() => import("@/app/astro-biologie/visual-lab/games/BiologySkillGame"));

type Lang = "de" | "hu" | "ro" | "en";

const EMPTY_COPY: Record<Lang, string> = {
  de: "Für diese Klasse sind noch keine passenden Aufgaben verfügbar.",
  hu: "Ehhez az osztályhoz még nincs megfelelő feladat.",
  ro: "Nu există încă exerciții potrivite pentru această clasă.",
  en: "No suitable tasks are available for this grade yet.",
};

function localizeDeep(obj: unknown, lang: Lang): any {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const candidate = obj as Record<string, unknown>;
    if (["de", "en", "hu", "ro"].every((key) => typeof candidate[key] === "string")) {
      return candidate[lang] ?? candidate.de ?? "";
    }
    return Object.fromEntries(Object.entries(candidate).map(([key, value]) => [key, localizeDeep(value, lang)]));
  }
  if (Array.isArray(obj)) return obj.map((value) => localizeDeep(value, lang));
  return obj;
}

function EmptyState({ text }: { text: string }) {
  return <div className="rounded-xl border border-amber-300/25 bg-amber-950/25 p-5 text-center font-semibold text-amber-100">{text}</div>;
}

export default function BiologyLab({ gameId: gameIdInput, grade, lang, fallback }: {
  gameId: string;
  grade: number;
  lang: Lang;
  fallback?: string;
}) {
  const gameId = gameIdInput as BiologyGameId;
  if (!isBiologyGameAvailableForGrade(gameId, grade)) return <EmptyState text={fallback || EMPTY_COPY[lang]} />;

  if (isBiologySkillGameId(gameId)) {
    return (
      <BiologyRoundSession gameId={gameId} grade={grade} lang={lang}
        rounds={(level, count) => buildBiologySkillRounds(gameId, grade, lang, level, count)}
        renderRound={(round, onDone, key) => <BiologySkillGame key={key} lang={lang} round={round} onDone={onDone} />} />
    );
  }

  const pool = BIOLOGIE_POOLS[grade];
  if (!pool) return <EmptyState text={fallback || EMPTY_COPY[lang]} />;

  switch (gameId) {
    case "meteor-catch":
      return <BiologyRoundSession gameId={gameId} grade={grade} lang={lang}
        rounds={(level) => prepareLegacyBiologyRounds(gameId, pool.meteorCatch, grade, level)}
        renderRound={(round, onDone, key) => <MeteorCatchGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "orbit-sort":
      return <BiologyRoundSession gameId={gameId} grade={grade} lang={lang}
        rounds={(level) => prepareLegacyBiologyRounds(gameId, pool.orbitSort, grade, level)}
        renderRound={(round, onDone, key) => <OrbitSortGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "signal-runner":
      return <BiologyRoundSession gameId={gameId} grade={grade} lang={lang}
        rounds={(level) => prepareLegacyBiologyRounds(gameId, pool.signalRunner, grade, level)}
        renderRound={(round, onDone, key) => <SignalRunnerGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "constellation-builder":
      return <BiologyRoundSession gameId={gameId} grade={grade} lang={lang}
        rounds={(level) => prepareLegacyBiologyRounds(gameId, pool.constellationBuilder, grade, level)}
        renderRound={(round, onDone, key) => <ConstellationBuilderGame key={key} round={localizeDeep(round, lang)} onDone={onDone} />} />;
    case "memory-radar":
      return <BiologyRoundSession gameId={gameId} grade={grade} lang={lang}
        rounds={(level) => prepareLegacyBiologyRounds(gameId, pool.memoryRadar, grade, level)}
        renderRound={(round, onDone, key) => <MemoryRadarGame key={key} rounds={[localizeDeep(round, lang)]} onDone={onDone} />} />;
    default:
      return <EmptyState text={fallback || EMPTY_COPY[lang]} />;
  }
}
