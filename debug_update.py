
import re
import os

file_path = "lib/visualLab/data/poiExtraBelizeHistoryV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

seo_data = {
    "battle-of-st-georges-caye-history-v2": {
        "desc": "St. George's Caye holds a legendary place in Belizean history as the site of the pivotal naval battle in September 1798. This engagement between British Baymen and the Spanish fleet from Mexico determined the future of the territory, ending centuries of Spanish claims and solidifying British influence. Today, the island remains a peaceful retreat, but the legacy of the battle is celebrated annually as a symbol of national resilience. Visitors can explore the historical markers and enjoy the pristine Caribbean waters that once witnessed this decisive moment. The victory at St. George's Caye is considered the birth of Belize as a distinct political entity in Central America.",
        "facts": [
            "The battle occurred between September 3 and 10, 1798.",
            "September 10th is a public holiday in Belize known as St. George's Caye Day.",
            "The Spanish fleet consisted of 32 vessels and 2,000 troops.",
            "British defenders used small sloops and flat-bottomed gunboats called 'rafts'.",
            "Not a single life was lost on the British side during the final engagement.",
            "The island served as the first capital of the British settlement until the 1800s.",
            "It is located approximately 8 miles northeast of Belize City."
        ]
    }
}

def apply_seo(content, data):
    for poi_id, info in data.items():
        # Escaping quotes in description
        desc = info["desc"].replace('"', '\\"')
        facts_list = str(info["facts"]).replace("'", '"')
        
        # More flexible pattern for facts block
        pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\n\s*\},)'
        insert_text = f'\n    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "",\n      en: "{desc}"\n    }},\n    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: [],\n      en: {facts_list}\n    }},'
        
        new_content, count = re.subn(pattern, r'\1' + insert_text, content, flags=re.DOTALL)
        print(f"POI {poi_id}: {count} replacements")
        content = new_content
    return content

new_content = apply_seo(content, seo_data)

with open("test_output.ts", "w", encoding="utf-8") as f:
    f.write(new_content)
