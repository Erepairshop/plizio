import json

# Data for all 30 POIs in HistoryV2
history_data = [
    {
        "id": "battle-of-st-georges-caye-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.055, 17.561],
        "name": { "de": "Schlacht von St. George’s Caye", "hu": "St. George’s Caye-i csata", "ro": "Bătălia de la St. George's Caye", "en": "Battle of St. George's Caye" },
        "description": { "de": "Ort der entscheidenden Seeschlacht von 1798 zwischen britischen Siedlern und Spanien, die die britische Kontrolle über das Gebiet sicherte.", "hu": "Az 1798-as döntő tengeri csata helyszíne a brit telepesek és Spanyolország között, amely biztosította a brit fennhatóságot a területen.", "ro": "Locul bătăliei navale decisive din 1798 dintre coloniștii britanici și Spania, care a asigurat controlul britanic asupra zonei.", "en": "The site of the decisive 1798 naval battle between British settlers and Spain, which secured British control over the area." },
        "facts": { "de": ["Fand im September 1798 statt.", "Nationalfeiertag am 10. September.", "Sicherte die Zukunft von Britisch-Honduras.", "Ein Wendepunkt in der Geschichte von Belize."], "hu": ["1798 szeptemberében zajlott.", "Nemzeti ünnep szeptember 10-én.", "Biztosította Brit Honduras jövőjét.", "Fordulópont Belize történelmében."], "ro": ["A avut loc în septembrie 1798.", "Sărbătoare națională pe 10 septembrie.", "A asigurat viitorul Hondurasului Britanic.", "Un punct de cotitură în istoria Belize."], "en": ["Took place in September 1798.", "A national holiday is celebrated on September 10th.", "Secured the future of British Honduras.", "A turning point in Belizean history."] },
        "adv_de": "Die Schlacht von St. George’s Caye im September 1798 markiert einen der bedeutendsten Wendepunkte in der Geschichte von Belize. Während dieser entscheidenden Auseinandersetzung gelang es einer kleinen Gruppe von britischen Siedlern, bekannt als „Baymen“, gemeinsam mit ihren Sklaven, eine weitaus größere spanische Invasionsflotte aus Mexiko zurückzuschlagen. Dieser Sieg verhinderte die spanische Vorherrschaft und legte den Grundstein für die spätere Entwicklung des Gebiets zu einer britischen Kolonie. Heute wird der 10. September als wichtiger Nationalfeiertag begangen, der den Widerstandsgeist und die Unabhängigkeit der Bevölkerung symbolisiert. Die Caye selbst ist heute ein friedlicher Ort, doch ihre historische Bedeutung als Geburtsort des modernen Belize bleibt unvergessen und ist tief im nationalen Bewusstsein verankert.",
        "facts_de": [
            "Die entscheidende Schlacht fand am 10. September 1798 statt.",
            "Die spanische Flotte umfasste 32 Schiffe und ca. 2.000 Soldaten.",
            "Die Verteidiger nutzten bewaffnete Flöße und die HMS Merlin.",
            "Auf britischer Seite gab es während des Gefechts keine Todesopfer.",
            "Die Schlacht markierte das Ende der spanischen Ansprüche auf das Land.",
            "St. George's Caye war zuvor die erste Hauptstadt der Siedler.",
            "Die Insel liegt etwa 13 Kilometer nordöstlich von Belize City.",
            "Der Sieg wird jedes Jahr landesweit mit großen Festen gefeiert."
        ]
    },
    {
        "id": "santa-rita-corozal-history-v2",
        "type": "historical",
        "parent": "BZ-CZL",
        "coords": [-88.4, 18.39],
        "name": { "de": "Maya-Stätte Santa Rita", "hu": "Santa Rita maja romok", "ro": "Situl arheologic Santa Rita", "en": "Santa Rita Archaeological Site" },
        "description": { "de": "Eine antike Maya-Stätte in der Nähe von Corozal Town, die ein wichtiges Handelszentrum war.", "hu": "Ősi maja lelőhely Corozal Town közelében, amely fontos kereskedelmi központ volt.", "ro": "Un sit mayaș antic lângă Corozal Town, care a fost un important centru comercial.", "en": "An ancient Maya site near Corozal Town that was an important trading center." },
        "facts": { "de": ["Früheste Siedlung um 1200 v. Chr.", "Kontrollierte den Handel mit Jade und Obsidian.", "War bei Ankunft der Spanier noch bewohnt.", "Historischer Name war Chetumal."], "hu": ["A legkorábbi település i.e. 1200 körül.", "Ellenőrizte a jáde és obszidián kereskedelmét.", "A spanyolok érkezésekor még lakott volt.", "Történelmi neve Chetumal volt."], "ro": ["Cea mai veche așezare în jurul anului 1200 î.Hr.", "Controla comerțul cu jad und obsidian.", "Era încă locuit la sosirea spaniolilor.", "Numele istoric a fost Chetumal."], "en": ["Earliest settlement around 1200 BC.", "Controlled trade in jade and obsidian.", "Was still occupied upon Spanish arrival.", "Historic name was Chetumal."] },
        "adv_de": "Santa Rita liegt am Stadtrand von Corozal Town und bietet wertvolle Einblicke in die späte postklassische Periode der Maya-Zivilisation. Einst war es das Zentrum der mächtigen Provinz Chetumal und ein entscheidender Knotenpunkt für den Handel mit wertvollen Gütern wie Kakao, Salz und Jade. Die Stätte ist auch für ihre historische Rolle bei der Begegnung zwischen der Alten und Neuen Welt bekannt: Es wird angenommen, dass hier die Hochzeit zwischen dem spanischen Seefahrer Gonzalo Guerrero und der Maya-Prinzessin Zazil Há stattfand, woraus die ersten Mestizen hervorgingen. Trotz der modernen Überbauung bleibt Santa Rita ein bedeutendes archäologisches Denkmal.",
        "facts_de": [
            "Die Besiedlung begann bereits um 2000 v. Chr.",
            "In der Postklassik war es eine blühende Hauptstadt namens Chactemal.",
            "Gonzalo Guerrero lebte hier nach seinem Schiffbruch im 16. Jahrhundert.",
            "In Gräbern wurden prachtvolle Jadeschmuckstücke und Gold gefunden.",
            "Die Wandmalereien zeigen Gottheiten im Mixteca-Puebla-Stil.",
            "Die Stätte kontrollierte den strategischen Seehandel an der Küste.",
            "Sie war eine der wenigen Maya-Städte, die bei der Eroberung noch bewohnt waren.",
            "Von der Hauptstruktur hat man einen weiten Blick über die Corozal Bay."
        ]
    },
    {
        "id": "el-pilar-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.16, 17.17],
        "name": { "de": "El Pilar Ruinen", "hu": "El Pilar romok", "ro": "Ruinele El Pilar", "en": "El Pilar Ruins" },
        "description": { "de": "Eine große Maya-Stätte an der Grenze zu Guatemala, bekannt für ihre Garten-Städtebauweise.", "hu": "Nagy maja lelőhely a guatemalai határon, kertvárosi jellegű várostervezéséről ismert.", "ro": "Un mare sit mayaș la granița cu Guatemala, cunoscut pentru urbanismul său de tip oraș-grădină.", "en": "A large Maya site on the border with Guatemala, known for its garden-city urbanism." },
        "facts": { "de": ["Bedeutet 'Wasserbecken'.", "Über 25 Plätze und hunderte von Bauten.", "Fokus auf nachhaltige Landwirtschaft.", "Wird gemeinsam von Belize und Guatemala verwaltet."], "hu": ["Jelentése 'vízgyűjtő medence'.", "Több mint 25 tér és több száz épület.", "A fenntartható mezőgazdaságra összpontosít.", "Belize és Guatemala közösen kezeli."], "ro": ["Înseamnă 'bazin de apă'.", "Peste 25 de piețe și sute de structuri.", "Accent pe agricultura durabilă.", "Gestionat în comun de Belize și Guatemala."], "en": ["Means 'watering basin'.", "Over 25 plazas and hundreds of structures.", "Focus on sustainable agriculture.", "Co-managed by Belize and Guatemala."] },
        "adv_de": "El Pilar ist eine außergewöhnliche archäologische Reserve, die sich über die Grenze von Belize und Guatemala erstreckt. Sie zeichnet sich durch das Konzept der „Archäologie unter dem Blätterdach“ aus, bei dem die meisten Gebäude zum Schutz vor Erosion im Dschungel belassen wurden. Der Fokus liegt hier nicht nur auf den beeindruckenden Strukturen, sondern auch auf den antiken Waldgärten, die zeigten, wie die Maya ihre Umwelt nachhaltig nutzten. Mit über 25 identifizierten Plätzen war El Pilar einst eine bedeutende Metropole der Klassik. Die Reserve dient heute als Modell für binationale Zusammenarbeit im Naturschutz.",
        "facts_de": [
            "Die archäologische Reserve umfasst etwa 2.000 Hektar Land.",
            "Bisher wurden über 15 große Tempelpyramiden lokalisiert.",
            "Die Stadt war von ca. 800 v. Chr. bis 1000 n. Chr. besiedelt.",
            "El Pilar war etwa dreimal so groß wie das nahegelegene Xunantunich.",
            "Die Stätte verfügt über ein komplexes System von Dämmen (Sacbeob).",
            "Es ist das größte archäologische Zentrum im Belize-Flusstal.",
            "Die binationale Verwaltung wurde durch ein Abkommen 1998 gefestigt.",
            "Wanderwege bieten exzellente Möglichkeiten zur Beobachtung von Wildtieren."
        ]
    },
    {
        "id": "poustinia-land-art-park-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.9, 17.4],
        "name": { "de": "Poustinia Land Art Park", "hu": "Poustinia Land Art Park", "ro": "Parcul de artă Poustinia", "en": "Poustinia Land Art Park" },
        "description": { "de": "Ein Skulpturenpark, der moderne Kunst mit der Geschichte und Natur von Belize verbindet.", "hu": "Szoborpark, amely a modern művészetet ötvözi Belize történelmével és természetével.", "ro": "Un parc de sculptură care combină arta modernă cu istoria și natura din Belize.", "en": "A sculpture park that combines modern art with the history and nature of Belize." },
        "facts": { "de": ["Gegründet von der Familie Pinks.", "Über 60 Hektar Land.", "Zeitgenössische Skulpturen im Dschungel.", "Fokus auf die Vergänglichkeit von Kunst."], "hu": ["A Pinks család alapította.", "Több mint 60 hektár terület.", "Kortárs szobrok a dzsungelben.", "A művészet múlandóságára összpontosít."], "ro": ["Fondat de familia Pinks.", "Peste 60 de hectare de teren.", "Sculpturi contemporane în junglă.", "Accent pe efemeritatea artei."], "en": ["Founded by the Pinks family.", "Over 60 acres of land.", "Contemporary sculptures in the jungle.", "Focus on the ephemerality of art."] },
        "adv_de": "Der Poustinia Land Art Park ist ein außergewöhnliches Projekt im Westen von Belize, das die Grenzen zwischen Kunst und Natur verschwimmen lässt. Auf einem weitläufigen Gelände von über 60 Hektar finden sich Skulpturen und Installationen internationaler Künstler. Das Konzept des Parks basiert auf der Idee der „Poustinia“ – einem Ort der Stille und Kontemplation. Viele der Kunstwerke sind so konzipiert, dass sie im Laufe der Zeit durch die Witterung und das Wachstum des Dschungels verändert werden, was die Vergänglichkeit allen Seins unterstreicht. Ein Spaziergang durch den Park ist eine meditative Erfahrung, bei der man Kunstwerke entdeckt, die harmonisch in das Unterholz integriert sind.",
        "facts_de": [
            "Der Park wurde offiziell im Jahr 1998 für Besucher eröffnet.",
            "Der Name 'Poustinia' stammt aus dem Russischen und bedeutet 'Wüste'.",
            "Es befinden sich mehr als 30 dauerhafte Installationen auf dem Gelände.",
            "Künstler aus über 10 verschiedenen Ländern haben Werke beigesteuert.",
            "Das Gelände umfasst primären und sekundären tropischen Regenwald.",
            "Der Park ist nach Terminvereinbarung für die Öffentlichkeit zugänglich.",
            "Die Renaturierung hat zur Rückkehr vieler seltener Tierarten geführt.",
            "Die Kunstwerke bestehen oft aus natürlichen Materialien wie Stein und Holz."
        ]
    },
    {
        "id": "marco-gonzalez-site-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-87.98, 17.85],
        "name": { "de": "Marco Gonzalez Maya-Stätte", "hu": "Marco Gonzalez maja lelőhely", "ro": "Situl mayaș Marco Gonzalez", "en": "Marco Gonzalez Maya Site" },
        "description": { "de": "Eine Maya-Handelsstation an der Südspitze von Ambergris Caye.", "hu": "Maja kereskedelmi állomás az Ambergris Caye déli csücskén.", "ro": "Un post comercial mayaș la capătul sudic al Ambergris Caye.", "en": "A Maya trading outpost on the southern tip of Ambergris Caye." },
        "facts": { "de": ["Küstenhandelszentrum.", "Wurde durch einen Hurrikan teilweise freigelegt.", "Fokus auf Salzproduktion und -handel.", "Jetzt ein geschütztes Reservat."], "hu": ["Parti kereskedelmi központ.", "Egy hurrikán részben feltárta.", "A sótermelésre és -kereskedelemre összpontosított.", "Ma védett rezervátum."], "ro": ["Centru comercial de coastă.", "Parțial expus de un uragan.", "Concentrat pe producția și comerțul cu sare.", "Acum o rezervație protejată."], "en": ["Coastal trading center.", "Partially exposed by a hurricane.", "Focused on salt production and trade.", "Now a protected reserve."] },
        "adv_de": "Marco Gonzalez ist eine faszinierende Maya-Stätte an der Südspitze von Ambergris Caye, die einen seltenen Einblick in das maritime Leben bietet. Im Gegensatz zu den Zentren im Landesinneren war dies ein geschäftiger Handelsposten, der auf künstlichen Plattformen aus Muscheln errichtet wurde. Die Bewohner spezialisierten sich auf die Salzproduktion und den Export von Meeresfrüchten, die sie gegen kostbare Güter aus dem Hochland eintauschten. Die Stätte war über 1.200 Jahre lang besiedelt, sogar noch während des Zusammenbruchs der Maya-Zentren im Landesinneren. Besucher können heute über Holzstege durch die Mangroven wandern, um die Überreste der fast 50 Strukturen zu erkunden.",
        "facts_de": [
            "Die Stätte wurde erst 1984 offiziell archäologisch erfasst.",
            "Sie umfasst etwa 49 identifizierte Strukturen und Plattformen.",
            "Die Besiedlung dauerte von ca. 100 v. Chr. bis 1300 n. Chr.",
            "Das Fundament besteht größtenteils aus tonnenweise alten Muschelschalen.",
            "Marco Gonzalez war ein Zentrum für den Fernhandel an der Küste.",
            "Die Stätte ist nur über einen Steg durch Mangroven erreichbar.",
            "Es wurden Artefakte aus dem gesamten Maya-Reich gefunden.",
            "Sie ist die einzige Maya-Stätte auf Ambergris Caye für die Öffentlichkeit."
        ]
    },
    {
        "id": "old-belize-city-prison-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.19, 17.495],
        "name": { "de": "Altes Gefängnis von Belize City", "hu": "Régi Belize City-i börtön", "ro": "Vechea închisoare din Belize City", "en": "Old Belize City Prison" },
        "description": { "de": "Ein historisches Gefängnis aus der Kolonialzeit, das heute das Museum von Belize beherbergt.", "hu": "Történelmi gyarmati kori börtön, amely ma a Belize Múzeumnak ad otthont.", "ro": "O închisoare istorică din epoca colonială, care acum găzduiește Muzeul din Belize.", "en": "A historic colonial-era prison that now houses the Museum of Belize." },
        "facts": { "de": ["Erbaut 1857.", "Diente bis 1993 als Gefängnis.", "Wurde in ein Nationalmuseum umgewandelt.", "Zeigt die Geschichte und Kultur von Belize."], "hu": ["1857-ben épült.", "1993-ig börtönként szolgált.", "Nemzeti múzeummá alakították át.", "Belize történelmét és kultúráját mutatja be."], "ro": ["Construită în 1857.", "A servit ca închisoare până în 1993.", "Transformata într-un muzeu național.", "Prezintă istoria și cultura din Belize."], "en": ["Built in 1857.", "Served as a prison until 1993.", "Was converted into a national museum.", "Showcases the history and culture of Belize."] },
        "adv_de": "Das Museum von Belize befindet sich in einem markanten Backsteingebäude, das ursprünglich im Jahr 1857 als „Her Majesty's Prison“ erbaut wurde. Es ist ein bedeutendes Denkmal der Kolonialgeschichte und wurde mit Ziegeln errichtet, die als Ballast auf englischen Schiffen ins Land kamen. Nach über 130 Jahren Betrieb wurde das Gefängnis 1993 geschlossen und 2002 als Nationalmuseum neu eröffnet. Heute bewahrt das Gebäude seinen historischen Charakter, wobei einige der ursprünglichen Zellen erhalten geblieben sind. Die Ausstellungen reichen von Maya-Artefakten über die Geschichte der Mahagoni-Gewinnung bis hin zur Unabhängigkeitsbewegung.",
        "facts_de": [
            "Das Gebäude wurde 1857 im viktorianischen Stil fertiggestellt.",
            "Es diente exakt 136 Jahre lang als Hauptgefängnis des Landes.",
            "Die Ziegel stammen als Schiffsballast direkt aus England.",
            "Einige Originalzellen sind noch heute für Besucher zugänglich.",
            "Das Museum wurde am 5. Februar 2002 offiziell eingeweiht.",
            "Es beherbergt eine bedeutende Sammlung von antiker Maya-Jade.",
            "Das Gebäude befindet sich im historischen Viertel Fort George.",
            "Ausstellungen umfassen auch die Naturgeschichte und die Sklaverei."
        ]
    },
    {
        "id": "serpon-sugar-mill-history-v2",
        "type": "historical",
        "parent": "BZ-SC",
        "coords": [-88.35, 16.9],
        "name": { "de": "Serpon Zuckerfabrik", "hu": "Serpon cukorgyár", "ro": "Fabrica de zahăr Serpon", "en": "Serpon Sugar Mill" },
        "description": { "de": "Die Ruinen der ersten dampfbetriebenen Zuckerfabrik in Belize aus dem 19. Jahrhundert.", "hu": "Belize első, 19. századi gőzzel hajtott cukorgyárának romjai.", "ro": "Ruinele primei fabrici de zahăr cu aburi din Belize, din secolul al XIX-lea.", "en": "The ruins of the first steam-powered sugar mill in Belize, dating to the 19th century." },
        "facts": { "de": ["Gegründet 1862.", "Ein Pionier der industriellen Revolution in Belize.", "Heute ein archäologisches Reservat.", "Zeigt die Maschinerie aus dieser Zeit."], "hu": ["1862-ben alapították.", "Az ipari forradalom úttörője Belize-ben.", "Ma régészeti rezervátum.", "Bemutatja az akkori gépeket."], "ro": ["Fondată în 1862.", "Un pionier al revoluției industriale din Belize.", "Acum o rezervație arheologică.", "Prezintă mașinăriile din acea perioadă."], "en": ["Established in 1862.", "A pioneer of the industrial revolution in Belize.", "Now an archaeological reserve.", "Displays the machinery from the era."] },
        "adv_de": "Die Serpon Zuckerfabrik ist ein Zeugnis des industriellen Aufbruchs im 19. Jahrhundert in Britisch-Honduras. Im Jahr 1862 gegründet, war sie die erste Fabrik des Landes, die Dampfmaschinen zur Verarbeitung von Zuckerrohr einsetzte. Die Ruinen liegen heute mitten im Dschungel und bilden ein einzigartiges archäologisches Reservat. Besucher können die Überreste der gusseisernen Kessel und Dampfmaschinen bewundern, die zum Teil noch gut erhalten sind. Die Fabrik half dabei, Zucker zu einem der wichtigsten Exportgüter der Kolonie zu machen, bevor der Betrieb Anfang des 20. Jahrhunderts eingestellt wurde.",
        "facts_de": [
            "Die Fabrik wurde von William Bowman im Jahr 1862 gegründet.",
            "Serpon war das erste dampfbetriebene Industriezentrum in Belize.",
            "Auf dem Höhepunkt wurden täglich über 500 kg Zucker produziert.",
            "Die Anlage wurde 2009 zum offiziellen Reservat erklärt.",
            "Die meisten Maschinen wurden in Schottland und den USA gefertigt.",
            "Die Fabrik liegt etwa 1,5 Kilometer vom Southern Highway entfernt.",
            "Der Ort war entscheidend für die Besiedlung des Sittee River Gebiets.",
            "Vom dichten Wald überwuchert, bietet sie ein tolles Ambiente."
        ]
    },
    {
        "id": "yarborough-cemetery-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.19, 17.48],
        "name": { "de": "Yarborough-Friedhof", "hu": "Yarborough temető", "ro": "Cimitirul Yarborough", "en": "Yarborough Cemetery" },
        "description": { "de": "Der älteste europäische Friedhof in Belize, der bis ins 18. Jahrhundert zurückreicht.", "hu": "Belize legrégebbi európai temetője, amely a 18. századig nyúlik vissza.", "ro": "Cel mai vechi cimitir european din Belize, datând din secolul al XVIII-lea.", "en": "The oldest European cemetery in Belize, dating back to the 18th century." },
        "facts": { "de": ["Gräber von frühen Siedlern.", "Einige Gräber wurden aus England verschifft.", "Historische Grabsteine.", "Befindet sich in Belize City."], "hu": ["Korai telepesek sírjai.", "Néhány sírkövet Angliából szállítottak.", "Történelmi sírkövek.", "Belize Cityben található."], "ro": ["Mormintele primilor coloniști.", "Unele morminte au fost expediate din Anglia.", "Pietre funerare istorice.", "Situat în Belize City."], "en": ["Graves of early settlers.", "Some graves were shipped from England.", "Historic tombstones.", "Located in Belize City."] },
        "adv_de": "Der Yarborough-Friedhof ist der älteste europäische Bestattungsort des Landes und ein wichtiges Archiv der frühen Kolonialzeit. Er wurde im späten 18. Jahrhundert angelegt und nach James Yarborough benannt, einem einflussreichen Landbesitzer. Der Friedhof beherbergt die sterblichen Überreste früher britischer Siedler, Soldaten und Kolonialbeamten. Besonders faszinierend sind die teilweise verwitterten Grabsteine, von denen viele per Schiff direkt aus England importiert wurden. Hier liegen auch Teilnehmer der legendären Schlacht von St. George’s Caye begraben. Ein Besuch bietet eine ruhige Atmosphäre für eine Zeitreise in die Gründungsjahre der Siedlung.",
        "facts_de": [
            "Der Friedhof wurde offiziell im Jahr 1781 eröffnet.",
            "Er ist nach James Yarborough benannt, der das Land stiftete.",
            "Hier ruhen viele der frühen 'Baymen' (britische Siedler).",
            "Einige der Ziegelsteine für die Grüfte wurden als Schiffsballast gebracht.",
            "Das Gelände wurde im Jahr 2009 umfassend renoviert.",
            "Er war der erste offizielle Friedhof der Siedlung in Belize.",
            "Der Ort liegt direkt am Meer im Süden von Belize City.",
            "Er ist ein geschütztes Denkmal und Teil des Kulturerbe-Pfads."
        ]
    },
    {
        "id": "altun-ha-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.35, 17.75],
        "name": { "de": "Maya-Stätte Altun Ha", "hu": "Altun Ha maja romok", "ro": "Situl arheologic Altun Ha", "en": "Altun Ha Archaeological Site" },
        "description": { "de": "Eine der bekanntesten Maya-Stätten von Belize, nur eine kurze Fahrt von Belize City entfernt.", "hu": "Belize egyik legismertebb maja lelőhelye, rövid autóútra Belize Citytől.", "ro": "Unul dintre cele mai cunoscute situri mayașe din Belize, la scurtă distanță de Belize City.", "en": "One of the best-known Maya sites in Belize, just a short drive from Belize City." },
        "facts": { "de": ["Bedeutet 'Felsen-Teich'.", "Berühmt für das Jade-Haupt des Sonnengottes.", "Wichtiges Zeremonialzentrum.", "Gut restaurierte Pyramiden."], "hu": ["Jelentése 'sziklavizes tó'.", "A napisten jáde fejéről híres.", "Fontos ceremoniális központ.", "Jól restaurált piramisok."], "ro": ["Înseamnă 'iaz de piatră'.", "Celebru pentru capul de jad al zeului soare.", "Important centru ceremonial.", "Piramide bine restaurate."], "en": ["Means 'Rock Stone Pond'.", "Famous for the Jade Head of the Sun God.", "Important ceremonial center.", "Well-restored pyramids."] },
        "adv_de": "Altun Ha ist eine der am besten zugänglichen Maya-Stätten in Belize, was vor allem an der Nähe zu Belize City liegt. Die Stätte diente während der Klassik als bedeutendes Handelszentrum und war eng mit der Karibikküste verbunden. Weltweite Berühmtheit erlangte Altun Ha durch den Fund des „Jade-Hauptes“ – einer massiven Schnitzerei des Sonnengottes Kinich Ahau, die als das größte jemals in der Maya-Welt entdeckte Jade-Objekt gilt. Die Anlage besteht aus zwei Hauptplätzen, die von majestätischen Tempeln umgeben sind. Der Tempel der gemauerten Altäre ist das beeindruckendste Gebäude der Anlage.",
        "facts_de": [
            "Die Stätte wurde in den 1960er Jahren umfassend ausgegraben.",
            "Das Jade-Haupt wiegt 4,42 kg und ist fast 15 cm hoch.",
            "Altun Ha war zwischen 200 v. Chr. und 900 n. Chr. besiedelt.",
            "Die höchste Struktur, der Tempel der Altäre, ist 16 m hoch.",
            "Das Bild der Hauptpyramide ist auf dem Logo von Belikin Bier.",
            "Die Stadt hatte zur Blütezeit etwa 10.000 Einwohner.",
            "Altun Ha liegt etwa 50 Kilometer nördlich von Belize City.",
            "In den Gräbern wurden über 800 Jade-Artefakte gefunden."
        ]
    },
    {
        "id": "lubaantun-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-88.9, 16.27],
        "name": { "de": "Maya-Stätte Lubaantun", "hu": "Lubaantun maja romok", "ro": "Situl arheologic Lubaantun", "en": "Lubaantun Archaeological Site" },
        "description": { "de": "Eine einzigartige Maya-Stätte im Süden von Belize, bekannt für ihre präzise Steinbauweise ohne Mörtel.", "hu": "Egyedülálló maja lelőhely Belize déli részén, a habarcs nélküli precíz kőépítészetéről ismert.", "ro": "Un sit mayaș unic în sudul Belize, cunoscut pentru construcția sa precisă din piatră fără mortar.", "en": "A unique Maya site in southern Belize, known for its precision stone construction without mortar." },
        "facts": { "de": ["Bedeutet 'Ort der gefallenen Steine'.", "Bauweise ohne Mörtel.", "Berühmt für die angebliche Entdeckung des Kristallschädels.", "In der Nähe des Dorfes San Pedro Columbia."], "hu": ["Jelentése 'a hulló kövek helye'.", "Habarcs nélküli építésmód.", "A kristálykoponya állítólagos felfedezéséről híres.", "San Pedro Columbia falu közelében található."], "ro": ["Înseamnă 'Locul pietrelor căzute'.", "Construcție fără mortar.", "Celebru pentru presupusa descoperire a craniului de cristal.", "Situat lângă satul San Pedro Columbia."], "en": ["Means 'Place of Fallen Stones'.", "Built without the use of mortar.", "Famous for the alleged discovery of the Crystal Skull.", "Located near San Pedro Columbia village."] },
        "adv_de": "Lubaantun, was übersetzt „Ort der gefallenen Steine“ bedeutet, ist die größte Maya-Stätte im Süden von Belize und besticht durch ihre außergewöhnliche Architektur. Im Gegensatz zu den meisten anderen Maya-Zentren wurden die Gebäude hier ohne Mörtel errichtet; stattdessen wurden die Steine so präzise behauen, dass sie perfekt ineinanderpassen. Die Stätte liegt auf einem Bergrücken mit herrlichem Blick auf das umliegende Tal. Lubaantun erlangte zweifelhafte Berühmtheit durch die angebliche Entdeckung des „Mitchell-Hedges-Kristallschädels“ in den 1920er Jahren. Unabhängig von diesem Mythos bleibt die Stätte ein faszinierendes Beispiel für die technologische Meisterschaft der späten Klassik.",
        "facts_de": [
            "Die Stadt blühte in der späten Klassik zwischen 700 und 900 n. Chr.",
            "Sie diente als regionales Zentrum für die Landwirtschaft und den Handel.",
            "Die Gebäude weisen charakteristische abgerundete Ecken auf.",
            "Lubaantun besteht aus elf großen Strukturen und fünf Plätzen.",
            "Hier wurden zahlreiche Tonfiguren und Musikinstrumente gefunden.",
            "Der Kristallschädel-Mythos wird von vielen Experten angezweifelt.",
            "Die Stätte liegt etwa 30 km nordwestlich von Punta Gorda.",
            "Sie wurde strategisch auf einem künstlich abgeflachten Hügel erbaut."
        ]
    },
    {
        "id": "nim-li-punit-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-88.82, 16.32],
        "name": { "de": "Maya-Stätte Nim Li Punit", "hu": "Nim Li Punit maja romok", "ro": "Situl arheologic Nim Li Punit", "en": "Nim Li Punit Archaeological Site" },
        "description": { "de": "Eine Maya-Stätte im Toledo District, berühmt für ihre vielen gut erhaltenen Stelen.", "hu": "Maja lelőhely a Toledo kerületben, híres a sok jól megőrzött sztéléjéről.", "ro": "Un sit mayaș în districtul Toledo, faimos pentru numeroasele sale stele bine conservate.", "en": "A Maya site in the Toledo District, famous for its many well-preserved stelae." },
        "facts": { "de": ["Bedeutet 'Großer Hut'.", "Bezieht sich auf eine Figur auf einer Stele.", "Mehr als 20 Stelen wurden hier gefunden.", "Wichtiger Ort für religiöse Rituale."], "hu": ["Jelentése 'Nagy Kalap'.", "Egy sztélén látható alakra utal.", "Több mint 20 sztélét találtak itt.", "Fontos vallási szertartási hely."], "ro": ["Înseamnă 'Pălărie Mare'.", "Se referă la o figură de pe o stelă.", "Aici au fost găsite peste 20 de stele.", "Loc important pentru ritualuri religioase."], "en": ["Means 'Big Hat'.", "Refers to a figure on one of the stelae.", "More than 20 stelae have been found here.", "Important site for religious rituals."] },
        "adv_de": "Nim Li Punit ist eine mittelgroße Maya-Stätte im Toledo-Distrikt, die besonders für ihre außergewöhnliche Sammlung von Stelen bekannt ist. Der Name bedeutet in der Maya-Sprache Kekchi „Großer Hut“ und bezieht sich auf den aufwendigen Kopfschmuck einer Figur, die auf einem der Monumente abgebildet ist. Die Stätte beherbergt über 20 Stelen, von denen viele detaillierte Hieroglyphentexte und Darstellungen von Ritualen zeigen. Gelegen auf einem Hügelkamm, bietet Nim Li Punit einen strategischen Blick über die Küstenebene bis hin zum Karibischen Meer. Die architektonische Anlage umfasst drei Hauptplätze und ein Observatorium, was auf die astronomische Bedeutung des Ortes hinweist.",
        "facts_de": [
            "Die Blütezeit der Stadt lag zwischen 700 und 900 n. Chr.",
            "Eine der hier gefundenen Stelen ist mit fast 10 Metern die längste in Belize.",
            "Hier wurde eines der größten Jade-Pektoralien (Brustschmuck) entdeckt.",
            "Die Stadt war ein Zentrum für politische Zeremonien im Süden.",
            "Es gibt ein Ballspielplatz und mehrere Wohnanlagen für die Elite.",
            "Nim Li Punit liegt direkt am Southern Highway bei Indian Creek.",
            "Die Texte auf den Stelen berichten von Allianzen mit fernen Städten.",
            "Die Stätte ist ein hervorragendes Beispiel für eine regionale Residenzstadt."
        ]
    },
    {
        "id": "caracol-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.12, 16.76],
        "name": { "de": "Maya-Stätte Caracol", "hu": "Caracol maja romok", "ro": "Situl arheologic Caracol", "en": "Caracol Archaeological Site" },
        "description": { "de": "Die größte Maya-Stadt in Belize, tief im Dschungel der Chiquibul Forest Reserve.", "hu": "Belize legnagyobb maja városa, mélyen a Chiquibul erdőrezervátum dzsungelében.", "ro": "Cel mai mare oraș mayaș din Belize, adânc în jungla Rezervației Forestiere Chiquibul.", "en": "The largest Maya city in Belize, deep in the jungle of the Chiquibul Forest Reserve." },
        "facts": { "de": ["Die 'Caana'-Pyramide ist eines der höchsten Gebäude in Belize.", "War einst ein mächtiger Rivale von Tikal.", "Umfasst über 200 Quadratkilometer.", "Bedeutet 'Schnecke'."], "hu": ["A 'Caana' piramis Belize egyik legmagasabb épülete.", "Egykor Tikal hatalmas riválisa volt.", "Területe meghaladja a 200 négyzetkilométert.", "Jelentése 'csiga'."], "ro": ["Piramida 'Caana' este una dintre cele mai înalte clădiri din Belize.", "A fost odată un rival puternic al Tikalului.", "Acoperă peste 200 de kilometri pătrați.", "Înseamnă 'melc'."], "en": ["The 'Caana' pyramid is one of the tallest buildings in Belize.", "Was once a powerful rival to Tikal.", "Covers over 200 square kilometers.", "Means 'snail'."] },
        "adv_de": "Caracol ist die bedeutendste und flächenmäßig größte Maya-Metropole in Belize. Tief im Chiquibul-Regenwald gelegen, war diese einstige Supermacht ein ernsthafter Rivale für das berühmte Tikal in Guatemala. Das Herzstück der Stätte ist die majestätische „Caana“ (Himmelspalast), eine 43 Meter hohe Pyramide, die bis heute eines der höchsten von Menschenhand geschaffenen Bauwerke des Landes ist. Caracol beeindruckt nicht nur durch seine monumentalen Tempel, sondern auch durch ein gigantisches Netz von gepflasterten Straßen (Sacbeob) und riesige landwirtschaftliche Terrassen, die zur Versorgung der riesigen Bevölkerung dienten. Auf ihrem Höhepunkt lebten hier vermutlich über 140.000 Menschen, weit mehr als heute in der Hauptstadt Belmopan.",
        "facts_de": [
            "Caracol wurde 1937 von einem Holzfäller wiederentdeckt.",
            "Die Stadt besiegte Tikal im Jahr 562 n. Chr. in einem großen Krieg.",
            "Es gibt über 35.000 identifizierte Gebäude auf dem Stadtgebiet.",
            "Die Pyramide Caana beherbergt drei Tempel und vier Paläste.",
            "Das Straßennetz erstreckt sich über eine Gesamtlänge von fast 40 km.",
            "Caracol bedeutet auf Spanisch 'Schnecke', nach der gewundenen Zugangsstraße.",
            "Die Stadt verfügte über ein ausgeklügeltes System zur Regenwasserspeicherung.",
            "Die Fahrt zur Stätte führt durch unberührten Primärregenwald."
        ]
    },
    {
        "id": "xunantunich-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.14, 17.08],
        "name": { "de": "Maya-Stätte Xunantunich", "hu": "Xunantunich maja romok", "ro": "Situl arheologic Xunantunich", "en": "Xunantunich Archaeological Site" },
        "description": { "de": "Eine beeindruckende Maya-Stätte im Westen von Belize, erreichbar mit einer handbetriebenen Fähre.", "hu": "Lenyűgöző maja lelőhely Nyugat-Belize-ben, kézi hajtású komppal érhető el.", "ro": "Un sit mayaș impresionant în vestul Belize, accesibil cu un feribot acționat manual.", "en": "An impressive Maya site in western Belize, accessible via a hand-cranked ferry." },
        "facts": { "de": ["Bedeutet 'Stein-Frau'.", "Die Hauptpyramide 'El Castillo' bietet einen Blick bis nach Guatemala.", "Berühmt für ihre kunstvollen Friese.", "Gelegen am Mopan River."], "hu": ["Jelentése 'Kőasszony'.", "Az 'El Castillo' főpiramisról átlátni Guatemalába.", "Híres a művészi frízeiről.", "A Mopan-folyó mellett található."], "ro": ["Înseamnă 'Femeia de Piatră'.", "Piramida principală 'El Castillo' oferă o vedere până în Guatemala.", "Faimos pentru frizele sale elaborate.", "Situat pe râul Mopan."], "en": ["Means 'Stone Woman'.", "The main pyramid 'El Castillo' offers views into Guatemala.", "Famous for its elaborate friezes.", "Located by the Mopan River."] },
        "adv_de": "Xunantunich ist eine der ikonischsten Maya-Stätten von Belize und thront majestätisch auf einem Hügel über dem Mopan-Fluss. Das Highlight der Anlage ist die 40 Meter hohe Pyramide „El Castillo“, die für ihre außergewöhnlich gut erhaltenen Stuckfriese bekannt ist, die Götter und himmlische Symbole darstellen. Um zur Stätte zu gelangen, müssen Besucher eine charmante, handbetriebene Kurbelfähre über den Fluss nehmen. Der Name Xunantunich bedeutet „Steinerne Frau“ und geht auf eine lokale Legende zurück, nach der ein Geist in Form einer Frau regelmäßig bei der Ruine erscheint. Von der Spitze des El Castillo bietet sich ein atemberaubender 360-Grad-Panoramablick, der an klaren Tagen weit bis über die Grenze nach Guatemala reicht.",
        "facts_de": [
            "Die Stadt war ein wichtiges zeremonielles Zentrum in der Klassik.",
            "Die Friese an El Castillo zeigen das Sternbild der Venus und Regengötter.",
            "Xunantunich war die erste Stätte in Belize, die für Touristen geöffnet wurde.",
            "Die Besiedlung erreichte ihren Höhepunkt zwischen 600 und 900 n. Chr.",
            "Es gibt sechs große Plätze und mehr als 25 Tempel und Paläste.",
            "Die Kurbelfähre über den Mopan River ist seit Jahrzehnten in Betrieb.",
            "Die Stätte wurde durch ein schweres Erdbeben im 10. Jahrhundert beschädigt.",
            "Archäologen fanden hier Belege für die späte Maya-Elite-Kultur."
        ]
    },
    {
        "id": "cahal-pech-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.07, 17.15],
        "name": { "de": "Maya-Stätte Cahal Pech", "hu": "Cahal Pech maja romok", "ro": "Situl arheologic Cahal Pech", "en": "Cahal Pech Archaeological Site" },
        "description": { "de": "Eine Maya-Stätte auf einem Hügel über San Ignacio, bekannt für ihre intime Atmosphäre.", "hu": "Maja lelőhely egy dombtetőn San Ignacio felett, bensőséges hangulatáról ismert.", "ro": "Un sit mayaș pe un deal deasupra orașului San Ignacio, cunoscut pentru atmosfera sa intimă.", "en": "A Maya site on a hill overlooking San Ignacio, known for its intimate atmosphere." },
        "facts": { "de": ["Bedeutet 'Ort der Zecken'.", "Eine der ältesten Stätten im Belize River Valley.", "Wohnsitz einer königlichen Familie.", "Besteht aus 34 Strukturen."], "hu": ["Jelentése 'kullancsok helye'.", "A Belize-folyó völgyének egyik legrégebbi lelőhelye.", "Egy királyi család lakóhelye volt.", "34 építményből áll."], "ro": ["Înseamnă 'Locul căpușelor'.", "Unul dintre cele mai vechi situri din Valea Râului Belize.", "Reședința unei familii regale.", "Constă din 34 de structuri."], "en": ["Means 'Place of Ticks'.", "One of the oldest sites in the Belize River Valley.", "Home of a royal family.", "Consists of 34 structures."] },
        "adv_de": "Cahal Pech liegt malerisch auf einem hohen Hügel über der Stadt San Ignacio und ist bekannt für seine ruhige und fast mystische Atmosphäre. Da sie größtenteils im Schatten dichter Bäume liegt, bietet die Stätte ein angenehmes Erlebnis beim Erkunden der eng verwinkelten Plätze und Durchgänge. Cahal Pech war der Palastwohnsitz einer Maya-Elitefamilie und ist eines der ältesten Siedlungszentren im Belize-Flusstal. Der Name „Ort der Zecken“ stammt aus den 1950er Jahren, als das Gelände als Weideland genutzt wurde, doch heute ist es ein sorgfältig restaurierter archäologischer Park. Die Architektur ist durch ungewöhnlich viele Torbögen und miteinander verbundene Innenhöfe geprägt, was den privaten Charakter dieses königlichen Anwesens unterstreicht.",
        "facts_de": [
            "Die Besiedlung von Cahal Pech begann bereits um 1200 v. Chr.",
            "Die Anlage umfasst sieben Plätze und mehr als 30 Gebäude.",
            "Es gibt zwei Ballspielplätze und einen Altar für Zeremonien.",
            "Cahal Pech wurde erst in den späten 1980er Jahren für den Tourismus erschlossen.",
            "Die Stätte bietet einen exzellenten Blick auf das Macal-Tal.",
            "Die Architektur zeigt Einflüsse aus dem Petén-Stil Guatemalas.",
            "In den Palästen wurden Reste von Wandmalereien und Stuckaturen gefunden.",
            "Das Besucherzentrum beherbergt eine gute Sammlung lokaler Artefakte."
        ]
    },
    {
        "id": "cerros-history-v2",
        "type": "historical",
        "parent": "BZ-CZL",
        "coords": [-88.35, 18.35],
        "name": { "de": "Maya-Stätte Cerros", "hu": "Cerros maja romok", "ro": "Situl arheologic Cerros", "en": "Cerros Archaeological Site" },
        "description": { "de": "Die einzige Maya-Stätte in Belize, die direkt am Meer liegt, in der Corozal Bay.", "hu": "Belize egyetlen közvetlenül a tengerparton fekvő maja lelőhelye a Corozal-öbölben.", "ro": "Singurul sit mayaș din Belize situat direct pe malul mării, în Golful Corozal.", "en": "The only Maya site in Belize located directly on the coast, in Corozal Bay." },
        "facts": { "de": ["War ein wichtiges Küstenhandelszentrum.", "Berühmt für seine großen Masken aus Stuck.", "Erreichbar mit dem Boot von Corozal Town.", "Teilweise vom Meer überflutet."], "hu": ["Fontos tengerparti kereskedelmi központ volt.", "Híres a nagy stukko maszkjairól.", "Csónakkal érhető el Corozal Townból.", "Részben elárasztotta a tenger."], "ro": ["A fost un important centru comercial de coastă.", "Faimos pentru măștile sale mari de stuc.", "Accesibil cu barca din Corozal Town.", "Parțial inundat de mare."], "en": ["Was an important coastal trading center.", "Famous for its large stucco masks.", "Accessible by boat from Corozal Town.", "Partially submerged by the sea."] },
        "adv_de": "Cerros ist eine einzigartige archäologische Perle, da es sich um das einzige Maya-Zentrum in Belize handelt, das direkt am Karibischen Meer erbaut wurde. In der späten Präklassik war Cerros ein florierender Seehafen und ein wichtiges Bindeglied im Handelsnetz zwischen den Küstengebieten und dem Landesinneren. Besonders eindrucksvoll sind die monumentalen Stuckmasken an den Tempelfassaden, die Gottheiten wie die Morgensonne und den Abendstern darstellen. Aufgrund des steigenden Meeresspiegels liegen Teile der antiken Stadt heute unter Wasser, was der Stätte eine ganz besondere Aura verleiht. Eine kurze Bootsfahrt von Corozal Town bringt Besucher zu diesem abgelegenen Ort, wo man die Stille des Dschungels und die Meeresbrise gleichzeitig genießen kann.",
        "facts_de": [
            "Cerros war zwischen 400 v. Chr. und 250 n. Chr. ein bedeutendes Zentrum.",
            "Die Stadt wurde nach einem plötzlichen wirtschaftlichen Wandel verlassen.",
            "Die Hauptpyramide ragt etwa 22 Meter über den Meeresspiegel empor.",
            "Es wurden aufwendige Bewässerungskanäle rund um die Stadt entdeckt.",
            "Die Masken repräsentieren den rituellen Zyklus von Tag und Nacht.",
            "Man erreicht die Stätte am besten per Boot über die Corozal Bay.",
            "Es ist einer der am wenigsten überlaufenen archäologischen Orte in Belize.",
            "Archäologen fanden hier Belege für die früheste Königtums-Ideologie."
        ]
    },
    {
        "id": "lamanai-history-v2",
        "type": "historical",
        "parent": "BZ-OW",
        "coords": [-88.65, 17.76],
        "name": { "de": "Maya-Stätte Lamanai", "hu": "Lamanai maja romok", "ro": "Situl arheologic Lamanai", "en": "Lamanai Archaeological Site" },
        "description": { "de": "Eine weitläufige Maya-Stätte am Ufer der New River Lagoon, bekannt für ihre monumentalen Masken.", "hu": "Kiterjedt maja lelőhely a New River lagúna partján, monumentális maszkjairól ismert.", "ro": "Un sit mayaș extins pe malul lagunei New River, cunoscut pentru măștile sale monumentale.", "en": "An extensive Maya site on the banks of the New River Lagoon, known for its monumental masks." },
        "facts": { "de": ["Bedeutet 'untergetauchtes Krokodil'.", "Einer der am längsten besiedelten Orte der Maya-Welt.", "Berühmt für den Maskentempel.", "Erreichbar mit dem Boot über den New River."], "hu": ["Jelentése 'víz alatti krokodil'.", "A maja világ egyik leghosszabb ideig lakott helye.", "Híres a Maszkok templomáról.", "Csónakkal érhető el a New Riveren keresztül."], "ro": ["Înseamnă 'crocodil scufundat'.", "Unul dintre cele mai lungi locuri locuite din lumea mayașă.", "Faimos pentru Templul Măștilor.", "Accesibil cu barca pe râul New River."], "en": ["Means 'Submerged Crocodile'.", "One of the longest-occupied sites in the Maya world.", "Famous for the Mask Temple.", "Accessible via boat trip on the New River."] },
        "adv_de": "Lamanai gehört zu den spektakulärsten Maya-Stätten Mittelamerikas, was nicht zuletzt an der abenteuerlichen Anreise per Boot über den gewundenen New River liegt. Der Name Lamanai bedeutet in der Maya-Sprache „untergetauchtes Krokodil“, was sich in den zahlreichen Krokodil-Motiven der Architektur widerspiegelt. Die Stadt war über 3.000 Jahre lang kontinuierlich besiedelt, von der frühen Präklassik bis weit in die spanische Kolonialzeit hinein. Wahrzeichen der Anlage ist der berühmte Maskentempel, dessen Fassade von zwei riesigen, aus Stein gehauenen Gesichtern flankiert wird. Umgeben von dichtem Regenwald, in dem Brüllaffen ihr charakteristisches Echo verbreiten, bietet Lamanai ein unvergleichliches Natur- und Kulturerlebnis.",
        "facts_de": [
            "Die Besiedlung von Lamanai begann bereits um 1500 v. Chr.",
            "Der Hohe Tempel ist mit 33 Metern eine der höchsten Pyramiden Belizes.",
            "Lamanai blieb auch nach dem allgemeinen Maya-Kollaps bewohnt.",
            "Die Spanier errichteten hier im 16. Jahrhundert zwei Kirchen.",
            "Die Bootsfahrt zur Ruine bietet exzellente Tierbeobachtungen (Vögel, Krokodile).",
            "Der Jaguartempel ist für seine stilisierte Raubtier-Fassade bekannt.",
            "In der Lagune wurden zahlreiche antike Maya-Kanus gefunden.",
            "Die Stätte umfasst über 700 identifizierte Gebäude im Urwald."
        ]
    },
    {
        "id": "actun-tunichil-muknal-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.9, 17.1],
        "name": { "de": "ATM Höhle (Actun Tunichil Muknal)", "hu": "ATM barlang (Actun Tunichil Muknal)", "ro": "Peștera ATM (Actun Tunichil Muknal)", "en": "ATM Cave (Actun Tunichil Muknal)" },
        "description": { "de": "Eine heilige Maya-Höhle, die Skelette, Töpferwaren und Artefakte enthält.", "hu": "Szent maja barlang, amely csontvázakat, kerámiákat és egyéb leleteket tartalmaz.", "ro": "O peșteră mayașă sacră care conține schelete, ceramică și artefacte.", "en": "A sacred Maya cave containing skeletons, pottery, and artifacts." },
        "facts": { "de": ["Bedeutet 'Höhle des Steinernen Grabes'.", "Heimat der 'Kristall-Jungfrau'.", "Erfordert Schwimmen und Wandern im Wasser.", "Streng regulierter Zugang."], "hu": ["Jelentése 'a kősír barlangja'.", "A 'Kristálylány' otthona.", "Úszást és vízben gázolást igényel.", "Szigorúan szabályozott belépés."], "ro": ["Înseamnă 'Peștera Mormântului de Piatră'.", "Locul 'Fecioarei de Cristal'.", "Necesită înot și mers prin apă.", "Acces strict reglementat."], "en": ["Means 'Cave of the Stone Sepulcher'.", "Home to the 'Crystal Maiden'.", "Requires swimming and hiking through water.", "Strictly regulated access."] },
        "adv_de": "Die Actun Tunichil Muknal Höhle, oft kurz als ATM bezeichnet, ist ein faszinierendes archäologisches Abenteuer und ein heiliger Ort der Maya. Besucher müssen durch den Dschungel wandern, Flüsse durchqueren und schließlich in die Höhle schwimmen, um in das tiefe Innere zu gelangen. Dort oben, in riesigen Kalksteinkammern, liegen Skelette, Keramikgefäße und rituelle Opfergaben seit über tausend Jahren unberührt. Das bekannteste Highlight ist die „Kristall-Jungfrau“, das Skelett einer jungen Frau, das durch Kalkablagerungen über die Jahrhunderte ein funkelndes, kristallines Aussehen erhalten hat. Für die Maya war diese Höhle ein Zugang zur Unterwelt Xibalba, in der sie in Zeiten schwerer Dürre ihren Göttern Opfer darbrachten.",
        "facts_de": [
            "National Geographic kürte ATM zur Nummer 1 der heiligen Höhlen weltweit.",
            "Der Zugang ist nur mit lizenzierten Spezialführern gestattet.",
            "In der Höhle wurden Überreste von insgesamt 14 Menschen gefunden.",
            "Kameras sind im Inneren streng verboten, um die Funde zu schützen.",
            "Die Höhle wurde erst im Jahr 1989 offiziell archäologisch erfasst.",
            "Die Hauptkammer liegt etwa 500 Meter tief im Berginneren.",
            "Viele Keramiktöpfe weisen 'Todeslöcher' auf, um den Geist freizusetzen.",
            "Die Wassertemperatur in der Höhle ist das ganze Jahr über konstant kühl."
        ]
    },
    {
        "id": "barton-creek-cave-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.95, 17.12],
        "name": { "de": "Barton Creek Höhle", "hu": "Barton Creek-barlang", "ro": "Peștera Barton Creek", "en": "Barton Creek Cave" },
        "description": { "de": "Eine weitläufige Wasserhöhle, die mit dem Kanu erkundet wird und Maya-Relikte beherbergt.", "hu": "Hatalmas vízi barlang, amelyet kenuval fedeznek fel, és maja ereklyéknek ad otthont.", "ro": "O peșteră acvatică extinsă, explorată cu canoea, care adăpostește relicve mayașe.", "en": "An extensive water cave explored by canoe, housing Maya relics." },
        "facts": { "de": ["Wurde für Bestattungen genutzt.", "Eindrucksvolle Kathedrale-ähnliche Kammern.", "Kanutouren sind die einzige Zugangsmöglichkeit.", "Auf dem Weg liegt eine mennonitische Siedlung."], "hu": ["Temetkezésekre használták.", "Lenyűgöző, katedrálishoz hasonló kamrák.", "A kenutúra az egyetlen bejutási mód.", "Útközben egy mennonita település található."], "ro": ["Folosită pentru înmormântări.", "Camere impresionante asemănătoare catedralelor.", "Tururile cu canoea sunt singura modalitate de acces.", "O așezare menonită se află pe drum."], "en": ["Used for burials.", "Impressive cathedral-like chambers.", "Canoe tours are the only way to access it.", "A Mennonite settlement is located on the way."] },
        "adv_de": "Die Barton Creek Höhle bietet eine der entspanntesten und zugleich mystischsten Arten, das Erbe der Maya zu entdecken. Besucher gleiten in Kanus lautlos über das kristallklare Wasser tief in den Berg hinein. Die Höhle erstreckt sich über mehrere Kilometer, wobei Touristen etwa die erste Meile befahren können. Unterwegs ragen gigantische Stalaktiten von der Decke, und auf hohen Felsvorsprüngen sind bis heute Skelettreste und Tonscherben der antiken Maya zu sehen. Diese nutzten die Höhle vorwiegend als Begräbnisstätte und zeremoniellen Ort. Die Fahrt zur Höhle führt zudem durch eine traditionelle mennonitische Gemeinschaft, was den kulturellen Kontrast der Region Cayo unterstreicht.",
        "facts_de": [
            "Archäologen fanden in der Höhle Überreste von mindestens 28 Personen.",
            "Die Höhle wurde bis zum Ende der klassischen Maya-Periode genutzt.",
            "Man kann in den Kanus bis zu 1,5 Kilometer tief in die Höhle paddeln.",
            "Einige Kammern haben eine Deckenhöhe von über 30 Metern.",
            "Barton Creek ist eine der wichtigsten 'nassen' Höhlen für die Forschung.",
            "Die Anreise erfordert meist ein Allradfahrzeug aufgrund der Pisten.",
            "In der Höhle wurden Opfergaben wie Jade und Obsidian entdeckt.",
            "Die Höhlendecke glitzert stellenweise durch Calcit-Kristalle."
        ]
    },
    {
        "id": "st-johns-cathedral-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.19, 17.49],
        "name": { "de": "St. John’s Kathedrale", "hu": "Szent János-székesegyház", "ro": "Catedrala Sf. Ioan", "en": "St. John's Cathedral" },
        "description": { "de": "Die älteste anglikanische Kirche in Mittelamerika, ein Wahrzeichen von Belize City.", "hu": "Közép-Amerika legrégebbi anglikán temploma, Belize City egyik nevezetessége.", "ro": "Cea mai veche biserică anglicană din America Centrală, un punct de reper în Belize City.", "en": "The oldest Anglican church in Central America, a landmark of Belize City." },
        "facts": { "de": ["Erbaut mit Ziegeln aus England.", "Krönungsort für Könige der Miskito-Indianer.", "Wichtiger Ort der Kolonialgeschichte.", "Direkt gegenüber dem Government House."], "hu": ["Angliából származó téglákból épült.", "A miszkító indián királyok koronázási helye.", "A gyarmati történelem fontos helyszíne.", "Szemben a Kormányházzal."], "ro": ["Construită cu cărămizi din Anglia.", "Locul de încoronare pentru regii indieni Miskito.", "Loc important al istoriei coloniale.", "Chiar vizavi de Casa Guvernului."], "en": ["Built with bricks from England.", "Coronation site for Miskito Indian kings.", "Important site of colonial history.", "Right across from Government House."] },
        "adv_de": "St. John’s Cathedral in Belize City ist ein architektonisches Juwel und die älteste anglikanische Kirche in ganz Mittelamerika. Ihr Bau begann im Jahr 1812 und wurde mit Backsteinen vollendet, die als Schiffsballast aus Europa eintrafen. Die Kathedrale ist tief mit der regionalen Geschichte verwurzelt; so fanden hier im 19. Jahrhundert die feierlichen Krönungen der Könige der Miskito-Indianer statt, was die enge Verbindung zwischen dem britischen Empire und seinen lokalen Verbündeten unterstrich. Mit ihren schönen Buntglasfenstern und der historischen Orgel strahlt die Kirche eine würdevolle Ruhe aus. Direkt gegenüber dem Government House gelegen, bildet sie das historische Herz der Stadt und ist ein Muss für jeden Besucher, der sich für die koloniale Ära und das religiöse Erbe von Belize interessiert.",
        "facts_de": [
            "Die Grundsteinlegung erfolgte im Jahr 1812.",
            "Sie wurde 1826 offiziell geweiht.",
            "Die Ziegelsteine wurden auf britischen Schiffen als Ballast transportiert.",
            "Hier wurden vier Miskito-Könige zwischen 1815 und 1845 gekrönt.",
            "Die Kathedrale wurde nach Hurrikanschäden mehrfach renoviert.",
            "Sie ist der einzige Ort außerhalb Englands, an dem Könige gekrönt wurden.",
            "Das Innere ist mit edlem Mahagoniholz und Gedenktafeln ausgestattet.",
            "Die Kirche ist bis heute ein aktives religiöses Zentrum."
        ]
    },
    {
        "id": "government-house-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.19, 17.491],
        "name": { "de": "Government House (Belize)", "hu": "Kormányház (Belize)", "ro": "Casa Guvernului (Belize)", "en": "Government House (Belize)" },
        "description": { "de": "Ehemalige Residenz des britischen Gouverneurs, heute ein Kulturzentrum und Museum.", "hu": "A brit kormányzó egykori rezidenciája, ma kulturális közpunkt és múzeum.", "ro": "Fosta reședință a guvernatorului britanic, acum centru cultural și muzeu.", "en": "Former residence of the British Governor, now a cultural center and museum." },
        "facts": { "de": ["Erbaut im Jahr 1814.", "Beispiel für koloniale Architektur.", "Heute bekannt als House of Culture.", "Blick auf das Karibische Meer."], "hu": ["1814-ben épült.", "A gyarmati építészet példája.", "Ma Kultúra Háza néven ismert.", "Kilátás a Karib-tengerre."], "ro": ["Construită în anul 1814.", "Exemplu de arhitectură colonială.", "Cunoscută astăzi sub numele de Casa Culturii.", "Vedere spre Marea Caraibilor."], "en": ["Built in 1814.", "Example of colonial architecture.", "Now known as the House of Culture.", "Overlooks the Caribbean Sea."] },
        "adv_de": "Das Government House in Belize City, heute als House of Culture bekannt, ist eines der am besten erhaltenen Beispiele kolonialer Architektur in der Karibik. Seit seiner Fertigstellung im Jahr 1814 diente es als offizielle Residenz der britischen Gouverneure und später des ersten Generalgouverneurs von Belize nach der Unabhängigkeit. Das prachtvolle weiße Gebäude verbindet karibische Eleganz mit britischem Stil und ist von gepflegten Gärten umgeben, die direkt an das Meer grenzen. Seit der Umwandlung in ein Kulturzentrum beherbergt es wechselnde Kunstausstellungen, historische Dokumente und bietet Einblicke in das Leben der kolonialen Oberschicht. Es ist ein Ort der Begegnung, an dem die Geschichte des Landes lebendig gehalten wird und Besucher die Atmosphäre vergangener Zeiten inmitten einer tropischen Kulisse nachempfinden können.",
        "facts_de": [
            "Das Haus wurde 1814 aus edlem Mahagoni und Ziegeln erbaut.",
            "Es war über 150 Jahre lang das Machtzentrum der Kolonie.",
            "Sir Colville Young war der letzte Bewohner als Generalgouverneur.",
            "Die Architektur wurde speziell für die tropische Belüftung entworfen.",
            "Hier wehte 1981 zum ersten Mal die Flagge des unabhängigen Belize.",
            "Das Museum zeigt eine Sammlung von Geschenken ausländischer Würdenträger.",
            "In den Gärten finden regelmäßig kulturelle Veranstaltungen statt.",
            "Es gilt als eines der am meisten fotografierten Gebäude in Belize City."
        ]
    },
    {
        "id": "swing-bridge-history-v2",
        "type": "historical",
        "parent": "BZ-BZ",
        "coords": [-88.19, 17.493],
        "name": { "de": "Swing Bridge (Belize City)", "hu": "Forgóhíd (Belize City)", "ro": "Podul Swing (Belize City)", "en": "Swing Bridge (Belize City)" },
        "description": { "de": "Die einzige manuell betriebene Schwenkbrücke der Welt, die noch in Gebrauch ist.", "hu": "A világ egyetlen ma is használatban lévő, kézzel működtetett forgóhídja.", "ro": "Singurul pod pivotant din lume operat manual care este încă în uz.", "en": "The only manually operated swing bridge in the world still in use." },
        "facts": { "de": ["Verbindet die Nord- und Südseite von Belize City.", "Erbaut im Jahr 1923.", "Wird von mehreren Männern mit Kurbeln gedreht.", "Überquert den Haulover Creek."], "hu": ["Összeköti Belize City északi és déli oldalát.", "1923-ban épült.", "Több ember forgatja karok segítségével.", "A Haulover-patak felett ível át."], "ro": ["Conectează părțile de nord și de sud ale orașului Belize City.", "Construit în anul 1923.", "Este rotit de mai mulți bărbați cu manivele.", "Traversează Haulover Creek."], "en": ["Connects the north and south sides of Belize City.", "Built in 1923.", "Rotated by several men using hand cranks.", "Crosses Haulover Creek."] },
        "adv_de": "Die Swing Bridge in Belize City ist ein lebendiges Industriedenkmal und ein unverwechselbares Wahrzeichen der Stadt. Sie ist die einzige noch existierende Schwenkbrücke der Welt, die regelmäßig von Hand betrieben wird. Die im Jahr 1923 in Liverpool gefertigte Stahlkonstruktion überquert den Haulover Creek und verbindet die beiden Hauptteile der Stadt. Wenn größere Schiffe passieren müssen, wird der Verkehr gestoppt und mehrere Männer setzen die Brücke mit großen Kurbeln mühsam in Bewegung, um sie um 90 Grad zu drehen. Dieser Vorgang ist ein faszinierendes Schauspiel, das die Zeit für einen Moment stillstehen lässt. Trotz zahlreicher Hurrikane und der Modernisierung der Infrastruktur bleibt die Swing Bridge ein stolzes Symbol für die Beständigkeit und den Charakter von Belize City.",
        "facts_de": [
            "Die Brücke wurde in Liverpool, England, hergestellt.",
            "Sie wurde im Jahr 1923 an ihrem heutigen Standort installiert.",
            "Für die Drehung werden mindestens vier starke Männer benötigt.",
            "Sie ist eine der meistbefahrenen Brücken für Fußgänger im Land.",
            "Die Brücke wurde nach dem verheerenden Hurrikan Hattie 1961 repariert.",
            "Die Drehung der Brücke findet heute meist nur noch bei Bedarf statt.",
            "Sie ist ein zentraler Treffpunkt und Orientierungspunkt in der Stadt.",
            "Es gibt Pläne, sie als historisches Denkmal dauerhaft zu erhalten."
        ]
    },
    {
        "id": "nohmul-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-OW",
        "coords": [-88.55, 18.21],
        "name": { "de": "Nohmul Ruinen", "hu": "Nohmul romok", "ro": "Ruinele Nohmul", "en": "Nohmul Ruins" },
        "description": { "de": "Eine große Maya-Stätte, deren Hauptpyramide 2013 leider zerstört wurde.", "hu": "Nagy maja lelőhely, amelynek fő piramisát 2013-ban sajnos lerombolták.", "ro": "Un mare sit mayaș a cărui piramidă principală a fost din păcate distrusă în 2013.", "en": "A large Maya site whose main pyramid was unfortunately destroyed in 2013." },
        "facts": { "de": ["Bedeutet 'großer Hügel'.", "Wichtiger Handels- und Zeremonialort.", "Von Zuckerrohrfeldern umgeben.", "Zerstörung löste internationale Empörung aus."], "hu": ["Jelentése 'nagy domb'.", "Fontos kereskedelmi és szertartási hely.", "Cukornádültetvények veszik körül.", "A lerombolása nemzetközi felháborodást váltott ki."], "ro": ["Înseamnă 'movilă mare'.", "Important centru comercial și ceremonial.", "Înconjurat de câmpuri de trestie de zahăr.", "Distrugerea a provocat indignare internațională."], "en": ["Means 'great mound'.", "Important trade and ceremonial center.", "Surrounded by sugarcane fields.", "Its destruction caused international outrage."] },
        "adv_de": "Nohmul, was in der Maya-Sprache „Großer Hügel“ bedeutet, war einst eines der bedeutendsten zeremoniellen Zentren im Norden von Belize. Auf einem Kalksteinkamm über dem Hondo-Fluss gelegen, kontrollierte die Stadt wichtige Handelswege zwischen der Küste und dem Landesinneren. Traurige Berühmtheit erlangte die Stätte im Jahr 2013, als ihre größte Pyramide, ein über 2.300 Jahre altes Bauwerk, von einem Bauunternehmen fast vollständig zerstört wurde, um Straßenschotter zu gewinnen. Dieser Vorfall löste weltweite Empörung aus und führte zu strengeren Schutzgesetzen für archäologische Stätten in Belize. Trotz dieses unwiederbringlichen Verlusts bleibt Nohmul ein wichtiges Forschungsgebiet, das wertvolle Einblicke in die soziale Hierarchie und die architektonische Entwicklung der nördlichen Maya-Tiefebenen liefert.",
        "facts_de": [
            "Die Hauptpyramide war vor ihrer Zerstörung etwa 30 Meter hoch.",
            "Nohmul wurde in der späten Präklassik (ca. 350 v. Chr.) gegründet.",
            "Die Stätte erstreckt sich über ein weites Gebiet inmitten von Zuckerrohrfeldern.",
            "Es gibt zwei Hauptgruppen von Gebäuden, die durch einen Damm verbunden sind.",
            "Der Vorfall von 2013 gilt als einer der schlimmsten Akte von Antiken-Vandalismus.",
            "Archäologen fanden hier Beweise für eine Besiedlung bis in die Postklassik.",
            "Die Stätte bietet einen weiten Blick über die fruchtbaren Ebenen von Orange Walk.",
            "Nohmul war ein wichtiges administratives Zentrum für die Region."
        ]
    },
    {
        "id": "tipu-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.15, 16.96],
        "name": { "de": "Tipu Ruinen", "hu": "Tipu romok", "ro": "Ruinele Tipu", "en": "Tipu Ruins" },
        "description": { "de": "Eine postklassische Maya-Stätte, die für ihren Widerstand gegen die spanische Herrschaft bekannt ist.", "hu": "Posztklasszikus maja lelőhely, amely a spanyol uralommal szembeni ellenállásáról ismert.", "ro": "Un sit mayaș postclasic cunoscut pentru rezistența sa împotriva stăpânirii spaniole.", "en": "A Postclassic Maya site known for its resistance against Spanish rule." },
        "facts": { "de": ["Zentrum des Maya-Widerstands im 17. Jahrhundert.", "Enthält eine spanische Kolonialkirche.", "Lag an einer wichtigen Handelsroute.", "Wichtige Stätte für die Geschichte des Kontakts."], "hu": ["A 17. századi maja ellenállás központja.", "Egy spanyol gyarmati templomot is magában foglal.", "Fontos kereskedelmi útvonalon feküdt.", "Fontos lelőhely a kapcsolatfelvétel történetében."], "ro": ["Centrul rezistenței mayașe în secolul al XVII-lea.", "Conține o biserică colonială spaniolă.", "Situat pe o importantă rută comercială.", "Situl important pentru istoria contactului."], "en": ["Center of Maya resistance in the 17th century.", "Contains a Spanish colonial church.", "Located on an important trade route.", "Important site for contact-period history."] },
        "adv_de": "Tipu ist eine archäologisch höchst bedeutsame Stätte im Cayo-Distrikt, die für ihren heftigen Widerstand gegen die spanische Kolonialherrschaft bekannt ist. Als Grenzort wurde Tipu im 16. und 17. Jahrhundert zu einem Zufluchtsort für Maya, die vor der spanischen Verwaltung aus Yucatan und Peten flohen. Die Gemeinschaft konnte sich über Jahrzehnte erfolgreich gegen Unterwerfungsversuche wehren, obwohl sie selektiv Elemente der europäischen Kultur übernahm. Ausgrabungen brachten die Ruinen einer spanischen Kirche ans Licht, in deren Umgebung Hunderte von Gräbern gefunden wurden. Diese zeigen eine faszinierende Mischung aus Maya-Bestattungsriten und christlichen Einflüssen. Tipu bietet ein einzigartiges Fenster in die komplexen Dynamiken von Rebellion, Anpassung und kultureller Resilienz während der frühen Kontaktzeit.",
        "facts_de": [
            "Tipu war im 16. Jahrhundert die Hauptstadt der Provinz Dzuluinicob.",
            "Die Maya von Tipu rebellierten erfolgreich im Jahr 1638 gegen die Spanier.",
            "Es wurden über 500 Skelette in und um die Kirchenruine ausgegraben.",
            "Die Stätte liegt auf einer Terrasse hoch über dem Macal River.",
            "Tipu war ein bedeutendes Zentrum für die Produktion von Kakao und Honig.",
            "Die archäologischen Arbeiten dort begannen intensiv in den 1980er Jahren.",
            "Die Geschichte von Tipu ist ein zentrales Beispiel für die 'unbesiegten' Maya.",
            "Der Ort war ein wichtiger Stützpunkt für den Handel mit dem Landesinneren."
        ]
    },
    {
        "id": "pusilha-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-89.23, 16.21],
        "name": { "de": "Pusilha Ruinen", "hu": "Pusilha romok", "ro": "Ruinele Pusilha", "en": "Pusilha Ruins" },
        "description": { "de": "Eine bedeutende Maya-Stätte der Klassik im tiefen Süden von Belize.", "hu": "Jelentős klasszikus korabeli maja lelőhely Belize mély déli részén.", "ro": "Un important sit mayaș clasic în sudul profund al Belize.", "en": "A major Classic period Maya site in the deep south of Belize." },
        "facts": { "de": ["Bekannt für eine Steinbrücke über den Moho-Fluss.", "Viele Stelen mit Inschriften.", "Wichtiges politisches Zentrum.", "Schwer zugänglich."], "hu": ["Híres a Moho-folyón átívelő kőhídjáról.", "Sok feliratos sztélé.", "Fontos politikai központ.", "Nehezen megközelíthető."], "ro": ["Cunoscut pentru un pod de piatră peste râul Moho.", "Multe stele cu inscripții.", "Centru politic important.", "Greu accesibil."], "en": ["Known for a stone bridge across the Moho River.", "Many inscribed stelae.", "Important political center.", "Difficult to access."] },
        "adv_de": "Pusilha ist eine bedeutende Maya-Stadt der Klassik im entlegenen Toledo-Distrikt, nahe der Grenze zu Guatemala. Errichtet am Zusammenfluss von Moho und Poite River, ist die Stätte berühmt für ihre hochentwickelte Ingenieurskunst, insbesondere eine massive Steinbrücke, die einst den Fluss überspannte. Pusilha war ein unabhängiges Königreich, das enge Beziehungen zur großen Stadt Copan pflegte. Die zahlreichen hier gefundenen Stelen liefern eine detaillierte Geschichte der königlichen Dynastien und ihrer politischen Allianzen. Aufgrund ihrer isolierten Lage tief im Dschungel bleibt Pusilha eine der geheimnisvollsten und am wenigsten besuchten großen Maya-Städte in Belize, was sie zu einem Ziel für echte Entdecker macht.",
        "facts_de": [
            "Die Stadt war vor allem zwischen 250 und 900 n. Chr. besiedelt.",
            "Es wurden mehr als 20 beschriftete Stelen und mehrere Altäre entdeckt.",
            "Pusilha bedeutet 'Ort der Hängebrücke' in der lokalen Maya-Sprache.",
            "Die königliche Linie beanspruchte die Abstammung von einer heiligen Dynastie.",
            "Die Stätte liegt etwa 48 Kilometer westlich von Punta Gorda.",
            "Die Steinbrücke gilt als eine der größten ihrer Art in der Maya-Welt.",
            "Archäologische Funde belegen den Handel mit Obsidian und Jade.",
            "Die Ruine umfasst mehrere Plätze und eine beeindruckende Akropolis."
        ]
    },
    {
        "id": "colha-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-OW",
        "coords": [-88.48, 17.88],
        "name": { "de": "Colha Ruinen", "hu": "Colha romok", "ro": "Ruinele Colha", "en": "Colha Ruins" },
        "description": { "de": "Eine Maya-Stätte, die für die Massenproduktion von Steinwerkzeugen bekannt ist.", "hu": "Maja lelőhely, amely a kőszerszámok tömegtermeléséről ismert.", "ro": "Un sit mayaș cunoscut pentru producția în masă de unelte din piatră.", "en": "A Maya site known for the mass production of stone tools." },
        "facts": { "de": ["Hauptproduzent von Werkzeugen aus Feuerstein.", "Werkzeuge wurden in ganz Belize gehandelt.", "Besiedelt von der Frühprähistorik bis zur Postklassik.", "Funde deuten auf ein Massaker hin."], "hu": ["A kőeszközök fő gyártója.", "Az eszközökkel egész Belize-ben kereskedtek.", "A korai prehisztorikus kortól a posztklasszikus korig lakott.", "A leletek mészárlásra utalnak."], "ro": ["Producător major de unelte din silex.", "Uneltele erau comercializate în tot Belize.", "Locuit din preclasicul timpuriu până în postclasic.", "Descoperirile sugerează un masacru."], "en": ["Major producer of chert stone tools.", "Tools were traded throughout Belize.", "Occupied from the Early Preclassic to Postclassic.", "Evidence of a massacre was found here."] },
        "adv_de": "Colha gilt als das „industrielle Herz“ der antiken Maya-Zivilisation in Belize. Nahe eines Vorkommens von hochwertigem Feuerstein (Chert) gelegen, spezialisierte sich diese Stätte über 2.000 Jahre lang auf die Massenproduktion von Steinwerkzeugen. Die Handwerker von Colha fertigten Millionen von Äxten und Messern, die über weite Handelsnetze bis tief in das Maya-Tiefland verbreitet wurden. Die schiere Menge an Steinschlagresten vor Ort ist atemberaubend und zeugt von einer hoch organisierten Wirtschaft. Neben seiner industriellen Bedeutung bietet Colha auch Belege für ein gewaltsames Ende der klassischen Besiedlung, dokumentiert durch den Fund einer Schachtgrube mit den Überresten von 28 enthaupteten Personen.",
        "facts_de": [
            "Die Besiedlung dauerte von etwa 1000 v. Chr. bis 1300 n. Chr.",
            "Es wurden Werkstätten für die Herstellung von 'Exzentrischen Feuersteinen' entdeckt.",
            "Colha-Feuerstein ist an seiner charakteristischen schokobraunen Farbe erkennbar.",
            "Die Stätte liegt etwa 50 Kilometer nördlich von Belize City.",
            "In den Palästen wurden Reste von Wandmalereien gefunden.",
            "Colha war ein wichtiger Lieferant für Städte wie Tikal und Altun Ha.",
            "Die Stadt verfügte über mehrere Zeremonialplätze und Wohnkomplexe.",
            "Die Entdeckung des Schädelfeldes deutet auf einen plötzlichen sozialen Kollaps hin."
        ]
    },
    {
        "id": "indian-creek-ruin-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-88.75, 16.41],
        "name": { "de": "Indian Creek Ruine", "hu": "Indian Creek rom", "ro": "Ruina Indian Creek", "en": "Indian Creek Ruin" },
        "description": { "de": "Eine kleine, aber gut erhaltene Maya-Zeremonialstätte im Toledo District.", "hu": "Kicsi, de jól megőrzött maja szertartási hely a Toledo kerületben.", "ro": "Un mic, dar bine conservat sit ceremonial mayaș în districtul Toledo.", "en": "A small but well-preserved Maya ceremonial site in the Toledo District." },
        "facts": { "de": ["Bekannt für seine zentrale Pyramide.", "Leicht zugänglich von der Southern Highway.", "Ein Beispiel für eine kleinere Maya-Gemeinde.", "Umgeben von Ackerland."], "hu": ["Központi piramisáról ismert.", "Könnyen megközelíthető a Déli autópályáról.", "Példa egy kisebb maja közösségre.", "Szántóföldekkel körülvéve."], "ro": ["Cunoscut pentru piramida sa centrală.", "Ușor accesibil de pe Autostrada de Sud.", "Un exemplu de comunitate mayașă mai mică.", "Înconjurat de terenuri agricole."], "en": ["Known for its central pyramid.", "Easily accessible from the Southern Highway.", "An example of a smaller Maya community.", "Surrounded by farmland."] },
        "adv_de": "Indian Creek ist eine kleinere, aber charmante Maya-Ruine, die direkt am Southern Highway im Toledo-Distrikt liegt. Sie dient als klassisches Beispiel für ein untergeordnetes administratives Zentrum, das die umliegenden bäuerlichen Gemeinschaften versorgte. Die Stätte konzentriert sich um einen Hauptplatz mit einer gut erhaltenen Pyramide und mehreren niedrigen Plattformen. Aufgrund ihrer leichten Erreichbarkeit bietet Indian Creek einen schnellen und interessanten Einblick in die Organisationsstruktur der antiken Maya-Gesellschaft, ohne dass man lange Wanderungen unternehmen muss. Die Ruinen stehen heute inmitten von modernem Ackerland und erinnern an die lange landwirtschaftliche Tradition dieser Region.",
        "facts_de": [
            "Die Hauptpyramide ragt etwa 10 Meter über den Boden empor.",
            "Die Stätte wurde vorwiegend während der Klassik (250-900 n. Chr.) genutzt.",
            "Es wurden Keramikreste gefunden, die auf lokale Produktion hindeuten.",
            "Indian Creek ist ein beliebter Stopp für Reisende auf dem Weg nach Süden.",
            "Die Stätte ist umgeben von traditionellen Maya-Dörfern wie Big Falls.",
            "Sie umfasst insgesamt zwei kleine Plätze und eine Akropolis.",
            "Die archäologische Erfassung der Stätte begann erst spät im 20. Jahrhundert.",
            "Der Ort bietet eine gute Gelegenheit, Maya-Architektur in kleinem Rahmen zu sehen."
        ]
    },
    {
        "id": "kaxil-uinic-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-OW",
        "coords": [-89.1, 17.65],
        "name": { "de": "K'axob / Kaxil Uinic Ruinen", "hu": "K'axob / Kaxil Uinic romok", "ro": "Ruinele K'axob / Kaxil Uinic", "en": "K'axob / Kaxil Uinic Ruins" },
        "description": { "de": "Eine prähistorische Maya-Siedlung in der Nähe von San Lazaro Village.", "hu": "Prehisztorikus maja település a San Lazaro falu közelében.", "ro": "O așezare mayașă preclasică lângă satul San Lazaro.", "en": "A Preclassic Maya settlement located near San Lazaro Village." },
        "facts": { "de": ["Bedeutet 'Ort der K'an-Glyphe'.", "Wichtige Funde zur frühen Dorfentwicklung.", "Befindet sich auf Privatgrund.", "Archäologisch bedeutend."], "hu": ["Jelentése 'a K'an-glifa helye'.", "Fontos leletek a korai falusi fejlődésről.", "Magánterületen található.", "Régészetileg jelentős."], "ro": ["Înseamnă 'Locul Glifei K'an'.", "Descoperiri importante despre dezvoltarea timpurie a satului.", "Situat pe proprietate privată.", "Semnificativ din punct de vedere arheologic."], "en": ["Means 'Place of the K'an Glyph'.", "Important findings on early village development.", "Located on private land.", "Archaeologically significant."] },
        "adv_de": "K'axob, oft in Verbindung mit dem Gebiet Kaxil Uinic genannt, ist eine bedeutende Siedlung aus der Präklassik in den Feuchtgebieten Nord-Belizes. Dieser Ort ist entscheidend für das Verständnis der frühen Maya-Gesellschaft und ihres Übergangs von einfachen Bauerndörfern zu komplexen Herrschaftssystemen. Die Bewohner von K'axob waren Experten in der Sumpf-Landwirtschaft und nutzten hochgelegene Felder, um in der fruchtbaren, aber wasserreichen Landschaft Feldfrüchte anzubauen. Die Stätte ist bekannt für ihre hochentwickelte frühe Keramik und prunkvolle Gräber, die belegen, dass soziale Hierarchien weit vor der klassischen Periode entstanden. K'axob bleibt ein wichtiger Forschungsort für Umweltanpassung und soziale Transformation.",
        "facts_de": [
            "K'axob wurde bereits um 800 v. Chr. dauerhaft besiedelt.",
            "Es wurden Belege für großflächigen Reisanbau in Sumpfgebieten gefunden.",
            "Die Stätte liegt in der Nähe des New River im Distrikt Orange Walk.",
            "Es wurden über 100 reich ausgestattete Gräber aus der Präklassik entdeckt.",
            "Die Forschung dort lieferte wichtige Daten zur Domestizierung von Nutzpflanzen.",
            "Das Gelände befindet sich auf einer sanften Erhebung inmitten von Sümpfen.",
            "Die Keramikfunde zeigen Ähnlichkeiten mit Stätten in Petén.",
            "K'axob ist ein Paradebeispiel für die kulturelle Kontinuität der Maya."
        ]
    },
    {
        "id": "la-milpa-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-OW",
        "coords": [-89.05, 17.83],
        "name": { "de": "La Milpa Ruinen", "hu": "La Milpa romok", "ro": "Ruinele La Milpa", "en": "La Milpa Ruins" },
        "description": { "de": "Die drittgrößte Maya-Stätte in Belize, gelegen im Rio Bravo Schutzgebiet.", "hu": "Belize harmadik legnagyobb maja lelőhelye, a Rio Bravo védett területen.", "ro": "Al treilea cel mai mare sit mayaș din Belize, situat în zona de conservare Rio Bravo.", "en": "The third-largest Maya site in Belize, located in the Rio Bravo Conservation Area." },
        "facts": { "de": ["Drittgrößte Stätte in Belize.", "Mehr als 20 Plätze und 85 Hauptstrukturen.", "Große zentrale Plaza.", "Wichtiges Forschungszentrum."], "hu": ["Belize harmadik legnagyobb lelőhelye.", "Több mint 20 tér és 85 fő építmény.", "Nagy központi tér.", "Fontos kutatóközpont."], "ro": ["Al treilea cel mai mare sit din Belize.", "Peste 20 de piețe și 85 de structuri principale.", "Piața centrală mare.", "Centru de cercetare important."], "en": ["Third-largest site in Belize.", "More than 20 plazas and 85 major structures.", "Large central plaza.", "Important research center."] },
        "adv_de": "La Milpa ist die drittgrößte Maya-Stätte in Belize und eine der imposantesten Städte der gesamten Maya-Welt. Tief im Rio Bravo Schutzgebiet gelegen, verfügt sie über eine gewaltige Große Plaza, die zu den größten in der gesamten Tiefebene gehört und von riesigen Pyramiden flankiert wird. Auf ihrem Höhepunkt in der späten Klassik war La Milpa eine regionale Großmacht, die mit Städten wie Caracol und Tikal konkurrierte. Das ausgeklügelte Wassermanagementsystem der Stadt mit großen Reservoirs und Kanälen ermöglichte das Überleben einer dichten Bevölkerung im Regenwald. Heute ist La Milpa ein erstklassiges Ziel für Ökotouristen und Forscher, die antiken Städtebau in einer völlig unberührten Natur erleben wollen.",
        "facts_de": [
            "Die Große Plaza von La Milpa misst beeindruckende 18.000 Quadratmeter.",
            "Es gibt mehr als 20 Plätze und mindestens 85 Hauptgebäude.",
            "Die höchste Pyramide, Struktur 1, ragt über 24 Meter empor.",
            "Zur Blütezeit lebten hier schätzungsweise über 46.000 Menschen.",
            "Die Stätte wurde erst in den 1930er Jahren wissenschaftlich entdeckt.",
            "Sie liegt etwa 50 km westlich von Orange Walk Town.",
            "La Milpa ist Teil des größten privaten Naturschutzgebiets in Belize.",
            "In der Umgebung wurden Überreste von über 60 Tempeln und Palästen gefunden."
        ]
    },
    {
        "id": "chac-balam-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-CZL",
        "coords": [-88.0, 18.2],
        "name": { "de": "Chac Balam Ruinen", "hu": "Chac Balam romok", "ro": "Ruinele Chac Balam", "en": "Chac Balam Ruins" },
        "description": { "de": "Eine kleine, aber strategisch gelegene Maya-Stätte an der Nordspitze von Ambergris Caye.", "hu": "Kicsi, de stratégiailag fontos maja lelőhely az Ambergris Caye északi csücskén.", "ro": "Un sit mayaș mic, dar strategic, la vârful nordic al Ambergris Caye.", "en": "A small but strategic Maya site on the northern tip of Ambergris Caye." },
        "facts": { "de": ["Bedeutet 'Roter Jaguar'.", "Kontrollierte den Kanal zwischen Ambergris Caye und Mexiko.", "Teil des Bacalar Chico Nationalparks.", "Nur per Boot erreichbar."], "hu": ["Jelentése 'Vörös Jaguár'.", "Ellenőrizte az Ambergris Caye és Mexikó közötti csatornát.", "A Bacalar Chico Nemzeti Park része.", "Csak csónakkal érhető el."], "ro": ["Înseamnă 'Jaguarul Roșu'.", "Controla canalul dintre Ambergris Caye și Mexic.", "Parte a Parcului Național Bacalar Chico.", "Accesibil doar cu barca."], "en": ["Means 'Red Jaguar'.", "Controlled the channel between Ambergris Caye and Mexico.", "Part of the Bacalar Chico National Park.", "Accessible only by boat."] },
        "adv_de": "Chac Balam, was übersetzt „Roter Jaguar“ bedeutet, ist eine strategisch wichtige Maya-Stätte an der Nordspitze von Ambergris Caye. Gelegen am Bacalar Chico Kanal, der Belize von Mexiko trennt, diente sie als wichtiger maritimer Kontrollpunkt und Handelsposten. Von hier aus konnten die Maya den Kanuverkehr zwischen dem Karibischen Meer und den Binnengewässern von Quintana Roo überwachen. Die Stätte besteht aus einem zeremoniellen Kern mit mehreren Plattformen, die auf einer stabilisierten Sanddüne errichtet wurden. Die Geschichte von Chac Balam zeigt eindrucksvoll, wie die Maya die Geographie der Küste nutzten, um ein weitreichendes Handelsnetz zu kontrollieren.",
        "facts_de": [
            "Die Stätte war in der Spätklassik und Postklassik besonders aktiv.",
            "Sie befindet sich innerhalb des Bacalar Chico Nationalparks.",
            "Man erreicht Chac Balam nur per Boot von San Pedro oder Sarteneja aus.",
            "Die Stätte umfasst mindestens 15 identifizierte Strukturen.",
            "Es wurden Artefakte aus dem fernen Mexiko und Honduras gefunden.",
            "Sie bot einen direkten Blick auf das Barriereriff und das Meer.",
            "Archäologen fanden Reste von Unterkünften für Händler und Soldaten.",
            "Der Kanal bei der Ruine war eine lebenswichtige Wasserstraße für Handelskanus."
        ]
    },
    {
        "id": "uxbenka-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-89.0, 16.3],
        "name": { "de": "Uxbenka Ruinen", "hu": "Uxbenka romok", "ro": "Ruinele Uxbenka", "en": "Uxbenka Ruins" },
        "description": { "de": "Eine der ältesten Maya-Stätten im Süden von Belize, auf einem Bergrücken gelegen.", "hu": "Az egyik legrégebbi maja lelőhely Belize déli részén, egy hegygerincen.", "ro": "Unul dintre cele mai vechi situri mayașe din sudul Belize, situat pe o creastă.", "en": "One of the earliest Maya sites in southern Belize, located on a ridge." },
        "facts": { "de": ["Bedeutet 'alter Ort'.", "Frühe Besiedlung um 150 n. Chr.", "Bekannt für seine Stelen und Terrassen.", "Panoramablick auf die umliegende Landschaft."], "hu": ["Jelentése 'régi hely'.", "Korai település i.sz. 150 körül.", "Sztéléiről és teraszairól ismert.", "Panorámás kilátás a környező tájra."], "ro": ["Înseamnă 'loc vechi'.", "Așezare timpurie în jurul anului 150 d.Hr.", "Cunoscut pentru stelele și terasele sale.", "Vedere panoramică a peisajului înconjurător."], "en": ["Means 'ancient place'.", "Early occupation around 150 AD.", "Known for its stelae and terraced platforms.", "Panoramic views of the surrounding landscape."] },
        "adv_de": "Uxbenka ist eine der ältesten und am schönsten gelegenen Maya-Stätten im Toledo-Distrikt. Die Stadt wurde entlang einer Reihe natürlicher Bergrücken errichtet, wobei die Strukturen geschickt in die Hänge terrassiert wurden, um das fruchtbare Tal darunter zu überblicken. Der Name bedeutet in der Sprache der Mopan-Maya „Alter Ort“, was auf die frühe Etablierung des Königtums in dieser Region bereits in der frühen Klassik hinweist. Die Stätte ist bekannt für ihre elegant behauenen Stelen mit Hieroglyphentexten und Porträts antiker Herrscher. Wer den Aufstieg zu den Ruinen wagt, wird mit einem spektakulären Blick über die Maya Mountains bis hin zur Küste belohnt.",
        "facts_de": [
            "Uxbenka wurde bereits um 150 n. Chr. besiedelt.",
            "Es gibt sieben große architektonische Gruppen und mindestens 20 Stelen.",
            "Die Stätte liegt nahe dem Dorf Santa Cruz im Süden von Belize.",
            "In den Residenzen wurden aufwendige landwirtschaftliche Terrassen gefunden.",
            "Sie war eine regionale Vormacht, bevor Lubaantun an Bedeutung gewann.",
            "Die Stadt war berühmt für ihre hochentwickelten Steinschnitzereien.",
            "Uxbenka diente als spirituelles Zentrum für die umliegende Region.",
            "Das Gelände ist für seine harmonische Einbettung in die Hügellandschaft bekannt."
        ]
    },
    {
        "id": "mayo-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-89.1, 16.4],
        "name": { "de": "Maya Mountain Research Farm", "hu": "Maya Hegységi Kutatófarm", "ro": "Ferma de Cercetare Munții Maya", "en": "Maya Mountain Research Farm" },
        "description": { "de": "Eine Forschungsfarm, die sich der nachhaltigen Landwirtschaft nach Maya-Tradition widmet.", "hu": "Kutatófarm, amely a maja hagyományokon alapuló fenntartható mezőgazdaságnak szenteli magát.", "ro": "O fermă de cercetare dedicată agriculturii durabile în tradiția mayașă.", "en": "A research farm dedicated to sustainable agriculture in the Maya tradition." },
        "facts": { "de": ["Fokus auf Permakultur.", "Bildungszentrum für nachhaltige Praktiken.", "Im Toledo District gelegen.", "Bewahrt traditionelles Wissen."], "hu": ["A permakultúrára összpontosít.", "Oktatási központ a fenntartható gyakorlatokért.", "A Toledo kerületben található.", "Megőrzi a hagyományos tudást."], "ro": ["Accent pe permacultură.", "Centru educațional pentru practici durabile.", "Situat în districtul Toledo.", "Păstrează cunoștințele tradiționale."], "en": ["Focus on permaculture.", "Educational center for sustainable practices.", "Located in the Toledo District.", "Preserves traditional knowledge."] },
        "adv_de": "Die Maya Mountain Research Farm (MMRF) ist ein bahnbrechendes agrarökologisches Projekt in den Ausläufern der Maya Mountains. Gegründet im Jahr 1988 auf degradiertem Weideland, wurde die Farm in einen produktiven Waldgarten verwandelt, der die Vielfalt des Dschungels nachahmt. MMRF dient als lebendes Labor für Permakultur und die Bewahrung traditioneller Maya-Anbautechniken. Hier wachsen Kakao, Kaffee, Vanille und zahlreiche exotische Früchte ohne synthetische Chemikalien. Als Bildungszentrum zieht es Studenten aus aller Welt an, die lernen möchten, wie man durch nachhaltige Landwirtschaft die Biodiversität schützt und gleichzeitig Ernährungssicherheit für lokale Gemeinschaften schafft.",
        "facts_de": [
            "Die Farm umfasst etwa 28 Hektar renaturiertes Land.",
            "Es wurden über 15.000 Bäume gepflanzt, um den Wald wiederherzustellen.",
            "Die gesamte Farm arbeitet autark mit Solarenergie.",
            "Sie liegt flussaufwärts vom Maya-Dorf San Pedro Columbia.",
            "Jedes Jahr finden Workshops zu tropischer Agroforstwirtschaft statt.",
            "Es werden über 100 essbare und medizinische Pflanzenarten dokumentiert.",
            "Die Farm ist Gründungsmitglied der Belize Permaculture Guild.",
            "Besucher können das System der Waldgärten bei geführten Touren erleben."
        ]
    },
    {
        "id": "forest-home-village-history-v2",
        "type": "historical",
        "parent": "BZ-TOL",
        "coords": [-88.85, 16.15],
        "name": { "de": "Forest Home (historisch)", "hu": "Forest Home (történelmi)", "ro": "Forest Home (istoric)", "en": "Forest Home (historic)" },
        "description": { "de": "Eine historische Siedlung, die von Konföderierten-Flüchtlingen nach dem amerikanischen Bürgerkrieg gegründet wurde.", "hu": "Történelmi település, amelyet konföderációs menekültek alapítottak az amerikai polgárháború után.", "ro": "O așezare istorică fondată de refugiați confederați după Războiul Civil American.", "en": "A historic settlement founded by Confederate refugees after the American Civil War." },
        "facts": { "de": ["Gegründet von Ex-Konföderierten.", "Versuch, eine neue Plantagenwirtschaft aufzubauen.", "Die meisten verließen Belize wieder.", "Einzigartiges Kapitel der Geschichte Belizes."], "hu": ["Volt konföderációsok alapították.", "Kísérlet egy új ültetvényes gazdaság létrehozására.", "A legtöbben újra elhagyták Belize-t.", "Belize történelmének egyedi fejezete."], "ro": ["Fondat de ex-confederați.", "Încercare de a stabili o nouă economie de plantații.", "Majoritatea au părăsit din nou Belize.", "Un capitol unic în istoria Belize."], "en": ["Founded by ex-Confederates.", "Attempted to establish a new plantation economy.", "Most eventually left Belize.", "A unique chapter in Belizean history."] },
        "adv_de": "Forest Home ist ein Dorf im Toledo-Distrikt mit einer ungewöhnlichen Geschichte, die eng mit den Folgen des Amerikanischen Bürgerkriegs verknüpft ist. In den 1860er Jahren ließen sich hier konföderierte Flüchtlinge aus den Südstaaten nieder, um eine neue Plantagenwirtschaft für Zuckerrohr und Baumwolle aufzubauen. Obwohl die meisten Siedler Belize schließlich wieder verließen, blieb ihr Erbe im Namen des Dorfes und in den landwirtschaftlichen Traditionen erhalten. Heute ist Forest Home eine vielfältige Gemeinschaft, in der kreolische, ostindische und Maya-Kulturen aufeinandertreffen. Das Dorf ist eine Erinnerung an die Rolle Belizes als Zufluchtsort für vertriebene Gruppen aus aller Welt.",
        "facts_de": [
            "Das Dorf wurde um 1867 von US-Flüchtlingen gegründet.",
            "Es liegt etwa 6 Kilometer westlich von Punta Gorda Town.",
            "Die Siedler brachten moderne Techniken der Zuckerverarbeitung ein.",
            "Forest Home ist bis heute ein Zentrum für den Zitrusanbau.",
            "Die Gemeinde ist für ihr ostindisches Kulturerbe bekannt.",
            "Es liegt an der Hauptstraße, die zur guatemaltekischen Grenze führt.",
            "Die Bevölkerung beträgt etwa 500 Einwohner.",
            "Historische Grabsteine erinnern noch an die frühen Siedlerfamilien."
        ]
    },
    {
        "id": "bake-pot-ruin-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.8, 17.2],
        "name": { "de": "Baking Pot Ruine", "hu": "Baking Pot rom", "ro": "Ruina Baking Pot", "en": "Baking Pot Ruin" },
        "description": { "de": "Eine Maya-Stätte in der Nähe von Belmopan, die ein wichtiges regionales Zentrum war.", "hu": "Maja lelőhely Belmopan közelében, amely fontos regionális központ volt.", "ro": "Un sit mayaș lângă Belmopan, care a fost un important centru regional.", "en": "A Maya site near Belmopan that was an important regional center." },
        "facts": { "de": ["Lange Besiedlungsgeschichte.", "Lage am Belize River.", "Wichtige Zeremonialbauten.", "Heimat des Belize Valley Archaeological Reconnaissance Project."], "hu": ["Hosszú településtörténet.", "Elhelyezkedés a Belize-folyó mentén.", "Fontos szertartási épületek.", "A Belize-völgyi Régészeti Felderítő Projekt otthona."], "ro": ["Istorie lungă de locuire.", "Situat pe râul Belize.", "Structuri ceremoniale importante.", "Sediul Proiectului de Recunoaștere Arheologică din Valea Belize."], "en": ["Long history of occupation.", "Located on the Belize River.", "Important ceremonial structures.", "Home to the Belize Valley Archaeological Reconnaissance Project."] },
        "adv_de": "Baking Pot ist eine bedeutende Maya-Stätte im Herzen des Belize River Valley. Über ein Jahrtausend lang diente sie als wichtiges regionales Zentrum, das den Handel und die Landwirtschaft entlang der fruchtbaren Flussufer kontrollierte. Die Stätte zeichnet sich durch monumentale Architektur aus, darunter zwei massive Akropolis-Komplexe und zahlreiche Plätze. Besonders bemerkenswert ist, dass Baking Pot bis weit in die Zeit des allgemeinen Maya-Kollapses hinein besiedelt blieb, was auf eine hohe Resilienz der dortigen politischen Struktur hindeutet. Heute ist die Stätte ein Zentrum für archäologische Forschung, das tiefe Einblicke in die Anpassungsfähigkeit der Maya-Gemeinschaften bietet.",
        "facts_de": [
            "Baking Pot war von ca. 600 v. Chr. bis 1200 n. Chr. besiedelt.",
            "Die Anlage umfasst zwei große Gruppen, die durch einen Sacbe verbunden sind.",
            "Die Ruine befindet sich in der Nähe der Central Farm bei San Ignacio.",
            "Die Hauptpyramide in Gruppe A ist etwa 15 Meter hoch.",
            "Es wurden prunkvolle Elite-Residenzen mit Wandmalereien entdeckt.",
            "Die Stadt war ein Zentrum für die Verteilung von hochwertiger Keramik.",
            "Der Name stammt von frühen Siedlern, die dort Tongefäße zum Backen fanden.",
            "Laufende Ausgrabungen untersuchen den Übergang zur Postklassik."
        ]
    },
    {
        "id": "pacbitun-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.9, 17.05],
        "name": { "de": "Pacbitun Ruinen", "hu": "Pacbitun romok", "ro": "Ruinele Pacbitun", "en": "Pacbitun Ruins" },
        "description": { "de": "Eine mittelgroße Maya-Stätte in den Ausläufern der Maya Mountains.", "hu": "Közepes méretű maja lelőhely a Maja-hegység lábánál.", "ro": "Un sit mayaș de mărime medie la poalele Munților Maya.", "en": "A medium-sized Maya site in the foothills of the Maya Mountains." },
        "facts": { "de": ["Bedeutet 'Steine in den Himmel gesetzt'.", "Sok sztéléjéről és oltáráról ismert.", "Fontos hangszerleletek.", "Strategische Lage zwischen Hochland und Tiefland."], "hu": ["Jelentése 'kövek az égbe helyezve'.", "Sok sztéléjéről és oltáráról ismert.", "Fontos hangszerleletek.", "Stratégiai fekvés a hegyvidék és az alföld között."], "ro": ["Înseamnă 'pietre așezate în cer'.", "Cunoscut pentru numeroasele sale stele și altare.", "Descoperiri importante de instrumente muzicale.", "Locație strategică între zonele montane și de șes."], "en": ["Means 'stones set in the sky'.", "Known for its many stelae and altars.", "Important musical instrument finds.", "Strategic location between highlands and lowlands."] },
        "adv_de": "Pacbitun, was „Steine, die in den Himmel gesetzt wurden“ bedeutet, ist ein wichtiges zeremonielles Zentrum in den Ausläufern der Maya Mountains. Die Stätte ist berühmt für ihre ungewöhnlich hohe Anzahl an Monumenten für eine Stadt ihrer Größe, darunter zahlreiche Stelen und Altäre. Pacbitun diente als strategisches Bindeglied zwischen den Bergressourcen wie Granit und Schiefer und den landwirtschaftlichen Zentren im Tiefland. Archäologische Funde haben hier ein reiches musikalisches Erbe ans Licht gebracht, darunter Tonschellen und Flöten. Die Lage am Rande des Kiefernwaldes verleiht der Stätte eine einzigartige ökologische und atmosphärische Kulisse.",
        "facts_de": [
            "Die Stadt erreichte ihre Blütezeit zwischen 600 und 900 n. Chr.",
            "Es gibt mindestens 20 Stelen und 8 Altäre auf dem Gelände.",
            "Pacbitun liegt in der Nähe des Dorfes San Antonio im Cayo-Distrikt.",
            "Es wurden Belege für eine großflächige Schieferverarbeitung gefunden.",
            "Die höchste Pyramide ragt etwa 10 Meter über den Erdboden.",
            "Es gibt zwei Hauptplätze und mehrere miteinander verbundene Höfe.",
            "Die Stätte war berühmt für ihre hochwertigen Musikinstrumente aus Ton.",
            "Sie ist ein wichtiger Ort für das Studium der regionalen Maya-Wirtschaft."
        ]
    },
    {
        "id": "negroman-ruin-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.0, 16.95],
        "name": { "de": "Negroman (Tipan Chen Uitz) Ruine", "hu": "Negroman (Tipan Chen Uitz) rom", "ro": "Ruina Negroman (Tipan Chen Uitz)", "en": "Negroman (Tipan Chen Uitz) Ruin" },
        "description": { "de": "Eine abgelegene Maya-Stätte in den Vaca-Wäldern.", "hu": "Elszigetelt maja lelőhely a Vaca-erdőben.", "ro": "Un sit mayaș izolat în pădurile Vaca.", "en": "A remote Maya site located in the Vaca forests." },
        "facts": { "de": ["Alter Name Tipan Chen Uitz.", "Bedeutet 'Festung am Brunnen im Berg'.", "Große, aber wenig erforschte Stätte.", "Schwer erreichbar."], "hu": ["Régi neve Tipan Chen Uitz.", "Jelentése 'erőd a kútnál a hegyen'.", "Nagy, de kevéssé kutatott lelőhely.", "Nehezen elérhető."], "ro": ["Nume vechi Tipan Chen Uitz.", "Înseamnă 'fortăreață la fântâna din munte'.", "Situl mare, dar puțin explorat.", "Greu de atins."], "en": ["Ancient name Tipan Chen Uitz.", "Means 'fortress at the well on the hill'.", "Large but little-excavated site.", "Difficult to reach."] },
        "adv_de": "Tipan Chen Uitz, im Volksmund als Negroman bekannt, ist eine riesige und weitgehend unerforschte Maya-Stadt auf dem Vaca-Plateau. Ihr antiker Name bedeutet „Festung am Brunnen im Berg“, was ihre strategische Lage nahe einer lebenswichtigen Wasserquelle unterstreicht. In der Klassik war sie eine bedeutende Regionalmacht, die vermutlich Waldressourcen und Handelswege kontrollierte. Die Stätte verfügt über einen monumentalen Kern mit Pyramiden, die jene bekannterer Ruinen an Größe übertreffen. Da sie schwer zugänglich ist und noch immer größtenteils vom Dschungel bedeckt wird, bietet Negroman ein echtes Abenteuer-Gefühl für Entdecker.",
        "facts_de": [
            "Die Hauptakropolis ragt fast 30 Meter über den Waldboden empor.",
            "Tipan Chen Uitz ist eine der größten Stätten im Cayo-Distrikt.",
            "Sie umfasst mindestens 10 große Plätze und über 100 Gebäude.",
            "Die Stätte wurde erst in den späten 1990er Jahren kartiert.",
            "Sie liegt tief im Vaca Forest Reserve in unwegsamem Gelände.",
            "Archäologen fanden enge politische Verbindungen zur Metropole Caracol.",
            "Der Zugang erfordert ein Allradfahrzeug und oft einen lokalen Guide.",
            "Natur und Architektur verschmelzen hier zu einer wilden Einheit."
        ]
    },
    {
        "id": "spanish-church-lamanai-history-v2",
        "type": "historical",
        "parent": "BZ-OW",
        "coords": [-88.65, 17.76],
        "name": { "de": "Spanische Kirche von Lamanai", "hu": "Lamanai spanyol temploma", "ro": "Biserica spaniolă din Lamanai", "en": "Spanish Church at Lamanai" },
        "description": { "de": "Die Ruinen von zwei spanischen Kirchen aus dem 16. Jahrhundert, die von den Maya zerstört wurden.", "hu": "Két 16. századi spanyol templom romjai, amelyeket a maják leromboltak.", "ro": "Ruinele a două biserici spaniole din secolul al XVI-lea, distruse de mayași.", "en": "The ruins of two 16th-century Spanish churches, which were destroyed by the Maya." },
        "facts": { "de": ["Beweis für den spanischen Missionierungsversuch.", "Symbol des Maya-Widerstands.", "Innerhalb der Lamanai-Stätte gelegen.", "Zeigt die Überlagerung der Kulturen."], "hu": ["A spanyol hittérítési kísérlet bizonyítéka.", "A maja ellenállás szimbóluma.", "A Lamanai lelőhelyen belül található.", "A kultúrák egymásra rétegződését mutatja."], "ro": ["Dovadă a încercării spaniole de misionarism.", "Simbol al rezistenței mayașe.", "Situată în cadrul sitului Lamanai.", "Arată suprapunerea culturilor."], "en": ["Evidence of the Spanish missionizing effort.", "Symbol of Maya resistance.", "Located within the Lamanai site.", "Shows the superimposition of cultures."] },
        "adv_de": "Die Ruinen der spanischen Kirchen in Lamanai sind ein eindrucksvolles Zeugnis des kulturellen Konflikts in der frühen Kolonialzeit Belizes. Im 16. Jahrhundert errichteten Missionare hier zwei Gotteshäuser, um die lokale Maya-Bevölkerung zum Christentum zu bekehren. Die Maya leisteten jedoch heftigen Widerstand, brannten die Kirchen schließlich nieder und vertrieben die Spanier. Heute stehen die skelettartigen Reste aus Ziegeln und Steinen in starkem Kontrast zu den uralten Maya-Tempeln in der Nachbarschaft. Die Ruinen dienen als Denkmal für das Scheitern der spanischen Mission und die Beständigkeit der Maya-Identität in dieser Region.",
        "facts_de": [
            "Die erste Kirche wurde um 1544, die zweite im frühen 17. Jh. erbaut.",
            "Sie befinden sich innerhalb des Lamanai Archaeological Reserve.",
            "Für den Bau wurden teilweise Steine aus antiken Maya-Pyramiden verwendet.",
            "Lamanai war einer der wenigen Orte des erfolgreichen Maya-Widerstands.",
            "Die Ruinen zeigen eine einzigartige Mischung kolonialer Bauformen.",
            "Man erreicht sie per Boot über den New River in Orange Walk.",
            "Die Kirchenmauern stehen heute als malerische Ruinen im Urwald.",
            "Sie verdeutlichen den Übergang von der antiken zur kolonialen Ära."
        ]
    },
    {
        "id": "actun-balam-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.8, 17.3],
        "name": { "de": "Actun Balam (Jaguarpfoten-Höhle)", "hu": "Actun Balam (Jaguár-mancs barlang)", "ro": "Peștera Actun Balam (Gheara Jaguarului)", "en": "Actun Balam (Jaguar Paw Cave)" },
        "description": { "de": "Eine archäologisch bedeutende Höhle, die für ihre Jaguarpfoten-Abdrücke bekannt ist.", "hu": "Régészetileg jelentős barlang, amely jaguármancs-lenyomatairól ismert.", "ro: ": "O peșteră importantă din punct de vedere arheologic, cunoscută pentru amprentele sale de gheare de jaguar.", "en": "An archaeologically significant cave known for its jaguar paw prints." },
        "facts": { "de": ["Bedeutet 'Jaguarpfoten-Höhle'.", "Enthält Maya-Artefakte.", "Teil des Caves Branch Höhlensystems.", "Wurde für Zeremonien genutzt."], "hu": ["Jelentése 'Jaguár-mancs barlang'.", "Maja leleteket tartalmaz.", "A Caves Branch barlangrendszer része.", "Szertartásokra használták."], "ro": ["Înseamnă 'Peștera Ghearei Jaguarului'.", "Conține artefacte mayașe.", "Parte a sistemului de peșteri Caves Branch.", "A fost folosită pentru ceremonii."], "en": ["Means 'Jaguar Paw Cave'.", "Contains Maya artifacts.", "Part of the Caves Branch cave system.", "Was used for ceremonies."] },
        "adv_de": "Actun Balam, die „Jaguarpfoten-Höhle“, ist ein mystischer Ort im Karstgebirge des Cayo-Distrikts. Für die Maya waren Höhlen heilige Portale zur Unterwelt Xibalba. Diese Höhle wurde über Jahrhunderte für Rituale genutzt, was durch zahlreiche Funde von Keramik und Artefakten belegt ist. Berühmt ist sie für ihre spektakulären Tropfsteinformationen und antike Handabdrücke sowie Markierungen, die an Jaguarpfoten erinnern. Ein Besuch der Höhle vermittelt ein tiefes Verständnis für die spirituelle Welt der Maya und ihre Ehrfurcht vor den verborgenen Kräften der Erde.",
        "facts_de": [
            "Die Höhle ist Teil des weitläufigen Caves Branch Flusssystems.",
            "In ihrem Inneren wurden rituelle Opfergaben aus der Klassik gefunden.",
            "Die 'Jaguarpfoten' sind natürliche oder stilisierte Markierungen im Stein.",
            "Der Zugang ist streng reguliert, um die Artefakte zu schützen.",
            "Sie bietet eine beeindruckende Kulisse aus Stalaktiten und Stalagmiten.",
            "Actun Balam liegt inmitten eines privaten Naturschutzgebiets.",
            "Die Höhle diente vermutlich als Ort für Regenrituale.",
            "Man kann sie im Rahmen von spezialisierten Abenteuertouren erkunden."
        ]
    },
    {
        "id": "che-chem-ha-cave-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.1, 17.0],
        "name": { "de": "Che Chem Ha Höhle", "hu": "Che Chem Ha-barlang", "ro": "Peștera Che Chem Ha", "en": "Che Chem Ha Cave" },
        "description": { "de": "Eine Maya-Zeremonialhöhle, die mit intakten Töpferwaren gefüllt ist.", "hu": "Maja szertartási barlang, tele ép kerámiákkal.", "ro": "O peșteră ceremonială mayașă plină cu ceramică intactă.", "en": "A Maya ceremonial cave filled with intact pottery." },
        "facts": { "de": ["Entdeckt von einem lokalen Farmer.", "Enthält Hunderte von Maya-Keramikgefäßen.", "Die Töpfe wurden wahrscheinlich für Rituale verwendet.", "Auf Privatgrund, Führung erforderlich."], "hu": ["Egy helyi farmer fedezte fel.", "Több száz maja kerámiaedényt tartalmaz.", "Az edényeket valószínűleg rituálékhoz használták.", "Magánterületen, vezetés szükséges."], "ro": ["Descoperită de un fermier local.", "Conține sute de vase de ceramică mayașe.", "Vasele au fost probabil folosite pentru ritualuri.", "Pe proprietate privată, este necesar un ghid."], "en": ["Discovered by a local farmer.", "Contains hundreds of Maya pottery vessels.", "Pots were likely used for rituals.", "On private land, requires a guide."] },
        "adv_de": "Die Che Chem Ha Höhle ist ein archäologischer Glücksfall, der in den 1980er Jahren von einem lokalen Bauern entdeckt wurde. Im Gegensatz zu vielen anderen Höhlen blieb sie von Plünderungen verschont, sodass Besucher heute Hunderte von intakten Maya-Keramikgefäßen in ihrer originalen Position sehen können. Die Höhle beherbergt riesige Vorratsgefäße und rituelle Schalen, die oft auf schwer zugänglichen Felsvorsprüngen thronen. Die Artefakte deuten darauf hin, dass der Ort für landwirtschaftliche Rituale und die Anbetung von Regengöttern genutzt wurde. Heute wird die Höhle von der Entdeckerfamilie verwaltet und bietet ein authentisches Erlebnis fernab der großen Touristenmassen.",
        "facts_de": [
            "Die Höhle wurde 1989 zufällig bei der Jagd entdeckt.",
            "Es befinden sich über 200 intakte Maya-Keramiken im Inneren.",
            "Die Funde datieren vorwiegend aus der Zeit zwischen 300 und 900 n. Chr.",
            "Die Morales-Familie führt Besucher persönlich durch die Höhle.",
            "Der Eingang liegt versteckt an einem steilen Hang im Vaca-Plateau.",
            "Die Höhle ist für ihre hervorragende Akustik in den Hauptkammern bekannt.",
            "Sie befindet sich etwa 25 Kilometer südlich von San Ignacio.",
            "Einige der Vorratskrüge sind über einen Meter hoch."
        ]
    },
    {
        "id": "actun-loch-tunich-history-v2",
        "type": "historical",
        "parent": "BZ-SC",
        "coords": [-88.6, 16.7],
        "name": { "de": "Actun Loch Tunich (Schwarzes Loch)", "hu": "Actun Loch Tunich (Fekete Lyuk)", "ro": "Actun Loch Tunich (Gaura Neagră)", "en": "Actun Loch Tunich (Black Hole)" },
        "description": { "de": "Ein riesiges Karst-Sinkloch im Dschungel, das für Abseilabenteuer bekannt ist.", "hu": "Hatalmas karsztos víznyelő a dzsungelben, amely a kötélleereszkedő kalandokról ismert.", "ro": "O dolină carstică gigantică în junglă, cunoscută pentru aventurile de rapel.", "en": "A giant jungle sinkhole in the karst landscape, known for rappelling adventures." },
        "facts": { "de": ["Über 90 Meter tief.", "Abseilen in das Loch ist eine beliebte Touristenaktivität.", "Historisch von den Maya genutzt.", "Im Cockscomb Basin Gebiet."], "hu": ["Több mint 90 méter mély.", "A lyukba való leereszkedés népszerű turisztikai tevékenység.", "Történelmileg a maják használták.", "A Cockscomb Basin területén."], "ro": ["Peste 90 de metri adâncime.", "Rapelul în gaură este o activitate turistică populară.", "Folosit istoric de mayași.", "În zona Bazinului Cockscomb."], "en": ["Over 300 feet deep.", "Rappelling into the hole is a popular tourist activity.", "Historically used by the Maya.", "In the Cockscomb Basin area."] },
        "adv_de": "Actun Loch Tunich, oft als das „Schwarze Loch“ bezeichnet, ist ein gewaltiges Karst-Sinkloch inmitten des unberührten Dschungels. Während es heute vor allem als Ziel für extremes Abseilen bekannt ist, hat es eine tiefe historische Bedeutung. Für die antiken Maya war dieses Sinkloch ein heiliger Ort, ein Zugang zu den Göttern der Unterwelt. Archäologische Funde am Boden des Lochs belegen die rituelle Nutzung dieser beeindruckenden geologischen Formation. Der Abstieg führt über 90 Meter in die Tiefe durch das dichte Blätterdach in eine verborgene Welt aus uralten Bäumen und bizarren Felsformationen, die seit Jahrtausenden fast unverändert geblieben ist.",
        "facts_de": [
            "Das Sinkloch hat eine beeindruckende Tiefe von über 90 Metern.",
            "Es befindet sich innerhalb des Actun Box Ch'iil Reservats.",
            "Der Abstieg beginnt mit einem spektakulären Blick über das Urwald-Baldachin.",
            "In den Höhlen am Grund wurden Maya-Artefakte für Zeremonien entdeckt.",
            "Das Ökosystem am Boden des Lochs unterscheidet sich vom umgebenden Wald.",
            "Die Tour dorthin erfordert eine gute körperliche Fitness.",
            "Für die Maya symbolisierte das Loch den Übergang zum Jenseits.",
            "Es ist eine der spektakulärsten Naturerscheinungen in Zentralbelize."
        ]
    },
    {
        "id": "minanha-ruins-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-88.9, 16.85],
        "name": { "de": "Minanha Ruinen", "hu": "Minanha romok", "ro": "Ruinele Minanha", "en": "Minanha Ruins" },
        "description": { "de": "Eine große, aber abgelegene Maya-Stätte in den Ausläufern der Maya Mountains.", "hu": "Nagy, de elszigetelt maja lelőhely a Maja-hegység lábainál.", "ro": "Un sit mayaș mare, dar izolat, la poalele Munților Maya.", "en": "A large but remote Maya site in the foothills of the Maya Mountains." },
        "facts": { "de": ["Bedeutendes Zentrum in der Spätklassik.", "Wurde von Caracol beeinflusst.", "Wenig ausgegraben und erforscht.", "Schwer zugänglich."], "hu": ["Jelentős központ a késő klasszikus korban.", "Caracol befolyásolta.", "Keveset ásatott és kutatott.", "Nehezen megközelíthető."], "ro": ["Centru important în perioada clasică târzie.", "A fost influențat de Caracol.", "Puțin excavat și cercetat.", "Greu accesibil."], "en": ["Major center in the Late Classic period.", "Was influenced by Caracol.", "Little excavated and researched.", "Difficult to access."] },
        "adv_de": "Minanha ist eine große, erst spät erforschte Maya-Stadt auf einem hohen Kamm im North Vaca Plateau. In der Spätklassik entwickelte sie sich zu einer bedeutenden Regionalmacht, die vermutlich als Pufferstaat zwischen den rivalisierenden Metropolen Caracol und Naranjo diente. Die Stätte beeindruckt durch ihre durchdachte Architektur, darunter eine königliche Akropolis und mehrere Zeremonialplätze. Besonders spannend für Forscher ist das plötzliche Verlassen der Stadt im 9. Jahrhundert, was Minanha zu einem Paradebeispiel für die politische Instabilität jener Ära macht. Da sie sehr abgelegen liegt, sind die Ruinen noch immer tief im Dschungel verborgen und verströmen eine Atmosphäre unberührter Entdeckung.",
        "facts_de": [
            "Minanha erreichte ihren Höhepunkt zwischen 675 und 800 n. Chr.",
            "Der königliche Palastkomplex ist das Herzstück der Anlage.",
            "Die Stätte liegt etwa 25 km südlich von San Ignacio im Cayo-Distrikt.",
            "Sie war der wissenschaftlichen Gemeinschaft bis in die 1990er Jahre fast unbekannt.",
            "Es gibt Hinweise darauf, dass die Stadt um 825 n. Chr. fluchtartig verlassen wurde.",
            "Bisher wurden über 100 Gebäude innerhalb des Stadtkerns kartiert.",
            "Sie befindet sich an einem der höchsten bewohnbaren Punkte des Plateaus.",
            "Die Anreise ist ein Abenteuer für sich und erfordert einen Geländewagen."
        ]
    },
    {
        "id": "ix-chel-shrine-history-v2",
        "type": "historical",
        "parent": "BZ-CY",
        "coords": [-89.0, 17.1],
        "name": { "de": "Ix Chel Schrein", "hu": "Ix Chel szentély", "ro": "Sanctuarul Ix Chel", "en": "Ix Chel Shrine" },
        "description": { "de": "Ein moderner Schrein, der der Maya-Mondgöttin Ix Chel gewidmet ist.", "hu": "Modern szentély, amelyet a maja holdistennőnek, Ix Chelnek szenteltek.", "ro": "Un sanctuar modern dedicat zeiței mayașe a lunii, Ix Chel.", "en": "A modern shrine dedicated to the Maya moon goddess, Ix Chel." },
        "facts": { "de": ["Befindet sich auf dem Chaa Creek Anwesen.", "Ehrt die Göttin der Medizin und Fruchtbarkeit.", "Umgeben von einem Medizinpflanzen-Pfad.", "Verbindet alte Überzeugungen mit der Gegenwart."], "hu": ["A Chaa Creek birtokon található.", "A gyógyítás és termékenység istennőjét tiszteli.", "Gyógynövényösvény veszi körül.", "Összeköti a régi hiedelmeket a jelennel."], "ro": ["Situat pe proprietatea Chaa Creek.", "Onorează zeița medicinei și a fertilității.", "Înconjurată de o potecă de plante medicinale.", "Conectează credințele antice cu prezentul."], "en": ["Located at the Chaa Creek estate.", "Honors the goddess of medicine and fertility.", "Surrounded by a medicinal plant trail.", "Connects ancient beliefs with the present."] },
        "adv_de": "Der Ix Chel Schrein bei Chaa Creek ist eine moderne Hommage an eine der wichtigsten Gottheiten im Maya-Pantheon. Ix Chel war die Göttin des Mondes, der Fruchtbarkeit, der Medizin und des Webens und wurde von Maya-Frauen in der gesamten Region verehrt. Der Schrein liegt an einem Pfad für Heilpflanzen und verbindet das antike Wissen über Heilung mit der natürlichen Umgebung des Macal-Tals. Obwohl es sich um eine zeitgenössische Installation handelt, ist sie in einem Stil erbaut, der die alten Traditionen ehrt. Inmitten tropischer Gärten bietet der Schrein einen Raum für Besinnung über die Rolle des Weiblichen in der Maya-Kultur und die tiefe Verbindung zwischen Gesundheit und Natur.",
        "facts_de": [
            "Der Schrein ist der Maya-Mondgöttin Ix Chel gewidmet.",
            "Er befindet sich auf dem Gelände des Chaa Creek Naturschutzgebiets.",
            "Er ist ein zentraler Bestandteil des 'Rainforest Medicine Trail'.",
            "Ix Chel wird traditionell mit dem Regenbogen und dem Wasser assoziiert.",
            "Der Schrein zeigt Symbole für das traditionelle Weben und Heilen.",
            "Er dient als Bildungsstätte für Maya-Mythologie und Spiritualität.",
            "Besucher können dort über 50 Arten von Heilpflanzen kennenlernen.",
            "Die Lage im Wald macht ihn zu einem Ort der Ruhe und Meditation."
        ]
    }
]

def format_poi(poi):
    return f"""  {{
    id: "{poi['id']}",
    type: "{poi['type']}",
    parent: "{poi['parent']}",
    coords: {poi['coords']},
    name: {json.dumps(poi['name'], ensure_ascii=False)},
    description: {json.dumps(poi['description'], ensure_ascii=False)},
    facts: {json.dumps(poi['facts'], ensure_ascii=False)},
    descriptionAdvanced: {{
      de: "{poi['adv_de']}",
      hu: "",
      ro: "",
      en: ""
    }},
    factsAdvanced: {{
      de: {json.dumps(poi['facts_de'], ensure_ascii=False)},
      hu: [],
      ro: [],
      en: []
    }}
  }}"""

output_content = 'import type { POI } from "./poi";\n\n'
output_content += 'export const poiExtraBelizeHistoryV2: POI[] = [\n'
output_content += ',\n'.join([format_poi(poi) for poi in history_data])
output_content += '\n];\n'

with open('lib/visualLab/data/poiExtraBelizeHistoryV2.ts', 'w', encoding='utf-8') as f:
    f.write(output_content)

print("Rebuilt lib/visualLab/data/poiExtraBelizeHistoryV2.ts successfully.")
