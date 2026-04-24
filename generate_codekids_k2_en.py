
import json
import random

themes = [
    "What is a computer?",
    "Mouse and Keyboard",
    "The Monitor",
    "Icons",
    "Folders",
    "Drawing on Computer",
    "Simple Games",
    "Typing Letters",
    "Turning On and Off",
    "Internet Basics",
    "Online Safety",
    "Digital Stories",
    "Robots",
    "Introduction to Programming",
    "Scratch Jr.",
    "Colors and Shapes",
    "Using a Tablet",
    "The Camera",
    "Sound and Video",
    "Step-by-Step Drawing",
    "Writing a Story",
    "Making Music",
    "Saving Your Work",
    "Netiquette",
    "Final Summary"
]

def generate_tasks(theme_index, theme_name):
    tasks = []
    
    # MCQ Tasks (25)
    specific_questions = {
        0: [ # What is a computer?
            ("Is a computer alive?", ["No", "Yes", "Only when it's on", "Maybe"], 0),
            ("What does a computer need to work?", ["Electricity", "Food", "Water", "Sleep"], 0),
            ("Which part is like the 'brain' of the computer?", ["CPU", "Monitor", "Keyboard", "Mouse"], 0),
            ("Can a computer help you learn?", ["Yes", "No", "Only on Sundays", "Never"], 0),
            ("Where can we find computers?", ["Schools and homes", "Only in space", "Only in the ocean", "Nowhere"], 0),
            ("What can you do on a computer?", ["Draw and type", "Bake a cake", "Wash clothes", "Sleep"], 0),
            ("A laptop is a type of...", ["Computer", "Book", "Toy", "Car"], 0),
            ("Is a smartphone a small computer?", ["Yes", "No", "Maybe", "It is a brick"], 0),
            ("What do we use to see pictures on a computer?", ["The screen", "The mouse", "The cables", "The chair"], 0),
            ("Can computers solve math problems?", ["Yes, very fast", "No, they are bad at math", "Only if you ask nicely", "Sometimes"], 0),
        ],
        1: [ # Mouse and Keyboard
            ("Which button on the mouse do we use most?", ["Left button", "Right button", "Middle button", "The bottom"], 0),
            ("What do we use the keyboard for?", ["Typing", "Drawing", "Watching movies", "Listening to music"], 0),
            ("What is the longest key on the keyboard?", ["Space bar", "Enter key", "Shift key", "Escape key"], 0),
            ("How do we move the arrow on the screen?", ["Move the mouse", "Press the monitor", "Shout at the computer", "Spin the chair"], 0),
            ("Which key starts a new line?", ["Enter", "Space", "Delete", "Shift"], 0),
            ("How many clicks usually open an app?", ["Two (Double click)", "Ten", "Zero", "One long click"], 0),
            ("What does the scroll wheel do?", ["Moves the page up and down", "Changes the color", "Turns off the computer", "Types letters"], 0),
            ("Which key helps us type capital letters?", ["Shift", "Space", "Alt", "Ctrl"], 0),
            ("What key do we use to erase a mistake?", ["Backspace", "Enter", "Space", "Tab"], 0),
            ("Where should you keep your mouse?", ["On a mousepad", "On the floor", "In the air", "In your pocket"], 0),
        ],
        2: [ # The Monitor
            ("What is another name for the monitor?", ["Screen", "Box", "Speaker", "Printer"], 0),
            ("What do we do with a monitor?", ["Look at it", "Type on it", "Sit on it", "Eat on it"], 0),
            ("If the monitor is dark, what might be wrong?", ["It is turned off", "It is hungry", "It is sleeping", "It is happy"], 0),
            ("What are the tiny dots on a screen called?", ["Pixels", "Ants", "Dust", "Buttons"], 0),
            ("Can you touch every monitor to make it work?", ["No, only touchscreens", "Yes, always", "Only with a pen", "Only with your nose"], 0),
            ("Why do we need a monitor?", ["To see our work", "To hear music", "To keep the desk heavy", "To cool the room"], 0),
            ("What should you use to clean a monitor?", ["A soft cloth", "A wet sponge", "A brush", "Soap and water"], 0),
            ("Is the monitor an input or output device?", ["Output", "Input", "Both", "Neither"], 0),
            ("Where does the monitor plug into?", ["The computer case", "The mouse", "The keyboard", "The chair"], 0),
            ("What happens if you turn off the monitor?", ["The screen goes black", "The computer explodes", "The music stops", "The mouse dies"], 0),
        ]
    }

    # Generate MCQ
    for i in range(25):
        if theme_index in specific_questions and i < len(specific_questions[theme_index]):
            q_text, opts, corr_idx = specific_questions[theme_index][i]
        else:
            # Generic but relevant questions
            generic_qs = [
                (f"Why is {theme_name} important?", ["It helps us use computers better", "It makes us taller", "It helps us sleep", "It is not important"], 0),
                (f"What is a rule for {theme_name}?", ["Be careful and patient", "Run around", "Be loud", "Break things"], 0),
                (f"Who can help you with {theme_name}?", ["Teacher or parents", "A pet dog", "A stuffed animal", "The wall"], 0),
                (f"What tool do we use for {theme_name}?", ["The computer", "A hammer", "A spoon", "A bicycle"], 0),
                (f"Can we learn {theme_name} at school?", ["Yes", "No", "Only in summer", "Never"], 0),
                (f"Is {theme_name} fun to learn?", ["Yes!", "No", "Maybe", "I don't know"], 0),
                (f"What happens if we practice {theme_name}?", ["We get better at it", "We forget it", "Nothing", "We get tired"], 0),
                (f"Do we need a computer for {theme_name}?", ["Mostly yes", "Never", "Only on Tuesdays", "No"], 0),
                (f"Is {theme_name} related to technology?", ["Yes", "No", "What is technology?", "Maybe"], 0),
                (f"What is the first step in {theme_name}?", ["Starting the computer", "Turning it off", "Going to bed", "Running away"], 0),
                (f"What is a part of {theme_name}?", ["Digital tools", "A garden hose", "A frying pan", "A pillow"], 0),
                (f"Can you do {theme_name} with friends?", ["Yes, it is fun", "No, never", "Only if it is raining", "Maybe"], 0),
                (f"What do we use to see {theme_name}?", ["A screen", "A mirror", "A window", "Glasses"], 0),
                (f"How do we start {theme_name}?", ["By opening a program", "By closing our eyes", "By clicking the floor", "By singing"], 0),
                (f"Is {theme_name} a new thing to learn?", ["For some, yes", "No, it's 1000 years old", "It's a secret", "Maybe"], 0)
            ]
            q_text, opts, corr_idx = generic_qs[i % len(generic_qs)]
            # Add some variety to the question text
            if i >= len(generic_qs):
                q_text = f"Review: {q_text} ({i})"

        # Randomize options
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
    words_by_theme = {
        0: ["Computer", "Brain", "Power", "Work", "Screen", "Laptop", "Tech", "Smart", "Machine", "Help"],
        1: ["Mouse", "Click", "Type", "Space", "Enter", "Keys", "Board", "Scroll", "Button", "Hand"],
        2: ["Screen", "Light", "Video", "Watch", "Color", "Pixel", "Show", "Bright", "Clear", "Look"],
        3: ["Icon", "App", "Start", "Open", "Trash", "Small", "Click", "Find", "Pic", "Game"],
        4: ["Folder", "File", "Name", "Save", "Keep", "New", "Box", "Place", "Work", "Sort"],
        5: ["Draw", "Paint", "Brush", "Art", "Color", "Line", "Shape", "Fill", "Tool", "Cool"],
        6: ["Game", "Fun", "Play", "Win", "Score", "Level", "Start", "Move", "Jump", "Fast"],
        7: ["Letter", "Word", "Type", "ABC", "Hello", "Name", "Key", "Text", "Write", "Easy"],
        8: ["Power", "Start", "Off", "Wait", "Ready", "Button", "Light", "On", "Go", "Stop"],
        9: ["Web", "Link", "Online", "Search", "Site", "Net", "World", "Page", "Find", "Go"],
        10: ["Safe", "Rules", "Stop", "Help", "Hide", "Secret", "Tell", "Ask", "Guard", "Safe"],
        11: ["Story", "Book", "Tale", "Read", "Hero", "Page", "End", "Idea", "Once", "Time"],
        12: ["Robot", "Bot", "Metal", "Move", "Code", "Smart", "Auto", "Arm", "Wheel", "Iron"],
        13: ["Code", "Step", "Plan", "Move", "Logic", "Path", "Goal", "Start", "Run", "Done"],
        14: ["Block", "Jump", "Flag", "Cat", "Blue", "Green", "Turn", "Sound", "Move", "Play"],
        15: ["Red", "Blue", "Green", "Star", "Round", "Shape", "Square", "Dot", "Line", "Bunt"], # Bunt -> Bright
        16: ["Tablet", "Touch", "Swipe", "App", "Pad", "Flat", "Easy", "Hand", "Hold", "Glass"],
        17: ["Photo", "Smile", "Lens", "Flash", "Snap", "Pic", "Look", "See", "Click", "Take"],
        18: ["Sound", "Music", "Hear", "Loud", "Song", "Sing", "Beat", "Play", "Stop", "Voice"],
        19: ["Line", "House", "Tree", "Sun", "Star", "Face", "Car", "Dog", "Cat", "Bird"],
        20: ["Write", "Text", "Idea", "Title", "Page", "Book", "Word", "Sent", "End", "Tell"],
        21: ["Song", "Note", "Beat", "Drum", "Tune", "Sing", "Play", "Rock", "Pop", "Band"],
        22: ["Save", "Keep", "File", "Disk", "Stick", "Hold", "Copy", "Safe", "Last", "Work"],
        23: ["Kind", "Nice", "Hello", "Share", "Help", "Good", "Smile", "Talk", "Friend", "Great"],
        24: ["IT", "Done", "Great", "Super", "Final", "Best", "Win", "Learn", "Wow", "End"]
    }
    
    # Fix the typo in theme 15 words
    if words_by_theme[15][-1] == "Bunt":
        words_by_theme[15][-1] = "Bright"

    typing_words = words_by_theme.get(theme_index, ["Type", "Word", "Hello", "Cool", "Fun", "Game", "Key", "Mouse", "Screen", "Work"])
    for j in range(10):
        word = typing_words[j]
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

file_path = "codekids_k2_en.json"
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {file_path}")
