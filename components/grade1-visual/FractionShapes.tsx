'use client';

import React, { useState } from 'react';

interface Props {
  /** Alakzat típusa */
  shape: 'pizza' | 'rectangle' | 'circle';
  /** Hány egyenlő részre van osztva (pl. 4) */
  totalParts: number;
  /** Hány rész van színezve (pl. 3) */
  coloredParts: number;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Alakzat (pizza/téglalap/kör) részekre osztva, néhány színezve.
// G1-nél egyszerű: "Hány rész van színezve?" (NEM tört formátum!)
// Pl. 4-ből 3 színezett → válasz "3"
//
// Válasz formátum: szám stringként
// correctAnswer = String(coloredParts)
//
// Vizuálisan:
// - pizza: kör szeletekre osztva (pie chart szerű)
// - rectangle: téglalap függőleges csíkokra osztva
// - circle: kör szeletekre (mint a pizza de vékonyabb kontúrral)
// - Színezett részek: #B44DFF (neon-purple)
// - Üres részek: #2a2a4a
// - Elválasztó vonalak: white/30
// - Input mező alul

const FractionShapes: React.FC<Props> = ({ shape, totalParts, coloredParts, embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>FractionShapes — TODO</div>;
};

export default FractionShapes;
