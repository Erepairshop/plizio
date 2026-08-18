import type { ReactNode } from 'react';
import {
  BarChart3,
  BookOpen,
  CloudSun,
  Compass,
  Leaf,
  Mountain,
  Network,
  type LucideIcon,
} from 'lucide-react';
import type { GeographySkillGameId } from '@/lib/visualLab/geographyCurriculum';
import type { GeographySkillLang } from '@/lib/visualLab/geographySkillContent';

export interface GeographyGameIdentity {
  icon: LucideIcon;
  frame: string;
  iconTone: string;
  contextTone: string;
  promptTone: string;
  optionTone: string;
  markerTone: string;
  progressTone: string;
  layout: string;
}

const IDENTITIES: Record<GeographySkillGameId, GeographyGameIdentity> = {
  'karten-kompass': {
    icon: Compass,
    frame: 'border-amber-300/35 bg-[linear-gradient(145deg,rgba(30,41,38,.98),rgba(15,55,52,.98))]',
    iconTone: 'border-amber-200/40 bg-amber-200/15 text-amber-100 rotate-3',
    contextTone: 'border-amber-200/25 bg-amber-100/10 text-amber-50',
    promptTone: 'border-dashed border-amber-200/35 bg-[#e8d7aa]/10 shadow-[inset_0_0_28px_rgba(245,158,11,.06)]',
    optionTone: 'border-amber-100/20 bg-[#102e2b]/85 hover:border-amber-200/60 hover:bg-amber-200/10',
    markerTone: 'border-amber-200/35 bg-amber-200/15 text-amber-100',
    progressTone: 'from-amber-300 to-teal-300',
    layout: 'sm:grid-cols-2',
  },
  'landschaft-detektiv': {
    icon: Mountain,
    frame: 'border-orange-300/30 bg-[linear-gradient(155deg,rgba(46,31,23,.98),rgba(49,46,30,.98))]',
    iconTone: 'border-orange-200/35 bg-orange-300/10 text-orange-100 -rotate-2',
    contextTone: 'border-orange-200/25 bg-black/20 text-orange-50',
    promptTone: 'border-orange-200/30 bg-[#fff7e6]/[.07] shadow-[5px_5px_0_rgba(251,146,60,.10)]',
    optionTone: 'border-orange-100/20 bg-black/25 hover:border-orange-200/60 hover:bg-orange-300/10',
    markerTone: 'border-orange-200/35 bg-orange-300/15 text-orange-100',
    progressTone: 'from-orange-300 to-lime-300',
    layout: 'sm:grid-cols-2',
  },
  'klima-labor': {
    icon: CloudSun,
    frame: 'border-cyan-300/30 bg-[linear-gradient(145deg,rgba(6,25,45,.99),rgba(8,51,68,.98))]',
    iconTone: 'border-cyan-200/35 bg-cyan-300/10 text-cyan-100',
    contextTone: 'border-cyan-200/25 bg-cyan-200/[.07] text-cyan-50',
    promptTone: 'border-cyan-200/25 bg-gradient-to-r from-cyan-300/[.08] to-blue-300/[.05]',
    optionTone: 'border-cyan-100/20 bg-sky-950/55 hover:border-cyan-200/60 hover:bg-cyan-300/10',
    markerTone: 'rounded-full border-cyan-200/35 bg-cyan-300/15 text-cyan-100',
    progressTone: 'from-cyan-300 to-blue-400',
    layout: 'sm:grid-cols-2',
  },
  'weltregionen-atlas': {
    icon: BookOpen,
    frame: 'border-indigo-300/30 bg-[linear-gradient(150deg,rgba(24,24,56,.99),rgba(39,28,67,.98))]',
    iconTone: 'border-indigo-200/35 bg-indigo-300/10 text-indigo-100',
    contextTone: 'border-indigo-200/25 bg-indigo-200/[.07] text-indigo-50',
    promptTone: 'border-indigo-200/30 bg-white/[.055] shadow-[inset_4px_0_0_rgba(165,180,252,.35)]',
    optionTone: 'border-indigo-100/20 bg-indigo-950/55 hover:border-indigo-200/60 hover:bg-indigo-300/10',
    markerTone: 'border-indigo-200/35 bg-indigo-300/15 text-indigo-100',
    progressTone: 'from-indigo-300 to-fuchsia-300',
    layout: 'sm:grid-cols-2',
  },
  'mensch-raum-netz': {
    icon: Network,
    frame: 'border-violet-300/30 bg-[linear-gradient(145deg,rgba(30,18,48,.99),rgba(25,38,61,.98))]',
    iconTone: 'border-violet-200/35 bg-violet-300/10 text-violet-100 rounded-full',
    contextTone: 'border-violet-200/25 bg-violet-200/[.07] text-violet-50',
    promptTone: 'border-violet-200/25 bg-black/20',
    optionTone: 'rounded-full border-violet-100/20 bg-violet-950/55 hover:border-violet-200/60 hover:bg-violet-300/10',
    markerTone: 'rounded-full border-violet-200/35 bg-violet-300/15 text-violet-100',
    progressTone: 'from-violet-300 to-cyan-300',
    layout: 'sm:grid-cols-2',
  },
  'geo-daten-check': {
    icon: BarChart3,
    frame: 'border-blue-300/30 bg-[linear-gradient(145deg,rgba(8,20,38,.99),rgba(10,31,55,.99))]',
    iconTone: 'border-blue-200/35 bg-blue-300/10 text-blue-100 rounded-md',
    contextTone: 'border-blue-200/25 bg-blue-200/[.06] font-mono text-blue-50',
    promptTone: 'border-blue-200/25 bg-[#071526]/85 font-mono shadow-[inset_0_0_32px_rgba(59,130,246,.08)]',
    optionTone: 'rounded-md border-blue-100/20 bg-[#071526]/80 font-mono hover:border-blue-200/60 hover:bg-blue-300/10',
    markerTone: 'rounded-md border-blue-200/35 bg-blue-300/15 font-mono text-blue-100',
    progressTone: 'from-blue-300 to-cyan-300',
    layout: 'sm:grid-cols-2',
  },
  'zukunfts-planer': {
    icon: Leaf,
    frame: 'border-emerald-300/35 bg-[linear-gradient(145deg,rgba(12,38,31,.99),rgba(19,51,42,.98))]',
    iconTone: 'border-emerald-200/35 bg-emerald-300/12 text-emerald-100 rounded-full',
    contextTone: 'border-emerald-200/25 bg-emerald-200/[.07] text-emerald-50',
    promptTone: 'border-emerald-200/30 bg-gradient-to-br from-emerald-300/[.09] to-lime-300/[.04]',
    optionTone: 'border-emerald-100/20 bg-emerald-950/55 hover:border-emerald-200/60 hover:bg-emerald-300/10',
    markerTone: 'rounded-full border-emerald-200/35 bg-emerald-300/15 text-emerald-100',
    progressTone: 'from-emerald-300 to-lime-300',
    layout: 'grid-cols-1',
  },
};

const CUE: Record<GeographySkillLang, Record<GeographySkillGameId, string>> = {
  de: { 'karten-kompass': 'ROUTE', 'landschaft-detektiv': 'SPUR', 'klima-labor': 'MESSUNG', 'weltregionen-atlas': 'ATLASBLATT', 'mensch-raum-netz': 'VERBINDUNG', 'geo-daten-check': 'DATENSATZ', 'zukunfts-planer': 'ENTSCHEIDUNG' },
  en: { 'karten-kompass': 'ROUTE', 'landschaft-detektiv': 'CLUE', 'klima-labor': 'READING', 'weltregionen-atlas': 'ATLAS PAGE', 'mensch-raum-netz': 'CONNECTION', 'geo-daten-check': 'DATASET', 'zukunfts-planer': 'DECISION' },
  hu: { 'karten-kompass': 'ÚTVONAL', 'landschaft-detektiv': 'NYOM', 'klima-labor': 'MÉRÉS', 'weltregionen-atlas': 'ATLASZLAP', 'mensch-raum-netz': 'KAPCSOLAT', 'geo-daten-check': 'ADATSOR', 'zukunfts-planer': 'DÖNTÉS' },
  ro: { 'karten-kompass': 'RUTĂ', 'landschaft-detektiv': 'INDICIU', 'klima-labor': 'MĂSURARE', 'weltregionen-atlas': 'PAGINĂ ATLAS', 'mensch-raum-netz': 'LEGĂTURĂ', 'geo-daten-check': 'SET DE DATE', 'zukunfts-planer': 'DECIZIE' },
};


export function geographyGameIdentity(gameId: GeographySkillGameId): GeographyGameIdentity {
  return IDENTITIES[gameId];
}

export function GeographyGameAtmosphere({ gameId }: { gameId: GeographySkillGameId }) {
  if (gameId === 'karten-kompass') return <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.16)_1px,transparent_1px)] [background-size:34px_34px]"><span className="absolute right-5 top-5 grid h-20 w-20 place-items-center rounded-full border border-amber-200/35 text-xs font-black text-amber-100/70">N<br />W · E<br />S</span></div>;
  if (gameId === 'landschaft-detektiv') return <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-20"><div className="absolute bottom-0 left-[-8%] h-24 w-[55%] -skew-x-12 bg-orange-200/35 [clip-path:polygon(0_100%,45%_5%,100%_100%)]" /><div className="absolute bottom-0 right-[-8%] h-20 w-[58%] skew-x-12 bg-lime-200/25 [clip-path:polygon(0_100%,55%_0,100%_100%)]" /></div>;
  if (gameId === 'klima-labor') return <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 flex gap-2 opacity-35"><span className="h-16 w-2 rounded-full bg-gradient-to-t from-blue-500 via-cyan-300 to-orange-300" /><span className="text-xs font-black tracking-widest text-cyan-100">°C<br />mm<br />↗</span></div>;
  if (gameId === 'weltregionen-atlas') return <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-indigo-200/20 opacity-40 before:absolute before:inset-5 before:rounded-full before:border before:border-indigo-200/25 after:absolute after:inset-x-4 after:top-1/2 after:border-t after:border-indigo-200/25" />;
  if (gameId === 'mensch-raum-netz') return <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 400 500" preserveAspectRatio="none"><path d="M30 90 L170 40 L350 120 L250 245 L80 300 L300 430" fill="none" stroke="rgb(216 180 254)" strokeWidth="2" strokeDasharray="7 8" />{[[30,90],[170,40],[350,120],[250,245],[80,300],[300,430]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="rgb(216 180 254)" />)}</svg>;
  if (gameId === 'geo-daten-check') return <div aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 flex h-20 items-end gap-1 opacity-25">{[35, 62, 46, 78, 55, 88].map((height, index) => <span key={index} className="w-2 bg-blue-300" style={{ height: `${height}%` }} />)}</div>;
  return <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-8 h-40 w-40 rounded-full border border-emerald-200/20 opacity-35 before:absolute before:inset-6 before:rounded-full before:border before:border-lime-200/25 after:absolute after:bottom-4 after:left-1/2 after:h-24 after:w-px after:-rotate-45 after:bg-emerald-200/30" />;
}

export function GeographyPromptCard({ gameId, lang, level, children }: { gameId: GeographySkillGameId; lang: GeographySkillLang; level: number; children: ReactNode }) {
  const identity = IDENTITIES[gameId];
  return <div className={`mb-4 rounded-xl border p-4 ${identity.promptTone}`}><div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-black tracking-[.22em] opacity-65"><span>{CUE[lang][gameId]}</span><span>{String(level).padStart(2, '0')}</span></div>{children}</div>;
}
