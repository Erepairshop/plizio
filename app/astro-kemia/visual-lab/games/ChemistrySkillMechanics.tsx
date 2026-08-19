"use client";

import { useEffect, useState } from "react";
import { Atom, ChartNoAxesColumn, FlaskConical, Network, Search, ShieldCheck } from "lucide-react";
import type { ChemistrySkillGameId, ChemistryLevel } from "@/lib/visualLab/chemistryCurriculum";
import type { ChemistrySkillLang } from "@/lib/visualLab/chemistrySkillContent";

type Props = {
  gameId: ChemistrySkillGameId; lang: ChemistrySkillLang; level: ChemistryLevel; context: string;
  options: string[]; correctAnswer: string; selected: string | null; solved: boolean;
  disabled: boolean; onChoose: (option: string) => void;
};

const COPY: Record<ChemistrySkillLang, { scan: string; periodic: string; reaction: string; bond: string; ph: string; safety: string; solve: string }> = {
  de: { scan: "Stoffprobe", periodic: "Periodensystem", reaction: "Reaktionsweg", bond: "Teilchenmodell", ph: "pH-Skala", safety: "Laborprotokoll", solve: "Chemische Spur" },
  hu: { scan: "Anyagminta", periodic: "Periódusos rendszer", reaction: "Reakcióút", bond: "Részecskemodell", ph: "pH-skála", safety: "Laborjegyzőkönyv", solve: "Kémiai nyom" },
  ro: { scan: "Probă de substanță", periodic: "Tabel periodic", reaction: "Traseul reacției", bond: "Model de particule", ph: "Scara pH", safety: "Protocol de laborator", solve: "Indiciu chimic" },
  en: { scan: "Matter sample", periodic: "Periodic table", reaction: "Reaction path", bond: "Particle model", ph: "pH scale", safety: "Lab protocol", solve: "Chemical clue" },
};

function tone(option: string, props: Props): string {
  if (props.solved && option === props.correctAnswer) return "border-emerald-300 bg-emerald-400/20 text-emerald-50";
  if (props.selected === option && option !== props.correctAnswer) return "border-rose-300 bg-rose-400/15 text-rose-100";
  return "border-white/15 bg-white/[.06] text-white/85 hover:border-orange-300/50 hover:bg-orange-300/10";
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

function MatterScanner(props: Props) {
  const [scan, setScan] = useState(28 + props.level * 9);
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-950/20 p-4">
    <div className="mx-auto flex h-28 max-w-lg items-center gap-4 rounded-xl border border-orange-200/20 bg-black/25 px-4">
      <FlaskConical className="shrink-0 text-orange-200" size={42} aria-hidden="true" />
      <div className="flex-1"><p className="mb-2 text-xs font-black uppercase tracking-wider text-orange-100/60">{t.scan}</p>
        <div className="h-4 rounded-full bg-orange-300/20"><div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-rose-400" style={{ width: `${scan}%` }} /></div>
      </div><Search className="text-amber-200" aria-hidden="true" />
    </div>
    <input aria-label={t.scan} type="range" min="15" max="100" value={scan} onChange={(event) => setScan(Number(event.target.value))} className="mt-3 w-full accent-orange-300" />
    <Choices props={props} className="mt-4" />
  </div>;
}

function ElementSorter(props: Props) {
  const t = COPY[props.lang];
  const cells = ["H", "C", "N", "O", "Na", "Cl", "Fe", "?"];
  return <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-950/20 p-4">
    <div className="mb-4 rounded-xl border border-amber-200/15 bg-black/25 p-3">
      <p className="mb-2 text-xs font-black uppercase tracking-wider text-amber-100/60">{t.periodic} · L{props.level}</p>
      <div className="grid grid-cols-4 gap-2">{cells.map((cell, index) => <div key={cell} className={`grid h-11 place-items-center rounded-lg border font-black ${index === 7 ? "border-amber-300 bg-amber-300/20 text-amber-100" : "border-white/10 bg-white/5 text-white/70"}`}>{cell}</div>)}</div>
    </div><Choices props={props} />
  </div>;
}

function ReactionPuzzle(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-fuchsia-300/20 bg-fuchsia-950/20 p-4">
    <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl border border-fuchsia-200/20 bg-black/25 p-3 text-center">
      <div className="rounded-lg bg-cyan-400/10 p-3 text-sm font-black">EDUKT</div><div className="text-2xl text-fuchsia-200">→</div><div className="rounded-lg bg-orange-400/10 p-3 text-sm font-black">?</div>
      <p className="col-span-3 text-xs font-bold text-fuchsia-100/55">{t.reaction}</p>
    </div><Choices props={props} />
  </div>;
}

function BondLab(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-950/20 p-4">
    <div className="relative mb-4 flex h-28 items-center justify-center rounded-xl border border-emerald-200/15 bg-black/25">
      <span className="z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-cyan-200 bg-cyan-500/25 font-black">A</span>
      <span className="h-1 w-16 bg-gradient-to-r from-cyan-300 to-emerald-300" />
      <span className="z-10 grid h-14 w-14 place-items-center rounded-full border-2 border-emerald-200 bg-emerald-500/25 font-black">B</span>
      <Network className="absolute right-3 top-3 text-emerald-200/60" aria-hidden="true" />
      <span className="absolute bottom-2 text-xs font-bold text-emerald-100/55">{t.bond}</span>
    </div><Choices props={props} />
  </div>;
}

function PhAnalysis(props: Props) {
  const t = COPY[props.lang];
  const [value, setValue] = useState(7);
  return <div className="mt-4 rounded-2xl border border-sky-300/20 bg-sky-950/20 p-4">
    <div className="mb-3 rounded-xl border border-sky-200/15 bg-black/25 p-4">
      <div className="mb-2 flex justify-between text-xs font-black"><span>0</span><span>{t.ph}: {value}</span><span>14</span></div>
      <div className="h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-300 to-violet-600" />
      <input aria-label={t.ph} type="range" min="0" max="14" value={value} onChange={(event) => setValue(Number(event.target.value))} className="mt-2 w-full accent-sky-300" />
      <ChartNoAxesColumn className="mx-auto mt-1 text-sky-200/60" aria-hidden="true" />
    </div><Choices props={props} />
  </div>;
}

function SafetyCheck(props: Props) {
  const t = COPY[props.lang];
  const [step, setStep] = useState(1);
  useEffect(() => setStep(1), [props.context]);
  return <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-950/20 p-4">
    <div className="mb-4 flex items-center gap-3 rounded-xl border border-cyan-200/20 bg-cyan-300/10 p-3">
      <ShieldCheck className="shrink-0 text-cyan-200" aria-hidden="true" /><span className="min-w-0 flex-1 text-sm font-bold">{t.safety}</span>
      {[1, 2, 3].map((number) => <button key={number} type="button" onClick={() => setStep(number)} className={`h-9 w-9 rounded-full border text-xs font-black ${number <= step ? "border-cyan-200 bg-cyan-300/25" : "border-white/10 text-white/30"}`}>{number}</button>)}
    </div><p className="mb-3 text-xs font-bold text-cyan-100/60">{props.context} · {step}/3</p><Choices props={props} />
  </div>;
}

function ChemistryDetective(props: Props) {
  const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-violet-300/20 bg-violet-950/20 p-4">
    <div className="mb-4 flex min-h-24 items-center justify-center gap-4 rounded-xl border border-violet-200/20 bg-black/25">
      <Atom size={46} className="text-violet-200" aria-hidden="true" /><div><div className="text-xs font-bold uppercase tracking-wider text-violet-100/50">{t.solve}</div><div className="mt-1 text-lg font-black text-violet-50">{props.context}</div></div>
    </div><Choices props={props} />
  </div>;
}

export default function ChemistrySkillMechanic(props: Props) {
  switch (props.gameId) {
    case "stoff-scanner": return <MatterScanner {...props} />;
    case "element-sortierer": return <ElementSorter {...props} />;
    case "reaktions-puzzle": return <ReactionPuzzle {...props} />;
    case "bindungs-labor": return <BondLab {...props} />;
    case "ph-analyse": return <PhAnalysis {...props} />;
    case "sicherheits-check": return <SafetyCheck {...props} />;
    case "chemie-detektiv": return <ChemistryDetective {...props} />;
    default: return <FlaskConical className="mx-auto mt-8 text-orange-300" aria-hidden="true" />;
  }
}
