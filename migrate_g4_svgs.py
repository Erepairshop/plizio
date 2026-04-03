import os
import re

files = [
  'app/astromath/games/AngleExplorer4.tsx',
  'app/astromath/games/AreaExplorer4.tsx',
  'app/astromath/games/DivisionExplorer4.tsx',
  'app/astromath/games/FractionExplorer4.tsx',
  'app/astromath/games/MultiplicationExplorer4.tsx',
  'app/astromath/games/PlaceValueExplorer4.tsx',
  'app/astromath/games/UnitExplorer4.tsx',
  'app/astromath/games/WordProblemExplorer4.tsx'
]

math_svg_path = '/home/borota25/Desktop/plizio/app/astromath/svg/MathSvg.tsx'
with open(math_svg_path, 'r', encoding='utf-8') as f:
    math_svg_content = f.read()

for filename in files:
    path = os.path.join('/home/borota25/Desktop/plizio', filename)
    if not os.path.exists(path): continue
    
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Extract the base name (e.g., "PlaceValue")
    base_name = re.search(r'([A-Za-z]+)Explorer4', filename).group(1)
    
    # We want to find const Topic1Svg = memo(function Topic1Svg() { ... });
    # and remove it from the file, but add it to MathSvg.tsx
    
    for i in range(1, 4):
        pattern = r'(const Topic' + str(i) + r'Svg = memo\(function Topic' + str(i) + r'Svg\(\) \{[\s\S]*?\}\);\n*)'
        match = re.search(pattern, content)
        
        if match:
            svg_code = match.group(1)
            # Remove from original file
            content = content.replace(svg_code, '')
            
            # Rename component
            new_name = f"G4{base_name}T{i}Svg"
            svg_code = svg_code.replace(f"Topic{i}Svg", new_name)
            svg_code = svg_code.replace("const " + new_name, "export const " + new_name)
            
            # Add a comment header
            header = f"\n// ─── G4 {base_name.upper()} T{i} SVG ────────────────────────────────────────────────\n\n"
            math_svg_content += header + svg_code
            
            # Replace usage in TOPICS array
            usage_pattern = r'svg:\s*\(\)\s*=>\s*<Topic' + str(i) + r'Svg\s*\/>'
            new_usage = f'svg: {{ type: "math-diagram", name: "{new_name}" }}'
            content = re.sub(usage_pattern, new_usage, content)
            
            # Fallback for some variations
            usage_pattern2 = r'svg:\s*<Topic' + str(i) + r'Svg\s*\/>'
            content = re.sub(usage_pattern2, new_usage, content)
            
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print(f"Migrated SVGs for {filename}")

with open(math_svg_path, 'w', encoding='utf-8') as f:
    f.write(math_svg_content)
    
print("Updated MathSvg.tsx")
