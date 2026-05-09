"""Insert descriptionAdvanced.de + factsAdvanced.de blocks for POIs in
poiExtraIraqCitiesV2.ts.

The file currently has only basic description/facts. This script inserts new
descriptionAdvanced and factsAdvanced blocks (only the `de:` field) RIGHT AFTER
the existing `facts: { ... }` block, before the closing `}` of the POI object.

Other languages (hu/ro/en) get an empty placeholder string so the type-shape is
preserved (descriptionAdvanced/factsAdvanced are typed `unknown` in poi.ts).

POIs that already have descriptionAdvanced are skipped.
"""
from __future__ import annotations
import re
import subprocess
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraIraqCitiesV2.ts")

DATA: dict[str, dict] = {
    "baghdad-cities-v2": {
        "desc": (
            "Bagdad ist seit 1958 die Hauptstadt der Republik Irak und mit rund 7,5 Millionen "
            "Einwohnern die größte Stadt des Landes. Die Stadt wurde 762 n. Chr. vom abbasidischen "
            "Kalifen al-Mansur am Westufer des Tigris als kreisrunde 'Madinat as-Salam' (Stadt "
            "des Friedens) gegründet und entwickelte sich rasch zur größten Metropole der "
            "islamischen Welt; im 9. Jahrhundert hatte sie unter Harun al-Raschid über eine "
            "Million Einwohner und beherbergte das Haus der Weisheit. 1258 wurde Bagdad von den "
            "Mongolen unter Hülegü Khan zerstört. Während des britischen Mandats für Mesopotamien "
            "(1920-1932) wurde Bagdad zur Hauptstadt des neuen Königreichs Irak. Unter Saddam "
            "Hussein (1979-2003) erlebte die Stadt monumentale Bauprojekte, danach den Irakkrieg "
            "ab 2003."
        ),
        "facts": [
            "Hauptstadt seit 1958 (Königreich Irak ab 1921)",
            "Bevölkerung Metropolregion ca. 7,5 Millionen",
            "Gegründet 762 n. Chr. von Kalif al-Mansur",
            "Haus der Weisheit im 9. Jahrhundert",
            "Mongolische Zerstörung 1258",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Tigris durchquert die Stadt",
        ],
    },
    "basra-cities-v2": {
        "desc": (
            "Basra ist die wichtigste Hafenstadt des Irak, liegt am Schatt al-Arab im "
            "Süden des Landes und zählt rund 2,6 Millionen Einwohner, womit sie nach Bagdad "
            "die zweitgrößte Stadt ist. Die Stadt wurde 636 n. Chr. von Kalif Umar ibn al-Chattab "
            "als Militärlager gegründet und entwickelte sich zum wichtigsten Hafen Mesopotamiens "
            "am Persischen Golf; im 8. Jahrhundert war sie Heimat des Grammatikers Sibawayh und "
            "des Mystikers Hasan al-Basri. Während des britischen Mandats (1920-1932) wurde Basra "
            "zum strategischen Ölverladehafen ausgebaut. Im Iran-Irak-Krieg (1980-1988) und in "
            "der Saddam-Ära (1979-2003) erlitt die Stadt schwere Schäden. Heute werden über 80 "
            "Prozent der irakischen Erdölexporte über Basras Tiefseehäfen Umm Qasr und al-Faw "
            "abgewickelt."
        ),
        "facts": [
            "Bevölkerung ca. 2,6 Millionen, zweitgrößte Stadt",
            "Gegründet 636 n. Chr. von Kalif Umar",
            "Wichtigster Hafen am Schatt al-Arab",
            "Über 80% der Ölexporte des Irak",
            "Britisches Mandat 1920-1932",
            "Iran-Irak-Krieg 1980-1988",
            "Saddam-Ära 1979-2003",
            "Heimat Hasan al-Basris (642-728)",
        ],
    },
    "mosul-cities-v2": {
        "desc": (
            "Mosul liegt am Westufer des Tigris im Nordirak gegenüber den Ruinen des antiken "
            "Ninive, der Hauptstadt des Assyrischen Reiches, und zählt rund 1,7 Millionen "
            "Einwohner. Die mittelalterliche Stadt entstand im 7. Jahrhundert n. Chr. an der "
            "Stelle eines älteren assyrischen Vororts und wurde unter den Atabegen und der "
            "Zengiden-Dynastie ab dem 12. Jahrhundert zur Großstadt; nach ihr ist der "
            "feine Stoff Musselin benannt. Während des britischen Mandats für Mesopotamien "
            "(1920-1932) wurde die ölreiche Region Mosul 1926 endgültig dem Königreich Irak "
            "zugeschlagen. In der Saddam-Ära (1979-2003) blühte die Universität Mosul. Von "
            "Juni 2014 bis Juli 2017 stand die Stadt unter der Herrschaft des IS, die "
            "Befreiungsschlacht zerstörte die Altstadt einschließlich der al-Nuri-Moschee von "
            "1172."
        ),
        "facts": [
            "Bevölkerung ca. 1,7 Millionen",
            "Gegenüber Ninive, Hauptstadt Assyriens",
            "Stadt seit dem 7. Jahrhundert n. Chr.",
            "Namensgeber des Musselin-Stoffes",
            "Britisches Mandat 1920-1932, Mosul-Frage 1926",
            "Saddam-Ära 1979-2003",
            "IS-Herrschaft Juni 2014 - Juli 2017",
            "al-Nuri-Moschee von 1172, zerstört 2017",
        ],
    },
    "erbil-cities-v2": {
        "desc": (
            "Erbil (kurdisch Hewlêr) ist die Hauptstadt der Autonomen Region Kurdistan im "
            "Nordirak und zählt rund 1,6 Millionen Einwohner. Die Zitadelle von Erbil thront "
            "auf einem 32 Meter hohen Tell, dessen Schichten bis ins 5. Jahrtausend v. Chr. "
            "zurückreichen; sie gilt als eine der ältesten ununterbrochen besiedelten Stätten "
            "der Welt und ist seit 2014 UNESCO-Weltkulturerbe. In der Antike hieß die Stadt "
            "Arbela und war Schauplatz der Schlacht von Gaugamela im Jahr 331 v. Chr., in der "
            "Alexander der Große Dareios III. besiegte. Während des britischen Mandats "
            "(1920-1932) wurde Erbil Teil des Königreichs Irak. Unter Saddam Hussein "
            "(1979-2003) litt die kurdische Bevölkerung schwer, seit 1991 ist Erbil de facto "
            "kurdisch verwaltet. Heute ist die Stadt Wirtschafts- und Bildungszentrum "
            "Iraki-Kurdistans."
        ),
        "facts": [
            "Bevölkerung ca. 1,6 Millionen",
            "Hauptstadt der Autonomen Region Kurdistan",
            "Zitadelle UNESCO-Welterbe seit 2014",
            "Besiedlung seit dem 5. Jahrtausend v. Chr.",
            "Schlacht von Gaugamela 331 v. Chr.",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "De-facto-Autonomie seit 1991",
        ],
    },
    "sulaymaniyah-cities-v2": {
        "desc": (
            "Sulaimaniyya, kurdisch Silêmanî, liegt auf 882 Metern Höhe in einem Bergtal des "
            "Zagros-Gebirges im irakischen Kurdistan und zählt rund 880.000 Einwohner. Die "
            "Stadt wurde 1784 vom Baban-Fürst Ibrahim Pascha gegründet und nach seinem Vater "
            "Sulaiman Pascha benannt; sie diente als Hauptstadt des kurdischen Fürstentums der "
            "Babans bis 1850. Sulaimaniyya gilt als kulturelles Zentrum der Kurden und bringt "
            "zahlreiche Dichter und Gelehrte hervor. Während des britischen Mandats für "
            "Mesopotamien (1920-1932) erhob sich hier 1922 unter Scheich Mahmud Barzandschi das "
            "Königreich Kurdistan, das 1924 von britischen Truppen niedergeschlagen wurde. In "
            "der Saddam-Ära (1979-2003) litt die Stadt unter der Anfal-Kampagne 1986-1989. "
            "Heute beherbergt sie die Universität Sulaimani (1968) und ist eine der "
            "liberalsten Städte des Iraks."
        ),
        "facts": [
            "Bevölkerung ca. 880.000",
            "Gegründet 1784 von Ibrahim Pascha Baban",
            "Hauptstadt des Baban-Fürstentums bis 1850",
            "Königreich Kurdistan 1922-1924",
            "Britisches Mandat 1920-1932",
            "Anfal-Kampagne 1986-1989",
            "Saddam-Ära 1979-2003",
            "Universität Sulaimani seit 1968",
        ],
    },
    "kirkuk-cities-v2": {
        "desc": (
            "Kirkuk liegt am Khasa-Fluss im Nordirak und zählt rund 1 Million Einwohner mit "
            "einer multiethnischen Bevölkerung aus Kurden, Turkmenen, Arabern und Assyrern. "
            "Die Zitadelle von Kirkuk geht auf die assyrische Stadt Arrapha (3. Jahrtausend "
            "v. Chr.) zurück und beherbergt das Mausoleum des Propheten Daniel. Im Jahr 1927 "
            "wurde nahe Kirkuk in Baba Gurgur das erste irakische Erdölfeld entdeckt; während "
            "des britischen Mandats (1920-1932) wurde die Iraq Petroleum Company gegründet, die "
            "Kirkuks Öl ab 1934 über die Pipeline nach Haifa und Tripoli exportierte. Bis heute "
            "gilt Baba Gurgur als das ewige Feuer aus dem Buch Daniel. In der Saddam-Ära "
            "(1979-2003) wurde Kirkuk im Rahmen der Arabisierungspolitik gewaltsam umsiedelt; "
            "der Status der Stadt ist nach wie vor zwischen Bagdad und der kurdischen Region "
            "umstritten."
        ),
        "facts": [
            "Bevölkerung ca. 1 Million",
            "Multiethnisch: Kurden, Turkmenen, Araber, Assyrer",
            "Antike Stadt Arrapha (3. Jt. v. Chr.)",
            "Erste Öl-Entdeckung 1927 in Baba Gurgur",
            "Britisches Mandat 1920-1932",
            "Iraq Petroleum Company ab 1934",
            "Saddam-Ära 1979-2003 mit Arabisierung",
            "Mausoleum des Propheten Daniel",
        ],
    },
    "najaf-cities-v2": {
        "desc": (
            "Nadschaf liegt 160 Kilometer südlich von Bagdad und zählt rund 1 Million "
            "Einwohner. Die Stadt ist eine der heiligsten Stätten des schiitischen Islam, denn "
            "hier befindet sich der goldene Imam-Ali-Schrein, das Grab des vierten Kalifen Ali "
            "ibn Abi Talib (601-661), Cousin und Schwiegersohn des Propheten Mohammed. Der "
            "Schrein wurde im 10. Jahrhundert errichtet, mehrfach von schiitischen Dynastien "
            "ausgebaut und gilt nach Mekka, Medina und Kerbela als drittwichtigster "
            "Wallfahrtsort der Schiiten. Während des britischen Mandats (1920-1932) war "
            "Nadschaf 1918 und 1920 Schauplatz von Aufständen gegen die Briten. In der "
            "Saddam-Ära (1979-2003) wurde die schiitische Geistlichkeit unterdrückt; 1999 "
            "wurde Großajatollah Mohammed Sadeq al-Sadr ermordet. Der Wadi as-Salam-Friedhof "
            "östlich des Schreins ist mit über 6 Quadratkilometern der größte Friedhof der "
            "Welt."
        ),
        "facts": [
            "Bevölkerung ca. 1 Million",
            "Imam-Ali-Schrein seit dem 10. Jh.",
            "Drittheiligste Stadt der Schiiten",
            "Wadi as-Salam: größter Friedhof der Welt (6 km²)",
            "Britisches Mandat 1920-1932, Aufstände 1918/1920",
            "Saddam-Ära 1979-2003",
            "al-Sadr ermordet 1999",
            "160 km südlich von Bagdad",
        ],
    },
    "karbala-cities-v2": {
        "desc": (
            "Kerbela liegt 100 Kilometer südwestlich von Bagdad und zählt rund 700.000 "
            "Einwohner. Die Stadt ist einer der heiligsten Orte des schiitischen Islam, denn "
            "am 10. Muharram des Jahres 680 n. Chr. (10. Oktober) fand hier die Schlacht von "
            "Kerbela statt, in der der Enkel des Propheten Mohammed, Imam Hussein ibn Ali, mit "
            "72 Getreuen vom umayyadischen Heer Yazids I. getötet wurde. Über seinem Grab "
            "errichteten schiitische Dynastien den goldenen Imam-Hussein-Schrein, daneben den "
            "Schrein seines Halbbruders al-Abbas. Während des britischen Mandats (1920-1932) "
            "war Kerbela 1920 Zentrum des großen irakischen Aufstands. In der Saddam-Ära "
            "(1979-2003) wurde der schiitische Aufstand 1991 hier blutig niedergeschlagen. Bei "
            "der jährlichen Arba'in-Wallfahrt 40 Tage nach Aschura pilgern bis zu 25 Millionen "
            "Schiiten nach Kerbela – die größte religiöse Versammlung der Welt."
        ),
        "facts": [
            "Bevölkerung ca. 700.000",
            "Schlacht von Kerbela 680 n. Chr.",
            "Imam-Hussein-Schrein und al-Abbas-Schrein",
            "Arba'in-Wallfahrt: bis zu 25 Mio. Pilger",
            "Britisches Mandat 1920-1932, Aufstand 1920",
            "Schiitischer Aufstand 1991 niedergeschlagen",
            "Saddam-Ära 1979-2003",
            "100 km südwestlich von Bagdad",
        ],
    },
    "nasiriyah-cities-v2": {
        "desc": (
            "Nasiriyya liegt am Euphrat im Südirak und zählt rund 560.000 Einwohner. Die "
            "Stadt wurde 1872 vom Schaich des Muntafiq-Stammes Nasir al-Saadun gegründet und "
            "nach ihm benannt. Etwa 15 Kilometer südlich der Stadt liegen die Ruinen der "
            "antiken sumerischen Stadt Ur, eine der ältesten Städte der Welt (um 3800 v. Chr.) "
            "und Geburtsort des biblischen Patriarchen Abraham; die rekonstruierte "
            "Ziggurat von Ur (um 2100 v. Chr. unter Ur-Nammu) ist eine der besterhaltenen "
            "Stufentempel Mesopotamiens. Während des britischen Mandats (1920-1932) war "
            "Nasiriyya wichtige Garnisonsstadt am Euphrat. In der Saddam-Ära (1979-2003) wurden "
            "die nahen Marsch-Araber durch die Trockenlegung der Sumpfgebiete verfolgt. Nahe "
            "der Stadt fand 2003 die Schlacht von Nasiriyya statt, in der die US-Soldatin "
            "Jessica Lynch in Gefangenschaft geriet."
        ),
        "facts": [
            "Bevölkerung ca. 560.000",
            "Gegründet 1872 von Nasir al-Saadun",
            "Ur seit 3800 v. Chr., Geburtsort Abrahams",
            "Ziggurat von Ur (um 2100 v. Chr.)",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Trockenlegung der Sumpfgebiete in den 1990ern",
            "Schlacht von Nasiriyya 2003",
        ],
    },
    "amarah-cities-v2": {
        "desc": (
            "Amara liegt am Tigris im Südosten des Irak und zählt rund 420.000 Einwohner. Die "
            "Stadt wurde 1862 von der osmanischen Verwaltung als Garnisonsstadt am Tigris "
            "gegründet, um den Stamm der Beni Lam zu kontrollieren. Amara liegt am Rand der "
            "irakischen Sumpfgebiete (al-Ahwar), Heimat der Marsch-Araber (Madan), die seit "
            "dem 5. Jahrtausend v. Chr. eine einzigartige Kultur in Schilfbauten auf "
            "schwimmenden Inseln pflegen; seit 2016 sind die Sumpfgebiete UNESCO-Welterbe. "
            "Während des britischen Mandats für Mesopotamien (1920-1932) war Amara wichtige "
            "Verwaltungsstadt; im Ersten Weltkrieg fand hier 1915 die Schlacht von Es Sinn "
            "statt. In der Saddam-Ära (1979-2003) ließ die Regierung 1991-2003 die Sumpfgebiete "
            "zur Bestrafung der schiitischen Marsch-Araber trockenlegen, wodurch über 90 "
            "Prozent des Ökosystems zerstört wurden; seit 2003 wird das Gebiet teilweise "
            "wiederhergestellt."
        ),
        "facts": [
            "Bevölkerung ca. 420.000",
            "Gegründet 1862 von den Osmanen",
            "Tor zu den irakischen Sumpfgebieten",
            "Marsch-Araber seit dem 5. Jt. v. Chr.",
            "UNESCO-Welterbe Sumpfgebiete seit 2016",
            "Britisches Mandat 1920-1932",
            "Schlacht von Es Sinn 1915",
            "Saddam-Ära 1979-2003 mit Sumpf-Trockenlegung",
        ],
    },
    "al-diwaniyah-cities-v2": {
        "desc": (
            "Diwaniyya liegt am Euphrat im Zentralirak, etwa 180 Kilometer südlich von Bagdad, "
            "und zählt rund 460.000 Einwohner. Die Stadt entstand im 17. Jahrhundert als "
            "Versammlungsort (arabisch 'Diwan') des Stammes Khaza'il und wurde unter den "
            "Osmanen 1869 zum Sandschak erhoben. Etwa 10 Kilometer südlich liegen die Ruinen "
            "der antiken sumerischen Stadt Nippur, einst religiöses Zentrum Mesopotamiens und "
            "Sitz des Hauptgottes Enlil; hier wurden um 1900 von der University of "
            "Pennsylvania zehntausende Keilschrifttafeln entdeckt. Während des britischen "
            "Mandats für Mesopotamien (1920-1932) war Diwaniyya wichtiger Knotenpunkt der "
            "Bagdad-Basra-Eisenbahn. In der Saddam-Ära (1979-2003) entwickelte sich die Stadt "
            "zum landwirtschaftlichen Zentrum mit Reis- und Datteln-Anbau. Die "
            "al-Qadisiyya-Universität wurde 1987 gegründet und trägt den Namen der "
            "entscheidenden Schlacht von 636."
        ),
        "facts": [
            "Bevölkerung ca. 460.000",
            "180 km südlich von Bagdad",
            "Entstanden im 17. Jh. als Stammes-Diwan",
            "Nahe Nippur, religiöses Zentrum Sumers",
            "Sandschak seit 1869",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "al-Qadisiyya-Universität seit 1987",
        ],
    },
    "kut-cities-v2": {
        "desc": (
            "Kut, offiziell al-Kut, liegt am linken Tigris-Ufer rund 160 Kilometer südöstlich "
            "von Bagdad und zählt rund 380.000 Einwohner. Die Stadt erlangte weltweite "
            "Bekanntheit durch die Belagerung von Kut im Ersten Weltkrieg: Vom 7. Dezember "
            "1915 bis zum 29. April 1916 belagerten osmanische Truppen unter Halil Pascha die "
            "britisch-indische 6. Division unter Generalmajor Charles Townshend; mit der "
            "Kapitulation gerieten 13.000 Soldaten in osmanische Gefangenschaft – eine der "
            "größten britischen Niederlagen des Krieges. Während des britischen Mandats für "
            "Mesopotamien (1920-1932) wurde Kut wieder Verwaltungsstadt. Der nahegelegene "
            "Kut-Damm am Tigris (1939 fertiggestellt) regelt die Bewässerung der "
            "südmesopotamischen Felder. In der Saddam-Ära (1979-2003) war Kut Etappenstadt im "
            "Iran-Irak-Krieg (1980-1988). Seit 1976 ist Kut Hauptstadt des Gouvernements "
            "Wasit."
        ),
        "facts": [
            "Bevölkerung ca. 380.000",
            "160 km südöstlich von Bagdad",
            "Belagerung von Kut 1915-1916",
            "13.000 britische Gefangene 1916",
            "Britisches Mandat 1920-1932",
            "Kut-Damm am Tigris seit 1939",
            "Saddam-Ära 1979-2003",
            "Hauptstadt Wasit seit 1976",
        ],
    },
    "hillah-cities-v2": {
        "desc": (
            "Hilla liegt am Euphrat 100 Kilometer südlich von Bagdad und zählt rund 540.000 "
            "Einwohner. Die Stadt wurde 1101 von Saif al-Daula Sadaqa, dem Mazyadiden-"
            "Fürsten, gegründet, wobei viele Steine aus den nahen Ruinen Babylons verbaut "
            "wurden. Etwa 5 Kilometer nördlich liegen die Ruinen Babylons, der ehemaligen "
            "Hauptstadt des babylonischen Reiches unter Hammurabi (um 1792-1750 v. Chr.) und "
            "Nebukadnezar II. (605-562 v. Chr.); die legendären Hängenden Gärten der Semiramis "
            "galten als eines der sieben Weltwunder. Babylon wurde 2019 UNESCO-Weltkulturerbe. "
            "Während des britischen Mandats für Mesopotamien (1920-1932) wurde Hilla "
            "Verwaltungssitz des Gouvernements Babil. In der Saddam-Ära (1979-2003) ließ "
            "Saddam Hussein ab 1983 Babylons Ischtar-Tor und Palast Nebukadnezars umstritten "
            "rekonstruieren und sich als 'neuen Nebukadnezar' inszenieren."
        ),
        "facts": [
            "Bevölkerung ca. 540.000",
            "Gegründet 1101 von Saif al-Daula",
            "Babylon-Ruinen 5 km nördlich",
            "Hammurabi (1792-1750 v. Chr.)",
            "Hängende Gärten der Semiramis",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003 mit Babylon-Rekonstruktion",
            "UNESCO-Welterbe Babylon seit 2019",
        ],
    },
    "ramadi-cities-v2": {
        "desc": (
            "Ramadi liegt am Euphrat 110 Kilometer westlich von Bagdad und zählt rund 480.000 "
            "Einwohner. Die Stadt wurde 1869 vom osmanischen Wali Midhat Pascha gegründet, um "
            "die Beduinen des Dulaim-Stammes anzusiedeln. Während des britischen Mandats für "
            "Mesopotamien (1920-1932) fand hier am 28. September 1917 die Schlacht von Ramadi "
            "statt, in der britische Truppen die osmanische Garnison nach kurzer Belagerung "
            "einnahmen; 1932 wurde Ramadi Hauptstadt des Gouvernements al-Anbar. In der "
            "Saddam-Ära (1979-2003) gehörten viele Offiziere und Stammesführer der Region zum "
            "engsten Gefolge Saddam Husseins. Nach 2003 wurde Ramadi zum Zentrum des "
            "sunnitischen Aufstands; die zweite Schlacht von Ramadi (Juni-November 2006) war "
            "eine der blutigsten der Operation Iraqi Freedom. Vom Januar 2014 bis Februar 2016 "
            "stand Ramadi unter IS-Herrschaft; bei der Befreiung wurden rund 80 Prozent der "
            "Stadt zerstört."
        ),
        "facts": [
            "Bevölkerung ca. 480.000",
            "Gegründet 1869 von Midhat Pascha",
            "110 km westlich von Bagdad",
            "Schlacht von Ramadi 1917",
            "Britisches Mandat 1920-1932",
            "Hauptstadt al-Anbar seit 1932",
            "Saddam-Ära 1979-2003",
            "IS-Herrschaft 2014-2016, 80% zerstört",
        ],
    },
    "fallujah-cities-v2": {
        "desc": (
            "Falludscha liegt am Euphrat 70 Kilometer westlich von Bagdad und zählt rund "
            "330.000 Einwohner. Die Stadt geht auf das babylonische Pumbedita zurück, das ab "
            "dem 3. Jahrhundert n. Chr. eine bedeutende Talmud-Akademie der Juden in "
            "Mesopotamien beherbergte. Falludscha ist als 'Stadt der Moscheen' bekannt – mit "
            "über 200 Moscheen ist die Moscheendichte besonders hoch. Während des britischen "
            "Mandats für Mesopotamien (1920-1932) wurde hier 1941 im Anglo-Irakischen Krieg "
            "die Schlacht von Falludscha gegen die pro-deutsche Regierung Raschid Alis "
            "geschlagen. In der Saddam-Ära (1979-2003) war die Region eine Hochburg "
            "sunnitischer Baath-Anhänger. Nach 2003 wurde Falludscha zum Symbol des "
            "irakischen Widerstands: In der Ersten (April 2004) und Zweiten Schlacht von "
            "Falludscha (November-Dezember 2004) erlitten US-Truppen schwere Verluste. Vom "
            "Januar 2014 bis Juni 2016 stand die Stadt unter IS-Kontrolle."
        ),
        "facts": [
            "Bevölkerung ca. 330.000",
            "Antike jüdische Akademie Pumbedita",
            "'Stadt der Moscheen' (über 200)",
            "70 km westlich von Bagdad",
            "Schlacht 1941 (Anglo-Irakischer Krieg)",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "IS-Herrschaft 2014-2016, US-Schlachten 2004",
        ],
    },
    "baqubah-cities-v2": {
        "desc": (
            "Baquba liegt am Diyala-Fluss 50 Kilometer nordöstlich von Bagdad und zählt rund "
            "470.000 Einwohner. Die Stadt wurde im 8. Jahrhundert n. Chr. unter den Abbasiden "
            "als Etappenort an der Chorasan-Straße zwischen Bagdad und Persien gegründet und "
            "wird in den Geschichten aus 1001 Nacht erwähnt. Baquba ist Hauptstadt des "
            "Gouvernements Diyala und berühmt für seine ausgedehnten Orangen- und "
            "Datteln-Plantagen entlang des Diyala-Flusses; die Region produziert über 80 "
            "Prozent der irakischen Zitrusfrüchte. Während des britischen Mandats für "
            "Mesopotamien (1920-1932) befand sich hier von 1918 bis 1921 das größte britische "
            "Internierungslager für rund 50.000 christliche und jesidische Flüchtlinge aus dem "
            "osmanischen Reich. In der Saddam-Ära (1979-2003) war Baquba Etappe im "
            "Iran-Irak-Krieg (1980-1988). Nach 2003 wurde die Stadt zur Hochburg von al-Qaida "
            "im Irak."
        ),
        "facts": [
            "Bevölkerung ca. 470.000",
            "Gegründet im 8. Jh. unter den Abbasiden",
            "50 km nordöstlich von Bagdad",
            "Über 80% der irakischen Zitrusfrüchte",
            "Britisches Mandat 1920-1932",
            "Britisches Flüchtlingslager 1918-1921",
            "Iran-Irak-Krieg 1980-1988",
            "Saddam-Ära 1979-2003",
        ],
    },
    "tikrit-cities-v2": {
        "desc": (
            "Tikrit liegt am Tigris 140 Kilometer nordwestlich von Bagdad und zählt rund "
            "160.000 Einwohner. Die Stadt ist als Geburtsort des kurdischen Sultans Saladin "
            "(Salah ad-Din, 1138-1193) berühmt, der Jerusalem 1187 von den Kreuzfahrern "
            "zurückeroberte und das Ayyubiden-Reich gründete; nach ihm ist das Gouvernement "
            "Salah ad-Din benannt, dessen Hauptstadt Tikrit ist. Bekannter wurde die Stadt im "
            "20. Jahrhundert als Geburtsort Saddam Husseins (1937-2006), der 1979-2003 als "
            "Diktator herrschte und der Region eine privilegierte Stellung einräumte; viele "
            "Mitglieder seiner Familie und seines Tikriti-Stammesnetzwerks führten Schlüssel"
            "positionen. Während des britischen Mandats für Mesopotamien (1920-1932) war "
            "Tikrit Provinzstadt. Nach 2003 versteckte sich Saddam in einem Erdloch nahe "
            "Tikrit und wurde am 13. Dezember 2003 in der Operation Red Dawn gefangen "
            "genommen. Vom Juni 2014 bis April 2015 stand Tikrit unter IS-Herrschaft."
        ),
        "facts": [
            "Bevölkerung ca. 160.000",
            "Geburtsort Saladins (1138-1193)",
            "Geburtsort Saddam Husseins (1937-2006)",
            "140 km nordwestlich von Bagdad",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Saddam gefangen 13. Dezember 2003",
            "IS-Herrschaft Juni 2014 - April 2015",
        ],
    },
    "samarra-cities-v2": {
        "desc": (
            "Samarra liegt am Tigris 125 Kilometer nördlich von Bagdad und zählt rund 360.000 "
            "Einwohner. Die Stadt wurde 836 n. Chr. vom abbasidischen Kalifen al-Mutasim als "
            "neue Hauptstadt gegründet, da Bagdad seinen türkischen Garde-Truppen zu eng "
            "geworden war; bis 892 blieb sie Residenz von acht Kalifen. Aus dieser Zeit "
            "stammt die berühmte Große Moschee von Samarra mit dem 52 Meter hohen "
            "spiralförmigen Minarett al-Malwiya, einem Wahrzeichen der frühislamischen "
            "Architektur. Die Stadt ist seit 2007 UNESCO-Weltkulturerbe. Samarra ist auch "
            "schiitischer Wallfahrtsort wegen des al-Askari-Schreins, der die Gräber des 10. "
            "und 11. Imams beherbergt; am 22. Februar 2006 wurde die goldene Kuppel durch "
            "einen Bombenanschlag zerstört, was den irakischen Bürgerkrieg auslöste. "
            "Britisches Mandat 1920-1932, Saddam-Ära 1979-2003."
        ),
        "facts": [
            "Bevölkerung ca. 360.000",
            "Hauptstadt der Abbasiden 836-892",
            "Gegründet von Kalif al-Mutasim",
            "Spiralminarett al-Malwiya (52 m)",
            "UNESCO-Welterbe seit 2007",
            "al-Askari-Schrein der Schiiten",
            "Bombenanschlag 22. Februar 2006",
            "Britisches Mandat 1920-1932, Saddam 1979-2003",
        ],
    },
    "samawah-cities-v2": {
        "desc": (
            "Samawa liegt am Euphrat im Süden des Iraks, auf halbem Weg zwischen Bagdad und "
            "Basra, und zählt rund 250.000 Einwohner. Die Stadt entstand im 16. Jahrhundert "
            "als Karawanenstation an der Pilgerroute von Nadschaf nach Mekka. Etwa 30 "
            "Kilometer östlich von Samawa liegen die Ruinen der antiken sumerischen Stadt "
            "Uruk, eine der ältesten Großstädte der Welt (um 4000 v. Chr.) und Heimat des "
            "legendären Königs Gilgamesch (um 2700 v. Chr.); hier entstand zwischen 3500 und "
            "3200 v. Chr. die früheste bekannte Schrift Mesopotamiens, die Keilschrift. "
            "Während des britischen Mandats für Mesopotamien (1920-1932) war Samawa Schauplatz "
            "des großen irakischen Aufstands von 1920. In der Saddam-Ära (1979-2003) "
            "entwickelte sich die Stadt zum Zentrum der Zementindustrie. Im Jahr 2004 war "
            "Samawa Stützpunkt der japanischen Selbstverteidigungsstreitkräfte – Japans "
            "größter Auslandseinsatz seit 1945."
        ),
        "facts": [
            "Bevölkerung ca. 250.000",
            "Entstanden im 16. Jh. als Karawanenstation",
            "Uruk 30 km östlich (um 4000 v. Chr.)",
            "Heimat des Gilgamesch (um 2700 v. Chr.)",
            "Erfindung der Keilschrift in Uruk",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Japanische Streitkräfte 2004-2006",
        ],
    },
    "duhok-cities-v2": {
        "desc": (
            "Duhok, kurdisch Dihok, liegt im äußersten Norden des Iraks an der türkischen "
            "Grenze und zählt rund 350.000 Einwohner. Die Stadt liegt auf 575 Metern Höhe in "
            "einem Tal des Bekhair-Gebirges und ist Hauptstadt des gleichnamigen "
            "Gouvernements der Autonomen Region Kurdistan. Der Name leitet sich vom kurdischen "
            "'Du' (zwei) und 'Hok' (Berg) ab. Die antike Region war Teil des assyrischen "
            "Reiches; etwa 50 Kilometer östlich liegen die Felsreliefs von Khinis aus der "
            "Zeit Sennacheribs (um 700 v. Chr.). Während des britischen Mandats für "
            "Mesopotamien (1920-1932) wurde Duhok 1921 dem neuen Königreich Irak zugeordnet. "
            "In der Saddam-Ära (1979-2003) wurden Tausende kurdische Dörfer der Region im "
            "Rahmen der Anfal-Kampagne 1986-1989 zerstört; nach 1991 wurde Duhok Teil der "
            "kurdischen Schutzzone. Die Universität Duhok wurde 1992 gegründet."
        ),
        "facts": [
            "Bevölkerung ca. 350.000",
            "Auf 575 m Höhe im Bekhair-Gebirge",
            "Felsreliefs von Khinis (700 v. Chr.)",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Anfal-Kampagne 1986-1989",
            "Kurdische Schutzzone seit 1991",
            "Universität Duhok seit 1992",
        ],
    },
    "zakho-cities-v2": {
        "desc": (
            "Zakho, kurdisch Zaxo, liegt am Khabur-Fluss im äußersten Norden des Iraks "
            "unmittelbar an der türkischen Grenze und zählt rund 350.000 Einwohner. Die Stadt "
            "ist der wichtigste Grenzübergang vom Irak in die Türkei (Ibrahim-Khalil-Brücke) "
            "und wickelt einen Großteil des türkisch-irakischen Handels ab. Wahrzeichen ist "
            "die antike Delal-Brücke (Pira Delal) über den Khabur, eine fünfbogige "
            "Steinbrücke, deren Ursprung umstritten ist – sie wird auf die abbasidische Zeit "
            "(8.-9. Jh.) oder noch älter datiert. Bis 1948 lebte hier eine bedeutende "
            "jüdisch-aramäische Gemeinde, deren Mitglieder die letzten muttersprachlichen "
            "Sprecher des Aramäischen waren; sie wanderten nach Israel aus. Während des "
            "britischen Mandats für Mesopotamien (1920-1932) war Zakho Grenzstadt zum "
            "französischen Mandatsgebiet Syrien. In der Saddam-Ära (1979-2003) wurde die "
            "Region durch die Anfal-Kampagne 1986-1989 schwer getroffen."
        ),
        "facts": [
            "Bevölkerung ca. 350.000",
            "Wichtigster Grenzübergang zur Türkei",
            "Delal-Brücke (8.-9. Jh.)",
            "Aramäisch-jüdische Gemeinde bis 1948",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Anfal-Kampagne 1986-1989",
            "Am Khabur-Fluss gelegen",
        ],
    },
    "tal-afar-cities-v2": {
        "desc": (
            "Tal Afar liegt 60 Kilometer westlich von Mosul im Gouvernement Ninive und zählt "
            "rund 200.000 Einwohner; die Bevölkerung besteht mehrheitlich aus Turkmenen "
            "(sowohl sunnitischer als auch schiitischer Konfession). Die Stadt liegt auf 280 "
            "Metern Höhe an einer alten Karawanenroute zwischen Mosul und Aleppo. Über der "
            "Stadt thront eine osmanische Festung aus dem 16. Jahrhundert, die unter Sultan "
            "Süleyman dem Prächtigen erbaut wurde. Während des britischen Mandats für "
            "Mesopotamien (1920-1932) wurde Tal Afar 1920 Schauplatz eines blutigen Aufstands "
            "gegen die britische Besatzung. In der Saddam-Ära (1979-2003) war die Stadt "
            "wegen ihrer turkmenischen Identität staatlicher Arabisierung ausgesetzt. Nach "
            "2003 wurde Tal Afar mehrfach Schauplatz schwerer Kämpfe zwischen sunnitischen "
            "und schiitischen Turkmenen sowie Hochburg von al-Qaida im Irak. Vom Juni 2014 "
            "bis August 2017 stand die Stadt unter IS-Herrschaft."
        ),
        "facts": [
            "Bevölkerung ca. 200.000, mehrheitlich Turkmenen",
            "60 km westlich von Mosul",
            "Osmanische Festung aus dem 16. Jh.",
            "Aufstand gegen Briten 1920",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003 mit Arabisierung",
            "IS-Herrschaft Juni 2014 - August 2017",
            "An alter Karawanenroute Mosul-Aleppo",
        ],
    },
    "halabja-cities-v2": {
        "desc": (
            "Halabdscha, kurdisch Helebce, liegt 240 Kilometer nordöstlich von Bagdad nahe "
            "der iranischen Grenze und zählt rund 100.000 Einwohner. Die Stadt ist seit 2014 "
            "Hauptstadt des gleichnamigen Gouvernements der Autonomen Region Kurdistan. "
            "Halabdscha wurde am 16. März 1988 weltweit traurig bekannt, als irakische "
            "Streitkräfte unter General Ali Hassan al-Madschid (genannt 'Chemie-Ali') im "
            "Rahmen der Anfal-Kampagne (1986-1989) gegen die Kurden die Stadt mit Senfgas, "
            "Sarin und VX bombardierten; rund 5.000 Menschen, überwiegend Frauen und Kinder, "
            "starben sofort, Tausende leiden bis heute an Spätfolgen. Der Angriff gilt als "
            "größter Giftgaseinsatz gegen Zivilisten in der Geschichte. Während des "
            "britischen Mandats für Mesopotamien (1920-1932) wurde Halabdscha dem Königreich "
            "Irak zugeschlagen. In der Saddam-Ära (1979-2003) wurde die Region systematisch "
            "verwüstet."
        ),
        "facts": [
            "Bevölkerung ca. 100.000",
            "Hauptstadt des Gouvernements seit 2014",
            "Giftgas-Angriff 16. März 1988",
            "Rund 5.000 Tote durch Senfgas/Sarin/VX",
            "Anfal-Kampagne 1986-1989",
            "240 km nordöstlich von Bagdad",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
        ],
    },
    "kufa-cities-v2": {
        "desc": (
            "Kufa liegt am Euphrat 170 Kilometer südlich von Bagdad, unmittelbar nördlich "
            "von Nadschaf, und zählt mit der Vorstadt rund 110.000 Einwohner. Die Stadt wurde "
            "638 n. Chr. von Saad ibn Abi Waqqas als Garnisonsstadt nach dem arabischen Sieg "
            "über die Sassaniden bei Kadesia gegründet und war von 656 bis 661 unter Kalif "
            "Ali ibn Abi Talib Hauptstadt des frühen Kalifats; hier wurde Ali im Januar 661 "
            "in der Großen Moschee von Kufa von einem Charidschiten ermordet. Die Moschee "
            "gehört zu den vier ältesten Moscheen des Islams. In Kufa entstand die "
            "kufische Schrift, die früheste arabische Schreibweise des Korans. Während des "
            "britischen Mandats für Mesopotamien (1920-1932) wurde Kufa Verwaltungsstadt. "
            "In der Saddam-Ära (1979-2003) wurde die Region wegen ihrer schiitischen Mehrheit "
            "marginalisiert; nach 1991 wurde der schiitische Aufstand hier blutig "
            "niedergeschlagen."
        ),
        "facts": [
            "Bevölkerung ca. 110.000",
            "Gegründet 638 n. Chr.",
            "Hauptstadt des Kalifats unter Ali 656-661",
            "Ali ermordet im Januar 661",
            "Eine der vier ältesten Moscheen des Islams",
            "Heimat der kufischen Schrift",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
        ],
    },
    "al-musayyib-cities-v2": {
        "desc": (
            "Musayyib liegt am Euphrat 60 Kilometer südlich von Bagdad im Gouvernement Babil "
            "und zählt rund 80.000 Einwohner. Die Stadt entwickelte sich im 19. Jahrhundert "
            "als Karawanenstation und Knotenpunkt zwischen Bagdad und Kerbela. Während des "
            "britischen Mandats für Mesopotamien (1920-1932) wurde 1928 nahe der Stadt der "
            "Hindiyya-Damm am Euphrat fertiggestellt, der die Bewässerung für rund 800.000 "
            "Hektar Ackerland sicherstellt. In der Saddam-Ära (1979-2003) wurde Musayyib zum "
            "Standort eines der größten Wärmekraftwerke des Iraks (1978 in Betrieb genommen, "
            "1.200 MW Leistung). Die Region ist berühmt für die Dattelpalmen-Plantagen entlang "
            "des Euphrat und für ihre fruchtbaren Felder, die Reis und Weizen produzieren. "
            "Nach 2003 war Musayyib mehrfach Schauplatz schwerer Anschläge, darunter der "
            "verheerende Tankwagen-Anschlag vom 16. Juli 2005 mit 98 Toten."
        ),
        "facts": [
            "Bevölkerung ca. 80.000",
            "60 km südlich von Bagdad",
            "Hindiyya-Damm seit 1928 (800.000 ha)",
            "Britisches Mandat 1920-1932",
            "Wärmekraftwerk seit 1978 (1.200 MW)",
            "Saddam-Ära 1979-2003",
            "Anschlag 16. Juli 2005 (98 Tote)",
            "Dattelpalmen am Euphrat",
        ],
    },
    "baiji-cities-v2": {
        "desc": (
            "Baidschi liegt am Tigris im Gouvernement Salah ad-Din, etwa 200 Kilometer "
            "nördlich von Bagdad, und zählt rund 200.000 Einwohner. Die Stadt ist der "
            "wichtigste Industrie- und Energiestandort Mittelirak: Hier befindet sich die "
            "1985 fertiggestellte Baidschi-Raffinerie, mit einer Verarbeitungskapazität von "
            "ursprünglich 310.000 Barrel pro Tag die größte Erdölraffinerie des Iraks; das "
            "benachbarte Wärmekraftwerk Baidschi liefert mit 1.500 MW rund ein Drittel des "
            "irakischen Stroms. Baidschi ist Eisenbahn-Knotenpunkt der Bagdad-Mosul-Linie. "
            "Während des britischen Mandats für Mesopotamien (1920-1932) wurde die Linie "
            "ausgebaut. Die Saddam-Ära (1979-2003) baute die Industrieanlagen massiv aus. "
            "Vom Juni 2014 bis Oktober 2015 stand Baidschi unter IS-Herrschaft; die "
            "Schlacht um die Raffinerie war die längste Belagerung des Anti-IS-Kriegs und "
            "zerstörte 70 Prozent der Anlage."
        ),
        "facts": [
            "Bevölkerung ca. 200.000",
            "200 km nördlich von Bagdad",
            "Größte Raffinerie seit 1985 (310.000 Barrel/Tag)",
            "Wärmekraftwerk 1.500 MW",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "IS-Herrschaft Juni 2014 - Oktober 2015",
            "Raffinerie zu 70% zerstört im Anti-IS-Krieg",
        ],
    },
    "al-qasim-cities-v2": {
        "desc": (
            "Al-Qasim liegt am Euphrat im Gouvernement Babil etwa 90 Kilometer südlich von "
            "Bagdad und zählt rund 90.000 Einwohner. Die Stadt ist nach dem Schrein des Sayyid "
            "al-Qasim, einem Nachkommen des siebten schiitischen Imams Musa al-Kazim, "
            "benannt; das Mausoleum aus dem 13. Jahrhundert ist beliebtes lokales "
            "Pilgerziel. Die Region zwischen Hilla und Diwaniyya gehört zu den fruchtbarsten "
            "Mesopotamiens und ist bekannt für ihre ausgedehnten Dattelpalmen-Plantagen, die "
            "rund 15 Prozent der irakischen Datteln-Produktion liefern. Während des "
            "britischen Mandats für Mesopotamien (1920-1932) wurde der Distrikt erstmals "
            "verwaltungsmäßig erfasst. In der Saddam-Ära (1979-2003) entwickelte sich die "
            "Stadt zum landwirtschaftlichen Zentrum mit großen Bewässerungsprojekten am "
            "Hindiyya-Kanal. Nach dem schiitischen Aufstand 1991 litt die Region unter "
            "Repressionen der Baath-Regierung."
        ),
        "facts": [
            "Bevölkerung ca. 90.000",
            "90 km südlich von Bagdad",
            "Sayyid-al-Qasim-Schrein (13. Jh.)",
            "Rund 15% der irakischen Datteln",
            "Britisches Mandat 1920-1932",
            "Hindiyya-Kanal-Bewässerung",
            "Saddam-Ära 1979-2003",
            "Schiitischer Aufstand 1991",
        ],
    },
    "abu-ghraib-cities-v2": {
        "desc": (
            "Abu Ghuraib liegt 32 Kilometer westlich von Bagdad im gleichnamigen Distrikt "
            "des Gouvernements Bagdad und zählt rund 190.000 Einwohner. Die Stadt ist eine "
            "der wichtigsten landwirtschaftlichen Vorstädte Bagdads, berühmt für ihre "
            "Datteln, Granatäpfel und Weintrauben. Internationale Bekanntheit erlangte die "
            "Stadt durch das Abu-Ghuraib-Gefängnis (Abu Ghuraib Prison), das Saddam Hussein "
            "in der Saddam-Ära (1979-2003) als zentrale Hinrichtungs- und Folterstätte "
            "nutzte; Schätzungen gehen von Zehntausenden Hingerichteten aus. Nach 2003 "
            "wurde das Gefängnis von US-Truppen übernommen und 2004 durch die "
            "Veröffentlichung von Folterbildern weltweit zum Synonym für US-amerikanische "
            "Menschenrechtsverletzungen. Während des britischen Mandats für Mesopotamien "
            "(1920-1932) lag in Abu Ghuraib eine wichtige Pferdezuchtanlage. 2014 wurde das "
            "Gefängnis aus Sicherheitsgründen geschlossen. Vom Juni 2014 bis Februar 2016 "
            "war die Stadt von IS-Angriffen bedroht."
        ),
        "facts": [
            "Bevölkerung ca. 190.000",
            "32 km westlich von Bagdad",
            "Abu-Ghuraib-Gefängnis Saddam-Ära",
            "Folterskandal 2004 (US-Truppen)",
            "Saddam-Ära 1979-2003",
            "Britisches Mandat 1920-1932",
            "Gefängnis geschlossen 2014",
            "IS-Bedrohung 2014-2016",
        ],
    },
    "hit-cities-v2": {
        "desc": (
            "Hit, antik Is, liegt am Euphrat im Gouvernement al-Anbar etwa 145 Kilometer "
            "nordwestlich von Bagdad und zählt rund 100.000 Einwohner. Die Stadt ist seit "
            "über 5.000 Jahren bewohnt und wird bereits von Herodot (5. Jh. v. Chr.) wegen "
            "ihrer natürlichen Bitumen-Quellen erwähnt; das Bitumen aus Hit wurde im "
            "antiken Babylon zur Abdichtung der Mauern, der Hängenden Gärten der Semiramis "
            "sowie für die Zikkurat-Tempel verwendet, später auch von den Sumerern in Ur. "
            "Hit ist damit eine der ältesten kontinuierlich bewohnten Städte Mesopotamiens. "
            "Während des britischen Mandats für Mesopotamien (1920-1932) war Hit Etappenort "
            "an der Ölpipeline Kirkuk-Haifa, die ab 1934 in Betrieb ging. In der Saddam-Ära "
            "(1979-2003) entwickelte sich der Bitumen-Bergbau industriell weiter. Vom "
            "Oktober 2014 bis April 2016 stand Hit unter IS-Herrschaft."
        ),
        "facts": [
            "Bevölkerung ca. 100.000",
            "Über 5.000 Jahre besiedelt",
            "Bitumen-Quellen seit der Antike",
            "Bitumen für Hängende Gärten Babylons",
            "Erwähnt bei Herodot (5. Jh. v. Chr.)",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "IS-Herrschaft Oktober 2014 - April 2016",
        ],
    },
    "rawandiz-cities-v2": {
        "desc": (
            "Rawanduz, kurdisch Rewandiz, liegt auf 980 Metern Höhe im Zagros-Gebirge im "
            "Gouvernement Erbil und zählt rund 30.000 Einwohner. Die Stadt thront "
            "spektakulär über der Rawanduz-Schlucht, einer 320 Meter tiefen Schlucht des "
            "Rewandiz-Flusses; daher der Beiname 'Schweiz Kurdistans'. Rawanduz war von "
            "1814 bis 1836 Hauptstadt des kurdischen Soran-Emirats unter Mir Mohammed "
            "Pascha (genannt Mir-i Kor, der 'blinde Fürst'), der ein blühendes "
            "Kurdenreich aufbaute, bis es vom osmanischen General Mehmed Reschid Pascha "
            "1836 unterworfen wurde. Bei Rawanduz beginnt die berühmte Hamilton-Straße, die "
            "1928-1932 während des britischen Mandats für Mesopotamien (1920-1932) vom "
            "neuseeländischen Ingenieur Archibald Hamilton durch unwegsames Bergland erbaut "
            "wurde und Erbil mit Iran verbindet. In der Saddam-Ära (1979-2003) wurde die "
            "Region durch die Anfal-Kampagne 1986-1989 schwer getroffen."
        ),
        "facts": [
            "Bevölkerung ca. 30.000",
            "Auf 980 m Höhe im Zagros-Gebirge",
            "Rawanduz-Schlucht 320 m tief",
            "Hauptstadt Soran-Emirat 1814-1836",
            "Hamilton-Straße 1928-1932",
            "Britisches Mandat 1920-1932",
            "Saddam-Ära 1979-2003",
            "Anfal-Kampagne 1986-1989",
        ],
    },
}


def to_str_arr(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def main():
    src = FILE.read_text(encoding="utf-8")

    # Pattern: match each POI block by id, with its facts: { ... } close,
    # then insert descriptionAdvanced + factsAdvanced before the next "  }," (POI close).
    poi_pattern = re.compile(r'\{\s*\n\s*id:\s*"([^"]+)"', re.MULTILINE)
    matches = list(poi_pattern.finditer(src))

    patched = 0
    skipped_filled = []
    skipped_no_data = []
    errors = []

    # Reverse order so positions stay valid
    for i in range(len(matches) - 1, -1, -1):
        m = matches[i]
        poi_id = m.group(1)
        block_start = m.start()
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(src)
        block = src[block_start:block_end]

        if "descriptionAdvanced" in block:
            skipped_filled.append(poi_id)
            continue

        if poi_id not in DATA:
            skipped_no_data.append(poi_id)
            continue

        # Find facts: { ... } block, then find its closing brace.
        facts_m = re.search(r'\bfacts:\s*\{', block)
        if not facts_m:
            errors.append(f"{poi_id}: no facts block")
            continue
        # Find balanced close of facts: {
        depth = 1
        j = facts_m.end()
        while j < len(block) and depth > 0:
            ch = block[j]
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
            elif ch == '"':
                j += 1
                while j < len(block) and block[j] != '"':
                    if block[j] == '\\':
                        j += 2
                        continue
                    j += 1
            j += 1
        # j is now right after closing } of facts
        facts_close_in_block = j
        facts_close_abs = block_start + facts_close_in_block

        data = DATA[poi_id]
        de_desc = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
        de_facts_arr = to_str_arr(data["facts"])

        insertion = (
            ',\n'
            '    descriptionAdvanced: {\n'
            f'      de: "{de_desc}",\n'
            '      hu: "",\n'
            '      ro: "",\n'
            '      en: ""\n'
            '    },\n'
            '    factsAdvanced: {\n'
            f'      de: {de_facts_arr},\n'
            '      hu: [],\n'
            '      ro: [],\n'
            '      en: []\n'
            '    }'
        )

        src = src[:facts_close_abs] + insertion + src[facts_close_abs:]
        patched += 1

    FILE.write_text(src, encoding="utf-8")
    print(f"Patched: {patched}")
    print(f"Skipped (already filled): {len(skipped_filled)}")
    for s in skipped_filled:
        print("  -", s)
    print(f"Skipped (no DATA): {len(skipped_no_data)}")
    for s in skipped_no_data:
        print("  -", s)
    if errors:
        print("Errors:")
        for e in errors:
            print("  -", e)


if __name__ == "__main__":
    main()
