import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const rounds: DragSortRound[] = [
  {
    id: "hu-ds-1",
    requireFullCorrect: true,
    bins: [
      { id: "b-am", label: { en: "A-M", de: "A-M", hu: "A-M", ro: "A-M" }, icon: "🔤", color: "#4CAF50" },
      { id: "b-nz", label: { en: "N-Z", de: "N-Z", hu: "N-Z", ro: "N-Z" }, icon: "🔠", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "Apfel", de: "Apfel", hu: "alma", ro: "mar" }, correctBinId: "b-am" },
      { id: "i2", label: { en: "Buch", de: "Buch", hu: "konyv", ro: "carte" }, correctBinId: "b-am" },
      { id: "i3", label: { en: "Tisch", de: "Tisch", hu: "asztal", ro: "masa" }, correctBinId: "b-nz" },
      { id: "i4", label: { en: "Zug", de: "Zug", hu: "vonat", ro: "tren" }, correctBinId: "b-nz" }
    ]
  },
  {
    id: "hu-ds-2",
    requireFullCorrect: true,
    bins: [
      { id: "b-vowel", label: { en: "Starts with vowel", de: "Beginnt mit Vokal", hu: "Maganhangzoval kezdodik", ro: "Incepe cu vocala" }, icon: "🟢", color: "#16A34A" },
      { id: "b-cons", label: { en: "Starts with consonant", de: "Beginnt mit Konsonant", hu: "Massalhangzoval kezdodik", ro: "Incepe cu consoana" }, icon: "🔵", color: "#2563EB" }
    ],
    items: [
      { id: "i1", label: { en: "Apfel", de: "Apfel", hu: "alma", ro: "mar" }, correctBinId: "b-vowel" },
      { id: "i2", label: { en: "Orange", de: "Orange", hu: "narancs", ro: "portocala" }, correctBinId: "b-vowel" },
      { id: "i3", label: { en: "Katze", de: "Katze", hu: "macska", ro: "pisica" }, correctBinId: "b-cons" },
      { id: "i4", label: { en: "Brot", de: "Brot", hu: "kenyer", ro: "paine" }, correctBinId: "b-cons" }
    ]
  },
  {
    id: "hu-ds-3",
    requireFullCorrect: true,
    bins: [
      { id: "b-start", label: { en: "Sentence start", de: "Satzanfang", hu: "Mondat eleje", ro: "Inceput propozitie" }, icon: "1️⃣", color: "#F59E0B" },
      { id: "b-end", label: { en: "Sentence end", de: "Satzende", hu: "Mondat vege", ro: "Sfarsit propozitie" }, icon: "2️⃣", color: "#8B5CF6" }
    ],
    items: [
      { id: "i1", label: { en: "Ich", de: "Ich", hu: "en", ro: "eu" }, correctBinId: "b-start" },
      { id: "i2", label: { en: "Die Katze", de: "Die Katze", hu: "a macska", ro: "pisica" }, correctBinId: "b-start" },
      { id: "i3", label: { en: "lerne.", de: "lerne.", hu: "tanulok.", ro: "invat." }, correctBinId: "b-end" },
      { id: "i4", label: { en: "schlaft.", de: "schlaft.", hu: "alszik.", ro: "doarme." }, correctBinId: "b-end" }
    ]
  }
];
