import type { ReactNode } from "react";
import { BookMarked, FilePenLine, Network, ScanText, Search, Wrench, type LucideIcon } from "lucide-react";
import type { LanguageSkillGameId, LanguageSkillLang } from "@/lib/visualLab/languageSkillContent";

export interface LanguageGameIdentity {
  icon: LucideIcon;
  frame: string;
  iconTone: string;
  panelTone: string;
  actionTone: string;
  progressTone: string;
}

const IDENTITIES: Record<LanguageSkillGameId, LanguageGameIdentity> = {
  "lese-detektiv": {
    icon: Search,
    frame: "border-amber-300/30 bg-[linear-gradient(145deg,rgba(43,32,23,.99),rgba(35,27,37,.98))]",
    iconTone: "border-amber-200/35 bg-amber-300/10 text-amber-100 -rotate-2",
    panelTone: "border-amber-200/25 bg-amber-100/[.07] text-amber-50",
    actionTone: "bg-amber-200 text-stone-950",
    progressTone: "from-amber-300 to-orange-300",
  },
  "grammatik-scanner": {
    icon: ScanText,
    frame: "border-cyan-300/30 bg-[linear-gradient(145deg,rgba(5,25,43,.99),rgba(7,48,58,.98))]",
    iconTone: "border-cyan-200/35 bg-cyan-300/10 text-cyan-100",
    panelTone: "border-cyan-200/25 bg-cyan-200/[.06] text-cyan-50",
    actionTone: "bg-cyan-200 text-slate-950",
    progressTone: "from-cyan-300 to-blue-400",
  },
  "text-retter": {
    icon: Wrench,
    frame: "border-rose-300/30 bg-[linear-gradient(145deg,rgba(48,19,31,.99),rgba(42,28,36,.98))]",
    iconTone: "border-rose-200/35 bg-rose-300/10 text-rose-100 rotate-2",
    panelTone: "border-rose-200/25 bg-rose-200/[.06] text-rose-50",
    actionTone: "bg-rose-200 text-rose-950",
    progressTone: "from-rose-300 to-orange-300",
  },
  "wort-netz": {
    icon: Network,
    frame: "border-violet-300/30 bg-[linear-gradient(145deg,rgba(31,20,51,.99),rgba(22,36,58,.98))]",
    iconTone: "rounded-full border-violet-200/35 bg-violet-300/10 text-violet-100",
    panelTone: "border-violet-200/25 bg-violet-200/[.06] text-violet-50",
    actionTone: "bg-violet-200 text-violet-950",
    progressTone: "from-violet-300 to-fuchsia-300",
  },
  "schreibwerkstatt": {
    icon: FilePenLine,
    frame: "border-emerald-300/30 bg-[linear-gradient(145deg,rgba(12,39,34,.99),rgba(27,46,38,.98))]",
    iconTone: "border-emerald-200/35 bg-emerald-300/10 text-emerald-100",
    panelTone: "border-emerald-200/25 bg-emerald-200/[.06] text-emerald-50",
    actionTone: "bg-emerald-200 text-emerald-950",
    progressTone: "from-emerald-300 to-lime-300",
  },
  "literatur-lupe": {
    icon: BookMarked,
    frame: "border-indigo-300/30 bg-[linear-gradient(145deg,rgba(25,24,57,.99),rgba(48,27,61,.98))]",
    iconTone: "rounded-full border-indigo-200/35 bg-indigo-300/10 text-indigo-100",
    panelTone: "border-indigo-200/25 bg-indigo-200/[.06] text-indigo-50",
    actionTone: "bg-indigo-200 text-indigo-950",
    progressTone: "from-indigo-300 to-fuchsia-300",
  },
};

const LABELS: Record<LanguageSkillLang, Record<LanguageSkillGameId, string>> = {
  de: { "lese-detektiv": "FALLAKTE", "grammatik-scanner": "ANALYSE", "text-retter": "REPARATUR", "wort-netz": "VERBINDUNG", "schreibwerkstatt": "ENTWURF", "literatur-lupe": "TEXTSPUR" },
  en: { "lese-detektiv": "CASE FILE", "grammatik-scanner": "ANALYSIS", "text-retter": "REPAIR", "wort-netz": "CONNECTION", "schreibwerkstatt": "DRAFT", "literatur-lupe": "TEXT CLUE" },
  hu: { "lese-detektiv": "AKTA", "grammatik-scanner": "ELEMZÉS", "text-retter": "JAVÍTÁS", "wort-netz": "KAPCSOLAT", "schreibwerkstatt": "VÁZLAT", "literatur-lupe": "SZÖVEGNYOM" },
  ro: { "lese-detektiv": "DOSAR", "grammatik-scanner": "ANALIZĂ", "text-retter": "REPARARE", "wort-netz": "LEGĂTURĂ", "schreibwerkstatt": "SCHIȚĂ", "literatur-lupe": "INDICIU" },
};

export function languageGameIdentity(gameId: LanguageSkillGameId): LanguageGameIdentity {
  return IDENTITIES[gameId];
}

export function LanguageGameAtmosphere({ gameId }: { gameId: LanguageSkillGameId }) {
  if (gameId === "lese-detektiv") return <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(251,191,36,.14)_1px,transparent_1px)] [background-size:100%_32px]" />;
  if (gameId === "grammatik-scanner") return <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-cyan-200/15 shadow-[0_0_45px_12px_rgba(34,211,238,.10)]" />;
  if (gameId === "text-retter") return <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-8 h-32 w-32 rotate-12 border-2 border-dashed border-rose-200/15" />;
  if (gameId === "wort-netz") return <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 400 500" preserveAspectRatio="none"><path d="M40 90 L200 45 L355 130 M200 45 L120 300 L310 410 M355 130 L120 300" fill="none" stroke="rgb(221 214 254)" strokeWidth="2" strokeDasharray="6 8" /></svg>;
  if (gameId === "schreibwerkstatt") return <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 bottom-4 h-24 opacity-15 [background-image:linear-gradient(rgba(167,243,208,.5)_1px,transparent_1px)] [background-size:100%_24px]" />;
  return <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-indigo-200/20 opacity-35 before:absolute before:inset-8 before:rounded-full before:border before:border-fuchsia-200/20" />;
}

export function LanguagePromptCard({ gameId, lang, level, children }: { gameId: LanguageSkillGameId; lang: LanguageSkillLang; level: number; children: ReactNode }) {
  const identity = IDENTITIES[gameId];
  return <div className={`mb-4 rounded-xl border p-4 ${identity.panelTone}`}><div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-black tracking-[.2em] opacity-60"><span>{LABELS[lang][gameId]}</span><span>{String(level).padStart(2, "0")}</span></div>{children}</div>;
}
