"use client";
// NutritionExplorer — Island i9: Nutrition (Ernährung)
// 5 rounds: Which nutrient? MCQ, Digestive organs MCQ, Digestion order, Healthy/Unhealthy MCQ, Quick review

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion { emoji: string; question: string; choices: string[]; answer: string; }
interface Props { color: string; lang?: string; onDone: (score: number, total: number) => void; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite — try again",
    r1Title: "Which Nutrient?", r1Hint: "Identify what type of nutrient is being described.",
    r2Title: "Digestive Organs", r2Hint: "Which organ plays this role in digestion?",
    r3Title: "Digestion Journey", r3Hint: "Tap the path food takes through the body, from first to last.",
    r3InProgress: "Keep going!", r3Done: "Correct journey! ✓",
    r4Title: "Healthy Choices", r4Hint: "What makes this food healthy or unhealthy?",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    protein: "Protein 🥩", carbohydrate: "Carbohydrate 🍞", fat: "Fat 🧈", vitamin: "Vitamin 🍊", mineral: "Mineral 🦷",
    q_nut_muscle: "💪 Which nutrient builds and repairs muscles and tissues?",
    q_nut_energy: "⚡ Which nutrient is the body's main source of quick energy (sugars, starch)?",
    q_nut_store: "🧈 Which nutrient stores energy and insulates the body?",
    q_nut_immune: "🍊 Which nutrient supports the immune system and helps the body stay healthy (e.g. Vitamin C)?",
    q_nut_bones: "🦷 Which nutrient is needed for strong bones and teeth (e.g. calcium)?",
    mouth: "Mouth 👄", stomach: "Stomach 🫙", small_intestine: "Small intestine 🌀", large_intestine: "Large intestine 🔵", liver: "Liver 🟤",
    q_organ_chew: "👄 Where does digestion begin with chewing and saliva?",
    q_organ_acid: "🫙 Where is food broken down by strong acid?",
    q_organ_absorb: "🌀 Where are most nutrients absorbed into the bloodstream?",
    q_organ_bile: "🟤 Which organ produces bile to help digest fats?",
    mouth_lbl: "Mouth — chewing begins 👄", stomach_lbl: "Stomach — acid breakdown 🫙", sm_int_lbl: "Small intestine — nutrient absorption 🌀", lg_int_lbl: "Large intestine — water absorption 🔵",
    fiber_rich: "Rich in fiber and vitamins 🌿", high_sugar: "High in sugar and low in nutrients 🍬", high_fat: "High in unhealthy fat and salt 🍟", balanced: "Balanced protein, carbs and fat 🥗",
    q_health_broc: "🥦 Broccoli is full of vitamins, minerals and fiber. Why is it healthy?",
    q_health_chips: "🍟 Chips are high in fat and salt, low in vitamins. Why unhealthy?",
    q_health_candy: "🍬 Candy provides only sugar — no protein, no fiber, no vitamins. Why unhealthy?",
    q_health_egg: "🥚 An egg has protein, healthy fat, and vitamins. Why healthy?",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Welcher Nährstoff?", r1Hint: "Bestimme, welcher Nährstoff beschrieben wird.",
    r2Title: "Verdauungsorgane", r2Hint: "Welches Organ übernimmt diese Rolle bei der Verdauung?",
    r3Title: "Verdauungsreise", r3Hint: "Tippe den Weg der Nahrung durch den Körper, von Anfang bis Ende.",
    r3InProgress: "Weiter so!", r3Done: "Richtige Reise! ✓",
    r4Title: "Gesunde Entscheidungen", r4Hint: "Was macht dieses Lebensmittel gesund oder ungesund?",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    protein: "Eiweiß 🥩", carbohydrate: "Kohlenhydrate 🍞", fat: "Fett 🧈", vitamin: "Vitamin 🍊", mineral: "Mineral 🦷",
    q_nut_muscle: "💪 Welcher Nährstoff baut und repariert Muskeln und Gewebe?",
    q_nut_energy: "⚡ Welcher Nährstoff ist die wichtigste Energiequelle (Zucker, Stärke)?",
    q_nut_store: "🧈 Welcher Nährstoff speichert Energie und isoliert den Körper?",
    q_nut_immune: "🍊 Welcher Nährstoff stärkt das Immunsystem (z.B. Vitamin C)?",
    q_nut_bones: "🦷 Welcher Nährstoff wird für starke Knochen und Zähne benötigt (z.B. Calcium)?",
    mouth: "Mund 👄", stomach: "Magen 🫙", small_intestine: "Dünndarm 🌀", large_intestine: "Dickdarm 🔵", liver: "Leber 🟤",
    q_organ_chew: "👄 Wo beginnt die Verdauung mit Kauen und Speichel?",
    q_organ_acid: "🫙 Wo wird Nahrung durch starke Säure aufgeschlossen?",
    q_organ_absorb: "🌀 Wo werden die meisten Nährstoffe ins Blut aufgenommen?",
    q_organ_bile: "🟤 Welches Organ produziert Galle zur Fettverdauung?",
    mouth_lbl: "Mund — Kauen beginnt 👄", stomach_lbl: "Magen — Säureaufspaltung 🫙", sm_int_lbl: "Dünndarm — Nährstoffaufnahme 🌀", lg_int_lbl: "Dickdarm — Wasserrückresorption 🔵",
    fiber_rich: "Reich an Ballaststoffen und Vitaminen 🌿", high_sugar: "Viel Zucker, wenig Nährstoffe 🍬", high_fat: "Viel ungesundes Fett und Salz 🍟", balanced: "Ausgeglichenes Protein, Kohlenhydrate und Fett 🥗",
    q_health_broc: "🥦 Brokkoli enthält viele Vitamine, Mineralien und Ballaststoffe. Warum gesund?",
    q_health_chips: "🍟 Chips sind fett- und salzreich, vitaminarm. Warum ungesund?",
    q_health_candy: "🍬 Süßigkeiten liefern nur Zucker — kein Eiweiß, keine Ballaststoffe, keine Vitamine. Warum ungesund?",
    q_health_egg: "🥚 Ein Ei enthält Eiweiß, gesundes Fett und Vitamine. Warum gesund?",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Melyik tápanyag?", r1Hint: "Azonosítsd a leírt tápanyag típusát.",
    r2Title: "Emésztőszervek", r2Hint: "Melyik szerv játssza ezt a szerepet az emésztésben?",
    r3Title: "Az emésztés útja", r3Hint: "Koppints az étel útjára a testben, az elejétől a végéig.",
    r3InProgress: "Csak így tovább!", r3Done: "Helyes út! ✓",
    r4Title: "Egészséges döntések", r4Hint: "Mi teszi ezt az ételt egészségessé vagy egészségtelenné?",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    protein: "Fehérje 🥩", carbohydrate: "Szénhidrát 🍞", fat: "Zsír 🧈", vitamin: "Vitamin 🍊", mineral: "Ásványi anyag 🦷",
    q_nut_muscle: "💪 Melyik tápanyag építi és javítja az izmokat és szöveteket?",
    q_nut_energy: "⚡ Melyik tápanyag a test fő gyors energiaforrása (cukor, keményítő)?",
    q_nut_store: "🧈 Melyik tápanyag tárolja az energiát és szigeteli a testet?",
    q_nut_immune: "🍊 Melyik tápanyag erősíti az immunrendszert (pl. C-vitamin)?",
    q_nut_bones: "🦷 Melyik tápanyag kell az erős csontokhoz és fogakhoz (pl. kalcium)?",
    mouth: "Száj 👄", stomach: "Gyomor 🫙", small_intestine: "Vékonybél 🌀", large_intestine: "Vastagbél 🔵", liver: "Máj 🟤",
    q_organ_chew: "👄 Hol kezdődik az emésztés rágással és nyállal?",
    q_organ_acid: "🫙 Hol bontja le erős sav a táplálékot?",
    q_organ_absorb: "🌀 Hol szívódik fel a legtöbb tápanyag a véráramba?",
    q_organ_bile: "🟤 Melyik szerv termel epét a zsírok emésztéséhez?",
    mouth_lbl: "Száj — rágás kezdete 👄", stomach_lbl: "Gyomor — savas lebontás 🫙", sm_int_lbl: "Vékonybél — tápanyagfelszívódás 🌀", lg_int_lbl: "Vastagbél — vízvisszaszívás 🔵",
    fiber_rich: "Rostban és vitaminban gazdag 🌿", high_sugar: "Sok cukor, kevés tápanyag 🍬", high_fat: "Sok egészségtelen zsír és só 🍟", balanced: "Kiegyensúlyozott fehérje, szénhidrát és zsír 🥗",
    q_health_broc: "🥦 A brokkoli tele van vitaminokkal, ásványi anyagokkal és rosttal. Miért egészséges?",
    q_health_chips: "🍟 A chips zsíros és sós, vitaminszegény. Miért egészségtelen?",
    q_health_candy: "🍬 A cukorka csak cukrot ad — nincs fehérje, rost, vitamin. Miért egészségtelen?",
    q_health_egg: "🥚 A tojás fehérjét, egészséges zsírt és vitaminokat tartalmaz. Miért egészséges?",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Ce nutrient?", r1Hint: "Identifică tipul de nutrient descris.",
    r2Title: "Organe digestive", r2Hint: "Ce organ joacă acest rol în digestie?",
    r3Title: "Drumul digestiei", r3Hint: "Atinge drumul alimentelor prin corp, de la început până la sfârșit.",
    r3InProgress: "Continuă!", r3Done: "Drum corect! ✓",
    r4Title: "Alegeri sănătoase", r4Hint: "Ce face ca acest aliment să fie sănătos sau nesănătos?",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    protein: "Proteine 🥩", carbohydrate: "Carbohidrați 🍞", fat: "Grăsimi 🧈", vitamin: "Vitamina 🍊", mineral: "Mineral 🦷",
    q_nut_muscle: "💪 Ce nutrient construiește și repară mușchii și țesuturile?",
    q_nut_energy: "⚡ Ce nutrient este principala sursă de energie rapidă (zahăr, amidon)?",
    q_nut_store: "🧈 Ce nutrient stochează energie și izolează corpul?",
    q_nut_immune: "🍊 Ce nutrient susține sistemul imunitar (ex. Vitamina C)?",
    q_nut_bones: "🦷 Ce nutrient este necesar pentru oase și dinți puternici (ex. calciu)?",
    mouth: "Gură 👄", stomach: "Stomac 🫙", small_intestine: "Intestin subțire 🌀", large_intestine: "Intestin gros 🔵", liver: "Ficat 🟤",
    q_organ_chew: "👄 Unde începe digestia prin mestecat și salivă?",
    q_organ_acid: "🫙 Unde este descompusă hrana de acid puternic?",
    q_organ_absorb: "🌀 Unde sunt absorbiți cei mai mulți nutrienți în sânge?",
    q_organ_bile: "🟤 Ce organ produce bilă pentru a ajuta la digestia grăsimilor?",
    mouth_lbl: "Gura — mestecatul începe 👄", stomach_lbl: "Stomacul — descompunere acidă 🫙", sm_int_lbl: "Intestin subțire — absorbție nutrienți 🌀", lg_int_lbl: "Intestin gros — absorbție apă 🔵",
    fiber_rich: "Bogat în fibre și vitamine 🌿", high_sugar: "Mult zahăr, puțini nutrienți 🍬", high_fat: "Multă grăsime nesănătoasă și sare 🍟", balanced: "Proteine, carbohidrați și grăsimi echilibrate 🥗",
    q_health_broc: "🥦 Broccoli este plin de vitamine, minerale și fibre. De ce e sănătos?",
    q_health_chips: "🍟 Chipsurile sunt bogate în grăsimi și sare, sărace în vitamine. De ce nesănătos?",
    q_health_candy: "🍬 Bomboanele dau doar zahăr — fără proteine, fibre, vitamine. De ce nesănătos?",
    q_health_egg: "🥚 Un ou conține proteine, grăsimi sănătoase și vitamine. De ce sănătos?",
  },
};

function shuffle<T>(arr: T[]): T[] { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }

const NUT_POOL: MCQQuestion[] = [
  { emoji: "💪", question: "q_nut_muscle", choices: shuffle(["protein","carbohydrate","fat","vitamin"]), answer: "protein" },
  { emoji: "⚡", question: "q_nut_energy", choices: shuffle(["carbohydrate","protein","fat","mineral"]), answer: "carbohydrate" },
  { emoji: "🧈", question: "q_nut_store", choices: shuffle(["fat","protein","carbohydrate","vitamin"]), answer: "fat" },
  { emoji: "🍊", question: "q_nut_immune", choices: shuffle(["vitamin","mineral","protein","fat"]), answer: "vitamin" },
  { emoji: "🦷", question: "q_nut_bones", choices: shuffle(["mineral","vitamin","protein","fat"]), answer: "mineral" },
];
const ORGAN_POOL: MCQQuestion[] = [
  { emoji: "👄", question: "q_organ_chew", choices: shuffle(["mouth","stomach","small_intestine","large_intestine"]), answer: "mouth" },
  { emoji: "🫙", question: "q_organ_acid", choices: shuffle(["stomach","mouth","small_intestine","liver"]), answer: "stomach" },
  { emoji: "🌀", question: "q_organ_absorb", choices: shuffle(["small_intestine","mouth","stomach","large_intestine"]), answer: "small_intestine" },
  { emoji: "🟤", question: "q_organ_bile", choices: shuffle(["liver","stomach","small_intestine","large_intestine"]), answer: "liver" },
];
const HEALTH_POOL: MCQQuestion[] = [
  { emoji: "🥦", question: "q_health_broc", choices: shuffle(["fiber_rich","high_sugar","high_fat","balanced"]), answer: "fiber_rich" },
  { emoji: "🍟", question: "q_health_chips", choices: shuffle(["high_fat","fiber_rich","balanced","high_sugar"]), answer: "high_fat" },
  { emoji: "🍬", question: "q_health_candy", choices: shuffle(["high_sugar","fiber_rich","balanced","high_fat"]), answer: "high_sugar" },
  { emoji: "🥚", question: "q_health_egg", choices: shuffle(["balanced","fiber_rich","high_fat","high_sugar"]), answer: "balanced" },
];
const DIGEST_ORDER = ["mouth_lbl","stomach_lbl","sm_int_lbl","lg_int_lbl"] as const;
const TOTAL_ROUNDS = 5;

function NutritionExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(NUT_POOL), []);
  const r2Qs = useMemo(() => shuffle(ORGAN_POOL), []);
  const r4Qs = useMemo(() => shuffle(HEALTH_POOL), []);
  const r5Qs = useMemo(() => shuffle([...NUT_POOL,...ORGAN_POOL,...HEALTH_POOL]).slice(0,3), []);
  const [scrambled] = useState(() => shuffle([...DIGEST_ORDER]));
  const [round, setRound] = useState(0); const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null); const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]); const [orderWrong, setOrderWrong] = useState<string|null>(null);
  const scoreRef = useRef(0); const totalRef = useRef(0);
  const resetSub = useCallback(() => { setSelected(null); setLocked(false); }, []);
  const advanceRound = useCallback(() => { if(round>=TOTAL_ROUNDS-1) onDone(scoreRef.current,totalRef.current); else { setRound(r=>r+1); setSubIdx(0); resetSub(); setTapped([]); setOrderWrong(null); } }, [round,onDone,resetSub]);
  const advanceSub = useCallback((qs: MCQQuestion[], isLast=false) => { if(subIdx<qs.length-1) { setSubIdx(i=>i+1); resetSub(); } else { if(isLast) onDone(scoreRef.current,totalRef.current); else advanceRound(); } }, [subIdx,advanceRound,onDone,resetSub]);
  const handleSelect = useCallback((key: string, correct: string) => { if(locked) return; setSelected(key); setLocked(true); totalRef.current+=1; if(key===correct) scoreRef.current+=1; }, [locked]);
  const handleOrderTap = useCallback((key: string) => { if(tapped.includes(key)) return; const expected=DIGEST_ORDER[tapped.length]; if(key===expected) { const next=[...tapped,key]; setTapped(next); setOrderWrong(null); if(next.length===DIGEST_ORDER.length) { totalRef.current+=1; scoreRef.current+=1; setTimeout(()=>advanceRound(),700); } } else { setOrderWrong(key); totalRef.current+=1; setTimeout(()=>setOrderWrong(null),600); } }, [tapped,advanceRound]);
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
  const renderOrder = () => { const allDone=tapped.length===DIGEST_ORDER.length; return (<>
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
export default memo(NutritionExplorer);
