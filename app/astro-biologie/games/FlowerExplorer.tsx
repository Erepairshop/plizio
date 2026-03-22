"use client";
// FlowerExplorer — Island i5: Flowers & Reproduction (Blüte & Fortpflanzung)
// 5 rounds: Flower parts MCQ, Pollination MCQ, Flower→Seed→Fruit order, Seed dispersal MCQ, Quick review

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion { emoji: string; question: string; choices: string[]; answer: string; }
interface Props { color: string; lang?: string; onDone: (score: number, total: number) => void; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite — try again",
    r1Title: "Flower Parts", r1Hint: "Identify the part of the flower being described.",
    r2Title: "Pollination", r2Hint: "How does pollen travel to fertilize this flower?",
    r3Title: "Seed Journey", r3Hint: "Tap the stages of plant reproduction in the correct order.",
    r3InProgress: "Keep going!", r3Done: "Correct order! ✓",
    r4Title: "Seed Dispersal", r4Hint: "How are the seeds of this plant spread?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    petal: "Petal 🌺", stamen: "Stamen (male) 🟡", pistil: "Pistil (female) 🌿", sepal: "Sepal 🍃",
    q_flower_color: "🌺 Which part of the flower attracts insects with its color and smell?",
    q_flower_pollen: "🟡 Which part produces pollen grains?",
    q_flower_seed: "🌿 Which part contains the ovule that becomes a seed after fertilization?",
    q_flower_protect: "🍃 Which part protects the flower bud before it opens?",
    insects: "Insects 🐝", wind: "Wind 💨", water: "Water 💧", self: "Self-pollination 🌱",
    q_poll_bee: "🐝 A bee lands on a flower, collects nectar, and carries pollen to another flower. How is this flower pollinated?",
    q_poll_grass: "🌾 Grass flowers produce huge amounts of light pollen that floats in the air. How is grass pollinated?",
    q_poll_aquatic: "🌊 A water plant releases pollen that drifts along the surface. How is it pollinated?",
    flower_lbl: "Flower blooms 🌸", pollen_lbl: "Pollen reaches pistil 🟡", seed_lbl: "Seed forms 🌰", fruit_lbl: "Fruit develops 🍎",
    animal_fur: "Sticks to animal fur 🦊", wind_disp: "Carried by wind 💨", water_disp: "Carried by water 🌊", eaten: "Eaten & spread by animals 🐦",
    q_disp_dandelion: "🌼 A dandelion seed has a fluffy parachute. How is it dispersed?",
    q_disp_apple: "🍎 An apple is eaten by a bird and its seeds are dropped far away. How dispersed?",
    q_disp_burr: "🌿 A burr plant's seeds have tiny hooks that attach to animal fur. How dispersed?",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Blütenteile", r1Hint: "Bestimme den beschriebenen Teil der Blüte.",
    r2Title: "Bestäubung", r2Hint: "Wie gelangt der Pollen zur Befruchtung dieser Blüte?",
    r3Title: "Samenreise", r3Hint: "Tippe die Stadien der Pflanzenfortpflanzung in der richtigen Reihenfolge.",
    r3InProgress: "Weiter so!", r3Done: "Richtige Reihenfolge! ✓",
    r4Title: "Samenverbreitung", r4Hint: "Wie werden die Samen dieser Pflanze verbreitet?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    petal: "Blütenblatt 🌺", stamen: "Staubblatt (männlich) 🟡", pistil: "Stempel (weiblich) 🌿", sepal: "Kelchblatt 🍃",
    q_flower_color: "🌺 Welcher Blütenteil zieht Insekten durch Farbe und Duft an?",
    q_flower_pollen: "🟡 Welcher Teil produziert Pollenkörner?",
    q_flower_seed: "🌿 Welcher Teil enthält die Samenanlage, die nach der Befruchtung zum Samen wird?",
    q_flower_protect: "🍃 Welcher Teil schützt die Blütenknospe bevor sie sich öffnet?",
    insects: "Insekten 🐝", wind: "Wind 💨", water: "Wasser 💧", self: "Selbstbestäubung 🌱",
    q_poll_bee: "🐝 Eine Biene landet auf einer Blüte, sammelt Nektar und trägt Pollen zur nächsten. Wie wird diese Blüte bestäubt?",
    q_poll_grass: "🌾 Gräser produzieren große Mengen leichten Pollen, der in der Luft treibt. Wie werden Gräser bestäubt?",
    q_poll_aquatic: "🌊 Eine Wasserpflanze gibt Pollen ab, der an der Oberfläche treibt. Wie wird sie bestäubt?",
    flower_lbl: "Blüte öffnet sich 🌸", pollen_lbl: "Pollen erreicht den Stempel 🟡", seed_lbl: "Samen bildet sich 🌰", fruit_lbl: "Frucht entwickelt sich 🍎",
    animal_fur: "Haftet am Tierfell 🦊", wind_disp: "Vom Wind getragen 💨", water_disp: "Vom Wasser getragen 🌊", eaten: "Von Tieren gefressen & verbreitet 🐦",
    q_disp_dandelion: "🌼 Ein Löwenzahnsamen hat einen Fallschirm aus Fäden. Wie wird er verbreitet?",
    q_disp_apple: "🍎 Ein Apfel wird von einem Vogel gefressen und die Samen weit weg fallen gelassen. Wie?",
    q_disp_burr: "🌿 Die Samen der Klette haben Häkchen, die sich am Tierfell festhalten. Wie?",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Virág részei", r1Hint: "Azonosítsd a leírt virágrészt.",
    r2Title: "Beporzás", r2Hint: "Hogyan jut el a pollen a virág termékenyítéséhez?",
    r3Title: "A mag útja", r3Hint: "Koppints a növényi szaporodás szakaszaira helyes sorrendben.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes sorrend! ✓",
    r4Title: "Magszórás", r4Hint: "Hogyan terjednek ennek a növénynek a magjai?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    petal: "Szirom 🌺", stamen: "Porzó (hím) 🟡", pistil: "Termő (nőstény) 🌿", sepal: "Csészelevél 🍃",
    q_flower_color: "🌺 Melyik virágrész vonzza a rovarokat színével és illatával?",
    q_flower_pollen: "🟡 Melyik rész termeli a pollenszemeket?",
    q_flower_seed: "🌿 Melyik rész tartalmazza a magkezdeményt, ami megtermékenyülés után maggá válik?",
    q_flower_protect: "🍃 Melyik rész védi a virágbimbót, mielőtt kinyílik?",
    insects: "Rovarok 🐝", wind: "Szél 💨", water: "Víz 💧", self: "Önbeporzás 🌱",
    q_poll_bee: "🐝 A méh virágra száll, nektárt gyűjt és pollent visz a következő virágra. Hogyan beporzódik?",
    q_poll_grass: "🌾 A pázsitfűfélék nagy mennyiségű könnyű pollent termelnek, ami a levegőben lebeg. Hogyan?",
    q_poll_aquatic: "🌊 Egy vízi növény pollent bocsát ki, ami a felszínen úszik. Hogyan beporzódik?",
    flower_lbl: "Virág kinyílik 🌸", pollen_lbl: "Pollen eléri a termőt 🟡", seed_lbl: "Mag kialakul 🌰", fruit_lbl: "Termés fejlődik 🍎",
    animal_fur: "Állat szőrzetéhez tapad 🦊", wind_disp: "Szél viszi 💨", water_disp: "Víz viszi 🌊", eaten: "Állatok eszik és terjesztik 🐦",
    q_disp_dandelion: "🌼 A pitypang magnak ejtőernyős megjelenése van. Hogyan terjed?",
    q_disp_apple: "🍎 Az almát egy madár eszi meg, a magokat messzire ejti. Hogyan terjed?",
    q_disp_burr: "🌿 A bojtorján magjain apró horgok vannak, amik az állat szőrébe akadnak. Hogyan terjed?",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Părțile florii", r1Hint: "Identifică partea florii descrisă.",
    r2Title: "Polenizarea", r2Hint: "Cum ajunge polenul pentru a fertiliza această floare?",
    r3Title: "Drumul seminței", r3Hint: "Atinge etapele reproducerii plantelor în ordinea corectă.",
    r3InProgress: "Continuă!", r3Done: "Ordine corectă! ✓",
    r4Title: "Răspândirea semințelor", r4Hint: "Cum se răspândesc semințele acestei plante?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    petal: "Petală 🌺", stamen: "Stamină (masculin) 🟡", pistil: "Pistil (feminin) 🌿", sepal: "Sepalā 🍃",
    q_flower_color: "🌺 Care parte a florii atrage insectele prin culoare și miros?",
    q_flower_pollen: "🟡 Care parte produce granule de polen?",
    q_flower_seed: "🌿 Care parte conține ovulul care devine sămânță după fertilizare?",
    q_flower_protect: "🍃 Care parte protejează bobocul florii înainte să se deschidă?",
    insects: "Insecte 🐝", wind: "Vânt 💨", water: "Apă 💧", self: "Autopolenizare 🌱",
    q_poll_bee: "🐝 O albină aterizează pe o floare, culege nectar și duce polenul la alta. Cum e polenizată?",
    q_poll_grass: "🌾 Ierburile produc cantități mari de polen ușor care plutește în aer. Cum sunt polenizate?",
    q_poll_aquatic: "🌊 O plantă acvatică eliberează polen care plutește pe suprafață. Cum e polenizată?",
    flower_lbl: "Floarea se deschide 🌸", pollen_lbl: "Polenul ajunge la pistil 🟡", seed_lbl: "Se formează sămânța 🌰", fruit_lbl: "Se dezvoltă fructul 🍎",
    animal_fur: "Se prinde de blana animalelor 🦊", wind_disp: "Purtat de vânt 💨", water_disp: "Purtat de apă 🌊", eaten: "Mâncat și răspândit de animale 🐦",
    q_disp_dandelion: "🌼 O sămânță de păpădie are un parașut de fire moi. Cum se răspândește?",
    q_disp_apple: "🍎 Un măr e mâncat de o pasăre și semințele sunt lăsate departe. Cum?",
    q_disp_burr: "🌿 Semințele de scaieți au cârlige mici care se prind de blana animalelor. Cum?",
  },
};

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

const PART_POOL: MCQQuestion[] = [
  { emoji: "🌺", question: "q_flower_color", choices: shuffle(["petal","stamen","pistil","sepal"]), answer: "petal" },
  { emoji: "🟡", question: "q_flower_pollen", choices: shuffle(["stamen","petal","pistil","sepal"]), answer: "stamen" },
  { emoji: "🌿", question: "q_flower_seed", choices: shuffle(["pistil","petal","stamen","sepal"]), answer: "pistil" },
  { emoji: "🍃", question: "q_flower_protect", choices: shuffle(["sepal","petal","stamen","pistil"]), answer: "sepal" },
];
const POLL_POOL: MCQQuestion[] = [
  { emoji: "🐝", question: "q_poll_bee", choices: shuffle(["insects","wind","water","self"]), answer: "insects" },
  { emoji: "🌾", question: "q_poll_grass", choices: shuffle(["wind","insects","water","self"]), answer: "wind" },
  { emoji: "🌊", question: "q_poll_aquatic", choices: shuffle(["water","wind","insects","self"]), answer: "water" },
];
const DISP_POOL: MCQQuestion[] = [
  { emoji: "🌼", question: "q_disp_dandelion", choices: shuffle(["wind_disp","eaten","animal_fur","water_disp"]), answer: "wind_disp" },
  { emoji: "🍎", question: "q_disp_apple", choices: shuffle(["eaten","wind_disp","animal_fur","water_disp"]), answer: "eaten" },
  { emoji: "🌿", question: "q_disp_burr", choices: shuffle(["animal_fur","wind_disp","eaten","water_disp"]), answer: "animal_fur" },
];
const SEED_ORDER = ["flower_lbl","pollen_lbl","seed_lbl","fruit_lbl"] as const;
const TOTAL_ROUNDS = 5;

function FlowerExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(PART_POOL), []);
  const r2Qs = useMemo(() => shuffle(POLL_POOL), []);
  const r4Qs = useMemo(() => shuffle(DISP_POOL), []);
  const r5Qs = useMemo(() => shuffle([...PART_POOL,...POLL_POOL,...DISP_POOL]).slice(0,3), []);
  const [scrambled] = useState(() => shuffle([...SEED_ORDER]));
  const [round, setRound] = useState(0); const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null); const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]); const [orderWrong, setOrderWrong] = useState<string|null>(null);
  const scoreRef = useRef(0); const totalRef = useRef(0);
  const resetSub = useCallback(() => { setSelected(null); setLocked(false); }, []);
  const advanceRound = useCallback(() => { if (round >= TOTAL_ROUNDS-1) onDone(scoreRef.current, totalRef.current); else { setRound(r=>r+1); setSubIdx(0); resetSub(); setTapped([]); setOrderWrong(null); } }, [round,onDone,resetSub]);
  const advanceSub = useCallback((qs: MCQQuestion[], isLast=false) => { if (subIdx<qs.length-1) { setSubIdx(i=>i+1); resetSub(); } else { if (isLast) onDone(scoreRef.current,totalRef.current); else advanceRound(); } }, [subIdx,advanceRound,onDone,resetSub]);
  const handleSelect = useCallback((key: string, correct: string) => { if (locked) return; setSelected(key); setLocked(true); totalRef.current+=1; if (key===correct) scoreRef.current+=1; }, [locked]);
  const handleOrderTap = useCallback((key: string) => { if (tapped.includes(key)) return; const expected=SEED_ORDER[tapped.length]; if (key===expected) { const next=[...tapped,key]; setTapped(next); setOrderWrong(null); if (next.length===SEED_ORDER.length) { totalRef.current+=1; scoreRef.current+=1; setTimeout(()=>advanceRound(),700); } } else { setOrderWrong(key); totalRef.current+=1; setTimeout(()=>setOrderWrong(null),600); } }, [tapped,advanceRound]);
  const renderNext = (onNext: ()=>void, isFinish=false) => <motion.button onClick={onNext} className="w-full max-w-xs py-3 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2" style={{background:`linear-gradient(135deg,${color}55,${color}99)`,border:`2px solid ${color}`}} whileTap={{scale:0.97}} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}>{isFinish?t.finish:t.next} <ChevronRight size={16}/></motion.button>;
  const renderMCQ = (qs: MCQQuestion[], title: string, hint: string, isLast=false) => { const q=qs[subIdx]; const isCorrect=locked&&selected===q.answer; return (<>
    {qs.length>1&&<div className="flex gap-1 justify-center mb-1">{qs.map((_,i)=><div key={i} className="w-2 h-2 rounded-full transition-colors" style={{background:i<subIdx?"#00FF88":i===subIdx?color:"rgba(255,255,255,0.15)"}}/>)}</div>}
    <p className="text-xl font-black text-white text-center">{title}</p>
    <p className="text-white/60 text-xs font-bold text-center px-4">{hint}</p>
    <div className="w-full max-w-xs rounded-2xl px-4 py-4 text-center" style={{background:"rgba(255,255,255,0.06)",border:`1.5px solid ${color}33`}}><p className="text-base font-semibold text-white/90 leading-snug">{t[q.question]}</p></div>
    <div className="flex flex-col gap-2 w-full max-w-xs">{q.choices.map(k=>{const isThis=selected===k,isRight=k===q.answer; let bg="rgba(255,255,255,0.06)",border="rgba(255,255,255,0.1)",tc="text-white"; if(locked){if(isRight){bg=`${color}33`;border=color;}else if(isThis){bg="#FF2D7833";border="#FF2D78";tc="text-white/70";}}else if(isThis){bg=`${color}22`;border=color;} return <motion.button key={k} onClick={()=>handleSelect(k,q.answer)} disabled={locked} className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${tc}`} style={{background:bg,border:`2px solid ${border}`}} whileTap={locked?{}:{scale:0.97}}>{t[k]}</motion.button>;})}</div>
    {locked&&<motion.p initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} className="text-sm font-bold text-center" style={{color:isCorrect?"#00FF88":"#FF2D78"}}>{isCorrect?t.correct:t.wrong}</motion.p>}
    {locked&&renderNext(()=>advanceSub(qs,isLast),isLast&&subIdx===qs.length-1)}
  </>); };
  const renderOrder = () => { const allDone=tapped.length===SEED_ORDER.length; return (<>
    <p className="text-xl font-black text-white text-center">{t.r3Title}</p>
    <p className="text-white/60 text-xs font-bold text-center px-4">{t.r3Hint}</p>
    <div className="flex gap-2 flex-wrap justify-center min-h-[2rem]">{tapped.map((k,i)=><motion.span key={k} initial={{scale:0.7,opacity:0}} animate={{scale:1,opacity:1}} className="px-3 py-1 rounded-full text-xs font-black text-white" style={{background:`${color}55`,border:`1.5px solid ${color}`}}>{i+1}. {t[k]}</motion.span>)}</div>
    <p className="text-xs font-bold text-center" style={{color:allDone?"#00FF88":"rgba(255,255,255,0.4)"}}>{allDone?t.r3Done:t.r3InProgress}</p>
    <div className="flex flex-col gap-2 w-full max-w-xs">{scrambled.map(key=>{const done=tapped.includes(key),isWrong=orderWrong===key; return <motion.button key={key} onClick={()=>handleOrderTap(key)} disabled={done} className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white" style={{background:done?`${color}22`:"rgba(255,255,255,0.06)",border:`2px solid ${done?color:isWrong?"#FF2D78":"rgba(255,255,255,0.1)"}`,opacity:done?0.45:1}} animate={isWrong?{x:[-6,6,-4,4,0]}:{}} transition={{duration:0.35}} whileTap={done?{}:{scale:0.97}}>{t[key]}</motion.button>;})}</div>
  </>); };
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-auto">
      <div className="flex justify-center gap-1.5 pt-4 pb-2">{Array.from({length:TOTAL_ROUNDS},(_,i)=><div key={i} className="w-2.5 h-2.5 rounded-full transition-colors" style={{background:i<round?"#00FF88":i===round?color:"rgba(255,255,255,0.15)"}}/>)}</div>
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
export default memo(FlowerExplorer);
