import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const fillBlankSachkunde: FillBlankRound[] = [
  {
    id: "fb-env-1",
    taskDescription: {
      en: "Fill in the blank with the correct environmental term.",
      de: "Fülle die Lücke mit dem richtigen Umweltbegriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő környezetvédelmi kifejezéssel.",
      ro: "Completează spațiul liber cu termenul de mediu corect."
    },
    sentenceParts: {
      before: {
        en: "Plants release ",
        de: "Pflanzen geben ",
        hu: "A növények ",
        ro: "Plantele eliberează "
      },
      after: {
        en: " into the air, which we need to breathe.",
        de: " in die Luft ab, den wir zum Atmen brauchen.",
        hu: " bocsátanak a levegőbe, amire szükségünk van a légzéshez.",
        ro: " în aer, de care avem nevoie pentru a respira."
      }
    },
    options: [
      { en: "carbon dioxide", de: "Kohlendioxid", hu: "szén-dioxidot", ro: "dioxid de carbon" },
      { en: "oxygen", de: "Sauerstoff", hu: "oxigént", ro: "oxigen" },
      { en: "nitrogen", de: "Stickstoff", hu: "nitrogént", ro: "azot" }
    ],
    correctIndex: 1
  },
  {
    id: "fb-env-2",
    taskDescription: {
      en: "Complete the sentence.",
      de: "Vervollständige den Satz.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează propoziția."
    },
    sentenceParts: {
      before: {
        en: "Using energy from the sun to create electricity is called ",
        de: "Die Nutzung der Sonnenenergie zur Stromerzeugung nennt man ",
        hu: "A napenergia villamos energia előállítására történő felhasználását ",
        ro: "Folosirea energiei de la soare pentru a crea electricitate se numește "
      },
      after: {
        en: " power.",
        de: "energie.",
        hu: "nevezzük.",
        ro: " solară."
      }
    },
    options: [
      { en: "nuclear", de: "Kern", hu: "atomenergiának", ro: "energie" },
      { en: "solar", de: "Solar", hu: "napenergiának", ro: "energie" },
      { en: "wind", de: "Wind", hu: "szélenergiának", ro: "energie eoliană" }
    ],
    correctIndex: 1
  },
  {
    id: "fb-env-3",
    taskDescription: {
      en: "Find the missing word.",
      de: "Finde das fehlende Wort.",
      hu: "Keresd meg a hiányzó szót.",
      ro: "Găsește cuvântul lipsă."
    },
    sentenceParts: {
      before: {
        en: "When we separate paper, plastic, and glass to use them again, it is called ",
        de: "Wenn wir Papier, Plastik und Glas trennen, um sie wiederzuverwenden, nennt man das ",
        hu: "Amikor a papírt, műanyagot és üveget szétválogatjuk az újrahasználat céljából, azt ",
        ro: "Când separăm hârtia, plasticul și sticla pentru a le refolosi, se numește "
      },
      after: {
        en: ".",
        de: ".",
        hu: " hívják.",
        ro: "."
      }
    },
    options: [
      { en: "littering", de: "Vermüllen", hu: "szemetelésnek", ro: "aruncarea gunoaielor" },
      { en: "composting", de: "Kompostieren", hu: "komposztálásnak", ro: "compostare" },
      { en: "recycling", de: "Recycling", hu: "újrahasznosításnak", ro: "reciclare" }
    ],
    correctIndex: 2
  }
];
