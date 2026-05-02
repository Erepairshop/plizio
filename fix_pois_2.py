import re

def fix_py(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove lone `description:` lines
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        if line.strip() == 'description:':
            continue
        new_lines.append(line)
        
    content = '\n'.join(new_lines)
    
    # Ivory Coast extra `},` at line 410: it's literally `  },\n    {` maybe?
    # Actually Ivory Coast error was 410: `, expected` because of:
    # 408        }
    # 409    }
    # 410  },
    # Let's just fix it by replacing the whole 408-410 with standard:
    content = content.replace('        }\n    }\n  },\n    {', '      }\n    },\n    {')
    content = content.replace('        }\n    }', '      }\n    }')
    content = content.replace('  },\n    {\n      id: "mount-toura-nature-v2"', '  },\n  {\n    id: "mount-toura-nature-v2"')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_py("lib/visualLab/data/poiExtraParaguayEconomicV2.ts")
fix_py("lib/visualLab/data/poiExtraIvorycoastNatureV2.ts")
