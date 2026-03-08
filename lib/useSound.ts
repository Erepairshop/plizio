'use client';

import { useCallback } from 'react';
import {
  playCorrect,
  playIncorrect,
  playClick,
  playSelect,
  playLevelUp,
  playTimeUp,
  playRulerSlide,
  playTick,
  playNotification,
  getSoundSettings,
  saveSoundSettings,
  type SoundSettings,
} from './soundEffects';

/**
 * useSound hook — minden sound effect egy helyen.
 *
 * Használat:
 *   const sound = useSound();
 *   sound.correct();   // helyes válasz
 *   sound.incorrect(); // hibás válasz
 *   sound.click();     // gomb kattintás
 */
export function useSound() {
  const correct = useCallback(() => playCorrect(), []);
  const incorrect = useCallback(() => playIncorrect(), []);
  const click = useCallback(() => playClick(), []);
  const select = useCallback(() => playSelect(), []);
  const levelUp = useCallback(() => playLevelUp(), []);
  const timeUp = useCallback(() => playTimeUp(), []);
  const rulerSlide = useCallback(() => playRulerSlide(), []);
  const tick = useCallback(() => playTick(), []);
  const notification = useCallback(() => playNotification(), []);

  return {
    correct,
    incorrect,
    click,
    select,
    levelUp,
    timeUp,
    rulerSlide,
    tick,
    notification,
    getSettings: getSoundSettings,
    saveSettings: saveSoundSettings,
  };
}

export type { SoundSettings };
