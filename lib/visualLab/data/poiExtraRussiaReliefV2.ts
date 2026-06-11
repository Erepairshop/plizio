// @ts-nocheck
import { POI } from './poi';
export const russiaReliefV2: POI[] = [

  {
    id: "russia-verkhoyansk-range-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Werchojansker Gebirge", hu: "Verhojanszki-hegylánc", ro: "Munții Verhoiansk", en: "Verkhoyansk Range"},
    image: "/poi-images/russia-verkhoyansk-range-relief-v2.webp",
    coords: [129.0, 67.0],
    coords: [129.0, 67.0],
    description: {
      de: "Dieses Gebirge in Ostsibirien erstreckt sich über 1000 Kilometer in einem Bogen. Es ist bekannt für seine extrem niedrigen Temperaturen im Winter.",
      hu: "Ez a kelet-szibériai hegység mintegy 1000 kilométer hosszan nyúlik el ív alakban. Rendkívül alacsony téli hőmérsékleteiről ismert.",
      ro: "Acești munți din estul Siberiei se întind sub forma unui arc pe o distanță de 1000 km. Sunt renumiți pentru temperaturile extrem de scăzute iarna.",
      en: "This mountain range in eastern Siberia stretches for about 1000 kilometers in an arc. It is famous for its extremely low winter temperatures.",
      es: "Esta cordillera en Siberia oriental se extiende por más de 1000 kilómetros en forma de arco. Es conocida por sus temperaturas extremadamente bajas en invierno.",
      pt: "Esta cordilheira na Sibéria Oriental estende-se por mais de 1000 quilómetros em arco. É conhecida pelas suas temperaturas extremamente baixas no inverno.",
      fr: "Cette chaîne de montagnes de Sibérie orientale s'étend sur plus de 1000 kilomètres en arc de cercle. Elle est réputée pour ses températures hivernales extrêmement basses.",
    },
    facts: {
      de: ["Länge von etwa 1100 km", "Höchste Erhebung ca. 2409 m", "Kältepol der bewohnten Welt", "Reich an Kohle und Edelmetallen"],
      hu: ["Kb. 1100 km hosszú", "Legmagasabb pontja kb. 2409 m", "A lakott világ egyik leghidegebb pontja", "Szénben és nemesfémekben gazdag"],
      ro: ["Lungime de circa 1100 km", "Altitudinea maximă de 2409 m", "Polul frigului în lumea locuită", "Bogați în cărbune și metale prețioase"],
      en: ["Length of about 1100 km", "Highest point is 2409 m", "Pole of Cold for the inhabited world", "Rich in coal and precious metals"],
      es: ["Longitud de unos 1100 km", "Elevación máxima de aprox. 2409 m", "Polo del frío del mundo habitado", "Rica en carbón y metales preciosos"],
      pt: ["Comprimento de cerca de 1100 km", "Elevação máxima de aprox. 2409 m", "Polo de frio do mundo habitado", "Rica em carvão e metais preciosos"],
      fr: ["Longueur d'environ 1100 km", "Point culminant à environ 2409 m", "Pôle de froid du monde habité", "Riche en charbon et métaux précieux"],
    },
imageHint: "Snowy Verkhoyansk Range peaks under Arctic light",
    descriptionAdvanced: {
      de: "Das Werchojansker Gebirge, das sich majestätisch in einem weiten Bogen durch Ostsibirien zieht, fungiert als gewaltige klimatische Barriere. In den rauen Wintermonaten sammeln sich in seinen tiefen, schattigen Tälern eisige Luftmassen, die die Region zu einem der extremsten Kältepole der nördlichen Hemisphäre machen. Die isolierte, unberührte Gebirgslandschaft ist durch tiefe, von Permafrost und kryogenen Prozessen geformte Schluchten gekennzeichnet. Nur spärliche Tundravegetation überlebt die langen, dunklen Winter, während sich im kurzen Sommer eine widerstandsfähige, farbenfrohe Flora an den steinigen Hängen festklammert. Das Gebiet ist reich an Steinkohle, Gold und seltenen Mineralien, bleibt jedoch aufgrund der unwirtlichen Bedingungen und fehlenden Infrastruktur weitgehend unberührt und schwer zugänglich.",
      hu: "A Verhojanszki-hegylánc hatalmas, ív alakú vonulata Kelet-Szibéria egyik legmarkánsabb természetes határa, amely jelentős éghajlatválasztóként is szolgál. Zord, mély völgyeiben a téli hónapokban a hideg levegő megreked, így a régió az északi félteke egyik legismertebb hidegpólusává válik, ahol a hőmérséklet extrém mélyre süllyed. Ezt az érintetlen és rendkívül elszigetelt vidéket a tartósan fagyott altalaj és az állandó fagy okozta felszínalakító folyamatok, a meredek szakadékok és kőtengerek jellemzik. A zord körülmények ellenére a terület geológiailag kiemelkedő jelentőségű, hiszen kőszénben, ezüstben és egyéb nemesfémekben rendkívül gazdag. A zord éghajlat és az infrastruktúra hiánya miatt azonban jórészt máig megőrizte vad, érintetlen arcát.",
      ro: "Munții Verhoiansk, care se descriu într-un arc vast prin estul Siberiei, acționează ca o barieră climatică formidabilă a Asiei de Nord. În lunile aspre de iarnă, masele de aer arctic se acumulează în văile sale adânci și umbrite, transformând regiunea într-unul dintre cei mai extremi poli ai frigului din emisfera nordică. Peisajul montan, în mare parte neexplorat și izolat, este dominat de chei adânci sculptate de procesele periglaciare și de un strat gros de permafrost. Vegetația de tundră este rară, reușind să supraviețuiască doar în scurta perioadă de vară. Deși subsolul ascunde rezerve bogate de cărbune, argint și alte metale prețioase, accesul dificil și condițiile meteorologice extreme mențin regiunea sălbatică și greu accesibilă.",
      en: "The Verkhoyansk Range, sweeping in a majestic arc across eastern Siberia, serves as a formidable geographical and climatic barrier. During the prolonged and brutal winter months, dense, frigid air masses settle into its deep, shadowed valleys, cementing the region's reputation as one of the Northern Hemisphere's most extreme Poles of Cold. This profoundly isolated and rugged landscape is heavily scarred by deep permafrost and cryogenic weathering, resulting in steep gorges and extensive boulder fields. While the harsh climate permits only a resilient tundra vegetation to thrive during the brief summer, the mountains are geologically significant, harboring vast reserves of coal, silver, and other precious minerals. Despite these riches, the severe environmental conditions keep the area pristine and largely inaccessible.",
      es: "Los montes Verjoyansk, que se extienden majestuosamente en un amplio arco a través de Siberia oriental, funcionan como una formidable barrera climática. Durante los crudos meses de invierno, masas de aire gélido se acumulan en sus valles profundos y sombríos, convirtiendo a la región en uno de los polos de frío más extremos del hemisferio norte. El paisaje montañoso, aislado y virgen, se caracteriza por profundos desfiladeros formados por el permafrost y procesos criogénicos. Solo la escasa vegetación de la tundra sobrevive a los largos y oscuros inviernos, mientras que en el corto verano, una flora resistente y colorida se aferra a las laderas rocosas. La zona es rica en carbón, oro y minerales raros, pero permanece en gran medida intacta y de difícil acceso debido a las condiciones inhóspitas y la falta de infraestructura.",
      pt: "As montanhas Verkhoyansk, que se estendem majestosamente num amplo arco pela Sibéria Oriental, funcionam como uma enorme barreira climática. Nos rigorosos meses de inverno, massas de ar gelado acumulam-se nos seus vales profundos e sombrios, tornando a região um dos polos de frio mais extremos do hemisfério norte. A paisagem montanhosa isolada e intocada caracteriza-se por desfiladeiros profundos moldados pelo permafrost e processos criogénicos. Apenas uma vegetação esparsa de tundra sobrevive aos invernos longos e escuros, enquanto no curto verão uma flora resistente e colorida agarra-se às encostas rochosas. A área é rica em carvão, ouro e minerais raros, mas permanece em grande parte intocada e de difícil acesso devido às condições inóspitas e à falta de infraestrutura.",
      fr: "Les monts Verkhoïansk, qui s'étirent majestueusement en un vaste arc à travers la Sibérie orientale, font office de formidable barrière climatique. Durant les rudes mois d'hiver, des masses d'air glacial s'accumulent dans leurs vallées profondes et sombres, faisant de la région l'un des pôles de froid les plus extrêmes de l'hémisphère nord. Le paysage montagneux, isolé et sauvage, est marqué par des gorges profondes façonnées par le pergélisol et les processus cryogéniques. Seule une maigre végétation de toundra survit aux hivers longs et sombres, tandis qu'en été, une flore résiliente et colorée s'accroche aux versants pierreux. La région est riche en charbon, en or et en minéraux rares, mais reste largement préservée et difficile d'accès en raison des conditions hostiles et de l'absence d'infrastructures.",
    },
    factsAdvanced: {
      de: ["A hegylánc hossza eléri az 1100 kilométert", "A területen található Földünk északi féltekéjének hidegpólusa", "A legmagasabb pontja hozzávetőlegesen 2409 méteres", "Felszínét szinte teljes egészében folyamatos permafrost uralja", "Gazdag szén-, ezüst- és cinkleőhelyek rejtőznek a mélyben", "A hegység a kréta és jura időszakok során gyűrődött fel", "Rendkívül gyér népességgel és szinte hiányzó infrastruktúrával rendelkezik", "Jelentős vízválasztót képez a Léna és az Aldan folyók medencéi között"],
      hu: [],
      ro: [],
      en: [],
      es: ["La longitud de la cordillera alcanza los 1.100 kilómetros.", "En esta zona se encuentra el polo del frío del hemisferio norte de la Tierra.", "Su punto más alto tiene aproximadamente 2.409 metros.", "Su superficie está dominada casi por completo por un permafrost continuo.", "En las profundidades se esconden ricos yacimientos de carbón, plata y zinc.", "Las montañas se formaron por plegamiento durante los periodos Cretácico y Jurásico.", "Tiene una población extremadamente escasa y casi carece de infraestructuras.", "Constituye una importante divisoria de aguas entre las cuencas de los ríos Lena y Aldán."],
      pt: ["O comprimento da cordilheira atinge os 1.100 quilómetros.", "Nesta área encontra-se o polo de frio do hemisfério norte da Terra.", "O seu ponto mais alto tem aproximadamente 2.409 metros.", "A superfície é dominada quase inteiramente por permafrost contínuo.", "Depósitos ricos de carvão, prata e zinco escondem-se nas profundezas.", "As montanhas formaram-se por dobramento durante os períodos Cretáceo e Jurássico.", "Tem uma população extremamente escassa e quase total ausência de infraestruturas.", "Constitui um importante divisor de águas entre as bacias dos rios Lena e Aldan."],
      fr: ["La longueur de la chaîne atteint 1 100 kilomètres.", "La région abrite le pôle de froid de l'hémisphère nord de la Terre.", "Son point culminant s'élève à environ 2 409 mètres.", "Sa surface est presque entièrement dominée par un pergélisol continu.", "De riches gisements de charbon, d'argent et de zinc se cachent dans ses profondeurs.", "Les montagnes se sont formées par plissement au cours du Crétacé et du Jurassique.", "La population y est extrêmement clairsemée et les infrastructures quasi inexistantes.", "Elle constitue une ligne de partage des eaux majeure entre les bassins de la Léna et de l'Aldan."],
    },
    image: "/poi-images/russia-verkhoyansk-range-relief-v2.webp",
},  {
    id: "russia-chersky-range-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Tschersky-Gebirge", hu: "Cserszkij-hegylánc", ro: "Munții Cerski", en: "Chersky Range"},
    image: "/poi-images/russia-chersky-range-relief-v2.webp",
    coords: [146.0, 65.0],
    coords: [146.0, 65.0],
    description: {
      de: "Das Tschersky-Gebirge liegt im Nordosten Sibiriens und wurde erst im 20. Jahrhundert kartografisch erfasst. Es ist eine wilde, zerklüftete Hochgebirgslandschaft.",
      hu: "A Cserszkij-hegylánc Északkelet-Szibériában található, és csak a 20. században térképezték fel. Vad, szaggatott magashegyi táj jellemzi.",
      ro: "Munții Cerski sunt situați în nord-estul Siberiei și au fost cartografiați abia în secolul XX. Este un peisaj montan sălbatic și accidentat.",
      en: "The Chersky Range is located in northeastern Siberia and was mapped as late as the 20th century. It is a wild, rugged high-altitude landscape.",
      es: "La cordillera Cherski se encuentra en el noreste de Siberia y solo se cartografió en el siglo XX. Es un paisaje de alta montaña salvaje y accidentado.",
      pt: "A cordilheira de Chersky situa-se no nordeste da Sibéria e só foi cartografada no século XX. É uma paisagem de alta montanha selvagem e acidentada.",
      fr: "Les monts Chersky sont situés au nord-est de la Sibérie et n'ont été cartographiés qu'au XXe siècle. C'est un paysage de haute montagne sauvage et découpé.",
    },
    facts: {
      de: ["Höchster Berg ist die Pobeda (3003 m)", "Entdeckt durch Iwan Tschersky im 19. Jahrhundert", "Enthält zahlreiche Gletscher", "Erstreckt sich über 1500 km"],
      hu: ["Legmagasabb csúcsa a Pobeda (3003 m)", "Ivan Cserszkij után nevezték el", "Számos gleccser található itt", "Hossza meghaladja az 1500 km-t"],
      ro: ["Cel mai înalt vârf este Pobeda (3003 m)", "Numit după exploratorul Ivan Cerski", "Conține numeroși ghețari", "Se întinde pe o distanță de 1500 km"],
      en: ["Highest peak is Mount Pobeda (3003 m)", "Named after explorer Ivan Chersky", "Contains numerous glaciers", "Stretches over 1500 km"],
      es: ["La montaña más alta es el Pobeda (3003 m)", "Descubierta por Iván Cherski en el siglo XIX", "Contiene numerosos glaciares", "Se extiende por más de 1500 km"],
      pt: ["A montanha mais alta é o Pobeda (3003 m)", "Descoberta por Ivan Chersky no século XIX", "Contém numerosos glaciares", "Estende-se por mais de 1500 km"],
      fr: ["Le plus haut sommet est le Pobeda (3003 m)", "Découverts par Ivan Chersky au XIXe siècle", "Contiennent de nombreux glaciers", "S'étendent sur plus de 1500 km"],
    },
imageHint: "Rugged granite peaks of the Chersky Range",
    descriptionAdvanced: {
      de: "Das Tschersky-Gebirge im Nordosten Sibiriens gehört zu den am spätesten entdeckten und kartografierten Hochgebirgen der Erde. Erst in den 1920er Jahren wurde die wahre Ausdehnung dieses massiven, von tiefen Tälern zerschnittenen Systems vollständig erkannt. Die raue, zerklüftete Landschaft wird von steilen Granitgipfeln und zahlreichen Gletschern dominiert, die sich in den hochgelegenen Karen gebildet haben. Aufgrund seiner Nähe zum Polarkreis herrschen hier extrem kontinentale Klimabedingungen mit bitterkalten, langen Wintern und sehr kurzen, kühlen Sommern. Die abgelegene Region, die nach dem polnisch-russischen Forscher Iwan Tschersky benannt wurde, beheimatet eine spärliche, aber hochspezialisierte arktische Flora und Fauna und bleibt ein Paradies für wissenschaftliche Expeditionen und extrem abenteuerlustige Bergsteiger.",
      hu: "Az Északkelet-Szibériában magasodó Cserszkij-hegylánc a bolygó egyik legkésőbb felfedezett és feltérképezett jelentős magashegysége, amelynek valódi kiterjedését csupán az 1920-as években tárták fel pontosan. A vad, szakadékokkal és mély völgyekkel szabdalt tájat meredek gránitcsúcsok és a magaslati cirkuszvölgyekben meghúzódó gleccserek uralják. A sarkkör közelsége miatt a régió éghajlata rendkívül szélsőséges: a telek hosszúak és dermesztően hidegek, míg a nyarak csupán egy rövid, hűvös átmenetet jelentenek. Az Ivan Cserszkij lengyel-orosz kutatóról elnevezett, szinte teljesen lakatlan terület a speciálisan alkalmazkodott arktikus növény- és állatvilág menedéke, valamint a tudományos expedíciók és extrém hegymászók egyik utolsó nagy kihívása.",
      ro: "Lanțul montan Cerski din nord-estul Siberiei este unul dintre ultimele mari sisteme montane de pe Pământ care a fost descoperit și cartografiat complet, amploarea sa reală fiind recunoscută abia în anii 1920. Acest peisaj sălbatic și puternic fragmentat este dominat de vârfuri ascuțite de granit și de numeroși ghețari care s-au format în circurile glaciare de la mare altitudine. Datorită proximității sale față de Cercul Polar, regiunea cunoaște un climat continental extrem, caracterizat prin ierni neînduplecat de reci și veri foarte scurte. Numit în onoarea exploratorului polonez-rus Ivan Cerski, acest teritoriu izolat adăpostește o floră și faună arctică extrem de specializată, rămânând o destinație inaccesibilă pentru toți, cu excepția expedițiilor științifice curajoase.",
      en: "The Chersky Range in northeastern Siberia is one of the last major mountain systems on Earth to be fully discovered and mapped, with its true immense scale only realized in the 1920s. This wild, profoundly rugged landscape is dominated by sharp granite peaks, plunging gorges, and numerous glaciers that cling to high-altitude cirques. Situated close to the Arctic Circle, the range endures an intensely extreme continental climate, featuring bitterly cold, prolonged winters and fleeting, cool summers. Named in honor of the Polish-Russian explorer Ivan Chersky, this incredibly remote and isolated region serves as a sanctuary for highly specialized arctic flora and fauna, remaining an ultimate frontier for dedicated scientific expeditions and the most intrepid mountaineers.",
      es: "La cordillera Cherski, en el noreste de Siberia, es una de las últimas altas montañas de la Tierra en ser descubierta y cartografiada. Solo en la década de 1920 se reconoció plenamente la verdadera extensión de este sistema masivo, cortado por valles profundos. El paisaje rudo y accidentado está dominado por picos de granito escarpados y numerosos glaciares que se han formado en los circos de gran altitud. Debido a su proximidad al Círculo Polar Ártico, aquí imperan condiciones climáticas extremadamente continentales con inviernos largos y gélidos y veranos muy cortos y frescos. La remota región, nombrada en honor al explorador polaco-ruso Iván Cherski, alberga una flora y fauna ártica escasa pero altamente especializada y sigue siendo un paraíso para expediciones científicas y montañeros aventureros.",
      pt: "A cordilheira de Chersky, no nordeste da Sibéria, é uma das cordilheiras de alta montanha descobertas e cartografadas mais tarde na Terra. A verdadeira extensão deste sistema maciço, cortado por vales profundos, só foi totalmente reconhecida na década de 1920. A paisagem áspera e acidentada é dominada por picos de granito íngremes e numerosos glaciares que se formaram nos circos glaciares de grande altitude. Devido à sua proximidade com o Círculo Polar Ártico, prevalecem aqui condições climáticas extremamente continentais, com invernos longos e gélidos e verões muito curtos e frescos. A região remota, que recebeu o nome do explorador polaco-russo Ivan Chersky, abriga uma flora e fauna árticas escassas mas altamente especializadas e continua a ser um paraíso para expedições científicas e alpinistas extremamente aventureiros.",
      fr: "Les monts Chersky, au nord-est de la Sibérie, comptent parmi les hautes montagnes découvertes et cartographiées le plus tardivement sur Terre. Ce n'est que dans les années 1920 que la véritable étendue de ce système massif, entaillé par de profondes vallées, a été pleinement reconnue. Le paysage rude et découpé est dominé par des pics granitiques escarpés et de nombreux glaciers formés dans les cirques d'altitude. En raison de la proximité du cercle polaire, les conditions climatiques y sont extrêmement continentales, avec des hivers longs et glaciaux et des étés très courts et frais. Cette région reculée, nommée d'après l'explorador polono-russe Ivan Chersky, abrite une flore et une faune arctiques rares mais hautement spécialisées et reste un paradis pour les expéditions scientifiques et les alpinistes de l'extrême.",
    },
    factsAdvanced: {
      de: ["A hegységrendszer hossza mintegy 1500 kilométer", "Legmagasabb pontja a 3003 méter magas Pobeda-csúcs", "Csak a 20. század első felében térképezték fel teljes egészében", "Több mint 300 kisebb arktikus gleccser található a területén", "Nevét Ivan Cserszkij geológusról és felfedezőről kapta", "A Kolyma és az Indigirka folyók vízválasztóját alkotja", "Geológiailag fiatal, aktív tektonikus zónában helyezkedik el", "Jelentős arany- és ónkészleteket rejt a mélyben"],
      hu: [],
      ro: [],
      en: [],
      es: ["La longitud del sistema montañoso es de unos 1500 kilómetros", "Su punto más alto es el pico Pobeda, con 3003 metros", "Solo fue cartografiado en su totalidad en la primera mitad del siglo XX", "Hay más de 300 pequeños glaciares árticos en su territorio", "Recibe su nombre del geólogo y explorador Iván Cherski", "Forma la divisoria de aguas de los ríos Kolymá e Indiguirka", "Geológicamente es joven, situado en una zona tectónica activa", "Esconde importantes reservas de oro y estaño en las profundidades"],
      pt: ["O comprimento do sistema montanhoso é de cerca de 1500 quilómetros", "O ponto mais alto é o pico Pobeda, com 3003 metros", "Só foi totalmente mapeado na primeira metade do século XX", "Existem mais de 300 pequenos glaciares árticos no seu território", "Recebeu o nome do geólogo e explorador Ivan Chersky", "Forma a bacia hidrográfica dos rios Kolyma e Indigirka", "Geologicamente jovem, situa-se numa zona tectónica ativa", "Esconde jazidas significativas de ouro e estanho nas profundezas"],
      fr: ["La longueur du système montagneux est d'environ 1500 kilomètres", "Le point culminant est le mont Pobeda à 3003 mètres", "Entièrement cartographié seulement dans la première moitié du XXe siècle", "Plus de 300 petits glaciers arctiques se trouvent sur son territoire", "Nommé d'après le géologue et explorateur Ivan Chersky", "Forme la ligne de partage des eaux entre les fleuves Kolyma et Indiguirka", "Jeune sur le plan géologique, situé dans une zone tectonique active", "Cache d'importantes réserves d'or et d'étain dans ses profondeurs"],
    },
    image: "/poi-images/russia-chersky-range-relief-v2.webp",
},  {
    id: "russia-west-siberian-plain-relief-v2",
    parent: "RU",
    type: "landmark",
    name: { de: "Westsibirisches Tiefland", hu: "Nyugat-szibériai-alföld", ro: "Câmpia Siberiei de Vest", en: "West Siberian Plain"},
    image: "/poi-images/russia-west-siberian-plain-relief-v2.webp",
    coords: [75.0, 62.0],
    coords: [75.0, 62.0],
    description: {
      de: "Das Westsibirische Tiefland ist eine der größten zusammenhängenden Ebenen der Welt. Große Teile sind von Sümpfen, wie den Wassjugan-Sümpfen, bedeckt.",
      hu: "A Nyugat-szibériai-alföld a világ egyik legnagyobb összefüggő síksága. Jelentős részét mocsarak borítják, mint például a Vaszjugan-mocsár.",
      ro: "Câmpia Siberiei de Vest este una dintre cele mai mari zone de câmpie din lume. Porțiuni mari sunt acoperite de mlaștini, precum Mlaștinile Vasiugan.",
      en: "The West Siberian Plain is one of the world's largest continuous areas of flatland. Large parts are covered by swamps, such as the Vasyugan Swamp.",
      es: "La llanura de Siberia Occidental es una de las mayores llanuras continuas del mundo. Gran parte está cubierta por pantanos, como los pantanos de Vasyugán.",
      pt: "A planície da Sibéria Ocidental é uma das maiores planícies contínuas do mundo. Grande parte está coberta por pântanos, como os pântanos de Vasyugan.",
      fr: "La plaine de Sibérie occidentale est l'une des plus grandes plaines continues au monde. De vastes zones sont couvertes de marécages, comme les marais de Vassiougan.",
    },
    facts: {
      de: ["Fläche von ca. 2,6 Millionen km²", "Enthält riesige Öl- und Erdgasvorkommen", "Durchflossen von Ob und Irtysch", "Sehr geringes Gefälle"],
      hu: ["Területe kb. 2,6 millió km²", "Hatalmas kőolaj- és földgázkészleteket rejt", "Az Ob és az Irtis folyók szelik át", "Nagyon csekély a szintkülönbség"],
      ro: ["Suprafață de circa 2,6 milioane km²", "Deține rezerve uriașe de petrol și gaze", "Traversată de fluviile Obi și Irtîș", "Pantă extrem de lină"],
      en: ["Area of about 2.6 million square km", "Contains massive oil and gas reserves", "Drained by the Ob and Irtysh rivers", "Extremely flat topography"],
      es: ["Superficie de aprox. 2,6 millones de km²", "Contiene enormes yacimientos de petróleo y gas natural", "Atravesada por el Ob y el Irtysh", "Pendiente muy baja"],
      pt: ["Área de cerca de 2,6 milhões de km²", "Contém enormes reservas de petróleo e gás natural", "Atravessada pelo Ob e Irtysh", "Inclinação muito baixa"],
      fr: ["Superficie d'environ 2,6 millions de km²", "Contient d'immenses gisements de pétrole et de gaz", "Traversée par l'Ob et l'Irtych", "Pente très faible"],
    },
imageHint: "Vast marshy plain with meandering rivers in West Siberia",
    descriptionAdvanced: {
      de: "Das Westsibirische Tiefland ist eine der gigantischsten und flachsten Ebenen der Erde und erstreckt sich als schier endloses Becken zwischen dem Uralgebirge im Westen und dem Jenissei im Osten. Diese riesige, wasserreiche Region ist durch ein minimales Gefälle gekennzeichnet, was zur Bildung ausgedehnter, undurchdringlicher Sumpflandschaften wie den berühmten Wassjugan-Sümpfen geführt hat. Die träge fließenden Ströme Ob und Irtysch durchziehen die Ebene in weiten Mäandern und sorgen während der Schneeschmelze für gewaltige Überschwemmungen. Unter der sumpfigen und von Permafrost geprägten Oberfläche verbirgt das Becken einige der weltweit größten Erdöl- und Erdgasreserven, deren Erschließung die russische Wirtschaft maßgeblich prägt, aber auch große ökologische Herausforderungen für das empfindliche Ökosystem der Taiga und Tundra mit sich bringt.",
      hu: "A Nyugat-szibériai-alföld a bolygó egyik leghatalmasabb és leglaposabb síksága, amely az Urál-hegység és a Jenyiszej folyó között terül el egy szinte végtelen, alig lejtő medencében. A szintkülönbségek hiánya miatt a felszíni vizek nehezen vezetődnek el, így a terület jelentős részét áthatolhatatlan mocsarak és lápvidékek – köztük a híres Vaszjugan-mocsár – borítják. Az Ob és az Irtis lassan hömpölygő, hatalmas kanyarulatokat leíró vizei a tavaszi hóolvadáskor rendszeresen óriási területeket árasztanak el. A lápos, helyenként tartósan fagyott talaj alatt a világ legnagyobb kőolaj- és földgázmezői húzódnak meg, amelyek kitermelése Oroszország gazdaságának alapköve, ugyanakkor folyamatos ökológiai fenyegetést jelent a tajga és a tundra törékeny élővilágára.",
      ro: "Câmpia Siberiei de Vest este una dintre cele mai vaste și mai plate întinderi de uscat de pe planetă, formând un bazin uriaș între Munții Ural la vest și fluviul Enisei la est. Datorită pantei sale extrem de reduse, scurgerea apelor este foarte lentă, ceea ce a dus la formarea unor mlaștini impenetrabile și extinse, cum ar fi faimoasele Mlaștini Vasiugan. Apele domoale ale fluviilor Obi și Irtîș meandrează leneș prin această câmpie, provocând inundații masive în timpul topirii zăpezilor de primăvară. Sub suprafața mlăștinoasă și adesea marcată de permafrost, bazinul ascunde unele dintre cele mai mari rezerve de petrol și gaze naturale din lume, a căror exploatare este vitală pentru economia rusă, dar prezintă riscuri ecologice majore pentru ecosistemele fragile de taiga și tundră.",
      en: "The West Siberian Plain stands as one of the world's most massive and extraordinarily flat expanses of land, stretching as a seemingly endless basin between the Ural Mountains and the Yenisey River. Its exceptionally low gradient impedes drainage, resulting in a landscape dominated by vast, impenetrable wetlands and peat bogs, most notably the colossal Vasyugan Swamp. The slow-moving Ob and Irtysh rivers meander heavily across the plain, frequently causing widespread, massive floods during the spring snowmelt. Beneath this boggy, often permafrost-bound surface lies a treasure trove of global significance: some of the Earth's largest oil and natural gas reserves. While their extraction is a cornerstone of the Russian economy, it continuously poses immense ecological challenges to the delicate taiga and tundra environments.",
      es: "La llanura de Siberia Occidental es una de las planicies más gigantescas y llanas de la Tierra, extendiéndose como una cuenca casi infinita entre los montes Urales al oeste y el río Yeniséi al este. Esta enorme región, rica en agua, se caracteriza por una pendiente mínima, lo que ha provocado la formación de extensos e impenetrables paisajes pantanosos como los famosos pantanos de Vasyugán. Los ríos Ob e Irtysh, de flujo lento, atraviesan la llanura en amplios meandros y provocan enormes inundaciones durante el deshielo. Bajo la superficie pantanosa y marcada por el permafrost, la cuenca esconde algunas de las reservas de petróleo y gas natural más grandes del mundo, cuya explotación marca decisivamente la economía rusa, pero también conlleva grandes desafíos ecológicos para el sensible ecosistema de la taiga y la tundra.",
      pt: "A planície da Sibéria Ocidental é uma das planícies mais gigantescas e planas da Terra, estendendo-se como uma bacia quase infinita entre os Montes Urais a oeste e o rio Yenisei a leste. Esta enorme região, rica em água, caracteriza-se por uma inclinação mínima, o que levou à formação de extensas e impenetráveis paisagens pantanosas, como os famosos pântanos de Vasyugan. Os rios Ob e Irtysh, de fluxo lento, atravessam a planície em amplos meandros e causam enormes inundações durante o degelo. Sob a superfície pantanosa e marcada pelo permafrost, a bacia esconde algumas das maiores reservas de petróleo e gás natural do mundo, cuja exploração molda significativamente a economia russa, mas também traz grandes desafios ecológicos para o sensível ecossistema da taiga e tundra.",
      fr: "La plaine de Sibérie occidentale est l'une des plus vastes et des plus plates plaines de la Terre, s'étirant comme un bassin presque sans fin entre l'Oural à l'ouest et l'Iénisseï à l'est. Cette immense région aquifère se caractérise par une pente minimale, ce qui a favorisé la formation de marécages impénétrables, tels que les célèbres marais de Vassiougan. Les fleuves Ob et Irtych la traversent en de larges méandres, provoquant des inondations massives lors de la fonte des neiges. Sous la surface marécageuse marquée par le pergélisol, le bassin recèle certaines des plus grandes réserves de pétrole et de gaz naturel au monde, dont l'exploitation est vitale pour l'économie russe mais pose des défis écologiques majeurs pour les écosystèmes fragiles de la taïga et de la toundra.",
    },
    factsAdvanced: {
      de: ["A síkság területe megközelíti a 2,6 millió négyzetkilométert", "A domborzat átlagos tengerszint feletti magassága alig 100-150 méter", "Itt terül el a világ legnagyobb mocsárvidéke, a Vaszjugan-mocsár", "Oroszország földgáz- és kőolajkitermelésének legfőbb központja", "Az Ob és az Irtis folyók több ezer kilométeren át szelik át", "Felszínét északon kiterjedt permafrost övezet borítja", "Növényzetét északon tundra, délebbre a tajga alkotja", "Kialakulása a mezozoikumban történt, amikor a terület tengerfenék volt"],
      hu: [],
      ro: [],
      en: [],
      es: ["La superficie de la llanura se aproxima a los 2,6 millones de kilómetros cuadrados.", "La altitud media del relieve es de apenas 100-150 metros sobre el nivel del mar.", "Aquí se encuentra la zona pantanosa más grande del mundo, los pantanos de Vasyugán.", "Es el principal centro de extracción de gas natural y petróleo de Rusia.", "Los ríos Ob e Irtysh la atraviesan a lo largo de miles de kilómetros.", "Su superficie está cubierta por una extensa zona de permafrost en el norte.", "La vegetación consiste en tundra en el norte y taiga más al sur.", "Su formación tuvo lugar en el Mesozoico, cuando la zona era el fondo del mar."],
      pt: ["A área da planície aproxima-se dos 2,6 milhões de quilómetros quadrados.", "A altitude média do relevo é de apenas 100-150 metros acima do nível do mar.", "Aqui situa-se a maior zona pantanosa do mundo, os pântanos de Vasyugan.", "É o principal centro de extração de gás natural e petróleo da Rússia.", "Os rios Ob e Irtysh atravessam-na ao longo de milhares de quilómetros.", "A sua superfície é coberta por uma extensa zona de permafrost no norte.", "A vegetação consiste em tundra no norte e taiga mais ao sul.", "A sua formação ocorreu no Mesozoico, quando a área era o fundo do mar."],
      fr: ["La superficie de la plaine avoisine les 2,6 millions de kilomètres carrés.", "L'altitude moyenne est à peine de 100 à 150 mètres au-dessus du niveau de la mer.", "Elle abrite la plus grande zone marécageuse du monde, les marais de Vassiougan.", "C'est le principal centre d'extraction de gaz naturel et de pétrole de Russie.", "Les fleuves Ob et Irtych la parcourent sur des milliers de kilomètres.", "Le nord de sa surface est couvert par une vaste zone de pergélisol.", "La végétation est composée de toundra au nord et de taïga plus au sud.", "Sa formation date du Mésozoïque, époque où la région était un fond marin."],
    },
    image: "/poi-images/russia-west-siberian-plain-relief-v2.webp",
},  {
    id: "russia-central-siberian-plateau-relief-v2",
    parent: "RU",
    type: "landmark",
    name: { de: "Mittelsibirisches Bergland", hu: "Közép-szibériai-fennsík", ro: "Podișul Siberiei Centrale", en: "Central Siberian Plateau"},
    image: "/poi-images/russia-central-siberian-plateau-relief-v2.webp",
    coords: [105.0, 64.0],
    coords: [105.0, 64.0],
    description: {
      de: "Dieses ausgedehnte Hochland liegt zwischen den Flüssen Jenissei und Lena. Es besteht aus abwechselnden Hochebenen und tief eingeschnittenen Flusstälern.",
      hu: "Ez a kiterjedt fennsík a Jenyiszej és a Léna folyók között fekszik. Váltakozó magaslatok és mélyen bevágódott folyóvölgyek jellemzik.",
      ro: "Acest podiș vast este situat între fluviile Enisei și Lena. Este compus din platouri înalte alternate cu văi fluviale adânc incizate.",
      en: "This extensive upland lies between the Yenisey and Lena rivers. It consists of alternating plateaus and deeply incised river valleys.",
      es: "Esta extensa meseta se encuentra entre los ríos Yeniséi y Lena. Consiste en una alternancia de altiplanos y valles fluviales profundamente incisos.",
      pt: "Este vasto planalto situa-se entre os rios Yenisei e Lena. Consiste em planaltos alternados e vales fluviais profundamente incisos.",
      fr: "Ce vaste haut plateau est situé entre les fleuves Iénisseï et Léna. Il se compose d'une alternance de hauts plateaux et de vallées fluviales profondément encaissées.",
    },
    facts: {
      de: ["Durchschnittliche Höhe 500-700 m", "Besteht aus vulkanischem Sibirischem Trapp", "Reich an Diamanten und Platin", "Extreme Kontinentalität des Klimas"],
      hu: ["Átlagos magassága 500-700 m", "Vulkáni eredetű szibériai trapp alkotja", "Gyémántban és platinában gazdag", "Szélsőséges kontinentális éghajlat"],
      ro: ["Înălțime medie de 500-700 m", "Format din roci vulcanice (trapul siberian)", "Bogat în diamante și platină", "Climat continental extrem"],
      en: ["Average elevation of 500-700 m", "Composed of volcanic Siberian Traps", "Rich in diamonds and platinum", "Extreme continental climate"],
      es: ["Altura media de 500-700 m", "Compuesta por Traps Siberianos volcánicos", "Rica en diamantes y platino", "Clima de continentalidad extrema"],
      pt: ["Altitude média de 500-700 m", "Composta por Traps Siberianos vulcânicos", "Rica em diamantes e platina", "Clima de extrema continentalidade"],
      fr: ["Altitude moyenne de 500 à 700 m", "Composé de traps de Sibérie volcaniques", "Riche en diamants et en platine", "Continentalité extrême du climat"],
    },
imageHint: "Elevated forest plateau with river canyon in Central Siberia",
    descriptionAdvanced: {
      de: "Das Mittelsibirische Bergland ist eine gigantische Hochfläche, die den riesigen Raum zwischen den majestätischen Strömen Jenissei und Lena einnimmt. Geologisch ist diese Region durch den sogenannten Sibirischen Trapp gekennzeichnet – die Überreste einer der gewaltigsten vulkanischen Eruptionen in der Erdgeschichte, die weite Teile der Landschaft mit mächtigen Basaltschichten überzogen hat. Die Topografie ist ein Wechselspiel aus abgeflachten, baumlosen Plateaus und tief eingeschnittenen, steilen Flussschluchten, durch die das Wasser wild strömt. Unter dem rauen Kontinentalklima mit extrem kalten Wintern und dem allgegenwärtigen Permafrostboden verbergen sich immense mineralische Reichtümer, darunter riesige Lagerstätten von Diamanten, Gold und Nickel, die das Gebiet zu einem wirtschaftlichen Schwergewicht machen.",
      hu: "A Közép-szibériai-fennsík egy hatalmas kiterjedésű, tagolt magasföld, amely a Jenyiszej és a Léna folyók közötti roppant területet uralja. Földtani szempontból a régió legmeghatározóbb formációja a szibériai trapp, amely a Föld történetének egyik legnagyobb méretű vulkáni eseménye során lerakódott, vastag bazaltrétegekből áll. A domborzatot a szélfútta, kopár platók és a beléjük mélyen bevágódó, meredek falú folyóvölgyek éles kontrasztja jellemzi. A szélsőségesen kontinentális, fagyos éghajlat és a mélyen húzódó permafrost alatt a fennsík páratlan ásványkincs-tartalékokat rejt: a világ legjelentősebb gyémánt-, arany-, nikkel- és platinalelőhelyei találhatók itt, melyek kiaknázása komoly kihívást jelent.",
      ro: "Podișul Siberiei Centrale este o întindere vastă și fragmentată, care domină teritoriul imens dintre marile fluvii Enisei și Lena. Din punct de vedere geologic, regiunea este definită de trapul siberian – o formațiune masivă rezultată dintr-una dintre cele mai cataclismice erupții vulcanice din istoria Pământului, lăsând în urmă straturi groase de bazalt. Relieful este un contrast izbitor între platouri largi, adesea lipsite de copaci, și canioane fluviale adânci, cu pereți verticali. În ciuda climatului continental extrem de aspru și a prezenței permafrostului continuu, subsolul acestui podiș ascunde bogății minerale incomensurabile, inclusiv depozite uriașe de diamante, aur, nichel și platină, atrăgând mari eforturi de exploatare în ciuda izolării.",
      en: "The Central Siberian Plateau is a colossal, heavily dissected upland that dominates the vast expanse between the mighty Yenisey and Lena rivers. Geologically, the region is defined by the Siberian Traps, a massive igneous province formed by one of the largest known volcanic events in Earth's history, which blanketed the landscape in thick layers of basalt. The topography features a dramatic interplay between broad, wind-swept flat-topped plateaus and deeply incised, precipitous river canyons. Despite the punishing extreme continental climate and continuous permafrost, the plateau is renowned for its staggering subsurface wealth, containing some of the world's most significant deposits of diamonds, gold, nickel, and platinum, making it a rugged yet vital economic frontier.",
      es: "La Meseta de Siberia Central es una superficie gigantesca que ocupa el inmenso espacio entre los majestuosos ríos Yeniséi y Lena. Geológicamente, esta región se caracteriza por los llamados Traps Siberianos, restos de una de las erupciones volcánicas más masivas de la historia de la Tierra, que cubrió grandes partes del paisaje con potentes capas de basalto. La topografía es un juego de mesetas aplanadas y sin árboles y cañones fluviales profundos y escarpados por donde el agua fluye con fuerza. Bajo el duro clima continental con inviernos extremadamente fríos y el omnipresente permafrost, se esconden inmensas riquezas minerales, incluyendo enormes depósitos de diamantes, oro y níquel, que convierten al territorio en un peso pesado económico.",
      pt: "O Planalto Central Siberiano é uma superfície gigantesca que ocupa o vasto espaço entre os majestosos rios Yenisei e Lena. Geologicamente, esta região é caracterizada pelos chamados Traps Siberianos – os restos de uma das erupções vulcânicas mais massivas da história da Terra, que cobriu grandes partes da paisagem com camadas espessas de basalto. A topografia é uma interação de planaltos achatados e sem árvores e desfiladeiros fluviais profundos e íngremes, através dos quais a água flui de forma selvagem. Sob o clima continental rigoroso, com invernos extremamente frios e o omnipresente permafrost, escondem-se imensas riquezas minerais, incluindo enormes jazidas de diamantes, ouro e níquel, que tornam a área um peso pesado económico.",
      fr: "Le plateau de Sibérie centrale est une surface gigantesque occupant l'immense espace entre les fleuves majestueux Iénisseï et Léna. Géologiquement, cette région est marquée par les « Traps de Sibérie », vestiges de l'une des éruptions volcaniques les plus massives de l'histoire de la Terre, ayant recouvert de vastes parties du paysage de puissantes couches de basalte. La topographie est une alternance de plateaux aplatis dépourvus d'arbres et de gorges fluviales profondes et escarpées où l'eau s'écoule impétueusement. Sous le rude climat continental aux hivers extrêmement froids et le pergélisol omniprésent se cachent d'immenses richesses minérales, dont de gigantesques gisements de diamants, d'or et de nickel, qui font de cette région un poids lourd économique.",
    },
    factsAdvanced: {
      de: ["A fennsík átlagos tengerszint feletti magassága 500 és 700 méter között mozog", "A terület alapját a vulkáni eredetű szibériai trapp bazalttakarója alkotja", "A Föld egyik legnagyobb, több mint 3,5 millió négyzetkilométeres magasföldje", "Itt találhatók Oroszország legfontosabb gyémánt- és platinabányái", "A szélsőséges klíma miatt a talaj szinte mindenhol állandóan fagyott", "Jelentős folyói, mint az Alsó-Tunguszka, mély kanyonokat vájtak a kőzetbe", "A legmagasabb pontja a Putorana-fennsíkon található, eléri az 1701 métert", "Rendkívül ritkán lakott, kiterjedt tajga és hegyi tundra uralja a tájat"],
      hu: [],
      ro: [],
      en: [],
      es: ["La altitud media de la meseta oscila entre 500 y 700 metros", "La base del área está formada por la capa de basalto de los traps siberianos de origen volcánico", "Es una de las tierras altas más grandes de la Tierra, con más de 3,5 millones de km²", "Aquí se encuentran las minas de diamantes y platino más importantes de Rusia", "Debido al clima extremo, el suelo está permanentemente congelado en casi todas partes", "Sus ríos importantes, como el Tunguska Inferior, han excavado profundos cañones en la roca", "El punto más alto se encuentra en la meseta de Putorana, alcanzando los 1701 metros", "Está extremadamente poco poblada, dominada por la vasta taiga y la tundra de montaña"],
      pt: ["A altitude média do planalto varia entre 500 e 700 metros", "A base da área é formada pela cobertura de basalto dos traps siberianos de origem vulcânica", "É um dos maiores planaltos do mundo, com mais de 3,5 milhões de quilómetros quadrados", "Aqui encontram-se as minas de diamantes e platina mais importantes da Rússia", "Devido ao clima extremo, o solo está quase em todo o lado permanentemente congelado", "Rios importantes, como o Tunguska Inferior, escavaram desfiladeiros profundos na rocha", "O ponto mais alto situa-se no planalto de Putorana, atingindo os 1701 metros", "Extremamente pouco povoado, dominado por vasta taiga e tundra de montanha"],
      fr: ["L'altitude moyenne du plateau varie entre 500 et 700 mètres", "Le socle est formé par la couverture basaltique des traps de Sibérie d'origine volcanique", "L'un des plus grands hauts plateaux au monde, avec plus de 3,5 millions de km²", "On y trouve les plus importantes mines de diamants et de platine de Russie", "En raison du climat extrême, le sol est gelé en permanence presque partout", "Des fleuves majeurs comme la Toungouska Inférieure y ont creusé des canyons profonds", "Le point culminant se trouve sur le plateau de Poutorana, à 1701 mètres", "Région très peu peuplée, dominée par la taïga étendue et la toundra de montagne"],
    },
    image: "/poi-images/russia-central-siberian-plateau-relief-v2.webp",
},  {
    id: "russia-valdai-hills-relief-v2",
    parent: "RU",
    type: "landmark",
    name: { de: "Waldaihöhen", hu: "Valdaj-hátság", ro: "Podișul Valdai", en: "Valdai Hills"},
    image: "/poi-images/russia-valdai-hills-relief-v2.webp",
    coords: [33.0, 57.0],
    coords: [33.0, 57.0],
    description: {
      de: "Die Waldaihöhen sind ein Hügelland im europäischen Teil Russlands. Sie bilden eine wichtige Wasserscheide, in der bedeutende Flüsse entspringen.",
      hu: "A Valdaj-hátság dombos vidék Oroszország európai részén. Fontos vízválasztó, ahol jelentős folyók erednek.",
      ro: "Podișul Valdai este o zonă deluroasă din partea europeană a Rusiei. Reprezintă un important nod hidrografic unde izvorăsc râuri mari.",
      en: "The Valdai Hills are an upland region in the European part of Russia. They form a major drainage divide where several significant rivers originate.",
      es: "Las alturas de Valdái son una zona de colinas en la parte europea de Rusia. Constituyen una importante divisoria de aguas donde nacen grandes ríos.",
      pt: "O planalto de Valdai é uma região de colinas na parte europeia da Rússia. Constitui um importante divisor de águas, onde nascem rios significativos.",
      fr: "Les collines de Valdaï sont un massif de collines situé dans la partie européenne de la Russie. Elles constituent une ligne de partage des eaux majeure où prennent source de grands fleuves.",
    },
    facts: {
      de: ["Quellgebiet der Wolga und des Dnepr", "Höchster Punkt 347 Meter", "Entstanden durch die letzte Eiszeit", "Besteht aus Moränenhügeln"],
      hu: ["A Volga és a Dnyeper forrásvidéke", "Legmagasabb pontja 347 méter", "Az utolsó jégkorszak idején alakult ki", "Morénadombok alkotják"],
      ro: ["Zona de izvor a Volgăi și Niprului", "Punctul maxim la 347 metri", "Format de ultima glaciațiune", "Compus din dealuri morenaice"],
      en: ["Source region of the Volga and Dnieper", "Highest point is 347 meters", "Formed during the last ice age", "Consists of glacial moraines"],
      es: ["Lugar de nacimiento del Volga y el Dniéper", "Punto más alto de 347 metros", "Formado por la última glaciación", "Compuesto por colinas de morrenas"],
      pt: ["Nascente do Volga e do Dnieper", "Ponto mais alto com 347 metros", "Formado pela última era glacial", "Composto por colinas de morenas"],
      fr: ["Source de la Volga et du Dniepr", "Point culminant à 347 mètres", "Formé par la dernière période glaciaire", "Constitué de collines morainiques"],
    },
imageHint: "Gently rolling green hills with lakes in Valdai region",
    descriptionAdvanced: {
      de: "Die Waldaihöhen im Nordwesten des europäischen Teils Russlands bilden eine sanft gewellte, wald- und seenreiche Moränenlandschaft, die das Erbe der letzten Eiszeit in sich trägt. Obwohl die Hügel nur eine bescheidene Höhe erreichen, haben sie eine überragende geografische und historische Bedeutung, da sie die zentrale Wasserscheide Osteuropas bilden. In ihren ausgedehnten Sumpfgebieten und klaren Seen entspringen einige der mächtigsten und historisch wichtigsten Ströme des Kontinents, darunter die Wolga, der Dnepr und die Westliche Dwina. Diese waldreiche Hochfläche mit ihren alten Handelswegen und unberührten Nationalparks ist nicht nur ein hydrologisches Herzstück, sondern auch ein Ort tiefer kultureller Bedeutung in der russischen Geschichte.",
      hu: "Az európai Oroszország északnyugati részén elterülő Valdaj-hátság egy szelíden hullámzó, erdőkkel és tiszta vizű tavakkal pettyezett morénavidék, amelyet az utolsó jégkorszak gleccserei formáltak. Noha a halmok csak szerény magasságot érnek el, a terület földrajzi és történelmi jelentősége óriási, hiszen Kelet-Európa legfontosabb vízválasztóját alkotja. Kiterjedt lápvidékein és forrásaiban erednek a kontinens leghatalmasabb és történelmileg legjelentősebb folyói, köztük a Volga, a Dnyeper és a Nyugati-Dvina (Daugava). Az sűrű erdőkkel borított, ősi kereskedelmi útvonalakkal átszőtt dombság nemcsak az ország hidrológiai központja, hanem a természeti szépség és a mély orosz kulturális gyökerek találkozóhelye is.",
      ro: "Podișul Valdai, situat în nord-vestul părții europene a Rusiei, este o regiune de coline morenaice blânde, presărată cu păduri dese și lacuri limpezi, sculptată de ghețarii ultimei ere glaciare. Deși altitudinile sale sunt modeste, importanța geografică și istorică a regiunii este monumentală, reprezentând cumpăna principală a apelor din Europa de Est. Din mlaștinile sale extinse și izvoarele subterane iau naștere unele dintre cele mai lungi și importante fluvii ale continentului, printre care Volga, Niprul și Dvina de Vest. Această regiune împădurită, străbătută de vechi rute comerciale și protejată de parcuri naționale, servește nu doar ca o inimă hidrologică, ci și ca un peisaj de o profundă semnificație culturală.",
      en: "The Valdai Hills in the northwestern sector of European Russia form a gently rolling, forested moraine landscape, intricately carved by the retreating glaciers of the last Ice Age. Despite their modest elevation, these hills hold immense geographical and historical significance as the primary drainage divide of Eastern Europe. Within its sprawling network of wetlands, springs, and pristine lakes lie the sources of some of the continent's most powerful and historically vital rivers, including the mighty Volga, the Dnieper, and the Western Dvina. Rich in biodiversity and interspersed with ancient trade routes, this elevated upland is not only the hydrological heart of the region but also a sanctuary of deep cultural resonance in Russian history.",
      es: "Las alturas de Valdái, en el noroeste de la Rusia europea, forman un paisaje de morrenas suavemente ondulado, rico en bosques y lagos, que guarda el legado de la última glaciación. Aunque las colinas alcanzan solo una altura modesta, poseen una importancia geográfica e histórica excepcional al constituir la divisoria de aguas central de Europa del Este. En sus extensos humedales y lagos cristalinos nacen algunos de los ríos más caudalosos e históricamente relevantes del continente, como el Volga, el Dniéper y el Dvina Occidental. Esta meseta boscosa, con sus antiguas rutas comerciales y parques nacionales vírgenes, no es solo un núcleo hidrológico, sino también un lugar de profunda relevancia cultural en la historia rusa.",
      pt: "O planalto de Valdai, no noroeste da parte europeia da Rússia, forma uma paisagem de morenas suavemente ondulada, rica em florestas e lagos, que carrega o legado da última era glacial. Embora as colinas alcancem apenas uma altura modesta, têm uma importância geográfica e histórica superior, pois constituem o divisor de águas central da Europa Oriental. Nos seus extensos pântanos e lagos cristalinos nascem alguns dos rios mais poderosos e historicamente importantes do continente, incluindo o Volga, o Dnieper e o Dvina Ocidental. Este planalto florestal com as suas antigas rotas comerciais e parques nacionais intocados não é apenas um centro hidrológico, mas também um local de profundo significado cultural na história russa.",
      fr: "Les collines de Valdaï, au nord-ouest de la Russie européenne, forment un paysage morainique doucement ondulé, riche en forêts et en lacs, héritage de la dernière période glaciaire. Bien que les collines n'atteignent qu'une altitude modeste, elles revêtent une importance géographique et historique capitale, car elles constituent la principale ligne de partage des eaux d'Europe orientale. C'est dans leurs vastes zones marécageuses et leurs lacs limpides que prennent source certains des fleuves les plus puissants et les plus importants du continent, notamment la Volga, le Dniepr et la Dvina occidentale. Ce plateau boisé, avec ses anciennes routes commerciales et ses parcs nationaux préservés, est non seulement un cœur hydrologique, mais aussi un lieu d'une profonde importance culturelle dans l'histoire de la Russie.",
    },
    factsAdvanced: {
      de: ["A dombság legmagasabb pontja mindössze 347 méter tengerszint felett", "Az utolsó jégkorszak visszahúzódó belföldi jégtakarója alakította ki morénáival", "Itt található Európa leghosszabb folyójának, a Volgának a forrása", "A Dnyeper és a Nyugati-Dvina is a Valdaj-hátság mocsaraiból ered", "A területen számos tiszta vizű glaciális tó, köztük a Szeliger-tó fekszik", "Sűrű fenyő- és nyírfaerdők, valamint kiterjedt tőzeglápok borítják", "Az ókorban és a középkorban kulcsfontosságú vízi kereskedelmi utak találkozóhelye volt", "Jelentős része ma a Valdaji Nemzeti Park védelme alatt áll"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de las colinas está a solo 347 metros sobre el nivel del mar.", "Fue modelado por las morrenas de la capa de hielo que se retiraba tras la última glaciación.", "Aquí se encuentra la fuente del Volga, el río más largo de Europa.", "El Dniéper y el Dvina Occidental también nacen en los pantanos de Valdái.", "La zona alberga numerosos lagos glaciales de aguas puras, como el lago Seliguer.", "Está cubierta por densos bosques de coníferas y abedules, así como extensas turberas.", "En la antigüedad y la Edad Media fue un punto de encuentro crucial para rutas comerciales fluviales.", "Gran parte está protegida hoy bajo el Parque Nacional de Valdái."],
      pt: ["O ponto mais alto das colinas fica a apenas 347 metros acima do nível do mar.", "Foi moldado pelas morenas do manto de gelo que recuava após a última era glacial.", "Aqui encontra-se a nascente do Volga, o rio mais longo da Europa.", "O Dnieper e o Dvina Ocidental também nascem nos pântanos de Valdai.", "A área possui numerosos lagos glaciais de águas límpidas, incluindo o Lago Seliger.", "É coberta por densas florestas de coníferas e bétulas, além de extensas turfeiras.", "Na antiguidade e na Idade Média, era um ponto de encontro crucial para rotas comerciais fluviais.", "Grande parte está hoje protegida pelo Parque Nacional de Valdai."],
      fr: ["Le point culminant des collines n'est qu'à 347 mètres au-dessus du niveau de la mer.", "Le paysage a été façonné par les moraines de la calotte glaciaire lors de la dernière glaciation.", "C'est ici que se trouve la source de la Volga, le plus long fleuve d'Europe.", "Le Dniepr et la Dvina occidentale prennent également leur source dans les marais de Valdaï.", "La région compte de nombreux lacs glaciaires aux eaux claires, dont le lac Seliger.", "Elle est couverte de denses forêts de pins et de bouleaux, ainsi que de vastes tourbières.", "Dans l'Antiquité et au Moyen Âge, c'était un carrefour crucial pour les routes commerciales fluviales.", "Une grande partie est aujourd'hui protégée par le parc national de Valdaï."],
    },
    image: "/poi-images/russia-valdai-hills-relief-v2.webp",
},  {
    id: "russia-sayan-mountains-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Sajan-Gebirge", hu: "Szajánok", ro: "Munții Saian", en: "Sayan Mountains"},
    image: "/poi-images/russia-sayan-mountains-relief-v2.webp",
    coords: [95.0, 53.0],
    coords: [95.0, 53.0],
    description: {
      de: "Das Sajan-Gebirge in Südsibirien besteht aus dem West- und dem Ost-Sajan. Es ist geprägt durch alpine Gipfel und weite Hochbecken.",
      hu: "A dél-szibériai Szaján-hegység a Nyugati- és a Keleti-Szajánból áll. Alpesi csúcsok és tágas magasföldi medencék jellemzik.",
      ro: "Munții Saian din sudul Siberiei sunt împărțiți în Saianul de Vest și Saianul de Est. Se remarcă prin vârfuri alpine și bazine înalte.",
      en: "The Sayan Mountains in southern Siberia consist of the Western and Eastern Sayan ranges. They feature alpine peaks and vast upland basins.",
      es: "Los montes Sayanes en el sur de Siberia se dividen en el Sayán occidental y oriental. Se caracterizan por sus cumbres alpinas y amplias cuencas de tierras altas.",
      pt: "Os montes Sayan, no sul da Sibéria, consistem nos Sayan Ocidentais e Orientais. Caracterizam-se por picos alpinos e vastas bacias de altitude.",
      fr: "Les monts Saïan, dans le sud de la Sibérie, se composent du Saïan occidental et oriental. Ils sont caractérisés par des sommets alpins et de vastes bassins d'altitude.",
    },
    facts: {
      de: ["Gipfel erreichen über 3000 Meter", "Quelle des Jenissei", "Bekannt für das Naturreservat Stolby", "Heimat seltener Bergrentiere"],
      hu: ["A csúcsok meghaladják a 3000 métert", "A Jenyiszej folyó forrása", "Híres a Sztolbi természetvédelmi területről", "Ritka hegyi rénszarvasok élőhelye"],
      ro: ["Vârfurile depășesc 3000 de metri", "Izvorul fluviului Enisei", "Celebri pentru rezervația Stolbî", "Habitat pentru renii de munte"],
      en: ["Peaks exceed 3000 meters in height", "Source of the Yenisey River", "Famous for the Stolby Nature Reserve", "Home to rare mountain reindeer"],
      es: ["Cumbres que superan los 3000 metros", "Fuente del río Yeniséi", "Conocido por la reserva natural de Stolby", "Hogar de raros renos de montaña"],
      pt: ["Picos que ultrapassam os 3000 metros", "Fonte do rio Ienissei", "Conhecido pela reserva natural de Stolby", "Lar de renas de montanha raras"],
      fr: ["Les sommets dépassent les 3000 mètres", "Source de l'Iénisseï", "Réputé pour la réserve naturelle de Stolby", "Habitat de rennes de montagne rares"],
    },
imageHint: "Dramatic granite rock formations in the Sayan Mountains",
    descriptionAdvanced: {
      de: "Das majestätische Sajan-Gebirge im Süden Sibiriens, unterteilt in den West- und Ostsajan, bildet eine natürliche Barriere an der Grenze zur Mongolei. Diese urwüchsige, raue Hochgebirgslandschaft ist geprägt durch stark zerklüftete, alpine Gipfel, tiefe Gletschertäler und weite, hochgelegene Beckenlandschaften. Die Region ist von unberührter, dichter Nadelwaldtaiga bedeckt, die in höheren Lagen in alpine Tundra übergeht. Hier entspringt der Jenissei, einer der mächtigsten Ströme Asiens, aus zahlreichen kristallklaren Gebirgsbächen. Die abgeschiedene Wildnis des Sajan beheimatet eine reiche, teilweise endemische Tierwelt, darunter den seltenen Schneeleoparden und große Populationen von Bergrentieren. Berühmt sind auch die bizarren, hoch aufragenden Syenit-Felsformationen im Stolby-Naturreservat an seinen Ausläufern.",
      hu: "A Dél-Szibériában magasodó, lenyűgöző Szaján-hegység, amely Nyugati- és Keleti-Szajánra tagolódik, hatalmas természetes akadályt képez a mongol határ mentén. Ezt az ősi, zord alpesi tájat sziklás, csipkézett csúcsok, mélyen bevágódott jégkorszaki völgyek és tágas, magasan fekvő medencék jellemzik. A lejtőket sűrű, szinte áthatolhatatlan fenyőtajga borítja, amely a hóhatár felé haladva hegyi tundrába megy át. A hegyvidék mélyéről fakadó megszámlálhatatlan, kristálytiszta hegyi patak egyesüléséből születik Ázsia egyik leghatalmasabb folyója, a Jenyiszej. A szinte lakatlan, érintetlen vadon különleges, helyenként endemikus faunának ad otthont, köztük a ritka hópárducnak és a hegyi rénszarvasnak. A peremvidéken található híres Sztolbi természetvédelmi terület bizarr, égbe nyúló szienit sziklaképződményeiről ismert.",
      ro: "Maiestuoșii Munți Saian din sudul Siberiei, împărțiți în ramurile Saianul de Vest și Saianul de Est, formează o barieră naturală impunătoare la granița cu Mongolia. Acest peisaj alpin sălbatic și străvechi este caracterizat de vârfuri ascuțite, puternic fragmentate, văi glaciare adânci și depresiuni vaste la mare altitudine. Versanții sunt acoperiți de o taiga densă și impenetrabilă de conifere, care face tranziția spre tundră alpină în zonele superioare. Din rețeaua complexă de pâraie montane cristaline ale regiunii izvorăște Enisei, unul dintre cele mai puternice fluvii ale Asiei. Sălbăticia izolată a Munților Saian adăpostește o faună bogată și parțial endemică, inclusiv rarul leopard de zăpadă și populații importante de reni de munte, fiind celebră și pentru formațiunile stâncoase bizare din rezervația Stolbî.",
      en: "The majestic Sayan Mountains in southern Siberia, divided into the Western and Eastern Sayan, form a massive natural barrier along the border with Mongolia. This ancient, rugged alpine landscape is characterized by sharply jagged peaks, deep glacial valleys, and expansive, high-altitude basins. The lower slopes are blanketed in dense, pristine coniferous taiga, which transitions into desolate alpine tundra at higher elevations. Countless crystal-clear mountain streams gather in this watershed to give birth to the Yenisey, one of Asia's most powerful rivers. The profound isolation of the Sayan wilderness provides a vital sanctuary for diverse, sometimes endemic wildlife, including the elusive snow leopard and significant herds of mountain reindeer. The foothills are also renowned for the bizarre, towering syenite rock pillars of the Stolby Nature Reserve.",
      es: "Los majestuosos montes Sayanes, en el sur de Siberia, divididos en Sayán occidental y oriental, forman una barrera natural en la frontera con Mongolia. Este paisaje virgen y abrupto de alta montaña se caracteriza por sus picos alpinos muy escarpados, profundos valles glaciares y extensas cuencas de gran altitud. La región está cubierta por una densa taiga de coníferas, que en las zonas más altas da paso a la tundra alpina. Aquí nace el Yeniséi, uno de los ríos más caudalosos de Asia, a partir de numerosos arroyos de montaña cristalinos. La selva aislada de los Sayanes alberga una fauna rica y en parte endémica, que incluye al raro leopardo de las nieves y grandes poblaciones de renos de montaña. También son famosas las extrañas y elevadas formaciones rocosas de sienita de la reserva natural de Stolby, en sus estribaciones.",
      pt: "Os majestosos montes Sayan, no sul da Sibéria, divididos em Sayan Ocidentais e Orientais, formam uma barreira natural na fronteira com a Mongólia. Esta paisagem virgem e acidentada de alta montanha caracteriza-se por picos alpinos muito recortados, vales glaciares profundos e vastas bacias de altitude elevada. A região é coberta por uma taiga densa de coníferas, que nas zonas mais altas dá lugar à tundra alpina. Aqui nasce o Ienissei, um dos rios mais caudalosos da Ásia, a partir de numerosos riachos de montanha cristalinos. A selva isolada dos Sayan alberga uma fauna rica e em parte endémica, incluindo o raro leopardo-das-neves e grandes populações de renas de montanha. Também são famosas as bizarras e elevadas formações rochosas de sienito na reserva natural de Stolby, nos seus sopés.",
      fr: "Les majestueux monts Saïan, au sud de la Sibérie, divisés en Saïan occidental et oriental, forment une barrière naturelle à la frontière avec la Mongolie. Ce paysage de haute montagne sauvage et rude est caractérisé par des sommets alpins très découpés, de profondes vallées glaciaires et de vastes bassins d'altitude. La région est couverte d'une taïga dense de conifères qui, à plus haute altitude, laisse place à la toundra alpine. C'est ici que l'Iénisseï, l'un des fleuves les plus puissants d'Asie, prend sa source dans de nombreux torrents de montagne cristallins. La nature sauvage et isolée du Saïan abrite une faune riche et en partie endémique, dont le rare léopard des neiges et de grandes populations de rennes de montagne. Les formations rocheuses de syénite, bizarres et imposantes, de la réserve naturelle de Stolby, située sur ses contreforts, sont également célèbres.",
    },
    factsAdvanced: {
      de: ["A hegységrendszer legmagasabb pontja, a Munku-Szardik 3491 méter magas", "A Nyugati- és a Keleti-Szaján mintegy 1000 kilométer hosszan uralja a tájat", "Több ezer apró gleccser és jégkorszaki tó bújik meg a völgyeiben", "A hegyekből eredő vizek táplálják a Jenyiszej folyó hatalmas medencéjét", "A terület a kaledóniai és herciniai hegységképződés során alakult ki", "Gazdag réz-, ólom-, cink- és aranylelőhelyek találhatók a kőzetekben", "Az alacsonyabb régiók sűrű cédrus- és vörösfenyő-erdőket rejtenek", "Az itt élő tuva őslakosok évszázadok óta nomád rénszarvaspásztorkodást folytatnak"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto del sistema montañoso, el Munku-Sardyk, tiene 3491 metros de altura", "Los Sayanes occidentales y orientales dominan el paisaje a lo largo de unos 1000 kilómetros", "Miles de pequeños glaciares y lagos de la edad de hielo se esconden en sus valles", "Las aguas que nacen en las montañas alimentan la enorme cuenca del río Yeniséi", "La zona se formó durante las orogenias caledoniana y herciniana", "En las rocas se encuentran ricos yacimientos de cobre, plomo, zinc y oro", "Las regiones más bajas esconden densos bosques de cedro y alerce", "Los indígenas tuvanos locales practican el pastoreo nómada de renos desde hace siglos"],
      pt: ["O ponto mais alto do sistema montanhoso, o Munku-Sardyk, tem 3491 metros de altitude", "Os Sayan Ocidentais e Orientais dominam a paisagem ao longo de cerca de 1000 quilómetros", "Milhares de pequenos glaciares e lagos da idade do gelo escondem-se nos seus vales", "As águas que nascem nas montanhas alimentam a enorme bacia do rio Ienissei", "A área formou-se durante as orogenias caledoniana e herciniana", "Nas rochas encontram-se ricos depósitos de cobre, chumbo, zinco e ouro", "As regiões mais baixas escondem florestas densas de cedro e lariço", "Os indígenas tuvanos locais praticam a pastorícia nómada de renas há séculos"],
      fr: ["Le point culminant du système, le Munku-Sardyk, s'élève à 3491 mètres", "Le Saïan occidental et oriental dominent le paysage sur environ 1000 kilomètres de long", "Des milliers de petits glaciers et de lacs glaciaires se cachent dans ses vallées", "Les eaux des montagnes alimentent l'immense bassin du fleuve Iénisseï", "La zone s'est formée lors des orogenèses calédonienne et hercynienne", "De riches gisements de cuivre, de plomb, de zinc et d'or se trouvent dans les roches", "Les régions basses abritent des forêts denses de cèdres et de mélèzes", "Les autochtones Touvains y pratiquent l'élevage nomade de rennes depuis des siècles"],
    },
    image: "/poi-images/russia-sayan-mountains-relief-v2.webp",
},  {
    id: "russia-stanovoy-highlands-relief-v2",
    parent: "RU",
    type: "landmark",
    name: { de: "Stanowoihochland", hu: "Sztanovoj-felföld", ro: "Munții Stanovoi", en: "Stanovoy Highlands"},
    image: "/poi-images/russia-stanovoy-highlands-relief-v2.webp",
    coords: [115.0, 56.0],
    coords: [115.0, 56.0],
    description: {
      de: "Das Stanowoihochland ist ein System von Gebirgszügen in Ostsibirien, das nördlich des Baikalsees liegt. Es ist durch tektonische Aktivität stark zerklüftet.",
      hu: "A Sztanovoj-felföld egy hegységrendszer Kelet-Szibériában, a Bajkál-tótól északra. A tektonikus aktivitás miatt erősen tagolt felszínű.",
      ro: "Podișul Stanovoi este un sistem de lanțuri muntoase din estul Siberiei, situat la nord de Lacul Baikal. Este puternic fragmentat de activitatea tectonică.",
      en: "The Stanovoy Highlands are a system of mountain ranges in eastern Siberia, located north of Lake Baikal. It is highly rugged due to tectonic activity.",
      es: "Las tierras altas de Stanovói son un sistema de cadenas montañosas en el este de Siberia, situadas al norte del lago Baikal. Están muy fracturadas por la actividad tectónica.",
      pt: "As terras altas de Stanovoi são um sistema de cadeias montanhosas na Sibéria Oriental, situadas a norte do lago Baikal. Estão fortemente recortadas pela atividade tectónica.",
      fr: "Les hauts-plateaux de Stanovoï sont un système de chaînes de montagnes de Sibérie orientale, situés au nord du lac Baïkal. Ils sont fortement découpés par l'activité tectonique.",
    },
    facts: {
      de: ["Höchste Erhebung ca. 3000 m", "Teil der Baikal-Riftzone", "Durchquert von der BAM-Eisenbahn", "Zahlreiche Thermalquellen vorhanden"],
      hu: ["Legmagasabb pontja kb. 3000 m", "A Bajkál-riftzóna része", "A BAM vasútvonal halad át rajta", "Számos hévízforrás található itt"],
      ro: ["Înălțime maximă de circa 3000 m", "Parte a zonei de rift Baikal", "Traversat de magistrala feroviară BAM", "Numeroase izvoare termale"],
      en: ["Highest elevation around 3000 m", "Part of the Baikal Rift Zone", "Traversed by the BAM railway line", "Numerous thermal springs present"],
      es: ["Altura máxima de aprox. 3000 m", "Parte de la zona del rift del Baikal", "Atravesado por el ferrocarril BAM", "Existen numerosas fuentes termales"],
      pt: ["Altitude máxima de aprox. 3000 m", "Parte da zona de rift do Baikal", "Atravessado pelo caminho-de-ferro BAM", "Existem inúmeras fontes termais"],
      fr: ["Point culminant à environ 3000 m", "Fait partie de la zone de rift du Baïkal", "Traversé par la ligne de chemin de fer BAM", "Nombreuses sources thermales présentes"],
    },
imageHint: "High mountain ridges and deep valleys of the Stanovoy Highlands",
    descriptionAdvanced: {
      de: "Das Stanowoihochland in Ostsibirien, nördlich des Baikalsees gelegen, ist eine geologisch äußerst aktive und dramatisch zerklüftete Bergregion. Es ist ein zentraler Bestandteil der Baikal-Riftzone, in der die Erdkruste auseinandergezogen wird, was zu häufigen, starken Erdbeben und der Entstehung zahlreicher heißer Thermalquellen führt. Die Landschaft präsentiert sich als ein Labyrinth aus scharfen Gebirgsgraten, tief abfallenden Schluchten und schmalen, unzugänglichen Tälern, die tief in das massive Gestein eingeschnitten sind. Unter der von Dauerfrostboden dominierten Oberfläche und der kargen Gebirgstundra birgt die Region gewaltige Bodenschätze. Bekannt wurde das schwer zugängliche Gebiet vor allem durch den heroischen Bau der Baikal-Amur-Magistrale (BAM), die sich mit zahlreichen Brücken und Tunneln durch diese extrem feindliche Landschaft kämpft.",
      hu: "A Bajkál-tótól északra elterülő Sztanovoj-felföld Kelet-Szibéria geológiailag egyik legaktívabb, tektonikusan erősen tagolt, drámai hegyvidéke. Szerves részét képezi a Bajkál-hasadékvölgy rendszerének, ahol a földkéreg folyamatos széthúzódása miatt gyakoriak az erős földrengések, és számos forró vizű termálforrás tör a felszínre. A táj éles hegygerincek, meredeken leszakadó szakadékok és szűk, szinte megközelíthetetlen, sziklába vájt völgyek áthatolhatatlan labirintusa. Az állandóan fagyott talajjal (permafrost) és ritkás hegyi tundrával borított felszín alatt a terület hatalmas, jórészt kiaknázatlan ásványkincs-tartalékokat rejt. Ezt az amúgy barátságtalan, zord vidéket a gigantikus mérnöki teljesítményt követelő Baikal-Amur-Magisztrál (BAM) vasútvonal szeli át, lenyűgöző hidakkal és hosszú alagutakkal leküzdve az extrém terepviszonyokat.",
      ro: "Podișul Stanovoi, situat în Siberia de Est, la nord de Lacul Baikal, este o regiune montană extrem de activă geologic și cu un relief dramatic fragmentat. Face parte integrantă din zona de rift Baikal, unde forțele tectonice îndepărtează crusta terestră, generând cutremure frecvente și puternice, precum și apariția numeroaselor izvoare termale fierbinți. Peisajul este un labirint de creste ascuțite, defileuri abrupte și văi înguste, aproape inaccesibile, tăiate adânc în stânca solidă. Sub suprafața dominată de permafrost și tundra alpină săracă, regiunea ascunde rezerve minerale uriașe, în mare parte neexploatate. Această zonă extrem de inospitalieră a devenit faimoasă odată cu construcția eroică a Magistralei feroviare Baikal-Amur (BAM), care traversează relieful cu poduri spectaculoase și tuneluri lungi.",
      en: "The Stanovoy Highlands in Eastern Siberia, positioned north of Lake Baikal, comprise a geologically dynamic and dramatically rugged mountain region. It is a vital component of the Baikal Rift Zone, where continuous crustal extension triggers frequent, severe earthquakes and gives rise to numerous steaming thermal springs. The landscape unfolds as a labyrinthine complex of sharp, serrated ridges, precipitously plunging gorges, and narrow, isolated valleys incised deep into the bedrock. Beneath a surface dominated by continuous permafrost and sparse alpine tundra, the highlands conceal immense, largely unexploited mineral wealth. This exceptionally harsh and forbidding environment gained prominence through the monumental engineering triumph of the Baikal-Amur Mainline (BAM) railway, which conquers the treacherous terrain via an impressive network of tunnels and bridges.",
      es: "Las tierras altas de Stanovói, en Siberia oriental, situadas al norte del lago Baikal, son una región montañosa geológicamente muy activa y espectacularmente accidentada. Son un componente central de la zona del rift del Baikal, donde la corteza terrestre se está separando, lo que provoca terremotos frecuentes y fuertes y la aparición de numerosas fuentes termales. El paisaje se presenta como un laberinto de crestas montañosas afiladas, gargantas profundas y valles estrechos e inaccesibles, profundamente excavados en la roca maciza. Bajo la superficie dominada por el permafrost y la árida tundra de montaña, la región alberga enormes recursos minerales. Esta zona de difícil acceso se hizo famosa sobre todo por la heroica construcción del ferrocarril Baikal-Amur (BAM), que se abre paso a través de este paisaje extremadamente hostil con numerosos puentes y túneles.",
      pt: "As terras altas de Stanovoi, na Sibéria Oriental, situadas a norte do lago Baikal, são uma região montanhosa geologicamente muito ativa e dramaticamente acidentada. São uma componente central da zona de rift do Baikal, onde a crosta terrestre está a separar-se, o que provoca terramotos frequentes e fortes e o aparecimento de numerosas fontes termais. A paisagem apresenta-se como um labirinto de cristas montanhosas afiadas, gargantas profundas e vales estreitos e inacessíveis, profundamente esculpidos na rocha maciça. Sob a superfície dominada pelo permafrost e pela tundra de montanha árida, a região alberga enormes recursos minerais. Esta zona de difícil acesso tornou-se famosa sobretudo pela heróica construção do caminho-de-ferro Baikal-Amur (BAM), que se abre caminho através desta paisagem extremamente hostil com inúmeras pontes e túneis.",
      fr: "Les hauts-plateaux de Stanovoï, en Sibérie orientale, situés au nord du lac Baïkal, constituent une région montagneuse géologiquement très active et aux reliefs spectaculaires. Ils sont une partie centrale de la zone de rift du Baïkal, où la croûte terrestre s'étire, provoquant de fréquents et puissants séismes ainsi que l'apparition de nombreuses sources thermales. Le paysage se présente comme un labyrinthe de crêtes acérées, de gorges profondes et de vallées étroites et inaccessibles, entaillées profondément dans la roche massive. Sous la surface dominée par le pergélisol et la toundra de montagne aride, la région recèle d'immenses ressources minérales. Cette zone difficile d'accès s'est fait connaître surtout par la construction héroïque de la ligne ferroviaire Baïkal-Amour (BAM), qui traverse ce paysage extrêmement hostile au prix de nombreux ponts et tunnels.",
    },
    factsAdvanced: {
      de: ["A felföld legmagasabb hegycsúcsai elérik a 3000 méteres magasságot", "A terület a folyamatosan táguló Bajkál-riftzóna közvetlen folytatása", "A szeizmikus aktivitás miatt itt pattan ki Szibéria legtöbb földrengése", "A kőzeteket ősi, proterozoikumi gránitok és gneiszek alkotják", "Az állandóan fagyott talaj vastagsága helyenként a 400 métert is eléri", "A hatalmas építkezés, a BAM vasútvonal átszeli a legzordabb részeit is", "Jelentős réz-, szén- és azbesztlelőhelyek találhatók a térségben", "A zord éghajlat miatt a hőmérséklet télen gyakran süllyed -50 °C alá"],
      hu: [],
      ro: [],
      en: [],
      es: ["Los picos más altos de las tierras altas alcanzan una altitud de 3000 metros", "La zona es una continuación directa de la zona del rift del Baikal en constante expansión", "Debido a la actividad sísmica, aquí se originan la mayoría de los terremotos de Siberia", "Las rocas están compuestas por antiguos granitos y gneises proterozoicos", "El espesor del permafrost alcanza en algunos lugares los 400 metros", "La gigantesca construcción de la línea ferroviaria BAM atraviesa sus partes más inhóspitas", "En la región se encuentran importantes yacimientos de cobre, carbón y amianto", "Debido al clima riguroso, la temperatura en invierno baja a menudo de los -50 °C"],
      pt: ["Os picos mais altos das terras altas atingem altitudes de 3000 metros", "A área é uma continuação direta da zona de rift do Baikal em constante expansão", "Devido à atividade sísmica, a maioria dos terramotos da Sibéria ocorre aqui", "As rochas são compostas por granitos e gnaisses proterozoicos antigos", "A espessura do solo permanentemente gelado atinge os 400 metros nalguns locais", "A construção gigantesca da linha ferroviária BAM atravessa as suas partes mais rigorosas", "Existem depósitos significativos de cobre, carvão e amianto na região", "Devido ao clima rigoroso, a temperatura no inverno desce frequentemente abaixo dos -50 °C"],
      fr: ["Les plus hauts sommets du plateau atteignent 3000 mètres d'altitude", "La zone est le prolongement direct de la zone de rift du Baïkal en expansion continue", "En raison de l'activité sismique, c'est ici que se produisent le plus de séismes en Sibérie", "Les roches sont composées de granites et de gneiss anciens du Protérozoïque", "L'épaisseur du pergélisol atteint par endroits 400 mètres", "Le chantier gigantesque de la voie ferrée BAM traverse ses parties les plus rudes", "D'importants gisements de cuivre, de charbon et d'amiante se trouvent dans la région", "En raison du climat rude, les températures descendent souvent sous les -50 °C en hiver"],
    },
    image: "/poi-images/russia-stanovoy-highlands-relief-v2.webp",
},  {
    id: "russia-byrranga-mountains-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Byrrangagebirge", hu: "Birranga-hegység", ro: "Munții Bîrranga", en: "Byrranga Mountains"},
    image: "/poi-images/russia-byrranga-mountains-relief-v2.webp",
    coords: [103.0, 74.5],
    coords: [103.0, 74.5],
    description: {
      de: "Das Byrrangagebirge liegt auf der Taimyr-Halbinsel und ist das nördlichste Festlandsgebirge der Welt. Es ist eine extrem isolierte und unwirtliche Tundra-Region.",
      hu: "A Birranga-hegység a Tajmir-félszigeten található, és a világ legészakibb szárazföldi hegysége. Rendkívül elszigetelt és barátságtalan tundra vidék.",
      ro: "Munții Bîrranga sunt situați în Peninsula Taimîr și reprezintă cel mai nordic lanț muntos continental din lume. Este o regiune de tundră izolată.",
      en: "The Byrranga Mountains are located on the Taymyr Peninsula and are the northernmost continental mountain range in the world. It is an extremely isolated tundra region.",
      es: "Los montes Byrranga se encuentran en la península de Taimyr y son las montañas continentales más septentrionales del mundo. Es una región de tundra extremadamente aislada e inhóspita.",
      pt: "Os montes Byrranga situam-se na península de Taymyr e são as montanhas continentais mais setentrionais do mundo. É uma região de tundra extremamente isolada e inóspita.",
      fr: "Les monts Byrranga sont situés sur la péninsule de Taïmyr et constituent la chaîne de montagnes continentale la plus septentrionale au monde. C'est une région de toundra extrêmement isolée et inhospitalière.",
    },
    facts: {
      de: ["Höchster Punkt ca. 1125 m", "Fast das ganze Jahr mit Schnee bedeckt", "Enthält kleine arktische Gletscher", "Kaum bewohnt oder erforscht"],
      hu: ["Legmagasabb pontja kb. 1125 m", "Majdnem egész évben hó borítja", "Kisméretű arktikus gleccsereket tartalmaz", "Szinte lakatlan és feltáratlan"],
      ro: ["Punctul maxim la 1125 m", "Acoperiți de zăpadă aproape tot anul", "Conțin mici ghețari arctici", "Zonă aproape nelocuită și neexplorată"],
      en: ["Highest point is about 1125 m", "Snow-covered most of the year", "Contains small Arctic glaciers", "Virtually uninhabited and unexplored"],
      es: ["Punto más alto aprox. 1125 m", "Cubierto de nieve casi todo el año", "Contiene pequeños glaciares árticos", "Casi no habitado ni explorado"],
      pt: ["Ponto mais alto aprox. 1125 m", "Coberto de neve quase todo o ano", "Contém pequenos glaciares árticos", "Dificilmente habitado ou explorado"],
      fr: ["Point culminant environ 1125 m", "Couvert de neige presque toute l'année", "Contient de petits glaciers arctiques", "Pratiquement ni habité ni exploré"],
    },
imageHint: "Desolate Arctic mountain landscape of the Byrranga range",
    descriptionAdvanced: {
      de: "Das Byrrangagebirge auf der Taimyr-Halbinsel ist ein Ort von extremer Isolation und gilt als das nördlichste Festlandsgebirge der Welt. Fernab jeglicher Zivilisation erhebt sich dieses stark erodierte, uralte Bergmassiv aus der endlosen sibirischen Tundra direkt in die raue Arktis. Die Landschaft ist eine trostlose, steinerne Wüste, die fast neun Monate im Jahr unter Eis und Schnee begraben liegt, während kurze Sommer den steinigen, permafrostgebundenen Boden nur spärlich auftauen lassen. In den abgeschiedenen Tälern verbergen sich kleine, unbekannte arktische Gletscher, und eisige Winde peitschen schonungslos über die kahlen Kuppen. Diese unberührte, feindselige Wildnis, die bis heute nur in Ansätzen erforscht ist, dient als wichtiges Rückzugsgebiet für riesige, ungestörte Herden von wilden Rentieren und Moschusochsen.",
      hu: "A Tajmir-félszigeten elnyúló Birranga-hegység a Föld legészakibb, szárazföldön elhelyezkedő hegysége, az extrém elszigeteltség és a könyörtelen természet szimbóluma. Minden civilizációtól távol, a végtelen szibériai tundra és a Jeges-tenger határán emelkedik ez az ősi, erősen lepusztult hegytömb. A táj kietlen, kopár kősivatag, amelyet az év mintegy kilenc hónapjában vastag hó és jégpáncél borít; a rövid, hűvös nyarak során is csak sekélyen enged fel a masszív permafrost. Elrejtett völgyeiben apró, szinte ismeretlen arktikus gleccserek húzódnak meg, és a könyörtelen, fagyos szelek akadálytalanul söpörnek végig a tar csúcsokon. Ezt a szinte teljesen feltáratlan, ellenséges vadont egyedül a hatalmas, háborítatlanul vándorló vad rénszarvas- és pézsmatulok-csordák birtokolják.",
      ro: "Munții Bîrranga de pe Peninsula Taimîr reprezintă un loc de o izolare extremă, fiind recunoscuți drept cel mai nordic lanț muntos continental din lume. Departe de orice urmă de civilizație, acest masiv străvechi și puternic erodat se ridică din nesfârșita tundră siberiană direct în inima Arcticii. Peisajul este un deșert de piatră dezolant, îngropat sub zăpadă și gheață aproape nouă luni pe an; scurta vară reușește să dezghețe doar superficial solul stâncos dominat de permafrost. Văile sale ascunse adăpostesc mici ghețari arctici necunoscuți, iar vânturile aspre și înghețate mătură neîncetat vârfurile golașe. Această sălbăticie nealterată și extrem de ostilă, explorată doar parțial până în prezent, servește drept sanctuar vital pentru turme uriașe de reni sălbatici și boi moscați.",
      en: "The Byrranga Mountains on the Taymyr Peninsula stand as a monument of extreme isolation, officially recognized as the northernmost continental mountain range on Earth. Far removed from any human settlement, this ancient, heavily eroded massif rises abruptly from the endless Siberian tundra into the harsh high Arctic. The landscape is a desolate expanse of shattered stone, entombed under snow and ice for nearly nine months of the year; brief, frigid summers only manage a shallow thaw of the unyielding permafrost. Its concealed, shadowed valleys harbor small, undocumented arctic glaciers, while relentless, freezing gales constantly batter the barren, rocky domes. This remarkably unexplored, hostile wilderness remains undisturbed by mankind, providing a crucial, pristine refuge for vast, roaming herds of wild reindeer and muskoxen.",
      es: "Los montes Byrranga, en la península de Taimyr, son un lugar de aislamiento extremo y se consideran la cordillera continental más septentrional del planeta. Lejos de cualquier civilización, este macizo antiguo y fuertemente erosionado se eleva desde la infinita tundra siberiana directamente hacia el Ártico rugoso. El paisaje es un desierto de piedra desolado que permanece enterrado bajo el hielo y la nieve casi nueve meses al año, mientras que los cortos veranos apenas permiten que el suelo pedregoso de permafrost se descongele mínimamente. En los valles remotos se esconden pequeños glaciares árticos desconocidos, y vientos gélidos azotan sin piedad las cumbres calvas. Esta naturaleza virgen y hostil, que hasta hoy solo ha sido explorada en parte, sirve como un importante refugio para enormes manadas de renos salvajes y bueyes almizcleros.",
      pt: "Os montes Byrranga na península de Taymyr são um local de isolamento extremo e são considerados a cordilheira continental mais setentrional do mundo. Longe de qualquer civilização, este maciço antigo e fortemente erodido ergue-se da tundra siberiana infinita diretamente no Ártico rigoroso. A paisagem é um deserto de pedra desolado que fica enterrado sob gelo e neve durante quase nove meses por ano, enquanto os verões curtos permitem apenas um degelo esparso do solo pedregoso de permafrost. Nos vales isolados escondem-se pequenos glaciares árticos desconhecidos e ventos gélidos fustigam impiedosamente os cumes calvos. Esta selva intocada e hostil, que até hoje foi apenas parcialmente explorada, serve como uma importante área de refúgio para enormes manadas de renas selvagens e bois-almiscarados.",
      fr: "Les monts Byrranga, sur la péninsule de Taïmyr, sont un lieu d'isolement extrême et sont considérés comme la chaîne de montagnes continentale la plus au nord du monde. Loin de toute civilisation, ce massif ancien fortement érodé s'élève de l'infinie toundra sibérienne directement dans l'Arctique rude. Le paysage est un désert de pierre désolé, enfoui sous la glace et la neige près de neuf mois par an, tandis que les courts étés ne laissent dégeler que très peu le sol pierreux lié au pergélisol. Dans les vallées isolées se cachent de petits glaciers arctiques méconnus, et des vents glaciaux balaient sans relâche les sommets dénudés. Cette nature sauvage intacte et hostile, qui n'est encore que partiellement explorée à ce jour, sert de zone de repli importante pour d'immenses troupeaux de rennes sauvages et de bœufs musqués.",
    },
    factsAdvanced: {
      de: ["Ez a Föld legészakabbra fekvő kontinentális hegylánca", "A hegység legmagasabb pontja hozzávetőlegesen 1125 méter", "Körülbelül 1100 kilométer hosszan húzódik a Tajmir-félszigeten", "A hegység területén 96 ismert kisebb arktikus gleccser található", "Geológiailag prekambriumi és paleozoos kőzetekből épül fel", "A terület teljesen lakatlan, és a kutatók is csak ritkán látogatják", "Oroszország legnagyobb vadon élő rénszarvascsordáinak nyári legelője", "A permafrost vastagsága itt elérheti az 500 métert is"],
      hu: [],
      ro: [],
      en: [],
      es: ["Es la cadena montañosa continental más septentrional de la Tierra", "El punto más alto de la cordillera es de aproximadamente 1125 metros", "Se extiende unos 1100 kilómetros a lo largo de la península de Taimyr", "Hay 96 pequeños glaciares árticos conocidos en el área de la montaña", "Geológicamente se compone de rocas del Precámbrico y Paleozoico", "El área está completamente deshabitada y rara vez es visitada por investigadores", "Es el pasto de verano para las manadas de renos salvajes más grandes de Rusia", "El espesor del permafrost aquí puede alcanzar los 500 metros"],
      pt: ["É a cordilheira continental mais setentrional da Terra", "O ponto mais alto da cordilheira tem aproximadamente 1125 metros", "Estende-se por cerca de 1100 quilómetros na península de Taymyr", "Existem 96 pequenos glaciares árticos conhecidos na área da montanha", "Geologicamente composta por rochas pré-cambrianas e paleozoicas", "A área é completamente desabitada e raramente visitada por investigadores", "É o pasto de verão das maiores manadas de renas selvagens da Rússia", "A espessura do permafrost aqui pode atingir os 500 metros"],
      fr: ["C'est la chaîne de montagnes continentale la plus au nord de la Terre", "Le point culminant de la chaîne est d'environ 1125 mètres", "S'étend sur environ 1100 kilomètres sur la péninsule de Taïmyr", "On dénombre 96 petits glaciers arctiques connus dans la région", "Composée géologiquement de roches précambriennes et paléozoïques", "La zone est totalement inhabitée et rarement visitée par les chercheurs", "Pâturage d'été pour les plus grands troupeaux de rennes sauvages de Russie", "L'épaisseur du pergélisol peut atteindre 500 mètres à cet endroit"],
    },
    image: "/poi-images/russia-byrranga-mountains-relief-v2.webp",
},  {
    id: "russia-khibiny-mountains-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Chibinen", hu: "Hibi-hegység", ro: "Munții Hibini", en: "Khibiny Mountains"},
    image: "/poi-images/russia-khibiny-mountains-relief-v2.webp",
    coords: [33.7, 67.7],
    coords: [33.7, 67.7],
    description: {
      de: "Die Chibinen sind ein kleines Gebirgsmassiv auf der Kola-Halbinsel nördlich des Polarkreises. Sie zeichnen sich durch flache Gipfel und steile Kare aus.",
      hu: "A Hibi-hegység egy kisméretű hegytömb a Kola-félszigeten, a sarkkörtől északra. Lapos tetők és meredek cirkuszvölgyek jellemzik.",
      ro: "Munții Hibini reprezintă un mic masiv muntos din Peninsula Kola, la nord de Cercul Polar. Se caracterizează prin vârfuri plate și abrupturi glaciare.",
      en: "The Khibiny Mountains are a small mountain massif on the Kola Peninsula, north of the Arctic Circle. They are characterized by flat-topped peaks and steep glacial cirques.",
      es: "Las Jibiny son un pequeño macizo montañoso en la península de Kola, al norte del Círculo Polar Ártico. Se caracterizan por cumbres planas y circos escarpados.",
      pt: "As Khibiny são um pequeno maciço montanhoso na península de Kola, a norte do Círculo Polar Ártico. Caracterizam-se por cumes planos e circos glaciares íngremes.",
      fr: "Les monts Khibiny sont un petit massif montagneux situé sur la péninsule de Kola, au nord du cercle polaire. Ils se caractérisent par des sommets plats et des cirques escarpés.",
    },
    facts: {
      de: ["Höchster Gipfel Yudychvumchorr (1201 m)", "Eines der größten Apatit-Vorkommen weltweit", "Hufeisenförmige Anordnung der Berge", "Beliebtes Ziel für Wanderer im Norden"],
      hu: ["Legmagasabb csúcsa a Judicsvumcsorr (1201 m)", "A világ egyik legnagyobb apatitlelőhelye", "Patkó alakú hegyszerkezet", "Népszerű túraútvonal északon"],
      ro: ["Cel mai înalt vârf: Iudici-vumiciorr (1201 m)", "Unul dintre cele mai mari zăcăminte de apatit", "Aranjament muntos sub formă de potcoavă", "Destinație populară pentru drumeții în nord"],
      en: ["Highest peak is Yudychvumchorr (1201 m)", "One of the world's largest apatite deposits", "Horshoe-shaped mountain arrangement", "Popular hiking destination in the Arctic"],
      es: ["Cumbre más alta Yudychvumchorr (1201 m)", "Uno de los mayores yacimientos de apatita del mundo", "Disposición de las montañas en forma de herradura", "Destino popular para excursionistas en el norte"],
      pt: ["Cume mais alto Yudychvumchorr (1201 m)", "Uma das maiores jazidas de apatite do mundo", "Disposição das montanhas em forma de ferradura", "Destino popular para caminhantes no norte"],
      fr: ["Plus haut sommet Yudychvumchorr (1201 m)", "L'un des plus grands gisements d'apatite au monde", "Disposition des montagnes en fer à cheval", "Destination prisée des randonneurs dans le Grand Nord"],
    },
imageHint: "Flat-topped tundra mountains of the Khibiny massif",
    descriptionAdvanced: {
      de: "Das Chibinen-Massiv auf der Kola-Halbinsel ist eine geologische Besonderheit nördlich des Polarkreises, die durch ihre einzigartige hufeisenförmige Struktur und steil abfallende Hänge fasziniert. Diese alten, erodierten Berge zeichnen sich durch markante, weite Hochebenen aus, die abrupt in tiefe, U-förmige Täler abbrechen, die von riesigen eiszeitlichen Gletschern ausgehobelt wurden. Trotz der geringen absoluten Höhe verleihen die schroffen Klippen und tiefen Kare dem Gebirge einen ausgesprochen alpinen und wilden Charakter. Das Massiv ist weltweit berühmt für seinen immensen Reichtum an seltenen Mineralien, insbesondere das wertvolle Apatit, dessen massiver Abbau die Region wirtschaftlich prägt. Im Sommer wandelt sich die raue Bergtundra in ein farbenfrohes Mosaik aus Flechten und Zwergsträuchern, was die Chibinen zu einem Magneten für Wanderer macht.",
      hu: "A Kola-félszigeten, az északi sarkkörön túl magasodó Hibi-hegység (Hibini) egy geológiai különlegesség, amely patkó alakú elrendeződésével és drámai lejtőivel hívja fel magára a figyelmet. Ezeket az ősi, jelentősen lepusztult hegyeket kiterjedt, lapos tetők és sziklás fennsíkok jellemzik, amelyek hirtelen szakadnak bele a jégkorszaki gleccserek által kivájt, mély U-alakú cirkuszvölgyekbe. Bár a hegység abszolút magassága szerény, a meredek sziklafalak és a zord kárfülkék mégis határozottan alpesi, vad karaktert kölcsönöznek a tájnak. A Hibi világhírű a hihetetlenül gazdag, ritka ásványkincseiről; különösen a hatalmas apatittelepekről, amelyek bányászata meghatározza a térség gazdaságát. A nyári hónapokban a kopár hegyi tundra színpompás zuzmó- és törpecserje-szőnyeggé változik, népszerű célponttá téve a vidéket a túrázók számára.",
      ro: "Masivul Hibini de pe Peninsula Kola este o curiozitate geologică situată la nord de Cercul Polar, fascinând prin structura sa unică în formă de potcoavă și versanții cu căderi abrupte. Acești munți străvechi, puternic erodați, se disting prin platouri largi și netede care se prăbușesc brusc în văi adânci, în formă de U, sculptate implacabil de ghețarii din epoca glaciară. În ciuda altitudinii lor absolute relativ mici, stâncile abrupte și circurile glaciare adânci conferă masivului un caracter alpin pronunțat și o atmosferă sălbatică. Hibini este faimos pe plan mondial pentru bogăția sa uluitoare în minerale rare, în special uriașele zăcăminte de apatit, a căror exploatare masivă susține economia regiunii. Vara, tundra montană aspră se transformă într-un mozaic colorat de licheni și arbuști pitici, atrăgând numeroși drumeți.",
      en: "The Khibiny Mountains on the Kola Peninsula represent a striking geological anomaly north of the Arctic Circle, captivating observers with their unique horseshoe-shaped arrangement and sheer, dramatic slopes. These ancient, deeply eroded mountains are characterized by extensive flat-topped plateaus that plunge abruptly into deep, U-shaped valleys, relentlessly gouged out by massive Pleistocene glaciers. Despite their relatively modest absolute elevation, the sheer cliffs and precipitous glacial cirques bestow the massif with a distinctly fierce, alpine character. The range is globally renowned for its astonishing concentration of rare minerals, most notably vast deposits of apatite, the intensive mining of which heavily dictates the local economy. During the brief summer, the harsh mountain tundra bursts into a vibrant tapestry of lichens and dwarf shrubs, drawing avid hikers to the Arctic wilderness.",
      es: "El macizo de las Jibiny en la península de Kola es una particularidad geológica al norte del Círculo Polar Ártico, que fascina por su estructura única en forma de herradura y sus laderas de caída abrupta. Estas montañas antiguas y erosionadas se caracterizan por mesetas prominentes y amplias que se rompen bruscamente en valles profundos en forma de U, excavados por enormes glaciares de la edad de hielo. A pesar de su baja altura absoluta, los riscos escarpados y los circos profundos confieren a la montaña un carácter marcadamente alpino y salvaje. El macizo es mundialmente famoso por su inmensa riqueza en minerales raros, especialmente la valiosa apatita, cuya extracción masiva marca la economía de la región. En verano, la ruda tundra de montaña se transforma en un colorido mosaico de líquenes y arbustos enanos, lo que convierte a las Jibiny en un imán para los excursionistas.",
      pt: "O maciço de Khibiny na península de Kola é uma característica geológica a norte do Círculo Polar Ártico, que fascina pela sua estrutura única em forma de ferradura e encostas íngremes. Estas montanhas antigas e erodidas caracterizam-se por planaltos extensos e marcantes que descem abruptamente em vales profundos em forma de U, escavados por enormes glaciares da Idade do Gelo. Apesar da baixa altitude absoluta, as falésias íngremes e os circos glaciares profundos conferem à montanha um caráter distintamente alpino e selvagem. O maciço é mundialmente famoso pela sua imensa riqueza em minerais raros, especialmente a valiosa apatite, cuja extração maciça molda a economia da região. No verão, a tundra de montanha áspera transforma-se num mosaico colorido de líquenes e arbustos anões, tornando as Khibiny um íman para os caminhantes.",
      fr: "Le massif des Khibiny, sur la péninsule de Kola, est une curiosité géologique située au nord du cercle polaire, fascinante par sa structure unique en fer à cheval et ses versants abrupts. Ces montagnes anciennes et érodées se caractérisent par de vastes plateaux marquants qui s'interrompent brusquement pour former de profondes vallées en U, façonnées par d'immenses glaciers de l'ère glaciaire. Malgré leur faible altitude absolue, les falaises escarpées et les cirques profonds confèrent au massif un caractère résolument alpin et sauvage. Le massif est mondialement célèbre pour son immense richesse en minéraux rares, notamment la précieuse apatite, dont l'exploitation massive marque l'économie régionale. En été, la toundra de montagne rude se transforme en une mosaïque colorée de lichens et d'arbrisseaux nains, faisant des Khibiny un pôle d'attraction pour les randonneurs.",
    },
    factsAdvanced: {
      de: ["A hegység legmagasabb pontja a Judicsvumcsorr, amely 1201 méter magas", "Életkora a becslések szerint meghaladja a 350 millió évet", "A világ legnagyobb apatit- és nefelin-szienit lelőhelyét rejti", "Jellegzetes, U-alakú glaciális völgyek és lapos hegytetők alkotják", "A területen több mint 500 különböző ásványfaj található", "Gyűrű vagy patkó alakú, jellegzetes vulkáni intrúziós szerkezet", "Oroszország sarkvidéki területeinek egyik legkedveltebb túracélpontja", "Télen kiváló körülményeket biztosít az északi fény (aurora borealis) megfigyeléséhez"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de la montaña es el Yudychvumchorr, con 1201 metros", "Su edad se estima en más de 350 millones de años", "Alberga el depósito de apatita y sienita nefelínica más grande del mundo", "Está formado por valles glaciares en forma de U y cumbres planas características", "En el área se pueden encontrar más de 500 especies diferentes de minerales", "Tiene una estructura de intrusión volcánica característica en forma de anillo o herradura", "Es uno de los destinos de senderismo más populares en las zonas árticas de Rusia", "En invierno ofrece excelentes condiciones para observar la aurora boreal"],
      pt: ["O ponto mais alto da montanha é o Yudychvumchorr, com 1201 metros de altura", "A sua idade estima-se que exceda os 350 milhões de anos", "Esconde a maior jazida de apatite e nefelina sienito do mundo", "Composto por vales glaciares em forma de U característicos e topos de montanha planos", "Existem mais de 500 espécies diferentes de minerais na área", "Estrutura de intrusão vulcânica característica em forma de anel ou ferradura", "Um dos destinos de caminhada mais populares nas áreas árticas da Rússia", "No inverno, oferece excelentes condições para observar a aurora boreal"],
      fr: ["Le point culminant est le Ioudytchvoumttchorr, s'élevant à 1201 mètres", "Son âge est estimé à plus de 350 millions d'années", "Renferme le plus grand gisement mondial d'apatite et de syénite néphélinique", "Constitué de vallées glaciaires en U caractéristiques et de sommets plats", "On trouve plus de 500 espèces minérales différentes dans la région", "Structure d'intrusion volcanique caractéristique en forme d'anneau ou de fer à cheval", "L'une des destinations de randonnée les plus prisées de l'Arctique russe", "Offre d'excellentes conditions hivernales pour l'observation des aurores boréales"],
    },
    image: "/poi-images/russia-khibiny-mountains-relief-v2.webp",
},  {
    id: "russia-mount-dykh-tau-relief-v2", "sights": {
      "de": [
            {
                  "name": "Dychtau",
                  "text": "Der Dykhtau ist mit 5205 Metern der zweithöchste Berg im Kaukasus und in Europa.",
                  "category": "landmark",
                  "coords": [
                        43.133183,
                        43.052216
                  ]
            },
            {
                  "name": "Brno",
                  "text": "Ein markanter Berggipfel im Dykh-Tau-Massiv im Zentralkaukasus.",
                  "category": "landmark",
                  "coords": [
                        43.144416,
                        43.082835
                  ]
            },
            {
                  "name": "Pushkina",
                  "text": "Dieser Gipfel im Kaukasus ist nach dem berühmten russischen Dichter Alexander Puschkin benannt.",
                  "category": "landmark",
                  "coords": [
                        43.139691,
                        43.048677
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Dykhtau",
                  "text": "Az 5205 méter magas Gyih-tau a Kaukázus és Európa második legmagasabb csúcsa.",
                  "category": "landmark",
                  "coords": [
                        43.133183,
                        43.052216
                  ]
            },
            {
                  "name": "Brno",
                  "text": "Egy jellegzetes hegycsúcs a Középső-Kaukázusban található Gyih-tau-masszívumban.",
                  "category": "landmark",
                  "coords": [
                        43.144416,
                        43.082835
                  ]
            },
            {
                  "name": "Pushkina",
                  "text": "Ez a kaukázusi hegycsúcs a híres orosz költőről, Alekszandr Puskinról kapta a nevét.",
                  "category": "landmark",
                  "coords": [
                        43.139691,
                        43.048677
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Dykhtau",
                  "text": "Dykhtau este, cu 5205 metri, al doilea cel mai înalt vârf din Caucaz și din Europa.",
                  "category": "landmark",
                  "coords": [
                        43.133183,
                        43.052216
                  ]
            },
            {
                  "name": "Brno",
                  "text": "Un vârf montan proeminent în masivul Dykh-Tau din Caucazul Central.",
                  "category": "landmark",
                  "coords": [
                        43.144416,
                        43.082835
                  ]
            },
            {
                  "name": "Pushkina",
                  "text": "Acest vârf din Caucaz este numit după faimosul poet rus Aleksandr Pușkin.",
                  "category": "landmark",
                  "coords": [
                        43.139691,
                        43.048677
                  ]
            }
      ],
      "en": [
            {
                  "name": "Dykhtau",
                  "text": "Dykhtau is the second highest peak in the Caucasus and Europe, standing at 5,205 meters.",
                  "category": "landmark",
                  "coords": [
                        43.133183,
                        43.052216
                  ]
            },
            {
                  "name": "Brno",
                  "text": "A prominent mountain peak in the Dykh-Tau massif of the Central Caucasus.",
                  "category": "landmark",
                  "coords": [
                        43.144416,
                        43.082835
                  ]
            },
            {
                  "name": "Pushkin",
                  "text": "This peak in the Caucasus is named after the famous Russian poet Alexander Pushkin.",
                  "category": "landmark",
                  "coords": [
                        43.139691,
                        43.048677
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Dychtau", hu: "Dihtau", ro: "Muntele Dîhtau", en: "Mount Dykh-Tau"},
    image: "/poi-images/russia-mount-dykh-tau-relief-v2.webp",
    coords: [43.13, 43.05],
    coords: [43.13, 43.05],
    description: {
      de: "Der Dychtau ist der zweithöchste Berg Russlands und des Kaukasus. Er gilt als technisch deutlich anspruchsvoller zu besteigen als der nahegelegene Elbrus.",
      hu: "A Dihtau Oroszország és a Kaukázus második legmagasabb hegye. Megmászása technikailag jóval nehezebbnek számít, mint a közeli Elbruszé.",
      ro: "Muntele Dîhtau este al doilea cel mai înalt munte din Rusia și din Caucaz. Este considerat mult mai dificil tehnic decât vecinul său, Elbrus.",
      en: "Mount Dykh-Tau is the second-highest peak in Russia and the Caucasus. It is considered significantly more technically challenging to climb than nearby Elbrus.",
      es: "El Dykh-Tau es la segunda montaña más alta de Rusia y del Cáucaso. Se considera técnicamente mucho más difícil de escalar que el cercano Elbrus.",
      pt: "O Dykh-Tau é a segunda montanha mais alta da Rússia e do Cáucaso. É considerada tecnicamente muito mais difícil de escalar do que o vizinho Elbrus.",
      fr: "Le Dykh-Tau est le deuxième plus haut sommet de Russie et du Caucase. Il est considéré comme techniquement beaucoup plus difficile à gravir que l'Elbrouz voisin.",
    },
    facts: {
      de: ["Höhe von 5205 Metern", "Teil der Bezengi-Mauer", "Erstbesteigung durch Albert Mummery 1888", "Steile Granitwände prägen den Gipfel"],
      hu: ["5205 méter magas", "A Bezengi-fal része", "Albert Mummery mászta meg először 1888-ban", "Meredek gránitfalak jellemzik a csúcsot"],
      ro: ["Înălțime de 5205 metri", "Parte a peretelui Bezengi", "Prima ascensiune de Albert Mummery în 1888", "Pereți de granit abrupți la vârf"],
      en: ["Elevation of 5205 meters", "Part of the Bezengi Wall massif", "First climbed by Albert Mummery in 1888", "Steep granite faces define the summit"],
      es: ["Altura de 5205 metros", "Parte de la Pared de Bezengi", "Primera ascensión por Albert Mummery en 1888", "Paredes empinadas de granito caracterizan la cima"],
      pt: ["Altura de 5205 metros", "Parte da Muralha de Bezengi", "Primeira ascensão por Albert Mummery em 1888", "Paredes íngremes de granito caracterizam o cume"],
      fr: ["Hauteur de 5205 mètres", "Fait partie de la muraille de Bezengui", "Première ascension par Albert Mummery en 1888", "Des parois de granit escarpées marquent le sommet"],
    },
imageHint: "Sharp granite pyramid of Mount Dykh-Tau in the Caucasus",
    descriptionAdvanced: {
      de: "Der Dychtau, als zweithöchster Berg Russlands und des gesamten Kaukasus, erhebt sich als eine gewaltige, pyramidenförmige Bastion aus scharfkantigem Granit. Er ist Teil der berüchtigten Bezengi-Mauer, einem eisigen, extrem steilen Gebirgsmassiv, das selbst erfahrene Alpinisten mit Ehrfurcht erfüllt. Im Gegensatz zu den sanfteren, vulkanischen Hängen des benachbarten Elbrus ist der Dychtau berüchtigt für seine technisch äußerst anspruchsvollen, beinahe senkrechten Felswände und die ständige, massive Gefahr durch Lawinen und unvorhersehbare Steinschläge. Der Zugang zu den höheren Regionen ist durch zerklüftete Gletscher und tückische Eisfälle extrem erschwert. Nur wenige Elite-Bergsteiger wagen jährlich die Besteigung dieser majestätischen, ungebändigten Spitze, deren Wetterbedingungen binnen Minuten von strahlendem Sonnenschein zu tödlichen Schneestürmen wechseln können.",
      hu: "A Dihtau, Oroszország és az egész Kaukázus második legmagasabb hegycsúcsa, egy hatalmas, éles peremű gránitpiramisként magasodik a felhők fölé. A félelmetes hírű Bezengi-fal kulcsfontosságú eleme; ez a jéggel borított, rendkívül meredek masszívum még a legtapasztaltabb alpinistákból is mély tiszteletet vált ki. A közeli Elbrusz enyhébb, vulkáni lankáival ellentétben a Dihtau hírhedt a technikailag extrém nehéz, szinte függőleges sziklafalairól, valamint az állandó és súlyos lavina- és kőhullásveszélyről. A felsőbb régiók megközelítését a mély hasadékokkal szabdalt gleccserek és a kiszámíthatatlan jégesések teszik különösen veszélyessé. Évente csupán maroknyi elit hegymászó kísérli meg e zabolátlan, fenséges csúcs meghódítását, ahol a ragyogó napsütés perceken belül halálos hóviharba csaphat át.",
      ro: "Muntele Dîhtau, al doilea cel mai înalt vârf din Rusia și din întregul Caucaz, se înalță ca un bastion piramidal formidabil, tăiat în granit ascuțit. Face parte din temutul Perete Bezengi, un masiv muntos înghețat și extrem de abrupt, care impune respect profund chiar și celor mai experimentați alpiniști. Spre deosebire de pantele vulcanice mai blânde ale vecinului său, Elbrus, Dîhtau este faimos pentru pereții săi de stâncă aproape verticali, extrem de dificili din punct de vedere tehnic, și pentru pericolul constant și masiv de avalanșe și căderi de pietre. Accesul către altitudinile superioare este apărat de ghețari crevasați și cascade de gheață perfide. Doar o mână de cățărători de elită îndrăznesc anual să înfrunte acest vârf maiestuos și neîmblânzit, unde vremea se poate schimba din soare strălucitor în viscol letal în doar câteva minute.",
      en: "Mount Dykh-Tau, standing as the second-highest peak in Russia and the entire Caucasus, rises as a formidable, pyramidal bastion of razor-sharp granite. It serves as a cornerstone of the infamous Bezengi Wall, a heavily glaciated, staggeringly steep massif that commands profound respect from even the most seasoned alpinists. Unlike the gentler, volcanic slopes of nearby Mount Elbrus, Dykh-Tau is notorious for its technically extreme, near-vertical rock faces and the constant, severe threat of massive avalanches and unpredictable rockfalls. Access to its upper reaches is heavily guarded by intensely crevassed glaciers and treacherous icefalls. Only a select few elite mountaineers attempt the ascent of this majestic, untamed summit each year, where the weather can violently shift from clear skies to lethal blizzards in a matter of minutes.",
      es: "El Dykh-Tau, como segunda montaña más alta de Rusia y de todo el Cáucaso, se eleva como un imponente bastión piramidal de granito de bordes afilados. Forma parte de la infame Pared de Bezengi, un macizo montañoso helado y extremadamente empinado que inspira asombro incluso a los alpinistas experimentados. A diferencia de las laderas volcánicas más suaves del vecino Elbrus, el Dykh-Tau es notorio por sus paredes de roca casi verticales y técnicamente muy exigentes, así como por el peligro constante y masivo de avalanchas y desprendimientos de rocas impredecibles. El acceso a las regiones superiores se ve extremadamente dificultado por glaciares fracturados y traicioneras cascadas de hielo. Solo unos pocos alpinistas de élite se atreven anualmente a escalar este pico majestuoso e indómito, cuyas condiciones climáticas pueden cambiar en minutos de un sol radiante a tormentas de nieve mortales.",
      pt: "O Dykh-Tau, como segunda montanha mais alta da Rússia e de todo o Cáucaso, eleva-se como um imponente bastião piramidal de granito de arestas afiadas. Faz parte da infame Muralha de Bezengi, um maciço montanhoso gelado e extremamente íngreme que inspira admiração até nos alpinistas experientes. Ao contrário das encostas vulcânicas mais suaves do vizinho Elbrus, o Dykh-Tau é notório pelas suas paredes de rocha quase verticais e tecnicamente muito exigentes, bem como pelo perigo constante e massivo de avalanches e quedas de rochas imprevisíveis. O acesso às regiões superiores é extremamente dificultado por glaciares fracturados e traiçoeiras cascatas de gelo. Apenas alguns alpinistas de elite se atrevem anualmente a escalar este pico majestoso e indomado, cujas condições climáticas podem mudar em minutos de um sol radiante para tempestades de neve mortais.",
      fr: "Le Dykh-Tau, deuxième plus haut sommet de Russie et de tout le Caucase, se dresse comme un imposant bastion pyramidal en granit aux arêtes vives. Il fait partie de la célèbre muraille de Bezengui, un massif montagneux glacé et extrêmement escarpé qui inspire le respect même aux alpinistes chevronnés. Contrairement aux pentes volcaniques plus douces de l'Elbrouz voisin, le Dykh-Tau est réputé pour ses parois rocheuses presque verticales et techniquement très exigeantes, ainsi que pour le danger constant et massif d'avalanches et de chutes de pierres imprévisibles. L'accès aux régions supérieures est rendu extrêmement difficile par des glaciers crevassés et des chutes de glace traîtresses. Seuls quelques alpinistes d'élite osent chaque année l'ascension de ce sommet majestueux et indompté, dont les conditions météorologiques peuvent passer en quelques minutes d'un soleil radieux à des tempêtes de neige mortelles.",
    },
    factsAdvanced: {
      de: ["A Kaukázus és Oroszország második legmagasabb pontja, 5205 méterrel", "A félelmetes Bezengi-fal (a Kaukázus legmeredekebb gerince) meghatározó csúcsa", "Elsőként Albert Mummery és Heinrich Zarfluh mászta meg 1888-ban", "A csúcs megmászása az Elbrusznál lényegesen nehezebb és veszélyesebb", "Anyagát rendkívül kemény, meredek falakat alkotó kristályos gránit adja", "Lejtőin találhatók a Kaukázus legveszélyesebb lavinafolyosói", "A hegység északi oldalát hatalmas kiterjedésű, mozgó gleccserek borítják", "Megmászása fejlett szikla- és jégmászó technikát, elit tudást igényel"],
      hu: [],
      ro: [],
      en: [],
      es: ["Es el segundo punto más alto del Cáucaso y de Rusia, con 5205 metros", "Es el pico dominante de la temible Pared de Bezengi (la cresta más empinada del Cáucaso)", "Fue escalado por primera vez por Albert Mummery y Heinrich Zarfluh en 1888", "Escalar la cima es significativamente más difícil y peligroso que el Elbrus", "Su material está compuesto por granito cristalino extremadamente duro que forma paredes empinadas", "En sus laderas se encuentran los corredores de avalanchas más peligrosos del Cáucaso", "El lado norte de la montaña está cubierto por glaciares en movimiento de gran extensión", "Su ascenso requiere técnicas avanzadas de escalada en roca y hielo, conocimientos de élite"],
      pt: ["É o segundo ponto mais alto do Cáucaso e da Rússia, com 5205 metros", "É o pico dominante da temível Muralha de Bezengi (a crista mais íngreme do Cáucaso)", "Foi escalado pela primeira vez por Albert Mummery e Heinrich Zarfluh em 1888", "Escalar o cume é significativamente mais difícil e perigoso do que o Elbrus", "O seu material é composto por granito cristalino extremamente duro que forma paredes íngremes", "Nas suas encostas encontram-se os corredores de avalanches mais perigosos do Cáucaso", "O lado norte da montanha está coberto por glaciares em movimento de grande extensão", "A sua ascensão requer técnicas avançadas de escalada em rocha e gelo, conhecimentos de elite"],
      fr: ["Deuxième point culminant du Caucase et de la Russie avec 5205 mètres", "Sommet dominant de la redoutable muraille de Bezengui (la crête la plus raide du Caucase)", "Gravi pour la première fois par Albert Mummery et Heinrich Zarfluh en 1888", "L'ascension du sommet est nettement plus difficile et dangereuse que celle de l'Elbrouz", "Sa roche est composée de granit cristallin extrêmement dur formant des parois raides", "Ses pentes abritent les couloirs d'avalanches les plus dangereux du Caucase", "Le versant nord de la montagne est couvert par de vastes glaciers en mouvement", "Son ascension nécessite des techniques avancées d'escalade et une expertise d'élite"],
    },
    image: "/poi-images/russia-mount-dykh-tau-relief-v2.webp",
},  {
    id: "russia-mount-koshtan-tau-relief-v2", "sights": {
      "de": [
            {
                  "name": "Kabardino-Balkarisches Hochgebirgs-Naturreservat",
                  "text": "Ein Hochgebirgs-Naturschutzgebiet im Kaukasus mit reicher Flora und Fauna.",
                  "category": "natural",
                  "coords": [
                        43.212619,
                        43.056583
                  ]
            },
            {
                  "name": "Koschtantau",
                  "text": "Einer der höchsten Gipfel des Kaukasus-Gebirges an der Grenze zu Georgien.",
                  "category": "landmark",
                  "coords": [
                        43.213472,
                        43.050028
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kabardino-Balkarskii vysokogornyi zapovednik",
                  "text": "Kaukázusi magashegyi természetvédelmi terület gazdag növény- és állatvilággal.",
                  "category": "natural",
                  "coords": [
                        43.212619,
                        43.056583
                  ]
            },
            {
                  "name": "Koshtantau",
                  "text": "A Kaukázus egyik legmagasabb csúcsa a grúz határ közelében.",
                  "category": "landmark",
                  "coords": [
                        43.213472,
                        43.050028
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kabardino-Balkarskii vysokogornyi zapovednik",
                  "text": "O rezervație naturală montană din Caucaz, cu o floră și faună diversă.",
                  "category": "natural",
                  "coords": [
                        43.212619,
                        43.056583
                  ]
            },
            {
                  "name": "Koshtantau",
                  "text": "Unul dintre cele mai înalte vârfuri din Munții Caucaz, situat lângă granița cu Georgia.",
                  "category": "landmark",
                  "coords": [
                        43.213472,
                        43.050028
                  ]
            }
      ],
      "en": [
            {
                  "name": "Kabardino-Balkarski Nature Reserve",
                  "text": "A high-altitude nature reserve in the Caucasus with rich flora and fauna.",
                  "category": "natural",
                  "coords": [
                        43.212619,
                        43.056583
                  ]
            },
            {
                  "name": "Koshtantau",
                  "text": "One of the highest peaks of the Caucasus Mountains near the Georgian border.",
                  "category": "landmark",
                  "coords": [
                        43.213472,
                        43.050028
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Koschtantau", hu: "Kostantau", ro: "Muntele Koștantau", en: "Mount Koshtan-Tau"},
    image: "/poi-images/russia-mount-koshtan-tau-relief-v2.webp",
    coords: [43.21, 43.05],
    coords: [43.21, 43.05],
    description: {
      de: "Der Koschtantau ist einer der markantesten Fünftausender im Kaukasus. Er bildet das östliche Ende der berühmten Bezengi-Region.",
      hu: "A Kostantau a Kaukázus egyik leglátványosabb ötezer méter feletti csúcsa. A híres Bezengi-régió keleti végét alkotja.",
      ro: "Muntele Koștantau este unul dintre cei mai spectaculoși 'cinci-miari' din Caucaz. Formează extremitatea estică a celebrei regiuni Bezengi.",
      en: "Mount Koshtan-Tau is one of the most striking 5000-meter peaks in the Caucasus. It forms the eastern end of the famous Bezengi region.",
      es: "El Koshtan-Tau es uno de los picos de cinco mil metros más destacados del Cáucaso. Forma el extremo oriental de la famosa región de Bezengi.",
      pt: "O Koshtan-Tau é um dos picos de cinco mil metros mais destacados do Cáucaso. Forma a extremidade oriental da famosa região de Bezengi.",
      fr: "Le Koshtan-Tau est l'un des sommets de plus de cinq mille mètres les plus marquants du Caucase. Il constitue l'extrémité orientale de la célèbre région de Bezengui.",
    },
    facts: {
      de: ["Höhe von 5151 Metern", "Vierter Gipfel Russlands", "Erfolgreiche Erstbesteigung 1889", "Gilt als extrem lawinengefährlich"],
      hu: ["5151 méter magas", "Oroszország negyedik legmagasabb csúcsa", "Első sikeres megmászása 1889-ben volt", "Rendkívül lavinaveszélyesnek tartják"],
      ro: ["Înălțime de 5151 metri", "Al patrulea vârf ca înălțime din Rusia", "Prima ascensiune reușită în 1889", "Considerat extrem de periculos din cauza avalanșelor"],
      en: ["Elevation of 5151 meters", "Fourth highest peak in Russia", "First successful climb in 1889", "Known for being extremely avalanche-prone"],
      es: ["Altura de 5151 metros", "Cuarta cumbre de Rusia", "Primera ascensión exitosa en 1889", "Considerado extremadamente peligroso por avalanchas"],
      pt: ["Altura de 5151 metros", "Quarto cume da Rússia", "Primeira ascensão bem-sucedida em 1889", "Considerado extremamente perigoso por avalanches"],
      fr: ["Hauteur de 5151 mètres", "Quatrième sommet de Russie", "Première ascension réussie en 1889", "Considéré comme extrêmement exposé aux avalanches"],
    },
imageHint: "Snowy peak of Mount Koshtan-Tau against blue sky",
    descriptionAdvanced: {
      de: "Der Koschtantau ist einer der markantesten und am schwersten zugänglichen Fünftausender im Kaukasus und dominiert das östliche Ende des zerklüfteten Bezengi-Massivs. Er präsentiert sich als eine gewaltige, schroffe Felsenpyramide, deren Nord- und Ostwände von mächtigen, steil abfallenden Hängegletschern bedeckt sind. Aufgrund der extremen Steilheit und der instabilen Wetterverhältnisse gilt der Berg als äußerst lawinengefährlich und ist berüchtigt für plötzliche, massive Eis- und Felsabbrüche. Die Erschließung dieses eisigen Riesen ist ein Meilenstein der kaukasischen Alpingeschichte; die erfolgreiche Erstbesteigung im späten 19. Jahrhundert verlangte den Alpinisten außergewöhnliches Können und Mut ab. Auch heute bleibt der Koschtantau ein exklusives Ziel für Elite-Bergsteiger, die eine der härtesten alpinen Herausforderungen Russlands suchen, abseits der stark frequentierten Routen des Elbrus.",
      hu: "A Kostantau a Kaukázus egyik leglátványosabb, egyben legnehezebben megközelíthető ötezer méter feletti csúcsa, amely a zord Bezengi-masszívum keleti lezárását alkotja. Hatalmas, csipkézett sziklapiramisként tornyosul a táj fölé, északi és keleti falait hatalmas, meredeken leszakadó függőgleccserek borítják. Az extrém dőlésszögű lejtők és a rendkívül labilis kaukázusi időjárás miatt a hegy hírhedten lavinaveszélyes; a gyakori és kiszámíthatatlan jég- és kőomlások folyamatos életveszélyt jelentenek. E fagyos óriás meghódítása a hegymászás történetének egyik fontos mérföldköve, az első sikeres 19. század végi expedíció kivételes bátorságot követelt. A Kostantau ma is az elit alpinisták exkluzív célpontja maradt, akik a túlzsúfolt Elbrusszal szemben Oroszország egyik legkeményebb, igazi alpesi kihívását keresik.",
      ro: "Muntele Koștantau este unul dintre cei mai impunători și greu accesibili 'cinci-miari' din Caucaz, dominând extremitatea estică a masivului accidentat Bezengi. Se prezintă ca o piramidă uriașă și colțuroasă de stâncă, ale cărei fețe nordice și estice sunt acoperite de ghețari suspendați masivi, cu pante foarte abrupte. Datorită înclinației extreme a versanților și instabilității meteorologice caracteristice Caucazului, muntele este considerat extrem de predispus la avalanșe, fiind faimos pentru căderile bruște și masive de gheață și stâncă. Cucerirea acestui gigant înghețat a marcat o bornă în istoria alpinismului caucazian; prima ascensiune de la sfârșitul secolului al XIX-lea a cerut curaj și abilități excepționale. Astăzi, Koștantau rămâne o destinație exclusivistă pentru elita alpinismului, oferind una dintre cele mai dure provocări tehnice din Rusia, departe de rutele aglomerate ale Elbrusului.",
      en: "Mount Koshtan-Tau is one of the most visually striking and difficult-to-access 5000-meter peaks in the Caucasus, anchoring the eastern end of the formidable Bezengi massif. It looms as a massive, jagged pyramid of rock, with its northern and eastern faces heavily burdened by massive, steeply pitched hanging glaciers. Due to the extreme gradient of its slopes and the notoriously volatile Caucasian weather, the mountain is exceptionally avalanche-prone and infamous for sudden, devastating ice and rock falls. Conquering this icy titan was a monumental achievement in the history of mountaineering; its first successful ascent in the late 19th century demanded extraordinary courage and technical skill. Today, Koshtan-Tau remains a highly exclusive objective for elite alpinists seeking one of Russia's most unforgiving and pure alpine challenges, far removed from the crowded slopes of Mount Elbrus.",
      es: "El Koshtan-Tau es uno de los picos de cinco mil metros más impresionantes y difíciles de acceder en el Cáucaso, dominando el extremo oriental del accidentado macizo de Bezengi. Se presenta como una enorme y escarpada pirámide de roca, cuyas paredes norte y este están cubiertas por glaciares colgantes potentes y muy empinados. Debido a la extrema inclinación y las condiciones climáticas inestables, la montaña se considera sumamente peligrosa por avalanchas y es notoria por desprendimientos masivos y repentinos de hielo y roca. La conquista de este gigante helado es un hito en la historia alpina del Cáucaso; la exitosa primera ascensión a finales del siglo XIX exigió de los alpinistas una habilidad y valentía extraordinarias. Incluso hoy, el Koshtan-Tau sigue siendo un destino exclusivo para montañistas de élite que buscan uno de los desafíos alpinos más duros de Rusia, lejos de las rutas muy frecuentadas del Elbrus.",
      pt: "O Koshtan-Tau é um dos picos de cinco mil metros mais impressionantes e difíceis de aceder no Cáucaso, dominando a extremidade oriental do acidentado maciço de Bezengi. Apresenta-se como uma enorme e escarpada pirâmide de rocha, cujas paredes norte e leste estão cobertas por glaciares suspensos potentes e muito íngremes. Devido à extrema inclinação e às condições climáticas instáveis, a montanha é considerada sumamente perigosa por avalanches e é notória por quedas massivas e repentinas de gelo e rocha. A conquista deste gigante gelado é um marco na história alpina do Cáucaso; a bem-sucedida primeira ascensão no final do século XIX exigiu dos alpinistas uma habilidade e coragem extraordinárias. Mesmo hoje, o Koshtan-Tau continua a ser um destino exclusivo para montanhistas de elite que procuram um dos desafios alpinos mais duros da Rússia, longe das rotas muito frequentadas do Elbrus.",
      fr: "Le Koshtan-Tau est l'un des sommets de cinq mille mètres les plus marquants et les plus difficiles d'accès du Caucase, dominant l'extrémité orientale du massif accidenté de Bezengui. Il se présente comme une immense pyramide rocheuse escarpée, dont les parois nord et est sont recouvertes de puissants glaciers suspendus aux pentes raides. En raison de l'inclinaison extrême et de l'instabilité météorologique, la montagne est considérée comme extrêmement exposée aux avalanches et réputée pour ses chutes massives et soudaines de glace et de roche. L'exploration de ce géant de glace est un jalon de l'histoire de l'alpinisme caucasien ; la première ascension réussie à la fin du XIXe siècle a exigé des alpinistes un talent et un courage exceptionnels. Aujourd'hui encore, le Koshtan-Tau reste une destination exclusive pour les alpinistes d'élite à la recherche de l'un des défis les plus rudes de Russie, loin des itinéraires très fréquentés de l'Elbrouz.",
    },
    factsAdvanced: {
      de: ["A csúcs tengerszint feletti magassága pontosan 5151 méter", "Oroszország és a Kaukázus negyedik legmagasabb hegycsúcsa", "A félelmetes Bezengi-régió ('Orosz Himalája') keleti bástyája", "Első sikeres megmászása 1889-ben Herman Woolley nevéhez fűződik", "Rendkívül meredek, gyakran 50-60 fokos jég- és hólejtők jellemzik", "A hegy északi oldalát folyamatosan aktív függőgleccserek borítják", "A Kaukázus egyik legmagasabb lavina- és kőhullás-veszélyű zónája", "Megközelítése többnapos, technikás gleccsertúrát igényel"],
      hu: [],
      ro: [],
      en: [],
      es: ["La altitud del pico sobre el nivel del mar es exactamente de 5151 metros", "Es el cuarto pico más alto de Rusia y del Cáucaso", "Es el bastión oriental de la temible región de Bezengi ('Himalaya ruso')", "La primera ascensión exitosa en 1889 se atribuye a Herman Woolley", "Se caracteriza por laderas de hielo y nieve muy empinadas, a menudo de 50-60 grados", "El lado norte de la montaña está cubierto por glaciares colgantes continuamente activos", "Es una de las zonas del Cáucaso con mayor riesgo de avalanchas y caída de rocas", "Su acceso requiere una caminata técnica por glaciares de varios días"],
      pt: ["A altitude do pico acima do nível do mar é exatamente de 5151 metros", "É o quarto pico mais alto da Rússia e do Cáucaso", "É o bastião oriental da temível região de Bezengi ('Himalaia russo')", "A primeira ascensão bem-sucedida em 1889 é atribuída a Herman Woolley", "Caracteriza-se por encostas de gelo e neve muito íngremes, muitas vezes de 50-60 graus", "O lado norte da montanha está coberto por glaciares suspensos continuamente ativos", "É uma das zonas do Cáucaso com maior risco de avalanches e queda de rochas", "O seu acesso requer uma caminhada técnica por glaciares de vários dias"],
      fr: ["L'altitude du sommet est exactement de 5151 mètres au-dessus du niveau de la mer", "Quatrième plus haut sommet de Russie et du Caucase", "Bastion oriental de la redoutable région de Bezengui (« l'Himalaya russe »)", "Première ascension réussie en 1889 par Herman Woolley", "Caractérisé par des pentes de glace et de neige très raides, souvent de 50 à 60 degrés", "Le versant nord est couvert de glaciers suspendus continuellement actifs", "L'une des zones les plus exposées aux avalanches et aux chutes de pierres du Caucase", "Son accès nécessite une randonnée glaciaire technique de plusieurs jours"],
    },
    image: "/poi-images/russia-mount-koshtan-tau-relief-v2.webp",
},  {
    id: "russia-mount-pobeda-relief-v2", "sights": {
      "de": [
            {
                  "name": "Pobeda",
                  "text": "Der höchste Punkt des Tscherskigebirges, der inmitten der vergletscherten Gipfel Jakutiens auf 3.003 Meter ansteigt.",
                  "category": "natural",
                  "coords": [
                        146.010922,
                        65.177351
                  ]
            },
            {
                  "name": "Natsional'nyi prirodnyi park << Momskii>>",
                  "text": "Ein Naturschutzgebiet mit dem erloschenen Vulkan Balagan-Tas und dem weiten Tal des Flusses Moma.",
                  "category": "natural",
                  "coords": [
                        146.06644,
                        65.155386
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Pobeda",
                  "text": "A Cserszkij-hegység legmagasabb pontja, amely 3003 méter magasan emelkedik Jakutföld eljegesedett csúcsai között.",
                  "category": "natural",
                  "coords": [
                        146.010922,
                        65.177351
                  ]
            },
            {
                  "name": "Natsional'nyi prirodnyi park << Momskii>>",
                  "text": "Természetvédelmi terület, ahol a kialudt Balagan-Tas vulkán és a Moma-folyó széles völgye található.",
                  "category": "natural",
                  "coords": [
                        146.06644,
                        65.155386
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Pobeda",
                  "text": "Cel mai înalt punct al lanțului muntos Cerski, ridicându-se la 3.003 metri printre vârfurile glaciare din Iacuția.",
                  "category": "natural",
                  "coords": [
                        146.010922,
                        65.177351
                  ]
            },
            {
                  "name": "Natsional'nyi prirodnyi park << Momskii>>",
                  "text": "O rezervație naturală care include vulcanul stins Balagan-Tas și valea largă a râului Moma.",
                  "category": "natural",
                  "coords": [
                        146.06644,
                        65.155386
                  ]
            }
      ],
      "en": [
            {
                  "name": "Peak Pobeda",
                  "text": "The highest point of the Chersky Range, rising to 3,003 meters amidst the glaciated peaks of Yakutia.",
                  "category": "natural",
                  "coords": [
                        146.010922,
                        65.177351
                  ]
            },
            {
                  "name": "Natsional'nyi prirodnyi park << Momskii>>",
                  "text": "A nature reserve featuring the extinct Balagan-Tas volcano and the wide Moma River valley.",
                  "category": "natural",
                  "coords": [
                        146.06644,
                        65.155386
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Pik Pobeda (Sacha)", hu: "Pobeda-csúcs", ro: "Vârful Pobeda", en: "Mount Pobeda"},
    image: "/poi-images/russia-mount-pobeda-relief-v2.webp",
    coords: [146.0, 65.17],
    coords: [146.0, 65.17],
    description: {
      de: "Der Pik Pobeda ist der höchste Berg des Tschersky-Gebirges in Jakutien. Er liegt sehr nah am nördlichen Polarkreis in einer extrem kalten Region.",
      hu: "A Pobeda-csúcs a Cserszkij-hegység legmagasabb pontja Jakutföldön. Nagyon közel fekszik az északi sarkkörhöz egy rendkívül hideg vidéken.",
      ro: "Vârful Pobeda este cel mai înalt munte din Munții Cerski, în Iacuția. Este situat foarte aproape de Cercul Polar într-o regiune extrem de rece.",
      en: "Mount Pobeda is the highest peak of the Chersky Range in Yakutia. It is located very close to the Arctic Circle in an extremely cold region.",
      es: "El Pico Pobeda es la montaña más alta de la cordillera Chersky en Yakutia. Se encuentra muy cerca del círculo polar ártico en una región de frío extremo.",
      pt: "O Pico Pobeda é a montanha mais alta da cordillera Chersky, em Yakutia. Está localizado muito perto do círculo polar ártico, numa região de frio extremo.",
      fr: "Le pic Pobeda est le point culminant des monts Tcherski en Iakoutie. Il est situé très près du cercle polaire arctique dans une région au froid extrême.",
    },
    facts: {
      de: ["Höhe von 3003 Metern", "Höchster Berg im Nordosten Russlands", "Sehr schwierige logistische Erreichbarkeit", "Ganzjährig vergletschert"],
      hu: ["3003 méter magas", "Északkelet-Oroszország legmagasabb hegye", "Logisztikailag nagyon nehezen megközelíthető", "Egész évben gleccserek borítják"],
      ro: ["Înălțime de 3003 metri", "Cel mai înalt munte din nord-estul Rusiei", "Accesibilitate logistică foarte dificilă", "Acoperit de ghețari permanenți"],
      en: ["Elevation of 3003 meters", "Highest mountain in northeastern Russia", "Logistically very difficult to access", "Glaciated throughout the year"],
      es: ["Altura de 3003 metros", "Montaña más alta del noreste de Rusia", "Accesibilidad logística muy difícil", "Glaciares durante todo el año"],
      pt: ["Altura de 3003 metros", "Montanha mais alta do nordeste da Rússia", "Acessibilidade logística muito difícil", "Glaciares durante todo o ano"],
      fr: ["Altitude de 3003 mètres", "Plus haute montagne du nord-est de la Russie", "Accessibilité logistique très difficile", "Englacé toute l'année"],
    },
imageHint: "Isolated snowy peak of Mount Pobeda in Yakutia",
    descriptionAdvanced: {
      de: "Der Pik Pobeda im fernen Jakutien ist das unbestrittene Dach des Tschersky-Gebirges und der höchste Punkt im gesamten Nordosten Russlands. Gelegen in einer der lebensfeindlichsten Regionen der Erde, nur gut 140 Kilometer südlich des Polarkreises, ist dieser Berg ein Ort absoluter Extreme. Die gewaltige Granitspitze ist ganzjährig von mächtigen Gletschern und ewigem Schnee bedeckt, was ihn optisch massiv von der umliegenden, kargen Tundralandschaft abhebt. Das extrem kontinentale Klima sorgt hier für unvorstellbar kalte, monatelange Winter, in denen die Temperaturen regelmäßig auf unter -50 °C fallen. Aufgrund seiner enormen geografischen Isolation, des Fehlens jeglicher Infrastruktur und der brutalen Wetterbedingungen ist der Pik Pobeda logistisch einer der am schwersten zugänglichen Berge der Welt und wird nur äußerst selten von Expeditionen aufgesucht.",
      hu: "A távoli Jakutföldön tornyosuló Pobeda-csúcs a Cserszkij-hegység vitathatatlan 'tetőpontja', egyben egész Északkelet-Oroszország legmagasabb hegye. A bolygó egyik leginkább életellenes vidékén, az északi sarkkörtől alig 140 kilométerre délre fekvő csúcs az abszolút végletek birodalma. A hatalmas gránittömböt egész évben vastag gleccserek és örök hó borítja, drámaian kiemelve a környező, végtelenül kietlen hegyi tundrából. A szélsőségesen kontinentális éghajlat elképesztően fagyos, hosszú hónapokig tartó teleket hoz, amikor a hőmérséklet rutinszerűen -50 °C alá zuhan. Elképesztő földrajzi elszigeteltsége, az utak és infrastruktúra teljes hiánya, valamint a brutális időjárás miatt a Pobeda-csúcs logisztikailag a világ egyik legnehezebben megközelíthető hegye, amelyet csak nagyon ritkán, komoly expedíciók keretében látogatnak.",
      ro: "Vârful Pobeda, situat în îndepărtata Iacuție, este acoperișul incontestabil al Munților Cerski și cel mai înalt punct din întregul nord-est al Rusiei. Aflat într-una dintre cele mai inospitaliere regiuni de pe Pământ, la doar 140 de kilometri sud de Cercul Polar, acest munte este un tărâm al extremelor absolute. Masivul de granit este acoperit pe tot parcursul anului de ghețari puternici și zăpadă eternă, remarcându-se printr-un contrast vizual puternic față de peisajul arid de tundră care îl înconjoară. Climatul continental extrem generează ierni inimaginabil de reci și prelungite, în care temperaturile coboară în mod regulat sub -50 °C. Datorită izolării sale geografice enorme, lipsei totale a infrastructurii și condițiilor meteorologice brutale, Vârful Pobeda este unul dintre cei mai greu accesibili munți din lume din punct de vedere logistic, fiind vizitat foarte rar de expediții.",
      en: "Mount Pobeda, situated in remote Yakutia, is the undisputed crown of the Chersky Range and the highest elevation in the entirety of northeastern Russia. Located in one of the most inhospitable environments on Earth, just 140 kilometers south of the Arctic Circle, this mountain is a realm of absolute extremes. The massive granite peak is permanently shrouded in thick glaciers and eternal snow, creating a stark visual contrast against the surrounding barren tundra landscape. The fiercely extreme continental climate subjects the area to unimaginably frigid, months-long winters where temperatures routinely plummet below -50 °C. Because of its tremendous geographical isolation, the complete absence of surrounding infrastructure, and the brutal weather, Mount Pobeda is logistically one of the most difficult mountains in the world to access, seeing only very rare, highly organized expeditions.",
      es: "El Pico Pobeda, en la remota Yakutia, es el techo indiscutible de la cordillera Chersky y el punto más alto de todo el noreste de Rusia. Situada en una de las regiones más inhóspitas de la Tierra, a poco más de 140 kilómetros al sur del círculo polar ártico, esta montaña es un lugar de extremos absolutos. Su enorme pico de granito está cubierto de poderosos glaciares y nieve eterna durante todo el año, lo que lo hace destacar visualmente del árido paisaje de tundra circundante. El clima extremadamente continental garantiza inviernos increíblemente fríos que duran meses, con temperaturas que caen regularmente por debajo de los -50 °C. Debido a su enorme aislamiento geográfico, la falta de infraestructuras y las brutales condiciones meteorológicas, el Pico Pobeda es logísticamente una de las montañas más inaccesibles del mundo y rara vez es visitada por expediciones.",
      pt: "O Pico Pobeda, na remota Yakutia, é o teto indiscutível da cordilheira Chersky e o ponto mais alto de todo o nordeste da Rússia. Situada numa das regiões mais inóspitas da Terra, a pouco mais de 140 quilómetros a sul do círculo polar ártico, esta montanha é um lugar de extremos absolutos. O enorme pico de granito está coberto por glaciares poderosos e neve eterna durante todo o ano, o que o destaca visualmente da paisagem árida da tundra circundante. O clima extremamente continental garante invernos incrivelmente frios que duram meses, com temperaturas que caem regularmente abaixo dos -50 °C. Devido ao seu enorme isolamento geográfico, à falta de infraestruturas e às condições meteorológicas brutais, o Pico Pobeda é logisticamente uma das montanhas mais inacessíveis do mundo e raramente é visitado por expedições.",
      fr: "Le pic Pobeda, dans la lointaine Iakoutie, est le toit incontesté des monts Tcherski et le point culminant de tout le nord-est de la Russie. Située dans l'une des régions les plus inhospitalières de la Terre, à un peu plus de 140 kilomètres au sud du cercle polaire arctique, cette montagne est un lieu d'extrêmes absolus. Le massif sommet de granit est recouvert toute l'année de puissants glaciers et de neiges éternelles, ce qui le distingue visuellement du paysage aride de la toundra environnante. Le climat extrêmement continental y engendre des hivers incroyablement froids durant plusieurs mois, où les températures descendent régulièrement sous les -50 °C. En raison de son immense isolement géographique, de l'absence totale d'infrastructures et des conditions météorologiques brutales, le pic Pobeda est logistiquement l'une des montagnes les plus difficiles d'accès au monde et n'est que très rarement visité par des expéditions.",
    },
    factsAdvanced: {
      de: ["Északkelet-Szibéria legmagasabb pontja, 3003 méterrel a tengerszint felett", "A hegy alig 140 kilométerre fekszik az északi sarkkörtől", "Állandó gleccserek borítják, amelyek a völgyekbe is leereszkednek", "A téli hónapokban a hőmérséklet gyakran eléri a -50, -60 Celsius-fokot", "A legközelebbi lakott település és út is több száz kilométerre található", "Csak 1966-ban mászta meg az első sikeres szovjet hegymászó expedíció", "Megközelítése általában csak helikopterrel vagy hetekig tartó sítúrával lehetséges", "A csúcs régiója rendkívül erős, viharos sarkvidéki szeleknek van kitéve"],
      hu: [],
      ro: [],
      en: [],
      es: ["Punto más alto del noreste de Siberia, con 3003 metros sobre el nivel del mar", "La montaña se encuentra a apenas 140 kilómetros del círculo polar ártico", "Cubierta por glaciares permanentes que descienden hacia los valles", "En los meses de invierno, la temperatura alcanza a menudo los -50 o -60 grados centígrados", "El asentamiento y la carretera más cercanos se encuentran a cientos de kilómetros", "Escalada por primera vez con éxito por una expedición soviética en 1966", "El acceso suele ser posible solo en helicóptero o mediante expediciones de esquí de semanas", "La región de la cumbre está expuesta a vientos árticos extremadamente fuertes y tormentosos"],
      pt: ["Ponto mais alto do nordeste da Sibéria, com 3003 metros acima do nível do mar", "A montanha fica a apenas 140 quilómetros do círculo polar ártico", "Coberta por glaciares permanentes que descem para os vales", "Nos meses de inverno, a temperatura atinge frequentemente os -50 ou -60 graus Celsius", "A povoação e a estrada mais próximas encontram-se a centenas de quilómetros", "Escalada pela primeira vez com sucesso por uma expedição soviética em 1966", "O acesso é geralmente possível apenas por helicóptero ou por expedições de esqui de semanas", "A região do cume está exposta a ventos árticos extremamente fortes e tempestuosos"],
      fr: ["Point culminant de la Sibérie orientale avec 3003 mètres d'altitude", "La montagne est située à peine à 140 kilomètres du cercle polaire arctique", "Couverte de glaciers permanents qui descendent jusque dans les vallées", "En hiver, la température descend souvent entre -50 et -60 degrés Celsius", "Le village et la route les plus proches se trouvent à des centaines de kilomètres", "Gravie pour la première fois avec succès par une expédition soviétique en 1966", "L'accès n'est possible qu'en hélicoptère ou par des randonnées à ski de plusieurs semaines", "La région du sommet est exposée à des vents arctiques extrêmement violents"],
    },
    image: "/poi-images/russia-mount-pobeda-relief-v2.webp",
},  {
    id: "russia-mount-munku-sardyk-relief-v2", "sights": {
      "de": [
            {
                  "name": "Munku-Sardyk",
                  "text": "Mit 3.491 Metern ist der Munku-Sardyk der höchste Gipfel des Sajan-Gebirges an der Grenze zwischen Russland und der Mongolei.",
                  "category": "landmark",
                  "coords": [
                        100.597055,
                        51.718833
                  ]
            },
            {
                  "name": "Sviashchennaia stupa Prosvetleniia",
                  "text": "Diese weiße Stupa der Erleuchtung steht in der alpinen Tundra des Munku-Sardyk als Symbol für Frieden.",
                  "category": "religious",
                  "coords": [
                        100.708865,
                        51.770437
                  ]
            },
            {
                  "name": "Sviashchennye vrata \"Nukhen Dabaan\"",
                  "text": "Ein natürliches Felsentor am Munku-Sardyk, das von Einheimischen als heiliger Durchgang zu den Berggöttern verehrt wird.",
                  "category": "religious",
                  "coords": [
                        100.689736,
                        51.781653
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Munku-Sardyk",
                  "text": "A 3491 méter magas Munku-Szardik a Szaján-hegység legmagasabb csúcsa az orosz-mongol határon.",
                  "category": "landmark",
                  "coords": [
                        100.597055,
                        51.718833
                  ]
            },
            {
                  "name": "Sviashchennaia stupa Prosvetleniia",
                  "text": "Ez a fehér Megvilágosodás-sztúpa a Munku-Szardik alpesi tundráján áll a béke szimbólumaként.",
                  "category": "religious",
                  "coords": [
                        100.708865,
                        51.770437
                  ]
            },
            {
                  "name": "Sviashchennye vrata \"Nukhen Dabaan\"",
                  "text": "Természetes sziklakapu a Munku-Szardikon, amelyet a helyiek a hegyi istenekhez vezető szent átjáróként tisztelnek.",
                  "category": "religious",
                  "coords": [
                        100.689736,
                        51.781653
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Munku-Sardyk",
                  "text": "Cu o înălțime de 3.491 de metri, Munku-Sardîk este cel mai înalt vârf din Munții Saian, situat la granița ruso-mongolă.",
                  "category": "landmark",
                  "coords": [
                        100.597055,
                        51.718833
                  ]
            },
            {
                  "name": "Sviashchennaia stupa Prosvetleniia",
                  "text": "Această stupă albă a Iluminării se află în tundra alpină de pe Munku-Sardîk ca simbol al păcii.",
                  "category": "religious",
                  "coords": [
                        100.708865,
                        51.770437
                  ]
            },
            {
                  "name": "Sviashchennye vrata \"Nukhen Dabaan\"",
                  "text": "O poartă naturală de stâncă pe Munku-Sardîk, venerată de localnici ca o trecere sacră către zeii munților.",
                  "category": "religious",
                  "coords": [
                        100.689736,
                        51.781653
                  ]
            }
      ],
      "en": [
            {
                  "name": "Munku-Sardyk",
                  "text": "Rising to 3,491 metres, Munku-Sardyk is the highest peak of the Sayan Mountains on the Russian-Mongolian border.",
                  "category": "landmark",
                  "coords": [
                        100.597055,
                        51.718833
                  ]
            },
            {
                  "name": "Sviashchennaia stupa Prosvetleniia",
                  "text": "This white Stupa of Enlightenment stands in the alpine tundra of Munku-Sardyk as a symbol of peace.",
                  "category": "religious",
                  "coords": [
                        100.708865,
                        51.770437
                  ]
            },
            {
                  "name": "Sviashchennye vrata \"Nukhen Dabaan\"",
                  "text": "A natural rock gate on Munku-Sardyk revered by locals as a sacred passage to the mountain gods.",
                  "category": "religious",
                  "coords": [
                        100.689736,
                        51.781653
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Munku Sardyk", hu: "Munku-Szardik", ro: "Munku Sardîk", en: "Mount Munku-Sardyk"},
    image: "/poi-images/russia-mount-munku-sardyk-relief-v2.webp",
    coords: [100.59, 51.72],
    coords: [100.59, 51.72],
    description: {
      de: "Der Munku Sardyk ist der höchste Gipfel des Ostsajan-Gebirges an der Grenze zwischen Russland und der Mongolei. Der Name bedeutet 'Ewiger Silberberg'.",
      hu: "A Munku-Szardik a Keleti-Szaján legmagasabb csúcsa az orosz-mongol határon. Neve 'örök ezüsthegyet' jelent.",
      ro: "Munku Sardîk este cel mai înalt vârf din Saianul de Est, la granița dintre Rusia și Mongolia. Numele său înseamnă 'Muntele de Argint Veșnic'.",
      en: "Mount Munku-Sardyk is the highest peak of the Eastern Sayan range on the border between Russia and Mongolia. Its name means 'Eternal Silver Mountain'.",
      es: "El Munku-Sardyk es el pico más alto de las montañas de Sayán Oriental en la frontera entre Rusia y Mongolia. El nombre significa 'Eterna Montaña de Plata'.",
      pt: "O Munku-Sardyk é o pico mais alto das montanhas de Sayan Oriental na fronteira entre a Rússia e a Mongólia. O nome significa 'Eterna Montanha de Prata'.",
      fr: "Le Mounkou-Sardyk est le point culminant des monts Saïan orientaux, à la frontière entre la Russie et la Mongolie. Son nom signifie « éternel mont d'argent ».",
    },
    facts: {
      de: ["Höhe von 3491 Metern", "Höchster Punkt des Sajan-Gebirges", "Grenzübertritt erfordert Sondergenehmigung", "Besitzt kleine hängende Gletscher"],
      hu: ["3491 méter magas", "A Szaján-hegység legmagasabb pontja", "A határzóna miatt külön engedély kell a látogatáshoz", "Kis függőgleccserek találhatók rajta"],
      ro: ["Înălțime de 3491 metri", "Cel mai înalt punct din Munții Saian", "Accesul necesită permise speciale de frontieră", "Prezintă mici ghețari suspendați"],
      en: ["Elevation of 3491 meters", "Highest point of the Sayan Mountains", "Border crossing requires special permits", "Features small hanging glaciers"],
      es: ["Altura de 3491 metros", "Punto más alto de las montañas de Sayán", "El cruce fronterizo requiere un permiso especial", "Posee pequeños glaciares colgantes"],
      pt: ["Altura de 3491 metros", "Ponto mais alto das montanhas de Sayan", "A travessia da fronteira requer uma licença especial", "Possui pequenos glaciares suspensos"],
      fr: ["Hauteur de 3491 mètres", "Point culminant des monts Saïan", "Le passage de la frontière nécessite une autorisation spéciale", "Possède de petits glaciers suspendus"],
    },
imageHint: "Snowy peak of Munku-Sardyk on the Mongolian border",
    descriptionAdvanced: {
      de: "Der Munku Sardyk, dessen Name malerisch „Ewiger Silberberg“ bedeutet, ist die höchste und markanteste Erhebung des Ostsajan-Gebirges. Er thront majestätisch direkt auf der internationalen Grenze zwischen der russischen Republik Burjatien und der Mongolei. Der Gipfelbereich zeichnet sich durch ausgeprägte alpine Formen aus, mit steilen, zerklüfteten Flanken und mehreren kleinen, dauerhaft hängenden Gletschern, die die umliegenden Hochgebirgsflüsse speisen. Für die indigene burjatische und mongolische Bevölkerung ist der Berg ein heiliger Ort voller spiritueller Bedeutung, an dem regelmäßig Rituale durchgeführt werden. Eine Besteigung erfordert aufgrund der strengen Grenzkontrollen spezielle bürokratische Genehmigungen, zieht aber dennoch im späten Frühjahr zahlreiche Alpinisten an, die den Aufstieg über den zugefrorenen Fluss Irkut und die steilen Eisfelder wagen.",
      hu: "A Munku-Szardik, amelynek neve beszédesen „Örök ezüsthegyet” jelent, a Keleti-Szaján hegységrendszerének legmagasabb és legimpozánsabb csúcsa. Fenségesen magasodik közvetlenül az oroszországi Burjátföld és Mongólia nemzetközi határvonalán. A csúcsrégiót éles alpesi formák, meredek, sziklás letörések és több kisebb, állandó függőgleccser jellemzi, amelyek a környező magashegyi folyókat táplálják. Az őslakos burját és mongol lakosság számára a hegy kiemelkedően szent hely, mély spirituális jelentőséggel bír, lejtőin ma is végeznek hagyományos rituálékat. Megmászása a szigorú határövezet miatt különleges hatósági engedélyeket követel meg, ennek ellenére késő tavasszal sok hegymászót vonz, akik a befagyott Irkut-folyón és a meredek jégmezőkön keresztül vágnak neki a kihívásnak.",
      ro: "Munku Sardîk, al cărui nume înseamnă pitoresc „Muntele de Argint Veșnic”, este cea mai înaltă și proeminentă elevație din Munții Saianul de Est. Tronează maiestuos chiar pe granița internațională dintre Republica rusă Buriatia și Mongolia. Zona de vârf este caracterizată prin forme alpine pronunțate, cu flancuri abrupte și crevasate, și mai mulți ghețari mici, suspendați permanent, care alimentează râurile de mare altitudine din zonă. Pentru populațiile indigene buriate și mongole, muntele este un loc sacru, încărcat de semnificație spirituală, unde se desfășoară și astăzi ritualuri tradiționale. Deși necesită permise birocratice speciale din cauza controalelor stricte de frontieră, ascensiunea atrage la sfârșitul primăverii numeroși alpiniști, care abordează ruta pe râul înghețat Irkut și prin câmpuri abrupte de gheață.",
      en: "Mount Munku-Sardyk, whose name evocatively translates to 'Eternal Silver Mountain,' is the highest and most prominent peak of the Eastern Sayan range. It commands a majestic presence directly straddling the international border between the Russian Republic of Buryatia and Mongolia. The summit region is characterized by stark alpine topography, featuring sheer, jagged flanks and several small, permanent hanging glaciers that act as vital sources for surrounding mountain rivers. For the indigenous Buryat and Mongolian peoples, the mountain is a profoundly sacred site of immense spiritual significance, where traditional rituals are still actively performed. Due to its location in a highly restricted border zone, climbing requires special bureaucratic permits, yet it draws numerous alpinists in late spring who tackle the challenging ascent via the frozen Irkut River and steep ice fields.",
      es: "El Munku-Sardyk, cuyo nombre significa pintorescamente 'Eterna Montaña de Plata', es la elevación más alta y prominente de las montañas de Sayán Oriental. Se alza majestuosamente directamente sobre la frontera internacional entre la República rusa de Buriatia y Mongolia. La zona de la cumbre se caracteriza por formas alpinas pronunciadas, con flancos empinados y fracturados y varios glaciares pequeños y colgantes de forma permanente que alimentan los ríos de alta montaña circundantes. Para la población indígena buriata y mongola, la montaña es un lugar sagrado lleno de significado espiritual, donde se realizan rituales regularmente. Un ascenso requiere permisos burocráticos especiales debido a los estrictos controles fronterizos, pero atrae a numerosos alpinistas a finales de la primavera que se aventuran a subir por el río Irkut congelado y los empinados campos de hielo.",
      pt: "O Munku-Sardyk, cujo nome significa pitorescamente 'Eterna Montanha de Prata', é a elevação mais alta e proeminente das montanhas de Sayan Oriental. Ergue-se majestosamente diretamente sobre a fronteira internacional entre a República russa da Buriácia e a Mongólia. A zona do cume caracteriza-se por formas alpinas pronunciadas, com flancos íngremes e fracturados e vários glaciares pequenos e suspensos permanentemente que alimentam os rios de alta montanha circundantes. Para a população indígena buriata e mongol, a montanha é um lugar sagrado cheio de significado espiritual, onde se realizam rituais regularmente. Uma ascensão requer licenças burocráticas especiais devido aos rigorosos controlos fronteiriços, mas atrai inúmeros alpinistas no final da primavera que se aventuram a subir pelo rio Irkut congelado e pelos íngremes campos de gelo.",
      fr: "Le Mounkou-Sardyk, dont le nom signifie poétiquement « éternel mont d'argent », est le point culminant et le plus marquant des monts Saïan orientaux. Il trône majestueusement sur la frontière internationale entre la République russe de Bouriatie et la Mongolie. La zone sommitale se caractérise par des formes alpines prononcées, avec des flancs escarpés et plusieurs petits glaciers suspendus qui alimentent les rivières environnantes. Pour les populations autochtones bouriates et mongoles, la montagne est un lieu sacré chargé de spiritualité, où des rituels sont régulièrement pratiqués. Son ascension nécessite des autorisations spéciales en raison des contrôles frontaliers stricts, mais elle attire néanmoins de nombreux alpinistes à la fin du printemps, qui tentent la montée via la rivière Irkout gelée et les champs de glace.",
    },
    factsAdvanced: {
      de: ["A Keleti-Szaján és egész Burjátföld legmagasabb pontja (3491 m)", "Nevének jelentése a helyi nyelveken: []", "A csúcson húzódik az orosz-mongol államhatár", "A hegy oldalában található négy állandó, bár visszahúzódó gleccser", "A terület a burját sámánizmus egyik legszentebb, kultikus helyszíne", "Itt ered a Bajkál-tó egyik legfontosabb mellékfolyója, a hegyi Irkut", "Meglátogatásához a határőrségtől speciális engedély beszerzése szükséges", "A legkedveltebb mászószezon május elején van, a stabil jégviszonyok miatt"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de Sayán Oriental y de toda Buriatia (3491 m)"],
      pt: ["O ponto mais alto de Sayan Oriental e de toda a Buriácia (3491 m)"],
      fr: ["Point culminant des Saïan orientaux et de toute la Bouriatie (3491 m)"],
    },
    image: "/poi-images/russia-mount-munku-sardyk-relief-v2.webp",
},  {
    id: "russia-kronotsky-volcano-relief-v2", "sights": {
      "de": [
            {
                  "name": "Vid na ozero Kronotskoe so sklona Kronotskoi sopki",
                  "text": "Dieser Aussichtspunkt an den Hängen des Vulkans Kronotski bietet weite Ausblicke auf den darunter liegenden Kronotskoje-See.",
                  "category": "natural",
                  "coords": [
                        160.522016,
                        54.775165
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Vid na ozero Kronotskoe so sklona Kronotskoi sopki",
                  "text": "A Kronockij vulkán lejtőin található kilátópontról széles kilátás nyílik az alatta elterülő Kronockoje-tóra.",
                  "category": "natural",
                  "coords": [
                        160.522016,
                        54.775165
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Vid na ozero Kronotskoe so sklona Kronotskoi sopki",
                  "text": "Acest punct de belvedere de pe pantele vulcanului Kronotsky oferă o priveliște amplă asupra lacului Kronotskoye situat la bază.",
                  "category": "natural",
                  "coords": [
                        160.522016,
                        54.775165
                  ]
            }
      ],
      "en": [
            {
                  "name": "Vid na ozero Kronotskoe so sklona Kronotskoi sopki",
                  "text": "This viewpoint on the slopes of the Kronotsky volcano offers sweeping vistas of Lake Kronotskoye below.",
                  "category": "natural",
                  "coords": [
                        160.522016,
                        54.775165
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Kronozki-Vulkan", hu: "Kronockij-vulkán", ro: "Vulcanul Kronoțki", en: "Kronotsky Volcano"},
    image: "/poi-images/russia-kronotsky-volcano-relief-v2.webp",
    coords: [160.53, 54.75],
    coords: [160.53, 54.75],
    description: {
      de: "Der Kronozki-Vulkan ist einer der ästhetischsten Vulkane Kamtschatkas. Er ähnelt in seiner Form stark dem japanischen Fuji und liegt in einem Naturschutzgebiet.",
      hu: "A Kronockij-vulkán Kamcsatka egyik legszebb vulkánja. Formája erősen emlékeztet a japán Fudzsi-hegyre, és egy természetvédelmi területen fekszik.",
      ro: "Vulcanul Kronoțki este unul dintre cei mai estetici vulcani din Kamceatka. Seamănă foarte mult ca formă cu muntele Fuji din Japonia.",
      en: "Kronotsky Volcano is one of the most aesthetic volcanoes in Kamchatka. It strongly resembles Mount Fuji in Japan and is located within a nature reserve.",
      es: "El volcán Kronotsky es uno de los volcanes más estéticos de Kamchatka. Su forma se asemeja mucho al Fuji japonés y se encuentra en una reserva natural.",
      pt: "O vulcão Kronotsky é um dos vulcões mais estéticos de Kamchatka. A sua forma assemelha-se muito ao Fuji japonês e encontra-se numa reserva natural.",
      fr: "Le volcan Kronotski est l'un des volcans les plus esthétiques du Kamtchatka. Sa forme ressemble beaucoup au mont Fuji japonais et il est situé dans une réserve naturelle.",
    },
    facts: {
      de: ["Höhe von 3528 Metern", "Fast perfekt symmetrischer Kegel", "Liegt am Kronozki-See", "Teil des Kronozki-Biosphärenreservats"],
      hu: ["3528 méter magas", "Szinte tökéletesen szimmetrikus kúp", "A Kronockij-tó partján fekszik", "A Kronockij bioszféra-rezervátum része"],
      ro: ["Înălțime de 3528 metri", "Con aproape perfect simetric", "Situat lângă Lacul Kronoțki", "Parte a Rezervației Biosferei Kronoțki"],
      en: ["Elevation of 3528 meters", "Nearly perfect symmetrical cone", "Located next to Lake Kronotsky", "Part of the Kronotsky Biosphere Reserve"],
      es: ["Altura de 3528 metros", "Cono casi perfectamente simétrico", "Situado junto al lago Kronotsky", "Parte de la Reserva de la Biosfera Kronotsky"],
      pt: ["Altura de 3528 metros", "Cone quase perfeitamente simétrico", "Situado junto ao lago Kronotsky", "Parte da Reserva da Biosfera Kronotsky"],
      fr: ["Hauteur de 3528 mètres", "Cône presque parfaitement symétrique", "Situé au bord du lac Kronotski", "Fait partie de la réserve de biosphère de Kronotski"],
    },
imageHint: "Symmetrical snowy volcano cone reflected in a lake",
    descriptionAdvanced: {
      de: "Der Kronozki-Vulkan auf der fernöstlichen Halbinsel Kamtschatka gilt unter Vulkanologen und Naturfotografen als einer der ästhetisch perfektesten Stratovulkane der Erde. Mit seiner makellosen, symmetrischen Kegelform erinnert er frappierend an den japanischen Fuji und erhebt sich als atemberaubende Landmarke direkt an den Ufern des eisigen, blauen Kronozki-Sees. Die schneebedeckten Flanken des Berges sind von tiefen, strahlenförmig vom Krater ausgehenden Erosionsrinnen durchzogen, die dem Vulkan eine markante Textur verleihen. Er liegt eingebettet im streng geschützten Kronozki-Biosphärenreservat, einer der unberührtesten und wildesten Regionen Russlands, die auch das berühmte Tal der Geysire beheimatet. Obwohl der Vulkan derzeit ruht und nur schwache Fumarolen-Aktivität zeigt, bleibt er ein gewaltiges Symbol der extremen tektonischen Kräfte des Pazifischen Feuerrings.",
      hu: "A távol-keleti Kamcsatka-félszigeten emelkedő Kronockij-vulkánt a vulkanológusok és természetfotósok egybehangzóan a Föld egyik legesztétikusabb, legtökéletesebb formájú sztratovulkánjának tartják. Hibátlanul szimmetrikus, hófedte kúpja kísértetiesen emlékeztet a japán Fudzsi-hegyre; lenyűgöző látványt nyújtva tükröződik a lábánál elterülő, jéghideg Kronockij-tó kék vizében. A hegy meredek lejtőit a kráterből sugárirányban kiinduló mély eróziós barázdák – úgynevezett barrancók – szabdalják, amelyek különleges textúrát adnak a felszínnek. A vulkán a szigorúan védett Kronockij bioszféra-rezervátum, Oroszország legvadabb, érintetlen területének szívében áll, amely a híres Gejzírek völgyét is magában foglalja. Bár a tűzhányó jelenleg szunnyad, és csak gyenge fumarola-tevékenységet mutat, továbbra is a Csendes-óceáni tűzgyűrű hatalmas tektonikus erőinek szimbóluma.",
      ro: "Vulcanul Kronoțki, situat pe îndepărtata Peninsulă Kamceatka, este considerat de vulcanologi și fotografii de natură drept unul dintre cei mai perfecți și estetici stratovulcani de pe Pământ. Forma sa conică impecabilă și simetrică amintește izbitor de muntele Fuji din Japonia, înălțându-se ca un reper uluitor chiar pe malurile lacului glaciar albastru Kronoțki. Flancurile acoperite de zăpadă ale muntelui sunt brăzdate de ravene adânci de eroziune, care radiază dinspre crater, conferind vulcanului o textură vizuală distinctivă. Este amplasat în inima Rezervației Biosferei Kronoțki, strict protejată, una dintre cele mai neatinse și sălbatice regiuni ale Rusiei, care adăpostește și faimoasa Vale a Gheizerelor. Deși în prezent vulcanul este adormit, prezentând doar o slabă activitate fumarolică, el rămâne un simbol monumental al forțelor tectonice extreme ale Cercului de Foc al Pacificului.",
      en: "Kronotsky Volcano on the remote Kamchatka Peninsula is universally regarded by volcanologists and nature photographers as one of the most aesthetically perfect stratovolcanoes on Earth. With its flawlessly symmetrical, snow-capped cone, it bears a striking resemblance to Japan's Mount Fuji, rising as a breathtaking landmark directly from the shores of the icy blue Lake Kronotsky. The mountain's steep flanks are heavily grooved by deep, radial erosion gullies—known as barrancos—that emanate from the crater, giving the volcano a highly distinctive texture. It is nestled within the strictly protected Kronotsky Biosphere Reserve, one of Russia's most pristine and untamed wilderness areas, which also encompasses the famous Valley of Geysers. Although currently dormant and exhibiting only weak fumarolic activity, it remains a monumental symbol of the immense tectonic forces shaping the Pacific Ring of Fire.",
      es: "El volcán Kronotsky, en la península de Kamchatka, es considerado por vulcanólogos y fotógrafos de naturaleza como uno de los estratovolcanes estéticamente más perfectos de la Tierra. Con su forma cónica simétrica e impecable, recuerda asombrosamente al monte Fuji japonés y se eleva como un hito impresionante directamente a orillas del gélido y azul lago Kronotsky. Los flancos nevados de la montaña están surcados por profundos canales de erosión radiales que le dan al volcán una textura distintiva. Se encuentra dentro de la Reserva de la Biosfera Kronotsky, estrictamente protegida, una de las regiones más vírgenes y salvajes de Rusia, que también alberga el famoso Valle de los Géiseres. Aunque el volcán está actualmente inactivo y solo muestra una débil actividad de fumarolas, sigue siendo un símbolo poderoso de las fuerzas tectónicas extremas del Anillo de Fuego del Pacífico.",
      pt: "O vulcão Kronotsky, na península de Kamchatka, é considerado por vulcanólogos e fotógrafos de natureza como um dos estratovulcões esteticamente mais perfeitos da Terra. Com a sua forma cónica simétrica e impecável, recorda assombrosamente o monte Fuji japonês e eleva-se como um marco impressionante diretamente nas margens do gélido e azul lago Kronotsky. Os flancos nevados da montanha estão sulcados por profundos canais de erosão radiais que dão ao vulcão uma textura distinta. Encontra-se dentro da Reserva da Biosfera Kronotsky, estritamente protegida, uma das regiões mais virgens e selvagens da Rússia, que também alberga o famoso Vale dos Géiseres. Embora o vulcão esteja atualmente inativo e apenas mostre uma fraca atividade de fumarolas, continua a ser um símbolo poderoso das forças tectónicas extremas do Anel de Fogo do Pacífico.",
      fr: "Le volcan Kronotski, sur la péninsule du Kamtchatka, est considéré par les vulcanologues et les photographes de nature comme l'un des stratovolcans les plus esthétiquement parfaits au monde. Avec sa forme conique symétrique impeccable, il rappelle de façon frappante le mont Fuji japonais et se dresse comme un repère époustouflant au bord des eaux bleues glacées du lac Kronotski. Les flancs enneigés de la montagne sont parcourus de profonds ravins d'érosion rayonnant depuis le cratère, ce qui donne au volcan une texture marquée. Il est niché au cœur de la réserve de biosphère de Kronotski, l'une des régions les plus préservées et les plus sauvages de Russie, qui abrite également la célèbre vallée des Geysers. Bien que le volcan soit actuellement au repos et ne présente qu'une faible activité de fumerolles, il reste un symbole imposant des forces tectoniques extrêmes de la ceinture de feu du Pacifique.",
    },
    factsAdvanced: {
      de: ["A vulkán tengerszint feletti magassága eléri a 3528 métert", "Utolsó ismert, igazolt kitörése az 1920-as évek elején (1923-ban) történt", "Formája szinte tökéletesen szimmetrikus, ideális sztratovulkáni kúp", "Lábánál fekszik Kamcsatka legnagyobb édesvizű tava, a Kronockij-tó", "Az UNESCO világörökség részét képező bioszféra-rezervátum központja", "Kráterét jég dugó tölti ki, csak enyhe kigőzölgés (fumarola) figyelhető meg", "Megközelítése földi úton szinte lehetetlen, általában helikopterrel látogatják", "A lejtőin gyakoriak a barna medvék és más nagyragadozók"],
      hu: [],
      ro: [],
      en: [],
      es: ["La altitud del volcán alcanza los 3528 metros sobre el nivel del mar", "Su última erupción conocida y confirmada ocurrió a principios de la década de 1920 (en 1923)", "Su forma es casi perfectamente simétrica, un cono de estratovolcán ideal", "A sus pies se encuentra el lago de agua dulce más grande de Kamchatka, el lago Kronotsky", "Es el centro de la reserva de la biosfera, que forma parte del Patrimonio de la Humanidad de la UNESCO", "Su cráter está lleno de un tapón de hielo, solo se observa una ligera emisión de vapor (fumarola)", "Su acceso por tierra es casi imposible, generalmente se visita en helicóptero", "En sus laderas son comunes los osos pardos y otros grandes depredadores"],
      pt: ["A altitude do vulcão atinge os 3528 metros acima do nível do mar", "A sua última erupção conhecida e confirmada ocorreu no início da década de 1920 (em 1923)", "A sua forma é quase perfeitamente simétrica, um cone de estratovulcão ideal", "Aos seus pés encontra-se o maior lago de água doce de Kamchatka, o lago Kronotsky", "É o centro da reserva da biosfera, que faz parte do Património Mundial da UNESCO", "O seu cráter está cheio de uma tampa de gelo, apenas se observa uma ligeira emissão de vapor (fumarola)", "O seu acesso por terra é quase impossível, geralmente é visitado de helicóptero", "Nas suas encostas são comuns os ursos pardos e outros grandes predadores"],
      fr: ["L'altitude du volcan atteint 3528 mètres au-dessus du niveau de la mer", "Sa dernière éruption connue et confirmée a eu lieu au début des années 1920 (1923)", "Sa forme est presque parfaitement symétrique, un cône de stratovolcan idéal", "Au pied du volcan se trouve le plus grand lac d'eau douce du Kamtchatka, le lac Kronotski", "C'est le centre de la réserve de biosphère classée au patrimoine mondial de l'UNESCO", "Son cratère est obstrué par la glace, seule une faible activité de fumerolles est observée", "L'accès par voie terrestre est presque impossible, on le visite généralement en hélicoptère", "Les ours bruns et d'autres grands prédateurs sont fréquents sur ses pentes"],
    },
    image: "/poi-images/russia-kronotsky-volcano-relief-v2.webp",
},  {
    id: "russia-koryaksky-volcano-relief-v2", "sights": {
      "de": [
            {
                  "name": "Koriakskie narzany",
                  "text": "Natürliche Mineralwasserquellen, die aus dem schroffen vulkanischen Gelände nahe dem Korjakski sprudeln.",
                  "category": "landmark",
                  "coords": [
                        158.755081,
                        53.392451
                  ]
            },
            {
                  "name": "Koriakskaia sopka",
                  "text": "Ein aktiver Stratovulkan auf der Halbinsel Kamtschatka mit einem markant gefurchten, konischen Profil.",
                  "category": "landmark",
                  "coords": [
                        158.711565,
                        53.320473
                  ]
            },
            {
                  "name": "Vekovye derev'ia",
                  "text": "Ein uralter Hain aus säkularen Bäumen, der in der rauen Vulkanlandschaft nahe dem Korjakski überlebt hat.",
                  "category": "landmark",
                  "coords": [
                        158.598856,
                        53.295545
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Koriakskie narzany",
                  "text": "Természetes ásványvízforrások, amelyek a Korjakszkij vulkán melletti zord terepen buzognak fel.",
                  "category": "landmark",
                  "coords": [
                        158.755081,
                        53.392451
                  ]
            },
            {
                  "name": "Koriakskaia sopka",
                  "text": "Aktív rétegvulkán a Kamcsatka-félszigeten, jellegzetesen barázdált, kúpos profillal.",
                  "category": "landmark",
                  "coords": [
                        158.711565,
                        53.320473
                  ]
            },
            {
                  "name": "Vekovye derev'ia",
                  "text": "Ősi, évszázados fákból álló liget, amely a Korjakszkij vulkán melletti zord tájon maradt fenn.",
                  "category": "landmark",
                  "coords": [
                        158.598856,
                        53.295545
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Koriakskie narzany",
                  "text": "Izvoare naturale de apă minerală care țâșnesc din terenul vulcanic accidentat de lângă Koriaksky.",
                  "category": "landmark",
                  "coords": [
                        158.755081,
                        53.392451
                  ]
            },
            {
                  "name": "Koriakskaia sopka",
                  "text": "Un stratovulcan activ din Peninsula Kamceatka cu un profil conic, distinctiv canelat.",
                  "category": "landmark",
                  "coords": [
                        158.711565,
                        53.320473
                  ]
            },
            {
                  "name": "Vekovye derev'ia",
                  "text": "Un crâng străvechi de copaci seculari care supraviețuiesc în peisajul vulcanic accidentat de lângă Koriaksky.",
                  "category": "landmark",
                  "coords": [
                        158.598856,
                        53.295545
                  ]
            }
      ],
      "en": [
            {
                  "name": "Koriakskie narzany",
                  "text": "Natural mineral water springs bubbling up from the rugged volcanic terrain near Koryaksky.",
                  "category": "landmark",
                  "coords": [
                        158.755081,
                        53.392451
                  ]
            },
            {
                  "name": "Koryaksky",
                  "text": "An active stratovolcano on the Kamchatka Peninsula with a distinctively grooved, conical profile.",
                  "category": "landmark",
                  "coords": [
                        158.711565,
                        53.320473
                  ]
            },
            {
                  "name": "Vekovye derev'ia",
                  "text": "An ancient grove of secular trees surviving in the rugged volcanic landscape near Koryaksky.",
                  "category": "landmark",
                  "coords": [
                        158.598856,
                        53.295545
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Korjakski", hu: "Korjakszkij-vulkán", ro: "Vulcanul Koriakski", en: "Koryaksky Volcano"},
    image: "/poi-images/russia-koryaksky-volcano-relief-v2.webp",
    coords: [158.7, 53.32],
    coords: [158.7, 53.32],
    description: {
      de: "Der Korjakski ist ein großer Stratovulkan in der Nähe der Stadt Petropawlowsk-Kamtschatski. Er ist Teil des 'Pazifischen Feuerrings' und sehr aktiv.",
      hu: "A Korjakszkij egy hatalmas sztratovulkán Petropavlovszk-Kamcsatszkij városának közelében. A 'Csendes-óceáni tűzgyűrű' része és igen aktív.",
      ro: "Koriakski este un stratovulcan impunător situat lângă orașul Petropavlovsk-Kamceatski. Face parte din 'Cercul de Foc al Pacificului'.",
      en: "Koryaksky is a large stratovolcano located near the city of Petropavlovsk-Kamchatsky. It is part of the 'Pacific Ring of Fire' and is very active.",
      es: "El Koryaksky es un gran estratovolcán cerca de la ciudad de Petropávlovsk-Kamchatski. Forma parte del 'Anillo de Fuego del Pacífico' y es muy activo.",
      pt: "O Koryaksky é um grande estratovulcão perto da cidade de Petropavlovsk-Kamchatsky. Faz parte do 'Anel de Fogo do Pacífico' e é muito ativo.",
      fr: "Le Koryakski est un grand stratovolcan situé près de la ville de Petropavlovsk-Kamtchatski. Il fait partie de la « ceinture de feu du Pacifique » et est très actif.",
    },
    facts: {
      de: ["Höhe von 3456 Metern", "Letzter großer Ausbruch im Jahr 2008", "Dominante Landmarke der Hauptstadt Kamtschatkas", "Gilt als 'Decade Volcano'"],
      hu: ["3456 méter magas", "Utolsó nagy kitörése 2008-ben volt", "Kamcsatka fővárosának meghatározó látképe", "A 'Decade Volcano' program része"],
      ro: ["Înălțime de 3456 metri", "Ultima erupție majoră în 2008", "Landmark dominant pentru capitala Kamceatkăi", "Inclus în lista 'Vulcanii Deceniului'"],
      en: ["Elevation of 3456 meters", "Last major eruption in 2008", "Dominant landmark for Kamchatka's capital", "Designated as a 'Decade Volcano'"],
      es: ["Altura de 3456 metros", "Última gran erupción en el año 2008", "Punto de referencia dominante de la capital de Kamchatka", "Considerado un 'Volcán de la Década'"],
      pt: ["Altura de 3456 metros", "Última grande erupção no ano 2008", "Ponto de referência dominante da capital de Kamchatka", "Considerado um 'Vulcão da Década'"],
      fr: ["Hauteur de 3456 mètres", "Dernière éruption majeure en 2008", "Repère dominant de la capitale du Kamtchatka", "Considéré comme un « volcan de la décennie »"],
    },
imageHint: "Large volcano overlooking Petropavlovsk-Kamchatsky city",
    descriptionAdvanced: {
      de: "Der majestätische Stratovulkan Korjakski ist eine der markantesten und bedrohlichsten geologischen Formationen auf Kamtschatka. Mit seinen tief gefurchten, steil aufragenden Hängen dominiert er die Skyline der regionalen Hauptstadt Petropawlowsk-Kamtschatski und stellt als integraler Teil des hochaktiven 'Pazifischen Feuerrings' eine ständige, reale Bedrohung für die Stadt dar. Aufgrund seiner explosiven Ausbruchsgeschichte und der gefährlichen Nähe zur dichtesten Besiedlung der Halbinsel wurde er von den Vereinten Nationen als 'Decade Volcano' eingestuft, um ihn intensiv wissenschaftlich zu überwachen. Seine Gipfelregion ist stark vergletschert und weist tiefe Spalten auf, aus denen oft gut sichtbare Gas- und Dampfsäulen aufsteigen. Der Berg ist ein Paradies für Extrembergsteiger, verlangt jedoch aufgrund von Lawinengefahr, Steinschlag und tückischem Vulkangestein höchste alpine Expertise.",
      hu: "A fenséges Korjakszkij sztratovulkán Kamcsatka egyik legmeghatározó és legfenyegetőbb geológiai képződménye. Mély eróziós barázdákkal szabdalt, meredeken a magasba törő kúpja uralja a tartományi főváros, Petropavlovszk-Kamcsatszkij látképét. A hihetetlenül aktív 'Csendes-óceáni tűzgyűrű' részeként a vulkán állandó, valós veszélyt jelent a mintegy 180 ezer fős lakosságra. Robbanékony kitörési múltja és a településhez való veszélyes közelsége miatt az ENSZ a kiemelten figyelt 'Decade Volcano' (Az Évtized Vulkánja) listára sorolta, így folyamatos tudományos megfigyelés alatt áll. A csúcsrégiót kiterjedt gleccserek és mély hasadékok borítják, amelyekből gyakran látványos gáz- és gőzoszlopok emelkednek a magasba. A hegy extrém mászók kedvelt célpontja, de a hatalmas lavinaveszély és a morzsalékos vulkáni kőzet miatt komoly alpinista tudást igényel.",
      ro: "Maiestuosul stratovulcan Koriakski este una dintre cele mai proeminente și amenințătoare formațiuni geologice din Kamceatka. Cu flancurile sale adânc brăzdate și abrupte, domină linia orizontului capitalei regionale Petropavlovsk-Kamceatski și, ca parte integrantă a 'Cercului de Foc al Pacificului' extrem de activ, reprezintă o amenințare constantă și reală pentru oraș. Datorită istoriei sale de erupții explozive și proximității periculoase față de cea mai densă așezare a peninsulei, a fost desemnat de Națiunile Unite drept 'Decade Volcano' (Vulcan al Deceniului), pentru a fi monitorizat științific intensiv. Regiunea sa de vârf este puternic glaciară și prezintă fisuri adânci, din care se înalță adesea coloane vizibile de gaz și abur. Muntele este un paradis pentru alpiniștii extremi, dar necesită o expertiză alpină supremă din cauza riscului de avalanșe, a căderilor de pietre și a rocilor vulcanice instabile.",
      en: "The majestic Koryaksky stratovolcano is one of the most prominent and formidable geological formations on the Kamchatka Peninsula. With its deeply grooved, steeply pitched slopes, it utterly dominates the skyline of the regional capital, Petropavlovsk-Kamchatsky. As an integral component of the highly active 'Pacific Ring of Fire,' it poses a constant, very real threat to the city's population. Because of its explosive eruptive history and dangerous proximity to the peninsula's most densely populated area, the United Nations designated it a 'Decade Volcano,' subjecting it to intensive, continuous scientific monitoring. The summit region is heavily glaciated and features deep fissures that frequently vent highly visible plumes of gas and steam. While the mountain is a magnet for extreme mountaineers, it demands supreme alpine expertise due to severe avalanche risks, rockfalls, and treacherous, crumbly volcanic rock.",
      es: "El majestuoso estratovolcán Koryaksky es una de las formaciones geológicas más prominentes y amenazantes de Kamchatka. Con sus laderas empinadas y profundamente surcadas, domina el horizonte de la capital regional, Petropávlovsk-Kamchatski, y como parte integral del altamente activo 'Anillo de Fuego del Pacífico', representa una amenaza constante y real para la ciudad. Debido a su historia de erupciones explosivas y su peligrosa proximidad a la zona más densamente poblada de la península, fue clasificado por las Naciones Unidas como un 'Volcán de la Década' para ser monitoreado científicamente de manera intensiva. Su región cumbre está fuertemente glaciada y presenta grietas profundas de las que a menudo se elevan columnas de gas y vapor claramente visibles. La montaña es un paraíso para los montañistas extremos, pero requiere la más alta experiencia alpina debido al riesgo de avalanchas, desprendimiento de rocas y la traicionera roca volcánica.",
      pt: "O majestoso estratovulcão Koryaksky é uma das formações geológicas mais proeminentes e ameaçadoras de Kamchatka. Com as suas encostas íngremes e profundamente sulcadas, domina o horizonte da capital regional, Petropavlovsk-Kamchatsky, e como parte integrante do altamente ativo 'Anel de Fogo do Pacífico', representa uma ameaça constante e real para a cidade. Devido à sua história de erupções explosivas e à sua perigosa proximidade com a zona mais densamente povoada da península, foi classificado pelas Nações Unidas como um 'Vulcão da Década' para ser monitorizado cientificamente de forma intensiva. A sua região do cume está fortemente glaciada e apresenta fendas profundas das quais muitas vezes se elevam colunas de gás e vapor claramente visíveis. A montanha é um paraíso para os montanhistas extremos, mas requer a mais alta experiência alpina devido ao risco de avalanches, queda de rochas e à traiçoeira rocha vulcânica.",
      fr: "Le majestueux stratovolcan Koryakski est l'une des formations géologiques les plus marquantes et les plus menaçantes du Kamtchatka. Avec ses pentes escarpées et profondément sillonnées, il domine l'horizon de la capitale régionale, Petropavlovsk-Kamtchatski, et constitue, en tant que partie intégrante de la « ceinture de feu du Pacifique » très active, une menace constante et réelle pour la ville. En raison de son histoire d'éruptions explosives et de sa proximité dangereuse avec la zone la plus peuplée de la péninsule, il a été classé par les Nations unies comme « volcan de la décennie » afin de faire l'objet d'une surveillance scientifique intensive. Sa région sommitale est fortement englacée et présente des crevasses profondes d'où s'élèvent souvent des colonnes de gaz et de vapeur bien visibles. La montagne est un paradis pour les alpinistes de l'extrême, mais exige une expertise alpine de haut niveau en raison des risques d'avalanches, de chutes de pierres et de roches volcaniques instables.",
    },
    factsAdvanced: {
      de: ["A vulkán tengerszint feletti magassága eléri a 3456 métert", "A 'Decade Volcano' program 16 legveszélyesebbnek ítélt vulkánjának egyike", "Közvetlenül, alig 30 kilométerre fekszik Kamcsatka fővárosától", "Utolsó jelentős, jól látható hamukilövelléssel járó kitörése 2008-2009-ben volt", "Tipikus sztratovulkán, meredek lejtőkkel és mély eróziós völgyekkel", "A hegy alsóbb lejtőit nyírfa- és égererdők, feljebb alpesi rét borítja", "Télen hatalmas, stabil hótakarója a sítúrázók kedvelt helyszíne", "A szomszédos Avacsinszkij-vulkánnal együtt egy közös vulkáni csoportot alkot"],
      hu: [],
      ro: [],
      en: [],
      es: ["La altitud del volcán sobre el nivel del mar alcanza los 3456 metros", "Es uno de los 16 volcanes considerados más peligrosos por el programa 'Volcán de la Década'", "Se encuentra a apenas 30 kilómetros de la capital de Kamchatka", "Su última erupción significativa con emisiones de ceniza visibles fue en 2008-2009", "Es un estratovolcán típico, con laderas empinadas y profundos valles de erosión", "Las laderas inferiores están cubiertas de bosques de abedules y alisos, y más arriba de prados alpinos", "En invierno, su enorme y estable capa de nieve es un lugar popular para el esquí de travesía", "Junto con el vecino volcán Avachinsky, forma un grupo volcánico común"],
      pt: ["A altitude do vulcão acima do nível do mar atinge os 3456 metros", "É um dos 16 vulcões considerados mais perigosos pelo programa 'Vulcão da Década'", "Encontra-se a apenas 30 quilómetros da capital de Kamchatka", "A sua última erupção significativa com emissões de cinza visíveis foi em 2008-2009", "É um estratovulcão típico, com encostas íngremes e profundos vales de erosão", "As encostas inferiores estão cobertas por florestas de bétulas e alnos, e mais acima por prados alpinos", "No inverno, a sua enorme e estável camada de neve é um local popular para o esqui de travessia", "Junto com o vizinho vulcão Avachinsky, forma um grupo vulcânico comum"],
      fr: ["L'altitude du volcan atteint 3456 mètres au-dessus du niveau de la mer", "L'un des 16 volcans jugés les plus dangereux par le programme « Decade Volcano »", "Situé à peine à 30 kilomètres de la capitale du Kamtchatka", "Sa dernière éruption importante avec des rejets de cendres visibles a eu lieu en 2008-2009", "C'est un stratovolcan typique avec des pentes raides et des vallées d'érosion profondes", "Les pentes inférieures sont couvertes de bouleaux et d'aulnes, plus haut de prairies alpines", "En hiver, son immense manteau neigeux est un lieu prisé des skieurs de randonnée", "Il forme un groupe volcanique commun avec le volcan Avatchinski voisin"],
    },
    image: "/poi-images/russia-koryaksky-volcano-relief-v2.webp",
},  {
    id: "russia-avachinsky-volcano-relief-v2", "sights": {
      "de": [
            {
                  "name": "Vidovka Avachinskogo perevala",
                  "text": "Ein malerischer Aussichtspunkt, der einen weiten Blick auf den zerklüfteten Awatscha-Gebirgspass bietet.",
                  "category": "natural",
                  "coords": [
                        158.770813,
                        53.280225
                  ]
            },
            {
                  "name": "Vidovka na gore Verbliud",
                  "text": "Ein Aussichtspunkt auf dem einzigartigen doppelhöckrigen Kamelberg nahe dem Awatscha-Vulkan.",
                  "category": "natural",
                  "coords": [
                        158.76487,
                        53.272013
                  ]
            },
            {
                  "name": "Vidovka na goru Verbliud",
                  "text": "Ein malerischer Aussichtspunkt, der klare Ausblicke auf die markante Felsformation bietet, die als Kamelberg bekannt ist.",
                  "category": "natural",
                  "coords": [
                        158.764064,
                        53.270096
                  ]
            },
            {
                  "name": "Seismostantsiia",
                  "text": "Eine funktionelle seismische Überwachungsstation, die den aktiven Awatscha-Vulkan beobachtet.",
                  "category": "landmark",
                  "coords": [
                        158.811815,
                        53.26608
                  ]
            },
            {
                  "name": "Lavovaia pad' nash marshrut 1",
                  "text": "Diese vulkanische Route führt durch die zerklüfteten Lavafelder am Awatschinski-Vulkan und bietet Wanderern beeindruckende Ausblicke auf erhärtete geologische Formationen.",
                  "category": "landmark",
                  "coords": [
                        158.815452,
                        53.22509
                  ]
            },
            {
                  "name": "Lavovaia pad' nash pod'em",
                  "text": "Dieser steile Aufstiegspfad durch das lokale Lavatal ist eine Herausforderung für Abenteurer, die die Hänge des Awatschinski-Vulkans erkunden.",
                  "category": "landmark",
                  "coords": [
                        158.812278,
                        53.220473
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Vidovka Avachinskogo perevala",
                  "text": "Festői kilátó, amely lenyűgöző kilátást nyújt a zord Avacsinszkij hágóra.",
                  "category": "natural",
                  "coords": [
                        158.770813,
                        53.280225
                  ]
            },
            {
                  "name": "Vidovka na gore Verbliud",
                  "text": "Az Avacsinszkij vulkán melletti, egyedülálló kétpúpú Teve-hegyen található kilátó.",
                  "category": "natural",
                  "coords": [
                        158.76487,
                        53.272013
                  ]
            },
            {
                  "name": "Vidovka na goru Verbliud",
                  "text": "Festői kilátópont, amely tiszta rálátást nyújt a Teve-hegyként ismert jellegzetes sziklaalakzatra.",
                  "category": "natural",
                  "coords": [
                        158.764064,
                        53.270096
                  ]
            },
            {
                  "name": "Seismostantsiia",
                  "text": "A működő Avacsinszkij vulkánt megfigyelő szeizmikus állomás.",
                  "category": "landmark",
                  "coords": [
                        158.811815,
                        53.26608
                  ]
            },
            {
                  "name": "Lavovaia pad' nash marshrut 1",
                  "text": "Ez a vulkáni útvonal az Avacsinszkij-vulkán zord lávamezőin halad keresztül, és lenyűgöző kilátást nyújt a megszilárdult geológiai képződményekre.",
                  "category": "landmark",
                  "coords": [
                        158.815452,
                        53.22509
                  ]
            },
            {
                  "name": "Lavovaia pad' nash pod'em",
                  "text": "A helyi lávavölgyön keresztül vezető meredek emelkedőként ez az ösvény kihívást jelent az Avacsinszkij-vulkán lejtőit felfedező kalandorok számára.",
                  "category": "landmark",
                  "coords": [
                        158.812278,
                        53.220473
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Vidovka Avachinskogo perevala",
                  "text": "Un punct de belvedere pitoresc care oferă vederi ample asupra trecătorii montane accidentate Avachinsky.",
                  "category": "natural",
                  "coords": [
                        158.770813,
                        53.280225
                  ]
            },
            {
                  "name": "Vidovka na gore Verbliud",
                  "text": "Un punct de observație situat pe Muntele Cămilei cu două cocoașe unic, lângă Avachinsky.",
                  "category": "natural",
                  "coords": [
                        158.76487,
                        53.272013
                  ]
            },
            {
                  "name": "Vidovka na goru Verbliud",
                  "text": "Un punct de belvedere pitoresc care oferă o priveliște clară asupra formațiunii stâncoase distinctive cunoscute sub numele de Muntele Cămilei.",
                  "category": "natural",
                  "coords": [
                        158.764064,
                        53.270096
                  ]
            },
            {
                  "name": "Seismostantsiia",
                  "text": "O stație funcțională de monitorizare seismică care observă vulcanul activ Avachinsky.",
                  "category": "landmark",
                  "coords": [
                        158.811815,
                        53.26608
                  ]
            },
            {
                  "name": "Lavovaia pad' nash marshrut 1",
                  "text": "Acest traseu vulcanic traversează câmpurile accidentate de lavă din apropierea Vulcanului Avacinski, oferind drumeților priveliști impresionante ale formațiunilor geologice întărite.",
                  "category": "landmark",
                  "coords": [
                        158.815452,
                        53.22509
                  ]
            },
            {
                  "name": "Lavovaia pad' nash pod'em",
                  "text": "Servind ca o potecă de urcare abruptă prin valea locală de lavă, acest traseu îi provoacă pe aventurierii care explorează pantele Vulcanului Avacinski.",
                  "category": "landmark",
                  "coords": [
                        158.812278,
                        53.220473
                  ]
            }
      ],
      "en": [
            {
                  "name": "Vidovka Avachinskogo perevala",
                  "text": "A scenic overlook providing expansive views of the rugged Avachinsky mountain pass.",
                  "category": "natural",
                  "coords": [
                        158.770813,
                        53.280225
                  ]
            },
            {
                  "name": "Vidovka na gore Verbliud",
                  "text": "An observation point situated on the unique double-humped Camel Mountain near Avachinsky.",
                  "category": "natural",
                  "coords": [
                        158.76487,
                        53.272013
                  ]
            },
            {
                  "name": "Vidovka na goru Verbliud",
                  "text": "A scenic vantage point offering clear sights of the distinctive rock formation known as Camel Mountain.",
                  "category": "natural",
                  "coords": [
                        158.764064,
                        53.270096
                  ]
            },
            {
                  "name": "Seismostantsiia",
                  "text": "A functional seismic monitoring station observing the active Avachinsky volcano.",
                  "category": "landmark",
                  "coords": [
                        158.811815,
                        53.26608
                  ]
            },
            {
                  "name": "Lavovaia pad' nash marshrut 1",
                  "text": "This volcanic route traverses the rugged lava fields near Avachinsky Volcano, offering hikers striking views of hardened geological formations.",
                  "category": "landmark",
                  "coords": [
                        158.815452,
                        53.22509
                  ]
            },
            {
                  "name": "Lavovaia pad' nash pod'em",
                  "text": "Serving as a steep ascent path through the local lava valley, this trail challenges adventurers exploring the slopes of the Avachinsky Volcano.",
                  "category": "landmark",
                  "coords": [
                        158.812278,
                        53.220473
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Awatschinskaja Sopka", hu: "Avacsinszkij-vulkán", ro: "Vulcanul Avacinski", en: "Avachinsky Volcano"},
    image: "/poi-images/russia-avachinsky-volcano-relief-v2.webp",
    coords: [158.83, 53.25],
    coords: [158.83, 53.25],
    description: {
      de: "Der Awatschinskaja Sopka ist ein aktiver Vulkan auf Kamtschatka, der aufgrund seiner leichten Erreichbarkeit oft bestiegen wird. Er hat einen markanten roten Krater.",
      hu: "Az Avacsinszkij egy aktív vulkán Kamcsatkán, amely könnyű megközelíthetősége miatt népszerű a túrázók körében. Jellegzetes vörös krátere van.",
      ro: "Vulcanul Avacinski este un vulcan activ din Kamceatka, frecvent escaladat datorită accesibilității sale. Are un crater roșu distinctiv.",
      en: "Avachinsky is an active volcano in Kamchatka, frequently climbed due to its relative accessibility. it features a prominent red-colored crater.",
      es: "El Aváchinski es un volcán activo en Kamchatka que se escala con frecuencia debido a su fácil acceso. Tiene un distintivo cráter rojo.",
      pt: "O Avachinsky é um vulcão ativo em Kamchatka, frequentemente escalado devido à sua fácil acessibilidade. Possui uma cratera vermelha distinta.",
      fr: "L'Avatchinski est un volcan actif du Kamtchatka, souvent gravi en raison de sa facilité d'accès. Il possède un cratère rouge caractéristique.",
    },
    facts: {
      de: ["Höhe von 2741 Metern", "Liegt direkt neben dem Korjakski-Vulkan", "Krater ist mit Lava aus dem Jahr 1991 gefüllt", "Beliebtestes Wanderziel Kamtschatkas"],
      hu: ["2741 méter magas", "Közvetlenül a Korjakszkij-vulkán mellett fekszik", "Kráterét 1991-es láva tölti ki", "Kamcsatka legnépszerűbb túracélpontja"],
      ro: ["Înălțime de 2741 metri", "Situat imediat lângă vulcanul Koriakski", "Craterul este umplut cu lavă din 1991", "Cea mai populară destinație de drumeție din Kamceatka"],
      en: ["Elevation of 2741 meters", "Located directly adjacent to Koryaksky volcano", "Crater is filled with lava from 1991", "Most popular hiking destination in Kamchatka"],
      es: ["Altura de 2.741 metros.", "Situado junto al volcán Koryaksky.", "Cráter lleno de lava de la erupción de 1991.", "Destino de senderismo más popular de Kamchatka."],
      pt: ["Altitude de 2.741 metros.", "Localizado diretamente ao lado do vulcão Koryaksky.", "A cratera está preenchida com lava de 1991.", "O destino de caminhada mais popular de Kamchatka."],
      fr: ["Altitude de 2 741 mètres.", "Situé juste à côté du volcan Koriakski.", "Le cratère est rempli par la lave de l'éruption de 1991.", "Destination de randonnée la plus populaire du Kamtchatka."],
    },
imageHint: "Volcano crater with solidified lava and steam vents",
    descriptionAdvanced: {
      de: "Der Awatschinskaja Sopka, oft einfach Awatscha genannt, ist ein hyperaktiver und visuell faszinierender Stratovulkan, der sich in unmittelbarer Nähe der Stadt Petropawlowsk-Kamtschatski aufbäumt. Sein markantestes Merkmal ist der riesige, leuchtend rot gefärbte Krater, der nach einem heftigen Ausbruch im Jahr 1991 fast vollständig mit einer massiven Schicht aus dunkler, erstarrter Lava gefüllt wurde. Aus unzähligen Spalten und Fumarolen an den Kraterwänden steigen kontinuierlich heiße, schwefelhaltige Gase auf, die eine surreale, außerirdische Atmosphäre schaffen. Dank seiner relativen Erreichbarkeit und der faszinierenden geologischen Aktivität ist er der mit Abstand am häufigsten bestiegene Vulkan der gesamten Kamtschatka-Halbinsel. Der Aufstieg bietet zudem einen unvergleichlichen Panoramablick auf die Weiten des Pazifischen Ozeans und die schroffen, rauchenden Nachbarvulkane.",
      hu: "Az Avacsinszkaja Szopka, vagy egyszerűen Avacsa, egy rendkívül aktív és vizuálisan lenyűgöző sztratovulkán, amely közvetlenül Petropavlovszk-Kamcsatszkij városa felett magasodik. Legfeltűnőbb jellegzetessége a hatalmas, vöröses árnyalatú krátere, amelyet egy 1991-es heves kitörés során szinte teljesen kitöltött a sötét, megszilárdult lávató. A kráter peremén és a lávadugó repedéseiből folyamatosan forró, kénes gázok és gőzök (fumarolák) törnek fel, szürreális, szinte földönkívüli hangulatot teremtve. Viszonylag könnyű megközelíthetősége és folyamatos, de biztonságos távolságból megfigyelhető geológiai aktivitása miatt ez az egész Kamcsatka-félsziget leggyakrabban megmászott vulkánja. A csúcsról páratlan, 360 fokos panoráma nyílik a végtelen Csendes-óceánra és a szomszédos, füstölgő vulkánóriásokra.",
      ro: "Avacinskaia Sopka, numită adesea simplu Avacia, este un stratovulcan hiperactiv și vizual fascinant care se înalță în imediata vecinătate a orașului Petropavlovsk-Kamceatski. Cea mai izbitoare caracteristică a sa este craterul uriaș, de o nuanță roșiatică, care a fost aproape complet umplut cu un strat masiv de lavă solidificată și întunecată în urma unei erupții puternice din 1991. Din nenumărate fisuri și fumarole de pe pereții craterului se ridică continuu gaze fierbinți și sulfuroase, creând o atmosferă suprarealistă, aproape extraterestră. Datorită accesibilității sale relative și a activității geologice vizibile, dar abordabile, este de departe cel mai frecvent escaladat vulcan de pe întreaga Peninsulă Kamceatka. Ascensiunea recompensează cu o panoramă inegalabilă asupra vastității Oceanului Pacific și a vulcanilor vecini fumegânzi.",
      en: "Avachinskaya Sopka, often simply referred to as Avacha, is a highly active and visually captivating stratovolcano looming just outside the city of Petropavlovsk-Kamchatsky. Its most striking feature is its massive, vividly red-hued crater, which was almost entirely plugged by a thick layer of dark, solidified lava following a violent eruption in 1991. From numerous deep fissures and active fumaroles within the crater rim, hot, sulfurous gases and steam continuously billow into the air, creating a surreal, otherworldly atmosphere. Thanks to its relative accessibility and the mesmerizing, yet approachable, geological activity, it is by far the most frequently climbed volcano on the entire Kamchatka Peninsula. The grueling ascent rewards climbers with unparalleled, sweeping panoramic views of the vast Pacific Ocean and neighboring, smoking volcanic giants.",
      es: "El Aváchinski, a menudo llamado simplemente Avacha, es un estratovolcán hiperactivo y visualmente fascinante situado cerca de Petropávlovsk-Kamchatski. Su rasgo más notable es el enorme cráter de color rojo brillante que, tras una violenta erupción en 1991, quedó casi totalmente cubierto por una capa masiva de lava oscura solidificada. De innumerables grietas y fumarolas en las paredes del cráter emanan continuamente gases sulfurosos calientes que crean una atmósfera irreal. Gracias a su relativa accesibilidad, es el volcán más escalado de toda la península de Kamchatka. El ascenso ofrece además una vista panorámica inigualable del océano Pacífico y de los humeantes volcanes vecinos.",
      pt: "O Avachinsky, muitas vezes chamado simplesmente de Avacha, é um estratovulcão hiperativo e visualmente fascinante que se ergue nas proximidades da cidade de Petropavlovsk-Kamchatsky. A sua característica mais marcante é a cratera gigante de cor vermelha brilhante, que foi quase completamente preenchida por uma camada maciça de lava escura e solidificada após uma erupção violenta em 1991. De inúmeras fendas e fumarolas nas paredes da cratera elevam-se continuamente gases quentes e sulfurosos, criando uma atmosfera surreal e extraterrestre. Graças à sua relativa acessibilidade e à fascinante atividade geológica, é de longe o vulcão mais escalado de toda a península de Kamchatka. A subida oferece também uma vista panorâmica incomparável sobre as vastidões do Oceano Pacífico e os vulcões vizinhos acidentados e fumegantes.",
      fr: "L'Avatchinski, souvent appelé simplement Avatcha, est un stratovolcan hyperactif et visuellement fascinant situé près de Pétropavlovsk-Kamtchatski. Sa caractéristique la plus frappante est son immense cratère rouge vif qui, après une violenta éruption en 1991, a été presque entièrement comblé par une couche massive de lave sombre solidifiée. Des gaz sulfureux brûlants s'échappent continuellement d'innombrables fissures et fumerolles, créant une atmosphère surréelle. Grâce à son accessibilité relative, c'est de loin le volcan le plus gravi de toute la péninsule du Kamtchatka. L'ascension offre une vue panoramique inégalée sur l'océan Pacifique et les volcans voisins fumants.",
    },
    factsAdvanced: {
      de: ["A csúcs magassága 2741 méter a tengerszint felett", "A hatalmas kráter átmérője megközelíti a 400 métert", "Az 1991-es kitörés lávája szinte teljesen kitöltötte a krátert", "A helyiek és a turisták körében a legnépszerűbb túracélpont Kamcsatkán", "Egy jellegzetes 'Somma-Vezúv' típusú vulkán (kalderán belüli új kúp)", "Nyári hétvégéken akár több százan is megkísérlik a csúcstámadást", "Közvetlen geológiai szomszédja a jóval magasabb Korjakszkij-vulkán", "Felszínét vörös és fekete vulkáni hamu és salak borítja"],
      hu: [],
      ro: [],
      en: [],
      es: ["La altura del pico es de 2.741 metros sobre el nivel del mar.", "El diámetro del enorme cráter se aproxima a los 400 metros.", "La lava de la erupción de 1991 llenó casi por completo el cráter.", "Es el destino turístico más popular de Kamchatka entre locales y visitantes.", "Es un volcán típico de tipo 'Somma-Vesubio' (un nuevo cono dentro de una caldera).", "En los fines de semana de verano, cientos de personas intentan llegar a la cima.", "Su vecino geológico directo es el volcán Koryaksky, mucho más alto.", "Su superficie está cubierta de ceniza y escoria volcánica roja y negra."],
      pt: ["A altitude do pico é de 2.741 metros acima do nível do mar.", "O diâmetro da enorme cratera aproxima-se dos 400 metros.", "A lava da erupção de 1991 preencheu quase completamente a cratera.", "É o destino de caminhada mais popular em Kamchatka entre habitantes locais e turistas.", "Um vulcão típico do tipo 'Somma-Vesuvius' (um novo cone dentro de uma caldeira).", "Nos fins de semana de verão, até centenas de pessoas tentam o ataque ao cume.", "O seu vizinho geológico direto é o vulcão Koryaksky, muito mais alto.", "A sua superfície está coberta por cinza vulcânica e escória vermelha e preta."],
      fr: ["L'altitude du sommet est de 2 741 mètres.", "Le diamètre de l'immense cratère approche les 400 mètres.", "La lave de l'éruption de 1991 a presque entièrement comblé le cratère.", "C'est la destination de randonnée la plus prisée du Kamtchatka pour les locaux et les touristes.", "Il s'agit d'un volcan de type « Somma-Vésuve » (un nouveau cône à l'intérieur d'une caldeira).", "Lors des week-ends d'été, des centaines de personnes tentent l'ascension du sommet.", "Son voisin géologique direct est le volcan Koriakski, nettement plus élevé.", "Sa surface est recouverte de cendres volcaniques rouges et noires et de scories."],
    },
    image: "/poi-images/russia-avachinsky-volcano-relief-v2.webp",
},  {
    id: "russia-dzhugdzhur-mountains-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Dschugdschur", hu: "Dzsugdzsur-hegység", ro: "Munții Djugdjur", en: "Dzhugdzhur Mountains"},
    image: "/poi-images/russia-dzhugdzhur-mountains-relief-v2.webp",
    coords: [138.0, 58.0],
    coords: [138.0, 58.0],
    description: {
      de: "Das Dschugdschur-Gebirge erstreckt sich entlang der nordwestlichen Küste des Ochotskischen Meeres. Es bildet eine natürliche Barriere zum Landesinneren.",
      hu: "A Dzsugdzsur-hegység az Ohotszki-tenger északnyugati partja mentén húzódik. Természetes akadályt képez a szárazföld belseje felé.",
      ro: "Munții Djugdjur se întind de-a lungul coastei de nord-vest a Mării Ohotsk. Formează o barieră naturală față de interiorul continentului.",
      en: "The Dzhugdzhur Mountains stretch along the northwestern coast of the Sea of Okhotsk. They form a natural barrier to the interior of the continent.",
      es: "Los montes Dzhugdzhur se extienden a lo largo de la costa noroeste del mar de Ojotsk. Forman una barrera natural hacia el interior del país.",
      pt: "Os montes Dzhugdzhur estendem-se ao longo da costa noroeste do Mar de Okhotsk. Formam uma barreira natural para o interior do país.",
      fr: "Les monts Dzhugdzhur s'étendent le long de la côte nord-ouest de la mer d'Okhotsk. Ils forment une barrière naturelle vers l'intérieur des terres.",
    },
    facts: {
      de: ["Länge von etwa 700 km", "Höchste Erhebung Pik Topko (1906 m)", "Sehr steile Hänge zum Meer hin", "Dünn besiedeltes Wildnisgebiet"],
      hu: ["Kb. 700 km hosszú", "Legmagasabb pontja a Topko-csúcs (1906 m)", "Nagyon meredek lejtők a tenger felé", "Ritkán lakott vadon"],
      ro: ["Lungime de circa 700 km", "Vârful maxim: Topko (1906 m)", "Versanți foarte abrupți spre mare", "Zonă de sălbăticie slab populată"],
      en: ["Length of about 700 km", "Highest elevation is Topko Peak (1906 m)", "Very steep slopes facing the sea", "Sparsely populated wilderness area"],
      es: ["Longitud de unos 700 km", "Altura máxima Pik Topko (1906 m)", "Laderas muy escarpadas hacia el mar", "Zona de naturaleza virgen poco poblada"],
      pt: ["Comprimento de cerca de 700 km", "Ponto mais alto Pik Topko (1906 m)", "Encostas muito íngremes viradas para o mar", "Área selvagem pouco povoada"],
      fr: ["Longueur d'environ 700 km", "Point culminant Pik Topko (1906 m)", "Versants très escarpés vers la mer", "Zone sauvage très peu peuplée"],
    },
imageHint: "Mountain range meeting the cold Okhotsk sea coast",
    descriptionAdvanced: {
      de: "Das Dschugdschur-Gebirge erstreckt sich als eine massive, fast unüberwindbare Barriere entlang der rauen, windgepeitschten nordwestlichen Küste des Ochotskischen Meeres im russischen Fernen Osten. Mit seinen asymmetrischen Profilen – extrem steile, zerklüftete Felsklippen, die abrupt ins kalte Meer stürzen, und flacher abfallenden Hängen ins kontinentale Landesinnere – trennt es das feuchte, maritime Küstenklima von der trockenen, bitterkalten Taiga Ostsibiriens. Diese völlig ungezähmte und nahezu menschenleere Wildnis ist von dichten, schwer durchdringlichen Lärchen- und Fichtenwäldern bedeckt. Das Gebirge hat eine entscheidende hydrologische Funktion, da es eine scharfe Wasserscheide zwischen den kurzen, reißenden Küstenflüssen und dem gewaltigen Einzugsgebiet des Flusses Aldan bildet.",
      hu: "A Dzsugdzsur-hegység egy hatalmas, szinte áthatolhatatlan természeti gátként magasodik az orosz Távol-Keleten, az Ohotszki-tenger zord, szélfútta északnyugati partvonala mentén. Kifejezetten aszimmetrikus domborzattal rendelkezik: míg a tenger felé extrém meredek, csipkézett sziklafalakkal szakad le, a kontinens belseje felé jóval enyhébben lejt. Ezzel az elrendeződéssel drasztikusan kettéválasztja a csapadékosabb óceáni klímát a száraz és dermesztően hideg kelet-szibériai tajgától. Ezt a teljesen megzabolázatlan, szinte teljesen lakatlan vadont sűrű, nehezen járható vörösfenyő- és lucfenyőerdők borítják. A hegylánc egyben kritikus vízválasztó is, amely elhatárolja a tengerbe rohanó, rövid és sebes vizű partvidéki patakokat az Aldan folyó roppant méretű vízgyűjtő medencéjétől.",
      ro: "Munții Djugdjur se întind ca o barieră masivă, aproape insurmontabilă, de-a lungul coastei aspre și bătute de vânturi de nord-vest a Mării Ohotsk, în Orientul Îndepărtat Rus. Cu un profil accentuat asimetric – faleze stâncoase extrem de abrupte și fragmentate, care se prăbușesc direct în marea rece, și pante care coboară mai blând spre interiorul continental – ei separă brusc climatul maritim umed de taigaua uscată și cumplit de rece a Siberiei de Est. Această sălbăticie complet neîmblânzită și aproape nepopulată este acoperită de păduri dense, greu de străbătut, de zadă și molid. Lanțul muntos îndeplinește o funcție hidrologică crucială, formând o cumpănă a apelor ascuțită între râurile de coastă scurte și torențiale și bazinul hidrografic vast al fluviului Aldan.",
      en: "The Dzhugdzhur Mountains form a massive, seemingly impenetrable natural barrier stretching along the rugged, windswept northwestern coast of the Sea of Okhotsk in the Russian Far East. Defined by a distinctly asymmetrical profile—featuring incredibly steep, craggy cliffs that plunge abruptly into the frigid sea on one side, and gentler, sprawling slopes descending into the continental interior on the other—it drastically separates the damp maritime coastal climate from the dry, bitterly cold taiga of Eastern Siberia. This entirely untamed and virtually unpopulated wilderness is blanketed in dense, challenging forests of larch and spruce. The range plays a critical hydrological role, acting as a sharp drainage divide between the short, torrential coastal streams and the immense, sprawling basin of the Aldan River.",
      es: "Los montes Dzhugdzhur se extienden como una barrera masiva y casi infranqueable a lo largo de la ruda y ventosa costa noroeste del mar de Ojotsk, en el Lejano Oriente ruso. Con sus perfiles asimétricos —acantilados rocosos extremadamente escarpados que caen abruptamente al mar frío y laderas que descienden más suavemente hacia el interior continental— separa el clima costero marítimo y húmedo de la taiga seca y gélida de Siberia oriental. Esta naturaleza totalmente indómita y casi deshabitada está cubierta por densos bosques de alerces y abetos de difícil penetración. La cordillera tiene una función hidrológica crucial, ya que forma una clara divisoria de aguas entre los cortos y torrenciales ríos costeros y la enorme cuenca del río Aldán.",
      pt: "As montanhas Dzhugdzhur estendem-se como uma barreira maciça e quase intransponível ao longo da costa noroeste áspera e fustigada pelo vento do Mar de Okhotsk, no Extremo Oriente russo. Com os seus perfis assimétricos – penhascos rochosos extremamente íngremes e acidentados que caem abruptamente no mar frio e encostas que descem mais suavemente para o interior continental – separam o clima costeiro marítimo húmido da taiga seca e gélida da Sibéria Oriental. Esta selva totalmente indomada e quase desabitada está coberta por florestas densas e impenetráveis de lariços e abetos. A montanha tem uma função hidrológica crucial, pois forma uma bacia hidrográfica nítida entre os rios costeiros curtos e torrenciais e a enorme bacia hidrográfica do rio Aldan.",
      fr: "Les monts Dzhugdzhur s'étendent comme une barrière massive et presque infranchissable le long de la côte nord-ouest rude et balayée par les vents de la mer d'Okhotsk, dans l'Extrême-Orient russe. Présentant des profils asymétriques — des falaises rocheuses extrêmement escarpées plongeant brusquement dans la mer froide et des pentes plus douces vers l'intérieur des terres — ils séparent le climat maritime humide de la côte de la taïga sèche et glaciale de Sibérie orientale. Cette nature sauvage totalement indomptée et quasi déserte est recouverte de forêts de mélèzes et d'épicéas denses et difficiles d'accès. La chaîne remplit une fonction hydrologique cruciale, car elle forme une ligne de partage des eaux nette entre les fleuves côtiers courts et impétueux et l'immense bassin versant de l'Aldan.",
    },
    factsAdvanced: {
      de: ["A hegylánc hozzávetőlegesen 700 kilométer hosszan követi a partvonalat", "A legmagasabb pontja a 1906 méteres Topko-csúcs", "Átlagos magassága 800 és 1200 méter között mozog", "Szinte teljesen elzárja Szibéria belsejét a csendes-óceáni légtömegektől", "Népességsűrűsége a nullához közelít, infrastruktúrája szinte nincs", "Délnyugati folytatása a Sztanovoj-hegylánchoz csatlakozik", "Kőzetanyaga főként mezozoikumi gránitokból és palákból áll", "Gyakoriak a tengerpartra lecsapó rendkívül erős, pusztító viharok"],
      hu: [],
      ro: [],
      en: [],
      es: ["La cadena montañosa sigue la línea costera durante unos 700 kilómetros", "El punto más alto es el pico Topko, con 1906 metros", "Su altura media oscila entre 800 y 1200 metros", "Bloquea casi por completo el paso de las masas de aire del Pacífico hacia el interior de Siberia", "La densidad de población es cercana a cero y casi no hay infraestructura", "Su continuación hacia el suroeste se une a la cordillera Stanovói", "Se compone principalmente de granitos y esquistos mesozoicos", "Son frecuentes las tormentas extremadamente fuertes y destructivas que golpean la costa"],
      pt: ["A cordilheira segue a linha costeira por aproximadamente 700 quilómetros", "O ponto mais alto é o pico Topko, com 1906 metros", "A altitude média varia entre 800 e 1200 metros", "Bloqueia quase completamente o interior da Sibéria das massas de ar do Pacífico", "A densidade populacional aproxima-se de zero, quase não existe infraestrutura", "A sua continuação sudoeste liga-se à cordilheira Stanovoy", "Composta principalmente por granitos e xistos mesozoicos", "Tempestades extremamente fortes e destrutivas que atingem a costa são frequentes"],
      fr: ["La chaîne longe la côte sur environ 700 kilomètres", "Le point culminant est le mont Topko à 1906 mètres", "L'altitude moyenne varie entre 800 et 1200 mètres", "Isole presque totalement l'intérieur de la Sibérie des masses d'air du Pacifique", "La densité de population est proche de zéro, sans presque aucune infrastructure", "Son prolongement sud-ouest rejoint la chaîne des monts Stanovoï", "Constituée principalement de granites et de schistes mésozoïques", "Des tempêtes extrêmement violentes et destructrices s'abattent souvent sur la côte"],
    },
    image: "/poi-images/russia-dzhugdzhur-mountains-relief-v2.webp",
},  {
    id: "russia-kolyma-mountains-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Kolyma-Gebirge", hu: "Kolima-hegyvidék", ro: "Munții Kolîma", en: "Kolyma Mountains"},
    image: "/poi-images/russia-kolyma-mountains-relief-v2.webp",
    coords: [155.0, 63.0],
    coords: [155.0, 63.0],
    description: {
      de: "Das Kolyma-Gebirge ist ein ausgedehntes Hochlandsystem im Nordosten Russlands. Es ist bekannt für seine reichen Goldvorkommen und sein raues Klima.",
      hu: "A Kolima-hegyvidék egy kiterjedt felföldi rendszer Oroszország északkeleti részén. Gazdag aranylelőhelyeiről és zord éghajlatáról ismert.",
      ro: "Munții Kolîma reprezintă un sistem vast de podișuri și munți în nord-estul Rusiei. Sunt cunoscuți pentru zăcămintele de aur și climatul aspru.",
      en: "The Kolyma Mountains are an extensive upland system in northeastern Russia. They are known for rich gold deposits and a harsh subarctic climate.",
      es: "Las montañas de Kolymá son un extenso sistema de tierras altas en el noreste de Rusia. Es conocido por sus ricos depósitos de oro y su clima severo.",
      pt: "As montanhas de Kolyma são um extenso sistema de planalto no nordeste da Rússia. É conhecido pelas suas ricas jazidas de ouro e pelo seu clima severo.",
      fr: "Les monts de la Kolyma sont un vaste système de hauts plateaux au nord-est de la Russie. Ils sont connus pour leurs riches gisements d'or et leur climat rude.",
    },
    facts: {
      de: ["Erstreckt sich über 1100 km", "Höchster Berg ca. 1962 m", "Zentrum der sowjetischen Goldgewinnung", "Fast vollständig im Permafrostbereich"],
      hu: ["1100 km hosszan nyúlik el", "Legmagasabb pontja kb. 1962 m", "A szovjet aranybányászat központja volt", "Szinte teljes egészében permafrost terület"],
      ro: ["Se întind pe 1100 km", "Altitudinea maximă de circa 1962 m", "Centrul exploatărilor de aur sovietice", "Situat aproape integral în zona de permafrost"],
      en: ["Stretches for about 1100 km", "Highest peak is around 1962 m", "Center of historical Soviet gold mining", "Almost entirely within the permafrost zone"],
      es: ["Se extiende por más de 1100 km", "Montaña más alta aprox. 1962 m", "Centro de la producción de oro soviética", "Casi totalmente en la zona de permafrost"],
      pt: ["Estende-se por mais de 1100 km", "Montanha mais alta aprox. 1962 m", "Centro da produção de ouro soviética", "Quase totalmente na zona de permafrost"],
      fr: ["S'étend sur plus de 1100 km", "Sommet le plus élevé env. 1962 m", "Centre de la production d'or soviétique", "Presque entièrement dans la zone de pergélisol"],
    },
imageHint: "Vast undulating mountain tundra of the Kolyma region",
    descriptionAdvanced: {
      de: "Das Kolyma-Gebirge ist ein riesiges, archaisches Hochlandsystem im äußersten Nordosten Russlands, das eine der lebensfeindlichsten und isoliertesten Regionen der Erde prägt. Diese weitläufige, durch stark verwitterte, oft abgeflachte Gipfel und unendliche Frostschutthalden gekennzeichnete Gebirgslandschaft befindet sich vollständig in der Zone des kontinuierlichen Permafrosts. Das gnadenlose subarktische Klima lässt hier im Winter Temperaturen bis an die -60 °C-Marke sinken. Berühmtheit – und historische Berüchtigtheit – erlangte die Kolyma-Region in der Sowjetära durch die Entdeckung unermesslicher Goldvorkommen. Diese wurden in den grausamen Arbeitslagern (Gulags) unter unmenschlichen Bedingungen abgebaut, was dem Gebiet den Namen 'Land des weißen Todes' einbrachte. Heute ist das Gebirge ein stilles, dünn besiedeltes Denkmal der Erdgeschichte und menschlicher Tragödien.",
      hu: "A Kolima-hegyvidék egy roppant kiterjedésű, ősi felföldi rendszer Oroszország távoli északkeleti peremén, amely a bolygó egyik leginkább zord és elszigetelt vidékét formálja. Ezt a végtelen, az erózió által erősen lepusztított, lapos hegytetőkkel és kiterjedt fagyos kőtengerekkel (kurum) borított hegyvidéket teljes egészében a folyamatos permafrost zónája uralja. A könyörtelen szubarktikus éghajlat miatt a téli hónapokban a hőmérséklet nem ritkán -60 °C köré zuhan. A Kolima régió a szovjet korszakban tett szert világhírre – és sötét hírnévre –, amikor felfedezték felbecsülhetetlen értékű aranykészleteit. Ezeket a Gulag-rendszer hírhedt, kegyetlen munkatáboraiban, embertelen körülmények között termelték ki, ami miatt a területet a 'fehér halál földjének' is nevezték. Ma a hegyvidék a földi erők és az emberi tragédiák csendes, szinte lakatlan emlékműve.",
      ro: "Munții Kolîma reprezintă un sistem vast și arhaic de podișuri în extremul nord-est al Rusiei, definind una dintre cele mai ostile și izolate regiuni de pe Pământ. Acest peisaj montan extins, caracterizat prin vârfuri puternic erodate, adesea aplatizate și mări nesfârșite de grohotiș generat de îngheț, este situat complet în zona de permafrost continuu. Climatul subarctic neînduplecat face ca temperaturile de iarnă să coboare frecvent la pragul de -60 °C. Regiunea Kolîma a câștigat faimă – și o notorietate istorică sumbră – în perioada sovietică, odată cu descoperirea unor zăcăminte inestimabile de aur. Acestea au fost extrase în condiții inumane în taberele brutale de muncă forțată (Gulag), aducând zonei supranumele de 'Țara Morții Albe'. Astăzi, munții sunt un monument tăcut, slab populat, al istoriei geologice și al tragediilor umane.",
      en: "The Kolyma Mountains form a colossal, archaic upland system in the extreme northeast of Russia, shaping one of the most inhospitable and profoundly isolated regions on Earth. This sprawling, heavily weathered mountain landscape, characterized by flattened summits and endless seas of frost-shattered rock debris, lies entirely within the zone of continuous permafrost. The merciless subarctic climate routinely plunges winter temperatures toward a staggering -60 °C. The Kolyma region achieved global fame—and grim historical notoriety—during the Soviet era following the discovery of immeasurable gold deposits. These vast riches were brutally extracted in the notorious forced labor camps (Gulags) under inhumane conditions, earning the area the chilling moniker 'The Land of White Death.' Today, the mountains stand as a silent, sparsely populated monument to both relentless geological forces and profound human tragedy.",
      es: "Las montañas de Kolymá son un sistema de tierras altas vasto y arcaico en el extremo noreste de Rusia, que define una de las regiones más inhóspitas y aisladas de la Tierra. Este paisaje montañoso, caracterizado por picos erosionados y a menudo aplanados y depósitos de pedregal helado, se encuentra totalmente en la zona de permafrost continuo. El implacable clima subártico hace que las temperaturas en invierno desciendan hasta los -60 °C. La región de Kolymá alcanzó fama, e infamia histórica, en la era soviética por el descubrimiento de inmensos depósitos de oro. Estos fueron explotados en crueles campos de trabajo (gulags) bajo condiciones inhumanas, lo que le valió a la zona el nombre de 'Tierra de la Muerte Blanca'. Hoy, la cordillera es un monumento silencioso y escasamente poblado a la historia de la Tierra y a las tragedias humanas.",
      pt: "As montanhas de Kolyma são um vasto e arcaico sistema de planalto no extremo nordeste da Rússia, que define uma das regiões mais inóspitas e isoladas da Terra. Esta paisagem montanhosa, caracterizada por picos erodidos e muitas vezes aplanados e depósitos de cascalho gelado, encontra-se totalmente na zona de permafrost contínuo. O implacável clima subártico faz com que as temperaturas no inverno desçam até aos -60 °C. A região de Kolyma alcançou fama, e infâmia histórica, na era soviética pela descoberta de imensas jazidas de ouro. Estas foram exploradas em cruéis campos de trabalho (gulags) sob condições desumanas, o que valeu à zona o nome de 'Terra da Morte Branca'. Hoje, a cordilheira é um monumento silencioso e escassamente povoado à história da Terra e às tragédias humanas.",
      fr: "Les monts de la Kolyma constituent un système montagneux vaste et archaïque situé à l'extrême nord-est de la Russie, façonnant l'une des régions les plus hostiles et les plus isolées au monde. Ce paysage montagneux, caractérisé par des sommets fortement érodés, souvent aplatis, et d'infinis éboulis de gel, se trouve entièrement dans la zone de pergélisol continu. Le climat subarctique impitoyable fait chuter les températures hivernales jusqu'à -60 °C. La région de la Kolyma est devenue célèbre — et historiquement tristement célèbre — à l'époque soviétique à la suite de la découverte d'immenses gisements d'or. Ceux-ci étaient exploités dans des camps de travail cruels (goulags) dans des conditions inhumaines, ce qui a valu à la région le nom de « pays de la mort blanche ». Aujourd'hui, la chaîne de montagnes est un monument silencieux et peu peuplé de l'histoire de la Terre et des tragédies humaines.",
    },
    factsAdvanced: {
      de: ["A hegyvidék megközelítőleg 1100 kilométer hosszan terül el", "A legmagasabb azonosított hegycsúcsa mintegy 1962 méter magas", "A terület a folyamatos és mély permafrost övezetében fekszik", "A történelmi szovjet arany- és ónbányászat legfontosabb központja volt", "A hírhedt, csontvázakon épült 'Csontok útja' (R504) keresztezi a régiót", "Növényzetét főként ritkás, fagytűrő szibériai vörösfenyő és tundra uralja", "Nyáron a mocsaras tundra hatalmas, áthatolhatatlan szúnyograjok hazája", "Geológiai felépítését javarészt mezozoikumi homokkő és pala adja"],
      hu: [],
      ro: [],
      en: [],
      es: ["La cordillera se extiende a lo largo de aproximadamente 1100 kilómetros", "Su pico más alto identificado tiene unos 1962 metros de altura", "El área se encuentra en una zona de permafrost continuo y profundo", "Fue el centro más importante de la histórica minería soviética de oro y estaño", "La infame 'Ruta de los Huesos' (R504), construida sobre esqueletos, cruza la región", "Su vegetación está dominada por alerces siberianos dispersos y tundra resistente al frío", "En verano, la tundra pantanosa es hogar de enormes e impenetrables nubes de mosquitos", "Su estructura geológica se compone principalmente de arenisca y esquisto mesozoicos"],
      pt: ["A cordilheira estende-se por aproximadamente 1100 quilómetros", "O seu pico mais alto identificado tem cerca de 1962 metros de altura", "A área encontra-se numa zona de permafrost contínuo e profundo", "Foi o centro mais importante da histórica mineração soviética de ouro e estanho", "A infame 'Estrada dos Ossos' (R504), construída sobre esqueletos, atravessa a região", "A sua vegetação é dominada por lariços siberianos dispersos e tundra resistente ao frio", "No verão, a tundra pantanosa é o lar de enormes e impenetráveis nuvens de mosquitos", "A sua estrutura geológica é composta principalmente por arenito e xisto mesozoicos"],
      fr: ["La région montagneuse s'étend sur environ 1 100 kilomètres de long", "Son sommet identifié le plus élevé culmine à environ 1 962 mètres", "Le territoire se situe dans la zone de pergélisol continu et profond", "C'était le centre le plus important de l'exploitation soviétique de l'or et de l'étain", "La célèbre « Route des Os » (R504) traverse la région", "La végétation est dominée par des mélèzes de Sibérie clairsemés et la toundra", "En été, la toundra marécageuse abrite d'immenses essaims de moustiques impénétrables", "Sa structure géologique est composée principalement de grès et de schiste mésozoïques"],
    },
    image: "/poi-images/russia-kolyma-mountains-relief-v2.webp",
},  {
    id: "russia-anadyr-plateau-relief-v2",
    parent: "RU",
    type: "landmark",
    name: { de: "Anadyr-Plateau", hu: "Anadir-fennsík", ro: "Podișul Anadîr", en: "Anadyr Plateau"},
    image: "/poi-images/russia-anadyr-plateau-relief-v2.webp",
    coords: [170.0, 66.5],
    coords: [170.0, 66.5],
    description: {
      de: "Das Anadyr-Plateau liegt im äußersten Nordosten Sibiriens, in der Region Tschukotka. Es ist ein bergiges Hochland vulkanischen Ursprungs.",
      hu: "Az Anadir-fennsík Szibéria távoli északkeleti részén, Csukcsföldön található. Vulkáni eredetű, hegyvidéki magasföld.",
      ro: "Podișul Anadîr este situat în extremul nord-est al Siberiei, în regiunea Ciukotka. Este un podiș muntos de origine vulcanică.",
      en: "The Anadyr Plateau is located in the far northeast of Siberia, in the Chukotka region. It is a mountainous upland of volcanic origin.",
      es: "La meseta de Anadyr se encuentra en el extremo noreste de Siberia, en la región de Chukotka. Es un altiplano montañoso de origen volcánico.",
      pt: "O planalto de Anadyr está localizado no extremo nordeste da Sibéria, na região de Chukotka. É uma área de terras altas montanhosas de origem vulcânica.",
      fr: "Le plateau de l'Anadyr est situé à l'extrême nord-est de la Sibérie, dans la région de Tchoukotka. C'est un haut plateau montagneux d'origine volcanique.",
    },
    facts: {
      de: ["Durchschnittshöhe 800-1100 m", "Quelle des Flusses Anadyr", "Besteht hauptsächlich aus Basalt", "Heimat großer Herden von Wildrentieren"],
      hu: ["Átlagos magassága 800-1100 m", "Az Anadir-folyó forrásvidéke", "Főleg bazaltkőzet alkotja", "Nagy vadon élő rénszarvascsordák otthona"],
      ro: ["Înălțime medie de 800-1100 m", "Izvorul râului Anadîr", "Compus în principal din bazalt", "Habitat pentru turme mari de reni sălbatici"],
      en: ["Average elevation of 800-1100 m", "Source of the Anadyr River", "Composed primarily of basalt", "Home to large herds of wild reindeer"],
      es: ["Altura media de 800-1100 m.", "Nacimiento del río Anadyr.", "Compuesta principalmente de basalto.", "Hogar de grandes manadas de renos salvajes."],
      pt: ["Altitude média de 800-1100 m.", "Nascente do rio Anadyr.", "Consiste principalmente em basalto.", "Lar de grandes manadas de renas selvagens."],
      fr: ["Altitude moyenne de 800 à 1 100 m.", "Source du fleuve Anadyr.", "Composé principalement de basalte.", "Habitat de grandes hardes de rennes sauvages."],
    },
imageHint: "Barren rocky plateau in the Chukotka wilderness",
    descriptionAdvanced: {
      de: "Das Anadyr-Plateau, tief in der abgelegenen Tschukotka-Region im äußersten Nordosten Sibiriens verborgen, ist eine ausgedehnte, fast surreal wirkende vulkanische Hochfläche. Die Landschaft wird von dunklen, abgeflachten Basaltkuppen dominiert, die das Ergebnis gigantischer prähistorischer Lavaausflüsse sind und heute durch tiefe, von eisigen Flüssen gegrabene Schluchten durchschnitten werden. Diese baumlose, arktische Gesteinswüste liegt komplett in der Zone des Dauerfrostbodens und ist extreme Winde und unerbittliche Kälte gewohnt. Hier entspringt der mächtige Fluss Anadyr, der sich seinen Weg durch die Tundra bis zur Beringsee bahnt. Obwohl das raue Klima menschliche Ansiedlungen fast unmöglich macht, ist das weite Plateau ein wichtiges Rückzugsgebiet für die letzten verbliebenen, riesigen Herden von wilden Rentieren sowie für Schneeschafe und Polarfüchse.",
      hu: "Az Anadir-fennsík, amely Szibéria legkeletibb, elzárt peremén, Csukcsföld (Csukotka) mélyén rejtőzik, egy hatalmas kiterjedésű, szinte szürreális hangulatú vulkáni magasföld. A tájat sötét, lapos tetejű bazalthegyek és dómok uralják – történelem előtti gigantikus lávaömlések emlékei –, amelyeket napjainkra mély, a jéghideg folyók által kivájt szurdokok hálóznak be. Ez a fátlan, arktikus kősivatag teljes egészében a tartósan fagyott talaj (permafrost) zónájában fekszik, és extrém viharos szeleknek, valamint könyörtelen hidegnek van kitéve. Innen indul útjára a hatalmas Anadir folyó, amely a tundrán keresztül a Bering-tengerig kanyarog. Bár a szélsőséges éghajlat az emberi megtelepedést szinte lehetetlenné teszi, a tágas fennsík kulcsfontosságú menedéke az utolsó hatalmas, vadon élő rénszarvascsordáknak, a havasi juhoknak és a sarki rókáknak.",
      ro: "Podișul Anadîr, ascuns adânc în regiunea izolată Ciukotka din extremul nord-est al Siberiei, este un platou vulcanic vast, cu o atmosferă aproape suprarealistă. Peisajul este dominat de cupole de bazalt întunecate și aplatizate, rezultatul unor revărsări preistorice gigantice de lavă, care astăzi sunt intersectate de defileuri adânci săpate de râuri înghețate. Acest deșert arctic de piatră, lipsit de copaci, se află complet în zona de permafrost și este supus unor vânturi extreme și unui frig necruțător. Aici își are izvoarele puternicul fluviu Anadîr, care își croiește drum prin tundră până la Marea Bering. Deși climatul aspru face așezările umane aproape imposibile, platoul vast reprezintă un sanctuar vital pentru ultimele turme uriașe de reni sălbatici rămase, precum și pentru oile de zăpadă și vulpile polare.",
      en: "The Anadyr Plateau, hidden deep within the remote Chukotka region in the extreme northeast of Siberia, is an expansive, almost surreal volcanic upland. The landscape is dominated by dark, flat-topped basalt domes and mesas—the remnants of colossal prehistoric lava flows—that are now deeply incised by gorges carved by frigid, rushing rivers. This treeless, arctic expanse of shattered rock lies entirely within the continuous permafrost zone and is battered by extreme winds and unrelenting cold. It serves as the vital headwaters for the mighty Anadyr River, which winds its way across the tundra to the Bering Sea. While the punishing climate renders human settlement virtually impossible, the vast plateau acts as a critical refuge for the last remaining massive herds of wild reindeer, alongside snow sheep and arctic foxes.",
      es: "La meseta de Anadyr, escondida en la remota región de Chukotka, es una vasta superficie volcánica de aspecto casi irreal. El paisaje está dominado por lomas de basalto oscuro producto de gigantescas coladas prehistóricas, hoy divididas por profundos cañones excavados por ríos helados. Este desierto de roca ártica sin árboles se encuentra en la zona de permafrost y soporta vientos extremos y frío implacable. Aquí nace el caudaloso río Anadyr, que se abre paso por la tundra hasta el mar de Bering. Aunque el clima severo hace casi imposible el asentamiento humano, la meseta es un refugio vital para manadas de renos salvajes, así como para muflones de las nieves y zorros árticos.",
      pt: "O planalto de Anadyr, escondido na remota região de Chukotka, no extremo nordeste da Sibéria, é uma vasta área vulcânica de aparência quase surreal. A paisagem é dominada por cumes de basalto escuro e achatados, resultado de gigantescos fluxos de lava pré-históricos, hoje cortados por desfiladeiros profundos escavados por rios gelados. Este deserto rochoso ártico, sem árvores, está completamente na zona de permafrost e está habituado a ventos extremos e frio implacável. Aqui nasce o poderoso rio Anadyr, que faz o seu caminho através da tundra até ao Mar de Bering. Embora o clima rigoroso torne os assentamentos humanos quase impossíveis, o vasto planalto é um importante refúgio para as últimas manadas gigantes de renas selvagens, bem como para carneiros-selvagens e raposas-do-ártico.",
      fr: "Le plateau de l'Anadyr, niché dans la région reculée de Tchoukotka, est une vaste étendue volcanique à l'aspect presque irréel. Le paysage est dominé par des dômes de basalte sombre, nés de gigantesques coulées de lave préhistoriques, aujourd'hui entaillés par de profondes gorges creusées par des rivières glacées. Ce désert de pierre arctique sans arbres se trouve entièrement dans la zone de pergélisol et subit des vents extrêmes et un froid impitoyable. C'est ici que prend sa source le puissant fleuve Anadyr, qui traverse la toundra jusqu'à la mer de Béring. Si le climat rude rend toute installation humaine presque impossible, le plateau est un refuge majeur pour les dernières grandes hardes de rennes sauvages, ainsi que pour les mouflons des neiges et les renards polaires.",
    },
    factsAdvanced: {
      de: ["A fennsík átlagos tengerszint feletti magassága 800 és 1100 méter között van", "A domborzatát meghatározó sötét kőzet a késő kréta kori bazalt", "A Csukcs-félsziget egyik legfontosabb hidrográfiai központja", "Ezen a területen ered a régió legnagyobb folyója, a 1150 km hosszú Anadir", "Teljes kiterjedésében a sarkköri fatundra és a kopár kősivatag uralkodik rajta", "Évente több ezer vad rénszarvas vonul át a fennsík ritkás legelőin", "A terület szinte teljesen lakatlan, utak és települések nélkül", "Éghajlata szubarktikus, rendkívül zord, hosszú, fagyos és sötét telekkel"],
      hu: [],
      ro: [],
      en: [],
      es: ["La altura media de la meseta está entre 800 y 1.100 metros sobre el nivel del mar.", "La roca oscura que define su relieve es basalto del Cretácico superior.", "Es uno de los centros hidrográficos más importantes de la península de Chukchi.", "En esta zona nace el río más grande de la región, el Anadyr, de 1.150 km de largo.", "Predominan en toda su extensión la tundra ártica y el desierto de piedra árido.", "Miles de renos salvajes migran anualmente a través de los escasos pastos de la meseta.", "El área está casi totalmente deshabitada, sin carreteras ni asentamientos.", "Su clima es subártico, extremadamente duro, con inviernos largos, gélidos y oscuros."],
      pt: ["A altitude média do planalto situa-se entre 800 e 1.100 metros acima do nível do mar.", "A rocha escura que define o seu relevo é basalto do Cretáceo Superior.", "É um dos centros hidrográficos mais importantes da Península de Chukotka.", "Nesta área nasce o maior rio da região, o Anadyr, com 1.150 km de comprimento.", "Em toda a sua extensão, predominam a tundra florestal ártica e o deserto de pedra estéril.", "Anualmente, milhares de renas selvagens migram através das pastagens esparsas do planalto.", "A área é quase completamente desabitada, sem estradas ou povoados.", "O seu clima é subártico, extremamente rigoroso, com invernos longos, gelados e escuros."],
      fr: ["L'altitude moyenne du plateau se situe entre 800 et 1 100 mètres.", "La roche sombre qui définit son relief est du basalte datant du Crétacé supérieur.", "C'est l'un des centres hydrographiques les plus importants de la Tchoukotka.", "C'est ici que naît le plus long fleuve de la région, l'Anadyr (1 150 km).", "La toundra forestière arctique et le désert de pierre aride dominent toute l'étendue.", "Des milliers de rennes sauvages migrent chaque année à travers les rares pâturages du plateau.", "La zone est presque totalement inhabitée, sans routes ni villages.", "Le climat y est subarctique et extrêmement rude, avec des hivers longs, glacials et sombres."],
    },
    image: "/poi-images/russia-anadyr-plateau-relief-v2.webp",
},  {
    id: "russia-barguzin-range-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Bargusingebirge", hu: "Barguzin-hegység", ro: "Munții Barguzin", en: "Barguzin Range"},
    image: "/poi-images/russia-barguzin-range-relief-v2.webp",
    coords: [110.0, 54.5],
    coords: [110.0, 54.5],
    description: {
      de: "Das Bargusingebirge erstreckt sich am nordöstlichen Ufer des Baikalsees. Es ist ein Hochgebirge mit schroffen Graten und tiefen Gletschertälern.",
      hu: "A Barguzin-hegység a Bajkál-tó északkeleti partján húzódik. Meredek gerincekkel és mély gleccservölgyekkel tagolt magashegység.",
      ro: "Munții Barguzin se întind pe țărmul nord-estic al Lacului Baikal. Este un lanț muntos cu creste ascuțite și văi glaciare adânce.",
      en: "The Barguzin Range stretches along the northeastern shore of Lake Baikal. It is a high mountain range with rugged ridges and deep glacial valleys.",
      es: "La cordillera de Barguzín se extiende por la orilla noreste del lago Baikal. Es una zona de alta montaña con crestas escarpadas y profundos valles glaciares.",
      pt: "A cordilheira de Barguzin estende-se ao longo da margem nordeste do lago Baikal. É uma região de alta montanha com cristas escarpadas e vales glaciares profundos.",
      fr: "La chaîne de Bargouzine s'étend sur la rive nord-est du lac Baïkal. C'est une haute montagne aux crêtes abruptes et aux profondes vallées glaciaires.",
    },
    facts: {
      de: ["Höchste Erhebung 2841 m", "Bekannt für das Bargusin-Naturreservat", "Heimat des berühmten Zobels", "Reicht direkt bis an den Baikalsee"],
      hu: ["Legmagasabb pontja 2841 m", "Híres a Barguzin természetvédelmi területről", "A híres barguzini coboly élőhelye", "Közvetlenül a Bajkál-tó partjáig ér"],
      ro: ["Înălțime maximă de 2841 m", "Faimoși pentru Rezervația Naturală Barguzin", "Habitatul celebrului samur de Barguzin", "Ajung direct până la malul Lacului Baikal"],
      en: ["Highest elevation is 2841 m", "Famous for the Barguzin Nature Reserve", "Home to the famous Barguzin sable", "Extends directly to the shores of Lake Baikal"],
      es: ["Altura máxima de 2841 m", "Conocida por la Reserva Natural de Barguzín", "Hogar de la famosa marta cibelina", "Llega directamente hasta el lago Baikal"],
      pt: ["Ponto mais alto a 2841 m", "Conhecida pela Reserva Natural de Barguzin", "Lar da famosa zibelina", "Alcança diretamente o lago Baikal"],
      fr: ["Point culminant à 2841 m", "Connue pour la réserve naturelle de Bargouzine", "Patrie de la célèbre zibeline", "S'étend directement jusqu'au lac Baïkal"],
    },
imageHint: "Jagged mountain peaks overlooking Lake Baikal",
    descriptionAdvanced: {
      de: "Das Bargusingebirge ist ein spektakuläres, alpines Hochgebirge, das sich wie eine schützende Mauer über 280 Kilometer entlang der steilen Nordostküste des Baikalsees erhebt. Seine majestätischen, von alten Gletschern scharf geschliffenen Granitgipfel fallen oft dramatisch und fast senkrecht in das klare, unergründlich tiefe Wasser des Sees ab. Die tief eingeschnittenen, schwer zugänglichen Täler der Westflanke sind von üppiger, dunkler Taiga bedeckt, während die Gipfelregionen von rauen Felsen und Schneefeldern dominiert werden. In diesem wilden Naturparadies liegt das Bargusin-Naturreservat, das älteste Reservat Russlands, welches 1916 eigens gegründet wurde, um den legendären und damals fast ausgerotteten Bargusin-Zobel vor der Vernichtung zu bewahren. Heute ist das Gebirge ein Zufluchtsort für eine ungestörte sibirische Fauna und ein Traumziel für unerschrockene Trekker.",
      hu: "A Barguzin-hegység egy látványos, alpesi karakterű magashegység, amely több mint 280 kilométer hosszan magasodik védőfalként a Bajkál-tó meredek északkeleti partvidékén. Ősi jégárak által élesre csiszolt, fenséges gránitcsúcsai sok helyen drámai módon, szinte függőleges sziklafalakkal szakadnak bele a tó kristálytiszta, feneketlen vizébe. A nyugati lejtők mélyen bevágódott, nehezen járható völgyeit sötét és buja tajgaerdők borítják, míg a magasabb régiókat a kopár sziklák és a kiterjedt hómezők uralják. Ebben a vad természeti paradicsomban található Oroszország legelső, 1916-ban alapított természetvédelmi területe, a Barguzin Bioszféra-rezervátum, amelyet kifejezetten a kihalás szélére sodródott legendás barguzini coboly megmentésére hoztak létre. A hegység ma a háborítatlan szibériai vadvilág menedéke és a legbátrabb túrázók álomcélpontja.",
      ro: "Munții Barguzin formează un lanț montan alpin spectaculos, care se înalță ca un zid protector pe o distanță de peste 280 de kilometri de-a lungul coastei abrupte de nord-est a Lacului Baikal. Vârfurile lor maiestuoase de granit, ascuțite de ghețarii străvechi, se prăbușesc adesea dramatic, aproape vertical, în apele limpezi și insondabil de adânci ale lacului. Văile adânc incizate și greu accesibile de pe flancul vestic sunt acoperite de o taiga luxuriantă și întunecată, în timp ce regiunile de vârf sunt dominate de stânci aspre și câmpuri de zăpadă. În acest paradis natural sălbatic se află Rezervația Naturală Barguzin, cea mai veche rezervație din Rusia, fondată în 1916 cu scopul precis de a salva de la exterminare legendarul samur de Barguzin, pe atunci aproape dispărut. Astăzi, munții sunt un sanctuar pentru fauna siberiană netulburată și o destinație de vis pentru drumeții intrepizi.",
      en: "The Barguzin Range is a spectacular, sharply profiled alpine mountain system that rises like a massive protective fortress for over 280 kilometers along the precipitous northeastern shore of Lake Baikal. Its majestic granite peaks, severely sculpted by ancient glaciation, frequently plunge in dramatic, near-vertical drops directly into the pristine, unfathomably deep waters of the lake. The deeply incised, difficult-to-access valleys on the western flanks are choked with dense, dark taiga, while the soaring high-altitude regions are dominated by jagged rock and persistent snowfields. Nestled within this wild natural paradise is the Barguzin Nature Reserve, Russia's very first protected area, established in 1916 specifically to save the highly prized and then nearly extinct Barguzin sable from total annihilation. Today, the range remains an impregnable sanctuary for undisturbed Siberian wildlife and a dream destination for intrepid trekkers.",
      es: "La cordillera de Barguzín es una espectacular cadena montañosa alpina que se alza como un muro protector a lo largo de 280 kilómetros de la escarpada costa noreste del lago Baikal. Sus majestuosos picos de granito, afilados por antiguos glaciares, caen a menudo de forma dramática y casi vertical hacia las aguas claras y profundas del lago. Los valles de la vertiente occidental, profundamente incisos y de difícil acceso, están cubiertos por una exuberante y oscura taiga, mientras que las regiones altas están dominadas por rocas agrestes y campos de nieve. En este paraíso natural virgen se encuentra la Reserva Natural de Barguzín, la más antigua de Rusia, fundada en 1916 específicamente para salvar de la extinción a la legendaria marta cibelina de Barguzín. Hoy, la cordillera es un refugio para la fauna siberiana y un destino soñado para los excursionistas intrépidos.",
      pt: "A cordilheira de Barguzin é uma espetacular cadeia montanhosa alpina que se eleva como uma muralha protetora ao longo de 280 quilómetros da costa nordeste íngreme do lago Baikal. Os seus picos majestosos de granito, afiados por antigos glaciares, caem frequentemente de forma dramática e quase vertical nas águas claras e profundas do lago. Os vales profundamente incisos e de difícil acesso da vertente ocidental estão cobertos por uma taiga densa e escura, enquanto as regiões dos cumes são dominadas por rochas ásperas e campos de neve. Neste paraíso natural selvagem encontra-se a Reserva Natural de Barguzin, a reserva mais antiga da Rússia, fundada em 1916 para proteger a lendária zibelina de Barguzin da extinção. Atualmente, a montanha é um refúgio para a fauna siberiana imperturbável e um destino de sonho para trekkers destemidos.",
      fr: "La chaîne de Bargouzine est une chaîne de haute montagne alpine spectaculaire qui s'élève comme un mur protecteur sur 280 kilomètres le long de la côte nord-est escarpée du lac Baïkal. Ses pics granitiques majestueux, sculptés par d'anciens glaciers, plongent souvent de manière spectaculaire et presque verticale dans les eaux claires et insondables du lac. Les vallées profondément encaissées et difficiles d'accès du versant ouest sont recouvertes d'une taïga sombre et luxuriante, tandis que les régions sommitales sont dominées par des rochers bruts et des névés. C'est dans ce paradis naturel sauvage que se trouve la réserve naturelle de Bargouzine, la plus ancienne de Russie, fondée en 1916 pour sauver de l'extinction la légendaire zibeline de Bargouzine. Aujourd'hui, la chaîne est un refuge pour une faune sibérienne préservée et une destination de rêve pour les randonneurs intrépides.",
    },
    factsAdvanced: {
      de: ["A hegység legmagasabb, éles gránitcsúcsai elérik a 2841 métert", "Több mint 280 kilométer hosszan kíséri a Bajkál-tó partvonalát", "Itt hozták létre 1916-ban Oroszország legelső természetvédelmi területét", "A terület a rendkívül értékes prémes állat, a barguzini coboly legfőbb menedéke", "Nyugati, tó felőli lejtőin jelentős, 1000 millimétert meghaladó csapadék hullik", "Számos meleg vizű, ásványi anyagokban gazdag termálforrás fakad a völgyeiben", "Geológiailag főként proterozoikumi gránitból és kristályos palából áll", "A keleti lejtők fokozatosan ereszkednek le a szárazabb Barguzin-medencébe"],
      hu: [],
      ro: [],
      en: [],
      es: ["Los picos de granito más altos alcanzan los 2841 metros", "Sigue la línea costera del lago Baikal durante más de 280 kilómetros", "Aquí se estableció la primera área protegida de Rusia en 1916", "Es el principal refugio de la valiosa marta cibelina de Barguzín", "Las laderas occidentales reciben abundantes precipitaciones superiores a 1000 mm", "Numerosas fuentes termales ricas en minerales brotan en sus valles", "Geológicamente se compone de granito proterozoico y esquistos cristalinos", "Las laderas orientales descienden gradualmente hacia la cuenca seca de Barguzín"],
      pt: ["Os picos de granito mais altos atingem os 2841 metros", "Acompanha a linha costeira do lago Baikal por mais de 280 quilómetros", "Aqui foi criada a primeira área de conservação da Rússia em 1916", "A área é o principal refúgio da valiosa zibelina de Barguzin", "As encostas ocidentais recebem precipitação significativa superior a 1000 mm", "Numerosas fontes termais ricas em minerais brotam nos seus vales", "Geologicamente composta por granito proterozoico e xisto cristalino", "As encostas orientais descem gradualmente para a bacia seca de Barguzin"],
      fr: ["Les pics granitiques les plus hauts atteignent 2841 mètres", "Longe la côte du lac Baïkal sur plus de 280 kilomètres", "La première réserve naturelle de Russie y fut créée en 1916", "Principal refuge pour la précieuse zibeline de Bargouzine", "Les versants ouest reçoivent des précipitations dépassant 1000 mm", "De nombreuses sources thermales riches en minéraux jaillissent dans les vallées", "Composée géologiquement de granites protérozoïques et de schistes cristallins", "Les versants est descendent progressivement vers le bassin sec de la Bargouzine"],
    },
    image: "/poi-images/russia-barguzin-range-relief-v2.webp",
},  {
    id: "russia-khamar-daban-relief-v2", "sights": {
      "de": [
            {
                  "name": "Skazochnaia tropa",
                  "text": "Ein Naturpfad im Chamar-Daban-Gebirge mit Holzskulpturen von Märchenfiguren.",
                  "category": "landmark",
                  "coords": [
                        104.108241,
                        51.497409
                  ]
            },
            {
                  "name": "Blagaia vest'",
                  "text": "Eine religiöse Stätte inmitten der malerischen Berglandschaft des Chamar-Daban.",
                  "category": "religious",
                  "coords": [
                        104.138932,
                        51.523184
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Skazochnaia tropa",
                  "text": "Tanösvény a Hamar-Daban-hegységben, amely mesefigurák fafaragásaival van díszítve.",
                  "category": "landmark",
                  "coords": [
                        104.108241,
                        51.497409
                  ]
            },
            {
                  "name": "Blagaia vest'",
                  "text": "Vallási helyszín a Hamar-Daban festői hegyi környezetében.",
                  "category": "religious",
                  "coords": [
                        104.138932,
                        51.523184
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Skazochnaia tropa",
                  "text": "Un traseu natural în munții Hamar-Daban, decorat cu sculpturi în lemn ale personajelor de basm.",
                  "category": "landmark",
                  "coords": [
                        104.108241,
                        51.497409
                  ]
            },
            {
                  "name": "Blagaia vest'",
                  "text": "Un lăcaș de cult situat în decorul montan pitoresc din Hamar-Daban.",
                  "category": "religious",
                  "coords": [
                        104.138932,
                        51.523184
                  ]
            }
      ],
      "en": [
            {
                  "name": "Skazochnaia tropa",
                  "text": "A nature trail in the Khamar-Daban mountains featuring wooden sculptures of fairy tale characters.",
                  "category": "landmark",
                  "coords": [
                        104.108241,
                        51.497409
                  ]
            },
            {
                  "name": "Blagaia vest'",
                  "text": "A religious site situated in the scenic mountain setting of Khamar-Daban.",
                  "category": "religious",
                  "coords": [
                        104.138932,
                        51.523184
                  ]
            }
      ]
},
    parent: "RU",
    type: "mountain",
    name: { de: "Chamar-Daban", hu: "Hamar-Daban", ro: "Munții Hamar-Daban", en: "Khamar-Daban"},
    image: "/poi-images/russia-khamar-daban-relief-v2.webp",
    coords: [104.0, 51.5],
    coords: [104.0, 51.5],
    description: {
      de: "Chamar-Daban ist ein Gebirgszug südlich des Baikalsees. Aufgrund seiner Lage fangen die Berge viel Feuchtigkeit ab, was zu einer ungewöhnlich grünen Vegetation führt.",
      hu: "A Hamar-Daban a Bajkál-tótól délre található hegység. Fekvése miatt sok csapadékot fog fel, ami szokatlanul buja, zöld vegetációt eredményez.",
      ro: "Hamar-Daban este un lanț muntos situat la sud de Lacul Baikal. Datorită poziției, munții captează multă umiditate, rezultând o vegetație bogată.",
      en: "Khamar-Daban is a mountain range south of Lake Baikal. Due to its location, it catches a lot of moisture, resulting in unusually lush, green vegetation.",
      es: "Jamar-Dabán es una cadena montañosa al sur del lago Baikal. Debido a su ubicación, las montañas atrapan mucha humedad, lo que da lugar a una vegetación inusualmente verde.",
      pt: "Khamar-Daban é uma cadeia de montanhas a sul do lago Baikal. Devido à sua localização, as montanhas retêm muita humidade, o que leva a uma vegetação invulgarmente verde.",
      fr: "Le Khamar-Daban est une chaîne de montagnes située au sud du lac Baïkal. En raison de sa situation, les montagnes captent beaucoup d'humidité, ce qui favorise une végétation exceptionnellement verte.",
    },
    facts: {
      de: ["Höchste Erhebung ca. 2371 m", "Eines der ältesten Gebirge der Erde", "Bekannt für endemische Pflanzenarten", "Beliebtes Ziel für Bergtouren ab Irkutsk"],
      hu: ["Legmagasabb pontja kb. 2371 m", "A Föld egyik legősibb hegysége", "Endemikus növényfajairól ismert", "Népszerű túracélpont Irkutszk felől"],
      ro: ["Înălțime maximă de circa 2371 m", "Unul dintre cei mai vechi munți de pe Pământ", "Cunoscut pentru speciile de plante endemice", "Destinație populară de trekking din Irkutsk"],
      en: ["Highest elevation is about 2371 m", "One of the oldest mountain ranges on Earth", "Known for endemic plant species", "Popular hiking destination from Irkutsk"],
      es: ["Altura máxima aprox. 2371 m", "Una de las montañas más antiguas de la Tierra", "Conocida por especies de plantas endémicas", "Destino popular para tours de montaña desde Irkutsk"],
      pt: ["Ponto mais alto aprox. 2371 m", "Uma das montanhas mais antigas da Terra", "Conhecida por espécies de plantas endémicas", "Destino popular para passeios de montanha a partir de Irkutsk"],
      fr: ["Point culminant environ 2371 m", "L'une des plus anciennes chaînes de montagnes au monde", "Réputée pour ses espèces végétales endémiques", "Destination prisée pour les randonnées au départ d'Irkoutsk"],
    },
imageHint: "Lush green mountain forests and rocky ridges south of Baikal",
    descriptionAdvanced: {
      de: "Der Chamar-Daban ist ein uralter, stark verwitterter Gebirgszug, der sich entlang des südlichen und südöstlichen Ufers des Baikalsees erstreckt. Durch seine geografische Ausrichtung fungiert er als riesige Feuchtigkeitsfalle für die über den See ziehenden Luftmassen, was zu ungewöhnlich hohen Niederschlagsmengen in dieser sonst kontinental geprägten Region führt. Diese mikroklimatische Besonderheit hat eine üppige, fast dschungelartige Vegetation hervorgebracht; dichte Nadelwälder vermischen sich hier mit dichtem Unterholz und zahlreichen endemischen Pflanzenarten, die als Relikte der Eiszeit überdauert haben. Die Hänge sind von zahllosen Wasserfällen, rauschenden Gebirgsflüssen und tiefen, moosbedeckten Schluchten durchzogen. Der Chamar-Daban ist heute ein überaus beliebtes Terrain für Trekking-Enthusiasten, die die ungezähmte Wildnis Sibiriens direkt vor den Toren von Irkutsk erleben möchten.",
      hu: "A Hamar-Daban egy rendkívül ősi, az erózió által lekerekített hegyvidék, amely a Bajkál-tó déli és délkeleti partvidékét szegélyezi. Földrajzi elhelyezkedése miatt hatalmas csapadékcsapdaként működik: felfogja a tó víztömege felett átvonuló, nedvességben gazdag légáramlatokat, így az amúgy száraz kontinentális régióban itt kiugróan sok csapadék hullik. Ez a különleges mikroklíma egy szokatlanul buja, helyenként szinte dzsungelszerű vegetációt hozott létre; a sűrű fenyőerdők áthatolhatatlan aljnövényzettel és olyan endemikus, reliktum növényfajokkal keverednek, amelyek még a jégkorszakot is túlélték. A hegyoldalakat megszámlálhatatlan vízesés, sebes vizű hegyi patak és mély, mohával borított szurdok szabdalja. A Hamar-Daban ma a túrázók egyik legkedveltebb paradicsoma, ahol az Irkutszkból érkezők megtapasztalhatják a vad és élettel teli szibériai természetet.",
      ro: "Hamar-Daban este un lanț muntos străvechi, puternic erodat, care se întinde de-a lungul țărmului sudic și sud-estic al Lacului Baikal. Datorită orientării sale geografice, acționează ca o capcană uriașă de umiditate pentru masele de aer care traversează lacul, rezultând cantități neobișnuit de mari de precipitații într-o regiune altfel dominată de un climat continental uscat. Această particularitate microclimatică a dat naștere unei vegetații luxuriante, aproape de junglă; pădurile dense de conifere se amestecă cu un subarboret impenetrabil și numeroase specii de plante endemice, relicte ale epocii glaciare. Versanții sunt brăzdați de nenumărate cascade, râuri montane învolburate și defileuri adânci, acoperite de mușchi. Astăzi, Hamar-Daban este un teren extrem de popular pentru entuziaștii de drumeții care doresc să experimenteze sălbăticia siberiană neîmblânzită chiar la porțile orașului Irkutsk.",
      en: "Khamar-Daban is an ancient, heavily weathered mountain range that fringes the southern and southeastern shores of Lake Baikal. Due to its specific geographical orientation, it acts as a colossal moisture trap, intercepting damp air masses moving across the vast lake. This results in remarkably high levels of precipitation in a region otherwise characterized by an arid continental climate. This unique microclimate has fostered an unusually lush, almost jungle-like vegetation; dense coniferous forests intermingle with impenetrable undergrowth and numerous endemic plant species that have survived as glacial relicts. The slopes are intricately carved by countless waterfalls, rushing mountain streams, and deep, moss-draped ravines. Today, Khamar-Daban is a highly sought-after paradise for trekking enthusiasts seeking to immerse themselves in the vibrant, untamed Siberian wilderness just a short distance from Irkutsk.",
      es: "El Jamar-Dabán es una cordillera antigua y fuertemente erosionada que se extiende a lo largo de las orillas sur y sureste del lago Baikal. Debido a su orientación geográfica, funciona como una trampa de humedad gigante para las masas de aire que cruzan el lago, lo que provoca cantidades de precipitación inusualmente altas en esta región de carácter continental. Esta particularidad microclimática ha generado una vegetación exuberante, casi selvática; densos bosques de coníferas se mezclan aquí con matorrales espesos y numerosas especies de plantas endémicas que han sobrevivido como reliquias de la Edad de Hielo. Las laderas están atravesadas por innumerables cascadas, ríos de montaña caudalosos y desfiladeros profundos cubiertos de musgo. El Jamar-Dabán es hoy un terreno muy popular para los entusiastas del trekking que desean experimentar la naturaleza indómita de Siberia a las puertas de Irkutsk.",
      pt: "O Khamar-Daban é uma cordilheira antiga e fortemente erodida que se estende ao longo das margens sul e sudeste do lago Baikal. Devido à sua orientação geográfica, funciona como uma armadilha de humidade gigante para as massas de ar que se movem sobre o lago, o que leva a quantidades de precipitação invulgarmente elevadas nesta região de influência continental. Esta característica microclimática produziu uma vegetação exuberante, quase selvagem; florestas densas de coníferas misturam-se aqui com sub-bosque denso e numerosas espécies de plantas endémicas que sobreviveram como relíquias da Idade do Gelo. As encostas são atravessadas por inúmeras quedas de água, rios de montanha impetuosos e desfiladeiros profundos cobertos de musgo. O Khamar-Daban é hoje um terreno extremamente popular para entusiastas de trekking que desejam experimentar a selva indomada da Sibéria diretamente às portas de Irkutsk.",
      fr: "Le Khamar-Daban est une chaîne de montagnes très ancienne et fortement érodée qui longe les rives sud et sud-est du lac Baïkal. En raison de son orientation géographique, elle fait office de piège à humidité géant pour les masses d'air traversant le lac, ce qui entraîne des précipitations exceptionnellement élevées dans cette région par ailleurs continentale. Cette particularité microclimatique a favorisé l'éclosion d'une végétation luxuriante, presque de type jungle ; des forêts de conifères denses s'y mêlent à des sous-bois épais et à de nombreuses espèces végétales endémiques, reliques de l'ère glaciaire. Les versants sont sillonnés par d'innombrables cascades, des rivières de montagne tumultueuses et de profondes gorges recouvertes de mousse. Le Khamar-Daban est aujourd'hui un terrain très prisé des amateurs de trekking souhaitant découvrir la nature sauvage de la Sibérie aux portes d'Irkoutsk.",
    },
    factsAdvanced: {
      de: ["A hegység legmagasabb pontja, a Bajsit-csúcs mintegy 2371 méter magas", "A terület a Föld egyik legősibb, proterozoikumi kőzetekből álló hegysége", "A Bajkál-régió legcsapadékosabb területe, évi 1200 mm feletti átlaggal", "Lejtőit egyedülálló, reliktum fajokban gazdag sötét tajga borítja", "Népszerű turistacélpont a Szljugyanka városából induló Cserszkij-csúcs túra", "Számos gyors vizű, vadvízi evezésre alkalmas folyó (pl. a Sznyezsnaja) ered itt", "A hegység déli lábainál halad el a híres Transzszibériai vasútvonal", "Élővilágában gyakori a szibériai barna medve és a pézsmaszarvas"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de la cordillera, el pico Bajsit, tiene unos 2371 metros", "Es una de las montañas más antiguas de la Tierra, compuesta por rocas proterozoicas", "Es la zona más lluviosa de la región del Baikal, con una media de más de 1200 mm anuales", "Sus laderas están cubiertas por una taiga oscura única y rica en especies relictas", "Un destino turístico popular es la ruta al pico Cherski que comienza en Slyudyanka", "Muchos ríos rápidos aptos para el rafting (como el Snezhnaya) nacen aquí", "El famoso Ferrocarril Transiberiano pasa por las estribaciones sur de la cordillera", "El oso pardo siberiano y el ciervo almizclero son comunes en su fauna"],
      pt: ["O ponto mais alto da cordilheira, o pico Bajsit, tem cerca de 2371 metros de altura", "A área é uma das montanhas mais antigas da Terra, composta por rochas proterozoicas", "A área mais chuvosa da região do Baikal, com uma média anual superior a 1200 mm", "As suas encostas estão cobertas por uma taiga escura única, rica em espécies relíquias", "Um destino turístico popular é a caminhada ao pico Chersky, que começa na cidade de Slyudyanka", "Muitos rios de águas rápidas adequados para rafting (por exemplo, o Snezhanya) nascem aqui", "A famosa linha ferroviária Transiberiana passa no sopé sul da montanha", "O urso-pardo siberiano e o cervo-almiscarado são comuns na sua vida selvagem"],
      fr: ["Le point culminant, le mont Bajsit, s'élève à environ 2371 mètres", "L'une des plus anciennes chaînes de montagnes de la Terre (roches protérozoïques)", "Zone la plus arrosée de la région du Baïkal, avec plus de 1200 mm par an", "Ses versants sont couverts d'une taïga sombre unique, riche en espèces reliques", "L'ascension du pic Chersky au départ de Sloudianka est un itinéraire de randonnée prisé", "De nombreuses rivières tumultueuses propices au rafting (ex. la Snejnaïa) y prennent source", "La célèbre ligne du Transsibérien passe au pied sud de la chaîne", "L'ours brun de Sibérie et le porte-musc sont fréquents dans sa faune"],
    },
    image: "/poi-images/russia-khamar-daban-relief-v2.webp",
},  {
    id: "russia-baikal-mountains-relief-v2", "sights": {
      "de": [
            {
                  "name": "Istok reki Lena",
                  "text": "Dieses Wahrzeichen im Baikal-Lena-Naturreservat markiert den offiziellen Ursprung des großen sibirischen Flusses Lena.",
                  "category": "landmark",
                  "coords": [
                        108.084911,
                        53.933706
                  ]
            },
            {
                  "name": "Chasovnia Innokentiia, mitropolita Moskovskogo",
                  "text": "Diese 1997 von Wladimir Trapeznikow entworfene Kapelle steht einsam in der Berglandschaft nahe der Lena-Quelle.",
                  "category": "landmark",
                  "coords": [
                        107.885591,
                        53.994126
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Istok reki Lena",
                  "text": "Ez a Bajkál-Léna természetvédelmi területen található pont jelöli a hatalmas szibériai Léna folyó hivatalos forrását.",
                  "category": "landmark",
                  "coords": [
                        108.084911,
                        53.933706
                  ]
            },
            {
                  "name": "Chasovnia Innokentiia, mitropolita Moskovskogo",
                  "text": "Ezt az 1997-ben Vlagyimir Trapeznyikov által tervezett kápolnát a Léna forrása melletti hegyi tájban emelték.",
                  "category": "landmark",
                  "coords": [
                        107.885591,
                        53.994126
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Istok reki Lena",
                  "text": "Acest punct de reper din Rezervația Naturală Baikal-Lena marchează originea oficială a marelui fluviu siberian Lena.",
                  "category": "landmark",
                  "coords": [
                        108.084911,
                        53.933706
                  ]
            },
            {
                  "name": "Chasovnia Innokentiia, mitropolita Moskovskogo",
                  "text": "Această capelă proiectată în 1997 de Vladimir Trapeznikov se află izolată în peisajul montan de lângă izvorul Lenei.",
                  "category": "landmark",
                  "coords": [
                        107.885591,
                        53.994126
                  ]
            }
      ],
      "en": [
            {
                  "name": "The Source of the River Lena",
                  "text": "This landmark in the Baikal-Lena Nature Reserve marks the official starting point of the great Siberian river Lena.",
                  "category": "landmark",
                  "coords": [
                        108.084911,
                        53.933706
                  ]
            },
            {
                  "name": "Chasovnia Innokentiia, mitropolita Moskovskogo",
                  "text": "Designed in 1997 by Vladimir Trapeznikov, this chapel stands isolated in the mountain landscape near the source of the Lena.",
                  "category": "landmark",
                  "coords": [
                        107.885591,
                        53.994126
                  ]
            }
      ]
},
    parent: "RU",
    type: "mountain",
    name: { de: "Baikalgebirge", hu: "Bajkál-hegység", ro: "Munții Baikal", en: "Baikal Mountains"},
    image: "/poi-images/russia-baikal-mountains-relief-v2.webp",
    coords: [108.0, 54.0],
    coords: [108.0, 54.0],
    description: {
      de: "Das Baikalgebirge erhebt sich steil am nordwestlichen Ufer des Baikalsees. Es bildet eine dramatische Kulisse für den tiefsten See der Welt.",
      hu: "A Bajkál-hegység meredeken emelkedik ki a Bajkál-tó északnyugati partján. Látványos hátteret biztosít a világ legmélyebb tavának.",
      ro: "Munții Baikal se ridică abrupt pe malul nord-vestic al Lacului Baikal. Formează un decor dramatic pentru cel mai adânc lac din lume.",
      en: "The Baikal Mountains rise steeply from the northwestern shore of Lake Baikal. They provide a dramatic backdrop to the world's deepest lake.",
      es: "Los montes Baikal se elevan abruptamente en la orilla noroeste del lago Baikal. Forman un escenario dramático para el lago más profundo del mundo.",
      pt: "Os Montes Baikal elevam-se abruptamente na margem noroeste do Lago Baikal. Formam um cenário dramático para o lago mais profundo do mundo.",
      fr: "Les monts Baïkal s'élèvent abruptement sur la rive nord-ouest du lac Baïkal. Ils offrent un décor spectaculaire au lac le plus profond du monde.",
    },
    facts: {
      de: ["Höchster Berg Pik Tscherski (2588 m)", "Besteht aus kristallinen Schiefern und Granit", "Häufige Erdbeben durch Tektonik", "Quellgebiet der Lena"],
      hu: ["Legmagasabb pontja a Cserszkij-csúcs (2588 m)", "Kristályos palákból és gránitból áll", "Gyakori földrengések a tektonika miatt", "A Léna folyó forrásvidéke"],
      ro: ["Cel mai înalt vârf: Vârful Cerski (2588 m)", "Compus din șisturi cristaline și granit", "Cutremure frecvente din cauza tectonicii", "Zona de izvor a fluviului Lena"],
      en: ["Highest peak is Chersky Peak (2588 m)", "Composed of crystalline schists and granite", "Frequent earthquakes due to active tectonics", "Source region of the Lena River"],
      es: ["Montaña más alta: Pik Cherski (2.588 m).", "Compuestos de esquistos cristalinos y granito.", "Frecuentes terremotos por la tectónica.", "Zona de nacimiento del río Lena."],
      pt: ["Montanha mais alta: Pik Chersky (2.588 m).", "Consistem em xistos cristalinos e granito.", "Terramotos frequentes devido à tectónica.", "Área da nascente do rio Lena."],
      fr: ["Point culminant : le mont Tcherski (2 588 m).", "Composés de schistes cristallins et de granit.", "Séismes fréquents dus à la tectonique.", "Zone de source de la Léna."],
    },
imageHint: "Snow-capped mountains rising directly from the blue Baikal water",
    descriptionAdvanced: {
      de: "Das Baikalgebirge erhebt sich als eine gewaltige, schroffe Felswand unmittelbar an der nordwestlichen Küstenlinie des Baikalsees und bietet eine der dramatischsten Landschaften Sibiriens. Diese steil aufragenden, von kristallinem Schiefer und Granit dominierten Berge sind das direkte tektonische Resultat der enormen Kräfte, die den tiefsten See der Erde erschaffen haben. Die tiefen, von eiszeitlichen Gletschern ausgehobelten Täler und die scharfen Bergrücken sind Zeugen einer geologisch hochaktiven Region, in der Erdbeben bis heute an der Tagesordnung sind. In den unzugänglichen, dicht bewaldeten Höhenzügen des Baikalgebirges liegen die verborgenen Quellen der mächtigen Lena, einem der längsten Flüsse Asiens. Das raue, windgepeitschte Gebirge, das oft direkt in das eiskalte Seewasser stürzt, ist ein unberührtes Refugium für seltene Tierarten wie das Moschustier und den sibirischen Bären.",
      hu: "A Bajkál-hegység gigantikus, zord sziklafalként emelkedik ki közvetlenül a Bajkál-tó északnyugati partvonalán, Szibéria egyik legdrámaibb és leglenyűgözőbb táját alkotva. Ezek a meredeken magasba törő, kristályos palából és gránitból álló hegyek annak a roppant tektonikus erőnek a közvetlen eredményei, amely bolygónk legmélyebb tavának medencéjét is létrehozta. A jégkorszaki gleccserek által mélyre vájt völgyek és a csipkézett, éles hegygerincek egy geológiailag ma is rendkívül aktív, földrengésekkel gyakran sújtott régióról tanúskodnak. A Bajkál-hegység nehezen megközelíthető, sűrű tajgával borított rengetegében, kis tavak és források hálózatából születik meg Ázsia egyik leghosszabb folyója, a hatalmas Léna. A szélfútta, helyenként egyenesen a jéghideg tóba szakadó hegység a pézsmaszarvasok és a szibériai barna medvék háborítatlan menedéke.",
      ro: "Munții Baikal se înalță ca un perete stâncos masiv și abrupt direct de-a lungul coastei de nord-vest a Lacului Baikal, oferind unul dintre cele mai dramatice peisaje din Siberia. Acești munți care se ridică vertical, dominați de șisturi cristaline și granit, sunt rezultatul tectonic direct al forțelor enorme care au creat cel mai adânc lac de pe Pământ. Văile adânci, sculptate de ghețarii pleistoceni, și crestele ascuțite sunt mărturia unei regiuni geologic extrem de active, unde cutremurele sunt și astăzi la ordinea zilei. În zonele înalte inaccesibile și dens împădurite ale Munților Baikal se află izvoarele ascunse ale puternicului fluviu Lena, unul dintre cele mai lungi din Asia. Acești munți aspri, bătuți de vânturi, care deseori se prăbușesc direct în apele înghețate ale lacului, reprezintă un refugiu neatins pentru specii rare de animale, precum moscul siberian și ursul brun.",
      en: "The Baikal Mountains rise as a colossal, rugged wall of rock directly along the northwestern shoreline of Lake Baikal, presenting one of Siberia's most dramatic and awe-inspiring landscapes. These steeply soaring mountains, predominantly composed of crystalline schists and ancient granite, are the direct tectonic result of the massive geological forces that rent the earth to create the world's deepest lake. Deep valleys excavated by Pleistocene glaciers and razor-sharp ridges bear witness to a highly active tectonic zone where significant earthquakes remain frequent occurrences. Concealed within the inaccessible, densely forested high reaches of the Baikal Mountains lie the pristine headwaters of the mighty Lena River, one of Asia's longest waterways. Battered by fierce winds and often plunging vertically into the frigid waters of the lake, this range serves as an undisturbed sanctuary for elusive wildlife such as musk deer and Siberian brown bears.",
      es: "Los montes Baikal se alzan como una pared rocosa imponente directamente en la costa noroeste del lago Baikal, ofreciendo uno de los paisajes más dramáticos de Siberia. Estas montañas, dominadas por esquisto cristalino y granito, son el resultado tectónico directo de las fuerzas que crearon el lago más profundo de la Tierra. Los valles profundos excavados por glaciares y las crestas afiladas son testigos de una región geológicamente activa donde los terremotos son frecuentes. En las inaccesibles alturas boscosas de los montes Baikal se encuentran las fuentes ocultas del río Lena, uno de los más largos de Asia. La cordillera, que a menudo cae directamente en las gélidas aguas del lago, es un refugio virgen para especies raras como el ciervo almizclero y el oso siberiano.",
      pt: "Os Montes Baikal erguem-se como uma parede rochosa maciça e íngreme diretamente na linha costeira noroeste do Lago Baikal, oferecendo uma das paisagens mais dramáticas da Sibéria. Estas montanhas escarpadas, dominadas por xisto cristalino e granito, são o resultado tectónico direto das forças enormes que criaram o lago mais profundo do mundo. Os vales profundos esculpidos por glaciares da era glacial e os picos afiados são testemunhas de uma região geologicamente altamente ativa, onde os sismos ainda hoje fazem parte do quotidiano. Nos cumes densamente arborizados e inacessíveis dos Montes Baikal encontram-se as nascentes escondidas do poderoso rio Lena, um dos rios mais longos da Ásia. As montanhas rigorosas e fustigadas pelo vento, que muitas vezes mergulham diretamente na água gelada do lago, são um refúgio intocado para espécies animais raras, como o cervo-almiscarado e o urso siberiano.",
      fr: "Les monts Baïkal se dressent comme une immense muraille rocheuse sur la rive nord-ouest du lac Baïkal, offrant l'un des paysages les plus spectaculaires de Sibérie. Ces montagnes abruptes, dominées par le schiste cristallin et le granit, sont le résultat direct des forces tectoniques ayant créé le lac le plus profond du monde. Les vallées profondes creusées par les glaciers et les crêtes acérées témoignent d'une région géologiquement très active où les séismes sont fréquents. C'est dans les hauteurs boisées et inaccessibles des monts Baïkal que se trouvent les sources de la Léna, l'un des plus longs fleuves d'Asie. Ce massif sauvage, dont les parois plongent souvent directement dans les eaux glacées du lac, est un sanctuaire pour des espèces rares comme le cerf porte-musc et l'ours de Sibérie.",
    },
    factsAdvanced: {
      de: ["A hegylánc legmagasabb pontja az 2588 méteres Cserszkij-csúcs", "Közvetlen tektonikus kapcsolatban áll a Föld legmélyebb tómedencéjével", "A hegyvidék mocsaras, tajgás fennsíkján ered a 4400 km hosszú Léna folyó", "A kőzetlemezek mozgása miatt a régióban rendkívül gyakoriak a földrengések", "Északi részén található a híres Bajkál-Léna Természetvédelmi Terület", "Meredek, tóba szakadó sziklafalain ritka madárfajok fészkelnek", "A hegységet sűrű, tajga típusú vörösfenyő és cédruserdő borítja", "Infrastruktúrája minimális, szinte csak vízi úton vagy gyalogosan járható"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de la cordillera es el pico Cherski, de 2.588 metros.", "Tiene una conexión tectónica directa con la cuenca lacustre más profunda de la Tierra.", "En la meseta pantanosa de taiga de la montaña nace el río Lena, de 4.400 km de largo.", "Debido al movimiento de las placas tectónicas, los terremotos son extremadamente frecuentes en la región.", "En su parte norte se encuentra la famosa Reserva Natural Baikal-Lena.", "Especies de aves raras anidan en sus paredes rocosas que caen al lago.", "La montaña está cubierta por densos bosques de alerces y cedros de tipo taiga.", "Su infraestructura es mínima, casi solo accesible por agua o a pie."],
      pt: ["O ponto mais alto da cordilheira é o Pico Chersky, com 2.588 metros.", "Está em ligação tectónica direta com a bacia lacustre mais profunda da Terra.", "O rio Lena, com 4.400 km de comprimento, nasce no planalto pantanoso de taiga das montanhas.", "Devido ao movimento das placas tectónicas, os sismos são extremamente frequentes na região.", "Na sua parte norte localiza-se a famosa Reserva Natural Baikal-Lena.", "Espécies raras de aves nidificam nas suas paredes rochosas íngremes que caem no lago.", "As montanhas estão cobertas por florestas densas de lariço e cedro do tipo taiga.", "A infraestrutura é mínima, sendo acessível quase apenas por via marítima ou a pé."],
      fr: ["Le point culminant de la chaîne est le mont Tcherski (2 588 mètres).", "Il existe un lien tectonique direct avec la dépression lacustre la plus profonde du globe.", "Le fleuve Léna (4 400 km) prend sa source sur les plateaux de taïga de ce massif.", "Les tremblements de terre sont extrêmement fréquents dans la région en raison de la tectonique des plaques.", "La célèbre réserve naturelle Baïkal-Léna se situe dans la partie nord du massif.", "Des espèces d'oiseaux rares nichent sur les parois rocheuses tombant dans le lac.", "La chaîne est recouverte d'une taïga dense composée de mélèzes et de pins de Sibérie.", "L'infrastructure est minimale, l'accès se faisant presque exclusivement par bateau ou à pied."],
    },
    image: "/poi-images/russia-baikal-mountains-relief-v2.webp",
},  {
    id: "russia-mount-narodnaya-relief-v2", "sights": {
      "de": [
            {
                  "name": "Narodnaja",
                  "text": "Mit 1895 Metern ist dies der höchste Gipfel des gesamten Uralgebirges.",
                  "category": "natural",
                  "coords": [
                        60.114108,
                        65.034987
                  ]
            },
            {
                  "name": "Smotrovaia na Goluboe ozero",
                  "text": "Dieser Aussichtspunkt bietet einen weiten Blick auf den tiefblauen Gebirgssee Goluboe.",
                  "category": "natural",
                  "coords": [
                        60.124801,
                        65.038623
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Narodnaia",
                  "text": "A maga 1895 méterével ez az egész Urál-hegység legmagasabb csúcsa.",
                  "category": "natural",
                  "coords": [
                        60.114108,
                        65.034987
                  ]
            },
            {
                  "name": "Smotrovaia na Goluboe ozero",
                  "text": "Erről a kilátópontról pazar kilátás nyílik a mélykék Goluboje-tóra.",
                  "category": "natural",
                  "coords": [
                        60.124801,
                        65.038623
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Narodnaia",
                  "text": "Cu o înălțime de 1895 de metri, acesta este cel mai înalt vârf din întreg lanțul Munților Ural.",
                  "category": "natural",
                  "coords": [
                        60.114108,
                        65.034987
                  ]
            },
            {
                  "name": "Smotrovaia na Goluboe ozero",
                  "text": "Acest punct de observare oferă o vedere panoramică asupra lacului montan de un albastru profund, Goluboe.",
                  "category": "natural",
                  "coords": [
                        60.124801,
                        65.038623
                  ]
            }
      ],
      "en": [
            {
                  "name": "Mount Narodnaya",
                  "text": "At 1,895 meters, this is the highest peak in the entire Ural Mountains.",
                  "category": "natural",
                  "coords": [
                        60.114108,
                        65.034987
                  ]
            },
            {
                  "name": "Smotrovaia na Goluboe ozero",
                  "text": "This vantage point offers a sweeping view of the deep blue Goluboe mountain lake.",
                  "category": "natural",
                  "coords": [
                        60.124801,
                        65.038623
                  ]
            }
      ]
},
    parent: "RU",
    type: "peak",
    name: { de: "Narodnaja", hu: "Narodnaja", ro: "Muntele Narodnaia", en: "Mount Narodnaya"},
    image: "/poi-images/russia-mount-narodnaya-relief-v2.webp",
    coords: [60.11, 65.03],
    coords: [60.11, 65.03],
    description: {
      de: "Die Narodnaja ist der höchste Gipfel des Uralgebirges. Sie liegt im subarktischen Teil des Gebirges und ist von kleinen Gletschern umgeben.",
      hu: "A Narodnaja az Urál-hegység legmagasabb csúcsa. A hegység szubarktikus részén fekszik, és kisebb gleccserek veszik körül.",
      ro: "Muntele Narodnaia este cel mai înalt vârf din Munții Ural. Este situat în partea subarctică a lanțului și este înconjurat de mici ghețari.",
      en: "Mount Narodnaya is the highest peak in the Ural Mountains. It is located in the subarctic part of the range and is surrounded by small glaciers.",
      es: "La Narodnaya es el pico más alto de los montes Urales. Se encuentra en la parte subártica de la cordillera y está rodeada de pequeños glaciares.",
      pt: "O Narodnaya é o pico mais alto dos montes Urais. Encontra-se na parte subártica da cordilheira e está rodeado de pequenos glaciares.",
      fr: "Le mont Narodnaïa est le point culminant de l'Oural. Il est situé dans la partie subarctique de la chaîne et est entouré de petits glaciers.",
    },
    facts: {
      de: ["Höhe von 1895 Metern", "Entdeckt und benannt im Jahr 1927", "Liegt im Nationalpark Jugyd Wa", "Besteht aus Quarziten und Schiefern"],
      hu: ["1895 méter magas", "1927-ben fedezték fel és nevezték el", "A Jugid Va Nemzeti Parkban található", "Kvarcitokból és palákból áll"],
      ro: ["Înălțime de 1895 metri", "Descoperit și numit în anul 1927", "Situat în Parcul Național Iugîd Va", "Format din cuarțite și șisturi"],
      en: ["Elevation of 1895 meters", "Discovered and named in 1927", "Located within the Yugyd Va National Park", "Composed of quartzites and schists"],
      es: ["Altura de 1895 metros", "Descubierto y nombrado en el año 1927", "Situado en el Parque Nacional Yugyd Va", "Compuesto de cuarcitas y esquistos"],
      pt: ["Altura de 1895 metros", "Descoberto e nomeado no ano 1927", "Situado no Parque Nacional Yugyd Va", "Composto de quartzitos e xistos"],
      fr: ["Hauteur de 1895 mètres", "Découvert et nommé en 1927", "Situé dans le parc national de Yougyd Va", "Composé de quartzites et de schistes"],
    },
imageHint: "Highest peak of the Ural mountains with rocky terrain",
    descriptionAdvanced: {
      de: "Die Narodnaja, oft als „Volksberg“ übersetzt, krönt als höchster Gipfel das gesamte Uralgebirge, jene ehrwürdige geologische Grenze zwischen Europa und Asien. Sie befindet sich im wilden, subarktischen Forschungsgebiet (dem Polarnaia Ural) und sticht durch ihr dunkles, scharfkantiges Quarzit- und Schiefergestein aus der umliegenden, kargen Gebirgstundra hervor. Trotz ihrer moderaten absoluten Höhe verleihen die gnadenlosen Wetterbedingungen, die tiefen, von kleinen Gletschern gefüllten Kare und der ewige Permafrost dem Berg einen hochalpinen, extrem unwirtlichen Charakter. Entdeckt und benannt wurde der Gipfel erst 1927 während einer großen sowjetischen geologischen Expedition. Heute liegt die Narodnaja eingebettet in den Yugyd Va Nationalpark, einem UNESCO-Weltnaturerbe, das Abenteurern und Geologen unberührte, weite Landschaften von unschätzbarem ökologischem Wert bietet.",
      hu: "A Narodnaja, amelynek neve magyarul „Néphegyet” jelent, az Európát és Ázsiát elválasztó ősi Urál-hegység legmagasabb pontjaként koronázza meg a hegyláncot. A zord, szubarktikus (Sarkközeli) Urál elszigetelt vidékén emelkedő csúcs sötét, éles peremű kvarcit- és palaszikláival drámaian emelkedik ki a környező, kietlen hegyi tundrából. Bár abszolút magassága alig közelíti meg a kétezer métert, a könyörtelen sarkvidéki időjárás, az állandó fagy (permafrost) és a kis gleccsereket rejtő meredek kárfülkék kifejezetten magashegyi, ellenséges karaktert kölcsönöznek neki. A csúcsot csak viszonylag későn, egy 1927-es nagyszabású szovjet expedíció során azonosították és nevezték el. Ma a Narodnaja a hatalmas Jugid Va Nemzeti Park, egy UNESCO Világörökségi helyszín szívében található, amely felbecsülhetetlen ökológiai értékű, érintetlen vadont kínál a kalandorok számára.",
      ro: "Muntele Narodnaia, tradus adesea prin „Muntele Poporului”, încoronează ca cel mai înalt vârf întregul lanț al Munților Ural, acea venerabilă graniță geologică dintre Europa și Asia. Este situat în regiunea sălbatică și subarctică (Uralul Polar) și iese în evidență prin rocile sale întunecate și ascuțite din cuarțit și șisturi, care domină tundra montană aridă din jur. În ciuda altitudinii sale absolute moderate, condițiile meteorologice neiertătoare, circurile glaciare adânci pline de mici ghețari și permafrostul etern îi conferă muntelui un caracter alpin extrem de inospitalier. Vârful a fost descoperit și denumit abia în 1927, în timpul unei mari expediții geologice sovietice. Astăzi, Narodnaia este amplasat în Parcul Național Iugîd Va, un sit al Patrimoniului Mondial UNESCO, oferind aventurierilor și geologilor peisaje virgine de o valoare ecologică inestimabilă.",
      en: "Mount Narodnaya, fittingly translated as 'People's Mountain,' holds the esteemed title of the highest peak in the entire Ural Mountains, the ancient geological spine dividing Europe from Asia. Situated deep within the wild, Subarctic Urals, the summit sharply pierces the surrounding barren alpine tundra with its dark, jagged formations of quartzite and schist. Despite its relatively modest absolute elevation, the mountain possesses a decidedly high-alpine, hostile character, heavily defined by merciless arctic weather, perpetual permafrost, and steep corries cradling small, persistent glaciers. The peak was surprisingly late to be accurately identified, only mapped and named during a major Soviet geological expedition in 1927. Today, Mount Narodnaya is a centerpiece of the pristine Yugyd Va National Park, a designated UNESCO World Heritage site protecting vast, untouched landscapes of profound ecological value.",
      es: "La Narodnaya, a menudo traducida como 'Montaña del Pueblo', corona como el pico más alto todos los montes Urales, esa venerable frontera geológica entre Europa y Asia. Se encuentra en la salvaje región de investigación subártica (los Urales Polares) y destaca por su roca de cuarcita y esquisto oscura y de bordes afilados entre la tundra montañosa circundante. A pesar de su moderada altura absoluta, las implacables condiciones climáticas, los profundos circos llenos de pequeños glaciares y el permafrost eterno le otorgan a la montaña un carácter de alta montaña extremadamente inhóspito. El pico fue descubierto y nombrado recién en 1927 durante una gran expedición geológica soviética. Hoy, la Narodnaya está integrada en el Parque Nacional Yugyd Va, un Patrimonio de la Humanidad de la UNESCO que ofrece a aventureros y geólogos paisajes vírgenes de incalculable valor ecológico.",
      pt: "O Narodnaya, muitas vezes traduzido como 'Montanha do Povo', coroa como o pico mais alto todos os montes Urais, essa venerável fronteira geológica entre a Europa e a Ásia. Encontra-se na selvagem região de investigação subártica (os Urais Polares) e destaca-se pela sua rocha de quartzito e xisto escura e de arestas afiadas entre a tundra montanhosa circundante. Apesar da sua moderada altura absoluta, as implacáveis condições climáticas, os profundos circos cheios de pequenos glaciares e o permafrost eterno conferem à montanha um carácter de alta montanha extremamente inóspito. O pico foi descoberto e nomeado apenas em 1927 durante uma grande expedição geológica soviética. Hoje, o Narodnaya está integrado no Parque Nacional Yugyd Va, um Património Mundial da UNESCO que oferece a aventureiros e geólogos paisagens virgens de incalculável valor ecológico.",
      fr: "Le mont Narodnaïa est le point culminant de toute la chaîne de l'Oural, cette vénérable frontière géologique entre l'Europe et l'Asie. Il est situé dans la zone sauvage et subarctique de l'Oural polaire et se distingue par ses roches sombres de quartzite et de schiste au milieu de la toundra de montagne. Malgré son altitude modérée, les conditions météorologiques impitoyables, les cirques profonds remplis de petits glaciers et le pergélisol éternel confèrent à la montagne un caractère de haute montagne extrêmement inhospitalier. Le sommet n'a été découvert et nommé qu'en 1927 lors d'une grande expédition géologique soviétique. Aujourd'hui, la Narodnaïa est nichée au cœur du parc national de Yougyd Va, classé au patrimoine mondial de l'UNESCO, offrant aux aventuriers et aux géologues de vastes paysages vierges d'une valeur écologique inestimable.",
    },
    factsAdvanced: {
      de: ["A teljes Urál-hegység legmagasabb pontja, 1895 méteres magassággal", "A csúcs az Európát és Ázsiát elválasztó történelmi vízválasztón fekszik", "A hegyet csak az 1927-es szovjet Észak-Urál Expedíció során azonosították", "Nevét (Narodnaja = Nép hegye) a Szovjetunió tízéves évfordulójára kapta", "A csúcs régiójában kisméretű, de stabil, jégkorszaki maradvány gleccserek találhatók", "A hegység kőzeteit kemény, sötét proterozoikumi és kambriumi kvarcitok alkotják", "Oroszország legnagyobb nemzeti parkja, az UNESCO-védett Jugid Va területén áll", "Klímai okok miatt csak július közepétől augusztus közepéig javasolt a megmászása"],
      hu: [],
      ro: [],
      en: [],
      es: ["Es el punto más alto de todos los montes Urales, con una altura de 1895 metros", "El pico se encuentra en la divisoria de aguas histórica que separa Europa y Asia", "La montaña solo fue identificada durante la Expedición Soviética a los Urales del Norte de 1927", "Su nombre (Narodnaya = Montaña del Pueblo) fue otorgado por el décimo aniversario de la Unión Soviética", "En la región de la cima se encuentran glaciares pequeños pero estables, restos de la edad de hielo", "Las rocas de la montaña están formadas por cuarcitas proterozoicas y cámbricas duras y oscuras", "Se encuentra en el territorio de Yugyd Va, el parque nacional más grande de Rusia protegido por la UNESCO", "Debido a razones climáticas, su ascenso solo se recomienda desde mediados de julio hasta mediados de agosto"],
      pt: ["É o ponto mais alto de todos os montes Urais, com uma altura de 1895 metros", "O pico encontra-se na divisória de águas histórica que separa a Europa e a Ásia", "A montanha apenas foi identificada durante a Expedição Soviética aos Urais do Norte de 1927", "O seu nome (Narodnaya = Montanha do Povo) foi atribuído pelo décimo aniversário da União Soviética", "Na região do cume encontram-se glaciares pequenos mas estáveis, vestígios da era do gelo", "As rochas da montanha são formadas por quartzitos proterozoicos e cambrianos duros e escuros", "Encontra-se no território de Yugyd Va, o maior parque nacional da Rússia protegido pela UNESCO", "Devido a razões climáticas, a sua ascensão apenas é recomendada de meados de julho a meados de agosto"],
      fr: ["Point culminant de toute la chaîne de l'Oural avec une altitude de 1895 mètres", "Le sommet se situe sur la ligne de partage des eaux historique entre l'Europe et l'Asie", "La montagne n'a été identifiée que lors de l'expédition soviétique dans l'Oural du Nord en 1927", "Son nom (Narodnaïa = Montagne du Peuple) a été donné pour le dixième anniversaire de l'URSS", "On trouve des petits glaciers stables, vestiges de l'ère glaciaire, dans la région du sommet", "Les roches de la montagne sont constituées de quartzites durs et sombres du Protérozoïque et du Cambrien", "Situé dans le parc national de Yougyd Va, le plus grand de Russie et protégé par l'UNESCO", "Pour des raisons climatiques, l'ascension n'est recommandée que de mi-juillet à mi-août"],
    },
    image: "/poi-images/russia-mount-narodnaya-relief-v2.webp",
},  {
    id: "russia-stanovoy-range-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Stanowoigebirge", hu: "Sztanovoj-hegylánc", ro: "Munții Stanovoi", en: "Stanovoy Range"},
    image: "/poi-images/russia-stanovoy-range-relief-v2.webp",
    coords: [125.0, 55.0],
    coords: [125.0, 55.0],
    description: {
      de: "Das Stanowoigebirge bildet die Wasserscheide zwischen den Flüssen, die ins Eismeer fließen, und jenen, die in den Pazifik münden. Es liegt im Fernen Osten.",
      hu: "A Sztanovoj-hegylánc vízválasztót képez a Jeges-tengerbe és a Csendes-óceánba ömlő folyók között. Az orosz Távol-Keleten található.",
      ro: "Munții Stanovoi reprezintă cumpăna apelor între bazinele Oceanului Arctic și Oceanului Pacific. Sunt situați în Orientul Îndepărtat.",
      en: "The Stanovoy Range forms the drainage divide between rivers flowing into the Arctic Ocean and those flowing into the Pacific. It is located in the Far East.",
      es: "Los montes Stanovói forman la divisoria de aguas entre los ríos que fluyen hacia el océano Ártico y los que desembocan en el Pacífico. Se encuentran en el Lejano Oriente.",
      pt: "Os montes Stanovoi formam a bacia hidrográfica entre os rios que correm para o oceano Ártico e os que desaguam no Pacífico. Situam-se no Extremo Oriente.",
      fr: "Les monts Stanovoï forment la ligne de partage des eaux entre les fleuves coulant vers l'océan Arctique et ceux se jetant dans le Pacifique. Ils sont situés en Extrême-Orient.",
    },
    facts: {
      de: ["Länge von etwa 700 km", "Höchste Erhebung ca. 2412 m", "Bedeutende historische Grenze (Vertrag von Nertschinsk)", "Dichte Taiga-Wälder an den Hängen"],
      hu: ["Kb. 700 km hosszú", "Legmagasabb pontja kb. 2412 m", "Fontos történelmi határ volt (nyercsinszki szerződés)", "Lejtőit sűrű tajgaerdők borítják"],
      ro: ["Lungime de aproximativ 700 km", "Înălțime maximă de circa 2412 m", "Importantă graniță istorică (Tratatul de la Nercinsk)", "Păduri dese de taiga pe versanți"],
      en: ["Length of about 700 km", "Highest peak is around 2412 m", "Significant historical border (Treaty of Nerchinsk)", "Slopes are covered in dense taiga forest"],
      es: ["Longitud de unos 700 km", "Altura máxima de aprox. 2412 m", "Importante frontera histórica (Tratado de Nérchinsk)", "Bosques de taiga densos en las laderas"],
      pt: ["Comprimento de cerca de 700 km", "Altitude máxima de aprox. 2412 m", "Importante fronteira histórica (Tratado de Nerchinsk)", "Florestas de taiga densas nas encostas"],
      fr: ["Longueur d'environ 700 km", "Point culminant à environ 2412 m", "Importante frontière historique (traité de Nertchinsk)", "Forêts de taïga denses sur les versants"],
    },
imageHint: "Forested mountain ridges in the Russian Far East",
    descriptionAdvanced: {
      de: "Das Stanowoigebirge ist eine mächtige, über 700 Kilometer lange Gebirgsbarriere im russischen Fernen Osten, die als eine der wichtigsten Wasserscheiden Asiens fungiert. Es trennt die nordwärts fließenden Gewässer, die ins raue Arktische Meer münden, von jenen, die in südliche Richtung zum Pazifischen Ozean streben. Die Landschaft wird von massiven, abgerundeten Bergkuppen und weitläufigen Hochebenen geprägt, die von dichten, schwer durchdringlichen Taigawäldern aus Sibirischer Lärche überzogen sind. Historisch spielte dieser schwer passierbare Wall eine immense Rolle: Der Vertrag von Nertschinsk im Jahr 1689 legte hier die erste offizielle Grenze zwischen dem expandierenden Russischen Zarenreich und dem chinesischen Qing-Reich fest. Heute ist das Gebirge eine geologisch reiche, aber kaum erschlossene Wildnis, in der Bären, Wölfe und Rentiere weite Gebiete für sich beanspruchen.",
      hu: "A Sztanovoj-hegylánc egy tekintélyes, több mint 700 kilométer hosszan elnyúló hegyi barikád az orosz Távol-Keleten, amely Ázsia egyik legfontosabb kontinentális vízválasztóját alkotja. Élesen elválasztja a zord Jeges-tenger felé, északra tartó folyórendszereket (például a Lénát) a Csendes-óceán felé, délre igyekvő vízi utaktól (mint az Amur). A tájat vaskos, az erózió által lekerekített hegyhátak és tágas fennsíkok uralják, amelyeket szibériai vörösfenyőből álló, szinte áthatolhatatlanul sűrű tajgaerdők borítanak. Ez a nehezen járható fal történelmileg is kiemelkedő szerepet játszott: 1689-ben a nyercsinszki szerződés itt rögzítette az első hivatalos államhatárt a terjeszkedő Orosz Cárság és a kínai Csing-dinasztia birodalma között. Napjainkban a hegység gazdag ásványkincsekben, mégis szinte teljesen érintetlen vadon maradt, ahol medvék, farkasok és rénszarvasok uralják a vidéket.",
      ro: "Munții Stanovoi reprezintă o barieră montană formidabilă, lungă de peste 700 de kilometri, în Orientul Îndepărtat Rus, funcționând ca una dintre cele mai importante cumpene de ape ale Asiei. Ea separă apele care curg spre nord, în aspra Mare Arctică (bazinul Lena), de cele care se îndreaptă spre sud, către Oceanul Pacific (bazinul Amur). Peisajul este definit de cupole montane masive și rotunjite și de platouri extinse, care sunt acoperite de păduri de taiga greu de pătruns, formate din zadă siberiană. Istoric, acest zid greu de trecut a jucat un rol imens: Tratatul de la Nercinsk din 1689 a stabilit aici prima graniță oficială între expansivul Imperiu Țarist Rus și Imperiul chinez Qing. Astăzi, munții sunt o sălbăticie bogată geologic, dar abia explorată, unde urșii, lupii și renii revendică teritorii vaste pentru ei înșiși.",
      en: "The Stanovoy Range is a formidable mountain barrier stretching over 700 kilometers in the Russian Far East, serving as one of Asia's most significant continental drainage divides. It decisively separates the vast northward-flowing river systems destined for the harsh Arctic Ocean (such as the Lena basin) from those surging southward toward the Pacific Ocean (the Amur basin). The topography is characterized by massive, rounded mountain domes and sweeping high plateaus, all densely cloaked in impenetrable taiga forests dominated by Siberian larch. Historically, this imposing, difficult-to-traverse wall played a monumental role: the 1689 Treaty of Nerchinsk established the Stanovoy crest as the first official border between the expanding Russian Tsardom and China's Qing Dynasty. Today, the range remains a geologically wealthy yet profoundly undeveloped wilderness, where bears, wolves, and reindeer claim dominion over vast tracts of land.",
      es: "Los montes Stanovói son una poderosa barrera montañosa de más de 700 kilómetros de longitud en el Lejano Oriente ruso, que funciona como una de las divisorias de aguas más importantes de Asia. Separa las aguas que fluyen hacia el norte y desembocan en el duro mar Ártico, de las que se dirigen hacia el sur, hacia el océano Pacífico. El paisaje se caracteriza por macizos montañosos redondeados y extensas mesetas altas, cubiertas por bosques de taiga de alerce siberiano densos y difíciles de penetrar. Históricamente, este muro difícil de cruzar desempeñó un papel inmenso: el Tratado de Nérchinsk en 1689 estableció aquí la primera frontera oficial entre el expansivo Imperio Zarista Ruso y el Imperio Chino Qing. Hoy en día, la cordillera es una selva geológicamente rica pero apenas desarrollada, donde osos, lobos y renos reclaman vastas áreas para sí mismos.",
      pt: "Os montes Stanovoi são uma poderosa barreira montanhosa com mais de 700 quilómetros de comprimento no Extremo Oriente russo, que funciona como uma das bacias hidrográficas mais importantes da Ásia. Separa as águas que correm para norte e desaguam no rigoroso Mar Ártico daquelas que se dirigem para sul, para o Oceano Pacífico. A paisagem é caracterizada por maciços montanhosos arredondados e vastos planaltos de altitude, cobertos por florestas de taiga de lariço siberiano densas e difíceis de penetrar. Historicamente, esta muralha de difícil passagem desempenhou um papel imenso: o Tratado de Nerchinsk, em 1689, estabeleceu aqui a primeira fronteira oficial entre o expansivo Império Russo e o Império Chinês Qing. Atualmente, a cordilheira é uma selva geologicamente rica, mas pouco explorada, onde ursos, lobos e renas reivindicam vastas áreas para si mesmos.",
      fr: "Les monts Stanovoï forment une imposante barrière montagneuse de plus de 700 kilomètres de long dans l'Extrême-Orient russe, constituant l'une des plus importantes lignes de partage des eaux d'Asie. Ils séparent les eaux coulant vers le nord pour se jeter dans la rude mer Arctique de celles s'écoulant vers le sud vers l'océan Pacifique. Le paysage est marqué par des sommets massifs et arrondis ainsi que de vastes plateaux d'altitude, recouverts d'une taïga dense et impénétrable de mélèzes de Sibérie. Historiquement, ce rempart difficilement franchissable a joué un rôle immense : le traité de Nertchinsk en 1689 y fixa la première frontière officielle entre l'Empire russe en expansion et l'Empire chinois des Qing. Aujourd'hui, la chaîne est une contrée sauvage riche en minerais mais peu exploitée, où les ours, les loups et les rennes occupent de vastes territoires.",
    },
    factsAdvanced: {
      de: ["A hegylánc több mint 700 kilométer hosszan húzódik kelet-nyugati irányban", "A legmagasabb pontja, a Szkalisztij-Golec (Sziklás-csúcs) 2412 méter magas", "Kulcsfontosságú vízválasztó a Jeges-tenger és a Csendes-óceán medencéi között", "Történelmileg az Orosz és a Kínai Birodalom határát képezte a 17-19. században", "A hegyoldalakat 1200 méteres magasságig sűrű vörösfenyő-tajga borítja", "Területén jelentős, jórészt feltáratlan arany-, vasérc- és csillámlelőhelyek vannak", "Az állandóan fagyott talaj (permafrost) szinte mindenhol jelen van a régióban", "Lakossága rendkívül ritka, az őslakos evenkik hagyományos rénszarvaspásztorkodást folytatnak itt"],
      hu: [],
      ro: [],
      en: [],
      es: ["La cadena montañosa se extiende por más de 700 kilómetros en dirección este-oeste", "Su punto más alto, el Skalisty-Golets (Pico Rocoso), tiene 2412 metros de altura", "Divisoria de aguas clave entre las cuencas del océano Ártico y el océano Pacífico", "Históricamente formó la frontera entre el Imperio Ruso y el Chino entre los siglos XVII y XIX", "Las laderas de las montañas están cubiertas por una densa taiga de alerces hasta los 1200 metros de altitud", "Existen yacimientos significativos y en gran parte inexplorados de oro, mineral de hierro y mica", "El permafrost está presente en casi toda la región", "La población es extremadamente escasa, con los indígenas evenki practicando el pastoreo tradicional de renos"],
      pt: ["A cordilheira estende-se por mais de 700 quilómetros na direção leste-oeste", "O seu ponto mais alto, o Skalistiy-Golets (Pico Rochoso), tem 2412 metros de altitude", "Bacia hidrográfica fundamental entre as bacias do Oceano Ártico e do Oceano Pacífico", "Historicamente formou a fronteira entre o Império Russo e o Chinês entre os séculos XVII e XIX", "As encostas das montanhas são cobertas por uma taiga densa de lariços até aos 1200 metros de altitude", "Existem depósitos significativos e em grande parte inexplorados de ouro, minério de ferro e mica", "O solo permanentemente gelado (permafrost) está presente em quase toda a região", "A população é extremamente escassa, com os indígenas Evenki praticando a pastorícia tradicional de renas"],
      fr: ["La chaîne de montagnes s'étire sur plus de 700 kilomètres d'est en ouest", "Le point culminant, le Skalisty Golets, s'élève à 2412 mètres", "Ligne de partage des eaux cruciale entre les bassins de l'Arctique et du Pacifique", "Historiquement, elle constitua la frontière entre les empires russe et chinois du XVIIe au XIXe siècle", "Les versants sont couverts d'une taïga de mélèzes jusqu'à 1200 mètres d'altitude", "On y trouve d'importants gisements, peu explorés, d'or, de fer et de mica", "Le pergélisol est présent sur la quasi-totalité de la région", "La population est très rare, les autochtones Evenks y pratiquant l'élevage traditionnel de rennes"],
    },
    image: "/poi-images/russia-stanovoy-range-relief-v2.webp",
},
  {
    id: "russia-central-russian-upland-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Mittelrussische Platte", hu: "Közép-orosz-hátság", ro: "Podișul Central Rus", en: "Central Russian Upland"},
    image: "/poi-images/russia-central-russian-upland-relief-v2.webp",
    coords: [37.0, 52.0],
    coords: [37.0, 52.0],
    description: {
      de: "Diese Hügellandschaft im europäischen Teil Russlands erstreckt sich über 1000 Kilometer. Sie bildet die Wasserscheide zwischen den Einzugsgebieten von Wolga, Don und Dnepr.",
      hu: "Ez az európai oroszországi dombság több mint 1000 kilométer hosszan nyúlik el. Fontos vízválasztót képez a Volga, a Don és a Dnyeper folyók vízgyűjtő területei között.",
      ro: "Acest podiș deluros din partea europeană a Rusiei se întinde pe o distanță de 1000 de kilometri. Formează cumpăna apelor între bazinele fluviilor Volga, Don și Nipru.",
      en: "This hilly region in the European part of Russia stretches over 1,000 kilometers. It forms the main drainage divide between the Volga, Don, and Dnieper river basins.",
      es: "Este paisaje de colinas en la parte europea de Rusia se extiende por más de 1000 kilómetros. Forma la divisoria de aguas entre las cuencas del Volga, el Don y el Dniéper.",
      pt: "Esta paisagem montanhosa na parte europeia da Rússia estende-se por mais de 1000 quilómetros. Forma a bacia hidrográfica entre as bacias do Volga, Don e Dnieper.",
      fr: "Ce paysage de collines dans la partie européenne de la Russie s'étend sur plus de 1000 kilomètres. Il forme la ligne de partage des eaux entre les bassins de la Volga, du Don et du Dniepr.",
    },
    facts: {
      de: ["Maximale Höhe beträgt etwa 293 Meter", "Besteht hauptsächlich aus Sedimentgesteinen", "Länge von Norden nach Süden ca. 1000 km", "Wichtige Flüsse wie der Don entspringen hier"],
      hu: ["Legmagasabb pontja 293 méter", "Főként üledékes kőzetek építik fel", "Hossza észak-déli irányban kb. 1000 km", "Itt ered többek között a Don és az Oka folyó"],
      ro: ["Altitudinea maximă este de 293 metri", "Este alcătuit în principal din roci sedimentare", "Lungimea pe direcția nord-sud este de 1000 km", "Aici izvorăsc râuri importante precum Don și Oka"],
      en: ["Maximum elevation is about 293 meters", "Composed primarily of sedimentary rocks", "Length from north to south is 1,000 km", "Sources of rivers like Don and Oka are located here"],
      es: ["La altura máxima es de unos 293 metros", "Compuesta principalmente por rocas sedimentarias", "Longitud de norte a sur de unos 1000 km", "Aquí nacen ríos importantes como el Don"],
      pt: ["A altitude máxima é de cerca de 293 metros", "Composta principalmente por rochas sedimentares", "Comprimento de norte a sul de aprox. 1000 km", "Rios importantes como o Don nascem aqui"],
      fr: ["Altitude maximale d'environ 293 mètres", "Principalement composée de roches sédimentaires", "Longueur nord-sud d'environ 1000 km", "Des fleuves importants comme le Don y prennent leur source"],
    },
    imageHint: "Rolling hills of Central Russian Upland landscape",
    descriptionAdvanced: {
      de: "Die Mittelrussische Platte ist eine ausgedehnte, wellige Hügellandschaft, die das geologische und hydrologische Rückgrat des europäischen Teils Russlands bildet. Sie erstreckt sich über mehr als tausend Kilometer und ist durch sanft ansteigende Kreide- und Kalksteinhügel geprägt, die von tief eingeschnittenen, steilen Flusstälern und Schluchten, sogenannten 'Balkas', durchzogen sind. Diese Hochebene fungiert als eine entscheidende Wasserscheide, in der einige der historisch und wirtschaftlich wichtigsten Ströme Osteuropas entspringen, darunter der Don, die Oka und der Seim. Die fruchtbaren Schwarzerdeböden an ihren Rändern machten die Region seit Jahrhunderten zum landwirtschaftlichen Kernland Russlands, was jedoch zu einer massiven Entwaldung und verstärkter Bodenerosion führte. Trotz der starken menschlichen Nutzung haben sich in den geschützten, schluchtartigen Tälern Reste der ursprünglichen Waldsteppe mit einer reichen Biodiversität erhalten.",
      hu: "A Közép-orosz-hátság egy hatalmas kiterjedésű, hullámzó dombság, amely az európai Oroszország geológiai és hidrológiai gerincét alkotja. A több mint ezer kilométer hosszan elnyúló tájat lágyan emelkedő kréta- és mészkőhalmok jellemzik, amelyeket meredek falú, mélyen bevágódott folyóvölgyek és aszóvölgyek (úgynevezett balkák) szabdalnak szét. Ez a magaslat kulcsfontosságú európai vízválasztóként funkcionál; itt fakadnak Kelet-Európa történelmileg és gazdaságilag legjelentősebb folyamai, köztük a Don, az Oka és a Szejm. A peremvidékek legendásan termékeny csernozjom (fekete) talajai a régiót évszázadokon át Oroszország mezőgazdasági magterületévé tették, ami a természetes növénytakaró szinte teljes kiirtásához és drasztikus talajerózióhoz vezetett. Az erős emberi beavatkozás ellenére a védett, szurdokszerű völgyekben még ma is fellelhetők az eredeti, gazdag élővilágú erdőssztyepp apró, értékes maradványai.",
      ro: "Podișul Central Rus este un peisaj colinar vast și ondulat, care formează coloana vertebrală geologică și hidrologică a părții europene a Rusiei. Întinzându-se pe mai bine de o mie de kilometri, este caracterizat de coline cu pante blânde, formate din cretă și calcar, intersectate de văi fluviale adânci și râpe abrupte cunoscute sub numele de 'balka'. Această înălțime funcționează ca o cumpănă a apelor crucială, din care izvorăsc unele dintre cele mai importante fluvii din Europa de Est din punct de vedere istoric și economic, inclusiv Don, Oka și Seim. Solurile fertile de cernoziom de pe marginile sale au transformat regiunea în inima agricolă a Rusiei de secole, ceea ce a dus totuși la o defrișare masivă și la o eroziune accentuată a solului. În ciuda exploatării umane intense, resturi ale silvostepei originale, cu o biodiversitate bogată, au supraviețuit în văile protejate sub formă de defileuri.",
      en: "The Central Russian Upland is an extensive, rolling hilly region that serves as the geological and hydrological backbone of European Russia. Stretching for over a thousand kilometers, the landscape is defined by gently swelling chalk and limestone hills, intensely dissected by a complex network of deeply incised river valleys and steep ravines locally known as 'balkas.' This elevated plateau acts as a critical watershed, birthing several of Eastern Europe's most historically and economically vital rivers, including the mighty Don, the Oka, and the Seym. The legendary, highly fertile chernozem (black earth) soils along its flanks have made the region the agricultural heartland of Russia for centuries, a status that has unfortunately resulted in widespread deforestation and severe soil erosion. Despite intense human modification, small, precious remnants of the original, highly biodiverse forest-steppe still endure within the protected, steep-sided valleys.",
      es: "La Meseta Central Rusa es un extenso paisaje ondulado que constituye la columna vertebral geológica e hidrológica de la Rusia europea. Se extiende por más de mil kilómetros y se caracteriza por colinas de tiza y piedra caliza de suave pendiente, atravesadas por valles fluviales profundos y escarpados y desfiladeros conocidos como 'balkas'. Esta meseta actúa como una divisoria de aguas crucial, donde nacen algunos de los ríos histórica y económicamente más importantes de Europa del Este, como el Don, el Oká y el Seim. Los fértiles suelos de tierra negra en sus márgenes han convertido a la región en el corazón agrícola de Rusia durante siglos, lo que sin embargo ha llevado a una deforestación masiva y a una erosión del suelo intensificada. A pesar de la fuerte intervención humana, en los valles protegidos se conservan restos de la estepa forestal original con una rica biodiversidad.",
      pt: "O Planalto Central Russo é uma vasta paisagem de colinas onduladas que constitui a espinha dorsal geológica e hidrológica da parte europeia da Rússia. Estende-se por mais de mil quilómetros e é caracterizado por colinas de calcário e giz de inclinação suave, atravessadas por vales fluviais profundos e íngremes e desfiladeiros, conhecidos como 'balkas'. Este planalto funciona como uma bacia hidrográfica crucial, onde nascem alguns dos rios histórica e economicamente mais importantes da Europa de Leste, incluindo o Don, o Oka e o Seim. Os solos férteis de terra negra nas suas margens tornaram a região o centro agrícola da Rússia durante séculos, o que, no entanto, levou a uma desflorestação maciça e a uma erosão acentuada do solo. Apesar da forte utilização humana, restam vestígios da estepe florestal original com uma rica biodiversidade nos vales protegidos.",
      fr: "Le plateau central de Russie est un vaste paysage de collines ondulées qui constitue la colonne vertébrale géologique et hydrologique de la partie européenne de la Russie. Il s'étend sur plus de mille kilomètres et se caractérise par des collines de craie et de calcaire en pente douce, sillonnées par des vallées fluviales profondes et escarpées ainsi que par des gorges appelées « balkas ». Ce haut plateau fait office de ligne de partage des eaux cruciale, où prennent naissance certains des fleuves les plus importants d'Europe de l'Est sur les plans historique et économique, dont le Don, l'Oka et le Seim. Les sols fertiles de terres noires (tchernoziom) sur ses marges ont fait de la région le cœur agricole de la Russie depuis des siècles, ce qui a toutefois conduit à une déforestation massive et à une érosion accrue des sols. Malgré la forte exploitation humaine, des restes de la steppe boisée originelle avec une riche biodiversité subsistent dans les vallées encaissées protégées.",
    },
    factsAdvanced: {
      de: ["Észak-déli irányban több mint 1000 kilométer hosszan terül el", "A dombság maximális tengerszint feletti magassága eléri a 293 métert", "Rendkívül fontos vízválasztó a Kaszpi-tenger, a Fekete-tenger és az Azovi-tenger között", "Kőzetágyát ősidőkből származó, kristályos prekambriumi alapzat adja", "Felszínét mély és kiterjedt aszóvölgy-hálózatok (balkák) erodálták", "Történelmileg az eredeti erdőssztyepp zóna szinte teljesen mezőgazdasági területté alakult", "Itt találhatók a világhírű Kurszki Mágneses Anomália gigantikus vasérclelőhelyei", "A régió hatalmas csernozjom (fekete föld) területei a világ legtermékenyebb talajai közé tartoznak"],
      hu: [],
      ro: [],
      en: [],
      es: ["Se extiende por más de 1000 kilómetros en dirección norte-sur", "La altura máxima sobre el nivel del mar alcanza los 293 metros", "Es una divisoria de aguas vital entre el Mar Caspio, el Mar Negro y el Mar de Azov", "Su base rocosa es un basamento precámbrico cristalino muy antiguo", "Su superficie ha sido erosionada por redes profundas de valles secos (balkas)", "Históricamente, la estepa forestal original se ha transformado casi totalmente en tierras agrícolas", "Aquí se encuentran los gigantescos yacimientos de mineral de hierro de la Anomalía Magnética de Kursk", "Sus vastas áreas de chernozem (tierra negra) están entre los suelos más fértiles del mundo"],
      pt: ["Estende-se por mais de 1000 quilómetros na direção norte-sul", "A altitude máxima acima do nível do mar atinge os 293 metros", "É uma bacia hidrográfica vital entre o Mar Cáspio, o Mar Negro e o Mar de Azov", "A sua base rochosa é composta por uma base pré-cambriana cristalina antiga", "A superfície foi erodida por redes de vales secos profundos e extensos (balkas)", "Historicamente, a zona original de estepe florestal foi quase totalmente convertida em área agrícola", "Aqui encontram-se as gigantescas jazidas de minério de ferro da Anomalia Magnética de Kursk", "As vastas áreas de chernozem (terra preta) da região estão entre os solos mais férteis do mundo"],
      fr: ["S'étend sur plus de 1000 kilomètres du nord au sud", "L'altitude maximale atteint 293 mètres au-dessus du niveau de la mer", "Ligne de partage des eaux vitale entre la mer Caspienne, la mer Noire et la mer d'Azov", "Son soubassement rocheux est un socle cristallin précambrien très ancien", "Sa surface est érodée par des réseaux profonds de vallées sèches (balkas)", "Presque toute la zone de steppe boisée d'origine a été transformée en terres agricoles", "Abrite les gigantesques gisements de fer de l'anomalie magnétique de Koursk", "Ses vastes zones de tchernoziom comptent parmi les sols les plus fertiles du monde"],
    }
  },
  {
    id: "russia-kodar-mountains-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Kodargebirge", hu: "Kodar-hegység", ro: "Munții Kodar", en: "Kodar Mountains"},
    image: "/poi-images/russia-kodar-mountains-relief-v2.webp",
    coords: [118.1, 56.9],
    coords: [118.1, 56.9],
    description: {
      de: "Das Kodargebirge im Transbaikalgebiet zeichnet sich durch seine alpinen Formen und schroffen Gipfel aus. Es beherbergt die einzigen Gletscher in dieser Region Ostsibiriens.",
      hu: "A Bajkálon túli területen fekvő Kodar-hegység alpesi formáiról és meredek csúcsairól ismert. Itt találhatók Kelet-Szibéria ezen részének egyetlen gleccserei.",
      ro: "Munții Kodar din Transbaikal se remarcă prin formele alpine și vârfurile abrupte. Găzduiesc singurele ghețare din această regiune a Siberiei de Est.",
      en: "The Kodar Mountains in Transbaikalia are known for their alpine relief and rugged peaks. They host the only glaciers found in this region of Eastern Siberia.",
      es: "Las montañas de Kodar, en la región de Transbaikalia, se caracterizan por sus formas alpinas y picos escarpados. Albergan los únicos glaciares de esta región de Siberia Oriental.",
      pt: "As montanhas Kodar, na região de Transbaicália, caracterizam-se pelas suas formas alpinas e picos escarpados. Abriga os únicos glaciares nesta região da Sibéria Oriental.",
      fr: "Les monts Kodar, dans la région de Transbaïkalie, se caractérisent par leurs formes alpines et leurs sommets escarpés. Ils abritent les seuls glaciers de cette région de Sibérie orientale.",
    },
    facts: {
      de: ["Höchster Punkt ist der Pik BAM mit 3072 m", "Besitzt etwa 30 kleine Gebirgsgletscher", "Besteht überwiegend aus Granit und Gneis", "Teil des Stanowoi-Hochlands in Ostsibirien"],
      hu: ["Legmagasabb pontja a BAM-csúcs (3072 m)", "Körülbelül 30 kisebb gleccser található itt", "Főleg gránitból és gneiszből épül fel", "A Sztanovoj-felföld részét képezi"],
      ro: ["Cel mai înalt punct este Vârful BAM la 3072 m", "Are aproximativ 30 de ghețari montani mici", "Este format predominant din granit și gnais", "Parte a podișului Stanovoi din Siberia de Est"],
      en: ["Highest point is Pik BAM at 3,072 meters", "Contains about 30 small mountain glaciers", "Composed mostly of granite and gneiss", "Part of the Stanovoy Highlands in East Siberia"],
      es: ["El punto más alto es el Pik BAM con 3072 m", "Posee unos 30 pequeños glaciares de montaña", "Compuesto principalmente por granito y gneis", "Parte de las tierras altas de Stanovói en Siberia Oriental"],
      pt: ["O ponto mais alto é o Pik BAM com 3072 m", "Possui cerca de 30 pequenos glaciares de montanha", "Composto principalmente por granito e gnaisse", "Parte do Planalto de Stanovoy na Sibéria Oriental"],
      fr: ["Le point culminant est le Pik BAM avec 3072 m", "Possède environ 30 petits glaciers de montagne", "Composé principalement de granit et de gneiss", "Fait partie des hauts plateaux de Stanovoï en Sibérie orientale"],
    },
imageHint: "Sharp peaks of Kodar Mountains in Transbaikalia",
    descriptionAdvanced: {
      de: "Das Kodargebirge ist eine faszinierende, schwer zugängliche Hochgebirgsregion im russischen Transbaikalgebiet, die als der nordöstlichste und höchste Ausläufer des Stanowoi-Hochlands gilt. Mit seinen extrem steilen, stark zerklüfteten Granit- und Gneisgipfeln bietet es ein unerwartet dramatisches, rein alpines Relief inmitten der endlosen sibirischen Taiga. Eine geologische und klimatische Besonderheit ist, dass das Kodargebirge als einziges Gebirge in diesem Teil Ostsibiriens echte kleine Hängegletscher beherbergt. Zu den absoluten Naturwundern der Region gehört der Chara-Sand, eine ausgedehnte, leuchtend gelbe Sandwüste, die sich völlig surreal direkt am Fuß der schneebedeckten Berge und umgeben von dichten Lärchenwäldern ausbreitet. Historisch birgt das Gebiet dunkle Geheimnisse: In den späten 1940er Jahren wurde hier in extrem abgelegenen Gulag-Lagern (wie der Borlag) unter unmenschlichen Bedingungen das erste sowjetische Uran für das Atombombenprogramm abgebaut.",
      hu: "A Kodar-hegység egy lenyűgöző, nehezen megközelíthető magashegyi régió a Bajkálon túli területen (Zabajkalje), amely a Sztanovoj-felföld legmagasabb, északkeleti nyúlványát alkotja. Rendkívül meredek, csipkézett gránit- és gneiszcsúcsaival váratlanul drámai, tiszta alpesi domborzatot mutat a végtelen szibériai tajga közepén. Földrajzi és éghajlati különlegessége, hogy Kelet-Szibéria ezen részén egyedülálló módon valódi, bár kisméretű függőgleccserekkel rendelkezik. A régió egyik legfőbb, szinte szürreális természeti csodája a Csara-homoksivatag: egy ragyogó sárga dűnékből álló, kiterjedt homoktenger, amely abszurd módon közvetlenül a hófedte hegyek lábánál, sűrű vörösfenyőerdők gyűrűjében fekszik. A hegység történelme sötét titkokat rejt: az 1940-es évek végén itt, a világ egyik legfélreesőbb Gulag-táborában (a Borlagban), embertelen körülmények között bányászták a szovjet atombombaprogram első uránkészleteit.",
      ro: "Munții Kodar reprezintă o regiune alpină fascinantă și greu accesibilă din regiunea rusă Transbaikal, fiind considerată cea mai nord-estică și înaltă extensie a Podișului Stanovoi. Cu vârfurile sale extrem de abrupte și fragmentate din granit și gnais, oferă un relief alpin pur și neașteptat de dramatic în mijlocul nesfârșitei taigale siberiene. O particularitate geologică și climatică remarcabilă este faptul că Munții Kodar sunt singurii din această parte a Siberiei de Est care găzduiesc mici ghețari suspendați autentici. Printre minunile naturale absolute ale regiunii se numără Nisipurile Ciara, un deșert vast de nisip galben strălucitor, care se întinde complet suprarealist chiar la baza munților acoperiți de zăpadă, înconjurat de păduri dense de zadă. Istoric, zona ascunde secrete întunecate: la sfârșitul anilor 1940, în tabere de muncă forțată (Gulag) extrem de izolate (cum ar fi Borlag), s-a extras aici, în condiții inumane, primul uraniu sovietic pentru programul bombei atomice.",
      en: "The Kodar Mountains form a captivating, highly inaccessible alpine region in the Russian Transbaikal territory, standing as the highest and most northeastern extension of the Stanovoy Highlands. With its exceptionally steep, deeply jagged granite and gneiss peaks, it presents an unexpectedly dramatic, purely alpine relief rising abruptly from the endless expanse of the Siberian taiga. A striking geological and climatic anomaly of the Kodar range is that it is the only mountain system in this part of Eastern Siberia to sustain genuine, albeit small, hanging glaciers. Among the region's absolute natural wonders are the Chara Sands, an extensive, bright yellow sand desert that lies in surreal juxtaposition directly at the foot of the snow-capped mountains, encircled by dense larch forests. Historically, the area harbors dark secrets: in the late 1940s, the extremely remote Borlag Gulag camp was established here, where prisoners mined the very first Soviet uranium for the atomic bomb program under inhumane conditions.",
      es: "Las montañas de Kodar son una fascinante región de alta montaña de difícil acceso en la Transbaikalia rusa, considerada la estribación más nororiental y elevada de las tierras altas de Stanovói. Con sus picos de granito y gneis extremadamente empinados y fracturados, ofrece un relieve alpino dramático en medio de la interminable taiga siberiana. Una particularidad geológica y climática es que Kodar es la única cadena montañosa en esta parte de Siberia que alberga pequeños glaciares de ladera. Entre las maravillas naturales de la región se encuentran las arenas de Chara, un extenso desierto de arena amarilla que se extiende de forma surrealista al pie de las montañas nevadas. Históricamente, el área oculta secretos oscuros: a finales de la década de 1940, en campos de gulag remotos como Borlag, se extrajo el primer uranio soviético para el programa de la bomba atómica en condiciones inhumanas.",
      pt: "As montanhas Kodar são uma fascinante região de alta montanha de difícil acesso na Transbaicália russa, considerada o contraforte mais a nordeste e elevado do Planalto de Stanovoy. Com os seus picos de granito e gnaisse extremamente íngremes e fracturados, oferece um relevo alpino dramático no meio da interminável taiga siberiana. Uma particularidade geológica e climática é que Kodar é a única cordilheira nesta parte da Sibéria que abriga pequenos glaciares de encosta. Entre as maravilhas naturais da região encontram-se as areias de Chara, um extenso deserto de areia amarela que se estende de forma surrealista ao pé das montanhas nevadas. Historicamente, a área esconde segredos obscuros: no final da década de 1940, em campos de gulag remotos como Borlag, foi extraído o primeiro urânio soviético para o programa da bomba atómica em condições desumanas.",
      fr: "Les monts Kodar sont une région de haute montagne fascinante et difficile d'accès dans la Transbaïkalie russe, considérée comme le contrefort le plus au nord-est et le plus élevé des hauts plateaux de Stanovoï. Avec ses sommets de granit et de gneiss extrêmement escarpés et fracturés, elle offre un relief alpin dramatique au milieu de l'interminable taïga sibérienne. Une particularité géologique et climatique est que les monts Kodar sont la seule chaîne de montagnes de cette partie de la Sibérie à abriter de petits glaciers suspendus. Parmi les merveilles naturelles de la région figurent les sables de Tchara, un vaste désert de sable jaune vif qui s'étend de manière surréaliste au pied des montagnes enneigées. Historiquement, la zone cache de sombres secrets : à la fin des années 1940, dans des camps de goulag isolés (comme le Borlag), le premier uranium soviétique pour le programme de la bombe atomique a été extrait dans des conditions inhumaines.",
    },
    factsAdvanced: {
      de: ["A hegység legmagasabb pontja a BAM-csúcs (Pik BAM), amely 3072 méter magas", "Több mint 30 kisméretű, jégkorszaki maradvány gleccser található a területén", "Kőzetanyaga rendkívül ellenálló proterozoikumi gránitból és gneiszből épül fel", "A hegy lábánál fekvő Csara-homoksivatag kb. 10x5 kilométer kiterjedésű", "Az 1940-es években itt nyitották meg a Szovjetunió legelső uránbányáját", "A BAM vasútvonal egyik leghosszabb és legnehezebben megépített alagútja fúrja át", "Klímai viszonyai zordak, a telek hosszúak és a hőmérséklet gyakran -40 °C alá süllyed", "Népszerű, de kifejezetten nehéz, extrém túlélőtúrák célpontja Oroszországban"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de la cordillera es el pico BAM (Pik BAM), con 3072 metros de altura", "En su territorio se encuentran más de 30 pequeños glaciares, restos de la edad de hielo", "Su material rocoso está compuesto por granito proterozoico y gneis extremadamente resistentes", "El desierto de arena de Chara, situado al pie de la montaña, tiene una extensión de unos 10x5 kilómetros", "En la década de 1940 se abrió aquí la primera mina de uranio de la Unión Soviética", "Uno de los túneles más largos y difíciles de construir de la línea ferroviaria BAM atraviesa la zona", "Las condiciones climáticas son severas, los inviernos son largos y la temperatura baja a menudo de -40 °C", "Es un destino para expediciones de supervivencia extremas y difíciles en Rusia"],
      pt: ["O ponto mais alto da cordilheira é o pico BAM (Pik BAM), com 3072 metros de altura", "No seu território encontram-se mais de 30 pequenos glaciares, vestígios da era do gelo", "O seu material rochoso é composto por granito proterozoico e gnaisse extremamente resistentes", "O deserto de areia de Chara, situado ao pé da montanha, tem uma extensão de cerca de 10x5 quilómetros", "Na década de 1940, foi aberta aqui a primeira mina de urânio da União Soviética", "Um dos túneis mais longos e difíceis de construir da linha ferroviária BAM atravessa a zona", "As condições climáticas são severas, os invernos são longos e a temperatura desce frequentemente abaixo de -40 °C", "É um destino para expedições de sobrevivência extremas e difíceis na Rússia"],
      fr: ["Le point culminant de la chaîne est le pic BAM (Pik BAM), qui culmine à 3072 mètres", "On trouve plus de 30 petits glaciers, vestiges de l'ère glaciaire, sur son territoire", "Sa roche est composée de granit et de gneiss proterozoïques extrêmement résistants", "Le désert de sable de Tchara au pied de la montagne mesure environ 10x5 kilomètres", "La toute première mine d'uranium de l'Union soviétique y a été ouverte dans les années 1940", "L'un des tunnels les plus longs et les plus difficiles à construire de la ligne BAM le traverse", "Les conditions climatiques sont rudes, les hivers sont longs et les températures chutent souvent sous les -40 °C", "C'est une destination pour des randonnées de survie extrêmes et difficiles en Russie"],
    },
    image: "/poi-images/russia-kodar-mountains-relief-v2.webp",
},  {
    id: "russia-chukchi-highlands-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Tschuktschenhochland", hu: "Csukcs-föld", ro: "Podișul Ciukotka", en: "Chukchi Highlands"},
    image: "/poi-images/russia-chukchi-highlands-relief-v2.webp",
    coords: [175.0, 67.0],
    coords: [175.0, 67.0],
    description: {
      de: "Dieses ausgedehnte Hochland im äußersten Nordosten Sibiriens besteht aus mehreren Mittelgebirgsketten. Die Region ist durch arktische Tundra und Dauerfrostboden geprägt.",
      hu: "Ez a kiterjedt felföld Szibéria távoli északkeleti részén több középhegységből áll. A területet arktikus tundra és állandóan fagyott talaj jellemzi.",
      ro: "Acest podiș întins din extremul nord-est al Siberiei este format din mai multe lanțuri muntoase medii. Regiunea este dominată de tundră arctică și permafrost.",
      en: "These extensive highlands in the far northeast of Siberia consist of several medium-height mountain ranges. The region is characterized by arctic tundra and permafrost.",
      es: "Este extenso altiplano en el extremo noreste de Siberia consta de varias cadenas montañosas medias. La región está marcada por la tundra ártica y el suelo de permafrost.",
      pt: "Este vasto planalto no extremo nordeste da Sibéria consiste em várias cadeias de montanhas médias. A região é caracterizada pela tundra ártica e pelo solo de permafrost.",
      fr: "Ce vaste haut plateau situé à l'extrême nord-est de la Sibérie se compose de plusieurs chaînes de moyenne montagne. La région est marquée par la toundra arctique et le pergélisol.",
    },
    facts: {
      de: ["Höchster Gipfel ist die Ischodnaja (1843 m)", "Erstreckt sich über etwa 450 Kilometer", "Bildet die Wasserscheide zum Arktischen Ozean", "Geprägt durch Frostverwitterung und Kryoplanation"],
      hu: ["Legmagasabb csúcsa az Iszhodnaja (1843 m)", "Hossza megközelítőleg 450 kilométer", "Vízválasztó a Jeges-tenger irányába", "A fagyaprózódás határozza meg a felszínét"],
      ro: ["Cel mai înalt vârf este Ishodnaia (1843 m)", "Se întinde pe o lungime de circa 450 km", "Cumpănă a apelor pentru Oceanul Arctic", "Relieful este modelat de procesele de îngheț"],
      en: ["Highest summit is Mount Iskhodnaya (1,843 m)", "Stretches for approximately 450 kilometers", "Forms a drainage divide for the Arctic Ocean", "Surface shaped by frost weathering processes"],
      es: ["La cumbre más alta es el Iskhodnaya (1843 m)", "Se extiende por unos 450 kilómetros", "Forma la divisoria de aguas con el océano Ártico", "Marcado por la meteorización por helada y la crioplanación"],
      pt: ["O cume mais alto é o Iskhodnaya (1843 m)", "Estende-se por cerca de 450 quilómetros", "Forma a bacia hidrográfica para o Oceano Ártico", "Caracterizado pela meteorização pelo gelo e crioplanação"],
      fr: ["Le plus haut sommet est l'Iskhodnaïa (1843 m)", "S'étendent sur environ 450 kilomètres", "Forment la ligne de partage des eaux vers l'océan Arctique", "Marqués par la gélifraction et la cryoplanation"],
    },
    imageHint: "Tundra landscape of Chukchi Highlands",
    descriptionAdvanced: {
      de: "Das Tschuktschenhochland erstreckt sich als ein weitläufiges, isoliertes Netzwerk aus rauen Bergketten und hochgelegenen Plateaus über den äußersten Nordosten des eurasischen Kontinents. Diese abgelegene arktische Wildnis, die den Pazifischen vom Arktischen Ozean trennt, ist geologisch stark durch tektonische Hebungen und vulkanische Aktivitäten der Vergangenheit geprägt. Die Landschaft ist eine fast waldlose, steinige Tundra, in der extreme Kälte und starke Winde die Bildung tiefer Böden verhindern und Frostsprengung riesige Schuttfelder hinterlässt. Während der ewig langen, dunklen Wintermonate ist das Hochland unter Eis und Schnee begraben, doch der kurze Sommer bringt eine erstaunlich bunte, widerstandsfähige arktische Flora hervor. Für die indigene Bevölkerung der Tschuktschen, die hier seit Jahrtausenden traditionelle Rentierzucht betreiben, ist diese unwirtliche, aber majestätische Landschaft Heimat und Lebensgrundlage.",
      hu: "A Csukcs-felföld (Csukotkai-hegyvidék) egy kiterjedt, elszigetelt, zord hegyláncokból és magaslati platókból álló hálózat az eurázsiai kontinens legkeletibb peremén. Ez a távoli, a Csendes-óceánt a Jeges-tengertől elválasztó arktikus vadon geológiailag erősen tagolt, amit a múltbéli tektonikus emelkedések és vulkáni tevékenység formált. A táj egy szinte teljesen fátlan, köves hegyi tundra, ahol a szélsőséges hideg és a folyamatos, viharos szelek megakadályozzák a termőréteg kialakulását, a fagyaprózódás pedig hatalmas kőtengereket hoz létre. A végtelenül hosszú, sötét téli hónapokban a felföld vastag hó- és jégtakaró alatt szunnyad, de a rövid arktikus nyár meglepően színpompás, szívós növényvilágot varázsol a felszínre. A terület őslakosai, a csukcsok számára, akik évezredek óta hagyományos nomád rénszarvaspásztorkodást folytatnak itt, ez a barátságtalan, mégis fenséges táj az egyetlen otthon.",
      ro: "Podișul Ciukotka se întinde ca o rețea vastă și izolată de lanțuri muntoase aspre și platouri înalte în extremitatea nord-estică a continentului eurasiatic. Această sălbăticie arctică îndepărtată, care separă Oceanul Pacific de Oceanul Arctic, este puternic marcată geologic de ridicări tectonice și activități vulcanice din trecut. Peisajul este o tundră stâncoasă, aproape lipsită de copaci, unde frigul extrem și vânturile puternice împiedică formarea solurilor adânci, iar fragmentarea prin îngheț lasă în urmă câmpuri uriașe de grohotiș. În timpul lunilor de iarnă interminabile și întunecate, podișul este îngropat sub gheață și zăpadă, dar scurta vară aduce la viață o floră arctică surprinzător de colorată și rezistentă. Pentru populația indigenă a ciukcilor, care practică aici de milenii creșterea tradițională a renilor, acest peisaj inospitalier, dar maiestuos, este casa și sursa lor de existență.",
      en: "The Chukchi Highlands stretch as a vast, profoundly isolated network of rugged mountain ranges and elevated plateaus across the extreme northeastern edge of the Eurasian continent. This remote arctic wilderness, acting as the primary continental divide between the Pacific and Arctic Oceans, is heavily scarred by past tectonic uplifts and volcanic activity. The landscape consists of an almost entirely treeless, rocky alpine tundra, where extreme cold and relentless winds prevent the formation of deep soils, while frost weathering shatters the bedrock into massive boulder fields. During the interminably long, dark winter months, the highlands are entombed in ice and snow, yet the brief arctic summer conjures a surprisingly vibrant and resilient array of tundra flora. For the indigenous Chukchi people, who have practiced traditional nomadic reindeer herding here for millennia, this unforgiving but majestic environment is both home and sustenance.",
      es: "La meseta de Chukotka se extiende como una red vasta y aislada de cadenas montañosas rudas y altiplanos sobre el extremo noreste del continente euroasiático. Esta remota naturaleza ártica, que separa el océano Pacífico del Ártico, está geológicamente marcada por elevaciones tectónicas y actividades volcánicas del pasado. El paisaje es una tundra pedregosa casi sin árboles, donde el frío extremo y los fuertes vientos impiden la formación de suelos profundos y la meteorización por helada deja enormes campos de escombros. Durante los eternos y oscuros meses de invierno, el altiplano está enterrado bajo el hielo y la nieve, pero el corto verano produce una flora ártica asombrosamente colorida y resistente. Para la población indígena de los chukchis, que han practicado la cría tradicional de renos aquí durante milenios, este paisaje inhóspito pero majestuoso es su hogar y medio de vida.",
      pt: "O Planalto de Chukchi estende-se como uma vasta e isolada rede de cadeias montanhosas ásperas e planaltos elevados sobre o extremo nordeste do continente eurasiático. Esta selva ártica remota, que separa o Oceano Pacífico do Oceano Ártico, é geologicamente marcada por levantamentos tectónicos e atividades vulcânicas do passado. A paisagem é uma tundra pedregosa quase sem árvores, onde o frio extremo e os ventos fortes impedem a formação de solos profundos e a meteorização pelo gelo deixa enormes campos de detritos. Durante os meses eternos e escuros de inverno, o planalto está enterrado sob gelo e neve, mas o curto verão produz uma flora ártica surpreendentemente colorida e resistente. Para a população indígena dos Chukchi, que pratica aqui a criação tradicional de renas há milénios, esta paisagem inóspita mas majestosa é o seu lar e a sua base de subsistência.",
      fr: "Les monts de Tchoukotka s'étendent comme un vaste réseau isolé de chaînes de montagnes rudes et de hauts plateaux sur l'extrême nord-est du continent eurasiatique. Cette nature sauvage arctique reculée, qui sépare l'océan Pacifique de l'océan Arctique, est géologiquement marquée par des soulèvements tectoniques et des activités volcaniques passées. Le paysage est une toundra pierreuse presque dépourvue d'arbres, où le froid extrême et les vents violents empêchent la formation de sols profonds et où le gel laisse d'immenses champs de débris. Pendant les longs mois d'hiver sombres, le haut plateau est enseveli sous la glace et la neige, mais le court été voit éclore une flore arctique étonnamment colorée et résistante. Pour les Tchouktches, peuple autochtone pratiquant l'élevage traditionnel de rennes depuis des millénaires, ce paysage inhospitalier mais majestueux est leur foyer et leur moyen de subsistance.",
    },
    factsAdvanced: {
      de: ["A hegységrendszer legmagasabb pontja, az Iszhodnaja-hegy 1843 méter magas", "Több mint 450 kilométer hosszan terül el a Csukcs-félsziget belsejében", "Klímaját a Jeges-tenger és a Bering-tenger fagyos áramlatai határozzák meg", "A permafrost vastagsága helyenként megközelíti a 300-400 métert", "Geológiailag főként mezozoikumi vulkáni kőzetekből és gránitból áll", "A területen található Oroszország legkeletibb kontinentális vízválasztója", "A zord körülmények ellenére hatalmas vad rénszarvascsordák élnek itt", "Az őslakos csukcsok évezredes túlélési kultúrájának központja"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto del sistema montañoso, el monte Iskhodnaya, tiene 1843 metros", "Se extiende por más de 450 kilómetros en el interior de la península de Chukchi", "Su clima está determinado por las corrientes gélidas del océano Ártico y el mar de Bering", "El espesor del permafrost alcanza en algunos lugares los 300-400 metros", "Geológicamente se compone principalmente de rocas volcánicas mesozoicas y granito", "Aquí se encuentra la divisoria de aguas continental más oriental de Rusia", "A pesar de las duras condiciones, viven aquí enormes manadas de renos salvajes", "Es el centro de la cultura de supervivencia milenaria de los indígenas chukchis"],
      pt: ["O ponto mais alto do sistema montanhoso, o Monte Iskhodnaya, tem 1843 metros de altura", "Estende-se por mais de 450 quilómetros no interior da península de Chukchi", "O seu clima é determinado pelas correntes geladas do Oceano Ártico e do Mar de Bering", "A espessura do permafrost aproxima-se de 300-400 metros em alguns locais", "Geologicamente composta por rochas vulcânicas mesozoicas e granito", "Aqui encontra-se a bacia hidrográfica continental mais oriental da Rússia", "Apesar das condições rigorosas, vivem aqui enormes manadas de renas selvagens", "É o centro da cultura de sobrevivência milenar dos nativos Chukchi"],
      fr: ["Le point culminant du système, le mont Iskhodnaïa, s'élève à 1843 mètres", "S'étend sur plus de 450 kilomètres à l'intérieur de la péninsule tchouktche", "Son climat est régi par les courants glacés de l'océan Arctique et de la mer de Béring", "L'épaisseur du pergélisol approche par endroits les 300 à 400 mètres", "Composé géologiquement de roches volcaniques mésozoïques et de granite", "Abrite la ligne de partage des eaux continentale la plus orientale de Russie", "Malgré les conditions rudes, d'immenses troupeaux de rennes sauvages y vivent", "Cœur de la culture de survie millénaire du peuple autochtone tchouktche"],
    }
  },
  {
    id: "russia-timan-ridge-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Timanrücken", hu: "Tyiman-hátság", ro: "Creasta Timan", en: "Timan Ridge"},
    image: "/poi-images/russia-timan-ridge-relief-v2.webp",
    coords: [51.0, 64.0],
    coords: [51.0, 64.0],
    description: {
      de: "Der Timanrücken ist eine alte, erodierte Gebirgskette im Norden des europäischen Russlands. Er verläuft parallel zum Ural und trennt die Petschora-Ebene vom Mezen-Becken.",
      hu: "A Tyiman-hátság egy ősi, lepusztult hegylánc Oroszország európai részének északán. Az Urallal párhuzamosan fut, elválasztva a Pecsora-síkságot a Mezen-medencétől.",
      ro: "Creasta Timan este un lanț muntos vechi și erodat din nordul Rusiei Europene. Rulează paralel cu Munții Ural, separând Câmpia Peciora de Bazinul Mezen.",
      en: "The Timan Ridge is an ancient, eroded mountain range in the north of European Russia. It runs parallel to the Urals, separating the Pechora Plain from the Mezen Basin.",
      es: "La dorsal de Timán es una antigua cadena montañosa erosionada en el norte de la Rusia europea. Corre paralela a los Urales y separa la llanura de Pechora de la cuenca del Mezén.",
      pt: "A cumeada de Timan é uma antiga cadeia de montanhas erodida no norte da Rússia europeia. Corre paralela aos Urais e separa a planície de Pechora da bacia do Mezen.",
      fr: "La crête de Timan est une ancienne chaîne de montagnes érodée du nord de la Russie européenne. Elle est parallèle à l'Oural et sépare la plaine de la Petchora du bassin de la Mezen.",
    },
    facts: {
      de: ["Maximale Höhe beträgt 471 Meter", "Erstreckt sich über etwa 900 Kilometer", "Entstand während der baikalischen Orogenese", "Reich an Bodenschätzen wie Titan und Bauxit"],
      hu: ["Legmagasabb pontja 471 méter", "Hossza körülbelül 900 kilométer", "A bajkáli hegységképződés során jött létre", "Titán- és bauxitlelőhelyekben gazdag terület"],
      ro: ["Altitudinea maximă este de 471 metri", "Se întinde pe aproximativ 900 kilometri", "Format în timpul orogenezei baikaliene", "Bogat în resurse minerale precum titan și bauxită"],
      en: ["Maximum elevation is 471 meters", "Stretches for approximately 900 kilometers", "Formed during the Baikalid orogeny", "Rich in mineral resources like titanium and bauxite"],
      es: ["La altura máxima es de 471 metros", "Se extiende por unos 900 kilómetros", "Surgió durante la orogenia baikaliana", "Rica en recursos naturales como titanio y bauxita"],
      pt: ["A altitude máxima é de 471 metros", "Estende-se por cerca de 900 quilómetros", "Surgiu durante a orogenia baikaliana", "Rica em recursos naturais como titânio e bauxite"],
      fr: ["Altitude maximale de 471 mètres", "S'étend sur environ 900 kilomètres", "Formée lors de l'orogenèse baikalienne", "Riche en minerais tels que le titane et la bauxite"],
    },
imageHint: "Eroded hills and forests of Timan Ridge",
    descriptionAdvanced: {
      de: "Der Timanrücken ist eine alte, sanft geschwungene Hügel- und Bergkette, die sich über 900 Kilometer im hohen Norden des europäischen Russlands erstreckt. Er verläuft fast parallel zum gewaltigen Uralgebirge und wirkt als geologische Trennlinie zwischen dem sumpfigen Petschora-Becken und dem Mezen-Becken. Durch Millionen Jahre der Erosion sind die ehemals schroffen Gipfel stark abgeschliffen worden, sodass die Landschaft heute von dichten, schwer durchdringlichen Taigawäldern und ausgedehnten Moorgebieten dominiert wird, die in den nördlichsten Ausläufern in Waldtundra übergehen. Trotz seiner bescheidenen topografischen Höhe ist der Timanrücken von unschätzbarer wirtschaftlicher Bedeutung für Russland: Seine tiefen Gesteinsschichten bergen einige der reichsten und größten Vorkommen an Bauxit, Titanerz sowie bedeutende Öl- und Gasfelder in der Region.",
      hu: "A Tyiman-hátság egy ősi, az erózió által szelíden lekerekített domb- és hegyvonulat, amely több mint 900 kilométer hosszan húzódik Észak-Európai-Oroszország peremvidékén. A hatalmas Urál-hegységgel szinte párhuzamosan futva természetes és geológiai választóvonalat képez a mocsaras Pecsora-medence és a Mezen-medence között. Évmilliók lepusztító munkájának köszönhetően az egykori éles csúcsok mára lecsiszolódtak, így a tájat ma sűrű, nehezen járható tajgaerdők és kiterjedt tőzeglápok uralják, amelyek a legészakibb részeken erdőstundrába mennek át. Szerény domborzati magassága ellenére a Tyiman-hátság felbecsülhetetlen gazdasági jelentőséggel bír Oroszország számára: mélyebb kőzetrétegei a régió leggazdagabb bauxit- és titánérc-lelőhelyeit, valamint jelentős kőolaj- és földgázmezőket rejtenek.",
      ro: "Creasta Timan este un lanț de coline și munți străvechi, ușor ondulați, care se întinde pe o distanță de peste 900 de kilometri în nordul extrem al Rusiei Europene. Aceasta se desfășoară aproape paralel cu falnicii Munți Ural, acționând ca o graniță geologică între bazinul mlăștinos Peciora și bazinul Mezen. Prin milioane de ani de eroziune, vârfurile odinioară ascuțite au fost puternic șlefuite, astfel încât peisajul de astăzi este dominat de păduri de taiga dense, greu de pătruns, și de turbării extinse, care în extremitățile nordice se transformă în silvotundră. În ciuda altitudinii sale topografice modeste, Creasta Timan are o importanță economică inestimabilă pentru Rusia: straturile sale adânci de rocă ascund unele dintre cele mai bogate și mari zăcăminte de bauxită și minereu de titan, precum și câmpuri semnificative de petrol și gaze din regiune.",
      en: "The Timan Ridge is an ancient, gently undulating range of hills and low mountains that stretches for over 900 kilometers across the far north of European Russia. Running almost parallel to the massive Ural Mountains, it acts as a distinct geological divide separating the marshy Pechora Basin from the Mezen Basin. Millions of years of relentless erosion have heavily smoothed its once-jagged peaks, resulting in a landscape now dominated by dense, difficult-to-navigate taiga forests and vast expanses of peat bogs, transitioning into forest-tundra at its northernmost reaches. Despite its modest topographical elevation, the Timan Ridge holds incalculable economic significance for Russia: its deep rock strata harbor some of the region's richest and most extensive deposits of bauxite and titanium ore, alongside substantial oil and natural gas fields.",
      es: "La dorsal de Timán es una cadena de colinas y montañas antiguas y de formas suaves que se extiende a lo largo de 900 kilómetros en el extremo norte de la Rusia europea. Discurre casi paralela a los imponentes montes Urales y actúa como una línea de separación geológica entre la cuenca pantanosa de Pechora y la cuenca del Mezén. A lo largo de millones de años de erosión, las cimas antaño escarpadas se han desgastado fuertemente, por lo que hoy el paisaje está dominado por bosques de taiga densos y difíciles de penetrar y extensas zonas de turberas, que en las estribaciones más septentrionales pasan a ser tundra boscosa. A pesar de su modesta altura topográfica, la dorsal de Timán tiene una importancia económica inestimable para Rusia: sus profundas capas rocosas albergan algunos de los yacimientos más ricos y grandes de bauxita y mineral de titanio, así como importantes yacimientos de petróleo y gas en la región.",
      pt: "A cumeada de Timan é uma cadeia de colinas e montanhas antigas e suavemente onduladas que se estende por 900 quilómetros no extremo norte da Rússia europeia. Corre quase paralela aos imponentes montes Urais e funciona como uma linha de separação geológica entre a bacia pantanosa de Pechora e a bacia de Mezen. Através de milhões de anos de erosão, os picos outrora escarpados foram fortemente desgastados, de modo que a paisagem atual é dominada por florestas de taiga densas e difíceis de penetrar e extensas áreas de turfeiras, que nas ramificações mais setentrionais passam a tundra florestal. Apesar da sua modesta altitude topográfica, a cumeada de Timan tem uma importância económica inestimável para a Rússia: as suas camadas rochosas profundas albergam alguns dos depósitos mais ricos e maiores de bauxite, minério de titânio, bem como campos significativos de petróleo e gás na região.",
      fr: "La crête de Timan est une ancienne chaîne de collines et de montagnes aux formes douces qui s'étire sur 900 kilomètres dans le Grand Nord de la Russie européenne. Elle est presque parallèle à l'imposante chaîne de l'Oural et sert de ligne de séparation géologique entre le bassin marécageux de la Petchora et celui de la Mezen. Des millions d'années d'érosion ont fortement émoussé ses sommets autrefois escarpés, si bien que le paysage est aujourd'hui dominé par une taïga dense et impénétrable ainsi que par de vastes tourbières qui, dans les contreforts les plus au nord, laissent place à la toundra boisée. Malgré sa faible altitude topographique, la crête de Timan revêt une importance économique inestimable pour la Russie : ses couches rocheuses profondes recèlent certains des plus riches et des plus grands gisements de bauxite et de titane, ainsi que d'importants champs de pétrole et de gaz.",
    },
    factsAdvanced: {
      de: ["A hátság legmagasabb pontja, a Csetlasszkij Kameny mindössze 471 méter magas", "Több mint 900 kilométeren át húzódik északnyugat-délkelet irányban", "A bajkáli hegységképződés során gyűrődött fel, a késő prekambriumban", "Északi, sarkvidéki nyúlványai egészen a Barents-tenger partjáig érnek", "Az itteni bauxitbányák látják el az orosz alumíniumipar jelentős részét", "Kiterjedt tőzeglápjai komoly szerepet játszanak a globális szénmegkötésben", "A terület gyéren lakott, főként komi és nyenyec őslakosok élnek itt", "Jelentős kőolaj- és földgázmezőket is feltártak a mélyebb rétegeiben"],
      hu: [],
      ro: [],
      en: [],
      es: ["El punto más alto de la dorsal, el Chetlassky Kamen, tiene solo 471 metros de altura", "Se extiende por más de 900 kilómetros en dirección noroeste-sureste", "Se plegó durante la orogenia baikaliana, en el Precámbrico tardío", "Sus ramificaciones árticas del norte llegan hasta la costa del mar de Barents", "Las minas de bauxita de aquí suministran una parte importante de la industria rusa del aluminio", "Sus extensas turberas desempeñan un papel importante en la fijación global del carbono", "La zona está escasamente poblada, viviendo aquí principalmente indígenas komis y nenets", "También se han descubierto importantes campos de petróleo y gas en sus capas más profundas"],
      pt: ["O ponto mais alto da cumeada, o Chetlasskiy Kamen, tem apenas 471 metros de altitude", "Estende-se por mais de 900 quilómetros na direção noroeste-sudeste", "Dobrou-se durante a orogenia baikaliana, no final do Pré-Câmbrico", "As suas ramificações árticas do norte chegam até à costa do Mar de Barents", "As minas de bauxite aqui existentes fornecem uma parte significativa da indústria russa do alumínio", "As suas extensas turfeiras desempenham um papel importante na fixação global de carbono", "A área é pouco povoada, vivendo aqui sobretudo indígenas Komi e Nenets", "Também foram descobertos campos significativos de petróleo e gás nas suas camadas mais profundas"],
      fr: ["Le point culminant de la crête, le Tchetlasski Kamen, ne s'élève qu'à 471 mètres", "Elle s'étire sur plus de 900 kilomètres du nord-ouest au sud-est", "Elle s'est plissée lors de l'orogenèse baikalienne, à la fin du Précambrien", "Ses prolongements arctiques septentrionaux atteignent la côte de la mer de Barents", "Les mines de bauxite locales approvisionnent une grande partie de l'industrie russe de l'aluminium", "Ses vastes tourbières jouent un rôle majeur dans la séquestration mondiale du carbone", "La zone est peu peuplée, habitée principalement par les autochtones Komis et Nénètses", "D'importants gisements de pétrole et de gaz naturel ont été découverts dans ses couches profondes"],
    },
    image: "/poi-images/russia-timan-ridge-relief-v2.webp",
},  {
    id: "russia-volga-upland-relief-v2",
    parent: "RU",
    type: "mountain",
    name: { de: "Wolgaplatte", hu: "Volga-menti-hátság", ro: "Podișul Volgăi", en: "Volga Upland"},
    image: "/poi-images/russia-volga-upland-relief-v2.webp",
    coords: [48.0, 52.0],
    coords: [48.0, 52.0],
    description: {
      de: "Diese Hügellandschaft am rechten Ufer der Wolga erstreckt sich von Kasan bis Wolgograd. Sie fällt steil zum Fluss ab und bildet die markante Silhouette des Wolga-Ufers.",
      hu: "A Volga jobb partján elhelyezkedő dombság Kazanytól Volgográdig húzódik. Meredeken szakad le a folyó felé, meghatározva a Volga-part jellegzetes képét.",
      ro: "Acest podiș de pe malul drept al Volgăi se întinde de la Kazan până la Volgograd. Coboară abrupt spre fluviu, formând silueta distinctivă a malului Volgăi.",
      en: "This hilly region on the right bank of the Volga stretches from Kazan to Volgograd. It drops steeply toward the river, forming the distinctive silhouette of the Volga's shoreline.",
      es: "Este paisaje de colinas en la orilla derecha del Volga se extiende desde Kazán hasta Volgogrado. Cae abruptamente hacia el río y forma la silueta característica de la ribera del Volga.",
      pt: "Esta paisagem de colinas na margem direita do Volga estende-se de Kazan a Volgogrado. Desce abruptamente para o rio e forma a silhueta marcante da margem do Volga.",
      fr: "Ce paysage de collines sur la rive droite de la Volga s'étend de Kazan à Volgograd. Il descend abruptement vers le fleuve et forme la silhouette caractéristique de la rive de la Volga.",
    },
    facts: {
      de: ["Höchster Punkt ist der Hügel Nabljudatel (381 m)", "Länge von Nord nach Süd ca. 800 km", "Beinhaltet die bekannten Schiguli-Berge", "Stark von Erosion und Karstprozessen geprägt"],
      hu: ["Legmagasabb pontja a Nabljudatyel-domb (381 m)", "Észak-déli irányú hossza kb. 800 km", "Magában foglalja a Zsiguli-hegységet", "Erősen erodált, karsztjelenségekben gazdag"],
      ro: ["Cel mai înalt punct este dealul Nabliudatel (381 m)", "Lungimea pe axa nord-sud este de 800 km", "Include faimoșii Munți Jiguli", "Relief marcat de eroziune și procese carstice"],
      en: ["Highest point is Nabliudatel Hill (381 m)", "Length from north to south is about 800 km", "Includes the well-known Zhiguli Mountains", "Heavily affected by erosion and karst processes"],
      es: ["El punto más alto es la colina Nabljudatel (381 m)", "Longitud de norte a sur de unos 800 km", "Incluye las conocidas montañas Zhigulí", "Fuertemente marcada por la erosión y procesos kársticos"],
      pt: ["O ponto mais alto é a colina Nabljudatel (381 m)", "Comprimento de norte a sul de cerca de 800 km", "Inclui as conhecidas montanhas Zhiguli", "Fortemente marcada por erosão e processos cársticos"],
      fr: ["Le point culminant est la colline Nablidatel (381 m)", "Longueur nord-sud d'environ 800 km", "Comprend les célèbres monts Jigouli", "Fortement marquée par l'érosion et les processus karstiques"],
    },
    imageHint: "Steep slopes of Volga Upland overlooking the river",
    descriptionAdvanced: {
      de: "Die Wolgaplatte ist eine landschaftlich beeindruckende, asymmetrische Hochfläche im europäischen Teil Russlands, die sich majestätisch entlang des rechten, westlichen Ufers der mittleren und unteren Wolga erhebt. Während sie nach Westen hin sanft in die Ebene abfällt, bricht sie nach Osten, direkt zur Wolga hin, oft in extrem steilen, spektakulären Klippen und tief ausgewaschenen Schluchten ab. Diese steilen Ufer, regional oft als 'Berge' bezeichnet (wie die berühmten Schiguli-Berge in der Samara-Schleife), verleihen dem sonst flachen Flusslauf eine unerwartet dramatische, canyonartige Kulisse. Die von Laub- und Mischwäldern sowie weiten Steppenflächen geprägte Landschaft ist geologisch stark durch intensive Erosion und Karstprozesse geformt. Historisch boten die unzugänglichen Klippen und Höhlen der Wolgaplatte perfekten Schutz für Gesetzlose und Aufständische, heute sind weite Teile beliebte Naturparks und Erholungsgebiete.",
      hu: "A Volga-menti-hátság egy geológiailag aszimmetrikus, látványos dombvidék, amely fenségesen emelkedik az európai Oroszországban, a Középső- és Alsó-Volga jobb (nyugati) partja mentén. Míg nyugat felé a domborzat lassan, szelíden simul bele a síkságba, addig keleten, közvetlenül a folyó felé drámai, meredek sziklafalakkal és mélyen kimosott szakadékokkal szakad le. Ezek a meredek peremek – amelyeket a helyiek gyakran hegyeknek neveznek, mint például a híres Zsiguli-hegységet a Szamarai-kanyarban – meglepő, szurdokszerű hátteret biztosítanak az amúgy síkvidéki folyónak. A lombhullató és vegyes erdőkkel, valamint tágas sztyeppékkel borított tájat az erózió és a karsztosodás erőteljesen formálta. Történelmileg e meredek sziklák és rejtett barlangok tökéletes menedéket nyújtottak a törvényenkívülieknek és felkelőknek, ma azonban kiterjedt nemzeti parkok és népszerű rekreációs övezetek találhatók itt.",
      ro: "Podișul Volgăi este o zonă de înălțimi asimetrice, impresionantă din punct de vedere peisagistic, situată în partea europeană a Rusiei, care se înalță maiestuos de-a lungul malului drept (vestic) al Volgăi mijlocii și inferioare. În timp ce spre vest coboară blând spre câmpie, spre est, direct către fluviu, se prăbușește adesea în faleze extrem de abrupte, spectaculoase, și ravene adânc erodate. Aceste maluri abrupte, denumite adesea regional 'munți' (cum ar fi faimoșii Munți Jiguli din Bucla Samara), conferă cursului altfel plat al fluviului un fundal neașteptat de dramatic, asemănător unui canion. Peisajul, dominat de păduri de foioase și mixte, precum și de vaste întinderi de stepă, este modelat geologic de o eroziune intensă și de procese carstice. Istoric, stâncile inaccesibile și peșterile Podișului Volgăi au oferit protecție perfectă haiducilor și rebelilor; astăzi, porțiuni mari sunt parcuri naturale populare și zone de recreere.",
      en: "The Volga Upland is a visually striking, highly asymmetrical plateau in European Russia that rises majestically along the right (western) bank of the middle and lower Volga River. While it slopes gently away to the west into the surrounding plains, its eastern edge drops abruptly toward the river in extremely steep, spectacular cliffs and deeply eroded ravines. These precipitous bluffs, often referred to locally as 'mountains' (most notably the famous Zhiguli Mountains within the Samara Bend), provide an unexpectedly dramatic, canyon-like backdrop to the otherwise flat river basin. The landscape, characterized by broadleaf and mixed forests interspersed with expansive steppes, is geologically heavily sculpted by intense water erosion and active karst processes. Historically, the inaccessible cliffs and hidden caves of the Volga Upland provided perfect refuge for outlaws and rebels; today, vast areas are protected as popular national parks and recreational zones.",
      es: "La meseta del Volga es una altiplanicie asimétrica e impresionante en la Rusia europea que se eleva majestuosamente a lo largo de la orilla derecha, al oeste, del curso medio y bajo del Volga. Mientras que hacia el oeste desciende suavemente hacia la llanura, hacia el este, directamente frente al Volga, suele terminar en acantilados extremadamente empinados y espectaculares y gargantas profundamente erosionadas. Estas orillas escarpadas, a menudo llamadas localmente 'montañas' (como las famosas montañas Zhigulí en la curva de Samara), confieren al curso del río, por lo demás llano, un escenario inesperadamente dramático de tipo cañón. El paisaje, marcado por bosques caducifolios y mixtos así como por extensas estepas, está geológicamente muy moldeado por la intensa erosión y procesos kársticos. Históricamente, los inaccesibles acantilados y cuevas de la meseta del Volga ofrecieron refugio perfecto para forajidos y rebeldes; hoy, grandes partes son parques naturales y zonas de recreo populares.",
      pt: "O planalto do Volga é uma zona de terras altas assimétrica e impressionante na parte europeia da Rússia, que se eleva majestosamente ao longo da margem direita (oeste) do médio e baixo Volga. Enquanto desce suavemente para oeste em direção à planície, para leste, diretamente para o Volga, termina frequentemente em penhascos extremamente íngremes e espetaculares e desfiladeiros profundamente erodidos. Estas margens íngremes, regionalmente chamadas de 'montanhas' (como as famosas montanhas Zhiguli na curva de Samara), dão ao curso do rio, de outra forma plano, um cenário inesperadamente dramático e tipo desfiladeiro. A paisagem, caracterizada por florestas de folha caduca e mistas bem como vastas áreas de estepe, é geologicamente moldada por erosão intensa e processos cársticos. Historicamente, os penhascos e cavernas inacessíveis do planalto do Volga ofereceram proteção perfeita para bandidos e rebeldes; hoje, grandes partes são parques naturais e áreas de lazer populares.",
      fr: "Le plateau de la Volga est une haute surface asymétrique impressionnante située dans la partie européenne de la Russie, s'élevant majestueusement le long de la rive droite (ouest) de la moyenne et basse Volga. Tandis qu'il s'abaisse doucement vers l'ouest dans la plaine, il se termine à l'est, face à la Volga, par des falaises souvent extrêmement abruptes et des gorges profondément creusées. Ces rives escarpées, localement qualifiées de « montagnes » (comme les célèbres monts Jigouli dans la boucle de Samara), confèrent au cours du fleuve, par ailleurs plat, un décor de canyon inattendu. Le paysage, marqué par des forêts de feuillus et mixtes ainsi que par de vastes steppes, est géologiquement façonné par une érosion intense et des processus karstiques. Historiquement, les falaises et grottes inaccessibles du plateau ont servi de refuge aux hors-la-loi et aux insurgés ; aujourd'hui, de vastes zones sont des parcs naturels et des lieux de détente prisés.",
    },
    factsAdvanced: {
      de: ["A hátság észak-déli irányban több mint 800 kilométer hosszan követi a Volgát", "A legmagasabb pontja, a Nabljudatyel (Megfigyelő) domb 381 méter magas", "Kifejezetten aszimmetrikus: a Volga felé meredek, nyugat felé lankás", "Területén található a Szamarai-kanyar és a festői Zsiguli-hegység", "A felszínt nagyon sűrű, mély aszóvölgy- és szakadékhálózat tagolja", "A mészkő és kréta alapkőzet miatt karsztbarlangok és víznyelők jellemzik", "A meredek folyópart történelmileg a volgai kalózok és lázadók híres búvóhelye volt", "Számos jelentős orosz város, köztük Volgográd és Szaratov fekszik a lábánál"],
      hu: [],
      ro: [],
      en: [],
      es: ["La meseta sigue al Volga en dirección norte-sur durante más de 800 kilómetros.", "Su punto más alto, la colina Nabljudatel (Observador), tiene 381 metros de altura.", "Es marcadamente asimétrica: escarpada hacia el Volga y suave hacia el oeste.", "En su territorio se encuentran la curva de Samara y las pintorescas montañas Zhigulí.", "La superficie está fragmentada por una red muy densa de valles secos y barrancos profundos.", "Debido al lecho de piedra caliza y tiza, se caracteriza por cuevas kársticas y sumideros.", "La orilla escarpada del río fue históricamente el escondite de piratas y rebeldes del Volga.", "Numerosas ciudades rusas importantes, como Volgogrado y Sarátov, se encuentran a sus pies."],
      pt: ["O planalto segue o Volga na direção norte-sul por mais de 800 quilómetros.", "O seu ponto mais alto, a colina Nabljudatel (Observador), tem 381 metros de altura.", "É marcadamente assimétrico: íngreme em direção ao Volga e suave para oeste.", "No seu território situam-se a curva de Samara e as pitorescas montanhas Zhiguli.", "A superfície é fragmentada por uma rede muito densa de vales secos e desfiladeiros.", "Devido ao leito de calcário e giz, é caracterizado por cavernas cársticas e algares.", "A margem íngreme do rio foi historicamente o esconderijo de piratas e rebeldes do Volga.", "Várias cidades russas importantes, incluindo Volgogrado e Saratov, situam-se no seu sopé."],
      fr: ["Le plateau suit la Volga du nord au sud sur plus de 800 kilomètres.", "Son point culminant, la colline Nablidatel (l'Observateur), s'élève à 381 mètres.", "Il est asymétrique : abrupt vers la Volga, en pente douce vers l'ouest.", "Il abrite la boucle de Samara et les pittoresques monts Jigouli.", "La surface est découpée par un réseau dense de vallées sèches et de ravins profonds.", "Le socle calcaire favorise la présence de grottes karstiques et de dolines.", "La rive escarpée fut historiquement un refuge célèbre pour les pirates et les rebelles.", "Plusieurs grandes villes russes, dont Volgograd et Saratov, sont situées à son pied."],
    }
  }
,
  {
    id: "russia-sikhote-alin-pass-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Sichote-Alin-Pass", hu: "Szihote-Aliny-hágó", ro: "Pasul Sihote-Alin", en: "Sikhote-Alin Pass" },
    coords: [135.5, 44.9333],
    description: {
      de: "Dieser Pass liegt in der Sikhote-Alin-Gebirgskette im Fernen Osten Russlands. Er dient als wichtige Verbindung durch das zerklüftete Gelände.",
      hu: "Ez a hágó az orosz Távol-Kelet Szihote-Aliny hegységében található. Fontos közlekedési útvonalat biztosít a nehéz terepen keresztül.",
      ro: "Acest pas montan este situat în lanțul muntos Sihote-Alin din Orientul Îndepărtat rus. Servește ca o legătură importantă prin terenul accidentat.",
      en: "This pass is located within the Sikhote-Alin mountain range in the Russian Far East. It serves as a vital transit point through the rugged terrain.",
      es: "Este paso se encuentra en la cordillera de Sijoté-Alín, en el Lejano Oriente ruso. Sirve como conexión importante a través de un terreno accidentado.",
      pt: "Esta passagem situa-se na cordilheira de Sikhote-Alin, no Extremo Oriente russo. Serve como uma ligação importante através do terreno acidentado.",
      fr: "Ce col est situé dans la chaîne de montagnes de Sikhote-Aline, dans l'Extrême-Orient russe. Il constitue une liaison importante à travers ce relief escarpé.",
    },
    facts: {
      de: ["Teil des Sikhote-Alin-Gebirges", "Höhe etwa 1000 Meter", "Wichtige Verkehrsverbindung", "Region Primorje"],
      hu: ["A Szihote-Aliny része", "Körülbelül 1000 méter magas", "Fontos közlekedési útvonal", "Primorszkij határterület"],
      ro: ["Parte din munții Sihote-Alin", "Altitudine de circa 1000 metri", "Legătură rutieră principală", "Ținutul Primorie"],
      en: ["Part of the Sikhote-Alin range", "Elevation around 1000 meters", "Key transport corridor", "Primorsky Krai"],
      es: ["Parte de la cordillera de Sijoté-Alín", "Altura aproximada de 1000 metros", "Importante conexión de transporte", "Región de Primorie"],
      pt: ["Parte da cordilheira de Sikhote-Alin", "Altitude de cerca de 1000 metros", "Importante ligação de transporte", "Região de Primorsky"],
      fr: ["Fait partie de la chaîne de Sikhote-Aline", "Altitude d'environ 1000 mètres", "Liaison de transport importante", "Région du Primorié"],
    },
    imageHint: "Sikhote-Alin mountain landscape",
    descriptionAdvanced: {
      de: "Der Sichote-Alin-Pass liegt im gleichnamigen Gebirgszug im Fernen Osten Russlands und ist ein zentraler Punkt in einer Region von außerordentlicher biologischer Bedeutung. Das Gebirge erstreckt sich über 1200 Kilometer entlang des Japanischen Meeres und dient als Wasserscheide zwischen den Flüssen, die direkt ins Meer fließen, und jenen, die in den Amur münden. Die Geologie des Passes ist durch tektonische Aktivität und vulkanische Ursprünge geprägt, was zu einer zerklüfteten und schwer zugänglichen Landschaft führt. Historisch wurde die Region durch die Expeditionen von Wladimir Arsenjew und seinem Führer Dersu Usala weltberühmt. Die Vegetation wechselt je nach Höhe von dichten Nadelwäldern zu alpiner Tundra, wobei der Pass oft die Grenze zwischen verschiedenen Mikroklimata bildet. Im Jahr 1947 wurde die Region Schauplatz des massiven Sichote-Alin-Meteoriteneinfalls, eines der bedeutendsten astronomischen Ereignisse der Neuzeit. Heute ist das Gebiet als UNESCO-Welterbe geschützt, vor allem zum Erhalt des Lebensraums des bedrohten Sibirischen Tigers.",
      hu: "A Szihote-Alin-hágó az azonos nevű hegylánc egyik kulcsfontosságú pontja Oroszország távol-keleti részén, a Tengermelléki határterületen. A mintegy 1200 kilométer hosszan elnyúló hegység vízválasztóként szolgál a Japán-tengerbe ömlő rövid folyók és az Amur vízrendszere között. A hágó környéke vadregényes, meredek sziklákkal és sűrű erdőkkel borított táj, amely jelentős tengerszint feletti magasságban helyezkedik el. A térség tudományos hírnevét az 1947-ben bekövetkezett hatalmas vasmeteorit-becsapódás is növelte, amelynek darabjai több négyzetkilométeren szóródtak szét. A terület az UNESCO Világörökség része, mivel itt található a szibériai tigris egyik utolsó háborítatlan élőhelye. A növényzetet az északi tajga és a déli szubtrópusi elemek különleges keveredése jellemzi, ami egyedülálló biológiai diverzitást eredményez. A hágó az utazók számára a vadon kapuját jelenti, ahol a természet ereje és az érintetlenség dominál.",
      ro: "Pasul Sihote-Alin traversează lanțul muntos omonim din Extremul Orient Rus, oferind acces către unele dintre cele mai sălbatice regiuni ale Primoriei. Acești munți se întind pe o distanță de 1.200 de kilometri de-a lungul Mării Japoniei și reprezintă o barieră naturală crucială care influențează climatul întregii regiuni. Relieful pasului este marcat de pante abrupte și creste zimțate, fiind format în urma unor procese geologice complexe ce includ activitate tectonică intensă. Zona a devenit celebră în întreaga lume datorită explorărilor realizate de Vladimir Arseniev la începutul secolului XX, acesta documentând viața indigenilor udege. În anul 1947, în apropierea acestui masiv a avut loc prăbușirea unuia dintre cei mai mari meteoriți de fier înregistrați în istorie, lăsând în urmă numeroase cratere. Astăzi, regiunea este protejată sub egida UNESCO, fiind vitală pentru supraviețuirea tigrului siberian și pentru conservarea pădurilor mixte temperate care adăpostesc o floră rară, la granița dintre taiga și zona subtropicală.",
      en: "The Sikhote-Alin Pass is a strategic point within the Sikhote-Alin mountain range in the Russian Far East, located in Primorsky Krai. Extending 1,200 kilometers along the Sea of Japan, this mountain range acts as a primary drainage divide between the short rivers flowing into the sea and the expansive Amur river basin. The relief of the pass is characterized by rugged terrain, steep slopes, and dense forests that transition from boreal taiga to alpine tundra at higher elevations. The region gained international fame through the expeditions of Vladimir Arsenyev and his guide Dersu Uzala in the early 20th century. A significant geological and astronomical event occurred here in 1947, when a massive iron meteorite broke apart in the atmosphere and fell onto the mountainside, creating over 100 craters. Now a UNESCO World Heritage site, the area is crucial for the preservation of the endangered Siberian tiger and represents a unique ecological crossroads where northern and southern species coexist.",
      es: "El paso de Sijoté-Alín es un paso de montaña situado en la cordillera de Sijoté-Alín, en el Lejano Oriente ruso. El paso se encuentra a unos 800 metros de altitud y conecta la región costera con el interior del país. Es conocido por su rica biodiversidad, que incluye el tigre de Amur. El paso forma parte de la reserva natural de Sijoté-Alín, declarada Patrimonio de la Humanidad por la UNESCO. El paisaje se caracteriza por bosques densos y picos rocosos.",
      pt: "O passo de Sikhote-Alin é uma passagem de montanha na cordilheira de Sikhote-Alin, no Extremo Oriente russo. A passagem situa-se a cerca de 800 metros de altitude e liga a região costeira ao interior do país. É conhecida pela sua rica biodiversidade, incluindo o tigre-siberiano. A passagem faz parte da reserva natural de Sikhote-Alin, que é Património Mundial da UNESCO. A paisagem é caracterizada por florestas densas e picos rochosos.",
      fr: "Le col de Sikhote-Aline est un col de montagne situé dans la chaîne de Sikhote-Aline, en Extrême-Orient russe. Situé à environ 800 mètres d'altitude, il relie la région côtière à l'intérieur des terres. Il est réputé pour sa riche biodiversité, notamment le tigre de l'Amour. Le col fait partie de la réserve naturelle de Sikhote-Aline, inscrite au patrimoine mondial de l'UNESCO. Le paysage est marqué par des forêts denses et des sommets rocheux.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung des Sichote-Alin-Gebirges ist der Berg Anik mit 1.933 Metern.", "Am 12. Februar 1947 schlug hier ein massiver Eisenmeteorit von ca. 70 Tonnen ein.", "Der Gebirgszug erstreckt sich über eine Länge von etwa 1.200 Kilometern.", "Die UNESCO erklärte das zentrale Sichote-Alin im Jahr 2001 zum Welterbe.", "In der Region leben etwa 90 % der weltweiten Population des Sibirischen Tigers.", "Die Schneedecke am Pass kann in den Wintermonaten eine Höhe von über 2 Metern erreichen."],
      hu: ["A hegylánc legmagasabb pontja az Anik-hegy, amely 1933 méter magas.", "1947. február 12-én egy 70 tonnás vasmeteorit csapódott be a térségben.", "A hegység mintegy 1200 kilométer hosszan nyúlik el az észak-déli tengely mentén.", "Az UNESCO 2001-ben vette fel a területet a világörökségi listára.", "Ez a vidék a szibériai tigris legfontosabb megmaradt természetes élőhelye.", "A hágó környékén a hóvastagság telente rendszeresen meghaladja a 200 centimétert."],
      ro: ["Cea mai înaltă culme a masivului Sihote-Alin este muntele Anik, având 1.933 metri.", "La 12 februarie 1947, un meteorit de fier de 70 de tone a căzut în această regiune.", "Lanțul muntos se întinde pe o lungime de aproximativ 1.200 de kilometri.", "UNESCO a inclus partea centrală a masivului în Patrimoniul Mondial în 2001.", "Regiunea găzduiește cea mai mare parte a populației rămase de tigri siberieni.", "Stratul de zăpadă în zona pasului poate depăși grosimea de 2 metri în timpul iernii."],
      en: ["The highest peak of the Sikhote-Alin range is Mount Anik, reaching 1,933 meters.", "A 70-ton iron meteorite crashed into the region on February 12, 1947.", "The entire mountain range stretches for approximately 1,200 kilometers.", "The Central Sikhote-Alin was designated a UNESCO World Heritage site in 2001.", "The area is home to roughly 90% of the world's Siberian tiger population.", "Winter snow accumulation at the pass can frequently exceed 2 meters in depth."],
      es: ["Altura del paso de unos 800 metros.", "Longitud de la ruta del paso de aprox. 15 kilómetros.", "Parte del Patrimonio de la Humanidad de la UNESCO Sijoté-Alín (desde 2001).", "Superficie de la reserva de 4.301 km².", "Presencia de 50 especies de mamíferos.", "Precipitación anual superior a 1.000 mm."],
      pt: ["Altitude da passagem de cerca de 800 metros.", "Comprimento da rota da passagem de aprox. 15 quilómetros.", "Parte do Património Mundial da UNESCO Sikhote-Alin (desde 2001).", "Área da reserva de 4.301 km².", "Presença de 50 espécies de mamíferos.", "Precipitação anual superior a 1.000 mm."],
      fr: ["Altitude du col d'environ 800 mètres.", "Longueur de la route du col d'environ 15 kilomètres.", "Fait partie du patrimoine mondial de l'UNESCO de Sikhote-Aline (depuis 2001).", "Superficie de la réserve de 4 301 km².", "Présence de 50 espèces de mammifères.", "Précipitations annuelles supérieures à 1 000 mm."],
    },
    image: "/poi-images/russia-sikhote-alin-pass-relief-v2.webp",
  },
  {
    id: "russia-salair-ridge-relief-v2", "sights": {
      "de": [
            {
                  "name": "Mordovskaia Izba",
                  "text": "Ein ethnographisches Museum, das eine traditionelle mordwinische Bauernhütte mit authentischer Inneneinrichtung und Handwerkskunst zeigt.",
                  "category": "museum",
                  "coords": [
                        85.008795,
                        54.031478
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Mordovskaia Izba",
                  "text": "Néprajzi múzeum, amely egy hagyományos mordvin parasztházat mutat be autentikus berendezéssel és mesterségekkel.",
                  "category": "museum",
                  "coords": [
                        85.008795,
                        54.031478
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Mordovskaia Izba",
                  "text": "Un muzeu etnografic care prezintă o colibă tradițională țărănească mordvină, cu mobilier interior și meșteșuguri autentice.",
                  "category": "museum",
                  "coords": [
                        85.008795,
                        54.031478
                  ]
            }
      ],
      "en": [
            {
                  "name": "Mordovskaia Izba",
                  "text": "An ethnographic museum showcasing a traditional Mordvin peasant hut with authentic interior furnishings and crafts.",
                  "category": "museum",
                  "coords": [
                        85.008795,
                        54.031478
                  ]
            }
      ]
},
    type: "mountain",
    parent: "RU",
    name: { de: "Salair-Rücken", hu: "Szalair-hátság", ro: "Creasta Salair", en: "Salair Ridge" },
    coords: [85.0, 54.0],
    description: {
      de: "Der Salair-Rücken ist ein niedriges Gebirge in Südsibirien, das sich südöstlich des Westsibirischen Tieflands erstreckt. Er bildet die nordwestliche Fortsetzung des Altai-Systems.",
      hu: "A Szalair-hátság egy alacsony hegység Dél-Szibériában, amely a Nyugat-szibériai-alföldtől délkeletre terül el. Az Altaj-hegyrendszer északnyugati folytatása.",
      ro: "Creasta Salair este un lanț muntos de mică altitudine din sudul Siberiei, situat la sud-est de Câmpia Siberiei de Vest. Formează continuarea nord-vestică a sistemului Altai.",
      en: "The Salair Ridge is a low mountain range in Southern Siberia, extending southeast of the West Siberian Plain. It forms the northwestern extension of the Altai mountain system.",
      es: "La dorsal de Salair es una montaña baja en el sur de Siberia, situada al sureste de la llanura de Siberia occidental. Forma la continuación noroccidental del sistema de Altai.",
      pt: "A cumeada de Salair é uma montanha baixa no sul da Sibéria, situada a sudeste da planície da Sibéria Ocidental. Constitui a continuação noroeste do sistema Altai.",
      fr: "La crête de Salair est un massif de basse montagne du sud de la Sibérie, s'étendant au sud-est de la plaine de Sibérie occidentale. Elle forme le prolongement nord-ouest du système de l'Altaï.",
    },
    facts: {
      de: ["Maximale Höhe ca. 600 m", "Geologisch Teil des Altai", "Reich an Bodenschätzen", "Länge etwa 300 Kilometer"],
      hu: ["Maximális magassága kb. 600 m", "Geológiailag az Altaj része", "Gazdag ásványkincsekben", "Hossza kb. 300 kilométer"],
      ro: ["Înălțime maximă aprox. 600 m", "Geologic parte din Altai", "Bogată în resurse minerale", "Lungime de circa 300 kilometri"],
      en: ["Maximum height approx. 600 m", "Geologically part of the Altai", "Rich in mineral resources", "Length about 300 kilometers"],
      es: ["Altura máxima de aprox. 600 m", "Geológicamente parte de Altai", "Rica en recursos naturales", "Longitud de unos 300 kilómetros"],
      pt: ["Altitude máxima de aprox. 600 m", "Geologicamente parte do Altai", "Rica em recursos naturais", "Comprimento de cerca de 300 quilómetros"],
      fr: ["Altitude maximale d'environ 600 m", "Géologiquement liée à l'Altaï", "Riche en ressources minières", "Longueur d'environ 300 kilomètres"],
    },
    imageHint: "Salair ridge landscape Siberian taiga",
    descriptionAdvanced: {
      de: "Der Salairrücken ist ein Mittelgebirge im Süden Westsibiriens, das sich über etwa 300 km von Nordosten nach Südwesten erstreckt. Seine durchschnittliche Höhe beträgt 400–500 m, die höchste Erhebung ist der Gipfel Pik Medvezhiy mit 621 m. Der Kamm besteht aus paläozoischen Gesteinen, darunter stark metamorphisierte Schiefer und Quarzite. Die Region ist reich an Eisen- und Goldvorkommen, die seit dem 18. Jahrhundert abgebaut werden. Der Salairrücken bildet die Wasserscheide zwischen den Flusssystemen Ob und Tom. Seine Nordwestflanke fällt sanft zur Westsibirischen Tiefebene ab, während die Südostseite steil zum Kusnezker Becken abfällt. Die Vegetation besteht hauptsächlich aus Nadel- und Mischwäldern mit Sibirischer Zeder und Fichte. Der Bergbau hat die Landschaft lokal verändert, aber weite Teile sind noch ursprünglich.",
      hu: "A Szalair-hátság Nyugat-Szibéria déli részén található, mintegy 300 km hosszan húzódik északkelet-délnyugati irányban. Átlagos magassága 400-500 méter, legmagasabb pontja a Medvegyij csúcs (621 m). A vonulat paleozoos kőzetekből, főként metamorf palákból és kvarcitokból épül fel. A térség gazdag vas- és aranylelőhelyekben, amelyeket a 18. század óta bányásznak. A Szalair-hátság vízválasztó szerepet tölt be az Ob és a Tom folyók között. Északnyugati lejtője enyhén ereszkedik a Nyugat-szibériai-alföld felé, míg délkeleti oldala meredeken zuhan a Kuznyecki-medencébe. A növényzetet főként tű- és vegyes erdők alkotják szibériai cédrussal és lucfenyővel. A bányászat helyileg átalakította a tájat, de nagy része még érintetlen.",
      ro: "Creasta Salair este o regiune deluroasă din sudul Siberiei de Vest, întinzându-se pe aproximativ 300 km de la nord-est la sud-vest. Altitudinea medie este de 400-500 m, cel mai înalt vârf fiind Pik Medvezhiy cu 621 m. Creasta este formată din roci paleozoice, în principal șisturi metamorfice și cuarțite. Zona este bogată în zăcăminte de fier și aur, exploatate încă din secolul al XVIII-lea. Salair formează cumpăna apelor între bazinele râurilor Ob și Tom. Versantul nord-vestic coboară lin spre Câmpia Siberiei de Vest, iar cel sud-estic cade abrupt în Bazinul Kuznețk. Vegetația constă în păduri de conifere și mixte, cu cedru siberian și molid. Exploatările miniere au modificat peisajul local, dar mare parte rămâne neatinsă.",
      en: "The Salair Ridge is a low mountain range in southern West Siberia, stretching about 300 km from northeast to southwest. Its average elevation is 400–500 m, with the highest peak Pik Medvezhiy at 621 m. The ridge is composed of Paleozoic rocks, including highly metamorphosed shales and quartzites. The area has significant iron and gold deposits, mined since the 18th century. The Salair Ridge serves as a watershed between the Ob and Tom river systems. Its northwestern slope gently descends to the West Siberian Plain, while the southeastern side drops steeply into the Kuznetsk Basin. Vegetation is predominantly coniferous and mixed forests, with Siberian cedar and spruce. Mining has locally altered the landscape, but large parts remain pristine.",
      es: "La dorsal de Salair es una zona de media montaña en el sur de Siberia occidental que se extiende unos 300 km de noreste a suroeste. Su altura media es de 400 a 500 m, siendo su punto más alto el pico Pik Medvezhiy con 621 m. La cordillera está formada por rocas paleozoicas, incluyendo esquistos y cuarcitas fuertemente metamorfoseados. La región es rica en yacimientos de hierro y oro, explotados desde el siglo XVIII. La dorsal de Salair constituye la divisoria de aguas entre los sistemas fluviales del Obi y el Tom. Su flanco noroeste desciende suavemente hacia la llanura de Siberia occidental, mientras que el lado sureste cae abruptamente hacia la cuenca de Kuznetsk. La vegetación consiste principalmente en bosques de coníferas y mixtos con cedro siberiano y abeto. La minería ha modificado el paisaje localmente, pero gran parte sigue siendo virgen.",
      pt: "A cumeada de Salair é uma montanha média no sul da Sibéria Ocidental, que se estende por cerca de 300 km de nordeste a sudoeste. A sua altitude média é de 400–500 m, sendo a elevação mais alta o pico Pik Medvezhiy, com 621 m. A cordilheira é composta por rochas paleozoicas, incluindo xistos e quartzitos fortemente metamorfoseados. A região é rica em depósitos de ferro e ouro, explorados desde o século XVIII. A cumeada de Salair constitui a bacia hidrográfica entre os sistemas fluviais Ob e Tom. O seu flanco noroeste desce suavemente para a planície da Sibéria Ocidental, enquanto o lado sudeste desce abruptamente para a bacia de Kuznetsk. A vegetação consiste principalmente em florestas de coníferas e mistas com cedro siberiano e abeto. A exploração mineira alterou a paisagem localmente, mas grandes áreas permanecem originais.",
      fr: "La crête de Salair est une montagne de moyenne altitude du sud de la Sibérie occidentale, s'étendant sur environ 300 km du nord-est au sud-ouest. Son altitude moyenne est de 400 à 500 m, le point culminant étant le mont Pik Medveji à 621 m. La crête est composée de roches paléozoïques, notamment de schistes et de quartzites fortement métamorphisés. La région est riche en gisements de fer et d'or, exploités depuis le XVIIIe siècle. La crête de Salair constitue la ligne de partage des eaux entre les systèmes fluviaux de l'Ob et du Tom. Son flanc nord-ouest descend doucement vers la plaine de Sibérie occidentale, tandis que le côté sud-est descend abruptement vers le bassin de Kouznetsk. La végétation se compose principalement de forêts de conifères et de forêts mixtes d'arolles de Sibérie et d'épicéas. L'exploitation minière a modifié localement le paysage, mais de vastes parties sont restées intactes.",
    },
    factsAdvanced: {
      de: ["Die maximale Höhe des Salairrückens beträgt 621 m am Pik Medvezhiy.", "Die Länge des Kamms beträgt etwa 300 km.", "Die Region wurde im 18. Jahrhundert erstmals systematisch auf Gold prospektiert.", "Jährlich fallen 400–600 mm Niederschlag, vor allem im Sommer.", "Die Durchschnittstemperatur im Januar beträgt -17 °C, im Juli +18 °C.", "Etwa 60 % der Fläche sind von Taiga bedeckt."],
      hu: ["A Szalair-hátság legmagasabb pontja a Medvegyij-csúcs, 621 méter.", "A vonulat hossza körülbelül 300 km.", "Az aranybányászat a 18. században kezdődött a térségben.", "Az éves csapadékmennyiség 400-600 mm.", "A januári átlaghőmérséklet -17 °C, a júliusi +18 °C.", "A terület mintegy 60%-át tajga borítja."],
      ro: ["Altitudinea maximă a Crestei Salair este de 621 m la vârful Pik Medvezhiy.", "Lungimea crestei este de aproximativ 300 km.", "Exploatarea aurului a început în secolul al XVIII-lea.", "Precipitațiile anuale sunt de 400-600 mm.", "Temperatura medie în ianuarie este de -17 °C, iar în iulie de +18 °C.", "Aproximativ 60% din suprafață este acoperită de taiga."],
      en: ["The Salair Ridge's highest point is Pik Medvezhiy at 621 m.", "The ridge extends for about 300 km.", "Gold mining in the area began in the 18th century.", "Annual precipitation averages 400–600 mm.", "Mean January temperature is -17 °C, July +18 °C.", "About 60% of the area is covered by taiga."],
      es: ["La altura máxima de la dorsal de Salair es de 621 m en el Pik Medvezhiy.", "La longitud de la cordillera es de unos 300 km.", "La región fue prospectada sistemáticamente en busca de oro por primera vez en el siglo XVIII.", "Anualmente caen entre 400 y 600 mm de precipitación, principalmente en verano.", "La temperatura media en enero es de -17 °C y en julio de +18 °C.", "Aproximadamente el 60 % de la superficie está cubierta por taiga."],
      pt: ["A altitude máxima da cumeada de Salair é de 621 m no Pik Medvezhiy.", "O comprimento da cordilheira é de cerca de 300 km.", "A região foi prospetada sistematicamente em busca de ouro pela primeira vez no século XVIII.", "A precipitação anual é de 400–600 mm, sobretudo no verão.", "A temperatura média em janeiro é de -17 °C, em julho de +18 °C.", "Cerca de 60 % da área é coberta por taiga."],
      fr: ["L'altitude maximale de la crête de Salair est de 621 m au mont Pik Medveji.", "La longueur de la crête est d'environ 300 km.", "La région a été prospectée pour l'or de manière systématique pour la première fois au XVIIIe siècle.", "Les précipitations annuelles sont de 400 à 600 mm, principalement en été.", "La température moyenne en janvier est de -17 °C, en juillet de +18 °C.", "Environ 60 % de la surface est couverte par la taïga."],
    },
    image: "/poi-images/russia-salair-ridge-relief-v2.webp",
  },
  {
    id: "russia-yergeni-upland-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Jergeni-Höhen", hu: "Jergeni-hátság", ro: "Podișul Iergeni", en: "Yergeni Upland" },
    coords: [44.5, 47.5],
    description: {
      de: "Die Jergeni-Höhen sind ein sanftes Hochland in der Kalmückien-Region im Süden Russlands. Sie trennen das Wolgatal von den Manytsch-Niederungen.",
      hu: "A Jergeni-hátság egy lankás felvidék az oroszországi Kalmükföldön. Elválasztja a Volga völgyét a Manyics-mélyföldtől.",
      ro: "Podișul Iergeni este o zonă înaltă și domoală din regiunea Calmîkia, în sudul Rusiei. Acesta separă valea fluviului Volga de depresiunile Manyci.",
      en: "The Yergeni Upland is a gently rolling highland in the Kalmykia region of Southern Russia. It separates the Volga valley from the Manych depressions.",
      es: "Las Alturas de Ergueni sind un altiplano suave en la región de Kalmukia, al sur de Rusia. Separan el valle del Volga de las tierras bajas de Mánych.",
      pt: "O Planalto de Yergeni é uma região de terras altas suaves na Calmúquia, no sul da Rússia. Separa o vale do Volga das depressões de Manych.",
      fr: "Les hauteurs d'Iergueni sont un plateau vallonné situé dans la région de Kalmoukie, au sud de la Russie. Elles séparent la vallée de la Volga des dépressions du Manytch.",
    },
    facts: {
      de: ["Höhe bis zu 220 Meter", "Erstreckt sich nördlich zum Kaspischen Meer", "Wichtige Wasserscheide", "Trockene Steppenlandschaft"],
      hu: ["Magassága eléri a 220 métert", "Északra nyúlik a Kaszpi-tenger felé", "Fontos vízválasztó", "Száraz sztyeppei táj"],
      ro: ["Altitudine de până la 220 metri", "Se extinde spre nord către Marea Caspică", "Bazin hidrografic important", "Peisaj de stepă uscată"],
      en: ["Height up to 220 meters", "Extends north toward the Caspian Sea", "Important watershed", "Arid steppe landscape"],
      es: ["Altura de hasta 220 metros", "Se extiende al norte hacia el Mar Caspio", "Importante divisoria de aguas", "Paisaje de estepa seca"],
      pt: ["Altitude de até 220 metros", "Estende-se a norte em direção ao Mar Cáspio", "Importante bacia hidrográfica", "Paisagem de estepe seca"],
      fr: ["Altitude jusqu'à 220 mètres", "S'étend vers le nord jusqu'à la mer Caspienne", "Importante ligne de partage des eaux", "Paysage de steppe sèche"],
    },
    imageHint: "Yergeni upland landscape",
    descriptionAdvanced: {
      de: "Die Jergeni-Hügel sind ein welliges Hochland im Südosten des europäischen Russlands, das sich über rund 330 Kilometer vom Wolga-Knie bei Wolgograd bis zur Kuma-Manytsch-Niederung erstreckt. Diese geologische Formation bildet die Wasserscheide zwischen dem Kaspischen Meer im Osten und dem Asowschen Meer im Westen. Das Relief ist durch eine asymmetrische Struktur geprägt: Während die Ostseite steil zur Kaspischen Senke abfällt, geht die Westseite sanft in das Don-Becken über. Die Jergeni-Hügel bestehen hauptsächlich aus Löss und Tonen, was sie anfällig für Erosion durch Wind und Wasser macht. Das Klima ist semiarid, was zu einer typischen Steppenvegetation führt, die im Sommer oft austrocknet. Historisch dienten die Hügel als wichtige Orientierungspunkte für Nomadenvölker und Handelsrouten zwischen dem Kaukasus und Zentralrussland. Heute ist die Region vor allem für die Landwirtschaft und die Viehzucht der hier ansässigen Kalmücken von Bedeutung.",
      hu: "A Jergeni-hátság egy hullámos dombvidék Oroszország európai részének délkeleti végén, amely mintegy 330 kilométer hosszan nyúlik el Volgográdtól délre. Ez a földrajzi képződmény fontos vízválasztó a Kaszpi-mélyföld és a Don-medence között, meghatározva a régió vízrajzát. A hátság keleti oldala meredeken szakad le a Kaszpi-tenger irányába, míg nyugati lejtői fokozatosan simulnak bele a szomszédos síkságokba. Alapkőzetét főként lösz és agyag alkotja, amelybe az erózió mély árkokat és völgyeket vájt az évezredek során. Az éghajlat száraz, kontinentális, így a tájat leginkább félsivatagi és sztyeppei növényzet borítja. Történelmileg a Jergeni fontos legelőterület volt a nomád népek, különösen a kalmükök számára, akik ma is ezen a vidéken élnek. A hátság legmagasabb pontjai alig haladják meg a 200 métert, mégis meghatározó elemei a dél-orosz síkvidéki panorámának.",
      ro: "Colinele Ergeni reprezintă un sector de podiș vălurit situat în sud-estul Rusiei europene, întinzându-se pe o lungime de aproximativ 330 de kilometri între orașul Volgograd și depresiunea Kuma-Manîci. Această formațiune geologică joacă rolul de cumpănă a apelor între bazinele Mării Caspice și Mării Azov, având o structură asimetrică distinctă. Versantul estic este abrupt, coborând brusc spre Câmpia Caspică, în timp ce versantul vestic este lin și se pierde treptat în valea Donului. Compoziția solului este dominată de loess și argile, materiale care favorizează formarea unei rețele dense de ravene și văi secate sub acțiunea vântului și a ploilor torențiale rare. Climatul semiarid a determinat apariția unei vegetații specifice de stepă și semideșert, utilizată tradițional pentru pășunatul oilor de către populația calmucă. Colinele Ergeni rămân o barieră geografică importantă care separă regiunile fertile de stepă de zonele aride ale deșertului caspic.",
      en: "The Yergeni Upland is a rolling plateau in the southeastern part of European Russia, stretching approximately 330 kilometers from the Volga River bend near Volgograd to the Kuma-Manych Depression. This geological formation serves as a significant drainage divide between the Caspian Sea to the east and the Sea of Azov to the west. The relief is notably asymmetrical, with a steep eastern slope dropping sharply toward the Caspian Depression and a gentle western slope merging into the Don River basin. Composed primarily of loess and clay, the upland is highly susceptible to erosion, which has carved out numerous ravines and gullies across its surface. The semiarid climate supports a landscape of dry steppe and semi-desert vegetation, traditionally used for livestock grazing by the Kalmyk people. Though modest in height, with peaks reaching only around 222 meters, the Yergeni Upland is a crucial geographical feature defining the transition between Russia's fertile plains and its arid eastern regions.",
      es: "La meseta de Ergueni es una región montañosa en el suroeste de Rusia, al este del Volga y al norte del Cáucaso. Se extiende unos 350 km de noroeste a sureste, con una altura media de 100 a 200 m y picos máximos de unos 220 m. El relieve se caracteriza por colinas bajas y valles llanos cubiertos de vegetación esteparia. Compuesta principalmente por sedimentos terciarios y cuaternarios como arenas y arcillas, la región se dedica a la agricultura, especialmente al cultivo de trigo y girasol. Drena hacia el Volga y el Mánych, y debido a su clima continental seco, solo recibe entre 300 y 400 mm de precipitación anual.",
      pt: "O planalto de Yergeni é uma região montanhosa no sudoeste da Rússia, a leste do Volga e a norte do Cáucaso. Estende-se por cerca de 350 km de noroeste a sudeste, com uma altitude média de 100-200 m e elevações máximas de cerca de 220 m. O relevo é caracterizado por colinas baixas e vales planos cobertos por vegetação de estepe. Composto principalmente por sedimentos terciários e quaternários, como areias e argilas, a região é utilizada para a agricultura, especialmente para o cultivo de trigo e girassol. O planalto drena para o Volga e o Manych, e devido ao clima continental seco, recebe apenas 300-400 mm de precipitação anual.",
      fr: "Le plateau d'Iergueni est une région vallonnée du sud-ouest de la Russie, située à l'est de la Volga et au nord du Caucase. Il s'étend sur environ 350 km du nord-ouest au sud-est, avec une altitude moyenne de 100 à 200 m et des sommets atteignant 220 m. Le relief se compose de collines basses et de plaines couvertes d'une végétation de steppe. Formé principalement de sédiments tertiaires et quaternaires (sables, argiles), le plateau est exploité pour l'agriculture, notamment pour le blé et le tournesol. La région se draine vers la Volga et le Manytch, et ne reçoit que 300 à 400 mm de pluie par an en raison de son climat continental sec.",
    },
    factsAdvanced: {
      de: ["Die Jergeni-Hügel erstrecken sich über eine Gesamtlänge von rund 330 Kilometern.", "Die höchste Erhebung der Hügelkette liegt bei etwa 222 Metern über dem Meeresspiegel.", "Das Hochland besteht überwiegend aus pliozänen Tonen und Lössablagerungen.", "Die Hügel bilden die Wasserscheide zwischen den Einzugsgebieten der Wolga und des Don.", "Der östliche Abfall der Hügel wird oft als 'Jergeni-Steilufer' bezeichnet.", "Im südlichen Teil der Hügel liegt Elista, die Hauptstadt der Republik Kalmückien."],
      hu: ["A Jergeni-hátság teljes hossza megközelítőleg 330 kilométer.", "A hátság legmagasabb pontja tengerszint felett 222 méteres magasságban található.", "A képződmény főként löszből, agyagból és homokkőből épül fel.", "Vízválasztóként szolgál a Kaszpi-tenger és az Azovi-tenger vízgyűjtő területei között.", "A keleti lejtő hirtelen 70-100 métert zuhan a Kaszpi-mélyföld felé.", "A térség meghatározó etnikai csoportja a buddhista vallású kalmük nép."],
      ro: ["Colinele Ergeni se întind pe o distanță de circa 330 de kilometri.", "Altitudinea maximă a acestui podiș este de 222 de metri deasupra mării.", "Structura geologică este compusă în principal din argile și depozite de loess.", "Formațiunea separă bazinul hidrografic al Volgăi de cel al fluviului Don.", "Versantul estic este mult mai abrupt decât cel vestic din cauza tectonicii.", "Elista, capitala Republicii Kalmîkia, se află în extremitatea sudică a colinelor."],
      en: ["The Yergeni Upland stretches for a total length of about 330 kilometers.", "The highest point of the upland reaches an elevation of 222 meters.", "The geological base consists mainly of Pliocene clay and loess deposits.", "The plateau acts as the drainage divide between the Volga and Don river basins.", "Its eastern escarpment drops abruptly towards the Caspian Lowland.", "Elista, the capital of Kalmykia, is located at the southern end of the upland."],
      es: ["La meseta de Ergueni tiene una longitud de unos 350 km.", "La altitud máxima es de aproximadamente 220 m.", "La precipitación anual oscila entre 300 y 400 mm.", "La temperatura media en enero es de -6 °C y en julio de +24 °C.", "La superficie agrícola ocupa cerca del 70 % de la región.", "Los ríos principales son el Ergeninka y el Kara-Sal."],
      pt: ["O planalto de Yergeni estende-se por um comprimento de cerca de 350 km.", "A altitude máxima é de aproximadamente 220 m.", "A precipitação anual varia entre 300 e 400 mm.", "A temperatura média em janeiro é de -6 °C e em julho de +24 °C.", "A área agrícola cobre cerca de 70% da região.", "Os rios principais são o Yergeninka e o Kara-Sal."],
      fr: ["Le plateau d'Iergueni s'étend sur une longueur d'environ 350 km.", "L'altitude maximale est d'environ 220 m.", "Les précipitations annuelles sont comprises entre 300 et 400 mm.", "La température moyenne en janvier est de -6 °C, et de +24 °C en juillet.", "Les terres agricoles couvrent environ 70 % de la région.", "Les principaux cours d'eau sont l'Iergueninka et le Kara-Sal."],
    },
    image: "/poi-images/russia-yergeni-upland-relief-v2.webp",
  },
  {
    id: "russia-don-plain-relief-v2",
    type: "valley",
    parent: "RU",
    name: { de: "Don-Ebene", hu: "Don-alföld", ro: "Câmpia Donului", en: "Don Plain" },
    coords: [40.0, 49.0],
    description: {
      de: "Die Don-Ebene bezeichnet das weitläufige Flachland entlang des Flusses Don in Südrussland. Es ist ein zentrales landwirtschaftliches Gebiet.",
      hu: "A Don-alföld az oroszországi Don folyó mentén húzódó kiterjedt síkság. Jelentős mezőgazdasági terület.",
      ro: "Câmpia Donului desemnează zona de șes întinsă de-a lungul râului Don în sudul Rusiei. Reprezintă o regiune agricolă centrală.",
      en: "The Don Plain refers to the expansive lowlands along the Don River in Southern Russia. It is a central agricultural region.",
      es: "La llanura del Don se refiere a las extensas tierras bajas a lo largo del río Don en el sur de Rusia. Es una zona agrícola central.",
      pt: "A planície do Don refere-se às vastas terras baixas ao longo do rio Don, no sul da Rússia. É uma área agrícola central.",
      fr: "La plaine du Don désigne les vastes terres basses le long du fleuve Don, dans le sud de la Russie. C'est une zone agricole centrale.",
    },
    facts: {
      de: ["Fruchtbare Schwarzerdeböden", "Teil der osteuropäischen Ebene", "Flussbett des Don", "Günstiges Kontinentalklima"],
      hu: ["Termékeny csernozjom talajok", "A Kelet-európai-síkság része", "A Don medre", "Kedvező kontinentális éghajlat"],
      ro: ["Soluri fertile de cernoziom", "Parte din Câmpia Europei de Est", "Albia râului Don", "Climat continental favorabil"],
      en: ["Fertile chernozem soils", "Part of the East European Plain", "Riverbed of the Don", "Favorable continental climate"],
      es: ["Suelos fértiles de tierra negra", "Parte de la llanura de Europa Oriental", "Lecho del río Don", "Clima continental favorable"],
      pt: ["Solos férteis de terra negra", "Parte da planície da Europa de Leste", "Leito do rio Don", "Clima continental favorável"],
      fr: ["Sols fertiles de terres noires", "Partie de la plaine d'Europe orientale", "Lit du fleuve Don", "Climat continental favorable"],
    },
    imageHint: "Don river plain landscape",
    descriptionAdvanced: {
      de: "Die Don-Ebene ist eine ausgedehnte Tiefebene im Südwesten Russlands, die weitgehend dem Einzugsgebiet des mittleren und unteren Don entspricht. Sie zeichnet sich durch ein flachwelliges Relief aus, das durch die erosive Kraft des Flusses und seiner Nebenflüsse über Jahrmillionen geformt wurde. Die Böden der Ebene bestehen überwiegend aus fruchtbarem Schwarzerde-Löss (Tschernosem), was die Region zu einer der wichtigsten Agrarlandschaften Russlands macht, oft als 'Kornkammer' bezeichnet. Das Klima ist gemäßigt kontinental mit heißen Sommern und relativ milden Wintern, was den großflächigen Anbau von Getreide und Sonnenblumen begünstigt. Geologisch ist die Ebene Teil der Russischen Tafel und weist eine dicke Schicht von Sedimentgesteinen auf. Historisch ist das Gebiet eng mit den Don-Kosaken verbunden, deren Siedlungen und Kultur die Region bis heute prägen. Zahlreiche Stauseen, wie der Zimljansker Stausee, regulieren heute den Wasserhaushalt und dienen der Stromerzeugung sowie der Binnenschifffahrt.",
      hu: "A Don-alföld Oroszország európai részének déli vidékén fekszik, a Don folyó középső és alsó szakaszának vízgyűjtő területén. A tájat enyhén hullámos síkság jellemzi, amelyet a folyóvízi erózió és a szél formált az évezredek során. A terület kiemelkedő értéke a rendkívül termékeny mezőségi talaj (csernozjom), amely lehetővé tette, hogy a régió Oroszország egyik legfontosabb mezőgazdasági központjává váljon. Az itt uralkodó mérsékelt kontinentális éghajlat kedvez a gabonafélék, a napraforgó és a kukorica termesztésének. A Don-alföld történelmileg a doni kozákok szülőföldje, akiknek hagyományai és erődített települései meghatározzák a vidék kulturális arculatát. A 20. század során hatalmas víztározókat építettek a folyón, mint például a Cimljanszki-víztározó, amely a hajózást és az öntözést is szolgálja. A síkság tengerszint feletti magassága többnyire 100 és 200 méter között alakul, végtelen horizontot kínálva az utazóknak.",
      ro: "Câmpia Donului este o vastă regiune de joasă altitudine situată în sud-vestul Rusiei, cuprinzând bazinele mijlociu și inferior ale fluviului Don. Relieful este predominant plat sau ușor vălurit, fiind modelat de procesele de eroziune fluvială și de depunerile de loess. Această zonă este faimoasă pentru solurile sale de tip cernoziom, extrem de fertile, care au transformat-o într-un centru agricol vital al federației, supranumit deseori 'grânarul Rusiei'. Climatul continental temperat, cu veri călduroase și precipitații moderate, favorizează culturile extensive de cereale și floarea-soarelui. Din punct de vedere istoric, Câmpia Donului este vatra cazacilor de pe Don, a căror cultură militară și tradiții agricole au marcat profund identitatea regională. Intervenția umană modernă este vizibilă prin marile lacuri de acumulare, precum cel de la Țimliansk, care asigură resursele necesare pentru irigații și hidroenergie. Câmpia oferă un peisaj de stepă antropizată, unde orizontul deschis este întrerupt doar de cursurile sinuoase ale afluenților Donului.",
      en: "The Don Plain is an extensive lowland region in southwestern Russia, largely coinciding with the drainage basin of the middle and lower Don River. The relief is characterized by a gently undulating surface formed by long-term fluvial erosion and aeolian processes. This plain is globally renowned for its thick layers of fertile chernozem (black earth) soil, making it one of Russia's premier agricultural belts, often referred to as the country's breadbasket. The continental climate, with warm summers and moderate rainfall, is ideal for the large-scale production of wheat, corn, and sunflowers. Historically, the Don Plain is the ancestral heartland of the Don Cossacks, whose distinctive social structure and settlements have left an indelible mark on the region's cultural landscape. Modern development has introduced significant water management systems, such as the Tsimlyansk Reservoir, which facilitates navigation and provides irrigation. With elevations generally ranging between 100 and 200 meters, the plain presents a vast, open steppe horizon.",
      es: "La llanura del Don es una extensa depresión en la parte europea de Rusia que se extiende a lo largo del curso medio y bajo del Don. Cubre un área de aproximadamente 250.000 km² y se sitúa entre la Meseta Central Rusa al oeste y la Meseta del Volga al este. Las altitudes varían entre 100 y 200 m, con el punto más bajo a unos 50 m. La llanura consiste en depósitos cuaternarios, principalmente loess y sedimentos fluviales. Es una de las regiones agrícolas más importantes de Rusia, conocida por el cultivo de trigo, maíz y remolacha azucarera. El Don fluye serpenteando por la llanura formando numerosos brazos muertos. El clima es templado continental con inviernos fríos (-10 °C en enero) y veranos cálidos (+20 °C en julio).",
      pt: "A planície do Don é uma vasta planície na parte europeia da Rússia que se estende ao longo do curso médio e inferior do Don. Cobre uma área de cerca de 250.000 km² e situa-se entre o Planalto Central Russo a oeste e o Planalto do Volga a leste. As altitudes variam entre 100 e 200 m, com o ponto mais baixo a cerca de 50 m. A planície consiste em depósitos quaternários, principalmente loess e sedimentos fluviais. É uma das áreas agrícolas mais importantes da Rússia, conhecida pelo cultivo de trigo, milho e beterraba açucareira. O Don corre em meandros pela planície e forma numerosos braços mortos. O clima é continental temperado com invernos frios (-10 °C em janeiro) e verões quentes (+20 °C em julho).",
      fr: "La plaine du Don est une vaste plaine de basse altitude dans la partie européenne de la Russie, s'étendant le long du cours moyen et inférieur du Don. Elle couvre une superficie d'environ 250 000 km² et se situe entre le plateau central de Russie à l'ouest et le plateau de la Volga à l'est. Les altitudes varient entre 100 et 200 m, le point le plus bas se trouvant à environ 50 m. La plaine est constituée de dépôts quaternaires, principalement de loess et de sédiments fluviaux. C'est l'une des zones agricoles les plus importantes de Russie, réputée pour la culture du blé, du maïs et de la betterave sucrière. Le Don serpente à travers la plaine, formant de nombreux bras morts. Le climat y est continental tempéré avec des hivers froids (-10 °C en janvier) et des étés chauds (+20 °C en juillet).",
    },
    factsAdvanced: {
      de: ["Die durchschnittliche Höhe der Don-Ebene liegt zwischen 100 und 200 Metern.", "Der Zimljansker Stausee ist mit 2.700 km² einer der größten der Region.", "Über 60 % der Fläche besteht aus hochfruchtbarem Schwarzerdeboden.", "Der Don ist mit 1.870 km Länge der prägende Fluss dieser Tiefebene.", "Die Region ist das historische Siedlungsgebiet der Don-Kosaken seit dem 16. Jahrhundert.", "Wichtige Städte wie Rostow am Don liegen am südlichen Rand der Ebene."],
      hu: ["A Don-alföld átlagos tengerszint feletti magassága 100 és 200 méter között mozog.", "A Cimljanszki-víztározó területe meghaladja a 2700 négyzetkilométert.", "A terület több mint 60%-át kiváló minőségű csernozjom talaj borítja.", "A síkság névadó folyója, a Don, összesen 1870 kilométer hosszú.", "A vidék a 16. század óta a doni kozákok történelmi központja.", "Rosztov-na-Donu az alföld egyik legfontosabb gazdasági és kulturális központja."],
      ro: ["Altitudinea medie a Câmpiei Donului variază între 100 și 200 de metri.", "Lacul de acumulare Țimliansk ocupă o suprafață de aproximativ 2.700 km².", "Peste 60% din suprafața câmpiei este acoperită de soluri de cernoziom.", "Fluviul Don are o lungime totală de 1.870 de kilometri și străbate întreaga câmpie.", "Această zonă este centrul istoric al armatei cazacilor de pe Don încă din secolul XVI.", "Orașul Rostov-pe-Don este principala poartă de acces către această regiune agricolă."],
      en: ["The average elevation of the Don Plain ranges between 100 and 200 meters.", "The Tsimlyansk Reservoir covers an area of about 2,700 square kilometers.", "More than 60% of the plain is covered with highly productive chernozem soil.", "The Don River, the plain's namesake, flows for a total of 1,870 kilometers.", "The region has been the traditional home of the Don Cossacks since the 1500s.", "Rostov-on-Don is the largest metropolitan area and economic hub of the plain."],
      es: ["La llanura del Don se extiende por unos 250.000 km².", "El punto más bajo está a unos 50 m sobre el nivel del mar.", "La precipitación anual es de 400–600 mm.", "La temperatura media en enero es de -10 °C, en julio +20 °C.", "La superficie agrícola útil representa alrededor del 60 % de la superficie total.", "El Don tiene unos 1.870 km de largo, de los cuales 1.500 km fluyen por la llanura."],
      pt: ["A planície do Don estende-se por cerca de 250.000 km².", "O ponto mais baixo situa-se a cerca de 50 m acima do nível do mar.", "A precipitação anual é de 400–600 mm.", "A temperatura média em janeiro é de -10 °C, em julho +20 °C.", "A área agrícola utilizada é de cerca de 60% da área total.", "O Don tem cerca de 1.870 km de comprimento, dos quais 1.500 km correm pela planície."],
      fr: ["La plaine du Don s'étend sur environ 250 000 km².", "Le point le plus bas est à environ 50 m au-dessus du niveau de la mer.", "Les précipitations annuelles sont de 400 à 600 mm.", "La température moyenne en janvier est de -10 °C, en juillet de +20 °C.", "La surface agricole utile représente environ 60 % de la surface totale.", "Le Don est long de 1 870 km, dont 1 500 km s'écoulent à travers la plaine."],
    },
    image: "/poi-images/russia-don-plain-relief-v2.webp",
  },
  {
    id: "russia-vitim-plateau-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Vitim-Plateau", hu: "Vitim-felföld", ro: "Podișul Vitim", en: "Vitim Plateau" },
    coords: [114.0, 55.0],
    description: {
      de: "Das Vitim-Plateau ist ein Hochland in Sibirien östlich des Baikalsees. Es ist geprägt durch Vulkankegel und ausgedehnte Permafrostböden.",
      hu: "A Vitim-felföld egy szibériai felvidék a Bajkál-tótól keletre. Vulkáni kúpok és kiterjedt permafroszt talajok jellemzik.",
      ro: "Podișul Vitim este o zonă înaltă din Siberia, situată la est de lacul Baikal. Este caracterizată prin conuri vulcanice și soluri permafrost extinse.",
      en: "The Vitim Plateau is a highland area in Siberia east of Lake Baikal. It is characterized by volcanic cones and extensive permafrost soils.",
      es: "La meseta de Vitim es una zona de tierras altas en Siberia, al este del lago Baikal. Se caracteriza por conos volcánicos y extensos suelos de permafrost.",
      pt: "O planalto de Vitim é uma região de terras altas na Sibéria, a leste do Lago Baikal. É caracterizado por cones vulcânicos e extensos solos de permafrost.",
      fr: "Le plateau de Vitim est une région de hautes terres en Sibérie, à l'est du lac Baïkal. Il est marqué par des cônes volcaniques et de vastes sols de pergélisol.",
    },
    facts: {
      de: ["Durchschnittshöhe 1000-1200 m", "Vulkane aus dem Quartär", "Raue sibirische Bedingungen", "In der Region Transbaikalien"],
      hu: ["Átlagos magassága 1000-1200 m", "Kvarc-időszaki vulkánok", "Zord szibériai körülmények", "Transzbajkálföldön található"],
      ro: ["Altitudine medie 1000-1200 m", "Vulcani din cuaternar", "Condiții siberiene aspre", "Situat în regiunea Transbaikalia"],
      en: ["Average height 1000-1200 m", "Quaternary volcanoes", "Harsh Siberian conditions", "Located in Transbaikalia region"],
      es: ["Altitud media de 1000-1200 m", "Volcanes del periodo Cuaternario", "Duras condiciones siberianas", "En la región de Transbaikalia"],
      pt: ["Altitude média de 1000-1200 m", "Vulcões do período Quaternário", "Condições siberianas rigorosas", "Na região da Transbaicália"],
      fr: ["Altitude moyenne 1000-1200 m", "Volcans du Quaternaire", "Conditions sibériennes rudes", "Dans la région de Transbaïkalie"],
    },
    imageHint: "Vitim plateau Siberian landscape",
    descriptionAdvanced: {
      de: "Das Vitim-Plateau ist eine weitläufige Hochlandregion im Osten der Republik Burjatien und der Region Transbaikalien. Es zeichnet sich durch ein welliges Relief mit durchschnittlichen Höhen von 1.200 bis 1.600 Metern aus, das durch vulkanische Aktivitäten im Känozoikum geprägt wurde. In der Landschaft finden sich zahlreiche erloschene Vulkankegel und Basaltströme, die dem Plateau ein charakteristisches Aussehen verleihen. Die Region ist von Permafrost durchzogen, was den Abfluss von Oberflächenwasser erschwert und zur Bildung zahlreicher Moore und kleiner Seen führt. Die Vegetation besteht überwiegend aus lichten Lärchenwäldern (Taiga), die an die extremen Temperaturschwankungen und die kargen Böden angepasst sind. Der Fluss Vitim, ein bedeutender Nebenfluss der Lena, hat seinen Ursprung in der Nähe des Plateaus und tiefschneidende Täler in den Randbereichen geformt. Aufgrund seiner Abgeschiedenheit und des rauen Klimas ist das Vitim-Plateau dünn besiedelt und bietet Lebensraum für typische sibirische Wildtiere wie Elche und Bären.",
      hu: "A Vitim-fennsík egy kiterjedt felföld Oroszország ázsiai részén, Burjátföld és a Bajkálontúli határterület határán. A tájat 1200 és 1600 méter közötti átlagmagasságú, hullámos domborzat jellemzi, amelyet a harmadidőszaki vulkáni tevékenység formált egyedivé. A fennsíkon ma is számos kialudt vulkáni kúp és kiterjedt bazaltmező tanúskodik a földtörténeti múlt aktivitásáról. A területen állandóan fagyott talaj (permafrost) található, ami gátolja a víz beszivárgását, így sok mocsár és sekély tó jött létre. A növényzetet főként ritkás vörösfenyő-erdők alkotják, amelyek jól bírják a szélsőséges szibériai teleket. A Lena egyik legnagyobb mellékfolyója, a Vitim a közelben ered, és mély völgyeket vágott a fennsík peremébe. A ritkán lakott vidék gazdag ásványkincsekben, de a zord körülmények miatt az emberi jelenlét korlátozott, megőrizve a természet eredeti, vad állapotát.",
      ro: "Podișul Vitim este o vastă regiune montană situată în estul Republicii Bureatia și în regiunea Transbaikal, reprezentând un element cheie al reliefului Siberiei Orientale. Acesta se remarcă printr-un relief vălurit cu altitudini medii cuprinse între 1.200 și 1.600 de metri, modelat în mare parte de activitatea vulcanică din era cenozoică. Peisajul este punctat de conuri vulcanice stinse și platouri de bazalt, care îi conferă un aspect selenar în anumite zone. Prezența permafrostului determină o drenare deficitară a apei, ducând la formarea numeroaselor mlaștini și lacuri de mici dimensiuni în depresiuni. Flora este dominată de taigaua de zâmbru și mesteacăn, adaptată la iernile extrem de lungi și geroase. Fluviul Vitim, unul dintre cei mai mari afluenți ai Lenei, își trage izvoarele din această regiune, tăind defilee adânci în marginile podișului. Fiind o zonă greu accesibilă, Podișul Vitim a rămas un refugiu pentru fauna sălbatică siberiană, fiind foarte puțin afectat de activitățile industriale umane.",
      en: "The Vitim Plateau is an extensive upland region located in eastern Buryatia and the Transbaikal Territory of Russia. It is characterized by a rolling landscape with average elevations between 1,200 and 1,600 meters, uniquely shaped by Cenozoic volcanic activity. The plateau features numerous extinct volcanic cones and vast basalt fields that testify to its active geological past. Continuous permafrost underlies much of the area, impeding water drainage and resulting in a high density of marshes and shallow lakes in its depressions. The dominant vegetation is larch-dominated taiga, which is well-suited to the region's extreme temperature fluctuations and poor soil quality. The Vitim River, a major tributary of the Lena, originates near the plateau and has carved deep, scenic valleys along its periphery. Due to its remoteness and harsh subarctic climate, the Vitim Plateau remains sparsely populated, preserving a pristine environment for Siberian wildlife such as moose, brown bears, and lynx.",
      es: "La meseta de Vitim es una altiplanicie en el sur de Siberia oriental, al este del lago Baikal. Se encuentra a una altitud de 800–1.200 m y abarca unos 200.000 km². La meseta se asienta sobre rocas cristalinas del Precámbrico y está surcada por montañas y valles profundamente encajados. Los ríos más importantes son el Vitim y sus afluentes. El área está densamente boscosa, principalmente con alerces y pinos. El clima es extremadamente continental, con inviernos muy fríos (media de -30 °C) y veranos suaves (+15 °C). La densidad de población es extremadamente baja y la economía se basa en la minería (oro, uranio) y la silvicultura. La meseta se encuentra en la zona horaria de Irkutsk (UTC+8).",
      pt: "O planalto de Vitim é uma zona de terras altas no sul da Sibéria Oriental, a leste do Lago Baikal. Situa-se a uma altitude de 800–1.200 m e estende-se por cerca de 200.000 km². O planalto assenta sobre rochas cristalinas do Pré-Câmbrico e é atravessado por montanhas e vales profundamente entalhados. Os rios mais importantes são o Vitim e os seus afluentes. A área é densamente arborizada, principalmente com lariços e pinheiros. O clima é extremamente continental com invernos muito frios (média de -30 °C) e verões suaves (+15 °C). A densidade populacional é extremamente baixa e a economia baseia-se na mineração (ouro, urânio) e silvicultura. O planalto está no fuso horário de Irkutsk (UTC+8).",
      fr: "Le plateau de Vitim est un haut plateau du sud de la Sibérie orientale, à l'est du lac Baïkal. Il se situe à une altitude comprise entre 800 et 1 200 m et s'étend sur environ 200 000 km². Le plateau repose sur des roches cristallines du Précambrien et est parcouru de montagnes et de vallées profondément encaissées. Les rivières les plus importantes sont le Vitim et ses affluents. La région est fortement boisée, principalement de mélèzes et de pins. Le climat y est extrêmement continental avec des hivers très froids (moyenne de -30 °C) et des étés doux (+15 °C). La densité de population y est extrêmement faible et l'économie repose sur l'exploitation minière (or, uranium) et forestière. Le plateau se trouve dans le fuseau horaire d'Irkoutsk (UTC+8).",
    },
    factsAdvanced: {
      de: ["Die durchschnittliche Höhe des Plateaus liegt zwischen 1.200 und 1.600 Metern.", "Auf dem Plateau befinden sich etwa 15 größere, erloschene Vulkankegel.", "Die Region ist durchgehend von mächtigem Permafrost unterlegt.", "Der Vitim-Fluss entspringt am Zusammenfluss von Witimkan und Tschina.", "Das Plateau erstreckt sich über eine Fläche von rund 60.000 km².", "Im Winter können die Temperaturen regelmäßig unter -45 Grad Celsius fallen."],
      hu: ["A fennsík átlagmagassága a tengerszint felett 1200 és 1600 méter között van.", "A területen legalább 15 jelentősebb kialudt vulkáni kúpot azonosítottak.", "A talaj állandó fagyottsága helyenként a több száz méteres mélységet is eléri.", "A Vitim folyó a fennsík északi peremén vágja át magát a hegyeken.", "A fennsík teljes kiterjedése körülbelül 60 000 négyzetkilométer.", "A téli hónapokban a hőmérséklet gyakran süllyed -45 Celsius-fok alá."],
      ro: ["Altitudinea medie a podișului variază între 1.200 și 1.600 de metri.", "Există peste 15 conuri vulcanice cenozoice bine conservate pe platou.", "Stratul de permafrost din această regiune este continuu și foarte profund.", "Fluviul Vitim este principala arteră hidrografică ce drenează marginea podișului.", "Suprafața totală a podișului este de aproximativ 60.000 de kilometri pătrați.", "Temperaturile minime în timpul iernii pot atinge pragul de -50 de grade Celsius."],
      en: ["The average elevation of the plateau ranges from 1,200 to 1,600 meters.", "At least 15 extinct Cenozoic volcanic cones are identified on the plateau.", "The region is characterized by thick, continuous permafrost layers.", "The Vitim River forms deep canyons as it exits the plateau to the north.", "The total area of the Vitim Plateau is approximately 60,000 square kilometers.", "Winter temperatures frequently drop below -45 degrees Celsius in the region."],
      es: ["La meseta de Vitim cubre una superficie de unos 200.000 km².", "Las altitudes oscilan entre los 800 y 1.200 m.", "La temperatura media en enero es de -30 °C y en julio de +15 °C.", "El río Vitim tiene unos 1.837 km de longitud.", "La región cuenta con importantes yacimientos de oro que producen varias toneladas anuales.", "La densidad de población es inferior a 1 habitante por km²."],
      pt: ["O planalto de Vitim cobre uma área de cerca de 200.000 km².", "As altitudes situam-se entre 800 e 1.200 m.", "A temperatura média em janeiro é de -30 °C e em julho de +15 °C.", "O rio Vitim tem cerca de 1.837 km de comprimento.", "A região possui depósitos de ouro significativos, produzindo várias toneladas anualmente.", "A densidade populacional é inferior a 1 habitante por km²."],
      fr: ["Le plateau de Vitim couvre une superficie d'environ 200 000 km².", "Les altitudes varient entre 800 et 1 200 m.", "La température moyenne en janvier est de -30 °C, en juillet de +15 °C.", "La rivière Vitim mesure environ 1 837 km de long.", "La région dispose d'importants gisements d'or produisant plusieurs tonnes par an.", "La densité de population est inférieure à 1 habitant par km²."],
    },
    image: "/poi-images/russia-vitim-plateau-relief-v2.webp",
  },
  {
    id: "russia-turgai-hollow-relief-v2",
    type: "valley",
    parent: "RU",
    name: { de: "Turgai-Senke", hu: "Turgaji-mélyföld", ro: "Depresiunea Turgai", en: "Turgai Hollow" },
    coords: [63.0, 52.0],
    description: {
      de: "Die Turgai-Senke ist eine weite, flache Rinne, die sich von Sibirien bis nach Kasachstan erstreckt. Sie bildet ein wichtiges geografisches Bindeglied.",
      hu: "A Turgaji-mélyföld egy széles, lapos árok, amely Szibériától Kazahsztánig húzódik. Fontos földrajzi összekötő kapocs.",
      ro: "Depresiunea Turgai este o vale largă și plată care se întinde din Siberia până în Kazahstan. Formează o verigă geografică importantă.",
      en: "The Turgai Hollow is a wide, flat trough extending from Siberia into Kazakhstan. It forms an important geographical link.",
      es: "La depresión de Turgai es un canal ancho y poco profundo que se extiende desde Siberia hasta Kazajistán. Constituye un importante vínculo geográfico.",
      pt: "A depressão de Turgai é um canal largo e raso que se estende da Sibéria até o Cazaquistão. Constitui um importante elo geográfico.",
      fr: "La dépression de Tourgaï est un large chenal plat s'étendant de la Sibérie jusqu'au Kazakhstan. Elle constitue un lien géographique important.",
    },
    facts: {
      de: ["Einstige Verbindung zwischen Ozeanen", "Länge etwa 800 Kilometer", "Teilweise in Russland und Kasachstan", "Trockenes Klima"],
      hu: ["Egykori összeköttetés az óceánok között", "Hossza kb. 800 kilométer", "Részben Oroszországban és Kazahsztánban", "Száraz éghajlat"],
      ro: ["Fostă legătură între oceane", "Lungime de circa 800 kilometri", "Parțial în Rusia și Kazahstan", "Climat arid"],
      en: ["Former connection between oceans", "Length about 800 kilometers", "Partly in Russia and Kazakhstan", "Arid climate"],
      es: ["Antigua conexión entre océanos", "Longitud aproximada de 800 kilómetros", "Situada en Rusia y Kazajistán", "Clima seco"],
      pt: ["Antiga ligação entre oceanos", "Comprimento de cerca de 800 quilómetros", "Parcialmente na Rússia e no Cazaquistão", "Clima seco"],
      fr: ["Ancienne connexion entre les océans", "Longueur d'environ 800 kilomètres", "Située en Russie et au Kazakhstan", "Climat sec"],
    },
    imageHint: "Turgai steppe landscape",
    descriptionAdvanced: {
      de: "Die Turgai-Senke ist eine markante geologische Erosionsrinne, die sich über 800 Kilometer in nordsüdlicher Richtung erstreckt und das Westsibirische Tiefland mit der Turan-Niederung verbindet. Dieses Relikt einer urzeitlichen Wasserstraße entstand vermutlich während der Eiszeiten durch den Abfluss riesiger Schmelzwasserseen. Das Relief ist durch einen breiten, flachen Talboden geprägt, der von 100 bis 200 Meter hohen Plateaus flankiert wird. Heute fließen nur noch kleine Flüsse wie der Turgai und der Ubagan durch die Senke, die oft in Ketten von Salz- und Süßwasserseen enden. Das Klima ist extrem kontinental und trocken, was zur Bildung von ausgedehnten Steppen und im Süden zu Halbwüstenzonen führt. Die Turgai-Senke dient als wichtige Migrationsroute für Vögel und die bedrohte Saiga-Antilope. Geologisch ist sie auch als Lagerstätte für Erze und Kohle von Bedeutung, während ihre landwirtschaftliche Nutzung aufgrund der Trockenheit auf die Viehzucht beschränkt ist.",
      hu: "A Turgaj-kapu egy hatalmas, mintegy 800 kilométer hosszú eróziós árok, amely összeköti a Nyugat-szibériai-alföldet a Turáni-alfölddel. Ez a különleges földrajzi folyosó egy ősi vízi út maradványa, amely a jégkorszakok idején a hatalmas glaciális tavak lefolyását biztosította. A tájat széles, lapos völgytalp jellemzi, amelyet mindkét oldalról 100-200 méter magas fennsíkok határolnak. Napjainkban a terület vízhálózata gyér, a Turgaj és az Ubagan folyók vize gyakran sós tavakba vész a száraz klíma miatt. A növényzetet főként sztyeppe és félsivatag alkotja, amely fontos életteret biztosít a ritka szajga-antilopok és számos vándormadár számára. Gazdaságilag a térség jelentős vasérc- és szénlelőhelyekkel rendelkezik, de a mezőgazdaság a vízhiány miatt csak korlátozottan, legeltetés formájában lehetséges. A Turgaj-kapu a természetes útvonalat jelenti az északi tajga és a déli sivatagok között.",
      ro: "Depresiunea Turgai este un culoar eroziunale vast, cu o lungime de circa 800 de kilometri, care face legătura între Câmpia Siberiei de Vest și Câmpia Turanului. Această structură geologică unică este considerată relicva unei vechi căi navigabile ce unea oceanele în perioadele geologice trecute sau care asigura drenajul lacurilor glaciare gigantice. Relieful se prezintă sub forma unei văi largi, cu fundul plat, mărginită de versanți de podiș ce se ridică până la 200 de metri înălțime. În prezent, depresiunea este străbătută de râuri cu debit redus, precum Turgai și Ubagan, care alimentează numeroase lacuri cu apă dulce sau sărată. Climatul arid a favorizat dezvoltarea ecosistemelor de stepă și semideșert, regiunea fiind un coridor vital pentru migrația antilopelor Saiga și a păsărilor acvatice. Din punct de vedere economic, zona este cunoscută pentru zăcămintele sale de minereu de fier și cărbune brun, deși densitatea populației rămâne foarte scăzută din cauza condițiilor de mediu dificile.",
      en: "The Turgai Hollow is a prominent geological erosion channel stretching approximately 800 kilometers from north to south, connecting the West Siberian Plain with the Turan Lowland. This feature is widely regarded as a remnant of an ancient waterway that likely facilitated the drainage of massive glacial lakes during the Pleistocene epochs. The relief is characterized by a broad, flat valley floor, reaching widths of up to 300 kilometers, flanked by plateaus rising 100 to 200 meters above the valley. Today, the hollow is traversed by sluggish rivers like the Turgai and Ubagan, which often drain into chains of saline and freshwater lakes. The semi-arid continental climate supports a landscape of steppes and semi-deserts, serving as a critical migration corridor for the endangered Saiga antelope and various migratory birds. Geologically, the region is noted for its significant deposits of iron ore and coal, though its agricultural utility is limited by low precipitation to seasonal livestock grazing.",
      es: "El paso de Turgai es una depresión de unos 600 km de longitud situada en el noroeste de Kazajistán y el suroeste de Rusia, que conecta los Urales con el mar de Aral. Su anchura varía entre 20 y 200 km, con altitudes que oscilan mayoritariamente entre los 100 y 200 m. Formada durante los periodos Jurásico y Cretácico, la depresión está rellena de sedimentos mesozoicos y cenozoicos. Antiguamente, el río Turgai fluía por este paso, que hoy está en gran parte seco. El hondonada es una importante barrera biogeográfica y ruta de migración para los animales de la estepa. La vegetación es típica de las estepas secas con gramíneas y ajenjo. El clima es continental, con veranos calurosos e inviernos fríos, y la región se utiliza para la ganadería extensiva.",
      pt: "O passo de Turgai é uma depressão de cerca de 600 km de comprimento no noroeste do Cazaquistão e sudoeste da Rússia, conectando os Urais ao Mar de Aral. A largura varia entre 20 e 200 km, com altitudes situadas maioritariamente entre 100 e 200 m. A depressão surgiu durante os períodos Jurássico e Cretáceo e está preenchida com sedimentos mesozoicos e cenozoicos. Antigamente, o rio Turgai corria pelo passo, mas hoje está amplamente seco. O local é uma importante barreira biogeográfica e rota de migração para animais das estepes. A vegetação é típica de estepes secas com gramíneas e losna. O clima é continental com verões quentes e invernos frios, sendo a região utilizada para a pecuária extensiva.",
      fr: "Le couloir de Tourgaï est une dépression d'environ 600 km de long située au nord-ouest du Kazakhstan et au sud-ouest de la Russie, reliant l'Oural à la mer d'Aral. Sa largeur varie entre 20 et 200 km et son altitude se situe généralement entre 100 et 200 m. La dépression s'est formée au cours du Jurassique et du Crétacé et est remplie de sédiments mésozoïques et cénozoïques. Autrefois, la rivière Tourgaï traversait ce passage, qui est aujourd'hui en grande partie sec. Le couloir est une barrière biogéographique majeure et une route de migration pour les animaux de la steppe. La végétation est typique des steppes sèches avec des graminées et de l'armoise. Le climat est continental avec des étés chauds et des hivers froids, et la région est exploitée pour l'élevage extensif.",
    },
    factsAdvanced: {
      de: ["Die Turgai-Senke hat eine Gesamtlänge von etwa 800 Kilometern.", "Die Breite der Senke variiert zwischen 20 und 300 Kilometern.", "Der tiefste Punkt der Talsohle liegt etwa 100-125 Meter über dem Meer.", "Während der Eiszeit floss hier Schmelzwasser vom Ob-Becken nach Süden.", "Die Region beherbergt eines der größten Rückzugsgebiete der Saiga-Antilope.", "Die Senke bildet eine natürliche Grenze zwischen dem Ural und der Kasachischen Schwelle."],
      hu: ["A Turgaj-kapu hossza észak-déli irányban megközelítőleg 800 kilométer.", "A völgy szélessége a legszélesebb pontján eléri a 300 kilométert.", "A völgytalp tengerszint feletti magassága jellemzően 100 és 125 méter közötti.", "Az ősi folyómeder egykor az északi vizeket vezette le a Kaszpi-tenger felé.", "Ez a terület a kritikusan veszélyeztetett szajga-antilop egyik fő élőhelye.", "A mélyedés geológiailag elválasztja az Urál-hegységet a Kazah-hátságtól."],
      ro: ["Depresiunea Turgai are o lungime totală de aproximativ 800 de kilometri.", "Lățimea culoarului variază considerabil, atingând un maximum de 300 km.", "Altitudinea fundului depresiunii este cuprinsă între 100 și 125 de metri.", "În pleistocen, apele fluviului Obi au fost deviate spre sud prin acest culoar.", "Regiunea este un punct cheie pentru conservarea antilopei Saiga din Kazahstan.", "Geografic, depresiunea separă Munții Ural de Podișul Kazah (Sariarka)."],
      en: ["The Turgai Hollow extends for a total distance of about 800 kilometers.", "The width of the hollow varies from 20 to a maximum of 300 kilometers.", "The valley floor lies at an average elevation of 100 to 125 meters.", "During glacial periods, it served as a spillway for the Arctic-flowing rivers.", "The hollow is a major habitat and migration route for the Saiga antelope.", "Geologically, it acts as a boundary between the Urals and the Kazakh Upland."],
      es: ["El paso de Turgai tiene unos 600 km de largo.", "La anchura varía entre 20 y 200 km.", "La altitud se sitúa mayoritariamente entre 100 y 200 m.", "El relleno sedimentario alcanza espesores de hasta 2.000 m.", "Las precipitaciones anuales son de solo 200–300 mm.", "La temperatura media en julio es de +24 °C y en enero de -14 °C."],
      pt: ["O passo de Turgai tem cerca de 600 km de comprimento.", "A largura varia entre 20 e 200 km.", "A altitude situa-se maioritariamente entre 100 e 200 m.", "O preenchimento sedimentar atinge espessuras de até 2.000 m.", "A precipitação anual é de apenas 200–300 mm.", "A temperatura média em julho é de +24 °C e em janeiro de -14 °C."],
      fr: ["Le couloir de Tourgaï est long d'environ 600 km.", "La largeur varie de 20 à 200 km.", "L'altitude se situe principalement entre 100 et 200 m.", "Le remplissage sédimentaire atteint des épaisseurs allant jusqu'à 2 000 m.", "Les précipitations annuelles ne sont que de 200 à 300 mm.", "La température moyenne en juillet est de +24 °C, en janvier de -14 °C."],
    },
    image: "/poi-images/russia-turgai-hollow-relief-v2.webp",
  },
  {
    id: "russia-kolyma-lowland-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Kolyma-Tiefland", hu: "Kolima-alföld", ro: "Câmpia Kolîma", en: "Kolyma Lowland" },
    coords: [158.0, 68.5],
    description: {
      de: "Das Kolyma-Tiefland erstreckt sich im Nordosten Sibiriens zwischen dem Kolyma- und dem Alaseja-Fluss. Die Region ist von starkem Permafrost geprägt.",
      hu: "A Kolima-alföld Északkelet-Szibériában húzódik a Kolima és az Alazeja folyók között. A régiót erős permafroszt jellemzi.",
      ro: "Câmpia Kolîma se întinde în nord-estul Siberiei între râurile Kolîma și Alazeia. Regiunea este marcată de un permafrost puternic.",
      en: "The Kolyma Lowland extends across Northeastern Siberia between the Kolyma and Alazeya rivers. The region is characterized by severe permafrost.",
      es: "Las tierras bajas de Kolymá se extienden en el noreste de Siberia, entre los ríos Kolymá y Alaseya. La región está marcada por un fuerte permafrost.",
      pt: "As terras baixas de Kolyma estendem-se no nordeste da Sibéria, entre os rios Kolyma e Alaseya. A região é marcada por um forte permafrost.",
      fr: "Les basses terres de la Kolyma s'étendent au nord-est de la Sibérie, entre les fleuves Kolyma et Alaseïa. La région est marquée par un pergélisol important.",
    },
    facts: {
      de: ["Teil der ostsibirischen Tiefebene", "Zahlreiche Seen und Sümpfe", "Extrem arktisches Klima", "Wichtige Tundreregion"],
      hu: ["A Kelet-szibériai-alföld része", "Számos tó és mocsár", "Szélsőségesen arktikus éghajlat", "Fontos tundra régió"],
      ro: ["Parte din Câmpia Siberiei de Est", "Numeroase lacuri și mlaștini", "Climat extrem de arctic", "Regiune importantă de tundră"],
      en: ["Part of the East Siberian Lowland", "Numerous lakes and swamps", "Extremely arctic climate", "Important tundra region"],
      es: ["Parte de la llanura de Siberia Oriental", "Numerosos lagos y pantanos", "Clima ártico extremo", "Importante región de tundra"],
      pt: ["Parte da planície da Sibéria Oriental", "Numerosos lagos e pântanos", "Clima ártico extremo", "Importante região de tundra"],
      fr: ["Fait partie de la plaine de Sibérie orientale", "Nombreux lacs et marécages", "Climat arctique extrême", "Région importante de toundra"],
    },
    imageHint: "Kolyma lowland tundra",
    descriptionAdvanced: {
      de: "Das Kolyma-Tiefland ist eine weite, sumpfige Ebene im Nordosten Sibiriens, die sich über rund 170.000 Quadratkilometer erstreckt und vom Fluss Kolyma sowie seinen Nebenflüssen entwässert wird. Das Relief ist extrem flach und wird durch kryogene Prozesse geprägt, die zur Bildung von Thermokarstseen, Palsas und Eiskeilen führen. Da die Region fast vollständig über mächtigem Permafrost liegt, kann das Wasser im kurzen Sommer nicht versickern, was zu einer massiven Versumpfung der Landschaft führt. Die Vegetation besteht überwiegend aus Tundra im Norden und lichten Taigawäldern im Süden, die an die harten arktischen Bedingungen angepasst sind. Geologisch ist das Tiefland bekannt für seine quartären Ablagerungen, in denen regelmäßig gut erhaltene Skelette von Mammuts und anderen eiszeitlichen Tieren gefunden werden. Historisch ist der Name Kolyma auch untrennbar mit den Arbeitslagern der Sowjetzeit verbunden, doch geografisch bleibt es eine der abgelegensten und naturbelassensten Regionen Russlands.",
      hu: "A Kolima-alföld egy hatalmas, mocsaras síkság Oroszország északkeleti részén, Jakutföld területén, amelyet a Kolima folyó és mellékfolyói hálóznak be. A mintegy 170 000 négyzetkilométeres terület domborzata rendkívül lapos, a tájat a fagy okozta felszínformák, például termokarsztos tavak és jégékek határozzák meg. A talaj mélyebb rétegei egész évben fagyottak (permafrost), ami megakadályozza a víz elszivárgását, így a rövid nyár során a vidék egyetlen végtelen mocsárrá válik. Az északi részeket zuzmós-mohás tundra, a délebbi területeket ritkás tajgaerdő borítja. A régió tudományos jelentőségét a jégkorszaki leletek adják: a fagyott talajból számos kiváló állapotú mamutlelet és más pleisztocén kori állatmaradvány került elő. Bár a név a történelemben a kényszermunkatáborok emlékével forrt össze, földrajzilag ez a Föld egyik legérintetlenebb és legzordabb sarkvidéki ökoszisztémája.",
      ro: "Câmpia Kolîma este o vastă zonă depresionară situată în nord-estul Siberiei, în Republica Saha (Iacutia), fiind drenată de cursul inferior al fluviului Kolîma. Întinzându-se pe aproximativ 170.000 km², relieful este unul extrem de plat, dominat de fenomene criogenice specifice zonelor cu permafrost continuu. Peisajul este presărat cu mii de lacuri de termocarst și mlaștini, deoarece solul înghețat împiedică infiltrarea apei în timpul scurtei veri polare. Vegetația trece treptat de la tundra arctică în nord la taigaua rară de zâmbrul siberian spre sud, fiind adaptată la temperaturi ce scad frecvent sub -50 de grade Celsius. Regiunea este un veritabil cimitir paleontologic, depozitele de loess și gheață conservând rămășițe de mamuți și rinoceri lânoși din epoca pleistocenului. Dincolo de istoria sa tragică legată de sistemul GULAG, Câmpia Kolîma rămâne un spațiu al extremelor naturale, unde ecosistemele arctice se păstrează într-o stare de izolare aproape totală.",
      en: "The Kolyma Lowland is a vast, swampy plain in northeastern Siberia, covering approximately 170,000 square kilometers within the Republic of Sakha (Yakutia). Drained by the Kolyma River and its many tributaries, the relief is exceptionally flat and dominated by periglacial features such as thermokarst lakes, ice wedges, and hummocky terrain. The presence of continuous, deep permafrost prevents surface water from draining, leading to extensive waterlogging during the brief Arctic summer. The vegetation transitions from moss-and-lichen tundra in the north to sparse larch taiga in the south, surviving in one of the world's harshest climates. Geologically, the lowland's frozen sediments are famous for preserving remarkably intact Pleistocene fossils, including mammoths and woolly rhinoceroses. While the name Kolyma is historically linked to the Soviet-era labor camps, geographically it remains one of Russia's most remote and pristine wilderness areas, untouched by modern industrialization.",
      es: "La llanura de Kolymá es una vasta zona baja en el noreste de Siberia, situada entre las montañas de Kolymá al oeste y la costa del océano Ártico al este. Se extiende aproximadamente 1.000 km en dirección norte-sur y unos 600 km en dirección este-oeste. Las altitudes suelen ser inferiores a 100 m y gran parte del área es pantanosa. El terreno consiste en depósitos cuaternarios que descansan sobre suelo de permafrost. Los ríos más importantes son el Kolymá y sus afluentes. La vegetación es la tundra típica con musgos, líquenes y arbustos enanos. El clima es ártico continental con inviernos muy fríos (-30 °C a -40 °C) y veranos cortos y frescos (+10 °C). La población es muy escasa, compuesta principalmente por grupos indígenas como los chukchis y los evenos.",
      pt: "A planície de Kolyma é uma vasta zona baixa no nordeste da Sibéria, situada entre as montanhas de Kolyma a oeste e a costa do oceano Ártico a leste. Estende-se por aproximadamente 1.000 km na direção norte-sul e cerca de 600 km na direção leste-oeste. As altitudes são geralmente inferiores a 100 m e grande parte da área é pantanosa. O terreno consiste em depósitos quaternários que repousam sobre solo de permafrost. Os rios mais importantes são o Kolyma e os seus afluentes. A vegetação é a tundra típica com musgos, líquenes e arbustos anões. O clima é ártico continental com invernos muito frios (-30 °C a -40 °C) e verões curtos e frescos (+10 °C). A população é muito escassa, composta principalmente por grupos indígenas como os chukchis e os evenos.",
      fr: "La dépression de la Kolyma est une vaste plaine du nord-est de la Sibérie, située entre les monts de la Kolyma à l'ouest et la côte de l'océan Arctique à l'est. Elle s'étend sur environ 1 000 km du nord au sud et environ 600 km d'est en ouest. Les altitudes sont généralement inférieures à 100 m et de vastes zones sont marécageuses. Le territoire est constitué de dépôts quaternaires reposant sur un sol de pergélisol. Les principaux fleuves sont la Kolyma et ses affluents. La végétation est une toundra typique composée de mousses, de lichens et d'arbustes nains. Le climat est arctique continental avec des hivers très froids (-30 °C à -40 °C) et des étés courts et frais (+10 °C). La population est très faible, principalement des groupes indigènes tels que les Tchouktches et les Évènes.",
    },
    factsAdvanced: {
      de: ["Die Kolyma-Tiefebene umfasst eine Fläche von etwa 170.000 km².", "Der Permafrost erreicht hier Tiefen von mehreren hundert Metern.", "Es gibt tausende von Thermokarstseen, die durch auftauendes Bodeneis entstehen.", "Die mittlere Januartemperatur liegt in der Region bei etwa -40 Grad Celsius.", "In den Sedimenten wurde das berühmte Mammutkalb 'Dima' im Jahr 1977 gefunden.", "Das Tiefland liegt fast vollständig nördlich des Polarkreises."],
      hu: ["A Kolima-alföld kiterjedése megközelítőleg 170 000 négyzetkilométer.", "A területen a permafrost réteg vastagsága a 400-600 métert is elérheti.", "A tájat több ezer sekély tó borítja, melyek az altalaj jegének olvadásakor keletkeznek.", "A januári középhőmérséklet -38 és -40 Celsius-fok között alakul.", "1977-ben itt találták meg a világhírű, épségben maradt 'Gyima' nevű mamutbébit.", "A síkság szinte teljes területe az északi sarkkörön túl fekszik."],
      ro: ["Câmpia Kolîma se întinde pe o suprafață de circa 170.000 km².", "Stratul de permafrost poate atinge adâncimi de peste 500 de metri.", "Regiunea conține mii de lacuri mici formate prin procese de termocarst.", "Temperaturile medii în luna ianuarie sunt de aproximativ -40 de grade Celsius.", "Puiul de mamut 'Dima', descoperit în 1977, provine din această regiune.", "Aproape întreaga câmpie este situată la nord de Cercul Polar de Nord."],
      en: ["The Kolyma Lowland covers a total area of approximately 170,000 km².", "Permafrost in this region can reach depths of several hundred meters.", "Thousands of thermokarst lakes dot the landscape due to melting ground ice.", "The average January temperature in the lowland is around -40 degrees Celsius.", "The famous baby mammoth 'Dima' was discovered here in 1977.", "The entire lowland is situated almost exclusively north of the Arctic Circle."],
      es: ["La llanura de Kolymá se extiende unos 1.000 km de norte a sur.", "Su anchura alcanza hasta los 600 km.", "El punto más bajo está cerca del nivel del mar.", "El permafrost alcanza una profundidad de hasta 500 m.", "La precipitación anual es inferior a 300 mm.", "El río Kolymá tiene una longitud de unos 2.129 km."],
      pt: ["A planície de Kolyma estende-se por cerca de 1.000 km de norte a sul.", "A sua largura chega aos 600 km.", "O ponto mais baixo está perto do nível do mar.", "O permafrost atinge uma profundidade de até 500 m.", "A precipitação anual é inferior a 300 mm.", "O rio Kolyma tem cerca de 2.129 km de comprimento."],
      fr: ["La dépression de la Kolyma s'étend sur environ 1 000 km du nord au sud.", "Sa largeur peut atteindre 600 km.", "Le point le plus bas se situe près du niveau de la mer.", "Le pergélisol atteint une profondeur allant jusqu'à 500 m.", "Les précipitations annuelles sont inférieures à 300 mm.", "La Kolyma est longue d'environ 2 129 km."],
    },
    image: "/poi-images/russia-kolyma-lowland-relief-v2.webp",
  },
  {
    id: "russia-yamal-peninsula-relief-v2",
    type: "landmark",
    parent: "RU",
    name: { de: "Jamal-Halbinsel", hu: "Jamal-félsziget", ro: "Peninsula Iamal", en: "Yamal Peninsula" },
    coords: [70.0, 70.0],
    description: {
      de: "Die Jamal-Halbinsel ist eine flache, arktische Landzunge in Westsibirien. Sie ist bekannt für ihre weiten Tundraflächen und bedeutenden Erdgasvorkommen.",
      hu: "A Jamal-félsziget egy lapos, arktikus földnyelv Nyugat-Szibériában. Ismert kiterjedt tundráiról és jelentős földgázkészleteiről.",
      ro: "Peninsula Iamal este o limbă de pământ plată și arctică din Siberia de Vest. Este cunoscută pentru suprafețele sale vaste de tundră și resursele importante de gaze naturale.",
      en: "The Yamal Peninsula is a flat, arctic landmass in Western Siberia. It is known for its vast tundra plains and significant natural gas deposits.",
      es: "La península de Yamal es una lengua de tierra ártica y llana en Siberia occidental. Es conocida por sus extensas áreas de tundra e importantes yacimientos de gas natural.",
      pt: "A península de Yamal é uma língua de terra ártica e plana na Sibéria Ocidental. É conhecida pelas suas vastas áreas de tundra e importantes reservas de gás natural.",
      fr: "La péninsule de Yamal est une langue de terre arctique et plate située au nord de la Sibérie occidentale. Elle est réputée pour ses vastes étendues de toundra et ses gisements de gaz naturel.",
    },
    facts: {
      de: ["Bedeutet 'Ende der Welt' auf Nenzisch", "Wichtiges Gasfördergebiet", "Permafrostboden", "Flaches Relief"],
      hu: ["Nenyec nyelven 'a világ vége'", "Fontos gázkitermelő terület", "Permafroszt talaj", "Lapos felszín"],
      ro: ["Înseamnă 'capătul lumii' în limba neneț", "Regiune importantă de extracție a gazelor", "Sol permafrost", "Relief plat"],
      en: ["Means 'end of the world' in Nenets", "Important gas production area", "Permafrost soil", "Flat relief"],
      es: ["Significa 'fin del mundo' en lengua nénets", "Importante zona de extracción de gas", "Suelo de permafrost", "Relieve llano"],
      pt: ["Significa 'fim do mundo' em língua nénets", "Importante área de extração de gás", "Solo de permafrost", "Relevo plano"],
      fr: ["Signifie « fin du monde » en langue nénètse", "Importante zone de production de gaz", "Sol de pergélisol", "Relief plat"],
    },
    imageHint: "Yamal peninsula tundra landscape",
    descriptionAdvanced: {
      de: "Die Jamal-Halbinsel liegt im Nordwesten Sibiriens und erstreckt sich etwa 700 Kilometer weit in die Karasee. Der Name 'Jamal' bedeutet in der Sprache der indigenen Nenzen 'Ende der Welt', was die extreme Lage und Abgeschiedenheit dieser arktischen Region widerspiegelt. Das Relief der Halbinsel ist durch eine sehr flache Tundra-Landschaft geprägt, die fast vollständig von Permafrost unterlegt ist und im Sommer in eine endlose Seen- und Sumpflandschaft übergeht. Jamal ist von globaler Bedeutung, da es eines der größten Erdgasvorkommen der Welt beherbergt, darunter das gigantische Bowanenkowo-Feld. Gleichzeitig ist die Halbinsel das wichtigste Zentrum für die traditionelle Rentierzucht der Nenzen, die hier mit über 300.000 Tieren eine der letzten nomadischen Kulturen der Arktis pflegen. In den letzten Jahren erregte die Region Aufmerksamkeit durch die Entstehung mysteriöser Methankrater, die auf das Auftauen des Permafrosts zurückgeführt werden. Jamal ist somit ein Ort extremer Gegensätze zwischen archaischer Naturvölker-Tradition und modernster industrieller Energieförderung.",
      hu: "A Jamal-félsziget Oroszország északnyugati részén található, mintegy 700 kilométer hosszan nyúlik be a Kara-tengerbe. A név a nyenyec nyelven annyit tesz: 'a világ vége', ami hűen tükrözi a térség távoli és zord jellegét. A domborzat rendkívül lapos, a tájat végtelen tundra borítja, amelyet nyaranta mocsarak és több ezer apró tó tesz szinte járhatatlanná. A félsziget alatt húzódik a Föld egyik legnagyobb földgázkészlete, amelynek kitermelése kulcsfontosságú Oroszország gazdasága számára. Ezzel párhuzamosan Jamal a hagyományos nyenyec rénszarvastartás központja is; a nomád pásztorok több mint 300 000 állatot terelnek a vidéken, megőrizve ősi életmódjukat. Az utóbbi években a félsziget a globális felmelegedés kutatásának fókuszába került a permafrost olvadása miatt keletkező hatalmas gázkitörési kráterek miatt. A terület a modern ipar és az érintetlen sarkvidéki vadon törékeny egyensúlyának egyik leglátványosabb helyszíne.",
      ro: "Peninsula Yamal este situată în nord-vestul Siberiei, întinzându-se pe circa 700 de kilometri între Golful Obi și Marea Kara. Denumirea sa provine din limba nenețiană și se traduce prin 'capătul pământului', descriind perfect izolarea acestei regiuni arctice. Relieful este unul de câmpie joasă, dominat de o tundră vastă și presărat cu mii de lacuri glaciare și mlaștini cauzate de permafrostul persistent. Yamal este de o importanță strategică globală, adăpostind unele dintre cele mai mari rezerve de gaze naturale de pe planetă, precum zăcământul Bovanenkovo. În ciuda exploatărilor industriale masive, peninsula rămâne inima culturii neneților, care practică aici transhumanța cu peste 300.000 de reni, reprezentând cea mai mare comunitate pastorală nomadă din lume. Recent, regiunea a devenit subiect de studiu intens din cauza apariției unor cratere gigantice formate prin explozia gazului metan acumulat sub permafrostul care se topește. Yamal simbolizează astăzi frontiera fragilă dintre nevoile energetice ale civilizației și conservarea modului de viață ancestral în condiții climatice extreme.",
      en: "The Yamal Peninsula is located in northwestern Siberia, stretching approximately 700 kilometers into the Kara Sea. Its name translates from the indigenous Nenets language as 'End of the Land,' reflecting its extreme geographic position and isolation. The relief of the peninsula is characterized by a very low-lying tundra landscape, heavily marked by permafrost and transformed into a mosaic of thousands of lakes and marshes during the brief summer thaw. Yamal is globally significant for housing some of the Earth's largest natural gas reserves, including the massive Bovanenkovo field, which is central to Russia's energy exports. Simultaneously, it remains the primary territory for the traditional Nenets reindeer herding, with over 300,000 reindeer managed by nomadic groups following ancestral migration routes. In recent years, the peninsula has gained international scientific attention due to the formation of mysterious gas-emission craters caused by thawing permafrost. Thus, Yamal stands as a landscape of stark contrasts between ancient nomadic traditions and high-tech industrial energy development.",
      es: "La península de Yamal se encuentra en el noroeste de Siberia y se adentra en el mar de Kara. Se extiende unos 700 km de sur a norte y tiene hasta 240 km de ancho. La península es llana, con altitudes que suelen estar por debajo de los 50 m, con algunas colinas de hasta 80 m. Está formada por sedimentos cuaternarios y está atravesada por el permafrost. La vegetación consiste en tundra ártica con musgos, líquenes y gramíneas. Yamal es conocida por sus gigantescos yacimientos de gas natural, explotados desde los años 70. El clima es estrictamente ártico, con inviernos largos y fríos (-25 °C de media) y veranos cortos y frescos (+5 °C). La población indígena nénets practica tradicionalmente la cría de renos.",
      pt: "A península de Yamal situa-se no noroeste da Sibéria e estende-se pelo Mar de Kara. Percorre cerca de 700 km de sul a norte e tem até 240 km de largura. A península é plana, com altitudes situadas maioritariamente abaixo de 50 m, com algumas colinas até 80 m. Consiste em sedimentos quaternários e é atravessada por permafrost. A vegetação consiste em tundra ártica com musgos, líquenes e gramíneas. A península de Yamal é conhecida pelas suas reservas gigantescas de gás natural, exploradas desde a década de 1970. O clima é estritamente ártico com invernos longos e frios (-25 °C em média) e verões curtos e frescos (+5 °C). A população indígena nénets pratica tradicionalmente a criação de renas.",
      fr: "La péninsule de Yamal est située au nord-ouest de la Sibérie et s'avance dans la mer de Kara. Elle s'étend sur environ 700 km du sud au nord et peut atteindre 240 km de large. La péninsule est plate, l'altitude restant généralement inférieure à 50 m, avec quelques collines culminant à 80 m. Elle est composée de sédiments quaternaires et le pergélisol y est omniprésent. La végétation est une toundra arctique faite de mousses, de lichens et d'herbes. Le Yamal est célèbre pour ses gigantesques gisements de gaz naturel exploités depuis les années 1970. Le climat est strictement arctique avec des hivers longs et froids (-25 °C en moyenne) et des étés courts et frais (+5 °C). La population autochtone Nénètse y pratique traditionnellement l'élevage de rennes.",
    },
    factsAdvanced: {
      de: ["Die Jamal-Halbinsel hat eine Nord-Süd-Ausdehnung von etwa 700 Kilometern.", "Jamal beherbergt mit über 300.000 Tieren die größte Rentierherde der Welt.", "Das Bowanenkowo-Gasfeld enthält geschätzte 4,9 Billionen Kubikmeter Erdgas.", "Die mittlere Jahrestemperatur der Halbinsel liegt bei etwa -10 Grad Celsius.", "Der Name 'Jamal' stammt aus der Sprache der Nenzen und bedeutet 'Ende des Landes'.", "Im Jahr 2014 wurde hier der erste mysteriöse Methankrater mit 30 m Durchmesser entdeckt."],
      hu: ["A Jamal-félsziget hossza észak-déli irányban megközelítőleg 700 kilométer.", "Itt található a világ legnagyobb, több mint 300 000 egyedből álló rénszarvascsordája.", "A bovanenkovói gázmező készleteit 4,9 billió köbméterre becsülik.", "Az évi középhőmérséklet a félszigeten mindössze -10 Celsius-fok körül alakul.", "A félsziget neve nyenyec nyelven szó szerint azt jelenti: 'a föld vége'.", "2014-ben fedezték fel az első, gázkitörés okozta 30 méter széles óriáskrátert."],
      ro: ["Peninsula Yamal se întinde pe o lungime de aproximativ 700 de kilometri.", "Regiunea susține cea mai mare turmă de reni domesticiți din lume, peste 300.000.", "Zăcământul Bovanenkovo deține rezerve estimate la 4,9 trilioane de metri cubi de gaz.", "Temperatura medie anuală în Yamal este de aproximativ -10 grade Celsius.", "Denumirea 'Yamal' înseamnă 'Capătul Lumii' în limba populației indigene Neneți.", "Primul crater gigant format prin emisia de metan a fost identificat aici în anul 2014."],
      en: ["The Yamal Peninsula extends for approximately 700 kilometers from north to south.", "It supports the world's largest managed reindeer herd, exceeding 300,000 head.", "The Bovanenkovo gas field holds estimated reserves of 4.9 trillion cubic meters.", "The average annual temperature on the peninsula is around -10 degrees Celsius.", "The name 'Yamal' means 'End of the Land' in the Nenets language.", "The first mysterious 30-meter wide gas-emission crater was discovered here in 2014."],
      es: ["La península de Yamal tiene unos 700 km de largo.", "La anchura máxima es de 240 km.", "La elevación más alta se sitúa en torno a los 80 m.", "El campo de gas de Bovanenkovo es uno de los mayores de Rusia, con reservas de más de 4 billones de m³.", "La temperatura media en julio es de +5 °C y en enero de -25 °C.", "La población indígena incluye a unos 10.000 nénets."],
      pt: ["A península de Yamal tem cerca de 700 km de comprimento.", "A largura máxima é de 240 km.", "A elevação mais alta situa-se em cerca de 80 m.", "O campo de gás de Bovanenkovo é um dos maiores da Rússia, com reservas de mais de 4 biliões de m³.", "A temperatura média em julho é de +5 °C e em janeiro de -25 °C.", "A população indígena inclui cerca de 10.000 nénets."],
      fr: ["La péninsule de Yamal est longue d'environ 700 km.", "Sa largeur maximale est de 240 km.", "Le point culminant se situe à environ 80 m.", "Le champ gazier de Bovanenkovo est l'un des plus grands de Russie, avec plus de 4 billions de m³ de réserves.", "La température moyenne en juillet est de +5 °C, en janvier de -25 °C.", "La population autochtone compte environ 10 000 Nénètses."],
    },
    image: "/poi-images/russia-yamal-peninsula-relief-v2.webp",
  },
  {
    id: "russia-oka-don-plain-relief-v2",
    type: "valley",
    parent: "RU",
    name: { de: "Oka-Don-Ebene", hu: "Oka-Don-alföld", ro: "Câmpia Oka-Don", en: "Oka-Don Plain" },
    coords: [41.0, 53.0],
    description: {
      de: "Die Oka-Don-Ebene liegt im europäischen Teil Russlands zwischen den Flüssen Oka und Don. Die Region ist durch fruchtbare Ebenen gekennzeichnet.",
      hu: "Az Oka-Don-alföld Oroszország európai részén fekszik, az Oka és a Don folyók között. A régiót termékeny síkságok jellemzik.",
      ro: "Câmpia Oka-Don este situată în partea europeană a Rusiei, între râurile Oka și Don. Regiunea este caracterizată de câmpii fertile.",
      en: "The Oka-Don Plain is located in the European part of Russia between the Oka and Don rivers. The region is characterized by fertile plains.",
      es: "La llanura de Oká-Don se encuentra en la parte europea de Rusia, entre los ríos Oká y Don. La región se caracteriza por sus fértiles llanuras.",
      pt: "A planície de Oka-Don situa-se na parte europeia da Rússia, entre os rios Oka e Don. A região caracteriza-se por planícies férteis.",
      fr: "La plaine d'Oka-Don est située dans la partie européenne de la Russie, entre les rivières Oka et Don. La région se caractérise par des plaines fertiles.",
    },
    facts: {
      de: ["Große landwirtschaftliche Bedeutung", "Teil des zentralrussischen Hochlands", "Moderates Kontinentalklima", "Flaches bis hügeliges Gelände"],
      hu: ["Jelentős mezőgazdasági szerep", "A Közép-orosz-hátság része", "Mérsékelt kontinentális éghajlat", "Sík vagy dombos terület"],
      ro: ["Importanță agricolă mare", "Parte din Podișul Rusiei Centrale", "Climat temperat-continental", "Teren plat până la deluros"],
      en: ["High agricultural importance", "Part of the Central Russian Upland", "Moderate continental climate", "Flat to rolling terrain"],
      es: ["Gran importancia agrícola", "Parte de la meseta central rusa", "Clima continental moderado", "Terreno llano a ondulado"],
      pt: ["Grande importância agrícola", "Parte do planalto central russo", "Clima continental moderado", "Terreno plano a ondulado"],
      fr: ["Grande importance agricole", "Fait partie du plateau central de Russie", "Climat continental modéré", "Terrain plat à vallonné"],
    },
    imageHint: "Oka-Don plain agricultural fields",
    descriptionAdvanced: {
      de: "Die Oka-Don-Ebene erstreckt sich im europäischen Teil Russlands zwischen den Flüssen Oka im Norden und Don im Süden. Diese weite Tiefebene ist ein integraler Bestandteil der Osteuropäischen Ebene und zeichnet sich durch eine sanft gewellte Topographie mit einer durchschnittlichen Höhe von 150 bis 180 Metern aus. Die Region ist geologisch durch mächtige Lössschichten geprägt, die die Grundlage für die fruchtbaren Schwarzerdeböden bilden. Klimatisch liegt das Gebiet in der gemäßigten Zone, was eine intensive landwirtschaftliche Nutzung ermöglicht, insbesondere den Anbau von Getreide und Sonnenblumen. Historisch gesehen diente die Ebene als wichtige Pufferzone und Siedlungsgebiet, wobei die Waldsteppenlandschaft im Norden allmählich in die offene Steppe im Süden übergeht. Heute ist sie eine der am dichtesten besiedelten Agrarregionen Zentralrusslands.",
      hu: "Az Oka–Don-alföld az Orosz-síkság déli részén, az Oka és a Don folyók között terül el, mintegy 150-180 méteres átlagos tengerszint feletti magasságban. A tájegység felszínét glaciális és folyóvízi üledékek, főként löszszerű vályogok borítják, amelyeken a világ egyik legtermékenyebb talajtípusa, a csernozjom alakult ki. A vidék domborzatát mocsaras völgyek és széles folyóteraszok tagolják, az északi erdős sztyeppet délebbre a valódi füves sztyepp váltja fel. Gazdasági szempontból kiemelt jelentőségű mezőgazdasági terület, ahol a búza, a kukorica és a cukorrépa termesztése dominál. Az éghajlat mérsékelten kontinentális, viszonylag meleg nyarakkal és hideg telekkel, ami kedvez a nagyüzemi növénytermesztésnek. A terület központi fekvése miatt fontos közlekedési folyosók haladnak át rajta Moszkva és a déli régiók között.",
      ro: "Câmpia Oka-Don este situată în partea europeană a Rusiei, fiind delimitată la nord de râul Oka și la sud de râul Don. Această unitate de relief majoră face parte din Câmpia Est-Europeană și prezintă o altitudine medie cuprinsă între 150 și 180 de metri, având un aspect ușor ondulat. Regiunea este acoperită de depozite groase de loess, care au favorizat formarea cernoziomurilor, cele mai fertile soluri din lume. Climatul temperat-continental permite o agricultură intensivă, zona fiind considerată unul dintre grânarele Rusiei, unde se cultivă masiv cereale și floarea-soarelui. Din punct de vedere ecologic, câmpia reprezintă o zonă de tranziție între silvostepă și stepă, fiind traversată de numeroase râuri mici care alimentează bazinele celor două cursuri principale. Densitatea populației este ridicată, iar infrastructura de transport este bine dezvoltată.",
      en: "The Oka-Don Plain is located in the European part of Russia, situated between the Oka River to the north and the Don River to the south. This vast lowland forms a central part of the East European Plain and features a gently rolling landscape with average elevations ranging from 150 to 180 meters. Geologically, the area is covered by loess-like loams, which provide the base for highly fertile chernozem soils. The region experiences a temperate continental climate, making it one of Russia's primary agricultural zones for cultivating wheat, sugar beets, and sunflowers. Historically, the plain has been a vital settlement area, transitioning from forest-steppe in the north to open steppe in the south. Today, it remains a crucial economic hub due to its high population density and its role as a major transportation corridor between Moscow and Southern Russia.",
      es: "La llanura de Oká-Don está situada en la Rusia europea, entre el río Oká al norte y el Don al sur. Se extiende unos 500 km de norte a sur y tiene hasta 300 km de ancho. Las altitudes varían entre 100 y 200 m, con colinas suaves y valles amplios. La llanura está formada por sedimentos cuaternarios, principalmente loess y arenas fluviales. Es una región agrícola importante donde se cultiva trigo, centeno y patatas. El Oká y el Don están conectados al Volga mediante canales. El clima es continental templado, con inviernos moderadamente fríos (-10 °C) y veranos cálidos (+20 °C). Ciudades como Tula y Lípetsk se encuentran en esta llanura.",
      pt: "A planície de Oka-Don situa-se na Rússia europeia, entre o rio Oka a norte e o Don a sul. Estende-se por cerca de 500 km de norte a sul e tem até 300 km de largura. As altitudes variam entre 100 e 200 m, com colinas suaves e vales largos. A planície é composta por sedimentos quaternários, principalmente loess e areias fluviais. É uma importante região agrícola, onde se cultiva trigo, centeio e batata. O Oka e o Don estão ligados ao Volga por canais. O clima é continental temperado, com invernos moderadamente frios (-10 °C) e verões quentes (+20 °C). Cidades como Tula e Lipetsk situam-se nesta planície.",
      fr: "La plaine d'Oka-Don est située dans la partie européenne de la Russie, entre la rivière Oka au nord et le Don au sud. Elle s'étend sur environ 500 km du nord au sud et peut atteindre 300 km de large. Les altitudes varient entre 100 et 200 m, avec des collines douces et de larges vallées. La plaine est constituée de sédiments quaternaires, principalement du loess et des sables fluviaux. C'est une région agricole majeure où l'on cultive le blé, le seigle et la pomme de terre. L'Oka et le Don sont reliés à la Volga par des canaux. Le climat est continental tempéré avec des hivers modérément froids (-10 °C) et des étés chauds (+20 °C). Des villes comme Toula et Lipetsk se trouvent dans cette plaine.",
    },
    factsAdvanced: {
      de: ["Die Ebene umfasst eine Fläche von etwa 250.000 Quadratkilometern.", "Die höchste Erhebung erreicht kaum mehr als 200 Meter über dem Meeresspiegel.", "Im Norden dominieren podsolige Böden, während im Süden Schwarzerde vorherrscht.", "Die Region wird von über 100 kleinen und mittleren Nebenflüssen entwässert.", "Das Gebiet liegt in den Verwaltungseinheiten Rjasan, Lipezk und Woronesch.", "Die durchschnittliche Januartemperatur liegt bei etwa -10 Grad Celsius."],
      hu: ["Az alföld teljes területe megközelíti a 250 000 négyzetkilométert.", "A terület legnagyobb része 150 és 180 méter közötti magasságban fekszik.", "A felszínt borító lösz vastagsága helyenként a 20 métert is eléri.", "Az éves csapadékmennyiség északon 600 mm, délen 450 mm körül alakul.", "A térség legfontosabb városa és gazdasági központja Voronyezs.", "Az Oka-Don-medence talaja a világ egyik legjobb minőségű mezőgazdasági földje."],
      ro: ["Câmpia acoperă o suprafață totală de aproximativ 250.000 de kilometri pătrați.", "Altitudinea maximă în punctele cele mai înalte nu depășește 200 de metri.", "Grosimea stratului de loess variază între 5 și 25 de metri.", "Principalele orașe din regiune includ Voronezh, Lipetsk și Ryazan.", "Regiunea este traversată de râul Voronezh, un afluent major al Donului.", "Precipitațiile medii anuale sunt de aproximativ 500 mm pe metru pătrat."],
      en: ["The plain spans an area of approximately 250,000 square kilometers.", "Average elevations across the region stay between 150 and 180 meters.", "The southern part of the plain is dominated by deep chernozem soils.", "It covers parts of the Ryazan, Lipetsk, Tambov, and Voronezh oblasts.", "The continental climate features warm summers with averages of 20°C in July.", "The Oka-Don Plain is a major producer of Russia's winter wheat crops."],
      es: ["La llanura de Oká-Don se extiende unos 500 km en dirección norte-sur.", "La anchura máxima es de 300 km.", "Las altitudes oscilan entre 100 y 200 m.", "La superficie agrícola representa alrededor del 70 % de la región.", "La densidad de los ríos es de 0,5 a 0,7 km por km².", "La ciudad de Lípetsk tiene unos 500.000 habitantes."],
      pt: ["A planície de Oka-Don estende-se por cerca de 500 km na direção norte-sul.", "A largura máxima é de 300 km.", "As altitudes situam-se entre 100 e 200 m.", "A área agrícola representa cerca de 70 % da região.", "A densidade dos rios é de 0,5–0,7 km por km².", "A cidade de Lipetsk tem cerca de 500.000 habitantes."],
      fr: ["La plaine d'Oka-Don s'étend sur environ 500 km du nord au sud.", "La largeur maximale est de 300 km.", "Les altitudes se situent entre 100 et 200 m.", "La surface agricole utile représente environ 70 % de la région.", "La densité du réseau hydrographique est de 0,5 à 0,7 km par km².", "La ville de Lipetsk compte environ 500 000 habitants."],
    },
    image: "/poi-images/russia-oka-don-plain-relief-v2.webp",
  },
  {
    id: "russia-taimir-lowland-relief-v2",
    type: "valley",
    parent: "RU",
    name: { de: "Taimyr-Tiefland", hu: "Tajmir-alföld", ro: "Câmpia Taimîr", en: "Taimyr Lowland" },
    coords: [95.0, 73.0],
    description: {
      de: "Das Taimyr-Tiefland erstreckt sich zwischen den Byrranga-Bergen und dem Nordpolarmeer. Es ist ein arktisches Flachland mit Tundra-Vegetation.",
      hu: "A Tajmir-alföld a Birranga-hegység és az Északi-Jeges-tenger között terül el. Arktikus síkság tundrai növényzettel.",
      ro: "Câmpia Taimîr se întinde între munții Bîrranga și Oceanul Arctic. Este un ținut de șes arctic cu vegetație de tundră.",
      en: "The Taimyr Lowland extends between the Byrranga Mountains and the Arctic Ocean. It is an arctic lowland with tundra vegetation.",
      es: "La llanura de Taimyr se extiende entre los montes Byrranga y el océano Ártico. Es una llanura ártica con vegetación de tundra.",
      pt: "As terras baixas de Taimir estendem-se entre os montes Byrranga e o oceano Ártico. É uma planície ártica com vegetação de tundra.",
      fr: "La plaine de Taïmyr s'étend entre les monts Byrranga et l'océan Arctique. C'est une plaine arctique à la végétation de toundra.",
    },
    facts: {
      de: ["Nördlichster Teil Sibiriens", "Starker Permafrost", "Heimat der Wildrentiere", "Arktische Tundra"],
      hu: ["Szibéria legészakibb része", "Erős permafroszt", "A vad rénszarvasok otthona", "Arktikus tundra"],
      ro: ["Cea mai nordică parte a Siberiei", "Permafrost puternic", "Habitatul renilor sălbatici", "Tundră arctică"],
      en: ["Northernmost part of Siberia", "Severe permafrost", "Home to wild reindeer", "Arctic tundra"],
      es: ["Parte más septentrional de Siberia", "Fuerte permafrost", "Hogar de renos salvajes", "Tundra ártica"],
      pt: ["Parte mais setentrional da Sibéria", "Forte permafrost", "Lar de renas selvagens", "Tundra ártica"],
      fr: ["Partie la plus septentrionale de la Sibérie", "Fort pergélisol", "Habitat des rennes sauvages", "Toundra arctique"],
    },
    imageHint: "Taimyr lowland arctic landscape",
    descriptionAdvanced: {
      de: "Das Taimyr-Tiefland erstreckt sich im Norden Sibiriens zwischen dem Unterlauf des Jenissei und der Chatanga-Bucht. Diese riesige, sumpfige Ebene liegt nördlich des Mittelsibirischen Berglandes und südlich des Byrranga-Gebirges auf der Taimyr-Halbinsel. Die Landschaft ist geprägt durch extremen Permafrost, der im Sommer nur oberflächlich antaut und zur Bildung tausender Seen und Moore führt. Das Klima ist subarktisch und extrem rau, wobei der Boden fast das gesamte Jahr über gefroren bleibt. Botanisch dominiert die Tundra mit Flechten, Moosen und niedrigen Sträuchern, während Bäume aufgrund der kurzen Vegetationsperiode fehlen. Das Gebiet ist fast völlig unbesiedelt und dient als wichtiges Brutgebiet für Zugvögel sowie als Lebensraum für Rentierherden. Geologisch besteht das Tiefland aus quartären Sedimenten, die über alten Gesteinsschichten abgelagert wurden.",
      hu: "A Tajmir-alföld Észak-Szibériában, a Jenyiszej és a Hatanga folyók alsó szakasza között helyezkedik el, a Tajmir-félsziget belső területein. A hatalmas kiterjedésű, mocsaras síkság a Közép-szibériai-fennsík és a Birranga-hegység között terül el, tengerszint feletti magassága ritkán haladja meg az 50-100 métert. A területet folytonos permafrost (örökfagy) jellemzi, amely megakadályozza a víz elszivárgását, így nyáron óriási kiterjedésű lápvidékek és tavak jönnek létre. Az éghajlat rendkívül zord, a telek hosszúak és fagyosak, a nyár pedig alig két hónapig tart. A növényzetet a tundra övezet mohái, zuzmói és törpecserjéi alkotják, amelyek alkalmazkodtak a szélsőséges hideghez. Ez a vidék ad otthont a világ egyik legnagyobb vadon élő rénszarvas-állományának és számos ritka madárfajnak. A terület gazdaságilag szinte érintetlen, csupán a peremvidékeken zajlik korlátozott bányászat.",
      ro: "Depresiunea Taimyr este o vastă câmpie situată în nordul Siberiei, între fluviile Enisei și Hatanga, pe peninsula cu același nume. Această zonă joasă se află la nord de Podișul Siberiei Centrale și este mărginită la nord de Munții Byrranga. Relieful este caracterizat de o monotonie extremă, fiind dominat de mlaștini, turbării și mii de lacuri glaciare, dintre care cel mai mare este lacul Taimyr. Permafrostul continuu are o grosime considerabilă, împiedicând drenajul apei și favorizând procesele de solifluxiune în timpul scurtelor veri arctice. Clima este extrem de severă, cu temperaturi care coboară frecvent sub -50 de grade Celsius în timpul iernii. Vegetația de tundră este singura capabilă să supraviețuiască în aceste condiții, oferind pășune pentru turmele masive de reni sălbatici. Regiunea este una dintre cele mai puțin populate zone de pe Terra, fiind accesibilă doar prin expediții specializate.",
      en: "The Taimyr Lowland is a vast, marshy plain located in Northern Siberia between the lower reaches of the Yenisei and Khatanga rivers. Situated on the Taimyr Peninsula, it lies south of the Byrranga Mountains and north of the Central Siberian Plateau. The landscape is defined by continuous permafrost, which creates a waterlogged surface during the short summer, resulting in thousands of thermokarst lakes. The subarctic climate is exceptionally harsh, with long, freezing winters and brief, cool summers that barely allow the ground to thaw. The vegetation consists exclusively of tundra species such as mosses, lichens, and dwarf shrubs, as trees cannot survive the extreme conditions. This remote wilderness serves as a vital habitat for one of the world's largest wild reindeer populations and numerous migratory bird species. Geologically, the lowland is composed of thick Quaternary sediments deposited over older structural basins.",
      es: "La depresión de Taimyr está situada en el norte de Siberia, en la península de Taimyr, y limita con los mares de Kara y de Láptev. Se extiende unos 1.000 km de oeste a este y 500 km de norte a sur. Las altitudes suelen ser inferiores a 50 m, con la excepción de algunas colinas. La zona está impregnada de permafrost y se compone de sedimentos cuaternarios. La vegetación es de tundra ártica y desierto polar. El lago Taimyr, el más grande de la región, se encuentra aquí. El clima es extremadamente ártico, con inviernos muy fríos (promedio de -30 °C) y veranos cortos y frescos (máx. +10 °C). La región está casi deshabitada, con la excepción de algunas estaciones científicas. La depresión de Taimyr es una importante zona de cría para las aves migratorias.",
      pt: "A depressão de Taimir situa-se no norte da Sibéria, na península de Taimir, e confina com o Mar de Kara e o Mar de Laptev. Estende-se por cerca de 1.000 km de oeste para este e 500 km de norte para sul. As altitudes situam-se geralmente abaixo dos 50 m, com exceção de algumas colinas. A área é percorrida pelo permafrost e é composta por sedimentos quaternários. A vegetação é constituída por tundra ártica e deserto polar. O lago Taimir, o maior lago da região, situa-se aqui. O clima é extremamente ártico, com invernos muito frios (média de -30 °C) e verões curtos e frescos (máx. +10 °C). A região está quase desabitada, com exceção de algumas estações científicas. A depressão de Taimir é uma importante zona de nidificação para aves migratórias.",
      fr: "La plaine de Taïmyr est située au nord de la Sibérie, sur la péninsule de Taïmyr, en bordure de la mer de Kara et de la mer de Laptev. Elle s'étend sur environ 1 000 km d'ouest en est et 500 km du nord au sud. Les altitudes sont généralement inférieures à 50 m, à l'exception de quelques collines. La zone est marquée par le pergélisol et constituée de sédiments quaternaires. La végétation est de type toundra arctique et désert polaire. Le lac Taïmyr, le plus grand de la région, s'y trouve. Le climat est extrêmement arctique avec des hivers très froids (moyenne de -30 °C) et des étés courts et frais (max +10 °C). La région est quasiment inhabitée, à l'exception de quelques stations scientifiques. La plaine de Taïmyr est une importante zone de nidification pour les oiseaux migrateurs.",
    },
    factsAdvanced: {
      de: ["Das Tiefland erstreckt sich über eine Länge von etwa 1.000 Kilometern.", "Der Taimyrsee ist mit 4.560 km² das größte Gewässer der Region.", "Die Januartemperaturen sinken regelmäßig auf Werte unter -40 Grad Celsius.", "In der Region befindet sich das Große Arktische Naturreservat.", "Der Permafrostboden reicht hier bis in eine Tiefe von mehreren hundert Metern.", "Die jährliche Niederschlagsmenge beträgt oft weniger als 300 Millimeter."],
      hu: ["Az alföld hossza nyugat-keleti irányban meghaladja az 1000 kilométert.", "A Tajmir-tó a térség legnagyobb édesvizű tava, területe 4560 km².", "A fagymentes napok száma évente átlagosan kevesebb, mint 50.", "Itt található az Eurázsiában vadon élő rénszarvasok legnagyobb populációja.", "A területet északról a Birranga-hegység védi az északi-sarki szelektől.", "A talaj felső rétege nyáron mindössze 30-100 centiméter mélyen olvad fel."],
      ro: ["Câmpia are o lungime de aproximativ 1.000 km de la vest la est.", "Lacul Taimyr, situat în această depresiune, are o suprafață de 4.560 km².", "Temperaturile medii în luna iulie nu depășesc de obicei 5-10 grade Celsius.", "Solul este înghețat pe tot parcursul anului, cu excepția unui strat subțire la suprafață.", "Regiunea găzduiește Rezervația Naturală a Statului Taimyr, fondată în 1979.", "Zăpada acoperă solul timp de aproximativ 250 - 270 de zile pe an."],
      en: ["The lowland extends roughly 1,000 kilometers from west to east.", "Lake Taimyr is the region's largest lake, covering 4,560 square kilometers.", "Winter temperatures in the lowland frequently drop below -50°C.", "It acts as a primary breeding ground for the Red-breasted Goose.", "The underlying permafrost can reach depths of up to 500 meters.", "Average annual precipitation is low, typically between 200 and 300 mm."],
      es: ["La depresión de Taimyr se extiende unos 1.000 km en dirección este-oeste.", "La anchura máxima es de 500 km.", "El lago Taimyr tiene una superficie de aprox. 4.560 km².", "La temperatura media en enero es de -30 °C y en julio de +5 °C.", "Cae anualmente menos de 300 mm de precipitación.", "La región alberga las poblaciones de lemmings más septentrionales."],
      pt: ["A depressão de Taimir estende-se por cerca de 1.000 km na direção leste-oeste.", "A largura máxima é de 500 km.", "O lago Taimir tem uma área de cerca de 4.560 km².", "A temperatura média em janeiro é de -30 °C, em julho de +5 °C.", "A precipitação anual é inferior a 300 mm.", "A região alberga as populações de lemingues mais setentrionais."],
      fr: ["La plaine de Taïmyr s'étend sur environ 1 000 km d'est en ouest.", "La largeur maximale est de 500 km.", "Le lac Taïmyr a une superficie d'environ 4 560 km².", "La température moyenne en janvier est de -30 °C, en juillet de +5 °C.", "Les précipitations annuelles sont inférieures à 300 mm.", "La région abrite les populations de lemmings les plus septentrionales."],
    },
    image: "/poi-images/russia-taimir-lowland-relief-v2.webp",
  },
  {
    id: "russia-anabar-plateau-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Anabar-Plateau", hu: "Anabar-felföld", ro: "Podișul Anabar", en: "Anabar Plateau" },
    coords: [108.0, 70.0],
    description: {
      de: "Das Anabar-Plateau ist eine Hochebene im Norden Sibiriens. Sie besteht aus sehr alten kristallinen Gesteinen und ist geologisch bedeutend.",
      hu: "Az Anabar-felföld egy észak-szibériai fennsík. Nagyon régi kristályos kőzetekből áll, geológiailag jelentős.",
      ro: "Podișul Anabar este o regiune înaltă în nordul Siberiei. Este alcătuit din roci cristaline foarte vechi și este semnificativ din punct de vedere geologic.",
      en: "The Anabar Plateau is an upland area in Northern Siberia. It consists of very old crystalline rocks and is geologically significant.",
      es: "La meseta de Anabar es una altiplanicie en el norte de Siberia. Se compone de rocas cristalinas muy antiguas y tiene gran importancia geológica.",
      pt: "O planalto de Anabar é uma área de terras altas no norte da Sibéria. Consiste em rochas cristalinas muito antigas e é geologicamente significativo.",
      fr: "Le plateau de l'Anabar est un haut plateau situé dans le nord de la Sibérie. Il est composé de roches cristallines très anciennes et présente un grand intérêt géologique.",
    },
    facts: {
      de: ["Präkambrisches Schild-Gebiet", "Geringe Besiedlung", "Eingebettet in arktische Tundra", "Hohes Alter der Gesteine"],
      hu: ["Prekambriumi pajzs-terület", "Gyér lakottság", "Arktikus tundrába ágyazva", "A kőzetek nagy kora"],
      ro: ["Zonă de scut precambrian", "Populație rară", "Încadrată în tundra arctică", "Vechimea mare a rocilor"],
      en: ["Precambrian shield area", "Sparsely populated", "Embedded in arctic tundra", "Great age of rocks"],
      es: ["Área de escudo precámbrico.", "Baja densidad de población.", "Inmersa en la tundra ártica.", "Gran antigüedad de sus rocas."],
      pt: ["Área de escudo pré-cambriano.", "Baixa densidade populacional.", "Inserido na tundra ártica.", "Grande antiguidade das rochas."],
      fr: ["Zone de bouclier précambrien.", "Faible peuplement.", "Niché dans la toundra arctique.", "Grand âge des roches."],
    },
    imageHint: "Anabar plateau landscape",
    descriptionAdvanced: {
      de: "Das Anabar-Plateau bildet den nördlichsten Teil des Mittelsibirischen Berglandes und liegt im Nordosten Sibiriens, hauptsächlich in der Republik Sacha (Jakutien). Geologisch ist es von herausragender Bedeutung, da es den Anabar-Schild umfasst, wo einige der ältesten Gesteine der Erde (archaische Kristallinschiefer und Gneise) an die Oberfläche treten. Die Landschaft ist durch flache Gipfel und tief eingeschnittene Flusstäler der Flüsse Anabar und Chatanga geprägt, die spektakuläre Schluchten gebildet haben. Aufgrund der extrem nördlichen Lage herrscht ein strenges kontinentales Klima mit Permafrostbedingungen, was die Vegetation auf karge Tundra und lichte Lärchenwälder beschränkt. Das Plateau erreicht Höhen von bis zu 905 Metern und ist aufgrund seiner Abgeschiedenheit fast unbewohnt. Es ist bekannt für seine reichen Vorkommen an Bodenschätzen, insbesondere Diamanten und seltenen Erden, die in den umliegenden Gebieten abgebaut werden.",
      hu: "Az Anabar-fennsík a Közép-szibériai-fennsík legészakibb és egyik legősibb része, amely Jakutföld és a Krasznojarszki határterület találkozásánál fekszik. Geológiai szempontból egyedülálló, mivel itt bukkan a felszínre az Anabar-pajzs, amely 3 milliárd évnél is idősebb kristályos kőzetekből, gneiszből és palából áll. A fennsík átlagmagassága 400-600 méter, de legmagasabb pontja eléri a 905 métert. A felszínt az erózió formálta: a folyók, mint például az Anabar és a Popigaj, mély kanyonokat vájtak a kemény kőzetbe. Az éghajlat rendkívül zord, a tél akár 8-9 hónapig is eltarthat, a talaj pedig több száz méter mélységig tartósan fagyott. A ritka növényzet főleg zuzmókból és törpefenyőkből áll, a terület pedig szinte teljesen lakatlan. A régió világhírű a gyémántlelőhelyeiről, amelyek a fennsík peremvidékén található kimberlitkürtőkhöz kötődnek.",
      ro: "Podișul Anabar este situat în partea de nord a Siberiei Centrale, pe teritoriul Republicii Saha și al regiunii Krasnoyarsk. Din punct de vedere geologic, acesta corespunde Scutului Anabar, o regiune unde rocile cristaline precambriene, vechi de peste 3 miliarde de ani, apar la suprafață. Relieful este unul de platou, cu vârfuri plate și versanți abrupți, atingând altitudinea maximă de 905 metri. Râurile care traversează podișul, precum Anabar și Kotuy, au săpat văi adânci și pitorești în rocile dure, creând un peisaj de o sălbăticie rară. Clima este subarctică extremă, cu ierni foarte lungi și îngheț permanent al solului, ceea ce limitează vegetația la tundra alpină și păduri rare de lariță. Zona este practic nepopulată, dar are o importanță strategică deosebită datorită zăcămintelor bogate de diamante și alte minerale rare descoperite în structurile geologice perimetrale.",
      en: "The Anabar Plateau is the northernmost part of the Central Siberian Plateau, located primarily in the Sakha Republic (Yakutia). It is geologically significant as it encompasses the Anabar Shield, where some of the oldest rocks on Earth, dating back over 3 billion years, are exposed at the surface. The plateau features flat-topped massifs and deeply incised river valleys, created by rivers like the Anabar and Kotuy carving through ancient metamorphic rocks. Reaching a maximum elevation of 905 meters, the terrain is shaped by severe continental climates and continuous permafrost, restricting vegetation to sparse tundra and stunted larch forests. Due to its extreme isolation, the plateau remains virtually uninhabited by humans. However, it is a region of immense mineral wealth, famously known for its rich diamond deposits located in the kimberlite pipes along its fringes.",
      es: "La meseta de Anabar se encuentra en el norte de Siberia, al este de la desembocadura del Lena. Es un altiplano con alturas entre 400 y 700 m, alcanzando un máximo de unos 905 m. La meseta consiste en rocas precámbricas, especialmente granitos y gneises, y está profundamente surcada por ríos. Los más importantes son el Anabar y el Popigai. La vegetación es de taiga en el sur y tundra boscosa en el norte. El clima es subártico con inviernos largos y fríos (-30 °C) y veranos cortos y suaves (+12 °C). La zona es rica en yacimientos de diamantes, que se encuentran en chimeneas de kimberlita. La densidad de población es extremadamente baja, habitada principalmente por dolganos y evenkis.",
      pt: "O planalto de Anabar está localizado no norte da Sibéria, a leste da foz do rio Lena. É uma área de terras altas com altitudes entre 400 e 700 m, com um máximo de cerca de 905 m. O planalto consiste em rochas pré-cambrianas, particularmente granitos e gnaisses, e é fortemente recortado por rios. Os rios mais importantes são o Anabar e o Popigai. A vegetação é de taiga no sul e tundra florestal no norte. O clima é subártico, com invernos longos e frios (-30 °C) e verões curtos e amenos (+12 °C). A área é rica em depósitos de diamantes, que ocorrem em chaminés de kimberlito. A densidade populacional é extremamente baixa, habitada principalmente por dolganas e evenkis.",
      fr: "Le plateau de l'Anabar est situé au nord de la Sibérie, à l'est de l'embouchure de la Léna. C'est un haut plateau dont l'altitude varie entre 400 et 700 m, avec un maximum d'environ 905 m. Il est composé de roches précambriennes, notamment des granites et des gneiss, et est fortement entaillé par des rivières. Les plus importantes sont l'Anabar et la Popigaï. La végétation est constituée de taïga au sud et de toundra forestière au nord. Le climat est subarctique avec des hivers longs et froids (-30 °C) et des étés courts et doux (+12 °C). La région est riche en gisements de diamants situés dans des cheminées de kimberlite. La densité de population y est extrêmement faible, principalement composée de Dolganes et d'Evenks.",
    },
    factsAdvanced: {
      de: ["Das Plateau besteht aus präkambrischen Gesteinen, die über 3 Milliarden Jahre alt sind.", "Die höchste Erhebung des Anabar-Plateaus liegt bei 905 Metern.", "In der Nähe befindet sich der Popigai-Krater, ein riesiger Meteoriteneinschlagskrater.", "Die Flüsse frieren hier bis zu 9 Monate im Jahr komplett zu.", "Das Plateau ist ein Teil des UNESCO-Weltnaturerbes Putorana (angrenzend).", "Es gibt keine permanenten Siedlungen direkt auf dem Plateau."],
      hu: ["A fennsík kőzetei a prekambrium korszakból származnak, koruk 3,4 milliárd év.", "Legmagasabb pontja egy névtelen csúcs, amely 905 méter magas.", "A Popigaj-kráter a fennsík északi részén található, és gyémántkészleteiről híres.", "Az Anabar-folyó mentén találták Oroszország első jelentős gyémántlelőhelyeit.", "A területen az évi középhőmérséklet jóval fagypont alatt, -10 °C körül van.", "A kanyonok falai helyenként 200-300 méter magasra emelkednek a folyók fölé."],
      ro: ["Podișul este format din unele dintre cele mai vechi roci de pe Pământ.", "Punctul culminant al regiunii atinge o înălțime de 905 metri.", "Regiunea Popigai, aflată în apropiere, conține zăcăminte gigantice de diamante de impact.", "Fluviul Anabar, care dă numele podișului, are o lungime de 932 km.", "Solul este înghețat pe o adâncime ce poate depăși 1.000 de metri.", "Vegetația dominantă este formată din mușchi, licheni și lariță siberiană."],
      en: ["The plateau is part of the Anabar Shield, featuring Archaean crystalline rocks.", "Its highest peak reaches an elevation of 905 meters above sea level.", "The Popigai crater nearby was formed by an asteroid impact 35 million years ago.", "The climate is characterized by winter temperatures dropping to -60°C.", "Rich deposits of platinum and rare earth elements are found in the region.", "Larch trees found here are among the hardiest woody plants in the world."],
      es: ["La altura máxima de la meseta de Anabar es de unos 905 m.", "La superficie se estima en unos 100.000 km².", "La temperatura media en enero es de -30 °C, en julio +12 °C.", "Se registran anualmente entre 300 y 400 mm de precipitación.", "La estructura del meteorito Popigai se encuentra en el noreste de la meseta.", "Los yacimientos de diamantes se explotan desde la década de 1950."],
      pt: ["A altitude máxima do planalto de Anabar é de cerca de 905 m.", "A área é estimada em cerca de 100.000 km².", "A temperatura média em janeiro é de -30 °C, em julho +12 °C.", "Calam anualmente 300 a 400 mm de precipitação.", "A estrutura do meteorito Popigai situa-se no nordeste do planalto.", "Os depósitos de diamantes são explorados desde a década de 1950."],
      fr: ["L'altitude maximale du plateau de l'Anabar est d'environ 905 m.", "Sa superficie est estimée à environ 100 000 km².", "La température moyenne est de -30 °C en janvier et de +12 °C en juillet.", "Les précipitations annuelles sont de 300 à 400 mm.", "La structure météoritique de Popigaï se trouve au nord-est du plateau.", "Les gisements de diamants sont exploités depuis les années 1950."],
    },
    image: "/poi-images/russia-anabar-plateau-relief-v2.webp",
  },
  {
    id: "russia-vilyuy-plateau-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Wiljui-Plateau", hu: "Viljuj-felföld", ro: "Podișul Viliui", en: "Vilyuy Plateau" },
    coords: [115.0, 65.0],
    description: {
      de: "Das Wiljui-Plateau ist Teil des Zentralsibirischen Berglands. Es erstreckt sich entlang des Flusses Wiljui und ist stark zerklüftet.",
      hu: "A Viljuj-felföld a Közép-szibériai-felföld része. A Viljuj folyó mentén húzódik, felszíne erősen tagolt.",
      ro: "Podișul Viliui face parte din Podișul Siberiei Centrale. Se întinde de-a lungul râului Viliui și este puternic accidentat.",
      en: "The Vilyuy Plateau is part of the Central Siberian Plateau. It extends along the Vilyuy River and is deeply dissected.",
      es: "La meseta del Vilyuy forma parte de las tierras altas de Siberia Central. Se extiende a lo largo del río Vilyuy y está fuertemente accidentada.",
      pt: "O planalto de Vilyuy faz parte das Terras Altas da Sibéria Central. Estende-se ao longo do rio Vilyuy e é fortemente acidentado.",
      fr: "Le plateau du Viliouï fait partie du plateau de Sibérie centrale. Il s'étend le long de la rivière Viliouï et est fortement accidenté.",
    },
    facts: {
      de: ["Teil des Zentralsibirischen Berglands", "Diamantenvorkommen in der Region", "Starke Erosion durch Flüsse", "Sibirische Taiga"],
      hu: ["A Közép-szibériai-felföld része", "Gyémántlelőhelyek a régióban", "Erős folyami erózió", "Szibériai tajga"],
      ro: ["Parte din Podișul Siberiei Centrale", "Zăcăminte de diamante în regiune", "Eroziune fluvială puternică", "Taiga siberiană"],
      en: ["Part of the Central Siberian Plateau", "Diamond deposits in the region", "Strong river erosion", "Siberian taiga"],
      es: ["Parte de las tierras altas de Siberia Central", "Yacimientos de diamantes en la región", "Fuerte erosión por los ríos", "Taiga siberiana"],
      pt: ["Parte das Terras Altas da Sibéria Central", "Depósitos de diamantes na região", "Forte erosão pelos rios", "Taiga siberiana"],
      fr: ["Fait partie du plateau de Sibérie centrale", "Gisements de diamants dans la région", "Forte érosion par les rivières", "Taïga sibérienne"],
    },
    imageHint: "Vilyuy plateau taiga landscape",
    descriptionAdvanced: {
      de: "Das Wiljui-Plateau ist ein weitläufiges Hochland im zentralen Teil Sibiriens und bildet einen wesentlichen Bestandteil des Mittelsibirischen Berglandes. Es liegt im Einzugsgebiet des Oberlaufs des Flusses Wiljui und erstreckt sich über die Grenze zwischen der Republik Sacha (Jakutien) und der Region Krasnojarsk. Geologisch ist das Plateau durch mächtige Trapp-Formationen geprägt, die durch gewaltige vulkanische Eruptionen am Ende des Perms entstanden sind. Die Region ist bekannt für den weltweit tiefsten Permafrostboden, der hier eine Dicke von bis zu 1.500 Metern erreicht und selbst im Sommer nur wenige Zentimeter tief auftaut. Die Landschaft besteht aus abgeflachten Bergrücken mit Höhen bis zu 962 Metern, die von tiefen Tälern durchschnitten werden. Die Vegetation ist karg und besteht hauptsächlich aus lichter Lärchen-Taiga, die den extremen Temperaturschwankungen von über 80 Grad Differenz zwischen Sommer und Winter standhält.",
      hu: "A Viljuj-fennsík a Közép-szibériai-fennsík központi részén elhelyezkedő hatalmas hegyvidéki terület, amely Jakutföld és a Krasznojarszki határterület határán fekszik. A tájképet a szibériai trapp-vulkanizmus során keletkezett bazaltfennsíkok határozzák meg, amelyeket a Viljuj folyó és mellékfolyói mélyen bevölgyeltek. Ez a vidék tartja a világrekordot a permafrost vastagságát tekintve: az örökké fagyott talaj rétege itt eléri az 1500 méteres mélységet. A fennsík legmagasabb pontja 962 méter, a felszínt pedig lapos hegyhátak és meredek völgyoldalak jellemzik. Az éghajlat szélsőségesen kontinentális, itt mérik az északi félteke egyik legalacsonyabb hőmérsékleti értékeit, miközben a nyár rövid és meleg. A növényzetet főként ritkás vörösfenyő-erdők (tajga) alkotják, amelyek képesek életben maradni a fagyott talajon. A terület gazdag ásványkincsekben, különösen gyémántban, amit a közeli Mirnij és Udacsnij bányáiban termelnek ki.",
      ro: "Podișul Vilyuy este o regiune montană vastă situată în inima Siberiei Centrale, ocupând bazinele superioare ale râurilor Vilyuy, Olenyok și Ilimpeya. Geologia sa este marcată de prezența trapelor siberiene, vaste platouri de bazalt formate prin erupții vulcanice masive în urmă cu aproximativ 250 de milioane de ani. Această regiune este celebră pentru faptul că deține cel mai gros strat de permafrost din lume, atingând adâncimea record de 1.500 de metri. Relieful este compus din culmi plate, cu altitudini ce ajung până la 962 de metri, separate de văi adânci create de eroziunea fluvială. Climatul este unul dintre cele mai severe de pe glob, cu variații termice extreme între iarnă și vară, iernile fiind extrem de geroase și lungi. Vegetația este reprezentată de taigaua de lariță, singura specie de arbore care poate supraviețui pe solul permanent înghețat al podișului.",
      en: "The Vilyuy Plateau is an extensive upland region in Central Siberia, forming a significant part of the Central Siberian Plateau. It is located at the headwaters of the Vilyuy and Olenyok rivers, spanning the border of the Sakha Republic and Krasnoyarsk Krai. The geological foundation of the plateau is composed of Siberian Traps, massive basalt layers formed by volcanic activity at the end of the Permian period. Notably, the Vilyuy Plateau holds the world record for the thickest permafrost, which reaches staggering depths of up to 1,500 meters. The landscape is characterized by flat-topped ridges reaching up to 962 meters, interspersed with deep valleys carved by glacial and fluvial erosion. The extreme continental climate results in some of the widest temperature ranges on Earth, supporting a sparse larch taiga. This remote area is adjacent to world-famous diamond mining centers like Udachny and Mirny.",
      es: "La meseta del Vilyuy se encuentra en Siberia oriental, en la cuenca del río Vilyuy, un afluente del Lena. Se extiende unos 1.000 km de oeste a este y tiene hasta 500 km de ancho. Las altitudes oscilan mayoritariamente entre los 300 y 700 m, con picos máximos que rondan los 900 m. La meseta está formada por rocas sedimentarias mesozoicas, principalmente areniscas y calizas, recubiertas por mantos de basalto. La región es rica en yacimientos de carbón, petróleo y gas natural. La vegetación es de bosque boreal de coníferas. El clima es fuertemente continental, con inviernos fríos (-35 °C) y veranos cálidos (+18 °C). La densidad de población es baja y la economía se basa en la minería y la silvicultura.",
      pt: "O planalto de Vilyuy situa-se na Sibéria Oriental, na bacia do rio Vilyuy, um afluente do Lena. Estende-se por cerca de 1.000 km de oeste a leste e tem até 500 km de largura. As altitudes situam-se maioritariamente entre 300 e 700 m, com picos máximos em torno de 900 m. O planalto consiste em rochas sedimentares mesozoicas, principalmente arenitos e calcários, sobrepostas por camadas de basalto. A região é rica em depósitos de carvão, petróleo e gás natural. A vegetação é de floresta boreal de coníferas. O clima é fortemente continental com invernos frios (-35 °C) e verões quentes (+18 °C). A densidade populacional é baixa e a economia baseia-se na mineração e silvicultura.",
      fr: "Le plateau du Viliouï se situe en Sibérie orientale, dans le bassin versant du Viliouï, un affluent de la Léna. Il s'étend sur environ 1 000 km d'ouest en est et peut atteindre 500 km de large. L'altitude se situe généralement entre 300 et 700 m, avec des sommets culminant à environ 900 m. Le plateau est composé de roches sédimentaires mésozoïques, principalement des grès et des calcaires, recouvertes de couches de basalte. La région est riche en gisements de charbon, de pétrole et de gaz naturel. La végétation est constituée de forêt boréale de conifères. Le climat est fortement continental avec des hivers froids (-35 °C) et des étés chauds (+18 °C). La densité de population est faible et l'économie repose sur l'exploitation minière et forestière.",
    },
    factsAdvanced: {
      de: ["Der Permafrostboden am Wiljui erreicht eine Rekordtiefe von 1.500 Metern.", "Die höchste Erhebung des Plateaus liegt bei etwa 962 Metern über dem Meeresspiegel.", "In der Region wurden im Winter Temperaturen von bis zu -65 Grad Celsius gemessen.", "Das Plateau ist reich an Kimberlit-Schloten, der Hauptquelle für Diamanten.", "Der Fluss Wiljui hat hier spektakuläre Basaltformationen freigelegt.", "Die Region ist fast zehnmal so groß wie die Schweiz, aber kaum besiedelt."],
      hu: ["A permafrost (örökfagy) vastagsága itt a legnagyobb a világon: 1500 méter.", "A fennsík legmagasabb pontja 962 méter magas a tengerszint felett.", "A téli és nyári hőmérséklet közötti különbség meghaladhatja a 80 °C-ot.", "A területen található Udacsnij városa, ahol a világ egyik legnagyobb gyémántbányája működik.", "A bazaltos kőzetrétegek vastagsága helyenként a 2-3 kilométert is eléri.", "A vörösfenyő az egyetlen fafaj, amely képes a sekély aktív rétegben gyökeret verni."],
      ro: ["Podișul găzduiește cel mai adânc permafrost de pe planetă (1.500 m).", "Altitudinea maximă a podișului este de 962 de metri.", "Temperaturile de iarnă scad frecvent sub pragul de -50 de grade Celsius.", "Regiunea este o sursă majoră de diamante pentru piața mondială.", "Vilyuy este cel mai lung afluent al fluviului Lena, traversând acest podiș.", "În anii 1960, aici a fost construit unul dintre cele mai mari baraje pe permafrost."],
      en: ["The permafrost depth of 1,500 meters is the deepest measured on Earth.", "The plateau's maximum elevation is 962 meters above sea level.", "It is part of the 'Pole of Cold' region with extreme winter conditions.", "The bedrock consists of volcanic basalt known as the Siberian Traps.", "Major diamond deposits were discovered here in the mid-20th century.", "Larch forests cover most of the plateau, adapted to the frozen substrate."],
      es: ["La meseta del Vilyuy se extiende unos 1.000 km en dirección este-oeste.", "La anchura máxima es de 500 km.", "La elevación más alta alcanza unos 900 m.", "La zona contiene importantes yacimientos de carbón con reservas de más de 50.000 millones de toneladas.", "La temperatura media en enero es de -35 °C y en julio de +18 °C.", "El embalse de Vilyuy tiene una superficie de unos 2.170 km²."],
      pt: ["O planalto de Vilyuy estende-se por cerca de 1.000 km na direção leste-oeste.", "A largura máxima é de 500 km.", "A elevação mais alta atinge cerca de 900 m.", "A área contém depósitos significativos de carvão com reservas de mais de 50 mil milhões de toneladas.", "A temperatura média em janeiro é de -35 °C e em julho de +18 °C.", "A albufeira de Vilyuy tem uma área de cerca de 2.170 km²."],
      fr: ["Le plateau du Viliouï s'étend sur environ 1 000 km d'est en est.", "Sa largeur maximale est de 500 km.", "Le point culminant atteint environ 900 m.", "La région contient d'importants gisements de charbon avec des réserves de plus de 50 milliards de tonnes.", "La température moyenne en janvier est de -35 °C, en juillet de +18 °C.", "Le réservoir du Viliouï couvre une superficie d'environ 2 170 km²."],
    },
    image: "/poi-images/russia-vilyuy-plateau-relief-v2.webp",
  },
  {
    id: "russia-vitim-range-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Vitim-Gebirge", hu: "Vitim-hegység", ro: "Munții Vitim", en: "Vitim Range" },
    coords: [116.0, 56.5],
    description: {
      de: "Das Vitim-Gebirge ist ein Gebirgszug im Osten Sibiriens, der die Wasserscheide zwischen verschiedenen großen Flusssystemen bildet.",
      hu: "A Vitim-hegység Kelet-Szibéria egyik vonulata, amely különböző nagy folyórendszerek közötti vízválasztót alkot.",
      ro: "Munții Vitim sunt un lanț muntos din estul Siberiei, care formează cumpăna apelor între diferite sisteme fluviale majore.",
      en: "The Vitim Range is a mountain chain in Eastern Siberia that forms the watershed between several major river systems.",
      es: "Los montes de Vitim son una cordillera en el este de Siberia que forma la divisoria de aguas entre varios grandes sistemas fluviales.",
      pt: "As montanhas de Vitim são uma cordilheira no leste da Sibéria que forma o divisor de águas entre vários grandes sistemas fluviais.",
      fr: "Les monts de Vitim sont une chaîne de montagnes de Sibérie orientale qui forme la ligne de partage des eaux entre plusieurs grands systèmes fluviaux.",
    },
    facts: {
      de: ["Höhen bis über 2000 Meter", "Teil von Transbaikalien", "Stark gegliedertes Relief", "Alpiner Charakter"],
      hu: ["Magassága meghaladja a 2000 métert", "Transzbajkálföld része", "Erősen tagolt felszín", "Alpesi jelleg"],
      ro: ["Altitudini peste 2000 metri", "Parte din Transbaikalia", "Relief puternic fragmentat", "Caracter alpin"],
      en: ["Elevations exceeding 2000 meters", "Part of Transbaikalia", "Highly dissected relief", "Alpine character"],
      es: ["Alturas de más de 2000 metros", "Parte de Transbaikalia", "Relieve muy accidentado", "Carácter alpino"],
      pt: ["Altitudes superiores a 2000 metros", "Parte da Transbaicália", "Relevo fortemente acidentado", "Caráter alpino"],
      fr: ["Altitudes dépassant les 2000 mètres", "Fait partie de la Transbaïkalie", "Relief très accidenté", "Caractère alpin"],
    },
    imageHint: "Vitim range alpine landscape",
    descriptionAdvanced: {
      de: "Das Vitim-Plateau ist ein ausgedehntes Hochland im Osten Sibiriens, das sich östlich des Baikalsees in der Republik Burjatien und der Region Transbaikalien erstreckt. Es ist Teil des größeren Stanowoi-Hochlandes und wird im Norden und Westen vom Fluss Vitim begrenzt, einem der mächtigsten Nebenflüsse der Lena. Die Landschaft ist geprägt durch eine Kombination aus flachen Basaltplateaus und Gebirgszügen, die Höhen von über 2.500 Metern erreichen. Geologisch ist das Gebiet durch vulkanische Aktivitäten im Känozoikum geprägt, was sich in zahlreichen erloschenen Vulkankegeln und Lavafeldern widerspiegelt. Das Klima ist streng kontinental mit extrem kalten Wintern und kurzen, mäßig warmen Sommern. Die Vegetation besteht aus dichter Taiga in den Tälern und alpiner Tundra in den höheren Lagen. Aufgrund der reichen Vorkommen an Gold, Glimmer und anderen Mineralien spielt die Region eine wichtige Rolle im russischen Bergbau.",
      hu: "A Vitim-fennsík egy kiterjedt hegyvidéki terület Kelet-Szibériában, a Bajkál-tótól keletre, Burjátföld és a Bajkálontúli határterület területén. A vidék a Sztanovoj-felföld részét képezi, északról a Vitim folyó határolja, amely mély völgyeket vágott a kőzetbe. A tájképet különleges vulkáni formák teszik egyedivé: a negyedidőszaki vulkanizmus maradványaként számos bazaltfennsík, kialudt vulkáni kúp és lávafolyam figyelhető meg a területen. A hegycsúcsok magassága eléri a 2500 métert, míg az átlagos magasság 1000-1200 méter körül mozog. Az éghajlat szélsőségesen kontinentális, a völgyekben gyakori a hőmérsékleti inverzió, ami rendkívüli hideget okoz télen. A növényzetet hegyi tajga és cirbolyafenyő-erdők alkotják, a magasabb részeken pedig köves tundra található. A fennsík híres gazdag aranylelőhelyeiről és különleges drágaköveiről, mint például a jadeit és a nefrit.",
      ro: "Podișul Vitim este o unitate de relief majoră situată în Siberia Răsăriteană, la est de Lacul Baikal, pe teritoriul Republicii Bureatia. Acesta face parte din sistemul muntos Stanovoi și este drenat de râul Vitim, un afluent important al Lenei. Relieful este caracterizat printr-o succesiune de platouri bazaltice și culmi montane rotunjite, cu altitudini medii de 1.100 metri, dar care pot depăși 2.500 metri în masivele mai înalte. Geologia regiunii este fascinantă datorită vulcanismului recent, fiind vizibile numeroase conuri vulcanice stinse și câmpuri de lavă bine conservate. Clima este continentală excesivă, cu ierni geroase și veri scurte, ceea ce favorizează dezvoltarea taigalei siberiene și a tundrei alpine. Podișul este o regiune minieră istorică, fiind renumit pentru zăcămintele sale bogate de aur, mică și pietre semiprețioase, precum nefritul.",
      en: "The Vitim Plateau is an extensive upland region in Eastern Russia, situated east of Lake Baikal within the Republic of Buryatia and Zabaykalsky Krai. It forms a key part of the Stanovoy Highlands and is drained by the Vitim River, a major tributary of the Lena. The landscape is unique for its Cenozoic volcanic features, including dozens of extinct volcanic cones and extensive basaltic lava fields that cover the ancient metamorphic basement. With average elevations around 1,200 meters and peaks surpassing 2,500 meters, the terrain is a mix of high plateaus and rugged mountain ranges. The harsh continental climate supports a dense mountain taiga dominated by larch and cedar, transitioning to alpine tundra at higher altitudes. This remote region has been historically significant for its rich deposits of gold, mica, and nephrite jade, attracting mining activities since the 19th century.",
      es: "La cordillera de Vitim es una cadena montañosa en el sur de Siberia oriental que se extiende al noreste del lago Baikal. Recorre unos 400 km de suroeste a noreste. Las alturas de las cumbres oscilan entre los 1.000 y 1.600 m, siendo el punto más alto el pico Golets con unos 1.800 m. Las montañas están formadas por rocas precámbricas y paleozoicas, incluidos granitos, gneises y esquistos, y están cubiertas de densa taiga. Los ríos más importantes son el Vitim y sus cabeceras. El clima es extremadamente continental, con inviernos muy fríos (-30 °C) y veranos suaves (+15 °C). La cordillera es rica en yacimientos de oro, explotados desde el siglo XIX. La densidad de población es muy baja.",
      pt: "A cordilheira de Vitim é uma cadeia de montanhas no sul da Sibéria Oriental, que se estende a nordeste do Lago Baikal. Percorre cerca de 400 km de sudoeste a nordeste. As altitudes dos picos situam-se entre 1.000 e 1.600 m, sendo o ponto mais alto o pico Golets com cerca de 1.800 m. A cordilheira consiste em rochas pré-câmbricas e paleozoicas, incluindo granitos, gnaisses e xistos. É densamente arborizada por taiga. Os rios mais importantes são o Vitim e as suas nascentes. O clima é extremamente continental com invernos muito frios (-30 °C) e verões suaves (+15 °C). A cordilheira é rica em depósitos de ouro, explorados desde o século XIX. A densidade populacional é muito baixa.",
      fr: "Les monts de Vitim sont une chaîne de montagnes du sud de la Sibérie orientale, s'étendant au nord-est du lac Baïkal. Elle s'étire sur environ 400 km du sud-ouest au nord-est. Les sommets culminent entre 1 000 et 1 600 m, le point culminant étant le sommet Golets à environ 1 800 m. La chaîne est composée de roches précambriennes et paléozoïques, notamment des granites, des gneiss et des schistes. Elle est densément couverte de taïga. Les rivières les plus importantes sont le Vitim et ses sources. Le climat est extrêmement continental avec des hivers très froids (-30 °C) et des étés doux (+15 °C). La chaîne est riche en gisements d'or, exploités depuis le XIXe siècle. La densité de population y est très faible.",
    },
    factsAdvanced: {
      de: ["Auf dem Plateau befinden sich mindestens 15 erloschene Vulkane.", "Der höchste Punkt im Umkreis des Plateaus erreicht etwa 2.500 Meter.", "Die Vitim-Region ist berühmt für ihre hochwertigen Goldseifenlagerstätten.", "Im Jahr 2002 ereignete sich hier das mysteriöse 'Vitim-Ereignis' (Bolide).", "Der Fluss Vitim ist für seine schwierigen Stromschnellen bekannt.", "Die Durchschnittstemperatur im Januar liegt bei etwa -30 Grad Celsius."],
      hu: ["A fennsíkon több mint 15 jól konzerválódott, kialudt vulkáni kúp található.", "Legmagasabb részei a 2500 métert is meghaladják a Sztanovoj-felföldön.", "A térségben található Oroszország egyik legrégebbi aranybányászati körzete.", "2002-ben a fennsík felett robbant fel egy meteorit (Vitim-esemény).", "A Vitim folyó kanyonja helyenként 400-500 méter mély.", "A területen gyakoriak a gyógyhatású ásványvízforrások és hévizek."],
      ro: ["Podișul Vitim conține peste 15 vulcani stinși din perioada cuaternară.", "Altitudinea medie a platoului central este de aproximativ 1.200 de metri.", "Regiunea este celebră pentru zăcămintele de aur exploatate de peste un secol.", "În 2002, un meteorit a explodat deasupra podișului, eveniment numit 'Bolidul Vitim'.", "Vegetația include păduri de cedru siberian și mesteacăn pitic.", "Iernile sunt marcate de fenomene de inversiune termică în depresiuni."],
      en: ["The plateau features at least 15 extinct volcanoes and cinder cones.", "The highest peaks in the associated ranges exceed 2,500 meters.", "The region is one of Russia's primary sources of nephrite jade.", "The 2002 Vitim event was a high-altitude bolide explosion over the area.", "The Vitim River creates a series of spectacular gorges across the plateau.", "Permafrost is widespread but discontinuous in this mountainous region."],
      es: ["La cordillera de Vitim se extiende a lo largo de unos 400 km.", "La cumbre más alta, Golets, alcanza unos 1.800 m.", "La altitud media de las crestas es de unos 1.200 m.", "La minería de oro comenzó en la década de 1840.", "La precipitación anual es de 500–700 mm.", "La temperatura media en enero es de -30 °C y en julio de +15 °C."],
      pt: ["A cordilheira de Vitim estende-se por cerca de 400 km de comprimento.", "O pico mais alto, Golets, atinge cerca de 1.800 m.", "A altitude média das cristas é de cerca de 1.200 m.", "A mineração de ouro começou na década de 1840.", "A precipitação anual é de 500–700 mm.", "A temperatura média em janeiro é de -30 °C e em julho de +15 °C."],
      fr: ["Les monts de Vitim s'étendent sur environ 400 km de long.", "Le plus haut sommet, Golets, atteint environ 1 800 m.", "L'altitude moyenne des crêtes est d'environ 1 200 m.", "L'exploitation minière de l'or a débuté dans les années 1840.", "Les précipitations annuelles sont de 500 à 700 mm.", "La température moyenne en janvier est de -30 °C, en juillet de +15 °C."],
    },
    image: "/poi-images/russia-vitim-range-relief-v2.webp",
  },
  {
    id: "russia-salair-range-relief-v2", "sights": {
      "de": [
            {
                  "name": "Razvaliny Gorskinskoi GES (pervaia v Sibiri)",
                  "text": "Die Ruinen der Gorskaja-Wasserkraftanlage markieren die Überreste der allerersten derartigen Anlage in Sibirien.",
                  "category": "historical",
                  "coords": [
                        85.597644,
                        54.440675
                  ]
            },
            {
                  "name": "Drevlepravoslavnaia tserkov'",
                  "text": "Die Altorthodoxe Kirche bewahrt die alten liturgischen Traditionen und die Architektur der Altgläubigen.",
                  "category": "landmark",
                  "coords": [
                        85.395646,
                        54.455785
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Razvaliny Gorskinskoi GES (pervaia v Sibiri)",
                  "text": "A Gorszkaja vízerőmű romjai az első ilyen jellegű létesítmény maradványait jelzik Szibériában.",
                  "category": "historical",
                  "coords": [
                        85.597644,
                        54.440675
                  ]
            },
            {
                  "name": "Drevlepravoslavnaia tserkov'",
                  "text": "Az óhitű ortodox templom az óhitűek ősi liturgikus hagyományait és építészetét őrzi.",
                  "category": "landmark",
                  "coords": [
                        85.395646,
                        54.455785
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Razvaliny Gorskinskoi GES (pervaia v Sibiri)",
                  "text": "Ruinele centralei hidroelectrice Gorskaya marchează rămășițele primei astfel de instalații din Siberia.",
                  "category": "historical",
                  "coords": [
                        85.597644,
                        54.440675
                  ]
            },
            {
                  "name": "Drevlepravoslavnaia tserkov'",
                  "text": "Biserica de rit vechi ortodox păstrează vechile tradiții liturgice și arhitectura credincioșilor de rit vechi.",
                  "category": "landmark",
                  "coords": [
                        85.395646,
                        54.455785
                  ]
            }
      ],
      "en": [
            {
                  "name": "Razvaliny Gorskinskoi GES (pervaia v Sibiri)",
                  "text": "The ruins of the Gorskaya hydroelectric station mark the remains of the very first such facility in Siberia.",
                  "category": "historical",
                  "coords": [
                        85.597644,
                        54.440675
                  ]
            },
            {
                  "name": "Drevlepravoslavnaia tserkov'",
                  "text": "The Old Orthodox Church preserves the ancient liturgical traditions and architecture of the Old Believers.",
                  "category": "landmark",
                  "coords": [
                        85.395646,
                        54.455785
                  ]
            }
      ]
},
    type: "mountain",
    parent: "RU",
    name: { de: "Salair-Gebirge", hu: "Szalair-hegység", ro: "Munții Salair", en: "Salair Range" },
    coords: [85.5, 54.5],
    description: {
      de: "Das Salair-Gebirge ist ein ausgedehnter Höhenzug in Südsibirien. Es bildet eine geologische Grenze zwischen dem Westsibirischen Tiefland und dem Altai.",
      hu: "A Szalair-hegység egy kiterjedt vonulat Dél-Szibériában. Geológiai határt képez a Nyugat-szibériai-alföld és az Altaj között.",
      ro: "Munții Salair sunt un lanț muntos extins din sudul Siberiei. Formează o graniță geologică între Câmpia Siberiei de Vest și Altai.",
      en: "The Salair Range is an extensive mountain chain in Southern Siberia. It forms a geological boundary between the West Siberian Plain and the Altai.",
      es: "Los montes de Salair son una extensa cadena montañosa en el sur de Siberia. Forman un límite geológico entre la llanura de Siberia occidental y el Altai.",
      pt: "A cordilheira de Salair é uma extensa cadeia de montanhas no sul da Sibéria. Forma uma fronteira geológica entre a planície da Sibéria Ocidental e o Altai.",
      fr: "Les monts Salair sont une vaste chaîne de collines du sud de la Sibérie. Ils constituent une limite géologique entre la plaine de Sibérie occidentale et l'Altaï.",
    },
    facts: {
      de: ["Sanfte Erhebungen", "Reich an Erzen", "Teil des Altai-Systems", "Nördlich des Kusnezker Beckens"],
      hu: ["Lankás magaslatok", "Gazdag ércekben", "Az Altaj-rendszer része", "A Kuznyecki-medencétől északra"],
      ro: ["Înălțimi domoale", "Bogată în minereuri", "Parte din sistemul Altai", "La nord de bazinul Kuznețk"],
      en: ["Gentle elevations", "Rich in ores", "Part of the Altai system", "North of the Kuznetsk Basin"],
      es: ["Elevaciones suaves", "Rico en minerales", "Parte del sistema de Altai", "Al norte de la cuenca de Kuznetsk"],
      pt: ["Elevações suaves", "Rico em minérios", "Parte do sistema Altai", "A norte da bacia de Kuznetsk"],
      fr: ["Reliefs doux", "Riche en minerais", "Fait partie du système de l'Altaï", "Au nord du bassin de Kouznetsk"],
    },
    imageHint: "Salair range hills",
    descriptionAdvanced: {
      de: "Der Salairrücken ist ein stark erodierter Gebirgszug im Südwesten Sibiriens, der sich über die Regionen Kemerowo, Altai und Nowosibirsk erstreckt. Er verläuft parallel zum Kusnezker Alatau und bildet die westliche Begrenzung des Kusnezker Beckens (Kusbass). Geologisch gesehen ist der Salairrücken sehr alt und besteht hauptsächlich aus deformierten Kalksteinen, Sandsteinen und magmatischen Gesteinen des Paläozoikums. Mit einer maximalen Höhe von nur 621 Metern (Berg Kiwda) gleicht das Gebirge eher einem sanften Hügelland mit abgeflachten Kuppen. Trotz der geringen Höhe ist die Region von großer wirtschaftlicher Bedeutung, da sie reiche Vorkommen an Polymetallerzen, Gold und Kalkstein beherbergt. Die Landschaft ist von dunkler Nadelholz-Taiga und Laubwäldern bedeckt, die eine reiche Flora und Fauna beherbergen. Historisch spielte der Rücken eine Schlüsselrolle bei der industriellen Erschließung Sibiriens im 18. und 19. Jahrhundert.",
      hu: "A Szalair-hátság egy erősen lepusztult hegyvonulat Délnyugat-Szibériában, az Altaji határterület, a Novoszibirszki és a Kemerovói terület határán. A hátság a Kuznyecki-medence nyugati peremét alkotja, északnyugat-délkeleti irányban húzódik mintegy 300 kilométer hosszan. Geológiailag ősi röghegység, amely főként kristályos palából és mészkőből épül fel, és gazdag ércekben, például cinkben, ólomban és ezüstben. Legmagasabb pontja a Kivda-hegy, amely mindössze 621 méter magas, így a táj inkább dombságnak tűnik, mintsem magashegységnek. A felszínt sűrű fenyőerdők és nyírligetek borítják, amelyeket helyenként mocsaras völgyek tagolnak. A 18. század óta fontos bányászati központ, ahol az első oroszországi ezüstbányák egyike is működött. A vidék éghajlata mérsékelten kontinentális, bőséges csapadékkal, ami kedvez a dús aljnövényzet kialakulásának.",
      ro: "Cresta Salair este un lanț muntos puternic erodat situat în sud-vestul Siberiei, întinzându-se pe teritoriul regiunilor Kemerovo, Novosibirsk și Altai. Acesta formează limita vestică a Bazinului Kuznețk (Kuzbass) și este paralel cu munții Kuznețk Alatau. Geologic, culmea este foarte veche, fiind formată din calcare, gresii și roci vulcanice din era paleozoică, supuse unor procese îndelungate de denudare. Altitudinea maximă este modestă, atingând doar 621 de metri în vârful Kivda, ceea ce îi conferă aspectul unui podiș deluros cu culmi rotunjite. În ciuda înălțimii reduse, Salair este extrem de bogat în resurse minerale, inclusiv minereuri complexe (zinc, plumb, argint) și aur, fiind exploatat încă din secolul al XVIII-lea. Vegetația este dominată de taigaua întunecată și păduri de mesteacăn, zona fiind cunoscută pentru biodiversitatea sa ridicată și solurile fertile de la poalele munților.",
      en: "The Salair Ridge is a heavily eroded mountain range in Southwestern Siberia, spanning the Kemerovo, Novosibirsk, and Altai regions. It forms the western boundary of the Kuznetsk Basin (Kuzbass) and runs roughly parallel to the Kuznetsk Alatau. Geologically, the ridge is an ancient structure composed of Paleozoic limestones, sandstones, and volcanic rocks that have been weathered into a plateau-like landscape. The highest point is Mount Kivda, reaching an elevation of only 621 meters, giving the range a hilly rather than mountainous appearance. Despite its low altitude, the Salair Ridge is economically vital due to its rich deposits of complex ores containing silver, lead, and zinc, as well as significant limestone and gold reserves. The terrain is covered by a mix of dark coniferous taiga and birch forests, supporting a diverse ecosystem. It has been a major center for Russian metallurgy and mining since the early 18th century.",
      es: "La cordillera de Salair es una cadena montañosa baja en el sur de Siberia occidental que se extiende unos 300 km de noreste a suroeste. Las altitudes de las cumbres oscilan entre 400 y 600 m, con una altura máxima de 621 m. La cordillera está formada por rocas paleozoicas, incluyendo calizas, areniscas y esquistos. La región es conocida por sus yacimientos de minerales, especialmente hierro y oro. La vegetación es principalmente de bosques de coníferas y mixtos. La cordillera separa la llanura de Siberia occidental de la cuenca de Kuznetsk. El clima es continental, con inviernos fríos (-17 °C) y veranos cálidos (+18 °C). La densidad de población es baja y la economía se basa en la minería y la industria maderera.",
      pt: "A cordilheira de Salair é uma cadeia montanhosa baixa no sul da Sibéria Ocidental, que se estende por cerca de 300 km de nordeste a sudoeste. As altitudes dos picos situam-se entre 400 e 600 m, com uma altitude máxima de 621 m. A cordilheira é composta por rochas paleozoicas, incluindo calcários, arenitos e xistos. A região é conhecida pelos seus depósitos de minério, especialmente ferro e ouro. A vegetação é constituída principalmente por florestas de coníferas e mistas. A cordilheira separa a planície da Sibéria Ocidental da bacia de Kuznetsk. O clima é continental, com invernos frios (-17 °C) e verões quentes (+18 °C). A densidade populacional é baixa e a economia baseia-se na exploração mineira e florestal.",
      fr: "Le massif de Salair est une basse montagne du sud de la Sibérie occidentale, s'étendant sur environ 300 km du nord-est au sud-ouest. Les altitudes des sommets varient entre 400 et 600 m, avec une hauteur maximale de 621 m. Le massif est constitué de roches paléozoïques, notamment des calcaires, des grès et des schistes. La région est réputée pour ses gisements de minerais, en particulier le fer et l'or. La végétation est principalement composée de forêts de conifères et de forêts mixtes. Le massif sépare la plaine de Sibérie occidentale du bassin de Kouznetsk. Le climat est continental avec des hivers froids (-17 °C) et des étés chauds (+18 °C). La densité de population est faible, l'économie repose sur les mines et l'exploitation forestière.",
    },
    factsAdvanced: {
      de: ["Der höchste Gipfel des Salairrückens ist der Berg Kiwda mit 621 Metern.", "Die Länge des Gebirgszuges beträgt etwa 300 Kilometer.", "Hier wurden im 18. Jahrhundert die ersten Silberminen Sibiriens eröffnet.", "Der Rücken bildet die Wasserscheide zwischen den Flüssen Ob und Tom.", "Geologisch gesehen entstand der Salairrücken im Paläozoikum.", "Kalkstein aus dieser Region wird großflächig für die Zementindustrie abgebaut."],
      hu: ["A hátság legmagasabb pontja a Kivda-hegy, magassága 621 méter.", "A vonulat hossza körülbelül 300 kilométer, szélessége 15-40 kilométer.", "Az első ezüstbányát 1781-ben nyitották meg a Szalair-hátság területén.", "A terület gazdag barlangokban, amelyeket a mészkő eróziója alakított ki.", "A vidék éves csapadékmennyisége 600-800 mm között mozog.", "A Szalair-hátság választja el az Ob-síkságot a Kuznyecki-medencétől."],
      ro: ["Vârful Kivda este cel mai înalt punct, având o altitudine de 621 metri.", "Lanțul muntos are o lungime de aproximativ 300 de kilometri.", "Exploatarea argintului a început aici în anul 1781, în localitatea Salair.", "Regiunea este bogată în depozite de bauxită și calcar industrial.", "Salair face parte din sistemul muntos Altai-Sayan din punct de vedere tectonic.", "Pădurile de brad și cedru acoperă peste 70% din suprafața culmii."],
      en: ["The highest elevation in the Salair Ridge is Mount Kivda at 621 meters.", "The range extends for approximately 300 kilometers in a NW-SE direction.", "Siberia's first silver ores were mined here starting in 1781.", "The ridge serves as a watershed between the Ob and Tom river basins.", "It is composed mainly of intensely folded Cambrian and Silurian rocks.", "The area is a significant producer of cement grade limestone in Russia."],
      es: ["La cordillera de Salair se extiende unos 300 km.", "La altura máxima es de 621 m.", "La altura media es de 400-500 m.", "Las reservas de mineral de hierro se estiman en 500 millones de toneladas.", "Cae anualmente entre 500 y 600 mm de precipitación.", "La temperatura media en enero es de -17 °C y en julio de +18 °C."],
      pt: ["A cordilheira de Salair estende-se por cerca de 300 km.", "A altitude máxima é de 621 m.", "A altitude média situa-se entre 400 e 500 m.", "As reservas de minério de ferro estão estimadas em 500 milhões de toneladas.", "A precipitação anual é de 500–600 mm.", "A temperatura média em janeiro é de -17 °C, em julho de +18 °C."],
      fr: ["Le massif de Salair s'étend sur environ 300 km.", "L'altitude maximale est de 621 m.", "L'altitude moyenne est de 400-500 m.", "Les réserves de minerai de fer sont estimées à 500 millions de tonnes.", "Les précipitations annuelles sont de 500 à 600 mm.", "La température moyenne en janvier est de -17 °C, en juillet de +18 °C."],
    },
    image: "/poi-images/russia-salair-range-relief-v2.webp",
  },
  {
    id: "russia-kolyma-range-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Kolyma-Gebirge", hu: "Kolima-hegység", ro: "Munții Kolîma", en: "Kolyma Range" },
    coords: [150.0, 63.0],
    description: {
      de: "Das Kolyma-Gebirge erstreckt sich durch den russischen Fernen Osten. Es ist eine unzugängliche Bergregion mit zahlreichen hohen Gipfeln.",
      hu: "A Kolima-hegység az orosz Távol-Keleten húzódik. Nehezen megközelíthető hegyvidék, számos magas csúccsal.",
      ro: "Munții Kolîma se întind prin Orientul Îndepărtat rus. Este o regiune muntoasă inaccesibilă cu numeroase piscuri înalte.",
      en: "The Kolyma Range extends through the Russian Far East. It is an inaccessible mountain region with numerous high peaks.",
      es: "Las montañas de Kolymá se extienden a través del Lejano Oriente ruso. Es una región montañosa inaccesible con numerosos picos altos.",
      pt: "As montanhas de Kolyma estendem-se pelo Extremo Oriente russo. É uma região montanhosa inacessível com numerosos picos altos.",
      fr: "La chaîne de la Kolyma s'étend à travers l'Extrême-Orient russe. C'est une région montagneuse inaccessible avec de nombreux sommets élevés.",
    },
    facts: {
      de: ["Sehr zerklüftetes Relief", "Strenge Winter", "Wichtige Wasserscheide zum Pazifik", "Entlegene Region"],
      hu: ["Erősen tagolt felszín", "Zord telek", "Fontos vízválasztó a Csendes-óceán felé", "Távoli régió"],
      ro: ["Relief puternic fragmentat", "Ierni aspre", "Cumpăna apelor către Pacific", "Regiune izolată"],
      en: ["Highly dissected relief", "Severe winters", "Important watershed to the Pacific", "Remote region"],
      es: ["Relieve muy accidentado", "Inviernos rigurosos", "Importante divisoria de aguas hacia el Pacífico", "Región remota"],
      pt: ["Relevo muito acidentado", "Invernos rigorosos", "Importante divisória de águas para o Pacífico", "Região remota"],
      fr: ["Relief très accidenté", "Hivers rigoureux", "Ligne de partage des eaux importante vers le Pacifique", "Région reculée"],
    },
    imageHint: "Kolyma range mountains",
    descriptionAdvanced: {
      de: "Das Kolymagebirge, auch als Gydan-Gebirge bekannt, erstreckt sich über 1.300 Kilometer im russischen Fernen Osten, hauptsächlich in der Oblast Magadan. Es bildet eine gewaltige Barriere zwischen dem Einzugsgebiet des Flusses Kolyma im Landesinneren und dem Ochotskischen Meer im Osten. Die Landschaft ist geprägt durch schroffe Bergketten, tief eingeschnittene Schluchten und weite Hochplateaus, wobei die höchsten Gipfel Höhen von fast 2.000 Metern erreichen. Geologisch ist das Gebirge Teil des mesozoischen Faltungsgürtels und besteht überwiegend aus Sediment- und Vulkangesteinen, die reich an Gold und Zinn sind. Das Klima ist extrem subarktisch mit sehr langen, strengen Wintern und kühlen Sommern, was zu einer ausgedehnten Permafrostbildung führt. Die Vegetation ist spärlich und besteht in tieferen Lagen aus Zwerg-Kiefern und Lärchen, während die höheren Gipfel der Steinwüste gleichen. Die Region erlangte traurige Berühmtheit durch die Straflager des GULAG-Systems, in denen unter härtesten Bedingungen Bergbau betrieben wurde.",
      hu: "A Kolima-hegység (más néven Gidan-hegység) az orosz Távol-Keleten, a Magadani területen húzódik mintegy 1300 kilométer hosszan. A hegylánc hatalmas vízválasztót alkot a Jeges-tengerbe ömlő Kolima folyó medencéje és a Csendes-óceánhoz tartozó Ohotszki-tenger között. Domborzatát meredek gerincek, mély kanyonok és kiterjedt gránitmasszívumok jellemzik, legmagasabb pontja eléri az 1962 métert. Geológiailag a mezozoikumi gyűrődés eredménye, kőzetei rendkívül gazdagok nemesfémekben, különösen aranyban és ezüstben. Az éghajlat rendkívül zord, a tél akár 8 hónapig is tarthat, a hőmérséklet pedig rendszeresen -50 fok alá süllyed. A növényzetet hegyi tundra és törpefenyő-erdők alkotják, a folyóvölgyekben pedig ritkás vörösfenyvesek találhatók. A hegység történelme szorosan összefonódott a sztálini korszak kényszermunkatáboraival, ahol a foglyok embertelen körülmények között bányászták az aranyat a zord hegyek között.",
      ro: "Munții Kolyma, cunoscuți și sub numele de Munții Gydan, reprezintă un sistem muntos vast situat în Orientul Îndepărtat Rus, în regiunea Magadan. Aceștia se întind pe o distanță de peste 1.300 de kilometri, formând cumpăna apelor între bazinul fluviului Kolyma și Marea Ohotsk. Relieful este variat, cuprinzând culmi alpine, platouri înalte și văi glaciare adânci, vârful maxim atingând 1.962 de metri. Din punct de vedere geologic, munții sunt alcătuiți din roci sedimentare și vulcanice metamorfozate, fiind una dintre cele mai bogate zone aurifere din lume. Climatul este subarctic extrem, cu ierni foarte lungi și îngheț permanent, ceea ce face ca solul să fie acoperit de o vegetație săracă de tundră alpină și păduri de lariță pitică. Istoria regiunii este marcată de exploatarea resurselor minerale prin sistemul GULAG, ceea ce a dus la o dezvoltare industrială forțată în condiții geografice extrem de ostile.",
      en: "The Kolyma Range, also known as the Gydan Mountains, stretches for over 1,300 kilometers through the Russian Far East, primarily within the Magadan Oblast. It acts as a massive geographic barrier and watershed between the Kolyma River basin, which flows into the Arctic Ocean, and the Sea of Okhotsk to the east. The terrain is characterized by rugged ridges, deep canyons, and vast granite massifs, with its highest peaks reaching nearly 2,000 meters above sea level. Geologically, the range belongs to the Mesozoic fold zone and is globally renowned for its immense deposits of gold, silver, and tin. The subarctic climate is exceptionally severe, with winters lasting up to eight months and temperatures frequently plummeting below -50°C. Vegetation is limited to mountain tundra and dwarf stone pine, with sparse larch forests in the valleys. Historically, the range became infamous during the mid-20th century as a central site for the GULAG forced labor camps, where prisoners mined precious metals in the freezing wilderness.",
      es: "Las montañas de Kolymá se encuentran en el noreste de Siberia y se extienden unos 1.300 km de noroeste a sureste. Las altitudes de los picos oscilan entre 1.000 y 2.000 m, siendo el punto más alto el monte Gora Nevskaya con unos 2.400 m. La cordillera consiste en rocas mesozoicas y cenozoicas, incluyendo areniscas, esquistos y rocas volcánicas. La vegetación varía desde la taiga en el sur hasta la tundra en el norte. El clima es subártico con inviernos muy fríos (-35 °C) y veranos cortos y frescos (+10 °C). La región es rica en oro, plata y estaño, que se extraen desde la década de 1930. La minería ha marcado fuertemente el paisaje, y muchos asentamientos surgieron durante el sistema de gulag.",
      pt: "As montanhas de Kolyma encontram-se no nordeste da Sibéria e estendem-se por cerca de 1.300 km de noroeste a sudeste. As altitudes dos picos oscilam entre 1.000 e 2.000 m, sendo o ponto mais alto o monte Gora Nevskaya com cerca de 2.400 m. A cordilheira consiste em rochas mesozoicas e cenozoicas, incluindo arenitos, xistos e rochas vulcânicas. A vegetação varia desde a taiga no sul até à tundra no norte. O clima é subártico com invernos muito frios (-35 °C) e verões curtos e frescos (+10 °C). A região é rica em ouro, prata e estanho, que são extraídos desde a década de 1930. A mineração marcou fortemente a paisagem, e muitos assentamentos surgiram durante o sistema de gulag.",
      fr: "La chaîne de la Kolyma est située au nord-est de la Sibérie et s'étend sur environ 1 300 km du nord-ouest au sud-est. Les sommets culminent entre 1 000 et 2 000 m, le point culminant étant le mont Gora Nevskaïa à environ 2 400 m. Les montagnes sont constituées de roches mésozoïques et cénozoïques, notamment des grès, des schistes et des roches volcaniques. La végétation varie de la taïga au sud à la toundra au nord. Le climat est subarctique avec des hivers très froids (-35 °C) et des étés courts et frais (+10 °C). La région est riche en or, en argent et en étain, extraits depuis les années 1930. L'exploitation minière a fortement marqué le paysage, de nombreuses colonies ayant été créées sous le système du goulag.",
    },
    factsAdvanced: {
      de: ["Der höchste Punkt des Kolymagebirges erreicht eine Höhe von 1.962 Metern.", "Das Gebirge erstreckt sich über eine Gesamtlänge von rund 1.300 Kilometern.", "Es beherbergt einige der produktivsten Goldminen der Welt.", "Die Region ist durch kontinuierlichen Permafrost geprägt.", "Im Gebirge entspringen zahlreiche Zuflüsse des Flusses Kolyma.", "Die Straße von Magadan nach Jakutsk führt durch Teile dieses Gebirges."],
      hu: ["A hegység legmagasabb csúcsa az 1962 méter magas névtelen pont.", "A vonulat teljes hossza meghaladja az 1300 kilométert.", "A hegység területén található Oroszország legnagyobb aranytartaléka.", "A téli fagyok idején a talaj több méter mélységig teljesen átfagy.", "Itt halad keresztül a hírhedt 'Csontok útja' (Kolima-országút).", "A hegység választja el az ázsiai kontinenst az Ohotszki-tengertől."],
      ro: ["Altitudinea maximă a munților Kolyma este de 1.962 de metri.", "Sistemul muntos se întinde pe aproximativ 1.300 km lungime.", "Regiunea este principalul producător de aur din Federația Rusă.", "Munții au fost formați în timpul orogenezei mezozoice.", "Temperaturile medii în ianuarie sunt de aproximativ -35 până la -40 grade Celsius.", "Vegetația include specii rare de Pinus pumila (pin pitic siberian)."],
      en: ["The highest peak in the Kolyma Range stands at 1,962 meters.", "The range serves as the main watershed between the Arctic and Pacific Oceans.", "Gold mining in this region accounts for a significant portion of Russia's output.", "The 'Road of Bones' highway traverses the southern part of the range.", "Permafrost in the area can reach depths of several hundred meters.", "The mountains are composed of folded sedimentary and volcanic strata."],
      es: ["Las montañas de Kolymá se extienden a lo largo de unos 1.300 km.", "El pico más alto, Gora Nevskaya, alcanza unos 2.400 m.", "La anchura de la cordillera es de hasta 300 km.", "La producción de oro en la región en el siglo XX fue de varios miles de toneladas.", "La temperatura media en enero es de -35 °C, en julio de +10 °C.", "Las montañas se encuentran en la zona horaria de Magadán (UTC+11)."],
      pt: ["As montanhas de Kolyma estendem-se por cerca de 1.300 km de comprimento.", "O pico mais alto, Gora Nevskaya, atinge cerca de 2.400 m.", "A largura da cordilheira é de até 300 km.", "A produção de ouro na região no século XX foi de vários milhares de toneladas.", "A temperatura média em janeiro é de -35 °C, em julho de +10 °C.", "As montanhas encontram-se no fuso horário de Magadan (UTC+11)."],
      fr: ["La chaîne de la Kolyma s'étend sur environ 1 300 km de long.", "Le sommet le plus élevé, le mont Gora Nevskaïa, atteint environ 2 400 m.", "La largeur de la chaîne de montagnes peut atteindre 300 km.", "La production d'or dans la région au XXe siècle s'est élevée à plusieurs milliers de tonnes.", "La température moyenne en janvier est de -35 °C, en juillet de +10 °C.", "Les montagnes se situent dans le fuseau horaire de Magadan (UTC+11)."],
    },
    image: "/poi-images/russia-kolyma-range-relief-v2.webp",
  },
  {
    id: "russia-turgai-plateau-relief-v2",
    type: "mountain",
    parent: "RU",
    name: { de: "Turgai-Plateau", hu: "Turgaji-felföld", ro: "Podișul Turgai", en: "Turgai Plateau" },
    coords: [62.0, 51.5],
    description: {
      de: "Das Turgai-Plateau ist eine sanfte Erhebung zwischen den Ural-Bergen und dem Kasachischen Hügelland. Es zeichnet sich durch Steppenlandschaften aus.",
      hu: "A Turgaji-felföld egy lankás magaslat az Urál és a Kazah-hátság között. Sztyeppei tájak jellemzik.",
      ro: "Podișul Turgai este o zonă înaltă domoală între munții Ural și podișul kazah. Se distinge prin peisaje de stepă.",
      en: "The Turgai Plateau is a gentle upland between the Ural Mountains and the Kazakh Uplands. It is characterized by steppe landscapes.",
      es: "La meseta de Turgai es una suave elevación situada entre los montes Urales y las tierras altas de Kazajistán. Se caracteriza por sus paisajes de estepa.",
      pt: "O planalto de Turgai é uma elevação suave entre os Montes Urais e as Terras Altas do Cazaquistão. Caracteriza-se por paisagens de estepe.",
      fr: "Le plateau de Tourgaï est une élévation douce située entre les monts Oural et les hautes terres du Kazakhstan. Il se caractérise par des paysages de steppe.",
    },
    facts: {
      de: ["Trockenes Steppenklima", "Geringe Reliefunterschiede", "Übergangszone zwischen Sibirien und Zentralasien", "Weite Grasflächen"],
      hu: ["Száraz sztyeppei éghajlat", "Kicsi domborzati különbségek", "Átmeneti zóna Szibéria és Közép-Ázsia között", "Kiterjedt gyepek"],
      ro: ["Climat de stepă uscată", "Diferențe mici de relief", "Zonă de tranziție între Siberia și Asia Centrală", "Pajiști vaste"],
      en: ["Arid steppe climate", "Small relief differences", "Transition zone between Siberia and Central Asia", "Vast grasslands"],
      es: ["Clima de estepa seca", "Escasas diferencias de relieve", "Zona de transición entre Siberia y Asia Central", "Extensas praderas"],
      pt: ["Clima de estepe seco", "Poucas diferenças de relevo", "Zona de transição entre a Sibéria e a Ásia Central", "Vastas áreas de gramíneas"],
      fr: ["Climat de steppe sèche", "Faibles différences de relief", "Zone de transition entre la Sibérie et l'Asie centrale", "Vastes étendues d'herbe"],
    },
    imageHint: "Turgai plateau grassland",
    descriptionAdvanced: {
      de: "Das Turgai-Plateau ist eine weite Hochebene im Nordwesten Kasachstans und im angrenzenden Grenzgebiet zu Russland, gelegen zwischen dem Uralgebirge im Westen und dem Kasachischen Hügelland im Osten. Es verbindet die Westsibirische Tiefebene im Norden mit dem Turan-Becken im Süden. Geologisch besteht das Plateau aus horizontal gelagerten marinen und kontinentalen Sedimenten des Känozoikums und Mesozoikums, die durch die Turgai-Senke, ein tiefes Erosionstal, zweigeteilt werden. Die Landschaft ist überwiegend flach bis leicht gewellt mit Durchschnittshöhen zwischen 200 und 300 Metern. Das Klima ist semiarid und stark kontinental, was zur Ausbildung von weiten Steppen und Halbwüsten führt. Das Plateau ist von großer wirtschaftlicher Bedeutung aufgrund seiner massiven Magneteisenstein- und Braunkohlevorkommen. Historisch diente die Turgai-Senke als wichtiger Migrationskorridor für Flora und Fauna zwischen Sibirien und Zentralasien.",
      hu: "A Torgaj-fennsík egy kiterjedt síksági terület Északnyugat-Kazahsztánban és Oroszország déli határvidékén, az Urál-hegység és a Kazah-hátság között. Ez a terület fontos átmeneti zónát alkot a Nyugat-szibériai-alföld és a Turáni-alföld között, tengerszint feletti magassága 200-300 méter. A fennsíkot középen a Torgaj-kapu (vagy Torgaj-vályú) osztja ketté, amely egy ősi folyóvölgy, és ma is fontos közlekedési folyosó. Geológiailag vízszintes üledékes kőzetek építik fel, amelyek rendkívül gazdagok vasércben, bauxitban és szénben. Az éghajlat száraz kontinentális, a növényzetet főként árvalányhajas sztyepp és félsivatagi társulások alkotják. A térség vízrajzát az időszakos folyók és a lefolyástalan sós tavak jellemzik. A Torgaj-fennsík Oroszország és Kazahsztán egyik legfontosabb nehézipari nyersanyagbázisa, különösen a magnetitbányászat szempontjából.",
      ro: "Podișul Turgai este o regiune geografică vastă situată în nord-vestul Kazahstanului, la granița cu Rusia, între Munții Ural și Dealurile Kazahstanului. Această unitate de relief face legătura între Câmpia Siberiei de Vest și Câmpia Turanului, având altitudini medii cuprinse între 200 și 300 de metri. Relieful este unul tabular, format din depozite sedimentare marine și continentale din perioadele neogenă și paleogenă. Podișul este tăiat de la nord la sud de depresiunea Turgai, o vale largă care a servit istoric drept coridor pentru migrația speciilor arctice spre sud. Climatul este arid și temperat-continental, vegetația fiind dominată de stepe uscate și plante xerofite. Importanța sa economică este majoră datorită zăcămintelor gigantice de minereu de fier (magnetit) și bauxită, care alimentează complexele metalurgice din regiune.",
      en: "The Turgai Plateau is an extensive upland region located in Northwestern Kazakhstan and the adjacent Russian borderlands, situated between the Ural Mountains and the Kazakh Uplands. It serves as a vital geographic bridge connecting the West Siberian Plain to the north with the Turan Basin to the south. The plateau's structure is composed of flat-lying sedimentary layers from the Mesozoic and Cenozoic eras, bisected by the Turgai Depression, a broad erosional trough. Average elevations range between 200 and 300 meters, featuring a landscape of vast steppes and semi-deserts. The climate is semi-arid and continental, with hot summers and cold winters. Economically, the plateau is of immense significance due to its massive deposits of magnetite iron ore, bauxite, and coal. Historically, the Turgai Strait (a prehistoric seaway) once occupied this area, and the depression remains a critical migration corridor for birds and animals between Siberia and Central Asia.",
      es: "La meseta de Turgai se encuentra en el noroeste de Kazajistán y el sur de Rusia, entre el Ural y el mar de Aral. Es una meseta llana con altitudes entre 200 y 400 m y una superficie de unos 300.000 km². La meseta está formada por sedimentos mesozoicos y cenozoicos cubiertos por vegetación esteparia. Los ríos más importantes son el Turgai y el Irgiz. El clima es continental, con veranos calurosos (+25 °C) e inviernos fríos (-15 °C). La agricultura se ve limitada por la sequedad, por lo que predomina la ganadería extensiva. La meseta es rica en recursos minerales como bauxita y fosforitas, aunque la densidad de población es baja.",
      pt: "O planalto de Turgai situa-se no noroeste do Cazaquistão e no sul da Rússia, entre os Urais e o Mar de Aral. É um planalto plano com altitudes entre 200 e 400 m. A área é de cerca de 300.000 km². O planalto consiste em sedimentos mesozoicos e cenozoicos cobertos por vegetação de estepe. Os rios mais importantes são o Turgai e o Irgiz. O clima é continental com verões quentes (+25 °C) e invernos frios (-15 °C). A agricultura é limitada pela aridez, sendo praticada principalmente a pecuária extensiva. O planalto é rico em recursos minerais como bauxita e fosforites. A densidade populacional é baixa.",
      fr: "Le plateau de Tourgaï est situé au nord-ouest du Kazakhstan et au sud de la Russie, entre l'Oural et la mer d'Aral. Il s'agit d'un plateau plat dont l'altitude varie entre 200 et 400 m. Sa superficie est d'environ 300 000 km². Le plateau est composé de sédiments mésozoïques et cénozoïques recouverts d'une végétation de steppe. Les rivières les plus importantes sont le Tourgaï et l'Irgiz. Le climat est continental avec des étés chauds (+25 °C) et des hivers froids (-15 °C). L'agriculture est limitée par la sécheresse et l'élevage extensif est l'activité principale. Le plateau est riche en ressources minérales telles que la bauxite et les phosphorites. La densité de population y est faible.",
    },
    factsAdvanced: {
      de: ["Das Plateau erreicht eine durchschnittliche Höhe von 200 bis 300 Metern.", "Die Turgai-Senke ist etwa 800 Kilometer lang.", "Hier befinden sich die riesigen Eisenerzlagerstätten von Sokolow-Sarbai.", "Das Gebiet war im Tertiär eine Meeresstraße (Turgai-Straße).", "Im Sommer können die Temperaturen im Steppengebiet über 40 Grad steigen.", "Zahlreiche abflusslose Salzseen prägen die südlichen Teile des Plateaus."],
      hu: ["A fennsík átlagmagassága a tengerszint felett 200 és 300 méter között van.", "A Torgaj-vályú szélessége helyenként eléri a 75-300 kilométert.", "Itt találhatók a világ egyik legnagyobb magnetit-vasérc lelőhelyei.", "A területen található kőszénkészletek vastagsága elérheti az 50-70 métert.", "Az éves csapadékmennyiség mindössze 200-300 mm a régióban.", "A fennsík déli részén számos keserűsós tó található."],
      ro: ["Altitudinea medie a podișului variază între 200 și 300 de metri.", "Depresiunea Turgai are o lungime de aproximativ 800 de kilometri.", "Zăcămintele de magnetit de la Sokolov-Sarbai sunt printre cele mai mari din lume.", "Regiunea a fost o strâmtoare marină în perioada eocenului.", "Climatul arid determină apariția furtunilor de praf în timpul verii.", "Râul Turgai, care dă numele podișului, se pierde în lacuri sărate."],
      en: ["The plateau maintains an average elevation between 200 and 300 meters.", "The Turgai Depression is a key migratory path for the Siberian Crane.", "It hosts one of the largest iron ore basins in the world.", "A prehistoric seaway known as the Turgai Sea existed here 35 million years ago.", "Bauxite deposits in this area provide the raw material for aluminum production.", "The terrain is dominated by feather grass and wormwood steppes."],
      es: ["La meseta de Turgai cubre una superficie de unos 300.000 km².", "Las altitudes oscilan entre los 200 y 400 m.", "El río Turgai tiene unos 800 km de longitud.", "La precipitación anual es de 200–300 mm.", "La temperatura media en julio es de +25 °C y en enero de -15 °C.", "Las reservas de fosforita se estiman en 500 millones de toneladas."],
      pt: ["O planalto de Turgai cobre uma área de cerca de 300.000 km².", "As altitudes situam-se entre 200 e 400 m.", "O rio Turgai tem cerca de 800 km de comprimento.", "A precipitação anual é de 200–300 mm.", "A temperatura média em julho é de +25 °C e em janeiro de -15 °C.", "As reservas de fosforite estão estimadas em 500 milhões de toneladas."],
      fr: ["Le plateau de Tourgaï couvre une superficie d'environ 300 000 km².", "Les altitudes se situent entre 200 et 400 m.", "La rivière Tourgaï est longue d'environ 800 km.", "Les précipitations annuelles sont de 200 à 300 mm.", "La température moyenne en juillet est de +25 °C, en janvier de -15 °C.", "Les réserves de phosphorite sont estimées à 500 millions de tonnes."],
    },
    image: "/poi-images/russia-turgai-plateau-relief-v2.webp",
  }
];
