import json

# Data extracted and German content generated
data = [
  {
    "id": "reg-lombardia",
    "descriptionAdvanced": {
      "en": "Lombardy, the economic engine of Italy, is more than just Milan's fashion world. The region is home to the country's largest lakes, such as Lake Garda and Lake Como, which lie at the foot of the Alps, offering stunning panoramic views. Throughout its history, it was shaped by powers from the Lombards to the Visconti and Sforza families, leaving behind a rich architectural and artistic heritage. The fertile lands of the Po Valley make it a significant agricultural center, especially for rice cultivation, which is the basis for famous dishes like Risotto alla Milanese. This duality—the meeting of modern industry and ancient landscapes—is what makes Lombardy unique. Geography K7 — Economic and Natural Geography of Europe.",
      "hu": "Lombardia, Olaszország gazdasági motorja, nem csupán Milánó divatvilágáról szól. A régió ad otthont az ország legnagyobb tavainak, mint a Garda-tó és a Comói-tó, melyek az Alpok lábainál fekszenek, lenyűgöző panorámát kínálva. Történelme során a longobárdoktól a Visconti és Sforza családokig számos hatalom formálta, gazdag építészeti és művészeti örökséget hagyva maga után. A Pó-síkság termékeny földjei jelentős mezőgazdasági központtá teszik, különösen a rizstermesztés területén, amely az olyan híres ételek alapja, mint a milánói rizottó. Ez a kettősség – a modern ipar és az ősi tájak találkozása – teszi Lombardiát egyedülállóvá. Földrajz K7 — Európa gazdasági és természeti földrajza.",
      "ro": "",
      "de": "Die Lombardei, das wirtschaftliche Kraftzentrum Italiens, bietet weit mehr als nur die Modemetropole Mailand. Die Region beherbergt die größten Seen des Landes, darunter den Gardasee und den Comer See, die am Fuße der Alpen liegen und atemberaubende Panoramen bieten. Im Laufe ihrer Geschichte wurde sie von Mächten von den Langobarden bis hin zu den Familien Visconti und Sforza geprägt, die ein reiches architektonisches und künstlerisches Erbe hinterließen. Die fruchtbaren Böden der Po-Ebene machen sie zu einem bedeutenden landwirtschaftlichen Zentrum, insbesondere für den Reisanbau, der die Basis für berühmte Gerichte wie Risotto alla Milanese bildet. Diese Dualität – das Zusammentreffen von moderner Industrie und antiken Landschaften – macht die Lombardei einzigartig. Geografie K7 — Wirtschaftliche und natürliche Geografie Europas."
    },
    "factsAdvanced": {
      "en": [
        "The region has the most UNESCO World Heritage sites within Italy, including the rock drawings of Valcamonica.",
        "Lombardy's GDP alone is larger than that of many European countries.",
        "Lake Como, with a depth of over 400 meters, is the deepest lake in Italy.",
        "The Franciacorta wine region produces world-renowned sparkling wines made with the classic method.",
        "The famous Iron Crown of Lombardy, used for centuries to crown the kings of Italy, is located in Monza.",
        "Part of the Stelvio National Park, one of the largest protected areas in the Alps, is in the region.",
        "Stradivari, the famous violin maker, lived and worked in Cremona, which remains a center for violin making today."
      ],
      "hu": [
        "A régióban található a legtöbb UNESCO Világörökségi helyszín Olaszországon belül, beleértve a Valcamonica sziklarajzait.",
        "Lombardia GDP-je önmagában nagyobb, mint számos európai országé.",
        "A Comói-tó több mint 400 méteres mélységével Olaszország legmélyebb tava.",
        "A Franciacorta borvidék világhírű pezsgőket termel, melyeket a klasszikus módszerrel készítenek.",
        "A híres longobárd vaskorona, amelyet évszázadokon át használtak az itáliai királyok koronázásához, Monzában található.",
        "A régióban található a Stelvio Nemzeti Park egy része, amely az Alpok egyik legnagyobb védett területe.",
        "Stradivari, a híres hegedűkészítő Cremonában élt és alkotott, amely ma is a hegedűkészítés fellegvára."
      ],
      "ro": [],
      "de": [
        "In der Region befinden sich die meisten UNESCO-Welterbestätten Italiens, darunter die Felsbilder des Valcamonica.",
        "Das BIP der Lombardei allein ist größer als das vieler europäischer Länder.",
        "Der Comer See ist mit einer Tiefe von über 400 Metern der tiefste See Italiens.",
        "Das Weinbaugebiet Franciacorta produziert weltberühmte Schaumweine nach klassischer Methode.",
        "Die berühmte Eiserne Krone der Langobarden, die jahrhundertelang zur Krönung der Könige von Italien verwendet wurde, befindet sich in Monza.",
        "Ein Teil des Nationalparks Stilfser Joch, eines der größten Schutzgebiete der Alpen, liegt in der Region.",
        "Stradivari, der berühmte Geigenbauer, lebte und arbeitete in Cremona, das bis heute ein Zentrum des Geigenbaus ist."
      ]
    }
  },
  {
    "id": "reg-toscana",
    "descriptionAdvanced": {
      "en": "Tuscany is the cradle of the Italian Renaissance, where art and landscape form an inseparable whole. The Uffizi Gallery and the Galleria dell'Accademia in Florence house some of the world's most important art treasures. However, the region is more than its cities; the rolling hills of Val d'Orcia, roads lined with cypresses, and medieval hilltop villages like San Gimignano provide a picturesque backdrop. Gastronomy plays a central role, based on high-quality local ingredients like olive oil, Chianti wine, and Chianina beef. History K6 — The Renaissance and the Great Geographical Discoveries.",
      "hu": "Toszkána az olasz reneszánsz bölcsője, ahol a művészet és a táj elválaszthatatlan egységet alkot. A Firenzében található Uffizi Képtár és a Galleria dell'Accademia a világ legjelentősebb művészeti kincseit őrzik. A régió azonban több, mint a városok; a Val d'Orcia hullámzó dombjai, a ciprusokkal szegélyezett utak és a középkori dombtetőn álló falvak, mint San Gimignano, festői hátteret biztosítanak. A gasztronómia központi szerepet játszik, alapja a helyi, kiváló minőségű alapanyagok, mint az olívaolaj, a Chianti bor és a Chianina marha. Történelem K6 — A reneszánsz és a nagy földrajzi felfedezések.",
      "ro": "",
      "de": "Die Toskana ist die Wiege der italienischen Renaissance, in der Kunst und Landschaft eine untrennbare Einheit bilden. Die Uffizien und die Galleria dell'Accademia in Florenz beherbergen einige der bedeutendsten Kunstschätze der Welt. Doch die Region ist mehr als nur ihre Städte; die sanften Hügel des Val d'Orcia, von Zypressen gesäumte Straßen und mittelalterliche Dörfer auf Hügeln wie San Gimignano bieten eine malerische Kulisse. Die Gastronomie spielt eine zentrale Rolle und basiert auf hochwertigen lokalen Zutaten wie Olivenöl, Chianti-Wein und Chianina-Rindfleisch. Geschichte K6 — Die Renaissance und die großen geografischen Entdeckungen."
    },
    "factsAdvanced": {
      "en": [
        "The modern Italian language is based on the Tuscan dialect, thanks to the works of Dante, Petrarch, and Boccaccio.",
        "The region has over 120 nature reserves, demonstrating a commitment to preserving biodiversity.",
        "The lean of the Leaning Tower of Pisa is due to the soft subsoil, and its construction took nearly 200 years.",
        "The thermal springs of Saturnia form natural, sulphurous pools that were popular even among the Etruscans and Romans.",
        "'Super Tuscan' wines emerged in the 1970s when some winemakers went against Chianti Classico rules to create new, high-quality wines.",
        "The marble quarries of Carrara are the source of the marble used by Michelangelo for his David statue.",
        "The Palio horse race in Siena, held twice a year, is a deep-rooted medieval tradition where the city's districts (contrade) compete."
      ],
      "hu": [
        "Az olasz irodalmi nyelv a toszkán dialektuson alapul, Dante, Petrarca és Boccaccio munkásságának köszönhetően.",
        "A régióban több mint 120 természetvédelmi terület található, ami a biológiai sokféleség megőrzése iránti elkötelezettséget mutatja.",
        "A pisai ferde torony dőlése a puha altalajnak köszönhető, és az építése közel 200 évig tartott.",
        "A Saturnia hőforrásai természetes, kénes vizű medencéket alkotnak, amelyek már az etruszkok és a rómaiak körében is népszerűek voltak.",
        "A 'Super Tuscan' borok az 1970-es években jelentek meg, amikor néhány borász szembement a Chianti Classico szabályaival, hogy új, kiváló minőségű borokat hozzon létre.",
        "Carrara márványbányáiból származik a márvány, amelyet Michelangelo is használt a Dávid-szoborhoz.",
        "Az évente kétszer megrendezett sienai Palio lóverseny egy mélyen gyökerező középkori hagyomány, amelyben a városrészek (contrade) versengenek egymással."
      ],
      "ro": [],
      "de": [
        "Die moderne italienische Sprache basiert auf dem toskanischen Dialekt, dank der Werke von Dante, Petrarca und Boccaccio.",
        "In der Region gibt es über 120 Naturschutzgebiete, was das Engagement für den Erhalt der Artenvielfalt unterstreicht.",
        "Die Neigung des Schiefen Turms von Pisa ist auf den weichen Untergrund zurückzuführen, und sein Bau dauerte fast 200 Jahre.",
        "Die Thermalquellen von Saturnia bilden natürliche Schwefelbecken, die schon bei den Etruskern und Römern beliebt waren.",
        "'Super-Toskana'-Weine entstanden in den 1970er Jahren, als Winzer gegen Chianti-Regeln verstießen, um neue Qualitätsweine zu kreieren.",
        "Die Marmorbrüche von Carrara sind die Quelle für den Marmor, den Michelangelo für seine David-Statue verwendete.",
        "Das zweimal jährlich stattfindende Pferderennen Palio in Siena ist eine tief verwurzelte mittelalterliche Tradition der Stadtteile."
      ]
    }
  },
  {
    "id": "reg-sicilia",
    "descriptionAdvanced": {
      "en": "Sicily is the cultural melting pot of the Mediterranean, where Greek temples, Norman cathedrals, and arabesque palaces coexist. Mount Etna, Europe's highest active volcano, constantly shapes the landscape and provides fertile soil for agriculture, especially for pistachios and citrus fruits. The island's cuisine reflects this diversity: arancini, caponata, and cannoli all carry the flavors of local history. From the bustling markets of Palermo to the elegance of baroque towns like Noto and Ragusa, Sicily offers a unique and unforgettable journey through time and cultures. Geography K8 — Volcanism and Seismic Activities.",
      "hu": "Szicília a Földközi-tenger kulturális olvasztótégelye, ahol a görög templomok, normann katedrálisok és arabeszk díszítésű paloták egymás mellett élnek. Az Etna, Európa legmagasabb aktív vulkánja, folyamatosan formálja a tájat és termékeny talajt biztosít a mezőgazdaságnak, különösen a pisztácia- és citrusfélék termesztésének. A sziget konyhája tükrözi ezt a sokszínűséget: az arancini, a caponata és a cannoli mind a helyi történelem ízeit hordozzák. Palermo nyüzsgő piacaitól a barokk városok, mint Noto és Ragusa eleganciájáig Szicília egyedi és felejthetetlen utazást kínál az időben és a kultúrák között. Földrajz K8 — Vulkanizmus és szeizmikus tevékenységek.",
      "ro": "",
      "de": "Sizilien ist der kulturelle Schmelztiegel des Mittelmeers, in dem griechische Tempel, normannische Kathedralen und Paläste mit arabesken Verzierungen nebeneinander existieren. Der Ätna, Europas höchster aktiver Vulkan, prägt ständig die Landschaft und liefert fruchtbaren Boden für die Landwirtschaft, insbesondere für Pistazien und Zitrusfrüchte. Die Küche der Insel spiegelt diese Vielfalt wider: Arancini, Caponata und Cannoli tragen alle die Aromen der lokalen Geschichte in sich. Von den belebten Märkten Palermos bis zur Eleganz der Barockstädte wie Noto und Ragusa bietet Sizilien eine einzigartige und unvergessliche Reise durch die Zeit und Kulturen. Geografie K8 — Vulkanismus und seismische Aktivitäten."
    },
    "factsAdvanced": {
      "en": [
        "The Valley of the Temples in Agrigento is one of the most outstanding archaeological sites of the Greek world outside of Greece itself.",
        "The island was an important part of 'Magna Graecia' (Greater Greece), with cities like Syracuse that once rivaled Athens.",
        "The Capuchin Catacombs of Palermo hold thousands of mummified bodies from the 16th to the 20th centuries.",
        "The Sicilian puppet theatre (Opera dei Pupi) is a UNESCO Intangible Cultural Heritage.",
        "The salt pans around Trapani and Marsala, with their windmills, create a picturesque landscape and produce high-quality sea salt.",
        "Many iconic scenes from 'The Godfather' trilogy were filmed in Sicily.",
        "The Aeolian Islands, including the constantly active Stromboli, are a volcanic archipelago off the island's coast."
      ],
      "hu": [
        "Az agrigentói Templomok Völgye a görög világ egyik legkiemelkedőbb régészeti lelőhelye a görög anyaországon kívül.",
        "A sziget a 'Magna Graecia' (Nagy Görögország) fontos része volt, olyan városokkal, mint Szirakúza, amely egykor Athénnal vetekedett.",
        "A palermói kapucinus katakombákban több ezer mumifikálódott holttestet őriznek, amelyek a 16. és 20. század között éltek.",
        "A szicíliai bábszínház (Opera dei Pupi) az UNESCO Szellemi Kulturális Örökség része.",
        "A sólepárlók Trapani és Marsala környékén festői tájat alkotnak a szélmalmokkal, és kiváló minőségű tengeri sót termelnek.",
        "Szicíliában forgatták a 'Keresztapa' trilógia számos ikonikus jelenetét.",
        "Az Aeoli-szigetek, köztük a folyamatosan aktív Stromboli, a sziget partjainál található vulkáni szigetcsoport."
      ],
      "ro": [],
      "de": [
        "Das Tal der Tempel in Agrigento ist eine der herausragendsten archäologischen Stätten der griechischen Welt außerhalb Griechenlands.",
        "Die Insel war ein wichtiger Teil der 'Magna Graecia', mit Städten wie Syrakus, das einst mit Athen rivalisierte.",
        "Die Kapuzinergruft von Palermo beherbergt Tausende von mumifizierten Körpern aus dem 16. bis 20. Jahrhundert.",
        "Das sizilianische Puppentheater (Opera dei Pupi) gehört zum immateriellen UNESCO-Weltkulturerbe.",
        "Die Salinen um Trapani und Marsala mit ihren Windmühlen erzeugen eine malerische Landschaft und produzieren hochwertiges Meersalz.",
        "Viele ikonische Szenen aus der 'Der Pate'-Trilogie wurden auf Sizilien gedreht.",
        "Die Äolischen Inseln, darunter der ständig aktive Stromboli, sind ein vulkanischer Archipel vor der Küste der Insel."
      ]
    }
  },
  {
    "id": "reg-veneto",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Veneto régiója sokkal többet kínál Velence csatornáinál. A Dolomitok fenséges csúcsaitól a Garda-tó keleti partjáig és a termékeny Pó-síkságig terjedő táj rendkívül változatos. A régió a Velencei Köztársaság ezeréves történelmi örökségét hordozza, amely a kereskedelem és a művészetek központja volt. Padova és Verona városa is büszkélkedhet gazdag kulturális élettel; előbbi Európa egyik legrégebbi egyetemének, utóbbi pedig Shakespeare Rómeó és Júliájának helyszíne. A Prosecco borvidék dombjai, amelyek ma már az UNESCO Világörökség részét képezik, a világhírű habzóbor hazája. Történelem K5 — Kereskedővárosok a középkorban.",
      "ro": "",
      "de": "Die Region Venetien bietet weit mehr als nur die Kanäle von Venedig. Von den majestätischen Gipfeln der Dolomiten bis zum Ostufer des Gardasees und der fruchtbaren Po-Ebene ist die Landschaft äußerst vielfältig. Die Region trägt das tausendjährige historische Erbe der Republik Venedig in sich, die einst ein Zentrum des Handels und der Künste war. Auch die Städte Padua und Verona rühmen sich eines reichen kulturellen Lebens; erstere beherbergt eine der ältesten Universitäten Europas, letztere ist Schauplatz von Shakespeares Romeo und Julia. Die Hügel des Prosecco-Gebiets, die heute zum UNESCO-Welterbe gehören, sind die Heimat des weltberühmten Schaumweins. Geschichte K5 — Handelsstädte im Mittelalter."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A padovai botanikus kert (1545) a világ legrégebbi egyetemi botanikus kertje, és az UNESCO Világörökség része.",
        "A Bassano del Grappa-i Alpini-híd, amelyet Andrea Palladio tervezett, a hegyi csapatok szimbóluma.",
        "A régióban található a 'Strada del Prosecco', Olaszország első borútja.",
        "Veronában egy római kori aréna található, amely ma is operaelőadásoknak ad otthont, és akusztikája világhírű.",
        "A Velencei-lagúnában található Chioggia várost 'Kis Velencének' is nevezik csatornái és hídjai miatt.",
        "A Tiramisu desszertet a venetói Trevisóban találták fel az 1960-as években.",
        "A régió gazdasága a turizmus mellett jelentős ipari és mezőgazdasági termelésre is támaszkodik."
      ],
      "ro": [],
      "de": [
        "Der Botanische Garten von Padua (1545) ist der älteste universitäre botanische Garten der Welt und UNESCO-Welterbe.",
        "Die Alpini-Brücke in Bassano del Grappa, entworfen von Andrea Palladio, ist ein Symbol der Gebirgstruppen.",
        "In der Region befindet sich die 'Strada del Prosecco', die erste Weinstraße Italiens.",
        "In Verona befindet sich eine Arena aus römischer Zeit, die noch heute für Opernaufführungen genutzt wird.",
        "Die Stadt Chioggia in der Lagune von Venedig wird wegen ihrer Kanäle und Brücken auch 'Klein-Venedig' genannt.",
        "Das Dessert Tiramisu wurde in den 1960er Jahren in Treviso in Venetien erfunden.",
        "Die Wirtschaft der Region stützt sich neben dem Tourismus auf eine bedeutende Industrie- und Agrarproduktion."
      ]
    }
  },
  {
    "id": "reg-lazio",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Lazio, Olaszország szíve, a Római Birodalom és a pápaság történelmének epicentruma. Róma ókori romjai és a Vatikán művészeti kincsei mellett a régió rejtett gyöngyszemeket is kínál. A Castelli Romani vulkanikus tavai, mint az Albano-tó and a Nemi-tó, a rómaiak kedvelt nyári menedékhelyei. Tivoli városa a Villa d'Este lenyűgöző szökőkútjaival és Hadrianus császár hatalmas villájával büszkélkedhet. Az etruszk civilizáció nyomai Tarquinia and Cerveteri nekropoliszaiban fedezhetők fel, amelyek az UNESCO Világörökség részét képezik. Lazio tájai a Tirrén-tenger partjától az Appenninek hegyeiig terjednek, változatos élményeket nyújtva. Történelem K5 — Az ókori Róma.",
      "ro": "",
      "de": "Latium, das Herz Italiens, ist das Epizentrum der Geschichte des Römischen Reiches und des Papsttums. Neben den antiken Ruinen Roms und den Kunstschätzen des Vatikans bietet die Region auch versteckte Juwelen. Die vulkanischen Seen der Castelli Romani, wie der Albaner See und der Nemi-See, sind seit jeher beliebte Sommerresidenzen der Römer. Die Stadt Tivoli kann mit den beeindruckenden Springbrunnen der Villa d'Este und der riesigen Villa von Kaiser Hadrian aufwarten. Spuren der etruskischen Zivilisation lassen sich in den Nekropolen von Tarquinia und Cerveteri entdecken, die zum UNESCO-Welterbe gehören. Latiums Landschaften erstrecken sich von der Küste bis zum Apennin. Geschichte K5 — Das antike Rom."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "Az Appia Antica út, az egyik első római út, ma egy regionális park, ahol ókori síremlékek és katakombák találhatók.",
        "A 'Szent Szörnyek Parkja' Bomarzóban egy bizarr, 16. századi szoborkert, tele mitológiai lényekkel.",
        "Frascati városa híres a fehérboráról, amelyet a környék vulkanikus talaján termesztenek.",
        "A régióban található a világ egyik legkisebb országa, a Vatikán.",
        "Ostia Antica, Róma ókori kikötővárosa, Pompejihez hasonlóan lenyűgöző bepillantást enged a római mindennapokba.",
        "A Civita di Bagnoregio egy lassan erodálódó tufasziklára épült, haldokló városként ismert középkori falu.",
        "A tésztaételek, mint a Carbonara, Amatriciana és Cacio e Pepe, mind a lazioi konyhából származnak."
      ],
      "ro": [],
      "de": [
        "Die Via Appia Antica, eine der ersten Römerstraßen, ist heute ein Regionalpark mit antiken Grabmalen und Katakomben.",
        "Der 'Park der Ungeheuer' in Bomarzo ist ein bizarrer Skulpturengarten aus dem 16. Jahrhundert voller mythologischer Wesen.",
        "Die Stadt Frascati ist berühmt für ihren Weißwein, der auf den vulkanischen Böden der Umgebung angebaut wird.",
        "In der Region befindet sich das kleinste Land der Welt, die Vatikanstadt.",
        "Ostia Antica, der antike Hafen Roms, bietet wie Pompeji einen faszinierenden Einblick in den römischen Alltag.",
        "Civita di Bagnoregio ist ein mittelalterliches Dorf auf einem erodierenden Tuffsteinfelsen, bekannt als 'sterbende Stadt'.",
        "Nudelgerichte wie Carbonara, Amatriciana und Cacio e Pepe stammen alle aus der Küche Latiums."
      ]
    }
  },
  {
    "id": "milan",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Milánó Olaszország pénzügyi és divatfővárosa, ahol a modern felhőkarcolók és a történelmi épületek izgalmas kontrasztot alkotnak. A gótika mesterműve, a Dóm, tetőteraszáról páratlan kilátás nyílik a városra. A Santa Maria delle Grazie-templomban Leonardo da Vinci 'Az utolsó vacsora' című freskója a reneszánsz művészet egyik csúcsa. A Quadrilatero della Moda luxusüzletei a divat szerelmeseinek zarándokhelyei. A Navigli-csatornák mentén esténként pezsgő élet zajlik, a bárok és éttermek hangulatosak. Milánó az üzlet, a művészet és az 'aperitivo' kultúrájának tökéletes elegye. Gazdaságföldrajz K8 — Divatipar és globális márkák.",
      "ro": "",
      "de": "Mailand ist die Finanz- und Modehauptstadt Italiens, in der moderne Wolkenkratzer und historische Gebäude einen spannenden Kontrast bilden. Der Dom, ein Meisterwerk der Gotik, bietet von seiner Dachterrasse einen unvergleichlichen Blick über die Stadt. In der Kirche Santa Maria delle Grazie ist Leonardo da Vincis 'Das Abendmahl' zu bewundern. Die Navigli-Kanäle sind bekannt für ihr pulsierendes Nachtleben. Mailand ist die perfekte Mischung aus Geschäftswelt, Kunst und der Kultur des 'Aperitivo'. Wirtschaftsgeografie K8 — Modeindustrie und globale Marken."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A La Scala operaház a világ egyik leghíresebb operaháza, 1778-ban nyílt meg.",
        "A város ad otthont Olaszország legrégebbi bevásárlóközpontjának, a Galleria Vittorio Emanuele II-nek.",
        "A milánói rizottó (Risotto alla Milanese) sáfránnyal készül, ami jellegzetes sárga színét adja.",
        "Két világhírű futballcsapat, az AC Milan és az Inter Milan otthona.",
        "A Pirelli-torony a modern olasz építészet egyik első és legjelentősebb példája.",
        "A Brera negyed a művészek és a bohém élet központja, tele galériákkal és hangulatos utcákkal.",
        "Milánóban található a legrégebbi, még működő villamoshálózatiak egyike.",
        "A város a 4. században rövid ideig a Nyugat-Római Birodalom fővárosa volt."
      ],
      "ro": [],
      "de": [
        "Das Opernhaus La Scala ist eines der berühmtesten der Welt und wurde 1778 eröffnet.",
        "Die Stadt beherbergt Italiens ältestes Einkaufszentrum, die Galleria Vittorio Emanuele II.",
        "Das Risotto alla Milanese wird mit Safran zubereitet, was ihm seine charakteristische gelbe Farbe verleiht.",
        "Mailand ist die Heimat zweier weltberühmter Fußballvereine, AC Mailand und Inter Mailand.",
        "Der Pirelli-Turm ist eines der ersten und bedeutendsten Beispiele moderner italienischer Architektur.",
        "Das Viertel Brera ist das Zentrum der Künstler und des Bohème-Lebens mit vielen Galerien.",
        "Mailand besitzt eines der ältesten noch funktionierenden Straßenbahnnetze der Welt.",
        "Die Stadt war im 4. Jahrhundert für kurze Zeit die Hauptstadt des Weströmischen Reiches."
      ]
    }
  },
  {
    "id": "venice",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Velence, a lagúnák városa, egyedülálló csoda, amely 118 szigetre épült. A Canal Grande, a város fő ütőere, reneszánsz és gótikus palotákkal van szegélyezve, amelyeken a vaporettók és gondolák közlekednek. A Szent Márk tér a város szíve, ahol a bizánci stílusú bazilika, a Dózse-palota és a Campanile harangtorony áll. A szűk sikátorok (calle) és hidak labirintusában eltévedni a legjobb módja a város rejtett zugainak felfedezésének. A velencei karnevál a maszkok és a jelmezek pazar ünnepe. Velence a művészet, a történelem és a romantika páratlan keveréke, amely lassan, de méltóságteljesen küzd az idő és a víz ellen. Történelem K6 — Kereskedőállamok.",
      "ro": "",
      "de": "Venedig, die Stadt der Lagunen, ist ein einzigartiges Wunder, das auf 118 Inseln erbaut wurde. Der Canal Grande, die Hauptschlagader der Stadt, wird von Renaissance- und Gotikpalästen gesäumt, auf denen Vaporetti und Gondeln verkehren. Der Markusplatz ist das Herz der Stadt mit der byzantinischen Basilika, dem Dogenpalast und dem Campanile. Im Labyrinth der engen Gassen (Calle) und Brücken kann man sich leicht verlieren, was der beste Weg ist, um versteckte Ecken zu entdecken. Der venezianische Karneval ist ein prächtiges Fest der Masken und Kostüme. Venedig ist eine unvergleichliche Mischung aus Kunst, Geschichte und Romantik. Geschichte K6 — Seehandelsmächte."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "Velence több mint 1100 évig volt független köztársaság.",
        "A városban több mint 400 híd található, a leghíresebbek a Rialto-híd és a Sóhajok hídja.",
        "A 'Libreria Acqua Alta' a világ egyik legkülönlegesebb könyvesboltja, ahol a könyveket gondolákban és csónakokban tárolják.",
        "Az Acqua Alta, a periodikus magas vízállás, a város életének természetes része.",
        "A Velencei Biennále a világ egyik legrangosabb kortárs képzőművészeti kiállítása.",
        "A Murano-sziget a híres velencei üveggyártás központja, míg Burano a csipkekészítésről és a színes házakról ismert.",
        "A városban nincsenek autók, a közlekedés kizárólag vízen és gyalogosan történik.",
        "A Campari és az Aperol Spritz népszerű aperitifek, amelyek szorosan kötődnek Velencéhez."
      ],
      "ro": [],
      "de": [
        "Venedig war über 1100 Jahre lang eine unabhängige Republik.",
        "In der Stadt gibt es über 400 Brücken, die berühmtesten sind die Rialtobrücke und die Seufzerbrücke.",
        "Die 'Libreria Acqua Alta' ist eine der originellsten Buchhandlungen der Welt, wo Bücher in Gondeln lagern.",
        "Acqua Alta, das periodische Hochwasser, ist ein natürlicher Teil des Lebens in der Stadt.",
        "Die Biennale von Venedig ist eine der weltweit renommiertesten Ausstellungen für zeitgenössische Kunst.",
        "Die Insel Murano ist das Zentrum der Glasherstellung, während Burano für Spitzen und bunte Häuser bekannt ist.",
        "In der Stadt gibt es keine Autos; der Verkehr findet ausschließlich zu Wasser und zu Fuß statt.",
        "Campari und Aperol Spritz sind beliebte Aperitifs, die eng mit Venedig verbunden sind."
      ]
    }
  },
  {
    "id": "florence",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Firenze, a reneszánsz bölcsője, olyan, mint egy szabadtéri múzeum. A város látképét a Dóm lenyűgöző, Brunelleschi által tervezett kupolája uralja. Az Uffizi Képtár és a Galleria dell'Accademia a világ legjelentősebb művészeti kincseit őrzik, köztük Botticelli 'Vénusz születését' és Michelangelo 'Dávidját'. A Ponte Vecchio, az Arno folyó felett átívelő középkori híd, ékszerüzleteivel egyedülálló látvány. A Medici család öröksége mindenütt jelen van, a Pitti-palotától a San Lorenzo-templomig. Firenze a művészet, a történelem és a toszkán gasztronómia fellegvára. Művészettörténet K7 — A reneszánsz művészet.",
      "ro": "",
      "de": "Florenz, die Wiege der Renaissance, wirkt wie ein Freilichtmuseum. Das Stadtbild wird von der beeindruckenden Kuppel des Doms dominiert, die von Brunelleschi entworfen wurde. Die Uffizien und die Galleria dell'Accademia beherbergen einige der bedeutendsten Kunstschätze der Welt, darunter Botticellis 'Geburt der Venus' und Michelangelos 'David'. Der Ponte Vecchio, die mittelalterliche Brücke über den Arno, ist mit seinen Juweliergeschäften ein einzigartiger Anblick. Das Erbe der Familie Medici ist überall präsent, vom Palazzo Pitti bis zur Kirche San Lorenzo. Florenz ist eine Hochburg der Kunst und Geschichte. Kunstgeschichte K7 — Die Kunst der Renaissance."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A modern olasz nyelv a firenzei dialektusból fejlődött ki, Dante Alighieri munkásságának köszönhetően.",
        "A Pitti-palota mögött elterülő Boboli-kert az olasz kerttervezés egyik legkorábbi és legfontosabb példája.",
        "Firenze volt az Olasz Királyság fővárosa 1865 és 1871 között.",
        "A városban találták fel a zongorát, Bartolomeo Cristofori munkája révén.",
        "A 'lampredotto', egy pacalból készült szendvics, a helyi street food specialitás.",
        "Az 1966-os nagy árvíz súlyos károkat okozott a város művészeti kincseiben.",
        "A város jelképe a 'Marzocco', a pajzsot tartó oroszlán, Donatello szobrának másolata a Piazza della Signoria-n áll.",
        "Gucci, a híres divatmárka, Firenzében alakult 1921-ben."
      ],
      "ro": [],
      "de": [
        "Die moderne italienische Sprache entwickelte sich aus dem florentinischen Dialekt durch Dante Alighieri.",
        "Der Boboli-Garten hinter dem Palazzo Pitti ist ein bedeutendes Beispiel italienischer Gartenkunst.",
        "Florenz war von 1865 bis 1871 die Hauptstadt des Königreichs Italien.",
        "Das Klavier wurde in Florenz von Bartolomeo Cristofori erfunden.",
        "'Lampredotto', ein Kuttel-Sandwich, ist die lokale Streetfood-Spezialität.",
        "Das große Hochwasser von 1966 verursachte schwere Schäden an den Kunstschätzen der Stadt.",
        "Das Symbol der Stadt ist der 'Marzocco', ein Löwe, der ein Wappen hält.",
        "Gucci, die berühmte Modemarke, wurde 1921 in Florenz gegründet."
      ]
    }
  },
  {
    "id": "naples",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Nápoly, Dél-Olaszország lüktető szíve, egy város tele ellentmondásokkal és élettel. A Vezúv árnyékában fekvő metropolisz a pizza szülőhazája, ahol a 'vera pizza napoletana' hagyományát szigorúan őrzik. A történelmi központ, az UNESCO Világörökség része, egy szűk utcákból álló labirintus, ahol a mindennapi élet zajos és színes. A föld alatt alagutak és katakombák hálózata húzódik, amely a város egy másik, rejtett arcát mutatja meg. A Nemzeti Régészeti Múzeum a Pompejiből és Herculaneumból származó leletek leggazdagabb gyűjteményének ad otthont. Nápoly egy nyers, autentikus és felejthetetlen olasz élmény. Kultúrtörténet K6 — Ókori római mindennapok.",
      "ro": "",
      "de": "Neapel, das pulsierende Herz Süditaliens, ist eine Stadt voller Gegensätze und Leben. Die im Schatten des Vesuvs gelegene Metropole ist die Heimat der Pizza, wo die Tradition der 'Vera Pizza Napoletana' streng gehütet wird. Das historische Zentrum, Teil des UNESCO-Welterbes, ist ein Labyrinth aus engen Gassen, in denen das tägliche Leben laut und farbenfroh abläuft. Unter der Erde erstreckt sich ein Netz aus Tunneln und Katakomben, das eine versteckte Seite der Stadt zeigt. Das Archäologische Nationalmuseum beherbergt die reichste Sammlung von Funden aus Pompeji. Neapel ist ein unvergessliches italienisches Erlebnis. Kulturgeschichte K6 — Alltag im antiken Rom."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A nápolyi nyelv egy különálló, gazdag irodalommal rendelkező újlatin nyelv, nem csupán egy olasz dialektus.",
        "A San Carlo Operaház (1737) a legrégebbi, folyamatosun működő operaház Európában.",
        "A 'Spaccanapoli' egy hosszú, egyenes utca, amely kettészeli a város ősi központját.",
        "A nápolyi betlehemkészítés (presepe) egy aprólékos, generációkon átívelő művészeti hagyomány.",
        "A város alatt egy kiterjedt geotermikus alagútrendszer húzódik, amelyet a görögök kezdtek el építeni.",
        "A kávéfogyasztás kultúrája mélyen gyökerezik, a 'caffè sospeso' (felfüggesztett kávé) hagyománya is innen ered.",
        "A 'sfogliatella', egy kagyló alakú, ricottával töltött sütemény, a város ikonikus édessége.",
        "Nápoly ad otthont a világ egyik legrégebbi állami egyetemének, a II. Frigyes Egyetemnek (1224)."
      ],
      "ro": [],
      "de": [
        "Neapolitanisch ist eine eigene romanische Sprache mit reicher Literatur, kein bloßer Dialekt.",
        "Das Teatro San Carlo (1737) ist das älteste kontinuierlich betriebene Opernhaus Europas.",
        "Die 'Spaccanapoli' ist eine lange, gerade Straße, die das antike Zentrum der Stadt teilt.",
        "Die neapolitanische Krippenkunst (Presepe) ist eine akribische, generationenübergreifende Tradition.",
        "Unter der Stadt liegt ein ausgedehntes Tunnelsystem, das schon von den Griechen begonnen wurde.",
        "Die Kaffeekultur ist tief verwurzelt; hier entstand die Tradition des 'Caffè sospeso'.",
        "Die 'Sfogliatella', ein muschelförmiges Gebäck, ist die ikonische Süßigkeit der Stadt.",
        "Neapel beherbergt mit der Universität Federico II (1224) eine der ältesten staatlichen Universitäten."
      ]
    }
  },
  {
    "id": "colosseum",
    "descriptionAdvanced": {
      "en": "",
      "hu": "A Colosseum, eredeti nevén Flavius Amphitheatrum, a Római Birodalom nagyságának és mérnöki zsenialitásának örök szimbóluma. Az i.sz. 1. században épült monumentális aréna a birodalom legnagyobb amfiteátruma volt, amely becslések szerint 50 000-80 000 nézőt tudott befogadni. Itt tartották a hírhedt gladiátorviadalokat, állatvadászatokat (venationes) és nyilvános kivégzéseket. A föld alatti, bonyolult alagútrendszer, a hypogeum, lehetővé tette a harcosok és állatok drámai megjelenését az arénában. Bár az évszázadok során földrengések és kőrablók károsították, ma is Róma leglátogatottabb műemléke. Történelem K5 — Az ókori Róma mindennapjai.",
      "ro": "",
      "de": "Das Kolosseum, ursprünglich Flavisches Amphitheater genannt, ist das ewige Symbol für die Größe und das technische Genie des Römischen Reiches. Die im 1. Jahrhundert n. Chr. errichtete monumentale Arena war das größte Amphitheater des Reiches und bot schätzungsweise 50.000 bis 80.000 Zuschauern Platz. Hier fanden die berüchtigten Gladiatorenkämpfe, Tierhetzen und öffentlichen Hinrichtungen statt. Ein komplexes unterirdisches System von Tunneln, das Hypogäum, ermöglichte dramatische Auftritte von Kämpfern und Tieren. Obwohl es über Jahrhunderte durch Erdbeben und Steinraub beschädigt wurde, bleibt es Roms meistbesuchtes Denkmal. Geschichte K5 — Der Alltag im antiken Rom."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "Építését Vespasianus császár kezdte meg és fia, Titus fejezte be i.sz. 80-ban.",
        "A külső falakhoz több mint 100 000 köbméter travertin követ használtak fel, vas kapcsokkal rögzítve.",
        "A bonyolult, 80 bejáratból álló rendszer lehetővé tette a hatalmas tömeg gyors és rendezett be- és kiáramlását.",
        "A forró napokon egy hatalmas vászontetőt, a velariumot feszítettek ki a nézőtér fölé, árnyékot biztosítva.",
        "Alkalmanként vízi csatákat (naumachia) is rendeztek az aréna vízzel való elárasztásával.",
        "A középkorban erőddé, majd lakóépületekké és műhelyekké alakították.",
        "2007-ben a világ hét új csodájának egyikeként választották meg.",
        "A Colosseum képe szerepel az olasz 5 centes euróérmén."
      ],
      "ro": [],
      "de": [
        "Der Bau wurde von Kaiser Vespasian begonnen und von seinem Sohn Titus 80 n. Chr. vollendet.",
        "Für die Außenwände wurden über 100.000 Kubikmeter Travertin verwendet, mit Eisenklammern fixiert.",
        "Das System aus 80 Eingängen ermöglichte ein schnelles Ein- und Ausströmen der riesigen Menschenmengen.",
        "An heißen Tagen wurde ein riesiges Sonnensegel, das Velarium, über den Zuschauerräumen aufgespannt.",
        "Gelegentlich wurden Seeschlachten (Naumachien) durch Fluten der Arena inszeniert.",
        "Im Mittelalter wurde es zu einer Festung und später zu Wohngebäuden und Werkstätten umgebaut.",
        "Im Jahr 2007 wurde es zu einem der neuen sieben Weltwunder gewählt.",
        "Das Bild des Kolosseums ist auf der italienischen 5-Cent-Euromünze abgebildet."
      ]
    }
  },
  {
    "id": "pisa-tower",
    "descriptionAdvanced": {
      "en": "",
      "hu": "A pisai ferde torony, a város katedrálisának harangtornya (campanile), Olaszország egyik legismertebb jelképe. A dőlés már az építkezés korai szakaszában, a 12. században megkezdődött a gyenge altalaj miatt. Az évszázadok során a mérnökök folyamatosan próbálták korrigálni a dőlést, az egyik oldalon magasabbra építve az újabb szinteket, ami a torony enyhe banán-alakját eredményezte. A 20. század végén végzett komoly stabilizációs munkálatoknak köszönhetően a torony ma már biztonságosan látogatható. A Piazza dei Miracoli (Csodák tere) részeként a Dómmal és a Keresztelőkápolnával együtt az UNESCO Világörökség része. Fizika K7 — Gravitáció és tömegközéppont.",
      "ro": "",
      "de": "Der Schiefe Turm von Pisa, der Glockenturm (Campanile) der Kathedrale, ist eines der bekanntesten Symbole Italiens. Die Neigung begann bereits in der frühen Bauphase im 12. Jahrhundert aufgrund des schwachen Untergrunds. Über Jahrhunderte versuchten Ingenieure, die Neigung zu korrigieren, indem sie neue Stockwerke auf einer Seite höher bauten, was die Bananenform des Turms erklärt. Dank umfangreicher Stabilisierungsarbeiten Ende des 20. Jahrhunderts ist der Turm heute wieder sicher begehbar. Als Teil der Piazza dei Miracoli gehört er zum UNESCO-Welterbe. Physik K7 — Gravitation und Schwerpunkt."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A torony építése három szakaszban, közel 200 évig tartott.",
        "A dőlés mértéke a stabilizálás előtt elérte az 5,5 fokot, ma körülbelül 3,97 fok.",
        "A tetején hét harang található, amelyek a zenei skála hét hangjának felelnek meg.",
        "A legenda szerint Galileo Galilei a toronyból leejtett tárgyakkal végezte gravitációs kísérleteit.",
        "A 296 lépcsőfok vezet fel a csúcsra.",
        "A torony hengeres teste hat oszlopsorból áll, amelyek a román stílusú építészet jegyeit viselik.",
        "A 20. századi beavatkozás során több tonna földet távolítottak el az északi oldal alól, hogy csökkentsék a dőlést."
      ],
      "ro": [],
      "de": [
        "Der Bau des Turms dauerte in drei Etappen fast 200 Jahre.",
        "Die Neigung betrug vor der Stabilisierung bis zu 5,5 Grad, heute sind es etwa 3,97 Grad.",
        "An der Spitze befinden sich sieben Glocken, die den sieben Noten der Musikskala entsprechen.",
        "Der Legende nach führte Galileo Galilei Fallversuche vom Turm aus durch.",
        "Es führen 296 Stufen hinauf zur Aussichtsplattform.",
        "Der zylindrische Körper des Turms besteht aus sechs Säulenreihen im romanischen Stil.",
        "Bei der Sanierung im 20. Jahrhundert wurden Tonnen von Erde unter der Nordseite entfernt."
      ]
    }
  },
  {
    "id": "pompeii",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Pompeji, az ókori római város, amelyet a Vezúv i.sz. 79-es kitörése konzervált, egyedülálló régészeti lelőhely. A több méter vastag hamu- és habkőréteg alatt megőrződött város egy pillanatfelvételt ad egy virágzó kereskedelmi központ mindennapjairól. A feltárt utcák, lakóházak (domusok), üzletek, fürdők és templomok lenyűgöző részletességgel mutatják be a római életmódot. A freskók, mozaikok és a falakon talált graffitik betekintést engednek a kor művészetébe, politikájába és humorába. A legmegrendítőbb leletek a kitörés áldozatainak gipszöntvényei, amelyek az utolsó pillanataikban örökítették meg őket. Történelem K5 — Az ókori Róma.",
      "ro": "",
      "de": "Pompeji, die antike römische Stadt, die durch den Ausbruch des Vesuvs 79 n. Chr. konserviert wurde, ist eine einzigartige archäologische Stätte. Unter einer meterhohen Schicht aus Asche und Bimsstein blieb die Stadt als Momentaufnahme eines blühenden Handelszentrums erhalten. Die freigelegten Straßen, Wohnhäuser (Domus), Läden, Thermen und Tempel zeigen den römischen Lebensstil in faszinierender Detailtreue. Fresken, Mosaike und Graffiti geben Einblick in Kunst, Politik und Humor der Zeit. Die bewegendsten Funde sind die Gipsabgüsse der Opfer. Geschichte K5 — Das antike Rom."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A város a Sarno folyó torkolatánál feküdt, ami fontos kereskedelmi útvonallá tette.",
        "A feltárások során komplett pékségeket találtak kemencékkel és elszenesedett kenyerekkel.",
        "A 'Cave Canem' ('Vigyázz a kutyával!') mozaik egy híres lelet egy pompeji ház bejáratától.",
        "Pompejiben volt amfiteátrum, két színház és számos közfürdő.",
        "A Vénusznak szentelt templom a város egyik legfontosabb vallási központja volt.",
        "A 'Villa dei Misteri' (Misztériumok Villája) híres freskói egy titokzatos vallási beavatási szertartást ábrázolnak.",
        "A lakosok nem tudták, hogy a Vezúv egy vulkán, hegynek hitték.",
        "Ifjabb Plinius levelei részletesen dokumentálták a kitörést, nagybátyja, Idősebb Plinius halálát is beleértve."
      ],
      "ro": [],
      "de": [
        "Die Stadt lag an der Mündung des Sarno, was sie zu einem wichtigen Handelsplatz machte.",
        "Bei den Ausgrabungen wurden komplette Bäckereien mit Öfen und verkohltem Brot gefunden.",
        "Das 'Cave Canem'-Mosaik ('Warnung vor dem Hund') ist ein berühmter Fund an einem Hauseingang.",
        "Pompeji besaß ein Amphitheater, zwei Theater und zahlreiche öffentliche Bäder.",
        "Der Tempel der Venus war eines der wichtigsten religiösen Zentren der Stadt.",
        "Die 'Villa dei Misteri' ist berühmt für Fresken, die ein mysteriöses Einweihungsritual zeigen.",
        "Die Einwohner wussten nicht, dass der Vesuv ein Vulkan war; sie hielten ihn für einen Berg.",
        "Briefe von Plinius dem Jüngeren dokumentierten den Ausbruch und den Tod seines Onkels."
      ]
    }
  },
  {
    "id": "etna",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Az Etna, Európa legmagasabb és legaktívabb vulkánja, Szicília keleti partjának látképét uralja. Folyamatos tevékenysége, a lávafolyamoktól a gáz- és hamukibocsátásig, folyamatosan formálja a környező tájat. A hegy oldala egyedülálló ökoszisztéma, ahol a termékeny vulkáni talajon citrusligetek és szőlőültetvények virágoznak, míg a magasabb régiókban holdbéli táj fogadja a látogatót. A hegyre felvonóval és terepjáró buszokkal lehet feljutni, amelyek a fő kráterek közelébe visznek. Az Etna nemcsak természeti csoda, hanem a helyi kultúra és gazdaság szerves része is. Földrajz K8 – Vulkáni tevékenység.",
      "ro": "",
      "de": "Der Ätna, Europas höchster und aktivster Vulkan, dominiert das Panorama der Ostküste Siziliens. Seine ständige Aktivität, von Lavaströmen bis hin zu Gas- und Ascheausstößen, formt die umgebende Landschaft kontinuierlich. Die Hänge des Berges sind ein einzigartiges Ökosystem, in dem auf fruchtbarem Vulkanboden Zitrus- und Olivenhaine gedeihen, während in höheren Regionen eine Mondlandschaft den Besucher empfängt. Seilbahnen und Geländebusse bringen Touristen in die Nähe der Hauptkrater. Der Ätna ist ein Naturwunder und Teil der lokalen Kultur. Geografie K8 – Vulkanische Aktivität."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "Az Etna kitöréseit több mint 2700 éve dokumentálják, ezzel a világ leghosszabb ideig feljegyzett vulkáni tevékenységével rendelkezik.",
        "A hegy magassága a kitörések miatt folyamatosan változik.",
        "A görög mitológiában Héphaisztosz, a kovácsisten műhelye az Etna alatt volt.",
        "A 'Valle del Bove' egy hatalmas patkó alakú mélyedés a hegy keleti oldalán, amelyet egy ősi, katasztrofális összeomlás hozott létre.",
        "A Circumetnea vasút egy 110 km hosszú, keskeny nyomtávú vasútvonal, amely körbejárja a vulkán lábát.",
        "Az Etna lejtőin termelt borok (Etna DOC) különleges, ásványos ízvilágukról ismertek.",
        "Télen a hegyen síelni is lehet, a sípályák egyedülálló kilátást nyújtanak a Jón-tengerre."
      ],
      "ro": [],
      "de": [
        "Die Eruptionen des Ätna werden seit über 2700 Jahren dokumentiert.",
        "Die Höhe des Berges ändert sich aufgrund der Ausbrüche ständig.",
        "In der griechischen Mythologie befand sich die Werkstatt des Hephaistos unter dem Ätna.",
        "Das 'Valle del Bove' ist eine riesige Senke, die durch einen urzeitlichen Einsturz entstand.",
        "Die Circumetnea-Bahn ist eine 110 km lange Schmalspurbahn, die den Vulkan umrundet.",
        "Die am Ätna produzierten Weine (Etna DOC) sind für ihren mineralischen Geschmack bekannt.",
        "Im Winter kann man auf dem Berg Skifahren, mit Blick auf das Ionische Meer."
      ]
    }
  },
  {
    "id": "vatican",
    "descriptionAdvanced": {
      "en": "",
      "hu": "A Vatikán, a világ legkisebb független állama, a katolicizmus spirituális és adminisztratív központja. A Szent Péter-bazilika, a kereszténység legnagyobb temploma, lenyűgöző kupolájával és Michelangelo Pietà szobrával a reneszánsz építészet csúcsa. A Vatikáni Múzeumok a világ egyik leggazdagabb művészeti gyűjteményét őrzik, amelynek csúcspontja a Sixtus-kápolna, Michelangelo 'Ádám teremtése' és 'Utolsó ítélet' című freskóival. A Szent Péter tér, Bernini ölelő oszlopsorával, a hívők és turisták gyülekezőhelye. A Vatikán a hit, a történelem és a művészet egyedülálló ötvözete. Történelem K8 – A pápaság története.",
      "ro": "",
      "de": "Der Vatikan, der kleinste unabhängige Staat der Welt, ist das spirituelle und administrative Zentrum des Katholizismus. Der Petersdom, die größte Kirche der Christenheit, ist mit seiner beeindruckenden Kuppel und Michelangelos Pietà ein Meisterwerk der Renaissance. Die Vatikanischen Museen beherbergen eine der reichsten Kunstsammlungen der Welt, deren Höhepunkt die Sixtinische Kapelle mit Michelangelos berühmten Fresken ist. Der Petersplatz mit Berninis Kolonnaden ist Versammlungsort für Gläubige und Touristen gleichermaßen. Der Vatikan ist eine einzigartige Verbindung von Glaube, Geschichte und Kunst. Geschichte K8 – Die Geschichte des Papsttums."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A Vatikánnak saját postaszolgálata, vasútállomása és médiaorgánumai vannak.",
        "A Svájci Gárda, a világ legkisebb és legrégebbi hadserege, 1506 óta védi a pápát.",
        "A Vatikáni Titkos Levéltár évszázadok történelmi dokumentumait őrzi.",
        "A Vatikáni Kertek az állam területének több mint felét elfoglalják.",
        "A Vatikán saját euró érméket bocsát ki.",
        "A Passetto di Borgo egy titkos folyosó, amely a Vatikánt köti össze az Angyalvárral.",
        "Az államnak nincs saját repülőtere."
      ],
      "ro": [],
      "de": [
        "Der Vatikan hat eine eigene Post, einen Bahnhof und eigene Medienorgane.",
        "Die Schweizergarde, die kleinste Armee der Welt, schützt den Papst seit 1506.",
        "Das Geheimarchiv des Vatikans hütet historische Dokumente aus vielen Jahrhunderten.",
        "Die Vatikanischen Gärten nehmen mehr als die Hälfte des Staatsgebiets ein.",
        "Der Vatikan prägt seine eigenen Euro-Münzen mit dem Bild des Papstes.",
        "Der Passetto di Borgo ist ein Geheimgang, der den Vatikan mit der Engelsburg verbindet.",
        "Der Staat besitzt keinen eigenen Flughafen, nutzt aber einen Hubschrauberlandeplatz."
      ]
    }
  },
  {
    "id": "it-pompei-full",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Pompeji, az ókori római város, amelyet a Vezúv i.sz. 79-es kitörése konzervált, egyedülálló régészeti lelőhely. A több méter vastag hamu- és habkőréteg alatt megőrződött város egy pillanatfelvételt ad egy virágzó kereskedelmi központ mindennapjairól. A feltárt utcák, lakóházak (domusok), üzletek, fürdők és templomok lenyűgöző részletességgel mutatják be a római életmódot. A freskók, mozaikok és a falakon talált graffitik betekintést engednek a kor művészetébe, politikájába és humorába. A legmegrendítőbb leletek a kitörés áldozatainak gipszöntvényei. Történelem K5 — Az ókori Róma.",
      "ro": "",
      "de": "Pompeji bietet als vollständig erhaltene antike Stadt einen unvergleichlichen Einblick in die römische Zivilisation. Die Katastrophe von 79 n. Chr. konservierte das Forum als Zentrum des öffentlichen Lebens, die Basilika und die Macellum-Markthalle. Besucher können durch intakte Stadtviertel wandern und den Unterschied zwischen prächtigen Villen der Oberschicht und einfachen Mietshäusern der Arbeiterklasse erleben. Die fortschrittliche Stadtplanung mit gepflasterten Straßen und einem Entwässerungssystem zeugt vom hohen Standard der römischen Ingenieurskunst. Pompeji bleibt das wichtigste Laboratorium für die Erforschung der Antike. Geschichte K5 — Das antike Rom."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A város a Sarno folyó torkolatánál feküdt, ami fontos kereskedelmi útvonallá tette.",
        "A feltárások során komplett pékségeket találtak kemencékkel és elszenesedett kenyerekkel.",
        "A 'Cave Canem' ('Vigyázz a kutyával!') mozaik egy híres lelet egy pompeji ház bejáratától.",
        "Pompejiben volt amfiteátrum, két színház és számos közfürdő.",
        "A Vénusznak szentelt templom a város egyik legfontosabb vallási központja volt.",
        "A 'Villa dei Misteri' (Misztériumok Villája) híres freskói egy titokzatos vallási beavatási szertartást ábrázolnak.",
        "A lakosok nem tudták, hogy a Vezúv egy vulkán, hegynek hitték.",
        "Ifjabb Plinius levelei részletesen dokumentálták a kitörést, nagybátyja, Idősebb Plinius halálát is beleértve."
      ],
      "ro": [],
      "de": [
        "Die Stadt wurde 1997 zum UNESCO-Weltkulturerbe erklärt.",
        "Das ausgegrabene Gebiet umfasst etwa 44 Hektar, ein Drittel der Stadt liegt noch unter der Asche.",
        "In Pompeji gab es über 30 Bäckereien, die die Bevölkerung mit Brot versorgten.",
        "Die 'Casa del Fauno' ist eines der größten und luxuriösesten Privathäuser der Stadt.",
        "Bleirohre leiteten Wasser direkt in die Häuser der wohlhabenden Bürger.",
        "Zahlreiche Thermopolien dienten als antike Imbissstuben für die schnelle Verpflegung.",
        "Die roten Wände vieler Häuser gaben dem Farbton 'Pompejanisch Rot' seinen Namen.",
        "Pompeji war vor dem Ausbruch ein wichtiger Exporteur von Garum, einer fermentierten Fischsauce."
      ]
    }
  },
  {
    "id": "it-herculaneum",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Herculaneum, Pompeji kevésbé ismert, de gazdagabb testvérvárosa, a Vezúv 79-es kitörésének egy másik, egyedülálló időkapszulája. Míg Pompejit hamu borította, Herculaneumot forró iszap és vulkáni anyag árasztotta el, ami sokkal jobban konzerválta a szerves anyagokat. Ennek köszönhetően elszenesedett fa ajtókeretek, bútorok, sőt, papirusztekercseket tartalmazó könyvtár is fennmaradt. A város lakóházai, mint a Szarvasos Ház, a tehetősebb réteg életébe engednek bepillantást, csodálatos mozaikjaikkal és freskóikkal. A csónakházakban talált csontvázak drámai módon tanúskodnak a menekülni próbálók sorsáról. Történelem K5 — Az ókori Róma.",
      "ro": "",
      "de": "Herculaneum, die wohlhabendere Schwesterstadt Pompejis, ist eine weitere einzigartige Zeitkapsel des Vesuv-Ausbruchs. Während Pompeji von Asche bedeckt wurde, floss über Herculaneum eine Schicht aus heißem Schlamm, die organisches Material wesentlich besser konservierte. Dadurch blieben verkohlte Holztüren, Möbel und sogar eine Bibliothek mit Papyrusrollen erhalten. Die Häuser der Stadt geben mit ihren prachtvollen Mosaiken Einblick in das Leben der Elite. Die in den Bootshäusern gefundenen Skelette zeugen dramatisch vom tragischen Schicksal derer, die zu fliehen versuchten. Geschichte K5 — Das antike Rom."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A várost a mitikus hősről, Héraklészről (Herkules) nevezték el.",
        "A Papiruszok Villája az egyetlen épségben fennmaradt antik könyvtár a világon.",
        "A vulkáni anyag magas hőmérséklete azonnal elszenesítette a szerves anyagokat, megőrizve formájukat.",
        "A feltárt terület kisebb, mint Pompejiben, mert a modern Ercolano városa ráépült.",
        "A leletek között élelmiszer-maradványokat, például kenyeret és tojást is találtak.",
        "A fürdők (thermae) különösen jó állapotban maradtak fenn, bemutatva a római fürdőkultúrát.",
        "A falakon lévő választási felhívások és hirdetések a politikai életbe engednek betekintést."
      ],
      "ro": [],
      "de": [
        "Die Stadt wurde nach dem mythologischen Helden Herkules benannt.",
        "Die Villa dei Papiri beherbergte die einzige antike Bibliothek, die bis heute erhalten blieb.",
        "Die hohen Temperaturen des Schlamms verkohlten Holz sofort und bewahrten so seine Form.",
        "Das ausgegrabene Gebiet ist kleiner als in Pompeji, da das moderne Ercolano darüber liegt.",
        "Es wurden Reste von Lebensmitteln wie Brot, Eiern und Datteln gefunden.",
        "Die Thermen sind außergewöhnlich gut erhalten und zeigen die römische Badekultur.",
        "Wahlplakate an den Wänden geben Einblick in das politische Leben der Stadt."
      ]
    }
  },
  {
    "id": "it-ostia-antica",
    "descriptionAdvanced": {
      "en": "",
      "hu": "Ostia Antica, Róma ókori kikötővárosa, lenyűgöző betekintést nyújt a Római Birodalom kereskedelmi életébe. A Tiberis folyó torkolatánál fekvő város a birodalom kapuja volt, ahol a gabona, bor és egzotikus áruk partra szálltak. A hatalmas régészeti parkban sétálva felfedezhetjük a raktárakat (horrea), a kereskedelmi társaságok irodáit (a Corporazioni téren), és a többszintes bérházakat (insulae), ahol a dokkmunkások és kereskedők éltek. A színház, a fürdők és a pékségek mind a nyüzsgő városi életről tanúskodnak. Ostiát a kikötő eliszaposodása miatt hagyták el lassan az évszázadok során. Történelem K6 — Kereskedelem az ókorban.",
      "ro": "",
      "de": "Ostia Antica, der antike Hafen Roms, bietet faszinierende Einblicke in das Handelsleben des Römischen Reiches. An der Mündung des Tiber gelegen, war die Stadt das Tor zum Imperium, wo Getreide, Wein und exotische Waren umgeschlagen wurden. Im riesigen Archäologiepark kann man Lagerhäuser (Horrea), Büros von Handelsgilden und mehrstöckige Mietshäuser (Insulae) entdecken. Das Theater, die Thermen und die Bäckereien zeugen vom geschäftigen Stadtleben. Im Gegensatz zu Pompeji wurde Ostia aufgrund der Verlandung des Hafens über Jahrhunderte hinweg langsam verlassen. Geschichte K6 — Handel in der Antike."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A Corporazioni terén található mozaikok a különböző kereskedelmi céheket és árucikkeket hirdetik.",
        "Az 'insulae' nevű bérházak a római városi lakhatás korai és jól megőrzött példái.",
        "A Thermopolium egy ókori gyorsétterem, ahol a pultban lévő edényekben tárolták a meleg ételt.",
        "A városnak több fürdője is volt, köztük a Neptunus fürdő, amelynek mozaikjai a tenger istenét ábrázolják.",
        "Ostia saját tűzoltósággal (vigiles) rendelkezett a gyakori tüzek miatt.",
        "A Capitolium a város fő temploma volt, amelyet Jupiter, Juno és Minerva tiszteletére emeltek.",
        "A feltárt nekropoliszok a római temetkezési szokások sokféleségét mutatják be."
      ],
      "ro": [],
      "de": [
        "Die Mosaike auf dem Platz der Korporationen werben für verschiedene Gilden und Waren.",
        "Die 'Insulae' sind frühe Beispiele für städtischen Wohnungsbau in der Antike.",
        "Ein Thermopolium war eine antike Garküche, in der warme Speisen verkauft wurden.",
        "Die Stadt besaß mehrere Thermen, darunter die Neptun-Thermen mit Meeresmosaiken.",
        "Ostia hatte aufgrund der Brandgefahr in den Lagern eine eigene Feuerwehreinheit (Vigiles).",
        "Das Capitolium war der Haupttempel der Stadt, gewidmet Jupiter, Juno und Minerva.",
        "Aufgrund der Verlandung liegt die Ruine heute etwa drei Kilometer vom Meer entfernt."
      ]
    }
  },
  {
    "id": "it-san-gimignano",
    "descriptionAdvanced": {
      "en": "",
      "hu": "San Gimignano, a 'középkor Manhattan-je', a toszkán dombok között emelkedik ki egyedülálló toronysziluettjével. A középkorban a gazdag patrícius családok egymással versengve építették a lakótornyokat, hogy demonstrálják hatalmukat és gazdagságukat. Fénykorában 72 torony meredezett az ég felé, mára 14 maradt fenn. A város a Via Francigena, egy fontos zarándokút mentén feküdt, ami hozzájárult gazdasági fellendüléséhez. A ciszterna tér (Piazza della Cisterna) és a Dóm tér (Piazza del Duomo) a középkori városi élet központjai voltak. San Gimignano ma egy tökéletesen megőrzött időkapszula. Történelem K6 — Középkori városok.",
      "ro": "",
      "de": "San Gimignano, das 'Manhattan des Mittelalters', ragt mit seiner einzigartigen Turmsilhouette aus den toskanischen Hügeln heraus. Im Mittelalter bauten reiche Patrizierfamilien Geschlechtertürme, um Macht und Wohlstand zu demonstrieren. In seiner Blütezeit gab es 72 Türme, von denen heute noch 14 erhalten sind. Die Stadt lag an der Via Francigena, einem wichtigen Pilgerweg, was zu ihrem wirtschaftlichen Aufstieg beitrug. Der Piazza della Cisterna und der Piazza del Duomo waren die Zentren des städtischen Lebens. San Gimignano ist heute eine perfekt erhaltene Zeitkapsel. Geschichte K6 — Mittelalterliche Städte."
    },
    "factsAdvanced": {
      "en": [],
      "hu": [
        "A legmagasabb torony, a Torre Grossa, 54 méter magas és látogatható.",
        "A város a Vernaccia di San Gimignano nevű, száraz fehérboráról híres, amely az első DOCG minősítésű borok egyike volt Olaszországban.",
        "A Fekete Halál (pestisjárvány) 1348-ban megtizedelte a lakosságot, ami a város hanyatlásához vezetett.",
        "A Dóm freskói bibliai jeleneteket ábrázolnak, és a középkori 'képregényként' szolgáltak az írástudatlan hívek számára.",
        "A város falai a 13. században épültek és szinte teljes egészében fennmaradtak.",
        "A sáfránytermesztés fontos bevételi forrás volt a középkori város számára."
      ],
      "ro": [],
      "de": [
        "Der höchste Turm, der Torre Grossa, ist 54 Meter hoch und begehbar.",
        "Die Stadt ist berühmt für den Weißwein Vernaccia di San Gimignano, den ersten DOCG-Wein Italiens.",
        "Der Schwarze Tod (Pest) von 1348 dezimierte die Bevölkerung und leitete den Niedergang ein.",
        "Die Fresken im Dom dienten als 'biblische Comics' für die analphabetische Bevölkerung.",
        "Die Stadtmauern stammen aus dem 13. Jahrhundert und sind fast vollständig erhalten.",
        "Der Anbau von Safran war eine wichtige Einnahmequelle für die mittelalterliche Stadt.",
        "San Gimignano wurde 1990 zum UNESCO-Weltkulturerbe erklärt."
      ]
    }
  }
]

with open('italy_seo.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
