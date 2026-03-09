'use client';

import React, { useState } from 'react';

interface Props {
  hour: number;          // 1-12
  minute: number;        // 0, 5, 10, 15... (5 percenként)
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

// Válasz formátum: "H:MM" (pl. "3:05", "12:00")
// correctAnswer = `${hour}:${String(minute).padStart(2, '0')}`

const AnalogClock: React.FC<Props> = ({ hour, minute, embedded = false, onValueChange, onAnswer }) => {
  // TODO: Te töltöd ki! A kódod már kész van, paste-eld ide.
  return <div>AnalogClock — TODO</div>;
};

export default AnalogClock;
