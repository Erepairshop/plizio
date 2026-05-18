import json

def get_content():
    items = []
    
    # 1. Fernandina Island
    items.append({
        "id": "fernandina-island-nature-v2",
        "en": {
            "description": "Fernandina Island is the youngest and most volcanically active island in the Galapagos archipelago, situated at the westernmost edge of the chain. It is dominated by the massive La Cumbre volcano, which rises to 1476 meters and features a deep caldera. The landscape of the island is characterized by vast fields of aa and pahoehoe lava, representing a pristine environment untouched by invasive mammals. This unique setting provides a vital habitat for the largest colony of marine iguanas, which often bask on the dark volcanic rocks to regulate their temperature. Additionally, the island is home to the flightless cormorant, an endemic species that hunts in the nutrient-rich waters of the Cromwell Current. The absence of introduced predators makes Fernandina a critical site for studying evolutionary biology and ecological succession. Geologically, the island represents the current location of the Galapagos hotspot, where magma continues to rise and expand the oceanic crust, creating new landmasses over time.",
            "facts": [
                "Youngest island in the Galapagos, aged between 30,000 and 100,000 years.",
                "Home to the active La Cumbre volcano, reaching 1476 meters in height.",
                "Covers a total land area of approximately 642 square kilometers.",
                "Supports the largest colony of marine iguanas in the entire archipelago.",
                "Remains free of any introduced land mammals, preserving its original ecology.",
                "The central caldera collapsed significantly during a major event in 1968."
            ]
        },
        "de": {
            "description": "Die Insel Fernandina ist die jüngste und vulkanisch aktivste Insel im Galapagos-Archipel und liegt am westlichsten Rand der Inselkette. Sie wird vom massiven Vulkan La Cumbre dominiert, der eine Höhe von 1476 Metern erreicht und eine beeindruckende, tiefe Caldera besitzt. Die Landschaft der Insel ist geprägt von weiten Feldern aus Aa- und Pahoehoe-Lava, die eine unberührte Umgebung darstellen, die von invasiven Säugetieren weitgehend verschont geblieben ist. Dieser einzigartige Lebensraum beherbergt die größte Kolonie von Meerechsen auf den Inseln, die sich oft in Gruppen auf den dunklen Vulkanfelsen sonnen. Zudem ist die Insel die Heimat des Galapagosscharbe, einer endemischen Art, die in den nährstoffreichen Gewässern des Cromwell-Stroms jagt. Das Fehlen eingeführter Raubtiere macht Fernandina zu einem entscheidenden Ort für die Erforschung der Evolutionsbiologie und der ökologischen Sukzession. Geologisch gesehen markiert die Insel den aktuellen Standort des Galapagos-Hotspots, an dem ständig Magma aufsteigt und die ozeanische Kruste erweitert.",
            "facts": [
                "Jüngste Insel der Galapagos-Inseln, etwa 30.000 bis 100.000 Jahre alt.",
                "Beherbergt den aktiven Vulkan La Cumbre mit einer Höhe von 1476 Metern.",
                "Die Gesamtfläche der Insel beträgt etwa 642 Quadratkilometer.",
                "Beherbergt die größte Kolonie von Meerechsen im gesamten Archipel.",
                "Frei von eingeführten Landsäugetieren, was die ursprüngliche Ökologie bewahrt.",
                "Die zentrale Caldera brach bei einem Ereignis im Jahr 1968 massiv ein."
            ]
        },
        "hu": {
            "description": "Fernandina-sziget a Galápagos-szigetcsoport legfiatalabb és vulkánilag legaktívabb tagja, amely a lánc legnyugatibb szélén helyezkedik el. A szigetet a hatalmas La Cumbre vulkán uralja, amely 1476 méteres magasságba emelkedik, és egy mély, lenyűgöző kalderával rendelkezik. A tájat kiterjedt aa- és pahoehoe lávamezők jellemzik, amelyek egy viszonylag érintetlen környezetet képviselnek, mentesen az invazív emlősöktől. Ez az egyedülálló környezet létfontosságú élőhelyet biztosít a szigetek legnagyobb tengeri leguán kolóniájának, amelyeket gyakran látni a sötét vulkáni kőzeteken sütkérezni. Ezenkívül a sziget ad otthont a galápagosi kárókatonának, egy endemikus fajnak, amely a Cromwell-áramlat tápanyagban gazdag vizeiben vadászik. A betelepített ragadozók hiánya Fernandina-szigetet az evolúcióbiológia és az ökológiai szukcesszió tanulmányozásának kritikus helyszínévé teszi. Geológiailag a sziget a Galápagos-forrópont jelenlegi helyét képviseli, ahol a magma folyamatosan emelkedik és tágítja az óceáni kérget.",
            "facts": [
                "A Galápagos-szigetek legfiatalabb tagja, kora 30 és 100 ezer év közé tehető.",
                "Itt található az aktív La Cumbre vulkán, amely 1476 méter magas.",
                "A sziget teljes szárazföldi területe körülbelül 642 négyzetkilométer.",
                "Itt található az egész szigetcsoport legnagyobb tengeri leguán kolóniája.",
                "Mentes a betelepített emlősöktől, így megőrizte eredeti ökológiáját.",
                "A központi kaldera jelentősen beomlott egy 1968-as esemény során."
            ]
        },
        "ro": {
            "description": "Insula Fernandina este cea mai tânără și cea mai activă din punct de vedere vulcanic insulă din arhipelagul Galapagos, fiind situată la marginea vestică a lanțului. Este dominată de masivul vulcan La Cumbre, care se ridică la o altitudine de 1476 de metri și prezintă o calderă adâncă și impresionantă. Peisajul insulei este caracterizat de câmpuri vaste de lavă aa și pahoehoe, reprezentând un mediu virgin, neatins de mamifere invazive. Acest cadru unic oferă un habitat vital pentru cea mai mare colonie de iguane marine din insule, care pot fi văzute adesea încălzindu-se pe rocile vulcanice întunecate. În plus, insula este casa cormoranului fără zbor, o specie endemică ce s-a adaptat pentru a vâna în apele bogate în nutrienți ale Curentului Cromwell. Absența prădătorilor introduși face din Fernandina un sit critic pentru studierea biologiei evoluționiste și a succesiunii ecologice în timp real. Din punct de vedere geologic, insula reprezintă locația actuală a punctului fierbinte Galapagos, unde magma continuă să se ridice și să extindă crusta oceanică.",
            "facts": [
                "Cea mai tânără insulă din Galapagos, cu o vârstă între 30.000 și 100.000 de ani.",
                "Găzduiește vulcanul activ La Cumbre, cu o înălțime de 1476 de metri.",
                "Suprafața totală a insulei este de aproximativ 642 de kilometri pătrați.",
                "Susține cea mai mare colonie de iguane marine din întreg arhipelagul.",
                "Rămâne fără mamifere terestre introduse, păstrându-și ecologia originală.",
                "Caldera centrală s-a prăbușit semnificativ în timpul unui eveniment din 1968."
            ]
        }
    })

    # 2. Santiago Island
    items.append({
        "id": "santiago-island-nature-v2",
        "en": {
            "description": "Santiago Island, also known as San Salvador, is a central island in the Galapagos archipelago with a rich human and natural history. It was famously visited by Charles Darwin in 1835, where he made extensive observations of the local wildlife and geology. The terrain of the island is remarkably diverse, featuring the striking black lava flows of Sullivan Bay and the scenic cliffs of Puerto Egas. These lava formations, mostly composed of pahoehoe, provide a window into the recent volcanic past of the region. Santiago was once heavily impacted by introduced species, such as goats and pigs, but massive restoration efforts have successfully eradicated these animals, allowing the native flora to recover. Today, visitors can observe Galapagos fur seals, sea lions, and various bird species along the rugged shores. The highest point of the island reaches 907 meters, offering varied microclimates from arid coasts to humid highlands. The complex geological structure and successful ecological recovery make it a prime example of island restoration in the Pacific.",
            "facts": [
                "Visited by Charles Darwin in 1835 during the voyage of the HMS Beagle.",
                "The highest point of the island reaches 907 meters above sea level.",
                "Sullivan Bay is famous for the pahoehoe lava flows from 1897.",
                "Salt mining was once carried out at Puerto Egas in the 20th century.",
                "Feral goats and pigs were successfully eradicated by the year 2006.",
                "The island covers an area of approximately 585 square kilometers."
            ]
        },
        "de": {
            "description": "Die Insel Santiago, auch bekannt als San Salvador, ist eine zentrale Insel im Galapagos-Archipel mit einer reichen menschlichen und natürlichen Geschichte. Sie wurde berühmterweise 1835 von Charles Darwin besucht, der dort umfangreiche Beobachtungen zur lokalen Tierwelt und Geologie anstellte. Das Terrain der Insel ist bemerkenswert vielfältig und bietet die markanten schwarzen Lavaströme der Sullivan Bay sowie die malerischen Klippen von Puerto Egas. Diese Lavaformationen, die hauptsächlich aus Pahoehoe bestehen, bieten einen Einblick in die jüngste vulkanische Vergangenheit der Region. Santiago war einst stark von eingeführten Arten wie Ziegen und Schweinen betroffen, aber massive Restaurierungsbemühungen haben diese Tiere erfolgreich ausgerottet, sodass sich die einheimische Flora erholen konnte. Heute können Besucher Galapagos-Seebären, Seelöwen und verschiedene Vogelarten entlang der zerklüfteten Küsten beobachten. Der höchste Punkt der Insel erreicht 907 Meter und bietet unterschiedliche Mikroklimata von trockenen Küsten bis zu feuchten Hochlandschaften. Ihre komplexe geologische Struktur und die erfolgreiche ökologische Erholung machen sie zu einem Paradebeispiel für Inselrestaurierung im Pazifik.",
            "facts": [
                "1835 von Charles Darwin während der Reise der HMS Beagle besucht.",
                "Der höchste Punkt der Insel liegt 907 Meter über dem Meeresspiegel.",
                "Sullivan Bay ist bekannt für ihre Pahoehoe-Lavaströme aus dem Jahr 1897.",
                "Im 20. Jahrhundert wurde in Puerto Egas zeitweise Salz abgebaut.",
                "Wilde Ziegen und Schweine wurden bis zum Jahr 2006 erfolgreich ausgerottet.",
                "Die Insel umfasst eine Fläche von etwa 585 Quadratkilometern."
            ]
        },
        "hu": {
            "description": "Santiago-sziget, más néven San Salvador, a Galápagos-szigetcsoport központi tagja, amely gazdag emberi és természeti történelemmel rendelkezik. Híressé tette, hogy 1835-ben Charles Darwin is meglátogatta, ahol kiterjedt megfigyeléseket végzett a helyi vadvilágról és geológiáról. A sziget terepe rendkívül változatos, Sullivan-öböl feltűnő fekete lávafolyásaitól Puerto Egas festői szikláiig terjed. Ezek a lávaformációk, amelyek főként pahoehoe lávából állnak, betekintést nyújtanak a régió közelmúltbeli vulkáni múltjába. Santiagót egykor súlyosan érintették a betelepített fajok, például a kecskék és sertések, de a hatalmas helyreállítási erőfeszítéseknek köszönhetően sikerült ezeket az állatokat kiirtani, lehetővé téve az őshonos flóra regenerálódását. Ma a látogatók galápagosi medvefókákat, oroszlánfókákat és különböző madárfajokat figyelhetnek meg a sziklás partok mentén. A sziget legmagasabb pontja 907 méter, így változatos mikroklímákat kínál a száraz partoktól a párás felföldekig. Összetett geológiai felépítése és sikeres ökológiai helyreállítása a csendes-óceáni szigetek regenerációjának kiváló példájává teszi.",
            "facts": [
                "Charles Darwin 1835-ben látogatta meg a HMS Beagle utazása során.",
                "A sziget legmagasabb pontja 907 méterrel emelkedik a tengerszint fölé.",
                "A Sullivan-öböl az 1897-es pahoehoe lávafolyásairól híres.",
                "A 20. században egy ideig sóbányászat folyt Puerto Egas területén.",
                "A vadkecskéket és sertéseket 2006-ra sikeresen kiirtották a szigetről.",
                "A sziget területe körülbelül 585 négyzetkilométert tesz ki."
            ]
        },
        "ro": {
            "description": "Insula Santiago, cunoscută și sub numele de San Salvador, este o insulă centrală din arhipelagul Galapagos, având o bogată istorie umană și naturală. A fost vizitată în mod celebru de Charles Darwin în 1835, unde acesta a făcut observații extinse asupra faunei și geologiei locale. Terenul insulei este remarcabil de divers, prezentând fluxurile de lavă neagră izbitoare din Sullivan Bay și faleza pitorească din Puerto Egas. Această formațiuni de lavă, compuse în principal din pahoehoe, oferă o fereastră către trecutul vulcanic recent al regiunii. Santiago a fost odată puternic afectată de specii introduse, cum ar fi caprele și porcii, dar eforturile masive de restaurare au eliminat cu succes aceste animale, permițând florei native să se refacă. Astăzi, vizitatorii pot observa foci cu blană de Galapagos, lei de mare și diverse specii de păsări de-a lungul coastelor sale accidentate. Cel mai înalt punct al insulei atinge 907 metri, oferind microclimate variate, de la coaste aride la zone înalte umede. Structura sa geologică complexă și recuperarea ecologică reușită o fac un exemplu de prim rang de restaurare a insulelor din Pacific.",
            "facts": [
                "Vizitată de Charles Darwin în 1835 în timpul călătoriei navei HMS Beagle.",
                "Cel mai înalt punct al insulei atinge 907 metri deasupra nivelului mării.",
                "Sullivan Bay este renumit pentru fluxurile sale de lavă pahoehoe din 1897.",
                "Mineritul de sare a fost practicat la Puerto Egas în secolul al XX-lea.",
                "Caprele și porcii sălbatici au fost eliminați cu succes până în anul 2006.",
                "Insula acoperă o suprafață de aproximativ 585 de kilometri pătrați."
            ]
        }
    })

    # 3. Floreana Island
    items.append({
        "id": "floreana-island-nature-v2",
        "en": {
            "description": "Floreana Island is one of the most historically intriguing islands in the Galapagos, known for its unique human stories and volcanic landscapes. It is home to the famous Post Office Bay, where an 18th-century wooden barrel has served as a functional mail system for whalers and sailors for over two centuries. The topography of the island is defined by ancient volcanic cones, including the 640-meter Cerro Pajas, which supports a lush highland environment. Floreana was the first island in the archipelago to be permanently inhabited, leading to a colorful history of eccentric settlers and mysterious disappearances in the 1930s. Its ecological significance remains high, as it is a nesting site for green sea turtles and host to a small population of Galapagos penguins. The surrounding waters are rich in marine life, making Devils Crown a premier snorkeling destination nearby. Despite the past challenges with introduced species, the island is currently a focus for major rewilding projects aimed at reintroducing locally extinct species like the Floreana giant tortoise. This blend of human drama and natural beauty makes Floreana a standout destination.",
            "facts": [
                "The island was the first in the Galapagos to be permanently inhabited.",
                "Post Office Bay has operated a wooden barrel mail system since 1793.",
                "The highest point is Cerro Pajas, standing at 640 meters high.",
                "Home to a diverse history involving whalers, pirates, and early settlers.",
                "The Devils Crown is a submerged volcanic crater famous for snorkeling.",
                "Total surface area of the island is about 173 square kilometers."
            ]
        },
        "de": {
            "description": "Die Insel Floreana ist eine der historisch faszinierendsten Inseln der Galapagos-Inseln, bekannt für ihre einzigartigen menschlichen Geschichten und vulkanischen Landschaften. Sie beherbergt die berühmte Post Office Bay, in der ein Holzfass aus dem 18. Jahrhundert seit über zwei Jahrhunderten als funktionierendes Postsystem für Walfänger und Seeleute dient. Die Topographie der Insel wird durch alte Vulkankegel bestimmt, darunter der 640 Meter hohe Cerro Pajas, der eine üppige Hochlandumgebung unterstützt. Floreana war die erste dauerhaft bewohnte Insel des Archipels, was zu einer bewegten Geschichte exzentrischer Siedler und mysteriöser Verschwinden in den 1930er Jahren führte. Ihre ökologische Bedeutung ist nach wie vor groß, da sie ein Nistplatz für grüne Meeresschildkröten ist und eine kleine Population von Galapagos-Pinguinen beherbergt. Die umliegenden Gewässer sind reich an Meereslebewesen, was die Teufelskrone zu einem erstklassigen Schnorchelziel in der Nähe macht. Trotz früherer Herausforderungen mit eingeführten Arten steht die Insel derzeit im Fokus großer Rewilding-Projekte, die darauf abzielen, lokal ausgestorbene Arten wie die Floreana-Riesenschildkröte wieder anzusiedeln. Diese Mischung aus menschlichem Drama und natürlicher Schönheit macht Floreana zu einem herausragenden Ziel.",
            "facts": [
                "Die Insel war die erste der Galapagos-Inseln, die dauerhaft bewohnt wurde.",
                "Post Office Bay betreibt seit 1793 ein Postsystem mit einem Holzfass.",
                "Der höchste Punkt ist der Cerro Pajas mit einer Höhe von 640 Metern.",
                "Bekannt für eine bewegte Geschichte mit Walfängern, Piraten und Siedlern.",
                "Die Teufelskrone ist ein versunkener Vulkankrater, ideal zum Schnorcheln.",
                "Die Gesamtfläche der Insel beträgt etwa 173 Quadratkilometer."
            ]
        },
        "hu": {
            "description": "Floreana-sziget a Galápagos-szigetek egyik legtörténelmibb és legérdekesebb tagja, amely egyedülálló emberi történeteiről és vulkáni tájairól ismert. Itt található a híres Post Office-öböl, ahol egy 18. századi fahordó több mint két évszázada funkcionál postai rendszerként a bálnavadászok és tengerészek számára. A sziget domborzatát ősi vulkáni kúpok határozzák meg, köztük a 640 méter magas Cerro Pajas, amely buja felföldi környezetet tart fenn. Floreana volt az első állandóan lakott sziget a szigetcsoportban, ami különc telepesekről és az 1930-as évek rejtélyes eltűnéseiről szóló színes történetekhez vezetett. Ökológiai jelentősége továbbra is nagy, mivel a zöld tengeri teknősök fészkelőhelye, és egy kis galápagosi pingvinpopulációnak is otthont ad. A környező vizek gazdagok a tengeri élővilágban, így a közelben lévő Ördögkorona az egyik legjobb búvárkodási helyszín. A betelepített fajok okozta korábbi kihívások ellenére a sziget jelenleg nagyívű visszavadítási projektek fókuszában áll, amelyek célja a helyileg kihalt fajok, például a floreanai óriásteknős visszatelepítése. Az emberi dráma és a természeti szépség ezen ötvözete Floreanát kiemelkedő úti céllá teszi.",
            "facts": [
                "Ez volt az első állandóan lakott sziget a Galápagos-szigetcsoportban.",
                "A Post Office-öböl 1793 óta működtet egy fahordós postai rendszert.",
                "A sziget legmagasabb pontja a Cerro Pajas, amely 640 méter magas.",
                "Gazdag történelemmel bír, amelyben bálnavadászok és kalózok is szerepelnek.",
                "Az Ördögkorona egy víz alatti vulkáni kráter, amely népszerű búvárhely.",
                "A sziget teljes szárazföldi területe körülbelül 173 négyzetkilométer."
            ]
        },
        "ro": {
            "description": "Insula Floreana este una dintre cele mai intrigante insule din punct de vedere istoric din Galapagos, cunoscută pentru poveștile umane unice și peisajele sale vulcanice. Găzduiește faimosul Post Office Bay, unde un butoi de lemn din secolul al XVIII-lea a servit ca sistem poștal funcțional pentru balenieri și marinari timp de peste două secole. Topografia insulei este definită de conuri vulcanice antice, inclusiv Cerro Pajas de 640 de metri, care susține un mediu luxuriant de munte. Floreana a fost prima insulă din arhipelag care a fost locuită permanent, ducând la o istorie colorată de coloniști excentrici și dispariții misterioase în anii 1930. Semnificația sa ecologică rămâne ridicată, fiind un loc de cuibărit pentru țestoasele marine verzi și gazdă pentru o mică populație de pinguini de Galapagos. Apele înconjurătoare sunt bogate în viață marină, făcând din Devil Crown o destinație de snorkeling de prim rang. În ciuda provocărilor din trecut cu speciile introduse, insula este în prezent focarul unor proiecte majore de reintroducere a speciilor dispărute local, cum ar fi țestoasa uriașă de Floreana. Acest amestec de dramă umană și frumusețe naturală face din Floreana o destinație remarcabilă.",
            "facts": [
                "Insula a fost prima din Galapagos care a fost locuită permanent.",
                "Post Office Bay operează un sistem poștal cu butoi de lemn din 1793.",
                "Cel mai înalt punct este Cerro Pajas, având o înălțime de 640 de metri.",
                "Găzduiește o istorie diversă ce implică balenieri, pirați și coloniști.",
                "Devil Crown este un crater vulcanic submers faimos pentru snorkeling.",
                "Suprafața totală a insulei este de aproximativ 173 de kilometri pătrați."
            ]
        }
    })

    # 4. Gulf of Guayaquil
    items.append({
        "id": "gulf-of-guayaquil-nature-v2",
        "en": {
            "description": "The Gulf of Guayaquil is the largest Pacific inlet along the South American coast, forming a massive and complex estuarine system where the Guayas River meets the ocean. This vast body of water is a vital ecological and economic artery for Ecuador, supporting extensive mangrove forests that provide a nursery for countless marine species. The geography of the gulf is marked by numerous islands, with Puna Island being the largest and most prominent, situated at its mouth. The mix of freshwater from the Andean rivers and saltwater from the Pacific creates a nutrient-rich environment that fuels a diverse range of biodiversity, from dolphins to rare coastal birds. Historically, the gulf has been a crucial hub for maritime trade and shipbuilding since the colonial era, centered around the bustling port of Guayaquil. However, the ecosystem faces modern challenges from industrial runoff and coastal development, making conservation of the wetlands a priority. The unique position of the gulf as a transition zone between the arid Peruvian coast and the humid Choco region adds to the biological importance. It remains a cornerstone of the regional cultural and natural heritage.",
            "facts": [
                "It is the largest inlet on the Pacific coast of South America.",
                "The Guayas River is the primary freshwater source flowing into the gulf.",
                "Puna Island is the largest island within the estuarine system of the gulf.",
                "The gulf spans approximately 230 kilometers at its widest point.",
                "Home to extensive mangrove ecosystems essential for coastal protection.",
                "The port of Guayaquil is the most important economic hub in the region."
            ]
        },
        "de": {
            "description": "Der Golf von Guayaquil ist der größte pazifische Meeresarm entlang der südamerikanischen Küste und bildet ein massives und komplexes Ästuarsystem, in dem der Fluss Guayas auf den Ozean trifft. Dieses riesige Gewässer ist eine lebenswichtige ökologische und wirtschaftliche Arterie für Ecuador und unterstützt ausgedehnte Mangrovenwälder, die als Kinderstube für unzählige Meeresarten dienen. Die Geographie des Golfs ist durch zahlreiche Inseln geprägt, wobei die Insel Puna die größte und prominenteste ist und direkt an seiner Mündung liegt. Die Mischung aus Süßwasser aus den Andenflüssen und Salzwasser aus dem Pazifik schafft eine nährstoffreiche Umgebung, die eine vielfältige Artenvielfalt fördert, von Delfinen bis hin zu seltenen Küstenvögeln. Historisch gesehen war der Golf seit der Kolonialzeit ein entscheidendes Zentrum für den Seehandel und den Schiffbau, konzentriert um den geschäftigen Hafen von Guayaquil. Das Ökosystem steht jedoch vor modernen Herausforderungen durch industrielle Abwässer und Küstenentwicklung, was den Schutz seiner Feuchtgebiete zu einer Priorität macht. Die einzigartige Lage des Golfs als Übergangszone zwischen der trockenen peruanischen Küste und der feuchten Choco-Region trägt zu seiner biologischen Bedeutung bei.",
            "facts": [
                "Größter Meeresarm an der Pazifikküste Südamerikas.",
                "Der Fluss Guayas ist die wichtigste Süßwasserquelle, die in den Golf fließt.",
                "Die Insel Puna ist die größte Insel im Ästuarsystem des Golfs.",
                "An seiner breitesten Stelle ist der Golf etwa 230 Kilometer breit.",
                "Beherbergt ausgedehnte Mangroven-Ökosysteme zum Schutz der Küste.",
                "Der Hafen von Guayaquil ist das wichtigste Wirtschaftszentrum der Region."
            ]
        },
        "hu": {
            "description": "A Guayaquil-öböl Dél-Amerika csendes-óceáni partvidékének legnagyobb öble, amely egy hatalmas és összetett torkolati rendszert alkot, ahol a Guayas-folyó találkozik az óceánnal. Ez a hatalmas víztömeg Ecuador létfontosságú ökológiai és gazdasági ütőere, amely kiterjedt mangroveerdőket tart fenn, melyek számtalan tengeri faj számára biztosítanak bölcsőhelyet. Az öböl földrajzát számos sziget jellemzi, amelyek közül a Puna-sziget a legnagyobb és legjelentősebb, az öböl torkolatánál helyezkedik el. Az andoki folyókból származó édesvíz és a csendes-óceáni sós víz keveredése tápanyagban gazdag környezetet hoz létre, amely a biodiverzitás széles skáláját táplálja, a delfinektől a ritka partmenti madarakig. Történelmileg az öböl a gyarmati korszak óta a tengeri kereskedelem és a hajógyártás kulcsfontosságú központja volt, amelynek középpontjában Guayaquil nyüzsgő kikötője állt. Az ökoszisztéma azonban modern kihívásokkal néz szembe az ipari szennyezés és a partmenti fejlesztések miatt, így vizes élőhelyeinek védelme prioritást élvez. Az öböl egyedülálló elhelyezkedése a száraz perui partvidék és a párás Choco régió közötti átmeneti zónaként tovább növeli biológiai jelentőségét.",
            "facts": [
                "Dél-Amerika csendes-óceáni partvidékének legnagyobb öble.",
                "A Guayas-folyó az öbölbe ömlő elsődleges édesvízforrás.",
                "A Puna-sziget az öböl torkolati rendszerének legnagyobb szigete.",
                "Az öböl legszélesebb pontján körülbelül 230 kilométer kiterjedésű.",
                "Kiterjedt mangrove-ökoszisztémáknak ad otthont, melyek védik a partot.",
                "Guayaquil kikötője a régió legfontosabb gazdasági központja."
            ]
        },
        "ro": {
            "description": "Golful Guayaquil este cea mai mare intrare a Pacificului de-a lungul coastei sud-americane, formând un sistem estuarin masiv și complex unde râul Guayas se întâlnește cu oceanul. Această vastă întindere de apă este o arteră ecologică și economică vitală pentru Ecuador, susținând păduri extinse de mangrove care oferă o pepinieră pentru nenumărate specii marine. Geografia golfului este marcată de numeroase insule, Insula Puna fiind cea mai mare și mai proeminentă, situată la gura sa de vărsare. Amestecul de apă dulce din râurile andine și apă sărată din Pacific creează un mediu bogat în nutrienți care alimentează o gamă diversă de biodiversitate, de la delfini la păsări de coastă rare. Din punct de vedere istoric, golful a fost un centru crucial pentru comerțul maritim și construcția de nave încă din epoca colonială, centrat în jurul portului aglomerat Guayaquil. Cu toate acestea, ecosistemul se confruntă cu provocări moderne din cauza scurgerilor industriale și a dezvoltării costiere, făcând din conservarea zonelor sale umede o prioritate. Poziția unică a golfului ca zonă de tranziție între coasta aridă peruană și regiunea umedă Choco îi sporește importanța biologică.",
            "facts": [
                "Este cel mai mare golf de pe coasta Pacificului a Americii de Sud.",
                "Râul Guayas este principala sursă de apă dulce care se varsă în golf.",
                "Insula Puna este cea mai mare insulă din sistemul estuarin al golfului.",
                "Golful se întinde pe aproximativ 230 de kilometri în cel mai lat punct.",
                "Găzduiește ecosisteme extinse de mangrove esențiale pentru protecția coastei.",
                "Portul Guayaquil este cel mai important centru economic din regiune."
            ]
        }
    })

    # 5. Reventador Volcano
    items.append({
        "id": "ecuador-reventador-relief-v2",
        "en": {
            "description": "Reventador is one of the most active and dynamic volcanoes of Ecuador, located on the eastern edge of the Andes where the mountains meet the Amazon basin. Rising to 3562 meters, it is a complex stratovolcano situated within a large U-shaped caldera that was formed by a massive prehistoric structural collapse. The volcano is notorious for frequent and explosive eruptions, which often send ash clouds high into the atmosphere and lava flows down the rugged flanks. In 2002, a major eruption produced a massive ash plume that traveled nearly 100 kilometers to cover the capital city, Quito, causing significant disruption. Due to the remote location in a dense cloud forest, the activity of the volcano is primarily monitored via satellite and remote sensors. The surrounding landscape is a testament to the raw power of volcanic forces, with scarred slopes and ever-changing topography. Reventador remains in a near-constant state of unrest, making it a critical site for volcanologists studying subduction zone magmatism. The name, which means the exploder in Spanish, perfectly captures the volatile nature and the threat it poses to the surrounding region.",
            "facts": [
                "The volcano stands at an elevation of 3562 meters above sea level.",
                "It is located on the remote eastern slopes of the Ecuadorian Andes.",
                "A major eruption in 2002 deposited significant ash on the city of Quito.",
                "The volcano features a distinct 4-kilometer-wide U-shaped caldera.",
                "Reventador has had at least 19 major eruptive episodes since 1541.",
                "The current eruptive phase has been ongoing since the year 2002."
            ]
        },
        "de": {
            "description": "Der Reventador ist einer der aktivsten und dynamischsten Vulkane Ecuadors und liegt am östlichen Rand der Anden, wo die Berge auf das Amazonasbecken treffen. Mit einer Höhe von 3562 Metern ist er ein komplexer Stratovulkan, der sich in einer großen U-förmigen Caldera befindet, die durch einen massiven prähistorischen Einsturz entstanden ist. Der Vulkan ist berüchtigt für seine häufigen und explosiven Ausbrüche, die oft Aschewolken hoch in die Atmosphäre schleudern und Lavaströme an seinen zerklüfteten Flanken hinabfließen lassen. Im Jahr 2002 erzeugte ein schwerer Ausbruch eine massive Aschewolke, die fast 100 Kilometer weit bis zur Hauptstadt Quito zog und dort erhebliche Störungen verursachte. Aufgrund seiner abgelegenen Lage in einem dichten Nebelwald wird die Aktivität des Vulkans hauptsächlich über Satelliten und Fernsensoren überwacht. Die umgebende Landschaft ist ein Zeugnis für die rohe Kraft vulkanischer Kräfte, mit vernarbten Hängen und einer sich ständig verändernden Topographie. Der Reventador befindet sich in einem fast ständigen Zustand der Unruhe, was ihn zu einem entscheidenden Ort für Vulkanologen macht, die den Magmatismus in Subduktionszonen untersuchen. Sein Name bedeutet auf Spanisch der Explodierende.",
            "facts": [
                "Der Vulkan erreicht eine Höhe von 3562 Metern über dem Meeresspiegel.",
                "Er befindet sich an den abgelegenen Osthängen der ecuadorianischen Anden.",
                "Ein großer Ausbruch im Jahr 2002 bedeckte die Stadt Quito mit Asche.",
                "Der Vulkan besitzt eine markante, 4 Kilometer breite U-förmige Caldera.",
                "Seit 1541 gab es mindestens 19 größere Eruptionsphasen am Reventador.",
                "Die aktuelle Eruptionsphase hält seit dem Jahr 2002 fast kontinuierlich an."
            ]
        },
        "hu": {
            "description": "A Reventador Ecuador egyik legaktívabb és legdinamikusabb vulkánja, az Andok keleti peremén található, ahol a hegység az Amazonas-medencével találkozik. A 3562 méter magas rétegvulkán egy hatalmas, U alakú kalderában helyezkedik el, amely egy őskori szerkezeti összeomlás során jött létre. A vulkán hírhedt gyakori és robbanásos kitöréseiről, amelyek gyakran magasra juttatnak hamufelhőket a légkörbe, lávafolyásai pedig végigfolynak meredek oldalain. 2002-ben egy jelentős kitörés hatalmas hamuoszlopot hozott létre, amely közel 100 kilométert tett meg a fővárosig, Quitóig, jelentős fennakadásokat okozva. Sűrű köderdőben való elszigetelt elhelyezkedése miatt a vulkán tevékenységét elsősorban műholdak és távoli érzékelők segítségével figyelik. A környező táj a vulkáni erők nyers erejének tanúbizonysága, sebhelyes lejtőkkel és folyamatosan változó domborzattal. A Reventador szinte állandó nyugtalanság állapotában van, így a szubdukciós zónák magmatizmusát tanulmányozó vulkanológusok számára kritikus helyszín. Neve spanyolul robbanót jelent, ami tökéletesen tükrözi ingatag természetét.",
            "facts": [
                "A vulkán tengerszint feletti magassága 3562 méter.",
                "Az ecuadori Andok távoli keleti lejtőin helyezkedik el.",
                "Egy 2002-es jelentős kitörés során hamu borította be Quito városát.",
                "A vulkán egy jellegzetes, 4 kilométer széles, U alakú kalderával bír.",
                "A Reventadornak legalább 19 jelentős kitörési szakasza volt 1541 óta.",
                "A jelenlegi kitörési fázis 2002 óta szinte folyamatosan tart."
            ]
        },
        "ro": {
            "description": "Reventador este unul dintre cei mai activi și dinamici vulcani din Ecuador, situat la marginea estică a Anzilor, acolo unde munții se întâlnesc cu bazinul Amazonului. Ridicându-se la 3562 de metri, este un stratovulcan complex situat într-o calderă mare în formă de U, formată de o prăbușire structurală preistorică masivă. Vulcanul este cunoscut pentru erupțiile sale frecvente și explozive, care trimit adesea nori de cenușă sus în atmosferă și fluxuri de lavă pe flancurile sale accidentate. În 2002, o erupție majoră a produs o coloană de cenușă masivă care a parcurs aproape 100 de kilometri până la capitala Quito, provocând perturbări semnificative. Datorită locației sale izolate într-o pădure densă de nori, activitatea vulcanului este monitorizată în principal prin satelit și senzori la distanță. Peisajul înconjurător este o mărturie a puterii brute a forțelor vulcanice, cu pante cicatrizate și o topografie în continuă schimbare. Reventador rămâne într-o stare de neliniște aproape constantă, fiind un sit critic pentru vulcanologii care studiază magmatismul zonelor de subducție. Numele său înseamnă cel care explodează în spaniolă.",
            "facts": [
                "Vulcanul se află la o altitudine de 3562 de metri deasupra mării.",
                "Este situat pe pantele estice îndepărtate ale Anzilor equatorieni.",
                "O erupție majoră în 2002 a depus cenușă semnificativă peste orașul Quito.",
                "Vulcanul prezintă o calderă distinctă în formă de U, lată de 4 kilometri.",
                "Reventador a avut cel puțin 19 episoade eruptive majore începând cu 1541.",
                "Faza eruptivă actuală a început în anul 2002 și continuă în prezent."
            ]
        }
    })

    # 6. Carihuairazo
    items.append({
        "id": "ecuador-carihuairazo-relief-v2",
        "en": {
            "description": "Carihuairazo is an extinct stratovolcano located in the Western Cordillera of the Ecuadorian Andes, standing just 10 kilometers away from its much taller neighbor, Chimborazo. Reaching an elevation of 5018 meters, it features a heavily eroded summit with three main peaks: Josefina, Mocha, and the highest, Central. Historically, the mountain was once covered by a massive ice cap, but in recent decades, the glaciers have experienced dramatic retreat due to climate change, losing over 90% of the mass since the mid-20th century. The name of the mountain is believed to originate from the Kichwa words for man and snow, reflecting the traditional role in local indigenous mythology as the husband of Chimborazo. Carihuairazo is a popular destination for hikers and climbers seeking to acclimatize before attempting higher peaks, offering spectacular views of the surrounding volcanic avenue. The terrain around the base is dominated by high-altitude paramo grasslands, which are critical for water regulation in the region. Although the last eruption occurred in ancient times, the volcano remains a significant landmark within the Chimborazo Faunal Production Reserve.",
            "facts": [
                "Stands at an elevation of 5018 meters in the Western Cordillera.",
                "Located only 10 kilometers north of the massive Chimborazo volcano.",
                "The summit consists of three eroded peaks: Central, Mocha, and Josefina.",
                "Glaciers on the mountain have retreated by more than 90% since 1950.",
                "Part of the Chimborazo Faunal Production Reserve established in 1987.",
                "The last major volcanic activity occurred in the distant Pleistocene epoch."
            ]
        },
        "de": {
            "description": "Der Carihuairazo ist ein erloschener Stratovulkan in der Westkordillere der ecuadorianischen Anden, nur 10 Kilometer von seinem viel höheren Nachbarn Chimborazo entfernt. Mit einer Höhe von 5018 Metern besitzt er einen stark erodierten Gipfel mit drei Hauptspitzen: Josefina, Mocha und der höchsten Spitze, Central. Historisch gesehen war der Berg einst von einer massiven Eiskappe bedeckt, aber in den letzten Jahrzehnten sind seine Gletscher aufgrund des Klimawandels dramatisch zurückgegangen und haben seit Mitte des 20. Jahrhunderts über 90 % ihrer Masse verloren. Der Name des Berges stammt vermutlich von den Kichwa-Wörtern für Mann und Schnee ab, was seine traditionelle Rolle in der lokalen indigenen Mythologie als Ehemann des Chimborazo widerspiegelt. Der Carihuairazo ist ein beliebtes Ziel für Wanderer und Bergsteiger, die sich akklimatisieren möchten, bevor sie höhere Gipfel in Angriff nehmen. Das Gelände um die Basis wird von Hochland-Paramo-Grasland dominiert, das für die Wasserregulierung in der Region entscheidend ist. Obwohl sein letzter Ausbruch in antiken Zeiten stattfand, bleibt der Vulkan ein bedeutendes Wahrzeichen innerhalb des Chimborazo-Wildreservats.",
            "facts": [
                "Erreicht eine Höhe von 5018 Metern in der Westkordillere der Anden.",
                "Liegt nur 10 Kilometer nördlich des massiven Vulkans Chimborazo.",
                "Der Gipfel besteht aus drei erodierten Spitzen: Central, Mocha und Josefina.",
                "Die Gletscher am Berg sind seit 1950 um mehr als 90 % zurückgegangen.",
                "Teil des 1987 gegründeten Wildreservats Reserva de Producción Faunística Chimborazo.",
                "Die letzte größere vulkanische Aktivität fand im fernen Pleistozän statt."
            ]
        },
        "hu": {
            "description": "A Carihuairazo egy kialudt rétegvulkán az ecuadori Andok nyugati kordillerájában, mindössze 10 kilométerre magasabb szomszédjától, a Chimborazótól. Az 5018 méteres magasságot elérő hegy csúcsa erősen erodált, három fő csúccsal rendelkezik: a Josefina, a Mocha és a legmagasabb, a Central. Történelmileg a hegyet egykor hatalmas jégsapka borította, de az elmúlt évtizedekben gleccserei a klímaváltozás miatt drasztikusan visszahúzódtak, a 20. század közepe óta tömegük több mint 90%-át elveszítették. A hegy neve vélhetően a kecsua férfi és hó szavakból ered, tükrözve a helyi őslakos mitológiában betöltött szerepét, mint a Chimborazo férje. A Carihuairazo népszerű célpont a túrázók és hegymászók körében, akik magasabb csúcsok megmászása előtt szeretnének akklimatizálódni. A hegy lábánál elhelyezkedő terepet a magashegyi paramo füves puszták uralják, amelyek kritikusak a régió vízszabályozása szempontjából. Bár utolsó kitörése az ősidőkben történt, a vulkán továbbra is jelentős tájékozódási pont a Chimborazo Állatvilági Rezervátumon belül.",
            "facts": [
                "A nyugati kordillerában található, magassága 5018 méter.",
                "Mindössze 10 kilométerre északra fekszik a hatalmas Chimborazo vulkántól.",
                "A csúcs három erodált pontból áll: Central, Mocha és Josefina.",
                "A hegy gleccserei több mint 90%-kal húzódtak vissza 1950 óta.",
                "Az 1987-ben alapított Chimborazo Állatvilági Rezervátum része.",
                "Az utolsó jelentős vulkáni tevékenység a távoli pleisztocén korban történt."
            ]
        },
        "ro": {
            "description": "Carihuairazo este un stratovulcan stins situat în Cordiliera Occidentală a Anzilor equatorieni, la doar 10 kilometri distanță de vecinul său mult mai înalt, Chimborazo. Atingând o altitudine de 5018 metri, prezintă un vârf puternic erodat, cu trei vârfuri principale: Josefina, Mocha și cel mai înalt, Central. Din punct de vedere istoric, muntele a fost odată acoperit de o calotă masivă de gheață, dar în ultimele decenii, ghețarii săi au cunoscut o retragere dramatică din cauza schimbărilor climatice, pierzând peste 90% din masa lor de la mijlocul secolului al XX-lea. Se crede că numele muntelui provine din cuvintele Kichwa pentru bărbat și zăpadă, reflectând rolul tradițional în mitologia indigenă locală ca soț al lui Chimborazo. Carihuairazo este o destinație populară pentru drumeți și alpiniști care doresc să se aclimatizeze înainte de a încerca vârfuri mai înalte, oferind vederi spectaculoase asupra bulevardului vulcanic. Terenul din jurul bazei este dominat de pajiști paramo de mare altitudine, care sunt critice pentru reglarea apei în regiune. Deși ultima sa erupție a avut loc în timpuri antice, vulcanul rămâne un reper semnificativ în Rezervația Chimborazo.",
            "facts": [
                "Se ridică la o altitudine de 5018 metri în Cordiliera Occidentală.",
                "Situat la numai 10 kilometri nord de masivul vulcan Chimborazo.",
                "Vârful este format din trei culmi erodate: Central, Mocha și Josefina.",
                "Ghețarii de pe munte s-au retras cu peste 90% începând din 1950.",
                "Face parte din Rezervația Chimborazo, înființată oficial în 1987.",
                "Ultima activitate vulcanică majoră a avut loc în epoca îndepărtată pleistocen."
            ]
        }
    })

    # 7. Sincholagua
    items.append({
        "id": "ecuador-sincholagua-relief-v2",
        "en": {
            "description": "Sincholagua is an extinct stratovolcano located in the Eastern Cordillera of the Ecuadorian Andes, approximately 17 kilometers northeast of the famous Cotopaxi volcano. Reaching an altitude of 4893 meters, it is characterized by the sharp, jagged peak and steep rocky ridges, which distinguish it from the smoother slopes of the younger neighbors. The mountain is an ancient volcanic structure that has been heavily shaped by glacial erosion over millennia, resulting in the dramatic and alpine-like appearance. It serves as the primary source of the Pita River, which is a vital water resource for the surrounding agricultural areas and the city of Quito. Historically, Sincholagua was first successfully climbed by the British explorer Edward Whymper in 1880. The area around the volcano is part of the Cotopaxi National Park buffer zone and is home to iconic Andean wildlife, including condors and deer. Climbing Sincholagua is considered a technical challenge compared to other nearby peaks due to the crumbling rock and steep exposure. The position offers one of the best vantage points to observe the symmetrical cone of Cotopaxi and the vast high-altitude plains of the paramo.",
            "facts": [
                "The summit of Sincholagua reaches an elevation of 4893 meters.",
                "Located about 17 kilometers to the northeast of Cotopaxi volcano.",
                "First recorded ascent was made by Edward Whymper in the year 1880.",
                "The mountain serves as the headwaters for the significant Pita River.",
                "The peak is characterized by extreme glacial erosion and sharp ridges.",
                "It is considered an extinct volcano with no historical eruptive activity."
            ]
        },
        "de": {
            "description": "Der Sincholagua ist ein erloschener Stratovulkan in der Ostkordillere der ecuadorianischen Anden, etwa 17 Kilometer nordöstlich des berühmten Vulkans Cotopaxi. Mit einer Höhe von 4893 Metern zeichnet er sich durch seinen scharfen, gezackten Gipfel und steile Felsrücken aus, die ihn von den glatteren Hängen seiner jüngeren Nachbarn unterscheiden. Der Berg ist eine alte vulkanische Struktur, die über Jahrtausende stark durch Gletschererosion geformt wurde, was zu seinem dramatischen und alpin anmutenden Aussehen geführt hat. Er dient als Hauptquelle des Flusses Pita, der eine lebenswichtige Wasserquelle für die umliegenden landwirtschaftlichen Gebiete und die Stadt Quito darstellt. Historisch gesehen wurde der Sincholagua erstmals 1880 vom britischen Entdecker Edward Whymper erfolgreich bestiegen. Das Gebiet um den Vulkan gehört zur Pufferzone des Cotopaxi-Nationalparks und beherbergt ikonische andine Wildtiere wie Kondore und Hirsche. Die Besteigung des Sincholagua gilt aufgrund des bröckeligen Gesteins und der steilen Lage als technische Herausforderung. Seine Position bietet einen der besten Aussichtspunkte, um den symmetrischen Kegel des Cotopaxi zu beobachten.",
            "facts": [
                "Der Gipfel des Sincholagua erreicht eine Höhe von 4893 Metern.",
                "Liegt etwa 17 Kilometer nordöstlich des Vulkans Cotopaxi.",
                "Die erste dokumentierte Besteigung erfolgte durch Edward Whymper im Jahr 1880.",
                "Der Berg bildet das Quellgebiet für den bedeutenden Fluss Pita.",
                "Der Gipfel ist durch extreme Gletschererosion und scharfe Grate geprägt.",
                "Er gilt als erloschener Vulkan ohne historisch belegte Ausbrüche."
            ]
        },
        "hu": {
            "description": "A Sincholagua egy kialudt rétegvulkán az ecuadori Andok keleti kordillerájában, körülbelül 17 kilométerre északkeletre a híres Cotopaxi vulkántól. 4893 méteres magasságával éles, csipkézett csúcsa és meredek sziklás gerincei jellemzik, amelyek megkülönböztetik fiatalabb szomszédai simább lejtőitől. A hegy egy ősi vulkáni szerkezet, amelyet évezredek alatt a gleccsererózió formált, eredményezve drámai, alpesi jellegű megjelenését. A Sincholagua a Pita-folyó elsődleges forrásaként szolgál, amely létfontosságú vízkészlet a környező mezőgazdasági területek és Quito városa számára. Történelmileg Sincholaguát először a brit felfedező, Edward Whymper mászta meg sikeresen 1880-ban. A vulkán környéke a Cotopaxi Nemzeti Park pufferzónájának része, és olyan ikonikus andoki vadvilágnak ad otthont, mint a kondorok és a szarvasok. A Sincholagua megmászása technikai kihívásnak számít a közeli csúcsokhoz képest a morzsolódó kőzetek és a meredek szakaszok miatt. Elhelyezkedése az egyik legjobb kilátópontot kínálja a Cotopaxi szimmetrikus kúpjának és a magashegyi paramo pusztáinak megfigyeléséhez.",
            "facts": [
                "A Sincholagua csúcsa 4893 méteres magasságba emelkedik.",
                "Körülbelül 17 kilométerre északkeletre fekszik a Cotopaxi vulkántól.",
                "Az első feljegyzett megmászást Edward Whymper hajtotta végre 1880-ban.",
                "A hegy a jelentős Pita-folyó vízgyűjtő területének forrása.",
                "A csúcsot extrém gleccsererózió és éles gerincek jellemzik.",
                "Kialudt vulkánnak tekintik, amelynek nincs történelmi kitörési tevékenysége."
            ]
        },
        "ro": {
            "description": "Sincholagua este un stratovulcan stins situat în Cordiliera Orientală a Anzilor equatorieni, la aproximativ 17 kilometri nord-est de faimosul vulcan Cotopaxi. Atingând o altitudine de 4893 de metri, se caracterizează prin vârful său ascuțit, zimțat și crestele stâncoase abrupte, care îl disting de pantele mai netede ale vecinilor săi mai tineri. Muntele este o structură vulcanică antică ce a fost puternic modelată de eroziunea glaciară de-a lungul mileniilor, rezultând aspectul său dramatic și alpin. Servește ca sursă principală a râului Pita, care este o resursă vitală de apă pentru zonele agricole înconjurătoare și pentru orașul Quito. Din punct de vedere istoric, Sincholagua a fost escaladat pentru prima dată cu succes de exploratorul britanic Edward Whymper în 1880. Zona din jurul vulcanului face parte din zona tampon a Parcului Național Cotopaxi și găzduiește fauna sălbatică iconică a Anzilor, inclusiv condori și cerbi. Escaladarea Sincholagua este considerată o provocare tehnică în comparație cu alte vârfuri din apropiere din cauza rocii sfărâmicioase și expunerii abrupte. Poziția sa oferă unul dintre cele mai bune puncte de observație pentru conul simetric al Cotopaxi.",
            "facts": [
                "Vârful Sincholagua atinge o altitudine de 4893 de metri.",
                "Situat la aproximativ 17 kilometri spre nord-est de vulcanul Cotopaxi.",
                "Prima ascensiune înregistrată a fost făcută de Edward Whymper în anul 1880.",
                "Muntele servește ca izvoare pentru importantul râu Pita.",
                "Vârful este caracterizat de o eroziune glaciară extremă și creste ascuțite.",
                "Este considerat un vulcan stins, fără activitate eruptivă istorică."
            ]
        }
    })

    # 8. Corazón Volcano
    items.append({
        "id": "ecuador-corazon-relief-v2",
        "en": {
            "description": "Corazon is an extinct stratovolcano located in the Western Cordillera of the Andes, approximately 30 kilometers south of Quito. Reaching an elevation of 4790 meters, the mountain is named after the heart-like appearance when viewed from certain western angles. The volcano has been inactive for approximately 12,000 years, and the slopes are now heavily eroded, revealing a series of deep ravines and rocky outcrops. Corazon is a popular destination for hikers due to the proximity to the capital and the relatively accessible trails, which pass through beautiful paramo landscapes filled with unique Andean flora. Historically, the French Geodesic Mission visited the mountain in the 18th century to conduct measurements of the circumference of the Earth. Near the base of the volcano, there are archaeological remains known as Pucara, which were pre-Inca defensive structures. The climb to the summit provides stunning panoramic views of the Avenue of the Volcanoes, including the nearby Illinizas and Cotopaxi. The ecology of the mountain is characterized by high-altitude grasslands that support a variety of bird species and local livestock. The geological stability and scenic beauty make it a cornerstone of the regional landscape.",
            "facts": [
                "The volcano stands at an elevation of 4790 meters above sea level.",
                "Located in the Western Cordillera, about 30 kilometers south of Quito.",
                "The name Corazon means heart in Spanish, due to the summit shape.",
                "Has been dormant for over 12,000 years with no recent activity.",
                "Archaeological ruins of Pucara fortresses are located near the base.",
                "Features as a primary acclimatization peak for Andean mountaineers."
            ]
        },
        "de": {
            "description": "Der Corazón ist ein erloschener Stratovulkan in der Westkordillere der Anden, etwa 30 Kilometer südlich von Quito. Mit einer Höhe von 4790 Metern ist der Berg nach seinem herzförmigen Aussehen benannt, wenn man ihn aus bestimmten westlichen Winkeln betrachtet. Der Vulkan ist seit etwa 12.000 Jahren inaktiv, und seine Hänge sind heute stark erodiert, was eine Reihe tiefer Schluchten und Felsvorsprünge offenbart. Der Corazón ist aufgrund seiner Nähe zur Hauptstadt und seiner relativ zugänglichen Wanderwege, die durch wunderschöne Paramo-Landschaften führen, ein beliebtes Ziel für Wanderer. Historisch gesehen besuchte die Französische Geodätische Mission den Berg im 18. Jahrhundert, um Messungen des Erdumfangs durchzuführen. In der Nähe der Basis des Vulkans befinden sich archäologische Überreste, die als Pucará bekannt sind und prä-inkaische Verteidigungsstrukturen waren. Der Aufstieg zum Gipfel bietet atemberaubende Panoramablicke auf die Straße der Vulkane, einschließlich der nahe gelegenen Illinizas und des Cotopaxi. Die Ökologie des Berges ist durch Hochland-Grasland geprägt, das eine Vielzahl von Vogelarten unterstützt. Seine geologische Stabilität und landschaftliche Schönheit machen ihn zu einem Eckpfeiler der regionalen Landschaft.",
            "facts": [
                "Der Vulkan erreicht eine Höhe von 4790 Metern über dem Meeresspiegel.",
                "Liegt in der Westkordillere, etwa 30 Kilometer südlich von Quito.",
                "Der Name Corazon bedeutet auf Spanisch Herz, aufgrund der Gipfelform.",
                "Ist seit über 12.000 Jahren erloschen und weist keine Aktivität auf.",
                "Archäologische Ruinen von Pucara-Festungen befinden sich an seiner Basis.",
                "Dient als wichtiger Akklimatisierungsgipfel für Bergsteiger in den Anden."
            ]
        },
        "hu": {
            "description": "A Corazón egy kialudt rétegvulkán az Andok nyugati kordillerájában, körülbelül 30 kilométerre délre Quitótól. A 4790 méteres magasságot elérő hegy a nevét szív alakú megjelenéséről kapta, amely bizonyos nyugati szögekből nézve rajzolódik ki. A vulkán körülbelül 12 000 éve inaktív, lejtői ma már erősen erodáltak, mély szakadékok és sziklás vonulatok sorát tárva fel. A Corazón népszerű célpont a túrázók körében a fővároshoz való közelsége és viszonylag könnyen járható ösvényei miatt, amelyek gyönyörű, egyedülálló andoki flórával teli paramo tájakon vezetnek keresztül. Történelmileg a francia geodéziai misszió látogatta meg a hegyet a 18. században, hogy méréseket végezzen a Föld kerületével kapcsolatban. A vulkán lábánál Pucará néven ismert régészeti maradványok találhatók, amelyek az inkák előtti védelmi építmények voltak. A csúcsra való feljutás lenyűgöző panorámát nyújt a Vulkánok útjára, beleértve a közeli Illinizast és a Cotopaxit. A hegy ökológiáját a magashegyi füves puszták jellemzik, amelyek számos madárfajnak és helyi állatállománynak adnak otthont. Geológiai stabilitása és festői szépsége a régió tájképének egyik alapkövévé teszi.",
            "facts": [
                "A vulkán tengerszint feletti magassága 4790 méter.",
                "A nyugati kordillerában található, mintegy 30 kilométerre Quitótól.",
                "A Corazon név spanyolul szívet jelent, a csúcs alakjára utalva.",
                "Több mint 12 000 éve szunnyad, azóta nem mutatott aktivitást.",
                "Az inkák előtti Pucara erődök régészeti maradványai találhatók a lábánál.",
                "Az andoki hegymászók egyik elsődleges akklimatizációs csúcsa."
            ]
        },
        "ro": {
            "description": "Corazón este un stratovulcan stins situat în Cordiliera Occidentală a Anzilor, la aproximativ 30 de kilometri sud de Quito. Atingând o altitudine de 4790 de metri, muntele este numit după aspectul său asemănător unei inimi atunci când este privit din anumite unghiuri vestice. Vulcanul a fost inactiv timp de aproximativ 12.000 de ani, iar pantele sale sunt acum puternic erodate, dezvăluind o serie de ravene adânci și aflorimente stâncoase. Corazón este o destinație populară pentru drumeți datorită proximității sale față de capitală și traseelor sale relativ accesibile, care trec prin peisaje frumoase de paramo. Din punct de vedere istoric, Misiunea Geodezică Franceză a vizitat muntele în secolul al XVIII-lea pentru a efectua măsurători ale circumferinței Pământului. Lângă baza vulcanului există vestigii arheologice cunoscute sub numele de Pucará, care au fost structuri defensive pre-incașe. Urcarea spre vârf oferă vederi panoramice uimitoare ale Bulevardului Vulcanilor, inclusiv asupra vulcanilor Illinizas și Cotopaxi. Ecologia muntelui este caracterizată de pajiști de mare altitudine care susțin o varietate de specii de păsări. Stabilitatea sa geologică și frumusețea pitorească îl fac un punct de referință al peisajului regional.",
            "facts": [
                "Vulcanul se ridică la o altitudine de 4790 de metri deasupra mării.",
                "Situat în Cordiliera Occidentală, la circa 30 de kilometri sud de Quito.",
                "Numele Corazon înseamnă inimă în spaniolă, datorită formei vârfului.",
                "A fost inactiv timp de peste 12.000 de ani, fără activitate recentă.",
                "Ruine arheologice ale fortărețelor Pucara se află lângă baza sa.",
                "Servește ca vârf primar de aclimatizare pentru alpiniștii andini."
            ]
        }
    })

    # 9. Rumiñahui Volcano
    items.append({
        "id": "ecuador-ruminahui-relief-v2",
        "en": {
            "description": "Ruminahui is a majestic, extinct stratovolcano located within the Cotopaxi National Park, approximately 40 kilometers south of Quito. Reaching a peak elevation of 4721 meters, the mountain is named after a famous Incan general who led the resistance against the Spanish conquest. The volcano consists of three distinct peaks: the North Peak (the highest), the Central Peak, and the South Peak, which together form a rugged and impressive silhouette against the Andean sky. Ruminahui is not a single cone but rather a complex volcanic massif that has been deeply eroded by glaciers and weather over millions of years. The slopes are covered in golden paramo grass and are home to diverse high-altitude wildlife, including wild horses, Andean gulls, and the elusive spectacled bear. The mountain serves as a popular destination for hikers and climbers, offering challenging scrambles and some of the most spectacular views of the nearby Cotopaxi volcano across the Limpiopungo plains. Geologically, it is part of the older volcanic formations of the region, having been inactive for thousands of years. The cultural significance and stunning natural beauty make it a vital part of the protected highland landscapes of Ecuador.",
            "facts": [
                "The highest point, the North Peak, reaches 4721 meters in elevation.",
                "Named after the Incan general Ruminahui, meaning Stone Face in Kichwa.",
                "Located within the boundaries of the Cotopaxi National Park.",
                "Consists of three distinct summits known as North, Central, and South peaks.",
                "The mountain is considered extinct with no recorded historical eruptions.",
                "Situated approximately 40 kilometers to the south of the capital, Quito."
            ]
        },
        "de": {
            "description": "Der Rumiñahui ist ein majestätischer, erloschener Stratovulkan im Cotopaxi-Nationalpark, etwa 40 Kilometer südlich von Quito. Mit einer Gipfelhöhe von 4721 Metern ist der Berg nach einem berühmten Inka-General benannt, der den Widerstand gegen die spanische Eroberung anführte. Der Vulkan besteht aus drei verschiedenen Gipfeln: dem Nordgipfel (dem höchsten), dem Mittelgipfel und dem Südgipfel, die zusammen eine zerklüftete und beeindruckende Silhouette gegen den Andenhimmel bilden. Der Rumiñahui ist kein einzelner Kegel, sondern ein komplexes vulkanisches Massiv, das über Millionen von Jahren tief durch Gletscher und Witterung erodiert wurde. Seine Hänge sind mit goldenem Paramo-Gras unterlegt und beherbergen eine vielfältige Hochlandfauna, darunter Wildpferde und Andenmöwen. Der Berg ist ein beliebtes Ziel für Wanderer und Bergsteiger und bietet einige der spektakulärsten Ausblicke auf den nahe gelegenen Vulkan Cotopaxi über die Limpiopungo-Ebene. Geologisch gesehen gehört er zu den älteren vulkanischen Formationen der Region und ist seit Jahrtausenden inaktiv. Seine kulturelle Bedeutung und seine atemberaubende natürliche Schönheit machen ihn zu einem wichtigen Teil der geschützten Hochlandlandschaften Ecuadors.",
            "facts": [
                "Der höchste Punkt, der Nordgipfel, erreicht eine Höhe von 4721 Metern.",
                "Benannt nach dem Inka-General Ruminahui, was auf Kichwa Steingesicht bedeutet.",
                "Befindet sich innerhalb der Grenzen des Cotopaxi-Nationalparks.",
                "Besteht aus drei markanten Gipfeln: Nord-, Mittel- und Südgipfel.",
                "Der Berg gilt als erloschen und weist keine historischen Ausbrüche auf.",
                "Liegt etwa 40 Kilometer südlich der ecuadorianischen Hauptstadt Quito."
            ]
        },
        "hu": {
            "description": "A Rumiñahui egy fenséges, kialudt rétegvulkán a Cotopaxi Nemzeti Parkban, Quitótól körülbelül 40 kilométerre délre. A 4721 méteres magasságot elérő hegyet egy híres inka tábornokról nevezték el, aki a spanyol hódítás elleni ellenállást vezette. A vulkán három különálló csúcsból áll: az északi (a legmagasabb), a középső és a déli csúcsból, amelyek együtt zord és lenyűgöző sziluettet alkotnak az andoki égbolton. A Rumiñahui nem egyetlen kúp, hanem egy összetett vulkáni masszívum, amelyet a gleccserek és az időjárás évezredek alatt mélyen erodáltak. Lejtőit aranyló paramo fű borítja, és változatos magashegyi vadvilágnak ad otthont, beleértve a vadlovakat és az andoki sirályokat. A hegy népszerű célpont a túrázók és hegymászók körében, mivel technikai kihívásokat és látványos kilátást kínál a közeli Cotopaxi vulkánra a Limpiopungo-síkságon keresztül. Geológiailag a régió régebbi vulkáni képződményei közé tartozik, évezredek óta inaktív. Kulturális jelentősége és lenyűgöző természeti szépsége Ecuador védett felföldi tájainak létfontosságú részévé teszi.",
            "facts": [
                "A legmagasabb pont, az északi csúcs, 4721 méter magasságig emelkedik.",
                "Ruminahui inka tábornokról nevezték el, neve kőarcot jelent kecsua nyelven.",
                "A Cotopaxi Nemzeti Park határain belül helyezkedik el.",
                "Három különálló csúcsból áll: északi, középső és déli csúcs.",
                "A hegy kialudtnak tekintendő, feljegyzett történelmi kitörése nincs.",
                "Körülbelül 40 kilométerre délre fekszik a fővárostól, Quitótól."
            ]
        },
        "ro": {
            "description": "Rumiñahui este un stratovulcan maiestuos și stins, situat în Parcul Național Cotopaxi, la aproximativ 40 de kilometri sud de Quito. Atingând o altitudine maximă de 4721 de metri, muntele poartă numele unui celebru general incaș care a condus rezistența împotriva cuceririi spaniole. Vulcanul este format din trei vârfuri distincte: Vârful de Nord (cel mai înalt), Vârful Central și Vârful de Sud, care împreună formează o siluetă accidentată și impresionantă pe cerul andin. Rumiñahui nu este un singur con, ci mai degrabă un masiv vulcanic complex care a fost profund erodat de ghețari și intemperii de-a lungul milioanelor de ani. Pantele sale sunt acoperite de iarbă aurie de paramo și găzduiesc o faună diversă de mare altitudine, inclusiv cai sălbatici și pescăruși andini. Muntele este o destinație populară pentru drumeți, oferind unele dintre cele mai spectaculoase vederi ale vulcanului Cotopaxi peste câmpiile Limpiopungo. Din punct de vedere geologic, face parte din formațiunile vulcanice mai vechi ale regiunii, fiind inactiv de mii de ani. Semnificația sa culturală și frumusețea naturală îl fac o parte vitală a peisajelor protejate din Ecuador.",
            "facts": [
                "Cel mai înalt punct, Vârful de Nord, atinge 4721 de metri înălțime.",
                "Numit după generalul incaș Ruminahui, însemnând față de piatră în Kichwa.",
                "Situat în interiorul granițelor Parcului Național Cotopaxi.",
                "Format din trei culmi distincte cunoscute sub numele de vârfurile Nord, Central și Sud.",
                "Muntele este considerat stins, fără erupții istorice înregistrate.",
                "Situat la aproximativ 40 de kilometri la sud de capitala Quito."
            ]
        }
    })

    # 10. Imbabura Volcano
    items.append({
        "id": "ecuador-imbabura-relief-v2",
        "en": {
            "description": "Imbabura is a prominent stratovolcano located in the northern Andes of Ecuador, overlooking the picturesque town of Otavalo and the deep blue waters of San Pablo Lake. Reaching an elevation of 4630 meters, the mountain is often referred to as Taita Imbabura or Father Imbabura in local indigenous folklore, where it is considered a sacred protector of the region. The volcano is characterized by the massive, somewhat asymmetrical structure and the fertile slopes, which are extensively cultivated by local farming communities. Although it has been inactive for approximately 14,000 years, the geological history is complex, with multiple eruptive phases that have shaped the surrounding valleys. The mountain serves as a crucial hydrological source for the region, feeding the Peguche waterfall and other local springs. Imbabura is a popular site for trekking, offering panoramic views that extend to the nearby Cayambe and Cotacachi volcanoes on clear days. The transition from agricultural land at the base to paramo grasslands near the summit showcases a rich variety of Andean flora. The combination of cultural significance, agricultural importance, and natural majesty makes Imbabura a defining landmark of northern Ecuador.",
            "facts": [
                "The summit of Imbabura reaches an altitude of 4630 meters.",
                "Known as Taita Imbabura, it is a sacred mountain for the Otavalo people.",
                "The volcano has been inactive for an estimated 14,000 years.",
                "Located near the famous indigenous market town of Otavalo.",
                "San Pablo Lake, one of the largest lakes of Ecuador, lies at the southern base.",
                "Serves as the primary source for the sacred Peguche waterfall."
            ]
        },
        "de": {
            "description": "Der Imbabura ist ein prominenter Stratovulkan in den nördlichen Anden Ecuadors und überblickt die malerische Stadt Otavalo sowie die tiefblauen Gewässer des San-Pablo-Sees. Mit einer Höhe von 4630 Metern wird der Berg in der lokalen indigenen Folklore oft als Taita Imbabura oder Vater Imbabura bezeichnet, wo er als heiliger Beschützer der Region gilt. Der Vulkan zeichnet sich durch seine massive, etwas asymmetrische Struktur und seine fruchtbaren Hänge aus, die von lokalen Bauerngemeinschaften intensiv bewirtschaftet werden. Obwohl er seit etwa 14.000 Jahren inaktiv ist, ist seine geologische Geschichte komplex, mit mehreren Eruptionsphasen, die die umliegenden Täler geformt haben. Der Berg dient als wichtige hydrologische Quelle für die Region und speist den Peguche-Wasserfall und andere lokale Quellen. Der Imbabura ist ein beliebter Ort für Wanderungen und bietet an klaren Tagen Panoramablicke bis zu den nahe gelegenen Vulkanen Cayambe und Cotacachi. Der Übergang von landwirtschaftlichen Flächen an der Basis zu Paramo-Grasland in Gipfelnähe zeigt eine reiche Vielfalt an andiner Flora. Seine Kombination aus kultureller Bedeutung und natürlicher Majestät macht den Imbabura zu einem prägenden Wahrzeichen Nordecuadors.",
            "facts": [
                "Der Gipfel des Imbabura erreicht eine Höhe von 4630 Metern.",
                "Bekannt als Taita Imbabura, ist er ein heiliger Berg für das Volk der Otavalo.",
                "Der Vulkan ist seit geschätzten 14.000 Jahren inaktiv.",
                "Befindet sich in der Nähe der berühmten indigenen Marktstadt Otavalo.",
                "Der San-Pablo-See, einer der größten Seen Ecuadors, liegt an seiner Südseite.",
                "Dient als Hauptquelle für den heiligen Wasserfall von Peguche."
            ]
        },
        "hu": {
            "description": "Az Imbabura egy kiemelkedő rétegvulkán Ecuador északi Andokában, amely Otavalo festői városára és a San Pablo-tó mélykék vizére tekint le. A 4630 méteres magasságot elérő hegyet a helyi őslakos folklórban gyakran Taita Imbabura vagy Imbabura apa néven emlegetik, ahol a régió szent védelmezőjének tekintik. A vulkánt hatalmas, kissé aszimmetrikus szerkezete és termékeny lejtői jellemzik, amelyeket a helyi gazdálkodó közösségek intenzíven művelnek. Bár körülbelül 14 000 éve inaktív, geológiai története összetett, több kitörési fázissal, amelyek a környező völgyeket formálták. A hegy döntő hidrológiai forrásként szolgál a régió számára, táplálva a Peguche-vízesést és más helyi forrásokat. Az Imbabura népszerű túrázóhely, tiszta napokon panorámás kilátást nyújt a közeli Cayambe és Cotacachi vulkánokra. Az alapnál található mezőgazdasági területektől a csúcs közeli paramo füves pusztákig tartó átmenet az andoki flóra gazdag változatosságát mutatja be. Kulturális jelentősége, mezőgazdasági fontossága és természeti fensége az Imbaburát Észak-Ecuador meghatározó tájává teszi.",
            "facts": [
                "Az Imbabura csúcsa 4630 méteres magasságot ér el.",
                "A helyiek Taita Imbabura néven ismerik, szent hegy az Otavalo nép számára.",
                "A vulkán a becslések szerint körülbelül 14 000 éve inaktív.",
                "A híres őslakos piaci város, Otavalo közelében található.",
                "A San Pablo-tó, Ecuador egyik legnagyobb tava, a déli lábánál fekszik.",
                "A szent Peguche-vízesés elsődleges forrásaként szolgál."
            ]
        },
        "ro": {
            "description": "Imbabura este un stratovulcan proeminent situat în nordul Anzilor din Ecuador, dominând orașul pitoresc Otavalo și apele albastre adânci ale lacului San Pablo. Atingând o altitudine de 4630 de metri, muntele este adesea numit Taita Imbabura sau Tatăl Imbabura în folclorul indigen local, unde este considerat un protector sacru al regiunii. Vulcanul se caracterizează prin structura sa masivă, oarecum asimetrică, și prin pantele sale fertile, care sunt cultivate intens de comunitățile agricole locale. Deși a fost inactiv timp de aproximativ 14.000 de ani, istoria sa geologică este complexă, cu mai multe faze eruptive care au modelat văile înconjurătoare. Muntele servește ca o sursă hidrologică crucială pentru regiune, alimentând cascada Peguche și alte izvoare locale. Imbabura este un sit popular pentru trekking, oferind vederi panoramice care se extind până la vulcanii Cayambe și Cotacachi în zilele senine. Tranziția de la terenul agricol de la bază la pajiștile de paramo de lângă vârf prezintă o varietate bogată de floră andină. Combinația sa de semnificație culturală, importanță agricolă și maiestate naturală face din Imbabura un punct de referință definitoriu al nordului Ecuadorului.",
            "facts": [
                "Vârful Imbabura atinge o altitudine de 4630 de metri.",
                "Cunoscut sub numele de Taita Imbabura, este un munte sacru pentru poporul Otavalo.",
                "Vulcanul a fost inactiv pentru o perioadă estimată de 14.000 de ani.",
                "Situat lângă faimosul oraș cu piață indigenă Otavalo.",
                "Lacul San Pablo, unul dintre cele mai mari lacuri din Ecuador, se află la baza sa sudică.",
                "Servește ca sursă principală pentru cascada sacră Peguche."
            ]
        }
    })

    return items

def main():
    items = get_content()
    # Flatten into the requested format: single JSON array containing 40 objects
    final_output = []
    for item in items:
        for lang in ['de', 'hu', 'ro', 'en']:
            final_output.append({
                "id": item["id"],
                "lang": lang,
                "descriptionAdvanced": item[lang]["description"],
                "factsAdvanced": item[lang]["facts"]
            })
    
    print(json.dumps(final_output, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
