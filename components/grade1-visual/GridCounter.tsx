'use client';

import React, { useState } from 'react';

interface Props {
  /** 2D boolean rács — true = színezett cella */
  grid: boolean[][];
  /** Mit kérdezünk: "count" = hány színezett, "empty" = hány üres */
  question: 'count' | 'empty';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Rácson színezett cellákat kell megszámolni.
// Pl. 4×4 rács, 7 színezett → válasz "7"
//
// Válasz formátum: szám stringként
// question="count" → correctAnswer = String(grid.flat().filter(Boolean).length)
// question="empty" → correctAnswer = String(grid.flat().filter(c => !c).length)
//
// Vizuálisan:
// - SVG rács (izometrikus NEM kell, sima 2D felülnézet)
// - Cellák: ~30×30px négyzetek
// - Színezett: #B44DFF (neon-purple) halvány glow-val
// - Üres: #2a2a4a (sötét)
// - Rácsháló: white/10
// - Input mező alul

const GridCounter: React.FC<Props> = ({ grid, question, embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>GridCounter — TODO</div>;
};

export default GridCounter;
