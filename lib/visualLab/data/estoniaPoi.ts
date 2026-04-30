import type { POI } from "./poi";

const estoniaAllPoiBase: POI[] = [
  {
    id: "ee-country",
    type: "country",
    coords: [24.7536, 59.4370],
    name: {
      de: "Estland",
      hu: "Észtország",
      ro: "Estonia",
      en: "Estonia"
    },
    description: {
      de: "Estland ist der nördlichste der baltischen Staaten, bekannt für seine fortschrittliche digitale Gesellschaft, unberührte Natur und die mittelalterliche Hauptstadt Tallinn.",
      hu: "Észtország a balti államok legészakibbika, amely fejlett digitális társadalmáról, érintetlen természetéről és középkori fővárosáról, Tallinnról ismert.",
      ro: "Estonia este cel mai nordic dintre statele baltice, cunoscut pentru societatea sa digitală avansată, natura virgină și capitala medievală Tallinn.",
      en: "Estonia is the northernmost of the Baltic states, known for its advanced digital society, untouched nature, and medieval capital Tallinn."
    },
    descriptionAdvanced: {
      de: "Estland, offiziell die Republik Estland, ist ein faszinierendes Land im Nordosten Europas, das als nördlichster der drei baltischen Staaten eine einzigartige Brücke zwischen Skandinavien und Osteuropa schlägt. Das Land grenzt im Norden an den Finnischen Meerbusen, im Westen an die Ostsee, im Süden an Lettland und im Osten an Russland. Estland ist weltberühmt für seine Vorreiterrolle in der Digitalisierung; als 'e-Estonia' hat es eine der fortschrittlichsten digitalen Gesellschaften der Welt aufgebaut, in der fast alle Behördengänge online erledigt werden können. Die Hauptstadt Tallinn besticht durch eine der am besten erhaltenen mittelalterlichen Altstädte Europas, die zum UNESCO-Welterbe gehört und in der Kopfsteinpflastergassen auf moderne Start-up-Kultur treffen. Doch Estland ist weit mehr als nur Technologie. Über 50 % der Landesfläche sind von dichten Wäldern bedeckt, und das Land beherbergt über 2.000 Inseln sowie unzählige Moore und Seen, die eine Oase der Ruhe und unberührten Natur bieten. Die estnische Kultur ist tief in der Folklore und dem Gesang verwurzelt, was sich im beeindruckenden Sängerfest widerspiegelt, das alle fünf Jahre Zehntausende von Menschen zusammenbringt. Kulinarisch bietet Estland eine Mischung aus nordischen Einflüssen und traditionellen baltischen Gerichten, wobei Wert auf lokale und saisonale Zutaten gelegt wird. Heute präsentiert sich Estland als moderne, dynamische Nation mit einer starken Wirtschaft und einem hohen Bildungsniveau, die stolz auf ihr Erbe ist und gleichzeitig die Zukunft der digitalen Welt mitgestaltet. Ob man durch die historischen Gassen von Tallinn schlendert, die Stille in den Nationalparks wie Lahemaa genießt oder die lebendige Universitätsstadt Tartu erkundet – Estland empfängt seine Besucher mit einer Mischung aus nordischer Klarheit, technologischer Innovation und herzlicher Gastfreundschaft.",
      hu: "Észtország, hivatalos nevén az Észt Köztársaság, egy lenyűgöző ország Északkelet-Európában, amely a három balti állam legészakibbika, és egyedülálló hidat képez Skandinávia és Kelet-Európa között. Az ország északon a Finn-öböllel, nyugaton a Balti-tengerrel, délen Lettországgal, keleten pedig Oroszországgal határos. Észtország világhírű a digitalizációban betöltött úttörő szerepéről; 'e-Estonia' néven a világ egyik legfejlettebb digitális társadalmát építette ki, ahol szinte minden közigazgatási ügy online intézhető. A főváros, Tallinn, Európa egyik legjobban megőrzött középkori óvárosával büszkélkedhet, amely az UNESCO Világörökség része, és ahol a macskaköves utcák modern start-up kultúrával találkoznak. Észtország azonban sokkal több, mint technológia. Az ország területének több mint 50%-át sűrű erdők borítják, és több mint 2000 sziget, valamint számtalan mocsár és tó található itt, amelyek a nyugalom és az érintetlen természet oázisát kínálják. Az észt kultúra mélyen gyökerezik a folklórban és az éneklésben, ami a lenyűgöző Dalünnepen mutatkozik meg, amely ötévente több tízezer embert hoz össze. Kulináris szempontból Észtország az északi hatások és a hagyományos balti ételek keverékét kínálja, hangsúlyt fektetve a helyi és szezonális alapanyagokra. Ma Észtország modern, dinamikus nemzet, erős gazdasággal és magas oktatási színvonallal, amely büszke örökségére, miközben aktívan alakítja a digitális világ jövőjét. Akár Tallinn történelmi utcáin sétál valaki, akár a Lahemaa Nemzeti Park csendjét élvezi, vagy a vibráló egyetemi várost, Tartut fedezi fel – Észtország az északi tisztaság, a technológiai innováció és a szívélyes vendégszeretet keverékével fogadja látogatóit.",
      ro: "Estonia, oficial Republica Estonia, este o țară fascinantă situată în nord-estul Europei, care, fiind cea mai nordică dintre cele trei state baltice, reprezintă o punte unică între Scandinavia și Europa de Est. Țara se învecinează la nord cu Golful Finlandei, la vest cu Marea Baltică, la sud cu Letonia și la est cu Rusia. Estonia este renumită în întreaga lume pentru rolul său de pionier în digitalizare; sub numele de „e-Estonia”, a construit una dintre cele mai avansate societăți digitale din lume, unde aproape toate procedurile administrative pot fi efectuate online. Capitala Tallinn impresionează prin unul dintre cele mai bine conservate centre vechi medievale din Europa, inclus în Patrimoniul Mondial UNESCO, unde străzile pietruite se întâlnesc cu cultura modernă a start-up-urilor. Totuși, Estonia este mult mai mult decât tehnologie. Peste 50% din suprafața țării este acoperită de păduri dese, iar țara găzduiește peste 2.000 de insule, precum și nenumărate mlaștini și lacuri care oferă o oază de liniște și natură virgină. Cultura estonă este profund înrădăcinată în folclor și cântec, fapt reflectat în impresionantul Festival al Cântecului, care reunește zeci de mii de oameni la fiecare cinci ani. Din punct de vedere culinar, Estonia oferă un amestec de influențe nordice și mâncăruri tradiționale baltice, punând accent pe ingrediente locale și sezoniere. Astăzi, Estonia se prezintă ca o națiune modernă și dinamică, cu o economie puternică și un nivel ridicat de educație, fiind mândră de moștenirea sa și contribuind în același timp la modelarea viitorului lumii digitale. Fie că vă plimbați pe străzile istorice din Tallinn, vă bucurați de liniștea din parcurile naționale precum Lahemaa sau explorați orașul universitar vibrant Tartu – Estonia își întâmpină vizitatorii cu un amestec de claritate nordică, inovație tehnologică și ospitalitate caldă.",
      en: "Estonia, officially the Republic of Estonia, is a fascinating country in Northeastern Europe that, as the northernmost of the three Baltic states, serves as a unique bridge between Scandinavia and Eastern Europe. The country borders the Gulf of Finland to the north, the Baltic Sea to the west, Latvia to the south, and Russia to the east. Estonia is world-renowned for its pioneering role in digitalization; as 'e-Estonia,' it has built one of the most advanced digital societies in the world, where almost all government services can be accessed online. The capital, Tallinn, boasts one of the best-preserved medieval old towns in Europe, a UNESCO World Heritage site where cobblestone streets meet modern startup culture. However, Estonia is much more than just technology. Over 50% of the country's land area is covered by dense forests, and the nation is home to over 2,000 islands as well as countless bogs and lakes that offer an oasis of peace and untouched nature. Estonian culture is deeply rooted in folklore and song, reflected in the impressive Song Festival that brings together tens of thousands of people every five years. Culinarily, Estonia offers a blend of Nordic influences and traditional Baltic dishes, with an emphasis on local and seasonal ingredients. Today, Estonia presents itself as a modern, dynamic nation with a strong economy and a high level of education, proud of its heritage while simultaneously helping to shape the future of the digital world. Whether strolling through the historic streets of Tallinn, enjoying the silence in national parks like Lahemaa, or exploring the vibrant university city of Tartu—Estonia welcomes its visitors with a blend of Nordic clarity, technological innovation, and warm hospitality."
    },
    facts: {
      de: [
        "Hauptstadt: Tallinn",
        "Währung: Euro",
        "Bevölkerung: ca. 1,3 Millionen",
        "Digitalisierung: Estland gilt als eine der fortschrittlichsten digitalen Gesellschaften weltweit ('e-Estonia').",
        "Natur: Über 50 % der Landesfläche sind von Wäldern bedeckt.",
        "Inseln: Estland hat über 2.000 Inseln in der Ostsee.",
        "Bildung: Das Land hat eine der höchsten Alphabetisierungsraten der Welt (99,8 %).",
        "Innovation: Skype wurde 2003 von estnischen Entwicklern mitbegründet.",
        "Wirtschaft: Estland hat die höchste Anzahl an Start-ups pro Kopf in Europa.",
        "Sprache: Estnisch ist eng mit dem Finnischen und entfernt mit dem Ungarischen verwandt."
      ],
      hu: [
        "Főváros: Tallinn",
        "Pénznem: Euró",
        "Népesség: kb. 1,3 millió",
        "Digitalizáció: Észtország a világ egyik legfejlettebb digitális társadalma ('e-Estonia').",
        "Természet: Az ország területének több mint 50%-át erdők borítják.",
        "Szigetek: Észtországnak több mint 2000 szigete van a Balti-tengeren.",
        "Oktatás: Az országban a világ egyik legmagasabb az írástudók aránya (99,8%).",
        "Innováció: A Skype-ot 2003-ban észt fejlesztők közreműködésével hozták létre.",
        "Gazdaság: Észtországban a legmagasabb az egy főre jutó start-upok száma Európában.",
        "Nyelv: Az észt nyelv közeli rokona a finnek, és távoli rokona a magyarnak."
      ],
      ro: [
        "Capitala: Tallinn",
        "Moneda: Euro",
        "Populație: aprox. 1,3 milioane",
        "Digitalizare: Estonia este considerată una dintre cele mai avansate societăți digitale din lume („e-Estonia”).",
        "Natură: Peste 50% din suprafața țării este acoperită de păduri.",
        "Insule: Estonia are peste 2.000 de insule în Marea Baltică.",
        "Educație: Țara are una dintre cele mai ridicate rate de alfabetizare din lume (99,8%).",
        "Inovație: Skype a fost co-fondat de dezvoltatori estonieni în 2003.",
        "Economie: Estonia are cel mai mare număr de start-up-uri pe cap de locuitor din Europa.",
        "Limbă: Limba estonă este strâns înrudită cu finlandeza și înrudită îndepărtat cu maghiara."
      ],
      en: [
        "Capital: Tallinn",
        "Currency: Euro",
        "Population: approx. 1.3 million",
        "Digitalization: Estonia is considered one of the most advanced digital societies in the world ('e-Estonia').",
        "Nature: Over 50% of the country's land area is covered by forests.",
        "Islands: Estonia has over 2,000 islands in the Baltic Sea.",
        "Education: The country has one of the highest literacy rates in the world (99.8%).",
        "Innovation: Skype was co-founded by Estonian developers in 2003.",
        "Economy: Estonia has the highest number of startups per capita in Europe.",
        "Language: Estonian is closely related to Finnish and distantly to Hungarian."
      ]
    },
    image: "/images/visualLab/estonia/country.jpg"
  },
  {
    id: "ee-tallinn",
    type: "city",
    parent: "ee-country",
    coords: [24.7536, 59.4370],
    name: {
      de: "Tallinn",
      hu: "Tallinn",
      ro: "Tallinn",
      en: "Tallinn"
    },
    description: {
      de: "Tallinn ist die Hauptstadt Estlands, berühmt für ihre außergewöhnlich gut erhaltene mittelalterliche Altstadt, die zum UNESCO-Welterbe gehört.",
      hu: "Tallinn Észtország fővárosa, amely kivételesen jól megőrzött, UNESCO világörökségi középkori óvárosáról híres.",
      ro: "Tallinn este capitala Estoniei, faimoasă pentru orașul său vechi medieval excepțional de bine conservat, inclus în Patrimoniul Mondial UNESCO.",
      en: "Tallinn is the capital of Estonia, famous for its exceptionally well-preserved medieval old town, a UNESCO World Heritage site."
    },
    descriptionAdvanced: {
      de: "Tallinn, die faszinierende Hauptstadt Estlands, ist eine Stadt der Kontraste, in der mittelalterliche Geschichte auf eine pulsierende, technologiegetriebene Zukunft trifft. Das Herzstück ist die von der UNESCO geschützte Altstadt, eine der am besten erhaltenen Hanse-Städte Europas. Hier schlängeln sich enge Kopfsteinpflastergassen zwischen gotischen Kirchen, imposanten Wehrtürmen und historischen Kaufmannshäusern. Der Domberg (Toompea) thront über der Unterstadt und beherbergt das estnische Parlament sowie die prächtige Alexander-Newski-Kathedrale. Doch Tallinn ist auch ein Epizentrum der digitalen Innovation, oft als das 'Silicon Valley Europas' bezeichnet. Moderne Glasfassaden und kreative Start-up-Hubs prägen Stadtteile wie Kalamaja und Ülemiste City. Kulinarisch bietet die Stadt eine aufregende Mischung aus traditioneller estnischer Küche mit modernen nordischen Einflüssen. Parks wie der Kadriorg-Park mit seinem barocken Palast bieten grüne Oasen der Ruhe. Die Küste mit ihren Promenaden und Stränden lädt zu Spaziergängen mit Blick auf den Finnischen Meerbusen ein.",
      hu: "Észtország fővárosa, amely kivételesen jól megőrzött középkori óvárosáról híres.",
      ro: "Tallinn, capitala Estoniei, este un oraș al contrastelor, unde istoria medievală se îmbină cu un viitor vibrant, condus de tehnologie. Inima sa este centrul vechi, protejat de UNESCO, unul dintre cele mai bine conservate orașe hanseatice din Europa. Aici, străduțe înguste pavate șerpuiesc printre biserici gotice și case istorice ale negustorilor. Dealul Toompea, unde se află parlamentul estonian, domină orașul de jos. Dar Tallinn este și un epicentru al inovației digitale, adesea numit 'Silicon Valley-ul Europei'. Cartiere precum Kalamaja sunt pline de hub-uri creative și start-up-uri. Bucătăria locală amestecă tradițiile estoniene cu influențe nordice moderne. Parcuri precum Kadriorg, cu palatul său baroc, oferă oaze de liniște. Coasta invită la plimbări cu vedere la Golful Finlandei.",
      en: "The capital of Estonia, famous for its exceptionally well-preserved medieval old town."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Ehemalige Hansestadt"],
      hu: ["UNESCO világörökség", "Egykori Hanza-város"],
      ro: ["Patrimoniul Mondial UNESCO", "Fost oraș hanseatic"],
      en: ["UNESCO World Heritage site", "Former Hanseatic city"]
    },
    factsAdvanced: {
      de: [
        "Die Altstadt ist von einer fast 2 km langen, originalen Stadtmauer umgeben.",
        "Tallinn war 2011 Kulturhauptstadt Europas.",
        "Der öffentliche Nahverkehr ist für gemeldete Einwohner seit 2013 kostenlos.",
        "Die St.-Olav-Kirche war im 16. Jahrhundert vermutlich das höchste Gebäude der Welt.",
        "Die Stadt beherbergt über 60 Museen und Galerien.",
        "Der Tallinner Fernsehturm ist mit 314 Metern das höchste Bauwerk Estlands.",
        "Rund 45% der Einwohner Tallinns sind nicht-estnischer Herkunft, hauptsächlich russisch.",
        "Tallinn ist der Geburtsort von Technologie-Giganten wie Skype und Wise (früher TransferWise)."
      ],
      hu: [],
      ro: [
        "Zidul orașului vechi are o lungime de aproape 2 km și este aproape complet intact.",
        "Tallinn a fost Capitală Europeană a Culturii în 2011.",
        "Transportul public este gratuit pentru rezidenții înregistrați din 2013.",
        "Biserica Sf. Olaf a fost, probabil, cea mai înaltă clădire din lume în secolul al XVI-lea.",
        "Orașul găzduiește peste 60 de muzee și galerii.",
        "Turnul TV din Tallinn este cea mai înaltă structură din Estonia, având 314 metri.",
        "Aproximativ 45% dintre locuitorii Tallinnului nu sunt de origine estonă, majoritatea fiind ruși.",
        "Tallinn este locul de naștere al unor giganți tehnologici precum Skype și Wise."
      ],
      en: []
    },
    image: "/images/visualLab/estonia/tallinn.jpg"
  },
  {
    id: "ee-tartu",
    type: "city",
    parent: "ee-country",
    coords: [26.7290, 58.3780],
    name: {
      de: "Tartu",
      hu: "Tartu",
      ro: "Tartu",
      en: "Tartu"
    },
    description: {
      de: "Die zweitgrößte Stadt Estlands und das intellektuelle Zentrum des Landes mit der ältesten Universität.",
      hu: "Észtország második legnagyobb városa és az ország szellemi központja a legrégebbi egyetemmel.",
      ro: "Al doilea oraș ca mărime din Estonia și centrul intelectual al țării, cu cea mai veche universitate.",
      en: "The second-largest city in Estonia and the intellectual center of the country with the oldest university."
    },
    descriptionAdvanced: {
      de: "Tartu, die zweitgrößte Stadt Estlands, gilt als das Herz und die Seele des estnischen Geisteslebens. Dominiert von der prestigeträchtigen Universität Tartu, die 1632 gegründet wurde, versprüht die Stadt eine jugendliche und intellektuelle Atmosphäre. Der Emajõgi-Fluss (Embach) fließt gemächlich durch das Zentrum und teilt die Stadt in zwei Hälften. Das historische Zentrum besticht durch klassizistische Architektur, insbesondere am Rathausplatz, wo sich das berühmte 'Küssende Studenten'-Brunnen-Denkmal befindet. Über der Stadt thronen die Ruinen der gotischen Domkirche auf dem Domberg, die heute das Universitätsmuseum beherbergen. Tartu ist eine Stadt der Museen, Theater und kreativen Viertel wie dem 'Suppenviertel' (Supilinn). Als Kulturhauptstadt Europas 2024 unterstreicht Tartu seine Bedeutung als dynamisches Zentrum für Kunst und Wissenschaft. Die Stadt ist eine Brutstätte für neue Ideen und bietet eine entspannte Alternative zum geschäftigen Tallinn, voller Charme und intellektueller Neugier.",
      hu: "",
      ro: "Tartu, al doilea oraș ca mărime din Estonia, este considerat inima intelectuală și culturală a țării. Dominat de prestigioasa Universitate din Tartu, fondată în 1632, orașul emană o atmosferă vibrantă și tânără. Râul Emajõgi, care traversează centrul, adaugă un farmec pitoresc, cu podurile și promenadele sale. Piața Primăriei, cu clădirea sa neoclasică și fântâna cu statuia studenților care se sărută, este un punct de atracție major. Dealul Toomemägi, cu ruinele catedralei gotice și vechiul observator, oferă o incursiune în istoria orașului. Tartu a fost desemnat Capitală Europeană a Culturii în 2024, subliniind rolul său de centru dinamic pentru artă, știință și inovație. Cartierul creativ Aparaaditehas și numeroasele muzee, precum Muzeul Național Estonian, completează oferta culturală bogată a acestui oraș plin de farmec.",
      en: "Tartu, Estonia's second-largest city, is widely regarded as the country's intellectual and cultural heart. Dominated by the prestigious University of Tartu, founded in 1632, the city exudes a vibrant and youthful atmosphere. The Emajõgi River flows through its center, adding to its picturesque charm with its bridges and promenades. The Town Hall Square, with its neoclassical town hall and the iconic 'Kissing Students' fountain, is a major focal point. Toomemägi (Cathedral Hill), with the ruins of a Gothic cathedral and the Old Observatory, offers a journey into the city's past. Tartu has been designated the European Capital of Culture for 2024, highlighting its role as a dynamic center for art, science, and innovation. The Aparaaditehas creative city and numerous museums, such as the Estonian National Museum, complete the rich cultural offering of this charming city."
    },
    facts: {
      de: ["Universität Tartu (gegr. 1632)", "Kulturhauptstadt Europas 2024"],
      hu: ["Tartui Egyetem (alapítva 1632)", "Európa Kulturális Fővárosa 2024"],
      ro: ["Universitatea din Tartu (fondată 1632)", "Capitala Europeană a Culturii 2024"],
      en: ["University of Tartu (est. 1632)", "European Capital of Culture 2024"]
    },
    factsAdvanced: {
      de: [
        "Die Universität Tartu ist eine der ältesten in Nordeuropa.",
        "Tartu trägt den Titel 'Stadt der guten Gedanken'.",
        "Der Schiefe Turm von Tartu, Teil des alten Rathauses, neigt sich stärker als der Turm von Pisa.",
        "Das Estnische Nationalmuseum (ERM) befindet sich in einem beeindruckenden modernen Gebäude am Stadtrand.",
        "Im AHHAA Science Centre können Besucher Wissenschaft interaktiv erleben.",
        "Die Stadt hat eine sehr hohe Dichte an Denkmälern und Skulpturen.",
        "Im Frühling findet ein studentisches Festival statt, das die ganze Stadt belebt.",
        "Der botanische Garten der Universität Tartu ist der älteste in den baltischen Staaten (gegr. 1803)."
      ],
      hu: [],
      ro: [
        "Universitatea din Tartu este una dintre cele mai vechi din Europa de Nord, fondată în 1632 de regele Gustav II Adolf al Suediei.",
        "Tartu poartă titlul de 'Orașul Gândurilor Bune'.",
        "Casa Înclinată din Tartu se apleacă mai mult decât Turnul din Pisa.",
        "Muzeul Național Estonian (ERM) este situat într-o clădire modernă impresionantă la marginea orașului.",
        "La Centrul Științific AHHAA, vizitatorii pot experimenta știința interactiv.",
        "Orașul are o densitate foarte mare de monumente și sculpturi.",
        "Primăvara, un festival studențesc animă întregul oraș.",
        "Grădina Botanică a Universității din Tartu este cea mai veche din statele baltice (fondată în 1803)."
      ],
      en: [
        "The University of Tartu is one of the oldest in Northern Europe, founded in 1632 by King Gustav II Adolf of Sweden.",
        "Tartu is known as the 'City of Good Thoughts'.",
        "The Leaning House of Tartu tilts more than the Tower of Pisa.",
        "The Estonian National Museum (ERM) is located in an impressive modern building on the city's outskirts.",
        "At the AHHAA Science Centre, visitors can experience science interactively.",
        "The city has a very high density of monuments and sculptures.",
        "In spring, a student festival called 'Student Days' enlivens the entire city.",
        "The University of Tartu Botanical Garden is the oldest in the Baltic states, founded in 1803."
      ]
    },
    image: "/images/visualLab/estonia/tartu.jpg"
  },
  {
    id: "ee-parnu",
    type: "city",
    parent: "ee-country",
    coords: [24.4971, 58.3859],
    name: {
      de: "Pärnu",
      hu: "Pärnu",
      ro: "Pärnu",
      en: "Pärnu"
    },
    description: {
      de: "Die 'Sommerhauptstadt' Estlands, ein beliebter Kurort mit langen Sandstränden.",
      hu: "Észtország 'nyári fővárosa', népszerű gyógyüdülőhely hosszú homokos strandokkal.",
      ro: "'Capitala de vară' a Estoniei, o stațiune balneară populară cu plaje lungi de nisip.",
      en: "The 'summer capital' of Estonia, a popular spa resort with long sandy beaches."
    },
    descriptionAdvanced: {
      de: "Pärnu, liebevoll als 'Sommerhauptstadt' Estlands bezeichnet, ist der führende Bade- und Kurort des Landes. Gelegen an der Mündung des Flusses Pärnu in die Rigaer Bucht, lockt die Stadt mit ihrem langen, weißen Sandstrand und der flachen, warmen Bucht jedes Jahr Tausende von Besuchern an. Die Stadt hat eine lange Tradition als Kurort, die bis ins 19. Jahrhundert zurückreicht, was sich in den eleganten Holzvillen und dem historischen Schlammbad widerspiegelt. Die von Bäumen gesäumte Rüütli-Straße ist das Herz der Innenstadt mit charmanten Cafés und Geschäften. Neben dem Strandleben bietet Pärnu auch eine lebendige Kulturszene mit Festivals, Konzerten und Kunstgalerien. Die malerische Promenade und die Seebrücke sind perfekte Orte für abendliche Spaziergänge. Pärnu verkörpert die entspannte estnische Sommeratmosphäre und ist ein ideales Ziel für Familien und Erholungssuchende.",
      hu: "",
      ro: "Pärnu, cunoscut cu afecțiune drept 'capitala de vară' a Estoniei, este principala stațiune balneară a țării. Situat la gura de vărsare a râului Pärnu în Golful Riga, orașul atrage mii de vizitatori anual cu plaja sa lungă de nisip alb și golful său puțin adânc și cald. Orașul are o lungă tradiție ca stațiune balneară, datând din secolul al XIX-lea, reflectată în vilele elegante din lemn și în clădirea istorică a băilor de nămol. Strada Rüütli, mărginită de copaci, este inima centrului orașului, cu cafenele și magazine fermecătoare. Pe lângă viața de plajă, Pärnu oferă și o scenă culturală vibrantă, cu festivaluri, concerte și galerii de artă. Promenada pitorească și digul sunt locuri perfecte pentru plimbări de seară.",
      en: "Pärnu, affectionately known as Estonia's 'summer capital,' is the country's premier seaside resort. Located at the mouth of the Pärnu River on the Gulf of Riga, the city attracts thousands of visitors annually with its long, white sandy beach and shallow, warm bay. The city has a long tradition as a spa town, dating back to the 19th century, which is reflected in its elegant wooden villas and the historic mud baths building. The tree-lined Rüütli Street is the heart of the city center with charming cafes and shops. In addition to beach life, Pärnu also offers a vibrant cultural scene with festivals, concerts, and art galleries. The picturesque promenade and pier are perfect places for evening strolls. Pärnu embodies the relaxed Estonian summer atmosphere and is an ideal destination for families and those seeking relaxation."
    },
    facts: {
      de: ["Historische Schlammbäder", "Lange Sandstrände"],
      hu: ["Történelmi iszapfürdők", "Hosszú homokos strandok"],
      ro: ["Băi de nămol istorice", "Plaje lungi de nisip"],
      en: ["Historic mud baths", "Long sandy beaches"]
    },
    factsAdvanced: {
      de: [
        "Erstes Schlammbad wurde 1838 eröffnet.",
        "Der Strand von Pärnu hat die 'Blaue Flagge' für Sauberkeit und Sicherheit erhalten.",
        "Die Stadt war ein wichtiges Mitglied der Hanse im Mittelalter.",
        "Die St.-Elisabeth-Kirche ist eine der schönsten Barockkirchen in Estland.",
        "Pärnu ist bekannt für seine zahlreichen Musik- und Filmfestivals im Sommer.",
        "Der Fluss Pärnu ist einer der längsten Flüsse Estlands.",
        "Die Stadt hat ein gut ausgebautes Netz von Fahrradwegen.",
        "Der Dichterin Lydia Koidula ist ein Museum in Pärnu gewidmet."
      ],
      hu: [],
      ro: [
        "Prima baie de nămol a fost deschisă în 1838.",
        "Plaja din Pärnu a primit 'Steagul Albastru' pentru curățenie și siguranță.",
        "Orașul a fost un membru important al Ligii Hanseatice în Evul Mediu.",
        "Biserica Sf. Elisabeta este una dintre cele mai frumoase biserici baroce din Estonia.",
        "Pärnu este cunoscut pentru numeroasele sale festivaluri de muzică și film pe timp de vară.",
        "Râul Pärnu este unul dintre cele mai lungi râuri din Estonia.",
        "Orașul are o rețea bine dezvoltată de piste pentru biciclete.",
        "Un muzeu din Pärnu este dedicat poetei Lydia Koidula."
      ],
      en: [
        "The first mud bath was opened in 1838.",
        "Pärnu beach has been awarded the 'Blue Flag' for its cleanliness and safety.",
        "The city was an important member of the Hanseatic League in the Middle Ages.",
        "St. Elizabeth's Church is one of the most beautiful baroque churches in Estonia.",
        "Pärnu is known for its numerous music and film festivals in the summer.",
        "The Pärnu River is one of the longest rivers in Estonia.",
        "The city has a well-developed network of bicycle paths.",
        "A museum in Pärnu is dedicated to the poet Lydia Koidula."
      ]
    },
    image: "/images/visualLab/estonia/parnu.jpg"
  },
  {
    id: "ee-saaremaa",
    type: "landmark",
    parent: "ee-country",
    coords: [22.5000, 58.4000],
    name: {
      de: "Saaremaa",
      hu: "Saaremaa",
      ro: "Saaremaa",
      en: "Saaremaa"
    },
    description: {
      de: "Die größte Insel Estlands, bekannt für ihre Windmühlen, Meteoritenkrater und die Burg Kuressaare.",
      hu: "Észtország legnagyobb szigete, amely szélmalmairól, meteoritkrátereiről és a Kuressaare várról ismert.",
      ro: "Cea mai mare insulă a Estoniei, cunoscută pentru morile sale de vânt, craterele de meteoriți și Castelul Kuressaare.",
      en: "The largest island in Estonia, known for its windmills, meteorite craters, and Kuressaare Castle."
    },
    descriptionAdvanced: {
      de: "Saaremaa, die größte Insel Estlands, ist ein Ort von mythischer Schönheit und einzigartigem Charakter. Die Insel, die in der Ostsee liegt, ist bekannt für ihre unberührte Natur, ihre traditionellen Windmühlen und ihre reiche Geschichte. Ein geologisches Highlight ist das Kaali-Meteoritenkraterfeld, das vor Tausenden von Jahren entstand. Die Inselhauptstadt Kuressaare wird von der imposanten Bischofsburg dominiert, einer der am besten erhaltenen mittelalterlichen Festungen im Baltikum. Die Küste von Saaremaa ist geprägt von schroffen Klippen wie der Panga-Klippe, einsamen Stränden und Wacholderfeldern. Die Insel hat eine eigene Kultur und einen eigenen Dialekt bewahrt. Traditionelle Steinfriedhöfe und strohgedeckte Häuser zeugen von der langen Besiedlungsgeschichte. Saaremaa ist ein Paradies für Naturliebhaber, Wanderer und alle, die Ruhe und Authentizität suchen.",
      hu: "",
      ro: "Saaremaa, cea mai mare insulă a Estoniei, este un loc de o frumusețe mitică și un caracter unic. Insula din Marea Baltică este cunoscută pentru natura sa neatinsă, morile de vânt tradiționale și istoria bogată. Un punct de atracție geologic este câmpul de cratere meteoritice de la Kaali, format acum mii de ani. Capitala insulei, Kuressaare, este dominată de impunătorul Castel Episcopal, una dintre cele mai bine conservate fortărețe medievale din Baltica. Coasta Saaremaa este marcată de stânci abrupte precum faleza Panga, plaje izolate și câmpuri de ienupăr. Insula și-a păstrat propria cultură și dialect. Cimitirele tradiționale din piatră și casele cu acoperiș de paie mărturisesc lunga istorie a așezării. Saaremaa este un paradis pentru iubitorii de natură și drumeții.",
      en: "Saaremaa, Estonia's largest island, is a place of mythical beauty and unique character. The island, located in the Baltic Sea, is known for its untouched nature, traditional windmills, and rich history. A geological highlight is the Kaali meteorite crater field, formed thousands of years ago. The island's capital, Kuressaare, is dominated by the imposing Episcopal Castle, one of the best-preserved medieval fortresses in the Baltics. The coast of Saaremaa is characterized by rugged cliffs like the Panga Cliff, secluded beaches, and juniper fields. The island has preserved its own culture and dialect. Traditional stone fences and thatched-roof houses testify to its long history of settlement. Saaremaa is a paradise for nature lovers, hikers, and anyone seeking peace and authenticity."
    },
    facts: {
      de: ["Kaali-Meteoritenkrater", "Bischofsburg Kuressaare"],
      hu: ["Kaali meteoritkráter", "Kuressaare püspöki vár"],
      ro: ["Craterul de meteorit Kaali", "Castelul episcopal Kuressaare"],
      en: ["Kaali meteorite crater", "Kuressaare Episcopal Castle"]
    },
    factsAdvanced: {
      de: [
        "Saaremaa bedeutet 'Inselland' auf Estnisch.",
        "Die Insel ist die viertgrößte Insel der Ostsee.",
        "Der Kaali-Krater ist der größte Meteoritenkrater Europas, der leicht zugänglich ist.",
        "Die Insel hat die höchste Dichte an Spas pro Kopf in Estland.",
        "Die Angla-Windmühlen sind ein Wahrzeichen der Insel.",
        "Auf Saaremaa wachsen über 35 Orchideenarten.",
        "Die Bischofsburg in Kuressaare wurde nie von feindlichen Truppen erobert.",
        "Brot und Bier aus heimischer Produktion sind lokale Spezialitäten."
      ],
      hu: [],
      ro: [
        "Saaremaa înseamnă 'țara insulei' în estonă.",
        "Insula este a patra ca mărime din Marea Baltică.",
        "Craterul Kaali este cel mai mare crater de meteorit ușor accesibil din Europa.",
        "Insula are cea mai mare densitate de spa-uri pe cap de locuitor din Estonia.",
        "Morile de vânt de la Angla sunt un simbol al insulei.",
        "Pe Saaremaa cresc peste 35 de specii de orhidee.",
        "Castelul Episcopal din Kuressaare nu a fost niciodată cucerit de trupe inamice.",
        "Pâinea și berea de casă sunt specialități locale."
      ],
      en: [
        "Saaremaa means 'island land' in Estonian.",
        "The island is the fourth-largest island in the Baltic Sea.",
        "The Kaali crater is the largest meteorite crater in Europe that is easily accessible.",
        "The island has the highest density of spas per capita in Estonia.",
        "The Angla windmills are a landmark of the island.",
        "Over 35 species of orchids grow on Saaremaa.",
        "The Episcopal Castle in Kuressaare was never conquered by enemy forces.",
        "Homemade bread and beer are local specialties."
      ]
    },
    image: "/images/visualLab/estonia/saaremaa.jpg"
  },
  {
    id: "ee-lahemaa",
    type: "landmark",
    parent: "ee-country",
    coords: [25.8333, 59.5667],
    name: {
      de: "Lahemaa-Nationalpark",
      hu: "Lahemaa Nemzeti Park",
      ro: "Parcul Național Lahemaa",
      en: "Lahemaa National Park"
    },
    description: {
      de: "Der älteste und größte Nationalpark Estlands, der Küstenlandschaften, Moore und historische Gutshöfe schützt.",
      hu: "Észtország legrégebbi és legnagyobb nemzeti parkja, amely part menti tájakat, mocsarakat és történelmi udvarházakat véd.",
      ro: "Cel mai vechi și cel mai mare parc național din Estonia, protejând peisaje de coastă, mlaștini și conace istorice.",
      en: "The oldest and largest national park in Estonia, protecting coastal landscapes, bogs, and historic manors."
    },
    descriptionAdvanced: {
      de: "Der Lahemaa-Nationalpark, gegründet 1971, ist das älteste und größte Schutzgebiet Estlands und ein Mosaik aus unberührter Natur und reichem Kulturerbe. Sein Name bedeutet 'Land der Buchten', was die stark gegliederte Küstenlinie mit ihren sandigen Stränden, felsigen Abschnitten und malerischen Fischerdörfern treffend beschreibt. Im Landesinneren erstrecken sich weite Wälder, die Heimat von Elchen, Bären und Luchsen sind. Eine Besonderheit sind die riesigen Moore wie das Viru-Moor, die auf Holzstegen durchwandert werden können und eine fast surreale Stille ausstrahlen. Historische Gutshöfe wie Palmse, Sagadi und Vihula zeugen vom prunkvollen Leben des deutschbaltischen Adels und dienen heute als Museen, Hotels und Kulturzentren. Lahemaa bietet eine einzigartige Kombination aus Erholung an der Küste, tiefen Einblicken in die estnische Natur und einer Reise in die aristokratische Vergangenheit des Landes.",
      hu: "",
      ro: "Parcul Național Lahemaa, înființat în 1971, este cea mai veche și mai mare arie protejată din Estonia, un mozaic de natură virgină și patrimoniu cultural bogat. Numele său înseamnă 'Țara Golfurilor', descriind perfect coasta sa accidentată cu plaje de nisip, porțiuni stâncoase și sate pescărești pitorești. În interior, se întind păduri vaste, adăpost pentru elani, urși și lincși. O caracteristică specială o reprezintă mlaștinile uriașe precum Mlaștina Viru, care pot fi traversate pe podețe de lemn și emană o liniște aproape suprarealistă. Conace istorice precum Palmse, Sagadi și Vihula mărturisesc viața opulentă a nobilimii germano-baltice și servesc astăzi drept muzee, hoteluri și centre culturale.",
      en: "Lahemaa National Park, established in 1971, is Estonia's oldest and largest protected area, a mosaic of untouched nature and rich cultural heritage. Its name means 'Land of Bays,' which aptly describes its rugged coastline with sandy beaches, rocky sections, and picturesque fishing villages. Inland, vast forests stretch out, home to moose, bears, and lynx. A special feature are the huge bogs like the Viru Bog, which can be traversed on wooden walkways and radiate an almost surreal silence. Historic manors such as Palmse, Sagadi, and Vihula bear witness to the lavish life of the Baltic German nobility and today serve as museums, hotels, and cultural centers. Lahemaa offers a unique combination of coastal recreation, deep insights into Estonian nature, and a journey into the country's aristocratic past."
    },
    facts: {
      de: ["Gegründet 1971", "Viru-Moor"],
      hu: ["1971-ben alapították", "Viru-mocsár"],
      ro: ["Înființat în 1971", "Mlaștina Viru"],
      en: ["Established in 1971", "Viru Bog"]
    },
    factsAdvanced: {
      de: [
        "Lahemaa war der erste Nationalpark, der in der Sowjetunion gegründet wurde.",
        "Der Park umfasst vier große Halbinseln und zahlreiche Buchten.",
        "Die 'Kapitänsdörfer' wie Käsmu und Altja bewahren die maritime Geschichte.",
        "Im Park gibt es über 700 Pflanzenarten.",
        "Die Gutshöfe Palmse und Sagadi bilden ein wichtiges kulturelles Zentrum.",
        "Der Park ist ein bedeutendes Schutzgebiet für Großsäuger wie Braunbären.",
        "Findlinge aus der Eiszeit sind in der Landschaft verstreut, der größte ist der 'Estonian Giant'.",
        "Die Flüsse im Park sind wichtige Laichgebiete für Lachse und Meerforellen."
      ],
      hu: [],
      ro: [
        "Lahemaa a fost primul parc național înființat în Uniunea Sovietică.",
        "Parcul cuprinde patru peninsule mari și numeroase golfuri.",
        "'Satele căpitanilor', precum Käsmu și Altja, păstrează istoria maritimă.",
        "În parc există peste 700 de specii de plante.",
        "Conacele Palmse și Sagadi formează un centru cultural important.",
        "Parcul este o arie protejată importantă pentru mamifere mari, precum ursul brun.",
        "Bolovani eratici din era glaciară sunt împrăștiați în peisaj.",
        "Râurile din parc sunt zone importante de reproducere pentru somon și păstrăvul de mare."
      ],
      en: [
        "Lahemaa was the first national park established in the Soviet Union.",
        "The park covers four large peninsulas and numerous bays.",
        "The 'captain's villages' like Käsmu and Altja preserve maritime history.",
        "There are over 700 plant species in the park.",
        "The Palmse and Sagadi manors form an important cultural center.",
        "The park is an important protected area for large mammals such as brown bears.",
        "Glacial erratic boulders are scattered throughout the landscape, the largest being the 'Estonian Giant'.",
        "The rivers in the park are important spawning grounds for salmon and sea trout."
      ]
    },
    image: "/images/visualLab/estonia/lahemaa.jpg"
  },
  {
    id: "ee-narva",
    type: "city",
    parent: "ee-country",
    coords: [28.1833, 59.3833],
    name: {
      de: "Narva",
      hu: "Narva",
      ro: "Narva",
      en: "Narva"
    },
    description: {
      de: "Die östlichste Stadt Estlands an der Grenze zu Russland, dominiert von der mächtigen Hermannsburg.",
      hu: "Észtország legkeletibb városa az orosz határon, amelyet a hatalmas Hermann-vár ural.",
      ro: "Cel mai estic oraș din Estonia, la granița cu Rusia, dominat de puternicul Castel Hermann.",
      en: "The easternmost city in Estonia on the border with Russia, dominated by the mighty Hermann Castle."
    },
    descriptionAdvanced: {
      de: "Narva, die drittgrößte Stadt Estlands, ist ein Ort von immenser historischer und strategischer Bedeutung. Unmittelbar an der Grenze zu Russland gelegen und nur durch den gleichnamigen Fluss von der russischen Stadt Iwangorod getrennt, bildet sie eine einzigartige Doppelstadt-Kulisse. Das Stadtbild wird von der mächtigen Hermannsfeste dominiert, die direkt gegenüber der Festung Iwangorod liegt – ein beeindruckendes Symbol jahrhundertelanger Konfrontation und Koexistenz. Narva ist die Stadt mit dem höchsten Anteil an russischsprachiger Bevölkerung in der EU, was ihr einen besonderen kulturellen Charakter verleiht. Obwohl im Zweiten Weltkrieg stark zerstört, bewahrt die Stadt wichtige historische Zeugnisse wie die Kreenholm-Manufaktur, einst eine der größten Textilfabriken Europas. Narva ist ein faszinierender Ort, um die komplexe Geschichte des Baltikums und die Dynamik einer Grenzstadt hautnah zu erleben.",
      hu: "",
      ro: "Narva, al treilea oraș ca mărime din Estonia, este un loc de o imensă importanță istorică și strategică. Situat direct la granița cu Rusia și separat de orașul rus Ivangorod doar de râul omonim, formează un peisaj unic de oraș-dublu. Peisajul urban este dominat de puternica Cetate Hermann, aflată vizavi de cetatea Ivangorod – un simbol impresionant al secolelor de confruntare și coexistență. Narva este orașul cu cea mai mare proporție de populație vorbitoare de limbă rusă din UE, ceea ce îi conferă un caracter cultural deosebit. Deși a fost grav distrus în Al Doilea Război Mondial, orașul păstrează mărturii istorice importante, precum Manufactura Kreenholm, odinioară una dintre cele mai mari fabrici de textile din Europa.",
      en: "Narva, Estonia's third-largest city, is a place of immense historical and strategic importance. Situated directly on the border with Russia, separated only by the Narva River from the Russian town of Ivangorod, it creates a unique twin-city landscape. The cityscape is dominated by the powerful Hermann Castle, which stands directly opposite the Ivangorod Fortress—an impressive symbol of centuries of confrontation and coexistence. Narva has the highest proportion of Russian-speaking inhabitants in the EU, giving it a distinctive cultural character. Although heavily destroyed in World War II, the city preserves important historical testimonies such as the Kreenholm Manufacturing Company, once one of the largest textile factories in Europe. Narva is a fascinating place to experience the complex history of the Baltics and the dynamics of a border city up close."
    },
    facts: {
      de: ["Hermannsburg", "Grenzstadt zu Russland"],
      hu: ["Hermann-vár", "Határváros Oroszországgal"],
      ro: ["Castelul Hermann", "Oraș de graniță cu Rusia"],
      en: ["Hermann Castle", "Border city with Russia"]
    },
    factsAdvanced: {
      de: [
        "Über 95% der Bevölkerung sind russischsprachig.",
        "Die Hermannsfeste und die Festung Iwangorod sind nur einen Steinwurf voneinander entfernt.",
        "Die Kreenholm-Manufaktur war im 19. Jahrhundert größer als die meisten Textilfabriken in England.",
        "Narva war Schauplatz einer entscheidenden Schlacht im Großen Nordischen Krieg 1700.",
        "Die Stadt hat eine Uferpromenade, die einen direkten Blick auf Russland bietet.",
        "Das Narvaer Museum befindet sich in der Hermannsfeste.",
        "Jährlich findet das Festival 'Station Narva' statt, das Musik und Kunst verbindet.",
        "Die Alexander-Newski-Kathedrale ist ein weiteres wichtiges orthodoxes Wahrzeichen."
      ],
      hu: [],
      ro: [
        "Peste 95% din populație este vorbitoare de limbă rusă.",
        "Cetatea Hermann și cetatea Ivangorod sunt la o aruncătură de băț una de cealaltă.",
        "Manufactura Kreenholm a fost în secolul al XIX-lea mai mare decât majoritatea fabricilor de textile din Anglia.",
        "Narva a fost scena unei bătălii decisive în Marele Război al Nordului din 1700.",
        "Orașul are o promenadă pe malul râului care oferă o vedere directă spre Rusia.",
        "Muzeul Narva este situat în Cetatea Hermann.",
        "Anual are loc festivalul 'Station Narva', care îmbină muzica și arta.",
        "Catedrala Alexander Nevsky este un alt important reper ortodox."
      ],
      en: [
        "Over 95% of the population is Russian-speaking.",
        "Hermann Castle and Ivangorod Fortress are just a stone's throw from each other.",
        "In the 19th century, the Kreenholm Manufacturing Company was larger than most textile mills in England.",
        "Narva was the site of a decisive battle in the Great Northern War in 1700.",
        "The city has a riverside promenade offering a direct view of Russia.",
        "The Narva Museum is located within Hermann Castle.",
        "The annual 'Station Narva' festival combines music and art.",
        "The Alexander Nevsky Cathedral is another important Orthodox landmark."
      ]
    },
    image: "/images/visualLab/estonia/narva.jpg"
  },
  {
    id: "ee-haapsalu",
    type: "city",
    parent: "ee-country",
    coords: [23.5333, 58.9333],
    name: {
      de: "Haapsalu",
      hu: "Haapsalu",
      ro: "Haapsalu",
      en: "Haapsalu"
    },
    description: {
      de: "Eine historische Kurstadt an der Westküste, bekannt für ihre Bischofsburg und die hölzerne Promenade.",
      hu: "Történelmi fürdőváros a nyugati parton, amely püspöki váráról és fa sétányáról ismert.",
      ro: "Un oraș balnear istoric pe coasta de vest, cunoscut pentru castelul său episcopal și promenada din lemn.",
      en: "A historic spa town on the west coast, known for its episcopal castle and wooden promenade."
    },
    descriptionAdvanced: {
      de: "Haapsalu, oft als das 'Venedig des Nordens' bezeichnet, ist eine charmante Kurstadt an der Westküste Estlands. Berühmt wurde sie im 19. Jahrhundert durch ihren heilsamen Meeresschlamm, der den russischen Adel und sogar die Zarenfamilie anlockte. Das architektonische Erbe dieser Zeit prägt die Stadt bis heute mit eleganten Holzvillen und der malerischen Promenade. Das Herzstück der Stadt ist die mittelalterliche Bischofsburg, in deren Domkirche die Legende der 'Weißen Dame' lebendig ist, die in Vollmondnächten im Fenster erscheinen soll. Der hölzerne Kursaal und der alte Bahnhof, dessen Bahnsteig einst komplett überdacht war, sind weitere einzigartige Sehenswürdigkeiten. Haapsalu verströmt eine ruhige, fast nostalgische Atmosphäre und ist ein ideales Ziel für alle, die Entspannung, Kultur und die sanfte Schönheit der estnischen Küste suchen.",
      hu: "",
      ro: "Haapsalu, adesea numit 'Veneția Nordului', este un fermecător oraș balnear pe coasta de vest a Estoniei. A devenit faimos în secolul al XIX-lea pentru nămolul său marin vindecător, care atrăgea nobilimea rusă și chiar familia țarului. Moștenirea arhitecturală din acea perioadă, cu vile elegante din lemn și o promenadă pitorească, definește orașul și astăzi. Inima orașului este Castelul Episcopal medieval, în a cărui catedrală trăiește legenda 'Doamnei Albe', care se spune că apare la fereastră în nopțile cu lună plină. Kursaal-ul din lemn și vechea gară, cu peronul său odinioară complet acoperit, sunt alte atracții unice. Haapsalu emană o atmosferă liniștită, aproape nostalgică.",
      en: "Haapsalu, often called the 'Venice of the North,' is a charming spa town on Estonia's west coast. It became famous in the 19th century for its curative sea mud, which attracted Russian nobility and even the Tsar's family. The architectural heritage of that era, with elegant wooden villas and a picturesque promenade, defines the town to this day. The heart of the town is the medieval Episcopal Castle, in whose cathedral the legend of the 'White Lady' lives on, said to appear in the window on full-moon nights. The wooden Kuursaal and the old railway station, with its once fully covered platform, are other unique sights. Haapsalu exudes a quiet, almost nostalgic atmosphere."
    },
    facts: {
      de: ["Bischofsburg Haapsalu", "Tschaikowski-Bank"],
      hu: ["Haapsalu püspöki vár", "Csajkovszkij-pad"],
      ro: ["Castelul episcopal Haapsalu", "Banca Ceaikovski"],
      en: ["Haapsalu Episcopal Castle", "Tchaikovsky's Bench"]
    },
    factsAdvanced: {
      de: [
        "Der Bahnhof von Haapsalu hat den längsten überdachten Bahnsteig Europas (216 Meter).",
        "Die Legende der 'Weißen Dame' ist das bekannteste estnische Geistermärchen.",
        "Der Komponist Pjotr Tschaikowski verbrachte hier einen Sommer und ihm ist eine Bank gewidmet.",
        "Die Stadt ist ein anerkanntes Zentrum für die Herstellung von Haapsalu-Schals, einer feinen Spitzenstrickerei.",
        "Die Bucht von Haapsalu ist sehr flach, was das Wasser im Sommer schnell erwärmt.",
        "Das Ilon's Wonderland ist ein Kindermuseum, das der Illustratorin Ilon Wikland gewidmet ist.",
        "Jährlich findet hier das 'American Beauty Car Show', ein großes US-Car-Treffen, statt.",
        "Die Stadt ist von einem Netz aus kleinen Inseln und Schilfgürteln umgeben."
      ],
      hu: [],
      ro: [
        "Gara din Haapsalu are cel mai lung peron acoperit din Europa (216 metri).",
        "Legenda 'Doamnei Albe' este cea mai cunoscută poveste cu fantome din Estonia.",
        "Compozitorul Piotr Ceaikovski a petrecut o vară aici și o bancă îi este dedicată.",
        "Orașul este un centru recunoscut pentru producția de șaluri Haapsalu, o dantelărie fină.",
        "Golful Haapsalu este foarte puțin adânc, ceea ce face ca apa să se încălzească rapid vara.",
        "Ilon's Wonderland este un muzeu pentru copii dedicat ilustratoarei Ilon Wikland.",
        "Anual, aici are loc 'American Beauty Car Show', o mare întâlnire de mașini americane.",
        "Orașul este înconjurat de o rețea de insulițe și stufărișuri."
      ],
      en: [
        "Haapsalu railway station has the longest covered platform in Europe (216 meters).",
        "The legend of the 'White Lady' is Estonia's most famous ghost story.",
        "Composer Pyotr Tchaikovsky spent a summer here and has a bench dedicated to him.",
        "The town is a recognized center for making Haapsalu shawls, a fine lace knitting.",
        "Haapsalu Bay is very shallow, causing the water to warm up quickly in summer.",
        "Ilon's Wonderland is a children's museum dedicated to illustrator Ilon Wikland.",
        "The annual 'American Beauty Car Show', a large US car meet, is held here.",
        "The town is surrounded by a network of small islets and reed beds."
      ]
    },
    image: "/images/visualLab/estonia/haapsalu.jpg"
  }
];

export const estoniaCountry = estoniaAllPoiBase[0] as POI;
export const estoniaRegions: POI[] = estoniaAllPoiBase.slice(1);

export const estoniaCities: POI[] = [
  {
    id: "city-tapa",
    type: "city",
    parent: "ee-country",
    coords: [25.9583, 59.2606],
    name: { de: "Tapa", hu: "Tapa", ro: "Tapa", en: "Tapa" },
    description: {
      de: "Tapa ist eine Eisenbahnstadt in Lääne-Viru und ein wichtiger Verkehrsknotenpunkt im Nordosten Estlands. Die Stadt liegt an der Verbindung zwischen Tallinn, Narva und Tartu und ist deshalb seit jeher strategisch bedeutsam. Neben dem Bahnerbe prägen Kasernen, Wohnviertel und ein ruhiger Kleinstadtcharakter das Bild. Für Reisende ist Tapa ein praktischer Ausgangspunkt für Ausflüge in Richtung Lahemaa und Rakvere.",
      hu: "Tapa Lääne-Viru megye vasútvárosa és Északkelet-Észtország fontos közlekedési csomópontja. A város Tallinn, Narva és Tartu kapcsolata miatt mindig is stratégiai jelentőségű volt. A vasúti örökség mellett laktanyák, lakónegyedek és nyugodt kisvárosi hangulat jellemzi. Az utazók számára Tapa jó kiindulópont Lahemaa és Rakvere felé.",
      ro: "Tapa este un oraș feroviar din Lääne-Viru și un nod de transport important în nord-estul Estoniei. Orașul a avut mereu o valoare strategică datorită legăturilor sale cu Tallinn, Narva și Tartu. Moștenirea feroviară, cazărmi și cartiere liniștite definesc atmosfera locală. Pentru vizitatori, Tapa este o bază practică pentru excursii spre Lahemaa și Rakvere.",
      en: "Tapa is a rail town in Lääne-Viru and an important transport hub in northeastern Estonia. The town has long held strategic value because of its links between Tallinn, Narva, and Tartu. Railway heritage, military facilities, and a calm small-town atmosphere shape the local identity. For visitors, Tapa is a practical base for trips toward Lahemaa and Rakvere."
    },
    descriptionAdvanced: {
      de: "Tapa ist ein strategischer Eisenbahnknotenpunkt in Nordestland, dessen Entwicklung eng mit dem Ausbau des Schienennetzes im 19. Jahrhundert verbunden ist. Die Stadt dient als wichtiger Verteiler für Verbindungen nach Tallinn, Tartu und Narva. Neben seiner Bedeutung für den Verkehr beherbergt Tapa auch einen wichtigen Stützpunkt der estnischen Streitkräfte und der NATO. Die Atmosphäre ist von einer Mischung aus Kleinstadtleben und der Präsenz von Militär und Eisenbahn geprägt. Für Reisende bietet sich Tapa als praktischer Ausgangspunkt zur Erkundung des Lahemaa-Nationalparks und der historischen Stadt Rakvere an.",
      hu: "",
      ro: "Tapa este un nod feroviar strategic în nordul Estoniei, a cărui dezvoltare este strâns legată de extinderea rețelei de căi ferate în secolul al XIX-lea. Orașul servește ca un important centru de distribuție pentru legăturile către Tallinn, Tartu și Narva. Pe lângă importanța sa pentru transport, Tapa găzduiește și o importantă bază a forțelor armate estoniene și a NATO. Atmosfera este caracterizată de un amestec de viață de oraș mic și prezența militară și feroviară. Pentru călători, Tapa este un punct de plecare practic pentru a explora Parcul Național Lahemaa și orașul istoric Rakvere.",
      en: "Tapa is a strategic railway hub in northern Estonia, its development closely linked to the expansion of the rail network in the 19th century. The town serves as an important distribution point for connections to Tallinn, Tartu, and Narva. Besides its importance for transport, Tapa also hosts a major base for the Estonian Defence Forces and NATO. The atmosphere is a mix of small-town life and the presence of the military and railway. For travelers, Tapa is a practical starting point for exploring Lahemaa National Park and the historic city of Rakvere."
    },
    facts: {
      de: ["Wichtiger Eisenbahnknoten in Nordost-Estland", "Liegt an der Route Tallinn-Narva", "Teil von Lääne-Viru", "Bekannt für Militär- und Bahntradition", "Praktischer Zwischenstopp für Reisende"],
      hu: ["Fontos vasúti csomópont Északkelet-Észtországban", "A Tallinn-Narva útvonalon fekszik", "Lääne-Viru megyéhez tartozik", "Vasúti és katonai örökségéről ismert", "Jó megálló az utazóknak"],
      ro: ["Nod feroviar important în nord-estul Estoniei", "Situat pe ruta Tallinn-Narva", "Ține de județul Lääne-Viru", "Cunoscut pentru tradiția militară și feroviară", "O oprire practică pentru călători"],
      en: ["Important rail hub in northeastern Estonia", "Located on the Tallinn-Narva route", "Part of Lääne-Viru County", "Known for railway and military heritage", "A useful stop for travelers"]
    },
    factsAdvanced: {
      de: [
        "Der Name 'Tapa' wurde erstmals 1482 urkundlich erwähnt.",
        "Die Entwicklung zur Stadt begann 1870 mit dem Bau der Eisenbahnlinie.",
        "Tapa ist Heimat der 1. Infanteriebrigade der estnischen Verteidigungskräfte.",
        "Die Stadt ist ein wichtiger NATO-Stützpunkt im Baltikum.",
        "Das Stadtbild ist durch Eisenbahnanlagen und Militärgebäude geprägt.",
        "Jährlich findet in Tapa ein Wurstfestival statt.",
        "Tapa ist ein wichtiger Umsteigebahnhof für den Personen- und Güterverkehr.",
        "Das Stadtmuseum dokumentiert die Geschichte der Eisenbahn und des Militärs."
      ],
      hu: [],
      ro: [
        "Numele 'Tapa' a fost menționat pentru prima dată în documente în 1482.",
        "Dezvoltarea ca oraș a început în 1870 cu construcția liniei de cale ferată.",
        "Tapa găzduiește Brigada 1 Infanterie a Forțelor de Apărare Estoniene.",
        "Orașul este o importantă bază NATO în Baltica.",
        "Peisajul urban este marcat de instalații feroviare și clădiri militare.",
        "Anual, în Tapa are loc un festival al cârnaților.",
        "Tapa este o importantă stație de transfer pentru traficul de pasageri și marfă.",
        "Muzeul orașului documentează istoria căilor ferate și a armatei."
      ],
      en: [
        "The name 'Tapa' was first mentioned in records in 1482.",
        "The development into a town began in 1870 with the construction of the railway line.",
        "Tapa is home to the 1st Infantry Brigade of the Estonian Defence Forces.",
        "The town is an important NATO base in the Baltics.",
        "The townscape is characterized by railway facilities and military buildings.",
        "A sausage festival is held annually in Tapa.",
        "Tapa is a major transfer station for passenger and freight traffic.",
        "The town museum documents the history of the railway and the military."
      ]
    },
    image: "/geo-images/estonia/tapa.webp"
  },
  {
    id: "city-viljandi",
    type: "city",
    parent: "ee-country",
    coords: [25.5906, 58.3639],
    name: { de: "Viljandi", hu: "Viljandi", ro: "Viljandi", en: "Viljandi" },
    description: {
      de: "Viljandi ist eine Kulturstadt in Südestland mit Hügelblick, Seenlage und einer starken Musikszene. Die Altstadt wirkt kompakt und historisch, während das berühmte Schlossgelände über dem See an die mittelalterliche Vergangenheit erinnert. Jedes Jahr zieht das Volksmusikfestival Besucher aus ganz Estland an und stärkt das Profil der Stadt. Wer authentisches, ruhiges Estland mit viel Charakter sucht, findet in Viljandi ein starkes Reiseziel.",
      hu: "Viljandi Dél-Észtország kulturális városa, dombos fekvéssel, tóparttal és erős zenei élettel. A belváros kompakt és történelmi, míg a híres várrom a tó fölött a középkori múltat idézi. Az évente megrendezett népzenei fesztivál az ország minden részéről vonzza a látogatókat. Aki karakteres, nyugodt és hiteles Észtországot keres, Viljandiban megtalálja.",
      ro: "Viljandi este un oraș cultural din sudul Estoniei, cu dealuri, lac și o scenă muzicală puternică. Centrul vechi este compact și istoric, iar ruinele castelului de pe malul lacului amintesc de trecutul medieval. Festivalul anual de muzică populară atrage vizitatori din toată Estonia. Pentru cei care caută o Estonie autentică și liniștită, Viljandi este o destinație excelentă.",
      en: "Viljandi is a cultural city in southern Estonia with hills, a lakeside setting, and a strong music scene. Its old town feels compact and historic, while the famous castle site above the lake recalls the medieval past. The annual folk music festival draws visitors from across Estonia and raises the city's profile. For travelers seeking authentic and quiet Estonia with character, Viljandi is a strong destination."
    },
    descriptionAdvanced: {
      de: "Viljandi, das kulturelle Herz Südestlands, ist bekannt für sein jährliches Volksmusikfestival, das Künstler und Besucher aus aller Welt anzieht. Die Stadt thront malerisch über einem See und wird von den Ruinen einer mächtigen Ordensburg dominiert. Die charmante Altstadt mit ihren Holzhäusern und engen Gassen verleiht Viljandi eine einzigartige, fast zeitlose Atmosphäre. Neben der Musik ist die Stadt auch ein Zentrum für traditionelles Handwerk und alternative Kultur, was sich in zahlreichen kleinen Galerien und Werkstätten zeigt.",
      hu: "",
      ro: "Viljandi, inima culturală a sudului Estoniei, este cunoscut pentru festivalul său anual de muzică populară, care atrage artiști și vizitatori din întreaga lume. Orașul este situat pitoresc deasupra unui lac și este dominat de ruinele unui puternic castel teuton. Centrul vechi fermecător, cu casele sale din lemn și străduțele înguste, conferă Viljandi o atmosferă unică, aproape atemporală. Pe lângă muzică, orașul este și un centru pentru meșteșugurile tradiționale și cultura alternativă, reflectate în numeroase galerii mici și ateliere.",
      en: "Viljandi, the cultural heart of southern Estonia, is known for its annual folk music festival, which attracts artists and visitors from all over the world. The city is picturesquely situated above a lake and is dominated by the ruins of a mighty Teutonic Order castle. The charming old town with its wooden houses and narrow streets gives Viljandi a unique, almost timeless atmosphere. In addition to music, the city is also a center for traditional crafts and alternative culture, which is reflected in numerous small galleries and workshops."
    },
    facts: {
      de: ["Südestnische Kulturstadt", "Berühmt für das Viljandi-Folkfestival", "Lage am Viljandi-See", "Mittelalterliche Burganlage über der Stadt", "Beliebtes Ziel für Architektur- und Musikfans"],
      hu: ["Dél-észt kulturális város", "Híres a Viljandi népzenei fesztiválról", "A Viljandi-tó partján fekszik", "Középkori várhelyszín a város fölött", "Népszerű az építészet és a zene kedvelői körében"],
      ro: ["Oraș cultural din sudul Estoniei", "Faima festivalului de muzică populară Viljandi", "Situat pe malul lacului Viljandi", "Ruine medievale de castel deasupra orașului", "Popular printre iubitorii de arhitectură și muzică"],
      en: ["Southern Estonian cultural city", "Known for the Viljandi Folk Music Festival", "Located beside Lake Viljandi", "Medieval castle site above the town", "Popular with architecture and music lovers"]
    },
    factsAdvanced: {
      de: [
        "Das Viljandi Folk Music Festival ist eines der größten seiner Art in Europa.",
        "Die Ruinen der Viljandi-Ordensburg stammen aus dem 13. Jahrhundert.",
        "Die Stadt liegt am Ufer des Viljandi-Sees, der im Sommer zum Baden einlädt.",
        "Das Ugala-Theater ist eines der modernsten und renommiertesten Theater Estlands.",
        "Viljandi beherbergt die Kulturakademie der Universität Tartu.",
        "Die Hängebrücke über den Schlosspark ist ein beliebtes Fotomotiv.",
        "Das Kondas-Zentrum ist ein Museum für naive Kunst.",
        "Die Stadt hat eine aktive Gemeinschaft von Handwerkern und Künstlern."
      ],
      hu: [],
      ro: [
        "Festivalul de Muzică Populară din Viljandi este unul dintre cele mai mari de acest gen din Europa.",
        "Ruinele Castelului Ordinului din Viljandi datează din secolul al XIII-lea.",
        "Orașul este situat pe malul lacului Viljandi, care invită la scăldat vara.",
        "Teatrul Ugala este unul dintre cele mai moderne și renumite teatre din Estonia.",
        "Viljandi găzduiește Academia de Cultură a Universității din Tartu.",
        "Podul suspendat peste parcul castelului este un motiv fotografic popular.",
        "Centrul Kondas este un muzeu de artă naivă.",
        "Orașul are o comunitate activă de meșteșugari și artiști."
      ],
      en: [
        "The Viljandi Folk Music Festival is one of the largest of its kind in Europe.",
        "The ruins of the Viljandi Order Castle date back to the 13th century.",
        "The city is located on the shore of Lake Viljandi, which is great for swimming in summer.",
        "The Ugala Theatre is one of the most modern and renowned theaters in Estonia.",
        "Viljandi is home to the University of Tartu's Viljandi Culture Academy.",
        "The suspension bridge over the castle park is a popular photo spot.",
        "The Kondas Centre is a museum of naive art.",
        "The city has an active community of artisans and artists."
      ]
    },
    image: "/geo-images/estonia/viljandi.webp"
  },
  {
    id: "city-paide",
    type: "city",
    parent: "ee-country",
    coords: [25.5560, 58.8856],
    name: { de: "Paide", hu: "Paide", ro: "Paide", en: "Paide" },
    description: {
      de: "Paide liegt im Herzen Estlands und wird oft als Mittelpunkt des Landes beschrieben. Die Stadt ist für den Wasserturm, die ruhige Innenstadt und die historische Burganlage bekannt. Paide verbindet Kleinstadtkomfort mit einer klaren regionalen Rolle in Järva County. Durch die zentrale Lage eignet sich die Stadt gut für Rundreisen durch das mittelestnische Hügelland.",
      hu: "Paide Észtország szívében fekszik, ezért gyakran az ország közepének nevezik. A város a víztoronyáról, a csendes belvárosáról és a történelmi várromról ismert. Paide kisvárosi kényelmet és erős regionális szerepet egyesít Järva megyében. Központi fekvése miatt jó kiindulópont a közép-észt dombvidék bejárásához.",
      ro: "Paide se află chiar în inima Estoniei și este adesea descris ca centrul țării. Orașul este cunoscut pentru turnul de apă, centrul liniștit și situl istoric al castelului. Paide combină confortul unui oraș mic cu un rol regional clar în județul Järva. Datorită poziției centrale, este o bază bună pentru explorarea dealurilor din centrul Estoniei.",
      en: "Paide sits in the heart of Estonia and is often described as the country's center point. The town is known for its water tower, quiet downtown, and historic castle site. Paide combines small-town comfort with a clear regional role in Järva County. Its central location makes it a useful base for exploring central Estonia's rolling landscapes."
    },
    descriptionAdvanced: {
      de: "Paide, das geografische Herz Estlands, ist die Hauptstadt des Landkreises Järva. Die Stadt ist geprägt von einer ruhigen Atmosphäre, dem zentralen Vallimägi-Hügel mit den Ruinen der Ordensburg und dem markanten Wasserturm. Als wichtiger Verkehrsknotenpunkt in Zentralestland ist Paide ein praktischer Ausgangspunkt für die Erkundung der umliegenden ländlichen Region. Das alljährliche Meinungsfestival 'Arvamusfestival' verwandelt die Stadt in ein lebhaftes Zentrum des öffentlichen Diskurses.",
      hu: "",
      ro: "Paide, inima geografică a Estoniei, este capitala județului Järva. Orașul este caracterizat de o atmosferă liniștită, dealul central Vallimägi cu ruinele castelului teuton și turnul de apă distinctiv. Ca un important nod de transport în Estonia centrală, Paide este un punct de plecare practic pentru a explora regiunea rurală înconjurătoare. Festivalul anual de opinie 'Arvamusfestival' transformă orașul într-un centru vibrant al discursului public.",
      en: "Paide, the capital of Järva County, is geographically situated in the very heart of Estonia, earning it the nickname 'the heart of Estonia.' This quiet town is characterized by its tranquil atmosphere and the central Vallimägi hill, which features the ruins of a 13th-century Livonian Order castle and a distinctive limestone tower, Vallitorn. As a key transportation hub in central Estonia, Paide offers a practical starting point for exploring the surrounding rural region. The town buzzes with intellectual energy each summer when it hosts the Arvamusfestival (Opinion Festival), a lively event that transforms Paide into a vibrant center for public discourse and debate, attracting speakers and visitors from all over the country."
    },
    facts: {
      de: ["Oft als geografischer Mittelpunkt Estlands beschrieben", "Burganlage von Paide ist ein lokales Wahrzeichen", "Sitz in Järva County", "Bekannt für den Paide-Wasserturm", "Geeignet als Basis für Mittelestland-Reisen"],
      hu: ["Gyakran Észtország földrajzi közepének tartják", "A Paide-vár helye helyi jelkép", "Järva megyében található", "Híres a Paide víztoronyról", "Jó bázis Közép-Észtország felfedezéséhez"],
      ro: ["Adesea descris ca centrul geografic al Estoniei", "Situl castelului Paide este un reper local", "Aflat în județul Järva", "Cunoscut pentru turnul de apă din Paide", "Bază utilă pentru excursii în centrul Estoniei"],
      en: ["Often described as Estonia's geographic center", "Paide castle site is a local landmark", "Located in Järva County", "Known for the Paide water tower", "Useful base for central Estonia trips"]
    },
    factsAdvanced: {
      de: [
        "Der Name 'Paide' leitet sich vom estnischen Wort für Kalkstein ab.",
        "Die Ordensburg Paide wurde im 13. Jahrhundert vom Livländischen Orden erbaut.",
        "Das 'Arvamusfestival' ist das größte Meinungs- und Debattenfestival in Estland.",
        "Der Paide-Wasserturm dient heute als Restaurant und Aussichtsplattform.",
        "Die Stadt liegt am Schnittpunkt wichtiger estnischer Fernstraßen.",
        "Paide ist eine von nur vier Städten in Estland, die offiziell den Titel 'kuningalinn' (Königsstadt) tragen.",
        "Im Stadtzentrum befindet sich eine Skulptur, die den geografischen Mittelpunkt Estlands markiert.",
        "Das Järvamaa-Museum gibt Einblicke in die Geschichte des Landkreises."
      ],
      hu: [],
      ro: [
        "Numele 'Paide' derivă din cuvântul estonian pentru calcar.",
        "Castelul Ordinului din Paide a fost construit în secolul al XIII-lea de Ordinul Livonian.",
        "'Arvamusfestival' este cel mai mare festival de opinie și dezbatere din Estonia.",
        "Turnul de apă din Paide servește astăzi ca restaurant și platformă de observare.",
        "Orașul este situat la intersecția unor importante drumuri naționale estoniene.",
        "Paide este unul dintre cele patru orașe din Estonia care poartă oficial titlul de 'kuningalinn' (oraș regal).",
        "În centrul orașului se află o sculptură care marchează centrul geografic al Estoniei.",
        "Muzeul Järvamaa oferă o perspectivă asupra istoriei județului."
      ],
      en: [
        "The name 'Paide' is derived from the Estonian word for limestone, 'paas', which is abundant in the area.",
        "The Paide Order Castle was built in the 13th century by the Livonian Order.",
        "It hosts the annual Arvamusfestival, Estonia's largest opinion and debate festival.",
        "The Paide Vallitorn (water tower) now serves as a restaurant and observation platform.",
        "Paide is one of only four towns in Estonia to officially hold the title 'kuningalinn' (royal city).",
        "A sculpture in the town center marks the geographical midpoint of mainland Estonia.",
        "The Järvamaa Museum provides insights into the history of the county.",
        "The town is located at the intersection of several major Estonian highways."
      ]
    },
    image: "/geo-images/estonia/paide.webp"
  },
  {
    id: "city-voru",
    type: "city",
    parent: "ee-country",
    coords: [27.0194, 57.8339],
    name: { de: "Võru", hu: "Võru", ro: "Võru", en: "Võru" },
    description: {
      de: "Võru ist eine südestnische Stadt mit starkem regionalem Charakter und einem klaren Bezug zum Haanja-Hügelland. Die Stadt ist für ihre gemütliche Größe, grüne Umgebung und die Nähe zu Seen und Wanderwegen bekannt. Lokale Kultur und der Võru-Dialekt geben dem Ort eine eigenständige Identität. Wer den Süden Estlands versteht, sollte Võru als wichtige Station im Blick haben.",
      hu: "Võru dél-észt város, erős regionális karakterrel és a Haanja-dombvidékhez való szoros kapcsolattal. A város barátságos méretéről, zöld környezetéről és a tavakhoz, túraútvonalakhoz való közelségéről ismert. A helyi kultúra és a võru nyelvjárás külön arculatot ad a településnek. Aki meg akarja érteni Dél-Észtországot, annak Võrut is látni kell.",
      ro: "Võru este un oraș din sudul Estoniei, cu un caracter regional puternic și o legătură clară cu zonele deluroase din Haanja. Orașul este cunoscut pentru dimensiunea sa prietenoasă, mediul verde și apropierea de lacuri și trasee de drumeție. Cultura locală și dialectul võru oferă o identitate aparte. Cine vrea să înțeleagă sudul Estoniei, trebuie să includă Võru pe listă.",
      en: "Võru is a southern Estonian city with a strong regional character and a clear connection to the Haanja uplands. The city is known for its friendly size, green surroundings, and proximity to lakes and hiking trails. Local culture and the Võru dialect give the place a distinct identity. Anyone trying to understand southern Estonia should put Võru on the map."
    },
    descriptionAdvanced: {
      de: "Võru, das Zentrum des gleichnamigen Landkreises, ist eine charmante Stadt im hügeligen Südosten Estlands. Sie liegt am Ufer des Tamula-Sees und ist eng mit der einzigartigen Kultur und dem Dialekt der Võro-Region verbunden. Die Stadt dient als Tor zum Haanja-Hochland, der 'estnischen Schweiz', mit dem höchsten Berg des Baltikums, dem Suur Munamägi. Die entspannte Atmosphäre, die Nähe zur Natur und die starke lokale Identität machen Võru zu einem authentischen Reiseziel abseits der Haupttouristenpfade.",
      hu: "",
      ro: "Võru, centrul județului omonim, este un oraș fermecător în sud-estul deluros al Estoniei. Este situat pe malul lacului Tamula și este strâns legat de cultura și dialectul unic al regiunii Võro. Orașul servește ca poartă de acces către ținutul înalt Haanja, 'Elveția estoniană', cu cel mai înalt munte din Baltica, Suur Munamägi. Atmosfera relaxată, apropierea de natură și identitatea locală puternică fac din Võru o destinație autentică, departe de principalele trasee turistice.",
      en: "Võru, the capital of Võru County, is a charming town nestled in the hilly landscape of southeastern Estonia. It lies on the shores of Lake Tamula and is deeply connected to the unique culture and dialect of the Võro people. The town serves as a gateway to the Haanja Upland, often called 'Estonian Switzerland,' which includes Suur Munamägi, the highest peak in the Baltic states. With its relaxed atmosphere, beautiful lakeside promenade, and strong local identity, Võru offers an authentic travel experience away from the main tourist paths. It's an ideal destination for nature lovers, offering easy access to hiking trails, serene lakes, and the ancient traditions of the region, including the UNESCO-recognized smoke sauna tradition."
    },
    facts: {
      de: ["Verbindung zum Haanja-Hügelland", "Teil von Võru County", "Bekannt für lokale Sprache und Traditionen", "Nähe zu Wander- und Naturgebieten", "Beliebter Stopp im Süden Estlands"],
      hu: ["Kapcsolat a Haanja-dombvidékkel", "Võru megye része", "Helyi nyelvjárásáról és hagyományairól ismert", "Közel túra- és természetvédelmi területekhez", "Népszerű megálló Dél-Észtországban"],
      ro: ["Legătură cu zonele deluroase Haanja", "Parte din județul Võru", "Cunoscut pentru limba și tradițiile locale", "Aproape de trasee de drumeție și natură", "O oprire populară în sudul Estoniei"],
      en: ["Connected to the Haanja uplands", "Part of Võru County", "Known for local language and traditions", "Close to hiking and nature areas", "A popular stop in southern Estonia"]
    },
    factsAdvanced: {
      de: [
        "Hauptstadt des Landkreises Võru.",
        "Das Võro-Institut zur Erhaltung der regionalen Sprache und Kultur hat hier seinen Sitz.",
        "Am Ufer des Tamula-Sees befindet sich eine malerische Promenade.",
        "Das Fr. R. Kreutzwald-Museum ist dem Autor des estnischen Nationalepos 'Kalevipoeg' gewidmet.",
        "Võru ist Austragungsort eines jährlichen Folklorefestivals.",
        "Die Katharinenkirche im Stadtzentrum stammt aus dem 18. Jahrhundert.",
        "Die Region ist bekannt für ihre Rauchsaunen, die zum UNESCO-Kulturerbe gehören.",
        "Die hügelige Landschaft bietet im Winter hervorragende Langlaufmöglichkeiten."
      ],
      hu: [],
      ro: [
        "Capitala județului Võru.",
        "Institutul Võro pentru conservarea limbii și culturii regionale își are sediul aici.",
        "Pe malul lacului Tamula se află o promenadă pitorească.",
        "Muzeul Fr. R. Kreutzwald este dedicat autorului epopeii naționale estoniene 'Kalevipoeg'.",
        "Võru găzduiește un festival folcloric anual.",
        "Biserica Sf. Ecaterina din centrul orașului datează din secolul al XVIII-lea.",
        "Regiunea este cunoscută pentru saunele sale cu fum, care fac parte din patrimoniul cultural UNESCO.",
        "Peisajul deluros oferă condiții excelente pentru schi fond iarna."
      ],
      en: [
        "Võru is the capital of Võru County in southeastern Estonia.",
        "The town is home to the Võro Institute, which is dedicated to preserving and developing the regional Võro language and culture.",
        "A picturesque promenade runs along the shore of Lake Tamula, offering beautiful views and recreational opportunities.",
        "The Dr. Fr. R. Kreutzwald Memorial Museum is dedicated to the author of the Estonian national epic, 'Kalevipoeg', who lived in Võru.",
        "The town hosts an annual folklore festival, celebrating local and international traditions.",
        "St. Catherine's Church, an 18th-century church, is a prominent landmark in the town center.",
        "The region is famous for its smoke saunas, a tradition that is part of UNESCO's Intangible Cultural Heritage of Humanity.",
        "Its location provides excellent access to the Haanja Upland for hiking and, in winter, cross-country skiing."
      ]
    },
    image: "/geo-images/estonia/voru.webp"
  },
  {
    id: "city-rapla",
    type: "city",
    parent: "ee-country",
    coords: [24.7936, 58.9940],
    name: { de: "Rapla", hu: "Rapla", ro: "Rapla", en: "Rapla" },
    description: {
      de: "Rapla ist ein ruhiger Landkreis- und Marktort in Westzentral-Estland. Die Stadt ist ein praktischer Dienstleistungsstandort mit Schulen, Verwaltung und guter Anbindung an Tallinn. Rund um Rapla liegen Felder, Wälder und kleine Ortschaften, die den ländlichen Charakter stärken. Für SEO-Reisen nach Mittelestland ist Rapla ein wichtiger, aber oft unterschätzter Name.",
      hu: "Rapla csendes járási és piaci központ Nyugat-Közép-Észtországban. A város fontos szolgáltatási csomópont iskolákkal, közigazgatással és jó tallinni kapcsolattal. Rapla körül mezők, erdők és kisebb települések erősítik a vidéki jelleget. Közép-észt utazásoknál Rapla fontos, mégis gyakran alulértékelt név.",
      ro: "Rapla este un centru liniștit de județ și târg în centrul-vest al Estoniei. Orașul este un punct de servicii important, cu școli, administrație și legături bune cu Tallinn. În jurul Rapla se află câmpuri, păduri și sate mici care întăresc caracterul rural. Pentru călătoriile de tip SEO în centrul Estoniei, Rapla este un nume important, dar adesea subestimat.",
      en: "Rapla is a quiet county and market town in west-central Estonia. The city serves as a practical service hub with schools, administration, and good links to Tallinn. Fields, forests, and small settlements around Rapla reinforce its rural character. For central Estonia travel, Rapla is an important but often underrated name."
    },
    descriptionAdvanced: {
      de: "Rapla, als Zentrum des gleichnamigen Landkreises, ist ein wichtiger Versorgungs- und Verwaltungspunkt in West-Zentralestland. Die Stadt liegt verkehrsgünstig an der Hauptverbindung zwischen Tallinn und Pärnu, was sie zu einem praktischen Knotenpunkt macht. Ihr Stadtbild ist geprägt von einer Mischung aus sowjetischer Architektur und modernen Zweckbauten. Für die Erkundung des ländlichen Herzens von Estland abseits der großen Touristenmagnete bietet Rapla eine authentische Basis.",
      hu: "",
      ro: "Rapla, ca centru al județului omonim, este un important punct de aprovizionare și administrativ în vestul-central al Estoniei. Orașul este situat convenabil pe legătura principală dintre Tallinn și Pärnu, ceea ce îl face un nod practic. Peisajul său urban este caracterizat de un amestec de arhitectură sovietică și clădiri funcționale moderne. Pentru explorarea inimii rurale a Estoniei, departe de principalele atracții turistice, Rapla oferă o bază autentică.",
      en: "Rapla, the administrative center of Rapla County, serves as an essential service and transport hub in west-central Estonia. Conveniently located on the main transport corridor between Tallinn and Pärnu, it functions as a practical crossroads for travelers. The town’s architecture is a blend of Soviet-era buildings and modern functional structures, reflecting its development over the decades. While not a primary tourist destination, Rapla provides an authentic glimpse into Estonian provincial life. It's an excellent base for exploring the rural heart of the country, with its vast forests, extensive boglands like the Mukri bog, and tranquil countryside, far from the bustling crowds of the larger cities."
    },
    facts: {
      de: ["Verwaltungszentrum von Rapla County", "Gute Bahn- und Straßenverbindungen nach Tallinn", "Ländliche Landschaften rund um die Stadt", "Wichtiger Serviceort für die Region", "Praktischer Stopp zwischen Tallinn und Südwesten"],
      hu: ["Rapla megye közigazgatási központja", "Jó vasúti és közúti kapcsolat Tallinnnal", "Vidéki táj veszi körül", "Fontos szolgáltatási központ a térségben", "Hasznos megálló Tallinn és Délnyugat-Észtország között"],
      ro: ["Centru administrativ al județului Rapla", "Legături bune cu Tallinnul prin cale ferată și șosea", "Peisaje rurale în jurul orașului", "Centru important de servicii pentru regiune", "O oprire utilă între Tallinn și sud-vestul Estoniei"],
      en: ["Administrative center of Rapla County", "Good rail and road links to Tallinn", "Rural landscapes surround the town", "Important service center for the region", "Useful stop between Tallinn and southwest Estonia"]
    },
    factsAdvanced: {
      de: [
        "Hauptstadt des Landkreises Rapla.",
        "Bekannt für seine Doppelturmkirche, eine Seltenheit in Estland.",
        "Ein wichtiger Verkehrsknotenpunkt zwischen den größten Städten des Landes.",
        "Jährlich findet hier das Rapla Kirchenmusikfestival statt.",
        "Der Fluss Vigala fließt durch die Stadt.",
        "Die Umgebung ist reich an Mooren und Wäldern.",
        "Rapla dient als wichtiges Handelszentrum für die umliegenden ländlichen Gemeinden.",
        "Die Stadt hat eine starke Basketball-Tradition."
      ],
      hu: [],
      ro: [
        "Capitala județului Rapla.",
        "Cunoscut pentru biserica sa cu două turnuri, o raritate în Estonia.",
        "Un important nod de transport între cele mai mari orașe ale țării.",
        "Anual, aici are loc Festivalul de Muzică Bisericească din Rapla.",
        "Râul Vigala traversează orașul.",
        "Împrejurimile sunt bogate în mlaștini și păduri.",
        "Rapla servește ca un important centru comercial pentru comunitățile rurale din jur.",
        "Orașul are o tradiție puternică în baschet."
      ],
      en: [
        "Rapla is the capital of Rapla County.",
        "The town is distinguished by its unique double-steepled church, the Church of Mary Magdalene, a rarity in Estonia.",
        "It serves as a key transportation hub, connecting some of the country's largest cities by road and rail.",
        "The annual Rapla Church Music Festival is a significant cultural event, attracting renowned musicians.",
        "The Vigala River flows through the town, providing a scenic natural element.",
        "The surrounding region is rich in bogs and forests, offering ample opportunities for nature exploration.",
        "Rapla acts as a vital commercial center for the surrounding rural communities.",
        "The town has a strong basketball tradition and a well-known local team."
      ]
    },
    image: "/geo-images/estonia/rapla.webp"
  },
  {
    id: "city-kuressaare",
    type: "city",
    parent: "ee-country",
    coords: [22.4897, 58.2522],
    name: { de: "Kuressaare", hu: "Kuressaare", ro: "Kuressaare", en: "Kuressaare" },
    description: {
      de: "Kuressaare ist die Hauptstadt von Saaremaa und einer der wichtigsten Kurorte Estlands. Die Stadt verbindet Kuratmosphäre, Küstenleben und eine starke historische Kulisse mit der berühmten Burg. Im Sommer wächst das Besucheraufkommen deutlich, weil Strand, Altstadt und Wellnessangebote eng zusammenliegen. Für Inselreisen in Westestland ist Kuressaare ein zentrales SEO-Ziel.",
      hu: "Kuressaare Saaremaa fővárosa és Észtország egyik legfontosabb fürdővárosa. A város a fürdőhangulatot, a tengerparti életet és a történelmi környezetet a híres várral ötvözi. Nyáron a látogatottság erősen megnő, mert a strand, az óváros és a wellness-lehetőségek közel vannak egymáshoz. Nyugat-észt szigettúráknál Kuressaare központi SEO-célpont.",
      ro: "Kuressaare este capitala insulei Saaremaa și una dintre cele mai importante stațiuni balneare din Estonia. Orașul combină atmosfera de wellness, viața de coastă și un cadru istoric puternic în jurul faimosului castel. Vara, numărul vizitatorilor crește mult, deoarece plaja, centrul vechi și serviciile spa sunt foarte apropiate. Pentru tururile insulare din vestul Estoniei, Kuressaare este un punct SEO esențial.",
      en: "Kuressaare is the capital of Saaremaa and one of Estonia's most important spa towns. The city combines a resort atmosphere, coastal life, and a strong historic setting centered on the famous castle. Visitor numbers rise sharply in summer because the beach, old town, and wellness services sit close together. For island travel in western Estonia, Kuressaare is a key SEO target."
    },
    descriptionAdvanced: {
      de: "Kuressaare, die Hauptstadt der Insel Saaremaa, ist ein renommierter Kurort, der für seine beeindruckende Bischofsburg und die entspannte Atmosphäre bekannt ist. Die Stadt verbindet historischen Charme mit modernen Spa-Einrichtungen und ist im Sommer ein beliebtes Ziel für Strand- und Kultururlauber. Der kleine Hafen und die charmante Altstadt laden zum Verweilen ein.",
      hu: "",
      ro: "Kuressaare, capitala insulei Saaremaa, este o stațiune balneară renumită, cunoscută pentru impresionantul său Castel Episcopal și atmosfera relaxată. Orașul combină farmecul istoric cu facilități spa moderne și este o destinație populară de vară pentru iubitorii de plajă și cultură. Portul mic și centrul vechi fermecător invită la relaxare.",
      en: "Kuressaare, the capital of Saaremaa island, is a renowned spa town celebrated for its impressive medieval Episcopal Castle and relaxed seaside atmosphere. The town seamlessly blends its rich history with modern spa and wellness facilities, making it a popular summer destination for both beach lovers and culture enthusiasts. Its compact and charming old town, filled with wooden houses, cozy cafes, and small galleries, invites leisurely strolls. The picturesque small boat harbor and the town park surrounding the castle add to its idyllic charm. Kuressaare serves as the perfect gateway to exploring the unique nature, windmills, and traditions of Saaremaa island."
    },
    facts: {
      de: ["Hauptstadt von Saaremaa", "Berühmter Kurort an der Ostsee", "Kuressaare Castle prägt das Stadtbild", "Beliebt für Wellness und Strandurlaub", "Wichtiger Verkehrsknoten für die Insel"],
      hu: ["Saaremaa fővárosa", "Híres balti-tengeri fürdőváros", "A Kuressaare-vár uralja a városképet", "Népszerű wellness- és strandcélpont", "Fontos közlekedési csomópont a szigeten"],
      ro: ["Capitala insulei Saaremaa", "Stațiune balneară renumită la Marea Baltică", "Castelul Kuressaare definește orașul", "Popular pentru wellness și vacanțe la plajă", "Nod important de transport pentru insulă"],
      en: ["Capital of Saaremaa", "Famous Baltic Sea spa town", "Kuressaare Castle shapes the skyline", "Popular for wellness and beach holidays", "Important transport hub on the island"]
    },
    factsAdvanced: {
      de: [
        "Die Bischofsburg ist eine der am besten erhaltenen mittelalterlichen Festungen im Baltikum.",
        "Kuressaare hat eine lange Tradition als Kurort, die bis ins 19. Jahrhundert zurückreicht.",
        "Die Stadt veranstaltet jährlich die Saaremaa-Operntage.",
        "Der Stadtstrand ist ein beliebter Ort für Einheimische und Touristen.",
        "Die Angla-Windmühlen, ein Wahrzeichen Saaremaas, sind von hier aus gut erreichbar.",
        "Die St.-Lorenz-Kirche ist ein markantes Gebäude im Stadtzentrum.",
        "Kuressaare ist die einzige Stadt auf der Insel Saaremaa.",
        "Die Insel ist bekannt für ihr hausgemachtes Bier und Brot."
      ],
      hu: [],
      ro: [
        "Castelul Episcopal este una dintre cele mai bine conservate fortărețe medievale din Baltica.",
        "Kuressaare are o lungă tradiție ca stațiune balneară, datând din secolul al XIX-lea.",
        "Orașul găzduiește anual Zilele Operei de pe Saaremaa.",
        "Plaja orașului este un loc popular pentru localnici și turiști.",
        "Morile de vânt de la Angla, un simbol al Saaremaa, sunt ușor accesibile de aici.",
        "Biserica Sf. Laurențiu este o clădire marcantă în centrul orașului.",
        "Kuressaare este singurul oraș de pe insula Saaremaa.",
        "Insula este cunoscută pentru berea și pâinea sa de casă."
      ],
      en: [
        "The Kuressaare Episcopal Castle is one of the best-preserved medieval fortresses in the Baltic region.",
        "Kuressaare has a long history as a spa and resort town, dating back to the 19th century.",
        "The town hosts the annual Saaremaa Opera Days, a prestigious festival held within the castle courtyard.",
        "The town beach, with its shallow, quickly warming waters, is a favorite spot for families.",
        "The iconic Angla Windmills, a symbol of Saaremaa, are easily accessible from the town.",
        "St. Lawrence's Church, with its distinctive dolomite stone construction, is a key landmark in the town center.",
        "Kuressaare is the only city on Saaremaa, Estonia's largest island.",
        "The island is well-known for its distinctive local products, including homemade beer and dark rye bread."
      ]
    },
    image: "/geo-images/estonia/kuressaare.webp"
  },
  {
    id: "city-kardla",
    type: "city",
    parent: "ee-country",
    coords: [22.7492, 58.9983],
    name: { de: "Kärdla", hu: "Kärdla", ro: "Kärdla", en: "Kärdla" },
    description: {
      de: "Kärdla ist die kleinste Kreisstadt Estlands und das Zentrum von Hiiumaa. Die Stadt ist ruhig, grün und stark von der Inselnatur geprägt. Besucher finden hier einen angenehmen Mix aus kleinen Cafés, Hafenatmosphäre und lokaler Identität. Kärdla ist ein guter Ausgangspunkt für Leuchtturm-, Küsten- und Inselrundreisen.",
      hu: "Kärdla Észtország legkisebb megyei székhelye és Hiiumaa központja. A város nyugodt, zöld és erősen szigetjellegű környezetben fekszik. A látogatók kellemes kávézókat, kikötői hangulatot és erős helyi identitást találnak itt. Kärdla jó kiindulópont világítótornyos, tengerparti és szigettúrákhoz.",
      ro: "Kärdla este cel mai mic oraș-reședință de județ din Estonia și centrul insulei Hiiumaa. Orașul este liniștit, verde și puternic influențat de peisajul insular. Vizitatorii găsesc aici cafenele plăcute, atmosferă de port și identitate locală clară. Kärdla este o bază bună pentru trasee cu faruri, coastă și tururi de insulă.",
      en: "Kärdla is Estonia's smallest county town and the center of Hiiumaa. The city is quiet, green, and strongly shaped by island life. Visitors find pleasant cafes, harbor atmosphere, and a strong local identity here. Kärdla is a good starting point for lighthouse, coast, and island tours."
    },
    descriptionAdvanced: {
      de: "Kärdla, die einzige Stadt auf der Insel Hiiumaa, ist ein ruhiger und grüner Ort, der als das Herz der Insel gilt. Mit seinem kleinen Hafen, den traditionellen Holzhäusern und der entspannten Atmosphäre ist Kärdla der perfekte Ausgangspunkt, um die unberührte Natur, die historischen Leuchttürme und die einsamen Strände von Hiiumaa zu entdecken. Die Stadt selbst bietet eine gute Infrastruktur für Inselbesucher.",
      hu: "",
      ro: "Kärdla, singurul oraș de pe insula Hiiumaa, este un loc liniștit și verde, considerat inima insulei. Cu portul său mic, casele tradiționale din lemn și atmosfera relaxată, Kärdla este punctul de plecare perfect pentru a descoperi natura neatinsă, farurile istorice și plajele izolate din Hiiumaa. Orașul însuși oferă o infrastructură bună pentru vizitatorii insulei.",
      en: "Kärdla, the only town on Hiiumaa island, is a peaceful and verdant place that serves as the island's heart. Characterized by its small harbor, traditional wooden houses, and a relaxed atmosphere, Kärdla is the ideal starting point for discovering Hiiumaa's untouched nature, historic lighthouses, and secluded beaches. Originally a Swedish settlement, the town grew around a cloth factory in the 19th century. Today, it provides a well-equipped base for island visitors, offering all necessary services while maintaining its tranquil, small-town charm. The town is also known for a large artesian well in the central square, providing fresh water to residents and visitors alike."
    },
    facts: {
      de: ["Hauptort von Hiiumaa", "Kleinste Kreisstadt Estlands", "Starker Inselcharakter", "Guter Ausgangspunkt für Leuchtturmrouten", "Ruhige Küstenatmosphäre"],
      hu: ["Hiiumaa központja", "Észtország legkisebb megyeszékhelye", "Erős szigetjelleg", "Jó kiindulópont a világítótornyokhoz", "Nyugodt tengerparti hangulat"],
      ro: ["Centrul insulei Hiiumaa", "Cel mai mic oraș-reședință de județ din Estonia", "Caracter insular puternic", "Bază bună pentru rute cu faruri", "Atmosferă liniștită de coastă"],
      en: ["Center of Hiiumaa", "Estonia's smallest county town", "Strong island character", "Good base for lighthouse routes", "Calm coastal atmosphere"]
    },
    factsAdvanced: {
      de: [
        "Hauptstadt der Insel und des Landkreises Hiiumaa.",
        "Kärdla ist die kleinste Kreisstadt Estlands.",
        "Ein arteser Brunnen im Stadtzentrum ist ein beliebter Treffpunkt.",
        "Das Hiiumaa-Museum gibt Einblicke in die Inselgeschichte.",
        "Der Hafen von Kärdla dient kleinen Booten und Yachten.",
        "Die Stadt wurde durch einen Meteoriteneinschlag vor Millionen von Jahren geprägt.",
        "Im Sommer findet ein beliebtes Kinderfestival statt.",
        "Kärdla ist von zahlreichen Rad- und Wanderwegen umgeben."
      ],
      hu: [],
      ro: [
        "Capitala insulei și a județului Hiiumaa.",
        "Kärdla este cel mai mic oraș reședință de județ din Estonia.",
        "O fântână arteziană din centrul orașului este un loc de întâlnire popular.",
        "Muzeul Hiiumaa oferă perspective asupra istoriei insulei.",
        "Portul din Kärdla deservește bărci mici și iahturi.",
        "Orașul a fost modelat de un impact de meteorit acum milioane de ani.",
        "Vara, aici are loc un popular festival pentru copii.",
        "Kärdla este înconjurat de numeroase trasee de ciclism și drumeții."
      ],
      en: [
        "Kärdla is the capital of Hiiumaa island and Hiiu County.",
        "It holds the title of Estonia's smallest county town.",
        "An artesian well in the town center is a popular meeting spot and source of fresh water.",
        "The Hiiumaa Museum provides comprehensive insights into the island's unique history and culture.",
        "Kärdla's small harbor primarily serves leisure boats and yachts.",
        "The town's location is within a low-rimmed meteorite crater, which is about 455 million years old.",
        "A popular children's festival is held in the town every summer, attracting families from all over.",
        "Kärdla is surrounded by an extensive network of cycling and hiking trails that lead to Hiiumaa's famous lighthouses."
      ]
    },
    image: "/geo-images/estonia/kardla.webp"
  },
  {
    id: "city-johvi",
    type: "city",
    parent: "ee-country",
    coords: [27.4258, 59.3598],
    name: { de: "Jõhvi", hu: "Jõhvi", ro: "Jõhvi", en: "Jõhvi" },
    description: {
      de: "Jõhvi ist das Verwaltungs- und Kulturzentrum von Ida-Viru County. Die Stadt verbindet moderne Infrastruktur mit einer stark industriell geprägten Umgebung. Durch Theater, Konzerthalle und gute Verbindungen nach Narva bleibt Jõhvi ein wichtiges regionales Zentrum. Für Ostestland-Reisen ist die Stadt ein nützlicher und gut erreichbarer Standort.",
      hu: "Jõhvi Ida-Viru megye közigazgatási és kulturális központja. A város a modern infrastruktúrát erősen ipari környezettel ötvözi. Színház, koncertterem és a Narvába vezető jó kapcsolatok miatt Jõhvi fontos regionális központ. Kelet-észt utazások során hasznos és könnyen elérhető állomás.",
      ro: "Jõhvi este centrul administrativ și cultural al județului Ida-Viru. Orașul combină infrastructura modernă cu un mediu puternic industrializat. Datorită teatrului, sălii de concerte și legăturilor bune cu Narva, Jõhvi rămâne un centru regional important. Pentru călătoriile în estul Estoniei, orașul este o oprire utilă și ușor accesibilă.",
      en: "Jõhvi is the administrative and cultural center of Ida-Viru County. The city combines modern infrastructure with a strongly industrial setting. With a theater, concert hall, and good links to Narva, Jõhvi remains an important regional center. For eastern Estonia trips, it is a useful and accessible stop."
    },
    descriptionAdvanced: {
      de: "Jõhvi, das Verwaltungszentrum des Landkreises Ida-Viru, ist ein wichtiger Knotenpunkt im Nordosten Estlands. Die Stadt ist geprägt von ihrer industriellen Umgebung, hat aber auch ein modernes Kulturzentrum mit Theater und Konzerthalle. Ihre strategische Lage zwischen Tallinn, Narva und Tartu macht sie zu einem wichtigen Ort für Handel und Verkehr. Jõhvi bietet einen Einblick in das Leben abseits der touristischen Zentren und ist ein guter Ausgangspunkt, um die Industriegeschichte und die Naturkontraste der Region zu erkunden.",
      hu: "",
      ro: "Jõhvi, centrul administrativ al județului Ida-Viru, este un nod important în nord-estul Estoniei. Orașul este marcat de mediul său industrial, dar are și un centru cultural modern cu teatru și sală de concerte. Poziția sa strategică între Tallinn, Narva și Tartu îl face un loc important pentru comerț și transport. Jõhvi oferă o perspectivă asupra vieții dincolo de centrele turistice și este un bun punct de plecare pentru a explora istoria industrială și contrastele naturale ale regiunii.",
      en: "Jõhvi, the administrative heart of Ida-Viru County, stands as a vital hub in northeastern Estonia. While deeply rooted in its industrial surroundings, particularly the oil shale industry, the city has evolved into a modern cultural center. It boasts a contemporary concert hall and theater that host a variety of performances, enriching the region's cultural landscape. Its strategic location on the main transport routes connecting Tallinn, Narva, and Tartu solidifies its importance for commerce and transit. Jõhvi offers visitors a unique perspective on Estonian life beyond the typical tourist trails, serving as an excellent starting point to explore the area's industrial heritage and the striking natural contrasts of the region, including the nearby Ontika limestone cliff, part of the Baltic Klint."
    },
    facts: {
      de: ["Verwaltungszentrum von Ida-Viru", "Wichtiger Kulturstandort im Osten", "Gute Verbindung nach Narva und Tallinn", "Von Industriegeschichte umgeben", "Geeignet als Basis für Ostestland"],
      hu: ["Ida-Viru közigazgatási központja", "Fontos kulturális helyszín keleten", "Jó kapcsolat Narvával és Tallinnnal", "Ipari történelem veszi körül", "Jó bázis Kelet-Észtországban"],
      ro: ["Centru administrativ al județului Ida-Viru", "Important reper cultural în est", "Legături bune cu Narva și Tallinn", "Înconjurat de istorie industrială", "Bază bună pentru estul Estoniei"],
      en: ["Administrative center of Ida-Viru", "Important cultural site in the east", "Good links to Narva and Tallinn", "Surrounded by industrial history", "A good base for eastern Estonia"]
    },
    factsAdvanced: {
      de: [
        "Hauptstadt des Landkreises Ida-Viru.",
        "Das Jõhvi-Konzertgebäude ist ein modernes Kulturzentrum.",
        "Die St.-Michael-Kirche ist eines der ältesten Gebäude der Stadt.",
        "Der nahegelegene Ontika-Kliff ist Teil des Baltischen Klints, eines UNESCO-Weltnaturerbes.",
        "Die Region ist bekannt für ihre Ölschieferindustrie.",
        "Jõhvi ist ein wichtiger Verkehrsknotenpunkt mit guten Zug- und Busverbindungen.",
        "Das Stadtfest 'Jõhvi Päevad' findet jährlich im Sommer statt.",
        "Das Bergbaumuseum Kohtla-Nõmme ist von hier aus leicht zu erreichen."
      ],
      hu: [],
      ro: [
        "Capitala județului Ida-Viru.",
        "Sala de concerte Jõhvi este un centru cultural modern.",
        "Biserica Sf. Mihail este una dintre cele mai vechi clădiri din oraș.",
        "Faleza Ontika din apropiere face parte din Klintul Baltic, un sit al patrimoniului natural mondial UNESCO.",
        "Regiunea este cunoscută pentru industria șisturilor bituminoase.",
        "Jõhvi este un nod de transport important, cu bune legături de tren și autobuz.",
        "Festivalul orașului 'Jõhvi Päevad' are loc anual, vara.",
        "Muzeul Mineritului din Kohtla-Nõmme este ușor accesibil de aici."
      ],
      en: [
        "It is the capital of Ida-Viru County.",
        "The Jõhvi Concert Hall is a prominent modern cultural venue.",
        "St. Michael's Church is one of the oldest and most significant historical buildings in the city.",
        "The nearby Ontika Cliff is part of the Baltic Klint, a proposed UNESCO World Heritage site.",
        "The surrounding region is the center of Estonia's oil shale industry.",
        "Jõhvi is a major transport node with excellent train and bus connections.",
        "The annual town festival, 'Jõhvi Päevad', is a highlight of the summer.",
        "It provides easy access to the Estonian Mining Museum in Kohtla-Nõmme."
      ]
    },
    image: "/geo-images/estonia/johvi.webp"
  },
  {
    id: "city-polva",
    type: "city",
    parent: "ee-country",
    coords: [27.0552, 58.0599],
    name: { de: "Põlva", hu: "Põlva", ro: "Põlva", en: "Põlva" },
    description: {
      de: "Põlva ist ein freundlicher Ort im Südosten Estlands mit Fokus auf Natur, Schule und regionales Leben. Die Stadt liegt in der Nähe von Hügeln, Seen und Waldgebieten, die den Freizeitwert deutlich erhöhen. Põlva ist ruhig, ordentlich und für Besucher oft angenehm überschaubar. Im SEO-Kontext eignet sich der Ort gut als Suchbegriff für Südestland und Outdoor-Reisen.",
      hu: "Põlva egy barátságos település Délkelet-Észtországban, ahol a természet, az iskolaélet és a regionális mindennapok dominálnak. A város közel van dombokhoz, tavakhoz és erdős területekhez, ami erősen növeli a szabadidős értékét. Põlva csendes, rendezett és a látogatók számára jól átlátható. SEO-szempontból jó kulcsszó Dél-Észtország és az outdoor utazások kereséséhez.",
      ro: "Põlva este un oraș prietenos din sud-estul Estoniei, unde natura, școala și viața regională sunt în prim-plan. Orașul se află aproape de dealuri, lacuri și zone împădurite, ceea ce îi crește valoarea recreativă. Põlva este liniștit, ordonat și ușor de parcurs pentru vizitatori. În context SEO, este un termen util pentru căutări despre sudul Estoniei și călătorii în aer liber.",
      en: "Põlva is a friendly town in southeastern Estonia where nature, schools, and regional everyday life take center stage. The town sits near hills, lakes, and forested areas, which adds strong recreation value. Põlva feels quiet, tidy, and easy to navigate for visitors. In SEO terms, it works well as a keyword for southern Estonia and outdoor travel."
    },
    descriptionAdvanced: {
      de: "Põlva, das Zentrum des gleichnamigen Landkreises, liegt im malerischen Südosten Estlands. Die Stadt ist ein idealer Ausgangspunkt, um die hügelige Landschaft, die klaren Seen und die tiefen Wälder der Region zu erkunden. Põlva ist bekannt für seine ruhige Atmosphäre und seine enge Verbindung zur Natur. Das alljährliche Mundharmonika-Festival zieht Musikliebhaber an, während der nahegelegene Intsikurmu-Wald als Veranstaltungsort für Konzerte und Festivals dient.",
      hu: "",
      ro: "Põlva, centrul județului omonim, este situat în pitorescul sud-est al Estoniei. Orașul este un punct de plecare ideal pentru a explora peisajul deluros, lacurile limpezi și pădurile adânci ale regiunii. Põlva este cunoscut pentru atmosfera sa liniștită și legătura strânsă cu natura. Festivalul anual de muzicuță atrage iubitorii de muzică, în timp ce pădurea Intsikurmu din apropiere servește ca loc de desfășurare pentru concerte și festivaluri.",
      en: "Põlva, the administrative center of Põlva County, is nestled in the picturesque landscape of southeastern Estonia. This tranquil town is an ideal base for exploring the region's rolling hills, clear lakes, and deep forests, making it a haven for nature lovers. Põlva is celebrated for its quiet atmosphere and strong connection to the natural environment. The town comes alive with the sound of music during its annual Harmonica Festival, which attracts enthusiasts from near and far. Additionally, the nearby Intsikurmu Forest serves as a magical venue for a variety of concerts and festivals, embedding culture deep within its natural surroundings. Its excellent infrastructure for hikers and cyclists makes it a prime destination for outdoor activities and for exploring the unique Setomaa region."
    },
    facts: {
      de: ["Südostestnischer Regionalort", "Nahe an Wäldern und Seen", "Wichtiger lokaler Dienstleistungsstandort", "Ruhige, familienfreundliche Atmosphäre", "Praktischer Startpunkt für Naturtouren"],
      hu: ["Délkelet-észt regionális település", "Erdők és tavak közelében", "Fontos helyi szolgáltatási központ", "Nyugodt, családbarát hangulat", "Jó kiindulópont természetjáráshoz"],
      ro: ["Oraș regional din sud-estul Estoniei", "Aproape de păduri și lacuri", "Centru local important de servicii", "Atmosferă liniștită, potrivită familiilor", "Punct de plecare bun pentru tururi în natură"],
      en: ["Regional town in southeastern Estonia", "Close to forests and lakes", "Important local service center", "Quiet, family-friendly atmosphere", "Good starting point for nature tours"]
    },
    factsAdvanced: {
      de: [
        "Hauptstadt des Landkreises Põlva.",
        "Der Fluss Ora mündet in den Põlva-See.",
        "Põlva ist bekannt für sein Mundharmonika-Festival.",
        "Die Marienkirche zu Põlva ist eine der ältesten Kirchen der Region.",
        "Der Intsikurmu-Wald ist ein beliebter Ort für Festivals und Erholung.",
        "Die Stadt ist ein guter Ausgangspunkt für Touren in das Setomaa-Gebiet.",
        "Die Landschaft ist von sanften Hügeln und Tälern geprägt.",
        "Põlva bietet eine gute Infrastruktur für Wanderer und Radfahrer."
      ],
      hu: [],
      ro: [
        "Capitala județului Põlva.",
        "Râul Ora se varsă în lacul Põlva.",
        "Põlva este cunoscut pentru festivalul său de muzicuță.",
        "Biserica Sf. Maria din Põlva este una dintre cele mai vechi biserici din regiune.",
        "Pădurea Intsikurmu este un loc popular pentru festivaluri și recreere.",
        "Orașul este un bun punct de plecare pentru tururi în zona Setomaa.",
        "Peisajul este caracterizat de dealuri line și văi.",
        "Põlva oferă o infrastructură bună pentru drumeți și cicliști."
      ],
      en: [
        "It is the capital of Põlva County.",
        "The Ora River flows into Lake Põlva, adding to the town's scenery.",
        "Põlva is famous for its unique annual Harmonica Festival.",
        "St. Mary's Church in Põlva is one of the oldest and most significant churches in the region.",
        "The Intsikurmu Forest is a cherished venue for outdoor festivals and recreation.",
        "The town is an excellent starting point for excursions into the culturally rich Setomaa area.",
        "The surrounding landscape is characterized by gentle hills, valleys, and pristine lakes.",
        "Põlva offers well-developed infrastructure for outdoor enthusiasts, including hikers and cyclists."
      ]
    },
    image: "/geo-images/estonia/polva.webp"
  },
  {
    id: "city-valga",
    type: "city",
    parent: "ee-country",
    coords: [26.0410, 57.7778],
    name: { de: "Valga", hu: "Valga", ro: "Valga", en: "Valga" },
    description: {
      de: "Valga liegt an der Grenze zu Lettland und ist ein klassischer Grenz- und Bahnort. Die Stadt bildet zusammen mit Valka eine seltene grenzüberschreitende Doppelstadt. Dadurch besitzt Valga eine besondere Rolle im baltischen Verkehrs- und Alltagsraum. Für Suchanfragen zu Grenzstädten in Estland ist Valga ein sehr starkes Ziel.",
      hu: "Valga Lettország határán fekszik, és klasszikus határváros és vasúti település. A város Valkával együtt ritka, határokon átívelő ikervárost alkot. Emiatt Valga különleges szerepet tölt be a balti közlekedési és mindennapi térben. Az észt határvárosokra vonatkozó keresésekben Valga nagyon erős célpont.",
      ro: "Valga se află la granița cu Letonia și este un oraș clasic de frontieră și cale ferată. Împreună cu Valka, formează un rar oraș dublu transfrontalier. Din acest motiv, Valga are un rol special în spațiul baltic de transport și viață cotidiană. Pentru căutările despre orașe de frontieră din Estonia, Valga este un obiectiv foarte bun.",
      en: "Valga lies on the Latvian border and is a classic border and rail town. Together with Valka, it forms a rare cross-border twin city. This gives Valga a special role in the Baltic transport and everyday landscape. For searches about Estonian border towns, Valga is a strong target."
    },
    descriptionAdvanced: {
      de: "Valga, an der südlichen Grenze Estlands gelegen, bildet zusammen mit der lettischen Stadt Valka eine einzigartige Doppelstadt. Diese Grenzlage prägt den Charakter und die Geschichte der Stadt. Valga ist ein wichtiger Verkehrsknotenpunkt und Handelsort in Südestland. Das Stadtbild zeugt von der Bedeutung als Eisenbahnstadt im 19. und 20. Jahrhundert. Ein Spaziergang durch Valga-Valka ermöglicht es, buchstäblich mit einem Fuß in zwei Ländern zu stehen.",
      hu: "",
      ro: "Valga, situat la granița de sud a Estoniei, formează un oraș-dublu unic împreună cu orașul leton Valka. Această poziție de frontieră definește caracterul și istoria orașului. Valga este un important nod de transport și un centru comercial în sudul Estoniei. Peisajul urban reflectă importanța sa ca oraș feroviar în secolele XIX și XX. O plimbare prin Valga-Valka permite, la propriu, să stai cu un picior în fiecare țară.",
      en: "Valga, situated on Estonia's southern border, forms a unique twin city with Valka in Latvia, embodying the slogan 'One City, Two Countries.' This special geographical and political situation shapes its character, history, and daily life. As a significant transport hub and commercial center in southern Estonia, Valga's cityscape reflects its historical importance as a railway town in the 19th and 20th centuries. A walk through Valga-Valka offers the rare experience of crossing an international border seamlessly within a single urban area, allowing you to literally stand with one foot in each country. The Pedeli River, with its recreational areas, meanders through both sides of the city, further unifying this fascinating cross-border community."
    },
    facts: {
      de: ["Grenzstadt zu Lettland", "Bildet mit Valka eine Doppelstadt", "Wichtiger Bahnstandort", "Südlicher Verkehrsknoten Estlands", "Interessant für grenzüberschreitenden Tourismus"],
      hu: ["Lett határváros", "Valkával ikervárost alkot", "Fontos vasúti helyszín", "Észtország déli közlekedési csomópontja", "Érdekes a határon átnyúló turizmushoz"],
      ro: ["Oraș de frontieră cu Letonia", "Formează un oraș dublu cu Valka", "Nod important feroviar", "Punct de transport sudic al Estoniei", "Interesant pentru turismul transfrontalier"],
      en: ["Border city with Latvia", "Forms a twin city with Valka", "Important rail location", "Southern transport hub of Estonia", "Interesting for cross-border tourism"]
    },
    factsAdvanced: {
      de: [
        "Bildet eine Doppelstadt mit Valka in Lettland.",
        "Wichtiger Eisenbahn- und Straßenknotenpunkt in Südestland.",
        "Hauptstadt des Landkreises Valga.",
        "Das Valga-Militärgeschichtsmuseum gibt Einblicke in die Verteidigungsgeschichte.",
        "Die Stadt war historisch ein wichtiger Handelsplatz.",
        "Der Fluss Pedeli fließt durch die Stadt und dient als Erholungsgebiet.",
        "Valga und Valka teilen einige grenzüberschreitende Dienstleistungen.",
        "Die St.-Johannes-Kirche ist ein architektonisches Wahrzeichen der Stadt."
      ],
      hu: [],
      ro: [
        "Formează un oraș dublu cu Valka din Letonia.",
        "Nod important feroviar și rutier în sudul Estoniei.",
        "Capitala județului Valga.",
        "Muzeul de Istorie Militară din Valga oferă perspective asupra istoriei apărării.",
        "Orașul a fost istoric un important centru comercial.",
        "Râul Pedeli traversează orașul și servește ca zonă de recreere.",
        "Valga și Valka împart unele servicii transfrontaliere.",
        "Biserica Sf. Ioan este un reper arhitectural al orașului."
      ],
      en: [
        "Forms a single urban entity with the town of Valka in Latvia.",
        "It is a key railway and road hub in southern Estonia.",
        "Valga serves as the capital of Valga County.",
        "The Valga Military History Museum offers insights into the region's defense history.",
        "Historically, the city was a major trading post on the route between Riga and Pskov.",
        "The Pedeli River, which flows through the city, has been developed into a scenic recreation area.",
        "Valga and Valka cooperate on several cross-border services and celebrate joint festivals.",
        "St. John's Church, an oval-shaped church, is a prominent architectural landmark."
      ]
    },
    image: "/geo-images/estonia/valga.webp"
  }
];

export const estoniaCulture: POI[] = [
  {
    id: "cult-tallinn-oldtown",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7442, 59.4394],
    name: {
      de: "Tallinner Altstadt",
      hu: "Tallinn óváros",
      ro: "Orașul vechi Tallinn",
      en: "Tallinn Old Town"
    },
    description: {
      de: "UNESCO-Mauern aus dem 13. Jahrhundert mit Türmen.",
      hu: "UNESCO 13. századi fal + tornyok.",
      ro: "Zid UNESCO din secolul al XIII-lea + turnuri.",
      en: "UNESCO 13th-century wall and towers."
    },
    descriptionAdvanced: {
      de: "Die Altstadt von Tallinn, ein UNESCO-Weltkulturerbe, ist eine der am besten erhaltenen mittelalterlichen Städte Europas. Ein Labyrinth aus Kopfsteinpflastergassen, gotischen Kirchen und historischen Kaufmannshäusern, umgeben von einer fast vollständig intakten Stadtmauer. Sie ist das pulsierende Herz der estnischen Hauptstadt und ein Magnet für Besucher aus aller Welt.",
      hu: "",
      ro: "Centrul Vechi din Tallinn, un sit al Patrimoniului Mondial UNESCO, este unul dintre cele mai bine conservate orașe medievale din Europa. Un labirint de străzi pavate, biserici gotice și case istorice ale negustorilor, înconjurat de un zid de apărare aproape complet intact. Este inima vibrantă a capitalei estoniene și un magnet pentru vizitatori din întreaga lume.",
      en: "Tallinn's Old Town, a UNESCO World Heritage site, is one of the best-preserved medieval cities in Europe, offering a captivating journey back in time. This enchanting district is a labyrinth of cobblestone streets, hidden courtyards, Gothic spires, and historic merchants' houses, all enclosed within a nearly intact 13th-century city wall. It is the vibrant heart of the Estonian capital, buzzing with life while retaining its ancient charm. Divided into the lower town (All-linn) and the upper Toompea Hill, it serves as both a bustling center for locals and a magnet for visitors from around the globe, who come to soak in its unique atmosphere, explore its historic landmarks, and enjoy its cozy cafes and artisan shops."
    },
    facts: {
      de: ["UNESCO-Welterbe", "13. Jahrhundert"],
      hu: ["UNESCO világörökség", "13. század"],
      ro: ["Patrimoniu UNESCO", "Secolul al XIII-lea"],
      en: ["UNESCO World Heritage", "13th century"]
    },
    factsAdvanced: {
      de: [
        "Seit 1997 UNESCO-Weltkulturerbe.",
        "Die Stadtmauer ist fast 2 km lang und hat über 20 erhaltene Türme.",
        "Der Rathausplatz ist seit dem 11. Jahrhundert das Zentrum der Stadt.",
        "Die St.-Olav-Kirche war einst das höchste Gebäude der Welt.",
        "Die Altstadt ist in eine Unterstadt (All-linn) und einen Domberg (Toompea) unterteilt.",
        "Die älteste Apotheke Europas, die Raeapteek, ist hier immer noch in Betrieb.",
        "Im Winter findet hier ein berühmter Weihnachtsmarkt statt.",
        "Die Architektur ist eine Mischung aus Gotik und Barock."
      ],
      hu: [],
      ro: [
        "Inclus în Patrimoniul Mondial UNESCO din 1997.",
        "Zidul orașului are o lungime de aproape 2 km și peste 20 de turnuri conservate.",
        "Piața Primăriei este centrul orașului încă din secolul al XI-lea.",
        "Biserica Sf. Olaf a fost odată cea mai înaltă clădire din lume.",
        "Orașul vechi este împărțit într-un oraș de jos (All-linn) și un deal al catedralei (Toompea).",
        "Cea mai veche farmacie din Europa, Raeapteek, funcționează aici și astăzi.",
        "Iarna, aici are loc un faimos târg de Crăciun.",
        "Arhitectura este un amestec de gotic și baroc."
      ],
      en: [
        "It has been a UNESCO World Heritage site since 1997.",
        "The city wall is nearly 2 km long and features over 20 preserved defensive towers.",
        "The Town Hall Square has been the center of the city since at least the 11th century.",
        "St. Olaf's Church was once the tallest building in the world during the 16th century.",
        "The Old Town is divided into a lower town (All-linn) and Toompea Hill, the seat of power.",
        "It is home to the Town Hall Pharmacy (Raeapteek), one of Europe's oldest continuously running pharmacies.",
        "A world-renowned Christmas market is held in the Town Hall Square every winter.",
        "The architecture is a rich blend of Gothic and Baroque styles."
      ]
    },
    image: "/geo-images/estonia/tallinn-oldtown.webp"
  },
  {
    id: "cult-tartu-university",
    type: "landmark",
    parent: "ee-country",
    coords: [26.7208, 58.3806],
    name: {
      de: "Universität Tartu",
      hu: "Tartu egyetem",
      ro: "Universitatea din Tartu",
      en: "University of Tartu"
    },
    description: {
      de: "Schwedische Gründung von 1632.",
      hu: "Svéd alapítás 1632.",
      ro: "Fondată de suedezi în 1632.",
      en: "Founded by Sweden in 1632."
    },
    descriptionAdvanced: {
      de: "Die Universität Tartu, gegründet 1632, ist die älteste und renommierteste Universität Estlands. Sie ist das intellektuelle Herz des Landes und prägt die Atmosphäre der Stadt Tartu entscheidend. Das historische Hauptgebäude ist ein Meisterwerk des Klassizismus. Die Universität ist nicht nur ein Bildungszentrum, sondern auch ein wichtiger Motor für Forschung und Innovation im Baltikum.",
      hu: "",
      ro: "Universitatea din Tartu, fondată în 1632, este cea mai veche și mai renumită universitate din Estonia. Este inima intelectuală a țării și definește în mod crucial atmosfera orașului Tartu. Clădirea principală istorică este o capodoperă a clasicismului. Universitatea nu este doar un centru educațional, ci și un motor important pentru cercetare și inovație în regiunea baltică.",
      en: "The University of Tartu, founded in 1632 by the Swedish King Gustav II Adolph, is Estonia's oldest, largest, and most prestigious university. It stands as the nation's intellectual heart, fundamentally shaping the lively and scholarly atmosphere of Tartu. The university's main building, a masterpiece of Classicist architecture, is an iconic symbol of the city. More than just an educational institution, the university is a powerful engine for research and innovation in the Baltic region, attracting students and scholars from all over the world. Its rich history and commitment to academic excellence have produced many of Estonia's most significant cultural and political figures, solidifying its role as the cradle of Estonian national consciousness."
    },
    facts: {
      de: ["Gegründet 1632", "Alte Universitätsstadt"],
      hu: ["1632-ben alapították", "Régi egyetemi város"],
      ro: ["Fondată în 1632", "Oraș universitar istoric"],
      en: ["Founded in 1632", "Historic university city"]
    },
    factsAdvanced: {
      de: [
        "Gegründet von König Gustav II. Adolf von Schweden.",
        "Eine der ältesten Universitäten Nordeuropas.",
        "Das Hauptgebäude wurde nach Plänen von Johann Wilhelm Krause erbaut.",
        "Die Universitätsbibliothek beherbergt wertvolle historische Manuskripte.",
        "Viele bedeutende estnische Persönlichkeiten haben hier studiert.",
        "Die Universität ist in vier Fakultäten gegliedert.",
        "Das Kunstmuseum der Universität ist das älteste Museum Estlands.",
        "Die Universität ist Mitglied der Coimbra-Gruppe und des Utrecht-Netzwerks."
      ],
      hu: [],
      ro: [
        "Fondată de regele Gustav II Adolf al Suediei.",
        "Una dintre cele mai vechi universități din Europa de Nord.",
        "Clădirea principală a fost construită după planurile lui Johann Wilhelm Krause.",
        "Biblioteca universității găzduiește manuscrise istorice valoroase.",
        "Multe personalități estoniene importante au studiat aici.",
        "Universitatea este structurată în patru facultăți.",
        "Muzeul de Artă al universității este cel mai vechi muzeu din Estonia.",
        "Universitatea este membră a Grupului Coimbra și a Rețelei Utrecht."
      ],
      en: [
        "Founded in 1632 by King Gustav II Adolf of Sweden.",
        "It is one of the oldest universities in Northern Europe.",
        "The main building was designed by architect Johann Wilhelm Krause and is a prime example of Classicist architecture.",
        "The university library is home to a vast collection of valuable historical manuscripts.",
        "Many of Estonia's most prominent figures in science, culture, and politics are among its alumni.",
        "The University of Tartu Art Museum, founded in 1803, is the oldest museum in Estonia.",
        "It is a member of the prestigious Coimbra Group and the Utrecht Network of European universities.",
        "The university's historic ensemble on Toome Hill, including the Old Observatory and the cathedral ruins, is a key part of the city's heritage."
      ]
    },
    image: "/geo-images/estonia/tartu-university.webp"
  },
  {
    id: "cult-kadriorg",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7897, 59.4394],
    name: {
      de: "Kadriorg-Palast",
      hu: "Kadriorg-palota Tallinn",
      ro: "Palatul Kadriorg",
      en: "Kadriorg Palace"
    },
    description: {
      de: "Peter der Große, 1718, Barock.",
      hu: "Nagy Péter 1718 barokk.",
      ro: "Petru cel Mare, 1718, baroc.",
      en: "Peter the Great, 1718, baroque."
    },
    descriptionAdvanced: {
      de: "Der Kadriorg-Palast, ein barockes Meisterwerk, wurde im 18. Jahrhundert von Peter dem Großen für seine Frau Katharina I. in Auftrag gegeben. Umgeben von einem wunderschön angelegten Park, beherbergt der Palast heute das Kadriorg-Kunstmuseum, das ausländische Kunst vom 16. bis zum 20. Jahrhundert ausstellt. Das Ensemble aus Palast, Park und Kunst ist ein Juwel in Tallinn.",
      hu: "",
      ro: "Palatul Kadriorg, o capodoperă barocă, a fost comandat în secolul al XVIII-lea de Petru cel Mare pentru soția sa, Ecaterina I. Înconjurat de un parc frumos amenajat, palatul găzduiește astăzi Muzeul de Artă Kadriorg, care expune artă străină din secolele XVI-XX. Ansamblul format din palat, parc și artă este o bijuterie în Tallinn.",
      en: "Kadriorg Palace, a magnificent baroque masterpiece located in Tallinn, was commissioned by Tsar Peter the Great in 1718 for his wife, Catherine I. Designed by Italian architect Nicola Michetti, the palace and its surrounding formal gardens are a stunning example of Petrine Baroque architecture. The name 'Kadriorg' translates to 'Catherine's Valley' in Estonian. Originally a summer residence for the Russian imperial family, the palace now houses the Kadriorg Art Museum, which displays a rich collection of foreign art from the 16th to the 20th centuries. The meticulously landscaped park, with its Swan Pond, flowerbeds, and fountains, is a beloved recreational area for both locals and tourists, offering a serene escape and a glimpse into Estonia's imperial past."
    },
    facts: {
      de: ["Barockpalast", "1718 erbaut"],
      hu: ["Barokk palota", "1718-ban épült"],
      ro: ["Palat baroc", "Construit în 1718"],
      en: ["Baroque palace", "Built in 1718"]
    },
    factsAdvanced: {
      de: [
        "Der Name 'Kadriorg' bedeutet 'Katharinental' auf Deutsch.",
        "Entworfen vom italienischen Architekten Nicola Michetti.",
        "Der Park ist einer der beliebtesten Erholungsorte in Tallinn.",
        "Neben dem Kadriorg-Palast befindet sich auch die Residenz des estnischen Präsidenten im Park.",
        "Das KUMU, Estlands größtes Kunstmuseum, liegt ebenfalls im Kadriorg-Park.",
        "Der Schwanenteich mit seiner kleinen Insel ist ein romantischer Ort.",
        "Der Park umfasst auch einen japanischen Garten.",
        "Im Sommer finden im Park zahlreiche Konzerte und Veranstaltungen statt."
      ],
      hu: [],
      ro: [
        "Numele 'Kadriorg' înseamnă 'Valea Ecaterinei' în germană.",
        "Proiectat de arhitectul italian Nicola Michetti.",
        "Parcul este unul dintre cele mai populare locuri de recreere din Tallinn.",
        "Pe lângă Palatul Kadriorg, în parc se află și reședința președintelui estonian.",
        "KUMU, cel mai mare muzeu de artă din Estonia, se află tot în Parcul Kadriorg.",
        "Iazul cu lebede și insulița sa este un loc romantic.",
        "Parcul include și o grădină japoneză.",
        "Vara, în parc au loc numeroase concerte și evenimente."
      ],
      en: [
        "The palace was named 'Kadriorg' ('Catherine's Valley') in honor of Peter the Great's wife, Catherine I.",
        "It was designed by the Italian architect Nicola Michetti.",
        "The main hall is one of the most exquisite examples of Baroque architecture in Northern Europe.",
        "The palace now serves as the Kadriorg Art Museum, displaying foreign art from the 16th to 20th centuries.",
        "The adjacent Presidential Palace, the official residence of the President of Estonia, is also located within the park.",
        "The vast Kadriorg Park also features the KUMU Art Museum, Estonia's largest art museum.",
        "A beautiful Japanese garden was added to the park in 2011.",
        "The park's Swan Pond and its charming gazebo are popular spots for relaxation and photos."
      ]
    },
    image: "/geo-images/estonia/kadriorg.webp"
  },
  {
    id: "cult-haapsalu",
    type: "landmark",
    parent: "ee-country",
    coords: [23.5417, 58.9444],
    name: {
      de: "Bischofsburg Haapsalu",
      hu: "Haapsalu püspöki vár",
      ro: "Castelul episcopal Haapsalu",
      en: "Haapsalu Bishop's Castle"
    },
    description: {
      de: "Burg aus dem 13. Jahrhundert, von Tschaikowski besucht.",
      hu: "13. század, Csajkovszkij látogatta.",
      ro: "Secolul al XIII-lea, vizitat de Ceaikovski.",
      en: "13th century, visited by Tchaikovsky."
    },
    descriptionAdvanced: {
      de: "Die Bischofsburg Haapsalu ist das Herzstück der gleichnamigen Kurstadt. Die gut erhaltene Anlage aus dem 13. Jahrhundert umfasst eine Domkirche, in der die Legende der 'Weißen Dame' beheimatet ist. Die Burgmauern und der Innenhof sind ein beliebter Ort für Veranstaltungen und Festivals. Die Burg ist ein Muss für jeden Besucher von Haapsalu und ein wichtiges Zeugnis der Geschichte Westestlands.",
      hu: "",
      ro: "Castelul Episcopal din Haapsalu este piesa centrală a orașului balnear omonim. Complexul bine conservat din secolul al XIII-lea include o catedrală unde își are originea legenda 'Doamnei Albe'. Zidurile castelului și curtea interioară sunt un loc popular pentru evenimente și festivaluri. Castelul este o atracție obligatorie pentru orice vizitator al Haapsalu și o mărturie importantă a istoriei vestului Estoniei.",
      en: "Haapsalu Bishop's Castle is the historic heart of the charming seaside resort town of Haapsalu. This well-preserved 13th-century complex features massive stone walls, a majestic cathedral, and a convent building. The castle was the center of the Bishopric of Ösel-Wiek for centuries. Today, it's a major tourist attraction and a beloved venue for concerts and festivals. The castle's cathedral is particularly famous for the legend of the White Lady, a ghostly maiden said to appear in a chapel window during the full moon in August. Visitors can explore the castle grounds, climb the watchtower for panoramic views of the town, and delve into the region's medieval history at the castle museum. The romantic ruins and the enduring legend make it a captivating destination."
    },
    facts: {
      de: ["13. Jahrhundert", "Tschaikowski-Besuch"],
      hu: ["13. század", "Csajkovszkij látogatta"],
      ro: ["Secolul al XIII-lea", "Vizitat de Ceaikovski"],
      en: ["13th century", "Visited by Tchaikovsky"]
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde im 13. Jahrhundert als Zentrum des Bistums Ösel-Wiek gegründet.",
        "Die Domkirche ist die größte einschiffige Kirche im Baltikum.",
        "Die Legende der 'Weißen Dame' ist eine der bekanntesten Geistergeschichten Estlands.",
        "Der Uhrturm der Burg bietet eine großartige Aussicht auf die Stadt.",
        "Im Sommer finden in der Burg zahlreiche Konzerte und das Mittelalterfestival statt.",
        "Das Burggelände beherbergt auch ein Museum.",
        "Pjotr Tschaikowski besuchte Haapsalu und die Burg im Jahr 1867.",
        "Die Mauern sind ein beliebtes Motiv für Fotografen."
      ],
      hu: [],
      ro: [
        "Castelul a fost fondat în secolul al XIII-lea ca centru al Episcopiei de Ösel-Wiek.",
        "Catedrala este cea mai mare biserică cu o singură navă din Baltica.",
        "Legenda 'Doamnei Albe' este una dintre cele mai cunoscute povești cu fantome din Estonia.",
        "Turnul cu ceas al castelului oferă o priveliște magnifică asupra orașului.",
        "Vara, în castel au loc numeroase concerte și festivalul medieval.",
        "Complexul castelului găzduiește și un muzeu.",
        "Piotr Ceaikovski a vizitat Haapsalu și castelul în 1867.",
        "Zidurile sunt un motiv popular pentru fotografi."
      ],
      en: [
        "The castle was founded in the 13th century as the center of the Bishopric of Ösel-Wiek.",
        "Its St. Nicholas Cathedral is the largest single-nave church in the Baltic states.",
        "It is home to Estonia's most famous ghost story, the legend of the White Lady.",
        "The castle's watchtower offers stunning views over Haapsalu and the surrounding sea.",
        "The grounds host numerous events, including the popular medieval festival 'White Lady Days.'",
        "The complex includes a museum showcasing the history of the castle and the town.",
        "The famous composer Pyotr Tchaikovsky visited Haapsalu and the castle in 1867.",
        "The massive walls and moat provide a glimpse into medieval defensive architecture."
      ]
    },
    image: "/geo-images/estonia/haapsalu.webp"
  },
  {
    id: "cult-tartu-observatory",
    type: "historical",
    parent: "ee-country",
    coords: [26.72, 58.378],
    name: {
      de: "Sternwarte Tartu",
      hu: "Tartu csillagvizsgáló",
      ro: "Observatorul din Tartu",
      en: "Tartu Observatory"
    },
    description: {
      de: "UNESCO-Struve-Bogen, 1820er Jahre.",
      hu: "UNESCO Struve-geodéziai ív, 1820.",
      ro: "Arcul geodezic Struve UNESCO, 1820.",
      en: "UNESCO Struve Geodetic Arc, 1820."
    },
    descriptionAdvanced: {
      de: "Die Alte Sternwarte Tartu ist ein historisches Wissenschaftszentrum von Weltrang. Sie ist ein wichtiger Teil des UNESCO-Weltkulturerbes 'Struve-Bogen', einem Netz von geodätischen Vermessungspunkten. Das klassizistische Gebäude und seine Instrumente zeugen von der bedeutenden Rolle Tartus in der Geschichte der Astronomie und Geodäsie.",
      hu: "",
      ro: "Vechiul Observator din Tartu este un centru științific istoric de talie mondială. Este o parte importantă a Patrimoniului Mondial UNESCO 'Arcul Geodezic Struve', o rețea de puncte de măsurare geodezică. Clădirea clasicistă și instrumentele sale mărturisesc rolul semnificativ al Tartu în istoria astronomiei și geodeziei.",
      en: "The historic Tartu Old Observatory is a world-class scientific monument and a key site of the UNESCO World Heritage listed Struve Geodetic Arc. Established in the early 19th century on Toome Hill, it quickly became a leading center for astronomy. Under the direction of the renowned astronomer Friedrich Georg Wilhelm von Struve, the observatory conducted groundbreaking research, including some of the first measurements of a star's parallax. The classicist building housed one of the most advanced telescopes of its time, the Fraunhofer refractor. Today, the observatory functions as a museum, showcasing its rich history and significant contributions to astronomy, geodesy, and our understanding of the Earth's shape and size."
    },
    facts: {
      de: ["UNESCO-Struve-Bogen", "1820er Jahre"],
      hu: ["UNESCO Struve-ív", "1820"],
      ro: ["Arcul Struve UNESCO", "1820"],
      en: ["UNESCO Struve Arc", "1820"]
    },
    factsAdvanced: {
      de: [
        "Teil des UNESCO-Weltkulturerbes Struve-Bogen.",
        "Gegründet im frühen 19. Jahrhundert.",
        "Friedrich Georg Wilhelm von Struve führte hier bahnbrechende Forschungen durch.",
        "Das Observatorium beherbergte einst eines der größten und modernsten Teleskope der Welt.",
        "Das Gebäude ist ein herausragendes Beispiel klassizistischer Architektur.",
        "Heute dient es als Museum und Bildungszentrum.",
        "Von hier aus wurden wichtige Messungen zur Form und Größe der Erde durchgeführt.",
        "Die Sternwarte liegt auf dem Domberg (Toomemägi) in Tartu."
      ],
      hu: [],
      ro: [
        "Parte a Patrimoniului Mondial UNESCO Arcul Geodezic Struve.",
        "Fondat la începutul secolului al XIX-lea.",
        "Friedrich Georg Wilhelm von Struve a efectuat aici cercetări de pionierat.",
        "Observatorul a găzduit odată unul dintre cele mai mari și moderne telescoape din lume.",
        "Clădirea este un exemplu remarcabil de arhitectură clasicistă.",
        "Astăzi servește ca muzeu și centru educațional.",
        "De aici s-au efectuat măsurători importante privind forma și dimensiunea Pământului.",
        "Observatorul este situat pe Dealul Toomemägi din Tartu."
      ],
      en: [
        "It is a designated point on the Struve Geodetic Arc, a UNESCO World Heritage site.",
        "It was founded in the early 19th century as part of the University of Tartu.",
        "Astronomer F. G. W. von Struve conducted pioneering studies on binary stars here.",
        "The observatory once housed the world's largest refracting telescope.",
        "The building is an outstanding example of Classicist architecture.",
        "It now operates as a museum dedicated to the history of science.",
        "Important measurements to determine the precise shape and size of the Earth were conducted from here.",
        "It is located on the scenic Toomemägi (Cathedral Hill) in the heart of Tartu."
      ]
    },
    image: "/geo-images/estonia/tartu-observatory.webp"
  },
  {
    id: "cult-alexander-nevsky",
    type: "landmark",
    parent: "ee-country",
    coords: [24.742, 59.435],
    name: {
      de: "Alexander-Newski-Kathedrale Tallinn",
      hu: "Alekszandr Nyevszkij-székesegyház Tallinn",
      ro: "Catedrala Alexander Nevsky din Tallinn",
      en: "Alexander Nevsky Cathedral, Tallinn"
    },
    description: {
      de: "Russisch-orthodoxe Kathedrale von 1900.",
      hu: "Orosz ortodox templom 1900-ból.",
      ro: "Catedrală ortodoxă rusă din 1900.",
      en: "Russian Orthodox cathedral from 1900."
    },
    descriptionAdvanced: {
      de: "Die Alexander-Newski-Kathedrale auf dem Tallinner Domberg ist die prächtigste orthodoxe Kirche der Stadt. Erbaut um 1900, symbolisiert sie die Zeit des Russischen Reiches in Estland. Ihre Zwiebeltürme und das reiche Mosaikdekor machen sie zu einem unübersehbaren Wahrzeichen und einem wichtigen spirituellen Zentrum für die orthodoxe Gemeinschaft.",
      hu: "",
      ro: "Catedrala Alexander Nevsky de pe Dealul Toompea din Tallinn este cea mai magnifică biserică ortodoxă din oraș. Construită în jurul anului 1900, simbolizează perioada Imperiului Rus în Estonia. Turlele sale în formă de ceapă și decorul bogat în mozaicuri o fac un punct de reper de neignorat și un important centru spiritual pentru comunitatea ortodoxă.",
      en: "The Alexander Nevsky Cathedral, perched atop Toompea Hill in Tallinn, is the city's most magnificent Orthodox church. Built around 1900, it symbolizes the period of the Russian Empire in Estonia. Its distinctive onion domes and rich mosaic decorations make it an unmissable landmark and a vital spiritual center for the Orthodox community. This opulent cathedral was designed in a mixed historicist style, but the dominant influence is the Russian Revival style. It was a controversial symbol of Russification for many Estonians, and its demolition was even considered in the 1920s, but the plan was never executed. Today, it stands as a significant architectural monument and an active place of worship."
    },
    facts: {
      de: ["Russisch-orthodox", "Erbaut 1900"],
      hu: ["Orosz ortodox", "1900-ban épült"],
      ro: ["Ortodoxă rusă", "Construită în 1900"],
      en: ["Russian Orthodox", "Built in 1900"]
    },
    factsAdvanced: {
      de: [
        "Erbaut zwischen 1894 und 1900.",
        "Ein herausragendes Beispiel für den russisch-byzantinischen Stil.",
        "Benannt nach dem russischen Nationalhelden Alexander Newski.",
        "Die größte Kuppelkathedrale in Tallinn.",
        "Das Glockenspiel besteht aus 11 Glocken, die größte wiegt 15 Tonnen.",
        "Die Kathedrale wurde zeitweise zur Schließung oder zum Abriss vorgesehen.",
        "Die Innenräume sind reich mit Ikonen und Mosaiken geschmückt.",
        "Sie ist die Hauptkathedrale der Estnisch-Orthodoxen Kirche des Moskauer Patriarchats."
      ],
      hu: [],
      ro: [
        "Construită între 1894 și 1900.",
        "Un exemplu remarcabil al stilului ruso-bizantin.",
        "Numită după eroul național rus Alexander Nevsky.",
        "Cea mai mare catedrală cu cupolă din Tallinn.",
        "Setul de clopote constă din 11 clopote, cel mai mare cântărind 15 tone.",
        "S-a intenționat la un moment dat închiderea sau demolarea catedralei.",
        "Interioarele sunt bogat decorate cu icoane și mozaicuri.",
        "Este catedrala principală a Bisericii Ortodoxe Estoniene a Patriarhiei Moscovei."
      ],
      en: [
        "Built between 1894 and 1900 during the period of Russification.",
        "An outstanding example of the Russian Revival architectural style.",
        "Named after the Russian national hero, Saint Alexander Nevsky.",
        "It is the largest cupola cathedral in Tallinn.",
        "Its bell ensemble consists of 11 bells, the largest of which weighs 15 tons.",
        "The cathedral's demolition was considered in the 1920s and 1930s but never carried out.",
        "The interiors are richly decorated with icons, mosaics, and gold leaf.",
        "It is the main cathedral of the Estonian Orthodox Church of the Moscow Patriarchate."
      ]
    },
    image: "/geo-images/estonia/alexander-nevsky.webp"
  },
  {
    id: "cult-kihnu",
    type: "landmark",
    parent: "ee-country",
    coords: [24.0, 58.133],
    name: {
      de: "Insel Kihnu",
      hu: "Kihnu-sziget",
      ro: "Insula Kihnu",
      en: "Kihnu Island"
    },
    description: {
      de: "UNESCO-Insel mit lebendiger Frauentradition.",
      hu: "UNESCO-sziget élő női hagyományokkal.",
      ro: "Insulă UNESCO cu tradiții feminine vii.",
      en: "UNESCO island with living women's traditions."
    },
    descriptionAdvanced: {
      de: "Die Insel Kihnu ist ein einzigartiges Matriarchat in der Ostsee und Teil des immateriellen UNESCO-Weltkulturerbes. Die Frauen von Kihnu sind die Hüterinnen der Traditionen, des Gesangs, der Tänze und des Handwerks. Die farbenfrohen Trachten und die besondere Lebensweise machen die Insel zu einem faszinierenden Reiseziel für Kulturliebhaber.",
      hu: "",
      ro: "Insula Kihnu este un matriarhat unic în Marea Baltică și face parte din patrimoniul cultural imaterial UNESCO. Femeile din Kihnu sunt păstrătoarele tradițiilor, cântecelor, dansurilor și meșteșugurilor. Costumele populare colorate și modul de viață special fac din insulă o destinație fascinantă pentru iubitorii de cultură.",
      en: "Kihnu Island is a unique matriarchal society in the Baltic Sea, recognized as a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity. The women of Kihnu are the primary guardians of the island's cultural traditions, including songs, dances, and intricate handicrafts. While men are often away at sea, the women manage daily life and preserve their ancient customs. The vibrant, colorful traditional clothing, particularly the striped skirts known as 'kört', and the distinctive way of life make the island a fascinating destination for cultural enthusiasts. The community's resilience and dedication to its heritage offer a rare glimpse into a living culture where traditions are woven into the fabric of everyday existence."
    },
    facts: {
      de: ["UNESCO-Kulturerbe", "Frauentraditionen"],
      hu: ["UNESCO örökség", "Női hagyományok"],
      ro: ["Patrimoniu UNESCO", "Tradiții feminine"],
      en: ["UNESCO heritage", "Women's traditions"]
    },
    factsAdvanced: {
      de: [
        "Die Kultur von Kihnu wurde 2003 in die UNESCO-Liste des immateriellen Kulturerbes aufgenommen.",
        "Die Frauen tragen traditionell gestreifte Röcke ('kört').",
        "Motorräder sind das Hauptverkehrsmittel auf der Insel.",
        "Die Insel hat einen eigenen Dialekt.",
        "Fischfang und Robbenjagd waren traditionell die Hauptbeschäftigungen der Männer.",
        "Das Kihnu-Museum gibt Einblicke in das Inselleben.",
        "Die Johanneskirche auf Kihnu ist die einzige orthodoxe Kirche mit Zwiebelturm auf einer estnischen Kleininsel.",
        "Das Kihnu-Meeresfest ist das wichtigste Ereignis des Jahres."
      ],
      hu: [],
      ro: [
        "Cultura Kihnu a fost inclusă în 2003 pe lista UNESCO a patrimoniului cultural imaterial.",
        "Femeile poartă în mod tradițional fuste în dungi ('kört').",
        "Motocicletele sunt principalul mijloc de transport pe insulă.",
        "Insula are propriul dialect.",
        "Pescuitul și vânătoarea de foci erau în mod tradițional principalele ocupații ale bărbaților.",
        "Muzeul Kihnu oferă o perspectivă asupra vieții pe insulă.",
        "Biserica Sf. Ioan de pe Kihnu este singura biserică ortodoxă cu turlă în formă de ceapă de pe o insulă mică estoniană.",
        "Festivalul Mării de la Kihnu este cel mai important eveniment al anului."
      ],
      en: [
        "The Kihnu cultural space was inscribed on the UNESCO Intangible Cultural Heritage list in 2003.",
        "Women traditionally wear colorful, striped skirts called 'kört', with colors and patterns indicating the wearer's social status.",
        "Motorcycles, often with sidecars, are the main form of transportation on the island.",
        "The island has its own distinct dialect, which is a key part of its cultural identity.",
        "Traditionally, men were fishermen and seal hunters, often away from home for long periods.",
        "The Kihnu Museum offers comprehensive insight into the island's history and way of life.",
        "Kihnu is home to one of the few functioning Orthodox churches on Estonia's small islands.",
        "The annual Kihnu Sea Festival is the most important event of the year, celebrating maritime traditions."
      ]
    },
    image: "/geo-images/estonia/kihnu.webp"
  },
  {
    id: "cult-parnu-beach",
    type: "landmark",
    parent: "ee-country",
    coords: [24.495, 58.38],
    name: {
      de: "Strand von Pärnu",
      hu: "Pärnu strand",
      ro: "Plaja din Pärnu",
      en: "Pärnu Beach"
    },
    description: {
      de: "Sommerhauptstadt mit Strandpromenade.",
      hu: "Nyári főváros, strand sétány.",
      ro: "Capitala de vară cu promenadă pe plajă.",
      en: "Summer capital with a beachfront promenade."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Plaja din Pärnu este sufletul capitalei de vară a Estoniei. Cu nisipul său fin și auriu și apele puțin adânci, este un magnet pentru familii și turiști. Promenada sa vibrantă, mărginită de fântâni, parcuri și cafenele, oferă un loc perfect pentru plimbări relaxante. Plaja nu este doar un loc pentru plajă și înot, ci și un centru pentru evenimente, sporturi de plajă și festivaluri de muzică pe tot parcursul verii, creând o atmosferă plină de viață și energie.",
      en: "Pärnu Beach is the heart and soul of Estonia's summer capital. With its fine, golden sand and shallow, quickly warming waters, it is a magnet for families and sun-seekers. Its vibrant promenade, lined with fountains, parks, and cafes, offers a perfect setting for leisurely strolls and relaxation. The beach is more than just a place for sunbathing and swimming; it's a bustling hub for events, beach sports like volleyball and kitesurfing, and music festivals throughout the summer. This energetic atmosphere, combined with the classic resort architecture of the nearby spa buildings, creates an idyllic and lively seaside experience that defines the character of Pärnu."
    },
    facts: {
      de: ["Sommerhauptstadt", "Strandpromenade"],
      hu: ["Nyári főváros", "Strand sétány"],
      ro: ["Capitala de vară", "Promenadă pe plajă"],
      en: ["Summer capital", "Beach promenade"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Plaja se întinde pe aproape 2 kilometri de-a lungul Golfului Pärnu.",
        "Apele sale sunt printre cele mai calde din Estonia în timpul verii.",
        "A primit certificarea 'Steagul Albastru' pentru standardele sale ridicate de mediu și siguranță.",
        "Promenada de pe plajă a fost finalizată în forma sa modernă în anii 1930.",
        "Clădirea istorică a băilor de nămol se află chiar lângă plajă.",
        "Este un loc popular pentru kitesurfing și windsurfing.",
        "Numeroase sculpturi de nisip pot fi admirate pe plajă în timpul verii.",
        "Zona de joacă pentru copii este una dintre cele mai mari din Estonia."
      ],
      en: [
        "The beach stretches for nearly 2 kilometers along the Pärnu Bay.",
        "Its shallow waters are among the warmest in Estonia during the summer months.",
        "It has been awarded the Blue Flag certification for its high environmental and safety standards.",
        "The beachfront promenade was completed in its modern form in the 1930s.",
        "The historic Pärnu Mud Baths building is located right next to the beach.",
        "It is a popular spot for kitesurfing and windsurfing due to favorable conditions.",
        "A large children's playground, one of the biggest in Estonia, is located on the beach.",
        "The beach area frequently hosts sand sculpture competitions and other summer events."
      ]
    },
    image: "/geo-images/estonia/parnu-beach.webp"
  },
  {
    id: "hist-toompea-castle",
    type: "historical",
    parent: "ee-country",
    coords: [24.7409, 59.4396],
    name: {
      de: "Toompea-Burg",
      hu: "Toompea vára",
      ro: "Castelul Toompea",
      en: "Toompea Castle"
    },
    description: {
      de: "Toompea Castle thront über Tallinn und ist eines der wichtigsten historischen Machtzentren Estlands. Die Anlage verbindet mittelalterliche Festungsstrukturen mit dem heutigen Parlamentssitz. Der Standort prägt das politische und visuelle Profil der Hauptstadt seit Jahrhunderten. Für historische Tallinn-Recherchen ist Toompea ein unverzichtbarer Name.",
      hu: "A Toompea-vár Tallinn fölé magasodik, és Észtország egyik legfontosabb történelmi hatalmi központja. Az épület középkori erődítményt és a mai parlament székhelyét egyesíti. A helyszín évszázadok óta meghatározza a főváros politikai és vizuális arculatát. Történelmi tallinni kereséseknél Toompea kihagyhatatlan név.",
      ro: "Castelul Toompea domină Tallinnul și este unul dintre cele mai importante centre istorice de putere ale Estoniei. Ansamblul combină structuri medievale de fortificație cu sediul actual al parlamentului. Locația a modelat profilul politic și vizual al capitalei timp de secole. Pentru documentarea istorică despre Tallinn, Toompea este un nume esențial.",
      en: "Toompea Castle rises above Tallinn and is one of Estonia's most important historic power centers. The complex combines medieval fortress structures with the current seat of parliament. The site has shaped the political and visual profile of the capital for centuries. For historic Tallinn research, Toompea is an essential name."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Castelul Toompea, situat pe dealul omonim, este simbolul puterii în Estonia. Complexul actual găzduiește Riigikogu, parlamentul estonian, într-o clădire roz, barocă, construită în secolul al XVIII-lea. Aceasta este integrată cu rămășițele cetății medievale, inclusiv turnul Pikk Hermann, un simbol național. Istoria sa se întinde pe parcursul a peste 800 de ani, servind drept fortăreață pentru danezi, teutoni, suedezi și ruși, fiecare lăsându-și amprenta arhitecturală. Astăzi, este un centru politic vital și o atracție turistică majoră.",
      en: "Toompea Castle, perched on the limestone hill of the same name, is the enduring symbol of power in Estonia. Today's complex houses the Riigikogu, the Estonian Parliament, within a distinct pink Baroque palace built in the 18th century on the site of the castle's demolished eastern wing. This modern governmental function is seamlessly integrated with the remnants of the ancient medieval fortress, most notably the Pikk Hermann (Tall Hermann) tower, a cherished national symbol. With a history stretching back over 800 years, the castle has served as a stronghold for Danish, Teutonic, Swedish, and Russian rulers, each leaving their architectural mark. It remains a vital political center and a major tourist attraction, embodying the nation's history of resilience and governance."
    },
    facts: {
      de: ["Sitz des estnischen Parlaments", "Mittelalterliche Festungsanlage", "Auf dem Toompea-Hügel gelegen", "Prägt die Silhouette Tallinns", "Wichtiges Symbol staatlicher Macht"],
      hu: ["Az észt parlament székhelye", "Középkori erődítmény", "A Toompea-dombon áll", "Meghatározza Tallinn látképét", "Fontos állami hatalmi szimbólum"],
      ro: ["Sediul parlamentului estonian", "Fortificație medievală", "Situat pe dealul Toompea", "Definește silueta Tallinnului", "Simbol important al puterii statale"],
      en: ["Seat of the Estonian Parliament", "Medieval fortress complex", "Located on Toompea Hill", "Shapes Tallinn's skyline", "Important symbol of state power"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Găzduiește Parlamentul Estoniei (Riigikogu).",
        "Turnul Pikk Hermann, înalt de 45.6 metri, este un simbol național.",
        "Clădirea parlamentului a fost construită pe locul aripii de est a castelului, demolată în secolul al XVIII-lea.",
        "Conține elemente arhitecturale din secolul al XIII-lea până în prezent.",
        "Legenda spune că dealul Toompea a fost ridicat de Linda în memoria soțului ei, Kalev.",
        "Fațada barocă roz datează din timpul domniei Ecaterinei cea Mare.",
        "A fost sediul guvernatorilor străini timp de secole.",
        "Curtea interioară a castelului este deschisă publicului în anumite ocazii."
      ],
      en: [
        "It houses the Parliament of Estonia, known as the Riigikogu.",
        "The 45.6-meter-tall Pikk Hermann tower is a key national symbol, where the Estonian flag is hoisted daily.",
        "The current parliament building was erected on the site of the castle's former eastern wing.",
        "The complex contains architectural elements dating from the 13th century to the present day.",
        "According to legend, Toompea hill was raised by the mythical heroine Linda as a burial mound for her husband, Kalev.",
        "The pink Baroque facade dates from the reign of Catherine the Great.",
        "For centuries, it was the seat of foreign rulers and governors in Estonia.",
        "The Governor's Garden on the southern slope of the castle is open to the public."
      ]
    },
    image: "/geo-images/estonia/toompea-castle.webp"
  },
  {
    id: "hist-tallinn-city-wall",
    type: "historical",
    parent: "ee-country",
    coords: [24.7451, 59.4387],
    name: {
      de: "Tallinner Stadtmauer",
      hu: "Tallinn városfala",
      ro: "Zidul orașului Tallinn",
      en: "Tallinn City Wall"
    },
    description: {
      de: "Die Tallinner Stadtmauer gehört zu den besterhaltenen mittelalterlichen Befestigungen Nordeuropas. Türme, Mauern und Toranlagen erzählen von der Hansezeit und von der strategischen Bedeutung der Stadt. Heute ist die Anlage ein starkes Argument für Kulturtourismus und historische Stadterkundung. Wer Tallinns Altstadt verstehen will, beginnt bei der Stadtmauer.",
      hu: "A tallinni városfal Észak-Európa egyik legjobban megőrzött középkori erődrendszere. Tornyok, falak és kapuk mesélnek a Hanza-korszakról és a város stratégiai fontosságáról. Ma az épületegyüttes erős vonzerő a kulturális turizmus és a történelmi városnézés számára. Tallinn óvárosának megértése a városfallal kezdődik.",
      ro: "Zidul orașului Tallinn este una dintre cele mai bine conservate fortificații medievale din nordul Europei. Turnurile, zidurile și porțile povestesc despre epoca hanseatică și importanța strategică a orașului. Astăzi, ansamblul este un argument puternic pentru turismul cultural și explorarea istorică a orașului. Pentru a înțelege centrul vechi al Tallinnului, trebuie început cu zidul orașului.",
      en: "Tallinn City Wall is one of the best-preserved medieval fortifications in Northern Europe. Its towers, walls, and gate structures tell the story of the Hanseatic era and the city's strategic importance. Today the complex is a strong draw for cultural tourism and historic city exploration. To understand Tallinn Old Town, start with the city wall."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Zidurile orașului Tallinn sunt printre cele mai impresionante și complete sisteme de fortificații medievale din Europa. Construite începând cu secolul al XIII-lea, au fost extinse și întărite constant timp de peste 300 de ani. Astăzi, aproape 2 kilometri de zid și 26 de turnuri de apărare încă stau în picioare, oferind o imagine vie a puterii și bogăției orașului hanseatic Reval. Vizitatorii pot urca pe porțiuni ale zidului, explorând turnuri precum Kiek in de Kök sau Hellemann, și pot admira priveliștile panoramice asupra acoperișurilor roșii din Orașul Vechi și a portului modern.",
      en: "The Tallinn city walls are among the most impressive and well-preserved medieval fortification systems in Europe. Construction began in the 13th century, and the walls were continuously expanded and strengthened for over 300 years. Today, nearly two kilometers of the original wall and 26 defensive towers still stand, offering a vivid picture of the power and wealth of the Hanseatic city of Reval. Visitors can walk along sections of the wall, explore towers like Kiek in de Kök and Hellemann, and admire panoramic views over the red-roofed Old Town and the modern harbor. The walls are a defining feature of Tallinn's UNESCO World Heritage site and a testament to its medieval past."
    },
    facts: {
      de: ["Teil des UNESCO-Altstadtbildes", "Mittelalterliche Wehranlage", "Prägend für die Skyline der Altstadt", "Beliebt bei Geschichts- und Architekturfans", "Ein Kernmotiv für Tallinn-Suchanfragen"],
      hu: ["Az UNESCO óváros része", "Középkori védműrendszer", "Meghatározza az óváros látképét", "Népszerű a történelem és építészet rajongóinak", "Fontos kulcstéma Tallinn-kereséseknél"],
      ro: ["Parte din centrul vechi UNESCO", "Fortificație medievală", "Definitorie pentru silueta orașului vechi", "Populară printre pasionații de istorie și arhitectură", "Temă centrală pentru căutările despre Tallinn"],
      en: ["Part of the UNESCO old town landscape", "Medieval defensive system", "Shapes the old town skyline", "Popular with history and architecture fans", "A core keyword for Tallinn searches"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Construcția a început în 1265, dar majoritatea structurii actuale datează din secolul al XIV-lea.",
        "La apogeu, zidul avea 46 de turnuri și o lungime de 4 kilometri.",
        "Turnul 'Kiek in de Kök' (Aruncă o privire în bucătărie) a fost numit așa datorită înălțimii sale.",
        "Poarta Viru, cu cele două turnuri gemene, este o intrare iconică în Orașul Vechi.",
        "Grosimea zidurilor variază până la 3 metri.",
        "Pasajele subterane ale bastionului conectează diferite părți ale fortificațiilor.",
        "Turnul 'Grubbs Margareeta' (Margareta cea Grasă) găzduiește acum Muzeul Maritim Estonian.",
        "O parte a zidului este deschisă publicului pentru plimbare între turnurile Nunne, Sauna și Kuldjala."
      ],
      en: [
        "Construction began in 1265, but most of the current structure dates from the 14th century.",
        "At its peak, the wall was nearly 4 kilometers long and had 46 towers.",
        "The 'Kiek in de Kök' tower's name means 'Peep into the Kitchen' in Low German, referring to its height.",
        "The iconic twin-towered Viru Gate serves as a picturesque entrance to the Old Town.",
        "The thickness of the walls varies, reaching up to 3 meters in some places.",
        "The bastion's underground passages connect different parts of the fortifications.",
        "The 'Fat Margaret' tower now houses the Estonian Maritime Museum.",
        "A section of the wall between the Nunne, Sauna, and Kuldjala towers is open to the public for a wall walk."
      ]
    },
    image: "/geo-images/estonia/tallinn-city-wall.webp"
  },
  {
    id: "hist-kuressaare-castle",
    type: "historical",
    parent: "ee-country",
    coords: [22.4895, 58.2519],
    name: {
      de: "Burg Kuressaare",
      hu: "Kuressaare vára",
      ro: "Castelul Kuressaare",
      en: "Kuressaare Castle"
    },
    description: {
      de: "Kuressaare Castle ist das bekannteste historische Bauwerk auf Saaremaa und ein Schlüsselobjekt der Inselgeschichte. Die Festung entstand im mittelalterlichen Machtgefüge des Baltikums und wurde über Jahrhunderte ausgebaut. Heute verbindet sie Museum, Stadtraum und touristische Inszenierung auf starke Weise. Für Saaremaa und westestnische Reiserouten ist das Schloss ein SEO-Magnet.",
      hu: "A Kuressaare-vár Saaremaa leghíresebb történelmi épülete és a sziget történetének kulcseleme. Az erőd a balti középkori hatalmi viszonyok között jött létre, majd évszázadokon át bővítették. Ma múzeumot, városi környezetet és turisztikai élményt kapcsol össze. Saaremaa és a nyugat-észt útvonalak számára a vár SEO-mágnes.",
      ro: "Castelul Kuressaare este cea mai cunoscută construcție istorică de pe Saaremaa și un element-cheie al istoriei insulei. Cetatea a apărut în contextul puterilor medievale din zona baltică și a fost extinsă timp de secole. Astăzi combină muzeul, spațiul urban și turismul într-un mod foarte vizibil. Pentru Saaremaa și rutele din vestul Estoniei, castelul este un magnet SEO.",
      en: "Kuressaare Castle is the best-known historic building on Saaremaa and a key piece of the island's history. The fortress emerged within the medieval power structure of the Baltic region and was expanded over centuries. Today it combines museum, urban space, and tourism in a very strong way. For Saaremaa and western Estonia travel routes, the castle is an SEO magnet."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Castelul Kuressaare este una dintre cele mai bine conservate fortificații medievale din statele baltice. Construit în secolul al XIV-lea ca reședință episcopală, castelul gotic târziu este remarcabil prin simplitatea și monumentalitatea sa. Este înconjurat de un șanț larg de apă, adăugând la caracterul său defensiv. Astăzi, interiorul castelului găzduiește Muzeul Saaremaa, care prezintă istoria și natura insulei. Vizitatorii pot explora sălile vaste, turnurile de apărare și pot admira priveliștea asupra orașului și a mării. Curtea castelului este adesea gazda unor evenimente culturale, concerte și festivaluri medievale.",
      en: "Kuressaare Castle, also known as Kuressaare Episcopal Castle, stands as one of the most impressive and well-preserved medieval fortifications in the Baltic states. Constructed in the late 14th century, this magnificent Gothic fortress is remarkable for its simple yet monumental form. It is surrounded by a wide moat, which enhances its defensive character and picturesque appeal. For centuries, it served as a residence for the bishops of Ösel–Wiek. Today, the castle's interior houses the Saaremaa Museum, which showcases the rich history and unique nature of the island. Visitors can explore its grand halls, climb the defensive towers for panoramic views of the town and sea, and immerse themselves in the medieval atmosphere. The castle courtyard frequently hosts cultural events, concerts, and the famous Saaremaa Opera Days."
    },
    facts: {
      de: ["Wichtigste Burg auf Saaremaa", "Mittelalterliche Ursprünge", "Heute Museum und Sehenswürdigkeit", "Prägt das Stadtzentrum von Kuressaare", "Beliebtes Motiv für Inselreisen"],
      hu: ["Saaremaa legfontosabb vára", "Középkori eredet", "Ma múzeum és látványosság", "Meghatározza Kuressaare központját", "Népszerű motívum a szigettúráknál"],
      ro: ["Cel mai important castel de pe Saaremaa", "Origini medievale", "Astăzi muzeu și atracție", "Definește centrul orașului Kuressaare", "Motiv popular pentru turismul insular"],
      en: ["Main castle on Saaremaa", "Medieval origins", "Now a museum and attraction", "Defines Kuressaare's center", "Popular motif for island trips"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Este considerat cel mai bine conservat castel episcopal din regiunea baltică.",
        "Construcția sa a început în jurul anului 1380.",
        "Nu a fost niciodată cucerit prin forță militară.",
        "Turnul de apărare Pikk Hermann oferă vederi panoramice.",
        "Găzduiește Muzeul Saaremaa, fondat în 1865.",
        "Legenda spune că un cavaler a fost zidit de viu într-unul dintre beciuri.",
        "Zidurile exterioare ale fortificațiilor au fost adăugate în secolele XVI-XVII.",
        "Anual, aici au loc Zilele Operei de pe Saaremaa, un festival renumit."
      ],
      en: [
        "It is considered the best-preserved episcopal castle in the Baltic region.",
        "Construction on the main structure began around 1380.",
        "The castle was never conquered by direct military force throughout its history.",
        "The main defense tower, Pikk Hermann, offers panoramic views of the surroundings.",
        "It houses the Saaremaa Museum, which was founded in 1865.",
        "A local legend tells of a knight who was walled up alive in the castle's cellar.",
        "The extensive outer fortifications and bastions were added during the 16th and 17th centuries.",
        "The castle courtyard is the main venue for the annual Saaremaa Opera Days festival."
      ]
    },
    image: "/geo-images/estonia/kuressaare-castle.webp"
  },
  {
    id: "hist-narva-hermann-castle",
    type: "historical",
    parent: "ee-country",
    coords: [28.1965, 59.3774],
    name: {
      de: "Hermannsfeste Narva",
      hu: "Narva Hermann vára",
      ro: "Castelul Hermann din Narva",
      en: "Narva Hermann Castle"
    },
    description: {
      de: "Narva Hermann Castle steht direkt an der Grenze und gehört zu den symbolisch stärksten historischen Orten Estlands. Die Festung blickt auf die russische Seite über den Fluss und erzählt von jahrhundertelanger Grenzgeschichte. Ihre Mauern verbinden Militärarchitektur, Machtpolitik und Stadtentwicklung auf engem Raum. Für Suchanfragen zu Grenzburgen und Ostseegeschichte ist Narva ein sehr starkes Keyword.",
      hu: "A Narva Hermann-vár közvetlenül a határon áll, és Észtország egyik legszimbolikusabb történelmi helye. Az erőd a folyó túloldalán lévő orosz oldalra tekint, és évszázados határtörténetet mesél. Falai katonai építészetet, hatalmi politikát és városfejlődést sűrítenek egy helyre. Határvárakra és balti történelemre irányuló kereséseknél Narva nagyon erős kulcsszó.",
      ro: "Castelul Hermann din Narva stă direct la graniță și este unul dintre cele mai simbolice locuri istorice din Estonia. Cetatea privește spre partea rusă a râului și spune povestea unei istorii de frontieră de secole. Zidurile sale reunesc arhitectura militară, politica puterii și dezvoltarea urbană într-un singur spațiu. Pentru căutările despre cetăți de frontieră și istoria baltică, Narva este un cuvânt-cheie foarte puternic.",
      en: "Narva Hermann Castle stands right on the border and is one of Estonia's most symbolic historic places. The fortress looks across the river toward the Russian side and tells a centuries-long border story. Its walls bring military architecture, power politics, and urban development together in one place. For searches about border fortresses and Baltic history, Narva is a very strong keyword."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Cetatea Hermann din Narva este un monument istoric de o importanță strategică excepțională, situat pe malul vestic al râului Narva, care formează granița cu Rusia. Construită inițial de danezi în secolul al XIII-lea, a fost extinsă de Ordinul Livonian. Turnul său principal, Pikk Hermann (Hermann cel Lung), domină peisajul. Cetatea formează un ansamblu arhitectural unic cu fortăreața Ivangorod de pe malul opus, rusesc, un memento vizual al istoriei conflictuale a regiunii. Astăzi, cetatea este un muzeu care explorează istoria orașului Narva și a relațiilor estono-ruse.",
      en: "Narva Hermann Castle is a mighty stone fortress and a powerful symbol of Estonia's complex history, standing guard on the eastern frontier. Directly facing its Russian counterpart, the Ivangorod Fortress, across the Narva River, it creates a unique and imposing architectural dialogue found nowhere else in Europe. This strategic location has been fortified since the 13th century, first by the Danes and later expanded by the Livonian Order. The castle's most dominant feature is the 51-meter-tall Tall Hermann tower, which offers commanding views over the border. Though heavily damaged in WWII, the castle has been extensively restored and now houses the Narva Museum, vividly bringing to life the centuries of military, political, and cultural history that have shaped this border city."
    },
    facts: {
      de: ["Direkt an der estnisch-russischen Grenze", "Bedeutendes Symbol von Narva", "Mittelalterliche Festung am Narva-Fluss", "Enge Verbindung zur Grenzgeschichte", "Wichtig für Ostseeraum-SEO"],
      hu: ["Közvetlenül az észt-orosz határon", "Narva fontos szimbóluma", "Középkori erőd a Narva folyónál", "Erős kapcsolat a határtörténettel", "Fontos kulcsszó a balti SEO-ban"],
      ro: ["Chiar la granița estono-rusă", "Simbol important al orașului Narva", "Cetate medievală pe râul Narva", "Legată strâns de istoria frontierei", "Cuvânt-cheie important pentru SEO-ul baltic"],
      en: ["Right on the Estonian-Russian border", "A major symbol of Narva", "Medieval fortress on the Narva River", "Closely tied to border history", "Important keyword for Baltic SEO"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Fondată în 1256 de danezi, extinsă ulterior de Ordinul Livonian.",
        "Ansamblul vizual cu fortăreața Ivangorod de peste râu este unic în Europa.",
        "A fost locul celebrei Bătălii de la Narva (1700) din timpul Marelui Război al Nordului.",
        "Turnul Pikk Hermann are o înălțime de 51 de metri.",
        "Găzduiește expoziții permanente și temporare ale Muzeului Narva.",
        "A fost grav avariată în Al Doilea Război Mondial și restaurată ulterior.",
        "Curtea de nord a cetății este transformată vara într-un centru de meșteșuguri istorice.",
        "Concerte și festivaluri au loc regulat în incinta cetății."
      ],
      en: [
        "Founded by the Danes around 1256, it was later controlled by the Livonian Order, Swedes, and Russians.",
        "The castle and the opposing Ivangorod Fortress create a one-of-a-kind architectural ensemble of rival powers.",
        "It was the stage for the famous Battle of Narva in 1700, a key engagement in the Great Northern War.",
        "The main tower, Tall Hermann, rises 51 meters and is a landmark of the city.",
        "Today, it is home to the Narva Museum, which details the 800-year history of the city.",
        "The castle was heavily damaged in World War II and has been the subject of extensive restoration work.",
        "In summer, the Northern Yard hosts a historical handicraft center, recreating 17th-century life.",
        "The grounds are a popular venue for concerts, festivals, and historical reenactments."
      ]
    },
    image: "/geo-images/estonia/narva-hermann-castle.webp"
  },
  {
    id: "hist-rakvere-castle",
    type: "historical",
    parent: "ee-country",
    coords: [26.3570, 59.3479],
    name: { de: "Rakvere-Burg", hu: "Rakvere vára", ro: "Castelul Rakvere", en: "Rakvere Castle" },
    description: {
      de: "Rakvere Castle ist eine markante Ruinenburg im Norden Estlands mit hohem Wiedererkennungswert. Die Anlage wirkt zugleich historisch und touristisch inszeniert und ist deshalb für Familien und Geschichtsinteressierte attraktiv. Die Burg erzählt von Ordenszeit, regionaler Macht und Grenzschutz im mittelalterlichen Estland. Als Suchbegriff funktioniert Rakvere hervorragend für historische und familienorientierte Reisen.",
      hu: "A Rakvere-vár látványos romvár Észak-Észtországban, erős felismerhetőséggel. Az épületegyüttes egyszerre történelmi és turisztikailag jól megkomponált, ezért családok és történelemkedvelők számára is vonzó. A vár a lovagrendi korszakról, a regionális hatalomról és a középkori határvédelemről mesél. Keresési szempontból Rakvere kiváló történelmi és családi utazási kulcsszó.",
      ro: "Castelul Rakvere este o ruină impresionantă din nordul Estoniei, foarte ușor de recunoscut. Ansamblul este în același timp istoric și bine pus în valoare turistic, fiind atractiv pentru familii și pasionații de istorie. Castelul povestește despre epoca ordinelor militare, puterea regională și apărarea granițelor în Estonia medievală. Ca termen de căutare, Rakvere funcționează excelent pentru turism istoric și de familie.",
      en: "Rakvere Castle is a striking ruined castle in northern Estonia with a strong visual identity. The site feels both historic and tourist-friendly, making it attractive to families and history lovers. The castle tells the story of the Teutonic era, regional power, and medieval border defense in Estonia. As a search term, Rakvere works very well for historical and family travel."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Cetatea Rakvere este o fortăreață medievală transformată într-un parc tematic interactiv, oferind o incursiune plină de viață în secolul al XVI-lea. Situată pe un deal care domină orașul Rakvere, cetatea permite vizitatorilor să participe la activități medievale, cum ar fi tirul cu arcul, ateliere de meșteșuguri și chiar să viziteze o cameră de tortură sau un laborator de alchimie. Atmosfera este animată de actori în costume de epocă. Este o destinație educativă și distractivă, perfectă pentru familii, care aduce la viață istoria Ordinului Livonian și a conflictelor din regiune.",
      en: "Rakvere Castle transports visitors back to the 16th century with its engaging and interactive approach to history. Perched atop a hill, these atmospheric ruins of a Livonian Order fortress are anything but sleepy. The castle operates as a medieval theme park where history comes alive. Visitors can immerse themselves in the past by trying on armor, learning archery, or testing their courage in the torture chamber and alchemy lab. Costumed actors and artisans populate the grounds, demonstrating crafts and sharing tales of a bygone era. It is an ideal destination for families and anyone looking for a dynamic, hands-on experience of medieval life, offering a fun and educational alternative to a traditional museum visit."
    },
    facts: {
      de: ["Bekannte Ruinenburg in Nordestland", "Starkes Familien- und Historikermotiv", "Erinnert an die Ordenszeit", "Teil des touristischen Markenbildes von Rakvere", "Gute Kombination aus Kultur und Erlebnis"],
      hu: ["Híres romvár Észak-Észtországban", "Erős családi és történelmi vonzerő", "A lovagrendi korszakra utal", "Rakvere turisztikai arculatának része", "Jó kombináció kultúrából és élményből"],
      ro: ["Ruine de castel cunoscută în nordul Estoniei", "Atracție puternică pentru familii și istorici", "Trimite la epoca ordinelor militare", "Parte din brandul turistic al orașului Rakvere", "Combinație bună între cultură și experiență"],
      en: ["Well-known ruined castle in northern Estonia", "Strong draw for families and history fans", "Recalls the Teutonic era", "Part of Rakvere's tourism brand", "A good mix of culture and experience"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Originile cetății datează din secolul al XIII-lea.",
        "A fost distrusă în timpul Războiului Polono-Suedez din 1600-1605.",
        "Parcul tematic recreează viața de zi cu zi a unui garnizoane din secolul al XVI-lea.",
        "Vizitatorii pot participa la turniruri de cavaleri și pot bate propriile monede.",
        "Statuia 'Tarvas' (Bourul), un simbol al orașului, se află la poalele dealului cetății.",
        "Găzduiește diverse evenimente, inclusiv concerte rock și festivaluri de muzică.",
        "Oferă programe educaționale speciale pentru școli.",
        "Cramele și taverna din incintă oferă mâncăruri și băuturi inspirate din Evul Mediu."
      ],
      en: []
    },
    image: "/geo-images/estonia/rakvere-castle.webp"
  },
  {
    id: "hist-padise-abbey",
    type: "historical",
    parent: "ee-country",
    coords: [24.1444, 59.2247],
    name: { de: "Padise-Kloster", hu: "Padise kolostor", ro: "Mănăstirea Padise", en: "Padise Abbey" },
    description: {
      de: "Padise Abbey ist eine der stimmungsvollsten historischen Klosteranlagen in Estland. Die Ruinen erinnern an die Zeit der Zisterzienser und an die Einbindung Estlands in die nordeuropäische Kirchenwelt. Der Ort liegt landschaftlich ruhig und eignet sich sehr gut für slow travel und Geschichtstourismus. Als SEO-Thema verbindet Padise Klosterarchitektur, Mittelalter und Naturumgebung.",
      hu: "A Padise kolostor Észtország egyik leghangulatosabb történelmi egyházi romja. A romok a ciszterci korszakra és Észtország észak-európai egyházi kapcsolataira emlékeztetnek. A hely csendes, tájképi környezetben fekszik, így kiváló slow travel és történelmi turizmus célpont. SEO-szempontból Padise az egyházi építészetet, a középkort és a természeti környezetet kapcsolja össze.",
      ro: "Mănăstirea Padise este unul dintre cele mai atmosferice ansambluri monastice istorice din Estonia. Ruinele amintesc de perioada cisterciană și de integrarea Estoniei în lumea religioasă din nordul Europei. Locul este situat într-un cadru liniștit și se potrivește foarte bine pentru slow travel și turism istoric. Ca subiect SEO, Padise leagă arhitectura monastică, Evul Mediu și peisajul natural.",
      en: "Padise Abbey is one of the most atmospheric historic monastic sites in Estonia. The ruins recall the Cistercian era and Estonia's place in the northern European church world. The site sits in a quiet landscape and works well for slow travel and history tourism. As an SEO topic, Padise connects monastic architecture, the Middle Ages, and natural surroundings."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Mănăstirea Padise, fondată de călugări cistercieni în secolul al XIV-lea, este un complex de ruine gotice impresionante. A servit atât ca centru religios, cât și ca fortăreață, jucând un rol important în istoria regiunii. După ce a fost abandonată în urma războaielor, structura sa a rămas o mărturie a arhitecturii medievale. Vizitatorii pot explora biserica principală, turnul, cramele și curtea interioară, simțind istoria care a modelat acest loc. Este o destinație perfectă pentru pasionații de istorie și fotografie, oferind un cadru dramatic și liniștit.",
      en: ""
    },
    facts: {
      de: ["Ehemaliges Zisterzienserkloster", "Wichtiger mittelalterlicher Klosterort", "Ruhige Lage im Westen Estlands", "Beliebt bei Kultur- und Slow-Travel-Gästen", "Starkes Motiv für Klostertourismus"],
      hu: ["Egykori ciszterci kolostor", "Fontos középkori egyházi hely", "Nyugodt fekvés Nyugat-Észtországban", "Népszerű a kultúra- és slow travel-rajongók körében", "Erős motívum a kolostorturizmusban"],
      ro: ["Fostă mănăstire cisterciană", "Loc monastic medieval important", "Așezare liniștită în vestul Estoniei", "Populară printre turiștii de cultură și slow travel", "Motiv puternic pentru turismul monastic"],
      en: ["Former Cistercian monastery", "Important medieval religious site", "Quiet setting in western Estonia", "Popular with culture and slow-travel visitors", "Strong motif for monastery tourism"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Construcția a început în secolul al XIV-lea și a durat aproape 200 de ani.",
        "A fost cea mai importantă mănăstire fortificată din nordul Estoniei.",
        "A fost distrusă în timpul Războiului Livonian în 1559.",
        "Turnul clopotniță oferă vederi asupra peisajului rural înconjurător.",
        "Găzduiește un centru de vizitare și un muzeu care prezintă istoria sa.",
        "În apropiere se află conacul Padise, construit ulterior din pietrele mănăstirii.",
        "Acustica ruinelor o face un loc popular pentru concerte de vară.",
        "Este un exemplu important de arhitectură gotică cisterciană în regiunea baltică."
      ],
      en: []
    },
    image: "/geo-images/estonia/padise-abbey.webp"
  },
  {
    id: "hist-koluvere-castle",
    type: "historical",
    parent: "ee-country",
    coords: [24.1180, 58.8329],
    name: { de: "Koluvere-Burg", hu: "Koluvere vára", ro: "Castelul Koluvere", en: "Koluvere Castle" },
    description: {
      de: "Koluvere Castle gehört zu den markanten historischen Gut- und Festungsanlagen Westestlands. Die Burg ist von Wasserläufen und einer ländlichen Landschaft umgeben, was ihr einen besonders malerischen Charakter gibt. Über die Jahrhunderte diente sie als Adelsresidenz, Verteidigungsort und regionales Symbol. Für SEO-Inhalte über estnische Schlösser ist Koluvere ein wertvoller Baustein.",
      hu: "A Koluvere-vár Nyugat-Észtország egyik jellegzetes történelmi birtok- és erődítményegyüttese. A várat vízfolyások és vidéki táj veszik körül, ami különösen festői karaktert ad neki. Az évszázadok során nemesi rezidenciaként, védelmi pontként és regionális szimbólumként is szolgált. Az észt kastélyokról szóló SEO-tartalmakban Koluvere értékes elem.",
      ro: "Castelul Koluvere este unul dintre cele mai distinctive ansambluri istorice de conac și fortificație din vestul Estoniei. Castelul este înconjurat de cursuri de apă și peisaj rural, ceea ce îi conferă un caracter foarte pitoresc. De-a lungul secolelor a servit ca reședință nobilă, punct defensiv și simbol regional. Pentru conținutul SEO despre castelele estoniene, Koluvere este o piesă valoroasă.",
      en: "Koluvere Castle is one of western Estonia's most distinctive historic manor and fortress complexes. It is surrounded by waterways and rural landscapes, which give it a particularly picturesque character. Over the centuries it served as a noble residence, a defensive site, and a regional symbol. For SEO content about Estonian castles, Koluvere is a valuable addition."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Castelul Koluvere, cunoscut și sub numele de Lohde, este un castel episcopal medieval situat idilic pe o insulă artificială. Cu o istorie care datează din secolul al XIII-lea, a fost martorul a numeroase conflicte și a schimbat proprietarii de mai multe ori, de la episcopi la familii nobiliare germano-baltice. Castelul este renumit pentru legenda sa romantică despre prințesa rusă Augusta, care a fost exilată aici de către Ecaterina cea Mare. Astăzi, cu turnurile sale pitorești și zidurile de piatră, funcționează ca un hotel și loc de evenimente, oferind o atmosferă istorică autentică.",
      en: ""
    },
    facts: {
      de: ["Historische Festung in Westestland", "Von Wasser und Landschaft geprägt", "Ehemaliger Adelssitz", "Starkes Motiv für Schlossrouten", "Malerisches Umfeld für Fototourismus"],
      hu: ["Történelmi erőd Nyugat-Észtországban", "Víz és táj veszi körül", "Egykori nemesi rezidencia", "Erős motívum kastélyútvonalakhoz", "Festői környezet fotóturizmushoz"],
      ro: ["Fortificație istorică în vestul Estoniei", "Definită de apă și peisaj", "Fostă reședință nobilă", "Motiv puternic pentru rute cu castele", "Cadru pitoresc pentru turism foto"],
      en: ["Historic fortress in western Estonia", "Shaped by water and landscape", "Former noble residence", "Strong motif for castle routes", "Picturesque setting for photo tourism"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost construit inițial în secolul al XIII-lea ca reședință fortificată a episcopului de Saare-Lääne.",
        "Este unul dintre cele mai mari și mai bine conservate castele-conac din Estonia.",
        "Legenda spune că fantoma prințesei Augusta bântuie castelul.",
        "A aparținut faimoasei familii nobiliare von Buxhoeveden.",
        "Complexul include un parc pitoresc și un lac.",
        "A fost folosit ca instituție de îngrijire în perioada sovietică.",
        "Astăzi este o locație populară pentru nunți și evenimente corporative.",
        "Râul Liivi curge prin domeniul castelului."
      ],
      en: []
    },
    image: "/geo-images/estonia/koluvere-castle.webp"
  },
  {
    id: "hist-sinimaed-battlefield",
    type: "historical",
    parent: "ee-country",
    coords: [27.7990, 59.3950],
    name: { de: "Sinimäed-Schlachtfeld", hu: "Sinimäed csatatér", ro: "Câmpul de luptă Sinimäed", en: "Sinimäed Battlefield" },
    description: {
      de: "Die Sinimäed-Höhen gehören zu den bekanntesten Kriegsschauplätzen des 20. Jahrhunderts in Estland. Der Ort ist stark mit den Frontkämpfen des Zweiten Weltkriegs verbunden und wird bis heute als historisches Erinnerungsgebiet wahrgenommen. Die Hügel geben der Landschaft eine markante Form und machen den Schauplatz auch geografisch interessant. Für Geschichts- und Gedenkturismus ist Sinimäed ein bedeutender Name.",
      hu: "A Sinimäed-dombok Észtország egyik legismertebb 20. századi hadszíntere. A helyszín erősen kötődik a második világháborús frontküzdelmekhez, és ma is történelmi emlékterületként él. A dombok markánssá teszik a tájat, ezért földrajzilag is érdekesek. A történelmi és emlékturizmus számára Sinimäed fontos név.",
      ro: "Înălțimile Sinimäed se numără printre cele mai cunoscute câmpuri de luptă ale secolului XX din Estonia. Locul este puternic asociat cu luptele de pe frontul celui de-al Doilea Război Mondial și este perceput ca zonă istorică de memorie. Colinele dau peisajului o formă distinctă și îl fac interesant și geografic. Pentru turismul istoric și memorial, Sinimäed este un nume important.",
      en: "The Sinimäed heights are among the best-known 20th-century battle sites in Estonia. The location is strongly tied to World War II front-line fighting and is still viewed as a historic memorial landscape. The hills give the area a distinct form and make it geographically interesting as well. For history and remembrance tourism, Sinimäed is an important name."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Dealurile Sinimäed (Dealurile Albastre) au fost scena unora dintre cele mai sângeroase bătălii de pe Frontul de Est în Al Doilea Război Mondial, în 1944. Cunoscute ca Bătălia de la Tannenberg Line, luptele au implicat trupe germane, inclusiv voluntari estonieni, împotriva Armatei Roșii. Astăzi, zona este un loc de comemorare, cu un monument și un muzeu dedicat acestor evenimente. Peisajul încă poartă cicatricile războiului, cu tranșee și cratere vizibile. Este un loc solemn care invită la reflecție asupra istoriei complexe și tragice a Estoniei în secolul XX.",
      en: ""
    },
    facts: {
      de: ["Bekannter Zweiter-Weltkrieg-Schauplatz", "Teil der Sinimäed-Höhen", "Wichtig für Erinnerungs- und Gedenktourismus", "Geografisch markante Hügellandschaft", "Eng verbunden mit Ostestland-Geschichte"],
      hu: ["Ismert második világháborús hadszíntér", "A Sinimäed dombok része", "Fontos emlékezet- és emlékturizmushoz", "Földrajzilag jellegzetes dombvidék", "Szorosan kapcsolódik Kelet-Észtország történetéhez"],
      ro: ["Câmp de luptă cunoscut din Al Doilea Război Mondial", "Parte din înălțimile Sinimäed", "Important pentru turismul memorial", "Peisaj deluros cu formă distinctă", "Legat strâns de istoria estului Estoniei"],
      en: ["Well-known World War II battlefield", "Part of the Sinimäed heights", "Important for remembrance tourism", "Geographically distinct hill landscape", "Closely tied to eastern Estonia's history"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Bătălia de la Sinimäed a durat din iulie până în august 1944.",
        "A fost una dintre cele mai costisitoare bătălii în termeni de vieți omenești de pe teritoriul estonian.",
        "Muzeul Sinimäed este situat într-un fost hambar al conacului Vaivara.",
        "Un monument în formă de cruce comemorează toți soldații care au luptat aici.",
        "Dealurile sunt formate din trei creste principale: Tornimägi, Põrguaugumägi și Pargimägi.",
        "Zona este un loc de pelerinaj anual pentru veterani și familiile lor.",
        "Peisajul este presărat cu rămășițe de buncăre și linii de apărare.",
        "Bătălia a încetinit ofensiva sovietică, permițând multor estonieni să fugă spre vest."
      ],
      en: []
    },
    image: "/geo-images/estonia/sinimaed-battlefield.webp"
  },
  {
    id: "land-kumu-art-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7994, 59.4377],
    name: {
      de: "Kumu-Kunstmuseum",
      hu: "Kumu Művészeti Múzeum",
      ro: "Muzeul de Artă Kumu",
      en: "Kumu Art Museum"
    },
    description: {
      de: "Das Kumu-Kunstmuseum ist das wichtigste Kunstmuseum Estlands und ein moderner Kulturanker in Tallinn. Das Gebäude selbst ist architektonisch auffällig und zieht Besucher sowohl wegen seiner Sammlung als auch wegen seines Designs an. Kumu zeigt estnische Kunst im europäischen Kontext und stärkt das Profil der Hauptstadt als Kulturort. Für SEO-Reisen nach Tallinn ist Kumu ein sehr starkes Landmark-Thema.",
      hu: "A Kumu Művészeti Múzeum Észtország legfontosabb művészeti múzeuma és Tallinn modern kulturális horgonya. Maga az épület is látványos, és a gyűjtemény mellett az építészet miatt is vonzza a látogatókat. A Kumu az észt művészetet európai összefüggésben mutatja be, és erősíti a főváros kulturális arculatát. Tallinn SEO-utazásainál a Kumu nagyon erős landmark téma.",
      ro: "Muzeul de Artă Kumu este cel mai important muzeu de artă din Estonia și o ancoră culturală modernă în Tallinn. Clădirea în sine este arhitectural remarcabilă și atrage vizitatori atât prin colecție, cât și prin design. Kumu prezintă arta estoniană în context european și întărește profilul capitalei ca oraș cultural. Pentru călătoriile SEO în Tallinn, Kumu este o temă foarte puternică.",
      en: "Kumu Art Museum is Estonia's most important art museum and a modern cultural anchor in Tallinn. The building itself is architecturally striking and attracts visitors for both its collection and its design. Kumu presents Estonian art in a European context and strengthens the capital's cultural profile. For Tallinn SEO travel, Kumu is a very strong landmark topic."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Muzeul de Artă Kumu, situat în parcul Kadriorg din Tallinn, este clădirea principală a Muzeului de Artă din Estonia și cel mai mare muzeu de artă din regiunea baltică. Arhitectura sa modernă, proiectată de Pekka Vapaavuori, este o operă de artă în sine. Kumu servește atât ca galerie națională, prezentând arta estoniană din secolul al XVIII-lea până în prezent, cât și ca un centru de artă contemporană, cu un program vibrant de expoziții internaționale. Include un auditoriu, o bibliotecă și un centru educațional, fiind un spațiu cultural complex și dinamic.",
      en: ""
    },
    facts: {
      de: ["Größtes Kunstmuseum Estlands", "Wichtiger Teil des Tallinn-Kulturtourismus", "Moderne Architektur am Kadriorg-Rand", "Stark für Kunst- und Design-SEO", "Zentrale Sammlung estnischer Kunst"],
      hu: ["Észtország legnagyobb művészeti múzeuma", "Tallinn kulturális turizmusának fontos része", "Modern építészet Kadriorg szélén", "Erős művészeti és design SEO-téma", "Az észt művészet központi gyűjteménye"],
      ro: ["Cel mai mare muzeu de artă din Estonia", "Parte importantă a turismului cultural din Tallinn", "Arhitectură modernă la marginea Kadriorg", "Temă SEO puternică pentru artă și design", "Colecție centrală de artă estoniană"],
      en: ["Estonia's largest art museum", "Key part of Tallinn cultural tourism", "Modern architecture on the edge of Kadriorg", "Strong art and design SEO topic", "Central collection of Estonian art"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost deschis în 2006 și a câștigat premiul Muzeul European al Anului în 2008.",
        "Numele 'Kumu' este o abreviere de la 'Kunstimuuseum' (Muzeu de Artă).",
        "Clădirea este construită într-o fostă carieră de calcar.",
        "Expozițiile permanente acoperă arta estoniană de la clasici la perioada sovietică și artă contemporană.",
        "Are o suprafață totală de peste 20.000 de metri pătrați.",
        "Este una dintre cele patru ramuri ale Muzeului de Artă din Estonia.",
        "Programul său include proiecții de filme, concerte și spectacole.",
        "Curtea sa interioară este un loc popular pentru evenimente în aer liber."
      ],
      en: []
    },
    image: "/geo-images/estonia/kumu-art-museum.webp"
  },
  {
    id: "land-estonian-national-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [26.7378, 58.3990],
    name: {
      de: "Estnisches Nationalmuseum",
      hu: "Észt Nemzeti Múzeum",
      ro: "Muzeul Național al Estoniei",
      en: "Estonian National Museum"
    },
    description: {
      de: "Das Estnische Nationalmuseum in Tartu ist ein modernes Leitmuseum für Geschichte, Identität und Alltagskultur. Das Gebäude steht auf einem ehemaligen Militärgelände und verbindet Erinnerung mit zeitgenössischer Architektur. Die Ausstellungen machen das Museum zu einem zentralen Anziehungspunkt in Südestland. Für Tartu und Kulturreisen ist es ein bedeutender SEO-Schlüsselbegriff.",
      hu: "Az Észt Nemzeti Múzeum Tartu egyik modern zászlóshajója a történelem, identitás és mindennapi kultúra bemutatásában. Az épület egykori katonai területen áll, így az emlékezetet kortárs építészettel kapcsolja össze. Kiállításai miatt a múzeum Dél-Észtország központi vonzereje. Tartu és a kulturális utazások szempontjából fontos SEO-kulcsszó.",
      ro: "Muzeul Național al Estoniei din Tartu este un muzeu modern de referință pentru istorie, identitate și cultură cotidiană. Clădirea se află pe un fost teren militar, combinând memoria cu arhitectura contemporană. Expozițiile îl transformă într-un punct central de atracție în sudul Estoniei. Pentru Tartu și turism cultural, este un cuvânt-cheie SEO major.",
      en: "The Estonian National Museum in Tartu is a modern flagship museum for history, identity, and everyday culture. The building stands on a former military site, blending memory with contemporary architecture. Its exhibitions make the museum a central attraction in southern Estonia. For Tartu and cultural travel, it is a major SEO keyword."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Muzeul Național Estonian (ERM) din Tartu este o instituție culturală fundamentală, dedicată păstrării istoriei, culturii populare și tradițiilor popoarelor fino-ugrice. Clădirea sa modernă, inaugurată în 2016, este o minune arhitecturală, proiectată să semene cu o pistă de decolare, simbolizând o rampă de lansare spre viitor. Expozițiile interactive explorează viața de zi cu zi a estonienilor de-a lungul secolelor, de la obiecte de uz casnic la evoluția limbii și a identității naționale. Este o experiență captivantă care oferă o înțelegere profundă a spiritului estonian.",
      en: ""
    },
    facts: {
      de: ["Wichtigstes Museum für Estlands Identität", "Modernes Wahrzeichen in Tartu", "Auf ehemaligem Militärgelände gebaut", "Starkes Ziel für Kulturreisen", "Zentral für Tartu-SEO"],
      hu: ["Észtország identitásának legfontosabb múzeuma", "Modern jelkép Tartutban", "Egykori katonai területre épült", "Erős célpont kulturális utazásokhoz", "Központi kulcsszó Tartu SEO-hoz"],
      ro: ["Cel mai important muzeu pentru identitatea Estoniei", "Reper modern în Tartu", "Construit pe un fost teren militar", "Destinație puternică pentru turism cultural", "Cuvânt-cheie central pentru SEO-ul din Tartu"],
      en: ["Estonia's key identity museum", "A modern landmark in Tartu", "Built on a former military site", "Strong destination for cultural travel", "Central keyword for Tartu SEO"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Fondat în 1909 pentru a păstra moștenirea lingvistului și folcloristului Jakob Hurt.",
        "Clădirea actuală are o lungime de 356 de metri.",
        "Este situat pe fosta pistă a unei baze aeriene sovietice.",
        "Expoziția permanentă 'Întâlniri' acoperă 11.000 de ani de istorie estoniană.",
        "Cealaltă expoziție permanentă, 'Ecoul Uralilor', este dedicată popoarelor fino-ugrice.",
        "Găzduiește o vastă colecție de costume populare estoniene.",
        "Include un cinematograf, un restaurant și un magazin de suveniruri.",
        "Designul clădirii a fost realizat de un trio de arhitecți din Paris: DGT Architects."
      ],
      en: []
    },
    image: "/geo-images/estonia/estonian-national-museum.webp"
  },
  {
    id: "land-seaplane-harbour",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7330, 59.4539],
    name: {
      de: "Wasserflugzeug-Hafen",
      hu: "Vízirepülőgép-kikötő",
      ro: "Portul Hidroavioanelor",
      en: "Seaplane Harbour"
    },
    description: {
      de: "Der Seaplane Harbour in Tallinn gehört zu den kreativsten Museumsstandorten im Ostseeraum. In den historischen Hangars werden Seefahrt, Technik und Militärgeschichte mit modernen Ausstellungen präsentiert. Die Lage am Wasser macht das Erlebnis besonders stark und fotogen. Für Familien, Technikfans und Tallinn-SEO ist der Ort äußerst wertvoll.",
      hu: "A tallinni Vízirepülőgép-kikötő a Balti-térség egyik legkreatívabb múzeumi helyszíne. A történelmi hangárokban a tengeri hajózás, a technika és a katonai történelem modern kiállításokkal jelenik meg. A vízparti fekvés különösen erőssé és fotóssá teszi az élményt. Családoknak, technika-rajongóknak és Tallinn SEO-nak nagyon értékes hely.",
      ro: "Portul Hidroavioanelor din Tallinn este unul dintre cele mai creative spații muzeale din zona baltică. În hangarele istorice, navigația, tehnologia și istoria militară sunt prezentate prin expoziții moderne. Amplasarea la apă face experiența deosebit de puternică și fotogenică. Pentru familii, pasionați de tehnică și SEO-ul din Tallinn, locul este foarte valoros.",
      en: "The Seaplane Harbour in Tallinn is one of the most creative museum sites in the Baltic region. Historic hangars present maritime, technical, and military history through modern exhibitions. The waterfront setting makes the experience especially strong and photogenic. For families, tech fans, and Tallinn SEO, the site is highly valuable."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Portul Hidroavioanelor (Lennusadam) este o ramură a Muzeului Maritim Estonian, găzduită în hangare istorice unice pentru hidroavioane. Aceste structuri din beton armat, construite în 1916-1917, au fost primele de acest fel din lume. Muzeul oferă o experiență interactivă, permițând vizitatorilor să exploreze interiorul submarinului Lembit din anii 1930, să admire epava unei nave vechi și să se joace cu simulatoare. Afară, în port, sunt ancorate nave istorice, inclusiv spărgătorul de gheață Suur Tõll. Este o atracție captivantă pentru toate vârstele, combinând istoria maritimă cu tehnologia modernă.",
      en: ""
    },
    facts: {
      de: ["Maritimes Spitzenmuseum in Tallinn", "Historische Hangars am Wasser", "Stark für Familien und Technikfans", "Wichtiger Fotostandort", "Beliebtes Tallinn-Landmark"],
      hu: ["Kiemelkedő tengeri múzeum Tallinnban", "Történelmi hangárok a vízparton", "Erős családi és technikai vonzerő", "Fontos fotóhelyszín", "Népszerű tallinni landmark"],
      ro: ["Muzeu marin de top în Tallinn", "Hangare istorice pe malul apei", "Atracție puternică pentru familii și tehnică", "Loc foarte bun pentru fotografii", "Landmark popular al Tallinnului"],
      en: ["Top maritime museum in Tallinn", "Historic hangars on the waterfront", "Strong for families and tech fans", "Important photo location", "Popular Tallinn landmark"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Găzduiește submarinul autentic Lembit, construit în Marea Britanie în 1936.",
        "Hangarele au fost proiectate de o firmă daneză și au fost o minune a ingineriei la vremea lor.",
        "A câștigat numeroase premii internaționale pentru designul său expozițional.",
        "Spărgătorul de gheață Suur Tõll, construit în 1914, este una dintre cele mai vechi nave de acest tip din lume.",
        "Oferă simulatoare de zbor și de navigație.",
        "Colecția include mine navale, tunuri și o replică a unui hidroavion Short Type 184.",
        "Este situat în cartierul creativ și maritim Kalamaja.",
        "Muzeul a fost redeschis în forma sa actuală în 2012."
      ],
      en: []
    },
    image: "/geo-images/estonia/seaplane-harbour.webp"
  },
  {
    id: "land-tallinn-tv-tower",
    type: "landmark",
    parent: "ee-country",
    coords: [24.8731, 59.4710],
    name: {
      de: "Tallinner Fernsehturm",
      hu: "Tallinni tévétorony",
      ro: "Turnul de televiziune Tallinn",
      en: "Tallinn TV Tower"
    },
    description: {
      de: "Der Tallinner Fernsehturm ist eines der sichtbarsten Wahrzeichen der Hauptstadt und ein starkes Aussichtsobjekt. Die Plattform eröffnet weite Blicke über Tallinn, den Finnischen Meerbusen und die bewaldete Umgebung. Gleichzeitig steht der Turm für moderne Technik und für die jüngere estnische Geschichte. Im SEO-Kontext ist er ein Schlüsselwort für Aussicht, Skyline und Tallinn.",
      hu: "A tallinni tévétorony a főváros egyik leglátványosabb jelképe és erős kilátóhelye. A kilátóplatform széles panorámát ad Tallinnra, a Finn-öbölre és az erdős környezetre. A torony egyben a modern technikát és az újabb észt történelmet is jelképezi. SEO-szempontból kulcsszó a panoráma, a skyline és Tallinn témákhoz.",
      ro: "Turnul de televiziune din Tallinn este unul dintre cele mai vizibile simboluri ale capitalei și un important punct de belvedere. Platforma oferă panorame largi asupra Tallinnului, Golfului Finlandei și împrejurimilor împădurite. În același timp, turnul simbolizează tehnologia modernă și istoria mai recentă a Estoniei. În SEO, este un cuvânt-cheie pentru panorame, skyline și Tallinn.",
      en: "The Tallinn TV Tower is one of the capital's most visible landmarks and a powerful viewpoint attraction. Its observation platform opens wide views over Tallinn, the Gulf of Finland, and the wooded surroundings. At the same time, the tower stands for modern engineering and Estonia's recent history. In SEO, it is a keyword for views, skyline, and Tallinn."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Turnul TV din Tallinn, cu o înălțime de 314 metri, este cea mai înaltă clădire din Estonia și un important simbol al independenței restaurate a țării. Construit pentru Jocurile Olimpice de la Moscova din 1980, a jucat un rol crucial în evenimentele din 1991, când apărătorii estonieni au protejat semnalul de radiodifuziune împotriva trupelor sovietice. Astăzi, oferă o platformă de observare la 170 de metri, cu vederi spectaculoase, o expoziție interactivă despre istoria sa și atracții pentru amatorii de adrenalină, cum ar fi plimbarea pe marginea exterioară a turnului.",
      en: ""
    },
    facts: {
      de: ["Hoher Aussichtsturm in Tallinn", "Blick über Stadt und Meer", "Symbol moderner estnischer Technik", "Beliebt bei Touristen und Familien", "Starkes Skyline-Motiv"],
      hu: ["Magas kilátótorony Tallinnban", "Kilátás a városra és a tengerre", "A modern észt technika szimbóluma", "Népszerű turisták és családok körében", "Erős skyline-motívum"],
      ro: ["Turn de belvedere înalt în Tallinn", "Vedere asupra orașului și mării", "Simbol al tehnologiei moderne estoniene", "Popular pentru turiști și familii", "Motiv puternic de skyline"],
      en: ["Tall viewpoint tower in Tallinn", "Views over city and sea", "Symbol of modern Estonian engineering", "Popular with tourists and families", "Strong skyline motif"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost deschis publicului în 1980.",
        "Este membru al Federației Mondiale a Marilor Turnuri.",
        "Platforma de observare are ferestre panoramice și podele de sticlă.",
        "Restaurantul situat la 175 de metri se rotește la 360 de grade.",
        "A fost închis pentru renovări majore și redeschis în 2012.",
        "Expoziția 'Genele' explorează realizările estonienilor celebri.",
        "Este un loc popular pentru evenimente, inclusiv sărituri cu parașuta.",
        "Designul său a fost inspirat de turnul TV din Stuttgart."
      ],
      en: []
    },
    image: "/geo-images/estonia/tallinn-tv-tower.webp"
  },
  {
    id: "land-kadriorg-art-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7910, 59.4379],
    name: {
      de: "Kadriorg-Kunstmuseum",
      hu: "Kadriorg Művészeti Múzeum",
      ro: "Muzeul de Artă Kadriorg",
      en: "Kadriorg Art Museum"
    },
    description: {
      de: "Das Kadriorg-Kunstmuseum ist in einem barocken Schlossumfeld untergebracht und ergänzt Tallinns Kunstlandschaft auf elegante Weise. Die Sammlung zeigt europäische Kunst in einem historischen Rahmen, der den Museumsbesuch besonders atmosphärisch macht. Der Ort verbindet Palastarchitektur, Parkanlage und Kultur auf sehr SEO-taugliche Weise. Für Tallinn-Kulturreisen ist Kadriorg ein starker Name.",
      hu: "A Kadriorg Művészeti Múzeum barokk palota környezetében működik, és elegánsan egészíti ki Tallinn művészeti világát. A gyűjtemény európai művészetet mutat be történelmi térben, így a látogatás különösen hangulatos. A helyszín ötvözi a palotaépítészetet, a parkot és a kultúrát, ami SEO-szempontból is erős. Tallinn kulturális utazásaihoz Kadriorg erős név.",
      ro: "Muzeul de Artă Kadriorg funcționează într-un cadru baroc de palat și completează elegant peisajul artistic al Tallinnului. Colecția prezintă artă europeană într-un decor istoric, ceea ce face vizita deosebit de atmosferică. Locul combină arhitectura de palat, parcul și cultura într-un mod foarte potrivit pentru SEO. Pentru turismul cultural din Tallinn, Kadriorg este un nume puternic.",
      en: "Kadriorg Art Museum is housed in a baroque palace setting and elegantly complements Tallinn's art landscape. The collection presents European art in a historic frame, making the visit especially atmospheric. The site combines palace architecture, parkland, and culture in a very SEO-friendly way. For Tallinn cultural travel, Kadriorg is a strong name."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Muzeul de Artă Kadriorg, situat în splendidul palat baroc construit de Petru cel Mare, este singurul muzeu din Estonia dedicat artei vechi europene și ruse. Palatul în sine, cu interioarele sale bogat decorate și tavanul pictat magnific din sala principală, este o atracție majoră. Colecția permanentă include picturi, sculpturi și artă aplicată din secolele XVI-XX. Vizitarea muzeului oferă o dublă experiență: o imersiune în arta maeștrilor europeni și o călătorie înapoi în timp, în opulența epocii țariste. Grădinile formale ale palatului completează perfect vizita.",
      en: ""
    },
    facts: {
      de: ["Barockes Museumsumfeld", "Teil des Kadriorg-Parks", "Europäische Kunst in historischem Rahmen", "Wichtig für Kunsttourismus in Tallinn", "Starkes Kultur-Keyword"],
      hu: ["Barokk múzeumi környezet", "A Kadriorg park része", "Európai művészet történelmi térben", "Fontos Tallinn művészeti turizmusában", "Erős kulturális kulcsszó"],
      ro: ["Cadru muzeal baroc", "Parte din parcul Kadriorg", "Artă europeană într-un spațiu istoric", "Important pentru turismul de artă din Tallinn", "Cuvânt-cheie cultural puternic"],
      en: ["Baroque museum setting", "Part of Kadriorg Park", "European art in a historic frame", "Important for Tallinn art tourism", "Strong cultural keyword"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Palatul a fost proiectat de arhitectul italian Niccolò Michetti.",
        "A fost conceput ca o reședință de vară pentru împărăteasa Ecaterina I a Rusiei.",
        "Este una dintre cele patru ramuri ale Muzeului de Artă din Estonia.",
        "Colecția include lucrări ale unor artiști precum Jacob Jordaens și Ilya Repin.",
        "Sala principală are un tavan pictat spectaculos cu teme mitologice.",
        "A fost deschis ca muzeu în 1921.",
        "După restaurări ample, a fost redeschis în anul 2000.",
        "Găzduiește concerte de muzică clasică și recepții oficiale."
      ],
      en: []
    },
    image: "/geo-images/estonia/kadriorg-art-museum.webp"
  },
  {
    id: "land-st-olafs-church",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7490, 59.4375],
    name: {
      de: "Olavkirche",
      hu: "Szent Olaf-templom",
      ro: "Biserica Sfântul Olaf",
      en: "St Olaf's Church"
    },
    description: {
      de: "St Olaf's Church ist eines der bekanntesten Gotteshäuser in Tallinn und ein starkes Symbol der Altstadt. Der Turm dominiert über weite Teile des historischen Zentrums und macht die Kirche zu einem klaren Landmark-Punkt. Sie steht für mittelalterliche Stadtkultur, Sakralarchitektur und den vertikalen Charakter der Skyline. Für Tallinn-Suchanfragen ist die Olavkirche extrem relevant.",
      hu: "A Szent Olaf-templom Tallinn egyik legismertebb temploma és az óváros erős szimbóluma. Tornya az egész történelmi központ fölé magasodik, így a templom világos landmark-pont. A középkori városi kultúrát, a szakrális építészetet és a skyline függőleges karakterét képviseli. Tallinn-kereséseknél az Olav-templom rendkívül releváns.",
      ro: "Biserica Sfântul Olaf este una dintre cele mai cunoscute biserici din Tallinn și un simbol puternic al centrului vechi. Turnul domină o mare parte din centrul istoric, făcând biserica un punct de reper clar. Reprezintă cultura urbană medievală, arhitectura sacră și caracterul vertical al skyline-ului. Pentru căutările despre Tallinn, biserica Olaf este extrem de relevantă.",
      en: "St Olaf's Church is one of Tallinn's best-known churches and a strong symbol of the old town. Its tower dominates much of the historic center, making it a clear landmark point. It represents medieval urban culture, sacred architecture, and the vertical character of the skyline. For Tallinn searches, St Olaf's is extremely relevant."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Biserica Sf. Olaf, cu turla sa impunătoare, este un punct de reper dominant în Orașul Vechi din Tallinn. Datând din secolul al XII-lea, se crede că a fost, la un moment dat, cea mai înaltă clădire din lume. Turnul său a servit ca un important punct de navigație pentru navele de pe Marea Baltică. Interiorul gotic este impresionant prin bolțile sale înalte și simplitatea sa. Astăzi, vizitatorii pot urca în turn pentru a se bucura de vederi panoramice excepționale asupra Orașului Vechi și a portului. Biserica este, de asemenea, un centru activ pentru comunitatea baptistă locală.",
      en: ""
    },
    facts: {
      de: ["Berühmte Kirche der Tallinner Altstadt", "Markanter hoher Turm", "Starkes Motiv für Skyline-Bilder", "Historisch mit Handelsstadt Tallinn verbunden", "Wichtiges Landmark für Stadtführungen"],
      hu: ["A tallinni óváros híres temploma", "Jellegzetes magas torony", "Erős skyline-fotó motívum", "Történelmileg kapcsolódik Tallinn kereskedővárosához", "Fontos landmark városnézésekhez"],
      ro: ["Biserică faimoasă din centrul vechi al Tallinnului", "Turn înalt și foarte vizibil", "Motiv puternic pentru imagini de skyline", "Legată istoric de orașul comercial Tallinn", "Landmark important pentru tururile orașului"],
      en: ["Famous church in Tallinn Old Town", "Distinctive tall tower", "Strong skyline photo motif", "Historically tied to Tallinn as a trading city", "Important landmark for city tours"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost probabil cea mai înaltă clădire din lume între 1549 și 1625.",
        "Turnul actual are 123.7 metri înălțime.",
        "A fost lovită de fulger de cel puțin 10 ori, ceea ce a dus la incendii majore.",
        "A fost folosită ca post de supraveghere de către KGB în perioada sovietică.",
        "Numele său este dedicat regelui Olaf al II-lea al Norvegiei.",
        "Platforma de vizitare este accesibilă urcând 232 de trepte.",
        "Capela Fecioarei Maria, adiacentă bisericii, are bolți stelate remarcabile.",
        "A fost menționată pentru prima dată în documente în 1267."
      ],
      en: []
    },
    image: "/geo-images/estonia/st-olafs-church.webp"
  },
  {
    id: "land-tartu-town-hall",
    type: "landmark",
    parent: "ee-country",
    coords: [26.7228, 58.3806],
    name: {
      de: "Rathaus Tartu",
      hu: "Tartu városháza",
      ro: "Primăria din Tartu",
      en: "Tartu Town Hall"
    },
    description: {
      de: "Das Tartu Town Hall ist eines der elegantesten Gebäude auf dem Rathausplatz und ein Kernstück der Innenstadt. Es repräsentiert die bürgerliche Geschichte der Universitätsstadt und ist zugleich ein wichtiges Fotomotiv. Der Platz rund um das Rathaus verbindet Gastronomie, Kultur und urbanes Leben auf engem Raum. Für Tartu-SEO ist das Rathaus ein zentraler Landmark-Begriff.",
      hu: "A Tartu városháza a főtér egyik legszebb épülete és a belváros kulcseleme. A város polgári történelmét képviseli, és egyben fontos fotómotívum is. A tér a városháza körül rövid távolságon belül ötvözi a gasztronómiát, a kultúrát és a városi életet. Tartu SEO-ban a városháza központi landmark-kifejezés.",
      ro: "Primăria din Tartu este una dintre cele mai elegante clădiri din piața centrală și un element-cheie al centrului orașului. Reprezintă istoria burgheză a orașului universitar și este totodată un subiect foto important. Piața din jurul primăriei combină gastronomia, cultura și viața urbană pe o suprafață mică. Pentru SEO-ul din Tartu, primăria este un termen landmark central.",
      en: "Tartu Town Hall is one of the most elegant buildings on the Town Hall Square and a core part of the city center. It represents the civic history of the university city and is also a major photo subject. The square around it combines food, culture, and urban life in a compact area. For Tartu SEO, the town hall is a central landmark keyword."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Primăria din Tartu, situată în piața centrală a orașului, este un exemplu remarcabil de arhitectură neoclasică cu elemente baroce. Clădirea actuală, a treia de pe acest loc, a fost finalizată în 1789. Turnul său găzduiește un carilon care cântă melodii estoniene la intervale regulate. Piața din fața primăriei, cu faimoasa sa fântână a 'Studenților care se sărută', este inima socială a orașului, un loc de întâlnire popular pentru localnici și turiști, înconjurat de cafenele și clădiri istorice. Este un simbol al administrației și al vieții civice din Tartu.",
      en: ""
    },
    facts: {
      de: ["Zentrum des Tartu-Rathauses", "Prägt den Rathausplatz", "Wichtiges Fotomotiv der Universitätsstadt", "Stark für Gastronomie- und Kultur-SEO", "Symbol des bürgerlichen Tartu"],
      hu: ["A Tartu főtér központi épülete", "Meghatározza a városháza teret", "Fontos fotómotívum az egyetemi városban", "Erős gasztronómiai és kulturális SEO-téma", "A polgári Tartu szimbóluma"],
      ro: ["Clădire centrală a Pieței Primăriei din Tartu", "Definește piața centrală", "Subiect foto important al orașului universitar", "Puternic pentru SEO de gastronomie și cultură", "Simbol al Tartu-ului burghez"],
      en: ["Centerpiece of Tartu Town Hall Square", "Defines the square", "Major photo subject in the university city", "Strong for food and culture SEO", "Symbol of civic Tartu"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost proiectată de arhitectul german Johann Heinrich Bartholomäus Walter.",
        "Clădirea găzduiește atât consiliul local, cât și un centru de informații turistice.",
        "Carilonul este format din 34 de clopote.",
        "Fântâna 'Studenții care se sărută' a fost instalată în 1998.",
        "Culoarea roz a fațadei este o caracteristică distinctivă.",
        "Piața a fost centrul comercial al orașului încă din Evul Mediu.",
        "În timpul iernii, piața găzduiește un patinoar și un târg de Crăciun.",
        "Clădirea este un exemplu al perioadei de reconstrucție după Marele Incendiu din Tartu din 1775."
      ],
      en: []
    },
    image: "/geo-images/estonia/tartu-town-hall.webp"
  },
  {
    id: "land-open-air-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [24.6578, 59.4525],
    name: {
      de: "Estnisches Freilichtmuseum",
      hu: "Észt Szabadtéri Múzeum",
      ro: "Muzeul Estonian în Aer Liber",
      en: "Estonian Open Air Museum"
    },
    description: {
      de: "Das Estnische Freilichtmuseum zeigt traditionelle ländliche Architektur und Alltagskultur in einer weitläufigen Anlage. Besucher erleben hier Bauernhöfe, Windmühlen und historische Wohnformen aus verschiedenen Regionen Estlands. Der Ort ist besonders stark für Familien, Schulgruppen und Kulturreisende. Als Landmark für Tallinn verbindet das Museum Bildung, Nostalgie und SEO-Wert.",
      hu: "Az Észt Szabadtéri Múzeum a hagyományos vidéki építészetet és mindennapi kultúrát mutatja be nagy területen. A látogatók különböző észt régiók parasztházait, szélmalmait és történelmi lakóformáit ismerhetik meg. A helyszín különösen erős családok, iskolai csoportok és kulturális utazók számára. Tallinn landmarkként a múzeum egyszerre oktató, nosztalgikus és SEO-értékű.",
      ro: "Muzeul Estonian în Aer Liber prezintă arhitectura rurală tradițională și cultura cotidiană într-un ansamblu extins. Vizitatorii descoperă gospodării, mori de vânt și forme istorice de locuire din diferite regiuni ale Estoniei. Locul este foarte potrivit pentru familii, grupuri școlare și turiști culturali. Ca landmark pentru Tallinn, muzeul combină educația, nostalgia și valoarea SEO.",
      en: "The Estonian Open Air Museum showcases traditional rural architecture and everyday culture in a large outdoor complex. Visitors see farmsteads, windmills, and historic living forms from different regions of Estonia. The place is especially strong for families, school groups, and cultural travelers. As a Tallinn landmark, the museum combines education, nostalgia, and SEO value."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Muzeul Estonian în Aer Liber, situat într-o zonă împădurită la marginea Tallinnului, este o reconstituire a unui sat rural estonian din secolele XVIII-XX. Pe o suprafață de 72 de hectare, muzeul prezintă peste 80 de clădiri autentice, inclusiv ferme, o biserică, o școală, un han și mori de vânt, toate aduse din diferite părți ale Estoniei. Vizitatorii pot vedea cum se desfășura viața la țară, pot participa la ateliere de meșteșuguri și pot asista la demonstrații. Evenimentele sezoniere, cum ar fi solstițiul de vară și târgurile de Crăciun, aduc la viață tradițiile estoniene.",
      en: ""
    },
    facts: {
      de: ["Freilichtmuseum bei Tallinn", "Zeigt ländliche estnische Architektur", "Beliebt bei Familien und Schulen", "Stark für Kultur- und Bildungs-SEO", "Großes Gelände mit historischen Bauten"],
      hu: ["Tallinn melletti szabadtéri múzeum", "Bemutatja a vidéki észt építészetet", "Népszerű családok és iskolák körében", "Erős kulturális és oktatási SEO", "Nagy terület történelmi épületekkel"],
      ro: ["Muzeu în aer liber lângă Tallinn", "Prezintă arhitectura rurală estoniană", "Popular printre familii și școli", "Puternic pentru SEO cultural și educațional", "Teren mare cu clădiri istorice"],
      en: ["Open-air museum near Tallinn", "Shows rural Estonian architecture", "Popular with families and schools", "Strong for culture and education SEO", "Large grounds with historic buildings"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Fondat în 1957, a fost deschis publicului în 1964.",
        "Reprezintă patru regiuni etnografice ale Estoniei: de vest, de nord, de sud și insulele.",
        "Biserica Sutlepa este una dintre cele mai vechi biserici din lemn din Estonia.",
        "Personalul muzeului poartă costume de epocă și interacționează cu vizitatorii.",
        "Hanul Kolu oferă mâncăruri tradiționale estoniene.",
        "Se pot face plimbări cu trăsura trasă de cai.",
        "Muzeul este situat în zona de coastă Rocca al Mare.",
        "Găzduiește un program bogat de evenimente pe tot parcursul anului."
      ],
      en: []
    },
    image: "/geo-images/estonia/open-air-museum.webp"
  }
];

export const estoniaNature: POI[] = [
  {
    id: "nat-saaremaa",
    type: "landmark",
    parent: "ee-country",
    coords: [22.5, 58.4],
    name: {
      de: "Saaremaa-Insel",
      hu: "Saaremaa-sziget",
      ro: "Insula Saaremaa",
      en: "Saaremaa Island"
    },
    description: {
      de: "Größte estnische Insel, Kuressaare-Burg.",
      hu: "Legnagyobb észt sziget, Kuressaare vár.",
      ro: "Cea mai mare insulă estoniană, castelul Kuressaare.",
      en: "Largest Estonian island, Kuressaare Castle."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Saaremaa, cea mai mare insulă a Estoniei, este un tărâm al liniștii, al naturii unice și al tradițiilor bine păstrate. Caracterizată de mori de vânt, case cu acoperiș de stuf și garduri de piatră, insula oferă o atmosferă rustică autentică. Atracțiile sale principale includ Castelul Episcopal din Kuressaare, craterul de meteorit de la Kaali și faleza Panga. Coasta sa variată, cu plaje izolate și stânci, alături de pădurile de ienupăr și orhideele sălbatice, fac din Saaremaa o destinație ideală pentru iubitorii de natură și pentru cei care caută o evadare din agitația urbană.",
      en: ""
    },
    facts: {
      de: ["Größte Insel Estlands", "Kuressaare-Burg"],
      hu: ["Észtország legnagyobb szigete", "Kuressaare vár"],
      ro: ["Cea mai mare insulă a Estoniei", "Castelul Kuressaare"],
      en: ["Largest island in Estonia", "Kuressaare Castle"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Este a patra cea mai mare insulă din Marea Baltică.",
        "Capitala sa, Kuressaare, este singurul oraș de pe insulă.",
        "Craterul Kaali este unul dintre cele mai accesibile cratere de impact din lume.",
        "Morile de vânt de la Angla sunt un simbol iconic al insulei.",
        "Are cea mai mare densitate de spa-uri pe cap de locuitor din lume.",
        "Aproximativ 40% din suprafața insulei este acoperită de păduri.",
        "Insula este renumită pentru berea sa artizanală și pâinea de secară.",
        "Parcul Național Vilsandi, renumit pentru păsări, este situat pe coasta de vest a insulei."
      ],
      en: []
    },
    image: "/geo-images/estonia/saaremaa.webp"
  },
  {
    id: "nat-hiiumaa",
    type: "landmark",
    parent: "ee-country",
    coords: [22.6, 58.9],
    name: {
      de: "Hiiumaa-Insel",
      hu: "Hiiumaa-sziget + Kõpu világítótorony",
      ro: "Insula Hiiumaa + farul Kõpu",
      en: "Hiiumaa Island + Kõpu Lighthouse"
    },
    description: {
      de: "Mit dem 1504 erbauten, zweitältesten Leuchtturm.",
      hu: "1504 második legrégebbi VT.",
      ro: "Cu farul din 1504, al doilea cel mai vechi.",
      en: "With the 1504 lighthouse, the second-oldest."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Hiiumaa, a doua cea mai mare insulă a Estoniei, este un paradis al liniștii și al naturii sălbatice. Este mai puțin populată și mai împădurită decât vecina sa, Saaremaa, oferind o senzație de izolare și pace. Insula este renumită pentru farurile sale istorice, în special Farul Kõpu, unul dintre cele mai vechi faruri funcționale din lume. Peisajul este divers, cu plaje lungi de nisip, dealuri și păduri de pini. Hiiumaa este un loc perfect pentru drumeții, ciclism și pentru a te bucura de umorul local distinctiv și de un ritm de viață relaxat.",
      en: ""
    },
    facts: {
      de: ["Leuchtturm von 1504", "Zweitältester Leuchtturm"],
      hu: ["1504-es világítótorony", "Második legrégebbi VT"],
      ro: ["Far din 1504", "Al doilea cel mai vechi far"],
      en: ["1504 lighthouse", "Second-oldest lighthouse"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Farul Kõpu, construit în 1531, este al treilea cel mai vechi far funcțional din lume.",
        "Peste 60% din insulă este acoperită de păduri.",
        "Peninsula Tahkuna este cunoscută pentru plajele sale de nisip.",
        "Dealul Crucilor (Ristimägi) este un loc memorial unde trecătorii lasă cruci făcute din crengi.",
        "Insula a fost formată în urma unui impact de meteorit acum 455 de milioane de ani.",
        "Kärdla este singurul oraș de pe insulă.",
        "Hiiumaa este o destinație populară pentru observarea păsărilor în timpul migrației.",
        "Festivalul de Muzică de Cameră din Hiiumaa este un eveniment cultural anual important."
      ],
      en: []
    },
    image: "/geo-images/estonia/hiiumaa-kopu-lighthouse.webp"
  },
  {
    id: "nat-soomaa",
    type: "landmark",
    parent: "ee-country",
    coords: [25.0, 58.5],
    name: {
      de: "Soomaa-Nationalpark",
      hu: "Soomaa NP",
      ro: "Parcul Național Soomaa",
      en: "Soomaa National Park"
    },
    description: {
      de: "Moorgebiet mit der Frühlingsflut als 'fünfte Jahreszeit'.",
      hu: "Mocsár 'ötödik évszak' tavaszi árvíz.",
      ro: "Mlaștină cu inundații de primăvară, 'al cincilea anotimp'.",
      en: "Bogland with spring floods, the 'fifth season'."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Parcul Național Soomaa, al cărui nume înseamnă 'Țara Mlaștinilor', este renumit pentru fenomenul său unic cunoscut sub numele de 'al cincilea anotimp'. În fiecare primăvară, topirea zăpezilor provoacă inundații masive, transformând pădurile și drumurile în căi navigabile, cel mai bine explorate cu canoe. Parcul este format din mlaștini întinse, păduri aluvionare și pajiști inundabile. Este un loc excepțional pentru a experimenta natura sălbatică, oferind trasee pe podețe de lemn peste mlaștini și oportunități de a observa fauna, inclusiv castori și păsări rare.",
      en: ""
    },
    facts: {
      de: ["Moorgebiet", "Fünfte Jahreszeit"],
      hu: ["Mocsárvidék", "Ötödik évszak"],
      ro: ["Mlaștină", "Al cincilea anotimp"],
      en: ["Bogland", "Fifth season"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost înființat în 1993 pentru a proteja mlaștinile, pajiștile și pădurile inundabile.",
        "Face parte din rețeaua de zone umede de importanță internațională Ramsar.",
        "Canoeing-ul în timpul 'celui de-al cincilea anotimp' este o atracție turistică majoră.",
        "Parcul găzduiește una dintre cele mai mari populații de castori din Estonia.",
        "Traseul de studiu Riisa, pe podețe de lemn, este unul dintre cele mai populare.",
        "Tradiția construirii de bărci scobite (haabjas) este încă vie în regiune.",
        "Este o zonă importantă pentru cuibăritul acvilei țipătoare mici.",
        "Vara, se pot face drumeții cu rachete de zăpadă speciale pentru mlaștini."
      ],
      en: []
    },
    image: "/geo-images/estonia/soomaa.webp"
  },
  {
    id: "nat-peipus",
    type: "lake",
    parent: "ee-country",
    coords: [27.5, 58.7],
    name: {
      de: "Peipussee",
      hu: "Peipus-tó",
      ro: "Lacul Peipus",
      en: "Lake Peipus"
    },
    description: {
      de: "Fünftgrößter See Europas an der russischen Grenze.",
      hu: "Európa 5. legnagyobb tava, orosz határnál.",
      ro: "Al cincilea cel mai mare lac european, la granița rusă.",
      en: "Europe's 5th-largest lake, on the Russian border."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Lacul Peipus, situat la granița dintre Estonia și Rusia, este al cincilea cel mai mare lac din Europa. Este format din trei părți: lacul principal (Peipus), lacul Pskov și un lac de legătură mai îngust, Lämmijärv. Malul estonian este renumit pentru satele sale de credincioși de rit vechi (staroveri), o comunitate cu tradiții unice. Regiunea este faimoasă pentru cultivarea cepei și pescuit. Plajele lungi de nisip, cum ar fi cea de la Kauksi, sunt destinații populare de vară. Lacul este, de asemenea, un loc istoric, fiind scena Bătăliei de pe Gheață din 1242.",
      en: ""
    },
    facts: {
      de: ["5. größter See Europas", "Russische Grenze"],
      hu: ["Európa 5. legnagyobb tava", "Orosz határ"],
      ro: ["Al 5-lea lac ca mărime din Europa", "Granița cu Rusia"],
      en: ["5th-largest lake in Europe", "Russian border"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Are o suprafață de 3.555 de kilometri pătrați.",
        "Adâncimea sa maximă este de 15.3 metri.",
        "Este un important centru de pescuit comercial, în special pentru biban și șalău.",
        "'Strada Cepei' este un traseu turistic de-a lungul malului, renumit pentru ceapa sa dulce.",
        "Comunitățile de credincioși de rit vechi și-au păstrat cultura și religia timp de secole.",
        "În timpul iernii, lacul îngheață și devine un loc popular pentru pescuit la copcă.",
        "Plaja de la Kauksi are dune de nisip care 'cântă' atunci când bate vântul.",
        "Este un habitat important pentru numeroase specii de păsări de apă."
      ],
      en: []
    },
    image: "/geo-images/estonia/peipus.webp"
  },
  {
    id: "nat-emajogi",
    type: "river",
    parent: "ee-country",
    coords: [26.73, 58.38],
    name: {
      de: "Emajõgi",
      hu: "Emajõgi folyó",
      ro: "Râul Emajõgi",
      en: "Emajõgi River"
    },
    description: {
      de: "Mutterfluss, der durch Tartu fließt.",
      hu: "Anya-folyó, Tartut szeli át.",
      ro: "Râul-mamă care traversează Tartu.",
      en: "The mother river flowing through Tartu."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Emajõgi, care înseamnă 'Râul Mamă', este unul dintre cele mai importante râuri din Estonia. Acesta leagă cele mai mari două lacuri ale țării, Võrtsjärv și Peipus. Râul traversează orașul Tartu, fiind o parte integrală a identității și peisajului acestuia. Malurile sale sunt locuri populare pentru plimbări și recreere. Emajõgi este navigabil pe aproape toată lungimea sa, permițând croaziere și transport. Bazinul său hidrografic este bogat în biodiversitate, cu pajiști inundabile și păduri care adăpostesc numeroase specii de plante și animale.",
      en: ""
    },
    facts: {
      de: ["Fließt durch Tartu", "Mutterfluss"],
      hu: ["Tartun áthalad", "Anya-folyó"],
      ro: ["Trece prin Tartu", "Râu-mamă"],
      en: ["Flows through Tartu", "Mother river"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "Are o lungime de 100 de kilometri.",
        "Este singurul râu complet navigabil din Estonia.",
        "Leagă lacul Võrtsjärv de lacul Peipus.",
        "Zona sa de deltă de la vărsarea în Peipus este o importantă arie naturală.",
        "În Tartu, este traversat de mai multe poduri, inclusiv podul cu arc Kaarsild.",
        "Nave istorice, precum barja 'Jõmmu', oferă croaziere pe râu.",
        "Este un coridor ecologic vital pentru migrația peștilor.",
        "Malurile sale găzduiesc diverse evenimente culturale și sportive."
      ],
      en: []
    },
    image: "/geo-images/estonia/emajogi.webp"
  },
  {
    id: "nat-vilsandi",
    type: "island",
    parent: "ee-country",
    coords: [21.85, 58.38],
    name: {
      de: "Vilsandi-Nationalpark",
      hu: "Vilsandi Nemzeti Park",
      ro: "Parcul Național Vilsandi",
      en: "Vilsandi National Park"
    },
    description: {
      de: "Čltester estnischer Nationalpark, Vogelinsel.",
      hu: "Észtország legrégebbi NP-je, madársziget.",
      ro: "Cel mai vechi parc național estonian, insulă a păsărilor.",
      en: "Estonia's oldest national park, a bird island."
    },
    descriptionAdvanced: {
      de: "",
      hu: "",
      ro: "Parcul Național Vilsandi, situat pe coasta de vest a insulei Saaremaa, este cea mai veche arie protejată din statele baltice. Acesta cuprinde insula Vilsandi și aproximativ 150 de insulițe stâncoase, fiind un paradis pentru observatorii de păsări și un sanctuar pentru foci. Parcul este renumit pentru coloniile sale de păsări de mare, în special eiderul comun, și pentru flora sa bogată, inclusiv numeroase specii de orhidee. Peisajul marin, cu insulele sale mici și apele limpezi, oferă oportunități excelente pentru plimbări cu barca și explorare. Este un loc de o frumusețe naturală excepțională și de o importanță ecologică majoră.",
      en: ""
    },
    facts: {
      de: ["Čltester Nationalpark Estlands", "Vogelinsel"],
      hu: ["Észtország legrégebbi NP-je", "Madársziget"],
      ro: ["Cel mai vechi parc național estonian", "Insulă a păsărilor"],
      en: ["Estonia's oldest national park", "Bird island"]
    },
    factsAdvanced: {
      de: [],
      hu: [],
      ro: [
        "A fost înființat ca rezervație ornitologică în 1910.",
        "Găzduiește cea mai mare colonie de foci gri din Estonia.",
        "Peste 247 de specii de păsări au fost înregistrate în parc.",
        "Farul Vilsandi, construit în 1809, este o atracție importantă.",
        "Este posibil să mergi pe jos până la insula Vilsandi la reflux, prin apă.",
        "Este inclus în programul UNESCO Omul și Biosfera.",
        "Aici se găsesc numeroase specii rare de plante protejate.",
        "Parcul este un loc excelent pentru a observa migrația de toamnă a păsărilor arctice."
      ],
      en: []
    },
    image: "/geo-images/estonia/vilsandi.webp"
  }
];

export const estoniaAllPoi: POI[] = [estoniaCountry, ...estoniaRegions, ...estoniaCities, ...estoniaCulture, ...estoniaNature];
