import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "phys-tf-1",
    taskDescription: {
      en: "Gravity and Motion",
      de: "Schwerkraft und Bewegung",
      hu: "Gravitáció és mozgás",
      ro: "Gravitație și Mișcare"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Gravity pulls objects towards the center of the Earth.",
          de: "Die Schwerkraft zieht Objekte zum Mittelpunkt der Erde.",
          hu: "A gravitáció a Föld középpontja felé vonzza a tárgyakat.",
          ro: "Gravitația trage obiectele spre centrul Pământului."
        },
        isTrue: true,
        explanation: {
          en: "Earth's mass creates a gravitational pull towards its center.",
          de: "Die Masse der Erde erzeugt eine Anziehungskraft zu ihrem Mittelpunkt.",
          hu: "A Föld tömege gravitációs vonzást hoz létre a középpontja felé.",
          ro: "Masa Pământului creează o atracție gravitațională spre centrul său."
        }
      },
      {
        id: "s2",
        text: {
          en: "Heavier objects fall much faster than lighter objects in a vacuum.",
          de: "Schwerere Objekte fallen im Vakuum viel schneller als leichtere.",
          hu: "A nehezebb tárgyak vákuumban sokkal gyorsabban esnek, mint a könnyebbek.",
          ro: "Obiectele mai grele cad mult mai repede decât cele ușoare în vid."
        },
        isTrue: false,
        explanation: {
          en: "In a vacuum, all objects fall at the same rate regardless of mass.",
          de: "Im Vakuum fallen alle Objekte unabhängig von ihrer Masse gleich schnell.",
          hu: "Vákuumban minden tárgy tömegétől függetlenül ugyanolyan sebességgel esik.",
          ro: "În vid, toate obiectele cad cu aceeași viteză, indiferent de masă."
        }
      },
      {
        id: "s3",
        text: {
          en: "Friction is a force that opposes motion.",
          de: "Reibung ist eine Kraft, die der Bewegung entgegenwirkt.",
          hu: "A súrlódás egy olyan erő, amely ellene hat a mozgásnak.",
          ro: "Frecarea este o forță care se opune mișcării."
        },
        isTrue: true,
        explanation: {
          en: "Friction occurs when two surfaces rub against each other.",
          de: "Reibung entsteht, wenn zwei Oberflächen aneinander reiben.",
          hu: "Súrlódás akkor jön létre, ha két felület egymáshoz dörzsölődik.",
          ro: "Frecarea apare atunci când două suprafețe se freacă una de cealaltă."
        }
      }
    ]
  },
  {
    id: "phys-tf-2",
    taskDescription: {
      en: "Light and Sound",
      de: "Licht und Schall",
      hu: "Fény és hang",
      ro: "Lumină și Sunet"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Light travels faster than sound.",
          de: "Licht reist schneller als Schall.",
          hu: "A fény gyorsabban terjed, mint a hang.",
          ro: "Lumina călătorește mai repede decât sunetul."
        },
        isTrue: true,
        explanation: {
          en: "Light speed is about 300,000 km/s, while sound is about 343 m/s in air.",
          de: "Die Lichtgeschwindigkeit beträgt ca. 300.000 km/s, Schall ca. 343 m/s in der Luft.",
          hu: "A fénysebesség kb. 300 000 km/s, a hangé pedig kb. 343 m/s a levegőben.",
          ro: "Viteza luminii este de aprox. 300.000 km/s, în timp ce sunetul are aprox. 343 m/s în aer."
        }
      },
      {
        id: "s2",
        text: {
          en: "Sound can travel through the vacuum of space.",
          de: "Schall kann sich im Vakuum des Weltraums ausbreiten.",
          hu: "A hang terjedni tud az űr vákuumában.",
          ro: "Sunetul poate călători prin vidul spațiului."
        },
        isTrue: false,
        explanation: {
          en: "Sound requires a medium like air or water to travel.",
          de: "Schall benötigt ein Medium wie Luft oder Wasser, um sich auszubreiten.",
          hu: "A hangnak valamilyen közegre, például levegőre vagy vízre van szüksége a terjedéshez.",
          ro: "Sunetul necesită un mediu precum aerul sau apa pentru a călători."
        }
      },
      {
        id: "s3",
        text: {
          en: "A rainbow is created by the refraction and reflection of light in water droplets.",
          de: "Ein Regenbogen entsteht durch Brechung und Reflexion von Licht in Wassertropfen.",
          hu: "A szivárványt a fény vízcseppekben történő törése és visszaverődése hozza létre.",
          ro: "Un curcubeu este creat de refracția și reflexia luminii în picăturile de apă."
        },
        isTrue: true,
        explanation: {
          en: "Water droplets act like tiny prisms splitting sunlight into colors.",
          de: "Wassertropfen wirken wie kleine Prismen, die das Sonnenlicht in Farben zerlegen.",
          hu: "A vízcseppek apró prizmaként működnek, amelyek a napfényt színekre bontják.",
          ro: "Picăturile de apă acționează ca niște prisme minuscule, împărțind lumina soarelui în culori."
        }
      }
    ]
  },
  {
    id: "phys-tf-3",
    taskDescription: {
      en: "Energy and Electricity",
      de: "Energie und Elektrizität",
      hu: "Energia és elektromosság",
      ro: "Energie și Electricitate"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Energy can be created from nothing.",
          de: "Energie kann aus dem Nichts erschaffen werden.",
          hu: "Energiát a semmiből is lehet teremteni.",
          ro: "Energia poate fi creată din nimic."
        },
        isTrue: false,
        explanation: {
          en: "Energy cannot be created or destroyed, only transformed.",
          de: "Energie kann weder erzeugt noch vernichtet, sondern nur umgewandelt werden.",
          hu: "Az energiát nem lehet létrehozni vagy megsemmisíteni, csak átalakítani.",
          ro: "Energia nu poate fi creată sau distrusă, ci doar transformată."
        }
      },
      {
        id: "s2",
        text: {
          en: "Metals are generally good conductors of electricity.",
          de: "Metalle sind in der Regel gute elektrische Leiter.",
          hu: "A fémek általában jó elektromos vezetők.",
          ro: "Metalele sunt, în general, buni conductori de electricitate."
        },
        isTrue: true,
        explanation: {
          en: "Metals have free electrons that allow current to flow easily.",
          de: "Metalle haben freie Elektronen, die den Stromfluss erleichtern.",
          hu: "A fémekben szabad elektronok vannak, amelyek lehetővé teszik az áram könnyű áramlását.",
          ro: "Metalele au electroni liberi care permit curentului să circule ușor."
        }
      },
      {
        id: "s3",
        text: {
          en: "A closed circuit is required for electricity to flow.",
          de: "Damit Strom fließen kann, ist ein geschlossener Stromkreis erforderlich.",
          hu: "Zárt áramkörre van szükség ahhoz, hogy az áram folyjon.",
          ro: "Este necesar un circuit închis pentru ca electricitatea să circule."
        },
        isTrue: true,
        explanation: {
          en: "Electrons need a complete path to travel from the source and back.",
          de: "Elektronen benötigen einen vollständigen Pfad, um von der Quelle und zurück zu gelangen.",
          hu: "Az elektronoknak teljes útvonalra van szükségük ahhoz, hogy a forrásból eljussanak és visszatérjenek.",
          ro: "Electronii au nevoie de o cale completă pentru a călători de la sursă și înapoi."
        }
      }
    ]
  }
];