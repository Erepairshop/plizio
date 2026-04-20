import { projectCoordsBG } from "../maps/bulgaria.svg";

export const bulgariaAllPoi = [
  {
    id: "bg-country",
    type: "country",
    coords: projectCoordsBG(25.4858, 42.7339),
    name: {
      de: "Bulgarien",
      hu: "Bulgária",
      ro: "Bulgaria",
      en: "Bulgaria"
    },
    description: {
      de: "Ein Balkanland mit vielfältigem Terrain, das die Schwarzmeerküste, ein bergiges Landesinnere und Flüsse umfasst.",
      hu: "Balkáni ország változatos domborzattal, amely magában foglalja a Fekete-tenger partját, a hegyvidéki belső területeket és a folyókat.",
      ro: "O țară balcanică cu un teren divers care cuprinde coasta Mării Negre, un interior muntos și râuri.",
      en: "A Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior and rivers."
    },
    facts: {
      de: ["Hauptstadt: Sofia", "Währung: Lew", "Bevölkerung: ~6,4 Millionen"],
      hu: ["Főváros: Szófia", "Pénznem: Leva", "Népesség: ~6,4 millió"],
      ro: ["Capitala: Sofia", "Moneda: Leva", "Populație: ~6,4 milioane"],
      en: ["Capital: Sofia", "Currency: Lev", "Population: ~6.4 million"]
    },
    image: "/images/visualLab/bulgaria/country.jpg"
  },
  {
    id: "bg-sofia",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(23.3219, 42.6977),
    name: {
      de: "Sofia",
      hu: "Szófia",
      ro: "Sofia",
      en: "Sofia"
    },
    description: {
      de: "Die Hauptstadt und größte Stadt Bulgariens, bekannt für die Alexander-Newski-Kathedrale.",
      hu: "Bulgária fővárosa és legnagyobb városa, amely az Alexander Nyevszkij-székesegyházról ismert.",
      ro: "Capitala și cel mai mare oraș al Bulgariei, cunoscut pentru Catedrala Alexandru Nevski.",
      en: "The capital and largest city of Bulgaria, known for the Alexander Nevsky Cathedral."
    },
    facts: {
      de: ["Am Fuße des Witoschagebirges", "Reiche Geschichte"],
      hu: ["A Vitosa-hegység lábánál", "Gazdag történelem"],
      ro: ["La poalele Muntelui Vitosha", "Istorie bogată"],
      en: ["At the foot of Vitosha Mountain", "Rich history"]
    },
    image: "/images/visualLab/bulgaria/sofia.jpg"
  },
  {
    id: "bg-plovdiv",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(24.7453, 42.1421),
    name: {
      de: "Plowdiw",
      hu: "Plovdiv",
      ro: "Plovdiv",
      en: "Plovdiv"
    },
    description: {
      de: "Die zweitgrößte Stadt Bulgariens, bekannt für ihre römische Altstadt und das antike Theater.",
      hu: "Bulgária második legnagyobb városa, amely római óvárosáról és ókori színházáról ismert.",
      ro: "Al doilea oraș ca mărime din Bulgaria, cunoscut pentru orașul vechi roman și teatrul antic.",
      en: "The second-largest city in Bulgaria, known for its Roman old town and ancient theater."
    },
    facts: {
      de: ["Eine der ältesten Städte Europas", "Kulturhauptstadt Europas 2019"],
      hu: ["Európa egyik legrégebbi városa", "Európa Kulturális Fővárosa 2019"],
      ro: ["Unul dintre cele mai vechi orașe din Europa", "Capitala Europeană a Culturii 2019"],
      en: ["One of the oldest cities in Europe", "European Capital of Culture 2019"]
    },
    image: "/images/visualLab/bulgaria/plovdiv.jpg"
  },
  {
    id: "bg-varna",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(27.9147, 43.2141),
    name: {
      de: "Warna",
      hu: "Várna",
      ro: "Varna",
      en: "Varna"
    },
    description: {
      de: "Eine Hafenstadt und ein Seebad am Schwarzen Meer.",
      hu: "Kikötőváros és tengerparti üdülőhely a Fekete-tenger partján.",
      ro: "Un oraș portuar și o stațiune pe litoral la Marea Neagră.",
      en: "A port city and seaside resort on the Black Sea."
    },
    facts: {
      de: ["Meereshauptstadt Bulgariens", "Archäologisches Museum"],
      hu: ["Bulgária tengeri fővárosa", "Régészeti Múzeum"],
      ro: ["Capitala maritimă a Bulgariei", "Muzeul Arheologic"],
      en: ["Maritime capital of Bulgaria", "Archaeological Museum"]
    },
    image: "/images/visualLab/bulgaria/varna.jpg"
  },
  {
    id: "bg-rila",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.3400, 42.1333),
    name: {
      de: "Rila-Kloster",
      hu: "Rilai kolostor",
      ro: "Mănăstirea Rila",
      en: "Rila Monastery"
    },
    description: {
      de: "Das größte und berühmteste ostorthodoxe Kloster in Bulgarien.",
      hu: "Bulgária legnagyobb és leghíresebb keleti ortodox kolostora.",
      ro: "Cea mai mare și mai faimoasă mănăstire ortodoxă răsăriteană din Bulgaria.",
      en: "The largest and most famous Eastern Orthodox monastery in Bulgaria."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Gegründet im 10. Jahrhundert"],
      hu: ["UNESCO világörökség", "A 10. században alapították"],
      ro: ["Patrimoniul Mondial UNESCO", "Fondată în secolul al X-lea"],
      en: ["UNESCO World Heritage site", "Founded in the 10th century"]
    },
    image: "/images/visualLab/bulgaria/rila.jpg"
  },
  {
    id: "bg-veliko-tarnovo",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(25.6172, 43.0757),
    name: {
      de: "Weliko Tarnowo",
      hu: "Veliko Tarnovo",
      ro: "Veliko Tărnovo",
      en: "Veliko Tarnovo"
    },
    description: {
      de: "Die historische Hauptstadt des Zweiten Bulgarischen Reiches, bekannt für die Festung Zarewez.",
      hu: "A Második Bolgár Birodalom történelmi fővárosa, amely a Carevec erődről ismert.",
      ro: "Capitala istorică a celui de-al Doilea Imperiu Bulgar, cunoscută pentru Cetatea Tsarevets.",
      en: "The historical capital of the Second Bulgarian Empire, known for the Tsarevets Fortress."
    },
    facts: {
      de: ["Stadt der Zaren", "Malerische Lage am Fluss Jantra"],
      hu: ["A cárok városa", "Festői elhelyezkedés a Jantra folyó partján"],
      ro: ["Orașul Țarilor", "Locație pitorească pe râul Yantra"],
      en: ["City of the Tsars", "Picturesque location on the Yantra River"]
    },
    image: "/images/visualLab/bulgaria/veliko-tarnovo.jpg"
  },
  {
    id: "bg-bansko",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(23.4857, 41.8383),
    name: {
      de: "Bansko",
      hu: "Banszko",
      ro: "Bansko",
      en: "Bansko"
    },
    description: {
      de: "Eine Stadt im Südwesten Bulgariens, bekannt als beliebtes Skigebiet.",
      hu: "Város Délnyugat-Bulgáriában, amely népszerű síközpontként ismert.",
      ro: "Un oraș în sud-vestul Bulgariei, cunoscut ca o stațiune de schi populară.",
      en: "A town in southwestern Bulgaria, known as a popular ski resort."
    },
    facts: {
      de: ["Am Fuße des Pirin-Gebirges", "Wintersportzentrum"],
      hu: ["A Pirin-hegység lábánál", "Téli sportközpont"],
      ro: ["La poalele Munților Pirin", "Centru de sporturi de iarnă"],
      en: ["At the foot of the Pirin Mountains", "Winter sports center"]
    },
    image: "/images/visualLab/bulgaria/bansko.jpg"
  },
  {
    id: "bg-nessebar",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(27.7360, 42.6593),
    name: {
      de: "Nessebar",
      hu: "Neszebar",
      ro: "Nesebăr",
      en: "Nessebar"
    },
    description: {
      de: "Eine antike Stadt und ein wichtiger Badeort an der Schwarzmeerküste.",
      hu: "Ősi város és fontos tengerparti üdülőhely a Fekete-tenger partján.",
      ro: "Un oraș antic și o stațiune balneară importantă pe coasta Mării Negre.",
      en: "An ancient city and a major seaside resort on the Black Sea Coast."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Perle des Schwarzen Meeres"],
      hu: ["UNESCO világörökség", "A Fekete-tenger gyöngyszeme"],
      ro: ["Patrimoniul Mondial UNESCO", "Perla Mării Negre"],
      en: ["UNESCO World Heritage site", "Pearl of the Black Sea"]
    },
    image: "/images/visualLab/bulgaria/nessebar.jpg"
  },
  {
    id: "bg-pirin",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.4000, 41.7500),
    name: {
      de: "Nationalpark Pirin",
      hu: "Pirin Nemzeti Park",
      ro: "Parcul Național Pirin",
      en: "Pirin National Park"
    },
    description: {
      de: "Ein Nationalpark, der den größten Teil des Pirin-Gebirges umfasst.",
      hu: "Nemzeti park, amely a Pirin-hegység nagy részét magában foglalja.",
      ro: "Un parc național care cuprinde cea mai mare parte a Munților Pirin.",
      en: "A national park that encompasses the larger part of the Pirin Mountains."
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe", "Gletscherseen"],
      hu: ["UNESCO természeti világörökség", "Gleccsertavak"],
      ro: ["Patrimoniul Natural Mondial UNESCO", "Lacuri glaciare"],
      en: ["UNESCO World Heritage site", "Glacial lakes"]
    },
    image: "/images/visualLab/bulgaria/pirin.jpg"
  }
];
