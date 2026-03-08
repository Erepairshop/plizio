/**
 * Sound Effects Library — Web Audio API
 * Szintetikus hangok generálása böngészőben, nincs szükség külső fájlokra.
 *
 * Használat:
 *   import { playCorrect, playIncorrect, playClick, playLevelUp } from '@/lib/soundEffects';
 *   playCorrect();
 */

// ─── AUDIO CONTEXT (singleton, lazy init) ─────────────────────────────────────

let _ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!_ctx) {
    _ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  // Safari / Chrome auto-suspend policy
  if (_ctx.state === 'suspended') {
    _ctx.resume();
  }
  return _ctx;
}

// ─── SETTINGS (localStorage) ──────────────────────────────────────────────────

const SETTINGS_KEY = 'plizio_sound_settings';

export interface SoundSettings {
  enabled: boolean;
  volume: number; // 0.0 – 1.0
}

const DEFAULT_SETTINGS: SoundSettings = { enabled: true, volume: 0.7 };

export function getSoundSettings(): SoundSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSoundSettings(s: Partial<SoundSettings>): void {
  const current = getSoundSettings();
  const merged = { ...current, ...s };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
}

// ─── LOW-LEVEL HELPERS ────────────────────────────────────────────────────────

/** Lejátszik egy egyszerű szinusz hangot adott frekvencián és időtartammal. */
function tone(
  freq: number,
  duration: number,
  type: OscillatorType = 'sine',
  gainValue?: number,
  rampDown = true,
) {
  const settings = getSoundSettings();
  if (!settings.enabled) return;

  const ctx = getCtx();
  const vol = (gainValue ?? 1) * settings.volume;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = vol;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);

  if (rampDown) {
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  }

  osc.stop(ctx.currentTime + duration);
}

/** Két hang egymás után (chord-szerű). */
function twoTone(
  f1: number,
  f2: number,
  duration: number,
  gap: number,
  type: OscillatorType = 'sine',
  gainValue = 0.5,
) {
  tone(f1, duration, type, gainValue);
  setTimeout(() => tone(f2, duration, type, gainValue), gap * 1000);
}

/** Zaj (fehér zaj) rövid burst — hibás válasz effekthez. */
function noiseBurst(duration: number, gainValue = 0.15) {
  const settings = getSoundSettings();
  if (!settings.enabled) return;

  const ctx = getCtx();
  const vol = gainValue * settings.volume;

  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.5;
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  source.connect(gain);
  gain.connect(ctx.destination);
  source.start();
}

// ─── PUBLIC SOUND EFFECTS ─────────────────────────────────────────────────────

/**
 * ✅ Helyes válasz — vidám felfelé menő dallam (C5 → E5 → G5)
 */
export function playCorrect(): void {
  const settings = getSoundSettings();
  if (!settings.enabled) return;

  const g = 0.4;
  tone(523, 0.15, 'sine', g);                          // C5
  setTimeout(() => tone(659, 0.15, 'sine', g), 100);   // E5
  setTimeout(() => tone(784, 0.25, 'sine', g), 200);   // G5
}

/**
 * ❌ Hibás válasz — rövid "buzz" (alacsony frekvencia + zaj)
 */
export function playIncorrect(): void {
  const settings = getSoundSettings();
  if (!settings.enabled) return;

  tone(180, 0.25, 'sawtooth', 0.2);
  noiseBurst(0.15, 0.1);
}

/**
 * 🖱️ Kattintás / gomb nyomás — rövid "tick"
 */
export function playClick(): void {
  tone(800, 0.05, 'sine', 0.25);
}

/**
 * 🎯 Gomb kiválasztás — lágy "pop"
 */
export function playSelect(): void {
  tone(600, 0.08, 'sine', 0.3);
  setTimeout(() => tone(900, 0.06, 'sine', 0.15), 40);
}

/**
 * ⭐ Szint teljesítve / jutalom — emelkedő triad + csillogás
 */
export function playLevelUp(): void {
  const g = 0.35;
  tone(523, 0.2, 'sine', g);                           // C5
  setTimeout(() => tone(659, 0.2, 'sine', g), 150);    // E5
  setTimeout(() => tone(784, 0.2, 'sine', g), 300);    // G5
  setTimeout(() => tone(1047, 0.4, 'sine', g), 450);   // C6 (magas)
}

/**
 * ⏰ Idő lejárt — sürgető két hang
 */
export function playTimeUp(): void {
  twoTone(440, 330, 0.3, 0.35, 'triangle', 0.4);
}

/**
 * 📏 Vonalzó húzás — folyamatos alacsony "slide" tónus
 * Visszaad egy stop függvényt.
 */
export function playRulerSlide(): () => void {
  const settings = getSoundSettings();
  if (!settings.enabled) return () => {};

  const ctx = getCtx();
  const vol = 0.08 * settings.volume;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.value = 300;
  gain.gain.value = vol;

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();

  return () => {
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    setTimeout(() => osc.stop(), 150);
  };
}

/**
 * ⏱️ Tick-tack óra hang
 */
export function playTick(): void {
  tone(1200, 0.03, 'sine', 0.15);
}

/**
 * 🔔 Értesítés — rövid csengés
 */
export function playNotification(): void {
  twoTone(880, 1100, 0.12, 0.1, 'sine', 0.3);
}
