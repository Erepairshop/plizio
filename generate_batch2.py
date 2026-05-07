import json

data = {
  "lang": "de",
  "country": "northkorea",
  "files": [
    "lib/visualLab/data/poiExtraNorthkoreaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNorthkoreaEconomicV2.ts"
  ],
  "items": [
    {
      "id": "kujang-cities-v2",
      "descriptionAdvanced": "Kujang ist eine Industriestadt in der Provinz Nord-P'yŏngan, die am Kreuzungspunkt wichtiger Eisenbahnstrecken liegt. Die Region ist landesweit bekannt als Zentrum des intensiven Kohlebergbaus und der Zementproduktion, was sie zu einem Rückgrat der nordkoreanischen Schwerindustrie macht. Neben der Industrie hat Kujang auch landschaftliche Reize zu bieten, insbesondere das malerische Ch'ŏngch'ŏn-Tal, das von steilen Klippen gesäumt ist. Für Touristen und einheimische Besucher sind die nahegelegenen Ryongmun-Höhlen, ein massives unterirdisches Karsthöhlensystem mit beeindruckenden Stalaktiten, eine große Attraktion. Kujang verbindet somit harte Industriearbeit mit einzigartigen Naturdenkmälern. Geografie K7 — asiatische Metropolen.",
      "factsAdvanced": [
        "Kujang ist ein wichtiger Eisenbahnknotenpunkt in Nord-P'yŏngan.",
        "Die Region verfügt über massive Kohle- und Kalksteinvorkommen.",
        "Die Ryongmun-Höhlen bei Kujang erstrecken sich über 6 Kilometer.",
        "In der Nähe fließt der bedeutende Ch'ŏngch'ŏn-Fluss.",
        "Die Stadt beherbergt große Zementfabriken.",
        "Die industrielle Entwicklung von Kujang begann in den 1970er Jahren."
      ]
    },
    {
      "id": "tokchon-cities-v2",
      "descriptionAdvanced": "Tŏkchŏn liegt in der Provinz Süd-P'yŏngan am Oberlauf des Taedong-Flusses und ist eine der wichtigsten Automobil- und Industriestädte Nordkoreas. Die Stadt ist vor allem berühmt für die Sŭngri-Motorenwerke, den größten Hersteller von zivilen und militärischen Lkw, Bussen und Traktoren im Land. Die Wirtschaft von Tŏkchŏn ist vollständig auf die Fahrzeugproduktion und den dazugehörigen Kohlebergbau zur Energiegewinnung ausgerichtet. Die Stadt liegt in einem Talkessel, was bei Industrie-Emissionen oft zu Umweltproblemen führt. Trotzdem spielt Tŏkchŏn eine Schlüsselrolle für die logistische Unabhängigkeit des Staates. Geografie K7 — asiatische Metropolen.",
      "factsAdvanced": [
        "Tŏkchŏn liegt am Oberlauf des Taedong-Flusses.",
        "Die Sŭngri-Motorenwerke wurden 1950 in Tŏkchŏn gegründet.",
        "Die Einwohnerzahl der Stadt beträgt knapp über 200.000.",
        "Tŏkchŏn ist das Zentrum der nordkoreanischen Lkw-Produktion.",
        "In der Region um die Stadt gibt es mehrere große Kohleminen.",
        "1986 wurde Tŏkchŏn offiziell in den Status einer Stadt (Si) erhoben."
      ]
    },
    {
      "id": "yongbyon-cities-v2",
      "descriptionAdvanced": "Yŏngbyŏn ist ein Landkreis in der Provinz Nord-P'yŏngan, der weltweite Bekanntheit für das gleichnamige Kernforschungszentrum erlangt hat. Abseits der nuklearen Anlagen ist Yŏngbyŏn jedoch eine historisch reiche und malerische Region. Vor dem 20. Jahrhundert war die Stadt ein wichtiges Zentrum der Seidenproduktion und berühmt für ihre feinen Textilien. Geografisch ist das Gebiet von Bergen und dem kurvenreichen Kuryong-Fluss geprägt. Historische Stätten, wie die Yaksan-Dongdae, eine berühmte Felsformation, sowie antike Pavillons und Tempel aus der Koryŏ-Zeit, zeugen von der langen kulturellen Geschichte dieser strategisch umkämpften Region. Geografie K7 — asiatische Metropolen.",
      "factsAdvanced": [
        "Yŏngbyŏn beherbergt Nordkoreas bekanntestes Kernforschungszentrum.",
        "Der Landkreis war historisch für seine hochwertige Seide bekannt.",
        "Die nuklearen Anlagen wurden ab den 1960er Jahren erbaut.",
        "Der Kuryong-Fluss durchfließt die Region.",
        "Yaksan-Dongdae ist eine berühmte landschaftliche Sehenswürdigkeit vor Ort.",
        "In der Gegend gibt es noch erhaltene Festungsmauern aus der Koryŏ-Zeit."
      ]
    },
    {
      "id": "pakchon-cities-v2",
      "descriptionAdvanced": "Pakchŏn ist eine Stadt im Süden der Provinz Nord-P'yŏngan, die am Ufer des Taeryŏng-Flusses liegt. Im Gegensatz zu den industriellen Zentren des Nordens ist Pakchŏn stark landwirtschaftlich geprägt. Die weiten Ebenen entlang des Flusses bieten ideale Bedingungen für den Reisanbau, weshalb die Region eine wichtige Rolle für die Lebensmittelversorgung des Landes spielt. Zudem ist Pakchŏn bekannt für seine reiche Tradition in der Töpferei und handwerklichen Keramik, die bis in die Koryŏ-Zeit zurückreicht. Die Stadt ist ein ruhiges Zentrum, dessen Rhythmus von den landwirtschaftlichen Jahreszeiten bestimmt wird. Geografie K7 — asiatische Metropolen.",
      "factsAdvanced": [
        "Pakchŏn liegt am Mündungsgebiet des Taeryŏng-Flusses.",
        "Die Stadt ist ein bedeutendes landwirtschaftliches Zentrum in Nord-P'yŏngan.",
        "Die Region produziert große Mengen an Reis und Mais.",
        "Historisch ist Pakchŏn für traditionelle Töpferei und Keramik bekannt.",
        "Die landwirtschaftliche Ebene von Pakchŏn ist eine der fruchtbarsten im Westen.",
        "In der Stadt gibt es auch Seidenwebereien."
      ]
    },
    {
      "id": "anbyon-cities-v2",
      "descriptionAdvanced": "Anbyŏn ist eine malerische Hafen- und Landwirtschaftsstadt in der Provinz Kangwŏn an der Ostküste Nordkoreas. Die Stadt liegt in einer weiten Ebene, die von majestätischen Bergketten, darunter die Ausläufer des T'aebaek-Gebirges, umgeben ist. Anbyŏn ist besonders berühmt für seinen Obstbau, vor allem für saftige Pfirsiche und Khakis, die in der sandigen Küstenebene gut gedeihen. Die lange Bucht bietet natürliche Häfen für die lokale Fischerei. Historisch diente Anbyŏn als militärischer Vorposten zur Verteidigung der Ostküste, weshalb in der Umgebung noch alte Signalfeuertürme zu finden sind. Geografie K7 — asiatische Metropolen.",
      "factsAdvanced": [
        "Anbyŏn liegt in der Provinz Kangwŏn am Japanischen Meer.",
        "Die Stadt ist landesweit für ihre Pfirsich- und Khaki-Plantagen bekannt.",
        "Die Anbyŏn-Ebene ist eines der wenigen großen Agrargebiete an der Ostküste.",
        "Historische Signalfeuertürme prägen die nahe gelegenen Bergkuppen.",
        "Der Namdae-Fluss mündet bei Anbyŏn ins Meer.",
        "Die Fischerei spielt neben dem Obstbau eine zentrale wirtschaftliche Rolle."
      ]
    },
    {
      "id": "chongjin-steel-works-economic-v2",
      "descriptionAdvanced": "Das Kim-Chaek-Eisen- und Stahlwerk in Chŏngjin ist der absolute Gigant der nordkoreanischen Schwerindustrie und der größte Metallurgiestandort des Landes. Der in den 1930er Jahren von den Japanern gegründete Komplex wurde nach dem Koreakrieg mit massiver sowjetischer Hilfe zu einem monströsen Kombinat ausgebaut. Das Werk produziert Millionen Tonnen Gusseisen, Stahlplatten und Walzstahl, die für das Militär, den Schiffbau und die Bauindustrie unverzichtbar sind. Zehntausende Arbeiter sind in dem rußigen, riesigen Areal beschäftigt, das fast wie eine eigene Stadt innerhalb von Chŏngjin funktioniert und über einen eigenen Tiefseehafen verfügt. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Das Werk in Chŏngjin ist das größte Stahlwerk Nordkoreas.",
        "Ursprünglich wurde es in den 1930er Jahren von Japanern gegründet.",
        "Der Ausbau nach 1953 erfolgte mit Hilfe der Sowjetunion.",
        "Der Komplex verfügt über eigene Kraftwerke und Eisenbahnsysteme.",
        "Es ist benannt nach General Kim Chaek, der im Koreakrieg fiel.",
        "Der angeschlossene Hafen ermöglicht direkten Erz- und Kohleimport."
      ]
    },
    {
      "id": "hungnam-fertilizer-complex-economic-v2",
      "descriptionAdvanced": "Der Hŭngnam-Düngemittelkomplex an der Ostküste ist eine der wichtigsten chemischen Fabriken Nordkoreas, da die dortige Produktion entscheidend für die Ernteerträge des gesamten Landes ist. Die in den späten 1920er Jahren gegründete Anlage war einst der größte chemische Komplex in ganz Asien. Heute produziert die Anlage hauptsächlich Stickstoffdünger und Ammoniak. Die Bedeutung des Werkes für Nordkorea ist immens, da das Land chronisch unter schlechten Bodenbedingungen leidet und auf Mineraldünger angewiesen ist. Die Fabrikanlage dominiert die Skyline der Hafenstadt Hŭngnam und ist ein zentrales Element der staatlichen Wirtschaftsplanung. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Hŭngnam-Düngemittelkomplex wurde 1927 gegründet.",
        "Er war zur Zeit seiner Gründung die größte chemische Anlage Asiens.",
        "Die Fabrik produziert überwiegend Stickstoff- und Ammoniakdünger.",
        "Die Produktion ist überlebenswichtig für die nordkoreanische Landwirtschaft.",
        "Im Koreakrieg wurde die Anlage fast vollständig zerstört und neu aufgebaut.",
        "Hŭngnam liegt in der Provinz Süd-Hamgyŏng."
      ]
    },
    {
      "id": "musan-iron-mine-economic-v2",
      "descriptionAdvanced": "Die Musan-Eisenmine in der nördlichen Provinz Nord-Hamgyŏng ist eine der größten Eisenerzminen im Tagebau auf dem asiatischen Kontinent. Die Mine produziert hochwertiges Magnetiterz, das in gewaltigen, terrassierten Abbaustätten aus den Bergen gesprengt wird. Sie ist der Hauptlieferant für das Kim-Chaek-Stahlwerk in Chŏngjin und eine der wichtigsten Einnahmequellen Nordkoreas für den Export, insbesondere nach China. Die Erze werden über ein komplexes System aus Pipelines und Eisenbahnen abtransportiert. Die raue, schneebedeckte Landschaft um Musan steht im starken Kontrast zu den gewaltigen, staubigen Kratern des Tagebaus. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Musan ist die größte Eisenerzmine Nordkoreas und eine der größten Asiens.",
        "Die Mine wird im offenen Tagebau betrieben.",
        "Die nachgewiesenen Eisenerzreserven betragen mehrere Milliarden Tonnen.",
        "Ein Großteil des Erzes wird über eine 98 Kilometer lange Pipeline nach Chŏngjin gepumpt.",
        "Die Mine liegt nahe der chinesischen Grenze am Tumen-Fluss.",
        "Der Abbau begann industriell während der japanischen Kolonialzeit."
      ]
    },
    {
      "id": "rason-port-economic-v2",
      "descriptionAdvanced": "Der Hafen von Rasŏn in der gleichnamigen Sonderwirtschaftszone im äußersten Nordosten ist ein eisfreier Tiefseehafen von enormer strategischer Bedeutung. Dank seiner Lage am Dreiländereck von Nordkorea, China und Russland dient der Hafen als Umschlagplatz für den internationalen Transitverkehr. Vor allem Russland und China nutzen Rasŏn, um Kohle und andere Rohstoffe in den pazifischen Raum zu exportieren, ohne den Umweg über eigene, winterlich zugefrorene Häfen nehmen zu müssen. Die Hafeninfrastruktur wurde in den letzten Jahren mit ausländischem Kapital ausgebaut, um größere Containerschiffe abfertigen zu können. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Hafen Rasŏn liegt in Nordkoreas ältester Sonderwirtschaftszone.",
        "Der Hafen ist ganzjährig eisfrei.",
        "Er verfügt über drei große Piers für Massengüter und Container.",
        "Der Hafen ist direkt an das russische Eisenbahnnetz angebunden.",
        "Russland hat 2014 den Hafen von Rajin umfassend modernisiert.",
        "Der Hafen schlägt jährlich Millionen Tonnen russischer Kohle um."
      ]
    },
    {
      "id": "sinuiju-cosmetics-factory-economic-v2",
      "descriptionAdvanced": "Die Sinŭiju-Kosmetikfabrik im Nordwesten des Landes ist das Aushängeschild der nordkoreanischen Leicht- und Konsumgüterindustrie. Die Anlage produziert die in Nordkorea berühmte Marke 'Pomhyanggi' (Frühlingsduft), die für ihre Hautpflegeprodukte auf Basis von Kaesŏng-Ginseng und traditionellen Kräutern bekannt ist. In den letzten Jahren wurde die Fabrik massiv modernisiert und mit fortschrittlichen automatisierten Produktionslinien ausgestattet. Die Kosmetika aus Sinŭiju gelten als Premiumprodukte im Land und werden auch als diplomatische Geschenke sowie für den Export nach China hergestellt. Die Fabrik symbolisiert das staatliche Bemühen um die Verbesserung des Lebensstandards. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Die Sinŭiju-Kosmetikfabrik produziert die Marke 'Pomhyanggi' (Frühlingsduft).",
        "Die Produkte verwenden häufig Extrakte aus nordkoreanischem Ginseng.",
        "Die Fabrik befindet sich in der Grenzstadt Sinŭiju.",
        "Sie gilt als die modernste Kosmetikanlage in Nordkorea.",
        "Der Staat investierte stark in die Automatisierung der Fabrik.",
        "Die Kosmetika werden auch ins benachbarte China exportiert."
      ]
    },
    {
      "id": "pukchang-thermal-power-plant-economic-v2",
      "descriptionAdvanced": "Das Pukch'ang-Wärmekraftwerk in der Provinz Süd-P'yŏngan ist das größte kohlebetriebene Kraftwerk Nordkoreas und das absolute Rückgrat der nationalen Stromversorgung. Die gigantische Anlage verbrennt täglich tausende Tonnen Kohle, die aus den umliegenden Minen von Tŏkchŏn und Kaechŏn geliefert werden. Das Kraftwerk, das in den 1970er Jahren erbaut wurde, sichert nicht nur den Strom für die Hauptstadt Pjöngjang, sondern treibt auch die schweren Industriekomplexe im Westen des Landes an. Die weithin sichtbaren, stark rauchenden Schornsteine sind ein Wahrzeichen der nordkoreanischen Schwerindustrie, stellen jedoch auch eine erhebliche Umweltbelastung dar. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Das Pukch'ang-Wärmekraftwerk ist das größte Kraftwerk Nordkoreas.",
        "Die installierte Leistung beträgt geschätzt 1.600 Megawatt.",
        "Das Kraftwerk wird fast ausschließlich mit lokal abgebauter Kohle betrieben.",
        "Es liefert einen großen Teil der Elektrizität für Pjöngjang.",
        "Die Anlage wurde in den späten 1960er und 1970er Jahren massiv ausgebaut.",
        "Das Kraftwerk beschäftigt Tausende von Arbeitern im Vierschichtbetrieb."
      ]
    },
    {
      "id": "supung-hydroelectric-plant-economic-v2",
      "descriptionAdvanced": "Das Sup'ung-Wasserkraftwerk ist ein monumentaler Staudamm am Yalu-Fluss, der die Grenze zwischen Nordkorea und China bildet. Zur Zeit seiner Fertigstellung durch die Japaner im Jahr 1943 war es der zweitgrößte Staudamm der Welt. Das Kraftwerk ist ein herausragendes Beispiel für grenzüberschreitende Infrastruktur, da der erzeugte Strom hälftig zwischen China und Nordkorea aufgeteilt wird. Die massive Betonmauer staut den Fluss zu einem riesigen See und schützt die flussabwärts gelegenen Gebiete vor Überschwemmungen. Das Kraftwerk war im Koreakrieg ein strategisches Hauptziel schwerer amerikanischer Bombardements. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Das Sup'ung-Wasserkraftwerk liegt am Yalu-Fluss an der Grenze zu China.",
        "Es wurde 1943 während der japanischen Besatzung fertiggestellt.",
        "Der Damm ist über 100 Meter hoch und fast 900 Meter lang.",
        "Die erzeugte Elektrizität wird zwischen China und Nordkorea geteilt.",
        "1952 wurde das Kraftwerk im Koreakrieg stark bombardiert.",
        "Es war bei seiner Fertigstellung eines der größten Wasserkraftwerke der Welt."
      ]
    },
    {
      "id": "hwanghae-iron-and-steel-complex-economic-v2",
      "descriptionAdvanced": "Der Hwanghae-Eisen- und Stahlkomplex in Songnim ist eine der historisch bedeutendsten und größten metallurgischen Anlagen Nordkoreas. Der riesige Industriekomplex am Taedong-Fluss wurde als erstes integriertes Stahlwerk auf der koreanischen Halbinsel gebaut. Das Werk ist spezialisiert auf die Produktion von Roheisen, Stahlprofilen und dicken Stahlplatten, die für den Brückenbau, die Rüstungsindustrie und den Schiffbau benötigt werden. Aufgrund des Mangels an Importkokskohle hat das Werk in den letzten Jahrzehnten intensiv an der Entwicklung der 'Juche-Eisen'-Technologie gearbeitet, bei der heimische Anthrazitkohle für die Stahlproduktion genutzt wird. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Das Hwanghae-Stahlwerk befindet sich in der Stadt Songnim.",
        "Es war das erste integrierte Stahlwerk auf der koreanischen Halbinsel.",
        "Das Werk nutzt teilweise die 'Juche-Eisen'-Technologie mit heimischer Kohle.",
        "Der Komplex liegt günstig am schiffbaren Taedong-Fluss.",
        "Tausende Arbeiter sind im Komplex und der angeschlossenen Stadt beschäftigt.",
        "Es liefert den primären Stahl für die Konstruktionsindustrie in Pjöngjang."
      ]
    },
    {
      "id": "tanchon-port-economic-v2",
      "descriptionAdvanced": "Der Hafen von Tanchŏn am Japanischen Meer ist ein spezialisierter Industriehafen, der als wichtigstes maritimes Tor für den Mineralienexport Nordkoreas dient. Die Provinz Süd-Hamgyŏng ist reich an Bodenschätzen, und der Hafen schlägt gigantische Mengen an Magnesit, Zink und Blei aus der nahen Komdok-Mine und dem Tanchŏn-Magnesiakomplex um. In den frühen 2010er Jahren wurde der Hafen umfassend ausgebaggert und mit modernen Verladekränen ausgestattet, um auch große Massengutfrachter aus dem Ausland abfertigen zu können. Die massive Hafeninfrastruktur sichert einen der wenigen lukrativen internationalen Handelszweige für die nordkoreanische Wirtschaft. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Hafen Tanchŏn ist spezialisiert auf den Export von Mineralien.",
        "Er schlägt massiv Zink, Blei und Magnesit um.",
        "Die Infrastruktur des Hafens wurde 2012 umfassend modernisiert.",
        "Der Hafen ist direkt mit der gigantischen Komdok-Mine verbunden.",
        "Er verfügt über spezielle Förderbänder für die Beladung von Massengut.",
        "Tanchŏn ist eine der wichtigsten Einnahmequellen für Devisen."
      ]
    },
    {
      "id": "kumgol-zinc-mine-economic-v2",
      "descriptionAdvanced": "Die Kŭmgol-Zinkmine im Landkreis Komdok ist Nordkoreas größter Produzent von Blei und Zink und zählt zu den ergiebigsten Minen dieser Art weltweit. Tief in den Bergen von Süd-Hamgyŏng gelegen, erstreckt sich die Mine über Hunderte von Kilometern unterirdischer Stollen. Das gewonnene Erz ist von enormer Qualität und wird entweder in nahen Fabriken geschmolzen oder direkt für den Export über den Hafen Tanchŏn aufbereitet. Aufgrund ständiger Stromausfälle und veralteter Technik steht die Mine jedoch oft vor großen logistischen Herausforderungen. Trotzdem bleibt sie ein Kronjuwel des nordkoreanischen Bergbausektors. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Kŭmgol ist die größte Blei- und Zinkmine Nordkoreas.",
        "Die Mine befindet sich im gebirgigen Komdok-Gebiet.",
        "Einige der unterirdischen Stollen reichen hunderte Meter tief.",
        "Das Erz wird per spezieller Eisenbahn zum Hafen Tanchŏn transportiert.",
        "Die Mine existiert seit der japanischen Kolonialzeit.",
        "Die Erze sind eine der wenigen von Sanktionen weniger betroffenen Exportgüter."
      ]
    },
    {
      "id": "sunchon-vinalon-complex-economic-v2",
      "descriptionAdvanced": "Der Sunchŏn-Vinalon-Komplex ist ein gigantisches chemisches Kombinat in der Provinz Süd-P'yŏngan, das dem Ziel der industriellen Autarkie Nordkoreas dient. Die Anlage wurde in den 1980er Jahren errichtet, um massiv Vinalon zu produzieren, eine in Nordkorea erfundene synthetische Faser aus Kalkstein und Kohle. Das Werk produziert zudem riesige Mengen an chemischem Dünger, Kalziumkarbid und Methanol. Die Anlage erstreckt sich über Dutzende Quadratkilometer und ist ein Labyrinth aus Rohren und Schornsteinen. Trotz wiederholter Produktionskrisen durch Energiemangel ist das Werk ein Symbol der 'Juche'-Ideologie, da es Textilien ohne Erdölimporte herstellt. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Sunchŏn-Komplex produziert Vinalon, die 'Juche-Faser'.",
        "Vinalon wird in Nordkorea aus Kalkstein und Anthrazitkohle hergestellt.",
        "Das Werk umfasst eine Fläche von mehreren Quadratkilometern.",
        "Der Bau des gigantischen Komplexes begann in den späten 1980er Jahren.",
        "Die Fabrik produziert neben Textilien auch wichtige chemische Düngemittel.",
        "Der Standort wurde gewählt wegen der nahen Kalkstein- und Kohleminen."
      ]
    },
    {
      "id": "pyongyang-textile-mill-economic-v2",
      "descriptionAdvanced": "Die Textilfabrik Pjöngjang im Osten der Hauptstadt ist der größte Betrieb der Leichtindustrie in Nordkorea und ein zentraler Produzent von Bekleidung und Stoffen für die Bevölkerung. Mit zehntausenden Beschäftigten, überwiegend Frauen, ist das Werk eine Art Stadt in der Stadt, ausgestattet mit eigenen Wohnheimen, Kindergärten und Krankenhäusern für die Belegschaft. Die Fabrik verarbeitet einheimisches Vinalon, Baumwolle sowie importierte Seide und stellt alles her – von Schuluniformen und Arbeitskleidung bis hin zu Bettwäsche. Sie gilt oft als Musterbetrieb und wird regelmäßig von der staatlichen Führung auf Inspektionsreisen besucht. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Die Textilfabrik Pjöngjang ist die größte Textilfabrik Nordkoreas.",
        "Sie beschäftigt überwiegend weibliche Arbeitskräfte.",
        "Das Werk ist berühmt für die Produktion von Schul- und Arbeitsuniformen.",
        "Kim Il-sung wies 1948 den Bau dieser Anlage an.",
        "Die Fabrik besitzt umfangreiche soziale Einrichtungen für die Arbeiter.",
        "In den Hallen werden Seide, Baumwolle und die Kunstfaser Vinalon verarbeitet."
      ]
    },
    {
      "id": "february-8-vinalon-complex-economic-v2",
      "descriptionAdvanced": "Der Vinalon-Komplex '8. Februar' in Hamhŭng ist die Geburtsstätte und das Epizentrum der Vinalon-Industrie in Nordkorea. Die Anlage wurde am 8. Februar 1961 eröffnet, benannt nach dem Jahrestag der Gründung der Volksarmee. Die Fabrik war Nordkoreas erste Anlage, die synthetische Textilfasern aus reichlich vorhandenem Kalkstein und Kohle herstellte, um die Abhängigkeit von importierter Baumwolle zu beenden. Der massiv dampfende und rußende Industriekomplex ist einer der Hauptgründe für Hamhŭngs Status als Chemie-Metropole. Die Fabrik verarbeitet täglich Berge von Kalkstein in riesigen Öfen zu Fasern und Karbid. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Komplex in Hamhŭng wurde am 8. Februar 1961 eröffnet.",
        "Er ist die erste Vinalon-Fabrik Nordkoreas.",
        "Die Technologie für Vinalon wurde von dem koreanischen Chemiker Ri Sung-gi entwickelt.",
        "Die Anlage nutzt Kalkstein aus der Region als Hauptrohstoff.",
        "Der Komplex ist der Hauptarbeitgeber der Stadt Hamhŭng.",
        "Neben Textilien werden auch Farbstoffe und industrielle Chemikalien hergestellt."
      ]
    },
    {
      "id": "taean-heavy-machine-complex-economic-v2",
      "descriptionAdvanced": "Der Taean-Schwermaschinenkomplex in der Nähe von Namp'o ist Nordkoreas führendes Zentrum für den Bau von massiven Industriekomponenten. Die in den 1970er Jahren errichtete Anlage spezialisiert sich auf die Produktion gigantischer Generatoren, Turbinen für Wasserkraftwerke und großer Transformatoren. Taean liefert die entscheidende Hardware für den landesweiten Ausbau des Stromnetzes und große Bauprojekte. Das 'Taean-Arbeitssystem', eine in den 1960er Jahren von Kim Il-sung eingeführte Verwaltungsmethode für industrielle Betriebe, ist nach dieser Region benannt. Die riesigen Montagehallen des Werks ermöglichen den Bau von Maschinenteilen, die mehrere hundert Tonnen wiegen. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Taean-Komplex baut Turbinen und Generatoren für nordkoreanische Kraftwerke.",
        "Er befindet sich in der Stadt Taean, südwestlich von Pjöngjang.",
        "Die Anlage ist Namensgeber des ideologischen 'Taean-Arbeitssystems'.",
        "Das Werk kann Maschinenteile fertigen, die hunderte Tonnen wiegen.",
        "Der Bau des heutigen massiven Komplexes begann 1977.",
        "Das Werk ist direkt an den Schiffsverkehr auf dem Taedong-Fluss angebunden."
      ]
    },
    {
      "id": "ryongsong-machine-complex-economic-v2",
      "descriptionAdvanced": "Der Ryongsong-Maschinenkomplex in Hamhŭng ist eine Elite-Fabrik des nordkoreanischen Maschinenbaus, die als 'Mutter der Fabriken' bezeichnet wird. Dieses riesige Kombinat baut hochkomplexe Spezialausrüstung, die von anderen Fabriken benötigt wird, darunter Hochdruckkompressoren für die chemische Industrie, riesige Pumpen und spezielle Bergbauausrüstung. Ryongsong hat entscheidend zur Ausrüstung der Vinalon-Komplexe und der großen Düngemittelfabriken beigetragen. Die Arbeiter der Anlage sind für die Herstellung extrem großformatiger Fräsen und Pressen im Alleingang bekannt, was in der staatlichen Propaganda oft als Triumph der technischen Unabhängigkeit gefeiert wird. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Ryongsong-Komplex wird in Nordkorea oft als 'Mutter der Fabriken' gefeiert.",
        "Die Fabrik baut Hochdruckkompressoren für die chemische Industrie.",
        "Sie befindet sich in der industriellen Küstenstadt Hamhŭng.",
        "Ryongsong produzierte 1985 Nordkoreas erste 10.000-Tonnen-Presse.",
        "Das Kombinat rüstet viele der anderen großen Fabriken im Land aus.",
        "Die Anlage wurde ursprünglich während der Kolonialzeit für die Düngemittelindustrie gegründet."
      ]
    },
    {
      "id": "kim-chaek-iron-and-steel-works-economic-v2",
      "descriptionAdvanced": "Das Kim-Ch'aek-Eisen- und Stahlwerk in Chŏngjin ist identisch mit dem gigantischen Chŏngjin-Stahlwerk und bildet das absolute Herzstück der nordkoreanischen Metallurgie. Mit seinen massiven Hochöfen und endlosen Schienennetzen produziert das Kombinat das Rohmaterial für Maschinenbau, Schiffbau und Bauprojekte. Das nach dem Koreakriegs-General Kim Ch'aek benannte Werk ist ein Moloch, dessen riesige Kokereien und Schmelzöfen die Skyline der Stadt prägen. Es ist das Symbol des sozialistischen Aufbaus und profitiert von einer Pipeline, die Eisenerzkonzentrat direkt von der 98 Kilometer entfernten Musan-Mine ins Werk pumpt. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Es ist das größte Stahlwerk auf der gesamten koreanischen Halbinsel.",
        "Eine 98 Kilometer lange Pipeline versorgt das Werk mit Eisenerz.",
        "Es wurde nach General Kim Ch'aek benannt.",
        "Die riesigen Hochöfen wurden mit sowjetischer Unterstützung errichtet.",
        "Das Werk hat einen eigenen Tiefseehafen für den Export.",
        "Die Stahlerzeugung hier ist essenziell für die nordkoreanische Rüstung."
      ]
    },
    {
      "id": "kusong-machine-tool-factory-economic-v2",
      "descriptionAdvanced": "Die Kusŏng-Werkzeugmaschinenfabrik in der Provinz Nord-P'yŏngan ist Nordkoreas technologisch fortschrittlichster Produzent von CNC-Maschinen und industriellen Drehbänken. Das Werk stellt hochpräzise computergesteuerte Maschinen her, die landesweit zur Modernisierung von Fabriken eingesetzt werden. Die Kusŏng-Fabrik ist tief in die nordkoreanische Rüstungs- und Zivilindustrie integriert, da ihre Werkzeugmaschinen essenziell für die Fertigung feiner Metallteile sind. Die Anlage wird oft als Triumph der Eigenständigkeit präsentiert und ihre CNC-Software-Entwicklung gilt als eine der Prioritäten der staatlichen High-Tech-Forschung. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Die Fabrik ist der Hauptproduzent von CNC-Maschinen in Nordkorea.",
        "Sie befindet sich in der Stadt Kusŏng in Nord-P'yŏngan.",
        "Werkzeugmaschinen aus Kusŏng werden landesweit zur Modernisierung eingesetzt.",
        "Die staatliche Propaganda lobt die Fabrik oft für ihre Eigenständigkeit.",
        "Die Maschinen sind entscheidend für feine zivile und militärische Bauteile.",
        "Das Werk entwickelt eigene Software für die computergesteuerte Fertigung."
      ]
    },
    {
      "id": "anju-coal-mining-complex-economic-v2",
      "descriptionAdvanced": "Der Anju-Kohlebergbaukomplex am Ch'ŏngch'ŏn-Fluss in der Provinz Süd-P'yŏngan ist das Herz der nordkoreanischen Energieversorgung. Dieses gigantische Kohlebecken fördert Millionen Tonnen Anthrazitkohle, die für das Überleben der Wärmekraftwerke und der Stahlindustrie des Landes unverzichtbar ist. Das Gebiet gleicht einer schwarzen Mondlandschaft, durchzogen von Fördertürmen, tiefen Schächten und endlosen Güterzügen, die die Kohle ins ganze Land verteilen. Die harte und gefährliche Arbeit in den Minen von Anju wird propagandistisch stark heroisch dargestellt, da ohne die Kohle aus diesem Komplex die nationale Industrie komplett zum Stillstand käme. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Der Anju-Komplex ist das wichtigste Kohleabbaugebiet Nordkoreas.",
        "Die Minen fördern hauptsächlich hochwertige Anthrazitkohle.",
        "Das Abbaugebiet liegt am Ch'ŏngch'ŏn-Fluss.",
        "Die Kohle versorgt Nordkoreas wichtigste Wärmekraftwerke, wie Pukch'ang.",
        "Der Komplex besteht aus einem Netzwerk Dutzender einzelner Tiefbauminen.",
        "Die Kohle aus Anju wird auch an Chemiefabriken zur Vinalon-Produktion geliefert."
      ]
    },
    {
      "id": "pyongyang-east-thermal-power-plant-economic-v2",
      "descriptionAdvanced": "Das Ost-Pjöngjang Wärmekraftwerk liegt am östlichen Ufer des Taedong-Flusses und ist ein kritischer Bestandteil der Energie- und Wärmeversorgung der Hauptstadt. Das mit Kohle befeuerte Kraftwerk liefert nicht nur Strom, sondern auch direktes Heißwasser für das massive Fernwärmenetz von Pjöngjang, wodurch die Plattenbauten der Stadt im harten Winter beheizt werden. Die gigantischen, rauchenden Schornsteine der Anlage sind aus großer Entfernung zu sehen. Obwohl die veraltete Technologie des Kraftwerks zu starker Luftverschmutzung führt, ist seine konstante Funktion eine politische Notwendigkeit, um den Lebensstandard in Pjöngjang aufrechtzuerhalten. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Das Kraftwerk liegt am östlichen Ufer des Taedong-Flusses in Pjöngjang.",
        "Es ist ein wichtiges Kraftwerk mit Kraft-Wärme-Kopplung.",
        "Die Anlage versorgt einen großen Teil der Hauptstadt mit Fernwärme.",
        "Das Kraftwerk wurde in den späten 1980er Jahren errichtet.",
        "Es verbrennt fast ausschließlich im Inland abgebaute Steinkohle.",
        "Aufgrund des Alters kämpft die Anlage oft mit Effizienzproblemen."
      ]
    },
    {
      "id": "wiwon-power-plant-economic-v2",
      "descriptionAdvanced": "Das Wiwŏn-Wasserkraftwerk ist ein riesiger Staudamm am Yalu-Fluss im Norden der Provinz Chagang, der ein weiteres gemeinsames Energieprojekt zwischen Nordkorea und China darstellt. Die Anlage staut den Grenzfluss tief in der unwegsamen Berglandschaft zu einem langgezogenen Reservoir. Der Bau des Kraftwerks in den späten 1980er Jahren half, den chronischen Strommangel der Schwerindustrie in der Chagang-Provinz zu lindern. Der Damm nutzt die enormen Wassermengen, die vom Berg Paektu herabfließen, und ist ein Meisterwerk der alpinen Ingenieurskunst, das grüne, emissionsfreie Energie für beide angrenzenden Nationen liefert. Wirtschaft K8 — asiatische Industrie.",
      "factsAdvanced": [
        "Das Wiwŏn-Wasserkraftwerk ist ein Gemeinschaftsprojekt mit China.",
        "Es liegt am Yalu-Fluss in der Provinz Chagang.",
        "Der Staudamm wurde Ende der 1980er Jahre fertiggestellt.",
        "Die produzierte Wasserkraft wird zwischen beiden Ländern aufgeteilt.",
        "Das Kraftwerk nutzt die Topografie der nördlichen Gebirgszüge ideal aus.",
        "Es versorgt viele Rüstungs- und Maschinenbaufabriken der Region mit Strom."
      ]
    }
  ]
}

with open('/mnt/c/Users/User/plizio-repo/seo_outputs/seo_northkorea_de_batch2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

