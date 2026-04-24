import json

def transform_data():
    input_file = 'gesch_us_new.json'
    output_file = 'gesch_us_new_fixed.json'
    
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    new_data = {}
    
    for grade, topics in data.items():
        new_data[grade] = {}
        for topic_name, questions in topics.items():
            new_data[grade][topic_name] = {
                "mcq": [],
                "typing": []
            }
            
            for q in questions:
                q_type = q.get('type')
                if q_type == 'mcq':
                    options = q.get('options', [])
                    correct_idx = q.get('correct', 0)
                    
                    # Ensure correct_idx is valid
                    if isinstance(correct_idx, int) and 0 <= correct_idx < len(options):
                        correct_val = options[correct_idx]
                        wrong_vals = [opt for i, opt in enumerate(options) if i != correct_idx]
                        
                        new_data[grade][topic_name]["mcq"].append({
                            "question": q.get('question'),
                            "correct": correct_val,
                            "wrong": wrong_vals
                        })
                elif q_type == 'typing':
                    new_data[grade][topic_name]["typing"].append({
                        "question": q.get('question'),
                        "answer": q.get('answer')
                    })
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, indent=2, ensure_ascii=False)
    
    print(f"Transformed data saved to {output_file}")

if __name__ == "__main__":
    transform_data()
