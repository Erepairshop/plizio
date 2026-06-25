import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "ai-mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What does an AI need in order to learn?",
      de: "Was braucht eine KI, um zu lernen?",
      hu: "Mire van szüksége egy MI-nek a tanuláshoz?",
      ro: "De ce are nevoie o IA pentru a învăța?"
    },
    options: [
      { en: "Training data (examples)", de: "Trainingsdaten (Beispiele)", hu: "Tanítóadat (példák)", ro: "Date de antrenare (exemple)" },
      { en: "A larger screen", de: "Einen größeren Bildschirm", hu: "Nagyobb képernyő", ro: "Un ecran mai mare" },
      { en: "A louder speaker", de: "Einen lauteren Lautsprecher", hu: "Hangosabb hangszóró", ro: "Un difuzor mai puternic" },
      { en: "A faster mouse", de: "Eine schnellere Maus", hu: "Gyorsabb egér", ro: "Un mouse mai rapid" }
    ],
    correctIndex: 0,
    explanation: {
      en: "AI learns by finding patterns in many examples, which we call training data. The more good examples it sees, the better it can answer.",
      de: "Eine KI lernt, indem sie Muster in vielen Beispielen findet, die wir Trainingsdaten nennen. Je mehr gute Beispiele sie sieht, desto besser kann sie antworten.",
      hu: "Az MI úgy tanul, hogy mintázatokat keres sok példában, amit tanítóadatnak nevezünk. Minél több jó példát lát, annál jobban tud válaszolni.",
      ro: "IA învață găsind tipare în multe exemple, pe care le numim date de antrenare. Cu cât vede mai multe exemple bune, cu atât răspunde mai bine."
    }
  },
  {
    id: "ai-mcq-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Why can an AI sometimes give unfair or wrong answers?",
      de: "Warum kann eine KI manchmal unfaire oder falsche Antworten geben?",
      hu: "Miért adhat egy MI néha igazságtalan vagy hibás választ?",
      ro: "De ce poate o IA să dea uneori răspunsuri nedrepte sau greșite?"
    },
    options: [
      { en: "Because its training data was biased or incomplete", de: "Weil ihre Trainingsdaten verzerrt oder unvollständig waren", hu: "Mert a tanítóadata elfogult vagy hiányos volt", ro: "Pentru că datele sale de antrenare au fost părtinitoare sau incomplete" },
      { en: "Because it gets tired", de: "Weil sie müde wird", hu: "Mert elfárad", ro: "Pentru că obosește" },
      { en: "Because it is angry", de: "Weil sie wütend ist", hu: "Mert mérges", ro: "Pentru că este supărată" },
      { en: "Because it needs sleep", de: "Weil sie Schlaf braucht", hu: "Mert aludnia kell", ro: "Pentru că are nevoie de somn" }
    ],
    correctIndex: 0,
    explanation: {
      en: "AI does not feel emotions. If the examples it learned from were one-sided or wrong, the AI can repeat that bias in its answers.",
      de: "Eine KI hat keine Gefühle. Wenn die Beispiele, aus denen sie gelernt hat, einseitig oder falsch waren, kann die KI diese Verzerrung in ihren Antworten wiederholen.",
      hu: "Az MI nem érez érzelmeket. Ha a példák, amelyekből tanult, egyoldalúak vagy hibásak voltak, az MI megismételheti ezt az elfogultságot a válaszaiban.",
      ro: "IA nu simte emoții. Dacă exemplele din care a învățat au fost unilaterale sau greșite, IA poate repeta această părtinire în răspunsurile sale."
    }
  }
];
