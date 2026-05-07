import re

with open('lib/visualLab/data/belarusPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

poi_data = """  {
    id: "BY-005-mogilev-town-hall",
    type: "landmark",
    parent: "BY-005",
    coords: [30.3311, 53.8944],
    name: {
      de: "Rathaus von Mogilev",
      hu: "Mahiljovi városháza",
      ro: "Primăria din Moghilău",
      en: "Mogilev Town Hall"
    },
    descriptionAdvanced: {
        "de": "Das Rathaus von Mogilev ist das stolze Wahrzeichen der Stadt und ein Symbol für ihre lange Tradition der Selbstverwaltung unter dem Magdeburger Recht. Das ursprüngliche Bauwerk aus dem 17. Jahrhundert wurde im Zweiten Weltkrieg schwer beschädigt und später abgerissen, bevor es im Jahr 2008 originalgetreu an seinem historischen Standort wiedererrichtet wurde. Der elegante Turm mit der Aussichtsplattform dominiert den zentralen Platz und bietet einen herrlichen Blick über den Dnepr. Heute beherbergt das Rathaus das Stadtmuseum von Mogilev, das die wechselvolle Geschichte der Region von der Frühzeit bis in die Moderne dokumentiert. Es dient zudem als repräsentativer Ort für feierliche Empfänge und Trauungen.",
        "hu": "A mahiljovi városháza a város büszke jelképe és a magdeburgi jog szerinti önkormányzatiság hosszú hagyományának szimbóluma. Az eredeti 17. századi épület a második világháborúban súlyosan megsérült, majd lebontották, mielőtt 2008-ban hűen újjáépítették történelmi helyén. Az elegáns, kilátóval ellátott torony uralja a központi teret, és pompás kilátást nyújt a Dnyeperre. Ma a városháza a Mahiljovi Várostörténeti Múzeumnak ad otthont, amely dokumentálja a régió változatos történetét a kezdetektől a modern korig. Emellett reprezentatív helyszínként szolgál ünnepi fogadásokhoz és esküvőkhöz.",
        "ro": "Primăria din Moghilău este un monument istoric remarcabil care reflectă cu mândrie bogata tradiție a autoguvernării urbane în conformitate cu Drepturile de la Magdeburg. Deși structura originară din secolul al XVII-lea a fost ruinată în urma confruntărilor din al Doilea Război Mondial, clădirea a renăscut printr-un proces de reconstrucție extrem de riguros, redeschizându-și porțile în anul 2008. Turnul său grațios, având o punte de observație uluitoare, oferă priveliști extinse asupra râului Nipru, în timp ce interiorul somptuos servește drept muzeu al orașului, evidențiind moștenirea civică și comercială. Astăzi, primăria este, de asemenea, o destinație populară pentru ceremoniile de căsătorie, adăugând o notă romantică importanței sale civice. Istorie K7 — Autoguvernarea.",
        "en": "The Mogilev Town Hall is a magnificent symbol of the city's historical self-governance and economic prosperity, originally built after Mogilev received Magdeburg rights in 1577. The building's defining feature is its soaring, multi-tiered octagonal tower, which historically served as a watchtower and the focal point of civic life. Tragically destroyed during the devastating battles of World War II, the Town Hall was meticulously reconstructed from historical blueprints in 2008. Today, it houses a fascinating museum dedicated to the city's history and features a unique mechanical clock mechanism created by a local master. Visitors can climb to the observation deck for panoramic views of the Dnieper River valley."
    },
    factsAdvanced: {
        "de": [
            "Die Uhr am Rathausturm besitzt ein einzigartiges mechanisches System, das auch astronomische Daten anzeigt.",
            "Jeden Mittag spielt ein mechanischer Trompeter namens 'Magistr' eine Fanfare vom Turm des Rathauses.",
            "Im Inneren des Rathauses kann man eine Kopie des Privilegs der Stadt Mogilev aus dem Jahr 1577 besichtigen.",
            "Das Rathaus gilt als eines der besten Beispiele für die Rekonstruktion historischer Architektur in Belarus."
        ],
        "hu": [
            "A városháza tornyán lévő óra egyedülálló mechanikai rendszerrel rendelkezik, amely csillagászati adatokat is mutat.",
            "Minden délben egy 'Magistr' nevű mechanikus trombitás játszik fanfárt a városháza tornyából.",
            "A városháza belsejében megtekinthető a város 1577-ből származó kiváltságlevelének másolata.",
            "A városháza a történelmi építészet egyik legjobb rekonstrukciós példájának számít Fehéroroszországban."
        ],
        "ro": [
            "Ceasul din turnul primăriei are un mecanism unic care afișează, pe lângă oră, și date astronomice complexe.",
            "În fiecare zi, la amiază, un trompetist mecanic numit „Magistr” cântă o fanfară de pe balconul turnului.",
            "În interior poate fi văzută o copie a privilegiului acordat orașului Mogilev de către regele polonez în 1577.",
            "Clădirea este considerată una dintre cele mai reușite reconstrucții de arhitectură istorică realizate recent în Belarus."
        ],
        "en": ["The original stone structure was completed in 1698 after the wooden version burned down.", "The tower reaches an impressive height of 46 meters.", "It features a functioning mechanical tower clock designed by a local clockmaker.", "A daily trumpet melody is played from the tower by a live musician."]
    },
    description: {
      de: "Ein rekonstruiertes Wahrzeichen der Stadt, das die Geschichte der Selbstverwaltung widerspiegelt.",
      hu: "A város rekonstruált jelképe, amely az önkormányzatiság történetét tükrözi.",
      ro: "Un simbol reconstruit al orașului, reflectând istoria autoguvernării.",
      en: "A reconstructed landmark of the city, reflecting the history of self-government."
    },
    facts: {
      de: [
        "Das ursprüngliche Gebäude stammte aus dem 17. Jahrhundert.",
        "Wurde 2008 originalgetreu an seinem historischen Platz wiederaufgebaut.",
        "Ein mechanischer Trompeter spielt dreimal täglich vom Turm aus."
      ],
      hu: [
        "Az eredeti épület a 17. századból származott.",
        "2008-ban építették újjá hűen az eredeti formájában a történelmi helyén.",
        "Egy mechanikus trombitás naponta háromszor játszik a toronyból."
      ],
      ro: [
        "Clădirea originală data din secolul al XVII-lea.",
        "Reconstruită fidel în 2008 pe locul său istoric.",
        "Un trompetist mecanic cântă din turn de trei ori pe zi."
      ],
      en: [
        "The original building dated back to the 17th century.",
        "Rebuilt faithfully in 2008 at its historic location.",
        "A mechanical trumpeter plays from the tower three times a day."
      ]
    }
  },"""

# Insert into belarusLocalPois
new_content = content.replace("export const belarusLocalPois: POI[] = [", "export const belarusLocalPois: POI[] = [\n" + poi_data)

with open('lib/visualLab/data/belarusPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
