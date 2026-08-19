"use client";

import { useEffect, useState } from "react";
import { Activity, Beaker, Binoculars, Dna, Focus, HeartPulse, Network, ScanSearch } from "lucide-react";
import type { BiologySkillGameId, BiologyLevel } from "@/lib/visualLab/biologyCurriculum";
import type { BiologySkillLang } from "@/lib/visualLab/biologySkillContent";

type Props = {
  gameId: BiologySkillGameId;
  lang: BiologySkillLang;
  level: BiologyLevel;
  context: string;
  options: string[];
  correctAnswer: string;
  selected: string | null;
  solved: boolean;
  disabled: boolean;
  onChoose: (option: string) => void;
};

const COPY: Record<BiologySkillLang, { sample: string; reveal: string; evidence: string; target: string; choose: string }> = {
  de: { sample: "Probe", reveal: "Spur untersuchen", evidence: "Beobachtung", target: "Zielstruktur", choose: "Entscheidung treffen" },
  hu: { sample: "Minta", reveal: "Nyom vizsgálata", evidence: "Megfigyelés", target: "Célszerkezet", choose: "Döntés" },
  ro: { sample: "Probă", reveal: "Analizează indiciul", evidence: "Observație", target: "Structură țintă", choose: "Alege decizia" },
  en: { sample: "Sample", reveal: "Inspect clue", evidence: "Observation", target: "Target structure", choose: "Make a decision" },
};

function optionTone(option: string, selected: string | null, correct: string, solved: boolean): string {
  if (solved && option === correct) return "border-emerald-300 bg-emerald-400/20 text-emerald-50";
  if (selected === option && option !== correct) return "border-rose-300 bg-rose-400/15 text-rose-100";
  return "border-white/15 bg-white/[.06] text-white/85 hover:border-lime-300/50 hover:bg-lime-300/10";
}

function ChoiceButton({ option, index, props, className = "" }: { option: string; index: number; props: Props; className?: string }) {
  return (
    <button type="button" disabled={props.disabled} onClick={() => props.onChoose(option)}
      className={`min-h-12 rounded-xl border px-3 py-2 text-left text-sm font-bold transition active:scale-[.98] disabled:cursor-default ${optionTone(option, props.selected, props.correctAnswer, props.solved)} ${className}`}>
      <span className="mr-2 text-white/40">{index + 1}</span>{option}
    </button>
  );
}

function MicroScanner(props: Props) {
  const t = COPY[props.lang];
  const [focus, setFocus] = useState(30 + props.level * 10);
  return (
    <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-950/25 p-4">
      <div className="mx-auto grid h-40 max-w-sm place-items-center rounded-[50%] border-4 border-cyan-200/25 bg-[radial-gradient(circle,#67e8f955_0_8%,#164e6366_9_35%,#020617_70%)] shadow-[0_0_35px_#22d3ee22_inset]">
        <ScanSearch size={52} className="text-cyan-100" style={{ opacity: Math.min(1, focus / 70) }} aria-hidden="true" />
      </div>
      <label className="mt-3 flex items-center gap-3 text-xs font-bold text-cyan-100/75">
        <Focus size={17} aria-hidden="true" /> {t.target}
        <input aria-label={t.target} type="range" min="20" max="100" value={focus} onChange={(event) => setFocus(Number(event.target.value))} className="min-w-0 flex-1 accent-cyan-300" />
      </label>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">{props.options.map((option, index) => <ChoiceButton key={option} option={option} index={index} props={props} />)}</div>
    </div>
  );
}

function SortingStation(props: Props) {
  const t = COPY[props.lang];
  return (
    <div className="mt-4 rounded-2xl border border-violet-300/20 bg-violet-950/20 p-4">
      <div className="mx-auto mb-4 flex min-h-20 max-w-md items-center justify-center rounded-xl border border-dashed border-violet-200/35 bg-black/25 px-4 text-center font-black text-violet-100">
        <Beaker className="mr-3 shrink-0" aria-hidden="true" /> {t.sample}: {props.context}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">{props.options.map((option, index) => <ChoiceButton key={option} option={option} index={index} props={props} className="border-b-4" />)}</div>
    </div>
  );
}

function ProcessPuzzle(props: Props) {
  return (
    <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-950/20 p-4">
      <div className="mb-4 flex items-center justify-center gap-1.5" aria-hidden="true">
        {Array.from({ length: Math.min(5, props.level + 2) }, (_, index) => (
          <div key={index} className={`h-3 flex-1 rounded-full ${index === props.level - 1 ? "bg-amber-300" : "bg-amber-100/15"}`} />
        ))}
      </div>
      <div className="grid gap-2">{props.options.map((option, index) => (
        <div key={option} className="flex items-stretch gap-2">
          <span className="grid w-9 shrink-0 place-items-center rounded-lg border border-amber-200/20 bg-amber-300/10 font-black text-amber-200">{index + 1}</span>
          <ChoiceButton option={option} index={index} props={props} className="flex-1" />
        </div>
      ))}</div>
    </div>
  );
}

function SystemNetwork(props: Props) {
  return (
    <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-950/20 p-4">
      <div className="relative mx-auto grid min-h-[260px] max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="pointer-events-none absolute inset-8 rounded-full border border-dashed border-emerald-300/25" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-emerald-200/30 bg-emerald-500/20">
          <Network className="text-emerald-100" aria-hidden="true" />
        </div>
        {props.options.map((option, index) => <ChoiceButton key={option} option={option} index={index} props={props} className={`relative z-10 ${index % 2 ? "self-end" : "self-start"}`} />)}
      </div>
    </div>
  );
}

function HabitatDetective(props: Props) {
  const t = COPY[props.lang];
  const [revealed, setRevealed] = useState(1);
  useEffect(() => setRevealed(1), [props.context]);
  return (
    <div className="mt-4 rounded-2xl border border-lime-300/20 bg-lime-950/20 p-4">
      <div className="rounded-[2rem] border-4 border-lime-100/15 bg-[linear-gradient(135deg,#14532d55,#0f172acc)] p-5 text-center">
        <Binoculars size={44} className="mx-auto text-lime-200" aria-hidden="true" />
        <p className="mt-2 font-black text-lime-100">{props.context}</p>
        <div className="mt-3 flex justify-center gap-2">
          {[1, 2, 3].map((clue) => <button key={clue} type="button" onClick={() => setRevealed(Math.max(revealed, clue))} className={`h-9 w-9 rounded-full border text-xs font-black ${clue <= revealed ? "border-lime-200 bg-lime-300/25 text-lime-50" : "border-white/10 bg-black/20 text-white/35"}`}>{clue}</button>)}
        </div>
        <p className="mt-2 text-xs text-lime-100/65">{t.reveal} · {revealed}/3</p>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">{props.options.map((option, index) => <ChoiceButton key={option} option={option} index={index} props={props} />)}</div>
    </div>
  );
}

function ResearchCheck(props: Props) {
  const t = COPY[props.lang];
  return (
    <div className="mt-4 rounded-2xl border border-sky-300/20 bg-sky-950/20 p-4">
      <div className="mb-4 flex items-center gap-3 rounded-xl border border-sky-200/20 bg-sky-300/10 p-3 text-sm text-sky-50">
        <Activity className="shrink-0" aria-hidden="true" />
        <span><strong>{t.evidence}:</strong> {props.context}</span>
      </div>
      <div className="space-y-2">{props.options.map((option, index) => <ChoiceButton key={option} option={option} index={index} props={props} className="w-full" />)}</div>
    </div>
  );
}

function HealthMission(props: Props) {
  const t = COPY[props.lang];
  return (
    <div className="mt-4 rounded-2xl border border-rose-300/20 bg-rose-950/20 p-4">
      <div className="mb-4 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-rose-100/75">
        {["⚖", "♥", "✓"].map((icon, index) => <div key={icon} className="rounded-xl border border-rose-200/15 bg-rose-300/10 p-2"><div className="text-xl">{icon}</div>{index === 0 ? props.context : index === 1 ? `L${props.level}` : t.choose}</div>)}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">{props.options.map((option, index) => <ChoiceButton key={option} option={option} index={index} props={props} />)}</div>
      <HeartPulse className="mx-auto mt-4 text-rose-300/70" aria-hidden="true" />
    </div>
  );
}

export default function BiologySkillMechanic(props: Props) {
  switch (props.gameId) {
    case "mikro-scanner": return <MicroScanner {...props} />;
    case "bio-sortierstation": return <SortingStation {...props} />;
    case "prozess-puzzle": return <ProcessPuzzle {...props} />;
    case "system-netz": return <SystemNetwork {...props} />;
    case "lebensraum-detektiv": return <HabitatDetective {...props} />;
    case "forschungs-check": return <ResearchCheck {...props} />;
    case "gesundheits-mission": return <HealthMission {...props} />;
    default: return <Dna className="mx-auto mt-8 text-lime-300" aria-hidden="true" />;
  }
}
