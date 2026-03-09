'use client';

import React, { useState } from 'react';

interface Props {
  /** A szám amit vizuálisan megjelenítünk (pl. 47) */
  number: number;
  /** Mit kérdezünk: "tens" = hány tízes van, "ones" = hány egyes, "total" = mi a szám */
  question: 'tens' | 'ones' | 'total';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Tízesek = hosszú pálcika (10 pöttyből), egyesek = kis pötty
// Pl. 47 = 4 pálcika + 7 pötty
//
// Válasz formátum: szám stringként
// question="tens" → correctAnswer = String(Math.floor(number / 10))   pl. "4"
// question="ones" → correctAnswer = String(number % 10)               pl. "7"
// question="total" → correctAnswer = String(number)                   pl. "47"
//
// Vizuálisan:
// - Bal oldalon: tízesek (függőleges téglalap, 10 kicsi kör benne)
// - Jobb oldalon: egyesek (kicsi körök)
// - Szín: tízesek #00D4FF (neon-blue), egyesek #00FF88 (neon-green)
// - Input mező alul

const PlaceValueBlocks: React.FC<Props> = ({ number, question, embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>PlaceValueBlocks — TODO</div>;
};

export default PlaceValueBlocks;
