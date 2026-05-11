import type { POI } from "./poi";

export const poiExtraIsraelCitiesV2: POI[] = [
  {
    id: "jerusalem-cities-v2",
    type: "state-capital",
    parent: "IL-JM",
    coords: [35.2137, 31.7683],
    name: { de: "Jerusalem", hu: "Jeruzsálem", ro: "Ierusalim", en: "Jerusalem" },
    description: {
      de: "Jerusalem ist die Hauptstadt von Israel und eine der ältesten Städte der Welt, heilig für drei Weltreligionen.",
      hu: "Jeruzsálem Izrael fővárosa és a világ egyik legrégebbi városa, amely három világvallás számára is szent hely.",
      ro: "Ierusalim este capitala Israelului și una dintre cele mai vechi așezări din lume, sfântă pentru trei religii monoteiste.",
      en: "Jerusalem is the capital of Israel and one of the oldest cities in the world, holy to three major world religions."
    },
    facts: {
      de: ["Heilig für Judentum, Christentum und Islam.", "Befindet sich in den Judäischen Bergen.", "Bekannt für die Klagemauer."],
      hu: ["A zsidóság, a kereszténység és az iszlám számára is szent.", "A Júdeai-hegységben található.", "A Siratófalról ismert."],
      ro: ["Sfântă pentru iudaism, creștinism și islam.", "Situată în Munții Iudeei.", "Cunoscută pentru Zidul Plângerii."],
      en: ["Holy to Judaism, Christianity, and Islam.", "Located in the Judaean Mountains.", "Known for the Western Wall."]
    },
    descriptionAdvanced: {
      de: "Jerusalem, hebräisch Jeruschalajim, ist die Hauptstadt des Staates Israel und mit rund 970.000 Einwohnern die größte Stadt des Landes. Die Geschichte der Stadt reicht über 4.000 Jahre zurück, erste Spuren einer kanaanitischen Besiedlung stammen aus dem 4. Jahrtausend v. Chr. Um 1000 v. Chr. machte König David sie zur Hauptstadt des vereinigten Königreiches Israel, sein Sohn Salomo errichtete den ersten Tempel. Nach der Staatsgründung Israels 1948 wurde Westjerusalem Hauptstadt, 1967 nach dem Sechstagekrieg vereinigt. Die Altstadt mit Klagemauer, Felsendom und Grabeskirche zählt seit 1981 zum UNESCO-Welterbe. Jerusalem ist heiligste Stätte für Juden, drittheiligste für Muslime und zentraler Pilgerort für Christen."
    },
    factsAdvanced: {
      de: ["Rund 970.000 Einwohner, größte Stadt Israels.", "Erste Besiedlung im 4. Jahrtausend v. Chr.", "Um 1000 v. Chr. von König David zur Hauptstadt erhoben.", "Staat Israel proklamiert am 14. Mai 1948 in Tel Aviv, Westjerusalem wurde Hauptstadt.", "Wiedervereinigt 1967 nach dem Sechstagekrieg.", "Altstadt seit 1981 UNESCO-Weltkulturerbe.", "Klagemauer ist Überrest der Westmauer des Zweiten Tempels."]
    }, image: "/poi-images/jerusalem-cities-v2.webp"},
  {
    id: "tel-aviv-cities-v2",
    type: "city",
    parent: "IL-TA",
    coords: [34.7818, 32.0853],
    name: { de: "Tel Aviv-Jaffa", hu: "Tel-Aviv", ro: "Tel Aviv", en: "Tel Aviv" },
    description: {
      de: "Tel Aviv ist das wirtschaftliche und technologische Zentrum Israels, bekannt für sein pulsierendes Nachtleben.",
      hu: "Tel-Aviv Izrael gazdasági és technológiai központja, amely pezsgő éjszakai életéről és tengerpartjairól híres.",
      ro: "Tel Aviv este centrul economic și tehnologic al Israelului, renumit pentru viața de noapte vibrantă și plaje.",
      en: "Tel Aviv is the economic and technological center of Israel, known for its vibrant nightlife and beaches."
    },
    facts: {
      de: ["1909 am Rande von Jaffa gegründet.", "Bekannt als die Weiße Stadt für Bauhaus-Architektur.", "Ein wichtiges globales Technologiezentrum."],
      hu: ["1909-ben alapították Jaffa peremén.", "Fehér Városként ismert Bauhaus építészete miatt.", "Jelentős globális technológiai csomópont."],
      ro: ["Fondată în 1909 la periferia orașului Jaffa.", "Cunoscută ca Orașul Alb pentru arhitectura Bauhaus.", "Un important centru tehnologic global."],
      en: ["Founded in 1909 on the outskirts of Jaffa.", "Known as the White City for its Bauhaus architecture.", "A major global technology hub."]
    },
    descriptionAdvanced: {
      de: "Tel Aviv-Jaffa wurde am 11. April 1909 von 66 jüdischen Familien als nördlicher Vorort des antiken Hafens Jaffa gegründet und ist heute mit rund 470.000 Einwohnern die zweitgrößte Stadt Israels, in der Metropolregion Gusch Dan leben über 4 Millionen Menschen. Der Name bedeutet „Frühlingshügel“. 1950 wurde sie offiziell mit dem mehrere tausend Jahre alten Jaffa zusammengelegt. Tel Aviv gilt als wirtschaftliche und technologische Hauptstadt Israels mit lebendiger Start-up-Szene. Die „Weiße Stadt“ mit über 4.000 Bauhaus-Gebäuden, errichtet ab den 1930er Jahren von deutsch-jüdischen Architekten, wurde 2003 UNESCO-Welterbe. Hier wurde am 14. Mai 1948 von David Ben-Gurion der Staat Israel ausgerufen."
    },
    factsAdvanced: {
      de: ["Am 11. April 1909 von 66 Familien als Vorort Jaffas gegründet.", "Rund 470.000 Einwohner, Metropolregion Gusch Dan über 4 Millionen.", "Im Unabhängigkeitssaal proklamierte Ben-Gurion am 14. Mai 1948 den Staat Israel.", "1950 mit dem antiken Jaffa zur Doppelstadt Tel Aviv-Jaffa vereinigt.", "Über 4.000 Bauhaus-Gebäude bilden die „Weiße Stadt“.", "Seit 2003 UNESCO-Weltkulturerbe.", "Wichtigstes Technologie- und Finanzzentrum Israels.", "Spitzname „die Stadt, die niemals schläft“."]
    }, image: "/poi-images/tel-aviv-cities-v2.webp"},
  {
    id: "haifa-cities-v2",
    type: "city",
    parent: "IL-HA",
    coords: [34.9892, 32.7940],
    name: { de: "Haifa", hu: "Haifa", ro: "Haifa", en: "Haifa" },
    description: {
      de: "Haifa ist die drittgrößte Stadt Israels und liegt wunderschön an den Hängen des Berges Karmel am Mittelmeer.",
      hu: "Haifa Izrael harmadik legnagyobb városa, amely gyönyörűen fekszik a Kármel-hegy lejtőin, a Földközi-tenger partján.",
      ro: "Haifa este al treilea oraș ca mărime din Israel, situat pitoresc pe versanții Muntelui Carmel, la Marea Mediterană.",
      en: "Haifa is Israel's third-largest city, beautifully situated on the slopes of Mount Carmel facing the Mediterranean."
    },
    facts: {
      de: ["Heimat des Bahá'í-Weltzentrums.", "Israels wichtigster Seehafen.", "Zeichnet sich durch eine gemischte Bevölkerung aus."],
      hu: ["A Bahá'í Világközpont otthona.", "Izrael legfontosabb tengeri kikötője.", "A lakosság vegyes, békés együttélés jellemzi."],
      ro: ["Găzduiește Centrul Mondial Bahá'í.", "Principalul port maritim al Israelului.", "Are o populație mixtă care trăiește în armonie."],
      en: ["Home to the Bahá'í World Centre.", "Israel's major seaport.", "Features a mixed population living in harmony."]
    },
    descriptionAdvanced: {
      de: "Haifa ist mit rund 285.000 Einwohnern die drittgrößte Stadt Israels und liegt an den Hängen des Berges Karmel an der Mittelmeerküste. Die Stadt wurde bereits in römischer Zeit erwähnt und entwickelte sich unter osmanischer Herrschaft im 18. Jahrhundert zu einem bedeutenden Hafen. Großen Aufschwung erlebte sie ab 1905 mit dem Bau der Hedschasbahn nach Damaskus. Nach der Staatsgründung 1948 wurde Haifa wichtigster Seehafen Israels und Industriestandort mit Raffinerien, Werften und Hochtechnologie. Die Stadt ist Sitz des Technion, der ältesten Universität Israels (gegründet 1912). Berühmt sind die terrassenförmigen Bahai-Gärten am Karmel-Hang, seit 2008 UNESCO-Welterbe. Haifa gilt als Vorbild für friedliches Zusammenleben von Juden, Arabern, Drusen und Bahai."
    },
    factsAdvanced: {
      de: ["Rund 285.000 Einwohner, drittgrößte Stadt Israels.", "Liegt an den Hängen des Berges Karmel.", "Wichtigster Seehafen Israels.", "Sitz des Technion, gegründet 1912.", "Bahai-Weltzentrum mit hängenden Gärten.", "Bahai-Gärten seit 2008 UNESCO-Weltkulturerbe.", "Bedeutender Standort der Hightech-Industrie.", "Vorbild für jüdisch-arabisches Zusammenleben."]
    }, image: "/poi-images/haifa-cities-v2.webp"},
  {
    id: "rishon-lezion-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8019, 31.9730],
    name: { de: "Rischon LeZion", hu: "Risón Lecijón", ro: "Rishon LeZion", en: "Rishon LeZion" },
    description: {
      de: "Rischon LeZion ist die viertgrößte Stadt Israels und liegt in der zentralen Küstenebene südlich von Tel Aviv.",
      hu: "Risón Lecijón Izrael negyedik legnagyobb városa, amely a központi tengerparti síkságon, Tel-Avivtól délre található.",
      ro: "Rishon LeZion este al patrulea oraș ca mărime din Israel, situat în câmpia de coastă centrală, la sud de Tel Aviv.",
      en: "Rishon LeZion is the fourth-largest city in Israel, located in the central coastal plain south of Tel Aviv."
    },
    facts: {
      de: ["Wurde 1882 von jüdischen Einwanderern gegründet.", "Der Name bedeutet Erster in Zion.", "Bekannt für seine Weinindustrie."],
      hu: ["1882-ben alapították zsidó bevándorlók.", "A név jelentése: Első Sionban.", "Boriparáról ismert település."],
      ro: ["Fondat în 1882 de imigranți evrei.", "Numele înseamnă Primul în Sion.", "Cunoscut pentru industria sa viticolă."],
      en: ["Founded in 1882 by Jewish immigrants.", "The name translates to First to Zion.", "Known for its historical wine industry."]
    },
    descriptionAdvanced: {
      de: "Rischon LeZion wurde 1882 von zehn jüdischen Familien aus Russland im Rahmen der ersten Alija als landwirtschaftliche Siedlung gegründet und ist heute mit rund 260.000 Einwohnern die viertgrößte Stadt Israels. Der Name bedeutet „Erster in Zion“ und bezieht sich auf den biblischen Vers Jesaja 41,27. Die Siedler kämpften anfangs mit Wassermangel, Krankheiten und Misserfolgen, bis Baron Edmond de Rothschild die Kolonie unterstützte und den Weinbau förderte. Die Carmel-Weinkellerei von 1890 ist eine der ältesten und bekanntesten Israels. Hier entstand 1898 die erste hebräischsprachige Schule der Neuzeit, das blau-weiße Banner wurde hier erstmals als jüdische Flagge gehisst, und die israelische Nationalhymne Hatikwa wurde hier zum ersten Mal gesungen."
    },
    factsAdvanced: {
      de: ["1882 als erste Siedlung der ersten Alija gegründet.", "Rund 260.000 Einwohner, viertgrößte Stadt Israels.", "Name bedeutet „Erster in Zion“ nach Jesaja 41,27.", "Baron Edmond de Rothschild unterstützte die Kolonie ab 1883.", "Carmel-Weinkellerei seit 1890 in Betrieb.", "Erste hebräische Schule der Neuzeit 1898 gegründet.", "Israelische Nationalhymne Hatikwa hier erstmals gesungen.", "Liegt südlich von Tel Aviv in der zentralen Küstenebene."]
    }, image: "/poi-images/rishon-lezion-cities-v2.webp"},
  {
    id: "petah-tikva-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8878, 32.0840],
    name: { de: "Petach Tikwa", hu: "Petah Tikva", ro: "Petah Tikva", en: "Petah Tikva" },
    description: {
      de: "Petach Tikwa, bekannt als die Mutter der Moschawot, ist eine wichtige Industriestadt östlich von Tel Aviv.",
      hu: "Petah Tikva, a Mosávok Anyjaként ismert nagyváros, jelentős ipari központ Tel-Avivtól keletre.",
      ro: "Petah Tikva, cunoscută ca Mama așezărilor Moshavot, este un important oraș industrial la est de Tel Aviv.",
      en: "Petah Tikva, known as the Mother of the Moshavot, is a major industrial city located east of Tel Aviv."
    },
    facts: {
      de: ["Gegründet 1878 als landwirtschaftliche Siedlung.", "Ein prominentes Industrie- und High-Tech-Zentrum.", "Hat den zweitgrößten Industriesektor Israels."],
      hu: ["1878-ban alapították mezőgazdasági településként.", "Kiemelkedő ipari és csúcstechnológiai központ.", "Izrael második legnagyobb ipari szektorával rendelkezik."],
      ro: ["Fondat în 1878 ca așezare agricolă.", "Un centru proeminent industrial și de înaltă tehnologie.", "Are al doilea cel mai mare sector industrial din Israel."],
      en: ["Founded in 1878 as an agricultural settlement.", "A prominent industrial and high-tech center.", "Holds the second-largest industrial sector in Israel."]
    },
    descriptionAdvanced: {
      de: "Petach Tikwa, hebräisch für „Tor der Hoffnung“, wurde 1878 von orthodoxen Juden aus Jerusalem als erste moderne jüdische landwirtschaftliche Siedlung in Palästina gegründet. Heute leben in der Stadt östlich von Tel Aviv rund 250.000 Menschen. Sie wird als „Mutter der Moschawot“ bezeichnet, da sie Vorbild für alle weiteren landwirtschaftlichen Kolonien war. Die ersten Jahre waren von Malaria und Misserfolgen geprägt, bis Baron Edmond de Rothschild die Siedlung ab 1883 unterstützte. Heute ist Petach Tikwa ein bedeutendes Industrie- und Hightech-Zentrum mit dem Sitz vieler internationaler Konzerne wie IBM, Oracle und Intel Israel. Das renommierte Rabin Medical Center ist eines der größten Krankenhäuser des Landes."
    },
    factsAdvanced: {
      de: ["1878 als erste moderne landwirtschaftliche Siedlung gegründet.", "Rund 250.000 Einwohner.", "Name bedeutet „Tor der Hoffnung“ nach Hosea 2,17.", "Bekannt als „Mutter der Moschawot“.", "Zweitgrößter Industriesektor Israels nach Tel Aviv.", "Hauptsitz von Intel Israel, Oracle und IBM Israel.", "Rabin Medical Center, eines der größten Krankenhäuser.", "Liegt östlich von Tel Aviv in der Scharon-Ebene."]
    }, image: "/poi-images/petah-tikva-cities-v2.webp"},
  {
    id: "ashdod-cities-v2",
    type: "city",
    parent: "IL-D",
    coords: [34.6553, 31.7915],
    name: { de: "Aschdod", hu: "Asdod", ro: "Așdod", en: "Ashdod" },
    description: {
      de: "Aschdod ist eine bedeutende Küstenstadt und beherbergt den größten Hafen Israels, der den Großteil der Fracht abwickelt.",
      hu: "Asdod jelentős tengerparti város, amely Izrael legnagyobb kikötőjének ad otthont, és a teherforgalom nagy részét bonyolítja.",
      ro: "Așdod este un important oraș de coastă și cel mai mare port din Israel, manipulând majoritatea mărfurilor din țară.",
      en: "Ashdod is a major coastal city and home to Israel's largest port, handling the majority of the country's cargo."
    },
    facts: {
      de: ["Zählt zu den ältesten Städten der Welt.", "Die moderne Stadt wurde 1956 gegründet.", "Wichtiges regionales Industriezentrum."],
      hu: ["A világ egyik legrégebbi városaként tartják számon.", "A modern várost 1956-ban alapították.", "Fontos regionális ipari központ."],
      ro: ["Considerat unul dintre cele mai vechi orașe din lume.", "Orașul modern a fost fondat în 1956.", "Important centru industrial regional."],
      en: ["One of the oldest recorded cities in the world.", "The modern city was established in 1956.", "Important regional industrial center."]
    },
    descriptionAdvanced: {
      de: "Aschdod gehört zu den ältesten Hafenstädten der Welt mit über 3.500 Jahren Geschichte und wurde bereits in den Schriften der Philister, in der hebräischen Bibel und bei den Assyrern erwähnt. Die moderne Stadt wurde am 1. Mai 1956 an der Mittelmeerküste, etwa 32 Kilometer südlich von Tel Aviv, neu gegründet. Heute leben hier rund 225.000 Einwohner. Aschdod beherbergt den größten Hafen Israels, der etwa 60 % des gesamten Frachtumschlags des Landes abwickelt. Die Stadt entwickelte sich rasch durch die Einwanderung jüdischer Gemeinden aus Marokko, dem Irak und nach 1990 aus der ehemaligen Sowjetunion und Äthiopien. Aschdod ist heute ein wichtiges Industriezentrum mit Raffinerie, Kraftwerk und petrochemischer Industrie sowie ein bedeutendes Kulturzentrum mit Konzertsaal und Museen."
    },
    factsAdvanced: {
      de: ["Eine der ältesten Hafenstädte der Welt, über 3.500 Jahre alt.", "Moderne Stadt am 1. Mai 1956 neu gegründet.", "Rund 225.000 Einwohner.", "Größter Frachthafen Israels mit etwa 60 % des Umschlags.", "Bedeutende marokkanische und georgische Gemeinden.", "Wichtiger Standort der petrochemischen Industrie.", "Liegt 32 km südlich von Tel Aviv.", "In der Bibel als Stadt der Philister erwähnt."]
    }, image: "/poi-images/ashdod-cities-v2.webp"},
  {
    id: "netanya-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8516, 32.3215],
    name: { de: "Netanja", hu: "Netánja", ro: "Netanya", en: "Netanya" },
    description: {
      de: "Netanja ist ein beliebter Ferienort an der Mittelmeerküste, der für seine langen, schönen Sandstrände bekannt ist.",
      hu: "Netánja egy népszerű üdülőváros a Földközi-tenger partján, amely hosszú, gyönyörű homokos strandjairól ismert.",
      ro: "Netanya este o stațiune populară pe coasta Mării Mediterane, renumită pentru plajele sale lungi și frumoase.",
      en: "Netanya is a popular resort city on the Mediterranean coast, known for its extensive and beautiful sandy beaches."
    },
    facts: {
      de: ["Benannt nach dem Philanthropen Nathan Straus.", "Ein wichtiges Ziel für Touristen.", "Aufgrund der Industrie als Diamantenstadt bekannt."],
      hu: ["Nathan Straus filantrópról nevezték el.", "Fontos turisztikai célpont.", "Ipari háttere miatt Gyémántvárosként is ismert."],
      ro: ["Numit după filantropul Nathan Straus.", "O destinație turistică majoră.", "Cunoscut ca Orașul Diamantelor datorită industriei sale."],
      en: ["Named after the philanthropist Nathan Straus.", "A major destination for tourists.", "Known as the Diamond City for its industry."]
    },
    descriptionAdvanced: {
      de: "Netanja wurde 1929 als landwirtschaftliche Siedlung gegründet und nach dem amerikanisch-jüdischen Philanthropen Nathan Straus benannt, der die Gründung großzügig unterstützte. Die Stadt liegt etwa 30 Kilometer nördlich von Tel Aviv an der Mittelmeerküste und zählt heute rund 230.000 Einwohner. Mit ihren 14 Kilometer langen Sandstränden, den Steilküsten und der lebhaften Promenade ist Netanja eines der beliebtesten Urlaubsziele Israels. Ab den 1940er Jahren entwickelte sich die Stadt zum Zentrum der israelischen Diamantenindustrie, weshalb sie den Beinamen „Diamantenstadt“ trägt. Heute werden hier rund 50 % des israelischen Diamantenexports verarbeitet. Eine besonders große Gemeinschaft von Einwanderern aus Frankreich und Argentinien prägt das Stadtbild."
    },
    factsAdvanced: {
      de: ["1929 gegründet, benannt nach Nathan Straus.", "Rund 230.000 Einwohner.", "14 km lange Sandstrände an der Mittelmeerküste.", "Zentrum der israelischen Diamantenindustrie.", "Verarbeitet rund 50 % des israelischen Diamantenexports.", "Beliebtes Urlaubsziel mit lebhafter Strandpromenade.", "Große französische und argentinische Einwanderergemeinde.", "Liegt 30 km nördlich von Tel Aviv."]
    }, image: "/poi-images/netanya-cities-v2.webp"},
  {
    id: "beersheba-cities-v2",
    type: "city",
    parent: "IL-D",
    coords: [34.7915, 31.2518],
    name: { de: "Be'er Scheva", hu: "Beér-Seva", ro: "Beer Șeva", en: "Beersheba" },
    description: {
      de: "Be'er Scheva ist die größte Stadt in der Wüste Negev und wird oft als die Hauptstadt des Südens bezeichnet.",
      hu: "Beér-Seva a Negev-sivatag legnagyobb városa, amelyet gyakran a déli régió fővárosának is neveznek.",
      ro: "Beer Șeva este cel mai mare oraș din deșertul Negev, deseori numit capitala regiunii de sud a Israelului.",
      en: "Beersheba is the largest city in the Negev desert, often referred to as the capital of the southern region."
    },
    facts: {
      de: ["Heimat der Ben-Gurion-Universität.", "Hat Wurzeln, die bis in biblische Zeiten zurückreichen.", "Ein schnell wachsendes Technologiezentrum."],
      hu: ["A Ben-Gurion Egyetem székhelye.", "Gyökerei a bibliai időkig nyúlnak vissza.", "Gyorsan növekvő technológiai központ."],
      ro: ["Găzduiește Universitatea Ben-Gurion.", "Are rădăcini care datează din vremuri biblice.", "Un centru tehnologic cu creștere rapidă."],
      en: ["Home to Ben-Gurion University of the Negev.", "Has roots dating back to biblical times.", "A rapidly growing technology and cyber hub."]
    },
    descriptionAdvanced: {
      de: "Be'er Scheva, biblisch „Brunnen des Eides“, ist mit rund 215.000 Einwohnern die größte Stadt der Negev-Wüste und wird oft als „Hauptstadt des Südens“ bezeichnet. Die Geschichte der Stätte reicht bis in die Bronzezeit zurück, archäologische Funde belegen eine Besiedlung seit dem 4. Jahrtausend v. Chr. In der Bibel ist sie eng mit den Erzvätern Abraham, Isaak und Jakob verbunden. Die antike Tel Be'er Scheva ist seit 2005 UNESCO-Welterbe. Die moderne Stadt wuchs nach der Staatsgründung Israels 1948 rasch durch Einwanderer aus Nordafrika, dem Irak und der Sowjetunion. Heute beherbergt sie die Ben-Gurion-Universität, gegründet 1969, und ist ein dynamisches Zentrum für Cybersecurity und Wüstenforschung."
    },
    factsAdvanced: {
      de: ["Rund 215.000 Einwohner, größte Stadt im Negev.", "Besiedlung seit dem 4. Jahrtausend v. Chr.", "Name bedeutet „Brunnen des Eides“ aus Genesis 21.", "Tel Be'er Scheva seit 2005 UNESCO-Weltkulturerbe.", "Ben-Gurion-Universität gegründet 1969.", "Wichtiges Zentrum für Cybersecurity und Hightech.", "Beduinenmarkt jeden Donnerstag traditionsreich.", "Hauptstadt des Südens Israels."]
    }, image: "/poi-images/beersheba-cities-v2.webp"},
  {
    id: "bnei-brak-cities-v2",
    type: "city",
    parent: "IL-TA",
    coords: [34.8327, 32.0849],
    name: { de: "Bnei Brak", hu: "Bnei Brak", ro: "Bnei Brak", en: "Bnei Brak" },
    description: {
      de: "Bnei Brak ist eine dicht besiedelte Stadt östlich von Tel Aviv, die als wichtiges Zentrum des ultraorthodoxen Judentums gilt.",
      hu: "Bnei Brak egy sűrűn lakott város Tel-Avivtól keletre, amely az ultraortodox zsidóság egyik legfontosabb központja.",
      ro: "Bnei Brak este un oraș dens populat la est de Tel Aviv, recunoscut ca un centru major al iudaismului ultraortodox.",
      en: "Bnei Brak is a densely populated city east of Tel Aviv, known as a major center of Haredi Judaism."
    },
    facts: {
      de: ["Eine der am dichtesten besiedelten Städte in Israel.", "Zentrum der orthodoxen jüdischen Kultur.", "Der Lebensstil wird von religiösen Gesetzen bestimmt."],
      hu: ["Izrael egyik legsűrűbben lakott városa.", "Az ortodox zsidó kultúra fellegvára.", "Az életmódot szigorú vallási törvények szabályozzák."],
      ro: ["Unul dintre cele mai dens populate orașe din Israel.", "Centrul culturii evreiești ortodoxe.", "Stilul de viață este guvernat de legile religioase."],
      en: ["One of the most densely populated cities in Israel.", "Center of Orthodox Jewish culture.", "Has a lifestyle governed strictly by religious law."]
    },
    descriptionAdvanced: {
      de: "Bnei Brak ist eine der dichtest besiedelten Städte der Welt und das wichtigste Zentrum des ultraorthodoxen, charedischen Judentums in Israel. Die Stadt mit rund 215.000 Einwohnern wurde 1924 von chassidischen Juden aus Polen unter Führung des Rabbiners Yitzchok Gerstenkorn als landwirtschaftliche Siedlung östlich von Tel Aviv gegründet. Der Name geht auf eine biblische Stadt zurück, die im Buch Josua als Erbteil des Stammes Dan erwähnt wird. Über 90 % der Bevölkerung leben streng nach religiösem Gesetz, mit zahlreichen Talmudhochschulen, Synagogen und religiösen Verlagen. Die Geburtenrate gehört zu den höchsten der Welt, und das Durchschnittsalter ist mit unter 20 Jahren ungewöhnlich niedrig. Trotz hoher Armut blüht eine ausgeprägte religiöse Kultur."
    },
    factsAdvanced: {
      de: ["Rund 215.000 Einwohner.", "1924 von chassidischen Juden aus Polen gegründet.", "Eine der dichtest besiedelten Städte der Welt.", "Über 90 % der Einwohner sind ultraorthodox (charedisch).", "Durchschnittsalter unter 20 Jahren.", "Sitz zahlreicher bedeutender Jeschiwot.", "Nach biblischer Stadt aus Josua 19,45 benannt.", "Liegt östlich von Tel Aviv."]
    }, image: "/poi-images/bnei-brak-cities-v2.webp"},
  {
    id: "holon-cities-v2",
    type: "city",
    parent: "IL-TA",
    coords: [34.7712, 32.0158],
    name: { de: "Cholon", hu: "Holon", ro: "Holon", en: "Holon" },
    description: {
      de: "Cholon ist eine Stadt am zentralen Küstenstreifen, die für ihren starken Fokus auf Museen und Familienaktivitäten bekannt ist.",
      hu: "Holon a központi tengerparti sávban fekvő város, amely a múzeumokra és a családi tevékenységekre helyezett hangsúlyról ismert.",
      ro: "Holon este un oraș pe fâșia de coastă centrală, cunoscut pentru accentul puternic pus pe muzee și activități de familie.",
      en: "Holon is a city on the central coastal strip, known for its strong focus on museums and family-oriented activities."
    },
    facts: {
      de: ["Wird oft als die Stadt der Kinder bezeichnet.", "Heimat des Design Museum Holon.", "Beherbergt eine große samaritanische Gemeinde."],
      hu: ["Gyakran a Gyermekek Városának is nevezik.", "A Design Museum Holon otthona.", "Jelentős szamaritánus közösség él itt."],
      ro: ["Deseori numit Orașul Copiilor.", "Găzduiește Design Museum Holon.", "Are o mare comunitate samariteană."],
      en: ["Often called the Children's City.", "Home to the renowned Design Museum Holon.", "Hosts a large Samaritan community."]
    },
    descriptionAdvanced: {
      de: "Cholon wurde 1935 von zionistischen Pionieren als Arbeitersiedlung südlich von Tel Aviv gegründet und ist heute mit rund 200.000 Einwohnern die siebtgrößte Stadt Israels. Der Name bedeutet auf Hebräisch „Sand“ und verweist auf die ursprüngliche Lage in den Sanddünen der Küstenebene. Cholon entwickelte sich rasch zu einem wichtigen Industriezentrum, vor allem in der Textil-, Druck- und Lebensmittelindustrie. Seit den 2000er Jahren positioniert sich die Stadt unter Bürgermeister Moti Sasson als „Kinderstadt“ Israels mit dem 2001 eröffneten Israelischen Kindermuseum, dem Mediatheque-Theater und dem von Ron Arad entworfenen Design Museum Holon (2010). Eine bedeutende Gemeinschaft der Samaritaner mit etwa 380 Mitgliedern lebt im Stadtteil Neve Pinchas."
    },
    factsAdvanced: {
      de: ["1935 als Arbeitersiedlung gegründet.", "Rund 200.000 Einwohner, siebtgrößte Stadt Israels.", "Name bedeutet auf Hebräisch „Sand“.", "Bekannt als „Kinderstadt“ Israels.", "Design Museum Holon eröffnet 2010, entworfen von Ron Arad.", "Israelisches Kindermuseum seit 2001.", "Heimat einer der zwei letzten Samaritanergemeinden weltweit.", "Liegt südlich von Tel Aviv."]
    }, image: "/poi-images/holon-cities-v2.webp"},
  {
    id: "ramat-gan-cities-v2",
    type: "city",
    parent: "IL-TA",
    coords: [34.8106, 32.0823],
    name: { de: "Ramat Gan", hu: "Ramat Gan", ro: "Ramat Gan", en: "Ramat Gan" },
    description: {
      de: "Ramat Gan ist eine Nachbarstadt von Tel Aviv, in der sich die israelische Diamantenbörse und hohe Wolkenkratzer befinden.",
      hu: "Ramat Gan egy Tel-Avivval határos város, ahol az izraeli gyémánttőzsde és számos magas felhőkarcoló található.",
      ro: "Ramat Gan este un oraș învecinat cu Tel Aviv, unde se află Bursa de Diamante din Israel și înalți zgârie-nori.",
      en: "Ramat Gan is a city bordering Tel Aviv, home to the Israel Diamond Exchange and impressive skyscrapers."
    },
    facts: {
      de: ["Der Name übersetzt sich als Gartenhöhen.", "Verfügt über einige der höchsten Gebäude Israels.", "Wurde 1921 als landwirtschaftliche Genossenschaft gegründet."],
      hu: ["A név jelentése Kert-magaslatok.", "Itt találhatók Izrael legmagasabb épületei.", "1921-ben alapították mezőgazdasági szövetkezetként."],
      ro: ["Numele se traduce prin Înălțimile Grădinii.", "Are unele dintre cele mai înalte clădiri din Israel.", "Fondat în 1921 ca o cooperativă agricolă."],
      en: ["The name translates to Garden Heights.", "Features some of the tallest buildings in Israel.", "Founded in 1921 as an agricultural cooperative."]
    },
    descriptionAdvanced: {
      de: "Ramat Gan wurde 1921 als landwirtschaftliche Genossenschaft Ir Ganim („Stadt der Gärten“) gegründet und 1923 in Ramat Gan („Gartenhöhen“) umbenannt. Heute leben in der Stadt östlich von Tel Aviv rund 165.000 Einwohner. Sie ist Sitz der weltweit größten Diamantenbörse, die jährlich Diamanten im Wert von über 25 Milliarden US-Dollar umsetzt. Das Diamantenviertel Bursa beherbergt mit dem Moshe Aviv Tower (244 Meter) lange Zeit das höchste Gebäude Israels. Im Stadtgebiet befindet sich auch der Zoo Safari, der größte zoologische Park Israels mit afrikanischer Tierwelt. Die Bar-Ilan-Universität, 1955 gegründet, ist eine der größten Hochschulen des Landes. Ramat Gan war früher eigenständig, gilt heute aber als Teil der Metropolregion Gusch Dan."
    },
    factsAdvanced: {
      de: ["1921 als Ir Ganim gegründet, 1923 umbenannt.", "Rund 165.000 Einwohner.", "Name bedeutet „Gartenhöhen“.", "Israelische Diamantenbörse mit Umsatz über 25 Mrd. US-Dollar jährlich.", "Moshe Aviv Tower 244 m hoch.", "Bar-Ilan-Universität gegründet 1955.", "Safari Ramat Gan, größter zoologischer Park Israels.", "Östlich von Tel Aviv im Großraum Gusch Dan."]
    }, image: "/poi-images/ramat-gan-cities-v2.webp"},
  {
    id: "rehovot-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8113, 31.8928],
    name: { de: "Rechovot", hu: "Rehovot", ro: "Rehovot", en: "Rehovot" },
    description: {
      de: "Rechovot ist ein wichtiges Wissenschafts- und Technologiezentrum im Zentralbezirk, das für seine akademischen Institutionen bekannt ist.",
      hu: "Rehovot egy fontos tudományos és technológiai központ a Központi körzetben, amely akadémiai intézményeiről híres.",
      ro: "Rehovot este un important centru științific și tehnologic din Districtul Central, cunoscut pentru instituțiile sale academice.",
      en: "Rehovot is an important science and technology center in the Central District, known for its academic institutions."
    },
    facts: {
      de: ["Heimat des Weizmann-Instituts für Wissenschaften.", "Der erste Präsident Chaim Weizmann lebte hier.", "Auch berühmt für seine Zitrushaine."],
      hu: ["A Weizmann Tudományos Intézet otthona.", "Chaim Weizmann első elnök itt élt.", "A régió híres volt citrusültetvényeiről is."],
      ro: ["Găzduiește Institutul de Științe Weizmann.", "Primul președinte, Chaim Weizmann, a trăit aici.", "Faimos și pentru industria sa de citrice."],
      en: ["Home to the Weizmann Institute of Science.", "First president Chaim Weizmann lived here.", "Also famous for its historical citrus industry."]
    },
    descriptionAdvanced: {
      de: "Rechovot wurde 1890 von russisch-jüdischen Einwanderern der zweiten Alija als landwirtschaftliche Siedlung gegründet und ist heute mit rund 150.000 Einwohnern eine der wichtigsten Wissenschaftsstädte Israels. Der Name geht auf einen biblischen Brunnen Isaaks zurück (Genesis 26,22) und bedeutet „weite Plätze“. Die Stadt liegt etwa 20 Kilometer südlich von Tel Aviv. Berühmt ist sie für das 1934 gegründete und 1949 nach Israels erstem Präsidenten Chaim Weizmann umbenannte Weizmann-Institut für Wissenschaften, eine der weltweit führenden Forschungseinrichtungen in Naturwissenschaften. Außerdem beherbergt Rechovot die Fakultät für Landwirtschaft der Hebräischen Universität Jerusalem. Bis in die 1980er Jahre prägten Zitrushaine das Stadtbild, was Rechovot den Beinamen „Hauptstadt der Zitrusfrüchte“ einbrachte."
    },
    factsAdvanced: {
      de: ["1890 von russisch-jüdischen Einwanderern gegründet.", "Rund 150.000 Einwohner.", "Name aus Genesis 26,22, bedeutet „weite Plätze“.", "Weizmann-Institut für Wissenschaften seit 1934.", "Chaim Weizmann, erster Präsident Israels, lebte und starb hier.", "Fakultät für Landwirtschaft der Hebräischen Universität.", "Früher „Hauptstadt der Zitrusfrüchte“.", "Liegt 20 km südlich von Tel Aviv."]
    }, image: "/poi-images/rehovot-cities-v2.webp"},
  {
    id: "ashkelon-cities-v2",
    type: "city",
    parent: "IL-D",
    coords: [34.5715, 31.6693],
    name: { de: "Aschkelon", hu: "Askelón", ro: "Așkelon", en: "Ashkelon" },
    description: {
      de: "Aschkelon ist eine Küstenstadt im Südbezirk, die sich durch eine reiche, jahrtausendealte Geschichte auszeichnet.",
      hu: "Askelón egy déli tengerparti város, amely évezredekre visszanyúló, gazdag történelemmel büszkélkedhet.",
      ro: "Așkelon este un oraș de coastă din Districtul de Sud, cu o istorie bogată care se întinde pe milenii.",
      en: "Ashkelon is a coastal city in the Southern District, featuring a rich history spanning thousands of years."
    },
    facts: {
      de: ["Verfügt über einen antiken Seehafen.", "Hat einen großen Nationalpark mit antiken Ruinen.", "Die moderne Stadt wurde 1948 etabliert."],
      hu: ["Ősi tengeri kikötővel rendelkezik.", "Hatalmas nemzeti parkjában ősi romok találhatók.", "A modern várost 1948-ban alapították."],
      ro: ["Dispune de un vechi port maritim.", "Are un mare parc național cu ruine antice.", "Orașul modern a fost stabilit în 1948."],
      en: ["Features an ancient seaport.", "Has a large national park with ancient ruins.", "The modern city was established in 1948."]
    },
    descriptionAdvanced: {
      de: "Aschkelon zählt zu den ältesten Hafenstädten der Welt mit einer über 5.000-jährigen Geschichte. In der Antike war sie eine der fünf Philisterstädte und wurde nacheinander von Kanaanitern, Ägyptern, Assyrern, Persern, Griechen, Römern, Byzantinern, Kreuzfahrern und Mamelucken beherrscht. Die moderne Stadt wurde 1948 nach der Staatsgründung Israels neu gegründet, zunächst durch Einwanderer aus Südafrika und ab 1953 vor allem durch Juden aus Jemen, Marokko und der Sowjetunion. Heute leben in Aschkelon rund 145.000 Einwohner. Der Nationalpark Aschkelon im Süden der Stadt umfasst antike Ruinen aus kanaanitischer, römischer und byzantinischer Zeit. Die Stadt verfügt über ein modernes Kraftwerk und eine bedeutende Meerwasserentsalzungsanlage, eine der größten der Welt."
    },
    factsAdvanced: {
      de: ["Über 5.000 Jahre Geschichte, eine der ältesten Hafenstädte.", "Eine der fünf Philisterstädte in der Antike.", "Moderne Stadt 1948 nach Staatsgründung neu errichtet.", "Rund 145.000 Einwohner.", "Nationalpark mit antiken kanaanitischen Ruinen.", "Eine der größten Meerwasserentsalzungsanlagen weltweit.", "Bedeutende marokkanisch-jüdische Gemeinde.", "Liegt etwa 50 km südlich von Tel Aviv."]
    }, image: "/poi-images/ashkelon-cities-v2.webp"},
  {
    id: "bat-yam-cities-v2",
    type: "city",
    parent: "IL-TA",
    coords: [34.7425, 32.0281],
    name: { de: "Bat Jam", hu: "Bat Yam", ro: "Bat Yam", en: "Bat Yam" },
    description: {
      de: "Bat Jam ist eine Stadt direkt am Mittelmeer, die unmittelbar südlich von Tel Aviv liegt und für ihre Strandpromenade bekannt ist.",
      hu: "Bat Yam a Földközi-tenger partján, közvetlenül Tel-Avivtól délre fekvő város, amely tengerparti sétányáról híres.",
      ro: "Bat Yam este un oraș situat la Marea Mediterană, imediat la sud de Tel Aviv, cunoscut pentru promenada sa pe plajă.",
      en: "Bat Yam is a city situated on the Mediterranean Sea, immediately south of Tel Aviv, known for its beach promenade."
    },
    facts: {
      de: ["Der Name bedeutet Tochter des Meeres.", "Bekannt für seine lange Küstenpromenade.", "Hat eine große Einwandererbevölkerung."],
      hu: ["A város neve azt jelenti: A tenger lánya.", "Hosszú tengerparti sétányáról híres.", "Nagy bevándorló népességgel rendelkezik."],
      ro: ["Numele înseamnă Fiica Mării.", "Cunoscut pentru promenada sa lungă de pe coastă.", "Are o mare populație de imigranți."],
      en: ["The name translates to Daughter of the Sea.", "Known for its long coastal promenade.", "Has a large and diverse immigrant population."]
    },
    descriptionAdvanced: {
      de: "Bat Jam, hebräisch „Tochter des Meeres“, wurde 1926 von orthodoxen jüdischen Pionieren als Bajit waGan („Haus und Garten“) gegründet und 1936 in Bat Jam umbenannt. Heute leben in der Küstenstadt direkt südlich von Tel Aviv rund 130.000 Einwohner. Die Stadt entwickelte sich nach 1948 rasch durch Einwanderer aus Bulgarien, Rumänien und später aus der ehemaligen Sowjetunion, von denen heute über 30 % der Einwohner abstammen. Bat Jam ist berühmt für seine 3,5 Kilometer lange Strandpromenade und galt lange als Vorzeige-Badeort der israelischen Mittelschicht. In der Stadt befindet sich auch das Ben-Ari-Museum für moderne israelische Kunst und das Museum für Modern Art Bat Yam, das eng mit Tel Aviv kooperiert. Heute ist die Stadt im urbanen Umbruch durch Hochhausprojekte."
    },
    factsAdvanced: {
      de: ["1926 als Bajit waGan gegründet, 1936 umbenannt.", "Rund 130.000 Einwohner.", "3,5 km lange Strandpromenade.", "Über 30 % russischsprachige Einwohner.", "Ben-Ari-Museum und Museum für Modern Art.", "Liegt direkt südlich von Tel Aviv.", "Bedeutende bulgarische und rumänische Einwanderergemeinden."]
    }, image: "/poi-images/bat-yam-cities-v2.webp"},
  {
    id: "beit-shemesh-cities-v2",
    type: "city",
    parent: "IL-JM",
    coords: [34.9888, 31.7470],
    name: { de: "Bet Schemesch", hu: "Bét-Semes", ro: "Beit Șemeș", en: "Beit Shemesh" },
    description: {
      de: "Bet Schemesch ist eine schnell wachsende Stadt westlich von Jerusalem, gelegen im historischen Elah-Tal.",
      hu: "Bét-Semes egy gyorsan terjeszkedő város Jeruzsálemtől nyugatra, a történelmi Elah-völgyben.",
      ro: "Beit Șemeș este un oraș cu o creștere rapidă la vest de Ierusalim, situat în istorica Vale a Elah.",
      en: "Beit Shemesh is a rapidly expanding city west of Jerusalem, located in the historic Valley of Elah."
    },
    facts: {
      de: ["Wird in der hebräischen Bibel erwähnt.", "Erlebte seit den 1990er Jahren ein schnelles Wachstum.", "Hat eine demografisch vielfältige Bevölkerung."],
      hu: ["A héber Biblia is megemlíti.", "Az 1990-es évek óta gyors növekedésen ment keresztül.", "Demográfiailag rendkívül sokszínű lakossággal bír."],
      ro: ["Menționat în Biblia ebraică.", "A cunoscut o creștere rapidă din anii 1990.", "Are o populație diversă din punct de vedere demografic."],
      en: ["Mentioned in the Hebrew Bible.", "Experienced rapid growth since the 1990s.", "Has a demographically diverse population."]
    },
    descriptionAdvanced: {
      de: "Bet Schemesch, hebräisch „Haus der Sonne“, ist eine biblische Stadt, die im Buch Josua und im ersten Buch Samuel erwähnt wird. Hier soll die Bundeslade nach ihrer Rückkehr von den Philistern Halt gemacht haben. Die moderne Stadt wurde 1950 als Entwicklungsstadt für jüdische Einwanderer aus Bulgarien, Rumänien, dem Iran und Marokko gegründet. Sie liegt im malerischen Elah-Tal, etwa 20 Kilometer westlich von Jerusalem, dem Schauplatz des biblischen Kampfes zwischen David und Goliath. Heute leben in Bet Schemesch rund 130.000 Einwohner, was sie zu einer der am schnellsten wachsenden Städte Israels macht. Seit den 1990er Jahren siedelten sich vermehrt charedische und national-religiöse Gemeinden an, was zu einer demographischen Verschiebung führte. Die Stadt gilt heute als drittgrößte ultraorthodoxe Gemeinde Israels."
    },
    factsAdvanced: {
      de: ["Biblische Stadt, im Buch Josua erwähnt.", "Moderne Stadt 1950 als Entwicklungsstadt gegründet.", "Rund 130.000 Einwohner.", "Name bedeutet „Haus der Sonne“.", "Liegt im biblischen Elah-Tal, Schauplatz Davids gegen Goliath.", "Eine der am schnellsten wachsenden Städte Israels.", "Drittgrößte ultraorthodoxe Gemeinde des Landes.", "20 km westlich von Jerusalem gelegen."]
    }, image: "/poi-images/beit-shemesh-cities-v2.webp"},
  {
    id: "kfar-saba-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.9070, 32.1713],
    name: { de: "Kfar Saba", hu: "Kfar Szaba", ro: "Kfar Saba", en: "Kfar Saba" },
    description: {
      de: "Kfar Saba ist eine lebendige Stadt in der Scharon-Ebene, die für ihre hohe Lebensqualität und Grünflächen bekannt ist.",
      hu: "Kfar Szaba egy nyüzsgő város a Saron-síkságon, amely magas életminőségéről és zöldterületeiről ismert.",
      ro: "Kfar Saba este un oraș vibrant în regiunea Sharon, recunoscut pentru calitatea ridicată a vieții și spațiile verzi.",
      en: "Kfar Saba is a vibrant city in the Sharon region, known for its high quality of life and green spaces."
    },
    facts: {
      de: ["Der Name bedeutet Dorf des Großvaters.", "Wurde 1903 gegründet.", "Ein wichtiges Zentrum für High-Tech-Industrien."],
      hu: ["A név jelentése: Nagyapa faluja.", "1903-ban alapították.", "A csúcstechnológiai iparágak fontos központja."],
      ro: ["Numele înseamnă Satul Bunicului.", "A fost înființat în 1903.", "Un centru important pentru industriile de înaltă tehnologie."],
      en: ["The name translates to Grandfather's Village.", "Was established in 1903.", "An important center for high-tech industries."]
    },
    descriptionAdvanced: {
      de: "Kfar Saba, hebräisch „Dorf des Großvaters“, wurde 1903 von jüdischen Einwanderern aus Russland als landwirtschaftliche Siedlung in der Scharon-Ebene gegründet. Die ersten Jahre waren von Malaria und Wassermangel geprägt, sodass die Pioniere zwischen 1905 und 1912 mehrfach evakuiert werden mussten. Erst nach umfangreichen Trockenlegungen entwickelte sich die Siedlung erfolgreich. Kfar Saba liegt etwa 20 Kilometer nordöstlich von Tel Aviv und zählt heute rund 110.000 Einwohner. Die Stadt wurde 1962 zur Großstadt erhoben und ist heute ein bedeutendes Zentrum für Hightech, Gesundheitswesen mit dem renommierten Meir-Medical-Center, sowie Bildung. Kfar Saba gilt mit ihren weitläufigen Grünflächen, Parks und Radwegen als eine der lebenswertesten Städte Israels."
    },
    factsAdvanced: {
      de: ["1903 von russisch-jüdischen Einwanderern gegründet.", "Rund 110.000 Einwohner.", "1962 zur Großstadt erhoben.", "Meir-Medical-Center, eines der größten Krankenhäuser.", "Wichtiges Hightech-Zentrum in der Scharon-Ebene.", "20 km nordöstlich von Tel Aviv.", "Bekannt für Grünflächen und Lebensqualität."]
    }, image: "/poi-images/kfar-saba-cities-v2.webp"},
  {
    id: "herzliya-cities-v2",
    type: "city",
    parent: "IL-TA",
    coords: [34.8415, 32.1624],
    name: { de: "Herzlia", hu: "Herzlija", ro: "Herzliya", en: "Herzliya" },
    description: {
      de: "Herzlia ist eine wohlhabende Stadt an der Zentralküste, berühmt für ihren Jachthafen und den florierenden High-Tech-Sektor.",
      hu: "Herzlija egy jómódú város a központi partvidéken, amely jachtkikötőjéről és virágzó csúcstechnológiai szektoráról híres.",
      ro: "Herzliya este un oraș prosper pe coasta centrală, faimos pentru marina sa și sectorul de înaltă tehnologie în plină expansiune.",
      en: "Herzliya is an affluent city on the central coast, famous for its marina and prosperous high-tech sector."
    },
    facts: {
      de: ["Benannt nach Theodor Herzl.", "Beherbergt viele ausländische Botschaften.", "Bietet wunderschöne Strände und einen Hafen."],
      hu: ["Theodor Herzlről nevezték el.", "Számos külföldi nagykövetségnek ad otthont.", "Gyönyörű strandokkal és kikötővel rendelkezik."],
      ro: ["Numit după Theodor Herzl.", "Găzduiește multe ambasade străine.", "Are plaje frumoase și o marină."],
      en: ["Named after Theodor Herzl.", "Home to many foreign embassies.", "Features beautiful beaches and a modern marina."]
    },
    descriptionAdvanced: {
      de: "Herzlia wurde 1924 von amerikanisch-jüdischen Pionieren gegründet und nach Theodor Herzl, dem Begründer des politischen Zionismus, benannt. Die Stadt liegt etwa 12 Kilometer nördlich von Tel Aviv an der Mittelmeerküste und zählt heute rund 100.000 Einwohner. Herzlia gehört zu den wohlhabendsten Städten Israels und ist berühmt für den exklusiven Stadtteil Herzlia Pituach mit luxuriösen Villen, Botschaften und dem Marina-Viertel mit dem größten Yachthafen Israels. Die Stadt ist Sitz zahlreicher internationaler Hightech-Konzerne wie Microsoft, Apple, Google und IBM und gilt als Israels „Silicon Coast“. Hier befindet sich auch das renommierte Reichman University (ehemals IDC Herzliya), gegründet 1994, sowie das jährlich stattfindende Herzliya-Konferenzforum für Sicherheitspolitik."
    },
    factsAdvanced: {
      de: ["1924 gegründet, benannt nach Theodor Herzl.", "Rund 100.000 Einwohner.", "Eine der wohlhabendsten Städte Israels.", "Größter Yachthafen Israels in Herzlia Pituach.", "Sitz von Microsoft, Apple, Google und IBM Israel.", "Reichman University seit 1994.", "Herzliya-Konferenz, wichtiges Sicherheitsforum.", "12 km nördlich von Tel Aviv an der Küste."]
    }, image: "/poi-images/herzliya-cities-v2.webp"},
  {
    id: "hadera-cities-v2",
    type: "city",
    parent: "IL-HA",
    coords: [34.9197, 32.4340],
    name: { de: "Chadera", hu: "Hadera", ro: "Hadera", en: "Hadera" },
    description: {
      de: "Chadera ist eine Stadt im Bezirk Haifa, die die Küstenebene mit mehreren vielfältigen Naturschutzgebieten verbindet.",
      hu: "Hadera a Haifai körzetben fekvő város, amely a tengerparti síkságot változatos természetvédelmi területekkel köti össze.",
      ro: "Hadera este un oraș din Districtul Haifa, care leagă câmpia de coastă cu mai multe rezervații naturale diverse.",
      en: "Hadera is a city located in the Haifa District, bridging the coastal plain with its diverse nature reserves."
    },
    facts: {
      de: ["Gegründet im Jahr 1891.", "Bekannt für das Kraftwerk Orot Rabin.", "Ist von mehreren Naturparks umgeben."],
      hu: ["1891-ben alapították.", "Az Orot Rabin erőműről ismert.", "Számos natúrpark veszi körül."],
      ro: ["Înființat în anul 1891.", "Cunoscut pentru centrala electrică Orot Rabin.", "Este înconjurat de mai multe parcuri naturale."],
      en: ["Established in 1891.", "Known for the Orot Rabin power station.", "Is surrounded by several nature parks."]
    },
    descriptionAdvanced: {
      de: "Chadera wurde 1891 von jüdischen Einwanderern aus Russland und Litauen der ersten Alija gegründet, die das Land vom osmanischen Großgrundbesitzer Salim al-Khouri kauften. Die ersten Jahre waren von extremer Malaria geprägt, mehr als die Hälfte der ursprünglichen Siedler starb, bevor das sumpfige Gebiet durch australische Eukalyptusbäume erfolgreich trockengelegt wurde. Heute leben in der Stadt im nördlichen Scharon rund 100.000 Einwohner. Chadera ist Standort des größten Kohlekraftwerks Israels, des Orot-Rabin-Kraftwerks, das einen Großteil des nationalen Strombedarfs deckt. Die Stadt gilt als geographisches und kulturelles Bindeglied zwischen den Ballungsräumen Tel Aviv und Haifa. Das Khan Hadera Historical Museum dokumentiert die Pioniergeschichte. Charakteristisch sind die langen Stadteukalyptusalleen, die an die Trockenlegungspioniere erinnern."
    },
    factsAdvanced: {
      de: ["1891 von russisch-jüdischen Einwanderern gegründet.", "Rund 100.000 Einwohner.", "Über die Hälfte der Pioniere starb anfangs an Malaria.", "Sümpfe mit australischen Eukalyptusbäumen trockengelegt.", "Orot-Rabin-Kraftwerk, größtes Kohlekraftwerk Israels.", "Geographisches Bindeglied zwischen Tel Aviv und Haifa.", "Khan Hadera Museum dokumentiert die Pioniergeschichte.", "Liegt im nördlichen Scharon."]
    }, image: "/poi-images/hadera-cities-v2.webp"},
  {
    id: "modiin-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [35.0069, 31.8903],
    name: { de: "Modi’in", hu: "Modiin", ro: "Modi'in", en: "Modi'in" },
    description: {
      de: "Modi’in ist eine sorgfältig geplante, moderne Stadt, die sich genau auf halbem Weg zwischen Tel Aviv und Jerusalem befindet.",
      hu: "Modiin egy gondosan megtervezett, modern város, amely pontosan félúton fekszik Tel-Aviv és Jeruzsálem között.",
      ro: "Modi'in este un oraș modern, meticulos planificat, situat la jumătatea distanței dintre Tel Aviv și Ierusalim.",
      en: "Modi'in is a meticulously planned modern city located halfway between Tel Aviv and Jerusalem."
    },
    facts: {
      de: ["Anerkannt für seine hochwertige Stadtplanung.", "Wurde erst 1993 gegründet.", "Eng verbunden mit den antiken Makkabäern."],
      hu: ["Kiváló minőségű várostervezéséről ismert.", "Viszonylag nemrég, 1993-ban alapították.", "Szorosan kötődik az ókori makkabeusokhoz."],
      ro: ["Recunoscut pentru planificarea sa urbană de înaltă calitate.", "A fost fondat recent, în 1993.", "Strâns asociat cu macabeii antici."],
      en: ["Recognized for its high-quality urban planning.", "Established relatively recently in 1993.", "Closely associated with the ancient Maccabees."]
    },
    descriptionAdvanced: {
      de: "Modi'in-Maccabim-Re'ut wurde 1996 als sorgfältig geplante moderne Stadt gegründet und ist mit rund 95.000 Einwohnern eine der jüngsten und am schnellsten wachsenden Städte Israels. Sie liegt strategisch auf halbem Weg zwischen Tel Aviv und Jerusalem in der Schfela-Region und wurde nach den Plänen des Architekten Moshe Safdie entworfen, der auch das Habitat 67 in Montreal und Yad Vashem gestaltete. Der Name verweist auf das antike Modi'in, Heimat der Makkabäer-Familie, die im 2. Jahrhundert v. Chr. den Aufstand gegen die Seleukiden anführte und das Chanukka-Fest etablierte. Die archäologische Stätte Tel Modi'in liegt in der Nähe. Heute beherbergt die Stadt vorrangig junge Familien und Pendler nach Tel Aviv und Jerusalem, mit großzügigen Grünflächen, Schulen und einer modernen Infrastruktur."
    },
    factsAdvanced: {
      de: ["1996 als geplante Stadt gegründet.", "Rund 95.000 Einwohner, eine der jüngsten Städte.", "Liegt zwischen Tel Aviv und Jerusalem.", "Entworfen vom Architekten Moshe Safdie.", "Name verweist auf die antiken Makkabäer.", "Heimatort der Chanukka-Geschichte aus dem 2. Jh. v. Chr.", "Bekannt für hochwertige Stadtplanung und Grünflächen.", "Schnell wachsende Pendlerstadt."]
    }, image: "/poi-images/modiin-cities-v2.webp"},
  {
    id: "nazareth-cities-v2",
    type: "city",
    parent: "IL-Z",
    coords: [35.2973, 32.7019],
    name: { de: "Nazareth", hu: "Názáret", ro: "Nazaret", en: "Nazareth" },
    description: {
      de: "Nazareth ist die größte arabische Stadt in Israel und von immenser Bedeutung als christlicher Pilgerort.",
      hu: "Názáret Izrael legnagyobb arab városa, amely keresztény zarándokhelyként is hatalmas jelentőséggel bír.",
      ro: "Nazaret este cel mai mare oraș arab din Israel și are o importanță imensă ca loc de pelerinaj creștin.",
      en: "Nazareth is the largest Arab city in Israel and holds immense significance as a Christian pilgrimage site."
    },
    facts: {
      de: ["Wird als die Heimat von Jesus in seiner Kindheit beschrieben.", "Beherbergt die Verkündigungsbasilika.", "Die Bevölkerung ist überwiegend arabisch."],
      hu: ["Jézus gyermekkori otthonaként írják le.", "Itt található az Angyali üdvözlet bazilikája.", "A lakosság túlnyomórészt arab."],
      ro: ["Descris ca fiind casa din copilărie a lui Isus.", "Găzduiește Bazilica Bunei Vestiri.", "Populația este predominant arabă."],
      en: ["Described as the childhood home of Jesus.", "Features the Basilica of the Annunciation.", "The population is predominantly Arab."]
    },
    descriptionAdvanced: {
      de: "Nazareth ist mit rund 78.000 Einwohnern die größte arabische Stadt Israels und das wichtigste christliche Pilgerzentrum des Landes. Die Stadt liegt malerisch in den Bergen Niedergaliläas, etwa 25 Kilometer östlich von Haifa. Im Neuen Testament wird Nazareth als Heimatort Marias und Wohnort der Heiligen Familie nach der Rückkehr aus Ägypten beschrieben, wo Jesus seine Kindheit verbrachte. Hauptattraktion ist die monumentale Verkündigungsbasilika, die 1969 über den Ruinen byzantinischer und kreuzfahrerzeitlicher Vorgängerbauten errichtet wurde und heute die größte Kirche des Nahen Ostens ist. Etwa 70 % der Einwohner sind Muslime, rund 30 % christliche Araber. Die benachbarte jüdische Stadt Nazareth Illit wurde 1957 gegründet. Nazareth bewahrt eine vielschichtige Tradition arabischer Kultur, christlicher Liturgie und nahöstlicher Küche."
    },
    factsAdvanced: {
      de: ["Rund 78.000 Einwohner, größte arabische Stadt Israels.", "Heimatort Jesu Christi und der Heiligen Familie.", "Verkündigungsbasilika 1969 fertiggestellt, größte Kirche des Nahen Ostens.", "Etwa 70 % Muslime, 30 % Christen.", "Liegt in den Bergen Niedergaliläas.", "Maria-Brunnen, traditioneller Ort der Verkündigung.", "25 km östlich von Haifa.", "Wichtigster christlicher Pilgerort Israels."]
    }, image: "/poi-images/nazareth-cities-v2.webp"},
  {
    id: "lod-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8953, 31.9510],
    name: { de: "Lod", hu: "Lod", ro: "Lod", en: "Lod" },
    description: {
      de: "Lod ist eine Stadt südöstlich von Tel Aviv, die als wichtiger Verkehrsknotenpunkt für das ganze Land dient.",
      hu: "Lod egy Tel-Avivtól délkeletre fekvő város, amely az egész ország egyik legfontosabb közlekedési csomópontjaként szolgál.",
      ro: "Lod este un oraș la sud-est de Tel Aviv, servind ca un important nod de transport pentru întreaga țară.",
      en: "Lod is a city southeast of Tel Aviv, serving as a major transportation hub for the entire country."
    },
    facts: {
      de: ["Heimat des internationalen Flughafens Ben Gurion.", "Eine antike Stadt, die Jahrtausende zurückreicht.", "Berühmt für das Mosaik von Lod."],
      hu: ["A Ben Gurion nemzetközi repülőtér otthona.", "Évezredekre visszanyúló, ősi város.", "A lodi mozaikról is híres."],
      ro: ["Găzduiește Aeroportul Internațional Ben Gurion.", "Un oraș antic care datează de mii de ani.", "Faimos pentru mozaicul din Lod."],
      en: ["Home to Ben Gurion International Airport.", "An ancient city dating back thousands of years.", "Famous for the spectacular Lod mosaic."]
    },
    descriptionAdvanced: {
      de: "Lod, biblisches Lydda, ist eine der ältesten kontinuierlich bewohnten Städte Israels mit über 7.000 Jahren Geschichte. Bereits in der Antike wurde sie in ägyptischen Quellen erwähnt, in der Apostelgeschichte besucht der Apostel Petrus die Stadt. Im Mittelalter war Lod als Pilgerziel zum Grab des heiligen Georg, christlicher Märtyrer und Schutzpatron Englands, von Bedeutung. Die Stadt liegt etwa 15 Kilometer südöstlich von Tel Aviv und beherbergt mit dem Ben-Gurion-Flughafen den größten internationalen Flughafen Israels, eröffnet 1936. Heute leben in Lod rund 80.000 Einwohner, davon ein Drittel Araber und zwei Drittel Juden, viele davon Einwanderer aus Äthiopien und der ehemaligen Sowjetunion. Berühmt ist das im Jahr 1996 entdeckte Lod-Mosaik aus der römischen Kaiserzeit (3. Jahrhundert n. Chr.), eines der besterhaltenen Mosaike der Welt."
    },
    factsAdvanced: {
      de: ["Über 7.000 Jahre kontinuierlich bewohnt.", "Rund 80.000 Einwohner.", "Ben-Gurion-Flughafen seit 1936, größter Flughafen Israels.", "Im Neuen Testament als Lydda erwähnt.", "Grab des heiligen Georg in der Georgskirche.", "Lod-Mosaik aus dem 3. Jh. n. Chr. weltberühmt.", "Etwa ein Drittel arabische Bevölkerung.", "15 km südöstlich von Tel Aviv."]
    }, image: "/poi-images/lod-cities-v2.webp"},
  {
    id: "ramla-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8728, 31.9271],
    name: { de: "Ramla", hu: "Ramla", ro: "Ramla", en: "Ramla" },
    description: {
      de: "Ramla ist eine historische Stadt in Zentralisrael, die während der frühen islamischen Periode gegründet wurde.",
      hu: "Ramla egy történelmi város Közép-Izraelben, amelyet egyedülálló módon a kora iszlám időszakban alapítottak.",
      ro: "Ramla este un oraș istoric din centrul Israelului, fondat în mod unic în perioada islamică timpurie.",
      en: "Ramla is a historic city in central Israel, uniquely founded during the early Islamic period."
    },
    facts: {
      de: ["Gegründet um das Jahr 716 nach Christus.", "Bekannt für den unterirdischen Pool der Bögen.", "Ein Symbol für die jüdisch-arabische Koexistenz."],
      hu: ["Krisztus után 716 körül alapították.", "A földalatti Ívek Medencéjéről ismert.", "A zsidó-arab békés együttélés szimbóluma."],
      ro: ["Fondat în jurul anului 716 d.Hr.", "Cunoscut pentru Piscina Arcurilor.", "Un simbol al coexistenței iudeo-arabe."],
      en: ["Founded around the year 716 AD.", "Known for the underground Pool of Arches.", "A symbol of Jewish-Arab coexistence."]
    },
    descriptionAdvanced: {
      de: "Ramla, hebräisch und arabisch für „Sand“, wurde im Jahr 716 n. Chr. vom umayyadischen Kalifen Sulayman ibn Abd al-Malik gegründet und ist die einzige Stadt Israels, die in der frühislamischen Zeit erbaut wurde. Sie diente jahrhundertelang als Verwaltungshauptstadt der islamischen Provinz Jund Filastin. Im Mittelalter besuchten zahlreiche Reisende und Pilger die Stadt, darunter Marco Polo und Ibn Battuta. Die Stadt liegt etwa 20 Kilometer südöstlich von Tel Aviv. Heute leben in Ramla rund 78.000 Einwohner, eine seltene gemischte Bevölkerung aus Juden, Muslimen, Christen und Karäern. Berühmt sind der unterirdische Pool der Bögen aus dem 8. Jahrhundert, der Weiße Turm aus mamlukischer Zeit (1318) und die Große Moschee, ursprünglich eine Kreuzfahrerkirche. Ramla gilt als Symbol des jüdisch-arabischen Zusammenlebens in Israel."
    },
    factsAdvanced: {
      de: ["716 n. Chr. von Kalif Sulayman gegründet.", "Einzige Stadt Israels aus der frühislamischen Zeit.", "Rund 78.000 Einwohner.", "Pool der Bögen aus dem 8. Jh. unterirdisch.", "Weißer Turm aus mamlukischer Zeit (1318).", "Gemischte Bevölkerung aus Juden, Muslimen, Christen, Karäern.", "Marco Polo und Ibn Battuta besuchten die Stadt.", "20 km südöstlich von Tel Aviv."]
    }, image: "/poi-images/ramla-cities-v2.webp"},
  {
    id: "raanana-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8712, 32.1848],
    name: { de: "Ra’anana", hu: "Raanana", ro: "Ra'anana", en: "Ra'anana" },
    description: {
      de: "Ra’anana ist eine Stadt in der südlichen Scharon-Ebene, die für ihre grüne Umgebung und die große Einwanderergemeinde geschätzt wird.",
      hu: "Raanana a déli Saron-síkságon fekvő város, amelyet zöld környezete és nagy bevándorló közössége miatt értékelnek.",
      ro: "Ra'anana este un oraș din sudul câmpiei Sharon, apreciat pentru mediul său verde și comunitatea mare de imigranți.",
      en: "Ra'anana is a city in the southern Sharon Plain, recognized for its green environment and large immigrant community."
    },
    facts: {
      de: ["Heimat vieler Einwanderer aus englischsprachigen Ländern.", "Verfügt über einen prominenten High-Tech-Industriepark.", "Bekannt als die Perle der Scharon-Ebene."],
      hu: ["Számos angol nyelvterületről érkezett bevándorló otthona.", "Kiemelkedő high-tech ipari parkkal rendelkezik.", "A Saron-síkság gyöngyszemeként is ismert."],
      ro: ["Găzduiește mulți imigranți din țări vorbitoare de engleză.", "Are un important parc industrial de înaltă tehnologie.", "Cunoscut ca Perla câmpiei Sharon."],
      en: ["Home to many immigrants from English-speaking countries.", "Features a prominent high-tech industrial park.", "Known as the Pearl of the Sharon."]
    },
    descriptionAdvanced: {
      de: "Ra'anana, hebräisch „frisch“ oder „grün“, wurde 1922 von amerikanisch-jüdischen Einwanderern aus New York unter dem Namen Ahuza Aleph gegründet und 1924 in Ra'anana umbenannt. Die Stadt liegt in der südlichen Scharon-Ebene, etwa 20 Kilometer nordöstlich von Tel Aviv, und zählt heute rund 75.000 Einwohner. Ursprünglich eine landwirtschaftliche Siedlung mit Zitrushainen, entwickelte sich Ra'anana ab den 1990er Jahren zu einem bedeutenden Hightech-Standort. Internationale Konzerne wie SAP, Microsoft, Texas Instruments und Amdocs haben hier ihren israelischen Sitz. Die Stadt ist berühmt für ihre hohe Lebensqualität, weitläufigen Grünflächen und den großzügigen Stadtpark. Eine besonders große Gemeinschaft englischsprachiger Einwanderer aus den USA, Großbritannien, Kanada und Südafrika prägt das Stadtbild und brachte ihr den Beinamen „die Perle der Scharon-Ebene“ ein."
    },
    factsAdvanced: {
      de: ["1922 von amerikanisch-jüdischen Einwanderern gegründet.", "Rund 75.000 Einwohner.", "Name bedeutet „frisch“ oder „grün“.", "Sitz von SAP, Microsoft, Texas Instruments Israel.", "Große englischsprachige Einwanderergemeinde.", "„Perle der Scharon-Ebene“ genannt.", "Bekannt für hohe Lebensqualität und Grünflächen.", "20 km nordöstlich von Tel Aviv."]
    }, image: "/poi-images/raanana-cities-v2.webp"},
  {
    id: "rahat-cities-v2",
    type: "city",
    parent: "IL-D",
    coords: [34.7570, 31.3921],
    name: { de: "Rahat", hu: "Rahat", ro: "Rahat", en: "Rahat" },
    description: {
      de: "Rahat ist eine mehrheitlich von Beduinen bewohnte Stadt im nördlichen Negev und die größte beduinische Siedlung der Welt.",
      hu: "Rahat egy túlnyomórészt beduinok lakta város az északi Negevben, és a világ legnagyobb beduin települése.",
      ro: "Rahat este un oraș populat majoritar de beduini în nordul Negevului și cea mai mare așezare beduină din lume.",
      en: "Rahat is a predominantly Bedouin city in the Northern Negev, being the largest Bedouin settlement in the world."
    },
    facts: {
      de: ["1972 als geplante Stadt gegründet.", "Die einzige Beduinengemeinde mit Stadtstatus.", "Bekannt für ihr ausgeprägtes kulturelles Erbe."],
      hu: ["1972-ben alapították tervezett városként.", "Az egyetlen beduin önkormányzat, amely városi ranggal rendelkezik.", "Jelentős kulturális örökségéről ismert."],
      ro: ["Înființat în 1972 ca un oraș planificat.", "Singura municipalitate beduină cu statut de oraș.", "Cunoscut pentru moștenirea sa culturală distinctă."],
      en: ["Established in 1972 as a planned city.", "The only Bedouin municipality with city status.", "Known for its distinct cultural heritage."]
    },
    descriptionAdvanced: {
      de: "Rahat ist mit rund 75.000 Einwohnern die größte beduinische Stadt der Welt und die einzige Beduinengemeinde in Israel mit Stadtrang. Sie wurde 1972 von der israelischen Regierung als geplante Siedlung im nördlichen Negev gegründet, etwa 12 Kilometer nördlich von Be'er Scheva. Ziel war die Sesshaftmachung der traditionell nomadischen Beduinen, die zuvor in verstreuten Lagern in der Wüste lebten. 1994 wurde Rahat offiziell zur Stadt erhoben. Die Bevölkerung wächst aufgrund einer der höchsten Geburtenraten weltweit (etwa 5 Kinder pro Frau) sehr schnell. Die Bewohner gehören überwiegend zu den Tarabin-, Azazma- und Tiyaha-Stämmen. Trotz Modernisierung bewahren sie viele traditionelle Bräuche und Beduinenkultur. Das alljährliche Beduinen-Festival zieht Besucher aus ganz Israel an. Rahat steht vor sozialen Herausforderungen wie Arbeitslosigkeit und Armut."
    },
    factsAdvanced: {
      de: ["Rund 75.000 Einwohner, größte beduinische Stadt der Welt.", "1994 offiziell zur Stadt erhoben.", "Einzige Beduinengemeinde mit Stadtrang in Israel.", "Eine der höchsten Geburtenraten weltweit.", "Bewohner aus Tarabin-, Azazma- und Tiyaha-Stämmen.", "12 km nördlich von Be'er Scheva.", "Jährliches Beduinen-Festival mit traditioneller Kultur."]
    }, image: "/poi-images/rahat-cities-v2.webp"},
  {
    id: "hod-hasharon-cities-v2",
    type: "city",
    parent: "IL-M",
    coords: [34.8961, 32.1521],
    name: { de: "Hod haScharon", hu: "Hod HaSaron", ro: "Hod HaSharon", en: "Hod HaSharon" },
    description: {
      de: "Hod haScharon ist eine sich schnell entwickelnde Stadt im Zentralbezirk, die sich durch eine ländliche Atmosphäre inmitten von städtischem Wachstum auszeichnet.",
      hu: "Hod HaSaron egy gyorsan fejlődő város a Központi körzetben, amelyet a városi növekedés közepette megőrzött vidékies hangulat jellemez.",
      ro: "Hod HaSharon este un oraș cu o dezvoltare rapidă din Districtul Central, caracterizat printr-o atmosferă rurală în mijlocul creșterii urbane.",
      en: "Hod HaSharon is a rapidly developing city in the Central District, characterized by a rural atmosphere amidst urban growth."
    },
    facts: {
      de: ["Entstand durch den Zusammenschluss von vier landwirtschaftlichen Dörfern.", "Der Name bedeutet Pracht der Scharon.", "Ist eine sehr gefragte Wohngegend."],
      hu: ["Négy mezőgazdasági falu egyesülésével jött létre.", "A név jelentése A Saron pompája.", "Rendkívül keresett lakóövezet."],
      ro: ["Format prin fuziunea a patru sate agricole.", "Numele înseamnă Splendoarea Sharonului.", "Este o zonă rezidențială foarte căutată."],
      en: ["Formed by the merger of four agricultural villages.", "The name translates to Splendor of the Sharon.", "Is a highly sought after residential area."]
    },
    descriptionAdvanced: {
      de: "Hod haScharon, hebräisch „Pracht der Scharon“, entstand 1964 durch den Zusammenschluss von vier landwirtschaftlichen Moschawot: Magdiel (1924), Ramatajim (1925), Hadar (1927) und Ramat Hadar (1934). Die Stadt liegt im Herzen der Scharon-Ebene, etwa 16 Kilometer nordöstlich von Tel Aviv. Heute leben hier rund 70.000 Einwohner. Die Gründerfamilien stammten aus Polen, Russland und dem Jemen und bauten ursprünglich Zitrusfrüchte und Geflügel an. Bis heute bewahrt Hod haScharon einen ländlichen Charakter mit weiten Grünflächen, Reitanlagen, Pferdefarmen und Einfamilienhäusern auf großen Grundstücken, was sie zu einer der teuersten Wohngegenden Israels macht. Die Stadt ist Teil der Metropolregion Tel Aviv, jedoch mit deutlich entspannterem Tempo. 2017 wurde der Sharona-Park als zentrale Grünanlage eröffnet."
    },
    factsAdvanced: {
      de: ["1964 durch Fusion von vier Moschawot gegründet.", "Rund 70.000 Einwohner.", "Entstand aus Magdiel, Ramatajim, Hadar und Ramat Hadar.", "Älteste Gründungsmoschawa Magdiel von 1924.", "Teuerste Wohngegend mit Reitanlagen.", "Bewahrt ländlichen Charakter mit Grünflächen.", "16 km nordöstlich von Tel Aviv."]
    }, image: "/poi-images/hod-hasharon-cities-v2.webp"},
  {
    id: "kiryat-ata-cities-v2",
    type: "city",
    parent: "IL-HA",
    coords: [35.1023, 32.8021],
    name: { de: "Kirjat Ata", hu: "Kirjat Ata", ro: "Kiryat Ata", en: "Kiryat Ata" },
    description: {
      de: "Kirjat Ata ist eine bedeutende Stadt im Bezirk Haifa, die ursprünglich von einer polnisch-jüdischen Organisation gegründet wurde.",
      hu: "Kirjat Ata egy jelentős város a Haifai körzetben, amelyet eredetileg egy lengyel zsidó szervezet alapított.",
      ro: "Kiryat Ata este un oraș semnificativ din Districtul Haifa, fondat inițial de o organizație evreiască poloneză.",
      en: "Kiryat Ata is a significant city in the Haifa District, originally founded by a Polish Jewish organization."
    },
    facts: {
      de: ["Die größte Stadt in der Region der Krajot.", "Wurde im Jahr 1925 gegründet.", "Hat sich zu einem wichtigen Industriezentrum entwickelt."],
      hu: ["A Krajot régió legnagyobb városa.", "1925-ben alapították.", "Jelentős ipari és kereskedelmi központtá fejlődött."],
      ro: ["Cel mai mare oraș din regiunea Krayot.", "A fost înființat în anul 1925.", "A evoluat într-un important centru industrial și comercial."],
      en: ["The largest city in the Krayot area.", "Was established in the year 1925.", "Evolved into a major industrial and commercial hub."]
    },
    descriptionAdvanced: {
      de: "Kirjat Ata wurde 1925 als Kfar Ata von der polnisch-jüdischen Organisation Atid Tachsisei aus Łódź gegründet, deren Name in der Abkürzung „Ata“ den Namen der Siedlung bildete. 1969 wurde Kfar Ata mit der benachbarten Kiryat Bialik zu Kirjat Ata zusammengelegt und 1969 zur Stadt erhoben. Die Stadt liegt im Bezirk Haifa, etwa 10 Kilometer nordöstlich der Hafenstadt, am Rande der Ebene Sebulon. Heute leben in Kirjat Ata rund 60.000 Einwohner. Sie gehört zu den Krajot, den fünf Vorstadtgemeinden Haifas. Bekannt war Kirjat Ata jahrzehntelang für die Textilfabrik ATA, die von 1934 bis 1985 das wichtigste israelische Bekleidungsunternehmen war und uniforme der israelischen Armee herstellte. Heute ist die Stadt ein bedeutender Industriestandort mit Lebensmittel-, Metall- und Hightech-Industrie."
    },
    factsAdvanced: {
      de: ["1925 als Kfar Ata von polnisch-jüdischer Organisation gegründet.", "Rund 60.000 Einwohner.", "Name aus Abkürzung „Atid Tachsisei“.", "1969 zur Stadt erhoben.", "Größte der Krajot, Vorstadtgemeinden Haifas.", "Textilfabrik ATA von 1934 bis 1985 berühmt.", "Lieferte Uniformen der israelischen Armee.", "10 km nordöstlich von Haifa."]
    }, image: "/poi-images/kiryat-ata-cities-v2.webp"},
  {
    id: "nahariya-cities-v2",
    type: "city",
    parent: "IL-Z",
    coords: [35.0941, 33.0114],
    name: { de: "Naharija", hu: "Naharija", ro: "Nahariya", en: "Nahariya" },
    description: {
      de: "Naharija ist die nördlichste Küstenstadt Israels und dient als beliebtes Ziel für Sommerurlauber.",
      hu: "Naharija Izrael legészakibb tengerparti városa, és népszerű nyári üdülőhelyként szolgál.",
      ro: "Nahariya este cel mai nordic oraș de coastă din Israel, servind ca o destinație populară pentru vacanțele de vară.",
      en: "Nahariya is the northernmost coastal city in Israel, serving as a popular summer resort destination."
    },
    facts: {
      de: ["Gegründet 1935 von deutsch-jüdischen Einwanderern.", "Verfügt über eine malerische Promenade am Fluss Ga'aton.", "Ein beliebter Ort für den Inlandstourismus."],
      hu: ["1935-ben alapították német zsidó bevándorlók.", "Festői sétánya van a Ga'aton folyó mentén.", "A belföldi turizmus egyik kedvelt célpontja."],
      ro: ["Fondat în 1935 de imigranți evrei germani.", "Are o promenadă pitorească de-a lungul râului Ga'aton.", "Un loc popular pentru turismul intern."],
      en: ["Founded in 1935 by German-Jewish immigrants.", "Features a scenic promenade along the Ga'aton River.", "A popular spot for domestic tourism."]
    },
    descriptionAdvanced: {
      de: "Naharija wurde 1934 von deutsch-jüdischen Einwanderern aus dem nationalsozialistischen Deutschland im Rahmen der fünften Alija gegründet und ist die nördlichste Küstenstadt Israels, etwa 8 Kilometer südlich der libanesischen Grenze. Der Name bedeutet auf Hebräisch „Fluss“ und bezieht sich auf den Bach Ga'aton, der durch die zentrale Allee der Stadt fließt. Heute leben in Naharija rund 60.000 Einwohner. Die Gründer prägten die Stadt mit ihrer mitteleuropäisch-bürgerlichen Kultur, was ihr lange den Beinamen „Klein-Wien“ einbrachte. Die zentrale Allee Sderot HaGa'aton mit Eukalyptusbäumen und Wasserkanälen ist das Wahrzeichen. Naharija ist heute ein beliebter Sommerurlaubsort mit Strand, Promenade und Jachthafen. In der Stadt befindet sich auch das Western Galilee Medical Center. In den Sechstagekriegen und im Libanonkrieg lag Naharija mehrfach unter Beschuss."
    },
    factsAdvanced: {
      de: ["1934 von deutsch-jüdischen Einwanderern gegründet.", "Rund 60.000 Einwohner.", "Nördlichste Küstenstadt Israels.", "8 km südlich der libanesischen Grenze.", "Name bedeutet „Fluss“ nach dem Bach Ga'aton.", "Beiname „Klein-Wien“ wegen mitteleuropäischer Kultur.", "Western Galilee Medical Center vor Ort.", "Beliebtes Sommerurlaubsziel mit Promenade."]
    }, image: "/poi-images/nahariya-cities-v2.webp"},
  {
    id: "eilat-cities-v2",
    type: "city",
    parent: "IL-D",
    coords: [34.9519, 29.5577],
    name: { de: "Eilat", hu: "Eilat", ro: "Eilat", en: "Eilat" },
    description: {
      de: "Eilat ist die südlichste Stadt Israels, ein geschäftiger Hafen und ein beliebter Ferienort an der Nordspitze des Roten Meeres.",
      hu: "Eilat Izrael legdélebbi városa, forgalmas kikötő és népszerű üdülőhely a Vörös-tenger északi csücskén.",
      ro: "Eilat este cel mai sudic oraș al Israelului, un port aglomerat și o stațiune populară în vârful nordic al Mării Roșii.",
      en: "Eilat is Israel's southernmost city, a busy port and popular resort at the northern tip of the Red Sea."
    },
    facts: {
      de: ["Bekannt für seine Korallenriffe und Tauchplätze.", "Hat ein heißes Wüstenklima.", "Strategisch wichtiger Hafen am Golf von Akaba."],
      hu: ["Korallzátonyairól és búvárhelyeiről ismert.", "Forró sivatagi éghajlattal rendelkezik.", "Stratégiailag fontos kikötő az Akabai-öbölben."],
      ro: ["Cunoscut pentru recifele sale de corali și locurile de scufundări.", "Are un climat de deșert fierbinte.", "Port strategic pe Golful Aqaba."],
      en: ["Known for its coral reefs and diving spots.", "Has a hot desert climate.", "Strategic port on the Gulf of Aqaba."]
    },
    descriptionAdvanced: {
      de: "Eilat, die südlichste Stadt Israels, liegt an der Nordspitze des Roten Meeres am Golf von Akaba. Die moderne Stadt wurde am 10. März 1949 nach der Operation Uvda im Rahmen des Unabhängigkeitskriegs als israelisches Territorium gesichert. Bereits in der Antike war Etzion-Geber, ein Hafen König Salomos, an gleicher Stelle dokumentiert. Heute leben in Eilat rund 53.000 Einwohner. Die Stadt grenzt direkt an Akaba in Jordanien und ist nur 7 Kilometer von der ägyptischen Sinai-Grenze entfernt. Das Wüstenklima beschert Eilat über 360 Sonnentage pro Jahr, was sie zu einem der wichtigsten Urlaubsziele Israels macht. Die einzigartigen Korallenriffe vor der Küste, das Coral Beach Naturreservat und das Underwater Observatory ziehen Taucher und Touristen aus aller Welt an. Eilat ist freie Wirtschaftszone ohne Mehrwertsteuer und beherbergt einen wichtigen Tiefseehafen am Roten Meer."
    },
    factsAdvanced: {
      de: ["Rund 53.000 Einwohner, südlichste Stadt Israels.", "Am 10. März 1949 für Israel gesichert.", "Liegt am Golf von Akaba am Roten Meer.", "Über 360 Sonnentage pro Jahr.", "Korallenriffe und Coral Beach Naturreservat.", "Freie Wirtschaftszone ohne Mehrwertsteuer.", "Grenzt an Jordanien (Akaba) und nahe Ägypten.", "Antikes Etzion-Geber, Hafen König Salomos."]
    }, image: "/poi-images/eilat-cities-v2.webp"},
  {
    id: "afula-cities-v2",
    type: "city",
    parent: "IL-Z",
    coords: [35.2897, 32.6063],
    name: { de: "Afula", hu: "Afula", ro: "Afula", en: "Afula" },
    description: {
      de: "Afula ist oft als die Hauptstadt der Jesreelebene bekannt und befindet sich im Nordbezirk Israels.",
      hu: "Afula, amelyet gyakran a Jezréel-völgy fővárosaként emlegetnek, Izrael Északi körzetében található.",
      ro: "Afula este adesea cunoscută ca fiind capitala Văii Izreel, situată în Districtul de Nord al Israelului.",
      en: "Afula is often known as the Capital of the Jezreel Valley, located in the Northern District of Israel."
    },
    facts: {
      de: ["Wurde 1925 als moderne Siedlung gegründet.", "Ein wichtiger regionaler Verkehrsknotenpunkt.", "Ist von fruchtbaren landwirtschaftlichen Flächen umgeben."],
      hu: ["1925-ben alapították modern településként.", "Fontos regionális közlekedési csomópont.", "Termékeny mezőgazdasági területek veszik körül."],
      ro: ["A fost fondată în 1925 ca o așezare modernă.", "Un important nod de transport regional.", "Este înconjurată de terenuri agricole fertile."],
      en: ["Was established in 1925 as a modern settlement.", "An important regional transportation hub.", "Is surrounded by fertile agricultural lands."]
    },
    descriptionAdvanced: {
      de: "Afula wurde 1925 von der American Zionist Commonwealth auf Land gegründet, das von der Familie Sursock aus dem Libanon gekauft worden war. Die Stadt liegt im Herzen der fruchtbaren Jesreelebene, etwa auf halbem Weg zwischen Haifa und der See Genezareth, und wird oft als „Hauptstadt der Jesreelebene“ bezeichnet. Heute leben in Afula rund 55.000 Einwohner. In der Antike befand sich an dieser Stelle die kanaanitische Stadt Afula, die im 14. Jahrhundert v. Chr. in den Amarna-Briefen erwähnt wurde. Die moderne Stadt wuchs nach 1948 durch Einwanderer aus dem Irak, Marokko, Jemen und der Sowjetunion. Afula ist heute ein wichtiger regionaler Verkehrsknotenpunkt und Standort des HaEmek Medical Center, eines der größten Krankenhäuser Nordisraels. Die Stadt ist umgeben von Sonnenblumenfeldern, Weizen und Baumwollanbau."
    },
    factsAdvanced: {
      de: ["1925 von der American Zionist Commonwealth gegründet.", "Rund 55.000 Einwohner.", "Hauptstadt der Jesreelebene.", "In den Amarna-Briefen aus dem 14. Jh. v. Chr. erwähnt.", "HaEmek Medical Center, eines der größten im Norden.", "Umgeben von fruchtbaren Feldern.", "Auf halbem Weg zwischen Haifa und See Genezareth."]
    }, image: "/poi-images/afula-cities-v2.webp"},
  {
    id: "tiberias-cities-v2",
    type: "city",
    parent: "IL-Z",
    coords: [35.5312, 32.7897],
    name: { de: "Tiberias", hu: "Tibériás", ro: "Tiberias", en: "Tiberias" },
    description: {
      de: "Tiberias ist eine antike Stadt am Westufer des Sees Genezareth und gilt als eine der vier heiligen Städte des Judentums.",
      hu: "Tibériás egy ősi város a Galileai-tenger nyugati partján, amelyet a zsidóság négy szent városának egyikeként tartanak számon.",
      ro: "Tiberias este un oraș antic pe țărmul vestic al Mării Galileii, considerat unul dintre cele patru orașe sfinte ale iudaismului.",
      en: "Tiberias is an ancient city on the western shore of the Sea of Galilee, considered one of Judaism's Four Holy Cities."
    },
    facts: {
      de: ["Gegründet um 20 nach Christus von Herodes Antipas.", "Bekannt für seine historischen heißen Quellen.", "Ein bedeutendes Ziel für Pilger."],
      hu: ["Krisztus után 20 körül alapította Heródes Antipas.", "Történelmi melegvízű forrásairól ismert.", "Jelentős zarándokcélpont."],
      ro: ["Fondat în jurul anului 20 d.Hr. de Irod Antipa.", "Cunoscut pentru izvoarele sale termale istorice.", "O destinație majoră pentru pelerini."],
      en: ["Founded around 20 CE by Herod Antipas.", "Known for its historic hot springs.", "A major pilgrimage destination."]
    },
    descriptionAdvanced: {
      de: "Tiberias wurde im Jahr 20 n. Chr. von Herodes Antipas, dem Sohn Herodes des Großen, gegründet und nach dem römischen Kaiser Tiberius benannt. Die Stadt liegt am Westufer des Sees Genezareth, etwa 200 Meter unter dem Meeresspiegel, und ist eine der vier heiligen Städte des Judentums – neben Jerusalem, Hebron und Safed. Nach der Zerstörung Jerusalems 70 n. Chr. wurde Tiberias zum bedeutendsten jüdischen Zentrum Palästinas, hier entstand zwischen dem 4. und 6. Jahrhundert der Jerusalemer Talmud. Heute leben in Tiberias rund 48.000 Einwohner. Die Stadt ist berühmt für ihre 17 heißen Schwefelquellen, die bereits von den Römern als Hammat Tiberias genutzt wurden. Im Mittelalter war Tiberias Wirkungsstätte berühmter jüdischer Gelehrter wie Maimonides, dessen Grabstätte heute Pilgerziel ist. Im Sommer ist die Stadt ein beliebter Erholungsort am See Genezareth."
    },
    factsAdvanced: {
      de: ["20 n. Chr. von Herodes Antipas gegründet.", "Benannt nach Kaiser Tiberius.", "Rund 48.000 Einwohner.", "Eine der vier heiligen Städte des Judentums.", "Liegt 200 m unter dem Meeresspiegel am See Genezareth.", "Geburtsort des Jerusalemer Talmud (4.-6. Jh.).", "17 heiße Schwefelquellen seit der Römerzeit.", "Grabstätte des Maimonides."]
    }
  }
];
