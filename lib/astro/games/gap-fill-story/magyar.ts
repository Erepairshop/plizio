import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "mag-gfs-1",
    taskDescription: {
      en: "Fill in the blanks about chemical reactions.",
      de: "Fülle die Lücken über chemische Reaktionen aus.",
      hu: "Egészítsd ki a kémiai reakciókról szóló hiányos szöveget.",
      ro: "Completează spațiile libere despre reacțiile chimice."
    },
    story: {
      en: "In a chemical reaction, starting materials called {{0}} change into new substances called {{1}}. For example, when {{2}} burns in oxygen, it forms water and carbon dioxide.",
      de: "In einer chemischen Reaktion verwandeln sich Ausgangsstoffe, die {{0}} genannt werden, in neue Stoffe namens {{1}}. Wenn zum Beispiel {{2}} in Sauerstoff brennt, entstehen Wasser und Kohlendioxid.",
      hu: "Egy kémiai reakcióban a {{0}}nak nevezett kiindulási anyagok {{1}}nak nevezett új anyagokká alakulnak. Például, amikor a {{2}} oxigénben ég, víz és szén-dioxid keletkezik.",
      ro: "Într-o reacție chimică, materialele de pornire numite {{0}} se transformă în substanțe noi numite {{1}}. De exemplu, când {{2}} arde în oxigen, se formează apă și dioxid de carbon."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "reactants",
        options: [
          { id: "reactants", label: { en: "reactants", de: "Edukte", hu: "reaktánsok", ro: "reactanți" } },
          { id: "catalysts", label: { en: "catalysts", de: "Katalysatoren", hu: "katalizátorok", ro: "catalizatori" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "products",
        options: [
          { id: "products", label: { en: "products", de: "Produkte", hu: "termékekké", ro: "produse" } },
          { id: "elements", label: { en: "elements", de: "Elemente", hu: "elemekké", ro: "elemente" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "methane",
        options: [
          { id: "methane", label: { en: "methane", de: "Methan", hu: "metán", ro: "metanul" } },
          { id: "gold", label: { en: "gold", de: "Gold", hu: "arany", ro: "aurul" } }
        ]
      }
    ]
  },
  {
    id: "mag-gfs-2",
    taskDescription: {
      en: "Complete the story about acids and bases.",
      de: "Vervollständige die Geschichte über Säuren und Basen.",
      hu: "Egészítsd ki a savakról és lúgokról szóló történetet.",
      ro: "Completează povestea despre acizi și baze."
    },
    story: {
      en: "Acids have a {{0}} taste and a pH {{1}} than 7. Bases have a {{2}} taste and feel slippery. When an acid and a base react, they form water and a {{3}}.",
      de: "Säuren haben einen {{0}} Geschmack und einen pH-Wert {{1}} als 7. Basen haben einen {{2}} Geschmack und fühlen sich schlüpfrig an. Wenn eine Säure und eine Base reagieren, bilden sie Wasser und ein {{3}}.",
      hu: "A savak {{0}} ízűek és a pH-értékük {{1}}, mint 7. A lúgok {{2}} ízűek és csúszós tapintásúak. Amikor egy sav és egy lúg reakcióba lép, víz és {{3}} keletkezik.",
      ro: "Acizii au un gust {{0}} și un pH {{1}} decât 7. Bazele au un gust {{2}} și se simt alunecoase. Când un acid și o bază reacționează, ele formează apă și o {{3}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "sour",
        options: [
          { id: "sour", label: { en: "sour", de: "sauren", hu: "savanyú", ro: "acru" } },
          { id: "sweet", label: { en: "sweet", de: "süßen", hu: "édes", ro: "dulce" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "lower",
        options: [
          { id: "lower", label: { en: "lower", de: "niedriger", hu: "kisebb", ro: "mai mic" } },
          { id: "higher", label: { en: "higher", de: "höher", hu: "nagyobb", ro: "mai mare" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "bitter",
        options: [
          { id: "bitter", label: { en: "bitter", de: "bitteren", hu: "keserű", ro: "amar" } },
          { id: "salty", label: { en: "salty", de: "salzigen", hu: "sós", ro: "sărat" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "salt",
        options: [
          { id: "salt", label: { en: "salt", de: "Salz", hu: "só", ro: "sare" } },
          { id: "sugar", label: { en: "sugar", de: "Zucker", hu: "cukor", ro: "zahăr" } }
        ]
      }
    ]
  },
  {
    id: "mag-gfs-3",
    taskDescription: {
      en: "Fill in the gaps about atoms.",
      de: "Fülle die Lücken über Atome aus.",
      hu: "Egészítsd ki az atomokról szóló szöveget.",
      ro: "Completează spațiile libere despre atomi."
    },
    story: {
      en: "Everything is made of tiny {{0}}. At the center is the {{1}}, which contains protons and {{2}}. Electrons move around the nucleus in shells.",
      de: "Alles besteht aus winzigen {{0}}. Im Zentrum befindet sich der {{1}}, der Protonen und {{2}} enthält. Elektronen bewegen sich in Schalen um den Kern.",
      hu: "Minden apró {{0}} épül fel. Középen található az {{1}}, amely protonokat és {{2}} tartalmaz. Az elektronok héjakon mozognak az atommag körül.",
      ro: "Totul este alcătuit din {{0}} minuscule. În centru se află {{1}}, care conține protoni și {{2}}. Electronii se mișcă în jurul nucleului în învelișuri."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "atoms",
        options: [
          { id: "atoms", label: { en: "atoms", de: "Atomen", hu: "atomokból", ro: "atomi" } },
          { id: "cells", label: { en: "cells", de: "Zellen", hu: "sejtekből", ro: "celule" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "nucleus",
        options: [
          { id: "nucleus", label: { en: "nucleus", de: "Atomkern", hu: "atommag", ro: "nucleul" } },
          { id: "membrane", label: { en: "membrane", de: "Membran", hu: "hártya", ro: "membrană" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "neutrons",
        options: [
          { id: "neutrons", label: { en: "neutrons", de: "Neutronen", hu: "neutronokat", ro: "neutroni" } },
          { id: "molecules", label: { en: "molecules", de: "Moleküle", hu: "molekulákat", ro: "molecule" } }
        ]
      }
    ]
  }
];
