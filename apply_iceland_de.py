import re
import json

DATA = {
  "IS-001": {
    "desc": "Austurland, die Ostfjorde, ist eine Region von dramatischer, rauer Schönheit und ruhiger Abgeschiedenheit. Die stark zerklüftete Küstenlinie wird von schmalen Fjorden und steilen, direkt ins Meer abfallenden Bergen geprägt. In dieser dünn besiedelten Gegend liegen winzige, malerische Fischerdörfer wie Seyðisfjörður, die mit ihren bunten Holzhäusern eine einzigartige Atmosphäre schaffen. Ein besonderer Naturschatz der Region ist die wilde Rentierpopulation, die einzige auf ganz Island. Für Wanderer bieten die Ostfjorde unzählige Pfade, die zu abgelegenen Wasserfällen, atemberaubenden Aussichtspunkten und einer vielfältigen Vogelwelt führen. Die Geologie hier gehört zu den ältesten des Landes, was der Region ihren rauen, urtümlichen Charakter verleiht.",
    "facts": [
      "Heimat der einzigen wilden Rentierpopulation Islands.",
      "Die Geologie der Region gehört zu den ältesten des Landes.",
      "Malerische Fischerdörfer wie Seyðisfjörður prägen die Küste.",
      "Zahlreiche Wanderwege führen zu unberührten Wasserfällen."
    ]
  },
  "IS-002": {
    "desc": "Suðurland, oder Südisland, ist die meistbesuchte Region des Landes und bündelt eine beeindruckende Vielfalt ikonischer Landschaften. Hier befindet sich die berühmte Golden Circle-Route, zu der der Þingvellir-Nationalpark, der Gullfoss-Wasserfall und das Geysir-Geothermalgebiet gehören. Die Südküste ist berühmt für ihre dramatischen schwarzen Sandstrände wie Reynisfjara sowie für die majestätischen Wasserfälle Seljalandsfoss und Skógafoss. Die Region wird von mächtigen Gletscher-Vulkanen wie dem Eyjafjallajökull und der Hekla dominiert. An der östlichen Grenze liegt die Jökulsárlón-Gletscherlagune, in der Eisberge vom Vatnajökull kalben und auf das offene Meer hinaustreiben. Dank ihrer fruchtbaren Ebenen ist diese Region auch das landwirtschaftliche Herz Islands.",
    "facts": [
      "Beheimatet die berühmte Golden Circle-Route.",
      "Schwarze Sandstrände wie Reynisfjara prägen die Küste.",
      "Die Gletscher-Vulkane Eyjafjallajökull und Hekla dominieren die Landschaft.",
      "Fruchtbare Ebenen machen die Region zum landwirtschaftlichen Zentrum."
    ]
  },
  "IS-003": {
    "desc": "Suðurnes, auch bekannt als die Reykjanes-Halbinsel, ist ein geologisch äußerst aktives Gebiet in der südwestlichen Ecke Islands. Es ist die erste Region, die die meisten Besucher erleben, da sich hier der internationale Flughafen Keflavík befindet. Die Landschaft ist geprägt von mondähnlichen Lavafeldern, dampfenden Geothermalgebieten und der weltberühmten Blauen Lagune. Die Halbinsel liegt auf dem Mittelatlantischen Rücken, wo die nordamerikanische und die eurasische tektonische Platte sichtbar auseinanderdriften. Dieses Phänomen kann man an der 'Brücke zwischen den Kontinenten' direkt erleben. Die Küste zeichnet sich durch steile Klippen und gewaltige Wellen aus.",
    "facts": [
      "Standort des internationalen Flughafens Keflavík.",
      "Beheimatet die weltberühmte Blaue Lagune.",
      "Die nordamerikanische und eurasische Platte driften hier sichtbar auseinander.",
      "Geprägt von mondähnlichen Lavafeldern und starken Geothermalgebieten."
    ]
  },
  "IS-004": {
    "desc": "Die Hauptstadtregion Reykjavík, offiziell Höfuðborgarsvæðið, ist das pulsierende Herz Islands. Obwohl sie flächenmäßig zu den kleinsten Regionen zählt, lebt hier über 60 % der isländischen Bevölkerung. Reykjavík selbst ist die nördlichste Hauptstadt der Welt und fungiert als politisches, wirtschaftliches, kulturelles und bildungspolitisches Zentrum Islands. Das Stadtbild ist eine einzigartige Mischung aus moderner Architektur und traditionellen, farbenfroh gestrichenen Holzhäusern. Dank der intensiven Nutzung von Geothermie ist Reykjavík eine der saubersten Hauptstädte weltweit. Ihr lebendiges Nachtleben, zahlreiche Museen und Kunstgalerien machen sie zu einem äußerst beliebten Reiseziel.",
    "facts": [
      "Die nördlichste souveräne Hauptstadt der Welt.",
      "Beherbergt über 60 % der Gesamtbevölkerung Islands.",
      "Eine der saubersten Hauptstädte dank umfassender Geothermienutzung.",
      "Fungiert als das politische und kulturelle Zentrum des Landes."
    ]
  },
  "IS-005": {
    "desc": "Höfuðborgarsvæðið, die Hauptstadtregion, ist das administrative, wirtschaftliche und demografische Zentrum Islands. Sie umfasst Reykjavík und die umliegenden Gemeinden wie Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær, Seltjarnarnes und Kjósarhreppur. Etwa zwei Drittel der Gesamtbevölkerung des Landes konzentrieren sich in diesem relativ kleinen Gebiet. Die Region entwickelt sich dynamisch mit moderner Infrastruktur, umfangreichen Dienstleistungen und einem pulsierenden kulturellen Leben. Obwohl stark urbanisiert, ist die Nähe zur Natur allgegenwärtig: Die Stadt ist von Bergen umgeben, und die Küste ist leicht zugänglich. Diese Dualität verleiht der Region ihren einzigartigen Reiz.",
    "facts": [
      "Umfasst Reykjavík und umliegende Gemeinden wie Hafnarfjörður.",
      "Etwa zwei Drittel der Isländer leben in dieser Region.",
      "Die Stadt Hafnarfjörður ist als 'Stadt der Elfen' bekannt.",
      "Bietet eine einzigartige Mischung aus Urbanität und direkter Naturnähe."
    ]
  },
  "IS-006": {
    "desc": "Vesturland, oder Westisland, ist eine unglaublich vielfältige Region, die oft als 'Island im Miniaturformat' bezeichnet wird. Ihr berühmtester Teil ist die Halbinsel Snæfellsnes, die fast jeden isländischen Landschaftstyp beherbergt: den gletscherbedeckten Vulkan Snæfellsjökull, schwarze Sandstrände, Basaltsäulen, malerische Fischerdörfer und den viel fotografierten Berg Kirkjufell. Die Region ist auch historisch bedeutsam und diente als Schauplatz für zahlreiche isländische Sagas, wie die Egils-Saga. Im Gebiet Borgarfjörður befinden sich Europas stärkste heiße Quelle, Deildartunguhver, sowie die einzigartigen Wasserfälle Hraunfossar und Barnafoss. Es ist das Land der Sagas, in dem Geschichte und Mythologie allgegenwärtig sind.",
    "facts": [
      "Wird aufgrund ihrer landschaftlichen Vielfalt oft 'Island im Miniaturformat' genannt.",
      "Die Halbinsel Snæfellsnes beherbergt den berühmten Vulkan Snæfellsjökull.",
      "Heimat von Europas stärkster heißer Quelle, der Deildartunguhver.",
      "Wichtiger historischer Schauplatz für zahlreiche isländische Sagas."
    ]
  },
  "IS-007": {
    "desc": "Die Vestfirðir, oder Westfjorde, sind Islands isolierteste und unberührteste Region. Diese riesige Halbinsel verfügt über eine dramatisch zerklüftete Küstenlinie, an der steile Berge direkt ins Meer fallen. Die Region ist extrem dünn besiedelt, und die Siedlungen bestehen aus winzigen Fischerdörfern, die tief in den Fjorden versteckt liegen. Die Entfernung zur Hauptstadt und die im Winter oft schwierigen Straßenverhältnisse haben den Massentourismus ferngehalten und den wilden, authentischen Charakter bewahrt. Hier befindet sich Látrabjarg, einer der größten Vogelfelsen Europas, wo Millionen von Seevögeln, darunter Zehntausende Papageientaucher, nisten. Es ist eine Oase der Stille und rauen Naturmonumentalität.",
    "facts": [
      "Die isolierteste und unberührteste Region Islands.",
      "Extrem dünn besiedelt mit winzigen, tief versteckten Fischerdörfern.",
      "Beherbergt den Látrabjarg, einen der größten Vogelfelsen Europas.",
      "Ein Paradies für Papageientaucher und unzählige andere Seevögel."
    ]
  },
  "IS-008": {
    "desc": "Norðurland vestra, die Region Nordwest, ist Islands unangefochtene 'Hauptstadt der Pferdezucht'. Die Landschaft ist geprägt von weiten, fruchtbaren Tälern, sanften Hügeln und dem markanten Skagafjörður-Fjord. Dieses Gebiet ist tief in der isländischen Geschichte und Reiterkultur verwurzelt. Hier befindet sich Glaumbær, ein wunderschön erhaltenes Torfhofmuseum, das einen einzigartigen Einblick in das historische isländische Leben bietet. Die Region ist auch klassisches Saga-Territorium, da sich hier ein Großteil der Grettir-Saga abspielte. Entlang der Küste, insbesondere auf der Halbinsel Vatnsnes, lassen sich Seehundkolonien hervorragend beobachten.",
    "facts": [
      "Gilt als die 'Hauptstadt der Pferdezucht' Islands.",
      "Beherbergt das exzellent erhaltene Torfhofmuseum Glaumbær.",
      "Wichtiger Schauplatz der berühmten isländischen Grettir-Saga.",
      "Die Halbinsel Vatnsnes ist bekannt für ihre großen Seehundkolonien."
    ]
  },
  "IS-009": {
    "desc": "Norðurland eystra, die Nordostregion, ist eines der vielfältigsten und spektakulärsten Gebiete Islands. Ihr Zentrum ist Akureyri, die 'Hauptstadt des Nordens', eine charmante Stadt an den Ufern des Eyjafjörður. Die Region ist ein wahres geologisches Wunderland, insbesondere rund um den Mývatn-See, der für seinen aktiven Vulkanismus, Pseudokrater, Lavafelder und dampfende Geothermalgebiete bekannt ist. Hier findet man auch den Dettifoss, Europas volumenmäßig mächtigsten Wasserfall, sowie den hufeisenförmigen Goðafoss, den 'Wasserfall der Götter'. Die Küstenstadt Húsavík gilt zudem als Europas Hauptstadt der Walbeobachtung.",
    "facts": [
      "Akureyri fungiert als kulturelles und wirtschaftliches Zentrum des Nordens.",
      "Das Mývatn-Gebiet ist berühmt für seinen hochaktiven Vulkanismus.",
      "Heimat des Dettifoss, des mächtigsten Wasserfalls Europas.",
      "Die Stadt Húsavík ist ein weltweit renommiertes Zentrum für Walbeobachtungen."
    ]
  },
  "city-reykjavik": {
    "desc": "Reykjavík, das kulturelle und wirtschaftliche Herz Islands, ist eine Hauptstadt voller Energie, Kunst und Geschichte. Obwohl sie die nördlichste souveräne Hauptstadt der Welt ist, ist ihre Atmosphäre warm und einladend. Das Stadtzentrum ist ein Labyrinth aus Straßen mit bunten Wellblechhäusern, Designer-Boutiquen, Kunstgalerien und gemütlichen Cafés. Das Nachtleben, besonders an den Wochenenden, ist geradezu legendär. Ikonische Gebäude wie das Konzerthaus Harpa mit seiner von Basalt inspirierten Glasfassade und die hoch aufragende Hallgrímskirkja prägen die Skyline der Stadt. Reykjavík ist eine grüne Stadt, die fast ausschließlich mit Geothermie beheizt wird.",
    "facts": [
      "Die nördlichste souveräne Hauptstadt der Welt.",
      "Wird fast ausschließlich mit umweltfreundlicher Geothermie beheizt.",
      "Ikonische Bauwerke wie die Hallgrímskirkja und das Harpa-Konzerthaus prägen das Stadtbild.",
      "Bekannt für seine farbenfrohen Wellblechhäuser und ein legendäres Nachtleben."
    ]
  },
  "city-akureyri": {
    "desc": "Akureyri, die selbsternannte 'Hauptstadt des Nordens', ist eine überraschend weltoffene Stadt am Ende von Islands längstem Fjord, dem Eyjafjörður. Obwohl sie weniger als 100 km vom Polarkreis entfernt liegt, verfügt die Stadt über ein relativ mildes Klima und einen üppigen botanischen Garten. Das charmante Zentrum ist von Holzhäusern aus dem frühen 20. Jahrhundert geprägt. Die imposante Kirche Akureyrarkirkja wurde vom selben Architekten wie die Hallgrímskirkja in Reykjavík entworfen. Akureyri ist ein bedeutendes Bildungs- und Kulturzentrum in Nordisland und dient als idealer Ausgangspunkt zur Erkundung des Mývatn-Gebiets.",
    "facts": [
      "Wird oft als die heimliche 'Hauptstadt des Nordens' bezeichnet.",
      "Liegt geschützt am Ende des längsten Fjords Islands, dem Eyjafjörður.",
      "Verfügt trotz der Nähe zum Polarkreis über einen üppigen botanischen Garten.",
      "Ein wichtiger Ausgangspunkt für Walbeobachtungen und Touren zum Mývatn-See."
    ]
  },
  "city-keflavik": {
    "desc": "Keflavík, Teil der Gemeinde Reykjanesbær, ist das Haupttor nach Island, da sich hier der internationale Flughafen befindet. Die moderne Geschichte der Stadt ist eng mit der amerikanischen Militärpräsenz verbunden, die vom Zweiten Weltkrieg bis 2006 andauerte. Dieser Einfluss machte Keflavík zu einem kulturellen Schmelztiegel, brachte Rock 'n' Roll nach Island und bescherte der Stadt den Spitznamen 'Bítlabærinn' (die Beatles-Stadt). Heute profitiert die wachsende Stadt von der Nähe zum Flughafen und Attraktionen wie der Blauen Lagune. Eine besondere Sehenswürdigkeit ist das Museum Viking World mit dem originalgetreuen Nachbau eines Wikingerschiffs.",
    "facts": [
      "Heimat des wichtigsten internationalen Flughafens Islands.",
      "Erhielt durch den starken amerikanischen Einfluss den Spitznamen 'Beatles-Stadt'.",
      "Das Museum Viking World beherbergt einen authentischen Wikingerschiff-Nachbau.",
      "Die US-Militärpräsenz prägte die Stadt vom Zweiten Weltkrieg bis 2006 stark."
    ]
  },
  "city-isafjordur": {
    "desc": "Ísafjörður, die inoffizielle Hauptstadt der Westfjorde, ist eine malerische Stadt, die auf einer Sandbank mitten im Fjord Skutulsfjörður liegt. Sie ist von steilen Bergen umgeben, die dramatisch aus dem Meer aufragen und eine spektakuläre, isolierte Atmosphäre schaffen. Die Geschichte der Stadt ist untrennbar mit dem Fischfang verbunden, da sie jahrhundertelang eines der wichtigsten isländischen Fischereizentren war. In der Altstadt, Neðstikaupstaður, stehen einige der ältesten Holzhäuser Islands aus dem 18. Jahrhundert. Trotz ihrer geringen Größe bietet Ísafjörður ein reiches Kulturleben, renommierte Musikfestivals und eine auf Küstenmanagement spezialisierte Universität.",
    "facts": [
      "Die inoffizielle Hauptstadt der extrem abgelegenen Westfjorde.",
      "Liegt auf einer malerischen Sandbank inmitten des Fjords Skutulsfjörður.",
      "Die Altstadt beherbergt einige der ältesten erhaltenen Holzhäuser Islands.",
      "Verfügt über ein eigenes Universitätszentrum, das auf Küstenmanagement spezialisiert ist."
    ]
  },
  "city-selfoss": {
    "desc": "Selfoss ist die größte Stadt im Süden Islands und ein zentraler Knotenpunkt für Handel, Dienstleistungen und Landwirtschaft in der Region. Die Stadt liegt an den Ufern des Gletscherflusses Ölfusá und wird von der isländischen Ringstraße durchquert. Im Gegensatz zu vielen isländischen Städten mit malerischen Häfen ist Selfoss eine landeinwärts gelegene Stadt. Ihre Entwicklung wurde durch den Bau der ersten Brücke über die Ölfusá im Jahr 1891 entscheidend vorangetrieben. Es ist eine moderne, funktionale Stadt, die Touristen als idealer Ausgangspunkt zur Erkundung der Südküste und des Golden Circle dient.",
    "facts": [
      "Die größte Stadt in der Region Suðurland im Süden Islands.",
      "Liegt an den Ufern des mächtigen Gletscherflusses Ölfusá.",
      "Ein wichtiger Verkehrsknotenpunkt direkt an der isländischen Ringstraße.",
      "Dient als logistisches Zentrum für Reisende auf dem Golden Circle."
    ]
  },
  "city-seydisfjordur": {
    "desc": "Seyðisfjörður gilt als eine der schönsten Städte Islands, ein idyllisches Fischerdorf am Ende eines 17 Kilometer langen Fjords. Sie ist berühmt für ihre einzigartige Sammlung gut erhaltener, farbenfroher Holzhäuser, die eine märchenhafte Atmosphäre schaffen. Die Stadt ist auch ein lebendiges Kunstzentrum, das Künstler aus aller Welt anzieht. Die hellblaue Kirche und die regenbogenfarbene Straße, die dorthin führt, sind zu ikonischen Bildern der Stadt geworden. Seyðisfjörður ist Islands maritimes Tor zu Europa und dient als Hafen für die Norröna-Fähre. Umgeben von hohen Bergen und Wasserfällen ist die Stadt zudem ein exzellenter Ausgangspunkt für Wanderungen.",
    "facts": [
      "Berühmt für die hellblaue Kirche mit der markanten regenbogenfarbenen Straße.",
      "Dient als isländischer Ankunftshafen für die internationale Autofähre Norröna.",
      "Ein lebendiges Zentrum für Kunst und internationale Künstlerresidenzen.",
      "Liegt geschützt am Ende eines dramatischen, 17 Kilometer langen Fjords."
    ]
  },
  "nature-thingvellir": {
    "desc": "Der Þingvellir-Nationalpark ist ein Ort von immenser geologischer und historischer Bedeutung für Island. Geologisch liegt der Park direkt auf dem Mittelatlantischen Rücken, wo die nordamerikanische und die eurasische tektonische Platte mit einer Geschwindigkeit von etwa 2,5 cm pro Jahr auseinanderdriften. Dieser Prozess hat eine dramatische Landschaft aus Rissen, Schluchten und Lavafeldern geschaffen. Historisch gesehen ist Þingvellir die Geburtsstätte der isländischen Nation, denn hier wurde 930 n. Chr. das Alþingi, das nationale Parlament, gegründet. Jahrhundertelang versammelten sich hier Wikingerhäuptlinge. Aufgrund dieser doppelten Bedeutung gehört Þingvellir zum UNESCO-Weltkulturerbe.",
    "facts": [
      "Gehört als Geburtsstätte des isländischen Parlaments zum UNESCO-Weltkulturerbe.",
      "Liegt direkt auf dem sichtbaren Grabenbruch zwischen zwei Kontinentalplatten.",
      "Das Alþingi wurde hier bereits im Jahr 930 n. Chr. gegründet.",
      "Geprägt von dramatischen Spalten, tiefen Schluchten und erkalteten Lavafeldern."
    ]
  },
  "nature-gullfoss": {
    "desc": "Gullfoss, der 'Goldene Wasserfall', ist einer der spektakulärsten und beliebtesten Wasserfälle Islands. Als Teil der berühmten 'Golden Circle'-Route wird der Wasserfall vom Gletscherfluss Hvítá gespeist. Das Wasser stürzt in zwei markanten Stufen in eine tiefe Schlucht: Die erste Stufe ist 11 Meter, die zweite 21 Meter hoch, was ein ohrenbetäubendes Spektakel und dichten Nebel erzeugt. Seinen Namen verdankt er dem goldenen Schimmer, den das Wasser bei sonnigem Wetter annimmt. Im frühen 20. Jahrhundert drohte die Nutzung für Wasserkraft, was jedoch durch Sigríður Tómasdóttir, Islands erste Umweltschützerin, verhindert wurde.",
    "facts": [
      "Einer der Hauptanziehungspunkte auf der berühmten Golden Circle-Route.",
      "Das Wasser stürzt in zwei gewaltigen Kaskaden in eine enge Schlucht.",
      "Wird vom mächtigen Gletscherfluss Hvítá gespeist.",
      "Wurde dank des Einsatzes der ersten isländischen Umweltschützerin vor Verbauung gerettet."
    ]
  },
  "nature-geysir": {
    "desc": "Das Geysir-Geothermalgebiet im Haukadalur-Tal ist ein faszinierendes Naturphänomen und der Ursprung des Wortes 'Geysir'. Hier bricht der Große Geysir, der allen anderen seinen Namen gab, heute nur noch sehr selten aus. Sein Nachbar Strokkur bietet jedoch alle 5 bis 10 Minuten eine zuverlässige Show und schleudert eine Heißwassersäule bis zu 30 Meter in die Höhe. Das gesamte Gebiet ist übersät mit heißen Quellen, blubbernden Schlammtöpfen und farbenfrohen Mineralablagerungen. Der deutliche Schwefelgeruch liegt in der Luft und erinnert an die immense geothermische Kraft tief unter der Erde.",
    "facts": [
      "Der Große Geysir ist der Namensgeber für alle Springquellen weltweit.",
      "Der aktive Geysir Strokkur bricht zuverlässig alle 5 bis 10 Minuten aus.",
      "Die Heißwassersäule des Strokkur erreicht regelmäßig Höhen von bis zu 30 Metern.",
      "Das Gebiet ist geprägt von brodelnden Schlammtöpfen und intensiven Schwefelgerüchen."
    ]
  },
  "nature-vatnajokull": {
    "desc": "Der Vatnajökull ist eine kolossale Eiskappe, nach Volumen der größte und nach Fläche der zweitgrößte Gletscher Europas. Er bedeckt über 8.100 Quadratkilometer und dominiert den gesamten Südosten Islands. Unter seinem dicken Eispanzer, der stellenweise bis zu 1.000 Meter dick ist, verbirgt sich eine Welt der Kontraste mit einigen der aktivsten Vulkane des Landes, wie Grímsvötn und Bárðarbunga. Dieses Zusammenspiel von Feuer und Eis bringt einzigartige Phänomene wie Kristall-Eishöhlen und katastrophale Gletscherfluten (Jökulhlaup) hervor. Der Gletscher und seine Umgebung bilden den größten Nationalpark Europas.",
    "facts": [
      "Nach Volumen der größte Gletscher in ganz Europa.",
      "Verbirgt unter seinem Eispanzer einige der aktivsten Vulkane Islands.",
      "Das Schmelzwasser formt jeden Winter neue, spektakuläre Eishöhlen.",
      "Zentrum des flächenmäßig größten Nationalparks Europas."
    ]
  },
  "nature-jokulsarlon": {
    "desc": "Jökulsárlón ist eines der absoluten Kronjuwelen Islands, eine spektakuläre Gletscherlagune am Fuße des Breiðamerkurjökull, eines Ausläufers des großen Vatnajökull. Die Lagune ist gefüllt mit Eisbergen, die unaufhörlich von der Gletscherfront abbrechen und eine sich ständig verändernde Landschaft schaffen. Die Eisberge treiben in leuchtendem Blau, reinem Weiß oder durchzogen von Vulkanasche langsam durch die Lagune aufs Meer hinaus. Wenn sie das Meer erreichen, werden viele an den nahegelegenen schwarzen Sandstrand gespült, den berühmten 'Diamond Beach'. Die Lagune ist zudem ein wichtiger Lebensraum für Robben.",
    "facts": [
      "Eine tiefblaue Gletscherlagune am Fuße des mächtigen Vatnajökull.",
      "Eisberge kalben vom Gletscher und treiben langsam in Richtung Ozean.",
      "Abgebrochenes Eis wird am berühmten 'Diamond Beach' an Land gespült.",
      "Dient als wichtiger Lebensraum und Jagdgebiet für Robben."
    ]
  },
  "nature-skogafoss": {
    "desc": "Der Skógafoss ist ein klassischer Wasserfall von überwältigender Schönheit an Islands ehemaliger Küstenlinie. Das Wasser des Flusses Skógá stürzt 60 Meter tief über eine Breite von 25 Metern hinab und bildet einen fast perfekt rechteckigen Wasservorhang. Die Wucht des Wasserfalls erzeugt eine gewaltige Menge an Gischt, die an sonnigen Tagen fast immer einen einfachen oder doppelten Regenbogen zaubert. Eine Treppe mit 527 Stufen führt an der rechten Seite hinauf und bietet einen atemberaubenden Blick von oben. Auf dem flachen Gelände am Fuße des Wasserfalls können Besucher ganz nah an das Wasser herantreten.",
    "facts": [
      "Stürzt beeindruckende 60 Meter in die Tiefe.",
      "Die starke Gischt erzeugt an sonnigen Tagen fast immer strahlende Regenbögen.",
      "Eine steile Treppe ermöglicht den Aufstieg direkt neben den Wassermassen.",
      "Bildet einen fast perfekten, 25 Meter breiten Wasservorhang."
    ]
  },
  "nature-seljalandsfoss": {
    "desc": "Seljalandsfoss ist einer der berühmtesten und am meisten fotografierten Wasserfälle Islands, was vor allem an seinem einzigartigen Merkmal liegt: Ein Pfad ermöglicht es Besuchern, vollständig hinter dem Wasservorhang entlangzugehen. Dieses Erlebnis bietet eine völlig andere und spektakuläre Perspektive auf den Wasserfall und die umgebende Landschaft. Der Wasserfall stürzt elegant 60 Meter von einer ehemaligen Meeresklippe herab, gespeist vom Gletscher-Vulkan Eyjafjallajökull. Besonders bei Sonnenauf- oder -untergang entfaltet der Ort eine magische Wirkung. Da er direkt an der Ringstraße liegt, ist er ein obligatorischer Stopp.",
    "facts": [
      "Bietet die seltene Möglichkeit, komplett hinter dem fallenden Wasser entlangzugehen.",
      "Das Wasser stürzt 60 Meter von einer steilen, ehemaligen Meeresklippe herab.",
      "Wird vom berühmten Gletscher-Vulkan Eyjafjallajökull gespeist.",
      "Ein ikonisches Fotomotiv, besonders bei spektakulären Sonnenuntergängen."
    ]
  },
  "nature-reynisdrangar": {
    "desc": "Reynisfjara ist Islands berühmtester schwarzer Sandstrand, ein Ort von dramatischer und zugleich gefährlicher Schönheit. Sein tiefschwarzer Sand, entstanden aus erodiertem Vulkangestein, bildet einen starken Kontrast zur weißen Gischt des Nordatlantiks. Der Strand wird flankiert von einer beeindruckenden Klippe aus hexagonalen Basaltsäulen namens Hálsanefshellir, die einer gigantischen Orgel ähnelt. Vor der Küste ragen die zerklüfteten Reynisdrangar-Felsnadeln aus dem Ozean auf. Besucher müssen hier äußerst vorsichtig sein, da die unvorhersehbaren 'Sneaker Waves' lebensgefährlich sein können.",
    "facts": [
      "Islands berühmtester und am meisten fotografierter schwarzer Sandstrand.",
      "Eingerahmt von spektakulären, hexagonalen Basaltsäulen.",
      "Vor der Küste ragen die markanten Reynisdrangar-Felsnadeln auf.",
      "Bekannt für seine extrem gefährlichen und unberechenbaren 'Sneaker Waves'."
    ]
  },
  "nature-landmannalaugar": {
    "desc": "Landmannalaugar im Naturreservat Fjallabak im isländischen Hochland ist eine surreale Landschaft, berühmt für ihre farbenprächtigen Rhyolithberge. Rot, Rosa, Grün, Blau und Goldgelb verändern sich ständig je nach Lichteinfall und schaffen einen atemberaubenden Anblick. Diese Farbpalette ist das Ergebnis vulkanischer Aktivität und der mineralischen Zusammensetzung des Gesteins. Der Name, der 'Die Pools der Leute' bedeutet, stammt von den natürlichen heißen Quellen am Rande des Lavafeldes Laugahraun. Landmannalaugar ist zudem der nördliche Startpunkt für den Laugavegur, Islands beliebtesten Wanderweg.",
    "facts": [
      "Weltbekannt für seine bunten, mineralreichen Rhyolithberge.",
      "Verfügt über natürliche, heiße Geothermalquellen zum Baden.",
      "Der nördliche Start- oder Endpunkt des berühmten Laugavegur-Wanderwegs.",
      "Eine surreale vulkanische Hochlandlandschaft von außergewöhnlicher Schönheit."
    ]
  },
  "nature-dettifoss": {
    "desc": "Der Dettifoss ist ein überwältigendes Zeugnis der rohen Kraft der Natur und gilt als der volumenmäßig mächtigste Wasserfall Europas. Er liegt im Vatnajökull-Nationalpark im Nordosten Islands und wird vom Gletscherfluss Jökulsá á Fjöllum gespeist. Das mit grauen Sedimenten beladene Wasser stürzt 44 Meter in die beeindruckende Jökulsárgljúfur-Schlucht. Die Wucht ist so enorm, dass der umliegende Boden vibriert und der Lärm ohrenbetäubend ist. Wegen seiner schieren Kraft und der umgebenden Mondlandschaft hat er sich den Spitznamen 'Die Bestie' verdient, als Kontrast zur 'Schönheit' des Goðafoss.",
    "facts": [
      "Gilt als der wasserreichste und mächtigste Wasserfall in ganz Europa.",
      "Das trübe Gletscherwasser stürzt 44 Meter tief in eine raue Schlucht.",
      "Der ohrenbetäubende Lärm und die Vibrationen sind schon von Weitem spürbar.",
      "Liegt eingebettet in eine dramatische, mondähnliche Landschaft im Norden Islands."
    ]
  },
  "nature-myvatn": {
    "desc": "Mývatn ist ein flacher See von außergewöhnlicher ökologischer und geologischer Bedeutung, der in einem hochaktiven Vulkangebiet in Nordisland liegt. Sein Name, 'Mückensee', rührt von den riesigen Schwärmen (nicht beißender) Insekten her, die im Sommer schlüpfen und eine wichtige Nahrungsquelle für Vögel darstellen. Die Gegend um den See ist ein Katalog vulkanischer Phänomene: Pseudokrater, bizarre Lavaformationen und der Krafla-Vulkan mit seinen dampfenden Lavafeldern. Der reiche Vogelbestand, insbesondere an diversen Entenarten, macht den Mývatn zu einem Paradies für Ornithologen.",
    "facts": [
      "Der Name 'Mückensee' bezieht sich auf die großen, harmlosen Insektenschwärme im Sommer.",
      "Ein weltweit bedeutendes Brutgebiet für unzählige, seltene Entenarten.",
      "Umgeben von markanten vulkanischen Pseudokratern und bizarren Lavafeldern.",
      "Liegt in unmittelbarer Nähe zum hochaktiven Vulkansystem der Krafla."
    ]
  },
  "nature-snaefellsjokull": {
    "desc": "Snæfellsjökull ist ein majestätischer, gletscherbedeckter Stratovulkan, der die Spitze der Halbinsel Snæfellsnes im Westen Islands dominiert. Weltweite Berühmtheit erlangte er als Tor zur Unterwelt in Jules Vernes Roman 'Die Reise zum Mittelpunkt der Erde'. Noch heute umgibt den Vulkan eine Aura von Mystik, und viele betrachten ihn als einen der wichtigsten Energiepunkte der Erde. Der 700.000 Jahre alte Vulkan ist seit etwa 200 n. Chr. nicht mehr ausgebrochen. Das gesamte umliegende Gebiet ist als Snæfellsjökull-Nationalpark geschützt, der sich als einziger Nationalpark Islands bis ans Meer erstreckt.",
    "facts": [
      "Diente als Inspiration für Jules Vernes 'Reise zum Mittelpunkt der Erde'.",
      "Ein gletscherbedeckter Stratovulkan, der die Halbinsel Snæfellsnes überragt.",
      "Das Zentrum des einzigen Nationalparks in Island, der bis an die Küste reicht.",
      "Gilt in esoterischen Kreisen als eines der großen energetischen Zentren der Welt."
    ]
  },
  "nature-kirkjufell": {
    "desc": "Kirkjufell, an der Nordküste der Halbinsel Snæfellsnes gelegen, ist wohl der ikonischste und am meisten fotografierte Berg Islands. Seine konische, fast perfekt symmetrische Form und seine isolierte Lage am Meer machen ihn sofort erkennbar. Sein Name bedeutet 'Kirchberg', da er an einen Kirchturm erinnert. Seine Beliebtheit schoss in die Höhe, nachdem er in der Serie 'Game of Thrones' als Berg in Pfeilspitzenform auftauchte. Das klassische Foto fängt den Berg oft mit dem kleinen Wasserfall Kirkjufellsfoss im Vordergrund ein. Das Besteigen ist aufgrund der Steilheit äußerst gefährlich.",
    "facts": [
      "Gilt als der am meisten fotografierte Berg auf ganz Island.",
      "Wurde als 'Pfeilspitzen-Berg' in der Serie 'Game of Thrones' weltberühmt.",
      "Die ikonische konische Form erinnert an ein majestätisches Kirchendach.",
      "Oftmals in Kombination mit dem malerischen Wasserfall Kirkjufellsfoss fotografiert."
    ]
  },
  "nature-godafoss": {
    "desc": "Goðafoss, der 'Wasserfall der Götter', ist einer der schönsten und historisch bedeutendsten Wasserfälle Islands. Er befindet sich im Norden des Landes und wird vom Fluss Skjálfandafljót gebildet, der 12 Meter tief über eine 30 Meter breite, halbrunde Felsformation fällt. Sein Name ist eng mit einem Schlüsselereignis der isländischen Geschichte verbunden: Im Jahr 1000 beschloss der Gesetzessprecher des Alþingi, dass Island das Christentum annehmen sollte. Der Legende nach warf er bei seiner Rückkehr die Statuen der nordischen heidnischen Götter symbolisch in den Wasserfall.",
    "facts": [
      "Trägt den Namen 'Wasserfall der Götter' aufgrund einer historischen Legende.",
      "Das Wasser stürzt in einer eleganten Hufeisenform etwa 12 Meter in die Tiefe.",
      "Symbolisiert Islands friedlichen Übergang vom Heidentum zum Christentum.",
      "Zählt zu den schönsten Naturwundern im rauen Norden Islands."
    ]
  },
  "nature-askja": {
    "desc": "Askja ist eine gewaltige Vulkancaldera im extrem isolierten Herzen des nördlichen isländischen Hochlands. Die trockene, mondähnliche Landschaft ist so fremdartig, dass die Apollo-Astronauten der NASA hier für ihre Mondmissionen trainierten. Die Hauptcaldera erstreckt sich über 50 Quadratkilometer. In ihr liegt der See Öskjuvatn, Islands zweittiefster See, der nach einem massiven Ausbruch im Jahr 1875 entstand. Direkt daneben liegt der kleinere Krater Víti ('Hölle'), der warmes, milchig-blaues Geothermalwasser enthält, in dem Besucher sogar baden können. Die Anreise erfordert ein 4x4-Fahrzeug.",
    "facts": [
      "Die unwirtliche Mondlandschaft diente als Trainingsgelände für Apollo-Astronauten.",
      "Beherbergt den zweittiefsten See Islands, der durch eine Eruption entstand.",
      "Der benachbarte Víti-Krater bietet milchig-blaues Wasser zum Baden.",
      "Extrem entlegene Hochlandregion, die nur mit Geländewagen erreichbar ist."
    ]
  },
  "nature-husavik": {
    "desc": "Húsavík ist ein charmantes Fischerstädtchen an den Ufern der Skjálfandi-Bucht, das sich zu Recht den Ruf als europäische 'Hauptstadt der Walbeobachtung' erworben hat. Günstige Bedingungen in der Bucht locken in den Sommermonaten eine beeindruckende Vielzahl von Walen an, darunter Buckelwale, Zwergwale und sogar Blauwale. Die Erfolgsquote der Touren ist außergewöhnlich hoch. Die Stadt selbst ist malerisch, mit einem lebendigen Hafen und einer wunderschönen Holzkirche. Ihre Popularität stieg noch weiter, nachdem sie im Netflix-Film 'Eurovision Song Contest' eine zentrale Rolle spielte.",
    "facts": [
      "Gilt weltweit als die europäische 'Hauptstadt der Walbeobachtung'.",
      "Die Skjálfandi-Bucht bietet exzellente Bedingungen zur Sichtung großer Bartenwale.",
      "Bekannt für seine malerische, traditionelle Holzkirche am Hafen.",
      "Erlangte durch den Netflix-Hit 'Eurovision Song Contest' noch größere Bekanntheit."
    ]
  },
  "nature-dyrholaey": {
    "desc": "Dyrhólaey, 'die Insel mit dem Türloch', ist ein kleines Vorgebirge vulkanischen Ursprungs, berühmt für seinen riesigen, vom Ozean ausgewaschenen Steinbogen. In der Nähe des Dorfes Vík gelegen, bildet es den südlichsten Punkt des isländischen Festlands. Die Szenerie ist atemberaubend und bietet Panoramablicke in alle Richtungen: nach Norden zum Mýrdalsjökull, nach Osten zu den Reynisdrangar-Felsen und nach Westen entlang der Küste. Im Sommer ist Dyrhólaey ein Paradies für Vogelliebhaber und dient als Brutstätte für Tausende von Papageientauchern. Ein malerischer Leuchtturm krönt das Vorgebirge.",
    "facts": [
      "Bildet den südlichsten Punkt des isländischen Festlands.",
      "Ein markanter Felsbogen im Meer ist das Markenzeichen dieses Vorgebirges.",
      "Dient in den Sommermonaten als riesige Brutstätte für Papageientaucher.",
      "Ein malerischer, alter Leuchtturm thront spektakulär auf den Klippen."
    ]
  },
  "nature-hverir": {
    "desc": "Hverir, auch bekannt als Námaskarð, ist eine surreale Landschaft und eines der aktivsten Geothermalgebiete Islands. Am Fuße des Berges Námafjall nahe dem Mývatn-See gelegen, ist das Gebiet aufgrund des sauren Bodens und der hohen Temperaturen völlig vegetationslos. Hier scheint die Erde zu kochen: Graue Schlammtöpfe blubbern, Fumarolen zischen laut und entlassen schwefelhaltige Gase, und der Boden leuchtet in Gelb-, Rot- und Grüntönen. Der intensive Geruch nach Schwefel ist allgegenwärtig. Markierte Wege führen Besucher sicher durch diese faszinierende, aber gefährliche Zone.",
    "facts": [
      "Eines der heißesten und aktivsten Geothermalgebiete auf Island.",
      "Die karge Mondlandschaft ist geprägt von brodelnden Schlammtöpfen.",
      "Zischende Fumarolen entlassen kontinuierlich starke Schwefelgase.",
      "Starke mineralische Ablagerungen färben den Boden in intensiven Tönen."
    ]
  },
  "nature-latrabjarg": {
    "desc": "Látrabjarg, an der westlichsten Spitze der Westfjorde gelegen, ist ein monumentaler Felsen und ein Paradies für Vogelliebhaber. Mit einer Länge von 14 Kilometern und Höhen von bis zu 441 Metern ist er einer der größten Vogelfelsen Europas. Im Sommer nisten hier Millionen von Seevögeln, darunter die größte Tordalken-Kolonie der Welt. Die Hauptattraktion sind jedoch die Papageientaucher. Da sie geschützt und an Menschen gewöhnt sind, können Fotografen oft bis auf wenige Meter herankommen. Zudem markiert Látrabjarg den westlichsten Punkt Europas, wenn man die Azoren ausnimmt.",
    "facts": [
      "Markiert den westlichsten Punkt Europas (ohne die Azoren).",
      "Einer der massivsten und größten Vogelfelsen des gesamten Kontinents.",
      "Die hier nistenden Papageientaucher gelten als extrem wenig scheu.",
      "Beherbergt im Sommer die größte Tordalken-Kolonie weltweit."
    ]
  },
  "nature-fjaðrárgljúfur": {
    "desc": "Fjaðrárgljúfur ist eine spektakuläre, gewundene Schlucht, die über Jahrtausende vom Fluss Fjaðrá in das Gestein gegraben wurde. Die im Südosten Islands gelegene Schlucht ist bis zu 100 Meter tief und etwa 2 Kilometer lang. Ihre steilen, moosbewachsenen Wände und ungewöhnlichen Felsformationen schaffen eine Landschaft von ätherischer Schönheit. Ein gut gepflegter Pfad schlängelt sich am oberen Rand der Schlucht entlang und bietet fantastische Aussichtspunkte. Nachdem Justin Bieber 2015 hier ein Musikvideo drehte, stiegen die Besucherzahlen so extrem an, dass die Schlucht zeitweise gesperrt werden musste.",
    "facts": [
      "Eine gewundene, bis zu 100 Meter tiefe Flussschlucht im Südosten Islands.",
      "Ihre steilen Wände sind mit tiefgrünem, weichem Moos bedeckt.",
      "Ein Musikvideo von Justin Bieber löste 2015 einen massiven Touristenansturm aus.",
      "Ein Fußweg am Rand bietet spektakuläre Einblicke in die engen Windungen."
    ]
  },
  "nature-viti": {
    "desc": "Der Víti-Krater ('Hölle' auf Isländisch) ist ein Explosionskrater, der sich innerhalb der riesigen Caldera des Askja-Vulkans im Hochland befindet. Er entstand während des kataklysmischen Ausbruchs von 1875. Der Krater hat einen Durchmesser von etwa 150 Metern und beherbergt einen geothermalen See. Sein Wasser leuchtet aufgrund des hohen Kieselsäure- und Mineralstoffgehalts milchig-blau. Die Wassertemperatur schwankt, liegt aber oft zwischen 20 und 30 Grad Celsius, was mutigen Besuchern ein unvergessliches Bad in einem aktiven Vulkan ermöglicht. Der Schwefelgeruch ist stark und der Abstieg steil.",
    "facts": [
      "Ein markanter Explosionskrater innerhalb der gewaltigen Askja-Caldera.",
      "Entstand durch einen kataklysmischen Vulkanausbruch im Jahr 1875.",
      "Das milchig-blaue Kraterwasser erreicht Temperaturen von 20 bis 30 Grad Celsius.",
      "Bietet Abenteurern die seltene Möglichkeit, direkt in einem Vulkan zu baden."
    ]
  },
  "nature-hvitserkur": {
    "desc": "Hvítserkur ist ein 15 Meter hoher Basaltmonolith, der sich an der Ostküste der Halbinsel Vatnsnes direkt aus dem Meer erhebt. Seine bizarre Form mit zwei Löchern an der Basis hat zu vielen Interpretationen geführt: Einige sehen einen trinkenden Drachen, andere einen Elefanten oder Dinosaurier. Einer lokalen Legende zufolge handelt es sich um einen Troll, der von der Sonne versteinert wurde. Sein Name bedeutet 'Weißes Hemd', was auf den Guano der hier nistenden Vögel zurückzuführen ist. Die Basis des Felsens wurde mit Beton verstärkt, um ihn vor der permanenten Meereserosion zu schützen.",
    "facts": [
      "Ein 15 Meter hoher, ungewöhnlich geformter Basaltfelsen direkt im Meer.",
      "Die markante Form erinnert viele Betrachter an einen trinkenden Drachen.",
      "Der Name 'Weißes Hemd' verweist auf die weißen Spuren der nistenden Seevögel.",
      "Wurde an der Basis künstlich verstärkt, um der starken Meereserosion zu trotzen."
    ]
  },
  "nature-perlan": {
    "desc": "Perlan ('Die Perle') ist eines der markantesten Gebäude Reykjavíks, gelegen auf dem Hügel Öskjuhlíð. Die Struktur besteht aus einer riesigen Glaskuppel, die auf sechs massiven Heißwassertanks ruht, die einst die Stadt versorgten. Heute ist Perlan ein spektakuläres Kultur- und Ausstellungszentrum. Es beherbergt interaktive Ausstellungen über Islands Naturwunder, darunter eine realistische Eishöhlen-Nachbildung und ein modernes Planetarium. Die 360-Grad-Aussichtsplattform im vierten Stock bietet einen der besten Panoramablicke auf Reykjavík, das Meer und die umliegenden Berge.",
    "facts": [
      "Eine ikonische Glaskuppel, die auf sechs riesigen alten Heißwassertanks thront.",
      "Beherbergt ein modernes interaktives Naturkundemuseum und ein Planetarium.",
      "Bietet eine künstlich erschaffene, realistische Eishöhle zur Erkundung.",
      "Die 360-Grad-Aussichtsplattform bietet Panoramablicke über die gesamte Hauptstadt."
    ]
  },
  "hist-althingi": {
    "desc": "Der Lögberg, oder 'Gesetzesfelsen', ist das historische Herz des Þingvellir-Nationalparks und einer der heiligsten Orte der isländischen Nation. Genau an dieser Stelle trat ab 930 n. Chr. das Alþingi, die Nationalversammlung der Wikinger, zusammen. Von diesem Felsen aus rezitierte der Gesetzessprecher den versammelten Häuptlingen die Gesetze des Landes. Er war über 300 Jahre lang das legislative und judikative Zentrum Islands. Obwohl der genaue Standort des Felsens unter Historikern umstritten ist, wird er in der Almannagjá-Schlucht vermutet. Heute markiert eine isländische Flagge diesen Geburtsort der isländischen Demokratie.",
    "facts": [
      "Der Ort, an dem im Jahr 930 n. Chr. das isländische Parlament gegründet wurde.",
      "Der Gesetzessprecher rezitierte von diesem Felsen aus die Gesetze für alle Häuptlinge.",
      "Fungierte über 300 Jahre lang als das politische Zentrum der frühen Isländer.",
      "Eine wehende isländische Flagge markiert heute den mutmaßlichen historischen Standort."
    ]
  },
  "hist-skalholt": {
    "desc": "Über 700 Jahre lang war Skálholt die religiöse, kulturelle und politische Hauptstadt Islands. Im Jahr 1056 wurde es Sitz des ersten Bistums des Landes und entwickelte sich zu einem Macht- und Bildungszentrum. Islands erste offizielle Schule wurde hier gegründet, und das hiesige Skriptorium war für das Verfassen und Kopieren vieler wichtiger Sagas verantwortlich. Im Laufe der Jahrhunderte standen an diesem Ort mehrere Kirchen, darunter eine gewaltige mittelalterliche Holzkathedrale. Heute steht dort eine 1963 eingeweihte moderne Kathedrale, die als kulturelles und spirituelles Zentrum dient.",
    "facts": [
      "Fungierte über 700 Jahre lang als das religiöse und politische Zentrum Islands.",
      "Im Jahr 1056 wurde hier das erste isländische Bistum überhaupt gegründet.",
      "Beherbergte die erste offizielle Schule und ein extrem wichtiges Skriptorium.",
      "Die heutige, modern anmutende Kathedrale wurde erst im Jahr 1963 eingeweiht."
    ]
  },
  "hist-hofsstadir": {
    "desc": "Hofstaðir, in der Nähe des Mývatn-Sees gelegen, ist eine der wichtigsten archäologischen Stätten der Wikingerzeit in Island. Hier wurden die Ruinen eines der größten jemals im Land entdeckten Langhäuser ausgegraben. Das Gebäude war über 40 Meter lang und besaß eine außergewöhnlich große Festhalle. Funde von unzähligen Rinderschädeln lassen darauf schließen, dass Hofstaðir nicht nur ein Bauernhof, sondern ein wichtiges rituelles Zentrum war, in dem große, heidnische Feste stattfanden. Die Stätte bietet heute unschätzbare Einblicke in das soziale und religiöse Leben der frühen Siedler.",
    "facts": [
      "Eine der größten archäologischen Ausgrabungsstätten der Wikingerzeit in Island.",
      "Beherbergt die Ruinen eines über 40 Meter langen, beeindruckenden Langhauses.",
      "Viele gefundene Rinderschädel deuten auf ausgiebige heidnische Ritualfeste hin.",
      "Gibt heute detaillierte Einblicke in das Gemeinschaftsleben der ersten Siedler."
    ]
  },
  "hist-glaumbaer": {
    "desc": "Das Torfhofmuseum Glaumbær in der Region Skagafjörður bietet einen authentischen und faszinierenden Einblick in das ländliche Leben vergangener Jahrhunderte auf Island. Der Komplex besteht aus 13 miteinander verbundenen Torfhäusern. Diese Bauweise aus Stein, Holz und Grassoden sorgte für eine hervorragende Isolierung gegen das raue Klima. Jeder Raum hatte seinen bestimmten Zweck, von der Küche bis zum gemeinsamen Schlafraum (Baðstofa). Die heutigen Gebäude stammen aus dem 18. und 19. Jahrhundert, doch der Ort ist seit der Besiedlungszeit bewohnt. Der Besuch ist wie eine greifbare Reise in die isländische Vergangenheit.",
    "facts": [
      "Besteht aus 13 traditionell miteinander verbundenen historischen Torfhäusern.",
      "Die Wände aus dicken Grassoden boten extrem gute Isolierung vor dem rauen Winter.",
      "Die erhaltenen Gebäude stammen größtenteils aus dem 18. und 19. Jahrhundert.",
      "Bietet Besuchern einen hochgradig authentischen Einblick in das historische Bauernleben."
    ]
  },
  "hist-videy": {
    "desc": "Die Insel Viðey, nur eine kurze Fährfahrt von Reykjavík entfernt, ist eine Oase der Ruhe, Geschichte und Kunst. Auf der Insel befindet sich Viðeyjarstofa, eines der ältesten Steingebäude Islands, das im 18. Jahrhundert für Skúli Magnússon erbaut wurde. Auch eine kleine Kirche, eine der ältesten des Landes, steht hier. In der modernen Zeit ist Viðey durch zeitgenössische Kunstwerke berühmt geworden, allen voran der 'Imagine Peace Tower'. Diese von Yoko Ono im Gedenken an John Lennon geschaffene Lichtinstallation projiziert jährlich von Oktober bis Dezember eine gewaltige Lichtsäule in den Himmel.",
    "facts": [
      "Beherbergt mit der Viðeyjarstofa eines der ältesten Steingebäude Islands.",
      "Heimat des berühmten 'Imagine Peace Tower', einer Lichtinstallation von Yoko Ono.",
      "Eine friedliche, naturverbundene Insel nur wenige Minuten von Reykjavík entfernt.",
      "Bietet eine einzigartige Mischung aus historischer Architektur und moderner Kunst."
    ]
  },
  "cult-hallgrimskirkja": {
    "desc": "Die Hallgrímskirkja ist das höchste und am stärksten wiedererkennbare Gebäude in Reykjavík und ein ikonisches Wahrzeichen der isländischen Hauptstadt. Diese lutherische Kirche mit ihrem einzigartigen expressionistischen Design dominiert die Skyline der Stadt. Ihre von Guðjón Samúelsson entworfene Architektur ist von den Naturformen Islands inspiriert, insbesondere von erkalteten Basaltsäulen. Der Bau dauerte 41 Jahre. Der 74,5 Meter hohe Turm bietet eine Aussichtsplattform mit beispiellosem Panoramablick über die Stadt. Im schlichten Inneren beeindruckt eine gigantische Orgel mit über 5.200 Pfeifen.",
    "facts": [
      "Das höchste und markanteste architektonische Wahrzeichen von Reykjavík.",
      "Das einzigartige Design ist stark von natürlichen, isländischen Basaltsäulen inspiriert.",
      "Der Bau der expressionistischen Kirche dauerte insgesamt beeindruckende 41 Jahre.",
      "Der hohe Turm bietet Besuchern einen unvergleichlichen 360-Grad-Blick über die Stadt."
    ]
  },
  "cult-harpa": {
    "desc": "Harpa ist ein modernes architektonisches Juwel, ein Konzerthaus und Konferenzzentrum am alten Hafen von Reykjavík. Das 2011 eingeweihte Gebäude wurde schnell zu einem Symbol der kulturellen Wiedergeburt Islands nach der Finanzkrise. Seine spektakuläre, vom Künstler Ólafur Elíasson entworfene Fassade besteht aus Tausenden von geometrischen Glaspaneelen, die das Licht wie Basaltsäulen oder Polarlichter reflektieren. Das Innere ist ebenso beeindruckend, mit vier Sälen, die jeweils ein eigenes Design und eigene Akustik aufweisen. Harpa ist die stolze Heimat des isländischen Sinfonieorchesters.",
    "facts": [
      "Ein hochmodernes architektonisches Meisterwerk direkt am alten Hafen von Reykjavík.",
      "Die spektakuläre Glasfassade spiegelt faszinierend das isländische Licht wider.",
      "Fungiert als offizielles Zuhause des gefeierten isländischen Sinfonieorchesters.",
      "Wurde als wichtiges Symbol des kulturellen Aufschwungs nach der Finanzkrise erbaut."
    ]
  },
  "cult-blue-lagoon": {
    "desc": "Die Blaue Lagune ist zweifellos Islands berühmteste Touristenattraktion, ein weltbekanntes Geothermalbad in einem Lavafeld auf der Reykjanes-Halbinsel. Das warme, mineralreiche Wasser stammt aus den Abflüssen des nahegelegenen Geothermalkraftwerks Svartsengi. Die einzigartige milchig-blaue Farbe entsteht durch den hohen Kieselsäuregehalt, der das Sonnenlicht stark reflektiert. Das Wasser mit einer Durchschnittstemperatur von 37–39 °C ist berühmt für seine heilenden Eigenschaften, insbesondere bei Hauterkrankungen. Besucher können im warmen Wasser entspannen und heilsame Kieselsäure-Schlammmasken genießen.",
    "facts": [
      "Die weltweit bekannteste und meistbesuchte Geothermalquelle in ganz Island.",
      "Die markante milchig-blaue Farbe des Wassers entsteht durch reichhaltige Kieselsäure.",
      "Das heiße Wasser ist nachweislich lindernd bei Hautkrankheiten wie Schuppenflechte.",
      "Die großen Becken liegen spektakulär eingebettet in raue, schwarze Lavafelder."
    ]
  },
  "city-egilsstadir-extra": {
    "desc": "Egilsstaðir ist das kommerzielle und administrative Herz Ostislands und ein wichtiger Verkehrsknotenpunkt für Reisende in den östlichen Fjorden. Die Stadt liegt an den fruchtbaren Ufern des Flusses Lagarfljót und bietet eine perfekte Mischung aus urbanem Komfort und einfachem Zugang zur unberührten Natur. Besucher können den nahegelegenen Hallormsstaðaskógur, Islands größten Nationalwald, erkunden oder eine malerische Fahrt zum hoch aufragenden Hengifoss-Wasserfall unternehmen. Mit ihrem regionalen Flughafen ist die Stadt leicht erreichbar und dient als idealer Ausgangspunkt für Abenteuer in den rauen Landschaften Ostislands.",
    "facts": [
      "Fungiert als logistisches und administratives Zentrum im Osten Islands.",
      "Liegt strategisch günstig an den fruchtbaren Ufern des Flusses Lagarfljót.",
      "Bietet direkten Zugang zu Islands größtem Waldgebiet, dem Hallormsstaðaskógur.",
      "Besitzt einen eigenen Flughafen und ist das Tor zu den weiten Ostfjorden."
    ]
  },
  "city-faskrudsfjordur-extra": {
    "desc": "Fáskrúðsfjörður ist ein malerisches Dorf in Ostisland, berühmt für seine historischen Verbindungen zu französischen Fischern, die in vergangenen Jahrhunderten hier arbeiteten. Dieses Erbe ist noch heute durch zweisprachige Straßenschilder in isländischer und französischer Sprache sichtbar. Das Dorf beherbergt ein bemerkenswertes Kulturzentrum in einem restaurierten ehemaligen französischen Krankenhaus, das die raue Geschichte der Fischer im Nordatlantik erzählt. Eingebettet in einen spektakulären Fjord bietet Fáskrúðsfjörður atemberaubende Panoramen und ist ideal für geschichtsinteressierte Naturliebhaber.",
    "facts": [
      "Bekannt für seine enge historische Verbindung zu französischen Nordmeerfischern.",
      "Die Straßenschilder im Dorf sind zur Erinnerung zweisprachig (Isländisch und Französisch).",
      "Beherbergt ein modernes Museum in einem alten, restaurierten französischen Krankenhaus.",
      "Liegt malerisch eingebettet in einen tiefen und visuell spektakulären Fjord."
    ]
  }
}

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, data in DATA.items():
        pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?descriptionAdvanced:\s*\{[^}]*?)(de:\s*"")(.*?factsAdvanced:\s*\{[^}]*?)(de:\s*\[\])'
        facts_str = "de: [\n          " + ",\n          ".join(f'"{f}"' for f in data["facts"]) + "\n        ]"
        
        def repl(m):
            return m.group(1) + f'de: "{data["desc"]}"' + m.group(3) + facts_str
            
        new_content, count = re.subn(pattern, repl, content, flags=re.DOTALL)
        if count > 0:
            content = new_content
            print(f"Updated {poi_id} in {filepath}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('lib/visualLab/data/icelandPoi.ts')
update_file('lib/visualLab/data/poiExtraIcelandCities.ts')

