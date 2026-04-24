
import json
import random

themes = [
    "Introduction to Scratch",
    "Scripts and Blocks",
    "Sprites and Costumes",
    "Motion Commands",
    "Creating Animations",
    "Events and Triggers",
    "Using Variables",
    "Working with Lists",
    "Functions and Custom Blocks",
    "Conditions (If-Then)",
    "Loops (Repeat and Forever)",
    "Random Numbers and Math",
    "Sound and Music in Code",
    "Game Development Basics",
    "Labyrinth Game Design",
    "Debugging and Bug Fixing",
    "Presentation Skills",
    "Website Creation (HTML Basics)",
    "Online Research and Search Engines",
    "Website Security and Passwords",
    "Digital Work and Collaboration",
    "Internet Ethics and Netiquette",
    "Data Volume (Bits and Bytes)",
    "Comprehensive K4 Review",
    "The Future of Technology"
]

def generate_tasks(theme_index, theme_name):
    tasks = []
    
    # MCQ Questions pool per theme
    theme_qs = {
        0: [ # Introduction to Scratch
            ("What is the 'Stage' in Scratch?", ["Where the action happens", "Where you write code", "Where you save files", "A place to sleep"], 0),
            ("Who is the mascot of Scratch?", ["A cat", "A dog", "A bird", "A robot"], 0),
            ("What do we call the characters in Scratch?", ["Sprites", "Actors", "Puppets", "Images"], 0),
            ("Where do you find the programming blocks?", ["Blocks Palette", "Backdrop Library", "Sounds Tab", "Settings"], 0),
            ("How do you start a project in Scratch?", ["Click the Green Flag", "Press the Red Button", "Shout 'Go!'", "Close the window"], 0),
        ],
        1: [ # Scripts and Blocks
            ("What happens if blocks are not connected?", ["They won't run together", "They turn red", "The computer restarts", "Nothing"], 0),
            ("Which block shape indicates it can have blocks inside it?", ["C-shape", "Oval", "Diamond", "Square"], 0),
            ("What is a 'Script'?", ["A stack of connected blocks", "A single block", "A sound file", "The background"], 0),
            ("Can you change the order of blocks in a stack?", ["Yes, by dragging them", "No, never", "Only if you delete them", "Only on Tuesdays"], 0),
            ("What does a hat-shaped block do?", ["Starts a script", "Ends a script", "Plays a sound", "Changes color"], 0),
        ],
        17: [ # HTML Basics
            ("What does HTML stand for?", ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Multi Link", "Hyper Text Main Line"], 0),
            ("Which tag is used for the largest heading?", ["<h1>", "<h6>", "<head>", "<p>"], 0),
            ("What tag do we use to start a paragraph?", ["<p>", "<a>", "<br>", "<body>"], 0),
            ("Where does the visible content of a webpage go?", ["Inside <body>", "Inside <head>", "Inside <title>", "Inside <html>"], 0),
            ("What tag is used for an image?", ["<img>", "<pic>", "<photo>", "<a>"], 0),
        ],
        22: [ # Data Volume
            ("What is the smallest unit of data?", ["Bit", "Byte", "Kilobyte", "Megabyte"], 0),
            ("How many bits are in one Byte?", ["8", "10", "100", "1024"], 0),
            ("Which is larger: 1 Megabyte (MB) or 1 Gigabyte (GB)?", ["1 Gigabyte", "1 Megabyte", "They are the same", "None of these"], 0),
            ("What does KB stand for?", ["Kilobyte", "Kingbyte", "Keybyte", "Kindbyte"], 0),
            ("Approximately how many MB are in 1 GB?", ["1000", "10", "100", "1,000,000"], 0),
        ]
    }

    # Generate 25 MCQs
    for i in range(25):
        if theme_index in theme_qs and i < len(theme_qs[theme_index]):
            q_text, opts, corr_idx = theme_qs[theme_index][i]
        else:
            # Context-aware generic questions
            generic_templates = [
                (f"In {theme_name}, why is accuracy important?", ["To make sure the program works", "To make it look pretty", "To save electricity", "It is not important"], 0),
                (f"Which of these is used in {theme_name}?", ["Digital logic", "A kitchen spoon", "A garden rake", "A hairbrush"], 0),
                (f"If you have a problem with {theme_name}, what should you do?", ["Debug and check steps", "Delete everything", "Cry", "Ignore it"], 0),
                (f"Is {theme_name} a part of computer science?", ["Yes", "No", "Only for adults", "Maybe"], 0),
                (f"What is a key skill for {theme_name}?", ["Logical thinking", "Running fast", "Singing loudly", "Sleeping"], 0),
                (f"What tool is best for {theme_name}?", ["A computer or tablet", "A pencil and paper", "A calculator", "A magnifying glass"], 0),
                (f"Can you work with others on {theme_name}?", ["Yes, collaboration is good", "No, it is a secret", "Only on weekends", "Never"], 0),
                (f"How do you improve at {theme_name}?", ["By practicing", "By waiting", "By closing the computer", "By eating snacks"], 0),
                (f"What is the result of learning {theme_name}?", ["You create digital projects", "You become a pilot", "You grow taller", "Nothing changes"], 0),
                (f"Which part of the computer helps with {theme_name}?", ["The CPU and screen", "The power cable", "The desk", "The mouse pad"], 0)
            ]
            q_text, opts, corr_idx = generic_templates[i % len(generic_templates)]
            if i >= 10:
                q_text = f"Review Question: {q_text} (Topic: {theme_name})"

        correct_answer = opts[corr_idx]
        shuffled_opts = list(opts)
        random.shuffle(shuffled_opts)
        new_corr_idx = shuffled_opts.index(correct_answer)
        
        tasks.append({
            "type": "mcq",
            "question": q_text,
            "options": shuffled_opts,
            "correct": new_corr_idx
        })

    # Typing Tasks (10)
    words_pool = {
        0: ["Scratch", "Stage", "Sprite", "Block", "Palette", "Flag", "Project", "Backdrop", "Code", "Program"],
        1: ["Script", "Stack", "Connect", "Order", "Trigger", "Command", "Logic", "Shape", "Snap", "Run"],
        2: ["Costume", "Look", "Change", "Switch", "Design", "Editor", "Size", "Hide", "Show", "Graphic"],
        3: ["Motion", "Move", "Steps", "Turn", "Degree", "Glide", "Point", "Position", "X-axis", "Y-axis"],
        4: ["Anim", "Frame", "Wait", "Repeat", "Smooth", "Walk", "Action", "Motion", "Speed", "Next"],
        17: ["HTML", "Header", "Body", "Tag", "Link", "Image", "Webpage", "Browser", "Title", "Text"],
        22: ["Bit", "Byte", "Kilo", "Mega", "Giga", "Tera", "Volume", "Data", "Memory", "Size"]
    }
    
    typing_list = words_pool.get(theme_index, [theme_name.split()[0], "Digital", "Online", "System", "Power", "Keyboard", "Network", "Safety", "Logic", "Future"])
    # Ensure exactly 10
    while len(typing_list) < 10:
        typing_list.append("Tech")
    typing_list = typing_list[:10]

    for word in typing_list:
        tasks.append({
            "type": "typing",
            "question": f"Type the word: {word}",
            "answer": word
        })
        
    return tasks

data = {}
for idx, theme in enumerate(themes):
    data[str(idx + 1)] = {
        "theme": theme,
        "tasks": generate_tasks(idx, theme)
    }

output_path = r"C:/Users/User/tmp/codekids_k4_en.json"
try:
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"SUCCESS: {output_path}")
except Exception as e:
    # Fallback to current directory if path fails
    with open("codekids_k4_en.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"ERROR: Could not write to {output_path}. Saved to current directory instead. Error: {e}")
