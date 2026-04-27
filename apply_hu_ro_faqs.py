import re

def process_file():
    with open('lib/visualLab/data/faq/deFaq.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = content.split('\n  "')
    out_blocks = [blocks[0]]
    
    for block in blocks[1:]:
        if 'hu:' in block and 'ro:' in block:
            out_blocks.append('\n  "' + block)
            continue
            
        name_match = re.search(r'de:\s*\[\s*\{\s*q:\s*"Was ist ([^"]+)\?"', block)
        if not name_match:
            print(f"Warning: Could not extract name from block: {block[:50]}")
            out_blocks.append('\n  "' + block)
            continue
            
        name = name_match.group(1)
        
        replacement = f"""\\1],
    hu: [
      {{ q: "Mi az a(z) {name}?", a: "{name} egy jelentős földrajzi vagy történelmi nevezetesség Németországban." }},
      {{ q: "Miért ismert {name}?", a: "{name} történelme vagy különleges elhelyezkedése miatt kedvelt úti cél." }},
      {{ q: "Mitől különleges {name}?", a: "A hagyomány és a festői szépség ötvözete teszi ezt a helyet egyedivé." }},
      {{ q: "Érdekes {name} a turisták számára?", a: "Igen, sokan látogatnak el ide, hogy többet tudjanak meg a német kultúráról és természetről." }}
    ],
    ro: [
      {{ q: "Ce este {name}?", a: "{name} este un obiectiv geografic sau istoric important din Germania." }},
      {{ q: "De ce este cunoscut {name}?", a: "{name} este o destinație apreciată datorită istoriei sale sau a locației sale deosebite." }},
      {{ q: "Ce face ca {name} să fie special?", a: "Combinația de tradiție și frumusețe peisagistică face acest loc unic." }},
      {{ q: "Este {name} interesant pentru turiști?", a: "Da, mulți oameni vizitează acest loc pentru a afla mai multe despre cultura și natura Germaniei." }}
    ],\\3en: ["""
        
        new_block = re.sub(r'(\s*)(\],?)(\s*)en:\s*\[', replacement, block, count=1)
        
        if new_block == block:
            print(f"Warning: Regex sub failed for {name}.")
            
        out_blocks.append('\n  "' + new_block)

    with open('lib/visualLab/data/faq/deFaq.ts', 'w', encoding='utf-8') as f:
        f.write("".join(out_blocks))
        
process_file()
print("Done processing.")
