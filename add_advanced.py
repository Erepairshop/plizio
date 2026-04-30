import re
import json

def extract_pois(content, start_marker, end_marker):
    start_index = content.find(start_marker)
    if start_index == -1:
        return []
    end_index = content.find(end_marker, start_index)
    if end_index == -1:
        poi_section = content[start_index:]
    else:
        poi_section = content[start_index:end_index]
    
    # Very basic regex to find POI objects. 
    # We look for { id: "...", ... }
    # This might be tricky due to nesting, but POIs in this file are fairly flat.
    pois = []
    # Find all { id: ... } blocks
    # We use a non-greedy match for the content until we find a closing brace that is followed by a comma and newline or end of array
    # Actually, a better way is to split by "  {"
    blocks = poi_section.split("\n  {")
    for block in blocks[1:]:
        poi_str = "  {" + block.split("  },")[0] + "  }"
        pois.append(poi_str)
    return pois

with open('lib/visualLab/data/bulgariaPoi.ts', 'r', encoding='utf-8') as f:
    full_content = f.read()

cities_pois = extract_pois(full_content, "export const bulgariaCities", "];")

print(f"Extracted {len(cities_pois)} cities.")

# Example of how to add fields:
# We'll just append them before the last }

def add_advanced_fields(poi_str, desc_en, facts_en):
    # Prepare the new fields
    adv_fields = f"""  descriptionAdvanced: {{
    de: "",
    hu: "",
    ro: "",
    en: "{desc_en}"
  }},
  factsAdvanced: {{
    de: [],
    hu: [],
    ro: [],
    en: {json.dumps(facts_en, ensure_ascii=False)}
  }},
"""
    # Insert before the last }
    # We find the last newline followed by optional spaces and }
    parts = poi_str.rsplit('}', 1)
    if len(parts) == 2:
        # Check if descriptionAdvanced already exists
        if 'descriptionAdvanced' in poi_str:
            # Only update en if empty? User said "fill only empty en"
            # For simplicity, if it exists, I'll try to be surgical or just skip if en is present.
            # But the user also said "Add descriptionAdvanced... to Bulgarian POIs" in the context of creating NEW files.
            # In new files, I should probably just add them.
            return poi_str
        return parts[0] + adv_fields + "  }" + parts[1]
    return poi_str

# I will now generate the content for the 15 cities and write the file.
# Since I am a script, I will do it here.

cities_data = {
    "city-sofia": {
        "desc": "Sofia, the capital of Bulgaria, is a city where history and modernity meet at every corner. Nestled at the foot of the Vitosha Mountain, it is one of the oldest cities in Europe, with roots stretching back over 7,000 years. Visitors are greeted by the magnificent Alexander Nevsky Cathedral, a symbol of the city with its golden domes. The city center is a fascinating layer cake of history, where Roman ruins like the Serdica complex sit alongside Ottoman mosques and grand 19th-century architecture. Sofia is also known for its abundant mineral springs and lush green parks like Borisova Gradina. Today, it is a vibrant economic hub, particularly for the IT sector, while maintaining its spiritual heritage through numerous churches and the unique Square of Religious Tolerance. Whether you are exploring the National Museum of History or enjoying the lively Vitosha Boulevard, Sofia offers a rich, multi-layered experience.",
        "facts": [
            "Sofia is the only European capital with a 2,290-meter high mountain (Vitosha) just 15 minutes from the center.",
            "The city was named after the Saint Sophia Church, which dates back to the 4th century.",
            "It is home to over 30 mineral springs in the urban area, some used since Roman times.",
            "The Alexander Nevsky Cathedral can hold up to 5,000 people and is one of the world's largest Orthodox churches.",
            "Sofia's motto is 'Grows but does not age,' reflecting its continuous development over millennia.",
            "The metro system is the only one in Bulgaria, featuring stations that double as archaeological museums.",
            "The city sits at an average altitude of 550 meters, making it one of the highest capitals in Europe.",
            "It was known as Serdica in antiquity, a favorite city of Emperor Constantine the Great."
        ]
    },
    "city-plovdiv": {
        "desc": "Plovdiv is widely regarded as the oldest continuously inhabited city in Europe and one of the oldest in the world. Built on seven hills, it offers a breathtaking blend of ancient history and contemporary culture. The centerpiece of its historical legacy is the remarkably well-preserved Roman Theatre, which still hosts performances under the stars. Walking through the cobblestone streets of the Old Town, visitors can admire the ornate architecture of the Bulgarian National Revival period. The Kapana district, once a craftsman's quarter, has transformed into a trendy creative hub filled with galleries, cafes, and street art. Plovdiv's unique atmosphere earned it the title of European Capital of Culture in 2019. From the ancient ruins of Eumolpias on Nebet Tepe to the wide pedestrian promenade and the rowing canal, Plovdiv is a city that captures the heart of every traveler with its timeless charm and artistic spirit.",
        "facts": [
            "Plovdiv is older than Rome, Athens, and Constantinople, with over 8,000 years of history.",
            "The Ancient Roman Theatre was discovered only in the 1970s after a landslide.",
            "It is known as the 'City of the Seven Hills,' similar to Rome and Lisbon.",
            "The main pedestrian street is one of the longest in Europe, stretching for nearly 2 kilometers.",
            "The Kapana district's name means 'The Trap,' originally because of its labyrinthine streets.",
            "Plovdiv was the first Bulgarian city to be chosen as a European Capital of Culture.",
            "The city is divided by the Maritsa River, the longest river that runs entirely through the Balkans.",
            "It hosts the International Fair Plovdiv, one of the oldest and largest trade fairs in Southeast Europe."
        ]
    },
    "city-varna": {
        "desc": "Varna, known as the 'Maritime Capital of Bulgaria,' is a vibrant port city on the Black Sea coast. It perfectly combines the appeal of a seaside resort with the cultural depth of a historical center. The city is home to the world-famous Varna Gold Treasure, the oldest gold jewelry ever discovered, dating back to 4,600 BC. The Sea Garden, a sprawling park along the coast, is a favorite for locals and tourists alike, offering shaded walks, a zoo, and a terrarium. Varna is also a significant naval hub and home to the Bulgarian Naval Museum. The Dormition of the Mother of God Cathedral stands as a majestic landmark in the city center with its golden cupolas. During the summer, the city buzzes with international festivals, including the prestigious Varna Summer International Music Festival. Its sandy beaches and lively nightlife make it a premier destination for summer holidays in the Balkans.",
        "facts": [
            "The Varna Necropolis gold treasure is the oldest processed gold in the world, over 6,000 years old.",
            "The Sea Garden in Varna is the largest landscaped park on the Balkan Peninsula.",
            "Varna was known as Odessos by the ancient Greeks who founded a colony here in the 6th century BC.",
            "The city's Roman Baths are the largest in the Balkans and the fourth largest in Europe.",
            "Varna hosts the oldest international ballet competition in the world, founded in 1964.",
            "The Lake Varna is the deepest and largest lake on the Bulgarian Black Sea coast.",
            "It is a major educational center with over five universities and several naval academies.",
            "The city's Dolphinarium is the only one of its kind in the Balkan region."
        ]
    },
    "city-burgas": {
        "desc": "Burgas is the fourth largest city in Bulgaria and serves as a major economic and cultural hub on the southern Black Sea coast. It is uniquely surrounded by three large lakes—Atanasovsko, Burgas, and Mandra—which are vital biodiversity hotspots and bird sanctuaries. The city's Sea Garden is a beautiful coastal park featuring open-air theaters, sculptures, and panoramic views of the Burgas Gulf. Burgas is famous for its annual Sand Sculpture Festival, attracting artists from around the globe. The city center is pedestrian-friendly, filled with boutiques, cafes, and restaurants offering fresh Black Sea seafood. Burgas is also a gateway to nearby historical gems like Nessebar and Sozopol. As a significant port and home to the largest oil refinery in the Balkans, it balances industrial importance with a relaxed, artistic atmosphere. Whether you are birdwatching at the lakes or strolling along the pier, Burgas offers a diverse and welcoming environment.",
        "facts": [
            "Burgas is surrounded by three lakes, making it a unique wetland ecological system.",
            "The Atanasovsko Lake is known for its pink waters and therapeutic salt and lye pools.",
            "It is home to the Port of Burgas, the largest and most important seaport in Bulgaria.",
            "The city hosts a famous Sand Sculpture Festival every summer in the Sea Garden.",
            "Burgas International Airport is the second busiest in the country, serving the southern coast.",
            "The island of Saint Anastasia, located in the gulf, is the only inhabited island in Bulgaria.",
            "LUKOIL Neftochim Burgas is the largest oil refinery in Southeastern Europe.",
            "The city's pier (The Bridge) is a 300-meter long iconic symbol extending into the sea."
        ]
    },
    "city-veliko-tarnovo": {
        "desc": "Veliko Tarnovo, the 'City of the Tsars,' was the majestic capital of the Second Bulgarian Empire. Perched on three hills—Tsarevets, Trapezitsa, and Sveta Gora—the city is bisected by the winding Yantra River, creating a dramatic and picturesque landscape. The Tsarevets Fortress, with its thick walls and restored Patriarchal Cathedral, stands as a testament to the city's medieval glory. At night, the 'Sound and Light' show transforms the fortress into a vibrant display of history. The Old Town features narrow, tiered streets with traditional houses that seem to cling to the steep cliffs. In the Samovodska Charshiya market, craftsmen continue centuries-old traditions in pottery, weaving, and copper smithing. Veliko Tarnovo is not just a museum city; it is a lively university town with a dynamic cultural life. Its unique architecture and historical significance make it a central pillar of Bulgarian national identity and a must-visit for anyone interested in the soul of the Balkans.",
        "facts": [
            "Veliko Tarnovo served as the capital of Bulgaria for over 200 years (1185–1393).",
            "The Tsarevets Fortress was the primary residence of the Bulgarian emperors and patriarchs.",
            "The 'Sound and Light' show is one of only a few such performances in the world.",
            "The first Bulgarian Constitution was adopted in Veliko Tarnovo in 1879.",
            "The city's houses are built in a unique 'tiered' style on the steep slopes of the gorge.",
            "It is home to St. Cyril and St. Methodius University, one of Bulgaria's largest higher education institutions.",
            "The Yantra River forms several deep meanders, giving the city its distinctive shape.",
            "The Samovodska Charshiya is a living ethnographic complex where traditional crafts are still practiced."
        ]
    },
    "city-vidin": {
        "desc": "Vidin is a historic city located on the southern bank of the Danube River in northwestern Bulgaria. Its most iconic landmark is the Baba Vida Fortress, the only entirely preserved medieval castle in Bulgaria, which served as the city's primary defense for centuries. Vidin has a strategic location as a border town, connected to Romania by the impressive New Europe Bridge. The city's history spans from ancient Roman times, when it was known as Bononia, through the medieval period and Ottoman rule. The riverfront park is a peaceful place for strolls, offering beautiful views of the Danube. Vidin also boasts significant religious architecture, including the Saint Demetrius Cathedral, the second largest in Bulgaria, and the historic Vidin Synagogue. Despite its remote location, Vidin remains an important cultural and transport node, offering a quiet charm and deep historical insights into the Danube region's past.",
        "facts": [
            "Baba Vida is the only medieval Bulgarian fortress that remains fully preserved today.",
            "Vidin was once the capital of the independent Tsardom of Vidin in the 14th century.",
            "The Saint Demetrius Cathedral is the second largest Orthodox church in Bulgaria after Alexander Nevsky.",
            "The city is connected to Calafat, Romania, by the Danube Bridge 2, opened in 2013.",
            "The Vidin Synagogue, built in 1894, is the second largest in the country.",
            "The city was an important Roman military station named Bononia in the province of Moesia.",
            "The Danube River at Vidin is nearly 1 kilometer wide, making it a major waterway.",
            "The city's 'Danube Garden' is one of the oldest public parks in Bulgaria."
        ]
    },
    "city-vratsa": {
        "desc": "Vratsa is a stunning city nestled at the foot of the Vrachanski Balkan Mountains in northwestern Bulgaria. It is famous for its dramatic natural setting, dominated by the Vratsata Gorge, which features the highest vertical limestone cliffs in the Balkans. This makes Vratsa a premier destination for rock climbers and hikers. The city is also a gateway to the Ledenika Cave, one of Bulgaria's most popular underground attractions, known for its incredible stalactites and 'Concert Hall.' Vratsa's Regional History Museum houses the world-famous Rogozen Treasure, the largest Thracian silver treasure ever found. The city has a long history dating back to Thracian and Roman times and played a significant role in the Bulgarian struggle for independence. With its combination of alpine landscapes, rich archaeology, and outdoor adventure opportunities, Vratsa is a hidden gem for travelers seeking the wild beauty of the Bulgarian mountains.",
        "facts": [
            "Vratsata Gorge features vertical rocks up to 400 meters high, the tallest in the Balkans.",
            "The Rogozen Treasure found here consists of 165 silver vessels, the largest Thracian find.",
            "Ledenika Cave is famous for its 'Lake of Wishes' and amazing acoustics.",
            "The city's name comes from the word 'vrata,' meaning 'gate,' referring to the mountain pass.",
            "Vratsa is the starting point for the annual Botev Path hike, a major national patriotic event.",
            "The Vrachanski Balkan Nature Park protects over 700 species of higher plants.",
            "The city has two well-preserved medieval defense towers—Meschii and Kurtpashov.",
            "Vratsa is located at an altitude of 344 meters, right where the plain meets the mountains."
        ]
    },
    "city-shumen": {
        "desc": "Shumen is a significant historical and cultural center in northeastern Bulgaria, located at the foot of the Shumen Plateau. The city is dominated by the colossal 'Founders of the Bulgarian State' monument, a modernist masterpiece that can be seen from miles away. Shumen is a gateway to the roots of the Bulgarian nation, as it is located near the first two capitals, Pliska and Preslav. The Shumen Fortress, situated on the plateau, offers a fascinating look at fortifications from the Thracian period to the Middle Ages. The city also features the Tombul Mosque, the largest and most architecturally significant mosque in Bulgaria. Shumen is known for its strong educational traditions and its role in the Bulgarian National Revival. With its mixture of ancient ruins, monumental socialist art, and vibrant city life, Shumen offers a unique perspective on Bulgaria's long and complex history.",
        "facts": [
            "The 'Founders of the Bulgarian State' monument was built in 1981 to celebrate Bulgaria's 1,300th anniversary.",
            "The Tombul Mosque is the largest in Bulgaria and the second largest on the Balkan Peninsula.",
            "The Shumen Fortress has been inhabited for over 3,000 years, starting with the Thracians.",
            "The first symphony orchestra in Bulgaria was founded in Shumen in 1850.",
            "The Madara Rider, a UNESCO World Heritage site, is located just 15 kilometers from the city.",
            "Shumen is the birthplace of the first Bulgarian brewery, founded by Czech immigrants in 1882.",
            "The Shumen Plateau is home to numerous rock monasteries dating back to the 12th century.",
            "The city's name is believed to come from the word 'shuma,' meaning 'dense forest' or 'foliage.'"
        ]
    },
    "city-dobrich": {
        "desc": "Dobrich is the economic heart of the Dobrudzha region in northeastern Bulgaria, famously known as the 'Granary of Bulgaria.' The city is surrounded by vast, fertile plains that produce much of the country's grain. Dobrich has a rich agricultural heritage that is celebrated in its local culture and economy. One of its main attractions is the 'Old Dobrich' Ethnographic Complex, an open-air museum where traditional 19th-century crafts like pottery, weaving, and blacksmithing are still practiced. The St. George City Park is one of the oldest and largest in Bulgaria, providing a lush green oasis in the middle of the city. Dobrich also serves as an important transport and logistics hub, located near the Black Sea coast and the border with Romania. It is a city that prides itself on its hardworking spirit, its connection to the land, and its authentic Bulgarian traditions.",
        "facts": [
            "Dobrich is the center of the most productive agricultural region in Bulgaria, known as Dobrudzha.",
            "The 'Old Dobrich' complex is a reconstructed 19th-century marketplace with authentic workshops.",
            "St. George City Park was established in 1867 and covers over 25 hectares.",
            "The city was named after the medieval Bulgarian ruler Dobrotitsa.",
            "Dobrich was part of Romania for several periods in the early 20th century.",
            "The Art Gallery in Dobrich is one of the largest in the country, housed in a beautiful historic building.",
            "It is home to the only museum in the world dedicated to the writer Yordan Yovkov.",
            "The region around Dobrich is famous for its vast sunflower and wheat fields."
        ]
    },
    "city-sliven": {
        "desc": "Sliven is a historic industrial city located at the foot of the unique 'Blue Rocks' (Sinite Kamani) in southeastern Bulgaria. It is famously known as the 'City of the Hundred Voivodes' due to its role as a center for the Bulgarian resistance against Ottoman rule. Sliven is also the birthplace of Bulgarian industry; the first textile factory in the Balkans was founded here in 1834. The Sinite Kamani Nature Park towers over the city, offering dramatic quartz rock formations that appear blue under certain light conditions, making it a paradise for hikers and climbers. The city's history is well-documented in its numerous museums, including the house-museum of the legendary freedom fighter Hadzhi Dimitar. Today, Sliven remains an important regional center, balancing its industrial heritage with a strong cultural identity and the natural beauty of the Balkan Mountains.",
        "facts": [
            "Sliven is called the 'City of the Hundred Voivodes' because many hajduk leaders were born here.",
            "The first textile factory in the Ottoman Empire and the Balkans was opened in Sliven in 1834.",
            "Sinite Kamani (Blue Rocks) is a nature park known for its high biodiversity and rare birds of prey.",
            "An open-air lift connects the city directly to the high parts of the Blue Rocks.",
            "The 'Old Elm' in Sliven is an over 1,100-year-old tree and a symbol of the city.",
            "Sliven is one of the windiest cities in Bulgaria due to the specific mountain topography.",
            "The city has a long tradition in wine production, particularly the Sliven Pearl grape variety.",
            "The regional history museum in Sliven was founded in 1913 and houses over 110,000 exhibits."
        ]
    },
    "city-stara-zagora": {
        "desc": "Stara Zagora is a modern and well-organized city located in the heart of the fertile Thracian Plain. It is one of the oldest settlements in Europe, with a history spanning over 8,000 years. The city is famous for its straight, wide boulevards and its nickname, the 'City of Linden Trees.' Stara Zagora was completely rebuilt in a grid pattern after being destroyed during the Russo-Turkish War, giving it a unique urban feel. Major attractions include the Museum of Neolithic Dwellings, which protects the best-preserved 6th-millennium BC houses in Europe, and the ruins of the Roman forum of Augusta Traiana. The city is also a significant cultural hub, boasting a world-class opera house and beautiful parks like Ayazmoto. Stara Zagora's strategic location and strong economy, focused on energy and light industry, make it a dynamic regional center that honors its ancient Thracian and Roman roots while looking toward the future.",
        "facts": [
            "Stara Zagora is one of the oldest continuously inhabited cities in the world, over 8,000 years old.",
            "The Museum of Neolithic Dwellings contains two houses from the 6th millennium BC with original hearths.",
            "It is known as the 'City of the Linden Trees' because of the thousands of lindens lining its streets.",
            "The city was the site of one of the most heroic battles in the 1877-1878 Liberation War.",
            "Ayazmoto Park, established in 1895, is one of the most beautiful landscaped parks in Bulgaria.",
            "The Stara Zagora State Opera was the first provincial opera house in Bulgaria, founded in 1925.",
            "The ancient Roman name for the city was Augusta Traiana, named after Emperor Trajan.",
            "The region is a major energy producer, home to the Maritsa East mining and power complex."
        ]
    },
    "city-blagoevgrad": {
        "desc": "Blagoevgrad is a vibrant university city located in the valley of the Struma River in southwestern Bulgaria. It is a major educational and cultural hub, home to two large universities: the South-West University and the American University in Bulgaria. This gives the city a youthful, international, and energetic atmosphere. One of its most charming areas is the Varosha Old Town district, which features narrow cobblestone streets and well-preserved houses from the Bulgarian National Revival period. Blagoevgrad is ideally situated as a gateway to the Rila and Pirin Mountains, offering easy access to the Rila Monastery and numerous hiking trails. The city center is a sprawling pedestrian zone with countless cafes, shops, and fountains, making it a popular social hub. With its blend of academic life, historical charm, and proximity to Bulgaria's most spectacular nature, Blagoevgrad is a dynamic and welcoming destination.",
        "facts": [
            "Blagoevgrad is home to the American University in Bulgaria, the first American-style liberal arts college in Eastern Europe.",
            "The Varosha district is a designated architectural reserve with beautiful 19th-century buildings.",
            "The city is famous for its clean air and numerous parks, such as the Bachinovo Park.",
            "It is a major center for the production of tobacco, once the backbone of the local economy.",
            "The city was known as Gorna Dzhumaya until 1950, when it was renamed after Dimitar Blagoev.",
            "The Skaptopara Archaeological Site nearby revealed remains of a 2nd-century Roman settlement.",
            "Blagoevgrad is located just 100 kilometers south of Sofia and 80 kilometers from the Greek border.",
            "The city hosts the annual Francofolies international music festival, attracting world-famous artists."
        ]
    },
    "city-haskovo": {
        "desc": "Haskovo is a historic city in southeastern Bulgaria, strategically located near the borders with Turkey and Greece. It is world-renowned for the Monument of the Holy Virgin Mary, which was certified by the Guinness World Records as the tallest statue of the Mother of God with the Infant Jesus. The statue stands majestically on Yamacha Hill, overlooking the entire city. Haskovo's city center has been beautifully renovated, featuring pedestrian-only streets, colorful fountains, and the iconic clock tower. The city is a gateway to the Eastern Rhodope Mountains and is near significant archaeological sites like the Thracian Tomb of Alexandrovo, famous for its unique 4th-century BC frescoes. Haskovo has a long history as a center for trade and the textile industry. With its warm climate, rich cultural heritage, and impressive monuments, it is a city that offers a blend of religious significance and modern regional charm.",
        "facts": [
            "The Monument of the Holy Virgin Mary in Haskovo is 32.8 meters tall, a Guinness World Record holder.",
            "The city's clock tower, built in the 19th century and restored, is a primary symbol of Haskovo.",
            "Haskovo is one of the oldest settlements in Bulgaria, with a history spanning over 7,000 years.",
            "The Thracian Tomb of Alexandrovo nearby features some of the best-preserved ancient hunting scenes.",
            "The city is located on the Trans-European transport corridor No. 4, connecting Europe and Asia.",
            "Kenana Park is the largest park in the city, featuring an oak forest and a small zoo.",
            "Haskovo is a major center for the Bulgarian garment and fashion industry.",
            "The city hosts an annual international jazz festival and a national folk competition."
        ]
    },
    "city-pazardzhik": {
        "desc": "Pazardzhik is a historic trade city located in the fertile Upper Thracian Plain along the banks of the Maritsa River. Founded in the 15th century as a marketplace, it has long been a significant center for commerce and craftsmanship. The city is famous for its expansive green spaces, particularly the 'Island of Freedom' (Ostrovat) park, situated on a natural island in the Maritsa River. This park is a cultural and recreational hub, featuring a large collection of modern sculptures and a small zoo. Pazardzhik's spiritual heart is the Church of the Holy Virgin Mary, which houses a world-class iconostasis carved with incredible detail from walnut wood. The city is a major agricultural center, producing much of the region's fruits and vegetables. Its location between Sofia and Plovdiv makes it an important transport link. Pazardzhik offers a relaxed pace of life combined with significant cultural treasures and easy access to the nearby Rhodope Mountains.",
        "facts": [
            "Pazardzhik was founded by Tatar settlers in 1485 and was originally named Tatar Pazardzhik.",
            "The iconostasis in the Church of the Holy Virgin Mary is considered a masterpiece of the Debar woodcarving school.",
            "The 'Island of Freedom' park is one of the largest river island parks in Bulgaria.",
            "The city's Clock Tower was originally built in 1741 and is a recognizable landmark.",
            "The Regional History Museum in Pazardzhik houses the oldest processed gold in the world (from the Tell Yunatsite).",
            "Stanislav Dospevski, a prominent Bulgarian painter, was born here; his house is now a museum.",
            "The city is a major hub for the production of automotive components in recent years.",
            "Pazardzhik has a long history of multiculturalism, with Bulgarian, Turkish, and Jewish influences."
        ]
    },
    "city-pernik": {
        "desc": "Pernik is a city with a strong industrial character and a rich history, located just west of Sofia. It is famously known as the 'Black Gold of Bulgaria' because it was the center of the country's coal mining industry for over a century. The Mining Museum, housed in an actual underground mine gallery, is the only one of its kind in the Balkans and offers an immersive look at the lives of miners. Pernik is equally famous for its vibrant cultural traditions, most notably the 'Surva' International Festival of Masquerade Games. This UNESCO-listed festival attracts thousands of participants wearing elaborate masks and bells to scare away evil spirits. The city is also home to the ruins of the medieval Krakra Fortress, which played a key role in the defense of the First Bulgarian Empire. Pernik today is a city in transition, moving from its heavy industrial past to a future focused on culture, services, and its proximity to the capital and the Vitosha Mountain.",
        "facts": [
            "The 'Surva' Festival in Pernik is the biggest masquerade event in the Balkans and is UNESCO-protected.",
            "The Mining Museum is located in the first coal mine of Bulgaria, opened in 1891.",
            "Krakra Fortress was never captured by the Byzantines during the reign of Tsar Samuil.",
            "Pernik was named Dimitrovo for a short period after WWII (1949–1962).",
            "The city is the largest center of the heavy industry and metallurgy in Bulgaria.",
            "The 'Palace of Culture' in Pernik is one of the most impressive examples of socialist classicism architecture.",
            "Pernik is located at an altitude of 710 meters, making it higher than Sofia.",
            "The city is a major rail and road junction on the route to North Macedonia and Greece."
        ]
    }
}

new_cities_pois = []
for poi_str in cities_pois:
    # Extract ID
    match = re.search(r'id:\s*"(.*?)"', poi_str)
    if match:
        poi_id = match.group(1)
        if poi_id in cities_data:
            data = cities_data[poi_id]
            new_poi = add_advanced_fields(poi_str, data['desc'], data['facts'])
            new_cities_pois.append(new_poi)
        else:
            # If not in data, add empty fields
            new_poi = add_advanced_fields(poi_str, "", [])
            new_cities_pois.append(new_poi)

# Write to file
output_content = """import { POI } from "./poi";

export const poiExtraBulgariaCities: POI[] = [
""" + ",\n".join(new_cities_pois) + "\n];\n"

with open('lib/visualLab/data/poiExtraBulgariaCities.ts', 'w', encoding='utf-8') as f:
    f.write(output_content)

print("Created lib/visualLab/data/poiExtraBulgariaCities.ts")
