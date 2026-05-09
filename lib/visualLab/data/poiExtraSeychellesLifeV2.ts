import type { POI } from "./poi";

export const poiExtraSeychellesLifeV2: POI[] = [
  {
    id: "veuve-nature-reserve-life-v2",
    type: "animal-habitat",
    parent: "SC-15",
    coords: [55.828, -4.357],
    name: {
      de: "Veuve Naturschutzgebiet",
      hu: "Veuve természetvédelmi terület",
      ro: "Rezervația Naturală Veuve",
      en: "Veuve Nature Reserve"
    },
    description: {
      de: "Ein wichtiges Schutzgebiet auf La Digue, das als letzter Rückzugsort für den seltenen Seychellen-Paradiesschnäpper dient.",
      hu: "Fontos védett terület La Digue szigetén, amely a ritka seychelle-szigeteki paradicsom-légyvadász utolsó menedékhelye.",
      ro: "O zonă protejată importantă pe La Digue, care servește drept ultimul refugiu pentru pasărea rară Flycatcherul de paradis de Seychelles.",
      en: "A crucial protected area on La Digue that serves as the last sanctuary for the rare Seychelles Paradise Flycatcher."
    },
    facts: {
      de: ["Heimat des Paradiesschnäppers", "Auf La Digue gelegen", "Dichter Takamaka-Wald", "Geführte Naturtouren"],
      hu: ["A paradicsom-légyvadász otthona", "La Digue szigetén található", "Sűrű takamaka-erdő", "Vezetett természettúrák"],
      ro: ["Casa Flycatcherului de paradis", "Situată pe La Digue", "Pădure deasă de Takamaka", "Tururi ghidate în natură"],
      en: ["Home to the Paradise Flycatcher", "Located on La Digue", "Dense Takamaka forest", "Guided nature tours"]
    }
  },
  {
    id: "victoria-botanical-gardens-life-v2",
    type: "kid-landmark",
    parent: "SC-18",
    coords: [55.453, -4.630],
    name: {
      de: "Botanischer Garten von Victoria",
      hu: "Victoriai Botanikus Kert",
      ro: "Grădina Botanică din Victoria",
      en: "Victoria Botanical Gardens"
    },
    description: {
      de: "Ein über 100 Jahre alter Garten in der Hauptstadt, der Riesenschildkröten, Flughunde und seltene Orchideen beherbergt.",
      hu: "Több mint 100 éves kert a fővárosban, amely óriásteknősöknek, repülőkutyáknak és ritka orchideáknak ad otthont.",
      ro: "O grădină veche de peste 100 de ani din capitală, care găzduiește țestoase uriașe, vulpi zburătoare și orhidee rare.",
      en: "A century-old garden in the capital city, home to giant tortoises, fruit bats, and rare orchids."
    },
    facts: {
      de: ["Gegründet 1901", "Riesenschildkröten-Gehege", "Exotische Palmenarten", "Beliebt bei Familien"],
      hu: ["1901-ben alapították", "Óriásteknős kifutó", "Egzotikus pálmafajok", "Családok körében népszerű"],
      ro: ["Fondată în 1901", "Țarc pentru țestoase uriașe", "Specii de palmieri exotici", "Populară printre familii"],
      en: ["Established in 1901", "Giant tortoise enclosure", "Exotic palm species", "Popular with families"]
    }
  },
  {
    id: "roche-caiman-bird-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "SC-23",
    coords: [55.468, -4.638],
    name: {
      de: "Roche Caiman Vogelschutzgebiet",
      hu: "Roche Caiman madárrezervátum",
      ro: "Sanctuarul de păsări Roche Caiman",
      en: "Roche Caiman Bird Sanctuary"
    },
    description: {
      de: "Ein künstlich angelegtes Feuchtgebiet, das zahlreichen Wattvögeln, Libellen und anderen einheimischen Arten einen Lebensraum bietet.",
      hu: "Mesterségesen kialakított vizes élőhely, amely számos gázlómadárnak, szitakötőnek és más őshonos fajnak nyújt otthont.",
      ro: "O zonă umedă creată artificial care oferă un habitat pentru numeroase păsări de mlaștină, libelule și alte specii native.",
      en: "A man-made wetland sanctuary providing a habitat for numerous wading birds, dragonflies, and other native species."
    },
    facts: {
      de: ["Künstliches Feuchtgebiet", "Beobachtungsposten für Vögel", "Nahe Victoria gelegen", "Renaturiertes Land"],
      hu: ["Mesterséges vizes élőhely", "Madármegfigyelő hely", "Victoria közelében", "Helyreállított terület"],
      ro: ["Zonă umedă artificială", "Punct de observare a păsărilor", "Situat lângă Victoria", "Teren renaturat"],
      en: ["Man-made wetland", "Bird watching post", "Located near Victoria", "Restored land area"]
    }
  },
  {
    id: "barbarons-biodiversity-centre-life-v2",
    type: "animal-habitat",
    parent: "SC-13",
    coords: [55.462, -4.685],
    name: {
      de: "Barbarons Biodiversitätszentrum",
      hu: "Barbarons Biodiverzitás Központ",
      ro: "Centrul de Biodiversitate Barbarons",
      en: "Barbarons Biodiversity Centre"
    },
    description: {
      de: "Ein Zentrum für die Erhaltung und Erforschung der einzigartigen Flora und Fauna der Seychellen mit botanischen Sammlungen.",
      hu: "A Seychelle-szigetek egyedülálló növény- és állatvilágának megőrzésére és kutatására létrehozott központ botanikai gyűjteményekkel.",
      ro: "Un centru pentru conservarea și cercetarea florei și faunei unice din Seychelles, cu colecții botanice.",
      en: "A center dedicated to the conservation and study of the unique flora and fauna of the Seychelles, featuring botanical collections."
    },
    facts: {
      de: ["Forschung und Erhaltung", "Botanische Gärten", "Endemische Pflanzenarten", "An der Westküste von Mahé"],
      hu: ["Kutatás és megőrzés", "Botanikus kertek", "Endemikus növényfajok", "Mahé nyugati partján"],
      ro: ["Cercetare și conservare", "Grădini botanice", "Specii de plante endemice", "Pe coasta de vest a insulei Mahé"],
      en: ["Research and conservation", "Botanical gardens", "Endemic plant species", "On Mahé's west coast"]
    }
  },
  {
    id: "tea-plantation-mahe-life-v2",
    type: "agriculture",
    parent: "SC-21",
    coords: [55.438, -4.653],
    name: {
      de: "Teeplantage von Mahé",
      hu: "Mahéi teaültetvény",
      ro: "Plantația de ceai din Mahé",
      en: "Tea Plantation Mahé"
    },
    description: {
      de: "Die einzige Teeplantage des Landes, gelegen in den kühlen Bergen von Morne Blanc, mit Panoramablick über die Insel.",
      hu: "Az ország egyetlen teaültetvénye, amely a Morne Blanc hűvös hegyei között található, panorámás kilátással a szigetre.",
      ro: "Singura plantație de ceai din țară, situată în munții răcoroși din Morne Blanc, oferind vederi panoramice peste insulă.",
      en: "The only tea plantation in the country, situated in the cool mountains of Morne Blanc, offering panoramic island views."
    },
    facts: {
      de: ["Einzige Teeplantage", "Gegründet 1962", "In kühler Berglage", "Fabrikbesichtigungen möglich"],
      hu: ["Egyetlen teaültetvény", "1962-ben alapították", "Hűvös hegyi környezet", "Gyárlátogatás lehetséges"],
      ro: ["Singura plantație de ceai", "Fondată în 1962", "Locație montană răcoroasă", "Tururi de fabrică disponibile"],
      en: ["Only tea plantation", "Established in 1962", "Cool mountain setting", "Factory tours available"]
    }
  },
  {
    id: "agricultural-exhibition-centre-life-v2",
    type: "agriculture",
    parent: "SC-13",
    coords: [55.460, -4.680],
    name: {
      de: "Landwirtschaftliches Ausstellungszentrum",
      hu: "Mezőgazdasági Kiállítási Központ",
      ro: "Centrul Expozițional Agricol",
      en: "Agricultural Exhibition Centre"
    },
    description: {
      de: "Ein Zentrum zur Förderung lokaler Landwirtschaftsprodukte und Techniken in Grand Anse auf der Insel Mahé.",
      hu: "Központ a helyi mezőgazdasági termékek és technikák népszerűsítésére Grand Anse-ban, Mahé szigetén.",
      ro: "Un centru pentru promovarea produselor și tehnicilor agricole locale în Grand Anse, pe insula Mahé.",
      en: "A center for promoting local agricultural products and techniques in Grand Anse on Mahé Island."
    },
    facts: {
      de: ["Landwirtschaftliches Zentrum", "In Grand Anse (Mahé)", "Lokale Marktprodukte", "Ausstellungen von Nutztieren"],
      hu: ["Mezőgazdasági központ", "Grand Anse-ban (Mahé)", "Helyi piaci termékek", "Haszonállat kiállítások"],
      ro: ["Centru agricol", "În Grand Anse (Mahé)", "Produse locale de piață", "Expoziții de animale de fermă"],
      en: ["Agricultural hub", "In Grand Anse (Mahé)", "Local market produce", "Livestock exhibitions"]
    }
  },
  {
    id: "paradis-des-enfants-life-v2",
    type: "kid-landmark",
    parent: "SC-16",
    coords: [55.454, -4.618],
    name: {
      de: "Paradis des Enfants Spielpark",
      hu: "Paradis des Enfants szabadidőpark",
      ro: "Parcul de distracții Paradis des Enfants",
      en: "Paradis des Enfants"
    },
    description: {
      de: "Ein großer Spielpark in Victoria mit Karussells, Spielgeräten und Erholungsflächen für Kinder und Familien.",
      hu: "Nagy szabadidőpark Victoriában körhintákkal, játékokkal és pihenőhelyekkel a gyermekek és családok számára.",
      ro: "Un parc mare de distracții în Victoria, cu caruseluri, locuri de joacă și spații de recreere pentru copii și familii.",
      en: "A large playground and park in Victoria featuring carousels, games, and recreational areas for children and families."
    },
    facts: {
      de: ["Größter Spielpark", "In Victoria gelegen", "Kettenkarussell", "Sicherer Erholungsort"],
      hu: ["Legnagyobb játszópark", "Victoriában található", "Lánckörhinta", "Biztonságos pihenőhely"],
      ro: ["Cel mai mare parc de joacă", "Situat în Victoria", "Carusel cu lanțuri", "Loc de recreere sigur"],
      en: ["Largest playground", "Located in Victoria", "Chain carousel", "Safe recreational space"]
    }
  },
  {
    id: "black-parrot-habitat-life-v2",
    type: "animal-habitat",
    parent: "SC-07",
    coords: [55.738, -4.335],
    name: {
      de: "Lebensraum des Seychellen-Papageis",
      hu: "A Seychelle-szigeteki papagáj élőhelye",
      ro: "Habitatul papagalului negru",
      en: "Black Parrot Habitat"
    },
    description: {
      de: "Ein spezifisches Gebiet im Praslin Nationalpark, das die einzige Population des seltenen Seychellen-Vasa-Papageis beherbergt.",
      hu: "Praslin Nemzeti Park egy speciális területe, amely a ritka seychelle-szigeteki vázapapagáj egyetlen populációjának ad otthont.",
      ro: "O zonă specifică din Parcul Național Praslin, care adăpostește singura populație a papagalului negru de Seychelles.",
      en: "A specific area within the Praslin National Park that hosts the only population of the rare Seychelles Black Parrot."
    },
    facts: {
      de: ["Einziger Fundort des Vogels", "Im Praslin Nationalpark", "Endemische Papageienart", "Streng geschützt"],
      hu: ["A madár egyetlen lelőhelye", "Praslin Nemzeti Parkban", "Endemikus papagájfaj", "Szigorúan védett"],
      ro: ["Singurul loc unde trăiește", "În Parcul Național Praslin", "Specie de papagal endemică", "Strict protejat"],
      en: ["Only habitat of this bird", "In Praslin National Park", "Endemic parrot species", "Strictly protected"]
    }
  },
  {
    id: "anse-kerlan-turtle-hatchery-life-v2",
    type: "animal-habitat",
    parent: "SC-14",
    coords: [55.682, -4.300],
    name: {
      de: "Schildkröten-Brutstätte Anse Kerlan",
      hu: "Anse Kerlan teknőskeltető",
      ro: "Centrul de incubație a țestoaselor Anse Kerlan",
      en: "Anse Kerlan Turtle Hatchery"
    },
    description: {
      de: "Ein geschützter Strandabschnitt auf Praslin, der als einer der wichtigsten Nistplätze für Karettschildkröten gilt.",
      hu: "Védett tengerparti szakasz Praslinon, amely a közönséges cserepesteknősök egyik legfontosabb fészkelőhelye.",
      ro: "O porțiune protejată de plajă pe Praslin, considerată unul dintre cele mai importante locuri de cuibărit pentru țestoasele Hawksbill.",
      en: "A protected beach area on Praslin known as one of the most important nesting sites for Hawksbill sea turtles."
    },
    facts: {
      de: ["Wichtiger Nistplatz", "Karettschildkröten", "Auf der Insel Praslin", "Überwachte Gelege"],
      hu: ["Fontos fészkelőhely", "Cserepesteknősök", "Praslin szigetén", "Megfigyelt fészekaljak"],
      ro: ["Loc de cuibărit vital", "Țestoase Hawksbill", "Pe insula Praslin", "Cuiburi monitorizate"],
      en: ["Vital nesting site", "Hawksbill sea turtles", "On Praslin Island", "Monitored nesting sites"]
    }
  },
  {
    id: "beacon-island-habitat-life-v2",
    type: "animal-habitat",
    parent: "SC",
    coords: [55.518, -4.618],
    name: {
      de: "Seevogelhabitat Beacon Island",
      hu: "Beacon-szigeti madárélőhely",
      ro: "Habitatul de păsări marine de pe insula Beacon",
      en: "Beacon Island (Île Sèche)"
    },
    description: {
      de: "Eine kleine, felsige Insel östlich von Mahé, die als wichtiger Brut- und Rastplatz für verschiedene Seevogelarten dient.",
      hu: "Kicsi, sziklás sziget Mahétól keletre, amely számos tengeri madárfaj fontos fészkelő- és pihenőhelye.",
      ro: "O insulă mică și stâncoasă la est de Mahé, care servește ca loc important de cuibărit și popas pentru diverse păsări marine.",
      en: "A small, rocky island east of Mahé that serves as an important nesting and resting site for various seabird species."
    },
    facts: {
      de: ["Wichtig für Seevögel", "Östlich von Mahé", "Unbewohnte Felsinsel", "Vogelschutzgebiet"],
      hu: ["Tengeri madaraknak fontos", "Mahétól keletre", "Lakatlan sziklás sziget", "Madárvédelmi terület"],
      ro: ["Important pentru păsări marine", "La est de Mahé", "Insulă stâncoasă nelocuită", "Sanctuar de păsări"],
      en: ["Important for seabirds", "East of Mahé", "Uninhabited rocky island", "Bird sanctuary"]
    }
  },
  {
    id: "booby-island-reserve-life-v2",
    type: "animal-habitat",
    parent: "SC-07",
    coords: [55.728, -4.262],
    name: {
      de: "Booby Island Naturschutzgebiet",
      hu: "Booby-szigeti természetvédelmi terület",
      ro: "Rezervația Naturală Booby Island",
      en: "Booby Island"
    },
    description: {
      de: "Ein steiles Eiland nördlich von Praslin, benannt nach den Tölpeln, die hier einst in großen Kolonien nisteten.",
      hu: "Praslintól északra fekvő meredek sziget, amelyet az itt egykor nagy kolóniákban fészkelő szulákról neveztek el.",
      ro: "O insulă abruptă la nord de Praslin, numită după păsările Booby care cuibăreau aici în colonii mari.",
      en: "A steep islet north of Praslin named after the boobies that once nested here in large colonies."
    },
    facts: {
      de: ["Nördlich von Praslin", "Bedeutende Vogelwelt", "Steile Felsklippen", "Geschütztes Reservat"],
      hu: ["Praslintól északra", "Jelentős madárvilág", "Meredek sziklák", "Védett rezervátum"],
      ro: ["La nord de Praslin", "Avifaună semnificativă", "Stânci abrupte", "Rezervație protejată"],
      en: ["North of Praslin", "Significant bird life", "Steep rock cliffs", "Protected reserve"]
    }
  },
  {
    id: "recif-island-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "SC",
    coords: [55.767, -4.583],
    name: {
      de: "Recif Island Vogelschutzgebiet",
      hu: "Récif-szigeti madárrezervátum",
      ro: "Sanctuarul de păsări de pe insula Récif",
      en: "Recif Island Bird Sanctuary"
    },
    description: {
      de: "Eine kleine Granitinsel, die eine bedeutende Kolonie von Rußseeschwalben und anderen tropischen Seevögeln beherbergt.",
      hu: "Kicsi gránitsziget, amely jelentős füstös csér kolóniának és más trópusi tengeri madaraknak ad otthont.",
      ro: "O mică insulă de granit care găzduiește o colonie importantă de rândunele de mare și alte păsări marine tropicale.",
      en: "A small granitic island hosting a significant colony of sooty terns and other tropical seabirds."
    },
    facts: {
      de: ["Große Vogelkolonie", "Granitische Formation", "Geschützter Status", "Nistplatz für Seeschwalben"],
      hu: ["Nagy madárkolónia", "Gránit képződmény", "Védett státusz", "Csérek fészkelőhelye"],
      ro: ["Colonie mare de păsări", "Formațiune granitică", "Statut protejat", "Loc de cuibărit pentru rândunele"],
      en: ["Large bird colony", "Granitic formation", "Protected status", "Nesting site for terns"]
    }
  },
  {
    id: "vacoa-nature-trail-mangroves-life-v2",
    type: "animal-habitat",
    parent: "SC-13",
    coords: [55.465, -4.682],
    name: {
      de: "Mangroven am Vacoa Nature Trail",
      hu: "A Vacoa tanösvény mangroveerdeje",
      ro: "Mangrovele de pe traseul Vacoa",
      en: "Vacoa Nature Trail Mangroves"
    },
    description: {
      de: "Ein Lehrpfad an der Westküste von Mahé, der durch ein intaktes Mangroven-Ökosystem mit Krabben und Fischen führt.",
      hu: "Mahé nyugati partján található tanösvény, amely egy ép mangrove-ökoszisztémán keresztül vezet, rákokkal és halakkal.",
      ro: "Un traseu educațional pe coasta de vest a insulei Mahé, care trece printr-un ecosistem de mangrove intact, cu rabi și pești.",
      en: "An educational trail on Mahé's west coast leading through an intact mangrove ecosystem rich in crabs and fish."
    },
    facts: {
      de: ["Mangroven-Ökosystem", "Lehrpfad", "Barbarons (Mahé)", "Reich an Krebsarten"],
      hu: ["Mangrove-ökoszisztéma", "Tanösvény", "Barbarons (Mahé)", "Rákfajokban gazdag"],
      ro: ["Ecosistem de mangrove", "Traseu educativ", "Barbarons (Mahé)", "Bogat în specii de rabi"],
      en: ["Mangrove ecosystem", "Nature trail", "Barbarons (Mahé)", "Rich in crab species"]
    }
  },
  {
    id: "glacis-trois-freres-habitat-life-v2",
    type: "animal-habitat",
    parent: "SC-22",
    coords: [55.445, -4.635],
    name: {
      de: "Glacis-Trois Frères Ökosystem",
      hu: "Glacis-Trois Frères ökoszisztéma",
      ro: "Ecosistemul Glacis-Trois Frères",
      en: "Glacis-Trois Frères Habitat"
    },
    description: {
      de: "Ein Berggebiet auf Mahé, das für seine Kannenpflanzen und die kleinsten Frösche der Welt bekannt ist.",
      hu: "Hegyvidéki terület Mahé szigetén, amely kancsóka növényeiről és a világ legkisebb békáiról ismert.",
      ro: "O zonă montană pe Mahé, cunoscută pentru plantele sale carnivore și cele mai mici broaște din lume.",
      en: "A mountainous area on Mahé known for its pitcher plants and some of the world's smallest frogs."
    },
    facts: {
      de: ["Heimat von Kannenpflanzen", "Winzige Sooglossid-Frösche", "Bergplateau", "Einzigartige Flora"],
      hu: ["Kancsóka növények otthona", "Apró Sooglossid békák", "Hegyi fennsík", "Egyedülálló flóra"],
      ro: ["Casa plantelor carnivore", "Micuțele broaște Sooglossid", "Platou montan", "Floră unică"],
      en: ["Home to pitcher plants", "Tiny Sooglossid frogs", "Mountain plateau", "Unique flora"]
    }
  },
  {
    id: "la-digue-vanilla-plantations-life-v2",
    type: "agriculture",
    parent: "SC-15",
    coords: [55.825, -4.365],
    name: {
      de: "Vanilleplantagen auf La Digue",
      hu: "La Digue-i vaníliaültetvények",
      ro: "Plantațiile de vanilie de pe La Digue",
      en: "La Digue Vanilla Plantations"
    },
    description: {
      de: "Traditionelle Anbauflächen auf La Digue, auf denen die kostbare Vanilleorchidee in Kombination mit anderen Nutzpflanzen gedeiht.",
      hu: "Hagyományos mezőgazdasági területek La Digue szigetén, ahol az értékes vaníliaorchidea más haszonnövényekkel együtt terem.",
      ro: "Zonă tradițională de cultivare pe La Digue, unde prețioasa orhidee de vanilie crește alături de alte plante utile.",
      en: "Traditional cultivation areas on La Digue where the precious vanilla orchid thrives alongside other crops."
    },
    facts: {
      de: ["Vanilleanbau", "Auf La Digue", "Koloniale Tradition", "Manuelle Bestäubung"],
      hu: ["Vanília termesztés", "La Digue szigetén", "Gyarmati hagyomány", "Kézi beporzás"],
      ro: ["Cultivarea vaniliei", "Pe La Digue", "Tradiție colonială", "Polenizare manuală"],
      en: ["Vanilla cultivation", "On La Digue", "Colonial tradition", "Manual pollination"]
    }
  },
  {
    id: "patchouli-fields-mahe-life-v2",
    type: "agriculture",
    parent: "SC-05",
    coords: [55.510, -4.750],
    name: {
      de: "Patchouli-Felder von Mahé",
      hu: "Mahéi pacsuli-földek",
      ro: "Câmpurile de patchouli din Mahé",
      en: "Patchouli Fields Mahé"
    },
    description: {
      de: "Einige der wenigen verbliebenen Felder im Süden von Mahé, auf denen Patchouli für die Parfümherstellung kultiviert wird.",
      hu: "Mahé déli részén található azon kevés mező egyike, ahol pacsulit termesztenek parfümgyártáshoz.",
      ro: "Unele dintre puținele câmpuri rămase în sudul insulei Mahé unde se cultivă patchouli pentru fabricarea parfumurilor.",
      en: "One of the few remaining fields in south Mahé where patchouli is cultivated for perfume production."
    },
    facts: {
      de: ["Patchouli-Kultivierung", "Südliches Mahé", "Parfüm-Rohstoff", "Traditionelle Landwirtschaft"],
      hu: ["Pacsuli termesztés", "Dél-Mahé", "Parfüm alapanyag", "Hagyományos mezőgazdaság"],
      ro: ["Cultivarea patchouli", "Sudul insulei Mahé", "Materie primă pentru parfum", "Agricultură tradițională"],
      en: ["Patchouli cultivation", "Southern Mahé", "Perfume raw material", "Traditional farming"]
    }
  },
  {
    id: "silhouette-cinnamon-forest-life-v2",
    type: "agriculture",
    parent: "SC",
    coords: [55.230, -4.485],
    name: {
      de: "Zimtwälder von Silhouette",
      hu: "Silhouette-szigeti fahéjerdők",
      ro: "Pădurile de scorțișoară de pe Silhouette",
      en: "Silhouette Cinnamon Forest"
    },
    description: {
      de: "Ausgedehnte Wälder auf der Insel Silhouette, in denen wilder Zimt wächst, ein Relikt aus der Zeit der Zimt-Produktion.",
      hu: "Kiterjedt erdők Silhouette szigetén, ahol vadfahéj nő, a fahéjtermelés korabeli emléke.",
      ro: "Păduri întinse pe insula Silhouette unde crește scorțișoară sălbatică, o relicvă din era producției de scorțișoară.",
      en: "Extensive forests on Silhouette Island where wild cinnamon grows, a relic from the era of cinnamon production."
    },
    facts: {
      de: ["Wilder Zimtanbau", "Insel Silhouette", "Aromatisches Erbe", "Ehemalige Exportware"],
      hu: ["Vad fahéj", "Silhouette-sziget", "Aromás örökség", "Egykori exportcikk"],
      ro: ["Scorțișoară sălbatică", "Insula Silhouette", "Patrimoniu aromatic", "Fost produs de export"],
      en: ["Wild cinnamon growth", "Silhouette Island", "Aromatic heritage", "Former export commodity"]
    }
  },
  {
    id: "vaches-marines-habitat-life-v2",
    type: "animal-habitat",
    parent: "SC",
    coords: [55.383, -4.683],
    name: {
      de: "Île aux Vaches Marines Habitat",
      hu: "Île aux Vaches Marines élőhely",
      ro: "Habitatul Île aux Vaches Marines",
      en: "Île aux Vaches Marines Habitat"
    },
    description: {
      de: "Ein wichtiges Habitat für Seevögel und marine Arten auf den Felsen westlich von Mahé, benannt nach den Dugongs, die hier früher lebten.",
      hu: "Fontos madár- és tengeri élőhely Mahétól nyugatra, az egykor itt élt dugongokról (tengeri tehenekről) nevezték el.",
      ro: "Un habitat important pentru păsări și specii marine la vest de Mahé, numit după dugongii care trăiau aici în trecut.",
      en: "An important bird and marine habitat west of Mahé, named after the dugongs (sea cows) that used to frequent these waters."
    },
    facts: {
      de: ["Vogelschutzfelsen", "Westlich von Mahé", "Historischer Dugong-Ort", "Unbewohntes Habitat"],
      hu: ["Madárvédelmi sziklák", "Mahétól nyugatra", "Történelmi dugong lelőhely", "Lakatlan élőhely"],
      ro: ["Stânci pentru păsări", "La vest de Mahé", "Loc istoric pentru dugongi", "Habitat nelocuit"],
      en: ["Bird sanctuary rocks", "West of Mahé", "Historic dugong site", "Uninhabited habitat"]
    }
  },
  {
    id: "mamelles-island-colony-life-v2",
    type: "animal-habitat",
    parent: "SC",
    coords: [55.533, -4.483],
    name: {
      de: "Seevogelkolonie Mamelles Island",
      hu: "Mamelles-szigeti tengeri madárkolónia",
      ro: "Colonia de păsări marine de pe insula Mamelles",
      en: "Mamelles Island Seabird Colony"
    },
    description: {
      de: "Eine isolierte Granitinsel, die eine der wichtigsten Brutkolonien für Rußseeschwalben in den inneren Seychellen-Inseln beherbergt.",
      hu: "Elszigetelt gránitsziget, amely a belső Seychelle-szigetek egyik legfontosabb füstös csér kolóniájának ad otthont.",
      ro: "O insulă de granit izolată care găzduiește una dintre cele mai importante colonii de rândunele de mare din insulele interioare.",
      en: "An isolated granitic island hosting one of the most significant sooty tern breeding colonies in the Inner Seychelles."
    },
    facts: {
      de: ["Große Seeschwalben-Kolonie", "Isolierte Granitinsel", "Bedeutender Brutplatz", "Zentral im Archipel"],
      hu: ["Nagy csérkolónia", "Elszigetelt gránitsziget", "Fontos fészkelőhely", "A szigetcsoport közepén"],
      ro: ["Colonie mare de rândunele", "Insulă de granit izolată", "Loc important de cuibărit", "Central în arhipelag"],
      en: ["Large tern colony", "Isolated granitic island", "Major breeding site", "Central in archipelago"]
    }
  },
  {
    id: "coconut-plantation-darros-life-v2",
    type: "agriculture",
    parent: "SC",
    coords: [53.295, -5.410],
    name: {
      de: "Kokosnussplantage auf D'Arros",
      hu: "D'Arros-szigeti kókuszültetvény",
      ro: "Plantația de cocos de pe D'Arros",
      en: "Coconut Plantation D'Arros"
    },
    description: {
      de: "Eine ehemalige kommerzielle Kokosnussplantage auf dem D'Arros-Atoll, die heute Teil eines Naturschutzgebiets ist.",
      hu: "Egykori kereskedelmi kókuszültetvény a D'Arros-atollon, amely ma egy természetvédelmi terület része.",
      ro: "O fostă plantație comercială de cocos pe atolul D'Arros, care astăzi face parte dintr-o rezervație naturală.",
      en: "A former commercial coconut plantation on D'Arros Atoll, now part of a conservation management area."
    },
    facts: {
      de: ["Ehemalige Kopra-Quelle", "Auf dem D'Arros-Atoll", "Rekonstruiertes Ökosystem", "Teil der Äußeren Inseln"],
      hu: ["Egykori kopra-forrás", "A D'Arros-atollon", "Helyreállított ökoszisztéma", "A Külső-szigetek része"],
      ro: ["Fostă sursă de copra", "Pe atolul D'Arros", "Ecosistem reconstituit", "Parte a Insulelor Exterioare"],
      en: ["Former copra source", "On D'Arros Atoll", "Restored ecosystem", "Part of the Outer Islands"]
    }
  }
];
