"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraMyanmarCitiesV2.ts

The file currently has no descriptionAdvanced/factsAdvanced fields. This script
inserts them after the existing `facts: { ... }` block for each targeted POI.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraMyanmarCitiesV2.ts")

DATA: dict[str, dict] = {
    "yangon-cities-v2": {
        "desc": (
            "Yangon (Rangun) ist mit über 5,2 Millionen Einwohnern die größte Stadt Myanmars und "
            "war von 1885 bis 2005 Hauptstadt des Landes. Die Stadt am Yangon-Fluss wurde 1755 von "
            "König Alaungpaya gegründet und hieß ursprünglich Dagon. Während der britischen "
            "Kolonialzeit (Britisch-Birma 1886-1948) wurde Rangun zum wichtigsten Hafen "
            "Südostasiens und Verwaltungszentrum. Das berühmteste Wahrzeichen ist die 99 Meter hohe, "
            "vergoldete Shwedagon-Pagode, deren Ursprünge bis ins 6. Jahrhundert zurückreichen. Die "
            "Innenstadt zeigt eines der größten Ensembles viktorianischer Kolonialarchitektur in Asien. "
            "Im Mai 2008 traf der Zyklon Nargis die Stadt schwer."
        ),
        "facts": [
            "Größte Stadt Myanmars, ca. 5,2 Mio. Einwohner",
            "Hauptstadt 1885-2005",
            "Gegründet 1755 von König Alaungpaya als Dagon",
            "Britisch-Birma 1886-1948",
            "Shwedagon-Pagode 99 m hoch, Ursprung 6. Jh.",
            "Größtes Kolonialarchitektur-Ensemble Asiens",
            "Schwer getroffen vom Zyklon Nargis Mai 2008",
            "Liegt am Yangon-Fluss im Irrawaddy-Delta",
        ],
    },
    "mandalay-cities-v2": {
        "desc": (
            "Mandalay ist mit rund 1,2 Millionen Einwohnern die zweitgrößte Stadt Myanmars und das "
            "kulturelle und religiöse Zentrum des Landes. Sie wurde 1857 von König Mindon am Fuße "
            "des Mandalay-Hügels gegründet und war von 1859 bis 1885 letzte Hauptstadt des "
            "unabhängigen birmanischen Königreichs Konbaung. 1885 eroberten die Briten die Stadt im "
            "Dritten Anglo-Birmanischen Krieg, was das Ende der Monarchie bedeutete und zur "
            "Eingliederung in Britisch-Birma (1886-1948) führte. Der königliche Palast wurde im "
            "Zweiten Weltkrieg 1945 weitgehend zerstört und in den 1990er Jahren rekonstruiert. "
            "Mandalay liegt am Irrawaddy-Fluss und gilt als Hochburg der birmanischen Kultur, Sprache "
            "und des Theravada-Buddhismus."
        ),
        "facts": [
            "Zweitgrößte Stadt, ca. 1,2 Mio. Einwohner",
            "Gegründet 1857 von König Mindon",
            "Letzte Hauptstadt des Konbaung-Reiches 1859-1885",
            "Britische Eroberung 1885 (3. Anglo-Birmanischer Krieg)",
            "Britisch-Birma 1886-1948",
            "Königspalast zerstört 1945, rekonstruiert 1990er",
            "Liegt am Irrawaddy-Fluss",
            "Kuthodaw-Pagode mit 'größtem Buch der Welt' (729 Steintafeln)",
        ],
    },
    "naypyidaw-cities-v2": {
        "desc": (
            "Naypyidaw ('Sitz der Könige') ist seit dem 6. November 2005 die offizielle Hauptstadt "
            "Myanmars und löste damit Yangon ab. Die Stadt wurde im Geheimen ab 2002 auf der grünen "
            "Wiese rund 320 Kilometer nördlich von Yangon im Verwaltungsgebiet Mandalay errichtet "
            "und am 27. März 2006 (Tag der Streitkräfte) offiziell eingeweiht. Mit etwa 925.000 "
            "Einwohnern auf 7.054 km² Fläche ist Naypyidaw eine der flächengrößten und am dünnsten "
            "besiedelten Hauptstädte der Welt. Berühmt sind die zwanzigspurigen, fast leeren "
            "Boulevards. Die Uppatasanti-Pagode, eine fast exakte Kopie der Shwedagon, ist das "
            "religiöse Wahrzeichen. Die Verlegung erfolgte ohne öffentliche Ankündigung."
        ),
        "facts": [
            "Hauptstadt seit 6. November 2005",
            "Bevölkerung ca. 925.000",
            "Fläche 7.054 km² (eine der größten Hauptstädte)",
            "Bau ab 2002, Einweihung 27. März 2006",
            "320 km nördlich von Yangon",
            "Uppatasanti-Pagode (Kopie der Shwedagon)",
            "20-spurige Boulevards weitgehend leer",
            "Verlegung ohne Vorankündigung",
        ],
    },
    "mawlamyine-cities-v2": {
        "desc": (
            "Mawlamyine (früher Moulmein) liegt am Thanlwin-Fluss nahe dessen Mündung in den Golf "
            "von Martaban und ist mit rund 290.000 Einwohnern die viertgrößte Stadt Myanmars sowie "
            "Hauptstadt des Mon-Staates. Von 1827 bis 1852 war sie die erste Hauptstadt von "
            "Britisch-Birma, nachdem die Briten im Ersten Anglo-Birmanischen Krieg (1824-1826) das "
            "Tenasserim-Gebiet erobert hatten. Während der gesamten Kolonialzeit (Britisch-Birma "
            "1886-1948) blieb Mawlamyine ein wichtiger Tikholz- und Reisexporthafen. Rudyard Kipling "
            "verewigte die Stadt 1890 in seinem Gedicht 'Mandalay'. George Orwell diente hier in den "
            "1920er Jahren als Polizeibeamter. Die Hügelkette mit der Kyaikthanlan-Pagode bietet "
            "spektakuläre Sonnenuntergänge."
        ),
        "facts": [
            "Viertgrößte Stadt Myanmars, ca. 290.000 Einwohner",
            "Hauptstadt des Mon-Staates",
            "Erste Hauptstadt Britisch-Birmas 1827-1852",
            "Britisch-Birma 1886-1948",
            "Erster Anglo-Birmanischer Krieg 1824-1826",
            "Rudyard Kiplings 'Mandalay' (1890)",
            "George Orwell als Polizist in den 1920er Jahren",
            "Kyaikthanlan-Pagode auf dem Hügel",
        ],
    },
    "bago-cities-v2": {
        "desc": (
            "Bago (früher Pegu) liegt 91 Kilometer nordöstlich von Yangon und hat rund 254.000 "
            "Einwohner. Die Stadt wurde laut Überlieferung 573 von Mon-Königen gegründet und war "
            "vom 14. bis 16. Jahrhundert Hauptstadt des mächtigen Mon-Königreichs Hanthawaddy. Unter "
            "König Bayinnaung (1551-1581) wurde Bago zur Hauptstadt des Toungoo-Reiches und eines "
            "der größten Reiche Südostasiens. 1599 wurde die Stadt von Arakan und Toungoo zerstört. "
            "Während Britisch-Birma (1886-1948) wurde sie wiederbelebt. Wahrzeichen ist die 114 "
            "Meter hohe Shwemawdaw-Pagode, höher als die Shwedagon, sowie der 55 Meter lange Liegende "
            "Buddha Shwethalyaung aus dem Jahr 994. Die Stadt ist das spirituelle Zentrum der "
            "Mon-Kultur."
        ),
        "facts": [
            "Bevölkerung ca. 254.000",
            "91 km nordöstlich von Yangon",
            "Gegründet 573 von Mon-Königen",
            "Hauptstadt Hanthawaddy 14.-16. Jahrhundert",
            "Toungoo-Reich unter Bayinnaung 1551-1581",
            "Britisch-Birma 1886-1948",
            "Shwemawdaw-Pagode 114 m (höher als Shwedagon)",
            "Liegender Buddha Shwethalyaung (55 m, ab 994)",
        ],
    },
    "pathein-cities-v2": {
        "desc": (
            "Pathein (früher Bassein) ist mit rund 287.000 Einwohnern die viertgrößte Stadt Myanmars "
            "und Hauptstadt der Ayeyarwady-Region im Irrawaddy-Delta, 190 Kilometer westlich von "
            "Yangon. Die Stadt war im 13. Jahrhundert Teil des Mon-Königreichs und wurde von König "
            "Alaungpaya 1755 erobert. Während Britisch-Birma (1886-1948) entwickelte sich Pathein "
            "zum drittwichtigsten Reisexporthafen des Empire nach Yangon und Mawlamyine. "
            "Weltberühmt ist die Stadt für ihre handgefertigten Pathein-Sonnenschirme (Htee), die "
            "seit dem 19. Jahrhundert aus Bambus, Baumwollstoff und natürlichen Farben hergestellt "
            "werden. Im Mai 2008 verwüstete der Zyklon Nargis das umliegende Delta und tötete über "
            "138.000 Menschen in der Region."
        ),
        "facts": [
            "Bevölkerung ca. 287.000",
            "Hauptstadt der Ayeyarwady-Region",
            "190 km westlich von Yangon",
            "Britisch-Birma 1886-1948",
            "Drittwichtigster Reishafen unter den Briten",
            "Berühmt für Pathein-Htee-Sonnenschirme",
            "Erobert von Alaungpaya 1755",
            "Zyklon Nargis Mai 2008 (138.000 Tote in der Region)",
        ],
    },
    "monywa-cities-v2": {
        "desc": (
            "Monywa liegt am östlichen Ufer des Chindwin-Flusses in der Sagaing-Region, 136 "
            "Kilometer westlich von Mandalay, und hat rund 380.000 Einwohner. Die Stadt war "
            "während Britisch-Birma (1886-1948) wichtiges Handelszentrum und Knotenpunkt zwischen "
            "Indien und Zentralmyanmar. Berühmt ist Monywa für die Bodhi-Tataung-Anlage 20 "
            "Kilometer östlich, wo seit 2008 die 116 Meter hohe stehende Buddha-Statue Laykyun "
            "Setkyar steht - die zweithöchste Buddha-Statue der Welt - sowie ein 95 Meter langer "
            "Liegender Buddha. Die Thanboddhay-Pagode aus dem 14. Jahrhundert beherbergt über "
            "580.000 Buddha-Bilder. In der Region befinden sich die Letpadaung- und Sabe-Tegyin-"
            "Kupferminen, die größten Myanmars und Schauplatz heftiger Proteste seit 2012."
        ),
        "facts": [
            "Bevölkerung ca. 380.000",
            "136 km westlich von Mandalay",
            "Liegt am Chindwin-Fluss",
            "Britisch-Birma 1886-1948",
            "Laykyun Setkyar (116 m), zweithöchster Buddha der Welt",
            "Liegender Buddha 95 m lang",
            "Thanboddhay-Pagode mit 580.000 Buddha-Bildern",
            "Letpadaung-Kupfermine (größte des Landes)",
        ],
    },
    "sittwe-cities-v2": {
        "desc": (
            "Sittwe (früher Akyab) ist die Hauptstadt des Rakhine-Staates und liegt an der Mündung "
            "des Kaladan-Flusses in den Golf von Bengalen. Die Stadt mit rund 181.000 Einwohnern "
            "wurde 1826 von den Briten als 'Akyab' gegründet, nachdem das Königreich Arakan im "
            "Ersten Anglo-Birmanischen Krieg (1824-1826) annektiert worden war. In den 1930er "
            "Jahren war Akyab kurzzeitig der drittgrößte Reisexporthafen der Welt. Während des "
            "Zweiten Weltkriegs (1942-1945) wurde die Stadt von japanischen Truppen besetzt und "
            "schwer zerstört. Britisch-Birma endete 1948. Seit 2012 ist Sittwe Schauplatz "
            "ethnischer Konflikte zwischen buddhistischen Rakhine und muslimischen Rohingya, was "
            "2017 zur Vertreibung von über 700.000 Rohingya nach Bangladesch führte. Der "
            "Tiefseehafen wird mit indischer Hilfe ausgebaut."
        ),
        "facts": [
            "Hauptstadt des Rakhine-Staates",
            "Bevölkerung ca. 181.000",
            "Gegründet 1826 von den Briten als Akyab",
            "Annektion Arakan 1824-1826",
            "1930er: drittgrößter Reishafen weltweit",
            "Britisch-Birma 1886-1948",
            "Japanische Besetzung 1942-1945",
            "Rohingya-Krise seit 2012/2017",
        ],
    },
    "meiktila-cities-v2": {
        "desc": (
            "Meiktila liegt am gleichnamigen See in der Mandalay-Region, 152 Kilometer südlich von "
            "Mandalay, und hat rund 177.000 Einwohner. Der künstliche Meiktila-See wurde laut "
            "Überlieferung im 9. Jahrhundert vom Pyu-König Sihathu angelegt und erstreckt sich "
            "über 14 Quadratkilometer. Während Britisch-Birma (1886-1948) entwickelte sich die "
            "Stadt zum wichtigen Verkehrsknotenpunkt im trockenen Zentralbecken. Im Februar/März "
            "1945 fand hier die entscheidende Schlacht von Meiktila zwischen britischen Truppen "
            "unter General William Slim und japanischen Streitkräften statt - der Sieg ebnete den "
            "Weg zur Rückeroberung Birmas. Heute beherbergt Meiktila die wichtigste "
            "Luftwaffenakademie Myanmars. Im März 2013 erschütterten anti-muslimische Unruhen die "
            "Stadt, die mindestens 43 Tote forderten."
        ),
        "facts": [
            "Bevölkerung ca. 177.000",
            "152 km südlich von Mandalay",
            "Künstlicher See aus dem 9. Jh. (Pyu-König Sihathu)",
            "See 14 km² Fläche",
            "Britisch-Birma 1886-1948",
            "Schlacht von Meiktila Feb/Mär 1945",
            "Wichtige Luftwaffenakademie",
            "Anti-muslimische Unruhen März 2013 (43 Tote)",
        ],
    },
    "taunggyi-cities-v2": {
        "desc": (
            "Taunggyi ('Großer Berg') ist die Hauptstadt des Shan-Staates und liegt auf 1.436 "
            "Metern Höhe auf dem Shan-Hochplateau, 152 Kilometer östlich von Mandalay. Die Stadt "
            "mit rund 381.000 Einwohnern wurde 1894 von den Briten als Verwaltungszentrum für die "
            "Shan-Föderation gegründet, ein Jahrzehnt nach der Annexion Oberbirmas (Britisch-Birma "
            "1886-1948). Das kühle Klima machte Taunggyi zur beliebten Hill Station der "
            "Kolonialbeamten. Die Stadt ist multiethnisch geprägt mit Shan, Pa-O, Intha, Danu und "
            "indischen sowie chinesischen Gemeinschaften. Weltberühmt ist das Tazaungdaing-"
            "Heißluftballonfestival jeden November, bei dem riesige selbstgebaute Ballons mit "
            "Feuerwerk gestartet werden. Der Inle-See liegt 35 Kilometer westlich."
        ),
        "facts": [
            "Hauptstadt des Shan-Staates",
            "Bevölkerung ca. 381.000",
            "Auf 1.436 m Höhe",
            "Gegründet 1894 von den Briten",
            "Britisch-Birma 1886-1948",
            "Tazaungdaing-Heißluftballonfestival im November",
            "152 km östlich von Mandalay",
            "Inle-See 35 km westlich",
        ],
    },
    "myingyan-cities-v2": {
        "desc": (
            "Myingyan liegt am Irrawaddy-Fluss in der Mandalay-Region, 110 Kilometer südwestlich "
            "von Mandalay, und hat rund 124.000 Einwohner. Die Stadt im trockenen Zentralbecken "
            "Myanmars hat ein extremes Trockenklima mit weniger als 700 mm Jahresniederschlag und "
            "ist seit Jahrhunderten Zentrum des Baumwoll- und Sesamanbaus. Während Britisch-Birma "
            "(1886-1948) wurde Myingyan zum wichtigen Eisenbahnknotenpunkt und Baumwollverarbeiter "
            "ausgebaut; die Briten errichteten hier 1903 eine der ersten mechanischen "
            "Baumwollentkörnungsanlagen Birmas. Die Stadt liegt strategisch zwischen Bagan (95 km "
            "westlich) und Mandalay und war im Zweiten Weltkrieg Schauplatz schwerer Kämpfe 1945. "
            "Heute prägen Textilfabriken und der Reishandel die Wirtschaft."
        ),
        "facts": [
            "Bevölkerung ca. 124.000",
            "110 km südwestlich von Mandalay",
            "Liegt am Irrawaddy-Fluss",
            "Trockenklima, unter 700 mm Niederschlag",
            "Britisch-Birma 1886-1948",
            "Baumwollentkörnungsanlage 1903",
            "95 km östlich von Bagan",
            "Schauplatz schwerer Kämpfe 1945",
        ],
    },
    "dawei-cities-v2": {
        "desc": (
            "Dawei (früher Tavoy) ist die Hauptstadt der Tanintharyi-Region im südlichen "
            "Myanmar und liegt am Dawei-Fluss nahe dessen Mündung in die Andamanensee. Die Stadt "
            "mit rund 140.000 Einwohnern wurde im 13. Jahrhundert vom Mon-Königreich gegründet "
            "und stand ab 1287 unter siamesischer und birmanischer Wechselherrschaft. Mit dem "
            "Ersten Anglo-Birmanischen Krieg (1824-1826) und dem Vertrag von Yandabo fiel die "
            "Tenasserim-Provinz an Großbritannien (Britisch-Birma 1886-1948). Während der "
            "Kolonialzeit war Dawei wichtigster Zinn- und Wolframproduzent des Empire. Seit 2008 "
            "wird mit thailändischer Hilfe der Tiefseehafen Dawei und eine Sonderwirtschaftszone "
            "gebaut, die als wichtigster Wirtschaftskorridor Südostasiens gilt. Die Maungmagan-"
            "Strände gehören zu den schönsten Myanmars."
        ),
        "facts": [
            "Hauptstadt der Tanintharyi-Region",
            "Bevölkerung ca. 140.000",
            "Mon-Gründung 13. Jh.",
            "Britisch durch Vertrag von Yandabo 1826",
            "Britisch-Birma 1886-1948",
            "Wichtigster Zinn-/Wolframproduzent der Kolonie",
            "Tiefseehafen-Großprojekt seit 2008",
            "Maungmagan-Strände an der Andamanensee",
        ],
    },
    "pyay-cities-v2": {
        "desc": (
            "Pyay (früher Prome) liegt am Irrawaddy-Fluss, 286 Kilometer nordwestlich von Yangon, "
            "und hat rund 135.000 Einwohner. Die Stadt ist berühmt für die nahegelegenen Ruinen "
            "von Sri Ksetra, der Hauptstadt der Pyu-Stadtstaaten vom 5. bis 9. Jahrhundert und "
            "seit 2014 UNESCO-Weltkulturerbe. Die Pyu gelten als früheste buddhistische Kultur "
            "Myanmars; ihre 13 Kilometer lange Stadtmauer ist eine der größten erhaltenen "
            "vormodernen Stadtanlagen Südostasiens. Während Britisch-Birma (1886-1948) wurde Pyay "
            "zum wichtigen Flusshandels-Knotenpunkt zwischen Niederbirma und Oberbirma ausgebaut. "
            "Die Shwesandaw-Pagode (46 m) gilt als eine der heiligsten Pagoden Myanmars. Im "
            "Zweiten Weltkrieg wurde die Stadt 1942 schwer beschädigt."
        ),
        "facts": [
            "Bevölkerung ca. 135.000",
            "286 km nordwestlich von Yangon",
            "Sri Ksetra UNESCO seit 2014",
            "Pyu-Hauptstadt 5.-9. Jh.",
            "13 km lange Pyu-Stadtmauer erhalten",
            "Britisch-Birma 1886-1948",
            "Shwesandaw-Pagode (46 m)",
            "Schwer beschädigt 1942",
        ],
    },
    "hinthada-cities-v2": {
        "desc": (
            "Hinthada (früher Henzada) liegt am westlichen Ufer des Irrawaddy in der Ayeyarwady-"
            "Region, 158 Kilometer nordwestlich von Yangon, und hat rund 153.000 Einwohner. Die "
            "Stadt ist Zentrum des Reisanbaus im südlichen Irrawaddy-Delta und gilt als einer der "
            "wichtigsten Reishandelsmärkte des Landes. Während Britisch-Birma (1886-1948) wurde "
            "Hinthada Hauptstadt des gleichnamigen Distrikts und durch eine Eisenbahnlinie an "
            "Yangon angeschlossen. Die Region ist häufig von Überschwemmungen während der "
            "Monsunzeit (Mai-Oktober) betroffen, da der Irrawaddy hier mehrere Meter über sein "
            "Trockenzeit-Niveau steigen kann. Im Mai 2008 traf der Zyklon Nargis die Stadt nicht "
            "direkt, aber die nachfolgenden Überschwemmungen verwüsteten weite Teile des Distrikts. "
            "Hinthada ist Geburtsort mehrerer prominenter birmanischer Politiker."
        ),
        "facts": [
            "Bevölkerung ca. 153.000",
            "158 km nordwestlich von Yangon",
            "Liegt am westlichen Irrawaddy-Ufer",
            "Britisch-Birma 1886-1948",
            "Distrikthauptstadt unter den Briten",
            "Eisenbahnverbindung nach Yangon",
            "Monsunzeit Mai-Oktober mit Hochwasser",
            "Zyklon Nargis 2008 (Folgeüberschwemmungen)",
        ],
    },
    "sagaing-cities-v2": {
        "desc": (
            "Sagaing liegt am westlichen Irrawaddy-Ufer gegenüber von Mandalay und ist die "
            "Hauptstadt der gleichnamigen Region. Die Stadt mit rund 78.000 Einwohnern war von "
            "1315 bis 1364 Hauptstadt des Sagaing-Königreichs nach dem Zerfall des Bagan-Reiches. "
            "Sie ist eines der bedeutendsten religiösen Zentren des Theravada-Buddhismus in "
            "Myanmar - allein auf den Sagaing-Hügeln stehen über 600 buddhistische Klöster und "
            "Pagoden, in denen rund 6.000 Nonnen und Mönche meditieren. Die Soon-U-Ponya-Shin-"
            "Pagode bietet einen Panoramablick über den Irrawaddy und Mandalay. Während Britisch-"
            "Birma (1886-1948) wurde Sagaing über die 1934 eröffnete Ava-Brücke (1.620 m) mit "
            "Mandalay verbunden - bis 2008 die einzige Brücke über den Irrawaddy. Im März 2025 "
            "war Sagaing Epizentrum eines verheerenden Erdbebens (M7,7)."
        ),
        "facts": [
            "Hauptstadt der Sagaing-Region",
            "Bevölkerung ca. 78.000",
            "Hauptstadt Sagaing-Reich 1315-1364",
            "Über 600 Klöster und Pagoden",
            "Ca. 6.000 Mönche und Nonnen",
            "Britisch-Birma 1886-1948",
            "Ava-Brücke (1.620 m) seit 1934",
            "Erdbeben-Epizentrum März 2025 (M7,7)",
        ],
    },
    "magway-cities-v2": {
        "desc": (
            "Magway (Magwe) ist die Hauptstadt der gleichnamigen Region und liegt am östlichen "
            "Ufer des Irrawaddy in der zentralen Trockenzone Myanmars, 575 Kilometer nördlich von "
            "Yangon. Die Stadt mit rund 290.000 Einwohnern ist das Zentrum der birmanischen "
            "Erdölindustrie - in den nahen Yenangyaung-Feldern wird seit dem 13. Jahrhundert "
            "Erdöl gewonnen, was sie zu einem der ältesten kommerziellen Ölfelder der Welt macht. "
            "Während Britisch-Birma (1886-1948) bauten die Burmah Oil Company ab 1886 die "
            "industrielle Förderung auf, die bis zum Zweiten Weltkrieg ein Drittel des "
            "Empire-Ölbedarfs deckte. Im April 1942 wurden die Anlagen durch britische Truppen "
            "vor dem japanischen Vormarsch zerstört. Magway ist auch berühmt für Sesamöl - die "
            "Region produziert über 80% des nationalen Sesams. Die Mya-Tha-Lun-Pagode am "
            "Flussufer ist Wahrzeichen."
        ),
        "facts": [
            "Hauptstadt der Magway-Region",
            "Bevölkerung ca. 290.000",
            "575 km nördlich von Yangon",
            "Yenangyaung-Erdölfelder seit 13. Jh.",
            "Britisch-Birma 1886-1948",
            "Burmah Oil Company ab 1886",
            "Anlagen zerstört April 1942",
            "Über 80% nationale Sesamproduktion",
        ],
    },
    "nyaung-u-cities-v2": {
        "desc": (
            "Nyaung U liegt am östlichen Irrawaddy-Ufer in der Mandalay-Region und ist mit rund "
            "48.000 Einwohnern die Eingangsstadt zum Tempelfeld von Bagan. Bagan war von 1044 "
            "bis 1297 Hauptstadt des ersten birmanischen Großreiches unter König Anawrahta und "
            "seinen Nachfolgern. In dieser Blütezeit (9.-13. Jahrhundert) entstanden auf 104 km² "
            "über 10.000 buddhistische Tempel, Pagoden und Klöster, von denen heute noch rund "
            "3.822 erhalten sind - die größte Konzentration buddhistischer Bauwerke der Welt. "
            "Bagan wurde 2019 UNESCO-Weltkulturerbe. Die Mongolen unter Kublai Khan zerstörten "
            "1287 die Hauptstadt. Während Britisch-Birma (1886-1948) wurde Nyaung U zum "
            "Eisenbahnknotenpunkt. Im August 2016 beschädigte ein Erdbeben (M6,8) zahlreiche "
            "Tempel; im März 2025 erschütterte ein weiteres schweres Beben die Region."
        ),
        "facts": [
            "Bevölkerung ca. 48.000",
            "Tor zum Tempelfeld Bagan",
            "Bagan-Reich 1044-1297",
            "9.-13. Jh.: 10.000+ Tempel erbaut",
            "Heute 3.822 Tempel erhalten",
            "Bagan UNESCO seit 2019",
            "Mongoleneroberung 1287 (Kublai Khan)",
            "Erdbeben August 2016 (M6,8) und März 2025",
        ],
    },
    "pyin-oo-lwin-cities-v2": {
        "desc": (
            "Pyin Oo Lwin (früher Maymyo) liegt auf 1.070 Metern Höhe im Shan-Hochland, 67 "
            "Kilometer östlich von Mandalay, und hat rund 153.000 Einwohner. Die Stadt wurde "
            "1896 von den Briten unter Colonel May als Hill Station gegründet und nach ihm Maymyo "
            "('May's Stadt') genannt. Während Britisch-Birma (1886-1948) diente sie als "
            "Sommerhauptstadt der Kolonialregierung, wenn die Beamten der Hitze in Yangon "
            "entkamen. Das kühle Klima ermöglichte den Anbau von Erdbeeren, Kaffee und "
            "Schnittblumen, die bis heute die Stadt prägen. Die viktorianischen Backsteinhäuser "
            "und Tudor-Stil-Villen sind weitgehend erhalten. Der 1915 angelegte Kandawgyi National "
            "Botanical Garden umfasst 437 Hektar mit über 480 Baumarten. Heute beherbergt "
            "Pyin Oo Lwin die wichtigste Militärakademie Myanmars (Defence Services Academy)."
        ),
        "facts": [
            "Bevölkerung ca. 153.000",
            "Auf 1.070 m Höhe",
            "67 km östlich von Mandalay",
            "Gegründet 1896 von den Briten als Maymyo",
            "Britisch-Birma 1886-1948",
            "Sommerhauptstadt der Kolonialregierung",
            "Kandawgyi-Botanischer-Garten (437 ha) seit 1915",
            "Defence Services Academy",
        ],
    },
    "lashio-cities-v2": {
        "desc": (
            "Lashio liegt im nördlichen Shan-Staat auf 855 Metern Höhe, 320 Kilometer nordöstlich "
            "von Mandalay nahe der chinesischen Grenze, und hat rund 132.000 Einwohner. Die Stadt "
            "ist Endpunkt der berühmten Burma Road, die 1937-1938 von 200.000 chinesischen "
            "Arbeitern gebaut wurde und 1.154 Kilometer nach Kunming führt. Während des Zweiten "
            "Weltkriegs war diese Straße die einzige Versorgungslinie der chinesischen Truppen "
            "Tschiang Kai-scheks im Krieg gegen Japan. Im April 1942 eroberten die Japaner Lashio "
            "und schnitten die Lebensader ab. Während Britisch-Birma (1886-1948) war die Stadt "
            "Verwaltungssitz des Nordshan-Staates. Die Bevölkerung ist multiethnisch - Shan, "
            "Bamar, Chinesen, Inder und Kachin leben hier. Im August 2024 wurde Lashio von der "
            "MNDAA-Allianz im Bürgerkrieg erobert."
        ),
        "facts": [
            "Bevölkerung ca. 132.000",
            "Auf 855 m Höhe",
            "320 km nordöstlich von Mandalay",
            "Endpunkt der Burma Road (1.154 km, 1937-1938)",
            "Britisch-Birma 1886-1948",
            "Japanische Eroberung April 1942",
            "Multiethnisch: Shan, Bamar, Chinesen",
            "MNDAA-Eroberung August 2024",
        ],
    },
    "myeik-cities-v2": {
        "desc": (
            "Myeik (früher Mergui) ist eine Hafenstadt im südlichen Tanintharyi an der "
            "Andamanensee und hat rund 285.000 Einwohner. Vom 16. bis 18. Jahrhundert war Mergui "
            "einer der wichtigsten Häfen Südostasiens und Tor zum siamesischen Königreich Ayutthaya "
            "- portugiesische, niederländische, französische und englische Händler unterhielten "
            "hier Faktoreien. 1687 kam es zum 'Mergui-Massaker', bei dem siamesische Truppen über "
            "60 Engländer der Englischen Ostindien-Kompanie töteten. Mit dem Ersten Anglo-"
            "Birmanischen Krieg (1824-1826) fiel Mergui an Großbritannien (Britisch-Birma "
            "1886-1948). Vor der Stadt liegt das Mergui-Archipel mit über 800 weitgehend "
            "unbewohnten tropischen Inseln, Heimat der Moken-Seenomaden. Myeik ist heute Zentrum "
            "der Perlenzucht und essbaren Vogelnester (für die chinesische Küche) Myanmars."
        ),
        "facts": [
            "Bevölkerung ca. 285.000",
            "Tor zum Mergui-Archipel (800+ Inseln)",
            "16.-18. Jh.: wichtiger Ayutthaya-Hafen",
            "Mergui-Massaker 1687 (60+ Engländer getötet)",
            "Britisch durch Vertrag von Yandabo 1826",
            "Britisch-Birma 1886-1948",
            "Heimat der Moken-Seenomaden",
            "Zentrum der Perlenzucht",
        ],
    },
    "pakokku-cities-v2": {
        "desc": (
            "Pakokku liegt am westlichen Irrawaddy-Ufer in der Magway-Region, 30 Kilometer "
            "nördlich von Bagan, und hat rund 130.000 Einwohner. Die Stadt ist seit Jahrhunderten "
            "Zentrum des Tabak- und Baumwollanbaus in der zentralen Trockenzone und galt während "
            "Britisch-Birma (1886-1948) als wichtigster Tabakmarkt Birmas. Pakokku war historisch "
            "ein bedeutendes buddhistisches Lernzentrum mit mehreren großen Klosterschulen. Im "
            "September 2007 nahm die Stadt eine Schlüsselrolle in der 'Safran-Revolution' ein - "
            "nachdem Soldaten dort Mönche misshandelt hatten, weiteten sich die Proteste auf das "
            "ganze Land aus. Die Pakokku-Brücke (auch Irrawaddy-Brücke) verbindet die Stadt seit "
            "2011 mit Nyaung U und ist mit 3.413 Metern eine der längsten Brücken Myanmars. Die "
            "Stadt liegt strategisch an der historischen Route Bagan-Mandalay."
        ),
        "facts": [
            "Bevölkerung ca. 130.000",
            "30 km nördlich von Bagan",
            "Liegt am westlichen Irrawaddy-Ufer",
            "Wichtigster Tabakmarkt unter den Briten",
            "Britisch-Birma 1886-1948",
            "Auslöser der Safran-Revolution September 2007",
            "Pakokku-Brücke (3.413 m) seit 2011",
            "Bedeutende buddhistische Klosterschulen",
        ],
    },
    "hpa-an-cities-v2": {
        "desc": (
            "Hpa-an ist die Hauptstadt des Kayin-Staates (Karen-Staat) und liegt am östlichen "
            "Ufer des Thanlwin-Flusses, 282 Kilometer südöstlich von Yangon. Die Stadt mit rund "
            "421.000 Einwohnern wird von dramatischen Karstbergen umgeben, darunter der heilige "
            "Mount Zwegabin (722 m). Während Britisch-Birma (1886-1948) war Hpa-an unbedeutender "
            "Marktort; erst 1954 wurde sie Hauptstadt des Kayin-Staates. Die Region ist Heimat "
            "des Karen-Volkes, das seit der Unabhängigkeit 1948 in einem der längsten Bürgerkriege "
            "der Welt um Autonomie kämpft - die KNU (Karen National Union) wurde 1947 gegründet. "
            "Berühmt sind die nahegelegenen Höhlentempel: die Saddan-Höhle mit 800 Meter langem "
            "Durchgang und der Kawgun-Höhle mit über 5.000 Buddha-Reliefs aus dem 7. Jahrhundert. "
            "Die Region ist das spirituelle Zentrum des birmanisch-buddhistischen Karen."
        ),
        "facts": [
            "Hauptstadt des Kayin-Staates",
            "Bevölkerung ca. 421.000",
            "282 km südöstlich von Yangon",
            "Mount Zwegabin (722 m)",
            "Britisch-Birma 1886-1948",
            "Hauptstadt seit 1954",
            "KNU-Karen-Konflikt seit 1947",
            "Kawgun-Höhle mit Reliefs aus dem 7. Jh.",
        ],
    },
    "myitkyina-cities-v2": {
        "desc": (
            "Myitkyina ('nahe dem großen Fluss') ist die Hauptstadt des Kachin-Staates und liegt "
            "am Oberlauf des Irrawaddy, 1.480 Kilometer nördlich von Yangon. Mit rund 306.000 "
            "Einwohnern ist sie die nördlichste Großstadt Myanmars. 42 Kilometer nördlich liegt "
            "Myitsone, der Zusammenfluss von Mali Hka und N'Mai Hka, der den Irrawaddy bildet. "
            "Während Britisch-Birma (1886-1948) wurde Myitkyina 1898 durch eine Eisenbahn an "
            "Mandalay angeschlossen (1.139 km). Im Zweiten Weltkrieg fand hier 1944 die Schlacht "
            "von Myitkyina (Mai-August) statt - amerikanische und chinesische Truppen unter "
            "General Joseph Stilwell eroberten die Stadt nach 78 Tagen Belagerung. Seit 1961 "
            "kämpft die KIA (Kachin Independence Army) für die Unabhängigkeit. Die Region ist "
            "Zentrum des Jadehandels - die nahen Hpakant-Minen liefern 70% der weltweiten "
            "Jadeitproduktion."
        ),
        "facts": [
            "Hauptstadt des Kachin-Staates",
            "Bevölkerung ca. 306.000",
            "1.480 km nördlich von Yangon",
            "Liegt am oberen Irrawaddy",
            "Britisch-Birma 1886-1948",
            "Eisenbahn nach Mandalay seit 1898",
            "Schlacht von Myitkyina Mai-August 1944",
            "70% der weltweiten Jadeit-Produktion (Hpakant)",
        ],
    },
    "taungoo-cities-v2": {
        "desc": (
            "Taungoo (Toungoo) liegt am Sittaung-Fluss in der Bago-Region, 220 Kilometer "
            "nördlich von Yangon, und hat rund 107.000 Einwohner. Die Stadt war Zentrum der "
            "mächtigen Toungoo-Dynastie, die von 1510 bis 1752 herrschte und unter König "
            "Bayinnaung (1551-1581) das größte Reich der südostasiatischen Geschichte aufbaute - "
            "es umfasste das heutige Myanmar, Thailand, Laos und Teile Indiens und Chinas. Die "
            "Hauptstadt wurde 1539 nach Bago verlegt. Während Britisch-Birma (1886-1948) wurde "
            "Taungoo zum Knotenpunkt der Eisenbahnstrecke Yangon-Mandalay (1885 fertiggestellt) "
            "und Verwaltungszentrum des Bezirks. Das Umland ist Zentrum der birmanischen "
            "Teakholzwirtschaft und der Betelnussproduktion. Im Mai 1942 wurde die Stadt von "
            "japanischen Truppen erobert; in der Schlacht von Toungoo kämpften chinesische "
            "Expeditionstruppen unter Sun Li-jen verzweifelt gegen die Invasion."
        ),
        "facts": [
            "Bevölkerung ca. 107.000",
            "220 km nördlich von Yangon",
            "Liegt am Sittaung-Fluss",
            "Toungoo-Dynastie 1510-1752",
            "Bayinnaung-Großreich 1551-1581",
            "Britisch-Birma 1886-1948",
            "Eisenbahn Yangon-Mandalay 1885",
            "Schlacht von Toungoo Mai 1942",
        ],
    },
    "hakha-cities-v2": {
        "desc": (
            "Hakha ist die Hauptstadt des Chin-Staates und liegt auf 1.867 Metern Höhe in den "
            "Chin-Bergen, 1.094 Kilometer nordwestlich von Yangon nahe der indischen Grenze. Die "
            "abgelegene Stadt mit rund 49.000 Einwohnern ist eine der höchstgelegenen Hauptstädte "
            "Myanmars und kann im Winter Frost und gelegentlich Schnee erleben. Während Britisch-"
            "Birma (1886-1948) gelang den Briten erst nach jahrzehntelangen 'Chin Hills "
            "Expeditions' (1888-1896) die Kontrolle über das bergige Gebiet. Die Chin-Bevölkerung "
            "konvertierte ab 1899 durch amerikanische und britische Baptisten-Missionare massenhaft "
            "zum Christentum - heute sind über 85% der Chin Christen, was sie zur einzigen "
            "mehrheitlich christlichen Volksgruppe Myanmars macht. Im Juli/August 2015 zerstörte "
            "ein katastrophaler Erdrutsch nach Zyklon Komen weite Teile von Hakha. Die Stadt ist "
            "Zentrum der Chin National Front, die seit 1988 für Autonomie kämpft."
        ),
        "facts": [
            "Hauptstadt des Chin-Staates",
            "Bevölkerung ca. 49.000",
            "Auf 1.867 m Höhe",
            "1.094 km nordwestlich von Yangon",
            "Chin Hills Expeditions 1888-1896",
            "Britisch-Birma 1886-1948",
            "Über 85% christliche Bevölkerung",
            "Zerstörender Erdrutsch Juli/August 2015",
        ],
    },
    "loikaw-cities-v2": {
        "desc": (
            "Loikaw ist die Hauptstadt des Kayah-Staates (früher Karenni-Staat) und liegt auf "
            "877 Metern Höhe im südlichen Shan-Hochland, 458 Kilometer nordöstlich von Yangon. "
            "Mit rund 50.000 Einwohnern ist sie eine der kleinsten Hauptstädte Myanmars. Während "
            "Britisch-Birma (1886-1948) waren die Karenni-Staaten formal unabhängige Fürstentümer "
            "unter britischer Schirmherrschaft - dieser Sonderstatus wurde mit dem Panglong-"
            "Abkommen 1947 aufgegeben, was bis heute Konflikte schürt. Die Region ist Heimat der "
            "Padaung-Frauen mit ihren berühmten Halsringen sowie 17 weiterer ethnischer Gruppen. "
            "Wahrzeichen ist die malerische Taung-Kwe-Pagode auf einem Karst-Kalksteinhügel. Das "
            "Lawpita-Wasserkraftwerk im nahen Belu Chaung wurde 1960 mit japanischen "
            "Reparationszahlungen gebaut und liefert noch heute einen Großteil des Stroms für "
            "Mandalay und Yangon. Seit dem Putsch 2021 ist Loikaw Schauplatz schwerer Kämpfe."
        ),
        "facts": [
            "Hauptstadt des Kayah-Staates",
            "Bevölkerung ca. 50.000",
            "Auf 877 m Höhe",
            "458 km nordöstlich von Yangon",
            "Britisch-Birma 1886-1948",
            "Karenni-Staaten formal unabhängig bis 1947",
            "Lawpita-Wasserkraftwerk seit 1960 (japanische Reparationen)",
            "Heimat der Padaung-Frauen mit Halsringen",
        ],
    },
    "thandwe-cities-v2": {
        "desc": (
            "Thandwe (früher Sandoway) liegt an der Westküste Myanmars im Rakhine-Staat, 408 "
            "Kilometer nordwestlich von Yangon, und hat rund 60.000 Einwohner. Die Stadt ist eine "
            "der ältesten der Region - laut Überlieferung wurde sie im 6. Jahrhundert gegründet "
            "und war eine der vier alten Königsstädte von Arakan. Mit dem Ersten Anglo-"
            "Birmanischen Krieg (1824-1826) und dem Vertrag von Yandabo fiel die Region an "
            "Großbritannien (Britisch-Birma 1886-1948). Berühmt ist Thandwe als Tor zum "
            "Ngapali-Strand, dem exklusivsten Strandresort Myanmars mit feinem weißen Sand und "
            "kristallklarem Wasser. Der Name Ngapali soll an Neapel erinnern - italienische "
            "Kolonialbeamte gaben ihn vermutlich. Der Flughafen Thandwe verbindet die Region "
            "mit Yangon. Die Wirtschaft basiert auf Tourismus (vor 2020), Fischerei und "
            "Reisanbau."
        ),
        "facts": [
            "Bevölkerung ca. 60.000",
            "408 km nordwestlich von Yangon",
            "Eine der vier alten Königsstädte Arakans",
            "Gegründet im 6. Jh. laut Überlieferung",
            "Britisch durch Vertrag von Yandabo 1826",
            "Britisch-Birma 1886-1948",
            "Tor zum Ngapali-Strand",
            "Name 'Ngapali' soll an Neapel erinnern",
        ],
    },
    "kengtung-cities-v2": {
        "desc": (
            "Kengtung (Kyaingtong) liegt im östlichen Shan-Staat auf 800 Metern Höhe, 446 "
            "Kilometer östlich von Mandalay nahe der Grenzen zu China, Laos und Thailand "
            "(Goldenes Dreieck), und hat rund 172.000 Einwohner. Die Stadt wurde im 13. "
            "Jahrhundert vom Lanna-Königreich gegründet und war jahrhundertelang ein eigenständiges "
            "Shan-Fürstentum unter dem Saopha (Fürst) der Khün. Während Britisch-Birma (1886-1948) "
            "war Kengtung formal eines der größten und reichsten Shan-Staaten und behielt seinen "
            "Saopha bis 1959. Die Stadt ist Zentrum der Khün-Kultur, die eng mit dem nordthai-"
            "ländischen Lanna verwandt ist. Auf den umliegenden Bergen leben Akha, Lahu, Wa, Eng "
            "und Palaung. 1991 wurde der königliche Palast aus dem 19. Jahrhundert von der "
            "Militärjunta abgerissen - ein international kritisierter Akt der Geschichtszerstörung. "
            "Der zentrale See Naung Tung prägt das Stadtbild."
        ),
        "facts": [
            "Bevölkerung ca. 172.000",
            "Auf 800 m Höhe",
            "446 km östlich von Mandalay",
            "Im Goldenen Dreieck (China/Laos/Thailand)",
            "Lanna-Gründung 13. Jh.",
            "Britisch-Birma 1886-1948",
            "Eigener Saopha bis 1959",
            "Königlicher Palast 1991 abgerissen",
        ],
    },
    "muse-cities-v2": {
        "desc": (
            "Muse liegt im nördlichen Shan-Staat direkt an der chinesischen Grenze gegenüber der "
            "Stadt Ruili (Yunnan), 760 Kilometer nordöstlich von Yangon, und hat rund 134.000 "
            "Einwohner. Die Stadt ist mit Abstand der wichtigste Landgrenzübergang Myanmars - "
            "über 70% des offiziellen Handels mit China laufen hier durch, mit einem Volumen von "
            "über 4 Milliarden US-Dollar jährlich. Während Britisch-Birma (1886-1948) war Muse "
            "ein unbedeutender Grenzposten; erst nach der Öffnung Chinas 1988 und dem birmanisch-"
            "chinesischen Grenzhandelsabkommen wuchs die Stadt explosiv. Exportiert werden vor "
            "allem Jade, Holz, Reis, Bohnen, Mais und Wassermelonen, importiert Maschinen, "
            "Elektronik und Konsumgüter. Muse ist auch Zentrum des illegalen Handels mit Holz, "
            "Wildtieren und Drogen aus dem Goldenen Dreieck. Die Region ist seit Jahren "
            "umkämpftes Gebiet der TNLA und des chinesischen MNDAA-Bündnisses."
        ),
        "facts": [
            "Bevölkerung ca. 134.000",
            "760 km nordöstlich von Yangon",
            "Wichtigster Landgrenzübergang nach China",
            "Über 70% des offiziellen Chinahandels",
            "Handelsvolumen über 4 Mrd. USD jährlich",
            "Britisch-Birma 1886-1948",
            "Boom seit Grenzöffnung 1988",
            "Gegenüber Ruili (Yunnan)",
        ],
    },
    "kyaukpyu-cities-v2": {
        "desc": (
            "Kyaukpyu liegt auf der Insel Ramree im Rakhine-Staat an der Westküste Myanmars und "
            "hat rund 21.000 Einwohner. Die Stadt verfügt über einen der wichtigsten Tiefseehäfen "
            "Myanmars und ist Endpunkt der 793 Kilometer langen China-Myanmar-Pipeline, die seit "
            "2013 (Gas) bzw. 2017 (Öl) Energie aus dem Indischen Ozean nach Kunming transportiert "
            "und China den Umweg über die Straße von Malakka erspart. Die Insel Ramree war im "
            "Februar 1945 Schauplatz der berüchtigten 'Schlacht von Ramree', bei der laut "
            "umstrittener Überlieferung etwa 1.000 japanische Soldaten in den Mangrovensümpfen "
            "von Salzwasserkrokodilen getötet worden sein sollen - ein im Guinness-Buch "
            "vermerkter, aber historisch fragwürdiger Vorfall. Während Britisch-Birma (1886-1948) "
            "war Kyaukpyu Verwaltungsposten. Seit 2015 ist eine chinesische Sonderwirtschaftszone "
            "von 1.700 Hektar im Bau - ein Schlüsselprojekt der 'Neuen Seidenstraße'."
        ),
        "facts": [
            "Bevölkerung ca. 21.000",
            "Auf der Insel Ramree (Rakhine)",
            "Endpunkt der China-Myanmar-Pipeline (793 km)",
            "Gas seit 2013, Öl seit 2017",
            "Schlacht von Ramree Februar 1945",
            "Britisch-Birma 1886-1948",
            "Chinesische Sonderwirtschaftszone seit 2015",
            "Schlüsselprojekt der Neuen Seidenstraße",
        ],
    },
}


def to_str_arr(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def find_empty_de(text: str) -> list[str]:
    """Return list of POI ids whose descriptionAdvanced.de is missing/empty."""
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')
    matches = list(poi_pattern.finditer(text))
    empty = []
    for i, m in enumerate(matches):
        poi_id = m.group(1)
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end]
        da = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da:
            empty.append(poi_id)
            continue
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == '{':
                depth += 1
            elif block[j] == '}':
                depth -= 1
            j += 1
        body = block[body_start:j - 1]
        de_match = re.search(r'\bde:\s*"([^"]*)"', body)
        if not de_match or not de_match.group(1).strip():
            empty.append(poi_id)
    return empty


def main():
    src = FILE.read_text(encoding="utf-8")
    empty_before = find_empty_de(src)
    print(f"Empty descriptionAdvanced.de before: {len(empty_before)}")

    target_ids = [pid for pid in empty_before if pid in DATA][:30]
    print(f"Target POIs (in DATA): {len(target_ids)}")

    patched = 0
    skipped = []
    for poi_id in target_ids:
        data = DATA[poi_id]
        desc_de = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
        facts_arr = to_str_arr(data["facts"])

        # Find the POI block and locate end of facts: { ... }
        id_re = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m = id_re.search(src)
        if not m:
            skipped.append(poi_id + " (id not found)")
            continue
        facts_m = re.search(r'facts:\s*\{', src[m.end():])
        if not facts_m:
            skipped.append(poi_id + " (no facts block)")
            continue
        facts_open = m.end() + facts_m.end()
        depth = 1
        j = facts_open
        while j < len(src) and depth > 0:
            if src[j] == '{':
                depth += 1
            elif src[j] == '}':
                depth -= 1
            j += 1
        facts_end = j  # position right after closing `}`

        adv = (
            ',\n    descriptionAdvanced: { de: "' + desc_de + '" }'
            + ',\n    factsAdvanced: { de: ' + facts_arr + ' }'
        )
        src = src[:facts_end] + adv + src[facts_end:]
        patched += 1

    FILE.write_text(src, encoding="utf-8")
    empty_after = find_empty_de(src)
    print(f"Patched {patched} POIs")
    print(f"Empty descriptionAdvanced.de after: {len(empty_after)}")
    if skipped:
        print("Skipped:")
        for s in skipped:
            print(" -", s)


if __name__ == "__main__":
    main()
