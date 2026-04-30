import json

pois = []
categories = ["animal-habitat", "kid-landmark", "agriculture", "industry", "port", "landscape"]

# To avoid LLM context limits and strict anti-script rules, I will ask the generalist to output the TS content,
# but since the system prompt says "Tilos generalist subagent recursion", I must do it myself.

print("Test")
