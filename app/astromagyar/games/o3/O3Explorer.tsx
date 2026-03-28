"use client";
// O3Explorer.tsx — router: island.id → specific ExplorerEngine component
import dynamic from "next/dynamic";
import LangExplore from "../LangExplore";
import type { IslandDef } from "@/lib/astroMagyar";

const VerbTensesExplorer      = dynamic(() => import("./VerbTensesExplorer"),      { ssr: false });
const NounDeclensionExplorer  = dynamic(() => import("./NounDeclensionExplorer"),  { ssr: false });
const CompoundWordsO3Explorer = dynamic(() => import("./CompoundWordsO3Explorer"), { ssr: false });
const TextCompO3Explorer      = dynamic(() => import("./TextCompO3Explorer"),      { ssr: false });
const IdiomsExplorer          = dynamic(() => import("./IdiomsExplorer"),          { ssr: false });
const SpellingO3Explorer      = dynamic(() => import("./SpellingO3Explorer"),      { ssr: false });
const CompositionO3Explorer   = dynamic(() => import("./CompositionO3Explorer"),   { ssr: false });
const SentenceAnalysisO3Explorer = dynamic(() => import("./SentenceAnalysisO3Explorer"), { ssr: false });
const ReviewO3Explorer        = dynamic(() => import("./ReviewO3Explorer"),        { ssr: false });

const ISLAND_MAP: Record<string, React.ComponentType<any>> = {
  i1: VerbTensesExplorer,
  i2: NounDeclensionExplorer,
  i3: CompoundWordsO3Explorer,
  i4: TextCompO3Explorer,
  i5: IdiomsExplorer,
  i6: SpellingO3Explorer,
  i7: CompositionO3Explorer,
  i8: SentenceAnalysisO3Explorer,
  i9: ReviewO3Explorer,
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function O3Explorer({ island, grade, onDone, lang = "hu" }: Props) {
  const Component = ISLAND_MAP[island.id];
  if (Component) return <Component onDone={onDone} lang={lang} />;
  return <LangExplore island={island} grade={grade} onDone={onDone} />;
}
