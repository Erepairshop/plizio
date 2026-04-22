import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "deu-gfs-1",
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
  },
  {
    id: "deu-gfs-2",
    taskDescription: {
      en: "Complete the story about water molecules.",
      de: "Vervollständige die Geschichte über Wassermoleküle.",
      hu: "Egészítsd ki a vízmolekuláról szóló történetet.",
      ro: "Completează povestea despre moleculele de apă."
    },
    story: {
      en: "Water is a chemical {{0}} made of two hydrogen atoms and one {{1}} atom. These atoms are held together by chemical {{2}}. Water is essential for all known forms of {{3}}.",
      de: "Wasser ist eine chemische {{0}}, die aus zwei Wasserstoffatomen und einem {{1}}-Atom besteht. Diese Atome werden durch chemische {{2}} zusammengehalten. Wasser ist lebensnotwendig für alle bekannten Formen von {{3}}.",
      hu: "A víz egy kémiai {{0}}, amely két hidrogénatomból és egy {{1}}atomból áll. Ezeket az atomokat kémiai {{2}} tartják össze. A víz elengedhetetlen az {{3}} minden ismert formája számára.",
      ro: "Apa este un {{0}} chimic format din doi atomi de hidrogen și un atom de {{1}}. Acești atomi sunt țiinuți împreună de {{2}} chimice. Apa este esențială pentru toate formele cunoscute de {{3}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "compound",
        options: [
          { id: "element", label: { en: "element", de: "Element", hu: "elem", ro: "element" } },
          { id: "compound", label: { en: "compound", de: "Verbindung", hu: "vegyület", ro: "compus" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "oxygen",
        options: [
          { id: "oxygen", label: { en: "oxygen", de: "Sauerstoff", hu: "oxigén", ro: "oxigen" } },
          { id: "carbon", label: { en: "carbon", de: "Kohlenstoff", hu: "szén", ro: "carbon" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "bonds",
        options: [
          { id: "bonds", label: { en: "bonds", de: "Bindungen", hu: "kötések", ro: "legături" } },
          { id: "mixtures", label: { en: "mixtures", de: "Mischungen", hu: "keverékek", ro: "amestecuri" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "life",
        options: [
          { id: "life", label: { en: "life", de: "Leben", hu: "élet", ro: "viață" } },
          { id: "rocks", label: { en: "rocks", de: "Gestein", hu: "kőzetek", ro: "roci" } }
        ]
      }
    ]
  },
  {
    id: "deu-gfs-3",
    taskDescription: {
      en: "Fill in the gaps about the periodic table.",
      de: "Fülle die Lücken über das Periodensystem aus.",
      hu: "Egészítsd ki a periódusos rendszerről szóló szöveget.",
      ro: "Completează spațiile libere despre tabelul periodic."
    },
    story: {
      en: "The periodic table organizes all known {{0}}. Each element has a unique chemical {{1}} and an atomic {{2}}. The horizontal rows in the table are called {{3}}.",
      de: "Das Periodensystem ordnet alle bekannten {{0}}. Jedes Element hat ein eindeutiges chemisches {{1}} und eine Ordnungs{{2}}. Die waagerechten Zeilen in der Tabelle werden {{3}} genannt.",
      hu: "A periódusos rendszer az összes ismert {{0}} rendszerezi. Minden elemnek egyedi kémiai {{1}} és rend{{2}} van. A táblázat vízszintes sorait {{3}} nevezzük.",
      ro: "Tabelul periodic organizează toate {{0}} cunoscute. Fiecare element are un {{1}} chimic unic și un {{2}} atomic. Rândurile orizontale din tabel se numesc {{3}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "elements",
        options: [
          { id: "elements", label: { en: "elements", de: "Elemente", hu: "elemet", ro: "elemente" } },
          { id: "compounds", label: { en: "compounds", de: "Verbindungen", hu: "vegyületet", ro: "compuși" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "symbol",
        options: [
          { id: "symbol", label: { en: "symbol", de: "Symbol", hu: "jele", ro: "simbol" } },
          { id: "name", label: { en: "name", de: "Name", hu: "neve", ro: "nume" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "number",
        options: [
          { id: "number", label: { en: "number", de: "zahl", hu: "száma", ro: "număr" } },
          { id: "weight", label: { en: "weight", de: "gewicht", hu: "tömege", ro: "greutate" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "periods",
        options: [
          { id: "periods", label: { en: "periods", de: "Perioden", hu: "periódusoknak", ro: "perioade" } },
          { id: "groups", label: { en: "groups", de: "Gruppen", hu: "csoportoknak", ro: "grupe" } }
        ]
      }
    ]
  }
];
