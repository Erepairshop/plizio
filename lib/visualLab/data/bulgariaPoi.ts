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
    type: "landmark",
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
    type: "landmark",
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
  },
  {
    id: "city-vidin",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(22.8828, 43.9930),
    name: {
      de: "Vidin",
      hu: "Vidin",
      ro: "Vidin",
      en: "Vidin"
    },
    description: {
      de: "Donaustadt im Nordwesten Bulgariens mit der Festung Baba Vida und starkem Flusscharakter. Vidin verbindet mittelalterliche Geschichte mit moderner Grenzlage. Die Uferpromenade, der Hafen und die Altstadt machen den Ort für Donaureisen attraktiv. Als Tor zum Nordwesten ist Vidin ein relevanter SEO-Standort in Bulgarien.",
      hu: "Dunai város Bulgária északnyugati részén, a Baba Vida erőddel és erős folyami hangulattal. Vidin a középkori múltat modern határvárosi szereppel köti össze. A rakpart, a kikötő és az óváros a Duna menti utazásokat is vonzóvá teszi. Vidin fontos kapu Északnyugat-Bulgária felé.",
      ro: "Oraș dunărean din nord-vestul Bulgariei, cu cetatea Baba Vida și un puternic caracter fluvial. Vidin combină istoria medievală cu rolul modern de oraș de frontieră. Faleza, portul și centrul vechi îl fac atractiv pentru croaziere pe Dunăre. Vidin este o poartă importantă spre nord-vestul Bulgariei.",
      en: "A Danube city in northwestern Bulgaria, known for Baba Vida Fortress and a strong river identity. Vidin blends medieval history with a modern border-town role. The waterfront, port, and old town make it attractive for Danube travel. Vidin is a key gateway to northwestern Bulgaria."
    },
    facts: {
      de: ["Donauufer", "Baba Vida", "Flusshafen", "Nordwestbulgarien", "Grenzlage"],
      hu: ["Duna-part", "Baba Vida erőd", "Folyami kikötő", "Északnyugat-Bulgária", "Határváros"],
      ro: ["Malul Dunării", "Cetatea Baba Vida", "Port fluvial", "Nord-vestul Bulgariei", "Oraș de frontieră"],
      en: ["Danube riverfront", "Baba Vida Fortress", "River port", "Northwestern Bulgaria", "Border city"]
    },
    image: "/geo-images/bulgaria/city-vidin.webp"
  },
  {
    id: "city-vratsa",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(23.5588, 43.2105),
    name: {
      de: "Vratsa",
      hu: "Vraca",
      ro: "Vratsa",
      en: "Vratsa"
    },
    description: {
      de: "Stadt am Fuß des Balkangebirges mit dramatischer Natur und Zugang zur Vratsa-Schlucht. Vratsa ist ein starker Ausgangspunkt für Bergtourismus im Nordwesten Bulgariens. Die Stadt verbindet Handel, Industrie und alpine Kulisse. Für Reisende ist Vratsa ein kompaktes Ziel mit klarer regionaler Identität.",
      hu: "A Balkán-hegység lábánál fekvő város, látványos természeti háttérrel és a Vraca-szurdok közelében. Vraca erős kiindulópont az északnyugat-bolgár hegyi turizmushoz. A város a kereskedelmet, az ipart és az alpesi hangulatot jól ötvözi. Az utazók számára Vraca rövid, de karakteres megálló.",
      ro: "Oraș aflat la poalele Balcanilor, cu peisaj dramatic și acces la defileul Vratsa. Vratsa este un punct de pornire important pentru turismul montan din nord-vestul Bulgariei. Orașul combină comerțul, industria și decorul alpin. Pentru călători, Vratsa este o oprire compactă și bine definită.",
      en: "A city at the foot of the Balkan Mountains, with dramatic scenery and access to the Vratsa Gorge. Vratsa is a strong base for mountain tourism in northwestern Bulgaria. The city blends trade, industry, and an alpine setting. For travelers, Vratsa is a compact stop with a clear regional identity."
    },
    facts: {
      de: ["Balkangebirge", "Vratsa-Schlucht", "Nordwestbulgarien", "Bergtourismus", "Industrie- und Handelsstadt"],
      hu: ["Balkán-hegység", "Vraca-szurdok", "Északnyugat-Bulgária", "Hegyi turizmus", "Ipari és kereskedelmi város"],
      ro: ["Munții Balcani", "Defileul Vratsa", "Nord-vestul Bulgariei", "Turism montan", "Oraș industrial și comercial"],
      en: ["Balkan Mountains", "Vratsa Gorge", "Northwestern Bulgaria", "Mountain tourism", "Industrial and trade city"]
    },
    image: "/geo-images/bulgaria/city-vratsa.webp"
  },
  {
    id: "city-shumen",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(26.9294, 43.2706),
    name: {
      de: "Schumen",
      hu: "Sumen",
      ro: "Shumen",
      en: "Shumen"
    },
    description: {
      de: "Wichtige Stadt im Nordosten Bulgariens mit Nähe zur Historischen Reserve Madara und zur alten Hauptstadt Pliska. Schumen ist bekannt für seine Kulturgeschichte, den großen Stadtpark und die Lage am Fuß des Plateaus. Die Region zieht Besucher mit Frühmittelalter, Denkmälern und Aussichtspunkten an. Als regionales Zentrum hat Schumen starken Suchwert für Bulgarien-Reisen.",
      hu: "Északkelet-Bulgária fontos városa, közel a madarai történelmi rezervátumhoz és Pliszka régi fővárosához. Sumen kulturális múltjáról, nagy parkjáról és a fennsík alatti fekvéséről ismert. A térség koraközépkori emlékekkel és panorámákkal vonzza az utazókat. Regionális központként Sumen erős keresési értéket hoz a bolgár utazási tartalmakban.",
      ro: "Oraș important din nord-estul Bulgariei, aproape de rezervația istorică Madara și de vechea capitală Pliska. Shumen este cunoscut pentru istoria sa culturală, parcul mare și poziția de la marginea platoului. Zona atrage vizitatori prin vestigii din Evul Mediu timpuriu și puncte panoramice. Ca centru regional, Shumen are valoare SEO puternică pentru turismul în Bulgaria.",
      en: "An important city in northeastern Bulgaria, close to the Madara historical reserve and the old capital Pliska. Shumen is known for its cultural history, large city park, and plateau-edge setting. The area attracts visitors with early medieval sites and scenic viewpoints. As a regional center, Shumen has strong SEO value for Bulgaria travel content."
    },
    facts: {
      de: ["Nordostbulgarien", "Madara-Nähe", "Pliska-Region", "Großer Stadtpark", "Regionalzentrum"],
      hu: ["Északkelet-Bulgária", "Madara közelsége", "Pliszka térsége", "Nagy városi park", "Regionális központ"],
      ro: ["Nord-estul Bulgariei", "Aproape de Madara", "Zona Pliska", "Parc urban mare", "Centru regional"],
      en: ["Northeastern Bulgaria", "Near Madara", "Pliska region", "Large city park", "Regional center"]
    },
    image: "/geo-images/bulgaria/city-shumen.webp"
  },
  {
    id: "city-dobrich",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(27.8300, 43.5667),
    name: {
      de: "Dobritsch",
      hu: "Dobrics",
      ro: "Dobrich",
      en: "Dobrich"
    },
    description: {
      de: "Stadt in der Dobrudscha mit starkem Agrarhintergrund und weitem Horizont. Dobritsch ist ein Zentrum für Getreidehandel, landwirtschaftliche Dienstleistungen und regionale Logistik. Die Stadt eignet sich als Basis für Reisen Richtung Schwarzes Meer und Nordostbulgarien. SEO-seitig ist sie stark mit Dobrudscha, Landwirtschaft und Ebenenlandschaft verbunden.",
      hu: "A Dobrudzsa térség városa, erős mezőgazdasági háttérrel és tágas horizonttal. Dobrics gabona-kereskedelmi, agrárszolgáltatási és logisztikai központként is ismert. A város jó bázis a Fekete-tenger és Északkelet-Bulgária felé tartó utakhoz. SEO szempontból a Dobrudzsa, a mezőgazdaság és a síkvidék kulcsszavaival erős.",
      ro: "Oraș din Dobrogea cu profil agricol puternic și orizont larg de câmpie. Dobrich este un centru pentru comerțul cu cereale, servicii agricole și logistică regională. Orașul este o bază bună pentru traseele spre Marea Neagră și nord-estul Bulgariei. SEO-ul său este legat de Dobrogea, agricultură și peisajul de stepă.",
      en: "A Dobrudzha city with a strong agricultural background and broad horizons. Dobrich is known for grain trade, farm services, and regional logistics. It works well as a base for trips toward the Black Sea and northeastern Bulgaria. SEO-wise, it is closely tied to Dobrudzha, agriculture, and open plain landscapes."
    },
    facts: {
      de: ["Dobrudscha", "Getreidehandel", "Agrarzentrum", "Nordostbulgarien", "Ebenenlandschaft"],
      hu: ["Dobrudzsa", "Gabona-kereskedelem", "Agrárközpont", "Északkelet-Bulgária", "Síkvidék"],
      ro: ["Dobrogea", "Comerț cu cereale", "Centru agricol", "Nord-estul Bulgariei", "Câmpie întinsă"],
      en: ["Dobrudzha", "Grain trade", "Agricultural center", "Northeastern Bulgaria", "Open plain landscape"]
    },
    image: "/geo-images/bulgaria/city-dobrich.webp"
  },
  {
    id: "city-sliven",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(26.3333, 42.6817),
    name: {
      de: "Sliwen",
      hu: "Szliven",
      ro: "Sliven",
      en: "Sliven"
    },
    description: {
      de: "Stadt unter den Blauen Felsen, berühmt für Wind, Industrie und Kämpfertradition. Sliven steht für Textilgeschichte, Bergnähe und starke regionale Identität. Die Lage zwischen Ebenen und Felsen macht die Stadt visuell unverwechselbar. Für Bulgarien-Routen im Südosten ist Sliven ein markanter Suchbegriff.",
      hu: "A Kék-sziklák alatt fekvő város, amely a szélről, az iparról és a szabadságharcos hagyományokról ismert. Szliven a textilipari múltat, a hegyközelséget és az erős regionális identitást egyesíti. A síkság és a sziklák találkozása látványosan egyedivé teszi. A délkelet-bolgár útvonalakon Szliven markáns célpont.",
      ro: "Oraș situat sub Stâncile Albastre, cunoscut pentru vânt, industrie și tradiția luptătorilor. Sliven îmbină istoria textilă, apropierea de munte și identitatea regională puternică. Poziția dintre câmpie și stânci îi dă un profil vizual foarte clar. Pe traseele din sud-estul Bulgariei, Sliven este un punct de interes important.",
      en: "A city below the Blue Rocks, famous for wind, industry, and a fighter tradition. Sliven combines textile history, mountain proximity, and a strong regional identity. Its setting between plains and cliffs makes it visually distinctive. On southeastern Bulgaria routes, Sliven is a notable search term and destination."
    },
    facts: {
      de: ["Blaue Felsen", "Textilgeschichte", "Südostbulgarien", "Industrietradition", "Bergnähe"],
      hu: ["Kék-sziklák", "Textilipari múlt", "Délkelet-Bulgária", "Ipari hagyomány", "Hegyközelség"],
      ro: ["Stâncile Albastre", "Istorie textilă", "Sud-estul Bulgariei", "Tradiție industrială", "Aproape de munte"],
      en: ["Blue Rocks", "Textile history", "Southeastern Bulgaria", "Industrial tradition", "Mountain proximity"]
    },
    image: "/geo-images/bulgaria/city-sliven.webp"
  },
  {
    id: "city-stara-zagora",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(25.6257, 42.4258),
    name: {
      de: "Stara Sagora",
      hu: "Sztara Zagora",
      ro: "Stara Zagora",
      en: "Stara Zagora"
    },
    description: {
      de: "Große Stadt in Thrakien mit breiten Boulevards, Antiker Forum und starkem Kulturprofil. Stara Sagora ist einer der besten Orte für urbane Bulgarien-Reisen im Binnenland. Die Stadt verbindet moderne Infrastruktur mit römischer und thrakischer Vergangenheit. Für SEO rund um Zentralbulgarien liefert sie hohe Sichtbarkeit.",
      hu: "Nagy trákiai város széles sugárutakkal, antik fórummal és erős kulturális arculattal. Sztara Zagora az egyik legjobb hely a belső bolgár városi utazásokhoz. A város a modern infrastruktúrát római és trák múltjával köti össze. Közép-Bulgária SEO-tartalmaihoz különösen értékes.",
      ro: "Oraș mare din Tracia, cu bulevarde largi, Forum Antic și profil cultural puternic. Stara Zagora este unul dintre cele mai bune locuri pentru turism urban în interiorul Bulgariei. Orașul leagă infrastructura modernă de trecutul roman și tracic. Pentru SEO în centrul Bulgariei, oferă o vizibilitate foarte bună.",
      en: "A major Thracian city with wide boulevards, an Ancient Forum, and a strong cultural profile. Stara Zagora is one of the best places for inland urban travel in Bulgaria. The city combines modern infrastructure with Roman and Thracian history. For central Bulgaria SEO content, it delivers strong visibility."
    },
    facts: {
      de: ["Thrakien", "Römisches Erbe", "Breite Boulevards", "Antikes Forum", "Zentralbulgarien"],
      hu: ["Trákia", "Római örökség", "Széles sugárutak", "Antik fórum", "Közép-Bulgária"],
      ro: ["Tracia", "Moștenire romană", "Bulevarde largi", "Forum antic", "Bulgaria centrală"],
      en: ["Thrace", "Roman heritage", "Wide boulevards", "Ancient forum", "Central Bulgaria"]
    },
    image: "/geo-images/bulgaria/city-stara-zagora.webp"
  },
  {
    id: "city-blagoevgrad",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(23.0920, 42.0209),
    name: {
      de: "Blagoewgrad",
      hu: "Blagoevgrad",
      ro: "Blagoevgrad",
      en: "Blagoevgrad"
    },
    description: {
      de: "Universitätsstadt im Südwesten Bulgariens mit jungem Stadtbild und Zugang zum Rila-Gebiet. Blagoewgrad ist ein wichtiger Ausgangspunkt für Bergtouren, Kulturwochenenden und Grenzverkehr. Die Stadt lebt von Studenten, Dienstleistungen und regionalem Handel. Für Bulgarien-Reisende ist sie ein flexibler und moderner Stopp.",
      hu: "Délnyugat-bolgár egyetemi város, fiatalos arculattal és a Rilai térség elérésével. Blagoevgrad fontos kiindulópont hegyi túrákhoz, kulturális hétvégékhöz és határforgalomhoz. A város az egyetemistákra, a szolgáltatásokra és a regionális kereskedelemre épít. A bolgár utazási tartalmakban modern és sokoldalú megálló.",
      ro: "Oraș universitar din sud-vestul Bulgariei, cu imagine tânără și acces spre zona Rila. Blagoevgrad este un punct important pentru drumeții montane, city break-uri culturale și trafic de frontieră. Orașul se bazează pe studenți, servicii și comerț regional. Pentru turismul în Bulgaria, este o oprire modernă și flexibilă.",
      en: "A university city in southwestern Bulgaria, with a youthful feel and access to the Rila region. Blagoevgrad is an important base for mountain trips, culture weekends, and border traffic. The city relies on students, services, and regional trade. For Bulgaria travel content, it is a modern and flexible stop."
    },
    facts: {
      de: ["Universitätsstadt", "Südwestbulgarien", "Rila-Zugang", "Studentenleben", "Grenzregion"],
      hu: ["Egyetemi város", "Délnyugat-Bulgária", "Rilai kapcsolat", "Diákélet", "Határvidék"],
      ro: ["Oraș universitar", "Sud-vestul Bulgariei", "Acces spre Rila", "Viață studențească", "Regiune de frontieră"],
      en: ["University city", "Southwestern Bulgaria", "Rila access", "Student life", "Border region"]
    },
    image: "/geo-images/bulgaria/city-blagoevgrad.webp"
  },
  {
    id: "city-haskovo",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(25.5560, 41.9341),
    name: {
      de: "Haskowo",
      hu: "Haskovo",
      ro: "Haskovo",
      en: "Haskovo"
    },
    description: {
      de: "Südostbulgarische Stadt mit starker Lage im Oberen Thrakienbecken. Haskowo ist bekannt für Handel, Landwirtschaft und den großen Mariendenkmal-Komplex. Die Stadt liegt auf einer wichtigen Achse zwischen Plowdiw, der Türkei und dem Ägäischen Raum. Das macht Haskowo für regionale SEO-Themen sehr relevant.",
      hu: "Délkelet-bolgár város, erős pozícióval a Felső-trák medencében. Haskovo kereskedelmi, mezőgazdasági és emlékmű-komplexumairól ismert. A város fontos tengelyen fekszik Plovdiv, Törökország és az Égei-térség között. Emiatt a regionális SEO-ban különösen hasznos.",
      ro: "Oraș din sud-estul Bulgariei, bine poziționat în Câmpia Tracică Superioară. Haskovo este cunoscut pentru comerț, agricultură și complexul mare al monumentului Mariei. Orașul se află pe o axă importantă între Plovdiv, Turcia și spațiul egeean. Tocmai de aceea este foarte relevant pentru SEO regional.",
      en: "A southeastern Bulgarian city with a strong position in the Upper Thracian Plain. Haskovo is known for trade, agriculture, and the large Virgin Mary monument complex. The city sits on an important axis between Plovdiv, Turkey, and the Aegean corridor. That makes Haskovo highly relevant for regional SEO."
    },
    facts: {
      de: ["Oberthrakisches Becken", "Handel", "Landwirtschaft", "Grenzkorridor", "Mariendenkmal"],
      hu: ["Felső-trák medence", "Kereskedelem", "Mezőgazdaság", "Határfolyosó", "Mária-emlékmű"],
      ro: ["Câmpia Tracică Superioară", "Comerț", "Agricultură", "Coridor de frontieră", "Monumentul Fecioarei Maria"],
      en: ["Upper Thracian Plain", "Trade", "Agriculture", "Border corridor", "Virgin Mary monument"],
    },
    image: "/geo-images/bulgaria/city-haskovo.webp"
  },
  {
    id: "city-pazardzhik",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(24.3336, 42.1928),
    name: {
      de: "Pasardschik",
      hu: "Pazardzsik",
      ro: "Pazardzhik",
      en: "Pazardzhik"
    },
    description: {
      de: "Stadt in der Oberthrakischen Ebene mit guter Verkehrslage und starkem Marktprofil. Pasardschik ist ein nützlicher Ausgangspunkt für Reisen zwischen Sofia, Plowdiw und dem Rhodopenvorland. Die Stadt hat eine lange Handels- und Handwerkstradition. Für SEO rund um Zentralbulgarien liefert sie solide regionale Relevanz.",
      hu: "Város a Felső-trák síkságon, jó közlekedési helyzettel és erős piactéri hagyománnyal. Pazardzsik hasznos kiindulópont Szófia, Plovdiv és a Rodope-előhegység között. A városnak hosszú kereskedelmi és kézműves múltja van. Közép-Bulgária SEO-tartalmaiban stabil regionális értéket ad.",
      ro: "Oraș din Câmpia Tracică Superioară, cu poziție bună în rețeaua de transport și tradiție comercială. Pazardzhik este o bază utilă între Sofia, Plovdiv și zona subcarpatică a Rodopilor. Orașul are o istorie lungă de comerț și meșteșuguri. Pentru SEO în Bulgaria centrală, oferă relevanță regională solidă.",
      en: "A city in the Upper Thracian Plain with a strong transport position and market-town tradition. Pazardzhik is a useful base between Sofia, Plovdiv, and the foothills of the Rhodopes. The city has a long history of trade and crafts. For central Bulgaria SEO, it adds solid regional relevance."
    },
    facts: {
      de: ["Oberthrakische Ebene", "Marktstadt", "Sofia-Plowdiw-Achse", "Handwerk", "Rhodopenvorland"],
      hu: ["Felső-trák síkság", "Piacváros", "Szófia-Plovdiv tengely", "Kézművesség", "Rodope-előhegység"],
      ro: ["Câmpia Tracică Superioară", "Oraș de piață", "Axa Sofia-Plovdiv", "Meșteșuguri", "Poalele Rodopilor"],
      en: ["Upper Thracian Plain", "Market town", "Sofia-Plovdiv axis", "Crafts", "Rhodopes foothills"]
    },
    image: "/geo-images/bulgaria/city-pazardzhik.webp"
  },
  {
    id: "city-pernik",
    type: "city",
    parent: "bg-country",
    coords: projectCoordsBG(23.0200, 42.6050),
    name: {
      de: "Pernik",
      hu: "Pernik",
      ro: "Pernik",
      en: "Pernik"
    },
    description: {
      de: "Industriestadt westlich von Sofia mit starkem Bergbau- und Energiemilieu. Pernik ist bekannt für seine Schwerindustrie, das lokale Festivalleben und die Nähe zur Hauptstadt. Die Stadt ist für kurze Städtereisen und Wirtschaftsreisen gleichermaßen relevant. SEO-seitig verknüpft Pernik Hauptstadt-Nähe mit Industrieprofil.",
      hu: "Ipari város Szófiától nyugatra, erős bányászati és energetikai háttérrel. Pernik ismert a nehéziparáról, a helyi fesztiváléletről és a fővároshoz való közelségéről. Rövid városlátogatásokhoz és üzleti utakhoz is jó választás. SEO-ban a fővárosi közelség és az ipari profil együtt erős.",
      ro: "Oraș industrial la vest de Sofia, cu profil puternic de minerit și energie. Pernik este cunoscut pentru industria grea, viața festivalieră locală și apropierea de capitală. Orașul este relevant atât pentru city break-uri scurte, cât și pentru călătorii de afaceri. SEO-ul lui leagă proximitatea de Sofia de profilul industrial.",
      en: "An industrial city west of Sofia with a strong mining and energy background. Pernik is known for heavy industry, local festival life, and proximity to the capital. The city works well for short urban trips and business travel alike. SEO-wise, Pernik combines capital-city proximity with an industrial profile."
    },
    facts: {
      de: ["Westlich von Sofia", "Schwerindustrie", "Bergbau", "Festivalstadt", "Wirtschaftsraum"],
      hu: ["Szófiától nyugatra", "Nehézipar", "Bányászat", "Fesztiválváros", "Gazdasági térség"],
      ro: ["La vest de Sofia", "Industrie grea", "Minerit", "Oraș de festival", "Zonă economică"],
      en: ["West of Sofia", "Heavy industry", "Mining", "Festival city", "Economic zone"]
    },
    image: "/geo-images/bulgaria/city-pernik.webp"
  }
];

export const bulgariaCulture = [
  {
    id: "cult-rila-monastery",
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
  },
  {
    id: "hist-belogradchik-fortress",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(22.6848, 43.6257),
    name: {
      de: "Belogradtschik-Festung",
      hu: "Belogradcsik erőd",
      ro: "Cetatea Belogradchik",
      en: "Belogradchik Fortress"
    },
    description: {
      de: "Eine der spektakulärsten Festungen Bulgariens, direkt zwischen roten Felsformationen gebaut. Die Anlage ist ein Top-Name für historische Reisen im Nordwesten. Romanische, osmanische und bulgarische Schichten prägen den Ort. Für SEO rund um Festungen in Bulgarien ist Belogradchik extrem stark.",
      hu: "Bulgária egyik leglátványosabb erődje, közvetlenül vörös sziklaképződmények közé építve. Az északnyugat-bolgár történelmi utak egyik csúcspontja. A helyen római, oszmán és bolgár rétegek találkoznak. A bolgár várak SEO-jában Belogradcsik kiemelkedő.",
      ro: "Una dintre cele mai spectaculoase cetăți ale Bulgariei, construită chiar printre stâncile roșii. Este un nume de top pentru turismul istoric din nord-vest. Straturi romane, otomane și bulgare definesc locul. Pentru SEO despre fortărețele Bulgariei, Belogradchik este foarte puternic.",
      en: "One of Bulgaria's most spectacular fortresses, built amid red rock formations. It is a top name for historic travel in the northwest. Roman, Ottoman, and Bulgarian layers define the site. For fortress-focused Bulgaria SEO, Belogradchik is extremely strong."
    },
    facts: {
      de: ["Rote Felsen", "Nordwestbulgarien", "Festung auf Höhenzug", "Militärgeschichte", "Fotomagnet"],
      hu: ["Vörös sziklák", "Északnyugat-Bulgária", "Magashegyi erőd", "Katonai történelem", "Fotóhelyszín"],
      ro: ["Stânci roșii", "Nord-vestul Bulgariei", "Cetate pe relief înalt", "Istorie militară", "Loc fotogenic"],
      en: ["Red rocks", "Northwestern Bulgaria", "Hilltop fortress", "Military history", "Photogenic landmark"]
    },
    image: "/geo-images/bulgaria/hist-belogradchik-fortress.webp"
  },
  {
    id: "hist-tsarevets-fortress",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(25.6170, 43.0862),
    name: {
      de: "Zarewez-Festung",
      hu: "Carevec erőd",
      ro: "Cetatea Țareveț",
      en: "Tsarevets Fortress"
    },
    description: {
      de: "Mittelalterliche Zarenfestung über Weliko Tarnowo mit starker Silhouette. Sie war das politische Herz des Zweiten Bulgarischen Reiches. Besucher kommen wegen Mauern, Türmen und Panoramablicken. Als historische Ikone ist Tsarevets ein Schlüsselbegriff für Bulgarien.",
      hu: "Középkori cári erőd Veliko Tarnovo felett, erős panorámával. A második Bolgár Birodalom politikai központja volt. A látogatók falak, tornyok és kilátás miatt érkeznek. Tsarevec Bulgária egyik fő történelmi kulcsszava.",
      ro: "Cetate medievală a țarilor deasupra orașului Veliko Târnovo, cu o siluetă puternică. A fost inima politică a celui de-al Doilea Țarat Bulgar. Vizitatorii vin pentru ziduri, turnuri și panorame. Ca simbol istoric, Tsarevets este esențial pentru Bulgaria.",
      en: "A medieval tsar fortress above Veliko Tarnovo with a powerful skyline. It was the political heart of the Second Bulgarian Empire. Visitors come for the walls, towers, and panoramic views. As a historic icon, Tsarevets is a key Bulgaria search term."
    },
    facts: {
      de: ["Weliko Tarnowo", "Zarenzeit", "Hügelburg", "Panoramablick", "Nationales Symbol"],
      hu: ["Veliko Tarnovo", "Cári korszak", "Hegyi vár", "Panoráma", "Nemzeti jelkép"],
      ro: ["Veliko Târnovo", "Epoca Țarilor", "Cetate pe colină", "Panoramă", "Simbol național"],
      en: ["Veliko Tarnovo", "Tsar era", "Hill fortress", "Panoramic views", "National symbol"]
    },
    image: "/geo-images/bulgaria/hist-tsarevets-fortress.webp"
  },
  {
    id: "hist-perperikon",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(25.6465, 41.6760),
    name: {
      de: "Perperikon",
      hu: "Perperikon",
      ro: "Perperikon",
      en: "Perperikon"
    },
    description: {
      de: "Großer thrakischer Felskomplex in den Ost-Rhodopen mit Heiligtum und Siedlungsspuren. Perperikon zählt zu den meistgesuchten archäologischen Orten Bulgariens. Die Lage über der Landschaft macht den Besuch besonders eindrucksvoll. Für Geschichte, Archäologie und Südbulgarien ist Perperikon ein Top-Begriff.",
      hu: "Nagy trák sziklakomplexum a Keleti-Rodopokban, szentéllyel és településnyomokkal. Perperikon Bulgária egyik legkeresettebb régészeti helyszíne. A táj fölé emelkedő fekvés különösen látványossá teszi. Történelemhez, régészethez és Dél-Bulgáriához Perperikon erős SEO-célpont.",
      ro: "Complex tracic mare în Munții Rodopi de Est, cu sanctuar și urme de așezare. Perperikon este unul dintre cele mai căutate situri arheologice din Bulgaria. Poziția deasupra peisajului îl face memorabil. Pentru istorie, arheologie și sudul Bulgariei, Perperikon este un termen SEO foarte bun.",
      en: "A major Thracian rock complex in the Eastern Rhodopes with sanctuary and settlement traces. Perperikon is one of Bulgaria's most searched archaeological sites. Its elevated setting above the landscape makes it especially impressive. For history, archaeology, and southern Bulgaria, Perperikon is a strong SEO term."
    },
    facts: {
      de: ["Thrakische Stätte", "Ost-Rhodopen", "Archäologie", "Heiligtum", "Felskomplex"],
      hu: ["Trák helyszín", "Keleti-Rodopok", "Régészet", "Szentély", "Sziklakomplexum"],
      ro: ["Sit tracic", "Rodopii de Est", "Arheologie", "Sanctuar", "Complex stâncos"],
      en: ["Thracian site", "Eastern Rhodopes", "Archaeology", "Sanctuary", "Rock complex"]
    },
    image: "/geo-images/bulgaria/hist-perperikon.webp"
  },
  {
    id: "hist-baba-vida",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(22.8890, 43.9950),
    name: {
      de: "Baba Vida",
      hu: "Baba Vida",
      ro: "Baba Vida",
      en: "Baba Vida Fortress"
    },
    description: {
      de: "Die bekannteste Festung von Vidin und die am besten erhaltene mittelalterliche Burg Bulgariens. Baba Vida steht direkt am Donauufer und prägt die Stadtansicht. Der Ort verbindet Grenzgeschichte, Verteidigung und Flusshandel. Für Burgenseiten und Donau-Routen ist Baba Vida ein starkes SEO-Ziel.",
      hu: "Vidin legismertebb erődje és Bulgária egyik legjobb állapotban fennmaradt középkori vára. Baba Vida közvetlenül a Duna partján áll, és meghatározza a város látképét. A hely határtörténelmet, védelmet és folyami kereskedelmet egyesít. A váras tartalmakhoz és a Duna-útvonalakhoz Baba Vida erős SEO-célpont.",
      ro: "Cea mai cunoscută fortăreață din Vidin și una dintre cele mai bine păstrate cetăți medievale ale Bulgariei. Baba Vida stă chiar pe malul Dunării și definește profilul orașului. Locul combină istoria de frontieră, apărarea și comerțul fluvial. Pentru paginile despre castele și traseele dunărene, Baba Vida este foarte puternic.",
      en: "Vidin's best-known fortress and one of Bulgaria's best-preserved medieval castles. Baba Vida stands right on the Danube and shapes the city skyline. It combines border history, defense, and river trade. For castle pages and Danube routes, Baba Vida is a strong SEO target."
    },
    facts: {
      de: ["Donauufer", "Vidin", "Mittelalterliche Burg", "Grenzgeschichte", "Stadtikon"],
      hu: ["Duna-part", "Vidin", "Középkori vár", "Határtörténelem", "Városi jelkép"],
      ro: ["Malul Dunării", "Vidin", "Cetate medievală", "Istorie de frontieră", "Simbol urban"],
      en: ["Danube bank", "Vidin", "Medieval castle", "Border history", "City icon"]
    },
    image: "/geo-images/bulgaria/hist-baba-vida.webp"
  },
  {
    id: "hist-cherven-fortress",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(25.9700, 43.6340),
    name: {
      de: "Festung Tscherwen",
      hu: "Cserven erőd",
      ro: "Cetatea Cerven",
      en: "Cherven Fortress"
    },
    description: {
      de: "Mittelalterliche Festung in Nordbulgarien mit Blick auf die Felsen über dem Fluss Tscherni Lom. Cherven gehört zu den wichtigsten historischen Ausflügen in der Region Russe. Die Ruinen zeigen die Verteidigungsstruktur des späten Mittelalters. Für Burgentourismus in Bulgarien ist Cherven ein klarer Suchtreffer.",
      hu: "Középkori erőd Észak-Bulgáriában, kilátással a Cserni Lom folyó fölötti sziklákra. Cserven az egyik legfontosabb történelmi kirándulóhely Rusze térségében. A romok a késő középkori védelmi rendszert mutatják be. A bolgár várturizmusban Cserven erős kulcsszó.",
      ro: "Cetate medievală din nordul Bulgariei, cu vedere asupra stâncilor deasupra râului Cherni Lom. Cerven este una dintre cele mai importante excursii istorice din zona Ruse. Ruinele arată structura defensivă a Evului Mediu târziu. Pentru turismul de cetăți în Bulgaria, Cerven este o căutare clară.",
      en: "A medieval fortress in northern Bulgaria overlooking the cliffs above the Cherni Lom River. Cherven is one of the most important historic excursions in the Ruse region. The ruins show the defensive structure of the late Middle Ages. For fortress tourism in Bulgaria, Cherven is a clear search term."
    },
    facts: {
      de: ["Nordbulgarien", "Russe-Region", "Mittelalterliche Ruine", "Flussschlucht", "Burgentourismus"],
      hu: ["Észak-Bulgária", "Rusze régió", "Középkori rom", "Folyószurdok", "Várturizmus"],
      ro: ["Nordul Bulgariei", "Zona Ruse", "Ruine medievale", "Defileu fluvial", "Turism de cetăți"],
      en: ["Northern Bulgaria", "Ruse region", "Medieval ruin", "River gorge", "Fortress tourism"]
    },
    image: "/geo-images/bulgaria/hist-cherven-fortress.webp"
  },
  {
    id: "hist-shipka-battlefield",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(25.4000, 42.7510),
    name: {
      de: "Schipka-Pass",
      hu: "Shipka-hágó",
      ro: "Pasul Șipka",
      en: "Shipka Pass Battlefield"
    },
    description: {
      de: "Geschichtsträchtiger Gebirgspass, eng verbunden mit den Kämpfen um die bulgarische Befreiung. Der Ort wird oft mit Denkmälern, Schlachtfeld und Nationalgedenken gesucht. Die Lage im Balkangebirge macht die Erzählung besonders stark. Für historisches Bulgarien-SEO ist Shipka unverzichtbar.",
      hu: "Történelmi hegyi hágó, amely szorosan kapcsolódik a bolgár felszabadító harcokhoz. A helyet gyakran emlékművekkel, csatamezővel és nemzeti megemlékezéssel keresik. A Balkán-hegységi fekvés erősíti a történetet. A történelmi Bulgária SEO-ban Shipka kihagyhatatlan.",
      ro: "Pas montan încărcat de istorie, legat strâns de luptele pentru eliberarea Bulgariei. Locul este căutat pentru monumente, câmp de luptă și memorie națională. Poziția din Munții Balcani face povestea și mai puternică. Pentru SEO despre Bulgaria istorică, Shipka este esențial.",
      en: "A historic mountain pass closely tied to Bulgaria's liberation battles. The site is often searched for monuments, battlefield history, and national memory. Its Balkan Mountain setting makes the story especially powerful. For historic Bulgaria SEO, Shipka is essential."
    },
    facts: {
      de: ["Freiheitskampf", "Balkangebirge", "Nationalgedenken", "Schlachtfeld", "Monumente"],
      hu: ["Felszabadítás", "Balkán-hegység", "Nemzeti emlékezet", "Csatamező", "Emlékművek"],
      ro: ["Lupta de eliberare", "Munții Balcani", "Memorie națională", "Câmp de luptă", "Monumente"],
      en: ["Liberation struggle", "Balkan Mountains", "National memory", "Battlefield", "Monuments"]
    },
    image: "/geo-images/bulgaria/hist-shipka-battlefield.webp"
  },
  {
    id: "hist-nesebar-old-town",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(27.7360, 42.6591),
    name: {
      de: "Alt-Nesebar",
      hu: "Ó-Neszebar",
      ro: "Orașul vechi Nessebar",
      en: "Nessebar Old Town"
    },
    description: {
      de: "Historische Halbinselstadt am Schwarzen Meer mit Kirchen, Gassen und antiker Atmosphäre. Nessebar ist eines der stärksten UNESCO-Nahziele an der bulgarischen Küste. Die Altstadt verbindet griechische, byzantinische und bulgarische Spuren. Für Meer, Geschichte und Bulgarien-Reisen ist Nessebar ein Premium-Keyword.",
      hu: "Történelmi félszigetváros a Fekete-tenger partján, templomokkal, sikátorokkal és ókori hangulattal. Neszebar Bulgária egyik legerősebb UNESCO-közeli tengerparti célpontja. Az óváros görög, bizánci és bolgár nyomokat egyesít. Tenger, történelem és bolgár utazás témában Neszebar prémium kulcsszó.",
      ro: "Oraș istoric pe o peninsulă de la Marea Neagră, cu biserici, străduțe și atmosferă antică. Nessebar este una dintre cele mai puternice destinații de coastă apropiate de UNESCO. Orașul vechi combină urme grecești, bizantine și bulgare. Pentru mare, istorie și turism în Bulgaria, Nessebar este un cuvânt cheie premium.",
      en: "A historic peninsula town on the Black Sea with churches, lanes, and an ancient atmosphere. Nessebar is one of Bulgaria's strongest UNESCO-adjacent coastal destinations. The old town blends Greek, Byzantine, and Bulgarian traces. For sea, history, and Bulgaria travel, Nessebar is a premium keyword."
    },
    facts: {
      de: ["Schwarzes Meer", "Halbinselstadt", "UNESCO-Nähe", "Altstadtkirchen", "Küstenhistorie"],
      hu: ["Fekete-tenger", "Félszigetváros", "UNESCO-közelség", "Óvárosi templomok", "Tengerparti történelem"],
      ro: ["Marea Neagră", "Oraș pe peninsulă", "Aproape de UNESCO", "Biserici vechi", "Istorie de coastă"],
      en: ["Black Sea", "Peninsula town", "Near UNESCO", "Old churches", "Coastal history"]
    },
    image: "/geo-images/bulgaria/hist-nesebar-old-town.webp"
  },
  {
    id: "hist-hisarya-fortress",
    type: "historical",
    parent: "bg-country",
    coords: projectCoordsBG(24.7088, 42.5038),
    name: {
      de: "Hisarja-Ruinen",
      hu: "Hisarja erődromjai",
      ro: "Cetatea Hisarya",
      en: "Hisarya Fortress"
    },
    description: {
      de: "Römische und spätrömische Festungsmauern im Kurort Hisarja. Der Ort ist bekannt für Heilquellen, Archäologie und gut erhaltene Stadtmauern. Die Anlage zeigt, wie stark die Region schon in der Antike befestigt war. Für Geschichte und Wellness-Tourismus in Bulgarien ist Hisarja sehr relevant.",
      hu: "Római és késő római erődfalak a hiszaryai fürdővárosban. A hely gyógyforrásairól, régészetéről és jól megmaradt városfalairól ismert. A komplexum megmutatja, mennyire erősen erődített volt a térség az ókorban. Történelemhez és wellness-turizmushoz Hisarya nagyon releváns.",
      ro: "Ziduri fortificate romane și târzii-romane în stațiunea Hisarya. Locul este cunoscut pentru izvoare, arheologie și zidurile sale bine păstrate. Ansamblul arată cât de bine era fortificată zona încă din Antichitate. Pentru istorie și turism balnear în Bulgaria, Hisarya este foarte relevantă.",
      en: "Roman and late Roman fortress walls in the spa town of Hisarya. The site is known for its springs, archaeology, and well-preserved walls. The complex shows how strongly fortified the area was in antiquity. For history and spa tourism in Bulgaria, Hisarya is highly relevant."
    },
    facts: {
      de: ["Römische Mauern", "Kurort Hisarja", "Heilquellen", "Antike Verteidigung", "Archäologie"],
      hu: ["Római falak", "Hiszarya fürdőváros", "Gyógyforrások", "Ókori védelem", "Régészet"],
      ro: ["Ziduri romane", "Stațiunea Hisarya", "Izvoare termale", "Apărare antică", "Arheologie"],
      en: ["Roman walls", "Hisarya spa town", "Thermal springs", "Ancient defense", "Archaeology"]
    },
    image: "/geo-images/bulgaria/hist-hisarya-fortress.webp"
  },
  {
    id: "land-alexander-nevsky-cathedral",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(23.3325, 42.6951),
    name: {
      de: "Alexander-Newski-Kathedrale",
      hu: "Alekszandr Nyevszkij-székesegyház",
      ro: "Catedrala Alexandr Nevski",
      en: "Alexander Nevsky Cathedral"
    },
    description: {
      de: "Das berühmteste Bauwerk Sofias mit goldenen Kuppeln und monumentaler Präsenz. Die Kathedrale ist ein zentrales Wahrzeichen für Bulgarien-Reisen und Stadtmarketing. Besucher suchen sie wegen Architektur, Orthodoxie und Fotomotiven. Als ikonisches Landmark ist sie ein SEO-Anker für Sofia.",
      hu: "Szófia leghíresebb épülete arany kupolákkal és monumentális megjelenéssel. A székesegyház központi jelkép a bolgár utazási és városmarketing tartalmakban. Az emberek építészete, ortodox jellege és fotózási értéke miatt keresik. Ikonikus landmarkként erős SEO-horgony Szófiához.",
      ro: "Cea mai celebră clădire a Sofiei, cu cupole aurii și prezență monumentală. Catedrala este un reper central pentru turismul și brandingul Bulgariei. Vizitatorii o caută pentru arhitectură, ortodoxie și fotografii. Ca landmark iconic, este un ancoraj SEO pentru Sofia.",
      en: "Sofia's most famous building, with golden domes and a monumental presence. The cathedral is a central symbol for Bulgaria travel and city branding. Visitors search for it for architecture, Orthodoxy, and photography. As an iconic landmark, it is a strong SEO anchor for Sofia."
    },
    facts: {
      de: ["Sofia", "Goldene Kuppeln", "Orthodoxes Wahrzeichen", "Fotomotiv", "Stadtikon"],
      hu: ["Szófia", "Arany kupolák", "Ortodox jelkép", "Fotótéma", "Városi ikon"],
      ro: ["Sofia", "Cupole aurii", "Simbol ortodox", "Loc foto", "Icon urban"],
      en: ["Sofia", "Golden domes", "Orthodox symbol", "Photo spot", "City icon"]
    },
    image: "/geo-images/bulgaria/land-alexander-nevsky-cathedral.webp"
  },
  {
    id: "land-national-palace-culture",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(23.3206, 42.6809),
    name: {
      de: "Nationaler Kulturpalast",
      hu: "Nemzeti Kultúrpalota",
      ro: "Palatul Național al Culturii",
      en: "National Palace of Culture"
    },
    description: {
      de: "Sofias großer Veranstaltungs- und Kongresskomplex mit moderner sozialistischer Architektur. Der Kulturpalast ist ein sehr bekannter Treffpunkt für Events, Messen und Konzerte. Seine Lage im Zentrum macht ihn für Stadtbesuche und Google-Suchen gleichermaßen stark. Als Landmark ist er ein wichtiges Symbol des modernen Sofia.",
      hu: "Szófia nagy rendezvény- és kongresszusi komplexuma modern szocialista építészettel. A Kultúrpalota jól ismert találkozóhely rendezvényekhez, vásárokhoz és koncertekhez. Központi fekvése miatt városlátogatáshoz és keresésekhez is erős. Landmarkként a modern Szófia egyik fontos szimbóluma.",
      ro: "Marele complex de evenimente și congrese al Sofiei, cu arhitectură socialistă modernă. Palatul Culturii este un punct de întâlnire cunoscut pentru evenimente, târguri și concerte. Poziția centrală îl face puternic pentru vizite urbane și căutări online. Ca landmark, este un simbol important al Sofiei moderne.",
      en: "Sofia's major events and congress complex with modern socialist architecture. The palace is a well-known meeting point for events, fairs, and concerts. Its central location makes it strong for city visits and online searches. As a landmark, it is an important symbol of modern Sofia."
    },
    facts: {
      de: ["Sofia-Zentrum", "Kongresshalle", "Konzerte", "Moderne Architektur", "Event-Ort"],
      hu: ["Szófia központja", "Kongresszusi csarnok", "Koncertek", "Modern építészet", "Rendezvényhelyszín"],
      ro: ["Centrul Sofiei", "Săli de congrese", "Concerte", "Arhitectură modernă", "Loc de evenimente"],
      en: ["Central Sofia", "Congress hall", "Concerts", "Modern architecture", "Event venue"]
    },
    image: "/geo-images/bulgaria/land-national-palace-culture.webp"
  },
  {
    id: "land-ivan-vazov-theatre",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(23.3240, 42.6938),
    name: {
      de: "Nationaltheater Iwan Wasow",
      hu: "Ivan Vazov Nemzeti Színház",
      ro: "Teatrul Național Ivan Vazov",
      en: "Ivan Vazov National Theatre"
    },
    description: {
      de: "Das klassische Theatergebäude im Herzen Sofias ist eines der elegantesten Wahrzeichen der Stadt. Es steht für Literatur, Bühne und städtische Kultur. Besucher kommen wegen der neoklassischen Fassade und der zentralen Lage. Für Kultur- und Stadt-SEO ist das Theater ein starker Name.",
      hu: "Szófia szívének klasszikus színházépülete, a város egyik legelegánsabb jelképe. Az irodalmat, a színpadot és a városi kultúrát képviseli. A neoklasszikus homlokzat és a központi fekvés miatt sokan keresik. Kultúra- és városi SEO-ban erős név.",
      ro: "Clădirea clasică a teatrului din inima Sofiei este unul dintre cele mai elegante repere ale orașului. Ea simbolizează literatura, scena și cultura urbană. Vizitatorii vin pentru fațada neoclasică și poziția centrală. Pentru SEO cultural și urban, teatrul este un nume puternic.",
      en: "The classic theatre building in the heart of Sofia is one of the city's most elegant landmarks. It stands for literature, the stage, and urban culture. Visitors come for the neoclassical facade and central location. For culture and city SEO, the theatre is a strong name."
    },
    facts: {
      de: ["Sofia", "Neoklassik", "Literatur- und Theaterort", "Zentrale Lage", "Kulturelles Symbol"],
      hu: ["Szófia", "Neoklasszicizmus", "Irodalmi és színházi hely", "Központi fekvés", "Kulturális szimbólum"],
      ro: ["Sofia", "Neoclasic", "Loc de teatru și literatură", "Poziție centrală", "Simbol cultural"],
      en: ["Sofia", "Neoclassical", "Theatre and literature site", "Central location", "Cultural symbol"]
    },
    image: "/geo-images/bulgaria/land-ivan-vazov-theatre.webp"
  },
  {
    id: "land-central-mineral-baths",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(23.3235, 42.6972),
    name: {
      de: "Zentralbäder Sofia",
      hu: "Szófia központi fürdői",
      ro: "Băile Minerale Centrale",
      en: "Central Mineral Baths"
    },
    description: {
      de: "Das alte Badehaus Sofias verbindet Jugendstilfassade mit Thermaltradition. Heute ist es ein ikonischer Bau für Stadtgeschichte, Mineralwasser und Architektur. Es liegt zentral und passt stark zu Bulgarien-Themen rund um Wellness und Kultur. Als Landmark hat es hohe Wiedererkennbarkeit.",
      hu: "Szófia régi fürdőháza a szecessziós homlokzatot a termálhagyománnyal köti össze. Ma a várostörténet, a termálvíz és az építészet ikonikus épülete. Központi helyen áll, és jól kapcsolódik a wellness- és kultúratémákhoz. Landmarkként magas az ismertsége.",
      ro: "Vechea clădire a băilor din Sofia combină fațada Art Nouveau cu tradiția termală. Astăzi este o clădire iconică pentru istoria orașului, apa minerală și arhitectură. Este amplasată central și se potrivește bine temelor de wellness și cultură. Ca landmark, are o recunoaștere foarte mare.",
      en: "Sofia's old bathhouse combines an Art Nouveau facade with thermal tradition. Today it is an iconic building for city history, mineral water, and architecture. Its central position fits well with wellness and culture themes. As a landmark, it has high recognition."
    },
    facts: {
      de: ["Jugendstil", "Mineralwasser", "Sofia-Zentrum", "Historisches Badehaus", "Architekturikone"],
      hu: ["Szecesszió", "Termálvíz", "Szófia központja", "Történelmi fürdő", "Építészeti ikon"],
      ro: ["Art Nouveau", "Apă minerală", "Centrul Sofiei", "Baie istorică", "Icoană arhitecturală"],
      en: ["Art Nouveau", "Mineral water", "Central Sofia", "Historic bathhouse", "Architecture icon"]
    },
    image: "/geo-images/bulgaria/land-central-mineral-baths.webp"
  },
  {
    id: "land-ancient-theatre-plovdiv",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(24.7465, 42.1461),
    name: {
      de: "Antikes Theater Plowdiw",
      hu: "Plovdivi ókori színház",
      ro: "Teatrul Antic din Plovdiv",
      en: "Ancient Theatre of Plovdiv"
    },
    description: {
      de: "Das römische Theater von Plowdiw ist eines der markantesten Bauwerke im ganzen Land. Es wird bis heute für Aufführungen genutzt und zieht viele Besucher an. Die Lage in der Altstadt macht es ideal für Kultur-, Stadt- und SEO-Inhalte. Es ist ein Premium-Landmark für Bulgarien-Reisen.",
      hu: "A plovdivi római színház az ország egyik legmarkánsabb építménye. Ma is előadások helyszíne, és sok látogatót vonz. Az óvárosi fekvés tökéletes kulturális, városi és SEO tartalmakhoz. Bulgária utazási oldalain prémium landmark.",
      ro: "Teatrul roman din Plovdiv este una dintre cele mai emblematice construcții din țară. Este folosit și astăzi pentru spectacole și atrage mulți vizitatori. Poziția sa în orașul vechi îl face ideal pentru conținut cultural, urban și SEO. Este un landmark premium pentru turismul în Bulgaria.",
      en: "Plovdiv's Roman theatre is one of the country's most distinctive structures. It is still used for performances and attracts many visitors. Its old-town setting makes it ideal for culture, city, and SEO content. It is a premium landmark for Bulgaria travel."
    },
    facts: {
      de: ["Römisches Theater", "Plowdiw", "Altstadt", "Aufführungen", "Antike Architektur"],
      hu: ["Római színház", "Plovdiv", "Óváros", "Előadások", "Ókori építészet"],
      ro: ["Teatru roman", "Plovdiv", "Oraș vechi", "Spectacole", "Arhitectură antică"],
      en: ["Roman theatre", "Plovdiv", "Old town", "Performances", "Ancient architecture"]
    },
    image: "/geo-images/bulgaria/land-ancient-theatre-plovdiv.webp"
  },
  {
    id: "land-varna-archaeological-museum",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(27.9140, 43.2134),
    name: {
      de: "Archäologisches Museum Warna",
      hu: "Várnai Régészeti Múzeum",
      ro: "Muzeul Arheologic Varna",
      en: "Varna Archaeological Museum"
    },
    description: {
      de: "Eines der bedeutendsten Museen Bulgariens mit starkem Fokus auf Antike und Goldschatz. Das Museum ist ein Muss für Varna, Geschichte und Schwarzmeerküste. Die berühmten Funde machen es international sichtbar. Als Landmark stärkt es das kulturelle Profil der Hafenstadt.",
      hu: "Bulgária egyik legfontosabb múzeuma, erős ókori és aranykincs-fókusszal. A múzeum kötelező célpont Várnában, történelemhez és Fekete-tengerhez. A híres leletek nemzetközileg is ismertté teszik. Landmarkként erősíti a kikötőváros kulturális arculatát.",
      ro: "Unul dintre cele mai importante muzee din Bulgaria, cu accent puternic pe Antichitate și tezaurul de aur. Muzeul este o vizită obligatorie pentru Varna, istorie și litoralul Mării Negre. Descoperirile celebre îi dau vizibilitate internațională. Ca landmark, întărește profilul cultural al orașului-port.",
      en: "One of Bulgaria's most important museums, with a strong focus on antiquity and gold treasures. The museum is a must for Varna, history, and the Black Sea coast. Its famous finds give it international visibility. As a landmark, it strengthens the port city's cultural profile."
    },
    facts: {
      de: ["Varna", "Antike Funde", "Goldschatz", "Schwarzmeerküste", "Top-Museum"],
      hu: ["Várna", "Ókori leletek", "Aranykincs", "Fekete-tenger partja", "Topmúzeum"],
      ro: ["Varna", "Descoperiri antice", "Tezaur de aur", "Litoralul Mării Negre", "Muzeu major"],
      en: ["Varna", "Ancient finds", "Gold treasure", "Black Sea coast", "Top museum"]
    },
    image: "/geo-images/bulgaria/land-varna-archaeological-museum.webp"
  },
  {
    id: "land-national-history-museum",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(23.2750, 42.6450),
    name: {
      de: "Nationalhistorisches Museum",
      hu: "Nemzeti Történeti Múzeum",
      ro: "Muzeul Național de Istorie",
      en: "National History Museum"
    },
    description: {
      de: "Bulgariens größtes Geschichtsmuseum mit Sammlungen von der Antike bis zur Neuzeit. Das Museum ist ein zentraler Ort für Geschichte, Staatlichkeit und kulturelles Gedächtnis. Es liegt im Südwesten Sofias und passt gut zu Bildungsreisen. Als Landmark ist es ein starker Museumsbegriff für Bulgarien.",
      hu: "Bulgária legnagyobb történeti múzeuma, az ókortól a modern korig gyűjteményekkel. A múzeum a történelem, az államiság és a kulturális emlékezet központi helye. Szófia délnyugati részén található, így jól illik az oktatási utazásokhoz. Landmarkként erős múzeumi kulcsszó Bulgáriában.",
      ro: "Cel mai mare muzeu de istorie din Bulgaria, cu colecții din Antichitate până în epoca modernă. Muzeul este un loc central pentru istorie, statalitate și memorie culturală. Se află în sud-vestul Sofiei și se potrivește bine tururilor educative. Ca landmark, este un termen muzeal puternic pentru Bulgaria.",
      en: "Bulgaria's largest history museum, with collections from antiquity to the modern era. The museum is a central place for history, statehood, and cultural memory. It sits in southwest Sofia and fits educational travel well. As a landmark, it is a strong museum term for Bulgaria."
    },
    facts: {
      de: ["Größtes Geschichtsmuseum", "Sofia", "Antike bis Moderne", "Bildungsreisen", "Kulturerbe"],
      hu: ["Legnagyobb történeti múzeum", "Szófia", "Ókortól modern korig", "Oktatási utazás", "Kulturális emlékezet"],
      ro: ["Cel mai mare muzeu istoric", "Sofia", "Antichitate până azi", "Turism educativ", "Memorie culturală"],
      en: ["Largest history museum", "Sofia", "Antiquity to modern era", "Educational travel", "Cultural memory"]
    },
    image: "/geo-images/bulgaria/land-national-history-museum.webp"
  },
  {
    id: "land-saint-george-rotunda",
    type: "landmark",
    parent: "bg-country",
    coords: projectCoordsBG(23.3220, 42.7000),
    name: {
      de: "St.-Georgs-Rotunde",
      hu: "Szent György rotunda",
      ro: "Rotunda Sfântul Gheorghe",
      en: "Saint George Rotunda"
    },
    description: {
      de: "Die älteste erhaltene Bauform in Sofia und ein sehr starker urbaner Anker. Die Rotunde steht für spätantike und frühchristliche Geschichte im Stadtzentrum. Sie ist klein, aber bedeutend für Architektur, Religion und Stadtentwicklung. Als Landmark ergänzt sie jede Sofia-Seite perfekt.",
      hu: "Szófia legrégebbi fennmaradt építészeti emléke és nagyon erős városi jelkép. A rotunda a késő antik és kora keresztény történelem emléke a belvárosban. Kicsi, de fontos építészeti, vallási és városfejlődési szempontból. Landmarkként tökéletesen kiegészíti a Szófiáról szóló oldalt.",
      ro: "Cea mai veche formă de clădire păstrată în Sofia și un reper urban foarte puternic. Rotunda reprezintă istoria târzie antică și creștină timpurie din centrul orașului. Este mică, dar importantă pentru arhitectură, religie și dezvoltarea urbană. Ca landmark, completează perfect orice pagină despre Sofia.",
      en: "The oldest preserved building form in Sofia and a very strong urban anchor. The rotunda represents late antique and early Christian history in the city center. It is small but important for architecture, religion, and urban development. As a landmark, it fits any Sofia page perfectly."
    },
    facts: {
      de: ["Ältestes Sofia-Bauwerk", "Spätantike", "Frühchristlich", "Innenstadt", "Architekturdenkmal"],
      hu: ["Szófia legrégebbi épülete", "Késő antik kor", "Kora keresztény", "Belváros", "Építészeti emlék"],
      ro: ["Cea mai veche clădire din Sofia", "Antichitate târzie", "Creștinism timpuriu", "Centru oraș", "Monument arhitectural"],
      en: ["Oldest Sofia building", "Late antiquity", "Early Christian", "City center", "Architectural monument"]
    },
    image: "/geo-images/bulgaria/land-saint-george-rotunda.webp"
  },
  {
    id: "port-varna",
    type: "port",
    parent: "bg-country",
    coords: projectCoordsBG(27.9098, 43.2160),
    name: {
      de: "Hafen Warna",
      hu: "Várna kikötője",
      ro: "Portul Varna",
      en: "Port of Varna"
    },
    description: {
      de: "Der wichtigste Seehafen an der bulgarischen Schwarzmeerküste und ein zentrales Logistikdreieck. Der Hafen verbindet Containerverkehr, Handel und maritime Wirtschaft. Für Reise- und Wirtschaftscontent ist Varna ein starkes Küsten-Keyword. Die Lage macht ihn für Black-Sea-SEO sehr wertvoll.",
      hu: "Bulgária legfontosabb tengeri kikötője a Fekete-tenger partján és kulcsfontosságú logisztikai csomópont. A kikötő összeköti a konténerforgalmat, a kereskedelmet és a tengeri gazdaságot. Utazási és gazdasági tartalmakban Várna erős parti kulcsszó. Fekete-tengeri SEO-ban különösen értékes.",
      ro: "Cel mai important port maritim de pe litoralul bulgar al Mării Negre și un nod logistic central. Portul leagă traficul de containere, comerțul și economia maritimă. Pentru conținut de călătorie și business, Varna este un cuvânt cheie costier puternic. Poziția sa îl face foarte valoros pentru SEO de litoral.",
      en: "The most important seaport on Bulgaria's Black Sea coast and a major logistics hub. The port connects container traffic, trade, and maritime business. For travel and business content, Varna is a strong coastal keyword. Its location makes it highly valuable for Black Sea SEO."
    },
    facts: {
      de: ["Schwarzmeerhafen", "Containerverkehr", "Logistikzentrum", "Varna", "Maritime Wirtschaft"],
      hu: ["Fekete-tengeri kikötő", "Konténerforgalom", "Logisztikai központ", "Várna", "Tengeri gazdaság"],
      ro: ["Port la Marea Neagră", "Trafic de containere", "Centru logistic", "Varna", "Economie maritimă"],
      en: ["Black Sea port", "Container traffic", "Logistics hub", "Varna", "Maritime business"]
    },
    image: "/geo-images/bulgaria/port-varna.webp"
  },
  {
    id: "port-burgas",
    type: "port",
    parent: "bg-country",
    coords: projectCoordsBG(27.4805, 42.5054),
    name: {
      de: "Hafen Burgas",
      hu: "Burgasz kikötője",
      ro: "Portul Burgas",
      en: "Port of Burgas"
    },
    description: {
      de: "Der größte Hafen im Süden der bulgarischen Schwarzmeerküste mit starkem Industrie- und Energiesektor. Burgas ist ein wichtiger Knoten für Öl, Fracht und maritime Dienstleistungen. Der Hafen prägt Stadtentwicklung und Arbeitsmarkt. Für Bulgarien-SEO rund um Logistik und Küste ist er unverzichtbar.",
      hu: "A bolgár Fekete-tenger déli részének legnagyobb kikötője, erős ipari és energetikai szereppel. Burgasz fontos csomópont az olaj, az áruszállítás és a tengeri szolgáltatások számára. A kikötő a városfejlődést és a munkaerőpiacot is meghatározza. Logisztikai és parti SEO-ban kihagyhatatlan.",
      ro: "Cel mai mare port din sudul litoralului bulgar al Mării Negre, cu rol puternic industrial și energetic. Burgas este un nod important pentru petrol, mărfuri și servicii maritime. Portul influențează dezvoltarea orașului și piața muncii. Pentru SEO despre logistică și coastă în Bulgaria, este esențial.",
      en: "The largest port in the south of Bulgaria's Black Sea coast, with a strong industrial and energy role. Burgas is an important node for oil, freight, and maritime services. The port shapes city development and the local job market. For Bulgaria SEO about logistics and coast, it is essential."
    },
    facts: {
      de: ["Südküste", "Öl und Fracht", "Industriesektor", "Burgas", "Schwarzmeerlogistik"],
      hu: ["Déli part", "Olaj és áru", "Ipari szektor", "Burgasz", "Fekete-tengeri logisztika"],
      ro: ["Coasta sudică", "Petrol și mărfuri", "Sector industrial", "Burgas", "Logistică la Marea Neagră"],
      en: ["Southern coast", "Oil and freight", "Industrial sector", "Burgas", "Black Sea logistics"]
    },
    image: "/geo-images/bulgaria/port-burgas.webp"
  },
  {
    id: "industry-maritsa-east-complex",
    type: "industry",
    parent: "bg-country",
    coords: projectCoordsBG(25.9000, 42.3000),
    name: {
      de: "Mariza-Ost-Komplex",
      hu: "Marica keleti komplexum",
      ro: "Complexul Maritsa East",
      en: "Maritsa East Complex"
    },
    description: {
      de: "Bulgariens größter Energie- und Bergbaukomplex mit Kohleförderung und Kraftwerksfunktion. Der Standort spielt eine zentrale Rolle für Stromversorgung und Industriegeschichte. Er ist ein Schlüsselbegriff für Wirtschafts- und Energiestrategie in Bulgarien. SEO rund um Energie und Schwerindustrie profitiert stark von diesem Namen.",
      hu: "Bulgária legnagyobb energiatermelő és bányászati komplexuma, szénkitermeléssel és erőművi funkcióval. A helyszín központi szerepet játszik az áramellátásban és az ipartörténetben. Kulcsszó az energiagazdaság és a nehézipar témájában. SEO-ban erősen teljesít az ipari tartalmaknál.",
      ro: "Cel mai mare complex energetic și minier din Bulgaria, cu extracție de cărbune și funcții de centrală. Locul joacă un rol central în alimentarea cu energie și istoria industrială. Este un termen cheie pentru strategia energetică și economică a Bulgariei. SEO-ul pentru energie și industrie grea beneficiază clar de acest nume.",
      en: "Bulgaria's largest energy and mining complex, with coal extraction and power-generation functions. The site plays a central role in electricity supply and industrial history. It is a key term for Bulgaria's energy and economic strategy. SEO about energy and heavy industry benefits strongly from this name."
    },
    facts: {
      de: ["Energiekomplex", "Braunkohle", "Stromversorgung", "Industriezone", "Südostbulgarien"],
      hu: ["Energetikai komplexum", "Barnaszén", "Villamosenergia-ellátás", "Ipari zóna", "Délkelet-Bulgária"],
      ro: ["Complex energetic", "Lignit", "Aprovizionare cu energie", "Zonă industrială", "Sud-estul Bulgariei"],
      en: ["Energy complex", "Lignite coal", "Power supply", "Industrial zone", "Southeastern Bulgaria"]
    },
    image: "/geo-images/bulgaria/industry-maritsa-east-complex.webp"
  },
  {
    id: "industry-kozloduy-npp",
    type: "industry",
    parent: "bg-country",
    coords: projectCoordsBG(23.7330, 43.7810),
    name: {
      de: "Kozloduj-Kernkraftwerk",
      hu: "Kozloduj atomerőmű",
      ro: "Centrala Nucleară Kozlodui",
      en: "Kozloduy Nuclear Power Plant"
    },
    description: {
      de: "Bulgarien wichtigstes Kernkraftwerk an der Donau und ein zentraler Punkt der Energieversorgung. Der Standort ist stark mit Stromproduktion, Technik und Sicherheitsmanagement verbunden. Für Industrie- und Energiesuchen in Bulgarien ist Kozloduj extrem relevant. Die Donau-Lage verstärkt den geografischen Wiedererkennungswert.",
      hu: "Bulgária legfontosabb atomerőműve a Duna partján és az energiaellátás központi eleme. A helyszín erősen kapcsolódik az áramtermeléshez, a technológiához és a biztonsági menedzsmenthez. Ipari és energetikai keresésekben Kozloduj rendkívül releváns. A dunai elhelyezkedés a földrajzi felismerhetőséget is növeli.",
      ro: "Cea mai importantă centrală nucleară a Bulgariei, situată pe Dunăre, și un element central al sistemului energetic. Locul este puternic asociat cu producția de energie, tehnologia și managementul securității. Pentru căutările despre industrie și energie în Bulgaria, Kozloduy este foarte relevant. Poziția pe Dunăre îi crește recunoașterea geografică.",
      en: "Bulgaria's most important nuclear power plant, located on the Danube and central to the energy system. The site is strongly associated with electricity generation, technology, and safety management. For industry and energy searches in Bulgaria, Kozloduy is highly relevant. Its Danube location boosts geographic recognition."
    },
    facts: {
      de: ["Donau", "Kernenergie", "Stromproduktion", "Technologie", "Energieversorgung"],
      hu: ["Duna", "Nukleáris energia", "Villamosenergia-termelés", "Technológia", "Energiaellátás"],
      ro: ["Dunăre", "Energie nucleară", "Producție de electricitate", "Tehnologie", "Sistem energetic"],
      en: ["Danube", "Nuclear power", "Electricity generation", "Technology", "Energy supply"]
    },
    image: "/geo-images/bulgaria/industry-kozloduy-npp.webp"
  },
  {
    id: "agriculture-rose-valley-kazanlak",
    type: "agriculture",
    parent: "bg-country",
    coords: projectCoordsBG(25.3980, 42.6200),
    name: {
      de: "Rosen Tal bei Kasanlak",
      hu: "Rózsák völgye Kazanlaknál",
      ro: "Valea Trandafirilor din Kazanlak",
      en: "Rose Valley of Kazanlak"
    },
    description: {
      de: "Das berühmteste Rosenanbaugebiet Bulgariens und die Heimat des Rosenöls. Die Region steht für landwirtschaftliche Tradition, frühe Ernte und starkes Exportprofil. Besucher suchen hier Felder, Feste und Destillerien. Für Agrar-, Duft- und Bulgarien-SEO ist das Rose Valley ein Top-Begriff.",
      hu: "Bulgária leghíresebb rózsatermesztő vidéke és a rózsaolaj otthona. A térség a mezőgazdasági hagyományról, a korai betakarításról és az exportprofilról ismert. A látogatók a mezők, fesztiválok és lepárlók miatt keresik. Agrár-, illat- és bolgár SEO-ban a Rózsa-völgy toplista.",
      ro: "Cea mai cunoscută zonă de cultivare a trandafirilor din Bulgaria și casa uleiului de trandafir. Regiunea înseamnă tradiție agricolă, recoltare timpurie și profil puternic de export. Vizitatorii caută câmpurile, festivalurile și distileriile. Pentru SEO despre agricultură, parfum și Bulgaria, Valea Trandafirilor este de top.",
      en: "Bulgaria's most famous rose-growing region and the home of rose oil. The area stands for agricultural tradition, early harvest, and a strong export profile. Visitors search for the fields, festivals, and distilleries. For agriculture, fragrance, and Bulgaria SEO, the Rose Valley is a top term."
    },
    facts: {
      de: ["Rosenöl", "Kazanlak", "Agrartradition", "Exportprodukt", "Rosenfest"],
      hu: ["Rózsaolaj", "Kazanlak", "Agrárhagyomány", "Exporttermék", "Rózsafesztivál"],
      ro: ["Ulei de trandafir", "Kazanlak", "Tradiție agricolă", "Produs de export", "Festivalul trandafirilor"],
      en: ["Rose oil", "Kazanlak", "Agricultural tradition", "Export product", "Rose festival"]
    },
    image: "/geo-images/bulgaria/agriculture-rose-valley-kazanlak.webp"
  },
  {
    id: "agriculture-melnik-vineyards",
    type: "agriculture",
    parent: "bg-country",
    coords: projectCoordsBG(23.4000, 41.5250),
    name: {
      de: "Weinberge von Melnik",
      hu: "Melnik szőlőhegyei",
      ro: "Vieiile din Melnik",
      en: "Melnik Vineyards"
    },
    description: {
      de: "Kleine, aber sehr bekannte Weinregion im Südwesten Bulgariens mit starkem Terroir-Charakter. Melnik ist ein Schlüsselname für bulgarischen Wein, Landwirtschaft und Genussreisen. Die Hügel und Weingüter sorgen für hohe Sichtbarkeit in Reise- und Lifestyle-Suchen. Für Agrar-SEO und Weintourismus ist Melnik sehr wertvoll.",
      hu: "Kicsi, de nagyon ismert borvidék Bulgária délnyugati részén, erős terroir-jelleggel. Melnik kulcsszó a bolgár bor, a mezőgazdaság és a gasztronómiai utazások terén. A dombok és pincészetek magas láthatóságot adnak az utazási és életmód-keresésekben. Agrár-SEO-hoz és borturizmushoz Melnik különösen értékes.",
      ro: "Regiune viticolă mică, dar foarte cunoscută din sud-vestul Bulgariei, cu caracter puternic de terroir. Melnik este un nume-cheie pentru vinul bulgăresc, agricultură și turismul gastronomic. Dealurile și cramele îi oferă vizibilitate mare în căutările de travel și lifestyle. Pentru SEO agricol și turism viticol, Melnik este foarte valoros.",
      en: "A small but very famous wine region in southwestern Bulgaria with a strong terroir character. Melnik is a key name for Bulgarian wine, agriculture, and food travel. The hills and wineries give it high visibility in travel and lifestyle searches. For agriculture SEO and wine tourism, Melnik is highly valuable."
    },
    facts: {
      de: ["Weinregion", "Melnik", "Terroir", "Winzerkultur", "Südwestbulgarien"],
      hu: ["Borvidék", "Melnik", "Terroir", "Pincészetek", "Délnyugat-Bulgária"],
      ro: ["Regiune viticolă", "Melnik", "Terroir", "Crame", "Sud-vestul Bulgariei"],
      en: ["Wine region", "Melnik", "Terroir", "Wineries", "Southwestern Bulgaria"]
    },
    image: "/geo-images/bulgaria/agriculture-melnik-vineyards.webp"
  }
];

export const bulgariaNature = [
  {
    id: "nat-pirin",
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
  },
  {
    id: "nat-musala",
    type: "mountain",
    parent: "bg-country",
    coords: projectCoordsBG(23.5856, 42.1798),
    name: {
      de: "Musala",
      hu: "Muszala",
      ro: "Musala",
      en: "Musala"
    },
    description: {
      de: "Der höchste Berg Bulgariens und ein zentrales Ziel für alpine Reisen. Musala liegt im Rila-Gebirge und dominiert jede Höhen-SEO rund um Bulgarien. Die Route ist bekannt für klare Bergluft, Seen und Panoramen. Als Berg-Ikone ist Musala ein Muss für Naturcontent.",
      hu: "Bulgária legmagasabb hegycsúcsa és az alpesi utazások központi célpontja. A Muszala a Rilai-hegységben áll, és minden magashegyi SEO-t ural Bulgáriában. Az útvonal tiszta hegyi levegőről, tavakról és panorámákról ismert. Hegyikonként Muszala kötelező természetes tartalom.",
      ro: "Cel mai înalt vârf al Bulgariei și o țintă centrală pentru turismul alpin. Musala se află în Munții Rila și domină orice SEO despre altitudine în Bulgaria. Traseul este cunoscut pentru aer curat, lacuri și panorame. Ca simbol montan, Musala este esențial pentru conținutul de natură.",
      en: "The highest peak in Bulgaria and a central target for alpine travel. Musala sits in the Rila Mountains and dominates high-altitude Bulgaria SEO. The route is known for clean mountain air, lakes, and panoramas. As a mountain icon, Musala is essential for nature content."
    },
    facts: {
      de: ["Höchster Berg Bulgariens", "Rila-Gebirge", "Alpine Route", "Panoramen", "Wandern"],
      hu: ["Bulgária legmagasabb csúcsa", "Rilai-hegység", "Alpesi útvonal", "Panoráma", "Túrázás"],
      ro: ["Cel mai înalt vârf", "Munții Rila", "Traseu alpin", "Panorame", "Drumeții"],
      en: ["Highest peak", "Rila Mountains", "Alpine route", "Panoramas", "Hiking"]
    },
    image: "/geo-images/bulgaria/nat-musala.webp"
  },
  {
    id: "nat-vihren",
    type: "mountain",
    parent: "bg-country",
    coords: projectCoordsBG(23.3965, 41.7695),
    name: {
      de: "Vihren",
      hu: "Vihren",
      ro: "Vihren",
      en: "Vihren"
    },
    description: {
      de: "Der bekannteste Gipfel des Pirin und ein starkes Ziel für Bergsteiger und Wanderer. Vihren steht für schroffe Kalksteinlandschaft und alpine Touren. Der Berg ist ein Kernbegriff für Naturreisen in Südwestbulgarien. Für Berg-SEO in Bulgarien ist Vihren besonders stark.",
      hu: "A Pirin legismertebb csúcsa és erős célpont hegymászóknak és túrázóknak. Vihren a meredek mészkővidéket és az alpesi túrákat jelenti. A hegy kulcsszó a délnyugat-bolgár természetjárásban. A bolgár hegyi SEO-ban Vihren kiemelkedő.",
      ro: "Cel mai cunoscut vârf din Pirin și o țintă importantă pentru alpiniști și drumeți. Vihren înseamnă relief calcaros abrupt și trasee alpine. Muntele este un termen cheie pentru turismul de natură din sud-vestul Bulgariei. Pentru SEO montan în Bulgaria, Vihren este foarte puternic.",
      en: "The best-known peak of Pirin and a major target for climbers and hikers. Vihren stands for rugged limestone terrain and alpine routes. The mountain is a core term for nature travel in southwestern Bulgaria. For mountain SEO in Bulgaria, Vihren is especially strong."
    },
    facts: {
      de: ["Pirin", "Kalkstein", "Bergsteigen", "Alpine Route", "Südwestbulgarien"],
      hu: ["Pirin", "Mészkő", "Hegymászás", "Alpesi út", "Délnyugat-Bulgária"],
      ro: ["Pirin", "Calcar", "Alpinism", "Traseu alpin", "Sud-vestul Bulgariei"],
      en: ["Pirin", "Limestone", "Climbing", "Alpine route", "Southwestern Bulgaria"]
    },
    image: "/geo-images/bulgaria/nat-vihren.webp"
  },
  {
    id: "nat-botev-peak",
    type: "mountain",
    parent: "bg-country",
    coords: projectCoordsBG(24.9140, 42.7030),
    name: {
      de: "Botev-Gipfel",
      hu: "Botev-csúcs",
      ro: "Vârful Botev",
      en: "Botev Peak"
    },
    description: {
      de: "Der höchste Gipfel des Balkangebirges und ein markantes Naturziel im Zentrum Bulgariens. Botev Peak ist eng mit Wandern, Hochgebirge und Panoramablicken verbunden. Die Lage im Nationalpark macht ihn für Naturreisen wichtig. Für Bergtourismus in Bulgarien ist Botev ein starkes Keyword.",
      hu: "A Balkán-hegység legmagasabb csúcsa és markáns természeti célpont Közép-Bulgáriában. A Botev-csúcs szorosan kapcsolódik a túrázáshoz, a magashegyi élményekhez és a panorámákhoz. A nemzeti parkbeli fekvése fontos természetes úti céllá teszi. A bolgár hegyi turizmusban Botev erős kulcsszó.",
      ro: "Cel mai înalt vârf din Munții Balcani și o destinație naturală importantă în centrul Bulgariei. Botev este strâns legat de drumeții, experiențe de mare altitudine și panorame. Poziția în parc național îl face important pentru turismul de natură. Pentru turism montan în Bulgaria, Botev este un cuvânt cheie puternic.",
      en: "The highest peak of the Balkan Mountains and a major natural destination in central Bulgaria. Botev Peak is closely tied to hiking, high-mountain experiences, and panoramic views. Its national-park setting makes it important for nature travel. For mountain tourism in Bulgaria, Botev is a strong keyword."
    },
    facts: {
      de: ["Balkangebirge", "Höchster Gipfel", "Wandern", "Panorama", "Nationalpark"],
      hu: ["Balkán-hegység", "Legmagasabb csúcs", "Túrázás", "Panoráma", "Nemzeti park"],
      ro: ["Munții Balcani", "Cel mai înalt vârf", "Drumeții", "Panoramă", "Parc național"],
      en: ["Balkan Mountains", "Highest peak", "Hiking", "Panorama", "National park"]
    },
    image: "/geo-images/bulgaria/nat-botev-peak.webp"
  },
  {
    id: "nat-rhodopes",
    type: "mountain",
    parent: "bg-country",
    coords: projectCoordsBG(24.6000, 41.8000),
    name: {
      de: "Rhodopen",
      hu: "Rodope-hegység",
      ro: "Munții Rodopi",
      en: "Rhodopes"
    },
    description: {
      de: "Das große südliche Bergland Bulgariens mit weichen Linien, Wäldern und Dorfkultur. Die Rhodopen sind stark mit Natur, Folklore und Langstreckenreisen verbunden. Viele Besucher suchen hier Aussichtspunkte, Schluchten und traditionelle Ortschaften. Für Bulgarien-NaturSEO ist der Name sehr breit einsetzbar.",
      hu: "Bulgária nagy déli hegyvidéke, lágy vonalakkal, erdőkkel és falusi kultúrával. A Rodope-hegység erősen kapcsolódik a természethez, a folklórhoz és a hosszabb utazásokhoz. Sok látogató kilátópontokat, szurdokokat és hagyományos falvakat keres itt. A bolgár természet SEO-ban nagyon széles körben használható.",
      ro: "Marea zonă montană din sudul Bulgariei, cu linii domoale, păduri și cultură rurală. Rodopii sunt strâns legați de natură, folclor și călătorii mai lungi. Mulți vizitatori caută puncte de belvedere, defileuri și sate tradiționale. Pentru SEO despre natura Bulgariei, numele este foarte versatil.",
      en: "The large southern mountain region of Bulgaria, with soft contours, forests, and village culture. The Rhodopes are closely tied to nature, folklore, and longer road trips. Many visitors search for viewpoints, gorges, and traditional settlements here. For Bulgaria nature SEO, the name is broadly useful."
    },
    facts: {
      de: ["Südbulgarien", "Wälder", "Folklore", "Dörfer", "Schluchten"],
      hu: ["Dél-Bulgária", "Erdők", "Folklór", "Falvak", "Szurdokok"],
      ro: ["Sudul Bulgariei", "Păduri", "Folclor", "Sate", "Defilee"],
      en: ["Southern Bulgaria", "Forests", "Folklore", "Villages", "Gorges"]
    },
    image: "/geo-images/bulgaria/nat-rhodopes.webp"
  },
  {
    id: "nat-srebarna-lake",
    type: "lake",
    parent: "bg-country",
    coords: projectCoordsBG(27.0330, 44.1055),
    name: {
      de: "Sreburna-See",
      hu: "Srebarna-tó",
      ro: "Lacul Srebarna",
      en: "Srebarna Lake"
    },
    description: {
      de: "Ein bedeutender Süßwassersee im Nordosten Bulgariens mit internationalem Schutzstatus. Sreburna ist bekannt für Vogelbeobachtung, Feuchtgebiete und ruhige Natur. Der See passt perfekt zu Öko- und Naturtourismus in Bulgarien. Als Seeziel ist er stark für nachhaltige Reise-SEO.",
      hu: "Fontos édesvízi tó Bulgária északkeleti részén, nemzetközi védelem alatt. Srebarna a madármegfigyelésről, a vizes élőhelyekről és a csendes természetről ismert. A tó tökéletes az öko- és természetjáró turizmushoz Bulgáriában. Tóként erős a fenntartható utazási SEO-ban.",
      ro: "Un lac important de apă dulce în nord-estul Bulgariei, cu statut internațional de protecție. Srebarna este cunoscut pentru birdwatching, zone umede și natură liniștită. Lacul se potrivește perfect turismului ecologic și de natură din Bulgaria. Ca destinație lacustră, este puternic pentru SEO sustenabil.",
      en: "An important freshwater lake in northeastern Bulgaria with international protection status. Srebarna is known for birdwatching, wetlands, and quiet nature. The lake fits perfectly into eco and nature tourism in Bulgaria. As a lake destination, it is strong for sustainable travel SEO."
    },
    facts: {
      de: ["Nordostbulgarien", "Vogelbeobachtung", "Feuchtgebiete", "Schutzstatus", "Ökotourismus"],
      hu: ["Északkelet-Bulgária", "Madármegfigyelés", "Vizes élőhely", "Védelem", "Ökoturizmus"],
      ro: ["Nord-estul Bulgariei", "Birdwatching", "Zone umede", "Statut protejat", "Ecoturism"],
      en: ["Northeastern Bulgaria", "Birdwatching", "Wetlands", "Protected status", "Ecotourism"]
    },
    image: "/geo-images/bulgaria/nat-srebarna-lake.webp"
  },
  {
    id: "nat-atanasovsko-lake",
    type: "lake",
    parent: "bg-country",
    coords: projectCoordsBG(27.4800, 42.5400),
    name: {
      de: "Atanasowo-See",
      hu: "Atanaszovo-tó",
      ro: "Lacul Atanasovsko",
      en: "Atanasovsko Lake"
    },
    description: {
      de: "Ein salziger Küstensee nördlich von Burgas mit Salzbecken und Vogelreichtum. Atanasovo ist für Naturfotografie, Biodiversität und Küstenökologie bekannt. Die Lage nahe der Stadt macht den See leicht erreichbar. Für Black-Sea-Nature-SEO ist er besonders wertvoll.",
      hu: "Sós parti tó Burgasz északi részén, sólepárlókkal és gazdag madárvilággal. Atanaszovo a természetfotózásról, a biodiverzitásról és a parti ökológiáról ismert. A városhoz közeli fekvés könnyen elérhetővé teszi. Fekete-tengeri természet SEO-ban különösen értékes.",
      ro: "Un lac sărat de coastă la nord de Burgas, cu bazine de sare și bogăție avifaunistică. Atanasovsko este cunoscut pentru fotografie de natură, biodiversitate și ecologie litorală. Poziția aproape de oraș îl face ușor accesibil. Pentru SEO de natură la Marea Neagră, este foarte valoros.",
      en: "A saline coastal lake north of Burgas with salt pans and rich birdlife. Atanasovsko is known for nature photography, biodiversity, and coastal ecology. Its near-city location makes it easy to access. For Black Sea nature SEO, it is especially valuable."
    },
    facts: {
      de: ["Burgas-Nähe", "Salzsee", "Vogelwelt", "Küstenökologie", "Fotografie"],
      hu: ["Burgasz közelében", "Sós tó", "Madárvilág", "Parti ökológia", "Fotózás"],
      ro: ["Aproape de Burgas", "Lac sărat", "Păsări", "Ecologie litorală", "Fotografie"],
      en: ["Near Burgas", "Salt lake", "Birdlife", "Coastal ecology", "Photography"]
    },
    image: "/geo-images/bulgaria/nat-atanasovsko-lake.webp"
  },
  {
    id: "nat-iskar-river",
    type: "river",
    parent: "bg-country",
    coords: projectCoordsBG(23.3920, 42.9500),
    name: {
      de: "Iskar",
      hu: "Iszkar folyó",
      ro: "Râul Iskar",
      en: "Iskar River"
    },
    description: {
      de: "Der längste Fluss, der vollständig durch Bulgarien fließt, und ein wichtiger Naturkorridor. Iskar ist mit Schluchten, Stauseen und Talräumen verbunden. Er prägt Städte, Dörfer und Verkehrsachsen im Westen und Zentrum des Landes. Für Fluss-SEO in Bulgarien ist Iskar sehr stark.",
      hu: "A leghosszabb, teljes egészében Bulgárián átfolyó folyó és fontos természeti folyosó. Az Iszkar szurdokokkal, tározókkal és völgytérségekkel kapcsolódik össze. Meghatározza Nyugat- és Közép-Bulgária városait, falvait és közlekedési tengelyeit. A bolgár folyó SEO-ban nagyon erős.",
      ro: "Cel mai lung râu care curge integral prin Bulgaria și un important coridor natural. Iskarul este legat de defilee, lacuri de acumulare și văi. Influențează orașele, satele și axele de transport din vestul și centrul țării. Pentru SEO despre râurile Bulgariei, Iskar este foarte puternic.",
      en: "The longest river flowing entirely through Bulgaria and an important natural corridor. Iskar is linked to gorges, reservoirs, and valley landscapes. It shapes cities, villages, and transport routes in the west and center of the country. For Bulgaria river SEO, Iskar is very strong."
    },
    facts: {
      de: ["Längster Binnenfluss", "Täler", "Stauseen", "Westbulgarien", "Naturkorridor"],
      hu: ["Leghosszabb belső folyó", "Völgyek", "Tározók", "Nyugat-Bulgária", "Természeti folyosó"],
      ro: ["Cel mai lung râu intern", "Văi", "Lacuri de acumulare", "Vestul Bulgariei", "Coridor natural"],
      en: ["Longest inland river", "Valleys", "Reservoirs", "Western Bulgaria", "Natural corridor"]
    },
    image: "/geo-images/bulgaria/nat-iskar-river.webp"
  },
  {
    id: "nat-st-anastasia-island",
    type: "island",
    parent: "bg-country",
    coords: projectCoordsBG(27.9620, 42.4540),
    name: {
      de: "Sankt-Anastasia-Insel",
      hu: "Szent Anasztázia-sziget",
      ro: "Insula Sfânta Anastasia",
      en: "St. Anastasia Island"
    },
    description: {
      de: "Die bekannteste bulgarische Insel im Schwarzen Meer und ein beliebtes Ausflugsziel vor Burgas. Die Insel verbindet Klostergeschichte, Küstenlandschaft und Bootstourismus. Besucher kommen für Ruhe, Meerblick und eine besondere Atmosphäre. Als Insel-Keyword ist sie sehr attraktiv für Bulgarien-Reisen.",
      hu: "Bulgária legismertebb fekete-tengeri szigete és kedvelt kirándulóhely Burgasz előtt. A sziget a kolostortörténetet, a parti tájat és a hajós turizmust köti össze. A látogatók a nyugalom, a tengerkép és a különleges hangulat miatt jönnek. Sziget kulcsszóként nagyon vonzó a bolgár utazásokban.",
      ro: "Cea mai cunoscută insulă bulgară din Marea Neagră și o destinație populară de excursie lângă Burgas. Insula combină istoria monahală, peisajul litoral și turismul cu barca. Vizitatorii vin pentru liniște, vedere la mare și o atmosferă aparte. Ca termen SEO pentru insule, este foarte atractivă.",
      en: "The best-known Bulgarian island in the Black Sea and a popular excursion spot near Burgas. The island combines monastery history, coastal scenery, and boat tourism. Visitors come for calm, sea views, and a unique atmosphere. As an island keyword, it is very attractive for Bulgaria travel."
    },
    facts: {
      de: ["Schwarzes Meer", "Burgas", "Bootsausflug", "Klostergeschichte", "Inselziel"],
      hu: ["Fekete-tenger", "Burgasz", "Hajós kirándulás", "Kolostortörténet", "Szigetcélpont"],
      ro: ["Marea Neagră", "Burgas", "Excursie cu barca", "Istorie monahală", "Destinație insulară"],
      en: ["Black Sea", "Burgas", "Boat trip", "Monastery history", "Island destination"]
    },
    image: "/geo-images/bulgaria/nat-st-anastasia-island.webp"
  }
];

bulgariaAllPoi.push(...bulgariaCities, ...bulgariaCulture, ...bulgariaNature);
