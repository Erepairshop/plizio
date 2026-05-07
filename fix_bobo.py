with open("lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts", "r", encoding="utf-8") as f:
    content = f.read()

bobo_old = """    descriptionAdvanced: {
      en: "Bobo-Dioulasso is the second-largest city in Burkina Faso and is widely regarded as the nation's cultural capital. It is renowned for its unique Sudanese-Sahelian architectural style, best exemplified by the Great Mosque, constructed at the end of the 19th century. Situated in a fertile region, the city plays a vital role in the national economy, particularly within the cotton processing and textile sectors. Geography K7 — commercial and agricultural hubs."
    },
    factsAdvanced: {
      en: ["Originally founded in the 19th century under the name 'Sya'", "Core location for the national cotton industry (SOFITEX)", "The Great Mosque, a historical monument established in 1893", "Vital railway station on the strategic route towards Abidjan", "Urban center featuring a well-preserved historic railway station", "Central market celebrated for its diverse local produce"]
    },
    descriptionAdvanced: {
      de: "Bobo-Dioulasso ist die zweitgrößte Stadt Burkina Fasos und gilt als die kulturelle Hauptstadt. Sie ist bekannt für ihre Architektur im sudanesisch-sahelischen Stil, darunter die Große Moschee, die Ende des 19. Jahrhunderts erbaut wurde. Die Stadt liegt in einem fruchtbaren Gebiet, das für Baumwollanbau und Textilverarbeitung bekannt ist. Geografie K7 — Handelszentren und Agrarregionen.",
      ro: "Bobo-Dioulasso este al doilea oraș ca mărime din Burkina Faso, fiind considerat capitala culturală a națiunii. Este faimos pentru arhitectura sa tradițională în stil sudano-sahelian, precum Marea Moschee, ridicată la sfârșitul secolului al XIX-lea. Orașul este situat într-o zonă fertilă, jucând un rol crucial în industria prelucrării bumbacului și a textilelor din regiune. Geografie K7 — centre comerciale și agricole."
    },
    factsAdvanced: {
      de: ["Gründung im 19. Jahrhundert als 'Sya'", "Zentrum der Baumwollindustrie (SOFITEX)", "Architekturdenkmal: Große Moschee von 1893", "Wichtiger Bahnhof an der Strecke nach Abidjan", "Stadtzentrum mit alter Eisenbahnstation", "Bekannt für den 'Piscine de Doufié' Markt"],
      ro: ["Fondat în secolul al XIX-lea sub numele de 'Sya'", "Nucleul industriei bumbacului (SOFITEX)", "Moscheea Mare, monument istoric din 1893", "Stație feroviară vitală pe ruta către Abidjan", "Centru urban cu o gară istorică conservată", "Piața centrală celebră pentru produsele locale"]
    }"""

bobo_new = """    descriptionAdvanced: {
      de: "Bobo-Dioulasso ist die zweitgrößte Stadt Burkina Fasos und gilt als die kulturelle Hauptstadt. Sie ist bekannt für ihre Architektur im sudanesisch-sahelischen Stil, darunter die Große Moschee, die Ende des 19. Jahrhunderts erbaut wurde. Die Stadt liegt in einem fruchtbaren Gebiet, das für Baumwollanbau und Textilverarbeitung bekannt ist. Geografie K7 — Handelszentren und Agrarregionen.",
      ro: "Bobo-Dioulasso este al doilea oraș ca mărime din Burkina Faso, fiind considerat capitala culturală a națiunii. Este faimos pentru arhitectura sa tradițională în stil sudano-sahelian, precum Marea Moschee, ridicată la sfârșitul secolului al XIX-lea. Orașul este situat într-o zonă fertilă, jucând un rol crucial în industria prelucrării bumbacului și a textilelor din regiune. Geografie K7 — centre comerciale și agricole.",
      en: "Bobo-Dioulasso is the second-largest city in Burkina Faso and is widely regarded as the nation's cultural capital. It is renowned for its unique Sudanese-Sahelian architectural style, best exemplified by the Great Mosque, constructed at the end of the 19th century. Situated in a fertile region, the city plays a vital role in the national economy, particularly within the cotton processing and textile sectors. Geography K7 — commercial and agricultural hubs."
    },
    factsAdvanced: {
      de: ["Gründung im 19. Jahrhundert als 'Sya'", "Zentrum der Baumwollindustrie (SOFITEX)", "Architekturdenkmal: Große Moschee von 1893", "Wichtiger Bahnhof an der Strecke nach Abidjan", "Stadtzentrum mit alter Eisenbahnstation", "Bekannt für den 'Piscine de Doufié' Markt"],
      ro: ["Fondat în secolul al XIX-lea sub numele de 'Sya'", "Nucleul industriei bumbacului (SOFITEX)", "Moscheea Mare, monument istoric din 1893", "Stație feroviară vitală pe ruta către Abidjan", "Centru urban cu o gară istorică conservată", "Piața centrală celebră pentru produsele locale"],
      en: ["Originally founded in the 19th century under the name 'Sya'", "Core location for the national cotton industry (SOFITEX)", "The Great Mosque, a historical monument established in 1893", "Vital railway station on the strategic route towards Abidjan", "Urban center featuring a well-preserved historic railway station", "Central market celebrated for its diverse local produce"]
    }"""

content = content.replace(bobo_old, bobo_new)
with open("lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts", "w", encoding="utf-8") as f:
    f.write(content)
