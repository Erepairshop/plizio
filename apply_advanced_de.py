import re
import json

seo_data = {
    "NL": {
        "desc": "Die Niederlande sind berühmt für ihre weite flache Landschaft, die von Grachten und Windmühlen geprägt ist. Ein großer Teil des Landes wurde durch ausgeklügelte Deichsysteme dem Meer abgerungen. Das Land spielt eine Vorreiterrolle im internationalen Handel und in der nachhaltigen Stadtentwicklung. Geografie K7: Wie viel Prozent der Niederlande liegen unter dem Meeresspiegel?",
        "facts": ["Etwa 26% der Landfläche liegen unter dem Meeresspiegel.", "Amsterdam ist die Hauptstadt, aber Den Haag der Regierungssitz.", "Die Deltawerke gelten als eines der größten Hochwasserschutzsysteme der Welt.", "Es gibt mehr Fahrräder als Einwohner in den Niederlanden."]
    },
    "NL-DR": {
        "desc": "Drenthe ist eine wald- und heidereiche Provinz im Nordosten der Niederlande, die für ihre prähistorischen Hünengräber bekannt ist. Die unberührte Natur zieht viele Radfahrer und Wanderer an, die die ländliche Ruhe schätzen. Es ist die am dünnsten besiedelte Provinz des Landes. Geschichte K6: Wie alt sind die Hünengräber in Drenthe ungefähr?",
        "facts": ["Drenthe beherbergt 52 der 54 niederländischen Hünengräber.", "Assen ist die Hauptstadt der Provinz Drenthe.", "Die Provinz ist ein beliebtes Ziel für Radtouristen mit einem ausgedehnten Wegenetz."]
    },
    "NL-FL": {
        "desc": "Flevoland ist die jüngste Provinz der Niederlande und entstand größtenteils im 20. Jahrhundert durch Landgewinnung aus dem IJsselmeer. Diese künstliche Landmasse ist ein Meisterwerk der Ingenieurskunst und zeugt vom ständigen Kampf gegen das Wasser. Die modernen Städte wie Almere wachsen rasant und bieten zukunftsweisende Architektur. Geografie K8: Welches Meer befand sich früher an der Stelle von Flevoland?",
        "facts": ["Flevoland wurde am 1. Januar 1986 offiziell als Provinz gegründet.", "Almere ist die größte Stadt, Lelystad die Hauptstadt der Provinz.", "Die Provinz liegt durchschnittlich 5 Meter unter dem Meeresspiegel."]
    },
    "NL-FR": {
        "desc": "Friesland liegt im Norden des Landes und verfügt über eine eigene offizielle Sprache, das Friesische. Die Provinz ist von unzähligen Seen und Wasserwegen durchzogen und besonders im Sommer ein Paradies für Wassersportler. Die berühmte Elfstedentocht, ein Eisschnelllauf-Marathon, hat hier ihre historische Heimat. Sozialkunde K7: Warum wird in Friesland eine eigene Sprache gesprochen?",
        "facts": ["Friesisch ist neben Niederländisch offizielle Verwaltungssprache in der Provinz.", "Die Provinz umfasst auch mehrere der Westfriesischen Inseln.", "Die Elfstedentocht ist ein 200 Kilometer langes Eislaufrennen über zugefrorene Kanäle."]
    },
    "NL-GE": {
        "desc": "Gelderland ist die flächenmäßig größte Provinz der Niederlande und besticht durch die abwechslungsreiche Landschaft der Veluwe. Hier wechseln sich dichte Wälder, weitläufige Heideflächen und große Flusslandschaften entlang von Rhein und Waal ab. Zahlreiche Schlösser und historische Landgüter zeugen von einer reichen Vergangenheit. Biologie K6: Welche großen Säugetiere leben im Nationalpark Hoge Veluwe?",
        "facts": ["Arnheim ist die Hauptstadt von Gelderland.", "Der Nationalpark De Hoge Veluwe ist einer der bekanntesten der Niederlande.", "Die Provinz ist ein bedeutendes Zentrum für Landwirtschaft und Obstanbau."]
    },
    "NL-GR": {
        "desc": "Groningen im Nordosten der Niederlande verbindet eine lebendige Studentenstadt mit weiten, landwirtschaftlich geprägten Ommelanden. Die Region war lange Zeit durch die Erdgasförderung von wirtschaftlicher Bedeutung, befindet sich aber nun in einem großen Wandel hin zu erneuerbaren Energien. Die historische Martinitoren überragt das alte Zentrum der Provinzhauptstadt. Geografie K8: Welche Auswirkungen hatte die Erdgasförderung in Groningen auf die Region?",
        "facts": ["Das Groninger Erdgasfeld gehörte zu den größten in ganz Europa.", "Die Rijksuniversiteit Groningen wurde bereits im Jahr 1614 gegründet.", "Der Martiniturm ist das Wahrzeichen der Stadt und 97 Meter hoch."]
    },
    "NL-LI": {
        "desc": "Limburg, im äußersten Süden gelegen, unterscheidet sich durch seine hügelige Landschaft deutlich vom restlichen Land. Die Region ist stark von der Nähe zu Belgien und Deutschland geprägt und strahlt ein beinahe burgundisches Flair aus. Maastricht, die Hauptstadt, zählt zu den ältesten Städten der Niederlande. Geschichte K8: Welcher wichtige europäische Vertrag wurde in Maastricht unterzeichnet?",
        "facts": ["Der Vaalserberg ist mit 322 Metern der höchste natürliche Punkt der europäischen Niederlande.", "Limburg hat eine reiche Bergbauvergangenheit, insbesondere beim Steinkohleabbau.", "Der Vertrag von Maastricht (1992) ist ein Meilenstein in der EU-Geschichte."]
    },
    "NL-NB": {
        "desc": "Nordbrabant ist eine Provinz im Süden, die für ihre herzliche Gastfreundschaft und ihre innovativen Technologieunternehmen, insbesondere in Eindhoven, bekannt ist. Historische Städte wie 's-Hertogenbosch und Breda zeugen von der langen kulturellen Tradition der Region. Die Provinz feiert ausgiebig Karneval und ist reich an Naturgebieten. Sozialkunde K7: Warum gilt Eindhoven als das technologische Zentrum der Niederlande?",
        "facts": ["Philips wurde in Eindhoven in Nordbrabant gegründet.", "Die Provinz ist eine Hochburg für Design und Hightech-Industrie.", "Der Karneval wird hier traditionell sehr intensiv gefeiert."]
    },
    "NL-NH": {
        "desc": "Nordholland umfasst nicht nur die Weltmetropole Amsterdam, sondern auch weitläufige Küstengebiete und historische Fischerdörfer wie Volendam. Die Halbinsel ist ein Zentrum für Handel, Tourismus und Kultur. Das Wattenmeer im Norden und das ausgedehnte Dünengebiet entlang der Küste sind ökologisch sehr wertvoll. Geografie K6: Wie schützt Nordholland seine Küstenlinie vor Sturmfluten?",
        "facts": ["Amsterdam ist die größte Stadt, aber Haarlem ist die Provinzhauptstadt.", "Der Flughafen Schiphol gehört zu den wichtigsten Luftfahrt-Drehkreuzen Europas.", "Die Insel Texel ist die größte der niederländischen Watteninseln."]
    },
    "NL-OV": {
        "desc": "Overijssel erstreckt sich vom Fluss IJssel im Westen bis zur deutschen Grenze im Osten. Die Provinz ist von sanften Hügeln, Flusslandschaften und dem weiten Torfmoorgebiet De Weerribben geprägt. Historische Hansestädte wie Zwolle und Kampen verdeutlichen den einstigen Reichtum durch den Flusshandel. Geschichte K7: Was war die Hanse und warum war sie für Overijssel so wichtig?",
        "facts": ["Zwolle ist die Hauptstadt der Provinz Overijssel.", "Giethoorn, das 'Venedig des Nordens', liegt in dieser Provinz.", "Der Handel über die IJssel brachte den Hansestädten großen Wohlstand."]
    },
    "NL-UT": {
        "desc": "Utrecht ist die kleinste Provinz der Niederlande, aber eine der am dichtesten besiedelten und wirtschaftlich wichtigsten. Die zentrale Lage macht sie zum Verkehrsknotenpunkt des ganzen Landes. Wälder auf dem Utrechtse Heuvelrug und majestätische Schlösser stehen im Kontrast zu den modernen städtischen Zentren. Geografie K7: Warum laufen fast alle wichtigen Zugstrecken der Niederlande über Utrecht?",
        "facts": ["Der Hauptbahnhof Utrecht Centraal ist der verkehrsreichste der Niederlande.", "Der Dom von Utrecht hat den höchsten Kirchturm des Landes.", "Die Universität Utrecht ist eine der ältesten und größten im Land."]
    },
    "NL-ZE": {
        "desc": "Zeeland besteht aus einer Reihe von Halbinseln und Inseln im Südwesten der Niederlande und ist eng mit dem Meer verbunden. Die Provinz war Schauplatz der verheerenden Flutkatastrophe von 1953, die zum Bau der gigantischen Deltawerke führte. Heute ist Zeeland ein ruhiges Erholungsgebiet mit wunderschönen Sandstränden. Geschichte K8: Welche baulichen Maßnahmen folgten auf die Flutkatastrophe von 1953?",
        "facts": ["Middelburg ist die historische Hauptstadt von Zeeland.", "Die Deltawerke gelten als modernes Weltwunder der Wasserbaukunst.", "Ein Großteil von Zeeland liegt unter dem Meeresspiegel."]
    },
    "NL-ZH": {
        "desc": "Südholland ist die bevölkerungsreichste Provinz und das pulsierende Herz der niederländischen Wirtschaft. Hier befinden sich der Rotterdamer Hafen, das politische Zentrum Den Haag und unzählige Gewächshäuser, die die Agrarindustrie stützen. Trotz der dichten Bebauung gibt es auch Naturoasen wie die Mühlen von Kinderdijk. Wirtschaft K8: Warum ist der Hafen von Rotterdam für die gesamte europäische Wirtschaft von entscheidender Bedeutung?",
        "facts": ["Der Hafen von Rotterdam ist der größte Seehafen Europas.", "Den Haag ist der Sitz des Internationalen Gerichtshofs.", "Die Region 'Westland' ist berühmt für ihren intensiven Gewächshausanbau."]
    },
    "NL-CT-AMS": {
        "desc": "Amsterdam, die Hauptstadt der Niederlande, ist weltberühmt für ihr historisches Grachtensystem aus dem Goldenen Zeitalter. Die Stadt verbindet jahrhundertealte Architektur mit einer äußerst modernen, weltoffenen und fahrradfreundlichen Lebensart. Museen wie das Rijksmuseum ziehen Millionen von Kunstliebhabern an. Geschichte K7: In welchem Jahrhundert erlebte Amsterdam sein 'Goldenes Zeitalter'?",
        "facts": ["Das Grachtensystem von Amsterdam steht auf der UNESCO-Welterbeliste.", "Es gibt über 1.200 Brücken und etwa 165 Grachten in der Stadt.", "Amsterdam wurde auf Millionen von Holzpfählen im weichen Boden erbaut."]
    },
    "NL-CT-ROT": {
        "desc": "Rotterdam wurde im Zweiten Weltkrieg fast vollständig zerstört und hat sich seitdem als Stadt der modernen und experimentellen Architektur neu erfunden. Die Skyline wird von markanten Wolkenkratzern und der beeindruckenden Erasmusbrücke dominiert. Der gewaltige Hafen macht die Stadt zu einem der wichtigsten Handelszentren weltweit. Architektur K8: Wie spiegelt sich der Wiederaufbau Rotterdams in seiner heutigen Skyline wider?",
        "facts": ["Der Rotterdamer Hafen erstreckt sich über fast 40 Kilometer.", "Die Kubushäuser von Piet Blom sind eine berühmte architektonische Sehenswürdigkeit.", "Rotterdam ist bekannt als die Architektur-Hauptstadt der Niederlande."]
    },
    "NL-CT-HAA": {
        "desc": "Den Haag ist das politische Zentrum der Niederlande und beherbergt den Königspalast sowie die Regierung. Die Stadt hat einen eleganten Charakter mit breiten Alleen und grenzt direkt an den Nordseestrand im Stadtteil Scheveningen. Als 'Stadt des Friedens und der Gerechtigkeit' hat sie immense internationale Bedeutung. Sozialkunde K8: Welche internationalen Gerichte haben ihren Sitz in Den Haag?",
        "facts": ["Den Haag ist der Regierungssitz der Niederlande, aber nicht die Hauptstadt.", "Das Mauritshuis in Den Haag beherbergt Vermeers 'Mädchen mit dem Perlenohrgehänge'.", "Der Friedenspalast ist das wohl bekannteste Gebäude der Stadt."]
    },
    "NL-CT-UTR": {
        "desc": "Utrecht bietet ein charmantes historisches Zentrum, dessen einzigartige Grachten tiefer liegen und alte Werftkeller aufweisen. Als geografischer Mittelpunkt des Landes pulsiert die Stadt durch eine sehr große und aktive Studentengemeinschaft. Der mächtige Domturm ist das allgegenwärtige Wahrzeichen, das über der Stadt thront. Geschichte K6: Warum ist der Domturm von der eigentlichen Domkirche getrennt?",
        "facts": ["Ein schwerer Tornado zerstörte 1674 das Kirchenschiff, wodurch der Turm abgetrennt wurde.", "Utrecht wurde ursprünglich von den Römern als Festung (Traiectum) gegründet.", "Die Stadt besitzt ein zweistöckiges Grachtensystem mit Werftkellern auf Wasserniveau."]
    },
    "NL-CT-EIN": {
        "desc": "Eindhoven im Süden der Niederlande ist das Epizentrum für Innovation, Technologie und Design. Ursprünglich wuchs die Stadt mit dem Aufstieg des Elektronikkonzerns Philips und ist heute eine Brutstätte für High-Tech-Start-ups. Die Dutch Design Week lockt jährlich kreative Köpfe aus aller Welt an. Wirtschaft K7: Welches Unternehmen trug maßgeblich zum Wachstum von Eindhoven bei?",
        "facts": ["Eindhoven wird oft als die 'Lichtstadt' (Lichtstad) der Niederlande bezeichnet.", "Der High Tech Campus in Eindhoven gilt als einer der intelligentesten Quadratkilometer der Welt.", "Die Stadt beheimatet den erfolgreichen Fußballverein PSV Eindhoven."]
    },
    "NL-CT-GRO": {
        "desc": "Groningen ist die Metropole des Nordens und zeichnet sich durch ein jugendliches, dynamisches Flair aus, das durch die renommierte Universität geprägt wird. Die Altstadt bietet eine spannende Mischung aus historischen Bauten und dem markanten, modernen Groninger Museum. Fahrradfahrer dominieren das Stadtbild noch stärker als in vielen anderen niederländischen Städten. Geografie K7: Warum spielt das Fahrrad in Städten wie Groningen eine so zentrale Rolle?",
        "facts": ["Groningen hat einen der höchsten Bevölkerungsanteile an Studenten in den Niederlanden.", "Das Groninger Museum ist berühmt für seine postmoderne Architektur.", "Die Stadt hat sehr früh weitreichende Maßnahmen zur Verkehrsberuhigung eingeführt."]
    },
    "NL-CT-TIL": {
        "desc": "Tilburg, einst eine florierende Textil- und Industriestadt, hat sich erfolgreich in ein modernes kulturelles Zentrum verwandelt. Alte Fabrikhallen wurden zu kreativen Räumen wie der LocHal, einer preisgekrönten modernen Bibliothek. Die Stadt hat eine lebendige Kunstszene und ist bekannt für ihre großen Kirmesfeiern. Geschichte K6: Welche Industrie dominierte früher die Wirtschaft in Tilburg?",
        "facts": ["Tilburg beherbergt eine der größten Kirmesveranstaltungen in den gesamten Benelux-Ländern.", "Die Spoorzone in Tilburg ist ein bekanntes Beispiel für gelungene urbane Transformation.", "Die Universität Tilburg genießt ein hohes akademisches Ansehen."]
    },
    "NL-CT-NIJ": {
        "desc": "Nijmegen erhebt den Anspruch, die älteste Stadt der Niederlande zu sein und blickt auf eine reiche römische Vergangenheit zurück. Gelegen an der Waal, umgeben von Hügeln, versprüht die Stadt eine entspannte, historische Atmosphäre. Das alljährliche Vierdaagse, ein riesiges internationales Wanderevent, zieht hunderttausende Teilnehmer und Besucher an. Geschichte K7: Wann wurde Nijmegen von den Römern gegründet?",
        "facts": ["Nijmegen feierte 2005 sein 2000-jähriges Bestehen.", "Die Nimwegen-Märsche (Vierdaagse) sind die größte mehrtägige Wanderveranstaltung der Welt.", "Die Stadt lag strategisch wichtig am Limes, der Grenze des Römischen Reiches."]
    },
    "NL-CT-HAR": {
        "desc": "Haarlem, oft als kleine Schwester von Amsterdam bezeichnet, verzaubert mit kopfsteingepflasterten Straßen und ruhigen Höfen (Hofjes). Die Grote Kerk dominiert den zentralen Marktplatz, der zu den schönsten des Landes zählt. Im Goldenen Zeitalter erlebte die Stadt durch Textilhandel und Bierbrauerei einen großen wirtschaftlichen Aufschwung. Kunst K8: Welche Rolle spielte Haarlem in der Malerei des Goldenen Zeitalters?",
        "facts": ["Frans Hals, ein berühmter Maler, wirkte hauptsächlich in Haarlem.", "Haarlem wird als die Blumenhauptstadt der Niederlande bezeichnet.", "In der Stadt befindet sich das Teylers Museum für Kunst, Naturgeschichte und Wissenschaft."]
    },
    "NL-CT-LEI": {
        "desc": "Leiden ist die Stadt der ersten Universität der Niederlande und strotzt vor historischer Gelehrsamkeit. Die malerischen Grachten und historischen Universitätsgebäude verleihen Leiden einen einzigartigen, akademischen Charakter. Es ist auch die Geburtsstadt des berühmten Meisters Rembrandt van Rijn. Geschichte K8: Warum wurde Leiden die erste niederländische Universität gestiftet?",
        "facts": ["Die Universität Leiden wurde 1575 von Wilhelm von Oranien gegründet.", "Die Stadt hat nach Amsterdam die meisten Grachten in den Niederlanden.", "Leiden widerstand 1574 einer schweren spanischen Belagerung im Achtzigjährigen Krieg."]
    },
    "NL-CT-DEL": {
        "desc": "Delft ist weltweit bekannt für sein ikonisches blau-weißes Porzellan, das Delfter Blau. Die charmante Stadt mit ihren engen Grachten und alten Kirchen ist stark mit dem niederländischen Königshaus der Oranier verbunden. Zudem beherbergt Delft eine sehr renommierte Technische Universität, die die Stadt zum Innovationsstandort macht. Geschichte K6: Welcher bedeutende niederländische Führer wurde in Delft begraben?",
        "facts": ["Wilhelm von Oranien, der 'Vater des Vaterlandes', wurde 1584 in Delft ermordet.", "Die Königliche Porzellanmanufaktur stellt bis heute das Delfter Blau her.", "Der Maler Johannes Vermeer verbrachte sein ganzes Leben in Delft."]
    },
    "NL-CT-MAA": {
        "desc": "Maastricht liegt tief im Süden und besticht durch ein ganz eigenes, fast südeuropäisches Ambiente. Römische Ruinen, mittelalterliche Basiliken und alte Stadtmauern zeugen von einer sehr langen Besiedlungsgeschichte. Der Vrijthof ist der pulsierende zentrale Platz, auf dem regelmäßig große Kulturveranstaltungen stattfinden. Geschichte K8: Durch welches römische Bauwerk erlangte Maastricht seine frühe Bedeutung?",
        "facts": ["Maastricht war eine römische Siedlung, die an einem wichtigen Flussübergang (Mosa Trajectum) der Maas lag.", "In den Mergelgrotten rund um die Stadt wurden historische Kunstwerke im Zweiten Weltkrieg versteckt.", "Die Stadt gilt als eines der wichtigsten kulinarischen Zentren der Niederlande."]
    },
    "NL-LM-AFH": {
        "desc": "Das Anne Frank Haus ist das Versteck, in dem die jüdische Familie Frank während des Zweiten Weltkriegs Zuflucht vor den Nationalsozialisten suchte. Hier schrieb Anne Frank ihr weltberühmtes Tagebuch, das die Hoffnungen und Ängste eines jungen Mädchens im Verborgenen schildert. Das Gebäude ist heute ein eindrucksvolles Museum gegen Antisemitismus und Diskriminierung. Geschichte K8: Wie lange lebte Anne Frank im Hinterhaus versteckt?",
        "facts": ["Das Versteck befand sich im Hinterhaus der Prinsengracht 263 in Amsterdam.", "Das Tagebuch der Anne Frank wurde in mehr als 70 Sprachen übersetzt.", "Das Museum verzeichnet jedes Jahr weit über eine Million Besucher."]
    },
    "NL-LM-RJM": {
        "desc": "Das Rijksmuseum in Amsterdam ist das Nationalmuseum der Niederlande und widmet sich der Kunst, dem Handwerk und der Geschichte. Es beherbergt eine unschätzbar wertvolle Sammlung, darunter Meisterwerke von Rembrandt, Vermeer und Hals. Das prachtvolle Gebäude im Stil der Neorenaissance ist selbst ein architektonisches Kunstwerk. Kunst K7: Welches berühmte Gemälde von Rembrandt ist das Herzstück des Rijksmuseums?",
        "facts": ["Das Meisterwerk 'Die Nachtwache' von Rembrandt wird hier in einem eigenen Saal ausgestellt.", "Die Sammlung des Museums umfasst rund 1 Million Objekte vom Mittelalter bis ins 20. Jahrhundert.", "Das Museumsgebäude wurde vom Architekten Pierre Cuypers entworfen."]
    },
    "NL-LM-VGM": {
        "desc": "Das Van Gogh Museum in Amsterdam widmet sich fast ausschließlich dem Leben und Werk von Vincent van Gogh und seinen Zeitgenossen. Es bietet einen intimen Einblick in die Entwicklung dieses post-impressionistischen Genies. Das Museum ist eine der meistbesuchten Kunstgalerien der Welt und zeigt die emotionale Tiefe von van Goghs Pinselstrichen. Kunst K6: In welcher Phase seines Lebens malte Van Gogh die meisten seiner heute berühmten Bilder?",
        "facts": ["Das Museum beherbergt mit über 200 Gemälden die größte Van-Gogh-Sammlung weltweit.", "Die 'Sonnenblumen' und 'Mandelblüten' gehören zu den bekanntesten Exponaten.", "Das Museum wurde 1973 eröffnet und später um einen modernen Flügel erweitert."]
    },
    "NL-LM-VOL": {
        "desc": "Volendam ist das Inbegriff eines traditionellen niederländischen Fischerdorfes am Markermeer. Der Ort ist berühmt für seine farbenfrohen Holzhäuser, traditionelle Trachten und die malerische Hafenpromenade, den Dijk. Trotz des touristischen Rummels hat sich Volendam seinen ganz eigenen maritimen und musikalischen Charakter bewahrt. Sozialkunde K5: Wovon lebten die Bewohner Volendams in der Vergangenheit hauptsächlich?",
        "facts": ["Volendam ist für einen eigenen Pop-Musikstil, den 'Palingsound', in den Niederlanden bekannt.", "Im Hafen werden traditionell frischer Hering und Räucheraal verkauft.", "Viele Einwohner tragen zu festlichen Anlässen noch die traditionelle Volendamer Tracht."]
    },
    "NL-LM-KEU": {
        "desc": "Der Keukenhof in Lisse ist der bekannteste Frühlingspark der Welt und ein farbenprächtiges Schaufenster für den niederländischen Zierpflanzenbau. Jedes Jahr werden hier Millionen von Tulpen, Narzissen und Hyazinthen gepflanzt, die im Frühjahr erblühen. Er spiegelt die enorme wirtschaftliche und kulturelle Bedeutung des Tulpenhandels wider. Biologie K7: Wie vermehren sich Tulpen und warum werden sie jedes Jahr neu gepflanzt?",
        "facts": ["Im Keukenhof werden jährlich etwa 7 Millionen Blumenzwiebeln gepflanzt.", "Der Park ist nur für wenige Wochen von Mitte März bis Mitte Mai geöffnet.", "Die Geschichte der Tulpenmanie im 17. Jahrhundert machte die Tulpe zum Nationalsymbol."]
    },
    "NL-LM-GIE": {
        "desc": "Giethoorn wird oft als das 'Venedig des Nordens' bezeichnet, da es im historischen Zentrum keine Straßen, sondern nur Wasserwege gibt. Die Bewohner und Besucher bewegen sich auf sogenannten 'Flüsterbooten' durch die schmalen Kanäle fort. Die idyllischen strohgedeckten Bauernhäuser vermitteln das Bild einer unberührten, perfekten Welt. Geografie K6: Wie entstanden die unzähligen Wasserwege in und um Giethoorn?",
        "facts": ["Die Kanäle in Giethoorn entstanden durch den historischen Torfabbau.", "Das traditionelle Fortbewegungsmittel ist der 'Punter', der mit einer Stange gestakt wird.", "Es gibt mehr als 170 kleine Holzbrücken, die die Inseln des Dorfes verbinden."]
    },
    "NL-LM-KIN": {
        "desc": "Die Windmühlen von Kinderdijk sind ein herausragendes Denkmal des historischen niederländischen Wassermanagements. Die 19 gut erhaltenen Mühlen aus dem 18. Jahrhundert wurden gebaut, um den tiefliegenden Polder Alblasserwaard vor Überschwemmungen zu schützen. Sie veranschaulichen eindrucksvoll den ewigen Kampf der Niederländer gegen das Wasser. Geschichte K7: Wie funktionierte das Pumpensystem der Windmühlen von Kinderdijk?",
        "facts": ["Die Windmühlen von Kinderdijk gehören seit 1997 zum UNESCO-Weltkulturerbe.", "Die Mühlen pumpten das Wasser in Etappen immer höher, bis es in den Fluss Lek floss.", "Einige der Mühlen werden noch heute von Müllern bewohnt und in Stand gehalten."]
    },
    "NL-LM-TEX": {
        "desc": "Texel ist die größte der niederländischen Watteninseln und bekannt für ihre vielfältige Natur, von weiten Stränden bis zu Kiefernwäldern. Die Insel ist ein bedeutendes Refugium für Millionen von Zugvögeln und eine große Seehundpopulation. Im Zentrum für Natur- und Seehundaufzucht Ecomare wird wertvolle Arbeit für den Naturschutz geleistet. Biologie K8: Warum ist das Wattenmeer ein so wichtiger Lebensraum für Zugvögel?",
        "facts": ["Auf Texel leben in der Regel mehr Schafe als Menschen.", "Die Insel ist mit der Fähre von Den Helder aus in nur 20 Minuten erreichbar.", "Der rote Leuchtturm von Texel im Norden bietet einen weiten Blick über das Meer."]
    },
    "NL-LM-HOG": {
        "desc": "Der Nationalpark De Hoge Veluwe ist ein beeindruckendes Naturschutzgebiet, das Heideflächen, Sanddünen und dichte Wälder umfasst. Neben der reichen Flora und Fauna können Besucher den Park auf den kostenlos zur Verfügung stehenden weißen Fahrrädern erkunden. Im Herzen des Parks liegt das Kröller-Müller-Museum mit einer bemerkenswerten Van-Gogh-Sammlung. Biologie K6: Wie trägt die abwechslungsreiche Landschaft der Veluwe zur Artenvielfalt bei?",
        "facts": ["Der Park erstreckt sich über eine Fläche von rund 5.400 Hektar.", "Das Gebiet wurde von dem wohlhabenden Ehepaar Kröller-Müller angelegt.", "Es ist einer der wenigen Nationalparks in den Niederlanden, für die Eintritt erhoben wird."]
    },
    "NL-LM-ZAA": {
        "desc": "Zaanse Schans ist ein Freilichtmuseum, das die Blütezeit der niederländischen Industrie im 18. und 19. Jahrhundert lebendig hält. Historische Windmühlen, traditionelle Holzhäuser und Handwerksbetriebe für Holzschuhe und Käse wurden hierher versetzt, um das kulturelle Erbe zu bewahren. Das Gebiet am Fluss Zaan war einst eines der ersten großen Industriezentren der Welt. Geschichte K8: Welche verschiedenen Güter wurden von den Windmühlen der Zaan-Region produziert?",
        "facts": ["In der Hochzeit der Zaan-Region drehten sich hier über 600 industrielle Windmühlen.", "Heute können Besucher Mühlen besichtigen, die Gewürze malen, Öl pressen oder Holz sägen.", "Die Zaanse Schans zieht jährlich fast zwei Millionen Touristen an."]
    },
    "NL-LM-ERA": {
        "desc": "Die Erasmusbrücke, elegant über die Nieuwe Maas geschwungen, ist das unverkennbare moderne Wahrzeichen Rotterdams. Ihr asymmetrischer, 139 Meter hoher weißer Pylon brachte ihr den Spitznamen 'Der Schwan' ein. Die Brücke verbindet den Norden und den Süden der Stadt und ist ein Meisterwerk des Ingenieurwesens und des modernen Designs. Physik K8: Welche Kräfte wirken auf eine Schrägseilbrücke wie die Erasmusbrücke?",
        "facts": ["Die Erasmusbrücke ist eine 800 Meter lange Schrägseilbrücke.", "Der südliche Teil der Brücke ist eine Klappbrücke, um großen Schiffen die Durchfahrt zu ermöglichen.", "Sie wurde vom niederländischen Architekten Ben van Berkel entworfen."]
    },
    "NL-LM-MAD": {
        "desc": "Madurodam ist ein Miniaturpark in Den Haag, der die niederländischen Sehenswürdigkeiten, Landschaften und Innovationen im Maßstab 1:25 präsentiert. Es zeigt nicht nur detailgetreue Nachbauten von historischen Gebäuden, sondern illustriert auch eindrücklich, wie das Land mit Wasser und modernen Technologien umgeht. Ein großer Teil der Einnahmen des Parks wird für wohltätige Zwecke gespendet. Sozialkunde K5: Wer war George Maduro, nach dem dieser Park benannt wurde?",
        "facts": ["Madurodam wurde 1952 als Denkmal für den Kriegshelden George Maduro eröffnet.", "Viele der Miniaturmodelle in Madurodam bewegen sich, wie Flugzeuge oder Züge.", "Die Prinzessin oder der Prinz der Niederlande amtiert oft symbolisch als Bürgermeister des Miniaturparks."]
    },
    "NL-LM-EFT": {
        "desc": "Efteling ist der größte und märchenhafteste Freizeitpark der Niederlande. Angefangen als kleiner Märchenwald mit Illustrationen von Anton Pieck, hat sich der Park zu einer riesigen Welt voller Achterbahnen und Fantasiegeschichten entwickelt. Die detailverliebte Thematisierung orientiert sich stark an traditionellen Mythen und europäischen Sagen. Kunst K6: Wie prägte Anton Pieck das romantische und detaillierte Aussehen von Efteling?",
        "facts": ["Efteling öffnete bereits im Jahr 1952 seine Tore.", "Der Park ist einer der ältesten noch geöffneten Themenparks der Welt.", "Die Attraktion 'Symbolica' ist eine der teuersten, die je im Park gebaut wurde."]
    },
    "NL-LM-ZUI": {
        "desc": "Die Zuiderzee war einst eine flache, stürmische Meeresbucht in den nördlichen Niederlanden. Verheerende Überschwemmungen zwangen die Regierung im frühen 20. Jahrhundert zu dem mutigen Entschluss, die Bucht mit dem Afsluitdijk abzusperren. Dies war eines der monumentalsten wasserbaulichen Projekte der Geschichte, das die Bucht in einen Binnensee verwandelte. Geografie K8: Welche wirtschaftlichen Folgen hatte die Schließung der Zuiderzee für die anliegenden Fischerdörfer?",
        "facts": ["Die Zuiderzeewerke wurden von Ingenieur Cornelis Lely konzipiert.", "Durch die Absperrung entstanden später die Polder, die heute Flevoland bilden.", "Die Zuiderzee war im Mittelalter ein wichtiger Handelsweg für Amsterdam."]
    },
    "NL-LM-IJS": {
        "desc": "Das IJsselmeer ist der größte See der Niederlande, der durch den Bau des Afsluitdijk aus der Zuiderzee entstand. Heute ist das große Süßwasserreservoir von enormer Bedeutung für den Küstenschutz, die Wasserversorgung und den Wassersport. Es zeigt eindrucksvoll, wie Menschen ganze Ökosysteme zu ihrem Schutz verändern können. Biologie K7: Wie veränderte sich die Tierwelt, als das Salzwasser der Zuiderzee zum Süßwasser des IJsselmeers wurde?",
        "facts": ["Das IJsselmeer bedeckt eine Fläche von über 1.100 Quadratkilometern.", "Der Bau des Markerwaards, eines weiteren Polders im See, wurde letztlich nicht umgesetzt.", "Der See ist nach dem Fluss IJssel benannt, der in ihn mündet."]
    },
    "nl-gouda": {
        "desc": "Gouda ist eine charmante historische Stadt in der Provinz Südholland, die weltweite Bekanntheit für ihren Käse erlangt hat. Neben dem berühmten Gouda-Käse ist die Stadt auch für die Herstellung von Kerzen, Pfeifen und traditionellen Sirupwaffeln (Stroopwafels) bekannt. Das mächtige, gotische Stadhuis auf dem zentralen Marktplatz ist eines der ältesten und beeindruckendsten Rathäuser der Niederlande. Wirtschaft K7: Wie hat der Käsehandel historisch zur Entwicklung von Gouda beigetragen?",
        "facts": ["Der Gouda-Käsemarkt findet in den Sommermonaten traditionell jeden Donnerstag statt.", "Die Sint-Janskerk in Gouda besitzt die berühmtesten und längsten Glasmalereien des Landes.", "Das historische Rathaus von Gouda stammt aus der Mitte des 15. Jahrhunderts."]
    },
    "nl-enschede": {
        "desc": "Enschede war einst eine der blühendsten Textilstädte Europas und hat sich nach dem Niedergang dieser Industrie erfolgreich zu einem Zentrum für Technologie und Bildung gewandelt. Die Universität Twente bringt frischen Wind und viele Innovationen in die Region. Eine schwere Feuerwerkskatastrophe im Jahr 2000 prägte die jüngere Geschichte und führte zum Neuaufbau des modernen Stadtteils Roombeek. Geschichte K8: Wie bewältigte Enschede den massiven wirtschaftlichen Strukturwandel nach dem Ende der Textilindustrie?",
        "facts": ["Die Universität Twente ist die einzige niederländische Universität mit einem echten Campus.", "Im Mai 2000 zerstörte eine Explosion in einer Feuerwerksfabrik ein ganzes Stadtviertel in Enschede.", "Enschede liegt direkt an der deutschen Grenze in der Nähe von Gronau."]
    },
    "nl-arnhem": {
        "desc": "Arnheim ist eng mit der Geschichte des Zweiten Weltkriegs verbunden, insbesondere wegen der verlustreichen Luftlandungsoperation 'Market Garden'. Heute ist die Stadt ein kreatives Zentrum für Modedesign und Kunst in der wasserreichen Provinz Gelderland. Der nahegelegene Burgers' Zoo und das Niederländische Freilichtmuseum (Openluchtmuseum) zählen zu den meistbesuchten Attraktionen des Landes. Geschichte K8: Welches Ziel verfolgte die Operation 'Market Garden' und warum scheiterte sie in Arnheim?",
        "facts": ["Die John-Frost-Brücke in Arnheim war ein zentraler umkämpfter Ort während der Schlacht um Arnheim 1944.", "Arnheim verfügt über das einzige noch in Betrieb befindliche Trolleybus-Netz der Niederlande.", "Die Kunsthochschule ArtEZ in Arnheim ist eine der angesehensten Modeschulen Europas."]
    },
    "nl-zwolle": {
        "desc": "Zwolle, die Hauptstadt der Provinz Overijssel, ist eine lebendige historische Hansestadt mit einer gut erhaltenen sternförmigen Stadtgracht. Mittelalterliche Stadtmauern, imposante Stadttore wie das Sassenpoort und Kaufmannshäuser zeugen vom Reichtum des Goldenen Zeitalters. Die Stadt vereint auf charmante Weise ihre tiefe Geschichte mit moderner Gastronomie und Kultur, darunter die berühmte Buchhandlung Broese in einer ehemaligen Kirche. Geschichte K6: Was waren die Vorteile für eine Stadt wie Zwolle, Mitglied der Hanse zu sein?",
        "facts": ["Zwolle wurde im 15. Jahrhundert Mitglied des einflussreichen Hansebundes.", "Der Peperbus (Pfefferstreuer) ist ein markanter spätgotischer Turm der Liebfrauenbasilika in Zwolle.", "Das Museum de Fundatie in Zwolle besitzt eine bedeutende Sammlung bildender Kunst."]
    },
    "nl-breda": {
        "desc": "Breda ist eine traditionsreiche Nassaustadt im Süden der Provinz Nordbrabant und eng mit der niederländischen Königsfamilie verbunden. Die Stadt besticht durch ihr historisches Zentrum mit der Grote Kerk, einem Schloss und dem gemütlichen Begijnhof. Breda versprüht eine typisch burgundische Lebensfreude mit vielen Straßencafés und einer einladenden Atmosphäre. Geschichte K7: In welcher Beziehung steht Breda zum Königshaus Oranien-Nassau?",
        "facts": ["Die Grote Kerk oder Liebfrauenkirche in Breda ist ein prachtvolles Beispiel brabanter Gotik.", "Das Kasteel van Breda war ab dem 12. Jahrhundert im Besitz der Grafen von Nassau.", "Breda ist Sitz der Königlichen Militärakademie der Niederlande."]
    },
    "nl-s-hertogenbosch": {
        "desc": "'s-Hertogenbosch, oft nur Den Bosch genannt, ist die festliche Hauptstadt von Nordbrabant und strotzt vor mittelalterlicher Architektur. Die majestätische Sint-Janskathedraal dominiert das Zentrum, während die verwinkelten Binnendieze-Kanäle teilweise sogar unter den Häusern hindurchfließen. Die Stadt ist auch stolz auf ihren berühmtesten Sohn, den visionären Maler Hieronymus Bosch. Kunst K8: Welche besonderen Merkmale kennzeichnen die Gemälde von Hieronymus Bosch?",
        "facts": ["Die Sint-Janskathedraal ist die größte und prunkvollste gotische Kathedrale der Niederlande.", "Eine lokale kulinarische Spezialität ist der Bossche Bol, ein mit Sahne gefülltes Schokoladengebäck.", "Während des Karnevals ändert die Stadt ihren Namen symbolisch in 'Oeteldonk'."]
    },
    "nl-dordrecht": {
        "desc": "Dordrecht ist die älteste Stadt der alten Grafschaft Holland und liegt auf einer wasserreichen Insel im Mündungsdelta. Im Mittelalter war sie dank des Stapelrechts ein überaus wichtiges und wohlhabendes Handelszentrum. Die reiche Geschichte spiegelt sich noch heute in unzähligen Monumenten und den tief im Wasser stehenden Handelshäusern entlang des Voorstraatshaven wider. Wirtschaft K8: Was bedeutete das Stapelrecht für den Wohlstand von Dordrecht im Mittelalter?",
        "facts": ["Dordrecht erhielt bereits im Jahr 1220 Stadtrechte, früher als die meisten anderen Städte Hollands.", "1572 fand hier die Erste Freie Staatenversammlung statt, ein wichtiger Moment im Aufstand gegen Spanien.", "Dordrecht liegt in unmittelbarer Nähe zum Nationalpark De Biesbosch."]
    },
    "nl-alkmaar": {
        "desc": "Alkmaar ist weltberühmt für seinen historischen Käsemarkt auf dem Waagplein, bei dem Käseträger in traditionellen Zünften die schweren Laibe transportieren. Die Stadt hat eine bezaubernde Altstadt mit vielen denkmalgeschützten Gebäuden, versteckten Höfen (Hofjes) und alten Grachten. Im Achtzigjährigen Krieg errang Alkmaar als erste niederländische Stadt 1573 einen entscheidenden Sieg gegen die Spanier. Geschichte K7: Warum wird in den Niederlanden oft gesagt: 'Von Alkmaar beginnt der Sieg'?",
        "facts": ["Der Alkmaarer Käsemarkt lockt jeden Sommer über 100.000 Besucher an.", "Alkmaar hat das Nationale Biermuseum 'De Boom' sowie ein eigenes Käsemuseum.", "Die Belagerung von Alkmaar 1573 war ein Wendepunkt im Kampf gegen das spanische Reich."]
    },
    "nl-mauritshuis": {
        "desc": "Das Mauritshuis in Den Haag ist ein intim wirkendes Museum von Weltrang, das oft als 'Juwelenkästchen' für Kunst beschrieben wird. In dem eleganten Stadtpalast aus dem 17. Jahrhundert wird eine exquisite Sammlung niederländischer und flämischer Malerei aus dem Goldenen Zeitalter bewahrt. Die Meisterwerke von Vermeer und Rembrandt ziehen Besucher aus aller Welt in ihren Bann. Kunst K7: Warum gilt Vermeers 'Mädchen mit dem Perlenohrgehänge' als eines der berühmtesten Gemälde der Welt?",
        "facts": ["Das Gebäude wurde als Residenz für Johann Moritz von Nassau-Siegen im 17. Jahrhundert erbaut.", "Es beherbergt weltbekannte Gemälde wie Vermeers 'Mädchen mit dem Perlenohrgehänge' und Rembrandts 'Die Anatomiestunde des Dr. Tulp'.", "Das Museum liegt direkt am malerischen Hofvijver neben dem Binnenhof."]
    },
    "nl-royal-palace-dam": {
        "desc": "Der Königspalast auf dem Dam in Amsterdam wurde ursprünglich als Rathaus während des Goldenen Zeitalters erbaut und sollte den massiven Reichtum der Stadt demonstrieren. Erst im frühen 19. Jahrhundert wurde es durch Louis Bonaparte in einen Palast umgewandelt. Das imposante klassizistische Bauwerk beeindruckt durch seine riesige Bürgerhalle (Burgerzaal) mit detaillierten Marmorböden. Geschichte K8: Welche politische Symbolik hatte das prachtvolle Rathaus auf dem Dam im 17. Jahrhundert?",
        "facts": ["Das Bauwerk ruht auf 13.659 Holzpfählen, um im weichen Amsterdamer Boden nicht zu versinken.", "Es ist einer von drei Palästen, die dem niederländischen Monarchen durch den Staat zur Verfügung gestellt werden.", "Im Boden der zentralen Halle sind große Welt- und Sternenkarten aus Marmor eingelassen."]
    },
    "nl-kinderdijk-wind": {
        "desc": "Das Ensemble von 19 historischen Windmühlen in Kinderdijk ist ein Zeugnis niederländischer Wassermanagement-Geschichte auf höchstem Niveau. Im 18. Jahrhundert errichtet, dienten sie dazu, überschüssiges Wasser aus dem Alblasserwaard-Polder abzupumpen, um das Land landwirtschaftlich nutzbar zu machen. Die in Reih und Glied stehenden Mühlen sind ein Inbegriff der perfekten Balance zwischen Mensch, Technik und Natur. Physik K6: Wie wandeln die Windmühlen in Kinderdijk die Windenergie um, um Wasser zu pumpen?",
        "facts": ["Die Mühlen von Kinderdijk sind seit 1997 Teil des UNESCO-Weltkulturerbes.", "Die Mühlen pumpten das Wasser in Etappen immer höher, bis es in den Fluss Lek floss.", "Einige der Mühlen werden noch heute von Müllern bewohnt und in Stand gehalten."]
    },
    "nl-afsluitdijk": {
        "desc": "Der 32 Kilometer lange Afsluitdijk (Abschlussdeich) ist ein gewaltiges wasserbauliches Wunderwerk, das Nordholland mit Friesland verbindet. Durch seine Fertigstellung im Jahr 1932 wurde die zerstörerische Zuiderzee vom Wattenmeer abgetrennt und das Land vor weiteren Überschwemmungen geschützt. Er steht symbolisch für die Zähmung der Nordsee durch niederländische Ingenieure. Geografie K8: Welche großen landschaftlichen und ökologischen Veränderungen verursachte der Bau des Afsluitdijk?",
        "facts": ["Der Ingenieur Cornelis Lely gilt als der geistige Vater des Abschlussdeichs.", "Er trennt das nun süße Wasser des IJsselmeers vom salzigen Wasser des Wattenmeers.", "Über den Deich führt die Autobahn A7, die den Verkehr im Norden stark erleichtert."]
    },
    "nl-peace-palace": {
        "desc": "Der Friedenspalast (Vredespaleis) in Den Haag ist das weltweite architektonische Symbol für internationales Recht und friedliche Konfliktlösung. Dank einer enormen Spende des Philanthropen Andrew Carnegie wurde dieses majestätische Gebäude im frühen 20. Jahrhundert errichtet. Es beherbergt heute den Internationalen Gerichtshof der Vereinten Nationen und eine der bedeutendsten völkerrechtlichen Bibliotheken. Sozialkunde K8: Welche Funktion erfüllt der Internationale Gerichtshof der Vereinten Nationen im Friedenspalast?",
        "facts": ["Der Friedenspalast wurde im Jahr 1913, kurz vor dem Ersten Weltkrieg, feierlich eröffnet.", "Für den Bau spendeten unzählige Länder weltweit besondere Materialien und Kunstwerke.", "Neben dem IGH hat auch der Ständige Schiedshof hier seinen Sitz."]
    },
    "nl-waddenzee": {
        "desc": "Das niederländische Wattenmeer ist ein außergewöhnliches, extrem dynamisches Ökosystem, das dem ständigen Wechsel von Ebbe und Flut unterliegt. Bei Niedrigwasser fallen große Flächen frei, auf denen sich Seehunde sonnen und unzählige Vögel nach Nahrung suchen. Dieses einzigartige Gezeitengebiet ist als UNESCO-Weltnaturerbe anerkannt und absolut schützenswert. Biologie K7: Wie passen sich die Lebewesen im Wattenmeer an die extremen Schwankungen zwischen Ebbe und Flut an?",
        "facts": ["Das Wattenmeer erstreckt sich von den Niederlanden über Deutschland bis nach Dänemark.", "Das Gebiet ist ein essenzieller Rastplatz für jährlich Millionen von Zugvögeln.", "Geführte Wattwanderungen (Wadlopen) sind eine beliebte und abenteuerliche Aktivität in der Region."]
    },
    "nl-biesbosch": {
        "desc": "Der Nationalpark De Biesbosch ist ein seltenes und verwildertes Süßwasser-Gezeitengebiet im Delta großer niederländischer Flüsse. Es entstand nach einer katastrophalen Überschwemmung im Mittelalter und hat sich zu einem unwegsamen Labyrinth aus Wasserwegen, Inseln und Weidenwäldern. Besonders bekannt ist das Gebiet heute für seine wachsende Biberpopulation und als Paradies für Naturliebhaber im Kanu. Biologie K6: Warum ist ein Süßwasser-Gezeitengebiet wie De Biesbosch ökologisch so wertvoll und selten?",
        "facts": ["De Biesbosch entstand 1421 als direkte Folge der verheerenden St.-Elisabeth-Flut.", "Das Gebiet ist heute einer der wichtigsten Lebensräume für den Europäischen Biber in den Niederlanden.", "Im Zweiten Weltkrieg boten die undurchdringlichen Sümpfe vielen Widerstandskämpfern ein ideales Versteck."]
    },
    "nl-dunes-kennemerland": {
        "desc": "Der Nationalpark Zuid-Kennemerland ist ein geschütztes Küstengebiet in Nordholland, das durch eine abwechslungsreiche Landschaft aus weiten Sandstränden, Dünen und alten Wäldern fasziniert. Die Region ist nicht nur ein wichtiges Rückzugsgebiet für die Natur, sondern spielt auch eine große Rolle bei der Gewinnung von Trinkwasser. Wisente, Konik-Pferde und Hochlandrinder pflegen hier die raue Naturlandschaft auf natürliche Weise. Geografie K7: Welche Funktion haben große Dünenlandschaften wie das Zuid-Kennemerland für den niederländischen Küstenschutz?",
        "facts": ["Der Nationalpark dient als natürliche Wasserfilteranlage zur Gewinnung von hochwertigem Trinkwasser.", "Es ist einer der wenigen Orte in Europa, wo frei lebende Wisente (europäische Bisons) beheimatet sind.", "Die Vegetation ist stark vom ständigen Wind und dem salzigen Klima geprägt."]
    },
    "nl-drenthe-hunebed": {
        "desc": "Die Hunebedden (Hünengräber) in Drenthe sind die ältesten Monumente der Niederlande und zeugen von einer prähistorischen Bauerngesellschaft vor über 5.000 Jahren. Diese massiven Megalithgräber wurden aus Findlingen errichtet, die eiszeitliche Gletscher aus Skandinavien herangetragen hatten. Das Hunebedcentrum in Borger bietet heute detaillierte Einblicke in das Leben der Trichterbecherkultur, die diese Anlagen baute. Geschichte K6: Wie schafften es die prähistorischen Menschen, diese tonnenschweren Felsblöcke zu Hünengräbern aufzustapeln?",
        "facts": ["Das größte Hünengrab der Niederlande (D27) befindet sich in Borger und ist über 22 Meter lang.", "Diese Grabanlagen sind nachweislich deutlich älter als die ägyptischen Pyramiden und Stonehenge.", "Ursprünglich waren die Felsblöcke mit Sand und Erde bedeckt und bildeten kleine Hügel."]
    },
    "nl-vondelpark": {
        "desc": "Der Vondelpark ist Amsterdams berühmtester und meistbesuchter Stadtpark, der als grüne Lunge mitten im lebhaften Stadtzentrum fungiert. Entworfen im Stil eines idyllischen englischen Landschaftsgartens, bietet er gewundene Wege, große Teiche und romantische Brücken. Hier treffen sich bei schönem Wetter tausende Menschen zum Picknicken, Musizieren oder einfach zum Entspannen. Biologie K5: Warum sind große Parks wie der Vondelpark für das Mikroklima einer dichten Stadt so wichtig?",
        "facts": ["Der Park wurde 1865 eröffnet und später nach dem niederländischen Dichter Joost van den Vondel benannt.", "Jährlich zieht der Vondelpark mehr als 10 Millionen einheimische und internationale Besucher an.", "Im Park befindet sich eine originale Betonskulptur, die vom berühmten Künstler Pablo Picasso entworfen wurde."]
    },
    "port-maasvlakte-2-extra": {
        "desc": "Die Maasvlakte 2 ist eine ingenieurtechnische Meisterleistung und eine gigantische Landgewinnung zur Erweiterung des Rotterdamer Hafens. Auf diesem neuen Stück Land an der Küste der Nordsee wurden hochmoderne, vollautomatisierte Containerterminals errichtet, die die größten Schiffe der Welt abfertigen. Die Entwicklung beweist, wie die Niederlande industrielles Wachstum und technologische Innovation vorantreiben. Geografie K9: Wie verändert die Landgewinnung von Projekten wie der Maasvlakte 2 die Küstenlinie und die maritime Wirtschaft?",
        "facts": ["Durch das Projekt wurde der Rotterdamer Hafen um unglaubliche 20 Prozent vergrößert.", "Die Terminals auf der Maasvlakte 2 werden oft von fahrerlosen, elektrischen Transportfahrzeugen betrieben.", "Für den Bau wurden etwa 240 Millionen Kubikmeter Sand vom Grund der Nordsee aufgespült."]
    },
    "animal-habitat-burgers-zoo-extra": {
        "desc": "Burgers' Zoo in Arnheim gilt als einer der innovativsten Tierparks Europas, da er mit seinem 'Öko-Display'-Konzept riesige, naturgetreue Ökosysteme nachbildet. Anstatt Tiere in Käfigen zu zeigen, tauchen die Besucher in voll klimatisierte Tropenwälder, Wüstenlandschaften oder riesige Meeresaquarien ein. Diese naturnahe Gestaltung fördert nicht nur das Wohlbefinden der Tiere, sondern bietet auch eine einzigartige pädagogische Erfahrung. Biologie K6: Warum ist es für Zootiere von Vorteil, wenn ihr Gehege einem echten Ökosystem so genau wie möglich nachempfunden ist?",
        "facts": ["Der Bereich Burgers' Bush ist ein 1,5 Hektar großer, überdachter tropischer Regenwald.", "Burgers' Ocean beherbergt eines der größten lebenden Indoor-Korallenriffe der Welt.", "Der Zoo wurde 1913 gegründet und legt heute seinen Hauptfokus auf intensiven Artenschutz."]
    }
}

def update_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = content.split('id: "')
    modified_parts = [parts[0]]
    updated_count = 0
    
    for part in parts[1:]:
        poi_id = part.split('"')[0]
        
        if poi_id in seo_data:
            seo = seo_data[poi_id]
            desc_val = seo["desc"]
            facts_val = seo["facts"]
            
            desc_de_str = json.dumps(desc_val, ensure_ascii=False)
            
            # Use proper newlines in string concatenation
            if 'descriptionAdvanced:' in part:
                part = re.sub(r'(descriptionAdvanced:\s*\{\s*de:\s*)"[^"]*"', r'\1' + desc_de_str, part, flags=re.DOTALL)
            else:
                new_desc = "\n    descriptionAdvanced: {\n      de: " + desc_de_str + ", hu: \"\", ro: \"\", en: \"\"\n    },"
                if 'facts:' in part:
                    part = part.replace('facts:', new_desc.lstrip('\n') + '\n    facts:', 1)
                else:
                    last_brace_pos = part.rfind('}')
                    part = part[:last_brace_pos] + new_desc + "\n  " + part[last_brace_pos:]
            
            if 'factsAdvanced:' in part:
                formatted_facts = ',\n        '.join([json.dumps(x, ensure_ascii=False) for x in facts_val])
                part = re.sub(r'(factsAdvanced:\s*\{[^\}]*?de:\s*\[).*?(\])', r'\1\n        ' + formatted_facts + r'\n      \2', part, flags=re.DOTALL)
            else:
                formatted_facts = ',\n        '.join([json.dumps(x, ensure_ascii=False) for x in facts_val])
                new_facts = "\n    factsAdvanced: {\n      de: [\n        " + formatted_facts + "\n      ], hu: [], ro: [], en: []\n    }"
                last_brace_pos = part.rfind('}')
                part = part[:last_brace_pos] + new_facts.lstrip('\n') + "\n  " + part[last_brace_pos:]
            
            updated_count += 1
            
        modified_parts.append(part)
    
    new_content = 'id: "'.join(modified_parts)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {updated_count} POIs in {filepath}")

update_file("lib/visualLab/data/netherlandsPoi.ts")
update_file("lib/visualLab/data/poiExtraNetherlandsCities.ts")
