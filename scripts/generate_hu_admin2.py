import json
import re
import os

HU_IDS = [
    "HU-BU", "HU-BA", "HU-BK", "HU-BE", "HU-BZ", "HU-CS", "HU-FE", "HU-GS", "HU-HB", "HU-HE",
    "HU-KE", "HU-NO", "HU-PE", "HU-SO", "HU-SZ", "HU-JN", "HU-TO", "HU-VA", "HU-VE", "HU-ZA"
]

def run():
    out_lines = []
    out_lines.append('// Auto-generated dummy Admin-2 paths for Hungary\n')
    out_lines.append('export interface AdminSubregion {')
    out_lines.append('  id: string;')
    out_lines.append('  name: { de: string; hu: string; ro: string; en: string };')
    out_lines.append('  centerLat: number;')
    out_lines.append('  centerLng: number;')
    out_lines.append('  labelX: number;')
    out_lines.append('  labelY: number;')
    out_lines.append('  path: string;')
    out_lines.append('}\n')
    
    out_lines.append('export const huAdmin2Map: Record<string, AdminSubregion[]> = {')
    
    for megye in HU_IDS:
        out_lines.append(f'  "{megye}": [')
        for i in range(1, 4):
            out_lines.append('    {')
            out_lines.append(f'      id: "{megye}-J{i}",')
            out_lines.append(f'      name: {{ de: "Kreis {i}", hu: "Járás {i}", ro: "Districtul {i}", en: "District {i}" }},')
            out_lines.append('      centerLat: 47.0,')
            out_lines.append('      centerLng: 19.0,')
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
    
    out_path = os.path.join(os.path.dirname(__file__), '../lib/visualLab/maps/hungaryAdmin2.svg.ts')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(out_lines))

    print(f"Generated {out_path}")

if __name__ == '__main__':
    run()
