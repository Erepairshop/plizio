
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/switzerlandPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    "country-switzerland": [
        "Switzerland has four official languages: German, French, Italian, and Romansh.",
        "It has been a neutral country since the Congress of Vienna in 1815.",
        "The country is home to over 1,500 lakes, meaning you're never more than 16km from one.",
        "It has one of the highest rates of chocolate consumption per capita in the world."
    ],
    "city-zurich": [
        "Zurich is home to over 1,200 public fountains, all providing drinkable spring water.",
        "The Bahnhofstrasse is one of the world's most exclusive and expensive shopping avenues.",
        "The city hosted the birth of the Dada art movement at Cabaret Voltaire in 1916.",
        "It consistently ranks among the top cities globally for quality of life."
    ],
    "city-geneva": [
        "Geneva is known as the 'Peace Capital' as it hosts the headquarters of the Red Cross and the European UN.",
        "The Jet d'Eau shoots water 140 meters into the air at a speed of 200 km/h.",
        "The city is the birthplace of the Geneva Conventions, established for humanitarian treatment.",
        "It is a global hub for luxury watchmaking and private banking."
    ],
    "city-bern": [
        "Bern's Old Town is a UNESCO World Heritage site featuring 6 kilometers of arcades.",
        "Albert Einstein developed his theory of relativity while working as a patent clerk here.",
        "The city's name is traditionally linked to the bear, its heraldic animal since the 12th century.",
        "The Zytglogge is a 13th-century clock tower with an elaborate astronomical clock."
    ],
    "city-basel": [
        "Basel is home to the oldest university in Switzerland, founded in 1460.",
        "The city hosts Art Basel, the world's premier art fair for modern and contemporary works.",
        "It is the center of the Swiss pharmaceutical industry, hosting Roche and Novartis.",
        "The city lies at the 'Dreiländereck,' where the borders of Switzerland, Germany, and France meet."
    ],
    "city-lausanne": [
        "Lausanne has been the 'Olympic Capital' since 1915 and is home to the IOC.",
        "The city's Metro is the only subway system in Switzerland and is partially tire-operated.",
        "Its Gothic Cathedral of Notre-Dame is one of the most beautiful in Europe.",
        "The city is built on three hills overlooking Lake Geneva, offering dramatic elevation changes."
    ],
    "nature-matterhorn": [
        "The Matterhorn is a near-perfect pyramidal peak, one of the most photographed in the world.",
        "Its first ascent in 1865 ended in tragedy, with four climbers falling during the descent.",
        "The mountain straddles the border between Switzerland and Italy at 4,478 meters.",
        "It served as the inspiration for the shape of the famous Toblerone chocolate bar."
    ],
    "city-lucerne": [
        "The Chapel Bridge is the oldest covered wooden bridge in Europe, built in 1333.",
        "The Lion Monument was described by Mark Twain as 'the most mournful piece of stone in the world.'",
        "Lucerne is the gateway to Central Switzerland and sits at the foot of Mount Pilatus.",
        "The city's Musegg Wall and its nine towers are part of the original 14th-century fortifications."
    ],
    "nature-jungfraujoch": [
        "The Jungfraujoch station is the highest railway station in Europe at 3,454 meters.",
        "The Sphinx Observatory is one of the highest astronomical observatories in the world.",
        "It provides access to the Aletsch Glacier, the largest glacier in the Alps.",
        "The Jungfrau Railway travels through a 7-kilometer tunnel bored through the Eiger and Mönch."
    ],
    "city-winterthur": [
        "Winterthur was a major industrial center for textiles and heavy machinery like Sulzer engines.",
        "It is often called the 'City of Museums' due to its 17 museums, including the Oskar Reinhart Collection.",
        "The city features the largest pedestrian zone in Switzerland within its historic old town.",
        "It hosts the Kyburg Castle nearby, one of the most important feudal residences in Eastern Switzerland."
    ]
}

def apply_updates(content, updates):
    for poi_id, facts in updates.items():
        # Find the POI object. Use a pattern that captures from id: "..." up to the next image: or the end of the object.
        # We'll look for the facts: { ... } block and insert factsAdvanced after it.
        pattern = re.compile(r'(id:\s+"' + poi_id + r'".*?facts:\s*\{.*?\n    \},)', re.DOTALL)
        
        facts_adv_str = '\n    factsAdvanced: {\n      de: [],\n      hu: [],\n      ro: [],\n      en: [\n'
        for f in facts:
            facts_adv_str += f'        "{f}",\n'
        facts_adv_str = facts_adv_str.rstrip(',\n') + '\n      ]\n    },'
        
        content = pattern.sub(r'\1' + facts_adv_str, content)
    return content

new_content = apply_updates(content, updates)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated 10 POIs")
