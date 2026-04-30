import re

file_path = 'lib/visualLab/data/poiExtraMexicoCitiesV2.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find the broken structure:
#   },
#     descriptionAdvanced: { ... },
#     factsAdvanced: { ... },
#   { (or end of array)

# We want to match:
#   },
#     descriptionAdvanced: { ... },
#     factsAdvanced: { ... },
pattern = r'\s*\}\s*,\s*\n\s*descriptionAdvanced:\s*\{([\s\S]*?)\}\s*,\s*\n\s*factsAdvanced:\s*\{([\s\S]*?)\}\s*,'

# Replacement:
#     ,
#     descriptionAdvanced: { ... },
#     factsAdvanced: { ... }
#   },
replacement = r',\n    descriptionAdvanced: {\1},\n    factsAdvanced: {\2}\n  },'

new_content = re.sub(pattern, replacement, content)

# Also check for the case where it's at the end of the array (not followed by a comma and another {)
pattern_end = r'\s*\}\s*\n\s*descriptionAdvanced:\s*\{([\s\S]*?)\}\s*,\s*\n\s*factsAdvanced:\s*\{([\s\S]*?)\}\s*\n\s*\];'
replacement_end = r',\n    descriptionAdvanced: {\1},\n    factsAdvanced: {\2}\n  }\n];'

new_content = re.sub(pattern_end, replacement_end, new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed the file structure.")
