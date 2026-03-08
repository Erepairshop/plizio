'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';

interface LengthDrawingProps {
  targetLength: number; // cm-ben
  unit: string; // 'cm' vagy 'mm'
  onAnswer: (isCorrect: boolean, drawnLength: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
}

const RULER_WIDTH = 480; // pixel
const RULER_CM_WIDTH = 20; // 20 cm-es vonalzó
const PX_PER_CM = RULER_WIDTH / RULER_CM_WIDTH; // pixel/cm

const LengthDrawing: React.FC<LengthDrawingProps> = ({
  targetLength,
  unit = 'cm',
  onAnswer,
  language = 'en',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);
  const [endPoint, setEndPoint] = useState<{ x: number; y: number } | null>(null);
  const [drawnLength, setDrawnLength] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const labels = {
    hu: {
      instruction: `Rajzolj egy ${targetLength} ${unit} hosszú vonalat!`,
      tryAgain: 'Próbálj újra',
      correct: 'Helyes!',
      incorrect: 'Nem pontos. Próbálj újra!',
      yourLength: 'Az általad rajzolt vonal:',
    },
    de: {
      instruction: `Zeichne eine ${targetLength} ${unit} lange Linie!`,
      tryAgain: 'Erneut versuchen',
      correct: 'Richtig!',
      incorrect: 'Nicht genau. Versuche nochmal!',
      yourLength: 'Deine Linie ist:',
    },
    en: {
      instruction: `Draw a ${targetLength} ${unit} long line!`,
      tryAgain: 'Try again',
      correct: 'Correct!',
      incorrect: 'Not precise. Try again!',
      yourLength: 'Your line is:',
    },
    ro: {
      instruction: `Desenează o linie de ${targetLength} ${unit} lungime!`,
      tryAgain: 'Încearcă din nou',
      correct: 'Corect!',
      incorrect: 'Nu e precis. Încearcă din nou!',
      yourLength: 'Linia ta este:',
    },
  };

  const t = labels[language];

  // Rajzoló canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Háttér
    ctx.fillStyle = '#f0f9ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Vonalzó megjelenítés
    drawRuler(ctx, canvas.width);

    // Rajzolt vonal
    if (startPoint && endPoint) {
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startPoint.x, startPoint.y);
      ctx.lineTo(endPoint.x, endPoint.y);
      ctx.stroke();

      // Végpontok jelölése
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(startPoint.x, startPoint.y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(endPoint.x, endPoint.y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, [startPoint, endPoint]);

  const drawRuler = (ctx: CanvasRenderingContext2D, width: number) => {
    const rulerY = 80;
    const cmHeight = 10;
    const mmHeight = 3;
    const lineColor = '#475569';

    // Vonalzó alap vonal
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, rulerY);
    ctx.lineTo(width - 40, rulerY);
    ctx.stroke();

    // Cm és mm jelek
    for (let i = 0; i <= RULER_CM_WIDTH; i++) {
      const x = 40 + i * PX_PER_CM;

      // CM jel
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, rulerY);
      ctx.lineTo(x, rulerY + cmHeight);
      ctx.stroke();

      // CM szám
      ctx.fillStyle = lineColor;
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(i.toString(), x, rulerY + cmHeight + 15);

      // MM jelek
      if (i < RULER_CM_WIDTH) {
        for (let j = 1; j < 10; j++) {
          const mmX = x + (j * PX_PER_CM) / 10;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(mmX, rulerY);
          ctx.lineTo(mmX, rulerY + mmHeight);
          ctx.stroke();
        }
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Csak a vonalzó területén (80 pixel körül)
    if (Math.abs(y - 80) < 30) {
      setStartPoint({ x, y: 80 });
      setEndPoint(null);
      setDrawnLength(null);
      setFeedback(null);
      setIsDrawing(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPoint) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;

    // Csak vízszintes rajzolás
    setEndPoint({ x, y: 80 });

    // Hossz kiszámítása
    const pxDiff = Math.abs(x - startPoint.x);
    const cmLength = pxDiff / PX_PER_CM;
    setDrawnLength(Math.round(cmLength * 10) / 10); // 1 tizedesjegy
  };

  const handleMouseUp = () => {
    if (isDrawing && drawnLength !== null) {
      setIsDrawing(false);

      // Pontosság ellenőrzése: ±0.5 cm tolerancia
      const tolerance = 0.5;
      const isCorrect = Math.abs(drawnLength - targetLength) <= tolerance;

      setFeedback(isCorrect ? 'correct' : 'incorrect');

      // Callback után 1.5 sec delay
      setTimeout(() => {
        onAnswer(isCorrect, drawnLength);
      }, 1500);
    }
  };

  const handleReset = () => {
    setStartPoint(null);
    setEndPoint(null);
    setDrawnLength(null);
    setFeedback(null);
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cím */}
      <h3 className="text-lg font-bold text-blue-900 mb-4 text-center">{t.instruction}</h3>

      {/* Canvas rajzoló */}
      <div className="bg-white rounded-lg border-2 border-blue-400 overflow-hidden shadow-lg">
        <canvas
          ref={canvasRef}
          width={520}
          height={200}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full cursor-crosshair bg-blue-50"
        />
      </div>

      {/* Hossz megjelenítés */}
      {drawnLength !== null && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-sm text-gray-600 mb-2">{t.yourLength}</p>
          <p className="text-2xl font-bold text-blue-600">
            {drawnLength} {unit}
          </p>
        </motion.div>
      )}

      {/* Feedback */}
      {feedback && (
        <motion.div
          className={`mt-4 p-4 rounded-lg text-center font-bold ${
            feedback === 'correct'
              ? 'bg-green-100 text-green-700 border-2 border-green-400'
              : 'bg-red-100 text-red-700 border-2 border-red-400'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex items-center justify-center gap-2">
            {feedback === 'correct' ? (
              <>
                <Check size={20} />
                {t.correct}
              </>
            ) : (
              <>
                <X size={20} />
                {t.incorrect}
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Gombok */}
      <div className="mt-6 flex gap-3 justify-center">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <RotateCcw size={18} />
          {t.tryAgain}
        </button>
      </div>
    </motion.div>
  );
};

export default LengthDrawing;
