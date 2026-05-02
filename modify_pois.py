import sys
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Target range
target_lines = lines[:1500]
content = "".join(target_lines)

poi_facts = {
    "HU": [
        "Az Országház a világ harmadik legnagyobb parlamenti épülete.",
        "Magyarország rendelkezik a világ legnagyobb termálvizes barlangrendszerével.",
        "A magyar konyha egyik legismertebb alapanyaga a fűszerpaprika.",
        "Itt található Európa legnagyobb zsinagógája."
    ],
    "budapest": [
        "Budapest a Duna két partján, Buda és Pest egyesülésével jött létre 1873-ban.",
        "A város alatt több mint 120 termálforrás tör fel naponta.",
        "Itt közlekedik a kontinens első földalatti vasútja.",
        "A magyar fővárost gyakran emlegetik a „fürdők városa” néven."
    ],
    "baranya": [
        "Pécs mediterrán hangulatú belvárosa az UNESCO Világörökség része.",
        "Villány az ország egyik legelismertebb vörösbortermelő vidéke.",
        "A Mecsek hegység különleges klímája kedvez a szelídgesztenye termesztésének.",
        "Mohácson rendezik meg minden évben a látványos busójárást."
    ],
    "bacs-kiskun": [
        "Ez Magyarország legnagyobb területű vármegyéje.",
        "Kecskemét híres a szecessziós építészetéről és a barackpálinkájáról.",
        "A Kiskunsági Nemzeti Park szikes tavai és homokbuckái egyedülállóak.",
        "Bugac környékén ma is élő a pusztai lovas hagyományőrzés."
    ],
    "bekes": [
        "Békéscsaba a világhírű csabai kolbász hazája és a Kolbászfesztivál otthona.",
        "Gyulán található Közép-Európa egyetlen épen maradt gótikus téglaerődítménye.",
        "Szarvason látható a történelmi Magyarország földrajzi középpontja.",
        "A vármegye termőföldjei az ország legjobb minőségű feketeföldjei közé tartoznak."
    ],
    "borsod-abauj-zemplen": [
        "A Tokaji borvidék a világ első zárt borvidéke és világörökségi helyszín.",
        "Itt található az Aggteleki-karszt lenyűgöző barlangrendszere.",
        "Miskolctapolca Barlangfürdője Európában egyedülálló természetes képződmény.",
        "A Zempléni-hegység várai, mint Boldogkő vagy Füzér, festői látványt nyújtanak."
    ],
    "csongrad-csanad": [
        "Szeged a „napfény városa”, mivel itt a legmagasabb a napsütéses órák száma.",
        "A szegedi fűszerpaprika és a Pick szalámi világszerte ismert hungarikumok.",
        "Ópusztaszeren látható a monumentális Feszty-körkép.",
        "Makó városa a különleges hagymájáról és a Makovecz-tervezte fürdőjéről híres."
    ],
    "fejer": [
        "Székesfehérvár a magyar királyok egykori koronázó és temetkezési városa.",
        "A Velencei-tó Magyarország egyik legmelegebb vizű tava.",
        "Martonvásáron található a gyönyörű Brunszvik-kastély és a Beethoven Múzeum.",
        "A vármegye ipara, különösen a járműgyártás, országos szinten is kiemelkedő."
    ],
    "gyor-moson-sopron": [
        "A Pannonhalmi Főapátság ezeréves múltjával az ország egyik legfontosabb szellemi központja.",
        "Sopron a „hűség városa”, ahol 1921-ben népszavazással döntöttek a maradásról.",
        "A Fertő-táj az UNESCO Világörökség része, közös terület Ausztriával.",
        "Győr a folyók városa, ahol több nagy folyó torkollik a Dunába."
    ],
    "hajdu-bihar": [
        "A Hortobágy Európa legnagyobb összefüggő füves pusztája.",
        "Debrecen a „kálvinista Róma”, a magyar reformáció történelmi központja.",
        "Hajdúszoboszlón található Európa legnagyobb fürdőkomplexuma.",
        "A hortobágyi Kilenclyukú híd a magyar puszta egyik legismertebb jelképe."
    ],
    "heves": [
        "Itt található Magyarország legmagasabb pontja, a Kékes-tető.",
        "Eger városa híres a várvédő hősökről és a különleges bikavér borról.",
        "Egerszalókon egyedülálló mészkőlerakódás, a „sódomb” látható.",
        "A Mátra és a Bükk hegységek az ország legnépszerűbb túraútvonalait rejtik."
    ],
    "jasz-nagykun-szolnok": [
        "A Tisza-tó az ország második legnagyobb tava és az ökoturizmus paradicsoma.",
        "Szolnok városa a Tisza partján fontos közlekedési és kulturális csomópont.",
        "A vármegye a jászok és kunok betelepülésének történelmi emlékeit őrzi.",
        "Karcag környéke a hagyományos birkapörkölt főzésének fellegvára."
    ],
    "komarom-esztergom": [
        "Esztergom az ország első fővárosa és a magyar katolikus egyház központja.",
        "Itt található az Esztergomi Bazilika, Magyarország legnagyobb temploma.",
        "Tata az „élővizek városa”, híres az Öreg-tóról és a váráról.",
        "Komárom erődrendszere Közép-Európa egyik legnagyobb katonai létesítménye."
    ],
    "nograd": [
        "Hollókő ófaluja az UNESCO Világörökség része, az élő népművészet központja.",
        "Nógrád a várak földje, olyan erődökkel, mint Salgó vagy Somoskő vára.",
        "Ipolytarnócon millió éves ősmaradványok és megkövült fák láthatók.",
        "A vármegye erdősültsége az egyik legmagasabb az egész országban."
    ],
    "pest": [
        "A vármegye körbeöleli Budapestet, az ország legnépesebb régiója.",
        "Itt található a gödöllői Grassalkovich-kastély, Sisi kedvenc rezidenciája.",
        "Visegrád a középkori magyar királyok egyik legfontosabb székhelye volt.",
        "Szentendre festői utcái és galériái a művészek és turisták kedvencei."
    ],
    "somogy": [
        "A vármegye a Balaton déli partjának teljes szakaszát magában foglalja.",
        "A Zselici Csillagpark Európa egyik legjobb csillagászati megfigyelőhelye.",
        "Kaposvár a „virágok városa”, híres színházáról és szecessziós épületeiről.",
        "Somogy vármegye vadállománya és vadászterületei világszerte elismertek."
    ],
    "szabolcs-szatmar-bereg": [
        "Ez az egyetlen vármegye, amely három szomszédos országgal is határos.",
        "A Felső-Tisza-vidék középkori templomai egyedülálló kulturális kincsek.",
        "Nyíregyháza állatparkja többször is elnyerte Európa legjobb állatkertje címet.",
        "A vármegye az ország „almaskertje”, itt terem a legtöbb magyar alma."
    ],
    "tolna": [
        "Szekszárd az ország egyik legkisebb vármegyeszékhelye, de híres borvidék.",
        "A Gemenci-erdő Európa legnagyobb összefüggő ártéri erdősége.",
        "Pakson működik Magyarország egyetlen atomerőműve.",
        "A vármegye területén jelentős a dunai svábok hagyományőrzése."
    ],
    "vas": [
        "Szombathely, az ókori Savaria, Magyarország egyik legrégebbi városa.",
        "Itt található a román kori építészet remekműve, a jáki apátsági templom.",
        "Bükfürdő és Sárvár gyógyvizei nemzetközi hírnévnek örvendenek.",
        "Az Őrség népi építészete és kézműves hagyományai egyedülállóak az országban."
    ],
    "veszprem": [
        "Veszprém a „királynék városa”, 2023-ben Európa Kulturális Fővárosa volt.",
        "A Bakony hegység sűrű erdői egykor a híres betyárok búvóhelyei voltak.",
        "A Tihanyi Apátság alapítólevele az egyik legfontosabb magyar nyelvemlék.",
        "Badacsony bazaltorgonái és borai a Balaton-felvidék jelképei."
    ],
    "zala": [
        "Hévízen található a világ legnagyobb biológiailag aktív termál tava.",
        "Keszthelyen látható a Festetics-kastély, az ország egyik legszebb barokk palotája.",
        "A Zalai-dombság festői lankái az ökoturizmus kedvelt célpontjai.",
        "Itt indult el a magyarországi kőolajbányászat a 20. század elején."
    ],
    "budapest-city": [
        "Budapest alatt hatalmas barlangrendszer húzódik, amit a termálvíz alakított ki.",
        "A Margit-sziget a város „tüdeje”, népszerű pihenőhely a Duna közepén.",
        "A magyar főváros ad otthont a világ egyik legnagyobb Parlamentjének.",
        "Az Andrássy út és a Hősök tere a világörökség részét képezi."
    ],
    "budai-var": [
        "A Budai Várnegyed középkori utcái ma is őrzik az egykori királyi székhely hangulatát.",
        "A Mátyás-templom a magyar koronázások történelmi helyszíne volt.",
        "A Halászbástyáról nyílik a legszebb kilátás a pesti oldalra és a Dunára.",
        "A várhegy alatt egy 10 kilométer hosszú barlangrendszer található."
    ],
    "orszaghaz": [
        "Az Országház belső díszítéséhez mintegy 40 kilogramm 24 karátos aranyat használtak fel.",
        "Az épületben összesen 691 helyiség található és 268 méter hosszú.",
        "Itt őrzik a Szent Koronát és a többi koronázási jelvényt.",
        "Az építkezésen csak magyar alapanyagokat és magyar mesterembereket alkalmaztak."
    ]
}

def process_poi(poi_block):
    match = re.search(r'id:\s*"([^"]+)"', poi_block)
    if not match:
        return poi_block
    poi_id = match.group(1)
    if poi_id not in poi_facts:
        return poi_block
    
    # Add factsAdvanced if not present
    if 'factsAdvanced:' not in poi_block:
        facts_match = re.search(r'(facts:\s*\{.*?\},)', poi_block, re.DOTALL)
        if facts_match:
            facts_section = facts_match.group(1)
            new_facts_advanced = '\n    factsAdvanced: {\n      "de": [],\n      "hu": [\n'
            for f in poi_facts[poi_id]:
                new_facts_advanced += f'        "{f}",\n'
            new_facts_advanced = new_facts_advanced.rstrip(',\n') + '\n      ],\n      "ro": [],\n      "en": []\n    },'
            poi_block = poi_block.replace(facts_section, facts_section + new_facts_advanced)
    
    return poi_block

# This is a bit complex with regex because of nested braces.
# Let's try a different approach: split by POI blocks.
# POIs are in arrays: export const X: POI[] = [ { ... }, { ... } ];

# Actually, I'll just use simple string replacement since I have the whole block for each POI.

# Split the content into POIs.
# This is tricky. Let's use the fact that each POI starts with { at the beginning of a line (after indentation) and ends with },.

new_content = ""
# Simple state machine to find POI blocks
current_poi_block = ""
in_poi = False
brace_count = 0

for line in target_lines:
    if not in_poi:
        if line.strip().startswith('{') and ('id:' in line or (target_lines[target_lines.index(line)+1] if target_lines.index(line)+1 < len(target_lines) else "").strip().startswith('id:')):
            in_poi = True
            current_poi_block = line
            brace_count = line.count('{') - line.count('}')
        else:
            new_content += line
    else:
        current_poi_block += line
        brace_count += line.count('{') - line.count('}')
        if brace_count == 0:
            # Process the block
            new_content += process_poi(current_poi_block)
            in_poi = False
            current_poi_block = ""

# If we were in a POI at the end of 1500 lines, just add it.
if in_poi:
    new_content += process_poi(current_poi_block)

sys.stdout.buffer.write(new_content.encode('utf-8'))
