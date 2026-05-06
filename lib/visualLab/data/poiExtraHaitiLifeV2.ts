// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraHaitiLifeV2: POI[] = [
  {
    id: "parc-national-macaya-life-v2",
    type: "animal-habitat",
    parent: "HT-SD",
    coords: [-74.0285, 18.3667],
    name: { de: "Nationalpark Pic Macaya", hu: "Pic Macaya Nemzeti Park", ro: "Parcul Național Pic Macaya", en: "Pic Macaya National Park" },
    description: { de: "Ein bedeutendes Naturschutzgebiet mit reicher Biodiversität und endemischen Tierarten.", hu: "Jelentős természetvédelmi terület gazdag biodiverzitással és endemikus állatfajokkal.", ro: "O rezervație naturală importantă cu o biodiversitate bogată și specii endemice.", en: "An important nature reserve with rich biodiversity and endemic animal species." },
    facts: {
      de: ["Heimat seltener Froscharten", "Dichter Bergwald"],
      hu: ["Ritka békafajok élőhelye", "Sűrű hegyi erdő"],
      ro: ["Habitat pentru specii rare de broaște", "Pădure montană densă"],
      en: ["Habitat for rare frog species", "Dense mountain forest"]
    }, image: "/poi-images/parc-national-macaya-life-v2.webp"},
  {
    id: "parc-national-la-visite-life-v2",
    type: "animal-habitat",
    parent: "HT-OU",
    coords: [-72.3333, 18.3333],
    name: { de: "Nationalpark La Visite", hu: "La Visite Nemzeti Park", ro: "Parcul Național La Visite", en: "La Visite National Park" },
    description: { de: "Ein wichtiges Vogelschutzgebiet in den Bergen Haitis.", hu: "Fontos madárvédelmi terület Haiti hegyvidékén.", ro: "O zonă importantă de protecție a păsărilor în munții din Haiti.", en: "An important bird sanctuary in the mountains of Haiti." },
    facts: {
      de: ["Zahlreiche endemische Vogelarten", "Kühles Bergklima"],
      hu: ["Számos endemikus madárfaj", "Hűvös hegyi klíma"],
      ro: ["Numeroase specii de păsări endemice", "Climat montan răcoros"],
      en: ["Numerous endemic bird species", "Cool mountain climate"]
    }, image: "/poi-images/parc-national-la-visite-life-v2.webp"},
  {
    id: "foret-des-pins-life-v2",
    type: "animal-habitat",
    parent: "HT-SE",
    coords: [-71.95, 18.31],
    name: { de: "Forêt des Pins Reservat", hu: "Forêt des Pins Rezervátum", ro: "Rezervația Forêt des Pins", en: "Forêt des Pins Reserve" },
    description: { de: "Ein geschütztes Kiefernwaldgebiet, das Lebensraum für viele lokale Tiere bietet.", hu: "Védett fenyőerdő terület, amely sok helyi állatnak ad otthont.", ro: "O zonă protejată de pădure de pini care oferă habitat multor animale locale.", en: "A protected pine forest area that provides habitat for many local animals." },
    facts: {
      de: ["Seltene Reptilienarten", "Bedeutend für die Wasserwirtschaft"],
      hu: ["Ritka hüllőfajok", "Jelentős a vízgazdálkodás szempontjából"],
      ro: ["Specii rare de reptile", "Important pentru gestionarea apei"],
      en: ["Rare reptile species", "Important for water management"]
    }, image: "/poi-images/foret-des-pins-life-v2.webp"},
  {
    id: "plaine-artibonite-agri-life-v2",
    type: "agriculture",
    parent: "HT-AR",
    coords: [-72.6, 19.2],
    name: { de: "Artibonite-Ebene Agrarregion", hu: "Artibonite-síkság mezőgazdasági régió", ro: "Regiunea agricolă Câmpia Artibonite", en: "Artibonite Plain Agricultural Region" },
    description: { de: "Das wichtigste Reisanbaugebiet des Landes.", hu: "Az ország legfontosabb rizstermesztő vidéke.", ro: "Cea mai importantă zonă de cultivare a orezului din țară.", en: "The most important rice-growing area in the country." },
    facts: {
      de: ["Haupterzeuger für haitianischen Reis", "Bewässerung durch den Artibonite-Fluss"],
      hu: ["A haiti rizs fő termelője", "Az Artibonite folyó által öntözött"],
      ro: ["Principalul producător de orez haitian", "Irigat de râul Artibonite"],
      en: ["Main producer of Haitian rice", "Irrigated by the Artibonite River"]
    }, image: "/poi-images/plaine-artibonite-agri-life-v2.webp"},
  {
    id: "cotes-de-fer-agri-life-v2",
    type: "agriculture",
    parent: "HT-SE",
    coords: [-72.7, 18.2],
    name: { de: "Côtes-de-Fer Kaffeeanbau", hu: "Côtes-de-Fer kávétermesztés", ro: "Cultivarea cafelei Côtes-de-Fer", en: "Côtes-de-Fer Coffee Cultivation" },
    description: { de: "Eine Region, die für ihren hochwertigen Kaffee bekannt ist.", hu: "Kiváló minőségű kávéjáról ismert régió.", ro: "O regiune cunoscută pentru cafeaua sa de înaltă calitate.", en: "A region known for its high-quality coffee." },
    facts: {
      de: ["Traditionelle Anbaumethoden", "Bergkaffee von hoher Qualität"],
      hu: ["Hagyományos termesztési módszerek", "Kiváló minőségű hegyi kávé"],
      ro: ["Metode tradiționale de cultivare", "Cafea montană de înaltă calitate"],
      en: ["Traditional farming methods", "High-quality mountain coffee"]
    }
  },
  {
    id: "jardin-botanique-cayes-life-v2",
    type: "kid-landmark",
    parent: "HT-SD",
    coords: [-73.75, 18.2],
    name: { de: "Botanischer Garten Les Cayes", hu: "Les Cayes-i Botanikus Kert", ro: "Grădina Botanică Les Cayes", en: "Les Cayes Botanical Garden" },
    description: { de: "Ein pädagogischer Ort für Kinder, um die lokale Pflanzenwelt kennenzulernen.", hu: "Oktatási hely gyerekeknek a helyi növényvilág megismerésére.", ro: "Un loc educativ pentru copii pentru a învăța despre flora locală.", en: "An educational place for children to learn about local flora." },
    facts: {
      de: ["Lehrpfade für Schüler", "Sammlung tropischer Pflanzen"],
      hu: ["Tanösvények diákoknak", "Trópusi növénygyűjtemény"],
      ro: ["Trasee educaționale pentru elevi", "Colecție de plante tropicale"],
      en: ["Educational trails for students", "Collection of tropical plants"]
    }, image: "/poi-images/jardin-botanique-cayes-life-v2.webp"},
  {
    id: "ferme-ecologique-jacmel-life-v2",
    type: "agriculture",
    parent: "HT-SE",
    coords: [-72.5, 18.2],
    name: { de: "Ökologischer Bauernhof Jacmel", hu: "Jacmel-i Ökológiai Gazdaság", ro: "Fermă ecologică Jacmel", en: "Jacmel Ecological Farm" },
    description: { de: "Ein Bauernhof, der Kindern nachhaltige Landwirtschaft zeigt.", hu: "Gazdaság, amely bemutatja a gyerekeknek a fenntartható mezőgazdaságot.", ro: "O fermă care arată copiilor agricultura durabilă.", en: "A farm that shows children sustainable agriculture." },
    facts: {
      de: ["Demonstrationsgarten", "Umweltbildungsprogramme"],
      hu: ["Bemutatókert", "Környezeti nevelési programok"],
      ro: ["Grădină demonstrativă", "Programe de educație ecologică"],
      en: ["Demonstration garden", "Environmental education programs"]
    }
  },
  {
    id: "reserve-animale-gonave-life-v2",
    type: "animal-habitat",
    parent: "HT-OU",
    coords: [-73.1, 18.8],
    name: { de: "Gonâve Tierreservat", hu: "Gonâve Állatrezervátum", ro: "Rezervația de animale Gonâve", en: "Gonâve Animal Reserve" },
    description: { de: "Ein Schutzgebiet für lokale Inseltiere.", hu: "Védett terület a helyi szigeti állatok számára.", ro: "O zonă protejată pentru animalele insulare locale.", en: "A protected area for local island animals." },
    facts: {
      de: ["Beobachtung von Meeresvögeln", "Natürlicher Lebensraum"],
      hu: ["Tengeri madarak megfigyelése", "Természetes élőhely"],
      ro: ["Observarea păsărilor marine", "Habitat natural"],
      en: ["Seabird watching", "Natural habitat"]
    }, image: "/poi-images/reserve-animale-gonave-life-v2.webp"},
  {
    id: "bassin-bleu-nature-life-v2",
    type: "kid-landmark",
    parent: "HT-SE",
    coords: [-72.55, 18.25],
    name: { de: "Bassin-Bleu Kinderparadies", hu: "Bassin-Bleu gyermekparadicsom", ro: "Paradisul copiilor Bassin-Bleu", en: "Bassin-Bleu Children's Paradise" },
    description: { de: "Ein natürliches Becken, das bei Familien beliebt ist.", hu: "Természetes medence, amely népszerű a családok körében.", ro: "Un bazin natural popular în rândul familiilor.", en: "A natural basin popular with families." },
    facts: {
      de: ["Sichere Badebereiche", "Umgeben von Dschungel"],
      hu: ["Biztonságos fürdőhelyek", "Dzsungellel körülvéve"],
      ro: ["Zone de înot sigure", "Înconjurat de junglă"],
      en: ["Safe swimming areas", "Surrounded by jungle"]
    }, image: "/poi-images/bassin-bleu-nature-life-v2.webp"},
  {
    id: "parc-miraculeux-pa-p-life-v2",
    type: "kid-landmark",
    parent: "HT-OU",
    coords: [-72.3, 18.5],
    name: { de: "Kinderfreizeitpark Port-au-Prince", hu: "Port-au-Prince Gyermekszabadidőpark", ro: "Parc de distracții pentru copii Port-au-Prince", en: "Port-au-Prince Children's Leisure Park" },
    description: { de: "Ein zentraler Ort für Spiel und Erholung für Kinder.", hu: "Központi játszó- és pihenőhely gyerekeknek.", ro: "Un loc central de joacă și relaxare pentru copii.", en: "A central place for play and recreation for children." },
    facts: {
      de: ["Spielplätze", "Picknickbereiche"],
      hu: ["Játszóterek", "Piknikhelyek"],
      ro: ["Locuri de joacă", "Zone de picnic"],
      en: ["Playgrounds", "Picnic areas"]
    }
  },
  {
    id: "bananenausbau-limonade-life-v2",
    type: "agriculture",
    parent: "HT-ND",
    coords: [-72.1, 19.6],
    name: { de: "Bananenplantagen Limonade", hu: "Limonade banánültetvények", ro: "Plantații de banane Limonade", en: "Limonade Banana Plantations" },
    description: { de: "Ein wichtiges Gebiet für den Bananenanbau.", hu: "Fontos terület a banántermesztés számára.", ro: "O zonă importantă pentru cultivarea bananelor.", en: "An important area for banana cultivation." },
    facts: {
      de: ["Hauptanbaugebiet im Norden", "Frische Früchte"],
      hu: ["Északi fő termőterület", "Friss gyümölcsök"],
      ro: ["Zona principală de cultivare din nord", "Fructe proaspete"],
      en: ["Main growing area in the north", "Fresh fruits"]
    }
  },
  {
    id: "station-biologique-macaya-life-v2",
    type: "animal-habitat",
    parent: "HT-SD",
    coords: [-74.05, 18.35],
    name: { de: "Biologische Forschungsstation Macaya", hu: "Macaya Biológiai Kutatóállomás", ro: "Stația biologică de cercetare Macaya", en: "Macaya Biological Research Station" },
    description: { de: "Ein Zentrum für Tierstudien im Nationalpark.", hu: "Állattani kutatóközpont a nemzeti parkban.", ro: "Un centru de studii animale în parcul național.", en: "A center for animal studies in the national park." },
    facts: {
      de: ["Forschung an endemischen Arten", "Umweltschutz"],
      hu: ["Endemikus fajok kutatása", "Környezetvédelem"],
      ro: ["Cercetarea speciilor endemice", "Protecția mediului"],
      en: ["Research on endemic species", "Environmental protection"]
    }, image: "/poi-images/station-biologique-macaya-life-v2.webp"},
  {
    id: "jardin-zoologique-simple-life-v2",
    type: "animal-habitat",
    parent: "HT-OU",
    coords: [-72.28, 18.55],
    name: { de: "Einfacher Tierpark Pétion-Ville", hu: "Pétion-Ville állatkert", ro: "Grădina zoologică simplă Pétion-Ville", en: "Simple Pétion-Ville Zoo" },
    description: { de: "Ein kleiner Park mit lokalen Tieren.", hu: "Kis park helyi állatokkal.", ro: "O mică grădină zoologică cu animale locale.", en: "A small zoo with local animals." },
    facts: {
      de: ["Lernort für Kinder", "Heimische Tierarten"],
      hu: ["Tanulóhely gyerekeknek", "Őshonos állatfajok"],
      ro: ["Loc de învățare pentru copii", "Specii de animale indigene"],
      en: ["Learning place for children", "Native animal species"]
    }, image: "/poi-images/jardin-zoologique-simple-life-v2.webp"},
  {
    id: "agrarzentrum-saint-michel-life-v2",
    type: "agriculture",
    parent: "HT-AR",
    coords: [-72.2, 19.3],
    name: { de: "Agrarzentrum Saint-Michel", hu: "Saint-Michel agrárközpont", ro: "Centru agricol Saint-Michel", en: "Saint-Michel Agricultural Center" },
    description: { de: "Ein Bildungszentrum für moderne Landwirtschaft.", hu: "Modern mezőgazdasági oktatóközpont.", ro: "Un centru educațional pentru agricultura modernă.", en: "An educational center for modern agriculture." },
    facts: {
      de: ["Kurse für junge Landwirte", "Nachhaltige Methoden"],
      hu: ["Fiatal gazdák kurzusai", "Fenntartható módszerek"],
      ro: ["Cursuri pentru tineri fermieri", "Metode durabile"],
      en: ["Courses for young farmers", "Sustainable methods"]
    }, image: "/poi-images/agrarzentrum-saint-michel-life-v2.webp"},
  {
    id: "parc-enfants-jeremie-life-v2",
    type: "kid-landmark",
    parent: "HT-GA",
    coords: [-74.1, 18.6],
    name: { de: "Kinderpark Jérémie", hu: "Jérémie gyermekpark", ro: "Parc pentru copii Jérémie", en: "Jérémie Children's Park" },
    description: { de: "Ein schöner Park am Meer für Kinder.", hu: "Szép tengerparti park gyerekeknek.", ro: "Un parc frumos de la malul mării pentru copii.", en: "A beautiful seaside park for children." },
    facts: {
      de: ["Spielgeräte", "Schattenplätze"],
      hu: ["Játékok", "Árnyékos helyek"],
      ro: ["Echipamente de joacă", "Zone umbrite"],
      en: ["Play equipment", "Shaded areas"]
    }, image: "/poi-images/parc-enfants-jeremie-life-v2.webp"},
  {
    id: "plantation-cacao-grand-anse-life-v2",
    type: "agriculture",
    parent: "HT-GA",
    coords: [-74.15, 18.5],
    name: { de: "Grand-Anse Kakaoanbau", hu: "Grand-Anse kakaótermesztés", ro: "Cultivarea cacao Grand-Anse", en: "Grand-Anse Cocoa Cultivation" },
    description: { de: "Region für hochwertige Kakaoproduktion.", hu: "Kiváló minőségű kakaótermelő vidék.", ro: "Regiune pentru producția de cacao de înaltă calitate.", en: "Region for high-quality cocoa production." },
    facts: {
      de: ["Traditionelle Trocknung", "Bio-Qualität"],
      hu: ["Hagyományos szárítás", "Bio-minőség"],
      ro: ["Uscare tradițională", "Calitate organică"],
      en: ["Traditional drying", "Organic quality"]
    }, image: "/poi-images/plantation-cacao-grand-anse-life-v2.webp"},
  {
    id: "ferme-animaux-leogane-life-v2",
    type: "animal-habitat",
    parent: "HT-OU",
    coords: [-72.6, 18.5],
    name: { de: "Tierfarm Léogâne", hu: "Léogâne állatfarm", ro: "Fermă de animale Léogâne", en: "Léogâne Animal Farm" },
    description: { de: "Ein Ort, an dem Kinder Nutztiere hautnah erleben.", hu: "Hely, ahol a gyerekek közelről ismerhetik meg a haszonállatokat.", ro: "Un loc unde copiii pot vedea animalele de fermă de aproape.", en: "A place where children can experience farm animals up close." },
    facts: {
      de: ["Interaktive Erlebnisse", "Lernen über Tierpflege"],
      hu: ["Interaktív élmények", "Tanulás az állatok gondozásáról"],
      ro: ["Experiențe interactive", "Învățare despre îngrijirea animalelor"],
      en: ["Interactive experiences", "Learning about animal care"]
    }
  },
  {
    id: "parc-nature-cayemites-life-v2",
    type: "animal-habitat",
    parent: "HT-GA",
    coords: [-73.7, 18.6],
    name: { de: "Cayemites Naturpark", hu: "Cayemites Natúrpark", ro: "Parc natural Cayemites", en: "Cayemites Nature Park" },
    description: { de: "Ein geschütztes Gebiet mit maritimer Tierwelt.", hu: "Védett terület tengeri állatvilággal.", ro: "O zonă protejată cu faună marină.", en: "A protected area with marine wildlife." },
    facts: {
      de: ["Schnorcheln für Jugendliche", "Korallenriffschutz"],
      hu: ["Snorkelezés fiataloknak", "Korallzátony-védelem"],
      ro: ["Snorkeling pentru tineri", "Protecția recifelor de corali"],
      en: ["Snorkeling for teenagers", "Coral reef protection"]
    }
  },
  {
    id: "marais-trou-caiman-life-v2",
    type: "animal-habitat",
    parent: "HT-OU",
    coords: [-72.1, 18.6],
    name: { de: "Trou Caïman Feuchtgebiet", hu: "Trou Caïman vizes élőhely", ro: "Zona umedă Trou Caïman", en: "Trou Caïman Wetland" },
    description: { de: "Ein bedeutender Lebensraum für Krokodile und Vögel.", hu: "Fontos élőhely krokodilok és madarak számára.", ro: "Un habitat important pentru crocodili și păsări.", en: "An important habitat for crocodiles and birds." },
    facts: {
      de: ["Beobachtungsplattformen", "Seltene Wasservögel"],
      hu: ["Megfigyelő platformok", "Ritka vízi madarak"],
      ro: ["Platforme de observare", "Păsări de apă rare"],
      en: ["Observation platforms", "Rare water birds"]
    }, image: "/poi-images/marais-trou-caiman-life-v2.webp"},
  {
    id: "jardin-fruitier-saint-marc-life-v2",
    type: "agriculture",
    parent: "HT-AR",
    coords: [-72.6, 19.1],
    name: { de: "Obstgarten Saint-Marc", hu: "Saint-Marc gyümölcsöskert", ro: "Livada Saint-Marc", en: "Saint-Marc Fruit Orchard" },
    description: { de: "Ein Lehrgarten für tropische Früchte.", hu: "Trópusi gyümölcsök oktatókertje.", ro: "O livadă educativă pentru fructe tropicale.", en: "An educational orchard for tropical fruits." },
    facts: {
      de: ["Vielzahl an Mangos", "Ernteerlebnisse"],
      hu: ["Sokféle mangó", "Szüreti élmények"],
      ro: ["Varietate de mango", "Experiențe de recoltare"],
      en: ["Variety of mangos", "Harvesting experiences"]
    }, image: "/poi-images/jardin-fruitier-saint-marc-life-v2.webp"},
  {
    id: "parc-enfants-jacmel-life-v2",
    type: "kid-landmark",
    parent: "HT-SE",
    coords: [-72.5, 18.22],
    name: { de: "Kinderparadies Jacmel", hu: "Jacmel gyermekparadicsom", ro: "Paradisul copiilor Jacmel", en: "Jacmel Children's Paradise" },
    description: { de: "Ein moderner Spielplatz in Jacmel.", hu: "Modern játszótér Jacmelben.", ro: "Un loc de joacă modern în Jacmel.", en: "A modern playground in Jacmel." },
    facts: {
      de: ["Sichere Spielgeräte", "Zentral gelegen"],
      hu: ["Biztonságos játékok", "Központi elhelyezkedés"],
      ro: ["Echipamente de joacă sigure", "Amplasare centrală"],
      en: ["Safe play equipment", "Centrally located"]
    }, image: "/poi-images/parc-enfants-jacmel-life-v2.webp"},
  {
    id: "reserve-marine-cap-haitien-life-v2",
    type: "animal-habitat",
    parent: "HT-ND",
    coords: [-72.2, 19.75],
    name: { de: "Meeresschutzgebiet Cap-Haïtien", hu: "Cap-Haïtien tengeri rezervátum", ro: "Rezervația marină Cap-Haïtien", en: "Cap-Haïtien Marine Reserve" },
    description: { de: "Ein Schutzgebiet für marine Arten.", hu: "Védett terület a tengeri fajok számára.", ro: "O zonă protejată pentru speciile marine.", en: "A protected area for marine species." },
    facts: {
      de: ["Meeresbiologische Beobachtung", "Korallenschutz"],
      hu: ["Tengerbiológiai megfigyelés", "Korallvédelem"],
      ro: ["Observare biologică marină", "Protecția coralilor"],
      en: ["Marine biological observation", "Coral protection"]
    }, image: "/poi-images/reserve-marine-cap-haitien-life-v2.webp"},
  {
    id: "centre-edu-agriculture-miragoane-life-v2",
    type: "agriculture",
    parent: "HT-NI",
    coords: [-73.1, 18.4],
    name: { de: "Agrarbildungszentrum Miragoâne", hu: "Miragoâne mezőgazdasági oktatóközpont", ro: "Centru educațional agricol Miragoâne", en: "Miragoâne Agricultural Education Center" },
    description: { de: "Ein Zentrum zur Förderung nachhaltiger Landwirtschaft.", hu: "A fenntartható mezőgazdaságot elősegítő központ.", ro: "Un centru de promovare a agriculturii durabile.", en: "A center for promoting sustainable agriculture." },
    facts: {
      de: ["Praktische Ausbildung", "Saatgutbank"],
      hu: ["Gyakorlati képzés", "Vetőmagbank"],
      ro: ["Instruire practică", "Bancă de semințe"],
      en: ["Practical training", "Seed bank"]
    }, image: "/poi-images/centre-edu-agriculture-miragoane-life-v2.webp"},
  {
    id: "parc-naturel-riviere-froide-life-v2",
    type: "animal-habitat",
    parent: "HT-OU",
    coords: [-72.4, 18.5],
    name: { de: "Naturpark Rivière Froide", hu: "Rivière Froide Natúrpark", ro: "Parc natural Rivière Froide", en: "Rivière Froide Nature Park" },
    description: { de: "Ein Rückzugsort für Flussbewohner.", hu: "A folyólakók menedékhelye.", ro: "Un sanctuar pentru locuitorii râului.", en: "A sanctuary for river inhabitants." },
    facts: {
      de: ["Beobachtung von Flusskrebse", "Ruhezone"],
      hu: ["Rákok megfigyelése", "Csendes övezet"],
      ro: ["Observarea racilor", "Zonă de liniște"],
      en: ["Crayfish observation", "Quiet zone"]
    }, image: "/poi-images/parc-naturel-riviere-froide-life-v2.webp"},
  {
    id: "jardin-education-haiti-life-v2",
    type: "kid-landmark",
    parent: "HT-OU",
    coords: [-72.3, 18.52],
    name: { de: "Haiti Lern- und Lehrgarten", hu: "Haiti tanuló- és oktatókert", ro: "Grădina de învățare și predare Haiti", en: "Haiti Learning and Teaching Garden" },
    description: { de: "Ein Ort für Kinder, um Biologie zu erleben.", hu: "Hely gyerekeknek a biológia megtapasztalására.", ro: "Un loc pentru copii pentru a experimenta biologia.", en: "A place for children to experience biology." },
    facts: {
      de: ["Interaktive Exponate", "Natur-Workshops"],
      hu: ["Interaktív kiállítások", "Természet-műhelyek"],
      ro: ["Expoziții interactive", "Ateliere de natură"],
      en: ["Interactive exhibits", "Nature workshops"]
    }
  },
  {
    id: "plantation-cafe-kenskoff-life-v2",
    type: "agriculture",
    parent: "HT-OU",
    coords: [-72.28, 18.45],
    name: { de: "Kaffeeplantage Kenskoff", hu: "Kenskoff kávéültetvény", ro: "Plantație de cafea Kenskoff", en: "Kenskoff Coffee Plantation" },
    description: { de: "Eine hochgelegene Kaffeeplantage.", hu: "Magasan fekvő kávéültetvény.", ro: "O plantație de cafea situată la înălțime.", en: "A high-altitude coffee plantation." },
    facts: {
      de: ["Berühmter Hochlandkaffee", "Schöne Aussicht"],
      hu: ["Híres hegyi kávé", "Szép kilátás"],
      ro: ["Faimoasa cafea de munte", "Priveliște frumoasă"],
      en: ["Famous mountain coffee", "Beautiful view"]
    }, image: "/poi-images/plantation-cafe-kenskoff-life-v2.webp"},
  {
    id: "parc-enfants-port-de-paix-life-v2",
    type: "kid-landmark",
    parent: "HT-ND",
    coords: [-72.8, 19.9],
    name: { de: "Port-de-Paix Kinderpark", hu: "Port-de-Paix gyermekpark", ro: "Parc pentru copii Port-de-Paix", en: "Port-de-Paix Children's Park" },
    description: { de: "Ein kleiner Park für Familien.", hu: "Kis park családoknak.", ro: "Un mic parc pentru familii.", en: "A small park for families." },
    facts: {
      de: ["Spielplatz", "Sitzgelegenheiten"],
      hu: ["Játszótér", "Ülőhelyek"],
      ro: ["Loc de joacă", "Zone de relaxare"],
      en: ["Playground", "Seating areas"]
    }, image: "/poi-images/parc-enfants-port-de-paix-life-v2.webp"},
  {
    id: "ferme-experimentale-artibonite-life-v2",
    type: "agriculture",
    parent: "HT-AR",
    coords: [-72.55, 19.15],
    name: { de: "Versuchs-Bauernhof Artibonite", hu: "Artibonite kísérleti gazdaság", ro: "Fermă experimentală Artibonite", en: "Artibonite Experimental Farm" },
    description: { de: "Ein Ort für agrarwissenschaftliche Forschung.", hu: "Mezőgazdasági kutatási helyszín.", ro: "Un loc pentru cercetarea științifică agricolă.", en: "A place for agricultural research." },
    facts: {
      de: ["Neue Reissorten", "Effiziente Bewässerung"],
      hu: ["Új rizsfajták", "Hatékony öntözés"],
      ro: ["Soiuri noi de orez", "Irigare eficientă"],
      en: ["New rice varieties", "Efficient irrigation"]
    }, image: "/poi-images/ferme-experimentale-artibonite-life-v2.webp"},
  {
    id: "reserve-oiseaux-lac-peligre-life-v2",
    type: "animal-habitat",
    parent: "HT-CE",
    coords: [-72.05, 19.0],
    name: { de: "Vogelreservat Lac Péligre", hu: "Lac Péligre madárrezervátum", ro: "Rezervația de păsări Lac Péligre", en: "Lac Péligre Bird Reserve" },
    description: { de: "Ein Paradies für Vogelbeobachter.", hu: "Paradicsom madármegfigyelőknek.", ro: "Un paradis pentru observatorii de păsări.", en: "A paradise for bird watchers." },
    facts: {
      de: ["Zugvögel", "Naturschutzgebiet"],
      hu: ["Vándormadarak", "Természetvédelmi terület"],
      ro: ["Păsări migratoare", "Zonă protejată"],
      en: ["Migratory birds", "Nature reserve"]
    }, image: "/poi-images/reserve-oiseaux-lac-peligre-life-v2.webp"},
  {
    id: "jardin-ornemental-jeremie-life-v2",
    type: "kid-landmark",
    parent: "HT-GA",
    coords: [-74.1, 18.62],
    name: { de: "Jérémie Ziergarten", hu: "Jérémie díszkert", ro: "Grădina ornamentală Jérémie", en: "Jérémie Ornamental Garden" },
    description: { de: "Ein schöner Garten für Spaziergänge.", hu: "Szép kert sétákhoz.", ro: "O grădină frumoasă pentru plimbări.", en: "A beautiful garden for walks." },
    facts: {
      de: ["Blumensammlung", "Pädagogisch wertvoll"],
      hu: ["Virággyűjtemény", "Oktatási szempontból értékes"],
      ro: ["Colecție de flori", "Valoare educativă"],
      en: ["Flower collection", "Educational value"]
    }
  }
];

