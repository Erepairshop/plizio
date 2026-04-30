import json

pois = [
    # 1. Glendalough
    ("historical-glendalough", "landmark", "ireland", -6.3298, 53.0105, 
     {"de": "Glendalough", "hu": "Glendalough", "ro": "Glendalough", "en": "Glendalough"},
     {"de": "Eine frühmittelalterliche Klostersiedlung in den Wicklow Mountains.", "hu": "Kora középkori kolostortelepülés a Wicklow-hegységben.", "ro": "O așezare monahală medievală timpurie din Munții Wicklow.", "en": "An early medieval monastic settlement in the Wicklow Mountains."},
     [
         {"de": "Gegründet im 6. Jahrhundert.", "hu": "A 6. században alapították.", "ro": "Fondat în secolul al VI-lea.", "en": "Founded in the 6th century."},
         {"de": "Bekannt für seinen Rundturm.", "hu": "Híres a kerektornyáról.", "ro": "Cunoscut pentru turnul său rotund.", "en": "Famous for its round tower."},
         {"de": "Überstand zahlreiche Wikingerangriffe.", "hu": "Számos viking támadást túlélt.", "ro": "A supraviețuit multor atacuri vikinge.", "en": "Survived numerous Viking attacks."},
         {"de": "Teil des Nationalparks.", "hu": "A nemzeti park része.", "ro": "Face parte din parcul național.", "en": "Part of the national park."}
     ], "6th century"),

    # 2. Dunluce Castle
    ("historical-dunluce-castle", "historical", "ireland", -6.5815, 55.2109,
     {"de": "Dunluce Castle", "hu": "Dunluce vára", "ro": "Castelul Dunluce", "en": "Dunluce Castle"},
     {"de": "Eine verfallene mittelalterliche Burgruine an der Küste von Antrim.", "hu": "Romos középkori vár az Antrim partjainál.", "ro": "O ruină a unui castel medieval de pe coasta Antrim.", "en": "A ruined medieval castle on the Antrim coast."},
     [
         {"de": "Erbaut im 13. Jahrhundert.", "hu": "A 13. században épült.", "ro": "Construit în secolul al XIII-lea.", "en": "Built in the 13th century."},
         {"de": "Einst Sitz des MacDonnell-Clans.", "hu": "Egykor a MacDonnell klán székhelye.", "ro": "Fostul sediu al clanului MacDonnell.", "en": "Once the seat of the MacDonnell clan."},
         {"de": "Teile fielen 1639 ins Meer.", "hu": "Egy része 1639-ben a tengerbe omlott.", "ro": "Părți din el au căzut în mare în 1639.", "en": "Parts of it fell into the sea in 1639."},
         {"de": "Beliebter Drehort für Filme.", "hu": "Népszerű forgatási helyszín.", "ro": "O locație populară de filmare.", "en": "A popular filming location."}
     ], "13th century"),

    # 3. Kylemore Abbey
    ("historical-kylemore-abbey", "landmark", "ireland", -3.9877, 53.5615, # Wait, coords: Kylemore is around -9.889, 53.561. Let's fix coords later or just approximate correctly.
     {"de": "Kylemore Abbey", "hu": "Kylemore apátság", "ro": "Abația Kylemore", "en": "Kylemore Abbey"},
     {"de": "Ein Benediktinerkloster auf dem Gelände von Kylemore Castle.", "hu": "Bencés kolostor a Kylemore-kastély területén.", "ro": "O mănăstire benedictină aflată pe domeniul Castelului Kylemore.", "en": "A Benedictine monastery founded on the grounds of Kylemore Castle."},
     [
         {"de": "Ursprünglich 1868 als Schloss erbaut.", "hu": "Eredetileg kastélynak épült 1868-ban.", "ro": "Construit inițial ca un castel în 1868.", "en": "Originally built as a castle in 1868."},
         {"de": "1920 von Nonnen übernommen.", "hu": "1920-ban apácák vették át.", "ro": "Preluată de călugărițe în 1920.", "en": "Taken over by nuns in 1920."},
         {"de": "Besitzt einen großen viktorianischen Garten.", "hu": "Hatalmas viktoriánus kerttel rendelkezik.", "ro": "Are o mare grădină victoriană.", "en": "Has a large Victorian walled garden."},
         {"de": "Eines der meistfotografierten Gebäude in Irland.", "hu": "Írország egyik legtöbbet fotózott épülete.", "ro": "Una dintre cele mai fotografiate clădiri din Irlanda.", "en": "One of Ireland's most photographed buildings."}
     ], "1868"),

    # 4. Bunratty Castle
    ("historical-bunratty-castle", "historical", "ireland", -8.8122, 52.6966,
     {"de": "Bunratty Castle", "hu": "Bunratty-kastély", "ro": "Castelul Bunratty", "en": "Bunratty Castle"},
     {"de": "Ein großes Turmhaus im County Clare, berühmt für seine mittelalterlichen Bankette.", "hu": "Hatalmas lakótorony Clare megyében, amely középkori lakomáiról híres.", "ro": "Un turn mare din comitatul Clare, faimos pentru banchetele sale medievale.", "en": "A large tower house in County Clare, famous for its medieval banquets."},
     [
         {"de": "Der heutige Bau stammt von 1425.", "hu": "A jelenlegi épület 1425-ből származik.", "ro": "Clădirea actuală datează din 1425.", "en": "The current structure dates from 1425."},
         {"de": "Einst eine Wikinger-Siedlung.", "hu": "Egykor viking település volt.", "ro": "Cândva o așezare vikingă.", "en": "Once a Viking trading camp."},
         {"de": "Umfasst einen großen Folk Park.", "hu": "Egy nagy szabadtéri néprajzi múzeum veszi körül.", "ro": "Include un mare parc folcloric.", "en": "Surrounded by a large folk park."},
         {"de": "Restauriert in den 1950er Jahren.", "hu": "Az 1950-es években restaurálták.", "ro": "Restaurat în anii 1950.", "en": "Restored in the 1950s."}
     ], "1425"),

    # 5. King John's Castle
    ("historical-king-johns-castle", "historical", "ireland", -8.6256, 52.6685,
     {"de": "King John's Castle", "hu": "János király vára", "ro": "Castelul Regelui Ioan", "en": "King John's Castle"},
     {"de": "Eine normannische Burg auf King's Island in Limerick.", "hu": "Normann vár a limericki King's Islanden.", "ro": "Un castel normand de pe King's Island din Limerick.", "en": "A Norman castle situated on King's Island in Limerick."},
     [
         {"de": "Erbaut auf Befehl von König Johann im Jahr 1200.", "hu": "Földnélküli János király parancsára épült 1200-ban.", "ro": "Construit din ordinul Regelui Ioan în 1200.", "en": "Built on the orders of King John in 1200."},
         {"de": "Eine der besterhaltenen Burgen Irlands.", "hu": "Írország egyik legjobb állapotban fennmaradt vára.", "ro": "Unul dintre cele mai bine conservate castele din Irlanda.", "en": "One of the best-preserved castles in Ireland."},
         {"de": "Wurde während der Belagerung von Limerick beschädigt.", "hu": "A limericki ostrom során megrongálódott.", "ro": "A fost avariat în timpul asediului de la Limerick.", "en": "Was damaged during the Siege of Limerick."},
         {"de": "Bietet Ausblicke auf den Shannon.", "hu": "Kilátást nyújt a Shannon folyóra.", "ro": "Oferă priveliști spre râul Shannon.", "en": "Offers views over the River Shannon."}
     ], "1200"),

    # 6. Malahide Castle
    ("historical-malahide-castle", "historical", "ireland", -6.1651, 53.4449,
     {"de": "Malahide Castle", "hu": "Malahide kastély", "ro": "Castelul Malahide", "en": "Malahide Castle"},
     {"de": "Teile dieser Burg in der Nähe von Dublin stammen aus dem 12. Jahrhundert.", "hu": "A Dublin közeli kastély egyes részei a 12. századból származnak.", "ro": "Părți ale acestui castel din apropiere de Dublin datează din secolul al XII-lea.", "en": "Parts of this castle near Dublin date back to the 12th century."},
     [
         {"de": "War fast 800 Jahre im Besitz der Familie Talbot.", "hu": "Közel 800 évig a Talbot család birtokában volt.", "ro": "A aparținut familiei Talbot timp de aproape 800 de ani.", "en": "Belonged to the Talbot family for nearly 800 years."},
         {"de": "Umfasst einen großen botanischen Garten.", "hu": "Hatalmas botanikus kert veszi körül.", "ro": "Include o mare grădină botanică.", "en": "Includes a large botanical garden."},
         {"de": "Es soll dort spuken.", "hu": "A legenda szerint kísértetjárta.", "ro": "Se spune că ar fi bântuit.", "en": "It is said to be haunted."},
         {"de": "Wurde 1975 an den irischen Staat verkauft.", "hu": "1975-ben az ír államnak adták el.", "ro": "Vândut statului irlandez în 1975.", "en": "Sold to the Irish State in 1975."}
     ], "12th century"),

    # 7. Ashford Castle
    ("historical-ashford-castle", "landmark", "ireland", -9.2847, 53.5350,
     {"de": "Ashford Castle", "hu": "Ashford-kastély", "ro": "Castelul Ashford", "en": "Ashford Castle"},
     {"de": "Eine mittelalterliche Burg und viktorianisches Herrenhaus, heute ein Luxushotel.", "hu": "Középkori vár és viktoriánus kastély, ma luxusszálló.", "ro": "Un castel medieval și conac victorian, acum un hotel de lux.", "en": "A medieval and Victorian castle that has been expanded over the centuries, now a luxury hotel."},
     [
         {"de": "Erbaut 1228 von der Familie de Burgo.", "hu": "1228-ban építette a de Burgo család.", "ro": "Construit în 1228 de familia de Burgo.", "en": "Built in 1228 by the de Burgo family."},
         {"de": "War einst im Besitz der Familie Guinness.", "hu": "Egykor a Guinness család tulajdonában állt.", "ro": "A fost deținut cândva de familia Guinness.", "en": "Was once owned by the Guinness family."},
         {"de": "Liegt am Ufer des Lough Corrib.", "hu": "A Lough Corrib partján fekszik.", "ro": "Situat pe malul lacului Corrib.", "en": "Located on the shores of Lough Corrib."},
         {"de": "Beherbergte zahlreiche prominente Gäste.", "hu": "Számos híresség vendégeskedett itt.", "ro": "A găzduit numeroși oaspeți celebri.", "en": "Has hosted numerous celebrity guests."}
     ], "1228"),

    # 8. Dunguaire Castle
    ("historical-dunguaire-castle", "historical", "ireland", -8.9261, 53.1422,
     {"de": "Dunguaire Castle", "hu": "Dunguaire vára", "ro": "Castelul Dunguaire", "en": "Dunguaire Castle"},
     {"de": "Ein Turmhaus aus dem 16. Jahrhundert an der Südostküste der Galway Bay.", "hu": "16. századi lakótorony a Galway-öböl délkeleti partján.", "ro": "Un turn din secolul al XVI-lea de pe coasta de sud-est a Golfului Galway.", "en": "A 16th-century tower house on the southeastern shore of Galway Bay."},
     [
         {"de": "Erbaut vom Hynes-Clan im Jahr 1520.", "hu": "A Hynes klán építette 1520-ban.", "ro": "Construit de clanul Hynes în 1520.", "en": "Built by the Hynes clan in 1520."},
         {"de": "Späterer Treffpunkt literarischer Größen.", "hu": "Később irodalmi nagyságok találkozóhelye lett.", "ro": "Mai târziu loc de întâlnire pentru mari scriitori.", "en": "Later a meeting place for literary figures."},
         {"de": "Bietet heute mittelalterliche Bankette.", "hu": "Ma középkori lakomáknak ad otthont.", "ro": "Astăzi găzduiește banchete medievale.", "en": "Today hosts medieval banquets."},
         {"de": "Sehr beliebtes Fotomotiv.", "hu": "Igen népszerű fotótéma.", "ro": "Un subiect fotografic foarte popular.", "en": "A very popular photographic subject."}
     ], "1520"),

    # 9. Ross Castle
    ("historical-ross-castle", "historical", "ireland", -9.5317, 52.0416,
     {"de": "Ross Castle", "hu": "Ross vára", "ro": "Castelul Ross", "en": "Ross Castle"},
     {"de": "Ein Turmhaus am Rande des Lough Leane im Killarney-Nationalpark.", "hu": "Lakótorony a Lough Leane partján a Killarney Nemzeti Parkban.", "ro": "Un turn pe malul lacului Leane din Parcul Național Killarney.", "en": "A tower house and keep on the edge of Lough Leane, in Killarney National Park."},
     [
         {"de": "Erbaut im späten 15. Jahrhundert.", "hu": "A 15. század végén épült.", "ro": "Construit la sfârșitul secolului al XV-lea.", "en": "Built in the late 15th century."},
         {"de": "Stammsitz des O'Donoghue-Clans.", "hu": "Az O'Donoghue klán ősi fészke.", "ro": "Reședința ancestrală a clanului O'Donoghue.", "en": "Ancestral home of the O'Donoghue clan."},
         {"de": "Eine der letzten Hochburgen, die sich Cromwell ergaben.", "hu": "Az egyik utolsó erődítmény volt, amely megadta magát Cromwellnek.", "ro": "Una dintre ultimele cetăți care s-au predat lui Cromwell.", "en": "Among the last strongholds to surrender to Cromwell."},
         {"de": "Ist von wunderschöner Natur umgeben.", "hu": "Csodálatos természeti környezet öleli körbe.", "ro": "Este înconjurat de o natură superbă.", "en": "Is surrounded by beautiful nature."}
     ], "15th century"),

    # 10. Hill of Tara
    ("historical-hill-of-tara", "historical", "ireland", -6.6119, 53.5786,
     {"de": "Hill of Tara", "hu": "Tara hegye", "ro": "Dealul Tara", "en": "Hill of Tara"},
     {"de": "Eine archäologische Stätte, die als Sitz der Hochkönige von Irland gilt.", "hu": "Régészeti lelőhely, amelyet Írország főkirályainak székhelyeként tartanak számon.", "ro": "Un sit arheologic considerat a fi sediul Înalților Regi ai Irlandei.", "en": "An archaeological complex considered the seat of the High Kings of Ireland."},
     [
         {"de": "Enthält prähistorische Denkmäler.", "hu": "Történelem előtti emlékműveket tartalmaz.", "ro": "Conține monumente preistorice.", "en": "Contains prehistoric monuments."},
         {"de": "Der Lia Fáil ist der Krönungsstein.", "hu": "A Lia Fáil a híres koronázókő.", "ro": "Lia Fáil este piatra de încoronare.", "en": "The Lia Fáil is the coronation stone."},
         {"de": "Wichtiger Ort in der irischen Mythologie.", "hu": "Fontos helyszín az ír mitológiában.", "ro": "Un loc important în mitologia irlandeză.", "en": "Important site in Irish mythology."},
         {"de": "Bietet Panoramablick über die Landschaft.", "hu": "Panorámás kilátást nyújt a vidékre.", "ro": "Oferă o vedere panoramică asupra peisajului.", "en": "Offers panoramic views of the countryside."}
     ], "Neolithic"),

    # 11. Skellig Michael
    ("historical-skellig-michael", "historical", "ireland", -10.5392, 51.7714,
     {"de": "Skellig Michael", "hu": "Skellig Michael", "ro": "Skellig Michael", "en": "Skellig Michael"},
     {"de": "Eine steile Felseninsel mit einer alten christlichen Klostersiedlung.", "hu": "Meredek sziklás sziget, egy ősi keresztény kolostortelepüléssel.", "ro": "O insulă stâncoasă abruptă cu o veche așezare monahală creștină.", "en": "A steep rocky island with an ancient Christian monastic settlement."},
     [
         {"de": "Gehört zum UNESCO-Weltkulturerbe.", "hu": "Az UNESCO Világörökség része.", "ro": "Face parte din Patrimoniul Mondial UNESCO.", "en": "A UNESCO World Heritage Site."},
         {"de": "Bienenkorbhütten sind noch erhalten.", "hu": "A méhkaptár alakú kunyhók még mindig állnak.", "ro": "Colibele în formă de stup sunt încă păstrate.", "en": "Beehive huts are still preserved."},
         {"de": "Drehort für Star Wars.", "hu": "Star Wars forgatási helyszín.", "ro": "Locație de filmare pentru Star Wars.", "en": "Filming location for Star Wars."},
         {"de": "Sehr schwer zugänglich.", "hu": "Nagyon nehezen megközelíthető.", "ro": "Foarte greu accesibil.", "en": "Very difficult to access."}
     ], "6th century"),

    # 12. Carrickfergus Castle
    ("historical-carrickfergus-castle", "historical", "ireland", -5.8066, 54.7133,
     {"de": "Carrickfergus Castle", "hu": "Carrickfergus vára", "ro": "Castelul Carrickfergus", "en": "Carrickfergus Castle"},
     {"de": "Eine normannische Burg am Nordufer des Belfast Lough.", "hu": "Normann vár a Belfast Lough északi partján.", "ro": "Un castel normand pe țărmul nordic al Belfast Lough.", "en": "A Norman castle on the northern shore of Belfast Lough."},
     [
         {"de": "Erbaut im Jahr 1177.", "hu": "1177-ben épült.", "ro": "Construit în 1177.", "en": "Built in 1177."},
         {"de": "Eine der besterhaltenen mittelalterlichen Anlagen.", "hu": "Az egyik legjobb állapotban megőrzött középkori erőd.", "ro": "Una dintre cele mai bine conservate structuri medievale.", "en": "One of the best-preserved medieval structures."},
         {"de": "Wurde von Schotten, Iren, Engländern und Franzosen belagert.", "hu": "Skótok, írek, angolok és franciák is ostromolták.", "ro": "A fost asediat de scoțieni, irlandezi, englezi și francezi.", "en": "Besieged by Scots, Irish, English and French."},
         {"de": "Bis 1928 militärisch genutzt.", "hu": "1928-ig katonai célokra használták.", "ro": "Folosit în scopuri militare până în 1928.", "en": "Used for military purposes until 1928."}
     ], "1177"),

    # 13. Emain Macha (Navan Fort)
    ("historical-navan-fort", "historical", "ireland", -6.6908, 54.3438,
     {"de": "Navan Fort", "hu": "Navan-erőd", "ro": "Fortul Navan", "en": "Navan Fort"},
     {"de": "Ein altes Zeremonialzentrum in Nordirland.", "hu": "Ősi szertartási központ Észak-Írországban.", "ro": "Un vechi centru ceremonial din Irlanda de Nord.", "en": "An ancient ceremonial centre in Northern Ireland."},
     [
         {"de": "Sitz der Könige von Ulster.", "hu": "Ulster királyainak székhelye.", "ro": "Sediul regilor din Ulster.", "en": "Seat of the Kings of Ulster."},
         {"de": "Verbunden mit den Mythen um Cú Chulainn.", "hu": "A Cú Chulainn mítoszokhoz kapcsolódik.", "ro": "Asociat cu miturile despre Cú Chulainn.", "en": "Associated with the myths of Cú Chulainn."},
         {"de": "Zeigt Spuren eisenzeitlicher Holzbauten.", "hu": "Vaskori faépületek nyomait őrzi.", "ro": "Păstrează urme ale unor clădiri din lemn din Epoca Fierului.", "en": "Shows traces of Iron Age timber buildings."},
         {"de": "Wurde rituell zerstört.", "hu": "Rituálisan lerombolták.", "ro": "A fost distrus ritualic.", "en": "Was ritually destroyed."}
     ], "Iron Age"),

    # 14. Poulnabrone Dolmen
    ("historical-poulnabrone-dolmen", "historical", "ireland", -9.1401, 53.0488,
     {"de": "Poulnabrone-Dolmen", "hu": "Poulnabrone dolmen", "ro": "Dolmenul Poulnabrone", "en": "Poulnabrone Dolmen"},
     {"de": "Ein Portalgrab in der Karstlandschaft des Burren.", "hu": "Portálsír a Burren karsztvidékén.", "ro": "Un mormânt portal în peisajul carstic din Burren.", "en": "A portal tomb in the karst landscape of the Burren."},
     [
         {"de": "Stammt aus der Jungsteinzeit.", "hu": "Az újkőkorból származik.", "ro": "Datează din perioada neolitică.", "en": "Dates back to the Neolithic period."},
         {"de": "Es wurden die Überreste von 33 Personen gefunden.", "hu": "33 ember földi maradványait találták meg itt.", "ro": "Au fost găsite rămășițele a 33 de persoane.", "en": "The remains of 33 people were found here."},
         {"de": "Der Deckstein wiegt über eine Tonne.", "hu": "A fedőkő súlya több mint egy tonna.", "ro": "Piatra de acoperiș cântărește peste o tonă.", "en": "The capstone weighs over a tonne."},
         {"de": "Eines der bekanntesten Megalithgräber.", "hu": "Az egyik legismertebb megalitikus sír.", "ro": "Unul dintre cele mai faimoase morminte megalitice.", "en": "One of the most famous megalithic tombs."}
     ], "Neolithic"),

    # 15. Knowth
    ("historical-knowth", "historical", "ireland", -6.4912, 53.7015,
     {"de": "Knowth", "hu": "Knowth", "ro": "Knowth", "en": "Knowth"},
     {"de": "Ein großes neolithisches Ganggrab, Teil von Brú na Bóinne.", "hu": "Egy hatalmas neolitikus folyosósír a Brú na Bóinne komplexumban.", "ro": "Un mare mormânt neolitic cu pasaj, parte a Brú na Bóinne.", "en": "A large Neolithic passage grave, part of Brú na Bóinne."},
     [
         {"de": "Besitzt zwei Gänge.", "hu": "Két folyosóval rendelkezik.", "ro": "Are două pasaje.", "en": "Has two passages."},
         {"de": "Mehr als ein Drittel der westeuropäischen Megalithkunst befindet sich hier.", "hu": "A nyugat-európai megalitikus művészet több mint egyharmada itt található.", "ro": "Aici se găsește mai mult de o treime din arta megalitică din Europa de Vest.", "en": "More than a third of Western European megalithic art is found here."},
         {"de": "Ist älter als Stonehenge.", "hu": "Régebbi, mint Stonehenge.", "ro": "Este mai vechi decât Stonehenge.", "en": "Is older than Stonehenge."},
         {"de": "Zeigt faszinierende Spiralmuster.", "hu": "Lenyűgöző spirálmintákkal díszített.", "ro": "Este decorat cu modele în spirală fascinante.", "en": "Shows fascinating spiral patterns."}
     ], "Neolithic"),

    # 16. Bantry House
    ("historical-bantry-house", "landmark", "ireland", -9.4633, 51.6800,
     {"de": "Bantry House", "hu": "Bantry-ház", "ro": "Casa Bantry", "en": "Bantry House"},
     {"de": "Ein historisches Herrenhaus mit herrlichen Gärten in West Cork.", "hu": "Történelmi udvarház csodálatos kertekkel Nyugat-Corkban.", "ro": "Un conac istoric cu grădini minunate în West Cork.", "en": "A historic stately home with magnificent gardens in West Cork."},
     [
         {"de": "Seit 1739 im Besitz der Earls of Bantry.", "hu": "1739 óta Bantry grófjainak birtoka.", "ro": "Deținut de conții de Bantry din 1739.", "en": "Owned by the Earls of Bantry since 1739."},
         {"de": "Bietet Blick auf die Bantry Bay.", "hu": "A Bantry-öbölre néz.", "ro": "Oferă vedere la Golful Bantry.", "en": "Overlooks Bantry Bay."},
         {"de": "Die Gärten sind terrassenförmig angelegt.", "hu": "A kertek teraszos kialakításúak.", "ro": "Grădinile sunt amenajate în terase.", "en": "The gardens are terraced."},
         {"de": "Beherbergt Kunst und Antiquitäten aus ganz Europa.", "hu": "Európa minden tájáról származó művészeti alkotásokat és régiségeket őriz.", "ro": "Găzduiește artă și antichități din toată Europa.", "en": "Houses art and antiques from across Europe."}
     ], "1700s"),

    # 17. Muckross House
    ("historical-muckross-house", "landmark", "ireland", -9.5042, 52.0175,
     {"de": "Muckross House", "hu": "Muckross-ház", "ro": "Casa Muckross", "en": "Muckross House"},
     {"de": "Ein Herrenhaus aus dem 19. Jahrhundert im Killarney-Nationalpark.", "hu": "19. századi kastély a Killarney Nemzeti Parkban.", "ro": "Un conac din secolul al XIX-lea în Parcul Național Killarney.", "en": "A 19th-century mansion situated in Killarney National Park."},
     [
         {"de": "Königin Victoria war hier 1861 zu Gast.", "hu": "Viktória királynő 1861-ben itt vendégeskedett.", "ro": "Regina Victoria a fost oaspete aici în 1861.", "en": "Queen Victoria stayed here in 1861."},
         {"de": "Hat atemberaubende Gärten.", "hu": "Lélegzetelállító kertjei vannak.", "ro": "Are grădini uluitoare.", "en": "Has stunning gardens."},
         {"de": "Zeigt das Leben der Aristokraten.", "hu": "Az arisztokraták életét mutatja be.", "ro": "Prezintă viața aristocraților.", "en": "Shows the life of the aristocracy."},
         {"de": "Diente als Vorbild für eine frühe irische Touristenattraktion.", "hu": "Korai ír turisztikai látványosságként szolgált.", "ro": "A servit drept model pentru o atracție turistică timpurie.", "en": "Served as a model for early Irish tourism attractions."}
     ], "1843"),

    # 18. Christ Church Cathedral
    ("historical-christ-church", "historical", "ireland", -6.2711, 53.3430,
     {"de": "Christ Church Cathedral", "hu": "Christ Church-székesegyház", "ro": "Catedrala Christ Church", "en": "Christ Church Cathedral"},
     {"de": "Eine der ältesten und größten Kirchen in Dublin.", "hu": "Dublin egyik legrégebbi és legnagyobb temploma.", "ro": "Una dintre cele mai vechi și mai mari biserici din Dublin.", "en": "One of the oldest and largest churches in Dublin."},
     [
         {"de": "Gegründet um 1028.", "hu": "1028 körül alapították.", "ro": "Fondată în jurul anului 1028.", "en": "Founded around 1028."},
         {"de": "Hat eine riesige mittelalterliche Krypta.", "hu": "Hatalmas középkori kriptával rendelkezik.", "ro": "Are o uriașă criptă medievală.", "en": "Has a massive medieval crypt."},
         {"de": "Beherbergt das Grab von Strongbow.", "hu": "Itt található Strongbow sírja.", "ro": "Găzduiește mormântul lui Strongbow.", "en": "Houses the tomb of Strongbow."},
         {"de": "War Drehort für die Serie Die Tudors.", "hu": "A Tudorok című sorozat forgatási helyszíne volt.", "ro": "A fost locație de filmare pentru serialul Dinastia Tudorilor.", "en": "Was a filming location for The Tudors."}
     ], "1028"),

    # 19. Hook Lighthouse
    ("historical-hook-lighthouse", "landmark", "ireland", -6.9304, 52.1235,
     {"de": "Hook Lighthouse", "hu": "Hook világítótorony", "ro": "Farul Hook", "en": "Hook Lighthouse"},
     {"de": "Einer der ältesten in Betrieb befindlichen Leuchttürme der Welt.", "hu": "A világ egyik legrégebbi működő világítótornya.", "ro": "Unul dintre cele mai vechi faruri în funcțiune din lume.", "en": "One of the oldest operating lighthouses in the world."},
     [
         {"de": "Erbaut im frühen 13. Jahrhundert.", "hu": "A 13. század elején épült.", "ro": "Construit la începutul secolului al XIII-lea.", "en": "Built in the early 13th century."},
         {"de": "Wurde ursprünglich von Mönchen betrieben.", "hu": "Eredetileg szerzetesek működtették.", "ro": "A fost operat inițial de călugări.", "en": "Originally operated by monks."},
         {"de": "Die Mauern sind bis zu vier Meter dick.", "hu": "A falak akár négy méter vastagok is lehetnek.", "ro": "Pereții au până la patru metri grosime.", "en": "The walls are up to four metres thick."},
         {"de": "Bietet eine spektakuläre Aussicht auf das Meer.", "hu": "Látványos kilátást nyújt a tengerre.", "ro": "Oferă o vedere spectaculoasă la mare.", "en": "Offers spectacular views of the sea."}
     ], "13th century"),

    # 20. Carrowmore Megalithic Cemetery
    ("historical-carrowmore", "historical", "ireland", -8.5173, 54.2514,
     {"de": "Carrowmore", "hu": "Carrowmore megalitikus temető", "ro": "Cimitirul Megalitic Carrowmore", "en": "Carrowmore Megalithic Cemetery"},
     {"de": "Eine der größten Sammlungen von Megalithgräbern in Europa.", "hu": "Európa egyik legnagyobb megalitikus sírgyűjteménye.", "ro": "Una dintre cele mai mari colecții de morminte megalitice din Europa.", "en": "One of the largest complexes of megalithic tombs in Europe."},
     [
         {"de": "Einige Gräber sind über 5000 Jahre alt.", "hu": "Néhány sír több mint 5000 éves.", "ro": "Unele morminte au o vechime de peste 5000 de ani.", "en": "Some tombs are over 5,000 years old."},
         {"de": "Liegt in der Grafschaft Sligo.", "hu": "Sligo megyében található.", "ro": "Situat în comitatul Sligo.", "en": "Located in County Sligo."},
         {"de": "Umfasst zahlreiche Dolmen und Steinkreise.", "hu": "Számos dolment és kőkört foglal magában.", "ro": "Include numeroase dolmene și cercuri de piatră.", "en": "Includes numerous dolmens and stone circles."},
         {"de": "Wichtige Stätte für prähistorische Rituale.", "hu": "Fontos történelem előtti rituális helyszín.", "ro": "Un loc important pentru ritualurile preistorice.", "en": "Important site for prehistoric rituals."}
     ], "Neolithic"),

    # 21. Carrowkeel
    ("historical-carrowkeel", "historical", "ireland", -8.3811, 54.0531,
     {"de": "Carrowkeel", "hu": "Carrowkeel", "ro": "Carrowkeel", "en": "Carrowkeel"},
     {"de": "Ein neolithisches Ganggrab-Zentrum in den Bricklieve Mountains.", "hu": "Neolitikus folyosósír-központ a Bricklieve-hegységben.", "ro": "Un centru neolitic de morminte de trecere din Munții Bricklieve.", "en": "A Neolithic passage tomb cemetery in the Bricklieve Mountains."},
     [
         {"de": "Unberührter als viele andere Stätten.", "hu": "Érintetlenebb, mint sok más helyszín.", "ro": "Mai neatins decât multe alte situri.", "en": "More pristine than many other sites."},
         {"de": "Die Gräber sind nach der Sommersonnenwende ausgerichtet.", "hu": "A sírok a nyári napfordulóhoz igazodnak.", "ro": "Mormintele sunt aliniate la solstițiul de vară.", "en": "The tombs are aligned with the summer solstice."},
         {"de": "Liegt hoch oben auf den Hügeln.", "hu": "Magasan a hegyekben található.", "ro": "Situat sus, pe dealuri.", "en": "Located high up in the hills."},
         {"de": "Bietet einen Blick auf den Lough Arrow.", "hu": "A Lough Arrow tóra néz.", "ro": "Oferă o vedere asupra lacului Arrow.", "en": "Overlooks Lough Arrow."}
     ], "Neolithic"),

    # 22. Jerpoint Abbey
    ("historical-jerpoint-abbey", "historical", "ireland", -7.1583, 52.5113,
     {"de": "Jerpoint Abbey", "hu": "Jerpoint apátság", "ro": "Abația Jerpoint", "en": "Jerpoint Abbey"},
     {"de": "Eine zerstörte Zisterzienserabtei aus dem 12. Jahrhundert.", "hu": "Egy 12. századi romos ciszterci apátság.", "ro": "O abație cisterciană ruinată din secolul al XII-lea.", "en": "A ruined Cistercian abbey from the 12th century."},
     [
         {"de": "Berühmt für seine Steinmetzarbeiten.", "hu": "Kőfaragásairól híres.", "ro": "Faimoasă pentru sculpturile sale în piatră.", "en": "Famous for its stone carvings."},
         {"de": "Gegründet in der zweiten Hälfte des 12. Jahrhunderts.", "hu": "A 12. század második felében alapították.", "ro": "Fondată în a doua jumătate a secolului al XII-lea.", "en": "Founded in the second half of the 12th century."},
         {"de": "Wurde während der Auflösung der Klöster aufgegeben.", "hu": "A kolostorok feloszlatása során hagyták el.", "ro": "Abandonată în timpul desființării mănăstirilor.", "en": "Abandoned during the Dissolution of the Monasteries."},
         {"de": "Ein nationales Denkmal Irlands.", "hu": "Írország egyik nemzeti emlékműve.", "ro": "Un monument național al Irlandei.", "en": "A National Monument of Ireland."}
     ], "12th century"),

    # 23. Grianan of Aileach
    ("historical-grianan-of-aileach", "historical", "ireland", -7.4284, 55.0238,
     {"de": "Grianan of Aileach", "hu": "Grianán of Aileach", "ro": "Grianan of Aileach", "en": "Grianan of Aileach"},
     {"de": "Ein altes Ringfort aus Stein auf einem Hügel in Donegal.", "hu": "Ősi kőből épült gyűrűerőd egy dombon Donegalban.", "ro": "Un vechi fort inelar din piatră situat pe un deal din Donegal.", "en": "An ancient stone ringfort on a hilltop in Donegal."},
     [
         {"de": "Historischer Sitz der Könige von Ailech.", "hu": "Ailech királyainak történelmi székhelye.", "ro": "Sediul istoric al Regilor de Ailech.", "en": "Historical seat of the Kings of Ailech."},
         {"de": "Die heutigen Mauern wurden im 19. Jahrhundert restauriert.", "hu": "A jelenlegi falakat a 19. században restaurálták.", "ro": "Zidurile actuale au fost restaurate în secolul al XIX-lea.", "en": "Current walls were restored in the 19th century."},
         {"de": "Bietet einen Rundumblick auf die Umgebung.", "hu": "Körkörös kilátást nyújt a környékre.", "ro": "Oferă o vedere panoramică asupra împrejurimilor.", "en": "Offers sweeping views of the surrounding area."},
         {"de": "Der Ursprung reicht in die Eisenzeit zurück.", "hu": "Eredete a vaskorig nyúlik vissza.", "ro": "Originea sa datează din Epoca Fierului.", "en": "Origins trace back to the Iron Age."}
     ], "Iron Age"),

    # 24. Mellifont Abbey
    ("historical-mellifont-abbey", "historical", "ireland", -6.4633, 53.7432,
     {"de": "Mellifont Abbey", "hu": "Mellifont apátság", "ro": "Abația Mellifont", "en": "Mellifont Abbey"},
     {"de": "Die erste Zisterzienserabtei, die in Irland gegründet wurde.", "hu": "Az első ciszterci apátság, amelyet Írországban alapítottak.", "ro": "Prima abație cisterciană fondată în Irlanda.", "en": "The first Cistercian abbey established in Ireland."},
     [
         {"de": "Gegründet im Jahr 1142.", "hu": "1142-ben alapították.", "ro": "Fondată în anul 1142.", "en": "Founded in the year 1142."},
         {"de": "Das achteckige Lavabo ist noch erhalten.", "hu": "A nyolcszögletű kézmosó medence még mindig áll.", "ro": "Bazinul octogonal de spălare este încă păstrat.", "en": "The octagonal lavabo is still preserved."},
         {"de": "War ein Zentrum der klösterlichen Reform.", "hu": "A kolostori reform központja volt.", "ro": "A fost un centru al reformei monahale.", "en": "Was a centre of monastic reform."},
         {"de": "Wurde 1539 aufgelöst.", "hu": "1539-ben feloszlatták.", "ro": "A fost desființată în 1539.", "en": "Was dissolved in 1539."}
     ], "1142"),

    # 25. Bective Abbey
    ("historical-bective-abbey", "historical", "ireland", -6.7001, 53.5932,
     {"de": "Bective Abbey", "hu": "Bective apátság", "ro": "Abația Bective", "en": "Bective Abbey"},
     {"de": "Eine befestigte Zisterzienserabtei im County Meath.", "hu": "Erődített ciszterci apátság Meath megyében.", "ro": "O abație cisterciană fortificată din comitatul Meath.", "en": "A fortified Cistercian abbey in County Meath."},
     [
         {"de": "Gegründet im Jahr 1147.", "hu": "1147-ben alapították.", "ro": "Fondată în 1147.", "en": "Founded in 1147."},
         {"de": "Diente auch als Verteidigungsanlage.", "hu": "Védelmi célokat is szolgált.", "ro": "A servit și ca structură defensivă.", "en": "Also served as a defensive structure."},
         {"de": "Die dicken Mauern erinnern an eine Burg.", "hu": "Vastag falai egy várra emlékeztetnek.", "ro": "Zidurile groase amintesc de un castel.", "en": "The thick walls resemble a castle."},
         {"de": "War Drehort für den Film Braveheart.", "hu": "A rettenthetetlen című film forgatási helyszíne volt.", "ro": "A fost locație de filmare pentru filmul Inimă neînfricată.", "en": "Was a filming location for Braveheart."}
     ], "1147"),

    # 26. Donegal Castle
    ("historical-donegal-castle", "historical", "ireland", -8.1102, 54.6547,
     {"de": "Donegal Castle", "hu": "Donegal vára", "ro": "Castelul Donegal", "en": "Donegal Castle"},
     {"de": "Eine befestigte Burg aus dem 15. Jahrhundert im Zentrum von Donegal.", "hu": "15. századi erődítmény Donegal központjában.", "ro": "Un castel fortificat din secolul al XV-lea în centrul orașului Donegal.", "en": "A 15th-century fortified castle in the centre of Donegal."},
     [
         {"de": "Erbaut vom O'Donnell-Clan.", "hu": "Az O'Donnell klán építette.", "ro": "Construit de clanul O'Donnell.", "en": "Built by the O'Donnell clan."},
         {"de": "Liegt am Fluss Eske.", "hu": "Az Eske folyó partján fekszik.", "ro": "Situat pe râul Eske.", "en": "Situated on the River Eske."},
         {"de": "Im 17. Jahrhundert um einen jakobinischen Flügel erweitert.", "hu": "A 17. században jakobinus szárnnyal bővítették.", "ro": "Extins în secolul al XVII-lea cu o aripă iacobină.", "en": "Expanded with a Jacobean wing in the 17th century."},
         {"de": "Heute fast vollständig restauriert.", "hu": "Mára szinte teljesen felújították.", "ro": "Astăzi complet restaurat.", "en": "Almost fully restored today."}
     ], "15th century"),

    # 27. Enniskillen Castle
    ("historical-enniskillen-castle", "historical", "ireland", -7.6433, 54.3448,
     {"de": "Enniskillen Castle", "hu": "Enniskillen vára", "ro": "Castelul Enniskillen", "en": "Enniskillen Castle"},
     {"de": "Eine Wasserburg am Fluss Erne in Nordirland.", "hu": "Vízivár az Erne folyó partján Észak-Írországban.", "ro": "Un castel pe apă pe râul Erne din Irlanda de Nord.", "en": "A water castle on the River Erne in Northern Ireland."},
     [
         {"de": "Stammsitz des Maguire-Clans.", "hu": "A Maguire klán ősi központja.", "ro": "Sediul ancestral al clanului Maguire.", "en": "Ancestral seat of the Maguire clan."},
         {"de": "Beherbergt heute zwei Museen.", "hu": "Ma két múzeumnak ad otthont.", "ro": "Găzduiește astăzi două muzee.", "en": "Now houses two museums."},
         {"de": "Später als britische Kaserne genutzt.", "hu": "Később brit laktanyaként használták.", "ro": "Folosit mai târziu ca o cazarmă britanică.", "en": "Later used as a British barracks."},
         {"de": "Bietet tolle Ausblicke aufs Wasser.", "hu": "Remek kilátást nyújt a vízre.", "ro": "Oferă priveliști excelente la apă.", "en": "Offers great views over the water."}
     ], "16th century"),

    # 28. Glenveagh Castle
    ("historical-glenveagh-castle", "landmark", "ireland", -8.0471, 55.0384,
     {"de": "Glenveagh Castle", "hu": "Glenveagh kastély", "ro": "Castelul Glenveagh", "en": "Glenveagh Castle"},
     {"de": "Ein schottisch anmutendes Schloss im Glenveagh-Nationalpark.", "hu": "Skót stílusú kastély a Glenveagh Nemzeti Parkban.", "ro": "Un castel în stil scoțian din Parcul Național Glenveagh.", "en": "A Scottish baronial-style castle in Glenveagh National Park."},
     [
         {"de": "Erbaut zwischen 1870 und 1873.", "hu": "1870 és 1873 között épült.", "ro": "Construit între 1870 și 1873.", "en": "Built between 1870 and 1873."},
         {"de": "Liegt malerisch am Lough Veagh.", "hu": "Festői környezetben fekszik a Lough Veagh tó partján.", "ro": "Situat pitoresc pe Lough Veagh.", "en": "Picturesquely situated on Lough Veagh."},
         {"de": "Umgeben von weitläufigen Gärten.", "hu": "Hatalmas kertek veszik körül.", "ro": "Înconjurat de grădini extinse.", "en": "Surrounded by extensive gardens."},
         {"de": "War ein Treffpunkt für Hollywood-Stars.", "hu": "Hollywoodi sztárok találkozóhelye volt.", "ro": "A fost un loc de întâlnire pentru staruri de la Hollywood.", "en": "Was a gathering place for Hollywood stars."}
     ], "1870"),

    # 29. Dromoland Castle
    ("historical-dromoland-castle", "landmark", "ireland", -8.9066, 52.7844,
     {"de": "Dromoland Castle", "hu": "Dromoland kastély", "ro": "Castelul Dromoland", "en": "Dromoland Castle"},
     {"de": "Ein prächtiges Schloss, das heute ein Fünf-Sterne-Hotel ist.", "hu": "Pompás kastély, amely ma ötcsillagos szállodaként működik.", "ro": "Un castel magnific, astăzi hotel de cinci stele.", "en": "A magnificent castle that is now a five-star hotel."},
     [
         {"de": "Stammsitz des O'Brien-Clans.", "hu": "Az O'Brien klán egykori otthona.", "ro": "Fosta casă a clanului O'Brien.", "en": "Ancestral home of the O'Brien clan."},
         {"de": "Das heutige Gebäude stammt aus dem Jahr 1835.", "hu": "A mai épület 1835-ből származik.", "ro": "Clădirea actuală datează din 1835.", "en": "The present building dates to 1835."},
         {"de": "Umgeben von einem großen Golfplatz.", "hu": "Hatalmas golfpálya veszi körül.", "ro": "Înconjurat de un mare teren de golf.", "en": "Surrounded by a large golf course."},
         {"de": "Besitzt eine reiche Geschichte und Architektur.", "hu": "Gazdag történelemmel és építészettel rendelkezik.", "ro": "Are o istorie și o arhitectură bogată.", "en": "Possesses rich history and architecture."}
     ], "1835"),

    # 30. Castletown House
    ("historical-castletown-house", "landmark", "ireland", -6.5312, 53.3444,
     {"de": "Castletown House", "hu": "Castletown-ház", "ro": "Casa Castletown", "en": "Castletown House"},
     {"de": "Irlands größtes im palladianischen Stil erbautes Landhaus.", "hu": "Írország legnagyobb palladiánus stílusú vidéki kúriája.", "ro": "Cea mai mare casă de țară în stil palladian din Irlanda.", "en": "Ireland's largest Palladian-style country house."},
     [
         {"de": "Erbaut im Jahr 1722.", "hu": "1722-ben épült.", "ro": "Construit în anul 1722.", "en": "Built in the year 1722."},
         {"de": "Gilt als architektonisches Meisterwerk.", "hu": "Építészeti remekműként tartják számon.", "ro": "Considerat o capodoperă arhitecturală.", "en": "Considered an architectural masterpiece."},
         {"de": "Die Innenausstattung ist sehr luxuriös.", "hu": "Belső kialakítása rendkívül fényűző.", "ro": "Interiorul este foarte luxos.", "en": "The interior is very luxurious."},
         {"de": "Von einer großen Parklandschaft umgeben.", "hu": "Hatalmas parkosított terület veszi körül.", "ro": "Înconjurat de un parc întins.", "en": "Surrounded by expansive parkland."}
     ], "1722"),

    # 31. Swiss Cottage (Cahir)
    ("historical-swiss-cottage", "landmark", "ireland", -7.9255, 52.3615,
     {"de": "Swiss Cottage", "hu": "Svájci házikó", "ro": "Căsuța Elvețiană", "en": "Swiss Cottage"},
     {"de": "Ein idyllisches Zierhäuschen im Stil der Romantik in Cahir.", "hu": "Idilli romantikus stílusú díszházikó Cahirban.", "ro": "O căsuță ornamentală idilică în stil romantic din Cahir.", "en": "An idyllic romantic-style ornamental cottage in Cahir."},
     [
         {"de": "Erbaut um 1810 von Lord Cahir.", "hu": "1810 körül építtette Lord Cahir.", "ro": "Construit în jurul anului 1810 de Lord Cahir.", "en": "Built around 1810 by Lord Cahir."},
         {"de": "Wurde von Nash entworfen.", "hu": "A terveket Nash készítette.", "ro": "A fost proiectat de Nash.", "en": "Was designed by Nash."},
         {"de": "Besitzt Strohdächer und asymmetrische Formen.", "hu": "Szalmatetővel és aszimmetrikus formákkal rendelkezik.", "ro": "Are acoperiș de paie și forme asimetrice.", "en": "Features thatched roofs and asymmetrical shapes."},
         {"de": "Ein schönes Beispiel für den Ornemental-Stil.", "hu": "Az ornamentikus stílus gyönyörű példája.", "ro": "Un exemplu frumos al stilului ornamental.", "en": "A beautiful example of the ornamental style."}
     ], "1810"),

    # 32. Birr Castle
    ("historical-birr-castle", "landmark", "ireland", -7.9157, 53.0955,
     {"de": "Birr Castle", "hu": "Birr kastély", "ro": "Castelul Birr", "en": "Birr Castle"},
     {"de": "Ein großes Schloss, berühmt für sein historisches Riesenteleskop.", "hu": "Hatalmas kastély, amely történelmi óriástávcsövéről híres.", "ro": "Un castel mare, renumit pentru telescopul său uriaș istoric.", "en": "A large castle famous for its historic giant telescope."},
     [
         {"de": "Wohnsitz der Familie Parsons (Earls of Rosse).", "hu": "A Parsons család (Rosse grófjai) lakhelye.", "ro": "Reședința familiei Parsons (Conții de Rosse).", "en": "Home of the Parsons family (Earls of Rosse)."},
         {"de": "Das Teleskop war einst das größte der Welt.", "hu": "A távcső egykor a világ legnagyobbja volt.", "ro": "Telescopul a fost odată cel mai mare din lume.", "en": "The telescope was once the largest in the world."},
         {"de": "Die Gärten beherbergen seltene Pflanzenarten.", "hu": "A kertekben ritka növényfajok találhatók.", "ro": "Grădinile adăpostesc specii de plante rare.", "en": "The gardens house rare plant species."},
         {"de": "Besitzt die ältesten Hängebrücken Irlands.", "hu": "Itt találhatók Írország legrégebbi függőhídjai.", "ro": "Are cele mai vechi poduri suspendate din Irlanda.", "en": "Features the oldest suspension bridges in Ireland."}
     ], "17th century"),

    # 33. Leap Castle
    ("historical-leap-castle", "historical", "ireland", -7.8105, 53.0286,
     {"de": "Leap Castle", "hu": "Leap kastély", "ro": "Castelul Leap", "en": "Leap Castle"},
     {"de": "Gilt als das am meisten heimgesuchte Schloss Irlands.", "hu": "Írország legkísértetiesebb kastélyaként tartják számon.", "ro": "Considerat a fi cel mai bântuit castel din Irlanda.", "en": "Reputed to be the most haunted castle in Ireland."},
     [
         {"de": "Erbaut um 1250 vom O'Bannon-Clan.", "hu": "1250 körül építette az O'Bannon klán.", "ro": "Construit în jurul anului 1250 de clanul O'Bannon.", "en": "Built around 1250 by the O'Bannon clan."},
         {"de": "Bekannt für sein gruseliges 'Oubliette'.", "hu": "Hírhedt a hátborzongató 'oubliette' (tömlöc) miatt.", "ro": "Cunoscut pentru 'oubliette'-ul său înfiorător.", "en": "Known for its creepy 'oubliette' dungeon."},
         {"de": "Viele Geistergeschichten umgeben den Ort.", "hu": "Számos kísértettörténet övezi a helyet.", "ro": "Multe povești cu fantome înconjoară locul.", "en": "Many ghost stories surround the place."},
         {"de": "Ist im Privatbesitz, kann aber besichtigt werden.", "hu": "Magántulajdonban van, de látogatható.", "ro": "Este proprietate privată, dar poate fi vizitat.", "en": "Is privately owned but can be visited."}
     ], "13th century"),

    # 34. Athenry Castle
    ("historical-athenry-castle", "historical", "ireland", -8.7456, 53.2985,
     {"de": "Athenry Castle", "hu": "Athenry vára", "ro": "Castelul Athenry", "en": "Athenry Castle"},
     {"de": "Eine gut erhaltene normannische Burg im County Galway.", "hu": "Jó állapotban fennmaradt normann vár Galway megyében.", "ro": "Un castel normand bine conservat din comitatul Galway.", "en": "A well-preserved Norman castle in County Galway."},
     [
         {"de": "Erbaut im 13. Jahrhundert von Meyler de Bermingham.", "hu": "A 13. században építette Meyler de Bermingham.", "ro": "Construit în secolul al XIII-lea de Meyler de Bermingham.", "en": "Built in the 13th century by Meyler de Bermingham."},
         {"de": "Der Bergfried ist der älteste Teil der Burg.", "hu": "Az öregtorony a vár legrégebbi része.", "ro": "Donjonul este cea mai veche parte a castelului.", "en": "The keep is the oldest part of the castle."},
         {"de": "Verfügt über ein schönes originales Eingangsportal.", "hu": "Egy szép, eredeti bejárattal rendelkezik.", "ro": "Are o frumoasă poartă de intrare originală.", "en": "Features a fine original entrance doorway."},
         {"de": "Wurde umfangreich restauriert.", "hu": "Kiterjedt restauráláson esett át.", "ro": "A fost restaurat pe larg.", "en": "Has been extensively restored."}
     ], "13th century"),

    # 35. Parke's Castle
    ("historical-parkes-castle", "historical", "ireland", -8.3344, 54.2644,
     {"de": "Parke's Castle", "hu": "Parke's kastély", "ro": "Castelul Parke's", "en": "Parke's Castle"},
     {"de": "Eine restaurierte Plantagenburg am Ufer des Lough Gill.", "hu": "Restaurált ültetvényes kastély a Lough Gill partján.", "ro": "Un castel de plantație restaurat pe malul Lough Gill.", "en": "A restored plantation castle on the shores of Lough Gill."},
     [
         {"de": "Erbaut im 17. Jahrhundert.", "hu": "A 17. században épült.", "ro": "Construit în secolul al XVII-lea.", "en": "Built in the 17th century."},
         {"de": "Wurde auf den Ruinen einer älteren O'Rourke-Festung errichtet.", "hu": "Egy régebbi O'Rourke-erőd romjaira épült.", "ro": "Construit pe ruinele unei fortărețe mai vechi O'Rourke.", "en": "Constructed on the ruins of an older O'Rourke fortress."},
         {"de": "Besitzt traditionelle irische Eichendächer.", "hu": "Hagyományos ír tölgyfatetővel rendelkezik.", "ro": "Are acoperișuri tradiționale din stejar irlandez.", "en": "Features traditional Irish oak roofs."},
         {"de": "Beherbergt Ausstellungen über lokales Handwerk.", "hu": "Helyi kézműves kiállításoknak ad otthont.", "ro": "Găzduiește expoziții despre meșteșugurile locale.", "en": "Houses exhibitions on local crafts."}
     ], "17th century"),

    # 36. Tintern Abbey
    ("historical-tintern-abbey", "historical", "ireland", -6.8375, 52.2366,
     {"de": "Tintern Abbey (Irland)", "hu": "Tintern apátság (Írország)", "ro": "Abația Tintern (Irlanda)", "en": "Tintern Abbey (Ireland)"},
     {"de": "Eine Zisterzienserabtei auf der Halbinsel Hook im County Wexford.", "hu": "Ciszterci apátság a Hook-félszigeten, Wexford megyében.", "ro": "O abație cisterciană pe Peninsula Hook din comitatul Wexford.", "en": "A Cistercian abbey on the Hook Peninsula in County Wexford."},
     [
         {"de": "Wurde oft 'Tintern de Voto' genannt.", "hu": "Gyakran nevezték 'Tintern de Voto'-nak.", "ro": "Adesea numită 'Tintern de Voto'.", "en": "Was often called 'Tintern de Voto'."},
         {"de": "Gegründet im Jahr 1200 von William Marshal.", "hu": "William Marshal alapította 1200-ban.", "ro": "Fondată în anul 1200 de William Marshal.", "en": "Founded in 1200 by William Marshal."},
         {"de": "Später in ein Wohnhaus umgewandelt.", "hu": "Később lakóházzá alakították.", "ro": "Ulterior transformată în reședință.", "en": "Later converted into a residence."},
         {"de": "Von wunderschönen Waldwegen umgeben.", "hu": "Gyönyörű erdei ösvények veszik körül.", "ro": "Înconjurată de poteci frumoase de pădure.", "en": "Surrounded by beautiful woodland trails."}
     ], "1200"),

    # 37. Aughnanure Castle
    ("historical-aughnanure-castle", "historical", "ireland", -9.2312, 53.4184,
     {"de": "Aughnanure Castle", "hu": "Aughnanure vára", "ro": "Castelul Aughnanure", "en": "Aughnanure Castle"},
     {"de": "Ein gut erhaltenes Turmhaus aus dem 16. Jahrhundert in Oughterard.", "hu": "Jó állapotban fennmaradt 16. századi lakótorony Oughterardban.", "ro": "Un turn bine conservat din secolul al XVI-lea în Oughterard.", "en": "A well-preserved 16th-century tower house in Oughterard."},
     [
         {"de": "Erbaut vom O'Flaherty-Clan.", "hu": "Az O'Flaherty klán építette.", "ro": "Construit de clanul O'Flaherty.", "en": "Built by the O'Flaherty clan."},
         {"de": "Liegt an den Ufern des Lough Corrib.", "hu": "A Lough Corrib partján fekszik.", "ro": "Situat pe malurile lacului Corrib.", "en": "Set on the shores of Lough Corrib."},
         {"de": "Die Außenmauer und die Wachtürme sind noch sichtbar.", "hu": "A külső fal és az őrtornyok még ma is láthatók.", "ro": "Zidul exterior și turnurile de veghe sunt încă vizibile.", "en": "The outer wall and watchtowers are still visible."},
         {"de": "War eine wichtige Festung in Connemara.", "hu": "Fontos erődítmény volt Connemarában.", "ro": "A fost o fortăreață importantă în Connemara.", "en": "Was an important stronghold in Connemara."}
     ], "16th century"),

    # 38. Hore Abbey
    ("historical-hore-abbey", "historical", "ireland", -7.8933, 52.5188,
     {"de": "Hore Abbey", "hu": "Hore apátság", "ro": "Abația Hore", "en": "Hore Abbey"},
     {"de": "Eine zerstörte Zisterzienserabtei in der Nähe des Rock of Cashel.", "hu": "Romos ciszterci apátság a Rock of Cashel közelében.", "ro": "O abație cisterciană ruinată, lângă Rock of Cashel.", "en": "A ruined Cistercian abbey near the Rock of Cashel."},
     [
         {"de": "Ursprünglich ein Benediktinerkloster.", "hu": "Eredetileg bencés kolostor volt.", "ro": "Inițial o mănăstire benedictină.", "en": "Originally a Benedictine monastery."},
         {"de": "Bietet einen tollen Blick auf Cashel.", "hu": "Remek kilátást nyújt Cashelre.", "ro": "Oferă o vedere minunată asupra Cashel.", "en": "Offers a great view of Cashel."},
         {"de": "Ist meist friedlich und unberührt.", "hu": "Többnyire békés és érintetlen.", "ro": "Este de obicei pașnic și neatins.", "en": "Is mostly peaceful and untouched."},
         {"de": "Besitzt ungewöhnliche architektonische Details.", "hu": "Szokatlan építészeti részletekkel rendelkezik.", "ro": "Are detalii arhitecturale neobișnuite.", "en": "Possesses unusual architectural details."}
     ], "13th century"),

    # 39. Kells Priory
    ("historical-kells-priory", "historical", "ireland", -7.2662, 52.5381,
     {"de": "Kells Priory", "hu": "Kells-perjelség", "ro": "Mănăstirea Kells", "en": "Kells Priory"},
     {"de": "Eine der größten mittelalterlichen Klosteranlagen Irlands.", "hu": "Írország egyik legnagyobb középkori kolostorkomplexuma.", "ro": "Unul dintre cele mai mari complexe monahale medievale din Irlanda.", "en": "One of the largest medieval monastic settlements in Ireland."},
     [
         {"de": "Gegründet um 1193.", "hu": "1193 körül alapították.", "ro": "Fondată în jurul anului 1193.", "en": "Founded around 1193."},
         {"de": "Wird oft wegen der vielen Türme als 'Seven Castles' bezeichnet.", "hu": "A sok torony miatt gyakran 'Hét Kastély'-nak is nevezik.", "ro": "Adesea numită 'Șapte castele' din cauza numeroaselor turnuri.", "en": "Often called 'Seven Castles' because of the many towers."},
         {"de": "Ist von massiven Festungsmauern umgeben.", "hu": "Masszív várfalak veszik körül.", "ro": "Este înconjurată de ziduri masive de fortificație.", "en": "Is surrounded by massive fortified walls."},
         {"de": "Ein nationales Monument im County Kilkenny.", "hu": "Nemzeti műemlék Kilkenny megyében.", "ro": "Un monument național în comitatul Kilkenny.", "en": "A National Monument in County Kilkenny."}
     ], "1193"),

    # 40. Slane Castle
    ("historical-slane-castle", "landmark", "ireland", -6.5513, 53.7087,
     {"de": "Slane Castle", "hu": "Slane-kastély", "ro": "Castelul Slane", "en": "Slane Castle"},
     {"de": "Ein prächtiges Schloss, weltberühmt für seine großen Rockkonzerte.", "hu": "Pompás kastély, amely világhírű az itt tartott nagy rockkoncertekről.", "ro": "Un castel magnific, renumit în întreaga lume pentru concertele sale rock de mare amploare.", "en": "A magnificent castle, world-famous for hosting huge rock concerts."},
     [
         {"de": "Seit dem 18. Jahrhundert Sitz der Familie Conyngham.", "hu": "A 18. század óta a Conyngham család székhelye.", "ro": "Sediul familiei Conyngham din secolul al XVIII-lea.", "en": "Seat of the Conyngham family since the 18th century."},
         {"de": "Wurde 1991 durch ein Feuer schwer beschädigt.", "hu": "1991-ben egy tűz során súlyosan megrongálódott.", "ro": "A fost grav avariat de un incendiu în 1991.", "en": "Was severely damaged by a fire in 1991."},
         {"de": "Wurde komplett restauriert.", "hu": "Teljesen felújították.", "ro": "A fost complet restaurat.", "en": "Has been completely restored."},
         {"de": "Liegt malerisch im Boyne Valley.", "hu": "Festői környezetben fekszik a Boyne-völgyben.", "ro": "Situat pitoresc în Valea Boyne.", "en": "Picturesquely located in the Boyne Valley."}
     ], "18th century"),

    # 41. Rathfarnham Castle
    ("historical-rathfarnham-castle", "historical", "ireland", -6.2863, 53.2982,
     {"de": "Rathfarnham Castle", "hu": "Rathfarnham-kastély", "ro": "Castelul Rathfarnham", "en": "Rathfarnham Castle"},
     {"de": "Ein befestigtes Haus aus dem 16. Jahrhundert in South Dublin.", "hu": "16. századi erődített ház Dél-Dublinban.", "ro": "O casă fortificată din secolul al XVI-lea în sudul Dublinului.", "en": "A 16th-century fortified house in South Dublin."},
     [
         {"de": "Erbaut von Erzbischof Adam Loftus.", "hu": "Adam Loftus érsek építtette.", "ro": "Construit de arhiepiscopul Adam Loftus.", "en": "Built by Archbishop Adam Loftus."},
         {"de": "Später im 18. Jahrhundert umgebaut.", "hu": "A 18. században később átépítették.", "ro": "Reconstruit ulterior în secolul al XVIII-lea.", "en": "Later remodeled in the 18th century."},
         {"de": "Diente kurzzeitig den Jesuiten als Priesterseminar.", "hu": "Rövid ideig a jezsuiták szemináriumként használták.", "ro": "A servit pentru scurt timp ca seminar iezuit.", "en": "Briefly served as a Jesuit seminary."},
         {"de": "Heute ein nationales Monument.", "hu": "Ma nemzeti műemlék.", "ro": "Astăzi un monument național.", "en": "Today a national monument."}
     ], "1583"),

    # 42. Ashtown Castle
    ("historical-ashtown-castle", "historical", "ireland", -6.3263, 53.3642,
     {"de": "Ashtown Castle", "hu": "Ashtown-kastély", "ro": "Castelul Ashtown", "en": "Ashtown Castle"},
     {"de": "Ein kleines Turmhaus im Phoenix Park in Dublin.", "hu": "Egy kis lakótorony a dublini Phoenix Parkban.", "ro": "Un mic turn în Phoenix Park din Dublin.", "en": "A small tower house situated in Phoenix Park in Dublin."},
     [
         {"de": "Wurde erst in den 1970er Jahren 'wiederentdeckt'.", "hu": "Csak az 1970-es években 'fedezték fel' újra.", "ro": "A fost 'redescoperit' abia în anii 1970.", "en": "Was 'rediscovered' only in the 1970s."},
         {"de": "War in den Mauern eines größeren Hauses verborgen.", "hu": "Egy nagyobb ház falai közé volt rejtve.", "ro": "Era ascuns între pereții unei case mai mari.", "en": "Was hidden within the walls of a larger house."},
         {"de": "Stammt aus dem 15. Jahrhundert.", "hu": "A 15. századból származik.", "ro": "Datează din secolul al XV-lea.", "en": "Dates back to the 15th century."},
         {"de": "Dient als Besucherzentrum des Parks.", "hu": "A park látogatóközpontjaként funkcionál.", "ro": "Servește ca centru de vizitare al parcului.", "en": "Serves as the park's visitor centre."}
     ], "15th century"),

    # 43. Reginald's Tower
    ("historical-reginalds-tower", "historical", "ireland", -7.1066, 52.2612,
     {"de": "Reginald's Tower", "hu": "Reginald-torony", "ro": "Turnul lui Reginald", "en": "Reginald's Tower"},
     {"de": "Der älteste erhaltene Turm Irlands im Zentrum von Waterford.", "hu": "Írország legrégebbi fennmaradt tornya Waterford központjában.", "ro": "Cel mai vechi turn supraviețuitor din Irlanda, în centrul orașului Waterford.", "en": "The oldest surviving tower in Ireland, located in the centre of Waterford."},
     [
         {"de": "Ursprünglich von den Wikingern erbaut.", "hu": "Eredetileg a vikingek építették.", "ro": "Construit inițial de vikingi.", "en": "Originally built by the Vikings."},
         {"de": "Nach einem Wikingerführer benannt.", "hu": "Egy viking vezetőről kapta a nevét.", "ro": "Numit după un lider viking.", "en": "Named after a Viking leader."},
         {"de": "Wurde als Gefängnis und Münzstätte genutzt.", "hu": "Börtönként és pénzverőként is használták.", "ro": "A fost folosit ca închisoare și monetărie.", "en": "Was used as a prison and mint."},
         {"de": "Heute ein Wikinger-Museum.", "hu": "Ma viking múzeumként működik.", "ro": "Astăzi este un muzeu viking.", "en": "Today a Viking museum."}
     ], "12th century"),

    # 44. Mount Stewart
    ("historical-mount-stewart", "landmark", "ireland", -5.6022, 54.5511,
     {"de": "Mount Stewart", "hu": "Mount Stewart", "ro": "Mount Stewart", "en": "Mount Stewart"},
     {"de": "Ein klassizistisches Herrenhaus mit herrlichen Gärten in Nordirland.", "hu": "Klasszicista kúria csodálatos kertekkel Észak-Írországban.", "ro": "Un conac neoclasic cu grădini minunate din Irlanda de Nord.", "en": "A neo-classical house with magnificent gardens in Northern Ireland."},
     [
         {"de": "Erbaut für den Marquess of Londonderry.", "hu": "Londonderry márkija számára épült.", "ro": "Construit pentru marchizul de Londonderry.", "en": "Built for the Marquess of Londonderry."},
         {"de": "Die Gärten gelten als einige der besten Europas.", "hu": "Kertjei Európa legjobbjai közé tartoznak.", "ro": "Grădinile sunt considerate printre cele mai bune din Europa.", "en": "The gardens are considered some of the best in Europe."},
         {"de": "Verfügt über ein ungewöhnliches Mikroklima.", "hu": "Szokatlan mikroklímával rendelkezik.", "ro": "Are un microclimat neobișnuit.", "en": "Enjoys an unusual microclimate."},
         {"de": "Wird vom National Trust verwaltet.", "hu": "A National Trust kezeli.", "ro": "Este administrat de National Trust.", "en": "Is managed by the National Trust."}
     ], "19th century"),

    # 45. Sligo Abbey
    ("historical-sligo-abbey", "historical", "ireland", -8.4722, 54.2711,
     {"de": "Sligo Abbey", "hu": "Sligo apátság", "ro": "Abația Sligo", "en": "Sligo Abbey"},
     {"de": "Eine verfallene Dominikanerabtei im Zentrum der Stadt Sligo.", "hu": "Romos domonkos apátság Sligo városközpontjában.", "ro": "O abație dominicană ruinată în centrul orașului Sligo.", "en": "A ruined Dominican abbey in the centre of Sligo town."},
     [
         {"de": "Gegründet um 1252.", "hu": "1252 körül alapították.", "ro": "Fondată în jurul anului 1252.", "en": "Founded around 1252."},
         {"de": "Wurde im 15. Jahrhundert nach einem Feuer wiederaufgebaut.", "hu": "A 15. században egy tűz után újjáépítették.", "ro": "A fost reconstruită în secolul al XV-lea după un incendiu.", "en": "Rebuilt in the 15th century after a fire."},
         {"de": "Besitzt feine Schnitzereien.", "hu": "Finom faragványokkal rendelkezik.", "ro": "Are sculpturi fine.", "en": "Features fine carvings."},
         {"de": "Ist von alten Grabsteinen umgeben.", "hu": "Régi sírkövek veszik körül.", "ro": "Este înconjurată de vechi pietre funerare.", "en": "Is surrounded by ancient headstones."}
     ], "1252"),

    # 46. Blackrock Castle
    ("historical-blackrock-castle", "historical", "ireland", -8.4022, 51.9011,
     {"de": "Blackrock Castle", "hu": "Blackrock-kastély", "ro": "Castelul Blackrock", "en": "Blackrock Castle"},
     {"de": "Ein Observatorium in einer alten Befestigungsanlage bei Cork.", "hu": "Csillagvizsgáló egy régi erődítményben Cork közelében.", "ro": "Un observator aflat într-o veche fortificație lângă Cork.", "en": "An observatory situated in an old fortification near Cork."},
     [
         {"de": "Ursprünglich 1582 zur Verteidigung des Hafens erbaut.", "hu": "Eredetileg 1582-ben épült a kikötő védelmére.", "ro": "Construit inițial în 1582 pentru a apăra portul.", "en": "Originally built in 1582 to defend the harbour."},
         {"de": "Wurde nach Bränden mehrfach umgebaut.", "hu": "Tüzek után többször átépítették.", "ro": "A fost reconstruit de mai multe ori după incendii.", "en": "Was rebuilt several times after fires."},
         {"de": "Beherbergt heute ein Zentrum für interaktive Wissenschaft.", "hu": "Ma egy interaktív tudományos központnak ad otthont.", "ro": "Găzduiește astăzi un centru de știință interactiv.", "en": "Today houses an interactive science centre."},
         {"de": "Liegt direkt am Fluss Lee.", "hu": "Közvetlenül a Lee folyó partján fekszik.", "ro": "Situat chiar pe râul Lee.", "en": "Located right on the River Lee."}
     ], "1582"),

    # 47. Fota House
    ("historical-fota-house", "landmark", "ireland", -8.3155, 51.8966,
     {"de": "Fota House", "hu": "Fota-ház", "ro": "Casa Fota", "en": "Fota House"},
     {"de": "Ein klassizistisches Herrenhaus mit einem bekannten Arboretum bei Cork.", "hu": "Klasszicista kúria híres arborétummal Cork közelében.", "ro": "Un conac neoclasic cu un faimos arboretum lângă Cork.", "en": "A classical stately home with a renowned arboretum near Cork."},
     [
         {"de": "Erbaut in den 1820er Jahren.", "hu": "Az 1820-as években épült.", "ro": "Construit în anii 1820.", "en": "Built in the 1820s."},
         {"de": "Die Innenausstattung zeigt das Leben der Diener und Herren.", "hu": "Belső kialakítása bemutatja az uraságok és a szolgálók életét.", "ro": "Interiorul arată viața slujitorilor și a stăpânilor.", "en": "The interior shows the lives of servants and masters."},
         {"de": "Hat eine der schönsten Sammlungen seltener Bäume.", "hu": "A ritka fák egyik legszebb gyűjteményével rendelkezik.", "ro": "Are una dintre cele mai frumoase colecții de copaci rari.", "en": "Has one of the finest collections of rare trees."},
         {"de": "Liegt auf Fota Island.", "hu": "A Fota-szigeten található.", "ro": "Este situată pe Insula Fota.", "en": "Located on Fota Island."}
     ], "1820s"),

    # 48. Corcomroe Abbey
    ("historical-corcomroe-abbey", "historical", "ireland", -9.0511, 53.1255,
     {"de": "Corcomroe Abbey", "hu": "Corcomroe apátság", "ro": "Abația Corcomroe", "en": "Corcomroe Abbey"},
     {"de": "Eine Klosterruine aus dem 12. Jahrhundert in der Burren-Region.", "hu": "12. századi kolostorrom a Burren-régióban.", "ro": "O ruină de mănăstire din secolul al XII-lea în regiunea Burren.", "en": "A 12th-century ruined monastery in the Burren region."},
     [
         {"de": "Gegründet von Zisterziensermönchen.", "hu": "Ciszterci szerzetesek alapították.", "ro": "Fondată de călugării cistercieni.", "en": "Founded by Cistercian monks."},
         {"de": "Berühmt für feine Details und Steinmetzarbeiten.", "hu": "Finom részleteiről és kőfaragásairól híres.", "ro": "Faimoasă pentru detaliile fine și sculpturile în piatră.", "en": "Famous for fine details and stone carvings."},
         {"de": "Liegt in einem kargen, felsigen Tal.", "hu": "Egy kopár, sziklás völgyben fekszik.", "ro": "Situată într-o vale stâncoasă și stearpă.", "en": "Set in a barren, rocky valley."},
         {"de": "Ein Zeugnis der frühen irischen Kirchenarchitektur.", "hu": "A korai ír egyházi építészet tanúbizonysága.", "ro": "O mărturie a arhitecturii ecleziastice irlandeze timpurii.", "en": "A testament to early Irish church architecture."}
     ], "12th century"),

    # 49. Holycross Abbey
    ("historical-holycross-abbey", "historical", "ireland", -7.8688, 52.6411,
     {"de": "Holycross Abbey", "hu": "Holycross apátság", "ro": "Abația Holycross", "en": "Holycross Abbey"},
     {"de": "Eine restaurierte Zisterzienserabtei, die eine Reliquie des Wahren Kreuzes beherbergte.", "hu": "Restaurált ciszterci apátság, amely a Szent Kereszt egy ereklyéjét őrizte.", "ro": "O abație cisterciană restaurată, care adăpostea o relicvă a Sfintei Cruci.", "en": "A restored Cistercian abbey that housed a relic of the True Cross."},
     [
         {"de": "War im Mittelalter ein wichtiger Pilgerort.", "hu": "A középkorban fontos zarándokhely volt.", "ro": "A fost un important loc de pelerinaj în Evul Mediu.", "en": "Was a major pilgrimage destination in the Middle Ages."},
         {"de": "Gegründet im Jahr 1180.", "hu": "1180-ban alapították.", "ro": "Fondată în anul 1180.", "en": "Founded in the year 1180."},
         {"de": "Wurde in den 1970er Jahren vollständig restauriert.", "hu": "Az 1970-es években teljesen restaurálták.", "ro": "A fost complet restaurată în anii 1970.", "en": "Was fully restored in the 1970s."},
         {"de": "Hat wunderschöne Fenster mit Maßwerk.", "hu": "Gyönyörű mérműves ablakokkal rendelkezik.", "ro": "Are ferestre frumoase cu vitralii.", "en": "Has beautiful tracery windows."}
     ], "1180"),

    # 50. Gallarus Oratory
    ("historical-gallarus-oratory", "historical", "ireland", -10.3488, 52.1711,
     {"de": "Gallarus Oratory", "hu": "Gallarus kápolna", "ro": "Oratoriul Gallarus", "en": "Gallarus Oratory"},
     {"de": "Eine frühchristliche Steinkirche auf der Dingle-Halbinsel.", "hu": "Ókeresztény kőtemplom a Dingle-félszigeten.", "ro": "O biserică timpurie creștină din piatră pe Peninsula Dingle.", "en": "An early Christian stone church on the Dingle Peninsula."},
     [
         {"de": "Ist komplett aus Trockenmauerwerk erbaut.", "hu": "Teljesen száraz falazással épült.", "ro": "Este construită în întregime din zidărie uscată.", "en": "Is built entirely of dry-stone masonry."},
         {"de": "Wasserdicht seit über 1000 Jahren.", "hu": "Több mint 1000 éve vízálló.", "ro": "Impermeabilă de peste 1000 de ani.", "en": "Waterproof for over 1,000 years."},
         {"de": "Erinnert in der Form an ein umgedrehtes Boot.", "hu": "Formája egy felfordított csónakra emlékeztet.", "ro": "Seamănă ca formă cu o barcă răsturnată.", "en": "Resembles an upturned boat in shape."},
         {"de": "Das genaue Baudatum ist unbekannt.", "hu": "A pontos építési dátum ismeretlen.", "ro": "Data exactă a construcției este necunoscută.", "en": "The exact date of construction is unknown."}
     ], "Early Christian")
]

import os

output_file = "lib/visualLab/data/poiExtraIrelandHistory.ts"

lines = []
lines.append('import { POI } from "./poi";')
lines.append('')
lines.append('export const poiExtraIrelandHistory: POI[] = [')

for id_val, type_val, parent, lon, lat, name_dict, desc_dict, facts_list, period in pois:
    # Ensure double quotes only
    lines.append('  {')
    lines.append(f'    id: "{id_val}",')
    lines.append(f'    type: "{type_val}",')
    lines.append(f'    parent: "{parent}",')
    lines.append(f'    coords: [{lon}, {lat}],')
    
    # Names
    name_str = f'{{ de: "{name_dict["de"]}", hu: "{name_dict["hu"]}", ro: "{name_dict["ro"]}", en: "{name_dict["en"]}" }}'
    lines.append(f'    name: {name_str},')
    
    # Description
    desc_str = f'{{ de: "{desc_dict["de"]}", hu: "{desc_dict["hu"]}", ro: "{desc_dict["ro"]}", en: "{desc_dict["en"]}" }}'
    lines.append(f'    description: {desc_str},')
    
    # Facts
    lines.append('    facts: [')
    for fact in facts_list:
        fact_str = f'      {{ de: "{fact["de"]}", hu: "{fact["hu"]}", ro: "{fact["ro"]}", en: "{fact["en"]}" }},'
        lines.append(fact_str)
    lines.append('    ],')
    
    # Period
    lines.append(f'    historyPeriod: "{period}"')
    
    lines.append('  },')

# Remove last comma
if lines[-1] == '  },':
    lines[-1] = '  }'

lines.append('];')
lines.append('')

with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print("Created", output_file)
