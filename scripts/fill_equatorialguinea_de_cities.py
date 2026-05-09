# -*- coding: utf-8 -*-
"""
Fill missing descriptionAdvanced.de and factsAdvanced.de for Equatorial Guinea cities V2.
Skips POIs that already have de: in descriptionAdvanced.
"""
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraEquatorialGuineaCitiesV2.ts")

DATA = {
    "mbini-cities-v2": {
        "desc": "Mbini liegt an der Mündung des Río Benito in der Provinz Litoral und blickt auf eine wechselvolle Kolonialgeschichte zurück: unter spanischer Herrschaft hieß die Siedlung bis 1973 Río Benito und diente als bedeutender Holzverladehafen. Die Stadt zählt heute rund 11.000 Einwohner und ist über die 2014 fertiggestellte 350 Meter lange Mbini-Brücke an die Küstenstraße N1 nach Bata angebunden. Wirtschaftlich prägt der traditionelle Fischfang das Stadtbild, während ausgedehnte Mangrovenwälder im Mündungsdelta wertvolle Lebensräume für Manatis und Reiherkolonien bilden. Seit dem Erdölboom ab 1995 fließen erste Modernisierungsmittel in Hafen und Infrastruktur.",
        "facts": [
            "Etwa 11.000 Einwohner laut Schätzungen 2015.",
            "Bis 1973 unter dem spanischen Namen Río Benito bekannt.",
            "Liegt an der Mündung des 350 km langen Río Benito (Mbini).",
            "Die Mbini-Brücke entlang der Küstenstraße wurde 2014 eröffnet.",
            "Spanische Kolonialzeit dauerte hier von 1843 bis zur Unabhängigkeit 1968.",
            "Mangrovendelta beherbergt seltene Westafrikanische Manatis.",
            "Wichtigste Wirtschaftszweige sind Küstenfischerei und Holzverarbeitung."
        ]
    },
    "aconibe-cities-v2": {
        "desc": "Aconibe ist ein kleines Verwaltungszentrum im Distrikt Wele-Nzas auf etwa 600 Metern Höhe und liegt umgeben von dichtem äquatorialem Regenwald südöstlich von Mongomo. Die Siedlung entstand im frühen 20. Jahrhundert als spanische Missionsstation und Verwaltungsposten der Kolonie Spanisch-Guinea, die zwischen 1778 und 1968 Bestand hatte. Die rund 4.500 Einwohner leben überwiegend von Subsistenzlandwirtschaft mit Maniok, Yams und Kakao, der seit den 1920er Jahren in der Region kultiviert wird. Die ethnisch dominierende Fang-Bevölkerung pflegt traditionelle Bwiti-Riten, und die katholische Kirche aus den 1950er Jahren prägt das Ortszentrum bis heute.",
        "facts": [
            "Liegt auf etwa 600 m Höhe im Distrikt Wele-Nzas.",
            "Bevölkerung circa 4.500 Einwohner.",
            "Spanische Missionsstation gegründet zu Beginn des 20. Jahrhunderts.",
            "Kakaoanbau dominiert die Region seit den 1920er Jahren.",
            "Mehrheitlich von der Fang-Ethnie bewohnt.",
            "Katholische Kirche stammt aus den 1950er Jahren.",
            "Spanische Kolonialzeit endete 1968 mit der Unabhängigkeit."
        ]
    },
    "micomeseng-cities-v2": {
        "desc": "Micomeseng liegt in der nordöstlichen Provinz Kié-Ntem auf einem Höhenzug von rund 700 Metern und gilt als wichtiger Verkehrsknoten an der asphaltierten Nationalstraße zwischen Niefang und Ebebiyín. Die Stadt mit etwa 6.000 Einwohnern wurde während der spanischen Kolonialzeit ab den 1920er Jahren als Handelsposten für Kaffee und Kakao ausgebaut. Heute lebt die mehrheitlich Fang-sprachige Bevölkerung von Plantagenwirtschaft und Kleinhandel mit dem benachbarten Kamerun. Eine moderne weiterführende Schule sowie ein Gesundheitszentrum aus den 2000er Jahren machen den Ort zum Bildungs- und Versorgungszentrum für ein Einzugsgebiet von über 30 Dörfern.",
        "facts": [
            "Liegt auf etwa 700 m Höhe in der Provinz Kié-Ntem.",
            "Rund 6.000 Einwohner.",
            "Wichtiger Knoten an der Nationalstraße N4.",
            "Kolonialer Handelsposten ab den 1920er Jahren.",
            "Plantagen für Kakao und Robusta-Kaffee prägen das Umland.",
            "Versorgungszentrum für über 30 umliegende Dörfer.",
            "Gesundheitszentrum modernisiert nach 2000 mit Erdöleinnahmen."
        ]
    },
    "nsok-cities-v2": {
        "desc": "Nsok liegt im südöstlichen Distrikt Wele-Nzas nahe der gabunischen Grenze und ist Sitz einer kleinen Verwaltungseinheit mit rund 3.500 Einwohnern. Die Siedlung wurde in den 1940er Jahren während der spanischen Kolonialzeit als Außenposten gegründet, um den grenzüberschreitenden Handel mit Französisch-Äquatorialafrika zu kontrollieren. Eingebettet in den Monte-Alén-Vorland-Regenwald lebt die Bevölkerung vom Anbau von Maniok, Bananen und Erdnüssen sowie von Buschfleischjagd. Der traditionelle Wochenmarkt verbindet die Fang-Dörfer der Region, während eine 2010 eröffnete Schotterpiste die Anbindung an Mongomo seitdem deutlich verbessert hat.",
        "facts": [
            "Liegt nahe der gabunischen Grenze im Distrikt Wele-Nzas.",
            "Etwa 3.500 Einwohner.",
            "Gegründet in den 1940er Jahren als Kolonialposten.",
            "Eingebettet in das Vorland des Monte-Alén-Nationalparks.",
            "Wochenmarkt versorgt 12 umliegende Fang-Dörfer.",
            "Schotterpiste nach Mongomo seit 2010 ausgebaut.",
            "Hauptanbau: Maniok, Banane und Erdnuss."
        ]
    },
    "cogo-cities-v2": {
        "desc": "Cogo, früher Puerto Iradier genannt, liegt am Nordufer des Muni-Ästuars gegenüber von Gabun und ist mit rund 4.500 Einwohnern eine der ältesten europäisch geprägten Siedlungen Äquatorialguineas. Die Stadt wurde 1875 vom spanischen Forscher Manuel Iradier als Handelsposten gegründet und diente bis 1968 als Zollstation für den Holz- und Kakaoexport. Bis heute zeugen mehrere zweistöckige Kolonialgebäude aus Holz von dieser Epoche. Die Bevölkerung lebt vom Fischfang und vom kleinen Grenzhandel mit Cocobeach in Gabun. Geplant ist eine Brücke nach Gabun, die das isolierte Cogo wirtschaftlich neu beleben soll.",
        "facts": [
            "Etwa 4.500 Einwohner.",
            "1875 von Manuel Iradier als Puerto Iradier gegründet.",
            "Liegt am Nordufer des 60 km langen Muni-Ästuars.",
            "Spanische Kolonialarchitektur aus dem späten 19. Jahrhundert erhalten.",
            "Grenzpunkt zum gabunischen Cocobeach.",
            "Holz- und Kakaoexporthafen bis zur Unabhängigkeit 1968.",
            "Geplante Brücke nach Gabun soll regionalen Handel beleben."
        ]
    },
    "nsork-cities-v2": {
        "desc": "Nsork liegt in der südöstlichsten Spitze des Festlands in der Provinz Wele-Nzas, nur wenige Kilometer von der gabunischen Grenze entfernt. Die kleine Verwaltungsstadt mit rund 4.000 Einwohnern dient als Tor zum Reservat von Altos de Nsork, einem 400 Quadratkilometer großen Schutzgebiet, das 2000 für Waldelefanten und Mandrills eingerichtet wurde. Während der Kolonialzeit ab 1926 entstand hier ein Verwaltungsposten, doch die wirtschaftliche Entwicklung blieb gering. Erst ab 1995 brachten Ölgelder erste Investitionen in Stromversorgung und Schulen. Die Fang-Bevölkerung lebt überwiegend von Subsistenzwirtschaft und Kakaoanbau auf kleinen Plantagen.",
        "facts": [
            "Etwa 4.000 Einwohner in der Provinz Wele-Nzas.",
            "Tor zum 400 km² großen Reservat Altos de Nsork seit 2000.",
            "Verwaltungsposten ab 1926 in spanischer Kolonialzeit.",
            "Reservat schützt Waldelefanten und Mandrill-Populationen.",
            "Stromnetz und Schulausbau erst ab 1995 mit Ölboom.",
            "Liegt nur 15 km von der gabunischen Grenze entfernt.",
            "Kakao und Maniok sind die wichtigsten Anbauprodukte."
        ]
    },
    "riaba-cities-v2": {
        "desc": "Riaba, ehemals Concepción, liegt an der Ostküste der Insel Bioko in der Provinz Bioko Sur und zählt rund 4.000 Einwohner. Die spanischen Kolonialherren gründeten den Hafen 1845 und errichteten dort ausgedehnte Kakaoplantagen, die im frühen 20. Jahrhundert zu den produktivsten Westafrikas zählten. Eine 1956 eingeweihte Kolonialkirche und Reste der Plantagengebäude prägen das Ortsbild. Die mehrheitlich aus Bubi und Fang bestehende Bevölkerung lebt heute überwiegend vom Fischfang und Kleinanbau. Riaba liegt malerisch zwischen dem Atlantik und dem 2.260 Meter hohen Pico Biao, einem erloschenen Vulkan mit dichtem Bergregenwald.",
        "facts": [
            "Etwa 4.000 Einwohner an der Ostküste Biokos.",
            "1845 als spanische Plantagensiedlung gegründet.",
            "Liegt am Fuß des 2.260 m hohen Pico Biao.",
            "Bis 1973 unter dem spanischen Namen Concepción bekannt.",
            "Kakaoanbau dominierte zwischen 1900 und 1968.",
            "Kolonialkirche aus dem Jahr 1956 erhalten.",
            "Mehrheit der Bevölkerung gehört den Bubi und Fang an."
        ]
    },
    "baney-cities-v2": {
        "desc": "Baney liegt im Nordosten der Insel Bioko, rund 18 Kilometer östlich von Malabo, und ist Hauptort eines gleichnamigen Distrikts mit etwa 12.000 Einwohnern. Die Bubi-Siedlung wurde während der spanischen Kolonialzeit ab den 1880er Jahren in den Plantagengürtel der Insel eingegliedert. Auf den fruchtbaren Vulkanböden gediehen damals einige der höchsten Kakaoerträge weltweit. Heute prägen kleine Bananen- und Yamspflanzungen die Hänge des Pico Basilé, der direkt im Westen aufragt. Eine moderne Universität (UNGE-Außenstelle) und ein Lehrkrankenhaus, beide nach 2000 errichtet, machen Baney zu einem aufstrebenden Bildungszentrum.",
        "facts": [
            "Rund 12.000 Einwohner im Distrikt Baney.",
            "Liegt 18 km östlich der Hauptstadt Malabo.",
            "Eingegliedert in den Kakaoplantagengürtel ab den 1880er Jahren.",
            "Hänge des 3.011 m hohen Pico Basilé direkt im Westen.",
            "Mehrheitlich von der Bubi-Ethnie bewohnt.",
            "UNGE-Universitätsaußenstelle seit den 2000er Jahren.",
            "Vulkanische Böden gehörten zu den ertragreichsten Kakaoböden weltweit."
        ]
    },
    "rebola-cities-v2": {
        "desc": "Rebola liegt nur sieben Kilometer östlich von Malabo auf der Insel Bioko und gilt als kulturelles Herz der Bubi-Bevölkerung. Die Siedlung mit rund 3.500 Einwohnern besitzt eine 1887 von spanischen Klaretiner-Missionaren erbaute Kirche, die zu den ältesten Sakralbauten Äquatorialguineas zählt. Im Ort befindet sich das traditionelle Bötyúkú-Heiligtum, in dem jährlich im November der Erntedank zelebriert wird. Während der spanischen Kolonialzeit, die von 1778 bis 1968 dauerte, war Rebola ein zentraler Sammelpunkt für Kakao aus den umliegenden Plantagen. Heute leben viele Einwohner vom Pendlerverkehr in die nahe Hauptstadt.",
        "facts": [
            "Etwa 3.500 Einwohner, sieben Kilometer östlich von Malabo.",
            "Klaretiner-Mission von 1887 ist eine der ältesten Kirchen des Landes.",
            "Kulturelles Zentrum der Bubi-Ethnie.",
            "Jährliches Bötyúkú-Erntedankfest im November.",
            "Sammelpunkt für Kakao während der Kolonialzeit (1778-1968).",
            "Pendlerort dank kurzer Distanz zur Hauptstadt.",
            "Spanische Klaretiner missionierten ab 1883 auf Bioko."
        ]
    },
    "niefang-cities-v2": {
        "desc": "Niefang, ehemals Sevilla de Niefang, liegt 75 Kilometer östlich von Bata an der wichtigsten Ost-West-Achse des Festlands. Die Stadt mit rund 18.000 Einwohnern wurde 1928 von spanischen Kolonialbehörden als Verwaltungssitz der damaligen Demarkation Sevilla gegründet und entwickelte sich rasch zu einem Zentrum für Tropenholz- und Kakaoexporte. Auf 580 Metern Höhe gelegen genießt Niefang ein gemäßigteres Klima als die feuchtheiße Küste. Seit 1995 brachte der Ölboom Asphaltstraßen und ein neues Krankenhaus. Die Bevölkerung gehört überwiegend der Fang-Ethnie an und betreibt Kakao-, Kaffee- und Palmölanbau in den umliegenden Hügeln.",
        "facts": [
            "Etwa 18.000 Einwohner, 75 km östlich von Bata.",
            "1928 als Sevilla de Niefang von Spanien gegründet.",
            "Liegt auf 580 m Höhe mit gemäßigterem Klima.",
            "Wichtiger Knoten an der Nationalstraße N1.",
            "Kakao-, Kaffee- und Palmölanbau prägen das Umland.",
            "Neues Krankenhaus nach dem Ölboom 1995 errichtet.",
            "Mehrheitlich von der Fang-Ethnie bewohnt."
        ]
    },
    "nkue-cities-v2": {
        "desc": "Nkue liegt zwischen Niefang und Mongomo an der Hauptverbindungsstraße quer durch das Festland und zählt etwa 5.500 Einwohner. Der Ort entstand in den 1930er Jahren während der spanischen Kolonialzeit als kleiner Verwaltungs- und Marktposten in der Provinz Centro Sur. Auf einem Plateau von rund 540 Metern Höhe gelegen wird Nkue von einem dichten Sekundärwald umgeben, in dem Kakao, Kaffee und Bananen kultiviert werden. Nach der Unabhängigkeit 1968 stagnierte die Wirtschaft, doch seit dem Erdölboom Mitte der 1990er Jahre wurden Schule, Krankenstation und Trinkwasserversorgung modernisiert. Die Mehrheit der Einwohner sind Fang-Sprecher.",
        "facts": [
            "Etwa 5.500 Einwohner, gelegen auf 540 m Höhe.",
            "Gegründet in den 1930er Jahren als Kolonialposten.",
            "Liegt an der zentralen Ost-West-Achse N1.",
            "Wirtschaftliche Stagnation nach 1968 bis zum Ölboom 1995.",
            "Hauptanbauprodukte: Kakao, Robusta-Kaffee und Banane.",
            "Trinkwasserprojekt seit den späten 1990er Jahren modernisiert.",
            "Über 95 Prozent der Bevölkerung gehören der Fang-Ethnie an."
        ]
    },
    "machinda-cities-v2": {
        "desc": "Machinda ist eine kleine Vorstadtsiedlung etwa 12 Kilometer nordöstlich von Bata in der Provinz Litoral, die in den letzten zwei Jahrzehnten durch die expandierende Hauptstadt der Festlandregion zu einem Pendlervorort herangewachsen ist. Heute leben hier rund 6.000 Menschen, hauptsächlich Fang. Der Ort entstand ursprünglich während der spanischen Kolonialzeit (1843-1968) als Plantagendorf für Bananen und Ölpalmen. Nach dem Erdölboom 1995 begann eine rasche Bautätigkeit mit Wohnbauprojekten und einer neuen Sekundarschule. Die Nähe zum 2003 modernisierten Flughafen Bata sowie zur Küstenstraße macht Machinda zu einem strategischen Logistikstandort.",
        "facts": [
            "Etwa 6.000 Einwohner, 12 km nordöstlich von Bata.",
            "Ursprünglich Plantagendorf der spanischen Kolonialzeit.",
            "Wachstumsschub durch den Erdölboom seit 1995.",
            "Nähe zum modernisierten Flughafen Bata (Stand 2003).",
            "Anbau von Bananen und Ölpalmen historisch dominant.",
            "Pendlervorort der Hauptstadt der Festlandregion.",
            "Mehrheit der Einwohner gehört der Fang-Ethnie an."
        ]
    },
    "acurenam-cities-v2": {
        "desc": "Acurenam liegt im Süden der Provinz Centro Sur auf rund 400 Metern Höhe und ist Verwaltungssitz eines gleichnamigen Distrikts mit etwa 7.000 Einwohnern. Der Ort wurde 1927 als spanischer Kolonialposten an einer Pufferzone zum französischen Gabun gegründet. Die Region grenzt an den 2.000 Quadratkilometer großen Monte-Alén-Nationalpark, der 2000 etabliert wurde und Waldelefanten, Schimpansen und Mandrills schützt. Die mehrheitlich aus Fang bestehende Bevölkerung lebt von Maniok-, Yams- und Kakaoanbau sowie kleinem Buschhandel. Eine 1962 errichtete katholische Mission und ein Krankenhaus aus den 2000er Jahren bilden das soziale Rückgrat der Stadt.",
        "facts": [
            "Etwa 7.000 Einwohner auf 400 m Höhe.",
            "1927 als spanischer Kolonialposten gegründet.",
            "Grenzt an den 2.000 km² großen Monte-Alén-Nationalpark.",
            "Schützt Waldelefanten, Mandrills und Schimpansen.",
            "Katholische Mission von 1962 erhalten.",
            "Kakao und Maniok dominieren die lokale Landwirtschaft.",
            "Krankenhaus modernisiert nach 2000 mit Ölgeldern."
        ]
    },
    "bicurga-cities-v2": {
        "desc": "Bicurga ist eine Kleinstadt im Zentrum der Provinz Centro Sur mit rund 3.000 Einwohnern, gelegen auf einem bewaldeten Plateau auf etwa 500 Metern Höhe. Der Ort entstand in den 1940er Jahren während der spanischen Kolonialzeit als Holzfällersiedlung; bis in die 1960er Jahre wurden hier Tropenhölzer wie Okume und Bubinga geschlagen und Richtung Bata transportiert. Heute lebt die Fang-Bevölkerung von Subsistenzlandwirtschaft mit Maniok, Erdnüssen und Bananen. Eine 2008 modernisierte Schotterstraße verbindet Bicurga mit Evinayong und ermöglicht den wöchentlichen Markttransport. Die umliegenden Sekundärwälder beherbergen eine reiche Vogelwelt, darunter den Graupapagei.",
        "facts": [
            "Rund 3.000 Einwohner auf 500 m Höhe.",
            "Gegründet in den 1940er Jahren als Holzfällersiedlung.",
            "Tropenholzexport von Okume und Bubinga bis in die 1960er.",
            "Schotterstraße nach Evinayong 2008 modernisiert.",
            "Subsistenzwirtschaft mit Maniok, Erdnuss, Banane.",
            "Sekundärwälder beherbergen den bedrohten Graupapagei.",
            "Mehrheit der Einwohner gehört der Fang-Ethnie an."
        ]
    },
    "bitica-cities-v2": {
        "desc": "Bitica liegt rund 35 Kilometer südlich von Bata an der Atlantikküste und zählt etwa 4.500 Einwohner. Der Fischerort wurde während der spanischen Kolonialzeit ab den 1920er Jahren ausgebaut und diente als Sammelpunkt für Küstenfisch und Tropenholz aus dem Hinterland. Heute leben die mehrheitlich Fang-sprachigen Einwohner von Handlinenfischerei, Räuchereien und Kleinhandel mit Bata. Die Küstenstraße zwischen Bata und Cogo, ab 2010 mit Erdölgeldern asphaltiert, hat die Anbindung erheblich verbessert. Vor der Küste finden sich Korallenriffe und Mangrovenstreifen, die als wichtige Laichgebiete für die kommerzielle Fischerei der Region gelten.",
        "facts": [
            "Etwa 4.500 Einwohner, 35 km südlich von Bata.",
            "Fischerort seit den 1920er Jahren ausgebaut.",
            "Küstenstraße ab 2010 mit Ölgeldern asphaltiert.",
            "Handlinenfischerei und Räuchereien sind Haupterwerb.",
            "Mangrovenstreifen vor der Küste sind wichtige Laichgebiete.",
            "Mehrheit der Bevölkerung gehört der Fang-Ethnie an.",
            "Sammelpunkt für Tropenholz während der Kolonialzeit."
        ]
    },
    "corisco-cities-v2": {
        "desc": "Corisco ist die Hauptsiedlung der gleichnamigen, 14 Quadratkilometer großen Insel im Muni-Golf, die seit 1845 spanisch und seit 1968 äquatorialguineisch ist. Auf der vorgelagerten Insel mit ihren weißen Sandstränden leben rund 800 Menschen, größtenteils der ethnischen Gruppe der Benga. Die Siedlung war im 19. Jahrhundert ein bedeutender Stützpunkt im atlantischen Sklavenhandel und später ein presbyterianischer Missionsstandort. Seit 2011 verfügt Corisco über einen kleinen Regionalflughafen, der die Insel mit Bata verbindet. Geplante Tourismusprojekte sollen die ökologisch wertvollen Mangroven und Schildkrötenstrände behutsam erschließen.",
        "facts": [
            "Etwa 800 Einwohner auf der 14 km² großen Insel.",
            "Seit 1845 spanisch, seit 1968 unabhängig.",
            "Bevölkerung gehört mehrheitlich zur Benga-Ethnie.",
            "Regionalflughafen seit 2011 in Betrieb.",
            "Historischer Stützpunkt im 19. Jahrhundert.",
            "Strände sind Nistgebiete für Lederschildkröten.",
            "Geplante Tourismusprojekte mit Ökoschwerpunkt."
        ]
    },
    "moca-cities-v2": {
        "desc": "Moca liegt auf rund 1.400 Metern Höhe im südlichen Hochland der Insel Bioko und gilt als der höchstgelegene Ort Äquatorialguineas. Die rund 2.500 Einwohner gehören mehrheitlich der Bubi-Ethnie an und leben von Höhenlandwirtschaft mit Kartoffeln, Bohnen und Gemüse, was im westafrikanischen Vergleich ungewöhnlich ist. Die spanischen Kolonialherren gründeten Moca in den 1920er Jahren als Sommerfrische für Beamte aus dem schwülen Malabo. Die Region ist bekannt für die zwei Kraterseen Lago Biao und Lago Loreto sowie für den 2.260 Meter hohen Pico Biao. Im umliegenden Reservat von Luba leben Drills, Putty-nosed-Meerkatzen und seltene Endemiten.",
        "facts": [
            "Höchstgelegener Ort Äquatorialguineas auf 1.400 m.",
            "Etwa 2.500 Einwohner der Bubi-Ethnie.",
            "Spanische Sommerfrische seit den 1920er Jahren.",
            "Zwei Kraterseen: Lago Biao und Lago Loreto.",
            "Pico Biao mit 2.260 m direkt benachbart.",
            "Höhenanbau von Kartoffeln und Gemüse selten in Westafrika.",
            "Reservat von Luba schützt seltene Drill-Affen."
        ]
    },
    "basakato-cities-v2": {
        "desc": "Basakato del Este ist ein Bubi-Dorf an der Nordküste der Insel Bioko, etwa 25 Kilometer östlich von Malabo, und zählt rund 1.500 Einwohner. Die Siedlung wurde im 19. Jahrhundert von der traditionellen Bubi-Bevölkerung gegründet und während der spanischen Kolonialzeit ab den 1880er Jahren in den Kakaoplantagengürtel der Insel eingegliedert. Bis heute pflegen die Einwohner den traditionellen Pömpö-Tanz und die Bötyúkú-Naturreligion. Die fruchtbaren Vulkanböden bringen Kakao, Bananen und Yams hervor. Eine kleine Mission aus den 1920er Jahren und ein 2005 errichtetes Gesundheitszentrum bilden die soziale Infrastruktur des malerisch zwischen Wald und Atlantik gelegenen Ortes.",
        "facts": [
            "Etwa 1.500 Einwohner an der Nordküste Biokos.",
            "Traditionelles Bubi-Dorf aus dem 19. Jahrhundert.",
            "Eingegliedert in den Kakaoplantagengürtel ab den 1880er Jahren.",
            "Pömpö-Tanz und Bötyúkú-Religion werden bewahrt.",
            "Mission aus den 1920er Jahren erhalten.",
            "Gesundheitszentrum seit 2005 in Betrieb.",
            "Vulkanböden ermöglichen Anbau von Kakao und Yams."
        ]
    },
    "batete-cities-v2": {
        "desc": "Batete liegt im Süden der Insel Bioko in der Provinz Bioko Sur und ist berühmt für seine 1887 von spanischen Klaretiner-Missionaren errichtete Holzkirche, die zu den herausragendsten Beispielen religiöser Holzbaukunst in ganz Zentralafrika zählt. Die Bubi-Siedlung mit rund 2.000 Einwohnern liegt am Fuß des erloschenen Vulkans Pico Biao auf etwa 250 Metern Höhe. Während der spanischen Kolonialzeit zwischen 1878 und 1968 entwickelte sich Batete zum Zentrum der Kakaoplantagen im Süden der Insel. Heute leben die Einwohner überwiegend von Kleinanbau und Tourismus, da die historische Holzkirche zunehmend Besucher anzieht.",
        "facts": [
            "Holzkirche von 1887 zählt zu den ältesten Bauten der Insel.",
            "Etwa 2.000 Einwohner der Bubi-Ethnie.",
            "Liegt auf 250 m Höhe in der Provinz Bioko Sur.",
            "Klaretiner-Missionare errichteten Mission ab 1883.",
            "Zentrum der Kakaoplantagen Süd-Biokos zwischen 1878 und 1968.",
            "Liegt am Fuß des 2.260 m hohen Pico Biao.",
            "Tourismus durch historische Holzkirche zunehmend wichtig."
        ]
    },
    "musola-cities-v2": {
        "desc": "Musola ist eine kleine Ortschaft mit rund 1.200 Einwohnern an der Westküste der Insel Bioko in der Provinz Bioko Sur, die unter Wanderern für die in der Nähe gelegenen Wasserfälle von Iladyi bekannt ist. Diese stürzen über 250 Meter aus dem Bergwald des Schutzgebiets Gran Caldera hinab. Die Siedlung wurde während der spanischen Kolonialzeit ab den 1920er Jahren als kleiner Stützpunkt für Plantagen und Forstarbeit gegründet und liegt auf rund 200 Metern Höhe inmitten dichten tropischen Tieflandregenwaldes. Die mehrheitlich Bubi-Bevölkerung lebt heute von Subsistenzlandwirtschaft mit Yams und Bananen sowie zunehmend vom Ökotourismus.",
        "facts": [
            "Etwa 1.200 Einwohner an der Westküste Biokos.",
            "Bekannt für die 250 m hohen Iladyi-Wasserfälle.",
            "Liegt im Schutzgebiet Gran Caldera de Luba.",
            "Gegründet in den 1920er Jahren als Plantagen-Stützpunkt.",
            "Mehrheitlich Bubi-Bevölkerung.",
            "Subsistenzwirtschaft mit Yams und Banane.",
            "Wachsendes Ökotourismus-Ziel seit den 2010er Jahren."
        ]
    },
    "beayop-cities-v2": {
        "desc": "Beayop ist ein kleines Fang-Dorf in der Provinz Wele-Nzas mit rund 2.500 Einwohnern, gelegen auf einem bewaldeten Höhenrücken auf etwa 600 Metern Höhe südlich von Mongomo. Die Siedlung entstand während der spanischen Kolonialzeit ab den 1930er Jahren als Verwaltungsposten für die östliche Kontinentalregion. Die ländliche Wirtschaft basiert auf Subsistenzlandwirtschaft mit Maniok, Yams, Erdnüssen und kleinen Kakaopflanzungen, die seit den 1950er Jahren angelegt wurden. Eine traditionelle Mbira-Musikkultur und der Bwiti-Initiationsritus prägen das Sozialleben der Fang-Gemeinschaft. Seit 2010 verbindet eine Schotterstraße den Ort mit der Nationalstraße N3.",
        "facts": [
            "Etwa 2.500 Einwohner auf 600 m Höhe.",
            "Verwaltungsposten ab den 1930er Jahren.",
            "Mehrheitlich von Fang-Ethnie bewohnt.",
            "Kakaoplantagen seit den 1950er Jahren.",
            "Schotterstraße zur N3 seit 2010 in Betrieb.",
            "Traditionelle Mbira-Musik und Bwiti-Riten gepflegt.",
            "Subsistenzlandwirtschaft dominiert mit Maniok und Yams."
        ]
    },
    "bidjabidjan-cities-v2": {
        "desc": "Bidjabidján liegt im äußersten Norden der Provinz Kié-Ntem an der Grenze zu Kamerun und dient als wichtiger Grenzübergang an der Nationalstraße N4 zwischen Ebebiyín und dem kamerunischen Ambam. Die Stadt mit etwa 4.000 Einwohnern entstand während der spanischen Kolonialzeit ab den 1940er Jahren als Zollstation. Heute lebt die mehrheitlich Fang-sprachige Bevölkerung von grenzüberschreitendem Handel mit Lebensmitteln, Treibstoff und Konsumgütern. Die umliegenden Hügel auf rund 700 Metern Höhe sind mit Kakao- und Robusta-Kaffeeplantagen bedeckt, die seit den 1950er Jahren angelegt wurden. Seit 2008 wurde der Grenzübergang mit moderner Zollinfrastruktur ausgestattet.",
        "facts": [
            "Etwa 4.000 Einwohner an der kamerunischen Grenze.",
            "Wichtiger Grenzübergang an der N4.",
            "Zollstation seit den 1940er Jahren.",
            "Liegt auf rund 700 m Höhe.",
            "Kakao- und Kaffeeplantagen seit den 1950er Jahren.",
            "Modernisierter Grenzübergang seit 2008.",
            "Mehrheit der Bevölkerung gehört der Fang-Ethnie an."
        ]
    },
    "nsang-cities-v2": {
        "desc": "Nsang ist eine kleine Ortschaft in der Provinz Kié-Ntem mit rund 2.800 Einwohnern, gelegen auf einem sanft hügeligen Plateau auf etwa 650 Metern Höhe nordöstlich von Niefang. Die Siedlung entstand in den 1930er Jahren während der spanischen Kolonialzeit als Sammelpunkt für Robusta-Kaffee und Kakao, die im milderen Klima der Höhenlage besonders gut gedeihen. Bis heute prägen kleine Plantagenbetriebe das Umland. Die mehrheitlich Fang-sprachige Bevölkerung lebt von der Kaffeevermarktung und vom Eigenanbau von Maniok, Yams und Erdnüssen. Eine 2012 modernisierte Schotterstraße verbessert die Anbindung an die Nationalstraße N4 erheblich.",
        "facts": [
            "Etwa 2.800 Einwohner auf 650 m Höhe.",
            "Sammelpunkt für Kakao und Kaffee seit den 1930er Jahren.",
            "Robusta-Kaffeeanbau prägt das Umland.",
            "Schotterstraße zur N4 ab 2012 modernisiert.",
            "Mehrheitlich Fang-sprachige Bevölkerung.",
            "Spanische Kolonialzeit endete 1968.",
            "Eigenanbau von Maniok, Yams und Erdnuss."
        ]
    },
    "ayene-cities-v2": {
        "desc": "Ayene ist eine ländliche Siedlung in der Provinz Wele-Nzas mit rund 2.000 Einwohnern, gelegen auf einem bewaldeten Höhenzug auf etwa 580 Metern Höhe zwischen Mongomo und Añisoc. Der Ort entstand in den 1930er Jahren als kleiner Verwaltungsposten der spanischen Kolonialverwaltung. Die mehrheitlich Fang-sprachige Bevölkerung pflegt traditionelle Bauweisen mit Holzpfostenhäusern und Palmblattdächern, die das Ortsbild bis heute prägen. Wirtschaftlich dominieren Kakaoplantagen und Subsistenzlandwirtschaft mit Maniok und Erdnüssen. Eine kleine katholische Kapelle aus den 1950er Jahren und ein 2010 errichtetes Gesundheitszentrum bilden die soziale Infrastruktur des Dorfes.",
        "facts": [
            "Etwa 2.000 Einwohner auf 580 m Höhe.",
            "Spanischer Verwaltungsposten ab den 1930er Jahren.",
            "Traditionelle Holzpfostenhäuser mit Palmblattdächern.",
            "Kakaoplantagen prägen das Umland.",
            "Katholische Kapelle aus den 1950er Jahren.",
            "Gesundheitszentrum seit 2010 in Betrieb.",
            "Mehrheit der Bevölkerung gehört der Fang-Ethnie an."
        ]
    },
    "mengomeyen-cities-v2": {
        "desc": "Mengomeyén liegt in der Provinz Wele-Nzas etwa 35 Kilometer westlich von Mongomo und ist seit 2011 Standort des modernen Internationalen Flughafens Mongomo (Code GEM), der bei Gipfeltreffen wie dem AU-Gipfel 2014 wichtige Funktionen erfüllte. Der einst kleine Ort mit heute rund 5.000 Einwohnern wuchs nach dem Bau des Flughafens und der Anlage einer vierspurigen Autobahn nach Mongomo erheblich. Während der spanischen Kolonialzeit, die von 1778 bis 1968 dauerte, war Mengomeyén ein einfaches Fang-Dorf. Heute ist es Symbol der von Erdölgeldern finanzierten Modernisierung des östlichen Festlands. Hotels und ein Konferenzzentrum prägen das neue Stadtbild.",
        "facts": [
            "Etwa 5.000 Einwohner, 35 km westlich von Mongomo.",
            "Internationaler Flughafen Mongomo (GEM) seit 2011.",
            "Vierspurige Autobahn nach Mongomo seit 2011.",
            "AU-Gipfel 2014 wichtige Funktion erfüllt.",
            "Wachstum durch Erdölgelder ab den 2000ern.",
            "Während Kolonialzeit 1778-1968 ein einfaches Fang-Dorf.",
            "Konferenzzentrum und Hotels seit den 2010ern errichtet."
        ]
    },
    "cabo-san-juan-cities-v2": {
        "desc": "Cabo San Juan markiert den südlichsten Punkt des äquatorialguineischen Festlands an der Küste der Provinz Litoral und liegt am Eingang zum Muni-Ästuar gegenüber der Insel Corisco. Das kleine Fischerdorf mit rund 600 Einwohnern wurde im 19. Jahrhundert von Benga-Familien gegründet und während der spanischen Kolonialzeit ab 1843 als Marinestützpunkt ausgebaut. Heute lebt die Bevölkerung von Handlinenfischerei und Krabbenfang in den vorgelagerten Mangroven, die zu den artenreichsten Westafrikas zählen. Seit 2008 ist die Region Teil eines geplanten Meeresschutzgebiets, in dem Lederschildkröten und westafrikanische Manatis ihre wichtigsten Brut- und Ruhegebiete finden.",
        "facts": [
            "Südlichster Punkt des Festlands am Muni-Ästuar.",
            "Etwa 600 Einwohner der Benga-Ethnie.",
            "Marinestützpunkt während spanischer Kolonialzeit ab 1843.",
            "Mangroven zählen zu den artenreichsten Westafrikas.",
            "Lederschildkröten-Brutgebiet seit 2008 unter Schutz.",
            "Westafrikanischer Manati findet hier Ruhegebiete.",
            "Handlinenfischerei und Krabbenfang Haupterwerb."
        ]
    },
    "bolondo-cities-v2": {
        "desc": "Bolondo ist eine kleine Küstensiedlung mit rund 1.500 Einwohnern, etwa 25 Kilometer nordöstlich der Mündung des Río Benito in der Provinz Litoral. Der Ort wurde während der spanischen Kolonialzeit ab den 1920er Jahren als kleiner Fischerei- und Holzverladeplatz ausgebaut. Heute lebt die mehrheitlich Fang- und Ndowe-stämmige Bevölkerung von Küstenfischerei mit traditionellen Pirogen sowie von Räuchereien für getrockneten Fisch. Die langen, von Kokospalmen gesäumten Sandstrände bieten Potenzial für Ökotourismus, der seit den 2010er Jahren behutsam erschlossen wird. Die ab 2010 mit Erdölgeldern asphaltierte Küstenstraße verbindet Bolondo mit Bata.",
        "facts": [
            "Etwa 1.500 Einwohner an der Atlantikküste.",
            "Liegt 25 km nordöstlich der Río-Benito-Mündung.",
            "Fischerei und Holzverladeplatz seit den 1920er Jahren.",
            "Bevölkerung gehört zu Fang und Ndowe.",
            "Küstenstraße ab 2010 mit Ölgeldern asphaltiert.",
            "Räuchereien für getrockneten Fisch dominieren.",
            "Ökotourismus seit den 2010er Jahren erschlossen."
        ]
    },
    "nkimi-cities-v2": {
        "desc": "Nkimi ist ein kleiner Ort in der Provinz Centro Sur mit rund 1.800 Einwohnern, gelegen auf einem bewaldeten Plateau auf etwa 520 Metern Höhe zwischen Niefang und Evinayong. Die Siedlung entstand in den 1940er Jahren während der spanischen Kolonialzeit als bescheidener Verwaltungsposten und Sammelpunkt für Tropenholz. Bis heute leben die mehrheitlich Fang-sprachigen Einwohner von Subsistenzlandwirtschaft mit Maniok, Bananen und Erdnüssen sowie vom Kakaoanbau auf kleinen Plantagen. Eine 2009 modernisierte Schotterstraße verbindet Nkimi mit der Nationalstraße N1, was die wirtschaftliche Anbindung der Region erheblich verbesserte.",
        "facts": [
            "Etwa 1.800 Einwohner auf 520 m Höhe.",
            "Spanischer Verwaltungsposten ab den 1940er Jahren.",
            "Sammelpunkt für Tropenholz während Kolonialzeit.",
            "Schotterstraße zur N1 ab 2009 modernisiert.",
            "Mehrheitlich Fang-sprachige Bevölkerung.",
            "Kakaoanbau auf kleinen Plantagen.",
            "Subsistenzwirtschaft mit Maniok und Banane."
        ]
    },
    "nsok-nsomo-cities-v2": {
        "desc": "Nsok-Nsomo liegt im Osten der Provinz Kié-Ntem auf einem Hügelrücken auf rund 700 Metern Höhe und zählt etwa 3.500 Einwohner. Die Siedlung entstand in den 1930er Jahren während der spanischen Kolonialzeit als regionaler Markt- und Verwaltungspunkt für die östlichen Fang-Dörfer entlang der gabunischen Grenze. Bis heute findet hier wöchentlich ein lebhafter Markt statt, auf dem Maniok, Yams, Bananen, Buschfleisch und Kakao gehandelt werden. Die katholische Mission von 1958 prägt das Ortsbild ebenso wie das nach 2005 mit Erdölgeldern errichtete Sekundarschulzentrum. Die umliegenden Wälder beherbergen seltene Schimpansenpopulationen.",
        "facts": [
            "Etwa 3.500 Einwohner auf 700 m Höhe.",
            "Markt- und Verwaltungspunkt seit den 1930er Jahren.",
            "Wöchentlicher Markt für Maniok, Yams und Buschfleisch.",
            "Katholische Mission aus dem Jahr 1958.",
            "Sekundarschulzentrum nach 2005 errichtet.",
            "Umliegende Wälder beherbergen Schimpansen.",
            "Mehrheit der Bevölkerung gehört der Fang-Ethnie an."
        ]
    },
    "rio-campo-cities-v2": {
        "desc": "Río Campo liegt an der Mündung des gleichnamigen Flusses an der nördlichen Küstengrenze zu Kamerun in der Provinz Litoral und zählt rund 1.200 Einwohner. Der Ort markiert den nördlichsten Küstenpunkt Äquatorialguineas und wurde während der spanischen Kolonialzeit ab den 1900er Jahren als Zoll- und Fischereistation ausgebaut. Die mehrheitlich Ndowe-stämmige Bevölkerung lebt von Küstenfischerei und kleinem Grenzhandel. Das umliegende Schutzgebiet Reserva Natural del Río Campo, das seit 2000 etwa 330 Quadratkilometer Mangroven und Tieflandregenwald schützt, beherbergt Manatis, Krokodile und seltene Wasservögel. Eine geplante Brücke nach Kamerun soll die regionale Vernetzung verbessern.",
        "facts": [
            "Etwa 1.200 Einwohner am nördlichsten Küstenpunkt.",
            "Zoll- und Fischereistation ab den 1900er Jahren.",
            "Reserva Natural del Río Campo schützt 330 km² seit 2000.",
            "Schutzgebiet beherbergt Manatis und Krokodile.",
            "Bevölkerung gehört mehrheitlich zur Ndowe-Ethnie.",
            "Geplante Brücke nach Kamerun für regionale Vernetzung.",
            "Spanische Kolonialzeit endete 1968."
        ]
    },
    "mbere-cities-v2": {
        "desc": "Mbere ist eine kleine, aufstrebende Ortschaft in der 2017 neu geschaffenen Provinz Djibloho mit rund 2.000 Einwohnern, gelegen nahe der geplanten Hauptstadt Ciudad de la Paz. Der Ort wurde während der spanischen Kolonialzeit ab den 1940er Jahren als bescheidener Fang-Posten gegründet. Mit dem Beginn des Hauptstadtprojekts 2011 erlebte die Region einen Bauboom: Asphaltstraßen, Strom- und Wasserleitungen sowie ein neues Sekundarschulzentrum entstanden. Die mehrheitlich Fang-sprachige Bevölkerung lebt traditionell von Maniok-, Yams- und Erdnussanbau, profitiert nun aber zunehmend von Bauarbeiten und Dienstleistungen rund um die geplante neue Hauptstadt.",
        "facts": [
            "Etwa 2.000 Einwohner in der 2017 geschaffenen Provinz Djibloho.",
            "Liegt nahe der geplanten Hauptstadt Ciudad de la Paz.",
            "Gegründet in den 1940er Jahren als Fang-Posten.",
            "Bauboom seit Hauptstadtprojekt-Beginn 2011.",
            "Asphaltstraßen und Stromnetz neu errichtet.",
            "Sekundarschulzentrum seit den 2010er Jahren.",
            "Subsistenzwirtschaft mit Maniok und Yams traditionell dominant."
        ]
    },
    "santiago-de-baney-cities-v2": {
        "desc": "Santiago de Baney ist die Hauptsiedlung des Distrikts Baney auf der Insel Bioko und zählt rund 5.000 Einwohner. Die Bubi-Ortschaft wurde im 19. Jahrhundert gegründet und während der spanischen Kolonialzeit ab den 1880er Jahren in den Plantagengürtel der Insel eingegliedert. Die katholische Pfarrkirche Santiago Apóstol aus den 1920er Jahren mit ihrem markanten Glockenturm prägt das Ortsbild. Die fruchtbaren Vulkanböden am Fuß des 3.011 Meter hohen Pico Basilé bringen Kakao, Bananen und Yams hervor. Seit 2003 gehört Santiago de Baney administrativ zur Provinz Bioko Norte und ist zentraler Versorgungsort für die östlichen Bubi-Dörfer der Insel.",
        "facts": [
            "Etwa 5.000 Einwohner, Hauptsiedlung des Distrikts Baney.",
            "Pfarrkirche Santiago Apóstol aus den 1920er Jahren.",
            "Liegt am Fuß des 3.011 m hohen Pico Basilé.",
            "Eingliederung in den Plantagengürtel ab den 1880er Jahren.",
            "Verwaltungssitz in der Provinz Bioko Norte seit 2003.",
            "Bubi-Mehrheit pflegt traditionelle Riten.",
            "Vulkanböden ermöglichen Kakao- und Bananenanbau."
        ]
    },
    "basakato-del-oeste-cities-v2": {
        "desc": "Basakato del Oeste ist ein kleines Bubi-Dorf an der Westküste der Insel Bioko in der Provinz Bioko Norte mit rund 1.200 Einwohnern. Die Siedlung wurde im 19. Jahrhundert von Bubi-Familien gegründet und während der spanischen Kolonialzeit ab den 1880er Jahren in den Kakaoplantagengürtel eingegliedert. Heute leben die Einwohner von Subsistenzlandwirtschaft mit Yams, Bananen und Maniok auf den fruchtbaren Vulkanböden am Fuß des 3.011 Meter hohen Pico Basilé. Eine kleine Mission aus den 1920er Jahren und ein 2008 modernisiertes Gesundheitszentrum bilden die soziale Infrastruktur des Dorfes, das vom dichten tropischen Tieflandregenwald umgeben ist.",
        "facts": [
            "Etwa 1.200 Einwohner an der Westküste Biokos.",
            "Bubi-Dorf aus dem 19. Jahrhundert.",
            "Eingegliedert in den Kakaoplantagengürtel ab den 1880er Jahren.",
            "Mission aus den 1920er Jahren erhalten.",
            "Gesundheitszentrum 2008 modernisiert.",
            "Liegt am Fuß des 3.011 m hohen Pico Basilé.",
            "Subsistenzwirtschaft mit Yams und Banane dominant."
        ]
    },
    "bilelipa-cities-v2": {
        "desc": "Bilelipa ist eine kleine Küstensiedlung mit rund 800 Einwohnern an der Nordküste der Insel Bioko in der Provinz Bioko Norte. Das traditionelle Bubi-Dorf wurde im 19. Jahrhundert gegründet und ist bis heute für seine Fischertradition bekannt, die mit handgefertigten Pirogen und Reusenfischerei arbeitet. Während der spanischen Kolonialzeit ab den 1880er Jahren entstanden in der Umgebung Kakaoplantagen, die das Dorf an den Plantagengürtel der Insel anbanden. Der kleine, von Kokospalmen gesäumte Strand und der Hafen sind das Zentrum des dörflichen Lebens. Die Einwohner pflegen traditionelle Bötyúkú-Riten und kombinieren Fischfang mit Kleinanbau von Yams und Bananen.",
        "facts": [
            "Etwa 800 Einwohner an der Nordküste Biokos.",
            "Traditionelles Bubi-Fischerdorf aus dem 19. Jahrhundert.",
            "Reusenfischerei mit handgefertigten Pirogen.",
            "Eingliederung in Kakaoplantagengürtel ab den 1880er Jahren.",
            "Bötyúkú-Riten der Bubi werden gepflegt.",
            "Kleinanbau von Yams und Banane ergänzt Fischfang.",
            "Spanische Kolonialzeit endete 1968."
        ]
    },
    "bakake-cities-v2": {
        "desc": "Bakake ist ein kleines Dorf mit rund 600 Einwohnern im Süden der Insel Bioko in der Provinz Bioko Sur, eingebettet in das vulkanische Schutzgebiet Gran Caldera de Luba auf etwa 300 Metern Höhe. Die Bubi-Siedlung wurde im 19. Jahrhundert gegründet und blieb aufgrund der schwierigen Geländezugänglichkeit lange Zeit isoliert. Das umliegende Reservat schützt seit 2000 rund 510 Quadratkilometer Bergregenwald mit endemischen Arten wie dem Bioko-Drill und sieben Primatenarten. Die Einwohner leben traditionell von Subsistenzlandwirtschaft mit Yams, Cocoyams und Bananen sowie Sammelwirtschaft im Wald. Ökotourismus eröffnet seit den 2010er Jahren neue Einkommensquellen.",
        "facts": [
            "Etwa 600 Einwohner auf 300 m Höhe.",
            "Liegt im Schutzgebiet Gran Caldera de Luba.",
            "Reservat schützt 510 km² Bergregenwald seit 2000.",
            "Endemischer Bioko-Drill als Leitart.",
            "Bubi-Dorf aus dem 19. Jahrhundert.",
            "Subsistenzwirtschaft mit Yams und Cocoyam.",
            "Ökotourismus seit den 2010er Jahren entwickelt."
        ]
    },
    "fishtown-cities-v2": {
        "desc": "Fishtown ist eine historische Küstensiedlung an der Südküste der Insel Bioko in der Provinz Bioko Sur mit rund 1.000 Einwohnern. Der Name geht auf englische Walfänger und Sklavenhändler zurück, die im 19. Jahrhundert hier eine Kontaktstation unterhielten, bevor Spanien die Insel ab 1843 dauerhaft kontrollierte. Heute leben die mehrheitlich Bubi-stämmigen Einwohner von Küstenfischerei mit traditionellen Pirogen und Räuchereien für getrockneten Fisch. Die malerische Lage zwischen vulkanischen Klippen und schwarzen Sandstränden zieht zunehmend Ökotouristen an. Eine kleine Anglikanerkirche und Reste alter Handelsgebäude erinnern an die mehrsprachige Vergangenheit des Ortes.",
        "facts": [
            "Etwa 1.000 Einwohner an der Südküste Biokos.",
            "Englische Walfänger-Station im 19. Jahrhundert.",
            "Spanien übernahm die Insel ab 1843 dauerhaft.",
            "Vulkanische Klippen und schwarze Sandstrände.",
            "Anglikanerkirche und alte Handelsgebäude erhalten.",
            "Bubi-Mehrheit lebt von Küstenfischerei.",
            "Räuchereien für getrockneten Fisch traditionell wichtig."
        ]
    },
    "cupapa-cities-v2": {
        "desc": "Cupapa ist ein kleines Küstendorf mit rund 900 Einwohnern in der Provinz Litoral, gelegen etwa 40 Kilometer südlich von Bata an der Atlantikküste. Die Siedlung wurde während der spanischen Kolonialzeit ab den 1920er Jahren als bescheidener Fischerei- und Holzverladepunkt ausgebaut. Heute leben die mehrheitlich Ndowe-stämmigen Einwohner von Küstenfischerei mit Pirogen und kleinen Plantagen mit Maniok, Bananen und Ölpalmen. Die Region ist reich an tropischer Flora, darunter Mangrovenstreifen, die wichtige Laichgebiete für Krabben und Fische bilden. Die ab 2010 mit Erdölgeldern asphaltierte Küstenstraße zwischen Bata und Cogo verbessert die Anbindung deutlich.",
        "facts": [
            "Etwa 900 Einwohner, 40 km südlich von Bata.",
            "Fischerei- und Holzverladepunkt ab den 1920er Jahren.",
            "Bevölkerung gehört zur Ndowe-Ethnie.",
            "Mangrovenstreifen sind wichtige Laichgebiete.",
            "Küstenstraße ab 2010 mit Ölgeldern asphaltiert.",
            "Plantagen mit Maniok, Banane und Ölpalme.",
            "Spanische Kolonialzeit endete 1968."
        ]
    },
    "sendje-cities-v2": {
        "desc": "Sendje ist eine wachsende Ortschaft mit rund 3.000 Einwohnern in der Provinz Litoral, gelegen etwa 30 Kilometer südlich von Bata in der Nähe des Río Wele. Bekannt ist der Ort für das Wasserkraftwerk Djibloho-Sendje, das seit 2012 Teil der nationalen Stromversorgung ist und eine Leistung von 120 Megawatt liefert. Die mehrheitlich Fang- und Ndowe-stämmige Bevölkerung lebt traditionell von Subsistenzlandwirtschaft mit Maniok, Bananen und Ölpalmen. Während der spanischen Kolonialzeit ab den 1920er Jahren entstand hier ein kleiner Plantagenposten. Heute prägen das durch Ölgelder finanzierte Wasserkraftwerk und neue Wohnbauten das Erscheinungsbild des Ortes.",
        "facts": [
            "Etwa 3.000 Einwohner, 30 km südlich von Bata.",
            "Wasserkraftwerk Djibloho-Sendje mit 120 MW seit 2012.",
            "Plantagenposten ab den 1920er Jahren.",
            "Bevölkerung gehört zu Fang und Ndowe.",
            "Subsistenzwirtschaft mit Maniok und Banane.",
            "Neue Wohnbauten durch Erdölgelder finanziert.",
            "Liegt nahe dem Fluss Río Wele."
        ]
    },
    "bata-manga-cities-v2": {
        "desc": "Bata-manga ist ein schnell wachsendes Vorstadtviertel von Bata in der Provinz Litoral mit rund 12.000 Einwohnern, gelegen etwa fünf Kilometer nordöstlich des Stadtzentrums. Das Viertel entwickelte sich seit dem Erdölboom 1995 rasch von einem ländlichen Dorf zu einem urbanen Wohnviertel mit Wohnblöcken, Märkten und Schulen. Während der spanischen Kolonialzeit war die Region landwirtschaftlich geprägt mit Bananenplantagen und kleinen Fang-Dörfern. Heute lebt die mehrheitlich Fang-stämmige Bevölkerung von Pendelarbeit in Bata, Kleinhandel und Bauarbeiten. Die ab 2005 modernisierte Verbindungsstraße ins Zentrum macht Bata-manga zu einem dynamischen Wachstumspol der Festlandhauptstadt.",
        "facts": [
            "Etwa 12.000 Einwohner, 5 km nordöstlich von Bata.",
            "Wachstumsschub seit dem Erdölboom 1995.",
            "Vorher landwirtschaftlich geprägt mit Bananenplantagen.",
            "Mehrheit der Bevölkerung gehört der Fang-Ethnie an.",
            "Verbindungsstraße ins Zentrum ab 2005 modernisiert.",
            "Wohnblöcke und Schulen nach 2000 errichtet.",
            "Pendelarbeit in Bata dominiert das Erwerbsleben."
        ]
    },
    "nkumekien-cities-v2": {
        "desc": "Nkumekien ist eine kleine ländliche Ortschaft mit rund 1.500 Einwohnern in den Hügeln der Provinz Centro Sur, gelegen auf etwa 480 Metern Höhe südwestlich von Evinayong. Die Siedlung entstand in den 1940er Jahren während der spanischen Kolonialzeit als bescheidener Verwaltungsposten und Sammelpunkt für Tropenholz. Bis heute leben die mehrheitlich Fang-sprachigen Einwohner von Subsistenzlandwirtschaft mit Maniok, Yams und Erdnüssen sowie vom Kakaoanbau auf kleinen Plantagen. Der dichte Sekundärwald rund um den Ort ist Lebensraum für seltene Tiere wie den Graupapagei und Schimpansen. Eine traditionelle Lebensweise mit Holzpfostenhäusern und Palmblattdächern prägt das Dorfbild.",
        "facts": [
            "Etwa 1.500 Einwohner auf 480 m Höhe.",
            "Verwaltungsposten ab den 1940er Jahren.",
            "Sammelpunkt für Tropenholz während Kolonialzeit.",
            "Mehrheitlich Fang-sprachige Bevölkerung.",
            "Sekundärwald beherbergt Graupapageien und Schimpansen.",
            "Traditionelle Holzpfostenhäuser mit Palmblattdächern.",
            "Subsistenzwirtschaft mit Maniok, Yams und Erdnuss."
        ]
    },
    "ayene-kie-ntem-cities-v2": {
        "desc": "Ayene in der Provinz Kié-Ntem ist eine kleine, ländliche Ortschaft mit rund 2.200 Einwohnern, gelegen auf einem Höhenrücken auf etwa 720 Metern Höhe nahe der gabunischen Grenze. Nicht zu verwechseln mit dem gleichnamigen Ort in Wele-Nzas, entstand dieses Ayene in den 1930er Jahren während der spanischen Kolonialzeit als kleiner Verwaltungsposten und Sammelpunkt für Robusta-Kaffee und Kakao. Die mehrheitlich Fang-sprachige Bevölkerung lebt heute von Plantagenwirtschaft und kleinem Grenzhandel mit dem benachbarten Gabun. Eine 2011 modernisierte Schotterstraße verbindet den Ort mit der Nationalstraße N4 und verbessert die Anbindung an Ebebiyín erheblich.",
        "facts": [
            "Etwa 2.200 Einwohner auf 720 m Höhe.",
            "Liegt nahe der gabunischen Grenze in Kié-Ntem.",
            "Verwaltungsposten ab den 1930er Jahren.",
            "Sammelpunkt für Robusta-Kaffee und Kakao.",
            "Schotterstraße zur N4 ab 2011 modernisiert.",
            "Grenzhandel mit Gabun wichtige Erwerbsquelle.",
            "Mehrheit der Bevölkerung gehört der Fang-Ethnie an."
        ]
    },
}


def fmt_facts(facts):
    return "[" + ", ".join('"' + f.replace('"', '\\"') + '"' for f in facts) + "]"


def main():
    text = FILE.read_text(encoding="utf-8")
    original = text
    inserted_desc = 0
    inserted_facts = 0
    skipped = 0

    for poi_id, payload in DATA.items():
        # Find the POI block
        id_marker = f'id: "{poi_id}",'
        idx = text.find(id_marker)
        if idx == -1:
            print(f"!! POI not found: {poi_id}")
            continue
        # Find next POI start (or end of array)
        next_block = re.search(r'\n  \{\n    id: "', text[idx + len(id_marker):])
        block_end = idx + len(id_marker) + (next_block.start() if next_block else len(text) - idx - len(id_marker))
        block = text[idx:block_end]

        de_str = payload["desc"].replace('"', '\\"')
        facts_str = fmt_facts(payload["facts"])

        # Check if descriptionAdvanced exists
        if "descriptionAdvanced:" in block:
            # Check if de: already present in descriptionAdvanced section
            descAdv_match = re.search(r'descriptionAdvanced:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}', block)
            if descAdv_match and re.search(r'\bde:\s*"', descAdv_match.group(1)):
                print(f"-- skip (de present): {poi_id}")
                skipped += 1
                continue
            # Insert de: as first key in descriptionAdvanced
            new_block = re.sub(
                r'(descriptionAdvanced:\s*\{\s*\n)',
                lambda m: m.group(1) + f'      de: "{de_str}",\n',
                block,
                count=1
            )
            inserted_desc += 1
            # factsAdvanced: insert de: too
            if "factsAdvanced:" in new_block:
                fa_match = re.search(r'factsAdvanced:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}', new_block)
                if fa_match and not re.search(r'\bde:\s*\[', fa_match.group(1)):
                    # insert at beginning
                    new_block = re.sub(
                        r'(factsAdvanced:\s*\{\s*)',
                        lambda m: m.group(1) + f'de: {facts_str}, ',
                        new_block,
                        count=1
                    )
                    inserted_facts += 1
        else:
            # No descriptionAdvanced exists - inject after facts: { ... } block, before closing of POI
            # The POI ends with }, or }. Find the last ", facts: {...}" closing then insert before final }
            # Pattern: facts: { ... } [optional , image:...] }
            # Insert descAdv+factsAdv after the facts block, before final closing brace of POI.
            # Find the facts block end (closing brace of facts).
            facts_match = re.search(
                r'(facts:\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})',
                block
            )
            if not facts_match:
                print(f"!! no facts block in {poi_id}")
                continue
            insertion = (
                f',\n    descriptionAdvanced: {{\n      de: "{de_str}"\n    }},\n'
                f'    factsAdvanced: {{ de: {facts_str} }}'
            )
            insert_pos = facts_match.end()
            new_block = block[:insert_pos] + insertion + block[insert_pos:]
            inserted_desc += 1
            inserted_facts += 1

        text = text[:idx] + new_block + text[block_end:]

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"\nDone. desc inserted: {inserted_desc}, facts inserted: {inserted_facts}, skipped: {skipped}")
    else:
        print("No changes made.")


if __name__ == "__main__":
    main()
