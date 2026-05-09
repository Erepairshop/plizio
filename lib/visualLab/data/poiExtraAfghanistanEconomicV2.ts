import type { POI } from "./poi";

export const poiExtraAfghanistanEconomicV2: POI[] = [
  {
    id: "mes-aynak-mine-economic-v2",
    type: "mine",
    parent: "AF-LOG",
    coords: [69.25, 34.40],
    name: { de: "Kupfermine Mes Aynak", hu: "Mesz Ajnak rézbánya", ro: "Mina de cupru Mes Aynak", en: "Mes Aynak Copper Mine" },
    description: {
      de: "Mes Aynak ist eine der größten unerschlossenen Kupferlagerstätten der Welt, die sich in der Provinz Logar befindet.",
      hu: "Mesz Ajnak a világ egyik legnagyobb feltáratlan rézlelőhelye, amely Logar tartományban található.",
      ro: "Mes Aynak este unul dintre cele mai mari zăcăminte de cupru neexploatate din lume, situat în provincia Logar.",
      en: "Mes Aynak is one of the world's largest untapped copper deposits, located in Logar Province."
    },
    facts: {
      de: ["Das Vorkommen wird auf Hunderte Millionen Tonnen Erz geschätzt.", "Es beherbergt auch eine bedeutende archäologische Stätte."],
      hu: ["A készleteket több százmillió tonna ércre becsülik.", "A terület egy jelentős régészeti lelőhelyet is rejt."],
      ro: ["Rezervele sunt estimate la sute de milioane de tone de minereu.", "Găzduiește și un sit arheologic important."],
      en: ["The deposit is estimated at hundreds of millions of tons of ore.", "It also hosts a significant archaeological site."]
    }
  },
  {
    id: "hajigak-mine-economic-v2",
    type: "mine",
    parent: "AF-BAM",
    coords: [68.06, 34.66],
    name: { de: "Eisenerzmine Hajigak", hu: "Hadzsigak vasércbánya", ro: "Mina de fier Hajigak", en: "Hajigak Iron Mine" },
    description: {
      de: "Die Hajigak-Mine in der Provinz Bamiyan ist die größte Eisenerzlagerstätte in Afghanistan und der Region.",
      hu: "A Bámiján tartományban található Hadzsigak-bánya Afganisztán és a régió legnagyobb vasérclelőhelye.",
      ro: "Mina Hajigak din provincia Bamiyan este cel mai mare zăcământ de minereu de fier din Afganistan și din regiune.",
      en: "The Hajigak mine in Bamyan Province is the largest iron ore deposit in Afghanistan and the region."
    },
    facts: {
      de: ["Die Lagerstätte enthält schätzungsweise knapp 2 Milliarden Tonnen Eisenerz.", "Sie liegt auf einer Höhe von über 3.000 Metern."],
      hu: ["A lelőhely becslések szerint közel 2 milliárd tonna vasércet tartalmaz.", "Több mint 3000 méteres tengerszint feletti magasságban fekszik."],
      ro: ["Zăcământul conține estimativ aproape 2 miliarde de tone de minereu de fier.", "Este situat la o altitudine de peste 3.000 de metri."],
      en: ["The deposit contains an estimated nearly 2 billion tons of iron ore.", "It is located at an altitude of over 3,000 meters."]
    }
  },
  {
    id: "sher-khan-bandar-economic-v2",
    type: "port",
    parent: "AF-KDZ",
    coords: [68.58, 37.18],
    name: { de: "Grenzhafen Sher Khan Bandar", hu: "Ser Hán Bandar határkikötő", ro: "Portul de frontieră Sher Khan Bandar", en: "Sher Khan Bandar Dry Port" },
    description: {
      de: "Sher Khan Bandar ist ein wichtiger Trockenhafen und Grenzübergang zwischen Afghanistan und Tadschikistan am Amudarja.",
      hu: "Ser Hán Bandar egy fontos szárazföldi kikötő és határátkelő Afganisztán és Tádzsikisztán között az Amu-darja partján.",
      ro: "Sher Khan Bandar este un port uscat și un punct de trecere a frontierei important între Afganistan și Tadjikistan pe Amu Daria.",
      en: "Sher Khan Bandar is a major dry port and border crossing between Afghanistan and Tajikistan on the Amu Darya river."
    },
    facts: {
      de: ["Benannt nach Sher Khan Nashir, einem afghanischen Führer.", "Die Brücke über den Fluss wurde 2007 eröffnet."],
      hu: ["Ser Hán Nasír afgán vezetőről nevezték el.", "A folyón átívelő hidat 2007-ben adták át."],
      ro: ["Numit după Sher Khan Nashir, un lider afgan.", "Podul peste râu a fost deschis în 2007."],
      en: ["Named after Sher Khan Nashir, an Afghan leader.", "The bridge across the river opened in 2007."]
    }
  },
  {
    id: "hairatan-port-economic-v2",
    type: "port",
    parent: "AF-BAL",
    coords: [67.43, 37.23],
    name: { de: "Grenzhafen Hairatan", hu: "Hairatan határállomás", ro: "Portul de frontieră Hairatan", en: "Hairatan Border Port" },
    description: {
      de: "Hairatan ist ein zentraler Grenzhafen in der Provinz Balch und der wichtigste Handelsweg nach Usbekistan.",
      hu: "Hairatan egy központi határállomás Balh tartományban, és a legfontosabb kereskedelmi útvonal Üzbegisztán felé.",
      ro: "Hairatan este un port de frontieră central în provincia Balkh și principala rută comercială către Uzbekistan.",
      en: "Hairatan is a central border port in Balkh Province and the main trade route to Uzbekistan."
    },
    facts: {
      de: ["Verbunden mit Usbekistan durch die Brücke der Freundschaft.", "Verfügt über eine wichtige Eisenbahnverbindung nach Mazar-e Sharif."],
      hu: ["Az Üzbegisztánnal való kapcsolatot a Barátság híd biztosítja.", "Fontos vasúti összeköttetéssel rendelkezik Mazár-e Saríf felé."],
      ro: ["Conectat cu Uzbekistanul prin Podul Prieteniei.", "Dispune de o legătură feroviară importantă spre Mazar-i-Sharif."],
      en: ["Connected to Uzbekistan by the Friendship Bridge.", "Features a major railway connection to Mazar-i-Sharif."]
    }
  },
  {
    id: "islam-qala-hub-economic-v2",
    type: "trade-hub",
    parent: "AF-HER",
    coords: [61.07, 34.66],
    name: { de: "Grenzübergang Islam Qala", hu: "Iszlám Kala határátkelő", ro: "Punctul de trecere Islam Qala", en: "Islam Qala Border Crossing" },
    description: {
      de: "Islam Qala in der Provinz Herat ist der größte und wichtigste Grenzübergang für den Handel zwischen Afghanistan und dem Iran.",
      hu: "A Herát tartományban fekvő Iszlám Kala a legnagyobb és legfontosabb határátkelő Afganisztán és Irán között.",
      ro: "Islam Qala din provincia Herat este cel mai mare și mai important punct de trecere a frontierei pentru comerțul dintre Afganistan și Iran.",
      en: "Islam Qala in Herat Province is the largest and most important border crossing for trade between Afghanistan and Iran."
    },
    facts: {
      de: ["Ein Großteil der afghanischen Importe aus dem Iran passiert hier.", "Die Zolleinnahmen sind entscheidend für den Staat."],
      hu: ["Az iráni afgán import nagy része itt halad át.", "A vámbevételek döntő fontosságúak az állam számára."],
      ro: ["O mare parte din importurile afgane din Iran trec pe aici.", "Veniturile din vamă sunt cruciale pentru stat."],
      en: ["Much of Afghan imports from Iran pass through here.", "Customs revenues are crucial for the state."]
    }
  },
  {
    id: "spin-boldak-hub-economic-v2",
    type: "trade-hub",
    parent: "AF-KAN",
    coords: [66.39, 31.01],
    name: { de: "Grenzübergang Spin Boldak", hu: "Szpin Boldak határátkelő", ro: "Punctul de trecere Spin Boldak", en: "Spin Boldak Border Crossing" },
    description: {
      de: "Spin Boldak ist ein bedeutender Handelsknotenpunkt im Süden Afghanistans und verbindet die Region Kandahar mit Pakistan.",
      hu: "Szpin Boldak egy jelentős kereskedelmi csomópont Dél-Afganisztánban, amely a kandahári régiót köti össze Pakisztánnal.",
      ro: "Spin Boldak este un nod comercial major în sudul Afganistanului, conectând regiunea Kandahar cu Pakistanul.",
      en: "Spin Boldak is a major trade hub in southern Afghanistan, connecting the Kandahar region with Pakistan."
    },
    facts: {
      de: ["Liegt direkt gegenüber der pakistanischen Stadt Chaman.", "Wichtig für den Export von landwirtschaftlichen Produkten."],
      hu: ["Közvetlenül a pakisztáni Csaman várossal szemben fekszik.", "Fontos a mezőgazdasági termékek exportja szempontjából."],
      ro: ["Este situat vizavi de orașul pakistanez Chaman.", "Important pentru exportul de produse agricole."],
      en: ["Located directly opposite the Pakistani city of Chaman.", "Important for the export of agricultural products."]
    }
  },
  {
    id: "torkham-hub-economic-v2",
    type: "trade-hub",
    parent: "AF-NAN",
    coords: [71.08, 34.11],
    name: { de: "Grenzübergang Torkham", hu: "Torkham határátkelő", ro: "Punctul de trecere Torkham", en: "Torkham Border Crossing" },
    description: {
      de: "Torkham ist der verkehrsreichste Grenzübergang zwischen Afghanistan und Pakistan und führt über den historischen Khyber-Pass.",
      hu: "Torkham a legforgalmasabb határátkelő Afganisztán és Pakisztán között, amely a történelmi Haibár-hágón vezet át.",
      ro: "Torkham este cel mai aglomerat punct de trecere a frontierei dintre Afganistan și Pakistan, traversând Pasul Khyber.",
      en: "Torkham is the busiest border crossing between Afghanistan and Pakistan, passing through the historic Khyber Pass."
    },
    facts: {
      de: ["Verbindet die Stadt Dschalalabad mit dem pakistanischen Peschawar.", "Eine Lebensader für den afghanischen Transithandel."],
      hu: ["Dzsalálábád városát köti össze a pakisztáni Pesavarral.", "Az afgán tranzitkereskedelem létfontosságú ütőere."],
      ro: ["Conectează orașul Jalalabad cu Peshawar din Pakistan.", "O linie de salvare pentru comerțul de tranzit afgan."],
      en: ["Connects the city of Jalalabad with Peshawar in Pakistan.", "A lifeline for Afghan transit trade."]
    }
  },
  {
    id: "kajaki-hydro-economic-v2",
    type: "energy",
    parent: "AF-HEL",
    coords: [65.04, 32.32],
    name: { de: "Wasserkraftwerk Kajaki", hu: "Kajaki vízerőmű", ro: "Hidrocentrala Kajaki", en: "Kajaki Hydroelectric Plant" },
    description: {
      de: "Das Wasserkraftwerk Kajaki am Helmand-Fluss liefert entscheidenden Strom für den Süden Afghanistans.",
      hu: "A Helmand folyón lévő Kajaki vízerőmű létfontosságú villamos energiát szolgáltat Dél-Afganisztán számára.",
      ro: "Hidrocentrala Kajaki de pe râul Helmand furnizează energie electrică crucială pentru sudul Afganistanului.",
      en: "The Kajaki Hydroelectric Plant on the Helmand River provides crucial electricity for southern Afghanistan."
    },
    facts: {
      de: ["Ursprünglich in den 1950er Jahren erbaut.", "Die Kapazität wurde durch mehrere Turbinen-Upgrades schrittweise erhöht."],
      hu: ["Eredetileg az 1950-es években épült.", "Kapacitását több turbinafejlesztéssel fokozatosan növelték."],
      ro: ["Construită inițial în anii 1950.", "Capacitatea a fost crescută treptat prin mai multe modernizări ale turbinelor."],
      en: ["Originally built in the 1950s.", "Capacity was gradually increased through several turbine upgrades."]
    }
  },
  {
    id: "naghlou-hydro-economic-v2",
    type: "energy",
    parent: "AF-KAB",
    coords: [69.72, 34.63],
    name: { de: "Wasserkraftwerk Naghlu", hu: "Naghlu vízerőmű", ro: "Hidrocentrala Naghlu", en: "Naghlu Hydropower Plant" },
    description: {
      de: "Die Naghlu-Talsperre ist das größte Wasserkraftwerk Afghanistans und versorgt vor allem die Hauptstadt Kabul mit Strom.",
      hu: "A Naghlu-gát Afganisztán legnagyobb vízerőműve, amely elsősorban a fővárost, Kabult látja el árammal.",
      ro: "Barajul Naghlu este cea mai mare hidrocentrală din Afganistan, furnizând energie electrică în principal capitalei Kabul.",
      en: "The Naghlu Dam is Afghanistan's largest hydropower plant, providing electricity primarily to the capital, Kabul."
    },
    facts: {
      de: ["Mit sowjetischer Hilfe in den 1960er Jahren gebaut.", "Die installierte Leistung beträgt etwa 100 Megawatt."],
      hu: ["Szovjet segítséggel épült az 1960-as években.", "Beépített teljesítménye körülbelül 100 megawatt."],
      ro: ["Construit cu ajutor sovietic în anii 1960.", "Capacitatea instalată este de aproximativ 100 de megawați."],
      en: ["Built with Soviet assistance in the 1960s.", "The installed capacity is about 100 megawatts."]
    }
  },
  {
    id: "salma-dam-economic-v2",
    type: "energy",
    parent: "AF-HER",
    coords: [63.81, 34.33],
    name: { de: "Wasserkraftwerk Salma", hu: "Szalma vízerőmű", ro: "Hidrocentrala Salma", en: "Salma Hydropower Plant" },
    description: {
      de: "Das Wasserkraftwerk Salma, auch afghanisch-indischer Freundschaftsdamm genannt, produziert Energie am Hari-Rud-Fluss.",
      hu: "A Szalma vízerőmű, más néven afgán-indiai barátság-gát a Hari Rud folyón termel energiát.",
      ro: "Hidrocentrala Salma, cunoscută și sub numele de Barajul Prieteniei Afgan-Indiene, produce energie pe râul Hari Rud.",
      en: "The Salma Hydropower Plant, also known as the Afghan-India Friendship Dam, produces energy on the Hari Rud river."
    },
    facts: {
      de: ["Das Projekt wurde 2016 mit finanzieller Hilfe Indiens abgeschlossen.", "Neben Strom dient es auch der Bewässerung der Region."],
      hu: ["A projektet 2016-ban fejezték be indiai pénzügyi támogatással.", "Az áramtermelés mellett a régió öntözését is szolgálja."],
      ro: ["Proiectul a fost finalizat în 2016 cu asistență financiară indiană.", "Pe lângă electricitate, servește și la irigarea regiunii."],
      en: ["The project was completed in 2016 with Indian financial assistance.", "In addition to power, it also provides irrigation for the region."]
    }
  },
  {
    id: "aqina-port-economic-v2",
    type: "port",
    parent: "AF-FYA",
    coords: [65.03, 36.81],
    name: { de: "Grenzhafen Aqina", hu: "Akina határkikötő", ro: "Portul de frontieră Aqina", en: "Aqina Dry Port" },
    description: {
      de: "Aqina ist ein aufstrebender Trockenhafen an der Grenze zu Turkmenistan und Teil des Lapis-Lazuli-Korridors.",
      hu: "Akina egy feltörekvő szárazföldi kikötő a türkmén határon, és a Lapis Lazuli folyosó része.",
      ro: "Aqina este un port uscat emergent la granița cu Turkmenistanul și face parte din Coridorul Lapis Lazuli.",
      en: "Aqina is an emerging dry port on the border with Turkmenistan and part of the Lapis Lazuli corridor."
    },
    facts: {
      de: ["Es verfügt über eine Eisenbahnverbindung nach Turkmenistan.", "Es fördert den Handel in den nördlichen Provinzen."],
      hu: ["Vasúti összeköttetéssel rendelkezik Türkmenisztán felé.", "Elősegíti a kereskedelmet az északi tartományokban."],
      ro: ["Dispune de o conexiune feroviară cu Turkmenistanul.", "Promovează comerțul în provinciile nordice."],
      en: ["It features a railway connection to Turkmenistan.", "It boosts trade in the northern provinces."]
    }
  },
  {
    id: "torghundi-port-economic-v2",
    type: "port",
    parent: "AF-HER",
    coords: [62.28, 35.25],
    name: { de: "Grenzhafen Torghundi", hu: "Torgundi határkikötő", ro: "Portul de frontieră Torghundi", en: "Torghundi Dry Port" },
    description: {
      de: "Torghundi ist der zweite große Grenzübergang zu Turkmenistan und wichtig für den Warenaustausch im Nordwesten.",
      hu: "Torgundi a második legnagyobb határátkelő Türkmenisztán felé, és fontos az északnyugati árucsere szempontjából.",
      ro: "Torghundi este al doilea cel mai mare punct de trecere a frontierei cu Turkmenistanul și este important pentru comerțul din nord-vest.",
      en: "Torghundi is the second major border crossing with Turkmenistan and important for trade in the northwest."
    },
    facts: {
      de: ["Die Bahnanlagen wurden von turkmenischer Seite modernisiert.", "Erleichtert den Import von Energie und Treibstoff."],
      hu: ["A vasúti létesítményeket a türkmén fél korszerűsítette.", "Megkönnyíti az energia és az üzemanyag behozatalát."],
      ro: ["Facilitățile feroviare au fost modernizate de partea turkmenă.", "Facilitează importul de energie și combustibil."],
      en: ["Railway facilities were modernized by the Turkmen side.", "Facilitates the import of energy and fuel."]
    }
  },
  {
    id: "sheberghan-gas-economic-v2",
    type: "energy",
    parent: "AF-JOW",
    coords: [65.73, 36.66],
    name: { de: "Gasfelder von Schiberghan", hu: "Sibirgáni gázmezők", ro: "Câmpurile de gaze Sheberghan", en: "Sheberghan Gas Fields" },
    description: {
      de: "Die Gasfelder rund um Schiberghan sind das Zentrum der Erdgasförderung in Afghanistan.",
      hu: "A Sibirgán körüli gázmezők az afganisztáni földgázkitermelés központját alkotják.",
      ro: "Câmpurile de gaze din jurul Sheberghan reprezintă centrul producției de gaze naturale din Afganistan.",
      en: "The gas fields around Sheberghan are the center of natural gas production in Afghanistan."
    },
    facts: {
      de: ["Einige Felder wurden in den 1960er Jahren von sowjetischen Experten entdeckt.", "Das Gas versorgt unter anderem lokale Kraftwerke."],
      hu: ["Néhány mezőt az 1960-as években szovjet szakemberek fedeztek fel.", "A gáz többek között helyi erőműveket lát el."],
      ro: ["Unele zăcăminte au fost descoperite în anii 1960 de experți sovietici.", "Gazul alimentează, printre altele, centralele electrice locale."],
      en: ["Some fields were discovered in the 1960s by Soviet experts.", "The gas supplies local power plants, among other things."]
    }
  },
  {
    id: "amu-darya-oil-economic-v2",
    type: "industry",
    parent: "AF-SAR",
    coords: [65.93, 36.22],
    name: { de: "Ölfelder im Amudarja-Becken", hu: "Amu-darja-medence olajmezői", ro: "Câmpurile petroliere din bazinul Amu Daria", en: "Amu Darya Basin Oil Fields" },
    description: {
      de: "Das Amudarja-Becken beherbergt die wichtigsten kommerziell nutzbaren Erdölvorkommen des Landes.",
      hu: "Az Amu-darja-medence ad otthont az ország legfontosabb kereskedelmileg kitermelhető kőolajlelőhelyeinek.",
      ro: "Bazinul Amu Daria găzduiește cele mai importante rezerve de petrol exploatabile comercial din țară.",
      en: "The Amu Darya basin hosts the country's most important commercially viable oil reserves."
    },
    facts: {
      de: ["Das Gebiet wird in Zusammenarbeit mit internationalen Firmen erschlossen.", "Es umfasst mehrere aktive Förderbrunnen."],
      hu: ["A területet nemzetközi vállalatokkal együttműködve fejlesztik.", "Több aktív termelőkút is található itt."],
      ro: ["Zona este dezvoltată în colaborare cu companii internaționale.", "Include mai multe puțuri de producție active."],
      en: ["The area is being developed in collaboration with international companies.", "It includes several active production wells."]
    }
  },
  {
    id: "jangalak-complex-economic-v2",
    type: "industry",
    parent: "AF-KAB",
    coords: [69.17, 34.50],
    name: { de: "Industriekomplex Dschangalak", hu: "Dzsangalak ipari komplexum", ro: "Complexul industrial Jangalak", en: "Jangalak Industrial Complex" },
    description: {
      de: "Der Industriekomplex Dschangalak in Kabul war einst das größte industrielle Produktionszentrum Afghanistans.",
      hu: "A kabuli Dzsangalak ipari komplexum egykor Afganisztán legnagyobb ipari termelési központja volt.",
      ro: "Complexul industrial Jangalak din Kabul a fost odată cel mai mare centru de producție industrială din Afganistan.",
      en: "The Jangalak Industrial Complex in Kabul was once the largest industrial production center in Afghanistan."
    },
    facts: {
      de: ["Es produzierte in seiner Blütezeit landwirtschaftliche Geräte und Fahrzeuge.", "Die Anlagen wurden durch Konflikte stark beschädigt."],
      hu: ["Fénykorában mezőgazdasági gépeket és járműveket gyártott.", "A létesítmények a konfliktusok során súlyosan megrongálódtak."],
      ro: ["În perioada sa de glorie, producea echipamente agricole și vehicule.", "Instalațiile au fost grav avariate în timpul conflictelor."],
      en: ["At its peak, it produced agricultural equipment and vehicles.", "The facilities were heavily damaged during conflicts."]
    }
  },
  {
    id: "baghlan-sugar-economic-v2",
    type: "industry",
    parent: "AF-BGL",
    coords: [68.74, 36.14],
    name: { de: "Zuckerfabrik Baghlan", hu: "Bagláni cukorgyár", ro: "Fabrica de zahăr Baghlan", en: "Baghlan Sugar Factory" },
    description: {
      de: "Die Zuckerfabrik in Baghlan war historisch wichtig für die Verarbeitung der regionalen Zuckerrübenernte.",
      hu: "A bagláni cukorgyár történelmileg fontos volt a regionális cukorrépatermés feldolgozásában.",
      ro: "Fabrica de zahăr din Baghlan a fost importantă istoric pentru procesarea recoltei regionale de sfeclă de zahăr.",
      en: "The Baghlan sugar factory was historically important for processing the regional sugar beet crop."
    },
    facts: {
      de: ["Sie wurde 1940 gegründet.", "Ihre Reaktivierung war Teil von Wirtschaftsentwicklungsplänen."],
      hu: ["1940-ben alapították.", "Újraindítása gazdaságfejlesztési tervek részét képezte."],
      ro: ["A fost fondată în 1940.", "Reactivarea sa a făcut parte din planurile de dezvoltare economică."],
      en: ["It was founded in 1940.", "Its reactivation was part of economic development plans."]
    }
  },
  {
    id: "ghori-cement-economic-v2",
    type: "industry",
    parent: "AF-BGL",
    coords: [68.70, 35.95],
    name: { de: "Zementfabrik Ghori", hu: "Ghori cementgyár", ro: "Fabrica de ciment Ghori", en: "Ghori Cement Factory" },
    description: {
      de: "Die Zementfabrik Ghori in Pol-e Chomri ist eine der wenigen produzierenden Zementanlagen in Afghanistan.",
      hu: "A Puli-Humriban található Ghori cementgyár Afganisztán kevés működő cementüzemeinek egyike.",
      ro: "Fabrica de ciment Ghori din Puli Khumri este una dintre puținele fabrici de ciment care produc din Afganistan.",
      en: "The Ghori Cement Factory in Puli Khumri is one of the few producing cement plants in Afghanistan."
    },
    facts: {
      de: ["Besteht aus zwei Hauptproduktionslinien.", "Sie liefert Baustoffe für nationale Infrastrukturprojekte."],
      hu: ["Két fő termelési sorból áll.", "Építőanyagot biztosít a nemzeti infrastrukturális projektekhez."],
      ro: ["Constă din două linii principale de producție.", "Furnizează materiale de construcție pentru proiecte de infrastructură națională."],
      en: ["Consists of two main production lines.", "It provides building materials for national infrastructure projects."]
    }
  },
  {
    id: "jabal-siraj-cement-economic-v2",
    type: "industry",
    parent: "AF-PAR",
    coords: [69.23, 35.13],
    name: { de: "Zementfabrik Jabal al-Siraj", hu: "Dzsabal asz-Szíradzs cementgyár", ro: "Fabrica de ciment Jabal al-Siraj", en: "Jabal al-Siraj Cement Plant" },
    description: {
      de: "Die Anlage in Jabal al-Siraj war die erste Zementfabrik Afghanistans und hat historischen Stellenwert.",
      hu: "A Dzsabal asz-Szíradzsban működő üzem Afganisztán első cementgyára volt, és történelmi jelentőséggel bír.",
      ro: "Fabrica din Jabal al-Siraj a fost prima fabrică de ciment din Afganistan și are importanță istorică.",
      en: "The plant in Jabal al-Siraj was Afghanistan's first cement factory and holds historical significance."
    },
    facts: {
      de: ["Der Bau wurde in den 1950er Jahren begonnen.", "Nach langer Pause wurde der Betrieb teilweise wieder aufgenommen."],
      hu: ["Építése az 1950-es években kezdődött.", "Hosszú szünet után részben újraindult a termelés."],
      ro: ["Construcția a început în anii 1950.", "După o lungă pauză, operațiunile au fost parțial reluate."],
      en: ["Construction began in the 1950s.", "After a long pause, operations were partially resumed."]
    }
  },
  {
    id: "bagrami-park-economic-v2",
    type: "industry",
    parent: "AF-KAB",
    coords: [69.26, 34.50],
    name: { de: "Industriepark Bagrami", hu: "Bagrami ipari park", ro: "Parcul industrial Bagrami", en: "Bagrami Industrial Park" },
    description: {
      de: "Der Industriepark Bagrami in Kabul beherbergt eine Vielzahl von Produktionsstätten und Fabriken.",
      hu: "A kabuli Bagrami ipari park számos gyártóüzemnek és gyárnak ad otthont.",
      ro: "Parcul industrial Bagrami din Kabul găzduiește o varietate de unități de producție și fabrici.",
      en: "The Bagrami Industrial Park in Kabul houses a variety of manufacturing plants and factories."
    },
    facts: {
      de: ["Bietet Infrastruktur für Leichtindustrie und Textilien.", "Soll private Investitionen in die Hauptstadt lenken."],
      hu: ["Infrastruktúrát kínál a könnyűipar és a textilipar számára.", "Célja a magánbefektetések fővárosba vonzása."],
      ro: ["Oferă infrastructură pentru industria ușoară și textile.", "Menit să atragă investiții private în capitală."],
      en: ["Provides infrastructure for light industry and textiles.", "Intended to attract private investment to the capital."]
    }
  },
  {
    id: "herat-industrial-economic-v2",
    type: "industry",
    parent: "AF-HER",
    coords: [62.20, 34.20],
    name: { de: "Industriepark Herat", hu: "Heráti ipari park", ro: "Parcul industrial Herat", en: "Herat Industrial Park" },
    description: {
      de: "Der Industriepark von Herat ist eines der aktivsten Wirtschaftszentren des Landes, das sich durch starke Handelsbeziehungen auszeichnet.",
      hu: "A Heráti ipari park az ország egyik legaktívabb gazdasági központja, amelyet az erős kereskedelmi kapcsolatok jellemeznek.",
      ro: "Parcul industrial din Herat este unul dintre cele mai active centre economice din țară, caracterizat de legături comerciale puternice.",
      en: "The Herat Industrial Park is one of the country's most active economic centers, characterized by strong trade links."
    },
    facts: {
      de: ["Konzentriert sich auf Lebensmittelverarbeitung, Plastik und Baumaterialien.", "Profitiert von der Nähe zum Iran."],
      hu: ["Az élelmiszer-feldolgozásra, műanyagokra és építőanyagokra összpontosít.", "Hasznát veszi az Iránhoz való közelségnek."],
      ro: ["Se concentrează pe procesarea alimentelor, materiale plastice și materiale de construcție.", "Beneficiază de proximitatea față de Iran."],
      en: ["Focuses on food processing, plastics, and building materials.", "Benefits from its proximity to Iran."]
    }
  }
];
