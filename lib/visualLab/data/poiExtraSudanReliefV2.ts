import type { POI } from "./poi";

export const poiExtraSudanReliefV2: POI[] = [
  {
    id: "jebel-tagabo-relief-v2",
    type: "mountain",
    parent: "SD-DN",
    coords: [24.4, 15.6],
    name: { de: "Jebel Tagabo", hu: "Jebel Tagabo", ro: "Jebel Tagabo", en: "Jebel Tagabo" },
    description: { de: "Ein vulkanisches Gebirgsmassiv in der Region Darfur.", hu: "Vulkáni hegység Darfúr régióban.", ro: "Un masiv muntos vulcanic în regiunea Darfur.", en: "A volcanic mountain range in the Darfur region." },
    facts: {
      de: ["Vulkansystem", "Höhe über 2000 m"],
      hu: ["Vulkáni rendszer", "2000 m feletti magasság"],
      ro: ["Sistem vulcanic", "Altitudine peste 2000 m"],
      en: ["Volcanic system", "Elevation over 2000 m"]
    }
  },
  {
    id: "jebel-meidob-relief-v2",
    type: "mountain",
    parent: "SD-DN",
    coords: [26.0, 15.3],
    name: { de: "Jebel Meidob", hu: "Jebel Meidob", ro: "Jebel Meidob", en: "Jebel Meidob" },
    description: { de: "Ein isoliertes Vulkanfeld im Nordwesten Sudans.", hu: "Elszigetelt vulkanikus mező Szudán északnyugati részén.", ro: "Un câmp vulcanic izolat în nord-vestul Sudanului.", en: "An isolated volcanic field in northwestern Sudan." },
    facts: {
      de: ["Vulkankegel", "Wüstenlage"],
      hu: ["Vulkáni kúpok", "Sivatagi elhelyezkedés"],
      ro: ["Conuri vulcanice", "Locație deșertică"],
      en: ["Volcanic cones", "Desert location"]
    }
  },
  {
    id: "bayuda-desert-relief-v2",
    type: "relief",
    parent: "SD-NR",
    coords: [33.0, 18.0],
    name: { de: "Bayuda-Wüste", hu: "Bayuda-sivatag", ro: "Deșertul Bayuda", en: "Bayuda Desert" },
    description: { de: "Eine Wüstenregion innerhalb der großen Nil-Schleife.", hu: "Sivatagi régió a nagy Nílus-kanyarban.", ro: "O regiune deșertică în interiorul marii bucle a Nilului.", en: "A desert region within the great Nile loop." },
    facts: {
      de: ["Nil-Schleife", "Vulkanische Hügel"],
      hu: ["Nílus-kanyar", "Vulkáni dombok"],
      ro: ["Buclele Nilului", "Dealuri vulcanice"],
      en: ["Nile loop", "Volcanic hills"]
    }
  },
  {
    id: "nile-valley-relief-v2",
    type: "relief",
    parent: "SD-NR",
    coords: [33.5, 17.5],
    name: { de: "Nil-Tal", hu: "Nílus-völgy", ro: "Valea Nilului", en: "Nile Valley" },
    description: { de: "Das zentrale fruchtbare Tal entlang des Nils im Sudan.", hu: "A központi termékeny völgy a Nílus mentén Szudánban.", ro: "Valea fertilă centrală de-a lungul Nilului în Sudan.", en: "The central fertile valley along the Nile in Sudan." },
    facts: {
      de: ["Landwirtschaft", "Zentralachse"],
      hu: ["Mezőgazdaság", "Központi tengely"],
      ro: ["Agricultură", "Axa centrală"],
      en: ["Agriculture", "Central axis"]
    }
  },
  {
    id: "jebel-kurun-relief-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [31.5, 16.5],
    name: { de: "Jebel Kurun", hu: "Jebel Kurun", ro: "Jebel Kurun", en: "Jebel Kurun" },
    description: { de: "Ein Berg im zentralen Sudan, nördlich der Nuba-Berge.", hu: "Hegy Közép-Szudánban, a Nuba-hegységtől északra.", ro: "Un munte în centrul Sudanului, la nord de Munții Nuba.", en: "A mountain in central Sudan, north of the Nuba Mountains." },
    facts: {
      de: ["Einzelberg", "Zentrales Hügelland"],
      hu: ["Magányos hegy", "Központi dombság"],
      ro: ["Munte izolat", "Dealuri centrale"],
      en: ["Isolated mountain", "Central hilly area"]
    }
  },
  {
    id: "jebel-el-ain-relief-v2",
    type: "mountain",
    parent: "SD-KS",
    coords: [32.5, 13.0],
    name: { de: "Jebel el-Ain", hu: "Jebel el-Ain", ro: "Jebel el-Ain", en: "Jebel el-Ain" },
    description: { de: "Ein markantes Bergmassiv im Bundesstaat Kordofan.", hu: "Jellegzetes hegység Kordofán államban.", ro: "Un masiv muntos distinctiv în statul Kordofan.", en: "A distinctive mountain massif in Kordofan state." },
    facts: {
      de: ["Felsig", "Kordofan-Region"],
      hu: ["Sziklás", "Kordofán régió"],
      ro: ["Stâncos", "Regiunea Kordofan"],
      en: ["Rocky", "Kordofan region"]
    }
  },
  {
    id: "wadi-el-milk-relief-v2",
    type: "relief",
    parent: "SD-NR",
    coords: [31.0, 17.0],
    name: { de: "Wadi el-Milk", hu: "Wadi el-Milk", ro: "Wadi el-Milk", en: "Wadi el-Milk" },
    description: { de: "Ein bedeutendes trockenes Flusstal in der Sahara.", hu: "Jelentős kiszáradt folyóvölgy a Szaharában.", ro: "O vale fluvială uscată semnificativă în Sahara.", en: "A significant dry river valley in the Sahara." },
    facts: {
      de: ["Trockental", "Altes Flussbett"],
      hu: ["Kiszáradt völgy", "Régi meder"],
      ro: ["Vale uscată", "Albie veche"],
      en: ["Dry valley", "Old river bed"]
    }
  },
  {
    id: "jebel-shabluka-relief-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [32.8, 16.3],
    name: { de: "Jebel Shabluka", hu: "Jebel Shabluka", ro: "Jebel Shabluka", en: "Jebel Shabluka" },
    description: { de: "Ein felsiges Berggebiet nahe der Sabaloka-Schlucht.", hu: "Sziklás hegyvidék a Sabaloka-szurdok közelében.", ro: "O zonă muntoasă stâncoasă lângă defileul Sabaloka.", en: "A rocky mountain area near the Sabaloka Gorge." },
    facts: {
      de: ["Sabaloka", "Nil-Nähe"],
      hu: ["Sabaloka", "Nílus közelsége"],
      ro: ["Sabaloka", "Aproape de Nil"],
      en: ["Sabaloka", "Nile vicinity"]
    }
  },
  {
    id: "taka-mountains-relief-v2",
    type: "mountain",
    parent: "SD-KS",
    coords: [36.4, 15.4],
    name: { de: "Taka-Berge", hu: "Taka-hegység", ro: "Munții Taka", en: "Taka Mountains" },
    description: { de: "Ein markantes Granit-Bergmassiv bei Kassala.", hu: "Jellegzetes gránit-hegység Kassala mellett.", ro: "Un masiv muntos de granit distinctiv lângă Kassala.", en: "A striking granite mountain massif near Kassala." },
    facts: {
      de: ["Granit", "Kassala-Region"],
      hu: ["Gránit", "Kassala régió"],
      ro: ["Granit", "Regiunea Kassala"],
      en: ["Granite", "Kassala region"]
    }
  },
  {
    id: "jebel-gebeit-relief-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [36.5, 19.5],
    name: { de: "Jebel Gebeit", hu: "Jebel Gebeit", ro: "Jebel Gebeit", en: "Jebel Gebeit" },
    description: { de: "Ein Gebirge im Red Sea State im Nordosten.", hu: "Hegység a Vörös-tenger államban, északkeleten.", ro: "Un munte în statul Mării Roșii, în nord-est.", en: "A mountain in the Red Sea State in the northeast." },
    facts: {
      de: ["Rotmeer-Gebirge", "Karges Gelände"],
      hu: ["Vörös-tengeri hegyek", "Kopár terep"],
      ro: ["Munții Mării Roșii", "Teren arid"],
      en: ["Red Sea Hills", "Arid terrain"]
    }
  },
  {
    id: "nubian-hills-relief-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [36.0, 19.0],
    name: { de: "Nubische Hügel", hu: "Núbiai-dombság", ro: "Dealurile Nubiene", en: "Nubian Hills" },
    description: { de: "Ein ausgedehntes Hügelland zwischen Nil und Rotem Meer.", hu: "Kiterjedt dombság a Nílus és a Vörös-tenger között.", ro: "Un ținut deluros extins între Nil și Marea Roșie.", en: "An extensive hilly area between the Nile and the Red Sea." },
    facts: {
      de: ["Küste", "Trockenheit"],
      hu: ["Tengerpart", "Szárazság"],
      ro: ["Coastă", "Ariditate"],
      en: ["Coast", "Aridity"]
    }
  },
  {
    id: "jebel-abiyad-relief-v2",
    type: "mountain",
    parent: "SD-DN",
    coords: [25.0, 14.5],
    name: { de: "Jebel Abiyad", hu: "Jebel Abiyad", ro: "Jebel Abiyad", en: "Jebel Abiyad" },
    description: { de: "Ein isoliertes Bergmassiv in West-Darfur.", hu: "Elszigetelt hegység Nyugat-Darfúrban.", ro: "Un masiv muntos izolat în Darfurul de Vest.", en: "An isolated mountain massif in West Darfur." },
    facts: {
      de: ["Wüstenberg", "Darfur"],
      hu: ["Sivatagi hegy", "Darfúr"],
      ro: ["Munte deșertic", "Darfur"],
      en: ["Desert mountain", "Darfur"]
    }
  },
  {
    id: "kosti-ridge-relief-v2",
    type: "relief",
    parent: "SD-WH",
    coords: [32.6, 13.2],
    name: { de: "Kosti-Höhenrücken", hu: "Kosti-hátság", ro: "Cresta Kosti", en: "Kosti Ridge" },
    description: { de: "Eine leichte Anhöhe nahe der Stadt Kosti am Weißen Nil.", hu: "Enyhe magaslat Kosti városa közelében, a Fehér-Nílusnál.", ro: "O ușoară elevație lângă orașul Kosti de pe Nilul Alb.", en: "A slight elevation near the city of Kosti on the White Nile." },
    facts: {
      de: ["Weißer Nil", "Flache Region"],
      hu: ["Fehér-Nílus", "Alföldi régió"],
      ro: ["Nilul Alb", "Regiune plată"],
      en: ["White Nile", "Flat region"]
    }
  },
  {
    id: "jebel-dair-massif-relief-v2",
    type: "mountain",
    parent: "SD-SK",
    coords: [30.5, 12.5],
    name: { de: "Jebel Dair Massiv", hu: "Jebel Dair-masszívum", ro: "Masivul Jebel Dair", en: "Jebel Dair Massif" },
    description: { de: "Ein markantes Bergmassiv in der Kordofan-Region.", hu: "Jellegzetes hegység Kordofán régióban.", ro: "Un masiv muntos distinctiv în regiunea Kordofan.", en: "A distinctive mountain massif in the Kordofan region." },
    facts: {
      de: ["Nuba-Berge", "Schutzgebiet"],
      hu: ["Nuba-hegység", "Természetvédelmi terület"],
      ro: ["Munții Nuba", "Arie protejată"],
      en: ["Nuba Mountains", "Protected area"]
    }
  },
  {
    id: "wadi-howar-delta-relief-v2",
    type: "relief",
    parent: "SD-DN",
    coords: [24.5, 17.5],
    name: { de: "Wadi Howar Delta", hu: "Wadi Howar-delta", ro: "Delta Wadi Howar", en: "Wadi Howar Delta" },
    description: { de: "Die Mündungsregion des alten Wadis in Richtung Nil.", hu: "Az ősi Wadi torkolatvidéke a Nílus felé.", ro: "Regiunea de vărsare a vechiului Wadi spre Nil.", en: "The mouth region of the ancient Wadi towards the Nile." },
    facts: {
      de: ["Sahara", "Trockenlauf"],
      hu: ["Szahara", "Kiszáradt folyómeder"],
      ro: ["Sahara", "Curs secat"],
      en: ["Sahara", "Dry riverbed"]
    }
  },
  {
    id: "jebel-marra-highlands-relief-v2",
    type: "mountain",
    parent: "SD-DN",
    coords: [24.3, 12.9],
    name: { de: "Jebel Marra Hochland", hu: "Jebel Marra-felföld", ro: "Munții Jebel Marra", en: "Jebel Marra Highlands" },
    description: { de: "Das zentrale Hochland des Jebel-Marra-Massivs.", hu: "A Jebel Marra-masszívum központi felföldje.", ro: "Platoul central al masivului Jebel Marra.", en: "The central highlands of the Jebel Marra massif." },
    facts: {
      de: ["Höchster Punkt", "Vulkanisch"],
      hu: ["Legmagasabb pont", "Vulkáni"],
      ro: ["Cel mai înalt punct", "Vulcanic"],
      en: ["Highest point", "Volcanic"]
    }
  },
  {
    id: "atbara-plain-relief-v2",
    type: "relief",
    parent: "SD-NR",
    coords: [34.0, 17.8],
    name: { de: "Atbara-Ebene", hu: "Atbara-síkság", ro: "Câmpia Atbara", en: "Atbara Plain" },
    description: { de: "Eine flache Ebene nahe der Mündung des Atbara-Flusses.", hu: "Síkvidék az Atbara-folyó torkolata közelében.", ro: "O câmpie plată lângă vărsarea râului Atbara.", en: "A flat plain near the mouth of the Atbara River." },
    facts: {
      de: ["Trockenebene", "Nilnähe"],
      hu: ["Száraz síkság", "Nílus közeli"],
      ro: ["Câmpie aridă", "Lângă Nil"],
      en: ["Arid plain", "Nile vicinity"]
    }
  },
  {
    id: "jebel-soturba-relief-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [36.7, 18.5],
    name: { de: "Jebel Soturba", hu: "Jebel Soturba", ro: "Jebel Soturba", en: "Jebel Soturba" },
    description: { de: "Ein Berg im Red Sea State, nahe der Küste.", hu: "Hegy a Vörös-tenger államban, a part közelében.", ro: "Un munte în statul Mării Roșii, aproape de coastă.", en: "A mountain in the Red Sea State, near the coast." },
    facts: {
      de: ["Küstennähe", "Granit"],
      hu: ["Part közeli", "Gránit"],
      ro: ["Aproape de coastă", "Granit"],
      en: ["Near coast", "Granite"]
    }
  },
  {
    id: "wadi-azum-valley-relief-v2",
    type: "relief",
    parent: "SD-DN",
    coords: [23.5, 12.0],
    name: { de: "Wadi Azum Tal", hu: "Wadi Azum-völgy", ro: "Valea Wadi Azum", en: "Wadi Azum Valley" },
    description: { de: "Ein wichtiges Tal in der Region Darfur.", hu: "Fontos völgy Darfúr régióban.", ro: "O vale importantă în regiunea Darfur.", en: "An important valley in the Darfur region." },
    facts: {
      de: ["Darfur", "Saisonaler Fluss"],
      hu: ["Darfúr", "Időszakos folyó"],
      ro: ["Darfur", "Râu sezonier"],
      en: ["Darfur", "Seasonal river"]
    }
  },
  {
    id: "nuba-hills-central-relief-v2",
    type: "mountain",
    parent: "SD-SK",
    coords: [30.8, 12.0],
    name: { de: "Nuba-Hügel zentral", hu: "Nuba-dombság központi", ro: "Dealurile Nuba centrale", en: "Nuba Hills Central" },
    description: { de: "Der zentrale Teil der Nuba-Hügelkette.", hu: "A Nuba-hegység központi része.", ro: "Partea centrală a lanțului muntos Nuba.", en: "The central part of the Nuba Hills chain." },
    facts: {
      de: ["Zentral-Sudan", "Hügellandschaft"],
      hu: ["Közép-Szudán", "Hegyvidéki táj"],
      ro: ["Sudanul Central", "Peisaj deluros"],
      en: ["Central Sudan", "Hilly landscape"]
    }
  },
  {
    id: "jebel-uwaynat-sudan-relief-v2",
    type: "mountain",
    parent: "SD-DN",
    coords: [25.0, 22.0],
    name: { de: "Jebel Uwaynat (Sudan)", hu: "Jebel Uwaynat (Szudán)", ro: "Jebel Uwaynat (Sudan)", en: "Jebel Uwaynat (Sudan)" },
    description: { de: "Der sudanesische Teil des Jebel-Uwaynat-Massivs.", hu: "A Jebel Uwaynat-masszívum szudáni része.", ro: "Partea sudaneză a masivului Jebel Uwaynat.", en: "The Sudanese part of the Jebel Uwaynat massif." },
    facts: {
      de: ["Grenzregion", "Sandstein"],
      hu: ["Határvidék", "Homokkő"],
      ro: ["Regiune de frontieră", "Gresie"],
      en: ["Border region", "Sandstone"]
    }
  },
  {
    id: "dongola-plain-relief-v2",
    type: "relief",
    parent: "SD-NR",
    coords: [30.5, 19.1],
    name: { de: "Dongola-Ebene", hu: "Dongola-síkság", ro: "Câmpia Dongola", en: "Dongola Plain" },
    description: { de: "Die flache Region um die Stadt Dongola.", hu: "Dongola városa körüli síkság.", ro: "Regiunea plată din jurul orașului Dongola.", en: "The flat region around the city of Dongola." },
    facts: {
      de: ["Nil", "Trocken"],
      hu: ["Nílus", "Száraz"],
      ro: ["Nil", "Arid"],
      en: ["Nile", "Arid"]
    }
  },
  {
    id: "jebel-mimi-relief-v2",
    type: "mountain",
    parent: "SD-DN",
    coords: [24.0, 13.5],
    name: { de: "Jebel Mimi", hu: "Jebel Mimi", ro: "Jebel Mimi", en: "Jebel Mimi" },
    description: { de: "Ein Berg in der Region Darfur.", hu: "Hegy Darfúr régióban.", ro: "Un munte în regiunea Darfur.", en: "A mountain in the Darfur region." },
    facts: {
      de: ["Darfur", "Einsam"],
      hu: ["Darfúr", "Magányos"],
      ro: ["Darfur", "Singuratic"],
      en: ["Darfur", "Solitary"]
    }
  },
  {
    id: "wadi-howar-upper-relief-v2",
    type: "relief",
    parent: "SD-DN",
    coords: [22.0, 16.0],
    name: { de: "Wadi Howar Oberlauf", hu: "Wadi Howar felsőfolyás", ro: "Cursul superior Wadi Howar", en: "Wadi Howar Upper Reach" },
    description: { de: "Der obere Verlauf des ausgetrockneten Wadis.", hu: "A kiszáradt Wadi felső folyása.", ro: "Cursul superior al Wadi-ului secat.", en: "The upper course of the dried-up Wadi." },
    facts: {
      de: ["Sahara", "Wüstenverlauf"],
      hu: ["Szahara", "Sivatagi szakasz"],
      ro: ["Sahara", "Traseu deșertic"],
      en: ["Sahara", "Desert course"]
    }
  },
  {
    id: "khor-el-gash-plain-relief-v2",
    type: "relief",
    parent: "SD-KS",
    coords: [36.5, 15.6],
    name: { de: "Khor el-Gash Ebene", hu: "Khor el-Gash-síkság", ro: "Câmpia Khor el-Gash", en: "Khor el-Gash Plain" },
    description: { de: "Die fruchtbare Ebene entlang des saisonalen Flusses Gash.", hu: "A termékeny síkság a szezonális Gash-folyó mentén.", ro: "Câmpia fertilă de-a lungul râului sezonier Gash.", en: "The fertile plain along the seasonal Gash River." },
    facts: {
      de: ["Kassala", "Saisonal"],
      hu: ["Kassala", "Időszakos"],
      ro: ["Kassala", "Sezonier"],
      en: ["Kassala", "Seasonal"]
    }
  }
];
