
import re
lang = 'de'
inner_content = 'de: "test"'
try:
    lang_pattern = re.search(r'\b' + lang + r'\b\s*:\s*(?:["'`]|\[)', inner_content)
    print(lang_pattern)
except Exception as e:
    print(e)
