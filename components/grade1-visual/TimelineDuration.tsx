'use client';

import React, { useState } from 'react';

interface Props {
  /** Kezdő óra (pl. 8) */
  startHour: number;
  /** Befejező óra (pl. 11) */
  endHour: number;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Időszalag két időpont között, a gyereknek ki kell számolnia hány óra telt el.
// Pl. 8:00 → 11:00 = 3 óra → válasz "3"
//
// Válasz formátum: szám stringként
// correctAnswer = String(endHour - startHour)
//
// Vizuálisan:
// - Vízszintes idővonal (timeline)
// - Bal szélén: startHour óra ikon + "8:00"
// - Jobb szélén: endHour óra ikon + "11:00"
// - Közötte: nyíl vagy ív "? óra" felirattal
// - Szín: vonal #00D4FF, óra ikonok #FF2D78, kérdőjel #FFD700
// - Input mező alul

const TimelineDuration: React.FC<Props> = ({ startHour, endHour, embedded = false, onValueChange, onAnswer }) => {
  // TODO
  return <div>TimelineDuration — TODO</div>;
};

export default TimelineDuration;
