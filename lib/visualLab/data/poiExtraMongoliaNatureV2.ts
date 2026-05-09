import type { POI } from "./poi";

export const poiExtraMongoliaNatureV2: POI[] = [
  {
    id: "khovsgol-lake-nature-v2",
    type: "lake",
    parent: "MN-041",
    coords: [100.1667, 51.0000],
    name: {
      de: "Chöwsgöl-See",
      hu: "Khövsgöl-tó",
      ro: "Lacul Khövsgöl",
      en: "Lake Khövsgöl"
    },
    description: {
      de: "Er wird oft als die 'dunkelblaue Perle' der Mongolei bezeichnet und ist der größte Süßwassersee des Landes.",
      hu: "Gyakran Mongólia 'sötétkék gyöngyszemeként' emlegetik, és ez az ország legnagyobb édesvizű tava.",
      ro: "Adesea numit „perla albastru închis” a Mongoliei, este cel mai mare lac cu apă dulce din țară.",
      en: "Often referred to as the 'dark blue pearl' of Mongolia, it is the country's largest freshwater lake."
    },
    facts: {
      de: ["Fasst etwa 70 % des mongolischen Süßwassers.", "Erreicht eine Tiefe von über 260 Metern."],
      hu: ["A mongol édesvízkészlet mintegy 70%-át tartalmazza.", "Mélysége eléri a 260 métert."],
      ro: ["Conține aproximativ 70% din apa dulce a Mongoliei.", "Atinge o adâncime de peste 260 de metri."],
      en: ["Holds about 70% of Mongolia's freshwater.", "Reaches a depth of over 260 meters."]
    }
  },
  {
    id: "orkhon-river-nature-v2",
    type: "river",
    parent: "MN-073",
    coords: [102.7333, 47.5667],
    name: {
      de: "Orchon-Fluss",
      hu: "Orhon-folyó",
      ro: "Râul Orkhon",
      en: "Orkhon River"
    },
    description: {
      de: "Der längste Fluss der Mongolei fließt durch ein historisch reiches Tal, das einst das Zentrum großer Nomadenreiche war.",
      hu: "Mongólia leghosszabb folyója egy történelmileg gazdag völgyön folyik keresztül, amely egykor nagy nomád birodalmak központja volt.",
      ro: "Cel mai lung râu din Mongolia curge printr-o vale bogată istoric, cândva centrul marilor imperii nomade.",
      en: "Mongolia's longest river flows through a historically rich valley that was once the center of great nomadic empires."
    },
    facts: {
      de: ["Hat eine Länge von 1124 Kilometern.", "Mündet schließlich in die Selenge."],
      hu: ["Hossza eléri az 1124 kilométert.", "Végül a Szelenga folyóba ömlik."],
      ro: ["Are o lungime de 1124 de kilometri.", "Se varsă în cele din urmă în Selenga."],
      en: ["Has a length of 1,124 kilometers.", "Eventually empties into the Selenge."]
    }
  },
  {
    id: "gobi-gurvansaikhan-nature-v2",
    type: "national-park",
    parent: "MN-053",
    coords: [103.0000, 43.6000],
    name: {
      de: "Gobi-Gurwansaichan-Nationalpark",
      hu: "Góbi Gurvanszajhan Nemzeti Park",
      ro: "Parcul Național Gobi Gurvansaikhan",
      en: "Gobi Gurvansaikhan National Park"
    },
    description: {
      de: "Der größte Nationalpark der Mongolei schützt eine einzigartige Wüsten- und Berglandschaft, in der seltene Tierarten wie der Schneeleopard heimisch sind.",
      hu: "Mongólia legnagyobb nemzeti parkja egyedülálló sivatagi és hegyvidéki tájat véd, ahol ritka állatfajok, például a hópárduc élnek.",
      ro: "Cel mai mare parc național din Mongolia protejează un peisaj unic de deșert și munte, unde trăiesc specii rare precum leopardul de zăpadă.",
      en: "Mongolia's largest national park protects a unique desert and mountain landscape, home to rare species such as the snow leopard."
    },
    facts: {
      de: ["Erstreckt sich über fast 27.000 Quadratkilometer.", "Bedeutet übersetzt 'Die drei Schönen der Gobi'."],
      hu: ["Majdnem 27 000 négyzetkilométeren terül el.", "Neve magyarul azt jelenti: 'A Góbi három szépsége'."],
      ro: ["Se întinde pe aproape 27.000 de kilometri pătrați.", "Numele său se traduce prin „Cele trei frumuseți ale deșertului Gobi”."],
      en: ["Covers nearly 27,000 square kilometers.", "Its name translates to 'The Three Beauties of the Gobi'."]
    }
  },
  {
    id: "uvs-lake-nature-v2",
    type: "lake",
    parent: "MN-046",
    coords: [92.4000, 50.3333],
    name: {
      de: "Uws-Nuur",
      hu: "Uvsz-tó",
      ro: "Lacul Uvs",
      en: "Uvs Lake"
    },
    description: {
      de: "Dieser riesige, flache Salzsee im Nordwesten der Mongolei ist das Zentrum eines abflusslosen Beckens von extremer klimatischer Bedeutung.",
      hu: "Ez a hatalmas, sekély sós tó Mongólia északnyugati részén egy szélsőséges éghajlati jelentőségű, lefolyástalan medence központja.",
      ro: "Acest imens lac sărat puțin adânc din nord-vestul Mongoliei este centrul unui bazin endoreic de o importanță climatică extremă.",
      en: "This vast, shallow salt lake in northwestern Mongolia is the center of an endorheic basin of extreme climatic importance."
    },
    facts: {
      de: ["Flächenmäßig der größte See der Mongolei.", "Seine Umgebung ist ein UNESCO-Weltnaturerbe."],
      hu: ["Területét tekintve Mongólia legnagyobb tava.", "Környéke az UNESCO Világörökség része."],
      ro: ["Cel mai mare lac din Mongolia ca suprafață.", "Împrejurimile sale sunt incluse în Patrimoniul Mondial UNESCO."],
      en: ["The largest lake in Mongolia by surface area.", "Its surroundings are a UNESCO World Heritage Site."]
    }
  },
  {
    id: "tuul-river-nature-v2",
    type: "river",
    parent: "MN-1",
    coords: [106.9167, 47.9167],
    name: {
      de: "Tuul-Fluss",
      hu: "Túl-folyó",
      ro: "Râul Tuul",
      en: "Tuul River"
    },
    description: {
      de: "Dieser heilige Fluss schlängelt sich durch den Khentii-Gebirgszug und fließt direkt durch die Hauptstadt Ulaanbaatar.",
      hu: "Ez a szent folyó a Hentij-hegységen kanyarog keresztül, és egyenesen a fővároson, Ulánbátoron folyik át.",
      ro: "Acest râu sacru șerpuiește prin lanțul muntos Khentii și curge direct prin capitala Ulaanbaatar.",
      en: "This sacred river meanders through the Khentii Mountains and flows directly through the capital city of Ulaanbaatar."
    },
    facts: {
      de: ["Hat eine Länge von 704 Kilometern.", "Sein Wasser ist von November bis Mitte April gefroren."],
      hu: ["Hossza 704 kilométer.", "Vize novembertől április közepéig be van fagyva."],
      ro: ["Are o lungime de 704 de kilometri.", "Apa sa este înghețată din noiembrie până la jumătatea lunii aprilie."],
      en: ["Has a length of 704 kilometers.", "Its waters are frozen from November to mid-April."]
    }
  },
  {
    id: "kharkhiraa-mountain-nature-v2",
    type: "mountain",
    parent: "MN-046",
    coords: [91.5000, 49.5000],
    name: {
      de: "Charchiraa-Berg",
      hu: "Harhiraa-hegy",
      ro: "Muntele Kharkhiraa",
      en: "Kharkhiraa Mountain"
    },
    description: {
      de: "Ein markanter Doppelgipfel im Altai-Gebirge, der von ausgedehnten Gletschern und tiefen Tälern geprägt ist.",
      hu: "Az Altaj-hegység egyik jellegzetes ikercsúcsa, amelyet kiterjedt gleccserek és mély völgyek jellemeznek.",
      ro: "Un vârf dublu proeminent în Munții Altai, caracterizat prin ghețari extinși și văi adânci.",
      en: "A prominent twin peak in the Altai Mountains, characterized by extensive glaciers and deep valleys."
    },
    facts: {
      de: ["Der Hauptgipfel erreicht eine Höhe von über 4000 Metern.", "Beliebt bei Bergsteigern und Abenteurern."],
      hu: ["A főcsúcs magassága meghaladja a 4000 métert.", "Népszerű a hegymászók és kalandorok körében."],
      ro: ["Vârful principal atinge o înălțime de peste 4000 de metri.", "Popular printre alpiniști și aventurieri."],
      en: ["The main peak reaches an elevation of over 4,000 meters.", "Popular with mountaineers and adventurers."]
    }
  },
  {
    id: "otgontenger-mountain-nature-v2",
    type: "mountain",
    parent: "MN-055",
    coords: [97.5500, 47.6167],
    name: {
      de: "Otgontenger",
      hu: "Otgontenger",
      ro: "Otgontenger",
      en: "Otgontenger"
    },
    description: {
      de: "Der höchste Berg im Changai-Gebirge ist ein verehrter, heiliger Gipfel, dessen schneebedeckte Kuppe schon von weitem sichtbar ist.",
      hu: "A Hangáj-hegység legmagasabb hegye egy tisztelt, szent csúcs, amelynek hóval borított teteje már messziről látható.",
      ro: "Cel mai înalt munte din Munții Khangai este un vârf sacru și venerat, a cărui creastă acoperită de zăpadă este vizibilă de departe.",
      en: "The highest mountain in the Khangai Mountains is a revered, sacred peak whose snow-capped summit is visible from afar."
    },
    facts: {
      de: ["Ist 4008 Meter hoch.", "Er ist einer der drei heiligsten Berge der Mongolei."],
      hu: ["4008 méter magas.", "Mongólia három legszentebb hegyének egyike."],
      ro: ["Are o înălțime de 4008 metri.", "Este unul dintre cei trei munți sacri ai Mongoliei."],
      en: ["Is 4,008 meters high.", "It is one of the three most sacred mountains in Mongolia."]
    }
  },
  {
    id: "khar-us-lake-nature-v2",
    type: "lake",
    parent: "MN-043",
    coords: [93.3000, 48.0000],
    name: {
      de: "Khar-Us-See",
      hu: "Har-Usz-tó",
      ro: "Lacul Khar-Us",
      en: "Khar-Us Lake"
    },
    description: {
      de: "Dieser 'Schwarze Wassersee' im Westen der Mongolei ist durch eine große Schilfinsel in zwei Teile geteilt und ein Paradies für Wasservögel.",
      hu: "Ezt a nyugat-mongóliai 'Fekete vizű tavat' egy nagy nádassziget osztja ketté, és igazi paradicsom a vízimadarak számára.",
      ro: "Acest „Lac cu Apă Neagră” din vestul Mongoliei este împărțit în două de o mare insulă de stuf și este un paradis pentru păsările de apă.",
      en: "This 'Black Water Lake' in western Mongolia is divided into two by a large reed island and is a paradise for water birds."
    },
    facts: {
      de: ["Der See beheimatet eine riesige Kormoran-Kolonie.", "Erfriert im Winter komplett."],
      hu: ["A tó hatalmas kárókatona-kolóniának ad otthont.", "Télen teljesen befagy."],
      ro: ["Lacul găzduiește o uriașă colonie de cormorani.", "Îngheață complet în timpul iernii."],
      en: ["The lake is home to a huge cormorant colony.", "Freezes completely in winter."]
    }
  },
  {
    id: "onon-river-nature-v2",
    type: "river",
    parent: "MN-039",
    coords: [110.5000, 49.0000],
    name: {
      de: "Onon-Fluss",
      hu: "Onon-folyó",
      ro: "Râul Onon",
      en: "Onon River"
    },
    description: {
      de: "Der Fluss entspringt im Khentii-Gebirge und ist eng mit der Legende von Dschingis Khan verbunden, der an seinen Ufern geboren sein soll.",
      hu: "A folyó a Hentij-hegységben ered, és szorosan kötődik Dzsingisz kán legendájához, aki a mondák szerint a partján született.",
      ro: "Râul izvorăște în Munții Khentii și este strâns legat de legenda lui Ginghis Han, care s-ar fi născut pe malurile sale.",
      en: "The river originates in the Khentii Mountains and is closely linked to the legend of Genghis Khan, who is said to have been born on its shores."
    },
    facts: {
      de: ["Fließt weiter in das russische Amur-Becken.", "Ist eines der wenigen unberührten Flusssysteme der Region."],
      hu: ["Tovább folyik az orosz Amur-medencébe.", "A régió egyik ritka, érintetlen folyórendszere."],
      ro: ["Curge mai departe în bazinul rus Amur.", "Este unul dintre puținele sisteme fluviale neatinse din regiune."],
      en: ["Flows further into the Russian Amur basin.", "Is one of the few pristine river systems in the region."]
    }
  },
  {
    id: "khar-lake-zavkhan-nature-v2",
    type: "lake",
    parent: "MN-057",
    coords: [96.0500, 48.3333],
    name: {
      de: "Khar-Nuur (Zavkhan)",
      hu: "Har-tó (Zavhan)",
      ro: "Lacul Khar (Zavkhan)",
      en: "Khar Lake (Zavkhan)"
    },
    description: {
      de: "Eingebettet in massive Sanddünen, bietet dieser magische blaue See einen dramatischen Kontrast zur trockenen Wüstenlandschaft.",
      hu: "A hatalmas homokdűnék közé ékelődő varázslatos kék tó drámai kontrasztot alkot a száraz sivatagi tájjal.",
      ro: "Înconjurat de dune de nisip masive, acest lac albastru magic oferă un contrast dramatic cu peisajul arid de deșert.",
      en: "Nestled among massive sand dunes, this magical blue lake offers a dramatic contrast to the arid desert landscape."
    },
    facts: {
      de: ["Liegt am Rande der Bor-Khyar-Sanddünen.", "Wird von unterirdischen Quellen gespeist."],
      hu: ["A Bor-Khyar homokdűnék szélén található.", "Föld alatti források táplálják."],
      ro: ["Este situat la marginea dunelor de nisip Bor-Khyar.", "Este alimentat de izvoare subterane."],
      en: ["Located on the edge of the Bor-Khyar sand dunes.", "Is fed by underground springs."]
    }
  },
  {
    id: "selenge-river-nature-v2",
    type: "river",
    parent: "MN-049",
    coords: [102.5000, 49.3000],
    name: {
      de: "Selenge-Fluss",
      hu: "Szelenga-folyó",
      ro: "Râul Selenga",
      en: "Selenge River"
    },
    description: {
      de: "Ein mächtiger Wasserlauf, der den größten Teil der nördlichen Mongolei entwässert und entscheidend für das Ökosystem des Baikalsees ist.",
      hu: "Egy hatalmas vízfolyás, amely Észak-Mongólia nagy részét lecsapolja, és kulcsfontosságú a Bajkál-tó ökoszisztémája szempontjából.",
      ro: "Un curs de apă puternic, care drenează cea mai mare parte a Mongoliei de Nord și este crucial pentru ecosistemul Lacului Baikal.",
      en: "A mighty watercourse that drains most of northern Mongolia and is crucial to the ecosystem of Lake Baikal."
    },
    facts: {
      de: ["Trägt fast die Hälfte des Zuflusses des Baikalsees bei.", "Fließt durch weite, fruchtbare Täler."],
      hu: ["A Bajkál-tó vízhozamának majdnem felét adja.", "Széles, termékeny völgyeken folyik keresztül."],
      ro: ["Contribuie cu aproape jumătate din fluxul de apă al Lacului Baikal.", "Curge prin văi largi și fertile."],
      en: ["Contributes almost half of Lake Baikal's inflow.", "Flows through wide, fertile valleys."]
    }
  },
  {
    id: "khangai-mountains-nature-v2",
    type: "mountain",
    parent: "MN-073",
    coords: [100.0000, 47.5000],
    name: {
      de: "Changai-Gebirge",
      hu: "Hangáj-hegység",
      ro: "Munții Khangai",
      en: "Khangai Mountains"
    },
    description: {
      de: "Dieses grüne und wasserreiche Gebirgsmassiv im Zentrum des Landes zeichnet sich durch weite Almwiesen und dichte Lärchenwälder aus.",
      hu: "Az ország közepén fekvő zöld és vízben gazdag hegyvidéket kiterjedt alpesi rétek és sűrű vörösfenyőerdők jellemzik.",
      ro: "Acest masiv muntos verde și bogat în apă din centrul țării se caracterizează prin pajiști alpine întinse și păduri dese de zadă.",
      en: "This green and water-rich mountain range in the center of the country is characterized by vast alpine meadows and dense larch forests."
    },
    facts: {
      de: ["Ist der Ursprung vieler großer Flüsse der Mongolei.", "Bekannt für seine sanften, abgerundeten Gipfel."],
      hu: ["Mongólia számos nagy folyójának forrásvidéke.", "Szelíd, lekerekített csúcsairól ismert."],
      ro: ["Este sursa multor râuri mari din Mongolia.", "Cunoscut pentru vârfurile sale blânde și rotunjite."],
      en: ["Is the source of many of Mongolia's major rivers.", "Known for its gentle, rounded peaks."]
    }
  },
  {
    id: "khentii-mountains-nature-v2",
    type: "mountain",
    parent: "MN-039",
    coords: [108.5000, 48.5000],
    name: {
      de: "Khentii-Gebirge",
      hu: "Hentij-hegység",
      ro: "Munții Khentii",
      en: "Khentii Mountains"
    },
    description: {
      de: "Eine raue, schwer zugängliche Bergkette im Nordosten, die als natürliche Barriere zwischen der sibirischen Taiga und der asiatischen Steppe wirkt.",
      hu: "Zord, nehezen megközelíthető hegység északkeleten, amely természetes határként szolgál a szibériai tajga és az ázsiai sztyeppe között.",
      ro: "Un lanț muntos accidentat și greu accesibil în nord-est, care acționează ca o barieră naturală între taigaua siberiană și stepa asiatică.",
      en: "A rugged, inaccessible mountain range in the northeast that acts as a natural barrier between the Siberian taiga and the Asian steppe."
    },
    facts: {
      de: ["Gilt als Heimat des heiligen Berges Burchan Chaldun.", "Bietet Lebensraum für Braunbären und Wölfe."],
      hu: ["A szent Burhan Haldun hegy otthonaként tartják számon.", "Barna medvék és farkasok élőhelye."],
      ro: ["Considerat a fi casa muntelui sacru Burkhan Khaldun.", "Oferă habitat pentru urșii bruni și lupi."],
      en: ["Considered the home of the sacred mountain Burkhan Khaldun.", "Provides habitat for brown bears and wolves."]
    }
  },
  {
    id: "buir-lake-nature-v2",
    type: "lake",
    parent: "MN-061",
    coords: [117.8333, 47.8000],
    name: {
      de: "Buir-See",
      hu: "Bujr-tó",
      ro: "Lacul Buir",
      en: "Buir Lake"
    },
    description: {
      de: "Ein großer Süßwassersee im äußersten Osten der Mongolei, der sich über die Grenze nach China erstreckt und reich an Fischbeständen ist.",
      hu: "Nagy édesvizű tó Mongólia legkeletibb részén, amely átnyúlik a kínai határon, és rendkívül gazdag halállománnyal rendelkezik.",
      ro: "Un mare lac de apă dulce în estul îndepărtat al Mongoliei, care se întinde peste granița în China și este bogat în resurse de pește.",
      en: "A large freshwater lake in the far east of Mongolia that extends across the border into China and is rich in fish stocks."
    },
    facts: {
      de: ["Seine Sandstrände sind ein beliebtes lokales Ausflugsziel.", "Der See friert im Winter fast bis zum Grund zu."],
      hu: ["Homokos strandjai népszerű helyi kirándulóhelyek.", "A tó télen szinte a fenekéig befagy."],
      ro: ["Plajele sale de nisip sunt o destinație populară pentru excursii locale.", "Lacul îngheață iarna aproape până la fund."],
      en: ["Its sandy beaches are a popular local excursion destination.", "The lake freezes almost to the bottom in winter."]
    }
  },
  {
    id: "ikh-bogd-mountain-nature-v2",
    type: "mountain",
    parent: "MN-069",
    coords: [100.2333, 44.9833],
    name: {
      de: "Ikh-Bogd-Uul",
      hu: "Ih-Bogd-hegy",
      ro: "Muntele Ikh Bogd",
      en: "Ikh Bogd Mountain"
    },
    description: {
      de: "Der höchste Gipfel des Gobi-Altai-Gebirges erhebt sich majestätisch aus der umliegenden Halbwüste und bietet spektakuläre Ausblicke.",
      hu: "A Góbi-Altaj hegység legmagasabb csúcsa fenségesen emelkedik ki a környező félsivatagból, és látványos kilátást nyújt.",
      ro: "Cel mai înalt vârf din Munții Gobi-Altai se înalță maiestuos din semideșertul înconjurător și oferă priveliști spectaculoase.",
      en: "The highest peak of the Gobi-Altai Mountains rises majestically from the surrounding semi-desert and offers spectacular views."
    },
    facts: {
      de: ["Erreicht eine Höhe von 3957 Metern.", "Wurde 1957 von einem schweren Erdbeben erschüttert."],
      hu: ["Magassága eléri a 3957 métert.", "1957-ben egy erős földrengés rázta meg."],
      ro: ["Atinge o înălțime de 3957 metri.", "A fost zguduit de un cutremur sever în 1957."],
      en: ["Reaches a height of 3,957 meters.", "Was shaken by a severe earthquake in 1957."]
    }
  },
  {
    id: "mongolian-altai-nature-v2",
    type: "mountain",
    parent: "MN-043",
    coords: [92.0000, 47.0000],
    name: {
      de: "Mongolischer Altai",
      hu: "Mongol-Altaj",
      ro: "Altaiul Mongol",
      en: "Mongolian Altai"
    },
    description: {
      de: "Ein massives, vergletschertes Gebirgssystem, das die westliche Grenze der Mongolei prägt und von extremen Temperaturschwankungen dominiert wird.",
      hu: "Hatalmas, eljegesedett hegyrendszer, amely Mongólia nyugati határát alkotja, és extrém hőmérséklet-ingadozások jellemzik.",
      ro: "Un sistem muntos masiv, cu ghețari, care domină granița vestică a Mongoliei și este caracterizat de fluctuații extreme de temperatură.",
      en: "A massive, glaciated mountain system that defines the western border of Mongolia and is dominated by extreme temperature fluctuations."
    },
    facts: {
      de: ["Erstreckt sich über 900 Kilometer Länge.", "Heimat von Argalis und sibirischen Steinböcken."],
      hu: ["Több mint 900 kilométer hosszan nyúlik el.", "Az argali juhok és a szibériai kőszáli kecskék otthona."],
      ro: ["Se întinde pe o lungime de 900 de kilometri.", "Găzduiește mufloni asiatici și ibecși siberieni."],
      en: ["Extends over 900 kilometers in length.", "Home to argalis and Siberian ibexes."]
    }
  },
  {
    id: "kherlen-river-nature-v2",
    type: "river",
    parent: "MN-065",
    coords: [111.0000, 47.5000],
    name: {
      de: "Cherlen-Fluss",
      hu: "Kerülen-folyó",
      ro: "Râul Kherlen",
      en: "Kherlen River"
    },
    description: {
      de: "Einer der drei großen Flüsse der Ostmongolei, der durch weite Steppenlandschaften mäandert und wichtig für die nomadische Viehzucht ist.",
      hu: "Kelet-Mongólia három nagy folyójának egyike, amely kiterjedt sztyeppéken kanyarog, és létfontosságú a nomád állattartás számára.",
      ro: "Unul dintre cele trei mari râuri din Mongolia de Est, care șerpuiește prin peisaje vaste de stepă și este important pentru creșterea nomadă a animalelor.",
      en: "One of the three major rivers of eastern Mongolia, it meanders through vast steppe landscapes and is important for nomadic livestock farming."
    },
    facts: {
      de: ["Über 1200 Kilometer lang.", "Er mündet schließlich im fernen Hulun-Nuur in China."],
      hu: ["Több mint 1200 kilométer hosszú.", "Végül a távoli kínai Hulun-tóba ömlik."],
      ro: ["Peste 1200 de kilometri lungime.", "Se varsă în cele din urmă în îndepărtatul lac Hulun din China."],
      en: ["Over 1,200 kilometers long.", "It eventually empties into the distant Hulun Lake in China."]
    }
  },
  {
    id: "khan-khentii-forest-nature-v2",
    type: "forest",
    parent: "MN-039",
    coords: [107.5000, 49.2000],
    name: {
      de: "Chan-Chentii-Wald",
      hu: "Han-Hentij Erdő",
      ro: "Pădurea Khan Khentii",
      en: "Khan Khentii Forest"
    },
    description: {
      de: "Ein dichtes, naturbelassenes Nadelwaldgebiet im Norden der Mongolei, das den Übergang von der mongolischen Steppe zur sibirischen Taiga markiert.",
      hu: "Sűrű, érintetlen tűlevelű erdőség Észak-Mongóliában, amely a mongol sztyeppe és a szibériai tajga közötti átmenetet jelzi.",
      ro: "O pădure densă și naturală de conifere în nordul Mongoliei, care marchează tranziția de la stepa mongolă la taigaua siberiană.",
      en: "A dense, natural coniferous forest area in northern Mongolia that marks the transition from the Mongolian steppe to the Siberian taiga."
    },
    facts: {
      de: ["Ist ein streng geschütztes Reservat.", "Wird fast ausschließlich von Birken und Kiefern dominiert."],
      hu: ["Szigorúan védett rezervátum.", "Szinte kizárólag nyírfák és fenyők uralják."],
      ro: ["Este o rezervație strict protejată.", "Este dominat aproape exclusiv de mesteceni și pini."],
      en: ["Is a strictly protected reserve.", "Is dominated almost exclusively by birch and pine trees."]
    }
  },
  {
    id: "egiin-gol-nature-v2",
    type: "river",
    parent: "MN-041",
    coords: [103.2000, 49.5000],
    name: {
      de: "Egiin-Gol",
      hu: "Egiin-Gol",
      ro: "Râul Egiin",
      en: "Egiin Gol"
    },
    description: {
      de: "Der einzige Abfluss des Chöwsgöl-Sees ist ein kristallklarer, reißender Fluss, der sich durch malerische, bewaldete Täler windet.",
      hu: "A Khövsgöl-tó egyetlen lefolyása egy kristálytiszta, sebes vizű folyó, amely festői, erdős völgyeken kanyarog keresztül.",
      ro: "Singura ieșire a Lacului Khövsgöl este un râu cristalin, vijelios, care șerpuiește prin văi împădurite și pitorești.",
      en: "The only outlet of Lake Khövsgöl is a crystal-clear, torrential river that winds its way through picturesque, wooded valleys."
    },
    facts: {
      de: ["Er ist etwa 475 Kilometer lang.", "Gilt als einer der besten Orte zum Fliegenfischen auf Taimen."],
      hu: ["Körülbelül 475 kilométer hosszú.", "A tajmen horgászat egyik legjobb helyszíneként tartják számon."],
      ro: ["Are o lungime de aproximativ 475 de kilometri.", "Este considerat unul dintre cele mai bune locuri pentru pescuitul la muscă al lostriței siberiene."],
      en: ["It is about 475 kilometers long.", "Considered one of the best spots for fly fishing for taimen."]
    }
  },
  {
    id: "bogd-khan-uul-forest-nature-v2",
    type: "forest",
    parent: "MN-047",
    coords: [106.9833, 47.8000],
    name: {
      de: "Bogd-Khan-Uul-Wald",
      hu: "Bogd-Kán-Uul Erdő",
      ro: "Pădurea Bogd Khan Uul",
      en: "Bogd Khan Uul Forest"
    },
    description: {
      de: "Das weltweit älteste offiziell anerkannte Naturschutzgebiet bietet ein dichtes Mosaik aus sibirischen Zedern und Lärchen direkt südlich der Hauptstadt.",
      hu: "A világ legrégebbi hivatalosan elismert természetvédelmi területe szibériai cédrusok és vörösfenyők sűrű mozaikját kínálja közvetlenül a fővárostól délre.",
      ro: "Cea mai veche rezervație naturală recunoscută oficial din lume oferă un mozaic dens de cedri siberieni și zade, chiar la sud de capitală.",
      en: "The world's oldest officially recognized nature reserve offers a dense mosaic of Siberian cedars and larches just south of the capital."
    },
    facts: {
      de: ["Steht bereits seit 1778 unter Schutz.", "Bietet Lebensraum für Rotwild und Wildschweine."],
      hu: ["Már 1778 óta védelem alatt áll.", "Gímszarvasok és vaddisznók élőhelye."],
      ro: ["Este sub protecție din 1778.", "Oferă habitat pentru cerbi și mistreți."],
      en: ["Has been under protection since 1778.", "Provides habitat for red deer and wild boar."]
    }
  }
];
