"use client";
// SkeletonExplorer — Island i6: Skeleton & Muscles (Skelett & Muskeln)
// 5 rounds: Skeleton functions MCQ, Bone names MCQ, Muscle types order, Skin functions MCQ, Quick review

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion { emoji: string; question: string; choices: string[]; answer: string; }
interface Props { color: string; lang?: string; onDone: (score: number, total: number) => void; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite — try again",
    r1Title: "Skeleton Functions", r1Hint: "What does the skeleton do for the body?",
    r2Title: "Name That Bone", r2Hint: "Which bone is being described?",
    r3Title: "Muscle Types", r3Hint: "Tap: voluntary muscles first, then involuntary muscles.",
    r3InProgress: "Keep going!", r3Done: "Correct grouping! ✓",
    r4Title: "Skin Functions", r4Hint: "What role does the skin play in this situation?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    support: "Supports the body upright 🏗️", protect: "Protects organs 🛡️", movement: "Enables movement 💪", blood_cells: "Produces blood cells 🩸",
    q_skel_stand: "🦴 Thanks to the skeleton, we can stand upright. What function is this?",
    q_skel_brain: "🧠 The skull protects the brain from damage. What function is this?",
    q_skel_blood: "🩸 Inside bones, red blood cells are produced. What function is this?",
    skull: "Skull 💀", spine: "Spine 🦴", ribs: "Ribs 🫁", femur: "Femur (thigh bone) 🦵",
    q_bone_head: "💀 Which bone protects the brain?",
    q_bone_back: "🦴 Which structure runs down the back and supports the body?",
    q_bone_chest: "🫁 Which bones protect the heart and lungs?",
    q_bone_leg: "🦵 Which is the longest and strongest bone in the human body?",
    bicep: "Bicep (arm) 💪", heart_muscle: "Heart muscle ❤️", stomach_muscle: "Stomach wall muscle 🫙", leg_muscle: "Leg muscle 🦵",
    r3Hint2: "Voluntary: Bicep, Leg muscle | Involuntary: Heart, Stomach",
    protection: "Protection from UV and injury 🛡️", temp_reg: "Temperature regulation 🌡️", sensation: "Sense of touch and pain 🤚", waterproof: "Keeps the body waterproof 💧",
    q_skin_sun: "☀️ What does skin do to protect you from the sun's UV rays?",
    q_skin_cold: "🥶 When you're cold, your skin helps keep heat in. What function?",
    q_skin_touch: "🤚 You can feel heat, cold, pain and pressure through the skin. What function?",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Skelettfunktionen", r1Hint: "Was macht das Skelett für den Körper?",
    r2Title: "Welcher Knochen?", r2Hint: "Welcher Knochen wird beschrieben?",
    r3Title: "Muskeltypen", r3Hint: "Tippe: zuerst willkürliche, dann unwillkürliche Muskeln.",
    r3InProgress: "Weiter so!", r3Done: "Richtige Einteilung! ✓",
    r4Title: "Hautfunktionen", r4Hint: "Welche Rolle spielt die Haut in dieser Situation?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    support: "Stützt den Körper aufrecht 🏗️", protect: "Schützt die Organe 🛡️", movement: "Ermöglicht Bewegung 💪", blood_cells: "Produziert Blutzellen 🩸",
    q_skel_stand: "🦴 Dank des Skeletts können wir aufrecht stehen. Welche Funktion?",
    q_skel_brain: "🧠 Der Schädel schützt das Gehirn vor Verletzungen. Welche Funktion?",
    q_skel_blood: "🩸 Im Inneren der Knochen werden rote Blutkörperchen gebildet. Welche Funktion?",
    skull: "Schädel 💀", spine: "Wirbelsäule 🦴", ribs: "Rippen 🫁", femur: "Oberschenkelknochen 🦵",
    q_bone_head: "💀 Welcher Knochen schützt das Gehirn?",
    q_bone_back: "🦴 Welche Struktur verläuft den Rücken hinunter und stützt den Körper?",
    q_bone_chest: "🫁 Welche Knochen schützen Herz und Lunge?",
    q_bone_leg: "🦵 Welches ist der längste und stärkste Knochen im menschlichen Körper?",
    bicep: "Bizeps (Arm) 💪", heart_muscle: "Herzmuskel ❤️", stomach_muscle: "Magenmuskel 🫙", leg_muscle: "Beinmuskel 🦵",
    r3Hint2: "Willkürlich: Bizeps, Beinmuskel | Unwillkürlich: Herz, Magen",
    protection: "Schutz vor UV und Verletzungen 🛡️", temp_reg: "Temperaturregulation 🌡️", sensation: "Tast- und Schmerzempfindung 🤚", waterproof: "Hält den Körper wasserdicht 💧",
    q_skin_sun: "☀️ Was macht die Haut zum Schutz vor UV-Strahlung?",
    q_skin_cold: "🥶 Bei Kälte hilft die Haut, Wärme zu behalten. Welche Funktion?",
    q_skin_touch: "🤚 Durch die Haut fühlt man Wärme, Kälte, Schmerz und Druck. Welche Funktion?",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "A csontváz funkciói", r1Hint: "Mit tesz a csontváz a testért?",
    r2Title: "Melyik csont?", r2Hint: "Melyik csontot írják le?",
    r3Title: "Izomtípusok", r3Hint: "Koppints: először akaratlagos, majd nem akaratlagos izmok.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes csoportosítás! ✓",
    r4Title: "A bőr funkciói", r4Hint: "Milyen szerepet játszik a bőr ebben a helyzetben?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    support: "Egyenesen tartja a testet 🏗️", protect: "Megvédi a szerveket 🛡️", movement: "Lehetővé teszi a mozgást 💪", blood_cells: "Vérsejteket termel 🩸",
    q_skel_stand: "🦴 A csontváz jóvoltából egyenesen állhatunk. Melyik funkció?",
    q_skel_brain: "🧠 A koponya megvédi az agyat a sérüléstől. Melyik funkció?",
    q_skel_blood: "🩸 A csontvelőben vörösvérsejtek képződnek. Melyik funkció?",
    skull: "Koponya 💀", spine: "Gerincoszlop 🦴", ribs: "Bordák 🫁", femur: "Combcsont 🦵",
    q_bone_head: "💀 Melyik csont védi az agyat?",
    q_bone_back: "🦴 Melyik struktúra fut le a hátgerincen és tartja a testet?",
    q_bone_chest: "🫁 Melyik csontok védik a szívet és a tüdőt?",
    q_bone_leg: "🦵 Melyik az emberi test leghosszabb és legerősebb csontja?",
    bicep: "Bicepsz (kar) 💪", heart_muscle: "Szívizom ❤️", stomach_muscle: "Gyomorfaliz 🫙", leg_muscle: "Lábizom 🦵",
    r3Hint2: "Akaratlagos: bicepsz, lábizom | Nem akaratlagos: szívizom, gyomorizom",
    protection: "Védelem UV és sérülés ellen 🛡️", temp_reg: "Hőszabályozás 🌡️", sensation: "Tapintás és fájdalomérzet 🤚", waterproof: "Vízhatlanná teszi a testet 💧",
    q_skin_sun: "☀️ Mit tesz a bőr, hogy megvédjen az UV-sugárzástól?",
    q_skin_cold: "🥶 Hidegben a bőr segít megőrizni a testhőt. Melyik funkció?",
    q_skin_touch: "🤚 A bőrön át érzed a meleget, hideget, fájdalmat és nyomást. Melyik funkció?",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Funcțiile scheletului", r1Hint: "Ce face scheletul pentru corp?",
    r2Title: "Ce os este?", r2Hint: "Ce os este descris?",
    r3Title: "Tipuri de mușchi", r3Hint: "Atinge: întâi mușchi voluntari, apoi involuntari.",
    r3InProgress: "Continuă!", r3Done: "Grupare corectă! ✓",
    r4Title: "Funcțiile pielii", r4Hint: "Ce rol joacă pielea în această situație?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    support: "Susține corpul drept 🏗️", protect: "Protejează organele 🛡️", movement: "Permite mișcarea 💪", blood_cells: "Produce celule sanguine 🩸",
    q_skel_stand: "🦴 Datorită scheletului putem sta drepți. Ce funcție?",
    q_skel_brain: "🧠 Craniul protejează creierul de daune. Ce funcție?",
    q_skel_blood: "🩸 În interiorul oaselor se produc globule roșii. Ce funcție?",
    skull: "Craniu 💀", spine: "Coloana vertebrală 🦴", ribs: "Coaste 🫁", femur: "Femur (os coapsă) 🦵",
    q_bone_head: "💀 Ce os protejează creierul?",
    q_bone_back: "🦴 Ce structură coboară pe spate și susține corpul?",
    q_bone_chest: "🫁 Ce oase protejează inima și plămânii?",
    q_bone_leg: "🦵 Care este cel mai lung și mai puternic os din corpul uman?",
    bicep: "Biceps (braț) 💪", heart_muscle: "Mușchiul inimii ❤️", stomach_muscle: "Mușchiul stomacului 🫙", leg_muscle: "Mușchiul piciorului 🦵",
    r3Hint2: "Voluntar: biceps, mușchi picior | Involuntar: inimă, stomac",
    protection: "Protecție UV și leziuni 🛡️", temp_reg: "Reglarea temperaturii 🌡️", sensation: "Simțul tactil și durerea 🤚", waterproof: "Impermeabilizează corpul 💧",
    q_skin_sun: "☀️ Ce face pielea pentru a te proteja de razele UV?",
    q_skin_cold: "🥶 La frig, pielea ajută la păstrarea căldurii. Ce funcție?",
    q_skin_touch: "🤚 Prin piele simți căldura, frigul, durerea și presiunea. Ce funcție?",
  },
};

function shuffle<T>(arr: T[]): T[] { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }

const SKEL_POOL: MCQQuestion[] = [
  { emoji: "🦴", question: "q_skel_stand", choices: shuffle(["support","protect","movement","blood_cells"]), answer: "support" },
  { emoji: "🧠", question: "q_skel_brain", choices: shuffle(["protect","support","movement","blood_cells"]), answer: "protect" },
  { emoji: "🩸", question: "q_skel_blood", choices: shuffle(["blood_cells","support","protect","movement"]), answer: "blood_cells" },
];
const BONE_POOL: MCQQuestion[] = [
  { emoji: "💀", question: "q_bone_head", choices: shuffle(["skull","spine","ribs","femur"]), answer: "skull" },
  { emoji: "🦴", question: "q_bone_back", choices: shuffle(["spine","skull","ribs","femur"]), answer: "spine" },
  { emoji: "🫁", question: "q_bone_chest", choices: shuffle(["ribs","spine","skull","femur"]), answer: "ribs" },
  { emoji: "🦵", question: "q_bone_leg", choices: shuffle(["femur","ribs","spine","skull"]), answer: "femur" },
];
const SKIN_POOL: MCQQuestion[] = [
  { emoji: "☀️", question: "q_skin_sun", choices: shuffle(["protection","temp_reg","sensation","waterproof"]), answer: "protection" },
  { emoji: "🥶", question: "q_skin_cold", choices: shuffle(["temp_reg","protection","sensation","waterproof"]), answer: "temp_reg" },
  { emoji: "🤚", question: "q_skin_touch", choices: shuffle(["sensation","protection","temp_reg","waterproof"]), answer: "sensation" },
];
// Muscle order: voluntary first (bicep, leg), involuntary last (heart, stomach)
const MUSCLE_ORDER = ["bicep","leg_muscle","heart_muscle","stomach_muscle"] as const;
const TOTAL_ROUNDS = 5;

function SkeletonExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(SKEL_POOL), []);
  const r2Qs = useMemo(() => shuffle(BONE_POOL), []);
  const r4Qs = useMemo(() => shuffle(SKIN_POOL), []);
  const r5Qs = useMemo(() => shuffle([...SKEL_POOL,...BONE_POOL,...SKIN_POOL]).slice(0,3), []);
  const [scrambled] = useState(() => shuffle([...MUSCLE_ORDER]));
  const [round, setRound] = useState(0); const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null); const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]); const [orderWrong, setOrderWrong] = useState<string|null>(null);
  const scoreRef = useRef(0); const totalRef = useRef(0);
  const resetSub = useCallback(() => { setSelected(null); setLocked(false); }, []);
  const advanceRound = useCallback(() => { if (round>=TOTAL_ROUNDS-1) onDone(scoreRef.current,totalRef.current); else { setRound(r=>r+1); setSubIdx(0); resetSub(); setTapped([]); setOrderWrong(null); } }, [round,onDone,resetSub]);
  const advanceSub = useCallback((qs: MCQQuestion[], isLast=false) => { if (subIdx<qs.length-1) { setSubIdx(i=>i+1); resetSub(); } else { if(isLast) onDone(scoreRef.current,totalRef.current); else advanceRound(); } }, [subIdx,advanceRound,onDone,resetSub]);
  const handleSelect = useCallback((key: string, correct: string) => { if(locked) return; setSelected(key); setLocked(true); totalRef.current+=1; if(key===correct) scoreRef.current+=1; }, [locked]);
  const handleOrderTap = useCallback((key: string) => { if(tapped.includes(key)) return; const expected=MUSCLE_ORDER[tapped.length]; if(key===expected) { const next=[...tapped,key]; setTapped(next); setOrderWrong(null); if(next.length===MUSCLE_ORDER.length) { totalRef.current+=1; scoreRef.current+=1; setTimeout(()=>advanceRound(),700); } } else { setOrderWrong(key); totalRef.current+=1; setTimeout(()=>setOrderWrong(null),600); } }, [tapped,advanceRound]);
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
  const renderOrder = () => { const allDone=tapped.length===MUSCLE_ORDER.length; return (<>
    <p className="text-xl font-black text-white text-center">{t.r3Title}</p>
    <p className="text-white/60 text-xs font-bold text-center px-4">{t.r3Hint}</p>
    <p className="text-white/40 text-xs text-center px-4">{t.r3Hint2}</p>
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
export default memo(SkeletonExplorer);
