import type { POI } from "./poi";

export const poiExtraTurkeyLifeV2: POI[] = [
  {
    id: "gulhane-park-life-v2",
    type: "park",
    parent: "TR-34",
    coords: [28.9811, 41.0128],
    name: { de: "Gülhane-Park", hu: "Gülhane park", ro: "Parcul Gülhane", en: "Gülhane Park" },
    description: {
      de: "Ein historischer Stadtpark in Istanbul, der einst Teil der Gärten des Topkapı-Palastes war und heute eine grüne Oase bietet.",
      hu: "Isztambul egyik legrégebbi városi parkja, amely egykor a Topkapı palota kertjének része volt, ma pedig zöld oázis a város szívében.",
      ro: "Un parc urban istoric din Istanbul, care a fost odată parte a grădinilor Palatului Topkapı, oferind acum o oază verde.",
      en: "A historical urban park in Istanbul that was once part of the Topkapı Palace gardens, now offering a green oasis."
    },
    facts: {
      de: [
        "Ältester Park Istanbuls.",
        "Liegt neben dem Topkapı-Palast.",
        "Beliebt während des Tulpenfestivals."
      ],
      hu: [
        "Isztambul legrégebbi parkja.",
        "A Topkapı palota mellett fekszik.",
        "Népszerű a tavaszi tulipánfesztivál idején."
      ],
      ro: [
        "Cel mai vechi parc din Istanbul.",
        "Situat lângă Palatul Topkapı.",
        "Popular în timpul festivalului lalelelor."
      ],
      en: [
        "Oldest park in Istanbul.",
        "Located next to Topkapı Palace.",
        "Popular during the tulip festival."
      ]
    }
  },
  {
    id: "dilek-peninsula-life-v2",
    type: "wildlife-area",
    parent: "TR-09",
    coords: [27.1833, 37.6667],
    name: { de: "Dilek-Halbinsel-Nationalpark", hu: "Dilek-félsziget Nemzeti Park", ro: "Parcul Național Peninsula Dilek", en: "Dilek Peninsula National Park" },
    description: {
      de: "Ein artenreicher Nationalpark an der Ägäisküste mit unberührten Stränden, dichten Wäldern und frei lebenden Wildschweinen.",
      hu: "Egy fajokban gazdag nemzeti park az Égei-tenger partján, érintetlen strandokkal, sűrű erdőkkel és szabadon élő vaddisznókkal.",
      ro: "Un parc național cu o biodiversitate bogată pe coasta Mării Egee, cu plaje virgine, păduri dese și mistreți liberi.",
      en: "A biodiverse national park on the Aegean coast with pristine beaches, dense forests, and free-roaming wild boars."
    },
    facts: {
      de: [
        "Liegt in der Provinz Aydın.",
        "Beheimatet anatolische Leoparden.",
        "Umfasst das Delta des Büyük Menderes."
      ],
      hu: [
        "Aydın tartományban található.",
        "Az anatóliai leopárd otthona.",
        "Magában foglalja a Nagy-Menderes deltáját."
      ],
      ro: [
        "Situat în provincia Aydın.",
        "Găzduiește leoparzi anatolieni.",
        "Include delta râului Büyük Menderes."
      ],
      en: [
        "Located in Aydın Province.",
        "Home to Anatolian leopards.",
        "Includes the Büyük Menderes delta."
      ]
    }
  },
  {
    id: "cukurova-plain-life-v2",
    type: "agriculture",
    parent: "TR-01",
    coords: [35.4833, 36.8333],
    name: { de: "Çukurova-Ebene", hu: "Çukurova-síkság", ro: "Câmpia Çukurova", en: "Çukurova Plain" },
    description: {
      de: "Eine ausgedehnte, fruchtbare Ebene in der südlichen Türkei, die historisch als Kilikien bekannt ist und ein wichtiges landwirtschaftliches Zentrum darstellt.",
      hu: "Egy kiterjedt, termékeny síkság Dél-Törökországban, amely történelmileg Kilikiaként ismert, és fontos mezőgazdasági központ.",
      ro: "O câmpie vastă și fertilă în sudul Turciei, cunoscută istoric sub numele de Cilicia, fiind un important centru agricol.",
      en: "A vast, fertile plain in southern Turkey, historically known as Cilicia, serving as a major agricultural center."
    },
    facts: {
      de: [
        "Eines der wichtigsten Baumwollanbaugebiete.",
        "Wird von den Flüssen Seyhan und Ceyhan bewässert.",
        "Zentrum der türkischen Textilindustrie."
      ],
      hu: [
        "Az egyik legfontosabb gyapottermesztő vidék.",
        "A Seyhan és Ceyhan folyók öntözik.",
        "A török textilipar egyik központja."
      ],
      ro: [
        "Una dintre cele mai importante zone de cultivare a bumbacului.",
        "Irigată de râurile Seyhan și Ceyhan.",
        "Centru al industriei textile turcești."
      ],
      en: [
        "One of the main cotton growing areas.",
        "Irrigated by the Seyhan and Ceyhan rivers.",
        "Center of the Turkish textile industry."
      ]
    }
  },
  {
    id: "isfanbul-themepark-life-v2",
    type: "kid-friendly",
    parent: "TR-34",
    coords: [28.9167, 41.0767],
    name: { de: "Isfanbul-Themenpark", hu: "Isfanbul Vidámpark", ro: "Parcul de Distracții Isfanbul", en: "Isfanbul Theme Park" },
    description: {
      de: "Ein großer Vergnügungspark in Istanbul, der Achterbahnen, Einkaufszentren und Unterhaltung für die ganze Familie bietet.",
      hu: "Egy hatalmas vidámpark Isztambulban, amely hullámvasutakkal, bevásárlóközpontokkal és családi szórakoztató programokkal várja a látogatókat.",
      ro: "Un mare parc de distracții în Istanbul, oferind montagne russe, centre comerciale și divertisment pentru toată familia.",
      en: "A large amusement park in Istanbul offering roller coasters, shopping centers, and entertainment for the whole family."
    },
    facts: {
      de: [
        "Früher bekannt als Vialand.",
        "Besitzt eine der schnellsten Achterbahnen der Türkei.",
        "Integriertes Einkaufszentrum vorhanden."
      ],
      hu: [
        "Korábban Vialand néven volt ismert.",
        "Itt található Törökország egyik leggyorsabb hullámvasútja.",
        "Egybe van építve egy bevásárlóközponttal."
      ],
      ro: [
        "Cunoscut anterior sub numele de Vialand.",
        "Are unul dintre cele mai rapide montagne russe din Turcia.",
        "Dispune de un centru comercial integrat."
      ],
      en: [
        "Formerly known as Vialand.",
        "Features one of Turkey's fastest roller coasters.",
        "Has an integrated shopping mall."
      ]
    }
  },
  {
    id: "rize-tea-plantations-life-v2",
    type: "agriculture",
    parent: "TR-53",
    coords: [40.5219, 41.0201],
    name: { de: "Teeplantagen von Rize", hu: "Rize teaültetvényei", ro: "Plantațiile de ceai din Rize", en: "Rize Tea Plantations" },
    description: {
      de: "Die steilen, grünen Hügel der Schwarzmeerregion sind das Herzstück der türkischen Teeproduktion und bieten malerische Landschaften.",
      hu: "A fekete-tengeri régió meredek, zöldellő dombjai a török teatermelés központját jelentik, és festői tájat alkotnak.",
      ro: "Dealurile abrupte și verzi din regiunea Mării Negre sunt inima producției turcești de ceai și oferă peisaje pitorești.",
      en: "The steep, green hills of the Black Sea region are the heart of Turkish tea production and offer picturesque landscapes."
    },
    facts: {
      de: [
        "Produziert den Großteil des türkischen Tees.",
        "Das feuchte Klima ist ideal für den Teeanbau.",
        "Teeernte findet meist im Frühling statt."
      ],
      hu: [
        "Itt termelik a török tea nagy részét.",
        "A nedves éghajlat ideális a teatermesztéshez.",
        "A teaszüret általában tavasszal zajlik."
      ],
      ro: [
        "Produce majoritatea ceaiului turcesc.",
        "Climatul umed este ideal pentru cultivarea ceaiului.",
        "Recoltarea ceaiului are loc de obicei primăvara."
      ],
      en: [
        "Produces the majority of Turkish tea.",
        "The humid climate is ideal for tea cultivation.",
        "Tea harvesting usually takes place in spring."
      ]
    }
  },
  {
    id: "kuscenneti-nationalpark-life-v2",
    type: "wildlife-area",
    parent: "TR-10",
    coords: [28.0000, 40.2000],
    name: { de: "Kuşcenneti-Nationalpark", hu: "Kuşcenneti Nemzeti Park", ro: "Parcul Național Kușcenneti", en: "Kuşcenneti National Park" },
    description: {
      de: "Dieses Vogelparadies am Manyas-See ist ein wichtiger Rastplatz für Millionen von Zugvögeln auf ihrem Weg zwischen Europa und Afrika.",
      hu: "Ez a Manyas-tó partján fekvő madárparadicsom fontos pihenőhely a több millió vándormadár számára Európa és Afrika között.",
      ro: "Acest paradis al păsărilor de pe Lacul Manyas este un loc de odihnă important pentru milioane de păsări migratoare între Europa și Africa.",
      en: "This bird paradise on Lake Manyas is an important resting point for millions of migratory birds travelling between Europe and Africa."
    },
    facts: {
      de: [
        "Bedeutet wörtlich Vogelparadies.",
        "Schützt über 250 Vogelarten.",
        "Ausgezeichnet mit dem Europadiplom für Schutzgebiete."
      ],
      hu: [
        "Nevének jelentése szó szerint madárparadicsom.",
        "Több mint 250 madárfajt véd.",
        "Elnyerte az Európa-diplomát a védett területeknek."
      ],
      ro: [
        "Înseamnă literal paradisul păsărilor.",
        "Protejează peste 250 de specii de păsări.",
        "A primit Diploma Europeană pentru Arii Protejate."
      ],
      en: [
        "Literally means bird paradise.",
        "Protects over 250 bird species.",
        "Awarded the European Diploma of Protected Areas."
      ]
    }
  },
  {
    id: "bursa-peach-orchards-life-v2",
    type: "agriculture",
    parent: "TR-16",
    coords: [29.0667, 40.1833],
    name: { de: "Pfirsichgärten von Bursa", hu: "Bursa őszibarackligetei", ro: "Livezile de piersici din Bursa", en: "Bursa Peach Orchards" },
    description: {
      de: "Die Region um Bursa ist berühmt für ihre weiten Obstplantagen, auf denen einige der saftigsten und süßesten Pfirsiche des Landes wachsen.",
      hu: "A Bursa környéki régió híres kiterjedt gyümölcsöskertjeiről, ahol az ország leglédúsabb és legédesebb őszibarackjai teremnek.",
      ro: "Regiunea din jurul Bursei este renumită pentru livezile sale extinse, unde cresc unele dintre cele mai suculente și dulci piersici din țară.",
      en: "The region around Bursa is famous for its vast orchards, where some of the juiciest and sweetest peaches in the country grow."
    },
    facts: {
      de: [
        "Bursa ist das Zentrum des türkischen Pfirsichanbaus.",
        "Das milde Klima begünstigt das Wachstum.",
        "Die Früchte werden in ganz Europa exportiert."
      ],
      hu: [
        "Bursa a török őszibarack-termesztés központja.",
        "Az enyhe éghajlat kedvez a gyümölcsök növekedésének.",
        "A termést egész Európába exportálják."
      ],
      ro: [
        "Bursa este centrul cultivării piersicilor în Turcia.",
        "Climatul blând favorizează creșterea fructelor.",
        "Fructele sunt exportate în toată Europa."
      ],
      en: [
        "Bursa is the center of Turkish peach cultivation.",
        "The mild climate favors the growth of the fruit.",
        "The fruits are exported throughout Europe."
      ]
    }
  },
  {
    id: "emirgan-park-life-v2",
    type: "park",
    parent: "TR-34",
    coords: [29.0531, 41.1086],
    name: { de: "Emirgan-Park", hu: "Emirgan park", ro: "Parcul Emirgan", en: "Emirgan Park" },
    description: {
      de: "Ein historischer Park am Bosporus, der besonders für sein jährliches Tulpenfestival im Frühling weltberühmt ist.",
      hu: "Egy történelmi park a Boszporusz partján, amely különösen a tavaszi, évente megrendezett tulipánfesztiváljáról világhírű.",
      ro: "Un parc istoric pe Bosfor, faimos în special pentru festivalul său anual de lalele din primăvară.",
      en: "A historical park on the Bosphorus, world-famous especially for its annual tulip festival in spring."
    },
    facts: {
      de: [
        "Einer der größten öffentlichen Parks in Istanbul.",
        "Beherbergt drei historische Holzpavillons.",
        "Millionen von Tulpen blühen hier im April."
      ],
      hu: [
        "Isztambul egyik legnagyobb közparkja.",
        "Három történelmi fapavilon található benne.",
        "Áprilisban több millió tulipán nyílik itt."
      ],
      ro: [
        "Unul dintre cele mai mari parcuri publice din Istanbul.",
        "Găzduiește trei pavilioane istorice din lemn.",
        "Milioane de lalele înfloresc aici în aprilie."
      ],
      en: [
        "One of the largest public parks in Istanbul.",
        "Houses three historical wooden pavilions.",
        "Millions of tulips bloom here in April."
      ]
    }
  },
  {
    id: "antalya-aquarium-life-v2",
    type: "kid-friendly",
    parent: "TR-07",
    coords: [30.6550, 36.8828],
    name: { de: "Antalya Aquarium", hu: "Antalyai Akvárium", ro: "Acvariul din Antalya", en: "Antalya Aquarium" },
    description: {
      de: "Eines der größten Aquarien der Welt, das Besucher mit einem massiven Unterwassertunnel und Themenbereichen wie der Schneewelt begeistert.",
      hu: "A világ egyik legnagyobb akváriuma, amely egy hatalmas víz alatti alagúttal és tematikus részekkel, például a Hóvilággal várja a látogatókat.",
      ro: "Unul dintre cele mai mari acvarii din lume, care încântă vizitatorii cu un tunel subacvatic masiv și zone tematice, cum ar fi Lumea Zăpezii.",
      en: "One of the largest aquariums in the world, delighting visitors with a massive underwater tunnel and themed areas like Snow World."
    },
    facts: {
      de: [
        "Der Tunnel ist 131 Meter lang.",
        "Bietet eine Ausstellung von tropischen Reptilien.",
        "Man kann echte Haie aus nächster Nähe beobachten."
      ],
      hu: [
        "Az alagút 131 méter hosszú.",
        "Trópusi hüllők kiállításával is rendelkezik.",
        "Valódi cápákat lehet testközelből megfigyelni."
      ],
      ro: [
        "Tunelul are 131 de metri lungime.",
        "Oferă o expoziție de reptile tropicale.",
        "Puteți observa rechini reali de aproape."
      ],
      en: [
        "The tunnel is 131 meters long.",
        "Features an exhibition of tropical reptiles.",
        "You can observe real sharks up close."
      ]
    }
  },
  {
    id: "giresun-hazelnut-life-v2",
    type: "agriculture",
    parent: "TR-28",
    coords: [38.3833, 40.9167],
    name: { de: "Haselnussplantagen von Giresun", hu: "Giresun mogyoróültetvényei", ro: "Plantațiile de aluni din Giresun", en: "Giresun Hazelnut Plantations" },
    description: {
      de: "Die Provinz Giresun ist das Zentrum der weltweiten Haselnussproduktion, deren Plantagen die steilen Hänge zum Schwarzen Meer hinab bedecken.",
      hu: "Giresun tartomány a globális mogyorótermelés központja, amelynek ültetvényei a Fekete-tenger felé ereszkedő meredek lejtőket borítják.",
      ro: "Provincia Giresun este centrul producției globale de alune, ale cărei plantații acoperă pantele abrupte spre Marea Neagră.",
      en: "The province of Giresun is the center of global hazelnut production, whose plantations cover the steep slopes down to the Black Sea."
    },
    facts: {
      de: [
        "Die Türkei ist der größte Haselnussproduzent der Welt.",
        "Haselnüsse sind ein wichtiges Exportgut.",
        "Werden oft in der Schokoladenindustrie verwendet."
      ],
      hu: [
        "Törökország a világ legnagyobb mogyorótermelője.",
        "A mogyoró fontos exportcikk az ország számára.",
        "Gyakran használják a csokoládéiparban."
      ],
      ro: [
        "Turcia este cel mai mare producător de alune din lume.",
        "Alunele sunt un produs de export important.",
        "Sunt adesea folosite în industria ciocolatei."
      ],
      en: [
        "Turkey is the largest hazelnut producer in the world.",
        "Hazelnuts are an important export commodity.",
        "Often used in the chocolate industry."
      ]
    }
  },
  {
    id: "igneada-floodplain-life-v2",
    type: "wildlife-area",
    parent: "TR-39",
    coords: [27.9833, 41.8667],
    name: { de: "İğneada-Auwald-Nationalpark", hu: "İğneada Ártéri-erdő Nemzeti Park", ro: "Parcul Național Pădurea Inundabilă İğneada", en: "İğneada Floodplain Forests National Park" },
    description: {
      de: "Ein seltenes Ökosystem aus überfluteten Wäldern an der bulgarischen Grenze, das eine unglaubliche Vielfalt an Flora und Fauna beheimatet.",
      hu: "Egy ritka ártéri erdei ökoszisztéma a bolgár határon, amely elképesztő változatosságú növény- és állatvilágnak ad otthont.",
      ro: "Un ecosistem rar de păduri inundate la granița cu Bulgaria, care găzduiește o varietate incredibilă de floră și faună.",
      en: "A rare flooded forest ecosystem on the Bulgarian border that is home to an incredible variety of flora and fauna."
    },
    facts: {
      de: [
        "Einer der wenigen noch intakten Auwälder Europas.",
        "Umfasst Sümpfe, Seen und Sanddünen.",
        "Wichtiger Lebensraum für Amphibien."
      ],
      hu: [
        "Európa egyik kevés megmaradt, érintetlen ártéri erdeje.",
        "Mocsarakat, tavakat és homokdűnéket foglal magába.",
        "Fontos élőhely a kétéltűek számára."
      ],
      ro: [
        "Una dintre puținele păduri inundabile intacte rămase în Europa.",
        "Include mlaștini, lacuri și dune de nisip.",
        "Habitat important pentru amfibieni."
      ],
      en: [
        "One of the few remaining intact floodplain forests in Europe.",
        "Includes swamps, lakes, and sand dunes.",
        "Important habitat for amphibians."
      ]
    }
  },
  {
    id: "yildiz-park-life-v2",
    type: "park",
    parent: "TR-34",
    coords: [29.0119, 41.0483],
    name: { de: "Yıldız-Park", hu: "Yıldız park", ro: "Parcul Yıldız", en: "Yıldız Park" },
    description: {
      de: "Einst die königlichen Jagdgründe der osmanischen Sultane, bietet dieser riesige Park heute malerische Spazierwege und alte Pavillons.",
      hu: "Egykor az oszmán szultánok királyi vadászterülete volt, ma ez a hatalmas park festői sétányokat és régi pavilonokat kínál.",
      ro: "Fostele terenuri de vânătoare regale ale sultanilor otomani, acest parc imens oferă acum alei pitorești și pavilioane vechi.",
      en: "Once the royal hunting grounds of the Ottoman sultans, this huge park now offers picturesque walkways and old pavilions."
    },
    facts: {
      de: [
        "Liegt im Stadtteil Beşiktaş in Istanbul.",
        "Beherbergt die berühmte Porzellanmanufaktur Yıldız.",
        "Bietet eine herrliche Aussicht auf den Bosporus."
      ],
      hu: [
        "Isztambul Beşiktaş negyedében található.",
        "Itt működik a híres Yıldız porcelángyár.",
        "Csodálatos kilátást nyújt a Boszporuszra."
      ],
      ro: [
        "Situat în cartierul Beșiktaș din Istanbul.",
        "Găzduiește faimoasa fabrică de porțelan Yıldız.",
        "Oferă o vedere magnifică asupra Bosforului."
      ],
      en: [
        "Located in the Beşiktaş district of Istanbul.",
        "Home to the famous Yıldız Porcelain Factory.",
        "Offers a magnificent view of the Bosphorus."
      ]
    }
  },
  {
    id: "faruk-yalcin-zoo-life-v2",
    type: "kid-friendly",
    parent: "TR-41",
    coords: [29.3833, 40.8167],
    name: { de: "Faruk-Yalçın-Zoo", hu: "Faruk Yalçın Állatkert", ro: "Grădina Zoologică Faruk Yalçın", en: "Faruk Yalçın Zoo" },
    description: {
      de: "Ein weitläufiger zoologischer Garten in der Nähe von Istanbul, der sich dem Tierschutz und der Bildung über bedrohte Arten widmet.",
      hu: "Egy kiterjedt állatkert Isztambul közelében, amely az állatvédelemnek és a veszélyeztetett fajok megismertetésének szenteli magát.",
      ro: "O grădină zoologică vastă lângă Istanbul, dedicată bunăstării animalelor și educației despre speciile pe cale de dispariție.",
      en: "A vast zoological garden near Istanbul dedicated to animal welfare and education about endangered species."
    },
    facts: {
      de: [
        "Beherbergt über 250 verschiedene Tierarten.",
        "Besitzt einen großen botanischen Garten.",
        "Engagiert sich in internationalen Zuchtprogrammen."
      ],
      hu: [
        "Több mint 250 különböző állatfajnak ad otthont.",
        "Hatalmas botanikus kerttel is rendelkezik.",
        "Részt vesz nemzetközi tenyésztési programokban."
      ],
      ro: [
        "Găzduiește peste 250 de specii diferite de animale.",
        "Are o grădină botanică mare.",
        "Implicată în programe internaționale de reproducere."
      ],
      en: [
        "Houses over 250 different animal species.",
        "Has a large botanical garden.",
        "Involved in international breeding programs."
      ]
    }
  },
  {
    id: "aydin-fig-orchards-life-v2",
    type: "agriculture",
    parent: "TR-09",
    coords: [27.8333, 37.8333],
    name: { de: "Feigengärten von Aydın", hu: "Aydın fügeligetei", ro: "Livezile de smochini din Aydın", en: "Aydın Fig Orchards" },
    description: {
      de: "Die sonnenverwöhnte Region Aydın ist weltweit bekannt für den Anbau der besten Feigen, die hier in großen Mengen getrocknet werden.",
      hu: "A napsütötte Aydın régió világszerte ismert a legjobb minőségű fügék termesztéséről, amelyeket itt nagy mennyiségben aszalnak.",
      ro: "Regiunea însorită Aydın este renumită la nivel mondial pentru cultivarea celor mai bune smochine, care sunt uscate aici în cantități mari.",
      en: "The sun-drenched Aydın region is known worldwide for cultivating the best figs, which are dried here in large quantities."
    },
    facts: {
      de: [
        "Die Aydın-Feige hat eine geschützte Ursprungsbezeichnung.",
        "Die Trocknung erfolgt traditionell in der Sonne.",
        "Hauptexportartikel der Ägäisregion."
      ],
      hu: [
        "Az aydıni füge oltalom alatt álló eredetmegjelöléssel rendelkezik.",
        "Az aszalás hagyományosan a napon történik.",
        "Az égei régió egyik legfőbb exportcikke."
      ],
      ro: [
        "Smochina de Aydın are o denumire de origine protejată.",
        "Uscarea se face tradițional la soare.",
        "Principalul produs de export al regiunii Mării Egee."
      ],
      en: [
        "The Aydın fig has a protected designation of origin.",
        "Drying is done traditionally in the sun.",
        "Main export item of the Aegean region."
      ]
    }
  },
  {
    id: "soguksu-nationalpark-life-v2",
    type: "park",
    parent: "TR-06",
    coords: [32.6167, 40.4667],
    name: { de: "Soğuksu-Nationalpark", hu: "Soğuksu Nemzeti Park", ro: "Parcul Național Soğuksu", en: "Soğuksu National Park" },
    description: {
      de: "Ein malerischer Nationalpark in der Nähe von Ankara, der für seine dichten Kiefernwälder und heilenden Thermalquellen bekannt ist.",
      hu: "Egy festői nemzeti park Ankara közelében, amely sűrű fenyőerdőiről és gyógyító termálforrásairól ismert.",
      ro: "Un parc național pitoresc lângă Ankara, cunoscut pentru pădurile sale dese de pini și izvoarele termale vindecătoare.",
      en: "A picturesque national park near Ankara known for its dense pine forests and healing thermal springs."
    },
    facts: {
      de: [
        "Beliebtes Naherholungsgebiet für die Hauptstadt.",
        "Beheimatet den seltenen Mönchsgeier.",
        "Das vulkanische Gelände wärmt die Quellen."
      ],
      hu: [
        "Népszerű pihenőhely a főváros lakói számára.",
        "A ritka barátkeselyű otthona.",
        "A vulkanikus domborzat melegíti a forrásokat."
      ],
      ro: [
        "Zonă populară de recreere pentru capitală.",
        "Găzduiește vulturul negru rar.",
        "Terenul vulcanic încălzește izvoarele."
      ],
      en: [
        "Popular recreation area for the capital.",
        "Home to the rare cinereous vulture.",
        "The volcanic terrain warms the springs."
      ]
    }
  },
  {
    id: "iztuzu-beach-life-v2",
    type: "wildlife-area",
    parent: "TR-48",
    coords: [28.6231, 36.7919],
    name: { de: "İztuzu-Strand", hu: "İztuzu-part", ro: "Plaja İztuzu", en: "İztuzu Beach" },
    description: {
      de: "Ein unberührter Sandstrandstreifen, der eine natürliche Barriere zwischen dem Süßwasserdelta des Dalyan-Flusses und dem Mittelmeer bildet.",
      hu: "Egy érintetlen homokos tengerpart, amely természetes gátat képez a Dalyan folyó édesvízi deltája és a Földközi-tenger között.",
      ro: "O fâșie imaculată de plajă cu nisip care formează o barieră naturală între delta de apă dulce a râului Dalyan și Marea Mediterană.",
      en: "A pristine strip of sandy beach forming a natural barrier between the fresh water delta of the Dalyan river and the Mediterranean."
    },
    facts: {
      de: [
        "Wichtiger Nistplatz der Unechten Karettschildkröte.",
        "Nachts für Besucher gesperrt zum Schutz der Nester.",
        "Beherbergt ein Schildkröten-Rettungszentrum."
      ],
      hu: [
        "Az álcserepesteknősök egyik legfontosabb fészkelőhelye.",
        "Éjszaka lezárják a látogatók elől a fészkek védelmében.",
        "Egy teknősmentő központ is működik itt."
      ],
      ro: [
        "Loc important de cuibărit pentru broasca țestoasă Caretta.",
        "Închis vizitatorilor pe timp de noapte pentru a proteja cuiburile.",
        "Găzduiește un centru de salvare a țestoaselor."
      ],
      en: [
        "Important nesting site for the loggerhead sea turtle.",
        "Closed to visitors at night to protect the nests.",
        "Houses a turtle rescue center."
      ]
    }
  },
  {
    id: "miniaturk-life-v2",
    type: "kid-friendly",
    parent: "TR-34",
    coords: [28.9483, 41.0600],
    name: { de: "Miniatürk", hu: "Miniatürk", ro: "Miniatürk", en: "Miniatürk" },
    description: {
      de: "Ein beeindruckender Miniaturpark in Istanbul, der detailgetreue Nachbildungen der berühmtesten Bauwerke aus der Türkei und der osmanischen Geschichte zeigt.",
      hu: "Egy lenyűgöző miniatűr park Isztambulban, amely Törökország és az oszmán történelem leghíresebb építményeinek részletes másolatait mutatja be.",
      ro: "Un parc de miniaturi impresionant din Istanbul, cu replici detaliate ale celor mai faimoase clădiri din Turcia și din istoria otomană.",
      en: "An impressive miniature park in Istanbul featuring detailed replicas of the most famous buildings from Turkey and Ottoman history."
    },
    facts: {
      de: [
        "Zeigt Modelle im Maßstab 1:25.",
        "Umfasst über 130 architektonische Meisterwerke.",
        "Liegt malerisch am Ufer des Goldenen Horns."
      ],
      hu: [
        "A modellek 1:25 méretarányban készültek.",
        "Több mint 130 építészeti remekművet tartalmaz.",
        "Festői környezetben, az Aranyszarv-öböl partján fekszik."
      ],
      ro: [
        "Prezintă modele la scara 1:25.",
        "Include peste 130 de capodopere arhitecturale.",
        "Situat pitoresc pe malul Cornului de Aur."
      ],
      en: [
        "Features models on a scale of 1:25.",
        "Includes over 130 architectural masterpieces.",
        "Picturesquely located on the shores of the Golden Horn."
      ]
    }
  },
  {
    id: "malatya-apricots-life-v2",
    type: "agriculture",
    parent: "TR-44",
    coords: [38.3167, 38.3500],
    name: { de: "Aprikosenplantagen von Malatya", hu: "Malatya sárgabarack-ültetvényei", ro: "Plantațiile de caise din Malatya", en: "Malatya Apricot Orchards" },
    description: {
      de: "Die fruchtbaren Böden und das sonnige Klima dieser ostanatolischen Provinz machen sie zum Weltzentrum für den Anbau süßer Aprikosen.",
      hu: "A kelet-anatóliai tartomány termékeny talaja és napos éghajlata a világ központjává teszi az édes sárgabarack termesztését.",
      ro: "Solurile fertile și clima însorită a acestei provincii din estul Anatoliei o fac centrul mondial pentru cultivarea caiselor dulci.",
      en: "The fertile soils and sunny climate of this eastern Anatolian province make it the world center for the cultivation of sweet apricots."
    },
    facts: {
      de: [
        "Produziert den Großteil der getrockneten Aprikosen weltweit.",
        "Die Früchte trocknen schonend im Familienbetrieb.",
        "Malatya wird oft als Aprikosen-Hauptstadt bezeichnet."
      ],
      hu: [
        "A világ aszaltsárgabarack-termelésének nagy részét adja.",
        "A gyümölcsök kíméletes szárítása családi gazdaságokban történik.",
        "Malatyát gyakran a sárgabarack fővárosának nevezik."
      ],
      ro: [
        "Produce majoritatea caiselor uscate la nivel mondial.",
        "Fructele sunt uscate ușor în fermele de familie.",
        "Malatya este adesea denumită capitala caiselor."
      ],
      en: [
        "Produces the majority of dried apricots worldwide.",
        "The fruits are gently dried on family farms.",
        "Malatya is often referred to as the apricot capital."
      ]
    }
  },
  {
    id: "sarikamis-forest-life-v2",
    type: "wildlife-area",
    parent: "TR-36",
    coords: [42.6667, 40.3333],
    name: { de: "Sarıkamış-Allahuekber-Nationalpark", hu: "Sarıkamış-Allahuekber Nemzeti Park", ro: "Parcul Național Sarıkamış-Allahuekber", en: "Sarıkamış-Allahuekber Mountains National Park" },
    description: {
      de: "Ein hochgelegener Nationalpark in Ostanatolien, berühmt für seine tiefen Schneedecken im Winter und die ausgedehnten, dichten Kiefernwälder.",
      hu: "Egy magaslati nemzeti park Kelet-Anatóliában, amely télen a vastag hótakarójáról és kiterjedt, sűrű fenyőerdeiről híres.",
      ro: "Un parc național la mare altitudine în estul Anatoliei, renumit pentru stratul gros de zăpadă iarna și pădurile extinse și dense de pini.",
      en: "A high-altitude national park in Eastern Anatolia famous for its deep snow cover in winter and its extensive, dense pine forests."
    },
    facts: {
      de: [
        "Der Wald besteht hauptsächlich aus Waldkiefern.",
        "Wichtiger Lebensraum für Braunbären und Wölfe.",
        "Beliebtes Ziel für Wintersportler."
      ],
      hu: [
        "Az erdő nagyrészt erdeifenyőkből áll.",
        "A barnamedvék és farkasok fontos élőhelye.",
        "A téli sportok kedvelőinek népszerű célpontja."
      ],
      ro: [
        "Pădurea este alcătuită în principal din pini de pădure.",
        "Habitat important pentru urși bruni și lupi.",
        "Destinație populară pentru iubitorii sporturilor de iarnă."
      ],
      en: [
        "The forest consists mainly of Scots pines.",
        "Important habitat for brown bears and wolves.",
        "Popular destination for winter sports enthusiasts."
      ]
    }
  },
  {
    id: "karagol-sahara-life-v2",
    type: "park",
    parent: "TR-08",
    coords: [42.4500, 41.2333],
    name: { de: "Karagöl-Sahara-Nationalpark", hu: "Karagöl-Sahara Nemzeti Park", ro: "Parcul Național Karagöl-Sahara", en: "Karagöl-Sahara National Park" },
    description: {
      de: "Ein zweigeteilter Nationalpark in der nordöstlichen Region Artvin, bestehend aus einem idyllischen Gletschersee und einer weiten Hochebene.",
      hu: "Egy két részre osztott nemzeti park az északkeleti Artvin régióban, amely egy idilli gleccsertóból és egy hatalmas fennsíkból áll.",
      ro: "Un parc național împărțit în două în regiunea de nord-est Artvin, constând dintr-un lac glaciar idilic și un platou vast.",
      en: "A bifurcated national park in the northeastern Artvin region, consisting of an idyllic glacial lake and a vast plateau."
    },
    facts: {
      de: [
        "Der Karagöl ist ein malerischer, von Wäldern umgebener See.",
        "Die Sahara-Hochebene ist bekannt für traditionelle Festivals.",
        "Reiche Biodiversität durch isolierte Lage."
      ],
      hu: [
        "A Karagöl egy festői, erdőkkel körülvett tó.",
        "A Sahara-fennsík hagyományos fesztiváljairól ismert.",
        "Gazdag biológiai sokféleség az elszigetelt fekvés miatt."
      ],
      ro: [
        "Karagöl este un lac pitoresc înconjurat de păduri.",
        "Platoul Sahara este cunoscut pentru festivalurile tradiționale.",
        "Biodiversitate bogată datorită locației izolate."
      ],
      en: [
        "Karagöl is a picturesque lake surrounded by forests.",
        "The Sahara plateau is known for traditional festivals.",
        "Rich biodiversity due to isolated location."
      ]
    }
  }
];
