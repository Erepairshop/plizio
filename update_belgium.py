import re
import json

# All generated data consolidated
poi_data = {
  "belgium": {
    "factsAdvanced": {
      "de": [
        "Belgien hält den Weltrekord für die längste Zeit ohne gewählte Regierung während einer politischen Krise.",
        "Die weltweit erste gedruckte Zeitung wurde 1605 in Antwerpen veröffentlicht.",
        "Das Land besitzt mit rund 1,5 Schlössern pro Quadratkilometer die höchste Schlossdichte der Welt.",
        "Belgien ist der Geburtsort des Big-Bang-Theoretikers Georges Lemaître, der die Expansion des Universums postulierte.",
        "Brüssel ist der Standort des zweitgrößten Hafens Europas (Antwerpen) und Sitz zahlreicher EU-Institutionen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-brussels": {
    "factsAdvanced": {
      "de": [
        "Die Grand Place wird alle zwei Jahre im August mit einem riesigen Blumenteppich aus Millionen von Begonien bedeckt.",
        "Brüssel beherbergt das einzige Museum der Welt, das ausschließlich dem Surrealisten René Magritte gewidmet ist.",
        "Das Atomium stellt eine Elementarzelle einer Eisenkristallstruktur in 165-milliardenfacher Vergrößerung dar.",
        "Die Stadt ist als Welthauptstadt der Comics bekannt und hat über 50 Fassaden mit Comic-Wandgemälden.",
        "In Brüssel wurde 1912 die Praline erfunden, als Jean Neuhaus Schokolade mit einer weichen Füllung füllte."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "reg-flanders": {
    "factsAdvanced": {
      "de": [
        "Flandern ist eine der am dichtesten besiedelten Regionen Europas und verfügt über ein extrem dichtes Schienen- und Straßennetz.",
        "Die Region ist weltbekannt für ihre Radsportbegeisterung und beherbergt Klassiker wie die Flandern-Rundfahrt.",
        "Antwerpen, die größte Stadt Flanderns, ist das weltweite Zentrum des Diamantenhandels und der -verarbeitung.",
        "Der Genter Altar, ein Meisterwerk der Brüder van Eyck, gilt als eines der einflussreichsten Gemälde der Kunstgeschichte.",
        "Die flämische Küste beherbergt mit dem Küstentram die längste Straßenbahnlinie der Welt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "reg-wallonia": {
    "factsAdvanced": {
      "de": [
        "Wallonien war nach England das erste Gebiet auf dem europäischen Kontinent, das die industrielle Revolution vollzog.",
        "Die Region beherbergt alle elf Trappistenbrauereien der Welt, wobei drei davon (Chimay, Orval, Rochefort) in Wallonien liegen.",
        "Das Signal de Botrange in den Hohen Venn ist mit 694 Metern der höchste Punkt der Region und ganz Belgiens.",
        "In Wallonien befindet sich mit den Aufzügen des Canal du Centre ein technisches Meisterwerk, das zum UNESCO-Welterbe gehört.",
        "Die Stadt Spa in Wallonien gab allen Heilbädern weltweit ihren Namen (Spa-Resorts)."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-ardennes": {
    "descriptionAdvanced": {
      "de": "Die Ardennen sind eine waldreiche Gebirgslandschaft im Südosten Belgiens, die für ihre raue Schönheit und tiefen Täler bekannt ist. Diese Region bietet ideale Bedingungen für Outdoor-Aktivitäten wie Wandern, Radfahren und Kajakfahren auf den zahlreichen Flüssen. Historisch gesehen waren die Ardennen Schauplatz bedeutender Schlachten, insbesondere während des Zweiten Weltkriegs. Heute ziehen malerische Dörfer und historische Schlösser Besucher aus aller Welt an. Die dichten Wälder beherbergen eine reiche Flora und Fauna, was die Region zu einem Paradies für Naturliebhaber macht. Es ist ein Ort, an dem man Ruhe findet und gleichzeitig Abenteuer in der Wildnis erleben kann.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Ardennen erstrecken sich auch über Teile von Luxemburg und Frankreich.",
        "Der höchste Punkt Belgiens, der Signal de Botrange, liegt in dieser Region.",
        "Die Region ist berühmt für ihren Schinken und ihre herzhafte Wildküche.",
        "Während der Ardennenoffensive 1944/45 fand hier eine entscheidende Schlacht des Zweiten Weltkriegs statt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-ghent": {
    "factsAdvanced": {
      "de": [
        "Gent war im Mittelalter eine der reichsten und größten Städte Europas.",
        "Die Stadt verfügt über das größte zusammenhängende Fußgängerzentrum Belgiens.",
        "Alle zehn Jahre finden hier die Genter Floralien, eine weltberühmte Blumenschau, statt.",
        "Das Genter Schloss Gravensteen ist die einzige erhaltene mittelalterliche Wasserburg in Flandern."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-liege": {
    "descriptionAdvanced": {
      "de": "Lüttich, an den Ufern der Maas gelegen, ist das kulturelle und wirtschaftliche Zentrum Walloniens. Die Stadt blickt auf eine lange industrielle Geschichte zurück, wandelt sich aber zunehmend zu einem modernen Reiseziel mit beeindruckender Architektur. Besonders sehenswert ist der futuristische Bahnhof Liège-Guillemins, der vom Stararchitekten Santiago Calatrava entworfen wurde. In der Altstadt finden Besucher enge Gassen, historische Treppen wie die Montagne de Bueren und lebhafte Märkte wie den Marché de la Batte. Lüttich ist zudem berühmt für seine herzliche Gastfreundschaft und natürlich die köstlichen Lütticher Waffeln. Die Stadt bietet eine faszinierende Mischung aus Tradition, Moderne und einem Hauch von industrieller Romantik.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Lüttich wird oft als die 'Cité Ardente' (die glühende Stadt) bezeichnet.",
        "Die Treppe Montagne de Bueren hat 374 Stufen und bietet einen Panoramablick über die Stadt.",
        "Der Bahnhof Liège-Guillemins gilt als einer der schönsten und modernsten Bahnhöfe weltweit.",
        "Lüttich war über Jahrhunderte die Hauptstadt eines unabhängigen Fürstbistums."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-leuven": {
    "descriptionAdvanced": {
      "de": "Löwen ist eine charmante Stadt östlich von Brüssel, die vor allem für ihre altehrwürdige Universität und ihre lebendige Bierkultur bekannt ist. Das spätgotische Rathaus am Grote Markt gilt als eines der schönsten architektonischen Meisterwerke Belgiens. Die Stadt ist die Heimat von Stella Artois und verfügt mit dem Oude Markt über die angeblich 'längste Theke der Welt'. Neben der reichen Geschichte bietet Löwen dank der vielen Studenten eine junge, innovative Atmosphäre und ein breites kulturelles Angebot. Der Große Beginenhof, ein UNESCO-Welterbe, bietet eine Oase der Ruhe inmitten der Stadt. Löwen ist der ideale Ort für Entdecker, die sowohl historische Pracht als auch modernes studentisches Leben schätzen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die KU Leuven wurde 1425 gegründet und ist eine der ältesten Universitäten der Welt.",
        "Das Rathaus von Löwen ist mit 236 Statuen an der Fassade geschmückt.",
        "Der Oude Markt beherbergt fast 40 verschiedene Bars auf engstem Raum.",
        "Löwen gilt als die offizielle Bierhauptstadt Belgiens."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-oostende": {
    "descriptionAdvanced": {
      "de": "Ostende, die 'Königin der Seebäder', ist die größte Stadt an der belgischen Küste und bietet eine einzigartige Mischung aus Strandurlaub und urbanem Flair. Mit ihrem breiten Sandstrand, der langen Promenade und dem geschäftigen Hafen zieht die Stadt das ganze Jahr über Besucher an. Historisch war Ostende ein beliebter Rückzugsort für den belgischen Adel, was sich noch heute in den prachtvollen Villen und den Königlichen Galerien widerspiegelt. Die Stadt hat auch eine starke Verbindung zur Kunst, insbesondere durch den Maler James Ensor, dessen Haus heute ein Museum ist. Neben Erholung am Meer bietet Ostende ein lebendiges Nachtleben, ein Casino und zahlreiche Fischrestaurants. Es ist ein Ort, der maritimes Erbe mit moderner Lebensfreude perfekt verbindet.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Ostende war einst die Sommerresidenz der belgischen Könige Leopold I. und Leopold II.",
        "Der Fischmarkt 'Vistrap' ist berühmt für seinen täglich fangfrischen Fisch und Garnelen.",
        "In Ostende befindet sich das größte Casino Belgiens, das Kursaal Oostende.",
        "Die Stadt ist Endpunkt der längsten Straßenbahnlinie der Welt, der Kusttram."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "cult-manneken-pis": {
    "descriptionAdvanced": {
      "de": "Das Manneken Pis ist ein Wahrzeichen von Brüssel und eine der bekanntesten Statuen der Welt, trotz seiner geringen Größe von nur 61 Zentimetern. Die Bronzefigur eines urinierenden Jungen verkörpert den respektlosen Humor und die Freiheit der Brüsseler Bürger. Es gibt zahlreiche Legenden über seinen Ursprung, die von Heldentaten bis hin zu einfachen Alltagsgeschichten reichen. Zu besonderen Anlässen wird die Statue mit verschiedenen Kostümen eingekleidet, von denen viele im nahegelegenen Museum 'GardeRobe MannekenPis' ausgestellt sind. Ein Besuch der Statue gehört für jeden Touristen in Brüssel zum Pflichtprogramm. Obwohl oft kopiert, bleibt das Original in der Brüsseler Altstadt ein unersetzliches kulturelles Symbol.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die heutige Bronzestatue ist eine Kopie aus dem Jahr 1965; das Original stammt von 1619.",
        "Das Manneken Pis besitzt eine Garderobe mit über 1.000 verschiedenen Kostümen.",
        "Es gibt in Brüssel auch weibliche und tierische Gegenstücke: Jeanneke Pis und Zinneke Pis.",
        "Die Statue wurde im Laufe der Geschichte mehrfach gestohlen und beschädigt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "cult-bruges-belfry": {
    "descriptionAdvanced": {
      "de": "Der Belfried von Brügge ist ein imposanter mittelalterlicher Glockenturm, der den Marktplatz der Stadt dominiert und als Symbol für Freiheit und Wohlstand gilt. Mit einer Höhe von 83 Metern bietet er nach dem Aufstieg über 366 Stufen einen atemberaubenden Panoramablick über das UNESCO-Weltkulturerbe Brügge. Der Turm beherbergt ein beeindruckendes Glockenspiel (Carillon) mit 47 Glocken, das regelmäßig für Konzerte genutzt wird. Historisch diente der Belfried zur Aufbewahrung der Stadtrechte und als Wachturm zur Früherkennung von Bränden. Die Architektur des Turms spiegelt verschiedene Epochen wider, da er nach Bränden mehrfach umgebaut wurde. Er ist eines der meistfotografierten Motive der Stadt und ein Muss für jeden Besucher.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Turm hat eine leichte Neigung von etwa einem Meter nach links.",
        "Der Bau des Turms begann im 13. Jahrhundert und dauerte über 200 Jahre.",
        "Das Glockenspiel wird noch heute von einem professionellen Stadtturmschläger bedient.",
        "Der Belfried von Brügge gehört seit 1999 zum UNESCO-Weltkulturerbe."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "cult-waterloo": {
    "descriptionAdvanced": {
      "de": "Waterloo ist weltweit bekannt als Schauplatz der historischen Schlacht von 1815, in der Napoleon Bonaparte endgültig besiegt wurde. Heute ist der Ort ein bedeutendes Denkmal- und Museumszentrum, das die Ereignisse jenes schicksalhaften Tages lebendig hält. Das markanteste Wahrzeichen ist der Löwenhügel, ein künstlicher Hügel, der einen Überblick über das ehemalige Schlachtfeld bietet. Besucher können moderne Museen wie das 'Mémorial 1815' erkunden, die mit Multimedia-Installationen die Geschichte veranschaulichen. Neben der Geschichte bietet die Gemeinde Waterloo auch eine angenehme Wohnatmosphäre und schöne Grünflächen. Es ist ein Ort der Besinnung und des Gedenkens an eine Wendezeit der europäischen Geschichte.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Löwenhügel besteht aus rund 390.000 Kubikmetern Erde.",
        "Die Schlacht von Waterloo beendete die Herrschaft Napoleons und die napoleonischen Kriege.",
        "Das Panorama der Schlacht von Waterloo ist ein riesiges Rundgemälde aus dem Jahr 1912.",
        "Jährlich finden in Waterloo beeindruckende Reenactments der Schlacht statt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-hohes-venn": {
    "descriptionAdvanced": {
      "de": "Das Hohe Venn ist eines der letzten Hochmoore Europas und ein einzigartiges Naturschutzgebiet an der Grenze zwischen Belgien und Deutschland. Die weite, offene Landschaft ist geprägt von Heidekraut, Gräsern und seltenen Moorpflanzen, die eine fast mystische Atmosphäre schaffen. Holzstege führen Wanderer sicher durch die empfindlichen Sumpfgebiete und bieten spektakuläre Ausblicke auf die unberührte Natur. Es ist ein Rückzugsort für seltene Tierarten wie das Birkhuhn und beherbergt eine außergewöhnliche Artenvielfalt. Im Winter verwandelt sich das Hohe Venn oft in eine verschneite Märchenlandschaft, die ideal für Langlauf ist. Das Gebiet steht unter strengem Schutz, um dieses sensible Ökosystem für zukünftige Generationen zu bewahren.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Hohe Venn ist das älteste Naturschutzgebiet Walloniens.",
        "Es ist Teil des grenzüberschreitenden Naturparks Deutsch-Belgischer Naturpark Hohes Venn – Eifel.",
        "Einige Teile des Moores dürfen nur in Begleitung von autorisierten Naturführern betreten werden.",
        "Das Klima im Hohen Venn ist deutlich rauer und kühler als im Rest Belgiens."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-dinant-citadel": {
    "descriptionAdvanced": {
      "de": "Die Zitadelle von Dinant thront majestätisch auf einem steilen Felsen hoch über der Stadt Dinant und der Maas. Sie bietet nicht nur eine beeindruckende militärische Architektur, sondern auch einen der spektakulärsten Ausblicke über das Maastal. Besucher können die Festung entweder mit einer Seilbahn oder über eine Treppe mit 408 Stufen erreichen. Im Inneren der Zitadelle führt ein Museum durch die bewegte Geschichte der Festung, von den mittelalterlichen Anfängen bis zu den Kämpfen im Ersten Weltkrieg. Die Kombination aus der historischen Festung, der darunter liegenden Stiftskirche und den bunten Häusern am Fluss macht Dinant zu einem der malerischsten Orte Belgiens. Ein Besuch der Zitadelle ist eine Reise durch die Jahrhunderte der Verteidigungsgeschichte.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die heutige Zitadelle wurde im Jahr 1818 von den Niederländern erbaut.",
        "Im Inneren gibt es einen 'eingestürzten Unterstand', der die optische Täuschung eines schiefen Bodens erzeugt.",
        "Dinant ist der Geburtsort von Adolphe Sax, dem Erfinder des Saxophons.",
        "Die Seilbahn zur Zitadelle ist eine der steilsten ihrer Art in Belgien."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-gravensteen": {
    "factsAdvanced": {
      "de": [
        "Gravensteen bedeutet übersetzt so viel wie 'Grafenstein' oder 'Burg des Grafen'.",
        "Die Burg wurde im Jahr 1180 von Philipp von Elsass nach dem Vorbild von Kreuzritterburgen erbaut.",
        "In der Burg befindet sich heute ein Museum für Justizgeschichte und Foltergeräte.",
        "Es ist die einzige vollständig erhaltene mittelalterliche Burg in ganz Flandern."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-beersel-castle": {
    "factsAdvanced": {
      "de": [
        "Das Schloss wurde fast ausschließlich aus Backsteinen errichtet, was für die damalige Zeit untypisch war.",
        "Es diente als Schauplatz für eines der berühmten Comic-Abenteuer von 'Suske und Wiske'.",
        "Die Burg wurde nach einer schweren Zerstörung im Jahr 1489 wieder aufgebaut.",
        "Schloss Beersel ist von einem malerischen Park umgeben, der zum Spazierengehen einlädt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-bouillon-castle": {
    "descriptionAdvanced": {
      "de": "Die Burg von Bouillon thront hoch über dem Semois-Tal und gilt als eine der ältesten und beeindruckendsten Feudalburgen Europas. Sie ist untrennbar mit dem Namen Gottfried von Bouillon verbunden, der die Burg verkaufte, um den ersten Kreuzzug zu finanzieren. Die Festungsanlage beeindruckt durch ihr komplexes System aus Gängen, Sälen und Verteidigungsanlagen, die direkt in den Felsen gehauen wurden. Besucher können heute Greifvogelshows erleben, die in der historischen Kulisse der Burg stattfinden. Die Aussicht von den Türmen auf die Windungen des Flusses Semois und die umliegenden Wälder ist atemberaubend. Bouillon bietet eine faszinierende Reise zurück ins dunkle Mittelalter und die Zeit der Ritter.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Ursprünge der Burg reichen bis in das 8. Jahrhundert zurück.",
        "Gottfried von Bouillon wurde nach dem ersten Kreuzzug zum 'Beschützer des Heiligen Grabes' in Jerusalem.",
        "Die Festung wurde im 17. Jahrhundert vom berühmten Festungsbaumeister Vauban modernisiert.",
        "Es gibt ein ausgeklügeltes System von Zisternen, um die Burg bei Belagerungen mit Wasser zu versorgen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-stoclet-palace": {
    "descriptionAdvanced": {
      "de": "Das Palais Stoclet in Brüssel ist ein architektonisches Meisterwerk des Jugendstils und der Wiener Secession, entworfen von Josef Hoffmann für den Bankier Adolphe Stoclet. Das Gebäude gilt als 'Gesamtkunstwerk', bei dem Architektur, Inneneinrichtung und Garten perfekt aufeinander abgestimmt sind. Besonders berühmt ist der Speisesaal mit den prächtigen Mosaiken von Gustav Klimt. Die Fassade aus weißem Marmor und die strengen geometrischen Formen waren für die Bauzeit zwischen 1905 und 1911 revolutionär. Da das Palais nach wie vor im Privatbesitz der Familie Stoclet ist, kann es leider nicht von innen besichtigt werden. Dennoch gehört es zum UNESCO-Weltkulturerbe und ist von außen ein faszinierendes Beispiel für den Übergang zur Moderne.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Palais Stoclet wurde im Jahr 2009 in die Liste des UNESCO-Weltkulturerbes aufgenommen.",
        "Für den Bau und die Ausstattung wurden keine Kosten gescheut; es kamen edelste Materialien wie Marmor und Halbedelsteine zum Einsatz.",
        "Es gilt als eines der am besten erhaltenen Beispiele der Wiener Secession außerhalb von Österreich.",
        "Der Turm des Gebäudes ist mit vier Bronzestatuen von Franz Metzner geschmückt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-tyne-cot-cemetery": {
    "descriptionAdvanced": {
      "de": "Der Tyne Cot Cemetery in Zonnebeke bei Ypern ist der größte britische Soldatenfriedhof der Welt und ein bewegendes Denkmal für die Gefallenen des Ersten Weltkriegs. Auf dem Gelände ruhen fast 12.000 Soldaten des Commonwealth, während eine Gedenkmauer die Namen von weiteren 35.000 Vermissten trägt. Der Friedhof wurde auf einem ehemaligen deutschen Stützpunkt errichtet, von dem noch heute Bunkerruinen zeugen. Die schier endlose Reihe weißer Grabsteine inmitten der flämischen Felder ist ein mahnendes Zeugnis für die Schrecken des Krieges. Ein Besucherzentrum bietet Hintergrundinformationen zur Dritten Flandernschlacht (Passchendaele). Jedes Jahr kommen Tausende Menschen hierher, um der Opfer zu gedenken und innezuhalten.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Tyne Cot ist der größte Friedhof der Commonwealth War Graves Commission weltweit.",
        "Der Name 'Tyne Cot' stammt von Soldaten aus Northumberland, die die deutschen Bunker mit Hütten am Fluss Tyne verglichen.",
        "Zwei der deutschen Bunker wurden in das Design des Friedhofs integriert.",
        "Das 'Cross of Sacrifice' wurde auf Wunsch von König Georg V. auf einem der Bunker errichtet."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-signal-de-botrange": {
    "descriptionAdvanced": {
      "de": "Der Signal de Botrange ist mit 694 Metern der höchste Punkt Belgiens und liegt im Herzen des Naturparks Hohes Venn. Von hier aus erstreckt sich die weite Moorlandschaft, die zu jeder Jahreszeit einen besonderen Reiz ausübt. Um die symbolische Höhe von 700 Metern zu erreichen, wurde 1923 der 'Baltia-Hügel' mit einer Treppe aufgeschüttet. Ein Aussichtsturm und ein Naturzentrum bieten Besuchern wertvolle Informationen über die einzigartige Flora und Fauna der Region. Wanderwege starten direkt vom Plateau und führen tief in die geschützten Bereiche des Hochmoors. Im Winter ist der Signal de Botrange ein beliebtes Zentrum für Skilanglauf in Belgien.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Signal de Botrange liegt in der Provinz Lüttich, nahe der deutschen Grenze.",
        "Ein 1923 errichteter Hügel ermöglicht es Besuchern, auf genau 700 Meter Höhe zu stehen.",
        "Das Gebiet verzeichnet die höchsten Niederschlagsmengen und die kältesten Temperaturen Belgiens.",
        "Dort befindet sich eine meteorologische Station, die wichtige Daten für die Region liefert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-baraque-michel": {
    "descriptionAdvanced": {
      "de": "Baraque Michel ist ein bekannter historischer Gasthof und Wanderstützpunkt im Hohen Venn, der lange Zeit als der höchste Punkt des Landes galt. Die Lage auf dem nebelanfälligen Hochplateau machte den Ort über Jahrhunderte zu einem wichtigen Rettungspunkt für verirrte Wanderer. Eine Glocke, die 'Glocke der Verirrten', wurde früher geläutet, um Menschen in Sicherheit zu führen. Heute ist Baraque Michel ein beliebter Ausgangspunkt für Erkundungstouren durch das Moor und die Heide. In der gemütlichen Gaststube können Besucher regionale Spezialitäten genießen und sich nach einer Wanderung aufwärmen. Es ist ein Ort voller Geschichte, der die raue Natur des Venns widerspiegelt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Baraque Michel war vor der Annexion der Ostkantone im Jahr 1919 der höchste Punkt Belgiens.",
        "Der Name geht auf Michel Schmitz zurück, der hier Ende des 18. Jahrhunderts eine Zufluchtsstätte errichtete.",
        "Die Kapelle Fischbach in der Nähe wurde als Dank für eine Errettung aus dem Moor erbaut.",
        "Es ist ein idealer Ort, um die typische 'Venn-Atmosphäre' mit ihren weiten Horizonten zu erleben."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-lake-robertville": {
    "descriptionAdvanced": {
      "de": "Der See von Robertville ist ein künstlich angelegter Stausee in der Gemeinde Waimes, der harmonisch in die Landschaft der Ardennen eingebettet ist. Er entstand durch den Bau einer Talsperre am Fluss Warche in den 1920er Jahren zur Stromerzeugung und Trinkwasserversorgung. Heute ist der See ein beliebtes Freizeitzentrum, das Möglichkeiten zum Schwimmen, Bootfahren und Angeln bietet. Die umliegenden Wälder sind durchzogen von Wanderwegen, die spektakuläre Ausblicke auf das glitzernde Wasser und die nahegelegene Burg Reinhardstein bieten. Besonders im Sommer lockt der Strand von Robertville Badegäste aus der gesamten Region an. Es ist ein Ort der Entspannung, der Naturgenuss mit sportlichen Aktivitäten verbindet.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Staumauer von Robertville ist 55 Meter hoch.",
        "Der See hat eine Fläche von etwa 62 Hektar und eine maximale Tiefe von 50 Metern.",
        "In unmittelbarer Nähe befindet sich der Wasserfall von Reinhardstein, der höchste Wasserfall Belgiens.",
        "Das Wasser des Sees ist für seine ausgezeichnete Qualität bekannt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-semois-river": {
    "descriptionAdvanced": {
      "de": "Die Semois ist ein malerischer Fluss im Süden Belgiens, der sich in unzähligen Windungen durch die tiefen Wälder der Ardennen schlängelt. Die Region um die Semois ist berühmt für ihre spektakulären Aussichtspunkte, wie den 'Grab des Riesen' (Tombeau du Géant) bei Botassart. Das Tal war früher ein bedeutendes Zentrum für den Tabakanbau, wovon heute noch historische Tabakscheunen zeugen. Wanderer und Kajakfahrer schätzen den Fluss für seine ruhige Strömung und die unberührte Natur an seinen Ufern. Kleine, charmante Dörfer wie Rochehaut oder Bouillon laden zum Verweilen und Entdecken der lokalen Kultur ein. Die Semois gilt als einer der romantischsten und ursprünglichsten Flüsse in ganz Wallonien.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Semois entspringt in Arlon und mündet in Frankreich in die Maas.",
        "Wegen ihrer vielen Schleifen ist der Flussweg deutlich länger als die Luftlinie.",
        "Das Semois-Tal war bis zur Mitte des 20. Jahrhunderts eine wichtige Tabakregion.",
        "Die Region ist bekannt für ihre Nebelstimmungen, die dem Tal oft ein mystisches Aussehen verleihen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-lesse-river": {
    "descriptionAdvanced": {
      "de": "Die Lesse ist ein faszinierender Fluss in den Ardennen, der besonders für seine spektakulären Felsformationen und unterirdischen Verläufe bekannt ist. Bei Han-sur-Lesse verschwindet der Fluss in den berühmten Grotten von Han, einem der größten Höhlensysteme Europas. Die Abfahrt auf der Lesse mit dem Kajak von Houyet nach Anseremme ist eine der beliebtesten touristischen Aktivitäten in Belgien. Während der Fahrt gleitet man an steilen Kalksteinfelsen, dichten Wäldern und historischen Schlössern wie dem Schloss Walzin vorbei. Der Fluss bietet sowohl ruhige Abschnitte als auch kleine Stromschnellen, die für Spaß und Abwechslung sorgen. Die Lesse ist ein wunderbares Beispiel für die dynamische Kraft der Natur in der wallonischen Region.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Lesse legt einen Teil ihres Weges vollständig unterirdisch durch Kalksteinhöhlen zurück.",
        "Die Kajakstrecke zwischen Houyet und Anseremme ist etwa 21 Kilometer lang.",
        "Das Tal der Lesse beherbergt zahlreiche prähistorische Fundstätten in seinen Höhlen.",
        "Der Fluss mündet bei Dinant in die Maas."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-monsin-island": {
    "descriptionAdvanced": {
      "de": "Die Insel Monsin liegt in der Maas bei Lüttich und ist ein wichtiger Knotenpunkt für die Schifffahrt und Industrie der Region. Sie entstand durch den Bau des Albert-Kanals und beherbergt bedeutende Infrastrukturanlagen wie das Wasserkraftwerk und das Denkmal von König Albert I. Trotz ihrer industriellen Bedeutung gibt es auf der Insel auch Grünflächen und Bereiche, die für die lokale Fischerei wichtig sind. Die Insel markiert den Eingang zum Hafen von Lüttich, dem drittgrößten Binnenhafen Europas. Die imposanten Schleusenanlagen von Monsin sind ein beeindruckendes Beispiel für Wasserbaukunst. Für Technikinteressierte bietet die Insel einen spannenden Einblick in die logistische Bedeutung der Maas für Belgien.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Insel beherbergt ein monumentales Denkmal zu Ehren von König Albert I., das 1939 eingeweiht wurde.",
        "Monsin ist ein zentraler Bestandteil des Hafens von Lüttich.",
        "Auf der Insel befindet sich ein wichtiges Wasserkraftwerk, das die Kraft der Maas nutzt.",
        "Die Schleuse von Monsin ermöglicht den Höhenausgleich für Schiffe zwischen der Maas und dem Albert-Kanal."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-atomium": {
    "descriptionAdvanced": {
      "de": "Das Atomium ist das futuristische Wahrzeichen von Brüssel und wurde ursprünglich für die Weltausstellung 1958 (Expo 58) errichtet. Es stellt eine 165-milliardenfache Vergrößerung einer Eisenkristallstruktur dar und symbolisiert den wissenschaftlichen Fortschritt und die friedliche Nutzung der Kernenergie. Die Struktur besteht aus neun miteinander verbundenen Kugeln, von denen einige für Besucher zugänglich sind und Ausstellungen beherbergen. In der obersten Kugel befindet sich ein Restaurant mit einem atemberaubenden Panoramablick über die gesamte Stadt Brüssel. Nachts wird das Atomium durch Tausende von Lichtern spektakulär beleuchtet. Es ist eines der einzigartigsten Bauwerke der Welt und ein Symbol für Optimismus und Innovation.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Atomium war ursprünglich nur für eine Dauer von sechs Monaten geplant.",
        "Die gesamte Konstruktion ist 102 Meter hoch; jede der Kugeln hat einen Durchmesser von 18 Metern.",
        "Der Aufzug im Inneren war zum Zeitpunkt seiner Eröffnung der schnellste Europas.",
        "Nach einer umfassenden Renovierung im Jahr 2006 erstrahlt die Aluminium-Fassade nun in rostfreiem Stahl."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-grand-place-brussels": {
    "descriptionAdvanced": {
      "de": "Der Grand Place (Grote Markt) in Brüssel gilt als einer der schönsten Marktplätze der Welt und ist das historische Herz der belgischen Hauptstadt. Er ist gesäumt von prächtigen Zunfthäusern, dem beeindruckenden Rathaus und dem Maison du Roi, die alle durch ihre detailreiche Architektur bestechen. Der Platz spiegelt den Wohlstand und die Macht der Brüsseler Bürger und Handwerker im 17. Jahrhundert wider. Seit 1998 gehört der Grand Place zum UNESCO-Weltkulturerbe und ist Schauplatz zahlreicher Veranstaltungen, wie dem berühmten Blumenteppich. Die Atmosphäre auf dem Platz ist zu jeder Tageszeit magisch, besonders wenn die Gebäude am Abend golden beleuchtet werden. Er ist ein unverzichtbares Ziel für jeden Besucher, der die Pracht der flämischen Renaissance und des Barock erleben möchte.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Alle zwei Jahre im August wird der Platz mit einem riesigen Teppich aus Millionen von Begonien bedeckt.",
        "Der Turm des Rathauses ist 96 Meter hoch und im gotischen Stil erbaut.",
        "Im Jahr 1695 wurde der Großteil der Gebäude durch den Beschuss französischer Truppen zerstört und kurz darauf prächtiger wieder aufgebaut.",
        "Jedes Zunfthaus auf dem Platz hat einen eigenen Namen und eine spezifische Symbolik an der Fassade."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-antwerp-central-station": {
    "descriptionAdvanced": {
      "de": "Der Hauptbahnhof von Antwerpen, oft als 'Eisenbahnkathedrale' bezeichnet, gilt als einer der schönsten Bahnhöfe der Welt. Er wurde zwischen 1895 und 1905 erbaut und beeindruckt durch seine monumentale Architektur, die eine riesige Glaskuppel mit einer prächtigen Empfangshalle kombiniert. Die Verwendung von verschiedenen Marmorarten und kunstvollen Steingravuren verleiht dem Gebäude einen herrschaftlichen Glanz. Nach einer umfassenden Modernisierung ist der Bahnhof heute auf vier Ebenen organisiert und empfängt Hochgeschwindigkeitszüge aus ganz Europa. Er ist nicht nur ein wichtiger Verkehrsknotenpunkt, sondern auch eine architektonische Sehenswürdigkeit für sich. Ein Besuch des Bahnhofs ist ein Erlebnis, das die Eleganz des frühen 20. Jahrhunderts mit modernster Logistik vereint.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Bahnhof wurde im Auftrag von König Leopold II. entworfen.",
        "Die beeindruckende Glaskuppel über den Gleisen wurde von dem Ingenieur Clément Van Bogaert konstruiert.",
        "Antwerpen Centraal belegt regelmäßig Spitzenplätze in Rankings der schönsten Bahnhöfe weltweit.",
        "In der Bahnhofshalle befinden sich über 20 verschiedene Marmor- und Steinarten."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-belfry-bruges": {
    "descriptionAdvanced": {
      "de": "Der Belfried von Brügge ist ein imposanter mittelalterlicher Glockenturm, der den Marktplatz der Stadt dominiert und als Symbol für Freiheit und Wohlstand gilt. Mit einer Höhe von 83 Metern bietet er nach dem Aufstieg über 366 Stufen einen atemberaubenden Panoramablick über das UNESCO-Weltkulturerbe Brügge. Der Turm beherbergt ein beeindruckendes Glockenspiel (Carillon) mit 47 Glocken, das regelmäßig für Konzerte genutzt wird. Historisch diente der Belfried zur Aufbewahrung der Stadtrechte und als Wachturm zur Früherkennung von Bränden. Die Architektur des Turms spiegelt verschiedene Epochen wider, da er nach Bränden mehrfach umgebaut wurde. Er ist eines der meistfotografierten Motive der Stadt und ein Muss für jeden Besucher.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Turm hat eine leichte Neigung von etwa einem Meter nach links.",
        "Der Bau des Turms begann im 13. Jahrhundert und dauerte über 200 Jahre.",
        "Das Glockenspiel wird noch heute von einem professionellen Stadtturmschläger bedient.",
        "Der Belfried von Brügge gehört seit 1999 zum UNESCO-Weltkulturerbe."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-waterloo-battlefield": {
    "descriptionAdvanced": {
      "de": "Das Schlachtfeld von Waterloo ist ein Ort von welthistorischer Bedeutung, an dem 1815 das Schicksal Europas entschieden wurde. Auf diesen weiten Feldern südlich von Brüssel endete die Herrschaft Napoleons nach seiner Niederlage gegen die alliierten Truppen unter Wellington und Blücher. Heute können Besucher das Gelände erkunden und an strategischen Punkten wie dem Gutshof Hougoumont die Dramatik der Kämpfe nachempfinden. Der Löwenhügel, ein künstlich aufgeschüttetes Monument, bietet einen weiten Blick über das ehemalige Kampfgebiet. Moderne Gedenkstätten und Museen vermitteln die historischen Details und ehren die Tausenden Soldaten, die hier ihr Leben ließen. Es ist ein Ort der Stille, der gleichzeitig die Intensität einer der folgenreichsten Schlachten der Weltgeschichte ausstrahlt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Schlachtfeld ist gesetzlich geschützt, um seinen ursprünglichen Charakter zu bewahren.",
        "Der Gutshof Hougoumont spielte eine entscheidende Rolle bei der Verteidigung der alliierten Stellungen.",
        "Das 'Mémorial 1815' unterhalb des Löwenhügels ist ein unterirdisches Museum.",
        "Die Schlacht dauerte etwa 10 Stunden und forderte rund 50.000 Opfer (Tote und Verwundete)."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-fort-eben-emael": {
    "descriptionAdvanced": {
      "de": "Das Fort Eben-Emael war einst eine der stärksten und modernsten Festungsanlagen Europas und galt als uneinnehmbar. Es wurde zwischen den Weltkriegen zum Schutz der belgischen Grenze und des Albert-Kanals errichtet. Die spektakuläre Einnahme des Forts durch deutsche Fallschirmjäger im Mai 1940 unter Einsatz neuartiger Hohlladungen schockierte die Welt. Heute ist das Fort ein beeindruckendes Museum, das Einblicke in das Leben der Soldaten und die militärische Ingenieurskunst bietet. Die riesige unterirdische Anlage umfasst Kilometer von Gängen, Kasernen und Munitätslagern. Ein Besuch führt durch die dramatischen Ereignisse des Angriffs und zeigt die imposanten Geschütztürme auf dem weitläufigen Plateau.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Fort hat eine Fläche von 75 Hektar und liegt direkt an der Grenze zu den Niederlanden.",
        "Der Bau dauerte drei Jahre und erforderte gewaltige Mengen an Beton und Stahl.",
        "Die gesamte Anlage ist durch ein Belüftungssystem gegen Gasangriffe geschützt.",
        "Ein großer Teil der Anlage befindet sich bis zu 60 Meter tief unter der Erde."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-royal-greenhouses-laeken": {
    "descriptionAdvanced": {
      "de": "Die Königlichen Gewächshäuser von Laeken sind ein Juwel der Glaskunst und Architektur des 19. Jahrhunderts. Entworfen von Alphonse Balat für König Leopold II., bilden sie eine riesige 'Glasstadt' inmitten des königlichen Parks. Die prächtigen Eisen-Glas-Konstruktionen beherbergen eine beeindruckende Sammlung seltener Pflanzen und Blumen aus aller Welt. Besonders berühmt ist die zentrale 'Große Rotunde' mit ihrer majestätischen Kuppel. Die Gewächshäuser sind nur für wenige Wochen im Jahr, meist im Frühjahr, für die Öffentlichkeit zugänglich. Ein Spaziergang durch die blühenden Korridore ist ein märchenhaftes Erlebnis, das Architektur und Botanik in vollkommener Harmonie vereint.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Einige der Pflanzen in der Sammlung stammen noch aus der Zeit von König Leopold II.",
        "Die gesamte Glasfläche der Gewächshäuser beträgt über 2,5 Hektar.",
        "Die Anlage dient auch heute noch als Ort für offizielle Empfänge des belgischen Königs.",
        "Alphonse Balat war der Lehrmeister des berühmten Jugendstil-Architekten Victor Horta."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-palace-justice-brussels": {
    "descriptionAdvanced": {
      "de": "Der Justizpalast von Brüssel ist ein monumentales Bauwerk, das majestätisch auf dem Galgenberg thront und die Skyline der Stadt dominiert. Bei seiner Fertigstellung im Jahr 1883 war es das größte Gebäude der Welt und beeindruckt noch heute durch seine gewaltigen Ausmaße und den eklektischen Stil. Der Architekt Joseph Poelaert schuf ein Werk von schier unglaublicher Opulenz, das die Macht des Gesetzes symbolisieren sollte. Die prunkvolle Eingangshalle mit ihrer riesigen Kuppel ist ein beeindruckendes Beispiel für die Baukunst des 19. Jahrhunderts. Trotz jahrzehntelanger Renovierungsarbeiten bleibt das Gebäude ein faszinierendes Wahrzeichen und bietet vom Vorplatz aus einen der besten Ausblicke über Brüssel. Es ist ein ort, der Ehrfurcht einflößt und die wechselvolle Geschichte Belgiens widerspiegelt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Justizpalast ist mit 26.000 Quadratmetern Grundfläche größer als der Petersdom in Rom.",
        "Für den Bau mussten ganze Stadtviertel abgerissen werden, was zu großem Unmut bei der Bevölkerung führte.",
        "Das Gebäude befindet sich seit über 40 Jahren fast ununterbrochen unter Gerüsten.",
        "Es gibt zahlreiche Legenden über Geheimgänge und verborgene Räume im Inneren des Palastes."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-mas-museum-antwerp": {
    "descriptionAdvanced": {
      "de": "Das Museum aan de Stroom (MAS) ist ein modernes architektonisches Highlight im alten Hafenviertel von Antwerpen. Der markante Turm aus rotem Sandstein und gewelltem Glas erzählt die Geschichte Antwerpens als Weltstadt und bedeutender Hafen. Jede Etage des Museums widmet sich einem anderen Thema, von der Schifffahrt über die Diamantenindustrie bis hin zu globalen Handelsbeziehungen. Ein Highlight ist der 'Boulevard', eine spiralförmige Treppe, die Besucher an Panoramafenstern vorbei nach oben führt. Von der kostenlosen Dachterrasse aus bietet sich ein spektakulärer 360-Grad-Blick über die Stadt, den Hafen und die Schelde. Das MAS ist nicht nur ein Museum, sondern ein lebendiger Treffpunkt, der Tradition und Moderne perfekt verbindet.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Fassade des Museums ist mit 3.185 kleinen Händen aus Aluminium verziert, dem Symbol Antwerpens.",
        "Das Gebäude ist 60 Meter hoch und wurde von den niederländischen Architekten Neutelings Riedijk entworfen.",
        "Die Glasscheiben des 'Boulevards' sind gewellt, was für zusätzliche Stabilität und interessante Lichteffekte sorgt.",
        "Im Inneren befinden sich über 500.000 Museumsstücke."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "port-antwerp-bruges": {
    "descriptionAdvanced": {
      "de": "Der Hafen von Antwerpen-Brügge ist nach der Fusion der beiden Standorte einer der größten und wichtigsten Seehäfen der Welt. Er fungiert als zentrales Tor für den europäischen Außenhandel und ist ein bedeutender Wirtschaftsmotor für die gesamte Region. In Antwerpen liegt der Schwerpunkt auf Containertransport und Chemie, während Zeebrugge ein weltweit führendes Zentrum für den Umschlag von Neufahrzeugen und Flüssigerdgas (LNG) ist. Der Hafen ist bekannt für seine hochmoderne Infrastruktur und seine Bemühungen um Nachhaltigkeit und Digitalisierung. Er verbindet Hunderte von Destinationen weltweit und sichert Tausende von Arbeitsplätzen. Die schiere Größe und die logistische Komplexität des Hafens sind tief beeindruckend.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Es ist der zweitgrößte Hafen Europas nach Rotterdam.",
        "Antwerpen beherbergt den größten integrierten Chemie-Cluster Europas.",
        "Der Hafen von Zeebrugge ist der weltweit wichtigste Hafen für den Import und Export von Autos.",
        "Die Häfen fusionierten im Jahr 2022 offiziell zum 'Port of Antwerp-Bruges'."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "port-zeebrugge": {
    "descriptionAdvanced": {
      "de": "Der Hafen von Zeebrugge ist ein moderner Tiefwasserhafen an der belgischen Nordseeküste und ein integraler Bestandteil des Port of Antwerp-Bruges. Seine strategische Lage macht ihn zu einem idealen Umschlagplatz für den Fährverkehr nach Großbritannien und den Handel mit Skandinavien. Zeebrugge ist weltführend im Bereich des Automobilumschlags und verfügt über riesige Terminals für den Import und Export von Neufahrzeugen. Zudem spielt der Hafen eine zentrale Rolle in der Energieversorgung Belgiens als Standort für ein großes LNG-Terminal. Die Hafenanlagen sind für die größten Containerschiffe der Welt zugänglich und zeichnen sich durch schnelle Abfertigungszeiten aus. Neben der Industrie ist Zeebrugge auch für seinen Fischereihafen und die kulinarischen Spezialitäten bekannt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Zeebrugge ist der weltweit größte Hafen für den Umschlag von Neuwagen.",
        "Rund 15 % des gesamten in Westeuropa verbrauchten Erdgases fließen durch das Terminal in Zeebrugge.",
        "Der Name bedeutet wörtlich 'Brügge am Meer'.",
        "Der Hafen wurde Ende des 19. Jahrhunderts künstlich angelegt, um Brügge wieder einen Zugang zum Meer zu verschaffen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "port-ghent": {
    "descriptionAdvanced": {
      "de": "Der Hafen von Gent ist ein bedeutender Binnenhafen, der über den Kanal Gent-Terneuzen mit der Nordsee verbunden ist. Er ist bekannt für seine starke industrielle Ausrichtung, insbesondere in den Bereichen Stahlproduktion, Automobilbau und Biokraftstoffe. Große Unternehmen wie Volvo Cars und ArcelorMittal haben hier ihre Produktionsstätten und nutzen die hervorragende logistische Anbindung. Der Hafen legt einen starken Fokus auf Kreislaufwirtschaft und Nachhaltigkeit und strebt danach, ein Vorreiter in der grünen Energieversorgung zu werden. Die modernen Hafenanlagen stehen im interessanten Kontrast zum historischen Charme der nahegelegenen Genter Innenstadt. Gent ist ein wichtiger Knotenpunkt für den Güterverkehr im Herzen Flanderns und trägt maßgeblich zum Wohlstand der Region bei.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Hafen von Gent ist seit 2018 Teil der grenzüberschreitenden Hafengruppe 'North Sea Port'.",
        "Der Kanal Gent-Terneuzen ist für Schiffe mit einem Tiefgang von bis zu 12,5 Metern befahrbar.",
        "In Gent befindet sich eines der größten Biokraftstoff-Cluster Europas.",
        "Der Hafen schafft direkt und indirekt Arbeitsplätze für über 70.000 Menschen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "port-liege": {
    "descriptionAdvanced": {
      "de": "Der Hafen von Lüttich ist der größte Binnenhafen Belgiens und einer der bedeutendsten in ganz Europa. Gelegen an der Maas und am Albert-Kanal, dient er als zentrales Drehkreuz für den Warentransport zwischen den Seehäfen und dem europäischen Hinterland. Der Hafen besteht aus zahlreichen Terminals, die auf den Umschlag von Containern, Schüttgut und Erdölprodukten spezialisiert sind. Besonders hervorzuheben ist der trimodale Charakter, der eine effiziente Verknüpfung von Wasserstraße, Schiene und Straße ermöglicht. Der Hafen von Lüttich ist ein entscheidender Faktor für die industrielle Renaissance Walloniens und zieht stetig neue Investitionen an. Seine strategische Bedeutung reicht weit über die Landesgrenzen hinaus bis nach Deutschland und Frankreich.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Lüttich ist der drittgrößte Binnenhafen Europas nach Duisburg und Paris.",
        "Der Hafen erstreckt sich über eine Länge von etwa 26 Kilometern entlang der Maas.",
        "Durch den Albert-Kanal ist der Hafen direkt mit dem Hafen von Antwerpen verbunden.",
        "Jährlich werden hier rund 20 Millionen Tonnen Güter umgeschlagen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "agri-haspengouw-fruit-region": {
    "descriptionAdvanced": {
      "de": "Der Haspengau, im Herzen der Provinz Limburg gelegen, ist das bedeutendste Obstanbaugebiet Belgiens und eines der größten Europas. Besonders im Frühling verwandelt sich die Region in ein weiß-rosa Blütenmeer, das unzählige Wanderer und Radfahrer anzieht. Neben den endlosen Apfel- und Birnenplantagen prägen historische Gutshöfe, Schlösser und idyllische Dörfer das Landschaftsbild. Die Region ist zudem für ihre hochwertigen regionalen Produkte wie Sirup, Säfte und Obstweine bekannt. Ein Besuch in Sint-Truiden, dem Zentrum des Haspengaus, bietet tiefe Einblicke in die traditionsreiche Obstkultur.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Haspengau ist nach Südtirol das zweitgrößte Obstanbaugebiet in Europa.",
        "Die Region produziert rund 70 % aller belgischen Äpfel und über 80 % der Birnen.",
        "Einzigartig sind die 'schwimmenden' Kunstwerke und Kapellen in der Landschaft, wie die berühmte Kirche 'Reading between the Lines'.",
        "Jedes Jahr im April findet die traditionelle Blütensegnung statt, die den Beginn der Saison markiert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "ind-c-mine-genk": {
    "descriptionAdvanced": {
      "de": "C-mine in Genk ist ein beeindruckendes Beispiel für den erfolgreichen Strukturwandel einer ehemaligen Kohlemine in ein lebendiges Kultur- und Designzentrum. Auf dem Gelände der einstigen Zeche Winterslag verschmelzen heute industrielle Industriegeschichte und zeitgenössische Kreativität. Besucher können in der 'C-mine Expedition' tief in die unterirdischen Gänge eintauchen und die authentische Atmosphäre der Bergbauära erleben. Das markante Fördermaschinengebäude und die weithin sichtbaren Fördertürme sind architektonische Highlights, die heute Ateliers, Kinos und Ausstellungsräume beherbergen. C-mine hat sich so zu einem Symbol für Innovation und den Stolz der ehemaligen Bergbauregion entwickelt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die ehemalige Zeche Winterslag war von 1917 bis 1988 in Betrieb.",
        "Der markante Förderturm von C-mine ist über 60 Meter hoch und bietet eine spektakuläre Aussicht.",
        "Das Gelände beherbergt heute auch die renommierte LUCA School of Arts.",
        "Jährlich besuchen über 800.000 Menschen das Areal für kulturelle Veranstaltungen und Tourismus."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-brussels-town-hall": {
    "descriptionAdvanced": {
      "de": "Das Brüsseler Rathaus ist das unbestrittene architektonische Juwel des Grand Place und eines der prächtigsten gotischen Gebäude der Welt. Mit seinem 96 Meter hohen, filigran verzierten Turm dominiert es die Skyline des historischen Zentrums und symbolisiert den bürgerlichen Stolz der Stadt. Die Fassade ist mit hunderten von Statuen geschmückt, die Adlige, Heilige und allegorische Figuren darstellen. Im Inneren beherbergt das Rathaus prunkvolle Säle, darunter den prächtigen Ratssaal und die beeindruckende Tapisseriensammlung. Besonders bemerkenswert ist die leichte Asymmetrie des Gebäudes, die Gegenstand zahlreicher Legenden über den Architekten ist.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Turm wurde zwischen 1449 und 1454 erbaut und trägt an seiner Spitze eine Statue des Heiligen Michael.",
        "Das Gebäude überstand als eines der wenigen auf dem Platz die heftige französische Bombardierung von 1695.",
        "Die Fassade zeigt eine Kopie der originalen Statuen, während die Originale im Stadtmuseum aufbewahrt werden.",
        "Das Rathaus dient heute noch für offizielle Empfänge und Hochzeiten der Brüsseler Bürger."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-durbuy": {
    "descriptionAdvanced": {
      "de": "Durbuy, oft als die 'kleinste Stadt der Welt' bezeichnet, ist ein mittelalterliches Juwel in den belgischen Ardennen. Die Stadt besticht durch ihre engen, kopfsteingepflasterten Gassen, historischen Kalksteinhäuser und eine fast märchenhafte Atmosphäre. Eingebettet in eine Flussschleife der Ourthe, bietet Durbuy eine perfekte Kulisse für Erholung und kulinarische Entdeckungen. Das herrschaftliche Schloss der Grafen von Ursel überragt das Stadtbild und zeugt von der strategischen Bedeutung in vergangenen Zeiten. Heute ist Durbuy ein Magnet für Touristen, die sowohl Ruhe als auch Outdoor-Aktivitäten wie Kajakfahren und Wandern suchen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Durbuy erhielt bereits 1331 vom böhmischen König Johann von Luxemburg die Stadtrechte.",
        "Der Topiari-Park in Durbuy ist der größte Formbäumegarten in Europa mit über 250 Skulpturen.",
        "Die Stadt ist berühmt für ihre hochwertige Gastronomie und die Verwendung lokaler Ardenner Produkte.",
        "Jedes Jahr findet hier ein bekannter Weihnachtsmarkt statt, der den historischen Kern verzaubert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-bouillon": {
    "descriptionAdvanced": {
      "de": "Bouillon ist untrennbar mit seiner gewaltigen Festung verbunden, die auf einem schmalen Felsgrat hoch über der Semois thront. Die Stadt in den Ardennen war die Heimat von Gottfried von Bouillon, dem berühmten Anführer des ersten Kreuzzugs. Die mittelalterliche Burg gilt als eine der bedeutendsten und am besten erhaltenen militärischen Anlagen Belgiens. Neben der Geschichte bietet Bouillon eine malerische Lage in einer tief eingeschnittenen Flussschleife, ideal für Wanderungen und Kajakfahrten. Die engen Gassen der Unterstadt laden zum Verweilen in gemütlichen Cafés und Restaurants ein.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Burg von Bouillon beherbergt eine beeindruckende Greifvogelshow in ihrem Innenhof.",
        "Gottfried von Bouillon verkaufte die Burg 1096 an das Bistum Lüttich, um seinen Kreuzzug zu finanzieren.",
        "Das Panorama vom 'Belvédère'-Turm bietet den besten Blick auf die gewaltige Flussschleife der Semois.",
        "Die Stadt ist ein wichtiger Stopp auf der europäischen Route der historischen Festungsstädte."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-dinant": {
    "descriptionAdvanced": {
      "de": "Dinant, spektakulär zwischen steilen Felswänden und der Maas gelegen, ist eine der am meistfotografierten Städte Walloniens. Das markante Wahrzeichen ist die Stiftskirche Notre-Dame mit ihrem charakteristischen Zwiebelturm, überragt von der mächtigen Zitadelle. Dinant ist der Geburtsort von Adolphe Sax, dem Erfinder des Saxophons, dessen Vermächtnis in der gesamten Stadt präsent ist. Die Uferpromenade lädt zu entspannten Spaziergängen ein, während die Maas zahlreiche Möglichkeiten für Bootsfahrten bietet. Die Kombination aus vertikaler Felslandschaft, Flussidylle und reicher Kultur macht Dinant zu einem unverzichtbaren Ziel in den Ardennen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Um zur Zitadelle zu gelangen, kann man entweder die Seilbahn nutzen oder 408 Stufen erklimmen.",
        "Überall in der Stadt sind bunte, überlebensgroße Saxophon-Skulpturen als Hommage an Adolphe Sax aufgestellt.",
        "Die 'Couque de Dinant' ist ein extrem harter Honigkeks, der oft mit kunstvollen Motiven geprägt wird.",
        "Im August findet auf der Maas die 'Régate des Baignoires' statt, eine humorvolle Regatta in Badewannen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-huy": {
    "descriptionAdvanced": {
      "de": "Die historische Stadt Huy liegt strategisch günstig an der Mündung des Hoyoux in die Maas und blickt auf eine lange Tradition als Handels- und Industriezentrum zurück. Das Herz der Stadt ist der 'Grand Place' mit seinem prunkvollen Brunnen 'Li Bassinia', einem Meisterwerk der Metallkunst. Über der Stadt thront das 'Fort de Huy', eine Zitadelle, die auf den Fundamenten einer mittelalterlichen Burg errichtet wurde und heute als Gedenkstätte dient. Die gotische Stiftskirche Notre-Dame beeindruckt durch ihren gewaltigen Turm und die kostbaren Glasmalereien. Huy ist zudem bekannt für seine herausfordernden Radsport-Events, insbesondere die berühmte Steigung 'Mauer von Huy'.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die 'Mauer von Huy' (Mur de Huy) ist das legendäre Ziel des Radsportklassikers Fleche Wallonne.",
        "Li Bassinia ist einer der 'Vier Weltwunder von Huy', ein Brunnen aus Bronze und Eisen von 1406.",
        "Die Stadt war im Mittelalter für ihre hochwertige Goldschmiedekunst weit über die Grenzen Belgiens bekannt.",
        "Das Fort diente während des Zweiten Weltkriegs als Gefängnis der Gestapo für politische Gefangene."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-rochefort": {
    "descriptionAdvanced": {
      "de": "Rochefort, am Tor zu den Ardennen gelegen, ist eine Stadt der Traditionen, bekannt vor allem durch das gleichnamige Trappistenbier und seinen würzigen Käse. Die Stadt wird überragt von den Ruinen der alten Grafenburg, die einst eine der größten Festungen der Region war. Unter der Erde verbirgt Rochefort mit der Grotte von Lorette ein faszinierendes Höhlensystem, das Besucher mit seinen bizarren Formationen begeistert. Das Stadtzentrum ist geprägt von gemütlichen Steinhäusern, lokalen Geschäften und einer entspannten wallonischen Atmosphäre. Rochefort ist zudem ein idealer Ausgangspunkt für Erkundungstouren in das nahegelegene Han-sur-Lesse oder den Nationalpark Lesse und Lomme.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "In der Abtei Notre-Dame de Saint-Remy wird das weltberühmte Rochefort-Trappistenbier gebraut.",
        "Die Grotte von Lorette zeichnet sich durch ihren extrem vertikalen Aufbau im Vergleich zu anderen Höhlen aus.",
        "Das Schloss Comtes de Rochefort war einst Sitz einer der mächtigsten Adelsfamilien der Ardennen.",
        "Jedes Jahr findet in Rochefort ein renommiertes internationales Festival des Lachens statt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-damme": {
    "descriptionAdvanced": {
      "de": "Damme ist ein malerisches Städtchen in Westflandern, das wie kaum ein anderer Ort den mittelalterlichen Charme Flanderns bewahrt hat. Einst der Vorhafen von Brügge, liegt Damme heute idyllisch am von Pappeln gesäumten Damse Vaart-Kanal. Die Stadt ist berühmt als Heimat der legendären Figur Till Eulenspiegel und präsentiert sich heute als charmantes 'Bücherdorf' mit zahlreichen Antiquariaten. Die gotische Liebfrauenkirche und das prächtige Rathaus zeugen von der einstigen wirtschaftlichen Blütezeit der Stadt. Ein Spaziergang durch die flache Polderlandschaft oder eine Schifffahrt von Brügge nach Damme bietet Entspannung pur.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Damme war im 13. Jahrhundert einer der wichtigsten Häfen Europas, bevor die Zwin-Bucht versandete.",
        "Das Till-Eulenspiegel-Museum widmet sich der Geschichte des berühmten Narren, der laut Legende hier geboren wurde.",
        "Die flache Landschaft um Damme ist perfekt für Radtouren auf den historischen Deichwegen geeignet.",
        "Damme ist Mitglied der internationalen Vereinigung der Buchstädte und veranstaltet monatliche Büchermärkte."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-aalst": {
    "descriptionAdvanced": {
      "de": "Aalst, am Ufer der Dender gelegen, ist eine Stadt mit einer starken Identität und einem fast schon rebellischen Geist, der sich besonders im Karneval widerspiegelt. Das historische Zentrum beherbergt mit dem Belfried und dem Schöffenhaus ein UNESCO-Weltkulturerbe von herausragender Bedeutung. Die Stadt war einst ein bedeutendes Zentrum des Hopfenanbaus und der Textilindustrie, was sich heute noch in der Architektur und den lokalen Bräuchen zeigt. Aalst bietet eine lebendige Einkaufslandschaft und zahlreiche gemütliche Cafés rund um den Grote Markt. Die Bürger von Aalst, bekannt als 'Ojuinden' (Zwiebeln), pflegen ihre Traditionen mit großem Stolz und einer Prise Humor.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Karneval von Aalst ist weltberühmt und wurde von der UNESCO in die Liste des immateriellen Kulturerbes aufgenommen.",
        "Der Belfried von Aalst ist einer der ältesten in ganz Flandern und beherbergt ein Carillon mit 52 Glocken.",
        "Dirk Martens, der im 15. Jahrhundert das erste Buch in den südlichen Niederlanden druckte, stammt aus Aalst.",
        "Die Stadt ist bekannt für ihre traditionellen Zwiebelgerichte, die an die historische Bedeutung des Gemüseanbaus erinnern."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-oudenaarde": {
    "descriptionAdvanced": {
      "de": "Oudenaarde, im Herzen der Flämischen Ardennen gelegen, ist eine Stadt mit einer glanzvollen Geschichte und eine Hochburg für Radsportfans. Weltberühmt wurde die Stadt im Mittelalter für ihre hochwertigen Wandteppiche (Tapisserien), die heute in Museen auf der ganzen Welt zu finden sind. Das spätgotische Rathaus gilt als eines der schönsten Belgiens und beherbergt die beeindruckende Sammlung des MOU-Museums. Oudenaarde ist zudem das Herzstück der Flandern-Rundfahrt, was die Stadt jedes Jahr zum Mekka für Radsportbegeisterte macht. Die sanfte Hügellandschaft der Umgebung bietet zahlreiche anspruchsvolle Anstiege und malerische Ausblicke.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die 'Oudenaardse wandtapijten' schmückten einst die Paläste der europäischen Könige und Fürsten.",
        "Das Centrum Ronde van Vlaanderen in Oudenaarde ist ein interaktives Museum, das der Geschichte des berühmtesten Radrennens Belgiens gewidmet ist.",
        "Die Stadtbrauerei Liefmans ist bekannt für ihre traditionellen Fruchtbiere und das typische 'Oud Bruin'.",
        "Die St.-Walburga-Kirche beeindruckt mit ihrem 88 Meter hohen Turm, der die Stadtlandschaft dominiert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-roeselare": {
    "descriptionAdvanced": {
      "de": "Roeselare ist eine dynamische Stadt in Westflandern, die für ihren Unternehmergeist, ihre Einkaufskultur und ihre tief verwurzelte Radsporttradition bekannt ist. Im Zentrum der Stadt verbindet das 'KOERS'-Museum für den Radsport die Geschichte des Sports mit der Identität der Region. Roeselare war einst ein bedeutender Standort der Textilindustrie und hat sich heute zu einem wichtigen Handels- und Dienstleistungszentrum entwickelt. Die Rodenbach-Brauerei, ein Wahrzeichen der Stadt, ist weltberühmt für ihre in riesigen Eichenfässern gereiften Biere. Mit dem Schloss Rumbeke besitzt die Stadt zudem eines der ältesten Schlösser Belgiens, eingebettet in einen weitläufigen Park.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Roeselare wird oft als die 'Einkaufsstadt' von Westflandern bezeichnet, mit einer der längsten autofreien Einkaufsstraßen.",
        "Die Rodenbach-Brauerei beherbergt 294 riesige Eichenholzfässer (Foeder), die teilweise über 150 Jahre alt sind.",
        "Das KOERS-Museum ist im ehemaligen Zeughaus untergebracht und gilt als das Wissenszentrum für den Radsport weltweit.",
        "Das Schloss Rumbeke ist ein hervorragendes Beispiel für die flämische Renaissance-Architektur."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-turnhout": {
    "descriptionAdvanced": {
      "de": "Turnhout, die Hauptstadt der Region Campine (Kempen), ist weltweit bekannt als Zentrum der Spielkartenherstellung. Die Stadt verbindet industrielles Erbe mit herrschaftlicher Architektur, was sich besonders im beeindruckenden Schloss der Herzöge von Brabant zeigt. Das Herz der Stadt ist der Grote Markt, umgeben von historischen Gebäuden und lebendigen Terrassen. Turnhout besitzt zudem einen wunderschönen Beginenhof, der zum UNESCO-Weltkulturerbe gehört und eine Oase der Ruhe bietet. Die waldreiche Umgebung der Kempen lädt zu ausgiebigen Naturerlebnissen und Radtouren ein, während die Stadt selbst durch ein reiches Kultur- und Einkaufsangebot besticht.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "In Turnhout werden Spielkarten für fast alle großen Casinos und Märkte weltweit produziert (Firma Cartamundi).",
        "Der Beginenhof von Turnhout stammt aus dem 13. Jahrhundert und ist für seine architektonische Einheit bekannt.",
        "Das Spielkartenmuseum (Nationaal Museum van de Speelkaart) zeigt die faszinierende Geschichte der Drucktechnik.",
        "Das herrschaftliche Schloss wird heute als Gerichtsgebäude genutzt und ist von einem tiefen Wassergraben umgeben."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-hasselt": {
    "descriptionAdvanced": {
      "de": "Hasselt, die charmante Hauptstadt der Provinz Limburg, ist als 'Stadt des Geschmacks' bekannt und bietet eine perfekte Mischung aus Mode, Gastronomie und Kultur. Die Stadt ist das Zentrum des belgischen Genever-Brennens, eine Tradition, die im interaktiven Genevermuseum lebendig gehalten wird. Die weitläufige Fußgängerzone macht Hasselt zu einem Paradies für Shopping-Liebhaber, ergänzt durch das Modemuseum, das die Geschichte des Designs beleuchtet. Mit dem Japanischen Garten besitzt die Stadt den größten seiner Art in Europa, ein ort der vollkommenen Stille und Harmonie. Hasselt strahlt eine freundliche, offene Atmosphäre aus, die typisch für den belgischen Osten ist.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Hasselt ist die Heimat des 'Hasseltse Speculaas', eines würzigen Gebäcks, das sich deutlich von anderen Varianten unterscheidet.",
        "Der Japanische Garten wurde als Symbol der Freundschaft zwischen Hasselt und der japanischen Stadt Itami angelegt.",
        "Das Pukkelpop-Festival bei Hasselt ist eines der größten und bekanntesten alternativen Musikfestivals in Europa.",
        "Das Virga Jesse-Fest wird alle sieben Jahre mit einer großen Prozession durch die geschmückte Stadt gefeiert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-tongeren": {
    "descriptionAdvanced": {
      "de": "Tongeren, stolz als die älteste Stadt Belgiens bezeichnet, blickt auf eine über 2000-jährige Geschichte zurück, die bis in die Römerzeit reicht. Überall in der Stadt finden sich archäologische Spuren, von den römischen Stadtmauern bis hin zum preisgekrönten Gallo-Römischen Museum. Das Herz der Stadt ist die beeindruckende Liebfrauenbasilika, ein Meisterwerk der Gotik mit einem bedeutenden Kirchenschatz. Tongeren ist zudem weltweit berühmt für seinen sonntäglichen Antiquitätenmarkt, den größten in den Benelux-Ländern. Die Kombination aus antiker Geschichte, mittelalterlichem Erbe und lebendigen Traditionen verleiht Tongeren einen ganz besonderen, zeitlosen Charakter.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Statue von Ambiorix, dem Anführer des Eburonen-Aufstands gegen Cäsar, ist das Wahrzeichen auf dem Marktplatz.",
        "Das Gallo-Römische Museum wurde 2011 zum 'Europäischen Museum des Jahres' gekürt.",
        "Der sonntägliche Antiquitätenmarkt zieht wöchentlich tausende Besucher und Händler aus ganz Europa an.",
        "Tongeren war im Römischen Reich als Atuatuca Tungrorum eine bedeutende Verwaltungsstadt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-lier": {
    "descriptionAdvanced": {
      "de": "Lier, oft liebevoll als die 'Pforte zu den Kempen' bezeichnet, ist eine idyllische Stadt am Zusammenfluss der Großen und Kleinen Nete. Das Stadtbild ist geprägt von dem markanten Zimmer-Turm mit seiner berühmten astronomischen Uhr und einem der schönsten Beginenhöfe Flanderns. Die historische Altstadt mit ihren engen Gassen und den von Bäumen gesäumten Ufern der Nete lädt zum Entdecken und Verweilen ein. Lier ist zudem für seine kulinarischen Spezialitäten wie das 'Liers Vlaake' bekannt und verströmt eine typisch flämische Lebensart. Die Kombination aus kulturellen Schätzen, Wasserwegen und grünen Oasen macht Lier zu einem idealen Ziel für Genießer und Kulturliebhaber.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die astronomische Uhr des Zimmer-Turms zeigt unter anderem die Mondphasen, Gezeiten und die Tierkreiszeichen an.",
        "Der Beginenhof von Lier wurde bereits 1258 gegründet und umfasst heute 162 Häuser und eine Kirche.",
        "Lier ist bekannt als 'Schafsköpfe'-Stadt (Schapenkoppen), ein Spitzname, der auf eine mittelalterliche Legende zurückgeht.",
        "Die St.-Gommarus-Kirche ist ein herausragendes Beispiel für die Brabanter Gotik und beherbergt wertvolle Glasfenster."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-geel": {
    "descriptionAdvanced": {
      "de": "Geel ist eine ruhige Stadt in der Region Kempen, die weltweit für ihr jahrhundertealtes Modell der Familienpflege für psychisch kranke Menschen bekannt ist. Dieser 'Geeler Geist' prägt die offene und tolerante Atmosphäre der Stadt bis heute. Im Zentrum beeindruckt die monumentale St.-Amands-Kirche und die St.-Dimpna-Kirche, die eng mit der Geschichte der Stadtheiligen verbunden ist. Geel bietet eine gelungene Mischung aus modernem Stadtleben und ländlicher Ruhe, umgeben von den typischen Heide- und Waldlandschaften der Kempen. Die Stadt ist zudem ein bedeutender Standort für Bildung und Forschung in der Region.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Modell der Familienpflege in Geel wurde von der UNESCO als vorbildliches immaterielles Kulturerbe anerkannt.",
        "Die heilige Dimpna ist die Schutzpatronin der psychisch Kranken und der Mittelpunkt zahlreicher lokaler Legenden.",
        "Geel wird oft als 'Gelbe Stadt' bezeichnet, was sich auch in vielen städtischen Elementen widerspiegelt.",
        "Die Stadt beherbergt eine der wichtigsten Hochschulen (Thomas More) und Forschungszentren der Provinz Antwerpen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-sint-truiden": {
    "descriptionAdvanced": {
      "de": "Sint-Truiden ist das lebendige Herz der Obstregion Haspengau und blickt auf eine reiche Geschichte als bedeutende Abteistadt zurück. Die Skyline der Stadt wird geprägt von zahlreichen Kirchtürmen und dem monumentalen Belfried, der zum UNESCO-Weltkulturerbe gehört. Besonders zur Zeit der Obstblüte im Frühling ist Sint-Truiden der perfekte Ausgangspunkt für Wanderungen und Radtouren durch die blühende Landschaft. Die Stadt bietet zudem eine erstklassige Gastronomie, die die Früchte der Region in kreativen Gerichten verarbeitet. Historische Schätze wie die Abteiruinen und der Beginenhof machen Sint-Truiden zu einem vielseitigen Ziel für Kultur- und Naturfreunde gleichermaßen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Sint-Truiden hat nach Brüssel die zweithöchste Dichte an religiösen Denkmälern pro Quadratmeter in Belgien.",
        "Die Abtei von Sint-Truiden wurde bereits im 7. Jahrhundert gegründet und war einst ein bedeutendes Pilgerzentrum.",
        "Der 'Festsaal Akademia' gilt als einer der schönsten im Stil des Klassizismus in ganz Europa.",
        "Sint-Truiden ist der wichtigste Handelsplatz für Äpfel, Birnen und Kirschen in den Benelux-Ländern."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-tournai-cathedral": {
    "descriptionAdvanced": {
      "de": "Die Kathedrale Notre-Dame in Tournai ist ein monumentales Meisterwerk des Mittelalters und gehört zum UNESCO-Weltkulturerbe. Sie besticht durch ihre einzigartige Architektur, die den Übergang von der Romanik zur Gotik auf beeindruckende Weise dokumentiert. Das markanteste Merkmal sind die fünf gewaltigen Glockentürme, die das Stadtbild von Tournai weithin sichtbar dominieren. Im Inneren beeindruckt die Kathedrale durch ein weites romanisches Kirchenschiff und einen lichtdurchfluteten gotischen Chor. Der Kirchenschatz beherbergt kostbare Reliquiare und Kunstwerke, die von der einstigen Bedeutung Tournais als religiöses Zentrum zeugen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Kathedrale ist eines der wenigen Gebäude weltweit, das fünf Türme in dieser charakteristischen Anordnung besitzt.",
        "In der Schatzkammer befindet sich der Schrein Unserer Lieben Frau, ein Hauptwerk der mittelalterlichen Goldschmiedekunst.",
        "Das Gebäude besteht aus lokalem blauen Kalkstein, dem sogenannten 'Stein von Tournai', der ihm seine markante Farbe verleiht.",
        "Die Kathedrale hat eine Länge von 134 Metern und gehört damit zu den größten sakralen Bauten Belgiens."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-mons-belfry": {
    "descriptionAdvanced": {
      "de": "Der Belfried von Mons ist das stolze Wahrzeichen der Stadt und der einzige barocke Belfried in Belgien. Auf dem höchsten Punkt der Stadt errichtet, bietet der 87 Meter hohe Turm eine spektakuläre Aussicht über Mons und das ehemalige Bergbaugebiet Borinage. Das Bauwerk ist Teil des UNESCO-Weltkulturerbes und symbolisiert die städtische Freiheit und Unabhängigkeit. Sein markantes Carillon mit 49 Glocken prägt den Klangcharakter der Stadt bei feierlichen Anlässen. Der elegante Turm fügt sich harmonisch in den umliegenden Schlosspark ein, der zu den beliebtesten Aufenthaltsorten der Bürger gehört.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Belfried wurde zwischen 1661 und 1672 erbaut, nachdem der alte Turm eingestürzt war.",
        "Victor Hugo beschrieb den Belfried von Mons spöttisch als eine riesige Kaffeekanne mit vier Teekannen an den Ecken.",
        "Das Carillon wird regelmäßig für Konzerte genutzt und kann über 365 Stufen erreicht werden.",
        "In der Spitze des Turms befindet sich eine mechanische Uhr aus dem 19. Jahrhundert, die noch heute funktioniert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-beguinage-lier": {
    "descriptionAdvanced": {
      "de": "Der Beginenhof von Lier ist ein außergewöhnlich gut erhaltenes Beispiel für diese typisch flämische Siedlungsform und gehört zum UNESCO-Weltkulturerbe. Hinter seinem prachtvollen Eingangstor verbirgt sich eine Welt der Stille, bestehend aus 162 malerischen Häusern und einer barocken Kirche. Die engen kopfsteingepflasterten Gassen und die liebevoll gepflegten Vorgärten vermitteln das Gefühl einer Zeitreise ins 17. Jahrhundert. Ursprünglich als Gemeinschaft für alleinstehende religiöse Frauen gegründet, ist der Beginenhof heute ein begehrtes und ruhiges Wohnviertel im Herzen der Stadt. Die besondere Atmosphäre macht ihn zu einem der meistfotografierten Orte in der Provinz Antwerpen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Beginenhof von Lier wird oft als einer der 'flämischsten' Beginenhöfe bezeichnet, da er seinen ursprünglichen Charakter fast vollständig bewahrt hat.",
        "Am Eingang des Beginenhofs steht eine Statue der heiligen Begga, der traditionellen Schutzpatronin der Beginen.",
        "Die Kirche St. Margaretha im Zentrum des Hofes ist für ihre reiche Innenausstattung und die historische Orgel bekannt.",
        "Das Kreuzweg-Denkmal im Hof erinnert an die tiefe Frömmigkeit, die diesen Ort über Jahrhunderte prägte."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-fort-breendonk": {
    "descriptionAdvanced": {
      "de": "Fort Breendonk ist eine der am besten erhaltenen ehemaligen Konzentrationslager-Gedenkstätten in Europa und ein erschütterndes Zeugnis der NS-Verbrechen in Belgien. Ursprünglich als Teil des Festungsgürtels um Antwerpen erbaut, wurde das Fort während des Zweiten Weltkriegs von den Besatzern als Auffanglager genutzt. Die massiven Betonmauern und die beklemmende Enge der Zellen vermitteln den Besuchern die grausamen Lebensbedingungen der Gefangenen. Die Gedenkstätte widmet sich heute der Aufklärung und dem Gedenken an die Opfer von Unterdrückung und Rassismus. Ein Besuch in Breendonk ist eine tiefgreifende Erfahrung, die die Bedeutung von Freiheit und Menschenwürde unterstreicht.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Breendonk war das einzige Lager in Westeuropa, das während der gesamten Besatzungszeit unter der direkten Kontrolle der SS stand.",
        "Von den rund 3.500 Gefangenen, die in Breendonk inhaftiert waren, überlebte weniger als die Hälfte den Krieg.",
        "Die Gedenkstätte wurde bereits 1947 auf Beschluss der belgischen Regierung eingerichtet.",
        "Das Fort ist fast vollständig im Originalzustand erhalten, was seine Wirkung als Mahnmal verstärkt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-gravensteen-ghent": {
    "descriptionAdvanced": {
      "de": "Die Burg Gravensteen, mitten im Zentrum von Gent gelegen, ist die einzige erhaltene mittelalterliche Wasserburg in Flandern mit einem fast vollständig intakten Verteidigungssystem. Im 12. Jahrhundert von Philipp von Elsass erbaut, diente sie den flämischen Grafen als Machtsymbol und Residenz. Die massiven Mauern, der tiefe Wassergraben und die beeindruckenden Zinnen vermitteln ein authentisches Bild ritterlicher Baukunst. Heute beherbergt die Burg ein Museum, das unter anderem eine berüchtigte Sammlung von Folterinstrumenten zeigt und die dunklen Seiten der mittelalterlichen Justiz beleuchtet. Der Rundgang über die Burgmauern bietet zudem einen der schönsten Panoramablicke über die Dächer von Gent.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Philipp von Elsass ließ die Burg nach dem Vorbild der Kreuzritterfestungen erbauen, die er im Heiligen Land gesehen hatte.",
        "Im 18. Jahrhundert war die Burg so verfallen, dass sie fast abgerissen und als Baumaterial verkauft worden wäre.",
        "Die Burg diente im Laufe der Jahrhunderte auch als Münzstätte, Gericht, Gefängnis und sogar als Textilfabrik.",
        "Der markante Bergfried (Donjon) ist das älteste Element der Anlage und stammt aus der Gründungszeit."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-basilica-halle": {
    "descriptionAdvanced": {
      "de": "Die St.-Martin-Basilika in Halle ist ein herausragendes Beispiel der Brabanter Gotik und einer der bedeutendsten Wallfahrtsorte Belgiens. Sie beherbergt die berühmte Statue der 'Schwarzen Madonna', die seit dem 13. Jahrhundert Pilger aus nah und fern anzieht. Die Architektur besticht durch ihre filigranen Steinmetzarbeiten und die beeindruckenden Glasmalereien, die biblische Geschichten erzählen. Im Inneren finden sich zahlreiche Kunstwerke, darunter kostbare Reliquiare und ein Taufbecken aus dem 15. Jahrhundert. Die Basilika ist nicht nur ein Ort des Glaubens, sondern auch ein lebendiges Denkmal der mittelalterlichen Frömmigkeit und Kunstfertigkeit im Herzen des belgischen Brabant.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die 'Schwarze Madonna' von Halle soll die Stadt während einer Belagerung im Jahr 1489 vor Kanonenkugeln gerettet haben.",
        "In der Basilika befindet sich eine Sammlung von 33 Kanonenkugeln, die an dieses Wunder erinnern sollen.",
        "Die Kirche wurde erst 1946 von Papst Pius XII. in den Rang einer Basilika minor erhoben.",
        "Der prachtvolle Altaraufsatz in der Taufkapelle gilt als ein Meisterwerk der Brabanter Bildhauerkunst."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "land-basilica-holy-blood-bruges": {
    "descriptionAdvanced": {
      "de": "Die Heilig-Blut-Basilika am Burg-Platz in Brügge ist ein einzigartiges architektonisches Ensemble, bestehend aus einer romanischen Unterkirche und einer prächtigen neugotischen Oberkirche. Sie beherbergt eine der bedeutendsten Reliquien Europas: eine Phiole, die das Blut Christi enthalten soll, das nach der Legende während der Kreuzzüge nach Brügge gebracht wurde. Die prächtige Treppe und die kunstvolle Fassade im Stil der Renaissance machen sie zu einem Highlight jedes Stadtrundgangs. In der Oberkirche schaffen farbenprächtige Wandmalereien und Buntglasfenster eine mystische Atmosphäre. Jedes Jahr ist die Basilika der Ausgangspunkt für die Heilig-Blut-Prozession, ein Ereignis von Weltrang.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Unterkirche St. Basilius ist die einzige romanische Kirche in Westflandern, die fast vollständig erhalten ist.",
        "Die Heilig-Blut-Reliquie wird täglich zu bestimmten Zeiten zur Verehrung durch die Gläubigen ausgestellt.",
        "Die Heilig-Blut-Prozession an Christi Himmelfahrt steht auf der UNESCO-Liste des immateriellen Kulturerbes der Menschheit.",
        "Der Reliquienschrein aus dem Jahr 1617 besteht aus Gold und Silber und ist mit über 100 Edelsteinen verziert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-abbey-villers-la-ville": {
    "descriptionAdvanced": {
      "de": "Die Ruinen der Abtei Villers-la-Ville gehören zu den beeindruckendsten Zeugnissen zisterziensischer Architektur in Europa. Gegründet im 12. Jahrhundert, erlebte die Abtei über Jahrhunderte eine Blütezeit, bevor sie während der Französischen Revolution verlassen wurde. Heute können Besucher durch die majestätischen Überreste der Kirche, des Kreuzgangs und der Gärten wandern. Die weitläufige Anlage bietet eine mystische Atmosphäre, die besonders bei kulturellen Veranstaltungen und Abendspaziergängen zur Geltung kommt. Neben den Ruinen laden auch ein Weinberg und ein Heilkräutergarten zur Erkundung ein. Es ist ein Ort, an dem Geschichte und Natur auf faszinierende Weise verschmelzen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Abtei wurde im Jahr 1146 auf Einladung von Bernhard von Clairvaux gegründet.",
        "In ihrer Blütezeit im 13. Jahrhundert beherbergte sie bis zu 100 Mönche und 300 Laienbrüder.",
        "Die Anlage umfasst Ruinen aus verschiedenen Epochen, von der Romanik bis zum Klassizismus.",
        "Die Abtei Villers ist heute Schauplatz zahlreicher Konzerte, Theateraufführungen und Ausstellungen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "forest-hallerbos": {
    "descriptionAdvanced": {
      "de": "Der Hallerbos, auch bekannt als der „Blaue Wald“, ist ein magisches Naturphänomen südlich von Brüssel. Jedes Jahr im April und Mai verwandelt sich der Waldboden in einen dichten Teppich aus Millionen von blau blühenden Hasenglöckchen. Dieses spektakuläre Farbenspiel zieht Fotografen und Naturfreunde aus der ganzen Welt an. Die hochgewachsenen Buchen des Waldes bilden ein hellgrünes Blätterdach, das einen wunderbaren Kontrast zum tiefen Blau am Boden bildet. Wanderwege führen Besucher behutsam durch dieses empfindliche Ökosystem, um die Blütenpracht zu schützen. Es ist ein Ort der Stille und der außergewöhnlichen natürlichen Schönheit.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Wald ist vor allem für seine Hasenglöckchen (Bluebells) weltberühmt, die Mitte April blühen.",
        "Der Hallerbos ist ein Überrest des historischen Kohlenwaldes (Silva Carbonaria), der einst weite Teile Belgiens bedeckte.",
        "Aufgrund der großen Beliebtheit gibt es während der Blütezeit spezielle Shuttlebusse für Besucher.",
        "Um die empfindlichen Blumen zu schützen, ist das Verlassen der markierten Wege strengstens untersagt."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "forest-sonian-forest": {
    "descriptionAdvanced": {
      "de": "Der Zoniënwoud, oder Sonienwald, ist die grüne Lunge Brüssels und erstreckt sich über drei belgische Regionen. Dieser riesige Buchenwald ist bekannt für seine „Buchenkathedralen“, bei denen die hohen, geraden Stämme ein beeindruckendes natürliches Gewölbe bilden. Seit 2017 gehört ein Teil des Waldes zum UNESCO-Weltnaturerbe, was seine ökologische Bedeutung unterstreicht. Er bietet unzählige Kilometer an Wander-, Rad- und Reitwegen für Erholungssuchende aus der Hauptstadt. Zahlreiche Seen und historische Stätten, wie das Kloster Rouge-Cloître, sind in das Waldgebiet eingebettet. Hier finden Besucher eine Oase der Ruhe direkt vor den Toren der Metropole.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Teile des Waldes wurden von der UNESCO als Teil der 'Alten Buchenwälder und Buchenurwälder der Karpaten und anderer Regionen Europas' anerkannt.",
        "Der Wald erstreckt sich über eine Fläche von rund 4.400 Hektar.",
        "Einige der Buchen im Wald sind über 200 Jahre alt.",
        "Der Wald beherbergt eine reiche Tierwelt, darunter Rehe, Füchse und seltene Fledermausarten."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "lake-lac-de-l-eau-d-heure": {
    "descriptionAdvanced": {
      "de": "Die Seen von Eau d'Heure bilden das größte künstliche Seengebiet Belgiens und sind ein Paradies für Wassersportler. Mit einer Uferlänge von rund 70 Kilometern bieten die fünf Seen vielfältige Möglichkeiten zum Segeln, Tauchen und Windsurfen. Besonders markant ist die gewaltige Staumauer von Plate Taille, die als einzige in Belgien besichtigt werden kann. Neben den Wasseraktivitäten laden weitläufige Wälder und Radwege zu Erkundungen an Land ein. Die Region hat sich zu einem bedeutenden Freizeitzentrum in Wallonien entwickelt, das auch moderne Unterkünfte und Ferienparks bietet. Hier findet man die perfekte Mischung aus technischem Meisterwerk und naturnaher Erholung.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Gebiet umfasst insgesamt fünf Seen, von denen der Lac de la Plate Taille der größte ist.",
        "Die Staumauer von Plate Taille ist die größte in Belgien und besitzt ein Wasserkraftwerk.",
        "Besucher können im Inneren der Staumauer eine geführte Tour machen und die Aussichtsplattform nutzen.",
        "Das gesamte Areal erstreckt sich über die Provinzen Hennegau und Namur."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "river-leie": {
    "descriptionAdvanced": {
      "de": "Die Leie, oft als der „goldene Fluss“ bezeichnet, schlängelt sich malerisch durch die flämische Landschaft. Ihr Name rührt von der historischen Flachindustrie her, die das Wasser im 19. Jahrhundert golden färbte. Heute ist der Fluss ein beliebtes Ziel für Bootsausflüge und Radtouren entlang seiner grünen Ufer. Besonders in Städten wie Gent prägt die Leie mit ihren historischen Kais das Stadtbild auf romantische Weise. Künstler ließen sich über Generationen von den sanften Kurven und dem besonderen Licht am Fluss inspirieren. Die Leie verbindet auf charmante Weise lebendige Stadtkultur mit ländlicher Idylle.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Name 'Goldene Leie' stammt vom Einweichen des Flachses im Flusswasser, was früher ein wichtiger Wirtschaftszweig war.",
        "Die Leie mündet in Gent in die Schelde.",
        "Die Region um Sint-Martens-Latem an der Leie ist berühmt für ihre Künstlerkolonien.",
        "Der Fluss dient heute hauptsächlich der Freizeitschifffahrt und dem Tourismus."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "river-dyle": {
    "descriptionAdvanced": {
      "de": "Die Dijle ist ein charaktervoller Fluss, der das Herz der Provinz Flämisch-Brabant durchfließt. Besonders in der Universitätsstadt Löwen prägt sie das Stadtbild, wo sie unter alten Brücken und entlang historischer Gebäude fließt. In Mechelen bietet ein schwimmender Steg, der Dijlepad, Besuchern die Möglichkeit, die Stadt direkt vom Wasser aus zu erkunden. Die Ufer der Dijle sind oft von Naturschutzgebieten und Feuchtwiesen gesäumt, die wichtige Lebensräume für Vögel bieten. Der Fluss verbindet auf natürliche Weise bedeutende historische Städte mit ruhigen Naturlandschaften. Für Paddler und Wanderer bietet die Dijle eine entspannte Perspektive auf die flämische Region.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "In Mechelen führt ein beliebter schwimmender Holzweg direkt auf dem Fluss durch die Altstadt.",
        "Die Dijle fließt durch das berühmte Naturschutzgebiet 'Het Broek' in Mechelen.",
        "Historisch gesehen war der Fluss ein wichtiger Transportweg für den Handel in Löwen.",
        "Die Dijle ist ein Nebenfluss der Rupel."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "island-ile-d-yvoir": {
    "descriptionAdvanced": {
      "de": "Die Île d'Yvoir ist ein charmantes Ausflugsziel in der Mitte der Maas, das nur mit einer kleinen Fähre erreichbar ist. Diese Insel bietet eine einzigartige Mischung aus Naturerlebnis und sommerlichem Freizeitvergnügen. Besucher finden hier Liegewiesen, Spielplätze und gastronomische Einrichtungen, was sie besonders für Familien attraktiv macht. Die ruhige Atmosphäre inmitten des Flusses lässt den Alltag schnell vergessen. Man kann hier Tretboot fahren, angeln oder einfach die Aussicht auf die bewaldeten Hänge des Maastals genießen. Die Île d'Yvoir ist ein Geheimtipp für alle, die Entspannung am Wasser in einem ungewöhnlichen Rahmen suchen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Es ist die einzige touristisch erschlossene Insel in Belgien, die ausschließlich der Freizeitgestaltung gewidmet ist.",
        "Die Überfahrt mit der Fähre dauert nur wenige Minuten und ist Teil des Erlebnisses.",
        "Die Insel ist während der Sommersaison von April bis September für Besucher geöffnet.",
        "Auf der Insel gibt es ein Restaurant mit Blick auf die Maas."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "agri-haspengouw-fruit-belt": {
    "descriptionAdvanced": {
      "de": "Haspengouw ist die größte Obstregion Belgiens und ein visuelles Highlight zu jeder Jahreszeit. Besonders im Frühjahr verwandelt sich die hügelige Landschaft in ein Meer aus weißen und rosa Blüten von Millionen Apfel-, Birnen- und Kirschbäumen. Im Herbst hingegen steht die Ernte im Mittelpunkt, wenn die Region ihre frischen Erzeugnisse auf Märkten präsentiert. Neben dem Obstanbau ist die Region für ihre historischen Schlösser und charmanten Kirchendörfer bekannt. Zahlreiche Rad- und Wanderwege führen durch die Plantagen und bieten Panoramablicke über die sanften Hügel. Haspengouw verbindet landwirtschaftliche Tradition mit erstklassiger Gastronomie und ländlichem Tourismus.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Haspengouw ist nach Südtirol die zweitgrößte Obstregion Europas.",
        "Die Stadt Sint-Truiden gilt als das pulsierende Herz dieser Obstbauregion.",
        "Die 'Blütenzeit' (Bloesemperiode) im April zieht jährlich Zehntausende Touristen an.",
        "Neben Äpfeln und Birnen werden hier auch zunehmend hochwertige Weine produziert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "agri-hageland-vineyards": {
    "descriptionAdvanced": {
      "de": "Das Hageland im Osten der Provinz Flämisch-Brabant ist ein verstecktes Juwel für Weinliebhaber. Die sanften Hügel aus eisenhaltigem Sandstein bieten ideale Bedingungen für den Weinbau, der hier eine lange Tradition hat. In den letzten Jahrzehnten hat die Region eine Renaissance erlebt und produziert heute preisgekrönte Weiß- und Schaumweine. Wanderer und Radfahrer können auf speziellen Weinrouten die verschiedenen Weingüter besuchen und lokale Tropfen verkosten. Die Landschaft ist geprägt von einer Mischung aus Weinreben, Hohlwegen und historischen Städtchen wie Aarschot. Das Hageland beweist eindrucksvoll, dass Belgien auch exzellente Weine hervorbringen kann. Es ist ein Ort für Genießer, die das ländliche Flandern abseits der Massen entdecken möchten.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Hagelander Wein war 1997 der erste Wein in Belgien, der eine kontrollierte Ursprungsbezeichnung (AOC) erhielt.",
        "Die charakteristischen Hügel bestehen aus eisenhaltigem Sandstein, der Wärme speichert.",
        "In der Region wachsen Rebsorten wie Müller-Thurgau, Chardonnay und Pinot Gris.",
        "Der 'Weingarten von Flandern' bietet zahlreiche Lehrpfade zum Thema Weinbau."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "agri-pajottenland-breweries": {
    "descriptionAdvanced": {
      "de": "Das Pajottenland südwestlich von Brüssel ist die Heimat einer der weltweit einzigartigsten Bierkulturen. In dieser sanft hügeligen Landschaft entstehen durch Spontangärung die berühmten Lambic-Biere, die als Grundlage für Gueuze und Kriek dienen. Die Region ist geprägt von historischen Brauereien und traditionellen „Geuzestekers“, die diese Kunst seit Generationen pflegen. Besucher können auf Bier-Routen die Braustätten erkunden und die säuerlich-erfrischenden Spezialitäten direkt vor Ort probieren. Die Landschaft selbst mit ihren Weiden und Pappelreihen erinnert an die Gemälde von Pieter Bruegel dem Älteren. Das Pajottenland ist ein Muss für jeden Bierkenner, der die Wurzeln der belgischen Brautradition erleben möchte. Hier schmeckt man die Natur und die Zeit in jedem Glas.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Lambic-Bier kann nur im Pajottenland und im Senne-Tal gebraut werden, da nur dort die benötigten Wildhefen in der Luft vorkommen.",
        "Gueuze wird oft als 'Champagner unter den Bieren' bezeichnet, da sie in Flaschen nachgärt.",
        "Die Region ist auch als 'Bruegel-Land' bekannt, da der Maler hier viele Motive fand.",
        "Zahlreiche Brauereien öffnen ihre Türen für Führungen und Verkostungen am Wochenende."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "kid-bobbejaanland": {
    "descriptionAdvanced": {
      "de": "Bobbejaanland in Lichtaart ist einer der traditionsreichsten Freizeitparks Belgiens und wurde vom Country-Sänger Bobbejaan Schoepen gegründet. Der Park zeichnet sich durch seine familiäre Atmosphäre und eine große Vielfalt an Attraktionen für alle Altersgruppen aus. Von rasanten Achterbahnen wie dem 'Fury' bis hin zu interaktiven Themenfahrten bietet der Park Abenteuer pur. Die Lage inmitten der grünen Kempen-Region sorgt für eine angenehme Umgebung zwischen den aufregenden Fahrten. Besonders beliebt sind die Wasserattraktionen, die an heißen Sommertagen für die nötige Abkühlung sorgen. Bobbejaanland schafft es geschickt, Nostalgie mit modernstem Freizeitspaß zu verbinden. Ein idealer Ort für einen unvergesslichen Familientag voller Lachen und Nervenkitzel.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der Park wurde 1961 eröffnet und war ursprünglich eine Kombination aus Showbühne und Freizeitpark.",
        "Die Achterbahn 'Fury' bietet Besuchern die Wahl, ob sie die Fahrt vorwärts oder rückwärts erleben möchten.",
        "Bobbejaanland beherbergt eine der größten Indoor-Attraktionen Belgiens, den 'Banana Battle'.",
        "Der Park liegt in einem malerischen Waldgebiet in der Nähe von Antwerpen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "kid-walibi-belgium": {
    "descriptionAdvanced": {
      "de": "Walibi Belgium in Wavre ist ein pulsierendes Zentrum für Adrenalinjunkies und Familien gleichermaßen. Als einer der größten Freizeitparks des Landes bietet er eine beeindruckende Auswahl an Weltklasse-Achterbahnen, darunter der gigantische 'Kondaa'. Der Park ist in verschiedene Themenbereiche unterteilt, die Besucher in ferne Welten entführen. Für kleinere Kinder gibt es speziell gestaltete Zonen mit sanfteren Fahrgeschäften und interaktiven Spielen. Direkt nebenan befindet sich der Aqualibi, ein großer Indoor-Wasserpark mit zahlreichen Rutschen und Wellenbecken. Die verkehrsgünstige Lage in der Nähe von Brüssel macht Walibi zu einem der meistbesuchten Ausflugsziele Belgiens. Hier ist ein Tag voller Energie und unvergesslicher Erlebnisse garantiert.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Achterbahn 'Kondaa' ist eine der höchsten und schnellsten Megacoaster in den Benelux-Ländern.",
        "Walibi erfand das Konzept der Kombi-Tickets für Freizeitpark und Wasserpark (Aqualibi).",
        "Der Name Walibi setzt sich aus den Anfangsbuchstaben der umliegenden Gemeinden Wavre, Limal und Bierges zusammen.",
        "Der Park ist bekannt für seine spektakulären Halloween-Events im Oktober."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "kid-pairi-daiza": {
    "descriptionAdvanced": {
      "de": "Pairi Daiza, auf dem Gelände einer ehemaligen Abtei gelegen, ist weit mehr als nur ein Zoo – es ist ein prachtvoller Garten der Welt. In verschiedenen „Welten“ werden Besucher durch authentische Architektur und Flora in Regionen wie China, Afrika oder Indonesien versetzt. Die Tiergehege sind so großzügig und naturnah gestaltet, dass man fast vergisst, in Belgien zu sein. Zu den absoluten Highlights gehören die seltenen Riesenpandas und die majestätischen Elefantenherden. Der Park legt großen Wert auf Artenschutz und Bildung, was ihn zu einem wertvollen Ziel für Familien macht. Die Liebe zum Detail in den Gärten und Tempeln macht Pairi Daiza zu einem ästhetischen Genuss. Es ist ein ort der Begegnung zwischen Mensch, Tier und den Kulturen dieser Erde.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Pairi Daiza wurde mehrfach zum besten Zoo Europas und der Benelux-Staaten gewählt.",
        "Der Park beherbergt eine der größten Riesenpanda-Familien außerhalb Chinas.",
        "Auf dem Gelände befinden sich die Ruinen der Zisterzienserabtei von Cambron aus dem 12. Jahrhundert.",
        "Besucher können in speziellen Lodges übernachten, mit direktem Blick in die Tiergehege."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "kid-bellewaerde": {
    "descriptionAdvanced": {
      "de": "Bellewaerde bei Ypern bietet eine einzigartige Kombination aus Freizeitpark und Tierpark in einer weitläufigen Parkanlage. Besucher können hier erstklassige Fahrgeschäfte genießen und im nächsten Moment seltene Tiere wie Amurtiger oder Giraffen bewundern. Die Mischung aus Naturerlebnis und Nervenkitzel macht den Park besonders attraktiv für Familien mit Kindern unterschiedlichen Alters. Viele Attraktionen sind geschickt in die bewaldete Landschaft integriert, was für eine entspannte Atmosphäre sorgt. Der angeschlossene Bellewaerde Aquapark bietet zudem ganzjährigen Wasserspaß mit Rutschen und Spielbereichen. Die Nähe zur historischen Stadt Ypern erlaubt es, Natur, Spaß und Geschichte miteinander zu verbinden. Bellewaerde ist ein ort, an dem Abenteuer und Entspannung Hand in Hand gehen.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Bellewaerde ist der älteste noch bestehende Freizeitpark in Belgien, gegründet 1954.",
        "Die Achterbahn 'Dawson Duel' ist die erste Duell-Alpin-Achterbahn in Europa.",
        "Der Park ist bekannt für seine erfolgreichen Zuchtprogramme für bedrohte Tierarten.",
        "Der Name Bellewaerde stammt von dem historischen Anwesen, auf dem der Park errichtet wurde."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-meuse-river": {
    "descriptionAdvanced": {
      "de": "Die Maas ist der prägende Fluss Walloniens und tief in der Geschichte und Wirtschaft Belgiens verwurzelt. Ihr Tal erstreckt sich von der französischen Grenze bis nach Flandern und bietet einige der dramatischsten Landschaften des Landes. Steile Kalksteinfelsen, auf denen stolze Zitadellen thronen, säumen ihren Lauf, besonders beeindruckend in Dinant und Namur. Der Fluss ist eine lebenswichtige Wasserstraße für den Handel, dient aber heute ebenso als Kulisse für Freizeitschifffahrt und Tourismus. Zahlreiche Schlösser und Klöster spiegeln sich in ihrem Wasser und erzählen von einer reichen Vergangenheit. Eine Reise entlang der Maas offenbart die perfekte Symbiose aus herber Naturkraft und kulturellem Erbe. Ob vom Boot aus oder auf den Uferwegen – die Maas fasziniert jeden Besucher.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Maas ist etwa 950 Kilometer lang und fließt durch Frankreich, Belgien und die Niederlande.",
        "Sie gilt als einer der ältesten Flüsse der Welt, dessen Lauf sich über Millionen von Jahren kaum verändert hat.",
        "In Belgien verbindet sie die großen wallonischen Industriezentren Lüttich und Namur.",
        "Die Felsen von Freÿr an der Maas sind das bedeutendste Klettergebiet Belgiens."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-ourthe": {
    "descriptionAdvanced": {
      "de": "Die Ourthe ist das pulsierende Herz der Ardennen und gilt als der schönste Nebenfluss der Maas. Sie schlängelt sich durch tiefe Täler, dichte Wälder und vorbei an schroffen Felsformationen, was sie zu einem Favoriten für Outdoor-Enthusiasten macht. Besonders die Region um La Roche-en-Ardenne bietet spektakuläre Ausblicke auf die Windungen des Flusses. Im Sommer ist die Ourthe ein Mekka für Kajakfahrer, die das klare Wasser und die abwechslungsreiche Landschaft genießen. Entlang ihrer Ufer finden sich malerische Dörfer und historische Ruinen, die zum Verweilen einladen. Das Tal der Ourthe ist ein Paradies für Wanderer und Mountainbiker, die die unberührte Natur suchen. Hier erlebt man die Ardennen in ihrer ursprünglichsten und lebendigsten Form.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Ourthe entsteht durch den Zusammenfluss der Östlichen und Westlichen Ourthe bei Houffalize.",
        "Die Talsperre von Nisramont staut den Fluss zu einem malerischen See auf, der ideal für Wanderungen ist.",
        "Durbuy, oft als kleinste Stadt der Welt bezeichnet, liegt direkt an den Ufern der Ourthe.",
        "Der Fluss ist bekannt für seinen Reichtum an Forellen und ein beliebtes Revier für Fliegenfischer."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "nat-semois-valley": {
    "descriptionAdvanced": {
      "de": "Das Tal der Semois im tiefen Süden Belgiens ist ein Ort von fast mystischer Ruhe und wilder Schönheit. Der Fluss bildet hier extreme Schleifen, sogenannte Mäander, die tief in das Schiefergestein der Ardennen eingeschüttet sind. Ein berühmtes Panorama bietet der „Tombeau du Géant“, wo die Semois einen fast perfekten Kreis um einen bewaldeten Hügel zieht. Die Region war früher ein Zentrum des Tabakanbaus, und die alten Trockenscheunen prägen noch heute das Gesicht vieler Dörfer. Für Wanderer bietet das Tal abenteuerliche Pfade, die oft über Leitern und schmale Grate zu atemberaubenden Aussichtspunkten führen. Die Semois ist im Sommer ein ruhiges Revier für Kanufahrer, die fernab von Lärm und Hektik die Natur genießen wollen. Es ist eine Landschaft, die zum Innehalten und Staunen einlädt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Panorama bei Rochehaut bietet einen der berühmtesten Ausblicke Belgiens auf die Semois-Schleife von Frahan.",
        "In Vresse-sur-Semois gibt es eine lange Tradition von Landschaftsmalern, die vom Licht des Tals angezogen wurden.",
        "Die Semois mündet kurz hinter der französischen Grenze bei Monthermé in die Maas.",
        "Die Region ist bekannt für ihre traditionellen Schieferhäuser, die typisch für die Architektur der Gegend sind."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-ypres": {
    "descriptionAdvanced": {
      "de": "Ypern, oder Ieper, ist eine Stadt, die auf einzigartige Weise Schmerz, Erinnerung und Widerstandskraft verkörpert. Während des Ersten Weltkriegs fast völlig dem Erdboden gleichgemacht, wurde die Stadt nach 1918 originalgetreu wiederaufgebaut. Das gewaltige Tuchhaus am Marktplatz beherbergt heute das „In Flanders Fields Museum“, das eindringlich über das Schichte der Soldaten und Zivilisten berichtet. Jeden Abend um 20 Uhr erklingt unter dem Menenpoort der „Last Post“, eine bewegende Zeremonie zu Ehren der gefallenen Commonwealth-Soldaten. Die umliegende Landschaft der „Flanders Fields“ ist übersät mit Friedhöfen und Denkmälern, die Mahnmale für den Frieden sind. Heute ist Ypern eine charmante, lebendige Stadt, die ihre Geschichte mit Stolz und Würde trägt. Es ist ein Ort, der jeden Besucher tief bewegt und zum Nachdenken anregt.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Menenpoort trägt die Namen von über 54.000 vermissten Soldaten, die kein bekanntes Grab haben.",
        "Das Tuchhaus (Lakenhalle) war im Mittelalter eines der größten kommerziellen Gebäude Europas.",
        "Alle drei Jahre findet in Ypern das kuriose 'Katzenfest' (Kattenstoet) mit einem großen Umzug statt.",
        "Der Wiederaufbau der Stadt wurde größtenteils durch deutsche Reparationszahlungen nach dem Ersten Weltkrieg finanziert."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "hist-bastogne": {
    "descriptionAdvanced": {
      "de": "Bastogne ist untrennbar mit der Ardennenoffensive im Winter 1944 verbunden, einer der entscheidendsten Schlachten des Zweiten Weltkriegs. Die Stadt wurde zum Symbol des amerikanischen Durchhaltewillens, als die 101. Luftlandedivision trotz Einkesselung und eisiger Kälte standhielt. Das monumentale Mardasson-Denkmal außerhalb der Stadt ehrt die gefallenen US-Soldaten und bietet einen weiten Blick über das ehemalige Schlachtfeld. Im angrenzenden Bastogne War Museum wird die Geschichte durch persönliche Berichte von Zeitzeugen auf emotionale Weise greifbar gemacht. In den umliegenden Wäldern, wie dem Bois Jacques, sind noch heute die Schützenlöcher der Soldaten im Boden sichtbar. Die Stadt selbst ist heute ein Ort der Versöhnung und ein bedeutendes Ziel für historisch interessierte Reisende. Bastogne lehrt uns den Wert von Freiheit und den Preis, der dafür bezahlt wurde.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Der US-General McAuliffe antwortete auf das deutsche Kapitulationsangebot legendär mit nur einem Wort: 'Nuts!'.",
        "Das Mardasson-Denkmal hat die Form eines fünfzackigen Sterns, des Symbols der US-Armee.",
        "In der Stadtmitte steht ein Sherman-Panzer als Denkmal auf der Place McAuliffe.",
        "Jedes Jahr im Dezember finden große Gedenkfeiern statt, an denen oft noch Veteranen teilnehmen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "sight-galeries-stroom": {
    "descriptionAdvanced": {
      "de": "Die Galeries Royales Saint-Hubert in Brüssel sind eine der elegantesten und ältesten überdachten Einkaufspassagen Europas. Eröffnet im Jahr 1847, besticht der neorenaissance Bau durch seine filigrane Glas-Metall-Konstruktion, die das Tageslicht sanft in das Innere fließen lässt. Die Passage unterteilt sich in die Galerie des Königs, die Galerie der Königin und die Galerie des Prinzen. Hier finden Besucher luxuriöse Boutiquen, traditionsreiche Buchläden und einige der renommiertesten Chocolatiers des Landes. Das prächtige Ambiente lädt zum Flanieren ein und bietet Schutz vor dem wechselhaften Brüsseler Wetter. Ein Besuch in einem der klassischen Cafés unter dem hohen Glasdach gehört zum Pflichtprogramm jeder Städtereise. Die Galerien sind ein zeitloses Symbol für den bürgerlichen Wohlstand und den architektonischen Glanz des 19. Jahrhunderts.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Die Passagen waren bei ihrer Eröffnung die längsten und prächtigsten ihrer Art in ganz Europa.",
        "Der Chocolatier Neuhaus erfand hier in seinem Laden im Jahr 1912 die belgische Praline.",
        "Die Galerien wurden vom Architekten Jean-Pierre Cluysenaar entworfen.",
        "In der Galerie de la Reine befindet sich das berühmte Theater 'Théâtre Royal des Galeries'."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "sight-spa": {
    "factsAdvanced": {
      "de": [
        "Seit 2021 gehört Spa als eine der 'Great Spa Towns of Europe' zum UNESCO-Weltkulturerbe.",
        "Das Casino von Spa, eröffnet 1763, gilt als das älteste moderne Casino der Welt.",
        "Das Mineralwasser der Marke 'Spa' wird direkt in der Region abgefüllt und weltweit exportiert.",
        "Zahlreiche gekrönte Häupter, darunter Zar Peter der Große, suchten hier Heilung in den Quellen."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "sight-chocolate-museum-bruges": {
    "descriptionAdvanced": {
      "de": "Choco-Story in Brügge ist ein faszinierendes Museum, das die über 4.000-jährige Geschichte des Kakaos auf unterhaltsweise Weise erzählt. In einem historischen Backsteingebäude aus dem 15. Jahrhundert erfahren Besucher alles von den rituellen Getränken der Mayas bis zur modernen Pralinenkunst. Die Ausstellung zeigt antike Kannen, seltene Maschinen und erklärt den Prozess von der Bohne bis zur Tafel. Ein Highlight ist die Live-Vorführung, bei der ein Chocolatier die Kunst der handgemachten Pralinen demonstriert – Kostprobe inklusive. Das Museum räumt auch mit Mythen über Schokolade auf und beleuchtet ihre gesundheitlichen Aspekte. Für Familien gibt es eine interaktive Suche, die den Besuch auch für Kinder spannend macht. Choco-Story ist ein Muss für jeden Genießer, der die Geheimnisse hinter Belgiens süßestem Exportgut entdecken möchte.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Das Museum beherbergt eine Sammlung von über 1.000 historischen Objekten rund um die Schokolade.",
        "Besucher können am Ende des Rundgangs frisch hergestellte belgische Pralinen probieren.",
        "Choco-Story legt großen Wert auf Informationen über fairen Handel und nachhaltigen Kakaoanbau.",
        "Das Gebäude 'Huis de Croon' war im Mittelalter eine bekannte Weinschenke."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-antwerp": {
    "descriptionAdvanced": {
      "de": "Antwerpen, die schillernde Metropole an der Schelde, ist ein faszinierender Schmelztiegel aus Geschichte, Kunst und moderner Lebensart. Weltberühmt als Zentrum des Diamantenhandels und zweitgrößter Hafen Europas, besticht die Stadt auch durch ihre reiche Kunstgeschichte als Heimat von Peter Paul Rubens. Die Grote Markt mit ihren prachtvollen Zunfthäusern und die imposante Liebfrauenkathedrale bilden das historische Herz der Stadt. Doch Antwerpen ist auch ein Mekka für Modebegeisterte, geprägt von den „Antwerp Six“ und einer lebendigen Designer-Szene. Der Hauptbahnhof, oft als „Eisenbahnkathedrale“ bezeichnet, gilt als einer der schönsten Bahnhöfe weltweit. In den Gassen der Altstadt finden Besucher exzellente Gastronomie und urige belgische Kneipen. Antwerpen ist eine Stadt, die Tradition und Avantgarde auf unvergleichliche Weise vereint.",
      "hu": "", "ro": "", "en": ""
    },
    "factsAdvanced": {
      "de": [
        "Etwa 80% aller Rohdiamanten weltweit werden mindestens einmal in Antwerpen gehandelt.",
        "Das Museum Plantin-Moretus ist die einzige Druckerei weltweit, die zum UNESCO-Welterbe gehört.",
        "Die Liebfrauenkathedrale beherbergt mehrere Meisterwerke von Rubens, darunter die 'Kreuzaufrichtung'.",
        "Antwerpen war im Jahr 1920 Austragungsort der Olympischen Sommerspiele."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-bruges": {
    "factsAdvanced": {
      "de": [
        "Der Belfried von Brügge ist 83 Meter hoch und beherbergt ein Carillon mit 47 Glocken.",
        "In der Liebfrauenkirche befindet sich die 'Madonna mit Kind' von Michelangelo, sein einziges Werk außerhalb Italiens.",
        "Brügge besitzt eine unterirdische Bierpipeline, die eine Brauerei in der Stadt mit einer Abfüllanlage verbindet.",
        "Die Stadt war im 15. Jahrhundert eines der wichtigsten Handels- und Finanzzentren Europas."
      ],
      "hu": [], "ro": [], "en": []
    }
  },
  "city-namur": {
    "factsAdvanced": {
      "de": [
        "Die Zitadelle von Namur verfügt über ein unterirdisches Tunnelnetz von über sieben Kilometern Länge.",
        "Die Schnecke ist das inoffizielle Maskottchen der Stadt und steht für die wallonische Lebensart.",
        "Das Gebäude 'Halle al'Chair' an der Sambre ist ein hervorragendes Beispiel für die mosane Renaissance-Architektur.",
        "Namur ist der Sitz des wallonischen Parlaments, das in einem historischen Krankenhausgebäude am Fuße der Zitadelle tagt."
      ],
      "hu": [], "ro": [], "en": []
    }
  }
}

def update_file(file_path, data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into POI objects
    pois = re.split(r'(?<=},)\s*(?={)', content)
    
    new_pois = []
    for poi_str in pois:
        match = re.search(r'id:\s*"([^"]+)"', poi_str)
        if match:
            poi_id = match.group(1)
            if poi_id in data:
                # Add/Update descriptionAdvanced
                if "descriptionAdvanced" in data[poi_id]:
                    desc_data = data[poi_id]["descriptionAdvanced"]
                    desc_str = f'descriptionAdvanced: {{\n      de: "{desc_data["de"]}",\n      hu: "",\n      ro: "",\n      en: ""\n    }},'
                    if "descriptionAdvanced:" in poi_str:
                        # Only update if DE is empty (as per instructions)
                        if 'de: ""' in poi_str or "de: ''" in poi_str:
                             poi_str = re.sub(r'descriptionAdvanced:\s*{[^}]+},', desc_str, poi_str)
                    else:
                        # Insert before facts or image
                        if "facts:" in poi_str:
                             poi_str = poi_str.replace("facts:", f"{desc_str}\n    facts:")
                        elif "image:" in poi_str:
                             poi_str = poi_str.replace("image:", f"{desc_str}\n    image:")
                
                # Add factsAdvanced
                if "factsAdvanced" in data[poi_id]:
                    facts_data = data[poi_id]["factsAdvanced"]
                    facts_list_str = ",\n        ".join([f'"{f}"' for f in facts_data["de"]])
                    facts_str = f'factsAdvanced: {{\n      de: [\n        {facts_list_str}\n      ],\n      hu: [],\n      ro: [],\n      en: []\n    }},'
                    if "factsAdvanced:" in poi_str:
                         # Overwrite logic (though instructed not to if non-empty, here we assume it's empty or missing)
                         pass 
                    else:
                        # Insert before image
                        if "image:" in poi_str:
                             poi_str = poi_str.replace("image:", f"{facts_str}\n    image:")

        new_pois.append(poi_str)

    new_content = "".join(new_pois) # This join logic might be tricky due to split
    # Better approach: sequential replacement in original content
    
    final_content = content
    for poi_id, updates in data.items():
        # Find the block for this POI
        pattern = r'id:\s*"' + poi_id + r'".*?image:'
        match = re.search(pattern, final_content, re.DOTALL)
        if match:
            block = match.group(0)
            new_block = block
            
            if "descriptionAdvanced" in updates:
                desc = updates["descriptionAdvanced"]
                if "descriptionAdvanced:" not in block:
                    ins = f'descriptionAdvanced: {{\n      de: "{desc["de"]}",\n      hu: "",\n      ro: "",\n      en: ""\n    }},\n    '
                    new_block = new_block.replace("facts:", ins + "facts:")
                else:
                    # check if de is empty
                    if 'de: ""' in block or "de: ''" in block:
                        new_block = re.sub(r'de:\s*["\']["\'](?=\s*,?\s*hu:)', f'de: "{desc["de"]}"', new_block)

            if "factsAdvanced" in updates:
                facts = updates["factsAdvanced"]
                if "factsAdvanced:" not in block:
                    facts_list = ",\n        ".join([f'"{f}"' for f in facts["de"]])
                    ins = f'factsAdvanced: {{\n      de: [\n        {facts_list}\n      ],\n      hu: [],\n      ro: [],\n      en: []\n    }},\n    '
                    new_block = new_block.replace("image:", ins + "image:")
            
            final_content = final_content.replace(block, new_block)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)

if __name__ == "__main__":
    update_file('lib/visualLab/data/belgiumPoi.ts', poi_data)
