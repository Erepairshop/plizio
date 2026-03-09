'use client';

import React, { useState } from 'react';

interface Props {
  /** A számegyenes kezdőértéke (pl. 0) */
  min: number;
  /** A számegyenes végértéke (pl. 20) */
  max: number;
  /** Lépésköz a vonások között (pl. 1 vagy 2) */
  step: number;
  /** A megjelölt szám amit a gyereknek be kell írnia */
  markedValue: number;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Megjelenik egy számegyenes min-től max-ig, step lépésközzel.
// Egy nyíl/pötty mutat a markedValue-ra, a gyereknek be kell írnia a számot.
// Válasz formátum: szám stringként, pl. "7"
// correctAnswer = String(markedValue)
//
// Vizuálisan:
// - Vízszintes vonal min-től max-ig
// - Kis függőleges vonások minden step-nél, számok alattuk
// - Egy piros/neon nyíl mutat felülről a markedValue-ra
// - Input mező alul
//
// Szín: vonal white/40, számok white/70, nyíl #FF2D78 (neon-pink)

const NumberLineMarker: React.FC<Props> = ({ min, max, step, markedValue, embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>NumberLineMarker — TODO</div>;
};

export default NumberLineMarker;
