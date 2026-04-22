import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";
export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "ges-mcq-1",
    taskDescription: { en: "Choose the correct answer.", de: "Wähle die richtige Antwort.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
    question: { en: "Who was the first Emperor of Rome?", de: "Wer war der erste Kaiser von Rom?", hu: "Ki volt Róma első császára?", ro: "Cine a fost primul împărat al Romei?" },
    options: [
      { en: "Julius Caesar", de: "Julius Cäsar", hu: "Julius Caesar", ro: "Iulius Cezar" },
      { en: "Augustus", de: "Augustus", hu: "Augustus", ro: "Augustus" },
      { en: "Nero", de: "Nero", hu: "Néró", ro: "Nero" },
      { en: "Caligula", de: "Caligula", hu: "Caligula", ro: "Caligula" }
    ],
    correctIndex: 1,
    explanation: { en: "Augustus (Octavian) was the first Roman Emperor.", de: "Augustus (Octavian) war der erste römische Kaiser.", hu: "Augustus (Octavianus) volt az első római császár.", ro: "Augustus (Octavian) a fost primul împărat roman." }
  },
  {
    id: "ges-mcq-2",
    taskDescription: { en: "Choose the correct answer.", de: "Wähle die richtige Antwort.", hu: "Válaszd ki a helyes választ.", ro: "Alege răspunsul corect." },
    question: { en: "What ancient civilization built the pyramids?", de: "Welche antike Zivilisation baute die Pyramiden?", hu: "Melyik ókori civilizáció építette a piramisokat?", ro: "Ce civilizație antică a construit piramidele?" },
    options: [
      { en: "Greeks", de: "Griechen", hu: "Görögök", ro: "Grecii" },
      { en: "Romans", de: "Römer", hu: "Rómaiak", ro: "Romanii" },
      { en: "Egyptians", de: "Ägypter", hu: "Egyiptomiak", ro: "Egiptenii" },
      { en: "Mesopotamians", de: "Mesopotamier", hu: "Mezopotámiaiak", ro: "Mesopotamienii" }
    ],
    correctIndex: 2,
    explanation: { en: "The ancient Egyptians built pyramids as tombs for their pharaohs.", de: "Die alten Ägypter bauten Pyramiden als Gräber für ihre Pharaonen.", hu: "Az ókori egyiptomiak piramisokat építettek fáraóik sírjaként.", ro: "Egiptenii antici au construit piramide ca morminte pentru faraonii lor." }
  }
];
