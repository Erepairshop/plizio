// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraIcelandCities } from "./poiExtraIcelandCities";

export const icelandCountry: POI = {
  id: "country-iceland",
  type: "country",
  parent: "europe",
  coords: [-19.0208, 64.9631],
  name: {
    de: "Island",
    hu: "Izland",
    ro: "Islanda",
    en: "Iceland"
  },
  description: {
    de: "Island ist ein Land der extremen Kontraste, bekannt als das 'Land von Feuer und Eis', mit Gletschern, Geysiren und Vulkanen.",
    hu: "Izland a szélsőséges kontrasztok országa, a 'tűz és jég földje', gleccserekkel, gejzírekkel és vulkánokkal.",
    ro: "Islanda este o țară a contrastelor extreme, cunoscută sub numele de „țara focului și a gheții”, cu ghețari, gheizere și vulcani.",
    en: "Iceland is a land of extreme contrasts, known as the 'Land of Fire and Ice', featuring glaciers, geysers, and volcanoes."
  },
  descriptionAdvanced: {
    de: "Island, eine Inselnation im Nordatlantik, ist berühmt für seine dramatische Landschaft mit Vulkanen, Geysiren, Thermalquellen und Lavafeldern. Massive Gletscher sind in den Nationalparks Vatnajökull und Snæfellsjökull geschützt. Die meisten Einwohner leben in der Hauptstadt Reykjavík, die mit Erdwärme betrieben wird und das National- und Saga-Museum beherbergt, die Islands Wikingergeschichte nachzeichnen. Geographie-K7.",
    hu: "Izland, az észak-atlanti szigetország, drámai tájairól híres, vulkánokkal, gejzírekkel, hőforrásokkal és lávamezőkkel. A hatalmas gleccsereket a Vatnajökull és a Snæfellsjökull Nemzeti Parkok védik. A lakosság többsége a fővárosban, Reykjavíkban él, amely geotermikus energiával működik, és itt található a Nemzeti és a Saga Múzeum is, amelyek Izland viking történelmét mutatják be. Földrajz K7.",
    ro: "Islanda, o națiune insulară din Atlanticul de Nord, este renumită pentru peisajul său dramatic cu vulcani, gheizere, izvoare termale și câmpuri de lavă. Ghețarii masivi sunt protejați în parcurile naționale Vatnajökull și Snæfellsjökull. Majoritatea populației trăiește în capitala Reykjavík, care funcționează cu energie geotermală și găzduiește muzeele Național și Saga, care retrăiesc istoria vikingă a Islandei. Geografie K7.",
    en: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavík, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history. Geography K7."
  },
  facts: {
    de: [
      "Island hat keine Schienenwege (Züge).",
      "Es ist eines der wenigen Länder ohne Mücken.",
      "Mehr als 60% der Bevölkerung leben in Reykjavík.",
      "Island hat über 30 aktive Vulkansysteme.",
      "Das Land nutzt fast zu 100% erneuerbare Energien.",
      "Die Althingi (Islands Parlament) ist das älteste bestehende Parlament der Welt (gegründet 930).",
      "Es gibt mehr Schafe als Menschen in Island.",
      "Bier war in Island bis 1989 verboten.",
      "Island hat keinen Waldanteil; die meisten Bäume wurden von den Wikingern abgeholzt.",
      "Viele Isländer glauben noch heute an Elfen und Trolle."
    ],
    hu: [
      "Izlandon nincsenek vasútvonalak.",
      "Ez azon kevés országok egyike, ahol nincsenek szúnyogok.",
      "A lakosság több mint 60%-a Reykjavíkban él.",
      "Izlandon több mint 30 aktív vulkánrendszer található.",
      "Az ország szinte 100%-ban megújuló energiát használ.",
      "Az Althingi (az izlandi parlament) a világ legrégebbi létező parlamentje (930-ban alapították).",
      "Izlandon több juh él, mint ember.",
      "A sör 1989-ig be volt tiltva Izlandon.",
      "Izlandnak szinte nincs erdős területe; a legtöbb fát a vikingek vágták ki.",
      "Sok izlandi ma is hisz az elfekben és a trollokban."
    ],
    ro: [
      "Islanda nu are căi ferate (trenuri).",
      "Este una dintre puținele țări fără țânțari.",
      "Mai mult de 60% din populație trăiește în Reykjavík.",
      "Islanda are peste 30 de sisteme vulcanice active.",
      "Țara folosește aproape 100% energie regenerabilă.",
      "Althingi (parlamentul Islandei) este cel mai vechi parlament existent din lume (fondat în 930).",
      "Există mai multe oi decât oameni în Islanda.",
      "Berea a fost interzisă în Islanda până în 1989.",
      "Islanda nu are păduri; majoritatea copacilor au fost tăiați de vikingi.",
      "Mulți islandezi cred și astăzi în elfi și troli."
    ],
    en: [
      "Iceland has no public railways.",
      "It is one of the few countries in the world with no mosquitoes.",
      "More than 60% of the population lives in Reykjavík.",
      "Iceland has over 30 active volcanic systems.",
      "The country uses almost 100% renewable energy.",
      "The Althingi (Iceland's parliament) is the oldest surviving parliament in the world (founded in 930).",
      "There are more sheep than people in Iceland.",
      "Beer was banned in Iceland until 1989.",
      "Iceland has very few forests; most trees were cut down by Vikings.",
      "Many Icelanders still believe in elves and trolls."
    ]
  },
  factsAdvanced: {
    de: [
      "Island liegt geologisch auf dem Mittelatlantischen Rücken, was die Hauptursache für die vulkanische und geothermische Aktivität ist.",
      "Etwa 73 % der isländischen Stromerzeugung stammen aus Wasserkraft und 27 % aus Geothermie.",
      "Die isländische Sprache ist äußerst konservativ und steht dem Altnordischen der Wikinger sehr nahe.",
      "Isländer haben keine traditionellen Nachnamen; sie verwenden patronymische Namen mit den Endungen '-son' oder '-dóttir'."
    ],
    hu: [
      "Izland geológiailag a Közép-Atlanti-hátságon fekszik, ami a vulkáni és geotermikus tevékenység fő oka.",
      "Az ország villamosenergia-termelésének kb. 73%-a vízerőművekből, 27%-a pedig geotermikus erőművekből származik.",
      "Az izlandi nyelv rendkívül konzervatív, és nagyon közel áll az óészaki nyelvhez, amelyet a vikingek beszéltek.",
      "Az izlandiaknak nincs hagyományos vezetéknevük; a gyermekek apjuk (vagy anyjuk) keresztnevéből képzett nevet kapnak '-son' (fiú) vagy '-dóttir' (lány) végződéssel.",
      "A 2008-as pénzügyi válság súlyosan érintette az országot, de azóta gazdasága nagymértékben helyreállt, részben a turizmusnak köszönhetően.",
      "A lunda (puffin) Izland nem hivatalos madara, a világ lundapopulációjának több mint fele itt fészkel.",
      "A híres izlandi pulóver, a 'lopapeysa', jellegzetes mintázatú, és helyi gyapjúból készül, amely kiváló hőszigetelő tulajdonságokkal rendelkezik."
    ],
    ro: [
      "Islanda are o populație de aproximativ 370.000 de locuitori, fiind una dintre cele mai slab populate țări din Europa.",
      "Energia geotermală asigură încălzirea a peste 90% din locuințele islandeze.",
      "Limba islandeză a rămas aproape neschimbată de la vechea limbă nordică vorbită de vikingi.",
      "Cascada Dettifoss este cea mai puternică cascadă din Europa, cu un debit mediu de 193 de metri cubi pe secundă.",
      "Islanda nu are o armată permanentă.",
      "Consumul de Coca-Cola pe cap de locuitor este mai mare în Islanda decât în orice altă țară.",
      "Parcul Național Vatnajökull acoperă aproximativ 14% din suprafața totală a țării.",
      "Prima femeie președinte aleasă democratic din lume a fost Vigdís Finnbogadóttir din Islanda, în 1980."
    ],
    en: [
      "Geologically, Iceland sits on the Mid-Atlantic Ridge, the primary reason for its intense volcanic and geothermal activity.",
      "The Icelandic language is exceptionally conservative, remaining very close to the Old Norse spoken by the Vikings.",
      "Icelanders use a patronymic (or matronymic) system; children's last names are derived from their father's (or mother's) first name, suffixed with '-son' (son) or '-dóttir' (daughter).",
      "The 2008 financial crisis severely impacted the country, but its economy has since recovered significantly, partly due to a tourism boom.",
      "The Atlantic Puffin is the unofficial bird of Iceland, with over half of the world's puffin population nesting here during summer.",
      "The iconic Icelandic sweater, the 'lopapeysa', is made from the wool of local sheep and has a distinctive yoke pattern.",
      "About 73% of the country's electricity is generated by hydropower, and 27% comes from geothermal power.",
      "Iceland does not have a standing army, navy, or air force."
    ]
  },
  descriptionAdvanced: {
    de: "Island, eine Inselnation im Nordatlantik, ist berühmt für seine dramatische Landschaft mit Vulkanen, Geysiren, Thermalquellen und Lavafeldern. Massive Gletscher sind in den Nationalparks Vatnajökull und Snæfellsjökull geschützt. Die meisten Einwohner leben in der Hauptstadt Reykjavík, die mit Erdwärme betrieben wird und das National- und Saga-Museum beherbergt, die Islands Wikingergeschichte nachzeichnen. Geographie-K7.",
    hu: "Izland, az észak-atlanti szigetország, drámai tájairól híres, vulkánokkal, gejzírekkel, hőforrásokkal és lávamezőkkel. A hatalmas gleccsereket a Vatnajökull és a Snæfellsjökull Nemzeti Parkok védik. A lakosság többsége a fővárosban, Reykjavíkban él, amely geotermikus energiával működik, és itt található a Nemzeti és a Saga Múzeum is, amelyek Izland viking történelmét mutatják be. Földrajz K7.",
    ro: "Islanda, o națiune insulară din Atlanticul de Nord, este renumită pentru peisajul său dramatic cu vulcani, gheizere, izvoare termale și câmpuri de lavă. Ghețarii masivi sunt protejați în parcurile naționale Vatnajökull și Snæfellsjökull. Majoritatea populației trăiește în capitala Reykjavík, care funcționează cu energie geotermală și găzduiește muzeele Național și Saga, care retrăiesc istoria vikingă a Islandei. Geografie K7.",
    en: "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavík, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history. Geography K7."
  },
  factsAdvanced: {
    de: [
      "Island liegt geologisch auf dem Mittelatlantischen Rücken, was die Hauptursache für die vulkanische und geothermische Aktivität ist.",
      "Etwa 73 % der isländischen Stromerzeugung stammen aus Wasserkraft und 27 % aus Geothermie.",
      "Die isländische Sprache ist äußerst konservativ und steht dem Altnordischen der Wikinger sehr nahe.",
      "Isländer haben keine traditionellen Nachnamen; sie verwenden patronymische Namen mit den Endungen '-son' oder '-dóttir'."
    ],
    hu: [
      "Izland geológiailag a Közép-Atlanti-hátságon fekszik, ami a vulkáni és geotermikus tevékenység fő oka.",
      "Az ország villamosenergia-termelésének kb. 73%-a vízerőművekből, 27%-a pedig geotermikus erőművekből származik.",
      "Az izlandi nyelv rendkívül konzervatív, és nagyon közel áll az óészaki nyelvhez, amelyet a vikingek beszéltek.",
      "Az izlandiaknak nincs hagyományos vezetéknevük; a gyermekek apjuk (vagy anyjuk) keresztnevéből képzett nevet kapnak '-son' (fiú) vagy '-dóttir' (lány) végződéssel.",
      "A 2008-as pénzügyi válság súlyosan érintette az országot, de azóta gazdasága nagymértékben helyreállt, részben a turizmusnak köszönhetően.",
      "A lunda (puffin) Izland nem hivatalos madara, a világ lundapopulációjának több mint fele itt fészkel.",
      "A híres izlandi pulóver, a 'lopapeysa', jellegzetes mintázatú, és helyi gyapjúból készül, amely kiváló hőszigetelő tulajdonságokkal rendelkezik."
    ],
    ro: [
      "Islanda are o populație de aproximativ 370.000 de locuitori, fiind una dintre cele mai slab populate țări din Europa.",
      "Energia geotermală asigură încălzirea a peste 90% din locuințele islandeze.",
      "Limba islandeză a rămas aproape neschimbată de la vechea limbă nordică vorbită de vikingi.",
      "Cascada Dettifoss este cea mai puternică cascadă din Europa, cu un debit mediu de 193 de metri cubi pe secundă.",
      "Islanda nu are o armată permanentă.",
      "Consumul de Coca-Cola pe cap de locuitor este mai mare în Islanda decât în orice altă țară.",
      "Parcul Național Vatnajökull acoperă aproximativ 14% din suprafața totală a țării.",
      "Prima femeie președinte aleasă democratic din lume a fost Vigdís Finnbogadóttir din Islanda, în 1980."
    ],
    en: [
      "Geologically, Iceland sits on the Mid-Atlantic Ridge, the primary reason for its intense volcanic and geothermal activity.",
      "The Icelandic language is exceptionally conservative, remaining very close to the Old Norse spoken by the Vikings.",
      "Icelanders use a patronymic (or matronymic) system; children's last names are derived from their father's (or mother's) first name, suffixed with '-son' (son) or '-dóttir' (daughter).",
      "The 2008 financial crisis severely impacted the country, but its economy has since recovered significantly, partly due to a tourism boom.",
      "The Atlantic Puffin is the unofficial bird of Iceland, with over half of the world's puffin population nesting here during summer.",
      "The iconic Icelandic sweater, the 'lopapeysa', is made from the wool of local sheep and has a distinctive yoke pattern.",
      "About 73% of the country's electricity is generated by hydropower, and 27% comes from geothermal power.",
      "Iceland does not have a standing army, navy, or air force."
    ]
  },
  image: "/geo-images/iceland/country-iceland.webp"
};
