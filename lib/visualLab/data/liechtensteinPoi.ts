// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraLiechtensteinCities } from "./poiExtraLiechtensteinCities";
import { poiExtraLiechtensteinHistory } from "./poiExtraLiechtensteinHistory";
import { poiExtraLiechtensteinOther } from "./poiExtraLiechtensteinOther";

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
  }, image: "/poi-images/country-liechtenstein.webp"};

export const liechtensteinRegions: POI[] = [
  {
    id: "LI-001",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1000],
    name: { de: "Triesen", hu: "Triesen", ro: "Triesen", en: "Triesen" }, image: "/poi-images/LI-001.webp",
    description: {
      de: "Triesen ist die drittgrößte Gemeinde Liechtensteins und bietet historische Kirchen und malerische Bergaussichten.",
      hu: "Triesen Liechtenstein harmadik legnagyobb önkormányzata, történelmi templomokkal és festői hegyi kilátással.",
      ro: "Triesen este a treia cea mai mare municipalitate din Liechtenstein, având biserici istorice și vederi pitorești la munte.",
      en: "Triesen is the third largest municipality in Liechtenstein, featuring historic churches and scenic mountain views."
    },
    facts: {
      de: ["Liegt im Süden des Landes.", "Beherbergt eine bemerkenswerte Weberei aus dem 19. Jahrhundert.", "Bietet hervorragende Wanderwege in die Alpen."],
      hu: ["Az ország déli részén található.", "Itt található egy figyelemre méltó 19. századi szövőmalom.", "Kiváló túraútvonalakat kínál az Alpok felé."],
      ro: ["Situat în sudul țării.", "Găzduiește o moară de țesut notabilă din secolul al XIX-lea.", "Oferă trasee excelente de drumeții spre Alpi."],
      en: ["Located in the south of the country.", "It is home to a notable weaving mill from the 19th century.", "Offers excellent hiking trails towards the Alps."]
    }
  },
  {
    id: "LI-002",
    type: "region",
    parent: "LI-ALL",
    coords: [9.4833, 47.1666],
    name: { de: "Schaan", hu: "Schaan", ro: "Schaan", en: "Schaan" }, image: "/poi-images/LI-002.webp",
    description: {
      de: "Schaan ist die bevölkerungsreichste Gemeinde Liechtensteins und ein wichtiges industrielles und wirtschaftliches Zentrum.",
      hu: "Schaan Liechtenstein legnépesebb önkormányzata, amely fontos ipari és gazdasági központként működik.",
      ro: "Schaan este cea mai populată municipalitate din Liechtenstein, acționând ca un important centru industrial și economic.",
      en: "Schaan is the largest municipality of Liechtenstein by population, acting as an important industrial and economic hub."
    },
    facts: {
      de: ["Liegt zentral im Land, nördlich von Vaduz.", "Heimat großer internationaler Unternehmen.", "Weist archäologische Stätten aus der Römerzeit auf."],
      hu: ["Központilag helyezkedik el az országban, Vaduztól északra.", "Nagy nemzetközi vállalatok otthona.", "A római korból származó régészeti lelőhelyekkel is rendelkezik."],
      ro: ["Este situat central în țară, la nord de Vaduz.", "Găzduiește mari companii internaționale.", "Are situri arheologice din epoca romană."],
      en: ["It is located centrally in the country, just north of Vaduz.", "Home to major international companies.", "Features archaeological sites from the Roman era."]
    }
  },
  {
    id: "LI-003",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.1166],
    name: { de: "Triesenberg", hu: "Triesenberg", ro: "Triesenberg", en: "Triesenberg" }, image: "/poi-images/LI-003.webp",
    description: {
      de: "Triesenberg ist die höchstgelegene Gemeinde in Liechtenstein, bekannt für ihre ausgeprägte Walserkultur und Panoramablicke.",
      hu: "Triesenberg Liechtenstein legmagasabban fekvő önkormányzata, amely különleges walser kultúrájáról és panorámás kilátásairól ismert.",
      ro: "Triesenberg este cea mai înaltă municipalitate din Liechtenstein, cunoscută pentru cultura sa distinctă Walser și vederile panoramice.",
      en: "Triesenberg is the highest municipality in Liechtenstein, known for its distinct Walser culture and panoramic views."
    },
    facts: {
      de: ["Im 14. Jahrhundert von Walser Einwanderern besiedelt.", "Liegt auf einer Höhe von über 800 Metern.", "Der lokale Dialekt unterscheidet sich stark vom Rest des Landes."],
      hu: ["A 14. században walser bevándorlók telepítették be.", "Több mint 800 méteres tengerszint feletti magasságban fekszik.", "A helyi dialektus jelentősen eltér az ország többi részétől."],
      ro: ["Așezată de migranții Walser în secolul al XIV-lea.", "Situată la o altitudine de peste 800 de metri.", "Dialectul local diferă semnificativ de restul țării."],
      en: ["Settled by Walser migrants in the 14th century.", "Located at an altitude of over 800 meters.", "The local dialect differs significantly from the rest of the country."]
    }
  },
  {
    id: "LI-004",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5000, 47.0666],
    name: { de: "Balzers", hu: "Balzers", ro: "Balzers", en: "Balzers" }, image: "/poi-images/LI-004.webp",
    description: {
      de: "Balzers ist ein malerisches Dorf im Süden Liechtensteins, berühmt für die markante Burg Gutenberg.",
      hu: "Balzers egy festői falu Dél-Liechtensteinben, amely híres a kiemelkedő Gutenberg-várról.",
      ro: "Balzers este un sat pitoresc în sudul Liechtensteinului, faimos pentru remarcabilul Castel Gutenberg.",
      en: "Balzers is a picturesque village in southern Liechtenstein, famous for the prominent Gutenberg Castle."
    },
    facts: {
      de: ["Die Burg Gutenberg thront stolz auf einem felsigen Hügel im Dorfzentrum.", "Zur Gemeinde gehört auch das Dorf Mäls.", "Hat eine starke landwirtschaftliche Tradition."],
      hu: ["A Gutenberg-vár büszkén áll egy sziklás dombon a falu központjában.", "Az önkormányzathoz tartozik Mäls falu is.", "Erős mezőgazdasági hagyományokkal rendelkezik."],
      ro: ["Castelul Gutenberg se înalță mândru pe un deal stâncos în centrul satului.", "Municipalitatea include și satul Mäls.", "Are o puternică tradiție agricolă."],
      en: ["Gutenberg Castle stands proudly on a rocky hill in the village center.", "The municipality includes the village of Mäls.", "It has a strong agricultural tradition."]
    }
  },
  {
    id: "LI-005",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5444, 47.1855],
    name: { de: "Planken", hu: "Planken", ro: "Planken", en: "Planken" }, image: "/poi-images/LI-005.webp",
    description: {
      de: "Planken ist die kleinste Gemeinde in Liechtenstein und bietet einen ruhigen Rückzugsort mit herrlichem Blick auf das Rheintal.",
      hu: "Planken Liechtenstein legkisebb önkormányzata, amely csendes menedéket kínál lenyűgöző kilátással a Rajna-völgyre.",
      ro: "Planken este cea mai mică municipalitate din Liechtenstein, oferind o retragere liniștită cu vederi uimitoare asupra Văii Rinului.",
      en: "Planken is the smallest municipality in Liechtenstein, offering a quiet retreat with stunning views of the Rhine Valley."
    },
    facts: {
      de: ["Hat eine Bevölkerung von weniger als 500 Einwohnern.", "Liegt am Westhang des Drei-Schwestern-Massivs.", "Der Name leitet sich von einem lateinischen Wort ab, das 'Lichtung' bedeutet."],
      hu: ["Lakossága kevesebb mint 500 fő.", "A Drei Schwestern-hegység nyugati lejtőjén található.", "Nevét egy latin szóból kapta, ami 'tisztást' jelent."],
      ro: ["Are o populație de sub 500 de locuitori.", "Situat pe versantul vestic al masivului Drei Schwestern.", "Numele provine de la un cuvânt latin care înseamnă 'luminiș'."],
      en: ["It has a population of less than 500 residents.", "Located on the western slope of the Drei Schwestern massif.", "It is named after a Latin word meaning 'clearing'."]
    }
  },
  {
    id: "LI-006",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5166, 47.2000],
    name: { de: "Eschen", hu: "Eschen", ro: "Eschen", en: "Eschen" }, image: "/poi-images/LI-006.webp",
    description: {
      de: "Eschen ist der Hauptort des liechtensteinischen Unterlandes und bietet eine Mischung aus moderner Industrie und historischen Stätten.",
      hu: "Eschen a liechtensteini Unterland fő önkormányzata, a modern ipar és történelmi helyszínek keverékével.",
      ro: "Eschen este principala municipalitate din Unterlandul Liechtensteinului, cu un amestec de industrie modernă și situri istorice.",
      en: "Eschen is the principal municipality of the Liechtenstein Unterland, featuring a mix of modern industry and historical sites."
    },
    facts: {
      de: ["Es ist die größte Gemeinde im nördlichen Teil des Landes.", "Das Pfrundhaus ist ein bekanntes historisches Gebäude hier.", "Gilt oft als das wirtschaftliche Zentrum des Unterlandes."],
      hu: ["Az ország északi részének legnagyobb közössége.", "A Pfrundhaus egy jól ismert történelmi épület itt.", "Gyakran az Unterland gazdasági központjának tekintik."],
      ro: ["Este cea mai mare comunitate din partea de nord a țării.", "Pfrundhaus este o clădire istorică bine cunoscută aici.", "Considerat adesea centrul economic al Unterlandului."],
      en: ["It is the largest community in the northern part of the country.", "The Pfrundhaus is a well-known historical building here.", "Often considered the economic center of the Unterland."]
    }
  },
  {
    id: "LI-007",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2166],
    name: { de: "Mauren", hu: "Mauren", ro: "Mauren", en: "Mauren" }, image: "/poi-images/LI-007.webp",
    description: {
      de: "Mauren ist eine Gemeinde im Unterland, bekannt für ihre reiche Geschichte und das wunderschöne Vogelparadies Birka.",
      hu: "Mauren egy önkormányzat az Unterland régióban, gazdag történelméről és a gyönyörű Birka Madárparadicsomról ismert.",
      ro: "Mauren este o municipalitate în regiunea Unterland, cunoscută pentru istoria sa bogată și frumosul Paradis al Păsărilor Birka.",
      en: "Mauren is a municipality in the Unterland region, known for its rich history and the beautiful Birka Bird Sanctuary."
    },
    facts: {
      de: ["Erstmals im 12. Jahrhundert urkundlich erwähnt.", "Umfasst auch das Dorf Schaanwald.", "Verfügt über ein Denkmal für Peter Kaiser, einen berühmten lokalen Historiker."],
      hu: ["Először a 12. században említik oklevelekben.", "Magában foglalja Schaanwald falut.", "Emlékművet állítottak Peter Kaisernek, a híres helyi történésznek."],
      ro: ["Menționat pentru prima dată în documente în secolul al XII-lea.", "Include și satul Schaanwald.", "Are un memorial dedicat lui Peter Kaiser, un faimos istoric local."],
      en: ["First mentioned in documents in the 12th century.", "Includes the village of Schaanwald.", "Features a memorial dedicated to Peter Kaiser, a famous local historian."]
    }
  },
  {
    id: "LI-008",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5472, 47.2333],
    name: { de: "Schellenberg", hu: "Schellenberg", ro: "Schellenberg", en: "Schellenberg" }, image: "/poi-images/LI-008.webp"},
  {
    id: "LI-009",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5333, 47.2333],
    name: { de: "Ruggell", hu: "Ruggell", ro: "Ruggell", en: "Ruggell" }, image: "/poi-images/LI-009.webp"},
  {
    id: "LI-010",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5210, 47.1410],
    name: { de: "Vaduz", hu: "Vaduz", ro: "Vaduz", en: "Vaduz" }, image: "/poi-images/LI-010.webp"},
  {
    id: "LI-011",
    type: "region",
    parent: "LI-ALL",
    coords: [9.5083, 47.2183],
    name: { de: "Gamprin", hu: "Gamprin", ro: "Gamprin", en: "Gamprin" }, image: "/poi-images/LI-011.webp"}
];

export const liechtensteinCities: POI[] = [
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
    }, image: "/poi-images/li-cult-gutenberg-castle.webp"},
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
    }, image: "/poi-images/li-cult-kunstmuseum.webp"},
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
    }, image: "/poi-images/li-cult-landesmuseum.webp"},
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
    }, image: "/poi-images/li-cult-red-house.webp"},
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
    }, image: "/poi-images/li-cult-walser-museum.webp"},
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
    }, image: "/poi-images/li-cult-st-florin.webp"},
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
    }, image: "/poi-images/li-cult-stamp-museum.webp"},
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
    }, image: "/poi-images/li-cult-treasure-chamber.webp"},
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
    }, image: "/poi-images/li-cult-parliament.webp"},
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
    }, image: "/poi-images/li-cult-old-rhine-bridge.webp"},
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
    }, image: "/poi-images/li-poi-triesen-marienkapelle.webp"},
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
    }, image: "/poi-images/li-poi-schaan-st-peter.webp"},
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
    }, image: "/poi-images/li-poi-eschen-pfruendhaus.webp"},
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
    }, image: "/poi-images/li-poi-schellenberg-obere-burg.webp"},
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
    }, image: "/poi-images/li-poi-schellenberg-untere-burg.webp"}
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
    }, image: "/poi-images/li-nat-naafkopf.webp"},
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
    }, image: "/poi-images/li-nat-falknis.webp"},
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
    }, image: "/poi-images/li-nat-drei-schwestern.webp"},
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
    }, image: "/poi-images/li-nat-sareiserjoch.webp"},
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
    }, image: "/poi-images/li-nat-samina.webp"},
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
    }, image: "/poi-images/li-nat-rhine.webp"},
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
    }, image: "/poi-images/li-nat-steg-reservoir.webp"},
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
    }, image: "/poi-images/li-nat-malbun.webp"},
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
    }, image: "/poi-images/li-poi-planken-gafadura.webp"},
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
    }, image: "/poi-images/li-poi-mauren-birka.webp"},
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

export const liechtensteinAllPoi: POI[] = [...liechtensteinRegions,
  ...liechtensteinCities,
  ...liechtensteinCulture,
  ...liechtensteinNature, ...poiExtraLiechtensteinCities, ...poiExtraLiechtensteinHistory, ...poiExtraLiechtensteinOther];

