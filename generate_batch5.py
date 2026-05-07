import json

data = {
  "lang": "de",
  "country": "northkorea",
  "files": [
    "lib/visualLab/data/poiExtraNorthkoreaLifeV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaNatureV2.ts"
  ],
  "items": [
    {
      "id": "wonsan-youth-park-life-v2",
      "descriptionAdvanced": "Der Jugendpark von Wŏnsan ist ein farbenfroher Vergnügungspark an der Ostküste Nordkoreas, der den Einwohnern der Hafenstadt als zentrales Erholungsgebiet dient. Im Gegensatz zu den oft elitären Parks in der Hauptstadt mischt sich hier die lokale Arbeiterklasse an Wochenenden und Feiertagen. Der Park ist bekannt für seine etwas in die Jahre gekommenen, aber liebevoll bemalten Karussells, Schaukeln und den unvermeidlichen Autoscooter, der oft von sowjetischer Marschmusik aus kratzigen Lautsprechern untermalt wird. In den umliegenden Grünanlagen wird gerne gegrillt, und Stände verkaufen Zuckerwatte und frisch gegrillte Meeresfrüchte aus der nahen Bucht. Sozialkunde K4 — städtisches Leben.",
      "factsAdvanced": [
        "Der Park liegt direkt an der Hafenpromenade von Wŏnsan.",
        "Er verfügt über einen klassischen Autoscooter und ein Riesenrad.",
        "Er wird hauptsächlich von der lokalen Bevölkerung der Ostküste genutzt.",
        "An Feiertagen finden hier Musikveranstaltungen und Tanzvorführungen statt.",
        "Im Park werden oft lokal gefangene, gegrillte Meeresfrüchte als Snack angeboten.",
        "Die Fahrgeschäfte stammen großteils noch aus dem 20. Jahrhundert."
      ]
    },
    {
      "id": "mankyongdae-funfair-life-v2",
      "descriptionAdvanced": "Der Mangyongdae-Vergnügungspark ist Pjöngjangs größter und historisch ältester Freizeitpark, gelegen unweit des angeblichen Geburtsortes von Kim Il-sung. Der Park wurde in den 1980er Jahren errichtet und bietet eine wilde Achterbahn, ein großes Karussell und verschiedene adrenalingeladene Überschlags-Fahrgeschäfte, die von ausländischen Herstellern, oft aus Japan, importiert wurden. Im Jahr 2012 geriet der Park in die Schlagzeilen, als Kim Jong-un das Gelände besuchte und die Leitung öffentlich wegen schlechter Instandhaltung rügte, woraufhin der Park umfassend renoviert wurde. Er bleibt eine seltene, staatlich sanktionierte Plattform für ausgelassene Jugendkultur. Sozialkunde K4 — städtisches Leben.",
      "factsAdvanced": [
        "Der Mangyongdae-Vergnügungspark wurde am 15. April 1982 eröffnet.",
        "Er liegt nur wenige Kilometer von Kim Il-sungs angeblichem Geburtshaus entfernt.",
        "Der Park erstreckt sich über ein sehr waldreiches, hügeliges Gebiet.",
        "Er verfügt über Nordkoreas größte Achterbahn (Doppellooping).",
        "2012 wurde der Park nach Kritik durch Kim Jong-un komplett modernisiert.",
        "Er ist besonders am Tag der Sonne (15. April) extrem gut besucht."
      ]
    },
    {
      "id": "north-korea-ginseng-farm-kaesong-life-v2",
      "descriptionAdvanced": "Die Ginseng-Farmen rund um die historische Stadt Kaesŏng sind das agrarische Kronjuwel Nordkoreas. Der hier angebaute rote Koryŏ-Ginseng (Insam) ist weltberühmt und gilt aufgrund der perfekten Bodenbeschaffenheit und des Mikroklimas als der hochwertigste der Welt. Auf den Farmen wächst die wertvolle Wurzel unter streng bewachten schwarzen Sonnenschutzdächern oft bis zu sechs Jahre, bevor sie geerntet wird. Die Wurzeln werden gewaschen, gedämpft und sonnengetrocknet, wodurch sie ihre rote Farbe erhalten. Dieser Ginseng ist nicht nur ein elementarer Bestandteil der traditionellen Medizin, sondern auch eines der wichtigsten und lukrativsten Exportgüter des Staates. Geografie K7 — Landwirtschaft.",
      "factsAdvanced": [
        "Kaesŏng ist das historische Zentrum des koreanischen Ginseng-Anbaus.",
        "Der rote Koryŏ-Ginseng muss oft 6 Jahre wachsen, bevor er geerntet wird.",
        "Er wird in Nordkorea zur Herstellung von Medizin, Tee und Likör genutzt.",
        "Der Anbau erfordert spezielle schwarze Netze zum Schutz vor direkter Sonne.",
        "Ginseng aus Kaesŏng ist ein wichtiges Exportgut nach China und Russland.",
        "Das Dämpfen und Trocknen gibt dem roten Ginseng (Hongsam) seine Farbe."
      ]
    },
    {
      "id": "songdowon-international-childrens-camp-life-v2",
      "descriptionAdvanced": "Das internationale Kindersommerlager Songdowŏn liegt in einem dichten Pinienwald an den weißen Sandstränden des Japanischen Meeres bei Wŏnsan. Seit seiner Eröffnung 1960 dient das Lager dazu, nordkoreanische Pionier-Jugendliche für herausragende schulische Leistungen zu belohnen und sie ideologisch zu schulen. Zugleich fungierte es während des Kalten Krieges als Begegnungsstätte mit Kindern aus verbündeten sozialistischen Staaten. 2014 wurde das Lager von Grund auf renoviert und gleicht heute einem Luxusresort mit Aquapark, modernem Aquarium, Kino und elektronischen Spielhallen. Der Aufenthalt hier ist ein begehrtes Statussymbol für die nordkoreanische Jugend. Sozialkunde K4 — städtisches Leben.",
      "factsAdvanced": [
        "Das Songdowŏn-Kinderlager wurde 1960 an der Küste von Wŏnsan gegründet.",
        "Es empfängt oft Delegationen von Kindern aus befreundeten Nationen (z. B. Russland).",
        "2014 wurde das Lager unter Kim Jong-un massiv zu einem Luxusresort umgebaut.",
        "Die Anlage umfasst ein Aquarium, ein Stadion und einen großen Wasserpark.",
        "Nur Kinder mit exzellenten Schulnoten dürfen das Lager besuchen.",
        "Militärische Disziplin und ideologische Schulung sind Teil des Ferienprogramms."
      ]
    },
    {
      "id": "taesong-reservoir-fishing-area-life-v2",
      "descriptionAdvanced": "Das Taesong-Reservoir in der Nähe von Pjöngjang ist ein künstlicher See, der ursprünglich für die Bewässerung der umliegenden landwirtschaftlichen Flächen und den Hochwasserschutz angelegt wurde. In den letzten Jahrzehnten hat sich das Reservoir jedoch zu einem der beliebtesten Angelgebiete für die Einwohner der Hauptstadt entwickelt. An Wochenenden säumen unzählige Fischer die Ufer, oft Funktionäre oder Arbeiter, die hier Ruhe vom städtischen Stress suchen und versuchen, den kargen Speiseplan mit Karpfen oder Süßwasseraal aufzubessern. Im Winter, wenn der See zufriert, wird das Gebiet für das traditionelle Eisfischen durch gebohrte Löcher genutzt. Biologie K6 — Tiere und Lebensräume.",
      "factsAdvanced": [
        "Das Taesong-Reservoir dient in erster Linie der Agrarbewässerung.",
        "Es liegt am westlichen Rand der Hauptstadt Pjöngjang.",
        "Der See ist ein Hotspot für das Sport- und Überlebensangeln der Einheimischen.",
        "Oft werden hier Karpfen, Forellen und Süßwasseraale gefangen.",
        "Im Winter friert der See zu und wird zum Eisfischen genutzt.",
        "Das Gebiet ist von bewaldeten Hügeln umgeben und dient als Naherholungsgebiet."
      ]
    },
    {
      "id": "kaesong-folklore-park-life-v2",
      "descriptionAdvanced": "Der Kaesŏng-Folklore-Park ist ein malerischer Hotelkomplex mitten in der Altstadt von Kaesŏng, der Besuchern das Gefühl gibt, in die Vergangenheit der Koryŏ-Dynastie zu reisen. Die Anlage besteht aus einem Netz authentischer, restaurierter Hanok-Häuser mit Holzsäulen, geschwungenen Ziegeldächern und durch das Ondol-System beheizten Fußböden. In den Gassen plätschern kleine Bäche, und das Essen, meist traditionelles Pansanggi, wird in unzähligen kleinen Messingschalen serviert. Es ist eine der wenigen Möglichkeiten für ausländische Touristen, in Nordkorea außerhalb standardisierter Betonhotels zu übernachten und die traditionelle koreanische Lebensweise direkt zu erfahren. Sozialkunde K4 — städtisches Leben.",
      "factsAdvanced": [
        "Der Folklore-Park fungiert als traditionelles Hotel in der Altstadt von Kaesŏng.",
        "Die Gäste schlafen auf dem Boden in Häusern mit Ondol-Fußbodenheizung.",
        "Die Gebäude stammen teils aus dem 19. Jahrhundert und wurden restauriert.",
        "Das Gelände ist von einem kleinen Bachlauf durchzogen.",
        "Das Essen wird im traditionellen Pansanggi-Stil (viele kleine Messingschalen) serviert.",
        "Die Zimmer haben Papierfenster und sind mit koreanischer Kunst dekoriert."
      ]
    },
    {
      "id": "samjiyon-potato-farms-life-v2",
      "descriptionAdvanced": "Die Kartoffelfarmen in der extrem kalten, bergigen Provinz Ryanggang rund um die Stadt Samjiyŏn sind von vitaler Bedeutung für die Ernährungssicherung Nordkoreas. Da in dieser hochgelegenen Region am Berg Paektu der Reisanbau aufgrund von Frost unmöglich ist, hat der Staat die Kartoffel zur Hauptnahrungsquelle des Nordens erklärt. Die Farmen erstrecken sich über weite Hochebenen, und die Ernte wird oft durch Massenmobilisierungen von Studenten unterstützt. In den späten 1990er Jahren wurde die 'Kartoffel-Revolution' propagandistisch ausgerufen, um Hungersnöte zu bekämpfen. In Samjiyŏn steht sogar eine spezielle Fabrik für die Verarbeitung von Kartoffelstärke. Geografie K7 — Landwirtschaft.",
      "factsAdvanced": [
        "Samjiyŏn liegt auf einer Hochebene in über 1.300 Metern Höhe.",
        "Wegen der Kälte ist der Reisanbau dort unmöglich, weshalb Kartoffeln angebaut werden.",
        "Ende der 1990er Jahre rief der Staat die 'Kartoffel-Revolution' aus.",
        "Die Farmen in Samjiyŏn sind die produktivsten Kartoffelfarmen des Landes.",
        "In der Region gibt es auch das staatliche Kartoffelforschungszentrum.",
        "Samjiyŏn produziert auch große Mengen an Kartoffelstärke für Nudeln."
      ]
    },
    {
      "id": "kumgang-park-wonsan-life-v2",
      "descriptionAdvanced": "Der Kŭmgang-Park (Diamant-Park) ist eine städtische Erholungsanlage in der Küstenstadt Wŏnsan. Er wurde angelegt, um den Bürgern einen Hauch der Schönheit des nahegelegenen Kŭmgang-Gebirges in die Stadt zu bringen. Der Park ist geprägt von sorgfältig angelegten künstlichen Teichen, Felsformationen, die an Miniatur-Berge erinnern, und blühenden Gärten. In den warmen Sommermonaten entfliehen Familien den Plattenbauten der Stadt, um im Schatten der Pinien zu sitzen, Tee zu trinken und das Treiben der Jugend auf den Promenaden zu beobachten. Der Park ist ein Beispiel für den starken Fokus der Regierung auf landschaftsarchitektonische Ästhetik im öffentlichen Raum. Sozialkunde K4 — städtisches Leben.",
      "factsAdvanced": [
        "Der Park liegt zentral in der Hafenstadt Wŏnsan.",
        "Er wurde als Miniaturversion der berühmten Kŭmgang-Berge entworfen.",
        "Künstliche Felsen und Teiche prägen das Landschaftsbild.",
        "Der Park bietet den Stadtbewohnern einen kühlen Rückzugsort im Sommer.",
        "Die Bepflanzung umfasst traditionelle koreanische Kiefern.",
        "Er ist oft Schauplatz für Hochzeitsfotografien von lokalen Paaren."
      ]
    },
    {
      "id": "rason-seafood-market-life-v2",
      "descriptionAdvanced": "Der Meeresfrüchte-Markt in Rasŏn, der Sonderwirtschaftszone im äußersten Nordosten Nordkoreas, ist einer der lebendigsten und kommerziellsten Orte des Landes. Aufgrund der gelockerten wirtschaftlichen Regeln herrscht hier ein geschäftiges Treiben, das eher an chinesische Fischmärkte erinnert. Die Stände biegen sich unter der Last von frischen Königskrabben, riesigen Tintenfischen, Muscheln und Seeigeln, die direkt aus den eisfreien Gewässern des Japanischen Meeres gefangen wurden. Die Kunden sind oft russische und chinesische Geschäftsleute, die den Markt besuchen und die Meeresfrüchte in den anliegenden Restaurants direkt zubereiten lassen. Es ist eine Blase des unregulierten Kapitalismus. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Markt befindet sich in der Sonderwirtschaftszone Rasŏn.",
        "Rasŏn grenzt direkt an China und Russland.",
        "Auf dem Markt kann oft legal mit chinesischem Yuan bezahlt werden.",
        "Besonders begehrt sind die gigantischen Königskrabben und Seeigel.",
        "Kunden können den Fisch kaufen und vor Ort frisch kochen lassen.",
        "Der Markt bietet einen seltenen Einblick in den privaten Kleinhandel in Nordkorea."
      ]
    },
    {
      "id": "paektu-mountain-nature-v2",
      "descriptionAdvanced": "Der Paektu-san, ein gewaltiger ruhender Stratovulkan an der chinesisch-nordkoreanischen Grenze, ist mit 2.744 Metern der höchste Gipfel der koreanischen Halbinsel. Sein Name bedeutet 'Weißkopfberg', da die Gipfelregion oft acht Monate im Jahr mit Schnee bedeckt ist. Das absolute Herzstück des Berges ist die gewaltige, fünf Kilometer breite Caldera, in der sich der kristallklare 'Himmelssee' (Chonji) befindet. Das umgebende raue alpine Ökosystem beheimatet seltene Arten wie den Amurleoparden und Braunbären. In der koreanischen Mythologie gilt der Berg als heilig und als der Ursprungsort der gesamten koreanischen Zivilisation. Geografie K7 — Berge und Täler.",
      "factsAdvanced": [
        "Der Berg ist mit 2.744 Metern die höchste Erhebung beider Koreas.",
        "Die fünf Kilometer breite Caldera entstand durch eine Supereruption im Jahr 946.",
        "Der Himmelssee in der Caldera ist bis zu 384 Meter tief.",
        "Der Vulkan gilt als ruhend, steht aber unter ständiger Überwachung.",
        "Das extreme alpine Klima sorgt für acht Monate Schneebedeckung im Jahr.",
        "Die umliegenden Wälder sind Heimat des gefährdeten Amurtigers."
      ]
    },
    {
      "id": "myohyang-mountains-nature-v2",
      "descriptionAdvanced": "Das Myohyang-Gebirge ('Berg der geheimnisvollen Düfte') ist eine spektakuläre Gebirgskette in der Provinz Nord-P'yŏngan, bekannt für seine steil aufragenden, zackigen Granitgipfel und dichten Nadelwälder. Das Gebiet ist von tiefen Schluchten, klaren Gebirgsflüssen und dramatischen Wasserfällen durchzogen. Seinen Namen verdankt das Gebirge dem harzigen Duft der vielen Zypressen und Wacholderbäume. Das Myohyang-Gebirge wurde von der UNESCO als Biosphärenreservat anerkannt, da es eine unglaubliche Biodiversität aufweist, darunter 30 seltene Pflanzenarten und vom Aussterben bedrohte asiatische Schwarzbären. Die mystische Landschaft inspirierte unzählige Dichter und ist tief in der koreanischen Folklore verwurzelt. Geografie K7 — Berge und Täler.",
      "factsAdvanced": [
        "Der höchste Gipfel des Myohyang-san, der Piro-bong, ist 1.909 Meter hoch.",
        "Die UNESCO erklärte das Gebirge 2009 zum Biosphärenreservat.",
        "Der Name bedeutet 'Berg der geheimnisvollen Düfte' aufgrund der Zypressenwälder.",
        "Das Gebirge beherbergt viele gefährdete asiatische Schwarzbären.",
        "Es gibt unzählige hohe Wasserfälle, wie den Ryongyon-Wasserfall.",
        "Die Granitfelsen formen oft extrem steile, nadelartige Gipfel."
      ]
    },
    {
      "id": "kumgang-mountains-nature-v2",
      "descriptionAdvanced": "Das Kŭmgang-Gebirge (Diamantgebirge) an der Ostküste Nordkoreas gilt seit Jahrhunderten als die schönste Landschaft der gesamten koreanischen Halbinsel. Die Gebirgskette ist berühmt für ihre 12.000 zerklüfteten, nadelartigen Granitfelsen, die fast senkrecht in den Himmel ragen. Das Gebirge ändert je nach Jahreszeit sein Aussehen und seinen Namen in der lokalen Poesie drastisch. Zwischen den Felsen verbergen sich tiefgrüne, glasklare Becken (die Kuryong-Teiche) und unzählige Wasserfälle. Das Gebiet war bis 2008 Teil eines einzigartigen Tourismusprojekts, bei dem Südkoreaner in dieses isolierte Naturparadies reisen durften, bis politische Spannungen das Projekt beendeten. Geografie K7 — Berge und Täler.",
      "factsAdvanced": [
        "Das Kŭmgang-Gebirge wird traditionell als Heimat von 12.000 Felsgipfeln beschrieben.",
        "Der höchste Gipfel, der Piro-bong, misst 1.638 Meter.",
        "Das Gebirge hat vier verschiedene Namen, je nach Jahreszeit.",
        "Zwischen 1998 und 2008 durften Südkoreaner als Touristen in das Gebiet reisen.",
        "Die Kuryong-Wasserfälle (Neun-Drachen-Wasserfälle) sind eine Hauptattraktion.",
        "Die bizarren Gesteinsformationen entstanden durch Wind- und Wassererosion."
      ]
    },
    {
      "id": "taedong-river-nature-v2",
      "descriptionAdvanced": "Der Taedong-Fluss ist die Lebensader Nordkoreas und fließt über 439 Kilometer aus den rauen Nangnim-Bergen quer durch das Land, teilt die Hauptstadt Pjöngjang und mündet bei Namp'o in das Gelbe Meer. Der Fluss ist schiffbar und von immenser wirtschaftlicher Bedeutung für den Transport von Kohle und Stahl in die industriellen Zentren. An den Ufern in Pjöngjang reihen sich die wichtigsten Monumente des Landes auf, und die berühmte Rungra-Insel liegt inmitten seines Stroms. Der Taedong-Fluss prägt das Mikroklima der umliegenden Ebenen und versorgt die Landwirtschaft der Taedong-Ebene mit überlebenswichtigem Wasser. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Taedong ist mit 439 Kilometern einer der längsten Flüsse Nordkoreas.",
        "Er entspringt im Nangnim-Gebirge im nördlichen Inland.",
        "Der Fluss fließt direkt durch das Zentrum der Hauptstadt Pjöngjang.",
        "Ein 8 Kilometer langer Staudamm (Westmeer-Staudamm) schützt die Mündung bei Namp'o.",
        "Der Fluss ist für Frachtschiffe teilweise tief ins Landesinnere schiffbar.",
        "Er friert im harten nordkoreanischen Winter für mehrere Monate zu."
      ]
    },
    {
      "id": "yalu-river-nature-v2",
      "descriptionAdvanced": "Der Yalu-Fluss (koreanisch: Amnok-gang) bildet auf knapp 800 Kilometern die natürliche, oft unwegsame Grenze zwischen Nordkorea und der Volksrepublik China. Er entspringt dem Himmelssee auf dem Berg Paektu und schlängelt sich durch tiefe, bewaldete Schluchten, bis er bei Sinŭiju ins Gelbe Meer mündet. Der Yalu ist strategisch und wirtschaftlich extrem wichtig; zahlreiche Staudämme, wie das riesige Sup'ung-Wasserkraftwerk, regulieren seinen Lauf und produzieren Strom für beide Länder. Im Winter friert der Fluss oft meterdick zu, was ihn in der Vergangenheit zu einer riskanten Fluchtroute für Nordkoreaner nach China machte. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Yalu (Amnok-gang) ist 790 Kilometer lang.",
        "Er markiert fast die gesamte westliche Grenze zwischen China und Nordkorea.",
        "Der Fluss entspringt direkt im Bergsee des Paektu-san.",
        "Während des Koreakriegs war das Tal als 'MiG Alley' für intensive Luftkämpfe berüchtigt.",
        "Das Wasser treibt das riesige binationale Sup'ung-Wasserkraftwerk an.",
        "Bei Sinŭiju verbindet die Chinesisch-Koreanische Freundschaftsbrücke beide Länder."
      ]
    },
    {
      "id": "tumen-river-nature-v2",
      "descriptionAdvanced": "Der Tumen-Fluss (koreanisch: Tuman-gang) ist der zweitlängste Grenzfluss Nordkoreas und bildet die nordöstliche Demarkationslinie zu China und auf den letzten 17 Kilometern zu Russland. Im Vergleich zum Yalu ist der Tumen viel flacher und schmaler, und er fließt durch karge, extrem kalte Gebirgsregionen, bevor er ins Japanische Meer mündet. Wegen des flachen Wassers und der abgelegenen Landschaft war der Tumen in den 1990er Jahren der Hauptübergangsort für Flüchtlinge und Schmuggler, weshalb die Ufer heute beidseitig massiv militärisch überwacht und mit Stacheldraht gesichert sind. Die Region ist ökologisch fragil und wird durch Industrieabwässer bedroht. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Tumen-Fluss hat eine Länge von 521 Kilometern.",
        "Er entspringt an den östlichen Hängen des Berges Paektu.",
        "Der Fluss bildet die Grenze zu China und Russland.",
        "Aufgrund seines flachen Bettes ist er im Winter ein oft genutzter Fluchtweg gewesen.",
        "Die Region um den Fluss ist berüchtigt für extrem harte und schneereiche Winter.",
        "Das Wasserland am Dreiländereck ist ein wichtiges Refugium für Zugvögel."
      ]
    },
    {
      "id": "chongchon-river-nature-v2",
      "descriptionAdvanced": "Der Ch'ŏngch'ŏn-Fluss ('Klarer Frühlingsfluss') entspringt im wilden Nangnim-Gebirge und durchfließt die Provinzen Nord- und Süd-P'yŏngan, bevor er sich in das Gelbe Meer ergießt. Entlang seines Laufes hat der Fluss tiefe, spektakuläre Schluchten in den Karststein gefräst. Das Flusstal ist die Heimat einiger der wichtigsten industriellen Zentren Nordkoreas, wie des Anju-Kohlebeckens und der Maschinenbaustadt Hŭichŏn. Trotz der starken industriellen Nutzung seiner Ufergebiete behält der Oberlauf seine wilde, natürliche Schönheit. Historisch ist das Tal bedeutend, da hier während des Koreakriegs heftige Entscheidungsschlachten der UN-Truppen gegen chinesische Einheiten stattfanden. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Ch'ŏngch'ŏn-Fluss hat eine Länge von etwa 217 Kilometern.",
        "Sein Name bedeutet 'Klarer Frühlingsfluss'.",
        "Die Mündung des Flusses am Gelben Meer beherbergt das Mundŏk-Vogelschutzgebiet.",
        "Das Flusstal trennt das Nangnim-Gebirge vom Kujang-Becken.",
        "Während des Koreakriegs fand hier Ende 1950 die Schlacht am Ch'ŏngch'ŏn-Fluss statt.",
        "Der Fluss liefert das Wasser für die riesigen Kohleminen bei Anju."
      ]
    },
    {
      "id": "heaven-lake-nature-v2",
      "descriptionAdvanced": "Der Himmelssee (Chonji) ist ein atemberaubender Kratersee, der sich in der gigantischen Caldera des Paektu-Vulkans an der chinesisch-nordkoreanischen Grenze gebildet hat. Auf fast 2.200 Metern Höhe gelegen, ist er der höchste und kälteste Kratersee der Welt. Das tiefblaue, eisige Wasser spiegelt die schroffen, grauen Kraterwände wider. Der See ist aufgrund des extremen Mikroklimas von Mitte Oktober bis Mitte Juni komplett zugefroren, mit Eisdicken von bis zu einem Meter. Für die Koreaner hat der See eine zutiefst mystische Bedeutung und wird oft als der spirituelle Ursprung der Nation und Seele des koreanischen Volkes verehrt. Geografie K7 — Berge und Täler.",
      "factsAdvanced": [
        "Der Himmelssee liegt auf einer Höhe von 2.189 Metern über dem Meeresspiegel.",
        "Er ist der tiefste Kratersee Asiens mit einer maximalen Tiefe von 384 Metern.",
        "Die Grenze zwischen Nordkorea und China verläuft genau durch die Mitte des Sees.",
        "Der See wird hauptsächlich von Niederschlägen und heißen Quellen unter Wasser gespeist.",
        "Im See wurden gelegentlich angebliche Sichtungen eines 'Seeungeheuers' gemeldet.",
        "Die Durchschnittstemperatur des Sees beträgt knapp über dem Gefrierpunkt."
      ]
    },
    {
      "id": "sijung-lake-nature-v2",
      "descriptionAdvanced": "Der Sijung-See ist eine malerische natürliche Lagune an der Ostküste Nordkoreas, südlich von Wŏnsan gelegen. Ursprünglich eine kleine Bucht des Japanischen Meeres, wurde der See durch eine gewaltige Sandbank vom offenen Meer abgetrennt, sodass er heute eine ruhige Wasserfläche umgeben von dichten Pinienwäldern ist. Der See ist berühmt für seinen mineralreichen, tiefschwarzen Heilschlamm, der in speziellen Sanatorien zur Behandlung von Haut- und Gelenkkrankheiten genutzt wird. Der Sijung-See bietet eine friedliche Naturkulisse und ist eines der beliebtesten Ziele für Medizintourismus und Erholung der nordkoreanischen Elite. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Sijung-See liegt in der Provinz Kangwŏn direkt an der Ostküste.",
        "Er ist 3,5 Kilometer lang und durch eine Sandbank vom Meer getrennt.",
        "Der See ist bekannt für seine Heilschlamm-Behandlungen (Peloidtherapie).",
        "Ein großes Kurhotel am Ufer bietet diese Schlammbäder an.",
        "Das Wasser ist leicht brackig, da es noch Verbindungen zum Ozean hat.",
        "Die weißen Sandstrände am Meer sind vom See aus zu Fuß erreichbar."
      ]
    },
    {
      "id": "rangrim-mountains-nature-v2",
      "descriptionAdvanced": "Das Nangnim-Gebirge bildet das raue, unwegsame topografische Rückgrat Nordkoreas und verläuft fast senkrecht durch die Mitte des Landes, wodurch es die östlichen und westlichen Küstenebenen drastisch voneinander trennt. Diese hochalpine Kette besteht aus massiven Granitblöcken und ist von dichten, alten borealen Nadelwäldern bedeckt. Aufgrund seiner Höhe und Unzugänglichkeit wirkt das Gebirge wie eine klimatische Barriere, die die harten sibirischen Winterwinde abfängt. Das Nangnim-Gebirge ist extrem dünn besiedelt und beheimatet viele von Nordkoreas Wasserkraft-Ressourcen sowie einen großen Teil der unberührten Wildnis, in der Bären, Luchse und Wildschweine leben. Geografie K7 — Berge und Täler.",
      "factsAdvanced": [
        "Das Nangnim-Gebirge teilt Nordkorea in eine Ost- und Westflanke.",
        "Der höchste Gipfel, der Wagal-bong, erreicht eine Höhe von 2.260 Metern.",
        "Das Gebirge agiert als klimatische Barriere für den winterlichen Nordwestwind.",
        "Es ist die Quelle vieler großer Flüsse, wie dem Taedong und dem Ch'ŏngch'ŏn.",
        "Die Berge sind fast vollständig mit dichten Tannen- und Lärchenwäldern bedeckt.",
        "Die extrem tiefe Täler machten den Bau einer Ost-West-Eisenbahn sehr schwierig."
      ]
    },
    {
      "id": "mantap-san-nature-v2",
      "descriptionAdvanced": "Der Mantap-san ist ein markanter, 2.205 Meter hoher Berg im Bezirk P'unggye-ri in der Provinz Nord-Hamgyŏng. In der Geologie Nordkoreas sticht dieser massive Granitberg hervor, doch weltweite Bekanntheit erlangte er weniger durch seine Natur als durch das dunkle Geheimnis in seinem Inneren: Er war das Zentrum des nordkoreanischen Atomwaffenprogramms. Tief unter dem Berg wurden ein riesiges Tunnelnetzwerk und Testschächte gebohrt, in denen das Land alle seine unterirdischen Nukleartests durchführte. Die extrem harte Granitstruktur des Berges war der Hauptgrund für die Wahl dieses Ortes, um den Austritt radioaktiver Strahlung zu verhindern. Geografie K7 — Berge und Täler.",
      "factsAdvanced": [
        "Der Mantap-san erreicht eine Höhe von 2.205 Metern.",
        "Der Berg besteht fast vollständig aus hartem Diorit und Granit.",
        "Tief im Berg befand sich das Atomtestgelände P'unggye-ri.",
        "Unter dem Berg fanden alle sechs bisherigen nordkoreanischen Nukleartests statt.",
        "Nach dem großen Atomtest 2017 wurden leichte Veränderungen in der Bergstruktur (Absenkungen) gemessen.",
        "Das Testgelände wurde 2018 vor ausländischen Journalisten offiziell gesprengt."
      ]
    },
    {
      "id": "jangja-river-nature-v2",
      "descriptionAdvanced": "Der Changja-Fluss ist ein wilder Gebirgsfluss im Norden Nordkoreas, der tief in der Nangnim-Bergkette entspringt und sich ungezähmt durch die zerklüftete Provinz Chagang schlängelt, bis er in den Yalu mündet. Wegen seines enormen Gefälles und der reißenden Strömung wurde der Fluss in der modernen Geschichte massiv für die Energiegewinnung erschlossen, was zum Bau zahlreicher in die Berge gesprengter Staudämme führte. Die enge, V-förmige Changja-Schlucht bot der nordkoreanischen Regierung den perfekten, vor Luftangriffen geschützten Standort für den Bau der Rüstungshochburg Kanggye. Trotz der Industrie bleibt das Tal eine raue Naturlandschaft. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Changja-Fluss ist ein bedeutender Nebenfluss des Yalu.",
        "Er fließt durch die extrem gebirgige Provinz Chagang.",
        "Der Fluss durchschneidet die Stadt Kanggye, das Zentrum der Rüstungsindustrie.",
        "Entlang des Flusses gibt es mehrere Staudämme zur Stromerzeugung.",
        "Das tiefe Flusstal bot im Koreakrieg Schutz vor Bombardierungen.",
        "In Kanggye gibt es große Fischfarmen, die das kalte Wasser des Flusses nutzen."
      ]
    },
    {
      "id": "imjin-river-nature-v2",
      "descriptionAdvanced": "Der Imjin-Fluss entspringt in Nordkorea und fließt nach Süden durch die demilitarisierte Zone (DMZ) bis nach Südkorea, wo er nahe dem Gelben Meer in den Han-Fluss mündet. Seine gewundenen Flussbiegungen durchschneiden steile Felsen und weite Schilfebenen. Der Imjin ist ein Fluss mit tragischer historischer Symbolik; er ist in der koreanischen Folklore oft das Motiv für Trennung und Schmerz. In der modernen Geschichte war der Fluss Schauplatz schwerster Kämpfe während des Koreakriegs, insbesondere der Schlacht am Imjin. Da der Fluss die hochgesicherte Grenze überquert, ist er streng überwacht und oft ein Ort politischer Spannungen, beispielsweise durch plötzliche Staudamm-Öffnungen im Norden. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Imjin-Fluss ist insgesamt 254 Kilometer lang.",
        "Er fließt aus Nordkorea direkt durch die stark verminte DMZ in den Süden.",
        "Im Koreakrieg 1951 fand hier eine der blutigsten Schlachten statt.",
        "In der koreanischen Poesie gilt der Fluss als Symbol der traurigen nationalen Teilung.",
        "Der nordkoreanische Hwanggang-Damm am Oberlauf sorgt oft für Streit wegen Hochwasser in Südkorea.",
        "Aufgrund der militärischen Sperrgebiete ist die Natur am Fluss extrem unberührt."
      ]
    },
    {
      "id": "sapho-lake-nature-v2",
      "descriptionAdvanced": "Der Sapho-See in der Provinz Süd-Hamgyŏng ist einer der stilleren, abgelegenen Naturjuwelen Nordkoreas. Erschaffen durch Stauungen im Gebirgsflussnetz, liegt dieser tiefe See inmitten steiler, unbewohnter Wälder und besticht durch sein glasklares, smaragdgrünes Wasser. Der See wird stark von der nordkoreanischen Führung als elitäres Rückzugsgebiet genutzt; in seinen versteckten Buchten befinden sich hochsichere Gästehäuser und geheime Villen, weshalb das Gebiet für die normale Bevölkerung und westliche Touristen unzugänglich ist. Umgeben von unberührter Natur, ist der See ein exklusives Paradies, in dem die Tierwelt ungestört florieren kann. Geografie K7 — Flüsse und Seen.",
      "factsAdvanced": [
        "Der Sapho-See liegt isoliert in der Gebirgsprovinz Süd-Hamgyŏng.",
        "Das Wasser des Sees hat aufgrund des tiefen Gesteins eine intensive smaragdgrüne Farbe.",
        "An den Ufern befinden sich geheime staatliche Villen und Residenzen.",
        "Das Gebiet um den See ist militärisches und staatliches Sperrgebiet.",
        "Der See bietet einen perfekten natürlichen Lebensraum für Wasservögel und Rehe.",
        "Die extreme Stille des Ortes ist ein großer Kontrast zu den industriellen Küstenstädten."
      ]
    },
    {
      "id": "ohyon-ri-laarch-forest-nature-v2",
      "descriptionAdvanced": "Der Ohyŏn-ri-Lärchenwald in der alpinen Region Nordkoreas ist ein riesiger, unberührter Urwald, der durch ein raues, subarktisches Mikroklima geprägt ist. Die massiven Dahurischen Lärchen (Larix gmelinii) wachsen hier in dichten Beständen und werfen im extrem kalten Winter ihre Nadeln ab. Im Herbst verwandelt sich der gesamte Wald in ein leuchtend gelb-goldenes Meer, das einen dramatischen Kontrast zu den grauen Granitbergen bietet. Dieser Wald ist ein wichtiges Schutzgebiet für die biologische Vielfalt der koreanischen Halbinsel, bewohnt von Marderhunden, Wildschweinen und seltenen Spechtarten, und wird vom Staat als naturkundliches Denkmal streng geschützt. Biologie K6 — Tiere und Lebensräume.",
      "factsAdvanced": [
        "Der Lärchenwald liegt in den nordöstlichen Hochgebirgsregionen.",
        "Die vorherrschende Baumart ist die frostresistente Dahurische Lärche.",
        "Die Lärchen färben sich im Herbst leuchtend golden und verlieren im Winter ihre Nadeln.",
        "Das Reservat schützt die einzigartige boreale (taiga-ähnliche) Vegetation Nordkoreas.",
        "Die Wälder sind Heimat für seltene Säugetiere wie den koreanischen Marderhund.",
        "Der Wald gilt offiziell als 'Naturdenkmal' und steht unter staatlichem Schutz."
      ]
    },
    {
      "id": "ryongnim-virgin-forest-nature-v2",
      "descriptionAdvanced": "Der Ryongnim-Urwald in der abgeschiedenen Provinz Chagang ist eines der letzten intakten Wildnisgebiete Ostasiens. Fernab jeglicher Industrie wachsen hier riesige koreanische Kiefern, alte Eichen und Fichten zu einem fast undurchdringlichen Dickicht heran, dessen Waldboden mit tiefem Moos und wildem Ginseng bedeckt ist. Da das schwer zugängliche Terrain kommerziellen Holzeinschlag verhindert hat, ist der Wald ein absolut intaktes, geschlossenes Ökosystem geblieben. Er dient als primäres Rückzugsgebiet für die letzten noch lebenden koreanischen Amurleoparden und asiatischen Schwarzbären und verkörpert die wilde, ungezähmte Seele der nordkoreanischen Bergwelt. Biologie K6 — Tiere und Lebensräume.",
      "factsAdvanced": [
        "Der Ryongnim-Urwald liegt im Zentrum der Bergprovinz Chagang.",
        "Es ist einer der ältesten und am wenigsten berührten Wälder Nordkoreas.",
        "Das Gebiet ist schwer zugänglich, weshalb kein industrieller Holzeinschlag stattfindet.",
        "Der dichte Urwald beheimatet gefährdete Arten wie den asiatischen Schwarzbären.",
        "Der Waldboden ist berühmt für wild wachsende Pilze und wilden Ginseng.",
        "Das Ökosystem ähnelt stark den fernen sibirischen Taiga-Wäldern."
      ]
    }
  ]
}

with open('/mnt/c/Users/User/plizio-repo/seo_outputs/seo_northkorea_de_batch5.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
