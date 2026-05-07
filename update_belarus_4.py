import re

with open('lib/visualLab/data/belarusPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define POIs to add
poi_library = """  {
    id: "BY-007-national-library",
    type: "landmark",
    parent: "BY-007",
    coords: [27.6461, 53.9314],
    name: {
      de: "Nationalbibliothek von Belarus",
      hu: "Fehérorosz Nemzeti Könyvtár",
      ro: "Biblioteca Națională a Belarusului",
      en: "National Library of Belarus"
    },
    descriptionAdvanced: {
        "de": "Die Nationalbibliothek von Belarus ist weit mehr als nur ein Aufbewahrungsort für Bücher; sie ist ein multifunktionales Zentrum für Information, Kultur und Diplomatie. Das markante Gebäude im Norden von Minsk zieht durch seine außergewöhnliche Architektur und die gläserne Fassade alle Blicke auf sich. Im Inneren bietet die Bibliothek modernste technologische Infrastruktur für Forschung und Studium, einschließlich digitaler Archive und internationaler Datenbanken. Neben den Lesesälen beherbergt die Bibliothek Galerien für zeitgenössische Kunst und Räumlichkeiten für internationale Gipfeltreffen. Die Aussichtsplattform auf dem Dach hat sich zu einem der beliebtesten touristischen Ziele in Minsk entwickelt, da sie einen unverstellten Blick über die expandierende Metropole bietet.",
        "hu": "A Fehérorosz Nemzeti Könyvtár sokkal több, mint könyvek tárolóhelye; az információ, a kultúra és a diplomácia multifunkcionális központja. A minszki épület rendkívüli építészetével és üveghomlokzatával minden tekintetet magára vonz. Odabent a könyvtár a legmodernebb technológiai infrastruktúrát kínálja a kutatáshoz és tanuláshoz, beleértve a digitális archívumokat és nemzetközi adatbázisokat. Az olvasótermek mellett kortárs művészeti galériáknak és nemzetközi csúcstalálkozók helyszíneinek is otthont ad. A tetőn lévő kilátóterasz Minszk egyik legnépszerűbb turisztikai célpontjává vált.",
        "ro": "Biblioteca Națională a Belarusului este mult mai mult decât un depozitar de cărți; este un centru arhitectural și cultural definitoriu pentru orașul Minsk. Clădirea masivă, inaugurată în 2006, atrage imediat atenția prin forma sa unică de rombicuboctaedru, simbolizând valoarea cunoașterii umane. În interior, vizitatorii descoperă o infrastructură tehnologică de ultimă generație, săli de lectură spațioase și galerii de artă impresionante. Platforma de observație de pe acoperiș oferă o panoramă spectaculoasă asupra capitalei, în timp ce pe timp de noapte, fațada de sticlă se transformă într-un uriaș ecran LED colorat. Construcția este un punct de mândrie națională și un simbol al inovației. Arte K7 — Arhitectura contemporană.",
        "en": "The National Library of Belarus in Minsk is a striking masterpiece of modern architecture, instantly recognizable by its unique rhombicuboctahedron (diamond) shape. Standing at an impressive 73 meters tall, the building represents the immense value of knowledge and serves as the country's primary information and cultural center. At night, the entire glass facade transforms into a massive, dynamic LED display that illuminates the city skyline with colorful patterns and messages. Beyond housing millions of books and rare manuscripts, the complex features an open-air observation deck providing panoramic views of the capital. It is a bold symbol of modern Belarusian development and cultural investment."
    },
    factsAdvanced: {
        "de": [
            "Die Bibliothek ist so konstruiert, dass sie selbst extremen Temperaturschwankungen und starken Winden problemlos standhält.",
            "Im 'Museum des Buches' innerhalb der Bibliothek werden Originalausgaben aus dem 16. Jahrhundert ausgestellt.",
            "Die Bibliothek fungiert als zentraler Knotenpunkt für das gesamte Bibliothekssystem von Belarus.",
            "Das Gebäude wird oft als das 'Dritte Auge' von Minsk bezeichnet, da es über die Stadt zu wachen scheint."
        ],
        "hu": [
            "A könyvtárat úgy tervezték, hogy még a szélsőséges hőmérséklet-ingadozásoknak és az erős szélnek is ellenálljon.",
            "A könyvtáron belüli 'Könyvmúzeumban' 16. századi eredeti kiadásokat is kiállítanak.",
            "A könyvtár központi csomópontként működik Fehéroroszország egész könyvtári rendszere számára.",
            "Az épületet gyakran emlegetik Minszk 'harmadik szemeként', mivel úgy tűnik, mintha vigyázna a városra."
        ],
        "ro": [
            "Structura bibliotecii este proiectată să reziste la variații extreme de temperatură și la vânturi foarte puternice.",
            "În „Muzeul Cărții” din interior sunt expuse ediții originale rare care datează din secolul al XVI-lea.",
            "Biblioteca funcționează ca nod central de coordonare pentru întregul sistem de biblioteci publice din Belarus.",
            "Clădirea este adesea poreclită „Al treilea ochi” al orașului Minsk datorită prezenței sale dominante la orizont."
        ],
        "en": ["The futuristic building was completed and opened to the public in 2006.", "The library's total weight is estimated to be over 115,000 tons, not including the books.", "It holds a collection of over 10 million items, including rare 16th-century texts.", "The building spans 22 stories and features state-of-the-art automated book retrieval systems."]
    },
    description: {
      de: "Ein futuristisches Gebäude in Minsk, bekannt für seine einzigartige geometrische Form.",
      hu: "Futurisztikus épület Minszkben, amely egyedülálló geometriai formájáról ismert.",
      ro: "O clădire futuristă din Minsk, cunoscută pentru forma sa geometrică unică.",
      en: "A futuristic building in Minsk, known for its unique geometric shape."
    },
    facts: {
      de: [
        "Hat die Form eines Rhombenkuboktaeders.",
        "Die Glasfassade wird nachts durch tausende LEDs beleuchtet.",
        "Beherbergt über 10 Millionen Medieneinheiten."
      ],
      hu: [
        "Rombikuboktaéder alakú építmény.",
        "Üveg homlokzatát éjszaka LED-ek ezrei világítják meg.",
        "Több mint 10 millió dokumentumot őriz."
      ],
      ro: [
        "Are forma unui rombicuboctaedru.",
        "Fațada de sticlă este iluminată noaptea de mii de LED-uri.",
        "Găzduiește peste 10 milioane de unități media."
      ],
      en: [
        "Shaped like a rhombicuboctahedron.",
        "The glass facade is illuminated at night by thousands of LEDs.",
        "Houses over 10 million media items."
      ]
    }
  },"""

# Insert before closing ];
new_content = content.replace("];", poi_library + "\n];")

with open('lib/visualLab/data/belarusPoi.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
