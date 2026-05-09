#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill German (de) descriptionAdvanced + factsAdvanced for Argentina cities POIs."""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraArgentinaCitiesV2.ts"

DATA = {
    "ar-c-buenos-aires-cities-v2": {
        "desc": "Buenos Aires, die pulsierende Hauptstadt Argentiniens, wurde 1536 von Pedro de Mendoza erstmals und 1580 von Juan de Garay endgültig gegründet. Heute leben in der Metropolregion über 15 Millionen Menschen, in der autonomen Stadt selbst rund 3 Millionen. Wegen ihrer eleganten Architektur im europäischen Stil wird sie oft das „Paris des Südens“ genannt. Italienische und spanische Einwanderer prägten ab dem 19. Jahrhundert das Stadtbild, die Sprache und die Küche entscheidend. Buenos Aires ist die Geburtsstadt des Tangos, Heimat des berühmten Teatro Colón und Sitz der wichtigsten politischen, wirtschaftlichen und kulturellen Institutionen des Landes. Stadtviertel wie San Telmo, La Boca und Palermo verkörpern die vielschichtige Identität der Porteños.",
        "facts": [
            "Erstmals 1536 von Pedro de Mendoza, endgültig 1580 von Juan de Garay gegründet.",
            "Metropolregion mit über 15 Millionen Einwohnern.",
            "Die Avenida 9 de Julio gilt als breiteste Straße der Welt.",
            "Teatro Colón zählt akustisch zu den drei besten Opernhäusern weltweit.",
            "Seit 1994 autonomer Bundesdistrikt.",
            "Über die Hälfte der Bevölkerung hat italienische Vorfahren.",
            "Friedhof La Recoleta ist letzte Ruhestätte von Eva Perón.",
            "Der Hafen von Buenos Aires ist einer der größten Südamerikas."
        ]
    },
    "ar-b-la-plata-cities-v2": {
        "desc": "La Plata wurde 1882 von Gouverneur Dardo Rocha als geplante Hauptstadt der Provinz Buenos Aires gegründet. Die Stadt mit rund 750.000 Einwohnern ist ein einzigartiges Beispiel rationalistischer Stadtplanung des späten 19. Jahrhunderts: ein perfektes Quadrat, durchzogen von Diagonalen, mit einem Park oder öffentlichen Platz an jeder sechsten Straßenecke. Italienische und spanische Einwanderer trugen wesentlich zum raschen Wachstum bei. Wahrzeichen ist die monumentale neugotische Kathedrale, eines der größten Sakralbauwerke Argentiniens. La Plata gilt als Bildungs- und Wissenschaftszentrum mit der renommierten Universidad Nacional und einem weltweit bedeutenden Naturkundemuseum. Wegen ihres Straßenmusters trägt sie den Beinamen „Stadt der Diagonalen“.",
        "facts": [
            "1882 von Gouverneur Dardo Rocha gegründet.",
            "Erste Stadt Lateinamerikas mit elektrischer Straßenbeleuchtung.",
            "Bau der Kathedrale dauerte über 100 Jahre.",
            "Stadtplan auf der Pariser Weltausstellung 1889 mit Goldmedaille ausgezeichnet.",
            "Sitz eines der wichtigsten astronomischen Observatorien Argentiniens.",
            "Naturkundemuseum mit über 3 Millionen Exponaten.",
            "Beiname „Stadt der Diagonalen“ wegen einzigartiger Straßenführung.",
            "Bei der Gründung wurde eine Zeitkapsel im Hauptplatz vergraben."
        ]
    },
    "ar-b-mar-del-plata-cities-v2": {
        "desc": "Mar del Plata, 1874 offiziell gegründet, ist Argentiniens beliebtestes Seebad an der Atlantikküste und beheimatet rund 650.000 Einwohner. Im Sommer steigt die Bevölkerung durch Touristen auf über zwei Millionen. Die Stadt verbindet aristokratische Villen aus dem späten 19. Jahrhundert – erbaut für die Oberschicht von Buenos Aires – mit modernen Hotelreihen. Italienische und spanische Einwanderer prägten den Hafen und die größte Fischfangflotte Argentiniens. Mar del Plata ist Austragungsort des einzigen Filmfestivals der Kategorie A in Lateinamerika und berühmt für sein riesiges Casino aus rotem Granit. Wegen ihres lebendigen Nachtlebens und ihrer Strände trägt die Stadt den Spitznamen „La Feliz“ – die glückliche Stadt.",
        "facts": [
            "1874 offiziell gegründet, heute rund 650.000 Einwohner.",
            "Casino Central aus rotem Granit ist eines der größten der Welt.",
            "Fischereihafen ist berühmt für seine Seelöwen.",
            "Internationales Filmfestival Kategorie A jährlich seit 1954.",
            "Strände erstrecken sich über mehr als 47 Kilometer.",
            "Im Sommer Bevölkerungsanstieg auf über 2 Millionen Touristen.",
            "Wichtigster Fischereihafen Argentiniens.",
            "Spitzname „La Feliz“ – die glückliche Stadt."
        ]
    },
    "ar-b-bahia-blanca-cities-v2": {
        "desc": "Bahía Blanca wurde 1828 als Festung Fortaleza Protectora Argentina gegründet, um die südliche Grenze gegen indigene Angriffe zu sichern. Heute leben rund 305.000 Menschen in der Hafenstadt am Atlantik, die ein bedeutendes wirtschaftliches Zentrum Patagoniens darstellt. Italienische und spanische Einwanderer prägten ab Ende des 19. Jahrhunderts das Stadtbild. Der Hafen Ingeniero White ist einer der größten Tiefwasserhäfen Argentiniens und Hauptumschlagplatz für Getreide aus der Pampa. Die Stadt beherbergt einen wichtigen Marinestützpunkt sowie petrochemische Industrieanlagen. Das historische Zentrum mit Plaza Rivadavia, Kathedrale und Theater Municipal zeugt vom wirtschaftlichen Aufschwung der Belle Époque.",
        "facts": [
            "1828 als Festung Protectora Argentina gegründet.",
            "Rund 305.000 Einwohner, größte Stadt im Süden der Provinz Buenos Aires.",
            "Hafen Ingeniero White ist Hauptgetreideumschlagplatz Argentiniens.",
            "Wichtigster Marinestützpunkt nach Puerto Belgrano.",
            "Bedeutendes petrochemisches Zentrum des Landes.",
            "Theater Municipal aus dem Jahr 1913.",
            "Universidad Nacional del Sur gegründet 1956.",
            "Tor zum patagonischen Süden Argentiniens."
        ]
    },
    "ar-b-tandil-cities-v2": {
        "desc": "Tandil wurde am 4. April 1823 von Martín Rodríguez als Festung gegen die Mapuche gegründet und liegt malerisch in den ältesten Bergen Argentiniens, den Sierras de Tandil. Die Stadt mit rund 145.000 Einwohnern ist berühmt für ihre Wurst- und Käseproduktion, eine Tradition, die italienische, spanische und baskische Einwanderer ab Mitte des 19. Jahrhunderts mitbrachten. Tandil ist Ziel des Karwoche-Pilgerwegs zum Calvario-Hügel und beherbergt eine bedeutende Universität. Der Cerro El Centinela und das Naturreservat Sierra del Tigre ziehen Wanderer und Naturfreunde an. Bekannt war die Stadt auch für die „Piedra Movediza“, einen wackelnden Felsen, der 1912 stürzte und 2007 als Replik wiedererrichtet wurde.",
        "facts": [
            "Am 4. April 1823 von Martín Rodríguez gegründet.",
            "Rund 145.000 Einwohner, gelegen in den Sierras de Tandil.",
            "Berühmt für traditionelle Wurst- und Käseproduktion.",
            "Pilgerweg zum Calvario in der Karwoche.",
            "Die „Piedra Movediza“ stürzte 1912, Replik 2007.",
            "Älteste Berge Argentiniens, über 2 Milliarden Jahre alt.",
            "Universidad Nacional del Centro gegründet 1974.",
            "Wichtige italienische und baskische Einwanderergemeinden."
        ]
    },
    "ar-b-quilmes-cities-v2": {
        "desc": "Quilmes, 1666 als Reduktion für deportierte indigene Quilmes aus den Calchaquí-Tälern gegründet, ist heute eine Industriestadt mit rund 580.000 Einwohnern im Süden des Großraums Buenos Aires. Die Stadt ist weltbekannt für die 1888 von dem deutsch-argentinischen Brauer Otto Bemberg gegründete Cervecería Quilmes, die meistgetrunkene Biermarke Argentiniens. Italienische und spanische Einwanderer prägten ab Ende des 19. Jahrhunderts die Bevölkerung. Quilmes ist eng mit dem Fußball verbunden – der Quilmes Atlético Club ist einer der ältesten Vereine Argentiniens (gegründet 1887). Die Uferpromenade am Río de la Plata mit ihren Strandbädern war einst beliebtes Sommerziel der Hauptstadtbewohner.",
        "facts": [
            "1666 als Reduktion für die indigene Quilmes-Bevölkerung gegründet.",
            "Heute rund 580.000 Einwohner.",
            "Cervecería Quilmes seit 1888 von Otto Bemberg gegründet.",
            "Quilmes Atlético Club, einer der ältesten Fußballklubs (1887).",
            "Wichtige italienische Einwanderergemeinde.",
            "Strandbäder am Río de la Plata einst beliebtes Sommerziel.",
            "Universidad Nacional de Quilmes gegründet 1989.",
            "Bedeutendes industrielles Zentrum im Süden des Großraums Buenos Aires."
        ]
    },
    "ar-b-lomas-de-zamora-cities-v2": {
        "desc": "Lomas de Zamora, 1861 offiziell gegründet, ist mit rund 615.000 Einwohnern eine der bevölkerungsreichsten Städte des Großraums Buenos Aires. Der Name geht auf den spanischen Kolonisten Juan de Zamora zurück, der hier im 18. Jahrhundert große Ländereien besaß. Italienische, spanische und syrisch-libanesische Einwanderer prägten ab Ende des 19. Jahrhunderts den Charakter der Stadt. Lomas verfügt über eine bedeutende Universität, die Universidad Nacional de Lomas de Zamora (1972), und ist Sitz wichtiger Industriebetriebe. Die Plaza Grigera bildet das historische Zentrum, in dem koloniale und republikanische Architektur dominieren. Der Fußballverein Club Atlético Banfield, gegründet 1896, hat seine Heimat im Großraum Lomas.",
        "facts": [
            "1861 offiziell als Stadt gegründet.",
            "Rund 615.000 Einwohner, eine der größten im Süden des Großraums.",
            "Benannt nach dem Kolonisten Juan de Zamora.",
            "Universidad Nacional de Lomas de Zamora gegründet 1972.",
            "Bedeutende italienische und syrisch-libanesische Gemeinden.",
            "Plaza Grigera ist das historische Zentrum.",
            "Fußballverein Banfield seit 1896.",
            "Wichtiges industrielles und kommerzielles Zentrum."
        ]
    },
    "ar-b-san-isidro-cities-v2": {
        "desc": "San Isidro wurde im 18. Jahrhundert um die 1730 errichtete Pfarrkirche San Isidro Labrador gegründet und 1854 zur Stadt erhoben. Heute leben hier rund 290.000 Einwohner in einer der wohlhabendsten Gemeinden Argentiniens. Die Stadt liegt am Río de la Plata und ist berühmt für ihre koloniale und englisch geprägte Architektur des 19. Jahrhunderts, ihre baumbestandenen Straßen und die monumentale neugotische Kathedrale. Italienische und spanische Einwanderer trugen zur Entwicklung bei, doch besonders britische Familien prägten den anglikanisch geprägten Stadtteil. San Isidro ist Sitz traditioneller Sportvereine, darunter der Jockey Club und der Club Atlético San Isidro (CASI), und Geburtsort vieler bedeutender Persönlichkeiten Argentiniens.",
        "facts": [
            "1730 erste Kapelle, 1854 zur Stadt erhoben.",
            "Rund 290.000 Einwohner, eine der wohlhabendsten Gemeinden.",
            "Neugotische Kathedrale aus dem späten 19. Jahrhundert.",
            "Quinta de Pueyrredón ist nationales Geschichtsdenkmal.",
            "Britische Einwandererprägung im 19. Jahrhundert.",
            "Hippodrom San Isidro mit traditionsreichen Pferderennen.",
            "Jockey Club und CASI, traditionsreiche Sportvereine.",
            "Geburtsort des Befreiungsgenerals Juan Martín de Pueyrredón."
        ]
    },
    "ar-b-san-nicolas-de-los-arroyos-cities-v2": {
        "desc": "San Nicolás de los Arroyos, am 14. April 1748 vom Spanier Rafael de Aguiar gegründet, liegt strategisch am Paraná-Fluss zwischen Buenos Aires und Rosario. Die Stadt mit rund 145.000 Einwohnern war Schauplatz historischer Ereignisse: Hier wurde am 31. Mai 1852 das „Acuerdo de San Nicolás“ unterzeichnet, das den Weg zur argentinischen Nationalverfassung ebnete. Italienische und spanische Einwanderer trugen ab Ende des 19. Jahrhunderts zum industriellen Aufschwung bei. San Nicolás ist Sitz eines bedeutenden Stahlwerks (Siderar/Ternium) und eines Atomkraftwerks (Atucha). Berühmt ist die Wallfahrtskirche Santuario de María del Rosario de San Nicolás, eines der wichtigsten katholischen Pilgerziele Argentiniens.",
        "facts": [
            "Am 14. April 1748 von Rafael de Aguiar gegründet.",
            "Rund 145.000 Einwohner.",
            "Acuerdo de San Nicolás am 31. Mai 1852 unterzeichnet.",
            "Bedeutendes Stahlwerk Ternium-Siderar.",
            "Wallfahrtsort der Jungfrau María del Rosario.",
            "Atomkraftwerk Atucha I in der Nähe.",
            "Wichtige italienische Einwanderergemeinde.",
            "Strategische Lage am Paraná-Fluss."
        ]
    },
    "ar-b-lanus-cities-v2": {
        "desc": "Lanús, 1944 als eigenständige Gemeinde gegründet, ist mit rund 460.000 Einwohnern eine dicht bebaute Industriestadt im Süden des Großraums Buenos Aires. Benannt wurde sie nach dem baskischen Einwanderer Anacarsis Lanús, der hier im 19. Jahrhundert große Ländereien erwarb. Die Stadt entwickelte sich Ende des 19. Jahrhunderts mit dem Eisenbahnbau zu einem der wichtigsten Industriestandorte Argentiniens. Italienische, spanische und osteuropäische Einwanderer prägten die Bevölkerung. Lanús ist Heimat des Fußballvereins Club Atlético Lanús (gegründet 1915), der 2007 erstmals argentinischer Meister wurde. Die Universidad Nacional de Lanús (1995) hat sich als bedeutende öffentliche Hochschule etabliert. Das Theater Municipal und die katholische Kathedrale prägen das Stadtzentrum.",
        "facts": [
            "1944 als eigenständige Gemeinde gegründet.",
            "Rund 460.000 Einwohner, dicht bebaut.",
            "Benannt nach dem baskischen Einwanderer Anacarsis Lanús.",
            "Wichtiger Industriestandort seit Ende des 19. Jahrhunderts.",
            "Fußballverein Club Atlético Lanús, Meister 2007.",
            "Universidad Nacional de Lanús gegründet 1995.",
            "Italienische, spanische und osteuropäische Einwandererwellen.",
            "Theater Municipal und Kathedrale im Stadtzentrum."
        ]
    },
    "ar-k-catamarca-cities-v2": {
        "desc": "San Fernando del Valle de Catamarca, 1683 von Fernando Mendoza Mate de Luna gegründet, ist die Hauptstadt der gleichnamigen Provinz und beheimatet rund 200.000 Einwohner. Die Stadt liegt malerisch in einem Tal der Sierra de Ambato und ist berühmt für ihre Wallfahrtskirche Nuestra Señora del Valle, deren Marienbild aus dem 17. Jahrhundert eines der wichtigsten Pilgerziele Argentiniens darstellt. Spanische Kolonisten und später italienische Einwanderer prägten die Stadt. Im jährlichen Juli findet das Festival Nacional e Internacional del Poncho statt, eine bedeutende Kunsthandwerksmesse. Die Kathedrale Basílica im neoklassizistischen Stil und der Paseo General Navarro bilden das historische Herz dieser ruhigen, traditionellen Andenstadt.",
        "facts": [
            "1683 von Fernando Mendoza Mate de Luna gegründet.",
            "Rund 200.000 Einwohner.",
            "Berühmtes Marienbild Nuestra Señora del Valle aus dem 17. Jh.",
            "Festival Nacional del Poncho jährlich im Juli.",
            "Kathedrale Basílica im neoklassizistischen Stil.",
            "Hauptstadt der Provinz Catamarca.",
            "Bedeutendes Zentrum der Andenfolklore.",
            "Universidad Nacional de Catamarca gegründet 1972."
        ]
    },
    "ar-k-belen-cities-v2": {
        "desc": "Belén, 1681 gegründet und in den Hochanden der Provinz Catamarca auf 1.250 Metern Höhe gelegen, hat rund 13.000 Einwohner und gilt als nationale Hauptstadt des Ponchos. Die Stadt ist seit Jahrhunderten Zentrum traditioneller Webkunst, in der die alten Techniken der präkolumbischen Diaguita-Kultur mit spanischen Einflüssen verschmelzen. Belén verfügt über eine der ältesten Pfarrkirchen der Region und einen historischen Marktplatz. Die umliegenden Berge beherbergen alte Inka-Stätten und Kupferminen, die bis heute abgebaut werden. Italienische und spanische Einwanderer prägten ab dem 19. Jahrhundert die Bevölkerung. Bekannte Folkloresänger und Dichter haben die Stadt international bekannt gemacht.",
        "facts": [
            "1681 gegründet, auf 1.250 m Höhe.",
            "Rund 13.000 Einwohner.",
            "Nationale Hauptstadt des Ponchos.",
            "Traditionelle Webkunst seit der Diaguita-Kultur.",
            "Inka-Stätten und Kupferminen in der Umgebung.",
            "Eine der ältesten Pfarrkirchen Catamarcas.",
            "Wichtiges Zentrum der Andenfolklore.",
            "Belén ist Geburtsort vieler bekannter Folkloresänger."
        ]
    },
    "ar-k-andalgala-cities-v2": {
        "desc": "Andalgalá, 1658 gegründet und am Fuß der Sierra de Aconquija auf 1.100 Metern gelegen, ist eine kleine Bergstadt mit rund 17.000 Einwohnern in der Provinz Catamarca. Die Stadt blickt auf eine lange Bergbautradition zurück, die bis in präkolumbische Zeit reicht. In der Nähe befindet sich die Kupfer- und Goldmine Bajo de la Alumbrera, eine der größten ihrer Art in Südamerika. Spanische Kolonisten und später italienische Einwanderer prägten den Charakter der Stadt. Andalgalá ist berühmt für seine Folklorefestivals und Kunsthandwerk, insbesondere Lederverarbeitung und Steinschnitzerei. Die nahegelegene archäologische Stätte El Shincal de Quimivil ist eine der bedeutendsten Inka-Ruinen Argentiniens und seit 2014 UNESCO-Welterbe.",
        "facts": [
            "1658 in den Calchaquí-Tälern gegründet.",
            "Rund 17.000 Einwohner auf 1.100 m Höhe.",
            "Kupfer- und Goldmine Bajo de la Alumbrera in der Nähe.",
            "El Shincal de Quimivil, UNESCO-Welterbe seit 2014.",
            "Tradition der Lederverarbeitung und Steinschnitzerei.",
            "Lange präkolumbische Bergbautradition.",
            "Folklorefestival mit traditioneller Andenmusik.",
            "Sierra de Aconquija mit Gipfeln über 5.500 m."
        ]
    },
    "ar-h-resistencia-cities-v2": {
        "desc": "Resistencia, 1878 von italienischen Einwanderern aus dem Friaul gegründet, ist die Hauptstadt der Provinz Chaco und beheimatet rund 290.000 Einwohner in der Stadt selbst, im Großraum über 400.000. Die Stadt trägt den Beinamen „Stadt der Skulpturen“, denn über 600 Skulpturen schmücken ihre Straßen und Plätze – ein einzigartiges Freilichtmuseum, geschaffen seit 1988 durch das Festival Bienal Internacional de Esculturas. Italienische, spanische und osteuropäische Einwanderer prägten den Charakter. Resistencia liegt in der heißen Region Chaco und ist Wirtschaftszentrum der nordöstlichen Region. Die Plaza 25 de Mayo bildet das historische Herz, umgeben von Regierungsgebäuden, Kathedrale und dem Casa de las Culturas, das die indigene Vielfalt der Provinz feiert.",
        "facts": [
            "1878 von italienischen Friauler Einwanderern gegründet.",
            "Rund 290.000 Einwohner, Großraum über 400.000.",
            "Über 600 Skulpturen schmücken die Stadt.",
            "Festival Bienal Internacional de Esculturas seit 1988.",
            "Hauptstadt der Provinz Chaco.",
            "Casa de las Culturas zeigt indigene Vielfalt.",
            "Sehr heißes subtropisches Klima.",
            "Universidad Nacional del Nordeste mit Sitz hier."
        ]
    },
    "ar-h-presidencia-roque-saenz-pena-cities-v2": {
        "desc": "Presidencia Roque Sáenz Peña, 1912 gegründet und benannt nach dem damaligen Präsidenten Argentiniens, ist mit rund 95.000 Einwohnern die zweitgrößte Stadt der Provinz Chaco. Die Stadt entwickelte sich als Zentrum des Baumwollanbaus, einer Kultur, die italienische, spanische und osteuropäische Einwanderer in der ersten Hälfte des 20. Jahrhunderts in der Region etablierten. Die Stadt ist berühmt für ihren Zoo und vor allem für die Thermalquellen, die zu den bekanntesten Argentiniens zählen und seit 1937 medizinisch genutzt werden. Die Plaza San Martín mit der Kathedrale bildet das Stadtzentrum. Sáenz Peña ist Hauptort des Festivals des Baumwollanbaus, einer der wichtigsten landwirtschaftlichen Veranstaltungen der Region.",
        "facts": [
            "1912 gegründet, benannt nach dem Präsidenten Argentiniens.",
            "Rund 95.000 Einwohner.",
            "Bedeutendes Zentrum des Baumwollanbaus.",
            "Berühmte Thermalquellen seit 1937.",
            "Zoologischer Garten mit regionaler Fauna.",
            "Festival des Baumwollanbaus jährlich.",
            "Italienische und osteuropäische Einwandererwellen.",
            "Strategischer Eisenbahnknotenpunkt."
        ]
    },
    "ar-h-villa-angela-cities-v2": {
        "desc": "Villa Ángela wurde 1914 in der Provinz Chaco im Zuge der Erschließung des Großen Chaco durch italienische, spanische und osteuropäische Einwanderer gegründet. Heute leben rund 45.000 Menschen in dieser Stadt im Süden der Provinz. Die Wirtschaft basiert traditionell auf Baumwolle, Sonnenblumen und Sojaanbau. Die Stadt ist nach Ángela Marengo, der Frau eines lokalen Großgrundbesitzers, benannt. Sie verfügt über ein historisches Bahnhofsgebäude aus der Anfangszeit, mehrere Kirchen unterschiedlicher europäischer Einwanderergruppen und einen lebendigen Marktplatz. Villa Ángela ist auch bekannt für ihre Folkloremusiker und das jährliche regionale Festival, das die Vielfalt der Einwandererkulturen feiert.",
        "facts": [
            "1914 als Folge der Chaco-Erschließung gegründet.",
            "Rund 45.000 Einwohner.",
            "Benannt nach Ángela Marengo.",
            "Wirtschaft basiert auf Baumwolle, Soja und Sonnenblumen.",
            "Italienische und osteuropäische Einwandererwellen.",
            "Historisches Bahnhofsgebäude aus den 1910er Jahren.",
            "Lebendige Folkloreszene mit regionalem Festival.",
            "Zentrum für Landwirtschaft im Süden Chacos."
        ]
    },
    "ar-u-rawson-cities-v2": {
        "desc": "Rawson, am 15. September 1865 von walisischen Siedlern gegründet, ist die Hauptstadt der Provinz Chubut in Patagonien und beheimatet rund 32.000 Einwohner. Sie ist die einzige Hauptstadt Argentiniens, die hauptsächlich von einer nicht-spanischen Einwanderergruppe gegründet wurde. Die walisische Kolonie suchte hier am unteren Río Chubut Zuflucht, um ihre Sprache und Traditionen zu bewahren. Spanische und später italienische Einwanderer prägten die weitere Entwicklung. Die Stadt liegt nur wenige Kilometer von der Atlantikküste entfernt und ist Sitz der Provinzregierung. Bedeutend sind das walisische Geschichtsmuseum, die Kapellen mit walisischen Inschriften und das jährliche Eisteddfod-Festival, das walisische Poesie und Gesang feiert.",
        "facts": [
            "Am 15. September 1865 von walisischen Siedlern gegründet.",
            "Rund 32.000 Einwohner.",
            "Hauptstadt der Provinz Chubut.",
            "Einzige Hauptstadt mit überwiegend walisischem Ursprung.",
            "Walisisches Eisteddfod-Festival jährlich.",
            "Walisisches Geschichtsmuseum mit Originaldokumenten.",
            "Liegt am unteren Río Chubut.",
            "Wenige Kilometer von der Atlantikküste entfernt."
        ]
    },
    "ar-u-comodoro-rivadavia-cities-v2": {
        "desc": "Comodoro Rivadavia, am 23. Februar 1901 gegründet, ist mit rund 195.000 Einwohnern die größte Stadt der Provinz Chubut und das wichtigste Zentrum der argentinischen Erdölindustrie. 1907 wurde hier zufällig bei der Suche nach Trinkwasser das erste Erdöl Argentiniens entdeckt – ein Ereignis, das die Geschichte der Stadt prägte. Italienische, spanische und besonders osteuropäische Einwanderer (Bulgaren, Polen) trugen zum Aufschwung bei. Die Stadt liegt am Atlantik, eingerahmt vom Cerro Chenque, und beherbergt das Erdölmuseum sowie wichtige Forschungszentren. Comodoro ist auch ein bedeutender Hafen und Ausgangspunkt für die Erkundung der patagonischen Steppe.",
        "facts": [
            "Am 23. Februar 1901 gegründet.",
            "Rund 195.000 Einwohner, größte Stadt der Provinz Chubut.",
            "1907 wurde hier das erste Erdöl Argentiniens entdeckt.",
            "Wichtigstes Zentrum der argentinischen Erdölindustrie.",
            "Cerro Chenque prägt die Stadtsilhouette.",
            "Bulgarische und polnische Einwanderergemeinden.",
            "Bedeutendes Erdölmuseum.",
            "Universidad Nacional de la Patagonia San Juan Bosco mit Sitz hier."
        ]
    },
    "ar-u-trelew-cities-v2": {
        "desc": "Trelew, am 20. Oktober 1886 gegründet, ist eine Stadt mit rund 100.000 Einwohnern in der Provinz Chubut. Der Name bedeutet auf Walisisch „Stadt von Lewis“ – zu Ehren von Lewis Jones, einem Anführer der walisischen Kolonisten, die 1865 das Chubut-Tal besiedelten. Italienische und spanische Einwanderer prägten die spätere Entwicklung. Die Stadt ist Tor zur Halbinsel Valdés, einem UNESCO-Welterbe mit beeindruckender Tierwelt. Trelew beherbergt das renommierte Paläontologische Museum Egidio Feruglio (MEF), das eine der wichtigsten Sammlungen patagonischer Dinosaurierfossilien weltweit zeigt. Die walisische Kultur lebt in der Architektur, in den traditionellen Teesalons und im jährlichen Eisteddfod-Festival fort.",
        "facts": [
            "Am 20. Oktober 1886 gegründet.",
            "Rund 100.000 Einwohner.",
            "Name bedeutet auf Walisisch „Stadt von Lewis“.",
            "Paläontologisches Museum Egidio Feruglio mit Weltruf.",
            "Tor zur Halbinsel Valdés (UNESCO-Welterbe).",
            "Walisische Kultur weiterhin lebendig.",
            "Eisteddfod-Festival jährlich.",
            "Walisische Teesalons und Architektur."
        ]
    },
    "ar-u-puerto-madryn-cities-v2": {
        "desc": "Puerto Madryn, am 28. Juli 1865 gegründet, ist die Stadt, in der die ersten walisischen Siedler nach ihrer 8.000-Meilen-Reise an Bord des Schiffes Mimosa landeten. Heute leben rund 115.000 Menschen in dieser Hafenstadt am Golf Nuevo. Die Stadt ist eines der wichtigsten Tourismuszentren Patagoniens und Ausgangspunkt für Ausflüge zur Halbinsel Valdés, einem UNESCO-Welterbe seit 1999. Hier können Glattwale, Seelöwen, Magellanpinguine und Orcas beobachtet werden. Italienische und spanische Einwanderer trugen zur weiteren Entwicklung bei. Puerto Madryn ist auch Sitz des größten Aluminiumwerks Argentiniens (Aluar) und einer bedeutenden Fischereiindustrie.",
        "facts": [
            "Am 28. Juli 1865 von walisischen Siedlern gegründet.",
            "Rund 115.000 Einwohner.",
            "Tor zur Halbinsel Valdés (UNESCO-Welterbe).",
            "Glattwalbeobachtung von Juni bis Dezember.",
            "Größtes Aluminiumwerk Argentiniens (Aluar).",
            "Strand Playa El Doradillo bietet Walbeobachtung vom Ufer.",
            "Walisisches Geschichtsmuseum.",
            "Wichtigste Hafenstadt der Provinz Chubut."
        ]
    },
    "ar-u-esquel-cities-v2": {
        "desc": "Esquel, 1906 gegründet, liegt in den argentinischen Anden im Westen der Provinz Chubut auf 560 Metern Höhe und beheimatet rund 32.000 Einwohner. Die Stadt entwickelte sich aus einer kleinen walisischen Siedlung und wurde später durch italienische und spanische Einwanderer geprägt. Esquel ist berühmt als Ausgangspunkt für „La Trochita“, den historischen Schmalspurbahn Old Patagonian Express, der durch die patagonischen Steppen fährt. In der Nähe liegt der Nationalpark Los Alerces, ein UNESCO-Welterbe seit 2017, das uralte Lärchenwälder mit über 2.600 Jahre alten Bäumen schützt. Im Winter wird das Skigebiet La Hoya zum Anziehungspunkt. Die nahe walisische Siedlung Trevelin bewahrt die walisische Kultur des Tals.",
        "facts": [
            "1906 gegründet, auf 560 m Höhe in den Anden.",
            "Rund 32.000 Einwohner.",
            "Ausgangspunkt von „La Trochita“ (Old Patagonian Express).",
            "Nationalpark Los Alerces (UNESCO-Welterbe seit 2017).",
            "Skigebiet La Hoya im Winter aktiv.",
            "Lärchen mit über 2.600 Jahren Alter im Park.",
            "Nahe walisische Siedlung Trevelin.",
            "Italienische und walisische Einwandererwellen."
        ]
    },
    "ar-x-cordoba-cities-v2": {
        "desc": "Córdoba, am 6. Juli 1573 von Jerónimo Luis de Cabrera gegründet, ist mit rund 1,57 Millionen Einwohnern die zweitgrößte Stadt Argentiniens und Hauptstadt der gleichnamigen Provinz. Die Stadt im geografischen Herzen des Landes ist als „La Docta“ (die Gelehrte) bekannt, denn sie beherbergt die 1613 gegründete Universidad Nacional de Córdoba – die älteste Universität Argentiniens. Italienische und spanische Einwanderer prägten ab dem 19. Jahrhundert das moderne Stadtbild. Die historische Manzana Jesuítica mit ihrer Kirche, Universität und dem Colegio Monserrat wurde 2000 zum UNESCO-Welterbe erklärt. Córdoba ist Industriezentrum mit Automobil- und Flugzeugbau und Drehkreuz für den nationalen Tourismus, besonders zu den nahegelegenen Sierras de Córdoba.",
        "facts": [
            "Am 6. Juli 1573 von Jerónimo Luis de Cabrera gegründet.",
            "Rund 1,57 Millionen Einwohner, zweitgrößte Stadt Argentiniens.",
            "Universidad Nacional de Córdoba gegründet 1613.",
            "Manzana Jesuítica seit 2000 UNESCO-Welterbe.",
            "Beiname „La Docta“ – die Gelehrte.",
            "Wichtiges Automobil- und Flugzeugbauzentrum.",
            "Italienische Einwandererprägung ab dem 19. Jh.",
            "Tor zu den Sierras de Córdoba."
        ]
    },
    "ar-x-rio-cuarto-cities-v2": {
        "desc": "Río Cuarto, am 11. November 1786 vom Vizekönig Marqués de Loreto gegründet, ist die zweitgrößte Stadt der Provinz Córdoba mit rund 165.000 Einwohnern. Die Stadt liegt am gleichnamigen Fluss in einer der fruchtbarsten Agrarregionen Argentiniens. Italienische und spanische Einwanderer prägten ab Ende des 19. Jahrhunderts den Charakter dieser Pampa-Stadt. Río Cuarto entwickelte sich als wichtiges Bildungs- und Wirtschaftszentrum mit der Universidad Nacional de Río Cuarto (1971) und einer bedeutenden Lebensmittel- und Erdnussverarbeitungsindustrie. Die Region ist die wichtigste Erdnussproduzentin Argentiniens. Die Plaza Roca mit der Kathedrale und das Theater Municipal sind Wahrzeichen.",
        "facts": [
            "Am 11. November 1786 vom Marqués de Loreto gegründet.",
            "Rund 165.000 Einwohner.",
            "Wichtigste Erdnussregion Argentiniens.",
            "Universidad Nacional de Río Cuarto gegründet 1971.",
            "Italienische Einwandererprägung im späten 19. Jh.",
            "Theater Municipal als Wahrzeichen.",
            "Bedeutende Lebensmittelindustrie.",
            "Strategische Lage an der Route zwischen Córdoba und Mendoza."
        ]
    },
    "ar-x-villa-maria-cities-v2": {
        "desc": "Villa María, 1867 von Manuel Anselmo Ocampo gegründet, ist eine Stadt mit rund 80.000 Einwohnern in der Provinz Córdoba. Sie liegt am Río Tercero und entwickelte sich rasch zum wichtigen Bahnknotenpunkt zwischen Buenos Aires, Córdoba und Mendoza. Italienische, spanische und schweizerische Einwanderer prägten die Stadt entscheidend, insbesondere die piemontesische Gemeinde aus Norditalien. Villa María ist Zentrum einer der wichtigsten Milchwirtschaftsregionen Argentiniens. Bekannt ist die Stadt vor allem für ihr „Festival de Peñas“, eines der größten Folklorefestivals Argentiniens, das jedes Jahr im Februar Tausende Besucher anzieht. Die Universidad Nacional de Villa María (1995) ist eine wichtige Bildungseinrichtung der Region.",
        "facts": [
            "1867 von Manuel Anselmo Ocampo gegründet.",
            "Rund 80.000 Einwohner.",
            "Wichtige piemontesische italienische Einwandererprägung.",
            "Festival de Peñas gilt als eines der größten Folklorefestivals.",
            "Zentrum der Milchwirtschaft Argentiniens.",
            "Universidad Nacional de Villa María seit 1995.",
            "Strategischer Bahnknotenpunkt zwischen Buenos Aires und Mendoza.",
            "Liegt am Río Tercero in Córdoba."
        ]
    },
    "ar-x-villa-carlos-paz-cities-v2": {
        "desc": "Villa Carlos Paz, 1913 gegründet und nach dem Grundbesitzer Carlos Nicandro Paz benannt, ist mit rund 65.000 ständigen Einwohnern eines der wichtigsten Tourismuszentren Argentiniens. Im Sommer steigt die Bevölkerung durch Touristen auf über eine halbe Million. Die Stadt liegt am Lago San Roque in den Sierras Chicas der Provinz Córdoba. Italienische und spanische Einwanderer prägten die Anfänge. Wahrzeichen ist die riesige Cuckoo Clock-Uhr „Reloj Cucú“, eine 13 Meter hohe alpenländische Bauwerk-Skurrilität. Carlos Paz ist berühmt für seine Theaterproduktionen, die in der Sommersaison Stars aus Buenos Aires anziehen, sowie für sein lebendiges Nachtleben und seine Strände am Stausee.",
        "facts": [
            "1913 gegründet, benannt nach Carlos Nicandro Paz.",
            "Rund 65.000 Einwohner, im Sommer mehrere Hunderttausend Touristen.",
            "Wahrzeichen ist die 13 Meter hohe Reloj Cucú.",
            "Lebendige Theaterszene in der Sommersaison.",
            "Liegt am Lago San Roque in den Sierras Chicas.",
            "Italienische und spanische Einwandererprägung.",
            "Wichtiges Tourismuszentrum Argentiniens.",
            "Beliebt für Strände und Nachtleben."
        ]
    },
    "ar-x-san-francisco-cities-v2": {
        "desc": "San Francisco, am 9. September 1886 gegründet, ist eine Stadt mit rund 65.000 Einwohnern an der Grenze zwischen den Provinzen Córdoba und Santa Fe. Italienische, vor allem piemontesische und friulanische Einwanderer prägten die Stadt von Beginn an entscheidend. Diese italienische Identität ist bis heute spürbar in Architektur, Küche und Bräuchen. San Francisco entwickelte sich zu einem wichtigen Industriestandort, besonders im Maschinenbau, der Metallverarbeitung und der Lebensmittelindustrie. Die Stadt ist Bahnknotenpunkt und liegt strategisch zwischen Córdoba und Santa Fe. Das Theater Municipal und die Kathedrale prägen das Stadtzentrum, das jährlich verschiedene italienische Kulturfestivals veranstaltet.",
        "facts": [
            "Am 9. September 1886 gegründet.",
            "Rund 65.000 Einwohner.",
            "Starke piemontesische und friulanische italienische Prägung.",
            "Wichtiger Industriestandort für Maschinenbau.",
            "Strategischer Bahnknotenpunkt zwischen Córdoba und Santa Fe.",
            "Theater Municipal als Wahrzeichen.",
            "Italienische Kulturfestivals jährlich.",
            "Bedeutende Lebensmittelindustrie."
        ]
    },
    "ar-w-corrientes-cities-v2": {
        "desc": "San Juan de Vera de las Siete Corrientes, am 3. April 1588 von Juan Torres de Vera y Aragón gegründet, ist die Hauptstadt der Provinz Corrientes und beheimatet rund 360.000 Einwohner. Die Stadt liegt am Ostufer des Paraná, gegenüber von Resistencia. Sie ist eine der ältesten Städte Argentiniens und bewahrt eine reiche koloniale Architektur in ihrem historischen Zentrum. Spanische Kolonisten und später italienische Einwanderer prägten die Stadt, doch die Guaraní-Kultur ist hier besonders lebendig – Corrientes ist die einzige Provinz Argentiniens, in der Guaraní offizielle Co-Sprache ist. Die Stadt ist Hauptort des Karnevals von Corrientes, einer der bedeutendsten Karnevalsfeiern Südamerikas, und Heimat des Chamamé, einer traditionellen Musikrichtung.",
        "facts": [
            "Am 3. April 1588 von Juan Torres de Vera y Aragón gegründet.",
            "Rund 360.000 Einwohner.",
            "Hauptstadt der Provinz Corrientes.",
            "Guaraní ist offizielle Co-Sprache.",
            "Karneval von Corrientes mit nationaler Bedeutung.",
            "Heimat der Chamamé-Musik (UNESCO-Erbe seit 2020).",
            "Reiche koloniale Architektur im historischen Zentrum.",
            "Liegt am Ostufer des Paraná-Flusses."
        ]
    },
    "ar-w-goya-cities-v2": {
        "desc": "Goya, am 26. Juli 1807 als Pfarrei gegründet und 1852 zur Stadt erhoben, ist die zweitgrößte Stadt der Provinz Corrientes mit rund 80.000 Einwohnern. Sie liegt am Paraná-Fluss und ist berühmt als Zentrum des Sportfischens, besonders auf den Goldbarsch-Verwandten Surubí, Dorado und Pacú. Das jährliche Fiesta Nacional del Surubí im Mai zieht Tausende Sportfischer an. Italienische und spanische Einwanderer prägten die Stadt im 19. Jahrhundert. Goya ist außerdem ein wichtiges Tabakanbauzentrum und einer der bedeutendsten Häfen am unteren Paraná. Die historische Architektur, der Hafen und die ufernahen Plätze geben der Stadt ihren charakteristischen Charme.",
        "facts": [
            "1807 als Pfarrei gegründet, 1852 zur Stadt erhoben.",
            "Rund 80.000 Einwohner.",
            "Hauptstadt des Sportfischens in Argentinien.",
            "Fiesta Nacional del Surubí jährlich im Mai.",
            "Wichtiges Tabakanbauzentrum.",
            "Bedeutender Hafen am Paraná-Fluss.",
            "Italienische und spanische Einwandererwellen.",
            "Zweitgrößte Stadt der Provinz Corrientes."
        ]
    },
    "ar-w-paso-de-los-libres-cities-v2": {
        "desc": "Paso de los Libres, am 12. September 1843 nach der historischen Überquerung des Río Uruguay durch General Joaquín Madariaga benannt, ist eine Grenzstadt mit rund 50.000 Einwohnern in der Provinz Corrientes. Die Stadt ist über die internationale Brücke mit der brasilianischen Stadt Uruguaiana verbunden und stellt einen der wichtigsten Grenzübergänge zwischen Argentinien und Brasilien dar. Spanische Kolonisten und italienische Einwanderer prägten die Stadt. Der Karneval von Paso de los Libres mit seinen prächtigen Sambaschulen ist einer der größten und farbenprächtigsten Argentiniens. Die Stadt ist auch Zentrum für Reis- und Rinderzucht und ein wichtiger Bahnknotenpunkt im Mercosur-Handel.",
        "facts": [
            "Am 12. September 1843 nach der Madariaga-Überquerung benannt.",
            "Rund 50.000 Einwohner.",
            "Wichtigster Grenzübergang nach Brasilien (Uruguaiana).",
            "Spektakulärer Karneval mit Sambaschulen.",
            "Internationale Brücke über den Río Uruguay.",
            "Zentrum für Reis- und Rinderzucht.",
            "Bahnknotenpunkt im Mercosur-Handel.",
            "Italienische und spanische Einwandererwellen."
        ]
    },
    "ar-w-curuzu-cuatia-cities-v2": {
        "desc": "Curuzú Cuatiá, am 16. November 1810 von Manuel Belgrano gegründet, ist eine Stadt mit rund 35.000 Einwohnern im Süden der Provinz Corrientes. Der Name stammt aus dem Guaraní und bedeutet „beschriebenes Kreuz“ – nach einem Holzkreuz mit Inschriften, das Belgrano hier auf seinem Marsch nach Paraguay aufstellte. Italienische und spanische Einwanderer prägten die Stadt im 19. Jahrhundert. Sie ist ein bedeutendes Zentrum der Rinderzucht und liegt strategisch in einer der traditionsreichsten Estancia-Regionen Argentiniens. Die Plaza San Martín mit der Pfarrkirche und das historische Cabildo bilden das Zentrum. Die Stadt veranstaltet jährliche Folklorefestivals und Pferdesportveranstaltungen.",
        "facts": [
            "Am 16. November 1810 von Manuel Belgrano gegründet.",
            "Rund 35.000 Einwohner.",
            "Name bedeutet „beschriebenes Kreuz“ auf Guaraní.",
            "Wichtiges Zentrum der Rinderzucht.",
            "Strategisch in der Estancia-Region gelegen.",
            "Plaza San Martín mit historischer Pfarrkirche.",
            "Italienische und spanische Einwandererwellen.",
            "Jährliche Folklorefestivals und Pferderennen."
        ]
    },
    "ar-e-parana-cities-v2": {
        "desc": "Paraná, ursprünglich 1730 als Bajada del Paraná gegründet und 1813 zur Villa erhoben, ist die Hauptstadt der Provinz Entre Ríos und beheimatet rund 270.000 Einwohner. Die Stadt liegt malerisch auf einem Hügel über dem Paraná-Fluss, gegenüber von Santa Fe, mit der sie durch einen Untertunnel verbunden ist. Zwischen 1853 und 1861 war Paraná Hauptstadt der Argentinischen Konföderation unter Justo José de Urquiza. Italienische und spanische Einwanderer prägten ab dem 19. Jahrhundert die Stadt. Das historische Zentrum mit der Kathedrale, der Plaza 1° de Mayo und dem Teatro 3 de Febrero zeigt die elegante Architektur des 19. Jahrhunderts. Die Costanera mit ihren Stränden ist ein beliebter Erholungsort.",
        "facts": [
            "1730 gegründet, 1813 zur Villa erhoben.",
            "Rund 270.000 Einwohner.",
            "Hauptstadt der Argentinischen Konföderation 1853–1861.",
            "Liegt auf einem Hügel über dem Paraná-Fluss.",
            "Untertunnel verbindet die Stadt mit Santa Fe.",
            "Teatro 3 de Febrero im historischen Zentrum.",
            "Italienische und spanische Einwandererprägung.",
            "Beliebte Costanera mit Stränden."
        ]
    },
    "ar-e-concordia-cities-v2": {
        "desc": "Concordia, am 29. November 1832 gegründet, ist mit rund 175.000 Einwohnern die zweitgrößte Stadt der Provinz Entre Ríos. Sie liegt am Río Uruguay an der Grenze zu Uruguay. Die Stadt ist Hauptstadt der Zitrusfruchtproduktion Argentiniens, besonders Orangen und Mandarinen. Italienische und spanische, aber auch jüdisch-osteuropäische Einwanderer prägten Concordia – die jüdische Kolonie Villa Clara wurde von Baron Hirsch im 19. Jahrhundert gegründet. Sehenswert sind das Schloss San Carlos, ein verfallenes französisches Schloss in der Nähe, in dem Antoine de Saint-Exupéry seine Zeit verbrachte (Inspiration für „Der kleine Prinz“), und das Wasserkraftwerk Salto Grande, eines der größten Argentiniens.",
        "facts": [
            "Am 29. November 1832 gegründet.",
            "Rund 175.000 Einwohner.",
            "Hauptstadt der argentinischen Zitrusfruchtproduktion.",
            "Schloss San Carlos inspirierte „Der kleine Prinz“.",
            "Wasserkraftwerk Salto Grande, eines der größten Argentiniens.",
            "Jüdisch-osteuropäische Einwandererkolonie Villa Clara.",
            "Liegt am Río Uruguay, gegenüber Salto (Uruguay).",
            "Italienische und spanische Einwandererprägung."
        ]
    },
    "ar-e-gualeguaychu-cities-v2": {
        "desc": "Gualeguaychú, 1783 von Tomás de Rocamora gegründet, ist eine Stadt mit rund 110.000 Einwohnern im Süden der Provinz Entre Ríos. Sie ist berühmt für ihren Karneval, den größten und farbenprächtigsten Argentiniens, der jedes Wochenende von Januar bis März in einem speziell errichteten „Corsódromo“ stattfindet. Italienische und spanische Einwanderer prägten die Stadt im 19. Jahrhundert. Gualeguaychú liegt am gleichnamigen Fluss und ist beliebtes Touristenziel mit Stränden und Thermalquellen. Die Stadt war 2006 international in den Schlagzeilen wegen Protesten gegen den Bau von Zellstofffabriken am Río Uruguay, die von den Bürgern als Umweltbedrohung gesehen wurden.",
        "facts": [
            "1783 von Tomás de Rocamora gegründet.",
            "Rund 110.000 Einwohner.",
            "Größter Karneval Argentiniens jährlich Jan–März.",
            "Spezieller „Corsódromo“ für den Karneval.",
            "Beliebte Thermalquellen und Strände.",
            "2006 Proteste gegen Zellstofffabriken in Uruguay.",
            "Italienische und spanische Einwandererprägung.",
            "Liegt am gleichnamigen Fluss."
        ]
    },
    "ar-e-concepcion-del-uruguay-cities-v2": {
        "desc": "Concepción del Uruguay, 1783 von Tomás de Rocamora gegründet, ist eine Stadt mit rund 75.000 Einwohnern in der Provinz Entre Ríos. Sie liegt am Río Uruguay und war im 19. Jahrhundert ein wichtiges politisches Zentrum unter General Justo José de Urquiza. Hier befindet sich das Colegio Nacional, gegründet 1849, eine der ältesten Sekundarschulen Argentiniens, und der prächtige Palacio San José, Urquizas Wohnsitz, in dem er 1870 ermordet wurde. Italienische und spanische Einwanderer prägten die Stadt. Concepción ist Heimat der Universidad Nacional de Entre Ríos und einer aktiven Hafenwirtschaft. Die historische Plaza Ramírez mit der Basílica der Heiligen Empfängnis bildet das Zentrum.",
        "facts": [
            "1783 von Tomás de Rocamora gegründet.",
            "Rund 75.000 Einwohner.",
            "Colegio Nacional seit 1849, eine der ältesten Schulen.",
            "Palacio San José, Urquizas historischer Wohnsitz.",
            "Liegt am Río Uruguay.",
            "Universidad Nacional de Entre Ríos mit Sitz hier.",
            "Italienische und spanische Einwandererprägung.",
            "Plaza Ramírez mit Basílica."
        ]
    },
    "ar-p-formosa-cities-v2": {
        "desc": "Formosa, am 8. April 1879 von Luis Jorge Fontana gegründet, ist die Hauptstadt der gleichnamigen Provinz im argentinischen Chaco und beheimatet rund 235.000 Einwohner. Der Name kommt vom portugiesischen „formosa“ (schön) und bezieht sich auf die malerische Lage am Río Paraguay. Die Stadt ist Grenzstadt zu Paraguay – die Hauptstadt Asunción liegt nur wenige Kilometer entfernt. Italienische, spanische, paraguayische und osteuropäische Einwanderer prägten den Charakter. Formosa ist Hauptstadt einer subtropischen Region mit reicher indigener Vielfalt – Wichí, Toba und Pilagá leben in der Provinz. Die wichtigsten Wirtschaftszweige sind Baumwolle, Soja und Forstwirtschaft.",
        "facts": [
            "Am 8. April 1879 von Luis Jorge Fontana gegründet.",
            "Rund 235.000 Einwohner.",
            "Name bedeutet „schön“ auf Portugiesisch.",
            "Liegt am Río Paraguay an der paraguayischen Grenze.",
            "Reiche indigene Vielfalt: Wichí, Toba, Pilagá.",
            "Wichtige Baumwoll- und Sojaanbauregion.",
            "Hauptstadt der Provinz Formosa.",
            "Subtropisches Klima mit hohen Temperaturen."
        ]
    },
    "ar-p-clorinda-cities-v2": {
        "desc": "Clorinda, am 5. Dezember 1899 gegründet, ist mit rund 50.000 Einwohnern die zweitgrößte Stadt der Provinz Formosa und einer der wichtigsten Grenzübergänge zu Paraguay. Sie liegt nur wenige Kilometer von der paraguayischen Hauptstadt Asunción entfernt, mit der sie durch die Brücke San Ignacio de Loyola und mehrere Fährverbindungen verbunden ist. Italienische, spanische und paraguayische Einwanderer prägten die Stadt. Clorinda ist Hauptort des grenzüberschreitenden Handels und beherbergt einen der größten Märkte Nordargentiniens. Die Stadt wurde wegen häufiger Überschwemmungen des Río Pilcomayo und Paraguay teilweise neu organisiert. Die Cohabitation der Kulturen ist hier besonders stark spürbar.",
        "facts": [
            "Am 5. Dezember 1899 gegründet.",
            "Rund 50.000 Einwohner.",
            "Wichtiger Grenzübergang nach Paraguay.",
            "Brücke San Ignacio de Loyola nach Asunción.",
            "Großer Markt für grenzüberschreitenden Handel.",
            "Häufige Überschwemmungen des Río Pilcomayo.",
            "Italienische und paraguayische Einwandererprägung.",
            "Subtropisches Klima mit reicher Vegetation."
        ]
    },
    "ar-y-san-salvador-de-jujuy-cities-v2": {
        "desc": "San Salvador de Jujuy, am 19. April 1593 von Francisco de Argañaraz y Murguía gegründet, ist die Hauptstadt der Provinz Jujuy im Nordwesten Argentiniens. Die Stadt mit rund 280.000 Einwohnern liegt auf 1.260 Metern Höhe am Zusammenfluss der Flüsse Grande und Xibi Xibi. Sie ist Tor zur farbigen Quebrada de Humahuaca, einem UNESCO-Welterbe seit 2003. Spanische Kolonisten gründeten die Stadt strategisch am Ende des Inka-Wegs Camino Real. Italienische Einwanderer trugen später zum Wachstum bei. Die andine Kultur mit Quechua- und Aymara-Einflüssen ist stark präsent. Die Kathedrale (1763) mit ihrem in Cusco geschnitzten Altar und der Cabildo am Plaza Belgrano sind historische Wahrzeichen.",
        "facts": [
            "Am 19. April 1593 von Argañaraz y Murguía gegründet.",
            "Rund 280.000 Einwohner.",
            "Liegt auf 1.260 m Höhe.",
            "Tor zur Quebrada de Humahuaca (UNESCO-Welterbe).",
            "Strategisch am Inka-Camino-Real gelegen.",
            "Kathedrale aus dem Jahr 1763.",
            "Andine Kultur mit Quechua- und Aymara-Einflüssen.",
            "Hauptstadt der Provinz Jujuy."
        ]
    },
    "ar-y-san-pedro-de-jujuy-cities-v2": {
        "desc": "San Pedro de Jujuy, 1883 gegründet, ist mit rund 75.000 Einwohnern die zweitgrößte Stadt der Provinz Jujuy. Sie liegt im fruchtbaren Tal des Río Grande und ist Hauptstadt einer der wichtigsten Zuckerrohranbauregionen Argentiniens. Die Geschichte der Stadt ist eng mit der Zuckerfabrik La Esperanza verbunden, einer der ältesten und größten des Landes, die im 19. Jahrhundert von der britischen Familie Leach gegründet wurde. Spanische, italienische und osteuropäische Einwanderer prägten die Bevölkerung, ebenso indigene Andinos. Die Plaza San Martín mit der Kirche und das Theater Mitre sind die wichtigsten städtischen Wahrzeichen. Die Stadt veranstaltet jährliche Folklorefestivals.",
        "facts": [
            "1883 gegründet.",
            "Rund 75.000 Einwohner.",
            "Wichtigste Zuckerrohranbauregion der Provinz.",
            "Zuckerfabrik La Esperanza seit dem 19. Jahrhundert.",
            "Britische Familie Leach gründete die Fabrik.",
            "Liegt im fruchtbaren Tal des Río Grande.",
            "Italienische und osteuropäische Einwandererwellen.",
            "Folklorefestivals jährlich."
        ]
    },
    "ar-y-palpala-cities-v2": {
        "desc": "Palpalá, 1949 als Stadt gegründet, hat rund 53.000 Einwohner und liegt nur wenige Kilometer südlich von San Salvador de Jujuy. Die Stadt entwickelte sich um das größte Stahlwerk Argentiniens, Altos Hornos Zapla, das 1945 unter Präsident Perón eröffnet wurde und auf der Grundlage lokaler Eisenerzlagerstätten produziert. Spanische, italienische, kroatische und ostpolnische Einwanderer kamen, um in der Stahlindustrie zu arbeiten, was Palpalá zu einer multikulturellen Industriestadt machte. Die andine Kultur ist ebenfalls präsent. Die Stadt verfügt über ein Industriemuseum, das die Geschichte der argentinischen Stahlproduktion dokumentiert, und mehrere Sportvereine, die für die nationale Meisterschaft Athleten hervorbringen.",
        "facts": [
            "1949 als Stadt gegründet.",
            "Rund 53.000 Einwohner.",
            "Stahlwerk Altos Hornos Zapla seit 1945.",
            "Eines der ersten staatlichen Stahlwerke Argentiniens.",
            "Liegt nahe San Salvador de Jujuy.",
            "Kroatische, polnische, italienische Einwandererwellen.",
            "Industriemuseum zur Stahlgeschichte.",
            "Multikulturelle Bevölkerungszusammensetzung."
        ]
    },
    "ar-l-santa-rosa-cities-v2": {
        "desc": "Santa Rosa, am 22. April 1892 vom spanischen Kolonisten Tomás Mason gegründet, ist die Hauptstadt der Provinz La Pampa und beheimatet rund 115.000 Einwohner. Sie liegt im Herzen der argentinischen Pampa, einer der fruchtbarsten Agrarregionen der Welt. Italienische, spanische und osteuropäische Einwanderer prägten ab Ende des 19. Jahrhunderts die Stadt. Santa Rosa ist eine planmäßig angelegte Stadt mit breiten Straßen und mehreren Plätzen. Sie beherbergt die Universidad Nacional de La Pampa und ist bedeutendes Zentrum der Rinder- und Getreidewirtschaft. Der nahegelegene Nationalpark Lihué Calel mit seinen niedrigen Bergen und einzigartiger Flora ist ein wichtiges Schutzgebiet.",
        "facts": [
            "Am 22. April 1892 von Tomás Mason gegründet.",
            "Rund 115.000 Einwohner.",
            "Hauptstadt der Provinz La Pampa.",
            "Universidad Nacional de La Pampa.",
            "Bedeutende Rinder- und Getreidewirtschaft.",
            "Italienische und osteuropäische Einwandererprägung.",
            "Nationalpark Lihué Calel in der Nähe.",
            "Planmäßig angelegt mit breiten Straßen."
        ]
    },
    "ar-l-general-pico-cities-v2": {
        "desc": "General Pico, am 11. November 1905 gegründet, ist mit rund 60.000 Einwohnern die zweitgrößte Stadt der Provinz La Pampa. Die Stadt wurde nach dem Bau der Eisenbahn als Knotenpunkt gegründet und ist nach dem ehemaligen Vizepräsidenten Francisco Bernabé Madero Pico benannt. Italienische, spanische und osteuropäische Einwanderer prägten den Charakter dieser typischen Pampa-Stadt. General Pico ist heute ein bedeutendes Industrie- und Handelszentrum mit besonderem Schwerpunkt auf Lebensmittelverarbeitung und Maschinenbau. Die Universidad Nacional de La Pampa unterhält hier einen wichtigen Campus. Die rechtwinklig angelegten Straßen und großen Plätze sind typisch für die agrarische Stadtplanung der Pampa des frühen 20. Jahrhunderts.",
        "facts": [
            "Am 11. November 1905 gegründet.",
            "Rund 60.000 Einwohner.",
            "Benannt nach Vizepräsident Madero Pico.",
            "Zweitgrößte Stadt der Provinz La Pampa.",
            "Bedeutende Lebensmittelverarbeitungsindustrie.",
            "Italienische und osteuropäische Einwandererwellen.",
            "Universidad Nacional de La Pampa Campus.",
            "Typische Pampa-Stadtplanung mit Rastersystem."
        ]
    },
    "ar-f-la-rioja-cities-v2": {
        "desc": "La Rioja, eigentlich „Todos los Santos de la Nueva Rioja“, am 20. Mai 1591 von Juan Ramírez de Velasco gegründet, ist die Hauptstadt der gleichnamigen Provinz im Nordwesten Argentiniens und beheimatet rund 200.000 Einwohner. Die Stadt liegt am Fuß der Sierra de Velasco auf 500 Metern Höhe. Sie ist berühmt für die Tinkunaco-Zeremonie, ein religiös-kulturelles Fest, das die Versöhnung zwischen indigener und spanischer Kultur symbolisiert. Spanische Kolonisten und später italienische und arabische (syrisch-libanesische) Einwanderer prägten die Stadt. La Rioja ist Heimat zahlreicher historischer Kirchen und Konvente, darunter das franziskanische Kloster aus dem 17. Jahrhundert mit dem als wundertätig verehrten Santo Niño Alcalde.",
        "facts": [
            "Am 20. Mai 1591 von Ramírez de Velasco gegründet.",
            "Rund 200.000 Einwohner.",
            "Hauptstadt der Provinz La Rioja.",
            "Tinkunaco-Zeremonie als kulturelles Erbe.",
            "Franziskanerkloster aus dem 17. Jahrhundert.",
            "Santo Niño Alcalde, lokal verehrtes Heiligenbild.",
            "Italienische und arabische Einwanderergemeinden.",
            "Liegt auf 500 m Höhe am Fuß der Sierra de Velasco."
        ]
    },
    "ar-f-chilecito-cities-v2": {
        "desc": "Chilecito, 1715 als Santa Rita de Casia de los Sauces gegründet, ist mit rund 50.000 Einwohnern die zweitgrößte Stadt der Provinz La Rioja. Der Name „Chilecito“ („Klein-Chile“) entstand im 19. Jahrhundert wegen der vielen chilenischen Bergleute, die hier in den Goldminen arbeiteten. Die Stadt liegt malerisch auf 1.075 Metern Höhe am Fuße des Cerro Famatina, eines majestätischen 6.250 Meter hohen Andengipfels. Spanische, italienische und chilenische Einwanderer prägten die Stadt. Chilecito war Schauplatz der weltberühmten „Cablecarril“, einer 35 km langen Seilbahn, die 1903–1929 Erz aus den Bergwerken zu Tal beförderte. Die Region ist heute auch ein bedeutendes Weinanbaugebiet.",
        "facts": [
            "1715 als Santa Rita de Casia de los Sauces gegründet.",
            "Rund 50.000 Einwohner.",
            "Liegt auf 1.075 m Höhe.",
            "Cablecarril (Seilbahn) 35 km lang, 1903–1929 in Betrieb.",
            "Cerro Famatina ragt auf 6.250 m empor.",
            "Wichtiges Weinanbaugebiet (Torrontés-Trauben).",
            "Chilenische Bergleute prägten den Namen.",
            "Italienische und spanische Einwandererprägung."
        ]
    },
    "ar-m-mendoza-cities-v2": {
        "desc": "Mendoza, am 2. März 1561 von Pedro del Castillo gegründet, ist mit rund 115.000 Einwohnern in der Stadt selbst (Großraum über 1 Million) die Hauptstadt der gleichnamigen Provinz. Sie liegt am Fuß der Anden auf 750 Metern Höhe. Nach dem verheerenden Erdbeben von 1861, das die alte Stadt vollständig zerstörte, wurde Mendoza nach modernen seismischen Prinzipien neu erbaut – mit breiten Straßen, niedrigen Gebäuden und vier riesigen Plätzen um den Plaza Independencia. Italienische und spanische Einwanderer prägten den Wein- und Olivenanbau, der Mendoza zur Weinhauptstadt Argentiniens und zum bedeutendsten Malbec-Produzenten der Welt machte. Die Stadt liegt am Beginn der Hochstraße zum Aconcagua, dem höchsten Berg Amerikas (6.961 m).",
        "facts": [
            "Am 2. März 1561 von Pedro del Castillo gegründet.",
            "Rund 115.000 Einwohner, Großraum über 1 Million.",
            "1861 durch Erdbeben fast völlig zerstört.",
            "Weinhauptstadt Argentiniens, weltgrößter Malbec-Produzent.",
            "Liegt auf 750 m Höhe am Fuße der Anden.",
            "Nahe dem Aconcagua (6.961 m), höchster Berg Amerikas.",
            "Starke italienische Einwandererprägung.",
            "Plaza Independencia mit vier umliegenden Plätzen."
        ]
    },
    "ar-m-san-rafael-cities-v2": {
        "desc": "San Rafael, am 2. Oktober 1903 gegründet, ist mit rund 130.000 Einwohnern die zweitgrößte Stadt der Provinz Mendoza. Sie liegt auf 690 Metern Höhe in einer fruchtbaren Oase zwischen den Flüssen Atuel und Diamante. Italienische, spanische und französische Einwanderer prägten ab Beginn des 20. Jahrhunderts den Wein- und Obstanbau. San Rafael ist heute eines der wichtigsten Wein- und Olivenanbaugebiete Argentiniens. In der Nähe befindet sich der spektakuläre Cañón del Atuel, eine der schönsten Schluchten Argentiniens, sowie zahlreiche Stauseen und Skigebiete (Las Leñas). Die Stadt ist beliebtes Tourismusziel mit Wein-Touren und Outdoor-Aktivitäten wie Rafting und Klettern.",
        "facts": [
            "Am 2. Oktober 1903 gegründet.",
            "Rund 130.000 Einwohner.",
            "Wichtiges Wein- und Olivenanbaugebiet.",
            "Liegt zwischen Río Atuel und Río Diamante.",
            "Cañón del Atuel als Touristenattraktion.",
            "Skigebiet Las Leñas in der Nähe.",
            "Italienische und französische Einwandererprägung.",
            "Beliebt für Rafting und Outdoor-Aktivitäten."
        ]
    },
    "ar-m-godoy-cruz-cities-v2": {
        "desc": "Godoy Cruz, 1855 als San Vicente gegründet und 1920 nach dem Unabhängigkeitskämpfer Tomás Godoy Cruz benannt, ist mit rund 200.000 Einwohnern die zweitgrößte Stadt der Provinz Mendoza nach der Hauptstadt selbst. Sie ist Teil des Großraums Mendoza und mit dieser zusammengewachsen. Italienische und spanische Einwanderer prägten die Stadt entscheidend, besonders im Wein- und Olivenanbau. Godoy Cruz ist Sitz mehrerer renommierter Weinkellereien und einer bedeutenden Industrie. Der Estadio Malvinas Argentinas, eines der Hauptstadien der Fußballweltmeisterschaft 1978, befindet sich hier. Die Stadt ist außerdem Heimat des Fußballvereins Club Deportivo Godoy Cruz, der 2009 Vize-Meister Argentiniens wurde.",
        "facts": [
            "1855 als San Vicente gegründet.",
            "1920 zu Ehren von Tomás Godoy Cruz umbenannt.",
            "Rund 200.000 Einwohner.",
            "Estadio Malvinas Argentinas (WM 1978).",
            "Italienische Einwandererprägung im Weinbau.",
            "Sitz wichtiger Weinkellereien.",
            "Fußballverein Godoy Cruz Antonio Tomba.",
            "Teil des Großraums Mendoza."
        ]
    },
    "ar-m-lujan-de-cuyo-cities-v2": {
        "desc": "Luján de Cuyo, 1855 gegründet, ist mit rund 130.000 Einwohnern eine der wichtigsten Weinanbauregionen Argentiniens und gilt als „Hauptstadt des Malbec“. Die Stadt liegt im Großraum Mendoza am Fluss Mendoza auf etwa 950 Metern Höhe. Italienische und spanische Einwanderer brachten ab Ende des 19. Jahrhunderts ihre Kelltertradition mit und etablierten Weinkellereien wie Catena Zapata, Norton und Achaval-Ferrer, die heute Weltruhm genießen. Luján de Cuyo war 1989 die erste argentinische Region, die eine offizielle Weinappellation erhielt – die DOC Luján de Cuyo. Die Stadt ist auch Sitz einer der wichtigsten Erdölraffinerien Argentiniens.",
        "facts": [
            "1855 gegründet.",
            "Rund 130.000 Einwohner.",
            "Hauptstadt des Malbec-Weins Argentiniens.",
            "Erste DOC Argentiniens 1989.",
            "Bedeutende Weinkellereien: Catena Zapata, Norton.",
            "Italienische und spanische Einwandererprägung.",
            "Liegt auf 950 m Höhe.",
            "Wichtige Erdölraffinerie."
        ]
    },
    "ar-n-posadas-cities-v2": {
        "desc": "Posadas, 1879 gegründet und 1894 zur Hauptstadt der Provinz Misiones erhoben, beheimatet rund 320.000 Einwohner und liegt am Río Paraná, gegenüber der paraguayischen Stadt Encarnación. Die Stadt entwickelte sich aus einer 1615 von den Jesuiten gegründeten Mission. Sie ist über die Brücke San Roque González de Santa Cruz mit Paraguay verbunden. Italienische, spanische, deutsche, ukrainische und polnische Einwanderer prägten ab Ende des 19. Jahrhunderts die multikulturelle Bevölkerung. Posadas ist Tor zu den Jesuiten-Reduktionen (UNESCO-Welterbe seit 1984) und zu den weltberühmten Iguazú-Wasserfällen. Die Stadt ist auch Zentrum der argentinischen Yerba-Mate-Produktion und beherbergt eine reiche guaranische Kultur.",
        "facts": [
            "1879 gegründet, 1894 Hauptstadt von Misiones.",
            "Rund 320.000 Einwohner.",
            "Liegt am Río Paraná, gegenüber Encarnación (Paraguay).",
            "Tor zu den Jesuiten-Reduktionen (UNESCO-Welterbe).",
            "Wichtigstes Yerba-Mate-Produktionszentrum.",
            "Multikulturell mit deutscher und osteuropäischer Prägung.",
            "Brücke San Roque González nach Paraguay.",
            "Reiche Guaraní-Kultur."
        ]
    },
    "ar-n-obera-cities-v2": {
        "desc": "Oberá, 1928 gegründet, ist mit rund 70.000 Einwohnern die zweitgrößte Stadt der Provinz Misiones. Die Stadt ist berühmt für ihre außergewöhnliche kulturelle Vielfalt – mehr als 18 Einwanderergruppen aus aller Welt siedelten sich hier ab den 1920er-Jahren an, darunter Schweden, Deutsche, Polen, Ukrainer, Japaner, Italiener und Schweizer. Diese Vielfalt feiert die Stadt jährlich im September mit dem „Fiesta Nacional del Inmigrante“ im „Parque de las Naciones“, in dem jede Gemeinschaft ein eigenes Pavillon mit traditioneller Architektur und Küche unterhält. Oberá ist außerdem Hauptstadt des „Té-Anbaus“ (Schwarztee) Argentiniens und liegt im subtropischen Atlantischen Regenwald.",
        "facts": [
            "1928 gegründet.",
            "Rund 70.000 Einwohner.",
            "Mehr als 18 Einwanderergemeinschaften.",
            "Fiesta Nacional del Inmigrante jährlich im September.",
            "Parque de las Naciones mit eigenen Pavillons.",
            "Hauptstadt des argentinischen Tee-Anbaus.",
            "Subtropisches Klima im Atlantischen Regenwald.",
            "Schwedische, ukrainische und japanische Gemeinden."
        ]
    },
    "ar-n-eldorado-cities-v2": {
        "desc": "Eldorado, 1919 gegründet vom deutschen Unternehmer Adolfo Schwelm, ist eine Stadt mit rund 75.000 Einwohnern in der Provinz Misiones. Schwelm warb in Deutschland, Österreich und der Schweiz für die Besiedlung der subtropischen Regenwaldregion am Río Paraná. Daher ist die deutsche und schweizerische Prägung der Stadt bis heute spürbar: viele Familien sprechen noch Deutsch, und es gibt deutsche Schulen, Vereine und Restaurants. Auch ukrainische, polnische und italienische Einwanderer kamen hinzu. Eldorado ist Zentrum der Yerba-Mate- und Forstwirtschaftsindustrie. Die Stadt liegt im Atlantischen Regenwald, einer der biologisch vielfältigsten Regionen der Welt.",
        "facts": [
            "1919 von Adolfo Schwelm gegründet.",
            "Rund 75.000 Einwohner.",
            "Starke deutsche und schweizerische Prägung.",
            "Deutsche Schulen, Vereine und Restaurants.",
            "Zentrum der Yerba-Mate-Industrie.",
            "Liegt im Atlantischen Regenwald.",
            "Ukrainische und polnische Einwandererwellen.",
            "Wichtige Forstwirtschaftsindustrie."
        ]
    },
    "ar-n-puerto-iguazu-cities-v2": {
        "desc": "Puerto Iguazú, am 10. September 1901 als Puerto Aguirre gegründet, ist mit rund 82.000 Einwohnern eine Grenzstadt im äußersten Nordosten Argentiniens. Sie liegt am Zusammenfluss von Río Iguazú und Río Paraná, an der Dreiländerecke Argentinien-Brasilien-Paraguay. Die Stadt ist Tor zu den weltberühmten Iguazú-Wasserfällen, einem UNESCO-Welterbe seit 1984 und einem der sieben Naturwunder der Welt. Über 275 Wasserfälle ergießen sich an einer 2,7 km breiten Front. Italienische, spanische und deutsche Einwanderer prägten die Stadt. Puerto Iguazú ist auch der argentinische Anfangspunkt der Brücke Tancredo Neves nach Brasilien. Die guaranische Kultur ist hier besonders stark präsent.",
        "facts": [
            "Am 10. September 1901 gegründet.",
            "Rund 82.000 Einwohner.",
            "Liegt an der Dreiländerecke AR-BR-PY.",
            "Tor zu den Iguazú-Wasserfällen (UNESCO-Welterbe).",
            "Eines der sieben Naturwunder der Welt.",
            "275 Wasserfälle an 2,7 km breiter Front.",
            "Brücke Tancredo Neves nach Brasilien.",
            "Reiche guaranische Kultur."
        ]
    },
    "ar-q-neuquen-cities-v2": {
        "desc": "Neuquén, am 12. September 1904 gegründet, ist die Hauptstadt der gleichnamigen Provinz und beheimatet rund 235.000 Einwohner. Sie liegt am Zusammenfluss der Flüsse Neuquén und Limay, die hier den Río Negro bilden. Die Stadt ist die größte Patagoniens und Wirtschaftszentrum der wichtigsten Erdöl- und Gasregion Argentiniens, einschließlich des Vaca-Muerta-Schiefergasvorkommens, eines der größten der Welt. Italienische, spanische und chilenische Einwanderer prägten die Bevölkerung. Neuquén ist Tor zur patagonischen Andenregion mit Skigebieten wie Cerro Bayo und zum Nationalpark Lanín. Die Mapuche-Kultur ist in der Region besonders lebendig. Die Universidad Nacional del Comahue ist eine wichtige Bildungseinrichtung Patagoniens.",
        "facts": [
            "Am 12. September 1904 gegründet.",
            "Rund 235.000 Einwohner, größte Stadt Patagoniens.",
            "Hauptstadt der Provinz Neuquén.",
            "Wichtigstes Erdöl- und Gaszentrum Argentiniens.",
            "Vaca Muerta, eines der größten Schiefergasvorkommen.",
            "Tor zur patagonischen Andenregion.",
            "Mapuche-Kultur lebendig.",
            "Universidad Nacional del Comahue."
        ]
    },
    "ar-q-san-martin-de-los-andes-cities-v2": {
        "desc": "San Martín de los Andes, am 4. Februar 1898 gegründet, ist eine Bergstadt mit rund 32.000 Einwohnern in der Provinz Neuquén. Sie liegt malerisch am Ostufer des Lago Lácar auf 640 Metern Höhe in den argentinischen Anden. Die Stadt ist eines der wichtigsten Tourismuszentren Patagoniens und Ausgangspunkt zum Nationalpark Lanín. Die Architektur ist alpenländisch geprägt – Holz, Stein und Schiefer dominieren –, was ihr den Beinamen „kleines Bariloche“ einbrachte. Italienische, deutsche, schweizerische und chilenische Einwanderer prägten die Stadt. Skigebiet Cerro Chapelco, Wandern, Fischen und das Mapuche-Kulturerbe der Region machen die Stadt das ganze Jahr über attraktiv.",
        "facts": [
            "Am 4. Februar 1898 gegründet.",
            "Rund 32.000 Einwohner.",
            "Liegt am Lago Lácar auf 640 m Höhe.",
            "Tor zum Nationalpark Lanín.",
            "Skigebiet Cerro Chapelco.",
            "Alpenländische Architektur.",
            "Deutsche und schweizerische Einwandererprägung.",
            "Reiches Mapuche-Kulturerbe."
        ]
    },
    "ar-q-zapala-cities-v2": {
        "desc": "Zapala, am 12. Juli 1913 gegründet, ist mit rund 38.000 Einwohnern die viertgrößte Stadt der Provinz Neuquén. Die Stadt liegt strategisch an der Kreuzung wichtiger Verkehrswege in der patagonischen Steppe auf 1.012 Metern Höhe. Sie ist ein bedeutender Bahn- und Straßenknotenpunkt zwischen der Hauptstadt Neuquén, den Andengipfeln und Chile. Italienische, spanische, libanesische und chilenische Einwanderer prägten die Bevölkerung. Zapala ist Wirtschaftszentrum der Bergbauregion (Bentonit, Kaolin) und der Schafzucht. Das nahe gelegene Naturschutzgebiet Laguna Blanca, ein Ramsar-Gebiet, schützt eine wichtige Brutstätte für Schwarzhalsschwäne und andere Wasservögel.",
        "facts": [
            "Am 12. Juli 1913 gegründet.",
            "Rund 38.000 Einwohner.",
            "Liegt auf 1.012 m Höhe in der patagonischen Steppe.",
            "Wichtiger Bahn- und Straßenknotenpunkt.",
            "Bedeutendes Bergbauzentrum (Bentonit, Kaolin).",
            "Naturschutzgebiet Laguna Blanca (Ramsar-Gebiet).",
            "Schwarzhalsschwan-Brutstätte.",
            "Italienische und libanesische Einwanderergemeinden."
        ]
    },
    "ar-q-cutral-co-cities-v2": {
        "desc": "Cutral-Có, am 22. Oktober 1933 gegründet, ist eine Stadt mit rund 35.000 Einwohnern in der Provinz Neuquén. Der Name stammt aus dem Mapuche und bedeutet „Feuerwasser“ – ein Hinweis auf das Erdöl, das hier 1918 erstmals gefunden wurde. Die Stadt entstand als Erdölarbeitersiedlung der staatlichen YPF und ist eng mit Plaza Huincul verbunden, mit der sie eine Doppelstadt bildet. Italienische, spanische, syrisch-libanesische und chilenische Einwanderer prägten die multikulturelle Bevölkerung. Cutral-Có wurde 1996 international bekannt durch die Pickets der „Piqueteros“-Bewegung gegen die Privatisierung von YPF. Die Stadt ist heute Zentrum der Vaca-Muerta-Schiefergasförderung.",
        "facts": [
            "Am 22. Oktober 1933 gegründet.",
            "Rund 35.000 Einwohner.",
            "Name bedeutet „Feuerwasser“ auf Mapuche.",
            "1918 wurde hier erstmals Erdöl gefunden.",
            "Doppelstadt mit Plaza Huincul.",
            "1996 Ursprung der „Piqueteros“-Bewegung.",
            "Zentrum der Vaca-Muerta-Schiefergasförderung.",
            "Italienische und libanesische Einwandererwellen."
        ]
    },
    "ar-r-viedma-cities-v2": {
        "desc": "Viedma, am 22. April 1779 von Francisco de Viedma y Narváez gegründet, ist die Hauptstadt der Provinz Río Negro und beheimatet rund 80.000 Einwohner. Sie liegt am Südufer des Río Negro, gegenüber von Carmen de Patagones (Provinz Buenos Aires) und etwa 30 km vom Atlantik entfernt. Viedma ist die älteste Siedlung Patagoniens und war 1986 fast zur neuen Hauptstadt Argentiniens erklärt worden – ein Plan unter Präsident Alfonsín, der jedoch nicht umgesetzt wurde. Spanische Kolonisten, italienische und deutsche Einwanderer prägten die Bevölkerung. Die Stadt verfügt über eine elegante Costanera, die Plaza Alsina mit der Kathedrale und ist Tor zu den Stränden des Atlantiks (El Cóndor, Bahía Creek).",
        "facts": [
            "Am 22. April 1779 von Francisco de Viedma gegründet.",
            "Rund 80.000 Einwohner.",
            "Hauptstadt der Provinz Río Negro.",
            "Älteste Siedlung Patagoniens.",
            "1986 fast neue Hauptstadt Argentiniens geworden.",
            "Liegt am Río Negro, 30 km vom Atlantik.",
            "Italienische und deutsche Einwandererprägung.",
            "Strände El Cóndor und Bahía Creek in der Nähe."
        ]
    },
    "ar-r-san-carlos-de-bariloche-cities-v2": {
        "desc": "San Carlos de Bariloche, am 3. Mai 1902 gegründet, ist eine Stadt mit rund 135.000 Einwohnern am Ufer des Lago Nahuel Huapi in den argentinischen Anden auf 770 Metern Höhe. Sie ist eines der wichtigsten Tourismuszentren Argentiniens und berühmt für ihre alpenländisch geprägte Architektur, die hauptsächlich von deutschen, schweizerischen und österreichischen Einwanderern aus dem späten 19. Jahrhundert eingeführt wurde. Italienische und spanische Einwanderer prägten ebenfalls die Bevölkerung. Bariloche liegt im ältesten Nationalpark Argentiniens (Nahuel Huapi, gegründet 1934) und ist ein bedeutendes Skigebiet (Cerro Catedral). Die Stadt gilt als „Schokoladenhauptstadt“ Argentiniens dank vieler traditioneller Schokoladenfabriken.",
        "facts": [
            "Am 3. Mai 1902 gegründet.",
            "Rund 135.000 Einwohner.",
            "Liegt am Lago Nahuel Huapi auf 770 m Höhe.",
            "Älterster Nationalpark Argentiniens (1934).",
            "Skigebiet Cerro Catedral.",
            "Starke deutsche und schweizerische Einwandererprägung.",
            "„Schokoladenhauptstadt“ Argentiniens.",
            "Wichtigstes Tourismuszentrum der Anden."
        ]
    },
    "ar-r-general-roca-cities-v2": {
        "desc": "General Roca, am 1. September 1879 gegründet und nach General Julio Argentino Roca benannt, ist eine Stadt mit rund 95.000 Einwohnern in der Provinz Río Negro. Sie liegt im fruchtbaren Tal des Río Negro, einer der wichtigsten Obstanbauregionen Argentiniens, besonders für Äpfel und Birnen. Italienische, spanische und osteuropäische Einwanderer prägten ab Anfang des 20. Jahrhunderts die Bevölkerung. General Roca ist Wirtschaftszentrum des „Alto Valle“ und Sitz der Universidad Nacional del Comahue. Die Stadt war ursprünglich eine Militärsiedlung im Rahmen der „Wüstenkampagne“ (Conquista del Desierto). Die Mapuche-Kultur ist in der Region historisch präsent.",
        "facts": [
            "Am 1. September 1879 gegründet.",
            "Rund 95.000 Einwohner.",
            "Benannt nach General Julio A. Roca.",
            "Wichtigste Obstanbauregion (Äpfel, Birnen) Argentiniens.",
            "Universidad Nacional del Comahue Campus.",
            "Italienische und osteuropäische Einwandererprägung.",
            "Liegt im „Alto Valle“ des Río Negro.",
            "Ursprünglich Militärsiedlung der Conquista del Desierto."
        ]
    },
    "ar-r-cipolletti-cities-v2": {
        "desc": "Cipolletti, am 3. Oktober 1903 gegründet und nach dem italienischen Ingenieur Cesare Cipolletti benannt, der das Bewässerungssystem des Tals entwarf, ist eine Stadt mit rund 90.000 Einwohnern in der Provinz Río Negro. Sie liegt am Zusammenfluss von Río Limay und Río Neuquén, gegenüber der Stadt Neuquén, mit der sie eine Metropolregion bildet. Cipolletti ist Zentrum der wichtigsten Obstanbauregion Argentiniens. Italienische, spanische und chilenische Einwanderer prägten die Bevölkerung. Die Stadt veranstaltet jährlich die „Fiesta Nacional de la Pera“, das nationale Birnenfest. Cipolletti ist Bahnknotenpunkt und wirtschaftlich eng mit der Erdölförderung in Vaca Muerta verbunden.",
        "facts": [
            "Am 3. Oktober 1903 gegründet.",
            "Rund 90.000 Einwohner.",
            "Benannt nach dem italienischen Ingenieur Cesare Cipolletti.",
            "Zentrum der wichtigsten Obstanbauregion Argentiniens.",
            "Fiesta Nacional de la Pera (Birnenfest).",
            "Liegt am Zusammenfluss von Limay und Neuquén.",
            "Italienische und chilenische Einwandererprägung.",
            "Eng mit Vaca-Muerta-Erdölförderung verbunden."
        ]
    },
    "ar-a-salta-cities-v2": {
        "desc": "Salta, am 16. April 1582 von Hernando de Lerma gegründet, ist die Hauptstadt der gleichnamigen Provinz und beheimatet rund 620.000 Einwohner. Die Stadt liegt im Lerma-Tal auf 1.187 Metern Höhe am Fuße der Anden und trägt den Beinamen „Salta la Linda“ (das schöne Salta) wegen ihrer hervorragend erhaltenen kolonialen Architektur. Spanische Kolonisten und später italienische und arabische (syrisch-libanesische) Einwanderer prägten die Bevölkerung. Die Stadt ist Tor zur farbigen Quebrada de Cafayate und zu den Wolkenstraßen der Anden. Wahrzeichen sind die rosa Kathedrale (1882), die Iglesia San Francisco mit ihrer terrakottafarbenen Fassade und das archäologische Museum der Hochanden (MAAM), das die mumifizierten Inka-Kinder vom Llullaillaco zeigt.",
        "facts": [
            "Am 16. April 1582 von Hernando de Lerma gegründet.",
            "Rund 620.000 Einwohner.",
            "Liegt auf 1.187 m Höhe.",
            "Beiname „Salta la Linda“.",
            "Iglesia San Francisco mit terrakottafarbener Fassade.",
            "MAAM-Museum mit Llullaillaco-Inka-Mumien.",
            "Tren a las Nubes, eine der höchsten Eisenbahnen der Welt.",
            "Italienische und arabische Einwanderergemeinden."
        ]
    },
    "ar-a-san-ramon-de-la-nueva-oran-cities-v2": {
        "desc": "San Ramón de la Nueva Orán, am 31. August 1794 von Ramón García Pizarro gegründet, ist eine Stadt mit rund 75.000 Einwohnern im Norden der Provinz Salta. Sie liegt nahe der bolivianischen Grenze auf 357 Metern Höhe und ist eines der Zentren des subtropischen Yungas-Klimas. Spanische Kolonisten und später italienische, syrisch-libanesische und bolivianische Einwanderer prägten die Bevölkerung. Die Stadt ist Hauptstadt einer wichtigen Zuckerrohr- und Tabakanbauregion. In der Nähe liegt der Nationalpark Baritú, einer der unzugänglichsten und artenreichsten Argentiniens. Die historische Pfarrkirche aus dem späten 18. Jahrhundert und die Plaza 9 de Julio bilden das koloniale Zentrum.",
        "facts": [
            "Am 31. August 1794 von Ramón García Pizarro gegründet.",
            "Rund 75.000 Einwohner.",
            "Liegt auf 357 m Höhe nahe der bolivianischen Grenze.",
            "Wichtige Zuckerrohr- und Tabakanbauregion.",
            "Nationalpark Baritú in der Nähe.",
            "Subtropisches Yungas-Klima.",
            "Italienische und libanesische Einwandererprägung.",
            "Historische koloniale Pfarrkirche."
        ]
    },
    "ar-a-tartagal-cities-v2": {
        "desc": "Tartagal, am 26. Juli 1924 gegründet, ist eine Stadt mit rund 80.000 Einwohnern im äußersten Norden der Provinz Salta. Sie liegt nahe der bolivianischen Grenze auf 450 Metern Höhe und entstand als Siedlung der staatlichen YPF, nachdem 1923 in der Region Erdöl entdeckt wurde. Italienische, spanische, syrisch-libanesische und bolivianische Einwanderer prägten die multikulturelle Bevölkerung. Die Region ist Heimat zahlreicher indigener Gemeinschaften, darunter Wichí, Guaraní und Chané. Tartagal ist heute Zentrum der Erdöl-, Gas- und Forstwirtschaftsindustrie sowie wichtiger Grenzpunkt zu Bolivien (Salvador Mazza). Die Stadt liegt im Übergangsgebiet zwischen Yungas-Wald und Chaco-Trockenwald.",
        "facts": [
            "Am 26. Juli 1924 gegründet.",
            "Rund 80.000 Einwohner.",
            "Liegt auf 450 m Höhe nahe der bolivianischen Grenze.",
            "1923 Erdölfunde durch YPF.",
            "Reiche indigene Vielfalt: Wichí, Guaraní, Chané.",
            "Wichtiger Grenzpunkt zu Bolivien.",
            "Italienische und libanesische Einwanderergemeinden.",
            "Übergang zwischen Yungas und Chaco."
        ]
    },
    "ar-j-san-juan-cities-v2": {
        "desc": "San Juan, am 13. Juni 1562 von Juan Jufré gegründet, ist die Hauptstadt der gleichnamigen Provinz und beheimatet rund 115.000 Einwohner in der Stadt selbst, im Großraum über 470.000. Die Stadt liegt am Fuß der Anden auf 650 Metern Höhe. Nach dem verheerenden Erdbeben am 15. Januar 1944, das die alte Stadt fast vollständig zerstörte und 10.000 Menschenleben forderte, wurde San Juan modern wiederaufgebaut. Italienische und spanische Einwanderer prägten den Wein- und Olivenanbau. San Juan ist nach Mendoza der zweitgrößte Weinproduzent Argentiniens, besonders für Syrah und Torrontés. Die Stadt ist auch berühmt als Geburtsort von Domingo Faustino Sarmiento, dem Bildungspräsidenten und Autor des Werks „Facundo“.",
        "facts": [
            "Am 13. Juni 1562 von Juan Jufré gegründet.",
            "Rund 115.000 Einwohner, Großraum über 470.000.",
            "1944 durch Erdbeben fast völlig zerstört.",
            "Geburtsort von Präsident D. F. Sarmiento.",
            "Zweitgrößter Weinproduzent Argentiniens.",
            "Berühmte Syrah- und Torrontés-Weine.",
            "Italienische Einwandererprägung im Weinbau.",
            "Liegt auf 650 m Höhe am Fuß der Anden."
        ]
    },
    "ar-d-san-luis-cities-v2": {
        "desc": "San Luis, am 25. August 1594 von Luis Jufré gegründet, ist die Hauptstadt der gleichnamigen Provinz und beheimatet rund 195.000 Einwohner. Die Stadt liegt am Fuß der Sierra de San Luis auf 700 Metern Höhe. Spanische Kolonisten und später italienische und syrisch-libanesische Einwanderer prägten die Bevölkerung. San Luis war im 19. Jahrhundert wichtige Etappenstation auf der Route von Buenos Aires nach Mendoza und Chile. Die Stadt erlebte ab den 1980er-Jahren einen wirtschaftlichen Aufschwung durch Industrieförderungsprogramme. Sehenswürdigkeiten sind die Kathedrale (1883), das historische Cabildo, die Iglesia Santo Domingo aus dem späten 18. Jahrhundert und das nahegelegene Naturreservat Sierra de las Quijadas.",
        "facts": [
            "Am 25. August 1594 von Luis Jufré gegründet.",
            "Rund 195.000 Einwohner.",
            "Liegt auf 700 m Höhe am Fuß der Sierra.",
            "Wirtschaftlicher Aufschwung seit den 1980ern.",
            "Iglesia Santo Domingo aus dem späten 18. Jh.",
            "Naturreservat Sierra de las Quijadas in der Nähe.",
            "Italienische und libanesische Einwandererprägung.",
            "Hauptstadt der Provinz San Luis."
        ]
    },
    "ar-d-villa-mercedes-cities-v2": {
        "desc": "Villa Mercedes, am 1. Dezember 1856 als Fortín Constitucional gegründet, ist mit rund 115.000 Einwohnern die zweitgrößte Stadt der Provinz San Luis. Sie liegt auf 515 Metern Höhe am Río Quinto im Übergang von der Pampa zur Cuyo-Region. Italienische, spanische und osteuropäische Einwanderer prägten die Bevölkerung im 19. und 20. Jahrhundert. Villa Mercedes entwickelte sich als wichtiger Bahnknotenpunkt und Industriestandort, besonders nach den Steueranreizen der 1980er-Jahre. Die Stadt ist Zentrum der Folkloremusik der Region und veranstaltet jährlich das Festival Nacional de la Calle Angosta, eines der wichtigsten Folklorefestivals Argentiniens. Die Plaza Pedernera mit der Kirche und der Parque de las Naciones sind beliebte städtische Räume.",
        "facts": [
            "Am 1. Dezember 1856 als Fortín gegründet.",
            "Rund 115.000 Einwohner.",
            "Wichtiger Bahnknotenpunkt seit Ende des 19. Jh.",
            "Festival Nacional de la Calle Angosta.",
            "Bedeutender Industriestandort.",
            "Liegt auf 515 m Höhe am Río Quinto.",
            "Italienische und osteuropäische Einwandererprägung.",
            "Übergang zwischen Pampa und Cuyo."
        ]
    },
    "ar-z-rio-gallegos-cities-v2": {
        "desc": "Río Gallegos, am 19. Dezember 1885 gegründet, ist die Hauptstadt der Provinz Santa Cruz im Süden Patagoniens und beheimatet rund 110.000 Einwohner. Die Stadt liegt am gleichnamigen Fluss in der windgepeitschten patagonischen Steppe, etwa 2.600 km südlich von Buenos Aires. Spanische Kolonisten gründeten die Siedlung, doch britische, kroatische, italienische und chilenische Einwanderer prägten die Bevölkerung entscheidend. Die Stadt war im frühen 20. Jahrhundert wichtiges Zentrum der Schafzucht und Wollexporte. Heute ist sie Verwaltungs- und Handelszentrum der Provinz und Drehkreuz für den Erdöl- und Tourismussektor. Río Gallegos ist auch der argentinische Endpunkt der berühmten Ruta Nacional 3 und Ausgangspunkt zum Nationalpark Los Glaciares.",
        "facts": [
            "Am 19. Dezember 1885 gegründet.",
            "Rund 110.000 Einwohner.",
            "Hauptstadt der Provinz Santa Cruz.",
            "Liegt 2.600 km südlich von Buenos Aires.",
            "Britische und kroatische Einwandererprägung.",
            "Wichtiges Schafzucht- und Wollexportzentrum.",
            "Endpunkt der Ruta Nacional 3.",
            "Tor zum Nationalpark Los Glaciares."
        ]
    },
    "ar-s-santa-fe-cities-v2": {
        "desc": "Santa Fe, am 15. November 1573 von Juan de Garay gegründet (zunächst in Cayastá, 1660 an heutigen Standort verlegt), ist die Hauptstadt der gleichnamigen Provinz und beheimatet rund 415.000 Einwohner. Die Stadt liegt am Río Salado und ist über einen Untertunnel mit Paraná verbunden. Sie ist eine der ältesten Städte Argentiniens und Schauplatz historischer Ereignisse: Hier wurde 1853 die argentinische Nationalverfassung unterzeichnet. Italienische und spanische Einwanderer prägten ab Ende des 19. Jahrhunderts den Charakter. Wahrzeichen sind das Cabildo, die Kathedrale, das franziskanische Kloster (1680) mit seiner berühmten Holzdecke ohne Nägel und die Universidad Nacional del Litoral. Santa Fe ist auch Hauptproduzent des „Quilmes“-Konkurrenten Bier „Santa Fe“.",
        "facts": [
            "Am 15. November 1573 von Juan de Garay gegründet.",
            "Rund 415.000 Einwohner.",
            "1660 vom ursprünglichen Standort Cayastá verlegt.",
            "Argentinische Nationalverfassung 1853 hier unterzeichnet.",
            "Franziskanerkloster (1680) mit Holzdecke ohne Nägel.",
            "Universidad Nacional del Litoral seit 1919.",
            "Untertunnel verbindet die Stadt mit Paraná.",
            "Italienische und spanische Einwanderergemeinden."
        ]
    },
    "ar-s-rosario-cities-v2": {
        "desc": "Rosario, ohne offizielles Gründungsdatum (Siedlung seit ca. 1689), wurde 1852 zur Stadt erhoben und beheimatet rund 1,3 Millionen Einwohner – damit ist sie die drittgrößte Stadt Argentiniens. Sie liegt am Westufer des Paraná und ist einer der wichtigsten Häfen Südamerikas, besonders für Sojaexporte. Italienische und spanische Einwanderer prägten ab Ende des 19. Jahrhunderts die Bevölkerung – Rosario hat einen der höchsten italienischen Bevölkerungsanteile Argentiniens. Hier wurde 1812 von Manuel Belgrano erstmals die argentinische Flagge gehisst, weshalb das monumentale Monumento Nacional a la Bandera die Stadt prägt. Rosario ist auch Geburtsort von Che Guevara und der Fußballlegende Lionel Messi.",
        "facts": [
            "Siedlung seit ca. 1689, 1852 zur Stadt erhoben.",
            "Rund 1,3 Millionen Einwohner, drittgrößte Stadt Argentiniens.",
            "Wichtigster Sojaexporthafen Südamerikas.",
            "Monumento Nacional a la Bandera (1957).",
            "Erste Hissung der argentinischen Flagge 1812.",
            "Geburtsort von Che Guevara und Lionel Messi.",
            "Sehr starke italienische Einwandererprägung.",
            "Wichtiges Industrie- und Bildungszentrum."
        ]
    },
    "ar-g-santiago-del-estero-cities-v2": {
        "desc": "Santiago del Estero, am 25. Juli 1553 von Francisco de Aguirre gegründet, ist die älteste Stadt Argentiniens und Hauptstadt der gleichnamigen Provinz mit rund 270.000 Einwohnern. Sie liegt am Río Dulce auf 187 Metern Höhe in der heißen Region des nordwestlichen Argentiniens. Wegen ihres Alters trägt sie den Beinamen „Madre de Ciudades“ (Mutter der Städte), da von hier zahlreiche andere Städte des Cono Sur gegründet wurden. Spanische Kolonisten und später italienische und arabische Einwanderer prägten die Bevölkerung. Die Stadt ist berühmt für ihre Folkloremusik (Chacarera) und die Karnevalstradition. Wahrzeichen sind die Kathedrale, das Cabildo und das Forschungsmuseum Wagner mit präkolumbischen Artefakten. Quechua wird in der Region noch immer gesprochen.",
        "facts": [
            "Am 25. Juli 1553 von Francisco de Aguirre gegründet.",
            "Älteste Stadt Argentiniens.",
            "Rund 270.000 Einwohner.",
            "Beiname „Madre de Ciudades“.",
            "Heimat der Chacarera-Folkloremusik.",
            "Quechua wird noch in der Region gesprochen.",
            "Forschungsmuseum Wagner mit präkolumbischen Funden.",
            "Liegt am Río Dulce auf 187 m Höhe."
        ]
    },
    "ar-v-ushuaia-cities-v2": {
        "desc": "Ushuaia, am 12. Oktober 1884 gegründet, ist die südlichste Stadt Argentiniens und Hauptstadt der Provinz Tierra del Fuego mit rund 80.000 Einwohnern. Sie wird oft als „Stadt am Ende der Welt“ bezeichnet, da sie auf 54° südlicher Breite liegt – nur die chilenische Siedlung Puerto Williams ist südlicher. Die Stadt liegt malerisch am Beagle-Kanal, eingerahmt von schneebedeckten Bergen. Ursprünglich war Ushuaia Standort einer Mission der anglikanischen South American Missionary Society für die indigenen Yámana und ab 1902 eines berüchtigten Strafgefangenenlagers. Italienische, spanische, kroatische und chilenische Einwanderer prägten die Bevölkerung. Heute ist Ushuaia Tor zur Antarktis, mit dem südlichsten Hafen der Welt und dem Nationalpark Tierra del Fuego.",
        "facts": [
            "Am 12. Oktober 1884 gegründet.",
            "Rund 80.000 Einwohner.",
            "Südlichste Stadt Argentiniens.",
            "Liegt am Beagle-Kanal auf 54°S.",
            "Tor zur Antarktis – südlichster Hafen der Welt.",
            "Strafgefangenenlager 1902–1947.",
            "Anglikanische Mission für die Yámana ab 1869.",
            "Nationalpark Tierra del Fuego am Stadtrand."
        ]
    },
}

def fmt_facts(facts):
    items = ", ".join(f'"{f}"' for f in facts)
    return f'[{items}]'

def main():
    text = FILE.read_text(encoding="utf-8")
    original = text
    filled = 0
    skipped = 0

    for poi_id, content in DATA.items():
        pattern = re.compile(
            r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?image:\s*"[^"]*"\s*\})',
            re.MULTILINE
        )
        m = pattern.search(text)
        if not m:
            print(f"NOT FOUND: {poi_id}")
            continue
        block = m.group(1)

        if re.search(r'descriptionAdvanced:\s*\{[^}]*\bde:\s*"', block):
            print(f"SKIP (de exists): {poi_id}")
            skipped += 1
            continue

        new_block = block

        de_desc = content["desc"].replace('"', '\\"')
        new_block = re.sub(
            r'(descriptionAdvanced:\s*\{\s*\n)(\s*)(en:\s*")',
            lambda mm: f'{mm.group(1)}{mm.group(2)}de: "{de_desc}",\n{mm.group(2)}{mm.group(3)}',
            new_block, count=1
        )

        de_facts = fmt_facts(content["facts"])
        new_block = re.sub(
            r'(factsAdvanced:\s*\{\s*\n)(\s*)(en:\s*\[)',
            lambda mm: f'{mm.group(1)}{mm.group(2)}de: {de_facts},\n{mm.group(2)}{mm.group(3)}',
            new_block, count=1
        )

        if new_block == block:
            print(f"NO CHANGE: {poi_id}")
            continue

        text = text.replace(block, new_block, 1)
        filled += 1
        print(f"FILLED: {poi_id}")

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"\nDone. Filled={filled}, Skipped={skipped}")
    else:
        print("\nNothing changed.")

if __name__ == "__main__":
    main()
