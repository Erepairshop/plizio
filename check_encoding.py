import os
import re
import glob

DATA_DIR = r"lib/visualLab/data"

MOJIBAKE_PATTERNS = [
    r"Ã[¡©íóöőúüűÁÉÍÓÖŐÚÜŰ]", # Hungarian
    r"Ä[ƒă]", # Romanian ă
    r"Ã[¢â®î]", # Romanian â, î
    r"È[™șț]", # Romanian ș, ț
    r"Å[‘ő±ű]", # Hungarian ő, ű
    r"\uFFFD", # Unicode replacement char
]

def check_encoding_issues():
    ts_files = glob.glob(os.path.join(DATA_DIR, "*.ts"))
    
    issues_found = 0
    
    for filepath in ts_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            print(f"[!] {os.path.basename(filepath)}: Cannot read as UTF-8!")
            issues_found += 1
            continue

        file_issues = []
        
        # 1. Check for literal replacement character
        if "\uFFFD" in content:
            file_issues.append("Contains replacement character (U+FFFD)")
            
        # 2. Check for mojibake
        for pattern in MOJIBAKE_PATTERNS:
            matches = re.findall(pattern, content)
            if matches:
                file_issues.append(f"Mojibake detected: {set(matches)}")
                
        # 3. Check for '?' inside words (e.g., "Bucure?ti" instead of "București")
        # We only look for words where a single '?' is surrounded by letters.
        # Let's restrict it to lowercase letters to avoid matching code or camelCase, 
        # but just generally `[a-z]\?[a-z]`
        question_mark_in_word = re.findall(r'\b([a-z]+)\?([a-z]+)\b', content, re.IGNORECASE)
        if question_mark_in_word:
            suspicious = [f"{m[0]}?{m[1]}" for m in question_mark_in_word if len(m[0]) > 1 and len(m[1]) > 1]
            if suspicious:
                file_issues.append(f"'?' inside words: {set(suspicious)}")

        if file_issues:
            print(f"[!] {os.path.basename(filepath)}:")
            for issue in file_issues:
                print(f"    - {issue}")
            issues_found += 1

    print(f"\nTotal files checked: {len(ts_files)}")
    print(f"Files with potential encoding issues: {issues_found}")

if __name__ == "__main__":
    check_encoding_issues()
