"use client";

import { useEffect, useState } from "react";
import { Archive, BookOpenCheck, GitBranch, Landmark, ScrollText, Search, TimerReset } from "lucide-react";
import type { HistorySkillGameId, HistoryLevel } from "@/lib/visualLab/historyCurriculum";
import type { HistorySkillLang } from "@/lib/visualLab/historySkillContent";

type Props = {
  gameId: HistorySkillGameId; lang: HistorySkillLang; level: HistoryLevel; context: string;
  options: string[]; correctAnswer: string; selected: string | null; solved: boolean;
  disabled: boolean; onChoose: (option: string) => void;
};

const COPY: Record<HistorySkillLang, { archive: string; era: string; cause: string; source: string; timeline: string; council: string; clue: string }> = {
  de: { archive: "Chronik-Archiv", era: "Epochenregal", cause: "Ursache und Wirkung", source: "Quellenprüfung", timeline: "Zeitstrahl", council: "Historischer Rat", clue: "Spur der Vergangenheit" },
  hu: { archive: "Krónikaarchívum", era: "Korszakpolc", cause: "Ok és következmény", source: "Forrásvizsgálat", timeline: "Idővonal", council: "Történelmi tanács", clue: "A múlt nyoma" },
  ro: { archive: "Arhiva cronicii", era: "Raftul epocilor", cause: "Cauză și efect", source: "Verificarea sursei", timeline: "Cronologie", council: "Consiliu istoric", clue: "Urma trecutului" },
  en: { archive: "Chronicle archive", era: "Era shelf", cause: "Cause and effect", source: "Source check", timeline: "Timeline", council: "History council", clue: "Clue from the past" },
};

function tone(option: string, props: Props): string {
  if (props.solved && option === props.correctAnswer) return "border-emerald-300 bg-emerald-400/20 text-emerald-50";
  if (props.selected === option && option !== props.correctAnswer) return "border-rose-300 bg-rose-400/15 text-rose-100";
  return "border-white/15 bg-white/[.06] text-white/85 hover:border-amber-300/50 hover:bg-amber-300/10";
}
function Choice({ option, index, props, className = "" }: { option: string; index: number; props: Props; className?: string }) {
  return <button type="button" disabled={props.disabled} onClick={() => props.onChoose(option)} className={`min-h-12 rounded-xl border px-3 py-2 text-left text-sm font-bold transition active:scale-[.98] ${tone(option, props)} ${className}`}><span className="mr-2 text-white/40">{index + 1}</span>{option}</button>;
}
function Choices({ props, className = "" }: { props: Props; className?: string }) {
  return <div className={`grid gap-2 sm:grid-cols-2 ${className}`}>{props.options.map((option, index) => <Choice key={`${index}:${option}`} option={option} index={index} props={props} />)}</div>;
}
function ChronicleScanner(props: Props) {
  const [scan, setScan] = useState(30 + props.level * 8); const t = COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-950/20 p-4"><div className="mx-auto flex h-28 max-w-lg items-center gap-4 rounded-xl border border-amber-200/20 bg-black/25 px-4"><Archive className="shrink-0 text-amber-200" size={42} aria-hidden="true"/><div className="flex-1"><p className="mb-2 text-xs font-black uppercase tracking-wider text-amber-100/60">{t.archive}</p><div className="h-3 rounded-full bg-amber-300/15"><div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-orange-500" style={{width:`${scan}%`}}/></div></div><Search className="text-amber-200" aria-hidden="true"/></div><input aria-label={t.archive} type="range" min="15" max="100" value={scan} onChange={event=>setScan(Number(event.target.value))} className="mt-3 w-full accent-amber-300"/><Choices props={props} className="mt-4"/></div>;
}
function EraSorter(props: Props) { const t=COPY[props.lang]; const eras=["Őskor","Ókor","Középkor","Újkor"];
  return <div className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-950/20 p-4"><p className="mb-2 text-xs font-black uppercase tracking-wider text-orange-100/60">{t.era} · L{props.level}</p><div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">{eras.map((era,index)=><div key={era} className={`grid min-h-14 place-items-center rounded-lg border px-2 text-center text-xs font-black ${index===Math.min(3,props.level-1)?"border-orange-300 bg-orange-300/20":"border-white/10 bg-white/5 text-white/60"}`}>{era}</div>)}</div><Choices props={props}/></div>;
}
function CauseEffect(props: Props) { const t=COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-rose-300/20 bg-rose-950/20 p-4"><div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl border border-rose-200/20 bg-black/25 p-3 text-center"><div className="rounded-lg bg-amber-400/10 p-3 text-sm font-black">OK</div><GitBranch className="text-rose-200" aria-hidden="true"/><div className="rounded-lg bg-rose-400/10 p-3 text-sm font-black">?</div><p className="col-span-3 text-xs font-bold text-rose-100/55">{t.cause}</p></div><Choices props={props}/></div>;
}
function SourceLab(props: Props) { const t=COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-sky-300/20 bg-sky-950/20 p-4"><div className="relative mb-4 flex min-h-28 items-center justify-center gap-4 rounded-xl border border-sky-200/15 bg-black/25 p-3"><ScrollText size={44} className="text-sky-200" aria-hidden="true"/><div><div className="text-xs font-black uppercase tracking-wider text-sky-100/55">{t.source}</div><div className="mt-1 text-sm font-bold">{props.context}</div></div><BookOpenCheck className="absolute right-3 top-3 text-emerald-200/60" aria-hidden="true"/></div><Choices props={props}/></div>;
}
function TimelineAnalysis(props: Props) { const t=COPY[props.lang]; const [position,setPosition]=useState(50);
  return <div className="mt-4 rounded-2xl border border-violet-300/20 bg-violet-950/20 p-4"><div className="mb-3 rounded-xl border border-violet-200/15 bg-black/25 p-4"><div className="mb-2 flex justify-between text-xs font-black"><span>régebbi</span><span>{t.timeline}</span><span>újabb</span></div><div className="relative h-3 rounded-full bg-gradient-to-r from-amber-600 via-violet-300 to-cyan-400"><span className="absolute -top-1 h-5 w-1 rounded bg-white" style={{left:`${position}%`}}/></div><input aria-label={t.timeline} type="range" min="5" max="95" value={position} onChange={event=>setPosition(Number(event.target.value))} className="mt-2 w-full accent-violet-300"/><TimerReset className="mx-auto text-violet-200/60" aria-hidden="true"/></div><Choices props={props}/></div>;
}
function DecisionCouncil(props: Props) { const t=COPY[props.lang]; const [step,setStep]=useState(1); useEffect(()=>setStep(1),[props.context]);
  return <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-950/20 p-4"><div className="mb-4 flex items-center gap-3 rounded-xl border border-cyan-200/20 bg-cyan-300/10 p-3"><Landmark className="shrink-0 text-cyan-200" aria-hidden="true"/><span className="min-w-0 flex-1 text-sm font-bold">{t.council}</span>{[1,2,3].map(n=><button key={n} type="button" onClick={()=>setStep(n)} className={`h-9 w-9 rounded-full border text-xs font-black ${n<=step?"border-cyan-200 bg-cyan-300/25":"border-white/10 text-white/30"}`}>{n}</button>)}</div><p className="mb-3 text-xs font-bold text-cyan-100/60">{props.context} · {step}/3</p><Choices props={props}/></div>;
}
function HistoryDetective(props: Props) { const t=COPY[props.lang];
  return <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-950/20 p-4"><div className="mb-4 flex min-h-24 items-center justify-center gap-4 rounded-xl border border-emerald-200/20 bg-black/25"><Search size={44} className="text-emerald-200" aria-hidden="true"/><div><div className="text-xs font-bold uppercase tracking-wider text-emerald-100/50">{t.clue}</div><div className="mt-1 text-lg font-black text-emerald-50">{props.context}</div></div></div><Choices props={props}/></div>;
}
export default function HistorySkillMechanic(props: Props) {
  switch(props.gameId){case "chronik-scanner":return <ChronicleScanner {...props}/>;case "epochen-sortierer":return <EraSorter {...props}/>;case "ursache-wirkung":return <CauseEffect {...props}/>;case "quellen-labor":return <SourceLab {...props}/>;case "zeitstrahl-analyse":return <TimelineAnalysis {...props}/>;case "entscheidungs-rat":return <DecisionCouncil {...props}/>;case "geschichts-detektiv":return <HistoryDetective {...props}/>;default:return <Landmark className="mx-auto mt-8 text-amber-300" aria-hidden="true"/>;}
}