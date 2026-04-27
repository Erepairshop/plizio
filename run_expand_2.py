from expand_poi import expand_poi

data = [
    ("river-harmas-koros-extra",
     "Der Hármas-Körös (Drei-Kreisch) ist einer der malerischsten und ökologisch wertvollsten Flüsse in der südöstlichen Tiefebene Ungarns. Er entsteht durch den Zusammenfluss der Kettős-Körös und der Sebes-Körös bei Gyomaendrőd und mäandert auf einer Länge von etwa 91 Kilometern bis zur Mündung in die Theiß bei Csongrád. Der Fluss ist bekannt für seine zahlreichen Altarmarme, die nach den großflächigen Regulierungen im 19. Jahrhundert entstanden sind und heute ein Paradies für Angler, Wassersportler und Naturschützer bilden. Die Ufer sind von dichten Galeriewäldern gesäumt, die einen wichtigen Lebensraum für seltene Vogelarten und Fischbestände bieten. Für die Region ist der Hármas-Körös nicht nur eine wichtige Wasserstraße, sondern auch ein Symbol für die unberührte Natur des ungarischen Alföld.",
     [
        "Der Hármas-Körös entsteht aus der Vereinigung von Kettős-Körös und Sebes-Körös.",
        "Der Fluss mündet nach 91 Kilometern bei Csongrád in die Theiß.",
        "Die Region verfügt über eines der ausgedehntesten Altwassersysteme Ungarns.",
        "Die Ufervegetation besteht hauptsächlich aus Silberweiden und Schwarzpappeln.",
        "Der Fluss ist ein wichtiges Habitat für den geschützten Wolgazander und die Barbe.",
        "Historisch war der Flussweg entscheidend für den Holztransport aus den Karpaten.",
        "Zahlreiche geschützte Vogelarten wie der Nachtreiher nisten in den Uferwäldern.",
        "Die Wasserqualität gilt aufgrund geringer industrieller Belastung als sehr gut."
     ]),
    ("river-sebes-koros-extra",
     "Die Sebes-Körös (Schnelle Kreisch) macht ihrem Namen alle Ehre, da sie im Vergleich zu anderen Flüssen der Tiefebene eine deutlich höhere Fließgeschwindigkeit aufweist. Sie entspringt in den Bergen Siebenbürgens (Rumänien) und bringt kühles, sauerstoffreiches Wasser in die ungarische Ebene. Diese Eigenschaft macht sie zu einem einzigartigen Ökosystem, in dem Fischarten gedeihen, die sonst eher in Gebirgsbächen zu finden sind. Der Flussabschnitt im Komitat Békés ist geprägt von Kiesbänken und klarem Wasser, was ihn bei Badegästen und Kanufahrern gleichermaßen beliebt macht. Die Sebes-Körös spielt zudem eine zentrale Rolle in der regionalen Wasserwirtschaft und speist mehrere wichtige Kanäle der Umgebung.",
     [
        "Die Sebes-Körös hat eine Gesamtlänge von 209 Kilometern, davon etwa 59 km in Ungarn.",
        "Sie ist der einzige Fluss in der Tiefebene mit einem nennenswerten Gefälle und Kiesgrund.",
        "Der Fluss ist bekannt für sein Vorkommen der Bachforelle in den oberen Abschnitten.",
        "Bei Gyomaendrőd vereinigt sie sich mit der Kettős-Körös zum Hármas-Körös.",
        "Das Wasser der Sebes-Körös gilt als eines der saubersten Fließgewässer des Landes.",
        "Der Fluss durchquert das Naturschutzgebiet Körös-Maros-Nationalpark.",
        "An den Ufern finden sich seltene Libellenarten, die sauberes Fließwasser benötigen.",
        "Historisch trieb die Strömung des Flusses zahlreiche Wassermühlen in der Region an."
     ]),
    ("lake-biharugrai-tavak-extra",
     "Die Biharugraer Teiche stellen das zweitgrößte künstliche Fischteichsystem Ungarns dar und sind ein Ort von internationaler ornithologischer Bedeutung. Gelegen im östlichsten Zipfel des Komitats Békés, direkt an der rumänischen Grenze, erstreckt sich diese Wasserlandschaft über Tausende von Hektar. Ursprünglich zur Fischzucht angelegt, haben sich die Teiche zu einem der wichtigsten Rastplätze für Zugvögel auf der europäischen Route entwickelt. Während der Migrationsperioden können hier Zehntausende von Wildgänsen und Kranichen beobachtet werden. Das Gebiet ist Teil des Körös-Maros-Nationalparks und bietet durch Aussichtstürme und Lehrpfade exzellente Möglichkeiten zur Naturbeobachtung, wobei der Schutz der sensiblen Brutgebiete stets im Vordergrund steht.",
     [
        "Das Teichsystem umfasst eine Fläche von insgesamt rund 1.900 Hektar Wasserfläche.",
        "Es ist als Ramsar-Gebiet von internationaler Bedeutung für den Vogelschutz gelistet.",
        "Über 300 verschiedene Vogelarten wurden in dem Gebiet bisher nachgewiesen.",
        "Die Teiche wurden Anfang des 20. Jahrhunderts in ehemaligen Sumpfgebieten angelegt.",
        "Biharugra ist bekannt als wichtigster Brutplatz des geschützten Löfflers in Ungarn.",
        "Die Fischzucht (vorwiegend Karpfen) erfolgt heute unter ökologischen Gesichtspunkten.",
        "Im Herbst dienen die abgelassenen Teiche als reichhaltiges Buffet für Watvögel.",
        "Ein lokales Museum informiert über die Geschichte der Fischerei und die Naturwerte."
     ]),
    ("forest-malyvadi-erdo-extra",
     "Der Mályvádi-erdő ist eines der größten und wertvollsten zusammenhängenden Waldgebiete der ungarischen Tiefebene. Gelegen im Grenzgebiet zwischen Ungarn und Rumänien bei Gyula, ist dieser Wald ein Relikt der ehemaligen riesigen Auenwälder des Körös-Gebiets. Er besteht hauptsächlich aus alten Stieleichen und Eschen, die auf dem fruchtbaren Schwemmlandboden prächtig gedeihen. Der Wald ist nicht nur forstwirtschaftlich, sondern vor allem ökologisch von enormem Wert, da er als Refugium für den Rothirsch, das Wildschwein und zahlreiche seltene Vogelarten dient. Die Abgeschiedenheit und die Größe des Gebiets verleihen dem Mályvádi-Wald eine majestätische Stille, die ihn zu einem Highlight für Naturfotografen und Wanderer macht, die die ursprüngliche Wildnis suchen.",
     [
        "Der Mályvádi-erdő umfasst eine Fläche von über 3.000 Hektar geschlossenen Waldes.",
        "Er gilt als das zweitgrößte zusammenhängende Waldgebiet im ungarischen Alföld.",
        "Der Wald beherbergt eine der bedeutendsten Damwild-Populationen des Landes.",
        "Ein Großteil des Gebiets gehört zum Körös-Maros-Nationalpark.",
        "Hier finden sich monumentale Einzeleichen, die mehrere hundert Jahre alt sind.",
        "Der Wald spielt eine wichtige Rolle als Genpool für heimische Baumarten.",
        "Im Frühjahr ist der Waldboden von einem Teppich aus Blausternchen und Buschwindröschen bedeckt.",
        "Zahlreiche forstliche Lehrpfade informieren über die nachhaltige Bewirtschaftung des Auenwaldes."
     ]),
    ("river-kettos-koros-extra",
     "Die Kettős-Körös (Doppel-Kreisch) ist ein bedeutender Flussabschnitt im Südosten Ungarns, der durch den Zusammenfluss der Fehér-Körös (Weiße Kreisch) und der Fekete-Körös (Schwarze Kreisch) entsteht. Auf ihrem 37 Kilometer langen Weg durch das Komitat Békés prägt sie die Landschaft durch ihre ruhige Strömung und die von hohen Dämmen geschützten Uferbereiche. Der Fluss ist bekannt für seine natürliche Schönheit und die gut ausgebauten Möglichkeiten für den Wassertourismus; Kanufahrer schätzen die sanften Kurven und die dichte Vegetation der Auenwälder. Historisch war die Kettős-Körös oft Ursache für schwere Überschwemmungen, was zum Bau eines der beeindruckendsten Deichsysteme Ungarns führte, das heute auch als Radweg dient.",
     [
        "Die Kettős-Körös entsteht bei der Stadt Doboz aus der Weißen und Schwarzen Kreisch.",
        "Die Gesamtlänge dieses Flussabschnitts beträgt genau 37,3 Kilometer.",
        "Bei Gyomaendrőd vereinigt sie sich mit der Sebes-Körös zur Hármas-Körös.",
        "Die Dämme entlang des Flusses zählen zu den höchsten und sichersten in Ungarn.",
        "Der Fluss durchfließt die Stadt Békés, wo sich ein bekannter Jachthafen befindet.",
        "Die Altwasserarme der Kettős-Körös sind beliebte Ziele für Sportangler.",
        "In den Auenwäldern leben zahlreiche geschützte Käferarten wie der Hirschkäfer.",
        "Der Flussweg ist Teil einer grenzüberschreitenden Wasserroute nach Rumänien."
     ]),
    ("mountain-istallos-ko-extra",
     "Der Istállós-kő war lange Zeit als der höchste Punkt des Bükk-Gebirges bekannt, bevor neuere Messungen den benachbarten Szilvási-kő mit 959 Metern knapp davor sahen. Dennoch bleibt der Istállós-kő einer der markantesten und meistbesuchten Gipfel Nordungarns. Berühmt ist er vor allem für die Istállós-kő-Höhle, die sich an seinem Hang befindet und eine der wichtigsten archäologischen Fundstätten des Landes darstellt. Hier wurden Reste der Aurignacien-Kultur und Knochen von eiszeitlichen Tieren entdeckt. Der Aufstieg zum Gipfel führt durch dichte, majestätische Buchenwälder, die typisch für den Bükk-Nationalpark sind, und bietet am Ziel einen weiten Ausblick über das Kalksteinplateau und die tiefen Täler des Gebirges.",
     [
        "Mit 958,1 Metern ist er der zweithöchste Gipfel des Bükk-Gebirges.",
        "Die Istállós-kő-Höhle ist ein geschütztes archäologisches Denkmal von Weltrang.",
        "In der Höhle wurde die älteste Knochenflöte der Welt (ca. 30.000 Jahre alt) gefunden.",
        "Der Berg besteht geologisch aus reinem Kalkstein aus der Trias-Zeit.",
        "Der Gipfelbereich ist Teil des streng geschützten Kerngebiets des Nationalparks.",
        "Der Wanderweg vom Tal Szalajka-völgy zum Gipfel gehört zu den steilsten Routen Ungarns.",
        "Die Flora umfasst seltene Gebirgspflanzen wie den Gelben Frauenschuh.",
        "Im Winter ist die Region ein schneesicheres Ziel für anspruchsvolle Schneeschuhwanderungen."
     ]),
    ("river-sajo-extra",
     "Die Sajó ist ein bedeutender Fluss in Nordungarn, der im slowakischen Erzgebirge entspringt und nach rund 230 Kilometern bei Tiszaújváros in die Theiß mündet. Der Fluss hat die Industriegeschichte der Region Miskolc maßgeblich geprägt, da seine Wasserkraft und die Transportwege die Ansiedlung von Eisenhütten und Fabriken begünstigten. Landschaftlich bietet die Sajó ein abwechslungsreiches Bild: von schroffen Hügellandschaften im Norden bis zu weiten Auenwiesen im unteren Verlauf. Trotz der industriellen Vergangenheit hat sich die Wasserqualität in den letzten Jahrzehnten deutlich verbessert, was die Rückkehr seltener Fischarten ermöglichte. Heute gewinnt die Sajó zunehmend an Bedeutung für den sanften Tourismus, insbesondere für Angler und Naturbeobachter in den unberührteren Abschnitten.",
     [
        "Die Gesamtlänge der Sajó beträgt 229 km, davon verlaufen 125 km auf ungarischem Gebiet.",
        "Der größte Nebenfluss der Sajó in Ungarn ist die Hernád.",
        "Die Sajó war historisch der wichtigste Transportweg für die Stahlindustrie von Miskolc.",
        "In den Schotterbänken des Oberlaufs brüten seltene Uferschwalben.",
        "Der Fluss ist bekannt für seine Bestände an Nasen und großen Barben.",
        "Das Sajó-Tal bildet eine wichtige klimatische und ökologische Schneise im Bergland.",
        "Bei Sajószentpéter finden sich beeindruckende Reste von historischen Flussregulierungen.",
        "Der Fluss mündet direkt gegenüber dem Chemiekomplex von Tiszaújváros in die Theiß."
     ]),
    ("river-hernad-extra",
     "Die Hernád ist einer der wildesten und unberührtesten Flüsse Ungarns. Sie entspringt in der Slowakei am Fuße der Niederen Tatra und fließt im Nordosten Ungarns durch das Hernád-Tal, bevor sie in die Sajó mündet. Was die Hernád so besonders macht, sind ihre steilen Löss- und Schotterwände sowie die vielen naturbelassenen Windungen, die bisher kaum durch Regulierungen begradigt wurden. Diese Dynamik macht sie zu einem herausfordernden Revier für erfahrene Kanufahrer. Ökologisch ist der Fluss von unschätzbarem Wert, da seine Uferwände ideale Brutplätze für Eisvögel und Bienenfresser bieten. Das Hernád-Tal ist zudem eine historisch bedeutsame Region, in der sich zahlreiche mittelalterliche Kirchen und kleine Dörfer an den Hängen des Zemplén-Gebirges aneinanderreihen.",
     [
        "Die Hernád hat eine Länge von 286 Kilometern, wovon 118 Kilometer in Ungarn liegen.",
        "Der Fluss bildet über weite Strecken die natürliche Grenze zwischen dem Bergland und der Ebene.",
        "In den steilen Prallhängen nisten eine der größten Bienenfresser-Kolonien des Landes.",
        "Die Hernád ist ein Paradies für Fliegenfischer, bekannt für ihren Reichtum an Äschen.",
        "Aufgrund der starken Strömung und Untiefen ist der Fluss für die Schifffahrt ungeeignet.",
        "Das erste Wasserkraftwerk Ungarns wurde 1895 an der Hernád bei Gibárt errichtet.",
        "Die Auenlandschaft ist Teil des Natura 2000-Netzwerks zum Schutz der Biodiversität.",
        "In der Nähe des Flusses bei Vizsoly wurde die erste vollständige ungarische Bibel gedruckt."
     ]),
    ("lake-lazberci-viztarozo-extra",
     "Der Lázbérci-víztározó ist einer der schönsten künstlichen Seen Ungarns, eingebettet in die bewaldeten Täler des Bükk-Gebirges und des Uppony-Gebirges. Er wurde in den 1960er Jahren primär zur Sicherung der Trinkwasserversorgung der Industriestädte im Sajó-Tal angelegt. Aufgrund dieser Funktion ist der See streng geschützt: Baden und Wassersport sind verboten, was ihm eine außergewöhnliche Stille und kristallklares Wasser bewahrt hat. Die Umgebung ist ein Wanderparadies; besonders beeindruckend ist die Schlucht von Uppony am westlichen Ende des Sees, wo steile Felswände direkt aus dem Wasser ragen. Der See ist zudem ein bekanntes Ziel für Sportangler, die unter strengen Auflagen die reichen Fischbestände in dieser malerischen Kulisse befischen dürfen.",
     [
        "Der Stausee bedeckt eine Fläche von ca. 77 Hektar und fasst 6,2 Millionen Kubikmeter Wasser.",
        "Er wird hauptsächlich durch den Bán-Bach und den Csernely-Bach gespeist.",
        "Die Staumauer ist 20 Meter hoch und wurde 1968 fertiggestellt.",
        "Der See liegt inmitten des Lázbérci-Landschaftsschutzgebiets.",
        "In der Schlucht von Uppony findet man seltene Kalksteinpflanzen und Fledermaushöhlen.",
        "Die Wasserqualität wird täglich überwacht, da er als strategische Trinkwasserreserve dient.",
        "Um den See führt ein malerischer Asphaltweg, der ideal für ruhige Radtouren ist.",
        "Wissenschaftler untersuchen hier die langfristige Entwicklung von Ökosystemen in Stauseen."
     ]),
    ("river-bodrog-extra",
     "Der Bodrog ist ein einzigartiger Fluss in der weltberühmten Weinregion Tokaj-Hegyalja. Er entsteht durch den Zusammenfluss mehrerer Flüsse in der Slowakei und mündet bei der Stadt Tokaj in die Theiß. Das Besondere am Bodrog ist sein extrem geringes Gefälle, was dazu führt, dass er bei Hochwasser der Theiß seine Fließrichtung umkehren kann – ein seltenes Naturphänomen. Der Fluss ist gesäumt von ausgedehnten Sumpfwiesen und Weidenwäldern, die ein wichtiges Refugium für Wasservögel bilden. Für Touristen ist der Bodrog ideal, da seine sanfte Strömung auch Anfängern sichere Kanutouren ermöglicht. Zudem bietet die Kombination aus Wassererlebnis und dem Besuch der historischen Weinkeller in Städten wie Sárospatak oder Bodrogkeresztúr ein unvergleichliches kulturelles Erlebnis.",
     [
        "Der Bodrog hat in Ungarn eine Länge von 52 Kilometern ohne nennenswerte Schleusen.",
        "Er ist einer der wenigen Flüsse Ungarns, die auf ihrer gesamten Länge schiffbar sind.",
        "Bei Bodrogkeresztúr befindet sich eines der wichtigsten Storchenschutzgebiete der Region.",
        "Der Fluss ist bekannt für das Phänomen der Rückwärtsfließung bei Theiß-Hochwasser.",
        "In Sárospatak führt der Fluss direkt an der berühmten Rákóczi-Burg vorbei.",
        "Die Bodrog-Auen (Bodrogzug) sind ein streng geschütztes Ramsar-Feuchtgebiet.",
        "Für Angler ist der Bodrog berühmt für seine riesigen Welse und Zander.",
        "Die traditionelle Schifffahrt auf dem Bodrog war früher entscheidend für den Weinhandel."
     ]),
    ("lake-feher-to-szeged-extra",
     "Der Szegedi Fehér-tó (Weißer See von Szeged) ist das größte Salzseesystem Ungarns und ein bedeutender Meilenstein auf den europäischen Vogelzugrouten. Er ist Teil des Kiskunság-Nationalparks und liegt nördlich der Stadt Szeged. Ursprünglich ein natürlicher Alkalisee, der im Sommer oft austrocknete, wurde er im 20. Jahrhundert zu einem komplexen Fischteichsystem umgestaltet. Trotz dieser menschlichen Eingriffe hat das Gebiet seinen ökologischen Wert behalten und ist heute ein Paradies für Tausende von Kranichen, die hier im Herbst auf ihrem Weg nach Süden rasten. Die weißen Salzausblühungen, die dem See seinen Namen gaben, sind noch immer an den Rändern sichtbar und zeugen vom speziellen Bodencharakter der südlichen Tiefebene.",
     [
        "Mit einer Fläche von rund 14 Quadratkilometern ist er das größte künstliche Teichsystem des Landes.",
        "Der See ist ein international anerkanntes Vogelschutzgebiet unter der Ramsar-Konvention.",
        "Während des herbstlichen Vogelzugs rasten hier bis zu 50.000 Kraniche gleichzeitig.",
        "Ein Aussichtsturm und der 'Sirály'-Lehrpfad ermöglichen Einblicke in die Vogelwelt.",
        "Die Fischzucht produziert jährlich Tonnen von hochwertigem Karpfen für den ungarischen Markt.",
        "Die Vegetation ist geprägt von salztoleranten Pflanzen wie dem Queller.",
        "Das Gebiet beherbergt seltene Säugetiere wie den Steppeniltis.",
        "Historisch lieferte der See Soda, das für die Seifenherstellung in Szeged genutzt wurde."
     ]),
    ("river-maros-torkolat-extra",
     "Die Mündung des Maros (Mureș) in die Theiß bei Szeged ist ein Ort von besonderer geografischer und ökologischer Bedeutung. Die Maros, die in den Ostkarpaten entspringt, bringt große Mengen an Sedimenten und Sand aus den Bergen mit, was im Mündungsbereich zu einer ständigen Veränderung der Uferlinien führt. Die Zusammenführung der 'blonden' Theiß und der oft trüberen Maros erzeugt ein faszinierendes Farbspiel im Wasser. Das Gebiet ist von dichten, urwaldähnlichen Auenwäldern umgeben, die als wichtiger ökologischer Korridor fungieren. Für die Bewohner von Szeged ist die Maros-Mündung ein beliebtes Ausflugsziel, besonders im Sommer, wenn die Sandbänke des Flusses zum Baden einladen und eine fast mediterrane Atmosphäre schaffen.",
     [
        "Die Maros ist mit 749 km Gesamtlänge der wichtigste Nebenfluss der Theiß.",
        "Im Mündungsbereich bildet der Fluss oft temporäre Sandinseln und flache Buchten.",
        "Die Auenwälder bestehen hier aus gigantischen Schwarzpappeln und Silberweiden.",
        "Das Gebiet ist ein wichtiger Laichplatz für Wanderfische wie den Sterlet.",
        "In der Nähe der Mündung befindet sich ein traditionelles Strandbad (Lapos) in Szeged.",
        "Die Sedimentfracht der Maros war früher ein wichtiges Baumaterial für die Region.",
        "Das Naturschutzgebiet schützt seltene Insekten wie die Theißblüte (Eintagsfliege).",
        "Historisch markierte die Mündung einen wichtigen Knotenpunkt für den Salzhandel aus Siebenbürgen."
     ]),
    ("lake-csaj-to-extra",
     "Der Csaj-tó ist ein ausgedehntes Fischteichsystem im Herzen des Pusztaszer-Landschaftsschutzgebiets, unweit des historischen Gedenkparks von Ópusztaszer. Er entstand durch die Urbarmachung ehemaliger Sumpfgebiete der Theiß und hat sich zu einem der stabilsten Ökosysteme der Region entwickelt. Der See besteht aus mehreren Becken, die durch Dämme getrennt sind und eine Vielfalt an Wassertiefen bieten, was wiederum eine breite Palette an Vogelarten anzieht. Besonders für die Beobachtung von Reihern, Löfflern und verschiedenen Entenarten ist der Csaj-tó unter Fachleuten berühmt. Die Kombination aus traditioneller Fischwirtschaft und aktivem Naturschutz macht diesen Ort zu einem Vorzeigemodell für nachhaltige Landnutzung im ungarischen Tiefland.",
     [
        "Das Teichsystem umfasst eine Gesamtfläche von etwa 800 Hektar.",
        "Der Csaj-tó ist Teil des europäischen Netzwerks Natura 2000.",
        "Hier befindet sich eine der größten Kormoran- und Reiherkolonien Südungarns.",
        "Die Teiche werden durch Kanäle aus der Theiß mit Frischwasser versorgt.",
        "Für Besucher gibt es spezielle Beobachtungshütten für die Naturfotografie.",
        "Botanisch interessant sind die ausgedehnten Röhrichte und Seekannenbestände.",
        "Der See ist ein wichtiger Tränkeplatz für das in der Puszta lebende Wild.",
        "Jährlich im Herbst findet hier das traditionelle Abfischen mit Volksfestcharakter statt."
     ]),
    ("river-tisza-martely-extra",
     "Der Mártélyi Holt-Tisza (Altarm der Theiß bei Mártély) ist einer der stimmungsvollsten und künstlerisch inspirierendsten Orte Südungarns. Nach der Regulierung der Theiß im 19. Jahrhundert blieb dieser Arm als stehendes Gewässer zurück und entwickelte sich zu einem Naturparadies. Die malerischen Ufer mit ihren uralten, ins Wasser hängenden Weiden haben Generationen von Malern der 'Schule von Alföld' als Motiv gedient. Heute ist Mártély ein staatlich anerkanntes Erholungsgebiet und ein Naturschutzgebiet von europäischer Bedeutung. Besucher schätzen die Kombination aus ruhigem Badestrand, exzellenten Angelmöglichkeiten und den gut markierten Lehrpfaden, die durch die geheimnisvolle Welt der Auenwälder führen.",
     [
        "Mártély war die erste Region in Ungarn, die als Landschaftsschutzgebiet ausgewiesen wurde.",
        "Der Altarm hat eine hufeisenförmige Gestalt und ist etwa 4,5 Kilometer lang.",
        "Die Region ist eng mit dem Namen des Malers János Tornyai verbunden.",
        "Ein 2,6 Kilometer langer Lehrpfad auf Holzstegen führt durch das Sumpfgebiet.",
        "In den flachen Zonen blüht im Sommer die geschützte Wassernuss.",
        "Der Ort ist ein nationales Zentrum für die Ausbildung von Naturfotografen.",
        "Der Wasserstand wird künstlich stabil gehalten, um das Ökosystem zu schützen.",
        "Mártély bietet eine der am besten erhaltenen traditionellen Fischersiedlungen an der Theiß."
     ]),
    ("forest-pusztaszeri-erdo-extra",
     "Der Pusztaszeri-erdo (Pusztaszerer Wald) ist ein bedeutendes Waldreservat in der sonst eher baumarmen Steppenlandschaft nördlich von Szeged. Er besteht aus einer Mischung von ursprünglichen Auenwäldern in Flussnähe und künstlich angelegten Eichen- und Akazienwäldern auf den Sandrücken. Dieser Wald spielt eine zentrale Rolle für das lokale Klima, indem er Schutz vor den oft starken Winden der Tiefebene bietet und die Luftfeuchtigkeit reguliert. Fauna und Flora sind hier besonders reichhaltig; der Wald ist bekannt für seine Bestände an Greifvögeln wie dem Kaiseradler und dem Schwarzmilan. Für Wanderer bietet das Gebiet ein weitläufiges Netz an Wegen, die die verschiedenen Landschaftstypen des Pusztaszer-Schutzgebiets miteinander verbinden.",
     [
        "Der Wald umfasst ein Kerngebiet von rund 1.000 Hektar zusammenhängender Fläche.",
        "Er ist Teil des Pusztaszer-Landschaftsschutzgebiets, das insgesamt 22.000 Hektar groß ist.",
        "Im Wald befinden sich historische Grenzsteine aus der Zeit der Landnahme.",
        "Das Gebiet ist ein wichtiges Rückzugsgebiet für das Reh- und Schwarzwild der Region.",
        "Botanisch wertvoll sind die vereinzelten Standorte der sibirischen Schwertlilie am Waldrand.",
        "Der Wald dient als wichtiges Forschungsgebiet für die Anpassung von Bäumen an Sandböden.",
        "Mehrere markierte Wanderwege des 'Blauen Pfades' führen durch das Waldgebiet.",
        "Historisch gesehen war der Wald Teil der riesigen Jagdgründe der ungarischen Könige."
     ])
]

expand_poi("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraHu2.ts", data)
print("Successfully expanded POIs 16-30")
