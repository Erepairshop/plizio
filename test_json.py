import json
import sys
try:
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        data = json.load(f)
        print("Success")
except Exception as e:
    print(e)
