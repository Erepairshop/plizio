'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';

interface LengthMeasurementProps {
  targetLength?: number; // Ha nincs megadva, random
  unit?: string; // 'cm' vagy 'mm'
  onAnswer: (isCorrect: boolean, measuredLength: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
}

const RULER_WIDTH = 480;
const RULER_CM_WIDTH = 20;
const PX_PER_CM = RULER_WIDTH / RULER_CM_WIDTH;

const LengthMeasurement: React.FC<LengthMeasurementProps> = ({
  targetLength = undefined,
  unit = 'cm',
  onAnswer,
  language = 'en',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [actualLength, setActualLength] = useState<number>(() => {
    return targetLength || Math.floor(Math.random() * 12) + 3; // 3-15 cm
  });
  const [startMeasure, setStartMeasure] = useState<number | null>(null);
  const [endMeasure, setEndMeasure] = useState<number | null>(null);
  const [measuredLength, setMeasuredLength] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const labels = {
    hu: {
      instruction: 'Mérj meg ezt a vonalat a vonalzó segítségével!',
      tryAgain: 'Próbálj újra',
      correct: 'Helyes!',
      incorrect: 'Nem pontos. Próbálj újra!',
      line: 'Vonal a vonalzóval:',
      measure: 'Mérd: Kattints a vonal elején, majd a végén',
    },
    de: {
      instruction: 'Gemessen Sie diese Linie mit dem Lineal!',
      tryAgain: 'Erneut versuchen',
      correct: 'Richtig!',
      incorrect: 'Nicht genau. Versuche nochmal!',
      line: 'Linie mit Lineal:',
      measure: 'Messen: Klicken Sie am Anfang und am Ende der Linie',
    },
    en: {
      instruction: 'Measure this line using the ruler!',
      tryAgain: 'Try again',
      correct: 'Correct!',
      incorrect: 'Not precise. Try again!',
      line: 'Line to measure:',
      measure: 'Measure: Click at the start and end of the line',
    },
    ro: {
      instruction: 'Măsurați această linie folosind rigla!',
      tryAgain: 'Încearcă din nou',
      correct: 'Corect!',
      incorrect: 'Nu e precis. Încearcă din nou!',
      line: 'Linie de măsurat:',
      measure: 'Măsurare: Faceți clic la început și la sfârșitul liniei',
    },
  };

  const t = labels[language];

  // Canvas setup - vonalzó + rajzolt vonal megjelenítés
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Háttér
    ctx.fillStyle = '#f0f9ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const lineY = 100;
    const rulerY = 150;

    // A mérendő vonal
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    const startX = 100;
    const endX = 100 + actualLength * PX_PER_CM;
    ctx.moveTo(startX, lineY);
    ctx.lineTo(endX, lineY);
    ctx.stroke();

    // Végpont jelölések
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(startX - 2, lineY - 10, 4, 20);
    ctx.fillRect(endX - 2, lineY - 10, 4, 20);

    // Vonalzó megjelenítés
    drawRuler(ctx, canvas.width, rulerY);

    // Mérés markerei
    if (startMeasure !== null) {
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(startMeasure - 2, rulerY - 20, 4, 40);
      ctx.fillStyle = '#991b1b';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('S', startMeasure, rulerY - 30);
    }

    if (endMeasure !== null) {
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(endMeasure - 2, rulerY - 20, 4, 40);
      ctx.fillStyle = '#15803d';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('E', endMeasure, rulerY - 30);
    }
  }, [actualLength, startMeasure, endMeasure]);

  const drawRuler = (ctx: CanvasRenderingContext2D, width: number, rulerY: number) => {
    const cmHeight = 10;
    const lineColor = '#475569';

    // Vonalzó alap vonal
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, rulerY);
    ctx.lineTo(width - 40, rulerY);
    ctx.stroke();

    // CM és mm jelek
    for (let i = 0; i <= RULER_CM_WIDTH; i++) {
      const x = 40 + i * PX_PER_CM;

      // CM jel
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
          ctx.lineTo(mmX, rulerY + 5);
          ctx.stroke();
        }
      }
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;

    // Ha még nincs start pont, akkor ez a start
    if (startMeasure === null) {
      setStartMeasure(x);
      setFeedback(null);
    } else if (endMeasure === null) {
      setEndMeasure(x);

      // Hossz kiszámítása
      const pxDiff = Math.abs(x - startMeasure);
      const cmLength = pxDiff / PX_PER_CM;
      const rounded = Math.round(cmLength * 10) / 10;
      setMeasuredLength(rounded);

      // Pontosság ellenőrzése
      const tolerance = 0.5;
      const isCorrect = Math.abs(rounded - actualLength) <= tolerance;
      setFeedback(isCorrect ? 'correct' : 'incorrect');

      // Callback után 1.5 sec delay
      setTimeout(() => {
        onAnswer(isCorrect, rounded);
      }, 1500);
    }
  };

  const handleReset = () => {
    setStartMeasure(null);
    setEndMeasure(null);
    setMeasuredLength(null);
    setFeedback(null);
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cím */}
      <h3 className="text-lg font-bold text-green-900 mb-2 text-center">{t.instruction}</h3>
      <p className="text-sm text-green-700 text-center mb-4">{t.measure}</p>

      {/* Canvas mérő */}
      <div className="bg-white rounded-lg border-2 border-green-400 overflow-hidden shadow-lg">
        <canvas
          ref={canvasRef}
          width={520}
          height={220}
          onClick={handleCanvasClick}
          className="w-full cursor-pointer bg-blue-50"
        />
      </div>

      {/* Hossz megjelenítés */}
      {measuredLength !== null && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-sm text-gray-600 mb-2">{t.line}</p>
          <p className="text-2xl font-bold text-green-600">
            {measuredLength} {unit}
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
          className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <RotateCcw size={18} />
          {t.tryAgain}
        </button>
      </div>
    </motion.div>
  );
};

export default LengthMeasurement;
