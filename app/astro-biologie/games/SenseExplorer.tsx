"use client";
// SenseExplorer — Island i8: Sense Organs (Sinnesorgane)
// 5 rounds: Which sense organ? MCQ, Eye anatomy MCQ, Sense matching order, Taste & smell MCQ, Quick review

import { memo, useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface MCQQuestion { emoji: string; question: string; choices: string[]; answer: string; }
interface Props { color: string; lang?: string; onDone: (score: number, total: number) => void; }

const LABELS: Record<string, Record<string, string>> = {
  en: {
    next: "Next", finish: "Finish", correct: "Correct! ✓", wrong: "Not quite — try again",
    r1Title: "Which Sense Organ?", r1Hint: "Match the sensation to the correct sense organ.",
    r2Title: "How the Eye Works", r2Hint: "Identify the part of the eye being described.",
    r3Title: "5 Senses", r3Hint: "Tap the five senses and their organs in order: sight → hearing → smell → taste → touch.",
    r3InProgress: "Keep going!", r3Done: "All five senses! ✓",
    r4Title: "Taste & Smell", r4Hint: "Answer questions about taste and smell.",
    r5Title: "Quick Review", r5Hint: "Mixed questions from all rounds.",
    eye: "Eye 👁️", ear: "Ear 👂", nose: "Nose 👃", tongue: "Tongue 👅", skin: "Skin 🤚",
    q_sense_light: "👁️ Which sense organ detects light and color?",
    q_sense_sound: "👂 Which sense organ detects sound waves?",
    q_sense_smell: "👃 Which sense organ detects chemicals in the air?",
    q_sense_taste: "👅 Which sense organ detects chemicals dissolved in saliva?",
    q_sense_touch: "🤚 Which sense organ detects pressure, heat, cold, and pain?",
    pupil: "Pupil (controls light entry) ⚫", lens: "Lens (focuses image) 🔍", retina: "Retina (receives image) 📸", optic_nerve: "Optic nerve (sends signal to brain) 🧠",
    q_eye_dark: "⚫ Which part of the eye gets bigger in the dark to let in more light?",
    q_eye_focus: "🔍 Which part of the eye bends light to create a sharp image?",
    q_eye_image: "📸 Where is the final image formed inside the eye?",
    sight_lbl: "Sight — Eyes 👁️", hearing_lbl: "Hearing — Ears 👂", smell_lbl: "Smell — Nose 👃", taste_lbl: "Taste — Tongue 👅", touch_lbl: "Touch — Skin 🤚",
    sweet: "Sweet 🍬", sour: "Sour 🍋", salty: "Salty 🧂", bitter: "Bitter ☕", umami: "Savory/Umami 🍖",
    q_taste_lemon: "🍋 What basic taste does lemon juice produce?",
    q_taste_sugar: "🍬 What basic taste does sugar produce?",
    q_taste_coffee: "☕ What basic taste does unsweetened coffee produce?",
    q_smell_warning: "🦨 Why is the sense of smell important for survival?",
    detects_danger: "Detects dangerous smells (gas, fire, rotten food) ⚠️",
    makes_hungry: "Makes you feel hungry 🍽️",
    helps_sleep: "Helps you fall asleep 😴",
    improves_vision: "Improves vision at night 👁️",
  },
  de: {
    next: "Weiter", finish: "Fertig", correct: "Richtig! ✓", wrong: "Nicht ganz — versuch es nochmal",
    r1Title: "Welches Sinnesorgan?", r1Hint: "Ordne die Empfindung dem richtigen Sinnesorgan zu.",
    r2Title: "Wie das Auge funktioniert", r2Hint: "Bestimme den beschriebenen Teil des Auges.",
    r3Title: "5 Sinne", r3Hint: "Tippe die fünf Sinne in der Reihenfolge: Sehen → Hören → Riechen → Schmecken → Tasten.",
    r3InProgress: "Weiter so!", r3Done: "Alle fünf Sinne! ✓",
    r4Title: "Schmecken & Riechen", r4Hint: "Beantworte Fragen über Geschmack und Geruch.",
    r5Title: "Schnelle Wiederholung", r5Hint: "Gemischte Fragen aus allen Runden.",
    eye: "Auge 👁️", ear: "Ohr 👂", nose: "Nase 👃", tongue: "Zunge 👅", skin: "Haut 🤚",
    q_sense_light: "👁️ Welches Sinnesorgan erkennt Licht und Farbe?",
    q_sense_sound: "👂 Welches Sinnesorgan erkennt Schallwellen?",
    q_sense_smell: "👃 Welches Sinnesorgan erkennt Chemikalien in der Luft?",
    q_sense_taste: "👅 Welches Sinnesorgan erkennt Chemikalien im Speichel?",
    q_sense_touch: "🤚 Welches Sinnesorgan erkennt Druck, Wärme, Kälte und Schmerz?",
    pupil: "Pupille (regelt Lichteinfall) ⚫", lens: "Linse (fokussiert Bild) 🔍", retina: "Netzhaut (empfängt Bild) 📸", optic_nerve: "Sehnerv (sendet Signal ans Gehirn) 🧠",
    q_eye_dark: "⚫ Welcher Teil des Auges wird im Dunkeln größer, um mehr Licht einzulassen?",
    q_eye_focus: "🔍 Welcher Teil des Auges bündelt das Licht zu einem scharfen Bild?",
    q_eye_image: "📸 Wo wird das Bild im Inneren des Auges gebildet?",
    sight_lbl: "Sehen — Augen 👁️", hearing_lbl: "Hören — Ohren 👂", smell_lbl: "Riechen — Nase 👃", taste_lbl: "Schmecken — Zunge 👅", touch_lbl: "Tasten — Haut 🤚",
    sweet: "Süß 🍬", sour: "Sauer 🍋", salty: "Salzig 🧂", bitter: "Bitter ☕", umami: "Herzhaft/Umami 🍖",
    q_taste_lemon: "🍋 Welchen Grundgeschmack erzeugt Zitronensaft?",
    q_taste_sugar: "🍬 Welchen Grundgeschmack erzeugt Zucker?",
    q_taste_coffee: "☕ Welchen Grundgeschmack erzeugt ungesüßter Kaffee?",
    q_smell_warning: "🦨 Warum ist der Geruchssinn für das Überleben wichtig?",
    detects_danger: "Erkennt gefährliche Gerüche (Gas, Feuer, verdorbene Lebensmittel) ⚠️",
    makes_hungry: "Macht hungry 🍽️",
    helps_sleep: "Hilft beim Einschlafen 😴",
    improves_vision: "Verbessert die Nachtsicht 👁️",
  },
  hu: {
    next: "Tovább", finish: "Befejezés", correct: "Helyes! ✓", wrong: "Nem egészen — próbáld újra",
    r1Title: "Melyik érzékszerv?", r1Hint: "Párosítsd az érzékelést a megfelelő érzékszervvel.",
    r2Title: "Hogyan működik a szem?", r2Hint: "Azonosítsd a leírt szemrészt.",
    r3Title: "5 érzék", r3Hint: "Koppints az öt érzékre sorrendben: látás → hallás → szaglás → ízlelés → tapintás.",
    r3InProgress: "Csak így tovább!", r3Done: "Mind az öt érzék! ✓",
    r4Title: "Ízlelés és szaglás", r4Hint: "Válaszolj az ízlelésről és szaglásról szóló kérdésekre.",
    r5Title: "Gyors összefoglalás", r5Hint: "Vegyes kérdések az összes körből.",
    eye: "Szem 👁️", ear: "Fül 👂", nose: "Orr 👃", tongue: "Nyelv 👅", skin: "Bőr 🤚",
    q_sense_light: "👁️ Melyik érzékszerv érzékeli a fényt és a színeket?",
    q_sense_sound: "👂 Melyik érzékszerv érzékeli a hangokat?",
    q_sense_smell: "👃 Melyik érzékszerv érzékeli a levegőben lévő vegyületeket?",
    q_sense_taste: "👅 Melyik érzékszerv érzékeli a nyálban oldott vegyületeket?",
    q_sense_touch: "🤚 Melyik érzékszerv érzékeli a nyomást, hőt, hideget és fájdalmat?",
    pupil: "Pupilla (fénybeengedés szabályozása) ⚫", lens: "Lencse (kép fókuszálása) 🔍", retina: "Retina (kép befogadása) 📸", optic_nerve: "Látóideg (jel az agyba) 🧠",
    q_eye_dark: "⚫ A szem melyik része tágul sötétben, hogy több fényt engedjen be?",
    q_eye_focus: "🔍 A szem melyik része töri meg a fényt éles kép létrehozásához?",
    q_eye_image: "📸 Hol keletkezik a végső kép a szem belsejében?",
    sight_lbl: "Látás — Szem 👁️", hearing_lbl: "Hallás — Fül 👂", smell_lbl: "Szaglás — Orr 👃", taste_lbl: "Ízlelés — Nyelv 👅", touch_lbl: "Tapintás — Bőr 🤚",
    sweet: "Édes 🍬", sour: "Savanyú 🍋", salty: "Sós 🧂", bitter: "Keserű ☕", umami: "Umami/ízletes 🍖",
    q_taste_lemon: "🍋 Milyen alapízt produkál a citromlé?",
    q_taste_sugar: "🍬 Milyen alapízt produkál a cukor?",
    q_taste_coffee: "☕ Milyen alapízt produkál a cukrozatlan kávé?",
    q_smell_warning: "🦨 Miért fontos a szaglás az életben maradáshoz?",
    detects_danger: "Érzékeli a veszélyes szagokat (gáz, tűz, romlott étel) ⚠️",
    makes_hungry: "Éhséget okoz 🍽️",
    helps_sleep: "Segít elaludni 😴",
    improves_vision: "Javítja az éjszakai látást 👁️",
  },
  ro: {
    next: "Înainte", finish: "Gata", correct: "Corect! ✓", wrong: "Nu chiar — mai încearcă",
    r1Title: "Ce organ de simț?", r1Hint: "Asociază senzația cu organul de simț corect.",
    r2Title: "Cum funcționează ochiul", r2Hint: "Identifică partea ochiului descrisă.",
    r3Title: "5 Simțuri", r3Hint: "Atinge cele cinci simțuri în ordine: văz → auz → miros → gust → pipăit.",
    r3InProgress: "Continuă!", r3Done: "Toate cele cinci simțuri! ✓",
    r4Title: "Gust și miros", r4Hint: "Răspunde la întrebări despre gust și miros.",
    r5Title: "Recapitulare rapidă", r5Hint: "Întrebări mixte din toate rundele.",
    eye: "Ochi 👁️", ear: "Ureche 👂", nose: "Nas 👃", tongue: "Limbă 👅", skin: "Piele 🤚",
    q_sense_light: "👁️ Ce organ de simț detectează lumina și culoarea?",
    q_sense_sound: "👂 Ce organ de simț detectează undele sonore?",
    q_sense_smell: "👃 Ce organ de simț detectează substanțe chimice din aer?",
    q_sense_taste: "👅 Ce organ de simț detectează substanțe chimice din salivă?",
    q_sense_touch: "🤚 Ce organ de simț detectează presiunea, căldura, frigul și durerea?",
    pupil: "Pupilă (controlează intrarea luminii) ⚫", lens: "Cristalin (focalizează imaginea) 🔍", retina: "Retină (primește imaginea) 📸", optic_nerve: "Nerv optic (trimite semnal la creier) 🧠",
    q_eye_dark: "⚫ Ce parte a ochiului se mărește în întuneric pentru a lăsa mai multă lumină?",
    q_eye_focus: "🔍 Ce parte a ochiului îndoaie lumina pentru a crea o imagine clară?",
    q_eye_image: "📸 Unde se formează imaginea finală în interiorul ochiului?",
    sight_lbl: "Văz — Ochi 👁️", hearing_lbl: "Auz — Urechi 👂", smell_lbl: "Miros — Nas 👃", taste_lbl: "Gust — Limbă 👅", touch_lbl: "Pipăit — Piele 🤚",
    sweet: "Dulce 🍬", sour: "Acru 🍋", salty: "Sărat 🧂", bitter: "Amar ☕", umami: "Savuros/Umami 🍖",
    q_taste_lemon: "🍋 Ce gust de bază produce sucul de lămâie?",
    q_taste_sugar: "🍬 Ce gust de bază produce zahărul?",
    q_taste_coffee: "☕ Ce gust de bază produce cafeaua neîndulcită?",
    q_smell_warning: "🦨 De ce simțul mirosului este important pentru supraviețuire?",
    detects_danger: "Detectează mirosuri periculoase (gaz, foc, alimente stricate) ⚠️",
    makes_hungry: "Te face să-ți fie foame 🍽️",
    helps_sleep: "Te ajută să adormi 😴",
    improves_vision: "Îmbunătățește vederea nocturnă 👁️",
  },
};

function shuffle<T>(arr: T[]): T[] { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }

const SENSE_POOL: MCQQuestion[] = [
  { emoji: "👁️", question: "q_sense_light", choices: shuffle(["eye","ear","nose","tongue","skin"]), answer: "eye" },
  { emoji: "👂", question: "q_sense_sound", choices: shuffle(["ear","eye","nose","tongue","skin"]), answer: "ear" },
  { emoji: "👃", question: "q_sense_smell", choices: shuffle(["nose","eye","ear","tongue","skin"]), answer: "nose" },
  { emoji: "👅", question: "q_sense_taste", choices: shuffle(["tongue","eye","ear","nose","skin"]), answer: "tongue" },
  { emoji: "🤚", question: "q_sense_touch", choices: shuffle(["skin","eye","ear","nose","tongue"]), answer: "skin" },
];
const EYE_POOL: MCQQuestion[] = [
  { emoji: "⚫", question: "q_eye_dark", choices: shuffle(["pupil","lens","retina","optic_nerve"]), answer: "pupil" },
  { emoji: "🔍", question: "q_eye_focus", choices: shuffle(["lens","pupil","retina","optic_nerve"]), answer: "lens" },
  { emoji: "📸", question: "q_eye_image", choices: shuffle(["retina","lens","pupil","optic_nerve"]), answer: "retina" },
];
const TASTE_POOL: MCQQuestion[] = [
  { emoji: "🍋", question: "q_taste_lemon", choices: shuffle(["sour","sweet","salty","bitter"]), answer: "sour" },
  { emoji: "🍬", question: "q_taste_sugar", choices: shuffle(["sweet","sour","salty","bitter"]), answer: "sweet" },
  { emoji: "☕", question: "q_taste_coffee", choices: shuffle(["bitter","sweet","sour","salty"]), answer: "bitter" },
  { emoji: "🦨", question: "q_smell_warning", choices: shuffle(["detects_danger","makes_hungry","helps_sleep","improves_vision"]), answer: "detects_danger" },
];
const SENSE_ORDER = ["sight_lbl","hearing_lbl","smell_lbl","taste_lbl","touch_lbl"] as const;
const TOTAL_ROUNDS = 5;

function SenseExplorer({ color, lang = "de", onDone }: Props) {
  const t = LABELS[lang] ?? LABELS.de;
  const r1Qs = useMemo(() => shuffle(SENSE_POOL), []);
  const r2Qs = useMemo(() => shuffle(EYE_POOL), []);
  const r4Qs = useMemo(() => shuffle(TASTE_POOL), []);
  const r5Qs = useMemo(() => shuffle([...SENSE_POOL,...EYE_POOL,...TASTE_POOL]).slice(0,3), []);
  const [scrambled] = useState(() => shuffle([...SENSE_ORDER]));
  const [round, setRound] = useState(0); const [subIdx, setSubIdx] = useState(0);
  const [selected, setSelected] = useState<string|null>(null); const [locked, setLocked] = useState(false);
  const [tapped, setTapped] = useState<string[]>([]); const [orderWrong, setOrderWrong] = useState<string|null>(null);
  const scoreRef = useRef(0); const totalRef = useRef(0);
  const resetSub = useCallback(() => { setSelected(null); setLocked(false); }, []);
  const advanceRound = useCallback(() => { if(round>=TOTAL_ROUNDS-1) onDone(scoreRef.current,totalRef.current); else { setRound(r=>r+1); setSubIdx(0); resetSub(); setTapped([]); setOrderWrong(null); } }, [round,onDone,resetSub]);
  const advanceSub = useCallback((qs: MCQQuestion[], isLast=false) => { if(subIdx<qs.length-1) { setSubIdx(i=>i+1); resetSub(); } else { if(isLast) onDone(scoreRef.current,totalRef.current); else advanceRound(); } }, [subIdx,advanceRound,onDone,resetSub]);
  const handleSelect = useCallback((key: string, correct: string) => { if(locked) return; setSelected(key); setLocked(true); totalRef.current+=1; if(key===correct) scoreRef.current+=1; }, [locked]);
  const handleOrderTap = useCallback((key: string) => { if(tapped.includes(key)) return; const expected=SENSE_ORDER[tapped.length]; if(key===expected) { const next=[...tapped,key]; setTapped(next); setOrderWrong(null); if(next.length===SENSE_ORDER.length) { totalRef.current+=1; scoreRef.current+=1; setTimeout(()=>advanceRound(),700); } } else { setOrderWrong(key); totalRef.current+=1; setTimeout(()=>setOrderWrong(null),600); } }, [tapped,advanceRound]);
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
  const renderOrder = () => { const allDone=tapped.length===SENSE_ORDER.length; return (<>
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
export default memo(SenseExplorer);
