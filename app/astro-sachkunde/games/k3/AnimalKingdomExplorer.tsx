"use client";
import React, { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    round1Title: "Vertebrates", round1Text: "Animals with backbones are vertebrates. Fish, birds, reptiles, mammals!",
    q1: "Which animal has a backbone?", a1: "Dog", a2: "Butterfly", a3: "Crab", a4: "Worm",
    round2Title: "Invertebrates", round2Text: "Some animals have NO backbone. Insects, spiders, crabs!",
    q2: "Which animal is an invertebrate?", a5: "Butterfly", a6: "Lion", a7: "Penguin", a8: "Fish",
    round3Title: "Animal Groups", round3Text: "Mammals have fur. Birds have feathers. Reptiles have scales!",
    q3: "What covers a bird's body?", a9: "Feathers", a10: "Fur", a11: "Scales", a12: "Skin",
    round4Title: "Food Chains", round4Text: "Plants feed animals. Animals feed other animals. It's a chain!",
    q4: "What do herbivores eat?", a13: "Plants", a14: "Meat", a15: "Insects", a16: "Everything",
    round5Title: "Review", round5Text: "Quick questions about animals!",
    q5: "How many legs does an insect have?", a17: "6", a18: "4", a19: "8", a20: "10",
    q6: "Which animal is a mammal?", a21: "Cat", a22: "Lizard", a23: "Eagle", a24: "Salmon",
  },
  de: {
    round1Title: "Wirbeltiere", round1Text: "Tiere mit Rückgrat sind Wirbeltiere. Fische, Vögel, Reptilien, Säugetiere!",
    q1: "Welches Tier hat ein Rückgrat?", a1: "Hund", a2: "Schmetterling", a3: "Krabbe", a4: "Wurm",
    round2Title: "Wirbellose", round2Text: "Manche Tiere haben KEIN Rückgrat. Insekten, Spinnen, Krabben!",
    q2: "Welches Tier ist ein Wirbelloses?", a5: "Schmetterling", a6: "Löwe", a7: "Pinguin", a8: "Fisch",
    round3Title: "Tiergruppen", round3Text: "Säugetiere haben Fell. Vögel haben Federn. Reptilien haben Schuppen!",
    q3: "Was bedeckt den Körper eines Vogels?", a9: "Federn", a10: "Fell", a11: "Schuppen", a12: "Haut",
    round4Title: "Nahrungsketten", round4Text: "Pflanzen füttern Tiere. Tiere füttern andere Tiere. Es ist eine Kette!",
    q4: "Was essen Pflanzenfresser?", a13: "Pflanzen", a14: "Fleisch", a15: "Insekten", a16: "Alles",
    round5Title: "Wiederholung", round5Text: "Schnelle Fragen über Tiere!",
    q5: "Wie viele Beine hat ein Insekt?", a17: "6", a18: "4", a19: "8", a20: "10",
    q6: "Welches Tier ist ein Säugetier?", a21: "Katze", a22: "Echse", a23: "Adler", a24: "Lachs",
  },
  hu: {
    round1Title: "Gerincesek", round1Text: "Az állatok gerinccelű gerincessek. Halak, madarak, hüllők, emlősök!",
    q1: "Melyik állatnak van gerinc?", a1: "Kutya", a2: "Pillangó", a3: "Rák", a4: "Féreg",
    round2Title: "Gerinctelenesk", round2Text: "Néhány állatnak NINCS gerinc. Rovarok, pók, rákok!",
    q2: "Melyik állat gerincetelen?", a5: "Pillangó", a6: "Oroszlán", a7: "Pingvin", a8: "Hal",
    round3Title: "Állatcsoportok", round3Text: "Emlősöknek szőr van. Madaraknak tollak vannak. Hüllőknek pikkelyek!",
    q3: "Mi borítja a madár testét?", a9: "Tollak", a10: "Szőr", a11: "Pikkelyek", a12: "Bőr",
    round4Title: "Táplálékláncok", round4Text: "Növények etetik az állatokat. Az állatok más állatokat etetnek. Lánc!",
    q4: "Mit esznek a növényevők?", a13: "Növények", a14: "Hús", a15: "Rovarok", a16: "Mindent",
    round5Title: "Ismétlés", round5Text: "Gyors kérdések az állatokról!",
    q5: "Hány lába van a rovarnak?", a17: "6", a18: "4", a19: "8", a20: "10",
    q6: "Melyik állat emlős?", a21: "Macska", a22: "Gyík", a23: "Sas", a24: "Lazac",
  },
  ro: {
    round1Title: "Vertebrate", round1Text: "Animalele cu coloană vertebrală sunt vertebrate. Pești, păsări, reptile, mamifere!",
    q1: "Ce animal are coloană vertebrală?", a1: "Câine", a2: "Fluture", a3: "Crab", a4: "Vierme",
    round2Title: "Nevertebrate", round2Text: "Unele animale NU au coloană vertebrală. Insecte, păianjeni, ráci!",
    q2: "Ce animal este nevertebrat?", a5: "Fluture", a6: "Leu", a7: "Pinguin", a8: "Pește",
    round3Title: "Grupuri de animale", round3Text: "Mamiferele au blană. Păsările au pene. Reptilele au solzi!",
    q3: "Ce acoperă corpul unei păsări?", a9: "Pene", a10: "Blană", a11: "Solzi", a12: "Piele",
    round4Title: "Lanțuri alimentare", round4Text: "Plantele hrănesc animalele. Animalele hrănesc alte animale. E un lanț!",
    q4: "Ce mănâncă erbivore?", a13: "Plante", a14: "Carne", a15: "Insecte", a16: "Tot",
    round5Title: "Revizuire", round5Text: "Întrebări rapide despre animale!",
    q5: "Câte picioare are un insect?", a17: "6", a18: "4", a19: "8", a20: "10",
    q6: "Ce animal este mamifer?", a21: "Pisică", a22: "Șopârlă", a23: "Vultur", a24: "Somon",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "round1Title",
      infoText: "round1Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🦴</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "a2", "a3", "a4"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "round2Title",
      infoText: "round2Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🦗</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a5", "a6", "a7", "a8"], answer: "a5" }],
    },
    {
      type: "mcq",
      infoTitle: "round3Title",
      infoText: "round3Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🦜</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a9", "a10", "a11", "a12"], answer: "a9" }],
    },
    {
      type: "mcq",
      infoTitle: "round4Title",
      infoText: "round4Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">🔗</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a13", "a14", "a15", "a16"], answer: "a13" }],
    },
    {
      type: "mcq",
      infoTitle: "round5Title",
      infoText: "round5Text",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a2e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#fff">❓</text>
        </svg>
      ),
      questions: [
        { question: "q5", choices: ["a17", "a18", "a19", "a20"], answer: "a17" },
        { question: "q6", choices: ["a21", "a22", "a23", "a24"], answer: "a21" },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default memo(function AnimalKingdomExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
});
