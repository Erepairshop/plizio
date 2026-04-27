import re

def update_poi_file(file_path, updates):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, hu_desc, hu_facts in updates:
        # Improved regex to preserve commas and ensure correct formatting
        desc_pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?descriptionAdvanced:\s*{[^}]*?hu:\s*)"[^"]*"(.*?,)'
        content = re.sub(desc_pattern, r'\1' + f'"{hu_desc}"' + r'\2', content, flags=re.DOTALL)
        
        facts_pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?factsAdvanced:\s*{[^}]*?hu:\s*)\[[^\]]*\](.*?,)'
        content = re.sub(facts_pattern, r'\1' + f'{hu_facts}' + r'\2', content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Correct Data
fixes = [
    ("historical-simontornyai-var-extra", 
     "A simontornyai vár a Sió-csatorna partján magasodó, különleges építészeti emlék, melyben a gótika, a reneszánsz és a barokk stílusjegyei egyaránt felfedezhetők. A vár nevét Simon bíróról kapta, de igazi fénykorát a reneszánsz idején élte. Az erődítmény fontos szerepet játszott a török elleni végvári harcokban és a Rákóczi-szabadságharcban. Simontornya vára a Dunántúl egyik legértékesebb műemléke. Történelem K5 — reneszánsz palotaépítészet.",
     '["A vár alapjai a 13. század végén épültek lakótoronyként.", "Pompás reneszánsz faragványai olasz mesterek munkái.", "A vár 1545-ben került török kézre, és sokáig a hódoltság része maradt.", "A Rákóczi-szabadságharc idején fontos kuruc bázis volt.", "A vár rekonstrukciója során feltárták az eredeti vizesárkot.", "Belsejében értékes gótikus kandallómaradványok láthatók.", "A várudvaron nyaranta színházi előadásokat rendeznek.", "Az épület az ország egyik legépebben maradt lovagvára."]'),
    ("industry-lego-nyiregyhaza-extra", 
     "A nyíregyházi LEGO gyár a világ egyik legjelentősebb és legmodernebb játékgyára, ahol naponta millió számra készülnek a híres színes építőkockák. A 2014-ben átadott komplexum a dán cég egyik legfontosabb globális bázisa. A gyárban a teljes folyamat jelen van a fröccsöntéstől a csomagolásig. A nyíregyházi gyár az innováció központja a régióban. Gazdasági ismeretek K8 — globális ellátási láncok.",
     '["A nyíregyházi LEGO gyár területe meghaladja a 160 000 négyzetmétert.", "Ez az egyik legnagyobb dán beruházás Magyarországon.", "A gyár tetején hatalmas napelempark biztosítja a tiszta energiát.", "Évente több milliárd LEGO kockát gyártanak és csomagolnak itt.", "A gyár saját logisztikai központtal rendelkezik.", "A vállalat szorosan együttműködik a helyi iskolákkal.", "Kiemelt figyelmet fordítanak a hulladékmentes gyártásra.", "A gyár látogatóközpontja bepillantást enged a titkokba."]'),
]

update_poi_file('lib/visualLab/data/poiExtraHu3.ts', fixes)
