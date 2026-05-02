import { POI } from "./poi";
import { poiExtraMaltaCities } from "./poiExtraMaltaCities";
import { poiExtraMaltaOther } from "./poiExtraMaltaOther";

export const maltaPoi: POI[] = [
  // Country
  {
    id: "country-malta",
    name: { de: "Malta", hu: "Málta", ro: "Malta", en: "Malta" },
    type: "country",
    coords: [14.3754, 35.9375],
    parent: undefined,
    description: {
      de: "Malta ist ein kleiner, dicht besiedelter Inselstaat im Mittelmeer mit einer reichen Geschichte.",
      hu: "Málta egy kis, sűrűn lakott szigetország a Földközi-tengeren, gazdag történelemmel.",
      ro: "Malta este o mică țară insulară dens populată din Marea Mediterană, cu o istorie bogată.",
      en: "Malta is a small, densely populated island country in the Mediterranean Sea with a rich history."
    },
    facts: {
      de: ["Besteht aus drei bewohnten Inseln", "Hat zwei Amtssprachen", "EU-Mitglied seit 2004"],
      hu: ["Három lakott szigetből áll", "Két hivatalos nyelve van", "2004 óta az EU tagja"],
      ro: ["Formată din trei insule locuite", "Are două limbi oficiale", "Membră UE din 2004"],
      en: ["Consists of three inhabited islands", "Has two official languages", "EU member since 2004"]
    }
  },

  // MT-001 Kalkara
  {
    id: "poi-mt-fort-ricasoli",
    name: { de: "Fort Ricasoli", hu: "Ricasoli-erőd", ro: "Fortul Ricasoli", en: "Fort Ricasoli" },
    type: "historical",
    parent: "MT-001",
    coords: [14.5272, 35.8978],
    description: {
      de: "Die größte Festung Maltas, oft als Filmkulisse genutzt.",
      hu: "Málta legnagyobb erődítménye, gyakran használt filmforgatási helyszín.",
      ro: "Cea mai mare fortificație din Malta, folosită frecvent ca decor de film.",
      en: "The largest fortress in Malta, frequently used as a filming location."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Diente als Kulisse für 'Gladiator'", "Bewacht die Einfahrt zum Grand Harbour"],
      hu: ["A 17. században épült", "A 'Gladiátor' forgatási helyszíne volt", "A Grand Harbour bejáratát őrzi"],
      ro: ["Construit în secolul al XVII-lea", "Loc de filmare pentru 'Gladiator'", "Păzește intrarea în Marele Port"],
      en: ["Built in the 17th century", "Used as a set for 'Gladiator'", "Guards the entrance to the Grand Harbour"]
    }
  },
  {
    id: "poi-mt-esplora",
    name: { de: "Esplora Science Centre", hu: "Esplora Tudományos Központ", ro: "Esplora Science Centre", en: "Esplora Science Centre" },
    type: "landmark",
    parent: "MT-001",
    coords: [14.5233, 35.8936],
    description: {
      de: "Ein interaktives Wissenschaftszentrum in einem ehemaligen Krankenhaus.",
      hu: "Interaktív tudományos központ egy korábbi kórház épületében.",
      ro: "Centru interactiv de știință situat într-un fost spital.",
      en: "Interactive science centre located in a former naval hospital."
    },
    facts: {
      de: ["Bietet über 200 Exponate", "Verfügt über ein Planetarium", "Sitz im historischen Villa Bighi"],
      hu: ["Több mint 200 kiállítási tárgyat kínál", "Rendelkezik planetáriummal", "A történelmi Villa Bighi területén található"],
      ro: ["Peste 200 de exponate", "Dispune de un planetariu", "Sediul în istorica Vilă Bighi"],
      en: ["Features over 200 exhibits", "Includes a planetarium", "Housed in the historic Villa Bighi"]
    }
  },

  // MT-002 Valletta
  {
    id: "poi-mt-valletta",
    name: { de: "St. John's Co-Cathedral", hu: "Szent János-társkatedrális", ro: "Co-Catedrala Sf. Ioan", en: "St. John's Co-Cathedral" },
    type: "state-capital",
    coords: [14.5125, 35.8975],
    parent: "MT-002",
    description: {
      de: "Das Herz von Valletta, berühmt für seine barocke Pracht.",
      hu: "Valletta szíve, híres barokk pompájáról.",
      ro: "Inima Vallettei, faimoasă pentru splendoarea barocă.",
      en: "The heart of Valletta, famous for its baroque splendor."
    },
    facts: {
      de: ["Beherbergt Caravaggio-Gemälde", "Erbaut vom Johanniterorden", "UNESCO-Welterbe"],
      hu: ["Caravaggio festményeit őrzi", "A Máltai Lovagrend építette", "UNESCO Világörökség"],
      ro: ["Găzduiește picturi de Caravaggio", "Construită de Ordinul Cavalerilor", "Patrimoniu UNESCO"],
      en: ["Houses Caravaggio masterpieces", "Built by the Order of St. John", "UNESCO World Heritage site"]
    }
  },
  {
    id: "poi-mt-upper-barrakka",
    name: { de: "Upper Barrakka Gardens", hu: "Felső Barrakka-kertek", ro: "Grădinile Barrakka de Sus", en: "Upper Barrakka Gardens" },
    type: "landmark",
    parent: "MT-002",
    coords: [14.5122, 35.8949],
    description: {
      de: "Ein öffentlicher Garten mit Panoramablick auf den Grand Harbour.",
      hu: "Publikus kert panorámás kilátással a Grand Harbourra.",
      ro: "Grădină publică cu vedere panoramică asupra Marelui Port.",
      en: "Public garden offering panoramic views of the Grand Harbour."
    },
    facts: {
      de: ["Höchster Punkt der Stadtmauer", "Täglich feuert die Kanone um 12 und 16 Uhr", "Ehemals privater Garten der italienischen Ritter"],
      hu: ["A városfal legmagasabb pontja", "Naponta 12-kor és 16-kor ágyúszó hallható", "Eredetileg az olasz lovagok privát kertje volt"],
      ro: ["Cel mai înalt punct al zidurilor orașului", "Salut cu tunul zilnic la 12:00 și 16:00", "Fostă grădină privată a cavalerilor italieni"],
      en: ["Highest point of the city walls", "Saluting Battery fires daily at 12pm and 4pm", "Formerly a private garden for Italian knights"]
    }
  },
  {
    id: "poi-mt-archaeology",
    name: { de: "Archäologisches Nationalmuseum", hu: "Nemzeti Régészeti Múzeum", ro: "Muzeul Național de Arheologie", en: "National Museum of Archaeology" },
    type: "landmark",
    parent: "MT-002",
    coords: [14.5111, 35.8972],
    description: {
      de: "Ausstellung bedeutender Funde aus der maltesischen Vorgeschichte.",
      hu: "Fontos máltai őskori leletek kiállítása.",
      ro: "Expoziție de artefacte importante din preistoria Maltei.",
      en: "Displays significant artifacts from Malta's prehistoric periods."
    },
    facts: {
      de: ["Beherbergt die 'Schlafende Dame'", "In der Auberge de Provence gelegen", "Präsentiert die 'Venus von Malta'"],
      hu: ["Itt látható az 'Alvó hölgy' szobra", "Az Auberge de Provence épületében található", "Bemutatja a 'Máltai Vénuszt'"],
      ro: ["Găzduiește statuia 'Femeia adormită'", "Situat în Auberge de Provence", "Include artefacte de la templele megalitice"],
      en: ["Houses the famous 'Sleeping Lady' statue", "Located in the historic Auberge de Provence", "Contains findings from the island's megalithic temples"]
    }
  },
  {
    id: "poi-mt-manoel-theatre",
    name: { de: "Manoel Theatre", hu: "Manoel Színház", ro: "Teatrul Manoel", en: "Manoel Theatre" },
    type: "landmark",
    coords: [14.5125, 35.8997],
    parent: "MT-002",
    description: {
      de: "Eines der ältesten noch bespielten Theater der Welt.",
      hu: "A világ egyik legrégebbi máig működő színháza.",
      ro: "Unul dintre cele mai vechi teatre funcționale din lume.",
      en: "One of the oldest working theatres in the world."
    },
    facts: {
      de: ["Erbaut im Jahr 1731", "Prachtvoller barocker Innenraum", "Nationaltheater von Malta"],
      hu: ["1731-ben épült", "Pompás barokk belső tér", "Málta nemzeti színháza"],
      ro: ["Construit în anul 1731", "Interior baroc splendid", "Teatrul național al Maltei"],
      en: ["Commissioned by Grand Master Manoel de Vilhena", "Features a beautiful oval-shaped auditorium", "A major cultural venue in Valletta"]
    }
  },

  // MT-003 Sliema
  {
    id: "poi-mt-sliema-promenade",
    name: { de: "Sliema Promenade", hu: "Sliema sétány", ro: "Promenada Sliema", en: "Sliema Promenade" },
    type: "landmark",
    parent: "MT-003",
    coords: [14.5033, 35.9142],
    description: {
      de: "Ein beliebter Weg entlang der Küste mit vielen Cafés.",
      hu: "Népszerű tengerparti sétány számos kávézóval.",
      ro: "O faimoasă faleză de-a lungul coastei, plină de cafenele.",
      en: "A popular coastal walkway lined with cafes and restaurants."
    },
    facts: {
      de: ["Erstreckt sich über mehrere Kilometer", "Ideal zum Joggen und Spazierengehen", "Bietet Blick auf Valletta"],
      hu: ["Több kilométer hosszan nyúlik el", "Ideális kocogáshoz és sétához", "Kilátást nyújt Vallettára"],
      ro: ["Se întinde pe câțiva kilometri", "Ideală pentru jogging și plimbări", "Oferă vedere spre Valletta"],
      en: ["Stretches for several kilometers", "Ideal for jogging and walking", "Offers views across to Valletta"]
    }
  },
  {
    id: "poi-mt-tigne-point",
    name: { de: "Tigné Point", hu: "Tigné Point", ro: "Tigné Point", en: "Tigné Point" },
    type: "city",
    parent: "MT-003",
    coords: [14.5105, 35.9083],
    description: {
      de: "Ein modernes Wohn- und Einkaufsviertel auf einer Halbinsel.",
      hu: "Modern lakó- és bevásárlónegyed egy félszigeten.",
      ro: "O zonă rezidențială și comercială modernă pe o peninsulă.",
      en: "A modern residential and commercial area on a peninsula."
    },
    facts: {
      de: ["Beherbergt das The Point Einkaufszentrum", "Standort des historischen Fort Tigné", "Autofreie Zone"],
      hu: ["Itt található a The Point bevásárlóközpont", "A történelmi Fort Tigné helyszíne", "Autómentes övezet"],
      ro: ["Găzduiește centrul comercial The Point", "Locația istoricului Fort Tigné", "Zonă pietonală"],
      en: ["Houses 'The Point' shopping mall", "Site of the historic Fort Tigné", "Car-free pedestrian zone"]
    }
  },
  {
    id: "poi-mt-st-julians-tower",
    name: { de: "St. Julian's Tower", hu: "Szent Júlia-torony", ro: "Turnul Sf. Iulian", en: "St. Julian's Tower" },
    type: "historical",
    parent: "MT-003",
    coords: [14.4983, 35.9189],
    description: {
      de: "Ein alter Wachturm, der heute als Restaurant dient.",
      hu: "Régi őrtorony, amely ma étteremként működik.",
      ro: "Un vechi turn de veghe care acum servește ca restaurant.",
      en: "A coastal watchtower repurposed as a restaurant."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Teil der Küstenverteidigung", "Wahrzeichen der Sliema-Promenade"],
      hu: ["A 17. században épült", "A parti védelem része volt", "A Sliema sétány jelképe"],
      ro: ["Construit în secolul XVII", "Parte a apărării de coastă", "Simbol pe faleza din Sliema"],
      en: ["Built by the Order of Saint John", "One of the De Redin towers", "Focal point for walkers along the front"]
    }
  },

  // MT-004 San Giljan
  {
    id: "poi-mt-spinola-bay",
    name: { de: "Spinola Bay", hu: "Spinola-öböl", ro: "Golful Spinola", en: "Spinola Bay" },
    type: "landmark",
    parent: "MT-004",
    coords: [14.4908, 35.9189],
    description: {
      de: "Einer der malerischsten Orte Maltas mit Fischerbooten.",
      hu: "Málta egyik legfestőibb helye halászcsónakokkal.",
      ro: "Unul dintre cele mai pitorești locuri din Malta, cu bărci de pescuit.",
      en: "One of Malta's most picturesque spots with traditional fishing boats."
    },
    facts: {
      de: ["Bekannt für das 'LOVE'-Denkmal", "Viele gehobene Restaurants", "Beherbergt den Spinola Palace"],
      hu: ["A 'LOVE' emlékműről ismert", "Számos színvonalas étterem található itt", "Itt áll a Spinola-palota"],
      ro: ["Cunoscut pentru monumentul 'LOVE'", "Multe restaurante rafinate", "Găzduiește Palatul Spinola"],
      en: ["Famous for the 'LOVE' monument", "Home to many upscale restaurants", "Features the historic Spinola Palace"]
    }
  },
  {
    id: "poi-mt-paceville",
    name: { de: "Paceville", hu: "Paceville", ro: "Paceville", en: "Paceville" },
    type: "landmark",
    parent: "MT-004",
    coords: [14.4886, 35.9222],
    description: {
      de: "Das Zentrum des malthitischen Nachtlebens.",
      hu: "A máltai éjszakai élet központja.",
      ro: "Centrul vieții de noapte din Malta.",
      en: "The hub of Maltese nightlife and entertainment."
    },
    facts: {
      de: ["Hohe Dichte an Clubs und Bars", "Beliebt bei Sprachschülern", "Hat ein großes Kino und Bowlingcenter"],
      hu: ["Sűrűn találhatók itt klubok és bárok", "Népszerű a nyelvtanulók körében", "Nagy mozival és bowling központtal rendelkezik"],
      ro: ["Densitate mare de cluburi și baruri", "Popular printre studenții străini", "Include un cinematograf mare și bowling"],
      en: ["High density of clubs and bars", "Popular with international students", "Features a large cinema and bowling alley"]
    }
  },
  {
    id: "poi-mt-portomaso",
    name: { de: "Portomaso Marina", hu: "Portomaso kikötő", ro: "Marina Portomaso", en: "Portomaso Marina" },
    type: "landmark",
    parent: "MT-004",
    coords: [14.4925, 35.9208],
    description: {
      de: "Ein exklusiver Yachthafen mit dem höchsten Gebäude Maltas.",
      hu: "Exkluzív jachtkikötő Málta legmagasabb épületével.",
      ro: "O marină exclusivistă cu cea mai înaltă clădire din Malta.",
      en: "An exclusive waterfront development with Malta's tallest tower."
    },
    facts: {
      de: ["Sitz des Hilton Malta", "Luxuriöse Wohneinheiten", "Bietet erstklassige Restaurants"],
      hu: ["A Hilton Malta helyszíne", "Luxuslakások", "Kiváló éttermeket kínál"],
      ro: ["Locația hotelului Hilton Malta", "Locuințe de lux", "Restaurante de clasă mondială"],
      en: ["Home to the Portomaso Business Tower", "Award-winning marina design", "Center for upscale dining and luxury shopping"]
    }
  },

  // MT-005 Pembroke
  {
    id: "poi-mt-pembroke-garden",
    name: { de: "Pembroke Heritage Park", hu: "Pembroke Örökség Park", ro: "Parcul Pembroke Heritage", en: "Pembroke Heritage Park" },
    type: "landmark",
    parent: "MT-005",
    coords: [14.4789, 35.9325],
    description: {
      de: "Eine ehemalige Militärzone, die heute ein Naturschutzgebiet ist.",
      hu: "Korábbi katonai övezet, amely ma természetvédelmi terület.",
      ro: "O fostă zonă militară, acum rezervație naturală.",
      en: "A former military zone that is now a protected nature area."
    },
    facts: {
      de: ["Enthält seltene endemische Pflanzen", "Beliebt für Wanderungen", "Reste britischer Kasernen"],
      hu: ["Ritka endemikus növényeket tartalmaz", "Népszerű túrahelyszín", "Brit laktanyák maradványai"],
      ro: ["Conține plante endemice rare", "Popular pentru drumeții", "Resturi de cazărmi britanice"],
      en: ["Contains rare endemic plants", "Popular for hiking and walking", "Remnants of British barracks"]
    }
  },
  {
    id: "poi-mt-madliena-tower",
    name: { de: "Madliena Tower", hu: "Madliena-torony", ro: "Turnul Madliena", en: "Madliena Tower" },
    type: "historical",
    parent: "MT-005",
    coords: [14.4722, 35.9344],
    description: {
      de: "Ein Wachturm aus dem 17. Jahrhundert an der Küste.",
      hu: "17. századi őrtorony a tengerparton.",
      ro: "Un turn de veghe din secolul al XVII-lea pe coastă.",
      en: "A 17th-century coastal watchtower."
    },
    facts: {
      de: ["Teil der De Redin Türme", "Überblickt den Norden der Insel", "Diente der Verteidigung gegen Piraten"],
      hu: ["A De Redin tornyok része", "A sziget északi részére nyújt kilátást", "Kalózok elleni védekezést szolgálta"],
      ro: ["Parte a turnurilor De Redin", "Supraveghează nordul insulei", "Folosit pentru apărare împotriva piraților"],
      en: ["One of the De Redin towers", "Overlooks the northern coast", "Built to defend against pirate raids"]
    }
  },

  // MT-006 Naxxar
  {
    id: "poi-mt-palazzo-parisio",
    name: { de: "Palazzo Parisio", hu: "Palazzo Parisio", ro: "Palatul Parisio", en: "Palazzo Parisio" },
    type: "historical",
    parent: "MT-006",
    coords: [14.4444, 35.9147],
    description: {
      de: "Ein prachtvoller Adelspalast mit wunderschönen Gärten.",
      hu: "Pompás nemesi palota gyönyörű kertekkel.",
      ro: "Un palat nobiliar splendid cu grădini superbe.",
      en: "A grand aristocratic palace with beautiful landscaped gardens."
    },
    facts: {
      de: ["Wird oft 'Mini-Versailles' genannt", "Beherbergt ein exquisites Restaurant", "Privatbesitz der Familie Scicluna"],
      hu: ["Gyakran 'Mini-Versailles'-ként emlegetik", "Kiváló étteremnek ad otthont", "A Scicluna család magántulajdona"],
      ro: ["Supranumit 'Micul Versailles'", "Găzduiește un restaurant rafinat", "Proprietatea privată a familiei Scicluna"],
      en: ["Often called 'Mini Versailles'", "Houses an exquisite restaurant", "Owned by the Scicluna family"]
    }
  },
  {
    id: "poi-mt-salina-pans",
    name: { de: "Salina Salzpfannen", hu: "Salina sólepárlók", ro: "Salinele din Salina", en: "Salina Salt Pans" },
    type: "landmark",
    parent: "MT-006",
    coords: [14.4258, 35.9458],
    description: {
      de: "Historische Salzpfannen zur Meersalzgewinnung.",
      hu: "Történelmi sólepárlók a tengeri só kinyerésére.",
      ro: "Saline istorice pentru extracția sării marine.",
      en: "Historic salt pans used for sea salt production."
    },
    facts: {
      de: ["Erbaut von den Rittern", "Heute ein Naturschutzgebiet für Vögel", "In der Nähe der Kennedy Grove"],
      hu: ["A lovagok építették", "Ma madárvédelmi terület", "A Kennedy Grove közelében található"],
      ro: ["Construite de cavalerii de Malta", "Acum rezervație pentru păsări", "Lângă Kennedy Grove"],
      en: ["Built by the Knights of St. John", "Now a protected bird sanctuary", "Located near Kennedy Grove"]
    }
  },
  {
    id: "poi-mt-wignacourt-tower",
    name: { de: "Wignacourt Tower", hu: "Wignacourt-torony", ro: "Turnul Wignacourt", en: "Wignacourt Tower" },
    type: "historical",
    parent: "MT-007",
    coords: [14.4022, 35.9489],
    description: {
      de: "Der älteste erhaltene Wachturm Maltas.",
      hu: "Málta legrégebbi fennmaradt őrtornya.",
      ro: "Cel mai vechi turn de veghe conservat din Malta.",
      en: "Malta's oldest surviving coastal watchtower."
    },
    facts: {
      de: ["Erbaut im Jahr 1610", "Diente als Festung gegen Seeangriffe", "Beherbergt heute ein Museum"],
      hu: ["1610-ben épült", "Erődként szolgált a tengeri támadások ellen", "Ma múzeumnak ad otthont"],
      ro: ["Construit în anul 1610", "Folosit ca fortăreață împotriva atacurilor maritime", "Găzduiește un mic muzeu"],
      en: ["The first of the Wignacourt towers", "Commanding position over St. Paul's Bay", "Restored and open to the public"]
    }
  },

  // MT-008 Mellieħa
  {
    id: "poi-mt-mellieha-bay",
    name: { de: "Mellieħa Bay", hu: "Mellieħa-öböl", ro: "Golful Mellieħa", en: "Mellieħa Bay" },
    type: "landmark",
    coords: [14.3533, 35.9733],
    parent: "MT-008",
    description: {
      de: "Der längste Sandstrand Maltas.",
      hu: "Málta leghosszabb homokos strandja.",
      ro: "Cea mai lungă plajă de nisip din Malta.",
      en: "The longest sandy beach in Malta."
    },
    facts: {
      de: ["Flaches Wasser, ideal für Kinder", "Wassersportmöglichkeiten", "Auch Għadira Bay genannt"],
      hu: ["Sekély víz, ideális gyerekeknek", "Vízisport lehetőségek", "Għadira-öbölként is ismert"],
      ro: ["Apă puțin adâncă, ideală pentru copii", "Sporturi nautice", "Cunoscută și ca Golful Għadira"],
      en: ["Shallow water, ideal for families", "Center for water sports", "Also known as Għadira Bay"]
    }
  },
  {
    id: "poi-mt-red-tower",
    name: { de: "St. Agatha's Tower (Roter Turm)", hu: "Szent Ágota-torony (Vörös torony)", ro: "Turnul Sf. Agata (Turnul Roșu)", en: "St. Agatha's Tower (Red Tower)" },
    type: "historical",
    parent: "MT-008",
    coords: [14.3425, 35.9753],
    description: {
      de: "Ein markanter roter Festungsturm auf dem Kamm von Marfa.",
      hu: "Jellegzetes vörös erődített torony a Marfa-gerincen.",
      ro: "Un turn fortificat roșu distinctiv pe creasta Marfa.",
      en: "A distinctive red fortified tower on the Marfa Ridge."
    },
    facts: {
      de: ["1649 erbaut", "Bietet Blick auf Gozo und Comino", "Vier Ecktürme"],
      hu: ["1649-ben épült", "Kilátást nyújt Gozóra és Cominóra", "Négy saroktoronnyal rendelkezik"],
      ro: ["Construit în 1649", "Vedere spre Gozo și Comino", "Are patru turnuri de colț"],
      en: ["Built in 1649", "Overlooks Gozo and Comino", "Features four corner turrets"]
    }
  },
  {
    id: "poi-mt-popeye-village",
    name: { de: "Popeye Village", hu: "Popeye falu", ro: "Satul Popeye", en: "Popeye Village" },
    type: "landmark",
    parent: "MT-008",
    coords: [14.3411, 35.9606],
    description: {
      de: "Ehemaliges Filmset für das Popeye-Musical von 1980.",
      hu: "Az 1980-as Popeye musical egykori díszletfaluja.",
      ro: "Fostul platou de filmare pentru musicalul Popeye din 1980.",
      en: "Former film set for the 1980 Popeye musical, now a theme park."
    },
    facts: {
      de: ["In der Anchor Bay gelegen", "Besteht aus 19 bunten Holzhäusern", "Ganzjährig für Touristen geöffnet"],
      hu: ["Az Anchor-öbölben található", "19 színes faházból áll", "Egész évben látogatható"],
      ro: ["Situat în Golful Anchor", "Format din 19 case de lemn colorate", "Deschis tot anul pentru turiști"],
      en: ["Original set of the movie starring Robin Williams", "Offers boat rides around the bay", "Features live animation shows"]
    }
  },
  {
    id: "poi-mt-ghadira-nature",
    name: { de: "Għadira Naturschutzgebiet", hu: "Għadira természetvédelmi terület", ro: "Rezervația Naturală Għadira", en: "Għadira Nature Reserve" },
    type: "landmark",
    parent: "MT-008",
    coords: [14.3483, 35.97],
    description: {
      de: "Wichtiges Feuchtgebiet für Zugvögel.",
      hu: "Fontos vizes élőhely a költöző madarak számára.",
      ro: "Zonă umedă importantă pentru păsările migratoare.",
      en: "The largest remaining area of salt marsh in Malta."
    },
    facts: {
      de: ["Lebensraum für über 200 Vogelarten", "Seltenes Ökosystem auf Malta", "Vogelbeobachtungshütten vorhanden"],
      hu: ["Több mint 200 madárfaj élőhelye", "Ritka ökoszisztéma Máltán", "Madármegfigyelő pontokkal rendelkezik"],
      ro: ["Habitat pentru peste 200 specii de păsări", "Ecosistem rar în Malta", "Include puncte de observație"],
      en: ["Managed by BirdLife Malta", "Vital stopover for migrating birds", "Home to many rare local plants"]
    }
  },

  // MT-009 Mġarr
  {
    id: "poi-mt-skorba",
    name: { de: "Skorba Tempel", hu: "Skorba-templomok", ro: "Templele Skorba", en: "Skorba Temples" },
    type: "historical",
    parent: "MT-009",
    coords: [14.3775, 35.9214],
    description: {
      de: "Prähistorische Tempelüberreste am Rande von Mġarr.",
      hu: "Prehisztorikus templommaradványok Mġarr szélén.",
      ro: "Resturi de temple preistorice la marginea orașului Mġarr.",
      en: "Prehistoric temple ruins on the outskirts of Mġarr."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Geben wichtige Einblicke in die Steinzeit", "Zwei Tempelkomplexe"],
      hu: ["UNESCO Világörökség", "Fontos betekintést nyújt a kőkorszakba", "Két templomkomplexum"],
      ro: ["Patrimoniu UNESCO", "Oferă perspective asupra vieții neolitice", "Două complexe de temple"],
      en: ["UNESCO World Heritage site", "Provided crucial info on Neolithic life", "Consists of two temple units"]
    }
  },
  {
    id: "poi-mt-ghajn-tuffieha",
    name: { de: "Għajn Tuffieħa Bay", hu: "Għajn Tuffieħa-öböl", ro: "Golful Għajn Tuffieħa", en: "Għajn Tuffieħa Bay" },
    type: "landmark",
    parent: "MT-009",
    coords: [14.3444, 35.93],
    description: {
      de: "Eine unberührte Bucht mit rötlichem Sand.",
      hu: "Érintetlen öböl vöröses homokkal.",
      ro: "Un golf virgin cu nisip roșiatic.",
      en: "An untouched bay with reddish sand and clay cliffs."
    },
    facts: {
      de: ["Erreichbar über 200 Stufen", "Weniger überlaufen als Golden Bay", "Beliebt für Sonnenuntergänge"],
      hu: ["Több mint 200 lépcsőn érhető el", "Kevésbé zsúfolt, mint a Golden Bay", "Népszerű naplemente-néző hely"],
      ro: ["Accesibil prin 200 de trepte", "Mai puțin aglomerat decât Golden Bay", "Popular pentru apusuri"],
      en: ["Accessed via 200 steps", "Less crowded than Golden Bay", "Famous for beautiful sunsets"]
    }
  },

  // MT-010 Rabat
  {
    id: "poi-mt-st-paul-catacombs",
    name: { de: "St. Paul's Catacombs", hu: "Szent Pál-katakombák", ro: "Catacombele Sf. Paul", en: "St. Paul's Catacombs" },
    type: "historical",
    parent: "MT-010",
    coords: [14.3972, 35.8808],
    description: {
      de: "Ein weitläufiges unterirdisches Bestattungssystem.",
      hu: "Kiterjedt földalatti temetkezési rendszer.",
      ro: "Un sistem subteran vast de înmormântare.",
      en: "A large underground complex of interconnected burial chambers."
    },
    facts: {
      de: ["Größter Katakombenkomplex Maltas", "Diente bis ins 4. Jahrhundert", "Beweis für frühes Christentum"],
      hu: ["Málta legnagyobb katakombarendszere", "A 4. századig használták", "A korai kereszténység bizonyítéka"],
      ro: ["Cel mai mare complex de catacombe din Malta", "Folosite până în secolul IV", "Dovada creștinismului timpuriu"],
      en: ["Largest catacomb complex in Malta", "Used until the 4th century AD", "Evidence of early Christianity"]
    }
  },
  {
    id: "poi-mt-domvs-romana",
    name: { de: "Domvs Romana", hu: "Domvs Romana", ro: "Domvs Romana", en: "Domvs Romana" },
    type: "historical",
    parent: "MT-010",
    coords: [14.4011, 35.8853],
    description: {
      de: "Ruinen eines römischen Hauses mit Mosaiken.",
      hu: "Egy római ház romjai mozaikokkal.",
      ro: "Ruinele unei case romane cu mozaicuri.",
      en: "Ruins of a Roman townhouse featuring fine mosaics."
    },
    facts: {
      de: ["Datierung auf das 1. Jh. v. Chr.", "Sehr gut erhaltene Bodenmosaike", "Kleines Museum vor Ort"],
      hu: ["I. e. 1. századból származik", "Nagyon jó állapotú padlómozaikok", "Kis múzeum található a helyszínen"],
      ro: ["Datează din secolul I î.Hr.", "Mozaicuri de podea bine conservate", "Mic muzeu la fața locului"],
      en: ["Dates back to 1st century BC", "Contains well-preserved floor mosaics", "Small on-site museum"]
    }
  },
  {
    id: "poi-mt-st-mary-magdalene",
    name: { de: "St. Mary Magdalene Chapel", hu: "Szent Mária Magdolna-kápolna", ro: "Capela Sf. Maria Magdalena", en: "St. Mary Magdalene Chapel" },
    type: "historical",
    parent: "MT-011",
    coords: [14.3833, 35.8514],
    description: {
      de: "Eine kleine Kapelle am Rande der Klippen.",
      hu: "Kis kápolna a sziklák szélén.",
      ro: "O mică chapelă la marginea stâncilor.",
      en: "A tiny chapel perched on the edge of the cliffs."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Markiert den höchsten Punkt Maltas", "Schlichte Architektur"],
      hu: ["A 17. században épült", "Málta legmagasabb pontját jelzi", "Egyszerű építészet"],
      ro: ["Construită în secolul al XVII-lea", "Marchează cel mai înalt punct al Maltei", "Arhitectură simplă"],
      en: ["Built in the 17th century", "Marks the highest point of the islands", "Simple architecture"]
    }
  },

  // MT-012 Siġġiewi
  {
    id: "poi-mt-limestone-heritage",
    name: { de: "Limestone Heritage", hu: "Limestone Heritage", ro: "Limestone Heritage", en: "Limestone Heritage" },
    type: "landmark",
    parent: "MT-012",
    coords: [14.4367, 35.8567],
    description: {
      de: "Ein park, der die Geschichte der Steinbearbeitung zeigt.",
      hu: "Park, amely a kőmegmunkálás történetét mutatja be.",
      ro: "Un parc care prezintă istoria prelucrării pietrei.",
      en: "A park celebrating the history of stone masonry in Malta."
    },
    facts: {
      de: ["In einem Steinbruch gelegen", "Interaktive Vorführungen", "Beliebter Hochzeitsort"],
      hu: ["Egy kőbányában található", "Interaktív bemutatók", "Népszerű esküvői helyszín"],
      ro: ["Situat într-o carieră de piatră", "Demonstrații interactive", "Loc popular pentru nunți"],
      en: ["Located in a stone quarry", "Interactive demonstrations", "Popular venue for weddings"]
    }
  },
  {
    id: "poi-mt-ghar-lapsi",
    name: { de: "Ghar Lapsi", hu: "Ghar Lapsi", ro: "Ghar Lapsi", en: "Ghar Lapsi" },
    type: "landmark",
    parent: "MT-012",
    coords: [14.4253, 35.8267],
    description: {
      de: "Eine natürliche Höhle und Bucht, beliebt zum Tauchen.",
      hu: "Természetes barlang és öböl, népszerű merülőhely.",
      ro: "O peșteră și un golf natural, popular pentru scufundări.",
      en: "A natural cove and cave system, popular with swimmers and divers."
    },
    facts: {
      de: ["Kristallklares Wasser", "Mehrere Fischrestaurants", "Blick auf Filfla"],
      hu: ["Kristálytiszta víz", "Számos halétterem", "Kilátás Filfla szigetére"],
      ro: ["Apă de cristal", "Mai multe restaurante cu specific pescăresc", "Vedere spre Filfla"],
      en: ["Crystal clear water", "Several fish restaurants nearby", "Offers a close view of Filfla islet"]
    }
  },

  // MT-013 Qrendi
  {
    id: "poi-mt-hagarqim",
    name: { de: "Ħaġar Qim", hu: "Ħaġar Qim", ro: "Ħaġar Qim", en: "Ħaġar Qim" },
    type: "historical",
    coords: [14.4464, 35.8275],
    parent: "MT-013",
    description: {
      de: "Megalithischer Tempelkomplex.",
      hu: "Megalitikus templomkomplexum.",
      ro: "Complex de temple megalitice.",
      en: "Megalithic temple complex."
    },
    facts: {
      de: ["Über 5000 Jahre alt", "Große Steinblöcke", "UNESCO-Welterbe"],
      hu: ["Több mint 5000 éves", "Hatalmas kőtömbök", "UNESCO Világörökség"],
      ro: ["Peste 5000 de ani vechime", "Blocuri masive de piatră", "Patrimoniu UNESCO"],
      en: ["Over 5000 years old", "Massive stone monoliths", "UNESCO World Heritage site"]
    }
  },

  // MT-014 Żurrieq
  {
    id: "poi-mt-xarolla-windmill",
    name: { de: "Xarolla Windmühle", hu: "Xarolla szélmalom", ro: "Moara de vânt Xarolla", en: "Xarolla Windmill" },
    type: "historical",
    parent: "MT-014",
    coords: [14.4744, 35.8319],
    description: {
      de: "Eine restaurierte Windmühle aus dem 18. Jahrhundert.",
      hu: "Restaurált 18. századi szélmalom.",
      ro: "O moară de vânt restaurată din secolul al XVIII-lea.",
      en: "A restored 18th-century windmill."
    },
    facts: {
      de: ["Voll funktionsfähig", "Beherbergt ein Kulturzentrum", "In der Nähe befinden sich Katakomben"],
      hu: ["Teljesen működőképes", "Kulturális központnak ad otthont", "A közelben katakombák találhatók"],
      ro: ["Complet funcțională", "Găzduiește un centru cultural", "Catacombe situate în apropiere"],
      en: ["Fully functional", "Houses a cultural centre", "Catacombs located nearby"]
    }
  },
  {
    id: "poi-mt-babu-valley",
    name: { de: "Wied iż-Żurrieq", hu: "Wied iż-Żurrieq", ro: "Wied iż-Żurrieq", en: "Wied iż-Żurrieq" },
    type: "landmark",
    parent: "MT-014",
    coords: [14.4533, 35.8203],
    description: {
      de: "Ein malerisches Tal und Fischerdorf.",
      hu: "Festői völgy és halászfalu.",
      ro: "O vale pitorească și un sat de pescari.",
      en: "A picturesque valley and fishing hamlet."
    },
    facts: {
      de: ["Startpunkt für Blue Grotto Touren", "Beliebt zum Schnorcheln", "Steile Felswände"],
      hu: ["A Kék Barlang túrák indulópontja", "Népszerű sznorkelező hely", "Meredek sziklafalak"],
      ro: ["Punct de plecare pentru Grota Albastră", "Popular pentru snorkeling", "Pereți de stâncă abrupți"],
      en: ["Departure point for Blue Grotto trips", "Popular for snorkeling", "Deep valley with steep cliffs"]
    }
  },

  // MT-015 Birżebbuġa
  {
    id: "poi-mt-ghar-dalam",
    name: { de: "Għar Dalam Höhle", hu: "Għar Dalam barlang", ro: "Peștera Għar Dalam", en: "Għar Dalam Cave" },
    type: "historical",
    parent: "MT-015",
    coords: [14.5275, 35.8356],
    description: {
      de: "Eine prähistorische Höhle mit Fossilien von Zwergelefanten.",
      hu: "Prehisztorikus barlang törpeelefánt fosszíliákkal.",
      ro: "O peșteră preistorică cu fosile de elefanți pitici.",
      en: "Prehistoric cave with fossils of dwarf elephants and hippos."
    },
    facts: {
      de: ["Beweis für Landbrücke nach Europa", "Maltas älteste archäologische Stätte", "Kleines Museum vor Ort"],
      hu: ["Bizonyíték az Európába vezető szárazföldi hídra", "Málta legősibb régészeti lelőhelye", "Kis múzeum a helyszínen"],
      ro: ["Dovada punții terestre spre Europa", "Cel mai vechi sit arheologic din Malta", "Mic muzeu la fața locului"],
      en: ["Evidence of land bridge to Europe", "Malta's oldest archaeological site", "Small museum attached to the cave"]
    }
  },
  {
    id: "poi-mt-pretty-bay",
    name: { de: "Pretty Bay", hu: "Pretty Bay", ro: "Pretty Bay", en: "Pretty Bay" },
    type: "landmark",
    parent: "MT-015",
    coords: [14.5306, 35.8239],
    description: {
      de: "Ein großer Sandstrand direkt im Ort.",
      hu: "Nagy homokos strand közvetlenül a városban.",
      ro: "O plajă mare de nisip chiar în oraș.",
      en: "A large sandy beach in the heart of the town."
    },
    facts: {
      de: ["Künstlich mit Sand aufgeschüttet", "Blick auf den Freeport-Containerhafen", "Viele Spielplätze"],
      hu: ["Mesterségesen feltöltött homokos part", "Kilátás a Freeport kikötőre", "Sok játszótér"],
      ro: ["Nisip adus artificial", "Vedere spre portul Freeport", "Multe locuri de joacă"],
      en: ["Man-made sandy beach", "Views of the Freeport terminal", "Surrounded by many playgrounds"]
    }
  },

  // MT-016 Marsaxlokk
  {
    id: "poi-mt-marsaxlokk-market",
    name: { de: "Marsaxlokk Markt", hu: "Marsaxlokki piac", ro: "Piața Marsaxlokk", en: "Marsaxlokk Market" },
    type: "landmark",
    parent: "MT-016",
    coords: [14.5444, 35.8417],
    description: {
      de: "Ein berühmter Fischmarkt, der jeden Sonntag stattfindet.",
      hu: "Híres halpiac, amelyet minden vasárnap megrendeznek.",
      ro: "O piață de pește faimoasă, organizată în fiecare duminică.",
      en: "A famous outdoor market, most vibrant on Sunday mornings."
    },
    facts: {
      de: ["Größter Fischmarkt der Insel", "Verkauf von lokalen Handwerksprodukten", "Entlang der Uferpromenade"],
      hu: ["A sziget legnagyobb halpiaca", "Helyi kézműves termékek árusítása", "A tengerparti sétány mentén"],
      ro: ["Cea mai mare piață de pește", "Vânzare de produse artizanale locale", "De-a lungul falezei"],
      en: ["Largest fish market in Malta", "Sells local crafts and lace too", "Stretches along the waterfront"]
    }
  },
  {
    id: "poi-mt-zonqor-point",
    name: { de: "Żonqor Point", hu: "Żonqor Point", ro: "Żonqor Point", en: "Żonqor Point" },
    type: "landmark",
    parent: "MT-017",
    coords: [14.5683, 35.87],
    description: {
      de: "Der nördliche Punkt der Bucht von Marsaskala.",
      hu: "A Marsaskala-öböl északi pontja.",
      ro: "Punctul nordic al golfului Marsaskala.",
      en: "The northern tip of Marsaskala Bay."
    },
    facts: {
      de: ["Bekannt für Salinen", "Schroffe Küstenlandschaft", "Blick auf das offene Meer"],
      hu: ["Sólepárlóiról ismert", "Zord tengerparti táj", "Kilátás a nyílt tengerre"],
      ro: ["Cunoscut pentru saline", "Peisaj de coastă abrupt", "Vedere la marea deschisă"],
      en: ["Features salt pans", "Rugged coastline", "Great for coastal walks"]
    }
  },

  // MT-018 Żabbar
  {
    id: "poi-mt-zabbar-museum",
    name: { de: "Żabbar Sanctuary Museum", hu: "Żabbari kegyhely múzeum", ro: "Muzeul Sanctuarului din Żabbar", en: "Żabbar Sanctuary Museum" },
    type: "landmark",
    parent: "MT-018",
    coords: [14.5361, 35.875],
    description: {
      de: "Ein Museum neben dem Heiligtum Unserer Lieben Frau von Gratien.",
      hu: "Múzeum a kegyhely mellett.",
      ro: "Un muzeu lângă sanctuarul local.",
      en: "A museum adjacent to the Sanctuary of Our Lady of Graces."
    },
    facts: {
      de: ["Beherbergt Votivgaben", "Ausstellung kirchlicher Kunst", "Enthält alte Sänften"],
      hu: ["Fogadalmi ajándékokat őriz", "Egyházi művészeti kiállítás", "Régi gyaloghintókat is bemutat"],
      ro: ["Găzduiește ofrande votive", "Expoziție de artă ecleziastică", "Include lectici vechi"],
      en: ["Houses many ex-voto paintings", "Displays religious art", "Contains historical sedan chairs"]
    }
  },
  {
    id: "poi-mt-hompesch-arch",
    name: { de: "Hompesch-Bogen", hu: "Hompesch-ív", ro: "Arcul Hompesch", en: "Hompesch Arch" },
    type: "historical",
    parent: "MT-018",
    coords: [14.5297, 35.8711],
    description: {
      de: "Ein Triumphbogen am Eingang der Stadt.",
      hu: "Diadalív a város bejáratánál.",
      ro: "Un arc triumfal la intrarea în oraș.",
      en: "A triumphal arch built at the entrance to the city."
    },
    facts: {
      de: ["Erbaut zu Ehren von Großmeister Hompesch", "Markiert den Stadtstatus", "1801 errichtet"],
      hu: ["Hompesch nagymester tiszteletére épült", "A városi rangot jelzi", "1801-ben emelték"],
      ro: ["Construit în onoarea Marelui Maestru Hompesch", "Marchează statutul de oraș", "Ridicat în 1801"],
      en: ["Built to honor Grand Master Hompesch", "Commemorates the town's city status", "Erected in 1801"]
    }
  },

  // MT-019 Xgħajra
  {
    id: "poi-mt-fort-leonardo",
    name: { de: "Fort Leonardo", hu: "Leonardo-erőd", ro: "Fortul Leonardo", en: "Fort Leonardo" },
    type: "historical",
    parent: "MT-019",
    coords: [14.5508, 35.885],
    description: {
      de: "Eine britische Küstenfestung.",
      hu: "Brit tengerparti erőd.",
      ro: "O fortăreață de coastă britanică.",
      en: "A British-built coastal fort."
    },
    facts: {
      de: ["Erbaut im späten 19. Jahrhundert", "Diente der Verteidigung des Grand Harbour", "Dominante Lage"],
      hu: ["A 19. század végén épült", "A Grand Harbour védelmét szolgálta", "Domináns fekvés"],
      ro: ["Construit la sfârșitul secolului XIX", "Folosit pentru apărarea Marelui Port", "Locație dominantă"],
      en: ["Built in late 19th century", "Designed to defend the Grand Harbour", "Located on a high ground"]
    }
  },
  {
    id: "poi-mt-xghajra-promenade",
    name: { de: "Xgħajra Promenade", hu: "Xgħajra sétány", ro: "Promenada Xgħajra", en: "Xgħajra Promenade" },
    type: "landmark",
    parent: "MT-019",
    coords: [14.5478, 35.8858],
    description: {
      de: "Eine ruhige Promenade am Meer.",
      hu: "Csendes tengerparti sétány.",
      ro: "O faleză liniștită la malul mării.",
      en: "A quiet coastal promenade."
    },
    facts: {
      de: ["Beliebt bei Anglern", "Klares Wasser", "Weniger touristisch"],
      hu: ["Népszerű a horgászok körében", "Tiszta víz", "Kevésbé turisztikai"],
      ro: ["Populară pentru pescari", "Apă curată", "Mai puțin turistică"],
      en: ["Popular with local anglers", "Clean water for swimming", "Less developed than Sliema"]
    }
  },

  // MT-020 San Lawrenz
  {
    id: "poi-mt-fungus-rock",
    name: { de: "Fungus Rock", hu: "Gomba-szikla", ro: "Fungus Rock", en: "Fungus Rock" },
    type: "landmark",
    coords: [14.1883, 36.0469],
    parent: "MT-020",
    description: {
      de: "Markanter Felsen in der Dwejra-Bucht.",
      hu: "Jellegzetes szikla a Dwejra-öbölben.",
      ro: "O stâncă distinctivă în golful Dwejra.",
      en: "Distinctive rock in Dwejra Bay."
    },
    facts: {
      de: ["Standort einer seltenen Heilpflanze", "Wurde von den Rittern streng bewacht", "Naturdenkmal"],
      hu: ["Ritka gyógynövény lelőhelye", "A lovagok szigorúan őrizték", "Természeti műemlék"],
      ro: ["Locul unei plante medicinale rare", "Păzit cu strictețe de cavalerii de Malta", "Monument natural"],
      en: ["Home to a rare medicinal plant", "Once guarded strictly by the Knights", "Protected natural landmark"]
    }
  },
  {
    id: "poi-mt-blue-hole",
    name: { de: "Blue Hole", hu: "Kék Lyuk", ro: "Blue Hole", en: "Blue Hole" },
    type: "landmark",
    parent: "MT-020",
    coords: [14.1883, 36.0528],
    description: {
      de: "Einer der besten Tauchplätze Europas.",
      hu: "Európa egyik legjobb búvárhelye.",
      ro: "Unul dintre cele mai bune locuri de scufundări din Europa.",
      en: "One of Europe's top diving spots."
    },
    facts: {
      de: ["Natürliches Felsloch", "Unterwasserbogen zum Meer", "Befindet sich bei Dwejra"],
      hu: ["Természetes sziklamedence", "Víz alatti boltív vezet a tengerre", "Dwejrátnál található"],
      ro: ["Piscină naturală în piatră", "Arc subteran spre mare", "Situat la Dwejra"],
      en: ["Natural rock sinkhole", "Underwater arch leads to open sea", "Located near the former Azure Window"]
    }
  },

  // MT-021 Kerċem
  {
    id: "poi-mt-lunzjata",
    name: { de: "Lunzjata Tal", hu: "Lunzjata-völgy", ro: "Valea Lunzjata", en: "Lunzjata Valley" },
    type: "landmark",
    parent: "MT-021",
    coords: [14.2333, 36.04],
    description: {
      de: "Eines der fruchtbarsten Täler auf Gozo.",
      hu: "Gozo egyik legtermékenyebb völgye.",
      ro: "Una dintre cele mai fertile văi din Gozo.",
      en: "One of the most fertile and scenic valleys in Gozo."
    },
    facts: {
      de: ["Ganzjährig fließendes Wasser", "Enthält eine alte Kapelle", "Beliebt für Spaziergänge"],
      hu: ["Egész évben folyó víz", "Egy régi kápolnát is rejt", "Népszerű sétahelyszín"],
      ro: ["Apă curgătoare tot anul", "Conține o capelă veche", "Popular pentru plimbări"],
      en: ["Running water year-round", "Contains an ancient chapel", "Quiet and lush green area"]
    }
  },
  {
    id: "poi-mt-sarraflu",
    name: { de: "Għadira ta' Sarraflu", hu: "Sarraflu-tó", ro: "Lacul Sarraflu", en: "Sarraflu Pond" },
    type: "landmark",
    parent: "MT-021",
    coords: [14.1994, 36.035],
    description: {
      de: "Ein seltener natürlicher Süßwasserteich auf Gozo.",
      hu: "Ritka természetes édesvízi tó Gozón.",
      ro: "Un lac natural de apă dulce rar în Gozo.",
      en: "A rare natural freshwater pond on Gozo."
    },
    facts: {
      de: ["Lebensraum für Frösche und Wasserschildkröten", "Befindet sich auf einem Hochplateau", "Wichtiges Ökosystem"],
      hu: ["Békák és vízi teknősök élőhelye", "Egy fennsíkon található", "Fontos ökoszisztéma"],
      ro: ["Habitat pentru broaște și țestoase", "Situat pe un platou înalt", "Ecosistem important"],
      en: ["Habitat for frogs and turtles", "Located on a high plateau", "Important local ecosystem"]
    }
  },

  // MT-022 Munxar
  {
    id: "poi-mt-xlendi",
    name: { de: "Xlendi Bay", hu: "Xlendi-öböl", ro: "Golful Xlendi", en: "Xlendi Bay" },
    type: "landmark",
    parent: "MT-022",
    coords: [14.2172, 36.0303],
    description: {
      de: "Eine fjordähnliche Bucht mit hohen Klippen.",
      hu: "Fjordszerű öböl magas sziklákkal.",
      ro: "Un golf asemănător unui fiord cu stânci înalte.",
      en: "A fjord-like bay surrounded by high cliffs."
    },
    facts: {
      de: ["Beliebtes Touristendorf", "Gute Restaurants am Wasser", "Höhle von Caroline"],
      hu: ["Népszerű turistafalu", "Jó éttermek a parton", "Karolina-barlang"],
      ro: ["Sat turistic popular", "Restaurante bune pe mal", "Peștera Carolinei"],
      en: ["Popular seaside resort", "Excellent waterfront restaurants", "Features Caroline's Cave"]
    }
  },
  {
    id: "poi-mt-sanap-cliffs",
    name: { de: "Sanap Klippen", hu: "Sanap-sziklák", ro: "Stâncile Sanap", en: "Sanap Cliffs" },
    type: "landmark",
    parent: "MT-022",
    coords: [14.225, 36.02],
    description: {
      de: "Spektakuläre Klippen an der Südküste von Gozo.",
      hu: "Látványos sziklák Gozo déli partján.",
      ro: "Stânci spectaculoase pe coasta de sud a insulei Gozo.",
      en: "Spectacular cliffs on the southern coast of Gozo."
    },
    facts: {
      de: ["Weniger bekannt als Ta' Ċenċ", "Bietet atemberaubende Sonnenuntergänge", "Wanderweg nach Xlendi"],
      hu: ["Kevésbé ismert, mint Ta' Ċenċ", "Lélegzetelállító naplementék", "Túraútvonal Xlendi felé"],
      ro: ["Mai puțin cunoscute decât Ta' Ċenċ", "Apusuri de soare uimitoare", "Potecă de drumeție spre Xlendi"],
      en: ["Hidden gem for nature lovers", "Stunning sunset views", "Coastal path leads to Xlendi"]
    }
  },

  // MT-023 Sannat
  {
    id: "poi-mt-tacenc",
    name: { de: "Ta' Ċenċ Klippen", hu: "Ta' Ċenċ-sziklák", ro: "Stâncile Ta' Ċenċ", en: "Ta' Ċenċ Cliffs" },
    type: "landmark",
    parent: "MT-023",
    coords: [14.2528, 36.0183],
    description: {
      de: "Die höchsten Klippen auf Gozo.",
      hu: "Gozo legmagasabb sziklái.",
      ro: "Cele mai înalte stânci din Gozo.",
      en: "The highest cliffs on the island of Gozo."
    },
    facts: {
      de: ["Wichtiges Vogelgebiet", "Prähistorische Dolmen in der Nähe", "130 Meter hoch"],
      hu: ["Fontos madárvédelmi terület", "Prehisztorikus dolmenek a közelben", "130 méter magas"],
      ro: ["Zonă importantă pentru păsări", "Dolmene preistorice în apropiere", "130 metri înălțime"],
      en: ["Important Bird Area", "Near prehistoric dolmens", "Rise to 130 meters above sea level"]
    }
  },
  {
    id: "poi-mt-mgarr-ix-xini",
    name: { de: "Mġarr ix-Xini", hu: "Mġarr ix-Xini", ro: "Mġarr ix-Xini", en: "Mġarr ix-Xini" },
    type: "landmark",
    parent: "MT-023",
    coords: [14.2711, 36.0192],
    description: {
      de: "Eine enge, abgeschiedene Bucht.",
      hu: "Szűk, eldugott öböl.",
      ro: "Un golf îngust și retras.",
      en: "A narrow, secluded bay and valley."
    },
    facts: {
      de: ["Filmkulisse für 'By the Sea'", "Beliebt zum Tauchen", "Ritters-Turm am Eingang"],
      hu: ["A 'By the Sea' forgatási helyszíne", "Népszerű búvárhely", "Lovagi torony a bejáratnál"],
      ro: ["Loc de filmare pentru 'By the Sea'", "Popular pentru scufundări", "Turn cavaleresc la intrare"],
      en: ["Filming location for 'By the Sea'", "Excellent for diving", "Guarded by a knightly tower"]
    }
  },

  // MT-024 Għajnsielem
  {
    id: "poi-mt-blue-lagoon",
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    type: "landmark",
    coords: [14.3211, 36.0125],
    parent: "MT-024",
    description: {
      de: "Berühmte Bucht auf Comino.",
      hu: "Híres öböl Cominón.",
      ro: "Lagună celebră pe Comino.",
      en: "Famous bay on Comino."
    },
    facts: {
      de: ["Türkisfarbenes Wasser", "Teil der Gemeinde Għajnsielem", "Nur mit dem Boot erreichbar"],
      hu: ["Türkizkék víz", "Għajnsielem község része", "Csak hajóval érhető el"],
      ro: ["Apă turcoaz", "Parte a comunei Għajnsielem", "Accesibilă doar cu barca"],
      en: ["Crystal clear turquoise water", "Managed by Għajnsielem local council", "Main tourist attraction on Comino"]
    }
  },
  {
    id: "poi-mt-fort-chambray",
    name: { de: "Fort Chambray", hu: "Chambray-erőd", ro: "Fortul Chambray", en: "Fort Chambray" },
    type: "historical",
    parent: "MT-024",
    coords: [14.2958, 36.02],
    description: {
      de: "Eine Festungsstadt mit Blick auf den Hafen von Mġarr.",
      hu: "Erődített város kilátással a Mġarr kikötőre.",
      ro: "O cetate cu vedere spre portul Mġarr.",
      en: "A fortified city overlooking Mġarr Harbour."
    },
    facts: {
      de: ["Erbaut im 18. Jahrhundert", "Heute eine Luxuswohnanlage", "Sollte ursprünglich die neue Hauptstadt von Gozo werden"],
      hu: ["A 18. században épült", "Ma luxus lakópark", "Eredetileg Gozo új fővárosának szánták"],
      ro: ["Construit în secolul XVIII", "Acum complex rezidențial de lux", "Destinat inițial să fie noua capitală a insulei Gozo"],
      en: ["Built in the mid-18th century", "Now a luxury residential complex", "Intended to be the new capital of Gozo"]
    }
  },

  // MT-025 Qala
  {
    id: "poi-mt-hondoq",
    name: { de: "Ħondoq ir-Rummien", hu: "Ħondoq ir-Rummien", ro: "Ħondoq ir-Rummien", en: "Ħondoq ir-Rummien" },
    type: "landmark",
    parent: "MT-025",
    coords: [14.3217, 36.0283],
    description: {
      de: "Eine kleine Bucht mit kristallklarem Wasser direkt gegenüber von Comino.",
      hu: "Kis öböl kristálytiszta vízzel Cominóval szemben.",
      ro: "Un mic golf cu apă limpede, vis-a-vis de Comino.",
      en: "A small cove with crystal clear water directly facing Comino."
    },
    facts: {
      de: ["Sehr beliebt bei Einheimischen", "Bietet Blick auf die Blaue Lagune", "Hat kleine Kieselstrände"],
      hu: ["Nagyon népszerű a helyiek körében", "Kilátást nyújt a Kék Lagúnára", "Kis kavicsos strandjai vannak"],
      ro: ["Foarte popular printre localnici", "Vedere spre Laguna Albastră", "Plaje mici cu pietriș"],
      en: ["Favorite swimming spot for locals", "Offers views of the Blue Lagoon", "Features several small sea caves"]
    }
  },
  {
    id: "poi-mt-st-anthony-battery",
    name: { de: "St. Anthony's Battery", hu: "Szent Antal-üteg", ro: "Bateria Sf. Anton", en: "St. Anthony's Battery" },
    type: "historical",
    parent: "MT-025",
    coords: [14.3311, 36.0267],
    description: {
      de: "Eine Küstenbatterie zur Verteidigung des Kanals.",
      hu: "Parti üteg a csatorna védelmére.",
      ro: "Baterie de coastă pentru apărarea canalului.",
      en: "A coastal battery built to defend the channel between Gozo and Comino."
    },
    facts: {
      de: ["Eine der wenigen erhaltenen Batterien auf Gozo", "Restauriert von Din l-Art Ħelwa", "Erbaut 1731"],
      hu: ["Egyike a kevés fennmaradt ütegnek Gozón", "A Din l-Art Ħelwa restaurálta", "1731-ben épült"],
      ro: ["Una dintre puținele baterii conservate în Gozo", "Restaurată de Din l-Art Ħelwa", "Construită în 1731"],
      en: ["One of the few surviving batteries on Gozo", "Restored by Din l-Art Ħelwa", "Built in 1731"]
    }
  },

  // MT-026 Nadur
  {
    id: "poi-mt-san-blas",
    name: { de: "San Blas Bay", hu: "San Blas-öböl", ro: "Golful San Blas", en: "San Blas Bay" },
    type: "landmark",
    parent: "MT-026",
    coords: [14.3014, 36.0567],
    description: {
      de: "Eine abgeschiedene Bucht mit rotem Sand.",
      hu: "Eldugott öböl vörös homokkal.",
      ro: "Un golf retras cu nisip roșu.",
      en: "A secluded bay with characteristic red sand."
    },
    facts: {
      de: ["Nur über einen steilen Weg erreichbar", "Sehr ruhiger Strand", "Umgeben von Obstgärten"],
      hu: ["Csak meredek úton érhető el", "Nagyon csendes strand", "Gyümölcsösök veszik körül"],
      ro: ["Accesibil doar printr-o potecă abruptă", "Plajă foarte liniștită", "Înconjurat de livezi"],
      en: ["Accessed via a very steep hill", "Quiet and peaceful beach", "Surrounded by fertile valleys"]
    }
  },
  {
    id: "poi-mt-kenuna",
    name: { de: "Ta' Kenuna Tower", hu: "Ta' Kenuna-torony", ro: "Turnul Ta' Kenuna", en: "Ta' Kenuna Tower" },
    type: "landmark",
    parent: "MT-026",
    coords: [14.2983, 36.0383],
    description: {
      de: "Ein ehemaliger Telegrafenturm mit toller Aussicht.",
      hu: "Korábbi távírótorony remek kilátással.",
      ro: "Un fost turn de telegraf cu o priveliște excelentă.",
      en: "A former semaphore telegraph tower with panoramic views."
    },
    facts: {
      de: ["Blick über Gozo, Comino und Malta", "Enthält botanische Gärten", "Erbaut von den Briten 1848"],
      hu: ["Kilátás Gozóra, Cominóra és Máltára", "Botanikus kertek találhatók itt", "A britek építették 1848-ban"],
      ro: ["Vedere spre Gozo, Comino și Malta", "Conține grădini botanice", "Construit de britanici în 1848"],
      en: ["Views over Gozo, Comino, and Malta", "Surrounded by a botanical garden", "Built by the British in 1848"]
    }
  },

  // MT-027 Xagħra
  {
    id: "poi-mt-ggantija",
    name: { de: "Ġgantija", hu: "Ġgantija", ro: "Ġgantija", en: "Ġgantija" },
    type: "historical",
    coords: [14.2692, 36.0475],
    parent: "MT-027",
    description: {
      de: "Ältester Tempelkomplex Gozos.",
      hu: "Gozo legidősebb templomkomplexuma.",
      ro: "Cel mai vechi complex de temple din Gozo.",
      en: "Oldest temple complex on Gozo."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Älter als die Pyramiden", "Riesige Steinblöcke"],
      hu: ["UNESCO Világörökség", "Idősebb, mint a piramisok", "Hatalmas kőtömbök"],
      ro: ["Patrimoniu UNESCO", "Mai vechi decât piramidele", "Blocuri gigantice de piatră"],
      en: ["UNESCO World Heritage site", "Older than the Pyramids", "Built with stones weighing over 50 tons"]
    }
  },
  {
    id: "poi-mt-ramla",
    name: { de: "Ramla Bay", hu: "Ramla-öböl", ro: "Golful Ramla", en: "Ramla Bay" },
    type: "landmark",
    coords: [14.2831, 36.0617],
    parent: "MT-027",
    description: {
      de: "Großer roter Sandstrand.",
      hu: "Nagy vörös homokos strand.",
      ro: "Plajă mare cu nisip roșu.",
      en: "Largest red sandy beach in Gozo."
    },
    facts: {
      de: ["Römische Ruinen unter dem Sand", "Calypso-Höhle oberhalb", "Beliebt bei Familien"],
      hu: ["Római romok a homok alatt", "Kalüpszó barlangja felette", "Családok körében népszerű"],
      ro: ["Ruine romane sub nisip", "Peștera Calypso deasupra", "Populară pentru familii"],
      en: ["Roman ruins buried under the sand", "Calypso Cave overlooks the bay", "Known as Ramla l-Ħamra"]
    }
  },
  {
    id: "poi-mt-marsalforn-salt-pans",
    name: { de: "Salzpfannen von Marsalforn", hu: "Marsalforni sólepárlók", ro: "Salinele din Marsalforn", en: "Marsalforn Salt Pans" },
    type: "landmark",
    parent: "MT-028",
    coords: [14.2467, 36.0783],
    description: {
      de: "Jahrhundertealte, in den Fels gehauene Salzpfannen.",
      hu: "Évszázados, sziklába vájt sólepárlók.",
      ro: "Saline săpate în stâncă vechi de secole.",
      en: "Centuries-old salt pans carved into the coastal rock."
    },
    facts: {
      de: ["Erstrecken sich über 3 km", "Noch heute zur Salzgewinnung genutzt", "Sehr fotogen"],
      hu: ["3 km hosszan nyúlnak el", "Ma is használják sólepárlásra", "Nagyon fotogén"],
      ro: ["Se întind pe 3 km", "Încă folosite pentru extracția sării", "Foarte fotogenice"],
      en: ["Stretch for 3km along the coast", "Still in use today", "Extremely photogenic landscape"]
    }
  },

  // MT-029 Għasri
  {
    id: "poi-mt-wied-il-ghasri",
    name: { de: "Wied il-Għasri", hu: "Wied il-Għasri", ro: "Wied il-Għasri", en: "Wied il-Għasri" },
    type: "landmark",
    parent: "MT-029",
    coords: [14.2275, 36.0792],
    description: {
      de: "Ein enges Tal, das in einer kleinen Kieselbucht endet.",
      hu: "Szűk völgy, amely egy kis kavicsos öbölben végződik.",
      ro: "O vale îngustă care se termină într-un mic golf de pietriș.",
      en: "A narrow valley leading to a tiny, secluded pebble beach."
    },
    facts: {
      de: ["Beliebt bei Tauchern und Schnorchlern", "Hohe, schützende Felswände", "Sehr klares Wasser"],
      hu: ["Népszerű a búvárok és sznorkelezők körében", "Magas, védő sziklafalak", "Nagyon tiszta víz"],
      ro: ["Popular pentru scufundări și snorkeling", "Pereți de stâncă înalți", "Apă foarte limpede"],
      en: ["Popular for divers and snorkelers", "High protective cliffs", "Spectacular winding canyon"]
    }
  },
  {
    id: "poi-mt-giordan-lighthouse",
    name: { de: "Giordan Leuchtturm", hu: "Giordan-világítótorony", ro: "Farul Giordan", en: "Giordan Lighthouse" },
    type: "landmark",
    parent: "MT-029",
    coords: [14.2208, 36.0689],
    description: {
      de: "Ein markanter Leuchtturm auf einem Hügel über Għasri.",
      hu: "Jellegzetes világítótorony a dombtetőn.",
      ro: "Un far distinctiv pe un deal deasupra Għasri.",
      en: "A prominent lighthouse on a hill overlooking Għasri."
    },
    facts: {
      de: ["Erbaut 1853", "Beherbergt eine Wetterstation", "Bietet 360-Grad-Blick über Gozo"],
      hu: ["1853-ban épült", "Meteorológiai állomásnak ad otthont", "360 fokos kilátást nyújt Gozóra"],
      ro: ["Construit în 1853", "Găzduiește o stație meteo", "Oferă vedere de 360 grade peste Gozo"],
      en: ["Built in 1853 during British rule", "Houses an air monitoring station", "Offers 360-degree views of Gozo"]
    }
  },

  // MT-030 Għarb
  {
    id: "poi-mt-ta-pinu",
    name: { de: "Ta' Pinu Basilika", hu: "Ta' Pinu bazilika", ro: "Bazilica Ta' Pinu", en: "Ta' Pinu Sanctuary" },
    type: "historical",
    parent: "MT-030",
    coords: [14.215, 36.0617],
    description: {
      de: "Maltas bedeutendster Wallfahrtsort.",
      hu: "Málta legjelentősebb zarándokhelye.",
      ro: "Cel mai important loc de pelerinaj din Malta.",
      en: "Malta's most famous national shrine and pilgrimage site."
    },
    facts: {
      de: ["Berühmt für Wunderheilungen", "Wunderschöne Mosaike im Freien", "Papstbesuche"],
      hu: ["Csodás gyógyulásokról híres", "Gyönyörű kültéri mozaikok", "Pápai látogatások helyszíne"],
      ro: ["Faimoasă pentru vindecări miraculoase", "Mozaicuri superbe în exterior", "Vizitată de papi"],
      en: ["Known for reported miracles", "Beautiful outdoor mosaics", "Visited by Pope John Paul II and Pope Benedict XVI"]
    }
  },
  {
    id: "poi-mt-wied-il-mielah",
    name: { de: "Wied il-Mielaħ Fenster", hu: "Wied il-Mielaħ ablak", ro: "Fereastra Wied il-Mielaħ", en: "Wied il-Mielaħ Window" },
    type: "landmark",
    parent: "MT-030",
    coords: [14.2125, 36.0794],
    description: {
      de: "Ein natürlicher Felsbogen an der Nordküste.",
      hu: "Természetes sziklaív az északi parton.",
      ro: "Un arc natural de piatră pe coasta de nord.",
      en: "A natural limestone arch on the north coast of Gozo."
    },
    facts: {
      de: ["Ähnlich dem eingestürzten Azure Window", "Kann begangen werden", "Beliebt bei Kletterern"],
      hu: ["Hasonlít a leomlott Azúr Ablakra", "Rá lehet sétálni", "Népszerű a sziklamászók körében"],
      ro: ["Asemănător cu Fereastra Azură", "Se poate merge pe el", "Popular pentru alpiniști"],
      en: ["Less famous sibling of the Azure Window", "Stable enough to walk on", "Popular for abseiling"]
    }
  },

  // MT-031 Victoria
  {
    id: "poi-mt-citadel",
    name: { de: "Zitadelle (Victoria)", hu: "Gozo Citadella", ro: "Citadela (Victoria)", en: "The Citadel" },
    type: "historical",
    coords: [14.2394, 36.0469],
    parent: "MT-031",
    description: {
      de: "Historische befestigte Stadt.",
      hu: "Történelmi erődített város.",
      ro: "Oraș fortificat istoric.",
      en: "Historic fortified city."
    },
    facts: {
      de: ["Mittelalterliches Zentrum", "Kathedrale von Gozo", "Rundumblick über die Insel"],
      hu: ["Középkori központ", "Gozo katedrálisa", "Körkörös kilátás a szigetre"],
      ro: ["Centru medieval", "Catedrala din Gozo", "Vedere panoramică asupra insulei"],
      en: ["Medieval heart of Gozo", "Houses the Cathedral of Gozo", "Provides a 360-degree view of the island"]
    }
  },
  {
    id: "poi-mt-victoria-market",
    name: { de: "It-Tokk Markt", hu: "It-Tokk piac", ro: "Piața It-Tokk", en: "It-Tokk Market" },
    type: "landmark",
    parent: "MT-031",
    coords: [14.2394, 36.0436],
    description: {
      de: "Der zentrale Marktplatz von Victoria.",
      hu: "Victoria központi piactere.",
      ro: "Piața centrală din Victoria.",
      en: "The central market square of Victoria."
    },
    facts: {
      de: ["Verkauf lokaler Produkte", "Viele Cafés", "Lebhaftes Zentrum"],
      hu: ["Helyi termékek árusítása", "Számos kávézó", "Élettel teli központ"],
      ro: ["Vânzare de produse locale", "Multe cafenele", "Centru plin de viață"],
      en: ["Sells traditional Gozitan products", "Lined with open-air cafes", "Officially known as Independence Square"]
    }
  },

  // MT-032 Fontana
  {
    id: "poi-mt-fontana-springs",
    name: { de: "Fontana Quellen", hu: "Fontana források", ro: "Izvoarele Fontana", en: "Fontana Springs" },
    type: "landmark",
    parent: "MT-032",
    coords: [14.2358, 36.0375],
    description: {
      de: "Natürliche Quellen, die dem Dorf seinen Namen gaben.",
      hu: "Természetes források, amelyekről a falu a nevét kapta.",
      ro: "Izvoare naturale care au dat numele satului.",
      en: "Natural springs that gave the village its name."
    },
    facts: {
      de: ["Historische Waschplätze", "Noch heute funktionsfähig", "Wasser aus dem Lunzjata-Tal"],
      hu: ["Történelmi mosóhelyek", "Ma is működőképes", "A Lunzjata-völgyből érkező víz"],
      ro: ["Locuri istorice de spălat rufe", "Încă funcționale", "Apă din valea Lunzjata"],
      en: ["Features 16th-century wash houses", "Spring water is still used for irrigation", "Located on the road to Xlendi"]
    }
  },
  {
    id: "poi-mt-fontana-church",
    name: { de: "Herz-Jesu-Kirche", hu: "Jézus Szíve-templom", ro: "Biserica Inima lui Isus", en: "Sacred Heart Church" },
    type: "historical",
    parent: "MT-032",
    coords: [14.2372, 36.0375],
    description: {
      de: "Die Pfarrkirche von Fontana.",
      hu: "Fontana plébániatemploma.",
      ro: "Biserica parohială din Fontana.",
      en: "The parish church of Fontana dedicated to the Sacred Heart."
    },
    facts: {
      de: ["Erbaut im späten 19. Jahrhundert", "Schöne Steinfassade", "Zentrum der lokalen Festlichkeiten"],
      hu: ["A 19. század végén épült", "Szép kőhomlokzat", "A helyi ünnepségek központja"],
      ro: ["Construită la sfârșitul secolului XIX", "Fațadă frumoasă de piatră", "Centrul sărbătorilor locale"],
      en: ["Cornerstone laid in 1892", "Stunning stone architecture", "Main religious site in the village"]
    }
  },

  // MT-033 Xewkija
  {
    id: "poi-mt-xewkija-rotunda",
    name: { de: "Rotunde von Xewkija", hu: "Xewkijai rotunda", ro: "Rotunda din Xewkija", en: "Rotunda of Xewkija" },
    type: "historical",
    parent: "MT-033",
    coords: [14.2611, 36.0328],
    description: {
      de: "Eine gewaltige Kirche mit einer der größten Kuppeln der Welt.",
      hu: "Hatalmas templom a világ egyik legnagyobb kupolájával.",
      ro: "O biserică masivă cu una dintre cele mai mari cupole din lume.",
      en: "A massive church featuring one of the world's largest unsupported domes."
    },
    facts: {
      de: ["Höchstes Gebäude auf Gozo", "Kuppel wiegt 45.000 Tonnen", "Aufzug zur Aussichtsplattform"],
      hu: ["Gozo legmagasabb épülete", "A kupola 45 000 tonnát nyom", "Lift visz fel a kilátóba"],
      ro: ["Cea mai înaltă clădire din Gozo", "Cupola cântărește 45.000 tone", "Lift până la platforma de observație"],
      en: ["Gozo's tallest building", "Dome is 75 meters high", "Offers 360-degree views from the roof"]
    }
  },

  // MT-034 Mosta
  {
    id: "poi-mt-mosta",
    name: { de: "Mosta-Dom", hu: "Mosta-dóm", ro: "Domul din Mosta", en: "Mosta Dome" },
    type: "city",
    coords: [14.425, 35.91],
    parent: "MT-034",
    description: {
      de: "Kirche mit riesiger Kuppel.",
      hu: "Hatalmas kupolájú templom.",
      ro: "Biserică cu o cupolă imensă.",
      en: "Church with a massive dome."
    },
    facts: {
      de: ["Wunder von Mosta (Bombe)", "Drittgrößte Kuppel Europas", "Inspiration vom Pantheon"],
      hu: ["A mostai csoda (bomba)", "Európa harmadik legnagyobb kupolája", "A római Pantheon ihlette"],
      ro: ["Miracolul din Mosta (bombă)", "A treia cea mai mare cupolă din Europa", "Inspirat de Panteonul din Roma"],
      en: ["Site of the 'Miracle of Mosta' bomb", "3rd largest unsupported dome in Europe", "Design inspired by the Pantheon in Rome"]
    }
  },
  {
    id: "poi-mt-victoria-lines",
    name: { de: "Victoria Lines", hu: "Victoria-vonalak", ro: "Victoria Lines", en: "Victoria Lines" },
    type: "historical",
    parent: "MT-034",
    coords: [14.4144, 35.9189],
    description: {
      de: "Eine Verteidigungslinie quer über die Insel.",
      hu: "Védelmi vonal a szigeten keresztül.",
      ro: "O linie de apărare care traversează insula.",
      en: "A defensive wall across the width of Malta."
    },
    facts: {
      de: ["Oft 'Chinesische Mauer Maltas' genannt", "Erbaut von den Briten", "Über 12 km lang"],
      hu: ["Gyakran 'Málta kínai fala' néven említik", "A britek építették", "Több mint 12 km hosszú"],
      ro: ["Supranumit 'Marele Zid Maltez'", "Construit de britanici", "Peste 12 km lungime"],
      en: ["Known as the 'Great Wall of Malta'", "Built by the British in the late 19th century", "Stretches over 12km across the island"]
    }
  },

  // MT-035 Lija
  {
    id: "poi-mt-lija-belvedere",
    name: { de: "Lija Belvedere Tower", hu: "Lijai Belvedere-torony", ro: "Turnul Belvedere din Lija", en: "Lija Belvedere Tower" },
    type: "landmark",
    parent: "MT-035",
    coords: [14.4483, 35.9],
    description: {
      de: "Ein dekorativer Turm und Wahrzeichen von Lija.",
      hu: "Dekoratív torony, Lija jelképe.",
      ro: "Un turn decorativ și simbol al orașului Lija.",
      en: "A decorative tower and landmark of Lija."
    },
    facts: {
      de: ["Ehemals Teil eines privaten Gartens", "In der Mitte eines Kreisverkehrs gelegen", "Filigranes Design"],
      hu: ["Eredetileg egy privát kert része volt", "Egy körforgalom közepén található", "Filigrán design"],
      ro: ["Fostă parte dintr-o grădină privată", "Situat în centrul unui sens giratoriu", "Design filigran"],
      en: ["Once part of the gardens of Villa Gourgion", "Now sits in the middle of a main road", "Iconic symbol of the village"]
    }
  },
  {
    id: "poi-mt-lija-church",
    name: { de: "Lija Pfarrkirche", hu: "Lijai plébániatemplom", ro: "Biserica parohială din Lija", en: "Lija Parish Church" },
    type: "historical",
    parent: "MT-035",
    coords: [14.4461, 35.9017],
    description: {
      de: "Eine barocke Kirche, bekannt für ihre prächtigen Feuerwerke beim Dorffest.",
      hu: "Barokk templom, amely a falu ünnepének látványos tűzijátékáról ismert.",
      ro: "O biserică barocă cunoscută pentru focurile de artificii superbe de la festival.",
      en: "A baroque church famous for its spectacular fireworks displays."
    },
    facts: {
      de: ["Dem Erlöser geweiht", "Prächtige Innenausstattung", "Erbaut im 17. Jahrhundert"],
      hu: ["A Megváltónak szentelve", "Pompás belső tér", "A 17. században épült"],
      ro: ["Dedicată Mântuitorului", "Interior somptuos", "Construită în secolul XVII"],
      en: ["Dedicated to Our Saviour", "Features a rich baroque interior", "Masterpiece of architect Giovanni Barbara"]
    }
  },

  // MT-036 Attard
  {
    id: "poi-mt-san-anton",
    name: { de: "San Anton Palace", hu: "San Anton-palota", ro: "Palatul San Anton", en: "San Anton Palace" },
    type: "historical",
    parent: "MT-036",
    coords: [14.4467, 35.8958],
    description: {
      de: "Der offizielle Wohnsitz des maltesischen Präsidenten.",
      hu: "A máltai elnök hivatalos rezidenciája.",
      ro: "Reședința oficială a președintelui Maltei.",
      en: "The official residence of the President of Malta."
    },
    facts: {
      de: ["Wunderschöne öffentliche Gärten", "Erbaut im 17. Jahrhundert", "Beherbergt Pfaue und Schildkröten"],
      hu: ["Gyönyörű nyilvános kertek", "A 17. században épült", "Páváknak és teknősöknek ad otthont"],
      ro: ["Grădini publice superbe", "Construit în secolul XVII", "Găzduiește păuni și țestoase"],
      en: ["Surrounded by beautiful public gardens", "Built in the early 17th century", "Home to ducks, swans, and peacocks"]
    }
  },
  {
    id: "poi-mt-ta-qali",
    name: { de: "Ta' Qali Crafts Village", hu: "Ta' Qali kézműves falu", ro: "Satul de meserii Ta' Qali", en: "Ta' Qali Crafts Village" },
    type: "landmark",
    coords: [14.4161, 35.8942],
    parent: "MT-036",
    description: {
      de: "Handwerkerdorf mit Glasbläserei.",
      hu: "Kézműves falu üvegfújással.",
      ro: "Sat de meșteșuguri locale.",
      en: "Crafts village with glass blowing."
    },
    facts: {
      de: ["Ehemaliger Militärflugplatz", "Maltesisches Glas", "Traditionelles Handwerk"],
      hu: ["Egykori katonai repülőtér", "Máltai üvegáru", "Hagyományos kézművesség"],
      ro: ["Fost aerodrom militar", "Sticlă malteză", "Meșteșuguri tradiționale"],
      en: ["Located on a former WWII airfield", "Famous for Mdina Glass", "Features pottery and filigree workshops"]
    }
  },

  // MT-037 Mtarfa
  {
    id: "poi-mt-mtarfa-clock",
    name: { de: "Mtarfa Uhrturm", hu: "Mtarfai óratorony", ro: "Turnul cu ceas din Mtarfa", en: "Mtarfa Clock Tower" },
    type: "landmark",
    parent: "MT-037",
    coords: [14.3986, 35.8917],
    description: {
      de: "Ein markanter Uhrturm aus der britischen Kolonialzeit.",
      hu: "Jellegzetes óratorony a brit gyarmati időszakból.",
      ro: "Un turn cu ceas distinctiv din perioada colonială britanică.",
      en: "A prominent clock tower from the British colonial era."
    },
    facts: {
      de: ["Erbaut 1895", "Teil der ehemaligen Kasernen", "Blick auf Mdina"],
      hu: ["1895-ben épült", "A korábbi laktanyák része", "Kilátás Mdinára"],
      ro: ["Construit în 1895", "Parte din fostele cazărmi", "Vedere spre Mdina"],
      en: ["Built in 1895", "Once part of the British military barracks", "Dominates the skyline of the town"]
    }
  },
  {
    id: "poi-mt-mtarfa-naval",
    name: { de: "Ehemaliges Marinekrankenhaus", hu: "Korábbi tengerészeti kórház", ro: "Fostul spital naval", en: "Former Naval Hospital" },
    type: "historical",
    parent: "MT-037",
    coords: [14.3964, 35.8906],
    description: {
      de: "Ein massives neoklassizistisches Gebäude.",
      hu: "Hatalmas neoklasszicista épület.",
      ro: "O clădire neoclasică masivă.",
      en: "A massive neo-classical building formerly used as a military hospital."
    },
    facts: {
      de: ["Heute eine staatliche Schule", "Eines der größten Gebäude Maltas", "Erbaut für britische Truppen"],
      hu: ["Ma állami iskola", "Málta egyik legnagyobb épülete", "A brit csapatok számára épült"],
      ro: ["Acum școală de stat", "Una dintre cele mai mari clădiri din Malta", "Construit pentru trupele britanice"],
      en: ["Now serves as a secondary school", "Impressive architectural scale", "Known as RNH Mtarfa during British rule"]
    }
  },

  // MT-038 Mdina
  {
    id: "poi-mt-mdina",
    name: { de: "Mdina (Stille Stadt)", hu: "Mdina (Csendes Város)", ro: "Mdina (Orașul Tăcut)", en: "Mdina (The Silent City)" },
    type: "city",
    coords: [14.4031, 35.8858],
    parent: "MT-038",
    description: {
      de: "Ehemalige Hauptstadt Maltas.",
      hu: "Málta egykori fővárosa.",
      ro: "Fosta capitală a Maltei.",
      en: "The former capital of Malta."
    },
    facts: {
      de: ["Mittelalterliche Mauern", "Autofrei", "Adelspaläste"],
      hu: ["Középkori falak", "Autómentes", "Nemesi paloták"],
      ro: ["Ziduri medievale", "Fără mașini", "Palate nobiliare"],
      en: ["Enclosed by bastion walls", "Virtually car-free", "Filming location for Game of Thrones"]
    }
  },
  {
    id: "poi-mt-st-paul-cathedral",
    name: { de: "St. Paul's Kathedrale", hu: "Szent Pál-katedrális", ro: "Catedrala Sf. Paul", en: "St. Paul's Cathedral" },
    type: "historical",
    parent: "MT-038",
    coords: [14.4039, 35.8864],
    description: {
      de: "Die Hauptkirche von Mdina.",
      hu: "Mdina főtemploma.",
      ro: "Principala biserică din Mdina.",
      en: "The cathedral of the Archdiocese of Malta, located in Mdina."
    },
    facts: {
      de: ["Erbaut nach dem Erdbeben von 1693", "Prächtige Grabplatten im Boden", "Barockes Meisterwerk"],
      hu: ["Az 1693-as földrengés után épült", "Pompás sírlapok a padlóban", "Barokk remekmű"],
      ro: ["Construită după cutremurul din 1693", "Plăci funerare superbe pe podea", "Capodoperă barocă"],
      en: ["Built after the great earthquake of 1693", "Features ornate marble floor stones", "Designed by Lorenzo Gafà"]
    }
  },
  {
    id: "poi-mt-vilhena-palace",
    name: { de: "Vilhena Palast", hu: "Vilhena-palota", ro: "Palatul Vilhena", en: "Vilhena Palace" },
    type: "historical",
    parent: "MT-038",
    coords: [14.4036, 35.8847],
    description: {
      de: "Ein französischer Barockpalast am Eingang von Mdina.",
      hu: "Francia barokk palota Mdina bejáratánál.",
      ro: "Un palat baroc francez la intrarea în Mdina.",
      en: "A grand French Baroque palace located just inside the main gate of Mdina."
    },
    facts: {
      de: ["Beherbergt das Naturhistorische Museum", "Erbaut von Großmeister de Vilhena", "Prächtiger Innenhof"],
      hu: ["A Természettudományi Múzeumnak ad otthont", "Vilhena nagymester építtette", "Pompás belső udvar"],
      ro: ["Găzduiește Muzeul Național de Istorie Naturală", "Construit de Marele Maestru de Vilhena", "Curte interioară impresionantă"],
      en: ["Built in the early 18th century", "Served as a hospital during the 19th century", "Outstanding example of Parisian style architecture in Malta"]
    }
  },

  // MT-039 Żebbuġ (Malta)
  {
    id: "poi-mt-zebbug-arch",
    name: { de: "De Rohan Bogen", hu: "De Rohan-ív", ro: "Arcul De Rohan", en: "De Rohan Arch" },
    type: "historical",
    parent: "MT-039",
    coords: [14.4444, 35.875],
    description: {
      de: "Ein monumentaler Torbogen zu Ehren von Großmeister De Rohan.",
      hu: "Monumentális boltív De Rohan nagymester tiszteletére.",
      ro: "Un arc monumental în onoarea Marelui Maestru De Rohan.",
      en: "A monumental arch built to commemorate Grand Master De Rohan."
    },
    facts: {
      de: ["Erbaut 1777", "Markiert den Eingang zur Stadt", "Klassizistischer Stil"],
      hu: ["1777-ben épült", "A város bejáratát jelzi", "Klasszicista stílus"],
      ro: ["Construit în 1777", "Marchează intrarea în oraș", "Stil neoclasic"],
      en: ["Erected in 1777", "Gateway to the old city center", "Designed in the Neoclassical style"]
    }
  },
  {
    id: "poi-mt-zebbug-church",
    name: { de: "St. Philip's Pfarrkirche", hu: "Szent Fülöp-plébániatemplom", ro: "Biserica Sf. Filip", en: "St. Philip's Parish Church" },
    type: "historical",
    parent: "MT-039",
    coords: [14.4439, 35.8722],
    description: {
      de: "Eine der beeindruckendsten Dorfkirchen Maltas.",
      hu: "Málta egyik leglátványosabb falusi temploma.",
      ro: "Una dintre cele mai impresionante biserici din satele Maltei.",
      en: "One of Malta's most impressive parish churches."
    },
    facts: {
      de: ["Wird für ihre Silberstatue gefeiert", "Barocke Innenausstattung", "Große Kuppel"],
      hu: ["Ezüst szobra miatt ünnepelt", "Barokk belső tér", "Nagy kupola"],
      ro: ["Celebră pentru statuia de argint", "Interior baroc", "Cupolă mare"],
      en: ["Famous for its silver processional statue", "Exquisite baroque decor", "Center of one of Malta's largest festas"]
    }
  },

  // MT-040 Qormi
  {
    id: "poi-mt-qormi-bread",
    name: { de: "Bäckereiviertel von Qormi", hu: "Qormi pékségnegyed", ro: "Cartierul brutăriilor din Qormi", en: "Qormi Bakery Quarter" },
    type: "landmark",
    parent: "MT-040",
    coords: [14.4683, 35.8794],
    description: {
      de: "Das Zentrum der traditionellen Brotherstellung.",
      hu: "A hagyományos kenyérkészítés központja.",
      ro: "Centrul panificației tradiționale.",
      en: "The traditional home of Maltese bread baking."
    },
    facts: {
      de: ["Wird 'Stadt des Brotes' genannt", "Hunderte Jahre alte Holzöfen", "Jährliches Brot-Festival"],
      hu: ["A 'kenyér városának' hívják", "Több száz éves fatüzelésű kemencék", "Évente kenyérfesztivált tartanak"],
      ro: ["Numit 'Orașul Pâinii'", "Cuptoare pe lemne vechi de secole", "Festival anual al pâinii"],
      en: ["Known as 'The City of Bread'", "Features ancient wood-fired ovens", "Hosts an annual Bread Festival"]
    }
  },
  {
    id: "poi-mt-st-george-qormi",
    name: { de: "St. George's Pfarrkirche", hu: "Szent György-plébániatemplom", ro: "Biserica parohială Sf. Gheorghe", en: "St. George's Parish Church" },
    type: "historical",
    parent: "MT-040",
    coords: [14.4667, 35.8778],
    description: {
      de: "Eine der ältesten Pfarreien Maltas.",
      hu: "Málta egyik legrégebbi plébániája.",
      ro: "Una dintre cele mai vechi parohii din Malta.",
      en: "One of the oldest and most historical parishes in Malta."
    },
    facts: {
      de: ["Beherbergt Gemälde von Mattia Preti", "Erbaut im 16. Jahrhundert", "Wichtiger Wallfahrtsort"],
      hu: ["Mattia Preti festményeit őrzi", "A 16. században épült", "Fontos zarándokhely"],
      ro: ["Găzduiește picturi de Mattia Preti", "Construită în secolul XVI", "Importante loc de pelerinaj"],
      en: ["Houses valuable works by Mattia Preti", "Foundation dates back to early 15th century", "Central to the town's historical identity"]
    }
  },

  // MT-041 Swieqi
  {
    id: "poi-mt-madliena-bridge",
    name: { de: "Madliena Brücke", hu: "Madliena-híd", ro: "Podul Madliena", en: "Madliena Bridge" },
    type: "historical",
    parent: "MT-041",
    coords: [14.4711, 35.9283],
    description: {
      de: "Eine historische Brücke der Victoria Lines.",
      hu: "A Victoria-vonalak történelmi hídja.",
      ro: "Un pod istoric al liniilor Victoria.",
      en: "A historic bridge forming part of the Victoria Lines."
    },
    facts: {
      de: ["Einzigartige Architektur über ein Tal", "Erbaut im späten 19. Jahrhundert", "Beliebt bei Wanderern"],
      hu: ["Egyedi építészet egy völgy felett", "A 19. század végén épült", "Túrázók körében népszerű"],
      ro: ["Arhitectură unică peste o vale", "Construit la sfârșitul secolului XIX", "Popular printre turiști"],
      en: ["Unique stone arch structure", "Overspans Wied id-Dis", "Key point along the Victoria Lines walk"]
    }
  },
  {
    id: "poi-mt-swieqi-parish",
    name: { de: "Swieqi Pfarrkirche", hu: "Swieqi plébániatemplom", ro: "Biserica parohială din Swieqi", en: "Swieqi Parish Church" },
    type: "landmark",
    parent: "MT-041",
    coords: [14.4783, 35.92],
    description: {
      de: "Das geistliche Zentrum des modernen Swieqi.",
      hu: "A modern Swieqi hitéleti központja.",
      ro: "Centrul spiritual din Swieqi modern.",
      en: "The modern spiritual center of the Swieqi community."
    },
    facts: {
      de: ["Zeitgenössisches Design", "Zentral im Wohngebiet gelegen", "Treffpunkt der Gemeinschaft"],
      hu: ["Kortárs design", "A lakóövezet központjában található", "Közösségi találkozóhely"],
      ro: ["Design contemporan", "Situată central în zona rezidențială", "Loc de întâlnire al comunității"],
      en: ["Features contemporary architecture", "Located in the heart of this residential suburb", "Dedicated to Our Lady of the Immaculate Conception"]
    }
  },

  // MT-042 Għargħur
  {
    id: "poi-mt-top-of-the-world",
    name: { de: "Top of the World", hu: "Top of the World", ro: "Top of the World", en: "Top of the World" },
    type: "landmark",
    parent: "MT-042",
    coords: [14.4533, 35.9267],
    description: {
      de: "Ein Aussichtspunkt mit weitem Blick über Malta.",
      hu: "Kilátópont, ahonnan belátni egész Máltát.",
      ro: "Un punct de observație cu o vedere largă asupra Maltei.",
      en: "A popular viewpoint offering wide views over northern Malta."
    },
    facts: {
      de: ["An den Victoria Lines gelegen", "Beliebt für Picknicks", "Hervorragend für Sonnenaufgänge"],
      hu: ["A Victoria-vonalak mentén található", "Népszerű piknikező hely", "Kiváló napfelkelte-néző hely"],
      ro: ["Situat pe liniile Victoria", "Popular pentru picnicuri", "Excelent pentru răsărituri"],
      en: ["Located along the Victoria Lines", "Favorite spot for hiking and picnics", "Offers views as far as Gozo on clear days"]
    }
  },
  {
    id: "poi-mt-gharghur-church",
    name: { de: "Għargħur Pfarrkirche", hu: "Għargħur plébániatemplom", ro: "Biserica parohială din Għargħur", en: "Għargħur Parish Church" },
    type: "historical",
    parent: "MT-042",
    coords: [14.4517, 35.9244],
    description: {
      de: "Eine charmante barocke Kirche im alten Dorfkern.",
      hu: "Bájos barokk templom a régi falu központjában.",
      ro: "O biserică barocă fermecătoare în centrul vechi al satului.",
      en: "A charming baroque church in the heart of one of Malta's oldest villages."
    },
    facts: {
      de: ["Dem hl. Bartholomäus geweiht", "Erbaut im 17. Jahrhundert", "Schöner Kirchplatz"],
      hu: ["Szent Bertalannak szentelve", "A 17. században épült", "Szép templomtér"],
      ro: ["Dedicată Sf. Bartolomeu", "Construită în secolul XVII", "Piață frumoasă în fața bisericii"],
      en: ["Dedicated to St. Bartholomew", "Boasts a beautiful classical facade", "Central landmark of the quiet village"]
    }
  },

  // MT-043 San Ġwann
  {
    id: "poi-mt-mensija-sanctuary",
    name: { de: "Mensija Heiligtum", hu: "Mensija-kegyhely", ro: "Sanctuarul Mensija", en: "Mensija Sanctuary" },
    type: "historical",
    parent: "MT-043",
    coords: [14.4772, 35.9083],
    description: {
      de: "Eine kleine Höhlenkirche mit einer legendenhaften Geschichte.",
      hu: "Kis barlangtemplom legendás történettel.",
      ro: "O mică biserică în peșteră cu o istorie legendară.",
      en: "A unique cave-church with a rich local legend."
    },
    facts: {
      de: ["Teilweise in den Fels gehauen", "Sehr alte Gebetsstätte", "Friedliche Atmosphäre"],
      hu: ["Részben a sziklába vájva", "Nagyon régi imádkozóhely", "Békés hangulat"],
      ro: ["Săpată parțial în stâncă", "Loc de rugăciune foarte vechi", "Atmosferă liniștită"],
      en: ["Partially built into a natural cave", "Associated with a medieval legend of a lost candle", "Oasis of peace in a busy area"]
    }
  },
  {
    id: "poi-mt-san-gwann-ruts",
    name: { de: "Karrenspuren von San Ġwann", hu: "San Ġwann-i keréknyomok", ro: "Urmele de căruță din San Ġwann", en: "San Ġwann Cart Ruts" },
    type: "historical",
    parent: "MT-043",
    coords: [14.4811, 35.9056],
    description: {
      de: "Prähistorische Furchen im Felsboden.",
      hu: "Prehisztorikus barázdák a sziklás talajon.",
      ro: "Șanțuri preistorice în solul stâncos.",
      en: "Prehistoric mysterious tracks carved into the limestone."
    },
    facts: {
      de: ["Rätselhafte Herkunft", "Inmitten eines Wohngebiets erhalten", "Vermutlich aus der Bronzezeit"],
      hu: ["Rejtélyes eredet", "Lakóövezet közepén maradt fenn", "Valószínűleg a bronzkorból származik"],
      ro: ["Origine misterioasă", "Conservate în mijlocul unei zone rezidențiale", "Probabil din epoca bronzului"],
      en: ["Exact purpose remains a mystery", "Preserved amidst modern buildings", "Thought to date back to the Bronze Age"]
    }
  },

  // MT-044 Iklin
  {
    id: "poi-mt-iklin-chapel",
    name: { de: "St. Michael Kapelle", hu: "Szent Mihály-kápolna", ro: "Capela Sf. Mihail", en: "St. Michael Chapel" },
    type: "historical",
    parent: "MT-044",
    coords: [14.4567, 35.9033],
    description: {
      de: "Eine kleine ländliche Kapelle aus dem 17. Jahrhundert.",
      hu: "Kis vidéki kápolna a 17. századból.",
      ro: "O mică capelă rurală din secolul XVII.",
      en: "A small rural chapel from the 17th century."
    },
    facts: {
      de: ["Einzige historische Kapelle in Iklin", "Schlichtes Design", "Dem Erzengel Michael geweiht"],
      hu: ["Iklin egyetlen történelmi kápolnája", "Egyszerű design", "Szent Mihály arkangyalnak szentelve"],
      ro: ["Singura capelă istorică din Iklin", "Design simplu", "Dedicată Arhanghelului Mihail"],
      en: ["Sole historical monument in modern Iklin", "Quiet place of worship", "Reflects old Maltese rural life"]
    }
  },
  {
    id: "poi-mt-iklin-square",
    name: { de: "Iklin Platz", hu: "Iklin tér", ro: "Piața Iklin", en: "Iklin Square" },
    type: "landmark",
    parent: "MT-044",
    coords: [14.455, 35.905],
    description: {
      de: "Das Zentrum der modernen Gemeinde Iklin.",
      hu: "Iklin modern községének központja.",
      ro: "Centrul comunei moderne Iklin.",
      en: "The hub of the modern residential community of Iklin."
    },
    facts: {
      de: ["Viele Geschäfte und Cafés", "Moderner Treffpunkt", "Zentral gelegen"],
      hu: ["Számos üzlet és kávézó", "Modern találkozóhely", "Központi fekvés"],
      ro: ["Multe magazine și cafenele", "Loc de întâlnire modern", "Poziție centrală"],
      en: ["Central point for local services", "Features modern public spaces", "Easily accessible from the main road"]
    }
  },

  // MT-045 Birkirkara
  {
    id: "poi-mt-birkirkara",
    name: { de: "St. Helen's Basilika", hu: "Szent Ilona-bazilika", ro: "Bazilica Sf. Elena", en: "St. Helen's Basilica" },
    type: "city",
    coords: [14.4611, 35.8972],
    parent: "MT-045",
    description: {
      de: "Eine prachtvolle barocke Basilika.",
      hu: "Pompás barokk bazilika.",
      ro: "O bazilică barocă splendidă.",
      en: "A magnificent baroque basilica."
    },
    facts: {
      de: ["Birkirkaras Wahrzeichen", "Beherbergt Maltas größte Glocke", "Großartiges Dorffest"],
      hu: ["Birkirkara jelképe", "Itt található Málta legnagyobb harangja", "Hatalmas falusi ünnepség"],
      ro: ["Simbolul orașului Birkirkara", "Găzduiește cel mai mare clopot din Malta", "Festival local grandios"],
      en: ["Ornate example of baroque architecture", "Houses the largest bell in Malta", "Known for its grand annual festa"]
    }
  },
  {
    id: "poi-mt-birkirkara-station",
    name: { de: "Alte Bahnstation", hu: "Régi vasútállomás", ro: "Vechea gară", en: "Old Railway Station" },
    type: "historical",
    parent: "MT-045",
    coords: [14.4625, 35.8986],
    description: {
      de: "Ein Relikt der ehemaligen maltesischen Eisenbahn.",
      hu: "A korábbi máltai vasút emléke.",
      ro: "Un vestigiu al fostei căi ferate malteze.",
      en: "A remnant of the former Malta Railway system."
    },
    facts: {
      de: ["Heute ein öffentlicher Garten", "Einziger erhaltener Waggon vor Ort", "Stillgelegt 1931"],
      hu: ["Ma nyilvános kert", "Az egyetlen fennmaradt vagon itt látható", "1931-ben szüntették meg"],
      ro: ["Acum grădină publică", "Singurul vagon conservat se află aici", "Închisă în 1931"],
      en: ["Converted into a public garden", "Features the only surviving railway carriage", "The railway operated from 1883 to 1931"]
    }
  },

  // MT-046 Balzan
  {
    id: "poi-mt-balzan-church",
    name: { de: "Balzan Pfarrkirche", hu: "Balzan plébániatemplom", ro: "Biserica parohială din Balzan", en: "Balzan Parish Church" },
    type: "historical",
    parent: "MT-046",
    coords: [14.4533, 35.8986],
    description: {
      de: "Eine elegante barocke Kirche im Herzen des Dorfes.",
      hu: "Elegáns barokk templom a falu szívében.",
      ro: "O biserică barocă elegantă în inima satului.",
      en: "A fine baroque parish church dedicated to the Annunciation."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Wunderschöne Innendekoration", "Prächtiger Altar"],
      hu: ["A 17. században épült", "Gyönyörű belső díszítés", "Pompás oltár"],
      ro: ["Construită în secolul XVII", "Decor interior superb", "Altar somptuos"],
      en: ["Dates back to the mid-17th century", "Contains works by Giuseppe Calleja", "Located in the historic village core"]
    }
  },
  {
    id: "poi-mt-wignacourt-aqueduct",
    name: { de: "Wignacourt-Aquädukt", hu: "Wignacourt-vízvezeték", ro: "Apeductul Wignacourt", en: "Wignacourt Aqueduct" },
    type: "historical",
    parent: "MT-046",
    coords: [14.4583, 35.8972],
    description: {
      de: "Teile einer historischen Wasserleitung.",
      hu: "Történelmi vízvezeték részei.",
      ro: "Părți ale unui apeduct istoric.",
      en: "Segments of a 17th-century aqueduct that supplied Valletta."
    },
    facts: {
      de: ["Erbaut von Großmeister Wignacourt", "Verband Dingli mit Valletta", "Hübscher Torbogen in Balzan"],
      hu: ["Wignacourt nagymester építette", "Dinglit kötötte össze Vallettával", "Szép boltív Balzanban"],
      ro: ["Construit de Marele Maestru Wignacourt", "Conecta Dingli cu Valletta", "Arcadă frumoasă în Balzan"],
      en: ["Built to transport water by gravity", "Once stretched over 15 kilometers", "Major engineering feat of its time"]
    }
  },

  // MT-047 Santa Venera
  {
    id: "poi-mt-romeo-romano",
    name: { de: "Romeo Romano Gärten", hu: "Romeo Romano-kertek", ro: "Grădinile Romeo Romano", en: "Romeo Romano Gardens" },
    type: "landmark",
    parent: "MT-047",
    coords: [14.4789, 35.89],
    description: {
      de: "Einer der größten Gärten der Umgebung.",
      hu: "A környék egyik legnagyobb kertje.",
      ro: "Una dintre cele mai mari grădini din zonă.",
      en: "One of the largest gardens in the Santa Venera area."
    },
    facts: {
      de: ["Gehörte ursprünglich zur Casa Leoni", "Altes Bewässerungssystem", "Friedliche Grünoase"],
      hu: ["Eredetileg a Casa Leonihoz tartozott", "Régi öntözőrendszer", "Békés zöld oázis"],
      ro: ["A aparținut inițial Casei Leoni", "Sistem vechi de irigații", "Oază verde de liniște"],
      en: ["Originally the garden of the 18th-century Casa Leoni", "Features a historic water mill", "Quiet retreat in an urban area"]
    }
  },
  {
    id: "poi-mt-casa-leoni",
    name: { de: "Casa Leoni", hu: "Casa Leoni", ro: "Casa Leoni", en: "Casa Leoni" },
    type: "historical",
    parent: "MT-047",
    coords: [14.4794, 35.8906],
    description: {
      de: "Ein prachtvoller Palast aus dem 18. Jahrhundert.",
      hu: "Pompás 18. századi palota.",
      ro: "Un palat splendid din secolul XVIII.",
      en: "An 18th-century palace built for the Grand Master Vilhena."
    },
    facts: {
      de: ["Beherbergt heute Regierungsbüros", "Klassische maltesische Architektur", "Bekannt für seine Fassade"],
      hu: ["Ma kormányzati irodáknak ad otthont", "Klasszikus máltai építészet", "Híres homlokzat"],
      ro: ["Găzduiește birouri guvernamentale", "Arhitectură malteză clasică", "Cunoscut pentru fațada sa"],
      en: ["Served as a summer residence", "Fine example of Baroque/Neoclassical transition", "Also known as Palazzo Manoel"]
    }
  },

  // MT-048 Ħamrun
  {
    id: "poi-mt-miraculous-medal",
    name: { de: "Wundertätige Medaille Kirche", hu: "Csodás Érem templom", ro: "Biserica Medaliei Miraculoase", en: "Miraculous Medal Church" },
    type: "landmark",
    parent: "MT-048",
    coords: [14.4858, 35.8858],
    description: {
      de: "Eine moderne Kirche mit großer Bedeutung für die Gemeinde.",
      hu: "Modern templom nagy jelentőséggel a közösség számára.",
      ro: "O biserică modernă cu mare importanță pentru comunitate.",
      en: "A significant modern church in the bustling town of Ħamrun."
    },
    facts: {
      de: ["Zentrum der MUSEUM-Gesellschaft", "Reliquien des hl. George Preca", "Moderner Baustil"],
      hu: ["A MUSEUM társaság központja", "Szent George Preca ereklyéi", "Modern építészeti stílus"],
      ro: ["Centrul societății MUSEUM", "Relicve ale Sf. George Preca", "Stil arhitectural modern"],
      en: ["Headquarters of the SDC (MUSEUM) society", "Houses the relics of St. George Preca", "Key religious landmark in Ħamrun"]
    }
  },
  {
    id: "poi-mt-hamrun-liberty",
    name: { de: "Freiheitsdenkmal Ħamrun", hu: "Ħamruni szabadság-emlékmű", ro: "Monumentul Libertății din Ħamrun", en: "Ħamrun Liberty Monument" },
    type: "landmark",
    parent: "MT-048",
    coords: [14.4844, 35.8847],
    description: {
      de: "Ein Denkmal zur Feier der lokalen Identität.",
      hu: "A helyi identitás tiszteletére emelt emlékmű.",
      ro: "Un monument pentru celebrarea identității locale.",
      en: "A monument celebrating the town's spirit and history."
    },
    facts: {
      de: ["Zentral gelegen", "Beliebter Treffpunkt", "Markiert die Unabhängigkeit"],
      hu: ["Központi fekvés", "Népszerű találkozóhely", "A függetlenséget jelzi"],
      ro: ["Poziție centrală", "Loc de întâlnire popular", "Marchează independența"],
      en: ["Focal point for town celebrations", "Commemorates social progress", "Located on the main road"]
    }
  },

  // MT-049 Marsa
  {
    id: "poi-mt-marsa-racing",
    name: { de: "Marsa Pferderennbahn", hu: "Marsai lóversenypálya", ro: "Hipodromul Marsa", en: "Marsa Horse Racing Track" },
    type: "landmark",
    parent: "MT-049",
    coords: [14.4917, 35.8756],
    description: {
      de: "Die einzige Pferderennbahn Maltas.",
      hu: "Málta egyetlen lóversenypályája.",
      ro: "Singurul hipodrom din Malta.",
      en: "The primary venue for horse racing in Malta."
    },
    facts: {
      de: ["Sehr beliebter Volkssport", "Trabrennen sind Tradition", "Erbaut im 19. Jahrhundert"],
      hu: ["Nagyon népszerű népsport", "Az ügetőversenyeknek nagy hagyománya van", "A 19. században épült"],
      ro: ["Sport popular foarte iubit", "Cursele de trap sunt tradiționale", "Construit în secolul XIX"],
      en: ["Horse racing is extremely popular in Malta", "Focuses on trotting races", "Established during British rule in 1868"]
    }
  },
  {
    id: "poi-mt-turkish-cemetery",
    name: { de: "Türkischer Militärfriedhof", hu: "Török katonai temető", ro: "Cimitirul Militar Turc", en: "Turkish Military Cemetery" },
    type: "historical",
    parent: "MT-049",
    coords: [14.4967, 35.875],
    description: {
      de: "Ein architektonisch einzigartiger Friedhof.",
      hu: "Építészetileg egyedülálló temető.",
      ro: "Un cimitir unic din punct de vedere arhitectural.",
      en: "A stunning piece of Ottoman architecture in Malta."
    },
    facts: {
      de: ["Entworfen von Emanuele Luigi Galizia", "Erbaut im Jahr 1874", "Orientalischer Baustil"],
      hu: ["Emanuele Luigi Galizia tervezte", "1874-ben épült", "Orientalista építészeti stílus"],
      ro: ["Proiectat de Emanuele Luigi Galizia", "Construit în 1874", "Stil arhitectural oriental"],
      en: ["Designed by the renowned Maltese architect Galizia", "Commissioned by Sultan Abdülaziz", "Exceptional example of Moorish Revival style"]
    }
  },

  // MT-050 Luqa
  {
    id: "poi-mt-airport",
    name: { de: "Malta International Airport", hu: "Máltai Nemzetközi Repülőtér", ro: "Aeroportul Internațional Malta", en: "Malta International Airport" },
    type: "landmark",
    parent: "MT-050",
    coords: [14.4775, 35.8575],
    description: {
      de: "Das Tor Maltas zur Welt.",
      hu: "Málta kapuja a világra.",
      ro: "Poarta Maltei către lume.",
      en: "The only international airport in the Maltese Islands."
    },
    facts: {
      de: ["Sitz von Air Malta", "Besucherterrasse", "Ehemals RAF Luqa"],
      hu: ["Az Air Malta székhelye", "Kilátóterasz látogatóknak", "Korábban RAF Luqa bázis"],
      ro: ["Sediul Air Malta", "Terasa pentru vizitatori", "Fostă bază RAF Luqa"],
      en: ["The main hub for the national airline", "Features a popular observation deck", "History as a strategic military base"]
    }
  },
  {
    id: "poi-mt-luqa-parish",
    name: { de: "Luqa Pfarrkirche", hu: "Luqai plébániatemplom", ro: "Biserica parohială din Luqa", en: "Luqa Parish Church" },
    type: "historical",
    parent: "MT-050",
    coords: [14.4886, 35.8594],
    description: {
      de: "Eine große Barockkirche, dem hl. Andreas geweiht.",
      hu: "Hatalmas barokk templom, Szent András tiszteletére.",
      ro: "O biserică barocă mare, dedicată Sf. Andrei.",
      en: "A large baroque parish church dedicated to St. Andrew."
    },
    facts: {
      de: ["Im 2. Weltkrieg zerstört und wiederaufgebaut", "Große Kunstsammlung", "Prächtiges Dorffest"],
      hu: ["A II. világháborúban elpusztult, majd újjáépült", "Jelentős művészeti gyűjtemény", "Pompás falusi ünnepség"],
      ro: ["Distrusă în Al Doilea Război Mondial și reconstruită", "Colecție importantă de artă", "Festival local grandios"],
      en: ["Suffered direct hits during WWII and was rebuilt", "Features a statue by Giuseppe Scolaro", "Major local landmark"]
    }
  },

  // MT-051 Mqabba
  {
    id: "poi-mt-mqabba-catacombs",
    name: { de: "Mqabba Katakomben", hu: "Mqabbai katakombák", ro: "Catacombele din Mqabba", en: "Mqabba Catacombs" },
    type: "historical",
    parent: "MT-051",
    coords: [14.4667, 35.845],
    description: {
      de: "Ein kleiner, aber bedeutender Katakombenkomplex.",
      hu: "Kicsi, de jelentős katakombarendszer.",
      ro: "Un complex de catacombe mic, dar important.",
      en: "A small yet historically significant group of catacombs."
    },
    facts: {
      de: ["Bekannt als Tal-Mintna", "Beweis für frühchristliche Rituale", "Sorgfältig in den Fels gehauen"],
      hu: ["Tal-Mintna néven ismert", "Korai keresztény rituálék bizonyítéka", "Gondosan sziklába vájt üregek"],
      ro: ["Cunoscute sub numele de Tal-Mintna", "Dovadă a ritualurilor creștine timpurii", "Săpate cu grijă în stâncă"],
      en: ["Known specifically as the Tal-Mintna Catacombs", "Features intricate rock-cut agape tables", "Discovered in 1860"]
    }
  },
  {
    id: "poi-mt-mqabba-tower",
    name: { de: "Vincenti-Turm", hu: "Vincenti-torony", ro: "Turnul Vincenti", en: "Vincenti Tower" },
    type: "historical",
    parent: "MT-051",
    coords: [14.4658, 35.8444],
    description: {
      de: "Ein privater befestigter Wohnturm.",
      hu: "Magánkézben lévő erődített lakótorony.",
      ro: "Un turn rezidențial fortificat privat.",
      en: "A privately owned fortified tower built as a residence."
    },
    facts: {
      de: ["Erbaut im 18. Jahrhundert", "Diente als Zufluchtsort", "Einzigartige quadratische Form"],
      hu: ["A 18. században épült", "Menedékként szolgált", "Egyedi négyszögletes forma"],
      ro: ["Construit în secolul XVIII", "Folosit ca refugiu", "Formă pătrată unică"],
      en: ["Built by Fra Orfeo de Vincenti", "Intended as a rural retreat and watchtower", "One of the few such towers remaining in Malta"]
    }
  },

  // MT-052 Kirkop
  {
    id: "poi-mt-kirkop-menhir",
    name: { de: "Menhir von Kirkop", hu: "Kirkopi menhir", ro: "Menhirul din Kirkop", en: "Kirkop Menhir" },
    type: "historical",
    parent: "MT-052",
    coords: [14.4844, 35.8422],
    description: {
      de: "Ein seltener prähistorischer Menhir.",
      hu: "Ritka prehisztorikus menhir.",
      ro: "Un menhir preistoric rar.",
      en: "One of the few remaining prehistoric menhirs in Malta."
    },
    facts: {
      de: ["Über 3 Meter hoch", "Aus der Bronzezeit", "Spezielle spirituelle Bedeutung"],
      hu: ["Több mint 3 méter magas", "A bronzkorból származik", "Különleges spirituális jelentőség"],
      ro: ["Peste 3 metri înălțime", "Din epoca bronzului", "Semnificație spirituală specială"],
      en: ["Stands over 3 meters tall", "Known locally as 'Is-Salib tal-Għolja'", "Dating back to the Temple Period or Bronze Age"]
    }
  },
  {
    id: "poi-mt-kirkop-church",
    name: { de: "Kirkop Pfarrkirche", hu: "Kirkopi plébániatemplom", ro: "Biserica parohială din Kirkop", en: "Kirkop Parish Church" },
    type: "historical",
    parent: "MT-052",
    coords: [14.4853, 35.8425],
    description: {
      de: "Eine typische maltesische Dorfkirche, dem hl. Leonhard geweiht.",
      hu: "Tipikus máltai falusi templom, Szent Lénárt tiszteletére.",
      ro: "O biserică tipică malteză de sat, dedicată Sf. Leonard.",
      en: "A classic Maltese village church dedicated to St. Leonard."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert", "Schönes Interieur", "Zentrum des ruhigen Dorflebens"],
      hu: ["A 16. században épült", "Szép belső tér", "A nyugodt falusi élet központja"],
      ro: ["Construită în secolul XVI", "Interior frumos", "Centrul vieții liniștite de sat"],
      en: ["Became a parish in 1592", "Features a rich set of religious statues", "Well-maintained community landmark"]
    }
  },

  // MT-053 Safi
  {
    id: "poi-mt-safi-garden",
    name: { de: "Sir Alexander Ball Garten", hu: "Sir Alexander Ball kert", ro: "Grădina Sir Alexander Ball", en: "Sir Alexander Ball's Garden" },
    type: "landmark",
    parent: "MT-053",
    coords: [14.485, 35.8344],
    description: {
      de: "Ein kleiner, ruhiger Garten im Herzen des Dorfes.",
      hu: "Kicsi, csendes kert a falu szívében.",
      ro: "O mică grădină liniștită în inima satului.",
      en: "A small, peaceful garden in the heart of the village."
    },
    facts: {
      de: ["Conține antike Mauerreste", "Benannt nach dem ersten britischen Gouverneur", "Schattige Plätze"],
      hu: ["Antik faldarabokat tartalmaz", "Az első brit kormányzóról kapta a nevét", "Árnyas pihenőhelyek"],
      ro: ["Conține fragmente de ziduri antice", "Numită după primul guvernator britanic", "Locuri umbroase"],
      en: ["Contains remnants of a Roman wall", "Named after the Civil Commissioner of Malta", "Oasis of greenery in a quiet village"]
    }
  },
  {
    id: "poi-mt-safi-church",
    name: { de: "Safi Pfarrkirche", hu: "Safi plébániatemplom", ro: "Biserica parohială din Safi", en: "Safi Parish Church" },
    type: "historical",
    parent: "MT-053",
    coords: [14.4847, 35.8336],
    description: {
      de: "Eine schlichte, aber schöne Barockkirche.",
      hu: "Egyszerű, de szép barokk templom.",
      ro: "O biserică barocă simplă, dar frumoasă.",
      en: "A simple and elegant baroque church dedicated to the Conversion of St. Paul."
    },
    facts: {
      de: ["Erbaut im 18. Jahrhundert", "Elegante Fassade", "Sehr gepflegt"],
      hu: ["A 18. században épült", "Elegáns homlokzat", "Nagyon gondozott"],
      ro: ["Construită în secolul XVIII", "Fațadă elegantă", "Foarte bine întreținută"],
      en: ["Completed in 1744", "Center of local community life", "Known for its beautiful proportions"]
    }
  },

  // MT-054 Għaxaq
  {
    id: "poi-mt-shell-house",
    name: { de: "Muschelhaus", hu: "Kagylósház", ro: "Casa cu scoici", en: "The Sea Shell House" },
    type: "landmark",
    parent: "MT-054",
    coords: [14.5161, 35.8492],
    description: {
      de: "Ein Haus, dessen Fassade vollständig mit Muscheln dekoriert ist.",
      hu: "Ház, amelynek homlokzatát teljes egészében kagylók díszítik.",
      ro: "O casă a cărei fațadă este decorată în întregime cu scoici.",
      en: "A unique house with a facade completely covered in decorative sea shells."
    },
    facts: {
      de: ["Privatbesitz", "Motive aus christlicher Symbolik", "Sehr ungewöhnlich"],
      hu: ["Magántulajdon", "Keresztény szimbólumok motívumai", "Nagyon szokatlan"],
      ro: ["Proprietate privată", "Motive din simbolistica creștină", "Foarte neobișnuit"],
      en: ["A work of folk art created by the owner", "Features intricate patterns and religious symbols", "Popular curiosity for tourists"]
    }
  },
  {
    id: "poi-mt-ghaxaq-church",
    name: { de: "Għaxaq Pfarrkirche", hu: "Għaxaqi plébániatemplom", ro: "Biserica parohială din Għaxaq", en: "Għaxaq Parish Church" },
    type: "historical",
    parent: "MT-054",
    coords: [14.5167, 35.8483],
    description: {
      de: "Eine beeindruckende Barockkirche im Zentrum.",
      hu: "Lenyűgöző barokk templom a központban.",
      ro: "O biserică barocă impresionantă în centru.",
      en: "An impressive baroque parish church dedicated to the Assumption of Mary."
    },
    facts: {
      de: ["Prächtige Kuppel", "Reiche Innendekoration", "Dem hl. Rochus geweiht"],
      hu: ["Pompás kupola", "Gazdag belső díszítés", "Szent Rókus tiszteletére"],
      ro: ["Cupolă somptuoasă", "Decor interior bogat", "Dedicată Sf. Roch"],
      en: ["Dominates the town square", "Features exquisite sculpture work", "Central to the lively local festa"]
    }
  },

  // MT-055 Żejtun
  {
    id: "poi-mt-zejtun-parish",
    name: { de: "St. Catherine's Basilika", hu: "Szent Katalin-bazilika", ro: "Bazilica Sf. Ecaterina", en: "St. Catherine's Parish Church" },
    type: "historical",
    parent: "MT-055",
    coords: [14.5333, 35.8553],
    description: {
      de: "Eine der prächtigsten Kirchen im Süden Maltas.",
      hu: "Málta déli részének egyik legpompásabb temploma.",
      ro: "Una dintre cele mai superbe biserici din sudul Maltei.",
      en: "A masterpiece of baroque architecture in the south of Malta."
    },
    facts: {
      de: ["Erbaut von Lorenzo Gafà", "Wahrzeichen von Żejtun", "Besitzt wertvolle Kunstwerke"],
      hu: ["Lorenzo Gafà tervezte", "Żejtun jelképe", "Értékes műalkotásokkal rendelkezik"],
      ro: ["Proiectată de Lorenzo Gafà", "Simbolul orașului Żejtun", "Deține opere de artă valoroase"],
      en: ["Designed by the architect of Mdina Cathedral", "Magnificent dome and twin towers", "Hosts a huge festival in June"]
    }
  },
  {
    id: "poi-mt-st-gregory",
    name: { de: "St. Gregory's Kirche", hu: "Szent Gergely-templom", ro: "Biserica Sf. Grigore", en: "St. Gregory's Church" },
    type: "historical",
    parent: "MT-055",
    coords: [14.5408, 35.8525],
    description: {
      de: "Die alte Pfarrkirche von Żejtun.",
      hu: "Żejtun régi plébániatemploma.",
      ro: "Vechea biserică parohială din Żejtun.",
      en: "The ancient parish church of Żejtun, full of history."
    },
    facts: {
      de: ["Enthält mittelalterliche Geheimgänge", "Ort der jährlichen Prozession am ersten Mittwoch nach Ostern", "Befestigte Struktur"],
      hu: ["Középkori titkos folyosókat rejt", "Évente körmenet helyszíne húsvét után", "Erődített szerkezet"],
      ro: ["Conține pasaje secrete medievale", "Locul procesiunii anuale de după Paști", "Structură fortificată"],
      en: ["Known for secret passages discovered in its walls", "Final point of the historic St. Gregory's pilgrimage", "Blend of various architectural styles"]
    }
  },

  // MT-056 Fgura
  {
    id: "poi-mt-fgura-monument",
    name: { de: "Fgura Monument", hu: "Fgura-emlékmű", ro: "Monumentul Fgura", en: "Fgura Monument" },
    type: "landmark",
    parent: "MT-056",
    coords: [14.5233, 35.8717],
    description: {
      de: "Ein markantes Denkmal im Herzen von Fgura.",
      hu: "Jellegzetes emlékmű Fgura szívében.",
      ro: "Un monument distinctiv în inima orașului Fgura.",
      en: "A modern landmark in the center of the town."
    },
    facts: {
      de: ["Zentral im Ort gelegen", "Treffpunkt der Gemeinde", "Modernes Design"],
      hu: ["A város központjában található", "A közösség találkozóhelye", "Modern design"],
      ro: ["Situat central în oraș", "Loc de întâlnire pentru comunitate", "Design modern"],
      en: ["Focal point for the local community", "Located on the main thoroughfare", "Symbolizes the town's growth"]
    }
  },
  {
    id: "poi-mt-fgura-church",
    name: { de: "Fgura Pfarrkirche", hu: "Fgura plébániatemplom", ro: "Biserica parohială din Fgura", en: "Fgura Parish Church" },
    type: "landmark",
    parent: "MT-056",
    coords: [14.5225, 35.8725],
    description: {
      de: "Eine der modernsten Kirchen Maltas.",
      hu: "Málta egyik legmodernebb temploma.",
      ro: "Una dintre cele mai moderne biserici din Malta.",
      en: "A uniquely designed modern church in Fgura."
    },
    facts: {
      de: ["Zeltartige Dachkonstruktion", "Großer offener Innenraum", "Dem hl. Karmel geweiht"],
      hu: ["Sátorszerű tetőszerkezet", "Nagy, nyitott belső tér", "A Karmel-hegyi Boldogasszonynak szentelve"],
      ro: ["Acoperiș în formă de cort", "Spațiu interior vast", "Dedicată Maicii Domnului de pe Muntele Carmel"],
      en: ["Features a striking tent-like concrete roof", "One of the largest parishes by population", "Icon of modern religious architecture in Malta"]
    }
  },

  // MT-057 Tarxien
  {
    id: "poi-mt-tarxien",
    name: { de: "Tarxien-Tempel", hu: "Tarxien templomok", ro: "Templele Tarxien", en: "Tarxien Temples" },
    type: "historical",
    coords: [14.5117, 35.8697],
    parent: "MT-057",
    description: {
      de: "Archäologische Stätte aus der Jungsteinzeit.",
      hu: "Újkőkorszaki régészeti lelőhely.",
      ro: "Sit arheologic neolitic.",
      en: "Neolithic archaeological site."
    },
    facts: {
      de: ["Fein gearbeitete Steinmetzarbeiten", "UNESCO-Welterbe", "Gefundene Statuen (Magna Mater)"],
      hu: ["Finoman kidolgozott kőfaragások", "UNESCO Világörökség", "Itt találták a 'Magna Mater' szobrot"],
      ro: ["Sculpturi detaliate în piatră", "Patrimoniu UNESCO", "Locul unde s-a găsit statuia 'Magna Mater'"],
      en: ["UNESCO World Heritage site", "Renowned for complex stone carvings", "Discovered by local farmers in 1913"]
    }
  },
  {
    id: "poi-mt-kordin",
    name: { de: "Kordin III Temples", hu: "Kordin III templomok", ro: "Templele Kordin III", en: "Kordin III Temples" },
    type: "historical",
    parent: "MT-057",
    coords: [14.5083, 35.8767],
    description: {
      de: "Ein weiterer wichtiger Tempelkomplex in der Nähe.",
      hu: "Egy másik fontos templomkomplexum a közelben.",
      ro: "Un alt complex de temple important în apropiere.",
      en: "A lesser-known but important megalithic temple complex."
    },
    facts: {
      de: ["Auf dem Kordin-Plateau gelegen", "Blick auf den Grand Harbour", "Einer von ursprünglich drei Komplexen"],
      hu: ["A Kordin-fennsíkon található", "Kilátás a Grand Harbourra", "Eredetileg három komplexum egyike"],
      ro: ["Situat pe platoul Kordin", "Vedere spre Marele Port", "Unul dintre cele trei complexe originale"],
      en: ["Located on the Corradino heights", "Features a unique stone trough", "Accessed by appointment with Heritage Malta"]
    }
  },

  // MT-058 Santa Luċija
  {
    id: "poi-mt-garden-serenity",
    name: { de: "Garten der Gelassenheit", hu: "A derű kertje", ro: "Grădina Serinității", en: "Chinese Garden of Serenity" },
    type: "landmark",
    parent: "MT-058",
    coords: [14.5061, 35.8617],
    description: {
      de: "Ein authentischer chinesischer Garten.",
      hu: "Autentikus kínai kert.",
      ro: "O grădină chinezească autentică.",
      en: "A beautiful and traditional Chinese garden."
    },
    facts: {
      de: ["Geschenk der Volksrepublik China", "Pagoden und Teiche", "Ort der Meditation"],
      hu: ["Kína ajándéka", "Pagodák és tavak", "A meditáció helyszíne"],
      ro: ["Cadou din partea Chinei", "Pagode și iazuri", "Loc de meditație"],
      en: ["Built with authentic materials from China", "Features symbols representing birth, life, and death", "Peaceful oasis with koi ponds and bridges"]
    }
  },
  {
    id: "poi-mt-st-lucija-church",
    name: { de: "Santa Luċija Pfarrkirche", hu: "Santa Luċija plébániatemplom", ro: "Biserica parohială din Santa Luċija", en: "Santa Luċija Parish Church" },
    type: "landmark",
    parent: "MT-058",
    coords: [14.505, 35.8625],
    description: {
      de: "Die Pfarrkirche der jungen Gemeinde.",
      hu: "A fiatal közösség plébániatemploma.",
      ro: "Biserica parohială a tinerei comunități.",
      en: "The parish church at the heart of the Santa Luċija residential estate."
    },
    facts: {
      de: ["Modernes Design", "Der hl. Luzia geweiht", "Inmitten von Grünanlagen"],
      hu: ["Modern design", "Szent Lúciának szentelve", "Zöldövezet közepén"],
      ro: ["Design modern", "Dedicată Sfintei Lucia", "Înconjurată de spații verzi"],
      en: ["Modern architecture from the 20th century", "Central meeting point for residents", "Known for its community spirit"]
    }
  },

  // MT-059 Gudja
  {
    id: "poi-mt-bir-miftuh",
    name: { de: "Bir Miftuħ Kapelle", hu: "Bir Miftuħ-kápolna", ro: "Capela Bir Miftuħ", en: "Bir Miftuħ Chapel" },
    type: "historical",
    parent: "MT-059",
    coords: [14.4983, 35.85],
    description: {
      de: "Eine mittelalterliche Kapelle, die die Zeit überdauert hat.",
      hu: "Középkori kápolna, amely fennmaradt az utókornak.",
      ro: "O capelă medievală care a supraviețuit timpului.",
      en: "A remarkably well-preserved medieval chapel."
    },
    facts: {
      de: ["Enthält seltene Fresken aus dem 15. Jh.", "Ehemals eine Pfarrkirche für mehrere Dörfer", "Inmitten eines Feldes gelegen"],
      hu: ["Ritka 15. századi freskókat őriz", "Egykor több falu plébániatemploma volt", "Egy mező közepén áll"],
      ro: ["Conține fresce rare din secolul XV", "Fostă biserică parohială pentru mai multe sate", "Situată în mijlocul unui câmp"],
      en: ["Features rare 15th-century frescoes", "Was once a main parish church", "Managed by Din l-Art Ħelwa"]
    }
  },
  {
    id: "poi-mt-palazzo-bettina",
    name: { de: "Palazzo Bettina", hu: "Palazzo Bettina", ro: "Palatul Bettina", en: "Palazzo Bettina" },
    type: "historical",
    parent: "MT-059",
    coords: [14.5017, 35.8492],
    description: {
      de: "Ein historischer Palast mit Verbindungen zu Napoleon.",
      hu: "Történelmi palota Napoleonhoz fűződő kapcsolatokkal.",
      ro: "Un palat istoric cu legături cu Napoleon.",
      en: "A historical palace with a storied past."
    },
    facts: {
      de: ["Soll Napoleon beherbergt haben", "Schöne Barockarchitektur", "Privatbesitz"],
      hu: ["Úgy tartják, Napoleon is megszállt itt", "Szép barokk építészet", "Magántulajdon"],
      ro: ["Se spune că l-a găzduit pe Napoleon", "Frumoasă arhitectură barocă", "Proprietate privată"],
      en: ["Reputedly hosted Napoleon Bonaparte", "Impressive architectural detail", "Stands at the edge of the village core"]
    }
  },

  // MT-060 Paola
  {
    id: "poi-mt-hypogeum",
    name: { de: "Ħal-Saflieni-Hypogäum", hu: "Ħal Saflieni-i hipogeum", ro: "Hipogeul Ħal-Saflieni", en: "Ħal Saflieni Hypogeum" },
    type: "historical",
    coords: [14.5069, 35.8694],
    parent: "MT-060",
    description: {
      de: "Prähistorische unterirdische Tempelanlage.",
      hu: "Prehisztorikus földalatti templom.",
      ro: "Structură subterană preistorică.",
      en: "Underground prehistoric temple."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Streng begrenzte Besucherzahl", "Einzigartige Akustik"],
      hu: ["UNESCO Világörökség", "Szigorúan korlátozott látogatószám", "Egyedülálló akusztika"],
      ro: ["Patrimoniu UNESCO", "Număr strict limitat de vizitatori", "Acustică unică"],
      en: ["UNESCO World Heritage site", "Tickets must be booked months in advance", "Carved into soft globigerina limestone"]
    }
  },
  {
    id: "poi-mt-paola-parish",
    name: { de: "Christkönig-Basilika", hu: "Krisztus Király-bazilika", ro: "Bazilica Cristos Rege", en: "Christ the King Basilica" },
    type: "historical",
    parent: "MT-060",
    coords: [14.5083, 35.8717],
    description: {
      de: "Eine der größten Kirchen Maltas.",
      hu: "Málta egyik legnagyobb temploma.",
      ro: "Una dintre cele mai mari biserici din Malta.",
      en: "One of the largest and most prominent churches on the islands."
    },
    facts: {
      de: ["Zwei massive Glockentürme", "Dominante Lage über dem Grand Harbour", "Moderner Monumentalbau"],
      hu: ["Két hatalmas harangtorony", "Domináns fekvés a Grand Harbour felett", "Modern monumentális épület"],
      ro: ["Două turnuri clopotniță masive", "Poziție dominantă peste Marele Port", "Construcție monumentală modernă"],
      en: ["The largest parish church in Malta", "Features twin monumental towers", "Located near the bustling Paola square"]
    }
  },

  // MT-061 Gżira
  {
    id: "poi-mt-manoel-island",
    name: { de: "Manoel Island", hu: "Manoel-sziget", ro: "Insula Manoel", en: "Manoel Island" },
    type: "historical",
    parent: "MT-061",
    coords: [14.5019, 35.9039],
    description: {
      de: "Eine kleine Insel zwischen Valletta und Sliema.",
      hu: "Kis sziget Valletta és Sliema között.",
      ro: "O mică insulă între Valletta și Sliema.",
      en: "A small island in Marsamxett Harbour."
    },
    facts: {
      de: ["Beherbergt das Fort Manoel", "Beliebter Ort für Bootstouren", "Ehemaliges Lazarett"],
      hu: ["Itt található a Fort Manoel", "Hajókirándulások népszerű helyszíne", "Korábban karanténállomás (Lazzaretto)"],
      ro: ["Găzduiește Fortul Manoel", "Loc popular pentru bărci", "Fost lazaret (loc de carantină)"],
      en: ["Home to the 18th-century Fort Manoel", "Site of a historic quarantine hospital (Lazzaretto)", "Offers great views of Valletta"]
    }
  },
  {
    id: "poi-mt-gzira-promenade",
    name: { de: "Gżira Promenade", hu: "Gżirai sétány", ro: "Promenada Gżira", en: "Gżira Promenade" },
    type: "landmark",
    parent: "MT-061",
    coords: [14.4967, 35.9033],
    description: {
      de: "Ein lebhafter Gehweg am Marsamxett Harbour.",
      hu: "Élettel teli sétány a Marsamxett kikötőben.",
      ro: "O faleză plină de viață în portul Marsamxett.",
      en: "A bustling waterfront with views of Manoel Island and Valletta."
    },
    facts: {
      de: ["Viele Cafés und Yachten", "Verbindet Sliema mit Msida", "Beliebt für abendliche Spaziergänge"],
      hu: ["Sok kávézó és jacht", "Sliemát köti össze Msidával", "Népszerű esti sétahelyszín"],
      ro: ["Multe cafenele și iahturi", "Conectează Sliema cu Msida", "Populară pentru plimbări de seară"],
      en: ["Lined with international restaurants", "Popular spot for sunset views", "Center for boat rental and excursions"]
    }
  },

  // MT-062 Floriana
  {
    id: "poi-mt-argotti",
    name: { de: "Argotti Botanischer Garten", hu: "Argotti botanikus kert", ro: "Grădina Botanică Argotti", en: "Argotti Botanical Gardens" },
    type: "landmark",
    parent: "MT-062",
    coords: [14.505, 35.8925],
    description: {
      de: "Maltas bedeutendster botanischer Garten.",
      hu: "Málta legjelentősebb botanikus kertje.",
      ro: "Cea mai importantă grădină botanică din Malta.",
      en: "Malta's primary botanical gardens, with a long history."
    },
    facts: {
      de: ["Gegründet im 18. Jahrhundert", "Blick auf die Marsamxett-Bucht", "Gehört zur Universität von Malta"],
      hu: ["A 18. században alapították", "Kilátás a Marsamxett-öbölre", "A Máltai Egyetemhez tartozik"],
      ro: ["Fondată în secolul XVIII", "Vedere spre golful Marsamxett", "Aparține Universității din Malta"],
      en: ["Founded as a medicinal garden in 1774", "Houses a vast collection of local and exotic plants", "Managed by the University of Malta"]
    }
  },
  {
    id: "poi-mt-st-publius",
    name: { de: "St. Publius Kirche", hu: "Szent Publius-templom", ro: "Biserica Sf. Publius", en: "St. Publius Parish Church" },
    type: "historical",
    parent: "MT-062",
    coords: [14.5083, 35.8914],
    description: {
      de: "Eine der prachtvollsten Kirchen Maltas vor den Toren Vallettas.",
      hu: "Málta egyik legpompásabb temploma Valletta kapui előtt.",
      ro: "Una dintre cele mai superbe biserici din Malta, lângă porțile Vallettei.",
      en: "One of the most impressive parish churches, located just outside Valletta."
    },
    facts: {
      de: ["Berühmt für das Fest im Frühjahr", "Schwer beschädigt im 2. Weltkrieg", "Denkmal für Maltas ersten Bischof"],
      hu: ["Híres a tavaszi ünnepségéről", "A II. világháborúban súlyosan megsérült", "Málta első püspökének emlékműve"],
      ro: ["Faimoasă pentru sărbătoarea de primăvară", "Grav avariată în Al Doilea Război Mondial", "Monument pentru primul episcop al Maltei"],
      en: ["Dominates the huge Floriana Granaries square", "Beautiful interior decorated with silver and gold", "Final point of many national events"]
    }
  },
  {
    id: "poi-mt-embassies",
    name: { de: "Botschaftsviertel", hu: "Nagykövetségi negyed", ro: "Cartierul ambasadelor", en: "Embassies district" },
    type: "landmark",
    parent: "MT-063",
    coords: [14.4933, 35.8983],
    description: {
      de: "Ein elegantes Viertel mit vielen ausländischen Botschaften.",
      hu: "Elegáns negyed számos külföldi nagykövetséggel.",
      ro: "Un cartier elegant cu multe ambasade străine.",
      en: "An upscale residential area home to many foreign diplomatic missions."
    },
    facts: {
      de: ["Prachtvolle Villen", "Höchste Dichte an Botschaften", "Sehr ruhig und sicher"],
      hu: ["Pompás villák", "Itt a legnagyobb a nagykövetségek sűrűsége", "Nagyon csendes és biztonságos"],
      ro: ["Vile somptuoase", "Cea mai mare densitate de ambasade", "Foarte liniștit și sigur"],
      en: ["Features grand 20th-century villas", "One of the most prestigious addresses in Malta", "Quiet, leafy streets with high security"]
    }
  },

  // MT-064 Isla
  {
    id: "poi-mt-gardjola",
    name: { de: "Gardjola Gardens", hu: "Gardjola-kertek", ro: "Grădinile Gardjola", en: "Gardjola Gardens" },
    type: "landmark",
    parent: "MT-064",
    coords: [14.5142, 35.8933],
    description: {
      de: "Ein kleiner Garten an der Spitze der Halbinsel Senglea.",
      hu: "Kis kert a Senglea-félsziget csúcsán.",
      ro: "O mică grădină în vârful peninsulei Senglea.",
      en: "A public garden at the tip of the Senglea peninsula."
    },
    facts: {
      de: ["Berühmter Wachturm mit Auge und Ohr", "Panoramablick auf Valletta", "Teil der Festungsanlagen"],
      hu: ["Híres őrtorony szem és fül ábrázolással", "Panorámás kilátás Vallettára", "Az erődítmények része"],
      ro: ["Turn de veghe celebru cu ochi și ureche", "Vedere panoramică spre Valletta", "Parte a fortificațiilor"],
      en: ["Features an iconic watchtower (Vedette)", "Symbols on the tower represent eyes and ears", "Stunning views of the Grand Harbour"]
    }
  },
  {
    id: "poi-mt-isla-basilica",
    name: { de: "Basilika Unserer Lieben Frau der Siege", hu: "Győzelmes Boldogasszony-bazilika", ro: "Bazilica Maica Domnului a Victoriilor", en: "Basilica of Our Lady of Victories" },
    type: "historical",
    parent: "MT-064",
    coords: [14.5167, 35.8878],
    description: {
      de: "Die bedeutendste Kirche in Isla.",
      hu: "Isla legjelentősebb temploma.",
      ro: "Cea mai importantă biserică din Isla.",
      en: "A beautiful basilica rich in art and local devotion."
    },
    facts: {
      de: ["Enthält eine Statue des hl. Bambinu", "Im Krieg zerstört und wiederaufgebaut", "Großes Patronatsfest"],
      hu: ["Itt található a Szent Bambinu szobra", "A háborúban elpusztult, majd újjáépült", "Nagy búcsúi ünnepség"],
      ro: ["Găzduiește statuia Sf. Bambinu", "Distrusă în război și reconstruită", "Mare sărbătoare de hram"],
      en: ["Home to the miraculous statue of 'Il-Bambin' (Baby Jesus)", "Completely rebuilt after WWII destruction", "Elevated to a minor basilica in 1921"]
    }
  },

  // MT-065 Cospicua
  {
    id: "poi-mt-cospicua-church",
    name: { de: "Unbefleckte Empfängnis Kirche", hu: "Szeplőtelen Fogantatás-templom", ro: "Biserica Imaculata Concepție", en: "Immaculate Conception Parish Church" },
    type: "historical",
    parent: "MT-065",
    coords: [14.5208, 35.8822],
    description: {
      de: "Eine große Barockkirche, die den Krieg überstand.",
      hu: "Hatalmas barokk templom, amely túlélte a háborút.",
      ro: "O biserică barocă mare care a supraviețuit războiului.",
      en: "A large baroque parish church that survived WWII bombings."
    },
    facts: {
      de: ["Beherbergt wertvolle Silberkunst", "Erbaut im 17. Jahrhundert", "Wahrzeichen der 'Drei Städte'"],
      hu: ["Értékes ezüstműveket őriz", "A 17. században épült", "A 'Három Város' egyik jelképe"],
      ro: ["Găzduiește obiecte de argint valoroase", "Construită în secolul XVII", "Simbol al celor 'Trei Orașe'"],
      en: ["Houses many precious votive offerings", "Exquisite silver-clad statues", "Central to the identity of Bormla"]
    }
  },
  {
    id: "poi-mt-st-helen-gate",
    name: { de: "St. Helena Tor", hu: "Szent Ilona-kapu", ro: "Poarta Sf. Elena", en: "St. Helen's Gate" },
    type: "historical",
    parent: "MT-065",
    coords: [14.5225, 35.8794],
    description: {
      de: "Ein prachtvolles barockes Stadttor.",
      hu: "Pompás barokk városkapu.",
      ro: "O poartă barocă superbă a orașului.",
      en: "A grand ornamental gateway into the city of Cospicua."
    },
    facts: {
      de: ["Teil der Santa Margherita Linien", "Erbaut 1736", "Reich verziert"],
      hu: ["A Santa Margherita-vonalak része", "1736-ban épült", "Gazdagon díszített"],
      ro: ["Parte din liniile Santa Margherita", "Construită în 1736", "Bogat ornamentată"],
      en: ["Part of the 18th-century defensive fortifications", "Masterpiece of military architecture", "Named after the mother of Emperor Constantine"]
    }
  },

  // MT-066 Pietà
  {
    id: "poi-mt-villa-guardamangia",
    name: { de: "Villa Guardamangia", hu: "Villa Guardamangia", ro: "Vila Guardamangia", en: "Villa Guardamangia" },
    type: "historical",
    parent: "MT-066",
    coords: [14.4967, 35.8944],
    description: {
      de: "Ein historisches Herrenhaus, in dem Queen Elizabeth II. lebte.",
      hu: "Történelmi kúria, ahol II. Erzsébet királynő élt.",
      ro: "O vilă istorică unde a locuit regina Elisabeta a II-a.",
      en: "A historic mansion and former home of Queen Elizabeth II."
    },
    facts: {
      de: ["Wohnsitz der Queen zwischen 1949 und 1951", "Wird derzeit restauriert", "Blick auf den Hafen"],
      hu: ["A királynő lakhelye 1949 és 1951 között", "Jelenleg restaurálás alatt áll", "Kilátás a kikötőre"],
      ro: ["Reședința reginei între 1949 și 1951", "În curs de restaurare", "Vedere spre port"],
      en: ["The only home of the Queen outside the UK", "Currently being restored by Heritage Malta", "Classic example of a mid-18th century villa"]
    }
  },
  {
    id: "poi-mt-pieta-marina",
    name: { de: "Pietà Marina", hu: "Pietà jachtkikötő", ro: "Marina Pietà", en: "Pietà Marina" },
    type: "landmark",
    parent: "MT-066",
    coords: [14.4983, 35.8958],
    description: {
      de: "Ein malerischer Yachthafen am Marsamxett Harbour.",
      hu: "Festői jachtkikötő a Marsamxett kikötőben.",
      ro: "O marină pitorească în portul Marsamxett.",
      en: "A scenic marina area along the waterfront of Pietà."
    },
    facts: {
      de: ["Hunderte von Yachten", "Schöne Uferpromenade", "Nähe zum Regierungsgebäude"],
      hu: ["Jachtok százai", "Szép tengerparti sétány", "Közel a kormányzati épületekhez"],
      ro: ["Sute de iahturi", "Faleză frumoasă", "Aproape de clădirile guvernamentale"],
      en: ["Key location for the local yachting community", "Features the historic Customs House", "Very busy traffic hub with great sea views"]
    }
  },

  // MT-067 Msida
  {
    id: "poi-mt-msida-church",
    name: { de: "Msida Pfarrkirche", hu: "Msidai plébániatemplom", ro: "Biserica parohială din Msida", en: "Msida Parish Church" },
    type: "historical",
    parent: "MT-067",
    coords: [14.4892, 35.8967],
    description: {
      de: "Eine markante Kirche am Ende des Hafens.",
      hu: "Jellegzetes templom a kikötő végén.",
      ro: "O biserică distinctivă la capătul portului.",
      en: "A landmark church situated at the edge of the creek."
    },
    facts: {
      de: ["Dem hl. Joseph geweiht", "Besonders schön bei Flut", "Erbaut im 19. Jahrhundert"],
      hu: ["Szent Józsefnek szentelve", "Különösen szép dagály idején", "A 19. században épült"],
      ro: ["Dedicată Sf. Iosif", "Foarte frumoasă la flux", "Construită în secolul XIX"],
      en: ["Dedicated to Saint Joseph", "Famous for its unique location near the water level", "A key landmark for commuters entering Valletta"]
    }
  },
  {
    id: "poi-mt-university",
    name: { de: "Universität von Malta", hu: "Máltai Egyetem", ro: "Universitatea din Malta", en: "University of Malta" },
    type: "landmark",
    parent: "MT-067",
    coords: [14.4831, 35.9019],
    description: {
      de: "Die höchste Bildungseinrichtung Maltas.",
      hu: "Málta legmagasabb szintű oktatási intézménye.",
      ro: "Cea mai înaltă instituție de învățământ din Malta.",
      en: "The highest educational institution in Malta."
    },
    facts: {
      de: ["Gegründet 1592", "Campus in Msida (Tal-Qroqq)", "Internationale Studentenschaft"],
      hu: ["1592-ben alapították", "Msidai kampusz (Tal-Qroqq)", "Nemzetközi hallgatóság"],
      ro: ["Fondată în 1592", "Campusul în Msida (Tal-Qroqq)", "Studenți din toată lumea"],
      en: ["One of the oldest universities in the Commonwealth", "Features a massive modern campus", "Center for research and academic life in Malta"]
    }
  },

  // MT-068 Birgu
  {
    id: "poi-mt-fortstangelo",
    name: { de: "Fort St. Angelo", hu: "Szent Angelo-erőd", ro: "Fortul Sf. Angelo", en: "Fort St. Angelo" },
    type: "historical",
    coords: [14.5181, 35.8922],
    parent: "MT-068",
    description: {
      de: "Große Festung in Birgu.",
      hu: "Nagy erőd Birguban.",
      ro: "O mare fortăreață în Birgu.",
      en: "Large bastioned fort in Birgu."
    },
    facts: {
      de: ["Herz der Belagerung von 1565", "Teilweise im Besitz des Malteserordens", "Aussicht über Valletta"],
      hu: ["Az 1565-ös ostrom központja", "Részben a Máltai Lovagrend birtokolja", "Kilátás Vallettára"],
      ro: ["Inima asediului din 1565", "Deținut parțial de Ordinul de Malta", "Vedere panoramică spre Valletta"],
      en: ["Command centre during the Great Siege of 1565", "Upper part is leased to the Order of St. John", "UNESCO World Heritage tentative list"]
    }
  },
  {
    id: "poi-mt-inquisitor-palace",
    name: { de: "Inquisitorenpalast", hu: "Inkvizítori palota", ro: "Palatul Inchizitorului", en: "Inquisitor's Palace" },
    type: "historical",
    parent: "MT-068",
    coords: [14.5225, 35.8883],
    description: {
      de: "Ein seltener erhaltene Palast der Inquisition.",
      hu: "Ritka, épségben maradt inkvizíciós palota.",
      ro: "Unul dintre puținele palate ale inchiziției care au supraviețuit.",
      en: "One of the few surviving palaces of its kind in the world."
    },
    facts: {
      de: ["Beherbergt das Museum für Volkskunde", "Enthält Gefängniszellen", "Erbaut im 16. Jahrhundert"],
      hu: ["Néprajzi múzeumnak ad otthont", "Börtöncellákat is bemutat", "A 16. században épült"],
      ro: ["Găzduiește muzeul de etnografie", "Include celule de închisoare", "Construit în secolul XVI"],
      en: ["Now houses the National Museum of Ethnography", "Includes original interrogation rooms and cells", "Served as the seat of the Inquisition in Malta until 1798"]
    }
  }
, ...poiExtraMaltaCities, ...poiExtraMaltaOther];
