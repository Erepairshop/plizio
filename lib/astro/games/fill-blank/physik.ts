import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "fb-phys-1",
    taskDescription: {
      en: "Fill in the blank with the correct physics term.",
      de: "Fülle die Lücke mit dem richtigen Physikbegriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő fizikai kifejezéssel.",
      ro: "Completează spațiul liber cu termenul de fizică corect."
    },
    sentenceParts: {
      before: {
        en: "The force that pulls objects towards the center of the Earth is called ",
        de: "Die Kraft, die Objekte zum Erdmittelpunkt zieht, nennt man ",
        hu: "Az az erő, amely a Föld középpontja felé vonzza a tárgyakat, a ",
        ro: "Forța care atrage obiectele spre centrul Pământului se numește "
      },
      after: {
        en: ".",
        de: ".",
        hu: ".",
        ro: "."
      }
    },
    options: [
      { en: "gravity", de: "Schwerkraft", hu: "gravitáció", ro: "gravitație" },
      { en: "friction", de: "Reibung", hu: "súrlódás", ro: "frecare" },
      { en: "magnetism", de: "Magnetismus", hu: "mágnesesség", ro: "magnetism" }
    ],
    correctIndex: 0
  },
  {
    id: "fb-phys-2",
    taskDescription: {
      en: "Fill in the blank with the correct physics term.",
      de: "Fülle die Lücke mit dem richtigen Physikbegriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő fizikai kifejezéssel.",
      ro: "Completează spațiul liber cu termenul de fizică corect."
    },
    sentenceParts: {
      before: {
        en: "A material that allows electricity to flow easily is called a ",
        de: "Ein Material, das den Strom leicht fließen lässt, nennt man ",
        hu: "Az olyan anyagot, amely könnyen átengedi az áramot, ",
        ro: "Un material care permite electricității să circule ușor se numește "
      },
      after: {
        en: ".",
        de: ".",
        hu: " nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "insulator", de: "Isolator", hu: "szigetelőnek", ro: "izolator" },
      { en: "conductor", de: "Leiter", hu: "vezetőnek", ro: "conductor" },
      { en: "resistor", de: "Widerstand", hu: "ellenállásnak", ro: "rezistor" }
    ],
    correctIndex: 1
  },
  {
    id: "fb-phys-3",
    taskDescription: {
      en: "Fill in the blank with the correct physics term.",
      de: "Fülle die Lücke mit dem richtigen Physikbegriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő fizikai kifejezéssel.",
      ro: "Completează spațiul liber cu termenul de fizică corect."
    },
    sentenceParts: {
      before: {
        en: "Energy in motion is known as ",
        de: "Energie in Bewegung wird als ",
        hu: "A mozgásban lévő energiát ",
        ro: "Energia în mișcare este cunoscută sub numele de "
      },
      after: {
        en: " energy.",
        de: " Energie bezeichnet.",
        hu: " energiának nevezik.",
        ro: " cinetică."
      }
    },
    options: [
      { en: "kinetic", de: "kinetische", hu: "kinetikus", ro: "energie" },
      { en: "potential", de: "potenzielle", hu: "potenciális", ro: "potențială" },
      { en: "thermal", de: "thermische", hu: "termikus", ro: "termică" }
    ],
    correctIndex: 0
  }
];