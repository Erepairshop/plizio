import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "bio-tf-1",
    taskDescription: {
      en: "Genetics and DNA",
      de: "Genetik und DNA",
      hu: "Genetika és DNS",
      ro: "Genetică și ADN"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "DNA contains the instructions for making a living thing.",
          de: "Die DNA enthält die Baupläne für ein Lebewesen.",
          hu: "A DNS tartalmazza az élőlények felépítésének utasításait.",
          ro: "ADN-ul conține instrucțiunile pentru a crea o ființă vie."
        },
        isTrue: true,
        explanation: {
          en: "DNA holds the genetic information of cells.",
          de: "Die DNA speichert die genetischen Informationen der Zellen.",
          hu: "A DNS hordozza a sejtek genetikai információját.",
          ro: "ADN-ul deține informația genetică a celulelor."
        }
      },
      {
        id: "s2",
        text: {
          en: "Humans share 50% of their DNA with bananas.",
          de: "Menschen teilen 50% ihrer DNA mit Bananen.",
          hu: "Az emberek DNS-ük 50%-át megosztják a banánnal.",
          ro: "Oamenii împart 50% din ADN-ul lor cu bananele."
        },
        isTrue: true,
        explanation: {
          en: "Many basic cellular functions are shared across all living things.",
          de: "Viele grundlegende Zellfunktionen sind bei allen Lebewesen gleich.",
          hu: "Számos alapvető sejtfunkció közös minden élőlényben.",
          ro: "Multe funcții celulare de bază sunt comune tuturor ființelor vii."
        }
      },
      {
        id: "s3",
        text: {
          en: "Red blood cells have a nucleus that contains DNA.",
          de: "Rote Blutkörperchen haben einen Zellkern, der DNA enthält.",
          hu: "A vörösvértesteknek van sejtmagjuk, ami DNS-t tartalmaz.",
          ro: "Celulele roșii din sânge au un nucleu care conține ADN."
        },
        isTrue: false,
        explanation: {
          en: "Mature human red blood cells do not have a nucleus.",
          de: "Reife menschliche rote Blutkörperchen haben keinen Zellkern.",
          hu: "Az érett emberi vörösvértesteknek nincs sejtmagjuk.",
          ro: "Celulele roșii umane mature nu au nucleu."
        }
      }
    ]
  },
  {
    id: "bio-tf-2",
    taskDescription: {
      en: "Ecosystems",
      de: "Ökosysteme",
      hu: "Ökoszisztémák",
      ro: "Ecosisteme"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Producers, like plants, make their own food.",
          de: "Produzenten, wie Pflanzen, stellen ihre eigene Nahrung her.",
          hu: "A termelők, mint a növények, saját maguk állítják elő táplálékukat.",
          ro: "Producătorii, precum plantele, își produc propria hrană."
        },
        isTrue: true,
        explanation: {
          en: "Plants use photosynthesis to make energy from sunlight.",
          de: "Pflanzen nutzen Photosynthese, um Energie aus Sonnenlicht zu gewinnen.",
          hu: "A növények fotoszintézissel nyernek energiát a napfényből.",
          ro: "Plantele folosesc fotosinteza pentru a produce energie din lumina soarelui."
        }
      },
      {
        id: "s2",
        text: {
          en: "Decomposers are harmful to the ecosystem.",
          de: "Destruenten sind schädlich für das Ökosystem.",
          hu: "A lebontók károsak az ökoszisztémára.",
          ro: "Descompunătorii sunt dăunători ecosistemului."
        },
        isTrue: false,
        explanation: {
          en: "Decomposers break down dead material and recycle nutrients.",
          de: "Destruenten bauen totes Material ab und recyceln Nährstoffe.",
          hu: "A lebontók lebontják az elhalt anyagokat és újrahasznosítják a tápanyagokat.",
          ro: "Descompunătorii descompun materialul mort și reciclează nutrienții."
        }
      },
      {
        id: "s3",
        text: {
          en: "Apex predators are at the top of the food chain.",
          de: "Spitzenprädatoren stehen an der Spitze der Nahrungskette.",
          hu: "A csúcsragadozók a tápláléklánc csúcsán állnak.",
          ro: "Prădătorii de top sunt în vârful lanțului trofic."
        },
        isTrue: true,
        explanation: {
          en: "They have no natural predators of their own.",
          de: "Sie haben keine natürlichen eigenen Feinde.",
          hu: "Nincsenek saját természetes ragadozóik.",
          ro: "Ei nu au prădători naturali proprii."
        }
      }
    ]
  },
  {
    id: "bio-tf-3",
    taskDescription: {
      en: "Human Senses",
      de: "Menschliche Sinne",
      hu: "Emberi érzékek",
      ro: "Simțurile Umane"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "The skin is the largest organ of the human body.",
          de: "Die Haut ist das größte Organ des menschlichen Körpers.",
          hu: "A bőr az emberi test legnagyobb szerve.",
          ro: "Pielea este cel mai mare organ al corpului uman."
        },
        isTrue: true,
        explanation: {
          en: "It covers the entire outside of the body.",
          de: "Sie bedeckt die gesamte Außenseite des Körpers.",
          hu: "Befedi a test teljes külsejét.",
          ro: "Acoperă întreaga suprafață exterioară a corpului."
        }
      },
      {
        id: "s2",
        text: {
          en: "Humans can only taste four flavors: sweet, sour, salty, and bitter.",
          de: "Menschen können nur vier Geschmacksrichtungen schmecken: süß, sauer, salzig und bitter.",
          hu: "Az emberek csak négy ízt éreznek: édes, savanyú, sós és keserű.",
          ro: "Oamenii pot simți doar patru gusturi: dulce, acru, sărat și amar."
        },
        isTrue: false,
        explanation: {
          en: "Humans can also taste umami (savory).",
          de: "Menschen können auch Umami (herzhaft) schmecken.",
          hu: "Az emberek az umami (ízletes) ízt is érzik.",
          ro: "Oamenii pot simți și gustul umami (savuros)."
        }
      }
    ]
  }
];