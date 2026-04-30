import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraBelizeEconomicV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

poi_id = "bz-big-creek-port-economic-v2"
desc_ro = "Portul Big Creek reprezintă principalul punct de ieșire pentru exporturile agricole din sudul Belize-ului, având o importanță strategică imensă pentru economia națională. Situat în districtul Stann Creek, acest port de mare adâncime este singurul din țară capabil să primească nave de tip Panamax. Infrastructura sa modernă facilitează transportul masiv de banane, citrice și petrol brut către piețele internaționale. Investițiile recente au transformat zona într-un nod logistic vital, susținând mii de locuri de muncă în comunitățile Independence și Mango Creek. Rolul său în comerțul global subliniază capacitatea Belize-ului de a integra producția locală în lanțurile de aprovizionare mondiale. Geografie K7 - resurse economice și transport maritime."
facts_ro = '["Este singurul port din Belize care poate găzdui nave de mare tonaj Panamax.", "Gestionează exportul pentru întreaga producție națională de banane.", "Terminalul este esențial pentru transportul petrolului brut din Spanish Lookout.", "Dispune de o zonă de acostare de peste 1.000 de metri lungime."]'

# Find the POI block
poi_pattern = rf'id:\s*"{poi_id}".*?descriptionAdvanced:\s*\{{.*?ro:\s*""'
if re.search(poi_pattern, content, re.DOTALL):
    print(f"Found POI {poi_id} description")
    content = re.sub(rf'(id:\s*"{poi_id}".*?descriptionAdvanced:\s*\{{.*?ro:\s*")("")', rf'\1{desc_ro}\2', content, 1, re.DOTALL)

poi_pattern_facts = rf'id:\s*"{poi_id}".*?factsAdvanced:\s*\{{.*?ro:\s*\[\]'
if re.search(poi_pattern_facts, content, re.DOTALL):
    print(f"Found POI {poi_id} facts")
    content = re.sub(rf'(id:\s*"{poi_id}".*?factsAdvanced:\s*\{{.*?ro:\s*)(\[\])', rf'\1{facts_ro}', content, 1, re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
