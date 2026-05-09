import type { POI } from "./poi";

export const poiExtraTimorlesteLifeV2: POI[] = [
  {
    id: "jardim-de-lecidere-life-v2",
    type: "park",
    parent: "TL-DI",
    coords: [125.5841, -8.5512],
    name: { de: "Jardim de Lecidere", hu: "Jardim de Lecidere park", ro: "Parcul Jardim de Lecidere", en: "Jardim de Lecidere" },
    description: {
      de: "Ein beliebter öffentlicher Park an der Uferpromenade von Dili mit schattigen Bäumen und Erholungsflächen.",
      hu: "Népszerű közpark Dili tengerparti sétányán, árnyékos fákkal és pihenőhelyekkel.",
      ro: "Un parc public popular pe promenada de pe malul mării din Dili, cu copaci umbroși și zone de recreere.",
      en: "A popular public park on the Dili waterfront with shady trees and recreation areas."
    },
    facts: {
      de: ["Zentral gelegen", "Blick auf das Meer"],
      hu: ["Központi elhelyezkedés", "Tengerre néző kilátás"],
      ro: ["Situat central", "Vedere la mare"],
      en: ["Centrally located", "Sea views"]
    }
  },
  {
    id: "ermera-coffee-plantations-life-v2",
    type: "agriculture",
    parent: "TL-ER",
    coords: [125.4001, -8.7501],
    name: { de: "Ermera Kaffeeplantagen", hu: "Ermera kávéültetvényei", ro: "Plantațiile de cafea din Ermera", en: "Ermera Coffee Plantations" },
    description: {
      de: "Ausgedehnte Kaffeeplantagen in der Bergregion Ermera, die für den hochwertigen Timor-Kaffee bekannt sind.",
      hu: "Kiterjedt kávéültetvények az Ermera hegyvidéken, amelyek a kiváló minőségű timori kávéról ismertek.",
      ro: "Plantații întinse de cafea în regiunea muntoasă Ermera, renumite pentru cafeaua Timor de înaltă calitate.",
      en: "Extensive coffee plantations in the Ermera mountainous region, known for high-quality Timor coffee."
    },
    facts: {
      de: ["Wichtigstes Anbaugebiet", "Bio-Kaffee"],
      hu: ["Fő termőterület", "Bio kávé"],
      ro: ["Principala zonă de cultivare", "Cafea organică"],
      en: ["Main growing area", "Organic coffee"]
    }
  },
  {
    id: "atauro-coral-reefs-life-v2",
    type: "wildlife-area",
    parent: "TL-DI",
    coords: [125.5801, -8.2501],
    name: { de: "Atauro Korallenriffe", hu: "Atauro korallzátonyok", ro: "Recifele de corali Atauro", en: "Atauro Coral Reefs" },
    description: {
      de: "Eines der artenreichsten Riffsysteme der Welt rund um die Insel Atauro, ein Paradies für Meereslebewesen.",
      hu: "A világ egyik legfajgazdagabb zátonyrendszere Atauro szigete körül, a tengeri élőlények paradicsoma.",
      ro: "Unul dintre cele mai bogate sisteme de recif din lume în jurul insulei Atauro, un paradis pentru viața marină.",
      en: "One of the most biodiverse reef systems in the world around Atauro Island, a paradise for marine life."
    },
    facts: {
      de: ["Extreme Biodiversität", "Beliebt bei Tauchern"],
      hu: ["Extrém biodiverzitás", "Népszerű a búvárok körében"],
      ro: ["Biodiversitate extremă", "Popular printre scafandri"],
      en: ["Extreme biodiversity", "Popular with divers"]
    }
  },
  {
    id: "tilomar-nature-reserve-life-v2",
    type: "wildlife-area",
    parent: "TL-CO",
    coords: [125.2161, -9.3331],
    name: { de: "Tilomar Naturreservat", hu: "Tilomar Természetvédelmi Terület", ro: "Rezervația Naturală Tilomar", en: "Tilomar Nature Reserve" },
    description: {
      de: "Ein bedeutendes Waldschutzgebiet im Südwesten, das vielen bedrohten Vogelarten und heimischer Flora Schutz bietet.",
      hu: "Jelentős erdővédelmi terület délnyugaton, amely számos veszélyeztetett madárfajnak és helyi növénynek nyújt menedéket.",
      ro: "O importantă rezervație forestieră în sud-vest, care oferă adăpost multor specii de păsări pe cale de dispariție și florei native.",
      en: "An important forest reserve in the southwest that provides shelter for many endangered bird species and native flora."
    },
    facts: {
      de: ["Wichtiger Vogellebensraum", "Tropischer Trockenwald"],
      hu: ["Fontos madárélőhely", "Trópusi száraz erdő"],
      ro: ["Habitat important pentru păsări", "Pădure tropicală uscată"],
      en: ["Important bird habitat", "Tropical dry forest"]
    }
  },
  {
    id: "maliana-rice-fields-life-v2",
    type: "agriculture",
    parent: "TL-BO",
    coords: [125.2191, -8.9911],
    name: { de: "Maliana Reisfelder", hu: "Maliana rizsföldek", ro: "Câmpurile de orez din Maliana", en: "Maliana Rice Fields" },
    description: {
      de: "Weite, malerische Reisfelder in der Ebene von Maliana, die als Reiskammer von Timor-Leste gelten.",
      hu: "Széles, festői rizsföldek Maliana síkságán, amelyet Kelet-Timor rizskamrájának tartanak.",
      ro: "Câmpuri de orez întinse și pitorești în câmpia Maliana, considerate hambarul de orez al Timorului de Est.",
      en: "Vast, picturesque rice fields in the Maliana plain, considered the rice bowl of Timor-Leste."
    },
    facts: {
      de: ["Bedeutende Reisproduktion", "Bewässerungslandwirtschaft"],
      hu: ["Jelentős rizstermelés", "Öntözéses mezőgazdaság"],
      ro: ["Producție semnificativă de orez", "Agricultură irigată"],
      en: ["Significant rice production", "Irrigated agriculture"]
    }
  },
  {
    id: "fatucama-marine-sanctuary-life-v2",
    type: "wildlife-area",
    parent: "TL-DI",
    coords: [125.6101, -8.5201],
    name: { de: "Fatucama Meeresschutzgebiet", hu: "Fatucama Tengeri Menedék", ro: "Sanctuarul Marin Fatucama", en: "Fatucama Marine Sanctuary" },
    description: {
      de: "Ein geschützter Küstenabschnitt in der Nähe von Dili, der für seine intakten Korallengärten und Seegraswiesen bekannt ist.",
      hu: "Védett partszakasz Dili közelében, amely érintetlen korallkertjeiről és tengerifű-mezőiről ismert.",
      ro: "O secțiune de coastă protejată lângă Dili, cunoscută pentru grădinile sale de corali intacte și pajiștile de iarbă de mare.",
      en: "A protected coastline near Dili known for its intact coral gardens and seagrass meadows."
    },
    facts: {
      de: ["Nahe Cristo Rei", "Reiches Meeresleben"],
      hu: ["Cristo Rei közelében", "Gazdag tengeri élővilág"],
      ro: ["Lângă Cristo Rei", "Viață marină bogată"],
      en: ["Near Cristo Rei", "Rich marine life"]
    }
  },
  {
    id: "manatuto-salt-pans-life-v2",
    type: "agriculture",
    parent: "TL-MT",
    coords: [126.0141, -8.5111],
    name: { de: "Manatuto Salzpfannen", hu: "Manatuto sólepárlók", ro: "Salinele din Manatuto", en: "Manatuto Salt Pans" },
    description: {
      de: "Traditionelle Salzgewinnungsanlagen an der Nordküste, wo Meerwasser in flachen Becken durch die Sonne verdunstet wird.",
      hu: "Hagyományos sólepárlók az északi parton, ahol a tengervizet sekély medencékben párologtatja el a nap.",
      ro: "Bazine tradiționale de extracție a sării pe coasta de nord, unde apa de mare este evaporată de soare în bazine puțin adânci.",
      en: "Traditional salt extraction pans on the north coast, where seawater is evaporated by the sun in shallow pools."
    },
    facts: {
      de: ["Traditionelle Methode", "Küstenwirtschaft"],
      hu: ["Hagyományos módszer", "Partvidéki gazdaság"],
      ro: ["Metodă tradițională", "Economie de coastă"],
      en: ["Traditional method", "Coastal economy"]
    }
  },
  {
    id: "cristo-rei-macaque-habitat-life-v2",
    type: "wildlife-area",
    parent: "TL-DI",
    coords: [125.6111, -8.5251],
    name: { de: "Cristo Rei Affenhabitat", hu: "Cristo Rei majomélőhely", ro: "Habitatul macacilor de la Cristo Rei", en: "Cristo Rei Macaque Habitat" },
    description: {
      de: "Die bewaldeten Hügel rund um die Christusstatue bieten einen natürlichen Lebensraum für wilde Javaneraffen.",
      hu: "A Krisztus-szobrot körülvevő erdős dombok természetes élőhelyet biztosítanak a vadon élő jávai makákóknak.",
      ro: "Dealurile împădurite din jurul statuii lui Hristos oferă un habitat natural pentru macacii javanezi sălbatici.",
      en: "The forested hills around the Christ statue provide a natural habitat for wild Javanese macaques."
    },
    facts: {
      de: ["Wilde Makaken", "Hügeliges Gelände"],
      hu: ["Vadon élő makákók", "Dombos terep"],
      ro: ["Macaque sălbatici", "Teren deluros"],
      en: ["Wild macaques", "Hilly terrain"]
    }
  },
  {
    id: "maubisse-farms-life-v2",
    type: "agriculture",
    parent: "TL-AN",
    coords: [125.5971, -8.8381],
    name: { de: "Maubisse Farmlandschaft", hu: "Maubisse farmvidék", ro: "Terenurile agricole din Maubisse", en: "Maubisse Farmlands" },
    description: {
      de: "Die kühlen Hochebenen von Maubisse sind ideal für den Anbau von Gemüse, Erdbeeren und Kaffee.",
      hu: "Maubisse hűvös fennsíkjai ideálisak zöldségek, eper és kávé termesztésére.",
      ro: "Podișurile răcoroase din Maubisse sunt ideale pentru cultivarea legumelor, căpșunilor și cafelei.",
      en: "The cool plateaus of Maubisse are ideal for growing vegetables, strawberries, and coffee."
    },
    facts: {
      de: ["Kühles Klima", "Gemüseanbau"],
      hu: ["Hűvös éghajlat", "Zöldségtermesztés"],
      ro: ["Climă răcoroasă", "Cultivarea legumelor"],
      en: ["Cool climate", "Vegetable farming"]
    }
  },
  {
    id: "jardim-borja-da-costa-life-v2",
    type: "park",
    parent: "TL-DI",
    coords: [125.5781, -8.5581],
    name: { de: "Jardim Borja da Costa", hu: "Jardim Borja da Costa", ro: "Jardim Borja da Costa", en: "Jardim Borja da Costa" },
    description: {
      de: "Ein ruhiger Park in Dili, benannt nach einem berühmten timoresischen Dichter, der zum Verweilen einlädt.",
      hu: "Csendes park Diliben, amelyet egy híres timori költőről neveztek el, és pihenésre csábít.",
      ro: "Un parc liniștit din Dili, numit după un faimos poet timorez, care te invită la relaxare.",
      en: "A quiet park in Dili named after a famous Timorese poet, inviting visitors to relax."
    },
    facts: {
      de: ["Nach Dichter benannt", "Grüne Oase"],
      hu: ["Költőről elnevezve", "Zöld oázis"],
      ro: ["Numit după un poet", "Oază verde"],
      en: ["Named after a poet", "Green oasis"]
    }
  },
  {
    id: "com-coastal-reserve-life-v2",
    type: "wildlife-area",
    parent: "TL-LA",
    coords: [127.0601, -8.3581],
    name: { de: "Com Küstenreservat", hu: "Com partvidéki rezervátum", ro: "Rezervația de coastă Com", en: "Com Coastal Reserve" },
    description: {
      de: "Ein malerischer Küstenstreifen im Osten, der für seine vielfältige Vogelwelt und Meeresschildkröten-Nistplätze bekannt ist.",
      hu: "Festői partszakasz keleten, amely gazdag madárvilágáról és tengeri teknősök fészkelőhelyeiről ismert.",
      ro: "O porțiune de coastă pitorească din est, cunoscută pentru avifauna sa diversă și locurile de cuibărit ale țestoaselor marine.",
      en: "A picturesque stretch of coastline in the east known for its diverse birdlife and sea turtle nesting sites."
    },
    facts: {
      de: ["Schildkröten-Nester", "Vogelbeobachtung"],
      hu: ["Teknősfészkek", "Madármegfigyelés"],
      ro: ["Cuiburi de țestoase", "Observarea păsărilor"],
      en: ["Turtle nests", "Bird watching"]
    }
  },
  {
    id: "oecusse-sandalwood-life-v2",
    type: "agriculture",
    parent: "TL-OE",
    coords: [124.3661, -9.2831],
    name: { de: "Oecusse Sandelholz-Wälder", hu: "Oecusse szantálfa-erdők", ro: "Pădurile de lemn de santal Oecusse", en: "Oecusse Sandalwood Forests" },
    description: {
      de: "Die Exklave Oecusse war historisch das Zentrum des Sandelholzhandels; heute gibt es Bemühungen zur Wiederaufforstung.",
      hu: "Oecusse exklávé történelmileg a szantálfa-kereskedelem központja volt; ma újraerdősítési erőfeszítések folynak.",
      ro: "Exclava Oecusse a fost istoric centrul comerțului cu lemn de santal; astăzi există eforturi de reîmpădurire.",
      en: "The Oecusse exclave was historically the center of the sandalwood trade; today there are reforestation efforts."
    },
    facts: {
      de: ["Historisches Exportgut", "Wiederaufforstung"],
      hu: ["Történelmi exportcikk", "Újraerdősítés"],
      ro: ["Export istoric", "Reîmpădurire"],
      en: ["Historical export", "Reforestation"]
    }
  },
  {
    id: "baucau-terraces-life-v2",
    type: "agriculture",
    parent: "TL-BA",
    coords: [126.4581, -8.4711],
    name: { de: "Baucau Terrassenfelder", hu: "Baucau teraszos földek", ro: "Câmpurile terasate din Baucau", en: "Baucau Terrace Fields" },
    description: {
      de: "Durch natürliche Quellen bewässerte Terrassenfelder, auf denen Reis und Gemüse in der hügeligen Landschaft angebaut werden.",
      hu: "Természetes források által öntözött teraszos mezők, ahol rizst és zöldségeket termesztenek a dombos tájon.",
      ro: "Câmpuri terasate irigate de izvoare naturale, unde se cultivă orez și legume în peisajul deluros.",
      en: "Terraced fields irrigated by natural springs, where rice and vegetables are grown in the hilly landscape."
    },
    facts: {
      de: ["Quellwasser-Bewässerung", "Hügelige Landschaft"],
      hu: ["Forrásvizes öntözés", "Dombos táj"],
      ro: ["Irigare cu apă de izvor", "Peisaj deluros"],
      en: ["Spring water irrigation", "Hilly landscape"]
    }
  },
  {
    id: "lospalos-livestock-life-v2",
    type: "agriculture",
    parent: "TL-LA",
    coords: [126.9951, -8.5221],
    name: { de: "Lospalos Viehweiden", hu: "Lospalos állatlegelők", ro: "Pășunile din Lospalos", en: "Lospalos Livestock Pastures" },
    description: {
      de: "Weite Grasebenen in der Region Lospalos, die traditionell für die Zucht von Wasserbüffeln und Rindern genutzt werden.",
      hu: "Széles füves síkságok a Lospalos régióban, amelyeket hagyományosan vízibivalyok és szarvasmarhák tenyésztésére használnak.",
      ro: "Câmpii întinse de iarbă în regiunea Lospalos, folosite tradițional pentru creșterea bivolilor de apă și a vitelor.",
      en: "Vast grassy plains in the Lospalos region, traditionally used for breeding water buffalo and cattle."
    },
    facts: {
      de: ["Wasserbüffel-Zucht", "Grasebenen"],
      hu: ["Vízibivaly-tenyésztés", "Füves síkságok"],
      ro: ["Creșterea bivolilor de apă", "Câmpii de iarbă"],
      en: ["Water buffalo breeding", "Grassy plains"]
    }
  },
  {
    id: "betano-crocodile-habitat-life-v2",
    type: "wildlife-area",
    parent: "TL-MA",
    coords: [125.7271, -9.1621],
    name: { de: "Betano Krokodil-Sümpfe", hu: "Betano krokodilmocsarak", ro: "Mlaștinile cu crocodili Betano", en: "Betano Crocodile Swamps" },
    description: {
      de: "Die Sumpfgebiete nahe der Südküste sind ein wichtiger natürlicher Lebensraum für das Leistenkrokodil, das hier heilig ist.",
      hu: "A déli part közelében lévő mocsárvidékek fontos természetes élőhelyei a bordás krokodilnak, amely itt szent állat.",
      ro: "Zonele mlăștinoase din apropierea coastei de sud sunt un habitat natural important pentru crocodilul de apă sărată, considerat sacru aici.",
      en: "The swamplands near the south coast are an important natural habitat for the saltwater crocodile, which is sacred here."
    },
    facts: {
      de: ["Heilige Krokodile", "Südliche Sumpflandschaft"],
      hu: ["Szent krokodilok", "Déli mocsárvidék"],
      ro: ["Crocodili sacri", "Peisaj de mlaștină sudic"],
      en: ["Sacred crocodiles", "Southern swamp landscape"]
    }
  },
  {
    id: "viqueque-teak-forests-life-v2",
    type: "agriculture",
    parent: "TL-VI",
    coords: [126.3641, -8.8671],
    name: { de: "Viqueque Teakwälder", hu: "Viqueque tíkfaerdők", ro: "Pădurile de tec Viqueque", en: "Viqueque Teak Forests" },
    description: {
      de: "Forstwirtschaftlich genutzte Gebiete in Viqueque, in denen Teakbäume für die Holzproduktion angebaut werden.",
      hu: "Viqueque erdészeti területei, ahol tíkfákat termesztenek faanyag előállítására.",
      ro: "Zone de silvicultură în Viqueque unde arborii de tec sunt cultivați pentru producția de lemn.",
      en: "Forestry areas in Viqueque where teak trees are grown for timber production."
    },
    facts: {
      de: ["Teakholz-Produktion", "Forstwirtschaft"],
      hu: ["Tíkfa termelés", "Erdőgazdálkodás"],
      ro: ["Producția de lemn de tec", "Silvicultură"],
      en: ["Teak wood production", "Forestry"]
    }
  },
  {
    id: "timor-plaza-kids-zone-life-v2",
    type: "kid-friendly",
    parent: "TL-DI",
    coords: [125.5481, -8.5531],
    name: { de: "Timor Plaza Spielbereich", hu: "Timor Plaza játszóház", ro: "Zona de joacă Timor Plaza", en: "Timor Plaza Kids Zone" },
    description: {
      de: "Ein sicherer und unterhaltsamer Indoor-Spielplatz im größten Einkaufszentrum von Dili, ideal für Familien.",
      hu: "Biztonságos és szórakoztató beltéri játszóház Dili legnagyobb bevásárlóközpontjában, ideális családok számára.",
      ro: "Un loc de joacă interior sigur și distractiv în cel mai mare centru comercial din Dili, ideal pentru familii.",
      en: "A safe and fun indoor playground in Dili's largest shopping mall, ideal for families."
    },
    facts: {
      de: ["Indoor-Aktivität", "Familienfreundlich"],
      hu: ["Beltéri tevékenység", "Családbarát"],
      ro: ["Activitate interioară", "Potrivit pentru familii"],
      en: ["Indoor activity", "Family friendly"]
    }
  },
  {
    id: "dili-promenade-park-life-v2",
    type: "park",
    parent: "TL-DI",
    coords: [125.5761, -8.5491],
    name: { de: "Dili Uferpromenade", hu: "Dili tengerparti sétány", ro: "Promenada Dili", en: "Dili Waterfront Promenade" },
    description: {
      de: "Eine von Bäumen gesäumte Promenade entlang der Bucht von Dili, beliebt für abendliche Spaziergänge und Erholung.",
      hu: "Fákkal szegélyezett sétány a Dili-öböl mentén, amely népszerű az esti séták és a pihenés céljából.",
      ro: "O promenadă mărginită de copaci de-a lungul golfului Dili, populară pentru plimbările de seară și relaxare.",
      en: "A tree-lined promenade along the Bay of Dili, popular for evening walks and recreation."
    },
    facts: {
      de: ["Beliebter Spazierweg", "Meeresbrise"],
      hu: ["Népszerű sétány", "Tengeri szellő"],
      ro: ["Alee populară", "Briza mării"],
      en: ["Popular walkway", "Sea breeze"]
    }
  },
  {
    id: "same-cocoa-farms-life-v2",
    type: "agriculture",
    parent: "TL-MA",
    coords: [125.6481, -9.0041],
    name: { de: "Same Kakao-Plantagen", hu: "Same kakaóültetvények", ro: "Plantațiile de cacao din Same", en: "Same Cocoa Plantations" },
    description: {
      de: "Landwirtschaftliche Betriebe in der Region Same, die zunehmend hochwertigen Kakao neben Kaffee anbauen.",
      hu: "Mezőgazdasági üzemek a Same régióban, amelyek a kávé mellett egyre több kiváló minőségű kakaót termesztenek.",
      ro: "Ferme agricole din regiunea Same care cultivă tot mai mult cacao de înaltă calitate pe lângă cafea.",
      en: "Farms in the Same region that are increasingly growing high-quality cocoa alongside coffee."
    },
    facts: {
      de: ["Kakaoanbau", "Aufstrebender Sektor"],
      hu: ["Kakaótermesztés", "Feltörekvő ágazat"],
      ro: ["Cultivarea cacaoului", "Sector în curs de dezvoltare"],
      en: ["Cocoa farming", "Emerging sector"]
    }
  },
  {
    id: "fuiloro-plateau-farms-life-v2",
    type: "agriculture",
    parent: "TL-LA",
    coords: [126.9661, -8.4161],
    name: { de: "Fuiloro-Plateau Landwirtschaft", hu: "Fuiloro-fennsík mezőgazdasága", ro: "Agricultura din Platoul Fuiloro", en: "Fuiloro Plateau Farming" },
    description: {
      de: "Das ausgedehnte Fuiloro-Plateau wird intensiv für den Anbau von Mais und anderem Getreide genutzt.",
      hu: "A kiterjedt Fuiloro-fennsíkot intenzíven használják kukorica és egyéb gabonafélék termesztésére.",
      ro: "Platoul extins Fuiloro este folosit intensiv pentru cultivarea porumbului și a altor cereale.",
      en: "The extensive Fuiloro Plateau is used intensively for growing corn and other grains."
    },
    facts: {
      de: ["Maisanbau", "Fruchtbares Plateau"],
      hu: ["Kukoricatermesztés", "Termékeny fennsík"],
      ro: ["Cultivarea porumbului", "Platou fertil"],
      en: ["Corn farming", "Fertile plateau"]
    }
  }
];