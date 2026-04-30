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
  },
  {
    id: "LI-001",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1000],
    name: { de: "Triesen", hu: "Triesen", ro: "Triesen", en: "Triesen" },
  },
  {
    id: "LI-002",
    type: "region",
    parent: "LI-ALL",
    coords: [9.4833, 47.1666],
    name: { de: "Schaan", hu: "Schaan", ro: "Schaan", en: "Schaan" },
  },
  {
    id: "LI-003",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1166],
    name: { de: "Triesenberg", hu: "Triesenberg", ro: "Triesenberg", en: "Triesenberg" },
  },
  {
    id: "LI-004",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5000, 47.0666],
    name: { de: "Balzers", hu: "Balzers", ro: "Balzers", en: "Balzers" },
  },
  {
    id: "LI-005",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5444, 47.1855],
    name: { de: "Planken", hu: "Planken", ro: "Planken", en: "Planken" },
  },
  {
    id: "LI-006",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5166, 47.2000],
    name: { de: "Eschen", hu: "Eschen", ro: "Eschen", en: "Eschen" },
  },
  {
    id: "LI-007",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2166],
    name: { de: "Mauren", hu: "Mauren", ro: "Mauren", en: "Mauren" },
  },
  {
    id: "LI-008",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5472, 47.2333],
    name: { de: "Schellenberg", hu: "Schellenberg", ro: "Schellenberg", en: "Schellenberg" },
  },
  {
    id: "LI-009",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2333],
    name: { de: "Ruggell", hu: "Ruggell", ro: "Ruggell", en: "Ruggell" },
  },
  {
    id: "LI-010",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5210, 47.1410],
    name: { de: "Vaduz", hu: "Vaduz", ro: "Vaduz", en: "Vaduz" },
  },
  {
    id: "LI-011",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5083, 47.2183],
    name: { de: "Gamprin", hu: "Gamprin", ro: "Gamprin", en: "Gamprin" },
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
    type: "landmark",
    parent: "LI-010",
    coords: [9.5240, 47.1394],
    name: {
      de: "Schloss Vaduz",
      hu: "Vaduz vára",
      ro: "Castelul Vaduz",
      en: "Vaduz Castle"
    },
  },
  {
    id: "li-cult-gutenberg-castle",
    type: "landmark",
    parent: "LI-004",
    coords: [9.5008, 47.0633],
    name: {
      de: "Burg Gutenberg",
      hu: "Gutenberg-vár",
      ro: "Castelul Gutenberg",
      en: "Gutenberg Castle"
    },
  },
  {
    id: "li-cult-kunstmuseum",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5222, 47.1400],
    name: {
      de: "Kunstmuseum Liechtenstein",
      hu: "Liechtensteini Művészeti Múzeum",
      ro: "Muzeul de Artă Liechtenstein",
      en: "Kunstmuseum Liechtenstein"
    },
  },
  {
    id: "li-cult-landesmuseum",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5225, 47.1388],
    name: {
      de: "Liechtensteinisches Landesmuseum",
      hu: "Liechtensteini Nemzeti Múzeum",
      ro: "Muzeul Național Liechtenstein",
      en: "Liechtenstein National Museum"
    },
  },
  {
    id: "li-cult-red-house",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5208, 47.1466],
    name: {
      de: "Rotes Haus",
      hu: "Vörös Ház",
      ro: "Casa Roșie",
      en: "Red House"
    },
  },
  {
    id: "li-cult-walser-museum",
    type: "landmark",
    parent: "LI-003",
    coords: [9.5319, 47.1186],
    name: {
      de: "Walsermuseum",
      hu: "Walser Múzeum",
      ro: "Muzeul Walser",
      en: "Walser Museum"
    },
  },
  {
    id: "li-cult-st-florin",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5225, 47.1378],
    name: {
      de: "Kathedrale St. Florin",
      hu: "Szent Florin-katedrális",
      ro: "Catedrala Sfântul Florin",
      en: "St. Florin Cathedral"
    },
  },
  {
    id: "li-cult-stamp-museum",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5222, 47.1394],
    name: {
      de: "Postmuseum",
      hu: "Bélyegmúzeum",
      ro: "Muzeul Poștal",
      en: "Postage Stamp Museum"
    },
  },
  {
    id: "li-cult-treasure-chamber",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5220, 47.1390],
    name: {
      de: "Schatzkammer",
      hu: "Kincstár",
      ro: "Camera Tezaurului",
      en: "Treasure Chamber"
    },
  },
  {
    id: "li-cult-parliament",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5228, 47.1383],
    name: {
      de: "Landtagsgebäude",
      hu: "Parlament (Landtag)",
      ro: "Clădirea Parlamentului",
      en: "Parliament Building"
    },
  },
  {
    id: "li-cult-old-rhine-bridge",
    type: "landmark",
    parent: "LI-010",
    coords: [9.5133, 47.1344],
    name: {
      de: "Alte Rheinbrücke",
      hu: "Régi Rajna-híd",
      ro: "Vechiul Pod peste Rin",
      en: "Old Rhine Bridge"
    },
  },
  {
    id: "li-poi-triesen-marienkapelle",
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
    parent: "LI-001",
    coords: [9.5800, 47.0544],
    name: {
      de: "Vorder Grauspitz",
      hu: "Grauspitz",
      ro: "Grauspitz",
      en: "Grauspitz"
    },
  },
  {
    id: "li-nat-naafkopf",
    type: "landmark",
    parent: "LI-003",
    coords: [9.6055, 47.0608],
    name: {
      de: "Naafkopf",
      hu: "Naafkopf",
      ro: "Naafkopf",
      en: "Naafkopf"
    },
  },
  {
    id: "li-nat-falknis",
    type: "landmark",
    parent: "LI-004",
    coords: [9.5658, 47.0513],
    name: {
      de: "Falknis",
      hu: "Falknis",
      ro: "Falknis",
      en: "Falknis"
    },
  },
  {
    id: "li-nat-drei-schwestern",
    type: "landmark",
    parent: "LI-002",
    coords: [9.5750, 47.1736],
    name: {
      de: "Drei Schwestern",
      hu: "Három Nővér (Drei Schwestern)",
      ro: "Trei Surori (Drei Schwestern)",
      en: "Drei Schwestern (Three Sisters)"
    },
  },
  {
    id: "li-nat-sareiserjoch",
    type: "landmark",
    parent: "LI-003",
    coords: [9.6166, 47.0988],
    name: {
      de: "Sareiserjoch",
      hu: "Sareiserjoch",
      ro: "Sareiserjoch",
      en: "Sareiserjoch"
    },
  },
  {
    id: "li-nat-samina",
    type: "landmark",
    parent: "LI-003",
    coords: [9.5666, 47.1333],
    name: {
      de: "Samina (Fluss)",
      hu: "Samina-folyó",
      ro: "Râul Samina",
      en: "Samina River"
    },
  },
  {
    id: "li-nat-rhine",
    type: "landmark",
    parent: "LI-ALL",
    coords: [9.4880, 47.1600],
    name: {
      de: "Alpenrhein",
      hu: "Alpesi Rajna",
      ro: "Rinul Alpin",
      en: "Alpine Rhine"
    },
  },
  {
    id: "li-nat-steg-reservoir",
    type: "landmark",
    parent: "LI-003",
    coords: [9.5744, 47.1130],
    name: {
      de: "Stausee Steg (Gänglesee)",
      hu: "Steg-víztározó (Gänglesee)",
      ro: "Lacul de acumulare Steg",
      en: "Steg Reservoir (Gänglesee)"
    },
  },
  {
    id: "li-nat-malbun",
    type: "landmark",
    parent: "LI-003",
    coords: [9.6083, 47.1027],
    name: {
      de: "Malbun",
      hu: "Malbun síközpont",
      ro: "Stațiunea Malbun",
      en: "Malbun Resort"
    },
  },
  {
    id: "li-poi-planken-gafadura",
    type: "landmark",
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
    type: "landmark",
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
    type: "landmark",
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
