import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "gfs-env-1",
    taskDescription: {
      en: "Fill in the blanks to complete the story about plants.",
      de: "Fülle die Lücken aus, um die Geschichte über Pflanzen zu vervollständigen.",
      hu: "Egészítsd ki a hiányzó szavakat a növényekről szóló történetben.",
      ro: "Completează spațiile libere pentru a termina povestea despre plante."
    },
    story: {
      en: "Plants are amazing living things. They use energy from the {{0}} to make their own food. This process is called {{1}}. They take in {{2}} from the air and release {{3}} for us to breathe.",
      de: "Pflanzen sind erstaunliche Lebewesen. Sie nutzen Energie von der {{0}}, um ihre eigene Nahrung herzustellen. Dieser Prozess wird {{1}} genannt. Sie nehmen {{2}} aus der Luft auf und geben {{3}} ab, die wir zum Atmen brauchen.",
      hu: "A növények csodálatos élőlények. A {{0}} energiáját használják fel saját táplálékuk előállítására. Ezt a folyamatot {{1}} nevezzük. Felszívják a levegőből a {{2}}, és {{3}} bocsátanak ki, hogy lélegezni tudjunk.",
      ro: "Plantele sunt ființe uimitoare. Ele folosesc energia de la {{0}} pentru a-și face propria hrană. Acest proces se numește {{1}}. Ele iau {{2}} din aer și eliberează {{3}} pentru a respira noi."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "sun",
        options: [
          { id: "moon", label: { en: "moon", de: "Mond", hu: "Hold", ro: "lună" } },
          { id: "sun", label: { en: "sun", de: "Sonne", hu: "Nap", ro: "soare" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "photo",
        options: [
          { id: "photo", label: { en: "photosynthesis", de: "Photosynthese", hu: "fotoszintézisnek", ro: "fotosinteză" } },
          { id: "breath", label: { en: "respiration", de: "Atmung", hu: "légzésnek", ro: "respirație" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "co2",
        options: [
          { id: "o2", label: { en: "oxygen", de: "Sauerstoff", hu: "oxigént", ro: "oxigen" } },
          { id: "co2", label: { en: "carbon dioxide", de: "Kohlendioxid", hu: "szén-dioxidot", ro: "dioxid de carbon" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "o2out",
        options: [
          { id: "o2out", label: { en: "oxygen", de: "Sauerstoff", hu: "oxigént", ro: "oxigen" } },
          { id: "co2out", label: { en: "carbon dioxide", de: "Kohlendioxid", hu: "szén-dioxidot", ro: "dioxid de carbon" } }
        ]
      }
    ]
  },
  {
    id: "gfs-env-2",
    taskDescription: {
      en: "Fill in the blanks about recycling.",
      de: "Fülle die Lücken über Recycling aus.",
      hu: "Egészítsd ki a hiányzó szavakat az újrahasznosításról.",
      ro: "Completează spațiile libere despre reciclare."
    },
    story: {
      en: "To protect our planet, we should reduce, reuse, and {{0}}. Instead of throwing away a plastic bottle, we can put it in a {{1}} bin. Old paper can be turned into {{2}} paper, saving many {{3}} in the forest.",
      de: "Um unseren Planeten zu schützen, sollten wir reduzieren, wiederverwenden und {{0}}. Anstatt eine Plastikflasche wegzuwerfen, können wir sie in eine {{1}}tonne geben. Altes Papier kann in {{2}}papier verwandelt werden, was viele {{3}} im Wald rettet.",
      hu: "Bolygónk védelme érdekében csökkenteni, újrahasználni és {{0}} kell. Ahelyett, hogy kidobnánk egy műanyag palackot, egy {{1}} kukába tehetjük. A régi papírból {{2}} papírt lehet készíteni, ami sok {{3}} megment az erdőben.",
      ro: "Pentru a ne proteja planeta, ar trebui să reducem, să refolosim și să {{0}}. În loc să aruncăm o sticlă de plastic, o putem pune într-un coș de {{1}}. Hârtia veche poate fi transformată în hârtie {{2}}, salvând mulți {{3}} în pădure."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "recycle",
        options: [
          { id: "burn", label: { en: "burn", de: "verbrennen", hu: "elégetni", ro: "ardem" } },
          { id: "recycle", label: { en: "recycle", de: "recyceln", hu: "újrahasznosítani", ro: "reciclăm" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "recycling",
        options: [
          { id: "trash", label: { en: "trash", de: "Müll", hu: "szemetes", ro: "gunoi" } },
          { id: "recycling", label: { en: "recycling", de: "Recycling", hu: "szelektív", ro: "reciclare" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "new",
        options: [
          { id: "new", label: { en: "new", de: "neues", hu: "új", ro: "nouă" } },
          { id: "dirty", label: { en: "dirty", de: "schmutziges", hu: "piszkos", ro: "murdară" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "trees",
        options: [
          { id: "trees", label: { en: "trees", de: "Bäume", hu: "fát", ro: "copaci" } },
          { id: "animals", label: { en: "animals", de: "Tiere", hu: "állatot", ro: "animale" } }
        ]
      }
    ]
  },
  {
    id: "gfs-env-3",
    taskDescription: {
      en: "Fill in the blanks about the water cycle.",
      de: "Fülle die Lücken über den Wasserkreislauf aus.",
      hu: "Egészítsd ki a hiányzó szavakat a vízkörforgásról.",
      ro: "Completează spațiile libere despre ciclul apei."
    },
    story: {
      en: "The sun's heat causes water to {{0}} from the oceans. The water vapor rises and cools to form {{1}}. When they become too heavy, water falls back to Earth as {{2}}.",
      de: "Die Hitze der Sonne lässt Wasser aus den Ozeanen {{0}}. Der Wasserdampf steigt auf und kühlt ab, um {{1}} zu bilden. Wenn sie zu schwer werden, fällt das Wasser als {{2}} auf die Erde zurück.",
      hu: "A nap melege miatt a víz {{0}} az óceánokból. A vízgőz felszáll és lehűl, így {{1}} képződnek. Amikor túl nehézzé válnak, a víz {{2}} formájában hullik vissza a Földre.",
      ro: "Căldura soarelui face ca apa să se {{0}} din oceane. Vaporii de apă se ridică și se răcesc formând {{1}}. Când devin prea grei, apa cade înapoi pe Pământ sub formă de {{2}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "evaporate",
        options: [
          { id: "freeze", label: { en: "freeze", de: "gefrieren", hu: "megfagy", ro: "înghețe" } },
          { id: "evaporate", label: { en: "evaporate", de: "verdunsten", hu: "elpárolog", ro: "evapore" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "clouds",
        options: [
          { id: "clouds", label: { en: "clouds", de: "Wolken", hu: "felhők", ro: "nori" } },
          { id: "rocks", label: { en: "rocks", de: "Steine", hu: "sziklák", ro: "pietre" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "rain",
        options: [
          { id: "rain", label: { en: "rain", de: "Regen", hu: "eső", ro: "ploaie" } },
          { id: "wind", label: { en: "wind", de: "Wind", hu: "Szél", ro: "vânt" } }
        ]
      }
    ]
  }
];
