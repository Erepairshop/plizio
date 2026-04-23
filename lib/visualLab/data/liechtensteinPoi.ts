import type { POI } from "./poi";

export const liechtensteinCountry: POI = {
  id: "country-liechtenstein",
  type: "country",
  parent: "europe",
  coords: [9.5554, 47.1660],
  name: {
    de: "Liechtenstein",
    hu: "Liechtenstein",
    ro: "Liechtenstein",
    en: "Liechtenstein"
  },
  description: {
    de: "Ein kleiner, wohlhabender Fürstentum in den Alpen, bekannt für mittelalterliche Burgen, alpine Landschaften und ein wichtiges Finanzzentrum.",
    hu: "Egy apró, gazdag hercegség az Alpokban, amely középkori várairól, alpesi tájairól és pénzügyi központjáról ismert.",
    ro: "Un mic și prosper principat în Alpi, cunoscut pentru castelele medievale, peisajele alpine și ca un important centru financiar.",
    en: "A tiny, wealthy principality in the Alps, known for its medieval castles, alpine landscapes, and as a major financial center."
  },
  shortDesc: {
    de: "Ein kleines Alpenfürstentum, bekannt für Burgen und Berge.",
    hu: "Kis alpesi hercegség, várakról és hegyekről ismert.",
    ro: "Mic principat alpin, faimos pentru castele și munți.",
    en: "A tiny Alpine principality known for castles and mountains."
  }
};

export const liechtensteinRegions: POI[] = [
  {
    id: "LI-ALL",
    type: "region",
    parent: "country-liechtenstein",
    coords: [9.5554, 47.1660],
    name: {
      de: "Liechtenstein",
      hu: "Liechtenstein",
      ro: "Liechtenstein",
      en: "Liechtenstein"
    },
    shortDesc: {
      de: "Das gesamte Gebiet des Fürstentums Liechtenstein.",
      hu: "A Liechtensteini Hercegség teljes területe.",
      ro: "Întregul teritoriu al Principatului Liechtenstein.",
      en: "The entire territory of the Principality of Liechtenstein."
    }
  },
  {
    id: "LI-001",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1000],
    name: { de: "Triesen", hu: "Triesen", ro: "Triesen", en: "Triesen" },
    shortDesc: { de: "Die drittgrößte Gemeinde des Landes.", hu: "Az ország harmadik legnagyobb községe.", ro: "A treia cea mai mare comună a țării.", en: "The country's third-largest municipality." }
  },
  {
    id: "LI-002",
    type: "region",
    parent: "LI-ALL",
    coords: [9.4833, 47.1666],
    name: { de: "Schaan", hu: "Schaan", ro: "Schaan", en: "Schaan" },
    shortDesc: { de: "Die bevölkerungsreichste Gemeinde.", hu: "A legnépesebb község.", ro: "Cea mai populată comună.", en: "The most populous municipality." }
  },
  {
    id: "LI-003",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1166],
    name: { de: "Triesenberg", hu: "Triesenberg", ro: "Triesenberg", en: "Triesenberg" },
    shortDesc: { de: "Die höchstgelegene Gemeinde.", hu: "A legmagasabban fekvő község.", ro: "Comuna situată la cea mai mare altitudine.", en: "The highest-lying municipality." }
  },
  {
    id: "LI-004",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5000, 47.0666],
    name: { de: "Balzers", hu: "Balzers", ro: "Balzers", en: "Balzers" },
    shortDesc: { de: "Die südlichste Gemeinde.", hu: "A legdélibb község.", ro: "Cea mai sudică comună.", en: "The southernmost municipality." }
  },
  {
    id: "LI-005",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5444, 47.1855],
    name: { de: "Planken", hu: "Planken", ro: "Planken", en: "Planken" },
    shortDesc: { de: "Die kleinste Gemeinde Liechtensteins.", hu: "Liechtenstein legkisebb községe.", ro: "Cea mai mică comună din Liechtenstein.", en: "The smallest municipality in Liechtenstein." }
  },
  {
    id: "LI-006",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5166, 47.2000],
    name: { de: "Eschen", hu: "Eschen", ro: "Eschen", en: "Eschen" },
    shortDesc: { de: "Hauptort des Unterlandes.", hu: "Az Unterland fő települése.", ro: "Localitatea principală din Unterland.", en: "Main town of the Unterland." }
  },
  {
    id: "LI-007",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2166],
    name: { de: "Mauren", hu: "Mauren", ro: "Mauren", en: "Mauren" },
    shortDesc: { de: "Gemeinde im Unterland.", hu: "Község az Unterlandban.", ro: "Comună în Unterland.", en: "Municipality in the Unterland." }
  },
  {
    id: "LI-008",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5472, 47.2333],
    name: { de: "Schellenberg", hu: "Schellenberg", ro: "Schellenberg", en: "Schellenberg" },
    shortDesc: { de: "Gemeinde auf dem Eschnerberg.", hu: "Község az Eschnerbergen.", ro: "Comună pe muntele Eschnerberg.", en: "Municipality on the Eschnerberg." }
  },
  {
    id: "LI-009",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2333],
    name: { de: "Ruggell", hu: "Ruggell", ro: "Ruggell", en: "Ruggell" },
    shortDesc: { de: "Die nördlichste Gemeinde.", hu: "A legészakibb község.", ro: "Cea mai nordică comună.", en: "The northernmost municipality." }
  },
  {
    id: "LI-010",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5210, 47.1410],
    name: { de: "Vaduz", hu: "Vaduz", ro: "Vaduz", en: "Vaduz" },
    shortDesc: { de: "Die Hauptstadt des Fürstentums.", hu: "A hercegség fővárosa.", ro: "Capitala principatului.", en: "The capital of the principality." }
  },
  {
    id: "LI-011",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5083, 47.2183],
    name: { de: "Gamprin", hu: "Gamprin", ro: "Gamprin", en: "Gamprin" },
    shortDesc: { de: "Gemeinde im Unterland.", hu: "Község az Unterlandban.", ro: "Comună în Unterland.", en: "Municipality in the Unterland." }
  }
];

export const liechtensteinCities: POI[] = [
  {
    id: "li-city-vaduz",
    type: "city",
    parent: "LI-010",
    coords: [9.5210, 47.1410],
    name: {
      de: "Vaduz",
      hu: "Vaduz",
      ro: "Vaduz",
      en: "Vaduz"
    },
    shortDesc: {
      de: "Die Hauptstadt von Liechtenstein, Sitz des Fürstenhauses.",
      hu: "Liechtenstein fővárosa, a hercegi család székhelye.",
      ro: "Capitala Liechtensteinului, sediul casei princiare.",
      en: "The capital of Liechtenstein, seat of the princely family."
    }
  },
  {
    id: "li-city-schaan",
    type: "city",
    parent: "LI-002",
    coords: [9.4833, 47.1666],
    name: {
      de: "Schaan",
      hu: "Schaan",
      ro: "Schaan",
      en: "Schaan"
    },
    shortDesc: {
      de: "Die größte Gemeinde Liechtensteins und ein wichtiges Wirtschaftszentrum.",
      hu: "Liechtenstein legnagyobb települése és fontos gazdasági központ.",
      ro: "Cea mai mare comună din Liechtenstein și un centru economic important.",
      en: "The largest municipality in Liechtenstein and a major economic center."
    }
  },
  {
    id: "li-city-triesen",
    type: "city",
    parent: "LI-001",
    coords: [9.5333, 47.1000],
    name: {
      de: "Triesen",
      hu: "Triesen",
      ro: "Triesen",
      en: "Triesen"
    },
    shortDesc: {
      de: "Die drittgrößte Gemeinde mit historischen Siedlungen.",
      hu: "A harmadik legnagyobb település történelmi negyedekkel.",
      ro: "A treia cea mai mare comună, cu așezări istorice.",
      en: "The third-largest municipality with historical settlements."
    }
  },
  {
    id: "li-city-balzers",
    type: "city",
    parent: "LI-004",
    coords: [9.5000, 47.0666],
    name: {
      de: "Balzers",
      hu: "Balzers",
      ro: "Balzers",
      en: "Balzers"
    },
    shortDesc: {
      de: "Bekannt für die Burg Gutenberg und den südlichen Charme.",
      hu: "A Gutenberg várról és déli bájáról ismert település.",
      ro: "Cunoscută pentru Castelul Gutenberg și farmecul său sudic.",
      en: "Known for Gutenberg Castle and its southern charm."
    }
  },
  {
    id: "li-city-eschen",
    type: "city",
    parent: "LI-006",
    coords: [9.5166, 47.2000],
    name: {
      de: "Eschen",
      hu: "Eschen",
      ro: "Eschen",
      en: "Eschen"
    },
    shortDesc: {
      de: "Das wirtschaftliche Zentrum des Liechtensteiner Unterlandes.",
      hu: "A liechtensteini Unterland gazdasági központja.",
      ro: "Centrul economic al regiunii Unterland din Liechtenstein.",
      en: "The economic center of the Liechtenstein Unterland."
    }
  },
  {
    id: "li-city-mauren",
    type: "city",
    parent: "LI-007",
    coords: [9.5333, 47.2166],
    name: {
      de: "Mauren",
      hu: "Mauren",
      ro: "Mauren",
      en: "Mauren"
    },
    shortDesc: {
      de: "Gemeinde im Unterland mit reichen archäologischen Funden.",
      hu: "Település az Unterlandban, gazdag régészeti leletekkel.",
      ro: "Comună în Unterland, cu bogate descoperiri arheologice.",
      en: "Municipality in the Unterland with rich archaeological finds."
    }
  },
  {
    id: "li-city-triesenberg",
    type: "city",
    parent: "LI-003",
    coords: [9.5333, 47.1166],
    name: {
      de: "Triesenberg",
      hu: "Triesenberg",
      ro: "Triesenberg",
      en: "Triesenberg"
    },
    shortDesc: {
      de: "Höchstgelegene Gemeinde, gegründet von Walsern.",
      hu: "A legmagasabban fekvő település, amelyet a walserek alapítottak.",
      ro: "Cea mai înaltă comună, fondată de populația Walser.",
      en: "The highest-situated municipality, founded by the Walser people."
    }
  },
  {
    id: "li-city-ruggell",
    type: "city",
    parent: "LI-009",
    coords: [9.5333, 47.2333],
    name: {
      de: "Ruggell",
      hu: "Ruggell",
      ro: "Ruggell",
      en: "Ruggell"
    },
    shortDesc: {
      de: "Die nördlichste und am tiefsten gelegene Gemeinde am Rhein.",
      hu: "A legészakibb és legalacsonyabban fekvő település a Rajna partján.",
      ro: "Cea mai nordică și joasă comună, situată pe Rin.",
      en: "The northernmost and lowest-lying municipality on the Rhine."
    }
  },
  {
    id: "li-city-planken",
    type: "city",
    parent: "LI-005",
    coords: [9.5444, 47.1855],
    name: { de: "Planken", hu: "Planken", ro: "Planken", en: "Planken" },
    description: {
      de: "Die kleinste Gemeinde Liechtensteins liegt auf einer sonnigen Terrasse über dem Rheintal.",
      hu: "Liechtenstein legkisebb községe egy napsütötte teraszon fekszik a Rajna-völgy felett.",
      ro: "Cea mai mică comună din Liechtenstein, situată pe o terasă însorită deasupra văii Rinului.",
      en: "The smallest municipality in Liechtenstein, situated on a sunny terrace above the Rhine Valley."
    },
    facts: {
      de: ["Kleinste Gemeinde", "Historische Walsersiedlung", "Panoramablick"],
      hu: ["Legkisebb község", "Történelmi walser település", "Panorámás kilátás"],
      ro: ["Cea mai mică comună", "Așezare istorică Walser", "Vedere panoramică"],
      en: ["Smallest municipality", "Historic Walser settlement", "Panoramic views"]
    }
  },
  {
    id: "li-city-gamprin",
    type: "city",
    parent: "LI-011",
    coords: [9.5083, 47.2183],
    name: { de: "Gamprin", hu: "Gamprin", ro: "Gamprin", en: "Gamprin" },
    description: {
      de: "Eine Gemeinde im Unterland, die für ihren Freizeitpark und die Nähe zum Rhein bekannt ist.",
      hu: "Község az Unterlandban, amely szabadidőparkjáról és a Rajna közelségéről ismert.",
      ro: "O comună în Unterland, cunoscută pentru parcul său de agrement și proximitatea față de Rin.",
      en: "A municipality in the Unterland, known for its leisure park and proximity to the Rhine."
    },
    facts: {
      de: ["Historischer Fundort Bendern", "Sitz von Industrieunternehmen", "Naherholungsgebiet"],
      hu: ["Benderni történelmi lelőhely", "Ipari vállalatok székhelye", "Pihenőövezet"],
      ro: ["Situl istoric Bendern", "Sediul unor companii industriale", "Zonă de recreere"],
      en: ["Historic site of Bendern", "Home to industrial companies", "Recreational area"]
    }
  }
];

export const liechtensteinCulture: POI[] = [
  {
    id: "li-cult-vaduz-castle",
    type: "culture",
    parent: "LI-010",
    coords: [9.5240, 47.1394],
    name: {
      de: "Schloss Vaduz",
      hu: "Vaduz vára",
      ro: "Castelul Vaduz",
      en: "Vaduz Castle"
    },
    shortDesc: {
      de: "Das Wahrzeichen der Hauptstadt und Residenz der fürstlichen Familie.",
      hu: "A főváros jelképe és a hercegi család rezidenciája.",
      ro: "Simbolul capitalei și reședința familiei princiare.",
      en: "The landmark of the capital and residence of the princely family."
    }
  },
  {
    id: "li-cult-gutenberg-castle",
    type: "culture",
    parent: "LI-004",
    coords: [9.5008, 47.0633],
    name: {
      de: "Burg Gutenberg",
      hu: "Gutenberg-vár",
      ro: "Castelul Gutenberg",
      en: "Gutenberg Castle"
    },
    shortDesc: {
      de: "Eine intakte mittelalterliche Burg in Balzers auf einem markanten Hügel.",
      hu: "Ép középkori vár Balzersben, egy feltűnő dombon.",
      ro: "Un castel medieval intact în Balzers, situat pe un deal proeminent.",
      en: "An intact medieval castle in Balzers, situated on a prominent hill."
    }
  },
  {
    id: "li-cult-kunstmuseum",
    type: "culture",
    parent: "LI-010",
    coords: [9.5222, 47.1400],
    name: {
      de: "Kunstmuseum Liechtenstein",
      hu: "Liechtensteini Művészeti Múzeum",
      ro: "Muzeul de Artă Liechtenstein",
      en: "Kunstmuseum Liechtenstein"
    },
    shortDesc: {
      de: "Museum für moderne und zeitgenössische Kunst in einem schwarzen Kubus.",
      hu: "Modern és kortárs művészeti múzeum egy fekete kockaépületben.",
      ro: "Muzeu de artă modernă și contemporană într-un cub negru.",
      en: "Museum of modern and contemporary art in a black cube building."
    }
  },
  {
    id: "li-cult-landesmuseum",
    type: "culture",
    parent: "LI-010",
    coords: [9.5225, 47.1388],
    name: {
      de: "Liechtensteinisches Landesmuseum",
      hu: "Liechtensteini Nemzeti Múzeum",
      ro: "Muzeul Național Liechtenstein",
      en: "Liechtenstein National Museum"
    },
    shortDesc: {
      de: "Das Nationalmuseum, das Geschichte und Kultur des Landes präsentiert.",
      hu: "A nemzeti múzeum, amely az ország történelmét és kultúráját mutatja be.",
      ro: "Muzeul național care prezintă istoria și cultura țării.",
      en: "The national museum showcasing the history and culture of the country."
    }
  },
  {
    id: "li-cult-red-house",
    type: "culture",
    parent: "LI-010",
    coords: [9.5208, 47.1466],
    name: {
      de: "Rotes Haus",
      hu: "Vörös Ház",
      ro: "Casa Roșie",
      en: "Red House"
    },
    shortDesc: {
      de: "Ein historisches Treppengiebelhaus und eines der Wahrzeichen von Vaduz.",
      hu: "Történelmi, lépcsős oromzatú ház és Vaduz egyik jelképe.",
      ro: "O casă istorică cu fronton în trepte și unul dintre simbolurile Vaduzului.",
      en: "A historic stepped-gable house and one of the landmarks of Vaduz."
    }
  },
  {
    id: "li-cult-walser-museum",
    type: "culture",
    parent: "LI-003",
    coords: [9.5319, 47.1186],
    name: {
      de: "Walsermuseum",
      hu: "Walser Múzeum",
      ro: "Muzeul Walser",
      en: "Walser Museum"
    },
    shortDesc: {
      de: "Heimatmuseum in Triesenberg über das Leben der Walser Bergbauern.",
      hu: "Helytörténeti múzeum Triesenbergben a walser hegyi parasztok életéről.",
      ro: "Muzeu de istorie locală în Triesenberg despre viața fermierilor montani Walser.",
      en: "Local history museum in Triesenberg about the life of Walser mountain farmers."
    }
  },
  {
    id: "li-cult-st-florin",
    type: "culture",
    parent: "LI-010",
    coords: [9.5225, 47.1378],
    name: {
      de: "Kathedrale St. Florin",
      hu: "Szent Florin-katedrális",
      ro: "Catedrala Sfântul Florin",
      en: "St. Florin Cathedral"
    },
    shortDesc: {
      de: "Die neugotische Hauptkirche des Erzbistums Vaduz.",
      hu: "A vaduzi érsekség neogótikus főtemploma.",
      ro: "Biserica principală neogotică a Arhiepiscopiei Vaduz.",
      en: "The neo-Gothic main church of the Archdiocese of Vaduz."
    }
  },
  {
    id: "li-cult-stamp-museum",
    type: "culture",
    parent: "LI-010",
    coords: [9.5222, 47.1394],
    name: {
      de: "Postmuseum",
      hu: "Bélyegmúzeum",
      ro: "Muzeul Poștal",
      en: "Postage Stamp Museum"
    },
    shortDesc: {
      de: "Museum für die berühmten und begehrten Briefmarken Liechtensteins.",
      hu: "A híres és keresett liechtensteini bélyegek múzeuma.",
      ro: "Muzeu dedicat timbrelor celebre și căutate din Liechtenstein.",
      en: "Museum dedicated to the famous and sought-after stamps of Liechtenstein."
    }
  },
  {
    id: "li-cult-treasure-chamber",
    type: "culture",
    parent: "LI-010",
    coords: [9.5220, 47.1390],
    name: {
      de: "Schatzkammer",
      hu: "Kincstár",
      ro: "Camera Tezaurului",
      en: "Treasure Chamber"
    },
    shortDesc: {
      de: "Präsentiert einzigartige Schätze der Fürstenfamilie und des Staates.",
      hu: "A hercegi család és az állam egyedülálló kincseit mutatja be.",
      ro: "Prezintă comori unice ale familiei princiare și ale statului.",
      en: "Showcases unique treasures of the princely family and the state."
    }
  },
  {
    id: "li-cult-parliament",
    type: "culture",
    parent: "LI-010",
    coords: [9.5228, 47.1383],
    name: {
      de: "Landtagsgebäude",
      hu: "Parlament (Landtag)",
      ro: "Clădirea Parlamentului",
      en: "Parliament Building"
    },
    shortDesc: {
      de: "Das moderne Parlamentsgebäude, bekannt als das 'Hohe Haus'.",
      hu: "A modern parlamenti épület, amelyet 'Magas Háznak' is neveznek.",
      ro: "Clădirea modernă a parlamentului, cunoscută sub numele de 'Casa Înaltă'.",
      en: "The modern parliament building, known as the 'High House'."
    }
  },
  {
    id: "li-cult-old-rhine-bridge",
    type: "culture",
    parent: "LI-010",
    coords: [9.5133, 47.1344],
    name: {
      de: "Alte Rheinbrücke",
      hu: "Régi Rajna-híd",
      ro: "Vechiul Pod peste Rin",
      en: "Old Rhine Bridge"
    },
    shortDesc: {
      de: "Die letzte erhaltene Holzbrücke über den Rhein zwischen Vaduz und Sevelen.",
      hu: "Az utolsó fennmaradt fahíd a Rajna felett Vaduz és Sevelen között.",
      ro: "Ultimul pod de lemn conservat peste Rin, între Vaduz și Sevelen.",
      en: "The last surviving wooden bridge over the Rhine between Vaduz and Sevelen."
    }
  },
  {
    id: "li-poi-triesen-marienkapelle",
    type: "culture",
    parent: "LI-001",
    coords: [9.5290, 47.1060],
    name: { de: "St. Mamerten Kapelle", hu: "Szent Mamerten kápolna", ro: "Capela Sf. Mamert", en: "St. Mamertus Chapel" },
    description: {
      de: "Eine der ältesten Sakralbauten des Landes mit wunderschöner Aussicht.",
      hu: "Az ország egyik legrégebbi szakrális építménye, gyönyörű kilátással.",
      ro: "Una dintre cele mai vechi clădiri sacre din țară, cu o priveliște minunată.",
      en: "One of the oldest sacred buildings in the country with a beautiful view."
    },
    facts: {
      de: ["Baujahr ca. 9. Jahrhundert", "Romanischer Stil", "Patronat des Hl. Mamertus"],
      hu: ["Kb. 9. századi építés", "Román stílus", "Szent Mamertus pártfogása"],
      ro: ["Construită în sec. IX", "Stil romanic", "Patronajul Sf. Mamert"],
      en: ["Built around 9th century", "Romanesque style", "Patronage of St. Mamertus"]
    }
  },
  {
    id: "li-poi-schaan-st-peter",
    type: "culture",
    parent: "LI-002",
    coords: [9.4830, 47.1700],
    name: { de: "St. Peter Kirche", hu: "Szent Péter templom", ro: "Biserica Sf. Petru", en: "St. Peter's Church" },
    description: {
      de: "Die älteste Kirche Liechtensteins, erbaut auf römischen Fundamenten.",
      hu: "Liechtenstein legrégebbi temploma, római alapokra épült.",
      ro: "Cea mai veche biserică din Liechtenstein, construită pe fundații romane.",
      en: "The oldest church in Liechtenstein, built on Roman foundations."
    },
    facts: {
      de: ["Spätantike Ursprünge", "Römische Ausgrabungen", "Bedeutendes Denkmal"],
      hu: ["Késő antik eredet", "Római kori ásatások", "Jelentős műemlék"],
      ro: ["Origini antice târzii", "Săpături romane", "Monument important"],
      en: ["Late antique origins", "Roman excavations", "Significant monument"]
    }
  },
  {
    id: "li-poi-eschen-pfruendhaus",
    type: "culture",
    parent: "LI-006",
    coords: [9.5230, 47.2110],
    name: { de: "Pfrundhaus Eschen", hu: "Escheni plébániaház", ro: "Casa Parohială Eschen", en: "Pfrundhaus Eschen" },
    description: {
      de: "Ein historisches Gebäude, das heute als Kulturzentrum und Museum dient.",
      hu: "Történelmi épület, amely ma kulturális központként és múzeumként szolgál.",
      ro: "O clădire istorică ce servește astăzi drept centru cultural și muzeu.",
      en: "A historic building that now serves as a cultural center and museum."
    },
    facts: {
      de: ["Mittelalterlicher Kern", "Kulturelle Veranstaltungen", "Restauriertes Baudenkmal"],
      hu: ["Középkori mag", "Kulturális rendezvények", "Restaurált műemlék"],
      ro: ["Nucleu medieval", "Evenimente culturale", "Monument restaurat"],
      en: ["Medieval core", "Cultural events", "Restored monument"]
    }
  },
  {
    id: "li-poi-schellenberg-obere-burg",
    type: "culture",
    parent: "LI-008",
    coords: [9.5470, 47.2380],
    name: { de: "Burgruine Obere Burg", hu: "Felső-vár romjai", ro: "Ruinele Castelului de Sus", en: "Upper Castle Ruins" },
    description: {
      de: "Die größeren der beiden Burgruinen in Schellenberg, frei zugänglich für Besucher.",
      hu: "A két schellenbergi várrom közül a nagyobbik, szabadon látogatható.",
      ro: "Cea mai mare dintre cele două ruine de castel din Schellenberg, accesibilă vizitatorilor.",
      en: "The larger of the two castle ruins in Schellenberg, freely accessible to visitors."
    },
    facts: {
      de: ["Erbaut um 1200", "Größte Ruine im Land", "Strategische Lage"],
      hu: ["1200 körül épült", "Az ország legnagyobb romvára", "Stratégiai elhelyezkedés"],
      ro: ["Construit în jurul anului 1200", "Cea mai mare ruină din țară", "Poziție strategică"],
      en: ["Built around 1200", "Largest ruins in the country", "Strategic location"]
    }
  },
  {
    id: "li-poi-schellenberg-untere-burg",
    type: "culture",
    parent: "LI-008",
    coords: [9.5590, 47.2430],
    name: { de: "Burgruine Untere Burg", hu: "Alsó-vár romjai", ro: "Ruinele Castelului de Jos", en: "Lower Castle Ruins" },
    description: {
      de: "Eine kleinere, aber historisch bedeutende Burgruine am Nordhang des Eschnerbergs.",
      hu: "Kisebb, de történelmileg jelentős várrom az Eschnerberg északi lejtőjén.",
      ro: "O ruină de castel mai mică, dar semnificativă istoric, pe versantul nordic al muntelui Eschnerberg.",
      en: "A smaller but historically significant castle ruin on the northern slope of the Eschnerberg."
    },
    facts: {
      de: ["Erbaut um 1250", "Geringere Mauerreste", "Historisches Denkmal"],
      hu: ["1250 körül épült", "Kisebb falmaradványok", "Történelmi emlékhely"],
      ro: ["Construit în jurul anului 1250", "Resturi de ziduri reduse", "Monument istoric"],
      en: ["Built around 1250", "Minor wall remains", "Historical monument"]
    }
  }
];

export const liechtensteinNature: POI[] = [
  {
    id: "li-nat-grauspitz",
    type: "nature",
    parent: "LI-001",
    coords: [9.5800, 47.0544],
    name: {
      de: "Vorder Grauspitz",
      hu: "Grauspitz",
      ro: "Grauspitz",
      en: "Grauspitz"
    },
    shortDesc: {
      de: "Der höchste Berg Liechtensteins mit 2599 Metern Höhe im Rätikon.",
      hu: "Liechtenstein legmagasabb hegye a Rätikon hegységben (2599 m).",
      ro: "Cel mai înalt munte din Liechtenstein (2599 m), în masivul Rätikon.",
      en: "The highest mountain in Liechtenstein at 2,599 meters in the Rätikon range."
    }
  },
  {
    id: "li-nat-naafkopf",
    type: "nature",
    parent: "LI-003",
    coords: [9.6055, 47.0608],
    name: {
      de: "Naafkopf",
      hu: "Naafkopf",
      ro: "Naafkopf",
      en: "Naafkopf"
    },
    shortDesc: {
      de: "Ein markanter Grenzberg zwischen Liechtenstein, Österreich und der Schweiz.",
      hu: "Feltűnő határhegy Liechtenstein, Ausztria és Svájc között.",
      ro: "Un munte de frontieră proeminent între Liechtenstein, Austria și Elveția.",
      en: "A prominent border mountain between Liechtenstein, Austria, and Switzerland."
    }
  },
  {
    id: "li-nat-falknis",
    type: "nature",
    parent: "LI-004",
    coords: [9.5658, 47.0513],
    name: {
      de: "Falknis",
      hu: "Falknis",
      ro: "Falknis",
      en: "Falknis"
    },
    shortDesc: {
      de: "Bekannter Berg im Rätikon, der in Heidi von Johanna Spyri erwähnt wird.",
      hu: "Ismert hegy a Rätikonban, amelyet Johanna Spyri 'Heidi' című művében is említenek.",
      ro: "Munte celebru în Rätikon, menționat în cartea Heidi de Johanna Spyri.",
      en: "Well-known mountain in the Rätikon, mentioned in Heidi by Johanna Spyri."
    }
  },
  {
    id: "li-nat-drei-schwestern",
    type: "nature",
    parent: "LI-002",
    coords: [9.5750, 47.1736],
    name: {
      de: "Drei Schwestern",
      hu: "Három Nővér (Drei Schwestern)",
      ro: "Trei Surori (Drei Schwestern)",
      en: "Drei Schwestern (Three Sisters)"
    },
    shortDesc: {
      de: "Legendäre dreigipflige Bergkette und Wahrzeichen der Region.",
      hu: "Legendás, háromcsúcsú hegyvonulat és a régió jelképe.",
      ro: "Un lanț muntos legendar cu trei vârfuri și un simbol al regiunii.",
      en: "Legendary three-peaked mountain range and regional landmark."
    }
  },
  {
    id: "li-nat-sareiserjoch",
    type: "nature",
    parent: "LI-003",
    coords: [9.6166, 47.0988],
    name: {
      de: "Sareiserjoch",
      hu: "Sareiserjoch",
      ro: "Sareiserjoch",
      en: "Sareiserjoch"
    },
    shortDesc: {
      de: "Ein beliebter Pass für Wanderer nahe Malbun mit Panoramablick.",
      hu: "Népszerű hágó a túrázók számára Malbun közelében, panorámás kilátással.",
      ro: "O trecătoare populară pentru drumeții lângă Malbun, cu vederi panoramice.",
      en: "A popular pass for hikers near Malbun offering panoramic views."
    }
  },
  {
    id: "li-nat-ruggeller-riet",
    type: "nature",
    parent: "LI-009",
    coords: [9.5422, 47.2433],
    name: {
      de: "Ruggeller Riet",
      hu: "Ruggeller Riet",
      ro: "Ruggeller Riet",
      en: "Ruggeller Riet"
    },
    shortDesc: {
      de: "Ein wunderschönes Naturschutzgebiet und Torfmoor im Norden des Landes.",
      hu: "Gyönyörű természetvédelmi terület és tőzegláp az ország északi részén.",
      ro: "O rezervație naturală și mlaștină frumoasă în nordul țării.",
      en: "A beautiful nature reserve and peat bog in the north of the country."
    }
  },
  {
    id: "li-nat-samina",
    type: "nature",
    parent: "LI-003",
    coords: [9.5666, 47.1333],
    name: {
      de: "Samina (Fluss)",
      hu: "Samina-folyó",
      ro: "Râul Samina",
      en: "Samina River"
    },
    shortDesc: {
      de: "Ein wilder Wildbach, der durch das Saminatal fließt.",
      hu: "Vadvízi patak, amely a Samina-völgyön keresztül folyik.",
      ro: "Un pârâu sălbatic care curge prin valea Samina.",
      en: "A wild torrent flowing through the Samina valley."
    }
  },
  {
    id: "li-nat-rhine",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.4880, 47.1600],
    name: {
      de: "Alpenrhein",
      hu: "Alpesi Rajna",
      ro: "Rinul Alpin",
      en: "Alpine Rhine"
    },
    shortDesc: {
      de: "Der Fluss bildet die gesamte westliche Grenze zur Schweiz.",
      hu: "A folyó alkotja Svájccal közös teljes nyugati határt.",
      ro: "Râul formează întreaga frontieră vestică cu Elveția.",
      en: "The river forms the entire western border with Switzerland."
    }
  },
  {
    id: "li-nat-steg-reservoir",
    type: "nature",
    parent: "LI-003",
    coords: [9.5744, 47.1130],
    name: {
      de: "Stausee Steg (Gänglesee)",
      hu: "Steg-víztározó (Gänglesee)",
      ro: "Lacul de acumulare Steg",
      en: "Steg Reservoir (Gänglesee)"
    },
    shortDesc: {
      de: "Ein malerischer Bergsee und beliebtes Ausflugsziel für Familien.",
      hu: "Festői hegyi tó és népszerű kirándulóhely családok számára.",
      ro: "Un lac montan pitoresc și o destinație populară pentru familii.",
      en: "A picturesque mountain lake and popular excursion destination for families."
    }
  },
  {
    id: "li-nat-malbun",
    type: "nature",
    parent: "LI-003",
    coords: [9.6083, 47.1027],
    name: {
      de: "Malbun",
      hu: "Malbun síközpont",
      ro: "Stațiunea Malbun",
      en: "Malbun Resort"
    },
    shortDesc: {
      de: "Der wichtigste Ski- und Sommerferienort in Liechtenstein.",
      hu: "Liechtenstein legfontosabb sí- és nyári üdülőhelye.",
      ro: "Principala stațiune de schi și vacanță de vară din Liechtenstein.",
      en: "The main ski and summer holiday resort in Liechtenstein."
    }
  },
  {
    id: "li-poi-planken-gafadura",
    type: "nature",
    parent: "LI-005",
    coords: [9.5700, 47.1820],
    name: { de: "Gafadurahütte", hu: "Gafadura-menedékház", ro: "Cabana Gafadura", en: "Gafadura Hut" },
    description: {
      de: "Eine bewirtschaftete Alpenvereinshütte auf 1428 m Höhe, beliebt bei Wanderern.",
      hu: "Egy 1428 m magasságban fekvő, üzemeltetett alpesi menedékház, népszerű a túrázók körében.",
      ro: "O cabană montană administrată, situată la 1428 m altitudine, populară printar drumeți.",
      en: "A managed alpine hut at 1428m altitude, popular among hikers."
    },
    facts: {
      de: ["Eigentum des Alpenvereins", "Ehemaliges Jagdschloss", "Panoramablick auf das Rheintal"],
      hu: ["Az Alpesi Egyesület tulajdona", "Egykori vadászkastély", "Panoráma a Rajna-völgyre"],
      ro: ["Proprietate a Clubului Alpin", "Fost conac de vânătoare", "Panoramă asupra văii Rinului"],
      en: ["Owned by the Alpine Club", "Former hunting lodge", "Panoramic view of the Rhine Valley"]
    }
  },
  {
    id: "li-poi-mauren-birka",
    type: "nature",
    parent: "LI-007",
    coords: [9.5450, 47.2160],
    name: { de: "Vogelparadies Birka", hu: "Birka madárparadicsom", ro: "Paradisul Păsărilor Birka", en: "Birka Bird Sanctuary" },
    description: {
      de: "Ein wunderschönes Naturschutzgebiet und Park für Vogelliebhaber in Mauren.",
      hu: "Gyönyörű természetvédelmi terület és park a madárbarátok számára Maurenben.",
      ro: "O rezervație naturală frumoasă și un parc pentru iubitorii de păsări în Mauren.",
      en: "A beautiful nature reserve and park for bird lovers in Mauren."
    },
    facts: {
      de: ["Seltene Vogelarten", "Naturlehrpfad", "Beliebtes Ausflugsziel"],
      hu: ["Ritka madárfajok", "Tanösvény", "Népszerű kirándulóhely"],
      ro: ["Specii rare de păsări", "Traseu educativ", "Destinație populară"],
      en: ["Rare bird species", "Nature trail", "Popular excursion destination"]
    }
  },
  {
    id: "li-poi-gamprin-grossabunt",
    type: "nature",
    parent: "LI-011",
    coords: [9.5050, 47.2210],
    name: { de: "Grossabunt Freizeitsee", hu: "Grossabunt szabadidős tó", ro: "Lacul de agrement Grossabunt", en: "Grossabunt Leisure Lake" },
    description: {
      de: "Der einzige Badesee Liechtensteins mit ökologischer Wasseraufbereitung.",
      hu: "Liechtenstein egyetlen fürdőtava ökológiai víztisztítással.",
      ro: "Singurul lac pentru înot din Liechtenstein, cu epurare ecologică a apei.",
      en: "The only swimming lake in Liechtenstein with ecological water treatment."
    },
    facts: {
      de: ["Solarbeheizt", "Kein Chlor", "Sportanlagen vorhanden"],
      hu: ["Napenergiával fűtött", "Klórmentes", "Sportpályák a közelben"],
      ro: ["Încălzit solar", "Fără clor", "Facilități sportive disponibile"],
      en: ["Solar heated", "No chlorine", "Sports facilities available"]
    }
  }
];

export const liechtensteinAllPoi: POI[] = [
  ...liechtensteinRegions,
  ...liechtensteinCities,
  ...liechtensteinCulture,
  ...liechtensteinNature
];
