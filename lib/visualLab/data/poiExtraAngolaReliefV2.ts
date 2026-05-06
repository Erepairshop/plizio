import type { POI } from "./poi";

export const poiExtraAngolaReliefV2: POI[] = [
  {
    id: "planalto-de-bie-relief-v2",
    type: "relief",
    parent: "AO-BIE",
    coords: [17.5, -12.5],
    name: { de: "Bié-Hochland", hu: "Bié-felföld", ro: "Podi?ul Bié", en: "Bié Plateau" },
    description: { de: "Großes Hochplateau im Zentrum Angolas.", hu: "Nagy fennsík Angola központjában.", ro: "Mare podi? în centrul Angolei.", en: "Large high plateau in central Angola." },
    facts: {
      de: ["Durchschnittshöhe 1500 Meter.", "Wasserscheide für viele Flüsse."],
      hu: ["Átlagos magasság 1500 méter.", "Vízválasztó sok folyó számára."],
      ro: ["Altitudine medie 1500 metri.", "Bazin hidrografic pentru multe râuri."],
      en: ["Average elevation 1500 meters.", "Watershed for many rivers."]
    }
  },
  {
    id: "serra-da-chela-relief-v2",
    type: "mountain",
    parent: "AO-NAM",
    coords: [13.5, -15.2],
    name: { de: "Serra da Chela", hu: "Serra da Chela", ro: "Serra da Chela", en: "Serra da Chela" },
    description: { de: "Gebirgskette im Südwesten Angolas.", hu: "Hegyvonulat Délnyugat-Angolában.", ro: "Lan? muntos în sud-vestul Angolei.", en: "Mountain range in southwest Angola." },
    facts: {
      de: ["Steiler Abfall zum Küstentiefland.", "Höchste Erhebung der Kette."],
      hu: ["Meredek lejto a tengerparti síkságra.", "A vonulat legmagasabb pontja."],
      ro: ["Panta abrupta spre câmpia de coasta.", "Cel mai înalt punct al lan?ului."],
      en: ["Steep drop to coastal lowland.", "Highest point of the range."]
    }
  },
  {
    id: "monte-moco-relief-v2",
    type: "mountain",
    parent: "AO-HUA",
    coords: [15.19, -12.47],
    name: { de: "Moco", hu: "Moco", ro: "Moco", en: "Moco" },
    description: { de: "Höchster Berg Angolas.", hu: "Angola legmagasabb hegye.", ro: "Cel mai înalt munte din Angola.", en: "The highest mountain in Angola." },
    facts: {
      de: ["Liegt in der Provinz Huambo.", "Höhe 2620 Meter."],
      hu: ["Huambo tartományban található.", "Magassága 2620 méter."],
      ro: ["Situat în provincia Huambo.", "Înal?ime 2620 metri."],
      en: ["Located in Huambo province.", "Elevation 2620 meters."]
    }
  },
  {
    id: "serra-da-leba-relief-v2",
    type: "relief",
    parent: "AO-HUI",
    coords: [13.2, -15.0],
    name: { de: "Serra da Leba", hu: "Serra da Leba", ro: "Serra da Leba", en: "Serra da Leba" },
    description: { de: "Steilstufe zwischen Huíla-Plateau und Küste.", hu: "Merdek lépcso a Huíla-fennsík és a part között.", ro: "Panta abrupta dintre Podi?ul Huíla ?i coasta.", en: "Steep escarpment between Huíla plateau and coast." },
    facts: {
      de: ["Spektakuläre Serpentinenstraße.", "Wichtiger Übergang."],
      hu: ["Látványos szerpentinút.", "Fontos átkelo."],
      ro: ["?osea cu serpentine spectaculoase.", "Trecatoare importanta."],
      en: ["Spectacular switchback road.", "Important crossing."]
    }
  },
  {
    id: "bacia-do-congo-relief-v2",
    type: "forest",
    parent: "AO-CAB",
    coords: [12.7, -4.5],
    name: { de: "Kongobecken-Rand", hu: "Kongó-medence széle", ro: "Marginea bazinului Congo", en: "Congo Basin Edge" },
    description: { de: "Region am Rande des Kongobeckens.", hu: "Régió a Kongó-medence peremén.", ro: "Regiune la marginea bazinului Congo.", en: "Region at the edge of the Congo Basin." },
    facts: {
      de: ["Sehr feuchtes Klima.", "Dichte tropische Wälder."],
      hu: ["Nagyon párás éghajlat.", "Suru trópusi erdok."],
      ro: ["Clima foarte umeda.", "Paduri tropicale dense."],
      en: ["Very humid climate.", "Dense tropical forests."]
    }
  },
  {
    id: "planalto-de-huila-relief-v2",
    type: "relief",
    parent: "AO-HUI",
    coords: [14.0, -15.0],
    name: { de: "Huíla-Hochland", hu: "Huíla-felföld", ro: "Podi?ul Huíla", en: "Huíla Plateau" },
    description: { de: "Hochlandebene im Süden.", hu: "Fennsík a délen.", ro: "Podi? în sud.", en: "Plateau in the south." },
    facts: {
      de: ["Günstiges Klima für Landwirtschaft.", "Weites, offenes Land."],
      hu: ["Kedvezo éghajlat a mezogazdasághoz.", "Széles, nyílt vidék."],
      ro: ["Clima favorabila pentru agricultura.", "?inut vast ?i deschis."],
      en: ["Favorable climate for agriculture.", "Vast, open land."]
    }
  },
  {
    id: "deserto-do-namibe-relief-v2",
    type: "relief",
    parent: "AO-NAM",
    coords: [12.0, -16.0],
    name: { de: "Namib-Wüste", hu: "Namib-sivatag", ro: "De?ertul Namib", en: "Namib Desert" },
    description: { de: "Küstenzone der Namib-Wüste.", hu: "A Namib-sivatag part menti övezete.", ro: "Zona de coasta a de?ertului Namib.", en: "Coastal zone of the Namib Desert." },
    facts: {
      de: ["Sehr trockenes Gelände.", "Sanddünen an der Küste."],
      hu: ["Nagyon száraz terep.", "Homokdunék a tengerparton."],
      ro: ["Teren foarte uscat.", "Dune de nisip pe coasta."],
      en: ["Very dry terrain.", "Sand dunes on the coast."]
    }
  },
  {
    id: "vale-do-kwanza-relief-v2",
    type: "relief",
    parent: "AO-BGO",
    coords: [13.2, -9.5],
    name: { de: "Kwanza-Tal", hu: "Kwanza-völgy", ro: "Valea Kwanza", en: "Kwanza Valley" },
    description: { de: "Das zentrale Flusstal.", hu: "A központi folyóvölgy.", ro: "Valea centrala a râului.", en: "The central river valley." },
    facts: {
      de: ["Wichtige Erosionsform.", "Große Tallage."],
      hu: ["Fontos eróziós forma.", "Nagy völgyi fekvés."],
      ro: ["Forma importanta de eroziune.", "Pozi?ie în vale vasta."],
      en: ["Important erosion form.", "Large valley position."]
    }
  },
  {
    id: "montes-de-lunda-relief-v2",
    type: "mountain",
    parent: "AO-LNO",
    coords: [19.0, -8.0],
    name: { de: "Lunda-Berge", hu: "Lunda-hegyek", ro: "Mun?ii Lunda", en: "Lunda Mountains" },
    description: { de: "Hügellandschaft im Nordosten.", hu: "Dombvidék északkeleten.", ro: "?inut deluros în nord-est.", en: "Hilly landscape in the northeast." },
    facts: {
      de: ["Reich an Mineralien.", "Sanfte Erhebungen."],
      hu: ["Ásványkincsekben gazdag.", "Szelíd emelkedok."],
      ro: ["Bogat în minerale.", "Eleva?ii line."],
      en: ["Rich in minerals.", "Gentle elevations."]
    }
  },
  {
    id: "escarpamento-ocidental-relief-v2",
    type: "relief",
    parent: "AO-BEN",
    coords: [13.0, -12.0],
    name: { de: "Westlicher Abfall", hu: "Nyugati lejto", ro: "Panta vestica", en: "Western Escarpment" },
    description: { de: "Abfallende Stufe zum Atlantik.", hu: "Atlanti-óceán felé lejto lépcso.", ro: "Trepa coborând spre Atlantic.", en: "Escarpment descending to the Atlantic." },
    facts: {
      de: ["Geologischer Übergang.", "Große Höhenunterschiede."],
      hu: ["Geológiai átmenet.", "Nagy magasságkülönbségek."],
      ro: ["Tranzi?ie geologica.", "Diferen?e mari de altitudine."],
      en: ["Geological transition.", "Large altitude differences."]
    }
  },
  {
    id: "monte-namba-relief-v2",
    type: "mountain",
    parent: "AO-HUA",
    coords: [15.5, -12.0],
    name: { de: "Namba", hu: "Namba", ro: "Namba", en: "Namba" },
    description: { de: "Gipfel im zentralen Hochland.", hu: "Csúcs a központi felföldön.", ro: "Vârf în podi?ul central.", en: "Peak in the central highlands." },
    facts: {
      de: ["Teil des Gebirgszugs.", "Stark verwittert."],
      hu: ["A hegyvonulat része.", "Erosen mállott."],
      ro: ["Parte a lan?ului muntos.", "Puternic erodat."],
      en: ["Part of the range.", "Heavily weathered."]
    }
  },
  {
    id: "vale-do-cunene-relief-v2",
    type: "relief",
    parent: "AO-CNN",
    coords: [14.0, -16.0],
    name: { de: "Cunene-Tal", hu: "Cunene-völgy", ro: "Valea Cunene", en: "Cunene Valley" },
    description: { de: "Talsenke an der Südgrenze.", hu: "Völgyi mélyedés a déli határon.", ro: "Depresiune de vale la grani?a de sud.", en: "Valley depression on the southern border." },
    facts: {
      de: ["Flusslandschaft.", "Saisonale Überschwemmungen."],
      hu: ["Folyó táj.", "Szezonális áradások."],
      ro: ["Peisaj fluvial.", "Inunda?ii sezoniere."],
      en: ["River landscape.", "Seasonal flooding."]
    }
  },
  {
    id: "monte-benguela-relief-v2",
    type: "mountain",
    parent: "AO-BEN",
    coords: [13.4, -12.5],
    name: { de: "Benguela-Höhen", hu: "Benguela-magaslatok", ro: "Înal?imile Benguela", en: "Benguela Highlands" },
    description: { de: "Bergiges Hinterland von Benguela.", hu: "Benguela hegyes hátországa.", ro: "Interior muntos al Benguelei.", en: "Mountainous hinterland of Benguela." },
    facts: {
      de: ["Trockenheit prägt das Relief.", "Starke Erosion."],
      hu: ["Szárazság jellemzi a domborzatot.", "Eros erózió."],
      ro: ["Ariditatea define?te relieful.", "Eroziune puternica."],
      en: ["Aridity defines the relief.", "Strong erosion."]
    }
  },
  {
    id: "planalto-de-malanje-relief-v2",
    type: "relief",
    parent: "AO-MAL",
    coords: [16.0, -9.5],
    name: { de: "Malanje-Hochland", hu: "Malanje-felföld", ro: "Podi?ul Malanje", en: "Malanje Plateau" },
    description: { de: "Ebene Hochlandschaft.", hu: "Síksági felföld.", ro: "Podi? plan.", en: "Flat highland landscape." },
    facts: {
      de: ["Günstige landwirtschaftliche Böden.", "Offene Flächen."],
      hu: ["Kedvezo mezogazdasági talajok.", "Nyílt területek."],
      ro: ["Soluri agricole favorabile.", "Suprafe?e deschise."],
      en: ["Favorable agricultural soils.", "Open areas."]
    }
  },
  {
    id: "escarpa-de-lunda-relief-v2",
    type: "relief",
    parent: "AO-LSU",
    coords: [19.5, -9.0],
    name: { de: "Lunda-Steilstufe", hu: "Lunda-lépcso", ro: "Escarpa Lunda", en: "Lunda Escarpment" },
    description: { de: "Geländestufe im Nordosten.", hu: "Tereplépcso északkeleten.", ro: "Trepa de teren în nord-est.", en: "Escarpment in the northeast." },
    facts: {
      de: ["Übergang zur Kongo-Senke.", "Steiles Profil."],
      hu: ["Átmenet a Kongó-medencéhez.", "Meredek profil."],
      ro: ["Tranzi?ie spre bazinul Congo.", "Profil abrupt."],
      en: ["Transition to Congo basin.", "Steep profile."]
    }
  },
  {
    id: "colinas-de-uige-relief-v2",
    type: "relief",
    parent: "AO-UIG",
    coords: [15.0, -7.0],
    name: { de: "Uíge-Hügel", hu: "Uíge-dombok", ro: "Colinele Uíge", en: "Uíge Hills" },
    description: { de: "Hügellandschaft im Norden.", hu: "Dombvidék északon.", ro: "?inut colinar în nord.", en: "Hilly landscape in the north." },
    facts: {
      de: ["Sehr grün.", "Hohe Niederschläge."],
      hu: ["Nagyon zöld.", "Magas csapadék."],
      ro: ["Foarte verde.", "Precipita?ii mari."],
      en: ["Very green.", "High rainfall."]
    }
  },
  {
    id: "monte-kaparanga-relief-v2",
    type: "mountain",
    parent: "AO-HUA",
    coords: [15.8, -12.2],
    name: { de: "Kaparanga", hu: "Kaparanga", ro: "Kaparanga", en: "Kaparanga" },
    description: { de: "Erhebung in Huambo.", hu: "Emelkedo Huambóban.", ro: "Eleva?ie în Huambo.", en: "Elevation in Huambo." },
    facts: {
      de: ["Geologisch alt.", "Granitmassiv."],
      hu: ["Geológiailag régi.", "Gránitmasszívum."],
      ro: ["Geologic vechi.", "Masiv granitic."],
      en: ["Geologically old.", "Granite massif."]
    }
  },
  {
    id: "planicie-do-namibe-relief-v2",
    type: "relief",
    parent: "AO-NAM",
    coords: [12.5, -15.5],
    name: { de: "Namibe-Ebene", hu: "Namibe-síkság", ro: "Câmpia Namibe", en: "Namibe Plain" },
    description: { de: "Küstenebene.", hu: "Parti síkság.", ro: "Câmpie de coasta.", en: "Coastal plain." },
    facts: {
      de: ["Trocken.", "Wenig Vegetation."],
      hu: ["Száraz.", "Kevés növényzet."],
      ro: ["Uscat.", "Pu?ina vegeta?ie."],
      en: ["Dry.", "Little vegetation."]
    }
  },
  {
    id: "monte-cumbira-relief-v2",
    type: "mountain",
    parent: "AO-CUS",
    coords: [14.5, -10.5],
    name: { de: "Cumbira", hu: "Cumbira", ro: "Cumbira", en: "Cumbira" },
    description: { de: "Berg in Cuanza Sul.", hu: "Hegy Cuanza Sulban.", ro: "Munte în Cuanza Sul.", en: "Mountain in Cuanza Sul." },
    facts: {
      de: ["Waldbedeckt.", "Steile Flanken."],
      hu: ["Erdo borítja.", "Meredek oldalak."],
      ro: ["Acoperit de padure.", "Flancuri abrupte."],
      en: ["Forest-covered.", "Steep flanks."]
    }
  },
  {
    id: "vale-do-zambezi-relief-v2",
    type: "relief",
    parent: "AO-MOX",
    coords: [22.0, -12.0],
    name: { de: "Sambesi-Tal", hu: "Zambézi-völgy", ro: "Valea Zambezi", en: "Zambezi Valley" },
    description: { de: "Tal des Sambesi-Flusses.", hu: "A Zambézi folyó völgye.", ro: "Valea râului Zambezi.", en: "Valley of the Zambezi river." },
    facts: {
      de: ["Grenznah.", "Wichtige Lebenszone."],
      hu: ["Határközeli.", "Fontos élettér."],
      ro: ["Aproape de frontiera.", "Zona vitala."],
      en: ["Near the border.", "Important life zone."]
    }
  },
  {
    id: "monte-tundavala-relief-v2",
    type: "mountain",
    parent: "AO-HUI",
    coords: [13.3, -15.1],
    name: { de: "Tundavala", hu: "Tundavala", ro: "Tundavala", en: "Tundavala" },
    description: { de: "Steilabbruch bei Lubango.", hu: "Merdek szakadék Lubango közelében.", ro: "Prapastie abrupta lânga Lubango.", en: "Steep escarpment near Lubango." },
    facts: {
      de: ["Spektakulärer Abgrund.", "Sehr hoch."],
      hu: ["Látványos szakadék.", "Nagyon magas."],
      ro: ["Abis spectaculos.", "Foarte înalt."],
      en: ["Spectacular abyss.", "Very high."]
    }
  },
  {
    id: "planalto-de-humpata-relief-v2",
    type: "relief",
    parent: "AO-HUI",
    coords: [13.5, -15.0],
    name: { de: "Humpata-Hochland", hu: "Humpata-felföld", ro: "Podi?ul Humpata", en: "Humpata Plateau" },
    description: { de: "Kühles Hochland.", hu: "Huvös felföld.", ro: "Podi? racoros.", en: "Cool highland." },
    facts: {
      de: ["Günstiges Klima.", "Touristisch bekannt."],
      hu: ["Kedvezo éghajlat.", "Turisztikailag ismert."],
      ro: ["Clima favorabila.", "Cunoscut turistic."],
      en: ["Favorable climate.", "Known for tourism."]
    }
  },
  {
    id: "monte-mochico-relief-v2",
    type: "mountain",
    parent: "AO-MOX",
    coords: [20.0, -12.5],
    name: { de: "Mochico", hu: "Mochico", ro: "Mochico", en: "Mochico" },
    description: { de: "Erhebung im Osten.", hu: "Emelkedo keleten.", ro: "Eleva?ie în est.", en: "Elevation in the east." },
    facts: {
      de: ["Flache Gipfel.", "Savannen-Landschaft."],
      hu: ["Lapos csúcsok.", "Szavannás táj."],
      ro: ["Vârfuri plate.", "Peisaj de savana."],
      en: ["Flat peaks.", "Savannah landscape."]
    }
  },
  {
    id: "planalto-de-lunda-relief-v2",
    type: "relief",
    parent: "AO-LNO",
    coords: [19.5, -8.5],
    name: { de: "Lunda-Hochland", hu: "Lunda-felföld", ro: "Podi?ul Lunda", en: "Lunda Plateau" },
    description: { de: "Weite Hochebene.", hu: "Széles fennsík.", ro: "Podi? vast.", en: "Vast plateau." },
    facts: {
      de: ["Diamantenvorkommen.", "Wichtiges Relief."],
      hu: ["Gyémántlelohelyek.", "Fontos domborzati elem."],
      ro: ["Zacaminte de diamante.", "Element de relief important."],
      en: ["Diamond deposits.", "Important relief element."]
    }
  },
  {
    id: "vale-do-cuanza-relief-v2",
    type: "relief",
    parent: "AO-BIE",
    coords: [17.0, -11.5],
    name: { de: "Oberes Cuanza-Tal", hu: "Felso-Cuanza-völgy", ro: "Valea superioara a Cuanzei", en: "Upper Cuanza Valley" },
    description: { de: "Ursprung des Cuanza.", hu: "A Cuanza eredete.", ro: "Originea Cuanzei.", en: "Origin of the Cuanza." },
    facts: {
      de: ["Hügeliges Gelände.", "Viele Quellen."],
      hu: ["Dombos terep.", "Sok forrás."],
      ro: ["Teren deluros.", "Multe izvoare."],
      en: ["Hilly terrain.", "Many springs."]
    }
  }
];
