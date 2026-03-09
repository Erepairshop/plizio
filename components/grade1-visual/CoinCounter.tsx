'use client';

import React, { useState } from 'react';

interface Props {
  /** Érmék listája: [{value: 2, count: 3}, {value: 1, count: 2}] = 3×2€ + 2×1€ */
  coins: { value: number; count: number }[];
  /** Pénznem (megjelenítéshez) */
  currency?: '€' | 'Ft' | '$';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Érmék megjelennek vizuálisan, a gyereknek össze kell adnia.
// Pl. 3 darab 2€ + 2 darab 1€ = 8€ → válasz "8"
//
// Válasz formátum: szám stringként (pénznem nélkül!)
// correctAnswer = String(coins.reduce((s, c) => s + c.value * c.count, 0))
//
// Vizuálisan:
// - Érmék körök formájában, méretük arányos az értékkel
// - 1€/1Ft = kis kör, 2€ = közepes, 5€ = nagyobb
// - Szín: #FFD700 (gold) különböző árnyalatokkal értékenként
// - Érme közepén az érték szám
// - Soronként egy értékű érmék (pl. sor1: ●●● 2€, sor2: ●● 1€)
// - Input mező alul

const CoinCounter: React.FC<Props> = ({ coins, currency = '€', embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>CoinCounter — TODO</div>;
};

export default CoinCounter;
