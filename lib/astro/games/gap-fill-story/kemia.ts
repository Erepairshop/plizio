import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "kem-gfs-1",
    taskDescription: {
      en: "Fill in the blanks about atoms.",
      de: "Fülle die Lücken über Atome aus.",
      hu: "Egészítsd ki az atomokról szóló hiányos szöveget.",
      ro: "Completează spațiile libere despre atomi."
    },
    story: {
      en: "Everything around us is made of tiny particles called {{0}}. Inside the center, or {{1}}, you can find protons and {{2}}. Orbiting around the center are the much smaller {{3}}.",
      de: "Alles um uns herum besteht aus winzigen Teilchen, den {{0}}. Im Zentrum, dem {{1}}, befinden sich Protonen und {{2}}. Um das Zentrum kreisen die viel kleineren {{3}}.",
      hu: "Körülöttünk minden apró részecskékből, {{0}} áll. A középpontban, vagyis az {{1}}, protonok és {{2}} találhatók. A középpont körül keringenek a sokkal kisebb {{3}}.",
      ro: "Totul din jurul nostru este alcătuit din particule minuscule numite {{0}}. În centru, sau {{1}}, se găsesc protoni și {{2}}. Orbitând în jurul centrului sunt {{3}} mult mai mici."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "atoms",
        options: [
          { id: "cells", label: { en: "cells", de: "Zellen", hu: "sejtekből", ro: "celule" } },
          { id: "atoms", label: { en: "atoms", de: "Atome", hu: "atomokból", ro: "atomi" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "nucleus",
        options: [
          { id: "nucleus", label: { en: "nucleus", de: "Atomkern", hu: "atommagban", ro: "nucleu" } },
          { id: "shell", label: { en: "shell", de: "Schale", hu: "héjban", ro: "înveliș" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "neutrons",
        options: [
          { id: "neutrons", label: { en: "neutrons", de: "Neutronen", hu: "neutronok", ro: "neutroni" } },
          { id: "electrons", label: { en: "electrons", de: "Elektronen", hu: "elektronok", ro: "electroni" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "electrons",
        options: [
          { id: "electrons", label: { en: "electrons", de: "Elektronen", hu: "elektronok", ro: "electroni" } },
          { id: "protons", label: { en: "protons", de: "Protonen", hu: "protonok", ro: "protoni" } }
        ]
      }
    ]
  }
];
