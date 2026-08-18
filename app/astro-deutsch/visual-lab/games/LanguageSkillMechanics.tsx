"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Fingerprint, Link2, ScanLine, Search, Stamp, Wrench } from "lucide-react";
import type { LanguageSkillGameId, LanguageSkillLang } from "@/lib/visualLab/languageSkillContent";
import type { LanguageGameIdentity } from "./LanguageGameIdentity";

interface MechanicProps {
  gameId: LanguageSkillGameId;
  lang: LanguageSkillLang;
  context: string;
  options: string[];
  correctAnswer: string;
  selected: string | null;
  solved: boolean;
  disabled: boolean;
  identity: LanguageGameIdentity;
  onChoose: (option: string) => void;
}

const UI: Record<LanguageSkillLang, Record<string, string>> = {
  de: { evidence: "Beweis sichern", unlocked: "Beweis gesichert", solve: "Fall lösen", scan: "Text scannen", classify: "Analyse bestätigen", broken: "Beschädigter Text", patch: "Reparatur anwenden", activate: "Wortkern aktivieren", connect: "Verbindung herstellen", brief: "Schreibauftrag", clarity: "Klarheit", structure: "Aufbau", submit: "Entwurf abgeben", focus: "Lupe ausrichten", lock: "Deutung festhalten" },
  en: { evidence: "Secure evidence", unlocked: "Evidence secured", solve: "Solve case", scan: "Scan text", classify: "Confirm analysis", broken: "Damaged text", patch: "Apply repair", activate: "Activate word core", connect: "Create connection", brief: "Writing brief", clarity: "Clarity", structure: "Structure", submit: "Submit draft", focus: "Focus lens", lock: "Lock interpretation" },
  hu: { evidence: "Bizonyíték rögzítése", unlocked: "Bizonyíték rögzítve", solve: "Ügy megoldása", scan: "Szöveg beolvasása", classify: "Elemzés jóváhagyása", broken: "Sérült szöveg", patch: "Javítás alkalmazása", activate: "Szómag aktiválása", connect: "Kapcsolat létrehozása", brief: "Írásfeladat", clarity: "Érthetőség", structure: "Szerkezet", submit: "Vázlat beadása", focus: "Nagyító beállítása", lock: "Értelmezés rögzítése" },
  ro: { evidence: "Păstrează dovada", unlocked: "Dovadă păstrată", solve: "Rezolvă cazul", scan: "Scanează textul", classify: "Confirmă analiza", broken: "Text deteriorat", patch: "Aplică reparația", activate: "Activează nucleul", connect: "Creează legătura", brief: "Sarcină de scriere", clarity: "Claritate", structure: "Structură", submit: "Trimite schița", focus: "Reglează lupa", lock: "Fixează interpretarea" },
};

function tone(option: string, selected: string | null, solved: boolean, correctAnswer: string, base: string) {
  if (solved && option === correctAnswer) return "border-emerald-300 bg-emerald-500/20 text-emerald-50";
  if (selected === option) return "border-rose-300 bg-rose-500/20 text-rose-50";
  return base;
}

function ReadingDetective(props: MechanicProps) {
  const { context, options, selected, solved, disabled, correctAnswer, onChoose, lang } = props;
  const [evidence, setEvidence] = useState(false);
  return <div className="grid gap-4 sm:grid-cols-[1fr_1.1fr]">
    <div className="relative min-h-44 rotate-[-1deg] rounded-lg border border-amber-200/30 bg-[#f4e7c5]/10 p-5 shadow-[7px_7px_0_rgba(0,0,0,.18)]"><span className="absolute right-3 top-3 text-[10px] font-black tracking-widest text-amber-100/45">A-01</span><p className={`leading-relaxed transition ${evidence ? "text-amber-50" : "select-none blur-[3px] text-amber-50/45"}`}>{context}</p><button type="button" disabled={disabled || evidence} onClick={() => setEvidence(true)} className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-amber-200/25 bg-black/20 px-3 font-black text-amber-100"><Search size={18} />{evidence ? UI[lang].unlocked : UI[lang].evidence}</button></div>
    <div className={`grid gap-2 transition ${evidence ? "opacity-100" : "pointer-events-none opacity-25"}`}>{options.map((option, index) => <button key={option} type="button" disabled={disabled || !evidence} onClick={() => onChoose(option)} className={`min-h-14 rounded-lg border-2 px-4 py-3 text-left font-bold ${tone(option, selected, solved, correctAnswer, "border-amber-100/20 bg-black/25 text-amber-50")}`}><span className="mr-2 text-xs opacity-45">{String(index + 1).padStart(2, "0")}</span>{option}</button>)}<span className="text-center text-xs font-bold text-amber-100/55">{UI[lang].solve}</span></div>
  </div>;
}

function GrammarScanner(props: MechanicProps) {
  const { context, options, selected, solved, disabled, correctAnswer, onChoose, lang } = props;
  const [scanned, setScanned] = useState(false);
  const [index, setIndex] = useState(0);
  const current = options[index] ?? options[0];
  return <div className="rounded-2xl border border-cyan-200/20 bg-sky-950/45 p-4">
    <div className="relative overflow-hidden rounded-xl border border-cyan-200/25 bg-black/30 p-5 font-mono text-cyan-50"><p className="leading-relaxed">{context}</p>{scanned && <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px animate-pulse bg-cyan-200 shadow-[0_0_18px_4px_rgba(34,211,238,.7)]" />}</div>
    {!scanned ? <button type="button" disabled={disabled} onClick={() => setScanned(true)} className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-200 font-black text-slate-950"><ScanLine />{UI[lang].scan}</button> : <><input aria-label={UI[lang].classify} type="range" min={0} max={Math.max(0, options.length - 1)} value={index} disabled={disabled} onChange={(event) => setIndex(Number(event.target.value))} className="mt-5 w-full accent-cyan-300" /><div className={`mt-3 rounded-xl border-2 p-4 text-center text-lg font-black ${tone(current, selected, solved, correctAnswer, "border-cyan-200/25 bg-cyan-300/[.07] text-cyan-50")}`}>{current}</div><button type="button" disabled={disabled} onClick={() => onChoose(current)} className="mt-3 min-h-12 w-full rounded-xl bg-cyan-200 font-black text-slate-950">{UI[lang].classify}</button></>}
  </div>;
}

function TextRescuer(props: MechanicProps) {
  const { context, options, selected, solved, disabled, correctAnswer, onChoose, lang } = props;
  const [index, setIndex] = useState(0);
  const current = options[index] ?? options[0];
  const move = (delta: number) => setIndex((index + delta + options.length) % options.length);
  return <div className="grid gap-4 sm:grid-cols-[.9fr_1.1fr]"><div className="rounded-xl border-2 border-dashed border-rose-200/25 bg-black/20 p-4"><span className="flex items-center gap-2 text-xs font-black tracking-widest text-rose-100/55"><Wrench size={15} />{UI[lang].broken}</span><p className="mt-4 leading-relaxed text-rose-50/80 line-through decoration-rose-300/50 decoration-2">{context}</p></div><div><div className={`min-h-32 rounded-xl border-2 p-4 ${tone(current, selected, solved, correctAnswer, "border-rose-200/25 bg-rose-300/[.07] text-rose-50")}`}><span className="text-xs font-black text-rose-100/45">PATCH {index + 1}/{options.length}</span><p className="mt-4 font-bold leading-relaxed">{current}</p></div><div className="mt-3 grid grid-cols-[48px_1fr_48px] gap-2"><button type="button" disabled={disabled} onClick={() => move(-1)} className="grid min-h-12 place-items-center rounded-xl border border-rose-100/20 bg-black/20"><ArrowLeft /></button><button type="button" disabled={disabled} onClick={() => onChoose(current)} className="min-h-12 rounded-xl bg-rose-200 px-2 font-black text-rose-950">{UI[lang].patch}</button><button type="button" disabled={disabled} onClick={() => move(1)} className="grid min-h-12 place-items-center rounded-xl border border-rose-100/20 bg-black/20"><ArrowRight /></button></div></div></div>;
}

function WordNetwork(props: MechanicProps) {
  const { context, options, selected, solved, disabled, correctAnswer, onChoose, lang } = props;
  const [active, setActive] = useState(false);
  return <div className="relative py-2"><button type="button" disabled={disabled} onClick={() => setActive(true)} className={`mx-auto mb-5 grid min-h-24 w-48 place-items-center rounded-full border-2 px-4 font-black ${active ? "border-violet-200 bg-violet-300/20 text-violet-50" : "border-dashed border-violet-200/35 bg-black/20 text-violet-100"}`}><Fingerprint /><span>{context}</span><small>{UI[lang].activate}</small></button><div className="grid gap-3 sm:grid-cols-3">{options.map((option) => <button key={option} type="button" disabled={disabled || !active} onClick={() => onChoose(option)} className={`relative min-h-24 rounded-full border-2 px-4 font-bold ${tone(option, selected, solved, correctAnswer, "border-violet-100/20 bg-violet-950/55 text-violet-50")} ${active ? "" : "opacity-30"}`}>{option}{active && <Link2 className="absolute right-3 top-3 text-violet-200/40" size={16} />}</button>)}</div>{active && <p className="mt-3 text-center text-xs font-bold text-violet-100/55">{UI[lang].connect}</p>}</div>;
}

function WritingWorkshop(props: MechanicProps) {
  const { context, options, selected, solved, disabled, correctAnswer, onChoose, lang } = props;
  const [index, setIndex] = useState(0);
  const [checks, setChecks] = useState<string[]>([]);
  const current = options[index] ?? options[0];
  const move = (delta: number) => { setIndex((index + delta + options.length) % options.length); setChecks([]); };
  return <div className="grid gap-4 sm:grid-cols-[1fr_180px]"><div className={`min-h-48 rounded-xl border p-5 ${tone(current, selected, solved, correctAnswer, "border-emerald-200/25 bg-[#f5f0df]/[.07] text-emerald-50")}`}><span className="text-xs font-black tracking-widest text-emerald-100/45">{UI[lang].brief}: {context}</span><p className="mt-6 text-lg font-bold leading-relaxed">{current}</p><div className="mt-5 grid grid-cols-2 gap-2">{["clarity", "structure"].map((criterion) => <button key={criterion} type="button" disabled={disabled} onClick={() => setChecks((items) => items.includes(criterion) ? items.filter((item) => item !== criterion) : [...items, criterion])} className={`min-h-12 rounded-lg border text-xs font-black ${checks.includes(criterion) ? "border-lime-200 bg-lime-300/20 text-lime-50" : "border-white/15 bg-black/15 text-white/50"}`}>{checks.includes(criterion) && <Check className="mx-auto" size={14} />}{UI[lang][criterion]}</button>)}</div></div><div className="flex flex-col gap-2"><button type="button" disabled={disabled} onClick={() => move(-1)} className="grid min-h-12 place-items-center rounded-xl border border-emerald-100/20 bg-black/20"><ArrowLeft /></button><button type="button" disabled={disabled} onClick={() => move(1)} className="grid min-h-12 place-items-center rounded-xl border border-emerald-100/20 bg-black/20"><ArrowRight /></button><button type="button" disabled={disabled || checks.length < 2} onClick={() => onChoose(current)} className="min-h-16 rounded-xl bg-emerald-200 px-3 font-black text-emerald-950 disabled:opacity-30">{UI[lang].submit}</button></div></div>;
}

function LiteratureLens(props: MechanicProps) {
  const { context, options, selected, solved, disabled, correctAnswer, onChoose, lang } = props;
  const [index, setIndex] = useState(0);
  const current = options[index] ?? options[0];
  const touchStart = useRef<number | null>(null);
  return <div className="relative rounded-2xl border border-indigo-200/20 bg-indigo-950/35 p-4"><blockquote className="rounded-xl border-l-4 border-indigo-200/35 bg-black/20 p-4 italic leading-relaxed text-indigo-50">{context}</blockquote><div onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0]?.clientX - touchStart.current; if (Math.abs(delta) > 30) setIndex((index + (delta > 0 ? -1 : 1) + options.length) % options.length); touchStart.current = null; }} className={`relative mx-auto mt-5 grid min-h-36 w-full max-w-md place-items-center rounded-[50%] border-2 p-8 text-center text-lg font-black shadow-[inset_0_0_35px_rgba(165,180,252,.12)] ${tone(current, selected, solved, correctAnswer, "border-indigo-200/30 bg-indigo-300/[.07] text-indigo-50")}`}><Search className="absolute right-6 top-5 text-indigo-200/30" size={35} />{current}</div><input aria-label={UI[lang].focus} type="range" min={0} max={Math.max(0, options.length - 1)} value={index} disabled={disabled} onChange={(event) => setIndex(Number(event.target.value))} className="mt-4 w-full accent-indigo-300" /><button type="button" disabled={disabled} onClick={() => onChoose(current)} className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-200 font-black text-indigo-950"><Stamp size={18} />{UI[lang].lock}</button></div>;
}

export default function LanguageSkillMechanic(props: MechanicProps) {
  if (props.gameId === "lese-detektiv") return <ReadingDetective {...props} />;
  if (props.gameId === "grammatik-scanner") return <GrammarScanner {...props} />;
  if (props.gameId === "text-retter") return <TextRescuer {...props} />;
  if (props.gameId === "wort-netz") return <WordNetwork {...props} />;
  if (props.gameId === "schreibwerkstatt") return <WritingWorkshop {...props} />;
  return <LiteratureLens {...props} />;
}
