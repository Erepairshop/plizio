import re
import sys

def fix_ts_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
        sys.exit(1)

    # This regex finds pool topic definitions that are just a single line (info, quiz, difficulty)
    # and are missing the svg and interactive properties.
    pattern = re.compile(
        r'{\s*infoTitle: "t(\d+)_title",\s*infoText: "t\1_text",\s*quiz: (\{.*?\})\s*,\s*difficulty: "(.*?)"\s*}'
    )

    def replacement(match):
        topic_num = match.group(1)
        quiz_obj = match.group(2)
        difficulty = match.group(3)

        # Use a single triple-quoted f-string for the multiline template.
        # This correctly handles newlines and indentation.
        return f'''{{
    infoTitle: "t{topic_num}_title", infoText: "t{topic_num}_text",
    svg: {{ type: "word-display", word: "Thema", color: "#9C27B0" }},
    interactive: {{ type: "gap-fill", instruction: "t{topic_num}_inst", hint1: "t{topic_num}_h1", hint2: "t{topic_num}_h2", sentence: "t{topic_num}_sent", choices: ["t{topic_num}_qa2", "t{topic_num}_qb2", "t{topic_num}_qc2", "t{topic_num}_qd2"], correctIndex: 0 }},
    quiz: {quiz_obj},
    difficulty: "{difficulty}"
  }}'''

    fixed_content, count = pattern.subn(replacement, content)

    if count > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Successfully fixed {count} TypeScript errors in {file_path}")
    else:
        print("No matching errors found to fix.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix_sachkunde_types.py <file_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    fix_ts_file(file_path)
