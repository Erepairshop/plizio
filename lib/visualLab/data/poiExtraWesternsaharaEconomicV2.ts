import { POI } from './poi';
export const westernsaharaEconomicV2: POI[] = [

  {
    id: "westernsahara-boukraa-phosphate-mine-v2",
    type: "mine",
    name: { de: "Boukraa Phosphatmine", hu: "Boukraa foszfátbánya", ro: "Mina de fosfați Boukraa", en: "Boukraa Phosphate Mine" },
    coordinates: { lat: 26.3083, lng: -12.8333 },
    description: {
      de: "Eine der größten Phosphatminen weltweit, die über ein 98 km langes Förderband an die Küste angebunden ist. Der Abbau ist der wichtigste Wirtschaftszweig der Region.",
      hu: "A világ egyik legnagyobb foszfátbányája, amelyet egy 98 km hosszú szállítószalag köt össze a tengerparttal. A kitermelés a régió legfontosabb gazdasági ága.",
      ro: "Una dintre cele mai mari mine de fosfați din lume, conectată la coastă printr-o bandă transportoare de 98 km. Exploatarea este principala ramură economică regională.",
      en: "One of the world's largest phosphate mines, connected to the coast by a 98 km long conveyor belt. Extraction is the region's primary economic activity.",
    },
    facts: {
      de: ["Weltweit führende Phosphatvorkommen", "98 km langes Förderband", "Hauptarbeitgeber in der Region", "Export via Laayoune"],
      hu: ["Vezető foszfátlelőhely a világon", "98 km hosszú szállítószalag", "Legfőbb regionális munkaadó", "Export Laayoune-on keresztül"],
      ro: ["Zăcăminte de fosfați de talie mondială", "Bandă transportoare de 98 km", "Principalul angajator regional", "Export prin Laayoune"],
      en: ["World-leading phosphate deposits", "98 km conveyor belt", "Primary regional employer", "Export via Laayoune"],
    },
    imageHint: "phosphate mine landscape conveyor belt",
  },
  {
    id: "westernsahara-dakhla-fishing-zone-v2",
    type: "industry",
    name: { de: "Dakhla Fischereizone", hu: "Dakhla halászati övezet", ro: "Zona de pescuit Dakhla", en: "Dakhla Fishing Zone" },
    coordinates: { lat: 23.7167, lng: -15.9333 },
    description: {
      de: "Ein hochproduktives maritimes Gebiet mit bedeutender Fischverarbeitungsindustrie. Es ist das Zentrum der lokalen gewerblichen Fischereiaktivitäten.",
      hu: "Egy rendkívül produktív tengeri terület, jelentős halfeldolgozó iparral. A helyi kereskedelmi halászati tevékenységek központja.",
      ro: "O zonă maritimă extrem de productivă, cu o industrie de procesare a peștelui semnificativă. Este centrul activităților locale de pescuit comercial.",
      en: "A highly productive maritime area with significant fish processing industry. It is the hub for local commercial fishing activities.",
    },
    facts: {
      de: ["Reich an pelagischen Fischarten", "Moderne Fischverarbeitungsanlagen", "Wichtiger Exportsektor", "Küstennahe Infrastruktur"],
      hu: ["Gazdag nyíltvízi halállomány", "Modern halfeldolgozó üzemek", "Fontos exportágazat", "Partmenti infrastruktúra"],
      ro: ["Bogată în specii de pește pelagic", "Unități moderne de procesare a peștelui", "Sector de export important", "Infrastructură de coastă"],
      en: ["Rich in pelagic fish species", "Modern fish processing facilities", "Key export sector", "Coastal infrastructure"],
    },
    imageHint: "fishing boats Dakhla harbor",
  }
];
