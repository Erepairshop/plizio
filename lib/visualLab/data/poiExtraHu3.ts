import type { POI } from "./poi";

export const poiExtraHu3: POI[] = [
  // HU-BU: Budapest (3G, 1LN, 1W)
  {
    id: "historical-aquincum-museum-extra",
    type: "historical",
    parent: "HU-BU",
    coords: [19.049, 47.564],
    name: { de: "Aquincum Museum", hu: "Aquincumi Múzeum", ro: "Muzeul Aquincum", en: "Aquincum Museum" },
    description: {
      de: "Reste der antiken römischen Stadt Aquincum, einst Hauptstadt der Provinz Pannonia.",
      hu: "Az ókori római Aquincum városának maradványai, amely egykor Pannónia provincia központja volt.",
      ro: "Vestigiile vechiului oraș roman Aquincum, odinioară capitala provinciei Pannonia.",
      en: "Remains of the ancient Roman city of Aquincum, once the center of Pannonia province."
    },
    facts: {
      de: ["Im 1. Jahrhundert gegründet.", "Besitzt ein gut erhaltenes Amphitheater."],
      hu: ["Az 1. században alapították.", "Jól megőrzött amfiteátrummal rendelkezik."],
      ro: ["Fondat în secolul I.", "Deține un amfiteatru bine conservat."],
      en: ["Founded in the 1st century.", "Features a well-preserved amphitheater."]
    }
  },
  {
    id: "historical-vasarcsarnok-extra",
    type: "historical",
    parent: "HU-BU",
    coords: [19.058, 47.487],
    name: { de: "Große Markthalle", hu: "Nagy Vásárcsarnok", ro: "Marea Hală Centrală", en: "Great Market Hall" },
    description: {
      de: "Die größte und schönste Markthalle in Budapest, bekannt für ihre Architektur und lokale Produkte.",
      hu: "Budapest legnagyobb és legszebb vásárcsarnoka, híres építészetéről és helyi termékeiről.",
      ro: "Cea mai mare și mai frumoasă hală de piață din Budapesta, celebră pentru arhitectură și produse locale.",
      en: "Budapest's largest and most beautiful market hall, famous for its architecture and local products."
    },
    facts: {
      de: ["1897 eröffnet.", "Dach mit bunten Zsolnay-Ziegeln."],
      hu: ["1897-ben nyílt meg.", "Zsolnay-cserepes tetőszerkezet."],
      ro: ["Deschisă în 1897.", "Acoperiș cu țigle colorate Zsolnay."],
      en: ["Opened in 1897.", "Roof decorated with colorful Zsolnay tiles."]
    }
  },
  {
    id: "historical-operahaz-extra",
    type: "historical",
    parent: "HU-BU",
    coords: [19.058, 47.502],
    name: { de: "Ungarische Staatsoper", hu: "Magyar Állami Operaház", ro: "Opera de Stat Maghiară", en: "Hungarian State Opera" },
    description: {
      de: "Ein Meisterwerk der Neorenaissance an der Andrássy-Allee, entworfen von Miklós Ybl.",
      hu: "A neoreneszánsz építészet remekműve az Andrássy úton, Ybl Miklós tervezte.",
      ro: "O capodoperă a arhitecturii neorenascentiste pe Bulevardul Andrássy, proiectată de Miklós Ybl.",
      en: "A masterpiece of Neo-Renaissance architecture on Andrássy Avenue, designed by Miklós Ybl."
    },
    facts: {
      de: ["1884 eingeweiht.", "Hervorragende Akustik."],
      hu: ["1884-ben avatták fel.", "Kiváló akusztikájáról ismert."],
      ro: ["Inaugurată în 1884.", "Acoustică excelentă."],
      en: ["Inaugurated in 1884.", "Famous for its excellent acoustics."]
    }
  },
  {
    id: "animal-habitat-allatkert-bp-extra",
    type: "animal-habitat",
    parent: "HU-BU",
    coords: [19.077, 47.518],
    name: { de: "Budapester Zoo", hu: "Fővárosi Állat- és Növénykert", ro: "Grădina Zoologică din Budapesta", en: "Budapest Zoo and Botanical Garden" },
    description: {
      de: "Einer der ältesten Zoos der Welt, gelegen im Stadtwäldchen von Budapest.",
      hu: "A világ egyik legrégebbi állatkertje, amely a Városligetben található.",
      ro: "Una dintre cele mai vechi grădini zoologice din lume, situată în Parcul Orașului.",
      en: "One of the oldest zoos in the world, located in the City Park of Budapest."
    },
    facts: {
      de: ["1866 gegründet.", "Über 1000 Tierarten."],
      hu: ["1866-ban alapították.", "Több mint 1000 állatfaj látható."],
      ro: ["Fondată în 1866.", "Peste 1000 de specii de animale."],
      en: ["Founded in 1866.", "Home to over 1000 animal species."]
    }
  },
  {
    id: "port-csepel-kikoto-extra",
    type: "port",
    parent: "HU-BU",
    coords: [19.068, 47.435],
    name: { de: "Freihafen von Csepel", hu: "Csepeli Szabadkikötő", ro: "Portul Liber Csepel", en: "Csepel Free Port" },
    description: {
      de: "Der wichtigste Binnenhafen Ungarns an der Donau, ein Logistikzentrum von europäischer Bedeutung.",
      hu: "Magyarország legfontosabb dunai kikötője, európai jelentőségű logisztikai központ.",
      ro: "Cel mai important port dunărean al Ungariei, un centru logistic de importanță europeană.",
      en: "Hungary's most important Danube port, a logistics hub of European significance."
    },
    facts: {
      de: ["1928 erbaut.", "Größter Hafen des Landes."],
      hu: ["1928-ban épült.", "Az ország legnagyobb kikötője."],
      ro: ["Construit în 1928.", "Cel mai mare port din țară."],
      en: ["Built in 1928.", "The largest port in the country."]
    }
  },

  // HU-BA: Baranya (3G, 1LN, 1W)
  {
    id: "historical-siklosi-var-extra",
    type: "historical",
    parent: "HU-BA",
    coords: [18.297, 45.852],
    name: { de: "Burg Siklós", hu: "Siklósi vár", ro: "Cetatea Siklós", en: "Siklós Castle" },
    description: {
      de: "Eine der am besten erhaltenen Burgen Ungarns, die seit dem 13. Jahrhundert bewohnt ist.",
      hu: "Magyarország egyik legépszerűbb vára, amely a 13. század óta lakott.",
      ro: "Una dintre cele mai bine conservate cetăți din Ungaria, locuită încă din secolul al XIII-lea.",
      en: "One of Hungary's best-preserved castles, inhabited since the 13th century."
    },
    facts: {
      de: ["Prächtige Kapelle.", "Einst Sitz mächtiger Adelsfamilien."],
      hu: ["Pompás kápolnával rendelkezik.", "Hatalmas főúri családok székhelye volt."],
      ro: ["Capelă superbă.", "Fost sediu al unor familii nobiliare puternice."],
      en: ["Splendid chapel.", "Former seat of powerful noble families."]
    }
  },
  {
    id: "historical-mohacsi-emlekhely-extra",
    type: "historical",
    parent: "HU-BA",
    coords: [18.648, 45.940],
    name: { de: "Gedenkstätte von Mohács", hu: "Mohácsi Nemzeti Emlékhely", ro: "Locul Memorial Național Mohács", en: "Mohács National Memorial Site" },
    description: {
      de: "Gedenkpark an die Schlacht von 1526, die das Schicksal Ungarns für Jahrhunderte bestimmte.",
      hu: "Az 1526-os csata emlékparkja, amely évszázadokra meghatározta Magyarország sorsát.",
      ro: "Parc memorial dedicat bătăliei din 1526, care a decis soarta Ungariei pentru secole.",
      en: "Memorial park of the 1526 battle that determined Hungary's fate for centuries."
    },
    facts: {
      de: ["Über 1700 Holzstatuen.", "Ort der tragischen Niederlage."],
      hu: ["Több mint 1700 fa szobor.", "A tragikus vereség helyszíne."],
      ro: ["Peste 1700 de statui din lemn.", "Locul înfrângerii tragice."],
      en: ["Over 1700 wooden statues.", "Site of the tragic defeat."]
    }
  },
  {
    id: "historical-pecsi-szekesegyhaz-extra",
    type: "historical",
    parent: "HU-BA",
    coords: [18.223, 46.079],
    name: { de: "Kathedrale von Pécs", hu: "Pécsi Székesegyház", ro: "Catedrala din Pécs", en: "Pécs Cathedral" },
    description: {
      de: "Die Basilika St. Peter und Paul ist das Wahrzeichen von Pécs mit vier markanten Türmen.",
      hu: "Szent Péter és Szent Pál Bazilika, Pécs jelképe négy jellegzetes tornyával.",
      ro: "Bazilica Sf. Petru și Pavel este simbolul orașului Pécs, cu cele patru turnuri distinctive.",
      en: "The Basilica of Sts. Peter and Paul is the landmark of Pécs with its four distinctive towers."
    },
    facts: {
      de: ["Romanische Fundamente.", "Prächtige Fresken im Inneren."],
      hu: ["Román kori alapok.", "Belső terét pazar freskók díszítik."],
      ro: ["Fundații romanice.", "Fresce superbe în interior."],
      en: ["Romanesque foundations.", "Interior decorated with magnificent frescoes."]
    }
  },
  {
    id: "animal-habitat-pecsi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-BA",
    coords: [18.223, 46.096],
    name: { de: "Zoo Pécs", hu: "Pécsi Állatkert", ro: "Grădina Zoologică din Pécs", en: "Pécs Zoo" },
    description: {
      de: "Ein malerischer Zoo am Hang des Mecsek-Gebirges mit einem großen Aquarium.",
      hu: "Festői állatkert a Mecsek oldalában, modern akvárium-terráriummal.",
      ro: "O grădină zoologică pitorească pe versantul munților Mecsek, cu un acvariu mare.",
      en: "A scenic zoo on the slopes of the Mecsek mountains, featuring a large aquarium."
    },
    facts: {
      de: ["1960 gegründet.", "Tolle Aussicht auf die Stadt."],
      hu: ["1960-ban alapították.", "Nagyszerű kilátás nyílik a városra."],
      ro: ["Fondată în 1960.", "O priveliște minunată asupra orașului."],
      en: ["Founded in 1960.", "Offers a great view over the city."]
    }
  },
  {
    id: "industry-beremendi-cementgyar-extra",
    type: "industry",
    parent: "HU-BA",
    coords: [18.441, 45.811],
    name: { de: "Zementwerk Beremend", hu: "Beremendi Cementgyár", ro: "Fabrica de Ciment Beremend", en: "Beremend Cement Works" },
    description: {
      de: "Eines der größten und modernsten Zementwerke Ungarns im südlichsten Teil des Landes.",
      hu: "Magyarország egyik legnagyobb és legmodernebb cementgyára az ország legdélibb részén.",
      ro: "Una dintre cele mai mari și moderne fabrici de ciment din Ungaria, în sudul extrem al țării.",
      en: "One of Hungary's largest and most modern cement plants in the southernmost part of the country."
    },
    facts: {
      de: ["Große Kalksteinbrüche.", "Wichtiger regionaler Arbeitgeber."],
      hu: ["Hatalmas mészkőbányák.", "Fontos regionális munkáltató."],
      ro: ["Cariere uriașe de calcar.", "Angajator regional important."],
      en: ["Huge limestone quarries.", "Important regional employer."]
    }
  },

  // HU-BK: Bács-Kiskun (3G, 1LN, 1W)
  {
    id: "historical-kalocsai-szekesegyhaz-extra",
    type: "historical",
    parent: "HU-BK",
    coords: [18.972, 46.529],
    name: { de: "Kathedrale von Kalocsa", hu: "Kalocsai Érseki Székesegyház", ro: "Catedrala din Kalocsa", en: "Kalocsa Cathedral" },
    description: {
      de: "Ein prächtiges Barockbauwerk, Sitz eines der ältesten Erzbistümer Ungarns.",
      hu: "Pompás barokk épület, Magyarország egyik legrégebbi érsekségének székhelye.",
      ro: "O clădire barocă impunătoare, sediul uneia dintre cele mai vechi arhiepiscopii din Ungaria.",
      en: "A magnificent Baroque building, the seat of one of Hungary's oldest archdioceses."
    },
    facts: {
      de: ["Berühmte Orgel.", "Bischofspalast nebenan."],
      hu: ["Híres orgonával rendelkezik.", "Mellette az Érseki Palota áll."],
      ro: ["Orgă celebră.", "Palatul Arhiepiscopal se află alături."],
      en: ["Famous organ.", "Archiepiscopal Palace stands next to it."]
    }
  },
  {
    id: "historical-kecskemeti-varoshaza-extra",
    type: "historical",
    parent: "HU-BK",
    coords: [19.691, 46.906],
    name: { de: "Rathaus von Kecskemét", hu: "Kecskeméti Városháza", ro: "Primăria din Kecskemét", en: "Kecskemét City Hall" },
    description: {
      de: "Ein herausragendes Beispiel des ungarischen Sezessionsstils, entworfen von Ödön Lechner.",
      hu: "A magyar szecessziós építészet kiemelkedő példája, Lechner Ödön tervezte.",
      ro: "Un exemplu remarcabil al secesiunii maghiare, proiectat de Ödön Lechner.",
      en: "An outstanding example of Hungarian Secessionist architecture, designed by Ödön Lechner."
    },
    facts: {
      de: ["Glockenspiel am Mittag.", "Fassade mit Zsolnay-Keramik."],
      hu: ["Déli harangjátékáról híres.", "Zsolnay kerámiával díszített homlokzat."],
      ro: ["Joc de clopote la prânz.", "Fațadă decorată cu ceramică Zsolnay."],
      en: ["Carillon plays at noon.", "Facade decorated with Zsolnay ceramics."]
    }
  },
  {
    id: "historical-kecskemeti-nagytemplom-extra",
    type: "historical",
    parent: "HU-BK",
    coords: [19.692, 46.907],
    name: { de: "Große Kirche von Kecskemét", hu: "Kecskeméti Nagytemplom", ro: "Marea Biserică din Kecskemét", en: "Kecskemét Great Church" },
    description: {
      de: "Die größte spätbarocke Kirche der Tiefebene, gewidmet dem heiligen Nikolaus.",
      hu: "Az Alföld legnagyobb késő barokk temploma, Szent Miklós tiszteletére szentelve.",
      ro: "Cea mai mare biserică barocă târzie din Câmpia Maghiară, dedicată Sfântului Nicolae.",
      en: "The largest late Baroque church in the Great Plain, dedicated to Saint Nicholas."
    },
    facts: {
      de: ["73 Meter hoher Turm.", "Im 18. Jahrhundert erbaut."],
      hu: ["73 méter magas torony.", "A 18. században épült."],
      ro: ["Turn de 73 de metri înălțime.", "Construită în secolul al XVIII-lea."],
      en: ["73-meter high tower.", "Built in the 18th century."]
    }
  },
  {
    id: "animal-habitat-kecskemeti-vadaskert-extra",
    type: "animal-habitat",
    parent: "HU-BK",
    coords: [19.722, 46.910],
    name: { de: "Zoo Kecskemét", hu: "Kecskeméti Vadaskert", ro: "Grădina Zoologică din Kecskemét", en: "Kecskemét Zoo" },
    description: {
      de: "Ein gemütlicher Zoo, der sich besonders auf die heimische Fauna und Rettungsprojekte konzentriert.",
      hu: "Hangulatos állatkert, amely különös figyelmet fordít a hazai élővilágra és mentési programokra.",
      ro: "O grădină zoologică primitoare, care se concentrează pe fauna locală și proiecte de salvare.",
      en: "A cozy zoo with a special focus on native wildlife and rescue programs."
    },
    facts: {
      de: ["Ideal für Familien.", "Ungarische Haustierrassen."],
      hu: ["Ideális családok számára.", "Őshonos magyar állatfajták."],
      ro: ["Ideal pentru familii.", "Rase de animale domestice maghiare."],
      en: ["Ideal for families.", "Features native Hungarian livestock breeds."]
    }
  },
  {
    id: "industry-mercedes-kecskemet-extra",
    type: "industry",
    parent: "HU-BK",
    coords: [19.740, 46.874],
    name: { de: "Mercedes-Benz Werk Kecskemét", hu: "Mercedes-Benz Gyár Kecskemét", ro: "Fabrica Mercedes-Benz Kecskemét", en: "Mercedes-Benz Plant Kecskemét" },
    description: {
      de: "Eines der modernsten Automobilwerke Europas, wo Premium-Kompaktwagen hergestellt werden.",
      hu: "Európa egyik legmodernebb autógyára, ahol prémium kompakt autók készülnek.",
      ro: "Una dintre cele mai moderne fabrici auto din Europa, unde se produc mașini compacte premium.",
      en: "One of Europe's most modern car plants, producing premium compact automobiles."
    },
    facts: {
      de: ["2012 eröffnet.", "Tausende Mitarbeiter."],
      hu: ["2012-ben nyílt meg.", "Több ezer munkavállalót foglalkoztat."],
      ro: ["Deschisă în 2012.", "Mii de angajați."],
      en: ["Opened in 2012.", "Employs thousands of workers."]
    }
  },

  // HU-BE: Békés (3G, 1LN, 1W)
  {
    id: "historical-gyulai-var-extra",
    type: "historical",
    parent: "HU-BE",
    coords: [21.285, 46.645],
    name: { de: "Burg von Gyula", hu: "Gyulai vár", ro: "Cetatea din Gyula", en: "Gyula Castle" },
    description: {
      de: "Die einzige erhaltene gotische Backsteinburg im Karpatenbecken.",
      hu: "A Kárpát-medence egyetlen épen maradt gótikus tégla vára.",
      ro: "Singura cetate gotică din cărămidă rămasă intactă în Bazinul Carpatic.",
      en: "The only intact Gothic brick castle in the Carpathian Basin."
    },
    facts: {
      de: ["Über 600 Jahre alt.", "Sommertheater im Hof."],
      hu: ["Több mint 600 éves.", "Várszínház működik az udvarán."],
      ro: ["Vechime de peste 600 de ani.", "Teatru de vară în curte."],
      en: ["Over 600 years old.", "Hosts a summer theater in its courtyard."]
    }
  },
  {
    id: "historical-szarvasi-szarazmalom-extra",
    type: "historical",
    parent: "HU-BE",
    coords: [20.551, 46.864],
    name: { de: "Trockenmühle von Szarvas", hu: "Szarvasi szárazmalom", ro: "Moara uscată din Szarvas", en: "Szarvas Horse-drawn Mill" },
    description: {
      de: "Eine seltene, von Pferden angetriebene Mühle aus dem 19. Jahrhundert, heute ein Museum.",
      hu: "Ritka, 19. századi lovas meghajtású malom, amely ma múzeumként működik.",
      ro: "O moară rară din secolul al XIX-lea acționată de cai, astăzi muzeu.",
      en: "A rare 19th-century horse-drawn mill, now functioning as a museum."
    },
    facts: {
      de: ["Voll funktionsfähig.", "Einzigartig in Ungarn."],
      hu: ["Teljesen működőképes.", "Egyedülálló Magyarországon."],
      ro: ["Complet funcțională.", "Unică în Ungaria."],
      en: ["Fully functional.", "Unique in Hungary."]
    }
  },
  {
    id: "historical-gyulai-almasy-kastely-extra",
    type: "historical",
    parent: "HU-BE",
    coords: [21.284, 46.646],
    name: { de: "Almásy-Schloss Gyula", hu: "Gyulai Almásy-kastély", ro: "Castelul Almásy din Gyula", en: "Almásy Mansion Gyula" },
    description: {
      de: "Ein prachtvolles Barockschloss mit einer interaktiven Ausstellung über das Adelsleben.",
      hu: "Pompás barokk kastély interaktív kiállítással a nemesi életről.",
      ro: "Un castel baroc superb cu o expoziție interactivă despre viața nobiliară.",
      en: "A splendid Baroque mansion with an interactive exhibition about noble life."
    },
    facts: {
      de: ["Kürzlich renoviert.", "Neben dem Burgbad."],
      hu: ["Nemrég újították fel.", "A Várfürdő szomszédságában."],
      ro: ["Renovat recent.", "Lângă Băile Cetății."],
      en: ["Recently renovated.", "Located next to the Castle Spa."]
    }
  },
  {
    id: "animal-habitat-korosvolgyi-allatpark-extra",
    type: "animal-habitat",
    parent: "HU-BE",
    coords: [20.533, 46.852],
    name: { de: "Körös-Tal Tierpark", hu: "Körösvölgyi Állatpark", ro: "Parcul de Animale Valea Crișului", en: "Koros Valley Animal Park" },
    description: {
      de: "Ein Park in Szarvas, der die ursprüngliche Fauna des Karpatenbeckens zeigt.",
      hu: "Szarvasi állatpark, amely a Kárpát-medence őshonos állatvilágát mutatja be.",
      ro: "Un parc de animale în Szarvas care prezintă fauna originală a Bazinului Carpatic.",
      en: "An animal park in Szarvas showcasing the native fauna of the Carpathian Basin."
    },
    facts: {
      de: ["Bisons und Wölfe.", "Schöne natürliche Umgebung."],
      hu: ["Bölények és farkasok.", "Gyönyörű természeti környezet."],
      ro: ["Zimbri și lupi.", "Cadru natural superb."],
      en: ["Bisons and wolves.", "Beautiful natural surroundings."]
    }
  },
  {
    id: "industry-csabai-kolbaszgyar-extra",
    type: "industry",
    parent: "HU-BE",
    coords: [21.096, 46.675],
    name: { de: "Wurstfabrik Békéscsaba", hu: "Békéscsabai Kolbászgyár", ro: "Fabrica de Cârnați Békéscsaba", en: "Bekescsaba Sausage Factory" },
    description: {
      de: "Die Heimat der berühmten Csabai-Wurst, ein Symbol ungarischer Gastronomie.",
      hu: "A híres Csabai kolbász hazája, a magyar gasztronómia egyik jelképe.",
      ro: "Patria celebrilor cârnați de Csaba, un simbol al gastronomiei maghiare.",
      en: "The home of the famous Csabai sausage, a symbol of Hungarian gastronomy."
    },
    facts: {
      de: ["Traditionelle Rezepte.", "Jährliches Wurstfestival."],
      hu: ["Hagyományos receptek.", "Évente kolbászfesztivált tartanak."],
      ro: ["Rețete tradiționale.", "Festival anual al cârnaților."],
      en: ["Traditional recipes.", "Hosts an annual sausage festival."]
    }
  },

  // HU-BZ: Borsod-Abaúj-Zemplén (3G, 1LN, 1W)
  {
    id: "historical-boldogkoi-var-extra",
    type: "historical",
    parent: "HU-BZ",
    coords: [21.233, 48.345],
    name: { de: "Burg Boldogkő", hu: "Boldogkői vár", ro: "Cetatea Boldogkő", en: "Boldogko Castle" },
    description: {
      de: "Eine spektakulär auf einem Felsen gelegene Burg im Zemplén-Gebirge.",
      hu: "Egy sziklaszirten trónoló, látványos vár a Zempléni-hegységben.",
      ro: "O cetate spectaculoasă situată pe o stâncă în munții Zemplén.",
      en: "A spectacular castle perched on a rocky cliff in the Zemplén Mountains."
    },
    facts: {
      de: ["Aussichtsplattform am Felsgrat.", "Mittelalterliche Ausstellungen."],
      hu: ["Kilátó a sziklaélen.", "Középkori kiállítások."],
      ro: ["Punct de belvedere pe creastă.", "Expoziții medievale."],
      en: ["Viewing platform on the ridge.", "Medieval exhibitions."]
    }
  },
  {
    id: "historical-fuzeri-var-extra",
    type: "historical",
    parent: "HU-BZ",
    coords: [21.460, 48.541],
    name: { de: "Burg Füzér", hu: "Füzéri vár", ro: "Cetatea Füzér", en: "Fuzer Castle" },
    description: {
      de: "Eine der am schönsten restaurierten Burgen Ungarns auf einem Vulkankegel.",
      hu: "Magyarország egyik legszebben felújított vára egy vulkáni kúpon.",
      ro: "Una dintre cele mai frumos restaurate cetăți din Ungaria, pe un con vulcanic.",
      en: "One of Hungary's most beautifully restored castles on a volcanic cone."
    },
    facts: {
      de: ["Hier wurde die Krone gehütet.", "Atemberaubendes Panorama."],
      hu: ["Itt őrizték a Szent Koronát.", "Lélegzetelállító panoráma."],
      ro: ["Aici a fost păstrată coroana.", "Panoramă uluitoare."],
      en: ["The Holy Crown was kept here.", "Breathtaking panorama."]
    }
  },
  {
    id: "historical-diosgyori-var-extra",
    type: "historical",
    parent: "HU-BZ",
    coords: [20.689, 48.097],
    name: { de: "Burg Diósgyőr", hu: "Diósgyőri vár", ro: "Cetatea Diósgyőr", en: "Diosgyor Castle" },
    description: {
      de: "Einst der Lieblingssitz ungarischer Königinnen, heute eine moderne Erlebnisburg.",
      hu: "Egykor a magyar királynék kedvenc lakhelye, ma modern élményvár.",
      ro: "Odinioară reședința preferată a reginelor maghiare, astăzi o cetate interactivă.",
      en: "Once the favorite residence of Hungarian queens, now a modern interactive castle."
    },
    facts: {
      de: ["Vier markante Türme.", "Ritterspiele im Sommer."],
      hu: ["Négy jellegzetes torony.", "Nyári lovagi játékok."],
      ro: ["Patru turnuri distinctive.", "Turniruri cavalerești vara."],
      en: ["Four distinctive towers.", "Hosts knightly tournaments in summer."]
    }
  },
  {
    id: "animal-habitat-miskolci-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-BZ",
    coords: [20.645, 48.118],
    name: { de: "Zoo Miskolc", hu: "Miskolci Állatkert", ro: "Grădina Zoologică din Miskolc", en: "Miskolc Zoo" },
    description: {
      de: "Der älteste Zoo Ungarns in einem Waldgebiet, bekannt als 'Kulturpark'.",
      hu: "Magyarország legrégebbi erdőben épült állatkertje, vadasparki környezetben.",
      ro: "Cea mai veche grădină zoologică din Ungaria situată în pădure.",
      en: "Hungary's oldest forest-based zoo, set in a natural wildlife park environment."
    },
    facts: {
      de: ["Im Bükk-Nationalpark.", "Fokus auf Naturschutz."],
      hu: ["A Bükki Nemzeti Parkban.", "Természetvédelemre fókuszál."],
      ro: ["În Parcul Național Bükk.", "Focus pe conservare."],
      en: ["Located in Bükk National Park.", "Focuses on nature conservation."]
    }
  },
  {
    id: "industry-tiszaujvarosi-vegyimuvek-extra",
    type: "industry",
    parent: "HU-BZ",
    coords: [21.036, 47.931],
    name: { de: "Chemiewerk Tiszaújváros", hu: "Tiszaújvárosi Vegyi Kombinát", ro: "Combinatul Chimic Tiszaújváros", en: "Tiszaujvaros Chemical Plant" },
    description: {
      de: "Eines der größten Chemieunternehmen in Mitteleuropa, spezialisiert auf Kunststoffe.",
      hu: "Közép-Európa egyik legnagyobb vegyipari vállalata, műanyaggyártásra szakosodva.",
      ro: "Una dintre cele mai mari companii chimice din Europa Centrală, specializată în mase plastice.",
      en: "One of Central Europe's largest chemical companies, specializing in plastics production."
    },
    facts: {
      de: ["Teil der MOL-Gruppe.", "Wichtiger Exporteur."],
      hu: ["A MOL-csoport tagja.", "Meghatározó exportőr."],
      ro: ["Parte a grupului MOL.", "Exportator major."],
      en: ["Part of the MOL Group.", "Major exporter for the region."]
    }
  },

  // HU-CS: Csongrád-Csanád (3G, 1LN, 1W)
  {
    id: "historical-szegedi-dom-extra",
    type: "historical",
    parent: "HU-CS",
    coords: [20.149, 46.248],
    name: { de: "Votivkirche von Szeged", hu: "Szegedi Dóm", ro: "Catedrala din Szeged", en: "Votive Church of Szeged" },
    description: {
      de: "Ein imposantes neoromanisches Bauwerk, errichtet nach der großen Flut von 1879.",
      hu: "Impozáns neoromán épület, amelyet az 1879-es nagy árvíz után emeltek fogadalomból.",
      ro: "O clădire neoromanică impunătoare, ridicată ca urmare a marii inundații din 1879.",
      en: "An imposing Neo-Romanesque building, built after the great flood of 1879."
    },
    facts: {
      de: ["Zweithöchste Kirche Ungarns.", "Berühmte Freilichtspiele."],
      hu: ["Magyarország 4. legmagasabb temploma.", "Híres Szabadtéri Játékok helyszíne."],
      ro: ["A patra cea mai înaltă biserică din Ungaria.", "Locul celebrelor Jocuri în Aer Liber."],
      en: ["The 4th tallest church in Hungary.", "Venue for the famous Open-Air Festival."]
    }
  },
  {
    id: "historical-mora-ferenc-muzeum-extra",
    type: "historical",
    parent: "HU-CS",
    coords: [20.152, 46.252],
    name: { de: "Móra Ferenc Museum", hu: "Móra Ferenc Múzeum", ro: "Muzeul Móra Ferenc", en: "Mora Ferenc Museum" },
    description: {
      de: "Ein bedeutendes Kulturzentrum in Szeged, benannt nach dem berühmten Schriftsteller.",
      hu: "Szeged jelentős kulturális központja, a híres íróról elnevezve.",
      ro: "Un centru cultural important din Szeged, numit după celebrul scriitor.",
      en: "A significant cultural center in Szeged, named after the famous writer."
    },
    facts: {
      de: ["Prachtvolles klassizistisches Gebäude.", "Direkt an der Theiß."],
      hu: ["Pompás klasszicista épület.", "Közvetlenül a Tisza-parton áll."],
      ro: ["Clădire clasicistă superbă.", "Chiar pe malul Tisei."],
      en: ["Magnificent Neoclassical building.", "Located right on the Tisza riverbank."]
    }
  },
  {
    id: "historical-csongradi-ovaros-extra",
    type: "historical",
    parent: "HU-CS",
    coords: [20.144, 46.713],
    name: { de: "Altstadt von Csongrád", hu: "Csongrádi Óváros", ro: "Centrul Vechi Csongrád", en: "Csongrad Old Town" },
    description: {
      de: "Ein Denkmalensemble mit reetgedeckten Fischerhäusern an der Theiß.",
      hu: "Nádtetős halászházakból álló műemléki együttes a Tisza partján.",
      ro: "Un ansamblu istoric de case pescărești cu acoperiș de stuf pe malul Tisei.",
      en: "A historic ensemble of thatched-roof fisherman cottages on the Tisza banks."
    },
    facts: {
      de: ["Besondere Atmosphäre.", "Lebendiges Freilichtmuseum."],
      hu: ["Különleges hangulatot áraszt.", "Élő skanzenként működik."],
      ro: ["Atmosferă deosebită.", "Funcționează ca un muzeu viu."],
      en: ["Unique atmosphere.", "Functions as a living open-air museum."]
    }
  },
  {
    id: "animal-habitat-szegedi-vadaspark-extra",
    type: "animal-habitat",
    parent: "HU-CS",
    coords: [20.117, 46.252],
    name: { de: "Zoo Szeged", hu: "Szegedi Vadaspark", ro: "Grădina Zoologică din Szeged", en: "Szeged Zoo" },
    description: {
      de: "Der flächenmäßig größte Zoo Ungarns, spezialisiert auf seltene Tierarten.",
      hu: "Magyarország legnagyobb területű állatkertje, ritka fajok tartására szakosodva.",
      ro: "Cea mai mare grădină zoologică din Ungaria ca suprafață, specializată pe specii rare.",
      en: "Hungary's largest zoo by territory, specializing in rare animal species."
    },
    facts: {
      de: ["Große natürliche Gehege.", "Fokus auf Naturschutz."],
      hu: ["Tágas, természetes kifutók.", "Természetvédelemre fókuszál."],
      ro: ["Țarcuri naturale vaste.", "Focus pe conservare."],
      en: ["Large natural enclosures.", "Focuses on conservation programs."]
    }
  },
  {
    id: "industry-szegedi-paprika-extra",
    type: "industry",
    parent: "HU-CS",
    coords: [20.140, 46.230],
    name: { de: "Paprikafabrik Szeged", hu: "Szegedi Paprikafeldolgozó", ro: "Fabrica de Paprika din Szeged", en: "Szeged Paprika Processing" },
    description: {
      de: "Szeged ist weltweit bekannt für sein Paprikapulver, das 'rote Gold' Ungarns.",
      hu: "Szeged világszerte ismert a fűszerpaprikájáról, a magyar 'vörös aranyról'.",
      ro: "Szeged este cunoscut în întreaga lume pentru paprika, 'aurul roșu' al Ungariei.",
      en: "Szeged is world-famous for its spice paprika, the 'red gold' of Hungary."
    },
    facts: {
      de: ["Hungaricum-Produkt.", "Hunderte Jahre Tradition."],
      hu: ["Hungarikum termék.", "Több száz éves hagyomány."],
      ro: ["Produs Hungaricum.", "Tradiție de sute de ani."],
      en: ["A certified Hungaricum.", "Centuries of tradition."]
    }
  },

  // HU-FE: Fejér (3G, 1LN, 1W)
  {
    id: "historical-bory-var-extra",
    type: "historical",
    parent: "HU-FE",
    coords: [18.455, 47.202],
    name: { de: "Bory-Burg", hu: "Bory-vár", ro: "Cetatea Bory", en: "Bory Castle" },
    description: {
      de: "Eine von Jenő Bory im 20. Jahrhundert eigenhändig errichtete Betonburg in Székesfehérvár.",
      hu: "Bory Jenő által a 20. században saját kezűleg épített betonvár Székesfehérváron.",
      ro: "O cetate de beton construită manual de Jenő Bory în secolul XX, în Székesfehérvár.",
      en: "A concrete castle built single-handedly by Jenő Bory in the 20th century in Székesfehérvár."
    },
    facts: {
      de: ["Denkmal der ewigen Liebe.", "Hunderte Skulpturen."],
      hu: ["Az örök szerelem emlékműve.", "Százszámra láthatók itt szobrok."],
      ro: ["Monument al iubirii eterne.", "Sute de sculpturi expuse."],
      en: ["Monument to eternal love.", "Features hundreds of sculptures."]
    }
  },
  {
    id: "historical-martonvasari-kastely-extra",
    type: "historical",
    parent: "HU-FE",
    coords: [18.789, 47.319],
    name: { de: "Schloss Brunszvik", hu: "Brunszvik-kastély", ro: "Castelul Brunszvik", en: "Brunszvik Mansion" },
    description: {
      de: "Ein neugotisches Schloss in Martonvásár, bekannt für seine Beethoven-Verbindungen.",
      hu: "Neogótikus kastély Martonvásáron, amely Beethoven látogatásairól híres.",
      ro: "Un castel neogotic în Martonvásár, cunoscut pentru legăturile cu Beethoven.",
      en: "A Neo-Gothic mansion in Martonvásár, famous for its connections to Beethoven."
    },
    facts: {
      de: ["Beethoven-Gedenkmuseum.", "Prächtiger englischer Garten."],
      hu: ["Beethoven Emlékmúzeum.", "Gyönyörű angolkert veszi körül."],
      ro: ["Muzeu memorial Beethoven.", "Grădină englezească superbă."],
      en: ["Beethoven Memorial Museum.", "Surrounded by a beautiful English garden."]
    }
  },
  {
    id: "historical-nadasdy-kastely-extra",
    type: "historical",
    parent: "HU-FE",
    coords: [18.254, 47.118],
    name: { de: "Schloss Nádasdy", hu: "Nádasdy-kastély", ro: "Castelul Nádasdy", en: "Nádasdy Mansion" },
    description: {
      de: "Ein einzigartiges neugotisches Tudor-Schloss in Nádasdladány.",
      hu: "Egyedülálló Tudor-stílusú neogótikus kastély Nádasdladányban.",
      ro: "Un castel neogotic unic în stil Tudor, situat în Nádasdladány.",
      en: "A unique Tudor-style Neo-Gothic mansion in Nádasdladány."
    },
    facts: {
      de: ["Historische Bibliothek.", "Stimmungsvoller Schlosspark."],
      hu: ["Történelmi könyvtár.", "Hangulatos kastélypark."],
      ro: ["Bibliotecă istorică.", "Parc de castel atmosferic."],
      en: ["Historic library.", "Atmospheric castle park."]
    }
  },
  {
    id: "animal-habitat-velencei-madarrezervatum-extra",
    type: "animal-habitat",
    parent: "HU-FE",
    coords: [18.577, 47.195],
    name: { de: "Vogelreservat Velence-See", hu: "Velencei-tavi Madárrezervátum", ro: "Rezervația de Păsări de la Lacul Velence", en: "Velence Lake Bird Sanctuary" },
    description: {
      de: "Ein geschütztes Feuchtgebiet am Velence-See, Heimat zahlreicher Wasservögel.",
      hu: "Védett vizes élőhely a Velencei-tó nyugati részén, számos vízimadár otthona.",
      ro: "O zonă umedă protejată la Lacul Velence, casă pentru numeroase păsări de apă.",
      en: "A protected wetland on Lake Velence, home to numerous water birds."
    },
    facts: {
      de: ["Sperrgebiet für Besucher.", "Wichtiger Rastplatz."],
      hu: ["Látogatástól elzárt terület.", "Fontos vonulóhely."],
      ro: ["Zonă restricționată vizitatorilor.", "Loc important de popas."],
      en: ["Restricted area for visitors.", "Important migratory stopover."]
    }
  },
  {
    id: "industry-dunaujvarosi-vasmu-extra",
    type: "industry",
    parent: "HU-FE",
    coords: [18.932, 46.945],
    name: { de: "Hüttenwerk Dunaújváros", hu: "Dunaújvárosi Vasmű", ro: "Combinatul Siderurgic Dunaújváros", en: "Dunaujvaros Steel Works" },
    description: {
      de: "Das größte Stahlwerk Ungarns, das Herz der Industriestadt Dunaújváros.",
      hu: "Magyarország legnagyobb vasműve, Dunaújváros ipari központja.",
      ro: "Cel mai mare combinat siderurgic din Ungaria, inima orașului industrial Dunaújváros.",
      en: "Hungary's largest steel works, the heart of the industrial city Dunaujvaros."
    },
    facts: {
      de: ["In den 1950ern gebaut.", "Enorme Produktionskapazität."],
      hu: ["Az 1950-es években épült.", "Hatalmas termelési kapacitás."],
      ro: ["Construit în anii 1950.", "Capacitate uriașă de producție."],
      en: ["Built in the 1950s.", "Enormous production capacity."]
    }
  },

  // HU-GS: Győr-Moson-Sopron (3G, 1LN, 1W)
  {
    id: "historical-pannonhalmi-apatsag-extra",
    type: "historical",
    parent: "HU-GS",
    coords: [17.761, 47.552],
    name: { de: "Erzabtei Pannonhalma", hu: "Pannonhalmi Főapátság", ro: "Abatia Pannonhalma", en: "Pannonhalma Archabbey" },
    description: {
      de: "Ein UNESCO-Weltkulturerbe und spirituelles Zentrum der ungarischen Benediktiner.",
      hu: "UNESCO világörökségi helyszín, a magyar bencések szellemi központja.",
      ro: "Sit al patrimoniului mondial UNESCO și centrul spiritual al benedictinilor maghiari.",
      en: "A UNESCO World Heritage site and the spiritual center of Hungarian Benedictines."
    },
    facts: {
      de: ["Über 1000 Jahre alt.", "Berühmte Bibliothek."],
      hu: ["Több mint 1000 éves.", "Híres könyvtárral rendelkezik."],
      ro: ["Vechime de peste 1000 de ani.", "Bibliotecă celebră."],
      en: ["Over 1000 years old.", "Features a famous library."]
    }
  },
  {
    id: "historical-soproni-tuztorony-extra",
    type: "historical",
    parent: "HU-GS",
    coords: [16.591, 47.685],
    name: { de: "Soproner Feuerturm", hu: "Soproni Tűztorony", ro: "Turnul de Foc din Sopron", en: "Sopron Fire Tower" },
    description: {
      de: "Das Wahrzeichen von Sopron, erbaut auf römischen Fundamenten.",
      hu: "Sopron városának jelképe, amely római kori alapokra épült.",
      ro: "Simbolul orașului Sopron, construit pe fundații romane.",
      en: "The landmark of Sopron, built on Roman foundations."
    },
    facts: {
      de: ["Blick auf die Alpen.", "Tor der Treue."],
      hu: ["Kilátás az Alpokra.", "A Hűség Kapuja található alatta."],
      ro: ["Vedere spre Alpi.", "Sub el se află Poarta Fidelității."],
      en: ["View of the Alps.", "The Gate of Loyalty is located below it."]
    }
  },
  {
    id: "historical-nagycenki-szechenyi-kastely-extra",
    type: "historical",
    parent: "HU-GS",
    coords: [16.705, 47.608],
    name: { de: "Schloss Széchenyi Nagycenk", hu: "Nagycenki Széchenyi-kastély", ro: "Castelul Széchenyi din Nagycenk", en: "Szechenyi Mansion Nagycenk" },
    description: {
      de: "Der ehemalige Wohnsitz von István Széchenyi, dem 'größten Ungarn'.",
      hu: "Széchenyi István, a 'legnagyobb magyar' egykori lakhelye.",
      ro: "Fosta reședință a lui István Széchenyi, 'cel mai mare maghiar'.",
      en: "The former residence of István Széchenyi, the 'Greatest Hungarian'."
    },
    facts: {
      de: ["Gedenkmuseum.", "Prachtvolle Lindenallee."],
      hu: ["Emlékmúzeum működik benne.", "Gyönyörű hárfasor vezet hozzá."],
      ro: ["Muzeu memorial.", "Alee de tei superbă."],
      en: ["Memorial museum.", "Magnificent linden alley leads to it."]
    }
  },
  {
    id: "animal-habitat-ferto-hansag-park-extra",
    type: "animal-habitat",
    parent: "HU-GS",
    coords: [16.820, 47.660],
    name: { de: "Nationalpark Fertő-Hanság", hu: "Fertő-Hanság Nemzeti Park", ro: "Parcul Național Fertő-Hanság", en: "Ferto-Hansag National Park" },
    description: {
      de: "Ein grenzüberschreitender Nationalpark, der den Neusiedler See und seine Sümpfe schützt.",
      hu: "Határon átnyúló nemzeti park, amely a Fertő-tavat és a Hanság mocsárvilágát védi.",
      ro: "Un parc național transfrontalier care protejează Lacul Neusiedler și mlaștinile Hanság.",
      en: "A cross-border national park protecting Lake Neusiedler and the Hanság marshlands."
    },
    facts: {
      de: ["UNESCO-Welterbe.", "Seltene Wasservögel."],
      hu: ["Világörökségi helyszín.", "Ritka vízimadarak élnek itt."],
      ro: ["Patrimoniu UNESCO.", "Păsări de apă rare."],
      en: ["UNESCO World Heritage site.", "Home to rare water birds."]
    }
  },
  {
    id: "industry-audi-gyor-extra",
    type: "industry",
    parent: "HU-GS",
    coords: [17.685, 47.695],
    name: { de: "Audi Hungaria Győr", hu: "Audi Hungaria Győr", ro: "Audi Hungaria Győr", en: "Audi Hungaria Győr" },
    description: {
      de: "Eines der größten Motorenwerke der Welt und ein bedeutendes Fahrzeugwerk.",
      hu: "A világ egyik legnagyobb motorgyára és jelentős járműgyártó központ.",
      ro: "Una dintre cele mai mari fabrici de motoare din lume și un centru auto major.",
      en: "One of the world's largest engine plants and a major automobile manufacturing hub."
    },
    facts: {
      de: ["Seit 1993 in Győr.", "Exportiert weltweit."],
      hu: ["1993 óta működik Győrben.", "Világszerte exportál termékeket."],
      ro: ["În Győr din 1993.", "Exportă în toată lumea."],
      en: ["In Győr since 1993.", "Exports products worldwide."]
    }
  },

  // HU-HB: Hajdú-Bihar (3G, 1LN, 1W)
  {
    id: "historical-debreceni-egyetem-extra",
    type: "historical",
    parent: "HU-HB",
    coords: [21.623, 47.554],
    name: { de: "Universität Debrecen", hu: "Debreceni Egyetem főépület", ro: "Universitatea din Debrecen", en: "University of Debrecen Main Building" },
    description: {
      de: "Das monumentale Hauptgebäude einer der ältesten Universitäten Ungarns.",
      hu: "Magyarország egyik legrégebbi egyetemének monumentális főépülete.",
      ro: "Clădirea principală monumentală a uneia dintre cele mai vechi universități din Ungaria.",
      en: "The monumental main building of one of Hungary's oldest universities."
    },
    facts: {
      de: ["Imposanter Vorplatz.", "Historische Glasmalereien."],
      hu: ["Impozáns előtérrel rendelkezik.", "Történelmi üvegablakok."],
      ro: ["Piață monumentală în față.", "Vitralii istorice."],
      en: ["Imposing front square.", "Historic stained glass windows."]
    }
  },
  {
    id: "historical-hortobagyi-pasztormuzeum-extra",
    type: "historical",
    parent: "HU-HB",
    coords: [21.148, 47.581],
    name: { de: "Hirtenmuseum Hortobágy", hu: "Hortobágyi Pásztormúzeum", ro: "Muzeul Păstorilor din Hortobágy", en: "Hortobagy Shepherd Museum" },
    description: {
      de: "Ein Museum, das das traditionelle Leben der Hirten in der Puszta präsentiert.",
      hu: "A pusztai pásztorélet hagyományait bemutató múzeum.",
      ro: "Un muzeu care prezintă viața tradițională a păstorilor din Puszta.",
      en: "A museum showcasing the traditional lifestyle of shepherds in the Puszta."
    },
    facts: {
      de: ["In einem alten Stall.", "Ganzjährig geöffnet."],
      hu: ["Egy régi szekérállásban van.", "Egész évben látogatható."],
      ro: ["Într-un vechi grajd.", "Deschis tot anul."],
      en: ["Housed in an old stable.", "Open all year round."]
    }
  },
  {
    id: "historical-deri-muzeum-extra",
    type: "historical",
    parent: "HU-HB",
    coords: [21.622, 47.532],
    name: { de: "Déri-Museum", hu: "Déri Múzeum", ro: "Muzeul Déri", en: "Déri Museum" },
    description: {
      de: "Ein bedeutendes Museum in Debrecen, bekannt für die Munkácsy-Trilogie.",
      hu: "Debrecen jelentős múzeuma, híres a Munkácsy-trilógiáról.",
      ro: "Un muzeu important din Debrecen, celebru pentru trilogia lui Munkácsy.",
      en: "A significant museum in Debrecen, famous for the Munkácsy trilogy."
    },
    facts: {
      de: ["Reiche Sammlungen.", "Ägyptische Ausstellung."],
      hu: ["Gazdag gyűjtemények.", "Egyiptomi kiállítással."],
      ro: ["Colecții bogate.", "Expoziție egipteană."],
      en: ["Rich collections.", "Features an Egyptian exhibition."]
    }
  },
  {
    id: "animal-habitat-nagyerdei-kulturpark-extra",
    type: "animal-habitat",
    parent: "HU-HB",
    coords: [21.635, 47.550],
    name: { de: "Kulturpark Debrecen", hu: "Nagyerdei Kultúrpark", ro: "Parcul de Cultură Debrecen", en: "Nagyerdei Culture Park" },
    description: {
      de: "Kombination aus Zoo und Vergnügungspark im großen Wald von Debrecen.",
      hu: "Állatkert és vidámpark ötvözete Debrecenben, a Nagyerdő szívében.",
      ro: "Combinație de grădină zoologică și parc de distracții în Pădurea Mare.",
      en: "A combination of a zoo and an amusement park in the heart of the Great Forest."
    },
    facts: {
      de: ["1958 eröffnet.", "Über 160 Tierarten."],
      hu: ["1958-ban nyílt meg.", "Több mint 160 állatfaj."],
      ro: ["Deschis în 1958.", "Peste 160 de specii de animale."],
      en: ["Opened in 1958.", "Home to over 160 animal species."]
    }
  },
  {
    id: "industry-bmw-debrecen-extra",
    type: "industry",
    parent: "HU-HB",
    coords: [21.500, 47.580],
    name: { de: "BMW Werk Debrecen", hu: "BMW Gyár Debrecen", ro: "Fabrica BMW Debrecen", en: "BMW Plant Debrecen" },
    description: {
      de: "Ein hochmodernes Automobilwerk von BMW, das sich auf E-Mobilität spezialisiert.",
      hu: "A BMW ultramodern autógyára, amely az e-mobilitásra fókuszál.",
      ro: "Fabrica auto ultramodernă a BMW, specializată în e-mobilitate.",
      en: "BMW's state-of-the-art car plant, focusing on e-mobility."
    },
    facts: {
      de: ["In Bau/Inbetriebnahme.", "Fokus auf Nachhaltigkeit."],
      hu: ["Építés/beüzemelés alatt.", "Fenntarthatósági fókusz."],
      ro: ["În construcție/punere în funcțiune.", "Focus pe sustenabilitate."],
      en: ["Under construction/commissioning.", "Focuses on sustainability."]
    }
  },

  // HU-HE: Heves (3G, 1LN, 1W)
  {
    id: "historical-siroki-var-extra",
    type: "historical",
    parent: "HU-HE",
    coords: [20.196, 47.940],
    name: { de: "Burg Sirok", hu: "Siroki vár", ro: "Cetatea Sirok", en: "Sirok Castle" },
    description: {
      de: "Eine faszinierende Felsenburg im Mátra-Gebirge mit vielen Höhlengängen.",
      hu: "Lenyűgöző sziklavár a Mátrában, számos sziklába vájt folyosóval.",
      ro: "O cetate de stâncă fascinantă în munții Mátra, cu multe galerii săpate.",
      en: "A fascinating rock castle in the Mátra Mountains with many carved tunnels."
    },
    facts: {
      de: ["Strategische Lage.", "Vulkanische Felsen."],
      hu: ["Stratégiai elhelyezkedés.", "Vulkanikus kőzeten áll."],
      ro: ["Poziție strategică.", "Pe roci vulcanice."],
      en: ["Strategic location.", "Built on volcanic rocks."]
    }
  },
  {
    id: "historical-egri-var-extra",
    type: "historical",
    parent: "HU-HE",
    coords: [20.380, 47.904],
    name: { de: "Burg Eger", hu: "Egri vár", ro: "Cetatea din Eger", en: "Eger Castle" },
    description: {
      de: "Symbol des heldenhaften Widerstands gegen die Osmanen im Jahr 1552.",
      hu: "Az 1552-es török elleni hősies ellenállás jelképe.",
      ro: "Simbolul rezistenței eroice împotriva otomanilor în anul 1552.",
      en: "Symbol of the heroic resistance against the Ottomans in 1552."
    },
    facts: {
      de: ["Nationales Denkmal.", "Interaktive Museen."],
      hu: ["Nemzeti emlékhely.", "Interaktív múzeumok."],
      ro: ["Monument național.", "Muzee interactive."],
      en: ["National heritage site.", "Houses interactive museums."]
    }
  },
  {
    id: "historical-egri-minaret-extra",
    type: "historical",
    parent: "HU-HE",
    coords: [20.377, 47.905],
    name: { de: "Minarett von Eger", hu: "Egri minaret", ro: "Minaretul din Eger", en: "Eger Minaret" },
    description: {
      de: "Das nördlichste historische Minarett aus der Zeit der osmanischen Herrschaft.",
      hu: "Az oszmán hódoltság idejéből származó legészakibb történelmi minaret.",
      ro: "Cel mai nordic minaret istoric din perioada stăpânirii otomane.",
      en: "The northernmost historic minaret from the Ottoman era."
    },
    facts: {
      de: ["40 Meter hoch.", "97 Stufen zur Spitze."],
      hu: ["40 méter magas.", "97 lépcső vezet a tetejére."],
      ro: ["40 de metri înălțime.", "97 de trepte până în vârf."],
      en: ["40 meters high.", "97 steps to the top."]
    }
  },
  {
    id: "animal-habitat-gyongyosi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-HE",
    coords: [19.932, 47.785],
    name: { de: "Zoo Gyöngyös", hu: "Gyöngyösi Állatkert", ro: "Grădina Zoologică din Gyöngyös", en: "Gyongyos Zoo" },
    description: {
      de: "Ein kleiner, aber beliebter Zoo am Fuße des Mátra-Gebirges.",
      hu: "Kicsi, de kedvelt állatkert a Mátra lábánál.",
      ro: "O grădină zoologică mică, dar populară, la poalele munților Mátra.",
      en: "A small but popular zoo at the foot of the Mátra Mountains."
    },
    facts: {
      de: ["Besuchernah.", "Viele exotische Tiere."],
      hu: ["Barátságos környezet.", "Sok egzotikus állat."],
      ro: ["Aproape de vizitatori.", "Multe animale exotice."],
      en: ["Visitor-friendly.", "Home to many exotic animals."]
    }
  },
  {
    id: "industry-matrai-eromu-extra",
    type: "industry",
    parent: "HU-HE",
    coords: [20.060, 47.782],
    name: { de: "Kraftwerk Mátra", hu: "Mátrai Erőmű", ro: "Centrala Electrică Mátra", en: "Matra Power Plant" },
    description: {
      de: "Eines der größten Kraftwerke Ungarns, das Braunkohle aus Tagebauen nutzt.",
      hu: "Magyarország egyik legnagyobb erőműve, amely lignit tüzelésű.",
      ro: "Una dintre cele mai mari centrale electrice din Ungaria, care folosește lignit.",
      en: "One of Hungary's largest power plants, using lignite as its main fuel source."
    },
    facts: {
      de: ["Riesige Schaufelradbagger.", "Zentrum der Energieregion."],
      hu: ["Hatalmas kotrógépek.", "Az energiarégió központja."],
      ro: ["Excavatoare uriașe.", "Centrul regiunii energetice."],
      en: ["Features massive bucket-wheel excavators.", "Center of the energy region."]
    }
  },

  // HU-JN: Jász-Nagykun-Szolnok (2G, 2LN, 1W)
  {
    id: "historical-karcagi-szelmalom-extra",
    type: "historical",
    parent: "HU-JN",
    coords: [20.916, 47.319],
    name: { de: "Windmühle von Karcag", hu: "Karcagi szélmalom", ro: "Moara de vânt din Karcag", en: "Karcag Windmill" },
    description: {
      de: "Eines der wenigen erhaltenen Windmühlendenkmäler in der ungarischen Tiefebene.",
      hu: "Az Alföld kevés épségben maradt szélmalom-műemlékének egyike.",
      ro: "Una dintre puținele mori de vânt istorice rămase în Câmpia Maghiară.",
      en: "One of the few remaining historic windmills in the Great Hungarian Plain."
    },
    facts: {
      de: ["In den 1850ern gebaut.", "Aus Backstein errichtet."],
      hu: ["Az 1850-es években épült.", "Téglából falazott szerkezet."],
      ro: ["Construită în anii 1850.", "Construcție din cărămidă."],
      en: ["Built in the 1850s.", "Constructed of brick."]
    }
  },
  {
    id: "historical-tisza-szallo-szolnok-extra",
    type: "historical",
    parent: "HU-JN",
    coords: [20.198, 47.172],
    name: { de: "Tisza Hotel Szolnok", hu: "Tisza Szálló Szolnok", ro: "Hotelul Tisza Szolnok", en: "Tisza Hotel Szolnok" },
    description: {
      de: "Ein elegantes neoklassizistisches Gebäude am Ufer der Theiß mit eigenem Thermalbad.",
      hu: "Elegáns neoklasszicista épület a Tisza partján, saját gyógyfürdővel.",
      ro: "O clădire neoclasică elegantă pe malul Tisei, cu propria baie termală.",
      en: "An elegant Neoclassical building on the banks of the Tisza, with its own thermal bath."
    },
    facts: {
      de: ["1928 eröffnet.", "Prachtvoller Spiegelsaal."],
      hu: ["1928-ban nyílt meg.", "Pompás tükörteremmel."],
      ro: ["Deschis în 1928.", "Sală a oglinzilor superbă."],
      en: ["Opened in 1928.", "Magnificent hall of mirrors."]
    }
  },
  {
    id: "animal-habitat-jaszberenyi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-JN",
    coords: [19.907, 47.513],
    name: { de: "Zoo Jászberény", hu: "Jászberényi Állat- és Növénykert", ro: "Grădina Zoologică din Jászberény", en: "Jaszbereny Zoo" },
    description: {
      de: "Ein kleiner, aber feiner Zoo, bekannt für seine täglichen Tiershows.",
      hu: "Kicsi, de színvonalas állatkert, amely híres a látványetetéseiről.",
      ro: "O grădină zoologică mică, dar de calitate, celebră pentru spectacolele cu animale.",
      en: "A small but high-quality zoo, famous for its daily animal feeding shows."
    },
    facts: {
      de: ["1975 gegründet.", "Lehrpfad im Park."],
      hu: ["1975-ben alapították.", "Tanösvény is található benne."],
      ro: ["Fondată în 1975.", "Include o potecă didactică."],
      en: ["Founded in 1975.", "Features an educational trail."]
    }
  },
  {
    id: "agriculture-tiszafuredi-halas-extra",
    type: "agriculture",
    parent: "HU-JN",
    coords: [20.755, 47.621],
    name: { de: "Fischereizentrum Tiszafüred", hu: "Tiszafüredi halaspark", ro: "Centrul de pescuit Tiszafüred", en: "Tiszafured Fishing Park" },
    description: {
      de: "Ein Zentrum für nachhaltige Fischzucht und Angeltourismus am Theiß-See.",
      hu: "A fenntartható haltenyésztés és a horgászturizmus központja a Tisza-tónál.",
      ro: "Centru pentru piscicultură sustenabilă și turism de pescuit la Lacul Tisa.",
      en: "A center for sustainable fish farming and fishing tourism at Lake Tisza."
    },
    facts: {
      de: ["Große Teichwirtschaft.", "Typische Theiß-Fische."],
      hu: ["Hatalmas halastórendszer.", "Jellemző tiszai halfajok."],
      ro: ["Sistem vast de iazuri.", "Specii de pești tipice Tisei."],
      en: ["Large pond system.", "Typical fish species of the Tisza."]
    }
  },
  {
    id: "industry-szolnoki-papirgyar-extra",
    type: "industry",
    parent: "HU-JN",
    coords: [20.218, 47.165],
    name: { de: "Papierfabrik Szolnok", hu: "Szolnoki Papírgyár", ro: "Fabrica de Hârtie Szolnok", en: "Szolnok Paper Mill" },
    description: {
      de: "Eine der traditionsreichsten Papierfabriken Ungarns, Teil einer globalen Gruppe.",
      hu: "Magyarország egyik legnagyobb múltú papírgyára, ma nemzetközi cégcsoport tagja.",
      ro: "Una dintre cele mai vechi fabrici de hârtie din Ungaria, astăzi parte a unui grup global.",
      en: "One of Hungary's oldest paper mills, now part of a global group."
    },
    facts: {
      de: ["Moderne Produktion.", "Umweltfreundliche Technik."],
      hu: ["Modern gyártósorok.", "Környezetbarát technológia."],
      ro: ["Producție modernă.", "Tehnologie ecologică."],
      en: ["Modern production lines.", "Eco-friendly technology."]
    }
  },

  // HU-KE: Komárom-Esztergom (2G, 2LN, 1W)
  {
    id: "historical-esztergomi-bazilika-extra",
    type: "historical",
    parent: "HU-KE",
    coords: [18.736, 47.799],
    name: { de: "Basilika von Esztergom", hu: "Esztergomi Bazilika", ro: "Catedrala din Esztergom", en: "Esztergom Basilica" },
    description: {
      de: "Die größte Kirche Ungarns und Sitz des katholischen Primas.",
      hu: "Magyarország legnagyobb temploma, a katolikus prímás székhelye.",
      ro: "Cea mai mare biserică din Ungaria și sediul primatului catolic.",
      en: "Hungary's largest church and the seat of the Catholic primate."
    },
    facts: {
      de: ["100 Meter hohe Kuppel.", "Riesiges Altarbild."],
      hu: ["100 méter magas kupola.", "Hatalmas oltárkép."],
      ro: ["Cupolă de 100 de metri.", "Retablu uriaș."],
      en: ["100-meter high dome.", "Features a massive altarpiece."]
    }
  },
  {
    id: "historical-monostori-erod-extra",
    type: "historical",
    parent: "HU-KE",
    coords: [18.098, 47.749],
    name: { de: "Fort Monostor", hu: "Monostori Erőd", ro: "Fortăreața Monostor", en: "Fort Monostor" },
    description: {
      de: "Ein gigantisches Festungssystem in Komárom, eine der größten Befestigungen Mitteleuropas.",
      hu: "Hatalmas erődrendszer Komáromban, Közép-Európa egyik legnagyobb erődítménye.",
      ro: "Un sistem gigantic de fortificații în Komárom, unul dintre cele mai mari din Europa Centrală.",
      en: "A gigantic fortress system in Komárom, one of Central Europe's largest fortifications."
    },
    facts: {
      de: ["Unterirdische Kasematten.", "Heute Kulturzentrum."],
      hu: ["Földalatti kazamaták.", "Ma kulturális központ."],
      ro: ["Cazemate subterane.", "Astăzi centru cultural."],
      en: ["Underground casemates.", "Now a cultural center."]
    }
  },
  {
    id: "kid-landmark-tatai-tanosveny-extra",
    type: "kid-landmark",
    parent: "HU-KE",
    coords: [18.312, 47.641],
    name: { de: "Tataer Fényes Lehrpfad", hu: "Tatai Fényes Tanösvény", ro: "Poteca Fényes din Tata", en: "Tata Fenyes Nature Trail" },
    description: {
      de: "Ein hölzerner Stegweg durch ein einzigartiges Sumpfgebiet mit sprudelnden Quellen.",
      hu: "Cölöpsétány egy egyedülálló mocsaras területen, kristálytiszta források felett.",
      ro: "O potecă pe piloni printr-o zonă mlaștinoasă unică, deasupra izvoarelor cristaline.",
      en: "A boardwalk trail through a unique marshland, over crystal-clear springs."
    },
    facts: {
      de: ["Konstante Wassertemperatur.", "Interaktive Stationen."],
      hu: ["Állandó vízhőmérséklet.", "Interaktív állomások."],
      ro: ["Temperatură constantă a apei.", "Stații interactive."],
      en: ["Constant water temperature.", "Features interactive stations."]
    }
  },
  {
    id: "animal-habitat-gerecse-vadaspark-extra",
    type: "animal-habitat",
    parent: "HU-KE",
    coords: [18.445, 47.680],
    name: { de: "Wildpark Gerecse", hu: "Gerecse vadaspark", ro: "Parcul de animale Gerecse", en: "Gerecse Wildlife Park" },
    description: {
      de: "Ein Park im Gerecse-Gebirge, der die heimischen Wildtierarten in natürlicher Umgebung zeigt.",
      hu: "A Gerecse-hegység vadasparkja, amely hazai vadfajokat mutat be természetes környezetben.",
      ro: "Parc de animale în munții Gerecse, care prezintă specii locale în mediul lor natural.",
      en: "A wildlife park in the Gerecse Mountains, showcasing native species in their natural habitat."
    },
    facts: {
      de: ["Hirsche und Mufflons.", "Schöne Waldwanderwege."],
      hu: ["Szarvasok és muflonok.", "Erdei túraútvonalak."],
      ro: ["Cerbi și mufloni.", "Trasee montane prin pădure."],
      en: ["Deer and mouflons.", "Beautiful forest hiking trails."]
    }
  },
  {
    id: "industry-suzuki-esztergom-extra",
    type: "industry",
    parent: "HU-KE",
    coords: [18.751, 47.768],
    name: { de: "Suzuki Werk Esztergom", hu: "Suzuki Autógyár Esztergom", ro: "Fabrica Suzuki Esztergom", en: "Suzuki Plant Esztergom" },
    description: {
      de: "Das Herz der ungarischen Suzuki-Produktion, wo Millionen von Fahrzeugen hergestellt wurden.",
      hu: "A magyarországi Suzuki-gyártás központja, ahol autók milliói készültek.",
      ro: "Centrul producției Suzuki din Ungaria, unde au fost fabricate milioane de mașini.",
      en: "The hub of Suzuki production in Hungary, where millions of cars have been built."
    },
    facts: {
      de: ["1991 gegründet.", "Große Exportkapazität."],
      hu: ["1991-ben alapították.", "Jelentős exportkapacitás."],
      ro: ["Fondată în 1991.", "Capacitate majoră de export."],
      en: ["Founded in 1991.", "Major export capacity."]
    }
  },

  // HU-NO: Nógrád (2G, 2LN, 1W)
  {
    id: "historical-hollokoi-var-extra",
    type: "historical",
    parent: "HU-NO",
    coords: [19.584, 47.994],
    name: { de: "Burg Hollókő", hu: "Hollókői vár", ro: "Cetatea Hollókő", en: "Holloko Castle" },
    description: {
      de: "Eine mittelalterliche Burgruine, die über dem UNESCO-Welterbedorf Hollókő wacht.",
      hu: "Középkori várrom, amely az UNESCO világörökségi falu, Hollókő felett őrködik.",
      ro: "O ruină medievală care veghează asupra satului UNESCO Hollókő.",
      en: "A medieval castle ruin watching over the UNESCO World Heritage village of Hollókő."
    },
    facts: {
      de: ["Im 13. Jahrhundert erbaut.", "Toller Rundblick."],
      hu: ["A 13. században épült.", "Pazar körpanoráma."],
      ro: ["Construită în secolul XIII.", "Panoramă superbă."],
      en: ["Built in the 13th century.", "Magnificent panoramic view."]
    }
  },
  {
    id: "historical-dregely-vara-extra",
    type: "historical",
    parent: "HU-NO",
    coords: [19.043, 47.996],
    name: { de: "Burg Drégely", hu: "Drégely vára", ro: "Cetatea Drégely", en: "Dregely Castle" },
    description: {
      de: "Symbol für Heldenmut, wo Szondi und seine Krieger gegen das osmanische Heer kämpften.",
      hu: "A hősies helytállás jelképe, ahol Szondi György várkapitány és katonái küzdöttek a török ellen.",
      ro: "Simbol al eroismului, unde Szondi și oștenii săi au luptat împotriva otomanilor.",
      en: "A symbol of heroism, where Szondi and his warriors fought against the Ottoman army."
    },
    facts: {
      de: ["In 444 Metern Höhe.", "Historischer Ort."],
      hu: ["444 méter magasságban.", "Történelmi emlékhely."],
      ro: ["La 444 metri înălțime.", "Loc istoric."],
      en: ["Located at 444 meters altitude.", "National historic site."]
    }
  },
  {
    id: "kid-landmark-ipolytarnoc-extra",
    type: "kid-landmark",
    parent: "HU-NO",
    coords: [19.645, 48.232],
    name: { de: "Fossilien von Ipolytarnóc", hu: "Ipolytarnóci Ősmaradványok", ro: "Fosilele de la Ipolytarnóc", en: "Ipolytarnoc Fossils" },
    description: {
      de: "Ein 'Pompeji der Urzeit' mit versteinerten Fußabdrücken und prähistorischen Pflanzen.",
      hu: "Az 'ősvilági Pompeji', ahol megkövült lábnyomok és őskori növények láthatók.",
      ro: "Un 'Pompei al preistoriei' cu urme fosilizate și plante preistorice.",
      en: "A 'Prehistoric Pompeii' featuring fossilized footprints and prehistoric plants."
    },
    facts: {
      de: ["17 Millionen Jahre alt.", "Interaktive Ausstellung."],
      hu: ["17 millió éves leletek.", "Interaktív kiállítás."],
      ro: ["Vechime de 17 milioane ani.", "Expoziție interactivă."],
      en: ["17 million years old.", "Interactive exhibition."]
    }
  },
  {
    id: "animal-habitat-nogradi-vadaspark-extra",
    type: "animal-habitat",
    parent: "HU-NO",
    coords: [19.047, 47.904],
    name: { de: "Wildpark Nógrád", hu: "Nógrádi vadaspark", ro: "Parcul de animale Nógrád", en: "Nograd Wildlife Park" },
    description: {
      de: "Ein weitläufiges Gelände, auf dem Rotwild, Damwild und Mufflons beobachtet werden können.",
      hu: "Tágas terület, ahol gímszarvasok, dámvadak és muflonok figyelhetők meg.",
      ro: "O zonă vastă unde pot fi observați cerbi carpatini, lopătari și mufloni.",
      en: "A spacious area where red deer, fallow deer, and mouflons can be observed."
    },
    facts: {
      de: ["Traktorsafaris möglich.", "Natürlicher Lebensraum."],
      hu: ["Traktoros szafari túrák.", "Természetes élőhelyek."],
      ro: ["Safari cu tractorul.", "Habitat natural."],
      en: ["Tractor safari tours available.", "Natural habitats."]
    }
  },
  {
    id: "industry-salgotarjani-uveggyar-extra",
    type: "industry",
    parent: "HU-NO",
    coords: [19.789, 48.103],
    name: { de: "Glasfabrik Salgótarján", hu: "Salgótarjáni Üveggyár", ro: "Fabrica de Sticlă Salgótarján", en: "Salgotarjan Glass Factory" },
    description: {
      de: "Eine traditionsreiche Fabrik, bekannt für ihre hochwertigen Glas- und Kristallprodukte.",
      hu: "Nagy múltú gyár, amely kiváló minőségű üveg- és kristálytermékeiről ismert.",
      ro: "O fabrică cu tradiție, celebră pentru produsele de sticlă și cristal de calitate.",
      en: "A long-standing factory famous for its high-quality glass and crystal products."
    },
    facts: {
      de: ["Hunderte Jahre Glasmacherkunst.", "Exportiert weltweit."],
      hu: ["Több évszázados üvegfúvó múlt.", "Világszerte exportál."],
      ro: ["Secole de meșteșug al sticlei.", "Exportă în întreaga lume."],
      en: ["Centuries of glassmaking history.", "Exports worldwide."]
    }
  },

  // HU-PE: Pest (2G, 2LN, 1W)
  {
    id: "historical-visegradi-fellegvar-extra",
    type: "historical",
    parent: "HU-PE",
    coords: [18.981, 47.794],
    name: { de: "Zitadelle von Visegrád", hu: "Visegrádi Fellegvár", ro: "Cetatea din Visegrád", en: "Visegrad Citadel" },
    description: {
      de: "Die majestätische Burg hoch über dem Donauknie, einst Residenz der Könige.",
      hu: "A Dunakanyar felett magasodó fenséges vár, egykori királyi székhely.",
      ro: "Cetatea maiestuoasă de deasupra cotului Dunării, fostă reședință regală.",
      en: "The majestic castle high above the Danube Bend, once a royal residence."
    },
    facts: {
      de: ["Mittelalterliche Waffen.", "Blick auf das Donauknie."],
      hu: ["Középkori fegyverkiállítás.", "Kilátás a Dunakanyarra."],
      ro: ["Expoziție de arme medievale.", "Vedere spre cotul Dunării."],
      en: ["Medieval weapons display.", "Offers a view of the Danube Bend."]
    }
  },
  {
    id: "historical-godolloi-kastely-extra",
    type: "historical",
    parent: "HU-PE",
    coords: [19.347, 47.596],
    name: { de: "Schloss Gödöllő", hu: "Gödöllői Királyi Kastély", ro: "Castelul Regal din Gödöllő", en: "Royal Palace of Gödöllő" },
    description: {
      de: "Das größte Barockschloss Ungarns, einst Lieblingsresidenz von Königin Sisi.",
      hu: "Magyarország legnagyobb barokk kastélya, Sisi királyné kedvenc lakhelye.",
      ro: "Cel mai mare castel baroc din Ungaria, reședința preferată a reginei Sisi.",
      en: "Hungary's largest Baroque palace, a favorite residence of Queen Sisi."
    },
    facts: {
      de: ["Prächtiges Reittheater.", "Schöner Schlosspark."],
      hu: ["Pompás lovarda.", "Gyönyörű kastélypark."],
      ro: ["Manaj superb.", "Parc de castel minunat."],
      en: ["Splendid riding hall.", "Beautiful palace park."]
    }
  },
  {
    id: "animal-habitat-medveotthon-extra",
    type: "animal-habitat",
    parent: "HU-PE",
    coords: [19.267, 47.635],
    name: { de: "Bärenheim Veresegyház", hu: "Veresegyházi Medveotthon", ro: "Sanctuarul de Urși Veresegyház", en: "Veresegyhaz Bear Sanctuary" },
    description: {
      de: "Der einzige Bärenpark in Mitteleuropa, der geretteten Bären und Wölfen ein Zuhause bietet.",
      hu: "Közép-Európa egyetlen medveotthona, amely mentett medvéknek és farkasoknak ad otthont.",
      ro: "Singurul sanctuar de urși din Europa Centrală, casă pentru urși și lupi salvați.",
      en: "The only bear sanctuary in Central Europe, home to rescued bears and wolves."
    },
    facts: {
      de: ["Über 30 Bären.", "Fütterung mit Honig."],
      hu: ["Több mint 30 medve.", "Mézzel is lehet etetni."],
      ro: ["Peste 30 de urși.", "Hrănire cu miere."],
      en: ["Home to over 30 bears.", "Visitors can feed them honey."]
    }
  },
  {
    id: "kid-landmark-szentendre-skanzen-extra",
    type: "kid-landmark",
    parent: "HU-PE",
    coords: [19.049, 47.697],
    name: { de: "Skanzen Szentendre", hu: "Szentendrei Skanzen", ro: "Muzeul Satului din Szentendre", en: "Szentendre Open-Air Museum" },
    description: {
      de: "Das größte Freilichtmuseum Ungarns, das die ländliche Architektur aller Regionen zeigt.",
      hu: "Magyarország legnagyobb szabadtéri múzeuma, bemutatva a népi építészetet.",
      ro: "Cel mai mare muzeu în aer liber din Ungaria, prezentând arhitectura populară.",
      en: "Hungary's largest open-air museum, showcasing regional folk architecture."
    },
    facts: {
      de: ["Historische Eisenbahn.", "Handwerksvorführungen."],
      hu: ["Skanzen-vonat közlekedik.", "Kézműves bemutatók."],
      ro: ["Trenuleț istoric în interior.", "Demonstrații meșteșugărești."],
      en: ["Internal heritage train.", "Craftsmanship demonstrations."]
    }
  },
  {
    id: "industry-mol-olajfinomito-extra",
    type: "industry",
    parent: "HU-PE",
    coords: [18.918, 47.288],
    name: { de: "MOL Raffinerie Százhalombatta", hu: "MOL Olajfinomító Százhalombatta", ro: "Rafinăria MOL Százhalombatta", en: "MOL Refinery Szazhalombatta" },
    description: {
      de: "Die größte Ölraffinerie Ungarns, eine Schlüsselanlage der nationalen Energieversorgung.",
      hu: "Magyarország legnagyobb kőolajfinomítója, az ország energiabiztonságának alapja.",
      ro: "Cea mai mare rafinărie din Ungaria, unitate cheie pentru securitatea energetică.",
      en: "Hungary's largest oil refinery, a key facility for national energy security."
    },
    facts: {
      de: ["Donau-Raffinerie.", "Riesige Lagertanks."],
      hu: ["Dunai Finomító néven ismert.", "Hatalmas tárolótartályok."],
      ro: ["Cunoscută ca Rafinăria Dunăreană.", "Rezervoare de stocare uriașe."],
      en: ["Known as the Danube Refinery.", "Features massive storage tanks."]
    }
  },

  // HU-SO: Somogy (2G, 2LN, 1W)
  {
    id: "historical-csillagvar-balatonszentgyorgy-extra",
    type: "historical",
    parent: "HU-SO",
    coords: [17.388, 46.687],
    name: { de: "Sternburg Balatonszentgyörgy", hu: "Balatonszentgyörgyi Csillagvár", ro: "Cetatea Stea Balatonszentgyörgy", en: "Star Castle Balatonszentgyörgy" },
    description: {
      de: "Ein sternförmiges Gebäude aus dem 19. Jahrhundert, das als Jagdschloss diente.",
      hu: "19. századi csillag alaprajzú épület, amely vadászkastélyként szolgált.",
      ro: "Clădire în formă de stea din secolul XIX, care a servit drept castel de vânătoare.",
      en: "A 19th-century star-shaped building that served as a hunting lodge."
    },
    facts: {
      de: ["Vorgeschichtliche Museum.", "Einzigartige Architektur."],
      hu: ["Őstörténeti múzeum.", "Egyedülálló építészeti stílus."],
      ro: ["Muzeu de preistorie.", "Stil arhitectural unic."],
      en: ["Prehistoric museum.", "Unique architectural style."]
    }
  },
  {
    id: "historical-kaposvari-varoshaza-extra",
    type: "historical",
    parent: "HU-SO",
    coords: [17.791, 46.358],
    name: { de: "Rathaus von Kaposvár", hu: "Kaposvári Városháza", ro: "Primăria din Kaposvár", en: "Kaposvár City Hall" },
    description: {
      de: "Ein prachtvolles neorenaissancistisches Gebäude am Hauptplatz von Kaposvár.",
      hu: "Pompás neoreneszánsz épület Kaposvár főterén.",
      ro: "O clădire neorenascentistă superbă în piața centrală din Kaposvár.",
      en: "A magnificent Neo-Renaissance building on the main square of Kaposvár."
    },
    facts: {
      de: ["Im 19. Jahrhundert erbaut.", "Schöner Ratssaal."],
      hu: ["A 19. század végén épült.", "Díszes díszteremmel."],
      ro: ["Construită la finele sec. XIX.", "Sală festivă decorată."],
      en: ["Built in the late 19th century.", "Features an ornate ceremonial hall."]
    }
  },
  {
    id: "kid-landmark-katica-tanya-extra",
    type: "kid-landmark",
    parent: "HU-SO",
    coords: [17.712, 46.257],
    name: { de: "Marienkäfer-Farm Patca", hu: "Katica Tanya", ro: "Ferma Gărgărița Patca", en: "Ladybird Farm Patca" },
    description: {
      de: "Ein riesiger Erlebnispark für Familien mit Tieren und zahlreichen Spielmöglichkeiten.",
      hu: "Hatalmas élményközpont családoknak, állatokkal és rengeteg játékkal.",
      ro: "Un centru de distracție uriaș pentru familii, cu animale și multe jocuri.",
      en: "A massive experience center for families with animals and many play options."
    },
    facts: {
      de: ["Riesige Rutschen.", "Bauernhof-Aktivitäten."],
      hu: ["Óriáscsúszdák találhatók itt.", "Gazdasági tevékenységek gyerekeknek."],
      ro: ["Tobogane uriașe.", "Activități de fermă pentru copii."],
      en: ["Features giant slides.", "Farm activities for children."]
    }
  },
  {
    id: "agriculture-balatoni-halaszat-extra",
    type: "agriculture",
    parent: "HU-SO",
    coords: [17.885, 46.915],
    name: { de: "Balaton-Fischerei", hu: "Balatoni halászat", ro: "Pescuitul la Balaton", en: "Balaton Fishery" },
    description: {
      de: "Die Tradition der Fischerei am Balaton, dem größten Binnensee Mitteleuropas.",
      hu: "A balatoni halászat hagyománya, Közép-Európa legnagyobb tavánál.",
      ro: "Tradiția pescuitului la Balaton, cel mai mare lac din Europa Centrală.",
      en: "The tradition of fishing at Lake Balaton, Central Europe's largest lake."
    },
    facts: {
      de: ["Zander als Spezialität.", "Historische Fischernetze."],
      hu: ["A süllő a fő specialitás.", "Történelmi halászati eszközök."],
      ro: ["Șalăul este principala captură.", "Unelte istorice de pescuit."],
      en: ["Zander is a local specialty.", "Historic fishing tools."]
    }
  },
  {
    id: "industry-kaposvari-cukorgyar-extra",
    type: "industry",
    parent: "HU-SO",
    coords: [17.810, 46.370],
    name: { de: "Zuckerfabrik Kaposvár", hu: "Kaposvári Cukorgyár", ro: "Fabrica de Zahăr Kaposvár", en: "Kaposvar Sugar Factory" },
    description: {
      de: "Die einzige noch aktive Zuckerfabrik Ungarns, ein wichtiges Werk der Lebensmittelindustrie.",
      hu: "Magyarország egyetlen működő cukorgyára, az élelmiszeripar fontos bázisa.",
      ro: "Singura fabrică de zahăr activă din Ungaria, bază importantă a industriei alimentare.",
      en: "Hungary's only active sugar factory, an important base for the food industry."
    },
    facts: {
      de: ["Verarbeitet Zuckerrüben.", "Produziert Biogas."],
      hu: ["Cukorrépát dolgoz fel.", "Biogázt is előállít."],
      ro: ["Procesează sfeclă de zahăr.", "Produce și biogaz."],
      en: ["Processes sugar beets.", "Also produces biogas."]
    }
  },

  // HU-SZ: Szabolcs-Szatmár-Bereg (2G, 1LN, 2W)
  {
    id: "historical-nyirbatori-templom-extra",
    type: "historical",
    parent: "HU-SZ",
    coords: [22.128, 47.838],
    name: { de: "Kirche von Nyírbátor", hu: "Nyírbátori református templom", ro: "Biserica Reformată din Nyírbátor", en: "Reformed Church of Nyirbator" },
    description: {
      de: "Ein Meisterwerk der Spätgotik mit einem der höchsten hölzernen Glockentürme.",
      hu: "A késő gótika remekműve, az egyik legmagasabb fa harangtoronnyal.",
      ro: "O capodoperă a goticului târziu, cu unul dintre cele mai înalte turnuri de lemn.",
      en: "A masterpiece of Late Gothic architecture with one of the tallest wooden belfries."
    },
    facts: {
      de: ["Báthory-Gedächtnisort.", "Netzgewölbe."],
      hu: ["Báthory-emlékhely.", "Gyönyörű hálóboltozat."],
      ro: ["Loc memorial Báthory.", "Bolți în rețea superbe."],
      en: ["Báthory family heritage site.", "Beautiful net vaulting."]
    }
  },
  {
    id: "historical-mariapocs-kegytemplom-extra",
    type: "historical",
    parent: "HU-SZ",
    coords: [22.028, 47.878],
    name: { de: "Wallfahrtskirche Máriapócs", hu: "Máriapócsi kegytemplom", ro: "Biserica din Máriapócs", en: "Mariapocs Pilgrimage Church" },
    description: {
      de: "Einer der bedeutendsten Wallfahrtsorte Ungarns, bekannt für die 'weinende Madonna'.",
      hu: "Magyarország egyik legjelentősebb zarándokhelye, a könnyező Szűzanya kegyhelye.",
      ro: "Unul dintre cele mai importante locuri de pelerinaj, sanctuarul Madonei care plânge.",
      en: "One of Hungary's most important pilgrimage sites, the shrine of the Weeping Madonna."
    },
    facts: {
      de: ["Griechisch-katholisches Zentrum.", "Barocke Ausstattung."],
      hu: ["Görögkatolikus központ.", "Barokk berendezés."],
      ro: ["Centru greco-catolic.", "Mobilier baroc."],
      en: ["Greek Catholic center.", "Baroque interior."]
    }
  },
  {
    id: "animal-habitat-nyiregyhazi-allatpark-extra",
    type: "animal-habitat",
    parent: "HU-SZ",
    coords: [21.670, 48.005],
    name: { de: "Zoo Nyíregyháza", hu: "Nyíregyházi Állatpark", ro: "Grădina Zoologică Nyíregyháza", en: "Nyiregyhaza Zoo" },
    description: {
      de: "Einer der besten Zoos Europas in einem Eichenwald bei Sóstó.",
      hu: "Európa egyik legjobb állatkertje a nyíregyházi Sóstó melletti tölgyerdőben.",
      ro: "Una dintre cele mai bune grădini zoologice din Europa, în pădurea de la Sóstó.",
      en: "One of Europe's best zoos, located in an oak forest near Sóstó."
    },
    facts: {
      de: ["Über 500 Tierarten.", "Ozeanarium und Regenwaldhaus."],
      hu: ["Több mint 500 állatfaj.", "Ócenárium és esőerdő-ház."],
      ro: ["Peste 500 de specii.", "Oceanariu și casa pădurii tropicale."],
      en: ["Home to over 500 species.", "Features an oceanarium and rainforest house."]
    }
  },
  {
    id: "industry-lego-nyiregyhaza-extra",
    type: "industry",
    parent: "HU-SZ",
    coords: [21.751, 47.915],
    name: { de: "LEGO Werk Nyíregyháza", hu: "LEGO Gyár Nyíregyháza", ro: "Fabrica LEGO Nyíregyháza", en: "LEGO Factory Nyiregyhaza" },
    description: {
      de: "Eines der modernsten LEGO-Werke weltweit, wo Millionen von Bausteinen entstehen.",
      hu: "A világ egyik legmodernebb LEGO gyára, ahol építőkockák milliói készülnek.",
      ro: "Una dintre cele mai moderne fabrici LEGO din lume, unde se produc milioane de piese.",
      en: "One of the most modern LEGO factories worldwide, producing millions of bricks."
    },
    facts: {
      de: ["Riesiges Logistikzentrum.", "Nachhaltige Produktion."],
      hu: ["Hatalmas logisztikai központ.", "Fenntartható gyártás."],
      ro: ["Centru logistic uriaș.", "Producție sustenabilă."],
      en: ["Massive logistics hub.", "Features sustainable production."]
    }
  },
  {
    id: "agriculture-szabolcsi-alma-extra",
    type: "agriculture",
    parent: "HU-SZ",
    coords: [22.250, 48.050],
    name: { de: "Apfelplantagen von Szabolcs", hu: "Szabolcsi almáskertek", ro: "Livezile de meri din Szabolcs", en: "Szabolcs Apple Orchards" },
    description: {
      de: "Die größte Apfelanbauregion Ungarns, bekannt für hochwertige Früchte.",
      hu: "Magyarország legnagyobb almatermő vidéke, kiváló minőségű gyümölcsökkel.",
      ro: "Cea mai mare regiune pomicolă din Ungaria, celebră pentru meri.",
      en: "Hungary's largest apple-growing region, famous for high-quality fruit."
    },
    facts: {
      de: ["Jonatán-Spezialität.", "Export in viele Länder."],
      hu: ["A Jonatán alma a fő fajta.", "Számos országba exportálnak."],
      ro: ["Soiul Ionatan este principal.", "Exportă în numeroase țări."],
      en: ["Jonathan apples are the main variety.", "Exports to many countries."]
    }
  },

  // HU-TO: Tolna (2G, 1LN, 2W)
  {
    id: "historical-simontornyai-var-extra",
    type: "historical",
    parent: "HU-TO",
    coords: [18.552, 46.751],
    name: { de: "Burg Simontornya", hu: "Simontornyai vár", ro: "Cetatea Simontornya", en: "Simontornya Castle" },
    description: {
      de: "Eine gut erhaltene Renaissance-Burg, die einst Teil des Verteidigungsgürtels war.",
      hu: "Jó állapotban maradt reneszánsz vár, amely egykor a végvárrendszer része volt.",
      ro: "O cetate renascentistă bine conservată, fostă parte a sistemului de apărare.",
      en: "A well-preserved Renaissance castle, once part of the defensive border system."
    },
    facts: {
      de: ["Gotischer Wohnturm.", "Renaissance-Ausstellung."],
      hu: ["Gótikus lakótoronnyal.", "Reneszánsz kiállítás látható benne."],
      ro: ["Turn de locuit gotic.", "Expoziție renascentistă."],
      en: ["Gothic residential tower.", "Features a Renaissance exhibition."]
    }
  },
  {
    id: "historical-dunafoldvari-var-extra",
    type: "historical",
    parent: "HU-TO",
    coords: [18.928, 46.805],
    name: { de: "Burg Dunaföldvár", hu: "Dunaföldvári vár", ro: "Cetatea Dunaföldvár", en: "Dunaföldvár Castle" },
    description: {
      de: "Eine Donaufestung mit einem markanten Wohnturm, der heute als Museum dient.",
      hu: "Dunai erődítmény jellegzetes öregtoronnyal, amely ma múzeum.",
      ro: "O fortificație dunăreană cu un turn principal distinctiv, astăzi muzeu.",
      en: "A Danube fortress with a distinctive keep, now serving as a museum."
    },
    facts: {
      de: ["Blick auf die Donau.", "Mittelalterliche Mauern."],
      hu: ["Kilátás a Dunára.", "Középkori falak."],
      ro: ["Vedere spre Dunăre.", "Ziduri medievale."],
      en: ["Offers a view of the Danube.", "Medieval walls."]
    }
  },
  {
    id: "kid-landmark-gemenci-kisvasut-extra",
    type: "kid-landmark",
    parent: "HU-TO",
    coords: [18.847, 46.223],
    name: { de: "Schmalspurbahn Gemenc", hu: "Gemenci kisvasút", ro: "Trenulețul de la Gemenc", en: "Gemenc Forest Railway" },
    description: {
      de: "Eine charmante Waldbahn, die durch die größte Auenlandschaft Ungarns führt.",
      hu: "Bájos erdei vasút, amely Magyarország legnagyobb ártéri erdején vezet keresztül.",
      ro: "Un trenuleț de pădure fermecător care traversează cea mai mare luncă din Ungaria.",
      en: "A charming forest railway running through Hungary's largest floodplain forest."
    },
    facts: {
      de: ["Wildbeobachtung möglich.", "Start in Pörböly."],
      hu: ["Vadmegfigyelési lehetőség.", "Pörbölyről indul."],
      ro: ["Observare de animale sălbatice.", "Plecare din Pörböly."],
      en: ["Wildlife spotting opportunities.", "Starts from Pörböly."]
    }
  },
  {
    id: "industry-paksi-atomeromu-extra",
    type: "industry",
    parent: "HU-TO",
    coords: [18.855, 46.573],
    name: { de: "Kernkraftwerk Paks", hu: "Paksi Atomerőmű", ro: "Centrala Nucleară Paks", en: "Paks Nuclear Power Plant" },
    description: {
      de: "Das einzige Kernkraftwerk Ungarns, das rund die Hälfte des Strombedarfs deckt.",
      hu: "Magyarország egyetlen atomerőműve, amely az ország áramigényének felét biztosítja.",
      ro: "Singura centrală nucleară din Ungaria, care asigură jumătate din necesarul de curent.",
      en: "Hungary's only nuclear power plant, providing half of the country's electricity."
    },
    facts: {
      de: ["Vier Reaktorblöcke.", "Besucherzentrum."],
      hu: ["Négy reaktorblokk.", "Látogatóközponttal rendelkezik."],
      ro: ["Patru blocuri de reactoare.", "Deține un centru pentru vizitatori."],
      en: ["Four reactor units.", "Includes a visitor center."]
    }
  },
  {
    id: "agriculture-szekszardi-bor-extra",
    type: "agriculture",
    parent: "HU-TO",
    coords: [18.702, 46.348],
    name: { de: "Weinregion Szekszárd", hu: "Szekszárdi borvidék", ro: "Regiunea viticolă Szekszárd", en: "Szekszárd Wine Region" },
    description: {
      de: "Eine traditionsreiche Rotweinregion, bekannt für den Szekszárdi Bikavér.",
      hu: "Nagy múltú vörösboros vidék, híres a szekszárdi bikavérről.",
      ro: "Regiune viticolă cu tradiție pentru vinuri roșii, celebră pentru Bikavér.",
      en: "A historic red wine region, famous for the Szekszárd Bikavér (Bull's Blood)."
    },
    facts: {
      de: ["Lössböden.", "Hunderte von Weinkellern."],
      hu: ["Löszös talaj.", "Több száz borospince."],
      ro: ["Sol loessos.", "Sute de pivnițe de vin."],
      en: ["Loess soil.", "Home to hundreds of wine cellars."]
    }
  },

  // HU-VA: Vas (2G, 1LN, 2W)
  {
    id: "historical-jurisics-var-extra",
    type: "historical",
    parent: "HU-VA",
    coords: [16.541, 47.390],
    name: { de: "Jurisics-Burg Kőszeg", hu: "Jurisics-vár", ro: "Cetatea Jurisics", en: "Jurisics Castle" },
    description: {
      de: "Symbol des Widerstands gegen die Osmanen unter der Führung von Miklós Jurisics.",
      hu: "A török elleni hősies védekezés szimbóluma, Jurisics Miklós vezetésével.",
      ro: "Simbolul apărării eroice împotriva otomanilor, sub comanda lui Miklós Jurisics.",
      en: "Symbol of the heroic defense against the Ottomans, led by Miklós Jurisics."
    },
    facts: {
      de: ["Mittelalterliche Mauern.", "Glockengeläut um 11 Uhr."],
      hu: ["Középkori falak.", "11 órakor is szólnak a harangok."],
      ro: ["Ziduri medievale.", "Clopotele bat și la ora 11."],
      en: ["Medieval walls.", "Bells ring at 11 AM to commemorate the defense."]
    }
  },
  {
    id: "historical-nadasdy-var-sarvar-extra",
    type: "historical",
    parent: "HU-VA",
    coords: [16.936, 47.252],
    name: { de: "Nádasdy-Burg Sárvár", hu: "Sárvári Nádasdy-vár", ro: "Cetatea Nádasdy din Sárvár", en: "Nádasdy Castle Sárvár" },
    description: {
      de: "Eine prächtige Renaissance-Burg mit einem berühmten Prunksaal.",
      hu: "Pompás reneszánsz várkastély, híres díszteremmel.",
      ro: "O cetate renascentistă superbă, cu o sală festivă celebră.",
      en: "A magnificent Renaissance castle with a famous ceremonial hall."
    },
    facts: {
      de: ["Barocke Deckenfresken.", "Hussarenausstellung."],
      hu: ["Barokk mennyezeti freskók.", "Huszárkiállítás látható."],
      ro: ["Fresce baroce pe tavan.", "Expoziție de husari."],
      en: ["Baroque ceiling frescoes.", "Houses a hussar exhibition."]
    }
  },
  {
    id: "kid-landmark-jeli-arboretum-extra",
    type: "kid-landmark",
    parent: "HU-VA",
    coords: [17.062, 47.072],
    name: { de: "Jeli Arborétum", hu: "Jeli Arborétum", ro: "Arboretumul Jeli", en: "Jeli Arboretum" },
    description: {
      de: "Ein farbenfroher Garten, berühmt für seine Rhododendronblüte im Mai.",
      hu: "Színpompás kert, amely a májusi rododendron-virágzásról híres.",
      ro: "O grădină colorată, celebră pentru înflorirea rododendronilor în mai.",
      en: "A colorful garden famous for its rhododendron blooming in May."
    },
    facts: {
      de: ["'Garten der Düfte'.", "Exotische Pflanzenarten."],
      hu: ["A 'varázskert' néven is ismert.", "Egzotikus növényfajok."],
      ro: ["Cunoscut ca 'grădina magică'.", "Specii de plante exotice."],
      en: ["Known as the 'Magic Garden'.", "Home to exotic plant species."]
    }
  },
  {
    id: "industry-opel-szentgotthard-extra",
    type: "industry",
    parent: "HU-VA",
    coords: [16.273, 46.953],
    name: { de: "Opel Werk Szentgotthárd", hu: "Opel Gyár Szentgotthárd", ro: "Fabrica Opel Szentgotthárd", en: "Opel Plant Szentgotthard" },
    description: {
      de: "Ein bedeutendes Motorenwerk, das für verschiedene Marken der Stellantis-Gruppe produziert.",
      hu: "Jelentős motorgyár, amely a Stellantis-csoport számos márkájának termel.",
      ro: "O fabrică importantă de motoare care produce pentru grupul Stellantis.",
      en: "A major engine plant producing for various brands of the Stellantis Group."
    },
    facts: {
      de: ["Seit 1990er Jahren.", "Hochpräzise Fertigung."],
      hu: ["Az 1990-es évek óta működik.", "Nagy pontosságú gyártás."],
      ro: ["Activă din anii 1990.", "Producție de înaltă precizie."],
      en: ["Active since the 1990s.", "High-precision manufacturing."]
    }
  },
  {
    id: "industry-kormendi-gyogyszergyar-extra",
    type: "industry",
    parent: "HU-VA",
    coords: [16.602, 47.009],
    name: { de: "Pharmwerk Körmend", hu: "Egis Körmend", ro: "Fabrica Egis Körmend", en: "Egis Körmend Pharmaceutical" },
    description: {
      de: "Ein wichtiger Standort der ungarischen Pharmaindustrie, spezialisiert auf Medikamentenproduktion.",
      hu: "A magyar gyógyszeripar egyik fontos bázisa, gyógyszergyártásra szakosodva.",
      ro: "O bază importantă a industriei farmaceutice maghiare, specializată în medicamente.",
      en: "An important base of the Hungarian pharmaceutical industry, specializing in drug production."
    },
    facts: {
      de: ["Modernes Labor.", "Wichtiger regionaler Arbeitgeber."],
      hu: ["Modern laboratórium.", "Fontos regionális munkáltató."],
      ro: ["Laborator modern.", "Angajator regional important."],
      en: ["Modern laboratory.", "Important regional employer."]
    }
  },

  // HU-VE: Veszprém (2G, 1LN, 2W)
  {
    id: "historical-sumegi-var-extra",
    type: "historical",
    parent: "HU-VE",
    coords: [17.282, 46.982],
    name: { de: "Burg Sümeg", hu: "Sümegi vár", ro: "Cetatea Sümeg", en: "Sumeg Castle" },
    description: {
      de: "Eine der am besten erhaltenen Höhenburgen Ungarns mit regelmäßigen Ritterspielen.",
      hu: "Magyarország egyik legépszerűbb hegyi vára, rendszeres lovagi játékokkal.",
      ro: "Una dintre cele mai bine conservate cetăți montane, cu turniruri cavalerești.",
      en: "One of Hungary's best-preserved hilltop castles with regular knightly tournaments."
    },
    facts: {
      de: ["Auf einem Kalksteinfelsen.", "Mittelalterliches Erlebnismuseum."],
      hu: ["Mészkőszirten magasodik.", "Középkori élménymúzeum."],
      ro: ["Situată pe o stâncă de calcar.", "Muzeu interactiv medieval."],
      en: ["Perched on a limestone cliff.", "Features a medieval experience museum."]
    }
  },
  {
    id: "historical-tihanyi-apatsag-extra",
    type: "historical",
    parent: "HU-VE",
    coords: [17.892, 46.914],
    name: { de: "Abtei Tihany", hu: "Tihanyi Bencés Apátság", ro: "Abatia Tihany", en: "Tihany Benedictine Abbey" },
    description: {
      de: "Ein Wahrzeichen des Balatons, berühmt für seine barocke Kirche und die Gründungsurkunde.",
      hu: "A Balaton jelképe, híres barokk templomáról és az alapítóleveléről.",
      ro: "Simbolul Balatonului, celebră pentru biserica barocă și hrisovul de ctitorire.",
      en: "A landmark of Lake Balaton, famous for its Baroque church and founding charter."
    },
    facts: {
      de: ["Wunderschönes Panorama.", "Königliche Krypta."],
      hu: ["Gyönyörű panoráma.", "Királyi kripta található alatta."],
      ro: ["Panoramă superbă.", "Criptă regală sub biserică."],
      en: ["Beautiful panoramic view.", "Includes a royal crypt."]
    }
  },
  {
    id: "animal-habitat-veszpremi-allatkert-extra",
    type: "animal-habitat",
    parent: "HU-VE",
    coords: [17.895, 47.094],
    name: { de: "Zoo Veszprém", hu: "Veszprémi Állatkert", ro: "Grădina Zoologică din Veszprém", en: "Veszprem Zoo" },
    description: {
      de: "Ein malerischer Zoo mit einem großen Dinopark und afrikanischen Savannengehegen.",
      hu: "Festői állatkert óriási dinóparkkal és afrikai szavanna kifutóval.",
      ro: "O grădină zoologică pitorească cu un parc de dinozauri și savană africană.",
      en: "A scenic zoo featuring a large Dino Park and an African savanna enclosure."
    },
    facts: {
      de: ["Ganzjährig geöffnet.", "Modernes Elefantenhaus."],
      hu: ["Egész évben nyitva áll.", "Modern elefántház."],
      ro: ["Deschis tot anul.", "Casă modernă pentru elefanți."],
      en: ["Open all year round.", "Features a modern elephant house."]
    }
  },
  {
    id: "industry-herendi-porcelan-extra",
    type: "industry",
    parent: "HU-VE",
    coords: [17.752, 47.132],
    name: { de: "Porzellanmanufaktur Herend", hu: "Herendi Porcelánmanufaktúra", ro: "Manufactura de Porțelan Herend", en: "Herend Porcelain Manufactory" },
    description: {
      de: "Die weltberühmte Manufaktur für handgemaltes Luxusporzellan.",
      hu: "A világhírű, kézzel festett luxusporcelánokat készítő manufaktúra.",
      ro: "Manufactură de renume mondial care produce porțelan de lux pictat manual.",
      en: "The world-famous manufactory producing hand-painted luxury porcelain."
    },
    facts: {
      de: ["Hungaricum.", "Besucherzentrum Porcelanium."],
      hu: ["Hungarikum.", "Porcelanium látogatóközpont."],
      ro: ["Produs Hungaricum.", "Centru pentru vizitatori Porcelanium."],
      en: ["A certified Hungaricum.", "Includes the Porcelanium Visitor Center."]
    }
  },
  {
    id: "industry-ajkai-timfoldgyar-extra",
    type: "industry",
    parent: "HU-VE",
    coords: [17.555, 47.100],
    name: { de: "Tonerdefabrik Ajka", hu: "Ajkai Timföldgyár", ro: "Fabrica de Alumină Ajka", en: "Ajka Alumina Plant" },
    description: {
      de: "Ein bedeutendes Werk der ungarischen Aluminiumindustrie.",
      hu: "A magyar alumíniumipar egyik jelentős bázisa.",
      ro: "O bază importantă a industriei de aluminiu din Ungaria.",
      en: "An important base of the Hungarian aluminum industry."
    },
    facts: {
      de: ["Industriezentrum.", "Verarbeitet Bauxit."],
      hu: ["Ipari központ.", "Bauxitot dolgoz fel."],
      ro: ["Centru industrial.", "Procesează bauxită."],
      en: ["Industrial center.", "Processes bauxite."]
    }
  },

  // HU-ZA: Zala (2G, 1LN, 2W)
  {
    id: "historical-festetics-keszthely-extra",
    type: "historical",
    parent: "HU-ZA",
    coords: [17.242, 46.771],
    name: { de: "Schloss Festetics Keszthely", hu: "Festetics-kastély", ro: "Castelul Festetics", en: "Festetics Palace" },
    description: {
      de: "Eines der prachtvollsten Barockschlösser Ungarns mit der berühmten Helikon-Bibliothek.",
      hu: "Magyarország egyik legpompásabb barokk kastélya a híres Helikon Könyvtárral.",
      ro: "Unul dintre cele mai superbe castele baroce cu celebra bibliotecă Helikon.",
      en: "One of Hungary's grandest Baroque palaces, featuring the famous Helikon Library."
    },
    facts: {
      de: ["101 Räume.", "Wunderschöner Schlossgarten."],
      hu: ["101 szobával rendelkezik.", "Gyönyörű kastélypark veszi körül."],
      ro: ["Are 101 camere.", "Înconjurat de un parc superb."],
      en: ["Features 101 rooms.", "Surrounded by a beautiful palace garden."]
    }
  },
  {
    id: "historical-rezi-var-extra",
    type: "historical",
    parent: "HU-ZA",
    coords: [17.228, 46.863],
    name: { de: "Burg Rezi", hu: "Rezi vár", ro: "Cetatea Rezi", en: "Rezi Castle" },
    description: {
      de: "Eine mittelalterliche Burgruine auf einem Felsen im Keszthelyer Gebirge.",
      hu: "Középkori várrom a Keszthelyi-hegység egyik bérci szikláján.",
      ro: "Ruină medievală pe o stâncă din munții Keszthely.",
      en: "A medieval castle ruin perched on a cliff in the Keszthely Mountains."
    },
    facts: {
      de: ["Blick auf den Balaton.", "Im 13. Jahrhundert erbaut."],
      hu: ["Kilátás a Balatonra.", "A 13. században épült."],
      ro: ["Vedere spre Balaton.", "Construită în secolul XIII."],
      en: ["Offers a view of Lake Balaton.", "Built in the 13th century."]
    }
  },
  {
    id: "kid-landmark-zalakaros-furdo-extra",
    type: "kid-landmark",
    parent: "HU-ZA",
    coords: [17.126, 46.548],
    name: { de: "Heilbad Zalakaros", hu: "Zalakarosi Termálfürdő", ro: "Baia Termală Zalakaros", en: "Zalakaros Thermal Bath" },
    description: {
      de: "Ein beliebtes Thermal- und Erlebnisbad, ideal für Familien mit Kindern.",
      hu: "Népszerű termál- és élményfürdő, amely ideális családosoknak.",
      ro: "Baie termală și de agrement populară, ideală pentru familii.",
      en: "A popular thermal and adventure bath, ideal for families with children."
    },
    facts: {
      de: ["Große Rutschenwelt.", "Heilkräftiges Wasser."],
      hu: ["Hatalmas csúszdapark.", "Gyógyhatású termálvíz."],
      ro: ["Lume a toboganelor.", "Apă termală curativă."],
      en: ["Features a large slide park.", "Healing thermal water."]
    }
  },
  {
    id: "industry-nagylengyeli-olaj-extra",
    type: "industry",
    parent: "HU-ZA",
    coords: [16.732, 46.755],
    name: { de: "Ölfeld Nagylengyel", hu: "Nagylengyeli olajmező", ro: "Câmpul petrolier Nagylengyel", en: "Nagylengyel Oil Field" },
    description: {
      de: "Das bedeutendste Erdölfördergebiet Ungarns in Transdanubien.",
      hu: "Magyarország legjelentősebb dunántúli kőolajkitermelő területe.",
      ro: "Cea mai importantă zonă de extracție a petrolului din Transdanubia.",
      en: "Hungary's most significant oil production area in Transdanubia."
    },
    facts: {
      de: ["Seit 1950er Jahren.", "Typische Tiefpumpen."],
      hu: ["Az 1950-es évek óta.", "Jellegzetes mélységi szivattyúk."],
      ro: ["Din anii 1950.", "Pompe de adâncime tipice."],
      en: ["Active since the 1950s.", "Features characteristic nodding donkeys."]
    }
  },
  {
    id: "industry-zalaegerszegi-ruhagyar-extra",
    type: "industry",
    parent: "HU-ZA",
    coords: [16.840, 46.845],
    name: { de: "Bekleidungswerk Zalaegerszeg", hu: "Zalaegerszegi ruhagyár", ro: "Fabrica de Confecții Zalaegerszeg", en: "Zalaegerszeg Clothing Factory" },
    description: {
      de: "Ein traditionsreiches Werk der ungarischen Textilindustrie.",
      hu: "A magyar könnyűipar egyik nagy múltú szereplője.",
      ro: "Un actor cu tradiție în industria ușoară maghiară.",
      en: "A long-standing player in the Hungarian textile industry."
    },
    facts: {
      de: ["Hochwertige Mode.", "Exportfokus."],
      hu: ["Minőségi ruházati termékek.", "Export fókuszú gyártás."],
      ro: ["Produse de calitate.", "Orientare spre export."],
      en: ["High-quality clothing products.", "Export-oriented production."]
    }
  }
];

