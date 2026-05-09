#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill German (de) descriptionAdvanced + factsAdvanced for Israel cities POIs (V2)."""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraIsraelCitiesV2.ts"

DATA = {
    "jerusalem-cities-v2": {
        "desc": "Jerusalem, hebräisch Jeruschalajim, ist die Hauptstadt des Staates Israel und mit rund 970.000 Einwohnern die größte Stadt des Landes. Die Geschichte der Stadt reicht über 4.000 Jahre zurück, erste Spuren einer kanaanitischen Besiedlung stammen aus dem 4. Jahrtausend v. Chr. Um 1000 v. Chr. machte König David sie zur Hauptstadt des vereinigten Königreiches Israel, sein Sohn Salomo errichtete den ersten Tempel. Nach der Staatsgründung Israels 1948 wurde Westjerusalem Hauptstadt, 1967 nach dem Sechstagekrieg vereinigt. Die Altstadt mit Klagemauer, Felsendom und Grabeskirche zählt seit 1981 zum UNESCO-Welterbe. Jerusalem ist heiligste Stätte für Juden, drittheiligste für Muslime und zentraler Pilgerort für Christen.",
        "facts": [
            "Rund 970.000 Einwohner, größte Stadt Israels.",
            "Erste Besiedlung im 4. Jahrtausend v. Chr.",
            "Um 1000 v. Chr. von König David zur Hauptstadt erhoben.",
            "Staat Israel proklamiert am 14. Mai 1948 in Tel Aviv, Westjerusalem wurde Hauptstadt.",
            "Wiedervereinigt 1967 nach dem Sechstagekrieg.",
            "Altstadt seit 1981 UNESCO-Weltkulturerbe.",
            "Klagemauer ist Überrest der Westmauer des Zweiten Tempels.",
            "Heilig für Judentum, Christentum und Islam."
        ]
    },
    "tel-aviv-cities-v2": {
        "desc": "Tel Aviv-Jaffa wurde am 11. April 1909 von 66 jüdischen Familien als nördlicher Vorort des antiken Hafens Jaffa gegründet und ist heute mit rund 470.000 Einwohnern die zweitgrößte Stadt Israels, in der Metropolregion Gusch Dan leben über 4 Millionen Menschen. Der Name bedeutet „Frühlingshügel“. 1950 wurde sie offiziell mit dem mehrere tausend Jahre alten Jaffa zusammengelegt. Tel Aviv gilt als wirtschaftliche und technologische Hauptstadt Israels mit lebendiger Start-up-Szene. Die „Weiße Stadt“ mit über 4.000 Bauhaus-Gebäuden, errichtet ab den 1930er Jahren von deutsch-jüdischen Architekten, wurde 2003 UNESCO-Welterbe. Hier wurde am 14. Mai 1948 von David Ben-Gurion der Staat Israel ausgerufen.",
        "facts": [
            "Am 11. April 1909 von 66 Familien als Vorort Jaffas gegründet.",
            "Rund 470.000 Einwohner, Metropolregion Gusch Dan über 4 Millionen.",
            "Im Unabhängigkeitssaal proklamierte Ben-Gurion am 14. Mai 1948 den Staat Israel.",
            "1950 mit dem antiken Jaffa zur Doppelstadt Tel Aviv-Jaffa vereinigt.",
            "Über 4.000 Bauhaus-Gebäude bilden die „Weiße Stadt“.",
            "Seit 2003 UNESCO-Weltkulturerbe.",
            "Wichtigstes Technologie- und Finanzzentrum Israels.",
            "Spitzname „die Stadt, die niemals schläft“."
        ]
    },
    "haifa-cities-v2": {
        "desc": "Haifa ist mit rund 285.000 Einwohnern die drittgrößte Stadt Israels und liegt an den Hängen des Berges Karmel an der Mittelmeerküste. Die Stadt wurde bereits in römischer Zeit erwähnt und entwickelte sich unter osmanischer Herrschaft im 18. Jahrhundert zu einem bedeutenden Hafen. Großen Aufschwung erlebte sie ab 1905 mit dem Bau der Hedschasbahn nach Damaskus. Nach der Staatsgründung 1948 wurde Haifa wichtigster Seehafen Israels und Industriestandort mit Raffinerien, Werften und Hochtechnologie. Die Stadt ist Sitz des Technion, der ältesten Universität Israels (gegründet 1912). Berühmt sind die terrassenförmigen Bahai-Gärten am Karmel-Hang, seit 2008 UNESCO-Welterbe. Haifa gilt als Vorbild für friedliches Zusammenleben von Juden, Arabern, Drusen und Bahai.",
        "facts": [
            "Rund 285.000 Einwohner, drittgrößte Stadt Israels.",
            "Liegt an den Hängen des Berges Karmel.",
            "Wichtigster Seehafen Israels.",
            "Sitz des Technion, gegründet 1912.",
            "Bahai-Weltzentrum mit hängenden Gärten.",
            "Bahai-Gärten seit 2008 UNESCO-Weltkulturerbe.",
            "Bedeutender Standort der Hightech-Industrie.",
            "Vorbild für jüdisch-arabisches Zusammenleben."
        ]
    },
    "rishon-lezion-cities-v2": {
        "desc": "Rischon LeZion wurde 1882 von zehn jüdischen Familien aus Russland im Rahmen der ersten Alija als landwirtschaftliche Siedlung gegründet und ist heute mit rund 260.000 Einwohnern die viertgrößte Stadt Israels. Der Name bedeutet „Erster in Zion“ und bezieht sich auf den biblischen Vers Jesaja 41,27. Die Siedler kämpften anfangs mit Wassermangel, Krankheiten und Misserfolgen, bis Baron Edmond de Rothschild die Kolonie unterstützte und den Weinbau förderte. Die Carmel-Weinkellerei von 1890 ist eine der ältesten und bekanntesten Israels. Hier entstand 1898 die erste hebräischsprachige Schule der Neuzeit, das blau-weiße Banner wurde hier erstmals als jüdische Flagge gehisst, und die israelische Nationalhymne Hatikwa wurde hier zum ersten Mal gesungen.",
        "facts": [
            "1882 als erste Siedlung der ersten Alija gegründet.",
            "Rund 260.000 Einwohner, viertgrößte Stadt Israels.",
            "Name bedeutet „Erster in Zion“ nach Jesaja 41,27.",
            "Baron Edmond de Rothschild unterstützte die Kolonie ab 1883.",
            "Carmel-Weinkellerei seit 1890 in Betrieb.",
            "Erste hebräische Schule der Neuzeit 1898 gegründet.",
            "Israelische Nationalhymne Hatikwa hier erstmals gesungen.",
            "Liegt südlich von Tel Aviv in der zentralen Küstenebene."
        ]
    },
    "petah-tikva-cities-v2": {
        "desc": "Petach Tikwa, hebräisch für „Tor der Hoffnung“, wurde 1878 von orthodoxen Juden aus Jerusalem als erste moderne jüdische landwirtschaftliche Siedlung in Palästina gegründet. Heute leben in der Stadt östlich von Tel Aviv rund 250.000 Menschen. Sie wird als „Mutter der Moschawot“ bezeichnet, da sie Vorbild für alle weiteren landwirtschaftlichen Kolonien war. Die ersten Jahre waren von Malaria und Misserfolgen geprägt, bis Baron Edmond de Rothschild die Siedlung ab 1883 unterstützte. Heute ist Petach Tikwa ein bedeutendes Industrie- und Hightech-Zentrum mit dem Sitz vieler internationaler Konzerne wie IBM, Oracle und Intel Israel. Das renommierte Rabin Medical Center ist eines der größten Krankenhäuser des Landes.",
        "facts": [
            "1878 als erste moderne landwirtschaftliche Siedlung gegründet.",
            "Rund 250.000 Einwohner.",
            "Name bedeutet „Tor der Hoffnung“ nach Hosea 2,17.",
            "Bekannt als „Mutter der Moschawot“.",
            "Zweitgrößter Industriesektor Israels nach Tel Aviv.",
            "Hauptsitz von Intel Israel, Oracle und IBM Israel.",
            "Rabin Medical Center, eines der größten Krankenhäuser.",
            "Liegt östlich von Tel Aviv in der Scharon-Ebene."
        ]
    },
    "ashdod-cities-v2": {
        "desc": "Aschdod gehört zu den ältesten Hafenstädten der Welt mit über 3.500 Jahren Geschichte und wurde bereits in den Schriften der Philister, in der hebräischen Bibel und bei den Assyrern erwähnt. Die moderne Stadt wurde am 1. Mai 1956 an der Mittelmeerküste, etwa 32 Kilometer südlich von Tel Aviv, neu gegründet. Heute leben hier rund 225.000 Einwohner. Aschdod beherbergt den größten Hafen Israels, der etwa 60 % des gesamten Frachtumschlags des Landes abwickelt. Die Stadt entwickelte sich rasch durch die Einwanderung jüdischer Gemeinden aus Marokko, dem Irak und nach 1990 aus der ehemaligen Sowjetunion und Äthiopien. Aschdod ist heute ein wichtiges Industriezentrum mit Raffinerie, Kraftwerk und petrochemischer Industrie sowie ein bedeutendes Kulturzentrum mit Konzertsaal und Museen.",
        "facts": [
            "Eine der ältesten Hafenstädte der Welt, über 3.500 Jahre alt.",
            "Moderne Stadt am 1. Mai 1956 neu gegründet.",
            "Rund 225.000 Einwohner.",
            "Größter Frachthafen Israels mit etwa 60 % des Umschlags.",
            "Bedeutende marokkanische und georgische Gemeinden.",
            "Wichtiger Standort der petrochemischen Industrie.",
            "Liegt 32 km südlich von Tel Aviv.",
            "In der Bibel als Stadt der Philister erwähnt."
        ]
    },
    "netanya-cities-v2": {
        "desc": "Netanja wurde 1929 als landwirtschaftliche Siedlung gegründet und nach dem amerikanisch-jüdischen Philanthropen Nathan Straus benannt, der die Gründung großzügig unterstützte. Die Stadt liegt etwa 30 Kilometer nördlich von Tel Aviv an der Mittelmeerküste und zählt heute rund 230.000 Einwohner. Mit ihren 14 Kilometer langen Sandstränden, den Steilküsten und der lebhaften Promenade ist Netanja eines der beliebtesten Urlaubsziele Israels. Ab den 1940er Jahren entwickelte sich die Stadt zum Zentrum der israelischen Diamantenindustrie, weshalb sie den Beinamen „Diamantenstadt“ trägt. Heute werden hier rund 50 % des israelischen Diamantenexports verarbeitet. Eine besonders große Gemeinschaft von Einwanderern aus Frankreich und Argentinien prägt das Stadtbild.",
        "facts": [
            "1929 gegründet, benannt nach Nathan Straus.",
            "Rund 230.000 Einwohner.",
            "14 km lange Sandstrände an der Mittelmeerküste.",
            "Zentrum der israelischen Diamantenindustrie.",
            "Verarbeitet rund 50 % des israelischen Diamantenexports.",
            "Beliebtes Urlaubsziel mit lebhafter Strandpromenade.",
            "Große französische und argentinische Einwanderergemeinde.",
            "Liegt 30 km nördlich von Tel Aviv."
        ]
    },
    "beersheba-cities-v2": {
        "desc": "Be'er Scheva, biblisch „Brunnen des Eides“, ist mit rund 215.000 Einwohnern die größte Stadt der Negev-Wüste und wird oft als „Hauptstadt des Südens“ bezeichnet. Die Geschichte der Stätte reicht bis in die Bronzezeit zurück, archäologische Funde belegen eine Besiedlung seit dem 4. Jahrtausend v. Chr. In der Bibel ist sie eng mit den Erzvätern Abraham, Isaak und Jakob verbunden. Die antike Tel Be'er Scheva ist seit 2005 UNESCO-Welterbe. Die moderne Stadt wuchs nach der Staatsgründung Israels 1948 rasch durch Einwanderer aus Nordafrika, dem Irak und der Sowjetunion. Heute beherbergt sie die Ben-Gurion-Universität, gegründet 1969, und ist ein dynamisches Zentrum für Cybersecurity und Wüstenforschung.",
        "facts": [
            "Rund 215.000 Einwohner, größte Stadt im Negev.",
            "Besiedlung seit dem 4. Jahrtausend v. Chr.",
            "Name bedeutet „Brunnen des Eides“ aus Genesis 21.",
            "Tel Be'er Scheva seit 2005 UNESCO-Weltkulturerbe.",
            "Ben-Gurion-Universität gegründet 1969.",
            "Wichtiges Zentrum für Cybersecurity und Hightech.",
            "Beduinenmarkt jeden Donnerstag traditionsreich.",
            "Hauptstadt des Südens Israels."
        ]
    },
    "bnei-brak-cities-v2": {
        "desc": "Bnei Brak ist eine der dichtest besiedelten Städte der Welt und das wichtigste Zentrum des ultraorthodoxen, charedischen Judentums in Israel. Die Stadt mit rund 215.000 Einwohnern wurde 1924 von chassidischen Juden aus Polen unter Führung des Rabbiners Yitzchok Gerstenkorn als landwirtschaftliche Siedlung östlich von Tel Aviv gegründet. Der Name geht auf eine biblische Stadt zurück, die im Buch Josua als Erbteil des Stammes Dan erwähnt wird. Über 90 % der Bevölkerung leben streng nach religiösem Gesetz, mit zahlreichen Talmudhochschulen, Synagogen und religiösen Verlagen. Die Geburtenrate gehört zu den höchsten der Welt, und das Durchschnittsalter ist mit unter 20 Jahren ungewöhnlich niedrig. Trotz hoher Armut blüht eine ausgeprägte religiöse Kultur.",
        "facts": [
            "Rund 215.000 Einwohner.",
            "1924 von chassidischen Juden aus Polen gegründet.",
            "Eine der dichtest besiedelten Städte der Welt.",
            "Über 90 % der Einwohner sind ultraorthodox (charedisch).",
            "Durchschnittsalter unter 20 Jahren.",
            "Sitz zahlreicher bedeutender Jeschiwot.",
            "Nach biblischer Stadt aus Josua 19,45 benannt.",
            "Liegt östlich von Tel Aviv."
        ]
    },
    "holon-cities-v2": {
        "desc": "Cholon wurde 1935 von zionistischen Pionieren als Arbeitersiedlung südlich von Tel Aviv gegründet und ist heute mit rund 200.000 Einwohnern die siebtgrößte Stadt Israels. Der Name bedeutet auf Hebräisch „Sand“ und verweist auf die ursprüngliche Lage in den Sanddünen der Küstenebene. Cholon entwickelte sich rasch zu einem wichtigen Industriezentrum, vor allem in der Textil-, Druck- und Lebensmittelindustrie. Seit den 2000er Jahren positioniert sich die Stadt unter Bürgermeister Moti Sasson als „Kinderstadt“ Israels mit dem 2001 eröffneten Israelischen Kindermuseum, dem Mediatheque-Theater und dem von Ron Arad entworfenen Design Museum Holon (2010). Eine bedeutende Gemeinschaft der Samaritaner mit etwa 380 Mitgliedern lebt im Stadtteil Neve Pinchas.",
        "facts": [
            "1935 als Arbeitersiedlung gegründet.",
            "Rund 200.000 Einwohner, siebtgrößte Stadt Israels.",
            "Name bedeutet auf Hebräisch „Sand“.",
            "Bekannt als „Kinderstadt“ Israels.",
            "Design Museum Holon eröffnet 2010, entworfen von Ron Arad.",
            "Israelisches Kindermuseum seit 2001.",
            "Heimat einer der zwei letzten Samaritanergemeinden weltweit.",
            "Liegt südlich von Tel Aviv."
        ]
    },
    "ramat-gan-cities-v2": {
        "desc": "Ramat Gan wurde 1921 als landwirtschaftliche Genossenschaft Ir Ganim („Stadt der Gärten“) gegründet und 1923 in Ramat Gan („Gartenhöhen“) umbenannt. Heute leben in der Stadt östlich von Tel Aviv rund 165.000 Einwohner. Sie ist Sitz der weltweit größten Diamantenbörse, die jährlich Diamanten im Wert von über 25 Milliarden US-Dollar umsetzt. Das Diamantenviertel Bursa beherbergt mit dem Moshe Aviv Tower (244 Meter) lange Zeit das höchste Gebäude Israels. Im Stadtgebiet befindet sich auch der Zoo Safari, der größte zoologische Park Israels mit afrikanischer Tierwelt. Die Bar-Ilan-Universität, 1955 gegründet, ist eine der größten Hochschulen des Landes. Ramat Gan war früher eigenständig, gilt heute aber als Teil der Metropolregion Gusch Dan.",
        "facts": [
            "1921 als Ir Ganim gegründet, 1923 umbenannt.",
            "Rund 165.000 Einwohner.",
            "Name bedeutet „Gartenhöhen“.",
            "Israelische Diamantenbörse mit Umsatz über 25 Mrd. US-Dollar jährlich.",
            "Moshe Aviv Tower 244 m hoch.",
            "Bar-Ilan-Universität gegründet 1955.",
            "Safari Ramat Gan, größter zoologischer Park Israels.",
            "Östlich von Tel Aviv im Großraum Gusch Dan."
        ]
    },
    "rehovot-cities-v2": {
        "desc": "Rechovot wurde 1890 von russisch-jüdischen Einwanderern der zweiten Alija als landwirtschaftliche Siedlung gegründet und ist heute mit rund 150.000 Einwohnern eine der wichtigsten Wissenschaftsstädte Israels. Der Name geht auf einen biblischen Brunnen Isaaks zurück (Genesis 26,22) und bedeutet „weite Plätze“. Die Stadt liegt etwa 20 Kilometer südlich von Tel Aviv. Berühmt ist sie für das 1934 gegründete und 1949 nach Israels erstem Präsidenten Chaim Weizmann umbenannte Weizmann-Institut für Wissenschaften, eine der weltweit führenden Forschungseinrichtungen in Naturwissenschaften. Außerdem beherbergt Rechovot die Fakultät für Landwirtschaft der Hebräischen Universität Jerusalem. Bis in die 1980er Jahre prägten Zitrushaine das Stadtbild, was Rechovot den Beinamen „Hauptstadt der Zitrusfrüchte“ einbrachte.",
        "facts": [
            "1890 von russisch-jüdischen Einwanderern gegründet.",
            "Rund 150.000 Einwohner.",
            "Name aus Genesis 26,22, bedeutet „weite Plätze“.",
            "Weizmann-Institut für Wissenschaften seit 1934.",
            "Chaim Weizmann, erster Präsident Israels, lebte und starb hier.",
            "Fakultät für Landwirtschaft der Hebräischen Universität.",
            "Früher „Hauptstadt der Zitrusfrüchte“.",
            "Liegt 20 km südlich von Tel Aviv."
        ]
    },
    "ashkelon-cities-v2": {
        "desc": "Aschkelon zählt zu den ältesten Hafenstädten der Welt mit einer über 5.000-jährigen Geschichte. In der Antike war sie eine der fünf Philisterstädte und wurde nacheinander von Kanaanitern, Ägyptern, Assyrern, Persern, Griechen, Römern, Byzantinern, Kreuzfahrern und Mamelucken beherrscht. Die moderne Stadt wurde 1948 nach der Staatsgründung Israels neu gegründet, zunächst durch Einwanderer aus Südafrika und ab 1953 vor allem durch Juden aus Jemen, Marokko und der Sowjetunion. Heute leben in Aschkelon rund 145.000 Einwohner. Der Nationalpark Aschkelon im Süden der Stadt umfasst antike Ruinen aus kanaanitischer, römischer und byzantinischer Zeit. Die Stadt verfügt über ein modernes Kraftwerk und eine bedeutende Meerwasserentsalzungsanlage, eine der größten der Welt.",
        "facts": [
            "Über 5.000 Jahre Geschichte, eine der ältesten Hafenstädte.",
            "Eine der fünf Philisterstädte in der Antike.",
            "Moderne Stadt 1948 nach Staatsgründung neu errichtet.",
            "Rund 145.000 Einwohner.",
            "Nationalpark mit antiken kanaanitischen Ruinen.",
            "Eine der größten Meerwasserentsalzungsanlagen weltweit.",
            "Bedeutende marokkanisch-jüdische Gemeinde.",
            "Liegt etwa 50 km südlich von Tel Aviv."
        ]
    },
    "bat-yam-cities-v2": {
        "desc": "Bat Jam, hebräisch „Tochter des Meeres“, wurde 1926 von orthodoxen jüdischen Pionieren als Bajit waGan („Haus und Garten“) gegründet und 1936 in Bat Jam umbenannt. Heute leben in der Küstenstadt direkt südlich von Tel Aviv rund 130.000 Einwohner. Die Stadt entwickelte sich nach 1948 rasch durch Einwanderer aus Bulgarien, Rumänien und später aus der ehemaligen Sowjetunion, von denen heute über 30 % der Einwohner abstammen. Bat Jam ist berühmt für seine 3,5 Kilometer lange Strandpromenade und galt lange als Vorzeige-Badeort der israelischen Mittelschicht. In der Stadt befindet sich auch das Ben-Ari-Museum für moderne israelische Kunst und das Museum für Modern Art Bat Yam, das eng mit Tel Aviv kooperiert. Heute ist die Stadt im urbanen Umbruch durch Hochhausprojekte.",
        "facts": [
            "1926 als Bajit waGan gegründet, 1936 umbenannt.",
            "Rund 130.000 Einwohner.",
            "Name bedeutet „Tochter des Meeres“.",
            "3,5 km lange Strandpromenade.",
            "Über 30 % russischsprachige Einwohner.",
            "Ben-Ari-Museum und Museum für Modern Art.",
            "Liegt direkt südlich von Tel Aviv.",
            "Bedeutende bulgarische und rumänische Einwanderergemeinden."
        ]
    },
    "beit-shemesh-cities-v2": {
        "desc": "Bet Schemesch, hebräisch „Haus der Sonne“, ist eine biblische Stadt, die im Buch Josua und im ersten Buch Samuel erwähnt wird. Hier soll die Bundeslade nach ihrer Rückkehr von den Philistern Halt gemacht haben. Die moderne Stadt wurde 1950 als Entwicklungsstadt für jüdische Einwanderer aus Bulgarien, Rumänien, dem Iran und Marokko gegründet. Sie liegt im malerischen Elah-Tal, etwa 20 Kilometer westlich von Jerusalem, dem Schauplatz des biblischen Kampfes zwischen David und Goliath. Heute leben in Bet Schemesch rund 130.000 Einwohner, was sie zu einer der am schnellsten wachsenden Städte Israels macht. Seit den 1990er Jahren siedelten sich vermehrt charedische und national-religiöse Gemeinden an, was zu einer demographischen Verschiebung führte. Die Stadt gilt heute als drittgrößte ultraorthodoxe Gemeinde Israels.",
        "facts": [
            "Biblische Stadt, im Buch Josua erwähnt.",
            "Moderne Stadt 1950 als Entwicklungsstadt gegründet.",
            "Rund 130.000 Einwohner.",
            "Name bedeutet „Haus der Sonne“.",
            "Liegt im biblischen Elah-Tal, Schauplatz Davids gegen Goliath.",
            "Eine der am schnellsten wachsenden Städte Israels.",
            "Drittgrößte ultraorthodoxe Gemeinde des Landes.",
            "20 km westlich von Jerusalem gelegen."
        ]
    },
    "kfar-saba-cities-v2": {
        "desc": "Kfar Saba, hebräisch „Dorf des Großvaters“, wurde 1903 von jüdischen Einwanderern aus Russland als landwirtschaftliche Siedlung in der Scharon-Ebene gegründet. Die ersten Jahre waren von Malaria und Wassermangel geprägt, sodass die Pioniere zwischen 1905 und 1912 mehrfach evakuiert werden mussten. Erst nach umfangreichen Trockenlegungen entwickelte sich die Siedlung erfolgreich. Kfar Saba liegt etwa 20 Kilometer nordöstlich von Tel Aviv und zählt heute rund 110.000 Einwohner. Die Stadt wurde 1962 zur Großstadt erhoben und ist heute ein bedeutendes Zentrum für Hightech, Gesundheitswesen mit dem renommierten Meir-Medical-Center, sowie Bildung. Kfar Saba gilt mit ihren weitläufigen Grünflächen, Parks und Radwegen als eine der lebenswertesten Städte Israels.",
        "facts": [
            "1903 von russisch-jüdischen Einwanderern gegründet.",
            "Rund 110.000 Einwohner.",
            "Name bedeutet „Dorf des Großvaters“.",
            "1962 zur Großstadt erhoben.",
            "Meir-Medical-Center, eines der größten Krankenhäuser.",
            "Wichtiges Hightech-Zentrum in der Scharon-Ebene.",
            "20 km nordöstlich von Tel Aviv.",
            "Bekannt für Grünflächen und Lebensqualität."
        ]
    },
    "herzliya-cities-v2": {
        "desc": "Herzlia wurde 1924 von amerikanisch-jüdischen Pionieren gegründet und nach Theodor Herzl, dem Begründer des politischen Zionismus, benannt. Die Stadt liegt etwa 12 Kilometer nördlich von Tel Aviv an der Mittelmeerküste und zählt heute rund 100.000 Einwohner. Herzlia gehört zu den wohlhabendsten Städten Israels und ist berühmt für den exklusiven Stadtteil Herzlia Pituach mit luxuriösen Villen, Botschaften und dem Marina-Viertel mit dem größten Yachthafen Israels. Die Stadt ist Sitz zahlreicher internationaler Hightech-Konzerne wie Microsoft, Apple, Google und IBM und gilt als Israels „Silicon Coast“. Hier befindet sich auch das renommierte Reichman University (ehemals IDC Herzliya), gegründet 1994, sowie das jährlich stattfindende Herzliya-Konferenzforum für Sicherheitspolitik.",
        "facts": [
            "1924 gegründet, benannt nach Theodor Herzl.",
            "Rund 100.000 Einwohner.",
            "Eine der wohlhabendsten Städte Israels.",
            "Größter Yachthafen Israels in Herzlia Pituach.",
            "Sitz von Microsoft, Apple, Google und IBM Israel.",
            "Reichman University seit 1994.",
            "Herzliya-Konferenz, wichtiges Sicherheitsforum.",
            "12 km nördlich von Tel Aviv an der Küste."
        ]
    },
    "hadera-cities-v2": {
        "desc": "Chadera wurde 1891 von jüdischen Einwanderern aus Russland und Litauen der ersten Alija gegründet, die das Land vom osmanischen Großgrundbesitzer Salim al-Khouri kauften. Die ersten Jahre waren von extremer Malaria geprägt, mehr als die Hälfte der ursprünglichen Siedler starb, bevor das sumpfige Gebiet durch australische Eukalyptusbäume erfolgreich trockengelegt wurde. Heute leben in der Stadt im nördlichen Scharon rund 100.000 Einwohner. Chadera ist Standort des größten Kohlekraftwerks Israels, des Orot-Rabin-Kraftwerks, das einen Großteil des nationalen Strombedarfs deckt. Die Stadt gilt als geographisches und kulturelles Bindeglied zwischen den Ballungsräumen Tel Aviv und Haifa. Das Khan Hadera Historical Museum dokumentiert die Pioniergeschichte. Charakteristisch sind die langen Stadteukalyptusalleen, die an die Trockenlegungspioniere erinnern.",
        "facts": [
            "1891 von russisch-jüdischen Einwanderern gegründet.",
            "Rund 100.000 Einwohner.",
            "Über die Hälfte der Pioniere starb anfangs an Malaria.",
            "Sümpfe mit australischen Eukalyptusbäumen trockengelegt.",
            "Orot-Rabin-Kraftwerk, größtes Kohlekraftwerk Israels.",
            "Geographisches Bindeglied zwischen Tel Aviv und Haifa.",
            "Khan Hadera Museum dokumentiert die Pioniergeschichte.",
            "Liegt im nördlichen Scharon."
        ]
    },
    "modiin-cities-v2": {
        "desc": "Modi'in-Maccabim-Re'ut wurde 1996 als sorgfältig geplante moderne Stadt gegründet und ist mit rund 95.000 Einwohnern eine der jüngsten und am schnellsten wachsenden Städte Israels. Sie liegt strategisch auf halbem Weg zwischen Tel Aviv und Jerusalem in der Schfela-Region und wurde nach den Plänen des Architekten Moshe Safdie entworfen, der auch das Habitat 67 in Montreal und Yad Vashem gestaltete. Der Name verweist auf das antike Modi'in, Heimat der Makkabäer-Familie, die im 2. Jahrhundert v. Chr. den Aufstand gegen die Seleukiden anführte und das Chanukka-Fest etablierte. Die archäologische Stätte Tel Modi'in liegt in der Nähe. Heute beherbergt die Stadt vorrangig junge Familien und Pendler nach Tel Aviv und Jerusalem, mit großzügigen Grünflächen, Schulen und einer modernen Infrastruktur.",
        "facts": [
            "1996 als geplante Stadt gegründet.",
            "Rund 95.000 Einwohner, eine der jüngsten Städte.",
            "Liegt zwischen Tel Aviv und Jerusalem.",
            "Entworfen vom Architekten Moshe Safdie.",
            "Name verweist auf die antiken Makkabäer.",
            "Heimatort der Chanukka-Geschichte aus dem 2. Jh. v. Chr.",
            "Bekannt für hochwertige Stadtplanung und Grünflächen.",
            "Schnell wachsende Pendlerstadt."
        ]
    },
    "nazareth-cities-v2": {
        "desc": "Nazareth ist mit rund 78.000 Einwohnern die größte arabische Stadt Israels und das wichtigste christliche Pilgerzentrum des Landes. Die Stadt liegt malerisch in den Bergen Niedergaliläas, etwa 25 Kilometer östlich von Haifa. Im Neuen Testament wird Nazareth als Heimatort Marias und Wohnort der Heiligen Familie nach der Rückkehr aus Ägypten beschrieben, wo Jesus seine Kindheit verbrachte. Hauptattraktion ist die monumentale Verkündigungsbasilika, die 1969 über den Ruinen byzantinischer und kreuzfahrerzeitlicher Vorgängerbauten errichtet wurde und heute die größte Kirche des Nahen Ostens ist. Etwa 70 % der Einwohner sind Muslime, rund 30 % christliche Araber. Die benachbarte jüdische Stadt Nazareth Illit wurde 1957 gegründet. Nazareth bewahrt eine vielschichtige Tradition arabischer Kultur, christlicher Liturgie und nahöstlicher Küche.",
        "facts": [
            "Rund 78.000 Einwohner, größte arabische Stadt Israels.",
            "Heimatort Jesu Christi und der Heiligen Familie.",
            "Verkündigungsbasilika 1969 fertiggestellt, größte Kirche des Nahen Ostens.",
            "Etwa 70 % Muslime, 30 % Christen.",
            "Liegt in den Bergen Niedergaliläas.",
            "Maria-Brunnen, traditioneller Ort der Verkündigung.",
            "25 km östlich von Haifa.",
            "Wichtigster christlicher Pilgerort Israels."
        ]
    },
    "lod-cities-v2": {
        "desc": "Lod, biblisches Lydda, ist eine der ältesten kontinuierlich bewohnten Städte Israels mit über 7.000 Jahren Geschichte. Bereits in der Antike wurde sie in ägyptischen Quellen erwähnt, in der Apostelgeschichte besucht der Apostel Petrus die Stadt. Im Mittelalter war Lod als Pilgerziel zum Grab des heiligen Georg, christlicher Märtyrer und Schutzpatron Englands, von Bedeutung. Die Stadt liegt etwa 15 Kilometer südöstlich von Tel Aviv und beherbergt mit dem Ben-Gurion-Flughafen den größten internationalen Flughafen Israels, eröffnet 1936. Heute leben in Lod rund 80.000 Einwohner, davon ein Drittel Araber und zwei Drittel Juden, viele davon Einwanderer aus Äthiopien und der ehemaligen Sowjetunion. Berühmt ist das im Jahr 1996 entdeckte Lod-Mosaik aus der römischen Kaiserzeit (3. Jahrhundert n. Chr.), eines der besterhaltenen Mosaike der Welt.",
        "facts": [
            "Über 7.000 Jahre kontinuierlich bewohnt.",
            "Rund 80.000 Einwohner.",
            "Ben-Gurion-Flughafen seit 1936, größter Flughafen Israels.",
            "Im Neuen Testament als Lydda erwähnt.",
            "Grab des heiligen Georg in der Georgskirche.",
            "Lod-Mosaik aus dem 3. Jh. n. Chr. weltberühmt.",
            "Etwa ein Drittel arabische Bevölkerung.",
            "15 km südöstlich von Tel Aviv."
        ]
    },
    "ramla-cities-v2": {
        "desc": "Ramla, hebräisch und arabisch für „Sand“, wurde im Jahr 716 n. Chr. vom umayyadischen Kalifen Sulayman ibn Abd al-Malik gegründet und ist die einzige Stadt Israels, die in der frühislamischen Zeit erbaut wurde. Sie diente jahrhundertelang als Verwaltungshauptstadt der islamischen Provinz Jund Filastin. Im Mittelalter besuchten zahlreiche Reisende und Pilger die Stadt, darunter Marco Polo und Ibn Battuta. Die Stadt liegt etwa 20 Kilometer südöstlich von Tel Aviv. Heute leben in Ramla rund 78.000 Einwohner, eine seltene gemischte Bevölkerung aus Juden, Muslimen, Christen und Karäern. Berühmt sind der unterirdische Pool der Bögen aus dem 8. Jahrhundert, der Weiße Turm aus mamlukischer Zeit (1318) und die Große Moschee, ursprünglich eine Kreuzfahrerkirche. Ramla gilt als Symbol des jüdisch-arabischen Zusammenlebens in Israel.",
        "facts": [
            "716 n. Chr. von Kalif Sulayman gegründet.",
            "Einzige Stadt Israels aus der frühislamischen Zeit.",
            "Rund 78.000 Einwohner.",
            "Pool der Bögen aus dem 8. Jh. unterirdisch.",
            "Weißer Turm aus mamlukischer Zeit (1318).",
            "Gemischte Bevölkerung aus Juden, Muslimen, Christen, Karäern.",
            "Marco Polo und Ibn Battuta besuchten die Stadt.",
            "20 km südöstlich von Tel Aviv."
        ]
    },
    "raanana-cities-v2": {
        "desc": "Ra'anana, hebräisch „frisch“ oder „grün“, wurde 1922 von amerikanisch-jüdischen Einwanderern aus New York unter dem Namen Ahuza Aleph gegründet und 1924 in Ra'anana umbenannt. Die Stadt liegt in der südlichen Scharon-Ebene, etwa 20 Kilometer nordöstlich von Tel Aviv, und zählt heute rund 75.000 Einwohner. Ursprünglich eine landwirtschaftliche Siedlung mit Zitrushainen, entwickelte sich Ra'anana ab den 1990er Jahren zu einem bedeutenden Hightech-Standort. Internationale Konzerne wie SAP, Microsoft, Texas Instruments und Amdocs haben hier ihren israelischen Sitz. Die Stadt ist berühmt für ihre hohe Lebensqualität, weitläufigen Grünflächen und den großzügigen Stadtpark. Eine besonders große Gemeinschaft englischsprachiger Einwanderer aus den USA, Großbritannien, Kanada und Südafrika prägt das Stadtbild und brachte ihr den Beinamen „die Perle der Scharon-Ebene“ ein.",
        "facts": [
            "1922 von amerikanisch-jüdischen Einwanderern gegründet.",
            "Rund 75.000 Einwohner.",
            "Name bedeutet „frisch“ oder „grün“.",
            "Sitz von SAP, Microsoft, Texas Instruments Israel.",
            "Große englischsprachige Einwanderergemeinde.",
            "„Perle der Scharon-Ebene“ genannt.",
            "Bekannt für hohe Lebensqualität und Grünflächen.",
            "20 km nordöstlich von Tel Aviv."
        ]
    },
    "rahat-cities-v2": {
        "desc": "Rahat ist mit rund 75.000 Einwohnern die größte beduinische Stadt der Welt und die einzige Beduinengemeinde in Israel mit Stadtrang. Sie wurde 1972 von der israelischen Regierung als geplante Siedlung im nördlichen Negev gegründet, etwa 12 Kilometer nördlich von Be'er Scheva. Ziel war die Sesshaftmachung der traditionell nomadischen Beduinen, die zuvor in verstreuten Lagern in der Wüste lebten. 1994 wurde Rahat offiziell zur Stadt erhoben. Die Bevölkerung wächst aufgrund einer der höchsten Geburtenraten weltweit (etwa 5 Kinder pro Frau) sehr schnell. Die Bewohner gehören überwiegend zu den Tarabin-, Azazma- und Tiyaha-Stämmen. Trotz Modernisierung bewahren sie viele traditionelle Bräuche und Beduinenkultur. Das alljährliche Beduinen-Festival zieht Besucher aus ganz Israel an. Rahat steht vor sozialen Herausforderungen wie Arbeitslosigkeit und Armut.",
        "facts": [
            "1972 als geplante Siedlung gegründet.",
            "Rund 75.000 Einwohner, größte beduinische Stadt der Welt.",
            "1994 offiziell zur Stadt erhoben.",
            "Einzige Beduinengemeinde mit Stadtrang in Israel.",
            "Eine der höchsten Geburtenraten weltweit.",
            "Bewohner aus Tarabin-, Azazma- und Tiyaha-Stämmen.",
            "12 km nördlich von Be'er Scheva.",
            "Jährliches Beduinen-Festival mit traditioneller Kultur."
        ]
    },
    "hod-hasharon-cities-v2": {
        "desc": "Hod haScharon, hebräisch „Pracht der Scharon“, entstand 1964 durch den Zusammenschluss von vier landwirtschaftlichen Moschawot: Magdiel (1924), Ramatajim (1925), Hadar (1927) und Ramat Hadar (1934). Die Stadt liegt im Herzen der Scharon-Ebene, etwa 16 Kilometer nordöstlich von Tel Aviv. Heute leben hier rund 70.000 Einwohner. Die Gründerfamilien stammten aus Polen, Russland und dem Jemen und bauten ursprünglich Zitrusfrüchte und Geflügel an. Bis heute bewahrt Hod haScharon einen ländlichen Charakter mit weiten Grünflächen, Reitanlagen, Pferdefarmen und Einfamilienhäusern auf großen Grundstücken, was sie zu einer der teuersten Wohngegenden Israels macht. Die Stadt ist Teil der Metropolregion Tel Aviv, jedoch mit deutlich entspannterem Tempo. 2017 wurde der Sharona-Park als zentrale Grünanlage eröffnet.",
        "facts": [
            "1964 durch Fusion von vier Moschawot gegründet.",
            "Rund 70.000 Einwohner.",
            "Name bedeutet „Pracht der Scharon“.",
            "Entstand aus Magdiel, Ramatajim, Hadar und Ramat Hadar.",
            "Älteste Gründungsmoschawa Magdiel von 1924.",
            "Teuerste Wohngegend mit Reitanlagen.",
            "Bewahrt ländlichen Charakter mit Grünflächen.",
            "16 km nordöstlich von Tel Aviv."
        ]
    },
    "kiryat-ata-cities-v2": {
        "desc": "Kirjat Ata wurde 1925 als Kfar Ata von der polnisch-jüdischen Organisation Atid Tachsisei aus Łódź gegründet, deren Name in der Abkürzung „Ata“ den Namen der Siedlung bildete. 1969 wurde Kfar Ata mit der benachbarten Kiryat Bialik zu Kirjat Ata zusammengelegt und 1969 zur Stadt erhoben. Die Stadt liegt im Bezirk Haifa, etwa 10 Kilometer nordöstlich der Hafenstadt, am Rande der Ebene Sebulon. Heute leben in Kirjat Ata rund 60.000 Einwohner. Sie gehört zu den Krajot, den fünf Vorstadtgemeinden Haifas. Bekannt war Kirjat Ata jahrzehntelang für die Textilfabrik ATA, die von 1934 bis 1985 das wichtigste israelische Bekleidungsunternehmen war und uniforme der israelischen Armee herstellte. Heute ist die Stadt ein bedeutender Industriestandort mit Lebensmittel-, Metall- und Hightech-Industrie.",
        "facts": [
            "1925 als Kfar Ata von polnisch-jüdischer Organisation gegründet.",
            "Rund 60.000 Einwohner.",
            "Name aus Abkürzung „Atid Tachsisei“.",
            "1969 zur Stadt erhoben.",
            "Größte der Krajot, Vorstadtgemeinden Haifas.",
            "Textilfabrik ATA von 1934 bis 1985 berühmt.",
            "Lieferte Uniformen der israelischen Armee.",
            "10 km nordöstlich von Haifa."
        ]
    },
    "nahariya-cities-v2": {
        "desc": "Naharija wurde 1934 von deutsch-jüdischen Einwanderern aus dem nationalsozialistischen Deutschland im Rahmen der fünften Alija gegründet und ist die nördlichste Küstenstadt Israels, etwa 8 Kilometer südlich der libanesischen Grenze. Der Name bedeutet auf Hebräisch „Fluss“ und bezieht sich auf den Bach Ga'aton, der durch die zentrale Allee der Stadt fließt. Heute leben in Naharija rund 60.000 Einwohner. Die Gründer prägten die Stadt mit ihrer mitteleuropäisch-bürgerlichen Kultur, was ihr lange den Beinamen „Klein-Wien“ einbrachte. Die zentrale Allee Sderot HaGa'aton mit Eukalyptusbäumen und Wasserkanälen ist das Wahrzeichen. Naharija ist heute ein beliebter Sommerurlaubsort mit Strand, Promenade und Jachthafen. In der Stadt befindet sich auch das Western Galilee Medical Center. In den Sechstagekriegen und im Libanonkrieg lag Naharija mehrfach unter Beschuss.",
        "facts": [
            "1934 von deutsch-jüdischen Einwanderern gegründet.",
            "Rund 60.000 Einwohner.",
            "Nördlichste Küstenstadt Israels.",
            "8 km südlich der libanesischen Grenze.",
            "Name bedeutet „Fluss“ nach dem Bach Ga'aton.",
            "Beiname „Klein-Wien“ wegen mitteleuropäischer Kultur.",
            "Western Galilee Medical Center vor Ort.",
            "Beliebtes Sommerurlaubsziel mit Promenade."
        ]
    },
    "eilat-cities-v2": {
        "desc": "Eilat, die südlichste Stadt Israels, liegt an der Nordspitze des Roten Meeres am Golf von Akaba. Die moderne Stadt wurde am 10. März 1949 nach der Operation Uvda im Rahmen des Unabhängigkeitskriegs als israelisches Territorium gesichert. Bereits in der Antike war Etzion-Geber, ein Hafen König Salomos, an gleicher Stelle dokumentiert. Heute leben in Eilat rund 53.000 Einwohner. Die Stadt grenzt direkt an Akaba in Jordanien und ist nur 7 Kilometer von der ägyptischen Sinai-Grenze entfernt. Das Wüstenklima beschert Eilat über 360 Sonnentage pro Jahr, was sie zu einem der wichtigsten Urlaubsziele Israels macht. Die einzigartigen Korallenriffe vor der Küste, das Coral Beach Naturreservat und das Underwater Observatory ziehen Taucher und Touristen aus aller Welt an. Eilat ist freie Wirtschaftszone ohne Mehrwertsteuer und beherbergt einen wichtigen Tiefseehafen am Roten Meer.",
        "facts": [
            "Rund 53.000 Einwohner, südlichste Stadt Israels.",
            "Am 10. März 1949 für Israel gesichert.",
            "Liegt am Golf von Akaba am Roten Meer.",
            "Über 360 Sonnentage pro Jahr.",
            "Korallenriffe und Coral Beach Naturreservat.",
            "Freie Wirtschaftszone ohne Mehrwertsteuer.",
            "Grenzt an Jordanien (Akaba) und nahe Ägypten.",
            "Antikes Etzion-Geber, Hafen König Salomos."
        ]
    },
    "afula-cities-v2": {
        "desc": "Afula wurde 1925 von der American Zionist Commonwealth auf Land gegründet, das von der Familie Sursock aus dem Libanon gekauft worden war. Die Stadt liegt im Herzen der fruchtbaren Jesreelebene, etwa auf halbem Weg zwischen Haifa und der See Genezareth, und wird oft als „Hauptstadt der Jesreelebene“ bezeichnet. Heute leben in Afula rund 55.000 Einwohner. In der Antike befand sich an dieser Stelle die kanaanitische Stadt Afula, die im 14. Jahrhundert v. Chr. in den Amarna-Briefen erwähnt wurde. Die moderne Stadt wuchs nach 1948 durch Einwanderer aus dem Irak, Marokko, Jemen und der Sowjetunion. Afula ist heute ein wichtiger regionaler Verkehrsknotenpunkt und Standort des HaEmek Medical Center, eines der größten Krankenhäuser Nordisraels. Die Stadt ist umgeben von Sonnenblumenfeldern, Weizen und Baumwollanbau.",
        "facts": [
            "1925 von der American Zionist Commonwealth gegründet.",
            "Rund 55.000 Einwohner.",
            "Hauptstadt der Jesreelebene.",
            "In den Amarna-Briefen aus dem 14. Jh. v. Chr. erwähnt.",
            "HaEmek Medical Center, eines der größten im Norden.",
            "Wichtiger regionaler Verkehrsknotenpunkt.",
            "Umgeben von fruchtbaren Feldern.",
            "Auf halbem Weg zwischen Haifa und See Genezareth."
        ]
    },
    "tiberias-cities-v2": {
        "desc": "Tiberias wurde im Jahr 20 n. Chr. von Herodes Antipas, dem Sohn Herodes des Großen, gegründet und nach dem römischen Kaiser Tiberius benannt. Die Stadt liegt am Westufer des Sees Genezareth, etwa 200 Meter unter dem Meeresspiegel, und ist eine der vier heiligen Städte des Judentums – neben Jerusalem, Hebron und Safed. Nach der Zerstörung Jerusalems 70 n. Chr. wurde Tiberias zum bedeutendsten jüdischen Zentrum Palästinas, hier entstand zwischen dem 4. und 6. Jahrhundert der Jerusalemer Talmud. Heute leben in Tiberias rund 48.000 Einwohner. Die Stadt ist berühmt für ihre 17 heißen Schwefelquellen, die bereits von den Römern als Hammat Tiberias genutzt wurden. Im Mittelalter war Tiberias Wirkungsstätte berühmter jüdischer Gelehrter wie Maimonides, dessen Grabstätte heute Pilgerziel ist. Im Sommer ist die Stadt ein beliebter Erholungsort am See Genezareth.",
        "facts": [
            "20 n. Chr. von Herodes Antipas gegründet.",
            "Benannt nach Kaiser Tiberius.",
            "Rund 48.000 Einwohner.",
            "Eine der vier heiligen Städte des Judentums.",
            "Liegt 200 m unter dem Meeresspiegel am See Genezareth.",
            "Geburtsort des Jerusalemer Talmud (4.-6. Jh.).",
            "17 heiße Schwefelquellen seit der Römerzeit.",
            "Grabstätte des Maimonides."
        ]
    },
}


def fmt_facts(facts):
    items = ", ".join('"' + f.replace('"', '\\"') + '"' for f in facts)
    return f"[{items}]"


def main():
    text = FILE.read_text(encoding="utf-8")
    original = text
    filled = 0
    skipped = 0
    not_found = 0

    for poi_id, content in DATA.items():
        # Find the POI block: from `id: "<id>"` line up through the closing `}` of the object
        # Pattern: id line, then capture everything up through facts: { ... }, then \n  }
        pattern = re.compile(
            r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?\n\s*facts:\s*\{[\s\S]*?\n\s{4}\})(\s*\n\s{2}\})',
            re.MULTILINE
        )
        m = pattern.search(text)
        if not m:
            print(f"NOT FOUND: {poi_id}")
            not_found += 1
            continue

        block_inner = m.group(1)  # up through facts closing }
        block_close = m.group(2)  # newline + closing } of POI object

        if "descriptionAdvanced" in block_inner:
            print(f"SKIP (descriptionAdvanced exists): {poi_id}")
            skipped += 1
            continue

        de_desc = content["desc"].replace("\\", "\\\\").replace('"', '\\"')
        de_facts = fmt_facts(content["facts"])

        addition = (
            ",\n    descriptionAdvanced: {\n"
            f'      de: "{de_desc}"\n'
            "    },\n    factsAdvanced: {\n"
            f"      de: {de_facts}\n"
            "    }"
        )

        new_full = block_inner + addition + block_close
        text = text[:m.start()] + new_full + text[m.end():]
        filled += 1
        print(f"FILLED: {poi_id}")

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"\nDone. Filled={filled}, Skipped={skipped}, NotFound={not_found}")
    else:
        print(f"\nNothing changed. Skipped={skipped}, NotFound={not_found}")


if __name__ == "__main__":
    main()
