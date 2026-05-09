# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraLebanonCitiesV2.ts.

Lebanon file currently has NO descriptionAdvanced/factsAdvanced for any POI.
Strategy: locate each POI block by id, find the end of `facts: { ... }`, then
insert `descriptionAdvanced: { de: "..." }` and `factsAdvanced: { de: [...] }`
right after the facts object (before the POI's closing brace).
"""
from __future__ import annotations
import re
import subprocess
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraLebanonCitiesV2.ts")

DATA: dict[str, dict] = {
    "beirut-cities-v2": {
        "desc": (
            "Beirut ist die Hauptstadt und größte Stadt Libanons mit rund 2,4 Millionen Einwohnern in der Metropolregion und liegt an einer markanten Mittelmeerhalbinsel. "
            "Bereits im 15. Jahrhundert v. Chr. wird die Stadt als phönizische Hafensiedlung Biruta in den Amarna-Briefen erwähnt. "
            "In römischer Zeit beherbergte Berytus die berühmteste Rechtsschule des Reiches, gegründet im 3. Jahrhundert n. Chr. unter Septimius Severus. "
            "Nach der osmanischen Herrschaft (1516–1918) wurde Beirut 1920 unter dem französischen Mandat zur Hauptstadt des Großlibanon und erhielt 1943 mit der Unabhängigkeit den Status der Hauptstadt der Republik Libanon. "
            "Der verheerende Bürgerkrieg (1975–1990) und die Hafenexplosion vom 4. August 2020 prägen die jüngere Geschichte tief."
        ),
        "facts": [
            "Hauptstadt seit der Staatsgründung 1943",
            "Erste schriftliche Erwähnung im 15. Jahrhundert v. Chr. (Amarna-Briefe)",
            "Berühmte römische Rechtsschule ab dem 3. Jahrhundert n. Chr.",
            "Französisches Mandat 1920 bis 1943",
            "Bürgerkrieg von 1975 bis 1990 zerstörte das Stadtzentrum",
            "Hafenexplosion am 4. August 2020 mit über 220 Toten",
            "Internationaler Flughafen Rafic Hariri seit 1954 in Betrieb",
            "Metropolregion mit etwa 2,4 Millionen Einwohnern",
        ],
    },
    "tripoli-cities-v2": {
        "desc": (
            "Tripoli (arabisch Tarabulus) ist mit rund 230.000 Einwohnern die zweitgrößte Stadt Libanons und Hauptstadt des Gouvernements Nord. "
            "Die Stadt wurde im 8. Jahrhundert v. Chr. von den Phöniziern als Föderation dreier Siedlungen aus Tyros, Sidon und Arados gegründet, woraus auch der griechische Name Tripolis (Dreistadt) entstand. "
            "Unter der Mamlukenherrschaft (1289–1516) erlebte sie eine Blütezeit, deren Spuren in über 100 historischen Bauwerken noch sichtbar sind, darunter die Große Moschee von 1294. "
            "Die Kreuzfahrer hatten die Stadt 1109 erobert und sie zur Hauptstadt der Grafschaft Tripolis gemacht. "
            "Während des französischen Mandats (1920–1943) wurde Tripoli zum wichtigen Hafen für den Erdölexport aus dem Irak."
        ),
        "facts": [
            "Zweitgrößte Stadt Libanons mit etwa 230.000 Einwohnern",
            "Phönizische Gründung im 8. Jahrhundert v. Chr.",
            "Hauptstadt der Kreuzfahrer-Grafschaft Tripolis 1109 bis 1289",
            "Mamlukische Herrschaft von 1289 bis 1516",
            "Über 100 mamlukische Bauwerke im historischen Zentrum",
            "Zitadelle Raymond de Saint-Gilles ab 1103 erbaut",
            "Endpunkt der Erdölpipeline aus Kirkuk während des Mandats",
            "Berühmt für Süßigkeiten wie Halawet El Jibn",
        ],
    },
    "sidon-cities-v2": {
        "desc": (
            "Sidon (arabisch Saida) ist die drittgrößte Stadt Libanons mit rund 80.000 Einwohnern und Hauptstadt des Gouvernements Süd. "
            "Die Stadt zählt zu den ältesten phönizischen Metropolen, mit einer durchgehenden Besiedlung seit etwa 4000 v. Chr. "
            "Im ersten Jahrtausend v. Chr. war Sidon das wichtigste Zentrum der Purpurfarben-Herstellung aus Murex-Schnecken. "
            "Nach Eroberungen durch Assyrer, Babylonier und Perser blühte die Stadt unter Hellenisierung und in römischer Zeit erneut auf. "
            "Während des französischen Mandats (1920–1943) wurde Sidon Verwaltungssitz der Region. "
            "Die berühmte Seefestung der Kreuzritter wurde 1228 auf einer kleinen Insel errichtet und ist heute das Wahrzeichen der Stadt."
        ),
        "facts": [
            "Etwa 80.000 Einwohner, drittgrößte Stadt Libanons",
            "Durchgehende Besiedlung seit rund 4000 v. Chr.",
            "Phönizisches Zentrum der Purpurfarben-Produktion",
            "Seefestung der Kreuzritter ab 1228 erbaut",
            "Khan El Franj aus dem 17. Jahrhundert als Karawanserei",
            "Geburtsort des Premierministers Rafic Hariri (1944)",
            "Verwaltungssitz unter dem französischen Mandat",
            "Tempel des Eshmun aus dem 7. Jahrhundert v. Chr. in der Nähe",
        ],
    },
    "tyre-cities-v2": {
        "desc": (
            "Tyros (arabisch Sour) liegt rund 80 Kilometer südlich von Beirut und zählt etwa 60.000 Einwohner. "
            "Die phönizische Stadt wurde nach Überlieferungen 2750 v. Chr. gegründet und war Mutterstadt zahlreicher Kolonien, darunter Karthago, das 814 v. Chr. von Königin Elissa (Dido) gegründet wurde. "
            "Unter König Hiram I. (969–936 v. Chr.) erlebte Tyros seine größte Blüte und lieferte Zedernholz für den Salomonischen Tempel in Jerusalem. "
            "Alexander der Große eroberte die Inselstadt 332 v. Chr. nach siebenmonatiger Belagerung durch den Bau eines Damms. "
            "Die römischen Ruinen mit dem 480 Meter langen Hippodrom für 20.000 Zuschauer und der Triumphbogen wurden 1984 zum UNESCO-Weltkulturerbe erklärt. "
            "Während des französischen Mandats (1923–1943) wurde Tyros wieder Provinzstadt."
        ),
        "facts": [
            "Etwa 60.000 Einwohner, 80 Kilometer südlich von Beirut",
            "Phönizische Gründung um 2750 v. Chr.",
            "Mutterstadt Karthagos, gegründet 814 v. Chr.",
            "Eroberung durch Alexander den Großen im Jahr 332 v. Chr.",
            "Römisches Hippodrom mit 480 Metern Länge",
            "UNESCO-Weltkulturerbe seit 1984",
            "Geburtsort des Purpurfarben-Handels",
            "Drei archäologische Hauptstätten im Stadtgebiet",
        ],
    },
    "byblos-cities-v2": {
        "desc": (
            "Byblos (arabisch Jbeil) liegt etwa 37 Kilometer nördlich von Beirut und zählt zu den ältesten ununterbrochen bewohnten Städten der Welt mit Spuren menschlicher Besiedlung seit dem 7. Jahrtausend v. Chr. "
            "Im 3. Jahrtausend v. Chr. war Byblos das wichtigste Handelszentrum für ägyptisches Papyrus, weshalb die Griechen die Stadt Byblos (von biblos = Papyrus) nannten. "
            "Hier wurde im 11. Jahrhundert v. Chr. das phönizische Alphabet entwickelt, aus dem das griechische und damit alle westlichen Schriftsysteme hervorgingen. "
            "Die Kreuzritter eroberten die Stadt 1104 und errichteten die heute noch erhaltene Burg auf phönizischen Fundamenten. "
            "Unter osmanischer Herrschaft (1516–1918) wurde Byblos zur Provinzstadt und kam 1920 unter französisches Mandat. "
            "Seit 1984 zählt der historische Kern zum UNESCO-Weltkulturerbe."
        ),
        "facts": [
            "Etwa 37 Kilometer nördlich von Beirut",
            "Besiedlung seit dem 7. Jahrtausend v. Chr.",
            "Geburtsort des phönizischen Alphabets im 11. Jahrhundert v. Chr.",
            "Wichtigster Papyrushandelsplatz im 3. Jahrtausend v. Chr.",
            "Kreuzritterburg ab 1104 erbaut",
            "UNESCO-Weltkulturerbe seit 1984",
            "Königsgräber mit dem berühmten Sarkophag des Ahiram",
            "Sieben aufeinanderfolgende Zivilisationsschichten erforscht",
        ],
    },
    "jounieh-cities-v2": {
        "desc": (
            "Jounieh liegt rund 16 Kilometer nördlich von Beirut an einer halbmondförmigen Bucht und zählt etwa 100.000 Einwohner. "
            "Die phönizische Siedlung Porphyreon wurde bereits im Altertum als Hafen genutzt. "
            "Während des libanesischen Bürgerkrieges (1975–1990) entwickelte sich Jounieh zum wirtschaftlichen Zentrum der christlich kontrollierten Gebiete und ersetzte zeitweise den blockierten Hafen Beirut. "
            "Die berühmte Seilbahn Téléférique, 1965 in Betrieb genommen, überwindet auf einer Strecke von 1,5 Kilometern einen Höhenunterschied von 600 Metern und führt zur Wallfahrtsbasilika Notre-Dame du Liban in Harissa, deren 8,5 Meter hohe Marienstatue von 1908 stammt. "
            "Während des französischen Mandats (1920–1943) wurde der Hafen ausgebaut. "
            "Heute ist Jounieh ein Zentrum für Tourismus und Glücksspiel mit dem Casino du Liban."
        ),
        "facts": [
            "Etwa 100.000 Einwohner, 16 Kilometer nördlich von Beirut",
            "Phönizische Siedlung Porphyreon im Altertum",
            "Téléférique-Seilbahn seit 1965 in Betrieb",
            "Marienstatue Notre-Dame du Liban aus dem Jahr 1908",
            "Wirtschaftszentrum während des Bürgerkriegs 1975 bis 1990",
            "Casino du Liban seit 1959 geöffnet",
            "Halbmondförmige Bucht mit 600 Metern Höhenunterschied",
            "Hafenausbau unter französischem Mandat",
        ],
    },
    "baalbek-cities-v2": {
        "desc": (
            "Baalbek liegt im fruchtbaren Bekaa-Tal auf 1.170 Metern Höhe und zählt rund 80.000 Einwohner. "
            "Die phönizische Siedlung war dem Sturm- und Fruchtbarkeitsgott Baal geweiht, woraus der heutige Name entstand. "
            "Unter den Römern erhielt die Stadt nach 47 v. Chr. den Namen Heliopolis und wurde zu einem der wichtigsten Kultzentren des Reiches. "
            "Die monumentalen Tempel des Jupiter, Bacchus und der Venus entstanden über zwei Jahrhunderte ab dem 1. Jahrhundert n. Chr. "
            "Der Jupitertempel besaß ursprünglich 54 Säulen, von denen heute noch sechs aufrecht stehen, jede 22 Meter hoch und 2,2 Meter dick. "
            "Der außergewöhnlich gut erhaltene Bacchustempel zählt zu den prächtigsten römischen Bauwerken der Welt. "
            "1984 erklärte die UNESCO die Anlage zum Weltkulturerbe."
        ),
        "facts": [
            "Im Bekaa-Tal auf 1.170 Metern Höhe",
            "Etwa 80.000 Einwohner",
            "Römischer Name Heliopolis ab 47 v. Chr.",
            "Jupitertempel mit ursprünglich 54 Säulen, je 22 Meter hoch",
            "Bacchustempel als bestes erhaltenes römisches Bauwerk",
            "Megalithe der Trilithon-Steine wiegen je rund 800 Tonnen",
            "UNESCO-Weltkulturerbe seit 1984",
            "Internationales Festival seit 1955 jeden Sommer",
        ],
    },
    "zahle-cities-v2": {
        "desc": (
            "Zahlé liegt auf 1.050 Metern Höhe in der Bekaa-Ebene und ist mit rund 130.000 Einwohnern die größte mehrheitlich christliche Stadt Libanons sowie Hauptstadt des Gouvernements Bekaa. "
            "Die Stadt wurde im 18. Jahrhundert von melkitischen Christen aus dem Gebirge gegründet, die hier Zuflucht vor Konflikten suchten. "
            "Im 19. Jahrhundert wurde Zahlé zum wichtigsten Handelszentrum für Wein, Getreide und Vieh zwischen Beirut und Damaskus. "
            "1860 wurde die Stadt während der drusisch-maronitischen Kämpfe weitgehend zerstört, aber rasch wieder aufgebaut. "
            "Während des französischen Mandats (1920–1943) wurde Zahlé Verwaltungssitz der Bekaa-Region. "
            "Berühmt sind die zahlreichen Restaurants entlang des Berdawni-Flusses und das jährliche Fest des Weines, das seit 1957 stattfindet."
        ),
        "facts": [
            "Etwa 130.000 Einwohner, größte christliche Stadt Libanons",
            "Hauptstadt des Gouvernements Bekaa auf 1.050 Metern Höhe",
            "Gründung im 18. Jahrhundert durch melkitische Christen",
            "Zerstörung während der drusisch-maronitischen Kämpfe 1860",
            "Französisches Mandat 1920 bis 1943",
            "Fest des Weines seit 1957 jährlich",
            "Zentrum des libanesischen Weinanbaus mit Bekaa-Weinen",
            "Restaurants entlang des Berdawni-Flusses",
        ],
    },
    "nabatieh-cities-v2": {
        "desc": (
            "Nabatieh liegt im Süden Libanons rund 70 Kilometer südlich von Beirut auf 400 Metern Höhe und zählt etwa 100.000 Einwohner. "
            "Die Stadt ist Hauptstadt des Gouvernements Nabatieh und das wichtigste schiitische Zentrum im Südlibanon. "
            "Der Name leitet sich vermutlich vom arabischen Wort für Wassersprung ab, da die Region für Quellen bekannt war. "
            "Unter osmanischer Herrschaft (1516–1918) entwickelte sich Nabatieh zum wichtigen Marktort, dessen Montagsmarkt bis heute Händler aus dem ganzen Süden anzieht. "
            "Während des französischen Mandats (1920–1943) wurde die Stadt Verwaltungszentrum. "
            "Während der israelischen Besetzung des Südlibanon (1982–2000) lag Nabatieh als Frontstadt im Konfliktgebiet. "
            "Die berühmten Aschura-Prozessionen jeden Muharram zählen zu den intensivsten in der schiitischen Welt."
        ),
        "facts": [
            "Etwa 100.000 Einwohner auf 400 Metern Höhe",
            "Hauptstadt des Gouvernements Nabatieh",
            "Montagsmarkt seit der osmanischen Zeit",
            "Französisches Mandat 1920 bis 1943",
            "Frontstadt während der israelischen Besetzung 1982 bis 2000",
            "Berühmte schiitische Aschura-Prozessionen jeden Muharram",
            "Burg Beaufort der Kreuzritter aus dem 12. Jahrhundert in der Nähe",
            "Wichtigstes schiitisches Zentrum im Südlibanon",
        ],
    },
    "aley-cities-v2": {
        "desc": (
            "Aley liegt auf 800 Metern Höhe im Libanongebirge, rund 17 Kilometer südöstlich von Beirut, und zählt etwa 130.000 Einwohner. "
            "Die Stadt entwickelte sich im 19. Jahrhundert zur beliebtesten Sommerresidenz reicher Beiruter Familien und arabischer Adliger, weshalb sie den Beinamen Braut der Sommerresorts erhielt. "
            "Während des französischen Mandats (1920–1943) wurden zahlreiche prächtige Villen und Hotels im Mandatsstil errichtet. "
            "Die Bevölkerung ist gemischt mit einer drusischen Mehrheit und bedeutenden christlichen und sunnitischen Minderheiten. "
            "Während des Bergkriegs von 1983 bis 1984 zwischen Drusen und Christen wurde die Region schwer getroffen. "
            "Die Eisenbahnlinie Beirut–Damaskus, 1895 von einer französischen Gesellschaft gebaut, machte Aley zum wichtigsten Bahnhof der Bergregion."
        ),
        "facts": [
            "Etwa 130.000 Einwohner auf 800 Metern Höhe",
            "17 Kilometer südöstlich von Beirut",
            "Sommerresidenz reicher Familien seit dem 19. Jahrhundert",
            "Eisenbahnlinie Beirut-Damaskus seit 1895",
            "Französisches Mandat 1920 bis 1943",
            "Bergkrieg zwischen Drusen und Christen 1983 bis 1984",
            "Drusische Mehrheit mit gemischter Bevölkerung",
            "Spitzname Braut der Sommerresorts",
        ],
    },
    "bcharre-cities-v2": {
        "desc": (
            "Bscharre liegt auf 1.450 Metern Höhe im nördlichen Libanongebirge und zählt rund 25.000 Einwohner. "
            "Die maronitische Stadt liegt am Eingang zum Qadisha-Tal, das seit dem 7. Jahrhundert Zufluchtsort verfolgter Christen war und 1998 zum UNESCO-Weltkulturerbe erklärt wurde. "
            "Bscharre ist der Geburtsort des Dichters und Malers Khalil Gibran (1883–1931), Autor des weltberühmten Werks Der Prophet (1923), das in über 100 Sprachen übersetzt wurde. "
            "Sein Grab und das ihm gewidmete Museum befinden sich im ehemaligen Kloster Mar Sarkis. "
            "In der Nähe liegen die berühmten Zedern des Herrn (Cedars of God), ein Restbestand der einst riesigen libanesischen Zedernwälder, die schon im Gilgamesch-Epos und in der Bibel erwähnt werden. "
            "Während des französischen Mandats (1920–1943) wurde die Region geschützt."
        ),
        "facts": [
            "Etwa 25.000 Einwohner auf 1.450 Metern Höhe",
            "Geburtsort von Khalil Gibran (1883 bis 1931)",
            "Sein Werk Der Prophet erschien 1923 und wurde in über 100 Sprachen übersetzt",
            "Khalil-Gibran-Museum im Kloster Mar Sarkis",
            "Qadisha-Tal seit 1998 UNESCO-Weltkulturerbe",
            "Zedern des Herrn als jahrtausendealte Bäume",
            "Höchster Skiort Libanons mit Skigebiet Cedars",
            "Maronitisches Zentrum des Nordlibanon",
        ],
    },
    "batroun-cities-v2": {
        "desc": (
            "Batrun liegt rund 50 Kilometer nördlich von Beirut an der Mittelmeerküste und zählt etwa 30.000 Einwohner. "
            "Die Stadt zählt zu den ältesten ununterbrochen bewohnten Orten der Welt mit phönizischen Wurzeln aus dem 2. Jahrtausend v. Chr. "
            "Die berühmte phönizische Seemauer aus aufrecht stehenden, 225 Meter langen Sandsteinblöcken schützte den Hafen vor den Wellen des Mittelmeers und ist bis heute teilweise erhalten. "
            "Im 6. Jahrhundert wurde die Stadt durch ein verheerendes Erdbeben beschädigt, aber unter byzantinischer Herrschaft wieder aufgebaut. "
            "Die Kreuzritter errichteten 1104 die Festung Mseilha auf dem Weg nach Tripoli. "
            "Unter osmanischer Herrschaft entwickelte sich Batrun zum Handelszentrum für Olivenöl und Seide. "
            "Heute ist die Stadt für ihre traditionelle Limonadenherstellung mit frischen Zitronen bekannt."
        ),
        "facts": [
            "Etwa 30.000 Einwohner, 50 Kilometer nördlich von Beirut",
            "Phönizische Wurzeln aus dem 2. Jahrtausend v. Chr.",
            "225 Meter lange phönizische Seemauer",
            "Erdbeben im 6. Jahrhundert verursachte starke Schäden",
            "Mseilha-Festung der Kreuzritter ab 1104",
            "Osmanisches Zentrum für Olivenöl und Seide",
            "Berühmt für traditionelle frische Limonade",
            "Kirche Mar Stephan aus dem 19. Jahrhundert",
        ],
    },
    "zgharta-cities-v2": {
        "desc": (
            "Zgharta liegt im Norden Libanons rund 8 Kilometer von Tripoli entfernt auf 250 Metern Höhe und zählt etwa 70.000 Einwohner. "
            "Die maronitische Stadt ist eng mit dem Bergdorf Ehden verbunden, da die Bewohner traditionell zwischen beiden Orten saisonal pendelten: Ehden im heißen Sommer auf 1.450 Metern Höhe, Zgharta in den kühleren Wintermonaten. "
            "Die Stadt war Hochburg der maronitischen Frangieh-Familie, deren Mitglied Sleiman Frangieh von 1970 bis 1976 Präsident Libanons war. "
            "Während des Bürgerkriegs (1975–1990) bildete Zgharta einen wichtigen Stützpunkt der christlichen Marada-Miliz. "
            "Während des französischen Mandats (1920–1943) wurde die Region zur olivenproduzierenden Hochburg. "
            "Die jährliche Olivenölproduktion zählt zu den höchsten Libanons."
        ),
        "facts": [
            "Etwa 70.000 Einwohner auf 250 Metern Höhe",
            "8 Kilometer von Tripoli entfernt",
            "Eng verbunden mit dem Sommerort Ehden auf 1.450 Metern",
            "Hochburg der maronitischen Frangieh-Familie",
            "Sleiman Frangieh war Präsident von 1970 bis 1976",
            "Marada-Miliz im Bürgerkrieg 1975 bis 1990",
            "Zentrum der Olivenölproduktion",
            "Französisches Mandat 1920 bis 1943",
        ],
    },
    "amioun-cities-v2": {
        "desc": (
            "Amioun liegt im Norden Libanons rund 70 Kilometer nördlich von Beirut auf 350 Metern Höhe und ist die Hauptstadt des Distrikts El Koura mit etwa 12.000 Einwohnern. "
            "Die Stadt liegt auf einem markanten Hügel mit traditionellen Steinhäusern und engen Gassen. "
            "Der Name geht auf das aramäische Emun (fest oder treu) zurück. "
            "Die griechisch-orthodoxe Bevölkerung dominiert die Region, was Amioun zu einem der wichtigsten Zentren dieser Konfession in Libanon macht. "
            "Die Kirche St. Phocas aus dem 11. Jahrhundert mit ihren byzantinischen Fresken zählt zu den ältesten erhaltenen Sakralbauten der Region. "
            "Unter den umliegenden Klippen finden sich antike Höhlenwohnungen aus römischer Zeit. "
            "Während des französischen Mandats (1920–1943) wurde die olivenreiche Region wirtschaftlich gefördert."
        ),
        "facts": [
            "Etwa 12.000 Einwohner auf 350 Metern Höhe",
            "Hauptstadt des Distrikts El Koura",
            "Name aus dem aramäischen Emun (fest)",
            "Kirche St. Phocas aus dem 11. Jahrhundert",
            "Antike Höhlenwohnungen aus römischer Zeit in den Klippen",
            "Wichtiges griechisch-orthodoxes Zentrum",
            "Französisches Mandat 1920 bis 1943",
            "Region berühmt für Olivenöl-Produktion",
        ],
    },
    "jezzine-cities-v2": {
        "desc": (
            "Jezzine liegt im Südlibanon auf 950 Metern Höhe rund 22 Kilometer östlich von Sidon und zählt etwa 22.000 Einwohner. "
            "Die mehrheitlich maronitisch-katholische Bergstadt ist eine der traditionsreichsten Sommerfrischen Libanons, beliebt für ihr mildes Klima. "
            "Der spektakuläre Wasserfall stürzt 80 Meter in die Tiefe und gilt als einer der höchsten Libanons. "
            "Jezzine ist berühmt für sein traditionelles Besteckhandwerk, das seit Anfang des 19. Jahrhunderts Messer und Gabeln mit kunstvoll geschnitzten Griffen in Form von Vogelköpfen herstellt; nur noch wenige Familienbetriebe pflegen das Handwerk. "
            "Während des französischen Mandats (1920–1943) entwickelte sich der Tourismus stark. "
            "Während der israelischen Besetzung des Südlibanon (1982–2000) lag die Stadt im sogenannten Sicherheitsgürtel und war Hauptquartier der christlichen Südlibanesischen Armee."
        ),
        "facts": [
            "Etwa 22.000 Einwohner auf 950 Metern Höhe",
            "22 Kilometer östlich von Sidon",
            "Wasserfall mit 80 Metern Höhe",
            "Traditionelles Bestecksortiment mit Vogelkopf-Griffen seit dem 19. Jahrhundert",
            "Französisches Mandat 1920 bis 1943",
            "Hauptquartier der Südlibanesischen Armee 1982 bis 2000",
            "Maronitische Mehrheit in der Bergstadt",
            "Beliebte Sommerfrische seit dem 19. Jahrhundert",
        ],
    },
    "hermel-cities-v2": {
        "desc": (
            "Hermel liegt im äußersten Norden des Bekaa-Tals auf 700 Metern Höhe nahe der syrischen Grenze und zählt rund 30.000 Einwohner. "
            "Die Stadt ist Hauptort des gleichnamigen Distrikts im Gouvernement Baalbek-Hermel und mehrheitlich schiitisch geprägt. "
            "In der Nähe entspringt der Orontes-Fluss (auch Nahr al-Asi genannt), einer der wichtigsten Flüsse der Levante. "
            "Das antike Hermel-Pyramidenmonument (Qamoua El Hermel) aus dem 1. oder 2. Jahrhundert v. Chr. ist eine 27 Meter hohe Grabpyramide auf einem würfelförmigen Sockel mit Reliefs von Jagdszenen, vermutlich Mausoleum eines syrischen Königs. "
            "Während der osmanischen Herrschaft (1516–1918) blieb die Region weitgehend stammesgeprägt. "
            "Heute ist Hermel beliebter Ausgangspunkt für Rafting-Touren auf dem Orontes."
        ),
        "facts": [
            "Etwa 30.000 Einwohner auf 700 Metern Höhe",
            "Im äußersten Norden des Bekaa-Tals",
            "Quelle des Orontes-Flusses in der Nähe",
            "Hermel-Pyramide aus dem 1. oder 2. Jahrhundert v. Chr.",
            "Pyramide 27 Meter hoch mit Jagdreliefs",
            "Schiitische Mehrheitsbevölkerung",
            "Beliebter Rafting-Ausgangspunkt",
            "Französisches Mandat 1920 bis 1943",
        ],
    },
    "bhamdoun-cities-v2": {
        "desc": (
            "Bhamdoun liegt auf 1.150 Metern Höhe im Libanongebirge rund 25 Kilometer südöstlich von Beirut und zählt etwa 9.000 Einwohner. "
            "Die Stadt entwickelte sich im späten 19. Jahrhundert zu einer beliebten Sommerresidenz für reiche Familien aus Beirut und der Golfregion, vor allem aus Saudi-Arabien und Kuwait. "
            "Die historische Eisenbahnlinie Beirut–Damaskus, eröffnet 1895 von einer französischen Gesellschaft, machte Bhamdoun zum wichtigen Bahnhof. "
            "Während des französischen Mandats (1920–1943) erlebte der Sommertourismus einen Höhepunkt, viele prächtige Hotels und Villen entstanden. "
            "Während des libanesischen Bürgerkriegs (1975–1990) wurde Bhamdoun zwischen drusischen und christlichen Milizen umkämpft und im sogenannten Bergkrieg von 1983 weitgehend zerstört. "
            "Heute ist die Stadt von Weinbergen umgeben, die zur libanesischen Weinproduktion beitragen."
        ),
        "facts": [
            "Etwa 9.000 Einwohner auf 1.150 Metern Höhe",
            "25 Kilometer südöstlich von Beirut",
            "Eisenbahn Beirut-Damaskus seit 1895",
            "Sommerresidenz für Beiruter und Golfaraber",
            "Französisches Mandat 1920 bis 1943",
            "Bergkrieg 1983 verursachte schwere Zerstörungen",
            "Weinberge umgeben die Stadt",
            "Tourismus-Wiederaufbau seit den 1990er Jahren",
        ],
    },
    "halba-cities-v2": {
        "desc": (
            "Halba ist die Hauptstadt des Gouvernements Akkar im äußersten Norden Libanons, rund 110 Kilometer von Beirut entfernt und 28 Kilometer nordöstlich von Tripoli, mit etwa 23.000 Einwohnern. "
            "Die Stadt liegt auf 200 Metern Höhe in einer landwirtschaftlich geprägten Ebene mit Olivenhainen und Tabakanbau. "
            "Akkar wurde 2003 vom Gouvernement Nord abgespalten und Halba als neue Verwaltungshauptstadt eingerichtet. "
            "Die Bevölkerung ist mehrheitlich sunnitisch mit bedeutenden christlich-orthodoxen und alawitischen Minderheiten. "
            "Während des französischen Mandats (1920–1943) wurde die Region zum wichtigen Tabakanbaugebiet ausgebaut. "
            "Wegen der Nähe zur syrischen Grenze beherbergt Halba seit dem syrischen Bürgerkrieg ab 2011 zehntausende Flüchtlinge, was die Bevölkerungsstruktur stark verändert hat. "
            "Die Region zählt zu den ärmsten Libanons mit hoher Arbeitslosigkeit."
        ),
        "facts": [
            "Etwa 23.000 Einwohner, Hauptstadt des Gouvernements Akkar",
            "110 Kilometer von Beirut, 28 Kilometer von Tripoli",
            "Gouvernement Akkar 2003 vom Nord abgespalten",
            "Sunnitische Mehrheit mit christlichen und alawitischen Minderheiten",
            "Tabakanbau seit französischem Mandat 1920 bis 1943",
            "Aufnahme syrischer Flüchtlinge seit 2011",
            "Eine der ärmsten Regionen Libanons",
            "Olivenhaine prägen die Landschaft",
        ],
    },
    "rashaya-cities-v2": {
        "desc": (
            "Rashaya liegt am Westhang des Hermon-Gebirges auf 1.250 Metern Höhe im Südosten Libanons nahe der syrischen Grenze und zählt rund 8.000 Einwohner. "
            "Die historische Stadt mit traditioneller Architektur aus rotem Sandstein und engen Kopfsteinpflastergassen wird wegen ihrer Lage auch Rashaya al-Wadi (Rashaya des Tals) genannt. "
            "Die Zitadelle von Rashaya, ursprünglich osmanisch, wurde von den französischen Mandatsbehörden als Gefängnis genutzt. "
            "Am 11. November 1943 inhaftierten die Franzosen hier die führenden Politiker Libanons, darunter Präsident Bechara El Khoury und Premierminister Riad El Solh, nachdem das Parlament den Mandatsstatus aufgehoben hatte. "
            "Die anschließende Volksbewegung führte am 22. November 1943 zur Freilassung der Gefangenen und zur Unabhängigkeit Libanons. "
            "Die Zitadelle gilt seither als Wiege der libanesischen Unabhängigkeit."
        ),
        "facts": [
            "Etwa 8.000 Einwohner auf 1.250 Metern Höhe",
            "Am Westhang des Hermon-Gebirges",
            "Zitadelle als französisches Mandatsgefängnis",
            "Inhaftierung der Politiker am 11. November 1943",
            "Freilassung am 22. November 1943, Tag der Unabhängigkeit",
            "Wiege der libanesischen Unabhängigkeit",
            "Architektur aus rotem Sandstein",
            "Drusisch-christlich gemischte Bevölkerung",
        ],
    },
    "hasbaya-cities-v2": {
        "desc": (
            "Hasbaya liegt im Südosten Libanons am Westhang des Hermon-Gebirges auf 750 Metern Höhe und zählt rund 5.000 Einwohner. "
            "Die Stadt ist eines der ältesten und wichtigsten Zentren der drusischen Gemeinschaft Libanons. "
            "Der prächtige Schihab-Palast (Qasr Al Chehab) wurde im 12. Jahrhundert ursprünglich als Kreuzritterburg errichtet und im 17. Jahrhundert von der drusischen Schihab-Dynastie zu einem wahren Palast umgebaut, der noch heute teilweise von Familienmitgliedern bewohnt wird. "
            "Die Region ist von ausgedehnten Olivenhainen umgeben, deren Olivenölproduktion seit Jahrhunderten ein wirtschaftliches Standbein ist. "
            "Während des Bürgerkriegs (1975–1990) und der israelischen Besetzung (1978–2000) lag Hasbaya nahe der Konfliktzone. "
            "Während des französischen Mandats (1920–1943) wurde die Region Teil des Großlibanon."
        ),
        "facts": [
            "Etwa 5.000 Einwohner auf 750 Metern Höhe",
            "Am Westhang des Hermon-Gebirges",
            "Schihab-Palast aus dem 12. Jahrhundert",
            "Ursprünglich Kreuzritterburg, später drusischer Palast",
            "Wichtiges Zentrum der drusischen Gemeinschaft",
            "Olivenhaine prägen die Wirtschaft",
            "Israelische Besetzung 1978 bis 2000 in der Nähe",
            "Französisches Mandat 1920 bis 1943",
        ],
    },
    "rayak-cities-v2": {
        "desc": (
            "Rayak liegt im zentralen Bekaa-Tal auf 920 Metern Höhe rund 60 Kilometer östlich von Beirut und zählt etwa 5.000 Einwohner. "
            "Die Stadt war im 20. Jahrhundert das wichtigste Eisenbahnkreuz Libanons: Hier trafen sich die Schmalspurbahn Beirut–Damaskus von 1895 und die Normalspurstrecke von Tripoli durch die Bekaa nach Aleppo, die 1906 eröffnet wurde. "
            "Die ausgedehnten Werkstätten der Bahn beschäftigten in den 1940er Jahren über 1.000 Arbeiter und produzierten sogar eigene Lokomotiven. "
            "Während des französischen Mandats (1920–1943) wurde Rayak zum wichtigen Militärflugplatz ausgebaut und beherbergt bis heute eine Basis der libanesischen Streitkräfte. "
            "Mit dem Bürgerkrieg (1975–1990) wurde der Bahnverkehr eingestellt; die historischen Werkstätten und Lokomotiven verfallen seither. "
            "Die Region ist auch Zentrum der libanesischen Weinproduktion."
        ),
        "facts": [
            "Etwa 5.000 Einwohner auf 920 Metern Höhe",
            "60 Kilometer östlich von Beirut",
            "Bahnstrecke Beirut-Damaskus seit 1895",
            "Bahnstrecke Tripoli-Aleppo seit 1906",
            "Eigenständige Lokomotivenproduktion in den 1940er Jahren",
            "Über 1.000 Bahnarbeiter in der Blütezeit",
            "Französische Militärbasis seit dem Mandat 1920 bis 1943",
            "Bahnverkehr seit dem Bürgerkrieg eingestellt",
        ],
    },
    "chtaura-cities-v2": {
        "desc": (
            "Chtaura liegt im westlichen Bekaa-Tal auf 1.000 Metern Höhe rund 45 Kilometer östlich von Beirut und zählt etwa 12.000 Einwohner. "
            "Die Stadt ist ein wichtiger Verkehrsknotenpunkt an der Hauptstraße zwischen Beirut und Damaskus, der von französischen Mandatsbehörden ab 1920 zum strategischen Posten ausgebaut wurde. "
            "Während der osmanischen Herrschaft (1516–1918) entwickelte sich Chtaura als Karawanserei-Standort. "
            "Die Stadt ist berühmt für ihre Milchprodukte: Die Marke Massabki, gegründet 1850, produziert hier weltbekannten Joghurt, Labneh, Halloumi und andere Spezialitäten. "
            "Die Mehrzahl der Reisenden zwischen Beirut und Damaskus macht in Chtauras Restaurants Pause, was die Wirtschaft stark prägt. "
            "Trotz der politischen Spannungen mit Syrien blieb der Grenzverkehr über Chtaura ein wichtiger Wirtschaftsfaktor."
        ),
        "facts": [
            "Etwa 12.000 Einwohner auf 1.000 Metern Höhe",
            "45 Kilometer östlich von Beirut",
            "Hauptstraße Beirut-Damaskus seit französischem Mandat 1920 bis 1943",
            "Karawanserei-Standort seit der osmanischen Zeit",
            "Massabki-Milchproduktmarke seit 1850",
            "Berühmt für Joghurt, Labneh und Halloumi",
            "Strategischer Verkehrsknotenpunkt zur syrischen Grenze",
            "Restaurantindustrie als Wirtschaftsmotor",
        ],
    },
    "anjar-cities-v2": {
        "desc": (
            "Anjar liegt im östlichen Bekaa-Tal auf 950 Metern Höhe nahe der syrischen Grenze und zählt rund 2.400 Einwohner, mehrheitlich Armenier, deren Vorfahren 1939 aus dem Gebiet Mussa Dagh nach Libanon flüchteten. "
            "Die Stadt ist berühmt für die einzigartigen umayyadischen Ruinen: Anjar wurde im frühen 8. Jahrhundert von Kalif Walid I. (regierte 705–715) als Sommerresidenz und Handelsstadt gegründet, in einer der wenigen Stadtanlagen der Umayyaden-Dynastie überhaupt. "
            "Die Anlage misst 370 mal 310 Meter und war von einer 7 Meter hohen Mauer mit 40 Türmen umgeben. "
            "Sie kombiniert hellenistisch-byzantinische Stadtplanung mit islamischer Architektur und beherbergt einen großen Palast, eine Moschee, Bäder und ein Tetrapylon. "
            "Die UNESCO erklärte Anjar 1984 zum Weltkulturerbe."
        ),
        "facts": [
            "Etwa 2.400 mehrheitlich armenische Einwohner",
            "Armenische Flüchtlinge aus Mussa Dagh seit 1939",
            "Umayyadische Stadt gegründet im frühen 8. Jahrhundert",
            "Erbaut unter Kalif Walid I. (705 bis 715)",
            "Stadtanlage 370 mal 310 Meter mit 40 Türmen",
            "UNESCO-Weltkulturerbe seit 1984",
            "Einzigartige umayyadische Stadtanlage Libanons",
            "Auf 950 Metern Höhe im Bekaa-Tal",
        ],
    },
    "deir-el-qamar-cities-v2": {
        "desc": (
            "Deir el Qamar (Kloster des Mondes) liegt im Chouf-Gebirge auf 800 Metern Höhe rund 40 Kilometer südöstlich von Beirut und zählt etwa 5.000 Einwohner. "
            "Die Stadt war von 1590 bis 1840 die Hauptstadt des Emirats des Libanongebirges unter den Maan- und Schihab-Dynastien, bevor Beirut diese Rolle übernahm. "
            "Emir Fakhreddine II. (1572–1635), der bedeutendste Herrscher der Maan-Dynastie und Begründer des modernen Libanon, machte den Ort zu seiner Residenz und ließ zahlreiche Paläste, Moscheen und Karawansereien errichten, die bis heute weitgehend erhalten sind. "
            "Die Fakhreddine-Moschee von 1493 ist die älteste Moschee in der Bergregion. "
            "Während des französischen Mandats (1920–1943) wurde der historische Charakter geschützt. "
            "Die Stadt ist mehrheitlich maronitisch-katholisch, mit drusischer Minderheit, und gilt als architektonisches Juwel."
        ),
        "facts": [
            "Etwa 5.000 Einwohner auf 800 Metern Höhe",
            "Hauptstadt des Emirats des Libanongebirges 1590 bis 1840",
            "Residenz Emir Fakhreddines II. (1572 bis 1635)",
            "Fakhreddine-Moschee von 1493",
            "Name bedeutet Kloster des Mondes",
            "Französisches Mandat 1920 bis 1943",
            "Maronitische Mehrheit mit drusischer Minderheit",
            "Architektonisches Juwel der osmanischen Zeit",
        ],
    },
    "broummana-cities-v2": {
        "desc": (
            "Brummana liegt im Libanongebirge auf 800 Metern Höhe rund 17 Kilometer nordöstlich von Beirut und zählt etwa 12.000 Einwohner. "
            "Die mehrheitlich griechisch-orthodoxe und maronitische Stadt war seit dem Ende des 19. Jahrhunderts eine der beliebtesten Sommerfrischen Libanons, vor allem für britische und amerikanische Missionare. "
            "Die High School von Brummana, gegründet 1873 von der Religiösen Gesellschaft der Freunde (Quäker), zählt zu den ältesten Privatschulen des Mittleren Ostens und hat zahlreiche libanesische Politiker und Künstler ausgebildet. "
            "Die mit Pinien bewaldete Umgebung und das milde Klima machten Brummana zu einem beliebten Ferienziel auch während des französischen Mandats (1920–1943). "
            "Heute beherbergt der Ort luxuriöse Hotels, Restaurants und Pubs entlang der Hauptstraße und zieht Touristen aus den Golfstaaten an."
        ),
        "facts": [
            "Etwa 12.000 Einwohner auf 800 Metern Höhe",
            "17 Kilometer nordöstlich von Beirut",
            "High School Brummana von Quäkern 1873 gegründet",
            "Eine der ältesten Privatschulen des Mittleren Ostens",
            "Sommerfrische seit dem späten 19. Jahrhundert",
            "Französisches Mandat 1920 bis 1943",
            "Pinien-Wälder umgeben den Ort",
            "Luxushotels und Pubs entlang der Hauptstraße",
        ],
    },
    "ehden-cities-v2": {
        "desc": (
            "Ehden liegt im nördlichen Libanongebirge auf 1.450 Metern Höhe rund 100 Kilometer nördlich von Beirut und zählt im Sommer rund 25.000 Bewohner, im Winter dagegen kaum 1.000, da die meisten Einwohner saisonal nach Zgharta hinabsteigen. "
            "Die maronitische Stadt zählt zu den ältesten christlichen Siedlungen Libanons mit Wurzeln im 7. Jahrhundert. "
            "Das Naturschutzgebiet Horsh Ehden, 1992 als geschütztes Reservat ausgewiesen, umfasst 1.740 Hektar mit über 1.058 Pflanzen- und Tierarten, darunter den seltenen libanesischen Wolf und uralte libanesische Zedern. "
            "Die berühmte Mar Mama Kirche aus dem 8. Jahrhundert ist eine der ältesten Kirchen Libanons. "
            "Während des französischen Mandats (1920–1943) wurde die Region wirtschaftlich gefördert. "
            "Im Bürgerkrieg (1975–1990) war Ehden Heimat der Frangieh-Familie und Schauplatz der Eden-Massaker von 1978."
        ),
        "facts": [
            "Im Sommer 25.000, im Winter unter 1.000 Einwohner",
            "Auf 1.450 Metern Höhe im Nordgebirge",
            "Saisonale Wanderbewegung mit Zgharta",
            "Christliche Siedlung seit dem 7. Jahrhundert",
            "Mar Mama Kirche aus dem 8. Jahrhundert",
            "Naturschutzgebiet Horsh Ehden seit 1992",
            "1.740 Hektar mit 1.058 Arten",
            "Eden-Massaker an der Frangieh-Familie im Jahr 1978",
        ],
    },
    "qobayat-cities-v2": {
        "desc": (
            "Kobayat (auch Qobayat) liegt im äußersten Norden Libanons auf 700 Metern Höhe in der Region Akkar nahe der syrischen Grenze und zählt rund 11.000 Einwohner. "
            "Die mehrheitlich maronitische Stadt liegt in einer der waldreichsten Regionen Libanons, umgeben von Eichen-, Pinien- und Zedernwäldern. "
            "Eine alte Seidenraupenfabrik aus dem 19. Jahrhundert beherbergt heute ein Museum, das die einst blühende Seidenproduktion dokumentiert. "
            "Während des französischen Mandats (1920–1943) wurde die Region zur wichtigen Forstwirtschaftszone. "
            "Kobayat ist Ausgangspunkt für Wanderungen auf dem Lebanon Mountain Trail, einem 470 Kilometer langen Fernwanderweg, der seit 2007 die gesamte Länge des Libanongebirges erschließt. "
            "Die Region zählt zu den ärmsten Libanons mit starker Auswanderung in die Diaspora, vor allem nach Australien."
        ),
        "facts": [
            "Etwa 11.000 Einwohner auf 700 Metern Höhe",
            "In der Region Akkar nahe der syrischen Grenze",
            "Maronitische Mehrheit",
            "Seidenraupenfabrik aus dem 19. Jahrhundert als Museum",
            "Französisches Mandat 1920 bis 1943",
            "Ausgangspunkt des Lebanon Mountain Trail seit 2007",
            "Fernwanderweg 470 Kilometer lang",
            "Starke Auswanderung nach Australien",
        ],
    },
    "bint-jbeil-cities-v2": {
        "desc": (
            "Bint Dschubail liegt im Südlibanon auf 750 Metern Höhe rund 120 Kilometer südlich von Beirut, nur wenige Kilometer von der israelischen Grenze entfernt, und zählt etwa 25.000 Einwohner. "
            "Die mehrheitlich schiitische Stadt ist Hauptort des gleichnamigen Distrikts und wird wegen ihrer Rolle als Symbol des Widerstands gegen die israelische Besetzung (1978–2000) auch als Hauptstadt des befreiten Südens bezeichnet. "
            "Während der israelisch-libanesischen Krise im Sommer 2006 war Bint Dschubail Schauplatz schwerer Kämpfe, bei denen ein Großteil der Stadt zerstört wurde. "
            "Bis zum 14. August 2006 starben hier zahlreiche Zivilisten und Kämpfer der Hisbollah. "
            "Während des französischen Mandats (1920–1943) gehörte die Region zum Großlibanon. "
            "Der wöchentliche Donnerstagsmarkt zählt zu den größten im Südlibanon."
        ),
        "facts": [
            "Etwa 25.000 Einwohner auf 750 Metern Höhe",
            "120 Kilometer südlich von Beirut",
            "Wenige Kilometer von der israelischen Grenze",
            "Schiitische Mehrheit, Hauptort des Distrikts",
            "Israelische Besetzung 1978 bis 2000",
            "Krieg im Sommer 2006 verursachte schwere Zerstörungen",
            "Donnerstagsmarkt einer der größten des Südens",
            "Französisches Mandat 1920 bis 1943",
        ],
    },
    "marjayoun-cities-v2": {
        "desc": (
            "Marjayoun (arabisch Marj Uyun, Wiese der Quellen) liegt im Südosten Libanons auf 750 Metern Höhe am Fuß des Hermon-Gebirges, mit Blick auf die obere Jordan-Ebene, und zählt etwa 7.000 Einwohner. "
            "Die mehrheitlich griechisch-orthodoxe Stadt ist Hauptort des gleichnamigen Distrikts. "
            "Die historischen Steinhäuser mit charakteristischen roten Ziegeldächern stammen aus dem 19. Jahrhundert. "
            "Während des französischen Mandats (1920–1943) wurde Marjayoun Verwaltungssitz. "
            "Während der israelischen Besetzung des Südlibanon (1978–2000) war die Stadt das Hauptquartier der von Israel unterstützten Südlibanesischen Armee unter General Antoine Lahad. "
            "Nach dem israelischen Rückzug im Jahr 2000 fielen Hunderte ehemalige SLA-Mitglieder vor Gericht. "
            "Die Region ist berühmt für die Produktion von Olivenöl und Wein."
        ),
        "facts": [
            "Etwa 7.000 Einwohner auf 750 Metern Höhe",
            "Am Fuß des Hermon-Gebirges",
            "Name bedeutet Wiese der Quellen",
            "Griechisch-orthodoxe Mehrheit",
            "Französisches Mandat 1920 bis 1943",
            "Hauptquartier der Südlibanesischen Armee 1978 bis 2000",
            "Israelischer Rückzug im Jahr 2000",
            "Berühmt für Olivenöl und Wein",
        ],
    },
    "chekka-cities-v2": {
        "desc": (
            "Chekka liegt im Norden Libanons rund 65 Kilometer nördlich von Beirut an der Mittelmeerküste und zählt etwa 12.000 Einwohner. "
            "Die mehrheitlich griechisch-orthodoxe Stadt ist seit dem frühen 20. Jahrhundert das wichtigste Zentrum der libanesischen Zementindustrie: Die Cimenterie Nationale wurde 1953 gegründet, gefolgt von Holcim Liban und Cimenterie Libanaise. "
            "Die drei großen Zementwerke produzieren jährlich über 5 Millionen Tonnen und prägen die Wirtschaft der Region maßgeblich. "
            "Auch die Papierindustrie ist hier vertreten. "
            "Während des französischen Mandats (1920–1943) wurde der industrielle Aufstieg eingeleitet. "
            "Die Strände von Chekka mit ihren markanten weißen Kalksteinklippen ziehen Touristen an, und mehrere Strandresorts haben sich entlang der Küste angesiedelt. "
            "Die Verschmutzung durch die Zementwerke ist seit Jahren ein Streitpunkt."
        ),
        "facts": [
            "Etwa 12.000 Einwohner, 65 Kilometer nördlich von Beirut",
            "Wichtigstes Zentrum der libanesischen Zementindustrie",
            "Cimenterie Nationale seit 1953",
            "Über 5 Millionen Tonnen Zementproduktion pro Jahr",
            "Drei große Zementwerke prägen die Wirtschaft",
            "Französisches Mandat 1920 bis 1943",
            "Weiße Kalksteinklippen an der Küste",
            "Griechisch-orthodoxe Mehrheit",
        ],
    },
}


def find_block_ranges(text: str) -> list[tuple[str, int, int]]:
    """Return [(poi_id, start_idx, end_idx)] for each POI block in the array."""
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')
    matches = list(poi_pattern.finditer(text))
    ranges = []
    for i, m in enumerate(matches):
        poi_id = m.group(1)
        # Block start: walk back to the opening "{"
        start = text.rfind("{", 0, m.start())
        # Block end: matching closing "}" — walk forward with depth
        depth = 0
        j = start
        while j < len(text):
            if text[j] == "{":
                depth += 1
            elif text[j] == "}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        end = j  # index of closing "}"
        ranges.append((poi_id, start, end))
    return ranges


def find_facts_close(block: str) -> int:
    """Return index (within block) of the closing '}' of `facts: { ... }`."""
    m = re.search(r'\bfacts\s*:\s*\{', block)
    if not m:
        return -1
    j = m.end()
    depth = 1
    while j < len(block) and depth > 0:
        if block[j] == "{":
            depth += 1
        elif block[j] == "}":
            depth -= 1
        j += 1
    return j  # index just AFTER the closing brace


def list_to_ts_array(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def main() -> None:
    src = FILE.read_text(encoding="utf-8")
    ranges = find_block_ranges(src)
    print(f"Found {len(ranges)} POI blocks")

    # Identify which need filling
    needs: list[str] = []
    for poi_id, s, e in ranges:
        block = src[s : e + 1]
        # Treat "missing or empty" as needing fill
        da = re.search(r'descriptionAdvanced\s*:\s*\{', block)
        if not da:
            needs.append(poi_id)
            continue
        # has block — check de
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == "{":
                depth += 1
            elif block[j] == "}":
                depth -= 1
            j += 1
        body = block[body_start : j - 1]
        de_m = re.search(r'\bde\s*:\s*"([^"]*)"', body)
        if not de_m or not de_m.group(1).strip():
            needs.append(poi_id)
    print(f"Need filling: {len(needs)}")

    # Take first 30 we have data for
    target = [pid for pid in needs if pid in DATA][:30]
    print(f"Will fill: {len(target)}")

    # Apply edits in REVERSE order to keep offsets stable
    new_src = src
    filled = 0
    for poi_id, s, e in reversed(ranges):
        if poi_id not in target:
            continue
        entry = DATA[poi_id]
        block = new_src[s : e + 1]
        fc = find_facts_close(block)
        if fc < 0:
            print(f"WARN: no facts in {poi_id}")
            continue
        # Build insert text. The closing "}" of facts is at fc-1.
        # We want to add ", descriptionAdvanced: { de: \"...\" }, factsAdvanced: { de: [...] }"
        desc_de = entry["desc"].replace("\\", "\\\\").replace('"', '\\"')
        facts_arr = list_to_ts_array(entry["facts"])
        insertion = (
            ',\n    descriptionAdvanced: {\n      de: "'
            + desc_de
            + '"\n    },\n    factsAdvanced: {\n      de: '
            + facts_arr
            + "\n    }"
        )
        new_block = block[:fc] + insertion + block[fc:]
        new_src = new_src[:s] + new_block + new_src[e + 1 :]
        filled += 1
        print(f"  + {poi_id}")

    FILE.write_text(new_src, encoding="utf-8")
    print(f"\nFilled {filled}/{len(target)} POIs in {FILE.name}")


if __name__ == "__main__":
    main()
