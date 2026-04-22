import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const rounds: DragSortRound[] = [
  {
    id: "de-ds-1",
    requireFullCorrect: true,
    bins: [
      { id: "b-nomen", label: { en: "Nouns", de: "Nomen", hu: "Főnevek", ro: "Substantive" }, icon: "🏷️", color: "#3B82F6" },
      { id: "b-verben", label: { en: "Verbs", de: "Verben", hu: "Igék", ro: "Verbe" }, icon: "🏃", color: "#EF4444" }
    ],
    items: [
      { id: "i1", label: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, correctBinId: "b-nomen" },
      { id: "i2", label: { en: "laufen", de: "laufen", hu: "laufen", ro: "laufen" }, correctBinId: "b-verben" },
      { id: "i3", label: { en: "Haus", de: "Haus", hu: "Haus", ro: "Haus" }, correctBinId: "b-nomen" },
      { id: "i4", label: { en: "essen", de: "essen", hu: "essen", ro: "essen" }, correctBinId: "b-verben" }
    ]
  },
  {
    id: "de-ds-2",
    requireFullCorrect: true,
    bins: [
      { id: "b-der", label: { en: "der (m)", de: "der", hu: "der", ro: "der" }, icon: "♂️", color: "#2563EB" },
      { id: "b-die", label: { en: "die (f)", de: "die", hu: "die", ro: "die" }, icon: "♀️", color: "#EC4899" },
      { id: "b-das", label: { en: "das (n)", de: "das", hu: "das", ro: "das" }, icon: "⚪", color: "#10B981" }
    ],
    items: [
      { id: "i1", label: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, correctBinId: "b-der" },
      { id: "i2", label: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, correctBinId: "b-die" },
      { id: "i3", label: { en: "Haus", de: "Haus", hu: "Haus", ro: "Haus" }, correctBinId: "b-das" },
      { id: "i4", label: { en: "Mann", de: "Mann", hu: "Mann", ro: "Mann" }, correctBinId: "b-der" },
      { id: "i5", label: { en: "Frau", de: "Frau", hu: "Frau", ro: "Frau" }, correctBinId: "b-die" },
      { id: "i6", label: { en: "Kind", de: "Kind", hu: "Kind", ro: "Kind" }, correctBinId: "b-das" }
    ]
  },
  {
    id: "de-ds-3",
    requireFullCorrect: true,
    bins: [
      { id: "b-gross", label: { en: "Big", de: "Groß", hu: "Nagy", ro: "Mare" }, icon: "🔠", color: "#F59E0B" },
      { id: "b-klein", label: { en: "Small", de: "Klein", hu: "Kicsi", ro: "Mic" }, icon: "🔡", color: "#8B5CF6" }
    ],
    items: [
      { id: "i1", label: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, correctBinId: "b-gross" },
      { id: "i2", label: { en: "laufen", de: "laufen", hu: "laufen", ro: "laufen" }, correctBinId: "b-klein" },
      { id: "i3", label: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, correctBinId: "b-gross" },
      { id: "i4", label: { en: "schnell", de: "schnell", hu: "schnell", ro: "schnell" }, correctBinId: "b-klein" }
    ]
  }
];
