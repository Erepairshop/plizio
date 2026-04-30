import re
with open('.tmp_gen_colombia_relief.py', 'r') as f:
    content = f.read()
content = content.replace('json.dumps(', 'json.dumps(ensure_ascii=False, obj=')
with open('.tmp_gen_colombia_relief.py', 'w') as f:
    f.write(content)
