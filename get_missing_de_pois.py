
import re
import sys

def find_pois_without_german_description(file_content):
    # This regex is designed to be non-greedy and handle nested structures.
    # It captures from the opening brace of a POI object to its closing brace.
    poi_regex = re.compile(r"{\s*id:.*?},?", re.DOTALL)
    
    # Regex to find the 'id' within a POI block
    id_regex = re.compile(r'id:\s*"(.*?)"')
    
    # Regex to find the 'descriptionAdvanced' block
    desc_adv_regex = re.compile(r"descriptionAdvanced:\s*\{(.*?)\}", re.DOTALL)
    
    # Regex to check for a non-empty 'de' field within descriptionAdvanced
    de_desc_regex = re.compile(r'de:\s*".+?"', re.DOTALL)

    missing_de_pois = []

    for match in poi_regex.finditer(file_content):
        poi_block = match.group(0)
        
        id_match = id_regex.search(poi_block)
        if not id_match:
            continue
        
        poi_id = id_match.group(1)
        
        desc_adv_match = desc_adv_regex.search(poi_block)
        
        # Case 1: descriptionAdvanced block is missing entirely
        if not desc_adv_match:
            missing_de_pois.append(poi_id)
            continue
            
        desc_adv_content = desc_adv_match.group(1)
        
        # Case 2: 'de' field is missing or empty within descriptionAdvanced
        if not de_desc_regex.search(desc_adv_content):
            missing_de_pois.append(poi_id)
            
    return missing_de_pois

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python get_missing_de_pois.py <file_path>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # The script is designed to work with TS files that are not valid JSON.
        # It uses regular expressions to find POI-like objects.
        
        # Additional cleanup to handle potential mojibake characters if any
        content = content.replace('ÃƒÂ¯Ã‚Â¿Ã‚Â½', '')

        ids = find_pois_without_german_description(content)
        
        for poi_id in ids:
            print(poi_id)
            
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)
