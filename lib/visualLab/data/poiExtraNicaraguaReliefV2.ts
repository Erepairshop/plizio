import type { POI } from "./poi";

export const poiExtraNicaraguaReliefV2: POI[] = [
  {
    id: "cordillera-chontale-relief-v2",
    type: "mountain",
    parent: "NI-BO",
    coords: [-85.12, 12.25],
    name: { de: "Cordillera Chontaleña", hu: "Chontaleña-hegység", ro: "Cordillera Chontaleña", en: "Chontaleña Mountain Range" },
    description: { de: "Eine zentrale Bergkette in Nicaragua.", hu: "Központi hegylánc Nicaraguában.", ro: "Un lanț muntos central în Nicaragua.", en: "A central mountain range in Nicaragua." },
    facts: {
      de: ["Erstreckt sich durch Boaco und Chontales.", "Wichtige Wasserscheide."],
      hu: ["Boaco és Chontales megyéken át nyúlik.", "Fontos vízválasztó."],
      ro: ["Se întinde prin Boaco și Chontales.", "O cumpănă de ape importantă."],
      en: ["Stretches through Boaco and Chontales.", "Important watershed."]
    }
  },
  {
    id: "cerro-saslaya-relief-v2",
    type: "mountain",
    parent: "NI-AN",
    coords: [-84.78, 13.73],
    name: { de: "Cerro Saslaya", hu: "Saslaya-hegy", ro: "Cerro Saslaya", en: "Mount Saslaya" },
    description: { de: "Ein markanter Berg im Bosawás-Gebiet.", hu: "Jellegzetes hegy a Bosawás-területen.", ro: "Un munte proeminent în zona Bosawás.", en: "A prominent mountain in the Bosawás area." },
    facts: {
      de: ["Teil des Nationalparks Saslaya.", "Höhe von über 2000 Metern."],
      hu: ["A Saslaya Nemzeti Park része.", "Magassága meghaladja a 2000 métert."],
      ro: ["Parte a Parcului Național Saslaya.", "Altitudine de peste 2000 metri."],
      en: ["Part of Saslaya National Park.", "Elevation over 2000 meters."]
    }
  },
  {
    id: "meseta-pueblos-relief-v2",
    type: "relief",
    parent: "NI-MS",
    coords: [-86.13, 11.91],
    name: { de: "Meseta de los Pueblos", hu: "Los Pueblos-fennsík", ro: "Meseta de los Pueblos", en: "Pueblos Plateau" },
    description: { de: "Ein Hochplateau in der Nähe des Managua-Sees.", hu: "Fennsík a Managua-tó közelében.", ro: "Un platou înalt în apropierea Lacului Managua.", en: "A high plateau near Lake Managua." },
    facts: {
      de: ["Bekannt für milderes Klima.", "Vulkanischer Boden."],
      hu: ["Mérsékelt éghajlatáról ismert.", "Vulkáni talaj."],
      ro: ["Cunoscut pentru clima mai blândă.", "Sol vulcanic."],
      en: ["Known for milder climate.", "Volcanic soil."]
    }
  },
  {
    id: "valle-de-seaco-relief-v2",
    type: "relief",
    parent: "NI-MA",
    coords: [-85.90, 13.08],
    name: { de: "Valle de Sébaco", hu: "Sébaco-völgy", ro: "Valea Sébaco", en: "Sébaco Valley" },
    description: { de: "Ein fruchtbares Tal in Zentral-Nicaragua.", hu: "Termékeny völgy Közép-Nicaraguában.", ro: "O vale fertilă în Nicaragua centrală.", en: "A fertile valley in central Nicaragua." },
    facts: {
      de: ["Wichtig für die Landwirtschaft.", "Liegt im Jinotega-Hochland."],
      hu: ["Fontos a mezőgazdaság számára.", "A Jinotega-felföldön található."],
      ro: ["Important pentru agricultură.", "Situată în zonele înalte din Jinotega."],
      en: ["Important for agriculture.", "Located in the Jinotega highlands."]
    }
  },
  {
    id: "llanos-de-esteli-relief-v2",
    type: "relief",
    parent: "NI-ES",
    coords: [-86.35, 13.09],
    name: { de: "Llanos de Estelí", hu: "Estelí-síkság", ro: "Câmpiile Estelí", en: "Estelí Plains" },
    description: { de: "Eine Hochebene bei Estelí.", hu: "Fennsík Estelí közelében.", ro: "Un platou înalt lângă Estelí.", en: "A plateau near Estelí." },
    facts: {
      de: ["Bekannt für Tabakanbau.", "Höhe ca. 800-900 Meter."],
      hu: ["Dohánytermesztéséről híres.", "Magasság kb. 800-900 méter."],
      ro: ["Cunoscut pentru cultivarea tutunului.", "Altitudine aprox. 800-900 metri."],
      en: ["Known for tobacco cultivation.", "Elevation about 800-900 meters."]
    }
  },
  {
    id: "selva-de-las-nubes-relief-v2",
    type: "forest",
    parent: "NI-JI",
    coords: [-85.95, 13.15],
    name: { de: "Selva de las Nubes", hu: "Felhőerdő", ro: "Pădurea de nori", en: "Cloud Forest" },
    description: { de: "Ein ausgedehnter Nebelwald in Jinotega.", hu: "Kiterjedt felhőerdő Jinotegában.", ro: "O pădure de nori extinsă în Jinotega.", en: "An extensive cloud forest in Jinotega." },
    facts: {
      de: ["Lebensraum für Quetzals.", "Hohe Luftfeuchtigkeit."],
      hu: ["Quetzal-madarak élőhelye.", "Magas páratartalom."],
      ro: ["Habitat pentru quetzali.", "Umiditate ridicată."],
      en: ["Habitat for quetzals.", "High humidity."]
    }
  },
  {
    id: "cerro-killibrin-relief-v2",
    type: "mountain",
    parent: "NI-AN",
    coords: [-83.58, 14.12],
    name: { de: "Cerro Killibrin", hu: "Killibrin-hegy", ro: "Cerro Killibrin", en: "Mount Killibrin" },
    description: { de: "Ein Berg in der Nordkaribik-Region.", hu: "Hegy az észak-karibi régióban.", ro: "Un munte în regiunea Caraibelor de Nord.", en: "A mountain in the North Caribbean region." },
    facts: {
      de: ["Dicht bewaldet.", "Teil des isolierten Berglandes."],
      hu: ["Sűrűn erdős.", "Az elszigetelt hegyvidék része."],
      ro: ["Dens împădurit.", "Parte a regiunii montane izolate."],
      en: ["Densely forested.", "Part of the isolated highlands."]
    }
  },
  {
    id: "valle-de-las-garzas-relief-v2",
    type: "relief",
    parent: "NI-LE",
    coords: [-86.68, 12.65],
    name: { de: "Valle de las Garzas", hu: "Las Garzas-völgy", ro: "Valea las Garzas", en: "Las Garzas Valley" },
    description: { de: "Ein ruhiges Tal nahe León.", hu: "Csendes völgy León közelében.", ro: "O vale liniștită lângă León.", en: "A quiet valley near León." },
    facts: {
      de: ["Landwirtschaftlich genutzt.", "Nahe dem Vulkan León."],
      hu: ["Mezőgazdasági terület.", "A León-vulkán közelében."],
      ro: ["Utilizată pentru agricultură.", "Aproape de vulcanul León."],
      en: ["Used for agriculture.", "Near the León volcano."]
    }
  },
  {
    id: "sierra-de-diabolo-relief-v2",
    type: "mountain",
    parent: "NI-MT",
    coords: [-85.45, 12.80],
    name: { de: "Sierra del Diablo", hu: "Sierra del Diablo", ro: "Sierra del Diablo", en: "Devil's Mountain Range" },
    description: { de: "Ein raues Berggebiet.", hu: "Zord hegyvidék.", ro: "O zonă montană accidentată.", en: "A rugged mountain area." },
    facts: {
      de: ["Schwer zugänglich.", "Historisch bedeutend."],
      hu: ["Nehezen megközelíthető.", "Történelmileg jelentős."],
      ro: ["Greu accesibil.", "Semnificativ din punct de vedere istoric."],
      en: ["Difficult to access.", "Historically significant."]
    }
  },
  {
    id: "cerro-mogoton-relief-v2",
    type: "mountain",
    parent: "NI-NS",
    coords: [-86.41, 13.78],
    name: { de: "Cerro Mogotón", hu: "Mogotón-hegy", ro: "Cerro Mogotón", en: "Mount Mogotón" },
    description: { de: "Der höchste Berg Nicaraguas.", hu: "Nicaragua legmagasabb hegye.", ro: "Cel mai înalt munte din Nicaragua.", en: "The highest mountain in Nicaragua." },
    facts: {
      de: ["An der Grenze zu Honduras.", "Höhe 2107 Meter."],
      hu: ["Honduras határán található.", "Magassága 2107 méter."],
      ro: ["Situat la granița cu Honduras.", "Altitudine 2107 metri."],
      en: ["Located on the border with Honduras.", "Elevation 2107 meters."]
    }
  },
  {
    id: "valle-de-la-luna-relief-v2",
    type: "relief",
    parent: "NI-ES",
    coords: [-86.25, 13.20],
    name: { de: "Valle de la Luna", hu: "Valle de la Luna (Holdvölgy)", ro: "Valea Lunii", en: "Valley of the Moon" },
    description: { de: "Ein landschaftlich reizvolles Tal.", hu: "Festői szépségű völgy.", ro: "O vale pitorească.", en: "A scenic valley." },
    facts: {
      de: ["Interessante Felsformationen.", "Touristenattraktion."],
      hu: ["Érdekes sziklaformációk.", "Turisztikai látványosság."],
      ro: ["Formațiuni stâncoase interesante.", "Atracție turistică."],
      en: ["Interesting rock formations.", "Tourist attraction."]
    }
  },
  {
    id: "cerro-kilambe-relief-v2",
    type: "mountain",
    parent: "NI-JI",
    coords: [-85.70, 13.55],
    name: { de: "Cerro Kilambé", hu: "Kilambé-hegy", ro: "Cerro Kilambé", en: "Mount Kilambé" },
    description: { de: "Ein Berg im Naturreservat Kilambé.", hu: "Hegy a Kilambé Természetvédelmi Területen.", ro: "Un munte în Rezervația Naturală Kilambé.", en: "A mountain in the Kilambé Natural Reserve." },
    facts: {
      de: ["Hohe Biodiversität.", "Dichte Bergwälder."],
      hu: ["Magas biológiai sokféleség.", "Sűrű hegyi erdők."],
      ro: ["Biodiversitate ridicată.", "Păduri montane dense."],
      en: ["High biodiversity.", "Dense cloud forests."]
    }
  },
  {
    id: "meseta-de-juigalpa-relief-v2",
    type: "relief",
    parent: "NI-RS",
    coords: [-85.35, 12.10],
    name: { de: "Meseta de Juigalpa", hu: "Juigalpa-fennsík", ro: "Meseta de Juigalpa", en: "Juigalpa Plateau" },
    description: { de: "Ein ausgedehntes Plateau im Zentrum.", hu: "Kiterjedt fennsík a központban.", ro: "Un platou întins în centru.", en: "An extensive plateau in the center." },
    facts: {
      de: ["Viehzuchtgebiet.", "Graslandlandschaft."],
      hu: ["Állattenyésztési terület.", "Gyepes táj."],
      ro: ["Zonă de creștere a vitelor.", "Peisaj de pajiști."],
      en: ["Cattle ranching area.", "Grassland landscape."]
    }
  },
  {
    id: "cerro-el-pilon-relief-v2",
    type: "mountain",
    parent: "NI-BO",
    coords: [-85.60, 12.50],
    name: { de: "Cerro El Pilón", hu: "El Pilón-hegy", ro: "Cerro El Pilón", en: "Mount El Pilón" },
    description: { de: "Ein markanter Gipfel.", hu: "Jellegzetes csúcs.", ro: "Un vârf proeminent.", en: "A prominent peak." },
    facts: {
      de: ["Wanderziel.", "Panoramablick."],
      hu: ["Túracélpont.", "Panorámás kilátás."],
      ro: ["Destinație de drumeție.", "Vedere panoramică."],
      en: ["Hiking destination.", "Panoramic view."]
    }
  },
  {
    id: "valle-de-osua-relief-v2",
    type: "relief",
    parent: "NI-MA",
    coords: [-85.80, 13.00],
    name: { de: "Valle de Osua", hu: "Osua-völgy", ro: "Valea Osua", en: "Osua Valley" },
    description: { de: "Ein Tal in den nördlichen Highlands.", hu: "Völgy az északi felföldön.", ro: "O vale în zonele înalte din nord.", en: "A valley in the northern highlands." },
    facts: {
      de: ["Fruchtbar.", "Kaffeeproduktion."],
      hu: ["Termékeny.", "Kávétermesztés."],
      ro: ["Fertilă.", "Producția de cafea."],
      en: ["Fertile.", "Coffee production."]
    }
  },
  {
    id: "meseta-del-pacifico-relief-v2",
    type: "relief",
    parent: "NI-MN",
    coords: [-86.20, 12.00],
    name: { de: "Meseta del Pacífico", hu: "Pacifikus-fennsík", ro: "Meseta del Pacífico", en: "Pacific Plateau" },
    description: { de: "Die zentrale Hochebene an der Pazifikküste.", hu: "Központi fennsík a csendes-óceáni partvidéken.", ro: "Platoul central de pe coasta Pacificului.", en: "The central plateau on the Pacific coast." },
    facts: {
      de: ["Bevölkerungsreichste Region.", "Vulkanischer Ursprung."],
      hu: ["Legnépesebb régió.", "Vulkáni eredetű."],
      ro: ["Cea mai populată regiune.", "Origine vulcanică."],
      en: ["Most populous region.", "Volcanic origin."]
    }
  },
  {
    id: "valle-de-jalapa-relief-v2",
    type: "relief",
    parent: "NI-NS",
    coords: [-86.15, 13.90],
    name: { de: "Valle de Jalapa", hu: "Jalapa-völgy", ro: "Valea Jalapa", en: "Jalapa Valley" },
    description: { de: "Ein Grenz-Tal zu Honduras.", hu: "Határmenti völgy Honduras felé.", ro: "O vale de graniță cu Honduras.", en: "A border valley with Honduras." },
    facts: {
      de: ["Berühmt für Kaffee.", "Hohe Anbaugebiete."],
      hu: ["Híres a kávéjáról.", "Magasan fekvő termőterületek."],
      ro: ["Faimoasă pentru cafea.", "Zone de cultivare la altitudine."],
      en: ["Famous for coffee.", "High-altitude growing areas."]
    }
  },
  {
    id: "cerro-punta-gorda-relief-v2",
    type: "mountain",
    parent: "NI-RS",
    coords: [-84.50, 11.50],
    name: { de: "Cerro Punta Gorda", hu: "Punta Gorda-hegy", ro: "Cerro Punta Gorda", en: "Mount Punta Gorda" },
    description: { de: "Ein Hügel in der Nähe der südkaribischen Küste.", hu: "Domb a dél-karibi partvidék közelében.", ro: "Un deal în apropierea coastei Caraibelor de Sud.", en: "A hill near the South Caribbean coast." },
    facts: {
      de: ["Nahe des Punta Gorda Flusses.", "Tropische Umgebung."],
      hu: ["A Punta Gorda-folyó közelében.", "Trópusi környezet."],
      ro: ["Aproape de râul Punta Gorda.", "Mediu tropical."],
      en: ["Near the Punta Gorda River.", "Tropical environment."]
    }
  },
  {
    id: "meseta-jinotega-relief-v2",
    type: "relief",
    parent: "NI-JI",
    coords: [-86.00, 13.10],
    name: { de: "Meseta de Jinotega", hu: "Jinotegai-fennsík", ro: "Meseta de Jinotega", en: "Jinotega Plateau" },
    description: { de: "Die kühle Hochebene im Norden.", hu: "Hűvös fennsík az északi részen.", ro: "Platoul răcoros din nord.", en: "The cool plateau in the north." },
    facts: {
      de: ["Bekannt für Kaffee.", "Nebelwälder."],
      hu: ["Kávétermesztéséről ismert.", "Felhőerdők."],
      ro: ["Cunoscut pentru cafea.", "Păduri de nori."],
      en: ["Known for coffee.", "Cloud forests."]
    }
  },
  {
    id: "cerro-la-quinta-relief-v2",
    type: "mountain",
    parent: "NI-MA",
    coords: [-85.50, 13.05],
    name: { de: "Cerro La Quinta", hu: "La Quinta-hegy", ro: "Cerro La Quinta", en: "Mount La Quinta" },
    description: { de: "Ein Berg in den Matagalpa-Highlands.", hu: "Hegy a Matagalpa-felföldön.", ro: "Un munte în zonele înalte din Matagalpa.", en: "A mountain in the Matagalpa highlands." },
    facts: {
      de: ["Wandergebiet.", "Kaffeeplantagen in der Nähe."],
      hu: ["Túraterület.", "Kávéültetvények a közelben."],
      ro: ["Zonă de drumeție.", "Plantații de cafea în apropiere."],
      en: ["Hiking area.", "Coffee plantations nearby."]
    }
  },
  {
    id: "valle-de-la-libertad-relief-v2",
    type: "relief",
    parent: "NI-CS",
    coords: [-85.10, 12.20],
    name: { de: "Valle de la Libertad", hu: "Libertad-völgy", ro: "Valea la Libertad", en: "Libertad Valley" },
    description: { de: "Ein Tal in Chontales.", hu: "Völgy Chontales megyében.", ro: "O vale în Chontales.", en: "A valley in Chontales." },
    facts: {
      de: ["Bergbaugeschichte.", "Viehweiden."],
      hu: ["Bányászati múlt.", "Állatlegelők."],
      ro: ["Istoric minier.", "Pășuni pentru vite."],
      en: ["Mining history.", "Cattle pastures."]
    }
  },
  {
    id: "cerro-coyol-relief-v2",
    type: "mountain",
    parent: "NI-BO",
    coords: [-85.55, 12.40],
    name: { de: "Cerro Coyol", hu: "Coyol-hegy", ro: "Cerro Coyol", en: "Mount Coyol" },
    description: { de: "Ein Hügel im Boaco-Gebiet.", hu: "Domb a Boaco-területen.", ro: "Un deal în zona Boaco.", en: "A hill in the Boaco area." },
    facts: {
      de: ["Wichtiges Weideland.", "Schöne Aussichten."],
      hu: ["Fontos legelő.", "Szép kilátás."],
      ro: ["Pășune importantă.", "Vederi frumoase."],
      en: ["Important pastureland.", "Beautiful views."]
    }
  }
];
