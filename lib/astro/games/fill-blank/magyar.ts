import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "mag-fb-1",
    taskDescription: {
      en: "Fill in the blank.",
      de: "Fülle die Lücke aus.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează spațiul liber."
    },
    sentenceParts: {
      before: {
        en: "Acids have a pH value less than ",
        de: "Säuren haben einen pH-Wert kleiner als ",
        hu: "A savak pH értéke kisebb, mint ",
        ro: "Acizii au o valoare a pH-ului mai mică de "
      },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "7", de: "7", hu: "7", ro: "7" },
      { en: "0", de: "0", hu: "0", ro: "0" },
      { en: "14", de: "14", hu: "14", ro: "14" }
    ],
    correctIndex: 0
  },
  {
    id: "mag-fb-2",
    taskDescription: {
      en: "Fill in the blank.",
      de: "Fülle die Lücke aus.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează spațiul liber."
    },
    sentenceParts: {
      before: {
        en: "The smallest unit of an element is the ",
        de: "Die kleinste Einheit eines Elements ist das ",
        hu: "Az elem legkisebb egysége az ",
        ro: "Cea mai mică unitate a unui element este "
      },
      after: { en: ".", de: ".", hu: ".", ro: "." }
    },
    options: [
      { en: "atom", de: "Atom", hu: "atom", ro: "atomul" },
      { en: "molecule", de: "Molekül", hu: "molekula", ro: "molecula" },
      { en: "compound", de: "Verbindung", hu: "vegyület", ro: "compusul" }
    ],
    correctIndex: 0
  },
  {
    id: "mag-fb-3",
    taskDescription: {
      en: "Fill in the blank.",
      de: "Fülle die Lücke aus.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează spațiul liber."
    },
    sentenceParts: {
      before: {
        en: "Water is a chemical ",
        de: "Wasser ist eine chemische ",
        hu: "A víz egy kémiai ",
        ro: "Apa este un "
      },
      after: {
        en: " made of hydrogen and oxygen.",
        de: " aus Wasserstoff und Sauerstoff.",
        hu: ", amely hidrogénből és oxigénből áll.",
        ro: " chimic format din hidrogen și oxigen."
      }
    },
    options: [
      { en: "compound", de: "Verbindung", hu: "vegyület", ro: "compus" },
      { en: "element", de: "Element", hu: "elem", ro: "element" },
      { en: "mixture", de: "Mischung", hu: "keverék", ro: "amestec" }
    ],
    correctIndex: 0
  }
];
