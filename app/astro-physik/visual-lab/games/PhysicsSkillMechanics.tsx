"use client";

import { useEffect, useState } from "react";
import { Activity, Atom, BatteryCharging, ChartNoAxesColumn, FlaskConical, Gauge, Lightbulb, Sigma } from "lucide-react";
import type { PhysicsSkillGameId, PhysicsLevel } from "@/lib/visualLab/physicsCurriculum";
import type { PhysicsSkillLang } from "@/lib/visualLab/physicsSkillContent";

type Props = {
  gameId: PhysicsSkillGameId; lang: PhysicsSkillLang; level: PhysicsLevel; context: string;
  options: string[]; correctAnswer: string; selected: string | null; solved: boolean;
  disabled: boolean; onChoose: (option: string) => void;
};

const COPY: Record<PhysicsSkillLang, { measure: string; circuit: string; beam: string; input: string; evidence: string; solve: string }> = {
  de: { measure: "Messbereich", circuit: "Schaltung", beam: "Lichtweg", input: "Energiefluss", evidence: "Messreihe", solve: "Physikalische Lösung" },
  hu: { measure: "Mérési tartomány", circuit: "Áramkör", beam: "Fényút", input: "Energiaáramlás", evidence: "Méréssor", solve: "Fizikai megoldás" },
  ro: { measure: "Domeniu de măsurare", circuit: "Circuit", beam: "Traseul luminii", input: "Flux de energie", evidence: "Seria de măsurători", solve: "Soluție fizică" },
  en: { measure: "Measurement range", circuit: "Circuit", beam: "Light path", input: "Energy flow", evidence: "Measurement series", solve: "Physical solution" },
};

function tone(option: string, props: Props): string {
  if (props.solved && option === props.correctAnswer) return "border-emerald-300 bg-emerald-400/20 text-emerald-50";
  if (props.selected === option && option !== props.correctAnswer) return "border-rose-300 bg-rose-400/15 text-rose-100";
  return "border-white/15 bg-white/[.06] text-white/85 hover:border-cyan-300/50 hover:bg-cyan-300/10";
}

function Choice({ option, index, props, className = "" }: { option: string; index: number; props: Props; className?: string }) {
  return <button type="button" disabled={props.disabled} onClick={() => props.onChoose(option)}
    className={`min-h-12 rounded-xl border px-3 py-2 text-left text-sm font-bold transition active:scale-[.98] ${tone(option, props)} ${className}`}>
    <span className="mr-2 text-white/40">{index + 1}</span>{option}
  </button>;
}

function Choices({ props, className = "" }: { props: Props; className?: string }) {
  return <div className={`grid gap-2 sm:grid-cols-2 ${className}`}>{props.options.map((option, index) => <Choice key={option} option={option} index={index} props={props} />)}</div>;
}

function ForceLab(props: Props) {
  const [force, setForce] = useState(25 + props.level * 10);
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-950/20 p-4">
    <div className="mx-auto flex h-28 max-w-lg items-center justify-center gap-3 rounded-xl border border-orange-200/20 bg-black/25 px-4">
      <div className="h-4 flex-1 rounded-full bg-orange-300/25"><div className="h-full rounded-full bg-orange-300" style={{ width: `${force}%` }} /></div>
      <Gauge className="text-orange-200" size={38} aria-hidden="true" />
    </div>
    <label className="mt-3 flex items-center gap-3 text-xs font-bold text-orange-100/75">{t.measure}<input type="range" min="20" max="100" value={force} onChange={(event) => setForce(Number(event.target.value))} className="flex-1 accent-orange-300" /></label>
    <Choices props={props} className="mt-4" />
  </div>;
}

function CircuitWorkshop(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-yellow-300/20 bg-yellow-950/20 p-4">
    <div className="relative mx-auto mb-4 flex h-28 max-w-md items-center justify-between rounded-xl border-2 border-yellow-200/25 bg-black/25 px-8">
      <BatteryCharging className="text-yellow-200" size={36} aria-hidden="true" /><div className="absolute left-16 right-16 top-1/2 border-t-2 border-dashed border-yellow-300/40" /><Lightbulb className="relative text-yellow-100" size={38} aria-hidden="true" />
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-yellow-100/60">{t.circuit} · L{props.level}</span>
    </div><Choices props={props} />
  </div>;
}

function OpticsLaser(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-950/20 p-4">
    <div className="relative mb-4 h-32 overflow-hidden rounded-xl border border-fuchsia-200/20 bg-slate-950">
      <div className="absolute left-4 top-1/2 h-1 w-[42%] -translate-y-1/2 bg-gradient-to-r from-red-500 to-fuchsia-300 shadow-[0_0_12px_#f0abfc]" />
      <div className="absolute left-[46%] top-2 h-28 w-2 -rotate-12 rounded bg-cyan-100/50" />
      <div className="absolute left-[48%] top-1/2 h-1 w-[46%] origin-left -rotate-12 bg-gradient-to-r from-fuchsia-300 to-cyan-300" />
      <span className="absolute bottom-2 left-3 text-xs font-bold text-fuchsia-100/60">{t.beam}</span>
    </div><Choices props={props} />
  </div>;
}

function EnergyManager(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-950/20 p-4">
    <div className="mb-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-emerald-100/70">
      {["INPUT", "Δ", "OUTPUT"].map((label, index) => <div key={label} className="rounded-xl border border-emerald-200/15 bg-emerald-300/10 p-3"><div className="text-2xl">{index === 0 ? "⚡" : index === 1 ? "⇄" : "✓"}</div>{index === 0 ? t.input : label}</div>)}
    </div><Choices props={props} />
  </div>;
}

function DataAnalysis(props: Props) {
  const t = COPY[props.lang];
  const bars = [34, 52, 42 + props.level * 8, 68];
  return <div className="mt-4 rounded-2xl border border-sky-300/20 bg-sky-950/20 p-4">
    <div className="mb-4 flex h-36 items-end gap-3 rounded-xl border border-sky-200/15 bg-black/25 p-4">{bars.map((height, index) => <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-sky-600 to-cyan-300" style={{ height: `${Math.min(94, height)}%` }} />)}<ChartNoAxesColumn className="self-start text-sky-200" aria-hidden="true" /></div>
    <p className="mb-3 text-xs font-bold text-sky-100/65">{t.evidence}: {props.context}</p><Choices props={props} />
  </div>;
}

function ExperimentCheck(props: Props) {
  const t = COPY[props.lang];
  const [step, setStep] = useState(1);
  useEffect(() => setStep(1), [props.context]);
  return <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-950/20 p-4">
    <div className="mb-4 flex items-center gap-3 rounded-xl border border-cyan-200/20 bg-cyan-300/10 p-3"><FlaskConical className="text-cyan-200" aria-hidden="true" /><span className="flex-1 text-sm font-bold">{props.context}</span>{[1,2,3].map((n)=><button key={n} type="button" onClick={()=>setStep(n)} className={`h-8 w-8 rounded-full border text-xs font-black ${n<=step?"border-cyan-200 bg-cyan-300/25":"border-white/10 text-white/30"}`}>{n}</button>)}</div>
    <p className="mb-3 text-xs font-bold text-cyan-100/65">{t.evidence} · {step}/3</p><Choices props={props} />
  </div>;
}

function FormulaDetective(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-violet-300/20 bg-violet-950/20 p-4">
    <div className="mb-4 flex min-h-24 items-center justify-center gap-4 rounded-xl border border-violet-200/20 bg-black/25"><Sigma size={46} className="text-violet-200" aria-hidden="true" /><div><div className="text-xs font-bold uppercase tracking-wider text-violet-100/50">{t.solve}</div><div className="mt-1 text-lg font-black text-violet-50">{props.context}</div></div></div>
    <Choices props={props} />
  </div>;
}

export default function PhysicsSkillMechanic(props: Props) {
  switch (props.gameId) {
    case "kraft-labor": return <ForceLab {...props} />;
    case "schaltkreis-werkstatt": return <CircuitWorkshop {...props} />;
    case "optik-laser": return <OpticsLaser {...props} />;
    case "energie-manager": return <EnergyManager {...props} />;
    case "messdaten-analyse": return <DataAnalysis {...props} />;
    case "experiment-check": return <ExperimentCheck {...props} />;
    case "formel-detektiv": return <FormulaDetective {...props} />;
    default: return <Atom className="mx-auto mt-8 text-cyan-300" aria-hidden="true" />;
  }
}
