import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo, useAnimation } from 'framer-motion';
import { ArtikelAsteroidsRound } from '@/lib/visualLab/languageTypes';

interface Props {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  round: ArtikelAsteroidsRound;
  onDone?: (score: number) => void;
}

const DICTIONARY = {
  de: { score: "Punkte", game_over: "Spiel beendet!", drag_instruction: "Ziehe oder tippe den Asteroiden in das richtige Schwarze Loch!" },
  en: { score: "Score", game_over: "Game Over!", drag_instruction: "Drag or tap the asteroid into the correct black hole!" },
  hu: { score: "Pontszám", game_over: "Játék vége!", drag_instruction: "Húzd vagy koppints az aszteroidára a megfelelő fekete lyukhoz!" },
  ro: { score: "Scor", game_over: "Joc terminat!", drag_instruction: "Trage sau atinge asteroidul în gaura neagră corectă!" }
} as const;

export default function ArtikelAsteroidsGame({ lang, round, onDone }: Props) {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [windowHeight, setWindowHeight] = useState(800);
  const controls = useAnimation();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const words = round.words || [];
  const categories = round.categories || ["der", "die", "das"];
  const currentWord = words[currentIndex];
  const t = DICTIONARY[lang] || DICTIONARY.en;

  const handleZoneSelect = (category: string) => {
    if (gameOver || !currentWord) return;
    
    if (currentWord.article.toLowerCase() === category.toLowerCase()) {
      setScore((s) => s + 10);
      controls.start({
        scale: 0,
        rotate: 720,
        opacity: 0,
        transition: { duration: 0.5 }
      }).then(() => nextWord());
    } else {
      controls.start({
        x: [-20, 20, -20, 20, 0],
        transition: { duration: 0.4 }
      });
      // Allow them to try again or just move on? Let's move on on error to keep it arcade.
      setTimeout(() => nextWord(), 500);
    }
  };

  const nextWord = () => {
    if (currentIndex + 1 < words.length) {
      setCurrentIndex((i) => i + 1);
      controls.set({ scale: 1, opacity: 1, x: '-50%', y: -150, rotate: -10 });
    } else {
      setGameOver(true);
    }
  };

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const screenWidth = window.innerWidth;
    const colWidth = screenWidth / categories.length;
    const dropX = info.point.x;
    const dropY = info.point.y;

    if (dropY > windowHeight * 0.6) {
      const colIndex = Math.floor(dropX / colWidth);
      if (colIndex >= 0 && colIndex < categories.length) {
        handleZoneSelect(categories[colIndex]);
      }
    }
  };

  const categoryColors = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden bg-black text-white font-sans flex flex-col items-center">
      {/* Dynamic Starfield Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        {/* Nebula gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900 rounded-full blur-[150px] opacity-30"></div>
      </div>

      {/* Header HUD */}
      <div className="relative z-10 w-full p-4 flex justify-between items-start bg-gradient-to-b from-gray-900/90 to-transparent border-b border-cyan-900/50">
        <div className="flex flex-col">
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] uppercase tracking-widest">
            {round.title || 'Asteroids'}
          </h2>
          <p className="text-sm text-cyan-200/80 mt-1 max-w-md">{t.drag_instruction}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-fuchsia-300/80 uppercase tracking-widest">{t.score}</div>
          <div className="text-4xl font-black text-fuchsia-400 drop-shadow-[0_0_15px_rgba(232,121,249,0.8)] tabular-nums">
            {score.toString().padStart(4, '0')}
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 relative w-full h-full z-10 overflow-hidden perspective-[1000px]">
        {!gameOver && currentWord ? (
          <motion.div
            key={currentIndex}
            className="absolute top-10 left-1/2 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing origin-center"
            initial={{ y: -150, x: '-50%', rotate: -15 }}
            animate={controls}
            onAnimationComplete={(definition) => {
              if (definition === "fall") {
                nextWord();
              }
            }}
            drag
            dragConstraints={{ left: -300, right: 300, top: -100, bottom: windowHeight - 100 }}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1, rotate: 0, cursor: 'grabbing' }}
            onDragEnd={handleDragEnd}
            style={{ x: '-50%' }}
          >
            {/* Auto fall animation if not dragging */}
            <motion.div
              animate="fall"
              variants={{
                fall: { y: windowHeight, rotate: 15, transition: { duration: 10, ease: "linear" } }
              }}
              className="relative flex items-center justify-center"
            >
              {/* Asteroid SVG */}
              <svg width="160" height="160" viewBox="0 0 100 100" className="drop-shadow-[0_0_20px_rgba(255,165,0,0.4)]">
                <defs>
                  <radialGradient id="asteroidGrad" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="100%" stopColor="#374151" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <polygon points="50,5 82,18 95,50 78,85 50,95 18,82 5,50 22,18" fill="url(#asteroidGrad)" stroke="#9ca3af" strokeWidth="2" />
                <circle cx="35" cy="40" r="8" fill="#1f2937" opacity="0.6" />
                <circle cx="70" cy="55" r="12" fill="#1f2937" opacity="0.5" />
                <circle cx="45" cy="75" r="6" fill="#1f2937" opacity="0.7" />
                <circle cx="25" cy="65" r="4" fill="#1f2937" opacity="0.4" />
                
                {/* Neon highlight around text area */}
                <rect x="15" y="35" width="70" height="30" rx="15" fill="#000000" opacity="0.5" filter="url(#glow)" />
                <rect x="15" y="35" width="70" height="30" rx="15" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
              </svg>
              <span className="absolute text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] pointer-events-none z-10">
                {currentWord.word}
              </span>
            </motion.div>
          </motion.div>
        ) : (
          gameOver && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-50"
            >
              <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-500 mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                {t.game_over}
              </h1>
              <div className="text-3xl text-white mb-12 font-bold">
                {t.score}: <span className="text-fuchsia-400">{score}</span>
              </div>
              <motion.button
                onClick={() => onDone?.(score)}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all border-2 border-cyan-300"
              >
                Weiter
              </motion.button>
            </motion.div>
          )
        )}
      </div>

      {/* Black Hole Zones */}
      <div className="relative z-20 w-full h-[25vh] min-h-[180px] flex justify-around items-end pb-8 bg-gradient-to-t from-black via-gray-900/80 to-transparent">
        {categories.map((cat, idx) => {
          const color = categoryColors[idx % categoryColors.length];
          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center group cursor-pointer relative"
              onClick={() => handleZoneSelect(cat)}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Event horizon / Accretion disk */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-black border-[6px]"
                  style={{
                    borderColor: color,
                    boxShadow: `0 0 40px ${color}, inset 0 0 20px ${color}`,
                  }}
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner swirling particles */}
                <motion.div
                  className="absolute inset-2 rounded-full border-[3px] border-dashed opacity-70"
                  style={{ borderColor: '#ffffff', filter: `drop-shadow(0 0 8px ${color})` }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-6 rounded-full border-2 border-dotted opacity-50"
                  style={{ borderColor: color }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Center Void */}
                <div className="absolute inset-8 rounded-full bg-black shadow-[inset_0_0_15px_rgba(0,0,0,1)] z-10 flex items-center justify-center">
                   {/* Text */}
                  <span className="relative z-20 font-black text-2xl uppercase tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)]" style={{ textShadow: `0 0 10px ${color}` }}>
                    {cat}
                  </span>
                </div>
              </div>
              
              {/* Floor reflection/glow */}
              <div 
                className="absolute -bottom-6 w-40 h-8 rounded-full blur-xl opacity-50"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
