import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "gfs-bio-1",
    taskDescription: {
      en: "Fill in the blanks to complete the story about the human body.",
      de: "Fülle die Lücken aus, um die Geschichte über den menschlichen Körper zu vervollständigen.",
      hu: "Egészítsd ki a hiányzó szavakat az emberi testről szóló történetben.",
      ro: "Completează spațiile libere pentru a termina povestea despre corpul uman."
    },
    story: {
      en: "The human body is supported by a frame of bones called the {{0}}. To move these bones, we use {{1}}. The body's command center is the {{2}}, which sends signals through {{3}} to control everything we do.",
      de: "Der menschliche Körper wird von einem Knochengerüst gestützt, das man {{0}} nennt. Um diese Knochen zu bewegen, benutzen wir {{1}}. Die Kommandozentrale des Körpers ist das {{2}}, das Signale über {{3}} sendet, um alles, was wir tun, zu steuern.",
      hu: "Az emberi testet egy csontokból álló keret támasztja alá, amelyet {{0}} nevezünk. E csontok mozgatásához {{1}} használunk. A test irányítóközpontja az {{2}}, amely a {{3}} keresztül küld jeleket, hogy mindent irányítson, amit csinálunk.",
      ro: "Corpul uman este susținut de un cadru de oase numit {{0}}. Pentru a mișca aceste oase, folosim {{1}}. Centrul de comandă al corpului este {{2}}, care trimite semnale prin {{3}} pentru a controla tot ceea ce facem."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "skeleton",
        options: [
          { id: "skeleton", label: { en: "skeleton", de: "Skelett", hu: "csontváznak", ro: "schelet" } },
          { id: "skin", label: { en: "skin", de: "Haut", hu: "bőrnek", ro: "piele" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "muscles",
        options: [
          { id: "muscles", label: { en: "muscles", de: "Muskeln", hu: "izmokat", ro: "mușchi" } },
          { id: "hair", label: { en: "hair", de: "Haare", hu: "hajat", ro: "păr" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "brain",
        options: [
          { id: "heart", label: { en: "heart", de: "Herz", hu: "szív", ro: "inima" } },
          { id: "brain", label: { en: "brain", de: "Gehirn", hu: "agy", ro: "creierul" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "nerves",
        options: [
          { id: "veins", label: { en: "veins", de: "Venen", hu: "vénákon", ro: "vene" } },
          { id: "nerves", label: { en: "nerves", de: "Nerven", hu: "idegeken", ro: "nervi" } }
        ]
      }
    ]
  },
  {
    id: "gfs-bio-2",
    taskDescription: {
      en: "Fill in the blanks about ecosystems.",
      de: "Fülle die Lücken über Ökosysteme aus.",
      hu: "Egészítsd ki a hiányzó szavakat az ökoszisztémákról.",
      ro: "Completează spațiile libere despre ecosisteme."
    },
    story: {
      en: "In a forest ecosystem, plants act as {{0}} because they make their own food. Animals like deer eat the plants, so they are called primary {{1}}. A wolf that eats the deer is a {{2}}. When living things die, {{3}} break them down and return nutrients to the soil.",
      de: "In einem Waldökosystem fungieren Pflanzen als {{0}}, weil sie ihre eigene Nahrung herstellen. Tiere wie Rehe fressen die Pflanzen, also werden sie primäre {{1}} genannt. Ein Wolf, der das Reh frisst, ist ein {{2}}. Wenn Lebewesen sterben, bauen {{3}} sie ab und geben Nährstoffe an den Boden zurück.",
      hu: "Egy erdei ökoszisztémában a növények {{0}} működnek, mert saját táplálékot termelnek. A növényeket evő állatokat, mint például az őzet, elsődleges {{1}} nevezzük. Az őzet megevő farkas egy {{2}}. Amikor az élőlények elpusztulnak, a {{3}} lebontják őket, és visszajuttatják a tápanyagokat a talajba.",
      ro: "Într-un ecosistem de pădure, plantele acționează ca {{0}} deoarece își produc propria hrană. Animalele precum căprioara mănâncă plantele, deci sunt numite {{1}} primari. Un lup care mănâncă căprioara este un {{2}}. Când ființele vii mor, {{3}} le descompun și returnează nutrienții în sol."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "producers",
        options: [
          { id: "producers", label: { en: "producers", de: "Produzenten", hu: "termelőként", ro: "producători" } },
          { id: "consumers", label: { en: "consumers", de: "Konsumenten", hu: "fogyasztóként", ro: "consumatori" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "consumers",
        options: [
          { id: "producers", label: { en: "producers", de: "Produzenten", hu: "termelőknek", ro: "producători" } },
          { id: "consumers", label: { en: "consumers", de: "Konsumenten", hu: "fogyasztóknak", ro: "consumatori" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "predator",
        options: [
          { id: "predator", label: { en: "predator", de: "Raubtier", hu: "ragadozó", ro: "prădător" } },
          { id: "prey", label: { en: "prey", de: "Beute", hu: "zsákmány", ro: "pradă" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "decomposers",
        options: [
          { id: "decomposers", label: { en: "decomposers", de: "Destruenten", hu: "lebontók", ro: "descompunătorii" } },
          { id: "hunters", label: { en: "hunters", de: "Jäger", hu: "vadászok", ro: "vânătorii" } }
        ]
      }
    ]
  }
];