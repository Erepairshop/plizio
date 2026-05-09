import os
import glob
import re

DATA_DIR = r"lib/visualLab/data"

MOJIBAKE_MAP = {
    'Ã¡': 'á', 'Ã©': 'é', 'Ã\xad': 'í', 'Ã³': 'ó', 'Ã¶': 'ö', 'Å‘': 'ő', 'Ãº': 'ú', 'Ã¼': 'ü', 'Å±': 'ű',
    'Ã\xa0': 'Á', 'Ã‰': 'É', 'ÃŒ': 'Í', 'Ã“': 'Ó', 'Ã–': 'Ö', 'Å\x90': 'Ő', 'Ãš': 'Ú', 'Ãœ': 'Ü', 'Å°': 'Ű',
    'Äƒ': 'ă', 'Ã¢': 'â', 'Ã®': 'î', 'È™': 'ș', 'È›': 'ț',
    'Ä‚': 'Ă', 'Ã‚': 'Â', 'ÃŽ': 'Î', 'È˜': 'Ș', 'Èš': 'Ț',
    'Ã¤': 'ä', 'ÃŸ': 'ß', 'Ã„': 'Ä'
}

REPLACEMENTS = [
    # ROMANIAN
    (r'(\b\w+)\?ie\b', r'\1ție'),
    (r'(\b\w+)\?ia\b', r'\1ția'),
    (r'(\b\w+)\?iei\b', r'\1ției'),
    (r'(\b\w+)\?iile\b', r'\1țiile'),
    (r'(\b\w+)\?iilor\b', r'\1țiilor'),
    (r'(\b\w+)\?iuni\b', r'\1țiuni'),
    (r'(\b\w+)\?ional', r'\1țional'),
    (r'(\b\w+)a\?i\b', r'\1ați'),
    (r'(\b\w+)e\?ti\b', r'\1ești'),
    (r'(\b\w+)a\?ti\b', r'\1aști'),
    (r'(\b\w+)o\?ti\b', r'\1oști'),
    (r'(\b\w+)\?te\b', r'\1ște'),
    (r'\bora\?ul\b', r'orașul'),
    (r'\bora\?ului\b', r'orașului'),
    (r'\bora\?ele\b', r'orașele'),
    (r'\bOra\?ul\b', r'Orașul'),
    (r'\bOra\?ele\b', r'Orașele'),
    (r'\bpie\?e\b', r'piețe'),
    (r'\bbra\?e\b', r'brațe'),
    (r'\bmun\?i\b', r'munți'),
    (r'\bMun\?i\b', r'Munți'),
    (r'\bvia\?a\b', r'viața'),
    (r'\bvie\?i\b', r'vieți'),
    (r'\bfor\?e\b', r'forțe'),
    (r'\bFor\?e\b', r'Forțe'),
    (r'\bfa\?ad', r'fațad'),

    # GERMAN
    (r'\bgeh\?rt\b', r'gehört'),
    (r'\bGeh\?rt\b', r'Gehört'),
    (r'\bgro\?e', r'große'),
    (r'\bGro\?e', r'Große'),
    (r'\bst\?dt', r'städt'),
    (r'\bSt\?dt', r'Städt'),
    (r'\bsp\?t', r'spät'),
    (r'\bSp\?t', r'Spät'),
    (r'\bpr\?g', r'präg'),
    (r'\bPr\?g', r'Präg'),
    (r'\bau\?er', r'außer'),
    (r'\bAu\?er', r'Außer'),
    (r'\bstra\?e', r'straße'),
    (r'\bStra\?e', r'Straße'),
    (r'\bfl\?sse', r'flüsse'),
    (r'\bFl\?sse', r'Flüsse'),
    (r'\bgeb\?ud', r'gebäud'),
    (r'\bGeb\?ud', r'Gebäud'),
    (r'\bfr\?h', r'früh'),
    (r'\bFr\?h', r'Früh'),
    (r'\breligi\?s', r'religiös'),
    (r'\beurop\?isch', r'europäisch'),
    (r'\bgr\?n', r'grün'),
    (r'\bGr\?n', r'Grün'),
    (r'\bmilit\?risch', r'militärisch'),
    (r'\bnat\?rlich', r'natürlich'),
    (r'\bNat\?rlich', r'Natürlich'),
    (r'\bber\?hmt', r'berühmt'),
    (r'\bArch\?olog', r'Archäolog'),
    (r'\bh\?ufig', r'häufig'),
    (r'\bfl\?ch', r'fläch'),
    (r'\bFl\?ch', r'Fläch'),
    (r'\bk\?st', r'küst'),
    (r'\bK\?st', r'Küst'),
    (r'\br\?um', r'räum'),
    (r'\bR\?um', r'Räum'),
    (r'\bsch\?ler', r'schüler'),
    (r'\bSch\?ler', r'Schüler'),
    (r'\bzusammenh\?ng', r'zusammenhäng'),
    (r'\bunabh\?ngig', r'unabhängig'),
    (r'\bUnabh\?ngig', r'Unabhängig'),
    (r'\bf\?hrt', r'führt'),
    (r'\bh\?h', r'höh'),
    (r'\bk\?mpf', r'kämpf'),

    # HUNGARIAN
    (r'\ber\?sen\b', r'erősen'),
    (r'\bsz\?khely\b', r'székhely'),
    (r'\bbev\?ndorl', r'bevándorl'),
    (r'\bsz\?les\b', r'széles'),
    (r'\bstrat\?giai\b', r'stratégiai'),
    (r'\bmik\?zben\b', r'miközben'),
    (r'\bkultur\?lis\b', r'kulturális'),
    (r'\bgazdas\?gi\b', r'gazdasági'),
    (r'\bjelent\?se\b', r'jelentőse'),
    (r'\bterm\?szet', r'természet'),
    (r'\btudom\?ny', r'tudomány'),
    (r'\bsszef\?gg', r'összefügg'),
    (r'\bllatteny\?szt', r'állattenyészt'),
    (r'\begy\?tt\b', r'együtt'),
    (r'\bter\?let', r'terület'),
    (r'\bsz\?zad', r'század'),
    (r'\balap\?t', r'alapít'),
    (r'\bk\?zpont', r'központ'),
    (r'\bhagyom\?ny', r'hagyomány'),
    (r'\bt\?rt\?net', r'történet'),
    (r'\b\?p\?let', r'épület'),
    (r'\bt\?bb\b', r'több'),
]

def fix_files():
    ts_files = glob.glob(os.path.join(DATA_DIR, "*.ts"))
    
    total_fixed = 0
    
    for filepath in ts_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            continue

        original = content
        
        # 1. Fix Mojibake
        for bad, good in MOJIBAKE_MAP.items():
            content = content.replace(bad, good)
            
        # 2. Fix known '?' words via regex
        for pattern, replacement in REPLACEMENTS:
            content = re.sub(pattern, replacement, content)
            
        # Write back if changed
        if content != original:
            with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
                f.write(content)
            print(f"Fixed encoding in: {os.path.basename(filepath)}")
            total_fixed += 1

    print(f"\nDone. Fixed issues in {total_fixed} files.")

if __name__ == "__main__":
    fix_files()
