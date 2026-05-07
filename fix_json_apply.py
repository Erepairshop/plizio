import json

def fix_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if "descriptionAdvanced: {" in line and i + 3 < len(lines) and "en:" in lines[i+1]:
            # This is the newly added 'en' block. Keep it.
            new_lines.append(line)
            new_lines.append(lines[i+1])
            new_lines.append(lines[i+2])
            i += 3
            # Check if the next line is ALSO a descriptionAdvanced
            if "descriptionAdvanced: {" in lines[i]:
                # Skip the redundant block
                while i < len(lines) and "}," not in lines[i]:
                    i += 1
                i += 1 # skip the closing }
        else:
            new_lines.append(line)
            i += 1
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

fix_file("lib/visualLab/data/poiExtraBurkinafasoCitiesV2.ts")
