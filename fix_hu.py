import re

with open("lib/visualLab/data/hungaryPoi.ts", "r", encoding="utf-8") as f:
    content = f.read()

# The incorrect structure looks like:
# "ro": "",
# "en": ""
# ,
#   ro: "..."
# }

# We want to replace the entire descriptionAdvanced or factsAdvanced blocks if they contain this duplicate.
# For descriptionAdvanced:
pattern_desc = re.compile(r'("ro":\s*"",\s*"en":\s*""\s*)\,\s*ro:\s*"(.*?)"\s*\}', re.DOTALL)

def fix_desc(match):
    en_part = match.group(1) # "ro": "", "en": ""
    ro_content = match.group(2)
    # We want: "ro": "...", "en": "" }
    return f'"ro": "{ro_content}",\n      "en": ""\n    }}'

content = pattern_desc.sub(fix_desc, content)

# For factsAdvanced:
pattern_facts = re.compile(r'("ro":\s*\[\],\s*"en":\s*\[\]\s*)\,\s*ro:\s*(\[\s*[\s\S]*?\])\s*\}', re.DOTALL)

def fix_facts(match):
    en_part = match.group(1)
    ro_content = match.group(2)
    return f'"ro": {ro_content},\n      "en": []\n    }}'

content = pattern_facts.sub(fix_facts, content)

with open("lib/visualLab/data/hungaryPoi.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed TS file syntax and duplicated ro keys.")
