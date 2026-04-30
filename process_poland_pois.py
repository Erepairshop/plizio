
import re
import json

# This is a placeholder for the a function that would generate content.
# In a real scenario, this would call a LLM to generate the content.
def generate_content(poi_id, poi_name, field):
    if field == "descriptionAdvanced":
        return f"This is a placeholder for the advanced description of {poi_name} ({poi_id}). It would be between 80 and 150 words."
    elif field == "factsAdvanced":
        return [
            f"Fact 1 for {poi_name}.",
            f"Fact 2 for {poi_name}.",
            f"Fact 3 for {poi_name}.",
            f"Fact 4 for {poi_name}.",
            f"Fact 5 for {poi_name}.",
            f"Fact 6 for {poi_name}."
        ]

def process_pois(file_content):
    # This is a simplified parser. A more robust solution would use a TypeScript AST parser.
    # This regex finds POI objects.
    poi_objects_str = re.findall(r'\{\s*id:.*?coords:.*?\}', file_content, re.DOTALL)

    new_file_content = file_content

    for poi_str in poi_objects_str:
        poi_id_match = re.search(r'id:\s*"([^"]+)"', poi_str)
        if not poi_id_match:
            continue
        poi_id = poi_id_match.group(1)

        poi_name_en_match = re.search(r'name:\s*\{.*?en:\s*"([^"]+)"', poi_str, re.DOTALL)
        poi_name_en = poi_name_en_match.group(1) if poi_name_en_match else poi_id

        new_poi_str = poi_str
        
        # Check for descriptionAdvanced
        if "descriptionAdvanced" not in poi_str:
            desc_en = generate_content(poi_id, poi_name_en, "descriptionAdvanced")
            desc_adv_str = f"""descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "",
      en: "{desc_en}"
    }},"""
            # Add it before the image or facts
            new_poi_str = re.sub(r'(,\s*image:)', f",
    {desc_adv_str}
    \1", new_poi_str)
        elif re.search(r'descriptionAdvanced:\s*\{.*?en:\s*""', poi_str, re.DOTALL):
            desc_en = generate_content(poi_id, poi_name_en, "descriptionAdvanced")
            new_poi_str = re.sub(r'(descriptionAdvanced:\s*\{.*?en:\s*)"', f'\1"{desc_en}"', new_poi_str, flags=re.DOTALL)

        # Check for factsAdvanced
        if "factsAdvanced" not in poi_str:
            facts_en = generate_content(poi_id, poi_name_en, "factsAdvanced")
            facts_en_str = json.dumps(facts_en, indent=6).replace('"', '      "').replace('[', '[').replace(']', ']')
            facts_adv_str = f"""factsAdvanced: {{
      de: [],
      hu: [],
      ro: [],
      en: {facts_en_str}
    }},"""
            new_poi_str = re.sub(r'(,\s*image:)', f",
    {facts_adv_str}
    \1", new_poi_str)
        elif re.search(r'factsAdvanced:\s*\{.*?en:\s*\[\s*\]', poi_str, re.DOTALL):
            facts_en = generate_content(poi_id, poi_name_en, "factsAdvanced")
            facts_en_str = json.dumps(facts_en, indent=6).replace('"', '      "').replace('[', '[').replace(']', ']')
            new_poi_str = re.sub(r'(factsAdvanced:\s*\{.*?en:\s*)\[\s*\]', f'\1{facts_en_str}', new_poi_str, flags=re.DOTALL)

        if new_poi_str != poi_str:
            new_file_content = new_file_content.replace(poi_str, new_poi_str)
            
    return new_file_content

if __name__ == "__main__":
    with open("lib/visualLab/data/polandPoi.ts", "r", encoding="utf-8") as f:
        original_content = f.read()
    
    new_content = process_pois(original_content)

    # I will write the new content to a new file to show the result.
    with open("lib/visualLab/data/polandPoi_new.ts", "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Processing complete. Check polandPoi_new.ts")

