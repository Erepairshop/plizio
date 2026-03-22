"use client";
// BodySystemExplorer — Island i7: Body Systems (Körpersysteme)
// 5 rounds: Which system? MCQ, Heart & Blood MCQ, Breathing sequence order, Nervous system MCQ, Quick review

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion { emoji: string; question: string; choices: string[]; answer: string; }
interface Props { color: string; lang?: string; onDone: (score: number, total: number) => void; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite — try again",
    r1Title: "Which Body System?", r1Hint: "Match the function to the correct body system.",
    r2Title: "Heart & Blood", r2Hint: "Answer questions about the circulatory system.",
    r3Title: "Breathing Steps", r3Hint: "Tap the steps of breathing in the correct order.",
    r3InProgress: "Keep going!", r3Done: "Correct sequence! ✓",
    r4Title: "Nervous System", r4Hint: "How does the nervous system control your body?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    circulatory: "Circulatory system ❤️", respiratory: "Respiratory system 🫁", digestive: "Digestive system 🫙", nervous: "Nervous system 🧠",
    q_sys_pump: "❤️ Which system pumps blood carrying oxygen and nutrients around the body?",
    q_sys_breathe: "🫁 Which system takes in oxygen and releases carbon dioxide?",
    q_sys_food: "🫙 Which system breaks down food and absorbs nutrients?",
    q_sys_signal: "🧠 Which system sends signals between the brain and body parts?",
    pump_blood: "Pump blood around the body 🔄", carry_oxygen: "Carry oxygen to cells 🩸", fight_disease: "Fight diseases 🦠", regulate_temp: "Regulate temperature 🌡️",
    q_heart_does: "❤️ What is the main job of the heart?",
    q_blood_does: "🩸 What does blood carry to all body cells?",
    inhale_lbl: "Inhale: air enters lungs 💨", lungs_lbl: "Lungs: oxygen passes to blood 🩸", exhale_lbl: "Exhale: CO₂ leaves body 💨",
    brain: "Brain 🧠", spinal_cord: "Spinal cord 🦴", nerves: "Nerves 🔌", all_three: "All three together 🧠🦴🔌",
    q_nervous_think: "🧠 Which part of the nervous system controls thinking and decisions?",
    q_nervous_reflex: "🦴 Quick reflex actions (like pulling away from heat) are controlled mainly by…?",
    q_nervous_parts: "🔌 The complete nervous system consists of…?",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Welches Körpersystem?", r1Hint: "Ordne die Funktion dem richtigen Körpersystem zu.",
    r2Title: "Herz & Blut", r2Hint: "Beantworte Fragen über den Kreislauf.",
    r3Title: "Atemschritte", r3Hint: "Tippe die Atemschritte in der richtigen Reihenfolge.",
    r3InProgress: "Weiter so!", r3Done: "Richtige Reihenfolge! ✓",
    r4Title: "Nervensystem", r4Hint: "Wie steuert das Nervensystem deinen Körper?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    circulatory: "Kreislaufsystem ❤️", respiratory: "Atmungssystem 🫁", digestive: "Verdauungssystem 🫙", nervous: "Nervensystem 🧠",
    q_sys_pump: "❤️ Welches System pumpt Blut mit Sauerstoff und Nährstoffen durch den Körper?",
    q_sys_breathe: "🫁 Welches System nimmt Sauerstoff auf und gibt Kohlendioxid ab?",
    q_sys_food: "🫙 Welches System verdaut Nahrung und nimmt Nährstoffe auf?",
    q_sys_signal: "🧠 Welches System sendet Signale zwischen Gehirn und Körperteilen?",
    pump_blood: "Blut durch den Körper pumpen 🔄", carry_oxygen: "Sauerstoff zu Zellen transportieren 🩸", fight_disease: "Krankheiten bekämpfen 🦠", regulate_temp: "Temperatur regulieren 🌡️",
    q_heart_does: "❤️ Was ist die Hauptaufgabe des Herzens?",
    q_blood_does: "🩸 Was transportiert Blut zu allen Körperzellen?",
    inhale_lbl: "Einatmen: Luft in die Lungen 💨", lungs_lbl: "Lungen: Sauerstoff ins Blut 🩸", exhale_lbl: "Ausatmen: CO₂ verlässt den Körper 💨",
    brain: "Gehirn 🧠", spinal_cord: "Rückenmark 🦴", nerves: "Nerven 🔌", all_three: "Alle drei zusammen 🧠🦴🔌",
    q_nervous_think: "🧠 Welcher Teil des Nervensystems steuert Denken und Entscheidungen?",
    q_nervous_reflex: "🦴 Schnelle Reflexe (wie Wegziehen von Hitze) werden hauptsächlich gesteuert durch…?",
    q_nervous_parts: "🔌 Das komplette Nervensystem besteht aus…?",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Melyik testrendszer?", r1Hint: "Párosítsd a funkciót a megfelelő testrendszerrel.",
    r2Title: "Szív és vér", r2Hint: "Válaszolj a keringési rendszerről szóló kérdésekre.",
    r3Title: "A légzés lépései", r3Hint: "Koppints a légzés lépéseire helyes sorrendben.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes sorrend! ✓",
    r4Title: "Idegrendszer", r4Hint: "Hogyan irányítja az idegrendszer a testedet?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    circulatory: "Keringési rendszer ❤️", respiratory: "Légzőrendszer 🫁", digestive: "Emésztőrendszer 🫙", nervous: "Idegrendszer 🧠",
    q_sys_pump: "❤️ Melyik rendszer pumpálja az oxigénes és tápanyagos vért a testben?",
    q_sys_breathe: "🫁 Melyik rendszer vesz fel oxigént és ad le szén-dioxidot?",
    q_sys_food: "🫙 Melyik rendszer bontja le az ételt és szívja fel a tápanyagokat?",
    q_sys_signal: "🧠 Melyik rendszer küld jeleket az agy és a testrészek között?",
    pump_blood: "Vér keringtetése a testben 🔄", carry_oxygen: "Oxigén szállítása a sejtekhez 🩸", fight_disease: "Betegségek elleni küzdelem 🦠", regulate_temp: "Hőmérséklet szabályozása 🌡️",
    q_heart_does: "❤️ Mi a szív fő feladata?",
    q_blood_does: "🩸 Mit szállít a vér az összes testsejthez?",
    inhale_lbl: "Belégzés: levegő a tüdőbe 💨", lungs_lbl: "Tüdő: oxigén a vérbe 🩸", exhale_lbl: "Kilégzés: CO₂ elhagyja a testet 💨",
    brain: "Agy 🧠", spinal_cord: "Gerincvelő 🦴", nerves: "Idegek 🔌", all_three: "Mindhárom együtt 🧠🦴🔌",
    q_nervous_think: "🧠 Az idegrendszer melyik része irányítja a gondolkodást és a döntéshozatalt?",
    q_nervous_reflex: "🦴 A gyors reflexeket (pl. elrántás a hőtől) főként melyik rész irányítja?",
    q_nervous_parts: "🔌 A teljes idegrendszer áll…?",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Ce sistem al corpului?", r1Hint: "Asociază funcția cu sistemul corect al corpului.",
    r2Title: "Inimă și sânge", r2Hint: "Răspunde la întrebări despre sistemul circulator.",
    r3Title: "Pașii respirației", r3Hint: "Atinge pașii respirației în ordinea corectă.",
    r3InProgress: "Continuă!", r3Done: "Secvență corectă! ✓",
    r4Title: "Sistemul nervos", r4Hint: "Cum controlează sistemul nervos corpul tău?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    circulatory: "Sistem circulator ❤️", respiratory: "Sistem respirator 🫁", digestive: "Sistem digestiv 🫙", nervous: "Sistem nervos 🧠",
    q_sys_pump: "❤️ Ce sistem pompează sânge cu oxigen și nutrienți prin corp?",
    q_sys_breathe: "🫁 Ce sistem preia oxigen și eliberează dioxid de carbon?",
    q_sys_food: "🫙 Ce sistem digeră hrana și absoarbe nutrienți?",
    q_sys_signal: "🧠 Ce sistem trimite semnale între creier și părțile corpului?",
    pump_blood: "Pompează sânge prin corp 🔄", carry_oxygen: "Transportă oxigen la celule 🩸", fight_disease: "Combate bolile 🦠", regulate_temp: "Reglează temperatura 🌡️",
    q_heart_does: "❤️ Care este funcția principală a inimii?",
    q_blood_does: "🩸 Ce transportă sângele la toate celulele corpului?",
    inhale_lbl: "Inspirație: aerul intră în plămâni 💨", lungs_lbl: "Plămâni: oxigenul trece în sânge 🩸", exhale_lbl: "Expirație: CO₂ iese din corp 💨",
    brain: "Creier 🧠", spinal_cord: "Măduva spinării 🦴", nerves: "Nervi 🔌", all_three: "Toate trei împreună 🧠🦴🔌",
    q_nervous_think: "🧠 Ce parte a sistemului nervos controlează gândirea și deciziile?",
    q_nervous_reflex: "🦴 Reflexele rapide (retragere de la căldură) sunt controlate în principal de…?",
    q_nervous_parts: "🔌 Sistemul nervos complet este format din…?",
  },
};

function shuffle<T>(arr: T[]): T[] { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }

const SYS_POOL: MCQQuestion[] = [
  { emoji: "❤️", question: "q_sys_pump", choices: shuffle(["circulatory","respiratory","digestive","nervous"]), answer: "circulatory" },
  { emoji: "🫁", question: "q_sys_breathe", choices: shuffle(["respiratory","circulatory","digestive","nervous"]), answer: "respiratory" },
  { emoji: "🫙", question: "q_sys_food", choices: shuffle(["digestive","circulatory","respiratory","nervous"]), answer: "digestive" },
  { emoji: "🧠", question: "q_sys_signal", choices: shuffle(["nervous","circulatory","respiratory","digestive"]), answer: "nervous" },
];
const HEART_POOL: MCQQuestion[] = [
  { emoji: "❤️", question: "q_heart_does", choices: shuffle(["pump_blood","carry_oxygen","fight_disease","regulate_temp"]), answer: "pump_blood" },
  { emoji: "🩸", question: "q_blood_does", choices: shuffle(["carry_oxygen","pump_blood","fight_disease","regulate_temp"]), answer: "carry_oxygen" },
];
const NERVE_POOL: MCQQuestion[] = [
  { emoji: "🧠", question: "q_nervous_think", choices: shuffle(["brain","spinal_cord","nerves","all_three"]), answer: "brain" },
  { emoji: "🦴", question: "q_nervous_reflex", choices: shuffle(["spinal_cord","brain","nerves","all_three"]), answer: "spinal_cord" },
  { emoji: "🔌", question: "q_nervous_parts", choices: shuffle(["all_three","brain","spinal_cord","nerves"]), answer: "all_three" },
];
const BREATH_ORDER = ["inhale_lbl","lungs_lbl","exhale_lbl"] as const;
const TOTAL_ROUNDS = 5;

function BodySystemExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(SYS_POOL), []);
  const r2Qs = useMemo(() => shuffle(HEART_POOL), []);
  const r4Qs = useMemo(() => shuffle(NERVE_POOL), []);
  const r5Qs = useMemo(() => shuffle([...SYS_POOL,...HEART_POOL,...NERVE_POOL]).slice(0,3), []);
  const [scrambled] = useState(() => shuffle([...BREATH_ORDER]));
  const [round, setRound] = useState(0); const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null); const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]); const [orderWrong, setOrderWrong] = useState<string|null>(null);
  const scoreRef = useRef(0); const totalRef = useRef(0);
  const resetSub = useCallback(() => { setSelected(null); setLocked(false); }, []);
  const advanceRound = useCallback(() => { if(round>=TOTAL_ROUNDS-1) onDone(scoreRef.current,totalRef.current); else { setRound(r=>r+1); setSubIdx(0); resetSub(); setTapped([]); setOrderWrong(null); } }, [round,onDone,resetSub]);
  const advanceSub = useCallback((qs: MCQQuestion[], isLast=false) => { if(subIdx<qs.length-1) { setSubIdx(i=>i+1); resetSub(); } else { if(isLast) onDone(scoreRef.current,totalRef.current); else advanceRound(); } }, [subIdx,advanceRound,onDone,resetSub]);
  const handleSelect = useCallback((key: string, correct: string) => { if(locked) return; setSelected(key); setLocked(true); totalRef.current+=1; if(key===correct) scoreRef.current+=1; }, [locked]);
  const handleOrderTap = useCallback((key: string) => { if(tapped.includes(key)) return; const expected=BREATH_ORDER[tapped.length]; if(key===expected) { const next=[...tapped,key]; setTapped(next); setOrderWrong(null); if(next.length===BREATH_ORDER.length) { totalRef.current+=1; scoreRef.current+=1; setTimeout(()=>advanceRound(),700); } } else { setOrderWrong(key); totalRef.current+=1; setTimeout(()=>setOrderWrong(null),600); } }, [tapped,advanceRound]);
  const renderNext = (onNext: ()=>void, isFinish=false) => <motion.button onClick={onNext} className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2" style={{background:`linear-gradient(135deg,${color}55,${color}99)`,border:`2px solid ${color}`}} whileTap={{scale:0.97}} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}>{isFinish?t.finish:t.next} <ChevronRight size={16}/></motion.button>;
  const renderMCQ = (qs: MCQQuestion[], title: string, hint: string, isLast=false) => { const q=qs[subIdx]; const isCorrect=locked&&selected===q.answer; return (<>
    {qs.length>1&&<div className="flex gap-1 justify-center mb-1">{qs.map((_,i)=><div key={i} className="w-2 h-2 rounded-full" style={{background:i<subIdx?"#00FF88":i===subIdx?color:"rgba(255,255,255,0.15)"}}/>)}</div>}
    <p className="text-xl font-black text-white text-center">{title}</p>
    <p className="text-white/60 text-xs font-bold text-center px-4">{hint}</p>
    <div className="w-full max-w-xs rounded-2xl px-4 py-4 text-center" style={{background:"rgba(255,255,255,0.06)",border:`1.5px solid ${color}33`}}><p className="text-base font-semibold text-white/90 leading-snug">{t[q.question]}</p></div>
    <div className="flex flex-col gap-2 w-full max-w-xs">{q.choices.map(k=>{const isThis=selected===k,isRight=k===q.answer; let bg="rgba(255,255,255,0.06)",border="rgba(255,255,255,0.1)",tc="text-white"; if(locked){if(isRight){bg=`${color}33`;border=color;}else if(isThis){bg="#FF2D7833";border="#FF2D78";tc="text-white/70";}}else if(isThis){bg=`${color}22`;border=color;} return <motion.button key={k} onClick={()=>handleSelect(k,q.answer)} disabled={locked} className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${tc}`} style={{background:bg,border:`2px solid ${border}`}} whileTap={locked?{}:{scale:0.97}}>{t[k]}</motion.button>;})}</div>
    {locked&&<motion.p initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} className="text-sm font-bold text-center" style={{color:isCorrect?"#00FF88":"#FF2D78"}}>{isCorrect?t.correct:t.wrong}</motion.p>}
    {locked&&renderNext(()=>advanceSub(qs,isLast),isLast&&subIdx===qs.length-1)}
  </>); };
  const renderOrder = () => { const allDone=tapped.length===BREATH_ORDER.length; return (<>
    <p className="text-xl font-black text-white text-center">{t.r3Title}</p>
    <p className="text-white/60 text-xs font-bold text-center px-4">{t.r3Hint}</p>
    <div className="flex gap-2 flex-wrap justify-center min-h-[2rem]">{tapped.map((k,i)=><motion.span key={k} initial={{scale:0.7,opacity:0}} animate={{scale:1,opacity:1}} className="px-3 py-1 rounded-full text-xs font-black text-white" style={{background:`${color}55`,border:`1.5px solid ${color}`}}>{i+1}. {t[k]}</motion.span>)}</div>
    <p className="text-xs font-bold text-center" style={{color:allDone?"#00FF88":"rgba(255,255,255,0.4)"}}>{allDone?t.r3Done:t.r3InProgress}</p>
    <div className="flex flex-col gap-2 w-full max-w-xs">{scrambled.map(key=>{const done=tapped.includes(key),isWrong=orderWrong===key; return <motion.button key={key} onClick={()=>handleOrderTap(key)} disabled={done} className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white" style={{background:done?`${color}22`:"rgba(255,255,255,0.06)",border:`2px solid ${done?color:isWrong?"#FF2D78":"rgba(255,255,255,0.1)"}`,opacity:done?0.45:1}} animate={isWrong?{x:[-6,6,-4,4,0]}:{}} transition={{duration:0.35}} whileTap={done?{}:{scale:0.97}}>{t[key]}</motion.button>;})}</div>
  </>); };
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      <div className="flex justify-center gap-1.5 pt-4 pb-2">{Array.from({length:TOTAL_ROUNDS},(_,i)=><div key={i} className="w-2.5 h-2.5 rounded-full" style={{background:i<round?"#00FF88":i===round?color:"rgba(255,255,255,0.15)"}}/>)}</div>
      <AnimatePresence mode="wait">
        <motion.div key={`${round}-${subIdx}`} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-4">
          {round===0&&renderMCQ(r1Qs,t.r1Title,t.r1Hint)}
          {round===1&&renderMCQ(r2Qs,t.r2Title,t.r2Hint)}
          {round===2&&renderOrder()}
          {round===3&&renderMCQ(r4Qs,t.r4Title,t.r4Hint)}
          {round===4&&renderMCQ(r5Qs,t.r5Title,t.r5Hint,true)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default memo(BodySystemExplorer);
