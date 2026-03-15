/**
 * astromath-sounds.ts — Web Audio API szintetizált hangok az AstroMath animációkhoz
 * Nincs MP3 fájl, minden hang valós időben generálódik.
 */

let _ctx: AudioContext | null = null;

function ctx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!_ctx) _ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (_ctx.state === "suspended") _ctx.resume();
    return _ctx;
  } catch { return null; }
}

// ─── Phase 1: Sziget teljesítve — diadalmas 4 hangos arpeggio ─────────────────
export function playIslandComplete() {
  const ac = ctx();
  if (!ac) return;
  // C5 E5 G5 C6 — dúr akkord felfelé
  const freqs = [523.25, 659.25, 783.99, 1046.50];
  freqs.forEach((freq, i) => {
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = "sine";
    osc.frequency.value = freq;
    const t = ac.currentTime + i * 0.13;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.28, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);
    osc.start(t);
    osc.stop(t + 0.7);
  });

  // Extra glitter: magasabb frekvenciák csillogáshoz
  [2093, 2637].forEach((freq, i) => {
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = "sine";
    osc.frequency.value = freq;
    const t = ac.currentTime + 0.4 + i * 0.1;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.1, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
    osc.start(t);
    osc.stop(t + 0.45);
  });
}

// ─── Phase 3: Rakéta leszáll — whoosh lefele ──────────────────────────────────
export function playRocketDescend() {
  const ac = ctx();
  if (!ac) return;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(700, ac.currentTime);
  osc.frequency.exponentialRampToValueAtTime(130, ac.currentTime + 0.9);
  gain.gain.setValueAtTime(0, ac.currentTime);
  gain.gain.linearRampToValueAtTime(0.12, ac.currentTime + 0.05);
  gain.gain.setValueAtTime(0.12, ac.currentTime + 0.5);
  gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 1.0);
  osc.start(ac.currentTime);
  osc.stop(ac.currentTime + 1.05);
}

// ─── Phase 4: Energiatöltés — elektromos zümmögés ─────────────────────────────
export function playFueling() {
  const ac = ctx();
  if (!ac) return;

  // Alap elektromos zümmögés (fűrészfog + vibráló LFO)
  const osc = ac.createOscillator();
  const lfo = ac.createOscillator();
  const lfoGain = ac.createGain();
  const gain = ac.createGain();
  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = "sawtooth";
  osc.frequency.value = 110;
  osc.frequency.linearRampToValueAtTime(180, ac.currentTime + 2.0);
  lfo.type = "sine";
  lfo.frequency.value = 7;
  lfoGain.gain.value = 12;
  gain.gain.setValueAtTime(0, ac.currentTime);
  gain.gain.linearRampToValueAtTime(0.10, ac.currentTime + 0.4);
  gain.gain.setValueAtTime(0.10, ac.currentTime + 2.0);
  gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 2.6);
  lfo.start(ac.currentTime);
  osc.start(ac.currentTime);
  lfo.stop(ac.currentTime + 2.7);
  osc.stop(ac.currentTime + 2.7);

  // Sporadikus "kipattanás" hangok a töltés alatt
  [0.3, 0.8, 1.3, 1.8].forEach(delay => {
    const click = ac.createOscillator();
    const cGain = ac.createGain();
    click.connect(cGain);
    cGain.connect(ac.destination);
    click.type = "square";
    const f = 400 + Math.random() * 600;
    click.frequency.setValueAtTime(f, ac.currentTime + delay);
    click.frequency.exponentialRampToValueAtTime(f * 0.3, ac.currentTime + delay + 0.06);
    cGain.gain.setValueAtTime(0.08, ac.currentTime + delay);
    cGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + delay + 0.07);
    click.start(ac.currentTime + delay);
    click.stop(ac.currentTime + delay + 0.08);
  });
}

// ─── Phase 6: Gyújtás + felszállás — mély morgás + felszálló swoosh ───────────
export function playLaunch() {
  const ac = ctx();
  if (!ac) return;

  // Mély motormoraj (fehér zaj + lowpass szűrő)
  const bufferSize = Math.floor(ac.sampleRate * 2.0);
  const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = ac.createBufferSource();
  noise.buffer = buffer;

  const filter = ac.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(60, ac.currentTime);
  filter.frequency.linearRampToValueAtTime(300, ac.currentTime + 1.6);

  const noiseGain = ac.createGain();
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ac.destination);
  noiseGain.gain.setValueAtTime(0, ac.currentTime);
  noiseGain.gain.linearRampToValueAtTime(0.5, ac.currentTime + 0.15);
  noiseGain.gain.setValueAtTime(0.5, ac.currentTime + 1.0);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 2.0);
  noise.start(ac.currentTime);

  // Felszálló frekvencia sweep (rakéta távolodik)
  const osc = ac.createOscillator();
  const oscGain = ac.createGain();
  osc.connect(oscGain);
  oscGain.connect(ac.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(80, ac.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, ac.currentTime + 1.8);
  oscGain.gain.setValueAtTime(0, ac.currentTime);
  oscGain.gain.linearRampToValueAtTime(0.22, ac.currentTime + 0.1);
  oscGain.gain.setValueAtTime(0.22, ac.currentTime + 0.8);
  oscGain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 2.0);
  osc.start(ac.currentTime);
  osc.stop(ac.currentTime + 2.1);
}
