import type { POI } from "./poi";

export const poiExtraLibyaReliefV2: POI[] = [
  {
    id: "jebel-akdar-highlands-relief-v2",
    type: "mountain",
    parent: "LY-JG",
    coords: [21.0, 32.7],
    name: { de: "Jebel Akhdar Hochland", hu: "Dzsebel el-Ahdar-felföld", ro: "Munții Jebel Akhdar", en: "Jebel Akhdar Highlands" },
    description: { de: "Ein Bergmassiv im Nordosten Libyens.", hu: "Hegyvidék Líbia északkeleti részén.", ro: "Un masiv muntos în nord-estul Libiei.", en: "A mountain massif in northeastern Libya." },
    facts: {
      de: ["Höchster Punkt ca. 880 m.", "Wichtige Region für die Landwirtschaft.", "Kalksteingebirge."],
      hu: ["Legmagasabb pontja kb. 880 m.", "Fontos mezőgazdasági régió.", "Mészkőhegység."],
      ro: ["Cel mai înalt punct aprox. 880 m.", "Regiune agricolă importantă.", "Munți de calcar."],
      en: ["Highest point approx. 880 m.", "Important agricultural region.", "Limestone mountains."]
    }
  },
  {
    id: "gargaf-range-relief-v2",
    type: "mountain",
    parent: "LY-WA",
    coords: [13.5, 27.5],
    name: { de: "Gargaf Gebirgszug", hu: "Gargaf-hegyvonulat", ro: "Munții Gargaf", en: "Gargaf Range" },
    description: { de: "Eine abgelegene Gebirgskette in der Wüste.", hu: "Távoli hegylánc a sivatagban.", ro: "Un lanț muntos izolat în deșert.", en: "A remote mountain range in the desert." },
    facts: {
      de: ["Besteht aus Sandstein.", "Erstreckt sich über Hunderte Kilometer.", "Wenig Vegetation."],
      hu: ["Homokkőből áll.", "Több száz kilométer hosszan húzódik.", "Kevés növényzet."],
      ro: ["Constituit din gresie.", "Se întinde pe sute de kilometri.", "Vegetație rară."],
      en: ["Composed of sandstone.", "Extends for hundreds of kilometers.", "Sparse vegetation."]
    }
  },
  {
    id: "jebel-soda-relief-v2",
    type: "mountain",
    parent: "LY-JU",
    coords: [16.5, 28.5],
    name: { de: "Jebel Soda Gebirge", hu: "Dzsebel Szoda-hegység", ro: "Munții Jebel Soda", en: "Jebel Soda Mountains" },
    description: { de: "Ein vulkanisches Bergmassiv.", hu: "Vulkáni eredetű hegység.", ro: "Un masiv muntos de origine vulcanică.", en: "A volcanic mountain massif." },
    facts: {
      de: ["Vulkanisches Gestein dominiert.", "Sehr trockenes Klima.", "Kaum bewohnt."],
      hu: ["Vulkáni kőzet dominál.", "Nagyon száraz éghajlat.", "Szinte lakatlan."],
      ro: ["Dominat de rocă vulcanică.", "Climat foarte uscat.", "Aproape nelocuit."],
      en: ["Volcanic rock dominates.", "Very dry climate.", "Hardly inhabited."]
    }
  },
  {
    id: "tibesti-foothills-relief-v2",
    type: "mountain",
    parent: "LY-MUR",
    coords: [18.0, 22.0],
    name: { de: "Tibesti-Ausläufer", hu: "Tibeszti-előhegység", ro: "Poalele Tibesti", en: "Tibesti Foothills" },
    description: { de: "Nördliche Ausläufer des Tibesti-Gebirges.", hu: "A Tibeszti-hegység északi előhegyei.", ro: "Poalele nordice ale Munților Tibesti.", en: "Northern foothills of the Tibesti Mountains." },
    facts: {
      de: ["Sehr zerklüftete Landschaft.", "Gehört zum zentralen Sahara-Gebirge.", "Harte klimatische Bedingungen."],
      hu: ["Nagyon tagolt táj.", "A központi Szahara-hegység része.", "Zord éghajlati viszonyok."],
      ro: ["Peisaj foarte fragmentat.", "Parte a munților centrali ai Saharei.", "Condiții climatice dure."],
      en: ["Very rugged landscape.", "Part of the central Sahara mountains.", "Harsh climatic conditions."]
    }
  },
  {
    id: "jebel-uwaynat-relief-v2",
    type: "mountain",
    parent: "LY-KJ",
    coords: [24.9, 21.9],
    name: { de: "Jebel Uwainat", hu: "Dzsebel Uvainat", ro: "Jebel Uwaynat", en: "Jebel Uwaynat" },
    description: { de: "Ein isoliertes Bergmassiv an der Grenze.", hu: "Izolált hegyvidék a határnál.", ro: "Un masiv muntos izolat la graniță.", en: "An isolated mountain massif at the border." },
    facts: {
      de: ["Grenzberg zu Ägypten und Sudan.", "Bekannt für Felsmalereien.", "Einzigartige geologische Struktur."],
      hu: ["Határhegy Egyiptommal és Szudánnal.", "Sziklarajzairól ismert.", "Egyedülálló geológiai szerkezet."],
      ro: ["Munte de graniță cu Egiptul și Sudanul.", "Cunoscut pentru picturile rupestre.", "Structură geologică unică."],
      en: ["Border mountain with Egypt and Sudan.", "Known for rock paintings.", "Unique geological structure."]
    }
  },
  {
    id: "jebel-tarhuna-relief-v2",
    type: "mountain",
    parent: "LY-MB",
    coords: [13.5, 32.5],
    name: { de: "Jebel Tarhuna", hu: "Dzsebel Tarhuna", ro: "Jebel Tarhuna", en: "Jebel Tarhuna" },
    description: { de: "Ein Gebirgszug südlich von Tripolis.", hu: "Hegyvonulat Tripolitól délre.", ro: "Un lanț muntos la sud de Tripoli.", en: "A mountain range south of Tripoli." },
    facts: {
      de: ["Wichtige Wasserquelle für das Umland.", "Kalksteinplateau.", "Moderate Höhe."],
      hu: ["Fontos vízforrás a környéknek.", "Mészkőfennsík.", "Mérsékelt magasság."],
      ro: ["Sursă importantă de apă pentru împrejurimi.", "Platou de calcar.", "Altitudine moderată."],
      en: ["Important water source for the region.", "Limestone plateau.", "Moderate height."]
    }
  },
  {
    id: "sirte-basin-relief-v2",
    type: "relief",
    parent: "LY-SR",
    coords: [17.0, 30.5],
    name: { de: "Sirte-Becken", hu: "Szirt-medence", ro: "Bazinul Sirte", en: "Sirte Basin" },
    description: { de: "Ein großes geologisches Sedimentbecken.", hu: "Nagy üledékes geológiai medence.", ro: "Un bazin geologic mare de sedimentare.", en: "A large geological sedimentary basin." },
    facts: {
      de: ["Wichtig für die Ölförderung.", "Flaches Beckenland.", "Wüstengebiet."],
      hu: ["Fontos az olajkitermelés számára.", "Lapos medencevidék.", "Sivatagi terület."],
      ro: ["Important pentru extracția petrolului.", "Regiune de bazin plată.", "Zonă deșertică."],
      en: ["Important for oil extraction.", "Flat basin region.", "Desert area."]
    }
  },
  {
    id: "al-haruj-relief-v2",
    type: "mountain",
    parent: "LY-JU",
    coords: [17.5, 27.0],
    name: { de: "Al-Haruj", hu: "Al-Haruj", ro: "Al-Haruj", en: "Al-Haruj" },
    description: { de: "Ein riesiges vulkanisches Plateau.", hu: "Hatalmas vulkáni fennsík.", ro: "Un imens platou vulcanic.", en: "A vast volcanic plateau." },
    facts: {
      de: ["Besteht aus vulkanischen Lavaströmen.", "Sehr steiniges Gelände.", "Schwer passierbar."],
      hu: ["Vulkáni lávaömlések alkotják.", "Nagyon köves terep.", "Nehezen járható."],
      ro: ["Compus din fluxuri de lavă vulcanică.", "Teren foarte pietros.", "Greu de traversat."],
      en: ["Composed of volcanic lava flows.", "Very stony terrain.", "Difficult to traverse."]
    }
  },
  {
    id: "al-hamada-al-hamra-relief-v2",
    type: "relief",
    parent: "LY-NA",
    coords: [11.5, 29.5],
    name: { de: "Al-Hamada al-Hamra", hu: "Al-Hamada al-Hamra", ro: "Al-Hamada al-Hamra", en: "Al-Hamada al-Hamra" },
    description: { de: "Eine Steinwüste (Hamada) in Westlibyen.", hu: "Kősivatag (Hamada) Nyugat-Líbiában.", ro: "Un deșert pietros (Hamada) în vestul Libiei.", en: "A stone desert (Hamada) in western Libya." },
    facts: {
      de: ["Flaches, karges Plateau.", "Kaum Vegetation.", "Bedeutend für Fossiliensuche."],
      hu: ["Lapos, kopár fennsík.", "Alig van növényzet.", "Jelentős a kövületkeresés szempontjából."],
      ro: ["Platou plat și steril.", "Aproape fără vegetație.", "Semnificativ pentru căutarea fosilelor."],
      en: ["Flat, barren plateau.", "Almost no vegetation.", "Significant for fossil hunting."]
    }
  },
  {
    id: "jebel-nafusa-relief-v2",
    type: "mountain",
    parent: "LY-NA",
    coords: [11.0, 32.0],
    name: { de: "Dschabal Nafusa", hu: "Dzsebel Nefusza", ro: "Jebel Nafusa", en: "Jebel Nafusa" },
    description: { de: "Ein zerklüftetes Bergplateau in Tripolitanien.", hu: "Tagolt hegyi fennsík Tripolitániában.", ro: "Un platou muntos fragmentat în Tripolitania.", en: "A rugged mountain plateau in Tripolitania." },
    facts: {
      de: ["Bekannt für traditionelle Berberdörfer.", "Kalksteingebirge.", "Kühleres Klima als im Tiefland."],
      hu: ["Hagyományos berber falvairól ismert.", "Mészkőhegység.", "Hűvösebb klíma, mint az alföldön."],
      ro: ["Cunoscut pentru satele berbere tradiționale.", "Munți de calcar.", "Climat mai răcoros decât în zonele joase."],
      en: ["Known for traditional Berber villages.", "Limestone mountains.", "Cooler climate than in the lowlands."]
    }
  },
  {
    id: "jebel-aswad-relief-v2",
    type: "mountain",
    parent: "LY-JU",
    coords: [16.0, 29.0],
    name: { de: "Dschabal Aswad", hu: "Dzsebel Aszwad", ro: "Jebel Aswad", en: "Jebel Aswad" },
    description: { de: "Das 'Schwarze Gebirge'.", hu: "A 'fekete hegység'.", ro: "„Muntele Negru”.", en: "The 'Black Mountain'." },
    facts: {
      de: ["Vulkanisches Gestein.", "Dunkle Gesteinsfärbung.", "Abgelegene Lage."],
      hu: ["Vulkáni kőzet.", "Sötét kőzetszín.", "Félreeső fekvés."],
      ro: ["Rocă vulcanică.", "Colorație închisă a rocilor.", "Locație izolată."],
      en: ["Volcanic rock.", "Dark rock coloration.", "Remote location."]
    }
  },
  {
    id: "wadi-al-kuf-relief-v2",
    type: "relief",
    parent: "LY-JG",
    coords: [21.5, 32.7],
    name: { de: "Wadi al-Kuf", hu: "Wadi al-Kuf", ro: "Wadi al-Kuf", en: "Wadi al-Kuf" },
    description: { de: "Ein bedeutendes Wadi (Tal) in Cyrenaika.", hu: "Jelentős vád (völgy) Kirenaikában.", ro: "Un wadi (vale) important în Cirenaica.", en: "A significant wadi (valley) in Cyrenaica." },
    facts: {
      de: ["Spektakuläre Schluchten.", "Biodiversitäts-Hotspot.", "Kulturlandschaft."],
      hu: ["Látványos szurdokok.", "Biodiverzitási forró pont.", "Kulturális táj."],
      ro: ["Canioane spectaculoase.", "Punct fierbinte al biodiversității.", "Peisaj cultural."],
      en: ["Spectacular canyons.", "Biodiversity hotspot.", "Cultural landscape."]
    }
  },
  {
    id: "wadi-al-ajal-relief-v2",
    type: "relief",
    parent: "LY-WA",
    coords: [13.0, 26.5],
    name: { de: "Wadi al-Adschal", hu: "Wadi al-Adzsal", ro: "Wadi al-Ajal", en: "Wadi al-Ajal" },
    description: { de: "Ein langes Tal im Fessan.", hu: "Hosszú völgy Fezzánban.", ro: "O vale lungă în Fezzan.", en: "A long valley in Fezzan." },
    facts: {
      de: ["Oasenkette entlang des Tals.", "Historische Siedlungsgebiete.", "Sandige Umgebung."],
      hu: ["Oázislánc a völgy mentén.", "Történelmi településterületek.", "Homokos környezet."],
      ro: ["Lanț de oaze de-a lungul văii.", "Zone istorice de așezare.", "Mediu nisipos."],
      en: ["Chain of oases along the valley.", "Historic settlement areas.", "Sandy surroundings."]
    }
  },
  {
    id: "wadi-zamzam-relief-v2",
    type: "relief",
    parent: "LY-MB",
    coords: [15.0, 31.0],
    name: { de: "Wadi Zamzam", hu: "Wadi Zamzam", ro: "Wadi Zamzam", en: "Wadi Zamzam" },
    description: { de: "Ein großes ausgetrocknetes Tal.", hu: "Nagy kiszáradt völgy.", ro: "O vale mare secată.", en: "A large dry valley." },
    facts: {
      de: ["Fließt meist unterirdisch.", "Wichtig bei seltenen Starkregen.", "Landwirtschaftlich genutzt."],
      hu: ["Többnyire a felszín alatt folyik.", "Fontos ritka felhőszakadásokkor.", "Mezőgazdasági használat."],
      ro: ["Curge mai mult subteran.", "Important la ploi torențiale rare.", "Utilizat agricol."],
      en: ["Flows mostly underground.", "Important during rare heavy rains.", "Used for agriculture."]
    }
  },
  {
    id: "wadi-mathendous-relief-v2",
    type: "relief",
    parent: "LY-WA",
    coords: [12.5, 25.5],
    name: { de: "Wadi Mathendous", hu: "Wadi Mathendous", ro: "Wadi Mathendous", en: "Wadi Mathendous" },
    description: { de: "Berühmt für seine Felsgravuren.", hu: "Híres sziklavéseteiről.", ro: "Faimos pentru gravurile rupestre.", en: "Famous for its rock engravings." },
    facts: {
      de: ["Prähistorische Kunst.", "Wüstengebiet.", "Geologisches Tal."],
      hu: ["Őskori művészet.", "Sivatagi terület.", "Geológiai völgy."],
      ro: ["Artă preistorică.", "Zonă deșertică.", "Vale geologică."],
      en: ["Prehistoric art.", "Desert area.", "Geological valley."]
    }
  },
  {
    id: "wadi-al-farigh-relief-v2",
    type: "relief",
    parent: "LY-JG",
    coords: [20.0, 30.0],
    name: { de: "Wadi al-Farigh", hu: "Wadi al-Farigh", ro: "Wadi al-Farigh", en: "Wadi al-Farigh" },
    description: { de: "Ein trockenes Talbecken.", hu: "Száraz völgymedence.", ro: "O vale uscată.", en: "A dry valley basin." },
    facts: {
      de: ["Sehr flach.", "Wüste.", "Geologisch interessant."],
      hu: ["Nagyon lapos.", "Sivatag.", "Geológiailag érdekes."],
      ro: ["Foarte plată.", "Deșert.", "Interesant din punct de vedere geologic."],
      en: ["Very flat.", "Desert.", "Geologically interesting."]
    }
  },
  {
    id: "sarir-tanezrouft-relief-v2",
    type: "relief",
    parent: "LY-MUR",
    coords: [11.0, 24.0],
    name: { de: "Sarir Tanezrouft", hu: "Sarir Tanezrouft", ro: "Sarir Tanezrouft", en: "Sarir Tanezrouft" },
    description: { de: "Ein ausgedehntes Kieswüstengebiet.", hu: "Kiterjedt kavicssivatag.", ro: "O zonă extinsă de deșert cu pietriș.", en: "An extensive gravel desert area." },
    facts: {
      de: ["Flache Ebene.", "Harte Bedingungen.", "Wenig bewohnt."],
      hu: ["Lapos síkság.", "Zord feltételek.", "Alig lakott."],
      ro: ["Câmpie plată.", "Condiții dure.", "Puțin populat."],
      en: ["Flat plain.", "Harsh conditions.", "Scarcely inhabited."]
    }
  },
  {
    id: "gaberoun-lake-relief-v2",
    type: "relief",
    parent: "LY-WA",
    coords: [13.2, 26.8],
    name: { de: "Gaberoun See", hu: "Gaberoun-tó", ro: "Lacul Gaberoun", en: "Gaberoun Lake" },
    description: { de: "Ein Salzsee in einer Sandwüste.", hu: "Sós tó egy homoksivatagban.", ro: "Un lac sărat într-un deșert de nisip.", en: "A salt lake in a sand desert." },
    facts: {
      de: ["Umgeben von Palmen.", "Sehr salzig.", "Touristenattraktion."],
      hu: ["Pálmafákkal körülvéve.", "Nagyon sós.", "Turista látványosság."],
      ro: ["Înconjurat de palmieri.", "Foarte sărat.", "Atracție turistică."],
      en: ["Surrounded by palm trees.", "Very salty.", "Tourist attraction."]
    }
  },
  {
    id: "mandara-lakes-relief-v2",
    type: "relief",
    parent: "LY-WA",
    coords: [13.3, 26.9],
    name: { de: "Mandara Seen", hu: "Mandara-tavak", ro: "Lacurile Mandara", en: "Mandara Lakes" },
    description: { de: "Mehrere Salzseen in der Ubari-Wüste.", hu: "Több sós tó az Ubari-sivatagban.", ro: "Mai multe lacuri sărate în deșertul Ubari.", en: "Several salt lakes in the Ubari Desert." },
    facts: {
      de: ["Oasenseen.", "Geologisch jung.", "Verdunstung dominiert."],
      hu: ["Oázistavak.", "Geológiailag fiatal.", "A párolgás dominál."],
      ro: ["Lacuri oază.", "Geologic tinere.", "Evaporarea domină."],
      en: ["Oasis lakes.", "Geologically young.", "Evaporation dominates."]
    }
  },
  {
    id: "ubari-sand-sea-relief-v2",
    type: "relief",
    parent: "LY-WA",
    coords: [12.5, 26.5],
    name: { de: "Ubari homoktenger", hu: "Ubari homoktenger", ro: "Marea de nisip Ubari", en: "Ubari Sand Sea" },
    description: { de: "Eine riesige Erg-Wüste (Sandmeer).", hu: "Hatalmas Erg-sivatag.", ro: "Un deșert Erg imens.", en: "A huge Erg desert." },
    facts: {
      de: ["Hohe Sanddünen.", "Ständig in Bewegung.", "Wüstenlandschaft."],
      hu: ["Magas homokdűnék.", "Folyamatosan mozog.", "Sivatagi táj."],
      ro: ["Dune înalte de nisip.", "În mișcare constantă.", "Peisaj deșertic."],
      en: ["High sand dunes.", "Constantly moving.", "Desert landscape."]
    }
  },
  {
    id: "kufra-basin-relief-v2",
    type: "relief",
    parent: "LY-KJ",
    coords: [23.5, 24.5],
    name: { de: "Al-Kufra-Becken", hu: "Al-Kufra-medence", ro: "Bazinul Al-Kufra", en: "Al-Kufra Basin" },
    description: { de: "Großes Becken im Südosten.", hu: "Nagy medence délkeleten.", ro: "Bazin mare în sud-est.", en: "Large basin in the southeast." },
    facts: {
      de: ["Große Grundwasservorkommen.", "Wichtig für Bewässerung.", "Wüstengebiet."],
      hu: ["Nagy felszín alatti vízkészletek.", "Fontos öntözéshez.", "Sivatagi terület."],
      ro: ["Rezerve mari de apă subterană.", "Important pentru irigații.", "Zonă deșertică."],
      en: ["Large groundwater reserves.", "Important for irrigation.", "Desert area."]
    }
  },
  {
    id: "gar-al-marah-relief-v2",
    type: "mountain",
    parent: "LY-WA",
    coords: [13.0, 27.5],
    name: { de: "Gar al-Marah", hu: "Gar al-Marah", ro: "Gar al-Marah", en: "Gar al-Marah" },
    description: { de: "Eine markante Erhebung.", hu: "Jellegzetes magaslat.", ro: "O înălțime distinctivă.", en: "A distinctive elevation." },
    facts: {
      de: ["Steiniges Gipfelplateau.", "Wüstenklima.", "Ausblick über die Wüste."],
      hu: ["Köves csúcsfennsík.", "Sivatagi klíma.", "Kilátás a sivatagra."],
      ro: ["Platou de vârf pietros.", "Climat deșertic.", "Priveliște asupra deșertului."],
      en: ["Stony summit plateau.", "Desert climate.", "View over the desert."]
    }
  },
  {
    id: "sirtica-desert-relief-v2",
    type: "relief",
    parent: "LY-SR",
    coords: [18.5, 29.5],
    name: { de: "Szirtika-sivatag", hu: "Szirtika-sivatag", ro: "Deșertul Sirtica", en: "Sirtica Desert" },
    description: { de: "Ein Wüstengebiet südlich des Golfs von Sidra.", hu: "Sivatagi terület a Szirt-öböltől délre.", ro: "Zonă deșertică la sud de Golful Sidra.", en: "A desert area south of the Gulf of Sidra." },
    facts: {
      de: ["Sandig-steinige Landschaft.", "Sehr spärliche Vegetation.", "Klimatisch extrem."],
      hu: ["Homokos-köves táj.", "Nagyon ritkás növényzet.", "Éghajlatilag szélsőséges."],
      ro: ["Peisaj nisipos-pietros.", "Vegetație foarte rară.", "Climat extrem."],
      en: ["Sandy-stony landscape.", "Very sparse vegetation.", "Climatically extreme."]
    }
  },
  {
    id: "gargaf-desert-relief-v2",
    type: "relief",
    parent: "LY-WA",
    coords: [13.0, 27.0],
    name: { de: "Gargaf-sivatag", hu: "Gargaf-sivatag", ro: "Deșertul Gargaf", en: "Gargaf Desert" },
    description: { de: "Die Wüstengebiete rund um das Gargaf-Gebirge.", hu: "Sivatagi területek a Gargaf-hegység körül.", ro: "Zonele deșertice din jurul munților Gargaf.", en: "The desert areas around the Gargaf Mountains." },
    facts: {
      de: ["Felsig.", "Wenig Siedlungen.", "Extrem trocken."],
      hu: ["Sziklás.", "Alig vannak települések.", "Extrém száraz."],
      ro: ["Stâncos.", "Puține așezări.", "Extrem de uscat."],
      en: ["Rocky.", "Few settlements.", "Extremely dry."]
    }
  },
  {
    id: "cyrenaica-coast-relief-v2",
    type: "relief",
    parent: "LY-JG",
    coords: [22.0, 32.5],
    name: { de: "Kirenaika-tengerpart", hu: "Kirenaika-tengerpart", ro: "Coasta Cirenaicii", en: "Cyrenaica Coast" },
    description: { de: "Die Küstenregion der Cyrenaika.", hu: "Kirenaika tengerparti régiója.", ro: "Regiunea de coastă a Cirenaicii.", en: "The coastal region of Cyrenaica." },
    facts: {
      de: ["Felsige Küstenabschnitte.", "Mittelmeerklima.", "Steilküsten."],
      hu: ["Sziklás tengerparti szakaszok.", "Mediterrán éghajlat.", "Meredek partok."],
      ro: ["Secțiuni stâncoase de coastă.", "Climat mediteranean.", "Coaste abrupte."],
      en: ["Rocky coastal sections.", "Mediterranean climate.", "Steep coasts."]
      }
  }
];
