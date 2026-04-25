import json
import re
import os

RO_IDS = [
    "RO-AB", "RO-AG", "RO-AR", "RO-B", "RO-BC", "RO-BH", "RO-BN", "RO-BR", "RO-BT", "RO-BV",
    "RO-BZ", "RO-CJ", "RO-CL", "RO-CS", "RO-CT", "RO-CV", "RO-DB", "RO-DJ", "RO-GJ", "RO-GL",
    "RO-GR", "RO-HD", "RO-HR", "RO-IF", "RO-IL", "RO-IS", "RO-MH", "RO-MM", "RO-MS", "RO-NT",
    "RO-OT", "RO-PH", "RO-SB", "RO-SJ", "RO-SM", "RO-SV", "RO-TL", "RO-TM", "RO-TR", "RO-VL",
    "RO-VN", "RO-VS"
]

def run():
    out_lines = []
    out_lines.append('// Auto-generated dummy Admin-2 paths for Romania\n')
    out_lines.append('export interface AdminSubregion {')
    out_lines.append('  id: string;')
    out_lines.append('  name: { de: string; hu: string; ro: string; en: string };')
    out_lines.append('  centerLat: number;')
    out_lines.append('  centerLng: number;')
    out_lines.append('  labelX: number;')
    out_lines.append('  labelY: number;')
    out_lines.append('  path: string;')
    out_lines.append('}\n')
    
    out_lines.append('export const roAdmin2Map: Record<string, AdminSubregion[]> = {')
    
    for judet in RO_IDS:
        out_lines.append(f'  "{judet}": [')
        for i in range(1, 4):
            out_lines.append('    {')
            out_lines.append(f'      id: "{judet}-C{i}",')
            out_lines.append(f'      name: {{ de: "Gemeinde {i}", hu: "Község {i}", ro: "Comuna {i}", en: "Commune {i}" }},')
            out_lines.append('      centerLat: 45.0,')
            out_lines.append('      centerLng: 25.0,')
            out_lines.append(f'      labelX: {300 + i * 50},')
            out_lines.append(f'      labelY: {400 + i * 50},')
            # create a dummy SVG rectangle path
            x = 300 + i * 50 - 20
            y = 400 + i * 50 - 20
            path = f'M{x},{y} L{x+40},{y} L{x+40},{y+40} L{x},{y+40} Z'
            out_lines.append(f'      path: "{path}"')
            out_lines.append('    },')
        out_lines.append('  ],')
        
    out_lines.append('};\n')
    
    out_path = os.path.join(os.path.dirname(__file__), '../lib/visualLab/maps/romaniaAdmin2.svg.ts')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out_lines))

    print(f"Generated {out_path}")

if __name__ == '__main__':
    run()
