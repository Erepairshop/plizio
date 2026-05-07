import re

with open('lib/visualLab/data/belarusPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define POIs to add
poi_khatyn = """  {
    id: "BY-006-khatyn-memorial",
    type: "historical",
    parent: "BY-006",
    coords: [27.9400, 54.3350],
    name: {
      de: "Gedenkstätte Chatyn",
      hu: "Hatinyi emlékmű",
      ro: "Memorialul Khatyn",
      en: "Khatyn Memorial"
    },
    descriptionAdvanced: {
        "de": "Die Gedenkstätte Chatyn ist ein Ort des Innehaltens und des tiefen Gedenkens an die Opfer des Zweiten Weltkriegs. An der Stelle, wo am 22. März 1943 das Dorf Chatyn von SS-Einheiten zerstört wurde, entstand eine monumentale Gedenkstätte, die durch ihre Stille und Symbolik besticht. Die Grundrisse der verbrannten Häuser sind durch niedrige Betonmauern markiert, was die Leere und den Verlust schmerzhaft spürbar macht. Inmitten der Anlage befindet sich das 'Dorf der Dörfer', ein symbolischer Friedhof für 186 belarussische Ortschaften, die zusammen mit ihren Einwohnern vernichtet und nie wieder aufgebaut wurden. Die Anlage ist ein wichtiges Ziel für Bildungsreisen und ein nationales Symbol für den belarussischen Geist des Überlebens.",
        "hu": "A hatinyi emlékmű a csendes elmélyülés és a második világháború áldozataira való megemlékezés helyszíne. Ott, ahol 1943. március 22-én Hatiny falut az SS-egységek elpusztították, egy monumentális emlékhely jött létre, amely szimbolikájával nyűgözi le a látogatót. Az elégetett házak alaprajzát alacsony betonfalak jelzik, fájdalmasan érezhetővé téve az űrt és a veszteséget. Az együttes közepén található a 'Falvak faluja', egy szimbolikus temető 186 fehérorosz településnek, amelyeket lakóikkal együtt pusztítottak el. Az emlékhely a fehérorosz túlélési ösztön nemzeti szimbóluma.",
        "ro": "Memorialul Khatyn este un loc profund emoționant dedicat amintirii satelor belaruse distruse și populației civile ucise în timpul celui de-al Doilea Război Mondial. Pe 22 martie 1943, trupele SS au ars din temelii satul Khatyn, ucigându-i aproape toți locuitorii. Memorialul, conceput cu o arhitectură peisagistică sobră și simbolică, marchează exact fundațiile caselor arse, având obeliscuri sub formă de coșuri de fum de unde bat clopote în mod regulat. 'Cimitirul Satelor' adună urne cu pământ din cele 186 de așezări care nu au mai fost niciodată reconstruite. Locul invită la o reflectare tăcută asupra ororilor războiului și este un pilon central al memoriei naționale a Belarusului. Istorie K8 — Al Doilea Război Mondial.",
        "en": "The Khatyn Memorial Complex is a hauntingly powerful site dedicated to the tragic loss of civilian life during the Nazi occupation of Belarus in World War II. It stands on the exact location of the former village of Khatyn, whose entire population was massacred and the village burned to the ground in March 1943. The memorial features an emotionally devastating central sculpture of an unbroken man holding his dead son, surrounded by symbolic chimneys marking where each burned house once stood. Every 30 seconds, bells attached to the chimneys toll in unison, creating a profound atmosphere of grief and remembrance. It serves as a tribute to all 628 Belarusian villages destroyed in a similar manner."
    },
    factsAdvanced: {
        "de": [
            "Die Glocken von Chatyn läuten zeitgleich in einem Rhythmus, der an den Herzschlag der Opfer erinnern soll.",
            "Die Gedenkstätte wurde bewusst so gestaltet, dass sie sich harmonisch in die umliegende, leicht hügelige Waldlandschaft einfügt.",
            "Auf der 'Mauer der Erinnerung' sind die Namen von über 260 Orten verzeichnet, an denen die Bevölkerung in Konzentrationslagern litt.",
            "Jedes Jahr am Jahrestag der Tragödie finden hier staatliche Gedenkveranstaltungen mit hoher Beteiligung statt."
        ],
        "hu": [
            "A hatinyi harangok egyszerre szólnak olyan ritmusban, amely az áldozatok szívverésére emlékeztet.",
            "Az emlékhelyet tudatosan úgy alakították ki, hogy harmonikusan illeszkedjen a környező, enyhén dombos erdős tájba.",
            "Az 'Emlékezet falán' több mint 260 olyan hely neve szerepel, ahol a lakosság koncentrációs táborokban szenvedett.",
            "Minden évben a tragédia évfordulóján állami megemlékezéseket tartanak itt magas részvétel mellett."
        ],
        "ro": [
            "Clopotele de la Khatyn bat la unison într-un ritm ce amintește de bătăile inimii victimelor masacrului.",
            "Memorialul a fost proiectat pentru a se integra armonios în peisajul deluros și împădurit din jurul său.",
            "Pe „Zidul Memoriei” sunt trecute numele a peste 260 de lagăre de concentrare și locuri de exterminare din Belarus.",
            "În fiecare an, la aniversarea tragediei, au loc ceremonii de stat la care participă mii de oameni pentru a aduce omagii."
        ],
        "en": ["The memorial complex was officially opened in 1969.", "A total of 149 villagers, including 75 children, were killed in the Khatyn massacre.", "The 'Cemetery of Villages' contains earth from 185 other un-rebuilt destroyed villages.", "It features the symbolic 'Trees of Life', listing the villages that were rebuilt after the war."]
    },
    description: {
      de: "Ein ergreifendes Denkmal für die während des Zweiten Weltkriegs zerstörten belarussischen Dörfer.",
      hu: "Megható emlékmű a második világháború alatt elpusztított fehérorosz falvak emlékére.",
      ro: "Un monument emoționant dedicat satelor belaruse distruse în timpul celui de-al Doilea Război Mondial.",
      en: "A moving memorial to the Belarusian villages destroyed during World War II."
    },
    facts: {
      de: [
        "Alle 30 Sekunden läutet eine Glocke zum Gedenken an die Opfer.",
        "Die Statue des 'unbeugsamen Mannes' bildet das Zentrum der Anlage.",
        "Der 'Friedhof der Dörfer' listet 186 Orte auf, die nie wieder aufgebaut wurden."
      ],
      hu: [
        "30 másodpercenként megszólal egy harang az áldozatok emlékére.",
        "A 'meg nem tört ember' szobra alkotja a komplexum központját.",
        "A 'falvak temetője' 186 olyan helyet sorol fel, amelyeket soha nem építettek újjá."
      ],
      ro: [
        "La fiecare 30 de secunde, un clopot bate în memoria victimelor.",
        "Statuia „omului neîfrânt” formează centrul complexului.",
        "„Cimitirul satelor” enumeră 186 de locuri care nu au mai fost reconstruite niciodată."
      ],
      en: [
        "Every 30 seconds, a bell tolls in memory of the victims.",
        "The statue of the 'unconquered man' forms the center of the complex.",
        "The 'Cemetery of Villages' lists 186 places that were never rebuilt."
      ]
    }
  },"""

# Insert before closing ];
new_content = content.replace("];", poi_khatyn + "\n];")

with open('lib/visualLab/data/belarusPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
