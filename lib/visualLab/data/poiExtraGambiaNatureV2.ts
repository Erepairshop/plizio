import type { POI } from "./poi";

export const poiExtraGambiaNatureV2: POI[] = [
  {
    id: "gambia-river-nature-v2",
    type: "river",
    parent: "GM-L",
    coords: [-15.5, 13.5],
    name: {
      de: "Gambia-Fluss",
      hu: "Gambia-folyó",
      ro: "Râul Gambia",
      en: "Gambia River"
    },
    description: {
      de: "Der Gambia-Fluss ist die wichtigste Wasserstraße Westafrikas und verläuft durch das gesamte Land bis zum Atlantik.",
      hu: "A Gambia-folyó Nyugat-Afrika egyik legfontosabb víziútja, amely az egész országon végigkanyarog az Atlanti-óceánig.",
      ro: "Râul Gambia este una dintre cele mai importante căi navigabile din Africa de Vest, traversând întreaga țară până la Atlantic.",
      en: "The Gambia River is one of the most important waterways in West Africa, winding through the entire country to the Atlantic."
    },
    facts: {
      de: ["Über 1.100 km Gesamtlänge", "Schiffbar für große Schiffe"],
      hu: ["Több mint 1100 km hosszú", "Nagy hajók számára is hajózható"],
      ro: ["Peste 1.100 km lungime totală", "Navigabil pentru nave mari"],
      en: ["Over 1,100 km total length", "Navigable for large vessels"]
    }
  },
  {
    id: "river-gambia-national-park-nature-v2",
    type: "forest",
    parent: "GM-M",
    coords: [-14.9, 13.6],
    name: {
      de: "River Gambia Nationalpark",
      hu: "River Gambia Nemzeti Park",
      ro: "Parcul Național River Gambia",
      en: "River Gambia National Park"
    },
    description: {
      de: "Dieser Park umfasst fünf Inseln im Fluss und ist bekannt für seine Schimpansen-Wiederansiedlungsprojekte.",
      hu: "Ez a park öt folyami szigetet foglal magában, és híres a csimpánzok visszatelepítését célzó projektjeiről.",
      ro: "Acest parc cuprinde cinci insule pe râu și este cunoscut pentru proiectele sale de reintroducere a cimpanzeilor.",
      en: "This park includes five islands in the river and is famous for its chimpanzee reintroduction projects."
    },
    facts: {
      de: ["Besteht aus 5 Inseln", "Heimat von Wildschimpansen"],
      hu: ["5 szigetből áll", "Vadcsimpánzok élőhelye"],
      ro: ["Format din 5 insule", "Habitat pentru cimpanzei sălbatici"],
      en: ["Consists of 5 islands", "Home to wild chimpanzees"]
    }
  },
  {
    id: "kiang-west-national-park-nature-v2",
    type: "forest",
    parent: "GM-L",
    coords: [-15.8, 13.4],
    name: {
      de: "Kiang West Nationalpark",
      hu: "Kiang West Nemzeti Park",
      ro: "Parcul Național Kiang West",
      en: "Kiang West National Park"
    },
    description: {
      de: "Einer der größten und wichtigsten Wildschutzgebiete Gambias mit einer vielfältigen Flora und Fauna.",
      hu: "Gambia egyik legnagyobb és legfontosabb vadrezervátuma, rendkívül gazdag növény- és állatvilággal.",
      ro: "Una dintre cele mai mari și importante rezervații de viață sălbatică din Gambia, cu o floră și faună diversă.",
      en: "One of the largest and most important wildlife reserves in The Gambia, with diverse flora and fauna."
    },
    facts: {
      de: ["Über 11.000 Hektar Fläche", "Viele Greifvogelarten"],
      hu: ["Több mint 11 000 hektár", "Számos ragadozómadár-faj"],
      ro: ["Peste 11.000 de hectare", "Multe specii de păsări de pradă"],
      en: ["Over 11,000 hectares", "Many species of birds of prey"]
    }
  },
  {
    id: "bao-bolong-wetland-nature-v2",
    type: "river",
    parent: "GM-N",
    coords: [-15.7, 13.5],
    name: {
      de: "Bao Bolong Feuchtgebiet",
      hu: "Bao Bolong mocsárvidék",
      ro: "Rezervația Bao Bolong",
      en: "Bao Bolong Wetland Reserve"
    },
    description: {
      de: "Ein riesiges Feuchtgebiet am Nordufer des Gambia-Flusses, das ein Paradies für Vogelbeobachter ist.",
      hu: "Hatalmas mocsárvidék a Gambia-folyó északi partján, amely a madármegfigyelők paradicsoma.",
      ro: "O zonă umedă vastă pe malul nordic al râului Gambia, un paradis pentru observatorii de păsări.",
      en: "A vast wetland on the north bank of the Gambia River, which is a paradise for birdwatchers."
    },
    facts: {
      de: ["Ramsar-Schutzgebiet", "Wichtige Mangrovenwälder"],
      hu: ["Ramsari terület", "Fontos mangroveerdők"],
      ro: ["Zonă protejată Ramsar", "Păduri de mangrove importante"],
      en: ["Ramsar protected site", "Important mangrove forests"]
    }
  },
  {
    id: "tanji-bird-reserve-nature-v2",
    type: "forest",
    parent: "GM-W",
    coords: [-16.8, 13.3],
    name: {
      de: "Tanji Vogelschutzgebiet",
      hu: "Tanji Madárrezervátum",
      ro: "Rezervația de păsări Tanji",
      en: "Tanji Bird Reserve"
    },
    description: {
      de: "Ein Küstenschutzgebiet, das verschiedene Lebensräume wie Dünen, Lagunen und Trockenwälder umfasst.",
      hu: "Parti védett terület, amely különféle élőhelyeket, például dűnéket, lagúnákat és száraz erdőket foglal magában.",
      ro: "O rezervație de coastă care cuprinde diverse habitate, cum ar fi dune, lagune și păduri uscate.",
      en: "A coastal reserve encompassing various habitats such as dunes, lagoons, and dry forests."
    },
    facts: {
      de: ["Über 300 Vogelarten", "Direkt am Atlantik"],
      hu: ["Több mint 300 madárfaj", "Közvetlenül az Atlanti-parton"],
      ro: ["Peste 300 de specii de păsări", "Direct pe malul Atlanticului"],
      en: ["Over 300 bird species", "Right on the Atlantic coast"]
    }
  },
  {
    id: "bijilo-forest-park-nature-v2",
    type: "forest",
    parent: "GM-W",
    coords: [-16.7, 13.4],
    name: {
      de: "Bijilo Waldpark",
      hu: "Bijilo Erdőpark",
      ro: "Parcul Forestier Bijilo",
      en: "Bijilo Forest Park"
    },
    description: {
      de: "Ein kleiner Waldpark an der Küste, der oft als 'Monkey Park' bezeichnet wird, da dort viele Affen leben.",
      hu: "Kicsi tengerparti erdőpark, amelyet gyakran 'Majomparknak' is neveznek a benne élő számos majom miatt.",
      ro: "Un mic parc forestier de coastă, numit adesea „Parcul Maimuțelor” datorită numeroaselor maimuțe care trăiesc acolo.",
      en: "A small coastal forest park often referred to as 'Monkey Park' due to the many monkeys living there."
    },
    facts: {
      de: ["Beliebt bei Touristen", "Dichte Palmenwälder"],
      hu: ["Népszerű a turisták körében", "Sűrű pálmaerdők"],
      ro: ["Popular printre turiști", "Păduri dense de palmieri"],
      en: ["Popular with tourists", "Dense palm forests"]
    }
  },
  {
    id: "abuko-nature-reserve-nature-v2",
    type: "forest",
    parent: "GM-W",
    coords: [-16.65, 13.39],
    name: {
      de: "Abuko Naturschutzgebiet",
      hu: "Abuko Természetvédelmi Terület",
      ro: "Rezervația Naturală Abuko",
      en: "Abuko Nature Reserve"
    },
    description: {
      de: "Gambias erstes Naturschutzgebiet beherbergt eine erstaunliche Vielfalt an Tieren in einem geschützten Waldgebiet.",
      hu: "Gambia első természetvédelmi területe, amely az állatok lenyűgöző változatosságának ad otthont egy védett erdőben.",
      ro: "Prima rezervație naturală din Gambia găzduiește o varietate uimitoare de animale într-o zonă forestieră protejată.",
      en: "The Gambia's first nature reserve is home to an amazing variety of animals in a protected forest area."
    },
    facts: {
      de: ["Gegründet 1968", "Krokodilbecken vorhanden"],
      hu: ["1968-ban alapították", "Krokodilmedence is található itt"],
      ro: ["Fondată în 1968", "Există bazine cu crocodili"],
      en: ["Founded in 1968", "Crocodile pool on site"]
    }
  },
  {
    id: "janjanbureh-island-nature-v2",
    type: "island",
    parent: "GM-M",
    coords: [-14.76, 13.59],
    name: {
      de: "Janjanbureh-Insel",
      hu: "Janjanbureh-sziget",
      ro: "Insula Janjanbureh",
      en: "Janjanbureh Island"
    },
    description: {
      de: "Eine Insel im Gambia-Fluss, die für ihre historische Bedeutung und ihre natürliche Schönheit bekannt ist.",
      hu: "Sziget a Gambia-folyón, amely történelmi jelentőségéről és természeti szépségéről ismert.",
      ro: "O insulă de pe râul Gambia, cunoscută pentru semnificația sa istorică și frumusețea naturală.",
      en: "An island in the Gambia River known for its historical significance and natural beauty."
    },
    facts: {
      de: ["Früher MacCarthy Island", "Umgeben vom Fluss"],
      hu: ["Korábban MacCarthy-sziget", "A folyó öleli körül"],
      ro: ["Fosta insulă MacCarthy", "Înconjurată de râu"],
      en: ["Formerly MacCarthy Island", "Surrounded by the river"]
    }
  },
  {
    id: "kunta-kinteh-island-nature-v2",
    type: "island",
    parent: "GM-N",
    coords: [-16.36, 13.31],
    name: {
      de: "Kunta Kinteh Insel",
      hu: "Kunta Kinteh-sziget",
      ro: "Insula Kunta Kinteh",
      en: "Kunta Kinteh Island"
    },
    description: {
      de: "Eine kleine Insel im Fluss, die aufgrund ihrer Rolle im Sklavenhandel zum UNESCO-Welterbe gehört.",
      hu: "Kicsi sziget a folyón, amely a rabszolga-kereskedelemben betöltött szerepe miatt az UNESCO Világörökség része.",
      ro: "O mică insulă pe râu, parte a Patrimoniului Mondial UNESCO datorită rolului său în comerțul cu sclavi.",
      en: "A small island in the river that is a UNESCO World Heritage site due to its role in the slave trade."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Ehemals James Island"],
      hu: ["UNESCO Világörökség", "Korábban James-sziget"],
      ro: ["Patrimoniu UNESCO", "Fosta insulă James"],
      en: ["UNESCO World Heritage", "Formerly James Island"]
    }
  },
  {
    id: "baboon-islands-nature-v2",
    type: "island",
    parent: "GM-M",
    coords: [-15.0, 13.6],
    name: {
      de: "Pavian-Inseln",
      hu: "Pavián-szigetek",
      ro: "Insulele Pavianilor",
      en: "Baboon Islands"
    },
    description: {
      de: "Eine Gruppe von Inseln, auf denen Schimpansen in ihrer natürlichen Umgebung beobachtet werden können.",
      hu: "Szigetcsoport, ahol a csimpánzokat természetes környezetükben lehet megfigyelni.",
      ro: "Un grup de insule unde cimpanzeii pot fi observați în mediul lor natural.",
      en: "A group of islands where chimpanzees can be observed in their natural environment."
    },
    facts: {
      de: ["Kein Betreten erlaubt", "Teil eines Nationalparks"],
      hu: ["A belépés tilos", "Egy nemzeti park része"],
      ro: ["Accesul interzis", "Parte a unui parc național"],
      en: ["No landing permitted", "Part of a national park"]
    }
  },
  {
    id: "jinack-island-nature-v2",
    type: "island",
    parent: "GM-N",
    coords: [-16.5, 13.56],
    name: {
      de: "Jinack-Insel",
      hu: "Jinack-sziget",
      ro: "Insula Jinack",
      en: "Jinack Island"
    },
    description: {
      de: "Eine friedliche Insel an der Mündung des Gambia-Flusses mit unberührten Stränden und Mangroven.",
      hu: "Békés sziget a Gambia-folyó torkolatánál, érintetlen strandokkal és mangrovékkal.",
      ro: "O insulă liniștită la gura de vărsare a râului Gambia, cu plaje curate și mangrove.",
      en: "A peaceful island at the mouth of the Gambia River with pristine beaches and mangroves."
    },
    facts: {
      de: ["Vogelparadies", "Grenzt an den Senegal"],
      hu: ["Madárparadicsom", "Szenegállal határos"],
      ro: ["Paradisul păsărilor", "Se învecinează cu Senegal"],
      en: ["Bird paradise", "Borders Senegal"]
    }
  },
  {
    id: "st-marys-island-nature-v2",
    type: "island",
    parent: "GM-B",
    coords: [-16.6, 13.45],
    name: {
      de: "St. Mary's Island",
      hu: "Szent Mária-sziget",
      ro: "Insula Sfânta Maria",
      en: "St. Mary's Island"
    },
    description: {
      de: "Die Insel an der Mündung des Gambia-Flusses, auf der sich die Hauptstadt Banjul befindet.",
      hu: "A Gambia-folyó torkolatánál fekvő sziget, amelyen a főváros, Banjul található.",
      ro: "Insula de la gura de vărsare a râului Gambia pe care se află capitala Banjul.",
      en: "The island at the mouth of the Gambia River on which the capital city Banjul is located."
    },
    facts: {
      de: ["Standort von Banjul", "Sandbänke und Sümpfe"],
      hu: ["Banjul helyszíne", "Homokpadok és mocsarak"],
      ro: ["Locația orașului Banjul", "Bancuri de nisip și mlaștini"],
      en: ["Location of Banjul", "Sandbars and swamps"]
    }
  },
  {
    id: "kartong-beach-nature-v2",
    type: "sea",
    parent: "GM-W",
    coords: [-16.76, 13.08],
    name: {
      de: "Kartong Strand",
      hu: "Kartong-part",
      ro: "Plaja Kartong",
      en: "Kartong Beach"
    },
    description: {
      de: "Ein ruhiger und abgelegener Strand im äußersten Süden Gambias, nahe der Grenze zum Senegal.",
      hu: "Csendes és elszigetelt strand Gambia legdélebbi részén, a szenegáli határ közelében.",
      ro: "O plajă liniștită și retrasă în extremul sud al Gambiei, aproape de granița cu Senegal.",
      en: "A quiet and remote beach in the far south of The Gambia, near the border with Senegal."
    },
    facts: {
      de: ["Südlichster Punkt", "Sehr naturbelassen"],
      hu: ["Legdélibb pont", "Nagyon természetközeli"],
      ro: ["Cel mai sudic punct", "Foarte natural"],
      en: ["Southernmost point", "Very natural"]
    }
  },
  {
    id: "sanyang-beach-nature-v2",
    type: "sea",
    parent: "GM-W",
    coords: [-16.79, 13.26],
    name: {
      de: "Sanyang Strand",
      hu: "Sanyang-part",
      ro: "Plaja Sanyang",
      en: "Sanyang Beach"
    },
    description: {
      de: "Bekannt als einer der schönsten Strände Gambias, bietet er goldenen Sand und klares Wasser.",
      hu: "Gambia egyik legszebb strandjaként ismert, aranyló homokkal és tiszta vízzel várja a látogatókat.",
      ro: "Cunoscută ca fiind una dintre cele mai frumoase plaje din Gambia, oferă nisip auriu și ape limpezi.",
      en: "Known as one of the most beautiful beaches in The Gambia, it offers golden sand and clear water."
    },
    facts: {
      de: ["Berühmte Fischrestaurants", "Hohe Palmen"],
      hu: ["Híres haléttermek", "Magas pálmafák"],
      ro: ["Restaurante de pește celebre", "Palmieri înalți"],
      en: ["Famous fish restaurants", "Tall palm trees"]
    }
  },
  {
    id: "kotu-beach-nature-v2",
    type: "sea",
    parent: "GM-W",
    coords: [-16.71, 13.46],
    name: {
      de: "Kotu Strand",
      hu: "Kotu-part",
      ro: "Plaja Kotu",
      en: "Kotu Beach"
    },
    description: {
      de: "Ein beliebter Strandabschnitt mit vielen Hotels, der auch gute Möglichkeiten zur Vogelbeobachtung bietet.",
      hu: "Népszerű tengerparti szakasz számos szállodával, amely kiváló lehetőségeket kínál madármegfigyelésre is.",
      ro: "O secțiune de plajă populară, cu multe hoteluri, care oferă și oportunități bune pentru observarea păsărilor.",
      en: "A popular beach stretch with many hotels, which also offers good opportunities for bird watching."
    },
    facts: {
      de: ["Belebtes Touristenzentrum", "Breiter Sandstrand"],
      hu: ["Nyüzsgő turistaközpont", "Széles homokos part"],
      ro: ["Centru turistic plin de viață", "Plajă largă cu nisip"],
      en: ["Bustling tourist center", "Wide sandy beach"]
    }
  },
  {
    id: "kololi-beach-nature-v2",
    type: "sea",
    parent: "GM-W",
    coords: [-16.72, 13.44],
    name: {
      de: "Kololi Strand",
      hu: "Kololi-part",
      ro: "Plaja Kololi",
      en: "Kololi Beach"
    },
    description: {
      de: "Das Zentrum des Tourismus in Gambia mit einem lebhaften Nachtleben und einem breiten Strand.",
      hu: "Gambia turizmusának központja, élénk éjszakai élettel és széles tengerparttal.",
      ro: "Centrul turismului din Gambia, cu o viață de noapte vibrantă și o plajă largă.",
      en: "The center of tourism in The Gambia with a lively nightlife and a wide beach."
    },
    facts: {
      de: ["Nahe dem Bijilo Park", "Viele Freizeitmöglichkeiten"],
      hu: ["A Bijilo Park közelében", "Számos szabadidős lehetőség"],
      ro: ["Lângă Parcul Bijilo", "Multe facilități de agrement"],
      en: ["Near Bijilo Park", "Many leisure facilities"]
    }
  },
  {
    id: "cape-point-nature-v2",
    type: "sea",
    parent: "GM-W",
    coords: [-16.66, 13.48],
    name: {
      de: "Cape Point",
      hu: "Cape Point",
      ro: "Cape Point",
      en: "Cape Point"
    },
    description: {
      de: "Ein markanter Punkt an der Küste, wo der Gambia-Fluss und der Atlantik aufeinandertreffen.",
      hu: "Jellegzetes pont a parton, ahol a Gambia-folyó és az Atlanti-óceán találkozik.",
      ro: "Un punct distinctiv de pe coastă, unde râul Gambia și Atlanticul se întâlnesc.",
      en: "A distinctive point on the coast where the Gambia River and the Atlantic Ocean meet."
    },
    facts: {
      de: ["Schöne Aussichtspunkte", "Beliebt zum Angeln"],
      hu: ["Szép kilátópontok", "Népszerű horgászhely"],
      ro: ["Puncte de belvedere frumoase", "Popular pentru pescuit"],
      en: ["Beautiful viewpoints", "Popular for fishing"]
    }
  },
  {
    id: "brufut-woods-nature-v2",
    type: "forest",
    parent: "GM-W",
    coords: [-16.75, 13.37],
    name: {
      de: "Brufut Wälder",
      hu: "Brufut-erdők",
      ro: "Pădurea Brufut",
      en: "Brufut Woods"
    },
    description: {
      de: "Ein wichtiges Waldgebiet für den Vogelschutz, das viele seltene Arten beherbergt.",
      hu: "Fontos erdőterület a madárvédelem szempontjából, amely számos ritka fajnak ad otthont.",
      ro: "O zonă forestieră importantă pentru conservarea păsărilor, care găzduiește multe specii rare.",
      en: "An important forest area for bird conservation, home to many rare species."
    },
    facts: {
      de: ["Geführte Vogeltouren", "Dichter Trockenwald"],
      hu: ["Vezetett madárlesek", "Sűrű száraz erdő"],
      ro: ["Tururi ghidate pentru păsări", "Pădure uscată densă"],
      en: ["Guided bird tours", "Dense dry forest"]
    }
  },
  {
    id: "pirang-forest-nature-v2",
    type: "forest",
    parent: "GM-W",
    coords: [-16.52, 13.28],
    name: {
      de: "Pirang Wald",
      hu: "Pirang-erdő",
      ro: "Pădurea Pirang",
      en: "Pirang Forest"
    },
    description: {
      de: "Ein Relikt eines tropischen Regenwaldes, das eine einzigartige Flora und Fauna bietet.",
      hu: "Egy trópusi esőerdő maradványa, amely egyedülálló növény- és állatvilágot kínál.",
      ro: "O relicvă a unei păduri tropicale, care oferah o floră și faună unice.",
      en: "A remnant of a tropical rainforest that offers unique flora and fauna."
    },
    facts: {
      de: ["Seltene Baumarten", "Vogelreiches Gebiet"],
      hu: ["Ritka fafajok", "Madarakban gazdag terület"],
      ro: ["Specii de arbori rare", "Zonă bogată în păsări"],
      en: ["Rare tree species", "Bird-rich area"]
    }
  },
  {
    id: "niumi-national-park-nature-v2",
    type: "forest",
    parent: "GM-N",
    coords: [-16.48, 13.53],
    name: {
      de: "Niumi Nationalpark",
      hu: "Niumi Nemzeti Park",
      ro: "Parcul Național Niumi",
      en: "Niumi National Park"
    },
    description: {
      de: "Dieser Park an der Nordküste umfasst Mangroven, Sümpfe und Sanddünen.",
      hu: "Az északi parton fekvő park mangrovékat, mocsarakat és homokdűnéket foglal magában.",
      ro: "Acest parc de pe coasta de nord cuprinde mangrove, mlaștini și dune de nisip.",
      en: "This park on the north coast includes mangroves, swamps, and sand dunes."
    },
    facts: {
      de: ["Grenzüberschreitend", "Wichtiges Ökosystem"],
      hu: ["Határokon átnyúló", "Fontos ökoszisztéma"],
      ro: ["Transfrontalier", "Ecosistem important"],
      en: ["Transboundary park", "Important ecosystem"]
    }
  },
  {
    id: "allahein-river-nature-v2",
    type: "river",
    parent: "GM-W",
    coords: [-16.74, 13.06],
    name: {
      de: "Allahein-Fluss",
      hu: "Allahein-folyó",
      ro: "Râul Allahein",
      en: "Allahein River"
    },
    description: {
      de: "Ein kleiner Fluss im Süden, der die natürliche Grenze zwischen Gambia und Senegal bildet.",
      hu: "Kicsi folyó délen, amely a természetes határt alkotja Gambia és Szenegál között.",
      ro: "Un râu mic în sud, care formează granița naturală între Gambia și Senegal.",
      en: "A small river in the south that forms the natural border between The Gambia and Senegal."
    },
    facts: {
      de: ["Grenzfluss", "Vogelbeobachtung möglich"],
      hu: ["Határfolyó", "Madármegfigyelés lehetséges"],
      ro: ["Râu de frontieră", "Observarea păsărilor posibilă"],
      en: ["Border river", "Bird watching possible"]
    }
  },
  {
    id: "bintang-bolong-nature-v2",
    type: "river",
    parent: "GM-W",
    coords: [-16.22, 13.25],
    name: {
      de: "Bintang Bolong",
      hu: "Bintang Bolong",
      ro: "Bintang Bolong",
      en: "Bintang Bolong"
    },
    description: {
      de: "Der größte Nebenfluss des Gambia-Flusses, bekannt für seine weiten Mangrovenlandschaften.",
      hu: "A Gambia-folyó legnagyobb mellékfolyója, amely hatalmas mangrove-tájairól ismert.",
      ro: "Cel mai mare afluent al râului Gambia, cunoscut pentru peisajele sale vaste de mangrove.",
      en: "The largest tributary of the Gambia River, known for its vast mangrove landscapes."
    },
    facts: {
      de: ["Großer Nebenfluss", "Ideal für Bootsfahrten"],
      hu: ["Nagy mellékfolyó", "Ideális csónaktúrákhoz"],
      ro: ["Afluent major", "Ideal pentru excursii cu barca"],
      en: ["Major tributary", "Ideal for boat trips"]
    }
  },
  {
    id: "tanbi-wetland-nature-v2",
    type: "forest",
    parent: "GM-W",
    coords: [-16.62, 13.43],
    name: {
      de: "Tanbi Feuchtgebiet",
      hu: "Tanbi mocsárvidék",
      ro: "Zona umedă Tanbi",
      en: "Tanbi Wetland Complex"
    },
    description: {
      de: "Ein ausgedehntes System von Mangrovenwäldern und Kanälen südlich der Hauptstadt.",
      hu: "Mangroveerdők és csatornák kiterjedt rendszere a fővárostól délre.",
      ro: "Un sistem extins de păduri de mangrove și canale la sud de capitală.",
      en: "An extensive system of mangrove forests and channels south of the capital."
    },
    facts: {
      de: ["Schutz von Banjul", "Lebensraum für Austern"],
      hu: ["Banjul védelme", "Osztrigák élőhelye"],
      ro: ["Protecția orașului Banjul", "Habitat pentru stridii"],
      en: ["Protection of Banjul", "Habitat for oysters"]
    }
  },
  {
    id: "gunjur-beach-nature-v2",
    type: "sea",
    parent: "GM-W",
    coords: [-16.77, 13.18],
    name: {
      de: "Gunjur Strand",
      hu: "Gunjur-part",
      ro: "Plaja Gunjur",
      en: "Gunjur Beach"
    },
    description: {
      de: "Ein traditioneller Fischerstrand mit bunt bemalten Booten und einer ruhigen Atmosphäre.",
      hu: "Hagyományos halászpart színesre festett csónakokkal és nyugodt légkörrel.",
      ro: "O plajă tradițională de pescuit cu bărci pictate colorat și o atmosferă liniștită.",
      en: "A traditional fishing beach with brightly painted boats and a calm atmosphere."
    },
    facts: {
      de: ["Aktiver Fischmarkt", "Lange Sandküste"],
      hu: ["Aktív halpiac", "Hosszú homokos part"],
      ro: ["Piață de pește activă", "Coastă lungă cu nisip"],
      en: ["Active fish market", "Long sandy coast"]
    }
  },
  {
    id: "elephant-island-nature-v2",
    type: "island",
    parent: "GM-L",
    coords: [-15.35, 13.44],
    name: {
      de: "Elefanten-Insel",
      hu: "Elefánt-sziget",
      ro: "Insula Elefantului",
      en: "Elephant Island"
    },
    description: {
      de: "Eine große Insel im Gambia-Fluss, die ihren Namen der Form verdankt, die an einen Elefanten erinnert.",
      hu: "Nagy sziget a Gambia-folyón, amely nevét az elefántra emlékeztető alakjáról kapta.",
      ro: "O insulă mare de pe râul Gambia, care își trage numele de la forma sa ce amintește de un elefant.",
      en: "A large island in the Gambia River that gets its name from its shape, which resembles an elephant."
    },
    facts: {
      de: ["Unbewohnt", "Viel unberührte Natur"],
      hu: ["Lakatlan", "Sok érintetlen természet"],
      ro: ["Nelocuită", "Multă natură virgină"],
      en: ["Uninhabited", "Much untouched nature"]
    }
  }
];
