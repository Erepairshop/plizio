"""Fill descriptionAdvanced.de + factsAdvanced.de in poiExtraBurkinaFasoCitiesV2.ts.

Strategy: regex-find each POI block by id, locate descriptionAdvanced { ... } and
factsAdvanced { ... } objects, and inject (or replace) the `de:` entry.

Targets first 30 POIs whose descriptionAdvanced.de is missing or empty.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraBurkinaFasoCitiesV2.ts")

# id -> { desc: str, facts: list[str] }
DATA: dict[str, dict] = {
    "ouahigouya-cities-v2": {  # has DE already? we'll skip if filled
        "desc": (
            "Ouahigouya ist die Hauptstadt der Nordregion Burkina Fasos und liegt rund 182 Kilometer "
            "nordwestlich von Ouagadougou. Die Stadt wurde im 18. Jahrhundert vom Mossi-Prinzen Naaba "
            "Kango als Sitz des Yatenga-Königreichs gegründet und entwickelte sich zur kulturellen "
            "Metropole des Sahel. Heute leben hier rund 125.000 Menschen, die überwiegend von Hirseanbau, "
            "Viehzucht und Handwerk leben. Während der französischen Kolonialzeit ab 1895 wurde die Stadt "
            "Verwaltungssitz und Knotenpunkt für Karawanenrouten Richtung Mali. In der Sankara-Ära (1983-1987) "
            "entstanden hier Pilotprojekte zur Aufforstung gegen die Wüstenbildung."
        ),
        "facts": [
            "Gegründet im Jahr 1757 von Naaba Kango",
            "Hauptstadt des historischen Yatenga-Königreichs",
            "Einwohnerzahl ca. 125.000 (Stand 2019)",
            "Liegt 1.815 km von der Atlantikküste entfernt",
            "Französische Eroberung im Jahr 1895",
            "Klimazone: Sudano-Sahel, 600-700 mm Niederschlag",
            "Wichtiger Markt für Hirse und Vieh",
        ],
    },
    "banfora-cities-v2": {
        "desc": (
            "Banfora ist die Hauptstadt der Region Cascades im Südwesten Burkina Fasos und mit etwa "
            "117.000 Einwohnern die viertgrößte Stadt des Landes. Die Stadt liegt in einer der "
            "fruchtbarsten Zonen des Landes, mit jährlichen Niederschlägen über 1.000 mm. Berühmt sind "
            "die nahegelegenen Karfiguela-Wasserfälle und die Sindou-Felsen. Banfora ist das Zentrum der "
            "burkinischen Zuckerrohrindustrie: die Firma SOSUCO (Société Sucrière de la Comoé) beschäftigt "
            "hier seit 1972 tausende Arbeiter. Die französische Kolonialverwaltung baute die Eisenbahnlinie "
            "Abidjan-Ouagadougou bis 1934 durch die Stadt."
        ),
        "facts": [
            "Hauptstadt der Region Cascades",
            "Einwohnerzahl ca. 117.000 (2019)",
            "Karfiguela-Wasserfälle in 12 km Entfernung",
            "Sindou-Felsen-Formationen aus Sandstein",
            "SOSUCO-Zuckerfabrik gegründet 1972",
            "Eisenbahnanschluss seit 1934",
            "Jährlicher Niederschlag über 1.000 mm",
        ],
    },
    "kaya-cities-v2": {
        "desc": (
            "Kaya ist die Hauptstadt der Region Centre-Nord und liegt rund 100 Kilometer nordöstlich von "
            "Ouagadougou. Die Stadt mit etwa 121.000 Einwohnern ist seit Jahrhunderten ein wichtiger "
            "Handelsplatz für Vieh, Leder und Häute. Die Lederhandwerker von Kaya sind in ganz Westafrika "
            "bekannt und produzieren Sandalen, Taschen und Sättel nach traditioneller Mossi-Methode. "
            "Während der französischen Kolonialzeit war Kaya ein Verwaltungsposten der Kolonie "
            "Haute-Volta. In den letzten Jahren ist die Stadt zum Zufluchtsort für Binnenvertriebene aus "
            "den nördlichen Konfliktgebieten geworden, was die Bevölkerung stark anschwellen ließ."
        ),
        "facts": [
            "Hauptstadt der Region Centre-Nord",
            "Einwohnerzahl ca. 121.000 (2019)",
            "100 km nordöstlich von Ouagadougou",
            "Zentrum der traditionellen Lederverarbeitung",
            "Wichtiger Viehmarkt für die Sahelzone",
            "Aufnahmeort für über 300.000 Binnenvertriebene seit 2019",
            "Klimazone: Sudano-Sahel",
        ],
    },
    "tenkodogo-cities-v2": {
        "desc": (
            "Tenkodogo ist die Hauptstadt der Region Centre-Est und gilt als die älteste der Mossi-Städte. "
            "Der Legende nach wurde sie im 12. Jahrhundert von Naaba Wedraogo, dem Stammvater der Mossi, "
            "gegründet. Heute leben hier etwa 85.000 Menschen. Die Stadt liegt strategisch an der "
            "Verkehrsachse zwischen Ouagadougou und der togolesischen Grenze, rund 180 Kilometer südöstlich "
            "der Hauptstadt. Während der französischen Kolonialzeit ab 1897 wurde Tenkodogo zum "
            "Verwaltungszentrum, behielt aber seine Bedeutung als spirituelles Zentrum der Mossi. Der "
            "traditionelle Naaba-Palast ist bis heute Sitz eines Mossi-Königs."
        ),
        "facts": [
            "Älteste Mossi-Stadt, gegründet im 12. Jahrhundert",
            "Hauptstadt der Region Centre-Est",
            "Einwohnerzahl ca. 85.000 (2019)",
            "180 km südöstlich von Ouagadougou",
            "Sitz eines traditionellen Naaba (Mossi-König)",
            "Französische Eroberung im Jahr 1897",
            "Knotenpunkt zur togolesischen Grenze",
        ],
    },
    "fada-ngourma-cities-v2": {
        "desc": (
            "Fada N'Gourma ist die Hauptstadt der Ostregion Burkina Fasos und das Zentrum des Gourma-Volkes. "
            "Die Stadt mit rund 41.000 Einwohnern liegt 220 Kilometer östlich von Ouagadougou an der "
            "Hauptstraße nach Niamey. Sie wurde im 17. Jahrhundert als Sitz eines Gourma-Königreichs "
            "gegründet und hat einen eigenen traditionellen Herrscher, den Yendabri. Während der "
            "französischen Kolonialzeit ab 1897 wurde sie Verwaltungsposten der Region Est. Heute ist Fada "
            "ein wichtiges Zentrum für Baumwollhandel und Goldsuche, doch seit 2018 leidet die Region unter "
            "der Sahel-Sicherheitskrise und Aktivitäten dschihadistischer Gruppen."
        ),
        "facts": [
            "Hauptstadt der Ostregion (Région de l'Est)",
            "Einwohnerzahl ca. 41.000 (2019)",
            "220 km östlich von Ouagadougou",
            "Zentrum des Gourma-Volkes",
            "Sitz des traditionellen Yendabri-Herrschers",
            "Französische Kolonialposten seit 1897",
            "Wichtiger Handelsplatz an der Achse nach Niamey",
        ],
    },
    "dedougou-cities-v2": {
        "desc": (
            "Dédougou ist die Hauptstadt der Region Boucle du Mouhoun im Westen Burkina Fasos. Die Stadt "
            "mit rund 56.000 Einwohnern liegt 230 Kilometer westlich von Ouagadougou am Fluss Mouhoun "
            "(früher Schwarzer Volta genannt). Sie ist das Zentrum des Bwa-Volkes und berühmt für das "
            "alle zwei Jahre stattfindende FESTIMA-Maskenfestival, das tausende Tänzer aus mehreren "
            "westafrikanischen Ländern zusammenbringt. Während der französischen Kolonialzeit ab 1898 "
            "war Dédougou ein wichtiger Verwaltungsposten. Die Region ist eine der Hauptanbauflächen für "
            "Baumwolle und Hirse in Burkina Faso, mit über 200.000 Hektar bestellter Fläche."
        ),
        "facts": [
            "Hauptstadt der Region Boucle du Mouhoun",
            "Einwohnerzahl ca. 56.000 (2019)",
            "230 km westlich von Ouagadougou",
            "Liegt am Fluss Mouhoun (Schwarzer Volta)",
            "FESTIMA-Maskenfestival alle zwei Jahre",
            "Zentrum des Bwa-Volkes",
            "Wichtigste Baumwollanbauregion des Landes",
        ],
    },
    "kongoussi-cities-v2": {
        "desc": (
            "Kongoussi ist die Hauptstadt der Provinz Bam im Norden Burkina Fasos und liegt 110 Kilometer "
            "nördlich von Ouagadougou. Die Stadt mit etwa 31.000 Einwohnern liegt am Ufer des Bam-Sees, "
            "einem der wichtigsten Süßwasserreservoire des Landes. Die umliegenden Felder werden seit den "
            "1970er Jahren bewässert und produzieren Reis, Zwiebeln und Tomaten. Die Region ist auch für "
            "ihre Manganerzvorkommen bekannt, die seit 2013 industriell abgebaut werden. Während der "
            "Sankara-Ära (1983-1987) wurden hier Aufforstungs- und Bewässerungsprojekte als Modellprogramm "
            "für ganz Westafrika eingerichtet."
        ),
        "facts": [
            "Hauptstadt der Provinz Bam",
            "Einwohnerzahl ca. 31.000 (2019)",
            "110 km nördlich von Ouagadougou",
            "Liegt am Bam-See (25 km² Fläche)",
            "Manganerzabbau seit 2013",
            "Bewässerungslandwirtschaft seit den 1970er Jahren",
            "Pilotprojekt für Aufforstung unter Sankara",
        ],
    },
    "djibo-cities-v2": {
        "desc": (
            "Djibo ist die Hauptstadt der Provinz Soum im Sahel und liegt 200 Kilometer nördlich von "
            "Ouagadougou. Die Stadt mit rund 38.000 Einwohnern ist das traditionelle Zentrum der "
            "Fulani-Hirten in Burkina Faso. Der wöchentliche Viehmarkt von Djibo war einst einer der "
            "größten in Westafrika, mit über 10.000 Rindern pro Markttag. Während der französischen "
            "Kolonialzeit ab 1916 wurde Djibo zum Verwaltungsposten. Seit 2015 leidet die Region stark "
            "unter dschihadistischen Anschlägen und einer wirtschaftlichen Blockade; viele Einwohner "
            "wurden zu Binnenvertriebenen. Die Stadt befindet sich seit 2022 unter humanitärer Belagerung."
        ),
        "facts": [
            "Hauptstadt der Provinz Soum",
            "Einwohnerzahl ca. 38.000 (2019)",
            "200 km nördlich von Ouagadougou",
            "Traditionelles Zentrum der Fulani-Hirten",
            "Einer der größten Viehmärkte Westafrikas",
            "Französische Kolonialposten seit 1916",
            "Seit 2022 unter humanitärer Blockade",
        ],
    },
    "dori-cities-v2": {
        "desc": (
            "Dori ist die Hauptstadt der Sahelregion Burkina Fasos und liegt 263 Kilometer nordöstlich "
            "von Ouagadougou. Die Stadt mit rund 47.000 Einwohnern ist das wichtigste urbane Zentrum am "
            "Rand der Sahara. Sie wurde im 18. Jahrhundert von Fulani-Händlern als Karawanenposten an der "
            "Route zwischen Timbuktu und Niger gegründet. Während der französischen Kolonialzeit ab 1895 "
            "wurde Dori Hauptort der Region Liptako. Heute ist die Stadt ein Aufnahmeort für tausende "
            "malische Flüchtlinge im Camp Goudebou. Die Wirtschaft basiert auf Viehhandel, Gold-Kleinabbau "
            "und traditionellem Handwerk."
        ),
        "facts": [
            "Hauptstadt der Sahelregion",
            "Einwohnerzahl ca. 47.000 (2019)",
            "263 km nordöstlich von Ouagadougou",
            "Gegründet im 18. Jahrhundert von Fulani-Händlern",
            "Französische Verwaltung seit 1895",
            "Flüchtlingscamp Goudebou seit 2012",
            "Klimazone: Sahel, unter 500 mm Niederschlag",
        ],
    },
    "gaoua-cities-v2": {
        "desc": (
            "Gaoua ist die Hauptstadt der Region Sud-Ouest Burkina Fasos und liegt 400 Kilometer "
            "südwestlich von Ouagadougou nahe der Grenze zu Ghana und der Elfenbeinküste. Die Stadt mit "
            "rund 41.000 Einwohnern ist das Zentrum des Lobi-Volkes, das für seine traditionellen "
            "befestigten Lehmhäuser ('Soukala') bekannt ist. Das Musée des Civilisations Lobi in Gaoua "
            "zeigt eine bedeutende Sammlung dieser Kultur. Die Region ist seit den 1980er Jahren ein "
            "Zentrum des Goldabbaus, sowohl industriell (Mine von Poura) als auch in Form von "
            "Kleinschürfern. Während der französischen Kolonialzeit ab 1898 widerstand das Lobi-Volk "
            "lange dem Kolonialregime."
        ),
        "facts": [
            "Hauptstadt der Region Sud-Ouest",
            "Einwohnerzahl ca. 41.000 (2019)",
            "400 km südwestlich von Ouagadougou",
            "Zentrum des Lobi-Volkes",
            "Musée des Civilisations Lobi mit Soukala-Sammlung",
            "Goldabbauregion seit den 1980er Jahren",
            "Französische Eroberung erst 1898 (langer Widerstand)",
        ],
    },
    "manga-cities-v2": {
        "desc": (
            "Manga ist die Hauptstadt der Region Centre-Sud und liegt 100 Kilometer südlich von "
            "Ouagadougou an der Hauptstraße nach Pô und Ghana. Die Stadt mit rund 21.000 Einwohnern ist "
            "ein wichtiges landwirtschaftliches Zentrum der Mossi-Bauern. Die Region ist bekannt für "
            "Sorghum-, Hirse- und Erdnussanbau sowie für Bienenzucht und Honigproduktion. Während der "
            "französischen Kolonialzeit ab 1897 wurde Manga Verwaltungsposten der Provinz Zoundwéogo. "
            "Heute beherbergt die Stadt ein regionales Krankenhaus, eine technische Hochschule und "
            "mehrere Sekundarschulen, die Schüler aus den umliegenden ländlichen Gebieten anziehen."
        ),
        "facts": [
            "Hauptstadt der Region Centre-Sud",
            "Einwohnerzahl ca. 21.000 (2019)",
            "100 km südlich von Ouagadougou",
            "Verwaltungssitz der Provinz Zoundwéogo",
            "Wichtige Anbauregion für Sorghum und Erdnüsse",
            "Bekannt für Honigproduktion",
            "Regionales Krankenhaus und technische Hochschule",
        ],
    },
    "ziniare-cities-v2": {
        "desc": (
            "Ziniaré ist die Hauptstadt der Provinz Oubritenga und liegt nur 35 Kilometer nordöstlich "
            "von Ouagadougou. Die Stadt mit rund 25.000 Einwohnern ist der Geburtsort des langjährigen "
            "Präsidenten Blaise Compaoré, der Burkina Faso von 1987 bis 2014 regierte. Aus diesem Grund "
            "erhielt Ziniaré während seiner Amtszeit zahlreiche staatliche Investitionen, darunter einen "
            "Zoologischen Park, eine Skulpturengalerie und moderne Schulen. Die Stadt liegt im Zentrum "
            "des Mossi-Plateaus auf etwa 320 Metern Höhe. Nach Compaorés Sturz im Volksaufstand 2014 "
            "verlor Ziniaré an politischer Bedeutung, bleibt aber wirtschaftlich eng mit Ouagadougou verbunden."
        ),
        "facts": [
            "Hauptstadt der Provinz Oubritenga",
            "Einwohnerzahl ca. 25.000 (2019)",
            "35 km nordöstlich von Ouagadougou",
            "Geburtsort von Präsident Blaise Compaoré",
            "Compaoré regierte von 1987 bis 2014",
            "Beheimatet einen Zoologischen Park und Skulpturengalerie",
            "Liegt auf dem Mossi-Plateau (320 m Höhe)",
        ],
    },
    "boromo-cities-v2": {
        "desc": (
            "Boromo ist die Hauptstadt der Provinz Balé und liegt 180 Kilometer westlich von Ouagadougou "
            "an der Nationalstraße N1 nach Bobo-Dioulasso. Die Stadt mit rund 19.000 Einwohnern liegt am "
            "Rand des Deux Balés Nationalparks, einem 115.000 Hektar großen Naturschutzgebiet, in dem "
            "die letzten Elefantenherden Burkina Fasos leben. Boromo ist das Zentrum des Bwaba-Volkes "
            "und für seine traditionellen Maskentänze bekannt. Während der französischen Kolonialzeit "
            "ab 1898 wurde Boromo Verwaltungsposten und Eisenbahnstation. Heute leben rund 400 Elefanten "
            "im benachbarten Park, was Boromo zu einem wichtigen Ökotourismusziel macht."
        ),
        "facts": [
            "Hauptstadt der Provinz Balé",
            "Einwohnerzahl ca. 19.000 (2019)",
            "180 km westlich von Ouagadougou",
            "Tor zum Deux Balés Nationalpark (115.000 ha)",
            "Schätzungsweise 400 Elefanten im Park",
            "Zentrum des Bwaba-Volkes",
            "Bekannt für traditionelle Maskentänze",
        ],
    },
    "leo-cities-v2": {
        "desc": (
            "Léo ist die Hauptstadt der Provinz Sissili im Süden Burkina Fasos und liegt 165 Kilometer "
            "südwestlich von Ouagadougou nahe der ghanaischen Grenze. Die Stadt mit rund 33.000 "
            "Einwohnern ist Zentrum des Nuna- und Sissala-Volkes. Die Region ist eine der "
            "regenreichsten des Landes mit über 950 mm jährlichem Niederschlag, was den Anbau von "
            "Yams, Mais und Sesam ermöglicht. Léo ist berühmt für seinen wöchentlichen Markt, einen "
            "der größten in der Region, der Händler aus Ghana und der Elfenbeinküste anzieht. Während "
            "der französischen Kolonialzeit ab 1898 wurde Léo zum Grenzposten ausgebaut."
        ),
        "facts": [
            "Hauptstadt der Provinz Sissili",
            "Einwohnerzahl ca. 33.000 (2019)",
            "165 km südwestlich von Ouagadougou",
            "Grenzregion zu Ghana",
            "Niederschlag über 950 mm pro Jahr",
            "Zentrum des Nuna- und Sissala-Volkes",
            "Wichtige Anbauregion für Yams und Sesam",
        ],
    },
    "po-cities-v2": {
        "desc": (
            "Pô ist eine Stadt in der Region Centre-Sud, 145 Kilometer südlich von Ouagadougou direkt an "
            "der Grenze zu Ghana gelegen. Mit rund 27.000 Einwohnern ist sie ein wichtiger "
            "Grenzübergangsort. Pô spielte in der Geschichte Burkina Fasos eine entscheidende Rolle: "
            "Hier befand sich die Garnison, von der aus Thomas Sankara am 4. August 1983 die "
            "Revolution startete, die das Land in Burkina Faso umbenannte. Sankara war zuvor Befehlshaber "
            "des Centre National d'Entraînement Commando (CNEC) in Pô. Die Stadt liegt am Rand des "
            "Nazinga-Wildreservats, in dem Elefanten und Antilopen leben. Wichtige Wirtschaftszweige "
            "sind Grenzhandel und Viehzucht."
        ),
        "facts": [
            "27.000 Einwohner (2019)",
            "145 km südlich von Ouagadougou",
            "Direkter Grenzort zu Ghana",
            "Startpunkt der Sankara-Revolution am 4. August 1983",
            "Sitz der Kommandoschule CNEC",
            "Tor zum Nazinga-Wildreservat",
            "Wichtiger Grenzhandelsplatz",
        ],
    },
    "diapaga-cities-v2": {
        "desc": (
            "Diapaga ist die Hauptstadt der Provinz Tapoa im äußersten Osten Burkina Fasos, 410 "
            "Kilometer von Ouagadougou entfernt. Die Stadt mit rund 23.000 Einwohnern liegt nahe der "
            "Grenze zu Niger und Benin am Rand des W-Nationalparks, eines transnationalen Schutzgebiets, "
            "das 1996 zum UNESCO-Welterbe erklärt wurde. Der Park beherbergt Löwen, Elefanten und "
            "Büffel. Diapaga ist Zentrum des Gourmantché-Volkes und ein wichtiger Marktort für "
            "Viehhandel. Während der französischen Kolonialzeit ab 1898 wurde Diapaga Verwaltungsposten. "
            "Seit 2018 leidet die Region stark unter der Sahel-Sicherheitskrise und Anschlägen."
        ),
        "facts": [
            "Hauptstadt der Provinz Tapoa",
            "Einwohnerzahl ca. 23.000 (2019)",
            "410 km östlich von Ouagadougou",
            "Tor zum W-Nationalpark (UNESCO-Welterbe seit 1996)",
            "Zentrum des Gourmantché-Volkes",
            "Grenzregion zu Niger und Benin",
            "Französische Verwaltung seit 1898",
        ],
    },
    "houndé-cities-v2": {
        "desc": (
            "Houndé ist die Hauptstadt der Provinz Tuy und liegt 105 Kilometer nordöstlich von "
            "Bobo-Dioulasso an der Bahnstrecke nach Abidjan. Die Stadt mit rund 42.000 Einwohnern hat "
            "in den 2010er Jahren einen rasanten Aufschwung erlebt durch die Eröffnung der Houndé-Goldmine "
            "im Jahr 2017, die jährlich rund 200.000 Unzen Gold produziert und über 1.500 Menschen "
            "beschäftigt. Die Region ist auch wichtig für Baumwoll- und Maisanbau. Während der "
            "französischen Kolonialzeit ab 1898 wurde Houndé zum Eisenbahn-Knotenpunkt ausgebaut. Die "
            "Stadt liegt im fruchtbaren Sudangürtel mit Niederschlägen über 900 mm pro Jahr."
        ),
        "facts": [
            "Hauptstadt der Provinz Tuy",
            "Einwohnerzahl ca. 42.000 (2019)",
            "105 km nordöstlich von Bobo-Dioulasso",
            "Houndé-Goldmine seit 2017 in Betrieb",
            "Jährliche Goldproduktion ca. 200.000 Unzen",
            "Bahnstrecke nach Abidjan",
            "Klimazone: Sudan-Savanne, über 900 mm Niederschlag",
        ],
    },
    "orodara-cities-v2": {
        "desc": (
            "Orodara ist die Hauptstadt der Provinz Kénédougou im äußersten Westen Burkina Fasos, 80 "
            "Kilometer westlich von Bobo-Dioulasso, nahe der malischen Grenze. Die Stadt mit rund 25.000 "
            "Einwohnern ist berühmt für ihre Mango- und Cashew-Plantagen, die einen Großteil der "
            "burkinischen Exportproduktion liefern. Jedes Jahr im Mai findet hier der nationale "
            "Mango-Festival statt. Die Region ist auch das Zentrum des Sénoufo-Volkes mit seinen "
            "berühmten Balafon-Musikern. Während der französischen Kolonialzeit ab 1898 wurde Orodara "
            "zur Verwaltungspost und Hauptort der Banflé-Region. Die hügelige Landschaft bietet "
            "fruchtbare Böden mit über 1.100 mm jährlichem Niederschlag."
        ),
        "facts": [
            "Hauptstadt der Provinz Kénédougou",
            "Einwohnerzahl ca. 25.000 (2019)",
            "80 km westlich von Bobo-Dioulasso",
            "Wichtigste Mangoanbauregion Burkina Fasos",
            "Jährliches Mango-Festival im Mai",
            "Zentrum des Sénoufo-Volkes",
            "Niederschlag über 1.100 mm pro Jahr",
        ],
    },
    "yako-cities-v2": {
        "desc": (
            "Yako ist die Hauptstadt der Provinz Passoré und liegt 110 Kilometer nordwestlich von "
            "Ouagadougou an der Straße nach Ouahigouya. Die Stadt mit rund 23.000 Einwohnern ist "
            "berühmt als Geburtsort von Thomas Sankara, dem revolutionären Präsidenten Burkina Fasos "
            "(1983-1987), der hier am 21. Dezember 1949 zur Welt kam. Sein Geburtshaus ist heute eine "
            "Gedenkstätte. Yako ist Zentrum eines wichtigen Mossi-Königreichs mit traditionellem "
            "Naaba-Palast. Die Wirtschaft basiert auf Hirseanbau, Viehzucht und Lederhandwerk. Während "
            "der französischen Kolonialzeit ab 1897 war Yako Verwaltungsposten am Karawanenweg "
            "zwischen Ouagadougou und Ouahigouya."
        ),
        "facts": [
            "Hauptstadt der Provinz Passoré",
            "Einwohnerzahl ca. 23.000 (2019)",
            "110 km nordwestlich von Ouagadougou",
            "Geburtsort von Thomas Sankara (21. Dezember 1949)",
            "Sankara regierte 1983-1987",
            "Sitz eines traditionellen Mossi-Naaba",
            "Französische Verwaltung seit 1897",
        ],
    },
    "reo-cities-v2": {
        "desc": (
            "Réo ist die Hauptstadt der Provinz Sanguié und liegt 130 Kilometer westlich von "
            "Ouagadougou. Die Stadt mit rund 22.000 Einwohnern ist Zentrum des Lyélé-Volkes, einer "
            "Untergruppe der Gurunsi. Die Region ist berühmt für ihre traditionelle Architektur mit "
            "bemalten Lehmhäusern, ähnlich wie im benachbarten Tiébélé. Réo besitzt eine bedeutende "
            "katholische Kathedrale, die zum Bistum Koudougou gehört. Während der französischen "
            "Kolonialzeit ab 1897 wurde Réo Verwaltungsposten der Region Centre-Ouest. Die Wirtschaft "
            "basiert auf Sorghum-, Hirse- und Erdnussanbau sowie auf Bienenzucht und der Herstellung "
            "von Dolo, dem traditionellen Hirsebier."
        ),
        "facts": [
            "Hauptstadt der Provinz Sanguié",
            "Einwohnerzahl ca. 22.000 (2019)",
            "130 km westlich von Ouagadougou",
            "Zentrum des Lyélé-Volkes",
            "Bemalte traditionelle Lehmhäuser",
            "Katholische Kathedrale, Bistum Koudougou",
            "Bekannt für Dolo (Hirsebier)",
        ],
    },
    "boulsa-cities-v2": {
        "desc": (
            "Boulsa ist die Hauptstadt der Provinz Namentenga und liegt 175 Kilometer nordöstlich von "
            "Ouagadougou. Die Stadt mit rund 20.000 Einwohnern ist Sitz eines bedeutenden "
            "Mossi-Königreichs mit traditionellem Naaba-Palast. Während der vorkolonialen Zeit war "
            "Boulsa eine wichtige Etappe auf dem Karawanenweg zwischen Ouagadougou und der "
            "Sahara-Region. Die Wirtschaft basiert auf Hirseanbau, Viehzucht und Goldhandwerksabbau. "
            "Während der französischen Kolonialzeit ab 1897 wurde Boulsa Verwaltungsposten. Heute "
            "leidet die Region wie viele Gebiete im Norden Burkina Fasos unter der "
            "Sahel-Sicherheitskrise mit Binnenflucht und wirtschaftlicher Beeinträchtigung."
        ),
        "facts": [
            "Hauptstadt der Provinz Namentenga",
            "Einwohnerzahl ca. 20.000 (2019)",
            "175 km nordöstlich von Ouagadougou",
            "Sitz eines traditionellen Mossi-Naaba",
            "Historische Karawanenetappe",
            "Französische Verwaltung seit 1897",
            "Goldkleinabbau in der Umgebung",
        ],
    },
    "kombissiri-cities-v2": {
        "desc": (
            "Kombissiri ist die Hauptstadt der Provinz Bazèga und liegt nur 42 Kilometer südlich von "
            "Ouagadougou an der Hauptstraße nach Pô und Ghana. Die Stadt mit rund 28.000 Einwohnern "
            "wächst rasant aufgrund ihrer Nähe zur Hauptstadt und der Pendlerströme. Die Region ist "
            "Zentrum eines traditionellen Mossi-Königreichs und bekannt für die Herstellung von "
            "Bogolan-Tüchern und traditionellen Schmuckstücken aus Bronze. Während der französischen "
            "Kolonialzeit ab 1897 wurde Kombissiri Verwaltungsposten. Die Stadt verfügt über eine "
            "moderne Marktinfrastruktur, ein regionales Krankenhaus und mehrere Sekundarschulen, die "
            "Schüler aus dem Umland anziehen. Die Wirtschaft basiert auf Landwirtschaft und Handel."
        ),
        "facts": [
            "Hauptstadt der Provinz Bazèga",
            "Einwohnerzahl ca. 28.000 (2019)",
            "42 km südlich von Ouagadougou",
            "Sitz eines traditionellen Mossi-Naaba",
            "Bekannt für Bogolan-Tücher und Bronzeschmuck",
            "Französische Verwaltung seit 1897",
            "Pendlerstadt der Hauptstadtregion",
        ],
    },
    "zorgho-cities-v2": {
        "desc": (
            "Zorgho ist die Hauptstadt der Provinz Ganzourgou und liegt 110 Kilometer östlich von "
            "Ouagadougou an der Hauptstraße nach Fada N'Gourma und Niger. Die Stadt mit rund 28.000 "
            "Einwohnern ist ein wichtiger Knotenpunkt für den Handel mit dem Osten des Landes und mit "
            "Niger. Die Region ist Zentrum eines Mossi-Königreichs mit traditionellem Naaba-Palast. "
            "Während der französischen Kolonialzeit ab 1897 wurde Zorgho Verwaltungsposten an der "
            "Karawanenroute. Die Stadt liegt nahe dem Bagré-Stausee, einem 1992 fertiggestellten "
            "Wasserkraftwerk und Bewässerungsprojekt, das die landwirtschaftliche Produktion der Region "
            "(Reis, Mais, Tomaten) deutlich erhöht hat."
        ),
        "facts": [
            "Hauptstadt der Provinz Ganzourgou",
            "Einwohnerzahl ca. 28.000 (2019)",
            "110 km östlich von Ouagadougou",
            "Sitz eines traditionellen Mossi-Naaba",
            "Nahe dem Bagré-Stausee (fertiggestellt 1992)",
            "Knotenpunkt für Handel mit Niger",
            "Französische Verwaltung seit 1897",
        ],
    },
    "tougan-cities-v2": {
        "desc": (
            "Tougan ist die Hauptstadt der Provinz Sourou und liegt 245 Kilometer nordwestlich von "
            "Ouagadougou. Die Stadt mit rund 22.000 Einwohnern liegt am Sourou-Fluss, einem Nebenfluss "
            "des Mouhoun (Schwarzer Volta). Das Sourou-Tal ist eines der wichtigsten "
            "Bewässerungsprojekte Burkina Fasos: seit den 1980er Jahren werden hier auf rund 30.000 "
            "Hektar Reis, Weizen und Gemüse angebaut. Die Region ist Zentrum des Samo-Volkes. Während "
            "der französischen Kolonialzeit ab 1898 wurde Tougan Verwaltungsposten. Die Sankara-Regierung "
            "(1983-1987) baute hier mehrere Staudämme zur Bewässerung und förderte den Reisanbau als "
            "Strategie zur Nahrungsmittelautarkie."
        ),
        "facts": [
            "Hauptstadt der Provinz Sourou",
            "Einwohnerzahl ca. 22.000 (2019)",
            "245 km nordwestlich von Ouagadougou",
            "Liegt am Sourou-Fluss",
            "Bewässerungsprojekt mit 30.000 ha Anbaufläche",
            "Zentrum des Samo-Volkes",
            "Staudämme aus der Sankara-Ära",
        ],
    },
    "nouna-cities-v2": {
        "desc": (
            "Nouna ist die Hauptstadt der Provinz Kossi im Westen Burkina Fasos und liegt 290 "
            "Kilometer westlich von Ouagadougou nahe der malischen Grenze. Die Stadt mit rund 28.000 "
            "Einwohnern ist Zentrum des Marka-Volkes (auch Dafing genannt) und ein wichtiger Markt für "
            "Baumwolle und Vieh. Die Region produziert über 50.000 Tonnen Baumwolle pro Jahr und ist "
            "Teil des landesweiten Baumwollgürtels. Während der französischen Kolonialzeit ab 1898 "
            "wurde Nouna Verwaltungsposten der Region Boucle du Mouhoun. Die Stadt verfügt über ein "
            "regionales Krankenhaus mit Forschungszentrum (Centre de Recherche en Santé de Nouna), das "
            "seit 1992 mit Heidelberg zusammenarbeitet."
        ),
        "facts": [
            "Hauptstadt der Provinz Kossi",
            "Einwohnerzahl ca. 28.000 (2019)",
            "290 km westlich von Ouagadougou",
            "Zentrum des Marka/Dafing-Volkes",
            "Forschungszentrum CRSN seit 1992",
            "Partnerschaft mit Universität Heidelberg",
            "Über 50.000 Tonnen Baumwolle pro Jahr",
        ],
    },
    "sebba-cities-v2": {
        "desc": (
            "Sebba ist die Hauptstadt der Provinz Yagha im äußersten Nordosten Burkina Fasos, 320 "
            "Kilometer von Ouagadougou entfernt nahe der nigerischen Grenze. Die Stadt mit rund 9.000 "
            "Einwohnern liegt in der Sahelzone mit weniger als 500 mm Jahresniederschlag. Die "
            "Wirtschaft basiert auf Viehzucht (Rinder, Ziegen, Kamele) und Hirseanbau. Sebba ist "
            "Zentrum der Fulani- und Songhai-Bevölkerung. Während der französischen Kolonialzeit ab "
            "1898 wurde Sebba Verwaltungsposten. Seit 2017 leidet die Region stark unter "
            "dschihadistischen Anschlägen, mehrere Ortsteile wurden evakuiert und tausende Einwohner "
            "wurden Binnenvertriebene. Die Stadt steht teilweise unter humanitärer Blockade."
        ),
        "facts": [
            "Hauptstadt der Provinz Yagha",
            "Einwohnerzahl ca. 9.000 (2019)",
            "320 km nordöstlich von Ouagadougou",
            "Klimazone: Sahel, unter 500 mm Niederschlag",
            "Zentrum der Fulani- und Songhai-Bevölkerung",
            "Französische Verwaltung seit 1898",
            "Seit 2017 schwer von Sahel-Krise betroffen",
        ],
    },
    "gorom-gorom-cities-v2": {
        "desc": (
            "Gorom-Gorom ist die Hauptstadt der Provinz Oudalan im äußersten Norden Burkina Fasos und "
            "liegt 320 Kilometer nordöstlich von Ouagadougou. Die Stadt mit rund 12.000 Einwohnern "
            "liegt mitten in der Sahelzone an der Grenze zur Sahara. Sie ist berühmt für ihren "
            "wöchentlichen Donnerstagsmarkt, einen der bunten Treffpunkte der Tuareg, Fulani, Songhai "
            "und Bella, die aus dem gesamten Sahel hier zusammenkommen. Während der französischen "
            "Kolonialzeit ab 1898 wurde Gorom-Gorom Verwaltungsposten der nördlichsten Region. Die "
            "Sankara-Regierung startete hier in den 1980er Jahren Aufforstungsprojekte gegen die "
            "Wüstenbildung. Seit 2018 leidet die Region unter dschihadistischen Anschlägen."
        ),
        "facts": [
            "Hauptstadt der Provinz Oudalan",
            "Einwohnerzahl ca. 12.000 (2019)",
            "320 km nordöstlich von Ouagadougou",
            "Berühmter Donnerstagsmarkt der Sahel-Völker",
            "Treffpunkt der Tuareg, Fulani und Songhai",
            "Aufforstungsprojekte unter Sankara",
            "Klimazone: Sahel, am Rand der Sahara",
        ],
    },
    "titao-cities-v2": {
        "desc": (
            "Titao ist die Hauptstadt der Provinz Loroum im Norden Burkina Fasos und liegt 220 "
            "Kilometer nordwestlich von Ouagadougou nahe der malischen Grenze. Die Stadt mit rund "
            "20.000 Einwohnern ist Zentrum eines Mossi-Königreichs mit traditionellem Naaba-Palast. "
            "Die Region produziert hauptsächlich Hirse, Sorghum und Erdnüsse. Während der französischen "
            "Kolonialzeit ab 1897 wurde Titao Verwaltungsposten. Heute leidet die Stadt stark unter "
            "der Sahel-Sicherheitskrise: seit 2019 steht sie unter humanitärer Blockade durch "
            "dschihadistische Gruppen, Lebensmittel und Treibstoff können nur noch per Hubschrauber "
            "geliefert werden. Tausende Einwohner sind nach Ouahigouya geflüchtet."
        ),
        "facts": [
            "Hauptstadt der Provinz Loroum",
            "Einwohnerzahl ca. 20.000 (2019)",
            "220 km nordwestlich von Ouagadougou",
            "Sitz eines traditionellen Mossi-Naaba",
            "Französische Verwaltung seit 1897",
            "Seit 2019 unter humanitärer Blockade",
            "Versorgung nur noch per Hubschrauber",
        ],
    },
    "garango-cities-v2": {
        "desc": (
            "Garango ist eine Stadt in der Provinz Boulgou im Centre-Est Burkina Fasos und liegt 195 "
            "Kilometer südöstlich von Ouagadougou. Die Stadt mit rund 36.000 Einwohnern ist berühmt "
            "für ihre Diaspora-Gemeinde: schätzungsweise jeder zweite Bewohner hat Verwandte in der "
            "Elfenbeinküste, Ghana oder Frankreich, deren Geldüberweisungen einen großen Teil der "
            "lokalen Wirtschaft ausmachen. Garango ist Zentrum der Bissa-Bevölkerung, einer kleinen "
            "ethnischen Gruppe mit eigener Sprache. Während der französischen Kolonialzeit ab 1897 "
            "wurde Garango Verwaltungsposten. Die Stadt verfügt über eine moderne Markthalle, mehrere "
            "Sekundarschulen und ist bekannt für ihre traditionelle Goldschmiedekunst."
        ),
        "facts": [
            "Stadt in der Provinz Boulgou",
            "Einwohnerzahl ca. 36.000 (2019)",
            "195 km südöstlich von Ouagadougou",
            "Zentrum des Bissa-Volkes",
            "Große Diaspora-Gemeinde in Côte d'Ivoire",
            "Französische Verwaltung seit 1897",
            "Bekannt für traditionelle Goldschmiedekunst",
        ],
    },
    "gourcy-cities-v2": {
        "desc": (
            "Gourcy ist die Hauptstadt der Provinz Zondoma im Norden Burkina Fasos und liegt 145 "
            "Kilometer nordwestlich von Ouagadougou an der Hauptstraße nach Ouahigouya. Die Stadt mit "
            "rund 22.000 Einwohnern ist Zentrum eines Mossi-Königreichs und für ihren wöchentlichen "
            "Markt bekannt. Die Region produziert Hirse, Sorghum, Erdnüsse und Sesam. Während der "
            "französischen Kolonialzeit ab 1897 wurde Gourcy Verwaltungsposten am Karawanenweg. Die "
            "Wirtschaft basiert auf Subsistenzlandwirtschaft, Viehzucht und kleinem Goldabbau. Seit "
            "2019 ist die Region zunehmend von der Sahel-Sicherheitskrise betroffen, mit "
            "Binnenflüchtlingen aus den nördlicheren Dörfern, die nach Gourcy strömen."
        ),
        "facts": [
            "Hauptstadt der Provinz Zondoma",
            "Einwohnerzahl ca. 22.000 (2019)",
            "145 km nordwestlich von Ouagadougou",
            "Sitz eines traditionellen Mossi-Naaba",
            "Französische Verwaltung seit 1897",
            "Wöchentlicher Regionalmarkt",
            "Aufnahmeort für Binnenvertriebene seit 2019",
        ],
    },
    "bousse-cities-v2": {
        "desc": (
            "Boussé ist die Hauptstadt der Provinz Kourwéogo und liegt 60 Kilometer nordwestlich von "
            "Ouagadougou an der Hauptstraße nach Ouahigouya. Die Stadt mit rund 17.000 Einwohnern ist "
            "ein wichtiger Pendlerstandort im Hauptstadtumland und Zentrum eines Mossi-Königreichs mit "
            "traditionellem Naaba-Palast. Während der französischen Kolonialzeit ab 1897 wurde Boussé "
            "Verwaltungsposten. Die Wirtschaft basiert auf Hirse-, Sorghum- und Gemüseanbau, der durch "
            "die Nähe zu Ouagadougou begünstigt wird. Boussé ist auch Sitz des Bistums Ouagadougou-Boussé "
            "und beheimatet ein katholisches Priesterseminar, das viele Geistliche für ganz "
            "Burkina Faso ausgebildet hat."
        ),
        "facts": [
            "Hauptstadt der Provinz Kourwéogo",
            "Einwohnerzahl ca. 17.000 (2019)",
            "60 km nordwestlich von Ouagadougou",
            "Sitz eines traditionellen Mossi-Naaba",
            "Französische Verwaltung seit 1897",
            "Standort eines katholischen Priesterseminars",
            "Pendlerstadt der Hauptstadtregion",
        ],
    },
    "sindou-cities-v2": {
        "desc": (
            "Sindou ist die Hauptstadt der Provinz Léraba im äußersten Südwesten Burkina Fasos und "
            "liegt 90 Kilometer westlich von Banfora nahe der malischen Grenze. Die Stadt mit rund "
            "8.000 Einwohnern ist weltberühmt für die Sindou-Felsen ('Pics de Sindou'), eine bizarre "
            "Sandsteinformation aus 600 Millionen Jahre alten erodierten Felsnadeln, die sich auf einer "
            "Länge von 3 Kilometern erstreckt. Die Region ist Zentrum des Sénoufo- und Cerma-Volkes. "
            "Während der französischen Kolonialzeit ab 1898 wurde Sindou Verwaltungsposten. Die "
            "Wirtschaft basiert auf Mango-, Reis- und Yamsanbau sowie zunehmend auf Tourismus dank "
            "der spektakulären Felsformationen."
        ),
        "facts": [
            "Hauptstadt der Provinz Léraba",
            "Einwohnerzahl ca. 8.000 (2019)",
            "90 km westlich von Banfora",
            "Berühmte Sindou-Felsen, 3 km lang",
            "Sandsteinformationen ca. 600 Millionen Jahre alt",
            "Zentrum des Sénoufo- und Cerma-Volkes",
            "Französische Verwaltung seit 1898",
        ],
    },
    "diebougou-cities-v2": {
        "desc": (
            "Diébougou ist die Hauptstadt der Provinz Bougouriba im Südwesten Burkina Fasos und liegt "
            "380 Kilometer südwestlich von Ouagadougou. Die Stadt mit rund 17.000 Einwohnern ist Sitz "
            "des Bistums Diébougou und beheimatet eine bedeutende katholische Kathedrale. Sie ist "
            "Zentrum des Dagara-Volkes, das für seine Animisten-Tradition und Xylophon-Musik (Gyil) "
            "bekannt ist. Während der französischen Kolonialzeit ab 1898 wurde Diébougou ein wichtiger "
            "Missionsstützpunkt der Weißen Väter. Die Wirtschaft basiert auf Yams-, Mais- und "
            "Erdnussanbau sowie auf der Goldsuche in der Umgebung. Die Region erhält über 1.000 mm "
            "Niederschlag pro Jahr."
        ),
        "facts": [
            "Hauptstadt der Provinz Bougouriba",
            "Einwohnerzahl ca. 17.000 (2019)",
            "380 km südwestlich von Ouagadougou",
            "Sitz des Bistums Diébougou",
            "Zentrum des Dagara-Volkes",
            "Bekannt für Gyil-Xylophon-Musik",
            "Französische Mission seit 1898",
        ],
    },
    "toma-cities-v2": {
        "desc": (
            "Toma ist die Hauptstadt der Provinz Nayala im Westen Burkina Fasos und liegt 215 "
            "Kilometer westlich von Ouagadougou. Die Stadt mit rund 14.000 Einwohnern ist Zentrum des "
            "Samo-Volkes und ein wichtiger Marktort für Hirse, Sorghum und Sesam. Während der "
            "französischen Kolonialzeit ab 1898 wurde Toma Verwaltungsposten der Region Boucle du "
            "Mouhoun. Die Wirtschaft basiert hauptsächlich auf Subsistenzlandwirtschaft und "
            "Viehzucht. Die Sankara-Regierung (1983-1987) baute hier mehrere Brunnen und Schulen als "
            "Teil des Programms zur ländlichen Entwicklung. Die Region erhält rund 800 mm Niederschlag "
            "pro Jahr und gehört zur Sudan-Savannenzone."
        ),
        "facts": [
            "Hauptstadt der Provinz Nayala",
            "Einwohnerzahl ca. 14.000 (2019)",
            "215 km westlich von Ouagadougou",
            "Zentrum des Samo-Volkes",
            "Französische Verwaltung seit 1898",
            "Sankara-Brunnenprogramm in den 1980er Jahren",
            "Klimazone: Sudan-Savanne, ca. 800 mm Niederschlag",
        ],
    },
    "pama-cities-v2": {
        "desc": (
            "Pama ist die Hauptstadt der Provinz Kompienga im Osten Burkina Fasos und liegt 320 "
            "Kilometer südöstlich von Ouagadougou nahe der Grenze zu Togo und Benin. Die Stadt mit "
            "rund 13.000 Einwohnern ist Tor zum Pama-Wildreservat ('Réserve Partielle de Faune de "
            "Pama'), einem 224.000 Hektar großen Schutzgebiet, in dem Elefanten, Löwen, Büffel und "
            "Antilopen leben. Die Region ist Zentrum des Gourmantché-Volkes. Während der französischen "
            "Kolonialzeit ab 1898 wurde Pama Verwaltungsposten. Der Kompienga-Stausee, 1988 "
            "fertiggestellt, ist ein wichtiges Wasserkraftwerk und Bewässerungsreservoir für die "
            "Region. Seit 2018 leidet das Gebiet unter dschihadistischen Anschlägen."
        ),
        "facts": [
            "Hauptstadt der Provinz Kompienga",
            "Einwohnerzahl ca. 13.000 (2019)",
            "320 km südöstlich von Ouagadougou",
            "Tor zum Pama-Wildreservat (224.000 ha)",
            "Kompienga-Stausee fertiggestellt 1988",
            "Zentrum des Gourmantché-Volkes",
            "Französische Verwaltung seit 1898",
        ],
    },
    "bogande-cities-v2": {
        "desc": (
            "Bogandé ist die Hauptstadt der Provinz Gnagna im Osten Burkina Fasos und liegt 245 "
            "Kilometer östlich von Ouagadougou. Die Stadt mit rund 18.000 Einwohnern ist Zentrum des "
            "Gourmantché-Volkes und ein wichtiger Marktort der Region Est. Während der französischen "
            "Kolonialzeit ab 1898 wurde Bogandé Verwaltungsposten. Die Wirtschaft basiert auf Hirse-, "
            "Sorghum- und Erdnussanbau sowie auf Viehzucht. Seit 2018 leidet die Region unter der "
            "Sahel-Sicherheitskrise mit dschihadistischen Anschlägen, viele Dörfer wurden evakuiert. "
            "Bogandé ist Aufnahmeort für tausende Binnenvertriebene aus den umliegenden Gebieten "
            "geworden, was die soziale und wirtschaftliche Lage der Stadt stark belastet."
        ),
        "facts": [
            "Hauptstadt der Provinz Gnagna",
            "Einwohnerzahl ca. 18.000 (2019)",
            "245 km östlich von Ouagadougou",
            "Zentrum des Gourmantché-Volkes",
            "Französische Verwaltung seit 1898",
            "Wichtiger Marktort der Région de l'Est",
            "Aufnahmeort für Binnenvertriebene seit 2018",
        ],
    },
    "sapouy-cities-v2": {
        "desc": (
            "Sapouy ist die Hauptstadt der Provinz Ziro im Centre-Ouest Burkina Fasos und liegt 110 "
            "Kilometer südwestlich von Ouagadougou. Die Stadt mit rund 12.000 Einwohnern ist Zentrum "
            "des Nuna-Volkes, einer Untergruppe der Gurunsi. Während der französischen Kolonialzeit "
            "ab 1897 wurde Sapouy Verwaltungsposten. Die Wirtschaft basiert auf Sorghum-, Hirse- und "
            "Erdnussanbau sowie auf Bienenzucht und der Herstellung von Dolo (Hirsebier). Sapouy "
            "wurde 1998 international bekannt durch den Mord an dem Journalisten Norbert Zongo, dessen "
            "verkohlte Leiche in der Nähe der Stadt gefunden wurde - ein Ereignis, das die "
            "Compaoré-Regierung erschütterte und zu Massendemonstrationen führte."
        ),
        "facts": [
            "Hauptstadt der Provinz Ziro",
            "Einwohnerzahl ca. 12.000 (2019)",
            "110 km südwestlich von Ouagadougou",
            "Zentrum des Nuna-Volkes",
            "Französische Verwaltung seit 1897",
            "Bekannt durch Norbert-Zongo-Mord 1998",
            "Auslöser nationaler Proteste gegen Compaoré",
        ],
    },
    "batie-cities-v2": {
        "desc": (
            "Batié ist die Hauptstadt der Provinz Noumbiel im äußersten Südwesten Burkina Fasos und "
            "liegt 460 Kilometer von Ouagadougou entfernt direkt an der Grenze zu Ghana und der "
            "Elfenbeinküste. Die Stadt mit rund 9.000 Einwohnern ist die südlichste Verwaltungseinheit "
            "des Landes. Sie ist Zentrum des Lobi-Volkes mit seinen befestigten Lehmhäusern (Soukala) "
            "und Animisten-Traditionen. Während der französischen Kolonialzeit ab 1898 wurde Batié "
            "Grenzposten. Die Region erhält über 1.100 mm Niederschlag pro Jahr und ist eine der "
            "regenreichsten des Landes. Die Wirtschaft basiert auf Yams-, Mais- und Cashew-Anbau "
            "sowie auf Goldsuche in den umliegenden Bergen."
        ),
        "facts": [
            "Hauptstadt der Provinz Noumbiel",
            "Einwohnerzahl ca. 9.000 (2019)",
            "460 km südwestlich von Ouagadougou",
            "Südlichste Verwaltungseinheit des Landes",
            "Grenzregion zu Ghana und Côte d'Ivoire",
            "Zentrum des Lobi-Volkes mit Soukala-Architektur",
            "Über 1.100 mm Niederschlag pro Jahr",
        ],
    },
    "dano-cities-v2": {
        "desc": (
            "Dano ist die Hauptstadt der Provinz Ioba im Südwesten Burkina Fasos und liegt 320 "
            "Kilometer südwestlich von Ouagadougou. Die Stadt mit rund 18.000 Einwohnern ist Zentrum "
            "des Dagara-Volkes und ein wichtiger katholischer Missionsstützpunkt seit der "
            "französischen Kolonialzeit ab 1898. Dano ist berühmt durch das ökologische Bauprojekt "
            "des Architekten Diébédo Francis Kéré, dem ersten Afrikaner, der 2022 den "
            "Pritzker-Architekturpreis erhielt - er baute hier ein Krankenhaus aus Lehmziegeln. Die "
            "Wirtschaft basiert auf Yams-, Hirse- und Sorghumanbau sowie auf der traditionellen "
            "Gyil-Xylophon-Musik der Dagara, die zum immateriellen Kulturerbe der UNESCO gehört."
        ),
        "facts": [
            "Hauptstadt der Provinz Ioba",
            "Einwohnerzahl ca. 18.000 (2019)",
            "320 km südwestlich von Ouagadougou",
            "Zentrum des Dagara-Volkes",
            "Krankenhaus von Pritzker-Preisträger Francis Kéré",
            "Kéré erhielt Pritzker-Preis im Jahr 2022",
            "Französische Mission seit 1898",
        ],
    },
    "gayeri-cities-v2": {
        "desc": (
            "Gayéri ist die Hauptstadt der Provinz Komondjari im Osten Burkina Fasos und liegt 280 "
            "Kilometer östlich von Ouagadougou. Die Stadt mit rund 8.000 Einwohnern ist Zentrum des "
            "Gourmantché-Volkes und gehört zu den jüngsten administrativen Einheiten des Landes - die "
            "Provinz Komondjari wurde erst 1996 geschaffen. Während der französischen Kolonialzeit "
            "ab 1898 war das Gebiet unter Fada N'Gourma verwaltet. Die Wirtschaft basiert auf Hirse-, "
            "Sorghum- und Erdnussanbau sowie auf Viehzucht. Seit 2019 leidet die Region stark unter "
            "der Sahel-Sicherheitskrise mit dschihadistischen Anschlägen, mehrere Dörfer wurden "
            "evakuiert und tausende Einwohner sind Binnenvertriebene geworden."
        ),
        "facts": [
            "Hauptstadt der Provinz Komondjari",
            "Einwohnerzahl ca. 8.000 (2019)",
            "280 km östlich von Ouagadougou",
            "Provinz erst 1996 geschaffen",
            "Zentrum des Gourmantché-Volkes",
            "Französische Verwaltung seit 1898",
            "Schwer betroffen von Sahel-Krise seit 2019",
        ],
    },
    "ouargaye-cities-v2": {
        "desc": (
            "Ouargaye ist die Hauptstadt der Provinz Koulpélogo im Centre-Est Burkina Fasos und liegt "
            "240 Kilometer südöstlich von Ouagadougou nahe der Grenze zu Togo. Die Stadt mit rund "
            "11.000 Einwohnern ist Zentrum des Bissa-Volkes und ein wichtiger Grenzhandelsort. "
            "Während der französischen Kolonialzeit ab 1897 wurde Ouargaye Verwaltungsposten und "
            "Zollstation an der Achse nach Togo. Die Wirtschaft basiert auf Hirse-, Sorghum- und "
            "Erdnussanbau sowie auf Vieh- und Geflügelzucht. Die Provinz Koulpélogo wurde 1996 als "
            "neue administrative Einheit geschaffen. Heute ist die Region auch von der "
            "Sahel-Sicherheitskrise betroffen, mit vereinzelten dschihadistischen Anschlägen."
        ),
        "facts": [
            "Hauptstadt der Provinz Koulpélogo",
            "Einwohnerzahl ca. 11.000 (2019)",
            "240 km südöstlich von Ouagadougou",
            "Grenzort zu Togo",
            "Zentrum des Bissa-Volkes",
            "Provinz 1996 geschaffen",
            "Französische Zollstation seit 1897",
        ],
    },
    "aribinda-cities-v2": {
        "desc": (
            "Aribinda ist eine Stadt in der Provinz Soum im Sahel Burkina Fasos und liegt 300 "
            "Kilometer nordöstlich von Ouagadougou. Die Stadt mit rund 14.000 Einwohnern ist "
            "berühmt für ihre traditionelle Tonarchitektur und die Kurumba-Kultur. Die Region war "
            "einst ein wichtiges vorkoloniales Königreich der Kurumba, mit eigenen Felsenmalereien, "
            "die mehrere Jahrhunderte alt sind. Während der französischen Kolonialzeit ab 1898 "
            "wurde Aribinda Verwaltungsposten. Die Wirtschaft basiert auf Hirseanbau und Viehzucht. "
            "Seit 2019 ist Aribinda eines der am schwersten von der Sahel-Krise betroffenen Gebiete "
            "Burkina Fasos: die Stadt wurde mehrfach von dschihadistischen Gruppen angegriffen, "
            "Hunderte Tote und tausende Vertriebene waren die Folge."
        ),
        "facts": [
            "Stadt in der Provinz Soum",
            "Einwohnerzahl ca. 14.000 (2019)",
            "300 km nordöstlich von Ouagadougou",
            "Zentrum der Kurumba-Kultur",
            "Mehrere Jahrhunderte alte Felsenmalereien",
            "Französische Verwaltung seit 1898",
            "Schwer betroffen von Sahel-Krise seit 2019",
        ],
    },
    "bere-cities-v2": {
        "desc": (
            "Béré ist eine Kleinstadt in der Provinz Zoundwéogo im Centre-Sud Burkina Fasos und "
            "liegt rund 130 Kilometer südlich von Ouagadougou. Die Stadt mit rund 10.000 Einwohnern "
            "ist Teil des Mossi-Kulturraums mit eigenem traditionellem Naaba-Königreich. Während "
            "der französischen Kolonialzeit ab 1897 war das Gebiet unter Manga verwaltet. Die "
            "Wirtschaft basiert auf Subsistenzlandwirtschaft mit Sorghum, Hirse und Erdnüssen sowie "
            "auf Bienenzucht und Honigproduktion. Die Region erhält rund 800 mm Niederschlag pro "
            "Jahr und gehört zur Sudan-Savannenzone. Béré ist auch bekannt für seine traditionellen "
            "Töpferinnen, die Wasserkrüge und Vorratsgefäße aus lokalem Ton herstellen."
        ),
        "facts": [
            "Stadt in der Provinz Zoundwéogo",
            "Einwohnerzahl ca. 10.000 (2019)",
            "130 km südlich von Ouagadougou",
            "Mossi-Kulturraum mit traditionellem Naaba",
            "Französische Verwaltung seit 1897",
            "Bekannt für traditionelle Töpferei",
            "Klimazone: Sudan-Savanne, ca. 800 mm Niederschlag",
        ],
    },
    "bama-cities-v2": {
        "desc": (
            "Bama ist eine Stadt in der Provinz Houet im Westen Burkina Fasos und liegt 30 Kilometer "
            "nordöstlich von Bobo-Dioulasso. Die Stadt mit rund 22.000 Einwohnern ist eines der "
            "wichtigsten Reisanbauzentren des Landes: das Bewässerungsperimeter Vallée du Kou wurde "
            "in den 1970er Jahren mit taiwanesischer Hilfe angelegt und produziert auf 1.260 Hektar "
            "über 7.000 Tonnen Reis pro Jahr. Die Wirtschaft basiert ausschließlich auf der "
            "Reiswirtschaft, was Bama zu einem Pilotprojekt der Sankara-Regierung (1983-1987) für "
            "Nahrungsmittelautarkie machte. Während der französischen Kolonialzeit ab 1898 war die "
            "Region unter Bobo-Dioulasso verwaltet."
        ),
        "facts": [
            "Stadt in der Provinz Houet",
            "Einwohnerzahl ca. 22.000 (2019)",
            "30 km nordöstlich von Bobo-Dioulasso",
            "Reisbewässerungsperimeter Vallée du Kou",
            "Anlage in den 1970er Jahren mit Taiwan-Hilfe",
            "1.260 ha bewässerte Reisfläche",
            "Über 7.000 Tonnen Reis pro Jahr",
        ],
    },
    "beregadougou-cities-v2": {
        "desc": (
            "Bérégadougou ist eine Kleinstadt in der Provinz Comoé im Südwesten Burkina Fasos und "
            "liegt 25 Kilometer östlich von Banfora. Die Stadt mit rund 11.000 Einwohnern ist Sitz "
            "der zweiten großen Zuckerrohrplantage des Landes neben SOSUCO Banfora. Die Plantage "
            "wurde in den 1970er Jahren angelegt und beschäftigt mehrere hundert Arbeiter. Während "
            "der französischen Kolonialzeit ab 1898 war die Region unter Banfora verwaltet. Die "
            "Wirtschaft basiert auf Zuckerrohr-, Mango- und Reisanbau, begünstigt durch jährlich "
            "über 1.100 mm Niederschlag. Die Stadt liegt nahe der Eisenbahnstrecke "
            "Abidjan-Ouagadougou, die seit 1934 in Betrieb ist und den Export der Produkte erleichtert."
        ),
        "facts": [
            "Stadt in der Provinz Comoé",
            "Einwohnerzahl ca. 11.000 (2019)",
            "25 km östlich von Banfora",
            "Zweite große Zuckerrohrplantage des Landes",
            "Plantage angelegt in den 1970er Jahren",
            "Über 1.100 mm Niederschlag pro Jahr",
            "Bahnanschluss Abidjan-Ouagadougou seit 1934",
        ],
    },
    "bingo-cities-v2": {
        "desc": (
            "Bingo ist eine Kleinstadt in der Provinz Boulkiemdé im Centre-Ouest Burkina Fasos und "
            "liegt rund 80 Kilometer westlich von Ouagadougou nahe Koudougou. Die Stadt mit rund "
            "8.000 Einwohnern ist Teil des Mossi-Kulturraums mit eigenem traditionellem "
            "Naaba-Königreich. Während der französischen Kolonialzeit ab 1897 war das Gebiet unter "
            "Koudougou verwaltet. Die Wirtschaft basiert auf Subsistenzlandwirtschaft mit Sorghum, "
            "Hirse und Erdnüssen sowie auf Baumwollanbau, der durch die Nähe zu den "
            "Verarbeitungsbetrieben von Koudougou begünstigt wird. Die Region erhält rund 850 mm "
            "Niederschlag pro Jahr und gehört zur Sudan-Savannenzone."
        ),
        "facts": [
            "Kleinstadt in der Provinz Boulkiemdé",
            "Einwohnerzahl ca. 8.000 (2019)",
            "80 km westlich von Ouagadougou",
            "Mossi-Kulturraum mit traditionellem Naaba",
            "Französische Verwaltung seit 1897",
            "Wichtige Baumwollanbauregion",
            "Klimazone: Sudan-Savanne, ca. 850 mm Niederschlag",
        ],
    },
    "solenzo-cities-v2": {
        "desc": (
            "Solenzo ist die Hauptstadt der Provinz Banwa im Westen Burkina Fasos und liegt 280 "
            "Kilometer westlich von Ouagadougou. Die Stadt mit rund 18.000 Einwohnern ist Zentrum "
            "des Bwa-Volkes und einer der wichtigsten Baumwollanbauorte des Landes. Die Provinz "
            "Banwa wurde erst 1996 als neue administrative Einheit geschaffen. Während der "
            "französischen Kolonialzeit ab 1898 war das Gebiet unter Dédougou verwaltet. Die "
            "Region produziert über 30.000 Tonnen Baumwolle pro Jahr und ist Teil des "
            "burkinischen Baumwollgürtels. Die Sankara-Regierung (1983-1987) startete hier "
            "Bewässerungsprojekte. Solenzo ist auch bekannt für die traditionellen Maskentänze des "
            "Bwa-Volkes."
        ),
        "facts": [
            "Hauptstadt der Provinz Banwa",
            "Einwohnerzahl ca. 18.000 (2019)",
            "280 km westlich von Ouagadougou",
            "Provinz 1996 geschaffen",
            "Zentrum des Bwa-Volkes",
            "Über 30.000 Tonnen Baumwolle pro Jahr",
            "Bekannt für Bwa-Maskentänze",
        ],
    },
    "bittou-cities-v2": {
        "desc": (
            "Bittou ist eine Stadt in der Provinz Boulgou im Centre-Est Burkina Fasos und liegt 230 "
            "Kilometer südöstlich von Ouagadougou direkt an der Grenze zu Togo und Ghana. Die Stadt "
            "mit rund 38.000 Einwohnern ist einer der wichtigsten Grenzhandelsplätze Burkina Fasos: "
            "über die Achse Bittou-Lomé läuft ein Großteil des Außenhandels mit Togo und der Hafen "
            "Lomés ist nur 850 Kilometer entfernt. Die Stadt ist Zentrum der Bissa-Bevölkerung. "
            "Während der französischen Kolonialzeit ab 1897 wurde Bittou Grenzposten und "
            "Zollstation. Heute betreibt die Regierung hier einen modernen Trockenhafen mit "
            "Containerumschlag und Lagerhallen, der die Logistik mit dem Hafen Lomé erleichtert."
        ),
        "facts": [
            "Stadt in der Provinz Boulgou",
            "Einwohnerzahl ca. 38.000 (2019)",
            "230 km südöstlich von Ouagadougou",
            "Direkter Grenzort zu Togo und Ghana",
            "Achse zum Hafen Lomé (850 km)",
            "Moderner Trockenhafen mit Containerumschlag",
            "Französische Zollstation seit 1897",
        ],
    },
}


def find_empty_de(text: str) -> list[str]:
    """Return list of POI ids whose descriptionAdvanced.de is missing/empty."""
    # match each POI block: from `id: "..."` until the next `id:` or end of array
    poi_pattern = re.compile(r'id:\s*"([^"]+)"', re.DOTALL)
    matches = list(poi_pattern.finditer(text))
    empty = []
    for i, m in enumerate(matches):
        poi_id = m.group(1)
        start = m.start()
        end = matches[i+1].start() if i+1 < len(matches) else len(text)
        block = text[start:end]
        # find descriptionAdvanced { ... }
        da = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da:
            empty.append(poi_id)
            continue
        # find balanced braces for descriptionAdvanced
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == '{':
                depth += 1
            elif block[j] == '}':
                depth -= 1
            j += 1
        da_body = block[body_start:j-1]
        # check de:
        de_match = re.search(r'\bde:\s*"([^"]*)"', da_body)
        if not de_match or not de_match.group(1).strip():
            empty.append(poi_id)
    return empty


def inject_de_into_object(obj_body: str, content_de: str) -> str:
    """Insert or replace `de: "..."` in an object body (the inside of {}).
    Returns new object body.
    """
    de_match = re.search(r'\bde:\s*"([^"]*)"', obj_body)
    if de_match:
        # replace
        return obj_body[:de_match.start()] + f'de: "{content_de}"' + obj_body[de_match.end():]
    # insert at start
    stripped = obj_body.lstrip()
    leading = obj_body[:len(obj_body) - len(stripped)]
    sep = ", " if stripped and not stripped.startswith(',') else ""
    return leading + f'de: "{content_de}"' + sep + stripped


def inject_facts_de(obj_body: str, facts: list[str]) -> str:
    """Insert or replace `de: [...]` array."""
    facts_arr = "[" + ", ".join(f'"{f}"' for f in facts) + "]"
    de_match = re.search(r'\bde:\s*\[[^\]]*\]', obj_body)
    if de_match:
        return obj_body[:de_match.start()] + f'de: {facts_arr}' + obj_body[de_match.end():]
    stripped = obj_body.lstrip()
    leading = obj_body[:len(obj_body) - len(stripped)]
    sep = ", " if stripped and not stripped.startswith(',') else ""
    return leading + f'de: {facts_arr}' + sep + stripped


def find_balanced_object(text: str, key_pattern: str, start_pos: int) -> tuple[int, int, int, int] | None:
    """Find `key: { ... }` starting from start_pos. Returns (key_start, body_start, body_end, end_after_close).
    body is the content between { and } (exclusive).
    """
    m = re.search(key_pattern + r'\s*:\s*\{', text[start_pos:])
    if not m:
        return None
    abs_start = start_pos + m.start()
    body_start = start_pos + m.end()
    depth = 1
    j = body_start
    while j < len(text) and depth > 0:
        if text[j] == '{':
            depth += 1
        elif text[j] == '}':
            depth -= 1
        j += 1
    return abs_start, body_start, j-1, j


def process(text: str) -> tuple[str, list[str], list[str]]:
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')
    matches = list(poi_pattern.finditer(text))
    # build POI block ranges
    ranges = []
    for i, m in enumerate(matches):
        poi_id = m.group(1)
        start = m.start()
        end = matches[i+1].start() if i+1 < len(matches) else len(text)
        ranges.append((poi_id, start, end))
    # filter empty DE
    empty_ids = []
    for poi_id, s, e in ranges:
        block = text[s:e]
        da = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da:
            empty_ids.append(poi_id)
            continue
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == '{': depth += 1
            elif block[j] == '}': depth -= 1
            j += 1
        body = block[body_start:j-1]
        de_match = re.search(r'\bde:\s*"([^"]*)"', body)
        if not de_match or not de_match.group(1).strip():
            empty_ids.append(poi_id)
    # take first 30
    target_ids = empty_ids[:30]
    filled = []
    skipped = []
    # Process from end to start to keep offsets stable
    new_text = text
    # rebuild ranges on new_text after each modification; simpler: iterate reverse on initial ranges
    # Since modifications change offsets, iterate ranges from end to beginning
    target_set = set(target_ids)
    for poi_id, s, e in reversed(ranges):
        if poi_id not in target_set:
            continue
        if poi_id not in DATA:
            skipped.append(poi_id + " (no DATA)")
            continue
        entry = DATA[poi_id]
        block = new_text[s:e]
        # descriptionAdvanced
        da = find_balanced_object(block, r'descriptionAdvanced', 0)
        if da:
            _, bstart, bend, _ = da
            body = block[bstart:bend]
            new_body = inject_de_into_object(body, entry["desc"])
            block = block[:bstart] + new_body + block[bend:]
        # factsAdvanced
        fa = find_balanced_object(block, r'factsAdvanced', 0)
        if fa:
            _, bstart, bend, _ = fa
            body = block[bstart:bend]
            new_body = inject_facts_de(body, entry["facts"])
            block = block[:bstart] + new_body + block[bend:]
        new_text = new_text[:s] + block + new_text[e:]
        filled.append(poi_id)
    return new_text, filled, skipped


def main():
    text = FILE.read_text(encoding="utf-8")
    # First, list empty
    empty = find_empty_de(text)
    print(f"Empty DE descriptions found: {len(empty)}")
    print("First 30:")
    for x in empty[:30]:
        print(" -", x)
    new_text, filled, skipped = process(text)
    if filled:
        FILE.write_text(new_text, encoding="utf-8")
        print(f"\nFilled {len(filled)} POIs:")
        for x in filled:
            print(" +", x)
    if skipped:
        print(f"\nSkipped {len(skipped)}:")
        for x in skipped:
            print(" -", x)


if __name__ == "__main__":
    main()
