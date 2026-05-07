import re

with open("lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Pattern for the duplicated/split descriptionAdvanced block
# This regex looks for two consecutive descriptionAdvanced blocks and merges them.
# The previous structure had one with 'en' and one with 'de', 'ro', 'hu'.

pattern = r'(descriptionAdvanced: \{\s*en: ".*?"\s*\},\s*)(descriptionAdvanced: \{\s*de: ".*?",\s*ro: ".*?",\s*\}hu: ".*?"\s*\})'
replacement = r'descriptionAdvanced: { en: "\1", de: "\2", ro: "\3", hu: "\4" }' 
# Actually, it's safer to just manually replace the entire block per object based on the known pattern.

# Let's try a simpler approach: finding the sequence and replacing it with one correct block.
def replace_block(match):
    # This will be tricky, let's just use manual string replacement logic on the identified block
    return "" 

# Actually, I'll just use a direct replace for the two known items to be safe.
# Ouagadougou:
ouaga_old = """    descriptionAdvanced: {
      en: "Ouagadougou, the capital of Burkina Faso, is the administrative, economic, and cultural heart of the nation. Originating as a settlement in the 11th century, it became the traditional seat of the Mogho Naba, the emperor of the Mossi Empire. Today, the city is globally recognized for hosting the Pan-African Film and Television Festival of Ouagadougou (FESPACO), the largest event of its kind in Africa. Geography K7 — West African urban centers."
    },
    factsAdvanced: {
      en: ["Capital city since 1919 during the French colonial era", "Population exceeding 2 million inhabitants", "Official seat of the Mogho Naba Palace", "Primary host for the biennial FESPACO film festival", "Located at an average altitude of approximately 300 meters", "The most significant road and rail hub in the country"]
    },
    descriptionAdvanced: {
      de: "Ouagadougou, die Hauptstadt von Burkina Faso, ist das wirtschaftliche und kulturelle Zentrum des Landes. Die Stadt wurde im 11. Jahrhundert gegründet und wuchs im Laufe der Jahrhunderte zur Residenz des Mogho Naba, des traditionellen Kaisers der Mossi. Heute beherbergt sie das Pan-Afrikanische Film- und Fernsehfestival (FESPACO), das größte seiner Art in Afrika. Geografie K7 — städtische Zentren in Westafrika.",
      ro: "Ouagadougou, capitala statului Burkina Faso, reprezintă inima administrativă, economică și culturală a țării. Orașul a evoluat dintr-o așezare din secolul al XI-lea, devenind reședința tradițională a Mogho Naba, împăratul imperiului Mossi. Astăzi, Ouagadougou este renumit pe plan internațional pentru găzduirea Festivalului Panafrican de Film și Televiziune (FESPACO), cel mai mare eveniment de profil din Africa. Geografie K7 — centre urbane în Africa de Vest.",
      }hu: "Ouagadougou, Burkina Faso fővárosa, az ország közigazgatási, gazdasági és kulturális központja. A város a 11. században jött létre, és az idők folyamán a Mosszi Birodalom császárának, a Mogho Nabának a székhelyévé vált. Manapság világszerte ismert a Panafrikai Film- és Televíziós Fesztiválról (FESPACO), amely Afrika legnagyobb ilyen jellegű rendezvénye. Földrajz K7 — nyugat-afrikai városi központok."
    },
    factsAdvanced: {
      de: ["Hauptstadt seit 1919 (französische Kolonialzeit)", "Einwohnerzahl über 2 Millionen Menschen", "Sitz des Mogho Naba Palastes", "Zentrum des FESPACO Festivals", "Auf einer Höhe von ca. 300 Metern gelegen", "Wichtigster Verkehrsknotenpunkt des Landes"],
      ro: ["Capitala țării din anul 1919 (perioada colonială franceză)", "Populație de peste 2 milioane de locuitori", "Sediul oficial al palatului Mogho Naba", "Centrul cultural pentru festivalul FESPACO", "Situat la o altitudine medie de aproximativ 300 metri", "Cel mai important nod rutier și feroviar al națiunii"],
      }hu: ["Főváros 1919 óta (francia gyarmati időszak)", "Népessége meghaladja a 2 millió főt", "A Mogho Naba palota székhelye", "A FESPACO fesztivál központja", "Kb. 300 méteres tengerszint feletti magasságban fekszik", "Az ország legfontosabb közlekedési csomópontja"]
    }"""

# Manually construct the correct one.
ouaga_new = """    descriptionAdvanced: {
      de: "Ouagadougou, die Hauptstadt von Burkina Faso, ist das wirtschaftliche und kulturelle Zentrum des Landes. Die Stadt wurde im 11. Jahrhundert gegründet und wuchs im Laufe der Jahrhunderte zur Residenz des Mogho Naba, des traditionellen Kaisers der Mossi. Heute beherbergt sie das Pan-Afrikanische Film- und Fernsehfestival (FESPACO), das größte seiner Art in Afrika. Geografie K7 — städtische Zentren in Westafrika.",
      ro: "Ouagadougou, capitala statului Burkina Faso, reprezintă inima administrativă, economică și culturală a țării. Orașul a evoluat dintr-o așezare din secolul al XI-lea, devenind reședința tradițională a Mogho Naba, împăratul imperiului Mossi. Astăzi, Ouagadougou este renumit pe plan internațional pentru găzduirea Festivalului Panafrican de Film și Televiziune (FESPACO), cel mai mare eveniment de profil din Africa. Geografie K7 — centre urbane în Africa de Vest.",
      hu: "Ouagadougou, Burkina Faso fővárosa, az ország közigazgatási, gazdasági és kulturális központja. A város a 11. században jött létre, és az idők folyamán a Mosszi Birodalom császárának, a Mogho Nabának a székhelyévé vált. Manapság világszerte ismert a Panafrikai Film- és Televíziós Fesztiválról (FESPACO), amely Afrika legnagyobb ilyen jellegű rendezvénye. Földrajz K7 — nyugat-afrikai városi központok.",
      en: "Ouagadougou, the capital of Burkina Faso, is the administrative, economic, and cultural heart of the nation. Originating as a settlement in the 11th century, it became the traditional seat of the Mogho Naba, the emperor of the Mossi Empire. Today, the city is globally recognized for hosting the Pan-African Film and Television Festival of Ouagadougou (FESPACO), the largest event of its kind in Africa. Geography K7 — West African urban centers."
    },
    factsAdvanced: {
      de: ["Hauptstadt seit 1919 (französische Kolonialzeit)", "Einwohnerzahl über 2 Millionen Menschen", "Sitz des Mogho Naba Palastes", "Zentrum des FESPACO Festivals", "Auf einer Höhe von ca. 300 Metern gelegen", "Wichtigster Verkehrsknotenpunkt des Landes"],
      ro: ["Capitala țării din anul 1919 (perioada colonială franceză)", "Populație de peste 2 milioane de locuitori", "Sediul oficial al palatului Mogho Naba", "Centrul cultural pentru festivalul FESPACO", "Situat la o altitudine medie de aproximativ 300 metri", "Cel mai important nod rutier și feroviar al națiunii"],
      hu: ["Főváros 1919 óta (francia gyarmati időszak)", "Népessége meghaladja a 2 millió főt", "A Mogho Naba palota székhelye", "A FESPACO fesztivál központja", "Kb. 300 méteres tengerszint feletti magasságban fekszik", "Az ország legfontosabb közlekedési csomópontja"],
      en: ["Capital city since 1919 during the French colonial era", "Population exceeding 2 million inhabitants", "Official seat of the Mogho Naba Palace", "Primary host for the biennial FESPACO film festival", "Located at an average altitude of approximately 300 meters", "The most significant road and rail hub in the country"]
    }"""

content = content.replace(ouaga_old, ouaga_new)
with open("lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts", "w", encoding="utf-8") as f:
    f.write(content)
