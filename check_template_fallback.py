
import re
from collections import Counter

file_path = 'lib/visualLab/data/finlandPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all descriptionAdvanced.en
desc_matches = re.findall(r'descriptionAdvanced:\s*\{.*?en:\s*"([^"]*)"', content, re.DOTALL)

sentences = []
for desc in desc_matches:
    # Split by period and filter short ones
    sents = [s.strip() for s in desc.split('.') if len(s.strip()) > 20]
    sentences.extend(sents)

counter = Counter(sentences)
for sent, count in counter.most_common(10):
    if count > 1:
        print(f"Count: {count} - Sentence: {sent[:100]}...")
