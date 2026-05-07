import google.generativeai as genai
import json
import os

# Your API key for the Gemini API
GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable not set")

genai.configure(api_key=GOOGLE_API_KEY)

# List of POIs
poi_ids = [
    "ma-volubilis-history-v2", "ma-ait-benhaddou-history-v2", "ma-koutoubia-mosque-history-v2",
    "ma-hassan-tower-history-v2", "ma-chellah-history-v2", "ma-al-qarawiyyin-history-v2",
    "ma-bab-mansour-history-v2", "ma-bahia-palace-history-v2", "ma-el-badi-palace-history-v2",
    "ma-saadian-tombs-history-v2", "ma-bou-inania-madrasa-history-v2", "ma-kasbah-udayas-history-v2",
    "ma-tinmal-mosque-history-v2", "ma-lixus-ruins-history-v2", "ma-heri-es-souani-history-v2",
    "ma-kasbah-taourirt-history-v2", "ma-kasbah-telouet-history-v2", "ma-moulay-ismail-mausoleum-history-v2",
    "ma-dar-el-makhzen-tangier-history-v2", "ma-medersa-ben-youssef-history-v2"
]

def generate_german_content(poi_id):
    """
    Generates 'descriptionAdvanced' and 'factsAdvanced' in German for a given POI ID.
    """
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = f"""
    Generate a 'descriptionAdvanced' (80-150 words) and a list of 'factsAdvanced' (6-8 facts) in German for the POI with ID '{poi_id}'.
    The content should be unique, factual, and of high quality.
    Please use correct German orthography, including umlauts and ß.
    Provide the output in JSON format with keys "descriptionAdvanced" and "factsAdvanced".
    """
    try:
        response = model.generate_content(prompt)
        # Assuming the model returns a JSON string, we parse it.
        # This might need adjustment based on the actual model output format.
        # It's safer to extract the JSON from the text part of the response.
        text_response = response.text
        # The model might return the JSON wrapped in markdown, so let's clean it.
        if '```json' in text_response:
            json_str = text_response.split('```json')[1].split('```')[0].strip()
        else:
            json_str = text_response.strip()
        
        content = json.loads(json_str)
        return {
            "id": poi_id,
            "descriptionAdvanced": content.get("descriptionAdvanced", ""),
            "factsAdvanced": content.get("factsAdvanced", [])
        }
    except Exception as e:
        print(f"An error occurred while processing {poi_id}: {e}")
        # Return a placeholder in case of an error
        return {
            "id": poi_id,
            "descriptionAdvanced": "Error generating content.",
            "factsAdvanced": []
        }

# Generate content for all POIs
all_pois_content = []
for poi_id in poi_ids:
    print(f"Generating content for {poi_id}...")
    content = generate_german_content(poi_id)
    all_pois_content.append(content)
    print(f"Finished generating content for {poi_id}.")

# Save the output to a JSON file
with open('german_poi_content.json', 'w', encoding='utf-8') as f:
    json.dump(all_pois_content, f, ensure_ascii=False, indent=2)

print("All content has been generated and saved to 'german_poi_content.json'")
