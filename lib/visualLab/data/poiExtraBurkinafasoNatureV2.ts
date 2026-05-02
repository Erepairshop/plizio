import type { POI } from "./poi";

export const poiExtraBurkinafasoNatureV2: POI[] = [
  {
    id: "volta-noire-river-nature-v2",
    type: "river",
    parent: "BF-04",
    coords: [-3.8, 11.5],
    name: { de: "Schwarzer Volta", hu: "Fekete-Volta", ro: "Volta Neagră", en: "Black Volta" },
    description: { de: "Ein bedeutender Fluss in Westafrika, der durch Burkina Faso fließt.", hu: "Jelentős nyugat-afrikai folyó, amely átfolyik Burkina Fasón.", ro: "Un râu important în Africa de Vest care curge prin Burkina Faso.", en: "A significant river in West Africa flowing through Burkina Faso." },
    facts: {
      de: ["Entspringt in Burkina Faso", "Wichtige Wasserquelle"],
      hu: ["Burkina Fasóban ered", "Fontos vízforrás"],
      ro: ["Izvorăște din Burkina Faso", "Sursă importantă de apă"],
      en: ["Originates in Burkina Faso", "Important water source"]
    }
  },
  {
    id: "lac-tengrela-nature-v2",
    type: "lake",
    parent: "BF-04",
    coords: [-4.6, 10.6],
    name: { de: "Tengrela-See", hu: "Tengrela-tó", ro: "Lacul Tengrela", en: "Tengrela Lake" },
    description: { de: "Ein bedeutender See in Burkina Faso, bekannt für seine Nilpferdpopulation.", hu: "Jelentős tó Burkina Fasóban, amely a vízilópopulációjáról ismert.", ro: "Un lac important în Burkina Faso, cunoscut pentru populația sa de hipopotami.", en: "An important lake in Burkina Faso, known for its hippo population." },
    facts: {
      de: ["Heimat von Nilpferden", "Touristenattraktion"],
      hu: ["Vízilovak otthona", "Turistalátványosság"],
      ro: ["Casă pentru hipopotami", "Atracție turistică"],
      en: ["Home to hippos", "Tourist attraction"]
    }
  },
  {
    id: "bale-foret-nature-v2",
    type: "forest",
    parent: "BF-11",
    coords: [-3.0, 11.6],
    name: { de: "Forêt Classée de Balé", hu: "Balé-erdő", ro: "Pădurea Balé", en: "Balé Forest" },
    description: { de: "Ein geschütztes Waldgebiet in der Provinz Balé.", hu: "Védett erdőterület Balé tartományban.", ro: "O zonă forestieră protejată în provincia Balé.", en: "A protected forest area in the Balé province." },
    facts: {
      de: ["Geschütztes Gebiet", "Reiche Flora"],
      hu: ["Védett terület", "Gazdag növényvilág"],
      ro: ["Zonă protejată", "Floră bogată"],
      en: ["Protected area", "Rich flora"]
    }
  },
  {
    id: "parc-national-w-nature-v2",
    type: "forest",
    parent: "BF-09",
    coords: [2.5, 11.9],
    name: { de: "W-Nationalpark", hu: "W Nemzeti Park", ro: "Parcul Național W", en: "W National Park" },
    description: { de: "Ein grenzüberschreitender Nationalpark zwischen Burkina Faso, Benin und Niger.", hu: "Határokon átnyúló nemzeti park Burkina Faso, Benin és Niger között.", ro: "Un parc național transfrontalier între Burkina Faso, Benin și Niger.", en: "A transboundary national park between Burkina Faso, Benin, and Niger." },
    facts: {
      de: ["UNESCO-Welterbe", "Hohe Artenvielfalt"],
      hu: ["UNESCO Világörökség", "Magas biodiverzitás"],
      ro: ["Patrimoniul Mondial UNESCO", "Biodiversitate ridicată"],
      en: ["UNESCO World Heritage", "High biodiversity"]
    }
  },
  {
    id: "pic-de-nazinga-nature-v2",
    type: "mountain",
    parent: "BF-45",
    coords: [-1.6, 11.2],
    name: { de: "Nazinga-Hügel", hu: "Nazinga-dombság", ro: "Dealurile Nazinga", en: "Nazinga Hills" },
    description: { de: "Ein landschaftlich reizvolles Gebiet im Nazinga-Reservat.", hu: "Festői táj a Nazinga-rezervátumban.", ro: "O zonă pitorească în rezervația Nazinga.", en: "A scenic area in the Nazinga Reserve." },
    facts: {
      de: ["Wildtierreservat", "Schöne Aussicht"],
      hu: ["Vadvédelmi terület", "Szép kilátás"],
      ro: ["Rezervație de animale sălbatice", "Vedere frumoasă"],
      en: ["Wildlife reserve", "Beautiful view"]
    }
  },
  {
    id: "fleuve-niger-nature-v2",
    type: "river",
    parent: "BF-05",
    coords: [2.0, 14.5],
    name: { de: "Nigerfluss", hu: "Niger folyó", ro: "Râul Niger", en: "Niger River" },
    description: { de: "Der drittlängste Fluss Afrikas, der auch in Burkina Faso verläuft.", hu: "Afrika harmadik leghosszabb folyója, amely Burkina Fasón is áthalad.", ro: "Al treilea cel mai lung râu din Africa, care trece și prin Burkina Faso.", en: "The third longest river in Africa, which also passes through Burkina Faso." },
    facts: {
      de: ["Große Bedeutung", "Wirtschaftszentrum"],
      hu: ["Nagy jelentőség", "Gazdasági központ"],
      ro: ["Semnificație mare", "Centru economic"],
      en: ["Great importance", "Economic center"]
    }
  },
  {
    id: "mare-aux-hippopotames-nature-v2",
    type: "lake",
    parent: "BF-10",
    coords: [-4.2, 11.6],
    name: { de: "Nilpferd-See", hu: "Víziló-tó", ro: "Lacul Hipopotamilor", en: "Hippo Lake" },
    description: { de: "Ein bedeutendes Ramsar-Gebiet und Lebensraum für Flusspferde.", hu: "Jelentős Ramsar-terület és a vízilovak élőhelye.", ro: "O zonă Ramsar importantă și habitat pentru hipopotami.", en: "An important Ramsar site and habitat for hippos." },
    facts: {
      de: ["Ramsar-Gebiet", "Wichtiger Lebensraum"],
      hu: ["Ramsar-terület", "Fontos élőhely"],
      ro: ["Zonă Ramsar", "Habitat important"],
      en: ["Ramsar site", "Important habitat"]
    }
  },
  {
    id: "foret-kourou-nature-v2",
    type: "forest",
    parent: "BF-03",
    coords: [-4.4, 11.2],
    name: { de: "Kourou-Wald", hu: "Kourou-erdő", ro: "Pădurea Kourou", en: "Kourou Forest" },
    description: { de: "Ein dichter Wald in der Region Kourou.", hu: "Sűrű erdő a Kourou régióban.", ro: "O pădure densă în regiunea Kourou.", en: "A dense forest in the Kourou region." },
    facts: {
      de: ["Naturschutzgebiet", "Vielfältige Bäume"],
      hu: ["Természetvédelmi terület", "Változatos fák"],
      ro: ["Rezervație naturală", "Copaci diverși"],
      en: ["Nature reserve", "Diverse trees"]
    }
  },
  {
    id: "monts-diossor-nature-v2",
    type: "mountain",
    parent: "BF-04",
    coords: [-4.5, 11.3],
    name: { de: "Diossor-Berge", hu: "Diossor-hegyek", ro: "Munții Diossor", en: "Diossor Mountains" },
    description: { de: "Eine bergige Region im westlichen Burkina Faso.", hu: "Hegyvidéki terület Nyugat-Burkina Fasóban.", ro: "O regiune muntoasă în vestul Burkina Faso.", en: "A mountainous region in western Burkina Faso." },
    facts: {
      de: ["Bergige Landschaft", "Ideal zum Wandern"],
      hu: ["Hegyvidéki táj", "Ideális túrázáshoz"],
      ro: ["Peisaj muntos", "Ideal pentru drumeții"],
      en: ["Mountainous landscape", "Ideal for hiking"]
    }
  },
  {
    id: "fleuve-volta-rouge-nature-v2",
    type: "river",
    parent: "BF-06",
    coords: [-1.2, 12.0],
    name: { de: "Roter Volta", hu: "Vörös-Volta", ro: "Volta Roșie", en: "Red Volta" },
    description: { de: "Ein bedeutender Nebenfluss in Burkina Faso.", hu: "Jelentős mellékfolyó Burkina Fasóban.", ro: "Un afluent important în Burkina Faso.", en: "An important tributary in Burkina Faso." },
    facts: {
      de: ["Flusslandschaft", "Naturbelassen"],
      hu: ["Folyótáj", "Természetes"],
      ro: ["Peisaj fluvial", "Natural"],
      en: ["River landscape", "Natural"]
    }
  },
  {
    id: "mare-de-oursi-nature-v2",
    type: "lake",
    parent: "BF-12",
    coords: [-0.4, 14.7],
    name: { de: "Oursi-See", hu: "Oursi-tó", ro: "Lacul Oursi", en: "Oursi Lake" },
    description: { de: "Ein saisonaler See in der Sahel-Region.", hu: "Szezonális tó a Száhel-régióban.", ro: "Un lac sezonier în regiunea Sahel.", en: "A seasonal lake in the Sahel region." },
    facts: {
      de: ["Vogelbeobachtung", "Wichtiges Feuchtgebiet"],
      hu: ["Madármegfigyelés", "Fontos vizes élőhely"],
      ro: ["Observarea păsărilor", "Zonă umedă importantă"],
      en: ["Birdwatching", "Important wetland"]
    }
  },
  {
    id: "foret-tengrela-nature-v2",
    type: "forest",
    parent: "BF-04",
    coords: [-4.7, 10.7],
    name: { de: "Tengrela-Wald", hu: "Tengrela-erdő", ro: "Pădurea Tengrela", en: "Tengrela Forest" },
    description: { de: "Ein Waldgebiet nahe dem Tengrela-See.", hu: "Erdőterület a Tengrela-tó közelében.", ro: "O zonă forestieră lângă Lacul Tengrela.", en: "A forest area near Tengrela Lake." },
    facts: {
      de: ["Grünfläche", "Naturschutz"],
      hu: ["Zöldterület", "Természetvédelem"],
      ro: ["Zonă verde", "Conservarea naturii"],
      en: ["Green area", "Nature conservation"]
    }
  },
  {
    id: "monts-kanala-nature-v2",
    type: "mountain",
    parent: "BF-09",
    coords: [1.1, 11.4],
    name: { de: "Kanala-Berge", hu: "Kanala-hegyek", ro: "Munții Kanala", en: "Kanala Mountains" },
    description: { de: "Eine hügelige Landschaft im Osten.", hu: "Havas táj keleten.", ro: "Un peisaj deluros în est.", en: "A hilly landscape in the east." },
    facts: {
      de: ["Hügellandschaft", "Natur pur"],
      hu: ["Dombság", "Tiszta természet"],
      ro: ["Peisaj deluros", "Natură pură"],
      en: ["Hilly landscape", "Nature pure"]
    }
  },
  {
    id: "fleuve-volta-blanche-nature-v2",
    type: "river",
    parent: "BF-06",
    coords: [-1.4, 12.1],
    name: { de: "Weißer Volta", hu: "Fehér-Volta", ro: "Volta Albă", en: "White Volta" },
    description: { de: "Ein bedeutender Flussarm in Burkina Faso.", hu: "Jelentős folyóág Burkina Fasóban.", ro: "Un braț important al râului în Burkina Faso.", en: "A major river branch in Burkina Faso." },
    facts: {
      de: ["Wichtiger Wasserlauf", "Landschaftsprägend"],
      hu: ["Fontos vízfolyás", "Tájképformáló"],
      ro: ["Curs de apă important", "Formator de peisaj"],
      en: ["Important watercourse", "Landscape shaping"]
    }
  },
  {
    id: "mare-de-gourou-nature-v2",
    type: "lake",
    parent: "BF-09",
    coords: [1.2, 11.5],
    name: { de: "Gourou-See", hu: "Gourou-tó", ro: "Lacul Gourou", en: "Gourou Lake" },
    description: { de: "Ein kleiner See im Osten Burkina Fasos.", hu: "Kis tó Burkina Faso keleti részén.", ro: "Un lac mic în estul Burkina Faso.", en: "A small lake in eastern Burkina Faso." },
    facts: {
      de: ["Ruhige Lage", "Naturerlebnis"],
      hu: ["Csendes helyszín", "Élmény a természetben"],
      ro: ["Locație liniștită", "Experiență în natură"],
      en: ["Quiet location", "Nature experience"]
    }
  },
  {
    id: "foret-dindivier-nature-v2",
    type: "forest",
    parent: "BF-04",
    coords: [-4.2, 10.9],
    name: { de: "Dindivier-Wald", hu: "Dindivier-erdő", ro: "Pădurea Dindivier", en: "Dindivier Forest" },
    description: { de: "Ein bewaldetes Schutzgebiet.", hu: "Erdős védett terület.", ro: "O zonă protejată împădurită.", en: "A forested protected area." },
    facts: {
      de: ["Naturschutzgebiet", "Reichhaltig"],
      hu: ["Természetvédelmi terület", "Gazdag"],
      ro: ["Zonă protejată", "Bogat"],
      en: ["Nature reserve", "Rich"]
    }
  },
  {
    id: "monts-kole-nature-v2",
    type: "mountain",
    parent: "BF-02",
    coords: [-2.5, 12.8],
    name: { de: "Kole-Berge", hu: "Kole-hegyek", ro: "Munții Kole", en: "Kole Mountains" },
    description: { de: "Eine Gebirgskette in Zentral-Burkina Faso.", hu: "Hegyvonulat Közép-Burkina Fasóban.", ro: "Un lanț muntos în centrul Burkina Faso.", en: "A mountain range in central Burkina Faso." },
    facts: {
      de: ["Gebirgskette", "Wandergebiet"],
      hu: ["Hegyvonulat", "Túrázóhely"],
      ro: ["Lanț muntos", "Zonă de drumeții"],
      en: ["Mountain range", "Hiking area"]
    }
  },
  {
    id: "mare-de-kourou-nature-v2",
    type: "lake",
    parent: "BF-03",
    coords: [-4.5, 11.3],
    name: { de: "Kourou-See", hu: "Kourou-tó", ro: "Lacul Kourou", en: "Kourou Lake" },
    description: { de: "Ein natürlicher See in der Kourou-Region.", hu: "Természetes tó a Kourou régióban.", ro: "Un lac natural în regiunea Kourou.", en: "A natural lake in the Kourou region." },
    facts: {
      de: ["Natürliches Gewässer", "Vielfalt"],
      hu: ["Természetes vízfelület", "Sokszínűség"],
      ro: ["Apă naturală", "Diversitate"],
      en: ["Natural water body", "Diversity"]
    }
  },
  {
    id: "foret-boulon-nature-v2",
    type: "forest",
    parent: "BF-04",
    coords: [-3.8, 10.4],
    name: { de: "Boulon-Wald", hu: "Boulon-erdő", ro: "Pădurea Boulon", en: "Boulon Forest" },
    description: { de: "Ein geschütztes Waldgebiet.", hu: "Védett erdőterület.", ro: "O zonă forestieră protejată.", en: "A protected forest area." },
    facts: {
      de: ["Naturschutz", "Grüne Lunge"],
      hu: ["Természetvédelem", "Zöld tüdeje"],
      ro: ["Conservarea naturii", "Plămân verde"],
      en: ["Nature conservation", "Green lung"]
    }
  },
  {
    id: "monts-diapaga-nature-v2",
    type: "mountain",
    parent: "BF-09",
    coords: [1.8, 12.0],
    name: { de: "Diapaga-Hügel", hu: "Diapaga-dombság", ro: "Dealurile Diapaga", en: "Diapaga Hills" },
    description: { de: "Hügellandschaft nahe Diapaga.", hu: "Dombság Diapaga közelében.", ro: "Peisaj deluros lângă Diapaga.", en: "Hilly landscape near Diapaga." },
    facts: {
      de: ["Landschaft", "Natur"],
      hu: ["Táj", "Természet"],
      ro: ["Peisaj", "Natură"],
      en: ["Landscape", "Nature"]
    }
  },
  {
    id: "fleuve-pendjari-nature-v2",
    type: "river",
    parent: "BF-09",
    coords: [1.5, 11.0],
    name: { de: "Pendjari-Fluss", hu: "Pendjari folyó", ro: "Râul Pendjari", en: "Pendjari River" },
    description: { de: "Ein wichtiger Fluss im Pendjari-Nationalpark.", hu: "Jelentős folyó a Pendjari Nemzeti Parkban.", ro: "Un râu important în Parcul Național Pendjari.", en: "An important river in the Pendjari National Park." },
    facts: {
      de: ["Wichtiger Fluss", "Tierbeobachtung"],
      hu: ["Fontos folyó", "Állatmegfigyelés"],
      ro: ["Râu important", "Observarea animalelor"],
      en: ["Important river", "Animal watching"]
    }
  },
  {
    id: "mare-de-bale-nature-v2",
    type: "lake",
    parent: "BF-11",
    coords: [-2.8, 11.5],
    name: { de: "Balé-See", hu: "Balé-tó", ro: "Lacul Balé", en: "Balé Lake" },
    description: { de: "Kleinerer See im Balé-Nationalpark.", hu: "Kisebb tó a Balé Nemzeti Parkban.", ro: "Lac mai mic în Parcul Național Balé.", en: "Smaller lake in Balé National Park." },
    facts: {
      de: ["Natur pur", "Ruhig"],
      hu: ["Tiszta természet", "Csendes"],
      ro: ["Natură pură", "Liniștit"],
      en: ["Nature pure", "Quiet"]
    }
  },
  {
    id: "foret-sissili-nature-v2",
    type: "forest",
    parent: "BF-11",
    coords: [-2.2, 11.2],
    name: { de: "Sissili-Wald", hu: "Sissili-erdő", ro: "Pădurea Sissili", en: "Sissili Forest" },
    description: { de: "Ein bewaldetes Gebiet in der Sissili-Provinz.", hu: "Erdős terület Sissili tartományban.", ro: "O zonă împădurită în provincia Sissili.", en: "A forested area in Sissili province." },
    facts: {
      de: ["Schutzgebiet", "Vielfalt"],
      hu: ["Védett terület", "Sokszínűség"],
      ro: ["Zonă protejată", "Diversitate"],
      en: ["Protected area", "Diversity"]
    }
  },
  {
    id: "monts-gorom-nature-v2",
    type: "mountain",
    parent: "BF-12",
    coords: [-0.3, 14.4],
    name: { de: "Gorom-Hügel", hu: "Gorom-dombság", ro: "Dealurile Gorom", en: "Gorom Hills" },
    description: { de: "Hügellandschaft im nördlichen Burkina Faso.", hu: "Dombság Észak-Burkina Fasóban.", ro: "Peisaj deluros în nordul Burkina Faso.", en: "Hilly landscape in northern Burkina Faso." },
    facts: {
      de: ["Trockene Hügel", "Wüstenrand"],
      hu: ["Száraz dombok", "Sivatagi perem"],
      ro: ["Dealuri uscate", "Marginea deșertului"],
      en: ["Dry hills", "Desert edge"]
    }
  },
  {
    id: "mare-de-arbinda-nature-v2",
    type: "lake",
    parent: "BF-12",
    coords: [-0.9, 14.5],
    name: { de: "Arbinda-See", hu: "Arbinda-tó", ro: "Lacul Arbinda", en: "Arbinda Lake" },
    description: { de: "Ein kleiner natürlicher See im Norden.", hu: "Kis természetes tó északon.", ro: "Un mic lac natural în nord.", en: "A small natural lake in the north." },
    facts: {
      de: ["Natürlich", "Wichtiges Wasserloch"],
      hu: ["Természetes", "Fontos itatóhely"],
      ro: ["Natural", "Adăpătoare importantă"],
      en: ["Natural", "Important water hole"]
    }
  },
  {
    id: "foret-pama-nature-v2",
    type: "forest",
    parent: "BF-09",
    coords: [1.6, 11.4],
    name: { de: "Pama-Wald", hu: "Pama-erdő", ro: "Pădurea Pama", en: "Pama Forest" },
    description: { de: "Ein Waldgebiet im Pama-Schutzgebiet.", hu: "Erdőterület a Pama-védett területen.", ro: "O zonă forestieră în rezervația Pama.", en: "A forest area in the Pama reserve." },
    facts: {
      de: ["Grün", "Naturbelassen"],
      hu: ["Zöld", "Természetes"],
      ro: ["Verde", "Natural"],
      en: ["Green", "Natural"]
    }
  },
  {
    id: "monts-banfora-nature-v2",
    type: "mountain",
    parent: "BF-04",
    coords: [-4.7, 10.6],
    name: { de: "Banfora-Felsen", hu: "Banfora-sziklák", ro: "Stâncile Banfora", en: "Banfora Cliffs" },
    description: { de: "Beeindruckende Felsformationen nahe Banfora.", hu: "Lenyűgöző sziklaképződmények Banfora közelében.", ro: "Formațiuni stâncoase impresionante lângă Banfora.", en: "Impressive rock formations near Banfora." },
    facts: {
      de: ["Felsen", "Touristenort"],
      hu: ["Sziklák", "Turistahülye"],
      ro: ["Stânci", "Loc turistic"],
      en: ["Cliffs", "Tourist spot"]
    }
  },
  {
    id: "fleuve-sirba-nature-v2",
    type: "river",
    parent: "BF-08",
    coords: [1.2, 13.5],
    name: { de: "Sirba-Fluss", hu: "Sirba folyó", ro: "Râul Sirba", en: "Sirba River" },
    description: { de: "Ein Fluss im nordöstlichen Teil des Landes.", hu: "Folyó az ország északkeleti részén.", ro: "Un râu în partea de nord-est a țării.", en: "A river in the northeastern part of the country." },
    facts: {
      de: ["Wichtiger Wasserlauf", "Landschaft"],
      hu: ["Fontos vízfolyás", "Táj"],
      ro: ["Curs de apă important", "Peisaj"],
      en: ["Important watercourse", "Landscape"]
    }
  },
  {
    id: "mare-de-dori-nature-v2",
    type: "lake",
    parent: "BF-07",
    coords: [0.0, 14.0],
    name: { de: "Dori-See", hu: "Dori-tó", ro: "Lacul Dori", en: "Dori Lake" },
    description: { de: "Ein kleiner See nahe der Stadt Dori.", hu: "Kis tó Dori városa közelében.", ro: "Un lac mic lângă orașul Dori.", en: "A small lake near the town of Dori." },
    facts: {
      de: ["Natürlich", "Wasserquelle"],
      hu: ["Természetes", "Vízforrás"],
      ro: ["Natural", "Sursă de apă"],
      en: ["Natural", "Water source"]
    }
  },
  {
    id: "foret-arbinda-nature-v2",
    type: "forest",
    parent: "BF-12",
    coords: [-0.9, 14.6],
    name: { de: "Arbinda-Wald", hu: "Arbinda-erdő", ro: "Pădurea Arbinda", en: "Arbinda Forest" },
    description: { de: "Ein kleines Waldgebiet im Norden.", hu: "Kis erdőterület északon.", ro: "O mică zonă forestieră în nord.", en: "A small forest area in the north." },
    facts: {
      de: ["Naturschutz", "Schatten"],
      hu: ["Természetvédelem", "Árnyék"],
      ro: ["Conservarea naturii", "Umbră"],
      en: ["Nature conservation", "Shadow"]
    }
  }
];
