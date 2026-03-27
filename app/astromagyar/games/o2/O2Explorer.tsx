"use client";
// O2Explorer.tsx — router: island.id → specific ExplorerEngine component
import dynamic from "next/dynamic";
import LangExplore from "../LangExplore";
import type { IslandDef } from "@/lib/astroMagyar";

const WordTypesExplorer   = dynamic(() => import("./WordTypesExplorer"),   { ssr: false });
const ReadingExplorer     = dynamic(() => import("./ReadingExplorer"),     { ssr: false });
const SpellingO2Explorer  = dynamic(() => import("./SpellingO2Explorer"),  { ssr: false });
const GrammarO2Explorer   = dynamic(() => import("./GrammarO2Explorer"),   { ssr: false });
const CompoundWordsExplorer = dynamic(() => import("./CompoundWordsExplorer"), { ssr: false });
const ConjugationO2Explorer = dynamic(() => import("./ConjugationO2Explorer"), { ssr: false });
const SynonymsExplorer    = dynamic(() => import("./SynonymsExplorer"),    { ssr: false });
const VocabularyO2Explorer = dynamic(() => import("./VocabularyO2Explorer"), { ssr: false });
const ReviewO2Explorer    = dynamic(() => import("./ReviewO2Explorer"),    { ssr: false });

const ISLAND_MAP: Record<string, React.ComponentType<any>> = {
  i1: WordTypesExplorer,
  i2: ReadingExplorer,
  i3: SpellingO2Explorer,
  i4: GrammarO2Explorer,
  i5: CompoundWordsExplorer,
  i6: ConjugationO2Explorer,
  i7: SynonymsExplorer,
  i8: VocabularyO2Explorer,
  i9: ReviewO2Explorer,
};

interface Props {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
  lang?: string;
}

export default function O2Explorer({ island, grade, onDone, lang = "hu" }: Props) {
  const Component = ISLAND_MAP[island.id];
  if (Component) return <Component onDone={onDone} lang={lang} />;
  return <LangExplore island={island} grade={grade} onDone={onDone} />;
}
