// ── Pool adatok az AstroMagyar O3 explorereihez ──────────────────

// ── SZÓFAJ_POOL ─────────────────────────────
// Szavak szófaj-címkével
export interface SzófajItem { word: string; fajta: 'I' | 'F' | 'M' | 'E' }
export const SZÓFAJ_POOL: SzófajItem[] = [
  { word: 'fut', fajta: 'I' },
  { word: 'olvas', fajta: 'I' },
  { word: 'eszik', fajta: 'I' },
  { word: 'alszik', fajta: 'I' },
  { word: 'nevet', fajta: 'I' },
  { word: 'asztal', fajta: 'F' },
  { word: 'kutya', fajta: 'F' },
  { word: 'virág', fajta: 'F' },
  { word: 'nagy', fajta: 'M' },
  { word: 'szép', fajta: 'M' },
  { word: 'gyorsan', fajta: 'E' },
];

// ── HIÁNYOS_POOL ────────────────────────────
// Lyukas mondatok (gap-fill)
export interface HiányosItem { sentence: string; options: string[]; correctIndex: number }
export const HIÁNYOS_POOL: HiányosItem[] = [
  { sentence: 'A macska _ az asztal alatt.', options: ['alszik', 'aludt', 'aludni'], correctIndex: 0 },
  { sentence: 'Tegnap Péter _ a parkba.', options: ['megy', 'ment', 'menni'], correctIndex: 1 },
  { sentence: 'Péter minden nap _ iskolába.', options: ['megy', 'ment', 'menni'], correctIndex: 0 },
  { sentence: 'Anna _ a szép képet.', options: ['nézi', 'nézett', 'nézni'], correctIndex: 0 },
];

// ── ESET_POOL ───────────────────────────────
// Mondatok nyelvtani eset-jelöléssel
export interface EsetItem { word: string; highlight: string; case: 'A' | 'T' | 'G' | 'D'; sentence: string }
export const ESET_POOL: EsetItem[] = [
  { word: 'kutya', highlight: 'kutya', case: 'A', sentence: 'A _kutya_ a kertben fut.' },
  { word: 'macska', highlight: 'macska', case: 'A', sentence: 'A _macska_ az asztalon ül.' },
  { word: 'kertben', highlight: 'kertben', case: 'G', sentence: 'A gyerekek a _kertben_ játszanak.' },
  { word: 'iskolában', highlight: 'iskolában', case: 'G', sentence: 'Péter az _iskolában_ tanul.' },
  { word: 'könyvet', highlight: 'könyvet', case: 'T', sentence: 'Anna a _könyvet_ olvassa.' },
  { word: 'labdát', highlight: 'labdát', case: 'T', sentence: 'A fiú a _labdát_ rúgja.' },
];

// ── TOLDALÉK_POOL ───────────────────────────
// Toldalék-gyakorlatok
export interface ToldalékItem { base: string; root: string; suffix: string; full: string; hint: string; endings: string[]; correctIndex: number }
export const TOLDALÉK_POOL: ToldalékItem[] = [
  { base: 'ház', root: 'ház', suffix: '-ban', full: 'házban', hint: 'mély hangrendű', endings: ['-ban', '-ben', '-on'], correctIndex: 0 },
  { base: 'kert', root: 'kert', suffix: '-ben', full: 'kertben', hint: 'magas hangrendű', endings: ['-ban', '-ben', '-on'], correctIndex: 1 },
  { base: 'iskola', root: 'iskola', suffix: '-ban', full: 'iskolában', hint: 'mély hangrendű', endings: ['-ban', '-ben', '-on'], correctIndex: 0 },
  { base: 'szék', root: 'szék', suffix: '-en', full: 'széken', hint: 'magas hangrendű', endings: ['-en', '-ön', '-on'], correctIndex: 0 },
];

// ── SZÓCSALÁD_POOL ──────────────────────────
// Szócsaládok (közös szótő + rokon szavak)
export interface SzócsaládItem { root: string; words: string[] }
export const SZÓCSALÁD_POOL: SzócsaládItem[] = [
  { root: 'szép', words: ['szépség', 'szépít', 'szépséges'] },
  { root: 'ír', words: ['írás', 'író', 'íróasztal'] },
  { root: 'fut', words: ['futás', 'futó', 'futball'] },
];

// ── MONDATOK_POOL ───────────────────────────
// Mondatok szórendezéshez
export interface MondatItem { words: string[]; text: string }
export const MONDATOK_POOL: MondatItem[] = [
  { words: ['A', 'macska', 'alszik', 'a', 'fotelben.'], text: 'A macska alszik a fotelben.' },
  { words: ['Péter', 'elment', 'az', 'iskolába', 'ma.'], text: 'Péter elment az iskolába ma.' },
  { words: ['A', 'gyerekek', 'a', 'parkban', 'játszanak.'], text: 'A gyerekek a parkban játszanak.' },
];

// ── TÖRTÉNET_POOL ───────────────────────────
// Rövid történetek szövegértéshez
export interface TörténetItem { title: string; text: string; sentences: string[]; question: string; options: string[]; correctIndex: number }
export const TÖRTÉNET_POOL: TörténetItem[] = [
  {
    title: 'A kis kutya',
    text: 'Egyszer volt egy kis kutya. A kutya nagyon szeretett játszani. Egy nap talált egy labdát a parkban. Hazavitte a gazdájának.',
    sentences: ['Egyszer volt egy kis kutya.', 'A kutya nagyon szeretett játszani.', 'Egy nap talált egy labdát a parkban.', 'Hazavitte a gazdájának.'],
    question: 'Mit talált a kutya?',
    options: ['Labdát', 'Csontot', 'Botot', 'Cipőt'],
    correctIndex: 0,
  },
  {
    title: 'Péter napja',
    text: 'Péter reggel felkelt és megreggelizett. Aztán elment az iskolába. Délután focizott a barátaival.',
    sentences: ['Péter reggel felkelt.', 'Megreggelizett.', 'Elment az iskolába.', 'Délután focizott a barátaival.'],
    question: 'Mit csinált Péter délután?',
    options: ['Tanult', 'Focizott', 'Aludt', 'Olvasott'],
    correctIndex: 1,
  },
  {
    title: 'Anna könyve',
    text: 'Anna kapott egy új könyvet. Nagyon szerette olvasni. Minden este két fejezetet olvasott belőle.',
    sentences: ['Anna kapott egy új könyvet.', 'Nagyon szerette olvasni.', 'Minden este két fejezetet olvasott.', 'A könyv hamar elfogyott.'],
    question: 'Mennyit olvasott Anna esténként?',
    options: ['Egy oldalt', 'Két fejezetet', 'Az egészet', 'Semmit'],
    correctIndex: 1,
  },
];
