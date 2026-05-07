import re
import json

files = ['lib/visualLab/data/poiExtraAndorraCities.ts', 'lib/visualLab/data/poiExtraAndorraOther.ts']

updates = {
    "ad-animal-habitat-red-deer-forests-encamp-extra": {
        "desc": "Die ausgedehnten Wälder von Encamp bieten ideale Deckung für den Rothirsch. Diese eleganten Säugetiere sind im Herbst während der Brunftzeit besonders auffällig, wenn das dröhnende Röhren der Hirsche durch die Täler hallt.",
        "facts": ["Ausgedehnte Wälder in Encamp", "Ideale Deckung für Rothirsche", "Beeindruckende Brunft im Herbst", "Röhren hallt durch die Täler", "Auffällige Waldtiere"]
    },
    "ad-animal-habitat-bearded-vulture-high-peaks-extra": {
        "desc": "Der Bartgeier, einer der seltensten Vögel Europas, findet in den Hochlagen Andorras Zuflucht. Er ist berühmt dafür, Knochen von toten Tieren fallen zu lassen, um sie zu zerbrechen und sich vom nahrhaften Knochenmark zu ernähren.",
        "facts": ["Seltener europäischer Vogel", "Bartgeier in den Hochlagen", "Knochenmark als Nahrungsquelle", "Lässt Knochen auf Felsen fallen", "Streng geschützte Art"]
    },
    "ad-animal-habitat-pyrenean-newt-streams-extra": {
        "desc": "Der Pyrenäen-Gebirgsmolch ist eine endemische Art, die ausschließlich in den kristallklaren, kalten Gebirgsbächen der Pyrenäenregion lebt. Aufgrund seiner hohen Ansprüche an die Wasserqualität ist er ein ausgezeichneter Bioindikator für sauberes Wasser.",
        "facts": ["Endemische Art der Pyrenäen", "Pyrenäen-Gebirgsmolch", "Lebt in kalten Gebirgsbächen", "Exzellenter Bioindikator", "Benötigt höchste Wasserqualität"]
    },
    "ad-animal-habitat-roe-deer-lower-woodlands-extra": {
        "desc": "Rehe bevorzugen die unteren, dichten Laubwälder Andorras, wo sie sich von jungen Trieben und Kräutern ernähren. Die zierlichen Tiere sind sehr scheu und lassen sich am besten in der Dämmerung beobachten.",
        "facts": ["Untere, dichte Laubwälder", "Bevorzugter Lebensraum für Rehe", "Ernährung durch Triebe und Kräuter", "Sehr scheue Tiere", "Dämmerungsaktives Verhalten"]
    },
    "ad-animal-habitat-fox-omnipresent-extra": {
        "desc": "Der Rotfuchs ist eines der anpassungsfähigsten Raubtiere in Andorra und in fast allen Lebensräumen präsent, von den bewaldeten Tälern bis an den Rand städtischer Siedlungen. Er profitiert von der hohen Dichte kleiner Nagetiere in der Region.",
        "facts": ["Anpassungsfähigstes Raubtier", "Präsent in fast allen Lebensräumen", "Nähe zu städtischen Siedlungen", "Jäger kleiner Nagetiere", "Gute Nachtsicht und Gehör"]
    },
    "ad-animal-habitat-common-lizard-stone-walls-extra": {
        "desc": "Die Wald- oder Bergeidechse nutzt die von Menschen geschaffenen Steinmauern und felsigen Pfade, um sich in der Sonne zu wärmen. Sie ist ein agiler Insektenjäger und spielt eine wichtige Rolle bei der natürlichen Schädlingsbekämpfung.",
        "facts": ["Nutzung alter Steinmauern", "Wald- oder Bergeidechse", "Wärmt sich auf felsigen Pfaden", "Agiler Insektenjäger", "Natürliche Schädlingsbekämpfung"]
    },
    "ad-animal-habitat-stoat-mountain-meadows-extra": {
        "desc": "Das Hermelin jagt geschickt auf den alpinen Wiesen nach Mäusen. Wie das Schneehuhn wechselt es im Winter sein braunes Fell in ein reines Weiß, um sich in der verschneiten Landschaft perfekt zu tarnen.",
        "facts": ["Jagd auf alpinen Wiesen", "Hermelin (Großes Wiesel)", "Wechselt zu weißem Winterfell", "Perfekte Tarnung im Schnee", "Flink und aggressiv bei der Jagd"]
    },
    "ad-animal-habitat-grass-snake-wetlands-extra": {
        "desc": "Obwohl Andorra größtenteils aus Bergen besteht, bieten kleine Feuchtgebiete und ruhige Seeufer den idealen Lebensraum für die Ringelnatter. Diese ungiftige, wasserliebende Schlange ernährt sich hauptsächlich von Amphibien und kleinen Fischen.",
        "facts": ["Lebensraum in kleinen Feuchtgebieten", "Ungiftige Ringelnatter", "Ausgezeichnete Schwimmer", "Ernährung durch Amphibien", "Oft an Seeufern zu finden"]
    },
    "ad-animal-habitat-alpine-chough-high-cliffs-extra": {
        "desc": "Alpendohlen sind verspielte, akrobatische Flieger, die sich gerne in der Nähe von Wanderern auf den höchsten Gipfeln aufhalten. Mit ihrem schwarzen Gefieder und den leuchtend gelben Schnäbeln sind sie ein charakteristisches Bild der andorranischen Bergwelt.",
        "facts": ["Höchste Berggipfel Andorras", "Akrobatische Alpendohlen", "Charakteristisch gelber Schnabel", "Begleiten oft Wanderer", "Sehr soziale Vögel"]
    },
    "ad-animal-habitat-ibex-reintroduction-zone-extra": {
        "desc": "Nach ihrer Ausrottung wurde der majestätische Iberiensteinbock in den Pyrenäen erfolgreich wiederangesiedelt. Die steilen, unzugänglichen Berggebiete in Andorra bieten heute einen sicheren Hafen für diese beeindruckenden Tiere mit ihren riesigen Hörnern.",
        "facts": ["Erfolgreiche Wiederansiedlung", "Iberiensteinbock", "Beeindruckende große Hörner", "Steile Berggebiete als Hafen", "Wichtiges Artenschutzprojekt"]
    },
    "ad-animal-habitat-dipper-fast-streams-extra": {
        "desc": "Die Wasseramsel ist ein außergewöhnlicher Vogel, der fließende Gewässer liebt und in der Lage ist, am Grund von reißenden Bächen nach Insektenlarven zu tauchen. Die Flüsse Andorras mit ihrer hervorragenden Wasserqualität bieten perfekte Lebensbedingungen.",
        "facts": ["Fließende, reißende Gewässer", "Wasseramsel", "Taucht und geht am Grund", "Sucht Insektenlarven", "Indikator für saubere Flüsse"]
    },
    "ad-animal-habitat-pine-marten-conifer-forests-extra": {
        "desc": "Der Baummarder bevorzugt die tiefen Nadelwälder Andorras. Dieses kleine, aber extrem bewegliche Raubtier jagt in den Baumkronen nach Eichhörnchen und Vögeln und weicht menschlichen Siedlungen fast vollständig aus.",
        "facts": ["Tiefe Nadelwälder", "Baummarder", "Extrem bewegliches Raubtier", "Jagt in den Baumkronen", "Scheut menschliche Nähe"]
    },
    "ad-animal-habitat-red-billed-chough-pastures-extra": {
        "desc": "Die Alpenkrähe, eng verwandt mit der Alpendohle, aber mit einem langen roten Schnabel, lebt bevorzugt auf den alpinen Weiden. Dort suchen sie in der Erde nach wirbellosen Tieren und fliegen in großen, lauten Schwärmen.",
        "facts": ["Bevorzugt alpine Weiden", "Alpenkrähe mit rotem Schnabel", "Lebt in lauten Schwärmen", "Sucht nach Wirbellosen im Boden", "Teil der alpinen Vogelwelt"]
    },
    "ad-animal-habitat-adder-snake-heathlands-extra": {
        "desc": "Die Kreuzotter bewohnt die feuchten Heide- und Moorlandschaften in den höheren Regionen. Als kleine, giftige Schlange ist sie tagsüber aktiv und wärmt sich gerne auf Felsen, flieht aber bei Erschütterungen schnell ins dichte Gestrüpp.",
        "facts": ["Feuchte Heide- und Moorlandschaften", "Kreuzotter (Giftschlange)", "Aktiv während des Tages", "Wärmt sich auf Felsen", "Flüchtet schnell bei Gefahr"]
    },
    "ad-animal-habitat-tawny-owl-old-forests-extra": {
        "desc": "Der Waldkauz ist der heimliche Herrscher der alten Laubwälder. Seine großen, runden Augen ermöglichen es ihm, nachts hervorragend zu jagen. Ihr charakteristischer Ruf hallt in den ruhigen Nächten unheimlich durch die andorranischen Täler.",
        "facts": ["Alte, ungestörte Laubwälder", "Waldkauz (Tawny Owl)", "Nachtaktiver Jäger", "Charakteristischer Ruf", "Ausgezeichnete Nachtsicht"]
    },
    "ad-agriculture-casa-beal-winery-extra-3": {
        "desc": "Casa Beal ist ein Pionierweingut in Sant Julià de Lòria, das den historischen Weinbau in Andorra wiederbelebt hat. Bekannt für seinen preisgekrönten Cim de Cel-Wein, beweist das Weingut, dass in extremen Höhenlagen qualitativ hochwertiger Wein produziert werden kann.",
        "facts": ["Pionierweingut in Andorra", "Wiederbelebung des Weinbaus", "Weinberge in extremer Höhe", "Bekannt für den 'Cim de Cel'-Wein", "In Sant Julià de Lòria"]
    },
    "ad-agriculture-borda-sabate-winery-extra-3": {
        "desc": "Borda Sabaté, gelegen im Valira-Tal, vereint modernen Weinbau mit andorranischer Tradition. Das Weingut bietet geführte Touren und Weinproben an und kultiviert Sorten wie Riesling, die an das Mikroklima der Pyrenäen angepasst sind.",
        "facts": ["Weingut im Valira-Tal", "Kombiniert Modernes und Tradition", "Geführte Touren und Weinproben", "Spezialisiert auf Riesling", "Angepasst an das Pyrenäenklima"]
    },
    "ad-agriculture-casa-aravell-winery-extra-3": {
        "desc": "Ein weiteres aufstrebendes Weingut in der südlichen Region Andorras. Casa Aravell konzentriert sich auf ökologischen Weinbau und handwerkliche Produktionsmethoden, wodurch Weine entstehen, die den einzigartigen Charakter des Berg-Terroirs widerspiegeln.",
        "facts": ["Aufstrebendes Bergweingut", "Ökologischer Weinbau", "Handwerkliche Produktionsmethoden", "Einzigartiges Terroir der Pyrenäen", "Fokus auf Qualität"]
    },
    "ad-agriculture-tobacco-fields-sant-julia-extra-3": {
        "desc": "Die Tabakfelder von Sant Julià de Lòria waren historisch das Rückgrat der andorranischen Wirtschaft. Heute sind sie zwar kleiner, prägen aber im Sommer immer noch die Landschaft des Südens. Die Tabakblätter werden im September geerntet und in speziellen Trockenschuppen getrocknet.",
        "facts": ["Historisches Rückgrat der Wirtschaft", "Prägt die Sommerlandschaft", "Tabakanbau in Sant Julià de Lòria", "Ernte im September", "Spezielle Trockenschuppen"]
    },
    "ad-agriculture-high-mountain-potato-farms-extra-3": {
        "desc": "Der Kartoffelanbau in den hohen Lagen Andorras hat eine lange Tradition. Aufgrund des kühlen Klimas wachsen die Kartoffeln langsam, was ihnen einen besonders intensiven Geschmack verleiht. Diese Bergkartoffeln sind eine wichtige Zutat in der lokalen Gastronomie.",
        "facts": ["Kartoffelanbau in großer Höhe", "Lange landwirtschaftliche Tradition", "Kühles Klima für langsames Wachstum", "Intensiver, einzigartiger Geschmack", "Wichtige Zutat lokaler Gerichte"]
    },
    "ad-agriculture-cattle-grazing-pastures-canillo-extra-3": {
        "desc": "Die weiten, grünen Wiesen von Canillo werden im Sommer als Weideflächen für Rinder genutzt. Die Rinderzucht zur Fleischproduktion ist ein traditioneller Wirtschaftszweig. Im Winter werden die Tiere in niedrigere Lagen gebracht.",
        "facts": ["Weite Wiesen in Canillo", "Sommerweide für Rinder", "Traditionelle Fleischproduktion", "Alpenwirtschaft", "Tierische Wanderung im Winter"]
    },
    "ad-agriculture-sheep-and-goat-farms-ordino-extra-3": {
        "desc": "Die steilen und rauen Hänge von Ordino eignen sich ideal für die Schaf- und Ziegenzucht. Die Hirten führen die Herden in den wärmeren Monaten hoch in die Berge, eine Praxis, die tief im pyrenäischen Lebensstil verwurzelt ist.",
        "facts": ["Steile Hänge von Ordino", "Ideal für Schaf- und Ziegenzucht", "Traditionelles Hirtenleben", "Sommerwanderung in die Berge", "Pyrenäisches Kulturerbe"]
    },
    "ad-agriculture-beekeeping-honey-production-extra-3": {
        "desc": "Die Bienenhaltung in den Wäldern und auf den alpinen Wiesen floriert aufgrund der großen Vielfalt an Wildblumen in Andorra. Der hier produzierte andorranische Honig ist berühmt für seine hohe Qualität und seinen reinen, intensiven Geschmack.",
        "facts": ["Bienenhaltung in alpinen Wiesen", "Profitieren von alpinen Wildblumen", "Hochwertiger andorranischer Honig", "Reiner, intensiver Geschmack", "Nachhaltige Landwirtschaft"]
    },
    "ad-agriculture-medicinal-herb-gardens-encamp-extra-3": {
        "desc": "In den ruhigeren Tälern von Encamp gibt es kleine Gärten, die sich dem Anbau von Heil- und Aromakräutern widmen. Diese Kräuter werden in der traditionellen pyrenäischen Medizin verwendet oder zu hochwertigen Tees, Ölen und Likören verarbeitet.",
        "facts": ["Anbau von Heil- und Aromakräutern", "In den ruhigen Tälern von Encamp", "Basis für traditionelle Medizin", "Verarbeitung zu Tees und Ölen", "Natürliche Heilmittel"]
    },
    "ad-agriculture-community-gardens-escaldes-extra-3": {
        "desc": "Gemeinschaftsgärten in Escaldes fördern den städtischen Gartenbau und bringen die Einheimischen zusammen. Hier bauen Familien ihr eigenes Gemüse an und stärken gleichzeitig das Gemeinschaftsgefühl und die nachhaltige Selbstversorgung.",
        "facts": ["Urbane Gemeinschaftsgärten", "Gefördert in Escaldes", "Familien bauen Gemüse an", "Stärkt das Gemeinschaftsgefühl", "Nachhaltige Selbstversorgung"]
    },
    "ad-agriculture-horse-breeding-farms-extra-3": {
        "desc": "Andorra ist die Heimat der robusten Pyrenäen-Pferde. Diese Pferde, die traditionell für die Landwirtschaft und den Transport genutzt wurden, leben heute halbwild in den Bergen und werden auf spezialisierten Farmen für Reittouren gezüchtet.",
        "facts": ["Heimat der Pyrenäen-Pferde", "Traditionell für Transport genutzt", "Leben heute oft halbwild", "Zucht für Reittouren", "Robustes und zähes Bergpferd"]
    },
    "ad-agriculture-market-garden-escaldes-extra-3": {
        "desc": "Die kleinen Gemüsegärten (Horts) rund um Escaldes versorgten historisch die lokalen Märkte mit frischen Produkten. Obwohl die Urbanisierung die Anbauflächen verringert hat, pflegen viele Andorraner weiterhin ihre Gemüsegärten am Flussufer.",
        "facts": ["Historische Gemüsegärten (Horts)", "Lokale Märkte mit Frischeprodukten", "Pflege von Gärten am Flussufer", "Landwirtschaft trotzt Urbanisierung", "Traditioneller Gemüseanbau"]
    },
    "ad-agriculture-trumfes-potato-cooperative-extra-3": {
        "desc": "Die Kooperative widmet sich dem Anbau und Schutz der 'Trumfa', einer speziellen lokalen Kartoffelsorte. Durch gemeinsame Bemühungen stellen die andorranischen Landwirte sicher, dass dieses wichtige gastronomische Erbe wettbewerbsfähig bleibt.",
        "facts": ["Kooperative andorranischer Bauern", "Schutz der 'Trumfa' Kartoffel", "Gemeinsamer, kontrollierter Anbau", "Sicherung der Wettbewerbsfähigkeit", "Wichtiges gastronomisches Erbe"]
    },
    "ad-agriculture-fruit-orchards-sant-julia-extra-3": {
        "desc": "Dank des milderen Klimas ist Sant Julià de Lòria der ideale Ort für kleine Obstgärten in Andorra. Hier wachsen vor allem Äpfel, Birnen und Kirschen, die von den langen Sonnenscheindauern des Südens profitieren.",
        "facts": ["Milderes Klima in Sant Julià", "Ideale Bedingungen für Obstgärten", "Anbau von Äpfeln, Birnen, Kirschen", "Profitieren von viel Sonnenlicht", "Lokale Obstproduktion"]
    },
    "ad-agriculture-shepherd-huts-madriu-valley-extra-3": {
        "desc": "Das unberührte Madriu-Tal beherbergt historische Hirtenhütten, sogenannte 'Bordes', in denen Hirten während der Sommerweidezeit wohnten. Sie zeugen von der harmonischen Verbindung zwischen Landwirtschaft und Natur.",
        "facts": ["Historische Hirtenhütten ('Bordes')", "Gelegen im Madriu-Tal", "Unterkünfte während der Sommerweide", "Teil des UNESCO-Welterbes", "Harmonie von Natur und Landwirtschaft"]
    },
    "ad-agriculture-organic-farm-anyos-extra-3": {
        "desc": "Moderne Bio-Bauernhöfe in der Nähe von Anyós folgen den Trends zur ökologischen Nachhaltigkeit. Sie bauen Gemüse ohne den Einsatz von Chemikalien an und bieten ihre gesunden, frischen Produkte oft direkt auf lokalen Bauernmärkten an.",
        "facts": ["Moderne Bio-Bauernhöfe bei Anyós", "Trend zur ökologischen Nachhaltigkeit", "Anbau ohne chemische Pestizide", "Verkauf auf lokalen Bauernmärkten", "Fokus auf gesunde Ernährung"]
    },
    "ad-agriculture-forest-management-encamp-extra-3": {
        "desc": "Die andorranische Forstwirtschaft in Gebieten wie Encamp umfasst den nachhaltigen Holzeinschlag und die Pflege der Wälder, um gesunde Ökosysteme zu bewahren und das Risiko von Waldbränden zu minimieren.",
        "facts": ["Nachhaltige andorranische Forstwirtschaft", "Holzeinschlag und Waldpflege in Encamp", "Bewahrung gesunder Ökosysteme", "Minimierung von Waldbrandrisiken", "Erhaltung der Naturressourcen"]
    },
    "ad-agriculture-mushroom-foraging-areas-canillo-extra-3": {
        "desc": "Die dichten Wälder von Canillo sind ein Paradies für Pilzsammler. Im Herbst, nach den ersten Regenfällen, sprießen Steinpilze und Pfifferlinge, was für Einheimische und Köche zu einem wichtigen und beliebten saisonalen Ereignis wird.",
        "facts": ["Paradies für Pilzsammler in Canillo", "Steinpilze und Pfifferlinge im Herbst", "Saisonales Ereignis nach Regen", "Beliebt bei Einheimischen und Köchen", "Sammeln wilder Lebensmittel"]
    },
    "ad-agriculture-artisan-cheese-maker-la-massana-extra-3": {
        "desc": "In La Massana verarbeiten kleine, handwerkliche Käsemacher die hochwertige Milch von alpinen Kühen und Schafen zu traditionellem andorranischem Käse. Diese handgefertigten Produkte spiegeln die reichen Aromen der Bergweiden wider.",
        "facts": ["Handwerkliche Käsemacher in La Massana", "Verarbeitung von Kuh- und Schafsmilch", "Traditionelle andorranische Käserezepte", "Reiche Aromen der Bergweiden", "Hochwertige, lokale Milchprodukte"]
    },
    "ad-agriculture-wild-berry-harvesting-ordino-extra-3": {
        "desc": "Die sonnigen Hänge von Ordino bieten optimale Bedingungen für wilde Beeren wie Himbeeren, Blaubeeren und Brombeeren. Das Sammeln dieser Früchte ist eine beliebte Sommeraktivität, und die Beeren werden oft für lokale Marmeladen verwendet.",
        "facts": ["Wilde Beeren an den Hängen von Ordino", "Himbeeren, Blaubeeren, Brombeeren", "Beliebte Sommer-Sammelaktivität", "Produktion lokaler Marmeladen", "Köstliche natürliche Ressourcen"]
    }
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False
    for poi_id, data in updates.items():
        if poi_id not in content:
            continue
            
        changed = True
        desc_de = data['desc'].replace('"', '\\"')
        facts_de = json.dumps(data['facts'], ensure_ascii=False)

        poi_pattern = r'(\{\s*id:\s*[\'"]' + re.escape(poi_id) + r'[\'"][\s\S]*?)(^\s*\}(?:,|\s*$))'
        match = re.search(poi_pattern, content, re.MULTILINE)
        if not match:
            print(f"Not found: {poi_id} in {file}")
            continue

        poi_block = match.group(1)
        end_part = match.group(2)
        new_block = poi_block

        # Try to replace existing descriptionAdvanced.de
        new_block = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*)"([^"]*)"', r'\1"' + desc_de + '"', new_block)
        new_block = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*)\'([^\']*)\'', r'\1"' + desc_de + '"', new_block)
        
        # Try to replace existing factsAdvanced.de
        new_block = re.sub(r'(factsAdvanced:\s*\{[\s\S]*?de:\s*)\[(.*?)\]', r'\1' + facts_de, new_block)

        content = content.replace(poi_block + end_part, new_block + end_part)

    if changed:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file} (Batch 4).")
