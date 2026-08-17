"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathLevelBar, useMathGameProgress } from '@/components/visual-lab/MathGameProgress';

export interface AngleLaserGameProps {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  onDone?: (score: number) => void;
}

const DICT = {
  en: {
    title: 'Angle Laser',
    titleJunior: 'Angle Adventure',
    titleMission: 'Angle Scanner',
    titleLab: 'Precision Angle Lab',
    fire: 'FIRE',
    next: 'Next',
    target: 'Target Angle',
    score: 'Score',
    hit: 'Direct Hit!',
    miss: 'Miss!',
    gameOver: 'Game Over!',
    playAgain: 'Play Again',
    levelDone: 'Level complete!',
    roundOver: 'Round complete - keep practicing',
    nextLevel: 'Next level',
    tryAgain: 'Try again',
    round: 'Round',
    visibleHint: 'Set the shown target angle.',
    hiddenHint: 'Read the beacon position from the angle grid.',
    check: 'CHECK',
    adjust: 'ADJUST',
    higher: 'Aim higher.',
    lower: 'Aim lower.',
    attempts: 'Attempts left',
  },
  de: {
    title: 'Winkellaser',
    titleJunior: 'Winkel-Abenteuer',
    titleMission: 'Winkel-Scanner',
    titleLab: 'Präzisionslabor Winkel',
    fire: 'FEUER',
    next: 'Weiter',
    target: 'Zielwinkel',
    score: 'Punkte',
    hit: 'Volltreffer!',
    miss: 'Daneben!',
    gameOver: 'Spiel vorbei!',
    playAgain: 'Nochmal spielen',
    levelDone: 'Level geschafft!',
    roundOver: 'Runde beendet - weiter üben',
    nextLevel: 'Nächstes Level',
    tryAgain: 'Erneut versuchen',
    round: 'Runde',
    visibleHint: 'Stelle den angezeigten Zielwinkel ein.',
    hiddenHint: 'Lies die Position der Bake am Winkelraster ab.',
    check: 'PRÜFEN',
    adjust: 'NACHSTELLEN',
    higher: 'Stelle einen größeren Winkel ein.',
    lower: 'Stelle einen kleineren Winkel ein.',
    attempts: 'Versuche übrig',
  },
  hu: {
    title: 'Lézerszög',
    titleJunior: 'Szögkaland',
    titleMission: 'Szögszkenner',
    titleLab: 'Precíziós szöglabor',
    fire: 'LÖVÉS',
    next: 'Tovább',
    target: 'Célszög',
    score: 'Pont',
    hit: 'Találat!',
    miss: 'Mellé!',
    gameOver: 'Játék vége!',
    playAgain: 'Új játék',
    levelDone: 'Szint teljesítve!',
    roundOver: 'A kör véget ért - gyakorolj tovább',
    nextLevel: 'Következő szint',
    tryAgain: 'Újrapróbálom',
    round: 'Kör',
    visibleHint: 'Állítsd be a megadott célszöget.',
    hiddenHint: 'Olvasd le a jeladó helyzetét a szögrácsról.',
    check: 'ELLENŐRZÉS',
    adjust: 'FINOMÍTÁS',
    higher: 'Nagyobb szöget állíts be.',
    lower: 'Kisebb szöget állíts be.',
    attempts: 'Maradék próbák',
  },
  ro: {
    title: 'Laser Unghiular',
    titleJunior: 'Aventura Unghiurilor',
    titleMission: 'Scaner de Unghiuri',
    titleLab: 'Laborator de Precizie',
    fire: 'FOC',
    next: 'Următorul',
    target: 'Unghi Țintă',
    score: 'Scor',
    hit: 'Lovit!',
    miss: 'Ratat!',
    gameOver: 'Joc Terminat!',
    playAgain: 'Joacă din nou',
    levelDone: 'Nivel complet!',
    roundOver: 'Rundă încheiată - continuă antrenamentul',
    nextLevel: 'Nivelul următor',
    tryAgain: 'Încearcă din nou',
    round: 'Rundă',
    visibleHint: 'Setează unghiul țintă afișat.',
    hiddenHint: 'Citește poziția balizei pe grila unghiulară.',
    check: 'VERIFICĂ',
    adjust: 'AJUSTEAZĂ',
    higher: 'Alege un unghi mai mare.',
    lower: 'Alege un unghi mai mic.',
    attempts: 'Încercări rămase',
  }
};

const getAngleOptions = (step: number): number[] => {
  const opts: number[] = [];
  for (let i = 0; i < 360; i += step) opts.push(i);
  return opts;
};

type AngleCategory = 'acute' | 'right' | 'obtuse' | 'straight' | 'reflex';
type AngleChallenge =
  | { kind: 'exact'; target: number }
  | { kind: 'category'; target: number; category: AngleCategory }
  | { kind: 'sum'; target: number; left: number; right: number }
  | { kind: 'relation'; target: number; given: number; whole: number }
  | { kind: 'calibration'; target: number; lower: number; upper: number };

const normalizeAngle = (angle: number) => ((angle % 360) + 360) % 360;

const categoryForAngle = (angle: number): AngleCategory | null => {
  const normalized = normalizeAngle(angle);
  if (normalized > 0 && normalized < 90) return 'acute';
  if (normalized === 90) return 'right';
  if (normalized > 90 && normalized < 180) return 'obtuse';
  if (normalized === 180) return 'straight';
  if (normalized > 180 && normalized < 360) return 'reflex';
  return null;
};

const categoryName = (category: AngleCategory, lang: AngleLaserGameProps['lang']) => {
  const names = {
    en: { acute: 'acute angle', right: 'right angle', obtuse: 'obtuse angle', straight: 'straight angle', reflex: 'reflex angle' },
    de: { acute: 'spitzen Winkel', right: 'rechten Winkel', obtuse: 'stumpfen Winkel', straight: 'gestreckten Winkel', reflex: 'überstumpfen Winkel' },
    hu: { acute: 'hegyesszöget', right: 'derékszöget', obtuse: 'tompaszöget', straight: 'egyenesszöget', reflex: 'homorú szöget' },
    ro: { acute: 'un unghi ascuțit', right: 'un unghi drept', obtuse: 'un unghi obtuz', straight: 'un unghi alungit', reflex: 'un unghi reflex' },
  };
  return names[lang][category];
};

const challengePrompt = (challenge: AngleChallenge, lang: AngleLaserGameProps['lang']) => {
  if (challenge.kind === 'exact') {
    return lang === 'de' ? `Stelle ${challenge.target}° ein.` : lang === 'hu' ? `Állíts be ${challenge.target}°-ot.` : lang === 'ro' ? `Setează ${challenge.target}°.` : `Set ${challenge.target}°.`;
  }
  if (challenge.kind === 'category') {
    const name = categoryName(challenge.category, lang);
    return lang === 'de' ? `Stelle einen ${name} ein.` : lang === 'hu' ? `Állíts be egy ${name}.` : lang === 'ro' ? `Setează ${name}.` : `Set a ${name}.`;
  }
  if (challenge.kind === 'sum') {
    return lang === 'de' ? `Berechne und stelle ein: ${challenge.left}° + ${challenge.right}°` : lang === 'hu' ? `Számold ki és állítsd be: ${challenge.left}° + ${challenge.right}°` : lang === 'ro' ? `Calculează și setează: ${challenge.left}° + ${challenge.right}°` : `Calculate and set: ${challenge.left}° + ${challenge.right}°`;
  }
  if (challenge.kind === 'relation') {
    return lang === 'de' ? `Welcher Winkel ergänzt ${challenge.given}° auf ${challenge.whole}°?` : lang === 'hu' ? `Mekkora szög egészíti ki ${challenge.given}°-ot ${challenge.whole}°-ra?` : lang === 'ro' ? `Ce unghi completează ${challenge.given}° până la ${challenge.whole}°?` : `Which angle completes ${challenge.given}° to ${challenge.whole}°?`;
  }
  return lang === 'de' ? `Unsichtbares Ziel zwischen ${challenge.lower}° und ${challenge.upper}°.` : lang === 'hu' ? `Láthatatlan cél ${challenge.lower}° és ${challenge.upper}° között.` : lang === 'ro' ? `Țintă invizibilă între ${challenge.lower}° și ${challenge.upper}°.` : `Hidden target between ${challenge.lower}° and ${challenge.upper}°.`;
};

export const generateAngleChallenge = (grade: number, level: number, step: number): AngleChallenge => {
  const options = getAngleOptions(step).filter((angle) => angle > 0);
  const pick = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];
  if (level <= 1) return { kind: 'exact', target: pick(options) };

  if (level === 2) {
    const usable = options.filter((angle) => categoryForAngle(angle) !== null);
    const target = pick(usable);
    return { kind: 'category', target, category: categoryForAngle(target)! };
  }

  if (level === 3) {
    const usable = options.filter((angle) => angle >= step * 2);
    const target = pick(usable.length ? usable : options);
    const splitSteps = Math.max(1, Math.floor(target / step) - 1);
    const left = step * (1 + Math.floor(Math.random() * splitSteps));
    return { kind: 'sum', target, left, right: target - left };
  }

  if (level === 4) {
    const wholes = grade <= 2 ? [180, 360] : [90, 180, 360];
    const possible = wholes.flatMap((whole) => options.filter((target) => target < whole).map((target) => ({ whole, target })));
    const selected = pick(possible);
    return { kind: 'relation', target: selected.target, given: selected.whole - selected.target, whole: selected.whole };
  }

  const target = pick(options);
  return {
    kind: 'calibration',
    target,
    lower: Math.max(0, target - step * 4),
    upper: Math.min(360, target + step * 4),
  };
};

const isCorrectAnswer = (challenge: AngleChallenge, angle: number) => challenge.kind === 'category'
  ? categoryForAngle(angle) === challenge.category
  : normalizeAngle(angle) === normalizeAngle(challenge.target);

const PolarGrid = ({ step, precision }: { step: number; precision: boolean }) => {
  const tickStep = Math.max(5, Math.min(45, step));
  const ticks = Array.from({ length: Math.floor(360 / tickStep) }, (_, index) => index * tickStep);
  return (
    <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full text-cyan-500/35" aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.45" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.28" />
      {precision && <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="0.22" />}
      {ticks.map((angle) => {
        const radians = angle * Math.PI / 180;
        const major = angle % 45 === 0;
        const inner = major ? 38 : 41;
        return <line key={angle} x1={50 + inner * Math.cos(radians)} y1={50 - inner * Math.sin(radians)} x2={50 + 44 * Math.cos(radians)} y2={50 - 44 * Math.sin(radians)} stroke="currentColor" strokeWidth={major ? 0.8 : 0.35} />;
      })}
      {[0, 90, 180, 270].map((angle) => {
        const radians = angle * Math.PI / 180;
        return <text key={angle} x={50 + 36 * Math.cos(radians)} y={50 - 36 * Math.sin(radians) + 1.4} fill="currentColor" fontSize="3.2" textAnchor="middle">{angle}°</text>;
      })}
      <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="0.35" />
      <line x1="50" y1="6" x2="50" y2="94" stroke="currentColor" strokeWidth="0.35" />
    </svg>
  );
};

const CannonSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
    <circle cx="50" cy="50" r="25" fill="#0f172a" stroke="currentColor" strokeWidth="4" />
    <rect x="50" y="40" width="45" height="20" fill="#0f172a" stroke="currentColor" strokeWidth="4" rx="4" />
    <circle cx="50" cy="50" r="10" fill="currentColor" />
  </svg>
);

const AsteroidSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-stone-400 drop-shadow-[0_0_8px_rgba(168,162,158,0.8)]">
    <path d="M50 5 L80 20 L95 50 L75 90 L20 85 L5 50 L25 15 Z" fill="currentColor" />
    <circle cx="35" cy="40" r="8" fill="#444" opacity="0.5" />
    <circle cx="65" cy="60" r="5" fill="#444" opacity="0.5" />
    <circle cx="50" cy="75" r="10" fill="#444" opacity="0.5" />
  </svg>
);

const BeaconSVG = ({ advanced }: { advanced: boolean }) => (
  <svg viewBox="0 0 100 100" className={`h-full w-full drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] ${advanced ? "text-cyan-300" : "text-violet-300"}`}>
    <circle cx="50" cy="50" r="32" fill="#07111f" stroke="currentColor" strokeWidth="5" />
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 4" />
    <path d="M50 4 L60 22 L50 30 L40 22 Z M96 50 L78 60 L70 50 L78 40 Z M50 96 L40 78 L50 70 L60 78 Z M4 50 L22 40 L30 50 L22 60 Z" fill="currentColor" opacity="0.75" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

const InstrumentSVG = () => (
  <svg viewBox="0 0 100 100" className="h-full w-full text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
    <circle cx="50" cy="50" r="27" fill="#07111f" stroke="currentColor" strokeWidth="3" />
    <path d="M50 44 H94 V56 H50 Z" fill="currentColor" opacity="0.8" />
    <circle cx="50" cy="50" r="13" fill="#0f172a" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

export default function AngleLaserGame({ grade, lang, onDone }: AngleLaserGameProps) {
  const t = DICT[lang] || DICT.en;
  const { progress, difficulty, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress('angle-laser', grade);
  const MAX_ROUNDS = difficulty.rounds;
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  
  const [challenge, setChallenge] = useState<AngleChallenge>({ kind: 'exact', target: 90 });
  const [currentAngle, setCurrentAngle] = useState(0);
  const [attempts, setAttempts] = useState(0);
  
  const [phase, setPhase] = useState<'aiming' | 'firing' | 'result' | 'gameover'>('aiming');
  const fireTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fireLockedRef = useRef(false);

  useEffect(() => () => {
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
  }, []);
  
  useEffect(() => {
    generateProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round, grade, difficulty.angleStep, difficulty.level]);

  const generateProblem = () => {
    setChallenge(generateAngleChallenge(grade, difficulty.level, difficulty.angleStep));
    setCurrentAngle(0);
    setAttempts(0);
    setPhase('aiming');
    fireLockedRef.current = false;
  };

  const handleFire = () => {
    if (phase !== 'aiming' || fireLockedRef.current) return;
    fireLockedRef.current = true;
    setPhase('firing');
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
    fireTimerRef.current = setTimeout(() => {
      setPhase('result');
      const hit = isCorrectAnswer(challenge, currentAngle);
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);
      const roundResolved = challenge.kind !== 'calibration' || hit || nextAttempts >= 5;
      if (roundResolved) recordAnswer(hit);
      if (hit) {
        setScore(s => s + 1);
      }
    }, 400);
  };

  const adjustAim = () => {
    setPhase('aiming');
    fireLockedRef.current = false;
  };

  const nextRound = () => {
    if (round >= MAX_ROUNDS) {
      advanceToUnlockedLevel();
      setPhase('gameover');
    } else {
      setRound(r => r + 1);
    }
  };

  useEffect(() => {
    if (phase === 'gameover' && onDone) {
      onDone(score);
    }
  }, [phase, score, onDone]);

  const resetGame = () => {
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
    setScore(0);
    fireLockedRef.current = false;
    if (round === 1) {
      generateProblem();
    } else {
      setRound(1);
      setPhase('aiming');
    }
  };

  const changeLevel = (level: 1 | 2 | 3 | 4 | 5) => {
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
    selectLevel(level);
    setRound(1);
    setScore(0);
    setPhase('aiming');
    fireLockedRef.current = false;
  };

  const targetAngle = challenge.target;
  const markerAngle = challenge.kind === 'category' && isCorrectAnswer(challenge, currentAngle) ? currentAngle : targetAngle;
  const asteroidX = 120 * Math.cos(markerAngle * Math.PI / 180);
  const asteroidY = -120 * Math.sin(markerAngle * Math.PI / 180);
  const isHit = isCorrectAnswer(challenge, currentAngle);
  const calibrationCanRetry = challenge.kind === 'calibration' && phase === 'result' && !isHit && attempts < 5;
  const showBeacon = challenge.kind === 'exact' || (phase === 'result' && !calibrationCanRetry);
  const visualMode = grade <= 3 ? 'junior' : grade <= 5 ? 'mission' : 'lab';
  const useAsteroid = visualMode === 'junior' && difficulty.level <= 2;
  const precisionMode = visualMode === 'lab' || difficulty.level >= 3;
  const displayTitle = visualMode === 'junior' ? t.titleJunior : visualMode === 'mission' ? t.titleMission : t.titleLab;
  const shellClass = visualMode === 'junior'
    ? 'border-violet-500/25 bg-slate-950'
    : visualMode === 'mission'
      ? 'border-cyan-500/25 bg-[#07111f]'
      : 'border-sky-300/20 bg-[#050b11]';
  const arenaClass = visualMode === 'junior'
    ? 'border-violet-900/70 bg-gradient-to-b from-slate-900 to-violet-950/35'
    : visualMode === 'mission'
      ? 'border-cyan-900/80 bg-[#081522]'
      : 'border-sky-800/60 bg-[#03090f]';

  return (
    <div className={`flex w-full max-w-2xl select-none flex-col items-center overflow-hidden rounded-2xl border p-3 font-sans shadow-2xl sm:p-6 ${shellClass}`}>
      <div className="w-full">
        <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={changeLevel} />
      </div>
      
      {/* Header Info */}
      <div className="w-full flex justify-between items-center mb-4">
         <span className="text-slate-400 font-bold tracking-wide">{t.round} {round}/{MAX_ROUNDS}</span>
         <span className="text-cyan-400 font-bold tracking-wide text-lg">{t.score}: {score}</span>
      </div>

      {/* Title & Target */}
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider sm:tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          {displayTitle}
        </h2>
        <div className="mt-2 min-h-12">
            <p className={`text-base font-bold sm:text-lg ${visualMode === 'junior' ? 'text-amber-300' : 'text-cyan-200'}`}>
              {challengePrompt(challenge, lang)}
            </p>
            {challenge.kind === 'calibration' && <p className="mt-1 text-xs text-slate-400">{t.attempts}: {Math.max(0, 5 - attempts)}</p>}
            {phase === 'result' && !calibrationCanRetry && challenge.kind !== 'category' && (
              <p className="mt-1 font-mono text-sm text-slate-400">{t.target}: {targetAngle}°</p>
            )}
        </div>
      </div>

      {/* Play Area */}
      <div className={`relative flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full border-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] ${arenaClass}`}>
        <PolarGrid step={difficulty.angleStep} precision={precisionMode} />

        {/* Asteroid */}
        <AnimatePresence>
          {showBeacon && !(phase === 'result' && isHit) && (
            <motion.div 
              className="absolute left-1/2 top-1/2 w-10 h-10"
              style={{ marginLeft: asteroidX - 20, marginTop: asteroidY - 20 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
               {useAsteroid ? <AsteroidSVG /> : <BeaconSVG advanced={visualMode === 'lab'} />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explosion */}
        <AnimatePresence>
          {phase === 'result' && isHit && (
            <motion.div
              className="absolute left-1/2 top-1/2 w-24 h-24 pointer-events-none"
              style={{ marginLeft: asteroidX - 48, marginTop: asteroidY - 48 }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={`h-full w-full rounded-full blur-xl ${useAsteroid ? 'bg-amber-400' : 'border-4 border-cyan-300 bg-cyan-400/25'}`} />
              <div className={`absolute inset-4 rounded-full blur-md ${useAsteroid ? 'bg-white' : 'border-2 border-white/80'}`} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Laser */}
        {(phase === 'firing' || phase === 'result') && (
          <motion.div
            className="absolute left-1/2 top-1/2 h-2 rounded-full"
            style={{ 
              width: 120,
              marginTop: -4,
              rotate: -currentAngle,
              originX: 0,
              originY: 0.5,
              backgroundColor: '#ef4444',
              boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Cannon */}
        <motion.div 
          className="absolute left-1/2 top-1/2 w-16 h-16 z-10"
          style={{ marginLeft: -32, marginTop: -32 }}
          animate={{ rotate: -currentAngle }}
        >
           {useAsteroid ? <CannonSVG /> : <InstrumentSVG />}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-[320px] mt-4 sm:mt-8 min-h-[110px] sm:min-h-[120px] flex flex-col items-center justify-center gap-4">
        {phase === 'aiming' ? (
          <>
            <div className="flex items-center gap-3 w-full">
              <span className="text-xl font-mono w-14 text-right text-cyan-200">{currentAngle}°</span>
              <input 
                type="range" 
                min="0" 
                max="360" 
                step={difficulty.angleStep}
                value={currentAngle}
                onChange={(e) => setCurrentAngle(Number(e.target.value))}
                className="flex-1 cursor-pointer accent-cyan-500"
              />
            </div>
            <button
              onClick={handleFire}
              className={`mt-2 rounded-full px-10 py-3 text-xl font-black tracking-widest text-white transition-all active:scale-95 ${visualMode === 'junior' ? 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:bg-red-500' : 'border border-cyan-300/40 bg-cyan-500/20 shadow-[0_0_18px_rgba(34,211,238,0.2)] hover:bg-cyan-500/30'}`}
            >
              {precisionMode ? t.check : t.fire}
            </button>
          </>
        ) : phase === 'result' ? (
          <>
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-2xl font-black uppercase tracking-widest ${isHit ? 'text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]' : 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]'}`}
            >
              {isHit ? t.hit : calibrationCanRetry ? (currentAngle < targetAngle ? t.higher : t.lower) : t.miss}
            </motion.p>
            <button
              onClick={calibrationCanRetry ? adjustAim : nextRound}
              className="px-8 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white font-bold transition-all"
            >
              {calibrationCanRetry ? t.adjust : t.next}
            </button>
          </>
        ) : phase === 'gameover' ? (
          <>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-black text-amber-400 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
            >
              {score >= round ? t.levelDone : t.roundOver}
            </motion.p>
            <button 
              onClick={resetGame}
              className="px-8 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-bold transition-all"
            >
              {score >= round ? (round < 8 ? t.nextLevel : t.playAgain) : t.tryAgain}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
