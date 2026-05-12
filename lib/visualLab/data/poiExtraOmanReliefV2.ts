import type { POI } from "./poi";

export const poiExtraOmanReliefV2: POI[] = [
  {
    id: "oman-al-hadschar-relief-v2",
    type: "mountain",
    parent: "OM-DA",
    coords: [57.3, 23.2],
    name: {
      de: "Al-Hadschar-Gebirge",
      hu: "Hadzsar-hegység",
      ro: "Munții Al Hajar",
      en: "Al Hajar Mountains"
    },
    description: {
      de: "Das Al-Hadschar-Gebirge ist das höchste Gebirge der östlichen Arabischen Halbinsel und trennt die Küstenebene vom Wüsteninneren.",
      hu: "A Hadzsar-hegység az Arab-félsziget keleti részének legmagasabb hegylánca, amely elválasztja a tengerpartot a sivatagi belső területektől.",
      ro: "Munții Al Hajar reprezintă cel mai înalt lanț muntos din estul Peninsulei Arabice, separând câmpia de coastă de deșertul interior.",
      en: "The Al Hajar Mountains are the highest mountain range in the eastern Arabian Peninsula, separating the coastal plain from the desert interior."
    },
    facts: {
      de: ["Erstreckt sich über 700 Kilometer.", "Beherbergt seltene arabische Leoparden.", "Wird in westliche und östliche Hajar unterteilt.", "Entstand durch ozeanische Krustenauffaltung."],
      hu: ["Több mint 700 kilométer hosszan nyúlik el.", "Ritka arab leopárdoknak ad otthont.", "Nyugati és keleti részre osztják.", "Óceáni kéreg felgyűrődésével keletkezett."],
      ro: ["Se întinde pe o lungime de peste 700 de kilometri.", "Găzduiește leoparzi arabi rari.", "Este împărțit în Hajarul de Est și de Vest.", "Format prin plierea scoarței oceanice."],
      en: ["Stretches for over 700 kilometers.", "Home to rare Arabian leopards.", "Divided into Western and Eastern Hajar.", "Formed by oceanic crust folding."]
    }, image: "/poi-images/oman-al-hadschar-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Hadschar-Gebirge erstreckt sich über 500 Kilometer durch den Norden Omans und die Vereinigten Arabischen Emirate. Es gliedert sich in den westlichen und den östlichen Hadschar, getrennt durch das Sumail-Tal. Das Gebirge entstand durch die Obduktion ozeanischer Kruste auf die arabische Platte während der späten Kreidezeit. Es beherbergt eine einzigartige Flora und Fauna, darunter den Arabischen Tahr. Die Region ist reich an Ophiolithen, Gesteinen aus dem Erdmantel, die hier an der Oberfläche liegen und Geologen aus aller Welt anziehen. Die traditionelle Landwirtschaft in den Gebirgstälern wird durch das Aflaj-Bewässerungssystem ermöglicht, das von der UNESCO zum Weltkulturerbe erklärt wurde. Terrassenfelder an den Hängen zeugen von jahrhundertealter landwirtschaftlicher Nutzung.",
      hu: "Az Al-Hadzsar-hegység több mint 500 kilométer hosszan húzódik Omán északi részén és az Egyesült Arab Emírségekben. A hegyláncot a Szumail-völgy osztja a nyugati és a keleti Hadzsarra. A hegység a késő kréta korban jött létre, amikor az óceáni kéreg a tektonikus mozgások során az Arab-lemezre tolódott. Egyedülálló növény- és állatvilágnak ad otthont, itt él például az arab tahr. A régió gazdag ofiolitokban, a földköpenyből származó kőzetekben, amelyek itt a felszínre kerültek és a világ minden tájáról vonzzák a geológusokat. A hegyvidéki völgyekben a hagyományos mezőgazdaságot az UNESCO Világörökség részét képező Aflaj-öntözőrendszer teszi lehetővé. A lejtőkön kialakított teraszos földek évszázados gazdálkodási kultúráról tanúskodnak.",
      ro: "Munții Al Hajar se întind pe o distanță de peste 500 de kilometri în nordul Omanului și în Emiratele Arabe Unite. Lanțul muntos este împărțit în Hajarul de Vest și Hajarul de Est de către Valea Sumail. Munții s-au format în Cretacicul târziu prin obducția crustei oceanice peste placa arabică. Găzduiesc o floră și o faună unică, inclusiv Tahrul Arab. Regiunea este bogată în ofiolite, roci din mantaua Pământului care sunt expuse la suprafață, atrăgând geologi din întreaga lume. Agricultura tradițională din văile montane este posibilă datorită sistemului de irigații Aflaj, un sit al Patrimoniului Mondial UNESCO. Câmpurile terasate de pe versanți sunt o mărturie a secolelor de utilizare agricolă.",
      en: "The Al Hajar Mountains stretch for over 500 kilometers across northern Oman and the United Arab Emirates. The range is divided into the Western and Eastern Hajar by the Sumail Valley. The mountains were formed during the Late Cretaceous period through the obduction of oceanic crust onto the Arabian Plate. They are home to unique flora and fauna, including the Arabian Tahr. The region is rich in ophiolites, which are sections of Earth's oceanic crust and upper mantle that have been uplifted and exposed, attracting geologists worldwide. Traditional agriculture in the mountain valleys is made possible by the Aflaj irrigation system, a UNESCO World Heritage site. Terraced fields on the slopes testify to centuries of agricultural use."
    },
    factsAdvanced: {
      de: ["Das Gebirge ist eine wichtige Quelle für Mineralien wie Kupfer und Chromit.", "Jebel Shams ist mit über 3.000 Metern der höchste Gipfel.", "Die Sumail-Lücke ist ein wichtiger tektonischer und geografischer Korridor.", "Das Klima variiert von Wüstenklima bis zu mediterranen Bedingungen in höheren Lagen.", "Die Felsritzungen in der Region sind Tausende von Jahren alt.", "Es ist eines der wenigen Gebiete auf der Welt mit freiliegenden Ophiolithen."],
      hu: ["A hegység fontos réz- és kromitforrás.", "A több mint 3000 méter magas Dzsebel Sammsz a legmagasabb csúcsa.", "A Szumail-átjáró fontos tektonikai és földrajzi folyosó.", "Az éghajlat a sivatagitól a magasabb régiókban a mediterránig terjed.", "A régió sziklarajzai több ezer évesek.", "Egyike a világ azon kevés helyeinek, ahol ofiolitok vannak a felszínen."],
      ro: ["Munții sunt o sursă importantă de minerale precum cuprul și cromitul.", "Jebel Shams este cel mai înalt vârf, cu peste 3.000 de metri.", "Coridorul Sumail este un important coridor tectonic și geografic.", "Clima variază de la deșertică la condiții mediteraneene la altitudini mai mari.", "Sculpturile rupestre din regiune au o vechime de mii de ani.", "Este una dintre puținele zone din lume cu ofiolite expuse."],
      en: ["The mountains are a significant source of minerals like copper and chromite.", "Jebel Shams is the highest peak, exceeding 3,000 meters.", "The Sumail Gap is a major tectonic and geographical corridor.", "The climate ranges from desert to Mediterranean conditions at higher altitudes.", "Rock carvings in the region are thousands of years old.", "It is one of the few places in the world with exposed ophiolites."]
    }
  },
  {
    id: "oman-rub-al-chali-relief-v2",
    type: "desert",
    parent: "OM-DH",
    coords: [54.5, 19.5],
    name: {
      de: "Rub al-Chali",
      hu: "Rub al-Háli",
      ro: "Rub al-Khali",
      en: "Rub' al Khali"
    },
    description: {
      de: "Die Rub al-Chali ist die größte zusammenhängende Sandwüste der Erde und bedeckt einen großen Teil des südlichen Omans.",
      hu: "A Rub al-Háli a Föld legnagyobb egybefüggő homoksivataga, amely Omán déli részének jelentős területét borítja.",
      ro: "Rub al-Khali este cel mai mare deșert de nisip continuu din lume, acoperind o mare parte din sudul Omanului.",
      en: "The Rub' al Khali is the largest contiguous sand desert in the world, covering a large part of southern Oman."
    },
    facts: {
      de: ["Bedeckt etwa 650.000 Quadratkilometer.", "Die Dünen können bis zu 250 Meter hoch werden.", "Wird auch das 'Leere Viertel' genannt.", "Das Klima ist extrem trocken und heiß."],
      hu: ["Körülbelül 650 000 négyzetkilométert fed le.", "A dűnék akár 250 méter magasak is lehetnek.", "Üres Negyednek is nevezik.", "Éghajlata rendkívül száraz és forró."],
      ro: ["Acoperă aproximativ 650.000 de kilometri pătrați.", "Dunele pot atinge înălțimi de până la 250 de metri.", "Este numit și 'Pătrarul Gol'.", "Clima este extrem de uscată și fierbinte."],
      en: ["Covers approximately 650,000 square kilometers.", "Dunes can reach heights of up to 250 meters.", "Also known as the 'Empty Quarter'.", "The climate is extremely dry and hot."]
    }, image: "/poi-images/oman-rub-al-chali-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Rub al-Chali, das „Leere Viertel“, ist die größte zusammenhängende Sandwüste der Welt und erstreckt sich über Teile von Saudi-Arabien, Oman, den VAE und dem Jemen. Ihre Fläche beträgt etwa 650.000 Quadratkilometer. Die Wüste ist bekannt für ihre massiven Sanddünen, die Höhen von bis zu 250 Metern erreichen können. Geologisch ist sie ein großes Sedimentbecken, das reich an Erdöl- und Erdgasvorkommen ist. Trotz der extremen ariden Bedingungen gibt es eine spärliche Vegetation und einige an die Wüste angepasste Tierarten. Historisch war die Rub al-Chali eine Barriere für den Handel, wurde aber von Beduinenstämmen auf alten Karawanenrouten durchquert. Archäologische Funde deuten auf ehemals feuchtere Perioden mit Seen und Flüssen hin.",
      hu: "A Rub al-Háli, az „Üres Negyed”, a világ legnagyobb összefüggő homoksivataga, amely Szaúd-Arábia, Omán, az EAE és Jemen területeire terjed ki. Területe körülbelül 650 000 négyzetkilométer. A sivatag masszív, akár 250 méteres magasságot is elérő homokdűnéiről ismert. Geológiailag egy hatalmas üledékes medence, amely gazdag kőolaj- és földgázlelőhelyekben. A szélsőségesen száraz körülmények ellenére gyér növényzet és néhány, a sivataghoz alkalmazkodott állatfaj megtalálható itt. Történelmileg a Rub al-Háli akadályt képezett a kereskedelem számára, de beduin törzsek ősi karavánutakon átszelték. Régészeti leletek arra utalnak, hogy korábban nedvesebb időszakok is voltak tavakkal és folyókkal.",
      ro: "Rub' al Khali, „Cartierul Gol”, este cel mai mare deșert de nisip continuu din lume, acoperind părți din Arabia Saudită, Oman, Emiratele Arabe Unite și Yemen. Suprafața sa este de aproximativ 650.000 de kilometri pătrați. Deșertul este cunoscut pentru dunele sale masive de nisip, care pot atinge înălțimi de până la 250 de metri. Din punct de vedere geologic, este un vast bazin sedimentar, bogat în zăcăminte de petrol și gaze naturale. În ciuda condițiilor aride extreme, există o vegetație rară și câteva specii de animale adaptate la deșert. Din punct de vedere istoric, Rub' al Khali a fost o barieră în calea comerțului, dar a fost traversat de triburi beduine pe vechi rute de caravană. Descoperirile arheologice indică perioade anterioare mai umede, cu lacuri și râuri.",
      en: "The Rub' al Khali, or 'Empty Quarter', is the largest contiguous sand desert in the world, covering parts of Saudi Arabia, Oman, the UAE, and Yemen. Its area is approximately 650,000 square kilometers. The desert is known for its massive sand dunes, which can reach heights of up to 250 meters. Geologically, it is a vast sedimentary basin rich in oil and natural gas reserves. Despite the extremely arid conditions, there is sparse vegetation and a few desert-adapted animal species. Historically, the Rub' al Khali was a barrier to trade but was traversed by Bedouin tribes on ancient caravan routes. Archaeological findings suggest former wetter periods with lakes and rivers."
    },
    factsAdvanced: {
      de: ["Die Wüste enthält Stern-, Längs- und Querdünen.", "Die Temperaturen können im Sommer 50°C überschreiten.", "Wilfred Thesiger durchquerte die Wüste in den 1940er Jahren.", "Die „Verlorene Stadt Ubar“ soll sich in dieser Region befunden haben.", "Die Sande haben eine charakteristische rötlich-orange Farbe.", "Es ist eines der erdölreichsten Gebiete der Welt."],
      hu: ["A sivatagban csillag-, hosszanti- és keresztirányú dűnék is találhatók.", "A hőmérséklet nyáron meghaladhatja az 50°C-ot.", "Wilfred Thesiger az 1940-es években kelt át a sivatagon.", "Az „elveszett Ubar városa” állítólag ezen a területen volt.", "A homok jellegzetes vöröses-narancssárga színű.", "A világ egyik kőolajban leggazdagabb területe."],
      ro: ["Deșertul conține dune în stea, longitudinale și transversale.", "Temperaturile pot depăși 50°C în timpul verii.", "Wilfred Thesiger a traversat deșertul în anii 1940.", "„Orașul pierdut Ubar” se presupune că s-a aflat în această regiune.", "Nisipurile au o culoare roșiatic-portocalie caracteristică.", "Este una dintre cele mai bogate regiuni petroliere din lume."],
      en: ["The desert contains star, longitudinal, and transverse dunes.", "Temperatures can exceed 50°C (122°F) in the summer.", "Wilfred Thesiger famously crossed the desert in the 1940s.", "The 'Lost City of Ubar' is believed to have been located in this region.", "The sands have a characteristic reddish-orange color.", "It is one of the most oil-rich regions in the world."]
    }
  },
  {
    id: "oman-jebel-samhan-relief-v2",
    type: "mountain",
    parent: "OM-DH",
    coords: [54.8, 17.2],
    name: {
      de: "Dschebel Samhan",
      hu: "Dzsebel-Szamhán",
      ro: "Jebel Samhan",
      en: "Jebel Samhan"
    },
    description: {
      de: "Der Dschebel Samhan ist ein bedeutender Gebirgszug in der Region Dhofar, der steil zur Küstenebene abfällt und ein wichtiges Naturschutzgebiet darstellt.",
      hu: "A Dzsebel-Szamhán a Dhofar régió egyik legfontosabb hegylánca, amely meredeken ereszkedik a part menti síkság felé, és fontos természetvédelmi terület.",
      ro: "Jebel Samhan este un lanț muntos major în regiunea Dhofar, coborând abrupt spre câmpia de coastă și fiind o importantă rezervație naturală.",
      en: "Jebel Samhan is a major mountain range in the Dhofar region, dropping steeply to the coastal plain and serving as a crucial nature reserve."
    },
    facts: {
      de: ["Der höchste Punkt liegt bei etwa 2.100 Metern.", "Ein Rückzugsort für den arabischen Leoparden.", "Umfasst ein 4.500 Quadratkilometer großes Reservat.", "Die Wolken des Monsuns erreichen oft die unteren Hänge."],
      hu: ["Legmagasabb pontja körülbelül 2100 méter.", "Az arab leopárd egyik utolsó menedéke.", "Egy 4500 négyzetkilométeres rezervátumot foglal magában.", "A monszun felhői gyakran elérik az alsó lejtőit."],
      ro: ["Cel mai înalt punct este la aproximativ 2.100 de metri.", "Un refugiu pentru leopardul arab.", "Include o rezervație de 4.500 de kilometri pătrați.", "Norii musonului ajung adesea pe pantele inferioare."],
      en: ["The highest point is at about 2,100 meters.", "A refuge for the Arabian leopard.", "Includes a 4,500 square kilometer reserve.", "Monsoon clouds often reach the lower slopes."]
    }, image: "/poi-images/oman-jebel-samhan-relief-v2.webp",
    descriptionAdvanced: {
      de: "Jebel Samhan ist ein Gebirgszug in der Region Dhofar im Süden Omans. Es ist Teil des Dhofar-Gebirges und erreicht eine Höhe von über 2.100 Metern. Das Gebiet ist als Jebel-Samhan-Naturreservat geschützt, das eines der letzten Refugien für den Arabischen Leoparden ist. Die Landschaft ist geprägt von einem hohen Kalksteinplateau, tiefen Schluchten und steilen Klippen. Während des sommerlichen Charif-Monsuns wird die Küstenseite des Gebirges in Nebel gehüllt, was zu einer einzigartigen Vegetation führt. Die Binnenseite bleibt trocken und wüstenähnlich. Die lokale Jebbali-Bevölkerung betreibt traditionell Viehzucht in der Region.",
      hu: "A Dzsebel Szamhán egy hegyvonulat Omán déli részén, a Dhofar régióban. A Dhofar-hegység része, magassága meghaladja a 2100 métert. A terület a Dzsebel Szamhán Természetvédelmi Terület részeként védett, amely az arab leopárd egyik utolsó menedéke. A tájat egy magas mészkőfennsík, mély szurdokok és meredek sziklák jellemzik. A nyári kharif monszun idején a hegység tengerparti oldala ködbe burkolózik, ami egyedülálló növényzetet eredményez. A belső oldal száraz és sivatagszerű marad. A helyi dzsebbáli lakosság hagyományosan állattenyésztéssel foglalkozik a régióban.",
      ro: "Jebel Samhan este un lanț muntos în regiunea Dhofar din sudul Omanului. Face parte din Munții Dhofar și atinge o altitudine de peste 2.100 de metri. Zona este protejată ca Rezervație Naturală Jebel Samhan, unul dintre ultimele refugii pentru leopardul arab. Peisajul este caracterizat de un platou înalt de calcar, canioane adânci și stânci abrupte. În timpul musonului de vară Khareef, partea de coastă a muntelui este învăluită în ceață, dând naștere unei vegetații unice. Partea interioară rămâne uscată și deșertică. Populația locală Jebbali practică în mod tradițional creșterea animalelor în regiune.",
      en: "Jebel Samhan is a mountain range in the Dhofar region of southern Oman. It is part of the Dhofar Mountains and reaches an altitude of over 2,100 meters. The area is protected as the Jebel Samhan Nature Reserve, which is one of the last refuges for the Arabian leopard. The landscape is characterized by a high limestone plateau, deep canyons, and steep cliffs. During the summer Khareef monsoon, the coastal side of the mountain is shrouded in mist, which gives rise to unique vegetation. The inland side remains dry and desert-like. The local Jebbali people traditionally practice livestock herding in the region."
    },
    factsAdvanced: {
      de: ["Das Reservat wurde 1997 zum Schutz des Arabischen Leoparden gegründet.", "Das Plateau besteht hauptsächlich aus Kalkstein aus dem Tertiär.", "Der Monsunnebel ist eine entscheidende Wasserquelle für die Flora.", "Neben Leoparden leben hier auch Wölfe, Hyänen und Steinböcke.", "Der Name „Samhan“ bedeutet auf Arabisch „der Nachsichtige“.", "Es gibt dramatische Aussichtspunkte mit Blick auf die Arabische See."],
      hu: ["A rezervátumot 1997-ben hozták létre az arab leopárd védelmére.", "A fennsík főként harmadidőszaki mészkőből áll.", "A monszunköd a növényzet létfontosságú vízforrása.", "A leopárdok mellett farkasok, hiénák és kőszáli kecskék is élnek itt.", "A „Szamhán” név arabul „elnézőt” jelent.", "Drámai kilátópontokról nyílik kilátás az Arab-tengerre."],
      ro: ["Rezervația a fost înființată în 1997 pentru a proteja leopardul arab.", "Platoul este format în principal din calcar terțiar.", "Ceața musonică este o sursă crucială de apă pentru floră.", "Pe lângă leoparzi, aici trăiesc și lupi, hiene și ibecși.", "Numele „Samhan” înseamnă „iertător” în arabă.", "Există puncte de belvedere dramatice cu vedere la Marea Arabiei."],
      en: ["The reserve was established in 1997 to protect the Arabian leopard.", "The plateau is mainly composed of Tertiary limestone.", "The monsoon mist is a crucial source of water for the flora.", "Besides leopards, wolves, hyenas, and ibex also live here.", "The name 'Samhan' in Arabic can mean 'the forgiving one'.", "There are dramatic viewpoints overlooking the Arabian Sea."]
    }
  },
  {
    id: "oman-jebel-qamar-relief-v2",
    type: "mountain",
    parent: "OM-DH",
    coords: [53.5, 16.8],
    name: {
      de: "Dschebel Qamar",
      hu: "Dzsebel-Kamar",
      ro: "Jebel Qamar",
      en: "Jebel Qamar"
    },
    description: {
      de: "Der 'Mondberg' ist ein markanter Gebirgszug im westlichen Dhofar, der direkt in den Indischen Ozean stürzt und spektakuläre Klippen bildet.",
      hu: "A 'Hold-hegység' egy látványos hegylánc Nyugat-Dhofarban, amely közvetlenül az Indiai-óceánba zuhan, drámai sziklafalakat alkotva.",
      ro: "Muntele Lunii este un lanț muntos proeminent în vestul Dhofarului, plonjând direct în Oceanul Indian și formând stânci spectaculoase.",
      en: "The 'Moon Mountain' is a prominent mountain range in western Dhofar, plunging directly into the Indian Ocean and forming spectacular cliffs."
    },
    facts: {
      de: ["Die steilen Klippen erheben sich direkt aus dem Meer.", "Die Berge fangen den Sommer-Monsunnebel ein.", "Heimat von Frankincense-Bäumen.", "Bietet enge Täler und Schluchten."],
      hu: ["A meredek sziklák közvetlenül a tengerből emelkednek ki.", "A hegyek felfogják a nyári monszun ködét.", "Tömjénfák természetes élőhelye.", "Szűk völgyeket és szurdokokat rejt."],
      ro: ["Stâncile abrupte se înalță direct din mare.", "Munții prind ceața musonului de vară.", "Locul de creștere a arborilor de tămâie.", "Prezintă văi înguste și defileuri."],
      en: ["Steep cliffs rise directly from the sea.", "The mountains catch the summer monsoon fog.", "Home to frankincense trees.", "Features narrow valleys and gorges."]
    }, image: "/poi-images/oman-jebel-qamar-relief-v2.webp",
    descriptionAdvanced: {
      de: "Jebel Qamar, das „Mondgebirge“, ist der westlichste Teil des Dhofar-Gebirges in Oman, nahe der Grenze zum Jemen. Die Berge fallen steil zur Küste der Arabischen See ab und bilden eine beeindruckende Landschaft aus Klippen und engen Tälern. Wie die anderen Gebirge der Region wird auch Jebel Qamar vom sommerlichen Charif-Monsun beeinflusst. Die nach Westen ausgerichteten Hänge fangen Feuchtigkeit auf und sind mit dichter Vegetation bedeckt, darunter Boswellia-Bäume, aus denen Weihrauch gewonnen wird. Die Region ist dünn besiedelt, und die Hauptwirtschaftsaktivität ist die traditionelle Viehzucht. Die geologische Struktur besteht hauptsächlich aus Kalkstein- und Sandsteinformationen.",
      hu: "A Dzsebel Qamar, a „Hold-hegység”, a Dhofar-hegység legnyugatibb része Ománban, közel a jemeni határhoz. A hegyek meredeken szakadnak le az Arab-tenger partjára, sziklák és szűk völgyek lenyűgöző táját alkotva. A régió többi hegységéhez hasonlóan a Dzsebel Qamart is befolyásolja a nyári kharif monszun. A nyugati fekvésű lejtők felfogják a nedvességet, és sűrű növényzet borítja őket, beleértve a tömjént adó Boswellia fákat is. A régió gyéren lakott, a fő gazdasági tevékenység a hagyományos állattenyésztés. A geológiai szerkezetet főként mészkő- és homokkő képződmények alkotják.",
      ro: "Jebel Qamar, „Munții Lunii”, este cea mai vestică parte a Munților Dhofar din Oman, aproape de granița cu Yemen. Munții coboară abrupt spre coasta Mării Arabiei, creând un peisaj impresionant de stânci și văi înguste. La fel ca și ceilalți munți din regiune, Jebel Qamar este influențat de musonul de vară Khareef. Versanții orientați spre vest captează umezeala și sunt acoperiți de vegetație densă, inclusiv arbori de Boswellia din care se extrage tămâia. Regiunea este slab populată, iar principala activitate economică este creșterea tradițională a animalelor. Structura geologică constă în principal din formațiuni de calcar și gresie.",
      en: "Jebel Qamar, the 'Mountains of the Moon', is the westernmost part of the Dhofar Mountains in Oman, near the border with Yemen. The mountains drop steeply to the Arabian Sea coast, creating a dramatic landscape of cliffs and narrow valleys. Like the other mountains in the region, Jebel Qamar is affected by the summer Khareef monsoon. The west-facing slopes catch moisture and are covered in dense vegetation, including Boswellia trees, the source of frankincense. The region is sparsely populated, with traditional livestock herding being the main economic activity. The geological structure consists mainly of limestone and sandstone formations."
    },
    factsAdvanced: {
      de: ["Das Gebiet ist ein wichtiges Zentrum für die Weihrauchproduktion.", "Die Berge erreichen Höhen von bis zu 1.500 Metern.", "Die Küstenstraße von Salalah nach Sarfait führt durch dieses Gebirge.", "Die Flora hier unterscheidet sich deutlich von der des trockeneren Landesinneren.", "Kamel- und Ziegenherden sind ein häufiger Anblick.", "Der Name „Mondgebirge“ könnte von den hellen Kalksteinfelsen stammen."],
      hu: ["A terület a tömjéntermelés fontos központja.", "A hegyek magassága eléri az 1500 métert.", "A Salalahból Sarfaitba vezető tengerparti út ezen a hegységen halad át.", "Az itteni növényzet jelentősen eltér a szárazabb belső területekétől.", "Gyakori látvány a teve- és kecskenyáj.", "A „Hold-hegység” elnevezés a világos mészkősziklákról eredhet."],
      ro: ["Zona este un centru important pentru producția de tămâie.", "Munții ating altitudini de până la 1.500 de metri.", "Drumul de coastă de la Salalah la Sarfait trece prin acești munți.", "Flora de aici este distinctă de cea din interiorul mai uscat al țării.", "Turmele de cămile și capre sunt o priveliște obișnuită.", "Numele „Munții Lunii” ar putea proveni de la stâncile calcaroase de culoare deschisă."],
      en: ["The area is an important center for frankincense production.", "The mountains reach altitudes of up to 1,500 meters.", "The coastal road from Salalah to Sarfait passes through these mountains.", "The flora here is distinct from that of the drier interior.", "Herds of camels and goats are a common sight.", "The name 'Mountains of the Moon' might come from the light-colored limestone cliffs."]
    }
  },
  {
    id: "oman-jebel-qara-relief-v2",
    type: "mountain",
    parent: "OM-DH",
    coords: [54.1, 17.1],
    name: {
      de: "Dschebel Qara",
      hu: "Dzsebel-Kara",
      ro: "Jebel Qara",
      en: "Jebel Qara"
    },
    description: {
      de: "Der Dschebel Qara umschließt die Stadt Salala wie ein Amphitheater und verwandelt sich während des Khareef-Monsuns in eine grüne, üppige Landschaft.",
      hu: "A Dzsebel-Kara amfiteátrumként öleli körbe Szalála városát, és a Khareef monszun idején zöld, buja tájjá változik.",
      ro: "Jebel Qara înconjoară orașul Salalah ca un amfiteatru, transformându-se într-un peisaj verde și luxuriant în timpul musonului Khareef.",
      en: "Jebel Qara forms an amphitheater around the city of Salalah, transforming into a green, lush landscape during the Khareef monsoon."
    },
    facts: {
      de: ["Erreicht Höhen von bis zu 1.000 Metern.", "Traditionelle Heimat von Kamelhirten.", "Besitzt zahlreiche versteckte Quellen und Höhlen.", "Eine natürliche Barriere zwischen Wüste und Meer."],
      hu: ["Magassága eléri az 1000 métert.", "Tevepásztorok hagyományos otthona.", "Számos rejtett forrást és barlangot rejt.", "Természetes határ a sivatag és a tenger között."],
      ro: ["Atinge înălțimi de până la 1.000 de metri.", "Căminul tradițional al păstorilor de cămile.", "Deține numeroase izvoare și peșteri ascunse.", "O barieră naturală între deșert și mare."],
      en: ["Reaches heights of up to 1,000 meters.", "Traditional home of camel herders.", "Holds numerous hidden springs and caves.", "A natural barrier between desert and sea."]
    },
    descriptionAdvanced: {
      de: "Jebel Qara ist ein Gebirgszug im südlichen Oman, der das zentrale Segment des Dhofar-Gebirges bildet. Er liegt zwischen Jebel Qamar im Westen und Jebel Samhan im Osten. Im Gegensatz zu den schroffen Gipfeln des Hadschar-Gebirges ist Jebel Qara eher ein sanft gewelltes Kalksteinplateau. Während des Charif-Monsuns von Juni bis September sind die nach Süden ausgerichteten Hänge in dichten Nebel gehüllt, der eine üppige, grüne Graslandschaft und dichte Wälder hervorbringt. Dieses Phänomen macht Salalah und seine Umgebung zu einem beliebten Touristenziel im Sommer. Die Region ist die Heimat der Jebbali-sprechenden Stämme, die traditionell Rinderzucht betreiben, was für die Arabische Halbinsel untypisch ist.",
      hu: "A Dzsebel Qara egy hegyvonulat Omán déli részén, amely a Dhofar-hegység központi szegmensét alkotja. A Dzsebel Qamar (nyugaton) és a Dzsebel Szamhán (keleten) között helyezkedik el. A Hadzsar-hegység zord csúcsaival ellentétben a Dzsebel Qara inkább egy enyhén hullámzó mészkőfennsík. A júniustól szeptemberig tartó kharif monszun idején a délre néző lejtőket sűrű köd borítja, amely buja, zöld legelőket és sűrű erdőket hoz létre. Ez a jelenség Salalahot és környékét nyáron népszerű turisztikai célponttá teszi. A régió a dzsebbáli nyelvet beszélő törzsek otthona, akik hagyományosan szarvasmarha-tenyésztéssel foglalkoznak, ami az Arab-félszigeten szokatlan.",
      ro: "Jebel Qara este un lanț muntos în sudul Omanului, formând segmentul central al Munților Dhofar. Se află între Jebel Qamar la vest și Jebel Samhan la est. Spre deosebire de vârfurile accidentate ale Munților Hajar, Jebel Qara este mai mult un platou de calcar ușor ondulat. În timpul musonului Khareef din iunie până în septembrie, versanții orientați spre sud sunt acoperiți de o ceață densă, care creează pajiști verzi luxuriante și păduri dese. Acest fenomen face din Salalah și împrejurimile sale o destinație turistică populară în timpul verii. Regiunea este locuită de triburile vorbitoare de limbă Jebbali, care practică în mod tradițional creșterea bovinelor, o practică atipică pentru Peninsula Arabică.",
      en: "Jebel Qara is a mountain range in southern Oman, forming the central segment of the Dhofar Mountains. It lies between Jebel Qamar to the west and Jebel Samhan to the east. Unlike the rugged peaks of the Hajar Mountains, Jebel Qara is more of a gently rolling limestone plateau. During the Khareef monsoon from June to September, its south-facing slopes are covered in dense fog, which creates a lush, green grassland and dense woodlands. This phenomenon makes Salalah and its surroundings a popular tourist destination in the summer. The region is home to the Jebbali-speaking tribes, who traditionally practice cattle herding, which is atypical for the Arabian Peninsula."
    },
    factsAdvanced: {
      de: ["Die Rinderzucht ist aufgrund des Monsuns in dieser Region möglich.", "Das Grab des Propheten Hiob (Nabi Ayoub) befindet sich auf dem Plateau.", "Die jährliche Niederschlagsmenge kann an den Hängen 200-400 mm erreichen.", "Die Region ist bekannt für die Produktion von hochwertigem Honig.", "Die Geologie wird von Kalkstein aus dem Eozän und Oligozän dominiert.", "Die Vegetation umfasst Anogeissus dhofarica, einen endemischen Baum."],
      hu: ["A szarvasmarha-tenyésztés a monszun miatt lehetséges ebben a régióban.", "Jób próféta (Nabi Ayoub) sírja a fennsíkon található.", "Az éves csapadékmennyiség elérheti a 200-400 mm-t a lejtőkön.", "A régió kiváló minőségű mézéről ismert.", "A geológiát az eocén és oligocén korú mészkő uralja.", "A növényzet magában foglalja az Anogeissus dhofarica endemikus fát."],
      ro: ["Creșterea bovinelor este posibilă în această regiune datorită musonului.", "Mormântul profetului Iov (Nabi Ayoub) este situat pe platou.", "Precipitațiile anuale pot ajunge la 200-400 mm pe versanți.", "Regiunea este cunoscută pentru producția de miere de înaltă calitate.", "Geologia este dominată de calcar din Eocen și Oligocen.", "Vegetația include Anogeissus dhofarica, un copac endemic."],
      en: ["Cattle herding is possible in this region due to the monsoon.", "The Tomb of the Prophet Job (Nabi Ayoub) is located on the plateau.", "Annual rainfall can reach 200-400 mm on the slopes.", "The region is known for producing high-quality honey.", "The geology is dominated by Eocene and Oligocene limestone.", "The vegetation includes Anogeissus dhofarica, an endemic tree."]
    }
  },
  {
    id: "oman-wadi-tiwi-relief-v2",
    type: "valley",
    parent: "OM-SH",
    coords: [59.25, 22.75],
    name: {
      de: "Wadi Tiwi",
      hu: "Wádi-Tiwi",
      ro: "Wadi Tiwi",
      en: "Wadi Tiwi"
    },
    description: {
      de: "Das Wadi Tiwi ist ein tiefes Flusstal, das für seine üppigen Bananen- und Dattelplantagen sowie steile Felswände bekannt ist.",
      hu: "A Wádi-Tiwi egy mély folyóvölgy, amely buja banán- és datolyaültetvényeiről, valamint meredek sziklafalairól híres.",
      ro: "Wadi Tiwi este o vale adâncă a unui râu, cunoscută pentru plantațiile sale luxuriante de banane și curmale și pentru pereții stâncoși abrupți.",
      en: "Wadi Tiwi is a deep river valley known for its lush banana and date plantations and steep rock walls."
    },
    facts: {
      de: ["Erstreckt sich über 36 Kilometer in die Berge.", "Neun traditionelle Dörfer liegen im Tal.", "Das Wasser fließt das ganze Jahr über.", "Die schmale Straße ist nur für Geländewagen geeignet."],
      hu: ["36 kilométer mélyen nyúlik be a hegyek közé.", "Kilenc hagyományos falu található a völgyben.", "A víz egész évben folyik benne.", "A keskeny út csak terepjárók számára alkalmas."],
      ro: ["Se întinde pe 36 de kilometri în munți.", "Nouă sate tradiționale se află în vale.", "Apa curge pe tot parcursul anului.", "Drumul îngust este potrivit doar pentru vehicule de teren."],
      en: ["Stretches for 36 kilometers into the mountains.", "Nine traditional villages are located in the valley.", "Water flows all year round.", "The narrow road is only suitable for off-road vehicles."]
    }, image: "/poi-images/oman-wadi-tiwi-relief-v2.webp",
    descriptionAdvanced: {
      de: "Wadi Tiwi ist eine tiefe und enge Schlucht im östlichen Hadschar-Gebirge, nahe der Küstenstadt Tiwi. Es ist bekannt für seine üppige grüne Landschaft mit zahlreichen Dattelpalmenhainen und landwirtschaftlichen Terrassen. Entlang des Wadis gibt es mehrere alte Dörfer und eine Kette von smaragdgrünen Wasserbecken, die zum Schwimmen einladen. Eine schmale, asphaltierte Straße schlängelt sich durch die Schlucht und bietet spektakuläre Ausblicke. Das Wadi ist ein beliebtes Ziel für Wanderer und Naturliebhaber. Das Wasser fließt das ganze Jahr über und speist das traditionelle Aflaj-Bewässerungssystem, das die Gärten und Plantagen am Leben erhält. Die Kombination aus steilen Felswänden, grüner Vegetation und klarem Wasser macht Wadi Tiwi zu einem der schönsten Wadis in Oman.",
      hu: "A Wadi Tiwi egy mély és szűk szurdok a Keleti-Hadzsar-hegységben, Tiwi tengerparti város közelében. Bőséges, zöld tájáról ismert, számos datolyapálma-ligettel és mezőgazdasági terasszal. A vádi mentén több ősi falu és smaragdzöld vizű medencék láncolata található, amelyek úszásra csábítanak. Egy keskeny, aszfaltozott út kanyarog a szurdokban, látványos kilátást nyújtva. A vádi népszerű célpont a túrázók és a természetbarátok körében. A víz egész évben folyik, táplálva a hagyományos Aflaj-öntözőrendszert, amely életben tartja a kerteket és ültetvényeket. A meredek sziklafalak, a zöld növényzet és a tiszta víz kombinációja a Wadi Tiwit Omán egyik legszebb vádijává teszi.",
      ro: "Wadi Tiwi este un defileu adânc și îngust în Munții Hajar de Est, lângă orașul de coastă Tiwi. Este cunoscut pentru peisajul său verde luxuriant, cu numeroase plantații de curmali și terase agricole. De-a lungul wadi-ului există mai multe sate vechi și un lanț de bazine cu apă de smarald, ideale pentru înot. Un drum asfaltat îngust șerpuiește prin defileu, oferind priveliști spectaculoase. Wadi-ul este o destinație populară pentru drumeți și iubitorii de natură. Apa curge pe tot parcursul anului, alimentând sistemul tradițional de irigații Aflaj, care menține în viață grădinile și plantațiile. Combinația dintre pereții stâncoși abrupți, vegetația verde și apa limpede face din Wadi Tiwi unul dintre cele mai frumoase wadi-uri din Oman.",
      en: "Wadi Tiwi is a deep and narrow gorge located in the Eastern Hajar Mountains, near the coastal town of Tiwi. It is known for its lush green landscape with numerous date palm groves and agricultural terraces. Along the wadi, there are several ancient villages and a chain of emerald-green water pools perfect for swimming. A narrow, paved road winds its way through the gorge, offering spectacular views. The wadi is a popular destination for hikers and nature lovers. Water flows year-round, feeding the traditional Aflaj irrigation system that sustains the gardens and plantations. The combination of steep cliffs, green vegetation, and clear water makes Wadi Tiwi one of the most beautiful wadis in Oman."
    },
    factsAdvanced: {
      de: ["Das Dorf Mibam am Ende des Wadis ist besonders malerisch.", "Bananen, Feigen und Papayas werden ebenfalls in den Gärten angebaut.", "Das Wadi ist etwa 36 km lang.", "Die Straße kann bei Regen unpassierbar werden.", "Es ist weniger überlaufen als das benachbarte Wadi Shab.", "Wadi Tiwi mündet in der Nähe des Dorfes Tiwi in den Golf von Oman."],
      hu: ["A vádi végén található Mibam falu különösen festői.", "A kertekben banánt, fügét és papayát is termesztenek.", "A vádi körülbelül 36 km hosszú.", "Az út esőzéskor járhatatlanná válhat.", "Kevésbé zsúfolt, mint a szomszédos Wadi Shab.", "A Wadi Tiwi Tiwi falu közelében ömlik az Ománi-öbölbe."],
      ro: ["Satul Mibam de la capătul wadi-ului este deosebit de pitoresc.", "În grădini se cultivă și banane, smochine și papaya.", "Wadi-ul are o lungime de aproximativ 36 km.", "Drumul poate deveni impracticabil în caz de ploaie.", "Este mai puțin aglomerat decât învecinatul Wadi Shab.", "Wadi Tiwi se varsă în Golful Oman lângă satul Tiwi."],
      en: ["The village of Mibam at the end of the wadi is particularly picturesque.", "Bananas, figs, and papayas are also grown in the gardens.", "The wadi is approximately 36 km long.", "The road can become impassable during rains.", "It is generally less crowded than the neighboring Wadi Shab.", "Wadi Tiwi meets the Gulf of Oman near the village of Tiwi."]
    }
  },
  {
    id: "oman-wadi-arbaeen-relief-v2",
    type: "valley",
    parent: "OM-MA",
    coords: [58.95, 23.05],
    name: {
      de: "Wadi al-Arbaeen",
      hu: "Wádi al-Arbain",
      ro: "Wadi al Arbaeen",
      en: "Wadi Al Arbeieen"
    },
    description: {
      de: "Dieses wilde Wadi zeichnet sich durch tiefe Süßwasserbecken, kleine Wasserfälle und zerklüftete Kalksteinformationen aus.",
      hu: "Ezt a vad vádi-t mély édesvizű medencék, kis vízesések és csipkézett mészkőalakzatok jellemzik.",
      ro: "Acest wadi sălbatic se caracterizează prin piscine adânci de apă dulce, mici cascade și formațiuni de calcar accidentate.",
      en: "This wild wadi is characterized by deep freshwater pools, small waterfalls, and rugged limestone formations."
    },
    facts: {
      de: ["Bekannt für seine dauerhaften Süßwasserbecken.", "Es gibt keine befestigten Straßen zum Ende des Tals.", "Umgeben von kargen, steilen Felswänden.", "Ein beliebter Ort zum Schwimmen und Klettern."],
      hu: ["Állandó édesvizű medencéiről ismert.", "Nincsenek aszfaltozott utak a völgy végéig.", "Kopár, meredek sziklafalak veszik körül.", "Népszerű hely úszásra és sziklamászásra."],
      ro: ["Cunoscut pentru piscinele sale permanente de apă dulce.", "Nu există drumuri asfaltate până la capătul văii.", "Înconjurat de pereți de stâncă golași și abrupți.", "Un loc popular pentru înot și alpinism."],
      en: ["Known for its permanent freshwater pools.", "There are no paved roads to the end of the valley.", "Surrounded by barren, steep rock walls.", "A popular spot for swimming and climbing."]
    },
    descriptionAdvanced: {
      de: "Wadi Al Arbeieen ist ein weiteres beeindruckendes Wadi im östlichen Hadschar-Gebirge. Es ist weniger erschlossen und touristisch als Wadi Shab oder Wadi Tiwi, was ihm einen raueren und authentischeren Charakter verleiht. Das Wadi ist bekannt für seine tiefen, klaren Wasserbecken, umgeben von Palmen und steilen Felswänden. Um die schönsten Stellen zu erreichen, sind oft Fahrten mit Allradfahrzeugen und Wanderungen erforderlich. Das Wasser fließt hier das ganze Jahr über und schafft eine Oase der Kühle in der trockenen Umgebung. Die Landschaft ist geprägt von einer Mischung aus rauen Felsen und üppiger Vegetation entlang des Wasserlaufs. Es ist ein idealer Ort für Abenteurer, die abseits der ausgetretenen Pfade nach unberührter Natur suchen.",
      hu: "A Wadi Al Arbeieen egy másik lenyűgöző vádi a Keleti-Hadzsar-hegységben. Kevésbé kiépített és turistás, mint a Wadi Shab vagy a Wadi Tiwi, ami vadabb és autentikusabb jelleget kölcsönöz neki. A vádi mély, tiszta vizű medencéiről ismert, amelyeket pálmafák és meredek sziklafalak vesznek körül. A legszebb helyek eléréséhez gyakran terepjáróra és túrázásra van szükség. A víz itt egész évben folyik, hűsítő oázist teremtve a száraz környezetben. A tájat a durva sziklák és a vízfolyás menti buja növényzet keveréke jellemzi. Ideális hely a kitaposott ösvényektől távol, érintetlen természetet kereső kalandorok számára.",
      ro: "Wadi Al Arbeieen este un alt wadi impresionant în Munții Hajar de Est. Este mai puțin dezvoltat și turistic decât Wadi Shab sau Wadi Tiwi, ceea ce îi conferă un caracter mai sălbatic și mai autentic. Wadi-ul este cunoscut pentru bazinele sale adânci cu apă limpede, înconjurate de palmieri și pereți stâncoși abrupți. Pentru a ajunge la cele mai frumoase locuri sunt adesea necesare vehicule 4x4 și drumeții. Apa curge aici pe tot parcursul anului, creând o oază de răcoare în mediul arid. Peisajul este caracterizat de un amestec de stânci aspre și vegetație luxuriantă de-a lungul cursului de apă. Este un loc ideal pentru aventurierii care caută natura neatinsă, departe de cărările bătătorite.",
      en: "Wadi Al Arbeieen is another impressive wadi in the Eastern Hajar Mountains. It is less developed and touristy than Wadi Shab or Wadi Tiwi, giving it a more rugged and authentic character. The wadi is known for its deep, clear water pools surrounded by palm trees and steep cliffs. Reaching the most beautiful spots often requires 4x4 vehicles and some hiking. Water flows here year-round, creating an oasis of cool in the arid surroundings. The landscape is characterized by a mix of rough rocks and lush vegetation along the watercourse. It's an ideal place for adventurers looking for untouched nature off the beaten path."
    },
    factsAdvanced: {
      de: ["Der Name bedeutet „Wadi der Vierzig“ auf Arabisch.", "Es gibt mehrere Wasserfälle, besonders nach Regenfällen.", "Das Wadi ist reich an Vögeln und kleinen Reptilien.", "Die Zufahrtsstraße ist teilweise eine Schotterpiste.", "Es ist ein beliebter Ort für Picknicks bei Einheimischen.", "Das Wadi liegt etwa 90 Minuten von Maskat entfernt."],
      hu: ["A neve arabul „a negyvenek vádija”.", "Több vízesés is található itt, különösen esőzések után.", "A vádi gazdag madarakban és kis hüllőkben.", "A bekötőút részben murvás.", "A helyiek körében népszerű piknikezőhely.", "A vádi körülbelül 90 percre van Maszkattól."],
      ro: ["Numele înseamnă „Wadi-ul celor Patruzeci” în arabă.", "Există mai multe cascade, în special după ploi.", "Wadi-ul este bogat în păsări și reptile mici.", "Drumul de acces este parțial un drum de pietriș.", "Este un loc popular pentru picnicuri printre localnici.", "Wadi-ul este situat la aproximativ 90 de minute de Muscat."],
      en: ["The name means 'Wadi of the Forty' in Arabic.", "There are several waterfalls, especially after rains.", "The wadi is rich in birdlife and small reptiles.", "The access road is partly a gravel track.", "It's a popular picnic spot for locals.", "The wadi is located about 90 minutes from Muscat."]
    }
  },
  {
    id: "oman-wadi-dayqah-relief-v2",
    type: "valley",
    parent: "OM-MA",
    coords: [58.85, 23.1],
    name: {
      de: "Wadi Dayqah",
      hu: "Wádi-Dajka",
      ro: "Wadi Dayqah",
      en: "Wadi Dayqah"
    },
    description: {
      de: "Das Wadi Dayqah ist eines der wasserreichsten Täler im Oman und speist den größten Staudamm des Landes mit ganzjährig fließendem Wasser.",
      hu: "A Wádi-Dajka Omán egyik legbővizűbb völgye, amely az ország legnagyobb gátját táplálja egész évben folyó vízzel.",
      ro: "Wadi Dayqah este una dintre cele mai bogate văi în apă din Oman, alimentând cel mai mare baraj al țării cu apă curgătoare pe tot parcursul anului.",
      en: "Wadi Dayqah is one of the most water-rich valleys in Oman, feeding the country's largest dam with water flowing all year round."
    },
    facts: {
      de: ["Der Wadi Dayqah Damm staut bis zu 100 Millionen Kubikmeter Wasser.", "Das Tal beherbergt über 100 Dörfer.", "Es ist eine wichtige Wasserquelle für die Hauptstadtregion.", "Die Felswände ragen steil über dem Flussbett auf."],
      hu: ["A Wádi-Dajka gát akár 100 millió köbméter vizet is képes visszatartani.", "A völgy több mint 100 falunak ad otthont.", "Fontos vízforrás a fővárosi régió számára.", "A sziklafalak meredeken magasodnak a folyómeder fölé."],
      ro: ["Barajul Wadi Dayqah poate reține până la 100 de milioane de metri cubi de apă.", "Valea adăpostește peste 100 de sate.", "Este o sursă importantă de apă pentru regiunea capitalei.", "Pereții de stâncă se înalță abrupt deasupra albiei râului."],
      en: ["The Wadi Dayqah Dam holds up to 100 million cubic meters of water.", "The valley is home to over 100 villages.", "It is an important water source for the capital region.", "The rock walls rise steeply above the riverbed."]
    }, image: "/poi-images/oman-wadi-dayqah-relief-v2.webp",
    descriptionAdvanced: {
      de: "Wadi Dayqah ist eines der größten Wadis in Oman, bekannt für seinen beeindruckenden Staudamm. Der Wadi Dayqah Damm wurde 2012 fertiggestellt, um die Region Qurayyat mit Wasser zu versorgen und Sturzfluten zu kontrollieren. Er hat einen riesigen Stausee geschaffen, der als „Teufelsschlucht“ bekannt ist und zu einem beliebten Ausflugsziel geworden ist. Das Wadi selbst erstreckt sich über viele Kilometer und besteht aus einem Netzwerk von Nebenflüssen, die aus dem östlichen Hadschar-Gebirge kommen. Oberhalb des Dammes behält das Wadi seinen natürlichen Charakter mit tiefen Becken und üppiger Vegetation. Der Damm und der See sind ein beeindruckendes Beispiel für moderne Ingenieurskunst inmitten einer rauen, natürlichen Landschaft.",
      hu: "A Wadi Dayqah Omán egyik legnagyobb vádija, amely lenyűgöző gátjáról ismert. A Wadi Dayqah-gátat 2012-ben fejezték be, hogy Qurayyat régióját vízzel lássa el és kontrollálja a hirtelen áradásokat. Egy hatalmas víztározót hozott létre, amelyet „az ördög hasadékaként” ismernek, és népszerű kirándulóhellyé vált. Maga a vádi sok kilométeren keresztül húzódik, és a Keleti-Hadzsar-hegységből érkező mellékfolyók hálózatából áll. A gát felett a vádi megőrzi természetes jellegét mély medencékkel és buja növényzettel. A gát és a tó a modern mérnöki tudomány lenyűgöző példája a zord, természetes táj közepén.",
      ro: "Wadi Dayqah este unul dintre cele mai mari wadi-uri din Oman, cunoscut pentru barajul său impresionant. Barajul Wadi Dayqah a fost finalizat în 2012 pentru a furniza apă regiunii Qurayyat și pentru a controla inundațiile fulgerătoare. A creat un lac de acumulare imens, cunoscut sub numele de „Defileul Diavolului”, care a devenit o destinație populară pentru excursii. Wadi-ul în sine se întinde pe mulți kilometri și constă dintr-o rețea de afluenți care vin din Munții Hajar de Est. Deasupra barajului, wadi-ul își păstrează caracterul natural, cu bazine adânci și vegetație luxuriantă. Barajul și lacul sunt un exemplu impresionant de inginerie modernă în mijlocul unui peisaj natural accidentat.",
      en: "Wadi Dayqah is one of the largest wadis in Oman, known for its impressive dam. The Wadi Dayqah Dam was completed in 2012 to supply water to the Qurayyat region and control flash floods. It has created a huge reservoir, known as the 'Devil's Gap', which has become a popular recreational spot. The wadi itself extends for many kilometers, consisting of a network of tributaries originating from the Eastern Hajar Mountains. Above the dam, the wadi retains its natural character with deep pools and lush vegetation. The dam and lake are an impressive example of modern engineering in the midst of a rugged, natural landscape."
    },
    factsAdvanced: {
      de: ["Der Damm ist 75 Meter hoch und 400 Meter lang.", "Der Stausee hat eine Kapazität von 100 Millionen Kubikmetern.", "Es gibt einen Park und Aussichtspunkte in der Nähe des Dammes.", "Das Projekt kostete etwa 45 Millionen Omani Rial.", "Das Wadi entwässert ein Einzugsgebiet von 1850 Quadratkilometern.", "Früher war das Wadi für seine gefährlichen Sturzfluten berüchtigt."],
      hu: ["A gát 75 méter magas és 400 méter hosszú.", "A víztározó kapacitása 100 millió köbméter.", "A gát közelében park és kilátópontok találhatók.", "A projekt körülbelül 45 millió ománi riálba került.", "A vádi 1850 négyzetkilométeres vízgyűjtő területtel rendelkezik.", "A vádi korábban a veszélyes hirtelen áradásairól volt hírhedt."],
      ro: ["Barajul are 75 de metri înălțime și 400 de metri lungime.", "Lacul de acumulare are o capacitate de 100 de milioane de metri cubi.", "Există un parc și puncte de belvedere în apropierea barajului.", "Proiectul a costat aproximativ 45 de milioane de riali omanezi.", "Wadi-ul drenează un bazin hidrografic de 1850 de kilometri pătrați.", "În trecut, wadi-ul era renumit pentru inundațiile sale fulgerătoare periculoase."],
      en: ["The dam is 75 meters high and 400 meters long.", "The reservoir has a capacity of 100 million cubic meters.", "There is a park and viewpoints near the dam.", "The project cost approximately 45 million Omani Rials.", "The wadi drains a catchment area of 1850 square kilometers.", "The wadi was previously notorious for its dangerous flash floods."]
    }
  },
  {
    id: "oman-wadi-bani-awf-relief-v2",
    type: "valley",
    parent: "OM-BA",
    coords: [57.45, 23.25],
    name: {
      de: "Wadi Bani Awf",
      hu: "Wádi Bani-Awf",
      ro: "Wadi Bani Awf",
      en: "Wadi Bani Awf"
    },
    description: {
      de: "Das Wadi Bani Awf ist ein spektakuläres, tief eingeschnittenes Tal im Hadschar-Gebirge, das für seine dramatischen Offroad-Strecken und die Schlangenschlucht bekannt ist.",
      hu: "A Wádi Bani-Awf egy látványos, mélyen bevágott völgy a Hadzsar-hegységben, amely drámai terepjárós útvonalairól és a Kígyó-szurdokról ismert.",
      ro: "Wadi Bani Awf este o vale spectaculoasă, adânc sculptată în Munții Hajar, cunoscută pentru traseele sale off-road dramatice și Canionul Șarpelui.",
      en: "Wadi Bani Awf is a spectacular, deeply carved valley in the Hajar Mountains, known for its dramatic off-road routes and Snake Gorge."
    },
    facts: {
      de: ["Verbindet die Batinah-Küste mit dem Landesinneren.", "Beherbergt die berühmte 'Snake Gorge' (Schlangenschlucht).", "Steile Abgründe säumen die unbefestigte Straße.", "Eine der anspruchsvollsten Fahrstrecken im Oman."],
      hu: ["Összeköti a Batinah-partot a belső területekkel.", "Itt található a híres 'Snake Gorge' (Kígyó-szurdok).", "Meredek szakadékok szegélyezik a földutat.", "Omán egyik legkihívóbb autós útvonala."],
      ro: ["Leagă coasta Batinah de interior.", "Găzduiește faimosul 'Snake Gorge' (Canionul Șarpelui).", "Abisuri abrupte mărginesc drumul neasfaltat.", "Unul dintre cele mai provocatoare trasee de condus din Oman."],
      en: ["Connects the Batinah coast with the interior.", "Home to the famous 'Snake Gorge'.", "Steep abysses line the unpaved road.", "One of the most challenging driving routes in Oman."]
    }, image: "/poi-images/oman-wadi-bani-awf-relief-v2.webp",
    descriptionAdvanced: {
      de: "Wadi Bani Awf ist bekannt als eines der spektakulärsten und anspruchsvollsten Wadis für Offroad-Fahrer im westlichen Hadschar-Gebirge. Die unbefestigte Straße, die das Wadi durchquert, führt über steile Pässe und durch enge Schluchten. Eine der Hauptattraktionen ist die Schlangenschlucht (Snake Canyon), eine schmale Kluft, die bei Canyoning-Enthusiasten beliebt ist. Das Wadi ist auch für seine malerischen Bergdörfer bekannt, wie das Dorf Bilad Sayt, das in einem weiten Tal liegt und von Terrassenfeldern umgeben ist. Die Geologie der Region ist komplex und umfasst verschiedene Felsformationen und Falten, die die tektonische Geschichte des Hadschar-Gebirges widerspiegeln. Die Durchquerung des Wadis ist ein Abenteuer, das eine sorgfältige Planung und ein geeignetes Fahrzeug erfordert.",
      hu: "A Wadi Bani Awf a Nyugati-Hadzsar-hegység egyik leglátványosabb és legnagyobb kihívást jelentő vádijaként ismert a terepjárósok körében. A vádin áthaladó kövezetlen út meredek hágókon és szűk szurdokokon vezet keresztül. Az egyik fő látványosság a Kígyó-kanyon (Snake Canyon), egy keskeny hasadék, amely népszerű a kanyoning szerelmesei körében. A vádi festői hegyi falvairól is ismert, mint például Bilad Sayt falu, amely egy széles völgyben fekszik, teraszos földekkel körülvéve. A régió geológiája összetett, különböző kőzetképződményeket és redőket foglal magában, amelyek a Hadzsar-hegység tektonikai történetét tükrözik. A vádin való átkelés egy kaland, amely gondos tervezést és megfelelő járművet igényel.",
      ro: "Wadi Bani Awf este cunoscut ca fiind unul dintre cele mai spectaculoase și provocatoare wadi-uri pentru șoferii de off-road din Munții Hajar de Vest. Drumul neasfaltat care traversează wadi-ul trece peste trecători abrupte și prin defileuri înguste. Una dintre principalele atracții este Canionul Șarpelui (Snake Canyon), o prăpastie îngustă populară printre pasionații de canyoning. Wadi-ul este, de asemenea, cunoscut pentru satele sale montane pitorești, cum ar fi satul Bilad Sayt, situat într-o vale largă și înconjurat de câmpuri terasate. Geologia regiunii este complexă, incluzând diverse formațiuni de rocă și cute care reflectă istoria tectonică a Munților Hajar. Traversarea wadi-ului este o aventură care necesită o planificare atentă și un vehicul adecvat.",
      en: "Wadi Bani Awf is renowned as one of the most spectacular and challenging wadis for off-road drivers in the Western Hajar Mountains. The unpaved road that traverses the wadi crosses steep passes and narrow gorges. One of its main attractions is the Snake Canyon, a narrow cleft popular with canyoning enthusiasts. The wadi is also known for its picturesque mountain villages, such as the village of Bilad Sayt, which is nestled in a wide valley surrounded by terraced fields. The geology of the region is complex, featuring various rock formations and folds that reflect the tectonic history of the Hajar Mountains. Traversing the wadi is an adventure that requires careful planning and a suitable vehicle."
    },
    factsAdvanced: {
      de: ["Die Straße erreicht am Sharaf Al Alamayn Pass eine Höhe von über 2.000 Metern.", "Bilad Sayt ist nur zu Fuß oder mit dem Esel erreichbar.", "Die Schlangenschlucht erfordert Schwimmen und Klettern.", "Die Route verbindet die Region Al Batinah mit Al Hamra.", "Es gibt mehrere Abschnitte, die nur für erfahrene Fahrer geeignet sind.", "Fossilien können in den Sedimentgesteinen gefunden werden."],
      hu: ["Az út a Sharaf Al Alamayn-hágónál eléri a 2000 méteres magasságot.", "Bilad Sayt csak gyalog vagy szamárháton közelíthető meg.", "A Kígyó-kanyon úszást és mászást igényel.", "Az útvonal összeköti Al Batinah régiót Al Hamrával.", "Több szakasza is csak tapasztalt sofőröknek ajánlott.", "Az üledékes kőzetekben fosszíliák találhatók."],
      ro: ["Drumul atinge o altitudine de peste 2.000 de metri în Pasul Sharaf Al Alamayn.", "Bilad Sayt este accesibil doar pe jos sau cu măgarul.", "Canionul Șarpelui necesită înot și cățărare.", "Traseul leagă regiunea Al Batinah de Al Hamra.", "Există mai multe secțiuni potrivite doar pentru șoferii experimentați.", "Fosilele pot fi găsite în rocile sedimentare."],
      en: ["The road reaches an altitude of over 2,000 meters at the Sharaf Al Alamayn pass.", "Bilad Sayt is accessible only by foot or donkey from the main track.", "The Snake Canyon requires swimming and climbing to traverse.", "The route connects the Al Batinah region with Al Hamra.", "There are several sections suitable only for experienced drivers.", "Fossils can be found within the sedimentary rock layers."]
    }
  },
  {
    id: "oman-jebel-misht-relief-v2",
    type: "mountain",
    parent: "OM-ZA",
    coords: [56.9, 23.25],
    name: {
      de: "Dschebel Mischt",
      hu: "Dzsebel-Mist",
      ro: "Jebel Misht",
      en: "Jebel Misht"
    },
    description: {
      de: "Der Dschebel Mischt ist ein gewaltiger Kalksteinblock, der wegen seiner beinahe vertikalen, bis zu 1.000 Meter hohen Südwand bei Kletterern weltweit berühmt ist.",
      hu: "A Dzsebel-Mist egy hatalmas mészkőtömb, amely közel függőleges, akár 1000 méter magas déli fala miatt világszerte híres a sziklamászók körében.",
      ro: "Jebel Misht este un bloc masiv de calcar, faimos în rândul alpiniștilor din întreaga lume pentru fața sa sudică aproape verticală, înaltă de până la 1.000 de metri.",
      en: "Jebel Misht is a massive limestone block, famous among rock climbers worldwide for its nearly vertical south face that is up to 1,000 meters high."
    },
    facts: {
      de: ["Die Südwand ist die höchste Steilwand der Arabischen Halbinsel.", "Wurde erstmals 1979 von französischen Kletterern bezwungen.", "Besteht aus massivem Jurakalk.", "Der Name bedeutet übersetzt 'Kamm-Berg'."],
      hu: ["A déli fal az Arab-félsziget legmagasabb sziklafala.", "Először 1979-ben mászták meg francia hegymászók.", "Masszív jura-kori mészkőből áll.", "A név jelentése: 'Fésű-hegy'."],
      ro: ["Fața sudică este cea mai înaltă stâncă abruptă din Peninsula Arabică.", "A fost escaladat pentru prima dată de alpiniști francezi în 1979.", "Este alcătuit din calcar masiv din Jurasic.", "Numele se traduce prin 'Muntele Pieptene'."],
      en: ["The south face is the highest sheer cliff in the Arabian Peninsula.", "First climbed by French mountaineers in 1979.", "Consists of massive Jurassic limestone.", "The name translates to 'Comb Mountain'."]
    }, image: "/poi-images/oman-jebel-misht-relief-v2.webp",
    descriptionAdvanced: {
      de: "Jebel Misht ist einer der markantesten Berge im westlichen Hadschar-Gebirge, nahe der Stadt Al Hamra. Sein Name bedeutet „Kamm-Berg“, was auf seine gezackte Silhouette anspielt. Der Berg ist geologisch von großer Bedeutung, da er ein riesiger exotischer Kalksteinblock ist, der während der Gebirgsbildung über andere Gesteinsschichten geschoben wurde. Seine fast senkrechte Südostwand ist über 1.000 Meter hoch und ein bekanntes Ziel für Felskletterer aus aller Welt, die sie als „die größte Wand Arabiens“ bezeichnen. Die Besteigung ist extrem anspruchsvoll. Die Umgebung des Berges ist trocken und felsig, typisch für die Ausläufer des Hadschar-Gebirges. Jebel Misht ist ein beeindruckendes Beispiel für die gewaltigen tektonischen Kräfte, die die Landschaft Omans geformt haben.",
      hu: "A Dzsebel Misht az egyik legjellegzetesebb hegy a Nyugati-Hadzsar-hegységben, Al Hamra város közelében. Neve „fésű-hegyet” jelent, ami a fogazott sziluettjére utal. A hegy geológiailag nagy jelentőségű, mivel egy hatalmas, egzotikus mészkőtömb, amelyet a hegységképződés során más kőzetrétegekre toltak rá. Majdnem függőleges, több mint 1000 méter magas délkeleti fala a világ minden tájáról vonzza a sziklamászókat, akik „Arábia legnagyobb falának” nevezik. Megmászása rendkívül nagy kihívást jelent. A hegy környezete száraz és sziklás, jellemző a Hadzsar-hegység lábánál elterülő vidékre. A Dzsebel Misht lenyűgöző példája azoknak a hatalmas tektonikai erőknek, amelyek Omán táját formálták.",
      ro: "Jebel Misht este unul dintre cei mai remarcabili munți din Munții Hajar de Vest, lângă orașul Al Hamra. Numele său înseamnă „Muntele Pieptene”, o aluzie la silueta sa zimțată. Muntele are o mare importanță geologică, fiind un bloc masiv de calcar exotic care a fost împins peste alte straturi de rocă în timpul formării munților. Peretele său sud-estic, aproape vertical, are o înălțime de peste 1.000 de metri și este o destinație renumită pentru alpiniștii din întreaga lume, care îl numesc „cel mai mare perete din Arabia”. Escaladarea sa este extrem de dificilă. Zona înconjurătoare a muntelui este aridă și stâncoasă, tipică pentru poalele Munților Hajar. Jebel Misht este un exemplu impresionant al forțelor tectonice masive care au modelat peisajul Omanului.",
      en: "Jebel Misht is one of the most distinctive mountains in the Western Hajar range, located near the town of Al Hamra. Its name means 'Comb Mountain', alluding to its serrated silhouette. The mountain is of great geological importance as it is a huge, exotic block of limestone that was thrust over other rock layers during the mountain-building process. Its near-vertical southeast face is over 1,000 meters high and is a renowned destination for rock climbers from around the world, who refer to it as 'the biggest wall in Arabia'. The climb is extremely challenging. The area surrounding the mountain is arid and rocky, typical of the foothills of the Hajar Mountains. Jebel Misht stands as an impressive example of the massive tectonic forces that have shaped Oman's landscape."
    },
    factsAdvanced: {
      de: ["Jebel Misht ist Teil der Hawasina-Decken.", "Die erste dokumentierte Besteigung der Südostwand war 1979.", "Der Gipfel liegt auf etwa 2.090 Metern Höhe.", "Der Fels besteht aus Kalkstein aus der Perm- und Triaszeit.", "Der Berg ist aus der Ferne von der Straße nach Nizwa gut sichtbar.", "Die Umgebung ist reich an geologischen Aufschlüssen."],
      hu: ["A Dzsebel Misht a Hawasina-takaró része.", "A délkeleti fal első dokumentált megmászása 1979-ben történt.", "A csúcs körülbelül 2090 méter magasan van.", "A szikla perm és triász kori mészkőből áll.", "A hegy messziről jól látható a Nizvába vezető útról.", "A környék gazdag geológiai feltárásokban."],
      ro: ["Jebel Misht face parte din pânzele de șariaj Hawasina.", "Prima ascensiune documentată a peretelui sud-estic a fost în 1979.", "Vârful se află la o altitudine de aproximativ 2.090 de metri.", "Roca este formată din calcar din perioada Permian și Triasic.", "Muntele este clar vizibil de la distanță de pe drumul spre Nizwa.", "Zona înconjurătoare este bogată în aflorimente geologice."],
      en: ["Jebel Misht is part of the Hawasina Nappes.", "The first documented ascent of the southeast face was in 1979.", "The summit is at an elevation of approximately 2,090 meters.", "The rock is composed of Permian and Triassic limestone.", "The mountain is clearly visible from a distance on the road to Nizwa.", "The surrounding area is rich in geological outcrops."]
    }
  },
  {
    id: "oman-jebel-kawr-relief-v2",
    type: "mountain",
    parent: "OM-DA",
    coords: [56.95, 23.15],
    name: {
      de: "Dschebel Kawr",
      hu: "Dzsebel-Kaur",
      ro: "Jebel Kawr",
      en: "Jebel Kawr"
    },
    description: {
      de: "Der Dschebel Kawr ist ein isoliertes Bergmassiv westlich des Dschebel Schams, bekannt für seine rauen Pfade und hochgelegenen verlassenen Dörfer.",
      hu: "A Dzsebel-Kaur egy elszigetelt hegymasszívum a Dzsebel-Samsztól nyugatra, amely zord ösvényeiről és magasan fekvő elhagyatott falvairól ismert.",
      ro: "Jebel Kawr este un masiv muntos izolat la vest de Jebel Shams, cunoscut pentru potecile sale accidentate și satele abandonate la mare altitudine.",
      en: "Jebel Kawr is an isolated mountain massif west of Jebel Shams, known for its rugged trails and high-altitude abandoned villages."
    },
    facts: {
      de: ["Erreicht Höhen von über 2.700 Metern.", "Hat ein kühleres Mikroklima als die Umgebung.", "Die abgelegenen Pfade werden von Eseln genutzt.", "Weniger besucht als der benachbarte Dschebel Schams."],
      hu: ["Magassága meghaladja a 2700 métert.", "A környezeténél hűvösebb mikroklímával rendelkezik.", "Az eldugott ösvényeket szamarak használják.", "Kevésbé látogatott, mint a szomszédos Dzsebel-Samsz."],
      ro: ["Atinge altitudini de peste 2.700 de metri.", "Are un microclimat mai răcoros decât împrejurimile.", "Cărările izolate sunt folosite de măgari.", "Mai puțin vizitat decât vecinul Jebel Shams."],
      en: ["Reaches altitudes of over 2,700 meters.", "Has a cooler microclimate than the surroundings.", "The remote trails are used by donkeys.", "Less visited than the neighboring Jebel Shams."]
    }, image: "/poi-images/oman-jebel-kawr-relief-v2.webp",
    descriptionAdvanced: {
      de: "Jebel Kawr ist ein massiver Berg im westlichen Hadschar-Gebirge, südlich des bekannteren Jebel Shams. Es handelt sich um ein abgelegenes und wildes Gebiet, das weniger von Touristen besucht wird. Der Berg bildet ein hohes Plateau, das von tiefen Wadis durchschnitten wird. Geologisch ist Jebel Kawr interessant, da es die Grenze zwischen den autochthonen Gesteinen der Arabischen Platte und den darüber liegenden allochthonen Decken (wie Jebel Misht) markiert. Die Region ist die Heimat von Beduinenfamilien, die in kleinen Siedlungen leben und Viehzucht betreiben. Das Gebiet ist auch archäologisch bedeutsam, mit alten Gräbern und Siedlungsresten. Die unberührte Landschaft und die Stille machen es zu einem Ziel für erfahrene Wanderer und Geologen.",
      hu: "A Dzsebel Kawr egy hatalmas hegy a Nyugati-Hadzsar-hegységben, a ismertebb Dzsebel Sammsztól délre. Ez egy távoli és vad, turisták által kevésbé látogatott terület. A hegy egy magas fennsíkot alkot, amelyet mély vádik szabdalnak. Geológiailag a Dzsebel Kawr azért érdekes, mert az Arab-lemez autochton (helyben képződött) kőzetei és a felette lévő allochton (máshonnan odatolt) takarók (mint a Dzsebel Misht) közötti határt jelöli. A régió beduin családok otthona, akik kis településeken élnek és állattenyésztéssel foglalkoznak. A terület régészetileg is jelentős, ősi sírokkal és településmaradványokkal. Az érintetlen táj és a csend a tapasztalt túrázók és geológusok célpontjává teszi.",
      ro: "Jebel Kawr este un munte masiv în Munții Hajar de Vest, la sud de mai cunoscutul Jebel Shams. Este o zonă îndepărtată și sălbatică, mai puțin vizitată de turiști. Muntele formează un platou înalt, tăiat de wadi-uri adânci. Din punct de vedere geologic, Jebel Kawr este interesant deoarece marchează granița dintre rocile autohtone ale Plăcii Arabice și pânzele de șariaj alohtone (cum ar fi Jebel Misht) de deasupra. Regiunea este locuită de familii beduine care trăiesc în mici așezări și practică creșterea animalelor. Zona este, de asemenea, importantă din punct de vedere arheologic, cu morminte antice și rămășițe de așezări. Peisajul neatins și liniștea îl fac o destinație pentru drumeții experimentați și geologi.",
      en: "Jebel Kawr is a massive mountain in the Western Hajar range, south of the more famous Jebel Shams. It is a remote and wild area, less frequented by tourists. The mountain forms a high plateau incised by deep wadis. Geologically, Jebel Kawr is interesting as it marks the boundary between the autochthonous rocks of the Arabian Plate and the overlying allochthonous nappes (like Jebel Misht). The region is home to Bedouin families who live in small settlements and practice animal husbandry. The area is also archaeologically significant, with ancient tombs and settlement remains. Its untouched landscape and silence make it a destination for experienced hikers and geologists."
    },
    factsAdvanced: {
      de: ["Jebel Kawr erhebt sich auf über 2.700 Meter.", "Das Gebiet ist bekannt für seine Bienenstockgräber aus der Bronzezeit.", "Es ist Teil des geologischen Fensters von Jebel Akhdar.", "Die Vegetation ist spärlich und an trockene Bedingungen angepasst.", "Die Zufahrt erfordert Allradfahrzeuge.", "Es gibt keine touristische Infrastruktur in der unmittelbaren Umgebung."],
      hu: ["A Dzsebel Kawr több mint 2700 méter magasra emelkedik.", "A terület a bronzkori méhkas-sírokról ismert.", "A Dzsebel Akhdar geológiai ablak része.", "A növényzet gyér és a száraz körülményekhez alkalmazkodott.", "A megközelítéshez terepjáró szükséges.", "A közvetlen környéken nincs turisztikai infrastruktúra."],
      ro: ["Jebel Kawr se ridică la peste 2.700 de metri.", "Zona este cunoscută pentru mormintele sale tip stup din Epoca Bronzului.", "Face parte din fereastra geologică Jebel Akhdar.", "Vegetația este rară și adaptată la condiții aride.", "Accesul necesită vehicule 4x4.", "Nu există infrastructură turistică în imediata apropiere."],
      en: ["Jebel Kawr rises to over 2,700 meters.", "The area is known for its Bronze Age 'beehive tombs'.", "It is part of the Jebel Akhdar geological window.", "Vegetation is sparse and adapted to arid conditions.", "Access requires 4x4 vehicles.", "There is no tourist infrastructure in the immediate area."]
    }
  },
  {
    id: "oman-wadi-mistal-relief-v2",
    type: "valley",
    parent: "OM-BA",
    coords: [57.8, 23.35],
    name: {
      de: "Wadi Mistal",
      hu: "Wádi-Misztal",
      ro: "Wadi Mistal",
      en: "Wadi Mistal"
    },
    description: {
      de: "Das Wadi Mistal ist ein breites Tal, das in einem riesigen natürlichen Kessel endet, wo das hochgelegene Dorf Wakan an den Hängen thront.",
      hu: "A Wádi-Misztal egy széles völgy, amely egy hatalmas természetes katlanban végződik, ahol a magasan fekvő Wakan falu trónol a lejtőkön.",
      ro: "Wadi Mistal este o vale largă care se termină într-un imens cazan natural, unde satul Wakan, situat la mare altitudine, tronează pe pante.",
      en: "Wadi Mistal is a broad valley that ends in a massive natural bowl, where the high-altitude village of Wakan perches on the slopes."
    },
    facts: {
      de: ["Das Tal ist auch als Ghubra Bowl bekannt.", "Wakan Village liegt auf etwa 2.000 Metern Höhe.", "Aprikosen und Granatäpfel wachsen an den Hängen.", "Ein beliebter Ausgangspunkt für Trekking-Touren."],
      hu: ["A völgy Ghubra Bowl néven is ismert.", "Wakan falu mintegy 2000 méteres magasságban fekszik.", "A lejtőkön kajszibarack és gránátalma terem.", "Kedvelt kiindulópont trekking túrákhoz."],
      ro: ["Valea este cunoscută și sub numele de Ghubra Bowl.", "Satul Wakan se află la o altitudine de aproximativ 2.000 de metri.", "Caișii și rodiile cresc pe pante.", "Un punct de plecare popular pentru drumeții."],
      en: ["The valley is also known as the Ghubra Bowl.", "Wakan Village is located at an altitude of about 2,000 meters.", "Apricots and pomegranates grow on the slopes.", "A popular starting point for trekking tours."]
    }, image: "/poi-images/oman-wadi-mistal-relief-v2.webp",
    descriptionAdvanced: {
      de: "Wadi Mistal ist ein breites Tal im westlichen Hadschar-Gebirge, das für seine landwirtschaftliche Bedeutung bekannt ist. Im Gegensatz zu vielen engen Schluchten bietet dieses Wadi mehr Platz für Anbauflächen und Siedlungen. Eine gut ausgebaute Asphaltstraße führt tief in das Tal hinein und endet im Dorf Wekan, das für seine terrassierten Obstgärten berühmt ist. Hier werden auf über 1.700 Metern Höhe Aprikosen, Granatäpfel und Weintrauben angebaut. Die Blütezeit im Frühling ist besonders schön. Das Wadi wird von hohen Bergen flankiert und bietet Zugang zu verschiedenen Wanderwegen, darunter auch Routen zum Jebel Akhdar-Plateau. Das Aflaj-System ist auch hier entscheidend für die Bewässerung der Gärten, die einen grünen Kontrast zur felsigen Umgebung bilden.",
      hu: "A Wadi Mistal egy széles völgy a Nyugati-Hadzsar-hegységben, amely mezőgazdasági jelentőségéről ismert. Sok szűk szurdokkal ellentétben ez a vádi több helyet kínál a műveléshez és a településeknek. Egy jó minőségű aszfaltút vezet mélyen a völgybe, és Wekan faluban végződik, amely teraszos gyümölcsöseiről híres. Itt, több mint 1700 méteres magasságban sárgabarackot, gránátalmát és szőlőt termesztenek. A tavaszi virágzás különösen szép. A vádit magas hegyek szegélyezik, és hozzáférést biztosít különböző túraútvonalakhoz, beleértve a Dzsebel Akhdar-fennsíkra vezető útvonalakat is. Az Aflaj-rendszer itt is kulcsfontosságú a kertek öntözésében, amelyek zöld kontrasztot alkotnak a sziklás környezettel.",
      ro: "Wadi Mistal este o vale largă în Munții Hajar de Vest, cunoscută pentru importanța sa agricolă. Spre deosebire de multe defileuri înguste, acest wadi oferă mai mult spațiu pentru culturi și așezări. Un drum asfaltat bine întreținut duce adânc în vale, terminându-se în satul Wekan, renumit pentru livezile sale terasate. Aici, la o altitudine de peste 1.700 de metri, se cultivă caise, rodii și struguri. Perioada de înflorire din primăvară este deosebit de frumoasă. Wadi-ul este flancat de munți înalți și oferă acces la diverse trasee de drumeție, inclusiv rute către platoul Jebel Akhdar. Sistemul Aflaj este și aici crucial pentru irigarea grădinilor, care creează un contrast verde cu mediul stâncos.",
      en: "Wadi Mistal is a wide valley in the Western Hajar Mountains, known for its agricultural importance. Unlike many narrow gorges, this wadi offers more space for cultivation and settlements. A well-maintained asphalt road leads deep into the valley, ending at the village of Wekan, which is famous for its terraced fruit orchards. Here, at an altitude of over 1,700 meters, apricots, pomegranates, and grapes are grown. The blooming season in spring is particularly beautiful. The wadi is flanked by high mountains and provides access to various hiking trails, including routes to the Jebel Akhdar plateau. The Aflaj system is also crucial here for irrigating the gardens, which form a green contrast to the rocky surroundings."
    },
    factsAdvanced: {
      de: ["Das Dorf Wekan ist berühmt für seine 700 Stufen lange Wanderung durch die Gärten.", "Die Aprikosenblüte findet normalerweise im Februar statt.", "Das Wadi ist von Nakhal oder über die Straße von Al Awabi aus erreichbar.", "Die Temperaturen in Wekan sind deutlich kühler als im Tiefland.", "Der Name „Mistal“ leitet sich von dem Wort für „Siedlung“ ab.", "Es ist ein wichtiges Zentrum für die Produktion von Datteln in den tieferen Lagen."],
      hu: ["Wekan falu híres a kerteken átvezető 700 lépcsős túraútvonaláról.", "A sárgabarack virágzása általában februárban van.", "A vádi Nakhalból vagy az Al Awabiból vezető úton érhető el.", "Wekanban a hőmérséklet lényegesen hűvösebb, mint az alföldön.", "A „Mistal” név a „település” szóból származik.", "Az alacsonyabban fekvő területeken a datolyatermesztés fontos központja."],
      ro: ["Satul Wekan este renumit pentru drumeția sa de 700 de trepte prin grădini.", "Înflorirea caisilor are loc de obicei în februarie.", "Wadi-ul este accesibil din Nakhal sau prin drumul din Al Awabi.", "Temperaturile din Wekan sunt considerabil mai scăzute decât în zonele joase.", "Numele „Mistal” provine de la cuvântul pentru „așezare”.", "Este un centru important pentru producția de curmale în zonele joase."],
      en: ["Wekan village is famous for its 700-step trail through the gardens.", "The apricot blossom season is usually in February.", "The wadi is accessible from Nakhal or via the road from Al Awabi.", "Temperatures in Wekan are significantly cooler than in the lowlands.", "The name 'Mistal' is derived from the word for 'settlement'.", "It's an important center for date production in its lower reaches."]
    }
  },
  {
    id: "oman-wadi-damm-relief-v2",
    type: "valley",
    parent: "OM-ZA",
    coords: [56.9, 23.2],
    name: {
      de: "Wadi Damm",
      hu: "Wádi-Damm",
      ro: "Wadi Damm",
      en: "Wadi Damm"
    },
    description: {
      de: "Das Wadi Damm, auch Wadi Dhamm genannt, ist ein steiniges Tal in der Dhahirah-Region mit beeindruckenden Wasserbecken und glatten Felsformationen.",
      hu: "A Wádi-Damm, vagy Wádi-Dhamm, egy sziklás völgy a Dhahirah régióban, lenyűgöző vízmedencékkel és sima sziklaalakzatokkal.",
      ro: "Wadi Damm, cunoscut și sub numele de Wadi Dhamm, este o vale stâncoasă în regiunea Dhahirah, cu bazine de apă impresionante și formațiuni stâncoase netede.",
      en: "Wadi Damm, also known as Wadi Dhamm, is a rocky valley in the Dhahirah region with impressive water pools and smooth rock formations."
    },
    facts: {
      de: ["Das Tal ist mit feinen, von Wasser geschliffenen Steinen gefüllt.", "Besitzt einzigartige Felszeichnungen an den Wänden.", "Ein kleiner Bach fließt durch moosbedeckte Steine.", "Liegt in der Nähe der Bienenkorbgräber von Al Ayn."],
      hu: ["A völgyet a víz által simára csiszolt kövek borítják.", "Egyedi sziklarajzok találhatók a falakon.", "Egy kis patak folyik át a mohával borított köveken.", "Al Ayn méhkas-sírjai közelében található."],
      ro: ["Valea este plină cu pietre fine șlefuite de apă.", "Prezintă desene rupestre unice pe pereți.", "Un mic pârâu curge printre pietrele acoperite de mușchi.", "Situat în apropierea mormintelor în formă de stup din Al Ayn."],
      en: ["The valley is filled with fine, water-polished stones.", "Features unique rock art on the walls.", "A small stream flows through moss-covered stones.", "Located near the beehive tombs of Al Ayn."]
    }, image: "/poi-images/oman-wadi-damm-relief-v2.webp",
    descriptionAdvanced: {
      de: "Wadi Damm liegt in der Nähe der Stadt Ibri in der Region Ad Dhahirah. Es ist bekannt für seine glatten, weißen Felsformationen und klaren Wasserbecken. Das Wadi ist nicht so grün wie die Wadis im östlichen Hadschar, aber seine geologische Schönheit ist einzigartig. Das Wasser hat über Jahrtausende die Felsen poliert und geformt, was zu einer fast surrealen Landschaft führt. Es ist ein beliebter Ort zum Schwimmen und für Picknicks. Das Wadi ist relativ leicht zugänglich, obwohl für die letzten Kilometer ein Allradfahrzeug empfohlen wird. Die Gegend ist auch für die nahe gelegenen Bienenstockgräber von Al Ayn bekannt, die zum UNESCO-Weltkulturerbe gehören und von der reichen Geschichte der Region zeugen.",
      hu: "A Wadi Damm Ibri városa közelében található, Ad Dhahirah régióban. Sima, fehér sziklaképződményeiről és tiszta vizű medencéiről ismert. A vádi nem olyan zöld, mint a Keleti-Hadzsar vádijai, de geológiai szépsége egyedülálló. A víz évezredek alatt csiszolta és formálta a sziklákat, ami szinte szürreális tájat eredményezett. Népszerű fürdő- és piknikezőhely. A vádi viszonylag könnyen megközelíthető, bár az utolsó kilométerekhez terepjáró ajánlott. A terület a közeli Al Ayn méhkas-sírokról is ismert, amelyek az UNESCO Világörökség részét képezik, és a régió gazdag történelméről tanúskodnak.",
      ro: "Wadi Damm este situat lângă orașul Ibri, în regiunea Ad Dhahirah. Este cunoscut pentru formațiunile sale stâncoase netede și albe și pentru bazinele cu apă limpede. Wadi-ul nu este la fel de verde ca wadi-urile din Hajarul de Est, dar frumusețea sa geologică este unică. Apa a șlefuit și a modelat stâncile de-a lungul a mii de ani, rezultând un peisaj aproape suprarealist. Este un loc popular pentru înot și picnicuri. Wadi-ul este relativ ușor accesibil, deși un vehicul 4x4 este recomandat pentru ultimii kilometri. Zona este, de asemenea, cunoscută pentru mormintele tip stup din apropiere de Al Ayn, un sit al Patrimoniului Mondial UNESCO, care atestă istoria bogată a regiunii.",
      en: "Wadi Damm is located near the town of Ibri in the Ad Dhahirah region. It is known for its smooth, white rock formations and clear water pools. The wadi is not as green as the wadis in the Eastern Hajar, but its geological beauty is unique. Over millennia, the water has polished and shaped the rocks, resulting in an almost surreal landscape. It is a popular spot for swimming and picnics. The wadi is relatively easy to access, although a 4x4 vehicle is recommended for the final kilometers. The area is also known for the nearby Al Ayn Beehive Tombs, a UNESCO World Heritage site, which attest to the region's rich history."
    },
    factsAdvanced: {
      de: ["Das Wadi ist Teil des Einzugsgebiets des Jebel Kawr.", "Die Felsen bestehen hauptsächlich aus Kalkstein.", "Die Gegend kann nach Regenfällen Sturzfluten erleben.", "Wadi Damm ist oft weniger überlaufen als andere beliebte Wadis.", "Der Kontrast zwischen den weißen Felsen und dem blauen Wasser ist auffällig.", "Es liegt in der Nähe der archäologischen Stätte von Bat."],
      hu: ["A vádi a Dzsebel Kawr vízgyűjtő területének része.", "A sziklák főként mészkőből állnak.", "A területen esőzések után hirtelen áradások fordulhatnak elő.", "A Wadi Damm gyakran kevésbé zsúfolt, mint más népszerű vádik.", "A fehér sziklák és a kék víz kontrasztja feltűnő.", "Bat régészeti lelőhelyének közelében fekszik."],
      ro: ["Wadi-ul face parte din bazinul hidrografic al Jebel Kawr.", "Rocile sunt compuse în principal din calcar.", "Zona poate experimenta inundații fulgerătoare după ploi.", "Wadi Damm este adesea mai puțin aglomerat decât alte wadi-uri populare.", "Contrastul dintre stâncile albe și apa albastră este izbitor.", "Este situat în apropierea sitului arheologic Bat."],
      en: ["The wadi is part of the Jebel Kawr catchment area.", "The rocks are primarily composed of limestone.", "The area can experience flash floods after rainfall.", "Wadi Damm is often less crowded than other popular wadis.", "The contrast between the white rocks and blue water is striking.", "It is located near the archaeological site of Bat."]
    }
  },
  {
    id: "oman-batinah-coast-relief-v2",
    type: "coast",
    parent: "OM-BS",
    coords: [57.0, 24.0],
    name: {
      de: "Al-Batinah-Küste",
      hu: "Bátina-part",
      ro: "Coasta Al-Batinah",
      en: "Al Batinah Coast"
    },
    description: {
      de: "Die Batinah-Küste ist eine fruchtbare Ebene am Golf von Oman, die sich von Maskat bis zur Grenze der VAE erstreckt.",
      hu: "A Bátina-part egy termékeny síkság az Ománi-öböl mentén, amely Maszkattól az EAE határáig húzódik.",
      ro: "Coasta Al Batinah este o câmpie fertilă pe Golful Oman, extinzându-se de la Muscat până la granița cu EAU.",
      en: "The Al Batinah Coast is a fertile plain on the Gulf of Oman, stretching from Muscat to the UAE border."
    },
    facts: {
      de: ["Das landwirtschaftliche Kernland des Omans.", "Wird vom Grundwasser des Hadschar-Gebirges bewässert.", "Dattelpalmen und Mangos dominieren die Landschaft.", "War historisch ein wichtiges Zentrum für die Seefahrt."],
      hu: ["Omán mezőgazdasági központja.", "A Hadzsar-hegység talajvize öntözi.", "Datolyapálmák és mangófák uralják a tájat.", "Történelmileg fontos tengerészeti központ volt."],
      ro: ["Inima agricolă a Omanului.", "Este irigată de apele subterane din Munții Hajar.", "Curmalii și mango domină peisajul.", "A fost istoric un centru important pentru navigație."],
      en: ["The agricultural heartland of Oman.", "Irrigated by groundwater from the Hajar Mountains.", "Date palms and mangoes dominate the landscape.", "Historically an important center for seafaring."]
    },
    descriptionAdvanced: {
      de: "Die Al-Batinah-Küste ist eine fruchtbare Küstenebene im Norden Omans, die sich vom Hadschar-Gebirge bis zum Golf von Oman erstreckt. Sie ist die am dichtesten besiedelte Region des Landes außerhalb der Hauptstadtregion Maskat. Die Ebene ist das landwirtschaftliche Herz Omans, wo Datteln, Tomaten, Zitrusfrüchte und Gemüse in großem Umfang angebaut werden. Dies wird durch die zahlreichen Wadis ermöglicht, die aus dem Gebirge kommen und Grundwasserleiter speisen. Die Küste ist gesäumt von langen Sandstränden und Fischerdörfern. Wichtige Städte in der Region sind Sohar, einst ein wichtiges Handelszentrum, und Barka. Die Küstenebene ist flach und fällt sanft zum Meer ab, was sie anfällig für Küstenerosion und den Anstieg des Meeresspiegels macht.",
      hu: "Az Al-Batinah-part egy termékeny tengerparti síkság Omán északi részén, amely a Hadzsar-hegységtől az Ománi-öbölig terjed. Ez az ország legsűrűbben lakott régiója a fővárosi régión, Maszkaton kívül. A síkság Omán mezőgazdasági központja, ahol nagy mennyiségben termesztenek datolyát, paradicsomot, citrusféléket és zöldségeket. Ezt a hegységből érkező számos vádi teszi lehetővé, amelyek a felszín alatti víztartó rétegeket táplálják. A partot hosszú homokos strandok és halászfalvak szegélyezik. A régió fontos városai Szohár, egykor fontos kereskedelmi központ, és Barka. A tengerparti síkság lapos és enyhén lejt a tenger felé, ami sebezhetővé teszi a part menti erózióval és a tengerszint emelkedésével szemben.",
      ro: "Coasta Al Batinah este o câmpie de coastă fertilă în nordul Omanului, care se întinde de la Munții Hajar până la Golful Oman. Este cea mai dens populată regiune a țării în afara capitalei Muscat. Câmpia este inima agricolă a Omanului, unde se cultivă pe scară largă curmale, roșii, citrice și legume. Acest lucru este posibil datorită numeroaselor wadi-uri care coboară din munți și alimentează acviferele subterane. Coasta este mărginită de plaje lungi de nisip și sate de pescari. Orașele importante din regiune includ Sohar, odinioară un important centru comercial, și Barka. Câmpia de coastă este plată și coboară lin spre mare, ceea ce o face vulnerabilă la eroziunea de coastă și la creșterea nivelului mării.",
      en: "The Al Batinah Coast is a fertile coastal plain in northern Oman, stretching from the Hajar Mountains to the Gulf of Oman. It is the most densely populated region of the country outside of the capital area of Muscat. The plain is the agricultural heartland of Oman, where dates, tomatoes, citrus fruits, and vegetables are grown extensively. This is made possible by the numerous wadis that descend from the mountains and feed underground aquifers. The coast is lined with long sandy beaches and fishing villages. Important cities in the region include Sohar, once a major trading hub, and Barka. The coastal plain is flat and slopes gently towards the sea, making it vulnerable to coastal erosion and sea-level rise."
    },
    factsAdvanced: {
      de: ["Die Ebene ist etwa 25 km breit.", "Sohar war der angebliche Geburtsort von Sindbad dem Seefahrer.", "Die Region ist in die Provinzen Nord- und Süd-Batinah unterteilt.", "Traditionelle Stierkämpfe (ohne Blutvergießen) sind in Barka beliebt.", "Die Küste ist ein wichtiger Nistplatz für Meeresschildkröten.", "Der Hafen von Sohar ist heute ein wichtiger Industriehafen."],
      hu: ["A síkság körülbelül 25 km széles.", "Szohár állítólag Szindbád, a tengerész szülőhelye volt.", "A régió Észak- és Dél-Batinah tartományokra oszlik.", "A hagyományos (vér nélküli) bikaviadalok népszerűek Barkában.", "A part a tengeri teknősök fontos fészkelőhelye.", "Szohár kikötője ma fontos ipari kikötő."],
      ro: ["Câmpia are o lățime de aproximativ 25 km.", "Sohar a fost presupusul loc de naștere al lui Sinbad Marinarul.", "Regiunea este împărțită în provinciile Batinah de Nord și Batinah de Sud.", "Luptele tradiționale cu tauri (fără vărsare de sânge) sunt populare în Barka.", "Coasta este un important loc de cuibărit pentru țestoasele marine.", "Portul Sohar este astăzi un important port industrial."],
      en: ["The plain is approximately 25 km wide.", "Sohar was the supposed birthplace of Sinbad the Sailor.", "The region is divided into the North and South Batinah governorates.", "Traditional bull-butting (non-lethal) is a popular event in Barka.", "The coast is an important nesting ground for sea turtles.", "The Port of Sohar is now a major industrial port."]
    }
  },
  {
    id: "oman-barr-al-hikman-relief-v2",
    type: "coast",
    parent: "OM-WU",
    coords: [58.3, 20.6],
    name: {
      de: "Barr al-Hikman",
      hu: "Barr al-Hikman",
      ro: "Barr al Hikman",
      en: "Barr Al Hikman"
    },
    description: {
      de: "Barr al-Hikman ist eine riesige, flache Halbinsel und Sabcha (Salzpfanne) an der Ostküste Omans, die als wichtiges Vogelschutzgebiet dient.",
      hu: "Barr al-Hikman egy hatalmas, lapos félsziget és szabhá (sós mocsár) Omán keleti partján, amely fontos madárvédelmi területként szolgál.",
      ro: "Barr al Hikman este o peninsulă uriașă, plată și un sabkha (tigaie de sare) pe coasta de est a Omanului, servind drept sanctuar important pentru păsări.",
      en: "Barr Al Hikman is a massive, flat peninsula and sabkha (salt pan) on the east coast of Oman, serving as a crucial bird sanctuary."
    },
    facts: {
      de: ["Rastplatz für Hunderttausende von Zugvögeln.", "Besitzt ausgedehnte Wattflächen und Lagunen.", "Umgeben von intakten Korallenriffen.", "Während der Flut stehen große Teile der Sabcha unter Wasser."],
      hu: ["Több százezer vándormadár pihenőhelye.", "Kiterjedt árapálysíkságokkal és lagúnákkal rendelkezik.", "Érintetlen korallzátonyok veszik körül.", "Dagálykor a szabhá nagy része víz alá kerül."],
      ro: ["Loc de odihnă pentru sute de mii de păsări migratoare.", "Are câmpii întinse de maree și lagune.", "Înconjurat de recife de corali intacte.", "În timpul fluxului, mari părți ale sabkha sunt sub apă."],
      en: ["Resting place for hundreds of thousands of migratory birds.", "Features extensive mudflats and lagoons.", "Surrounded by intact coral reefs.", "During high tide, large parts of the sabkha are underwater."]
    }, image: "/poi-images/oman-barr-al-hikman-relief-v2.webp",
    descriptionAdvanced: {
      de: "Barr Al Hikman ist eine große Halbinsel an der Ostküste Omans, die für ihre ausgedehnten Salzebenen (Sabchas) und Wattflächen bekannt ist. Es ist eines der wichtigsten Feuchtgebiete im Nahen Osten und ein entscheidender Rastplatz für Zugvögel auf der ostatlantischen Zugroute. Hunderttausende Vögel, darunter viele Watvögel und Flamingos, überwintern hier oder machen Rast. Die Landschaft ist flach und karg, aber von großer ökologischer Bedeutung. Die Gezeitenunterschiede sind beträchtlich und legen bei Ebbe riesige Flächen frei, die reich an wirbellosen Tieren sind und den Vögeln als Nahrungsquelle dienen. Die Region ist auch für ihre unberührten Strände und die Möglichkeit zur Beobachtung von Meeresschildkröten bekannt. Aufgrund seiner Fragilität und Bedeutung wurde das Gebiet als Ramsar-Schutzgebiet vorgeschlagen.",
      hu: "A Barr Al Hikman egy nagy félsziget Omán keleti partján, amely kiterjedt sós síkságairól (szabkháiról) és árapálysíkságairól ismert. A Közel-Kelet egyik legfontosabb vizes élőhelye és kulcsfontosságú pihenőhely a kelet-atlanti vonulási útvonalon haladó vándormadarak számára. Több százezer madár, köztük számos parti madár és flamingó telel itt vagy tart pihenőt. A táj sík és kopár, de ökológiai jelentősége óriási. Az árapály-különbségek jelentősek, és apálykor hatalmas területeket tárnak fel, amelyek gazdagok gerinctelenekben, és táplálékforrásul szolgálnak a madaraknak. A régió érintetlen strandjairól és a tengeri teknősök megfigyelésének lehetőségéről is ismert. Törékenysége és jelentősége miatt a területet Ramsari-területnek javasolták.",
      ro: "Barr Al Hikman este o peninsulă mare pe coasta de est a Omanului, cunoscută pentru câmpiile sale saline extinse (sabkhas) și zonele intertidale. Este una dintre cele mai importante zone umede din Orientul Mijlociu și un loc de popas crucial pentru păsările migratoare pe ruta de migrație a Atlanticului de Est. Sute de mii de păsări, inclusiv multe păsări de țărm și flamingo, iernează aici sau fac popas. Peisajul este plat și sterp, dar de o mare importanță ecologică. Diferențele de maree sunt considerabile, expunând la reflux zone vaste bogate în nevertebrate, care servesc drept hrană pentru păsări. Regiunea este, de asemenea, cunoscută pentru plajele sale virgine și pentru oportunitățile de observare a țestoaselor marine. Datorită fragilității și importanței sale, zona a fost propusă ca sit Ramsar.",
      en: "Barr Al Hikman is a large peninsula on the east coast of Oman, known for its extensive salt flats (sabkhas) and tidal flats. It is one of the most important wetlands in the Middle East and a crucial stopover for migratory birds on the East Atlantic Flyway. Hundreds of thousands of birds, including many waders and flamingos, winter here or use it as a staging post. The landscape is flat and barren but of immense ecological importance. The tidal range is significant, exposing vast areas at low tide that are rich in invertebrates, providing a food source for the birds. The region is also known for its pristine beaches and opportunities for sea turtle watching. Due to its fragility and importance, the area has been proposed as a Ramsar Site."
    },
    factsAdvanced: {
      de: ["Über 500.000 Vögel wurden während der Zählungen im Winter registriert.", "Die Halbinsel ist durch einen schmalen Damm mit dem Festland verbunden.", "Die Salzgewinnung ist eine traditionelle Aktivität in der Region.", "Es ist ein wichtiges Gebiet für die Krabbenfischerei.", "Die Biodiversität der wirbellosen Tiere ist außergewöhnlich hoch.", "Die Gegend ist sehr abgelegen und hat nur minimale Infrastruktur."],
      hu: ["A téli számlálások során több mint 500 000 madarat regisztráltak.", "A félszigetet egy keskeny gát köti össze a szárazfölddel.", "A sókitermelés hagyományos tevékenység a régióban.", "Fontos terület a rákhalászat szempontjából.", "A gerinctelenek biodiverzitása rendkívül magas.", "A terület nagyon távoli és minimális infrastruktúrával rendelkezik."],
      ro: ["Peste 500.000 de păsări au fost înregistrate în timpul numărătorilor de iarnă.", "Peninsula este legată de continent printr-un dig îngust.", "Extracția sării este o activitate tradițională în regiune.", "Este o zonă importantă pentru pescuitul de crabi.", "Biodiversitatea nevertebratelor este excepțional de mare.", "Zona este foarte îndepărtată și are o infrastructură minimă."],
      en: ["Over 500,000 birds have been recorded during winter counts.", "The peninsula is connected to the mainland by a narrow causeway.", "Salt harvesting is a traditional activity in the region.", "It is an important area for the crab fishery.", "The biodiversity of invertebrates is exceptionally high.", "The area is very remote with minimal infrastructure."]
    }
  },
  {
    id: "oman-ruus-al-jibal-relief-v2",
    type: "mountain",
    parent: "OM-MU",
    coords: [56.2, 25.9],
    name: {
      de: "Ruus al-Jibal",
      hu: "Rúsz al-Dzsibál",
      ro: "Ruus al-Jibal",
      en: "Ru'us al-Jibal"
    },
    description: {
      de: "Die Ruus al-Jibal ('Köpfe der Berge') bilden die schroffe Gebirgslandschaft der Musandam-Halbinsel, deren Fjordlandschaften steil ins Meer fallen.",
      hu: "A Rúsz al-Dzsibál ('Hegyek fejei') alkotják a Muszandam-félsziget zord hegyvidéki táját, amelynek fjordjai meredeken zuhannak a tengerbe.",
      ro: "Ruus al-Jibal ('Capetele Munților') formează peisajul muntos accidentat al Peninsulei Musandam, ale cărei fiorduri cad abrupt în mare.",
      en: "The Ru'us al-Jibal ('Heads of the Mountains') form the rugged mountainous landscape of the Musandam Peninsula, whose fjords plunge steeply into the sea."
    },
    facts: {
      de: ["Bildet die südliche Küste der Straße von Hormus.", "Die Landschaft wird oft als das 'Norwegen Arabiens' bezeichnet.", "Die Berge erreichen Höhen von über 2.000 Metern.", "Tiefe Meeresarme (Khors) schneiden tief in den Fels ein."],
      hu: ["A Hormuzi-szoros déli partját alkotja.", "A tájat gyakran 'Arábia Norvégiájaként' emlegetik.", "A hegyek magassága meghaladja a 2000 métert.", "Mély tengeröblök (Khor-ok) vágnak mélyen a sziklákba."],
      ro: ["Formează coasta sudică a Strâmtorii Ormuz.", "Peisajul este adesea denumit 'Norvegia Arabiei'.", "Munții ating înălțimi de peste 2.000 de metri.", "Pătrunderi adânci ale mării (khors) taie adânc în stâncă."],
      en: ["Forms the southern coast of the Strait of Hormuz.", "The landscape is often referred to as the 'Norway of Arabia'.", "The mountains reach heights of over 2,000 meters.", "Deep sea inlets (khors) cut deeply into the rock."]
    }, image: "/poi-images/oman-ruus-al-jibal-relief-v2.webp",
    descriptionAdvanced: {
      de: "Ru'us al-Jibal, was „Köpfe der Berge“ bedeutet, ist die gebirgige Landschaft der Musandam-Halbinsel, einer Exklave Omans. Die Berge fallen dramatisch ins Meer und bilden ein Netzwerk von Fjorden (khors), die oft als „das Norwegen Arabiens“ bezeichnet werden. Diese ertrunkenen Täler wurden durch tektonische Absenkung der Küste geschaffen, nicht durch Gletscher. Die Region ist geologisch aktiv und liegt an der Subduktionszone, wo die Arabische Platte unter die Eurasische Platte taucht. Die Landschaft ist extrem zerklüftet und trocken. Die Küstendörfer, wie Kumzar, sind oft nur per Boot erreichbar. Dhau-Kreuzfahrten durch die Fjorde sind eine beliebte Touristenaktivität, bei der man oft Delfine beobachten kann. Die einzigartige Kultur der Shihuh-Stämme prägt die Region.",
      hu: "A Ru'us al-Jibal, ami annyit tesz: „a hegyek fejei”, a Muszandam-félsziget hegyvidéki tája, Omán exklávéja. A hegyek drámaian zuhannak a tengerbe, fjordok (khorok) hálózatát alkotva, amelyet gyakran „Arábia Norvégiájának” is neveznek. Ezeket az elárasztott völgyeket a partvonal tektonikus süllyedése hozta létre, nem pedig gleccserek. A régió geológiailag aktív, a szubdukciós zónánál fekszik, ahol az Arab-lemez az Eurázsiai-lemez alá bukik. A táj rendkívül zord és száraz. A tengerparti falvak, mint például Kumzar, gyakran csak hajóval érhetők el. A fjordokon keresztüli dhow-hajókirándulások népszerű turisztikai tevékenységek, amelyek során gyakran lehet delfineket megfigyelni. A régiót a shihuh törzsek egyedülálló kultúrája jellemzi.",
      ro: "Ru'us al-Jibal, care înseamnă „Capetele Munților”, este peisajul muntos al Peninsulei Musandam, o exclavă a Omanului. Munții se prăbușesc dramatic în mare, formând o rețea de fiorduri (khor), adesea denumită „Norvegia Arabiei”. Aceste văi scufundate au fost create de scufundarea tectonică a coastei, nu de ghețari. Regiunea este activă din punct de vedere geologic, situată pe zona de subducție unde placa arabică se scufundă sub placa eurasiatică. Peisajul este extrem de accidentat și arid. Satele de coastă, cum ar fi Kumzar, sunt adesea accesibile doar cu barca. Croazierele cu dhow prin fiorduri sunt o activitate turistică populară, unde delfinii sunt adesea observați. Cultura unică a triburilor Shihuh caracterizează regiunea.",
      en: "Ru'us al-Jibal, meaning 'Heads of the Mountains', is the mountainous landscape of the Musandam Peninsula, an exclave of Oman. The mountains plunge dramatically into the sea, forming a network of fjords (khors), often dubbed the 'Norway of Arabia'. These drowned valleys were created by the tectonic subsidence of the coast, not by glaciers. The region is geologically active, located on the subduction zone where the Arabian Plate is diving beneath the Eurasian Plate. The landscape is extremely rugged and arid. Coastal villages, such as Kumzar, are often only accessible by boat. Dhow cruises through the fjords are a popular tourist activity, with frequent dolphin sightings. The unique culture of the Shihuh tribes characterizes the region."
    },
    factsAdvanced: {
      de: ["Jebel Harim ist mit 2.087 Metern der höchste Punkt in Musandam.", "Die Straße nach Jebel Harim ist bekannt für ihre Fossilienfunde.", "Das Dorf Kumzar hat seine eigene, einzigartige Sprache.", "Die Straße von Hormus, eine wichtige Schifffahrtsroute, liegt direkt vor der Küste.", "Die Felswände der Fjorde sind bei Kletterern beliebt.", "Die traditionellen Häuser (Bait al-Qufl) hatten spezielle Sicherheitsmerkmale."],
      hu: ["A Dzsebel Harim 2087 méterrel Muszandam legmagasabb pontja.", "A Dzsebel Harimra vezető út fosszílialeleteiről ismert.", "Kumzar falunak saját, egyedi nyelve van.", "A Hormuzi-szoros, egy fontos hajózási útvonal, közvetlenül a part mentén található.", "A fjordok sziklafalai népszerűek a hegymászók körében.", "A hagyományos házak (Bait al-Qufl) különleges biztonsági elemekkel rendelkeztek."],
      ro: ["Jebel Harim, la 2.087 de metri, este cel mai înalt punct din Musandam.", "Drumul spre Jebel Harim este cunoscut pentru fosilele sale.", "Satul Kumzar are propria sa limbă unică.", "Strâmtoarea Hormuz, o rută maritimă vitală, se află chiar în largul coastei.", "Pereții stâncoși ai fiordurilor sunt populari printre alpiniști.", "Casele tradiționale (Bait al-Qufl) aveau caracteristici speciale de securitate."],
      en: ["Jebel Harim, at 2,087 meters, is the highest point in Musandam.", "The road to Jebel Harim is known for its abundant fossils.", "The village of Kumzar has its own unique language.", "The Strait of Hormuz, a vital shipping lane, is just offshore.", "The rock faces of the fjords are popular with climbers.", "Traditional houses (Bait al-Qufl) had special security features."]
    }
  },
  {
    id: "oman-ramlat-jadilah-relief-v2",
    type: "desert",
    parent: "OM-DH",
    coords: [53.5, 18.5],
    name: {
      de: "Ramlat Jadilah",
      hu: "Ramlat Dzsadila",
      ro: "Ramlat Jadilah",
      en: "Ramlat Jadilah"
    },
    description: {
      de: "Ramlat Jadilah ist eine abgelegene Wüstenregion im Südwesten Omans, die einige der höchsten und steilsten Sanddünen des Landes aufweist.",
      hu: "A Ramlat Dzsadila egy eldugott sivatagi régió Omán délnyugati részén, ahol az ország néhány legmagasabb és legmeredekebb homokdűnéje található.",
      ro: "Ramlat Jadilah este o regiune deșertică îndepărtată în sud-vestul Omanului, prezentând unele dintre cele mai înalte și mai abrupte dune de nisip din țară.",
      en: "Ramlat Jadilah is a remote desert region in southwestern Oman, featuring some of the highest and steepest sand dunes in the country."
    },
    facts: {
      de: ["Gilt als einer der am schwersten zugänglichen Orte Omans.", "Dünen erreichen teilweise Höhen von 400 Metern über dem Meeresspiegel.", "Liegt in der Nähe der Grenze zum Jemen.", "Erfordert extreme Offroad-Erfahrung für Expeditionen."],
      hu: ["Omán egyik legnehezebben megközelíthető helyeként tartják számon.", "A dűnék magassága elérheti a tengerszint feletti 400 métert is.", "A jemeni határ közelében fekszik.", "Az expedíciókhoz extrém terepjárós tapasztalat szükséges."],
      ro: ["Considerat unul dintre cele mai inaccesibile locuri din Oman.", "Dunele ajung uneori la înălțimi de 400 de metri deasupra nivelului mării.", "Situat aproape de granița cu Yemenul.", "Necesită experiență extremă off-road pentru expediții."],
      en: ["Considered one of the most inaccessible places in Oman.", "Dunes sometimes reach heights of 400 meters above sea level.", "Located near the border with Yemen.", "Requires extreme off-road experience for expeditions."]
    }, image: "/poi-images/oman-ramlat-jadilah-relief-v2.webp",
    descriptionAdvanced: {
      de: "Ramlat Jadilah ist ein kleines Sanddünengebiet in der Region Dhofar im Süden Omans. Es ist bemerkenswert, weil es eines der wenigen Sandmeere ist, das während des Charif-Monsuns etwas Feuchtigkeit erhält. Dies führt zu einer spärlichen Vegetation, die die Dünen stabilisiert und sie von den größeren, beweglicheren Dünen der Rub al-Chali unterscheidet. Die Dünen sind nicht so hoch wie im „Leeren Viertel“, bilden aber dennoch eine malerische Wüstenlandschaft. Das Gebiet liegt in der Nähe von Thumrait und wird manchmal als Miniaturversion der Rub al-Chali beschrieben. Es ist ein Beispiel dafür, wie selbst geringe Mengen an Feuchtigkeit das Erscheinungsbild und die Ökologie einer Sandwüste verändern können.",
      hu: "A Ramlat Jadilah egy kis homokdűnés terület a déli Dhofar régióban, Ománban. Azért figyelemre méltó, mert egyike azon kevés homoktengereknek, amelyek a kharif monszun idején némi nedvességet kapnak. Ez gyér növényzetet eredményez, amely stabilizálja a dűnéket, és megkülönbözteti őket a Rub al-Háli nagyobb, mozgékonyabb dűnéitől. A dűnék nem olyan magasak, mint az „Üres Negyedben”, de mégis festői sivatagi tájat alkotnak. A terület Thumrait közelében található, és néha a Rub al-Háli miniatűr változataként írják le. Példa arra, hogyan változtathatja meg még a kis mennyiségű nedvesség is a homoksivatag megjelenését és ökológiáját.",
      ro: "Ramlat Jadilah este o mică zonă de dune de nisip în regiunea Dhofar din sudul Omanului. Este remarcabilă deoarece este una dintre puținele mări de nisip care primește o oarecare umiditate în timpul musonului Khareef. Acest lucru duce la o vegetație rară care stabilizează dunele, deosebindu-le de dunele mai mari și mai mobile din Rub' al Khali. Dunele nu sunt la fel de înalte ca cele din „Cartierul Gol”, dar formează totuși un peisaj deșertic pitoresc. Zona este situată lângă Thumrait și este uneori descrisă ca o versiune în miniatură a Rub' al Khali. Este un exemplu al modului în care chiar și cantități mici de umiditate pot schimba aspectul și ecologia unui deșert de nisip.",
      en: "Ramlat Jadilah is a small area of sand dunes in the Dhofar region of southern Oman. It is noteworthy because it is one of the few sand seas that receives some moisture during the Khareef monsoon. This results in sparse vegetation that helps to stabilize the dunes, distinguishing them from the larger, more mobile dunes of the Rub' al Khali. The dunes are not as high as in the 'Empty Quarter' but still form a picturesque desert landscape. The area is located near Thumrait and is sometimes described as a miniature version of the Rub' al Khali. It serves as an example of how even small amounts of moisture can alter the appearance and ecology of a sand desert."
    },
    factsAdvanced: {
      de: ["Die Vegetation besteht hauptsächlich aus Gräsern und kleinen Sträuchern.", "Das Gebiet wird für Kamelweiden genutzt.", "Die Dünen sind in der Regel Längsdünen.", "Der Sand hat eine hellere Farbe als der in der Rub al-Chali.", "Es liegt auf dem Weg zur „Verlorenen Stadt Ubar“.", "Die Monsunnebel erreichen selten so weit ins Landesinnere."],
      hu: ["A növényzet főként fűfélékből és alacsony cserjékből áll.", "A területet tevelgelőként használják.", "A dűnék általában hosszanti dűnék.", "A homok színe világosabb, mint a Rub al-Háliban.", "Az „elveszett Ubar városába” vezető út mentén fekszik.", "A monszunködök ritkán érnek el idáig a szárazföld belsejébe."],
      ro: ["Vegetația constă în principal din ierburi și arbuști mici.", "Zona este folosită pentru pășunatul cămilelor.", "Dunele sunt în general dune longitudinale.", "Nisipul are o culoare mai deschisă decât cel din Rub' al Khali.", "Se află pe drumul către „Orașul pierdut Ubar”.", "Ceața musonică ajunge rareori atât de departe în interior."],
      en: ["The vegetation consists mainly of grasses and small shrubs.", "The area is used for camel grazing.", "The dunes are generally longitudinal dunes.", "The sand is a lighter color than that of the Rub' al Khali.", "It is located on the route to the 'Lost City of Ubar'.", "The monsoon mists rarely penetrate this far inland."]
    }
  },
  {
    id: "oman-umm-al-samim-relief-v2",
    type: "desert",
    parent: "OM-ZA",
    coords: [55.8, 21.5],
    name: {
      de: "Umm al-Samim",
      hu: "Umm asz-Szamim",
      ro: "Umm al Samim",
      en: "Umm al Samim"
    },
    description: {
      de: "Umm al-Samim, die 'Mutter der Gifte', ist eine riesige, tückische Salzpfanne am östlichen Rand der Rub al-Chali, die extrem gefährlich zu durchqueren ist.",
      hu: "Umm asz-Szamim, a 'Mérgek anyja', egy hatalmas, alattomos sós mocsár a Rub al-Háli keleti szélén, amelynek átkelése rendkívül veszélyes.",
      ro: "Umm al Samim, 'Mama Otrăvurilor', este o uriașă și înșelătoare tigaie de sare la marginea de est a Rub al-Khali, extrem de periculoasă de traversat.",
      en: "Umm al Samim, the 'Mother of Poisons', is a massive, treacherous salt pan on the eastern edge of the Rub' al Khali that is extremely dangerous to cross."
    },
    facts: {
      de: ["Der Boden kann eine tückische Kruste über feuchtem Schlamm bilden.", "Hat in der Vergangenheit Karawanen und Fahrzeuge verschluckt.", "Wurde 1946 erstmals von Wilfred Thesiger dokumentiert.", "Erhält gelegentlich Wasser aus den Wadis des Hadschar-Gebirges."],
      hu: ["A talaj alattomos kérget képezhet a nedves iszap felett.", "A múltban karavánokat és járműveket nyelt el.", "Wilfred Thesiger dokumentálta először 1946-ban.", "Alkalmanként a Hadzsar-hegység vádijaiból kap vizet."],
      ro: ["Solul poate forma o crustă înșelătoare deasupra noroiului umed.", "În trecut, a înghițit caravane și vehicule.", "Documentat pentru prima dată de Wilfred Thesiger în 1946.", "Primește ocazional apă din wadi-urile Munților Hajar."],
      en: ["The ground can form a treacherous crust over wet mud.", "Has swallowed caravans and vehicles in the past.", "First documented by Wilfred Thesiger in 1946.", "Occasionally receives water from the wadis of the Hajar Mountains."]
    }, image: "/poi-images/oman-umm-al-samim-relief-v2.webp",
    descriptionAdvanced: {
      de: "Umm al-Samim, was „Mutter des Giftes“ bedeutet, ist eine riesige Salzebene oder Sabcha am östlichen Rand der Wüste Rub al-Chali. Sie ist berüchtigt für ihre gefährliche Oberfläche, die aus einer dünnen, harten Salzkruste besteht, die flüssigen Schlamm und Treibsand verbirgt. Fahrzeuge, die von der Kruste einbrechen, können hoffnungslos stecken bleiben, was der Ebene ihren unheilvollen Namen gab. Die Sabcha bildet sich in einer Senke, in der Wasser aus den Wadis des Hadschar-Gebirges verdunstet und Mineralien und Salz zurücklässt. Die Landschaft ist extrem flach und leblos. Wilfred Thesiger beschrieb sie als eine der furchterregendsten Regionen, die er je durchquert hat. Heute wird das Gebiet aufgrund der Gefahren weitgehend gemieden.",
      hu: "Az Umm al-Samim, ami annyit tesz: „a méreg anyja”, egy hatalmas sós síkság vagy szabkha a Rub al-Háli sivatag keleti szélén. Hírhedt a veszélyes felszínéről, amely egy vékony, kemény sókéregből áll, ami folyékony sarat és futóhomokot rejt. A kéregbe beszakadó járművek reménytelenül elakadhatnak, ami a síkságnak a vészjósló nevét adta. A szabkha egy mélyedésben képződik, ahol a Hadzsar-hegység vádijaiból származó víz elpárolog, ásványi anyagokat és sót hagyva maga után. A táj rendkívül sík és élettelen. Wilfred Thesiger az egyik legfélelmetesebb régiónak írta le, amelyen valaha is áthaladt. Ma a területet a veszélyek miatt nagyrészt elkerülik.",
      ro: "Umm al-Samim, care înseamnă „Mama Otrăvii”, este o câmpie salină vastă sau sabkha la marginea estică a deșertului Rub' al Khali. Este renumită pentru suprafața sa periculoasă, care constă dintr-o crustă subțire și tare de sare ce ascunde noroi lichid și nisipuri mișcătoare. Vehiculele care se prăbușesc prin crustă pot rămâne blocate fără speranță, ceea ce a dat câmpiei numele său sinistru. Sabkha se formează într-o depresiune unde apa din wadi-urile Munților Hajar se evaporă, lăsând în urmă minerale și sare. Peisajul este extrem de plat și lipsit de viață. Wilfred Thesiger a descris-o ca fiind una dintre cele mai înfricoșătoare regiuni pe care le-a traversat vreodată. Astăzi, zona este în mare parte evitată din cauza pericolelor sale.",
      en: "Umm al-Samim, meaning 'Mother of Poisons', is a vast salt flat or sabkha on the eastern edge of the Rub' al Khali desert. It is notorious for its treacherous surface, which consists of a thin, hard crust of salt hiding liquid mud and quicksand underneath. Vehicles that break through the crust can become hopelessly stuck, which gave the flat its ominous name. The sabkha forms in a depression where water from the wadis of the Hajar Mountains evaporates, leaving behind minerals and salt. The landscape is extremely flat and lifeless. Wilfred Thesiger described it as one of the most formidable regions he ever crossed. Today, the area is largely avoided due to its dangers."
    },
    factsAdvanced: {
      de: ["Die Sabcha erstreckt sich über eine Fläche von etwa 15.000 km².", "Sie bildet das Ende des Binnen-Entwässerungssystems von Nordoman.", "Die Kruste kann je nach Jahreszeit und Niederschlag variieren.", "Es gibt praktisch keine Vegetation in der Sabcha.", "Das Gebiet ist ein Hindernis für die Erkundung von Öl und Gas.", "Nur wenige Menschen haben sie erfolgreich durchquert."],
      hu: ["A szabkha területe körülbelül 15 000 km².", "Ez alkotja Észak-Omán belső lefolyású vízrendszerének végét.", "A kéreg vastagsága az évszaktól és a csapadéktól függően változhat.", "Gyakorlatilag nincs növényzet a szabkhán.", "A terület akadályt jelent az olaj- és gázkutatás számára.", "Csak kevesen keltek át rajta sikeresen."],
      ro: ["Sabkha acoperă o suprafață de aproximativ 15.000 km².", "Formează capătul sistemului de drenaj endoreic din nordul Omanului.", "Crusta poate varia în funcție de anotimp și precipitații.", "Nu există practic nicio vegetație în sabkha.", "Zona este un obstacol pentru explorarea petrolului și a gazelor.", "Puțini oameni au traversat-o cu succes."],
      en: ["The sabkha covers an area of approximately 15,000 sq km.", "It forms the terminus of the endorheic drainage system of northern Oman.", "The crust can vary in thickness depending on the season and rainfall.", "There is virtually no vegetation within the sabkha.", "The area is an obstacle for oil and gas exploration.", "Few people have successfully crossed it."]
    }
  },
  {
    id: "oman-wadi-hawqayn-relief-v2",
    type: "valley",
    parent: "OM-BA",
    coords: [57.33, 23.54],
    name: {
      de: "Wadi al-Hawqayn",
      hu: "Wádi al-Haukain",
      ro: "Wadi al Hawqayn",
      en: "Wadi al Hawqayn"
    },
    description: {
      de: "Das Wadi al-Hawqayn ist bekannt für seine ganzjährigen Wasserläufe, markanten Wasserfälle und Thermalquellen in der Region Rustaq.",
      hu: "A Wádi al-Haukain az egész évben folyó vizeiről, látványos vízeséseiről és hőforrásairól ismert Ruszták régiójában.",
      ro: "Wadi al Hawqayn este renumit pentru fluxurile sale de apă pe tot parcursul anului, cascadele izbitoare și izvoarele termale din regiunea Rustaq.",
      en: "Wadi al Hawqayn is known for its year-round water flows, striking waterfalls, and thermal springs in the Rustaq region."
    },
    facts: {
      de: ["Das Wasser fällt in breiten Kaskaden über Steinstufen.", "Heiße und kalte Quellen fließen im Tal zusammen.", "Ist ein beliebter Erholungsort für Einheimische.", "Palmenhaine säumen die Wasserbecken."],
      hu: ["A víz széles zuhatagokban hullik alá a kőlépcsőkön.", "Hideg és meleg források folynak össze a völgyben.", "Népszerű rekreációs hely a helyiek körében.", "Pálmaligetek szegélyezik a vízmedencéket."],
      ro: ["Apa cade în cascade largi peste trepte de piatră.", "Izvoare calde și reci se întâlnesc în vale.", "Este un loc popular de recreere pentru localnici.", "Crânguri de palmieri mărginesc bazinele de apă."],
      en: ["Water falls in broad cascades over stone steps.", "Hot and cold springs meet in the valley.", "Is a popular recreation spot for locals.", "Palm groves line the water pools."]
    }, image: "/poi-images/oman-wadi-hawqayn-relief-v2.webp",
    descriptionAdvanced: {
      de: "Wadi Al Hawqayn liegt in der Region Al Batinah, in der Nähe der Stadt Rustaq. Es ist berühmt für seine ganzjährigen Wasserfälle und tiefen, türkisfarbenen Becken. Im Gegensatz zu vielen anderen Wadis, die nur nach Regenfällen Wasser führen, hat Al Hawqayn eine konstante Quelle, die es zu einem beliebten Ziel für Einheimische und Touristen macht. Das Wadi ist von Dattelpalmen umgeben und die Landschaft ist eine Mischung aus rauen Felsen und grüner Vegetation. Es gibt eine Reihe von Becken, die sich zum Schwimmen eignen. Historische Wachtürme überblicken das Tal und zeugen von seiner früheren strategischen Bedeutung. Die leichte Erreichbarkeit von der Küstenebene aus trägt zu seiner Beliebtheit bei.",
      hu: "A Wadi Al Hawqayn Al Batinah régióban található, Rusztak városa közelében. Híres egész évben működő vízeséseiről és mély, türkizkék medencéiről. Sok más vádival ellentétben, amelyek csak esőzések után vezetnek vizet, az Al Hawqayn állandó forrással rendelkezik, ami a helyiek és a turisták kedvelt célpontjává teszi. A vádit datolyapálmák veszik körül, a táj pedig a zord sziklák és a zöld növényzet keveréke. Számos medence található itt, amelyek alkalmasak úszásra. Történelmi őrtornyok néznek le a völgyre, tanúskodva annak korábbi stratégiai jelentőségéről. A part menti síkságról való könnyű megközelíthetősége hozzájárul népszerűségéhez.",
      ro: "Wadi Al Hawqayn este situat în regiunea Al Batinah, lângă orașul Rustaq. Este renumit pentru cascadele sale perene și bazinele adânci, turcoaz. Spre deosebire de multe alte wadi-uri care au apă doar după ploi, Al Hawqayn are un izvor constant, ceea ce îl face o destinație populară pentru localnici și turiști. Wadi-ul este înconjurat de palmieri de curmal, iar peisajul este un amestec de stânci aspre și vegetație verde. Există o serie de bazine potrivite pentru înot. Turnuri de veghe istorice veghează asupra văii, mărturisind importanța sa strategică din trecut. Accesibilitatea sa ușoară din câmpia de coastă contribuie la popularitatea sa.",
      en: "Wadi Al Hawqayn is located in the Al Batinah region, near the city of Rustaq. It is famous for its year-round waterfalls and deep, turquoise pools. Unlike many wadis that only have water after rains, Al Hawqayn has a constant spring, making it a popular destination for locals and tourists. The wadi is surrounded by date palms, and the landscape is a mix of rugged rocks and green vegetation. There are a number of pools suitable for swimming. Historic watchtowers overlook the valley, attesting to its past strategic importance. Its easy accessibility from the coastal plain adds to its popularity."
    },
    factsAdvanced: {
      de: ["Das Wadi ist besonders an Wochenenden und Feiertagen gut besucht.", "Das Wasser stammt aus einer Karstquelle.", "Die Wassertemperatur ist das ganze Jahr über erfrischend.", "Es ist etwa 1,5 Stunden Fahrt von Maskat entfernt.", "Die Gegend ist Teil des westlichen Hadschar-Gebirgssystems.", "In der Nähe befindet sich die Festung von Rustaq."],
      hu: ["A vádi különösen hétvégéken és ünnepnapokon forgalmas.", "A víz egy karsztforrásból származik.", "A víz hőmérséklete egész évben frissítő.", "Körülbelül 1,5 órás autóútra van Maszkattól.", "A terület a Nyugati-Hadzsar-hegységrendszer része.", "A közelben található Rusztak erődje."],
      ro: ["Wadi-ul este deosebit de aglomerat în weekenduri și de sărbători.", "Apa provine dintr-un izvor carstic.", "Temperatura apei este răcoritoare pe tot parcursul anului.", "Se află la aproximativ 1,5 ore de mers cu mașina de Muscat.", "Zona face parte din sistemul montan Hajar de Vest.", "Fortul Rustaq se află în apropiere."],
      en: ["The wadi is particularly busy on weekends and holidays.", "The water originates from a karstic spring.", "The water temperature is refreshing year-round.", "It is about a 1.5-hour drive from Muscat.", "The area is part of the Western Hajar mountain system.", "The fort of Rustaq is located nearby."]
    }
  },
  {
    id: "oman-saiq-plateau-relief-v2",
    type: "plateau",
    parent: "OM-DA",
    coords: [57.65, 23.07],
    name: {
      de: "Saiq-Plateau",
      hu: "Szaik-fennsík",
      ro: "Platoul Saiq",
      en: "Saiq Plateau"
    },
    description: {
      de: "Das Saiq-Plateau ist eine weite Hochebene im Dschebel-Achdar-Massiv, die für ihr gemäßigtes Klima und den traditionellen Terrassenfeldbau berühmt ist.",
      hu: "A Szaik-fennsík egy tágas fennsík a Dzsebel-Ahdar masszívumban, amely mérsékelt éghajlatáról és hagyományos teraszos földműveléséről híres.",
      ro: "Platoul Saiq este un podiș larg în masivul Jebel Akhdar, renumit pentru clima sa temperată și agricultura tradițională pe terase.",
      en: "The Saiq Plateau is a broad plateau in the Jebel Akhdar massif, famous for its temperate climate and traditional terraced agriculture."
    },
    facts: {
      de: ["Liegt auf etwa 2.000 Metern über dem Meeresspiegel.", "Hier wachsen Granatäpfel, Walnüsse und Damaszener-Rosen.", "War jahrzehntelang für Außenstehende unzugänglich.", "Die Temperaturen fallen im Winter oft unter den Gefrierpunkt."],
      hu: ["Mintegy 2000 méteres tengerszint feletti magasságban fekszik.", "Itt terem a gránátalma, a dió és a damaszkuszi rózsa.", "Évtizedekig megközelíthetetlen volt a kívülállók számára.", "A hőmérséklet télen gyakran fagypont alá süllyed."],
      ro: ["Se află la aproximativ 2.000 de metri deasupra nivelului mării.", "Aici cresc rodii, nuci și trandafiri de Damasc.", "A fost inaccesibil celor din afară timp de decenii.", "Temperaturile scad adesea sub zero iarna."],
      en: ["Located at about 2,000 meters above sea level.", "Pomegranates, walnuts, and Damask roses grow here.", "Was inaccessible to outsiders for decades.", "Temperatures often drop below freezing in winter."]
    },
    descriptionAdvanced: {
      de: "Das Saiq-Plateau, besser bekannt als Jebel Akhdar („der grüne Berg“), ist ein Hochplateau im zentralen Hadschar-Gebirge. Es liegt auf einer Höhe von etwa 2.000 Metern und hat ein kühleres, mediterranes Klima. Dies ermöglicht den Anbau von Obst, das sonst nirgendwo auf der Arabischen Halbinsel wächst, wie Granatäpfel, Aprikosen, Walnüsse und vor allem Rosen. Die Rosen von Jebel Akhdar werden zur Herstellung von berühmtem Rosenwasser verwendet. Das Plateau ist bekannt für seine spektakulären Terrassenfelder, die sich an die Berghänge schmiegen und durch das Aflaj-System bewässert werden. Dörfer wie Al Aqr, Al Ayn und Ash Shirayjah sind für ihre traditionelle Architektur und ihre Lage am Rande tiefer Schluchten bekannt. Das gesamte Gebiet ist ein beliebtes Touristenziel für Wanderer und Naturliebhaber.",
      hu: "A Saiq-fennsík, ismertebb nevén Dzsebel Akhdar („a zöld hegy”), egy magas fennsík a központi Hadzsar-hegységben. Körülbelül 2000 méteres magasságban fekszik, és hűvösebb, mediterrán éghajlattal rendelkezik. Ez lehetővé teszi olyan gyümölcsök termesztését, amelyek sehol máshol nem nőnek az Arab-félszigeten, mint például a gránátalma, a sárgabarack, a dió és mindenekelőtt a rózsa. A Dzsebel Akhdar rózsáiból híres rózsavizet készítenek. A fennsík látványos teraszos földjeiről ismert, amelyek a hegyoldalakhoz simulnak, és amelyeket az Aflaj-rendszer öntöz. Az olyan falvak, mint Al Aqr, Al Ayn és Ash Shirayjah, hagyományos építészetükről és a mély szurdokok szélén való elhelyezkedésükről ismertek. Az egész terület népszerű turisztikai célpont a túrázók és a természetbarátok számára.",
      ro: "Platoul Saiq, mai bine cunoscut sub numele de Jebel Akhdar („Muntele Verde”), este un platou înalt în Munții Hajar centrali. Se află la o altitudine de aproximativ 2.000 de metri și are o climă mai răcoroasă, mediteraneană. Acest lucru permite cultivarea fructelor care nu cresc în altă parte în Peninsula Arabică, cum ar fi rodiile, caisele, nucile și, mai ales, trandafirii. Trandafirii din Jebel Akhdar sunt folosiți pentru a produce renumita apă de trandafiri. Platoul este cunoscut pentru câmpurile sale terasate spectaculoase, care se agață de versanții munților și sunt irigate de sistemul Aflaj. Sate precum Al Aqr, Al Ayn și Ash Shirayjah sunt cunoscute pentru arhitectura lor tradițională și locația lor pe marginea unor canioane adânci. Întreaga zonă este o destinație turistică populară pentru drumeți și iubitorii de natură.",
      en: "The Saiq Plateau, better known as Jebel Akhdar ('the Green Mountain'), is a high plateau in the central Hajar Mountains. It sits at an altitude of about 2,000 meters and has a cooler, Mediterranean-like climate. This allows for the cultivation of fruits that do not grow elsewhere on the Arabian Peninsula, such as pomegranates, apricots, walnuts, and most famously, roses. The roses of Jebel Akhdar are used to produce renowned rosewater. The plateau is famous for its spectacular terraced fields, which cling to the mountainsides and are irrigated by the Aflaj system. Villages like Al Aqr, Al Ayn, and Ash Shirayjah are known for their traditional architecture and their location on the edge of deep canyons. The entire area is a popular tourist destination for hikers and nature lovers."
    },
    factsAdvanced: {
      de: ["Die Rosenernte findet im März und April statt.", "Jebel Akhdar war Schauplatz eines Krieges in den 1950er Jahren.", "Das Gebiet wurde erst 2005 vollständig für Ausländer geöffnet.", "Die Zufahrt erfordert ein Allradfahrzeug und eine polizeiliche Genehmigung.", "Dianas Aussichtspunkt ist nach Prinzessin Diana benannt, die 1986 hier war.", "Juniperus seravschanica, eine Wacholderart, ist in den höheren Lagen verbreitet."],
      hu: ["A rózsaszüret márciusban és áprilisban zajlik.", "A Dzsebel Akhdar egy háború helyszíne volt az 1950-es években.", "A területet csak 2005-ben nyitották meg teljesen a külföldiek előtt.", "A behajtáshoz terepjáró és rendőrségi engedély szükséges.", "A Diana-kilátót Diána hercegnőről nevezték el, aki 1986-ban járt itt.", "A Juniperus seravschanica, egy borókafaj, elterjedt a magasabb területeken."],
      ro: ["Recoltarea trandafirilor are loc în martie și aprilie.", "Jebel Akhdar a fost scena unui război în anii 1950.", "Zona a fost complet deschisă străinilor abia în 2005.", "Accesul necesită un vehicul 4x4 și un permis de poliție.", "Punctul de belvedere al Dianei este numit după Prințesa Diana, care a vizitat în 1986.", "Juniperus seravschanica, o specie de ienupăr, este comună la altitudini mai mari."],
      en: ["The rose harvest takes place in March and April.", "Jebel Akhdar was the scene of a war in the 1950s.", "The area was only fully opened to foreigners in 2005.", "Access requires a 4x4 vehicle and a police permit.", "Diana's Viewpoint is named after Princess Diana, who visited in 1986.", "Juniperus seravschanica, a species of juniper, is common at higher altitudes."]
    }
  }
];
