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

export const bulgariaCities = [
  {
    id: "city-sofia",
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
      de: "Bulgariens Hauptstadt mit der Alexander-Newski-Kathedrale und dem Witoscha-Gebirge.",
      hu: "Bulgária fővárosa, az Alekszander Nyevszki-székesegyházzal és a Vitosa-heggyel.",
      ro: "Capitala Bulgariei, cu Catedrala Alexandr Nevski și muntele Vitosha.",
      en: "Bulgaria's capital, home to Alexander Nevsky Cathedral and Vitosha Mountain."
    },
    facts: {
      de: ["Hauptstadt Bulgariens", "Alexander-Newski-Kathedrale", "Am Fuß des Witoscha-Gebirges"],
      hu: ["Bulgária fővárosa", "Alekszander Nyevszki-székesegyház", "A Vitosa-hegység lábánál"],
      ro: ["Capitala Bulgariei", "Catedrala Alexandr Nevski", "La poalele muntelui Vitosha"],
      en: ["Capital of Bulgaria", "Alexander Nevsky Cathedral", "At the foot of Vitosha Mountain"]
    },
    image: "/geo-images/bulgaria/city-sofia.webp"
  },
  {
    id: "city-plovdiv",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(24.7453, 42.1354),
    name: {
      de: "Plowdiw",
      hu: "Plovdiv",
      ro: "Plovdiv",
      en: "Plovdiv"
    },
    description: {
      de: "Eine der ältesten dauerhaft bewohnten Städte Europas mit römischem Altstadtkern und UNESCO-Erbe.",
      hu: "Európa egyik legrégebben folyamatosan lakott városa, római óvárossal és UNESCO-örökséggel.",
      ro: "Unul dintre cele mai vechi orașe locuite continuu din Europa, cu centru vechi roman și patrimoniu UNESCO.",
      en: "One of Europe's oldest continuously inhabited cities, with a Roman old town and UNESCO heritage."
    },
    facts: {
      de: ["Sehr alte Siedlungsgeschichte", "Römisches Theater", "UNESCO-naher Altstadtkern"],
      hu: ["Nagyon régi településtörténet", "Római színház", "UNESCO-közeli óváros"],
      ro: ["Istorie de așezare foarte veche", "Teatru roman", "Centru vechi cu statut UNESCO"],
      en: ["Very old settlement history", "Roman theater", "UNESCO-listed old town area"]
    },
    image: "/geo-images/bulgaria/city-plovdiv.webp"
  },
  {
    id: "city-varna",
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
      de: "Schwarzmeer-Resort mit wichtigen Museen und maritimem Stadtcharakter.",
      hu: "Fekete-tengeri üdülőhely fontos múzeumokkal és tengerparti hangulattal.",
      ro: "Stațiune la Marea Neagră, cu muzee importante și caracter maritim.",
      en: "A Black Sea resort city with important museums and a strong maritime character."
    },
    facts: {
      de: ["Schwarzmeerküste", "Archäologisches Museum", "Sommer- und Badeziel"],
      hu: ["Fekete-tengeri part", "Régészeti Múzeum", "Nyári üdülőváros"],
      ro: ["Litoralul Mării Negre", "Muzeul Arheologic", "Destinație de vară și plajă"],
      en: ["Black Sea coast", "Archaeological Museum", "Summer resort destination"]
    },
    image: "/geo-images/bulgaria/city-varna.webp"
  },
  {
    id: "city-burgas",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(27.4626, 42.5048),
    name: {
      de: "Burgas",
      hu: "Burgasz",
      ro: "Burgas",
      en: "Burgas"
    },
    description: {
      de: "Große Stadt am südlichen Schwarzen Meer mit Hafen- und Industriestütpunkt.",
      hu: "Nagyváros a déli Fekete-tenger partján, kikötővel és ipari szereppel.",
      ro: "Oraș mare la sudul Mării Negre, cu rol de port și centru industrial.",
      en: "A major city on the southern Black Sea coast, with a port and industrial role."
    },
    facts: {
      de: ["Südliche Schwarzmeerküste", "Wichtiger Hafen", "Industrie- und Logistikzentrum"],
      hu: ["Déli Fekete-tenger", "Fontos kikötő", "Ipari és logisztikai központ"],
      ro: ["Sudul Mării Negre", "Port important", "Centru industrial și logistic"],
      en: ["Southern Black Sea coast", "Important port", "Industrial and logistics hub"]
    },
    image: "/geo-images/bulgaria/city-burgas.webp"
  },
  {
    id: "city-veliko-tarnovo",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(25.6172, 43.0757),
    name: {
      de: "Weliko Tarnowo",
      hu: "Veliko Tarnovo",
      ro: "Veliko Târnovo",
      en: "Veliko Tarnovo"
    },
    description: {
      de: "Mittelalterliche Hauptstadt mit der Festung Tsarevets über dem Jantra-Tal.",
      hu: "Középkori főváros, a Carevec erőddel a Jantra-völgy fölött.",
      ro: "Capitală medievală, cu fortăreața Țareveț deasupra văii Yantra.",
      en: "A medieval capital with Tsarevets Fortress above the Yantra valley."
    },
    facts: {
      de: ["Historische Zarenstadt", "Tsarevets-Festung", "Malerische Hügelstadt"],
      hu: ["Történelmi cárváros", "Carevec erőd", "Festői hegyoldali város"],
      ro: ["Oraș istoric al țarilor", "Cetatea Țareveț", "Oraș pitoresc pe dealuri"],
      en: ["Historic city of the tsars", "Tsarevets Fortress", "Scenic hill city"]
    },
    image: "/geo-images/bulgaria/city-veliko-tarnovo.webp"
  }
];

export const bulgariaCulture = [
  {
    id: "cult-rila-monastery",
    type: "culture",
    parent: "bg-country",
    coords: projectCoordsBG(23.3405, 42.1333),
    name: {
      de: "Rila-Kloster",
      hu: "Rilai kolostor",
      ro: "Mănăstirea Rila",
      en: "Rila Monastery"
    },
    description: {
      de: "UNESCO-geschütztes bulgarisch-orthodoxes Kloster aus dem 10. Jahrhundert.",
      hu: "UNESCO-védett bolgár ortodox kolostor a 10. századból.",
      ro: "Mănăstire ortodoxă bulgară din secolul al X-lea, inclusă în UNESCO.",
      en: "A UNESCO-protected Bulgarian Orthodox monastery from the 10th century."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Gegründet im 10. Jahrhundert", "Wichtiges orthodoxes Zentrum"],
      hu: ["UNESCO világörökség", "A 10. században alapították", "Fontos ortodox központ"],
      ro: ["Patrimoniu mondial UNESCO", "Fondată în secolul al X-lea", "Centru ortodox important"],
      en: ["UNESCO World Heritage site", "Founded in the 10th century", "Important Orthodox center"]
    },
    image: "/geo-images/bulgaria/cult-rila-monastery.webp"
  },
  {
    id: "cult-boyana",
    type: "culture",
    parent: "bg-country",
    coords: projectCoordsBG(23.265, 42.6435),
    name: {
      de: "Boyana-Kirche",
      hu: "Boyana templom",
      ro: "Biserica Boyana",
      en: "Boyana Church"
    },
    description: {
      de: "Sofioter UNESCO-Kirche mit herausragenden Fresken aus dem 13. Jahrhundert.",
      hu: "Szófiai UNESCO-templom kiemelkedő 13. századi freskókkal.",
      ro: "Biserică UNESCO din Sofia, renumită pentru frescele sale din secolul al XIII-lea.",
      en: "A UNESCO church in Sofia known for its outstanding 13th-century frescoes."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Berühmte Fresken", "Nahe Sofia"],
      hu: ["UNESCO világörökség", "Híres freskók", "Szófia mellett"],
      ro: ["Patrimoniu UNESCO", "Fresce celebre", "Lângă Sofia"],
      en: ["UNESCO World Heritage site", "Famous frescoes", "Near Sofia"]
    },
    image: "/geo-images/bulgaria/cult-boyana.webp"
  },
  {
    id: "cult-nessebar",
    type: "culture",
    parent: "bg-country",
    coords: projectCoordsBG(27.7269, 42.6587),
    name: {
      de: "Alt-Nessebar",
      hu: "Neszebár óváros",
      ro: "Orașul vechi Nessebar",
      en: "Old Nessebar"
    },
    description: {
      de: "UNESCO-Halbinsel mit über 3000 Jahren Geschichte an der Schwarzmeerküste.",
      hu: "UNESCO-félsziget több mint 3000 év történelmével a Fekete-tenger partján.",
      ro: "Peninsulă UNESCO cu peste 3000 de ani de istorie, pe litoralul Mării Negre.",
      en: "A UNESCO peninsula with over 3,000 years of history on the Black Sea coast."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Antike und byzantinische Schichten", "Beliebtes Küstenziel"],
      hu: ["UNESCO világörökség", "Ókori és bizánci rétegek", "Népszerű tengerparti célpont"],
      ro: ["Patrimoniu mondial UNESCO", "Straturi antice și bizantine", "Destinație de coastă populară"],
      en: ["UNESCO World Heritage site", "Ancient and Byzantine layers", "Popular coastal destination"]
    },
    image: "/geo-images/bulgaria/cult-nessebar.webp"
  },
  {
    id: "cult-kazanlak",
    type: "culture",
    parent: "bg-country",
    coords: projectCoordsBG(25.3942, 42.6175),
    name: {
      de: "Thrakische Grabkammer von Kazanlak",
      hu: "Kazanlaki trák sír",
      ro: "Mormântul tracic de la Kazanlak",
      en: "Kazanlak Thracian Tomb"
    },
    description: {
      de: "UNESCO-Grabmal mit einzigartigen thrakischen Fresken aus dem 4. Jahrhundert v. Chr.",
      hu: "UNESCO-sírkamra egyedi trák freskókkal a Krisztus előtti 4. századból.",
      ro: "Mormânt UNESCO cu fresce tracice unice din secolul IV î.Hr.",
      en: "A UNESCO tomb with unique Thracian frescoes from the 4th century BCE."
    },
    facts: {
      de: ["UNESCO-Welterbe", "4. Jahrhundert v. Chr.", "Thrakische Kunst"],
      hu: ["UNESCO világörökség", "Kr. e. 4. század", "Trák művészet"],
      ro: ["Patrimoniu UNESCO", "Secolul IV î.Hr.", "Artă tracică"],
      en: ["UNESCO World Heritage site", "4th century BCE", "Thracian art"]
    },
    image: "/geo-images/bulgaria/cult-kazanlak.webp"
  },
  {
    id: "cult-madara",
    type: "culture",
    parent: "bg-country",
    coords: projectCoordsBG(27.1177, 43.2856),
    name: {
      de: "Madarareiter",
      hu: "Madarai lovas",
      ro: "Călărețul de la Madara",
      en: "Madara Rider"
    },
    description: {
      de: "UNESCO-Felsrelief aus dem 8. Jahrhundert, ein Symbol des frühen bulgarischen Staates.",
      hu: "UNESCO-szikladombormű a 8. századból, a korai bolgár állam jelképe.",
      ro: "Basorelief UNESCO din secolul al VIII-lea, simbol al primului stat bulgar.",
      en: "A UNESCO rock relief from the 8th century and a symbol of the early Bulgarian state."
    },
    facts: {
      de: ["UNESCO-Welterbe", "8. Jahrhundert", "Frühes bulgarisches Symbol"],
      hu: ["UNESCO világörökség", "8. század", "Korai bolgár jelkép"],
      ro: ["Patrimoniu UNESCO", "Secolul al VIII-lea", "Simbol bulgar timpuriu"],
      en: ["UNESCO World Heritage site", "8th century", "Early Bulgarian symbol"]
    },
    image: "/geo-images/bulgaria/cult-madara.webp"
  }
];

export const bulgariaNature = [
  {
    id: "nat-pirin",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.43, 41.73),
    name: {
      de: "Pirin-Nationalpark",
      hu: "Pirin Nemzeti Park",
      ro: "Parcul Național Pirin",
      en: "Pirin National Park"
    },
    description: {
      de: "UNESCO-geschützter Gebirgspark mit Gletscherseen im Pirin-Gebirge.",
      hu: "UNESCO-védett hegyi park gleccsertavakkal a Pirin-hegységben.",
      ro: "Parc montan protejat UNESCO, cu lacuri glaciare în Munții Pirin.",
      en: "A UNESCO-protected mountain park with glacial lakes in the Pirin range."
    },
    facts: {
      de: ["UNESCO-Naturerbe", "Gletscherseen", "Alpine Landschaft"],
      hu: ["UNESCO természeti világörökség", "Gleccsertavak", "Alpesi táj"],
      ro: ["Patrimoniu natural UNESCO", "Lacuri glaciare", "Peisaj alpin"],
      en: ["UNESCO natural heritage", "Glacial lakes", "Alpine landscape"]
    },
    image: "/geo-images/bulgaria/nat-pirin.webp"
  },
  {
    id: "nat-rila",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.55, 42.19),
    name: {
      de: "Rila-Nationalpark",
      hu: "Rilai Nemzeti Park",
      ro: "Parcul Național Rila",
      en: "Rila National Park"
    },
    description: {
      de: "Bulgariens größter Nationalpark mit dem Musala, dem höchsten Berg des Landes.",
      hu: "Bulgária legnagyobb nemzeti parkja, benne a Muszala csúccsal, az ország legmagasabb hegyével.",
      ro: "Cel mai mare parc național din Bulgaria, cu Musala, cel mai înalt vârf al țării.",
      en: "Bulgaria's largest national park, home to Musala, the country's highest peak."
    },
    facts: {
      de: ["Größter Nationalpark Bulgariens", "Musala 2925 m", "Hochgebirgsnatur"],
      hu: ["Bulgária legnagyobb nemzeti parkja", "Muszala 2925 m", "Magashegyi természet"],
      ro: ["Cel mai mare parc național din Bulgaria", "Musala 2925 m", "Natură de mare altitudine"],
      en: ["Largest national park in Bulgaria", "Musala 2925 m", "High-mountain nature"]
    },
    image: "/geo-images/bulgaria/nat-rila.webp"
  },
  {
    id: "nat-vitosha",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.28, 42.56),
    name: {
      de: "Witoscha",
      hu: "Vitosa",
      ro: "Vitoșa",
      en: "Vitosha"
    },
    description: {
      de: "Hausberg von Sofia mit Skigebieten und den Boyana-Wasserfällen.",
      hu: "Szófia hegyvidéke, sípályákkal és a Boyana-vízeséssel.",
      ro: "Muntele Sofiei, cu pârtii de schi și cascadele Boyana.",
      en: "Sofia's mountain with ski slopes and Boyana Waterfall."
    },
    facts: {
      de: ["Sofias Hausberg", "Ski- und Wandergebiet", "Boyana-Wasserfall"],
      hu: ["Szófia házi hegye", "Sí- és túraterület", "Boyana-vízesés"],
      ro: ["Muntele Sofiei", "Zonă de schi și drumeții", "Cascada Boyana"],
      en: ["Sofia's mountain", "Skiing and hiking area", "Boyana Waterfall"]
    },
    image: "/geo-images/bulgaria/nat-vitosha.webp"
  },
  {
    id: "nat-seven-rila",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.3205, 42.2333),
    name: {
      de: "Sieben Rila-Seen",
      hu: "Hét Rilai-tó",
      ro: "Șapte lacuri din Rila",
      en: "Seven Rila Lakes"
    },
    description: {
      de: "Sieben Gletscherseen im Rila-Gebirge, eines der bekanntesten Naturziele Bulgariens.",
      hu: "Hét gleccsertó a Rilai-hegységben, Bulgária egyik legismertebb természeti látványossága.",
      ro: "Șapte lacuri glaciare în Munții Rila, una dintre cele mai cunoscute atracții naturale din Bulgaria.",
      en: "Seven glacial lakes in the Rila Mountains, one of Bulgaria's best-known natural attractions."
    },
    facts: {
      de: ["7 Gletscherseen", "Beliebtes Wanderziel", "Rila-Gebirge"],
      hu: ["7 gleccsertó", "Népszerű túracélpont", "Rilai-hegység"],
      ro: ["7 lacuri glaciare", "Destinație populară de drumeții", "Munții Rila"],
      en: ["7 glacial lakes", "Popular hiking destination", "Rila Mountains"]
    },
    image: "/geo-images/bulgaria/nat-seven-rila.webp"
  },
  {
    id: "nat-bansko",
    type: "nature",
    parent: "bg-country",
    coords: projectCoordsBG(23.487, 41.8389),
    name: {
      de: "Bansko",
      hu: "Banszko síparadicsom",
      ro: "Stațiunea de schi Bansko",
      en: "Bansko Ski Resort"
    },
    description: {
      de: "Großer Skiort am Fuße des Pirin mit langen Pisten und Wintersporttourismus.",
      hu: "Nagy síközpont a Pirin lábánál, hosszú pályákkal és téli turizmussal.",
      ro: "Stațiune mare de schi la poalele munților Pirin, cu pârtii lungi și turism de iarnă.",
      en: "A major ski resort at the foot of the Pirin with long slopes and winter tourism."
    },
    facts: {
      de: ["Beliebtes Skizentrum", "Pirin-Tor", "Starker Wintertourismus"],
      hu: ["Népszerű síközpont", "A Pirin kapuja", "Erős téli turizmus"],
      ro: ["Centru de schi popular", "Poarta către Pirin", "Turism de iarnă puternic"],
      en: ["Popular ski center", "Gateway to Pirin", "Strong winter tourism"]
    },
    image: "/geo-images/bulgaria/nat-bansko.webp"
  }
];

bulgariaAllPoi.push(...bulgariaCities, ...bulgariaCulture, ...bulgariaNature);
