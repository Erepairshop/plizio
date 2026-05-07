import json
import re

data = {
  "siofok-strand": {
    "desc": "The Siófok Great Beach (Nagystrand) is an absolutely massive, intensely vibrant resort complex and the undisputed, glittering epicenter of summer nightlife on Lake Balaton. Stretching for an incredible expanse along the shallow, quickly warming waters of the southern shore, this beach is uniquely famous across Hungary for its 'Plázs' section—a spectacular, highly manicured, white-sand beach arena that flawlessly mimics a tropical Ibiza beach club. During the day, it is a bustling, family-friendly paradise with massive slides and endless sports facilities. However, as the sun sets, the beach radically transforms into a colossal, open-air mega-club, hosting the biggest international DJs and massive laser shows right on the water's edge. Siófok Nagystrand is the absolute pinnacle of high-energy Hungarian summer hedonism.",
    "facts": [
      "The Siófok Nagystrand is officially the largest, most heavily visited beach complex on the entire shore of Lake Balaton, capable of hosting tens of thousands of guests daily.",
      "The famous 'Plázs' section is constructed entirely from thousands of tons of brilliantly white, imported sand, creating a highly unique, artificial tropical coastline.",
      "The beach complex features a highly iconic, massive bungee jumping tower that operates right over the water, offering a terrifying thrill above the crowds.",
      "During the peak summer weekends, the beach serves as the central stage for massive, televised national beauty pageants and extreme sports competitions."
    ]
  },
  "gyor-gyerekvonat": {
    "desc": "The Győr Children's Railway, often affectionately called the 'Radó-szigeti Kisvasút', is a deeply charming, highly nostalgic miniature railway located in the lush, serene parks of Győr. Unlike typical massive urban attractions, this small, beautifully maintained park railway is an absolute, deeply beloved staple of local family life, offering a highly romantic, slow-paced journey through the city's spectacular riverside green spaces. Originally established in the socialist era, it has been flawlessly preserved and continues to delight generations of children. The train gently winds its way past massive, ancient weeping willows and serene riverbanks, offering a highly tranquil, deeply innocent escape right in the center of the bustling 'City of Rivers.'",
    "facts": [
      "The Győr Children's Railway is highly unique because its tiny, open-air carriages are pulled by a meticulously restored, vintage diesel locomotive from the mid-20th century.",
      "The railway track is completely integrated into a massive, heavily protected island park situated directly in the middle of the Rába river.",
      "Unlike the massive Children's Railway in Budapest, the Győr train is primarily focused on serving as a highly accessible, deeply nostalgic park ride rather than a major transit route.",
      "The railway operates exclusively during the warm summer months and is a deeply traditional, mandatory weekend activity for local families with young children."
    ]
  },
  "budakeszi-vadaspark": {
    "desc": "The Budakeszi Wildlife Park is a spectacular, deeply immersive natural sanctuary located immediately adjacent to the bustling metropolis of Budapest, tucked securely within the dense, ancient oak forests of the Buda Hills. Unlike traditional urban zoos, this massive, 30-hectare park is fiercely dedicated almost exclusively to showcasing the incredibly rich, native fauna of Hungary and the broader Carpathian Basin. Visitors can walk along beautifully shaded, deeply forested trails to observe massive brown bears, elusive Eurasian lynx, majestic red deer, and howling wolf packs in incredibly large, highly naturalistic enclosures. The park also features a highly popular petting zoo and a massive, thrilling treetop adventure course. It provides an absolutely perfect, highly educational plunge into pure Hungarian wilderness just minutes from the capital.",
    "facts": [
      "The wildlife park was specifically established in 1979 to educate the highly urbanized residents of Budapest about the critical importance of preserving native Hungarian forest ecosystems.",
      "The park features a highly successful, specialized breeding program for the incredibly rare and heavily protected European wildcat.",
      "In addition to live animals, the park operates an incredibly fascinating 'Forest School' that offers deep, immersive ecological education programs for thousands of students annually.",
      "The spectacular 'Dino Park' section, recently added, features massive, highly realistic animatronic dinosaurs hidden deeply within the authentic forest environment."
    ]
  },
  "veszpremi-allatkert": {
    "desc": "The Veszprém Zoo (Kittenberger Kálmán Zoo) is an absolutely breathtaking, highly dynamic zoological park famously spread across a deep, spectacular, naturally formed limestone ravine just outside the 'City of Queens'. Founded in 1958 by local volunteers, it has evolved into one of the absolute most beautiful, highly advanced, and top-tier zoos in Central Europe. The zoo is incredibly famous for its massive, sweeping 'African Savannah' enclosure, where giraffes, zebras, and rhinos roam together in a staggering, multi-hectare habitat perfectly mimicking the wild. Beyond its incredible, highly naturalistic animal exhibits, the zoo boasts a massive, deeply immersive animatronic Dinosaur Park that is arguably the largest and most detailed in Hungary. It is an absolutely premier, world-class destination for wildlife lovers.",
    "facts": [
      "The zoo is famously named after Kálmán Kittenberger, one of the most legendary, highly celebrated Hungarian African explorers and wildlife researchers of the 20th century.",
      "The spectacular 'Chimp World' habitat is one of the most advanced indoor-outdoor primate enclosures in Europe, designed to perfectly stimulate natural chimpanzee behavior.",
      "The massive African Savannah enclosure covers over 10,000 square meters, allowing visitors to view the animals from a highly elevated, spectacular wooden observation deck.",
      "The zoo's 'Dino Park' features over 30 massive, incredibly lifelike, life-sized animatronic dinosaurs scientifically placed within a highly dense, ancient forest setting."
    ]
  },
  "szegedi-vadaspark": {
    "desc": "The Szeged Wildlife Park is an incredibly expansive, profoundly respected zoological institution located in the lush, deep oak forests on the outskirts of the 'City of Sunshine'. Spanning a massive 45 hectares, it is officially the largest zoo in Hungary by area, allowing for incredibly spacious, deeply naturalistic animal habitats. What truly sets Szeged apart globally is its fierce, highly specialized dedication to the rescue and conservation of critically endangered species, particularly those from South America. The park is highly famous for its spectacular 'Pampa' and 'Pantanal' exhibits, housing incredibly rare species like the giant anteater, maned wolves, and a highly successful, massive marmoset breeding program. It is a deeply serious, highly educational, and visually stunning conservation powerhouse.",
    "facts": [
      "The Szeged Wildlife Park operates a highly critical, state-of-the-art Nature Conservation Rescue Center that rehabilitates hundreds of injured, protected wild animals every single year.",
      "The zoo is internationally renowned for its highly successful breeding program of the critically endangered, incredibly rare snow leopard.",
      "Due to its massive forested area, visitors frequently encounter wild, native Hungarian species like roe deer and foxes roaming freely outside the actual enclosures.",
      "The park features an incredible, highly immersive 'South American House' that perfectly replicates the humid, intensely dense environment of the Amazon rainforest."
    ]
  },
  "tihany-levendulamezo": {
    "desc": "The Tihany Lavender Fields are an absolutely breathtaking, deeply fragrant, and highly iconic natural wonder that completely blankets the volcanic slopes of the Tihany Peninsula in brilliant, vibrant purple every summer. Originally planted in the 1920s by a visionary herbalist who realized the peninsula's unique, sun-drenched, Mediterranean-like microclimate was absolutely perfect for the plant, the fields have become the absolute visual signature of the Balaton Uplands. During the peak blooming season in June and July, the air is thick with an incredibly intense, calming fragrance, and the fields buzz with thousands of bees and visitors. The fields are not merely decorative; they are deeply agricultural, harvested annually to produce highly sought-after, premium essential oils, soaps, and traditional local crafts. It is a wildly romantic, spectacular sensory experience.",
    "facts": [
      "The original lavender brought to Tihany was specifically sourced from the renowned Provence region in France, but the unique volcanic soil actually increased its essential oil content.",
      "Every year in late June, the massive Tihany Lavender Festival draws tens of thousands of visitors, offering highly popular 'pick-your-own' harvesting fields.",
      "The harvested lavender is traditionally processed in a highly historic, fully operational distillation plant located directly in the village of Tihany.",
      "The deep purple fields, set against the stark white of the ancient abbey and the brilliant turquoise blue of Lake Balaton, create arguably the most photographed panorama in Hungary."
    ]
  },
  "megyer-hegyi-tengerszem": {
    "desc": "The Megyer-hegy Tarn (Tengerszem) is an absolutely staggering, deeply mysterious, and highly dramatic geological wonder hidden deep within the dense forests above the town of Sárospatak. Often officially voted as Hungary's absolute most beautiful natural attraction, it is actually a highly spectacular, massive abandoned millstone quarry that nature has completely and beautifully reclaimed. The deep, crystal-clear, dark green lake is completely encircled by towering, sheer rock walls rising up to 70 meters high, creating an incredibly isolated, hauntingly beautiful, and deeply silent alpine amphitheater. Visitors can reach the tarn via a steep, highly romantic hiking trail and carefully navigate narrow, cliff-side paths. It is an awe-inspiring, visually stunning masterpiece of human industry perfectly overwhelmed by the raw power of nature.",
    "facts": [
      "The quarry was continuously operated from the 15th century until 1907, specifically carving highly durable millstones from the deeply hard, volcanic rhyolite tuff rock.",
      "The deep lake was naturally formed when miners accidentally broke into a massive underground spring, forcing them to completely abandon the deep quarry pit.",
      "The tarn is highly renowned for its spectacular 'Via Ferrata' climbing routes, allowing extreme climbers to navigate the sheer, vertical cliff faces directly above the water.",
      "The lake's water is incredibly pure but highly acidic and deeply cold, meaning that swimming in the tarn is strictly prohibited to protect its fragile micro-ecosystem."
    ]
  }
}

import sys

def update_ts_file(ts_file):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, item in data.items():
        ro_desc = item['desc'].replace('"', '\\"')
        ro_facts = item['facts']
        
        poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?\n\s*\})'
        match = re.search(poi_pattern, content)
        if not match:
            print(f"POI {poi_id} not found")
            continue
            
        poi_block = match.group(1)
        new_poi_block = poi_block
        
        desc_pattern = r'(descriptionAdvanced:\s*\{[\s\S]*?en:\s*)(["\'`][\s\S]*?["\'`])'
        desc_match = re.search(desc_pattern, new_poi_block)
        if desc_match:
            new_poi_block = re.sub(desc_pattern, r'\1"' + ro_desc + r'"', new_poi_block)

        facts_pattern = r'(factsAdvanced:\s*\{[\s\S]*?en:\s*)(\[[\s\S]*?\])'
        facts_match = re.search(facts_pattern, new_poi_block)
        if facts_match:
            facts_json = json.dumps(ro_facts, ensure_ascii=False, indent=8)
            facts_json = facts_json.replace('\n', '\n      ')
            new_poi_block = re.sub(facts_pattern, r'\1' + facts_json, new_poi_block)

        content = content.replace(poi_block, new_poi_block)

    with open(ts_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated batch 6 in {ts_file}")

if __name__ == "__main__":
    update_ts_file('lib/visualLab/data/hungaryPoi.ts')
