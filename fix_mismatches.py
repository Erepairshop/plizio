import re
import os

def fix_poi_file(file_path, content_map):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        match_id = re.search(r'id:\s*"([^"]+)"', line)
        if match_id:
            poi_id = match_id.group(1)
            if poi_id in content_map:
                desc_hu, facts_hu = content_map[poi_id]
                
                # Advance until we find descriptionAdvanced
                while i < len(lines) and "descriptionAdvanced" not in lines[i]:
                    new_lines.append(lines[i])
                    i += 1
                
                if i < len(lines): # Found descriptionAdvanced
                    new_lines.append(lines[i]) # descriptionAdvanced: {
                    i += 1
                    # Skip de, then replace hu
                    while i < len(lines) and "hu:" not in lines[i]:
                        new_lines.append(lines[i])
                        i += 1
                    
                    if i < len(lines):
                        # Replace hu line
                        indent = re.match(r'^(\s*)', lines[i]).group(1)
                        new_lines.append(f'{indent}hu: "{desc_hu}",\n')
                        i += 1
                    
                    # Advance until we find factsAdvanced
                    while i < len(lines) and "factsAdvanced" not in lines[i]:
                        new_lines.append(lines[i])
                        i += 1
                    
                    if i < len(lines):
                        new_lines.append(lines[i]) # factsAdvanced: {
                        i += 1
                        # Skip de, then replace hu
                        while i < len(lines) and "hu:" not in lines[i]:
                            new_lines.append(lines[i])
                            i += 1
                        
                        if i < len(lines):
                            # Replace hu line
                            indent = re.match(r'^(\s*)', lines[i]).group(1)
                            new_lines.append(f'{indent}hu: {facts_hu},\n')
                            i += 1
            else:
                new_lines.append(line)
                i += 1
        else:
            new_lines.append(line)
            i += 1

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

# Content Map (collected from my previous batches)
content_map = {
    "mountain-janos-hegy-extra": ("A János-hegy 527 méteres magasságával Budapest legmagasabb pontja, a Budai-hegység ikonikus csúcsa. A hegytetőn koronaként trónol az 1910-ben átadott, neoromán stílusú Erzsébet-kilátó, melyet Schulek Frigyes tervezett Erzsébet királyné tiszteletére. A kilátó teraszairól tiszta időben akár 80 kilométerre is ellátni, feltárul az egész főváros, a kanyargó Duna és a távoli Tátra csúcsai is. A hegy nemcsak földrajzi adottságai, hanem közlekedési különlegességei miatt is népszerű: ide érkezik a Zugligetből induló Libegő, és a közelben kanyarog a Gyermekvasút is. Földrajz K7 — Magyarország középhegységei.", '["527 méterével ez Budapest legmagasabb pontja a XII. kerületben.", "Az Erzsébet-kilátót 1910-ben adták át, tervezője Schulek Frigyes.", "A kilátó építéséhez köveket igáslovakkal és kötélpályával juttatták fel.", "A hegy csúcsáról tiszta időben a Magas-Tátra is megpillantható.", "A Libegő 1970 óta közlekedik a Zugliget és a János-hegy között.", "A hegy belsejében található a fokozottan védett János-hegyi-átjáró-barlang.", "A kilátó névadója, Sisi királyné 1882-ben járt itt először.", "A környező erdőkben a bükk és a tölgy a meghatározó fafaj."]'),
    "mountain-harmashatar-hegy-extra": ("A 495 méter magas Hármashatár-hegy a Budai-hegység északi részének népszerű kirándulóhelye. Nevét onnan kapta, hogy 1873-ig itt találkozott Buda, Óbuda és Pesthidegkút határa. A hegy különleges adottsága az állandó széljárás, emiatt már az 1930-as évek óta a magyar vitorlázórepülés bölcsője. A csúcson található Guckler Károly-kilátó egyedi faépítményéről 360 fokos körpanoráma nyílik. Földrajz K7 — karsztjelenségek és dolomithegységek.", '["A hegy neve Buda, Óbuda és Pesthidegkút határainak találkozására utal.", "Legmagasabb pontja 495 méterrel emelkedik a tengerszint fölé.", "A Guckler Károly-kilátó 2016-ban épült fenyőgerendákból.", "A hegy lábánál található repülőtér a vitorlázórepülés bázisa.", "Kőzete triász kori dolomit, melyen ritka sziklagyepek élnek.", "A csúcson lévő adótorony messziről felismerhetővé teszi a hegyet.", "Itt halad át az Országos Kéktúra egyik legnépszerűbb szakasza.", "A hegy oldalában található a népszerű Fenyőgyöngye vendéglő."]'),
    "historical-simontornyai-var-extra": ("A simontornyai vár a Sió-csatorna partján magasodó, különleges építészeti emlék, melyben a gótika, a reneszánsz és a barokk stílusjegyei egyaránt felfedezhetők. A vár nevét Simon bíróról kapta, de igazi fénykorát a reneszánsz idején élte. Az erődítmény fontos szerepet játszott a török elleni végvári harcokban és a Rákóczi-szabadságharcban. A várfalak között ma várostörténeti kiállítások várják a látogatókat. Simontornya vára a Dunántúl egyik legértékesebb műemléke. Történelem K5 — reneszánsz palotaépítészet.", '["A vár alapjai a 13. század végén épültek.", "Pompás reneszánsz faragványai olasz mesterek munkái.", "A vár 1545-ben került török kézre, és sokáig a hódoltság része maradt.", "A Rákóczi-szabadságharc idején fontos kuruc bázis volt.", "A vár rekonstrukciója során feltárták az eredeti vizesárkot.", "Belsejében értékes gótikus kandallómaradványok láthatók.", "A várudvaron nyaranta színházi előadásokat rendeznek.", "Az épület az ország egyik legépebben maradt lovagvára."]'),
    "industry-lego-nyiregyhaza-extra": ("A nyíregyházi LEGO gyár a világ egyik legjelentősebb és legmodernebb játékgyára, ahol naponta millió számra készülnek a híres színes építőkockák. A 2014-ben átadott komplexum a dán cég egyik legfontosabb globális bázisa. A gyárban a teljes folyamat jelen van a fröccsöntéstől a csomagolásig. A nyíregyházi gyár az innováció központja a régióban. Gazdasági ismeretek K8 — globális ellátási láncok.", '["A nyíregyházi LEGO gyár területe meghaladja a 160 000 négyzetmétert.", "Ez az egyik legnagyobb dán beruházás Magyarországon.", "A gyár tetején hatalmas napelempark biztosítja a tiszta energiát.", "Évente több milliárd LEGO kockát gyártanak és csomagolnak itt.", "A gyár saját logisztikai központtal rendelkezik.", "A vállalat szorosan együttműködik a helyi iskolákkal.", "Kiemelt figyelmet fordítanak a hulladékmentes gyártásra.", "A gyár látogatóközpontja bepillantást enged a titkokba."]'),
}

# Add more to content_map here... (I will do a large list)

fix_poi_file('lib/visualLab/data/poiExtraHu2.ts', content_map)
fix_poi_file('lib/visualLab/data/poiExtraHu3.ts', content_map)
