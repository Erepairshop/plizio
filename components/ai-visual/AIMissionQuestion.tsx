"use client";
import { useEffect, useMemo, useState } from "react";
import { AITestDiagram, type AIDiagramId } from "./AITestDiagrams";
type Props={mode:"choice"|"order";diagramId:AIDiagramId;prompt:string;title:string;clue:string;options?:string[];items?:string[];correctAnswer?:string;correctOrder?:string[];orderLabel:string;tapLabel:string;resetLabel:string;correctLabel:string;solutionLabel:string;userAnswer:string;submitted:boolean;onAnswer:(answer:string)=>void};
function seeded(items:string[],seed:string){let n=[...seed].reduce((s,c)=>s+c.charCodeAt(0),0);return [...items].sort(()=>{n=(n*9301+49297)%233280;return n/233280-.5;});}
export default function AIMissionQuestion(p:Props){
  const {mode,diagramId,prompt,title,clue,options=[],items=[],correctAnswer="",correctOrder=[],orderLabel,tapLabel,resetLabel,correctLabel,solutionLabel,userAnswer,submitted,onAnswer}=p;
  const [selected,setSelected]=useState<string[]>(userAnswer?userAnswer.split("|"):[]);
  const available=useMemo(()=>seeded(items,diagramId),[items,diagramId]);
  useEffect(()=>setSelected(userAnswer?userAnswer.split("|"):[]),[userAnswer,diagramId]);
  const toggle=(item:string)=>{const next=selected.includes(item)?selected.filter(v=>v!==item):[...selected,item];setSelected(next);onAnswer(next.join("|"));};
  const correct=mode==="choice"?userAnswer===correctAnswer:userAnswer===correctOrder.join("|");
  return <section className="rounded-2xl border border-violet-100 bg-white/80 p-3 shadow-sm sm:p-4">
    <div className="grid gap-3 sm:grid-cols-[190px_1fr] sm:items-center"><AITestDiagram kind={diagramId} label={title+". "+clue} className="mx-auto h-auto w-full max-w-[190px]"/><div><p className="text-xs font-bold uppercase tracking-wide text-violet-700">{prompt}</p><h3 className="mt-1 text-base font-extrabold text-slate-900 sm:text-lg">{title}</h3><p className="mt-1 text-sm text-slate-600">{clue}</p></div></div>
    {mode==="choice"?<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">{options.map(option=>{const chosen=option===userAnswer,answer=option===correctAnswer;const state=submitted?answer?"border-emerald-500 bg-emerald-500 text-white":chosen?"border-rose-400 bg-rose-100 text-rose-700":"border-slate-200 bg-white text-slate-400":chosen?"border-violet-600 bg-violet-600 text-white":"border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50";return <button key={option} type="button" disabled={submitted} onClick={()=>onAnswer(option)} className={"min-h-12 rounded-xl border-2 px-3 py-2 text-left text-sm font-bold transition "+state}>{option}</button>;})}</div>:<>
      <div className="mt-3 min-h-14 rounded-xl border border-dashed border-violet-300 bg-violet-50/40 p-2"><p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">{orderLabel}</p>{selected.length===0?<p className="py-1 text-sm italic text-slate-400">{tapLabel}</p>:<div className="flex flex-wrap gap-1.5">{selected.map((item,index)=><span key={item} className="flex items-center gap-1">{index>0&&<span className="font-bold text-violet-600">→</span>}<span className="rounded-lg border border-violet-200 bg-white px-2 py-1 text-sm font-bold">{item}</span></span>)}</div>}</div>
      {!submitted&&<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">{available.map(item=><button key={item} type="button" aria-pressed={selected.includes(item)} onClick={()=>toggle(item)} className={"min-h-12 rounded-xl border-2 px-3 py-2 text-left text-sm font-bold "+(selected.includes(item)?"border-violet-600 bg-violet-600 text-white":"border-slate-300 bg-white text-slate-700")}>{item}</button>)}</div>}
      {!submitted&&selected.length>0&&<button type="button" onClick={()=>{setSelected([]);onAnswer("");}} className="mt-2 min-h-10 rounded-lg px-3 text-sm font-semibold text-slate-500">↺ {resetLabel}</button>}
    </>}
    {submitted&&userAnswer&&<div className={"mt-3 rounded-xl px-3 py-2 text-sm font-bold "+(correct?"bg-emerald-100 text-emerald-800":"bg-rose-100 text-rose-700")}>{correct?"✓ "+correctLabel:"✕ "+solutionLabel+": "+(mode==="choice"?correctAnswer:correctOrder.join(" → "))}</div>}
  </section>;
}
