import type { POI } from "./poi";

export const monacoCountry: POI = {
  id: "country-monaco",
  type: "country",
  parent: "europe",
  coords: [7.4246, 43.7384],
  name: {
    de: "Monaco",
    hu: "Monaco",
    ro: "Monaco",
    en: "Monaco"
  },
  description: {
    de: "Monaco ist der zweitkleinste Staat der Welt, bekannt für Luxus, das Casino von Monte-Carlo und den Formel-1-Grand-Prix.",
    hu: "Monaco a világ második legkisebb országa, amely luxusáról, a Monte-Carlo Casinóról és a Forma-1-es nagydíjról ismert.",
    ro: "Monaco este a doua cea mai mică țară din lume, cunoscută pentru lux, Cazinoul din Monte-Carlo și Marele Premiu de Formula 1.",
    en: "Monaco is the world's second-smallest country, known for luxury, the Monte-Carlo Casino, and the Formula 1 Grand Prix."
  },
  facts: {
    de: [
      "Monaco ist flächenmäßig der zweitkleinste Staat der Welt nach dem Vatikanstadt.",
      "Es ist das am dichtesten besiedelte Land der Erde.",
      "Monaco hat keine Einkommensteuer.",
      "Der Fürstenpalast wird seit dem 13. Jahrhundert von der Familie Grimaldi bewohnt.",
      "Das Land ist in vier traditionelle Stadtbezirke unterteilt."
    ],
    hu: [
      "Monaco a világ második legkisebb országa a Vatikán után.",
      "Ez a világ legsűrűbben lakott országa.",
      "Monacóban nincs jövedelemadó.",
      "A hercegi palotát a 13. század óta a Grimaldi-család lakja.",
      "Az ország négy hagyományos negyedre oszlik."
    ],
    ro: [
      "Monaco este a doua cea mai mică țară din lume ca suprafață, după Vatican.",
      "Este cea mai dens populată țară de pe Pământ.",
      "Monaco nu are impozit pe venit.",
      "Palatul Princiar este locuit de familia Grimaldi încă din secolul al XIII-lea.",
      "Țara este împărțită în patru cartiere tradiționale."
    ],
    en: [
      "Monaco is the world's second-smallest country by area, after Vatican City.",
      "It is the most densely populated country on Earth.",
      "Monaco has no income tax.",
      "The Prince's Palace has been occupied by the Grimaldi family since the 13th century.",
      "The country is divided into four traditional quarters."
    ]
  },
  image: "/geo-images/monaco/country-monaco.webp"
};

export const monacoDistricts: POI[] = [
  {
    id: "district-monaco-ville",
    type: "city",
    parent: "country-monaco",
    coords: [7.4244, 43.7308],
    name: { de: "Monaco-Ville", hu: "Monaco-Ville", ro: "Monaco-Ville", en: "Monaco-Ville" },
    description: {
      de: "Die Altstadt von Monaco, auch 'Der Fels' genannt, beherbergt den Fürstenpalast und die Kathedrale.",
      hu: "Monaco óvárosa, más néven 'A Szikla', itt található a hercegi palota és a katedrális.",
      ro: "Orașul vechi din Monaco, numit și 'Stânca', găzduiește Palatul Princiar și Catedrala.",
      en: "Monaco's old town, also known as 'The Rock', home to the Prince's Palace and the Cathedral."
    },
    facts: {
      de: ["Ältester Teil von Monaco", "Sitz der Regierung", "Blick auf Port Hercules", "Autofreie mittelalterliche Gassen"],
      hu: ["Monaco legrégebbi része", "A kormány székhelye", "Kilátás a Port Herculesre", "Autómentes középkori utcák"],
      ro: ["Cea mai veche parte a Monaco", "Sediul guvernului", "Vedere spre Port Hercules", "Străzi medievale pietonale"],
      en: ["Oldest part of Monaco", "Seat of the government", "Overlooks Port Hercules", "Pedestrianized medieval streets"]
    }
  },
  {
    id: "district-monte-carlo",
    type: "city",
    parent: "country-monaco",
    coords: [7.4275, 43.7401],
    name: { de: "Monte-Carlo", hu: "Monte-Carlo", ro: "Monte-Carlo", en: "Monte-Carlo" },
    description: {
      de: "Der berühmteste Stadtteil Monacos, bekannt für das Casino, Luxushotels und den Grand Prix.",
      hu: "Monaco leghíresebb negyede, amely a kaszinóról, a luxusszállodákról és a nagydíjról ismert.",
      ro: "Cel mai faimos cartier din Monaco, cunoscut pentru cazinou, hoteluri de lux și Marele Premiu.",
      en: "The most famous district of Monaco, known for the casino, luxury hotels, and the Grand Prix."
    },
    facts: {
      de: ["Gegründet 1866", "Zentrum des Luxustourismus", "Beherbergt das berühmte Casino", "Teil der Formel-1-Rennstrecke"],
      hu: ["1866-ban alapították", "A luxusturizmus központja", "Itt található a híres kaszinó", "A Forma-1-es pálya része"],
      ro: ["Fondat în 1866", "Centrul turismului de lux", "Găzduiește celebrul cazinou", "Parte a circuitului de Formula 1"],
      en: ["Founded in 1866", "Center of luxury tourism", "Home to the famous Casino", "Part of the Formula 1 circuit"]
    }
  },
  {
    id: "district-fontvieille",
    type: "city",
    parent: "country-monaco",
    coords: [7.4172, 43.7297],
    name: { de: "Fontvieille", hu: "Fontvieille", ro: "Fontvieille", en: "Fontvieille" },
    description: {
      de: "Ein moderner Stadtteil, der größtenteils durch Landgewinnung aus dem Meer entstanden ist.",
      hu: "Modern negyed, amely nagyrészt a tengerből elhódított területen épült.",
      ro: "Un cartier modern, construit în mare parte pe teren recuperat din mare.",
      en: "A modern district mostly built on land reclaimed from the sea."
    },
    facts: {
      de: ["In den 1970er Jahren erbaut", "Beherbergt das Stadion Louis II", "Moderner Yachthafen", "Princess Grace Rosengarten befindet sich hier"],
      hu: ["Az 1970-es években épült", "Itt található a II. Lajos Stadion", "Modern jachtkikötő", "Itt van a Grace hercegnő rózsakert"],
      ro: ["Construit în anii 1970", "Găzduiește Stadionul Louis II", "Port de iahturi modern", "Grădina de trandafiri Princess Grace se află aici"],
      en: ["Built in the 1970s", "Home to Louis II Stadium", "Modern yacht harbor", "Princess Grace Rose Garden is located here"]
    }
  },
  {
    id: "district-la-condamine",
    type: "city",
    parent: "country-monaco",
    coords: [7.4203, 43.7356],
    name: { de: "La Condamine", hu: "La Condamine", ro: "La Condamine", en: "La Condamine" },
    description: {
      de: "Das Geschäftsviertel von Monaco rund um den Port Hercules mit seinem berühmten Markt.",
      hu: "Monaco üzleti negyede a Port Hercules körül, híres piacával.",
      ro: "Districtul comercial din Monaco, situat în jurul Portului Hercules, cu faimoasa sa piață.",
      en: "Monaco's business district around Port Hercules, featuring its famous market."
    },
    facts: {
      de: ["Zentrum des Port Hercules", "Traditioneller Condamine-Markt", "Start-Ziel-Gerade des Grand Prix", "Vielfältige Einkaufsmöglichkeiten"],
      hu: ["A Port Hercules központja", "Hagyományos Condamine piac", "A nagydíj rajt-cél egyenese", "Változatos vásárlási lehetőségek"],
      ro: ["Centrul Portului Hercules", "Piața tradițională Condamine", "Linia de start-sosire a Marelui Premiu", "Opțiuni diverse de cumpărături"],
      en: ["Center of Port Hercules", "Traditional Condamine Market", "Start-finish line of the Grand Prix", "Diverse shopping options"]
    }
  }
];

export const monacoLandmarks: POI[] = [
  {
    id: "landmark-princes-palace",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4201, 43.7312],
    name: { de: "Fürstenpalast", hu: "Hercegi palota", ro: "Palatul Princiar", en: "Prince's Palace" },
    description: {
      de: "Die offizielle Residenz des Fürsten von Monaco, ursprünglich im Jahr 1191 erbaut.",
      hu: "Monaco hercegének hivatalos rezidenciája, eredetileg 1191-ben épült.",
      ro: "Reședința oficială a Prințului de Monaco, construită inițial în 1191.",
      en: "The official residence of the Prince of Monaco, originally built in 1191."
    },
    facts: {
      de: ["Wachablösung täglich um 11:55 Uhr", "Frühere Festung der Genuesen", "Staatsgemächer sind für Besucher geöffnet", "Sitz der Familie Grimaldi"],
      hu: ["Őrségváltás naponta 11:55-kor", "Egykori genovai erőd", "Az állami termek látogathatók", "A Grimaldi-család székhelye"],
      ro: ["Schimbarea gărzii zilnic la 11:55", "Fostă fortăreață genoveză", "Apartamentele de stat sunt deschise vizitatorilor", "Sediul familiei Grimaldi"],
      en: ["Changing of the Guard daily at 11:55", "Former Genoese fortress", "State apartments are open to visitors", "Seat of the Grimaldi family"]
    }
  },
  {
    id: "landmark-casino-monte-carlo",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4282, 43.7393],
    name: { de: "Casino von Monte-Carlo", hu: "Monte-Carlo Casino", ro: "Cazinoul din Monte-Carlo", en: "Monte-Carlo Casino" },
    description: {
      de: "Ein weltberühmtes Casino und Opernhaus im Stil der Belle Époque.",
      hu: "Világhírű kaszinó és operaház Belle Époque stílusban.",
      ro: "Un cazinou și o operă de renume mondial, în stil Belle Époque.",
      en: "A world-famous casino and opera house in Belle Époque style."
    },
    facts: {
      de: ["Entworfen von Charles Garnier", "Drehort für mehrere James-Bond-Filme", "Monegassen dürfen hier nicht spielen", "Beherbergt auch die Oper von Monte-Carlo"],
      hu: ["Charles Garnier tervezte", "Több James Bond film forgatási helyszíne", "A monacói állampolgárok nem játszhatnak itt", "Itt található a Monte-Carlo Opera is"],
      ro: ["Proiectat de Charles Garnier", "Locație de filmare pentru mai multe filme James Bond", "Cetățenii monegaști nu au voie să joace aici", "Găzduiește și Opera din Monte-Carlo"],
      en: ["Designed by Charles Garnier", "Filming location for several James Bond movies", "Monegasque citizens are not allowed to gamble here", "Also houses the Opéra de Monte-Carlo"]
    }
  },
  {
    id: "landmark-oceanographic-museum",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4255, 43.7306],
    name: { de: "Ozeanographisches Museum", hu: "Oceanográfiai Múzeum", ro: "Muzeul Oceanografic", en: "Oceanographic Museum" },
    description: {
      de: "Ein beeindruckendes Museum für Meereswissenschaften direkt an einer Klippe.",
      hu: "Lenyűgöző tengerkutatási múzeum közvetlenül a sziklaparton.",
      ro: "Un muzeu impresionant de științe marine, situat direct pe o stâncă.",
      en: "An impressive museum of marine sciences located directly on a cliffside."
    },
    facts: {
      de: ["Gegründet von Fürst Albert I.", "Jacques-Yves Cousteau war lange Direktor", "Großes Aquarium im Untergeschoss", "Barocke Architektur"],
      hu: ["I. Albert herceg alapította", "Jacques-Yves Cousteau sokáig az igazgatója volt", "Nagy akvárium az alagsorban", "Barokk építészet"],
      ro: ["Fondat de Prințul Albert I", "Jacques-Yves Cousteau a fost director mult timp", "Acvariu mare la subsol", "Arhitectură barocă"],
      en: ["Founded by Prince Albert I", "Jacques-Yves Cousteau was director for a long time", "Large aquarium in the basement", "Baroque architecture"]
    }
  },
  {
    id: "landmark-monaco-cathedral",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4226, 43.7301],
    name: { de: "Kathedrale von Monaco", hu: "Monacói katedrális", ro: "Catedrala din Monaco", en: "Monaco Cathedral" },
    description: {
      de: "Die Kathedrale des Heiligen Nikolaus, in der viele Mitglieder der Grimaldi-Familie begraben sind.",
      hu: "Szent Miklós-katedrális, ahol a Grimaldi-család számos tagja nyugszik.",
      ro: "Catedrala Sfântul Nicolae, unde sunt înmormântați mulți membri ai familiei Grimaldi.",
      en: "Saint Nicholas Cathedral, where many members of the Grimaldi family are buried."
    },
    facts: {
      de: ["Grabstätte von Fürstin Gracia Patricia", "Erbaut im neoromanischen Stil", "Enthält Retabel von Ludovico Brea", "Ort für große kirchliche Zeremonien"],
      hu: ["Grace Kelly nyughelye", "Neoromán stílusban épült", "Ludovico Brea szárnyasoltárát őrzi", "Nagy egyházi ceremóniák helyszíne"],
      ro: ["Locul de odihnă al Prințesei Grace", "Construită în stil neoromanic", "Conține un retablu de Ludovico Brea", "Locul ceremoniilor religioase majore"],
      en: ["Resting place of Princess Grace", "Built in Neo-Romanesque style", "Contains retable by Ludovico Brea", "Location for major religious ceremonies"]
    }
  },
  {
    id: "landmark-jardin-exotique",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4137, 43.7334],
    name: { de: "Exotischer Garten", hu: "Egzotikus kert", ro: "Grădina Exotică", en: "Exotic Garden" },
    description: {
      de: "Ein botanischer Garten mit Tausenden von Sukkulenten und einer prähistorischen Grotte.",
      hu: "Botanikus kert több ezer szukkulenssel és egy őskori barlanggal.",
      ro: "O grădină botanică cu mii de plante suculente și o grotă preistorică.",
      en: "A botanical garden featuring thousands of succulents and a prehistoric cave."
    },
    facts: {
      de: ["Eröffnet 1933", "Bietet Panoramablick auf das Fürstentum", "Grotte de l'Observatoire befindet sich hier", "Sammlung seltener Wüstenpflanzen"],
      hu: ["1933-ban nyílt meg", "Panorámás kilátást nyújt a hercegségre", "Itt található az Obszervatórium-barlang", "Ritka sivatagi növények gyűjteménye"],
      ro: ["Deschisă în 1933", "Oferă vedere panoramică asupra principatului", "Grotte de l'Observatoire se află aici", "Colecție de plante rare de deșert"],
      en: ["Opened in 1933", "Offers panoramic views of the Principality", "Grotte de l'Observatoire is located here", "Collection of rare desert plants"]
    }
  },
  {
    id: "landmark-port-hercules",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4243, 43.7347],
    name: { de: "Port Hercules", hu: "Port Hercules", ro: "Port Hercules", en: "Port Hercules" },
    description: {
      de: "Der Haupthafen von Monaco, bekannt für seine beeindruckenden Superyachten.",
      hu: "Monaco fő kikötője, lenyűgöző szuperjachtjairól ismert.",
      ro: "Portul principal din Monaco, cunoscut pentru super-iahturile sale impresionante.",
      en: "The main harbor of Monaco, famous for its impressive superyachts."
    },
    facts: {
      de: ["Einziger Tiefwasserhafen Monacos", "Seit der Antike genutzt", "Schauplatz der Monaco Yacht Show", "Zentrum des Grand-Prix-Geschehens"],
      hu: ["Monaco egyetlen mélyvízi kikötője", "Az ókor óta használják", "A Monaco Yacht Show helyszíne", "A nagydíj eseményeinek központja"],
      ro: ["Singurul port cu apă adâncă din Monaco", "Folosit încă din antichitate", "Locul de desfășurare a Monaco Yacht Show", "Centrul activităților Marelui Premiu"],
      en: ["Monaco's only deep-water port", "Used since ancient times", "Site of the Monaco Yacht Show", "Center of Grand Prix activity"]
    }
  },
  {
    id: "landmark-larvotto-beach",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4355, 43.7441],
    name: { de: "Larvotto Strand", hu: "Larvotto strand", ro: "Plaja Larvotto", en: "Larvotto Beach" },
    description: {
      de: "Monacos einziger öffentlicher Strand mit feinem Kies und klarem Wasser.",
      hu: "Monaco egyetlen nyilvános strandja apró kavicsos parttal és tiszta vízzel.",
      ro: "Singura plajă publică din Monaco, cu pietriș fin și apă curată.",
      en: "Monaco's only public beach with fine gravel and clear water."
    },
    facts: {
      de: ["Künstlich angelegter Strand", "Gesäumt von Luxusrestaurants", "Beliebt bei Einheimischen und Touristen", "Vollständig renoviert von Renzo Piano"],
      hu: ["Mesterségesen kialakított strand", "Luxuséttermek szegélyezik", "Népszerű a helyiek és a turisták körében", "Renzo Piano által teljesen felújítva"],
      ro: ["Plajă creată artificial", "Mărginită de restaurante de lux", "Populară printre localnici și turiști", "Renovată complet de Renzo Piano"],
      en: ["Artificially created beach", "Lined with luxury restaurants", "Popular with locals and tourists", "Completely renovated by Renzo Piano"]
    }
  },
  {
    id: "landmark-japanese-garden",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4308, 43.7428],
    name: { de: "Japanischer Garten", hu: "Japán kert", ro: "Grădina Japoneză", en: "Japanese Garden" },
    description: {
      de: "Ein friedlicher Zen-Garten am Mittelmeer, entworfen nach strengen Zen-Prinzipien.",
      hu: "Békés zen kert a Földközi-tenger partján, szigorú zen elvek alapján tervezve.",
      ro: "O grădină zen liniștită la malul Mediteranei, proiectată după principii zen stricte.",
      en: "A peaceful Zen garden by the Mediterranean, designed according to strict Zen principles."
    },
    facts: {
      de: ["Gestaltet von Yasuo Beppu", "Beinhaltet einen Wasserfall und einen Koi-Teich", "Über 7.000 Quadratmeter groß", "Offizielle Einweihung 1994"],
      hu: ["Yasuo Beppu tervezte", "Vízesést és koi-pontyos tavat is tartalmaz", "Több mint 7000 négyzetméter", "Hivatalos átadás 1994-ben"],
      ro: ["Proiectată de Yasuo Beppu", "Include o cascadă și un iaz cu pești koi", "Peste 7.000 de metri pătrați", "Inaugurată oficial în 1994"],
      en: ["Designed by Yasuo Beppu", "Features a waterfall and a koi pond", "Over 7,000 square meters", "Officially inaugurated in 1994"]
    }
  },
  {
    id: "landmark-grimaldi-forum",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4325, 43.7431],
    name: { de: "Grimaldi Forum", hu: "Grimaldi Forum", ro: "Grimaldi Forum", en: "Grimaldi Forum" },
    description: {
      de: "Ein modernes Konferenz- und Kongresszentrum direkt am Meer.",
      hu: "Modern konferencia- és kongresszusi központ közvetlenül a tengerparton.",
      ro: "Un centru modern de conferințe și congrese situat direct pe malul mării.",
      en: "A modern conference and congress center located directly on the seafront."
    },
    facts: {
      de: ["Veranstaltungsort für UEFA-Auslosungen", "Große Kunstausstellungen im Sommer", "Ökologisches Gebäude", "Größtenteils unterirdisch gebaut"],
      hu: ["UEFA sorsolások helyszíne", "Nagy nyári művészeti kiállítások", "Környezetbarát épület", "Nagyrészt a föld alatt épült"],
      ro: ["Locul desfășurării tragerilor la sorți UEFA", "Mari expoziții de artă vara", "Clădire ecologică", "Construită în mare parte subteran"],
      en: ["Venue for UEFA draws", "Large art exhibitions in summer", "Eco-friendly building", "Mostly built underground"]
    }
  },
  {
    id: "landmark-saint-devote-chapel",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4195, 43.7371],
    name: { de: "Sainte-Dévote Kapelle", hu: "Szent Dévote kápolna", ro: "Capela Sainte-Dévote", en: "Sainte-Dévote Chapel" },
    description: {
      de: "Eine kleine Kapelle gewidmet der Schutzpatronin von Monaco.",
      hu: "Kis kápolna Monaco védőszentjének szentelve.",
      ro: "O mică chapelă dedicată patroanei spirituale a Monaco.",
      en: "A small chapel dedicated to the patron saint of Monaco."
    },
    facts: {
      de: ["Liegt in einer Senke des Grand Prix Kurses", "Sainte-Dévote ist die Schutzpatronin", "Ort der traditionellen Verbrennung eines Bootes am 26. Januar", "Erste Kurve der F1-Rennstrecke"],
      hu: ["A nagydíj pálya egyik mélyedésében fekszik", "Szent Dévote a védőszent", "Január 26-án itt égetnek el hagyományosan egy csónakot", "A Forma-1-es pálya első kanyarja"],
      ro: ["Situată într-o depresiune a circuitului de Mare Premiu", "Sainte-Dévote este patroana spirituală", "Locul tradiționalei arderi a unei bărci pe 26 ianuarie", "Prima curbă a circuitului de F1"],
      en: ["Located in a dip of the Grand Prix course", "Sainte-Dévote is the patron saint", "Site of traditional boat burning on Jan 26", "First corner of the F1 circuit"]
    }
  },
  {
    id: "landmark-fort-antoine",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4271, 43.7311],
    name: { de: "Fort Antoine", hu: "Fort Antoine", ro: "Fort Antoine", en: "Fort Antoine" },
    description: {
      de: "Eine Festung aus dem 18. Jahrhundert, die heute als Freilichttheater genutzt wird.",
      hu: "18. századi erődítmény, amelyet ma szabadtéri színházként használnak.",
      ro: "O fortăreață din secolul al XVIII-lea, folosită astăzi ca teatru în aer liber.",
      en: "An 18th-century fortress now used as an open-air theater."
    },
    facts: {
      de: ["Erbaut von Fürst Antoine I.", "Blick auf das Mittelmeer", "Im Zweiten Weltkrieg zerstört und später wieder aufgebaut", "Bietet Platz für 350 Zuschauer"],
      hu: ["I. Antoine herceg építtette", "Kilátás a Földközi-tengerre", "A második világháborúban elpusztult, később újjáépítették", "350 néző befogadására alkalmas"],
      ro: ["Construit de Prințul Antoine I", "Vedere spre Marea Mediterană", "Distrus în al Doilea Război Mondial și reconstruit ulterior", "Capacitate de 350 de spectatori"],
      en: ["Built by Prince Antoine I", "Overlooks the Mediterranean", "Destroyed in WWII and later rebuilt", "Accommodates 350 spectators"]
    }
  },
  {
    id: "landmark-louis-ii-stadium",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4158, 43.7275],
    name: { de: "Louis-II-Stadion", hu: "II. Lajos Stadion", ro: "Stadionul Louis II", en: "Louis II Stadium" },
    description: {
      de: "Das Mehrzweckstadion von Monaco und Heimspielstätte des AS Monaco.",
      hu: "Monaco többcélú stadionja és az AS Monaco hazai pályája.",
      ro: "Stadionul polivalent din Monaco și sediul clubului AS Monaco.",
      en: "Monaco's multi-purpose stadium and home of AS Monaco."
    },
    facts: {
      de: ["Eingeweiht 1985", "Liegt auf künstlich gewonnenem Land", "Neun markante Bögen", "Beherbergt auch ein Schwimmzentrum"],
      hu: ["1985-ben adták át", "Mesterséges területen fekszik", "Kilenc jellegzetes ív", "Itt található egy úszóközpont is"],
      ro: ["Inaugurat în 1985", "Situat pe teren recuperat", "Nouă arcade distinctive", "Găzduiește și un centru de natație"],
      en: ["Inaugurated in 1985", "Located on reclaimed land", "Nine distinctive arches", "Also houses a swimming center"]
    }
  },
  {
    id: "landmark-top-cars-collection",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4182, 43.7315],
    name: { de: "Automobilsammlung von Monaco", hu: "Hercegi autógyűjtemény", ro: "Colecția de mașini a Prințului", en: "Monaco Top Cars Collection" },
    description: {
      de: "Die private Oldtimersammlung von Fürst Rainier III.",
      hu: "III. Rainier herceg magán veteránautó gyűjteménye.",
      ro: "Colecția privată de mașini clasice a Prințului Rainier III.",
      en: "The private vintage car collection of Prince Rainier III."
    },
    facts: {
      de: ["Über 100 Fahrzeuge ausgestellt", "Beinhaltet Formel-1-Wagen", "Spezielle Kutschen der Fürstenfamilie", "Befindet sich in Fontvieille"],
      hu: ["Több mint 100 jármű látható", "Forma-1-es autókat is tartalmaz", "A hercegi család különleges hintói", "Fontvieille-ben található"],
      ro: ["Peste 100 de vehicule expuse", "Include mașini de Formula 1", "Trăsuri speciale ale familiei princiare", "Situată în Fontvieille"],
      en: ["Over 100 vehicles on display", "Includes Formula 1 cars", "Special carriages of the princely family", "Located in Fontvieille"]
    }
  },
  {
    id: "landmark-princess-grace-rose-garden",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4178, 43.7286],
    name: { de: "Princess-Grace-Rosengarten", hu: "Grace hercegnő rózsakert", ro: "Grădina de trandafiri Princess Grace", en: "Princess Grace Rose Garden" },
    description: {
      de: "Ein wunderschöner Rosengarten zum Gedenken an Fürstin Gracia Patricia.",
      hu: "Gyönyörű rózsakert Grace hercegnő emlékére.",
      ro: "O grădină de trandafiri superbă în memoria Prințesei Grace.",
      en: "A beautiful rose garden in memory of Princess Grace."
    },
    facts: {
      de: ["Über 300 verschiedene Rosensorten", "Eröffnet 1984", "Herzförmiges Design", "Bronze-Statue der Fürstin"],
      hu: ["Több mint 300 rózsafajta", "1984-ben nyílt meg", "Szív alakú kialakítás", "A hercegnő bronzszobra"],
      ro: ["Peste 300 de soiuri de trandafiri", "Deschisă în 1984", "Design în formă de inimă", "Statuia de bronz a Prințesei"],
      en: ["Over 300 varieties of roses", "Opened in 1984", "Heart-shaped design", "Bronze statue of the Princess"]
    }
  },
  {
    id: "landmark-nmnm",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4361, 43.7455],
    name: { de: "Nouveau Musée National de Monaco", hu: "Monacói Új Nemzeti Múzeum", ro: "Noul Muzeu Național din Monaco", en: "Nouveau Musée National de Monaco" },
    description: {
      de: "Das nationale Museum für zeitgenössische Kunst in Monaco.",
      hu: "Monaco kortárs művészeti nemzeti múzeuma.",
      ro: "Muzeul național de artă contemporană din Monaco.",
      en: "Monaco's national museum for contemporary art."
    },
    facts: {
      de: ["Zwei Standorte: Villa Paloma und Villa Sauber", "Fokus auf zeitgenössisches Erbe", "Wechselnde Ausstellungen", "Wichtige Kulturinstitution"],
      hu: ["Két helyszín: Villa Paloma és Villa Sauber", "Fókuszban a kortárs örökség", "Váltakozó kiállítások", "Fontos kulturális intézmény"],
      ro: ["Două locații: Villa Paloma și Villa Sauber", "Focus pe patrimoniul contemporan", "Expoziții temporare", "Instituție culturală importantă"],
      en: ["Two locations: Villa Paloma and Villa Sauber", "Focus on contemporary heritage", "Rotating exhibitions", "Key cultural institution"]
    }
  },
  {
    id: "landmark-metropole-shopping",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4278, 43.7398],
    name: { de: "Metropole Shopping Monte-Carlo", hu: "Metropole Shopping", ro: "Metropole Shopping", en: "Metropole Shopping Monte-Carlo" },
    description: {
      de: "Ein luxuriöses Einkaufszentrum mit prachtvoller Innenausstattung.",
      hu: "Luxus bevásárlóközpont pompás belső térrel.",
      ro: "Un centru comercial de lux cu interioare somptuoase.",
      en: "A luxury shopping center with magnificent interiors."
    },
    facts: {
      de: ["Bekannt für Kristalllüster", "Luxusmarken", "In der Nähe des Casino-Platzes", "Besonderes Ambiente"],
      hu: ["Kristálycsillárjairól ismert", "Luxusmárkák", "A Kaszinó tér közelében", "Különleges atmoszféra"],
      ro: ["Cunoscut pentru lustrele de cristal", "Branduri de lux", "Lângă Piața Cazinoului", "Ambianță deosebită"],
      en: ["Known for crystal chandeliers", "Luxury brands", "Near Casino Square", "Unique atmosphere"]
    }
  },
  {
    id: "landmark-opera-monte-carlo",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4285, 43.7391],
    name: { de: "Oper von Monte-Carlo", hu: "Monte-Carlo Opera", ro: "Opera din Monte-Carlo", en: "Opéra de Monte-Carlo" },
    description: {
      de: "Ein prachtvolles Opernhaus, das Teil des Casino-Komplexes ist.",
      hu: "Pompás operaház, amely a kaszinókomplexum része.",
      ro: "O operă splendidă care face parte din complexul cazinoului.",
      en: "A magnificent opera house that is part of the Casino complex."
    },
    facts: {
      de: ["Inauguriert 1879", "Auch Salle Garnier genannt", "Prachtvolle Vergoldungen", "Hervorragende Akustik"],
      hu: ["1879-ben avatták fel", "Salle Garnier-nek is hívják", "Pompás aranyozás", "Kiváló akusztika"],
      ro: ["Inaugurată în 1879", "Numită și Salle Garnier", "Poleială somptuoasă", "Acustică excelentă"],
      en: ["Inaugurated in 1879", "Also called Salle Garnier", "Lavish gilding", "Excellent acoustics"]
    }
  },
  {
    id: "landmark-yacht-club",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4251, 43.7368],
    name: { de: "Yacht Club de Monaco", hu: "Monacói Yacht Klub", ro: "Yacht Club de Monaco", en: "Yacht Club de Monaco" },
    description: {
      de: "Der exklusive Yachtclub von Monaco in einem modernen Gebäude von Norman Foster.",
      hu: "Monaco exkluzív yacht klubja Norman Foster modern épületében.",
      ro: "Clubul nautic exclusivist din Monaco într-o clădire modernă de Norman Foster.",
      en: "Monaco's exclusive yacht club in a modern building by Norman Foster."
    },
    facts: {
      de: ["Gegründet 1953 von Fürst Rainier III.", "Gebäude ähnelt einem Kreuzfahrtschiff", "Zentrum der internationalen Segelszene", "Exklusiv für Mitglieder"],
      hu: ["III. Rainier herceg alapította 1953-ban", "Az épület egy luxushajóra hasonlít", "A nemzetközi vitorlázás központja", "Csak tagoknak"],
      ro: ["Fondat în 1953 de Prințul Rainier III", "Clădirea seamănă cu un vas de croazieră", "Centrul scenei internaționale de iahting", "Exclusiv pentru membrii"],
      en: ["Founded in 1953 by Prince Rainier III", "Building resembles a cruise ship", "Center of the international sailing scene", "Exclusive to members"]
    }
  },
  {
    id: "landmark-saint-martin-gardens",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4241, 43.7303],
    name: { de: "Gärten von Saint-Martin", hu: "Szent Márton kertek", ro: "Grădinile Saint-Martin", en: "Saint-Martin Gardens" },
    description: {
      de: "Die ersten öffentlichen Gärten von Monaco auf dem Felsen.",
      hu: "Monaco első nyilvános kertjei a Sziklán.",
      ro: "Primele grădini publice din Monaco pe Stâncă.",
      en: "Monaco's first public gardens located on the Rock."
    },
    facts: {
      de: ["Liegen zwischen dem Ozeanographischen Museum und der Kathedrale", "Mediterrane Flora", "Skulpturen und Denkmäler", "Panoramablick auf die Küste"],
      hu: ["Az Oceanográfiai Múzeum és a Katedrális között fekszenek", "Mediterrán flóra", "Szobrok és emlékművek", "Panorámás kilátás a partra"],
      ro: ["Situate între Muzeul Oceanografic și Catedrală", "Floră mediteraneană", "Sculpturi și monumente", "Vedere panoramică spre coastă"],
      en: ["Located between the Oceanographic Museum and the Cathedral", "Mediterranean flora", "Sculptures and monuments", "Panoramic coast views"]
    }
  },
  {
    id: "landmark-champions-promenade",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4321, 43.7421],
    name: { de: "Champion's Promenade", hu: "Bajnokok sétánya", ro: "Champion's Promenade", en: "Champion's Promenade" },
    description: {
      de: "Ein 'Walk of Fame' für die weltbesten Fußballer.",
      hu: "A világ legjobb labdarúgóinak 'hírességek sétánya'.",
      ro: "Un 'Walk of Fame' pentru cei mai buni fotbaliști din lume.",
      en: "A 'Walk of Fame' for the world's best football players."
    },
    facts: {
      de: ["Fußabdrücke berühmter Spieler", "In der Nähe des Grimaldi Forums", "Verliehen durch die Golden Foot Awards", "Eingeweiht 2003"],
      hu: ["Híres játékosok lábnyomai", "A Grimaldi Forum közelében", "A Golden Foot Awards díjazottjai", "2003-ban adták át"],
      ro: ["Amprentele picioarelor unor jucători celebri", "Lângă Grimaldi Forum", "Acordate prin Golden Foot Awards", "Inaugurată în 2003"],
      en: ["Footprints of famous players", "Near the Grimaldi Forum", "Awarded via Golden Foot Awards", "Inaugurated in 2003"]
    }
  },
  {
    id: "landmark-zoological-garden",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4192, 43.7291],
    name: { de: "Zoologischer Garten von Monaco", hu: "Monacói Állatkert", ro: "Grădina Zoologică din Monaco", en: "Monaco Zoological Garden" },
    description: {
      de: "Ein kleiner Zoo am Hang des Felsens von Monaco.",
      hu: "Kis állatkert a monacói Szikla oldalában.",
      ro: "O mică grădină zoologică pe versantul Stâncii din Monaco.",
      en: "A small zoo located on the side of the Rock of Monaco."
    },
    facts: {
      de: ["Gegründet 1954 von Fürst Rainier III.", "Beherbergt Tiere aus illegalem Handel oder Spenden", "Überblickt den Hafen von Fontvieille", "Spezialisiert auf exotische Vögel und Primaten"],
      hu: ["III. Rainier herceg alapította 1954-ben", "Illegális kereskedelemből mentett vagy ajándékozott állatok", "Kilátás Fontvieille kikötőjére", "Egzotikus madarakra és főemlősökre szakosodott"],
      ro: ["Fondată în 1954 de Prințul Rainier III", "Găzduiește animale provenite din trafic ilegal sau donații", "Vedere spre portul Fontvieille", "Specializată pe păsări exotice și primate"],
      en: ["Founded in 1954 by Prince Rainier III", "Houses animals rescued from illegal trade or donations", "Overlooks Fontvieille harbor", "Specializes in exotic birds and primates"]
    }
  },
  {
    id: "landmark-museum-prehistoric",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4141, 43.7331],
    name: { de: "Museum für prähistorische Anthropologie", hu: "Őstörténeti Antropológiai Múzeum", ro: "Muzeul de Antropologie Preistorică", en: "Museum of Prehistoric Anthropology" },
    description: {
      de: "Ein Museum, das die prähistorische Geschichte der Region dokumentiert.",
      hu: "A régió őstörténetét dokumentáló múzeum.",
      ro: "Un muzeu care documentează istoria preistorică a regiunii.",
      en: "A museum documenting the prehistoric history of the region."
    },
    facts: {
      de: ["Gegründet 1902", "Beinhaltet Funde aus lokalen Höhlen", "Ältestes Forschungsinstitut des Fürstentums", "Befindet sich im Exotischen Garten"],
      hu: ["1902-ben alapították", "Helyi barlangokból származó leletek", "A hercegség legrégebbi kutatóintézete", "Az Egzotikus kertben található"],
      ro: ["Fondat în 1902", "Conține descoperiri din peșterile locale", "Cea mai veche instituție de cercetare a principatului", "Situat în Grădina Exotică"],
      en: ["Founded in 1902", "Includes finds from local caves", "Principality's oldest research institute", "Located in the Exotic Garden"]
    }
  },
  {
    id: "landmark-place-du-casino",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4278, 43.7391],
    name: { de: "Casino-Platz", hu: "Kaszinó tér", ro: "Piața Cazinoului", en: "Casino Square" },
    description: {
      de: "Der zentrale Platz von Monte-Carlo, umgeben von legendären Gebäuden.",
      hu: "Monte-Carlo központi tere, legendás épületekkel körülvéve.",
      ro: "Piața centrală din Monte-Carlo, înconjurată de clădiri legendare.",
      en: "The central square of Monte-Carlo, surrounded by legendary buildings."
    },
    facts: {
      de: ["Ort zum Sehen und Gesehenwerden", "Hôtel de Paris und Café de Paris befinden sich hier", "Zentrum des gesellschaftlichen Lebens", "Oft voller Luxusautos"],
      hu: ["A társasági élet középpontja", "Itt található a Hôtel de Paris és a Café de Paris", "A közösségi élet központja", "Gyakran tele luxusautókkal"],
      ro: ["Locul unde să vezi și să fii văzut", "Hôtel de Paris și Café de Paris se află aici", "Centrul vieții sociale", "Adesea plină de mașini de lux"],
      en: ["The place to see and be seen", "Hôtel de Paris and Café de Paris are located here", "Center of social life", "Often filled with luxury cars"]
    }
  },
  {
    id: "landmark-f1-hairpin",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4298, 43.7401],
    name: { de: "Fairmont-Haarnadelkurve", hu: "Fairmont hajtűkanyar", ro: "Acul de păr Fairmont", en: "Fairmont Hairpin" },
    description: {
      de: "Die langsamste und berühmteste Kurve im Formel-1-Kalender.",
      hu: "A Forma-1-es versenynaptár leglassabb és leghíresebb kanyarja.",
      ro: "Cea mai lentă și celebră curbă din calendarul de Formula 1.",
      en: "The slowest and most famous corner in the Formula 1 calendar."
    },
    facts: {
      de: ["Teil des Monaco Grand Prix", "Spektakuläre Überholmanöver", "Früher als Loews-Kurve bekannt", "Extremer Lenkeinschlag erforderlich"],
      hu: ["A Monacói Nagydíj része", "Látványos előzések helyszíne", "Korábban Loews-kanyarként ismerték", "Extrém kormányzást igényel"],
      ro: ["Parte a Marelui Premiu din Monaco", "Depășiri spectaculoase", "Cunoscută anterior sub numele de curba Loews", "Necesită bracaj maxim"],
      en: ["Part of the Monaco Grand Prix", "Site of spectacular overtakes", "Formerly known as Loews corner", "Requires extreme steering input"]
    }
  },
  {
    id: "landmark-stade-nautique",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4221, 43.7361],
    name: { de: "Stade Nautique Rainier III", hu: "Rainier III vízi stadion", ro: "Stadionul Nautic Rainier III", en: "Stade Nautique Rainier III" },
    description: {
      de: "Ein beheiztes Freibad mit Salzwasser am Port Hercules.",
      hu: "Fűtött sós vizes szabadtéri úszómedence a Port Herculesnél.",
      ro: "O piscină în aer liber cu apă de mare încălzită la Port Hercules.",
      en: "A heated saltwater outdoor swimming pool at Port Hercules."
    },
    facts: {
      de: ["Im Winter eine Eislaufbahn", "Blick auf die Superyachten", "Teil des Grand-Prix-Kurses", "Olympische Ausmaße"],
      hu: ["Télen korcsolyapálya", "Kilátás a szuperjachtokra", "A nagydíj pálya része", "Olimpiai méretű"],
      ro: ["Patinoar pe timp de iarnă", "Vedere spre super-iahturi", "Parte a circuitului de Mare Premiu", "Dimensiuni olimpice"],
      en: ["Ice rink in winter", "Views of superyachts", "Part of the Grand Prix course", "Olympic dimensions"]
    }
  },
  {
    id: "landmark-stamp-museum",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4188, 43.7318],
    name: { de: "Briefmarken- und Münzmuseum", hu: "Bélyeg- és érmemúzeum", ro: "Muzeul de timbre și monede", en: "Museum of Stamps and Coins" },
    description: {
      de: "Ein Museum, das die philatelistische und numismatische Geschichte Monacos zeigt.",
      hu: "Monaco filatéliai és numizmatikai történetét bemutató múzeum.",
      ro: "Un muzeu care prezintă istoria filatelică și numismatică a Monaco.",
      en: "A museum showcasing the philatelic and numismatic history of Monaco."
    },
    facts: {
      de: ["Seltene Briefmarken von Monaco", "Münzen seit 1640", "Befindet sich in Fontvieille", "Gegründet 1996"],
      hu: ["Ritka monacói bélyegek", "Érmék 1640-től kezdve", "Fontvieille-ben található", "1996-ban alapították"],
      ro: ["Timbre rare din Monaco", "Monede din 1640", "Situat în Fontvieille", "Fondat în 1996"],
      en: ["Rare Monaco stamps", "Coins dating back to 1640", "Located in Fontvieille", "Founded in 1996"]
    }
  },
  {
    id: "landmark-theatre-princess-grace",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4288, 43.7428],
    name: { de: "Théâtre Princesse Grace", hu: "Grace hercegnő színház", ro: "Teatrul Princess Grace", en: "Princess Grace Theatre" },
    description: {
      de: "Ein wichtiges kulturelles Zentrum und Theater in Monaco.",
      hu: "Fontos kulturális központ és színház Monacóban.",
      ro: "Un important centru cultural și teatru din Monaco.",
      en: "A major cultural center and theatre in Monaco."
    },
    facts: {
      de: ["Eingeweiht 1981", "Befindet sich am Boulevard d'Italie", "Vielseitiges Programm", "Ehemals Cinema des Beaux-Arts"],
      hu: ["1981-ben avatták fel", "A Boulevard d'Italie-n található", "Változatos program", "Egykor Cinema des Beaux-Arts"],
      ro: ["Inaugurat în 1981", "Situat pe Boulevard d'Italie", "Program diversificat", "Fostul Cinema des Beaux-Arts"],
      en: ["Inaugurated in 1981", "Located on Boulevard d'Italie", "Diverse programming", "Formerly Cinema des Beaux-Arts"]
    }
  },
  {
    id: "landmark-chapelle-misericorde",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4211, 43.7328],
    name: { de: "Chapelle de la Miséricorde", hu: "Irgalmasság kápolna", ro: "Capela Milostivirii", en: "Chapelle de la Miséricorde" },
    description: {
      de: "Eine barocke Kapelle in Monaco-Ville, Sitz der Bruderschaft der Schwarzen Büßer.",
      hu: "Barokk kápolna Monaco-Ville-ben, a Fekete Bűnbánók testvériségének székhelye.",
      ro: "O chapelă barocă în Monaco-Ville, sediul Frăției Penitenților Negri.",
      en: "A Baroque chapel in Monaco-Ville, seat of the Brotherhood of Black Penitents."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Befindet sich am Place de la Mairie", "Wichtige religiöse Prozessionen", "Barocke Innenausstattung"],
      hu: ["A 17. században épült", "A Place de la Mairie-n található", "Fontos vallási körmenetek", "Barokk belső tér"],
      ro: ["Construită în secolul al XVII-lea", "Situată în Place de la Mairie", "Procesiuni religioase importante", "Interior baroc"],
      en: ["Built in the 17th century", "Located on Place de la Mairie", "Important religious processions", "Baroque interior"]
    }
  },
  {
    id: "landmark-heliport",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4168, 43.7258],
    name: { de: "Heliport von Monaco", hu: "Monacói heliport", ro: "Heliportul Monaco", en: "Monaco Heliport" },
    description: {
      de: "Der Hubschrauberlandeplatz von Monaco, der eine schnelle Verbindung zum Flughafen Nizza bietet.",
      hu: "Monaco helikopter-repülőtere, amely gyors összeköttetést biztosít a nizzai repülőtérrel.",
      ro: "Heliportul din Monaco, care oferă o conexiune rapidă cu aeroportul din Nisa.",
      en: "Monaco's heliport providing a quick link to Nice Airport."
    },
    facts: {
      de: ["Direkt am Meer in Fontvieille", "Flugzeit nach Nizza ca. 7 Minuten", "Einziger 'Flughafen' Monacos", "Regelmäßiger Linienverkehr"],
      hu: ["Közvetlenül a tengerparton Fontvieille-ben", "Repülési idő Nizzába kb. 7 perc", "Monaco egyetlen 'repülőtere'", "Rendszeres menetrend szerinti járatok"],
      ro: ["Direct pe malul mării în Fontvieille", "Timp de zbor spre Nisa aprox. 7 minute", "Singurul 'aeroport' din Monaco", "Zboruri regulate de linie"],
      en: ["Directly on the seafront in Fontvieille", "Flight time to Nice approx. 7 mins", "Monaco's only 'airport'", "Regular scheduled flights"]
    }
  }
];

export const monacoAllPoi: POI[] = [
  monacoCountry,
  ...monacoDistricts,
  ...monacoLandmarks
];
