import type { POI } from "./poi";

export const poiExtraIcelandHistory: POI[] = [
  {
    id: "historical-bessastadir-extra",
    type: "historical",
    parent: "IS-005",
    coords: [-22.0108, 64.1064],
    name: { de: "Bessastaðir", hu: "Bessastaðir", ro: "Bessastaðir", en: "Bessastaðir" },
    description: {
      de: "Der offizielle Amtssitz des Präsidenten von Island, ein historischer Ort mit Wurzeln in der Wikingerzeit.",
      hu: "Izland elnökének hivatalos rezidenciája, történelmi helyszín, amelynek gyökerei a viking korig nyúlnak vissza.",
      ro: "Reședința oficială a președintelui Islandei, un sit istoric cu rădăcini în epoca vikingă.",
      en: "The official residence of the President of Iceland, a historic site with roots dating back to the Viking Age."
    },
    facts: {
      de: ["Snorri Sturluson besaß diesen Ort im 13. Jahrhundert.", "Diente jahrhundertelang als Sitz dänischer Gouverneure.", "Die heutige Kirche wurde im späten 18. Jahrhundert erbaut.", "Es ist einer der ältesten gemauerten Gebäudekomplexe Islands."],
      hu: ["A 13. században Snorri Sturluson tulajdona volt.", "Évszázadokig a dán kormányzók székhelyeként szolgált.", "A mai templom a 18. század végén épült.", "Izland egyik legrégebbi falazott épületegyüttese."],
      ro: ["Snorri Sturluson a deținut acest loc în secolul al XIII-lea.", "A servit timp de secole ca sediu al guvernatorilor danezi.", "Biserica actuală a fost construită la sfârșitul secolului al XVIII-lea.", "Este unul dintre cele mai vechi complexe de clădiri din piatră din Islanda."],
      en: ["Snorri Sturluson owned this site in the 13th century.", "Served as the seat of Danish governors for centuries.", "The current church was built in the late 18th century.", "It is one of Iceland's oldest masonry building complexes."]
    }
  },
  {
    id: "historical-reykholt-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-21.2911, 64.665],
    name: { de: "Reykholt", hu: "Reykholt", ro: "Reykholt", en: "Reykholt" },
    description: {
      de: "Einer der wichtigsten historischen Orte Islands, Heimat des mittelalterlichen Gelehrten Snorri Sturluson.",
      hu: "Izland egyik legfontosabb történelmi helyszíne, Snorri Sturluson középkori tudós otthona.",
      ro: "Unul dintre cele mai importante situri istorice din Islanda, casa savantului medieval Snorri Sturluson.",
      en: "One of Iceland's most significant historical sites, home of the medieval scholar Snorri Sturluson."
    },
    facts: {
      de: ["Snorri Sturluson schrieb hier die Snorra-Edda.", "Beherbergt das älteste von Menschenhand geschaffene Bad Islands, Snorralaug.", "War im Mittelalter ein Zentrum für Kultur und Politik.", "Verfügt über ein modernes Kulturzentrum, das Snorrastofa."],
      hu: ["Snorri Sturluson itt írta a Snorra-Eddát.", "Itt található Izland legrégebbi mesterséges medencéje, a Snorralaug.", "A középkorban kulturális és politikai központ volt.", "Modern kulturális központtal (Snorrastofa) rendelkezik."],
      ro: ["Snorri Sturluson a scris aici Snorra Edda.", "Găzduiește cea mai veche piscină artificială din Islanda, Snorralaug.", "A fost un centru cultural și politic în Evul Mediu.", "Dispune de un centru cultural modern numit Snorrastofa."],
      en: ["Snorri Sturluson wrote the Prose Edda here.", "Features the oldest man-made bath in Iceland, Snorralaug.", "Was a major cultural and political center in the Middle Ages.", "Houses a modern cultural center called Snorrastofa."]
    }
  },
  {
    id: "historical-eiriksstadir-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-21.5031, 65.0511],
    name: { de: "Eiríksstaðir", hu: "Eiríksstaðir", ro: "Eiríksstaðir", en: "Eiríksstaðir" },
    description: {
      de: "Der Bauernhof von Erik dem Roten und Geburtsort von Leif Eriksson, dem Entdecker Amerikas.",
      hu: "Vörös Erik farmja és Leif Eriksson, Amerika felfedezőjének szülőhelye.",
      ro: "Ferma lui Erik cel Roșu și locul de naștere al lui Leif Erikson, exploratorul Americii.",
      en: "The farm of Erik the Red and birthplace of Leif Eriksson, the discoverer of North America."
    },
    facts: {
      de: ["Rekonstruiertes Langhaus aus der Wikingerzeit.", "Liegt im Tal Haukadalur in Westisland.", "Zeigt das tägliche Leben der Siedler im 10. Jahrhundert.", "Erik der Rote startete von hier seine Reise nach Grönland."],
      hu: ["Rekonstruált viking hosszúház látható itt.", "Nyugat-Izlandon, a Haukadalur-völgyben található.", "A 10. századi telepesek mindennapjait mutatja be.", "Vörös Erik innen indult Grönland felfedezésére."],
      ro: ["O casă lungă vikingă reconstruită poate fi vizitată aici.", "Situat în valea Haukadalur din vestul Islandei.", "Prezintă viața de zi cu zi a coloniștilor din secolul al X-lea.", "Erik cel Roșu a plecat de aici în călătoria sa spre Groenlanda."],
      en: ["Features a reconstructed Viking-era longhouse.", "Located in the Haukadalur valley in West Iceland.", "Demonstrates the daily life of 10th-century settlers.", "Erik the Red set off from here to settle Greenland."]
    }
  },
  {
    id: "historical-holar-extra",
    type: "monastery",
    parent: "IS-008",
    coords: [-19.1122, 65.7331],
    name: { de: "Hólar í Hjaltadal", hu: "Hólar", ro: "Hólar", en: "Hólar" },
    description: {
      de: "Einst ein bedeutender Bischofssitz und ein Zentrum der Bildung im Norden Islands.",
      hu: "Egykor jelentős püspöki székhely és oktatási központ Észak-Izlandon.",
      ro: "Odinioară un sediu episcopal major și un centru de educație în nordul Islandei.",
      en: "Formerly a major episcopal seat and a center of learning in North Iceland."
    },
    facts: {
      de: ["Gegründet als Diözese im Jahr 1106.", "Beherbergt die älteste Steinkirche Islands.", "War im 16. Jahrhundert ein Zentrum der Buchdruckerei.", "Heute Sitz einer renommierten Agraruniversität."],
      hu: ["Egyházmegyeként alapították 1106-ban.", "Itt található Izland legrégebbi kőtemploma.", "A 16. században a könyvnyomtatás központja volt.", "Ma egy neves mezőgazdasági egyetem székhelye."],
      ro: ["Fondată ca dieceză în anul 1106.", "Găzduiește cea mai veche biserică de piatră din Islanda.", "A fost un centru de tipărire a cărților în secolul al XVI-lea.", "Astăzi găzduiește o universitate agricolă de renume."],
      en: ["Established as a diocese in 1106.", "Home to the oldest stone church in Iceland.", "Was a center for printing in the 16th century.", "Now home to a well-known agricultural university."]
    }
  },
  {
    id: "historical-keldur-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-20.2375, 63.8231],
    name: { de: "Keldur", hu: "Keldur", ro: "Keldur", en: "Keldur" },
    description: {
      de: "Ein historischer Bauernhof mit den ältesten erhaltenen Torfhäusern Islands.",
      hu: "Történelmi farm, ahol Izland legrégebbi fennmaradt gyepházai találhatók.",
      ro: "O fermă istorică cu cele mai vechi case de turbă conservate din Islanda.",
      en: "A historic farm featuring the oldest surviving turf houses in Iceland."
    },
    facts: {
      de: ["Wird in der berühmten Njáls-Saga erwähnt.", "Besitzt einen geheimen unterirdischen Tunnel.", "Die ältesten Teile stammen aus dem 12. oder 13. Jahrhundert.", "Ein wunderbares Beispiel für traditionelle isländische Architektur."],
      hu: ["Említik a híres Njál-szagában.", "Rendelkezik egy titkos földalatti alagúttal.", "A legrégebbi részei a 12. vagy 13. századból származnak.", "A hagyományos izlandi építészet csodálatos példája."],
      ro: ["Menționată în celebra Saga lui Njál.", "Are un tunel subteran secret.", "Cele mai vechi părți datează din secolul al XII-lea sau al XIII-lea.", "Un exemplu minunat de arhitectură tradițională islandeză."],
      en: ["Mentioned in the famous Njál's Saga.", "Contains a secret underground tunnel.", "The oldest parts date back to the 12th or 13th century.", "A magnificent example of traditional Icelandic architecture."]
    }
  },
  {
    id: "historical-laufas-extra",
    type: "historical",
    parent: "IS-009",
    coords: [-18.0711, 65.8939],
    name: { de: "Laufás", hu: "Laufás", ro: "Laufás", en: "Laufás" },
    description: {
      de: "Ein beeindruckender Torf-Bauernhof und Pfarrsitz aus dem 19. Jahrhundert in der Nähe von Akureyri.",
      hu: "Lenyűgöző 19. századi gyeptetős farm és lelkészlak Akureyri közelében.",
      ro: "O fermă impunătoare din turbă și reședință parohială din secolul al XIX-lea, lângă Akureyri.",
      en: "An impressive 19th-century turf farm and parsonage located near Akureyri."
    },
    facts: {
      de: ["Besteht aus mehreren miteinander verbundenen Torfhäusern.", "Beherbergt ein interessantes Heimatmuseum.", "Erstmals zur Zeit der Besiedlung Islands erwähnt.", "Die Kirche am Ort wurde 1865 erbaut."],
      hu: ["Több egymáshoz kapcsolódó gyepházból áll.", "Érdekes helytörténeti múzeumnak ad otthont.", "Először Izland benépesülésének idején említik.", "A helyi templom 1865-ben épült."],
      ro: ["Formată din mai multe case de turbă interconectate.", "Găzduiește un muzeu etnografic interesant.", "Menționată prima dată în perioada colonizării Islandei.", "Biserica de pe sit a fost construită în 1865."],
      en: ["Consists of several interconnected turf houses.", "Houses an interesting local history museum.", "First mentioned during the Settlement of Iceland.", "The current church was built in 1865."]
    }
  },
  {
    id: "historical-munkathvera-extra",
    type: "monastery",
    parent: "IS-009",
    coords: [-18.0861, 65.5539],
    name: { de: "Munkaþverá", hu: "Munkaþverá", ro: "Munkaþverá", en: "Munkaþverá" },
    description: {
      de: "Der Standort eines ehemaligen Benediktinerklosters, das im 12. Jahrhundert gegründet wurde.",
      hu: "Egy korábbi, 12. században alapított bencés kolostor helyszíne.",
      ro: "Locul unei foste mănăstiri benedictine, fondată în secolul al XII-lea.",
      en: "The site of a former Benedictine monastery founded in the 12th century."
    },
    facts: {
      de: ["Wurde im Jahr 1155 als Kloster geweiht.", "War im Mittelalter ein Zentrum für Bildung und Schriftkunst.", "Die heutige Kirche stammt aus dem Jahr 1844.", "Ein Denkmal erinnert an den Abt Bergur Gunnsteinsson."],
      hu: ["1155-ben szentelték kolostorrá.", "A középkorban az oktatás és az írásművészet központja volt.", "A mai templom 1844-ből származik.", "Emlékmű őrzi Bergur Gunnsteinsson apát emlékét."],
      ro: ["A fost sfințită ca mănăstire în anul 1155.", "A fost un centru de educație și manuscrise în Evul Mediu.", "Biserica actuală datează din anul 1844.", "Un monument îl comemorează pe starețul Bergur Gunnsteinsson."],
      en: ["Consecrated as a monastery in 1155.", "Was a major center for education and literature in the Middle Ages.", "The current church dates back to 1844.", "A monument commemorates Abbot Bergur Gunnsteinsson."]
    }
  },
  {
    id: "historical-skriduklaustur-extra",
    type: "monastery",
    parent: "IS-001",
    coords: [-15.0511, 65.0411],
    name: { de: "Skriðuklaustur", hu: "Skriðuklaustur", ro: "Skriðuklaustur", en: "Skriðuklaustur" },
    description: {
      de: "Einst ein Augustinerkloster und später das Wohnhaus des Schriftstellers Gunnar Gunnarsson.",
      hu: "Egykor ágostonos kolostor, később Gunnar Gunnarsson író lakóháza.",
      ro: "Odinioară o mănăstire augustiniană și ulterior casa scriitorului Gunnar Gunnarsson.",
      en: "Formerly an Augustinian monastery and later the home of writer Gunnar Gunnarsson."
    },
    facts: {
      de: ["Das Kloster wurde im Jahr 1493 gegründet.", "Archäologische Ausgrabungen legten die Klosterruinen frei.", "Das markante Herrenhaus wurde 1939 erbaut.", "Dient heute als Kultur- und Bildungszentrum."],
      hu: ["A kolostort 1493-ban alapították.", "Régészeti ásatások tárták fel a kolostor romjait.", "A jellegzetes udvarház 1939-ben épült.", "Ma kulturális és oktatási központként szolgál."],
      ro: ["Mănăstirea a fost fondată în anul 1493.", "Săpăturile arheologice au scos la iveală ruinele mănăstirii.", "Conacul distinctiv a fost construit în 1939.", "Astăzi servește ca centru cultural și educațional."],
      en: ["The monastery was established in 1493.", "Archaeological excavations revealed the monastery ruins.", "The distinctive manor house was built in 1939.", "Now serves as a cultural and educational center."]
    }
  },
  {
    id: "historical-modrudalur-extra",
    type: "landmark",
    parent: "IS-001",
    coords: [-15.8839, 65.3739],
    name: { de: "Möðrudalur", hu: "Möðrudalur", ro: "Möðrudalur", en: "Möðrudalur" },
    description: {
      de: "Der höchstgelegene bewohnte Bauernhof Islands, bekannt für seine weite Aussicht und Geschichte.",
      hu: "Izland legmagasabban fekvő lakott farmja, kilátásáról és történelméről ismert.",
      ro: "Cea mai înaltă fermă locuită din Islanda, cunoscută pentru priveliștile și istoria sa.",
      en: "The highest inhabited farm in Iceland, known for its expansive views and history."
    },
    facts: {
      de: ["Liegt auf 469 Metern über dem Meeresspiegel.", "Wird bereits in der Zeit der Besiedlung erwähnt.", "Besitzt eine kleine Kirche, die ein Bauer selbst baute.", "Ein wichtiger Stopp auf dem Weg durch das Hochland."],
      hu: ["469 méterrel a tengerszint felett fekszik.", "Már a honfoglalás korában is említik.", "Saját kis temploma van, amit egy gazda épített.", "Fontos megálló a felföldön átvezető úton."],
      ro: ["Situată la 469 de metri deasupra nivelului mării.", "Menționată încă din perioada colonizării.", "Are o mică biserică construită de un fermier local.", "Un punct de oprire important pe rutele montane."],
      en: ["Located 469 meters above sea level.", "Mentioned in records dating back to the Settlement period.", "Features a small church built by a local farmer.", "A significant stop on routes through the highlands."]
    }
  },
  {
    id: "historical-thingeyrar-extra",
    type: "monastery",
    parent: "IS-008",
    coords: [-20.4011, 65.5511],
    name: { de: "Þingeyrar", hu: "Þingeyrar", ro: "Þingeyrar", en: "Þingeyrar" },
    description: {
      de: "Der Standort des ersten Klosters Islands, ein wichtiges mittelalterliches Literaturzentrum.",
      hu: "Izland első kolostorának helyszíne, fontos középkori irodalmi központ.",
      ro: "Locul primei mănăstiri din Islanda, un important centru literar medieval.",
      en: "The site of Iceland's first monastery, a major medieval literary center."
    },
    facts: {
      de: ["Das Benediktinerkloster wurde 1133 gegründet.", "Viele isländische Sagas wurden hier niedergeschrieben.", "Beherbergt eine beeindruckende Steinkirche von 1877.", "Bekannt für wertvolle Kunstwerke im Kircheninneren."],
      hu: ["A bencés kolostort 1133-ban alapították.", "Számos izlandi szagát itt jegyeztek le.", "Lenyűgöző, 1877-ben épült kőtemplommal rendelkezik.", "Híres a templomban található értékes műtárgyakról."],
      ro: ["Mănăstirea benedictină a fost fondată în 1133.", "Multe saga islandeze au fost scrise aici.", "Găzduiește o biserică impunătoare de piatră din 1877.", "Cunoscută pentru operele de artă valoroase din interiorul bisericii."],
      en: ["The Benedictine monastery was founded in 1133.", "Many Icelandic Sagas were written down here.", "Features an impressive stone church built in 1877.", "Known for valuable artworks inside the church."]
    }
  },
  {
    id: "historical-helgafell-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-22.7239, 65.0439],
    name: { de: "Helgafell", hu: "Helgafell", ro: "Helgafell", en: "Helgafell" },
    description: {
      de: "Ein heiliger Berg und historischer Ort auf der Halbinsel Snæfellsnes.",
      hu: "Szent hegy és történelmi helyszín a Snæfellsnes-félszigeten.",
      ro: "Un munte sfânt și un sit istoric pe peninsula Snæfellsnes.",
      en: "A sacred hill and historical site on the Snæfellsnes Peninsula."
    },
    facts: {
      de: ["Wird in der Laxdæla-Saga als heiliger Ort erwähnt.", "Guðrún Ósvífursdóttir ist hier begraben.", "Früher stand hier ein Augustinerkloster.", "Wer den Berg schweigend besteigt, hat drei Wünsche frei."],
      hu: ["A Laxdæla-szagában szent helyként említik.", "Itt nyugszik Guðrún Ósvífursdóttir.", "Korábban ágostonos kolostor állt itt.", "Aki némán mássza meg, annak három kívánsága teljesül."],
      ro: ["Menționat ca loc sfânt în Saga Laxdæla.", "Guðrún Ósvífursdóttir este înmormântată aici.", "O mănăstire augustiniană a existat aici în trecut.", "Cine urcă muntele în tăcere primește trei dorințe."],
      en: ["Mentioned as a sacred place in the Laxdæla Saga.", "Guðrún Ósvífursdóttir is buried here.", "An Augustinian monastery was once located here.", "Climbing the hill in silence is said to grant three wishes."]
    }
  },
  {
    id: "historical-gasir-extra",
    type: "historical",
    parent: "IS-009",
    coords: [-18.1739, 65.7839],
    name: { de: "Gásir", hu: "Gásir", ro: "Gásir", en: "Gásir" },
    description: {
      de: "Ein mittelalterlicher Handelsplatz an der Mündung des Eyjafjörður.",
      hu: "Középkori kereskedőhely az Eyjafjörður torkolatánál.",
      ro: "Un post comercial medieval la gura de vărsare a fiordului Eyjafjörður.",
      en: "A medieval trading post located at the mouth of the Eyjafjörður Fjord."
    },
    facts: {
      de: ["War der wichtigste Handelsplatz Nordislands im Mittelalter.", "Wurde bereits im 12. Jahrhundert in Quellen erwähnt.", "Archäologische Funde zeigen Handel mit ganz Europa.", "Jedes Jahr findet hier ein Mittelaltermarkt statt."],
      hu: ["Észak-Izland legfontosabb kereskedelmi központja volt.", "Már a 12. századi forrásokban is említik.", "A leletek egész Európával való kereskedelemre utalnak.", "Minden évben középkori napokat tartanak itt."],
      ro: ["A fost cel mai important port comercial din nordul Islandei.", "Menționat în surse scrise încă din secolul al XII-lea.", "Descoperirile arheologice atestă comerțul cu restul Europei.", "Anual se organizează aici un festival medieval."],
      en: ["Was the main trading hub in North Iceland during the Middle Ages.", "Mentioned in written sources as early as the 12th century.", "Archaeological finds show trade with all of Europe.", "A medieval festival is held here every year."]
    }
  },
  {
    id: "historical-herjolfsbaer-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-20.2939, 63.4411],
    name: { de: "Herjólfsbær", hu: "Herjólfsbær", ro: "Herjólfsbær", en: "Herjólfsbær" },
    description: {
      de: "Ein rekonstruierter Wikinger-Bauernhof in den Westmänner-Inseln.",
      hu: "Rekonstruált viking farm a Vestmannaeyjar-szigeteken.",
      ro: "O fermă vikingă reconstruită în Insulele Westman.",
      en: "A reconstructed Viking-era farm in the Westman Islands."
    },
    facts: {
      de: ["Basiert auf archäologischen Funden im Herjólfsdalur.", "Zeigt die Bauweise der ersten Siedler auf den Inseln.", "Herjólfur Bárðarson gilt als erster Siedler der Inseln.", "Ein lebendiges Museum für die frühe Geschichte Islands."],
      hu: ["A Herjólfsdalurban végzett ásatásokon alapul.", "A szigetek első telepeseinek építkezési stílusát mutatja be.", "Herjólfur Bárðarsont tartják az első telepesnek.", "Élő múzeum Izland korai történelméről."],
      ro: ["Bazată pe descoperirile arheologice din Herjólfsdalur.", "Prezintă stilul de construcție al primilor coloniști.", "Herjólfur Bárðarson este considerat primul colonist al insulelor.", "Un muzeu viu dedicat istoriei timpurii a Islandei."],
      en: ["Based on archaeological excavations in Herjólfsdalur.", "Displays the building style of the islands' first settlers.", "Herjólfur Bárðarson is considered the islands' first settler.", "A living history museum focused on early Icelandic history."]
    }
  },
  {
    id: "historical-stong-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-19.7439, 64.1539],
    name: { de: "Stöng", hu: "Stöng", ro: "Stöng", en: "Stöng" },
    description: {
      de: "Ein ausgegrabener Wikinger-Bauernhof, der 1104 durch den Vulkan Hekla verschüttet wurde.",
      hu: "Feltárt viking farm, amelyet 1104-ben temetett be a Hekla vulkán hamuja.",
      ro: "O fermă vikingă excavată, îngropată în 1104 de cenușa vulcanului Hekla.",
      en: "An excavated Viking-era farm buried by the Hekla eruption in 1104."
    },
    facts: {
      de: ["Wurde 1939 von Archäologen wiederentdeckt.", "Bietet wertvolle Einblicke in das Leben der Wikingerzeit.", "Eine originalgetreue Rekonstruktion steht im Þjóðveldisbærinn.", "Liegt im malerischen Tal Þjórsárdalur."],
      hu: [ "1939-ben fedezték fel régészek.", "Értékes betekintést nyújt a viking kori életbe.", "Hű másolata megtekinthető a Þjóðveldisbærinn skanzenben.", "A festői Þjórsárdalur-völgyben található."],
      ro: ["Descoperită de arheologi în anul 1939.", "Oferă informații prețioase despre viața din epoca vikingă.", "O replică fidelă poate fi vizitată la Þjóðveldisbærinn.", "Situată în valea pitorească Þjórsárdalur."],
      en: ["Discovered by archaeologists in 1939.", "Provides unique insights into Viking-era life.", "A faithful reconstruction is located at Þjóðveldisbærinn.", "Situated in the scenic Þjórsárdalur valley."]
    }
  },
  {
    id: "historical-hrafnseyri-extra",
    type: "historical",
    parent: "IS-007",
    coords: [-23.4539, 65.8539],
    name: { de: "Hrafnseyri", hu: "Hrafnseyri", ro: "Hrafnseyri", en: "Hrafnseyri" },
    description: {
      de: "Der Geburtsort von Jón Sigurðsson, dem Anführer der isländischen Unabhängigkeitsbewegung.",
      hu: "Jón Sigurðsson, az izlandi függetlenségi mozgalom vezetőjének szülőhelye.",
      ro: "Locul de naștere al lui Jón Sigurðsson, liderul mișcării de independență a Islandei.",
      en: "The birthplace of Jón Sigurðsson, the leader of Iceland's independence movement."
    },
    facts: {
      de: ["Beherbergt ein Museum über das Leben von Jón Sigurðsson.", "Liegt malerisch am Arnarfjörður in den Westfjorden.", "Verfügt über eine traditionelle Torfkapelle.", "Ein wichtiger Ort für das isländische Nationalbewusstsein."],
      hu: ["Múzeum mutatja be Jón Sigurðsson életét.", "Festői helyen, az Arnarfjörður partján fekszik.", "Hagyományos tőzegkápolnával rendelkezik.", "Fontos helyszín az izlandi nemzeti öntudat számára."],
      ro: ["Găzduiește un muzeu dedicat vieții lui Jón Sigurðsson.", "Situat pitoresc pe malul fiordului Arnarfjörður.", "Are o capelă tradițională din turbă.", "Un loc de mare importanță pentru identitatea națională islandeză."],
      en: ["Home to a museum dedicated to Jón Sigurðsson's life.", "Beautifully located by Arnarfjörður in the Westfjords.", "Features a traditional turf-roofed chapel.", "A key site for Icelandic national identity."]
    }
  },
  {
    id: "historical-saurbaer-extra",
    type: "historical",
    parent: "IS-003",
    coords: [-21.9139, 64.3839],
    name: { de: "Saurbær am Hvalfjörður", hu: "Saurbær", ro: "Saurbær", en: "Saurbær" },
    description: {
      de: "Ein historischer Ort am Hvalfjörður, Heimat des Dichters Hallgrímur Pétursson.",
      hu: "Történelmi hely a Hvalfjörður-nél, Hallgrímur Pétursson költő otthona.",
      ro: "Un sit istoric pe malul fiordului Hvalfjörður, casa poetului Hallgrímur Pétursson.",
      en: "A historic site on Hvalfjörður, home of the famous poet Hallgrímur Pétursson."
    },
    facts: {
      de: ["Hallgrímur Pétursson schrieb hier die Passionshymnen.", "Die heutige Hallgrímskirkja wurde 1957 geweiht.", "War ein bedeutender Pfarrsitz in Westisland.", "Bietet eine wunderschöne Aussicht auf den Fjord."],
      hu: ["Hallgrímur Pétursson itt írta a Passió-himnuszokat.", "A mai Hallgrímskirkját 1957-ben szentelték fel.", "Fontos lelkészlak volt Nyugat-Izlandon.", "Gyönyörű kilátást nyújt a fjordra."],
      ro: ["Hallgrímur Pétursson a scris aici Imnurile Patimilor.", "Actuala biserică Hallgrímskirkja a fost sfințită în 1957.", "A fost o reședință parohială importantă în vestul Islandei.", "Oferă o vedere superbă asupra fiordului."],
      en: ["Hallgrímur Pétursson wrote his Passion Hymns here.", "The current Hallgrímskirkja church was consecrated in 1957.", "Was a significant parsonage in West Iceland.", "Offers stunning views over the fjord."]
    }
  },
  {
    id: "historical-modruvellir-extra",
    type: "historical",
    parent: "IS-009",
    coords: [-18.2539, 65.7739],
    name: { de: "Möðruvellir", hu: "Möðruvellir", ro: "Möðruvellir", en: "Möðruvellir" },
    description: {
      de: "Ein bedeutender historischer Ort im Eyjafjörður, einst Sitz eines Klosters und einer Schule.",
      hu: "Fontos történelmi hely az Eyjafjörður-völgyben, egykor kolostor és iskola székhelye.",
      ro: "Un sit istoric important în valea Eyjafjörður, odinioară sediu al unei mănăstiri și al unei școli.",
      en: "A significant historical site in Eyjafjörður, formerly the seat of a monastery and a school."
    },
    facts: {
      de: ["Das Augustinerkloster wurde 1296 gegründet.", "War im 19. Jahrhundert Sitz einer Amtsschule.", "Beherbergt eine schöne Holzkirche von 1867.", "Hannes Hafstein, Islands erster Minister, wurde hier geboren."],
      hu: ["Az ágostonos kolostort 1296-ban alapították.", "A 19. században fontos iskola működött itt.", "Szép, 1867-ből származó fatemplommal rendelkezik.", "Itt született Hannes Hafstein, Izland első minisztere."],
      ro: ["Mănăstirea augustiniană a fost fondată în 1296.", "A găzduit o școală importantă în secolul al XIX-lea.", "Are o biserică frumoasă din lemn construită în 1867.", "Hannes Hafstein, primul ministru al Islandei, s-a născut aici."],
      en: ["The Augustinian monastery was founded in 1296.", "Was the location of a prominent school in the 19th century.", "Features a beautiful wooden church from 1867.", "Birthplace of Hannes Hafstein, Iceland's first minister."]
    }
  },
  {
    id: "historical-grotta-extra",
    type: "landmark",
    parent: "IS-005",
    coords: [-22.0239, 64.1639],
    name: { de: "Grótta", hu: "Grótta", ro: "Grótta", en: "Grótta" },
    description: {
      de: "Ein Naturschutzgebiet und historischer Leuchtturmplatz an der Spitze von Seltjarnarnes.",
      hu: "Természetvédelmi terület és történelmi világítótorony Seltjarnarnes csúcsán.",
      ro: "O rezervație naturală și un sit istoric cu far în vârful peninsulei Seltjarnarnes.",
      en: "A nature reserve and historic lighthouse site at the tip of Seltjarnarnes."
    },
    facts: {
      de: ["Der heutige Leuchtturm stammt aus dem Jahr 1947.", "Bei Flut wird der Ort zu einer Insel.", "Ein beliebter Ort zur Beobachtung von Nordlichtern.", "Wichtiger Brutplatz für zahlreiche Vogelarten."],
      hu: ["A mai világítótorony 1947-ből származik.", "Dagálykor a hely szigetté válik.", "Népszerű hely a sarki fény megfigyelésére.", "Számos madárfaj fontos fészkelőhelye."],
      ro: ["Farul actual datează din anul 1947.", "Locul devine o insulă în timpul fluxului.", "Un loc popular pentru observarea aurorei boreale.", "Zonă importantă de cuibărit pentru numeroase păsări."],
      en: ["The current lighthouse was built in 1947.", "The site becomes an island during high tide.", "A popular spot for observing the Northern Lights.", "An important nesting ground for various bird species."]
    }
  },
  {
    id: "historical-hopsnes-extra",
    type: "landmark",
    parent: "IS-003",
    coords: [-22.4239, 63.8239],
    name: { de: "Hópsnes", hu: "Hópsnes", ro: "Hópsnes", en: "Hópsnes" },
    description: {
      de: "Eine Halbinsel bei Grindavík, bekannt für ihre dramatischen Schiffswracks und Geschichte.",
      hu: "Grindavík melletti félsziget, drámai hajóroncsairól és történelméről ismert.",
      ro: "O peninsulă lângă Grindavík, cunoscută pentru epavele sale dramatice și istorie.",
      en: "A peninsula near Grindavík known for its dramatic shipwrecks and maritime history."
    },
    facts: {
      de: ["Zahlreiche Schiffswracks säumen die Küste.", "Informationsschilder erzählen die Geschichten der Havarien.", "Besitzt einen markanten orangefarbenen Leuchtturm.", "Entstand durch einen Lavastrom vor etwa 2800 Jahren."],
      hu: ["Számos hajóroncs található a part mentén.", "Információs táblák mesélik el a tragédiák történetét.", "Jellegzetes narancssárga világítótornya van.", "Egy 2800 évvel ezelőtti lávafolyam hozta létre."],
      ro: ["Numeroase epave pot fi văzute de-a lungul coastei.", "Panouri informative spun poveștile naufragiilor.", "Are un far portocaliu distinctiv.", "Formată de o scurgere de lavă acum aproximativ 2800 de ani."],
      en: ["Numerous shipwrecks line the coast.", "Information signs tell the stories of the maritime accidents.", "Features a striking orange lighthouse.", "Formed by a lava flow approximately 2800 years ago."]
    }
  },
  {
    id: "historical-breidabolsstadur-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-20.0239, 63.7539],
    name: { de: "Breiðabólsstaður", hu: "Breiðabólsstaður", ro: "Breiðabólsstaður", en: "Breiðabólsstaður" },
    description: {
      de: "Ein historischer Ort im Süden Islands, bekannt als Zentrum für Kultur und Recht.",
      hu: "Történelmi hely Dél-Izlandon, kultúrájáról és jogtörténetéről ismert.",
      ro: "Un sit istoric în sudul Islandei, cunoscut ca centru de cultură și drept.",
      en: "A historic site in South Iceland known as a center for culture and law."
    },
    facts: {
      de: ["Hafliði Másson ließ hier im 12. Jahrhundert Gesetze aufzeichnen.", "War ein bedeutender Standort für die frühe isländische Literatur.", "Wird in mehreren isländischen Sagas erwähnt.", "Die heutige Kirche wurde 1912 erbaut."],
      hu: ["Hafliði Másson itt jegyeztette le a törvényeket a 12. században.", "A korai izlandi irodalom fontos helyszíne volt.", "Több izlandi szagában is szerepel.", "A mai templom 1912-ben épült."],
      ro: ["Hafliði Másson a dispus scrierea legilor aici în secolul al XII-lea.", "A fost un loc important pentru literatura islandeză timpurie.", "Menționat în mai multe saga islandeze.", "Biserica actuală a fost construită în anul 1912."],
      en: ["Hafliði Másson had laws recorded here in the 12th century.", "Was a significant location for early Icelandic literature.", "Mentioned in several Icelandic Sagas.", "The current church was built in 1912."]
    }
  },
  {
    id: "historical-oddi-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-20.4139, 63.7739],
    name: { de: "Oddi", hu: "Oddi", ro: "Oddi", en: "Oddi" },
    description: {
      de: "Ein einst mächtiger Clan-Sitz und Zentrum der Gelehrsamkeit im Mittelalter.",
      hu: "Egykor hatalmas nemzetségi székhely és a tudományok központja a középkorban.",
      ro: "Odinioară un sediu puternic de clan și centru de învățați în Evul Mediu.",
      en: "Formerly a powerful clan seat and a center of scholarship in the Middle Ages."
    },
    facts: {
      de: ["Heimat des mächtigen Oddaverjar-Clans.", "Snorri Sturluson wurde hier erzogen.", "Sæmundur der Weise war hier Priester.", "War ein politisches und kulturelles Zentrum Süd-Islands."],
      hu: ["A hatalmas Oddaverjar-nemzetség otthona.", "Snorri Sturlusont itt nevelték.", "A bölcs Sæmundur itt volt pap.", "Dél-Izland politikai és kulturális központja volt."],
      ro: ["Casa puternicului clan Oddaverjar.", "Snorri Sturluson a fost educat aici.", "Sæmundur cel Înțelept a fost preot aici.", "A fost un centru politic și cultural în sudul Islandei."],
      en: ["Home to the powerful Oddaverjar clan.", "Snorri Sturluson was fostered and educated here.", "Sæmundur the Wise served as a priest here.", "Was a major political and cultural hub in South Iceland."]
    }
  },
  {
    id: "historical-bergthorshvoll-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-20.3439, 63.6639],
    name: { de: "Bergþórshvoll", hu: "Bergþórshvoll", ro: "Bergþórshvoll", en: "Bergþórshvoll" },
    description: {
      de: "Der historische Bauernhof von Njáll Þorgeirsson, Schauplatz der berühmten Njáls-Saga.",
      hu: "Njáll Þorgeirsson történelmi farmja, a híres Njál-szaga helyszíne.",
      ro: "Ferma istorică a lui Njáll Þorgeirsson, locul de desfășurare a celebrei Saga lui Njál.",
      en: "The historic farm of Njáll Þorgeirsson, setting of the famous Njál's Saga."
    },
    facts: {
      de: ["Ort des dramatischen Brandes in der Njáls-Saga.", "Archäologische Ausgrabungen fanden Spuren eines alten Brandes.", "Liegt in den weiten Ebenen des Bezirks Landeyjar.", "Ein wichtiger Ort für Liebhaber isländischer Literatur."],
      hu: ["A Njál-szaga drámai gyújtogatásának helyszíne.", "Régészeti ásatások egy ősi tűzvész nyomait találták meg.", "Landeyjar kerület tágas síkságain található.", "Fontos helyszín az izlandi irodalom kedvelői számára."],
      ro: ["Locul incendiierii dramatice din Saga lui Njál.", "Săpăturile arheologice au găsit urmele unui incendiu vechi.", "Situat în câmpiile largi ale districtului Landeyjar.", "Un loc esențial pentru iubitorii literaturii islandeze."],
      en: ["Setting of the dramatic burning in Njál's Saga.", "Archaeological digs found evidence of an ancient fire.", "Located in the broad plains of the Landeyjar district.", "A significant site for fans of Icelandic literature."]
    }
  },
  {
    id: "historical-hlidarendi-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-20.1039, 63.7239],
    name: { de: "Hlíðarendi", hu: "Hlíðarendi", ro: "Hlíðarendi", en: "Hlíðarendi" },
    description: {
      de: "Der Bauernhof von Gunnar Hámundarson, einem der Helden der Njáls-Saga.",
      hu: "Gunnar Hámundarson farmja, aki a Njál-szaga egyik főhőse volt.",
      ro: "Ferma lui Gunnar Hámundarson, unul dintre eroii din Saga lui Njál.",
      en: "The farm of Gunnar Hámundarson, one of the main heroes of Njál's Saga."
    },
    facts: {
      de: ["Bekannt für Gunnars Weigerung, ins Exil zu gehen.", "Bietet einen herrlichen Blick auf den Eyjafjallajökull.", "Ein Denkmal erinnert an den Sagenhelden Gunnar.", "Liegt am Fuße der malerischen Fljótshlíð-Hügel."],
      hu: ["Híres arról, hogy Gunnar megtagadta a száműzetést.", "Pompás kilátást nyújt az Eyjafjallajökullra.", "Emlékmű őrzi Gunnar, a szagahős emlékét.", "A festői Fljótshlíð-dombok lábánál található."],
      ro: ["Cunoscut pentru refuzul lui Gunnar de a pleca în exil.", "Oferă o priveliște superbă asupra Eyjafjallajökull.", "Un monument îl comemorează pe eroul Gunnar.", "Situat la poalele dealurilor pitorești Fljótshlíð."],
      en: ["Famous for Gunnar's refusal to leave for exile.", "Offers a magnificent view of Eyjafjallajökull.", "A memorial honors the saga hero Gunnar.", "Located at the foot of the scenic Fljótshlíð hills."]
    }
  },
  {
    id: "historical-knorr-extra",
    type: "landmark",
    parent: "IS-006",
    coords: [-22.1039, 64.3139],
    name: { de: "Knörr", hu: "Knörr", ro: "Knörr", en: "Knörr" },
    description: {
      de: "Ein markantes Wahrzeichen und historischer Punkt bei Akranes.",
      hu: "Jellegzetes tájékozódási pont és történelmi hely Akranes közelében.",
      ro: "Un punct de reper distinctiv și un sit istoric lângă Akranes.",
      en: "A distinctive landmark and historical point near Akranes."
    },
    facts: {
      de: ["Historisch bedeutend für die Schifffahrt der Region.", "Liegt an der Küste der Halbinsel Akranes.", "Bietet weite Blicke über den Faxaflói-Golf.", "Teil der frühen Siedlungsgeschichte von Westisland."],
      hu: ["Történelmileg fontos a régió hajózása számára.", "Az Akranes-félsziget partján található.", "Tágas kilátást nyújt a Faxaflói-öbölre.", "Nyugat-Izland korai településtörténetének része."],
      ro: ["Important din punct de vedere istoric pentru navigația în regiune.", "Situat pe coasta peninsulei Akranes.", "Oferă priveliști largi asupra golfului Faxaflói.", "Parte a istoriei timpurii a colonizării vestului Islandei."],
      en: ["Historically significant for navigation in the region.", "Located on the coast of the Akranes peninsula.", "Offers wide views over the Faxaflói bay.", "Part of the early settlement history of West Iceland."]
    }
  },
  {
    id: "historical-hvammur-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-21.6839, 65.1139],
    name: { de: "Hvammur í Dalasýslu", hu: "Hvammur", ro: "Hvammur", en: "Hvammur" },
    description: {
      de: "Der Bauernhof von Auður der Tiefsinnigen, einer der bedeutendsten Siedlerinnen Islands.",
      hu: "Auður djúpúðga farmja, aki Izland egyik legjelentősebb honfoglaló asszonya volt.",
      ro: "Ferma lui Auður cea Înțeleaptă, una dintre cele mai importante coloniste ale Islandei.",
      en: "The farm of Auður the Deep-Minded, one of Iceland's most significant settlers."
    },
    facts: {
      de: ["Gilt als Geburtsort von Snorri Sturluson.", "Auður war eine der wenigen weiblichen Siedlungschefs.", "Liegt im geschichtsträchtigen Bezirk Dalir.", "Ein Ort, an dem sich Christentum und Heidentum trafen."],
      hu: ["Snorri Sturluson szülőhelyének tartják.", "Auður egyike volt a kevés női honfoglaló vezérnek.", "A történelmi jelentőségű Dalir kerületben található.", "Helyszín, ahol a kereszténység és a pogányság találkozott."],
      ro: ["Considerat locul de naștere al lui Snorri Sturluson.", "Auður a fost unul dintre puținii lideri de colonizare de gen feminin.", "Situat în districtul istoric Dalir.", "Un loc unde s-au întâlnit creștinismul și păgânismul."],
      en: ["Regarded as the birthplace of Snorri Sturluson.", "Auður was one of the few female settlement leaders.", "Located in the historically rich Dalir district.", "A site where early Christianity and Paganism intersected."]
    }
  },
  {
    id: "historical-gudrunarlaug-extra",
    type: "landmark",
    parent: "IS-006",
    coords: [-21.6139, 65.2439],
    name: { de: "Guðrúnarlaug", hu: "Guðrúnarlaug", ro: "Guðrúnarlaug", en: "Guðrúnarlaug" },
    description: {
      de: "Ein rekonstruiertes historisches Heißwasserbad, benannt nach der Saga-Heldin Guðrún Ósvífursdóttir.",
      hu: "Rekonstruált történelmi melegvizes medence, Guðrún Ósvífursdóttir szagahősről elnevezve.",
      ro: "O piscină termală istorică reconstruită, numită după eroina de saga Guðrún Ósvífursdóttir.",
      en: "A reconstructed historic hot spring bath named after the saga heroine Guðrún Ósvífursdóttir."
    },
    facts: {
      de: ["Wurde nach einem Erdrutsch im Jahr 2009 rekonstruiert.", "Liegt beim Hotel Laugar in Sælingsdalur.", "Erinnert an die dramatischen Ereignisse der Laxdæla-Saga.", "Verfügt über ein traditionelles Umkleidehäuschen aus Torf."],
      hu: ["Egy 2009-es földcsuszamlás után rekonstruálták.", "Sælingsdalurban, a Hotel Laugar mellett található.", "A Laxdæla-szaga drámai eseményeit idézi fel.", "Hagyományos tőzegfalú öltözőház tartozik hozzá."],
      ro: ["Reconstruită după o alunecare de teren în 2009.", "Situată lângă Hotel Laugar în Sælingsdalur.", "Amintește de evenimentele dramatice din Saga Laxdæla.", "Dispune de o cabină de schimb tradițională din turbă."],
      en: ["Reconstructed after a landslide in 2009.", "Located at Hotel Laugar in Sælingsdalur.", "Recalls the dramatic events of the Laxdæla Saga.", "Features a traditional turf-roofed changing hut."]
    }
  },
  {
    id: "historical-borg-a-myrum-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-21.9139, 64.5539],
    name: { de: "Borg á Mýrum", hu: "Borg á Mýrum", ro: "Borg á Mýrum", en: "Borg á Mýrum" },
    description: {
      de: "Der Bauernhof von Egill Skallagrímsson, dem berühmten Wikinger-Krieger und Dichter.",
      hu: "Egill Skallagrímsson, a híres viking harcos és költő farmja.",
      ro: "Ferma lui Egill Skallagrímsson, celebrul războinic și poet viking.",
      en: "The farm of Egill Skallagrímsson, the famous Viking warrior and poet."
    },
    facts: {
      de: ["Stammvater des mächtigen Mýramenn-Clans.", "Ein Denkmal namens 'Sonatorrek' ehrt Egills Dichtung.", "Wichtiger Schauplatz der Egils-Saga.", "Besitzt eine Kirche mit einer ungewöhnlichen Ausrichtung."],
      hu: ["A hatalmas Mýramenn-nemzetség ősi székhelye.", "A 'Sonatorrek' nevű emlékmű tisztelgés Egill költészete előtt.", "Az Egil-szaga fontos helyszíne.", "Templomának szokatlan észak-déli tájolása van."],
      ro: ["Sediul ancestral al puternicului clan Mýramenn.", "Monumentul 'Sonatorrek' onorează poezia lui Egill.", "Loc de desfășurare important în Saga lui Egil.", "Are o biserică cu o orientare neobișnită."],
      en: ["Ancestral seat of the powerful Mýramenn clan.", "A sculpture named 'Sonatorrek' commemorates Egill's poetry.", "Major setting for Egil's Saga.", "Features a church with an unusual orientation."]
    }
  },
  {
    id: "historical-eldgja-extra",
    type: "landmark",
    parent: "IS-002",
    coords: [-18.6139, 63.9639],
    name: { de: "Eldgjá", hu: "Eldgjá", ro: "Eldgjá", en: "Eldgjá" },
    description: {
      de: "Die größte Vulkanspalte der Welt, deren Ausbruch im 10. Jahrhundert die isländische Geschichte prägte.",
      hu: "A világ legnagyobb vulkáni hasadéka, amelynek 10. századi kitörése meghatározta az izlandi történelmet.",
      ro: "Cea mai mare fisură vulcanică din lume, a cărei erupție din secolul al X-lea a marcat istoria Islandei.",
      en: "The world's largest volcanic fissure, whose 10th-century eruption influenced Icelandic history."
    },
    facts: {
      de: ["Teil des Katla-Vulkansystems.", "Der Ausbruch im Jahr 934 war einer der größten in der Geschichte.", "Beherbergt den wunderschönen Wasserfall Ófærufoss.", "Die Eruption wird mit dem Gedicht Völuspá in Verbindung gebracht."],
      hu: ["A Katla vulkánrendszer része.", "A 934-es kitörés az egyik legnagyobb volt a történelemben.", "Itt található a gyönyörű Ófærufoss vízesés.", "A kitörést a Völuspá (A jósnő szava) című verssel hozzák összefüggésbe."],
      ro: ["Parte a sistemului vulcanic Katla.", "Erupția din anul 934 a fost una dintre cele mai mari din istorie.", "Găzduiește frumoasa cascadă Ófærufoss.", "Erupția este legată simbolic de poemul Völuspá."],
      en: ["Part of the Katla volcanic system.", "The eruption in 934 AD was one of the largest in history.", "Home to the stunning Ófærufoss waterfall.", "The eruption is often linked to the poem Völuspá."]
    }
  },
  {
    id: "historical-dritvik-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-23.9339, 64.7539],
    name: { de: "Dritvík", hu: "Dritvík", ro: "Dritvík", en: "Dritvík" },
    description: {
      de: "Ein ehemaliger wichtiger Fischereihafen an der Westspitze der Halbinsel Snæfellsnes.",
      hu: "Egykori fontos halászkikötő a Snæfellsnes-félsziget nyugati csúcsán.",
      ro: "O fostă stație de pescuit importantă în vârful vestic al peninsulei Snæfellsnes.",
      en: "A former major fishing station at the western tip of the Snæfellsnes Peninsula."
    },
    facts: {
      de: ["Beherbergte im 16.-19. Jahrhundert bis zu 600 Fischer.", "Berühmt für die 'Kraftproben-Steine' (Steinatök).", "Fischer mussten die Steine heben, um auf die Schiffe zu kommen.", "Reste von alten Fischerhütten sind noch sichtbar."],
      hu: ["A 16-19. században akár 600 halásznak is otthont adott.", "Híres az 'erőpróba-köveiről' (Steinatök).", "A halászoknak fel kellett emelniük a köveket, hogy hajóra szállhassanak.", "Régi halászkunyhók maradványai ma is láthatóak."],
      ro: ["A găzduit până la 600 de pescari între secolele XVI și XIX.", "Faimoasă pentru pietrele de încercare a forței (Steinatök).", "Pescarii trebuiau să ridice pietrele pentru a fi acceptați pe nave.", "Resturi ale colibelor vechi de pescari sunt încă vizibile."],
      en: ["Hosted up to 600 fishermen between the 16th and 19th centuries.", "Famous for the 'lifting stones' (Steinatök).", "Fishermen had to lift the stones to qualify for work on boats.", "Remains of old fishing huts are still visible today."]
    }
  },
  {
    id: "historical-flatey-extra",
    type: "historical",
    parent: "IS-006",
    coords: [-22.9239, 65.3739],
    name: { de: "Insel Flatey", hu: "Flatey-sziget", ro: "Insula Flatey", en: "Flatey Island" },
    description: {
      de: "Eine malerische Insel im Breiðafjörður with einer reichen Geschichte und gut erhaltenen Häusern.",
      hu: "Festői sziget a Breiðafjörður-ben, gazdag történelemmel és jól megőrzött házakkal.",
      ro: "O insulă pitorească în Breiðafjörður, cu o istorie bogată și case bine conservate.",
      en: "A picturesque island in Breiðafjörður with a rich history and well-preserved houses."
    },
    facts: {
      de: ["War im Mittelalter ein Zentrum für Kultur und Handel.", "Das Flateyjarbók, ein wichtiges Manuskript, wurde hier aufbewahrt.", "Die heutige Kirche hat einzigartige Wandmalereien.", "Im Winter leben nur sehr wenige Menschen auf der Insel."],
      hu: ["A középkorban a kultúra és a kereskedelem központja volt.", "Itt őrizték a Flateyjarbók-ot, egy fontos középkori kéziratot.", "A mai templom egyedi falfestményekkel rendelkezik.", "Télen csak nagyon kevés ember él a szigeten."],
      ro: ["A fost un centru de cultură și comerț în Evul Mediu.", "Flateyjarbók, un manuscris medieval important, a fost păstrat aici.", "Biserica actuală are picturi murale unice.", "Iarna, doar foarte puțini oameni locuiesc pe insulă."],
      en: ["Was a center for culture and trade in the Middle Ages.", "Flateyjarbók, a major medieval manuscript, was kept here.", "The current church features unique murals.", "Only a few people live on the island year-round."]
    }
  },
  {
    id: "historical-djupalonssandur-extra",
    type: "landmark",
    parent: "IS-006",
    coords: [-23.9039, 64.7539],
    name: { de: "Djúpalónssandur", hu: "Djúpalónssandur", ro: "Djúpalónssandur", en: "Djúpalónssandur" },
    description: {
      de: "Ein dramatischer Strand mit schwarzen Kieselsteinen und Wrackteilen eines britischen Trawlers.",
      hu: "Drámai fekete kavicsos strand egy brit vonóhálós halászhajó roncsaival.",
      ro: "O plajă dramatică cu pietriș negru și resturi ale unui trauler britanic.",
      en: "A dramatic black pebble beach featuring the wreckage of a British trawler."
    },
    facts: {
      de: ["Die Wrackteile des Trawlers Epine (1948) liegen noch am Strand.", "Beherbergt ebenfalls vier berühmte Kraftproben-Steine.", "Der Name bedeutet 'Sand am tiefen Teich'.", "Markante Felsformationen säumen den Weg zum Ufer."],
      hu: ["Az Epine vonóhálós hajó (1948) roncsai ma is a parton hevernek.", "Itt is megtalálható a négy híres erőpróba-kő.", "A név jelentése: 'mély tavi homok'.", "Jellegzetes sziklaformációk szegélyezik a partra vezető utat."],
      ro: ["Resturile traulerului Epine (1948) se află și acum pe plajă.", "Găzduiește, de asemenea, patru pietre celebre de încercare a forței.", "Numele se traduce prin „Nisipul de la iazul adânc”.", "Formațiuni stâncoase distincte mărginesc drumul spre țărm."],
      en: ["The wreckage of the trawler Epine (1948) still lies on the beach.", "Home to four famous 'lifting stones' used by fishermen.", "The name translates to 'Deep Lagoon's Sand'.", "Striking rock formations line the path to the shore."]
    }
  },
  {
    id: "historical-vidimyrarkirkja-extra",
    type: "historical",
    parent: "IS-008",
    coords: [-19.4739, 65.5339],
    name: { de: "Víðimýrarkirkja", hu: "Víðimýrarkirkja", ro: "Víðimýrarkirkja", en: "Víðimýrarkirkja" },
    description: {
      de: "Eine der am besten erhaltenen Torfkirchen Islands, ein Juwel der traditionellen Baukunst.",
      hu: "Izland egyik legjobb állapotban fennmaradt tőzegtemploma, a hagyományos építészet gyöngyszeme.",
      ro: "Una dintre cele mai bine conservate biserici de turbă din Islanda, o bijuterie a arhitecturii tradiționale.",
      en: "One of the best-preserved turf churches in Iceland, a jewel of traditional architecture."
    },
    facts: {
      de: ["Die heutige Kirche wurde im Jahr 1834 erbaut.", "Besteht aus Holz, Torf und Grassoden.", "Gilt als ein Meisterwerk isländischer Handwerkskunst.", "Teil der historischen Gebäudesammlung des Nationalmuseums."],
      hu: ["A mai templom 1834-ben épült.", "Fából, tőzegből és gyeptéglákból áll.", "Az izlandi kézművesség remekművének tartják.", "A Nemzeti Múzeum történelmi épületgyűjteményének része."],
      ro: ["Biserica actuală a fost construită în anul 1834.", "Construită din lemn, turbă și iarbă.", "Considerată o capodoperă a meșteșugului islandez.", "Parte a colecției de clădiri istorice a Muzeului Național."],
      en: ["The current church was built in 1834.", "Constructed using wood, turf, and sod.", "Regarded as a masterpiece of Icelandic craftsmanship.", "Part of the National Museum's historic building collection."]
    }
  },
  {
    id: "historical-miklabaer-extra",
    type: "historical",
    parent: "IS-008",
    coords: [-19.3439, 65.5139],
    name: { de: "Miklabær", hu: "Miklabær", ro: "Miklabær", en: "Miklabær" },
    description: {
      de: "Ein historischer Pfarrsitz in Skagafjörður, bekannt für seine Sagen und Legenden.",
      hu: "Történelmi lelkészlak Skagafjörður-ben, szagáiról és legendáiról ismert.",
      ro: "O reședință parohială istorică în Skagafjörður, cunoscută pentru saga și legendele sale.",
      en: "A historic parsonage in Skagafjörður, known for its connections to sagas and legends."
    },
    facts: {
      de: ["Bekannt für die Geistergeschichte von Miklabæjar-Sólveig.", "Wird bereits im 11. Jahrhundert erwähnt.", "Ein Ort mit tiefer religiöser Geschichte.", "Die heutige Kirche wurde im späten 19. Jahrhundert erbaut."],
      hu: ["A Miklabæjar-Sólveig szellemtörténetéről híres.", "Már a 11. században említik a források.", "Mély vallástörténeti jelentőségű hely.", "A mai templom a 19. század végén épült."],
      ro: ["Faimos pentru povestea cu fantome a lui Miklabæjar-Sólveig.", "Menționat în surse încă din secolul al XI-lea.", "Un loc cu o istorie religioasă profundă.", "Biserica actuală a fost construită la sfârșitul secolului al XIX-lea."],
      en: ["Famous for the ghost story of Miklabæjar-Sólveig.", "Mentioned in records as early as the 11th century.", "A site with deep religious significance.", "The current church was built in the late 19th century."]
    }
  },
  {
    id: "historical-reynistadur-extra",
    type: "monastery",
    parent: "IS-008",
    coords: [-19.6439, 65.6839],
    name: { de: "Reynistaður", hu: "Reynistaður", ro: "Reynistaður", en: "Reynistaður" },
    description: {
      de: "Der Standort eines ehemaligen Nonnenklosters im Skagafjörður.",
      hu: "Egykori apácakolostor helyszíne Skagafjörður-ben.",
      ro: "Locul unei foste mănăstiri de călugărițe în Skagafjörður.",
      en: "The site of a former nunnery in Skagafjörður."
    },
    facts: {
      de: ["Das Benediktinerinnenkloster wurde 1295 gegründet.", "War bis zur Reformation im 16. Jahrhundert in Betrieb.", "Wichtiger kultureller Ort für Frauen im Mittelalter.", "Beherbergt heute eine schöne kleine Kirche."],
      hu: ["A bencés apácakolostort 1295-ben alapították.", "A 16. századi reformációig működött.", "Fontos kulturális helyszín volt a nők számára a középkorban.", "Ma egy szép kis templom található itt."],
      ro: ["Mănăstirea benedictină de călugărițe a fost fondată în 1295.", "A funcționat până la Reformă, în secolul al XVI-lea.", "Un loc cultural important pentru femei în Evul Mediu.", "Astăzi găzduiește o biserică mică și frumoasă."],
      en: ["The Benedictine nunnery was established in 1295.", "Operated until the Reformation in the 16th century.", "An important cultural site for women in the Middle Ages.", "Features a beautiful small church today."]
    }
  },
  {
    id: "historical-grund-extra",
    type: "historical",
    parent: "IS-009",
    coords: [-18.1239, 65.5139],
    name: { de: "Grund í Eyjafirði", hu: "Grund", ro: "Grund", en: "Grund" },
    description: {
      de: "Ein historischer Bauernhof im Eyjafjörður mit einer außergewöhnlichen Kirche.",
      hu: "Történelmi farm az Eyjafjörður-völgyben, rendkívüli templommal.",
      ro: "O fermă istorică în Eyjafjörður, cu o biserică excepțională.",
      en: "A historic farm in Eyjafjörður featuring an extraordinary church."
    },
    facts: {
      de: ["Die Kirche von Grund wurde 1905 von einem Bauern erbaut.", "Gilt als eine der prächtigsten Holzkirchen Islands.", "Der Ort wird in mehreren mittelalterlichen Sagas erwähnt.", "Zeigt den Wohlstand einiger isländischer Bauernhöfe."],
      hu: ["A grundi templomot 1905-ben építette egy gazda.", "Izland egyik legpompásabb fatemplomának tartják.", "Több középkori szagában is említik a helyet.", "Néhány izlandi farm egykori gazdagságát tükrözi."],
      ro: ["Biserica din Grund a fost construită în 1905 de un fermier.", "Considerată una dintre cele mai magnifice biserici de lemn din Islanda.", "Locul este menționat în mai multe saga medievale.", "Reflectă prosperitatea unor ferme islandeze din trecut."],
      en: ["The Grund church was built in 1905 by a local farmer.", "Regarded as one of Iceland's most magnificent wooden churches.", "The site is mentioned in several medieval sagas.", "Demonstrates the former prosperity of certain Icelandic farms."]
    }
  },
  {
    id: "historical-grenjadarstadur-extra",
    type: "historical",
    parent: "IS-009",
    coords: [-17.3539, 65.8139],
    name: { de: "Grenjaðarstaður", hu: "Grenjaðarstaður", ro: "Grenjaðarstaður", en: "Grenjaðarstaður" },
    description: {
      de: "Ein großer Torf-Bauernhof und Pfarrsitz im Norden, heute ein Museum.",
      hu: "Hatalmas gyeptetős farm és lelkészlak északon, ma múzeum.",
      ro: "O fermă mare din turbă și reședință parohială în nord, astăzi muzeu.",
      en: "A large turf farm and parsonage in the north, now serving as a museum."
    },
    facts: {
      de: ["Einer der größten erhaltenen Torf-Bauernhöfe Islands.", "War über Jahrhunderte ein bedeutendes Kulturzentrum.", "Die Torfhäuser stammen in ihrer jetzigen Form aus dem 19. Jh.", "Wird bereits in der Landnámabók erwähnt."],
      hu: ["Izland egyik legnagyobb fennmaradt gyeptetős farmja.", "Évszázadokon át fontos kulturális központ volt.", "A gyepházak jelenlegi formájukban a 19. századból valók.", "Már a Landnámabókban (A honfoglalás könyve) is szerepel."],
      ro: ["Una dintre cele mai mari ferme de turbă conservate din Islanda.", "A fost un centru cultural important timp de secole.", "Casele de turbă datează în forma actuală din secolul al XIX-lea.", "Menționată încă din Landnámabók (Cartea Colonizării)."],
      en: ["One of Iceland's largest surviving turf farms.", "Served as a major cultural center for centuries.", "The turf houses in their current form date from the 19th century.", "Mentioned in the Landnámabók (Book of Settlements)."]
    }
  },
  {
    id: "historical-svalbard-extra",
    type: "historical",
    parent: "IS-009",
    coords: [-15.7139, 66.2139],
    name: { de: "Svalbarð", hu: "Svalbarð", ro: "Svalbarð", en: "Svalbarð" },
    description: {
      de: "Ein historischer Ort und Pfarrsitz auf der Halbinsel Þistilfjörður.",
      hu: "Történelmi hely és lelkészlak a Þistilfjörður-félszigeten.",
      ro: "Un sit istoric și reședință parohială pe peninsula Þistilfjörður.",
      en: "A historic site and parsonage on the Þistilfjörður Peninsula."
    },
    facts: {
      de: ["Bedeutender Ort in der Besiedlungsgeschichte Nordost-Islands.", "Die heutige Kirche wurde im Jahr 1848 erbaut.", "Bekannt für seine Abgeschiedenheit und raue Schönheit.", "Spielt eine Rolle in lokalen Volkserzählungen."],
      hu: ["Fontos helyszín Északkelet-Izland honfoglalástörténetében.", "A mai templom 1848-ban épült.", "Elszigeteltségéről és zord szépségéről ismert.", "Szerepet játszik a helyi népi elbeszélésekben."],
      ro: ["Loc important în istoria colonizării nord-estului Islandei.", "Biserica actuală a fost construită în anul 1848.", "Cunoscut pentru izolarea sa și frumusețea aspră.", "Joacă un rol în legendele populare locale."],
      en: ["Significant site in the settlement history of Northeast Iceland.", "The current church was built in 1848.", "Known for its remoteness and rugged beauty.", "Featured in local folk tales and legends."]
    }
  },
  {
    id: "historical-bustarfell-extra",
    type: "historical",
    parent: "IS-001",
    coords: [-15.1539, 65.5839],
    name: { de: "Bustarfell", hu: "Bustarfell", ro: "Bustarfell", en: "Bustarfell" },
    description: {
      de: "Ein prächtiger Torf-Bauernhof in den Ostfjorden, der über Generationen derselben Familie gehörte.",
      hu: "Pompás gyeptetős farm a Keleti-fjordokban, amely generációkon át ugyanazon családé volt.",
      ro: "O fermă splendidă din turbă în fiordurile de est, aparținând aceleiași familii timp de generații.",
      en: "A magnificent turf farm in the East Fjords that belonged to the same family for generations."
    },
    facts: {
      de: ["Die Gebäude stammen größtenteils aus dem 18. und 19. Jh.", "Wurde bis 1966 als Wohnhaus genutzt.", "Eines der am besten erhaltenen Beispiele isländischer Torfbauweise.", "Beherbergt heute ein sehr anschauliches Museum."],
      hu: ["Az épületek többsége a 18. és 19. századból származik.", "1966-ig lakóházként használták.", "Az izlandi tőzegépítészet egyik legjobb állapotú példája.", "Ma nagyon szemléletes múzeumnak ad otthont."],
      ro: ["Clădirile datează în mare parte din secolele XVIII și XIX.", "A fost folosită ca locuință până în anul 1966.", "Unul dintre cele mai bine conservate exemple de construcție din turbă.", "Astăzi găzduiește un muzeu foarte sugestiv."],
      en: ["The buildings mostly date from the 18th and 19th centuries.", "Was used as a residence until 1966.", "One of the best-preserved examples of Icelandic turf architecture.", "Now houses a very descriptive folk museum."]
    }
  },
  {
    id: "historical-saenautasel-extra",
    type: "historical",
    parent: "IS-001",
    coords: [-15.5139, 65.2539],
    name: { de: "Sænautasel", hu: "Sænautasel", ro: "Sænautasel", en: "Sænautasel" },
    description: {
      de: "Ein rekonstruierter Torf-Bauernhof im einsamen Hochland von Ostisland.",
      hu: "Rekonstruált gyeptetős farm Kelet-Izland magányos felföldjén.",
      ro: "O fermă de turbă reconstruită în zonele montane izolate din estul Islandei.",
      en: "A reconstructed turf farm in the remote highlands of East Iceland."
    },
    facts: {
      de: ["Wurde 1875 nach einem Vulkanausbruch verlassen.", "Diente als Vorbild für den Hof im Roman 'Sein eigener Herr'.", "Wurde 1992 originalgetreu wieder aufgebaut.", "Bietet Einblicke in das harte Leben im Hochland."],
      hu: ["1875-ben egy vulkánkitörés után hagyták el.", "Mintául szolgált a 'Független emberek' című regény farmjához.", "1992-ben építették újjá az eredeti stílusban.", "Betekintést nyújt a kemény felföldi életbe."],
      ro: ["Abandonată în 1875 după o erupție vulcanică.", "A servit drept model pentru ferma din romanul „Oameni independenți”.", "Reconstruită fidel în anul 1992.", "Oferă o imagine asupra vieții aspre din zonele montane."],
      en: ["Abandoned in 1875 following a volcanic eruption.", "Served as the inspiration for the farm in the novel 'Independent People'.", "Faithfully reconstructed in 1992.", "Provides insight into the harsh life in the Icelandic highlands."]
    }
  },
  {
    id: "historical-papey-extra",
    type: "landmark",
    parent: "IS-001",
    coords: [-14.1639, 64.6539],
    name: { de: "Insel Papey", hu: "Papey-sziget", ro: "Insula Papey", en: "Papey Island" },
    description: {
      de: "Eine Insel, die vermutlich schon vor den Wikingern von irischen Mönchen bewohnt wurde.",
      hu: "Sziget, amelyet feltehetően már a vikingek előtt ír szerzetesek laktak.",
      ro: "O insulă care a fost probabil locuită de călugări irlandezi înainte de sosirea vikingilor.",
      en: "An island believed to have been inhabited by Irish monks before the arrival of the Vikings."
    },
    facts: {
      de: ["Der Name leitet sich von 'Papar' (Mönche) ab.", "Beherbergt die älteste und kleinste Holzkirche Islands.", "War bis 1966 dauerhaft bewohnt.", "Ein Paradies für Papageitaucher und andere Seevögel."],
      hu: ["A név a 'Papar' (szerzetesek) szóból ered.", "Itt található Izland legrégebbi és legkisebb fatemploma.", "1966-ig állandóan lakott volt.", "A lundák és más tengeri madarak paradicsoma."],
      ro: ["Numele derivă de la „Papar” (călugări).", "Găzduiește cea mai veche și mai mică biserică de lemn din Islanda.", "A fost locuită permanent până în anul 1966.", "Un paradis pentru pufini și alte păsări marine."],
      en: ["The name is derived from 'Papar' (monks).", "Home to the oldest and smallest wooden church in Iceland.", "Was permanently inhabited until 1966.", "A haven for puffins and other seabirds."]
    }
  },
  {
    id: "historical-kirkjubaejarklaustur-extra",
    type: "monastery",
    parent: "IS-002",
    coords: [-18.0539, 63.7839],
    name: { de: "Kirkjubæjarklaustur", hu: "Kirkjubæjarklaustur", ro: "Kirkjubæjarklaustur", en: "Kirkjubæjarklaustur" },
    description: {
      de: "Ein geschichtsträchtiger Ort, an dem sich einst ein bedeutendes Nonnenkloster befand.",
      hu: "Történelmi hely, ahol egykor jelentős apácakolostor működött.",
      ro: "Un loc încărcat de istorie, unde s-a aflat odinioară o mănăstire de călugărițe importantă.",
      en: "A historic location that was once the site of a major nunnery."
    },
    facts: {
      de: ["Das Benediktinerinnenkloster wurde 1186 gegründet.", "Bekannt für die 'Feuerpredigt' während des Laki-Ausbruchs 1783.", "Beherbergt das Naturdenkmal Kirkjugólf (Kirchenboden).", "Wichtiger Schauplatz lokaler religiöser Legenden."],
      hu: ["A bencés apácakolostort 1186-ban alapították.", "Híres a 'tűzprédikációról' az 1783-as Laki-kitörés idején.", "Itt található a Kirkjugólf (Templompadló) természeti képződmény.", "Helyi vallási legendák fontos helyszíne."],
      ro: ["Mănăstirea benedictină de călugărițe a fost fondată în 1186.", "Faimos pentru „Predica de foc” din timpul erupției Laki din 1783.", "Găzduiește monumentul natural Kirkjugólf (Podeaua Bisericii).", "Loc important pentru legendele religioase locale."],
      en: ["The Benedictine nunnery was established in 1186.", "Famous for the 'Fire Sermon' during the 1783 Laki eruption.", "Home to the Kirkjugólf (Church Floor) natural basalt formation.", "A significant site for local religious legends."]
    }
  },
  {
    id: "historical-seljavallalaug-extra",
    type: "landmark",
    parent: "IS-002",
    coords: [-19.6039, 63.5639],
    name: { de: "Seljavallalaug", hu: "Seljavallalaug", ro: "Seljavallalaug", en: "Seljavallalaug" },
    description: {
      de: "Eines der ältesten Schwimmbecken Islands, versteckt in einem engen Tal.",
      hu: "Izland egyik legrégebbi úszómedencéje, egy szűk völgyben elrejtve.",
      ro: "Una dintre cele mai vechi piscine din Islanda, ascunsă într-o vale îngustă.",
      en: "One of Iceland's oldest swimming pools, tucked away in a narrow valley."
    },
    facts: {
      de: ["Wurde im Jahr 1923 erbaut.", "Diente dazu, Isländern das Schwimmen beizubringen.", "Wird durch natürliches heißes Wasser gespeist.", "Ein beliebtes Ziel für Wanderer und Fotografen."],
      hu: ["1923-ban épült.", "Azért hozták létre, hogy megtanítsák az izlandiakat úszni.", "Természetes forró víz táplálja.", "Népszerű úti cél túrázók és fotósok számára."],
      ro: ["Construită în anul 1923.", "Creată pentru a-i învăța pe islandezi să înoate.", "Alimentată de apă termală naturală.", "O destinație populară pentru drumeți și fotografi."],
      en: ["Built in 1923.", "Created to teach Icelanders how to swim.", "Fed by natural hot water from the hillside.", "A popular destination for hikers and photographers."]
    }
  },
  {
    id: "historical-strandarkirkja-extra",
    type: "historical",
    parent: "IS-002",
    coords: [-21.7139, 63.8339],
    name: { de: "Strandarkirkja", hu: "Strandarkirkja", ro: "Strandarkirkja", en: "Strandarkirkja" },
    description: {
      de: "Eine Kirche an der Südküste, die als 'Wunderkirche' bekannt ist.",
      hu: "Templom a déli parton, amelyet 'csodatenyő templomként' ismernek.",
      ro: "O biserică de pe coasta de sud, cunoscută ca „biserica miracolelor”.",
      en: "A church on the south coast known as the 'miracle church'."
    },
    facts: {
      de: ["Soll Seeleuten in Seenot das Leben gerettet haben.", "Gilt als eine der reichsten Kirchen Islands durch Spenden.", "Bietet eine ruhige Atmosphäre direkt am Ozean.", "Ein ort vieler Gelübde und Danksagungen."],
      hu: ["A legenda szerint tengerészek életét mentette meg a viharban.", "Az adományoknak köszönhetően Izland egyik leggazdagabb temploma.", "Nyugodt légkört áraszt közvetlenül az óceán partján.", "Sok fogadalom és hálaadás helyszíne."],
      ro: ["Se spune că a salvat viețile marinarilor aflați în pericol.", "Considerată una dintre cele mai bogate biserici datorită donațiilor.", "Oferă o atmosferă liniștită direct pe malul oceanului.", "Un loc de pelerinaj și mulțumire pentru mulți credincioși."],
      en: ["Legend says it saved the lives of sailors in distress.", "Considered one of Iceland's wealthiest churches due to donations.", "Offers a peaceful atmosphere right by the ocean.", "A site of many vows and thanksgivings."]
    }
  },
  {
    id: "historical-krysuvik-extra",
    type: "landmark",
    parent: "IS-003",
    coords: [-22.0539, 63.8939],
    name: { de: "Krýsuvík", hu: "Krýsuvík", ro: "Krýsuvík", en: "Krýsuvík" },
    description: {
      de: "Ein geothermisch aktives Gebiet mit einer bewegten Geschichte auf der Halbinsel Reykjanes.",
      hu: "Geotermikusan aktív terület mozgalmas történelemmel a Reykjanes-félszigeten.",
      ro: "O zonă activă geotermal cu o istorie bogată pe peninsula Reykjanes.",
      en: "A geothermally active area with a rich history on the Reykjanes Peninsula."
    },
    facts: {
      de: ["Früher stand hier eine bedeutende Torfkirche.", "Bekannt für seine farbenfrohen Schwefelquellen.", "War einst ein bewohnter Ort, heute weitgehend verlassen.", "Bietet dramatische Ausblicke auf die Südküste."],
      hu: ["Korábban jelentős tőzegtemplom állt itt.", "Színes kénes forrásairól ismert.", "Egykor lakott település volt, mára nagyrészt elnéptelenedett.", "Drámai kilátást nyújt a déli partra."],
      ro: ["O biserică importantă de turbă a existat aici în trecut.", "Cunoscută pentru izvoarele sale sulfuroase colorate.", "A fost odinioară o așezare locuită, acum în mare parte abandonată.", "Oferă priveliști dramatice asupra coastei de sud."],
      en: ["Formerly the site of a significant turf church.", "Known for its colorful sulfur springs.", "Was once an inhabited settlement, now mostly deserted.", "Offers dramatic views of the south coast."]
    }
  },
  {
    id: "historical-selardalur-extra",
    type: "historical",
    parent: "IS-007",
    coords: [-23.6139, 65.7839],
    name: { de: "Selárdalur", hu: "Selárdalur", ro: "Selárdalur", en: "Selárdalur" },
    description: {
      de: "Ein abgelegenes Tal in den Westfjorden, bekannt für die Kunst von Samúel Jónsson.",
      hu: "Elszigetelt völgy a Westfjords-ben, Samúel Jónsson művészetéről ismert.",
      ro: "O vale izolată în Westfjords, cunoscută pentru arta lui Samúel Jónsson.",
      en: "A remote valley in the Westfjords known for the unique art of Samúel Jónsson."
    },
    facts: {
      de: ["Samúel Jónsson schuf hier naive Skulpturen und Gebäude.", "Wird oft als 'Tal der Naiven Kunst' bezeichnet.", "Der Ort war früher ein bedeutender Pfarrsitz.", "Heute ein faszinierendes Freilichtmuseum seiner Werke."],
      hu: ["Samúel Jónsson naiv szobrokat és épületeket alkotott itt.", "Gyakran nevezik a 'naiv művészet völgyének'.", "A hely korábban jelentős lelkészlak volt.", "Ma lenyűgöző szabadtéri múzeum mutatja be alkotásait."],
      ro: ["Samúel Jónsson a creat aici sculpturi și clădiri naive.", "Deseori numită „Valea artei naive”.", "Locul a fost în trecut o reședință parohială importantă.", "Astăzi este un muzeu în aer liber fascinant cu lucrările sale."],
      en: ["Samúel Jónsson created naive sculptures and buildings here.", "Often called the 'Valley of Naive Art'.", "The site was formerly a significant parsonage.", "Now a fascinating open-air museum of his work."]
    }
  },
  {
    id: "historical-flateyri-extra",
    type: "historical",
    parent: "IS-007",
    coords: [-23.5139, 66.0539],
    name: { de: "Flateyri", hu: "Flateyri", ro: "Flateyri", en: "Flateyri" },
    description: {
      de: "Ein Fischerdorf in den Westfjorden mit einer langen Geschichte des Walfangs und Handels.",
      hu: "Halászfalu a Westfjords-ben, bálnavadászati és kereskedelmi múlttal.",
      ro: "Un sat de pescari din Westfjords cu o lungă istorie în vânătoarea de balene și comerț.",
      en: "A fishing village in the Westfjords with a long history of whaling and trade."
    },
    facts: {
      de: ["War im 19. Jahrhundert ein Zentrum des Walfangs.", "Besitzt den ältesten noch in Betrieb befindlichen Laden Islands.", "Bekannt für seinen Schutzwall gegen Lawinen.", "Ein ort mit starkem Gemeinschaftssinn und Tradition."],
      hu: ["A 19. században a bálnavadászat központja volt.", "Itt található Izland legrégebbi, ma is működő boltja.", "Híres a lavinák elleni védőgátjáról.", "Erős közösségi szellemmel és hagyományokkal rendelkező hely."],
      ro: ["A fost un centru al vânătorii de balene în secolul al XIX-lea.", "Găzduiește cel mai vechi magazin încă în funcțiune din Islanda.", "Cunoscut pentru barajul său de protecție împotriva avalanșelor.", "Un loc cu un puternic spirit comunitar și tradiție."],
      en: ["Was a major whaling station in the 19th century.", "Home to the oldest store in Iceland still in operation.", "Known for its large avalanche protection dam.", "A place with a strong sense of community and tradition."]
    }
  },
  {
    id: "historical-nedstikaupstadur-extra",
    type: "historical",
    parent: "IS-007",
    coords: [-23.1239, 66.0739],
    name: { de: "Neðstikaupstaður", hu: "Neðstikaupstaður", ro: "Neðstikaupstaður", en: "Neðstikaupstaður" },
    description: {
      de: "Das historische Viertel von Ísafjörður mit einigen der ältesten Holzhäuser Islands.",
      hu: "Ísafjörður történelmi negyede, ahol Izland legöregebb faházai találhatók.",
      ro: "Cartierul istoric din Ísafjörður, cu unele dintre cele mai vechi case de lemn din Islanda.",
      en: "The historic district of Ísafjörður, home to some of the oldest wooden houses in Iceland."
    },
    facts: {
      de: ["Die ältesten Häuser stammen aus dem 18. Jahrhundert.", "War ein wichtiges Zentrum für den dänischen Monopolhandel.", "Beherbergt heute das Westfjords Heritage Museum.", "Zeigt die maritime Geschichte der Region sehr anschaulich."],
      hu: ["A legöregebb házak a 18. századból származnak.", "A dán monopolkereskedelem fontos központja volt.", "Ma a Westfjords Helytörténeti Múzeumnak ad otthont.", "Szemléletesen mutatja be a régió tengerészeti múltját."],
      ro: ["Cele mai vechi case datează din secolul al XVIII-lea.", "A fost un centru important pentru monopolul comercial danez.", "Găzduiește astăzi Muzeul Patrimoniului din Westfjords.", "Prezintă foarte clar istoria maritimă a regiunii."],
      en: ["The oldest houses date back to the 18th century.", "Was a key center for the Danish trade monopoly.", "Now home to the Westfjords Heritage Museum.", "Vividly displays the maritime history of the region."]
    }
  },
  {
    id: "historical-raudasandur-extra",
    type: "landmark",
    parent: "IS-007",
    coords: [-23.9539, 65.4639],
    name: { de: "Rauðasandur", hu: "Rauðasandur", ro: "Rauðasandur", en: "Rauðasandur" },
    description: {
      de: "Ein weitläufiger Strand mit rotem Sand und einer düsteren Kriminalgeschichte.",
      hu: "Hatalmas vörös homokos tengerpart, sötét bűnügyi történelemmel.",
      ro: "O plajă întinsă cu nisip roșu și o istorie criminală sumbră.",
      en: "A vast beach with red sand and a dark criminal history."
    },
    facts: {
      de: ["Bekannt für die spektakuläre Farbe seines Sandes.", "Ort der berüchtigten Sjöundá-Morde im 19. Jahrhundert.", "Ein Paradies für Ruhe suchende Wanderer.", "Beherbergt eine kleine, charmante Holzkirche."],
      hu: ["A homok különleges színéről híres.", "Itt történtek a hírhedt 19. századi sjöundái gyilkosságok.", "A nyugalomra vágyó túrázók paradicsoma.", "Egy kicsi, bájos fatemplom található itt."],
      ro: ["Cunoscută pentru culoarea spectaculoasă a nisipului său.", "Locul infamelor crime de la Sjöundá din secolul al XIX-lea.", "Un paradis pentru drumeții care caută liniște.", "Găzduiește o biserică de lemn mică și fermecătoare."],
      en: ["Known for the spectacular color of its sand.", "Site of the infamous Sjöundá murders in the 19th century.", "A haven for hikers seeking solitude.", "Features a small, charming wooden church."]
    }
  },
  {
    id: "historical-osvor-extra",
    type: "historical",
    parent: "IS-007",
    coords: [-23.2339, 66.1339],
    name: { de: "Ósvör", hu: "Ósvör", ro: "Ósvör", en: "Ósvör" },
    description: {
      de: "Ein rekonstruierter alter Fischerei-Außenposten bei Bolungarvík.",
      hu: "Rekonstruált régi halászati őrhely Bolungarvík közelében.",
      ro: "O fostă stație de pescuit reconstruită lângă Bolungarvík.",
      en: "A reconstructed old fishing outpost located near Bolungarvík."
    },
    facts: {
      de: ["Zeigt die harten Lebensbedingungen der Fischer früherer Zeiten.", "Besteht aus Torfhütten, einem Trockengestell und einem Boot.", "Museumsführer tragen oft traditionelle Kleidung.", "Bietet eine großartige Aussicht auf das offene Meer."],
      hu: ["A régi idők halászainak kemény életkörülményeit mutatja be.", "Tőzegházakból, szárítóállványokból és egy csónakból áll.", "A múzeumi vezetők gyakran viselnek népviseletet.", "Nagyszerű kilátást nyújt a nyílt tengerre."],
      ro: ["Prezintă condițiile aspre de viață ale pescarilor din trecut.", "Formată din colibe de turbă, un suport de uscare și o barcă.", "Ghidurile muzeului poartă adesea haine tradiționale.", "Oferă o vedere panoramică asupra mării deschise."],
      en: ["Displays the harsh living conditions of fishermen in the past.", "Consists of turf huts, a drying rack, and a traditional boat.", "Museum guides often wear traditional fishing gear.", "Offers a great view of the open sea."]
    }
  },
  {
    id: "historical-holmsviti-extra",
    type: "landmark",
    parent: "IS-003",
    coords: [-22.5839, 64.0139],
    name: { de: "Hólmsviti", hu: "Hólmsviti", ro: "Hólmsviti", en: "Hólmsviti" },
    description: {
      de: "Ein markanter Leuchtturm in der Nähe von Keflavík mit Blick auf den Nordatlantik.",
      hu: "Jellegzetes világítótorony Keflavík közelében, kilátással az Észak-Atlanti-óceánra.",
      ro: "Un far distinctiv lângă Keflavík, cu vedere la Atlanticul de Nord.",
      en: "A prominent lighthouse near Keflavík with views over the North Atlantic."
    },
    facts: {
      de: ["Der heutige Turm wurde 1945 erbaut.", "Wichtiger Navigationspunkt für Schiffe nach Keflavík.", "Steht auf einer felsigen Küste mit reicher Vogelwelt.", "Ein Wahrzeichen der Seefahrertradition der Region."],
      hu: ["A mai torony 1945-ben épült.", "Fontos navigációs pont a Keflavíkba tartó hajók számára.", "Sziklás parton áll, gazdag madárvilággal.", "A régió tengerészeti hagyományainak jelképe."],
      ro: ["Turnul actual a fost construit în anul 1945.", "Punct important de navigație pentru navele care merg spre Keflavík.", "Situat pe o coastă stâncoasă cu o faună aviară bogată.", "Un simbol al tradiției maritime din regiune."],
      en: ["The current tower was built in 1945.", "An important navigation point for ships heading to Keflavík.", "Stands on a rocky coast with abundant birdlife.", "A landmark of the region's maritime heritage."]
    }
  }
];
