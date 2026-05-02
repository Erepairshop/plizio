import type { POI } from "./poi";

export const spainCountry: POI[] = [
  {
    id: "ES",
    type: "country",
    parent: "EU",
    coords: [-3.7, 40.4],
    name: {"de": "Spanien", "hu": "Spanyolország", "ro": "Spania", "en": "Spain"},
    image: "/geo-images/spain/spain.webp",
    description: {
      de: "Spanien ist ein Land auf der Iberischen Halbinsel, bekannt für seine vielfältige Kultur, sonnige Strände, leidenschaftlichen Flamenco und eine reiche imperiale Geschichte.",
      hu: "Spanyolország az Ibériai-félszigeten fekv�? ország, amely változatos kultúrájáról, napsütötte strandjairól, szenvedélyes flamencójáról és gazdag császári történelmér�?l ismert.",
      ro: "Spania este o �?ar�? din Peninsula Iberic�?, cunoscut�? pentru cultura sa divers�?, plajele însorite, flamenco-ul pasional �?i o bogat�? istorie imperial�?.",
      en: "Spain is a country on the Iberian Peninsula, known for its diverse culture, sunny beaches, passionate flamenco, and a rich imperial history."
    },
    descriptionAdvanced: {
      de: "Spanien, offiziell das Königreich Spanien, ist ein faszinierendes Land im Südwesten Europas, das den grö�?ten Teil der Iberischen Halbinsel einnimmt. Es grenzt im Norden an Frankreich und Andorra, im Westen an Portugal und ist ansonsten vom Atlantik und dem Mittelmeer umgeben. Spanien ist weltberühmt für seine au�?ergewöhnliche kulturelle Vielfalt, die sich in den verschiedenen autonomen Gemeinschaften wie Katalonien, dem Baskenland und Andalusien widerspiegelt. Die Hauptstadt Madrid ist ein pulsierendes Zentrum für Kunst und Politik, beherbergt erstklassige Museen wie den Prado und beeindruckt durch ihre monumentale Architektur. Barcelona hingegen besticht durch den einzigartigen Modernismus von Antoni Gaudí und seine lebendige Atmosphäre am Meer. Die spanische Geschichte ist geprägt von der römischen Antike, der maurischen Herrschaft im Mittelalter und dem Zeitalter der Entdeckungen, als Spanien zu einer globalen Weltmacht aufstieg. Kulturell hat das Land Giganten wie Cervantes, Velázquez, Goya und Picasso hervorgebracht. Kulinarisch ist Spanien eine Weltmacht; Tapas, Paella und erstklassige Weine aus Regionen wie La Rioja sind globale Botschafter der spanischen Lebensart. Die spanische Lebensfreude drückt sich in leidenschaftlichen Festen, dem Flamenco und einer ausgeprägten sozialen Kultur aus. Heute ist Spanien ein modernes EU-Mitglied mit einer starken Tourismusindustrie und einer wachsenden Wirtschaft in den Bereichen erneuerbare Energien und Technologie. Ob man durch die wei�?en Dörfer Andalusiens wandert, die majestätischen Gipfel der Pyrenäen erkundet oder die Sonne an den Stränden der Balearen und Kanaren genie�?t �?? Spanien empfängt seine Besucher mit einer Wärme und einer landschaftlichen Schönheit, die unvergesslich bleiben.",
      hu: "Spanyolorsz�g egy leny?g�z? orsz�g az Ib�riai-f�lszigeten, amely gazdag t�rt�nelemmel �s soksz�n? kult�r�val rendelkezik. A F�ldk�zi-tenger naps�t�tte strandjait�l a fens�ges Pireneusokig az orsz�g l�legzetel�ll�t� t�jakat k�n�l. A spanyol kult�r�t m�lyen �thatja a r�mai �s a m�r m�lt �r�ks�ge, amely mind az �p�t�szetben, mind a mindennapi �letben megmutatkozik. Gasztron�miailag Spanyolorsz�g vil�gszerte ismert a tapaszokr�l, a paell�r�l �s a kiv�l� min?s�g? borokr�l. A hagyom�nyok �s a modernit�s t�k�letes kever�ke teszi a vil�g egyik legkedveltebb turisztikai c�lpontj�v�.",
      ro: "Spania, oficial Regatul Spaniei, este o �?ar�? fascinant�? din sud-vestul Europei, care ocup�? cea mai mare parte a Peninsulei Iberice. Se învecineaz�? la nord cu Fran�?a �?i Andorra, la vest cu Portugalia �?i este înconjurat�? în rest de Oceanul Atlantic �?i Marea Mediteran�?. Spania este renumit�? în întreaga lume pentru diversitatea sa cultural�? extraordinar�?, reflectat�? în diferitele comunit�?�?i autonome precum Catalonia, �?ara Bascilor �?i Andaluzia. Capitala Madrid este un centru vibrant pentru art�? �?i politic�?, g�?zduind muzee de clas�? mondial�? precum Prado �?i impresionând prin arhitectura sa monumental�?. Barcelona, pe de alt�? parte, farmec�? prin modernismul unic al lui Antoni Gaudí �?i atmosfera sa vibrant�? de la malul m�?rii. Istoria Spaniei este marcat�? de antichitatea roman�?, st�?pânirea maur�? din Evul Mediu �?i Epoca Descoperirilor, când Spania a devenit o putere mondial�? global�?. Din punct de vedere cultural, �?ara a dat na�?tere unor gigan�?i precum Cervantes, Velázquez, Goya �?i Picasso. Din punct de vedere culinar, Spania este o putere mondial�?; tapas, paella �?i vinurile de prim�? clas�? din regiuni precum La Rioja sunt ambasadori globali ai stilului de via�?�? spaniol. Bucuria de a tr�?i a spaniolilor se exprim�? prin festivaluri pasionale, flamenco �?i o cultur�? social�? pronun�?at�?. Ast�?zi, Spania este un membru modern al UE, cu o industrie turistic�? puternic�? �?i o economie în cre�?tere în domeniile energiei regenerabile �?i tehnologiei. Fie c�? v�? plimba�?i prin satele albe din Andaluzia, explora�?i vârfurile maiestuoase ale Pirineilor sau v�? bucura�?i de soare pe plajele din Insulele Baleare �?i Canare �?? Spania î�?i întâmpin�? vizitatorii cu o c�?ldur�? �?i o frumuse�?e peisagistic�? de neuitat.",
      en: "Spain, officially the Kingdom of Spain, is a fascinating country in southwestern Europe, occupying most of the Iberian Peninsula. It borders France and Andorra to the north, Portugal to the west, and is otherwise surrounded by the Atlantic Ocean and the Mediterranean Sea. Spain is world-renowned for its extraordinary cultural diversity, reflected in its various autonomous communities such as Catalonia, the Basque Country, and Andalusia. The capital, Madrid, is a vibrant hub for art and politics, home to world-class museums like the Prado and impressive for its monumental architecture. Barcelona, meanwhile, charms with the unique modernism of Antoni Gaudí and its vibrant seaside atmosphere. Spanish history is shaped by Roman antiquity, Moorish rule in the Middle Ages, and the Age of Discovery, when Spain rose to become a global superpower. Culturally, the country has produced giants such as Cervantes, Velázquez, Goya, and Picasso. Culinarily, Spain is a world power; tapas, paella, and first-class wines from regions like La Rioja are global ambassadors of the Spanish way of life. The Spanish zest for life is expressed in passionate festivals, flamenco, and a strong social culture. Today, Spain is a modern EU member with a strong tourism industry and a growing economy in the fields of renewable energy and technology. Whether strolling through the white villages of Andalusia, exploring the majestic peaks of the Pyrenees, or enjoying the sun on the beaches of the Balearic and Canary Islands�??Spain welcomes its visitors with a warmth and scenic beauty that remain unforgettable."
    },
    facts: {
      de: [
        "Hauptstadt: Madrid",
        "Währung: Euro",
        "Bevölkerung: ca. 48 Millionen",
        "UNESCO: Spanien hat eine der höchsten Anzahlen an Welterbestätten weltweit.",
        "Sprache: Spanisch (Kastilisch) ist die zweithäufigste Muttersprache der Welt.",
        "Kultur: Der Flamenco ist ein von der UNESCO anerkanntes immaterielles Kulturerbe.",
        "Geografie: Spanien ist das einzige Land in Europa, das eine Landgrenze zu einem afrikanischen Land (Marokko) hat.",
        "Kulinarik: Spanien ist der weltweit grö�?te Produzent von Olivenöl.",
        "Geschichte: Das erste moderne Buch, 'Don Quijote', wurde vom Spanier Miguel de Cervantes geschrieben.",
        "Natur: Die Kanarischen Inseln beherbergen den Teide, den höchsten Berg Spaniens und einen der höchsten Vulkane der Welt."
      ],
      hu: [
        "F�?város: Madrid",
        "Pénznem: Euró",
        "Népesség: kb. 48 millió",
        "UNESCO: Spanyolország a világon az egyik legtöbb világörökségi helyszínnel rendelkez�? ország.",
        "Nyelv: A spanyol (kasztíliai) a világ második leggyakoribb anyanyelve.",
        "Kultúra: A flamenco az UNESCO által elismert szellemi kulturális örökség.",
        "Földrajz: Spanyolország az egyetlen európai ország, amelynek szárazföldi határa van afrikai országgal (Marokkó).",
        "Gasztronómia: Spanyolország a világ legnagyobb olívaolaj-termel�?je.",
        "Történelem: Az els�? modern regényt, a 'Don Quijote'-t a spanyol Miguel de Cervantes írta.",
        "Természet: A Kanári-szigeteken található a Teide, Spanyolország legmagasabb hegye és a világ egyik legmagasabb vulkánja."
      ],
      ro: [
        "Capitala: Madrid",
        "Moneda: Euro",
        "Popula�?ie: aprox. 48 milioane",
        "UNESCO: Spania are unul dintre cele mai mari numere de situri din Patrimoniul Mondial la nivel global.",
        "Limb�?: Spaniola (castiliana) este a doua cea mai vorbit�? limb�? matern�? din lume.",
        "Cultur�?: Flamenco este un patrimoniu cultural imaterial recunoscut de UNESCO.",
        "Geografie: Spania este singura �?ar�? din Europa care are o frontier�? terestr�? cu o �?ar�? african�? (Maroc).",
        "Gastronomie: Spania este cel mai mare produc�?tor de ulei de m�?sline din lume.",
        "Istorie: Prima carte modern�?, �??Don Quijote�?�, a fost scris�? de spaniolul Miguel de Cervantes.",
        "Natur�?: Insulele Canare g�?zduiesc Teide, cel mai înalt munte din Spania �?i unul dintre cei mai înal�?i vulcani din lume."
      ],
      en: [
        "Capital: Madrid",
        "Currency: Euro",
        "Population: approx. 48 million",
        "UNESCO: Spain has one of the highest numbers of World Heritage Sites in the world.",
        "Language: Spanish (Castilian) is the second most spoken native language in the world.",
        "Culture: Flamenco is a UNESCO-recognized intangible cultural heritage.",
        "Geography: Spain is the only country in Europe to have a land border with an African country (Morocco).",
        "Cuisine: Spain is the world's largest producer of olive oil.",
        "History: The first modern novel, 'Don Quixote', was written by the Spaniard Miguel de Cervantes.",
        "Nature: The Canary Islands are home to Mount Teide, the highest peak in Spain and one of the highest volcanoes in the world."
      ]
    }
  }
];

export const spainRegions: POI[] = [
  {
    id: "ES-GA",
    type: "region",
    parent: "ES",
    coords: [-8.0, 42.5],
    name: {"de": "Galicien", "hu": "Galícia", "ro": "Galicia", "en": "Galicia"},
    image: "/geo-images/spain/galicia.webp",
    description: {"de": "Autonome Gemeinschaft im Nordwesten Spaniens.", "hu": "Autonóm közösség Spanyolország északnyugati részén.", "ro": "Comunitate autonom�? în nord-vestul Spaniei.", "en": "Autonomous community in northwestern Spain."}, descriptionAdvanced: { de: "", hu: "Gal�cia Spanyolorsz�g leg�szaknyugatibb r�sz�n fekszik, �s zord atlanti partvid�k�r?l, m�ly t�lcs�rtorkolatair�l (r��k) �s buja z�ld t�jair�l ismert. A r�gi�nak er?s kelta �r�ks�ge van, amely visszak�sz�n a hagyom�nyos dud�s (gaitas) zen�ben �s a misztikus helyi legend�kban. A f?v�ros, Santiago de Compostela a h�res El Camino (Szent Jakab-�t) v�g�llom�sa �s a kereszt�ny zar�ndoklatok egyik legfontosabb k�zpontja. Gal�cia vil�gh�r? kiv�l� gasztron�mi�j�r�l, k�l�n�sen a friss tenger gy�m�lcseir?l (mint a polip vagy 'pulpo a feira') �s a finom Albari�o feh�rborr�l.", ro: "", en: "Galicia is an autonomous community in the northwest corner of Spain, distinctly characterized by its lush green landscapes, rugged coastline, and deep r�as (coastal inlets). Unlike the typical sunny image of Spain, Galicia shares a stronger Celtic heritage, which resonates in its traditional music featuring the gaita (bagpipes) and local folklore. The region is famously the ultimate destination of the Camino de Santiago pilgrimage, drawing millions of walkers to its historic capital. Galician cuisine is highly celebrated, particularly for its exceptional seafood sourced from the Atlantic Ocean." }, factsAdvanced: { de: [], hu: [
        "A gal�ciai partvonal (Costa da Morte) az egyik legvesz�lyesebb haj�z�si �tvonal, innen ered a 'Hal�lpart' elnevez�s is.",
        "A r�gi� saj�t nyelvvel rendelkezik, a gal�ciai (galego) nyelv k�zelebbi rokons�gban �ll a portug�llal, mint a spanyollal.",
        "A vil�g egyik legr�gebbi m�ig m?k�d? vil�g�t�tornya, a r�mai kori Herkules-torony A Coru�a v�ros�ban tal�lhat�.",
        "Santiago de Compostela �v�ros�t az UNESCO 1985-ben a Vil�g�r�ks�g r�sz�v� nyilv�n�totta."
      ], ro: [], en: [
        "Galicia's capital is Santiago de Compostela, renowned worldwide for its majestic cathedral.",
        "The region boasts over 1,498 kilometers of coastline along the Atlantic Ocean and the Cantabrian Sea.",
        "Galician (Galego) is spoken by the majority of the population and shares close linguistic ties with Portuguese."
      ] }
  },
  {
    id: "ES-AS",
    type: "region",
    parent: "ES",
    coords: [-6.0, 43.3],
    name: {"de": "Asturien", "hu": "Asztúria", "ro": "Asturia", "en": "Asturias"},
    image: "/geo-images/spain/asturias.webp",
    description: {"de": "Grüne und gebirgige Region im Norden Spaniens.", "hu": "Zöld és hegyvidéki régió �?szak-Spanyolországban.", "ro": "Regiune verde �?i muntoas�? din nordul Spaniei.", "en": "Green and mountainous region in northern Spain."}, descriptionAdvanced: { de: "", hu: "Aszt�ria, amelyet gyakran Spanyolorsz�g 'z�ld paradicsom�nak' is neveznek, meredek sziklafalak �s a Picos de Europa fens�ges hegyvid�k�nek dr�mai kombin�ci�j�val ny?g�z le. Ez volt Spanyolorsz�g egyetlen olyan ter�lete, amelyet a m�rok soha nem h�d�tottak meg teljesen, �gy a kereszt�ny Reconquista t�rt�nelmi kiindul�pontj�nak tekintik. Aszt�ria b�szke m�lyen gy�kerez? hagyom�nyaira, k�zt�k az almabor (sidra) kult�r�j�ra, amelyet a ny�zsg? sidrer��kban �nnepelnek. A f?v�ros, Oviedo csod�latos Karoling-kor el?tti �p�t�szettel vonz, m�g a tengerparti Gij�n hangulatos v�rosi mened�ket k�n�l.", ro: "", en: "Asturias, officially a principality on Spain's northern coast, is a breathtaking region defined by its dramatic Picos de Europa mountain range and scenic Cantabrian Sea coastline. Historically significant as a Christian stronghold during the Moorish conquest, it is often considered the cradle of the Spanish Reconquista. The region has preserved its strong rural traditions and is renowned for its distinct natural cider (sidra) pouring rituals and hearty cuisine. With vast protected natural spaces, Asturias is a haven for nature lovers and outdoor enthusiasts seeking pristine landscapes." }, factsAdvanced: { de: [], hu: [
        "Az aszt�riai Picos de Europa volt Spanyolorsz�g legels? nemzeti parkja, amelyet m�g 1918-ban alap�tottak.",
        "A Covadonga-i csata (722) az Ib�riai-f�lsziget m�r uralom al�li felszabad�t�s�nak (Reconquista) hivatalos kezdet�t jelzi.",
        "Aszt�ri�t Spanyolorsz�g 'sajtf?v�ros�nak' tartj�k, mivel t�bb mint 40 k�l�nb�z?, k�zm?ves sajtfajt�t �ll�tanak el? itt.",
        "A hagyom�nyos aszt�riai almabort k�l�nleges technik�val, magasr�l t�ltik a poh�rba, hogy oxig�nnel d�suljon."
      ], ro: [], en: [
        "The Battle of Covadonga in 722 AD, which took place in Asturias, marked the beginning of the Spanish Reconquista.",
        "About one-third of Asturias's territory is environmentally protected, earning it the nickname 'Natural Paradise'.",
        "Traditional Asturian cider is uniquely poured from a height to aerate the liquid before drinking."
      ] }
  },
  {
    id: "ES-CB",
    type: "region",
    parent: "ES",
    coords: [-4.0, 43.2],
    name: {"de": "Kantabrien", "hu": "Kantábria", "ro": "Cantabria", "en": "Cantabria"},
    image: "/geo-images/spain/cantabria.webp",
    description: {"de": "Region an der Nordküste Spaniens mit reicher prähistorischer Kunst.", "hu": "Régió Spanyolország északi partján, gazdag �?skori művészettel.", "ro": "Regiune pe coasta de nord a Spaniei cu art�? preistoric�? bogat�?.", "en": "Region on the northern coast of Spain with rich prehistoric art."}, descriptionAdvanced: { de: "", hu: "Kant�bria az �szak-spanyol atlanti partvid�ken fekszik, �s eleg�ns strandok, m�ly barlangok, valamint leny?g�z? hegyek leny?g�z? kever�k�t k�n�lja. A f?v�ros, Santander eleg�ns �p�t�szet�vel �s t�gas �bl�vel var�zsol el, amelyet a vil�g egyik legszebbjek�nt tartanak sz�mon. Kant�bria a t�rt�nelem el?tti kutat�k paradicsoma, k�l�n�sen a vil�gh�r? Altamira-barlangnak �s a paleolitikumi festm�nyeinek k�sz�nhet?en. A r�gi� b?velkedik k�z�pkori falvakban is, mint p�ld�ul Santillana del Mar, amelyet Jean-Paul Sartre Spanyolorsz�g legszebb faluj�nak nevezett.", ro: "", en: "Cantabria is a lush coastal region in northern Spain that perfectly combines towering mountain peaks with spectacular sandy beaches along the Bay of Biscay. The region is internationally acclaimed for its wealth of prehistoric heritage, most notably the remarkably preserved cave paintings. Inland, the landscape is dotted with charming medieval villages, rolling green valleys, and a portion of the majestic Picos de Europa National Park. Cantabria offers a tranquil atmosphere that strongly appeals to those interested in nature, history, and excellent regional gastronomy." }, factsAdvanced: { de: [], hu: [
        "Az Altamira-barlang volt az els? hely a vil�gon, ahol a fels? paleolitikumb�l sz�rmaz� barlangrajzokat fedeztek fel.",
        "Kant�bri�ban tal�lhat� a legt�bb UNESCO vil�g�r�ks�gi barlang egyetlen r�gi�ban (�sszesen 10 barlang).",
        "A Comillas v�ros�ban tal�lhat� 'El Capricho' �p�let Antoni Gaud� egyik legkor�bbi �s kev�s Katal�ni�n k�v�li munk�inak egyike.",
        "A helyi gasztron�mia legismertebb eleme a kiv�l� min?s�g? kant�briai szardella, amelyet f?k�nt Santo��ban dolgoznak fel."
      ], ro: [], en: [
        "The Altamira Cave in Cantabria features paleolithic paintings that are over 14,000 years old.",
        "Cantabria's capital, Santander, is a historic port city that became a favored summer retreat for Spanish royalty in the 19th century.",
        "The region is home to El Soplao, a cave system famous for its extraordinary formations of eccentric helictites."
      ] }
  },
  {
    id: "ES-PV",
    type: "region",
    parent: "ES",
    coords: [-2.5, 43.0],
    name: {"de": "Baskenland", "hu": "Baszkföld", "ro": "�?ara Bascilor", "en": "Basque Country"},
    image: "/geo-images/spain/basque-country.webp",
    description: {"de": "Region mit eigener Sprache und Kultur im Norden Spaniens.", "hu": "Saját nyelvvel és kultúrával rendelkez�? régió �?szak-Spanyolországban.", "ro": "Regiune cu limb�? �?i cultur�? proprie în nordul Spaniei.", "en": "Region with its own language and culture in northern Spain."}, descriptionAdvanced: { de: "", hu: "A Vizcayai-�b�l �s a Pireneusok k�z�tt elter�l? Baszkf�ld er?s saj�t identit�ssal, egyedi nyelvvel �s kult�r�val rendelkezik. A r�gi� gazdas�gi dinamizmusa olyan nagyv�rosokban mutatkozik meg, mint Bilbao, amely a futurisztikus Guggenheim M�zeum r�v�n tett szert vil�gh�rn�vre. A tengerparti San Sebasti�n a fest?i La Concha �b�llel �s p�ratlan gasztron�miai sz�nter�vel az �nyenceket a vil�g minden t�j�r�l vonzza. A baszkok �vsz�zados hagyom�nyokat �polnak, melyekhez a vid�ki sportok, a saj�t zene �s az �sszet�veszthetetlen pintxo (tapas) kultusz is hozz�tartozik.", ro: "", en: "The Basque Country is a fiercely independent-minded autonomous community in northern Spain, distinguished by its unique culture and ancient, isolated language. The region boasts a stunning geographical contrast between lush green mountains and a rugged, surfing-friendly coastline on the Bay of Biscay. It has evolved into a global culinary powerhouse, famous for its pintxos bars and high concentration of Michelin-starred restaurants. Alongside its strong traditions, the Basque Country is an industrial and artistic hub, beautifully showcased by modern architectural landmarks." }, factsAdvanced: { de: [], hu: [
        "A baszk nyelv (Euskara) Eur�pa legr�gebbi �l? nyelve, amely egyetlen m�s ismert nyelvcsal�dhoz sem k�thet?.",
        "San Sebasti�n v�rosa egy f?re vet�tve a vil�g egyik legmagasabb Michelin-csillag s?r?s�g�vel b�szk�lkedhet.",
        "Bilbao vil�gh�r? Guggenheim M�zeuma, amelyet Frank Gehry tervezett, tit�niumb�l, �vegb?l �s m�szk?b?l �p�lt.",
        "A 'Txakoli' egy jellegzetes baszk, enyh�n sz�nsavas, nagyon sz�raz feh�rbor, amelyet gyakran tenger gy�m�lcseihez fogyasztanak."
      ], ro: [], en: [
        "The Basque language, Euskara, is a language isolate with no known linguistic relatives in the world.",
        "San Sebasti�n, a major Basque city, has one of the highest numbers of Michelin stars per capita globally.",
        "The Guggenheim Museum in Bilbao, designed by Frank Gehry and opened in 1997, revolutionized the region's cultural landscape."
      ] }
  },
  {
    id: "ES-NC",
    type: "region",
    parent: "ES",
    coords: [-1.5, 42.8],
    name: {"de": "Navarra", "hu": "Navarra", "ro": "Navarra", "en": "Navarre"},
    image: "/geo-images/spain/navarre.webp",
    description: {"de": "Autonome Gemeinschaft im Norden, bekannt für das San Fermín-Fest.", "hu": "�?szaki autonóm közösség, amely a San Fermín fesztiválról ismert.", "ro": "Comunitate autonom�? în nord, cunoscut�? pentru festivalul San Fermín.", "en": "Autonomous community in the north, known for the San Fermín festival."}, descriptionAdvanced: { de: "", hu: "Navarra �szakon a Pireneusok h�f�dte cs�csait�l d�len az Ebro-v�lgy term�keny, sz�raz s�ks�gaiig terjed. A t�rt�nelmi f?v�ros, Pamplona vil�gszerte ismert az �vente megrendezett San Ferm�n fesztiv�lr�l �s annak vitatott, adrenalind�s bikafuttat�s�r�l. A k�z�pkorban Navarra f�ggetlen kir�lys�gk�nt d�nt? szerepet j�tszott az Ib�riai-f�lsziget hatalmi egyens�ly�ban. A r�gi� fontos csom�pont a Szent Jakab-�ton (Camino de Santiago), amely innen indul spanyol ter�leten. A term�szetkedvel?ket vonzza az Irati-erd?, amely Eur�pa egyik legnagyobb �s legleny?g�z?bb b�kk- �s feny?erdeje.", ro: "", en: "Navarre is a historically rich region in northern Spain that transitions dramatically from the towering Pyrenees mountains in the north to the fertile Ebro river valley in the south. For centuries, it existed as an independent kingdom, and this storied past is visible in its numerous castles, medieval towns, and important waypoints along the Camino de Santiago. The region is internationally famous for its lively festivals, deeply rooted in tradition and folklore. Navarrese cuisine is highly regarded, especially for its high-quality vegetables like asparagus and piquillo peppers." }, factsAdvanced: { de: [], hu: [
        "Az Irati-erd? (Selva de Irati) Eur�pa m�sodik legnagyobb, �ps�gben megmaradt b�kk- �s feny?erdeje a n�metorsz�gi Fekete-erd? ut�n.",
        "A pamplonai bikafuttat�s (Encierro) mind�ssze k�r�lbel�l 875 m�ter hossz�, �s az eg�sz fut�s ritk�n tart tov�bb 3 percn�l.",
        "Navarra a meg�jul� energi�k ter�n �tt�r?: villamosenergia-ig�ny�nek mintegy 70%-�t sz�l- �s napenergi�b�l fedezi.",
        "A Bardenas Reales egy f�lsivatagos bioszf�ra-rezerv�tum Navarr�ban, amely sz�rre�lis sziklaform�ci�ir�l ismert."
      ], ro: [], en: [
        "Pamplona, the capital of Navarre, hosts the world-famous San Ferm�n festival every July, known for the Running of the Bulls.",
        "The Kingdom of Navarre remained an independent entity until it was absorbed into the Spanish Crown in 1512.",
        "The Bardenas Reales is a striking semi-desert natural park in southeastern Navarre, featuring unique badlands formations."
      ] }
  },
  {
    id: "ES-RI",
    type: "region",
    parent: "ES",
    coords: [-2.5, 42.3],
    name: {"de": "La Rioja", "hu": "La Rioja", "ro": "La Rioja", "en": "La Rioja"},
    image: "/geo-images/spain/la-rioja.webp",
    description: {"de": "Kleine Region, die weltweit für ihren Wein berühmt ist.", "hu": "Kis régió, amely világhírű a boráról.", "ro": "Regiune mic�? faimoas�? în lume pentru vinul s�?u.", "en": "Small region world-famous for its wine."}, descriptionAdvanced: { de: "", hu: "La Rioja a spanyol f�lsziget legkisebb r�gi�ja, de legend�s borainak k�sz�nhet?en vil�gh�r?. Az Ebro foly� menti szel�d dombokat v�gtelen sz?l?�ltetv�nyek, t�rt�nelmi bor�szatok �s hangulatos k�z�pkori falvak bor�tj�k. A r�gi� igazi paradicsom a borkedvel?k sz�m�ra, hiszen a hagyom�nyos sz?l�szet �s a modern bor�szatok avantg�rd �p�t�szet�nek fantasztikus kombin�ci�j�t k�n�lja. San Mill�n de la Cogolla eldugott kolostoraiban jegyezt�k le a spanyol (kaszt�liai) nyelv legels? �rott szavait. A f?v�ros, Logro�o a h�res Calle Laurel utc�j�val fantasztikus pintxo-est�kre cs�b�t.", ro: "", en: "La Rioja is a small but globally recognized autonomous community in northern Spain, intrinsically linked to the production of some of the country's finest wines. Nestled in the Ebro River Valley, the region is characterized by endless rolling vineyards and historic, sun-baked winery estates known as bodegas. Beyond its viticulture, La Rioja is steeped in history, featuring ancient monasteries that played a crucial role in the development of the written Spanish language. The area offers a slow-paced, deeply traditional lifestyle focused on agriculture, gastronomy, and hospitality." }, factsAdvanced: { de: [], hu: [
        "A San Mill�n de la Cogolla-i Yuso �s Suso kolostorokat az UNESCO a vil�g�r�ks�g r�sz�v� nyilv�n�totta a spanyol nyelv sz�l?helyek�nt.",
        "La Rioja t�bb mint 500 bor�szattal (bodega) rendelkezik, �s �vente mintegy 250 milli� liter bort �ll�t el?.",
        "A logron�i Calle Laurel utc�ban t�bb mint 60 k�l�nb�z? tapas b�r tal�lhat�, amelyek mindegyike egy-egy speci�lis �telre specializ�l�dott.",
        "A r�gi� volt az els? Spanyolorsz�gban, amely megkapta a rangos 'Denominaci�n de Origen Calificada' (DOCa) bor�szati min?s�t�st."
      ], ro: [], en: [
        "La Rioja is Spain's most famous wine region, with over 500 wineries producing predominantly red wines from Tempranillo grapes.",
        "The monasteries of San Mill�n de la Cogolla are UNESCO World Heritage sites where the earliest known written words in Spanish were discovered.",
        "Despite its fame, La Rioja is the second smallest autonomous community in Spain by area, after the Balearic Islands."
      ] }
  },
  {
    id: "ES-AR",
    type: "region",
    parent: "ES",
    coords: [-0.5, 41.5],
    name: {"de": "Aragonien", "hu": "Aragónia", "ro": "Aragon", "en": "Aragon"},
    image: "/geo-images/spain/aragon.webp",
    description: {"de": "Binnenlandregion in Nordostspanien mit vielfältiger Landschaft.", "hu": "Belföldi régió �?szakkelet-Spanyolországban változatos tájakkal.", "ro": "Regiune interioar�? în nord-estul Spaniei cu peisaje diverse.", "en": "Inland region in northeastern Spain with diverse landscapes."}, descriptionAdvanced: { de: "", hu: "Arag�nia egykor hatalmas k�z�pkori kir�lys�g volt, amely a F�ldk�zi-tenger nyugati r�sz�t uralta, ma pedig a gazdag t�rt�nelmet az �rintetlen term�szettel �tv�zi. A r�gi� a k�z�ps? Pireneusok zord, fens�ges cs�csait�l eg�szen a sz�les �s sz�raz Ebro-medenc�ig h�z�dik. A f?v�ros, Zaragoza olyan leny?g�z? m?eml�keknek ad otthont, mint a Bas�lica del Pilar �s a m�r Aljafer�a palota. Arag�nia h�res a leny?g�z? mud�jar �p�t�szet�r?l, amely az iszl�m �s a kereszt�ny �p�t�szeti st�lusok egyed�l�ll� �tv�zete. A r�gi� fantasztikus lehet?s�geket k�n�l a t�li sportok, a hegym�sz�s �s a szabadt�ri kalandok szerelmeseinek.", ro: "", en: "Aragon is an expansive, landlocked region in northeastern Spain that stretches from the high peaks of the central Pyrenees down to the arid plains of the Ebro basin. Once a powerful medieval kingdom that controlled large swathes of the Mediterranean, its history is etched into imposing castles and splendid Mud�jar architecture. The region offers dramatic natural contrasts, providing excellent opportunities for skiing in the north and exploring striking, desolate landscapes in the south. Aragon maintains a distinct cultural identity, celebrated through its traditional jota music and dance." }, factsAdvanced: { de: [], hu: [
        "A Pireneusok legmagasabb hegycs�csa, az Aneto (3404 m�ter) Arag�nia ter�let�n tal�lhat�.",
        "Az arag�niai mud�jar �p�t�szetet az UNESCO az emberis�g vil�g�r�ks�gi r�sz�nek nyilv�n�totta.",
        "A zaragozai Bas�lica del Pilar Spanyolorsz�g egyik legfontosabb zar�ndokhelye, �s az els? M�ria-kegyhely a kereszt�ny vil�gban.",
        "A r�gi�hoz tartozik a szikl�s Ordesa �s Monte Perdido Nemzeti Park, amely Eur�pa legr�gebbi nemzeti parkjai k�z� tartozik."
      ], ro: [], en: [
        "The Crown of Aragon was a formidable maritime power in the 14th and 15th centuries, ruling territories as far as Southern Italy and Greece.",
        "Zaragoza's Basilica of Our Lady of the Pillar is a masterpiece of Baroque architecture and a major Catholic pilgrimage site.",
        "Aragon's Mud�jar architecture, a unique blend of Islamic and Christian artistic styles, is recognized as a UNESCO World Heritage site."
      ] }
  },
  {
    id: "ES-CT",
    type: "region",
    parent: "ES",
    coords: [1.5, 41.5],
    name: {"de": "Katalonien", "hu": "Katalónia", "ro": "Catalonia", "en": "Catalonia"},
    image: "/geo-images/spain/catalonia.webp",
    description: {"de": "Region im Nordosten mit starker Identität und eigener Sprache.", "hu": "�?szakkeleti régió er�?s identitással és saját nyelvvel.", "ro": "Regiune în nord-est cu o identitate puternic�? �?i limb�? proprie.", "en": "Region in the northeast with a strong identity and its own language."}, descriptionAdvanced: { de: "", hu: "Katal�nia er?s nemzeti identit�ssal, saj�t, vir�gz� nyelvvel �s gazdag kultur�lis �r�ks�ggel rendelkezik. A r�gi� mag�ban foglalja a Pireneusok h�f�dte cs�csait, a Costa Brava zord tengerpartj�t �s a vil�gh�r? metropoliszt, Barcelon�t. Gazdas�gilag Katal�nia Spanyolorsz�g egyik leger?sebb r�gi�ja, �s a kereskedelem �s az ipar hossz� m�ltra tekint vissza. Kultur�lis t�ren a r�gi� olyan zseniket adott a vil�gnak, mint Antoni Gaud�, Salvador Dal� �s Joan Mir�. A kiv�l� katal�n gasztron�mia az egyszer?, kiad�s vid�ki �telekt?l az abszol�t vil�gsz�nvonal� cs�csgasztron�mi�ig terjed.", ro: "", en: "Catalonia is a vibrant and fiercely proud autonomous community in northeastern Spain, bordered by France and the Mediterranean Sea. It possesses a distinct identity rooted in the Catalan language, unique cultural traditions, and a dynamic history of commerce and industry. The region is a treasure trove of art and architecture, most notably the whimsical modernist creations of Antoni Gaud� and the surrealist legacy of Salvador Dal�. From the stunning beaches of the Costa Brava to the soaring Pyrenees, Catalonia offers unparalleled geographical and cultural diversity." }, factsAdvanced: { de: [], hu: [
        "A 'Castells', a leny?g�z? emberpiramisok �p�t�s�nek katal�n hagyom�nya az UNESCO szellemi kultur�lis �r�ks�g�nek r�sze.",
        "Katal�nia volt az els? r�gi� a spanyol sz�razf�ld�n, amely hivatalosan is betiltotta a bikaviadalokat (2012-ben).",
        "A Montserrat szikl�s hegyvonulata nemcsak a term�szeti sz�ps�ge, hanem a h�res benc�s kolostor miatt is Katal�nia spiritu�lis k�zpontja.",
        "Girona �v�rosa (Barri Vell) b�szk�lkedhet Eur�pa egyik legjobb �llapotban fennmaradt t�rt�nelmi zsid� negyed�vel (El Call)."
      ], ro: [], en: [
        "Catalan is co-official with Spanish and is the primary language used in the region's schools and local government.",
        "The region boasts one of the strongest economies in Spain, driven by industry, tourism, and a thriving tech sector.",
        "Human towers, known as 'castells', are a traditional Catalan cultural practice recognized by UNESCO as Intangible Cultural Heritage."
      ] }
  },
  {
    id: "ES-CL",
    type: "region",
    parent: "ES",
    coords: [-4.5, 41.5],
    name: {"de": "Kastilien und León", "hu": "Kasztília és León", "ro": "Castilia �?i León", "en": "Castile and León"},
    image: "/geo-images/spain/castile-and-le-n.webp",
    description: {"de": "Die grö�?te autonome Gemeinschaft Spaniens.", "hu": "Spanyolország legnagyobb autonóm közössége.", "ro": "Cea mai mare comunitate autonom�? din Spania.", "en": "The largest autonomous community in Spain."}, descriptionAdvanced: { de: "", hu: "Kaszt�lia �s Le�n ter�let�t tekintve Spanyolorsz�g legnagyobb auton�m k�z�ss�ge, �s a modern spanyol (kaszt�liai) nyelv b�lcs?jek�nt tartj�k sz�mon. A v�gtelen, ritk�n lakott felf�ldet (Meseta) �szakon �s d�len leny?g�z? hegyl�ncok szeg�lyezik. A r�gi� hihetetlen�l gazdag t�rt�nelmi m?eml�kekben: csod�latos g�tikus katedr�lisok, hatalmas v�rak �s �kori r�mai v�zvezet�kek tal�lhat�k olyan v�rosokban, mint Burgos, Le�n �s Segovia. A Szent Jakab-�t (El Camino) nagy r�sze egyenesen a r�gi�n halad kereszt�l, �vsz�zadok �ta form�lva a falvakat �s a gasztron�mi�t. Kulin�ris szempontb�l a kiv�l� s�lt b�r�ny �s malac, valamint a Ribera del Duero kiv�l� borai domin�lnak.", ro: "", en: "Castile and Le�n is the largest autonomous community in Spain, encompassing a vast, elevated plateau surrounded by formidable mountain ranges in the country's northwest. It is considered the historic heartland of Spain, where the Spanish language originated and where the union of the crowns shaped the modern nation. The landscape is dotted with magnificent Gothic cathedrals, formidable medieval castles, and exquisitely preserved historic cities. This profoundly traditional region is also known for its hearty cuisine, featuring excellent roasted meats and fine regional wines." }, factsAdvanced: { de: [], hu: [
        "A r�gi�ban t�bb mint 400 t�rt�nelmi v�r �s kast�ly tal�lhat�, ami a legs?r?bb ilyen jelleg? koncentr�ci� Eur�p�ban.",
        "A Salamanca Egyetem, amelyet 1218-ban alap�tottak, Spanyolorsz�g legr�gebbi �s Eur�pa egyik els? egyeteme.",
        "Burgos g�tikus katedr�lisa az egyetlen olyan templom Spanyolorsz�gban, amely �nmag�ban (m�s �p�letek n�lk�l) is UNESCO vil�g�r�ks�g.",
        "A segoviai r�mai v�zvezet�k k�t?anyag (habarcs) n�lk�l �p�lt, �s t�bb mint 160 bolt�vb?l �ll."
      ], ro: [], en: [
        "Castile and Le�n covers over 94,000 square kilometers, making it the largest region in Spain and one of the largest in the European Union.",
        "The region contains more than 300 medieval castles, a testament to its historical role as a borderland during the Reconquista.",
        "The University of Salamanca, founded in 1218, is the oldest university in Spain and one of the oldest continuous universities in Europe."
      ] }
  },
  {
    id: "ES-MD",
    type: "region",
    parent: "ES",
    coords: [-3.7, 40.5],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    image: "/geo-images/spain/madrid.webp",
    description: {"de": "Die Hauptstadtregion und das wirtschaftliche Zentrum Spaniens.", "hu": "Spanyolország f�?városi régiója és gazdasági központja.", "ro": "Regiunea capitalei �?i centrul economic al Spaniei.", "en": "The capital region and economic center of Spain."}, descriptionAdvanced: { de: "", hu: "A Madridi Auton�m K�z�ss�g Spanyolorsz�g pontos f�ldrajzi k�z�ppontj�ban, a kiterjedt k�z�ps? fenns�kon (Meseta) helyezkedik el. A r�gi�t er?sen domin�lja az azonos nev?, l�ktet? f?v�ros, de a k�rnyez? ter�leteken csod�latos hegyi t�jakat �s t�rt�nelmi v�rosokat is tal�lunk. A k�zeli Sierra de Guadarrama hegys�gben a term�szetkedvel?k �s t�r�z�k fantasztikus alpesi mened�ket tal�lnak a v�rosi ny�ri h?s�g el?l. A leny?g�z? El Escorial kolostor �s Alcal� de Henares t�rt�nelmi egyetemv�rosa a r�gi� kir�lyi �s akad�miai m�ltj�r�l tan�skodik. Madrid a spanyol gazdas�g legfontosabb motorja �s vitathatatlan politikai k�zpontja.", ro: "", en: "The Community of Madrid is a dynamic, centrally located autonomous region that encompasses Spain's bustling capital city and its surrounding metropolitan and rural areas. It serves as the political, economic, and cultural epicenter of the country, drawing people from all over Spain and the world. Beyond the metropolitan sprawl, the region features beautiful mountainous landscapes in the Sierra de Guadarrama and significant historical royal estates. Madrid seamlessly blends an intense, modern urban lifestyle with centuries-old traditions and world-class artistic heritage." }, factsAdvanced: { de: [], hu: [
        "Madrid f�ldrajzi k�z�ppontja, az �gynevezett 'Kilom�ter 0', a Puerta del Sol t�ren tal�lhat�.",
        "Az El Escorial kir�lyi kolostort II. F�l�p �p�ttette, �s a 16. sz�zadban a vil�g legnagyobb �p�lete volt.",
        "A Sierra de Guadarrama Nemzeti Park a r�gi� egyik legkedveltebb pihen?helye, amely Madridt�l mind�ssze egy �r�nyira van.",
        "Alcal� de Henares, Madrid k�zeli szomsz�dja, Miguel de Cervantes, a 'Don Quijote' �r�j�nak sz�l?v�rosa."
      ], ro: [], en: [
        "The Community of Madrid is the most densely populated region in Spain, home to nearly 7 million residents.",
        "The region hosts the 'Golden Triangle of Art', which includes the Prado, Reina Sof�a, and Thyssen-Bornemisza museums.",
        "San Lorenzo de El Escorial, a historical residence of the King of Spain located in the region, is a massive 16th-century architectural complex."
      ] }
  },
  {
    id: "ES-CM",
    type: "region",
    parent: "ES",
    coords: [-3.0, 39.5],
    name: {"de": "Kastilien-La Mancha", "hu": "Kasztília-La Mancha", "ro": "Castilia-La Mancha", "en": "Castilla-La Mancha"},
    image: "/geo-images/spain/castilla-la-mancha.webp",
    description: {"de": "Zentralspanische Region, bekannt für Don Quijote.", "hu": "Közép-spanyolországi régió, Don Quijote hazája.", "ro": "Regiune central�? a Spaniei, cunoscut�? pentru Don Quijote.", "en": "Central Spanish region, famous for Don Quixote."}, descriptionAdvanced: { de: "", hu: "Kaszt�lia-La Mancha egy kiterjedt, lapos fenns�k, amely elv�laszthatatlanul �sszefon�dott Don Quijote kalandjaival. A t�jat t�gas gabonamez?k, sz?l?�ltetv�nyek, olajfaligetek �s a kis dombokon magasod� h�res feh�r sz�lmalmok jellemzik. A t�rt�nelmi v�ros, Toledo, Spanyolorsz�g egykori f?v�rosa, a r�gi� kultur�lis �kk�ve, valamint a kereszt�ny, zsid� �s iszl�m t�rt�nelem olvaszt�t�gelye. Kaszt�lia-La Mancha termeli Spanyolorsz�g legh�resebb exportcikkeinek egy r�sz�t, bele�rtve a Manchego sajtot �s a kiv�l� min?s�g? s�fr�nyt. A l�tsz�lagos sz�razs�g ellen�re a r�gi� fontos vizes �l?helyeknek �s nat�rparkoknak ad otthont, mint p�ld�ul a Tablas de Daimiel.", ro: "", en: "Castilla-La Mancha is a vast, sparsely populated plateau in central Spain, eternally immortalized by Miguel de Cervantes in his masterpiece, Don Quixote. The region's iconic landscape features endless plains, rolling hills, and the historic windmills that inspired the famous literary tale. It is a land of deep historical significance, having served as a cultural crossroads for Christians, Muslims, and Jews over the centuries. Today, it remains deeply agricultural, producing exceptional Manchego cheese, high-quality olive oil, and vast quantities of wine." }, factsAdvanced: { de: [], hu: [
        "Kaszt�lia-La Mancha a vil�g legnagyobb egybef�gg? sz?l?�ltetv�ny-ter�lete, t�bb mint 450 ezer hekt�rral.",
        "A h�res Consuegra sz�lmalmok inspir�lt�k Cervantes 'Don Quijote' c�m? reg�ny�nek legend�s sz�lmalomharc jelenet�t.",
        "A r�gi�ban termesztik a vil�g legdr�g�bb f?szer�t, a h�res spanyol s�fr�nyt (Azafr�n de La Mancha).",
        "Cuenca v�ros�nak 'f�gg? h�zai' (Casas Colgadas) sz� szerint a Hu�car foly� m�ly szurdok�nak sziklafal�ra �p�ltek."
      ], ro: [], en: [
        "Castilla-La Mancha is the largest wine-producing region in the world by continuous vineyard area.",
        "The historic city of Toledo, the region's capital, is renowned for its history of religious tolerance and sword-making.",
        "The traditional Manchego cheese must be made exclusively from the milk of the Manchega breed of sheep raised in this region."
      ] }
  },
  {
    id: "ES-EX",
    type: "region",
    parent: "ES",
    coords: [-6.0, 39.5],
    name: {"de": "Extremadura", "hu": "Extremadura", "ro": "Extremadura", "en": "Extremadura"},
    image: "/geo-images/spain/extremadura.webp",
    description: {"de": "Region im Westen Spaniens mit reichem römischen Erbe.", "hu": "Spanyolország nyugati régiója, gazdag római örökséggel.", "ro": "Regiune din vestul Spaniei cu o bogat�? mo�?tenire roman�?.", "en": "Region in western Spain with rich Roman heritage."}, descriptionAdvanced: { de: "", hu: "A nyugat-spanyolorsz�gi Extremadura, amely Portug�li�val hat�ros, egy zord, autentikus �s gyakran figyelmen k�v�l hagyott, �rintetlen sz�ps�g? r�gi�. H�res a hatalmas spanyol konkviszt�dorok (t�bbek k�z�tt Francisco Pizarro �s Hern�n Cort�s) sz�l?f�ldjek�nt, akiknek gazdags�ga csod�latos palot�kat finansz�rozott olyan v�rosokban, mint C�ceres �s Trujillo. A t�j nagy r�sz�t a 'Dehes�k' alkotj�k: t�gas, ritk�s t�lgy- �s parafaerd?k, ahol az ib�riai sert�sek szabadon legelnek. Ez teszi Extremadur�t a h?n �h�tott Pata Negra sonka (Jam�n Ib�rico) v�gs? sz�rmaz�si r�gi�j�v�. M�rida, Lusitania egykori r�mai f?v�ros�nak romjai a vil�g legjobb �llapotban fennmaradt r�mai eml�kei k�z� tartoznak.", ro: "", en: "Extremadura is a rugged, relatively undiscovered region in western Spain, bordering Portugal, characterized by its vast dehesas (oak forests) and profound historical legacy. It is famous as the birthplace of many Spanish conquistadors who set sail for the Americas in the 15th and 16th centuries. The region boasts exceptionally preserved Roman ruins, stunning medieval towns, and a rich biodiversity that makes it a premier destination for bird watching. Extremadura offers an authentic, untamed Spanish experience, deeply rooted in agriculture and traditional rural life." }, factsAdvanced: { de: [], hu: [
        "M�rida r�mai sz�nh�za m�g ma is m?k�dik, �s minden ny�ron otthont ad egy klasszikus sz�nh�zi fesztiv�lnak.",
        "Extremadura a spanyolorsz�gi Pata Negra (makkon nevelt ib�riai sert�s) legfontosabb teny�szt�si k�zpontja.",
        "C�ceres �v�rosa olyan j�l meg?rizte k�z�pkori �s renesz�nsz karakter�t, hogy gyakran haszn�lt�k a 'Tr�nok harca' forgat�si helysz�nek�nt.",
        "A Monfrag�e Nemzeti Park Eur�pa egyik legfontosabb mad�rrezerv�tuma, k�l�n�sen a ritka fekete g�ly�k �s a parlagi sasok sz�m�ra."
      ], ro: [], en: [
        "The city of M�rida contains some of the most impressive and extensive Roman ruins in all of Spain, including a well-preserved theater.",
        "Extremadura is the primary source of Spain's legendary Jam�n Ib�rico de Bellota, made from acorn-fed Iberian pigs.",
        "Famous explorers such as Francisco Pizarro and Hern�n Cort�s were born in Extremadura's historic towns."
      ] }
  },
  {
    id: "ES-VC",
    type: "region",
    parent: "ES",
    coords: [-0.5, 39.5],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencian Community"},
    image: "/geo-images/spain/valencian-community.webp",
    description: {"de": "Küstenregion im Osten, bekannt für Paella.", "hu": "Keleti parti régió, a paella hazája.", "ro": "Regiune de coast�? în est, cunoscut�? pentru paella.", "en": "Coastal region in the east, known for paella."}, descriptionAdvanced: { de: "", hu: "A Valenciai K�z�ss�g a naps�t�tte F�ldk�zi-tenger partj�n h�z�dik, �s enyhe �ghajlat�r�l, v�gtelen strandjair�l �s ny�zsg? kult�r�j�r�l h�res. A r�gi� a paella b�szke �s vitathatatlan haz�ja, �s hatalmas rizsf�ldekkel, valamint kiterjedt, illatos narancs- �s citrom�ltetv�nyekkel rendelkezik. A modern �s dinamikus f?v�ros, Valencia mellett a Costa Blanca tengerparti v�rosai, mint Alicante vagy Benidorm, eg�sz �vben vonzz�k az eur�pai turist�kat. A dombos h�torsz�got k�z�pkori v�rak �s t�rt�nelmi falvak tark�tj�k, amelyek a m�rok �s a kereszt�nyek k�z�tti folyamatos konfliktusokr�l tan�skodnak. A fergeteges �s zajos fesztiv�lok, mint a t�zes 'Fallas' vagy a 'Moros y Cristianos' messze f�ld�n h�resek.", ro: "", en: "The Valencian Community, stretching along the central-eastern coast of the Mediterranean Sea, is a sun-drenched region famous for its fertile agricultural plains and vibrant coastal resorts. It is internationally celebrated as the true birthplace of paella, Spain's most iconic culinary dish. The region offers a fascinating blend of historical architecture, particularly ancient silk exchanges, and cutting-edge modern science and arts complexes. Valencians are known for their passionate, outgoing nature, best exemplified in their spectacular, fire-filled traditional festivals." }, factsAdvanced: { de: [], hu: [
        "A valenciai Albufera lag�na az a hely, ahol a paella hagyom�nyosan megsz�letett, eredetileg v�zipatk�nyb�l �s angoln�b�l k�sz�tve.",
        "A valenciai Fallas fesztiv�l alatt m�rciusban t�bb sz�z hatalmas pap�rmas� szobrot �getnek el az utc�kon.",
        "Benidorm v�rosa rendelkezik a legt�bb felh?karcol�val az egy f?re jut� lakosok sz�m�t tekintve a vil�gon.",
        "A M?v�szetek �s Tudom�nyok V�rosa (Ciudad de las Artes y las Ciencias) Santiago Calatrava futurisztikus mesterm?ve, amely a kisz�radt Turia foly� medr�ben �p�lt."
      ], ro: [], en: [
        "The traditional Paella Valenciana originates from the Albufera region and originally included ingredients like rabbit, chicken, and snails.",
        "The Fallas festival in March involves the construction and subsequent burning of hundreds of massive, intricate satirical sculptures.",
        "The region is a major exporter of citrus fruits, particularly oranges, which thrive in its mild Mediterranean climate."
      ] }
  },
  {
    id: "ES-AN",
    type: "region",
    parent: "ES",
    coords: [-4.5, 37.5],
    name: {"de": "Andalusien", "hu": "Andalúzia", "ro": "Andaluzia", "en": "Andalusia"},
    image: "/geo-images/spain/andalusia.webp",
    description: {"de": "Südlichste Region mit maurischer Architektur und Flamenco.", "hu": "A legdélibb régió, mór építészettel és flamencóval.", "ro": "Cea mai sudic�? regiune, cu arhitectur�? maur�? �?i flamenco.", "en": "Southernmost region with Moorish architecture and flamenco."}, descriptionAdvanced: { de: "", hu: "Andal�zia a romantikus, szenved�lyes Spanyolorsz�g megtestes�t?je �s az orsz�g legn�pesebb r�gi�ja. Ez a flamenco, a bikaviadalok �s a tapasok sz�l?helye, amelyet m�lyen form�lt a nyolcsz�z �ves m�r uralom. Al-Andalus �p�t�szeti �r�ks�ge, els?sorban a granadai Alhambra, a c�rdobai Mezquita �s a sevillai Alc�zar, p�ratlan vil�gcsod�k. Andal�zia t�ja rendk�v�l v�ltozatos: Eur�pa egyetlen sivatag�t�l (Tabernas) a naps�t�tte Costa del Solon �t a Sierra Nevada h�f�dte cs�csaiig terjed. Andal�zia a m�ly hagyom�nyok, az �let�r�m �s a tiszta egzotikum egyed�l�ll� kever�k�t k�n�lja.", ro: "", en: "Andalusia is Spain's southernmost mainland region, a sun-baked land that epitomizes many of the quintessential images associated with Spanish culture, from flamenco to bullfighting. Its profound Moorish heritage is interwoven into the fabric of its cities, leaving behind spectacular palaces and mosques that display breathtaking Islamic architecture. The landscape is incredibly diverse, encompassing long stretches of sunny coastline, fertile olive groves, and the soaring peaks of the Sierra Nevada. Andalusia possesses a fiery, passionate soul, reflected in its vibrant ferias, soulful music, and relaxed outdoor lifestyle." }, factsAdvanced: { de: [], hu: [
        "A Tabernas-sivatag Eur�pa egyetlen f�lsivataga, amely �vtizedekig a h�res spagettiwesternek kedvelt forgat�si helysz�ne volt.",
        "A Sierra Nevad�ban tal�lhat� Mulhac�n (3482 m�ter) az Ib�riai-f�lsziget legmagasabb hegye.",
        "A c�rdobai Mezquita a k�z�pkorban a vil�g egyik legnagyobb mecsetje volt, miel?tt kereszt�ny katedr�liss� alak�tott�k volna.",
        "Andal�zia az a hely, ahol Magell�n �s Kolumbusz t�rt�nelmi exped�ci�i �tra keltek a sevillai kik�t?b?l."
      ], ro: [], en: [
        "Andalusia was under Moorish rule longer than any other part of Spain, from 711 until the fall of Granada in 1492.",
        "The region produces approximately 80% of Spain's olive oil, making it the world's largest producer of the 'liquid gold'.",
        "The Sierra Nevada mountain range in Andalusia contains the highest point in continental Spain, the Mulhac�n peak."
      ] }
  },
  {
    id: "ES-MU",
    type: "region",
    parent: "ES",
    coords: [-1.5, 38.0],
    name: {"de": "Murcia", "hu": "Murcia", "ro": "Murcia", "en": "Murcia"},
    image: "/geo-images/spain/murcia.webp",
    description: {"de": "Region im Südosten, bekannt für Landwirtschaft und Strände.", "hu": "Délkeleti régió, mez�?gazdaságáról és strandjairól ismert.", "ro": "Regiune în sud-est, cunoscut�? pentru agricultur�? �?i plaje.", "en": "Southeastern region, known for agriculture and beaches."}, descriptionAdvanced: { de: "", hu: "A Spanyolorsz�g d�lkeleti r�sz�n fekv? Murci�t hatalmas mez?gazdas�gi termel�se miatt gyakran 'Eur�pa z�lds�geskertj�nek' is nevezik. A meleg, sz�raz r�gi� k�t tengerparttal b�szk�lkedhet: a ny�lt F�ldk�zi-tenger partszakasz�val �s a Mar Menor, Eur�pa legnagyobb s�s viz? lag�n�j�nak strandjaival. Murcia gazdag t�rt�nelme megmutatkozik a f?v�ros leny?g�z? barokk katedr�lis�ban, valamint Cartagena ?si kik�t?j�nek pun �s r�mai �sat�saiban. A r�gi�t fantasztikus, sz�raz term�szetv�delmi ter�letek �s leny?g�z? f�lsivatagi t�jak jellemzik. Murcia gasztron�mi�j�ban a friss z�lds�gek, a rizses �telek �s a kiad�s h�sos pit�k domin�lnak.", ro: "", en: "The Region of Murcia is a compact, sun-kissed autonomous community in southeastern Spain, nestled between Andalusia and the Valencian Community. Known as the 'Orchard of Europe', its fertile plains are heavily cultivated, producing a vast array of fruits and vegetables exported across the continent. The region boasts a beautiful, rugged coastline called the Costa C�lida, featuring the Mar Menor, one of Europe's largest saltwater lagoons. Murcia offers a relaxed pace of life, rich historical vestiges from Carthaginian times, and a distinct, flavorful local gastronomy." }, factsAdvanced: { de: [], hu: [
        "A Mar Menor Eur�pa legnagyobb s�s viz? lag�n�ja, amelyet egy keskeny, 22 km hossz� homokpad v�laszt el a F�ldk�zi-tengert?l.",
        "A cartagenai r�mai sz�nh�zat csak 1988-ban fedezt�k fel v�letlen�l egy �p�tkez�s sor�n.",
        "Murcia r�gi� adja Spanyolorsz�g z�lds�g- �s gy�m�lcsexportj�nak mintegy 20%-�t.",
        "A Murciai Katedr�lis (Catedral de Santa Mar�a) barokk homlokzata Spanyolorsz�g egyik legkiv�l�bb �p�t�szeti remekm?v�nek sz�m�t."
      ], ro: [], en: [
        "The Mar Menor is a coastal saltwater lagoon separated from the Mediterranean Sea by a 22-kilometer-long sandbar known as La Manga.",
        "Cartagena, a major city in Murcia, was founded by the Carthaginian general Hasdrubal the Fair in 227 BC.",
        "Murcia's highly productive agriculture relies on a complex system of irrigation dating back to the Moorish occupation."
      ] }
  },
  {
    id: "ES-IB",
    type: "region",
    parent: "ES",
    coords: [3.0, 39.5],
    name: {"de": "Balearen", "hu": "Baleár-szigetek", "ro": "Insulele Baleare", "en": "Balearic Islands"},
    image: "/geo-images/spain/balearic-islands.webp",
    description: {"de": "Inselgruppe im Mittelmeer.", "hu": "Szigetcsoport a Földközi-tengeren.", "ro": "Arhipelag în Marea Mediteran�?.", "en": "Archipelago in the Mediterranean Sea."}, descriptionAdvanced: { de: "", hu: "A F�ldk�zi-tengeren fekv? Bale�r-szigetek igazi nyaral�paradicsom, amely minden �zl�snek k�n�l valamit ? a vad bulikt�l a csendes, eldugott �bl�kig. Mallorca l�tv�nyos hegyvid�ki t�jakkal (Serra de Tramuntana), pomp�s t�rt�nelmi birtokokkal �s pezsg? strandokkal vonz. Ibiza vil�gh�r? a t�lz� �jszakai �let�r?l �s az elektronikus zenei sz�nter�r?l, de leny?g�z? hippi m�lttal �s �lmos falvakkal is rendelkezik. Menorca, a csendesebb testv�rsziget �rintetlen term�szetet, megalitikus m?eml�keket �s idilli homokos �bl�ket k�n�l. Formentera, a legkisebb lakott sziget, krist�lytiszta viz�r?l �s szigor� k�rnyezetv�delmi el?�r�sair�l h�res.", ro: "", en: "The Balearic Islands are an alluring archipelago situated in the western Mediterranean Sea, renowned worldwide for their stunning coves, crystal-clear waters, and idyllic climate. While famous for hosting some of the globe's most vibrant nightlife and luxury tourism, the islands also harbor a tranquil, deeply traditional side with charming rural villages and historic stone architecture. Each island possesses its own unique character, from bustling international hubs to serene, protected natural biospheres. The region is a top Mediterranean destination, offering a perfect blend of lively entertainment and pristine natural beauty." }, factsAdvanced: { de: [], hu: [
        "A mallorcai Serra de Tramuntana hegys�get az UNESCO a vil�g�r�ks�g r�sz�v� nyilv�n�totta a leny?g�z? teraszos gazd�lkod�s miatt.",
        "A Formentera �s Ibiza k�z�tt elter�l? Neptunf?-r�tek (Posidonia) a vil�g egyik legnagyobb �s leg�regebb �l?l�nyei.",
        "Menorca szigete t�bb mint 100 stranddal rendelkezik, ami t�bb, mint Ibiza �s Mallorca strandjainak sz�ma egy�ttesen.",
        "Ibiza �v�ros�t (Dalt Vila) vastag renesz�nsz falak veszik k�r�l, amelyek �ps�gben megmaradtak a kal�zt�mad�sok �ta."
      ], ro: [], en: [
        "The four major islands making up the archipelago are Mallorca, Menorca, Ibiza, and Formentera.",
        "The local language is Catalan, spoken in distinct regional dialects such as Mallorqu� and Eivissenc.",
        "The Tramuntana mountain range in Mallorca was awarded World Heritage Status by UNESCO for its physical and cultural significance."
      ] }
  },
  {
    id: "ES-CN",
    type: "region",
    parent: "ES",
    coords: [-15.5, 28.0],
    name: {"de": "Kanarische Inseln", "hu": "Kanári-szigetek", "ro": "Insulele Canare", "en": "Canary Islands"},
    image: "/geo-images/spain/canary-islands.webp",
    description: {"de": "Inselgruppe im Atlantischen Ozean vor der Küste Afrikas.", "hu": "Szigetcsoport az Atlanti-óceánban Afrika partjainál.", "ro": "Arhipelag în Oceanul Atlantic în largul coastei Africii.", "en": "Archipelago in the Atlantic Ocean off the coast of Africa."}, descriptionAdvanced: { de: "", hu: "A Kan�ri-szigetek az Atlanti-�ce�nban, Afrika partjain�l fekszenek, �s vulk�ni eredet?ek, ami teljesen egyedi f�ldrajzi arculatot k�lcs�n�z nekik. Az eg�sz �vben enyhe �ghajlat miatt gyakran az '�r�k tavasz szigeteinek' is nevezik ?ket. A h�t f? sziget mindegyike egy-egy saj�t mikrovil�got k�n�l: La Gomera buja bab�rerd?it?l kezdve Gran Canaria hatalmas homokd?n�in �t Lanzarote �s Tenerife holdb�li vulk�ni t�jaiig. Tenerif�n tal�lhat� a fens�ges Teide, Spanyolorsz�g legmagasabb hegye is. A szigetek a glob�lis turizmus k�zpontjai, de vil�gsz�nvonal� felt�teleket k�n�lnak a csillag�szathoz, a sz�rf�z�shez �s a t�r�z�shoz is.", ro: "", en: "The Canary Islands are a spectacular Spanish archipelago located in the Atlantic Ocean off the northwestern coast of Africa. Forged by ancient volcanic activity, the islands feature an astonishing diversity of landscapes, ranging from lunar-like volcanic deserts and lush subtropical forests to towering peaks and black sand beaches. Known for their 'eternal spring', the islands offer a mild, pleasant climate year-round, making them a haven for nature lovers and sun-seekers alike. The Canarian culture is a unique blend of Spanish, African, and Latin American influences, shaped by their historical role as a maritime crossroads." }, factsAdvanced: { de: [], hu: [
        "A Kan�ri-szigetek hivatalosan Afrik�hoz tartoznak f�ldrajzilag, b�r politikailag �s kultur�lisan Spanyolorsz�g �s az EU r�sz�t k�pezik.",
        "A Teide Nemzeti Park Tenerif�n a legt�bb l�togat�t vonz� nemzeti park Eur�p�ban.",
        "Lanzarote sziget�nek vulkanikus talaj�n egyed�l�ll� m�don, kis k?g�dr�kben termesztik a borokat (La Geria).",
        "A la gomerai 'Silbo Gomero' egy egyed�l�ll� f�ttynyelv, amely lehet?v� teszi a kommunik�ci�t a m�ly v�lgyek k�z�tt."
      ], ro: [], en: [
        "Mount Teide on the island of Tenerife is the highest mountain in Spain, rising 3,715 meters above sea level.",
        "The archipelago consists of eight main inhabited islands: Tenerife, Fuerteventura, Gran Canaria, Lanzarote, La Palma, La Gomera, El Hierro, and La Graciosa.",
        "The native inhabitants of the islands, the Guanches, lived there before the Castilian conquest in the 15th century."
      ] }
  }
];

export const spainCities: POI[] = [
  {
    id: "es-madrid", type: "city", parent: "ES-MD", coords: [-3.7038, 40.4168],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    description: {
      de: "Madrid ist die Hauptstadt Spaniens, eine pulsierende Metropole im Herzen des Landes, bekannt für ihre erstklassigen Kunstmuseen, den prachtvollen Königspalast und ihre lebendige Tapas-Kultur.",
      hu: "Madrid Spanyolország f�?városa, az ország szívében fekv�? lüktet�? metropolisz, amely világszínvonalú művészeti múzeumairól, pompás Királyi Palotájáról és élénk tapas-kultúrájáról ismert.",
      ro: "Madrid este capitala Spaniei, o metropol�? vibrant�? în inima �?�?rii, cunoscut�? pentru muzeele sale de art�? de prim�? clas�?, magnificul Palat Regal �?i cultura sa vibrant�? de tapas.",
      en: "Madrid is the capital of Spain, a vibrant metropolis in the heart of the country, known for its world-class art museums, the magnificent Royal Palace, and its lively tapas culture."
    },
    descriptionAdvanced: {          "de": "Madrid ist die pulsierende Hauptstadt Spaniens und liegt im Herzen der Iberischen Halbinsel. Die Stadt ist weltberühmt für ihre reiche Kunstgeschichte, insbesondere für den Paseo del Arte mit seinen erstklassigen Museen. Madrid bietet eine perfekte Mischung aus historischer Architektur, wie dem prachtvollen Königspalast, und modernem urbanen Leben. Die lebendigen Plätze, wie die Puerta del Sol und die Plaza Mayor, sind das Zentrum des gesellschaftlichen Lebens. Besucher lieben die Stadt auch für ihre authentische Tapas-Kultur und das aufregende Nachtleben.",
          "hu": "Madrid Spanyolország lüktet�? f�?városa, amely az Ibériai-félsziget szívében fekszik. A város világszerte ismert gazdag művészettörténetér�?l, különösen a Paseo del Arte kiváló múzeumairól. Madrid a történelmi építészet, például a pompás Királyi Palota és a modern városi élet tökéletes keverékét kínálja. Az élénk terek, mint a Puerta del Sol és a Plaza Mayor, a társadalmi élet központjai. A látogatók a várost az autentikus tapas-kultúrája és az izgalmas éjszakai élete miatt is imádják.",
          "ro": "Madrid este capitala vibrant�? a Spaniei, situat�? în inima Peninsulei Iberice. Ora�?ul este renumit în întreaga lume pentru istoria sa bogat�? în art�?, în special pentru Paseo del Arte cu muzeele sale de prim�? clas�?. Madrid ofer�? un amestec perfect de arhitectur�? istoric�?, cum ar fi magnificul Palat Regal, �?i via�?�? urban�? modern�?. Pie�?ele pline de via�?�?, cum ar fi Puerta del Sol �?i Plaza Mayor, sunt centrul vie�?ii sociale. Vizitatorii iubesc ora�?ul �?i pentru cultura sa autentic�? de tapas �?i via�?a de noapte interesant�?.",
          "en": "Madrid is the vibrant capital of Spain, located in the heart of the Iberian Peninsula. The city is world-renowned for its rich art history, particularly the Paseo del Arte with its world-class museums. Madrid offers a perfect blend of historic architecture, such as the magnificent Royal Palace, and modern urban life. Lively squares like the Puerta del Sol and Plaza Mayor are the center of social life. Visitors also love the city for its authentic tapas culture and exciting nightlife."
    },
    facts: {
          "de": [
                "Es ist die drittgrö�?te Stadt in der Europäischen Union.",
                "Beherbergt das berühmte Museo del Prado mit Meisterwerken von Velázquez und Goya.",
                "Der Palacio Real ist der flächenmä�?ig grö�?te königliche Palast in Europa.",
                "Madrid liegt auf einer Hochebene und ist die am höchsten gelegene Hauptstadt Europas.",
                "Der Retiro-Park bietet eine grüne Oase mit einem gro�?en künstlichen See.",
                "Die Stadt ist Heimat der weltbekannten Fu�?ballvereine Real Madrid und Atlético Madrid.",
                "Die Puerta del Sol ist der symbolische Mittelpunkt (Kilometer Null) Spaniens.",
                "Madrid hat eines der grö�?ten U-Bahn-Netze in Europa."
          ],
          "hu": [
                "Ez az Európai Unió harmadik legnagyobb városa.",
                "Itt található a híres Prado Múzeum Velázquez és Goya remekműveivel.",
                "A Palacio Real a legnagyobb alapterületű királyi palota Európában.",
                "Madrid egy fennsíkon fekszik, és Európa legmagasabban fekv�? f�?városa.",
                "A Retiro park zöld oázist kínál egy nagy mesterséges tóval.",
                "A város a világhírű Real Madrid és Atlético Madrid futballklubok otthona.",
                "A Puerta del Sol Spanyolország szimbolikus középpontja (nulladik kilométerk�?).",
                "Madrid rendelkezik Európa egyik legnagyobb metróhálózatával."
          ],
          "ro": [
                "Este al treilea ora�? ca m�?rime din Uniunea European�?.",
                "G�?zduie�?te faimosul Muzeu Prado cu capodopere de Velázquez �?i Goya.",
                "Palacio Real este cel mai mare palat regal din Europa ca suprafa�?�?.",
                "Madrid este situat pe un platou �?i este cea mai înalt�? capital�? din Europa.",
                "Parcul Retiro ofer�? o oaz�? de verdea�?�? cu un mare lac artificial.",
                "Ora�?ul este casa renumitelor cluburi de fotbal Real Madrid �?i Atlético Madrid.",
                "Puerta del Sol este centrul simbolic (kilometrul zero) al Spaniei.",
                "Madrid are una dintre cele mai mari re�?ele de metrou din Europa."
          ],
          "en": [
                "It is the third-largest city in the European Union.",
                "Houses the famous Prado Museum featuring masterpieces by Velázquez and Goya.",
                "The Palacio Real is the largest royal palace in Europe by floor area.",
                "Madrid is situated on a plateau and is the highest capital city in Europe.",
                "El Retiro Park offers a green oasis complete with a large artificial lake.",
                "The city is home to the world-renowned football clubs Real Madrid and Atlético Madrid.",
                "The Puerta del Sol is the symbolic center (Kilometer Zero) of Spain.",
                "Madrid has one of the most extensive metro networks in Europe."
          ]
    },
    image: "/geo-images/spain/madrid.webp",
    
  },
  {
    id: "es-barcelona", type: "city", parent: "ES-CT", coords: [2.1686, 41.3874],
    name: {"de": "Barcelona", "hu": "Barcelona", "ro": "Barcelona", "en": "Barcelona"},
    description: {
      de: "Barcelona ist die Hauptstadt Kataloniens, eine pulsierende Metropole am Mittelmeer, bekannt für die einzigartige Architektur von Antoni Gaudí, das Gotische Viertel und ihre lebendigen Stadtstrände.",
      hu: "Barcelona Katalónia f�?városa, a Földközi-tenger partján fekv�? lüktet�? metropolisz, amely Antoni Gaudí egyedülálló építészetér�?l, a Gótikus negyedr�?l és nyüzsg�? városi strandjairól ismert.",
      ro: "Barcelona este capitala Cataloniei, o metropol�? vibrant�? la Marea Mediteran�?, cunoscut�? pentru arhitectura unic�? a lui Antoni Gaudí, Cartierul Gotic �?i plajele sale urbane pline de via�?�?.",
      en: "Barcelona is the capital of Catalonia, a vibrant metropolis on the Mediterranean, known for the unique architecture of Antoni Gaudí, the Gothic Quarter, and its lively urban beaches."
    },
    descriptionAdvanced: {          "de": "Barcelona ist die faszinierende Hauptstadt Kataloniens und liegt direkt an der sonnigen Mittelmeerküste. Die Stadt ist ein architektonisches Wunderwerk, ma�?geblich geprägt durch die unverkennbaren Werke von Antoni Gaudí. Sie vereint geschickt mittelalterliche Viertel wie das Gotische Viertel mit moderner Stadtplanung. Barcelona bietet nicht nur Weltklasse-Kultur und Kunst, sondern auch lebhafte Stadtstrände und eine exzellente Gastronomie. Diese einzigartige Kombination aus Strandleben und Metropolenflair macht sie zu einem der beliebtesten Reiseziele Europas.",
          "hu": "Barcelona Katalónia lenyűgöz�? f�?városa, amely közvetlenül a napfényes Földközi-tenger partján fekszik. A város építészeti csoda, amelyet jelent�?sen meghatároznak Antoni Gaudí összetéveszthetetlen alkotásai. �?gyesen ötvözi a középkori negyedeket, mint a Gótikus negyed, a modern várostervezéssel. Barcelona nemcsak világklasszis kultúrát és művészetet kínál, hanem nyüzsg�? városi strandokat és kiváló gasztronómiát is. A tengerparti élet és a metropolisz hangulatának ez az egyedülálló kombinációja Európa egyik legnépszerűbb úti céljává teszi.",
          "ro": "Barcelona este capitala fascinant�? a Cataloniei, situat�? chiar pe coasta însorit�? a M�?rii Mediterane. Ora�?ul este o minune arhitectural�?, influen�?at semnificativ de lucr�?rile inconfundabile ale lui Antoni Gaudí. Combin�? cu pricepere cartierele medievale, cum ar fi Cartierul Gotic, cu planificarea urban�? modern�?. Barcelona ofer�? nu doar cultur�? �?i art�? de talie mondial�?, ci �?i plaje urbane pline de via�?�? �?i o gastronomie excelent�?. Aceast�? combina�?ie unic�? de via�?�? la plaj�? �?i fler metropolitan o face una dintre cele mai populare destina�?ii din Europa.",
          "en": "Barcelona is the fascinating capital of Catalonia, located right on the sunny Mediterranean coast. The city is an architectural marvel, heavily influenced by the unmistakable works of Antoni Gaudí. It cleverly combines medieval neighborhoods like the Gothic Quarter with modern urban planning. Barcelona offers not only world-class culture and art but also lively city beaches and excellent gastronomy. This unique combination of beach life and metropolitan flair makes it one of the most popular destinations in Europe."
    },
    facts: {
          "de": [
                "Berühmt für die noch unvollendete Basilika Sagrada Família von Antoni Gaudí.",
                "Der Park Güell bietet bunte Mosaike und einen tollen Blick über die Stadt.",
                "Las Ramblas ist die bekannteste Flaniermeile, die zum Hafen führt.",
                "Die Stadt hat mehrere Kilometer an künstlich angelegten Sandstränden.",
                "Das Camp Nou ist das grö�?te Fu�?ballstadion Europas und Heimat des FC Barcelona.",
                "Das Gotische Viertel ist eines der besterhaltenen mittelalterlichen Stadtzentren Europas.",
                "Barcelona war der stolze Gastgeber der Olympischen Sommerspiele 1992.",
                "Die katalanische Küche glänzt mit Gerichten wie Fideuà und Crema Catalana."
          ],
          "hu": [
                "Híres Antoni Gaudí még befejezetlen bazilikájáról, a Sagrada Famíliáról.",
                "A Güell park színes mozaikokat és nagyszerű kilátást kínál a városra.",
                "A Las Ramblas a legismertebb sétálóutca, amely a kiköt�?höz vezet.",
                "A város több kilométernyi mesterségesen kialakított homokos stranddal rendelkezik.",
                "A Camp Nou Európa legnagyobb futballstadionja és az FC Barcelona otthona.",
                "A Gótikus negyed Európa egyik legjobb állapotban fennmaradt középkori városközpontja.",
                "Barcelona volt az 1992-es nyári olimpiai játékok büszke házigazdája.",
                "A katalán konyha olyan ételekkel jeleskedik, mint a fideuà és a crema catalana."
          ],
          "ro": [
                "Renumit�? pentru bazilica înc�? neterminat�? Sagrada Família a lui Antoni Gaudí.",
                "Parcul Güell ofer�? mozaicuri colorate �?i o vedere excelent�? asupra ora�?ului.",
                "Las Ramblas este cea mai faimoas�? promenad�?, care duce spre port.",
                "Ora�?ul are câ�?iva kilometri de plaje artificiale cu nisip.",
                "Camp Nou este cel mai mare stadion de fotbal din Europa �?i casa FC Barcelona.",
                "Cartierul Gotic este unul dintre cele mai bine conservate centre medievale din Europa.",
                "Barcelona a fost gazda mândr�? a Jocurilor Olimpice de var�? din 1992.",
                "Buc�?t�?ria catalan�? str�?luce�?te cu preparate precum fideuà �?i crema catalana."
          ],
          "en": [
                "Famous for Antoni Gaudí's still unfinished Sagrada Família basilica.",
                "Park Güell features colorful mosaics and great views over the city.",
                "Las Ramblas is the most famous pedestrian street leading to the port.",
                "The city boasts several kilometers of artificially created sandy beaches.",
                "Camp Nou is the largest football stadium in Europe and home to FC Barcelona.",
                "The Gothic Quarter is one of the best-preserved medieval city centers in Europe.",
                "Barcelona was the proud host of the 1992 Summer Olympic Games.",
                "Catalan cuisine shines with dishes such as fideuà and crema catalana."
          ]
    },
    image: "/geo-images/spain/barcelona.webp",
    
  },
  {
    id: "es-valencia", type: "city", parent: "ES-VC", coords: [-0.3763, 39.4699],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencia"},
    
    description: {
          "de": "Valencia ist Spaniens drittgrö�?te Stadt und verbindet historischen Charme auf wunderbare Weise mit futuristischer Architektur. Sie liegt an der Mittelmeerküste und profitiert von einem sonnigen Klima und ausgedehnten Sandstränden. Das weltberühmte Gericht Paella hat hier seinen Ursprung und ist fester Bestandteil der lokalen Identität. Im Herzen der Stadt verläuft der Turia-Park, ein grüner Streifen im ausgetrockneten Flussbett, der Sportler und Spaziergänger anzieht. Valencia ist auch bekannt für das spektakuläre Frühlingsfest Las Fallas, bei dem riesige Skulpturen verbrannt werden.",
          "hu": "Valencia Spanyolország harmadik legnagyobb városa, amely csodálatosan ötvözi a történelmi bájokat a futurisztikus építészettel. A Földközi-tenger partján fekszik, napos éghajlattal és kiterjedt homokos strandokkal rendelkezik. A világhírű paella étel innen származik, és a helyi identitás szerves része. A város szívében húzódik a Turia park, egy zöld sáv a kiszáradt folyómederben, amely vonzza a sportolókat és a sétálókat. Valencia ismert a látványos Las Fallas tavaszi fesztiválról is, ahol hatalmas szobrokat égetnek el.",
          "ro": "Valencia este al treilea ora�? ca m�?rime din Spania �?i combin�? minunat farmecul istoric cu arhitectura futurist�?. Este situat pe coasta M�?rii Mediterane �?i beneficiaz�? de un climat însorit �?i plaje întinse cu nisip. Renumitul fel de mâncare paella este originar de aici �?i este o parte integrant�? a identit�?�?ii locale. �?n inima ora�?ului se afl�? Parcul Turia, o fâ�?ie verde în albia secat�? a râului, care atrage sportivi �?i plimb�?re�?i. Valencia este cunoscut�? �?i pentru spectaculosul festival de prim�?var�? Las Fallas, unde sunt arse sculpturi uria�?e.",
          "en": "Valencia is Spain's third-largest city, beautifully blending historical charm with futuristic architecture. Located on the Mediterranean coast, it benefits from a sunny climate and extensive sandy beaches. The world-famous dish paella originated here and is an integral part of the local identity. In the heart of the city runs the Turia Park, a green ribbon in the dried-up riverbed that attracts athletes and walkers. Valencia is also known for the spectacular Las Fallas spring festival, where giant sculptures are burned."
    }, descriptionAdvanced: { de: "", hu: "Valencia, Spanyolorsz�g harmadik legnagyobb v�rosa egy leny?g�z? kever�ke a futurisztikus �p�t�szetnek, a gazdag t�rt�nelemnek �s a m�lyen gy�kerez? mediterr�n hagyom�nyoknak. A kisz�r�tott �s �talak�tott Turia foly�meder egy kilenc kilom�ter hossz�, csod�latos parkk�nt szeli �t a v�rost, amely egyenesen a l�tv�nyos 'M?v�szetek �s Tudom�nyok V�ros�hoz' vezet. A kanyarg�s t�rt�nelmi k�zpontban (Barrio del Carmen) a nagyszer? utcai m?v�szet mellett tal�lhat� az UNESCO vil�g�r�ks�gi Selyemb�rze (La Lonja). Valencia az eredeti spanyol paella b�szke haz�ja, amelyet hagyom�nyosan ny�llal, csirk�vel �s babbal k�sz�tenek. Minden tavasszal a v�ros l�ngokba borul a f�lsiket�t? Las Fallas fesztiv�l idej�n.", ro: "", en: "Valencia is Spain's vibrant third-largest city, brilliantly situated on the Mediterranean coast where the Turia River meets the sea. It perfectly encapsulates a striking contrast between a deeply historical core, featuring Gothic silk exchanges and vibrant central markets, and an ultra-modern, futuristic architectural spirit. The city is globally recognized as the undisputed home of authentic Spanish paella, reflecting its rich agricultural surroundings and maritime heritage. Valencia offers a relaxed yet dynamic atmosphere, boasting expansive urban parks created in a rerouted riverbed and a strong devotion to local arts and sciences." }, factsAdvanced: { de: [], hu: [
        "A futurisztikus 'M?v�szetek �s Tudom�nyok V�ros�t' (Ciudad de las Artes y las Ciencias) Santiago Calatrava szt�r�p�t�sz tervezte.",
        "A g�tikus La Lonja de la Seda a 15. sz�zadi valenciai aranykor hatalmas gazdags�g�r�l tan�skodik.",
        "A valenciai katedr�lisban ?riznek egy ?si kelyhet, amelyet a katolikus egyh�z a Szent Gr�lk�nt tisztel.",
        "Az eredeti valenciai paella sosem tartalmaz tenger gy�m�lcseit, kiz�r�lag h�st, valamint lapos z�ldbabot."
      ], ro: [], en: [
        "The City of Arts and Sciences in Valencia is a massive, futuristic entertainment-based architectural complex designed by Santiago Calatrava.",
        "Valencia's La Lonja de la Seda is a masterpiece of late Gothic architecture and a designated UNESCO World Heritage site.",
        "The Turia Gardens, a sprawling 9-kilometer park running through the city, was created after a devastating flood diverted the river in 1957."
      ] },
    facts: {
          "de": [
                "Heimat der avantgardistischen Stadt der Künste und Wissenschaften.",
                "Das historische Zentrum beherbergt die Seidenbörse La Lonja de la Seda.",
                "Die Paella Valenciana wird traditionell mit Kaninchen, Huhn und Bohnen zubereitet.",
                "Der Kathedrale von Valencia wird nachgesagt, den echten Heiligen Gral zu beherbergen.",
                "Das Oceanogràfic in Valencia ist das grö�?te Aquarium Europas.",
                "Der Turia-Park ist mit über 9 Kilometern Länge einer der grö�?ten Stadtparks Spaniens.",
                "Das Las Fallas Fest ist als UNESCO-immaterielles Kulturerbe anerkannt.",
                "Die lebhafte Markthalle Mercado Central gilt als Meisterwerk des Modernismus."
          ],
          "hu": [
                "A futurisztikus Művészetek és Tudományok Városának otthona.",
                "A történelmi központban található a La Lonja de la Seda Selyembörze.",
                "A Paella Valenciana hagyományosan nyúllal, csirkével és babbal készül.",
                "A valenciai katedrálisról úgy tartják, hogy ott �?rzik az igazi Szent Grált.",
                "A valenciai Oceanogràfic Európa legnagyobb akváriuma.",
                "A több mint 9 kilométer hosszú Turia park Spanyolország egyik legnagyobb városi parkja.",
                "A Las Fallas fesztivált az UNESCO szellemi kulturális örökségként ismeri el.",
                "A nyüzsg�? Mercado Central vásárcsarnok a modernizmus remekműve."
          ],
          "ro": [
                "G�?zduie�?te avangardistul Ora�? al Artelor �?i �?tiin�?elor.",
                "Centrul istoric ad�?poste�?te Bursa de M�?tase La Lonja de la Seda.",
                "Paella Valenciana este preparat�? tradi�?ional cu iepure, pui �?i fasole.",
                "Se spune c�? Catedrala din Valencia ad�?poste�?te adev�?ratul Sfânt Graal.",
                "Oceanogràfic din Valencia este cel mai mare acvariu din Europa.",
                "Cu o lungime de peste 9 kilometri, Parcul Turia este unul dintre cele mai mari parcuri urbane din Spania.",
                "Festivalul Las Fallas este recunoscut ca patrimoniu cultural imaterial UNESCO.",
                "Pia�?a plin�? de via�?�? Mercado Central este considerat�? o capodoper�? a modernismului."
          ],
          "en": [
                "Home to the avant-garde City of Arts and Sciences.",
                "The historic center houses the La Lonja de la Seda Silk Exchange.",
                "Paella Valenciana is traditionally prepared with rabbit, chicken, and beans.",
                "The Valencia Cathedral is said to house the authentic Holy Grail.",
                "The Oceanogràfic in Valencia is the largest aquarium in Europe.",
                "At over 9 kilometers long, Turia Park is one of the largest urban parks in Spain.",
                "The Las Fallas festival is recognized as a UNESCO Intangible Cultural Heritage.",
                "The lively Mercado Central market hall is considered a masterpiece of Modernism."
          ]
    },
    image: "/geo-images/spain/valencia.webp",
    
  },
  {
    id: "es-sevilla", type: "city", parent: "ES-AN", coords: [-5.9845, 37.3891],
    name: {"de": "Sevilla", "hu": "Sevilla", "ro": "Sevilia", "en": "Seville"},
    
    description: {
          "de": "Sevilla, die Hauptstadt Andalusiens, ist das schlagende Herz der südspanischen Kultur. Die Stadt ist der Geburtsort des Flamenco und fasziniert mit einer Architektur, die maurische und christliche Einflüsse meisterhaft vereint. Die engen, gewundenen Gassen des Barrio Santa Cruz laden zum Erkunden ein, während der Duft von Orangenblüten die Luft erfüllt. Sevilla ist auch bekannt für seine epischen Osterprozessionen und die farbenfrohe Feria de Abril. Die Hitze im Sommer ist legendär, doch die lebhafte Atmosphäre der Stadt zieht das ganze Jahr über Besucher in ihren Bann.",
          "hu": "Sevilla, Andalúzia f�?városa, a dél-spanyol kultúra lüktet�? szíve. A város a flamenco szül�?helye, és olyan építészettel nyűgöz le, amely mesterien ötvözi a mór és a keresztény hatásokat. A Barrio Santa Cruz szűk, kanyargós utcái felfedezésre hívnak, miközben a narancsvirág illata betölti a leveg�?t. Sevilla híres az epikus húsvéti körmeneteir�?l és a színpompás Feria de Abril fesztiválról is. A nyári h�?ség legendás, de a város nyüzsg�? atmoszférája egész évben rabul ejti a látogatókat.",
          "ro": "Sevilia, capitala Andaluziei, este inima care bate a culturii spaniole de sud. Ora�?ul este locul de na�?tere al flamenco-ului �?i fascineaz�? cu o arhitectur�? care combin�? cu m�?iestrie influen�?ele maure �?i cre�?tine. Str�?zile înguste �?i �?erpuite din Barrio Santa Cruz invit�? la explorare, în timp ce parfumul florilor de portocal umple aerul. Sevilia este, de asemenea, cunoscut�? pentru procesiunile sale epice de Pa�?te �?i pentru colorata Feria de Abril. C�?ldura verii este legendar�?, dar atmosfera plin�? de via�?�? a ora�?ului captiveaz�? vizitatorii pe tot parcursul anului.",
          "en": "Seville, the capital of Andalusia, is the beating heart of southern Spanish culture. The city is the birthplace of flamenco and fascinates with architecture that masterfully combines Moorish and Christian influences. The narrow, winding streets of the Barrio Santa Cruz invite exploration, while the scent of orange blossoms fills the air. Seville is also known for its epic Easter processions and the colorful Feria de Abril. The summer heat is legendary, yet the lively atmosphere of the city captivates visitors year-round."
    }, descriptionAdvanced: { de: "", hu: "Sevilla, Andal�zia pomp�s f?v�rosa p�ratlan �p�t�szet�vel, m�ly szenved�ly�vel �s gazdag t�rt�nelm�vel var�zsolja el a l�togat�kat. A hatalmas sevillai katedr�lis, amelyben Kolumbusz Krist�f �ll�t�lagos s�rja is tal�lhat�, a vil�g legnagyobb g�tikus temploma. A szomsz�dos Alc�zar kir�lyi palota leny?g�z? mud�jar �p�t�szet�vel �s a m�rok �ltal ihletett, gy�ny�r?en parkos�tott kertjeivel ny?g�z le. Sevilla a flamenco vitathatatlan f?v�rosa, �s minden �vben meg�nnepli a sz�nes, m�mor�t� Feria de Abrilt (�prilisi V�s�r). A Barrio Santa Cruz negyed kanyarg�s, narancsf�kkal szeg�lyezett utc�i megsz�ml�lhatatlan t�rt�netet mes�lnek el az elm�lt �vsz�zadokb�l.", ro: "", en: "Seville, the enchanting capital of Andalusia, is a city draped in romance, profound history, and quintessential Spanish traditions. Set along the banks of the Guadalquivir River, its stunning architecture reflects a glorious past shaped by Moorish rulers and the vast wealth of the Spanish Empire. The city is the undisputed heartland of flamenco, where passionate dance and music echo through its narrow, winding alleyways. Seville vibrates with life, particularly during its fragrant, orange-blossom spring, and is famed for hosting some of Spain's most spectacular and traditional festivals." }, factsAdvanced: { de: [], hu: [
        "A sevillai katedr�lis harangtornya, a Giralda eredetileg a 12. sz�zadban �p�lt m�r minaret volt.",
        "A Plaza de Espa�a �p�letegy�ttese az 1929-es Ibero-Amerikai Ki�ll�t�sra �p�lt, �s a Csillagok h�bor�ja egyik forgat�si helysz�ne is volt.",
        "Sevilla a vil�g legforr�bb nagyv�rosai k�z� tartozik, ahol a ny�ri h?m�rs�klet rendszeresen meghaladja a 40�C-ot.",
        "A sevillai Alc�zar a mai napig a spanyol kir�lyi csal�d hivatalos sevillai rezidenci�jak�nt m?k�dik."
      ], ro: [], en: [
        "The Alc�zar of Seville is the oldest royal palace still in use in Europe and showcases exquisite Mud�jar architecture.",
        "Seville Cathedral is the largest Gothic cathedral in the world and houses the monumental tomb of Christopher Columbus.",
        "During the 16th century, Seville held a monopoly on trade with the Americas, making it one of the richest cities in Europe."
      ] },
    facts: {
          "de": [
                "Die Kathedrale von Sevilla ist die grö�?te gotische Kathedrale der Welt.",
                "Der Alcázar von Sevilla ist ein atemberaubender königlicher Palast im Mudéjar-Stil.",
                "Der Giralda-Turm, einst ein Minarett, ist das Wahrzeichen der Stadt.",
                "Das Barrio Santa Cruz war das ehemalige jüdische Viertel von Sevilla.",
                "Die Plaza de España ist ein monumentaler, halbrunder Platz, erbaut für die Expo 1929.",
                "Sevilla liegt am schiffbaren Fluss Guadalquivir.",
                "Das Grab von Christoph Kolumbus befindet sich in der Kathedrale.",
                "Tapas wie Jamón Ibérico und Salmorejo sind hier allgegenwärtig."
          ],
          "hu": [
                "A sevillai katedrális a világ legnagyobb gótikus katedrálisa.",
                "A sevillai Alcázar egy lélegzetelállító, mudéjar stílusú királyi palota.",
                "A Giralda torony, egykori minaret, a város jelképe.",
                "A Barrio Santa Cruz Sevilla egykori zsidó negyede volt.",
                "A Plaza de España egy monumentális, félkör alakú tér, amely az 1929-es expóra épült.",
                "Sevilla a hajózható Guadalquivir folyó partján fekszik.",
                "Kolumbusz Kristóf sírja a katedrálisban található.",
                "Az olyan tapasok, mint a Jamón Ibérico és a Salmorejo, itt mindennaposak."
          ],
          "ro": [
                "Catedrala din Sevilia este cea mai mare catedral�? gotic�? din lume.",
                "Alcázarul din Sevilia este un palat regal uluitor în stil Mudéjar.",
                "Turnul Giralda, odinioar�? minaret, este reperul ora�?ului.",
                "Barrio Santa Cruz a fost fostul cartier evreiesc din Sevilia.",
                "Plaza de España este o pia�?�? monumental�?, semicircular�?, construit�? pentru Expozi�?ia din 1929.",
                "Sevilia este situat�? pe râul navigabil Guadalquivir.",
                "Mormântul lui Cristofor Columb se afl�? în catedral�?.",
                "Tapas precum Jamón Ibérico �?i Salmorejo sunt omniprezente aici."
          ],
          "en": [
                "Seville Cathedral is the largest Gothic cathedral in the world.",
                "The Alcázar of Seville is a breathtaking royal palace in the Mudéjar style.",
                "The Giralda tower, once a minaret, is the city's iconic landmark.",
                "The Barrio Santa Cruz was the former Jewish quarter of Seville.",
                "The Plaza de España is a monumental, semicircular square built for the 1929 Expo.",
                "Seville is situated on the navigable Guadalquivir River.",
                "The tomb of Christopher Columbus is located inside the cathedral.",
                "Tapas such as Jamón Ibérico and Salmorejo are ubiquitous here."
          ]
    },
    image: "/geo-images/spain/seville.webp",
    
  },
  {
    id: "es-zaragoza", type: "city", parent: "ES-AR", coords: [-0.8877, 41.6497],
    name: {"de": "Zaragoza", "hu": "Zaragoza", "ro": "Zaragoza", "en": "Zaragoza"},
    
    description: {
          "de": "Zaragoza ist eine faszinierende historische Stadt, die strategisch günstig zwischen Madrid und Barcelona am Ufer des Ebro liegt. Die Stadt ist ein Schmelztiegel der Kulturen und spiegelt über 2000 Jahre Geschichte wider, von römischen Ruinen bis zu islamischer und christlicher Architektur. Ihr bekanntestes Wahrzeichen ist die beeindruckende Basilika Nuestra Señora del Pilar, die Pilger aus aller Welt anzieht. Zaragoza bietet eine authentische spanische Erfahrung abseits des Massentourismus. Die lebhafte Tapas-Szene im El Tubo-Viertel ist ein Traum für jeden Feinschmecker.",
          "hu": "Zaragoza egy lenyűgöz�? történelmi város, amely stratégiailag kiváló helyen, Madrid és Barcelona között, az Ebro folyó partján fekszik. A város a kultúrák olvasztótégelye, amely több mint 2000 év történelmét tükrözi, a római romoktól kezdve az iszlám és keresztény építészetig. Legismertebb nevezetessége a lenyűgöz�? Nuestra Señora del Pilar bazilika, amely a világ minden tájáról vonzza a zarándokokat. Zaragoza hiteles spanyol élményt nyújt, távol a tömegturizmustól. Az El Tubo negyed pezsg�? tapas-kínálata minden ínyenc álma.",
          "ro": "Zaragoza este un ora�? istoric fascinant, situat strategic între Madrid �?i Barcelona, pe malurile râului Ebro. Ora�?ul este un creuzet al culturilor, reflectând peste 2000 de ani de istorie, de la ruine romane la arhitectura islamic�? �?i cre�?tin�?. Cel mai faimos reper al s�?u este impresionanta Bazilic�? Nuestra Señora del Pilar, care atrage pelerini din întreaga lume. Zaragoza ofer�? o experien�?�? spaniol�? autentic�?, departe de turismul de mas�?. Scena animat�? de tapas din cartierul El Tubo este visul oric�?rui gurmand.",
          "en": "Zaragoza is a fascinating historic city strategically located between Madrid and Barcelona on the banks of the Ebro River. The city is a melting pot of cultures, reflecting over 2,000 years of history, from Roman ruins to Islamic and Christian architecture. Its most famous landmark is the impressive Basilica of Nuestra Señora del Pilar, which attracts pilgrims from all over the world. Zaragoza offers an authentic Spanish experience away from mass tourism. The lively tapas scene in the El Tubo district is a foodie's dream."
    }, descriptionAdvanced: { de: "", hu: "A strat�giailag kedvez? helyen, az Ebro foly� partj�n fekv? Zaragoza Arag�nia l�ktet? �s t�rt�nelmi f?v�rosa, majdnem pontosan Madrid �s Barcelona k�z�tt f�l�ton. A v�ros vitathatatlan jelk�pe a foly� partj�n magasod� monument�lis Bas�lica del Pilar, amely a vil�g egyik legfontosabb M�ria-kegyhelye. Az Aljafer�a egy leny?g�z? iszl�m er?dpalota, amely l�tv�nyosan hangs�lyozza a v�ros t�rt�nelmi �s kultur�lis jelent?s�g�t a m�r korban. Zaragoza mindig is kulcsszerepet j�tszott Spanyolorsz�g t�rt�nelm�ben, �s 2008-ban a Nemzetk�zi Vil�gki�ll�t�s (Expo) h�zigazd�ja volt. Az �lettel teli �v�ros rengeteg l�tnival�t �s kiv�l�, hangulatos tapas-utc�kat k�n�l.", ro: "", en: "Zaragoza, the proud capital of the Aragon region, is a culturally rich city strategically located on the banks of the mighty Ebro River. Its history spans over two millennia, boasting an incredible architectural legacy that includes Roman ruins, Moorish palaces, and stunning Baroque basilicas. The city served as a vital crossroads of civilizations, and this diverse heritage is beautifully preserved in its historic center. Zaragoza is known for its welcoming atmosphere, robust local gastronomy, and significant religious devotion, drawing millions of pilgrims and visitors annually." }, factsAdvanced: { de: [], hu: [
        "A zaragozai Aljafer�a palota a leg�szakibb �s legfontosabb iszl�m palota�p�let az Ib�riai-f�lszigeten, amely az Al-Andalus id?szak�b�l fennmaradt.",
        "A Bas�lica del Pilar ad otthont egy oszlopnak, amelyen a hagyom�ny szerint Sz?z M�ria megjelent Szent Jakab apostolnak.",
        "A v�ros nev�t az �kori r�mai alap�t�ja, Augustus cs�sz�r (Caesaraugusta) ut�n kapta.",
        "A zaragozai El Tubo negyed h�res a tapas-b�rjair�l, ahol minden este helyiek ezrei gy?lnek �ssze falatozni."
      ], ro: [], en: [
        "The Basilica of Our Lady of the Pillar is said to be the first church in history dedicated to Mary, making it a major pilgrimage site.",
        "The Aljafer�a Palace is an 11th-century fortified Islamic palace and a prime example of Hispano-Muslim architecture outside Andalusia.",
        "Zaragoza hosted the international Expo 2008, an event that led to significant modernization and revitalization of its riverfront."
      ] },
    facts: {
          "de": [
                "Zaragoza ist die fünftgrö�?te Stadt in Spanien.",
                "Die Basilika del Pilar beherbergt Fresken des berühmten Malers Francisco de Goya.",
                "Der Aljafería-Palast ist ein prächtiges Beispiel der islamischen Mudéjar-Architektur.",
                "Die Stadt veranstaltete die Expo 2008 zum Thema 'Wasser und nachhaltige Entwicklung'.",
                "Zaragoza bewahrt bedeutende Reste des römischen Cäsaraugusta, darunter ein Theater.",
                "Das jährliche Fiestas del Pilar-Fest im Oktober dauert zehn Tage.",
                "Die Puente de Piedra ist eine historische Brücke über den Fluss Ebro.",
                "Das El Tubo-Viertel ist berühmt für seine dichten Gassen voller Tapas-Bars."
          ],
          "hu": [
                "Zaragoza Spanyolország ötödik legnagyobb városa.",
                "A Pilar-bazilika a híres fest�?, Francisco de Goya freskóit �?rzi.",
                "Az Aljafería palota az iszlám mudéjar építészet csodálatos példája.",
                "A város adott otthont a 2008-as Expónak, amelynek témája a 'Víz és fenntartható fejl�?dés' volt.",
                "Zaragoza meg�?rizte a római Caesaraugusta jelent�?s maradványait, köztük egy színházat.",
                "Az éves Fiestas del Pilar fesztivál októberben tíz napig tart.",
                "A Puente de Piedra egy történelmi híd az Ebro folyó felett.",
                "Az El Tubo negyed híres a tapas bárokkal teli sűrű utcáiról."
          ],
          "ro": [
                "Zaragoza este al cincilea ora�? ca m�?rime din Spania.",
                "Bazilica del Pilar ad�?poste�?te fresce ale celebrului pictor Francisco de Goya.",
                "Palatul Aljafería este un exemplu magnific al arhitecturii islamice Mudéjar.",
                "Ora�?ul a g�?zduit Expo 2008 pe tema 'Ap�? �?i dezvoltare durabil�?'.",
                "Zaragoza p�?streaz�? vestigii semnificative din Caesaraugusta roman�?, inclusiv un teatru.",
                "Festivalul anual Fiestas del Pilar din octombrie dureaz�? zece zile.",
                "Puente de Piedra este un pod istoric peste râul Ebro.",
                "Cartierul El Tubo este faimos pentru str�?du�?ele sale pline de baruri de tapas."
          ],
          "en": [
                "Zaragoza is the fifth-largest city in Spain.",
                "The Basilica del Pilar houses frescoes by the famous painter Francisco de Goya.",
                "The Aljafería Palace is a magnificent example of Islamic Mudéjar architecture.",
                "The city hosted Expo 2008 with the theme 'Water and Sustainable Development'.",
                "Zaragoza preserves significant remains of the Roman Caesaraugusta, including a theater.",
                "The annual Fiestas del Pilar festival in October lasts for ten days.",
                "The Puente de Piedra is a historic bridge across the Ebro River.",
                "The El Tubo district is famous for its dense streets full of tapas bars."
          ]
    },
    image: "/geo-images/spain/zaragoza.webp",
    
  },
  {
    id: "es-malaga", type: "city", parent: "ES-AN", coords: [-4.4214, 36.7213],
    name: {"de": "Málaga", "hu": "Málaga", "ro": "Málaga", "en": "Málaga"},
    
    description: {
          "de": "Málaga ist eine dynamische Hafenstadt an der sonnenverwöhnten Costa del Sol in Andalusien. Als Geburtsort von Pablo Picasso atmet die Stadt Kunst und Kultur, was sich in zahlreichen erstklassigen Museen wie dem Museo Picasso widerspiegelt. Die historische Architektur wird gekrönt von der imposanten maurischen Festung Alcazaba und der nahegelegenen Burg Gibralfaro, die einen Panoramablick bieten. Málaga verbindet eine reiche, jahrtausendealte Geschichte nahtlos mit einem modernen, entspannten Strandleben. Die lebendige Hafenpromenade und das ausgezeichnete Meeresfrüchte-Angebot machen sie zu einem unvergesslichen Erlebnis.",
          "hu": "Málaga egy dinamikus kiköt�?város Andalúziában, a napsütötte Costa del Sol partján. Pablo Picasso szül�?helyeként a város a művészetet és a kultúrát lélegzi, ami számos els�? osztályú múzeumban, például a Museo Picassóban is megmutatkozik. A történelmi építészetet az impozáns mór er�?d, az Alcazaba és a közeli Gibralfaro vár koronázza meg, ahonnan panorámás kilátás nyílik. Málaga zökken�?mentesen ötvözi a gazdag, évezredes történelmet a modern, nyugodt tengerparti élettel. A nyüzsg�? kiköt�?i sétány és a kiváló tengeri ételek felejthetetlen élménnyé teszik.",
          "ro": "Málaga este un ora�? portuar dinamic pe însorita Costa del Sol din Andaluzia. Ca loc de na�?tere al lui Pablo Picasso, ora�?ul respir�? art�? �?i cultur�?, ceea ce se reflect�? în numeroase muzee de prim�? clas�?, cum ar fi Museo Picasso. Arhitectura istoric�? este încoronat�? de impun�?toarea cetate maur�? Alcazaba �?i de Castelul Gibralfaro din apropiere, care ofer�? vederi panoramice. Málaga îmbin�? perfect o istorie bogat�? de milenii cu o via�?�? modern�? �?i relaxat�? la plaj�?. Promenada plin�? de via�?�? a portului �?i oferta excelent�? de fructe de mare o fac o experien�?�? de neuitat.",
          "en": "Málaga is a dynamic port city on the sun-drenched Costa del Sol in Andalusia. As the birthplace of Pablo Picasso, the city breathes art and culture, reflected in numerous first-class museums such as the Museo Picasso. The historic architecture is crowned by the imposing Moorish fortress Alcazaba and the nearby Gibralfaro Castle, offering panoramic views. Málaga seamlessly blends a rich, millennial history with modern, relaxed beach life. The lively harbor promenade and excellent seafood offerings make it an unforgettable experience."
    }, descriptionAdvanced: { de: "", hu: "M�laga egy pezsg? kik�t?v�ros a naps�t�tte Costa del Sol partj�n, �s a huszadik sz�zad zsenij�nek, Pablo Picass�nak a b�szke sz�l?v�rosa. Az elm�lt �vtizedekben a v�ros puszta k�zleked�si csom�pontb�l egy jelent?s kultur�lis k�zpontt� fejl?d�tt, sz�mos els? oszt�ly� m�zeummal. A modern v�ros f�l�tt magasodik az Alcazaba �s a Castillo de Gibralfaro m�r er?d�tm�nyei, amelyek leny?g�z? bepillant�st engednek az iszl�m m�ltba. A t�rt�nelmi, forgalomcsillap�tott �v�ros ny�zsg? terekkel, eleg�ns bev�s�rl�utc�kkal �s kiv�l� andal�z tapas-b�rokkal h�vogat. A szokatlanul enyhe mediterr�n �ghajlat M�lag�t eg�sz �vben rendk�v�l vonz� �ti c�ll� teszi.", ro: "", en: "M�laga is a sun-drenched, vibrant port city on southern Spain's Costa del Sol, boasting a remarkably rich history that dates back nearly 3,000 years. As one of the oldest continuously inhabited cities in the world, it offers a fascinating layered heritage of Phoenician, Roman, and Moorish ruins seamlessly integrated into a modern urban landscape. In recent years, M�laga has undergone a cultural renaissance, establishing itself as a premier art destination with dozens of world-class museums. It perfectly balances profound historic charm with a relaxed, beachside lifestyle and excellent Andalusian cuisine." }, factsAdvanced: { de: [], hu: [
        "M�laga a Picasso M�zeum mellett olyan vil�gh�r? int�zm�nyek fi�kjaival b�szk�lkedhet, mint a p�rizsi Pompidou K�zpont.",
        "A v�ros t�rt�nelmi k�zpontj�ban tal�lhat� a Calle Larios, Spanyolorsz�g egyik legeleg�nsabb �s legdr�g�bb s�t�l�utc�ja.",
        "Az Alcazaba er?d�t gyakran az 'Alhambra kistestv�r�nek' is nevezik a hasonl� m�r �p�t�szeti megold�sai miatt.",
        "M�laga h�res �des, s?r? desszertbor�r�l, amelyet az aszalt Pedro Xim�nez sz?l?b?l k�sz�tenek."
      ], ro: [], en: [
        "M�laga is famously the birthplace of the legendary artist Pablo Picasso, whose life and work are celebrated at the dedicated Museo Picasso M�laga.",
        "The Alcazaba of M�laga is a stunningly preserved 11th-century Moorish palatial fortification overlooking the city and the sea.",
        "The city enjoys an average of 300 days of sunshine a year, making it a cornerstone of the Costa del Sol tourism industry."
      ] },
    facts: {
          "de": [
                "Málaga ist eine der ältesten Städte Europas, gegründet von den Phöniziern um 770 v. Chr.",
                "Die Stadt beheimatet ein römisches Theater direkt am Fu�?e der Festung Alcazaba.",
                "Die Kathedrale von Málaga wird oft 'La Manquita' (die Einarmige) genannt, da ihr zweiter Turm nie fertiggestellt wurde.",
                "Málaga ist berühmt für 'Espetos', traditionelle Sardinenspie�?e, die am Strand gegrillt werden.",
                "Die Calle Larios ist die berühmteste und eleganteste Einkaufsstra�?e der Stadt.",
                "Das Centre Pompidou Málaga ist die erste Auslandsniederlassung des Pariser Museums.",
                "Das jährliche Filmfestival von Málaga ist das wichtigste für das spanische Kino.",
                "Der Hafen von Málaga ist ein beliebter Anlaufpunkt für gro�?e internationale Kreuzfahrtschiffe."
          ],
          "hu": [
                "Málaga Európa egyik legrégebbi városa, amelyet a föníciaiak alapítottak i. e. 770 körül.",
                "A városban található egy római színház közvetlenül az Alcazaba er�?d lábánál.",
                "A málagai katedrálist gyakran 'La Manquita'-nak (az egykarúnak) hívják, mivel a második tornya sosem készült el.",
                "Málaga híres az 'Espetos'-ról, a tengerparton grillezett hagyományos szardínianyársakról.",
                "A Calle Larios a város leghíresebb és legelegánsabb bevásárlóutcája.",
                "A Centre Pompidou Málaga a párizsi múzeum els�? külföldi fiókintézménye.",
                "Az éves Málagai Filmfesztivál a spanyol mozi legfontosabb eseménye.",
                "A málagai kiköt�? a nagy nemzetközi tengerjáró hajók népszerű kiköt�?helye."
          ],
          "ro": [
                "Málaga este unul dintre cele mai vechi ora�?e din Europa, fondat de fenicieni în jurul anului 770 î.Hr.",
                "Ora�?ul g�?zduie�?te un teatru roman chiar la poalele cet�?�?ii Alcazaba.",
                "Catedrala din Málaga este adesea numit�? 'La Manquita' (ciunga), deoarece al doilea turn nu a fost niciodat�? finalizat.",
                "Málaga este renumit�? pentru 'Espetos', frig�?rui tradi�?ionale de sardine pr�?jite pe plaj�?.",
                "Calle Larios este cea mai faimoas�? �?i elegant�? strad�? comercial�? din ora�?.",
                "Centre Pompidou Málaga este prima filial�? de peste hotare a muzeului parizian.",
                "Festivalul anual de film de la Málaga este cel mai important pentru cinematografia spaniol�?.",
                "Portul din Málaga este un punct de oprire popular pentru marile nave de croazier�? interna�?ionale."
          ],
          "en": [
                "Málaga is one of the oldest cities in Europe, founded by the Phoenicians around 770 BC.",
                "The city is home to a Roman theater right at the foot of the Alcazaba fortress.",
                "The Cathedral of Málaga is often called 'La Manquita' (the one-armed lady) because its second tower was never finished.",
                "Málaga is famous for 'Espetos', traditional sardine skewers grilled on the beach.",
                "Calle Larios is the most famous and elegant shopping street in the city.",
                "The Centre Pompidou Málaga is the first overseas branch of the Parisian museum.",
                "The annual Málaga Film Festival is the most important event for Spanish cinema.",
                "The Port of Málaga is a popular port of call for large international cruise ships."
          ]
    },
    image: "/geo-images/spain/m-laga.webp",
    
  },
  {
    id: "es-bilbao", type: "city", parent: "ES-PV", coords: [-2.9350, 43.2630],
    name: {"de": "Bilbao", "hu": "Bilbao", "ro": "Bilbao", "en": "Bilbao"},
    
    description: {
          "de": "Bilbao ist das pulsierende Herz des Baskenlandes und ein weltweites Paradebeispiel für gelungene urbane Erneuerung. Einst eine graue Industriestadt, erlebte sie durch den Bau des spektakulären Guggenheim-Museums eine kulturelle Wiedergeburt. Die Stadt liegt reizvoll eingebettet zwischen grünen Hügeln am Ufer des Flusses Nervión. Die charmante Altstadt (Casco Viejo) mit ihren engen Gassen und lebhaften Plätzen bildet einen tollen Kontrast zur futuristischen Architektur. Bilbao ist zudem ein Paradies für Feinschmecker, berühmt für seine köstlichen Pintxos (baskische Tapas).",
          "hu": "Bilbao Baszkföld lüktet�? szíve és a sikeres városrehabilitáció világszintű példája. Az egykori szürke iparváros a látványos Guggenheim Múzeum felépítésével kulturális újjászületést élt át. A város varázslatosan fekszik zöld dombok között, a Nervión folyó partján. A bájos óváros (Casco Viejo) szűk utcáival és nyüzsg�? tereivel nagyszerű kontrasztot alkot a futurisztikus építészettel. Bilbao emellett a gasztronómia paradicsoma is, amely híres ízletes pintxosairól (baszk tapasokról).",
          "ro": "Bilbao este inima vibrant�? a �?�?rii Bascilor �?i un prim exemplu global de reînnoire urban�? de succes. Odat�? un ora�? industrial gri, a experimentat o rena�?tere cultural�? prin construirea spectaculosului Muzeu Guggenheim. Ora�?ul este frumos situat între dealuri verzi, pe malurile râului Nervión. Fermec�?torul ora�? vechi (Casco Viejo), cu str�?zile sale înguste �?i pie�?ele pline de via�?�?, ofer�? un contrast deosebit cu arhitectura futurist�?. Bilbao este, de asemenea, un paradis pentru gurmanzi, renumit pentru pintxos delicioase (tapas basce).",
          "en": "Bilbao is the vibrant heart of the Basque Country and a global prime example of successful urban renewal. Once a gray industrial city, it experienced a cultural rebirth with the construction of the spectacular Guggenheim Museum. The city is beautifully nestled between green hills on the banks of the Nervión River. The charming old town (Casco Viejo) with its narrow streets and lively squares provides a great contrast to the futuristic architecture. Bilbao is also a paradise for foodies, famous for its delicious pintxos (Basque tapas)."
    }, descriptionAdvanced: { de: "", hu: "Bilbao a Baszkf�ld legnagyobb v�rosa �s a sikeres v�rosi �talakul�s glob�lis p�ldak�pe. Az egykor sz�rke ipari metropolisz ma a m?v�szet, a kult�ra �s a szolg�ltat�sok modern k�zpontjak�nt t�nd�k�l. A v�ros vitathatatlan jelk�pe a futurisztikus, Frank Gehry �ltal tervezett Guggenheim M�zeum, amely �velt tit�n homlokzat�val k�zvetlen�l a Nervi�n foly� partj�n fekszik. Ezzel leny?g�z? kontrasztot alkot a t�rt�nelmi �v�ros (Casco Viejo) sz?k, macskak�ves utc�ival, g�tikus templomaival �s a pintxo b�rok hihetetlen s?r?s�g�vel. Bilbao a baszk hagyom�nyok �s az avantg�rd nagyv�rosi hangulat egyed�l�ll� kever�k�t ny�jtja.", ro: "", en: "Bilbao is a dynamic, modern metropolis in the Basque Country, celebrated globally as a triumph of urban regeneration. Once a grimy, industrial shipbuilding center situated along the Nervi�n River, it has spectacularly transformed itself into a hub for cutting-edge art, architecture, and design. The city flawlessly merges its gritty, proud working-class history with sleek, futuristic infrastructure and a thriving cultural scene. Bilbao is also a culinary capital, renowned for its bustling pintxos bars and a strong commitment to innovative Basque gastronomy." }, factsAdvanced: { de: [], hu: [
        "A bilba�i Guggenheim M�zeum megnyit�sa (1997) ind�totta el az �gynevezett 'Bilbao-effektust', amely a kultur�lis v�rosfejleszt�s fogalm�v� v�lt.",
        "Az �v�rosban tal�lhat� 'Las Siete Calles' (H�t Utca) k�pezi a v�ros t�rt�nelmi �s kereskedelmi k�zpontj�t a 15. sz�zad �ta.",
        "A v�ros modern k�zleked�si h�l�zat�t, a Metr�t Sir Norman Foster vil�gh�r? �p�t�sz tervezte ('Fosteritos').",
        "Bilbao ad otthont az Athletic Club futballcsapat�nak, amely szigor�an csak baszk sz�rmaz�s� vagy nevel�s? j�t�kosokat alkalmaz."
      ], ro: [], en: [
        "The opening of the titanium-clad Guggenheim Museum in 1997 famously catalyzed Bilbao's transformation from an industrial city to a cultural icon.",
        "The Zubizuri, a striking tied-arch footbridge crossing the river, was designed by renowned architect Santiago Calatrava.",
        "Bilbao's historic center, the Casco Viejo, is famous for its 'Seven Streets' (Zazpi Kaleak) which date back to the 1400s."
      ] },
    facts: {
          "de": [
                "Das Guggenheim-Museum Bilbao wurde vom Stararchitekten Frank Gehry entworfen.",
                "Die Stadt wird oft mit dem 'Bilbao-Effekt' in Verbindung gebracht, der die Aufwertung durch Kultur beschreibt.",
                "Der Mercado de la Ribera ist eine der grö�?ten überdachten Markthallen in Europa.",
                "Die Puente de Vizcaya, eine Schwebefähre nahe Bilbao, ist UNESCO-Weltkulturerbe.",
                "Bilbaos U-Bahn-Stationen, von Norman Foster entworfen, werden von den Einheimischen 'Fosteritos' genannt.",
                "Das Casco Viejo ist bekannt für seine 'Siete Calles' (Sieben Stra�?en), den ältesten Teil der Stadt.",
                "Athletic Bilbao, der lokale Fu�?ballclub, nimmt traditionell nur Spieler mit baskischen Wurzeln auf.",
                "Die Zubizuri-Brücke ist die älteste Schwebefähre der Welt und noch immer in Betrieb."
          ],
          "hu": [
                "A bilbaói Guggenheim Múzeumot a sztárépítész, Frank Gehry tervezte.",
                "A várost gyakran hozzák összefüggésbe a 'Bilbao-effektussal', amely a kultúra általi felértékel�?dést írja le.",
                "A Mercado de la Ribera Európa egyik legnagyobb fedett vásárcsarnoka.",
                "A Puente de Vizcaya, egy Bilbao melletti lebeg�?komp, az UNESCO világörökség része.",
                "A Norman Foster által tervezett bilbaói metróállomásokat a helyiek 'Fosteritos'-nak hívják.",
                "A Casco Viejo a 'Siete Calles' (Hét utca) nevű részér�?l, a város legrégebbi negyedér�?l ismert.",
                "Az Athletic Bilbao, a helyi futballklub hagyományosan csak baszk gyökerekkel rendelkez�? játékosokat fogad be.",
                "A Zubizuri híd a világ legrégebbi lebeg�?kompja, amely ma is üzemel."
          ],
          "ro": [
                "Muzeul Guggenheim din Bilbao a fost proiectat de arhitectul vedet�? Frank Gehry.",
                "Ora�?ul este adesea asociat cu 'Efectul Bilbao', care descrie revitalizarea prin cultur�?.",
                "Mercado de la Ribera este una dintre cele mai mari pie�?e acoperite din Europa.",
                "Puente de Vizcaya, un pod transportor lâng�? Bilbao, este în Patrimoniul Mondial UNESCO.",
                "Sta�?iile de metrou din Bilbao, proiectate de Norman Foster, sunt numite de localnici 'Fosteritos'.",
                "Casco Viejo este cunoscut pentru 'Siete Calles' (�?apte Str�?zi), cea mai veche parte a ora�?ului.",
                "Athletic Bilbao, clubul de fotbal local, accept�? în mod tradi�?ional doar juc�?tori cu r�?d�?cini basce.",
                "Podul Zubizuri este cel mai vechi pod transportor din lume, înc�? în func�?iune."
          ],
          "en": [
                "The Guggenheim Museum Bilbao was designed by star architect Frank Gehry.",
                "The city is often associated with the 'Bilbao Effect', describing revitalization through culture.",
                "The Mercado de la Ribera is one of the largest covered market halls in Europe.",
                "The Puente de Vizcaya, a transporter bridge near Bilbao, is a UNESCO World Heritage site.",
                "Bilbao's metro stations, designed by Norman Foster, are affectionately called 'Fosteritos' by locals.",
                "The Casco Viejo is known for its 'Siete Calles' (Seven Streets), the oldest part of the city.",
                "Athletic Bilbao, the local football club, traditionally only recruits players with Basque roots.",
                "The Zubizuri bridge is the oldest transporter bridge in the world and still in operation."
          ]
    },
    image: "/geo-images/spain/bilbao.webp",
    
  },
  {
    id: "es-granada", type: "city", parent: "ES-AN", coords: [-3.5986, 37.1773],
    name: {"de": "Granada", "hu": "Granada", "ro": "Granada", "en": "Granada"},
    
    description: {
          "de": "Granada liegt am Fu�?e der majestätischen Sierra Nevada in Andalusien und ist ein Ort voller Magie und Geschichte. Die Stadt war das letzte Bollwerk der Mauren in Spanien und diese reiche islamische Vergangenheit ist noch heute an jeder Ecke spürbar. Weltbekannt ist Granada für die atemberaubende Alhambra, einen Festungs- und Palastkomplex von unvergleichlicher Schönheit. Das alte arabische Viertel Albaicín besticht durch seine wei�? getünchten Häuser, schmalen Gassen und den herrlichen Ausblick auf die Alhambra. Granada besitzt zudem eine lebhafte Studentenszene und bewahrt die Tradition der kostenlosen Tapas.",
          "hu": "Granada az andalúziai Sierra Nevada fenséges lábánál fekszik, és varázslattal és történelemmel teli hely. A város volt a mórok utolsó bástyája Spanyolországban, és ez a gazdag iszlám múlt ma is minden sarkon érezhet�?. Granada világhírű a lélegzetelállító Alhambráról, a páratlan szépségű er�?d- és palotakomplexumról. A régi arab negyed, az Albaicín lenyűgöz fehérre meszelt házaival, szűk utcáival és az Alhambrára nyíló csodálatos kilátással. Granada emellett pezsg�? diákélettel rendelkezik, és �?rzi az ingyenes tapasok hagyományát.",
          "ro": "Granada este situat�? la poalele maiestuoasei Sierra Nevada din Andaluzia �?i este un loc plin de magie �?i istorie. Ora�?ul a fost ultimul bastion al maurilor din Spania, iar acest trecut islamic bogat poate fi sim�?it �?i ast�?zi la fiecare col�?. Granada este renumit�? în întreaga lume pentru uluitoarea Alhambra, un complex de fort�?re�?e �?i palate de o frumuse�?e incomparabil�?. Vechiul cartier arab Albaicín captiveaz�? prin casele sale v�?ruite în alb, str�?zile înguste �?i vederea magnific�? la Alhambra. Granada are, de asemenea, o scen�? studen�?easc�? plin�? de via�?�? �?i p�?streaz�? tradi�?ia tapas-urilor gratuite.",
          "en": "Granada is located at the foot of the majestic Sierra Nevada in Andalusia and is a place full of magic and history. The city was the last stronghold of the Moors in Spain, and this rich Islamic past can still be felt on every corner today. Granada is world-famous for the breathtaking Alhambra, a fortress and palace complex of incomparable beauty. The old Arab quarter Albaicín captivates with its whitewashed houses, narrow streets, and magnificent views of the Alhambra. Granada also has a lively student scene and preserves the tradition of free tapas."
    }, descriptionAdvanced: { de: "", hu: "A gyakran h�f�dte Sierra Nevada l�b�n�l fekv? fest?i Granada a m�ly m�r t�rt�nelmet �tv�zi a pezsg? di�k�lettel. A v�ros vil�gh�r? az Alhambr�r�l, egy l�legzetel�ll�t� palota- �s er?dkomplexumr�l, amely az iszl�m m?v�szet vitathatatlan eur�pai remekm?ve. A szemk�zti t�rt�nelmi negyed, az Albaic�n sz?k, meredek utc�ival �s feh�r h�zaival nemcsak a legjobb kil�t�st ny�jtja az Alhambr�ra, hanem autentikus m�r �p�t�szetet is k�n�l. Granada arr�l ismert eg�sz Spanyolorsz�gban, hogy minden alkoholos italhoz gyakran b?s�ges, ingyenes tapast szolg�lnak fel. A v�ros a kult�r�k leny?g�z? olvaszt�t�gelye, ahol az Al-Andalus hat�sai a mai napig tapinthat�ak.", ro: "", en: "Granada is an achingly beautiful city in Andalusia, nestled at the foot of the snow-capped Sierra Nevada mountains. It is deeply defined by its history as the last stronghold of the Moorish empire in Spain, a legacy that imbues the city with an exotic, enchanting atmosphere. The city?s winding, steep streets lead to spectacular viewpoints and historic neighborhoods that have preserved their medieval Islamic layout. Granada is famous for its vibrant student population, bohemian vibe, and a deeply cherished tradition of serving free, generous tapas with every drink." }, factsAdvanced: { de: [], hu: [
        "A granadai egyetem Spanyolorsz�g egyik legnagyobb egyeteme, �gy a v�ros lakoss�g�nak k�zel egyharmad�t di�kok alkotj�k.",
        "Az Alhambra �s az Albaic�n negyed egy�tt az UNESCO Vil�g�r�ks�g r�sz�t k�pezi a m�r m�lt kiemelked? eml�keik�nt.",
        "Granada volt a m�r uralkod�k utols� b�sty�ja az Ib�riai-f�lszigeten, amely csak 1492-ben esett el a katolikus kir�lyok el?tt.",
        "A Sacromonte negyed hagyom�nyos barlanglak�sair�l �s az ott �l? rom�k �ltal �polt autentikus flamenco kult�r�r�l ismert."
      ], ro: [], en: [
        "Granada was the final city of Al-Andalus to fall to the Catholic Monarchs in 1492, ending over 700 years of Moorish rule.",
        "The city's historic Albaic�n neighborhood is a UNESCO World Heritage site known for its narrow streets and traditional carmenes (houses with walled gardens).",
        "Granada is one of the few places in Spain where the tradition of providing a free, substantial tapa with every alcoholic beverage is strictly maintained."
      ] },
    facts: {
          "de": [
                "Die Alhambra ist eines der bedeutendsten Meisterwerke der maurischen Baukunst und UNESCO-Welterbe.",
                "In Granada ist es noch üblich, zu jedem Getränk eine kostenlose Tapa zu servieren.",
                "Die Kathedrale von Granada beherbergt die Gräber der Katholischen Könige Isabella und Ferdinand.",
                "Der Mirador de San Nicolás bietet den berühmtesten Aussichtspunkt auf die Alhambra beim Sonnenuntergang.",
                "Der Generalife war der prächtige Sommerpalast und Landsitz der Nasriden-Sultane.",
                "Granada fiel im Jahr 1492 als letztes Emirat auf der Iberischen Halbinsel an die Christen.",
                "Die Stadt beheimatet eine der ältesten und prestigeträchtigsten Universitäten Spaniens.",
                "Das Sacromonte-Viertel ist bekannt für Flamenco-Aufführungen in traditionellen Höhlenwohnungen."
          ],
          "hu": [
                "Az Alhambra a mór építészet egyik legjelent�?sebb remekműve és az UNESCO világörökség része.",
                "Granadában még ma is szokás minden italhoz ingyenes tapast felszolgálni.",
                "A granadai katedrálisban található a katolikus királyok, Izabella és Ferdinánd sírja.",
                "A Mirador de San Nicolás a leghíresebb kilátópont az Alhambrára naplementekor.",
                "A Generalife volt a Naszrid szultánok pompás nyári palotája és vidéki birtoka.",
                "Granada volt az utolsó emírség az Ibériai-félszigeten, amely 1492-ben a keresztények kezére került.",
                "A városban működik Spanyolország egyik legrégebbi és legrangosabb egyeteme.",
                "A Sacromonte negyed híres a hagyományos barlanglakásokban tartott flamenco-el�?adásokról."
          ],
          "ro": [
                "Alhambra este una dintre cele mai importante capodopere ale arhitecturii maure �?i este un sit al Patrimoniului Mondial UNESCO.",
                "�?n Granada, este înc�? obi�?nuit s�? se serveasc�? un tapas gratuit cu fiecare b�?utur�?.",
                "Catedrala din Granada ad�?poste�?te mormintele Monarhilor Catolici Isabela �?i Ferdinand.",
                "Mirador de San Nicolás ofer�? cel mai faimos punct de observa�?ie asupra Alhambrei la apus.",
                "Generalife a fost palatul magnific de var�? �?i mo�?ia sultanilor din dinastia Nasrid.",
                "Granada a c�?zut în fa�?a cre�?tinilor în 1492, fiind ultimul emirat de pe Peninsula Iberic�?.",
                "Ora�?ul g�?zduie�?te una dintre cele mai vechi �?i prestigioase universit�?�?i din Spania.",
                "Cartierul Sacromonte este cunoscut pentru spectacolele de flamenco din locuin�?ele tradi�?ionale rupestre."
          ],
          "en": [
                "The Alhambra is one of the most important masterpieces of Moorish architecture and a UNESCO World Heritage site.",
                "In Granada, it is still customary to serve a free tapa with every drink ordered.",
                "The Cathedral of Granada houses the tombs of the Catholic Monarchs Isabella and Ferdinand.",
                "The Mirador de San Nicolás offers the most famous viewpoint of the Alhambra at sunset.",
                "The Generalife was the magnificent summer palace and country estate of the Nasrid Sultans.",
                "Granada fell to the Christians in 1492, the last emirate on the Iberian Peninsula to do so.",
                "The city is home to one of the oldest and most prestigious universities in Spain.",
                "The Sacromonte neighborhood is known for flamenco performances held in traditional cave dwellings."
          ]
    },
    image: "/geo-images/spain/granada.webp",
    
  },
  {
    id: "es-cordoba", type: "city", parent: "ES-AN", coords: [-4.7794, 37.8882],
    name: {"de": "Córdoba", "hu": "Córdoba", "ro": "Córdoba", "en": "Córdoba"},
    
    description: {
          "de": "Córdoba ist eine geschichtsträchtige Stadt in Andalusien und war einst eine der grö�?ten und fortschrittlichsten Metropolen der Welt. Im 10. Jahrhundert strahlte sie als Hauptstadt des islamischen Kalifats unvergleichlichen Reichtum und Wissen aus. Das absolute Highlight der Stadt ist die Mezquita-Catedral, eine atemberaubende Moschee, in deren Zentrum später eine christliche Kathedrale erbaut wurde. Die charmanten Altstadtgassen von Córdoba sind berühmt für ihre wei�? getünchten Wände und die liebevoll mit Blumen geschmückten Patios (Innenhöfe). Ein Spaziergang über die Römische Brücke runden das romantische Bild der Stadt ab.",
          "hu": "Córdoba egy történelmi andalúziai város, amely egykor a világ egyik legnagyobb és legfejlettebb metropolisza volt. A 10. században, az iszlám kalifátus f�?városaként páratlan gazdagságot és tudást sugárzott. A város abszolút fénypontja a Mezquita-Catedral, egy lélegzetelállító mecset, amelynek közepébe kés�?bb keresztény katedrálist építettek. Córdoba bájos óvárosi utcái híresek fehérre meszelt falaikról és a szeretettel virágokkal díszített teraszokról (patiók). A Római hídon tett séta teszi teljessé a város romantikus képét.",
          "ro": "Córdoba este un ora�? istoric din Andaluzia �?i a fost cândva una dintre cele mai mari �?i mai avansate metropole din lume. �?n secolul al X-lea, ca �?i capital�? a Califatului Islamic, a radiat o bog�?�?ie �?i o cunoa�?tere incomparabile. Punctul de atrac�?ie absolut al ora�?ului este Mezquita-Catedral, o moschee uluitoare în centrul c�?reia a fost construit�? mai târziu o catedral�? cre�?tin�?. Str�?du�?ele fermec�?toare ale ora�?ului vechi din Córdoba sunt renumite pentru pere�?ii lor v�?rui�?i în alb �?i cur�?ile interioare (patios) decorate cu dragoste cu flori. O plimbare pe Podul Roman completeaz�? imaginea romantic�? a ora�?ului.",
          "en": "Córdoba is a historic city in Andalusia and was once one of the largest and most advanced metropolises in the world. In the 10th century, as the capital of the Islamic Caliphate, it radiated unparalleled wealth and knowledge. The absolute highlight of the city is the Mezquita-Catedral, a breathtaking mosque with a Christian cathedral later built directly in its center. The charming old town streets of Córdoba are famous for their whitewashed walls and affectionately flower-decorated patios (courtyards). A walk across the Roman Bridge completes the romantic image of the city."
    }, descriptionAdvanced: { de: "", hu: "A 10. sz�zadban az Omajj�d Kalif�tus f?v�rosak�nt C�rdoba az eg�sz vil�g egyik legnagyobb, legfejlettebb �s leggazdagabb v�rosa volt. A v�ros abszol�t cs�cspontja a Mezquita-Catedral, egy gigantikus egykori mecset a t�bb sz�z piros-feh�r kett?s �vb?l �ll� h�res erdej�vel, amelynek k�zep�n k�s?bb egy kereszt�ny katedr�list �p�tettek. C�rdoba t�rt�nelmi k�zpontja, a sz?k utc�k sz�vev�nyes labirintusa Eur�pa m�sodik legnagyobb �ps�gben maradt �v�rosa. K�l�n�sen b�josak a vir�gokkal gy�ny�r?en feld�sz�tett bels? udvarok (pati�k), amelyek minden m�jusban megnyitj�k kapuikat a nagyk�z�ns�g el?tt. A v�ros a f�lsziget iszl�m, zsid� �s kereszt�ny kult�r�j�nak t�rt�nelmi egy�tt�l�s�t szimboliz�lja.", ro: "", en: "C�rdoba is a captivating Andalusian city that once shone as the intellectual and cultural capital of the Islamic world during the Middle Ages. Its incredibly rich history is woven into a labyrinth of narrow, whitewashed streets, vibrant, flower-filled patios, and stunning architectural masterpieces. The city beautifully illustrates the historical coexistence of Christian, Islamic, and Jewish cultures on the Iberian Peninsula. Today, C�rdoba retains a quiet, dignified charm, highly protective of its profound heritage and renowned for its intricate silverwork and traditional gastronomy." }, factsAdvanced: { de: [], hu: [
        "C�rdoba �v�ros�nak utc�in valaha az els? utcai vil�g�t�s m?k�d�tt Eur�p�ban a 10. sz�zadban.",
        "A Mezquita v�r�s �s feh�r bolt�veit a r�mai v�zvezet�kek, valamint a jeruzs�lemi Sziklad�m mint�j�ra alak�tott�k ki.",
        "Maimonid�sz �s Averro�s, a k�z�pkor k�t legnagyobb filoz�fusa (egy zsid� �s egy iszl�m), egyar�nt C�rdob�ban sz�letett.",
        "A c�rdobai teraszos udvarok fesztiv�lj�t (Fiesta de los Patios) az UNESCO szellemi kultur�lis �r�ks�gnek nyilv�n�totta."
      ], ro: [], en: [
        "In the 10th century, C�rdoba was estimated to be the most populous city in the world and a major center for education and learning.",
        "The historic center of C�rdoba is a UNESCO World Heritage site, one of the largest protected urban areas in the world.",
        "The city is famous for its annual Fiesta de los Patios in May, where residents open their beautifully decorated, flower-filled courtyards to the public."
      ] },
    facts: {
          "de": [
                "Das historische Zentrum von Córdoba ist komplett als UNESCO-Weltkulturerbe deklariert.",
                "Die Mezquita ist berühmt für ihren Wald aus 856 Säulen und den rot-wei�?en Doppelbögen.",
                "Córdoba veranstaltet jedes Jahr im Mai ein buntes Festival der Innenhöfe (Fiesta de los Patios).",
                "Die Medina Azahara am Stadtrand war einst eine prächtige mittelalterliche Palaststadt.",
                "Die Römische Brücke (Puente Romano) wurde ursprünglich im 1. Jahrhundert v. Chr. erbaut.",
                "Die Stadt war die Heimat bedeutender Philosophen wie Averroes und Maimonides.",
                "Die Judería ist das alte jüdische Viertel mit einer der wenigen erhaltenen Synagogen Spaniens.",
                "Salmorejo, eine dickflüssige, kalte Tomatensuppe, ist die bekannteste lokale Spezialität."
          ],
          "hu": [
                "Córdoba történelmi központját teljes egészében az UNESCO világörökség részévé nyilvánították.",
                "A Mezquita híres a 856 oszlopból álló erdejér�?l és a piros-fehér kett�?s ívekr�?l.",
                "Córdoba minden év májusában színes bels�?udvar-fesztivált (Fiesta de los Patios) rendez.",
                "A város szélén található Medina Azahara egykor pompás középkori palotaváros volt.",
                "A Római hidat (Puente Romano) eredetileg i. e. az 1. században építették.",
                "A város olyan jelent�?s filozófusok otthona volt, mint Averroës és Maimonidész.",
                "A Judería a régi zsidó negyed, Spanyolország egyik kevés fennmaradt zsinagógájával.",
                "A salmorejo, egy sűrű, hideg paradicsomleves, a legismertebb helyi specialitás."
          ],
          "ro": [
                "Centrul istoric din Córdoba este declarat în întregime un sit al Patrimoniului Mondial UNESCO.",
                "Mezquita este renumit�? pentru p�?durea sa de 856 de coloane �?i arcadele duble ro�?ii �?i albe.",
                "Córdoba g�?zduie�?te anual în luna mai un festival plin de culoare al cur�?ilor (Fiesta de los Patios).",
                "Medina Azahara de la periferia ora�?ului a fost cândva un magnific ora�?-palat medieval.",
                "Podul Roman (Puente Romano) a fost construit ini�?ial în secolul I î.Hr.",
                "Ora�?ul a fost casa unor filozofi importan�?i, precum Averroes �?i Maimonide.",
                "Judería este vechiul cartier evreiesc cu una dintre pu�?inele sinagogi supravie�?uitoare din Spania.",
                "Salmorejo, o sup�? rece �?i deas�? de ro�?ii, este cea mai faimoas�? specialitate local�?."
          ],
          "en": [
                "The historic center of Córdoba is entirely declared a UNESCO World Heritage site.",
                "The Mezquita is famous for its forest of 856 columns and red-and-white double arches.",
                "Córdoba hosts a colorful festival of courtyards (Fiesta de los Patios) every year in May.",
                "Medina Azahara on the outskirts of the city was once a magnificent medieval palace-city.",
                "The Roman Bridge (Puente Romano) was originally built in the 1st century BC.",
                "The city was home to significant philosophers such as Averroes and Maimonides.",
                "The Judería is the old Jewish quarter, home to one of Spain's few surviving synagogues.",
                "Salmorejo, a thick, cold tomato soup, is the most famous local culinary specialty."
          ]
    },
    image: "/geo-images/spain/c-rdoba.webp",
    
  },
  {
    id: "es-salamanca", type: "city", parent: "ES-CL", coords: [-5.6635, 40.9701],
    name: {"de": "Salamanca", "hu": "Salamanca", "ro": "Salamanca", "en": "Salamanca"},
    
    description: {
          "de": "Salamanca, gelegen im Westen Spaniens in der Region Kastilien und León, ist eine der ältesten und ehrwürdigsten Universitätsstädte Europas. Die Stadt erstrahlt im goldenen Licht des einzigartigen Villamayor-Sandsteins, der fast alle historischen Gebäude ziert. Im Zentrum des Lebens steht die beeindruckende Plaza Mayor, die als einer der schönsten Plätze ganz Spaniens gilt. Salamanca verfügt über zwei Kathedralen, die alte und die neue, die direkt aneinander gebaut wurden. Das jugendliche, lebendige Flair der tausenden Studenten mischt sich hier auf charmante Weise mit tief verwurzelter akademischer Geschichte.",
          "hu": "A Nyugat-Spanyolországban, Kasztília és León régióban fekv�? Salamanca Európa egyik legrégebbi és legtekintélyesebb egyetemvárosa. A város az egyedülálló Villamayor homokk�? aranyló fényében ragyog, amely szinte minden történelmi épületet díszít. Az élet középpontjában a lenyűgöz�? Plaza Mayor áll, amelyet egész Spanyolország egyik legszebb terének tartanak. Salamancának két katedrálisa is van, a régi és az új, amelyeket közvetlenül egymás mellé építettek. Több ezer diák fiatalos, élénk hangulata itt bájos módon keveredik a mélyen gyökerez�? akadémiai történelemmel.",
          "ro": "Salamanca, situat�? în vestul Spaniei în regiunea Castilia �?i León, este una dintre cele mai vechi �?i venerabile ora�?e universitare din Europa. Ora�?ul str�?luce�?te în lumina aurie a gresiei unice de Villamayor, care împodobe�?te aproape toate cl�?dirile istorice. �?n centrul vie�?ii se afl�? impresionanta Plaza Mayor, care este considerat�? una dintre cele mai frumoase pie�?e din toat�? Spania. Salamanca are dou�? catedrale, cea veche �?i cea nou�?, care au fost construite una lâng�? alta. Flerul tineresc �?i plin de via�?�? al miilor de studen�?i se amestec�? aici într-un mod fermec�?tor cu istoria academic�? profund înr�?d�?cinat�?.",
          "en": "Salamanca, located in western Spain in the region of Castile and León, is one of Europe's oldest and most venerable university cities. The city glows in the golden light of the unique Villamayor sandstone, which adorns almost all of its historic buildings. At the center of life is the impressive Plaza Mayor, considered one of the most beautiful squares in all of Spain. Salamanca has two cathedrals, the old and the new, which were built directly adjacent to each other. The youthful, lively flair of thousands of students mixes charmingly here with deeply rooted academic history."
    }, descriptionAdvanced: { de: "", hu: "Salamanca vil�gh�r? tiszteletre m�lt� t�rt�nelmi egyetem�r?l, amelyet Eur�pa egyik legr�gebbi �s legrangosabb oktat�si int�zm�nyek�nt tartanak sz�mon. A jellegzetes aranysz�n? Villamayor-homokk?b?l �ll� harmonikus v�rosk�p k�l�n�sen naplementekor szinte var�zslatos, meleg f�nyt k�lcs�n�z a v�rosnak. A monument�lis Plaza Mayort a spanyolok az orsz�g legszebb ter�nek tartj�k, �s a v�ros pulz�l� t�rsadalmi k�zpontja. Salamanca k�t leny?g�z?, egym�ssal �sszekapcsolt katedr�lissal rendelkezik, amelyek leny?g�z?en �tv�zik a k�l�nb�z? �p�t�szeti korszakokat. A nagysz�m� �s akt�v di�kk�z�ss�gnek k�sz�nhet?en az am�gy t�rt�nelmi v�ros nagyon fiatalos �s lend�letes l�gk�rt k�n�l.", ro: "", en: "Salamanca is a resplendent, historically profound city in western Spain, renowned globally for its prestigious and ancient university. The city is an architectural marvel, constructed largely of local Villamayor sandstone, which gives the elegant buildings a distinctive, warm golden glow, especially at sunset. It boasts a remarkably preserved historic center that acts as a living museum of Renaissance and Plateresque architecture. Despite its profound historical gravity, Salamanca pulses with a youthful, energetic atmosphere driven by its massive international student population." }, factsAdvanced: { de: [], hu: [
        "A salamancai egyetem, amelyet 1218-ban alap�tottak, otthont adott Kolumbusz Krist�f �s Hern�n Cort�s vit�inak a felfedez�sekr?l.",
        "A Plaza Mayor Spanyolorsz�g egyik legnagyobb �s legeleg�nsabb tere, amelyet a 18. sz�zadban barokk st�lusban �p�tettek.",
        "A salamancai egyetem homlokzat�n rejt?zik egy apr� b�ka (rana) faragv�nya, amelynek megtal�l�sa a legenda szerint szerencs�t hoz a vizsg�kon.",
        "A v�ros 'Kagyl�k H�za' (Casa de las Conchas) egy egyed�l�ll� g�tikus palota, melynek homlokzat�t t�bb mint 300 faragott f�s?kagyl� d�sz�ti."
      ], ro: [], en: [
        "The University of Salamanca, founded in 1218, is the oldest university in Spain and the third oldest continuous university in the world.",
        "The Plaza Mayor of Salamanca, built in the 18th century, is widely considered one of the most beautiful and elegant squares in Spain.",
        "Salamanca's historic city center was declared a UNESCO World Heritage site in 1988 for its exceptional architectural beauty and historical significance."
      ] },
    facts: {
          "de": [
                "Die Universität von Salamanca wurde 1218 gegründet und ist die älteste Spaniens.",
                "Das historische Zentrum von Salamanca ist seit 1988 UNESCO-Weltkulturerbe.",
                "Die Fassade der Universität ist berühmt für einen versteckten steinernen Frosch auf einem Totenkopf.",
                "Das Casa de las Conchas ist ein Palast, dessen Fassade mit über 300 Muscheln geschmückt ist.",
                "Die Plaza Mayor wurde im 18. Jahrhundert im barocken Stil erbaut.",
                "Der Astronautenfriedhof an der Neuen Kathedrale ist eine moderne Steinmetz-Ergänzung von 1992.",
                "Die Brücke Puente Romano über den Fluss Tormes stammt aus dem 1. Jahrhundert.",
                "Die Stadt ist ein beliebtes Zentrum für Sprachschüler aus aller Welt, die Spanisch lernen."
          ],
          "hu": [
                "A Salamancai Egyetemet 1218-ban alapították, és Spanyolország legrégebbi egyeteme.",
                "Salamanca történelmi központja 1988 óta az UNESCO világörökség része.",
                "Az egyetem homlokzata híres egy koponyán megbúvó k�?békáról.",
                "A Casa de las Conchas egy palota, amelynek homlokzatát több mint 300 kagyló díszíti.",
                "A Plaza Mayor a 18. században épült barokk stílusban.",
                "Az �?j Katedrálison lév�? asztronauta egy modern, 1992-es k�?faragó kiegészítés.",
                "A Tormes folyón átível�? Puente Romano híd az 1. századból származik.",
                "A város népszerű központja a spanyolul tanuló diákoknak a világ minden tájáról."
          ],
          "ro": [
                "Universitatea din Salamanca a fost fondat�? în 1218 �?i este cea mai veche din Spania.",
                "Centrul istoric al Salamanc�?i este în Patrimoniul Mondial UNESCO din 1988.",
                "Fa�?ada universit�?�?ii este renumit�? pentru o broasc�? de piatr�? ascuns�? pe un craniu.",
                "Casa de las Conchas este un palat a c�?rui fa�?ad�? este decorat�? cu peste 300 de scoici.",
                "Plaza Mayor a fost construit�? în secolul al XVIII-lea în stil baroc.",
                "Astronautul de pe Noua Catedral�? este o ad�?ugire modern�? a cioplitorilor în piatr�? din 1992.",
                "Podul Puente Romano peste râul Tormes dateaz�? din secolul I.",
                "Ora�?ul este un centru popular pentru studen�?ii la limbi str�?ine din întreaga lume care înva�?�? spaniola."
          ],
          "en": [
                "The University of Salamanca was founded in 1218 and is the oldest in Spain.",
                "The historic center of Salamanca has been a UNESCO World Heritage site since 1988.",
                "The facade of the university is famous for a hidden stone frog resting on a skull.",
                "The Casa de las Conchas is a palace whose facade is decorated with over 300 shells.",
                "The Plaza Mayor was built in the 18th century in the Baroque style.",
                "The astronaut carving on the New Cathedral is a modern stonemason's addition from 1992.",
                "The Puente Romano bridge over the Tormes river dates back to the 1st century.",
                "The city is a popular hub for language students from all over the world learning Spanish."
          ]
    },
    image: "/geo-images/spain/salamanca.webp",
    
  },
  {
    id: "es-toledo", type: "city", parent: "ES-CM", coords: [-4.0273, 39.8628],
    name: {"de": "Toledo", "hu": "Toledo", "ro": "Toledo", "en": "Toledo"},
    
    description: {
          "de": "Toledo, majestätisch auf einem Hügel über dem Fluss Tajo gelegen, ist als 'Stadt der drei Kulturen' weltberühmt. �?ber Jahrhunderte lebten hier Christen, Muslime und Juden friedlich zusammen und hinterlie�?en ein unvergleichliches architektonisches Erbe. Die gesamte historische Altstadt ist ein UNESCO-Weltkulturerbe und gleicht einem lebendigen Freilichtmuseum. Prachtvolle Bauwerke wie die gotische Kathedrale, der Alcázar und die Synagoge El Tránsito zeugen von der reichen Vergangenheit. Toledo ist auch berühmt für seine traditionelle Handwerkskunst, insbesondere die Herstellung von Damaszener-Schmuck und Toledo-Schwertern.",
          "hu": "A Tajo folyó feletti dombon fenségesen elhelyezked�? Toledo a 'Három kultúra városaként' világhírű. �?vszázadokon át keresztények, muszlimok és zsidók éltek itt békében egymás mellett, és páratlan építészeti örökséget hagytak hátra. Az egész történelmi óváros UNESCO világörökség, és egy él�? szabadtéri múzeumhoz hasonlít. Olyan pompás építmények tanúskodnak a gazdag múltról, mint a gótikus katedrális, az Alcázar és az El Tránsito zsinagóga. Toledo híres hagyományos kézművességér�?l is, különösen a damaszkuszi ékszerek és a toledói kardok készítésér�?l.",
          "ro": "Toledo, situat maiestuos pe un deal deasupra râului Tajo, este renumit în lume ca 'Ora�?ul celor trei culturi'. Timp de secole, cre�?tinii, musulmanii �?i evreii au tr�?it aici pa�?nic împreun�?, l�?sând în urm�? o mo�?tenire arhitectural�? incomparabil�?. �?ntregul ora�? vechi istoric este un sit al Patrimoniului Mondial UNESCO �?i se aseam�?n�? cu un muzeu viu în aer liber. Cl�?diri magnifice precum catedrala gotic�?, Alcázar �?i sinagoga El Tránsito stau m�?rturie a trecutului bogat. Toledo este renumit �?i pentru me�?te�?ugurile sale tradi�?ionale, în special pentru fabricarea de bijuterii de Damasc �?i a s�?biilor de Toledo.",
          "en": "Toledo, majestically situated on a hill above the Tagus River, is world-famous as the 'City of Three Cultures'. For centuries, Christians, Muslims, and Jews lived together peacefully here, leaving behind an incomparable architectural heritage. The entire historic old town is a UNESCO World Heritage site and resembles a living open-air museum. Magnificent buildings such as the Gothic cathedral, the Alcázar, and the El Tránsito synagogue bear witness to the rich past. Toledo is also famous for its traditional craftsmanship, especially the production of Damascene jewelry and Toledo swords."
    }, descriptionAdvanced: { de: "", hu: "Toledo t�rt�nelmi 'h�rom kult�ra v�rosak�nt' ismert vil�gszerte, mivel kereszt�nyek, zsid�k �s muszlimok �vsz�zadokon �t �ltek itt b�k�sen egym�s mellett. Az eg�sz �v�ros, amely l�tv�nyosan �s v�delmez?en egy dombon, a Tajo foly� felett helyezkedik el, leny?g�z? UNESCO Vil�g�r�ks�g r�sze. A l�togat�k a mai napig csod�lhatj�k az impoz�ns zsinag�g�kat, a r�gi mecseteket �s egy hatalmas g�tikus katedr�list egy kis ter�leten. Toledo hossz� ideig a spanyol birodalom dics?s�ges f?v�rosa volt, miel?tt a kir�lyi udvar Madridba k�lt�z�tt volna. A v�ros emellett a kiv�l� fest?, El Greco �s hagyom�nyos, finom damaszkolt kov�csm?v�szete miatt is h�res.", ro: "", en: "Toledo is a visually stunning, ancient city perched dramatically on a rocky gorge overlooking the Tagus River in central Spain. Historically known as the 'City of Three Cultures', it represents a unique era where Christian, Jewish, and Muslim communities lived together and profoundly influenced each other's art and architecture. The city's labyrinthine medieval streets are packed with historic mosques, synagogues, and churches, protected by formidable city walls. Toledo is also celebrated for its traditional crafts, particularly its legendary history of forging high-quality steel swords and intricate damascene metalwork." }, factsAdvanced: { de: [], hu: [
        "Toledo ac�l- �s kardk�sz�t? ipara m�r a r�mai id?k �ta vil�gh�r?, �s Hollywood ma is gyakran haszn�lja fegyverk�nt a filmekben.",
        "A toled�i katedr�lis, a Pr�m�si Katedr�lis, Spanyolorsz�g m�sodik legnagyobb �s leggazdagabban d�sz�tett g�tikus temploma.",
        "A v�ros utc�i olyan sz?kek �s meredekek, hogy sz�nd�kosan �p�tett�k labirintusszer?re ?ket, hogy �sszezavarj�k a betolakod�kat.",
        "A helyi marcip�nk�sz�t�s m�r hagyom�nyokra ny�lik vissza, �s a toled�i ap�c�k �vsz�zadok �ta ?rzik a titkos recept�r�j�t."
      ], ro: [], en: [
        "Toledo served as the capital of the Visigothic Kingdom and later as the capital of the Spanish Empire until the court moved to Madrid in 1561.",
        "The artist El Greco lived in Toledo for much of his life, and his dramatic, unique paintings are displayed throughout the city's institutions.",
        "Toledo steel was historically renowned for its exceptional durability and was highly sought after for weaponry by armies across Europe."
      ] },
    facts: {
          "de": [
                "Toledo war einst die Hauptstadt des spanischen Reiches, bis Madrid 1561 diese Rolle übernahm.",
                "Die Kathedrale von Toledo gilt als eine der grö�?ten und prachtvollsten gotischen Kathedralen der Welt.",
                "Der berühmte Maler El Greco lebte in Toledo, und viele seiner Werke sind hier ausgestellt.",
                "Die Stadt ist bekannt für Marzipan, eine sü�?e Köstlichkeit arabischen Ursprungs.",
                "Toledo-Stahl war im Mittelalter für seine Härte berühmt und begehrt bei Schwertschmieden.",
                "Die Synagoge Santa María la Blanca ist eines der ältesten erhaltenen jüdischen Bauwerke in Europa.",
                "Das Stadtbild wird von der massiven Festung des Alcázar von Toledo dominiert.",
                "Die römische Brücke Puente de Alcántara ist einer der Hauptzugänge zur Altstadt."
          ],
          "hu": [
                "Toledo egykor a Spanyol Birodalom f�?városa volt, amíg Madrid 1561-ben át nem vette ezt a szerepet.",
                "A toledói katedrális a világ egyik legnagyobb és legpompásabb gótikus katedrálisa.",
                "A híres fest�?, El Greco Toledóban élt, és számos műve itt van kiállítva.",
                "A város ismert a marcipánról, egy arab eredetű édes finomságról.",
                "A toledói acél a középkorban híres volt keménységér�?l, és nagyon keresett volt a kardkovácsok körében.",
                "A Santa María la Blanca zsinagóga az egyik legrégebbi fennmaradt zsidó építmény Európában.",
                "A városképet a toledói Alcázar masszív er�?dítménye uralja.",
                "Az Alcántara római híd az óváros egyik f�? bejárata."
          ],
          "ro": [
                "Toledo a fost odat�? capitala Imperiului Spaniol, pân�? când Madridul a preluat acest rol în 1561.",
                "Catedrala din Toledo este considerat�? una dintre cele mai mari �?i mai magnifice catedrale gotice din lume.",
                "Celebrul pictor El Greco a tr�?it în Toledo, iar multe dintre operele sale sunt expuse aici.",
                "Ora�?ul este cunoscut pentru mar�?ipan, o delicates�? dulce de origine arab�?.",
                "O�?elul de Toledo a fost faimos în Evul Mediu pentru duritatea sa �?i era foarte c�?utat de fierarii de s�?bii.",
                "Sinagoga Santa María la Blanca este una dintre cele mai vechi structuri evreie�?ti supravie�?uitoare din Europa.",
                "Peisajul urban este dominat de fort�?rea�?a masiv�? Alcázar din Toledo.",
                "Podul roman Puente de Alcántara este unul dintre principalele puncte de acces în ora�?ul vechi."
          ],
          "en": [
                "Toledo was once the capital of the Spanish Empire until Madrid took over this role in 1561.",
                "The Cathedral of Toledo is considered one of the largest and most magnificent Gothic cathedrals in the world.",
                "The famous painter El Greco lived in Toledo, and many of his works are exhibited here.",
                "The city is known for marzipan, a sweet delicacy of Arab origin.",
                "Toledo steel was famous in the Middle Ages for its hardness and was highly sought after by swordsmiths.",
                "The Santa María la Blanca Synagogue is one of the oldest surviving Jewish structures in Europe.",
                "The cityscape is dominated by the massive fortress of the Alcázar of Toledo.",
                "The Roman bridge Puente de Alcántara is one of the main access points to the old town."
          ]
    },
    image: "/geo-images/spain/toledo.webp",
    
  },
  {
    id: "es-santiago", type: "city", parent: "ES-GA", coords: [-8.5448, 42.8782],
    name: {"de": "Santiago de Compostela", "hu": "Santiago de Compostela", "ro": "Santiago de Compostela", "en": "Santiago de Compostela"},
    
    description: {
          "de": "Santiago de Compostela in Galicien ist eines der bedeutendsten Pilgerziele der christlichen Welt. Als Endpunkt des berühmten Jakobswegs (Camino de Santiago) empfängt die Stadt jährlich hunderttausende Pilger und Reisende, die sich vor der beeindruckenden Kathedrale versammeln. Die gesamte Altstadt, mit ihren gepflasterten Stra�?en, Arkadengängen und Granitgebäuden, gehört zum UNESCO-Weltkulturerbe. Das feuchte, ozeanische Klima Galiciens sorgt für eine üppig grüne Umgebung, die einen schönen Kontrast zur steinernen Architektur bildet. Die Stadt ist zudem berühmt für die lebhafte Atmosphäre der Universität Santiago und eine exzellente Meeresfrüchte-Küche.",
          "hu": "A galíciai Santiago de Compostela a keresztény világ egyik legjelent�?sebb zarándokcélpontja. A híres Szent Jakab-út (Camino de Santiago) végpontjaként a város évente zarándokok és utazók százezreit fogadja, akik a lenyűgöz�? katedrális el�?tt gyűlnek össze. Az egész óváros macskaköves utcáival, árkádsoraival és gránitépületeivel az UNESCO világörökség része. Galícia nedves, óceáni éghajlata buja, zöld környezetet biztosít, amely gyönyörű kontrasztot alkot a k�?építészettel. A város híres a Santiago-i Egyetem nyüzsg�? hangulatáról és a kiváló tengeri ételeir�?l is.",
          "ro": "Santiago de Compostela din Galicia este una dintre cele mai importante destina�?ii de pelerinaj din lumea cre�?tin�?. Ca punct final al faimosului Camino de Santiago, ora�?ul prime�?te anual sute de mii de pelerini �?i c�?l�?tori care se adun�? în fa�?a impresionantei catedrale. �?ntregul ora�? vechi, cu str�?zile sale pietruite, arcadele �?i cl�?dirile din granit, este în Patrimoniul Mondial UNESCO. Clima oceanic�? �?i umed�? a Galiciei ofer�? un mediu verde luxuriant, care contrasteaz�? frumos cu arhitectura din piatr�?. Ora�?ul este renumit �?i pentru atmosfera plin�? de via�?�? a Universit�?�?ii din Santiago �?i pentru buc�?t�?ria excelent�? cu fructe de mare.",
          "en": "Santiago de Compostela in Galicia is one of the most important pilgrimage destinations in the Christian world. As the end point of the famous Camino de Santiago (Way of St. James), the city annually welcomes hundreds of thousands of pilgrims and travelers who gather in front of the impressive cathedral. The entire old town, with its cobbled streets, arcades, and granite buildings, is a UNESCO World Heritage site. Galicia's damp, oceanic climate provides a lush green environment that beautifully contrasts with the stone architecture. The city is also famous for the lively atmosphere of the University of Santiago and its excellent seafood cuisine."
    }, descriptionAdvanced: { de: "", hu: "Santiago de Compostela Gal�cia spiritu�lis �s k�zigazgat�si k�zpontja, valamint a t�rt�nelmi Szent Jakab-�t (Camino de Santiago) vil�gh�r? v�g�llom�sa. A v�ros sz�ve a fens�ges Praza do Obradoiro t�r, amelyet a katedr�lis impoz�ns, gazdagon d�sz�tett barokk homlokzata ural. E hatalmas templom kript�j�ban nyugszanak �ll�t�lag id?sebb Jakab apostol f�ldi maradv�nyai, ami a v�rost a k�z�pkor �ta a legfontosabb kereszt�ny zar�ndokhelyek egyik�v� teszi. A t�rt�nelmi �v�ros macskak�ves gr�nitutc�kb�l, csod�latos kolostorokb�l �s forgalmas �rk�dokb�l �ll� leny?g�z? labirintus. A t�bb ezer zar�ndok mellett a v�rosk�pet er?sen meghat�rozz�k az �vsz�zados egyetem di�kjai is.", ro: "", en: "Santiago de Compostela is the mystical, rain-swept capital of Galicia, revered worldwide as the final destination of the Camino de Santiago pilgrimage route. Its historic center is a masterpiece of Romanesque, Gothic, and Baroque architecture, radiating outward from its awe-inspiring, monumental cathedral. The city possesses a profoundly spiritual and emotional atmosphere, constantly filled with weary but triumphant pilgrims arriving from across Europe. Beyond its religious significance, Santiago is a vibrant university town, boasting arcaded granite streets and a thriving, seafood-rich culinary scene." }, factsAdvanced: { de: [], hu: [
        "A Szent Jakab-�t (El Camino) zar�ndoklat�t a 9. sz�zad �ta j�rj�k, �s az �t kagyl�mot�vuma a zar�ndokok egyetemes szimb�lum�v� v�lt.",
        "A Santiago de Compostela-i katedr�lisban tal�lhat� a 'Botafumeiro', egy 80 kil�s �ri�si t�mj�nez?, amelyet k�l�nleges alkalmakkor lengetnek meg.",
        "Az �v�ros szinte minden �p�lete helyi gr�nitb�l k�sz�lt, amely az es?s id?ben var�zslatos, ez�st�s f�nyt kap.",
        "A Hostal de los Reyes Cat�licos, amely egykor zar�ndokk�rh�z volt, ma a vil�g egyik legr�gebbi �s legf�ny?z?bb sz�llod�ja (Parador)."
      ], ro: [], en: [
        "The city's magnificent cathedral is the reputed burial place of Saint James the Great, one of the apostles of Jesus Christ.",
        "The historic center of Santiago de Compostela has been designated as a UNESCO World Heritage site since 1985.",
        "The University of Santiago de Compostela, founded in 1495, is one of the oldest universities in the world, bringing a lively student culture to the city."
      ] },
    facts: {
          "de": [
                "Das Grab des Apostels Jakobus soll sich in der Krypta der Kathedrale befinden.",
                "Das riesige Weihrauchfass (Botafumeiro) der Kathedrale wird zu besonderen Anlässen durch das Querschiff geschwungen.",
                "Das Hostal de los Reyes Católicos am Obradoiro-Platz ist heute ein luxuriöses Parador-Hotel.",
                "Die Universität von Santiago de Compostela wurde 1495 gegründet und ist eine der ältesten der Welt.",
                "Die Tarta de Santiago, ein Mandelkuchen, ist die bekannteste sü�?e Spezialität der Region.",
                "Der Jakobsweg zieht jährlich über 300.000 registrierte Pilger an.",
                "Pulpo a la gallega (Krake nach galicischer Art) ist das emblematischste Gericht der lokalen Gastronomie.",
                "Galicien hat eine eigene Sprache, das Galicische (Galego), das dem Portugiesischen ähnlich ist."
          ],
          "hu": [
                "A hagyomány szerint Jakab apostol sírja a katedrális kriptájában található.",
                "A katedrális hatalmas füstöl�?jét (Botafumeiro) különleges alkalmakkor lengetik a kereszthajóban.",
                "Az Obradoiro téren álló Hostal de los Reyes Católicos ma luxus Parador szálloda.",
                "A Santiago de Compostela-i Egyetemet 1495-ben alapították, és a világ egyik legrégebbi egyeteme.",
                "A Tarta de Santiago, egy mandulatorta, a régió legismertebb édes specialitása.",
                "A Szent Jakab-út évente több mint 300 000 regisztrált zarándokot vonz.",
                "A Pulpo a la gallega (galíciai polip) a helyi gasztronómia legemblematikusabb étele.",
                "Galícia saját nyelvvel rendelkezik, a galíciaival (galego), amely hasonlít a portugálra."
          ],
          "ro": [
                "Se spune c�? mormântul Apostolului Iacob se afl�? în cripta catedralei.",
                "Uria�?a c�?delni�?�? (Botafumeiro) a catedralei este balansat�? prin transept la ocazii speciale.",
                "Hostal de los Reyes Católicos din Pia�?a Obradoiro este ast�?zi un hotel Parador de lux.",
                "Universitatea din Santiago de Compostela a fost fondat�? în 1495 �?i este una dintre cele mai vechi din lume.",
                "Tarta de Santiago, o pr�?jitur�? cu migdale, este cea mai faimoas�? specialitate dulce a regiunii.",
                "Camino de Santiago atrage anual peste 300.000 de pelerini înregistra�?i.",
                "Pulpo a la gallega (caracati�?�? în stil galician) este cel mai emblematic fel de mâncare al gastronomiei locale.",
                "Galicia are propria sa limb�?, galiciana (galego), care este asem�?n�?toare cu portugheza."
          ],
          "en": [
                "The tomb of the Apostle James is said to be located in the crypt of the cathedral.",
                "The cathedral's giant censer (Botafumeiro) is swung through the transept on special occasions.",
                "The Hostal de los Reyes Católicos on the Obradoiro square is today a luxurious Parador hotel.",
                "The University of Santiago de Compostela was founded in 1495 and is one of the oldest in the world.",
                "Tarta de Santiago, an almond cake, is the most famous sweet specialty of the region.",
                "The Camino de Santiago attracts over 300,000 registered pilgrims annually.",
                "Pulpo a la gallega (Galician-style octopus) is the most emblematic dish of the local gastronomy.",
                "Galicia has its own language, Galician (Galego), which is similar to Portuguese."
          ]
    },
    image: "/geo-images/spain/santiago-de-compostela.webp",
    
  },
  {
    id: "es-alhambra", type: "landmark", parent: "ES-AN", coords: [-3.5896, 37.1760],
    name: {"de": "Alhambra", "hu": "Alhambra", "ro": "Alhambra", "en": "Alhambra"},
    
    description: {
          "de": "Die Alhambra in Granada ist zweifellos das beeindruckendste Monument der maurischen Kultur in Europa. Diese auf dem Sabikah-Hügel thronende Stadtfestung ist ein architektonisches Meisterwerk aus dem 13. und 14. Jahrhundert. Die Paläste der Nasriden-Sultane faszinieren mit filigranen Stuckarbeiten, feinen Mosaiken und ruhigen Innenhöfen, in denen das sanfte Plätschern von Wasserfontänen die Luft erfüllt. Direkt neben den Palästen liegen die wunderschönen Gärten des Generalife, der ehemaligen Sommerresidenz. Die Alhambra ist nicht nur ein Palast, sondern ein vollkommener Ausdruck der islamischen Kunst und Philosophie.",
          "hu": "A granadai Alhambra kétségtelenül a mór kultúra leglenyűgöz�?bb műemléke Európában. A Sabikah-hegyen trónoló város-er�?d a 13. és 14. századból származó építészeti mestermű. A Naszrid szultánok palotái filigrán stukkómunkákkal, finom mozaikokkal és csendes bels�? udvarokkal nyűgöznek le, ahol a szök�?kutak lágy csobogása tölti be a leveg�?t. A paloták közvetlen közelében találhatók a Generalife, az egykori nyári rezidencia gyönyörű kertjei. Az Alhambra nem pusztán egy palota, hanem az iszlám művészet és filozófia tökéletes kifejez�?dése.",
          "ro": "Alhambra din Granada este, f�?r�? îndoial�?, cel mai impresionant monument al culturii maure din Europa. Acest ora�?-fort�?rea�?�? care troneaz�? pe dealul Sabikah este o capodoper�? arhitectural�? din secolele al XIII-lea �?i al XIV-lea. Palatele sultanilor Nasrid fascineaz�? cu stucaturi filigranate, mozaicuri fine �?i cur�?i interioare lini�?tite, unde susurul blând al fântânilor cu ap�? umple aerul. Chiar lâng�? palate se afl�? frumoasele gr�?dini ale Generalife, fosta re�?edin�?�? de var�?. Alhambra nu este doar un palat, ci o expresie perfect�? a artei �?i filosofiei islamice.",
          "en": "The Alhambra in Granada is undoubtedly the most impressive monument of Moorish culture in Europe. Perched on the Sabikah hill, this city-fortress is an architectural masterpiece from the 13th and 14th centuries. The palaces of the Nasrid Sultans fascinate with filigree stucco work, fine mosaics, and tranquil courtyards where the gentle babble of water fountains fills the air. Right next to the palaces are the beautiful gardens of the Generalife, the former summer residence. The Alhambra is not just a palace but a perfect expression of Islamic art and philosophy."
    }, descriptionAdvanced: { de: "", hu: "A granadai Alhambra az iszl�m �p�t�szet vitathatatlan eur�pai cs�cspontja �s az egyik legl�togatottabb m?eml�k Spanyolorsz�gban. A Sabika-dombon magasod� hatalmas palota- �s er?dkomplexum a Naszrid-dinasztia elk�peszt? pomp�j�t �s kifinomults�g�t t�kr�zi. A filigr�n stukk�k, az eleg�ns udvarok, mint a h�res Oroszl�nos udvar, �s a mesterien kialak�tott v�zj�t�kok egy szinte paradicsomi atmoszf�r�t teremtenek. Az �p�letegy�ttes szerves r�sz�t k�pezi a szomsz�dos Generalife, amely a m�r uralkod�k gy�ny�r?, z�ldell? ny�ri rezidenci�ja volt. Az Alhambra 1492-ig a m�r uralom utols� b�sty�ja volt az Ib�riai-f�lszigeten.", ro: "", en: "The Alhambra is a breathtaking palace and fortress complex situated in Granada, representing the absolute pinnacle of Moorish art and architecture in Europe. Perched majestically on a highly fortified hill, it was built by the Nasrid dynasty as a luxurious royal residence and a powerful military citadel. The complex is a masterpiece of intricate Islamic design, featuring stunning stuccowork, mesmerizing tile mosaics, and tranquil, mathematically perfect courtyards. Surrounded by the beautifully landscaped Generalife gardens, the Alhambra stands as a poetic and enduring testament to a bygone era of Islamic rule in Spain." }, factsAdvanced: { de: [], hu: [
        "Az 'Alhambra' n�v az arab 'Al-Hamr�' (A V�r�s) sz�b�l ered, amely val�sz�n?leg a falak jellegzetes sz�n�re utal.",
        "Az Oroszl�nos udvar sz�k?k�tj�t pontosan 12 m�rv�nyoroszl�n tartja, amelyek eredetileg v�zi�rak�nt m?k�dtek.",
        "A komplexum sz�v�ben �ll V. K�roly renesz�nsz palot�ja, amelyet j�val a kereszt�ny h�d�t�s ut�n �p�tettek.",
        "Az Alhambra falain tal�lhat� kalligr�fi�k nagy r�sze versekb?l �s a 'Nincs m�s gy?ztes, csak Isten' mott�b�l �ll."
      ], ro: [], en: [
        "The name 'Alhambra' translates from Arabic as 'The Red One', likely referring to the color of the clay used in its surrounding walls.",
        "The Court of the Lions is one of the complex's most famous features, showcasing a highly complex hydraulic system and exquisite marble columns.",
        "The Alhambra was designated a UNESCO World Heritage site in 1984 and remains one of the most visited historical monuments in Spain."
      ] },
    facts: {
          "de": [
                "Der Name 'Alhambra' leitet sich vom Arabischen 'al-Qal'a al-Hamra' ab, was 'die rote Festung' bedeutet.",
                "Die Nasridenpaläste, wie der Myrtenhof, sind das architektonische Herzstück der Anlage.",
                "Der Palast Karls V. wurde später im Renaissance-Stil mitten in die Alhambra gebaut.",
                "Ein ausgeklügeltes Hydrauliksystem versorgte die gesamte Festung schon im Mittelalter mit Wasser.",
                "In den Wänden sind tausende poetische Inschriften und Koranverse in kunstvoller Kalligrafie eingraviert.",
                "Die Alhambra wurde 1984 in die Liste des UNESCO-Weltkulturerbes aufgenommen.",
                "Der Generalife, der Sommerpalast, liegt etwas höher als die Alhambra und bot eine kühle Zuflucht.",
                "Heute ist die Alhambra eine der meistbesuchten Touristenattraktionen Spaniens."
          ],
          "hu": [
                "Az 'Alhambra' név az arab 'al-Qal'a al-Hamra' szóból származik, amely 'vörös er�?döt' jelent.",
                "A Naszrid-paloták, például a Mirtusz-udvar, az épületegyüttes építészeti központjai.",
                "V. Károly palotáját kés�?bb reneszánsz stílusban építették az Alhambra közepére.",
                "Egy ötletes hidraulikus rendszer már a középkorban vízzel látta el az egész er�?döt.",
                "A falakba több ezer költ�?i feliratot és Korán-verset véstek művészi kalligráfiával.",
                "Az Alhambrát 1984-ben vették fel az UNESCO világörökségi listájára.",
                "A Generalife, a nyári palota valamivel magasabban fekszik, mint az Alhambra, és hűvös menedéket nyújtott.",
                "Ma az Alhambra Spanyolország egyik leglátogatottabb turisztikai látványossága."
          ],
          "ro": [
                "Numele 'Alhambra' deriv�? din arab�? 'al-Qal'a al-Hamra', care înseamn�? 'fort�?rea�?a ro�?ie'.",
                "Palatele Nasrid, cum ar fi Curtea Mir�?ilor, sunt piesa central�? arhitectural�? a complexului.",
                "Palatul lui Carol al V-lea a fost construit mai târziu în stil renascentist chiar în mijlocul Alhambrei.",
                "Un sistem hidraulic ingenios a furnizat ap�? întregii fort�?re�?e înc�? din Evul Mediu.",
                "Mii de inscrip�?ii poetice �?i versete din Coran sunt gravate în pere�?i cu o caligrafie artistic�?.",
                "Alhambra a fost ad�?ugat�? pe lista Patrimoniului Mondial UNESCO în 1984.",
                "Generalife, palatul de var�?, este situat pu�?in mai sus decât Alhambra �?i oferea un refugiu r�?coros.",
                "Ast�?zi, Alhambra este una dintre cele mai vizitate atrac�?ii turistice din Spania."
          ],
          "en": [
                "The name 'Alhambra' derives from the Arabic 'al-Qal'a al-Hamra', which means 'the red fortress'.",
                "The Nasrid Palaces, such as the Court of the Myrtles, are the architectural centerpiece of the complex.",
                "The Palace of Charles V was built later in the Renaissance style right in the middle of the Alhambra.",
                "An ingenious hydraulic system supplied the entire fortress with water as early as the Middle Ages.",
                "Thousands of poetic inscriptions and Quranic verses are engraved into the walls in artistic calligraphy.",
                "The Alhambra was added to the UNESCO World Heritage list in 1984.",
                "The Generalife, the summer palace, is located slightly higher than the Alhambra and provided a cool retreat.",
                "Today, the Alhambra is one of the most visited tourist attractions in Spain."
          ]
    },
    image: "/geo-images/spain/alhambra.webp",
    
  },
  {
    id: "es-sagrada-familia", type: "landmark", parent: "ES-CT", coords: [2.1744, 41.4036],
    name: {"de": "Sagrada Familia", "hu": "Sagrada Família", "ro": "Sagrada Familia", "en": "Sagrada Familia"},
    
    description: {
          "de": "Die Basílica i Temple Expiatori de la Sagrada Família in Barcelona ist das Lebenswerk des visionären Architekten Antoni Gaudí. Sie ist zweifellos eine der au�?ergewöhnlichsten und faszinierendsten Kirchen der Welt. Der Bau begann 1882 und ist bis heute unvollendet, wobei Gaudí seine letzten 40 Lebensjahre ausschlie�?lich diesem Projekt widmete. Die Architektur verbindet auf organische Weise Gotik, Art Nouveau und von der Natur inspirierte Formen. Der Innenraum erinnert an einen gewaltigen Wald aus verästelten Steinsäulen, durchflutet vom Licht bunter Glasfenster. Die Fertigstellung der Sagrada Família wird weltweit mit gro�?er Spannung erwartet.",
          "hu": "A barcelonai Basílica i Temple Expiatori de la Sagrada Família Antoni Gaudí látnok építész életműve. Kétségtelenül a világ egyik legkülönlegesebb és leglenyűgöz�?bb temploma. �?pítése 1882-ben kezd�?dött és a mai napig befejezetlen, Gaudí élete utolsó 40 évét kizárólag ennek a projektnek szentelte. Az építészet szervesen ötvözi a gótikát, a szecessziót és a természet ihlette formákat. A bels�? tér egy hatalmas, elágazó k�?oszlopokból álló erd�?re emlékeztet, amelyet színes ólomüveg ablakok fénye áraszt el. A Sagrada Família befejezését világszerte nagy várakozás övezi.",
          "ro": "Basílica i Temple Expiatori de la Sagrada Família din Barcelona este munca de o via�?�? a arhitectului vizionar Antoni Gaudí. Este, f�?r�? îndoial�?, una dintre cele mai extraordinare �?i fascinante biserici din lume. Construc�?ia a început în 1882 �?i este înc�? neterminat�?, Gaudí dedicându-�?i ultimii 40 de ani din via�?�? exclusiv acestui proiect. Arhitectura combin�? în mod organic goticul, Art Nouveau �?i formele inspirate din natur�?. Interiorul aminte�?te de o p�?dure masiv�? de stâlpi de piatr�? ramifica�?i, inundat�? de lumina vitraliilor colorate. Finalizarea Sagrada Família este a�?teptat�? cu mare ner�?bdare în întreaga lume.",
          "en": "The Basílica i Temple Expiatori de la Sagrada Família in Barcelona is the life's work of the visionary architect Antoni Gaudí. It is undoubtedly one of the most extraordinary and fascinating churches in the world. Construction began in 1882 and remains unfinished to this day, with Gaudí dedicating the last 40 years of his life exclusively to this project. The architecture organically combines Gothic, Art Nouveau, and nature-inspired forms. The interior resembles a massive forest of branching stone columns, flooded with light from colorful stained glass windows. The completion of the Sagrada Família is eagerly anticipated worldwide."
    }, descriptionAdvanced: { de: "", hu: "A Sagrada Fam�lia (Szent Csal�d-templom) Barcelona legh�resebb jelk�pe �s a katal�n �p�t�szg�niusz, Antoni Gaud� befejezetlen mesterm?ve. A bazilika �p�t�se 1882-ben kezd?d�tt, �s Gaud� az �lete utols� �vtizedeit kiz�r�lag ennek a monument�lis projektnek szentelte. Az organikus, term�szet ihlette form�k, az erd?szer?en el�gaz� oszlopok �s a sz�nes �lom�veg ablakok leny?g�z? f�ny- �s sz�nj�t�kot var�zsolnak a bels? t�rbe. A homlokzatok rendk�v�l r�szletgazdagok, mindegyik m�s-m�s bibliai t�m�t �s �p�t�szeti st�lust k�pvisel. A templom befejez�s�t Gaud� hal�l�nak 100. �vfordul�j�ra, 2026-ra tervezik.", ro: "", en: "The Bas�lica de la Sagrada Fam�lia is an awe-inspiring, monumental Roman Catholic minor basilica in Barcelona, famously recognized as the unfinished masterpiece of architect Antoni Gaud�. This visionary structure completely breaks from traditional cathedral design, utilizing complex organic forms, vibrant stained glass, and highly symbolic, nature-inspired facades. Construction began in the late 19th century and has continued for over a century, relying entirely on private donations and ticket sales. The basilica is an iconic symbol of Barcelona and a globally unparalleled architectural marvel that continues to evolve to this day." }, factsAdvanced: { de: [], hu: [
        "Ha elk�sz�l, a Sagrada Fam�lia lesz a vil�g legmagasabb temploma, a maga 172,5 m�teres magass�g�val.",
        "Gaud� tisztelte a term�szetet, ez�rt a templom f?tornya pontosan egy m�terrel alacsonyabb lesz a k�zeli Montju�c-hegyn�l.",
        "A bazilika �p�t�s�t a kezdetekt?l fogva kiz�r�lag adom�nyokb�l �s a bel�p?jegyek bev�teleib?l finansz�rozz�k.",
        "Gaud� f�ldi maradv�nyai a Sagrada Fam�lia kript�j�ban, a K�rmelhegyi Boldogasszony-k�poln�ban nyugszanak."
      ], ro: [], en: [
        "Construction of the Sagrada Familia began in 1882, and Gaud� dedicated the last 40 years of his life exclusively to the project.",
        "When the central spire of Jesus Christ is completed, the basilica will reach 172.5 meters, making it the tallest church building in the world.",
        "Despite being incomplete, the Sagrada Familia was consecrated by Pope Benedict XVI in 2010 and proclaimed a minor basilica."
      ] },
    facts: {
          "de": [
                "Der Bau wird ausschlie�?lich durch Spenden und Eintrittsgelder finanziert.",
                "Nach Fertigstellung wird sie mit 172,5 Metern die höchste Kirche der Welt sein.",
                "Gaudí entwarf 18 Türme, die Jesus, Maria, die Evangelisten und die Apostel repräsentieren.",
                "Die Krypta und die Geburtsfassade wurden 2005 zum UNESCO-Weltkulturerbe erklärt.",
                "Gaudí wurde nach seinem tragischen Tod 1926 in der Krypta der Kirche beigesetzt.",
                "Der zentrale Turm, der Jesus gewidmet ist, wird von einem riesigen Kreuz gekrönt werden.",
                "Die Architekten streben eine Fertigstellung zum 100. Todestag von Gaudí im Jahr 2026 an.",
                "Die detaillierten Steinarbeiten an den Fassaden erzählen komplexe biblische Geschichten."
          ],
          "hu": [
                "Az építkezést kizárólag adományokból és belép�?díjakból finanszírozzák.",
                "Befejezésekor 172,5 méterrel a világ legmagasabb temploma lesz.",
                "Gaudí 18 tornyot tervezett, amelyek Jézust, Máriát, az evangélistákat és az apostolokat jelképezik.",
                "A kriptát és a Születés homlokzatát 2005-ben az UNESCO világörökség részévé nyilvánították.",
                "Gaudít 1926-os tragikus halála után a templom kriptájában temették el.",
                "A Jézusnak szentelt központi tornyot egy hatalmas kereszt fogja megkoronázni.",
                "Az építészek a befejezést Gaudí halálának 100. évfordulójára, 2026-ra tervezik.",
                "A homlokzatok részletgazdag k�?faragásai összetett bibliai történeteket mesélnek el."
          ],
          "ro": [
                "Construc�?ia este finan�?at�? exclusiv din dona�?ii �?i taxe de intrare.",
                "Odat�? finalizat�?, va fi cea mai înalt�? biseric�? din lume, cu 172,5 metri.",
                "Gaudí a proiectat 18 turnuri, reprezentându-i pe Iisus, Maria, evangheli�?ti �?i apostoli.",
                "Cripta �?i Fa�?ada Na�?terii au fost declarate Patrimoniu Mondial UNESCO în 2005.",
                "Gaudí a fost înmormântat în cripta bisericii dup�? moartea sa tragic�? din 1926.",
                "Turnul central, dedicat lui Iisus, va fi încoronat de o cruce uria�?�?.",
                "Arhitec�?ii vizeaz�? finalizarea pentru a marca a 100-a comemorare a mor�?ii lui Gaudí, în 2026.",
                "Sculpturile detaliate în piatr�? de pe fa�?ade spun pove�?ti biblice complexe."
          ],
          "en": [
                "The construction is entirely funded by private donations and entrance fees.",
                "Upon completion, it will be the tallest church in the world at 172.5 meters.",
                "Gaudí designed 18 towers representing Jesus, Mary, the Evangelists, and the Apostles.",
                "The crypt and the Nativity facade were declared a UNESCO World Heritage site in 2005.",
                "Gaudí was buried in the crypt of the church following his tragic death in 1926.",
                "The central tower, dedicated to Jesus, will be crowned with a giant cross.",
                "The architects aim for completion to mark the 100th anniversary of Gaudí's death in 2026.",
                "The detailed stonework on the facades tells complex biblical stories."
          ]
    },
    image: "/geo-images/spain/sagrada-familia.webp",
    
  },
  {
    id: "es-park-guell", type: "landmark", parent: "ES-CT", coords: [2.1527, 41.4145],
    name: {"de": "Park Güell", "hu": "Güell park", "ro": "Parcul Güell", "en": "Park Güell"},
    
    description: {
          "de": "Der Park Güell, hoch oben auf dem Hügel Carmel gelegen, ist ein weiteres Meisterwerk von Antoni Gaudí und ein ikonisches Symbol Barcelonas. Ursprünglich als exklusive Gartenstadt konzipiert, wurde das Projekt nie vollendet und schlie�?lich in einen öffentlichen Park umgewandelt. Der Park ist berühmt für seine organischen Architekturformen, farbenfrohen Mosaike (Trencadís) und fantasievollen Pavillons. Das Herzstück ist die gro�?e Terrasse mit der geschwungenen, mit Kacheln verzierten Bank, die einen spektakulären Blick auf die Stadt und das Mittelmeer bietet. Der Park Güell wirkt wie ein Spaziergang durch ein surrealistisches Märchenland.",
          "hu": "A Carmel-hegy tetején fekv�? Güell park Antoni Gaudí újabb remekműve és Barcelona ikonikus szimbóluma. Eredetileg exkluzív kertvárosnak tervezték, a projekt sosem fejez�?dött be, és végül nyilvános parkká alakították. A park organikus építészeti formáiról, színes mozaikjairól (trencadís) és fantáziadús pavilonjairól híres. A központi eleme a nagy terasz a hullámos, csempézett paddal, ahonnan látványos kilátás nyílik a városra és a Földközi-tengerre. A Güell parkban tett séta olyan, mintha egy szürrealista meseországban járnánk.",
          "ro": "Parcul Güell, situat sus pe dealul Carmel, este o alt�? capodoper�? a lui Antoni Gaudí �?i un simbol iconic al Barcelonei. Conceput ini�?ial ca un ora�?-gr�?din�? exclusivist, proiectul nu a fost niciodat�? finalizat �?i a fost în cele din urm�? transformat într-un parc public. Parcul este renumit pentru formele sale arhitecturale organice, mozaicurile colorate (trencadís) �?i pavilioanele fanteziste. Piesa central�? este marea teras�? cu banca �?erpuit�?, decorat�? cu pl�?ci ceramice, care ofer�? vederi spectaculoase asupra ora�?ului �?i M�?rii Mediterane. Parcul Güell pare ca o plimbare printr-un t�?râm de basm suprarealist.",
          "en": "Park Güell, perched high on Carmel Hill, is another masterpiece by Antoni Gaudí and an iconic symbol of Barcelona. Originally conceived as an exclusive garden city, the project was never completed and was eventually converted into a public park. The park is famous for its organic architectural forms, colorful mosaics (trencadís), and imaginative pavilions. The centerpiece is the main terrace with its undulating, tile-decorated bench, offering spectacular views of the city and the Mediterranean Sea. Park Güell feels like a stroll through a surreal fairytale land."
    }, descriptionAdvanced: { de: "", hu: "A G�ell Park egy leny?g�z?, sz�nes k�zpark Barcelona �szaki r�sz�n, a Carmel-hegy lejt?j�n, amelyet Antoni Gaud� tervezett. Eredetileg egy exkluz�v luxus lak�parknak indult gr�f Eusebi G�ell megb�z�s�b�l, de v�g�l csak k�t h�z �p�lt fel a tervezett hatvanb�l. A park ma a modernista organikus �p�t�szet egyik legragyog�bb p�ld�ja, tele hull�mz� form�kkal, sz�npomp�s mozaikokkal (trencad�s) �s k?b?l �p�lt, f�kat ut�nz� viaduktokkal. A hatalmas, k�gy�z� padokkal szeg�lyezett k�zponti teraszr�l p�ratlan panor�ma ny�lik a v�rosra �s a F�ldk�zi-tengerre. A park bej�rat�t ?rz? mozaikszalamandra (a 'S�rk�ny') Barcelona egyik legismertebb szimb�lum�v� v�lt.", ro: "", en: "Park G�ell is a spectacular, vibrant public park system located on Carmel Hill in Barcelona, beautifully showcasing the creative genius of Antoni Gaud�. Originally conceived as a highly exclusive, luxurious housing estate, the project was ultimately unsuccessful and was later converted into a municipal park. The space is renowned for its whimsical architectural elements, colorful mosaic tiling known as trencad�s, and structures that organically blend with the natural terrain. Offering stunning panoramic views of the city and the sea, Park G�ell is a dreamlike environment that perfectly encapsulates Catalan Modernism." }, factsAdvanced: { de: [], hu: [
        "A park �p�t�se sor�n Gaud� �tt�r? szerepet j�tszott a 'trencad�s' (t�r�tt ker�miamozaik) technika fejleszt�s�ben.",
        "Gaud� k�zel 20 �vig �lt a park egyik fel�p�lt h�z�ban, amely ma m�zeumk�nt m?k�dik.",
        "A park h�res hull�mz� padja nemcsak eszt�tikus, hanem anat�miai szempontb�l is t�k�letesen illeszkedik az emberi h�t form�j�hoz.",
        "A k�zponti teraszt al�t�maszt� Hipostila-terem 86 d�r oszlopb�l �ll, �s eredetileg a lak�park piac�nak sz�nt�k."
      ], ro: [], en: [
        "The park features a famous, highly photographed multi-colored mosaic salamander, often referred to as 'el drac' (the dragon).",
        "Gaud� lived in a house within the park for 20 years; this building is now the Gaud� House Museum, though he did not design it himself.",
        "Park G�ell was officially opened as a public park in 1926 and was declared a UNESCO World Heritage site in 1984."
      ] },
    facts: {
          "de": [
                "Der Park ist nach dem Unternehmer Eusebi Güell benannt, Gaudís wichtigstem Mäzen.",
                "Der Park Güell wurde 1984 von der UNESCO zum Weltkulturerbe erklärt.",
                "Am Eingang werden Besucher von dem berühmten bunten Salamander (oder Drachen) begrü�?t.",
                "Die gro�?e Terrasse wird von 86 dorischen Säulen gestützt, die einen Marktplatz bilden.",
                "Gaudí lebte 20 Jahre lang in einem der wenigen fertiggestellten Häuser im Park.",
                "Das Haus, in dem Gaudí lebte, ist heute das Casa Museu Gaudí.",
                "Die Architektur des Parks integriert sich nahezu nahtlos in die natürliche Umgebung.",
                "Um �?berfüllung zu vermeiden, ist der Zugang zum Monumentalbereich des Parks mittlerweile begrenzt."
          ],
          "hu": [
                "A parkot Eusebi Güell vállalkozóról, Gaudí legfontosabb mecénásáról nevezték el.",
                "A Güell parkot 1984-ben az UNESCO világörökség részévé nyilvánították.",
                "A bejáratnál a híres színes szalamandra (vagy sárkány) fogadja a látogatókat.",
                "A nagy teraszt 86 dór oszlop tartja, amelyek egy piacteret alkotnak.",
                "Gaudí 20 évig élt a park egyik kevés befejezett házában.",
                "A ház, ahol Gaudí élt, ma a Casa Museu Gaudí (Gaudí Múzeum).",
                "A park építészete szinte zökken�?mentesen illeszkedik a természetes környezetbe.",
                "A túlzsúfoltság elkerülése érdekében a park műemléki területére a belépés ma már korlátozott."
          ],
          "ro": [
                "Parcul este numit dup�? antreprenorul Eusebi Güell, cel mai important mecena al lui Gaudí.",
                "Parcul Güell a fost declarat Patrimoniu Mondial UNESCO în 1984.",
                "La intrare, vizitatorii sunt întâmpina�?i de celebra salamandr�? (sau dragon) colorat�?.",
                "Terasa mare este sus�?inut�? de 86 de coloane dorice care formeaz�? o pia�?�?.",
                "Gaudí a locuit timp de 20 de ani într-una dintre pu�?inele case finalizate din parc.",
                "Casa în care a tr�?it Gaudí este acum Casa Museu Gaudí.",
                "Arhitectura parcului se integreaz�? aproape perfect în mediul natural.",
                "Pentru a evita supraaglomerarea, accesul în zona monumental�? a parcului este acum limitat."
          ],
          "en": [
                "The park is named after the entrepreneur Eusebi Güell, Gaudí's most important patron.",
                "Park Güell was declared a UNESCO World Heritage site in 1984.",
                "At the entrance, visitors are greeted by the famous colorful salamander (or dragon).",
                "The main terrace is supported by 86 Doric columns that form a marketplace.",
                "Gaudí lived in one of the few completed houses in the park for 20 years.",
                "The house where Gaudí lived is now the Casa Museu Gaudí.",
                "The park's architecture integrates almost seamlessly into the natural environment.",
                "To prevent overcrowding, access to the monumental zone of the park is now limited."
          ]
    },
    image: "/geo-images/spain/park-g-ell.webp",
    
  },
  {
    id: "es-prado", type: "landmark", parent: "ES-MD", coords: [-3.6922, 40.4138],
    name: {"de": "Museo del Prado", "hu": "Prado Múzeum", "ro": "Muzeul Prado", "en": "Prado Museum"},
    
    description: {
          "de": "Das Museo del Prado in Madrid ist eines der bedeutendsten und meistbesuchten Kunstmuseen der Welt. Eröffnet im Jahr 1819, beherbergt das prachtvolle neoklassizistische Gebäude eine der weltweit feinsten Sammlungen europäischer Kunst, die vom 12. Jahrhundert bis ins frühe 20. Jahrhundert reicht. Der Prado ist berühmt für seine unvergleichlichen Meisterwerke spanischer Künstler wie Velázquez, Goya und El Greco, aber auch für herausragende Werke von Tizian, Rubens und Bosch. Ein Rundgang durch den Prado ist eine faszinierende Reise durch die europäische Kunst- und Kulturgeschichte. Es ist das kronjuwelartige Zentrum des sogenannten goldenen Kunstdreiecks in Madrid.",
          "hu": "A madridi Prado Múzeum a világ egyik legjelent�?sebb és leglátogatottabb művészeti múzeuma. Az 1819-ben megnyílt, pompás neoklasszicista épület az európai művészet egyik legfinomabb gyűjteményének ad otthont, amely a 12. századtól a 20. század elejéig terjed. A Prado olyan spanyol művészek páratlan remekműveir�?l híres, mint Velázquez, Goya és El Greco, de Tiziano, Rubens és Bosch kiemelked�? alkotásait is �?rzi. A Pradóban tett séta lenyűgöz�? utazás az európai művészet és kultúrtörténet világába. Ez a madridi úgynevezett arany művészeti háromszög koronaékszerhez hasonló központja.",
          "ro": "Muzeul Prado din Madrid este unul dintre cele mai importante �?i mai vizitate muzee de art�? din lume. Deschis în 1819, cl�?direa magnific�? neoclasic�? g�?zduie�?te una dintre cele mai bune colec�?ii de art�? european�? din lume, datând din secolul al XII-lea pân�? la începutul secolului al XX-lea. Prado este renumit pentru capodoperele sale incomparabile ale arti�?tilor spanioli precum Velázquez, Goya �?i El Greco, dar �?i pentru lucr�?rile remarcabile ale lui Titian, Rubens �?i Bosch. Un tur al Prado este o c�?l�?torie fascinant�? prin istoria artei �?i culturii europene. Este centrul asemenea unei bijuterii al a�?a-numitului Triunghi de Aur al Artei din Madrid.",
          "en": "The Museo del Prado in Madrid is one of the most important and most visited art museums in the world. Opened in 1819, the magnificent neoclassical building houses one of the world's finest collections of European art, dating from the 12th century to the early 20th century. The Prado is famous for its incomparable masterpieces by Spanish artists such as Velázquez, Goya, and El Greco, but also for outstanding works by Titian, Rubens, and Bosch. A tour of the Prado is a fascinating journey through European art and cultural history. It is the jewel-like center of the so-called Golden Triangle of Art in Madrid."
    }, descriptionAdvanced: { de: "", hu: "A madridi Museo del Prado a vil�g egyik legfontosabb �s legrangosabb m?v�szeti m�zeuma, amely a klasszikus eur�pai fest�szet p�ratlan gy?jtem�ny�nek ad otthont. A m�zeum alapj�t a spanyol kir�lyi gy?jtem�nyek k�pezik, �gy kiv�telesen gazdag a spanyol aranykor (Siglo de Oro) mesterm?veiben. Itt tal�lhat� a vil�g leg�tfog�bb gy?jtem�nye Diego Vel�zquez, Francisco Goya �s El Greco alkot�saib�l. A Prado emellett jelent?s n�metalf�ldi, olasz �s flamand mesterek (mint Bosch, Rubens �s Tiziano) munk�it is ?rzi. Az �p�let maga a spanyol neoklasszicista �p�t�szet egyik cs�cspontja, amelyet Juan de Villanueva tervezett a 18. sz�zad v�g�n.", ro: "", en: "The Museo del Prado, located in central Madrid, is globally recognized as one of the most important and comprehensive national art museums in the world. It houses an exceptionally rich and unparalleled collection of European art spanning from the 12th to the early 20th centuries, based primarily on the former Spanish Royal Collection. The museum is the premier destination to study the works of Spanish masters like Diego Vel�zquez and Francisco Goya, as well as holding massive collections of Italian and Flemish artists. The Prado is a monumental institution of cultural heritage, essential to understanding the history of Western art." }, factsAdvanced: { de: [], hu: [
        "A m�zeum legh�resebb festm�nye k�ts�gtelen�l Vel�zquez 'Las Meninas' (Az udvarh�lgyek) c�m? remekm?ve.",
        "A Prado ?rzi Hieronymus Bosch 'A f�ldi gy�ny�r�k kertje' c�m? h�res, sz�rre�lis triptichonj�t.",
        "A gy?jtem�ny olyan hatalmas (t�bb mint 8000 festm�ny), hogy a ki�ll�t�terekben a m?veknek csup�n t�red�ke l�that� egyszerre.",
        "Francisco Goya t�bb mint 100 festm�nnyel �s t�bb sz�z rajzzal a m�zeum legjobban k�pviselt m?v�sze."
      ], ro: [], en: [
        "The museum officially opened to the public in 1819, originally created to house the immense art collection of the Spanish monarchs.",
        "The Prado is home to Vel�zquez's masterpiece 'Las Meninas', widely considered one of the most important paintings in Western art history.",
        "The museum's collection comprises over 8,200 drawings, 7,600 paintings, and 1,000 sculptures, though only a fraction is displayed at one time."
      ] },
    facts: {
          "de": [
                "Das Gebäude wurde ursprünglich als naturwissenschaftliches Kabinett von Juan de Villanueva entworfen.",
                "Der Prado besitzt die umfassendste Sammlung spanischer Malerei weltweit.",
                "Zu den bekanntesten Gemälden gehört Velázquez' Meisterwerk 'Las Meninas'.",
                "Die Sammlung von Francisco de Goya im Prado ist die grö�?te der Welt.",
                "Das Museum zeigt auch Hieronymus Boschs berühmtes Triptychon 'Der Garten der Lüste'.",
                "Insgesamt umfasst die Sammlung des Museums rund 8.600 Gemälde und über 700 Skulpturen.",
                "Der Prado feierte 2019 sein zweihundertjähriges Bestehen mit gro�?en Ausstellungen.",
                "Zusammen mit dem Thyssen-Bornemisza und dem Reina Sofía bildet er das Madrider Kunstdreieck."
          ],
          "hu": [
                "Az épületet eredetileg Juan de Villanueva tervezte természettudományi kabinetként.",
                "A Prado rendelkezik a spanyol festészet legátfogóbb gyűjteményével a világon.",
                "A legismertebb festmények közé tartozik Velázquez remekműve, a 'Las Meninas'.",
                "Francisco de Goya Prado-beli gyűjteménye a legnagyobb a világon.",
                "A múzeumban látható Hieronymus Bosch híres triptichonja, a 'Gyönyörök kertje' is.",
                "A múzeum gyűjteménye összesen mintegy 8600 festményt és több mint 700 szobrot tartalmaz.",
                "A Prado 2019-ben nagyszabású kiállításokkal ünnepelte fennállásának kétszázadik évfordulóját.",
                "A Thyssen-Bornemisza és a Reina Sofía múzeumokkal együtt alkotja a madridi művészeti háromszöget."
          ],
          "ro": [
                "Cl�?direa a fost ini�?ial conceput�? ca un cabinet de �?tiin�?e naturale de c�?tre Juan de Villanueva.",
                "Prado de�?ine cea mai cuprinz�?toare colec�?ie de pictur�? spaniol�? din lume.",
                "Printre cele mai faimoase picturi se num�?r�? capodopera lui Velázquez 'Las Meninas'.",
                "Colec�?ia lui Francisco de Goya de la Prado este cea mai mare din lume.",
                "Muzeul expune, de asemenea, celebrul triptic al lui Hieronymus Bosch, 'Gr�?dina deliciilor p�?mânte�?ti'.",
                "�?n total, colec�?ia muzeului include aproximativ 8.600 de picturi �?i peste 700 de sculpturi.",
                "Prado �?i-a s�?rb�?torit bicentenarul în 2019 cu expozi�?ii majore.",
                "�?mpreun�? cu Thyssen-Bornemisza �?i Reina Sofía, formeaz�? Triunghiul Artei din Madrid."
          ],
          "en": [
                "The building was originally designed as a natural science cabinet by Juan de Villanueva.",
                "The Prado holds the most comprehensive collection of Spanish painting in the world.",
                "Among the most famous paintings is Velázquez's masterpiece 'Las Meninas'.",
                "The Francisco de Goya collection in the Prado is the largest in the world.",
                "The museum also displays Hieronymus Bosch's famous triptych 'The Garden of Earthly Delights'.",
                "In total, the museum's collection includes around 8,600 paintings and over 700 sculptures.",
                "The Prado celebrated its bicentenary in 2019 with major exhibitions.",
                "Together with the Thyssen-Bornemisza and Reina Sofía, it forms Madrid's Golden Triangle of Art."
          ]
    },
    image: "/geo-images/spain/prado-museum.webp",
    
  },
  {
    id: "es-santiago-bernabeu", type: "landmark", parent: "ES-MD", coords: [-3.6883, 40.4531],
    name: {"de": "Santiago Bernabéu Stadion", "hu": "Santiago Bernabéu Stadion", "ro": "Stadionul Santiago Bernabéu", "en": "Santiago Bernabéu Stadium"},
    
    description: {
          "de": "Das Estadio Santiago Bernabéu im Herzen von Madrid ist ein wahrer Tempel des Weltfu�?balls. Es ist die stolze Heimat des legendären Vereins Real Madrid und Schauplatz zahlreicher epischer Fu�?ballschlachten. Seit seiner Eröffnung im Jahr 1947 wurde das Stadion mehrfach modernisiert und ausgebaut, um den wachsenden Anforderungen gerecht zu werden. Mit seiner beeindruckenden Architektur und der steilen Anordnung der Zuschauerränge erzeugt das Bernabéu eine ohrenbetäubende Atmosphäre bei jedem Spiel. Für Fu�?ballfans ist ein Besuch, der eine Tour durch die Trophäensäle und Spielerkabinen beinhaltet, ein unvergessliches Erlebnis.",
          "hu": "A madridi Estadio Santiago Bernabéu a világ labdarúgásának igazi szentélye. A legendás Real Madrid futballklub büszke otthona, és számos epikus futballcsata helyszíne. 1947-es megnyitása óta a stadiont többször korszerűsítették és b�?vítették a növekv�? igényeknek megfelel�?en. Lenyűgöz�? építészetével és a néz�?téri sorok meredek elrendezésével a Bernabéu minden mérk�?zésen fülsiketít�? hangulatot teremt. A futballrajongók számára egy felejthetetlen élmény a látogatás, amely magában foglalja a trófeatermek és a játékosöltöz�?k megtekintését is.",
          "ro": "Estadio Santiago Bernabéu, situat în inima Madridului, este un adev�?rat templu al fotbalului mondial. Este casa mândr�? a legendarului club Real Madrid �?i scena a numeroase b�?t�?lii epice de fotbal. De la deschiderea sa în 1947, stadionul a fost modernizat �?i extins de mai multe ori pentru a satisface cerin�?ele tot mai mari. Cu arhitectura sa impresionant�? �?i dispunerea abrupt�? a tribunelor, Bernabéu creeaz�? o atmosfer�? asurzitoare la fiecare meci. Pentru fanii fotbalului, o vizit�? care include un tur al s�?lilor cu trofee �?i al vestiarelor juc�?torilor este o experien�?�? de neuitat.",
          "en": "The Estadio Santiago Bernabéu in the heart of Madrid is a true temple of world football. It is the proud home of the legendary Real Madrid football club and the scene of numerous epic football battles. Since its opening in 1947, the stadium has been modernized and expanded several times to meet growing demands. With its impressive architecture and the steep arrangement of the spectator tiers, the Bernabéu creates a deafening atmosphere at every match. For football fans, a visit that includes a tour of the trophy rooms and player changing rooms is an unforgettable experience."
    }, descriptionAdvanced: { de: "", hu: "A madridi Santiago Bernab�u Stadion a futballvil�g egyik legikonikusabb �s legink�bb tisztelt szent�lye, a Real Madrid CF legend�s otthona. A stadion a Paseo de la Castellana sug�r�ton tal�lhat�, �s leny?g�z? m�reteivel, valamint modern felszerelts�g�vel kiemelkedik Eur�pa stadionjai k�z�l. Nev�t a klub kor�bbi eln�k�r?l kapta, aki az �p�tkez�st az 1940-es �vekben kezdem�nyezte. A Bernab�u sz�mtalan t�rt�nelmi m�rk?z�snek adott otthont, k�zt�k Bajnokok Lig�ja d�nt?knek �s az 1982-es labdar�g�-vil�gbajnoks�g fin�l�j�nak. A stadiont a k�zelm�ltban egy ultramodern, futurisztikus f�mes burkolattal �s beh�zhat� tet?vel l�tt�k el.", ro: "", en: "The Santiago Bernab�u Stadium, situated in the heart of Madrid, is one of the most famous and historic football venues in the world. As the fortress and home ground of Real Madrid, it has witnessed countless legendary matches and is steeped in the glorious history of one of football's most successful clubs. The stadium is an imposing, electrifying arena that can hold tens of thousands of passionate fans, creating an incredibly intimidating atmosphere for visiting teams. Following extensive modern renovations, the Bernab�u is a state-of-the-art facility that continues to be a temple for football enthusiasts globally." }, factsAdvanced: { de: [], hu: [
        "A stadion befogad�k�pess�ge a fel�j�t�sok ut�n t�bb mint 80 000 n�z?, ezzel Spanyolorsz�g m�sodik legnagyobb stadionja.",
        "A Real Madrid M�zeum, amely a stadionban tal�lhat�, Madrid v�ros�nak harmadik legl�togatottabb m�zeuma a Prado �s a Reina Sof�a ut�n.",
        "1957-ben a Bernab�u volt a vil�g els? stadionja, amelyet mesters�ges f�nysz�r�kkal szereltek fel �jszakai m�rk?z�sekhez.",
        "A stadion gyepsz?nyege alatt egy hatalmas, m�ly barlangrendszer tal�lhat�, amely ide�lis k�r�lm�nyeket biztos�t a f? t�rol�s�hoz �s gondoz�s�hoz."
      ], ro: [], en: [
        "The stadium opened in 1947 and was later named after Santiago Bernab�u, the iconic former player and club president.",
        "It is one of the few stadiums globally to have hosted both a UEFA Champions League final and a FIFA World Cup final.",
        "The stadium has a seating capacity of over 81,000, making it the second-largest football stadium in Spain after Camp Nou."
      ] },
    facts: {
          "de": [
                "Das Stadion ist nach dem ehemaligen Präsidenten von Real Madrid, Santiago Bernabéu, benannt.",
                "Es hat eine Kapazität von über 81.000 Zuschauern.",
                "Das Bernabéu war Gastgeber von vier Endspielen des Europapokals/der Champions League.",
                "Es war der Austragungsort des legendären WM-Finales 1982 zwischen Italien und Deutschland.",
                "Die Stadion-Tour beinhaltet den Zugang zum Spielfeldrand und zur Präsidentenloge.",
                "Das Museum von Real Madrid im Stadion ist das am dritthäufigsten besuchte Museum Madrids.",
                "Aktuell durchläuft das Stadion einen massiven Umbau, der ihm ein futuristisches Aussehen verleihen wird.",
                "Es war das erste Stadion in Europa, das ein UEFA-5-Sterne-Zertifikat erhielt."
          ],
          "hu": [
                "A stadiont a Real Madrid egykori elnökér�?l, Santiago Bernabéuról nevezték el.",
                "Befogadóképessége több mint 81 000 néz�?.",
                "A Bernabéu négy Bajnokcsapatok Európa Kupája / Bajnokok Ligája dönt�?nek adott otthont.",
                "Itt rendezték az 1982-es labdarúgó-világbajnokság legendás, Olaszország és Németország közötti dönt�?jét.",
                "A stadiontúra magában foglalja a pálya szélére és az elnöki páholyba való belépést is.",
                "A stadionban található Real Madrid múzeum Madrid harmadik leglátogatottabb múzeuma.",
                "A stadion jelenleg masszív átépítés alatt áll, amely futurisztikus megjelenést kölcsönöz neki.",
                "Ez volt az els�? stadion Európában, amely megkapta az UEFA 5 csillagos min�?sítését."
          ],
          "ro": [
                "Stadionul este numit dup�? fostul pre�?edinte al lui Real Madrid, Santiago Bernabéu.",
                "Are o capacitate de peste 81.000 de spectatori.",
                "Bernabéu a g�?zduit patru finale ale Cupei Europene / Ligii Campionilor.",
                "A fost locul de desf�?�?urare al legendarei finale a Cupei Mondiale din 1982 dintre Italia �?i Germania.",
                "Turul stadionului include acces la marginea terenului �?i la loja preziden�?ial�?.",
                "Muzeul Real Madrid de pe stadion este al treilea cel mai vizitat muzeu din Madrid.",
                "�?n prezent, stadionul trece printr-o reconstruc�?ie masiv�? care îi va oferi un aspect futurist.",
                "A fost primul stadion din Europa care a primit o certificare de 5 stele UEFA."
          ],
          "en": [
                "The stadium is named after the former president of Real Madrid, Santiago Bernabéu.",
                "It has a seating capacity of over 81,000 spectators.",
                "The Bernabéu has hosted four European Cup/Champions League finals.",
                "It was the venue for the legendary 1982 World Cup final between Italy and West Germany.",
                "The stadium tour includes access to the edge of the pitch and the presidential box.",
                "The Real Madrid museum inside the stadium is the third most visited museum in Madrid.",
                "The stadium is currently undergoing a massive renovation that will give it a futuristic look.",
                "It was the first stadium in Europe to receive a UEFA 5-star certification."
          ]
    },
    image: "/geo-images/spain/santiago-bernab-u-stadium.webp",
    
  },
  {
    id: "es-camp-nou", type: "landmark", parent: "ES-CT", coords: [2.1228, 41.3809],
    name: {"de": "Camp Nou", "hu": "Camp Nou", "ro": "Camp Nou", "en": "Camp Nou"},
    
    description: {
          "de": "Das Camp Nou, majestätisch in Barcelona gelegen, ist das grö�?te Fu�?ballstadion Europas. Als stolzes Heimstadion des FC Barcelona ist es ein Ort voller Leidenschaft, katalanischer Identität und fu�?ballerischer Exzellenz. Das 1957 eingeweihte Stadion hat im Laufe der Jahrzehnte einige der talentiertesten Spieler der Fu�?ballgeschichte gesehen. Die Atmosphäre bei Spielen, besonders während des berühmten 'El Clásico' gegen Real Madrid, ist elektrisierend und weltweit bekannt. Das angeschlossene FC Barcelona Museum zieht jedes Jahr Millionen von Besuchern an und lässt die ruhmreiche Vereinsgeschichte lebendig werden.",
          "hu": "A barcelonai Camp Nou méltóságteljesen magasodik a város fölé, mint Európa legnagyobb futballstadionja. Az FC Barcelona büszke otthonaként a szenvedély, a katalán identitás és a futballkiválóság színhelye. Az 1957-ben felavatott stadion az évtizedek során a futballtörténelem legtehetségesebb játékosait látta játszani. A mérk�?zések hangulata, különösen a Real Madrid elleni híres 'El Clásico' alatt, felvillanyozó és világszerte ismert. A stadionhoz tartozó FC Barcelona Múzeum évente látogatók millióit vonzza, és megeleveníti a klub dics�?séges történelmét.",
          "ro": "Camp Nou, situat maiestuos în Barcelona, este cel mai mare stadion de fotbal din Europa. Fiind casa mândr�? a clubului FC Barcelona, este un loc plin de pasiune, identitate catalan�? �?i excelen�?�? fotbalistic�?. Inaugurat în 1957, stadionul a v�?zut de-a lungul deceniilor unii dintre cei mai talenta�?i juc�?tori din istoria fotbalului. Atmosfera de la meciuri, în special în timpul celebrului 'El Clásico' împotriva lui Real Madrid, este electrizant�? �?i cunoscut�? în întreaga lume. Muzeul FC Barcelona ata�?at atrage milioane de vizitatori în fiecare an �?i d�? via�?�? istoriei glorioase a clubului.",
          "en": "Camp Nou, majestically situated in Barcelona, is the largest football stadium in Europe. As the proud home stadium of FC Barcelona, it is a place full of passion, Catalan identity, and footballing excellence. Inaugurated in 1957, the stadium has seen some of the most talented players in football history over the decades. The atmosphere during matches, especially during the famous 'El Clásico' against Real Madrid, is electrifying and known worldwide. The attached FC Barcelona Museum attracts millions of visitors every year and brings the club's glorious history to life."
    }, descriptionAdvanced: { de: "", hu: "A barcelonai Camp Nou (�j P�lya) Eur�pa legnagyobb befogad�k�pess�g? futballstadionja �s az FC Barcelona b�szke otthona 1957 �ta. A hatalmas betonkatlan nemcsak egy sportl�tes�tm�ny, hanem a katal�n identit�s ('M�s que un club' - T�bb mint egy klub) egyik legfontosabb szimb�luma is. A stadion elk�peszt? atmoszf�r�val rendelkezik a fontos m�rk?z�sek, k�l�n�sen a Real Madrid elleni 'El Cl�sico' idej�n. Az �p�letben tal�lhat� a Barca M�zeum, amely bemutatja a klub gazdag t�rt�nelm�t, a megnyert tr�fe�kat �s a klub legend�s j�t�kosainak (mint Kubala, Cruyff vagy Messi) relikvi�it. A Camp Nou jelenleg nagyszab�s� fel�j�t�s alatt �ll, hogy egy teljesen fedett, modern komplexumm� v�ljon.", ro: "", en: "Camp Nou is the legendary home stadium of FC Barcelona, situated in the Les Corts district of Barcelona. Inaugurated in 1957, this monumental sporting venue serves as a temple of football and a symbol of Catalan culture and pride. Visitors can immerse themselves in the rich heritage of the club by exploring the expansive museum, walking through the players' tunnel, and stepping onto the iconic pitch. The stadium's immense scale and electrifying atmosphere on match days make it a pilgrimage site for sports enthusiasts worldwide. Beyond football, it has hosted major concerts and significant historical events over the decades." }, factsAdvanced: { de: [], hu: [
        "A Camp Nou befogad�k�pess�ge k�zel 100 000 f?, de a m�ltban, az �ll�helyek idej�n el?fordult, hogy 120 ezren is bef�rtek.",
        "A stadion avat� m�rk?z�s�n a Barcelona a Legia Warszawa ellen j�tszott, �s az els? g�lt a legend�s Eulogio Mart�nez szerezte.",
        "Az 1982-es spanyolorsz�gi vil�gbajnoks�g nyit�m�rk?z�s�t ebben a stadionban j�tszott�k.",
        "A stadion ter�let�n egy kis k�polna is tal�lhat�, ahol a j�t�kosok a m�rk?z�sek el?tt im�dkozhatnak."
      ], ro: [], en: [
        "Camp Nou officially opened on September 24, 1957.",
        "With a seating capacity of 99,354, it is the largest stadium in Europe.",
        "It hosted the 1989 and 1999 European Cup/Champions League finals.",
        "The FC Barcelona Museum attracts over 1.5 million visitors annually."
      ] },
    facts: {
          "de": [
                "Camp Nou hat eine beeindruckende Zuschauerkapazität von fast 100.000 Plätzen.",
                "Der Name 'Camp Nou' ist Katalanisch und bedeutet wörtlich übersetzt 'Neues Feld'.",
                "Das Stadion beherbergte das Eröffnungsspiel der Fu�?ball-Weltmeisterschaft 1982.",
                "Das Motto des FC Barcelona 'Més que un club' (Mehr als ein Verein) prangt gro�? auf den Tribünen.",
                "Das FC Barcelona Museum ist das meistbesuchte Museum in ganz Katalonien.",
                "1999 hielt Papst Johannes Paul II. auf dem Rasen des Camp Nou eine Messe ab.",
                "Die Stadiontour ermöglicht es den Besuchern, durch den Spielertunnel auf das Spielfeld zu gehen.",
                "Derzeit wird das Stadion unter dem Projekt 'Espai Barça' umfassend modernisiert und erweitert."
          ],
          "hu": [
                "A Camp Nou lenyűgöz�?, majdnem 100 000 f�?s befogadóképességgel rendelkezik.",
                "A 'Camp Nou' név katalán eredetű, szó szerinti fordításban '�?j Mez�?t' jelent.",
                "A stadion adott otthont az 1982-es labdarúgó-világbajnokság nyitómérk�?zésének.",
                "Az FC Barcelona mottója, a 'Més que un club' (Több mint egy klub) nagy betűkkel virít a lelátókon.",
                "Az FC Barcelona Múzeum a leglátogatottabb múzeum egész Katalóniában.",
                "1999-ben II. János Pál pápa misét tartott a Camp Nou gyepén.",
                "A stadiontúra lehet�?vé teszi a látogatók számára, hogy a játékoskijárón keresztül lépjenek a pályára.",
                "A stadiont jelenleg az 'Espai Barça' projekt keretében átfogóan korszerűsítik és b�?vítik."
          ],
          "ro": [
                "Camp Nou are o capacitate impresionant�? de aproape 100.000 de locuri.",
                "Numele 'Camp Nou' este catalan �?i se traduce literalmente ca 'Câmp Nou'.",
                "Stadionul a g�?zduit meciul de deschidere al Cupei Mondiale FIFA din 1982.",
                "Motto-ul FC Barcelona 'Més que un club' (Mai mult decât un club) este afi�?at cu litere mari pe tribune.",
                "Muzeul FC Barcelona este cel mai vizitat muzeu din toat�? Catalonia.",
                "�?n 1999, Papa Ioan Paul al II-lea a �?inut o slujb�? pe gazonul de la Camp Nou.",
                "Turul stadionului permite vizitatorilor s�? ias�? pe teren prin tunelul juc�?torilor.",
                "�?n prezent, stadionul este în curs de modernizare �?i extindere prin proiectul 'Espai Barça'."
          ],
          "en": [
                "Camp Nou has an impressive seating capacity of almost 100,000.",
                "The name 'Camp Nou' is Catalan and literally translates to 'New Field'.",
                "The stadium hosted the opening match of the 1982 FIFA World Cup.",
                "FC Barcelona's motto 'Més que un club' (More than a club) is prominently displayed on the stands.",
                "The FC Barcelona Museum is the most visited museum in all of Catalonia.",
                "In 1999, Pope John Paul II held a mass on the pitch of Camp Nou.",
                "The stadium tour allows visitors to walk onto the pitch through the players' tunnel.",
                "The stadium is currently undergoing comprehensive modernization and expansion under the 'Espai Barça' project."
          ]
    },
    image: "/geo-images/spain/camp-nou.webp",
    
  },
  {
    id: "es-ibiza", type: "landmark", parent: "ES-IB", coords: [1.4322, 38.9067],
    name: {"de": "Ibiza", "hu": "Ibiza", "ro": "Ibiza", "en": "Ibiza"},
    
    description: {
          "de": "Ibiza, eine der Baleareninseln im Mittelmeer, ist weltweit als die unangefochtene Hauptstadt der elektronischen Tanzmusik und des Nachtlebens bekannt. In den Sommermonaten pilgern renommierte DJs und Partyurlauber aus aller Welt auf die Insel, um in den legendären Clubs zu feiern. Doch Ibiza ist viel mehr als nur eine Partyhochburg. Die Insel besticht durch ihre idyllischen, versteckten Buchten, kristallklares Wasser und entspannte Hippie-Märkte. Die historische Altstadt von Ibiza-Stadt, Dalt Vila, ist ein faszinierendes UNESCO-Weltkulturerbe. Ibiza vereint perfekt pulsierendes Nachtleben mit ruhiger, mediterraner Naturschönheit.",
          "hu": "Ibiza, a Földközi-tenger egyik Baleár-szigete, világszerte az elektronikus tánczene és az éjszakai élet vitathatatlan f�?városaként ismert. A nyári hónapokban neves DJ-k és bulizni vágyók zarándokolnak a szigetre a világ minden tájáról, hogy a legendás klubokban ünnepeljenek. Ibiza azonban sokkal több, mint egy buliközpont. A sziget idilli, rejtett öblökkel, kristálytiszta vízzel és nyugodt hippi piacokkal varázsolja el a látogatókat. Ibiza városának történelmi óvárosa, a Dalt Vila lenyűgöz�? UNESCO világörökség. Ibiza tökéletesen ötvözi a pezsg�? éjszakai életet a nyugodt, mediterrán természeti szépségekkel.",
          "ro": "Ibiza, una dintre insulele Baleare din Marea Mediteran�?, este cunoscut�? la nivel mondial ca fiind capitala incontestabil�? a muzicii dance electronice �?i a vie�?ii de noapte. �?n lunile de var�?, DJ renumi�?i �?i petrec�?re�?i din întreaga lume fac un pelerinaj pe insul�? pentru a petrece în cluburile legendare. Cu toate acestea, Ibiza este mult mai mult decât o fort�?rea�?�? a petrecerilor. Insula captiveaz�? prin golfurile sale idilice �?i ascunse, apa cristalin�? �?i pie�?ele hippie relaxate. Ora�?ul vechi istoric din Ibiza, Dalt Vila, este un fascinant sit al Patrimoniului Mondial UNESCO. Ibiza combin�? perfect via�?a de noapte vibrant�? cu frumuse�?ea natural�? calm�?, mediteranean�?.",
          "en": "Ibiza, one of the Balearic Islands in the Mediterranean, is known worldwide as the undisputed capital of electronic dance music and nightlife. During the summer months, renowned DJs and partygoers from all over the world make a pilgrimage to the island to celebrate in its legendary clubs. Yet Ibiza is much more than just a party stronghold. The island captivates with its idyllic, hidden coves, crystal-clear waters, and relaxed hippie markets. The historic old town of Ibiza Town, Dalt Vila, is a fascinating UNESCO World Heritage site. Ibiza perfectly combines vibrant nightlife with tranquil Mediterranean natural beauty."
    }, descriptionAdvanced: { de: "", hu: "Ibiza a F�ldk�zi-tenger egyik legismertebb szigete, amely glob�lisan h�rhedt a f�ktelen �jszakai �let�r?l �s az elektronikus t�nczenei klubjair�l. Ugyanakkor a sziget sokkal t�bbet k�n�l a buliz�sn�l: gy�ny�r?, eldugott t�rkizk�k �bl�k, feny?erd?kkel bor�tott dombok �s er?s kultur�lis �r�ks�g is jellemzi. Az 1960-as �vekben Ibiza a hippik mened�k�v� v�lt, �s ez a laza, boh�m atmoszf�ra a mai napig �rezhet? a sziget �szaki piacain �s falvaiban. A f?v�ros t�rt�nelmi k�zpontj�t, a Dalt Vil�t vastag renesz�nsz falak veszik k�r�l, amelyeket a kal�zok ellen �p�tettek, ?i ma UNESCO Vil�g�r�ks�g. A sziget leny?g�z? biodiverzit�s�val �s a h�res Posidonia tengerif?-r�tekkel is b�szk�lkedhet.", ro: "", en: "Ibiza is an iconic island in the Mediterranean Sea, forming part of the Balearic archipelago off the eastern coast of Spain. While globally renowned for its vibrant nightlife and electronic dance music club scene, the island also harbors a deeply traditional and tranquil side. Its rugged coastline features pristine coves, pine-clad hills, and hidden sandy beaches washed by crystal-clear waters. The historic core of Ibiza Town, known as Dalt Vila, is a beautifully preserved Renaissance fortress that offers a glimpse into the island's ancient past. Ibiza balances its reputation as a party capital with its status as a haven for yoga retreats and bohemian culture." }, factsAdvanced: { de: [], hu: [
        "Ibiza �v�ros�nak (Dalt Vila) falai a vil�g legjobb �llapotban fennmaradt renesz�nsz tengerparti er?d�tm�nyei k�z� tartoznak.",
        "A szigeten nincsenek ?shonos, emberre vesz�lyes m�rges �llatok, p�ld�ul k�gy�k vagy skorpi�k.",
        "A sziget melletti Posidonia oceanica (neptunf?) mez?k felel?sek az itteni v�z krist�lytiszta �s k�l�nleges t�rkiz sz�n��rt.",
        "Az Es Vedr� sziklasziget a legenda szerint a harmadik legm�gnesesebb pont a F�ld�n, �s sokan mitikus er?t tulajdon�tanak neki."
      ], ro: [], en: [
        "Ibiza was inscribed as a UNESCO World Heritage site in 1999 for its biodiversity and culture.",
        "The island covers an area of approximately 572 square kilometers.",
        "Phoenician settlers founded the port in 654 BC, originally naming it Ibossim.",
        "Es Vedr�, a rocky limestone island off the west coast, stands 413 meters high."
      ] },
    facts: {
          "de": [
                "Ibiza wird wegen ihrer wei�?en Architektur oft die 'Wei�?e Insel' (Isla Blanca) genannt.",
                "Die Insel verfügt über einige der berühmtesten Superclubs der Welt wie Pacha, Amnesia und Ushuaïa.",
                "Ibiza war in den 1960er und 70er Jahren ein wichtiges Ziel der Hippie-Bewegung.",
                "Der Hippie-Markt von Punta Arabí ist einer der grö�?ten und ältesten der Insel.",
                "Nahe Ibiza liegt die unbewohnte Felseninsel Es Vedrà, die viele Mythen und Legenden umgeben.",
                "Die Inselregierung legt gro�?en Wert auf den Erhalt der geschützten Seegraswiesen (Posidonia).",
                "Neben Party bietet Ibiza zahlreiche ruhige Strände wie Cala Salada und Cala Comte.",
                "Café del Mar in San Antonio ist weltbekannt für chillige Musik zum Sonnenuntergang."
          ],
          "hu": [
                "Ibizát fehér építészete miatt gyakran 'Fehér Szigetnek' (Isla Blanca) is nevezik.",
                "A szigeten olyan világhírű szuperklubok találhatók, mint a Pacha, az Amnesia és az Ushuaïa.",
                "Ibiza a 60-as és 70-es években a hippimozgalom egyik legfontosabb célpontja volt.",
                "A Punta Arabí hippipiac a sziget egyik legnagyobb és legrégebbi piaca.",
                "Ibiza közelében fekszik a lakatlan Es Vedrà sziklasziget, amelyet számos mítosz és legenda övez.",
                "A szigeti önkormányzat nagy hangsúlyt fektet a védett tengerifűrétek (Posidonia) meg�?rzésére.",
                "A bulik mellett Ibiza számos csendes strandot is kínál, mint a Cala Salada és a Cala Comte.",
                "A San Antonió-i Café del Mar világszerte ismert a naplementéhez játszott chill-out zenéjér�?l."
          ],
          "ro": [
                "Ibiza este adesea numit�? 'Insula Alb�?' (Isla Blanca) datorit�? arhitecturii sale albe.",
                "Insula are unele dintre cele mai faimoase supercluburi din lume, cum ar fi Pacha, Amnesia �?i Ushuaïa.",
                "Ibiza a fost o destina�?ie important�? a mi�?c�?rii hippie în anii '60 �?i '70.",
                "Pia�?a hippie de la Punta Arabí este una dintre cele mai mari �?i mai vechi de pe insul�?.",
                "Lâng�? Ibiza se afl�? insula stâncoas�? nelocuit�? Es Vedrà, înconjurat�? de multe mituri �?i legende.",
                "Guvernul insulei acord�? o mare importan�?�? conserv�?rii paji�?tilor protejate cu iarb�? de mare (Posidonia).",
                "Pe lâng�? petreceri, Ibiza ofer�? numeroase plaje lini�?tite precum Cala Salada �?i Cala Comte.",
                "Café del Mar din San Antonio este cunoscut în întreaga lume pentru muzica chill-out la apus."
          ],
          "en": [
                "Ibiza is often called the 'White Island' (Isla Blanca) because of its white architecture.",
                "The island boasts some of the most famous superclubs in the world, such as Pacha, Amnesia, and Ushuaïa.",
                "Ibiza was a major destination for the hippie movement in the 1960s and 70s.",
                "The hippie market of Punta Arabí is one of the largest and oldest on the island.",
                "Near Ibiza lies the uninhabited rocky island of Es Vedrà, surrounded by many myths and legends.",
                "The island's government places great importance on preserving the protected seagrass meadows (Posidonia).",
                "Besides partying, Ibiza offers numerous quiet beaches like Cala Salada and Cala Comte.",
                "Café del Mar in San Antonio is world-renowned for chill-out music at sunset."
          ]
    },
    image: "/geo-images/spain/ibiza.webp",
    
  },
  {
    id: "es-mallorca", type: "landmark", parent: "ES-IB", coords: [2.9862, 39.6151],
    name: {"de": "Mallorca", "hu": "Mallorca", "ro": "Mallorca", "en": "Mallorca"},
    
    description: {
          "de": "Mallorca ist die grö�?te der Baleareninseln und ein unbestrittenes Juwel im Mittelmeer. Sie lockt jährlich Millionen von Urlaubern mit ihrer beeindruckenden landschaftlichen Vielfalt. Während der Süden mit lebhaften Stränden und der dynamischen Hauptstadt Palma aufwartet, besticht der Nordwesten durch die wilde, zerklüftete Gebirgskette der Serra de Tramuntana. Hier finden sich malerische Bergdörfer wie Valldemossa und Deià. Mallorca bietet perfekte Bedingungen für Radfahrer, Wanderer und Naturliebhaber. Abseits der belebten Küstenorte findet man unberührte Natur, idyllische Mandelhaine und eine ruhige, authentische mallorquinische Lebensart.",
          "hu": "Mallorca a Baleár-szigetek legnagyobbika, és a Földközi-tenger vitathatatlan ékköve. Lenyűgöz�? táji sokszínűségével évente turisták millióit vonzza. Míg a déli rész nyüzsg�? strandokkal és a dinamikus Palma f�?várossal büszkélkedhet, addig az északnyugati oldalt a Serra de Tramuntana vad, csipkézett hegylánca uralja. Itt fest�?i hegyi falvak találhatók, mint Valldemossa és Deià. Mallorca tökéletes feltételeket kínál a kerékpárosok, túrázók és természetbarátok számára. A nyüzsg�? tengerparti üdül�?helyekt�?l távol érintetlen természet, idilli mandulaligetek és nyugodt, autentikus mallorcai életmód várja a látogatókat.",
          "ro": "Mallorca este cea mai mare dintre insulele Baleare �?i o bijuterie incontestabil�? a M�?rii Mediterane. Atrage milioane de turi�?ti anual cu diversitatea sa pitoreasc�? impresionant�?. �?n timp ce sudul se mândre�?te cu plaje pline de via�?�? �?i capitala dinamic�? Palma, nord-vestul este dominat de lan�?ul muntos s�?lbatic �?i accidentat Serra de Tramuntana. Aici ve�?i g�?si sate de munte pitore�?ti precum Valldemossa �?i Deià. Mallorca ofer�? condi�?ii perfecte pentru bicicli�?ti, excursioni�?ti �?i iubitori de natur�?. Departe de sta�?iunile de coast�? aglomerate, ve�?i g�?si natur�? neatins�?, livezi idilice de migdali �?i un mod de via�?�? lini�?tit, autentic mallorcan.",
          "en": "Mallorca is the largest of the Balearic Islands and an undisputed jewel in the Mediterranean. It attracts millions of holidaymakers annually with its impressive scenic diversity. While the south boasts lively beaches and the dynamic capital Palma, the northwest is characterized by the wild, rugged mountain range of the Serra de Tramuntana. Here you will find picturesque mountain villages like Valldemossa and Deià. Mallorca offers perfect conditions for cyclists, hikers, and nature lovers. Away from the busy coastal resorts, you will find untouched nature, idyllic almond groves, and a tranquil, authentic Mallorcan way of life."
    }, descriptionAdvanced: { de: "", hu: "Mallorca a Bale�r-szigetek legnagyobb �s legv�ltozatosabb tagja, amely �vente turist�k milli�it vonzza csod�latos strandjaival �s fest?i t�jaival. A sziget �szaki r�sz�n h�z�d� Serra de Tramuntana hegys�g dr�mai sziklafalakat, kanyarg�s hegyi utakat �s eldugott, k?b?l �p�lt falvakat (mint Valldemossa �s Dei�) rejt. A f?v�ros, Palma de Mallorca gazdag t�rt�nelmi �r�ks�ggel rendelkezik, melynek �kk�ve a hatalmas, tengerparti La Seu g�tikus katedr�lis. B�r a sziget egyes r�szei a t�megturizmusr�l ismertek, a bels? ter�leteken ?si mandula- �s olajfaligetek, sz?l?birtokok �s hagyom�nyos 'finc�k' ?rzik az autentikus mallorcai �let�rz�st. A sziget kiv�l� ker�kp�ros �s t�r�z�si c�lpont is a h?v�sebb h�napokban.", ro: "", en: "Mallorca is the largest of Spain's Balearic Islands, offering a diverse landscape that ranges from dramatic mountain peaks to idyllic coastal shores. The island is dominated by the Serra de Tramuntana, a rugged mountain range that stretches along the northwest coast and provides spectacular hiking routes. Palma, the vibrant capital city, features the awe-inspiring Santa Mar�a cathedral and a charming historic center filled with narrow alleys and traditional courtyards. Mallorca has long been a favored retreat for artists, writers, and royalty, drawn by its mild Mediterranean climate and picturesque scenery. Visitors can explore ancient Roman ruins, Moorish bathhouses, and serene olive groves scattered across the island." }, factsAdvanced: { de: [], hu: [
        "A La Seu katedr�lis �lom�veg r�zsaablaka (az 'Oculus') t�bb mint 12 m�ter �tm�r?j?, �gy a vil�g egyik legnagyobbja.",
        "Mallorca h�res a hagyom�nyos 'ensaimada' nev? s�tem�ny�r?l, amelyet sert�szs�rral k�sz�tenek �s gyakran porcukorral sz�rnak meg.",
        "A Drach-barlangrendszerben (Cuevas del Drach) tal�lhat� a Martel-t�, amely Eur�pa egyik legnagyobb f�ldalatti tava.",
        "Fr�d�ric Chopin �s George Sand egy h�res �s viharos telet t�lt�ttek a valldemossai karthauzi kolostorban 1838-ban."
      ], ro: [], en: [
        "The Serra de Tramuntana was declared a UNESCO World Heritage Site in 2011.",
        "Palma Cathedral, known as La Seu, features a nave that is 44 meters tall.",
        "Mallorca spans an area of 3,640 square kilometers.",
        "Composer Fr�d�ric Chopin and writer George Sand famously wintered in Valldemossa in 1838."
      ] },
    facts: {
          "de": [
                "Das Gebirge Serra de Tramuntana wurde von der UNESCO zum Weltnaturerbe erklärt.",
                "Mallorca ist weltberühmt für die Herstellung hochwertiger künstlicher Perlen.",
                "Frédéric Chopin verbrachte einen berühmten Winter im Kartäuserkloster von Valldemossa.",
                "Die Tropfsteinhöhlen Cuevas del Drach in Porto Cristo beherbergen einen der grö�?ten unterirdischen Seen der Welt.",
                "Der rote Zug 'Roter Blitz' verbindet seit 1912 Palma spektakulär mit Sóller.",
                "Die traditionelle mallorquinische Wurst Sobrasada ist ein lokales kulinarisches Highlight.",
                "Das Cap de Formentor bietet dramatische Steilklippen am nördlichsten Punkt der Insel.",
                "Im Frühjahr lockt die berühmte Mandelblüte Tausende von Touristen auf die Insel."
          ],
          "hu": [
                "A Serra de Tramuntana hegységet az UNESCO a világörökség részévé nyilvánította.",
                "Mallorca világhírű a kiváló min�?ségű mesterséges gyöngyök gyártásáról.",
                "Frédéric Chopin egy híres telet töltött a valldemossai karthauzi kolostorban.",
                "A Porto Cristo-i Cuevas del Drach cseppk�?barlangban található a világ egyik legnagyobb földalatti tava.",
                "A 'Vörös Villám' (Roter Blitz) nevű piros vonat 1912 óta köti össze látványosan Palmát Sóllerrel.",
                "A hagyományos mallorcai Sobrasada kolbász egy helyi kulináris különlegesség.",
                "A Cap de Formentor drámai sziklafalakat kínál a sziget legészakibb pontján.",
                "Tavasszal a híres mandulavirágzás turisták ezreit vonzza a szigetre."
          ],
          "ro": [
                "Lan�?ul muntos Serra de Tramuntana a fost declarat Patrimoniu Natural Mondial de c�?tre UNESCO.",
                "Mallorca este renumit�? în întreaga lume pentru produc�?ia de perle artificiale de înalt�? calitate.",
                "Frédéric Chopin a petrecut o iarn�? faimoas�? la m�?n�?stirea cartuzian�? din Valldemossa.",
                "Pe�?terile cu stalactite Cuevas del Drach din Porto Cristo g�?zduiesc unul dintre cele mai mari lacuri subterane din lume.",
                "Trenul ro�?u 'Fulgerul Ro�?u' conecteaz�? spectaculos Palma cu Sóller din 1912.",
                "Cârnatul tradi�?ional mallorcan Sobrasada este o atrac�?ie culinar�? local�?.",
                "Cap de Formentor ofer�? stânci dramatice în cel mai nordic punct al insulei.",
                "Prim�?vara, faimo�?ii migdali înflori�?i atrag mii de turi�?ti pe insul�?."
          ],
          "en": [
                "The Serra de Tramuntana mountain range has been declared a World Natural Heritage site by UNESCO.",
                "Mallorca is world-famous for the production of high-quality artificial pearls.",
                "Frédéric Chopin spent a famous winter at the Carthusian monastery in Valldemossa.",
                "The Cuevas del Drach dripstone caves in Porto Cristo house one of the largest underground lakes in the world.",
                "The red train 'Red Lightning' has spectacularly connected Palma with Sóller since 1912.",
                "The traditional Mallorcan sausage Sobrasada is a local culinary highlight.",
                "Cap de Formentor offers dramatic cliffs at the northernmost point of the island.",
                "In spring, the famous almond blossom attracts thousands of tourists to the island."
          ]
    },
    image: "/geo-images/spain/mallorca.webp",
    
  },
  {
    id: "es-tenerife", type: "landmark", parent: "ES-CN", coords: [-16.6291, 28.2916],
    name: {"de": "Teneriffa", "hu": "Tenerife", "ro": "Tenerife", "en": "Tenerife"},
    
    description: {
          "de": "Teneriffa ist die grö�?te und bevölkerungsreichste der Kanarischen Inseln und liegt majestätisch im Atlantischen Ozean vor der Küste Afrikas. Sie wird oft als 'Insel des ewigen Frühlings' bezeichnet und bietet das ganze Jahr über ein perfektes Klima. Teneriffas Landschaft ist von starken Kontrasten geprägt: vom feuchteren, grünen Norden mit seinen alten Lorbeerwäldern bis zum trockenen, sonnigen Süden, der Badegäste anzieht. In der Mitte thront der gewaltige Vulkan Pico del Teide, Spaniens höchster Berg. Die Insel bietet zudem wunderschöne koloniale Architektur in Orten wie La Laguna und La Orotava.",
          "hu": "Tenerife a Kanári-szigetek legnagyobb és legnépesebb tagja, amely méltóságteljesen fekszik az Atlanti-óceánban, Afrika partjainál. Gyakran az 'örök tavasz szigetének' is nevezik, mivel egész évben tökéletes éghajlatot kínál. Tenerife táját éles kontrasztok jellemzik: a nedvesebb, zöldebb északi rész �?si babérerd�?it�?l a száraz, napos déli részig, amely a fürd�?z�?ket vonzza. Középen magasodik a hatalmas Pico del Teide vulkán, Spanyolország legmagasabb hegye. A sziget emellett gyönyörű gyarmati építészetet is kínál olyan városokban, mint La Laguna és La Orotava.",
          "ro": "Tenerife este cea mai mare �?i mai populat�? dintre Insulele Canare, situat�? maiestuos în Oceanul Atlantic în largul coastei Africii. Este adesea numit�? 'Insula prim�?verii ve�?nice', oferind o clim�? perfect�? pe tot parcursul anului. Peisajul din Tenerife se caracterizeaz�? prin contraste puternice: de la nordul mai umed �?i verde cu p�?durile sale de lauri str�?vechi, pân�? la sudul uscat �?i însorit care atrage sc�?ld�?torii. �?n centru troneaz�? uria�?ul vulcan Pico del Teide, cel mai înalt munte din Spania. Insula ofer�?, de asemenea, arhitectur�? colonial�? frumoas�? în ora�?e precum La Laguna �?i La Orotava.",
          "en": "Tenerife is the largest and most populous of the Canary Islands, lying majestically in the Atlantic Ocean off the coast of Africa. It is often called the 'Island of Eternal Spring', offering a perfect climate all year round. Tenerife's landscape is characterized by stark contrasts: from the wetter, green north with its ancient laurel forests to the dry, sunny south that attracts beachgoers. In the center towers the massive Pico del Teide volcano, Spain's highest mountain. The island also offers beautiful colonial architecture in towns such as La Laguna and La Orotava."
    }, descriptionAdvanced: { de: "", hu: "Tenerife a Kan�ri-szigetek legnagyobb �s legn�pesebb szigete, amelyet a leny?g�z? f�ldrajzi soksz�n?s�g �s az '�r�k tavasz' �ghajlata jellemez. A sziget k�zep�n magasodik a Teide, Spanyolorsz�g legmagasabb hegye, egy massz�v, alv� vulk�n, amely holdb�li nemzeti parkj�val az UNESCO Vil�g�r�ks�g r�sze. M�g Tenerife naps�t�tte �s sz�raz d�li partvid�k�n ny�zsg? �d�l?helyek �s hossz� homokos strandok tal�lhat�k, az �szaki r�sz z�ldell? v�lgyeket, ?si bab�rerd?ket (Anaga-hegys�g) �s t�rt�nelmi gyarmati v�rosokat (mint La Laguna �s La Orotava) rejt. A sziget kultur�lis f�nypontja a Santa Cruz-i karnev�l, amely a ri�i ut�n a m�sodik legh�resebb �s legpomp�sabb a vil�gon.", ro: "", en: "Tenerife is the largest and most populated island of the Canary Islands, situated in the Atlantic Ocean off the coast of North Africa. The island's dramatic topography is defined by Mount Teide, a colossal dormant volcano that stands as the highest peak in Spain. Tenerife boasts an incredible variety of microclimates and landscapes, from the lush, ancient laurel forests of the Anaga mountains to the sun-drenched beaches of the southern coast. The island's annual Carnival of Santa Cruz de Tenerife is one of the largest and most vibrant in the world, showcasing a rich cultural blend. Its unique geography makes it a premier destination for hiking, stargazing, and watersports." }, factsAdvanced: { de: [], hu: [
        "Tenerife z�szlaja �s c�mere is �br�zolja a sziget v�d?szentj�t, a Candelariai Sz?zany�t (Virgen de Candelaria).",
        "Az Anaga-hegys�g erdei (laurisilva) az �vmilli�kkal ezel?tti, harmadid?szaki szubtr�pusi erd?k �l? k�v�letei.",
        "A sziget fekete homokos strandjai, mint a Playa Jard�n, a sziget intenz�v vulkanikus m�ltj�nak eredm�nyei.",
        "Tenerif�n tal�lhat� a vil�g egyik legfejlettebb napobszervat�riuma, mivel a l�gk�r itt rendk�v�l stabil �s tiszta."
      ], ro: [], en: [
        "Mount Teide has an elevation of 3,715 meters above sea level.",
        "Teide National Park was named a UNESCO World Heritage Site in 2007.",
        "Tenerife is home to the Pyramids of G��mar, six step pyramids of debated origin.",
        "The island's Carnival of Santa Cruz is widely considered the second most popular in the world."
      ] },
    facts: {
          "de": [
                "Der Pico del Teide ist mit 3.715 Metern der höchste Berg Spaniens.",
                "Teneriffa beheimatet zwei UNESCO-Weltkulturerbestätten: den Teide-Nationalpark und die Stadt San Cristóbal de La Laguna.",
                "Der Loro Parque im Norden der Insel ist einer der bekanntesten und grö�?ten Tierparks der Welt.",
                "Die Insel ist berühmt für ihren farbenprächtigen Karneval in Santa Cruz, der zweitgrö�?te nach Rio de Janeiro.",
                "Teneriffa hat schwarze Sandstrände vulkanischen Ursprungs und wei�?e Strände aus Sahara-Sand.",
                "Die endemische Kanarische Kiefer prägt weite Teile der bewaldeten Inselgebiete.",
                "Im Meer zwischen Teneriffa und La Gomera kann man das ganze Jahr über Wale und Delfine beobachten.",
                "Die Insel verfügt über ein erstklassiges Observatorium (Observatorio del Teide) aufgrund des klaren Sternenhimmels."
          ],
          "hu": [
                "A Pico del Teide a maga 3715 méterével Spanyolország legmagasabb hegye.",
                "Tenerife két UNESCO világörökségi helyszínnek ad otthont: a Teide Nemzeti Parknak és San Cristóbal de La Laguna városának.",
                "A sziget északi részén található Loro Parque a világ egyik legismertebb és legnagyobb állatparkja.",
                "A sziget híres a színpompás Santa Cruz-i karneválról, amely a második legnagyobb Rio de Janeiro után.",
                "Tenerifének vannak vulkanikus eredetű fekete homokos strandjai, és szaharai homokból álló fehér strandjai is.",
                "Az endemikus kanári feny�? a fás szigetterületek nagy részét meghatározza.",
                "A Tenerife és La Gomera közötti tengeren egész évben megfigyelhet�?k bálnák és delfinek.",
                "A sziget kiváló csillagvizsgálóval (Observatorio del Teide) rendelkezik a tiszta éjszakai égbolt miatt."
          ],
          "ro": [
                "La 3.715 metri, Pico del Teide este cel mai înalt munte din Spania.",
                "Tenerife g�?zduie�?te dou�? situri ale Patrimoniului Mondial UNESCO: Parcul Na�?ional Teide �?i ora�?ul San Cristóbal de La Laguna.",
                "Loro Parque, din nordul insulei, este una dintre cele mai cunoscute �?i mai mari gr�?dini zoologice din lume.",
                "Insula este faimoas�? pentru carnavalul s�?u colorat din Santa Cruz, al doilea ca m�?rime dup�? Rio de Janeiro.",
                "Tenerife are plaje cu nisip negru de origine vulcanic�? �?i plaje albe cu nisip saharian.",
                "Pinul endemic canarian modeleaz�? mari p�?r�?i din zonele împ�?durite ale insulei.",
                "�?n oceanul dintre Tenerife �?i La Gomera pot fi observate balene �?i delfini pe tot parcursul anului.",
                "Insula are un observator astronomic de prim�? clas�? (Observatorio del Teide) datorit�? cerului s�?u instelat clar."
          ],
          "en": [
                "At 3,715 meters, the Pico del Teide is the highest mountain in Spain.",
                "Tenerife is home to two UNESCO World Heritage sites: Teide National Park and the city of San Cristóbal de La Laguna.",
                "Loro Parque in the north of the island is one of the most famous and largest animal parks in the world.",
                "The island is famous for its colorful carnival in Santa Cruz, the second largest after Rio de Janeiro.",
                "Tenerife has black sand beaches of volcanic origin and white beaches made of Saharan sand.",
                "The endemic Canary Island pine shapes large parts of the forested island areas.",
                "In the ocean between Tenerife and La Gomera, whales and dolphins can be observed all year round.",
                "The island has a first-class observatory (Observatorio del Teide) due to its clear starry skies."
          ]
    },
    image: "/geo-images/spain/tenerife.webp",
    
  },
  {
    id: "es-gran-canaria", type: "landmark", parent: "ES-CN", coords: [-15.5997, 27.9202],
    name: {"de": "Gran Canaria", "hu": "Gran Canaria", "ro": "Gran Canaria", "en": "Gran Canaria"},
    
    description: {
          "de": "Gran Canaria, die drittgrö�?te der Kanarischen Inseln, wird oft als 'Miniaturkontinent' bezeichnet. Grund dafür ist ihre unglaubliche klimatische und landschaftliche Vielfalt auf vergleichsweise kleinem Raum. Die Insel bietet alles: von saftig grünen Tälern und tiefen Schluchten im Landesinneren über ausgedehnte Pinienwälder bis hin zu spektakulären Wüstenlandschaften wie den berühmten Sanddünen von Maspalomas im Süden. Die lebhafte Hauptstadt Las Palmas de Gran Canaria besticht durch ihre wunderschöne koloniale Altstadt (Vegueta). Gran Canaria ist ein Paradies für Sonnenanbeter, Surfer und Wanderer gleicherma�?en.",
          "hu": "Gran Canariát, a Kanári-szigetek harmadik legnagyobbikát gyakran 'miniatűr kontinensnek' is nevezik. Ennek oka a viszonylag kis területen tapasztalható hihetetlen éghajlati és táji sokszínűség. A sziget mindent kínál: a buja zöld völgyekt�?l és a szárazföld belsejében lév�? mély szurdokoktól kezdve a kiterjedt feny�?erd�?kön át a látványos sivatagi tájakig, mint a híres maspalomasi homokdűnék délen. A nyüzsg�? f�?város, Las Palmas de Gran Canaria gyönyörű gyarmati óvárosával (Vegueta) bűvöl el. Gran Canaria a napimádók, a szörfösök és a túrázók paradicsoma egyaránt.",
          "ro": "Gran Canaria, a treia ca m�?rime dintre Insulele Canare, este adesea numit�? 'continent în miniatur�?'. Motivul pentru aceasta este incredibila sa diversitate climatic�? �?i peisagistic�? într-un spa�?iu relativ mic. Insula ofer�? de toate: de la v�?i verzi luxuriante �?i defileuri adânci în interior, la p�?duri extinse de pini �?i peisaje de�?ertice spectaculoase, cum ar fi faimoasele dune de nisip din Maspalomas în sud. Capitala plin�? de via�?�?, Las Palmas de Gran Canaria, captiveaz�? cu frumosul s�?u ora�? vechi colonial (Vegueta). Gran Canaria este un paradis pentru iubitorii de soare, surferi �?i excursioni�?ti deopotriv�?.",
          "en": "Gran Canaria, the third largest of the Canary Islands, is often referred to as a 'miniature continent'. The reason for this is its incredible climatic and scenic diversity in a relatively small area. The island offers everything: from lush green valleys and deep ravines in the interior, to extensive pine forests, to spectacular desert landscapes like the famous sand dunes of Maspalomas in the south. The lively capital Las Palmas de Gran Canaria captivates with its beautiful colonial old town (Vegueta). Gran Canaria is a paradise for sun worshipers, surfers, and hikers alike."
    }, descriptionAdvanced: { de: "", hu: "Gran Canaria-t gyakran 'miniat?r kontinensnek' is nevezik, mivel a sziget viszonylag kis ter�let�n elk�peszt? klimatikus �s f�ldrajzi v�ltozatoss�got mutat. A sziget d�li cs�csk�n a Maspalomas h�res sivatagi homokd?n�i a Szahar�t id�zik, �s k�zvetlen�l a meleg viz? �ce�nba futnak. Ezzel �les kontrasztban �ll a sziget hegyvid�ki �s z�ldell? k�z�ps? r�sze, ahol a Roque Nublo (Felh?-szikla) vulkanikus bazaltmonolitja magasodik. A f?v�ros, Las Palmas egy kozmopolita, vibr�l� spanyol nagyv�ros leny?g�z? gyarmati �v�rossal (Vegueta), ahol m�g Kolumbusz Krist�f is meg�llt amerikai �tja el?tt. A sziget eg�sz �vben ide�lis c�lpont t�r�z�knak, v�zisport-kedvel?knek �s strandol�knak egyar�nt.", ro: "", en: "Gran Canaria is often described as a 'miniature continent' due to the extraordinary variety of its landscapes and microclimates. Located in the heart of the Canary Islands archipelago, it features towering central mountains, deep ravines, and expansive coastal dunes. The mesmerizing Maspalomas Dunes in the south offer a striking contrast to the verdant pine forests and traditional villages found in the island's elevated interior. The capital, Las Palmas de Gran Canaria, is a cosmopolitan city with a rich colonial history, highlighted by the historic Vegueta district. Gran Canaria provides a perfect blend of beach resort relaxation, cultural exploration, and adventurous outdoor activities." }, factsAdvanced: { de: [], hu: [
        "A Maspalomas d?n�k egy szigor�an v�dett term�szetv�delmi ter�let, amelynek homokja nem a Szahar�b�l, hanem kagyl�t�red�kekb?l sz�rmazik.",
        "A sziget ?slakosai a guancsok voltak, akik barlangokban �ltek; hagyat�kuk ma is megtekinthet? a Cueva Pintada r�g�szeti parkban.",
        "A Roque Nublo 80 m�ter magas bazaltt�mbje az ?slakosok egyik legszentebb �s legink�bb tisztelt kultikus helye volt.",
        "A Las Palmas-i Playa de las Canteras-t gyakran tartj�k Spanyolorsz�g, s?t Eur�pa egyik legjobb v�rosi strandj�nak."
      ], ro: [], en: [
        "The Maspalomas Dunes have been protected as a nature reserve since 1987.",
        "Roque Nublo, an iconic volcanic rock formation, stands 80 meters tall at an elevation of 1,813 meters.",
        "Christopher Columbus anchored in Las Palmas in 1492 before his first transatlantic voyage.",
        "Nearly half of the island's territory is designated as a UNESCO Biosphere Reserve."
      ] },
    facts: {
          "de": [
                "Der Roque Nublo ist mit 1.813 Metern das markante vulkanische Wahrzeichen im Zentrum der Insel.",
                "Die Insel wurde 2005 von der UNESCO zum Biosphärenreservat erklärt.",
                "Las Palmas de Gran Canaria ist, neben Santa Cruz de Tenerife, eine der beiden Hauptstädte der Kanaren.",
                "Die Dünen von Maspalomas wandern ständig und verändern ihre Form durch den Wind.",
                "Gran Canaria ist bekannt für den Anbau von Bananen, Tomaten und sogar Kaffee.",
                "Der Risco Caído und die heiligen Berge von Gran Canaria sind UNESCO-Weltkulturerbe.",
                "Die Insel war eine wichtige Zwischenstation für Christoph Kolumbus auf seinen Reisen nach Amerika.",
                "Im charmanten Fischerdorf Puerto de Mogán wird aufgrund seiner Kanäle auch vom 'Klein-Venedig' gesprochen."
          ],
          "hu": [
                "A Roque Nublo a maga 1813 méterével a sziget központjának jellegzetes vulkanikus szimbóluma.",
                "A szigetet 2005-ben az UNESCO bioszféra-rezervátummá nyilvánította.",
                "Las Palmas de Gran Canaria, Santa Cruz de Tenerife mellett, a Kanári-szigetek két f�?városának egyike.",
                "A maspalomasi dűnék a szél miatt folyamatosan vándorolnak és változtatják az alakjukat.",
                "Gran Canaria ismert a banán-, a paradicsom- és még a kávétermesztésr�?l is.",
                "A Risco Caído és Gran Canaria szent hegyei az UNESCO világörökség részét képezik.",
                "A sziget fontos megállóhely volt Kolumbusz Kristóf számára az Amerikába vezet�? útjain.",
                "Puerto de Mogán bájos halászfaluját csatornái miatt 'Kis Velencének' is nevezik."
          ],
          "ro": [
                "Roque Nublo, la 1.813 metri, este reperul vulcanic izbitor din centrul insulei.",
                "Insula a fost declarat�? Rezerva�?ie a Biosferei de c�?tre UNESCO în 2005.",
                "Las Palmas de Gran Canaria este, al�?turi de Santa Cruz de Tenerife, una dintre cele dou�? capitale ale Canarelor.",
                "Dunele din Maspalomas migreaz�? constant �?i î�?i schimb�? forma din cauza vântului.",
                "Gran Canaria este cunoscut�? pentru cultivarea bananelor, ro�?iilor �?i chiar a cafelei.",
                "Risco Caído �?i Mun�?ii Sacri din Gran Canaria sunt un sit al Patrimoniului Mondial UNESCO.",
                "Insula a fost o escal�? important�? pentru Cristofor Columb în c�?l�?toriile sale spre America.",
                "Fermec�?torul sat de pescari Puerto de Mogán este numit �?i 'Mica Vene�?ie' datorit�? canalelor sale."
          ],
          "en": [
                "Roque Nublo, at 1,813 meters, is the striking volcanic landmark in the center of the island.",
                "The island was declared a Biosphere Reserve by UNESCO in 2005.",
                "Las Palmas de Gran Canaria is, along with Santa Cruz de Tenerife, one of the two capitals of the Canaries.",
                "The dunes of Maspalomas are constantly migrating and changing their shape due to the wind.",
                "Gran Canaria is known for the cultivation of bananas, tomatoes, and even coffee.",
                "Risco Caído and the Sacred Mountains of Gran Canaria are a UNESCO World Heritage site.",
                "The island was an important stopover for Christopher Columbus on his voyages to the Americas.",
                "The charming fishing village of Puerto de Mogán is also called 'Little Venice' due to its canals."
          ]
    },
    image: "/geo-images/spain/gran-canaria.webp",
    
  },
  {
    id: "es-pyrenees", type: "landmark", parent: "ES-AR", coords: [-0.0763, 42.6687],
    name: {"de": "Pyrenäen", "hu": "Pireneusok", "ro": "Pirinei", "en": "Pyrenees"},
    
    description: {
          "de": "Die Pyrenäen bilden eine natürliche, schroffe Gebirgsgrenze zwischen Spanien und Frankreich, die sich über mehr als 400 Kilometer vom Atlantischen Ozean bis zum Mittelmeer erstreckt. Diese spektakuläre Bergkette ist geprägt von schneebedeckten Gipfeln von über 3.000 Metern Höhe, tiefen Gletschertälern, tosenden Wasserfällen und dichten Wäldern. Auf der spanischen Seite erstrecken sich die Pyrenäen über Navarra, Aragonien und Katalonien und bieten einige der spektakulärsten Nationalparks Europas, wie den Ordesa y Monte Perdido. Es ist ein erstklassiges Ziel für Bergsteiger, Skifahrer und Naturliebhaber, die Ruhe und alpine Herausforderungen suchen.",
          "hu": "A Pireneusok természetes, zord hegyvidéki határt képeznek Spanyolország és Franciaország között, amely több mint 400 kilométeren át húzódik az Atlanti-óceántól a Földközi-tengerig. Ezt a látványos hegyláncot 3000 métert is meghaladó hófödte csúcsok, mély gleccservölgyek, dübörg�? vízesések és sűrű erd�?k jellemzik. A spanyol oldalon a Pireneusok Navarrán, Aragónián és Katalónián ívelnek át, és Európa leglátványosabb nemzeti parkjait kínálják, mint például az Ordesa y Monte Perdido. Els�? osztályú célpont a hegymászók, síel�?k és a természet szerelmesei számára, akik nyugalmat és alpesi kihívásokat keresnek.",
          "ro": "Pirineii formeaz�? o grani�?�? muntoas�? natural�? �?i accidentat�? între Spania �?i Fran�?a, care se întinde pe mai mult de 400 de kilometri de la Oceanul Atlantic pân�? la Marea Mediteran�?. Acest lan�? muntos spectaculos este caracterizat de vârfuri acoperite de z�?pad�? de peste 3.000 de metri în�?l�?ime, v�?i adânci glaciare, cascade vijelioase �?i p�?duri dese. Pe partea spaniol�?, Pirineii se întind pe Navarra, Aragon �?i Catalonia �?i ofer�? unele dintre cele mai spectaculoase parcuri na�?ionale din Europa, cum ar fi Ordesa y Monte Perdido. Este o destina�?ie de prim�? clas�? pentru alpini�?ti, schiori �?i iubitori de natur�? care caut�? lini�?te �?i provoc�?ri alpine.",
          "en": "The Pyrenees form a natural, rugged mountain border between Spain and France, stretching for more than 400 kilometers from the Atlantic Ocean to the Mediterranean Sea. This spectacular mountain range is characterized by snow-capped peaks over 3,000 meters high, deep glacial valleys, roaring waterfalls, and dense forests. On the Spanish side, the Pyrenees stretch across Navarre, Aragon, and Catalonia, offering some of Europe's most spectacular national parks, such as Ordesa y Monte Perdido. It is a premier destination for mountaineers, skiers, and nature lovers seeking tranquility and alpine challenges."
    }, descriptionAdvanced: { de: "", hu: "A Pireneusok hegyl�nca hatalmas, 430 kilom�ter hossz� term�szetes hat�rt k�pez Spanyolorsz�g �s Franciaorsz�g k�z�tt, a Vizcayai-�b�lt?l eg�szen a F�ldk�zi-tengerig. Ez a fens�ges, vad hegys�g dr�mai cs�csokkal, m�ly gleccserv�lgyekkel �s tiszta, magashegyi tavakkal b�szk�lkedhet. A hegyvid�k a term�szetj�r�k, alpinist�k �s s�el?k igazi paradicsoma, amely olyan ikonikus nemzeti parkokat foglal mag�ban, mint az arag�niai Ordesa �s Monte Perdido. Az eldugott v�lgyekben var�zslatos rom�n st�lus� templomok �s hagyom�nyos k?b?l �p�lt falvak b�jnak meg, amelyek �vsz�zadok �ta ?rzik ?si kult�r�jukat �s �letm�djukat. A r�gi� egyed�l�ll� �l?helyet biztos�t olyan ritka �llatfajoknak, mint a szak�llas saskesely? vagy a pireneusi zerge.", ro: "", en: "The Pyrenees form a formidable and majestic natural border between Spain and France, stretching from the Bay of Biscay to the Mediterranean Sea. This rugged mountain range is characterized by jagged peaks, deep verdant valleys, and crystal-clear alpine lakes known as ibones. The Spanish side features several extraordinary national parks, including Ordesa y Monte Perdido, renowned for its dramatic limestone canyons and cascading waterfalls. The region is steeped in history, dotted with isolated Romanesque churches and traditional mountain villages that have preserved their distinct cultural identities. Throughout the year, the Pyrenees offer exceptional outdoor pursuits, from world-class skiing in winter to spectacular trekking in summer." }, factsAdvanced: { de: [], hu: [
        "A Pireneusok legmagasabb pontja a 3404 m�ter magas Pico de Aneto, amely az arag�niai szakaszon tal�lhat�.",
        "A hegys�g neve a g�r�g mitol�gi�b�l, Pyren� hercegn? legend�j�b�l sz�rmazik, aki H�rakl�sz szerelme volt.",
        "Az Ordesa-v�lgy gyakran a 'spanyol Grand Canyon' nevet kapja hatalmas, f�gg?leges sziklafalai miatt.",
        "A baszk nyelv �s kult�ra is a Pireneusok nyugati v�lgyeinek elszigetelts�g�ben tudott a mai napig fennmaradni."
      ], ro: [], en: [
        "The mountain range extends for approximately 491 kilometers.",
        "Aneto is the highest peak in the Pyrenees, reaching an elevation of 3,404 meters.",
        "Ordesa y Monte Perdido National Park was established in 1918.",
        "The Pyrenees host some of the southernmost glaciers in Europe, though they are rapidly retreating."
      ] },
    facts: {
          "de": [
                "Der Pico de Aneto ist mit 3.404 Metern der höchste Berg der Pyrenäen.",
                "Der Nationalpark Ordesa y Monte Perdido in Aragonien ist ein UNESCO-Weltnaturerbe.",
                "Die Pyrenäen beherbergen noch kleine, schrumpfende Gletscher an ihren höchsten Gipfeln.",
                "Im Gebirge liegt der Zwergstaat Andorra, eingeklemmt zwischen Spanien und Frankreich.",
                "Die Berge sind ein wichtiger Lebensraum für den seltenen Pyrenäenbären und Bartgeier.",
                "Zahlreiche renommierte Skiresorts, wie Baqueira-Beret, befinden sich auf spanischer Seite.",
                "Der Fernwanderweg GR 11 durchquert die gesamten spanischen Pyrenäen von Küste zu Küste.",
                "Historisch gesehen bildeten die Pyrenäen eine bedeutende kulturelle und politische Barriere in Europa."
          ],
          "hu": [
                "A Pico de Aneto 3404 méterével a Pireneusok legmagasabb hegye.",
                "Az aragóniai Ordesa y Monte Perdido Nemzeti Park az UNESCO világörökség része.",
                "A Pireneusok legmagasabb csúcsain még ma is találhatók kis, zsugorodó gleccserek.",
                "A hegységben fekszik Andorra törpeállama, beszorítva Spanyolország és Franciaország közé.",
                "A hegyek fontos él�?helyei a ritka pireneusi barna medvének és a szakállas keselyűnek.",
                "Számos neves síközpont, például a Baqueira-Beret található a spanyol oldalon.",
                "A GR 11 távolsági túraútvonal átszeli a teljes spanyol Pireneusokat parttól partig.",
                "Történelmileg a Pireneusok jelent�?s kulturális és politikai akadályt képeztek Európában."
          ],
          "ro": [
                "Pico de Aneto, la 3.404 metri, este cel mai înalt munte din Pirinei.",
                "Parcul Na�?ional Ordesa y Monte Perdido din Aragon este un sit al Patrimoniului Natural Mondial UNESCO.",
                "Pirineii înc�? mai ad�?postesc ghe�?ari mici, în sc�?dere, pe cele mai înalte vârfuri ale lor.",
                "Microstatul Andorra este situat în mun�?i, prins între Spania �?i Fran�?a.",
                "Mun�?ii sunt un habitat important pentru rarul urs brun de Pirinei �?i z�?gan.",
                "Numeroase sta�?iuni de schi renumite, cum ar fi Baqueira-Beret, sunt situate pe partea spaniol�?.",
                "Traseul de drume�?ii pe distan�?e lungi GR 11 traverseaz�? to�?i Pirineii spanioli de la coast�? la coast�?.",
                "Din punct de vedere istoric, Pirineii au format o barier�? cultural�? �?i politic�? semnificativ�? în Europa."
          ],
          "en": [
                "The Pico de Aneto, at 3,404 meters, is the highest mountain in the Pyrenees.",
                "The Ordesa y Monte Perdido National Park in Aragon is a UNESCO World Natural Heritage site.",
                "The Pyrenees still host small, shrinking glaciers on their highest peaks.",
                "The microstate of Andorra is located in the mountains, wedged between Spain and France.",
                "The mountains are an important habitat for the rare Pyrenean brown bear and bearded vulture.",
                "Numerous renowned ski resorts, such as Baqueira-Beret, are located on the Spanish side.",
                "The GR 11 long-distance hiking trail crosses the entire Spanish Pyrenees from coast to coast.",
                "Historically, the Pyrenees formed a significant cultural and political barrier in Europe."
          ]
    },
    image: "/geo-images/spain/pyrenees.webp",
    
  },
  {
    id: "es-sierra-nevada", type: "landmark", parent: "ES-AN", coords: [-3.3000, 37.0500],
    name: {"de": "Sierra Nevada", "hu": "Sierra Nevada", "ro": "Sierra Nevada", "en": "Sierra Nevada"},
    
    description: {
          "de": "Die Sierra Nevada, wörtlich das 'schneebedeckte Gebirge', ist eine atemberaubende Bergkette im Süden Spaniens, hauptsächlich in der Provinz Granada. Sie ist das zweithöchste Gebirgsmassiv Westeuropas nach den Alpen und weist mit dem Mulhacén den höchsten Gipfel des spanischen Festlands auf. Bemerkenswert ist der starke Kontrast: Während man oben auf den Gletschern skifahren kann, leuchten unten an der Costa Tropical die Palmen im Sonnenschein. Der Gro�?teil des Gebirges ist als Nationalpark und UNESCO-Biosphärenreservat geschützt und beheimatet eine unglaubliche Vielfalt an Flora und Fauna, darunter viele endemische Arten.",
          "hu": "A Sierra Nevada, szó szerint 'hófödte hegység', egy lélegzetelállító hegylánc Dél-Spanyolországban, f�?ként Granada tartományban. Az Alpok után Nyugat-Európa második legmagasabb hegymasszívuma, és a Mulhacénnel a spanyol szárazföld legmagasabb csúcsával büszkélkedhet. A heles kontraszt figyelemre méltó: miközben odafent a gleccsereken síelni lehet, lent a Costa Tropical partján pálmafák sütkéreznek a napsütésben. A hegység nagy része nemzeti parkként és UNESCO bioszféra-rezervátumként védett, és hihetetlenül gazdag növény- és állatvilágnak, köztük számos endemikus fajnak ad otthont.",
          "ro": "Sierra Nevada, literalmente 'lan�?ul muntos înz�?pezit', este un lan�? muntos uluitor în sudul Spaniei, situat în principal în provincia Granada. Este al doilea cel mai înalt masiv muntos din Europa de Vest dup�? Alpi �?i se mândre�?te cu cel mai înalt vârf din Spania continental�?, Mulhacén. Contrastul puternic este remarcabil: în timp ce se poate schia pe ghe�?arii de sus, palmierii str�?lucesc în soare jos, pe Costa Tropical. Cea mai mare parte a lan�?ului muntos este protejat�? ca parc na�?ional �?i rezerva�?ie a biosferei UNESCO �?i g�?zduie�?te o varietate incredibil�? de flor�? �?i faun�?, inclusiv multe specii endemice.",
          "en": "The Sierra Nevada, literally the 'snow-covered mountain range', is a breathtaking mountain range in southern Spain, mainly in the province of Granada. It is the second highest mountain massif in Western Europe after the Alps and boasts the highest peak in mainland Spain, the Mulhacén. The stark contrast is remarkable: while one can ski on the glaciers above, palm trees shine in the sun below on the Costa Tropical. Most of the mountain range is protected as a national park and UNESCO biosphere reserve and is home to an incredible variety of flora and fauna, including many endemic species."
    }, descriptionAdvanced: { de: "", hu: "A d�l-spanyolorsz�gi Andal�zi�ban, Granad�t�l mind�ssze egy k?haj�t�snyira emelked? Sierra Nevada ('Havas Hegys�g') Spanyolorsz�g legmagasabb hegys�ge az Ib�riai-f�lszigeten. A massz�v hegyl�nc �les �s sz�rre�lis kontrasztot alkot a k�zeli, naps�t�tte Costa del Sol mediterr�n kl�m�j�val; t�len Eur�pa legd�lebbi s�paradicsomak�nt �zemel. A hegyvonulat legnagyobb r�sz�t nemzeti parkk� nyilv�n�tott�k az itt tal�lhat� egyed�l�ll�, endemikus magashegyi n�v�nyzet miatt, amely alkalmazkodott az extr�m k�r�lm�nyekhez. A hegys�g d�li, F�ldk�zi-tenger fel� n�z? lejt?in ter�l el a fest?i Alpujarras �s Las Alpujarras r�gi�, ahol jellegzetes, lapos tet?s m�r falvak b�jnak meg a teraszos hegyoldalakon.", ro: "", en: "Sierra Nevada is a dramatic mountain range in the region of Andalusia, featuring the highest peaks in continental Spain. Despite its southern latitude and proximity to the sunny Mediterranean coast, it remains snow-capped for much of the year and hosts Europe's southernmost ski resort. The mountains are a haven of biodiversity, sheltering numerous endemic plant and animal species within the boundaries of a protected national park. The rugged terrain transitions beautifully into the Alpujarras, a series of historic valleys dotted with picturesque white villages of Moorish origin. Sierra Nevada provides a striking geographical contrast to the nearby historical wonders of Granada and the Alhambra." }, factsAdvanced: { de: [], hu: [
        "A Sierra Nevad�ban tal�lhat� a Mulhac�n (3482 m), amely Spanyolorsz�g kontinent�lis r�sz�nek legmagasabb cs�csa.",
        "A hegys�g s�k�zpontja olyan d�len fekszik, hogy tiszta napokon a lejt?kr?l l�tni lehet az afrikai partokat.",
        "Az Alpujarras falvainak egyedi �p�t�szete k�zvetlen �r�ks�ge a berbereknek, akik az Alhambra eleste ut�n ide menek�ltek.",
        "Itt tal�lhat� az IRAM nev? r�di�csillag�szati obszervat�rium, amely a vil�g egyik legmagasabban fekv? tudom�nyos l�tes�tm�nye."
      ], ro: [], en: [
        "Mulhac�n is the highest peak in the Sierra Nevada and the Iberian Peninsula at 3,479 meters.",
        "The Sierra Nevada National Park was established in 1999 and covers 85,883 hectares.",
        "It was designated a UNESCO Biosphere Reserve in 1986.",
        "The ski resort of Pradollano hosted the 1996 World Alpine Ski Championships."
      ] },
    facts: {
          "de": [
                "Der Mulhacén ist mit 3.482 Metern der höchste Berg der Iberischen Halbinsel.",
                "Die Sierra Nevada beherbergt das südlichste Skigebiet Europas.",
                "Die Fahrt von den Skipisten zu den Stränden des Mittelmeers dauert oft weniger als zwei Stunden.",
                "Das Gebirge wurde 1986 von der UNESCO zum Biosphärenreservat erklärt.",
                "Es gibt über 2.100 erfasste Pflanzenarten, wovon mehr als 60 nur hier vorkommen.",
                "Das Observatorium der Sierra Nevada nutzt die saubere Bergluft für astronomische Forschungen.",
                "Die Region Las Alpujarras an den Südhängen ist berühmt für ihre wei�?en Dörfer und Berberarchitektur.",
                "Im Sommer ist das Gebiet ein Paradies für anspruchsvolle Mountainbiker und Wanderer."
          ],
          "hu": [
                "A Mulhacén 3482 méterével az Ibériai-félsziget legmagasabb hegye.",
                "A Sierra Nevadában található Európa legdélebbi síterepe.",
                "A sípályáktól a Földközi-tenger strandjaiig tartó út gyakran kevesebb mint két órát vesz igénybe.",
                "A hegységet 1986-ban az UNESCO bioszféra-rezervátummá nyilvánította.",
                "Több mint 2100 regisztrált növényfaj él itt, amelyek közül több mint 60 csak ezen a területen található meg.",
                "A Sierra Nevada Obszervatórium a tiszta hegyi leveg�?t használja csillagászati kutatásokhoz.",
                "A déli lejt�?kön elterül�? Las Alpujarras régió híres fehér falvairól és berber építészetér�?l.",
                "Nyáron a terület a kihívásokat keres�? hegyikerékpárosok és túrázók paradicsoma."
          ],
          "ro": [
                "Mulhacén, la 3.482 de metri, este cel mai înalt munte din Peninsula Iberic�?.",
                "Sierra Nevada g�?zduie�?te cea mai sudic�? sta�?iune de schi din Europa.",
                "C�?l�?toria de la pârtiile de schi la plajele M�?rii Mediterane dureaz�? adesea mai pu�?in de dou�? ore.",
                "Lan�?ul muntos a fost declarat rezerva�?ie a biosferei de c�?tre UNESCO în 1986.",
                "Exist�? peste 2.100 de specii de plante înregistrate, dintre care peste 60 se g�?sesc doar aici.",
                "Observatorul din Sierra Nevada folose�?te aerul curat de munte pentru cercet�?ri astronomice.",
                "Regiunea Las Alpujarras de pe versan�?ii sudici este renumit�? pentru satele sale albe �?i arhitectura berber�?.",
                "Vara, zona este un paradis pentru cicli�?tii de munte �?i drume�?ii exigen�?i."
          ],
          "en": [
                "The Mulhacén is the highest mountain on the Iberian Peninsula at 3,482 meters.",
                "The Sierra Nevada is home to Europe's southernmost ski resort.",
                "The drive from the ski slopes to the beaches of the Mediterranean often takes less than two hours.",
                "The mountain range was declared a biosphere reserve by UNESCO in 1986.",
                "There are over 2,100 recorded plant species, more than 60 of which are found only here.",
                "The Sierra Nevada Observatory uses the clean mountain air for astronomical research.",
                "The Las Alpujarras region on the southern slopes is famous for its white villages and Berber architecture.",
                "In summer, the area is a paradise for demanding mountain bikers and hikers."
          ]
    },
    image: "/geo-images/spain/sierra-nevada.webp",
    
  },
  {
    id: "es-picos-europa", type: "landmark", parent: "ES-AS", coords: [-4.8458, 43.1979],
    name: {"de": "Picos de Europa", "hu": "Picos de Europa", "ro": "Picos de Europa", "en": "Picos de Europa"},
    
    description: {
          "de": "Die Picos de Europa ('Gipfel Europas') bilden ein spektakuläres, zerklüftetes Kalksteinmassiv im Kantabrischen Gebirge in Nordspanien. Das Gebirge erstreckt sich über die Regionen Asturien, Kantabrien und Kastilien und León. Die Landschaft ist wild und dramatisch, geprägt von tiefen Schluchten, gähnenden Abgründen wie der Cares-Schlucht und hoch aufragenden, fast senkrechten Felswänden, die bei Kletterern aus aller Welt begehrt sind. Neben der rauen Geologie zeichnet sich der Nationalpark durch unberührte Buchen- und Eichenwälder, malerische Bergseen (die Lagos de Covadonga) und eine reiche, ursprüngliche Tierwelt aus. Es ist ein echtes Paradies für Abenteurer und Naturliebhaber.",
          "hu": "A Picos de Europa ('Európa csúcsai') egy látványos, csipkézett mészk�?masszívum �?szak-Spanyolországban, a Kantábriai-hegységben. A hegység Asztúria, Kantábria, valamint Kasztília és León régiókon ível át. A táj vad és drámai, mély szurdokok, tátongó szakadékok, mint a Cares-szurdok, és magasba tör�?, szinte függ�?leges sziklafalak jellemzik, amelyek a sziklamászók kedvencei szerte a világon. A zord geológia mellett a nemzeti parkot érintetlen bükk- és tölgyerd�?k, fest�?i hegyi tavak (a Lagos de Covadonga) és gazdag, eredeti állatvilág jellemzi. Igazi paradicsom a kalandorok és a természet szerelmesei számára.",
          "ro": "Picos de Europa ('Vârfurile Europei') formeaz�? un masiv de calcar spectaculos �?i accidentat în Mun�?ii Cantabrici din nordul Spaniei. Mun�?ii se întind pe regiunile Asturia, Cantabria �?i Castilia �?i León. Peisajul este s�?lbatic �?i dramatic, caracterizat prin defileuri adânci, pr�?p�?stii c�?scate, precum Defileul Cares, �?i pere�?i de stânc�? falnici, aproape verticali, foarte c�?uta�?i de alpini�?tii din întreaga lume. Pe lâng�? geologia aspr�?, parcul na�?ional este caracterizat de p�?duri virgine de fag �?i stejar, lacuri de munte pitore�?ti (Lagos de Covadonga) �?i o via�?�? s�?lbatic�? bogat�? �?i original�?. Este un adev�?rat paradis pentru aventurieri �?i iubitori de natur�?.",
          "en": "The Picos de Europa ('Peaks of Europe') form a spectacular, rugged limestone massif in the Cantabrian Mountains of northern Spain. The mountains stretch across the regions of Asturias, Cantabria, and Castile and León. The landscape is wild and dramatic, characterized by deep gorges, yawning abysses like the Cares Gorge, and towering, almost vertical rock walls that are highly sought after by climbers from all over the world. In addition to the harsh geology, the national park features pristine beech and oak forests, picturesque mountain lakes (the Lagos de Covadonga), and a rich, original wildlife. It is a true paradise for adventurers and nature lovers."
    }, descriptionAdvanced: { de: "", hu: "A Picos de Europa (Eur�pa Cs�csai) egy dr�mai, meredek m�szk?hegys�g Spanyolorsz�g �szaki partvid�ke k�zel�ben, amely Aszt�ria, Kant�bria �s Kaszt�lia �s Le�n r�gi�in osztozik. A hegys�g nev�t a legenda szerint a tenger�szek adt�k, mivel Amerika fel?l hazat�rve ezek a cs�csok voltak az els? eur�pai sz�razf�ld, amit megpillantottak. A t�jat m�ly szurdokok (mint a h�res Cares-szurdok), buja z�ld v�lgyek �s csipk�zett, szinte f�gg?leges m�szk?cs�csok jellemzik, mint p�ld�ul a legend�s Naranjo de Bulnes. A Picos de Europa Nemzeti Park a barnamedv�k, farkasok �s a zerge egyik utols� mened�ke Nyugat-Eur�p�ban, valamint a tradicion�lis p�sztorkult�ra �s k�zm?ves sajtk�sz�t�s (pl. Cabrales sajt) �l? m�zeuma.", ro: "", en: "The Picos de Europa is a stunning mountain range located in northern Spain, spanning across the regions of Asturias, Cantabria, and Castile and Le�n. Characterized by dramatic limestone massifs, deep gorges, and lush green valleys, it presents some of the most striking alpine scenery on the Iberian Peninsula. The iconic Naranjo de Bulnes peak challenges mountaineers from around the world, while the Cares Gorge offers one of the country's most spectacular hiking trails. The area is deeply rooted in Spanish history and legend, housing the Sanctuary of Covadonga, a site significant to the Christian reconquest. Traditional pastoral life continues in the remote high-altitude meadows, producing renowned artisanal cheeses." }, factsAdvanced: { de: [], hu: [
        "A Picos de Europa volt Spanyolorsz�g legels? nemzeti parkja, amelyet 1918-ban alap�tottak 'Monta�a de Covadonga' n�ven.",
        "A Naranjo de Bulnes (Picurien) egy 2519 m�teres monolit, amely a spanyol alpinizmus legszentebb hegye.",
        "A Cares-szurdok (Ruta del Cares) egy 12 kilom�teres szikl�ba v�jt �sv�ny, amely a vil�g egyik legl�tv�nyosabb t�ra�tvonala.",
        "A h�res aszt�riai Cabrales k�kpen�szes sajtot a Picos de Europa term�szetes m�szk?barlangjaiban �rlelik h�napokig."
      ], ro: [], en: [
        "Picos de Europa was Spain's first national park, originally established in 1918 as Monta�a de Covadonga.",
        "Torre de Cerredo is the highest peak in the range at 2,650 meters.",
        "The Cares Gorge trail is approximately 12 kilometers long, carved into the cliff faces.",
        "The region is one of the last strongholds of the Cantabrian brown bear and the Iberian wolf."
      ] },
    facts: {
          "de": [
                "Der Nationalpark Picos de Europa, 1918 gegründet, war der erste Nationalpark Spaniens.",
                "Der Torre de Cerredo ist mit 2.650 Metern der höchste Gipfel des Massivs.",
                "Der Naranjo de Bulnes (Picu Urriellu) ist ein markanter Kalksteinmonolith und ein Mekka für Kletterer.",
                "Die Schlucht 'Garganta del Cares' bietet eine der berühmtesten und atemberaubendsten Wanderrouten Spaniens.",
                "In den Bergen wird in Naturhöhlen der berühmte Blauschimmelkäse 'Cabrales' gereift.",
                "Das Gebiet ist ein Refugium für bedrohte Tierarten wie den Kantabrischen Braunbären und den iberischen Wolf.",
                "Die Höhle und Basilika von Covadonga sind ein wichtiger historischer und religiöser Ort für Spanien.",
                "Es gibt eine Seilbahn bei Fuente Dé, die Besucher in wenigen Minuten auf über 1.800 Meter Höhe bringt."
          ],
          "hu": [
                "Az 1918-ban alapított Picos de Europa Nemzeti Park volt Spanyolország els�? nemzeti parkja.",
                "A Torre de Cerredo 2650 méterével a masszívum legmagasabb csúcsa.",
                "A Naranjo de Bulnes (Picu Urriellu) egy jellegzetes mészk�?monolit, a sziklamászók mekkája.",
                "A 'Garganta del Cares' szurdok Spanyolország egyik leghíresebb és leglélegzetelállítóbb túraútvonalát kínálja.",
                "A hegyek természetes barlangjaiban érlelik a híres 'Cabrales' kéksajtot.",
                "A terület olyan veszélyeztetett állatfajok menedéke, mint a kantábriai barna medve és az ibériai farkas.",
                "Covadonga barlangja és bazilikája fontos történelmi és vallási helyszín Spanyolország számára.",
                "Fuente Dénél található egy drótkötélpálya, amely percek alatt több mint 1800 méteres magasságba viszi a látogatókat."
          ],
          "ro": [
                "Parcul Na�?ional Picos de Europa, înfiin�?at în 1918, a fost primul parc na�?ional din Spania.",
                "Torre de Cerredo este cel mai înalt vârf al masivului, la 2.650 de metri.",
                "Naranjo de Bulnes (Picu Urriellu) este un monolit izbitor de calcar �?i o mecca pentru alpini�?ti.",
                "Defileul 'Garganta del Cares' ofer�? unul dintre cele mai faimoase �?i mai uluitoare trasee de drume�?ii din Spania.",
                "Faimoasa brânz�? cu mucegai albastru 'Cabrales' este maturat�? în pe�?teri naturale din mun�?i.",
                "Zona este un refugiu pentru specii pe cale de dispari�?ie, cum ar fi ursul brun cantabric �?i lupul iberic.",
                "Pe�?tera �?i bazilica din Covadonga sunt un important sit istoric �?i religios pentru Spania.",
                "Exist�? o telecabin�? la Fuente Dé care duce vizitatorii la peste 1.800 de metri altitudine în câteva minute."
          ],
          "en": [
                "The Picos de Europa National Park, established in 1918, was Spain's first national park.",
                "The Torre de Cerredo is the highest peak of the massif at 2,650 meters.",
                "The Naranjo de Bulnes (Picu Urriellu) is a striking limestone monolith and a mecca for climbers.",
                "The 'Garganta del Cares' gorge offers one of the most famous and breathtaking hiking trails in Spain.",
                "The famous 'Cabrales' blue cheese is matured in natural caves in the mountains.",
                "The area is a refuge for endangered species such as the Cantabrian brown bear and the Iberian wolf.",
                "The cave and basilica of Covadonga are an important historical and religious site for Spain.",
                "There is a cable car at Fuente Dé that takes visitors to an altitude of over 1,800 meters in just a few minutes."
          ]
    },
    image: "/geo-images/spain/picos-de-europa.webp",
    
  },
  {
    id: "es-costa-brava", type: "landmark", parent: "ES-CT", coords: [3.1235, 41.9750],
    name: {"de": "Costa Brava", "hu": "Costa Brava", "ro": "Costa Brava", "en": "Costa Brava"},
    
    description: {
          "de": "Die Costa Brava, die 'Wilde Küste', erstreckt sich entlang der nordöstlichen Küste Kataloniens von Blanes bis zur französischen Grenze. Ihren Namen verdankt sie der rauen, zerklüfteten Felsküste, die abrupt ins tiefblaue Mittelmeer abfällt. Versteckt zwischen diesen Klippen liegen unzählige malerische, pinienumsäumte Buchten (Calas) mit kristallklarem Wasser. Entlang der Küste finden sich bezaubernde mittelalterliche Dörfer wie Pals, traditionelle Fischerorte wie Cadaqués und antike griechisch-römische Ruinen bei Empúries. Die Costa Brava zog schon immer Künstler an, allen voran Salvador Dalí, dessen Erbe die Region bis heute prägt.",
          "hu": "A Costa Brava, a 'Vad part', Katalónia északkeleti partvidékén húzódik Blanest�?l egészen a francia határig. Nevét a zord, csipkézett sziklás partvonalról kapta, amely hirtelen szakad a mélykék Földközi-tengerbe. E sziklák között megbújva számtalan fest�?i, feny�?fákkal szegélyezett öböl (Cala) található kristálytiszta vízzel. A part mentén elbűvöl�? középkori falvak, mint Pals, hagyományos halászfalvak, mint Cadaqués, és ókori görög-római romok (Empúries) találhatók. A Costa Brava mindig is vonzotta a művészeket, legf�?képpen Salvador Dalít, akinek öröksége a mai napig meghatározza a régiót.",
          "ro": "Costa Brava, 'Coasta S�?lbatic�?', se întinde de-a lungul coastei de nord-est a Cataloniei, de la Blanes pân�? la grani�?a cu Fran�?a. �?�?i datoreaz�? numele coastei stâncoase aspre, accidentate, care cade brusc în adâncul M�?rii Mediterane albastre. Ascunse printre aceste stânci se afl�? nenum�?rate golfuri pitore�?ti, m�?rginite de pini (Calas), cu ape cristaline. De-a lungul coastei ve�?i g�?si sate medievale fermec�?toare precum Pals, sate tradi�?ionale de pescari precum Cadaqués �?i ruine antice greco-romane lâng�? Empúries. Costa Brava a atras întotdeauna arti�?ti, mai ales pe Salvador Dalí, a c�?rui mo�?tenire continu�? s�? modeleze regiunea �?i ast�?zi.",
          "en": "The Costa Brava, the 'Wild Coast', stretches along the northeastern coast of Catalonia from Blanes to the French border. It owes its name to the rough, rugged rocky coastline that drops abruptly into the deep blue Mediterranean Sea. Hidden among these cliffs are countless picturesque, pine-fringed coves (Calas) with crystal-clear water. Along the coast, you will find charming medieval villages like Pals, traditional fishing villages like Cadaqués, and ancient Greco-Roman ruins near Empúries. The Costa Brava has always attracted artists, most notably Salvador Dalí, whose legacy continues to shape the region today."
    }, descriptionAdvanced: { de: "", hu: "A Costa Brava ('Vad Part') Katal�nia leg�szakibb, Franciaorsz�ggal hat�ros partszakasza, amely dr�mai szikl�ir�l, krist�lytiszta viz? rejtett �bleir?l �s feny?erd?ir?l kapta a nev�t. A partvid�k fest?i hal�szfalvai, mint Cadaqu�s, Calella de Palafrugell vagy Tossa de Mar, meg?rizt�k autentikus, b�jos karakter�ket a modern turizmus ellen�re is. A r�gi� elv�laszthatatlanul �sszefon�dott Salvador Dal� zsenij�vel, aki �vtizedekig alkotott Portlligatban, �s akinek figueresi m�zeuma a t�rs�g legnagyobb kultur�lis attrakci�ja. A Costa Brava nemcsak tengerparti nyaral�hely, hanem gasztron�miai fellegv�r is, amely a hagyom�nyos tengeri �zeket �tv�zi az avantg�rd katal�n konyh�val.", ro: "", en: "The Costa Brava, translating to 'Rugged Coast', is a stunning stretch of shoreline in northeastern Catalonia running from Blanes up to the French border. This enchanting region is defined by its dramatic rocky cliffs plunging into the Mediterranean Sea, interspersed with hidden, pine-fringed coves and pristine beaches. Beyond its natural beauty, the Costa Brava is celebrated for its deep artistic connections, most notably as the home and inspiration of surrealist master Salvador Dal�. Charming medieval towns like Pals and Tossa de Mar offer historical intrigue alongside traditional Catalan gastronomy. The coastline perfectly balances lively seaside resorts with tranquil, unspoiled natural parks like Cap de Creus." }, factsAdvanced: { de: [], hu: [
        "A 'Costa Brava' elnevez�st egy katal�n �js�g�r�, Ferran Agull� haszn�lta el?sz�r 1908-ban a vad, szikl�s partokra.",
        "Tossa de Mar �v�rosa (Vila Vella) az egyetlen megmaradt k�z�pkori er?d�tett tengerparti telep�l�s a katal�n tengerparton.",
        "A Cap de Creus Nemzeti Park sz�rre�lis, sz�l �ltal form�lt sziklaalakzatai ihlett�k Salvador Dal� legh�resebb festm�nyeit.",
        "A r�gi�ban tal�lhat� Emp�ries, egy �kori g�r�g �s r�mai r�g�szeti lel?hely, amely k�zvetlen�l a tengerparton fekszik."
      ], ro: [], en: [
        "The term 'Costa Brava' was first popularized by journalist Ferran Agull� in 1908.",
        "The Dal� Theatre-Museum is located in the town of Figueres.",
        "Cap de Creus Natural Park covers over 13,000 hectares of land and sea.",
        "The region features a renowned coastal footpath known as the Cam� de Ronda."
      ] },
    facts: {
          "de": [
                "Der berühmte surrealistische Maler Salvador Dalí lebte lange in Portlligat nahe Cadaqués.",
                "Das Teatre-Museu Dalí in Figueres ist das grö�?te surrealistische Objekt der Welt.",
                "Die Ruinen von Empúries sind die einzige Stätte der iberischen Halbinsel, an der griechische und römische Reste vereint sind.",
                "Ein wunderschöner Küstenwanderweg (Camí de Ronda) verbindet fast die gesamte Costa Brava.",
                "Die Medes-Inseln vor der Küste sind ein geschütztes Meeresreservat und ein Taucherparadies.",
                "Die Region besitzt eine exzellente Gastronomie und mehrere Michelin-Sterne-Restaurants.",
                "Der Botanische Garten Marimurtra in Blanes bietet atemberaubende Klippenaussichten.",
                "Die Costa Brava war in den 1950er Jahren der Beginn des spanischen Massentourismus-Booms."
          ],
          "hu": [
                "A híres szürrealista fest�?, Salvador Dalí sokáig a Cadaqués melletti Portlligatban élt.",
                "A figueresi Teatre-Museu Dalí a világ legnagyobb szürrealista létesítménye.",
                "Az empúries-i romok az egyetlen hely az Ibériai-félszigeten, ahol a görög és római maradványok egyesülnek.",
                "Egy gyönyörű tengerparti túraútvonal (Camí de Ronda) szinte az egész Costa Bravát összeköti.",
                "A part menti Medes-szigetek védett tengeri rezervátum és a búvárok paradicsoma.",
                "A régió kiváló gasztronómiával és számos Michelin-csillagos étteremmel büszkélkedhet.",
                "A blanesi Marimurtra botanikus kert lélegzetelállító kilátást nyújt a sziklákra.",
                "Az 1950-es években a Costa Brava indította el a spanyol tömegturizmus fellendülését."
          ],
          "ro": [
                "Faimosul pictor suprarealist Salvador Dalí a locuit mult timp în Portlligat, lâng�? Cadaqués.",
                "Teatre-Museu Dalí din Figueres este cel mai mare obiect suprarealist din lume.",
                "Ruinele de la Empúries sunt singurul loc din Peninsula Iberic�? unde sunt combinate vestigii grece�?ti �?i romane.",
                "O frumoas�? potec�? de coast�? pentru drume�?ii (Camí de Ronda) conecteaz�? aproape întreaga Costa Brava.",
                "Insulele Medes din largul coastei sunt o rezerva�?ie marin�? protejat�? �?i un paradis pentru scafandri.",
                "Regiunea se mândre�?te cu o gastronomie excelent�? �?i mai multe restaurante cu stele Michelin.",
                "Gr�?dina Botanic�? Marimurtra din Blanes ofer�? vederi uimitoare ale stâncilor.",
                "�?n anii 1950, Costa Brava a fost începutul boom-ului turismului de mas�? din Spania."
          ],
          "en": [
                "The famous surrealist painter Salvador Dalí lived in Portlligat near Cadaqués for a long time.",
                "The Teatre-Museu Dalí in Figueres is the largest surrealist object in the world.",
                "The ruins of Empúries are the only site on the Iberian Peninsula where Greek and Roman remains are combined.",
                "A beautiful coastal hiking trail (Camí de Ronda) connects almost the entire Costa Brava.",
                "The Medes Islands off the coast are a protected marine reserve and a paradise for divers.",
                "The region boasts excellent gastronomy and several Michelin-starred restaurants.",
                "The Marimurtra Botanical Garden in Blanes offers breathtaking cliff views.",
                "In the 1950s, the Costa Brava was the start of the Spanish mass tourism boom."
          ]
    },
    image: "/geo-images/spain/costa-brava.webp",
    
  },
  {
    id: "es-costa-del-sol", type: "landmark", parent: "ES-AN", coords: [-4.6318, 36.5360],
    name: {"de": "Costa del Sol", "hu": "Costa del Sol", "ro": "Costa del Sol", "en": "Costa del Sol"},
    
    description: {
          "de": "Die Costa del Sol, die 'Sonnenküste', ist Spaniens berühmtester Küstenstreifen im Süden Andalusiens, zentriert um die Stadt Málaga. Mit über 320 Sonnentagen im Jahr macht sie ihrem Namen alle Ehre und zieht Besucher aus ganz Europa an. Das Landschaftsbild reicht von langen, goldenen Sandstränden bis zu dramatischen Bergen direkt im Hinterland. Während mondäne Ferienorte wie Marbella mit luxuriösen Yachthäfen (Puerto Banús), teuren Boutiquen und Golfplätzen protzen, versprühen traditionelle 'Wei�?e Dörfer' (Pueblos Blancos) in den Bergen authentischen andalusischen Charme. Die Costa del Sol ist eine perfekte Destination für Strandurlaub, Nachtleben und Freizeitsport.",
          "hu": "A Costa del Sol, a 'Napos part', Spanyolország leghíresebb partvonala Andalúzia déli részén, Málaga városa körül. Az évi több mint 320 napsütéses nappal méltó a nevére, és egész Európából vonzza a látogatókat. A táj hosszú, aranyhomokos strandoktól kezdve közvetlenül a hátországban húzódó drámai hegyekig terjed. Míg az olyan divatos üdül�?helyek, mint Marbella luxusjachtkiköt�?kkel (Puerto Banús), drága butikokkal és golfpályákkal büszkélkedhetnek, addig a hegyekben lév�? hagyományos 'Fehér falvak' (Pueblos Blancos) autentikus andalúz bájt árasztanak. A Costa del Sol tökéletes célpont a tengerparti nyaraláshoz, az éjszakai élethez és a szabadid�?s sportokhoz.",
          "ro": "Costa del Sol, 'Coasta Soarelui', este cea mai faimoas�? por�?iune de coast�? a Spaniei din sudul Andaluziei, centrat�? în jurul ora�?ului Málaga. Cu peste 320 de zile de soare pe an, î�?i respect�? numele �?i atrage vizitatori din toat�? Europa. Peisajul variaz�? de la plaje lungi cu nisip auriu la mun�?i dramatici chiar în interior. �?n timp ce sta�?iunile la mod�?, cum ar fi Marbella, se mândresc cu porturi de lux pentru iahturi (Puerto Banús), buticuri scumpe �?i terenuri de golf, �??Satele Albe�?� (Pueblos Blancos) tradi�?ionale din mun�?i eman�? un farmec andaluz autentic. Costa del Sol este o destina�?ie perfect�? pentru vacan�?e la plaj�?, via�?�? de noapte �?i sporturi de agrement.",
          "en": "The Costa del Sol, the 'Sun Coast', is Spain's most famous stretch of coastline in southern Andalusia, centered around the city of Málaga. With over 320 days of sunshine a year, it lives up to its name and attracts visitors from all over Europe. The landscape ranges from long, golden sandy beaches to dramatic mountains right in the hinterland. While fashionable resorts like Marbella boast luxurious yacht marinas (Puerto Banús), expensive boutiques, and golf courses, traditional 'White Villages' (Pueblos Blancos) in the mountains exude authentic Andalusian charm. The Costa del Sol is a perfect destination for beach holidays, nightlife, and leisure sports."
    }, descriptionAdvanced: { de: "", hu: "A d�l-spanyolorsz�gi Andal�zi�ban, M�laga tartom�ny ment�n h�z�d� Costa del Sol ('Napos Part') Eur�pa egyik legikonikusabb �s legl�togatottabb tengerparti �d�l?�vezete. Ahogy a neve is mutatja, a r�gi� �vente t�bb mint 300 naps�t�ses nappal �s kiv�telesen enyhe mediterr�n �ghajlattal b�szk�lkedhet. Az egykori �lmos hal�szfalvakb�l olyan ny�zsg?, kozmopolita �d�l?v�rosok n?ttek ki, mint Marbella, Torremolinos vagy Estepona, amelyek luxus jachtkik�t?kkel, exkluz�v butikokkal �s v�gtelen homokos strandokkal v�rj�k a vend�geket. A tengerpart m�g�tti dombokon rejt?znek a hagyom�nyos andal�z 'pueblos blancos' (feh�r falvak), mint p�ld�ul Mijas vagy Frigiliana, amelyek csendes, autentikus mened�ket ny�jtanak a part menti ny�zsg�s el?l.", ro: "", en: "The Costa del Sol is Spain's famously sun-drenched coastal region in Andalusia, stretching along the Mediterranean Sea in the province of M�laga. Renowned for its seemingly endless stretches of sandy beaches and reliable year-round sunshine, it has developed into one of Europe's premier holiday destinations. The area effortlessly blends luxury resorts and bustling marinas, like the glamorous Puerto Ban�s, with the traditional charm of whitewashed Andalusian inland villages (pueblos blancos). It is also highly celebrated as the 'Costa del Golf' due to its exceptional concentration of world-class golf courses. From the cosmopolitan energy of M�laga city to the tranquil hillside retreats, the Costa del Sol offers a diverse Mediterranean experience." }, factsAdvanced: { de: [], hu: [
        "A Costa del Sol a golfrajong�k Mekk�ja, gyakran 'Costa del Golf'-nak is h�vj�k, mivel itt tal�lhat� Eur�pa legnagyobb koncentr�ci�j� golfp�lya-h�l�zata.",
        "A marbellai Puerto Ban�s kik�t? Eur�pa egyik legdr�g�bb �s legexkluz�vabb jachtkik�t?je, a nemzetk�zi elit kedvelt tal�lkoz�helye.",
        "A r�gi� hatalmas turisztikai fejl?d�se az 1950-es �s 60-as �vekben kezd?d�tt, r�szben a k�lf�ldi h�ress�gek �s arisztokrat�k betelep�l�s�vel.",
        "A Costa del Sol parti chiringuito (strandb�r) �ttermeinek ikonikus �tele az 'espeto', a ny�lt t?z�n, ny�rson s�t�tt friss szard�nia."
      ], ro: [], en: [
        "The Costa del Sol boasts over 150 kilometers of coastline.",
        "It enjoys an average of 320 days of sunshine per year.",
        "There are more than 70 golf courses located in the region.",
        "Pablo Picasso was born in the coastal city of M�laga in 1881."
      ] },
    facts: {
          "de": [
                "Aufgrund der au�?ergewöhnlich hohen Dichte an Golfplätzen wird die Region auch oft 'Costa del Golf' genannt.",
                "Puerto Banús in Marbella ist einer der exklusivsten und teuersten Yachthäfen Europas.",
                "Nerja ist ein beliebtes Küstenstädtchen, das für seinen Aussichtspunkt 'Balkon von Europa' bekannt ist.",
                "Mijas ist ein typisches, malerisches wei�?es Bergdorf, das Touristen Esel-Taxis anbietet.",
                "Die Küste wurde in den 1960er und 70er Jahren stark für den Tourismus ausgebaut.",
                "Die riesigen Tropfsteinhöhlen von Nerja beherbergen Spuren prähistorischer Kunst.",
                "Das Hinterland bietet hervorragende Wanderwege in Naturparks wie der Sierra de las Nieves.",
                "Die Region ist berühmt für frittierten Fisch ('Pescaito Frito'), der in kleinen Strandrestaurants (Chiringuitos) serviert wird."
          ],
          "hu": [
                "A golfpályák kivételesen nagy sűrűsége miatt a régiót gyakran 'Costa del Golf'-nak is hívják.",
                "A marbellai Puerto Banús Európa egyik legexkluzívabb és legdrágább jachtkiköt�?je.",
                "Nerja egy népszerű tengerparti kisváros, amely az 'Európa erkélye' kilátópontról ismert.",
                "Mijas egy tipikus, fest�?i fehér hegyi falu, amely szamártaxit kínál a turistáknak.",
                "A tengerpartot az 1960-as és 70-es években er�?sen beépítették a turizmus számára.",
                "A hatalmas nerjai cseppk�?barlangokban �?skori művészet nyomai találhatók.",
                "A hátország kiváló túraútvonalakat kínál olyan natúrparkokban, mint a Sierra de las Nieves.",
                "A régió híres a kis parti éttermekben (chiringuitos) felszolgált sült halról ('Pescaito Frito')."
          ],
          "ro": [
                "Datorit�? densit�?�?ii excep�?ional de mari de terenuri de golf, regiunea este adesea numit�? �?i 'Costa del Golf'.",
                "Puerto Banús din Marbella este unul dintre cele mai exclusiviste �?i scumpe porturi de iahturi din Europa.",
                "Nerja este un ora�? de coast�? popular, cunoscut pentru punctul s�?u de belvedere 'Balconul Europei'.",
                "Mijas este un sat de munte alb tipic �?i pitoresc, care ofer�? taxiuri trase de m�?gari pentru turi�?ti.",
                "Coasta a fost puternic dezvoltat�? pentru turism în anii 1960 �?i '70.",
                "Uria�?ele pe�?teri cu stalactite din Nerja ad�?postesc urme de art�? preistoric�?.",
                "Interiorul ofer�? trasee excelente de drume�?ii în parcuri naturale precum Sierra de las Nieves.",
                "Regiunea este renumit�? pentru pe�?tele pr�?jit ('Pescaito Frito'), servit în mici restaurante pe plaj�? (chiringuitos)."
          ],
          "en": [
                "Due to the exceptionally high density of golf courses, the region is also often called 'Costa del Golf'.",
                "Puerto Banús in Marbella is one of the most exclusive and expensive yacht marinas in Europe.",
                "Nerja is a popular coastal town known for its 'Balcony of Europe' viewpoint.",
                "Mijas is a typical, picturesque white mountain village that offers donkey taxis to tourists.",
                "The coast was heavily developed for tourism in the 1960s and 70s.",
                "The huge dripstone caves of Nerja house traces of prehistoric art.",
                "The hinterland offers excellent hiking trails in natural parks such as the Sierra de las Nieves.",
                "The region is famous for fried fish ('Pescaito Frito') served in small beach restaurants (chiringuitos)."
          ]
    },
    image: "/geo-images/spain/costa-del-sol.webp",
    
  },
{
  "id": "es-gaudi-casa-batllo",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.165,
    41.392
  ],
  "name": {
    "de": "Casa Batlló",
    "hu": "Casa Batlló",
    "ro": "Casa Batlló",
    "en": "Casa Batlló"
  },
  "image": "/geo-images/spain/gaudi-casa-batllo.webp",
  "description": {
    "de": "Casa Batlló ist ein Meisterwerk des Architekten Antoni Gaudí in Barcelona. Es zeichnet sich durch seine organischen Formen und die farbenfrohe Mosaikfassade aus. Das Gebäude wurde zwischen 1904 und 1906 umfassend umgebaut und ist heute ein UNESCO-Weltkulturerbe.",
    "hu": "A Casa Batlló Antoni Gaudí építész egyik barcelonai remekműve. Szerves formáiról és színes mozaikhomlokzatáról híres. Az épületet 1904 és 1906 között építették át, és ma az UNESCO világörökség része.",
    "ro": "Casa Batlló este o capodoper�? a arhitectului Antoni Gaudí din Barcelona. Este renumit�? pentru formele sale organice �?i fa�?ada colorat�? din mozaic. Cl�?direa a fost reconstruit�? între 1904 �?i 1906 �?i este ast�?zi în Patrimoniul Mondial UNESCO.",
    "en": "Casa Batlló is a masterpiece by the architect Antoni Gaudí in Barcelona. It is famous for its organic forms and colorful mosaic facade. The building was rebuilt between 1904 and 1906 and is now a UNESCO World Heritage Site."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni Gaudí.",
      "Befindet sich am Passeig de Gràcia.",
      "Wird lokal 'Haus der Knochen' genannt.",
      "Das Dach stellt einen Drachenrücken dar.",
      "Verfügt über bunte Keramikmosaike (Trencadís).",
      "Gehört seit 2005 zum UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni Gaudí tervezte.",
      "A Passeig de Gràcia utcában található.",
      "A helyiek 'Csontok házának' hívják.",
      "A tet�? egy sárkány hátát ábrázolja.",
      "Színes kerámiamozaikokkal (trencadís) díszített.",
      "2005 óta az UNESCO világörökség része."
    ],
    "ro": [
      "Proiectat�? de Antoni Gaudí.",
      "Se afl�? pe Passeig de Gràcia.",
      "Numit�? local 'Casa Oaselor'.",
      "Acoperi�?ul reprezint�? spatele unui dragon.",
      "Decorat�? cu mozaicuri ceramice colorate (trencadís).",
      "Face parte din Patrimoniul UNESCO din 2005."
    ],
    "en": [
      "Designed by Antoni Gaudí.",
      "Located on the Passeig de Gràcia.",
      "Locally called the 'House of Bones'.",
      "The roof represents a dragon's back.",
      "Decorated with colorful ceramic mosaics (trencadís).",
      "Part of the UNESCO World Heritage since 2005."
    ]
  }
},
{
  "id": "es-gaudi-casa-mila",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.162,
    41.395
  ],
  "name": {
    "de": "Casa Milà (La Pedrera)",
    "hu": "Casa Milà (La Pedrera)",
    "ro": "Casa Milà (La Pedrera)",
    "en": "Casa Milà (La Pedrera)"
  },
  "image": "/geo-images/spain/gaudi-casa-mila.webp",
  "description": {
    "de": "Casa Milà, auch bekannt als La Pedrera, ist ein weiteres ikonisches Werk von Antoni Gaudí. Es war das letzte private Wohnhaus, das der Architekt entwarf. Die unkonventionelle steinerne Fassade und die schmiedeeisernen Balkone machen es zu einem Meisterwerk des Modernismus.",
    "hu": "A Casa Milà, más néven La Pedrera, Antoni Gaudí újabb ikonikus alkotása. Ez volt az építész által tervezett utolsó magánlakás. A rendhagyó k�?homlokzat és a kovácsoltvas erkélyek a modernizmus mesterművévé teszik.",
    "ro": "Casa Milà, cunoscut�? �?i sub numele de La Pedrera, este o alt�? lucrare iconic�? a lui Antoni Gaudí. A fost ultima re�?edin�?�? privat�? proiectat�? de arhitect. Fa�?ada sa neconven�?ional�? din piatr�? �?i balcoanele din fier forjat o fac o capodoper�? a modernismului.",
    "en": "Casa Milà, also known as La Pedrera, is another iconic work by Antoni Gaudí. It was the last private residence designed by the architect. Its unconventional stone facade and wrought iron balconies make it a masterpiece of Modernism."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni Gaudí.",
      "Erbaut zwischen 1906 und 1912.",
      "La Pedrera bedeutet 'der Steinbruch'.",
      "Bekannt für seine surrealen Schornsteine auf dem Dach.",
      "Hat keine tragenden Wände, nur Säulen.",
      "Seit 1984 UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni Gaudí tervezte.",
      "1906 és 1912 között épült.",
      "A La Pedrera jelentése 'a k�?bánya'.",
      "A tet�?n lév�? szürreális kéményekr�?l ismert.",
      "Nincsenek teherhordó falai, csak oszlopai.",
      "1984 óta UNESCO világörökség."
    ],
    "ro": [
      "Proiectat�? de Antoni Gaudí.",
      "Construit�? între 1906 �?i 1912.",
      "La Pedrera înseamn�? 'cariera de piatr�?'.",
      "Renumit�? pentru co�?urile de fum suprarealiste de pe acoperi�?.",
      "Nu are pere�?i portan�?i, ci doar stâlpi.",
      "Patrimoniu Mondial UNESCO din 1984."
    ],
    "en": [
      "Designed by Antoni Gaudí.",
      "Built between 1906 and 1912.",
      "La Pedrera means 'the stone quarry'.",
      "Famous for its surreal chimneys on the roof.",
      "Has no load-bearing walls, only columns.",
      "UNESCO World Heritage site since 1984."
    ]
  }
},
{
  "id": "es-picasso-museum",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.18,
    41.385
  ],
  "name": {
    "de": "Picasso-Museum",
    "hu": "Picasso Múzeum",
    "ro": "Muzeul Picasso",
    "en": "Picasso Museum Barcelona"
  },
  "image": "/geo-images/spain/picasso-museum.webp",
  "description": {
    "de": "Das Picasso-Museum in Barcelona beherbergt eine der umfangreichsten Sammlungen von Kunstwerken von Pablo Picasso. Es konzentriert sich besonders auf seine frühen Werke und seine prägenden Jahre in der Stadt. Das Museum befindet sich in fünf mittelalterlichen Palästen im Viertel El Born.",
    "hu": "A barcelonai Picasso Múzeum Pablo Picasso műveinek egyik legkiterjedtebb gyűjteményének ad otthont. Különös hangsúlyt fektet korai műveire és a városban töltött meghatározó éveire. A múzeum öt középkori palotában kapott helyet az El Born negyedben.",
    "ro": "Muzeul Picasso din Barcelona g�?zduie�?te una dintre cele mai vaste colec�?ii de opere de art�? ale lui Pablo Picasso. Se concentreaz�? în special pe lucr�?rile sale timpurii �?i pe anii s�?i de formare în ora�?. Muzeul este situat în cinci palate medievale din cartierul El Born.",
    "en": "The Picasso Museum in Barcelona houses one of the most extensive collections of artworks by Pablo Picasso. It focuses particularly on his early works and his formative years in the city. The museum is located in five medieval palaces in the El Born district."
  },
  "facts": {
    "de": [
      "Eröffnet im Jahr 1963.",
      "Beherbergt über 4.000 Werke von Picasso.",
      "Erstes Museum, das Picasso gewidmet wurde.",
      "Untergebracht in fünf zusammenhängenden gotischen Palästen.",
      "Zeigt Picassos Serie 'Las Meninas'.",
      "Veranschaulicht Picassos tiefe Verbundenheit mit Barcelona."
    ],
    "hu": [
      "1963-ban nyílt meg.",
      "Több mint 4000 Picasso-művet �?riz.",
      "Az els�? Picassónak szentelt múzeum volt.",
      "�?t egymásba nyíló gótikus palotában található.",
      "Kiállítják itt a 'Las Meninas' sorozatát.",
      "Bemutatja Picasso mély köt�?dését Barcelonához."
    ],
    "ro": [
      "Deschis în 1963.",
      "G�?zduie�?te peste 4.000 de lucr�?ri ale lui Picasso.",
      "Primul muzeu dedicat lui Picasso.",
      "G�?zduit în cinci palate gotice interconectate.",
      "Expune seria 'Las Meninas' a lui Picasso.",
      "Ilustreaz�? leg�?tura profund�? a lui Picasso cu Barcelona."
    ],
    "en": [
      "Opened in 1963.",
      "Houses over 4,000 works by Picasso.",
      "First museum dedicated to Picasso.",
      "Housed in five interconnected Gothic palaces.",
      "Displays Picasso's 'Las Meninas' series.",
      "Illustrates Picasso's deep connection with Barcelona."
    ]
  }
},
{
  "id": "es-montserrat",
  "type": "mountain",
  "parent": "ES-CT",
  "coords": [
    1.836,
    41.604
  ],
  "name": {
    "de": "Kloster Montserrat",
    "hu": "Montserrat kolostor",
    "ro": "M�?n�?stirea Montserrat",
    "en": "Montserrat monastery"
  },
  "image": "/geo-images/spain/montserrat.webp",
  "description": {
    "de": "Das Kloster Montserrat liegt spektakulär eingebettet in den gezackten Felsen des gleichnamigen Gebirges in Katalonien. Es ist ein wichtiges spirituelles Zentrum und beherbergt die berühmte Schwarze Madonna. Besucher genie�?en sowohl die religiöse Bedeutung als auch die atemberaubende Aussicht.",
    "hu": "A Montserrat kolostor látványosan bújik meg a névadó hegyvidék csipkézett sziklái között Katalóniában. Fontos szellemi központ, és a híres Fekete Madonna otthona. A látogatók a vallási jelent�?ségét és a lélegzetelállító kilátást egyaránt élvezik.",
    "ro": "M�?n�?stirea Montserrat este spectaculos înconjurat�? de stâncile zim�?ate ale lan�?ului muntos cu acela�?i nume din Catalonia. Este un centru spiritual important �?i ad�?poste�?te celebra Madon�? Neagr�?. Vizitatorii se bucur�? atât de semnifica�?ia sa religioas�?, cât �?i de priveli�?tile uimitoare.",
    "en": "The Montserrat Monastery is spectacularly nestled in the jagged rocks of the mountain range of the same name in Catalonia. It is an important spiritual center and houses the famous Black Madonna. Visitors enjoy both its religious significance and breathtaking views."
  },
  "facts": {
    "de": [
      "Gegründet im 11. Jahrhundert.",
      "Liegt auf etwa 720 Metern Höhe.",
      "Heimat der 'La Moreneta' (Schwarze Madonna).",
      "Verfügt über einen der ältesten Knabenchöre Europas, die Escolania.",
      "Bietet Zugang über eine Seilbahn und eine Zahnradbahn.",
      "Ein beliebtes Ziel für Pilger und Wanderer."
    ],
    "hu": [
      "A 11. században alapították.",
      "Körülbelül 720 méteres magasságban fekszik.",
      "A 'La Moreneta' (Fekete Madonna) otthona.",
      "Itt működik Európa egyik legrégebbi fiúkórusa, az Escolania.",
      "Drótkötélpályán és fogaskerekűn is megközelíthet�?.",
      "Népszerű célpont zarándokok és túrázók számára."
    ],
    "ro": [
      "Fondat�? în secolul al XI-lea.",
      "Situat�? la aproximativ 720 de metri altitudine.",
      "Casa 'La Moreneta' (Madona Neagr�?).",
      "G�?zduie�?te unul dintre cele mai vechi coruri de b�?ie�?i din Europa, Escolania.",
      "Accesibil�? cu o telecabin�? �?i o cale ferat�? cu cremalier�?.",
      "O destina�?ie popular�? pentru pelerini �?i drume�?i."
    ],
    "en": [
      "Founded in the 11th century.",
      "Located at about 720 meters altitude.",
      "Home to 'La Moreneta' (Black Madonna).",
      "Features one of Europe's oldest boys' choirs, the Escolania.",
      "Offers access via a cable car and a rack railway.",
      "A popular destination for pilgrims and hikers."
    ]
  }
},
{
  "id": "es-valencia-oceanografic",
  "type": "kid-landmark",
  "parent": "ES-VC",
  "coords": [
    -0.352,
    39.453
  ],
  "name": {
    "de": "Oceanogràfic Valencia",
    "hu": "Oceanogràfic Valencia",
    "ro": "Oceanogràfic Valencia",
    "en": "Oceanogràfic Valencia"
  },
  "image": "/geo-images/spain/valencia-oceanografic.webp",
  "description": {
    "de": "Das Oceanogràfic in Valencia ist das grö�?te Aquarium in Europa und ein Paradies für Meeresliebhaber. Es beherbergt tausende von Tieren aus verschiedenen marinen �?kosystemen auf der ganzen Welt. Besonders beeindruckend ist der Unterwassertunnel, in dem man Haie und Rochen hautnah erleben kann.",
    "hu": "A valenciai Oceanogràfic Európa legnagyobb akváriuma és a tenger szerelmeseinek paradicsoma. Több ezer állatnak ad otthont a világ különböz�? tengeri ökoszisztémáiból. Különösen lenyűgöz�? a víz alatti alagút, ahol cápákat és rájákat láthatunk testközelb�?l.",
    "ro": "Oceanogràfic din Valencia este cel mai mare acvariu din Europa �?i un paradis pentru iubitorii de mare. G�?zduie�?te mii de animale din diverse ecosisteme marine din întreaga lume. Deosebit de impresionant este tunelul subacvatic, unde pute�?i vedea rechini �?i pisici de mare de aproape.",
    "en": "The Oceanogràfic in Valencia is the largest aquarium in Europe and a paradise for marine lovers. It houses thousands of animals from various marine ecosystems around the world. Especially impressive is the underwater tunnel where you can experience sharks and rays up close."
  },
  "facts": {
    "de": [
      "Grö�?tes Aquarium in Europa.",
      "Beherbergt über 45.000 Tiere aus 500 Arten.",
      "Architektur von Félix Candela entworfen.",
      "Umfasst arktische, antarktische und tropische Lebensräume.",
      "Besitzt ein gro�?es Delfinarium.",
      "Bietet Programme zum Schutz der Meerestiere an."
    ],
    "hu": [
      "Európa legnagyobb akváriuma.",
      "Több mint 500 faj 45 000 egyedének ad otthont.",
      "Az épületet Félix Candela tervezte.",
      "Sarkvidéki, antarktiszi és trópusi él�?helyeket is bemutat.",
      "Nagy delfináriummal is rendelkezik.",
      "Tengeri állatvédelmi programokat működtet."
    ],
    "ro": [
      "Cel mai mare acvariu din Europa.",
      "G�?zduie�?te peste 45.000 de animale din 500 de specii.",
      "Arhitectur�? proiectat�? de Félix Candela.",
      "Include habitate arctice, antarctice �?i tropicale.",
      "Are un delfinariu mare.",
      "Ofer�? programe de conservare marin�?."
    ],
    "en": [
      "Largest aquarium in Europe.",
      "Houses over 45,000 animals from 500 species.",
      "Architecture designed by Félix Candela.",
      "Includes Arctic, Antarctic, and tropical habitats.",
      "Features a large dolphinarium.",
      "Offers marine conservation programs."
    ]
  }
},
{
  "id": "es-valencia-city-of-arts",
  "type": "landmark",
  "parent": "ES-VC",
  "coords": [
    -0.354,
    39.454
  ],
  "name": {
    "de": "Stadt der Künste und Wissenschaften",
    "hu": "Művészetek és Tudományok Városa",
    "ro": "Ora�?ul Artelor �?i �?tiin�?elor",
    "en": "City of Arts and Sciences"
  },
  "image": "/geo-images/spain/valencia-city-of-arts.webp",
  "description": {
    "de": "Die Stadt der Künste und Wissenschaften ist ein futuristischer Gebäudekomplex in Valencia. Entworfen von Santiago Calatrava, vereint sie Wissenschaft, Kunst und Unterhaltung in einer einzigartigen architektonischen Landschaft. Es ist das moderne Wahrzeichen der Stadt.",
    "hu": "A Művészetek és Tudományok Városa egy futurisztikus épületkomplexum Valenciában. A Santiago Calatrava által tervezett együttes a tudományt, a művészetet és a szórakozást ötvözi egyedülálló építészeti környezetben. Ez a város modern jelképe.",
    "ro": "Ora�?ul Artelor �?i �?tiin�?elor este un complex de cl�?diri futuriste din Valencia. Proiectat de Santiago Calatrava, combin�? �?tiin�?a, arta �?i divertismentul într-un peisaj arhitectural unic. Este reperul modern al ora�?ului.",
    "en": "The City of Arts and Sciences is a futuristic building complex in Valencia. Designed by Santiago Calatrava, it combines science, art, and entertainment in a unique architectural landscape. It is the modern landmark of the city."
  },
  "facts": {
    "de": [
      "Erbaut im ehemaligen Flussbett des Turia.",
      "Entworfen vom Stararchitekten Santiago Calatrava.",
      "Enthält ein IMAX-Kino (L'Hemisfèric).",
      "Umfasst ein interaktives Wissenschaftsmuseum.",
      "Der Palau de les Arts beherbergt das Opernhaus.",
      "Beliebte Kulisse für Science-Fiction-Filme und Serien."
    ],
    "hu": [
      "A Turia folyó kiszáradt medrében épült.",
      "A sztárépítész, Santiago Calatrava tervezte.",
      "Itt található az L'Hemisfèric IMAX mozi.",
      "Interaktív tudományos múzeumot is magában foglal.",
      "A Palau de les Arts ad otthont az operaháznak.",
      "Népszerű forgatási helyszín sci-fi filmekhez és sorozatokhoz."
    ],
    "ro": [
      "Construit în fosta albie a râului Turia.",
      "Proiectat de arhitectul vedet�? Santiago Calatrava.",
      "Con�?ine un cinematograf IMAX (L'Hemisfèric).",
      "Include un muzeu interactiv de �?tiin�?�?.",
      "Palau de les Arts g�?zduie�?te opera.",
      "Decor popular pentru filme �?i seriale SF."
    ],
    "en": [
      "Built in the former riverbed of the Turia.",
      "Designed by star architect Santiago Calatrava.",
      "Contains an IMAX cinema (L'Hemisfèric).",
      "Includes an interactive science museum.",
      "The Palau de les Arts houses the opera house.",
      "Popular backdrop for sci-fi movies and series."
    ]
  }
},
{
  "id": "es-mallorca-palma",
  "type": "city",
  "parent": "ES-IB",
  "coords": [
    2.65,
    39.569
  ],
  "name": {
    "de": "Palma de Mallorca",
    "hu": "Palma de Mallorca",
    "ro": "Palma de Mallorca",
    "en": "Palma de Mallorca"
  },
  "image": "/geo-images/spain/mallorca-palma.webp",
  "description": {
    "de": "Palma ist die Hauptstadt der Baleareninsel Mallorca. Die Stadt beeindruckt durch ihre gewaltige gotische Kathedrale La Seu, die direkt am Meer thront. Neben historischen Sehenswürdigkeiten bietet Palma eine lebhafte Altstadt und wunderschöne Strände in der Nähe.",
    "hu": "Palma Mallorca szigetének f�?városa. A város egyik f�? látványossága a közvetlenül a tengerparton magasodó hatalmas gótikus katedrális, a La Seu. A történelmi látnivalók mellett Palma nyüzsg�? óvárossal és gyönyörű közeli strandokkal büszkélkedhet.",
    "ro": "Palma este capitala insulei baleare Mallorca. Ora�?ul impresioneaz�? prin masiva sa catedral�? gotic�? La Seu, situat�? chiar pe malul m�?rii. Pe lâng�? atrac�?iile istorice, Palma ofer�? un ora�? vechi plin de via�?�? �?i plaje frumoase în apropiere.",
    "en": "Palma is the capital of the Balearic island of Mallorca. The city impresses with its massive Gothic cathedral, La Seu, which sits right on the seafront. In addition to historical sights, Palma offers a lively old town and beautiful nearby beaches."
  },
  "facts": {
    "de": [
      "Hauptstadt der Autonomen Gemeinschaft der Balearen.",
      "Heimat der Kathedrale La Seu (Baubeginn 1229).",
      "Castell de Bellver ist eine seltene runde Burg.",
      "Verfügt über einen gro�?en internationalen Flughafen.",
      "Malerische Altstadt mit engen Gassen.",
      "Beliebtes Ziel für europäischen Tourismus."
    ],
    "hu": [
      "A Baleár-szigetek autonóm közösség f�?városa.",
      "A La Seu katedrális otthona (építése 1229-ben kezd�?dött).",
      "A Castell de Bellver egy ritka, kerek alaprajzú vár.",
      "Nagy nemzetközi repül�?térrel rendelkezik.",
      "Fest�?i óvárosa szűk utcácskákkal van tele.",
      "Az európai turizmus egyik legnépszerűbb célpontja."
    ],
    "ro": [
      "Capitala comunit�?�?ii autonome a Insulelor Baleare.",
      "Casa catedralei La Seu (început�? în 1229).",
      "Castell de Bellver este un castel rotund rar.",
      "Are un aeroport interna�?ional mare.",
      "Ora�? vechi pitoresc, cu str�?zi înguste.",
      "Destina�?ie popular�? pentru turismul european."
    ],
    "en": [
      "Capital of the autonomous community of the Balearic Islands.",
      "Home to the La Seu Cathedral (begun in 1229).",
      "Castell de Bellver is a rare circular castle.",
      "Features a large international airport.",
      "Picturesque old town with narrow streets.",
      "Popular destination for European tourism."
    ]
  }
},
{
  "id": "es-ibiza-town",
  "type": "city",
  "parent": "ES-IB",
  "coords": [
    1.433,
    38.906
  ],
  "name": {
    "de": "Ibiza-Stadt",
    "hu": "Ibiza város",
    "ro": "Ora�?ul Ibiza",
    "en": "Ibiza Town"
  },
  "image": "/geo-images/spain/ibiza-town.webp",
  "description": {
    "de": "Ibiza-Stadt, katalanisch Eivissa, ist weltbekannt für ihr pulsierendes Nachtleben und die historische Altstadt Dalt Vila. Die befestigte Oberstadt, umgeben von Renaissance-Mauern, gehört zum UNESCO-Weltkulturerbe. Die Stadt zieht sowohl Partygänger als auch Kulturliebhaber an.",
    "hu": "Ibiza városa (katalánul Eivissa) világszerte ismert pezsg�? éjszakai életér�?l és történelmi óvárosáról, a Dalt Viláról. A reneszánsz falakkal körülvett er�?dített fels�?város az UNESCO világörökség része. A város a bulizni vágyókat és a kultúra szerelmeseit egyaránt vonzza.",
    "ro": "Ora�?ul Ibiza, în catalan�? Eivissa, este faimos în întreaga lume pentru via�?a de noapte vibrant�? �?i ora�?ul vechi istoric Dalt Vila. Ora�?ul de sus fortificat, înconjurat de ziduri renascentiste, este un sit al Patrimoniului Mondial UNESCO. Ora�?ul atrage atât petrec�?re�?i, cât �?i iubitori de cultur�?.",
    "en": "Ibiza Town, natively Eivissa, is world-renowned for its vibrant nightlife and the historic Dalt Vila old town. The fortified upper town, surrounded by Renaissance walls, is a UNESCO World Heritage site. The city attracts both partygoers and culture lovers."
  },
  "facts": {
    "de": [
      "Lokaler Name ist Eivissa.",
      "Die Altstadt Dalt Vila ist UNESCO-Weltkulturerbe.",
      "Berühmt für weltbekannte Nachtclubs wie Pacha.",
      "Besitzt wichtige archäologische phönizische Stätten.",
      "Der Hafen zieht viele Luxusyachten an.",
      "Beliebte Urlaubsdestination im Mittelmeer."
    ],
    "hu": [
      "Helyi neve Eivissa.",
      "A Dalt Vila óváros UNESCO világörökség.",
      "Olyan világhírű éjszakai klubokról ismert, mint a Pacha.",
      "Jelent�?s föníciai régészeti lel�?helyekkel rendelkezik.",
      "A kiköt�? számos luxusjachtot vonz.",
      "Népszerű nyaralóhely a Földközi-tengeren."
    ],
    "ro": [
      "Numele local este Eivissa.",
      "Ora�?ul vechi Dalt Vila este în Patrimoniul Mondial UNESCO.",
      "Faimos pentru cluburi de noapte de renume mondial precum Pacha.",
      "Are situri arheologice feniciene importante.",
      "Portul atrage multe iahturi de lux.",
      "Destina�?ie popular�? de vacan�?�? în Marea Mediteran�?."
    ],
    "en": [
      "Local name is Eivissa.",
      "The old town Dalt Vila is a UNESCO World Heritage site.",
      "Famous for world-renowned nightclubs like Pacha.",
      "Has important Phoenician archaeological sites.",
      "The harbor attracts many luxury yachts.",
      "Popular holiday destination in the Mediterranean."
    ]
  }
},
{
  "id": "es-tenerife-teide",
  "type": "mountain",
  "parent": "ES-CN",
  "coords": [
    -16.644,
    28.273
  ],
  "name": {
    "de": "Pico del Teide",
    "hu": "Teide",
    "ro": "Muntele Teide",
    "en": "Mount Teide"
  },
  "image": "/geo-images/spain/tenerife-teide.webp",
  "description": {
    "de": "Der Pico del Teide auf der Insel Teneriffa ist der höchste Berg Spaniens. Dieser imposante Schichtvulkan bildet das Zentrum des Teide-Nationalparks, der eine einzigartige Mondlandschaft aufweist. Besucher können mit einer Seilbahn bis fast an den Gipfel fahren.",
    "hu": "A Tenerife szigetén magasodó Teide Spanyolország legmagasabb hegye. Ez az impozáns rétegvulkán alkotja a Teide Nemzeti Park központját, amely egyedülálló, holdszerű tájjal rendelkezik. A látogatók drótkötélpályán majdnem a csúcsig feljuthatnak.",
    "ro": "Muntele Teide de pe insula Tenerife este cel mai înalt munte din Spania. Acest stratovulcan impun�?tor formeaz�? centrul Parcului Na�?ional Teide, care prezint�? un peisaj lunar unic. Vizitatorii pot urca cu telecabina aproape de vârf.",
    "en": "Mount Teide on the island of Tenerife is the highest mountain in Spain. This imposing stratovolcano forms the center of the Teide National Park, which features a unique lunar landscape. Visitors can take a cable car almost to the summit."
  },
  "facts": {
    "de": [
      "Höchster Berg Spaniens (3.715 Meter).",
      "Dritthöchster Vulkan der Erde (vom Meeresgrund gemessen).",
      "Teide-Nationalpark ist UNESCO-Weltnaturerbe.",
      "Letzter Ausbruch in der Teide-Region war 1909.",
      "Eine Seilbahn führt bis auf 3.555 Meter Höhe.",
      "Beliebtes Ziel für Sternenbeobachter."
    ],
    "hu": [
      "Spanyolország legmagasabb hegye (3715 méter).",
      "A világ harmadik legmagasabb vulkánja (a tengerfenékt�?l mérve).",
      "A Teide Nemzeti Park az UNESCO világörökség része.",
      "Utolsó kitörése a Teide régióban 1909-ben volt.",
      "A drótkötélpálya 3555 méteres magasságig visz fel.",
      "A csillagászok és csillagnéz�?k kedvelt célpontja."
    ],
    "ro": [
      "Cel mai înalt munte din Spania (3.715 metri).",
      "Al treilea vulcan ca în�?l�?ime din lume (m�?surat de la fundul oceanului).",
      "Parcul Na�?ional Teide este Patrimoniu Mondial UNESCO.",
      "Ultima erup�?ie în regiunea Teide a fost în 1909.",
      "O telecabin�? urc�? pân�? la 3.555 de metri.",
      "O destina�?ie popular�? pentru observarea stelelor."
    ],
    "en": [
      "Highest mountain in Spain (3,715 meters).",
      "Third highest volcano on Earth (measured from the ocean floor).",
      "Teide National Park is a UNESCO World Heritage site.",
      "Last eruption in the Teide region was in 1909.",
      "A cable car goes up to 3,555 meters.",
      "A popular destination for stargazers."
    ]
  }
},
{
  "id": "es-gran-canaria-dunes",
  "type": "landmark",
  "parent": "ES-CN",
  "coords": [
    -15.566,
    27.737
  ],
  "name": {
    "de": "Dünen von Maspalomas",
    "hu": "Maspalomas homokdűnéi",
    "ro": "Dunele din Maspalomas",
    "en": "Maspalomas Dunes"
  },
  "image": "/geo-images/spain/gran-canaria-dunes.webp",
  "description": {
    "de": "Die Dünen von Maspalomas sind ein faszinierendes Naturschutzgebiet im Süden Gran Canarias. Sie bieten eine spektakuläre Wüstenlandschaft direkt am Atlantischen Ozean. Das Gebiet umfasst auch eine Oase und einen Palmenhain, die eine reiche Vogelwelt anziehen.",
    "hu": "A maspalomasi dűnék lenyűgöz�? természetvédelmi területet alkotnak Gran Canaria déli részén. Látványos sivatagi tájat kínálnak közvetlenül az Atlanti-óceán partján. A terület egy oázist és egy pálmaligetet is magában foglal, amelyek gazdag madárvilágot vonzanak.",
    "ro": "Dunele din Maspalomas sunt o rezerva�?ie natural�? fascinant�? în sudul insulei Gran Canaria. Ofer�? un peisaj de�?ertic spectaculos chiar la Oceanul Atlantic. Zona include, de asemenea, o oaz�? �?i o planta�?ie de palmieri care atrag numeroase p�?s�?ri.",
    "en": "The Maspalomas Dunes are a fascinating nature reserve in the south of Gran Canaria. They offer a spectacular desert landscape right on the Atlantic Ocean. The area also includes an oasis and a palm grove that attract a rich birdlife."
  },
  "facts": {
    "de": [
      "Naturschutzgebiet seit 1987.",
      "Umfasst rund 400 Hektar Fläche.",
      "Die Dünen wandern ständig durch den Wind.",
      "Ein 68 Meter hoher Leuchtturm (Faro) steht in der Nähe.",
      "Die Charca-Oase ist wichtig für Zugvögel.",
      "Beliebter Ort für Touristen und Fotografen."
    ],
    "hu": [
      "1987 óta természetvédelmi terület.",
      "Körülbelül 400 hektáron terül el.",
      "A dűnék a szél miatt folyamatosan vándorolnak.",
      "A közelben áll egy 68 méter magas világítótorony (Faro).",
      "A Charca oázis fontos megálló a költöz�? madaraknak.",
      "Népszerű hely a turisták és fotósok körében."
    ],
    "ro": [
      "Rezerva�?ie natural�? din 1987.",
      "Acoper�? aproximativ 400 de hectare.",
      "Dunele se mi�?c�? constant din cauza vântului.",
      "Un far de 68 de metri (Faro) se afl�? în apropiere.",
      "Oaza Charca este important�? pentru p�?s�?rile migratoare.",
      "Loc popular pentru turi�?ti �?i fotografi."
    ],
    "en": [
      "Nature reserve since 1987.",
      "Covers around 400 hectares.",
      "The dunes are constantly shifting due to the wind.",
      "A 68-meter-high lighthouse (Faro) stands nearby.",
      "The Charca oasis is important for migratory birds.",
      "Popular spot for tourists and photographers."
    ]
  }
},
{
  "id": "es-santander",
  "type": "city",
  "parent": "ES-CB",
  "coords": [
    -3.8,
    43.463
  ],
  "name": {
    "de": "Santander",
    "hu": "Santander",
    "ro": "Santander",
    "en": "Santander"
  },
  "image": "/geo-images/spain/santander.webp",
  "description": {
    "de": "Santander ist die elegante Hauptstadt von Kantabrien an der nordspanischen Küste. Sie ist bekannt für ihre weite Bucht, historische Seebäder und den königlichen Palacio de la Magdalena. Die Stadt kombiniert reiches maritimes Erbe mit moderner Architektur.",
    "hu": "Santander Kantábria elegáns f�?városa Spanyolország északi partján. Tágas öblér�?l, történelmi tengerparti üdül�?helyeir�?l és a királyi Palacio de la Magdalena palotáról ismert. A város ötvözi a gazdag tengerészeti örökséget a modern építészettel.",
    "ro": "Santander este eleganta capital�? a Cantabriei, pe coasta de nord a Spaniei. Este cunoscut�? pentru golful s�?u larg, sta�?iunile balneare istorice �?i palatul regal Palacio de la Magdalena. Ora�?ul combin�? o bogat�? mo�?tenire maritim�? cu arhitectura modern�?.",
    "en": "Santander is the elegant capital of Cantabria on the northern Spanish coast. It is known for its sweeping bay, historic seaside resorts, and the royal Palacio de la Magdalena. The city combines a rich maritime heritage with modern architecture."
  },
  "facts": {
    "de": [
      "Hauptstadt der Region Kantabrien.",
      "Sitz der historischen Banco Santander.",
      "Der Palacio de la Magdalena war Sommerresidenz der Könige.",
      "Gro�?er Brand im Jahr 1941 zerstörte das historische Zentrum.",
      "Bietet schöne Strände wie den Playa del Sardinero.",
      "Das Centro Botín ist ein neues modernes Kunstzentrum."
    ],
    "hu": [
      "Kantábria régió f�?városa.",
      "A történelmi Banco Santander székhelye.",
      "A Palacio de la Magdalena a királyok nyári rezidenciája volt.",
      "Egy 1941-es nagy tűzvész elpusztította a történelmi központot.",
      "Olyan gyönyörű strandokat kínál, mint a Playa del Sardinero.",
      "A Centro Botín a város új modern művészeti központja."
    ],
    "ro": [
      "Capitala regiunii Cantabria.",
      "Sediul b�?ncii istorice Banco Santander.",
      "Palacio de la Magdalena a fost re�?edin�?a de var�? a regilor.",
      "Un mare incendiu în 1941 a distrus centrul istoric.",
      "Ofer�? plaje frumoase precum Playa del Sardinero.",
      "Centro Botín este un nou centru de art�? modern�?."
    ],
    "en": [
      "Capital of the Cantabria region.",
      "Headquarters of the historic Banco Santander.",
      "The Palacio de la Magdalena was the summer residence of kings.",
      "A great fire in 1941 destroyed the historic center.",
      "Offers beautiful beaches like Playa del Sardinero.",
      "The Centro Botín is a new modern art center."
    ]
  }
},
{
  "id": "es-oviedo",
  "type": "city",
  "parent": "ES-AS",
  "coords": [
    -5.844,
    43.362
  ],
  "name": {
    "de": "Oviedo",
    "hu": "Oviedo",
    "ro": "Oviedo",
    "en": "Oviedo"
  },
  "image": "/geo-images/spain/oviedo.webp",
  "description": {
    "de": "Oviedo ist die historische Hauptstadt des Fürstentums Asturien. Die Stadt ist berühmt für ihre einzigartige präromanische Architektur, darunter beeindruckende Kirchen aus dem 9. Jahrhundert. Ihre charmante Altstadt lädt zum Flanieren und Genie�?en von asturischem Apfelwein (Sidra) ein.",
    "hu": "Oviedo az Asztúriai Hercegség történelmi f�?városa. A város egyedülálló preromán építészetér�?l, köztük a 9. századból származó lenyűgöz�? templomairól híres. Hangulatos óvárosa ideális sétákra és a hagyományos asztúriai almabor (sidra) kóstolására.",
    "ro": "Oviedo este capitala istoric�? a Principatului Asturiei. Ora�?ul este faimos pentru arhitectura sa preromanic�? unic�?, inclusiv biserici impresionante din secolul al IX-lea. Ora�?ul s�?u vechi fermec�?tor v�? invit�? s�? v�? plimba�?i �?i s�? v�? bucura�?i de cidrul asturian (sidra).",
    "en": "Oviedo is the historic capital of the Principality of Asturias. The city is famous for its unique pre-Romanesque architecture, including impressive 9th-century churches. Its charming old town invites you to stroll and enjoy Asturian cider (sidra)."
  },
  "facts": {
    "de": [
      "Hauptstadt von Asturien.",
      "Heimat präromanischer Denkmäler (UNESCO-Welterbe).",
      "Bekannt für seine Apfelwein-Kultur (Sidrerías).",
      "Wichtige Station auf dem nördlichen Jakobsweg.",
      "Verleiht jährlich die renommierten Prinzessin-von-Asturien-Preise.",
      "Viele Skulpturen zieren die Fu�?gängerzonen."
    ],
    "hu": [
      "Asztúria f�?városa.",
      "Preromán műemlékek (UNESCO világörökség) otthona.",
      "Almabor-kultúrájáról (sidrerías) ismert.",
      "Az �?szaki Szent Jakab-út fontos állomása.",
      "Itt adják át évente az Asztúria Hercegn�?je díjakat.",
      "Sétálóutcáit számos szobor díszíti."
    ],
    "ro": [
      "Capitala Asturiei.",
      "Acas�? la monumentele preromanice (Patrimoniu UNESCO).",
      "Cunoscut pentru cultura cidrului (sidrerías).",
      "Oprire important�? pe ruta nordic�? a Camino de Santiago.",
      "Acord�? anual prestigioasele premii Prin�?esa Asturiei.",
      "Multe sculpturi împodobesc zonele pietonale."
    ],
    "en": [
      "Capital of Asturias.",
      "Home to pre-Romanesque monuments (UNESCO World Heritage).",
      "Known for its cider culture (sidrerías).",
      "Important stop on the northern Camino de Santiago.",
      "Annually awards the prestigious Princess of Asturias Awards.",
      "Many sculptures adorn the pedestrian zones."
    ]
  }
},
{
  "id": "es-pamplona-bull",
  "type": "city",
  "parent": "ES-NC",
  "coords": [
    -1.645,
    42.817
  ],
  "name": {
    "de": "Pamplona",
    "hu": "Pamplona",
    "ro": "Pamplona",
    "en": "Pamplona"
  },
  "image": "/geo-images/spain/pamplona-bull.webp",
  "description": {
    "de": "Pamplona ist die historische Hauptstadt der Region Navarra im Norden Spaniens. Sie ist weltweit berühmt für das San-Fermín-Fest mit dem traditionellen Stierlauf (Encierro). Jenseits dieses Spektakels bietet die Stadt gut erhaltene Stadtmauern und eine gotische Kathedrale.",
    "hu": "Pamplona az észak-spanyolországi Navarra régió történelmi f�?városa. Világszerte a San Fermín fesztiválról és a hagyományos bikafuttatásról (encierro) híres. Ezen a látványosságon túl a város jó állapotban fennmaradt városfalakkal és egy gótikus katedrálissal büszkélkedhet.",
    "ro": "Pamplona este capitala istoric�? a regiunii Navarra din nordul Spaniei. Este faimoas�? în întreaga lume pentru festivalul San Fermín, cu tradi�?ionala curs�? de tauri (encierro). Dincolo de acest spectacol, ora�?ul ofer�? ziduri bine conservate �?i o catedral�? gotic�?.",
    "en": "Pamplona is the historic capital of the Navarre region in northern Spain. It is world-famous for the San Fermín festival featuring the traditional running of the bulls (encierro). Beyond this spectacle, the city offers well-preserved city walls and a Gothic cathedral."
  },
  "facts": {
    "de": [
      "Berühmt für das San-Fermín-Fest im Juli.",
      "Bekannt gemacht durch Ernest Hemingways Roman 'Fiesta'.",
      "Wichtige Station auf dem französischen Jakobsweg.",
      "Besitzt eine der am besten erhaltenen Zitadellen Europas.",
      "Gegründet um 74 v. Chr. vom römischen General Pompejus.",
      "Verfügt über viele Grünflächen und Parks."
    ],
    "hu": [
      "Híres a júliusi San Fermín fesztiválról.",
      "Ernest Hemingway 'Fiesta' című regénye tette világszerte ismertté.",
      "Fontos megálló a Francia Szent Jakab-úton.",
      "Itt található Európa egyik legjobb állapotban lév�? fellegvára.",
      "Kr. e. 74 körül alapította Pompeius római hadvezér.",
      "Sok zöldterülettel és parkkal rendelkezik."
    ],
    "ro": [
      "Faimos pentru festivalul San Fermín din iulie.",
      "F�?cut cunoscut de romanul lui Ernest Hemingway, 'Fiesta'.",
      "Oprire important�? pe Calea Francez�? a Camino de Santiago.",
      "Are una dintre cele mai bine conservate cet�?�?i din Europa.",
      "Fondat în jurul anului 74 î.Hr. de generalul roman Pompei.",
      "Are multe zone verzi �?i parcuri."
    ],
    "en": [
      "Famous for the San Fermín festival in July.",
      "Made known by Ernest Hemingway's novel 'The Sun Also Rises'.",
      "Important stop on the French Way of the Camino de Santiago.",
      "Has one of the best-preserved citadels in Europe.",
      "Founded around 74 BC by the Roman general Pompey.",
      "Features many green spaces and parks."
    ]
  }
},
{
  "id": "es-zaragoza-pilar",
  "type": "landmark",
  "parent": "ES-AR",
  "coords": [
    -0.878,
    41.656
  ],
  "name": {
    "de": "Basílica del Pilar",
    "hu": "Pilar-bazilika",
    "ro": "Basílica del Pilar",
    "en": "Basílica del Pilar Zaragoza"
  },
  "image": "/geo-images/spain/zaragoza-pilar.webp",
  "description": {
    "de": "Die Basílica de Nuestra Señora del Pilar ist eine prachtvolle Barockkirche in Zaragoza. Sie thront majestätisch am Ufer des Flusses Ebro und zieht jährlich Millionen Pilger an. Der Legende nach erschien hier die Jungfrau Maria dem Apostel Jakobus auf einer Säule (Pilar).",
    "hu": "A Nuestra Señora del Pilar bazilika egy csodálatos barokk templom Zaragozában. Fenségesen magasodik az Ebro folyó partján, és évente zarándokok millióit vonzza. A legenda szerint itt jelent meg Szűz Mária Jakab apostolnak egy oszlopon (pilar).",
    "ro": "Basílica de Nuestra Señora del Pilar este o magnific�? biseric�? baroc�? din Zaragoza. Se înal�?�? maiestuos pe malul râului Ebro �?i atrage milioane de pelerini în fiecare an. Potrivit legendei, Fecioara Maria i-a ap�?rut aici apostolului Iacob pe un stâlp (pilar).",
    "en": "The Basílica de Nuestra Señora del Pilar is a magnificent Baroque church in Zaragoza. It sits majestically on the banks of the Ebro River and attracts millions of pilgrims annually. According to legend, the Virgin Mary appeared here to the Apostle James on a pillar (pilar)."
  },
  "facts": {
    "de": [
      "Gilt als das erste Marienheiligtum der Christenheit.",
      "Die heutige Barockkirche wurde im 17. Jahrhundert begonnen.",
      "Einige der Kuppelfresken stammen von Francisco de Goya.",
      "Befindet sich am Ufer des Flusses Ebro.",
      "Die Fiesta del Pilar wird jeden Oktober gro�? gefeiert.",
      "Zwei Fliegerbomben aus dem Spanischen Bürgerkrieg schlugen ein, explodierten aber nicht."
    ],
    "hu": [
      "A kereszténység els�? Mária-kegyhelyének tartják.",
      "A mai barokk templom építése a 17. században kezd�?dött.",
      "Néhány kupolafreskót Francisco de Goya festett.",
      "Az Ebro folyó partján található.",
      "A Fiesta del Pilar fesztivált minden októberben ünneplik.",
      "A spanyol polgárháborúban két légibomba is eltalálta, de nem robbantak fel."
    ],
    "ro": [
      "Considerat primul altar marian din cre�?tin�?tate.",
      "Actuala biseric�? baroc�? a fost început�? în secolul al XVII-lea.",
      "Unele dintre frescele de pe dom au fost pictate de Francisco de Goya.",
      "Situat�? pe malul râului Ebro.",
      "Festivalul Fiesta del Pilar este s�?rb�?torit în fiecare octombrie.",
      "Dou�? bombe din R�?zboiul Civil Spaniol au lovit-o, dar nu au explodat."
    ],
    "en": [
      "Considered the first Marian shrine in Christianity.",
      "The current Baroque church was begun in the 17th century.",
      "Some of the dome frescoes were painted by Francisco de Goya.",
      "Located on the banks of the Ebro River.",
      "The Fiesta del Pilar is heavily celebrated every October.",
      "Two aerial bombs from the Spanish Civil War hit it but failed to explode."
    ]
  }
},
{
  "id": "es-malaga-alcazaba",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [
    -4.418,
    36.722
  ],
  "name": {
    "de": "Alcazaba von Málaga",
    "hu": "Málagai Alcazaba",
    "ro": "Alcazaba din Málaga",
    "en": "Alcazaba Málaga"
  },
  "image": "/geo-images/spain/malaga-alcazaba.webp",
  "description": {
    "de": "Die Alcazaba von Málaga ist eine maurische Palastanlage aus dem 11. Jahrhundert. Sie thront auf einem Hügel über der Stadt und bot eine hervorragende Verteidigungsposition. Die Festung beeindruckt mit ihren verzierten Gärten, Innenhöfen und der weiten Aussicht auf das Meer.",
    "hu": "A málagai Alcazaba egy 11. századi mór palotaer�?d. A város feletti dombon magasodva kiváló védelmi pozíciót nyújtott. Az er�?d díszes kertjeivel, bels�? udvaraival és a tengerre nyíló széles kilátással nyűgözi le a látogatókat.",
    "ro": "Alcazaba din Málaga este o fort�?rea�?�? palat maur�? din secolul al XI-lea. Este a�?ezat�? pe un deal deasupra ora�?ului, oferind o pozi�?ie defensiv�? excelent�?. Fort�?rea�?a impresioneaz�? prin gr�?dinile sale ornamentate, cur�?ile interioare �?i priveli�?tea larg�? spre mare.",
    "en": "The Alcazaba of Málaga is an 11th-century Moorish palace fortress. Perched on a hill above the city, it offered an excellent defensive position. The fortress impresses with its ornate gardens, courtyards, and sweeping views of the sea."
  },
  "facts": {
    "de": [
      "Erbaut von der Hammudiden-Dynastie im frühen 11. Jahrhundert.",
      "Eine der besterhaltenen Alcazabas in Spanien.",
      "Liegt oberhalb der �?berreste eines antiken römischen Theaters.",
      "Durch einen gemauerten Gang mit der Burg Gibralfaro verbunden.",
      "Kombiniert militärische Befestigung mit Palastarchitektur.",
      "Verfügt über ein ausgeklügeltes Bewässerungssystem."
    ],
    "hu": [
      "A Hammúdida-dinasztia építette a 11. század elején.",
      "Spanyolország egyik legjobb állapotban fennmaradt alcazabája.",
      "Egy ókori római színház romjai felett fekszik.",
      "Egy falazott folyosó köti össze a Gibralfaro várral.",
      "A katonai er�?dítményt palotaépítészettel ötvözi.",
      "Kifinomult öntöz�?rendszerrel rendelkezik."
    ],
    "ro": [
      "Construit de dinastia Hammudid la începutul secolului al XI-lea.",
      "Una dintre cele mai bine conservate alcazaba din Spania.",
      "Situat deasupra ruinelor unui vechi teatru roman.",
      "Conectat�? la Castelul Gibralfaro printr-un coridor cu ziduri.",
      "Combin�? fortifica�?ia militar�? cu arhitectura de palat.",
      "Are un sistem de irigare sofisticat."
    ],
    "en": [
      "Built by the Hammudid dynasty in the early 11th century.",
      "One of the best-preserved alcazabas in Spain.",
      "Situated above the remains of an ancient Roman theater.",
      "Connected to the Gibralfaro Castle by a walled corridor.",
      "Combines military fortification with palace architecture.",
      "Features a sophisticated irrigation system."
    ]
  }
},
{
  "id": "es-ronda",
  "type": "city",
  "parent": "ES-AN",
  "coords": [
    -5.164,
    36.742
  ],
  "name": {
    "de": "Ronda",
    "hu": "Ronda",
    "ro": "Ronda",
    "en": "Ronda"
  },
  "image": "/geo-images/spain/ronda.webp",
  "description": {
    "de": "Ronda ist eine der spektakulärsten Städte Andalusiens, berühmt für ihre Lage auf einem Felsplateau, das durch eine tiefe Schlucht (El Tajo) geteilt wird. Die beeindruckende Brücke Puente Nuevo verbindet die Altstadt mit den neueren Vierteln. Ronda ist auch eine der Wiegen des modernen Stierkampfs.",
    "hu": "Ronda Andalúzia egyik leglátványosabb városa, amely egy mély szurdok (El Tajo) által kettészelt sziklafennsíkon fekszik. A lenyűgöz�? Puente Nuevo híd köti össze az óvárost az újabb negyedekkel. Ronda egyben a modern bikaviadalok egyik bölcs�?je is.",
    "ro": "Ronda este unul dintre cele mai spectaculoase ora�?e din Andaluzia, faimos pentru loca�?ia sa pe un platou stâncos împ�?r�?it de un defileu adânc (El Tajo). Impresionantul pod Puente Nuevo face leg�?tura între ora�?ul vechi �?i cartierele mai noi. Ronda este, de asemenea, unul dintre leag�?nele luptelor cu tauri moderne.",
    "en": "Ronda is one of the most spectacular cities in Andalusia, famous for its location on a rocky plateau divided by a deep gorge (El Tajo). The impressive Puente Nuevo bridge connects the old town with the newer districts. Ronda is also one of the cradles of modern bullfighting."
  },
  "facts": {
    "de": [
      "Die Schlucht El Tajo ist über 100 Meter tief.",
      "Die Puente Nuevo wurde im späten 18. Jahrhundert fertiggestellt.",
      "Die Stierkampfarena Plaza de Toros gehört zu den ältesten Spaniens.",
      "Ernest Hemingway und Orson Welles verbrachten hier viel Zeit.",
      "Wichtiger Ort auf der Route der 'Wei�?en Dörfer' (Pueblos Blancos).",
      "Besitzt gut erhaltene arabische Bäder aus dem 13. Jahrhundert."
    ],
    "hu": [
      "Az El Tajo szurdok több mint 100 méter mély.",
      "A Puente Nuevo (�?j Híd) a 18. század végén készült el.",
      "A Plaza de Toros bikaviadal-aréna Spanyolország egyik legrégebbi ilyen épülete.",
      "Ernest Hemingway és Orson Welles sok id�?t töltött itt.",
      "A 'Fehér falvak' (Pueblos Blancos) útvonalának fontos állomása.",
      "Jó állapotban fennmaradt, 13. századi arab fürd�?kkel rendelkezik."
    ],
    "ro": [
      "Defileul El Tajo are o adâncime de peste 100 de metri.",
      "Podul Puente Nuevo a fost finalizat la sfâr�?itul secolului al XVIII-lea.",
      "Arena de tauri Plaza de Toros este una dintre cele mai vechi din Spania.",
      "Ernest Hemingway �?i Orson Welles au petrecut mult timp aici.",
      "Un loc important pe traseul 'Satelor Albe' (Pueblos Blancos).",
      "Are b�?i arabe bine conservate din secolul al XIII-lea."
    ],
    "en": [
      "The El Tajo gorge is over 100 meters deep.",
      "The Puente Nuevo bridge was completed in the late 18th century.",
      "The Plaza de Toros is one of the oldest bullrings in Spain.",
      "Ernest Hemingway and Orson Welles spent a lot of time here.",
      "An important town on the route of the 'White Villages' (Pueblos Blancos).",
      "Features well-preserved Arab baths from the 13th century."
    ]
  }
},
{
  "id": "es-setenil-de-las-bodegas",
  "type": "city",
  "parent": "ES-AN",
  "coords": [
    -5.18,
    36.857
  ],
  "name": {
    "de": "Setenil de las Bodegas",
    "hu": "Setenil de las Bodegas",
    "ro": "Setenil de las Bodegas",
    "en": "Setenil de las Bodegas"
  },
  "image": "/geo-images/spain/setenil-de-las-bodegas.webp",
  "description": {
    "de": "Setenil de las Bodegas ist ein einzigartiges andalusisches Dorf. Viele seiner wei�? getünchten Häuser sind direkt in die steilen Felswände einer Flussschlucht hineingebaut. Diese ungewöhnliche Höhlenarchitektur spendet im hei�?en Sommer Schatten und Kühle.",
    "hu": "Setenil de las Bodegas egy egyedülálló andalúz falu. Számos fehérre meszelt házát közvetlenül egy folyószurdok meredek sziklafalaiba vájták. Ez a szokatlan barlangépítészet hűvöset és árnyékot nyújt a forró nyárban.",
    "ro": "Setenil de las Bodegas este un sat andaluz unic. Multe dintre casele sale v�?ruite în alb sunt construite direct în stâncile abrupte ale unui defileu al râului. Aceast�? arhitectur�? de pe�?ter�? neobi�?nuit�? ofer�? umbr�? �?i r�?coare în verile fierbin�?i.",
    "en": "Setenil de las Bodegas is a unique Andalusian village. Many of its whitewashed houses are built directly into the steep cliffs of a river gorge. This unusual cave architecture provides shade and coolness during the hot summers."
  },
  "facts": {
    "de": [
      "Gehört zu den 'Pueblos Blancos' (Wei�?en Dörfern) Andalusiens.",
      "Häuser sind teilweise komplett vom überhängenden Felsen bedeckt.",
      "Der Fluss Trejo hat die Schlucht geformt.",
      "Der Name 'Bodegas' stammt von ehemaligen Weinkellereien.",
      "Bekannt für lokale Produkte wie Olivenöl und Chorizo.",
      "War eine stark umkämpfte Festung während der Reconquista."
    ],
    "hu": [
      "Az andalúziai 'Pueblos Blancos' (Fehér falvak) egyike.",
      "A házak egy részét teljesen beborítják a kinyúló sziklák.",
      "A szurdokot a Trejo folyó vájta ki.",
      "A 'Bodegas' név a korábbi borászatokra utal.",
      "Helyi termékeir�?l, például olívaolajáról és chorizójáról is ismert.",
      "Sokat vitatott er�?dítmény volt a Reconquista idején."
    ],
    "ro": [
      "Apar�?ine de 'Pueblos Blancos' (Satele Albe) din Andaluzia.",
      "Casele sunt par�?ial acoperite complet de stânca surplombant�?.",
      "Râul Trejo a sculptat defileul.",
      "Numele 'Bodegas' provine de la fostele crame.",
      "Cunoscut pentru produsele locale precum uleiul de m�?sline �?i chorizo.",
      "A fost o fort�?rea�?�? puternic contestat�? în timpul Reconquistei."
    ],
    "en": [
      "Belongs to the 'Pueblos Blancos' (White Villages) of Andalusia.",
      "Houses are sometimes completely covered by the overhanging rock.",
      "The Trejo river carved the gorge.",
      "The name 'Bodegas' comes from former wineries.",
      "Known for local products like olive oil and chorizo.",
      "Was a heavily contested fortress during the Reconquista."
    ]
  }
},
{
  "id": "es-sierra-nevada-np",
  "type": "mountain",
  "parent": "ES-AN",
  "coords": [
    -3.367,
    37.055
  ],
  "name": {
    "de": "Sierra Nevada Nationalpark",
    "hu": "Sierra Nevada Nemzeti Park",
    "ro": "Parcul Na�?ional Sierra Nevada",
    "en": "Sierra Nevada NP"
  },
  "image": "/geo-images/spain/sierra-nevada-np.webp",
  "description": {
    "de": "Der Sierra Nevada Nationalpark in Südspanien umfasst das höchste Gebirge der Iberischen Halbinsel. Er bietet im Winter exzellente Möglichkeiten zum Skifahren und im Sommer gro�?artige Wanderwege. Die einzigartige Flora und Fauna macht ihn zu einem wertvollen Biosphärenreservat.",
    "hu": "A dél-spanyolországi Sierra Nevada Nemzeti Park az Ibériai-félsziget legmagasabb hegységét foglalja magában. Télen kiváló síelési lehet�?ségeket, nyáron pedig nagyszerű túraútvonalakat kínál. Egyedülálló növény- és állatvilága értékes bioszféra-rezervátummá teszi.",
    "ro": "Parcul Na�?ional Sierra Nevada din sudul Spaniei cuprinde cel mai înalt lan�? muntos din Peninsula Iberic�?. Ofer�? oportunit�?�?i excelente de schi iarna �?i trasee grozave de drume�?ii vara. Flora �?i fauna sa unic�? îl fac o valoroas�? rezerva�?ie a biosferei.",
    "en": "The Sierra Nevada National Park in southern Spain encompasses the highest mountain range on the Iberian Peninsula. It offers excellent skiing opportunities in winter and great hiking trails in summer. Its unique flora and fauna make it a valuable biosphere reserve."
  },
  "facts": {
    "de": [
      "Beinhaltet den Mulhacén (3.482 m), den höchsten Gipfel des Festlands.",
      "Südlichstes Skigebiet Europas.",
      "Seit 1986 UNESCO-Biosphärenreservat.",
      "Heimat vieler endemischer Pflanzenarten.",
      "Ganz in der Nähe der Stadt Granada gelegen.",
      "Bekannt für seine klaren Nächte, ideal für astronomische Observatorien."
    ],
    "hu": [
      "Itt található a Mulhacén (3482 m), a spanyol szárazföld legmagasabb csúcsa.",
      "Európa legdélebbi síterepe.",
      "1986 óta UNESCO bioszféra-rezervátum.",
      "Számos endemikus (csak itt él�?) növényfaj otthona.",
      "Nagyon közel fekszik Granada városához.",
      "Tiszta éjszakáiról ismert, így ideális a csillagászati obszervatóriumok számára."
    ],
    "ro": [
      "Include Mulhacén (3.482 m), cel mai înalt vârf de pe continent.",
      "Cea mai sudic�? sta�?iune de schi din Europa.",
      "Rezerva�?ie a biosferei UNESCO din 1986.",
      "G�?zduie�?te multe specii de plante endemice.",
      "Situat foarte aproape de ora�?ul Granada.",
      "Cunoscut pentru nop�?ile senine, ideale pentru observatoarele astronomice."
    ],
    "en": [
      "Includes Mulhacén (3,482 m), the highest peak in mainland Spain.",
      "Europe's southernmost ski resort.",
      "UNESCO Biosphere Reserve since 1986.",
      "Home to many endemic plant species.",
      "Located very close to the city of Granada.",
      "Known for clear nights, ideal for astronomical observatories."
    ]
  }
},
{
  "id": "es-gibraltar-rock",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [
    -5.349,
    36.143
  ],
  "name": {
    "de": "Fels von Gibraltar",
    "hu": "Gibraltár sziklája",
    "ro": "Stânca Gibraltarului",
    "en": "Rock of Gibraltar (view from Spain)"
  },
  "image": "/geo-images/spain/gibraltar-rock.webp",
  "description": {
    "de": "Der imposante Fels von Gibraltar überblickt die schmale Meerenge zwischen Europa und Afrika. Obwohl Gibraltar ein britisches �?berseegebiet ist, prägt der mächtige Kalksteinfels die andalusische Küstenlinie eindrucksvoll. Er ist berühmt für seine strategische Lage und die wild lebenden Berberaffen.",
    "hu": "A lenyűgöz�? Gibraltár sziklája az Európa és Afrika közötti szűk szorosra néz. Bár Gibraltár brit tengerentúli terület, a hatalmas mészk�?szikla meghatározza az andalúz partvonalat. Különösen stratégiai fekvésér�?l és vadon él�? berber makákóiról ismert.",
    "ro": "Impresionanta Stânc�? a Gibraltarului are vedere spre strâmtoarea îngust�? dintre Europa �?i Africa. De�?i Gibraltar este un teritoriu britanic de peste m�?ri, uria�?a stânc�? de calcar domin�? coasta andaluz�?. Este faimoas�? pentru loca�?ia sa strategic�? �?i macacii berberi s�?lbatici.",
    "en": "The imposing Rock of Gibraltar overlooks the narrow strait between Europe and Africa. Although Gibraltar is a British Overseas Territory, the massive limestone rock heavily shapes the Andalusian coastline. It is famous for its strategic location and wild Barbary macaques."
  },
  "facts": {
    "de": [
      "Britisches �?berseegebiet, umgeben von spanischem Terrain.",
      "Etwa 426 Meter hoher monolithischer Kalksteinfels.",
      "Heimat der einzigen wild lebenden Affenpopulation in Europa.",
      "Bekannt als eine der 'Säulen des Herakles' in der Antike.",
      "Verfügt über ein ausgedehntes Tunnelnetzwerk aus dem Zweiten Weltkrieg.",
      "Bietet bei klarem Wetter einen Blick bis nach Nordafrika."
    ],
    "hu": [
      "Brit tengerentúli terület, spanyol szárazfölddel körülvéve.",
      "Körülbelül 426 méter magas monolit mészk�?szikla.",
      "Európa egyetlen vadon él�? majompopulációjának otthona.",
      "Az ókorban 'Héraklész oszlopai' egyikeként ismerték.",
      "Kiterjedt, második világháborús alagútrendszerrel rendelkezik.",
      "Tiszta id�?ben egészen �?szak-Afrikáig el lehet látni."
    ],
    "ro": [
      "Teritoriu britanic de peste m�?ri, înconjurat de teren spaniol.",
      "Stânc�? monolitic�? de calcar înalt�? de aproximativ 426 de metri.",
      "G�?zduie�?te singura popula�?ie de maimu�?e s�?lbatice din Europa.",
      "Cunoscut ca unul dintre �??Stâlpii lui Hercule�?� din antichitate.",
      "Are o re�?ea extins�? de tuneluri din al Doilea R�?zboi Mondial.",
      "Ofer�? priveli�?ti pân�? în Africa de Nord în zilele senine."
    ],
    "en": [
      "British Overseas Territory surrounded by Spanish land.",
      "Approximately 426-meter high monolithic limestone rock.",
      "Home to the only wild monkey population in Europe.",
      "Known as one of the 'Pillars of Hercules' in antiquity.",
      "Features an extensive network of World War II tunnels.",
      "Offers views as far as North Africa on clear days."
    ]
  }
},
{
  "id": "es-salamanca-university",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [
    -5.666,
    40.961
  ],
  "name": {
    "de": "Altstadt von Salamanca",
    "hu": "Salamanca óvárosa",
    "ro": "Ora�?ul vechi Salamanca",
    "en": "Salamanca Old City"
  },
  "image": "/geo-images/spain/salamanca-university.webp",
  "description": {
    "de": "Die goldene Stadt Salamanca ist berühmt für ihre alte Universität, eine der ältesten in Europa. Die historische Altstadt ist ein architektonisches Juwel im plateresken Stil, geprägt vom goldenen Sandstein (Villamayor-Stein). Der belebte Plaza Mayor ist das Herzstück der Stadt.",
    "hu": "Salamanca, az �??arany város�?� az �?si egyetemér�?l híres, amely az egyik legrégebbi Európában. A történelmi óváros a platereszk stílus építészeti ékköve, amelyet a helyi arany homokk�? határoz meg. A nyüzsg�? Plaza Mayor a város lüktet�? szíve.",
    "ro": "Ora�?ul auriu Salamanca este faimos pentru vechea sa universitate, una dintre cele mai vechi din Europa. Ora�?ul vechi istoric este o bijuterie arhitectural�? în stil plateresc, caracterizat�? de gresie aurie (piatr�? de Villamayor). Animata Plaza Mayor este inima ora�?ului.",
    "en": "The golden city of Salamanca is famous for its ancient university, one of the oldest in Europe. The historic old town is an architectural jewel in the Plateresque style, characterized by golden sandstone. The bustling Plaza Mayor is the heart of the city."
  },
  "facts": {
    "de": [
      "Die Universität wurde 1218 gegründet.",
      "Seit 1988 ist die Altstadt UNESCO-Weltkulturerbe.",
      "Besitzt eine 'Alte' und eine 'Neue' Kathedrale, die miteinander verbunden sind.",
      "Der Plaza Mayor gilt als einer der schönsten Plätze Spaniens.",
      "Touristen suchen traditionell den Frosch (La Rana) an der Universitätsfassade.",
      "Bekannt für den goldenen Glanz der Gebäude bei Sonnenuntergang."
    ],
    "hu": [
      "Az egyetemet 1218-ban alapították.",
      "Az óváros 1988 óta az UNESCO világörökség része.",
      "Egy 'Régi' és egy '�?j' katedrálissal is rendelkezik, amelyek egybeépültek.",
      "A Plaza Mayort Spanyolország egyik legszebb terének tartják.",
      "A turisták hagyományosan a békát (La Rana) keresik az egyetem homlokzatán.",
      "Ismert az épületek naplementekor látható aranyos ragyogásáról."
    ],
    "ro": [
      "Universitatea a fost fondat�? în 1218.",
      "Din 1988, ora�?ul vechi este în Patrimoniul Mondial UNESCO.",
      "Are o catedral�? �??Veche�?� �?i una �??Nou�?�?�, care sunt conectate.",
      "Plaza Mayor este considerat�? una dintre cele mai frumoase pie�?e din Spania.",
      "Turi�?tii caut�? în mod tradi�?ional broasca (La Rana) pe fa�?ada universit�?�?ii.",
      "Cunoscut pentru str�?lucirea aurie a cl�?dirilor la apus."
    ],
    "en": [
      "The university was founded in 1218.",
      "The old town has been a UNESCO World Heritage site since 1988.",
      "Has an 'Old' and a 'New' Cathedral that are joined together.",
      "The Plaza Mayor is considered one of the most beautiful squares in Spain.",
      "Tourists traditionally look for the frog (La Rana) on the university facade.",
      "Known for the golden glow of its buildings at sunset."
    ]
  }
},
{
  "id": "es-burgos-cathedral",
  "type": "landmark",
  "parent": "ES-CL",
  "coords": [
    -3.704,
    42.341
  ],
  "name": {
    "de": "Kathedrale von Burgos",
    "hu": "Burgosi katedrális",
    "ro": "Catedrala din Burgos",
    "en": "Burgos Cathedral"
  },
  "image": "/geo-images/spain/burgos-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Burgos ist ein Meisterwerk der spanischen Gotik. Mit ihren filigranen Türmen und der reichen Innenausstattung dominiert sie die historische Stadt in Kastilien. Sie ist nicht nur ein architektonisches Wunder, sondern beherbergt auch das Grab des legendären Nationalhelden El Cid.",
    "hu": "A burgosi katedrális a spanyol gótika mesterműve. Csipkézett tornyaival és gazdag bels�? terével uralja a kasztíliai történelmi várost. Nemcsak építészeti csoda, hanem itt található a legendás nemzeti h�?s, El Cid sírja is.",
    "ro": "Catedrala din Burgos este o capodoper�? a goticului spaniol. Cu turnurile sale filigranate �?i interiorul bogat, domin�? ora�?ul istoric din Castilia. Nu este doar o minune arhitectural�?, ci ad�?poste�?te �?i mormântul legendarului erou na�?ional El Cid.",
    "en": "The Burgos Cathedral is a masterpiece of Spanish Gothic architecture. With its filigree spires and rich interior, it dominates the historic city in Castile. It is not only an architectural marvel but also houses the tomb of the legendary national hero El Cid."
  },
  "facts": {
    "de": [
      "Baubeginn im Jahr 1221.",
      "Als einzige spanische Kathedrale eigenständig UNESCO-Weltkulturerbe.",
      "Hervorragendes Beispiel der französischen Gotik in Spanien.",
      "Beherbergt das Grab von El Cid und seiner Frau Doña Jimena.",
      "Wichtige Station auf dem Camino Francés (Jakobsweg).",
      "Bekannt für die goldene Treppe (Escalera Dorada)."
    ],
    "hu": [
      "Az építkezés 1221-ben kezd�?dött.",
      "Az egyetlen spanyol katedrális, amely önállóan is UNESCO világörökség.",
      "A francia gótika kiemelked�? példája Spanyolországban.",
      "Itt található El Cid és felesége, Doña Jimena sírja.",
      "A Francia Szent Jakab-út (Camino Francés) fontos állomása.",
      "Híres az Arany lépcs�?jér�?l (Escalera Dorada)."
    ],
    "ro": [
      "Construc�?ia a început în 1221.",
      "Singura catedral�? spaniol�? care este un sit independent al Patrimoniului Mondial UNESCO.",
      "Un exemplu remarcabil al goticului francez în Spania.",
      "Ad�?poste�?te mormântul lui El Cid �?i al so�?iei sale Doña Jimena.",
      "Oprire important�? pe Camino Francés (Calea Sfântului Iacob).",
      "Cunoscut�? pentru scara de aur (Escalera Dorada)."
    ],
    "en": [
      "Construction began in 1221.",
      "The only Spanish cathedral independently designated a UNESCO World Heritage site.",
      "An outstanding example of French Gothic in Spain.",
      "Houses the tomb of El Cid and his wife Doña Jimena.",
      "An important stop on the Camino Francés (Way of St. James).",
      "Known for the Golden Staircase (Escalera Dorada)."
    ]
  }
},
{
  "id": "es-leon-cathedral",
  "type": "landmark",
  "parent": "ES-CL",
  "coords": [
    -5.567,
    42.599
  ],
  "name": {
    "de": "Kathedrale von León",
    "hu": "Leóni katedrális",
    "ro": "Catedrala din León",
    "en": "León Cathedral"
  },
  "image": "/geo-images/spain/leon-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von León, auch bekannt als 'Haus des Lichts', ist eines der feinsten Beispiele der Hochgotik. Ihre au�?ergewöhnlich gro�?en Buntglasfenster tauchen das Innere in ein faszinierendes Lichtspiel. Sie ist ein spiritueller Höhepunkt auf dem Pilgerweg nach Santiago de Compostela.",
    "hu": "A leóni katedrális, amelyet 'A Fény Házaként' is ismernek, az érett gótika egyik legszebb példája. Kivételesen nagy ólomüveg ablakai lenyűgöz�? fényjátékba öltöztetik a bels�? teret. A Santiago de Compostelába vezet�? zarándokút egyik spirituális csúcspontja.",
    "ro": "Catedrala din León, cunoscut�? �?i sub numele de �??Casa Luminii�?�, este unul dintre cele mai fine exemple de arhitectur�? gotic�? înalt�?. Vitraliile sale excep�?ional de mari scald�? interiorul într-un joc fascinant de lumini. Este un punct culminant spiritual pe traseul de pelerinaj spre Santiago de Compostela.",
    "en": "The León Cathedral, also known as the 'House of Light', is one of the finest examples of High Gothic architecture. Its exceptionally large stained-glass windows bathe the interior in a fascinating play of light. It is a spiritual highlight on the pilgrimage route to Santiago de Compostela."
  },
  "facts": {
    "de": [
      "Gebaut auf den Ruinen römischer Bäder.",
      "Besitzt über 1.700 Quadratmeter historische Buntglasfenster.",
      "Das Mauerwerk wurde extrem reduziert, um riesige Fenster zu ermöglichen.",
      "Wird oft mit der französischen Kathedrale von Amiens verglichen.",
      "Die Fenster stammen grö�?tenteils aus dem 13. bis 16. Jahrhundert.",
      "Beherbergt ein bedeutendes Diözesanmuseum."
    ],
    "hu": [
      "Római fürd�?k romjaira épült.",
      "Több mint 1700 négyzetméternyi történelmi ólomüveg ablakkal rendelkezik.",
      "A falazatot a minimumra csökkentették a hatalmas ablakok érdekében.",
      "Gyakran hasonlítják a francia amiens-i katedrálishoz.",
      "Az ablakok többsége a 13. és a 16. század között készült.",
      "Jelent�?s egyházmegyei múzeumnak ad otthont."
    ],
    "ro": [
      "Construit�? pe ruinele unor b�?i romane.",
      "Are peste 1.700 de metri p�?tra�?i de vitralii istorice.",
      "Zid�?ria a fost redus�? la extrem pentru a permite ferestre uria�?e.",
      "Adesea comparat�? cu catedrala francez�? din Amiens.",
      "Ferestrele dateaz�? în mare parte din secolele XIII - XVI.",
      "G�?zduie�?te un important muzeu eparhial."
    ],
    "en": [
      "Built over the ruins of Roman baths.",
      "Features over 1,700 square meters of historic stained-glass windows.",
      "Masonry was reduced to a minimum to allow for huge windows.",
      "Often compared to the French Cathedral of Amiens.",
      "The windows mostly date from the 13th to the 16th century.",
      "Houses an important diocesan museum."
    ]
  }
},
{
  "id": "es-camino-santiago",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [
    -8.547,
    42.881
  ],
  "name": {
    "de": "Jakobsweg",
    "hu": "Szent Jakab-út",
    "ro": "Camino de Santiago",
    "en": "Camino de Santiago"
  },
  "image": "/geo-images/spain/camino-santiago.webp",
  "description": {
    "de": "Der Jakobsweg (Camino de Santiago) ist ein historisches Netzwerk von Pilgerwegen, die alle zum Grab des Apostels Jakobus in Santiago de Compostela führen. Pilger aus aller Welt wandern wochenlang durch Nordspanien. Diese spirituelle und kulturelle Reise prägt die Identität ganzer Regionen.",
    "hu": "A Szent Jakab-út (Camino de Santiago) zarándokutak történelmi hálózata, amelyek mindegyike Jakab apostol Santiago de Compostela-i sírjához vezet. A világ minden tájáról érkez�? zarándokok heteken át gyalogolnak �?szak-Spanyolországon keresztül. Ez a spirituális és kulturális utazás egész régiók identitását határozza meg.",
    "ro": "Camino de Santiago este o re�?ea istoric�? de rute de pelerinaj, toate ducând la mormântul Apostolului Iacob din Santiago de Compostela. Pelerini din toat�? lumea merg pe jos prin nordul Spaniei timp de s�?pt�?mâni. Aceast�? c�?l�?torie spiritual�? �?i cultural�? contureaz�? identitatea unor regiuni întregi.",
    "en": "The Camino de Santiago is a historic network of pilgrimage routes, all leading to the tomb of the Apostle James in Santiago de Compostela. Pilgrims from all over the world hike through northern Spain for weeks. This spiritual and cultural journey shapes the identity of entire regions."
  },
  "facts": {
    "de": [
      "Der 'Camino Francés' ist die populärste Route.",
      "Das Symbol der Pilger ist die Jakobsmuschel.",
      "Die Wege sind UNESCO-Weltkulturerbe.",
      "Pilger erhalten am Ziel die Urkunde 'Compostela'.",
      "Man muss mindestens 100 km wandern, um die Urkunde zu erhalten.",
      "Fördert einen starken internationalen Kulturaustausch."
    ],
    "hu": [
      "A legnépszerűbb útvonal a 'Camino Francés'.",
      "A zarándokok szimbóluma a fésűkagyló.",
      "Az útvonalak az UNESCO világörökség részét képezik.",
      "A zarándokok a célban megkapják a 'Compostela' oklevelet.",
      "Legalább 100 km-t kell gyalogolni az oklevél megszerzéséhez.",
      "Er�?s nemzetközi kulturális cserét mozdít el�?."
    ],
    "ro": [
      "'Camino Francés' este cea mai popular�? rut�?.",
      "Simbolul pelerinilor este scoica scallop.",
      "Traseele sunt în Patrimoniul Mondial UNESCO.",
      "Pelerinii primesc certificatul 'Compostela' la destina�?ie.",
      "Trebuie s�? mergi pe jos cel pu�?in 100 km pentru a primi certificatul.",
      "Promoveaz�? un puternic schimb cultural interna�?ional."
    ],
    "en": [
      "The 'Camino Francés' is the most popular route.",
      "The symbol of the pilgrims is the scallop shell.",
      "The routes are a UNESCO World Heritage site.",
      "Pilgrims receive the 'Compostela' certificate upon arrival.",
      "You must walk at least 100 km to earn the certificate.",
      "Fosters strong international cultural exchange."
    ]
  }
},
{
  "id": "es-galicia-coast",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [
    -9.289,
    42.901
  ],
  "name": {
    "de": "Cíes-Inseln",
    "hu": "Cíes-szigetek",
    "ro": "Insulele Cíes",
    "en": "Cíes Islands"
  },
  "image": "/geo-images/spain/galicia-coast.webp",
  "description": {
    "de": "Die Cíes-Inseln vor der galicischen Küste sind ein streng geschütztes Naturparadies. Sie bieten einige der schönsten Strände der Welt, wie den Playa de Rodas, mit wei�?em Sand und kristallklarem Wasser. Es gibt hier keine Autos, sondern nur unberührte Natur und Wanderwege.",
    "hu": "A galíciai partoknál fekv�? Cíes-szigetek szigorúan védett természeti paradicsom. A világ legszebb strandjai közé tartoznak az itt találhatóak, mint például a fehér homokos, kristálytiszta vizű Playa de Rodas. Itt nincsenek autók, csak érintetlen természet és túraútvonalak.",
    "ro": "Insulele Cíes de pe coasta Galiciei sunt un paradis natural strict protejat. Ofer�? unele dintre cele mai frumoase plaje din lume, precum Playa de Rodas, cu nisip alb �?i ape cristaline. Nu exist�? ma�?ini aici, doar natur�? neatins�? �?i trasee de drume�?ii.",
    "en": "The Cíes Islands off the Galician coast are a strictly protected natural paradise. They offer some of the most beautiful beaches in the world, such as Playa de Rodas, with white sand and crystal-clear water. There are no cars here, only pristine nature and hiking trails."
  },
  "facts": {
    "de": [
      "Teil des Nationalparks Atlantische Inseln von Galicien.",
      "Die Inseln waren in der Vergangenheit Zufluchtsorte für Piraten.",
      "Der Playa de Rodas wurde oft zum besten Strand der Welt gewählt.",
      "Tägliche Besucherzahlen sind streng limitiert, um die Natur zu schützen.",
      "Beherbergen die weltweit grö�?te Möwenkolonie.",
      "Das Wasserbleibt selbst im Hochsommer sehr erfrischend kalt."
    ],
    "hu": [
      "A Galíciai Atlanti-szigetek Nemzeti Park része.",
      "A múltban a szigetek kalózok menedékhelyéül szolgáltak.",
      "A Playa de Rodast gyakran a világ legjobb strandjának választják.",
      "A napi látogatók száma a természet védelme érdekében szigorúan korlátozott.",
      "A világ legnagyobb sirálykolóniájának adnak otthont.",
      "A víz még nyár közepén is frissít�?en hideg marad."
    ],
    "ro": [
      "Parte a Parcului Na�?ional Insulele Atlantice din Galicia.",
      "�?n trecut, insulele au fost refugii pentru pira�?i.",
      "Playa de Rodas a fost adesea votat�? cea mai bun�? plaj�? din lume.",
      "Num�?rul de vizitatori zilnici este strict limitat pentru a proteja natura.",
      "G�?zduiesc cea mai mare colonie de pesc�?ru�?i din lume.",
      "Apa r�?mâne foarte rece �?i revigorant�? chiar �?i la mijlocul verii."
    ],
    "en": [
      "Part of the Atlantic Islands of Galicia National Park.",
      "The islands were pirate hideouts in the past.",
      "Playa de Rodas has often been voted the best beach in the world.",
      "Daily visitor numbers are strictly limited to protect nature.",
      "Home to the world's largest seagull colony.",
      "The water remains refreshingly cold even in midsummer."
    ]
  }
},
{
  "id": "es-merida-roman",
  "type": "historical",
  "parent": "ES-EX",
  "coords": [
    -6.343,
    38.916
  ],
  "name": {
    "de": "Römisches Theater Mérida",
    "hu": "Méridai római színház",
    "ro": "Teatrul roman din Mérida",
    "en": "Mérida Roman Theatre"
  },
  "image": "/geo-images/spain/merida-roman.webp",
  "description": {
    "de": "Das Römische Theater in Mérida ist eines der prächtigsten noch erhaltenen Bauwerke aus der Zeit des Römischen Reiches auf der iberischen Halbinsel. Die antike Hauptstadt Lusitanias beeindruckt mit ihrer reich verzierten Bühnenwand. Noch heute wird es jeden Sommer für klassische Theaterfestivals genutzt.",
    "hu": "A méridai római színház a Római Birodalom korának egyik legcsodálatosabb, épségben fennmaradt építménye az Ibériai-félszigeten. Lusitania egykori f�?városa lenyűgöz�?en díszített színpadi falával nyűgözi le a látogatókat. Minden nyáron ma is klasszikus színházi fesztiválok helyszíne.",
    "ro": "Teatrul roman din Mérida este una dintre cele mai magnifice structuri supravie�?uitoare din perioada Imperiului Roman din Peninsula Iberic�?. Fosta capital�? a Lusitaniei impresioneaz�? prin peretele scenic bogat ornamentat. Chiar �?i ast�?zi este folosit în fiecare var�? pentru festivaluri de teatru clasic.",
    "en": "The Roman Theatre in Mérida is one of the most magnificent surviving structures from the Roman Empire period on the Iberian Peninsula. The ancient capital of Lusitania impresses with its richly decorated stage wall. It is still used every summer for classical theater festivals."
  },
  "facts": {
    "de": [
      "Erbaut um die Jahre 16 bis 15 v. Chr.",
      "Bot Platz für etwa 6.000 Zuschauer.",
      "Teil des Archäologischen Ensembles von Mérida (UNESCO-Welterbe).",
      "Die Bühne wird von korinthischen Marmorsäulen geschmückt.",
      "Befindet sich neben einem fast ebenso gut erhaltenen Amphitheater.",
      "War jahrhundertelang unter Erde und Schutt begraben."
    ],
    "hu": [
      "Kr. e. 16 és 15 körül épült.",
      "Körülbelül 6000 néz�? számára biztosított helyet.",
      "A méridai régészeti együttes (UNESCO világörökség) része.",
      "A színpadot korinthoszi márványoszlopok díszítik.",
      "Közvetlenül egy szintén jó állapotú amfiteátrum mellett található.",
      "�?vszázadokon át föld és törmelék borította."
    ],
    "ro": [
      "Construit în jurul anilor 16 - 15 î.Hr.",
      "Oferea locuri pentru aproximativ 6.000 de spectatori.",
      "Parte a Ansamblului Arheologic de la Mérida (Patrimoniu UNESCO).",
      "Scena este decorat�? cu coloane corintice de marmur�?.",
      "Situat lâng�? un amfiteatru aproape la fel de bine conservat.",
      "A fost îngropat sub p�?mânt �?i d�?râm�?turi timp de secole."
    ],
    "en": [
      "Built around 16 to 15 BC.",
      "Provided seating for about 6,000 spectators.",
      "Part of the Archaeological Ensemble of Mérida (UNESCO World Heritage).",
      "The stage is decorated with Corinthian marble columns.",
      "Located next to an almost equally well-preserved amphitheater.",
      "Was buried under earth and rubble for centuries."
    ]
  }
},
{
  "id": "es-toledo-cathedral",
  "type": "historical",
  "parent": "ES-CM",
  "coords": [
    -4.024,
    39.857
  ],
  "name": {
    "de": "Kathedrale von Toledo",
    "hu": "Toledói katedrális",
    "ro": "Catedrala din Toledo",
    "en": "Toledo Cathedral"
  },
  "image": "/geo-images/spain/toledo-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Toledo ist eine prachtvolle gotische Kirche von immenser historischer Bedeutung in Spanien. Die 'Primas-Kathedrale' spiegelt mit ihrem monumentalen Hauptaltar, dem reich verzierten Chor und Gemälden von El Greco gro�?en Reichtum wider. Sie wurde an der Stelle einer ehemaligen gro�?en Moschee errichtet.",
    "hu": "A toledói katedrális egy pompás gótikus templom, amely hatalmas történelmi jelent�?séggel bír Spanyolországban. A 'Prímás katedrális' hatalmas f�?oltárával, gazdagon díszített kórusával és El Greco festményeivel mérhetetlen gazdagságot tükröz. Egy korábbi nagymecset helyére épült.",
    "ro": "Catedrala din Toledo este o biseric�? gotic�? magnific�? de o importan�?�? istoric�? imens�? în Spania. �??Catedrala Primat�?� reflect�? o mare bog�?�?ie cu altarul s�?u principal monumental, corul ornamentat �?i picturile lui El Greco. A fost construit�? pe locul unei foste mari moschei.",
    "en": "The Toledo Cathedral is a magnificent Gothic church of immense historical significance in Spain. The 'Primate Cathedral' reflects vast wealth with its monumental main altar, ornate choir, and paintings by El Greco. It was built on the site of a former great mosque."
  },
  "facts": {
    "de": [
      "Gilt als das Opus Magnum der spanischen Gotik.",
      "Baubeginn war im Jahr 1226 unter Ferdinand III.",
      "Das gotische Gebäude enthält auch Mudéjar-Elemente.",
      "Der beeindruckende Hauptaltar (Retablo) zeigt Szenen aus dem Leben Christi.",
      "Die Sakristei ist eine Kunstgalerie mit Werken von Tizian und Goya.",
      "El Grecos berühmtes Gemälde 'Die Entkleidung Christi' hängt hier."
    ],
    "hu": [
      "A spanyol gótika mesterművének (Opus Magnum) tartják.",
      "�?pítése 1226-ban kezd�?dött III. Ferdinánd alatt.",
      "A gótikus épület mudéjar stíluselemeket is tartalmaz.",
      "A lenyűgöz�? f�?oltár (retablo) Krisztus életének jeleneteit ábrázolja.",
      "A sekrestye valóságos művészeti galéria Tiziano és Goya műveivel.",
      "Itt található El Greco híres festménye, 'Krisztus megfosztása ruháitól'."
    ],
    "ro": [
      "Considerat�? �??Opus Magnum�?� a goticului spaniol.",
      "Construc�?ia a început în 1226 sub Ferdinand al III-lea.",
      "Cl�?direa gotic�? con�?ine �?i elemente mudéjar.",
      "Altarul principal impresionant (retablo) arat�? scene din via�?a lui Hristos.",
      "Sacristia este o galerie de art�? cu lucr�?ri de Titian �?i Goya.",
      "Faimosul tablou al lui El Greco �??Dezbr�?carea lui Hristos�?� atârn�? aici."
    ],
    "en": [
      "Considered the 'Opus Magnum' of Spanish Gothic architecture.",
      "Construction began in 1226 under Ferdinand III.",
      "The Gothic building also features Mudéjar elements.",
      "The impressive main altar (retablo) shows scenes from the life of Christ.",
      "The sacristy is an art gallery with works by Titian and Goya.",
      "El Greco's famous painting 'The Disrobing of Christ' hangs here."
    ]
  }
},
{
  "id": "es-cuenca-hanging",
  "type": "landmark",
  "parent": "ES-CM",
  "coords": [
    -2.134,
    40.076
  ],
  "name": {
    "de": "Hängende Häuser von Cuenca",
    "hu": "Cuenca függ�?házai",
    "ro": "Casele suspendate din Cuenca",
    "en": "Cuenca Hanging Houses"
  },
  "image": "/geo-images/spain/cuenca-hanging.webp",
  "description": {
    "de": "Die Hängenden Häuser (Casas Colgadas) von Cuenca sind ein architektonisches Wunder der mittelalterlichen Stadt. Sie kleben scheinbar schwerelos an den steilen Klippen über der Schlucht des Flusses Huécar. Heute sind sie das bekannteste Symbol der Stadt, die zum UNESCO-Weltkulturerbe gehört.",
    "hu": "Cuenca függ�?házai (Casas Colgadas) a középkori város építészeti csodái. Szinte súlytalannak tűnve tapadnak a Huécar folyó szurdoka feletti meredek sziklákhoz. Ma ezek jelentik az UNESCO világörökség részét képez�? város legismertebb szimbólumát.",
    "ro": "Casele suspendate (Casas Colgadas) din Cuenca sunt o minune arhitectural�? a ora�?ului medieval. Se aga�?�? aparent f�?r�? greutate de stâncile abrupte de deasupra defileului râului Huécar. Ast�?zi sunt cel mai faimos simbol al ora�?ului, care este un sit al Patrimoniului Mondial UNESCO.",
    "en": "The Hanging Houses (Casas Colgadas) of Cuenca are an architectural marvel of the medieval city. They cling seemingly weightlessly to the steep cliffs above the Huécar river gorge. Today they are the most famous symbol of the city, which is a UNESCO World Heritage site."
  },
  "facts": {
    "de": [
      "Nur wenige der ursprünglichen hängenden Häuser existieren noch.",
      "Sie wurden vermutlich im 15. Jahrhundert erbaut.",
      "Ihre Holzbalkone ragen dramatisch über den Abgrund.",
      "Eines der Häuser beherbergt das Museum für abstrakte spanische Kunst.",
      "Cuenca liegt spektakulär zwischen den Flüssen Júcar und Huécar.",
      "Die Brücke San Pablo bietet die beste Aussicht auf die Häuser."
    ],
    "hu": [
      "Az eredeti függ�?házakból már csak kevés maradt fenn.",
      "Feltehet�?en a 15. században épültek.",
      "Fából készült erkélyeik drámaian nyúlnak a szakadék fölé.",
      "Az egyik házban működik a Spanyol Absztrakt Művészeti Múzeum.",
      "Cuenca látványos helyen, a Júcar és a Huécar folyók között fekszik.",
      "A San Pablo hídról nyílik a legjobb kilátás a házakra."
    ],
    "ro": [
      "Doar câteva dintre casele suspendate originale mai exist�?.",
      "Probabil au fost construite în secolul al XV-lea.",
      "Balcoanele lor de lemn se întind dramatic peste pr�?pastie.",
      "Una dintre case g�?zduie�?te Muzeul de Art�? Abstract�? Spaniol�?.",
      "Cuenca este situat�? spectaculos între râurile Júcar �?i Huécar.",
      "Podul San Pablo ofer�? cea mai bun�? vedere asupra caselor."
    ],
    "en": [
      "Only a few of the original hanging houses still exist.",
      "They were probably built in the 15th century.",
      "Their wooden balconies protrude dramatically over the abyss.",
      "One of the houses hosts the Museum of Spanish Abstract Art.",
      "Cuenca is spectacularly situated between the Júcar and Huécar rivers.",
      "The San Pablo bridge offers the best view of the houses."
    ]
  }
},
{
  "id": "es-murcia-cathedral",
  "type": "landmark",
  "parent": "ES-MU",
  "coords": [
    -1.13,
    37.983
  ],
  "name": {
    "de": "Kathedrale von Murcia",
    "hu": "Murciai katedrális",
    "ro": "Catedrala din Murcia",
    "en": "Murcia Cathedral"
  },
  "image": "/geo-images/spain/murcia-cathedral.webp",
  "description": {
    "de": "Die Kathedrale Santa María in Murcia ist das architektonische Meisterwerk der Region. Ihre faszinierende Hauptfassade ist ein herausragendes Beispiel des spanischen Barocks. Der hohe Glockenturm und die Mischung aus Gotik, Renaissance und Barock machen das Bauwerk einzigartig.",
    "hu": "A murciai Santa María katedrális a régió építészeti mesterműve. Lenyűgöz�? f�?homlokzata a spanyol barokk egyik kiemelked�? példája. Magas harangtornya, valamint a gótika, a reneszánsz és a barokk stílusjegyek keveredése teszi egyedülállóvá az építményt.",
    "ro": "Catedrala Santa María din Murcia este capodopera arhitectural�? a regiunii. Fa�?ada sa principal�? fascinant�? este un exemplu remarcabil al barocului spaniol. Turnul s�?u înalt al clopotni�?ei �?i amestecul de stiluri gotic, renascentist �?i baroc fac din cl�?dire una unic�?.",
    "en": "The Cathedral of Santa María in Murcia is the architectural masterpiece of the region. Its fascinating main facade is an outstanding example of Spanish Baroque. Its high bell tower and the mix of Gothic, Renaissance, and Baroque styles make the building unique."
  },
  "facts": {
    "de": [
      "Der Bau begann 1394 auf den Grundmauern einer Moschee.",
      "Die barocke Hauptfassade wurde im 18. Jahrhundert fertiggestellt.",
      "Der Glockenturm ist mit 90 Metern der zweithöchste Spaniens.",
      "Die Vélez-Kapelle besticht durch prächtige Spätgotik.",
      "Beherbergt in der Hauptkapelle das Herz von König Alfons X.",
      "Das Glockenspiel hat 25 Glocken, jede mit einem eigenen Namen."
    ],
    "hu": [
      "�?pítése 1394-ben kezd�?dött egy mecset alapjain.",
      "A barokk f�?homlokzat a 18. században készült el.",
      "A 90 méter magas harangtorony Spanyolország második legmagasabbja.",
      "A Vélez-kápolna káprázatos kés�? gótikus stílusával hódít.",
      "A f�? kápolnában �?rzik X. Alfonz király szívét.",
      "Harangjátéka 25 harangból áll, melyek mindegyike saját nevet visel."
    ],
    "ro": [
      "Construc�?ia a început în 1394 pe funda�?iile unei moschei.",
      "Fa�?ada principal�? baroc�? a fost finalizat�? în secolul al XVIII-lea.",
      "Turnul clopotni�?ei de 90 de metri este al doilea cel mai înalt din Spania.",
      "Capela Vélez impresioneaz�? prin goticul s�?u târziu magnific.",
      "G�?zduie�?te inima regelui Alfonso X în capela principal�?.",
      "Carilonul are 25 de clopote, fiecare cu propriul nume."
    ],
    "en": [
      "Construction began in 1394 on the foundations of a mosque.",
      "The Baroque main facade was completed in the 18th century.",
      "The 90-meter bell tower is the second highest in Spain.",
      "The Vélez Chapel impresses with its magnificent late Gothic style.",
      "Houses the heart of King Alfonso X in the main chapel.",
      "The carillon has 25 bells, each with its own name."
    ]
  }
},
{
  "id": "es-logrono-wine",
  "type": "city",
  "parent": "ES-RI",
  "coords": [
    -2.445,
    42.466
  ],
  "name": {
    "de": "Logroño",
    "hu": "Logroño",
    "ro": "Logroño",
    "en": "Logroño (wine)"
  },
  "image": "/geo-images/spain/logrono-wine.webp",
  "description": {
    "de": "Logroño ist die Hauptstadt der Region La Rioja und ein Zentrum der spanischen Weinkultur. Die Stadt ist weltweit für ihre exzellenten Rotweine bekannt. Ein Highlight für Besucher ist die Calle del Laurel, eine Stra�?e voller Tapas-Bars, in denen man lokale Weine und Spezialitäten probiert.",
    "hu": "Logroño a La Rioja régió f�?városa és a spanyol borkultúra központja. A város világszerte ismert kiváló vörösborairól. A látogatók számára kiemelked�? élményt nyújt a Calle del Laurel, a tapas bárokkal teli utca, ahol helyi borokat és különlegességeket kóstolhatnak.",
    "ro": "Logroño este capitala regiunii La Rioja �?i un centru al culturii vinului spaniol. Ora�?ul este cunoscut în întreaga lume pentru vinurile sale ro�?ii excelente. Un punct culminant pentru vizitatori este Calle del Laurel, o strad�? plin�? de baruri de tapas unde se pot degusta vinuri �?i specialit�?�?i locale.",
    "en": "Logroño is the capital of the La Rioja region and a center of Spanish wine culture. The city is known worldwide for its excellent red wines. A highlight for visitors is the Calle del Laurel, a street full of tapas bars where you can taste local wines and specialties."
  },
  "facts": {
    "de": [
      "Hauptstadt der kleinsten autonomen Region Spaniens (La Rioja).",
      "Wichtiger Halt auf dem französischen Jakobsweg.",
      "Die Calle del Laurel bietet über 60 Tapas-Bars.",
      "Jedes Jahr im September findet das Weinlesefest San Mateo statt.",
      "Umgeben von Hunderten von renommierten Weingütern (Bodegas).",
      "Der Fluss Ebro flie�?t malerisch durch die Stadt."
    ],
    "hu": [
      "Spanyolország legkisebb autonóm régiójának (La Rioja) f�?városa.",
      "Fontos megálló a Francia Szent Jakab-úton.",
      "A Calle del Laurel több mint 60 tapas bárral várja a vendégeket.",
      "Minden szeptemberben megrendezik a San Mateo szüreti fesztivált.",
      "Több száz neves borászat (bodegas) veszi körül.",
      "Az Ebro folyó fest�?ien folyik át a városon."
    ],
    "ro": [
      "Capitala celei mai mici comunit�?�?i autonome din Spania (La Rioja).",
      "Oprire important�? pe ruta francez�? Camino de Santiago.",
      "Calle del Laurel ofer�? peste 60 de baruri de tapas.",
      "�?n fiecare septembrie are loc festivalul recoltei de vin San Mateo.",
      "�?nconjurat de sute de crame renumite (bodegas).",
      "Râul Ebro curge pitoresc prin ora�?."
    ],
    "en": [
      "Capital of Spain's smallest autonomous community (La Rioja).",
      "Important stop on the French route of the Camino de Santiago.",
      "Calle del Laurel offers over 60 tapas bars.",
      "The San Mateo wine harvest festival takes place every September.",
      "Surrounded by hundreds of renowned wineries (bodegas).",
      "The Ebro River flows picturesquely through the city."
    ]
  }
}
];
 
const extraSpainPoi: POI[] = [
{
  "id": "es-alcazar-sevilla",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [-5.9907, 37.3833],
  "name": {"de": "Alcazar von Sevilla", "hu": "Sevillai Alcazar", "ro": "Alcazarul din Sevilla", "en": "Alcazar of Seville"},
  "description": {
    "de": "Der Alcazar von Sevilla ist ein königlicher Palastkomplex mit starken maurischen und christlichen Einflüssen. Seine Gärten, Höfe und kunstvollen Innenräume machen ihn zu einem der eindrucksvollsten Orte Andalusiens.",
    "hu": "A sevillai Alcazar egy királyi palotaegyüttes er�?s mór és keresztény hatással. Kertjei, udvarai és díszes bels�? terei Andalúzia egyik leglátványosabb helyévé teszik.",
    "ro": "Alcazarul din Sevilla este un complex palatin regal cu puternice influen�?e maure �?i cre�?tine. Gr�?dinile, cur�?ile �?i interioarele sale ornamentate îl fac unul dintre cele mai impresionante locuri din Andaluzia.",
    "en": "The Alcazar of Seville is a royal palace complex with strong Moorish and Christian influences. Its gardens, courtyards, and ornate interiors make it one of Andalusia's most impressive places."
  },
  "facts": {
    "de": ["Noch heute Residenz der spanischen Königsfamilie bei Besuchen.", "UNESCO-Weltkulturerbe.", "Zählt zu den ältesten noch genutzten Palästen Europas.", "Diente als Filmkulisse für viele Produktionen."],
    "hu": ["Spanyol királyi látogatások idején ma is használt rezidencia.", "UNESCO világörökség.", "Európa egyik legrégebben használt palotája.", "Számos film forgatóhelyszíne volt."],
    "ro": ["�?nc�? este re�?edin�?�? folosit�? de familia regal�? spaniol�? la vizite.", "Patrimoniu Mondial UNESCO.", "Unul dintre cele mai vechi palate aflate înc�? în uz din Europa.", "A fost decor pentru numeroase produc�?ii de film."],
    "en": ["Still used as a royal residence during Spanish royal visits.", "UNESCO World Heritage site.", "One of the oldest palaces still in use in Europe.", "Has served as a filming location for many productions."]
  }
},
{
  "id": "es-castillo-coca",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [-4.5228, 41.2164],
  "name": {"de": "Castillo de Coca", "hu": "Coca kastélya", "ro": "Castelul Coca", "en": "Coca Castle"},
  "description": {
    "de": "Das Castillo de Coca ist eine auffällige Backsteinfestung in Kastilien und León. Mit seinem Wassergraben und den Zinnen zeigt es eindrucksvoll die spätmittelalterliche Militärarchitektur.",
    "hu": "A Coca kastélya egy feltűn�? téglavár Kasztíliában és Leónban. �?vérével és bütykös falaival látványosan mutatja be a kés�? középkori katonai építészetet.",
    "ro": "Castelul Coca este o fort�?rea�?�? impresionant�? din c�?r�?mid�? în Castilia �?i León. Cu �?an�?ul �?i crenelurile sale, arat�? spectaculos arhitectura militar�? târziu medieval�?.",
    "en": "Coca Castle is a striking brick fortress in Castile and León. With its moat and battlements, it showcases late medieval military architecture."
  },
  "facts": {
    "de": ["Berühmt für seine Mischung aus Gotik und Mudéjar.", "Wurde im 15. Jahrhundert für die Familie Fonseca errichtet.", "Gehört zu den besterhaltenen Backsteinschlössern Spaniens.", "Der Wassergraben ist ein markantes Verteidigungselement."],
    "hu": ["A gótika és a mudéjar stílus keverékér�?l híres.", "A 15. században a Fonseca család számára épült.", "Spanyolország egyik legjobb állapotban fennmaradt téglavára.", "Az évér fontos védelmi elem."],
    "ro": ["Celebru pentru amestecul de gotic �?i mudéjar.", "A fost construit în secolul al XV-lea pentru familia Fonseca.", "Este unul dintre cele mai bine p�?strate castele de c�?r�?mid�? din Spania.", "�?an�?ul este un element defensiv important."],
    "en": ["Known for its mix of Gothic and Mudéjar styles.", "Built in the 15th century for the Fonseca family.", "One of Spain's best-preserved brick castles.", "The moat is a key defensive feature."]
  }
},
{
  "id": "es-alcazar-segovia",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [-4.1392, 40.9501],
  "name": {"de": "Alcazar von Segovia", "hu": "Segoviai Alcazar", "ro": "Alcazarul din Segovia", "en": "Alcazar of Segovia"},
  "description": {
    "de": "Der Alcazar von Segovia erhebt sich dramatisch über dem Zusammenfluss zweier Flüsse. Die festungsartige Königsresidenz ist eines der bekanntesten Wahrzeichen Kastiliens und erinnert an ein Märchenschloss.",
    "hu": "A segoviai Alcazar látványosan magasodik két folyó találkozásánál. Az er�?dszerű királyi rezidencia Kasztília egyik legismertebb jelképe, és mesebeli kastélyra emlékeztet.",
    "ro": "Alcazarul din Segovia se ridic�? dramatic deasupra confluen�?ei a dou�? râuri. Re�?edin�?a regal�? cu aspect de fort�?rea�?�? este unul dintre cele mai cunoscute simboluri ale Castiliei �?i aminte�?te de un castel de poveste.",
    "en": "The Alcazar of Segovia rises dramatically above the meeting point of two rivers. This fortress-like royal residence is one of Castile's best-known landmarks and looks like a fairytale castle."
  },
  "facts": {
    "de": ["Diente über Jahrhunderte als Königspalast.", "UNESCO-Weltkulturerbe der Altstadt von Segovia.", "Die markante Silhouette inspirierte Disney-Illustrationen.", "Berühmt für die kegelförmigen Türme."],
    "hu": ["�?vszázadokon át királyi palotaként szolgált.", "Segovia óvárosának UNESCO világörökségi része.", "Jellegzetes sziluettje Disney-ihletést is adott.", "Képízű tornyairól híres."],
    "ro": ["A servit secole drept palat regal.", "Face parte din patrimoniul UNESCO al vechiului ora�? Segovia.", "Silueta sa distinctiv�? a inspirat ilustra�?ii Disney.", "Este faimos pentru turnurile sale conice."],
    "en": ["Served as a royal palace for centuries.", "Part of the UNESCO-listed old town of Segovia.", "Its distinctive silhouette inspired Disney illustrations.", "Famous for its cone-shaped towers."]
  }
},
{
  "id": "es-palacio-real-madrid",
  "type": "historical",
  "parent": "ES-MD",
  "coords": [-3.7143, 40.4179],
  "name": {"de": "Königspalast Madrid", "hu": "Madridi királyi palota", "ro": "Palatul Regal din Madrid", "en": "Royal Palace of Madrid"},
  "description": {
    "de": "Der Königspalast in Madrid ist die offizielle Residenz der spanischen Monarchie bei Zeremonien. Mit seinen repräsentativen Sälen und der gro�?en Fassade zählt er zu den bedeutendsten Palästen Europas.",
    "hu": "A madridi királyi palota a spanyol monarchia hivatalos ceremoniális rezidenciája. Pompás termeivel és nagy homlokzatával Európa egyik legjelent�?sebb palotája.",
    "ro": "Palatul Regal din Madrid este re�?edin�?a oficial�? ceremonial�? a monarhiei spaniole. Cu s�?lile sale reprezentative �?i fa�?ada impun�?toare, este unul dintre cele mai importante palate ale Europei.",
    "en": "The Royal Palace in Madrid is the ceremonial official residence of the Spanish monarchy. With its grand halls and imposing facade, it is one of Europe's most important palaces."
  },
  "facts": {
    "de": ["Grö�?ter Königspalast Westeuropas nach Grundfläche.", "Heute hauptsächlich für Staatszeremonien genutzt.", "Mehr als 3.000 Räume im gesamten Komplex.", "Die Wachablösung zieht viele Besucher an."],
    "hu": ["Nyugat-Európa legnagyobb alapterületű királyi palotája.", "Ma f�?ként állami ceremóniákra használják.", "Több mint 3000 helyiség tartozik az együtteshez.", "Az �?rségváltás sok látogatót vonz."],
    "ro": ["Cel mai mare palat regal din Europa de Vest ca suprafa�?�?.", "Ast�?zi este folosit mai ales pentru ceremonii de stat.", "Ansamblul are peste 3.000 de camere.", "Schimbarea g�?rzii atrage mul�?i vizitatori."],
    "en": ["The largest royal palace in Western Europe by floor area.", "Used mainly for state ceremonies today.", "The complex contains more than 3,000 rooms.", "The changing of the guard attracts many visitors."]
  }
},
{
  "id": "es-aljaferia-zaragoza",
  "type": "historical",
  "parent": "ES-AR",
  "coords": [-0.8939, 41.6499],
  "name": {"de": "Aljaferia Zaragoza", "hu": "Zaragozai Aljaferia", "ro": "Aljaferia din Zaragoza", "en": "Aljaferia Palace"},
  "description": {
    "de": "Die Aljafería in Zaragoza ist ein prachtvoller islamischer Palast, der später zu einem königlichen Sitz umgebaut wurde. Er ist eines der wichtigsten Beispiele maurischer Kunst in Nordspanien.",
    "hu": "A zaragozai Aljaferia egy pompás iszlám palota, amelyet kés�?bb királyi székhellyé átalakítottak. �?szak-Spanyolország egyik legfontosabb mór művészeti emléke.",
    "ro": "Aljaferia din Zaragoza este un palat islamic splendid, transformat ulterior în re�?edin�?�? regal�?. Este unul dintre cele mai importante exemple de art�? maur�? din nordul Spaniei.",
    "en": "The Aljaferia in Zaragoza is a splendid Islamic palace later adapted into a royal seat. It is one of the most important examples of Moorish art in northern Spain."
  },
  "facts": {
    "de": ["UNESCO-Weltkulturerbe als Teil der Mudéjar-Architektur von Aragon.", "Erbaut im 11. Jahrhundert.", "Später Sitz der aragonesischen Könige.", "Heute Sitz des Regionalparlaments von Aragon."],
    "hu": ["UNESCO világörökség Aragónia mudéjar építészetének részeként.", "A 11. században épült.", "Kés�?bb az aragóniai királyok székhelye lett.", "Ma Aragónia regionális parlamentjének ad otthont."],
    "ro": ["Patrimoniu Mondial UNESCO ca parte a arhitecturii mudéjar din Aragon.", "Construit în secolul al XI-lea.", "A devenit ulterior re�?edin�?a regilor Aragonului.", "Ast�?zi g�?zduie�?te parlamentul regional din Aragon."],
    "en": ["UNESCO World Heritage site as part of Aragon's Mudéjar architecture.", "Built in the 11th century.", "Later became the seat of the Kings of Aragon.", "Now houses the regional parliament of Aragon."]
  }
},
{
  "id": "es-teide",
  "type": "mountain",
  "parent": "ES-CN",
  "coords": [-16.6425, 28.2724],
  "name": {"de": "Teide", "hu": "Teide", "ro": "Teide", "en": "Teide"},
  "description": {
    "de": "Der Teide ist Spaniens höchster Berg und ein aktiver Vulkan auf Teneriffa. Die markante Gipfellandschaft prägt die Kanarischen Inseln und zieht Naturliebhaber und Wanderer gleicherma�?en an.",
    "hu": "A Teide Spanyolország legmagasabb hegye és egy aktív vulkán Tenerifén. Jellegzetes csúcskörnyezete meghatározza a Kanári-szigetek képét, és a természetkedvel�?ket és a túrázókat is vonzza.",
    "ro": "Teide este cel mai înalt munte din Spania �?i un vulcan activ din Tenerife. Peisajul s�?u vulcanic distinctiv define�?te Insulele Canare �?i atrage deopotriv�? iubitori ai naturii �?i drume�?i.",
    "en": "Teide is Spain's highest mountain and an active volcano on Tenerife. Its striking summit landscape defines the Canary Islands and attracts both nature lovers and hikers."
  },
  "facts": {
    "de": ["Mit 3.718 Metern der höchste Berg Spaniens.", "Teide-Nationalpark ist UNESCO-Welterbe.", "Einer der meistbesuchten Nationalparks Europas.", "Die Vulkanlandschaft wirkt teilweise mondähnlich."],
    "hu": ["3718 méterrel Spanyolország legmagasabb hegye.", "A Teide Nemzeti Park UNESCO világörökség.", "Európa egyik leglátogatottabb nemzeti parkja.", "Vulkáni tája sokszor holdbelinek hat."],
    "ro": ["Cu 3.718 metri, este cel mai înalt munte din Spania.", "Parcul Na�?ional Teide este patrimoniu UNESCO.", "Unul dintre cele mai vizitate parcuri na�?ionale din Europa.", "Peisajul vulcanic pare uneori lunar."],
    "en": ["At 3,718 meters, it is Spain's highest mountain.", "Teide National Park is a UNESCO World Heritage site.", "One of Europe's most visited national parks.", "Its volcanic landscape can look moon-like."]
  }
},
{
  "id": "es-cabo-de-gata",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [-2.188, 36.856],
  "name": {"de": "Cabo de Gata", "hu": "Cabo de Gata", "ro": "Cabo de Gata", "en": "Cabo de Gata"},
  "description": {
    "de": "Cabo de Gata ist ein geschütztes Küsten- und Naturgebiet in Almería. Die trockene Vulkanlandschaft trifft dort auf Buchten, Klippen und das klare Mittelmeer.",
    "hu": "A Cabo de Gata egy védett parti és természeti terület Almeríában. A száraz vulkáni táj itt öblökkel, sziklákkal és a tiszta Földközi-tengerrel találkozik.",
    "ro": "Cabo de Gata este o zon�? costier�? �?i natural�? protejat�? din Almería. Peisajul vulcanic arid se întâlne�?te aici cu golfuri, stânci �?i Marea Mediteran�? limpede.",
    "en": "Cabo de Gata is a protected coastal and natural area in Almería. Its dry volcanic landscape meets coves, cliffs, and the clear Mediterranean Sea."
  },
  "facts": {
    "de": ["Teil des Naturparks Cabo de Gata-Níjar.", "Eine der trockensten Regionen Europas.", "Beliebt für unberührte Strände und Schnorcheln.", "Die Landschaft diente oft als Filmkulisse."],
    "hu": ["A Cabo de Gata-Níjar természeti park része.", "Európa egyik legszárazabb régiója.", "�?rintetlen strandjai és snorkelezési helyei népszerűek.", "A táj gyakori filmforgatóhelyszín."],
    "ro": ["Face parte din Parcul Natural Cabo de Gata-Níjar.", "Una dintre cele mai aride regiuni din Europa.", "Popular�? pentru plajele s�?lbatice �?i snorkeling.", "Peisajul a fost adesea folosit ca platou de filmare."],
    "en": ["Part of Cabo de Gata-Níjar Natural Park.", "One of the driest regions in Europe.", "Popular for unspoiled beaches and snorkeling.", "The landscape has often been used as a film set."]
  }
},
{
  "id": "es-tabernas-desert",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [-2.456, 37.005],
  "name": {"de": "Tabernas Wüste", "hu": "Tabernas sivatag", "ro": "De�?ertul Tabernas", "en": "Tabernas Desert"},
  "description": {
    "de": "Die Tabernas-Wüste in Andalusien ist Europas einzige echte Halbwüste. Mit ihren trockenen Schluchten und kahlen Hügeln erinnert sie stark an klassische Westernlandschaften.",
    "hu": "Az andalúziai Tabernas sivatag Európa egyetlen igazi félsivataga. Száraz völgyeivel és kopasz dombjaival er�?sen emlékeztet a klasszikus westernek tájaira.",
    "ro": "De�?ertul Tabernas din Andaluzia este singurul semi-de�?ert adev�?rat al Europei. Cu v�?ile sale uscate �?i colinele gola�?e, seam�?n�? mult cu peisajele western clasice.",
    "en": "The Tabernas Desert in Andalusia is Europe's only true semi-desert. Its dry gullies and barren hills strongly resemble classic Western film landscapes."
  },
  "facts": {
    "de": ["Sehr trockenes Klima mit wenigen Niederschlägen.", "Berühmt als Drehort für Westernfilme.", "Teil der Provinz Almería.", "Die Vegetation ist besonders spärlich."],
    "hu": ["Nagyon száraz éghajlat, kevés csapadékkal.", "Westernek híres forgatóhelyszíne.", "Almería tartomány része.", "A növényzet rendkívül szórványos."],
    "ro": ["Clim�? foarte uscat�?, cu pu�?ine precipita�?ii.", "Cunoscut ca loc de filmare pentru westernuri.", "Face parte din provincia Almería.", "Vegeta�?ia este foarte rar�?."],
    "en": ["Very dry climate with little rainfall.", "Famous as a filming location for Westerns.", "Part of the province of Almería.", "Vegetation is extremely sparse."]
  }
},
{
  "id": "es-playa-de-las-catedrales",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [-7.153, 43.553],
  "name": {"de": "Strand der Kathedralen", "hu": "A katedrálisok strandja", "ro": "Plaja Catedralei", "en": "Cathedrals Beach"},
  "description": {
    "de": "Die Playa de las Catedrales in Galicien ist für ihre natürlichen Felsbögen und Höhlen bekannt. Bei Ebbe lässt sich die beeindruckende Steilküste besonders gut zu Fu�? erkunden.",
    "hu": "A galiciai Playa de las Catedrales természetes sziklaíveir�?l és barlangjairól híres. Apály idején a lenyűgöz�? sziklás part különösen jól bejárható gyalog.",
    "ro": "Playa de las Catedrales din Galicia este cunoscut�? pentru arcadele naturale de piatr�? �?i pe�?teri. La reflux, coasta impresionant�? poate fi explorat�? foarte bine pe jos.",
    "en": "Playa de las Catedrales in Galicia is known for its natural rock arches and caves. At low tide, the impressive cliff coast can be explored especially well on foot."
  },
  "facts": {
    "de": ["Der Name stammt von den kathedralenartigen Felsformationen.", "Am besten bei Ebbe zu besuchen.", "Beliebtes Naturziel an der galicischen Küste.", "Teil der Gemeinde Ribadeo."],
    "hu": ["A név a katedrálisszerű sziklaalakzatokból ered.", "Apály idején a leglátványosabb.", "Népszerű természeti célpont Galícia partjainál.", "Ribadeo település része."],
    "ro": ["Numele vine de la forma�?iunile stâncoase asem�?n�?toare catedralelor.", "Se viziteaz�? cel mai bine la reflux.", "Destina�?ie natural�? popular�? pe coasta Galiciei.", "Face parte din comuna Ribadeo."],
    "en": ["The name comes from cathedral-like rock formations.", "Best visited at low tide.", "A popular nature destination on the Galician coast.", "Part of the municipality of Ribadeo."]
  }
},
{
  "id": "es-donana-national-park",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [-6.433, 37.05],
  "name": {"de": "Doñana Nationalpark", "hu": "Doñana Nemzeti Park", "ro": "Parcul Na�?ional Doñana", "en": "Doñana National Park"},
  "description": {
    "de": "Der Doñana-Nationalpark ist eines der wichtigsten Feuchtgebiete Europas. Seine Marschen, Dünen und Sümpfe sind ein Schlüsselraum für Zugvögel und bedrohte Arten.",
    "hu": "A Doñana Nemzeti Park Európa egyik legfontosabb vizes él�?helye. Mocsarai, dünéi és ártérei kulcsfontosságúak a vonuló madarak és a veszélyeztetett fajok számára.",
    "ro": "Parcul Na�?ional Doñana este una dintre cele mai importante zone umede din Europa. Mla�?tinile, dunele �?i zonele inundabile sunt esen�?iale pentru p�?s�?rile migratoare �?i speciile amenin�?ate.",
    "en": "Doñana National Park is one of Europe's most important wetlands. Its marshes, dunes, and swamps are crucial for migratory birds and endangered species."
  }
},
{
  "id": "es-guggenheim-bilbao",
  "type": "landmark",
  "parent": "ES-PV",
  "coords": [-2.9349, 43.2686],
  "name": {"de": "Guggenheim Bilbao", "hu": "Guggenheim Bilbao", "ro": "Guggenheim Bilbao", "en": "Guggenheim Bilbao"},
  "description": {
    "de": "Das Guggenheim Museum in Bilbao ist ein Markenzeichen moderner Architektur und Kunst. Das futuristische Titangebäude hat die Stadtsilhouette und das internationale Image Bilbaos grundlegend verändert.",
    "hu": "A bilbaói Guggenheim Múzeum a modern építészet és művészet jelképe. A futurisztikus titán épület alapjaiban változtatta meg Bilbao arculatát és nemzetközi megítélését.",
    "ro": "Muzeul Guggenheim din Bilbao este un simbol al arhitecturii �?i artei moderne. Cl�?direa futurist�? din titan a schimbat radical silueta ora�?ului �?i imaginea interna�?ional�? a Bilbao.",
    "en": "The Guggenheim Museum in Bilbao is a symbol of modern architecture and art. Its futuristic titanium building fundamentally changed Bilbao's skyline and international image."
  },
  "facts": {
    "de": ["Entworfen von Frank Gehry.", "Eröffnet 1997.", "Gilt als Schlüsselbeispiel des Bilbao-Effekts.", "Ein Wahrzeichen am Fluss Nervión."],
    "hu": ["Frank Gehry tervezte.", "1997-ben nyílt meg.", "A Bilbao-hatás tankönyvi példája.", "A Nervión folyó partjának jelképe."],
    "ro": ["Proiectat de Frank Gehry.", "Deschis în 1997.", "Considerat un exemplu-cheie al 'efectului Bilbao'.", "Un simbol de pe malul râului Nervión."],
    "en": ["Designed by Frank Gehry.", "Opened in 1997.", "A textbook example of the Bilbao effect.", "A landmark on the Nervión River."]
  }
},
{
  "id": "es-plaza-mayor-madrid",
  "type": "landmark",
  "parent": "ES-MD",
  "coords": [-3.7074, 40.4154],
  "name": {"de": "Plaza Mayor Madrid", "hu": "Madridi Plaza Mayor", "ro": "Plaza Mayor Madrid", "en": "Plaza Mayor Madrid"},
  "description": {
    "de": "Die Plaza Mayor ist Madrids berühmter historischer Hauptplatz. Ihre geschlossene Arkadenform und die langen Fassaden machen sie zu einem zentralen Treffpunkt der Stadt.",
    "hu": "A Plaza Mayor Madrid híres történelmi f�?tere. Zárt árkádsora és hosszú homlokzatai a város egyik központi találkozóhelyévé teszik.",
    "ro": "Plaza Mayor este celebra pia�?�? istoric�? principal�? a Madridului. Forma sa închis�? cu arcade �?i fa�?adele lungi o fac un punct central de întâlnire al ora�?ului.",
    "en": "Plaza Mayor is Madrid's famous historic main square. Its enclosed arcade form and long facades make it a central meeting point in the city."
  },
  "facts": {
    "de": ["Entstand im 17. Jahrhundert.", "War Schauplatz von Märkten, Festen und öffentlichen Ereignissen.", "Umgeben von dreigeschossigen Wohnhäusern.", "Eine der bekanntesten Postkartenansichten Madrids."],
    "hu": ["A 17. században alakult ki.", "Piacok, ünnepségek és nyilvános események helyszíne volt.", "Háromszintes lakóházak veszik körül.", "Madrid egyik legismertebb képeslapmotívuma."],
    "ro": ["S-a format în secolul al XVII-lea.", "A fost scena pie�?elor, festivalurilor �?i evenimentelor publice.", "Este înconjurat�? de cl�?diri reziden�?iale cu trei etaje.", "Una dintre cele mai cunoscute imagini de carte po�?tal�? ale Madridului."],
    "en": ["Dates back to the 17th century.", "Hosted markets, festivals, and public events.", "Surrounded by three-story residential buildings.", "One of Madrid's most iconic postcard views."]
  }
},
{
  "id": "es-mezquita-cordoba",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [-4.7783, 37.8779],
  "name": {"de": "Mezquita-Catedral von Cordoba", "hu": "Cordobai Mezquita-Katedrális", "ro": "Mezquita-Catedral din Cordoba", "en": "Mezquita-Catedral of Cordoba"},
  "description": {
    "de": "Die Mezquita-Catedral von Cordoba vereint eine ehemalige Moschee und eine christliche Kathedrale in einem einzigartigen Bauwerk. Die rot-wei�?en Bögen im Inneren gehören zu den berühmtesten Bildern Spaniens.",
    "hu": "A cordobai Mezquita-Katedrális egykori mecsetet és keresztény katedrálist egyesít egyedülálló építményben. A bels�? tér vörös-fehér ívei Spanyolország legismertebb képei közé tartoznak.",
    "ro": "Mezquita-Catedral din Cordoba une�?te într-o singur�? cl�?dire unic�? o fost�? moschee �?i o catedral�? cre�?tin�?. Arcadele ro�?u-alb din interior sunt printre cele mai faimoase imagini din Spania.",
    "en": "The Mezquita-Catedral of Cordoba combines a former mosque and a Christian cathedral in one unique building. The red-and-white arches inside are among Spain's most famous images."
  },
  "facts": {
    "de": ["UNESCO-Weltkulturerbe.", "Ursprünglich im 8. Jahrhundert als Moschee errichtet.", "Später zur Kathedrale umgewandelt.", "Berühmt für die Hypostylhalle mit hunderten Säulen."],
    "hu": ["UNESCO világörökség.", "Eredetileg a 8. században mecsetként épült.", "Kés�?bb katedrálissá alakították.", "Híres a számtalan oszlopból álló csarnokról."],
    "ro": ["Patrimoniu Mondial UNESCO.", "Construit�? ini�?ial în secolul al VIII-lea ca moschee.", "Ulterior transformat�? în catedral�?.", "Faimoas�? pentru sala hipostil�? cu sute de coloane."],
    "en": ["UNESCO World Heritage site.", "Originally built as a mosque in the 8th century.", "Later converted into a cathedral.", "Famous for its hypostyle hall with hundreds of columns."]
  }
},
{
  "id": "es-santiago-cathedral",
  "type": "historical",
  "parent": "ES-GA",
  "coords": [-8.5457, 42.8805],
  "name": {"de": "Kathedrale von Santiago de Compostela", "hu": "Santiago de Compostela katedrálisa", "ro": "Catedrala din Santiago de Compostela", "en": "Cathedral of Santiago de Compostela"},
  "description": {
    "de": "Die Kathedrale von Santiago de Compostela ist das Ziel des berühmten Jakobswegs. Als spirituelles Zentrum Galiciens prägt sie die Altstadt und das Pilgerleben der Stadt.",
    "hu": "A Santiago de Compostela-i katedrális a hírés Szent Jakab-út célpontja. Galícia spirituális központjaként meghatározza az óvárost és a zándokéletet.",
    "ro": "Catedrala din Santiago de Compostela este destina�?ia celebrului Camino de Santiago. Ca centru spiritual al Galiciei, domin�? centrul vechi �?i via�?a pelerinilor.",
    "en": "The Cathedral of Santiago de Compostela is the destination of the famous Camino de Santiago. As Galicia's spiritual center, it shapes the old town and pilgrim life."
  },
  "facts": {
    "de": ["Ziel des Jakobswegs für Pilger aus ganz Europa.", "UNESCO-Weltkulturerbe der Altstadt.", "Gilt als Grabstätte des Apostels Jakobus.", "Die barocke Fassade prägt das Stadtbild."],
    "hu": ["Egész Európából érkez�? zándokok célpontja a Szent Jakab-úton.", "Az óváros UNESCO világörökség.", "Az apostol Jakab sírhelyének tartják.", "A barokk homlokzat meghatározza a városképet."],
    "ro": ["Destina�?ie pentru pelerini din întreaga Europ�? pe Camino de Santiago.", "Patrimoniu UNESCO al centrului istoric.", "Este considerat�? locul de înmormântare al apostolului Iacob.", "Fa�?ada baroc�? domin�? imaginea ora�?ului."],
    "en": ["A destination for pilgrims from across Europe on the Camino de Santiago.", "UNESCO World Heritage site for the old town.", "Regarded as the burial place of the Apostle James.", "Its Baroque facade dominates the cityscape."]
  }
}
];
// �??�?? Spain Admin-2 province POIs �??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??�??
// One POI per province (50 total), parent = autonomous community CCAA code.
export const spainProvinces: POI[] = [
  // Andalucía (ES-AN) �?? 8 provinces
  { id: "ES-AL", type: "region", parent: "ES-AN", coords: [-2.4598, 37.1825], name: { de: "Almería", hu: "Almería", ro: "Almeria", en: "Almería" }, description: { de: "Wüstenlandschaft im Südosten Andalusiens.", hu: "Sivatagi táj Andalúzia délkeleti részén.", ro: "Peisaj de�?ertic în sud-estul Andaluziei.", en: "Desert landscape in southeastern Andalusia." }, descriptionAdvanced: { de: "", hu: "Almer�a Andal�zia perzsel?en forr� d�lkeleti r�sz�n fekszik, �s Eur�pa egyik legsz�ls?s�gesebb, legsz�razabb, m�gis leny?g�z? sivatagi t�j�nak ad otthont. A Tabernas-sivatag siv�r, vadnyugatot id�z? v�lgyeit �s szikl�it a mozi aranykor�ban sz�mtalan legend�s spagettiwestern forgat�si helysz�nek�nt haszn�lt�k. A tartom�ny partvid�k�t, a Cabo de Gata Nemzeti Parkot �rintetlen, vulkanikus szikl�s �bl�k �s vad, homokos strandok jellemzik, t�vol a t�megturizmust�l. A modern Almer�a hatalmas gazdas�gi motorja a 'M?anyag-tenger' (Mar de Pl�stico), egy �ri�si, ?rb?l is l�that� �vegh�z-h�l�zat, amely Eur�pa z�lds�gell�t�s�nak jelent?s r�sz�t biztos�tja. A f?v�ros f�l� magasod� m�r Alcazaba az iszl�m m�lt dics?s�ges mement�ja.", ro: "", en: "Almer�a is a captivating province in southeastern Andalusia, renowned for its dramatic landscapes and unique climatic extremes. It is home to the Tabernas Desert, the only true semi-desert in mainland Europe, which famously served as the cinematic backdrop for numerous 'Spaghetti Western' films in the 1960s and 70s. The provincial capital features the imposing Alcazaba, a magnificent Moorish fortress that dominates the city's skyline and speaks to its significant Islamic heritage. Along the coast lies the Cabo de Gata-N�jar Natural Park, a pristine expanse of volcanic rock formations, hidden coves, and unspoiled Mediterranean beaches. Almer�a is also an agricultural powerhouse, widely recognized for its vast expanse of greenhouses visible from space." }, factsAdvanced: { de: [], hu: [
        "A Tabernas-sivatag az egyetlen val�di f�lsivatag eg�sz Eur�p�ban, ahol �vente kevesebb mint 250 mm es? esik.",
        "A Cabo de Gata partvid�ke Spanyolorsz�g sz�razf�ldi r�sz�nek legnagyobb kiterjed�s?, �p�tkez�sekt?l mentes partvonala.",
        "Sergio Leone olyan h�res filmeket forgatott itt, mint 'A J�, a Rossz �s a Cs�f', �s az egykori d�szletv�rosok ma is l�togathat�k.",
        "Az almer�ai Alcazaba a m�sodik legnagyobb m�r er?d�tm�ny Spanyolorsz�gban, r�gt�n a granadai Alhambra ut�n."
      ], ro: [], en: [
        "The Alcazaba of Almer�a was built in the 10th century by Abd al-Rahman III.",
        "Tabernas Desert receives less than 250 millimeters of rainfall annually.",
        "Cabo de Gata-N�jar Natural Park covers 460 square kilometers of terrestrial and marine area.",
        "Almer�a's greenhouse agriculture covers approximately 30,000 hectares, often called the 'Sea of Plastic'."
      ] } },
  { id: "ES-CA", type: "region", parent: "ES-AN", coords: [-5.9845, 36.5271], name: { de: "Cádiz", hu: "Cádiz", ro: "Cadiz", en: "Cádiz" }, description: { de: "Küstenprovinz mit historischer Hafenstadt.", hu: "Tengerparti tartomány történelmi kiköt�?várossal.", ro: "Provincie costier�? cu ora�?-port istoric.", en: "Coastal province with a historic port city." }, descriptionAdvanced: { de: "", hu: "C�diz tartom�ny Andal�zia legd�lebbi pontja, amely �t�leli mind a F�ldk�zi-tengert, mind a vad Atlanti-�ce�nt, mind�ssze 14 kilom�terre Afrik�t�l. A tartom�ny azonos nev? f?v�rosa Nyugat-Eur�pa egyik legr�gebbi folyamatosan lakott telep�l�se, egy leny?g�z? kik�t?v�ros, amely egy keskeny f�lszigeten ny�lik a tengerbe. C�diz partszakasza, a Costa de la Luz h�res finom feh�r homokj�r�l �s Tarifa vad, szeles strandjair�l, amelyek a kite-sz�rf�s�k glob�lis k�zpontj�v� tett�k. A sz�razf�ld belsej�ben tal�lhat� Jerez de la Frontera, a h�res sherry bor (Jerez) sz�l?haz�ja, valamint az andal�z l�teny�szt�s �s a flamenco egyik t�rt�nelmi fellegv�ra. A r�gi� �ghajlata �s kult�r�ja a m�r, az ib�riai �s az amerikai gyarmati hat�sok leny?g�z? kever�ke.", ro: "", en: "C�diz is an ancient and vibrant port city situated on a narrow slice of land surrounded by the sea in southwestern Andalusia. Generally considered one of the oldest continuously inhabited cities in Western Europe, it was founded by the Phoenicians and has a rich maritime history as a base for Spanish exploration and trade. The city's charming old town is characterized by its narrow, winding alleys, sun-dappled plazas, and historic watchtowers. C�diz is deeply beloved for its annual Carnival, renowned globally for its satirical music and boisterous street parties. Visitors can enjoy excellent seafood, relax on pristine urban beaches, and admire the golden dome of its majestic seafront cathedral." }, factsAdvanced: { de: [], hu: [
        "C�diz v�ros�t a f�n�ciaiak alap�tott�k t�bb mint 3000 �vvel ezel?tt 'Gadir' n�ven, az i. e. 1100-as �vek k�r�l.",
        "Tarifa v�rosa Spanyolorsz�g �s az eg�sz eur�pai kontinens legd�lebbi pontja, ahonnan tiszta id?ben l�tni Marokk�t.",
        "C�diz adott otthont a h�res 1812-es alkotm�ny (a La Pepa) meg�r�s�nak, amely Spanyolorsz�g els? liber�lis alkotm�nya volt.",
        "A sherry (Jerez) egy speci�lis andal�z er?s�tett bor, amelyet egyedi, �gynevezett 'solera' rendszerben �rlelnek t�lgyfahord�kban."
      ], ro: [], en: [
        "C�diz was founded by the Phoenicians around 1104 BC as 'Gadir'.",
        "The city was the launching point for two of Christopher Columbus's voyages.",
        "The Spanish Constitution of 1812 was signed in C�diz.",
        "C�diz Cathedral, built between 1722 and 1838, mixes Baroque, Rococo, and Neoclassical styles."
      ] } },
  { id: "ES-CO", type: "region", parent: "ES-AN", coords: [-4.7794, 37.8927], name: { de: "Córdoba", hu: "Córdoba", ro: "Córdoba", en: "Córdoba" }, description: { de: "Heimat der berühmten Mezquita.", hu: "A famous Mezquita otthona.", ro: "Patria faimoasei Mezquita.", en: "Home of the famous Mezquita." }, descriptionAdvanced: { de: "", hu: "C�rdoba tartom�ny az andal�z h�torsz�gban fekszik, �s a Guadalquivir foly� sz�les, term�keny v�lgy�t, valamint a Sierra Morena zord hegyeit foglalja mag�ban. A tartom�ny az olajfaligetek v�gtelen tenger�vel rendelkezik, �s Spanyolorsz�g egyik legfontosabb ol�vaolaj-termel? r�gi�ja. A f?v�ros, C�rdoba a 10. sz�zadban az iszl�m vil�g legnagyszer?bb �s legm?veltebb k�zpontja volt, melynek mement�ja a l�legzetel�ll�t� Mezquita (mecset-katedr�lis). A tartom�ny b�szk�lkedhet Medina Azahara monument�lis m�r palotav�ros�nak romjaival is, amely egykor a kalif�tus hatalmi k�zpontja volt. A vid�ki falvak hagyom�nyos, feh�rre meszelt h�zai, a h?s�ghez alkalmazkod� vastag falakkal �s vir�gos teraszokkal az igazi andal�z vid�ki �letet t�kr�zik.", ro: "", en: "C�rdoba is a deeply historic city in Andalusia that once stood as the dazzling intellectual and cultural capital of the Islamic caliphate in the Middle Ages. Its crown jewel is the magnificent Mezquita-Catedral, an architectural masterpiece that seamlessly blends a sprawling Moorish mosque characterized by iconic red-and-white striped arches with a soaring Renaissance cathedral built into its center. The city's enchanting historic center features a labyrinth of narrow streets, traditional whitewashed houses, and stunning, flower-filled patios that bloom vigorously in spring. The Roman bridge spanning the Guadalquivir River highlights C�rdoba's ancient origins before its Islamic golden age. The city beautifully embodies the confluence of Roman, Moorish, Jewish, and Christian influences." }, factsAdvanced: { de: [], hu: [
        "A c�rdobai Mezquita v�r�s-feh�r �rk�dos oszloperdej�nek fel�p�t�s�hez r�mai �s vizig�t romokb�l sz�rmaz� oszlopokat is felhaszn�ltak.",
        "Medina Azahara, a 10. sz�zadi kalifa f�ny?z? v�rosa ma UNESCO vil�g�r�ks�gi r�g�szeti lel?hely.",
        "A Montilla-Moriles borvid�ken a h�res sherryhez hasonl�, de Pedro Xim�nez sz?l?b?l k�sz�lt finom andal�z borokat termelnek.",
        "A tartom�ny d�li r�sz�n tal�lhat� Subb�tica hegyvid�k a term�szetj�r�k �s a ker�kp�rosok (V�a Verde) kedvelt c�lpontja."
      ], ro: [], en: [
        "The Mosque-Cathedral of C�rdoba was designated a UNESCO World Heritage Site in 1984.",
        "In the 10th century, C�rdoba was one of the largest and most advanced cities in the world.",
        "The annual Patio Festival of C�rdoba was recognized by UNESCO as Intangible Cultural Heritage in 2012.",
        "The Roman bridge of C�rdoba was built in the early 1st century BC across the Guadalquivir river."
      ] } },
  { id: "ES-GR", type: "region", parent: "ES-AN", coords: [-3.5986, 37.1773], name: { de: "Granada", hu: "Granada", ro: "Granada", en: "Granada" }, description: { de: "Provinz mit der Alhambra.", hu: "Az Alhambra tartománya.", ro: "Provincie cu Alhambra.", en: "Province home to the Alhambra." }, descriptionAdvanced: { de: "", hu: "Granada tartom�ny Andal�zia egyik legv�ltozatosabb �s legl�tv�nyosabb r�gi�ja, ahol a tenger �s a h� mind�ssze egy �r�nyi aut��tra van egym�st�l. A tartom�ny k�zpontja a fens�ges Sierra Nevada hegys�g, Spanyolorsz�g legmagasabb cs�csaival, amely t�len s�paradicsom, ny�ron pedig t�r�z�k k�zpontja. E hegyvid�k �rny�k�ban fekszik a t�rt�nelmi Granada v�rosa a vil�gh�r? Alhambr�val, amely a m�r �p�t�szet cs�cspontja. D�lre, a Costa Tropical nev? partszakaszon a mikrokl�ma olyan kiv�teles, hogy ez az egyetlen hely Eur�p�ban, ahol tr�pusi gy�m�lcs�ket, p�ld�ul mang�t, avok�d�t �s cherimoy�t termesztenek kereskedelmi m�retekben. A r�gi� vad �s elz�rt Alpujarras v�lgyeiben egyed�l�ll�, l�pcs?zetes �p�t�szet? m�r falvak b�jnak meg.", ro: "", en: "Granada is a mesmerizing city in the foothills of the Sierra Nevada mountains, profoundly shaped by its long history under Moorish rule. It is universally famous for the Alhambra, an awe-inspiring palace and fortress complex that represents the pinnacle of Nasrid art and architecture, featuring intricate stucco work, stunning tile mosaics, and the serene Generalife gardens. The Albaic�n neighborhood, with its steep, winding streets and whitewashed houses, preserves the layout of the medieval Moorish city and offers spectacular views of the Alhambra. Granada was the last stronghold of the Islamic empire in Spain, surrendering to the Catholic Monarchs in 1492. Today, it boasts a vibrant university culture and is renowned for its enduring tradition of free tapas." }, factsAdvanced: { de: [], hu: [
        "A Costa Tropical a nev�t annak a rendk�v�li mikrokl�m�nak k�sz�nheti, amelyet a Sierra Nevada v�delmez? hegyvonulata biztos�t a t�li szelek ellen.",
        "Granada volt a muszlim Al-Andalus birodalom legutols� v�rosa, amelyet a katolikus uralkod�k csak 1492-ben h�d�tottak vissza.",
        "A trev�lezi sonka (Jam�n de Trev�lez) Spanyolorsz�g egyik legh�resebb sonk�ja, amelyet az Alpujarras magas hegyi leveg?j�n sz�r�tanak.",
        "Az Alhambra �s a Generalife kertjeinek bonyolult v�zvezet�k-rendszere a Sierra Nevada h�olvad�k�t haszn�lja fel �vsz�zadok �ta."
      ], ro: [], en: [
        "The Alhambra and Generalife were inscribed as UNESCO World Heritage Sites in 1984.",
        "Granada fell to the Catholic Monarchs on January 2, 1492.",
        "The Albaic�n neighborhood retains its original 11th-century Moorish street plan.",
        "The University of Granada, founded in 1531, is one of the oldest in Spain."
      ] } },
  { id: "ES-H",  type: "region", parent: "ES-AN", coords: [-6.9447, 37.2614], name: { de: "Huelva", hu: "Huelva", ro: "Huelva", en: "Huelva" }, description: { de: "Ausgangspunkt von Kolumbus' Reise.", hu: "Kolumbusz útjának kiindulópontja.", ro: "Punctul de plecare al lui Columb.", en: "Starting point of Columbus's voyage." }, descriptionAdvanced: { de: "", hu: "Huelva tartom�ny Spanyolorsz�g d�lnyugati cs�csk�ben, Portug�li�val �s az Atlanti-�ce�nnal hat�ros, egy sok�ig �rintetlen�l hagyott andal�z kincs. Ez a r�gi� a spanyol felfedez�sek t�rt�nelmi kapuja; Kolumbusz Krist�f innen, Palos de la Frontera kik�t?j�b?l indult 1492-ben Amerika felfedez�s�re. Huelva term�szetv�delmi �kk�ve a hatalmas Do�ana Nemzeti Park, Eur�pa egyik legfontosabb vizes �l?helye, ahol t�bb milli� v�ndormad�r �s a vesz�lyeztetett ib�riai hi�z �l. A tartom�ny �szaki, hegyvid�ki r�sze, a Sierra de Aracena h�res makkon h�zott ib�riai sert�seir?l �s a vil�g egyik legdr�g�bb �s legjobb sonk�j�r�l, a Jam�n de Jabugo-r�l. A parti 'Costa de la Luz' �rintetlen, finom homokos d?n�ivel a nyugalomra v�gy�k kedvence.", ro: "", en: "Huelva is a province in southwestern Andalusia bordering Portugal, offering a landscape that transitions from golden sandy beaches to heavily forested inland hills. It holds monumental historical significance as the departure point for Christopher Columbus's first voyage to the Americas, a legacy celebrated at the La R�bida Monastery and the Wharf of the Caravels. The province is also home to the spectacular Do�ana National Park, a critical wetland reserve boasting extraordinary biodiversity and sheltering the endangered Iberian lynx. The local culture is deeply intertwined with its environment, featuring renowned gastronomy centered around exceptional Iberian ham from Jabugo and fresh Atlantic seafood. The annual El Roc�o pilgrimage draws hundreds of thousands of devotees to a small village in the region." }, factsAdvanced: { de: [], hu: [
        "A La R�bida kolostor, ahol Kolumbusz az �tj�t tervezte a ferences szerzetesekkel, ma is l�togathat� t�rt�nelmi eml�khely.",
        "A Do�ana Nemzeti Park homokd?n�i, mocsarai �s fenyvesei Eur�pa legnagyobb biodiverzit�s� vizes �l?hely�t alkotj�k.",
        "El Roc�o falucska a p�nk�sdi id?szakban Spanyolorsz�g legnagyobb zar�ndoklat�nak k�zpontja, ahov� egymilli� ember �rkezik lovon �s szek�ren.",
        "A Rio Tinto foly� vize v�r�ses sz�n? a rendk�v�l magas vas- �s �sv�nyianyag-tartalom, valamint a t�bb �vezredes b�ny�szat miatt."
      ], ro: [], en: [
        "Christopher Columbus departed from the port of Palos de la Frontera in Huelva in 1492.",
        "Do�ana National Park was declared a UNESCO World Heritage Site in 1994.",
        "The El Roc�o pilgrimage takes place annually on Pentecost weekend.",
        "The Riotinto mines in Huelva have been exploited for copper and silver for over 5,000 years."
      ] } },
  { id: "ES-J",  type: "region", parent: "ES-AN", coords: [-3.7905, 37.7796], name: { de: "Jaén", hu: "Jaén", ro: "Jaén", en: "Jaén" }, description: { de: "Weltgrö�?ter Olivenölproduzent.", hu: "A világ legnagyobb olívaolaj-termel�?je.", ro: "Cel mai mare produc�?tor de ulei de m�?sline din lume.", en: "World's largest olive oil producer." }, descriptionAdvanced: { de: "", hu: "Ja�n tartom�ny, Andal�zia csendes �szakkeleti kapuja, az olajf�k v�gtelen tenger�r?l h�res, amely szinte az eg�sz t�jat bebor�tja ameddig a szem ell�t. A 'foly�kony arany' vil�gbajnokak�nt ez a r�gi� egyed�l t�bb ol�vaolajat termel, mint eg�sz Olaszorsz�g, �s Spanyolorsz�g teljes termel�s�nek k�zel fel�t adja. A mez?gazdas�gi vid�kb?l leny?g�z? renesz�nsz v�rosok emelkednek ki, mint �beda �s Baeza, amelyek �rintetlen, 16. sz�zadi palot�ik miatt az UNESCO Vil�g�r�ks�g r�sz�t k�pezik. Ja�n meglep? m�don Spanyolorsz�g legt�bb v�rral �s er?ddel rendelkez? tartom�nya is, amely strat�giai hat�rvid�k volt a kereszt�nyek �s a m�rok k�z�tt. A Sierras de Cazorla Nemzeti Park vad hegyvid�ke az orsz�g legnagyobb v�dett term�szeti ter�lete.", ro: "", en: "Ja�n is an Andalusian province that is universally recognized as the 'World Capital of Olive Oil,' characterized by its seemingly infinite rolling hills blanketed with olive groves. The provincial capital features a monumental Renaissance cathedral and the imposing Castle of Santa Catalina, which commands stunning views over the dramatic landscape. Ja�n is deeply historical, home to the magnificent Renaissance cities of �beda and Baeza, whose impeccably preserved architectural treasures echo the wealth and power of the 16th century. The region also offers rugged natural beauty through the Sierras de Cazorla, Segura y Las Villas Natural Park, the largest protected area in Spain. The combination of its supreme olive oil gastronomy and rich architectural heritage makes it a profound cultural destination." }, factsAdvanced: { de: [], hu: [
        "Ja�n tartom�nyban t�bb mint 66 milli� olajfa tal�lhat�, ami a vil�g legnagyobb mesters�ges erdej�t alkotja.",
        "A Sierras de Cazorla, Segura y Las Villas Nemzeti Park Spanyolorsz�g legnagyobb kiterjed�s? term�szetv�delmi ter�lete.",
        "Baeza �s �beda renesz�nsz �p�t�szet�t nagyr�szt Andr�s de Vandelvira �p�t�sz alkotta meg a 16. sz�zadban.",
        "A Santa Catalina-kast�ly a f?v�ros f�l� magasodva hatalmas panor�m�t k�n�l az olajfaligetekre �s a hegyekre."
      ], ro: [], en: [
        "Ja�n produces roughly 20% of the world's olive oil supply.",
        "The Renaissance monumental ensembles of �beda and Baeza became UNESCO World Heritage Sites in 2003.",
        "Sierras de Cazorla, Segura y Las Villas Natural Park covers over 214,000 hectares.",
        "The Cathedral of Ja�n was designed by the acclaimed Renaissance architect Andr�s de Vandelvira."
      ] } },
  { id: "ES-MA", type: "region", parent: "ES-AN", coords: [-4.4214, 36.7213], name: { de: "Málaga", hu: "Málaga", ro: "Malaga", en: "Málaga" }, description: { de: "Geburtsort Picassos und Costa del Sol.", hu: "Picasso szül�?helye és a Costa del Sol.", ro: "Locul na�?terii lui Picasso �?i Costa del Sol.", en: "Birthplace of Picasso and the Costa del Sol." }, descriptionAdvanced: { de: "", hu: "M�laga tartom�ny a F�ldk�zi-tenger partj�n fekszik, �s legink�bb a h�res, naps�t�tte Costa del Solr�l ismert, amely a glob�lis turizmus egyik legfontosabb k�zpontja Eur�p�ban. M�g a partvonalat hatalmas luxushotelek, golfp�ly�k �s ny�zsg? �d�l?v�rosok (mint Marbella �s Torremolinos) uralj�k, a hegyvid�ki bels? ter�letek, mint a Serran�a de Ronda, csendes andal�z feh�r falvakat (Pueblos Blancos) rejtenek. A tartom�ny k�zpontja, M�laga v�rosa, Pablo Picasso sz�l?helye, az ut�bbi �vekben egy modern, els?rang� kultur�lis �s m�zeumi f?v�ross� alakult �t. A tartom�ny egyik legl�tv�nyosabb term�szeti attrakci�ja a Caminito del Rey, egy sz�d�t?, sziklafalba v�jt t�ra�tvonal az El Chorro szurdokban. A helyi �ghajlat a t�li h�napokban is kellemes tavaszi id?t biztos�t.", ro: "", en: "M�laga is a dynamic port city on the Costa del Sol, combining a rich, multi-layered history with a remarkably vibrant contemporary cultural scene. Originally founded by the Phoenicians, its skyline is dominated by the Alcazaba, an 11th-century Moorish palace-fortress, and the ruins of a Roman amphitheater nestled at its base. As the birthplace of Pablo Picasso, the city has reinvented itself as a premier destination for art lovers, hosting the acclaimed Picasso Museum, the Centre Pompidou, and a flourishing street art district. The historic center features a majestic Renaissance cathedral, elegant pedestrian streets like Calle Larios, and lively tapas bars. Beyond the city limits, the province offers beautiful Mediterranean beaches, rugged mountains, and the famous Caminito del Rey gorge walk." }, factsAdvanced: { de: [], hu: [
        "A Ronda v�ros�t kett�szel? Tajo-szurdokon �t�vel? monument�lis Puente Nuevo (�j H�d) a 18. sz�zadban �p�lt, 120 m�ter magas.",
        "A Caminito del Rey ('A kir�ly �sv�nye') sok�ig a vil�g legvesz�lyesebb gyalog�tjak�nt volt ismert a fel�j�t�sa el?tt.",
        "M�laga kik�t?je Spanyolorsz�g egyik legr�gebbi folyamatosan m?k�d? kik�t?je, amelyet a f�n�ciaiak alap�tottak i.e. 1000 k�r�l.",
        "A M�lagai borok (Vinos de M�laga) k�l�nlegesen �des, mazsol�s �z? lik?rborok, amelyeket hagyom�nyosan t�lgyfahord�kban �rlelnek."
      ], ro: [], en: [
        "M�laga was founded by the Phoenicians as 'Malaka' around 770 BC.",
        "Pablo Picasso was born in M�laga on October 25, 1881.",
        "The M�laga Cathedral is affectionately called 'La Manquita' (The One-Armed Lady) because its south tower was never finished.",
        "The Alcazaba of M�laga is considered one of the best-preserved Moorish fortresses in Spain."
      ] } },
  { id: "ES-SE", type: "region", parent: "ES-AN", coords: [-5.9845, 37.3891], name: { de: "Sevilla", hu: "Sevilla", ro: "Sevilla", en: "Sevilla" }, description: { de: "Hauptstadt Andalusiens mit Kathedrale und Alcázar.", hu: "Andalúzia f�?városa katedrálissal és Alcázarral.", ro: "Capitala Andaluziei cu catedrala �?i Alcázar.", en: "Capital of Andalusia with its cathedral and Alcázar." }, descriptionAdvanced: { de: "", hu: "Sevilla tartom�ny az andal�z kult�ra �s identit�s dobog� sz�ve, Spanyolorsz�g legforr�bb �s az egyik legink�bb �lettel teli vid�ke. A tartom�nyt a sz�les, term�keny Guadalquivir foly� szeli kett�, amely a f?v�rost, Sevill�t Spanyolorsz�g egyetlen belf�ldi tengeri kik�t?j�v� teszi. A leny?g�z? m�r �s renesz�nsz �p�t�szet? f?v�roson t�l a vid�k t�gas gabonaf�ldekkel, narancsligetekkel �s bika-teny�szt? birtokokkal van tele. A tartom�ny b�szk�lkedhet olyan gazdag t�rt�nelmi v�rosokkal is, mint Carmona vagy �cija, amelyek r�mai �s k�z�pkori romokkal v�rj�k a l�togat�kat. Ez a r�gi� a flamenco, a bikaviadalok �s a hagyom�nyos andal�z �letm�d ?shaz�ja �s fellegv�ra.", ro: "", en: "Sevilla is the capital of Andalusia, a city that embodies the quintessential spirit of southern Spain with its flamenco rhythms, vibrant festivals, and striking mud�jar architecture. The city's monumental heart features the immense Gothic Cathedral, resting place of Christopher Columbus, and the iconic Giralda bell tower, originally a Moorish minaret. Adjacent lies the Real Alc�zar, a stunning royal palace complex renowned for its exquisite tile work, intricate archways, and lush gardens that reflect centuries of Christian and Islamic influence. Sevilla's winding medieval streets in the Barrio Santa Cruz are filled with orange trees and lively tapas bars. The city's cultural calendar is highlighted by the solemn processions of Semana Santa and the joyous celebration of the Feria de Abril." }, factsAdvanced: { de: [], hu: [
        "A Guadalquivir foly�nak k�sz�nhet?en Sevilla a 16. sz�zadban az �jvil�ggal folytatott kereskedelem kiz�r�lagos k�zpontja volt.",
        "A Do�ana Nemzeti Park egy jelent?s r�sze Sevilla tartom�ny ter�let�re esik, hatalmas mad�rpopul�ci�nak otthont adva.",
        "�cija v�ros�t Spanyolorsz�g 'serpeny?j�nek' (Sart�n de Andaluc�a) is nevezik a ny�ri extr�m h?s�g miatt.",
        "Carmona r�mai nekropolisza az egyik legnagyobb �s legjobb �llapotban fennmaradt �kori temetkez�si hely Spanyolorsz�gban."
      ], ro: [], en: [
        "Sevilla Cathedral is the largest Gothic cathedral in the world.",
        "The Alc�zar, Cathedral, and Archivo de Indias were collectively named a UNESCO World Heritage Site in 1987.",
        "The Giralda tower reaches a height of 104 meters.",
        "Ferdinand Magellan's expedition to circumnavigate the globe departed from Sevilla in 1519."
      ] } },
  // Aragón (ES-AR) �?? 3 provinces
  { id: "ES-HU", type: "region", parent: "ES-AR", coords: [-0.4083, 42.1401], name: { de: "Huesca", hu: "Huesca", ro: "Huesca", en: "Huesca" }, description: { de: "Pyrenäenprovinz im Norden Aragóns.", hu: "Pireneusi tartomány Aragónia északi részén.", ro: "Provincie pireneean�? în nordul Aragonului.", en: "Pyrenean province in northern Aragon." }, descriptionAdvanced: { de: "", hu: "Huesca tartom�ny Arag�nia leg�szakibb, hegyvid�ki r�sze, amely a K�z�p-Pireneusok legmagasabb, legzordabb cs�csainak �s legm�lyebb v�lgyeinek ad otthont. Ez a r�gi� a szabadt�ri sportok �s a t�r�z�s szerelmeseinek igazi Mekk�ja, olyan leny?g�z? nemzeti parkokkal, mint az Ordesa �s Monte Perdido, amely m�ly, erd?s kanyonjaival a Grand Canyont id�zi. T�len a formigal-i �s ast�n-i s�k�zpontok a spanyol havas sportok legjobbjai k�z� tartoznak. A hegyvid�kt?l d�lre haladva a t�j bortermel? vid�kekk� (Somontano) �s term�keny s�ks�gokk� szel�d�l. Huesca ?si, rom�n st�lus� kolostorai ? mint a szikl�ba �p�lt San Juan de la Pe�a ? az arag�niai kir�lys�g �s a kereszt�ny ellen�ll�s k�z�pkori b�lcs?j�t jelk�pezik.", ro: "", en: "Huesca is a captivating province in the Aragon region of northeastern Spain, serving as a prominent gateway to the central Pyrenees. The geography is extraordinarily diverse, transitioning from the arid, steppe-like plains of the south to the dramatic, snow-capped peaks and deep canyons of Ordesa y Monte Perdido National Park in the north. The province is rich in medieval history, dotted with spectacular Romanesque churches and formidable fortresses such as the Loarre Castle, which overlooks the plains. It is an unparalleled destination for outdoor adventure, offering world-class hiking, canyoning in the Sierra de Guara, and premier skiing in the winter. The historic capital city blends its ancient Iberian origins with charming Gothic architecture and a relaxed atmosphere." }, factsAdvanced: { de: [], hu: [
        "A 3404 m�ter magas Aneto-cs�cs a Pireneusok �s egyben Arag�nia legmagasabb pontja Huesca tartom�nyban tal�lhat�.",
        "A San Juan de la Pe�a kolostor egy hatalmas t�lny�l� sziklafal al� �p�lt, �s a legenda szerint itt ?rizt�k a Szent Gr�lt.",
        "A Somontano borvid�k ('a hegyek l�b�n�l') Spanyolorsz�g egyik legmodernebb �s leggyorsabban fejl?d? bor�szati r�gi�ja.",
        "Az Ordesa �s Monte Perdido Nemzeti Park 1997 �ta az UNESCO Vil�g�r�ks�g r�sze kiemelked? gleccseralakzatai miatt."
      ], ro: [], en: [
        "Loarre Castle, built in the 11th century, is one of the oldest Romanesque castles in Spain.",
        "Ordesa y Monte Perdido National Park was designated a UNESCO World Heritage site in 1997.",
        "The province's highest peak, Aneto, reaches 3,404 meters in elevation.",
        "The pre-Pyrenees area of Sierra de Guara is widely considered the birthplace of modern canyoning."
      ] } },
  { id: "ES-TE", type: "region", parent: "ES-AR", coords: [-1.1065, 40.3456], name: { de: "Teruel", hu: "Teruel", ro: "Teruel", en: "Teruel" }, description: { de: "Bekannt für Mudéjar-Architektur.", hu: "Mudéjar-építészetér�?l ismert.", ro: "Cunoscut pentru arhitectura mudéjar.", en: "Known for its Mudéjar architecture." }, descriptionAdvanced: { de: "", hu: "Teruel egy ritk�n lakott, rejtett kincsekkel teli tartom�ny Arag�nia d�li r�sz�n, amelyet gyakran a 'l�tezik is Teruel' kamp�nnyal pr�b�lnak visszaker�lni a spanyol k�ztudatba. A r�gi� Spanyolorsz�g egyik legkiv�l�bb mud�jar �p�t�szeti k�zpontja; a f?v�ros bonyolult, t�gl�b�l �s ker�mi�b�l �p�lt tornyai az iszl�m �s kereszt�ny m?v�szet var�zslatos f�zi�j�t adj�k (UNESCO Vil�g�r�ks�g). Teruel b�szk�lkedhet Albarrac�nnal is, amelyet m�ly szurdokai �s r�zsasz�n k?h�zai miatt gyakran Spanyolorsz�g legszebb k�z�pkori faluj�nak v�lasztanak. A zord hegyvid�ki �ghajlat (a Maestrazgo r�gi�ban) t�k�letes felt�teleket teremt a h�res terueli sz�r�tott sonka (Jam�n de Teruel) k�sz�t�s�hez. Emellett a tartom�ny Spanyolorsz�g egyik legfontosabb paleontol�giai k�zpontja a gazdag dinoszaurusz-leletek miatt.", ro: "", en: "Teruel is a remarkable province in the autonomous community of Aragon, celebrated for its rugged landscapes, remote charm, and extraordinary Mud�jar architecture. The provincial capital features stunning towers and the Cathedral of Santa Mar�a, adorned with intricate brickwork and brilliant ceramic tiles that showcase the exquisite blend of Islamic and Christian artistic traditions. Teruel is famously associated with the tragic medieval legend of the Lovers of Teruel, whose mausoleum attracts romantics and historians alike. The sparsely populated province is characterized by dramatic mountainous terrain and picturesque medieval villages like Albarrac�n, often cited as one of the most beautiful in Spain. Furthermore, the region has gained prominence for its significant dinosaur fossil discoveries at the Din�polis center." }, factsAdvanced: { de: [], hu: [
        "A Din�polis Teruel Eur�pa egyik legnagyobb ?sl�nytani parkja �s m�zeuma, ahol jelent?s spanyol dinoszaurusz-leleteket �ll�tanak ki.",
        "Teruel f?v�rosa Spanyolorsz�g egyik leghidegebb v�rosa t�len, annak ellen�re, hogy relat�ve d�len fekszik.",
        "A 'Terueli szerelmesek' (Los Amantes de Teruel) t�rt�nete a spanyol R�me� �s J�lia legend�ja egy 13. sz�zadi tragikus rom�ncr�l.",
        "A Jam�n de Teruel volt az els? spanyol sonka, amely megkapta a hivatalos eredetv�delmi (DO) min?s�t�st."
      ], ro: [], en: [
        "The Mud�jar Architecture of Aragon, prominently featured in Teruel, is a UNESCO World Heritage Site.",
        "Teruel is the least populated provincial capital in Spain.",
        "The legend of the Lovers of Teruel dates back to the 13th century.",
        "Din�polis is one of the largest paleontology parks in Europe, highlighting local fossil finds."
      ] } },
  { id: "ES-Z",  type: "region", parent: "ES-AR", coords: [-0.8773, 41.6561], name: { de: "Zaragoza", hu: "Zaragoza", ro: "Zaragoza", en: "Zaragoza" }, description: { de: "Hauptprovinz Aragóns mit der Basilika del Pilar.", hu: "Aragónia f�? tartománya a Pilar-bazilikával.", ro: "Provincia principal�? a Aragonului cu Basilica del Pilar.", en: "Main province of Aragon with the Basilica del Pilar." }, descriptionAdvanced: { de: "", hu: "Zaragoza tartom�ny Arag�nia f�ldrajzi, politikai �s gazdas�gi k�zpontja, amelyet az Ebro foly� sz�les, term�keny v�lgye szel kett�. A r�gi� egy hatalmas, f�lsz�raz sztyepp�n ter�l el, ahol az Ebro vize z�ld o�zisk�nt �lteti a gy�m�lcs�s�ket �s mez?gazdas�gi ter�leteket. A tartom�ny k�zpontja, Zaragoza v�rosa �vezredes t�rt�nelmi csom�pont, amely r�mai, m�r, zsid� �s kereszt�ny eml�kek (mint a Bas�lica del Pilar �s az Aljafer�a palota) egyed�l�ll� �tv�zet�t k�n�lja. A f?v�roson k�v�l a vid�ket csendes, k�z�pkori v�rosk�k, hatalmas sz�ler?m?vek �s elhagyatott, zord hegyvonulatok (mint a Moncayo) jellemzik. Zaragoza Francisco Goya, a h�res spanyol fest? sz�l?f�ldje is (Fuendetodos falu).", ro: "", en: "Zaragoza is the vibrant capital of the Aragon region, strategically located along the banks of the Ebro River midway between Madrid and Barcelona. The city boasts a profound historical legacy left by the Romans, Moors, Jews, and Christians, visibly spanning over two millennia. Its crowning architectural jewel is the Basilica of Nuestra Se�ora del Pilar, a magnificent Baroque edifice with towering cupolas that stands majestically by the river. Another significant landmark is the Aljafer�a Palace, an exquisite 11th-century Islamic fortress that highlights the city's important Moorish past. Zaragoza seamlessly blends its rich monumental heritage with a lively modern atmosphere, renowned for its bustling tapas scene and welcoming culture." }, factsAdvanced: { de: [], hu: [
        "A tartom�ny f?v�rosa, Zaragoza ad otthont Arag�nia lakoss�g�nak t�bb mint fel�nek.",
        "Francisco de Goya, a 18. �s 19. sz�zad legnagyobb spanyol fest?je a zaragozai Fuendetodos nev? kis faluban sz�letett.",
        "Az Ebro foly� v�lgy�t gyakran er?s, hideg �s sz�raz �szaknyugati sz�l, a 'Cierzo' s�pri v�gig.",
        "A Zaragoza melletti Belchite falu romjai m�ig �rintetlen�l �llnak mement�k�nt a spanyol polg�rh�bor� egyik legv�resebb csat�ja ut�n."
      ], ro: [], en: [
        "Zaragoza was founded as the Roman colony Caesaraugusta in 14 BC.",
        "The Aljafer�a Palace serves today as the seat of the regional parliament of Aragon.",
        "The Basilica of Our Lady of the Pillar is considered the first church dedicated to Mary in history.",
        "The city hosted the Expo 2008 international exhibition focused on water and sustainable development."
      ] } },
  // Canarias (ES-CN) �?? 2 provinces
  { id: "ES-GC", type: "region", parent: "ES-CN", coords: [-15.5701, 28.1235], name: { de: "Las Palmas", hu: "Las Palmas", ro: "Las Palmas", en: "Las Palmas" }, description: { de: "�?stliche Kanarische Inseln.", hu: "Keleti Kanári-szigetek.", ro: "Insulele Canare de est.", en: "Eastern Canary Islands." }, descriptionAdvanced: { de: "", hu: "A Gran Canaria tartom�ny, m�s n�ven Las Palmas tartom�ny, mag�ban foglalja a Kan�ri-szigetek keleti fel�t, bele�rtve Gran Canari�t, Lanzarot�t �s Fuerteventur�t. Ez a vulkanikus szigetcsoport az '�r�k tavasz' �ghajlat�val b�szk�lkedhet, �s geol�giai soksz�n?s�ge leny?g�z?. Gran Canaria a hatalmas homokd?n�kr?l �s buja k�z�ps? hegyvid�k�r?l h�res, Lanzarote sz�rre�lis, megszil�rdult l�vamez?i egy idegen bolyg�ra eml�keztetnek, Fuerteventura pedig az �rintetlen, kilom�tereken �t ny�l� feh�r homokos strandjaival a sz�rf�s�k paradicsoma. A tartom�nyi f?v�ros, Las Palmas de Gran Canaria, a Spanyol Birodalom egyik legfontosabb t�rt�nelmi kik�t?je volt a tengerent�li �tvonalakon.", ro: "", en: "Las Palmas is a Spanish province encompassing the eastern half of the Canary Islands, primarily including Gran Canaria, Fuerteventura, and Lanzarote. This province exhibits an astonishing geological diversity, ranging from the lush, mountainous interior of Gran Canaria to the vast, windswept dunes of Fuerteventura and the striking, lunar-like volcanic landscapes of Lanzarote. The capital city, Las Palmas de Gran Canaria, serves as a bustling, cosmopolitan hub with a significant historical quarter and a world-renowned urban beach, Las Canteras. The region's unique geography and consistent Atlantic climate make it a global hotspot for watersports, particularly surfing and windsurfing. Furthermore, the visionary architecture of C�sar Manrique on Lanzarote perfectly harmonizes art with the stark volcanic environment." }, factsAdvanced: { de: [], hu: [
        "Lanzarote sziget�nek arculat�t C�sar Manrique helyi m?v�sz form�lta, aki harmonikusan �tv�zte a m?v�szetet a vulkanikus term�szettel.",
        "A Timanfaya Nemzeti Park Lanzarot�n a 18. sz�zadi massz�v vulk�nkit�r�sek sor�n alakult ki, �s ma geoh?m�rs�kleti anom�li�kkal rendelkezik.",
        "Fuerteventura a Kan�ri-szigetek legid?sebb tagja geol�giai szempontb�l, t�bb mint 20 milli� �vvel ezel?tt emelkedett ki az �ce�nb�l.",
        "Las Palmas a Kan�ri-szigetek legnagyobb v�rosa, �s Spanyolorsz�g egyik legnagyobb �s legforgalmasabb teherkik�t?j�vel rendelkezik."
      ], ro: [], en: [
        "Timanfaya National Park in Lanzarote features a landscape shaped by volcanic eruptions between 1730 and 1736.",
        "Fuerteventura is the second largest of the Canary Islands and the closest to the African coast.",
        "Las Palmas de Gran Canaria was founded in 1478 by Juan Rej�n.",
        "Lanzarote was entirely declared a UNESCO Biosphere Reserve in 1993."
      ] } },
  { id: "ES-TF", type: "region", parent: "ES-CN", coords: [-16.2519, 28.4698], name: { de: "Santa Cruz de Tenerife", hu: "Santa Cruz de Tenerife", ro: "Santa Cruz de Tenerife", en: "Santa Cruz de Tenerife" }, description: { de: "Westliche Kanarische Inseln mit dem Teide.", hu: "Nyugati Kanári-szigetek a Teide vulkánnal.", ro: "Insulele Canare de vest cu vulcanul Teide.", en: "Western Canary Islands with Mount Teide." }, descriptionAdvanced: { de: "", hu: "A Santa Cruz de Tenerife tartom�ny a Kan�ri-szigetek nyugati r�sz�t fedi le, mag�ba foglalva Tenerif�t, La Palm�t, La Gomer�t �s El Hierr�t. Ez a t�rs�g b�szk�lkedhet Spanyolorsz�g legmagasabb pontj�val, a 3718 m�teres Teide vulk�nnal Tenerif�n. M�g Tenerife a t�megturizmus fellegv�ra hatalmas �d�l?�vezetekkel �s dr�mai term�szeti kontrasztokkal, addig a kisebb szigetek az �koturizmus paradicsomai. La Palma ('A Sz�p Sziget') a vil�g egyik legm�lyebb kalder�j�val (Caldera de Taburiente) h�vogat, La Gomera z�ldell?, ?si bab�rerd?i (Garajonay) az ember el?tti id?kbe rep�tenek vissza, a par�nyi El Hierro pedig a 100%-ban meg�jul� energi�ra �p�l? fenntarthat�s�g �tt�r?je. Ez a tartom�ny az Atlanti-�ce�n egyik legbiodiverzebb r�gi�ja.", ro: "", en: "Santa Cruz de Tenerife is a Spanish province encompassing the western islands of the Canary Islands archipelago, namely Tenerife, La Palma, La Gomera, and El Hierro. The province is characterized by spectacular volcanic topography, profound ecological diversity, and ancient laurel forests that serve as relics of the Tertiary period. The focal point is Tenerife's Mount Teide, Spain's highest peak, but the other islands offer equally compelling natural wonders, such as the Caldera de Taburiente on La Palma and the rugged ravines of La Gomera. The capital city, Santa Cruz, is a vibrant port town famous for its spectacular modern auditorium and one of the world's most exuberant Carnival celebrations. These islands are globally recognized for their pristine night skies, hosting world-class astronomical observatories." }, factsAdvanced: { de: [], hu: [
        "El Hierro szigete volt sok�ig az ismert vil�g nyugati v�ge a nulladik d�lk�r (a 'Vas-meridi�n') kijel�l�sekor az �korban.",
        "La Gomera ?si laurisilva erdej�t (Garajonay Nemzeti Park) az UNESCO a Vil�g�r�ks�g r�sz�v� nyilv�n�totta.",
        "La Palma sziget�n tal�lhat� a vil�g egyik legfontosabb obszervat�riuma, a Roque de los Muchachos, a kiv�telesen tiszta �jszakai �gbolt miatt.",
        "A 'Silbo Gomero', La Gomera sziget�nek f�ttynyelve hivatalos iskolai tant�rgy, amellyel ak�r 5 km-es t�vols�gba is lehet kommunik�lni."
      ], ro: [], en: [
        "The province includes four distinct national parks across its islands.",
        "Garajonay National Park in La Gomera is a UNESCO World Heritage site known for its ancient laurisilva forest.",
        "El Hierro is recognized as a pioneer in renewable energy, aiming for complete self-sufficiency.",
        "The Roque de los Muchachos Observatory on La Palma sits at an altitude of 2,396 meters."
      ] } },
  // Castilla-La Mancha (ES-CM) �?? 5 provinces
  { id: "ES-AB", type: "region", parent: "ES-CM", coords: [-1.8654, 38.9942], name: { de: "Albacete", hu: "Albacete", ro: "Albacete", en: "Albacete" }, description: { de: "Bekannt für Messerherstellung.", hu: "Késkészítésér�?l ismert.", ro: "Renumit pentru fabricarea cu�?itelor.", en: "Known for its knife-making industry." }, descriptionAdvanced: { de: "", hu: "Albacete tartom�ny Kaszt�lia-La Mancha d�lkeleti sz�l�n, a hatalmas spanyol felf�ld (Meseta) �s a mediterr�n partvid�k k�z�tti �tmeneti z�n�ban fekszik. A t�j j�r�szt sz�les, term�keny s�ks�gokb�l �s extenz�v mez?gazdas�gi ter�letekb?l �ll, ahol kiv�l� min?s�g? borokat �s s�fr�nyt termesztenek. Albacete f?v�rosa egy modern, iparosodott v�ros, amely eg�sz Spanyolorsz�gban, s?t nemzetk�zileg is h�res a magas min?s�g? ac�lk�s- �s bicskagy�rt�s�r�l. A tartom�ny d�li r�sz�n a s�ks�got a Sierra de Alcaraz �s a Segura hegyl�ncai v�ltj�k fel, amelyek gy�ny�r?, fenyvesekkel �s forr�sokkal teli nat�rparkokat k�n�lnak (Calares del Mundo). A vid�ki falvak, mint Alcal� del J�car, a hegyoldalakra �p�lt l�tv�nyos teraszos h�zaikkal vonzz�k a l�togat�kat.", ro: "", en: "Albacete is a province situated in the autonomous community of Castile-La Mancha, characterized by its vast plains and dramatic mountainous peripheries. Historically known for the production of finely crafted knives and cutlery, the capital city houses a dedicated museum that celebrates this centuries-old industrial heritage. The provincial landscape dramatically shifts from the flat expanses of La Mancha to the spectacular gorges and lush river valleys of the Calares del Mundo y de la Sima Natural Park. Albacete is famous for its vibrant Feria, an annual September festival held in a unique horseshoe-shaped fairground that draws millions of visitors. The rural areas preserve traditional Manchego culture, featuring ancient castles, vineyards, and agricultural traditions." }, factsAdvanced: { de: [], hu: [
        "Albacete a spanyol k�sek �s bicsk�k (navajas) t�rt�nelmi k�zpontja, a v�rosban M�zeum is tiszteleg a helyi k�sk�sz�t? mesters�g el?tt.",
        "A tartom�nyban tal�lhat� Chinchilla de Montearag�n, amelynek leny?g�z? m�r er?dje �s hegybe v�jt barlangh�zai vannak.",
        "A Calares del Mundo Nat�rparkban l�v? Mundo foly� forr�sa egy l�tv�nyos barlangb�l t�r el? egy 80 m�teres v�zes�s form�j�ban.",
        "Szeptemberben Albacete ad otthont Spanyolorsz�g egyik legnagyobb �s legr�gibb v�s�r�nak (Feria de Albacete), amely t�bb mint 300 �ves m�ltra tekint vissza."
      ], ro: [], en: [
        "The Albacete Cutlery Museum is located in the historic Casa de Hortelano.",
        "The Feria de Albacete has been declared a Festival of International Tourist Interest.",
        "The source of the Mundo River features a spectacular waterfall plunging from a cave.",
        "Albacete is the largest and most populous city in the region of Castile-La Mancha."
      ] } },
  { id: "ES-CR", type: "region", parent: "ES-CM", coords: [-3.9272, 38.9848], name: { de: "Ciudad Real", hu: "Ciudad Real", ro: "Ciudad Real", en: "Ciudad Real" }, description: { de: "Herz der La-Mancha-Ebene.", hu: "La Mancha síkságának szíve.", ro: "Inima câmpiei La Mancha.", en: "Heart of the La Mancha plain." }, descriptionAdvanced: { de: "", hu: "Ciudad Real tartom�ny a d�l-spanyolorsz�gi Kaszt�lia-La Mancha sz�v�ben ter�l el, a 'Don Quijote' kalandjainak igazi f�ldje. Ez az eldugott, gyakran nap�gette r�gi� a v�gtelen sz?l?�ltetv�nyek otthona, �gy Eur�pa egyik legnagyobb bortermel? vid�ke. A tartom�ny t�jk�pe tele van ?si vulk�ni form�ci�kkal �s lag�n�kkal, valamint ikonikus sz�lmalmokkal, mint a Campo de Criptana h�res malmai, amelyek a Cervantes-reg�ny lovagj�t ihlett�k. Ciudad Real ad otthont k�t k�l�nleges nemzeti parknak: a Tablas de Daimiel mocs�rvid�k�nek �s a Caba�eros erdeinek, amely a mediterr�n fl�ra �s fauna, p�ld�ul a fekete kesely?k utols� nagy mened�khelye. Gazdas�g�nak m�sik pill�re az Almad�n k�rny�ki t�rt�nelmi higanyb�ny�szat.", ro: "", en: "Ciudad Real is a province located in the heart of the Iberian Peninsula within the Castile-La Mancha region, profoundly intertwined with the literary legacy of Don Quixote. The expansive, sun-baked plains are dotted with historic windmills, particularly in towns like Campo de Criptana, perfectly evoking Miguel de Cervantes's famous novel. The province boasts exceptional ecological significance, home to the Tablas de Daimiel National Park, a vital wetland sanctuary for migrating waterfowl. It is also an area with significant volcanic history, evident in the crater lakes and distinct geological formations scattered across the Campo de Calatrava. Culturally, Ciudad Real features charming historic towns like Almagro, famous for its impeccably preserved 17th-century open-air theater." }, factsAdvanced: { de: [], hu: [
        "Az Almad�n b�ny�kb�l sz�rmazott a vil�g valaha felhaszn�lt higany�nak mintegy egyharmada, az UNESCO vil�g�r�ks�g r�sze.",
        "A Tablas de Daimiel Nemzeti Park Eur�pa egyik utols� folyami �rtere �s egyed�l�ll� �desv�zi vizeny?s �l?helye.",
        "Campo de Criptana t�z megmaradt sz�lmalm�b�l h�rom m�g mindig meg?rzi az eredeti, 16. sz�zadi bels? mechanizmus�t.",
        "Almagro, a tartom�ny egyik legr�gebbi v�rosa, b�szk�lkedhet a vil�g egyetlen �pen maradt, 17. sz�zadi fedett kom�diasz�nh�z�val (Corral de Comedias)."
      ], ro: [], en: [
        "The Corral de Comedias in Almagro is the only fully preserved 17th-century theater in Spain still in use.",
        "Tablas de Daimiel was declared a National Park in 1973 to protect its unique wetland ecosystem.",
        "The windmills of Campo de Criptana inspired the iconic 'tilting at windmills' scene in Don Quixote.",
        "Ciudad Real was founded by King Alfonso X the Wise in 1255."
      ] } },
  { id: "ES-CU", type: "region", parent: "ES-CM", coords: [-2.1319, 40.0699], name: { de: "Cuenca", hu: "Cuenca", ro: "Cuenca", en: "Cuenca" }, description: { de: "UNESCO-Altstadt mit hängenden Häusern.", hu: "UNESCO óváros függ�? házakkal.", ro: "Centrul vechi UNESCO cu casele suspendate.", en: "UNESCO old town with hanging houses." }, descriptionAdvanced: { de: "", hu: "Cuenca tartom�ny Kaszt�lia-La Mancha �szaki r�sz�n tal�lhat�, �s Spanyolorsz�g egyik leg�rdekesebb geol�giai arculat�val rendelkezik. A hegyvid�ki Serran�a de Cuenca r�gi�t m�ly kanyonok, fenyvesek �s elk�peszt? m�szk?alakzatok jellemzik, mint p�ld�ul a 'Ciudad Encantada' (Elvar�zsolt V�ros), ahol az er�zi� sz�rre�lis szobrokat form�lt a szikl�kb�l. Maga a f?v�ros, Cuenca egy UNESCO Vil�g�r�ks�g r�sz�t k�pez? k�z�pkori csoda, amely dr�maian magasodik k�t m�ly foly�szurdok, a J�car �s a Hu�car tal�lkoz�s�n�l. A v�ros legh�resebb l�tv�nyoss�gai a 'F�gg? H�zak' (Casas Colgadas), amelyek faf�b�l �p�lt erk�lyei sz�d�t? magass�gban ny�lnak a szakad�k f�l�. Cuenca hagyom�nyosan h�res az absztrakt m?v�szet�r?l �s a helyi ker�mi�kr�l is.", ro: "", en: "Cuenca is an extraordinary province in Castile-La Mancha, widely celebrated for its rugged natural beauty and remarkable historical architecture. The provincial capital, majestically perched atop a steep limestone spur between the J�car and Hu�car rivers, is globally famous for its gravity-defying 'Hanging Houses' (Casas Colgadas) built into the cliff faces. The ancient walled city is a well-preserved medieval fortress town featuring winding cobblestone streets, a magnificent Gothic cathedral, and a thriving modern art scene. Beyond the city, the province features the Enchanted City (Ciudad Encantada), an enchanting natural landscape filled with bizarre and towering karst rock formations sculpted by water and wind. The deep pine forests and dramatic gorges offer spectacular opportunities for rural tourism and outdoor adventure." }, factsAdvanced: { de: [], hu: [
        "A F�gg? H�zak (Casas Colgadas) Spanyolorsz�g egyik els? kort�rs absztrakt m?v�szeti m�zeum�nak adnak otthont 1966 �ta.",
        "A 'Ciudad Encantada' karsztos sziklak�pz?dm�nyei k�z�tt s�t�lva �gy �rezhetj�k, mintha gigantikus gomb�k �s emberi arcok k�z�tt j�rn�nk.",
        "Cuenca tartom�ny az Ib�riai-f�lsziget egyik legkisebb n�ps?r?s�g? ter�lete (kevesebb mint 12 f?/km�).",
        "A Cuencai Katedr�lis (Catedral de Santa Mar�a y San Juli�n) Spanyolorsz�g legels? g�tikus st�lusban �p�lt katedr�lisainak egyike."
      ], ro: [], en: [
        "The Historic Walled Town of Cuenca was declared a UNESCO World Heritage Site in 1996.",
        "The Casas Colgadas house the Spanish Museum of Abstract Art.",
        "Cuenca Cathedral was one of the earliest examples of Gothic architecture in Spain, begun in 1196.",
        "The Ciudad Encantada was declared a Natural Site of National Interest in 1929."
      ] } },
  { id: "ES-GU", type: "region", parent: "ES-CM", coords: [-2.6325, 40.6321], name: { de: "Guadalajara", hu: "Guadalajara", ro: "Guadalajara", en: "Guadalajara" }, description: { de: "Provinz östlich von Madrid.", hu: "Tartomány Madridtól keletre.", ro: "Provincie la est de Madrid.", en: "Province east of Madrid." }, descriptionAdvanced: { de: "", hu: "Guadalajara tartom�ny K�z�p-Spanyolorsz�gban tal�lhat�, �tmenetet k�pezve a madridi metropolisz �s a ritk�n lakott arag�niai hegyvid�kek k�z�tt. A tartom�ny �szaki �s keleti r�sze hegyvid�ki, gy�ren lakott ter�let, amelyet fest?i fekete palafalvak (Arquitectura Negra) p�tty�znek. Ezek a falvak s�t�t, durva palak?b?l �p�ltek, t�k�letesen beleolvadva a zord term�szeti k�rnyezetbe. A r�gi� d�lebbre es? r�sze, a La Alcarria nev? kiterjedt felf�ld m�z�r?l �s levendulamez?ir?l h�res, amelyeket Camilo Jos� Cela h�res �tle�r�sa tett halhatatlann�. Guadalajara f?v�rosa a Palacio del Infantado r�v�n a spanyol renesz�nsz �p�t�szet egyik legszebb polg�ri �p�let�vel b�szk�lkedhet.", ro: "", en: "Guadalajara is a province in the northern part of Castile-La Mancha, serving as a tranquil and picturesque transition between the vast central plateau and the rugged Iberian System. The region is notable for its 'Black Architecture' villages, where traditional houses are constructed entirely from dark slate, blending seamlessly into the mountain landscape. The historic town of Sig�enza is a major cultural highlight, featuring an imposing medieval castle that now serves as a parador, and a striking cathedral. The province's literary significance was famously cemented by Camilo Jos� Cela's travelogue, 'Journey to the Alcarria', which highlights the rustic charm and serene beauty of the countryside. Guadalajara perfectly balances rich medieval heritage with vast, unspoiled natural spaces ideal for hiking." }, factsAdvanced: { de: [], hu: [
        "Az 'Arquitectura Negra' (fekete �p�t�szet) falvai, mint p�ld�ul Valverde de los Arroyos, Spanyolorsz�g egyik legk�l�nlegesebb n�pi �p�t�szeti �tvonal�t adj�k.",
        "A Palacio del Infantado egyed�l�ll� 'gy�m�ntpontos' homlokzata az iszl�m mud�jar �s a renesz�nsz st�lus egyedi kever�ke.",
        "A brihuegai r�gi�ban j�liusban hatalmas levendulamez?k borulnak lila vir�gba, amelyet Spanyolorsz�g Provence-j�nak is neveznek.",
        "A Hayedo de Tejera Negra a tartom�nyban tal�lhat�, �s Eur�pa egyik legd�lebbi term�szetes b�kkerdeje."
      ], ro: [], en: [
        "The Infantado Palace in Guadalajara city is a masterpiece of late Gothic and Renaissance architecture.",
        "Sig�enza Cathedral dates back to the 12th century and originally served a defensive function.",
        "The Hayedo de Tejera Negra is one of the southernmost beech forests in Europe.",
        "The province's Alcarria region is renowned for its high-quality, denomination-protected honey."
      ] } },
  { id: "ES-TO", type: "region", parent: "ES-CM", coords: [-3.9272, 39.8628], name: { de: "Toledo", hu: "Toledo", ro: "Toledo", en: "Toledo" }, description: { de: "Historische Kaiserstadt mit gotischer Kathedrale.", hu: "Történelmi császárváros gótikus katedrálissal.", ro: "Ora�? imperial istoric cu catedral�? gotic�?.", en: "Historic imperial city with Gothic cathedral." }, descriptionAdvanced: { de: "", hu: "Toledo tartom�ny az orsz�g geometriai �s t�rt�nelmi sz�v�ben helyezkedik el, Kaszt�lia-La Mancha nyugati fel�n. A tartom�nyt az er?s m�r, zsid� �s kereszt�ny kultur�lis �r�ks�g hatja �t, amely legink�bb a leny?g�z? f?v�rosban, Toled�ban �sszpontosul. A Tajo foly� kanyarg�s v�lgy�n t�l a vid�k a tipikus La Mancha-i t�jat k�n�lja: olajfaligetek, sz?l?�ltetv�nyek �s hatalmas t�rt�nelmi birtokok. A tartom�ny d�li r�szein, a Montes de Toledo hegyvid�k�n szarvasok �s vadkanok �lnek a s?r? mediterr�n erd?kben. A vid�k olyan h�res gasztron�miai term�kekkel b�szk�lkedhet, mint a Manchego sajt, a marcip�n �s a h�res toled�i ol�vaolaj.", ro: "", en: "Toledo is a prominent province in central Spain, historically serving as the geographical and spiritual heart of the Iberian Peninsula. The magnificent capital city, dramatically encircled by the Tagus River, is often referred to as the 'City of Three Cultures' due to its rich heritage of Christian, Jewish, and Muslim communities living together. Its incredibly dense historic center is a labyrinth of narrow streets, housing monumental landmarks like the commanding Alc�zar, the intricate Synagogue of Santa Mar�a la Blanca, and the spectacular Gothic Cathedral. Toledo's legacy is further enriched by its association with the renowned painter El Greco and its centuries-old tradition of exquisite sword-making and damascene metalwork. The wider province encompasses the classic landscapes of La Mancha, featuring historic castles and sweeping plains." }, factsAdvanced: { de: [], hu: [
        "Toledo v�ros�t h�rom oldalr�l term�szetes �rokk�nt v�di a m�ly Tajo foly� szurdoka.",
        "Talavera de la Reina telep�l�s t�bb �vsz�zados, k�k-s�rga �s sz�nes ker�mi�ir�l (azulejos) ismert vil�gszerte.",
        "Az Alc�zar er?d Toled�ban a spanyol polg�rh�bor� egyik legh�resebb �s leghosszabb ostrom�nak helysz�ne volt.",
        "Oropesa v�rosa leny?g�z? k�z�pkori v�r�val �s Parador sz�llod�j�val uralja a k�rnyez? s�ks�gokat."
      ], ro: [], en: [
        "The Historic City of Toledo was declared a UNESCO World Heritage site in 1986.",
        "Toledo Cathedral is considered the magnum opus of the Gothic style in Spain.",
        "The city was the capital of the Visigothic Kingdom from the 6th to the 8th century.",
        "El Greco lived in Toledo from 1577 until his death in 1614, painting many of his masterpieces there."
      ] } },
  // Castilla y León (ES-CL) �?? 9 provinces
  { id: "ES-AV", type: "region", parent: "ES-CL", coords: [-4.6976, 40.6566], name: { de: "Ávila", hu: "Ávila", ro: "Avila", en: "Ávila" }, description: { de: "Komplett erhaltene mittelalterliche Stadtmauer.", hu: "Teljesen fennmaradt középkori városfal.", ro: "Zid medieval complet conservat.", en: "Completely preserved medieval city walls." }, descriptionAdvanced: { de: "", hu: "�vila tartom�ny Spanyolorsz�g �szaknyugati fel�n, Kaszt�lia �s Le�n r�gi�ban fekszik, �s a hatalmas Gredos-hegys�g (Sierra de Gredos) vad, gr�nitcs�csai uralj�k. Ez a leny?g�z? hegys�g krist�lytiszta hegyi tavakat, m�ly v�lgyeket �s Spanyolorsz�g egyik legjelent?sebb k?sz�li kecske popul�ci�j�t rejti. A tartom�ny f?v�rosa, �vila a maga t�k�letes �llapotban fennmaradt, 2,5 km hossz� k�z�pkori v�rosfal�val UNESCO Vil�g�r�ks�g, �s Spanyolorsz�g legmagasabban fekv? tartom�nyi f?v�rosa. A r�gi� m�lyen vall�sos hagyom�nyokkal b�r, hiszen itt sz�letett a 16. sz�zadi h�res misztikus szent, �vilai Szent Ter�z. A zord hegyvid�ki kl�ma ellen�re a v�dett v�lgyekben (p�ld�ul a Ti�tar-v�lgyben) m�g f�g�t �s csereszny�t is termesztenek.", ro: "", en: "�vila is a profoundly historic province in the autonomous community of Castile and Le�n, characterized by its high altitude and dramatic mountainous terrain. The capital city is instantly recognizable by its spectacularly preserved 11th-century Romanesque walls, which completely encircle the medieval old town and feature over 80 robust semicircular towers. �vila is deeply associated with Saint Teresa of �vila, a prominent 16th-century mystic and reformer whose legacy permeates the city's numerous convents and churches. Beyond the capital, the province is dominated by the rugged Sierra de Gredos, a majestic mountain range offering exceptional hiking trails and sheltering diverse wildlife, including the majestic Spanish ibex. The region perfectly embodies the austere beauty and profound spirituality of traditional Castile." }, factsAdvanced: { de: [], hu: [
        "�vila v�rosfala a 11. sz�zadban �p�lt, 88 f�lk�r�ves toronnyal �s 9 monument�lis kapuval rendelkezik.",
        "A Sierra de Gredosban tal�lhat� a Pico Almanzor (2592 m), amely a spanyol K�zponti-hegys�g (Sistema Central) legmagasabb cs�csa.",
        "�vilai Szent Ter�z a karmelita rend reform�tora �s a katolikus egyh�z els? n?i egyh�ztan�t�ja volt.",
        "Az �vilai T-csont steak (Chulet�n de �vila) egy helyi, hatalmas m�ret? �s kiv�l� min?s�g? marhaszelet, amelyet par�zson s�tnek."
      ], ro: [], en: [
        "The Walls of �vila extend for approximately 2.5 kilometers and include 88 watchtowers.",
        "The Old Town of �vila, with its Extra-Muros Churches, is a UNESCO World Heritage Site.",
        "�vila is the highest provincial capital in Spain, situated at 1,132 meters above sea level.",
        "Pico Almanzor in the Sierra de Gredos is the highest point in central Spain at 2,592 meters."
      ] } },
  { id: "ES-BU", type: "region", parent: "ES-CL", coords: [-3.7038, 42.3440], name: { de: "Burgos", hu: "Burgos", ro: "Burgos", en: "Burgos" }, description: { de: "Gotische Kathedrale und Heimat El Cids.", hu: "Gótikus katedrális és El Cid szül�?városa.", ro: "Catedrala gotic�? �?i patria lui El Cid.", en: "Gothic cathedral and birthplace of El Cid." }, descriptionAdvanced: { de: "", hu: "Burgos tartom�ny �szak-Spanyolorsz�gban tal�lhat�, �s a Kaszt�liai Kir�lys�g t�rt�nelmi b�lcs?jek�nt ismert. A r�gi�t a Szent Jakab-�t (El Camino de Santiago) szeli kett�, amely �vsz�zadok �ta gazdag�tja a helyi kult�r�t �s �p�t�szetet. A f?v�ros, Burgos, a fens�ges g�tikus katedr�lis�val �s a spanyol nemzeti h?s, El Cid legend�j�val var�zsolja el a l�togat�kat. A tartom�ny ter�let�n tal�lhat� az Atapuerca-hegys�g, a vil�g egyik legfontosabb paleoantropol�giai lel?helye, ahol Eur�pa legr�gebbi emberi maradv�nyait fedezt�k fel. A d�li Aranda de Duero k�rny�ke a h�res Ribera del Duero borvid�k k�zpontja, amely Spanyolorsz�g legkiv�l�bb v�r�sborait adja.", ro: "", en: "Burgos is a distinguished province in northern Spain within the Castile and Le�n region, historically significant as the ancient capital of the Kingdom of Castile. The jewel of the province is the city of Burgos, home to an awe-inspiring French Gothic cathedral that serves as a masterpiece of medieval architecture and the resting place of the legendary military leader El Cid. The region is a critical crossroads for the Camino de Santiago pilgrimage route, dotted with historic monasteries such as Las Huelgas and the Charterhouse of Miraflores. Furthermore, the province holds immense global archaeological importance due to the Atapuerca Mountains, where some of the oldest hominin fossils in Europe have been discovered. The landscape blends sweeping plateaus with picturesque vineyards belonging to the prestigious Ribera del Duero wine region." }, factsAdvanced: { de: [], hu: [
        "Az atapuercai �sat�sok sor�n t�bb mint 1,2 milli� �ves hominida maradv�nyokat t�rtak fel, �t�rva az eur�pai betelep�l�s t�rt�net�t.",
        "A burgosi katedr�lis a francia g�tika mint�j�ra �p�lt, de p�ratlan, csipkeszer? spanyol g�tikus tornyai vannak.",
        "Santo Domingo de Silos kolostora h�res a benc�s szerzetesek vil�gszerte ismert gregori�n �nek�r?l.",
        "A 'Morcilla de Burgos' egy k�l�nleges, rizzsel �s hagym�val k�sz�lt spanyol v�res hurka, a r�gi� gasztron�miai b�szkes�ge."
      ], ro: [], en: [
        "Burgos Cathedral was inscribed as a UNESCO World Heritage site in 1984.",
        "The archaeological site of Atapuerca yielded human remains dating back over a million years.",
        "Rodrigo D�az de Vivar, known as El Cid, was born in a village near Burgos in 1048.",
        "The province's Ribera del Duero region is world-renowned for its high-quality red wines produced from Tempranillo grapes."
      ] } },
  { id: "ES-LE", type: "region", parent: "ES-CL", coords: [-5.5597, 42.5987], name: { de: "León", hu: "León", ro: "León", en: "León" }, description: { de: "Mittelalterliche Königsstadt im Nordwesten.", hu: "Középkori királyváros az északnyugati részen.", ro: "Ora�? regal medieval în nord-vest.", en: "Medieval royal city in the northwest." }, descriptionAdvanced: { de: "", hu: "Le�n tartom�ny Kaszt�lia �s Le�n r�gi� �szaknyugati r�sz�n fekszik, �s t�rt�nelmileg az ?si Le�ni Kir�lys�g f�ggetlen k�zpontja volt. A tartom�ny �szaki hat�rait a Kant�briai-hegys�g (Cordillera Cant�brica) zord vonulatai, k�zt�k a Picos de Europa d�li lejt?i alkotj�k. A Las M�dulas egy leny?g�z? �s egyed�l�ll� t�j: egy ?si, hatalmas r�mai aranyb�nya, ahol a r�maiak v�z nyom�s�val (ruina montium) robbantott�k fel a hegyeket, sz�rre�lis, v�r�ses sziklaalakzatokat h�trahagyva. Maga Le�n v�rosa h�res a francia ihlet�s?, hatalmas �lom�veg ablakokkal rendelkez? g�tikus katedr�lis�r�l �s a Barrio H�medo ny�zsg? tapas b�rjair�l. Astorga �s Ponferrada v�rosai a Szent Jakab-�t kulcsfontoss�g�, t�rt�nelmi meg�ll�i.", ro: "", en: "Le�n is an expansive province in the northwest of Spain, boasting a majestic legacy as one of the fundamental historic kingdoms that forged the Spanish nation. The capital city is celebrated for its stunning Gothic cathedral, famous for its magnificent stained-glass windows that bathe the interior in kaleidoscopic light. The province is deeply intertwined with the Camino de Santiago, featuring extraordinary landmarks like the Renaissance-style San Marcos convent and the Episcopal Palace of Astorga designed by Antoni Gaud�. The natural landscape is equally spectacular, highlighted by the striking Roman gold-mining landscape of Las M�dulas and the dramatic limestone peaks of the Picos de Europa in the north. Le�n harmoniously combines grand medieval monuments with profound natural beauty and rugged traditions." }, factsAdvanced: { de: [], hu: [
        "A Las M�dulas az eg�sz R�mai Birodalom legnagyobb felsz�ni aranyb�ny�ja volt, ma UNESCO Vil�g�r�ks�g.",
        "A le�ni katedr�lis (Pulchra Leonina) t�bb mint 1800 n�gyzetm�ternyi 13-15. sz�zadi eredeti �lom�veg ablakkal rendelkezik.",
        "Antoni Gaud� tervezte a ponferradai �s az astorgai P�sp�ki Palot�t, ami Katal�ni�n k�v�li ritka alkot�sainak egyike.",
        "A 'Botillo del Bierzo' egy kiad�s, hagyom�nyos helyi h�s�tel, amely egy vastagb�lbe t�lt�tt, f�st�lt �s p�colt sert�sh�s-v�logat�s."
      ], ro: [], en: [
        "Las M�dulas was the largest open-pit gold mine in the entire Roman Empire.",
        "Le�n Cathedral features over 1,800 square meters of original medieval stained glass.",
        "The Kingdom of Le�n was a major independent kingdom in the Iberian Peninsula from 910 to 1230.",
        "The Casa Botines in Le�n is one of only three buildings constructed by Gaud� outside Catalonia."
      ] } },
  { id: "ES-P",  type: "region", parent: "ES-CL", coords: [-4.5288, 42.0100], name: { de: "Palencia", hu: "Palencia", ro: "Palencia", en: "Palencia" }, description: { de: "Kleine Provinz mit romanischer Kunst.", hu: "Kis tartomány román stílusú művészettel.", ro: "Provincie mic�? cu art�? romanic�?.", en: "Small province with Romanesque art." }, descriptionAdvanced: { de: "", hu: "Palencia tartom�ny a hatalmas kaszt�liai fenns�k sz�v�ben ter�l el, �s Spanyolorsz�g egyik leggazdagabb, de legkev�sb� ismert rom�n kori �p�t�szeti �r�ks�g�vel b�szk�lkedhet. A 'Rom�n st�lus �szaki �tvonala' (Ruta del Rom�nico Norte) sor�n t�bb tucat t�k�letesen meg?rz�tt, apr� k�z�pkori templom fedezhet? fel a hegyi falvakban. A tartom�ny �szaki r�sz�n magasod� Monta�a Palentina leny?g�z? hegyvid�ki t�jakat k�n�l. A d�lebbre fekv? f?v�rosban, Palenci�ban tal�lhat� Spanyolorsz�g els? egyeteme (13. sz�zad), valamint egy hatalmas g�tikus katedr�lis, amelyet 'Az ismeretlen sz�p' n�ven emlegetnek. A r�gi�t a Canal de Castilla, egy 18. sz�zadi, leny?g�z? m�rn�ki teljes�tm�nyt jelent? haj�zhat� csatorna is �tszeli.", ro: "", en: "Palencia is a historically rich province in the autonomous community of Castile and Le�n, nestled between the sweeping plains of the Tierra de Campos and the rugged Cantabrian Mountains. Often referred to as a hidden treasure of Romanesque architecture, the province is dotted with an extraordinary number of exquisitely preserved medieval churches and monasteries along the Camino de Santiago. The capital city, though tranquil, boasts a magnificent Gothic cathedral affectionately known as the 'Unknown Beauty' due to its vast scale and relatively low profile among tourists. The northern mountainous region features pristine natural parks with stunning reservoirs and excellent hiking trails. Palencia offers an authentic, off-the-beaten-path experience highlighting the deep historical roots of rural Spain." }, factsAdvanced: { de: [], hu: [
        "A Cristo del Otero (Otero-Krisztus) egy 21 m�ter magas szobor Palencia v�rosa felett, amely a vil�g egyik legmagasabb Krisztus-szobra.",
        "A Palenciai Egyetem, amelyet 1212 k�r�l alap�tottak, az Ib�riai-f�lsziget legr�gebbi fels?oktat�si int�zm�nye volt (b�r k�s?bb Valladolidsba k�lt�z�tt).",
        "Ba�os de Cerrato faluban tal�lhat� a San Juan Bautista-templom, amely Spanyolorsz�g legr�gebbi (7. sz�zadi) vizig�t temploma.",
        "A Canal de Castilla eredetileg a kaszt�liai gabona tengerparti sz�ll�t�s�ra �p�lt a 18-19. sz�zadban."
      ], ro: [], en: [
        "The Cathedral of San Antol�n in Palencia is the third largest cathedral in Spain.",
        "Palencia was the site of the first university founded in Spain, established around 1212.",
        "The province boasts one of the highest concentrations of Romanesque monuments in all of Europe.",
        "The Canal de Castilla, a major 18th-century engineering feat, runs extensively through the province."
      ] } },
  { id: "ES-SA", type: "region", parent: "ES-CL", coords: [-5.6640, 40.9701], name: { de: "Salamanca", hu: "Salamanca", ro: "Salamanca", en: "Salamanca" }, description: { de: "Universität und UNESCO-Altstadt.", hu: "Egyetemi város és UNESCO óváros.", ro: "Universitate �?i centru vechi UNESCO.", en: "University city and UNESCO old town." }, descriptionAdvanced: { de: "", hu: "Salamanca tartom�ny a spanyol-portug�l hat�r ment�n, egy hatalmas, t�lgyerd?kkel �s szikl�s dombokkal bor�tott Dehesa r�gi�ban fekszik. A tartom�ny vil�gszerte ismert a leny?g�z? f?v�ros�r�l, Salamanc�r�l, a spanyol renesz�nsz (Platereszk st�lus) �kk�v�r?l �s az egyik legr�gebbi eur�pai egyetemv�rosr�l. A v�roson k�v�l a term�szeti sz�ps�gek domin�lnak, mint a Las Batuecas �s a Sierra de Francia hegyvid�kek, ahol hagyom�nyos, fav�zas k?h�zakkal rendelkez? falvak (p�ld�ul La Alberca) rejt?znek. A portug�l hat�ron kanyarg� Duero foly� m�ly kanyonjai, az Arribes del Duero Nemzeti Park, dr�mai, fjordszer? t�jakat alkotnak. A r�gi� �ghajlata ide�lis a h�res Guijuelo-i ib�riai sonka �rlel�s�re.", ro: "", en: "Salamanca is an illustrious province in western Spain, renowned globally for its monumental capital city that gleams with golden Villamayor sandstone architecture. The city centers around the magnificent Plaza Mayor, widely considered one of the most beautiful and harmonious squares in the country. Salamanca's profound prestige stems from its historic university, which has been a beacon of learning and intellectual thought since the early 13th century. Visitors are captivated by the intricate Plateresque facades, the remarkable juxtaposition of the Old and New Cathedrals, and the vibrant, youthful atmosphere driven by its massive student population. The wider province features robust agricultural plains, the rugged Arribes del Duero natural park bordering Portugal, and a rich tradition of cured Iberian meats." }, factsAdvanced: { de: [], hu: [
        "La Alberca volt az els? spanyolorsz�gi telep�l�s, amelyet (1940-ben) teljes eg�sz�ben Nemzeti T�rt�nelmi M?eml�kk� nyilv�n�tottak.",
        "A Ciudad Rodrigo-i v�r �s annak massz�v v�rosfalai a spanyol f�ggetlens�gi h�bor� kulcsfontoss�g� hat�rv�delmi er?djei voltak.",
        "A Guijuelo r�gi� Spanyolorsz�g egyik legh�resebb �s legelismertebb ib�riai sonka (Jam�n Ib�rico) �rlel? k�zpontja.",
        "Az Arribes del Duero folyami szurdokai n�hol a 400 m�teres m�lys�get is el�rik, Spanyolorsz�g �s Portug�lia term�szetes hat�r�t k�pezve."
      ], ro: [], en: [
        "The University of Salamanca, founded in 1218, is the oldest existing university in Spain.",
        "The Old City of Salamanca was designated a UNESCO World Heritage Site in 1988.",
        "Salamanca is home to two cathedrals joined together; the Old Cathedral (12th century) and New Cathedral (16th century).",
        "The Plaza Mayor was constructed in the 18th century in traditional Spanish Baroque style."
      ] } },
  { id: "ES-SG", type: "region", parent: "ES-CL", coords: [-4.1180, 40.9429], name: { de: "Segovia", hu: "Segovia", ro: "Segovia", en: "Segovia" }, description: { de: "Römisches Aquädukt und Alcázar.", hu: "Római vízvezeték és Alcázar.", ro: "Apeduct roman �?i Alcázar.", en: "Roman aqueduct and Alcázar." }, descriptionAdvanced: { de: "", hu: "Segovia tartom�ny Kaszt�lia �s Le�n d�li r�sz�n ter�l el, a Sierra de Guadarrama hegyvonulata �s a v�gtelen kaszt�liai fenns�k k�z�tt. A f?v�ros, Segovia a vil�g�r�ks�g r�sze, ahol a r�mai m�rn�ki zsenialit�s (a fens�ges, bolt�ves r�mai v�zvezet�k) �s a spanyol k�s? k�z�pkor tal�lkozik. A v�r (Alc�zar), amely egy sziklaszirt �l�n egyens�lyoz, �ll�t�lag Walt Disney-t is inspir�lta, m�g a v�ros g�tikus katedr�lis�t egyszer?en a 'Katedr�lisok H�lgy�nek' nevezik eleganci�ja miatt. A tartom�ny ter�let�n tal�lhat� az impoz�ns, 18. sz�zadi La Granja de San Ildefonso kir�lyi palota is, amelyet a spanyol Versailles-k�nt emlegetnek gy�ny�r? barokk kertjei �s sz�k?k�tjai miatt.", ro: "", en: "Segovia is a captivating province located just north of Madrid, offering a majestic journey into Spain's rich architectural and royal history. The capital city is dominated by three spectacular monuments: the flawlessly preserved Roman Aqueduct that cuts through the town, the soaring late-Gothic Cathedral, and the fairy-tale Alc�zar castle perched dramatically on a rocky promontory. Beyond the capital, the province is home to magnificent royal retreats such as the Royal Palace of La Granja de San Ildefonso, featuring extravagant Baroque gardens and monumental fountains that rival Versailles. The landscape is defined by the pine-covered slopes of the Sierra de Guadarrama, providing stunning natural contrast to the historic stone towns and Romanesque churches. Segovia is also famous for its traditional gastronomy, particularly its celebrated roast suckling pig." }, factsAdvanced: { de: [], hu: [
        "A segoviai r�mai v�zvezet�k (Acueducto de Segovia) t�bb mint 20 000 gr�nitt�mbb?l �ll, amelyeket habarcs n�lk�l illesztettek egym�shoz.",
        "A La Granja kir�lyi palot�t V. F�l�p �p�ttette, aki az els? Bourbon-h�zi spanyol kir�ly volt, �s a francia udvar pomp�j�t ut�nozta.",
        "Pedraza v�rosa az egyik legjobban meg?rz�tt k�z�pkori falu, amely nyaranta h�res a 'Gyerty�k �jszak�ja' koncertjeir?l.",
        "Segovia gasztron�miai specialit�sa a 'Cochinillo Asado' (s�lt malac), amelyet annyira puh�ra s�tnek, hogy t�ny�rral is fel lehet v�gni."
      ], ro: [], en: [
        "The Roman Aqueduct of Segovia features over 160 arches and was built without mortar.",
        "The Old Town of Segovia and its Aqueduct became a UNESCO World Heritage Site in 1985.",
        "The Alc�zar of Segovia is rumored to have inspired Walt Disney's Cinderella Castle.",
        "The Royal Palace of La Granja was built in the early 18th century by King Philip V."
      ] } },
  { id: "ES-SO", type: "region", parent: "ES-CL", coords: [-2.4652, 41.7640], name: { de: "Soria", hu: "Soria", ro: "Soria", en: "Soria" }, description: { de: "Dünnstbesiedelte Provinz mit romanischem Erbe.", hu: "A legelmaradottabb tartomány román örökséggel.", ro: "Provincie slab populat�? cu mo�?tenire romanic�?.", en: "Sparsely populated province with Romanesque heritage." }, descriptionAdvanced: { de: "", hu: "Soria tartom�ny Kaszt�lia �s Le�n keleti perem�n fekszik, �s Spanyolorsz�g egyik legkisebb n�ps?r?s�g?, de term�szeti �s t�rt�nelmi kincsekben leggazdagabb r�gi�ja. Soria t�jait v�gtelen, csendes fenyvesek, �rintetlen foly�v�lgyek �s m�ly kanyonok (mint a Ca��n del R�o Lobos) jellemzik. A tartom�ny k�zpontja, Soria v�rosa a Duero foly� partj�n, k�lt?ket megihlet?, romantikus �s melankolikus hangulattal b�r, tele gy�ny�r? rom�n st�lus� templomokkal. Soria t�rt�nelm�nek legfontosabb fejezete a keltib�r h?s�k v�rosa, Numantia, amely a v�gs?kig ellen�llt a r�mai h�d�t�knak az i. e. 2. sz�zadban. A r�gi� ?szi gomb�szati paradicsomk�nt �s a szarvasgomba termeszt�s�r?l is ismert.", ro: "", en: "Soria is a tranquil and deeply historic province in the eastern part of Castile and Le�n, characterized by its sparse population and vast, unspoiled landscapes. It holds significant cultural importance in Spain as the setting for the epic heroism of Numantia, an ancient Celtiberian settlement that famously resisted Roman conquest. The province features austere but beautiful medieval architecture, with a wealth of Romanesque arcades, rural chapels, and castles scattered across the high plains. The natural environment is exceptionally poetic, highlighted by the mysterious Black Lagoon (Laguna Negra) and the sweeping canyon of the R�o Lobos. Soria's rustic charm, serene environment, and evocative medieval ruins have famously inspired acclaimed Spanish poets like Antonio Machado." }, factsAdvanced: { de: [], hu: [
        "Numantia v�rosa t�bb mint 13 �vig �llt ellen a r�mai l�gi�knak, �s a v�d?k az �hhal�lt �s az �ngyilkoss�got v�lasztott�k a megad�s helyett.",
        "A Ca��n del R�o Lobos Nat�rpark hatalmas m�szk? szurdok�ban a fak�kesely?k (Buitre leonado) hatalmas kol�ni�ja �l.",
        "Soria s?r?n bor�tott fenyveserdeiben ('Pinares') terem Spanyolorsz�g fekete szarvasgomb�j�nak (tuber melanosporum) jelent?s r�sze.",
        "A tartom�ny mind�ssze kb. 9 lakos/km� n�ps?r?s�g�vel a 'Lakatlan Spanyolorsz�g' (Espa�a Vaciada) legemblematikusabb p�ld�ja."
      ], ro: [], en: [
        "Soria is the least populated province in Spain, with an average density of less than 9 inhabitants per square kilometer.",
        "The ancient settlement of Numantia fell to the Roman Republic in 133 BC after a legendary siege.",
        "The R�o Lobos Canyon is a protected natural park known for its large colony of griffon vultures.",
        "The hermitage of San Baudelio de Berlanga features unique Mozarabic architecture and 11th-century frescoes."
      ] } },
  { id: "ES-VA", type: "region", parent: "ES-CL", coords: [-4.7245, 41.6523], name: { de: "Valladolid", hu: "Valladolid", ro: "Valladolid", en: "Valladolid" }, description: { de: "Einstige Hauptstadt Spaniens.", hu: "Spanyolország egykori f�?városa.", ro: "Fosta capital�? a Spaniei.", en: "Former capital of Spain." }, descriptionAdvanced: { de: "", hu: "Valladolid tartom�ny Kaszt�lia sz�v�ben helyezkedik el, �s t�rt�nelmileg az orsz�g egyik legfontosabb politikai �s gazdas�gi k�zpontja volt. A r�gi� a h�res Duero foly� v�lgy�ben fekszik, amely a vil�g egyik legelismertebb bortermel? ter�let�v� tette (a tartom�nyban h�rom f? DO borvid�k is tal�lhat�: Ribera del Duero, Rueda �s Cigales). A f?v�ros, Valladolid, r�vid ideig a Spanyol Birodalom f?v�rosa volt a 17. sz�zadban, �s csod�latos renesz�nsz �p�t�szetet ?riz. Olyan h�res t�rt�nelmi szem�lyek k�thet?k ide, mint Cervantes, aki itt �lt, Kolumbusz Krist�f, aki itt halt meg, vagy a Katolikus Kir�lyok, akik itt h�zasodtak �ssze. A vid�ket hatalmas, t�k�letes �llapotban fennmaradt k�z�pkori v�rak, mint Pe�afiel �s La Mota domin�lj�k.", ro: "", en: "Valladolid is a prominent province located in the heart of the Castile and Le�n region in northwestern Spain. Historically, its capital city of the same name served briefly as the capital of the Spanish Empire under King Philip III. The province is characterized by its expansive plains and is divided by the Pisuerga and Douro rivers. It is highly celebrated for its rich agricultural heritage, particularly its world-renowned wine regions such as Ribera del Duero, Rueda, and Toro. Visitors can explore a wealth of Renaissance architecture, majestic castles, and centuries-old cultural traditions throughout the area." }, factsAdvanced: { de: [], hu: [
        "Pe�afiel v�r�t egy keskeny hegygerincre �p�tett�k, �s alakja egy hatalmas k?haj�ra eml�keztet, amely a v�gtelen s�ks�gon �szik.",
        "Valladolid volt a sz�nhelye a h�rhedt 1550-es valladolidi vit�nak, amely az amerikai ?slakosok jogair�l sz�lt.",
        "A Nemzeti Szobr�szati M�zeum (Valladolidban) Spanyolorsz�g legfontosabb spanyol polikr�m faszobor gy?jtem�ny�vel rendelkezik.",
        "A Rueda borvid�k els?sorban kiv�l� �s friss�t? feh�rborair�l (Verdejo sz?l?) ismert nemzetk�zileg."
      ], ro: [], en: [
        "Served as the capital of the Spanish Empire from 1601 to 1606.",
        "Home to the University of Valladolid, one of the oldest universities in Europe, established in 1241.",
        "Features five distinct Denominaciones de Origen (DO) for wine, including Ribera del Duero and Rueda.",
        "The famous explorer Christopher Columbus died in the city of Valladolid on May 20, 1506."
      ] } },
  { id: "ES-ZA", type: "region", parent: "ES-CL", coords: [-5.7448, 41.5034], name: { de: "Zamora", hu: "Zamora", ro: "Zamora", en: "Zamora" }, description: { de: "Romanische Kathedrale am Duero.", hu: "Roman stílusú katedrális a Duero mentén.", ro: "Catedral�? romanic�? pe Duero.", en: "Romanesque cathedral on the Duero." }, descriptionAdvanced: { de: "", hu: "Zamora tartom�ny Spanyolorsz�g �szaknyugati hat�rvid�k�n, Portug�li�val szomsz�dosan tal�lhat�, �s a k�z�pkori ib�riai t�rt�nelem egyik legcsendesebb ?rz?je. A f?v�ros, Zamora, a Duero foly� partj�n fekszik, �s Eur�pa legnagyobb rom�n st�lus� templomkoncentr�ci�j�val b�szk�lkedhet (t�bb mint 20 fennmaradt templom), ki�rdemelve a 'Rom�n St�lus V�rosa' c�met. A tartom�ny nyugati perem�n az Arribes del Duero Term�szeti Park m�ly, leny?g�z? kanyonjai term�szetes hat�rt k�peznek a szomsz�dos orsz�ggal. �szakon a Sanabria-t� (Lago de Sanabria) ny�jt gy�ny�r? l�tv�nyt, amely az Ib�riai-f�lsziget legnagyobb term�szetes gleccsertava. A h�sv�ti nagyh�t (Semana Santa) Zamor�ban h�res s�t�t, m�lyen megind�t� �s csendes k�rmeneteir?l.", ro: "", en: "Zamora is a tranquil province located in western Spain near the border with Portugal, part of the autonomous community of Castile and Le�n. The landscape is defined by the sweeping Castilian plateau and the majestic Douro River, which cuts through its historic capital. Zamora is renowned for its exceptional concentration of Romanesque architecture, earning its capital the title Museum of Romanesque Art. The region also boasts a deep cultural heritage, epitomized by its solemn and historic Holy Week (Semana Santa) celebrations. Surrounding the urban centers, the countryside features stunning natural parks and traditional agricultural communities." }, factsAdvanced: { de: [], hu: [
        "A Sanabria-t� mintegy 100 000 �vvel ezel?tt alakult ki egy hatalmas j�gkorszaki gleccser olvad�s�b�l.",
        "Zamora biz�nci hat�sokat mutat� katedr�lis�nak k�l�nleges, pikkelyszer? k?kupol�ja van, amely ritkas�g Spanyolorsz�gban.",
        "A Toro borvid�k (DO Toro) testes, s�t�t �s er?s v�r�sborai �ll�t�lag m�g Kolumbusz Krist�f haj�in is ott voltak Amerika felfedez�sekor.",
        "A tartom�nyban hagyom�nyos k�zm?ves sajtok is k�sz�lnek (Queso Zamorano), amelyeket nyers juhtejb?l �ll�tanak el?."
      ], ro: [], en: [
        "The capital city boasts 24 Romanesque churches from the 12th and 13th centuries, the most in any European city.",
        "The province covers an area of approximately 10,561 square kilometers.",
        "The Battle of Golpejera took place in the province in 1072.",
        "Sanabria Lake, located in northwestern Zamora, is the largest glacial lake in the Iberian Peninsula."
      ] } },
  // Cataluña (ES-CT) �?? 4 provinces
  { id: "ES-B",  type: "region", parent: "ES-CT", coords: [2.1734, 41.3851], name: { de: "Barcelona", hu: "Barcelona", ro: "Barcelona", en: "Barcelona" }, description: { de: "Metropolprovinz mit Gaudís Meisterwerken.", hu: "Nagyvárosi tartomány Gaudí remekműveivel.", ro: "Provincie metropolitan�? cu capodoperele lui Gaudí.", en: "Metropolitan province with Gaudí's masterpieces." }, descriptionAdvanced: { de: "", hu: "Barcelona tartom�ny Katal�nia l�ktet? sz�ve �s Spanyolorsz�g egyik legdinamikusabb, leggazdagabb r�gi�ja, amely t�k�letesen �tv�zi a kozmopolita kult�r�t a F�ldk�zi-tenger partvid�k�nek (Costa Barcelona) sz�ps�g�vel. A f?v�ros, Barcelona vil�gh�r? Antoni Gaud� leny?g�z? modernista �p�leteir?l, pezsg? strandjair�l �s a g�tikus negyed k�z�pkori b�j�r�l. A tartom�ny bels?, hegyvid�ki r�sz�n magasodik a Montserrat, a sz�rre�lis form�j�, f?r�szes sziklahegys�g, amely Katal�nia spiritu�lis k�zpontj�t �s a h�res Fekete Madonna kegyhely�t rejti. A tengerparti Sitges �s a bork�sz�t�s�r?l (k�l�n�sen a Cava pezsg?r?l) h�res Pened�s r�gi� egyar�nt fontos r�szei a helyi identit�snak. Ez a r�gi� a m?v�szet, az ipar �s a kifinomult gasztron�mia glob�lis k�zpontja.", ro: "", en: "The province of Barcelona is nestled in the central coastal area of Catalonia, offering a dynamic blend of Mediterranean coastline and mountainous hinterlands. Its diverse geography ranges from the sandy beaches of the Costa Barcelona to the jagged peaks of the Montserrat mountain range. As the economic and cultural engine of Catalonia, the province boasts a deep history dating back to Roman settlements and flourishing through the industrial revolution. Beyond the bustling capital, it features charming medieval villages, robust wine-producing regions like Pened�s, and a vibrant artistic legacy heavily influenced by Modernisme. The province provides an unparalleled mix of urban sophistication and natural beauty." }, factsAdvanced: { de: [], hu: [
        "A Montserrat hegys�g kolostor�ban tal�lhat� az 'Escolania', Eur�pa egyik legr�gebbi, 14. sz�zad �ta m?k�d? fi�k�rusa.",
        "A Pened�s borvid�k adja Spanyolorsz�g teljes Cava (hagyom�nyos erjeszt�s? pezsg?) termel�s�nek mintegy 95%-�t.",
        "Sitges v�rosa minden �vben otthont ad Eur�pa egyik legfontosabb fantasztikus- �s horrorfilmfesztiv�lj�nak.",
        "A tartom�ny Cardona nev? v�rosa b�szk�lkedhet a vil�g egyik legfontosabb �s legl�tv�nyosabb t�rt�nelmi s�b�ny�j�val."
      ], ro: [], en: [
        "Encompasses an area of 7,728 square kilometers in the Catalonia region.",
        "Contains the Montserrat mountain range, home to the Santa Maria de Montserrat abbey founded in the 11th century.",
        "The Pened�s region within the province is the primary production area for Cava, Spanish sparkling wine.",
        "The province's population exceeds 5.7 million people, making it one of the most populous in Spain."
      ] } },
  { id: "ES-GI", type: "region", parent: "ES-CT", coords: [2.8214, 41.9794], name: { de: "Girona", hu: "Girona", ro: "Girona", en: "Girona" }, description: { de: "Grenzprovinz zu Frankreich mit Costa Brava.", hu: "Franciaországgal határos tartomány a Costa Bravával.", ro: "Provincie la frontiera cu Fran�?a, cu Costa Brava.", en: "Border province with France and the Costa Brava." }, descriptionAdvanced: { de: "", hu: "Girona tartom�ny Katal�nia �szakkeleti cs�csk�ben fekszik, �s a Pireneusok hegycs�csait�l eg�szen a dr�mai Costa Brava tengerpartj�ig terjed. Ez a soksz�n? t�j s?r? t�lgyerd?ket, kialudt vulk�nokat (Garrotxa r�gi�) �s l�legzetel�ll�t� rejtett tenger�bl�ket foglal mag�ban. A t�rt�nelmi Girona v�rosa fest?i foly�parti h�zaival, massz�v katedr�lis�val �s Eur�pa egyik legjobb �llapotban fennmaradt zsid� negyed�vel (El Call) vonzza a l�togat�kat. A r�gi� Salvador Dal� sz�l?helye, a figueresi Dal� Sz�nh�z-M�zeum pedig a sz�rrealizmus rajong�inak glob�lis zar�ndokhelye. A gasztron�mia szint�n vil�gsz�nvonal�; sz�mos olyan avantg�rd �tterem tal�lhat� itt (mint az egykori El Bulli vagy az El Celler de Can Roca), amely t�bbsz�r is elnyerte a vil�g legjobb �tterme c�met.", ro: "", en: "Girona is the northeasternmost province of Catalonia, stretching from the Pyrenees mountains down to the rugged Mediterranean coastline known as the Costa Brava. Its geography is highly varied, featuring volcanic landscapes in La Garrotxa and pristine coastal coves that have inspired countless artists. The region's history is remarkably well-preserved, with its capital city boasting one of Europe's most intact medieval Jewish quarters. Girona seamlessly blends its ancient Roman and medieval heritage with a modern reputation for world-class gastronomy and cycling culture. It is a captivating destination that offers deep cultural immersion alongside breathtaking natural scenery." }, factsAdvanced: { de: [], hu: [
        "A La Garrotxa vulkanikus z�na t�bb mint 40 alv� vulk�ni k�pot �s 20 megszil�rdult l�vafoly�st rejt egy d�s, z�ld t�jon.",
        "Girona g�tikus katedr�lisa b�szk�lkedhet a vil�g legsz�lesebb (majdnem 23 m�teres) g�tikus haj�j�val.",
        "Figueres v�ros�ban tal�lhat� Eur�pa legnagyobb 18. sz�zadi er?dje, a Castell de Sant Ferran.",
        "A 'Tr�nok harca' sorozat sz�mos fontos jelenet�t forgatt�k Girona �v�ros�nak k�z�pkori l�pcs?in �s sz?k utc�in."
      ], ro: [], en: [
        "The Costa Brava stretches for over 200 kilometers along the province's Mediterranean coast.",
        "Salvador Dal� was born in the province's town of Figueres in 1904, which now hosts the Dal� Theatre-Museum.",
        "The Call (Jewish Quarter) in Girona's capital flourished from the 12th to the 15th centuries.",
        "La Garrotxa Volcanic Zone Natural Park contains over 40 inactive volcanoes."
      ] } },
  { id: "ES-L",  type: "region", parent: "ES-CT", coords: [0.6273, 41.6175], name: { de: "Lleida", hu: "Lleida", ro: "Lleida", en: "Lleida" }, description: { de: "Inland-Pyrenäenprovinz.", hu: "Bels�? pireneusi tartomány.", ro: "Provincie interioar�? pireneean�?.", en: "Inland Pyrenean province." }, descriptionAdvanced: { de: "", hu: "Lleida (L�rida) tartom�ny Katal�nia egyetlen olyan r�gi�ja, amely nem rendelkezik tengerparttal, de ezt a Pireneusok leny?g�z? magashegyi t�jaival �s kiterjedt term�keny s�ks�gaival kompenz�lja. �szakon az Aig�estortes �s Estany de Sant Maurici Nemzeti Park t�bb mint 200 tengerszemb?l �s v�zes�sb?l �ll� l�legzetel�ll�t� v�zivil�got rejt. A Bo�-v�lgyben (Vall de Bo�) megb�j� kora rom�n st�lus� templomok a vil�g�r�ks�g r�sz�t k�pezik, �s a k�z�pkori falfest�szet remekm?vei. A f?v�ros, Lleida a dombtet?n magasod� g�tikus-rom�n er?d-katedr�lis�r�l (La Seu Vella) ismert. A tartom�ny d�li r�szein, a Segre foly� ment�n h�z�d� mez?gazdas�gi ter�letek Spanyolorsz�g legfontosabb gy�m�lcstermel? (?szibarack, k�rte) vid�kei k�z� tartoznak.", ro: "", en: "Lleida is the only landlocked province in the autonomous community of Catalonia, serving as a gateway between the Mediterranean coast and the towering peaks of the Pyrenees. Its varied topography includes the fertile plains of the Segri� region and the dramatic, high-altitude landscapes of the Val d'Aran. Historically, Lleida has been a vital agricultural hub and a strategic crossroads, bearing the marks of Iberian, Roman, and Moorish influences. The province is highly celebrated for its spectacular Romanesque architecture, particularly the churches of the Bo� Valley. Today, it remains a premier destination for winter sports, adventure tourism, and agricultural exports." }, factsAdvanced: { de: [], hu: [
        "A Vall de Bo� kilenc rom�n st�lus� temploma a 11-12. sz�zadb�l sz�rmazik, �s �rintetlen�l fennmaradt az elszigetelts�gnek k�sz�nhet?en.",
        "Lleida tartom�ny Spanyolorsz�g �s Eur�pa egyik legfontosabb kalandturisztikai k�zpontja, k�l�n�sen a vadv�zi evez�s (rafting) ter�n.",
        "A La Seu Vella katedr�lis az 1700-as �vek elej�t?l eg�szen a 20. sz�zadig katonai laktanyak�nt �s b�rt�nk�nt funkcion�lt.",
        "M�jusban Lleida v�rosa rendezi meg a h�res 'Aplec del Caragol' fesztiv�lt, amelyen egy h�tv�ge alatt t�bb tonna csig�t fogyasztanak el."
      ], ro: [], en: [
        "Features Aig�estortes i Estany de Sant Maurici, the only National Park in Catalonia, established in 1955.",
        "The Catalan Romanesque Churches of the Vall de Bo� were designated a UNESCO World Heritage site in 2000.",
        "Baqueira-Beret, located in the province, is one of Spain's largest and most visited ski resorts.",
        "The province covers a vast area of 12,172 square kilometers."
      ] } },
  { id: "ES-T",  type: "region", parent: "ES-CT", coords: [1.2493, 41.1189], name: { de: "Tarragona", hu: "Tarragona", ro: "Tarragona", en: "Tarragona" }, description: { de: "Römische Ruinen und Costa Daurada.", hu: "Római romok és a Costa Daurada.", ro: "Ruine romane �?i Costa Daurada.", en: "Roman ruins and the Costa Daurada." }, descriptionAdvanced: { de: "", hu: "Tarragona tartom�ny Katal�nia d�li r�sz�n ter�l el, a F�ldk�zi-tenger ment�n, �s az Aranypartr�l (Costa Dorada), valamint leny?g�z? �kori r�mai �r�ks�g�r?l h�res. A tartom�nyi f?v�ros, Tarragona (az �kori Tarraco) az Ib�riai-f�lsziget legfontosabb r�mai v�rosa volt; leny?g�z? tengerparti amfite�truma �s v�zvezet�k-rendszere (UNESCO Vil�g�r�ks�g) ma is megcsod�lhat�. A tengerpartt�l beljebb, a Priorat �s Montsant r�gi�k zord, pal�s hegyoldalai vil�gh�r?, testes �s pr�mium min?s�g? v�r�sborokat teremnek. A tartom�ny ad otthont a Poblet, Santes Creus �s Vallbona de les Monges ciszterci kolostoroknak is, amelyek a k�z�pkori �p�t�szet �s t�rt�nelem leny?g�z? eml�kei. Ez a r�gi� a h�res emberpiramisok (Castells) �p�t�s�nek is az igazi ?shaz�ja.", ro: "", en: "Located in the southern part of Catalonia, the province of Tarragona offers a captivating mix of golden Mediterranean beaches and richly historical landscapes. Its expansive coastline, famously known as the Costa Dorada, draws visitors with its mild climate and fine sandy shores. The province's inland areas are characterized by fertile vineyards and rugged mountains, supporting a strong agricultural tradition. Tarragona's history is deeply intertwined with the Roman Empire, as its capital was once one of the most important Roman cities in the Iberian Peninsula. Today, it seamlessly merges its ancient ruins, vibrant wine culture, and thriving modern tourism industry." }, factsAdvanced: { de: [], hu: [
        "A tarragonai r�mai amfite�trumot az i. sz. 2. sz�zadban k�zvetlen�l a tengerpartra �p�tett�k, ahonnan a vad�llatokat k�nnyen be tudt�k sz�ll�tani.",
        "A Santes Creus �s a Poblet kolostor a 'Ciszterci H�romsz�g' r�sze, ut�bbiban nyugszanak az ?si arag�niai kir�lyok.",
        "A Priorat borvid�k azon kev�s spanyol borvid�kek egyike (Rioja mellett), amely megkapta a legmagasabb DOCa (Denominaci� d'Origen Qualificada) min?s�t�st.",
        "PortAventura World Tarragona k�zel�ben (Salou) Spanyolorsz�g legnagyobb �s Eur�pa egyik legl�togatottabb tematikus vid�mparkja."
      ], ro: [], en: [
        "The ancient Roman ruins of Tarraco were designated a UNESCO World Heritage site in 2000.",
        "Priorat, a comarca within the province, is one of only two wine regions in Spain to hold the prestigious DOCa qualification.",
        "PortAventura World, opened in 1995, is the most visited theme park in Spain and is located in the province.",
        "The Roman amphitheater in the capital was built in the 2nd century AD and could hold up to 15,000 spectators."
      ] } },
  // Extremadura (ES-EX) �?? 2 provinces
  { id: "ES-BA", type: "region", parent: "ES-EX", coords: [-6.9706, 38.8794], name: { de: "Badajoz", hu: "Badajoz", ro: "Badajoz", en: "Badajoz" }, description: { de: "Grö�?te Provinz Spaniens.", hu: "Spanyolország legnagyobb tartománya.", ro: "Cea mai mare provincie a Spaniei.", en: "Largest province in Spain." }, descriptionAdvanced: { de: "", hu: "Badajoz tartom�ny Extremadura d�li fel�t foglalja el, �s kiterjed�s�t tekintve Spanyolorsz�g legnagyobb tartom�nya. A r�gi� egy v�gtelen, ny�lt �s gyakran perzsel? s�ks�g, amelyet a Dehesa (ritk�s t�lgyerd?) ural, mely t�k�letes �l?helyet biztos�t az ib�riai feketesert�s sz�m�ra. A f?v�ros, Badajoz, t�rt�nelmileg is kulcsfontoss�g� v�gv�r volt a portug�l hat�ron, hatalmas m�r citadell�ja (Alcazaba) pedig ma is b�szk�n tekint le a Guadiana foly�ra. A tartom�ny keleti r�sz�n M�rida (az �kori Augusta Emerita) leny?g�z?, �pen maradt r�mai sz�nh�z�val, v�zvezet�k�vel �s h�djaival a R�mai Birodalom nagys�g�t hirdeti. A borok szerelmesei sz�m�ra a Ribera del Guadiana r�gi� k�n�l kiv�l� min?s�g?, naps�t�tte andal�z st�lus� borokat.", ro: "", en: "Badajoz is the largest province in Spain, situated in the western part of the autonomous community of Extremadura and sharing a long border with Portugal. Its sweeping geography is dominated by vast plains, gentle rolling hills, and the significant Guadiana River basin. Historically, it has been a crucial frontier and military stronghold, marked by numerous castles, fortresses, and ancient Roman outposts scattered across the landscape. The region has a deeply rooted agricultural economy, famous for its Iberian pigs which roam the extensive oak forests (dehesas). With its blend of historic border towns and rich culinary traditions, Badajoz offers an authentic and unspoiled Spanish experience." }, factsAdvanced: { de: [], hu: [
        "M�rida v�ros�ban tal�lhat� Spanyolorsz�g leghosszabb fennmaradt �kori r�mai h�dja, amely majdnem 800 m�ter hossz�.",
        "A badajozi Alcazaba a legnagyobb ter�let?, �ps�gben megmaradt m�r er?d�tm�ny eg�sz Spanyolorsz�gban.",
        "Minden �vben M�rida r�mai sz�nh�z�ban tartj�k a Nemzetk�zi Klasszikus Sz�nh�zi Fesztiv�lt egy k�tezer �ves sz�npadon.",
        "Zafra v�rosk�ja a leny?g�z?, nagy kiterjed�s?, g�tikus �s renesz�nsz palot�kkal k�r�lvett f?tereir?l (Plaza Grande �s Plaza Chica) ismert."
      ], ro: [], en: [
        "With an area of 21,766 square kilometers, it is the largest province in Spain by landmass.",
        "The city of M�rida, located in the province, features a Roman theatre built in 16 to 15 BC.",
        "M�rida's Archaeological Ensemble was declared a UNESCO World Heritage Site in 1993.",
        "The province is a premier producer of Jam�n Ib�rico, utilizing its extensive oak dehesas for free-ranging pigs."
      ] } },
  { id: "ES-CC", type: "region", parent: "ES-EX", coords: [-6.3724, 39.4753], name: { de: "Cáceres", hu: "Cáceres", ro: "Cáceres", en: "Cáceres" }, description: { de: "UNESCO-Altstadt mit Kolonialarchitektur.", hu: "UNESCO óváros gyarmati építészettel.", ro: "Centru vechi UNESCO cu arhitectur�? colonial�?.", en: "UNESCO old town with colonial architecture." }, descriptionAdvanced: { de: "", hu: "C�ceres tartom�ny Extremadura �szaki r�sz�n helyezkedik el, �s vad, nagyr�szt �rintetlen term�szeti k�rnyezet�vel, valamint felfedez?k �s konkviszt�dorok hagyat�k�val ny?g�z le. A tartom�ny k�zpontja, C�ceres �v�rosa (Ciudad Monumental) egy fallal k�r�lvett, tornyokkal s?r?n t?zdelt, id?ben meg�llt k�z�pkori �kszerdoboz, ahonnan teljesen hi�nyzik a modern vil�g nyoma. Trujillo �s Guadalupe szint�n meghat�roz� telep�l�sek; Trujillo a Pizarro-csal�d grandi�zus palot�ir�l, m�g Guadalupe hatalmas kolostor�r�l h�res, amely Amerika felfedez?inek zar�ndokhelye volt. A r�gi�ban fekszik a Monfrag�e Nemzeti Park is, amely Eur�pa egyik legfontosabb �l?helye a ritka �s vesz�lyeztetett ragadoz� madarak, k�l�n�sen a d�gkesely?k �s a fekete g�ly�k sz�m�ra.", ro: "", en: "C�ceres is a historic and expansive province in the northern half of Extremadura, characterized by a diverse landscape of mountains, deep river valleys, and verdant forests. The region is heavily influenced by the Tagus River, which cuts through its territory and supports a rich variety of flora and fauna. Historically, C�ceres was a land of conquerors, and its medieval towns are remarkably well-preserved, showcasing a blend of Roman, Moorish, Gothic, and Renaissance architecture. The province is also known for its pristine natural reserves, such as Monfrag�e National Park, which protects vital Mediterranean ecosystems. It remains a deeply traditional region, celebrated for its unique gastronomy and breathtaking historical centers." }, factsAdvanced: { de: [], hu: [
        "Francisco Pizarro, az Inka Birodalom megh�d�t�ja a c�ceresi Trujillo v�ros�ban sz�letett, ahol ma is �ll lovas szobra.",
        "A Santa Mar�a de Guadalupe Kir�lyi Kolostor a spanyol gyarmatbirodalom vall�si szimb�luma lett az �jvil�gban.",
        "C�ceres �v�ros�ban olyannyira megtiltott�k az �j �p�tkez�seket �s neonf�nyeket, hogy gyakran szolg�l t�rt�nelmi filmek eredeti forgat�si helysz�nek�nt.",
        "A Monfrag�e Nemzeti Park ter�let�n �l a vil�g egyik legnagyobb bar�tkesely?-kol�ni�ja (Gyps fulvus)."
      ], ro: [], en: [
        "The Old Town of C�ceres was designated a UNESCO World Heritage site in 1986 due to its blend of architectural styles.",
        "Monfrag�e National Park, established in 2007, is a premier site for observing Iberian birds of prey.",
        "The province covers an area of 19,868 square kilometers, making it the second-largest in Spain.",
        "The Royal Monastery of Santa Mar�a de Guadalupe in C�ceres was founded in the 14th century and is a UNESCO site."
      ] } },
  // Galicia (ES-GA) �?? 4 provinces
  { id: "ES-C",  type: "region", parent: "ES-GA", coords: [-8.4110, 43.0097], name: { de: "A Coruña", hu: "A Coruña", ro: "A Coruña", en: "A Coruña" }, description: { de: "Atlantikküste mit Santiago de Compostela.", hu: "Atlanti partvonal Santiago de Compostelával.", ro: "Coast�? atlantic�? cu Santiago de Compostela.", en: "Atlantic coast home to Santiago de Compostela." }, descriptionAdvanced: { de: "", hu: "A Coru�a tartom�ny Gal�cia �szaknyugati cs�csk�ben fekszik, �s viharos tengerpartjair�l, m�ly, z�ld foly�torkolatair�l (R�as Altas) �s ?si kelta hagyom�nyair�l ismert. A f?v�ros, A Coru�a a tengerbe ny�l� f�lszigeten �p�lt ki, �s az eleg�ns �vegezett balkonjair�l (galer�as) kapta a 'Krist�lyv�ros' nevet, partjait pedig a r�mai kori Herkules-torony vigy�zza. A tartom�ny ad otthont a kereszt�ny vil�g egyik legnagyobb zar�ndokhely�nek, Santiago de Compostel�nak, ahol a Szent Jakab-�t v�get �r. A zord �s dr�mai Costa da Morte (Hal�lpart) szirtjei sz�mos tenger�szt k�veteltek az �vsz�zadok sor�n. A r�gi� p�ratlan tengeri gasztron�mi�val b�r, a percebes (kacsakagyl�) �s a polip a helyi specialit�sok k�z� tartoznak.", ro: "", en: "A Coru�a is a dynamic coastal province located in the extreme northwest of Spain within the autonomous community of Galicia. Its dramatic geography is defined by a jagged Atlantic coastline featuring deep estuaries known as r�as, rugged cliffs, and lush green inland valleys. The province has a rich maritime history, heavily influenced by Celtic traditions and centuries of seafaring and fishing. It holds profound spiritual and cultural significance as the ultimate destination of the Camino de Santiago, drawing pilgrims from around the world to its historic capital, Santiago de Compostela. The region blends its deep-rooted myths, legendary seafood gastronomy, and ancient stone architecture into a uniquely Galician experience." }, factsAdvanced: { de: [], hu: [
        "A Herkules-torony a vil�g legr�gebbi (k�zel k�tezer �ves) m�ig folyamatosan �zemel? vil�g�t�tornya.",
        "A Finisterre-fok (Cabo Fisterra) a r�maiak szerint a vil�g v�g�t jelentette (Finis Terrae), sok zar�ndok a mai napig elgyalogol id�ig.",
        "A Coru�a kik�t?j�b?l indult el 1588-ban a h�res, de tragikus sors� Spanyol Armada Anglia megh�d�t�s�ra.",
        "A spanyol ruh�zati �ri�s, az Inditex (a Zara anyav�llalata) A Coru�a tartom�ny Arteixo nev? kisv�ros�b�l sz�rmazik �s ott van a k�zpontja."
      ], ro: [], en: [
        "The Tower of Hercules, a UNESCO World Heritage site, is the world's oldest extant lighthouse, built in the 1st century AD.",
        "Santiago de Compostela's Old Town has been a UNESCO World Heritage site since 1985.",
        "Cape Finisterre in the province was believed by the Romans to be the end of the known world.",
        "The province has over 950 kilometers of coastline along the Atlantic Ocean."
      ] } },
  { id: "ES-LU", type: "region", parent: "ES-GA", coords: [-7.5560, 43.0097], name: { de: "Lugo", hu: "Lugo", ro: "Lugo", en: "Lugo" }, description: { de: "Komplette römische Stadtmauer.", hu: "Teljes római városfal.", ro: "Zid roman complet intact.", en: "Complete Roman city walls." }, descriptionAdvanced: { de: "", hu: "Lugo tartom�ny Gal�cia bels?, legink�bb hegyvid�ki �s ?si, vid�ki arc�t mutatja meg, de az �szaki r�sz�n a Kant�briai-tenger hull�mai moss�k (R�as Altas). A tartom�nyi f?v�ros, Lugo a r�mai kori �p�t�szet vil�gszerte egyed�l�ll� csod�j�t, egy teljesen �ps�gben fennmaradt, bej�rhat�, 2 kilom�ter hossz� �kori v�rosfalat ?riz (UNESCO Vil�g�r�ks�g). A tartom�ny �szaki tengerpartj�n (A Mari�a) tal�lhat� a h�res As Catedrais (A Katedr�lisok) nev? strand, ahol az �ce�ni er�zi� monument�lis, g�tikus bolt�vekhez hasonl� sziklak�pz?dm�nyeket v�jt ki. Lugo elz�rt, m�ly z�ld v�lgyei a gal�ciai n�pi �p�t�szet �s �letm�d utols� v�d?b�sty�i, a helyi gasztron�mia pedig a kiad�s h�s�teleir?l (botelo) �s az egyszer?, finom gal�ciai polip elk�sz�t�s�r?l ismert.", ro: "", en: "Lugo is a province in northeastern Galicia, offering a stunning contrast between its northern Atlantic coastline and its mountainous, heavily forested interior. The region is celebrated for its lush, green landscapes and significant nature reserves, including the Ancares and Courel mountain ranges. Historically, it holds deep Roman and Celtic roots, most famously exemplified by the remarkably intact Roman walls encircling its capital city. Lugo maintains a strong agricultural and pastoral tradition, heavily tied to the production of high-quality dairy and meats. Visitors are captivated by its quiet, mystical atmosphere, ancient castros (Celtic settlements), and profound natural beauty." }, factsAdvanced: { de: [], hu: [
        "Lugo r�mai v�rosfala a vil�gon az egyetlen, amely megszak�t�s n�lk�l, teljes eg�sz�ben meg?rizte eredeti v�dvonal�t.",
        "A Praia das Catedrais (Katedr�lisok strandja) csod�latos k?�vei csak ap�ly idej�n l�togathat�k �s csod�lhat�k meg k�zvetlen k�zelr?l.",
        "O Cebreiro, egy magasan fekv? hegyi falu a zar�ndok�ton, meg?rizte ?si, kelta eredet? kerek k?h�zait (pallozas), amelyeknek szalmateteje van.",
        "Minden �v nyar�n Lugo v�rosa megrendezi az 'Arde Lucus' fesztiv�lt, amely visszarep�ti a v�rost a dics?s�ges r�mai id?kbe."
      ], ro: [], en: [
        "The Roman Walls of Lugo were built in the 3rd century and span over 2 kilometers, becoming a UNESCO site in 2000.",
        "Playa de las Catedrales (Beach of the Cathedrals) features spectacular natural rock arches up to 30 meters high.",
        "The province covers 9,856 square kilometers and is the largest province in Galicia by area.",
        "The Mi�o River, the longest river in Galicia, has its source in the province of Lugo."
      ] } },
  { id: "ES-OR", type: "region", parent: "ES-GA", coords: [-7.8641, 42.3359], name: { de: "Ourense", hu: "Ourense", ro: "Ourense", en: "Ourense" }, description: { de: "Binnenlandprovinz mit Thermalquellen.", hu: "Bels�? tartomány termálforrásokkal.", ro: "Provincie interioar�? cu izvoare termale.", en: "Inland province with thermal springs." }, descriptionAdvanced: { de: "", hu: "Ourense (Orense) az egyetlen gal�ciai tartom�ny, amely nem rendelkezik tengerparttal, de a foly�k �s a term�lv�z igazi paradicsoma. A f?v�rost, Ourens�t a Mi�o foly� szeli kett�, �s a r�mai kora �ta ismert fantasztikus term�lforr�sair�l (As Burgas), ahol a forr� v�z term�szetes medenc�kben buzog fel a f�ldb?l. A tartom�ny d�li r�sz�n h�z�dik a l�legzetel�ll�t� Ribeira Sacra (Szent Foly�part) r�gi�ja, a Sil foly� m�ly kanyonj�ban; az itteni meredek hegyoldalakon l�tv�nyos, teraszos sz?l?�ltetv�nyek tal�lhat�k, ahol az �gynevezett 'heroikus' bork�sz�t�s (viticultura heroica) folyik. Ourense r�gi, er?d�tm�nyszer? katedr�lisa �s hangulatos, �kori k�ves utc�i var�zslatos atmoszf�r�t �rasztanak. A t�l errefel� hidegebb, a ny�r viszont forr�bb, mint Gal�cia t�bbi r�sz�n.", ro: "", en: "Ourense is the only landlocked province in the Galicia region of northwestern Spain, renowned for its dramatic river canyons and abundant thermal springs. The landscape is carved by the powerful Mi�o and Sil rivers, creating the spectacular Ribeira Sacra region, characterized by steep terraced vineyards and ancient monasteries. Historically, the province has been a significant center since Roman times, largely due to its natural hot springs which are still enjoyed today. Ourense's economy and culture are deeply tied to its unique microclimates, producing some of Spain's most distinctive inland wines. It is a tranquil and deeply historic region, steeped in Galician folklore and medieval heritage." }, factsAdvanced: { de: [], hu: [
        "Az As Burgas forr�s vize a belv�rosban t�bb mint 60 Celsius-fokos h?m�rs�kleten t�r a felsz�nre.",
        "Ourense k?h�dja (Ponte Vella) meg?rizte r�mai kori alapjait, �s a k�z�pkorban a zar�ndokok fontos �tkel?helye volt.",
        "A Ribeira Sacra teraszos sz?l?i gyakran olyan meredekek, hogy a sz�ret sor�n a f�rt�ket dr�tk�teleken vagy kis s�neken cs�sztatj�k le.",
        "Ourense tartom�ny a gal�ciai vid�k karnev�li hagyom�nyainak (Entroido) ?rz?je, olyan ?si, maszkos karakterekkel, mint a 'Peliqueiros'."
      ], ro: [], en: [
        "The capital city, Ourense, is famous for its As Burgas thermal springs, which can reach temperatures of 67�C (153�F).",
        "The Ribeira Sacra region is home to one of the largest concentrations of Romanesque monasteries in Europe.",
        "The province borders Portugal to the south and covers an area of 7,273 square kilometers.",
        "Wine production in the region dates back to the Roman era, over 2,000 years ago."
      ] } },
  { id: "ES-PO", type: "region", parent: "ES-GA", coords: [-8.6440, 42.4330], name: { de: "Pontevedra", hu: "Pontevedra", ro: "Pontevedra", en: "Pontevedra" }, description: { de: "Küstenprovinz mit Rias Baixas.", hu: "Tengerparti tartomány a Rias Baixas öblökkel.", ro: "Provincie costier�? cu Rias Baixas.", en: "Coastal province with the Rias Baixas." }, descriptionAdvanced: { de: "", hu: "Pontevedra tartom�ny a z�ldell? Gal�cia d�lnyugati r�sz�n helyezkedik el, k�zvetlen�l a portug�l hat�rn�l, �s az elb?v�l? R�as Baixas (als� foly�torkolatok) r�gi� sz�ve. A hossz�, fjord-szer? tenger�bl�k sz?l?�ltetv�nyekkel, feny?erd?kkel �s tiszta, homokos �bl�kkel vannak k�r�lv�ve; ez a h�res spanyol feh�rbor, a friss�t? Albari�o ?shaz�ja. A tartom�ny f?v�rosa, Pontevedra Eur�pa egyik leg�lhet?bb v�rosa, d�jnyertes, teljesen aut�mentes t�rt�nelmi k�zponttal, hangulatos gr�nit terekkel �s �rk�dokkal. A part menti Vigo kik�t?v�rosa Eur�pa legfontosabb hal�szkik�t?je, ahonnan fantasztikus kil�t�s ny�lik a C�es-szigetek tengeri nemzeti parkj�ra, amelynek �rintetlen strandjai a Karib-tengert id�zik.", ro: "", en: "Pontevedra is a vibrant coastal province in southwestern Galicia, celebrated for its stunning R�as Baixas, a series of deep, estuarine inlets along the Atlantic Ocean. This deeply indented coastline creates a unique maritime environment that supports some of the richest fishing and aquaculture in the world, particularly for mussels and seafood. The region's history is steeped in seafaring traditions, ancient Celtic settlements, and trade, with historic stone towns dotting the lush, green landscape. Pontevedra is also famous for its production of Albari�o white wine, benefiting from the mild, damp maritime climate. It offers a perfect synthesis of pristine beaches, rich gastronomy, and well-preserved Galician culture." }, factsAdvanced: { de: [], hu: [
        "A C�es-szigetek Rodas strandj�t a The Guardian brit lap 2007-ben a vil�g legjobb strandj�nak v�lasztotta.",
        "Pontevedra 1999-ben kitiltotta az aut�kat a t�rt�nelmi v�rosk�zpontb�l, ami�rt az ENSZ is kit�ntette fenntarthat� v�rosfejleszt�s�rt.",
        "Az Albari�o sz?l?t hagyom�nyosan magas pergol�kra (emparrado) futtatj�k, hogy a s?r? gal�ciai es?z�sek sor�n elker�lj�k a rothad�st.",
        "A kis part menti Combarro v�ros�t Spanyolorsz�g egyik legszebbjek�nt tartj�k sz�mon h�res h�rreo-i (k?b?l �p�lt l�bakon �ll� gabonat�rol�k) miatt."
      ], ro: [], en: [
        "The R�as Baixas region is world-renowned for its Albari�o wine production, a distinctively crisp white wine.",
        "The Atlantic Islands of Galicia National Park, located off the coast, was established in 2002.",
        "The capital city, Pontevedra, has won multiple international awards for its pedestrian-friendly urban planning since 1999.",
        "The province is a major global producer of mussels, cultivated on thousands of platforms called bateas in the r�as."
      ] } },
  // País Vasco (ES-PV) �?? 3 provinces
  { id: "ES-BI", type: "region", parent: "ES-PV", coords: [-2.9349, 43.2630], name: { de: "Biskaya", hu: "Vizcaya", ro: "Vizcaya", en: "Biscay" }, description: { de: "Industrieprovinz mit Bilbao und Guggenheim.", hu: "Ipari tartomány Bilbaóval és a Guggenheimmel.", ro: "Provincie industrial�? cu Bilbao �?i Guggenheim.", en: "Industrial province with Bilbao and the Guggenheim." }, descriptionAdvanced: { de: "", hu: "Bizkaia (Biskaya) tartom�ny a Baszkf�ld ipari �s gazdas�gi motorja, amely sikeresen alak�totta �t mag�t a modern kor kih�v�sainak megfelel?en. A r�gi� egykor a vaskitermel�s, a haj��p�t�s �s a neh�zipar sz�rke k�zpontja volt, ami legink�bb a f?v�rosban, Bilba�ban �sszpontosult. M�ra Bilbao egy tiszta, szolg�ltat�salap� v�ross� v�lt, amelynek szimb�luma a futurisztikus, tit�niummal bor�tott Guggenheim M�zeum. Bizkaia dr�mai tengerpartja ment�n olyan csod�latos term�szeti kincsek b�jnak meg, mint a San Juan de Gaztelugatxe, egy kis sziklaszigetre �p�lt k�polna. A baszk kult�ra minden form�ja �l �s virul itt: az ?si nyelv, az evez?sversenyek, �s a zseni�lis pintxo b�rok p�ratlan gasztron�miai �lm�nyt ny�jtanak.", ro: "", en: "Biscay is a dynamic province in the Basque Country of northern Spain, characterized by its rugged coastline along the Bay of Biscay and heavily forested, mountainous interior. The province underwent massive industrialization in the 19th and 20th centuries, deeply shaping its modern landscape, economy, and urban centers. Today, it successfully blends this industrial heritage with cutting-edge modern architecture, most notably in its rejuvenated capital, Bilbao. The region maintains a fierce pride in its unique Basque culture, language (Euskara), and world-class culinary traditions, including the famous pintxos. Biscay offers a striking contrast between dramatic natural scenery and progressive, vibrant urban life." }, factsAdvanced: { de: [], hu: [
        "A Portugalete �s Getxo k�z�tti 'Bizkaia H�d' (Puente Colgante) a vil�g legr�gebbi, 1893-ban �p�lt sz�ll�t�h�dja �s UNESCO Vil�g�r�ks�g.",
        "San Juan de Gaztelugatxe sziklak�poln�j�hoz 241 k?be v�jt, sz�d�t? l�pcs?fok vezet fel a zord tenger felett.",
        "A tartom�nyban fekv? Guernica v�rosa a spanyol polg�rh�bor�ban elszenvedett puszt�t� bomb�z�sr�l ismert, amelyet Picasso is megfestett.",
        "A mundakai hull�m (Mundaka wave) a sz�rf�s�k k�r�ben Eur�pa egyik legjobb �s leghosszabb balra t�r? hull�mak�nt ismert."
      ], ro: [], en: [
        "The Guggenheim Museum Bilbao, designed by Frank Gehry, opened in 1997 and transformed the region's economy.",
        "The Vizcaya Bridge, completed in 1893, is the world's oldest transporter bridge and a UNESCO World Heritage site.",
        "The province covers an area of 2,217 square kilometers.",
        "The historic Oak of Guernica, located in the province, is a traditional symbol of Basque freedoms and rights."
      ] } },
  { id: "ES-SS", type: "region", parent: "ES-PV", coords: [-2.0038, 43.3183], name: { de: "Gipuzkoa", hu: "Gipuzkoa", ro: "Gipuzkoa", en: "Gipuzkoa" }, description: { de: "Baskenprovinz mit San Sebastián und Pincho-Küche.", hu: "Baszk tartomány San Sebastiánnal és pintxos konyhával.", ro: "Provincie basc�? cu San Sebastián �?i buc�?t�?ria pintxos.", en: "Basque province with San Sebastián and pintxos cuisine." }, descriptionAdvanced: { de: "", hu: "Gipuzkoa a legkisebb spanyol tartom�ny, ugyanakkor a baszk kult�ra, nyelv �s a vil�gh�r? spanyol gasztron�mia abszol�t k�zpontja. A tartom�ny �szaki r�sz�n a Kant�briai-tenger meredek sziklafalakkal tal�lkozik, amelyeket eleg�ns, 19. sz�zadi nyaral�v�rosok, mint a f?v�ros, San Sebasti�n (Donostia) t�rnek meg. San Sebasti�n a h�res La Concha-�b�llel Spanyolorsz�g legeleg�nsabb ny�ri rezidenci�ja volt a kir�lyi csal�d sz�m�ra, ma pedig Eur�pa kulin�ris f?v�rosa, leny?g�z? sz�m� Michelin-csillagos �tteremmel �s pezsg? pintxo-utc�kkal (Parte Vieja). A hegyvid�ki bels? ter�leteken ?rzik legink�bb a baszk identit�st, ahol s?r?, z�ld v�lgyekben t�rt�nelmi farmh�zak (caser�os) rejt?znek, �s a Txakoli (enyh�n habz� feh�rbor) �ltetv�nyei sorakoznak.", ro: "", en: "Gipuzkoa is the smallest province in Spain, nestled in the Basque Country between the Bay of Biscay and the Pyrenees mountains on the French border. Despite its small size, it boasts a diverse geography of dramatic coastal cliffs, sheltered bays, and intensely green, mountainous valleys. The region is a powerhouse of Basque culture and gastronomy, home to an extraordinary concentration of Michelin-starred restaurants and private culinary societies (txokos). Historically, Gipuzkoa has been a region of maritime explorers, shipbuilders, and industrialists, retaining a strong, wealthy, and highly traditional society. Its capital, San Sebasti�n, is world-renowned for its elegant Belle �poque architecture and spectacular urban beaches." }, factsAdvanced: { de: [], hu: [
        "San Sebasti�n a vil�g egyik legnagyobb Michelin-csillag s?r?s�g? v�rosa egy f?re vet�tve (csak Kiot� el?zi meg).",
        "A baszk nyelv (Euskara) a Gipuzkoa bels? v�lgyeiben, mint a Goierri r�gi�, maradt fenn a legtiszt�bb �s legelterjedtebb form�ban.",
        "Zarautz v�rosa ad otthont Spanyolorsz�g leghosszabb strandj�nak �s egyben az orsz�g egyik legfontosabb sz�rf�s k�zpontj�nak.",
        "A La Concha strandot Eur�pa legszebb v�rosi strandj�nak v�lasztott�k a homokos part �s az �bl�t v�d? hegyek t�k�letes �ve miatt."
      ], ro: [], en: [
        "With an area of just 1,980 square kilometers, it is the smallest province in Spain by landmass.",
        "San Sebasti�n's La Concha beach is frequently ranked as one of the best urban beaches in Europe.",
        "The Basque Culinary Center, a pioneering academic institution in gastronomy, is located in the province.",
        "The explorer Juan Sebasti�n Elcano, who completed the first circumnavigation of the Earth in 1522, was born in Getaria, Gipuzkoa."
      ] } },
  { id: "ES-VI", type: "region", parent: "ES-PV", coords: [-2.6732, 42.8467], name: { de: "Álava", hu: "Álava", ro: "Alava", en: "Álava" }, description: { de: "Binnenbaskische Provinz mit Vitoria-Gasteiz.", hu: "Bels�? baszk tartomány Vitoria-Gasteizzel.", ro: "Provincie basc�? interioar�? cu Vitoria-Gasteiz.", en: "Inland Basque province with Vitoria-Gasteiz." }, descriptionAdvanced: { de: "", hu: "�lava (Araba) a Baszkf�ld legd�lebbi �s legnagyobb kiterjed�s? tartom�nya, amely azonban a legkevesebb lakossal rendelkezik, �s nem hat�ros a tengerrel. A r�gi� �lesen el�t �szaki szomsz�dait�l: a z�ld, p�r�s v�lgyeket itt kiterjedt gabonamez?k �s nap�gette hegyvonulatok v�ltj�k fel, amelyek d�len az Ebro v�lgy�ben v�gz?dnek. Ez a d�li s�v a h�res Rioja Alavesa, ahol a vil�g egyik legjobb spanyol v�r�sbor�t termelik zseni�lis, modern �p�t�szeti csod�knak sz�m�t� pinc�szetekben. A f?v�ros, Vitoria-Gasteiz egy rendk�v�l �lhet?, z�ld metropolisz (2012-ben Eur�pa Z�ld F?v�rosa), amely egy t�k�letesen meg?rz�tt, mandula alak� k�z�pkori �v�rossal b�szk�lkedhet.", ro: "", en: "�lava is the southernmost and largest province of the Basque Country, contrasting sharply with its coastal northern neighbors due to its inland, transitionary climate and geography. The terrain ranges from the forested mountains of the north to the broad, sweeping plains and vineyards of the Ebro River valley in the south. It holds a rich historical legacy, with well-preserved medieval towns, ancient dolmens, and a capital, Vitoria-Gasteiz, that boasts a remarkable concentric medieval layout. The southern region of the province, Rioja Alavesa, is globally celebrated for producing some of the finest wines in Spain. �lava is deeply committed to environmental sustainability and seamlessly merges its rich agricultural traditions with modern industry." }, factsAdvanced: { de: [], hu: [
        "Vitoria-Gasteiz egyben az eg�sz Baszkf�ld (Euskadi) k�zigazgat�si f?v�rosa �s a baszk parlament sz�khelye.",
        "A Rioja Alavesa r�gi� pinc�szetei, mint a Marqu�s de Riscal (amelyet Frank Gehry tervezett), a kort�rs �p�t�szet vil�gh�r? remekm?vei.",
        "A vitoriai Santa Mar�a-sz�kesegyh�z kiterjedt restaur�l�sa �s egyedi �p�t�szeti megold�sai ihlett�k Ken Follett 'Id?k v�gezet�ig' c�m? reg�ny�t.",
        "�lava d�li hat�r�t a t�rt�nelmi Ebro foly� k�pezi, amely egyben Spanyolorsz�g leghosszabb, tiszt�n spanyol ter�leten halad� foly�ja."
      ], ro: [], en: [
        "Vitoria-Gasteiz, the capital, was named the European Green Capital in 2012 for its extensive parks and sustainability efforts.",
        "The province covers 3,037 square kilometers, making it the largest in the Basque Country.",
        "The Rioja Alavesa sub-region has over 13,000 hectares dedicated to high-quality wine production.",
        "The Salt Valley of A�ana features one of the oldest salt production complexes in the world, dating back over 6,500 years."
      ] } },
  // Comunitat Valenciana (ES-VC) �?? 3 provinces
  { id: "ES-A",  type: "region", parent: "ES-VC", coords: [-0.4907, 38.3452], name: { de: "Alicante", hu: "Alicante", ro: "Alicante", en: "Alicante" }, description: { de: "Costa Blanca und touristisches Zentrum.", hu: "Costa Blanca és turisztikai központ.", ro: "Costa Blanca �?i centru turistic.", en: "Costa Blanca and tourist center." }, descriptionAdvanced: { de: "", hu: "Alicante tartom�ny a Valenciai K�z�ss�g d�li perem�n helyezkedik el, �s napf�nyes, homokos strandjaival a h�res Costa Blanca ('Feh�r Part') k�zpontja. A tartom�ny partvid�ke ? olyan ikonikus �d�l?v�rosokkal, mint Benidorm vagy Torrevieja ? az eur�pai t�megturizmus egyik legl�togatottabb helysz�ne. Maga Alicante v�rosa egy dinamikus kik�t?v�ros, amelyet a monument�lis, hegytet?re �p�lt Castillo de Santa B�rbara vigy�z. A partmenti ny�zsg�st?l t�volabb a bels?, kop�r hegyvid�k leny?g�z? karsztos t�jakat, r�gi m�r er?d�tm�nyeket (mint Guadalest) �s hatalmas p�lmaligeteket rejt (mint Elche p�lmaerdeje). Alicante egy�ttal a spanyol turr�n (mandul�s �dess�g) �s a cip?gy�rt�s hagyom�nyos haz�ja.", ro: "", en: "Alicante is a vibrant coastal province in the southern part of the Valencian Community, renowned globally for the spectacular beaches of the Costa Blanca. Its geography is characterized by a stark contrast between the sun-drenched Mediterranean coastline and a rugged, mountainous interior dotted with historic Moorish castles. The region's history reflects a deep Islamic influence, visible in its agriculture, architecture, and lively local festivals. Economically, Alicante thrives on international tourism, footwear manufacturing, and the cultivation of citrus, almonds, and traditional nougat (turr�n). It offers an inviting climate, rich cultural tapestry, and breathtaking coastal landscapes that attract millions of visitors annually." }, factsAdvanced: { de: [], hu: [
        "Az Elche-i P�lmaliget t�bb mint 200 000 p�lmaf�j�val Eur�pa legnagyobb p�lmaerdeje �s UNESCO Vil�g�r�ks�g.",
        "Benidorm v�ros�ban van a legt�bb felh?karcol� egy f?re vet�tve az eg�sz vil�gon.",
        "Alicante h�res m�rv�ny s�t�nya (Explanada de Espa�a) t�bb mint 6 milli� v�r�s, fekete �s feh�r mozaikdarabb�l �ll, hull�mokat mint�zva.",
        "A tartom�nyb�l, k�l�n�sen Jijona (Xixona) v�ros�b�l sz�rmazik a spanyolok ikonikus kar�csonyi �dess�ge, a Turr�n."
      ], ro: [], en: [
        "The Costa Blanca stretches for over 200 kilometers along the Mediterranean Sea.",
        "The Palmeral of Elche, a massive date palm orchard with over 200,000 trees, was declared a UNESCO site in 2000.",
        "The Castillo de Santa B�rbara in the capital sits on Mount Benacantil at 166 meters above sea level.",
        "Alicante is the fourth most populous province in Spain, with over 1.9 million residents."
      ] } },
  { id: "ES-CS", type: "region", parent: "ES-VC", coords: [-0.0513, 39.9864], name: { de: "Castellón", hu: "Castellón", ro: "Castellon", en: "Castellón" }, description: { de: "Nördliche Valenciaküste.", hu: "�?szaki valenciai part.", ro: "Coasta valencian�? de nord.", en: "Northern Valencia coast." }, descriptionAdvanced: { de: "", hu: "Castell�n a Valenciai K�z�ss�g leg�szakibb, gyakran m�ltatlanul alul�rt�kelt tartom�nya, amely a Costa del Azahar (Narancsvir�g-part) enyhe, citrusillat� strandjait k�n�lja. A partvid�k m�g�tt Castell�n Spanyolorsz�g m�sodik leghegyvid�kibb tartom�nya, melynek elz�rt Maestrazgo r�gi�ja m�ly, k�z�pkori t�rt�nelmet ?riz. Morella, a r�gi� egyik legszebb er?d�tett hegyi v�rosa, olyan, mintha a m�ltb�l maradt volna fenn a massz�v falaival �s v�r�val. A partvid�ken Pen�scola t�rt�nelmi tengeri kast�lya vonzza a legt�bb tekintetet, amely egy sziklaszirten ny�lik a tengerbe (�s a Tr�nok harc�ban is felt?nt). Gazdas�gilag Castell�n a spanyol ker�mia- �s csempegy�rt�s (azulejos) abszol�t fellegv�ra.", ro: "", en: "Castell�n is the northernmost province of the Valencian Community, offering a dramatic blend of expansive Mediterranean beaches and the second most mountainous interior of any Spanish province. The coastline, known as the Costa del Azahar (Orange Blossom Coast), features bustling resort towns and historic seaports. Inland, the rugged Maestrazgo mountains hide beautifully preserved medieval villages, ancient Templar castles, and deep pine forests. The region boasts a rich history shaped by Iberian, Roman, and Moorish cultures, heavily relying on agriculture, particularly citrus, and a booming ceramic tile industry. Castell�n provides a quieter, more authentic Mediterranean experience balancing coastal relaxation with rugged mountain exploration." }, factsAdvanced: { de: [], hu: [
        "Pe��scola v�ra a t�rt�nelem folyam�n p�pai sz�khely is volt: itt �lt sz�m?zet�sben XIII. Benedek (a 'Luna p�pa') az avignoni egyh�zszakad�s idej�n.",
        "A tartom�ny adja a spanyolorsz�gi ker�mia padl�- �s falburkol� lapok (azulejos) termel�s�nek t�bb mint 90%-�t.",
        "Morella v�rfalai t�bb mint k�t kilom�ter hosszan �lelik k�rbe a v�rost, meg?rizve a 14. sz�zadi �p�t�szeti von�sokat.",
        "Benic�ssim v�rosa nyaranta Spanyolorsz�g legnagyobb �s legismertebb zenei fesztiv�ljainak (FIB �s Rototom) ad otthont."
      ], ro: [], en: [
        "The province is one of the world's leading producers of ceramic tiles, centered around the town of Vila-real.",
        "Pe��scola Castle, built by the Knights Templar between 1294 and 1307, was later a papal residence for Antipope Benedict XIII.",
        "The Costa del Azahar extends for approximately 112 kilometers along the Mediterranean.",
        "The Columbretes Islands, a volcanic archipelago off the coast, were declared a Nature Reserve in 1988."
      ] } },
  { id: "ES-V",  type: "region", parent: "ES-VC", coords: [-0.3763, 39.4699], name: { de: "Valencia", hu: "Valencia", ro: "Valencia", en: "Valencia" }, description: { de: "Heimat der Paella und der Ciudad de las Artes.", hu: "A paella és a Ciudad de las Artes hazája.", ro: "Patria paellei �?i a Ciudad de las Artes.", en: "Home of paella and the Ciudad de las Artes." }, descriptionAdvanced: { de: "", hu: "Valencia tartom�ny a Spanyol keleti partvid�k l�ktet? gazdas�gi �s kultur�lis k�zpontja, amely harmonikusan �tv�zi a mediterr�n �letszeml�letet a leny?g�z? moderns�ggel. A tartom�ny k�zpontja, Valencia v�rosa Spanyolorsz�g harmadik legnagyobb v�rosa, �s arr�l h�res, hogy a kisz�radt Turia foly� medr�t egy gy�ny�r?, kilenc kilom�ter hossz� parkk� alak�totta, aminek v�g�n a M?v�szetek �s Tudom�nyok V�rosa ragyog. A r�gi� vid�ke hatalmas, illatoz� narancs�ltetv�nyekb?l (huerta) �s kiterjedt rizsf�ldekb?l �ll, ut�bbi a h�res Albufera lag�na k�rny�k�n, ahol a hagyom�nyos spanyol paella megsz�letett. A t�rt�nelmi v�rosok, mint X�tiva vagy Sagunto r�mai amfite�trumokkal �s hegyi er?d�kkel eml�keztetnek a tartom�ny gazdag strat�giai m�ltj�ra.", ro: "", en: "Valencia is a dynamic province situated in the center of the Valencian Community, featuring a broad, fertile coastal plain that transitions into a rugged mountainous hinterland. The province is defined by the extensive Huerta de Valencia, a historic irrigated agricultural area famously producing the rice for authentic Valencian paella. Its deep history spans Roman foundation, a golden age of Islamic culture, and a powerful medieval Kingdom of Valencia, all of which heavily influence its architecture and traditions. Today, it balances its rich historical legacy, exemplified by the Fallas festival, with cutting-edge modern attractions like the City of Arts and Sciences. Valencia is a vibrant economic and cultural hub of the Mediterranean coast." }, factsAdvanced: { de: [], hu: [
        "A valenciai Selyemb�rze (La Lonja de la Seda) a k�s? g�tikus eur�pai civil �p�t�szet egyik legszebb, UNESCO �ltal is elismert p�ld�ja.",
        "Az Albufera lag�na Spanyolorsz�g egyik legfontosabb �desv�zi �l?helye, �s a h�res r�vid szem? bomba rizs termeszt�s�nek helysz�ne.",
        "Minden �v augusztus utols� szerd�j�n a valenciai Bu�ol v�rosa rendezi a La Tomatina fesztiv�lt, a vil�g legnagyobb paradicsomdob�l�s csat�j�t.",
        "A tartom�ny Sagunto v�rosa h?sies, 8 h�napig tart� ellen�ll�s�r�l h�res Hannib�l karth�g�i csapatai ellen az �kori pun h�bor�k idej�n."
      ], ro: [], en: [
        "The Silk Exchange (La Lonja de la Seda), a masterpiece of late Gothic architecture, became a UNESCO site in 1996.",
        "The Albufera freshwater lagoon, located just south of the capital, is the birthplace of the traditional dish Paella.",
        "The annual Fallas festival in March was added to UNESCO's intangible cultural heritage list in 2016.",
        "The province has a population of over 2.6 million people, centered around Spain's third-largest city."
      ] } },
];

export const spainAllPoi: POI[] = [...spainCountry, ...spainRegions, ...spainProvinces, ...spainCities, ...extraSpainPoi];

