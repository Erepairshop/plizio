"use client";
// O1Explorer.tsx — router: island.id → specific ExplorerEngine component
import dynamic from "next/dynamic";
import LangExplore from "./LangExplore";
import type { IslandDef } from "@/lib/astroMagyar";

const LetterExplorer    = dynamic(() => import("./LetterExplorer"),    { ssr: false });
const SyllableExplorer  = dynamic(() => import("./SyllableExplorer"),  { ssr: false });
const SoundExplorer     = dynamic(() => import("./SoundExplorer"),     { ssr: false });
const WordExplorer      = dynamic(() => import("./WordExplorer"),      { ssr: false });
const OppositesExplorer = dynamic(() => import("./OppositesExplorer"), { ssr: false });
const SentenceExplorer  = dynamic(() => import("./SentenceExplorer"),  { ssr: false });
const AnimalsExplorer   = dynamic(() => import("./AnimalsExplorer"),   { ssr: false });
const FamilyExplorer    = dynamic(() => import("./FamilyExplorer"),    { ssr: false });
const BigTestExplorer   = dynamic(() => import("./BigTestExplorer"),   { ssr: false });

const ISLAND_MAP: Record<string, React.ComponentType<any>> = {
  i1: LetterExplorer,
  i2: SyllableExplorer,
  i3: SoundExplorer,
  i4: WordExplorer,
  i5: OppositesExplorer,
  i6: SentenceExplorer,
  i7: AnimalsExplorer,
  i8: FamilyExplorer,
  i9: BigTestExplorer,
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function O1Explorer({ island, grade, onDone, lang = "hu" }: Props) {
  const Component = ISLAND_MAP[island.id];
  if (Component) return <Component onDone={onDone} lang={lang} />;
  return <LangExplore island={island} grade={grade} onDone={onDone} />;
}
