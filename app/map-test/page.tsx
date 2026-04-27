"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, Ruler, Filter, HelpCircle, X, RotateCcw } from "lucide-react";
import {
  magyarorszagMap,
  magyarorszagViewBox,
  projectCoordsHU,
} from "@/lib/visualLab/maps/magyarorszag.svg";
import { hungaryAllPoi } from "@/lib/visualLab/data/hungaryPoi";
import type { POI } from "@/lib/visualLab/data/poi";

type Lang = "de" | "hu" | "ro" | "en";
type Mode = "browse" | "ruler" | "quiz";
type QuizType = "where" | "what" | "which_county" | "capital";

const TITLE: Record<Lang, string> = {
  de: "Karten-Test",
  hu: "Térkép-teszt",
  ro: "Test hartă",
  en: "Map Test",
};

const CATEGORIES: { id: string; hu: string; de: string; ro: string; en: string; types: string[] }[] = [
  { id: "all", hu: "Mind", de: "Alle", ro: "Toate", en: "All", types: [] },
  { id: "city", hu: "Városok", de: "Städte", ro: "Orașe", en: "Cities", types: ["state-capital", "city"] },
  { id: "mountain", hu: "Hegyek", de: "Berge", ro: "Munți", en: "Mountains", types: ["mountain"] },
  { id: "water", hu: "Vizek", de: "Gewässer", ro: "Ape", en: "Waters", types: ["river", "lake", "sea"] },
  { id: "nature", hu: "Természet", de: "Natur", ro: "Natură", en: "Nature", types: ["forest", "animal-habitat"] },
  { id: "historical", hu: "Történelmi", de: "Historisch", ro: "Istoric", en: "Historical", types: ["historical", "landmark"] },
];

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function getName(poi: POI, l: Lang): string {
  const n: any = poi.name;
  if (!n) return poi.id;
  if (typeof n === "string") return n;
  return n[l] ?? n.en ?? n.de ?? n.hu ?? poi.id;
}

function getCountyName(c: { name: { de: string; hu: string; ro: string; en: string } }, l: Lang): string {
  return c.name[l] ?? c.name.hu;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface QuizState {
  type: QuizType;
  targetPoi?: POI;
  targetCounty?: typeof magyarorszagMap[number];
  options: string[];
  correctOption: string;
  guessedOption?: string;
  guessedPoi?: POI;
}

export default function MapTestPage() {
  const router = useRouter();
  const l: Lang = "hu";
  const T = TITLE[l];

  const [mode, setMode] = useState<Mode>("browse");
  const [category, setCategory] = useState<string>("all");
  const [selected, setSelected] = useState<POI | null>(null);
  const [rulerA, setRulerA] = useState<POI | null>(null);
  const [rulerB, setRulerB] = useState<POI | null>(null);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });

  const allCityPois = useMemo(
    () =>
      (hungaryAllPoi as POI[]).filter(
        (p) => Array.isArray(p.coords) && p.coords.length === 2 && (p.type === "state-capital" || p.type === "city"),
      ),
    [],
  );

  const visiblePois = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.id === category);
    const pois = (hungaryAllPoi as POI[]).filter((p) => Array.isArray(p.coords) && p.coords.length === 2);
    if (!cat || cat.types.length === 0) return pois;
    return pois.filter((p) => cat.types.includes(p.type as string));
  }, [category]);

  const makeQuiz = (): QuizState => {
    const types: QuizType[] = ["where", "what", "which_county", "capital"];
    const type = types[Math.floor(Math.random() * types.length)];

    if (type === "where") {
      const target = allCityPois[Math.floor(Math.random() * allCityPois.length)];
      return { type, targetPoi: target, options: [], correctOption: target.id };
    }
    if (type === "what") {
      const target = allCityPois[Math.floor(Math.random() * allCityPois.length)];
      const wrong = shuffle(allCityPois.filter((p) => p.id !== target.id)).slice(0, 3);
      const options = shuffle([target, ...wrong]).map((p) => getName(p, l));
      return { type, targetPoi: target, options, correctOption: getName(target, l) };
    }
    if (type === "which_county") {
      const target = magyarorszagMap[Math.floor(Math.random() * magyarorszagMap.length)];
      const wrong = shuffle(magyarorszagMap.filter((c) => c.id !== target.id)).slice(0, 3);
      const options = shuffle([target, ...wrong]).map((c) => getCountyName(c, l));
      return { type, targetCounty: target, options, correctOption: getCountyName(target, l) };
    }
    // capital
    const target = magyarorszagMap[Math.floor(Math.random() * magyarorszagMap.length)];
    const wrong = shuffle(magyarorszagMap.filter((c) => c.id !== target.id)).slice(0, 3);
    const options = shuffle([target, ...wrong]).map((c) => c.capital);
    return { type, targetCounty: target, options, correctOption: target.capital };
  };

  const startQuiz = () => {
    setMode("quiz");
    setSelected(null);
    setRulerA(null);
    setRulerB(null);
    setQuiz(makeQuiz());
  };

  const nextQuiz = () => setQuiz(makeQuiz());

  const answerOption = (opt: string) => {
    if (!quiz || quiz.guessedOption) return;
    const correct = opt === quiz.correctOption;
    setQuizScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    setQuiz({ ...quiz, guessedOption: opt });
  };

  const onPoiClick = (p: POI) => {
    if (mode === "browse") {
      setSelected(p);
      return;
    }
    if (mode === "ruler") {
      if (!rulerA) setRulerA(p);
      else if (!rulerB) setRulerB(p);
      else {
        setRulerA(p);
        setRulerB(null);
      }
      return;
    }
    if (mode === "quiz" && quiz && quiz.type === "where" && !quiz.guessedPoi) {
      const correct = p.id === quiz.targetPoi?.id;
      setQuizScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
      setQuiz({ ...quiz, guessedPoi: p, guessedOption: correct ? quiz.correctOption : p.id });
    }
  };

  const resetMode = () => {
    setMode("browse");
    setSelected(null);
    setRulerA(null);
    setRulerB(null);
    setQuiz(null);
  };

  useEffect(() => {
    if (mode === "quiz" && !quiz) setQuiz(makeQuiz());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const rulerKm = rulerA && rulerB ? haversineKm(rulerA.coords as [number, number], rulerB.coords as [number, number]) : null;

  const quizWhereKm =
    quiz?.type === "where" && quiz.guessedPoi && quiz.targetPoi
      ? haversineKm(quiz.guessedPoi.coords as [number, number], quiz.targetPoi.coords as [number, number])
      : null;

  const highlightedCountyId =
    mode === "quiz" && quiz && (quiz.type === "what" || quiz.type === "which_county" || quiz.type === "capital")
      ? quiz.targetCounty?.id
      : undefined;

  const highlightedPoiId = mode === "quiz" && quiz?.type === "what" ? quiz.targetPoi?.id : undefined;

  // POIs to render based on mode
  const poisToRender = mode === "quiz" && quiz?.type === "where" ? allCityPois : mode === "quiz" ? [] : visiblePois;

  const questionText = (): string => {
    if (!quiz) return "";
    if (quiz.type === "where") return quiz.targetPoi ? `Hol van ${getName(quiz.targetPoi, l)}?` : "";
    if (quiz.type === "what") return "Melyik ez a város?";
    if (quiz.type === "which_county") return "Melyik megye villog?";
    if (quiz.type === "capital") return quiz.targetCounty ? `${getCountyName(quiz.targetCounty, l)} megye székhelye?` : "";
    return "";
  };

  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col text-white">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={() => router.push("/learn")}
          className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="back"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-black leading-tight">{T}</h1>
        <span className="ml-auto text-xs text-white/50">Magyarország · prototípus</span>
      </header>

      <div className="px-4 pb-2 flex gap-2 shrink-0 overflow-x-auto">
        <button
          onClick={() => { setMode("browse"); setSelected(null); setQuiz(null); }}
          className={`shrink-0 px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 transition ${mode === "browse" ? "bg-emerald-500 text-white" : "bg-white/10 text-white/70"}`}
        >
          <Filter size={14} /> Böngészés
        </button>
        <button
          onClick={() => { setMode("ruler"); setRulerA(null); setRulerB(null); setQuiz(null); }}
          className={`shrink-0 px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 transition ${mode === "ruler" ? "bg-sky-500 text-white" : "bg-white/10 text-white/70"}`}
        >
          <Ruler size={14} /> Távolság
        </button>
        <button
          onClick={startQuiz}
          className={`shrink-0 px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 transition ${mode === "quiz" ? "bg-amber-500 text-white" : "bg-white/10 text-white/70"}`}
        >
          <HelpCircle size={14} /> Kvíz
        </button>
        {mode !== "browse" && (
          <button onClick={resetMode} className="shrink-0 px-3 py-1.5 rounded-full text-sm bg-white/5 text-white/50 flex items-center gap-1">
            <RotateCcw size={14} />
          </button>
        )}
      </div>

      {mode === "browse" && (
        <div className="px-4 pb-2 flex gap-2 shrink-0 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 px-2.5 py-1 rounded-full text-xs transition ${category === c.id ? "bg-white text-black" : "bg-white/10 text-white/60"}`}
            >
              {c[l]}
            </button>
          ))}
        </div>
      )}

      {mode === "ruler" && (
        <div className="mx-4 mb-2 p-2.5 rounded-lg bg-sky-500/15 border border-sky-400/30 text-sm shrink-0">
          {!rulerA && <span className="text-white/80">Válassz egy POI-t (kezdőpont)…</span>}
          {rulerA && !rulerB && (
            <span className="text-white/80">
              <b>{getName(rulerA, l)}</b> → válassz egy másikat
            </span>
          )}
          {rulerA && rulerB && rulerKm !== null && (
            <div className="flex items-center justify-between gap-3">
              <span>
                <b>{getName(rulerA, l)}</b> → <b>{getName(rulerB, l)}</b>
              </span>
              <span className="font-black text-sky-200">{rulerKm.toFixed(0)} km</span>
            </div>
          )}
        </div>
      )}

      {mode === "quiz" && quiz && (
        <div className="mx-4 mb-2 p-2.5 rounded-lg bg-amber-500/15 border border-amber-400/30 text-sm shrink-0">
          <div className="flex items-center justify-between gap-3">
            <span className="text-white/90 font-semibold">{questionText()}</span>
            <span className="text-xs text-white/60 shrink-0">
              {quizScore.correct}/{quizScore.total}
            </span>
          </div>

          {(quiz.type === "what" || quiz.type === "which_county" || quiz.type === "capital") && (
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {quiz.options.map((opt) => {
                const isGuess = quiz.guessedOption === opt;
                const isCorrect = opt === quiz.correctOption;
                let cls = "bg-white/10 text-white/90 hover:bg-white/20";
                if (quiz.guessedOption) {
                  if (isCorrect) cls = "bg-emerald-500 text-black font-bold";
                  else if (isGuess) cls = "bg-rose-500 text-white";
                  else cls = "bg-white/5 text-white/40";
                }
                return (
                  <button
                    key={opt}
                    onClick={() => answerOption(opt)}
                    disabled={!!quiz.guessedOption}
                    className={`px-2 py-1.5 rounded text-xs transition ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {quiz.type === "where" && quiz.guessedPoi && quiz.targetPoi && (
            <div className="mt-2 text-xs">
              {quiz.guessedPoi.id === quiz.targetPoi.id ? (
                <span className="text-emerald-300 font-bold">✓ Helyes!</span>
              ) : (
                <span className="text-rose-300">
                  ✗ <b>{getName(quiz.guessedPoi, l)}</b> · {quizWhereKm?.toFixed(0)} km el
                </span>
              )}
            </div>
          )}

          {quiz.guessedOption && (
            <div className="mt-2 flex justify-end">
              <button onClick={nextQuiz} className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold">
                Következő →
              </button>
            </div>
          )}
        </div>
      )}

      <main className="flex-1 min-h-0 relative">
        <svg viewBox={magyarorszagViewBox} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {magyarorszagMap.map((m) => {
            const isHighlight = highlightedCountyId === m.id;
            return (
              <path
                key={m.id}
                d={m.path}
                fill={isHighlight ? "rgba(245,158,11,0.35)" : "rgba(255,255,255,0.05)"}
                stroke={isHighlight ? "#f59e0b" : "rgba(255,255,255,0.2)"}
                strokeWidth={isHighlight ? 1.2 : 0.5}
              >
                {isHighlight && (
                  <animate attributeName="fill-opacity" values="0.25;0.55;0.25" dur="1.2s" repeatCount="indefinite" />
                )}
              </path>
            );
          })}

          {mode === "ruler" && rulerA && rulerB && (
            <line
              x1={projectCoordsHU((rulerA.coords as number[])[0], (rulerA.coords as number[])[1])[0]}
              y1={projectCoordsHU((rulerA.coords as number[])[0], (rulerA.coords as number[])[1])[1]}
              x2={projectCoordsHU((rulerB.coords as number[])[0], (rulerB.coords as number[])[1])[0]}
              y2={projectCoordsHU((rulerB.coords as number[])[0], (rulerB.coords as number[])[1])[1]}
              stroke="#38bdf8"
              strokeWidth={1.5}
              strokeDasharray="4 3"
            />
          )}

          {mode === "quiz" && quiz?.type === "where" && quiz.guessedPoi && quiz.targetPoi && quiz.guessedPoi.id !== quiz.targetPoi.id && (
            <line
              x1={projectCoordsHU((quiz.guessedPoi.coords as number[])[0], (quiz.guessedPoi.coords as number[])[1])[0]}
              y1={projectCoordsHU((quiz.guessedPoi.coords as number[])[0], (quiz.guessedPoi.coords as number[])[1])[1]}
              x2={projectCoordsHU((quiz.targetPoi.coords as number[])[0], (quiz.targetPoi.coords as number[])[1])[0]}
              y2={projectCoordsHU((quiz.targetPoi.coords as number[])[0], (quiz.targetPoi.coords as number[])[1])[1]}
              stroke="#f87171"
              strokeWidth={1}
              strokeDasharray="3 2"
            />
          )}

          {/* Highlighted POI (what-quiz) */}
          {mode === "quiz" && quiz?.type === "what" && quiz.targetPoi && (() => {
            const [x, y] = projectCoordsHU((quiz.targetPoi.coords as number[])[0], (quiz.targetPoi.coords as number[])[1]);
            return (
              <g>
                <circle cx={x} cy={y} r={6} fill="none" stroke="#f59e0b" strokeWidth={1.5}>
                  <animate attributeName="r" values="4;9;4" dur="1.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
                </circle>
                <circle cx={x} cy={y} r={2.5} fill="#f59e0b" />
              </g>
            );
          })()}

          {poisToRender.map((p) => {
            const [x, y] = projectCoordsHU((p.coords as number[])[0], (p.coords as number[])[1]);
            const isSelected = selected?.id === p.id;
            const isRulerA = rulerA?.id === p.id;
            const isRulerB = rulerB?.id === p.id;
            const isQuizGuess = mode === "quiz" && quiz?.type === "where" && quiz.guessedPoi?.id === p.id;
            const isQuizTarget = mode === "quiz" && quiz?.type === "where" && quiz.guessedOption && quiz.targetPoi?.id === p.id;
            const showLabel = mode === "browse" || isSelected || isRulerA || isRulerB || isQuizGuess || isQuizTarget;

            let color = "#fbbf24";
            if (p.type === "state-capital") color = "#ef4444";
            else if (p.type === "city") color = "#fbbf24";
            else if (p.type === "mountain") color = "#a78bfa";
            else if (p.type === "river" || p.type === "lake") color = "#38bdf8";
            else if (p.type === "forest") color = "#22c55e";
            else if (p.type === "historical" || p.type === "landmark") color = "#f472b6";

            if (isRulerA || isRulerB) color = "#38bdf8";
            if (isQuizGuess && quiz?.targetPoi && quiz.guessedPoi?.id === quiz.targetPoi.id) color = "#10b981";
            else if (isQuizGuess) color = "#f87171";
            if (isQuizTarget) color = "#10b981";

            return (
              <g key={p.id} style={{ cursor: "pointer" }} onClick={() => onPoiClick(p)}>
                <circle cx={x} cy={y} r={isSelected || isRulerA || isRulerB || isQuizGuess || isQuizTarget ? 3.5 : 2} fill={color} />
                {showLabel && (
                  <text x={x + 4} y={y + 2.5} fontSize={5} fill="white" stroke="#000" strokeWidth={0.8} paintOrder="stroke" style={{ pointerEvents: "none" }}>
                    {getName(p, l)}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {mode === "browse" && selected && (
          <div className="absolute left-3 right-3 bottom-3 p-3 rounded-xl bg-[#0b0b1e]/95 border border-white/10 backdrop-blur">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-sm font-bold">{getName(selected, l)}</div>
                <div className="text-xs text-white/50 mt-0.5">{selected.type}</div>
                {selected.description && (
                  <div className="text-xs text-white/70 mt-2">
                    {(() => {
                      const d: any = selected.description;
                      return typeof d === "string" ? d : d[l] ?? d.en ?? d.de ?? d.hu ?? "";
                    })()}
                  </div>
                )}
              </div>
              <button onClick={() => setSelected(null)} className="text-white/50 hover:text-white shrink-0">
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
