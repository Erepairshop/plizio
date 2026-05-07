import json
import re

# This script is designed to be run from the root of the plizio-repo.
# It reads German SEO content from de_content.json and applies it
# to the corresponding POIs in lib/visualLab/data/romaniaPoi.ts.

POI_FILE_PATH = 'lib/visualLab/data/romaniaPoi.ts'
JSON_CONTENT_PATH = 'de_content.json'

def get_poi_block(file_content, poi_id):
    """
    Finds and returns the full object string for a given POI ID.
    This is a bit tricky without a full parser, so we use regex
    and brace counting.
    """
    # Pattern to find the start of the POI object
    pattern = r'\{\s*id:\s*['"]' + re.escape(poi_id) + r'['"]'
    match = re.search(pattern, file_content)

    if not match:
        print(f"Could not find POI with id: {poi_id}")
        return None, -1, -1

    start_index = match.start()
    brace_level = 0
    in_string = False
    string_char = ''

    # Find the matching closing brace
    for i, char in enumerate(file_content[start_index:]):
        if in_string:
            if char == string_char:
                in_string = False
            continue

        if char in ('"', "'", "`"):
            in_string = True
            string_char = char
            continue

        if char == '{':
            brace_level += 1
        elif char == '}':
            brace_level -= 1
            if brace_level == 0:
                end_index = start_index + i + 1
                return file_content[start_index:end_index], start_index, end_index

    print(f"Could not find closing brace for POI with id: {poi_id}")
    return None, -1, -1


def update_de_content(poi_block, de_desc, de_facts):
    """
    Updates the 'de' fields in descriptionAdvanced and factsAdvanced
    within a given POI object string.
    """
    # Update descriptionAdvanced
    desc_pattern = r'descriptionAdvanced:\s*\{([^}]+)\}'
    desc_match = re.search(desc_pattern, poi_block)
    if desc_match:
        desc_content = desc_match.group(1)
        # Replace the 'de' field
        new_desc_content = re.sub(r'de:\s*`[^`]*`|de:\s*"[^"]*"|de:\s*'[^']*'', f'de: `{de_desc}`', desc_content)
        poi_block = poi_block.replace(desc_content, new_desc_content, 1)
    else:
        # If descriptionAdvanced doesn't exist, we can't add it with this simple script
        print("Warning: descriptionAdvanced block not found. Cannot update description.")


    # Update factsAdvanced
    facts_pattern = r'factsAdvanced:\s*\{([^}]+)\}'
    facts_match = re.search(facts_pattern, poi_block)
    if facts_match:
        facts_content = facts_match.group(1)
        # Format facts into a JS array string
        js_facts_array = ", ".join([f'`{fact}`' for fact in de_facts])
        # Replace the 'de' field
        new_facts_content = re.sub(r'de:\s*\[[^\]]*\]', f'de: [{js_facts_array}]', facts_content)
        poi_block = poi_block.replace(facts_content, new_facts_content, 1)
    else:
        print("Warning: factsAdvanced block not found. Cannot update facts.")

    return poi_block


def main():
    try:
        with open(POI_FILE_PATH, 'r', encoding='utf-8') as f:
            poi_file_content = f.read()

        with open(JSON_CONTENT_PATH, 'r', encoding='utf-8') as f:
            de_content_data = json.load(f)

    except FileNotFoundError as e:
        print(f"Error reading files: {e}")
        return

    original_content = poi_file_content
    updates_made = 0

    for item in de_content_data:
        poi_id = item['id']
        de_desc = item['descriptionAdvanced']
        de_facts = item['factsAdvanced']

        print(f"Processing POI: {poi_id}")

        poi_block, start, end = get_poi_block(original_content, poi_id)

        if poi_block:
            # Check if German content is already present. This is a simple check.
            # A more robust check would parse the structure.
            if 'descriptionAdvanced: { de: ""' in poi_block or 'descriptionAdvanced: { de: ``' in poi_block:
                 new_poi_block = update_de_content(poi_block, de_desc, de_facts)
                 if new_poi_block != poi_block:
                     original_content = original_content[:start] + new_poi_block + original_content[end:]
                     updates_made += 1
                     print(f"  -> Updated {poi_id}")
                 else:
                     print(f"  -> No changes made for {poi_id} (update function failed).")
            else:
                print(f"  -> Skipping {poi_id}, 'de' content seems to be already present.")


    if updates_made > 0:
        print(f"
Writing {updates_made} updates to {POI_FILE_PATH}...")
        try:
            with open(POI_FILE_PATH, 'w', encoding='utf-8') as f:
                f.write(original_content)
            print("Successfully updated the file.")
        except IOError as e:
            print(f"Error writing to file: {e}")
    else:
        print("
No updates were made to the file.")


if __name__ == '__main__':
    main()
