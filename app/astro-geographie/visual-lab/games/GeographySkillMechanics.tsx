"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Delete, Fingerprint, Link2, RotateCcw, Search, Stamp } from "lucide-react";
import type { GeographySkillGameId } from "@/lib/visualLab/geographyCurriculum";
import type { GeographySkillLang } from "@/lib/visualLab/geographySkillContent";
import type { GeographyGameIdentity } from "./GeographyGameIdentity";

interface MechanicProps {
  gameId: GeographySkillGameId;
  lang: GeographySkillLang;
  options: string[];
  correctAnswer: string;
  selected: string | null;
  solved: boolean;
  disabled: boolean;
  identity: GeographyGameIdentity;
  onChoose: (option: string) => void;
}

const UI: Record<GeographySkillLang, Record<string, string>> = {
  de: { setTarget: "Ziel setzen", clue: "Spur", reveal: "Spur öffnen", choose: "Als Lösung wählen", reading: "Messwert bestätigen", page: "Atlasblatt", stamp: "Antwort stempeln", activate: "Ausgangspunkt aktivieren", connect: "Mit der Lösung verbinden", input: "Ergebnis eingeben", check: "Daten prüfen", people: "Menschen", nature: "Natur", future: "Langzeitwirkung", analyse: "Prüfen", implement: "Plan einreichen" },
  en: { setTarget: "Set destination", clue: "Clue", reveal: "Reveal clue", choose: "Choose as solution", reading: "Confirm reading", page: "Atlas page", stamp: "Stamp answer", activate: "Activate starting point", connect: "Connect to answer", input: "Enter result", check: "Check data", people: "People", nature: "Nature", future: "Long-term effect", analyse: "Review", implement: "Submit plan" },
  hu: { setTarget: "Cél beállítása", clue: "Nyom", reveal: "Nyom felfedése", choose: "Megoldásnak választom", reading: "Mérés jóváhagyása", page: "Atlaszlap", stamp: "Válasz lepecsételése", activate: "Kiindulópont aktiválása", connect: "Összekötés a válasszal", input: "Eredmény bevitele", check: "Adatok ellenőrzése", people: "Emberek", nature: "Természet", future: "Hosszú táv", analyse: "Vizsgálat", implement: "Terv beadása" },
  ro: { setTarget: "Fixează destinația", clue: "Indiciu", reveal: "Descoperă indiciul", choose: "Alege ca soluție", reading: "Confirmă măsurarea", page: "Pagină de atlas", stamp: "Ștampilează răspunsul", activate: "Activează punctul de plecare", connect: "Conectează răspunsul", input: "Introdu rezultatul", check: "Verifică datele", people: "Oameni", nature: "Natură", future: "Efect pe termen lung", analyse: "Analizează", implement: "Trimite planul" },
};

function statusTone(option: string, selected: string | null, solved: boolean, correctAnswer: string, base: string) {
  if (solved && option === correctAnswer) return "border-emerald-300 bg-emerald-500/20 text-emerald-50";
  if (selected === option) return "border-rose-300 bg-rose-500/20 text-rose-50";
  return base;
}

function MapCompass({ options, selected, solved, disabled, correctAnswer, identity, onChoose, lang }: MechanicProps) {
  const [index, setIndex] = useState(0);
  const directions = ["N", "E", "S", "W"];
  const current = options[index] ?? options[0];
  return <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
    <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border-2 border-amber-200/35 bg-black/20 shadow-[inset_0_0_30px_rgba(251,191,36,.12)]">
      <div className="relative h-32 w-32 rounded-full border border-amber-100/25">
        {directions.map((direction, point) => <span key={direction} className="absolute text-xs font-black text-amber-100/70" style={{ left: point % 2 ? (point === 1 ? "88%" : "4%") : "46%", top: point % 2 ? "44%" : (point === 0 ? "2%" : "86%") }}>{direction}</span>)}
        <span className="absolute left-1/2 top-1/2 h-11 w-1 origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-gradient-to-t from-amber-200 to-orange-400 transition-transform duration-300" style={{ transform: `translate(-50%,-100%) rotate(${index * 90}deg)` }} />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100" />
      </div>
    </div>
    <div className="flex min-w-0 flex-col justify-center gap-3">
      <div className={`min-h-20 rounded-xl border p-3 text-center font-bold ${statusTone(current, selected, solved, correctAnswer, identity.optionTone)}`}>{current}</div>
      <div className="grid grid-cols-[48px_1fr_48px] gap-2">
        <button type="button" disabled={disabled} onClick={() => setIndex((index - 1 + options.length) % options.length)} className="grid min-h-12 place-items-center rounded-xl border border-amber-100/20 bg-black/20"><ArrowLeft /></button>
        <button type="button" disabled={disabled} onClick={() => onChoose(current)} className="min-h-12 rounded-xl bg-amber-200 px-3 font-black text-slate-950">{UI[lang].setTarget}</button>
        <button type="button" disabled={disabled} onClick={() => setIndex((index + 1) % options.length)} className="grid min-h-12 place-items-center rounded-xl border border-amber-100/20 bg-black/20"><ArrowRight /></button>
      </div>
    </div>
  </div>;
}

function LandscapeDetective({ options, selected, solved, disabled, correctAnswer, identity, onChoose, lang }: MechanicProps) {
  const [revealed, setRevealed] = useState<number[]>([]);
  return <div className="grid gap-3 sm:grid-cols-2">{options.map((option, index) => {
    const open = revealed.includes(index) || solved || selected === option;
    return <div key={option} className={`relative min-h-32 rounded-xl border-2 p-3 ${statusTone(option, selected, solved, correctAnswer, identity.optionTone)}`}>
      <span className="absolute right-2 top-2 text-[10px] font-black tracking-widest opacity-45">{UI[lang].clue} {index + 1}</span>
      {!open ? <button type="button" disabled={disabled} onClick={() => setRevealed((items) => [...items, index])} className="grid min-h-24 w-full place-items-center gap-1 font-black text-orange-100"><Search /><span>{UI[lang].reveal}</span></button> : <div className="flex min-h-24 flex-col justify-between gap-3 pt-5"><p className="font-bold">{option}</p><button type="button" disabled={disabled} onClick={() => onChoose(option)} className="min-h-10 rounded-lg bg-orange-200 px-3 text-sm font-black text-stone-950">{UI[lang].choose}</button></div>}
    </div>;
  })}</div>;
}

function ClimateDial({ options, selected, solved, disabled, correctAnswer, identity, onChoose, lang }: MechanicProps) {
  const [index, setIndex] = useState(0);
  const current = options[index] ?? options[0];
  const angle = -120 + (240 * index) / Math.max(1, options.length - 1);
  return <div className="rounded-2xl border border-cyan-200/20 bg-sky-950/35 p-4">
    <div className="mx-auto mb-3 h-24 w-48 overflow-hidden rounded-t-full border-x border-t border-cyan-200/30 bg-gradient-to-t from-blue-500/20 via-cyan-300/10 to-orange-300/15">
      <div className="relative h-44 w-full"><span className="absolute bottom-0 left-1/2 h-20 w-1 origin-bottom rounded-full bg-orange-300 transition-transform" style={{ transform: `translateX(-50%) rotate(${angle}deg)` }} /><span className="absolute bottom-[-6px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-100" /></div>
    </div>
    <input aria-label={UI[lang].reading} type="range" min={0} max={Math.max(0, options.length - 1)} value={index} disabled={disabled} onChange={(event) => setIndex(Number(event.target.value))} className="w-full accent-cyan-300" />
    <div className={`mt-3 rounded-xl border p-3 text-center font-bold ${statusTone(current, selected, solved, correctAnswer, identity.optionTone)}`}>{current}</div>
    <button type="button" disabled={disabled} onClick={() => onChoose(current)} className="mt-3 min-h-12 w-full rounded-xl bg-cyan-200 px-4 font-black text-slate-950">{UI[lang].reading}</button>
  </div>;
}

function AtlasCarousel({ options, selected, solved, disabled, correctAnswer, identity, onChoose, lang }: MechanicProps) {
  const [index, setIndex] = useState(0);
  const current = options[index] ?? options[0];
  const touchStart = useRef<number | null>(null);
  function move(delta: number) { setIndex((index + delta + options.length) % options.length); }
  return <div className="mx-auto max-w-xl">
    <div onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0]?.clientX - touchStart.current; if (Math.abs(delta) > 35) move(delta > 0 ? -1 : 1); touchStart.current = null; }} className={`relative min-h-52 rounded-r-2xl border border-l-4 p-6 shadow-[10px_10px_0_rgba(99,102,241,.10)] ${statusTone(current, selected, solved, correctAnswer, identity.optionTone)}`}>
      <span className="text-xs font-black tracking-[.2em] opacity-55">{UI[lang].page} {index + 1}/{options.length}</span>
      <p className="mt-8 text-center text-xl font-black">{current}</p>
      <Stamp className="absolute bottom-4 right-4 opacity-20" size={42} />
    </div>
    <div className="mt-3 grid grid-cols-[48px_1fr_48px] gap-2"><button type="button" disabled={disabled} onClick={() => move(-1)} className="grid min-h-12 place-items-center rounded-xl border border-indigo-100/20 bg-black/20"><ArrowLeft /></button><button type="button" disabled={disabled} onClick={() => onChoose(current)} className="min-h-12 rounded-xl bg-indigo-200 px-3 font-black text-slate-950">{UI[lang].stamp}</button><button type="button" disabled={disabled} onClick={() => move(1)} className="grid min-h-12 place-items-center rounded-xl border border-indigo-100/20 bg-black/20"><ArrowRight /></button></div>
  </div>;
}

function SpaceNetwork({ options, selected, solved, disabled, correctAnswer, identity, onChoose, lang }: MechanicProps) {
  const [active, setActive] = useState(false);
  return <div className="relative py-2">
    <button type="button" disabled={disabled} onClick={() => setActive(true)} className={`mx-auto mb-5 grid min-h-20 w-40 place-items-center rounded-full border-2 font-black transition ${active ? "border-violet-200 bg-violet-300/20 text-violet-50" : "border-dashed border-violet-200/35 bg-black/20 text-violet-100"}`}><Fingerprint /><span className="text-xs">{UI[lang].activate}</span></button>
    <div className="grid gap-3 sm:grid-cols-2">{options.map((option, index) => <button key={option} type="button" disabled={disabled || !active} onClick={() => onChoose(option)} className={`relative min-h-20 rounded-full border-2 px-5 text-left font-bold transition ${statusTone(option, selected, solved, correctAnswer, identity.optionTone)} ${!active ? "opacity-35" : ""}`}><span className="mr-3 inline-grid h-8 w-8 place-items-center rounded-full border border-violet-200/30 bg-violet-300/10 text-xs">{index + 1}</span>{option}{active && <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-200/45" size={18} />}</button>)}</div>
    {active && <p className="mt-3 text-center text-xs font-bold text-violet-100/60">{UI[lang].connect}</p>}
  </div>;
}

function numericValue(value: string): string {
  const match = value.match(/-?\d[\d.,]*/)?.[0] ?? "";
  return match.replace(/[^\d-]/g, "").replace(/^(-?)0+(?=\d)/, "$1");
}

function DataTerminal({ correctAnswer, selected, solved, disabled, onChoose, lang }: MechanicProps) {
  const [input, setInput] = useState("");
  const answer = numericValue(correctAnswer);
  const unit = correctAnswer.replace(/-?\d[\d.,]*/, "").trim();
  useEffect(() => { if (selected === null && !solved) setInput(""); }, [selected, solved]);
  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  return <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
    <div className="rounded-xl border border-blue-200/25 bg-[#040d19] p-4 font-mono shadow-[inset_0_0_32px_rgba(59,130,246,.10)]"><p className="text-xs tracking-[.18em] text-blue-200/55">{UI[lang].input}</p><div className={`mt-3 min-h-20 rounded-md border px-4 py-5 text-right text-3xl font-black ${selected && !solved ? "border-rose-300 text-rose-200" : solved ? "border-emerald-300 text-emerald-200" : "border-blue-300/30 text-blue-100"}`}>{input || "0"} <span className="text-sm opacity-55">{unit}</span></div><div className="mt-4 flex items-end gap-1 opacity-40">{[30,55,42,76,62,90].map((height, index) => <span key={index} className="w-full bg-blue-300" style={{ height: `${height}px` }} />)}</div></div>
    <div className="grid grid-cols-3 gap-2">{keys.map((key) => <button key={key} type="button" disabled={disabled} onClick={() => setInput((value) => `${value}${key}`.slice(0, 8))} className={`min-h-12 border text-lg font-black ${identityButton}`}>{key}</button>)}<button type="button" disabled={disabled} onClick={() => setInput((value) => value.slice(0, -1))} className={`grid min-h-12 place-items-center border ${identityButton}`}><Delete size={19} /></button><button type="button" disabled={disabled || !input} onClick={() => onChoose(numericValue(input) === answer ? correctAnswer : `__data:${input}`)} className="col-span-3 min-h-12 rounded-md bg-blue-200 font-black text-slate-950">{UI[lang].check}</button></div>
  </div>;
}
const identityButton = "rounded-md border-blue-200/20 bg-blue-950/55 text-blue-50 active:scale-95";

function FuturePlanner({ options, selected, solved, disabled, correctAnswer, identity, onChoose, lang }: MechanicProps) {
  const [index, setIndex] = useState(0);
  const [checks, setChecks] = useState<string[]>([]);
  const current = options[index] ?? options[0];
  const lenses = ["people", "nature", "future"];
  function move(delta: number) { setIndex((index + delta + options.length) % options.length); setChecks([]); }
  return <div className="grid gap-4 sm:grid-cols-[1fr_190px]">
    <div className={`min-h-48 rounded-2xl border p-5 ${statusTone(current, selected, solved, correctAnswer, identity.optionTone)}`}><span className="text-xs font-black tracking-[.18em] text-emerald-100/55">PLAN {index + 1}/{options.length}</span><p className="mt-5 text-lg font-black leading-snug">{current}</p><div className="mt-5 grid grid-cols-3 gap-2">{lenses.map((lens) => <button key={lens} type="button" disabled={disabled} onClick={() => setChecks((items) => items.includes(lens) ? items.filter((item) => item !== lens) : [...items, lens])} className={`min-h-12 rounded-xl border px-1 text-[11px] font-black ${checks.includes(lens) ? "border-lime-200 bg-lime-300/20 text-lime-50" : "border-white/15 bg-black/15 text-white/55"}`}>{checks.includes(lens) && <Check className="mx-auto mb-1" size={14} />}{UI[lang][lens]}</button>)}</div></div>
    <div className="flex flex-col gap-2"><button type="button" disabled={disabled} onClick={() => move(-1)} className="grid min-h-12 place-items-center rounded-xl border border-emerald-100/20 bg-black/20"><ArrowLeft /></button><button type="button" disabled={disabled} onClick={() => move(1)} className="grid min-h-12 place-items-center rounded-xl border border-emerald-100/20 bg-black/20"><ArrowRight /></button><button type="button" disabled={disabled || checks.length < 3} onClick={() => onChoose(current)} className="min-h-16 rounded-xl bg-lime-200 px-3 font-black text-emerald-950 disabled:opacity-35">{UI[lang].implement}</button><button type="button" disabled={disabled} onClick={() => setChecks([])} className="grid min-h-10 place-items-center rounded-xl border border-white/10 bg-black/10 text-white/50"><RotateCcw size={16} /></button></div>
  </div>;
}

export default function GeographySkillMechanic(props: MechanicProps) {
  if (props.gameId === "karten-kompass") return <MapCompass {...props} />;
  if (props.gameId === "landschaft-detektiv") return <LandscapeDetective {...props} />;
  if (props.gameId === "klima-labor") return <ClimateDial {...props} />;
  if (props.gameId === "weltregionen-atlas") return <AtlasCarousel {...props} />;
  if (props.gameId === "mensch-raum-netz") return <SpaceNetwork {...props} />;
  if (props.gameId === "geo-daten-check") return <DataTerminal {...props} />;
  return <FuturePlanner {...props} />;
}
