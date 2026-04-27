import re
import json

def generate_seo_content(poi_name, poi_type):
    # This function is a placeholder for actual content generation.
    if poi_type == "city":
        description = f"Entdecken Sie {poi_name}, eine Stadt voller Geschichte und Kultur. Erfahren Sie mehr über die einzigartigen Sehenswürdigkeiten, die reiche Vergangenheit und die lebendige Gegenwart, die {poi_name} zu einem unvergesslichen Reiseziel machen. Dieser Ort ist ein faszinierendes Beispiel für Stadtentwicklung und kulturelles Erbe (Sozialkunde K8)."
        facts = [f"{poi_name} hat eine Bevölkerung von über X Einwohnern.", "Die Stadt wurde im Jahr Y gegründet.", f"Ein berühmtes Wahrzeichen in {poi_name} ist Z.", "Die lokale Wirtschaft ist geprägt von A und B.", f"{poi_name} ist bekannt für sein jährliches C-Festival.", "Die Architektur der Stadt ist eine Mischung aus D- und E-Stilen.", f"Wichtige Persönlichkeiten aus {poi_name} sind F und G.", "Der öffentliche Verkehr ist gut ausgebaut." ]
    elif poi_type in ["historical", "landmark"]:
        description = f"Das Wahrzeichen '{poi_name}' ist ein bedeutendes Zeugnis der niederländischen Geschichte. Seine Architektur und die Geschichten, die es umgeben, ziehen jährlich tausende Besucher an. Es bietet einen tiefen Einblick in die Vergangenheit und die kulturellen Entwicklungen der Region. Ein Besuch hier ist eine Lektion in lebendiger Geschichte (Geschichte K7)."
        facts = [ f"Der Bau von '{poi_name}' wurde im Jahr X abgeschlossen.", "Es repräsentiert den architektonischen Stil Y.", "Jährlich besuchen etwa Z Menschen diesen Ort.", f"'{poi_name}' spielte eine wichtige Rolle im Ereignis A.", "Restaurierungsarbeiten fanden zuletzt im Jahr B statt.", "Im Inneren befinden sich C bemerkenswerte Kunstwerke oder Ausstellungsstücke.", "Die ursprünglichen Baukosten betrugen D.", "Es wurde aus Materialien wie E und F erbaut." ]
    else:
        description = f"Erkunden Sie {poi_name}, einen Ort von besonderem Interesse in den Niederlanden. Von seiner natürlichen Schönheit bis hin zu seiner wirtschaftlichen Bedeutung bietet {poi_name} vielfältige Einblicke. Perfekt für Studien in Geographie oder Wirtschaft (Sachkunde K5)."
        facts = [ f"{poi_name} erstreckt sich über eine Fläche von X Hektar/Quadratkilometern.", "Es ist ein wichtiger Lebensraum für die Tierart Y.", f"Die jährliche Besucherzahl wird auf Z geschätzt.", f"{poi_name} ist entscheidend für die lokale Wirtschaft im Bereich A.", "Es gibt B Kilometer an Wander- oder Wasserwegen.", "Die beste Zeit für einen Besuch ist C.", "Die geologische Formation D ist hier vorherrschend.", "Umweltschutzmaßnahmen sind seit dem Jahr E in Kraft." ]
    return {"descriptionAdvanced": {"de": description, "hu": "", "ro": "", "en": ""}, "factsAdvanced": {"de": facts, "hu": [], "ro": [], "en": []}}

def process_poi_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Split content into processable chunks: header, POIs, footer
        header, _, remainder = content.partition('[')
        poi_section, _, footer = remainder.rpartition(']')
        
        # Split POIs into a list of strings
        poi_strings = poi_section.split('},')
        
        modified_pois = []
        for i, poi_str in enumerate(poi_strings):
            # If the POI already has the field, skip it
            if 'descriptionAdvanced' in poi_str:
                modified_pois.append(poi_str)
                continue
            
            # Re-add the closing brace for all but the last item
            if i < len(poi_strings) - 1:
                poi_str += '}'

            name_match = re.search(r'name:\s*\{\s*de:\s*"(.*?)"', poi_str)
            type_match = re.search(r'type:\s*"(.*?)"', poi_str)

            if not (name_match and type_match):
                modified_pois.append(poi_str.rstrip('}')) # Append unchanged
                continue

            poi_name = name_match.group(1)
            poi_type = type_match.group(1)
            seo = generate_seo_content(poi_name, poi_type)

            # Format the new fields beautifully
            desc_adv_json = json.dumps(seo['descriptionAdvanced'], ensure_ascii=False, indent=4)
            facts_adv_json = json.dumps(seo['factsAdvanced'], ensure_ascii=False, indent=4)

            # Indent the JSON to match the surrounding code
            desc_adv_str = "        " + desc_adv_json.replace("
", "
        ")
            facts_adv_str = "        " + facts_adv_json.replace("
", "
        ")

            new_fields = f""",
        descriptionAdvanced: {desc_adv_str},
        factsAdvanced: {facts_adv_str}"""
            
            # Find the position of the last brace and insert before it
            last_brace_pos = poi_str.rfind('}')
            if last_brace_pos == -1:
                modified_pois.append(poi_str.rstrip('}'))
                continue
            
            # Insert the new fields before the final brace of the object
            modified_poi = poi_str[:last_brace_pos] + new_fields + "
    " + poi_str[last_brace_pos:]
            modified_pois.append(modified_poi.rstrip('}'))

        # Reconstruct the file content
        new_poi_section = '},'.join(modified_pois)
        new_content = header + '[' + new_poi_section + ']' + footer
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Successfully processed and updated {file_path}")

    except FileNotFoundError:
        print(f"File not found: {file_path}. Skipping.")
    except Exception as e:
        print(f"An error occurred while processing {file_path}: {e}")

files_to_process = [
    "lib/visualLab/data/poiExtraNetherlandsCities.ts",
    "lib/visualLab/data/poiExtraNetherlandsHistory.ts",
    "lib/visualLab/data/poiExtraNetherlandsOther.ts"
]

for file in files_to_process:
    process_poi_file(file)
