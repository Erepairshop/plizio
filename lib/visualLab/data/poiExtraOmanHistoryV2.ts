import type { POI } from "./poi";

export const poiExtraOmanHistoryV2: POI[] = [
  {
    id: "bahla-fort-history-v2",
    type: "historical-site",
    parent: "OM-DA",
    coords: [57.2997, 22.9647],
    name: { de: "Bahla Festung", hu: "Bahla erőd", ro: "Fortul Bahla", en: "Bahla Fort" },
    description: {
      de: "Die Festung Bahla ist eine der ältesten Befestigungsanlagen im Oman und gehört seit 1987 zum UNESCO-Weltkulturerbe. Sie wurde zwischen dem 13. und 14. Jahrhundert von der Banu-Nebhan-Dynastie erbaut.",
      hu: "A Bahla erőd Omán egyik legrégebbi erődítménye, amely 1987 óta az UNESCO Világörökség része. A 13. és 14. század között építette a Banu-Nabhan dinasztia.",
      ro: "Fortul Bahla este una dintre cele mai vechi fortificații din Oman și face parte din Patrimoniul Mondial UNESCO din 1987. A fost construit între secolele XIII și XIV de dinastia Banu Nabhan.",
      en: "Bahla Fort is one of the oldest fortifications in Oman and has been a UNESCO World Heritage site since 1987. It was built between the 13th and 14th centuries by the Banu Nabhan dynasty."
    },
    facts: {
      de: ["Wurde aus Lehmziegeln errichtet.", "Besitzt eine 12 Kilometer lange Stadtmauer."],
      hu: ["Agyagtéglákból épült fel az erődítmény.", "A várost egy 12 kilométer hosszú fal veszi körül."],
      ro: ["A fost construit din cărămizi de lut.", "Are un zid de apărare lung de 12 kilometri."],
      en: ["Constructed using mudbricks.", "Features a 12-kilometer-long city wall."]
    }
  },
  {
    id: "nizwa-fort-history-v2",
    type: "historical-site",
    parent: "OM-DA",
    coords: [57.5328, 22.9333],
    name: { de: "Festung von Nizwa", hu: "Nizwai erőd", ro: "Fortul Nizwa", en: "Nizwa Fort" },
    description: {
      de: "Die Festung von Nizwa wurde im 17. Jahrhundert von Imam Sultan bin Saif Al Ya'arubi über einen Zeitraum von 12 Jahren erbaut. Ihr markantestes Merkmal ist der massive, 30 Meter hohe runde Hauptturm.",
      hu: "A nizwai erődöt a 17. században építette Szultán bin Szaif Al-Jaarubi imám, az építkezés 12 évig tartott. Legjellegzetesebb része a 30 méter magas, masszív, kerek főtorony.",
      ro: "Fortul din Nizwa a fost construit în secolul al XVII-lea de Imamul Sultan bin Saif Al Ya'arubi pe parcursul a 12 ani. Trăsătura sa cea mai proeminentă este turnul principal masiv, înalt de 30 de metri.",
      en: "Nizwa Fort was built in the 17th century by Imam Sultan bin Saif Al Ya'arubi over a period of 12 years. Its most prominent feature is the massive, 30-meter-high round main tower."
    },
    facts: {
      de: ["Der Hauptturm hat einen Durchmesser von 36 Metern.", "Wurde über einer unterirdischen Wasserquelle errichtet."],
      hu: ["A főtorony átmérője 36 méter.", "Egy földalatti vízforrás fölé épült."],
      ro: ["Turnul principal are un diametru de 36 de metri.", "A fost ridicat deasupra unui izvor de apă subteran."],
      en: ["The main tower has a diameter of 36 meters.", "Was built over an underground water stream."]
    }
  },
  {
    id: "bat-al-khutm-al-ayn-history-v2",
    type: "ruin",
    parent: "OM-ZA",
    coords: [56.7458, 23.2722],
    name: { de: "Nekropolen von Bat", hu: "Bat nekropolisza", ro: "Necropola din Bat", en: "Bat Necropolis" },
    description: {
      de: "Diese archäologischen Stätten enthalten Bienenkorbgräber, die aus dem 3. Jahrtausend v. Chr. stammen. Sie gehören zu den besterhaltenen bronzezeitlichen Siedlungs- und Grabstätten der Welt.",
      hu: "Ezek a régészeti lelőhelyek az i. e. 3. évezredből származó, méhkaptár alakú sírokat rejtenek. A világ legjobb állapotban fennmaradt bronzkori település- és temetkezési helyei közé tartoznak.",
      ro: "Aceste situri arheologice conțin morminte în formă de stup, care datează din mileniul al III-lea î.Hr. Se numără printre cele mai bine conservate așezări și necropole din Epoca Bronzului din lume.",
      en: "These archaeological sites contain beehive tombs dating back to the 3rd millennium BC. They are among the best-preserved Bronze Age settlements and necropolises in the world."
    },
    facts: {
      de: ["Die Nekropole von Bat umfasst über 100 Gräber.", "Seit 1988 ein UNESCO-Weltkulturerbe."],
      hu: ["A bat-i nekropolisz több mint 100 sírt foglal magába.", "1988 óta az UNESCO Világörökség része."],
      ro: ["Necropola din Bat include peste 100 de morminte.", "Parte a Patrimoniului Mondial UNESCO din 1988."],
      en: ["The Bat necropolis includes over 100 tombs.", "Has been a UNESCO World Heritage site since 1988."]
    }
  },
  {
    id: "sumhuram-khor-rori-history-v2",
    type: "ruin",
    parent: "OM-DH",
    coords: [54.4344, 17.0388],
    name: { de: "Sumhuram", hu: "Sumhuram", ro: "Sumhuram", en: "Sumhuram" },
    description: {
      de: "Sumhuram war eine befestigte Hafenstadt, die im 3. Jahrhundert v. Chr. gegründet wurde. Sie diente als einer der wichtigsten Seehäfen für den Export von Weihrauch nach Indien und in den Mittelmeerraum.",
      hu: "Sumhuram egy erődített kikötőváros volt, amelyet az i. e. 3. században alapítottak. Az Indiába és a Földközi-tenger vidékére irányuló tömjénkereskedelem egyik legfontosabb tengeri kikötőjeként szolgált.",
      ro: "Sumhuram a fost un oraș-port fortificat, fondat în secolul al III-lea î.Hr. A servit ca unul dintre cele mai importante porturi maritime pentru exportul de tămâie spre India și Marea Mediterană.",
      en: "Sumhuram was a fortified port city founded in the 3rd century BC. It served as one of the most important seaports for exporting frankincense to India and the Mediterranean."
    },
    facts: {
      de: ["Die Stadt wurde vom Königreich Hadhramaut kontrolliert.", "Ausgrabungen förderten Inschriften im altsüdarabischen Alphabet zutage."],
      hu: ["A várost a Hadramauti Királyság irányította.", "Az ásatások során ószémarab ábécével írt feliratok kerültek elő."],
      ro: ["Orașul era controlat de Regatul Hadhramaut.", "Săpăturile au scos la iveală inscripții în vechiul alfabet sud-arabic."],
      en: ["The city was controlled by the Hadhramaut Kingdom.", "Excavations unearthed inscriptions in the Old South Arabian alphabet."]
    }
  },
  {
    id: "al-baleed-archaeological-park-history-v2",
    type: "historical-site",
    parent: "OM-DH",
    coords: [54.1370, 17.0058],
    name: { de: "Al Baleed", hu: "Al Baleed", ro: "Al Baleed", en: "Al Baleed" },
    description: {
      de: "Al Baleed ist die Ruinenstätte der antiken Hafenstadt Zafar, die im 8. Jahrhundert n. Chr. ihre Blütezeit erlebte. Sie war ein zentraler Handelsknotenpunkt für Weihrauch, Pferde und Gewürze.",
      hu: "Al Baleed az ősi Zafar kikötővárosának romterülete, amely az i. sz. 8. században élte virágkorát. A tömjén-, ló- és fűszerkereskedelem központi csomópontja volt.",
      ro: "Al Baleed este situl arheologic al anticului oraș-port Zafar, care a atins apogeul în secolul al VIII-lea d.Hr. Era un nod comercial central pentru tămâie, cai și condimente.",
      en: "Al Baleed is the ruined site of the ancient port city of Zafar, which reached its peak in the 8th century AD. It was a central trading hub for frankincense, horses, and spices."
    },
    facts: {
      de: ["Die große Moschee des Ortes besaß 144 Säulen.", "Teil der 'Weihrauchstraße' im UNESCO-Welterbe."],
      hu: ["A helység nagymecsetje 144 oszloppal rendelkezett.", "Az UNESCO 'Tömjénút' világörökségi helyszínének része."],
      ro: ["Marea moschee a locului avea 144 de coloane.", "Face parte din 'Drumul Tămâiei', sit UNESCO."],
      en: ["The town's grand mosque featured 144 columns.", "Part of the 'Land of Frankincense' UNESCO World Heritage site."]
    }
  },
  {
    id: "jibreen-castle-history-v2",
    type: "historical-site",
    parent: "OM-DA",
    coords: [57.2483, 22.9150],
    name: { de: "Schloss Jibreen", hu: "Jibreeni kastély", ro: "Castelul Jibreen", en: "Jibreen Castle" },
    description: {
      de: "Das Schloss Jibreen wurde 1675 von Imam Bil'arab bin Sultan als Wohnsitz und Festung erbaut. Es ist berühmt für seine kunstvoll bemalten Holzdecken und seine komplexe architektonische Struktur.",
      hu: "A jibreeni kastélyt 1675-ben építette Bil'arab bin Szultán imám lakóhelyként és erődként. Híres gazdagon festett fa mennyezeteiről és bonyolult építészeti szerkezetéről.",
      ro: "Castelul Jibreen a fost construit în 1675 de Imamul Bil'arab bin Sultan ca reședință și fortăreață. Este renumit pentru tavanele sale din lemn frumos pictate și pentru structura sa arhitecturală complexă.",
      en: "Jibreen Castle was built in 1675 by Imam Bil'arab bin Sultan as a residence and fortress. It is famous for its elaborately painted wooden ceilings and complex architectural structure."
    },
    facts: {
      de: ["Beherbergt das Grab des Erbauers, Imam Bil'arab.", "Verfügt über verdeckte Schächte, um kochendes Dattelsirup auf Angreifer zu gießen."],
      hu: ["Itt található az építő, Bil'arab imám sírja.", "Rejtett nyílásokkal rendelkezik, amelyeken forró datolyaszirupot öntöttek a támadókra."],
      ro: ["Adăpostește mormântul constructorului, Imamul Bil'arab.", "Dispune de guri de tragere ascunse pentru a turna sirop fierbinte de curmale peste atacatori."],
      en: ["Houses the tomb of its builder, Imam Bil'arab.", "Features hidden shafts for pouring boiling date syrup on attackers."]
    }
  },
  {
    id: "nakhal-fort-history-v2",
    type: "historical-site",
    parent: "OM-BJ",
    coords: [57.8288, 23.3950],
    name: { de: "Festung Nakhal", hu: "Nakhali erőd", ro: "Fortul Nakhal", en: "Nakhal Fort" },
    description: {
      de: "Die Festung Nakhal steht auf einem unregelmäßigen Felsvorsprung am Fuß des Dschebel Achdar. Ihre heutigen Strukturen stammen hauptsächlich aus dem Jahr 1834, unter der Herrschaft von Said bin Sultan.",
      hu: "A nakhali erőd egy szabálytalan sziklaszirten áll a Dzsebel-Ahdar lábánál. Jelenlegi szerkezete nagyrészt 1834-ből, Szaid bin Szultán uralkodásának idejéből származik.",
      ro: "Fortul Nakhal se află pe un afloriment stâncos neregulat la baza Munților Jebel Akhdar. Structurile sale actuale datează în principal din 1834, din timpul domniei lui Said bin Sultan.",
      en: "Nakhal Fort stands on an irregular rock outcropping at the base of the Jebel Akhdar mountains. Its present structures date mainly to 1834, during the reign of Said bin Sultan."
    },
    facts: {
      de: ["Passt sich exakt der Form des darunterliegenden Felsens an.", "Eine heiße Quelle (A'Thowarah) fließt in der Nähe."],
      hu: ["Pontosan követi az alatta lévő szikla formáját.", "Egy hőforrás (A'Thowarah) folyik a közelében."],
      ro: ["Se adaptează perfect formei stâncii de dedesubt.", "Un izvor termal (A'Thowarah) curge în apropiere."],
      en: ["Conforms exactly to the shape of the rock below it.", "A hot spring (A'Thowarah) flows nearby."]
    }
  },
  {
    id: "al-rustaq-fort-history-v2",
    type: "historical-site",
    parent: "OM-BJ",
    coords: [57.3986, 23.3911],
    name: { de: "Festung Al Rustaq", hu: "Al Rustaq erőd", ro: "Fortul Al Rustaq", en: "Al Rustaq Fort" },
    description: {
      de: "Die Festung Al Rustaq wurde im 13. Jahrhundert errichtet und später erweitert. Sie verfügt über vier markante Türme, wovon der höchste, Burj al-Majeel, über 20 Meter misst.",
      hu: "Az Al Rustaq erőd a 13. században épült, és később bővítették. Négy jellegzetes toronnyal rendelkezik, amelyek közül a legmagasabb, a Burdzs al-Mádzsil több mint 20 méter magas.",
      ro: "Fortul Al Rustaq a fost construit în secolul al XIII-lea și extins ulterior. Are patru turnuri distinctive, cel mai înalt, Burj al-Majeel, măsurând peste 20 de metri.",
      en: "Al Rustaq Fort was built in the 13th century and later expanded. It has four distinctive towers, the tallest of which, Burj al-Majeel, stands over 20 meters high."
    },
    facts: {
      de: ["Al Rustaq war einst die Hauptstadt von Oman.", "Die Mauern im Erdgeschoss sind bis zu drei Meter dick."],
      hu: ["Al Rustaq egykor Omán fővárosa volt.", "A földszinti falak vastagsága eléri a három métert."],
      ro: ["Al Rustaq a fost odată capitala Omanului.", "Zidurile de la parter au o grosime de până la trei metri."],
      en: ["Al Rustaq was once the capital of Oman.", "The walls on the ground floor are up to three meters thick."]
    }
  },
  {
    id: "al-jalali-fort-history-v2",
    type: "historical-site",
    parent: "OM-MA",
    coords: [58.5986, 23.6169],
    name: { de: "Fort Al Jalali", hu: "Al Jalali erőd", ro: "Fortul Al Jalali", en: "Al Jalali Fort" },
    description: {
      de: "Das Fort Al Jalali wurde in den 1580er Jahren von den Portugiesen zur Verteidigung des Hafens von Maskat erbaut. Es diente im 20. Jahrhundert zeitweise als Hauptgefängnis des Landes.",
      hu: "Az Al Jalali erődöt az 1580-as években építették a portugálok Maszkat kikötőjének védelmére. A 20. században egy ideig az ország fő börtöneként működött.",
      ro: "Fortul Al Jalali a fost construit de portughezi în anii 1580 pentru a apăra portul Muscat. În secolul al XX-lea, a servit pentru un timp ca principală închisoare a țării.",
      en: "Al Jalali Fort was built by the Portuguese in the 1580s to defend the harbor of Muscat. During the 20th century, it temporarily served as the country's main prison."
    },
    facts: {
      de: ["Hieß ursprünglich 'Forte de São João'.", "Ist heute ein privates Museum für omani-königliches Erbe."],
      hu: ["Eredetileg 'Forte de São João' néven volt ismert.", "Ma egy ománi királyi örökséget bemutató magánmúzeum."],
      ro: ["Inițial a fost numit 'Forte de São João'.", "Astăzi este un muzeu privat dedicat moștenirii regale omaneze."],
      en: ["Originally named 'Forte de São João'.", "Today it is a private museum for Omani royal heritage."]
    }
  },
  {
    id: "al-mirani-fort-history-v2",
    type: "historical-site",
    parent: "OM-MA",
    coords: [58.5936, 23.6175],
    name: { de: "Fort Al Mirani", hu: "Al Mirani erőd", ro: "Fortul Al Mirani", en: "Al Mirani Fort" },
    description: {
      de: "Das Fort Al Mirani befindet sich gegenüber von Al Jalali und wurde ebenfalls im späten 16. Jahrhundert von den Portugiesen vollendet. Es sicherte die strategische Kontrolle über den Golf von Oman.",
      hu: "Az Al Mirani erőd az Al Jalali-val szemben található, és szintén a 16. század végén fejezték be a portugálok. Stratégiai ellenőrzést biztosított az Ománi-öböl felett.",
      ro: "Fortul Al Mirani este situat vizavi de Al Jalali și a fost finalizat de portughezi, de asemenea, la sfârșitul secolului al XVI-lea. Asigura controlul strategic asupra Golfului Oman.",
      en: "Al Mirani Fort is located opposite Al Jalali and was also completed by the Portuguese in the late 16th century. It secured strategic control over the Gulf of Oman."
    },
    facts: {
      de: ["War maßgeblich am Fall der portugiesischen Herrschaft 1649 beteiligt.", "Ist für die Öffentlichkeit nicht regulär zugänglich."],
      hu: ["Jelentős szerepet játszott a portugál uralom bukásában 1649-ben.", "A nagyközönség számára nem látogatható szabadon."],
      ro: ["A jucat un rol esențial în căderea dominației portugheze în 1649.", "Nu este deschis accesului public regulat."],
      en: ["Played a key role in the fall of Portuguese rule in 1649.", "Is not regularly open to the public."]
    }
  },
  {
    id: "muttrah-fort-history-v2",
    type: "historical-site",
    parent: "OM-MA",
    coords: [58.5661, 23.6214],
    name: { de: "Fort Muttrah", hu: "Muttrah erőd", ro: "Fortul Muttrah", en: "Muttrah Fort" },
    description: {
      de: "Das Fort Muttrah thront über der Küstenstraße von Maskat und stammt aus dem Jahr 1507. Es wurde im 16. Jahrhundert von den Portugiesen mit drei runden Kanonentürmen ausgebaut.",
      hu: "A Muttrah erőd Maszkat tengerparti útja felett magasodik, és 1507-ből származik. A 16. században a portugálok három kerek ágyútoronnyal bővítették.",
      ro: "Fortul Muttrah se înalță deasupra drumului de coastă din Muscat și datează din 1507. A fost extins în secolul al XVI-lea de portughezi cu trei turnuri de artilerie rotunde.",
      en: "Muttrah Fort perches above the coastal road of Muscat and dates back to 1507. It was expanded in the 16th century by the Portuguese with three round cannon towers."
    },
    facts: {
      de: ["Bietet einen weiten Blick über den Golf von Oman.", "Wurde erst 2018 vollständig restauriert und geöffnet."],
      hu: ["Széles kilátást nyújt az Ománi-öbölre.", "Csak 2018-ban restaurálták teljesen és nyitották meg."],
      ro: ["Oferă o vedere panoramică asupra Golfului Oman.", "A fost complet restaurat și deschis abia în 2018."],
      en: ["Offers a sweeping view of the Gulf of Oman.", "Was fully restored and opened to the public only in 2018."]
    }
  },
  {
    id: "ancient-city-of-qalhat-history-v2",
    type: "ruin",
    parent: "OM-SJ",
    coords: [59.3736, 22.6975],
    name: { de: "Antike Stadt Qalhat", hu: "Qalhat ősi városa", ro: "Orașul antic Qalhat", en: "Ancient City of Qalhat" },
    description: {
      de: "Qalhat war zwischen dem 11. und 15. Jahrhundert ein bedeutendes Handelszentrum, das vom Königreich Hormus kontrolliert wurde. Marco Polo und Ibn Battuta besuchten die Stadt und beschrieben ihren Reichtum.",
      hu: "Qalhat a 11. és 15. század között jelentős kereskedelmi központ volt, amelyet a Hormuzi Királyság irányított. Marco Polo és Ibn Battúta is meglátogatta a várost, és beszámolt gazdagságáról.",
      ro: "Qalhat a fost un important centru comercial între secolele XI și XV, controlat de Regatul Ormus. Marco Polo și Ibn Battuta au vizitat orașul și au descris bogăția sa.",
      en: "Qalhat was a major trading center between the 11th and 15th centuries, controlled by the Kingdom of Hormuz. Marco Polo and Ibn Battuta both visited the city and described its wealth."
    },
    facts: {
      de: ["Wurde 1507 durch ein Erdbeben und portugiesische Angriffe zerstört.", "Wurde 2018 in die UNESCO-Welterbeliste aufgenommen."],
      hu: ["1507-ben egy földrengés és portugál támadások pusztították el.", "2018-ban felkerült az UNESCO világörökségi listájára."],
      ro: ["A fost distrus în 1507 de un cutremur și de atacurile portugheze.", "A fost adăugat pe lista Patrimoniului Mondial UNESCO în 2018."],
      en: ["Was destroyed in 1507 by an earthquake and Portuguese attacks.", "Was added to the UNESCO World Heritage list in 2018."]
    }
  },
  {
    id: "tomb-of-bibi-maryam-history-v2",
    type: "monument",
    parent: "OM-SJ",
    coords: [59.3734, 22.6972],
    name: { de: "Mausoleum der Bibi Maryam", hu: "Bibi Marjam mauzóleuma", ro: "Mausoleul lui Bibi Maryam", en: "Tomb of Bibi Maryam" },
    description: {
      de: "Das Mausoleum der Bibi Maryam ist das einzige Bauwerk der antiken Stadt Qalhat, das weitgehend intakt geblieben ist. Es wurde im 14. Jahrhundert von Baha al-Din Ayaz für seine Ehefrau errichtet.",
      hu: "Bibi Marjam mauzóleuma az ősi Qalhat városának egyetlen nagyrészt érintetlenül fennmaradt épülete. A 14. században építtette Baha al-Din Ajaz a felesége számára.",
      ro: "Mausoleul lui Bibi Maryam este singura structură a anticului oraș Qalhat care a rămas în mare parte intactă. A fost construit în secolul al XIV-lea de Baha al-Din Ayaz pentru soția sa.",
      en: "The Mausoleum of Bibi Maryam is the only structure of the ancient city of Qalhat that has remained largely intact. It was built in the 14th century by Baha al-Din Ayaz for his wife."
    },
    facts: {
      de: ["Einst von einer großen Kuppel überdacht, die heute fehlt.", "Bibi Maryam regierte die Stadt nach dem Tod ihres Mannes."],
      hu: ["Egykor egy nagy kupola fedte, amely mára eltűnt.", "Bibi Marjam férje halála után maga is irányította a várost."],
      ro: ["Cândva acoperit de un mare dom, care astăzi lipsește.", "Bibi Maryam a condus orașul după moartea soțului ei."],
      en: ["Once covered by a large dome, which is now missing.", "Bibi Maryam ruled the city after her husband's death."]
    }
  },
  {
    id: "ubar-shisr-history-v2",
    type: "ruin",
    parent: "OM-DH",
    coords: [53.6492, 18.2558],
    name: { de: "Ubar (Shisr)", hu: "Ubar (Shisr)", ro: "Ubar (Shisr)", en: "Ubar (Shisr)" },
    description: {
      de: "Ubar, auch das 'Atlantis der Wüste' genannt, war eine legendäre Handelsstadt in der Region Dhofar. Ihre Überreste wurden 1992 mithilfe von Satellitenbildern unter dem Sand entdeckt.",
      hu: "A 'sivatag Atlantisza' néven is ismert Ubar egy legendás kereskedőváros volt a Dhofar régióban. Maradványait 1992-ben műholdképek segítségével fedezték fel a homok alatt.",
      ro: "Ubar, cunoscut și sub numele de 'Atlantida deșertului', a fost un legendar oraș comercial în regiunea Dhofar. Rămășițele sale au fost descoperite sub nisip în 1992 cu ajutorul imaginilor din satelit.",
      en: "Ubar, also known as the 'Atlantis of the Sands', was a legendary trading city in the Dhofar region. Its remains were discovered under the sand in 1992 using satellite imagery."
    },
    facts: {
      de: ["Die Stadt versank wahrscheinlich in einem Kalksteinloch.", "War ein Knotenpunkt für Karawanen auf der Weihrauchroute."],
      hu: ["A város valószínűleg egy mészkő víznyelőbe süllyedt.", "A tömjénúton haladó karavánok fontos csomópontja volt."],
      ro: ["Se crede că orașul s-a scufundat într-o dolină de calcar.", "A fost un nod important pentru caravanele de pe Drumul Tămâiei."],
      en: ["The city likely sank into a limestone sinkhole.", "Was a vital hub for caravans on the frankincense route."]
    }
  },
  {
    id: "al-hazm-castle-history-v2",
    type: "historical-site",
    parent: "OM-BJ",
    coords: [57.3242, 23.5303],
    name: { de: "Schloss Al Hazm", hu: "Al Hazm kastély", ro: "Castelul Al Hazm", en: "Al Hazm Castle" },
    description: {
      de: "Das Schloss Al Hazm wurde 1711 erbaut und zeichnet sich durch seine massiven Holztore und das Fehlen von Holzsparren im Dach aus. Stattdessen werden die Decken durch massive Steingewölbe gestützt.",
      hu: "Az Al Hazm kastély 1711-ben épült, és masszív fa kapuival, valamint a tetőből hiányzó fa szarufákkal tűnik ki. A mennyezetet hatalmas kőboltozatok tartják.",
      ro: "Castelul Al Hazm a fost construit în 1711 și se remarcă prin porțile sale masive din lemn și prin absența căpriorilor din lemn pe acoperiș. În schimb, tavanele sunt susținute de bolți masive de piatră.",
      en: "Al Hazm Castle was built in 1711 and is notable for its massive wooden gates and the absence of wooden rafters in the roof. Instead, the ceilings are supported by massive stone vaults."
    },
    facts: {
      de: ["Die Wände sind an der Basis über 3 Meter dick.", "Verfügt über ein ausgeklügeltes unterirdisches Falaj-Bewässerungssystem."],
      hu: ["A falak az alapzatnál több mint 3 méter vastagok.", "Egy kifinomult földalatti faladzs öntözőrendszerrel rendelkezik."],
      ro: ["La bază, zidurile au o grosime de peste 3 metri.", "Are un sistem sofisticat de irigații subteran, numit falaj."],
      en: ["The walls are over 3 meters thick at the base.", "Features an intricate underground falaj irrigation system."]
    }
  },
  {
    id: "hasik-archaeological-site-history-v2",
    type: "ruin",
    parent: "OM-DH",
    coords: [55.2750, 17.4472],
    name: { de: "Archäologische Stätte Hasik", hu: "Hasik régészeti lelőhely", ro: "Situl arheologic Hasik", en: "Hasik Archaeological Site" },
    description: {
      de: "Hasik war ein antiker Küstenort an der Südostküste Omans, der in historischen Texten als Hafen für den Export von hochwertigem Weihrauch erwähnt wird. Seine Ruinen zeugen von einem aktiven Seehandel.",
      hu: "Hasik egy ősi tengerparti település volt Omán délkeleti partvidékén, amelyet történelmi szövegek a kiváló minőségű tömjén exportjának kikötőjeként említenek. Romjai egy aktív tengeri kereskedelemről tanúskodnak.",
      ro: "Hasik a fost o așezare de coastă antică pe coasta de sud-est a Omanului, menționată în textele istorice ca port pentru exportul de tămâie de înaltă calitate. Ruinele sale stau mărturie unui comerț maritim activ.",
      en: "Hasik was an ancient coastal settlement on the southeastern coast of Oman, mentioned in historical texts as a port for exporting high-quality frankincense. Its ruins testify to an active maritime trade."
    },
    facts: {
      de: ["Wurde vom griechischen Geographen Ptolemäus erwähnt.", "Das Umfeld bot isolierte Bedingungen für ungestörten Handel."],
      hu: ["Ptolemaiosz görög földrajztudós is megemlítette.", "A környezet elszigetelt feltételeket biztosított a zavartalan kereskedelemhez."],
      ro: ["A fost menționat de geograful grec Ptolemeu.", "Mediul înconjurător a oferit condiții izolate pentru un comerț neîntrerupt."],
      en: ["Was mentioned by the Greek geographer Ptolemy.", "The surrounding environment provided isolated conditions for undisturbed trade."]
    }
  },
  {
    id: "taqah-castle-history-v2",
    type: "historical-site",
    parent: "OM-DH",
    coords: [54.3989, 17.0381],
    name: { de: "Schloss Taqah", hu: "Taqah kastély", ro: "Castelul Taqah", en: "Taqah Castle" },
    description: {
      de: "Das Schloss Taqah wurde im 19. Jahrhundert als private Residenz eines lokalen Stammesführers erbaut. In der ersten Hälfte des 20. Jahrhunderts wurde es von Sultan Said bin Taimur regierungseigen.",
      hu: "A Taqah kastélyt a 19. században építették egy helyi törzsi vezető magánrezidenciájaként. A 20. század első felében Szaid bin Taimur szultán kormányzati tulajdonba vette.",
      ro: "Castelul Taqah a fost construit în secolul al XIX-lea ca reședință privată a unui lider tribal local. În prima jumătate a secolului al XX-lea, a intrat în proprietatea guvernului sub Sultanul Said bin Taimur.",
      en: "Taqah Castle was built in the 19th century as a private residence for a local tribal leader. In the first half of the 20th century, it became government property under Sultan Said bin Taimur."
    },
    facts: {
      de: ["Eine der besterhaltenen Festungen in Dhofar.", "Zeigt traditionelles Handwerk und alte Lebensweisen der Region."],
      hu: ["Dhofar egyik legjobb állapotban fennmaradt erődje.", "A régió hagyományos mesterségeit és régi életmódját mutatja be."],
      ro: ["Unul dintre cele mai bine conservate forturi din Dhofar.", "Expune meșteșuguri tradiționale și moduri de viață vechi din regiune."],
      en: ["One of the best-preserved forts in Dhofar.", "Showcases traditional crafts and old ways of life in the region."]
    }
  },
  {
    id: "mirbat-fort-history-v2",
    type: "battlefield",
    parent: "OM-DH",
    coords: [54.6936, 16.9933],
    name: { de: "Festung Mirbat", hu: "Mirbat erőd", ro: "Fortul Mirbat", en: "Mirbat Fort" },
    description: {
      de: "Die Festung Mirbat spielte eine entscheidende Rolle in der Schlacht von Mirbat 1972, als britische SAS-Soldaten und omanische Truppen einen massiven Angriff kommunistischer Rebellen abwehrten.",
      hu: "A Mirbat erőd döntő szerepet játszott az 1972-es mirbati csatában, amikor brit SAS-katonák és ománi csapatok visszaverték a kommunista lázadók hatalmas támadását.",
      ro: "Fortul Mirbat a jucat un rol crucial în bătălia de la Mirbat din 1972, când trupele SAS britanice și forțele omaneze au respins un atac masiv al rebelilor comuniști.",
      en: "Mirbat Fort played a crucial role in the Battle of Mirbat in 1972, when British SAS soldiers and Omani troops repelled a massive attack by communist rebels."
    },
    facts: {
      de: ["Die Schlacht gilt als Wendepunkt im Dhofar-Aufstand.", "Das Fort liegt direkt am Arabischen Meer."],
      hu: ["A csatát a dhofari felkelés fordulópontjának tekintik.", "Az erőd közvetlenül az Arab-tenger partján fekszik."],
      ro: ["Bătălia este considerată un punct de cotitură în rebeliunea din Dhofar.", "Fortul este situat direct pe coasta Mării Arabiei."],
      en: ["The battle is considered a turning point in the Dhofar Rebellion.", "The fort is located directly on the Arabian Sea coast."]
    }
  },
  {
    id: "sunaysilah-fort-history-v2",
    type: "historical-site",
    parent: "OM-SJ",
    coords: [59.5244, 22.5694],
    name: { de: "Festung Sunaysilah", hu: "Sunaysilah erőd", ro: "Fortul Sunaysilah", en: "Sunaysilah Fort" },
    description: {
      de: "Die Festung Sunaysilah überblickt die Küstenstadt Sur und ist ein fast quadratisches Bauwerk aus dem 18. Jahrhundert. Sie sicherte die Verteidigung gegen Angreifer vom Landesinneren aus.",
      hu: "A Sunaysilah erőd Sur tengerparti városára néz, és egy szinte négyzet alakú építmény a 18. századból. A szárazföld felől érkező támadók elleni védelmet biztosította.",
      ro: "Fortul Sunaysilah domină orașul de coastă Sur și este o structură aproape pătrată din secolul al XVIII-lea. Asigura apărarea împotriva atacatorilor dinspre interiorul uscatului.",
      en: "Sunaysilah Fort overlooks the coastal city of Sur and is a nearly square structure dating to the 18th century. It secured the defense against attackers from the interior."
    },
    facts: {
      de: ["Die vier runden Wachtürme sind strategisch an den Ecken positioniert.", "Befindet sich auf einem kleinen Hügel in der Stadtmitte."],
      hu: ["A négy kerek őrtorony stratégiailag a sarkokon helyezkedik el.", "Egy kis dombon található a város központjában."],
      ro: ["Cele patru turnuri de veghe rotunde sunt poziționate strategic în colțuri.", "Este situat pe un mic deal în centrul orașului."],
      en: ["The four round watchtowers are strategically positioned at the corners.", "Situated on a small hill in the center of the town."]
    }
  },
  {
    id: "bilad-sur-castle-history-v2",
    type: "historical-site",
    parent: "OM-SJ",
    coords: [59.5083, 22.5486],
    name: { de: "Schloss Bilad Sur", hu: "Bilad Sur kastély", ro: "Castelul Bilad Sur", en: "Bilad Sur Castle" },
    description: {
      de: "Das Schloss Bilad Sur liegt drei Kilometer im Landesinneren von Sur. Es wurde zum Schutz der nahegelegenen Dattelpalmen-Plantagen und zur Überwachung der Zugangswege errichtet.",
      hu: "A Bilad Sur kastély három kilométerre a szárazföld belsejében fekszik Surtól. A közeli datolyapálma-ültetvények védelmére és a hozzáférési útvonalak ellenőrzésére építették.",
      ro: "Castelul Bilad Sur este situat la trei kilometri în interior, față de orașul Sur. A fost construit pentru a proteja plantațiile de curmali din apropiere și pentru a supraveghea căile de acces.",
      en: "Bilad Sur Castle is located three kilometers inland from Sur. It was built to protect the nearby date palm plantations and to monitor the access routes."
    },
    facts: {
      de: ["Verfügt über unterschiedliche Torformen in seinem Design.", "Gegenwärtig beherbergt es ein kleines lokales Museum."],
      hu: ["Kialakításában különböző formájú kapukkal rendelkezik.", "Jelenleg egy kis helyi múzeumnak ad otthont."],
      ro: ["Dispune de forme diferite de porți în designul său.", "În prezent, găzduiește un mic muzeu local."],
      en: ["Features various archway designs within its structure.", "Currently houses a small local museum."]
    }
  }
];
