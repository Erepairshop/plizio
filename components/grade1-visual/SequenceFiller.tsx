'use client';

import React, { useState } from 'react';

interface Props {
  /** A számsor (pl. [2, 4, null, 8, null]) — null = hiányzó szám */
  sequence: (number | null)[];
  /** A helyes válaszok sorrendben (pl. [6, 10]) */
  answers: number[];
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Számsor ahol néhány szám hiányzik, a gyereknek ki kell töltenie.
// Pl. 2, 4, _, 8, _ → válasz: "6,10"
//
// Válasz formátum: vesszővel elválasztva, SZÓKÖZ NÉLKÜL
// correctAnswer = answers.join(",")   pl. "6,10"
//
// Vizuálisan:
// - Vízszintes sor, minden szám egy "kártya" (rounded rect)
// - Megadott számok: fehér szöveg #1a1a2e háttéren
// - Hiányzó helyek: szaggatott keret + input mező benne
// - Szín: kártyák border #00D4FF/30, hiányzó border #FF2D78 szaggatott
// - onValueChange-nek az ÖSSZES hiányzó mező értékét kell küldenie: "6,10"

const SequenceFiller: React.FC<Props> = ({ sequence, answers, embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>SequenceFiller — TODO</div>;
};

export default SequenceFiller;
