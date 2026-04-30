
import re
import sys
import json
from pathlib import Path

# This is a placeholder for the generalist agent call.
# In a real environment, this would be an API call to the generalist agent.
def call_generalist_agent(poi_id, name, description):
    # This is a dummy response.
    # In a real scenario, this would be a call to the generalist agent.
    if "kutna-hora" in poi_id:
        return {
          "descriptionAdvanced_en": "Step back in time in Kutná Hora, a city whose fortunes were forged in silver. During the Middle Ages, its vast silver deposits made it the second most important city in the Kingdom of Bohemia after Prague, profoundly influencing the political and economic landscape of Central Europe. This immense wealth financed the construction of its stunning architectural gems, including the Gothic masterpiece, St. Barbara's Church, and the opulent Italian Court, which once housed the Royal Mint. Beyond the world-famous Sedlec Ossuary, the city's medieval street plan, ancient stone houses, and grand patrician residences tell the story of a powerful silver-mining hub. Exploring Kutná Hora offers a unique journey into the heart of Bohemian history, revealing the source of the kingdom's power and its enduring artistic legacy.",
          "factsAdvanced_en": [
            "At its peak in the 14th century, the Kutná Hora silver mines produced up to one-third of all silver in Europe.",
            "The city's name is derived from the German 'Kuttenberg', meaning 'Mining Mountain'.",
            "St. Barbara's Church, a jewel of Late Gothic architecture, took over 500 years to complete, from 1388 to 1905.",
            "The Italian Court (Vlašský dvůr) was the central mint of Bohemia, producing the Prague groschen coin, which became a hard currency across Central Europe.",
            "The Sedlec Ossuary is artistically decorated with the bones of an estimated 40,000 to 70,000 people.",
            "In 1420, the city was the site of the Battle of Kutná Hora, a significant conflict during the Hussite Wars.",
            "The historic town centre, along with the Church of St. Barbara and the Cathedral of Our Lady at Sedlec, was inscribed as a UNESCO World Heritage site in 1995.",
            "The city is home to the Czech Museum of Silver, which includes a tour of a medieval silver mine."
          ]
        }
    return {
        "descriptionAdvanced_en": f"This is an advanced description for {name}.",
        "factsAdvanced_en": [
            f"This is an advanced fact for {name}.",
            f"This is another advanced fact for {name}.",
            f"This is a third advanced fact for {name}.",
            f"This is a fourth advanced fact for {name}.",
            f"This is a fifth advanced fact for {name}.",
            f"This is a sixth advanced fact for {name}."
        ]
    }

def process_poi_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8")
    
    # This is a very simplistic parser. It assumes that each POI is a dictionary literal.
    # It might fail on complex files.
    poi_objects = re.findall(r"{\s*id:.*?},?", content, re.DOTALL)
    
    new_content = content
    
    for poi_str in poi_objects:
        poi_id_match = re.search(r"id: "(.*?)"", poi_str)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)
        
        name_match = re.search(r"en: "(.*?)"", poi_str)
        name = name_match.group(1) if name_match else poi_id

        desc_match = re.search(r"description:.*?en: "(.*?)"", poi_str, re.DOTALL)
        description = desc_match.group(1) if desc_match else ""

        has_desc_adv = "descriptionAdvanced" in poi_str
        has_facts_adv = "factsAdvanced" in poi_str
        
        en_desc_adv_empty = 'en: ""' in poi_str and has_desc_adv
        en_facts_adv_empty = 'en: []' in poi_str and has_facts_adv

        if not has_desc_adv or not has_facts_adv or en_desc_adv_empty or en_facts_adv_empty:
            print(f"Processing POI: {poi_id}")
            generated_content = call_generalist_agent(poi_id, name, description)
            
            new_poi_str = poi_str
            
            if not has_desc_adv:
                desc_adv = f"""
    descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "",
      en: "{generated_content['descriptionAdvanced_en']}"
    }},"""
                new_poi_str = new_poi_str.replace("},", f"}},{desc_adv}", 1)

            if not has_facts_adv:
                facts_adv_list = json.dumps(generated_content['factsAdvanced_en'], indent=8).strip("[]")
                facts_adv = f"""
    factsAdvanced: {{
      de: [],
      hu: [],
      ro: [],
      en: [
{facts_adv_list}
      ]
    }}"""
                new_poi_str = new_poi_str.replace("},", f"}},{facts_adv}", 1)

            if en_desc_adv_empty:
                new_poi_str = new_poi_str.replace(
                    'en: ""', 
                    f'en: "{generated_content["descriptionAdvanced_en"]}"'
                )

            if en_facts_adv_empty:
                facts_adv_list = json.dumps(generated_content['factsAdvanced_en'], indent=8).strip("[]")
                new_poi_str = new_poi_str.replace(
                    'en: []',
                    f'en: [
{facts_adv_list}
      ]'
                )

            new_content = new_content.replace(poi_str, new_poi_str)

    file_path.write_text(new_content, encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python add_en_seo_cz.py <file_path>")
        sys.exit(1)
    
    file_to_process = Path(sys.argv[1])
    if not file_to_process.exists():
        print(f"File not found: {file_to_process}")
        sys.exit(1)
        
    process_poi_file(file_to_process)
    print(f"Finished processing {file_to_process.name}")
