import type { POI } from "./poi";

export const poiExtraEritreaReliefV2: POI[] = [
  {
    id: "danakil-depression-relief-v2",
    type: "relief",
    parent: "ER-DK",
    coords: [40.66, 14.23],
    name: { de: "Danakil-Senke", hu: "Danakil-mélyföld", ro: "Depresiunea Danakil", en: "Danakil Depression" },
    description: { de: "Eine geologisch aktive vulkanische Ebene.", hu: "Geológiailag aktív vulkanikus síkság.", ro: "O câmpie vulcanică activă geologic.", en: "A geologically active volcanic plain." },
    facts: {
      de: ["Unter dem Meeresspiegel", "Extrem heiße Temperaturen"],
      hu: ["Tengerszint alatt", "Extrém forró hőmérséklet"],
      ro: ["Sub nivelul mării", "Temperaturi extrem de ridicate"],
      en: ["Below sea level", "Extremely hot temperatures"]
    }
  },
  {
    id: "soira-mountain-relief-v2",
    type: "mountain",
    parent: "ER-MA",
    coords: [39.46, 14.73],
    name: { de: "Soira", hu: "Soira", ro: "Soira", en: "Soira" },
    description: { de: "Der höchste Berg Eritreas.", hu: "Eritrea legmagasabb hegye.", ro: "Cel mai înalt munte din Eritreea.", en: "The highest mountain in Eritrea." },
    facts: {
      de: ["3018 Meter Höhe", "Teil des äthiopischen Hochlandes"],
      hu: ["3018 méter magas", "Az etióp-felföld része"],
      ro: ["Înălțime de 3018 metri", "Parte a platoului etiopian"],
      en: ["3018 meters high", "Part of the Ethiopian Highlands"]
    }
  },
  {
    id: "barkai-plain-relief-v2",
    type: "relief",
    parent: "ER-GB",
    coords: [37.5, 15.5],
    name: { de: "Barka-Ebene", hu: "Barka-síkság", ro: "Câmpia Barka", en: "Barka Plain" },
    description: { de: "Eine weite, trockene Tieflandebene.", hu: "Széles, száraz alföldi terület.", ro: "O câmpie vastă și uscată.", en: "A vast, dry lowland plain." },
    facts: {
      de: ["Geringe Niederschläge", "Landwirtschaftliche Nutzung in Flusstälern"],
      hu: ["Kevés csapadék", "Folyóvölgyekben mezőgazdaság"],
      ro: ["Precipitații scăzute", "Agricultură în văile râurilor"],
      en: ["Low rainfall", "Agriculture in river valleys"]
    }
  },
  {
    id: "sahel-lowlands-relief-v2",
    type: "relief",
    parent: "ER-AN",
    coords: [38.2, 16.5],
    name: { de: "Sahel-Tiefland", hu: "Sahel-alföld", ro: "Câmpia Sahel", en: "Sahel Lowlands" },
    description: { de: "Das trockene Tiefland im Norden.", hu: "Száraz alföld északon.", ro: "Câmpie aridă în nord.", en: "The arid lowlands in the north." },
    facts: {
      de: ["Halbwüstenklima", "Spärliche Vegetation"],
      hu: ["Félsivatagi éghajlat", "Ritka növényzet"],
      ro: ["Climă semiaridă", "Vegetație rară"],
      en: ["Semi-arid climate", "Sparse vegetation"]
    }
  },
  {
    id: "zula-bay-lowland-relief-v2",
    type: "relief",
    parent: "ER-DK",
    coords: [39.7, 15.1],
    name: { de: "Zula-Bucht-Tiefland", hu: "Zula-öböl alföld", ro: "Câmpia Golfului Zula", en: "Zula Bay Lowland" },
    description: { de: "Küstennahes Tiefland bei der Zula-Bucht.", hu: "Partmenti alföld a Zula-öbölnél.", ro: "Câmpie de coastă lângă Golful Zula.", en: "Coastal lowland near Zula Bay." },
    facts: {
      de: ["Hitzeregion", "Salzhaltige Böden"],
      hu: ["Forró régió", "Sós talajok"],
      ro: ["Regiune fierbinte", "Soluri saline"],
      en: ["Hot region", "Saline soils"]
    }
  },
  {
    id: "keren-highland-relief-v2",
    type: "mountain",
    parent: "ER-AN",
    coords: [38.45, 15.78],
    name: { de: "Keren-Hochland", hu: "Keren-felföld", ro: "Platoul Keren", en: "Keren Highlands" },
    description: { de: "Bergiges Hochland in der Region Anseba.", hu: "Hegyvidékes terület az Anseba régióban.", ro: "Platou muntos în regiunea Anseba.", en: "Mountainous highlands in the Anseba region." },
    facts: {
      de: ["Angenehmeres Klima als das Tiefland", "Wichtige Handelsroute"],
      hu: ["Kellemesebb klíma, mint az alföldön", "Fontos kereskedelmi útvonal"],
      ro: ["Climă mai plăcută decât în câmpie", "Rută comercială importantă"],
      en: ["Pleasanter climate than lowlands", "Important trade route"]
    }
  },
  {
    id: "eritra-rift-valley-relief-v2",
    type: "relief",
    parent: "ER-DK",
    coords: [40.0, 14.5],
    name: { de: "Eritreisches Rift-Tal", hu: "Eritreai-hasadékvölgy", ro: "Valea Riftului Eritrean", en: "Eritrean Rift Valley" },
    description: { de: "Teil des großen Ostafrikanischen Grabenbruchs.", hu: "A Kelet-afrikai-árok része.", ro: "Parte a Marelui Rift Est-African.", en: "Part of the Great East African Rift." },
    facts: {
      de: ["Tektonisch sehr aktiv", "Vulkanische Aktivität"],
      hu: ["Tektonikailag nagyon aktív", "Vulkáni tevékenység"],
      ro: ["Activitate tectonică intensă", "Activitate vulcanică"],
      en: ["Tectonically very active", "Volcanic activity"]
    }
  },
  {
    id: "gash-valley-relief-v2",
    type: "relief",
    parent: "ER-GB",
    coords: [37.0, 15.2],
    name: { de: "Gash-Tal", hu: "Gash-völgy", ro: "Valea Gash", en: "Gash Valley" },
    description: { de: "Ein fruchtbares Flusstal im Westen.", hu: "Termékeny folyóvölgy nyugaton.", ro: "O vale fertilă a râului în vest.", en: "A fertile river valley in the west." },
    facts: {
      de: ["Saisonaler Flusslauf", "Wichtig für die Landwirtschaft"],
      hu: ["Szezonális folyószakasz", "Fontos a mezőgazdaságnak"],
      ro: ["Curs de râu sezonier", "Important pentru agricultură"],
      en: ["Seasonal river course", "Important for agriculture"]
    }
  },
  {
    id: "esen-plateau-relief-v2",
    type: "relief",
    parent: "ER-MA",
    coords: [39.1, 15.3],
    name: { de: "Esen-Plateau", hu: "Esen-fennsík", ro: "Platoul Esen", en: "Esen Plateau" },
    description: { de: "Eine Hochfläche nahe Asmara.", hu: "Magasföld Aszmara közelében.", ro: "Un platou înalt lângă Asmara.", en: "A highland plateau near Asmara." },
    facts: {
      de: ["Moderates Klima", "Landwirtschaftliche Nutzung"],
      hu: ["Mérsékelt klíma", "Mezőgazdasági művelés"],
      ro: ["Climă moderată", "Utilizare agricolă"],
      en: ["Moderate climate", "Agricultural use"]
    }
  },
  {
    id: "ailet-plain-relief-v2",
    type: "relief",
    parent: "ER-SN",
    coords: [39.2, 15.6],
    name: { de: "Ailet-Ebene", hu: "Ailet-síkság", ro: "Câmpia Ailet", en: "Ailet Plain" },
    description: { de: "Tieflandregion zwischen Hochland und Küste.", hu: "Alföldi régió a felföld és a part között.", ro: "Regiune de câmpie între platou și coastă.", en: "Lowland region between highlands and coast." },
    facts: {
      de: ["Wüstenartige Bedingungen", "Sehr heiß"],
      hu: ["Sivatagszerű körülmények", "Nagyon forró"],
      ro: ["Condiții deșertice", "Foarte cald"],
      en: ["Desert-like conditions", "Very hot"]
    }
  },
  {
    id: "habab-mountain-relief-v2",
    type: "mountain",
    parent: "ER-AN",
    coords: [38.6, 16.1],
    name: { de: "Habab-Gebirge", hu: "Habab-hegység", ro: "Munții Habab", en: "Habab Mountains" },
    description: { de: "Eine bergige Region im Norden.", hu: "Hegyvidékes régió északon.", ro: "O regiune muntoasă în nord.", en: "A mountainous region in the north." },
    facts: {
      de: ["Zerklüftetes Gelände", "Nomadische Weidegebiete"],
      hu: ["Tagolt terep", "Nomád legelőterületek"],
      ro: ["Teren accidentat", "Zone de pășunat nomad"],
      en: ["Rugged terrain", "Nomadic grazing areas"]
    }
  },
  {
    id: "massawa-coastal-plain-relief-v2",
    type: "relief",
    parent: "ER-SN",
    coords: [39.4, 15.6],
    name: { de: "Massaua-Küstenebene", hu: "Massaua-parti síkság", ro: "Câmpia de coastă Massawa", en: "Massawa Coastal Plain" },
    description: { de: "Schmale Ebene entlang des Roten Meeres.", hu: "Keskeny síkság a Vörös-tenger mentén.", ro: "Câmpie îngustă de-a lungul Mării Roșii.", en: "Narrow plain along the Red Sea." },
    facts: {
      de: ["Tropische Luftfeuchtigkeit", "Sehr flaches Gelände"],
      hu: ["Trópusi páratartalom", "Nagyon sík terep"],
      ro: ["Umiditate tropicală", "Teren foarte plat"],
      en: ["Tropical humidity", "Very flat terrain"]
    }
  },
  {
    id: "baraka-delta-relief-v2",
    type: "relief",
    parent: "ER-GB",
    coords: [37.2, 17.5],
    name: { de: "Baraka-Delta", hu: "Baraka-delta", ro: "Delta Baraka", en: "Baraka Delta" },
    description: { de: "Ein saisonales Flussdelta im Norden.", hu: "Időszakos folyódelta északon.", ro: "O deltă sezonieră a râului în nord.", en: "A seasonal river delta in the north." },
    facts: {
      de: ["Fruchtbarer Boden bei Hochwasser", "Wichtig für Viehzucht"],
      hu: ["Termékeny talaj áradáskor", "Fontos állattenyésztésnek"],
      ro: ["Sol fertil în timpul inundațiilor", "Important pentru creșterea animalelor"],
      en: ["Fertile soil during floods", "Important for livestock"]
    }
  },
  {
    id: "semien-bahri-mountains-relief-v2",
    type: "mountain",
    parent: "ER-SN",
    coords: [39.1, 15.2],
    name: { de: "Semien-Bahri-Gebirge", hu: "Semien-Bahri-hegység", ro: "Munții Semien-Bahri", en: "Semien-Bahri Mountains" },
    description: { de: "Steile Bergregion östlich von Asmara.", hu: "Meredek hegyvidék Aszmarától keletre.", ro: "Regiune muntoasă abruptă la est de Asmara.", en: "Steep mountain region east of Asmara." },
    facts: {
      de: ["Dichter Nebelwald", "Hohe Niederschlagsmengen"],
      hu: ["Sűrű köderdő", "Nagy csapadékmennyiség"],
      ro: ["Pădure de nori densă", "Cantități mari de precipitații"],
      en: ["Dense cloud forest", "High rainfall"]
    }
  },
  {
    id: "barentu-plateau-relief-v2",
    type: "relief",
    parent: "ER-GB",
    coords: [37.6, 15.1],
    name: { de: "Barentu-Plateau", hu: "Barentu-fennsík", ro: "Platoul Barentu", en: "Barentu Plateau" },
    description: { de: "Eine Hochebene im Westen.", hu: "Fennsík nyugaton.", ro: "Un platou în vest.", en: "A plateau in the west." },
    facts: {
      de: ["Savannenähnliche Vegetation", "Sanfte Hügellandschaft"],
      hu: ["Szavannaszerű növényzet", "Szelíd dombvidék"],
      ro: ["Vegetație de tip savană", "Peisaj deluros blând"],
      en: ["Savanna-like vegetation", "Gentle hilly landscape"]
    }
  },
  {
    id: "denkalia-volcanic-field-relief-v2",
    type: "relief",
    parent: "ER-DK",
    coords: [40.8, 14.1],
    name: { de: "Denkalia-Vulkanfeld", hu: "Denkalia-vulkáni mező", ro: "Câmpia vulcanică Denkalia", en: "Denkalia Volcanic Field" },
    description: { de: "Eine Region mit zahlreichen Vulkanfeldern.", hu: "Számos vulkáni mezővel rendelkező régió.", ro: "O regiune cu numeroase câmpuri vulcanice.", en: "A region with numerous volcanic fields." },
    facts: {
      de: ["Basaltgestein", "Geothermisch aktiv"],
      hu: ["Bazaltkőzet", "Geotermikusan aktív"],
      ro: ["Rocă bazaltică", "Geotermic activ"],
      en: ["Basalt rock", "Geothermally active"]
    }
  },
  {
    id: "ansaba-valley-relief-v2",
    type: "relief",
    parent: "ER-AN",
    coords: [38.5, 16.0],
    name: { de: "Anseba-Tal", hu: "Anseba-völgy", ro: "Valea Anseba", en: "Anseba Valley" },
    description: { de: "Ein tief eingeschnittenes Flusstal.", hu: "Mélyen bevágódott folyóvölgy.", ro: "O vale adâncă a râului.", en: "A deeply incised river valley." },
    facts: {
      de: ["Saisonale Landwirtschaft", "Schmale Talsohle"],
      hu: ["Szezonális mezőgazdaság", "Keskeny völgyfenék"],
      ro: ["Agricultură sezonieră", "Fund de vale îngust"],
      en: ["Seasonal agriculture", "Narrow valley bottom"]
    }
  },
  {
    id: "afer-plain-relief-v2",
    type: "relief",
    parent: "ER-DK",
    coords: [40.2, 14.8],
    name: { de: "Afer-Ebene", hu: "Afer-síkság", ro: "Câmpia Afer", en: "Afer Plain" },
    description: { de: "Ein extrem trockenes Tiefland.", hu: "Extrém száraz alföld.", ro: "O câmpie extrem de uscată.", en: "An extremely dry lowland." },
    facts: {
      de: ["Salzpfannen", "Wüstenklima"],
      hu: ["Sós síkságok", "Sivatagi klíma"],
      ro: ["Câmpii saline", "Climă deșertică"],
      en: ["Salt pans", "Desert climate"]
    }
  },
  {
    id: "gura-highland-relief-v2",
    type: "mountain",
    parent: "ER-MA",
    coords: [39.3, 15.0],
    name: { de: "Gura-Hochland", hu: "Gura-felföld", ro: "Platoul Gura", en: "Gura Highland" },
    description: { de: "Ein bergiger Bereich im zentralen Hochland.", hu: "Hegyvidékes rész a központi felföldön.", ro: "O zonă muntoasă în platoul central.", en: "A mountainous area in the central highlands." },
    facts: {
      de: ["Kühles Bergklima", "Kiefernbewuchs"],
      hu: ["Hűvös hegyi klíma", "Fenyőerdő"],
      ro: ["Climă montană răcoroasă", "Vegetație de pini"],
      en: ["Cool mountain climate", "Pine vegetation"]
    }
  },
  {
    id: "merea-plain-relief-v2",
    type: "relief",
    parent: "ER-SN",
    coords: [39.5, 15.5],
    name: { de: "Merea-Ebene", hu: "Merea-síkság", ro: "Câmpia Merea", en: "Merea Plain" },
    description: { de: "Küstenebene in der Nähe von Massaua.", hu: "Partmenti síkság Massaua közelében.", ro: "Câmpie de coastă lângă Massawa.", en: "Coastal plain near Massawa." },
    facts: {
      de: ["Sandige Böden", "Dattelpalmen"],
      hu: ["Homokos talajok", "Datolyapálmák"],
      ro: ["Soluri nisipoase", "Palmiere de curmale"],
      en: ["Sandy soils", "Date palms"]
    }
  },
  {
    id: "hames-mountain-relief-v2",
    type: "mountain",
    parent: "ER-AN",
    coords: [38.3, 16.3],
    name: { de: "Hames-Gebirge", hu: "Hames-hegység", ro: "Munții Hames", en: "Hames Mountains" },
    description: { de: "Zerklüftete Berge im Norden.", hu: "Tagolt hegyek északon.", ro: "Munți accidentați în nord.", en: "Rugged mountains in the north." },
    facts: {
      de: ["Felsiges Gelände", "Sehr wenig Vegetation"],
      hu: ["Sziklás terep", "Nagyon kevés növényzet"],
      ro: ["Teren stâncos", "Foarte puțină vegetație"],
      en: ["Rocky terrain", "Very little vegetation"]
    }
  },
  {
    id: "tessenei-lowland-relief-v2",
    type: "relief",
    parent: "ER-GB",
    coords: [36.7, 15.1],
    name: { de: "Tessenei-Tiefland", hu: "Tessenei-alföld", ro: "Câmpia Tessenei", en: "Tessenei Lowland" },
    description: { de: "Fruchtbares Tiefland an der sudanesischen Grenze.", hu: "Termékeny alföld a szudáni határnál.", ro: "Câmpie fertilă la granița cu Sudanul.", en: "Fertile lowland on the Sudanese border." },
    facts: {
      de: ["Bewässerungslandwirtschaft", "Baumwollanbau"],
      hu: ["Öntözéses mezőgazdaság", "Gyapottermesztés"],
      ro: ["Agricultură irigată", "Cultivarea bumbacului"],
      en: ["Irrigated agriculture", "Cotton cultivation"]
    }
  },
  {
    id: "kuma-plateau-relief-v2",
    type: "relief",
    parent: "ER-MA",
    coords: [39.2, 14.9],
    name: { de: "Kuma-Plateau", hu: "Kuma-fennsík", ro: "Platoul Kuma", en: "Kuma Plateau" },
    description: { de: "Hochebene im zentralen Bergland.", hu: "Fennsík a központi hegyvidéken.", ro: "Platou în zona montană centrală.", en: "Plateau in the central mountains." },
    facts: {
      de: ["Grasland", "Viehweide"],
      hu: ["Gyepek", "Állatlegelő"],
      ro: ["Pășuni", "Pășunatul animalelor"],
      en: ["Grassland", "Cattle grazing"]
    }
  },
  {
    id: "dahlak-archipelago-shelf-relief-v2",
    type: "relief",
    parent: "ER-SN",
    coords: [40.0, 15.7],
    name: { de: "Dahlak-Archipel-Schelf", hu: "Dahlak-szigetcsoport kontinentális talapzata", ro: "Șelful Arhipelagului Dahlak", en: "Dahlak Archipelago Shelf" },
    description: { de: "Der untermeerische Bereich der Inselgruppe.", hu: "A szigetcsoport tengeralatti része.", ro: "Partea subacvatică a arhipelagului.", en: "The underwater part of the archipelago." },
    facts: {
      de: ["Korallenriffe", "Flaches Schelfmeer"],
      hu: ["Korallzátonyok", "Sekély self-tenger"],
      ro: ["Recife de corali", "Mare de șelf puțin adâncă"],
      en: ["Coral reefs", "Shallow shelf sea"]
    }
  },
  {
    id: "gash-bark-basin-relief-v2",
    type: "relief",
    parent: "ER-GB",
    coords: [37.4, 15.4],
    name: { de: "Gash-Barka-Becken", hu: "Gash-Barka-medence", ro: "Bazinul Gash-Barka", en: "Gash-Barka Basin" },
    description: { de: "Ein weites Senkungsbecken.", hu: "Széles süllyedékmedence.", ro: "Un bazin de subsidență larg.", en: "A wide subsidence basin." },
    facts: {
      de: ["Sedimentablagerungen", "Trockenes Becken"],
      hu: ["Üledékképződmények", "Száraz medence"],
      ro: ["Depuneri sedimentare", "Bazin uscat"],
      en: ["Sediment deposits", "Dry basin"]
    }
  }
];
