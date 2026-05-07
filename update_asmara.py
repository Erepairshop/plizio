import re
import json

asmara_id = 'asmara-cities-v2'
asmara_desc = {
    "de": "Asmara, die Hauptstadt Eritreas, liegt auf über 2300 Metern Höhe und ist für ihre außergewöhnliche Dichte an modernistischer Architektur aus den 1930er Jahren bekannt, die von der UNESCO als Weltkulturerbe anerkannt wurde. Die Stadt, die oft als 'Piccola Roma' bezeichnet wird, spiegelt eine faszinierende Mischung aus italienischem Kolonialerbe und eritreischer Kultur wider. Geografie K7 — Hochland und Siedlungen.",
    "hu": "Aszmara, Eritrea fővárosa több mint 2300 méteres magasságban fekszik, és az 1930-as évekből származó modernista építészete miatt a UNESCO Világörökség része. A gyakran 'Piccola Roma'-ként emlegetett város az olasz gyarmati örökség és az eritreai kultúra lenyűgöző keverékét nyújtja. Földrajz K7 — magasföldek és települések.",
    "ro": "Asmara, capitala Eritreei, este situată la o altitudine de peste 2300 de metri și este recunoscută pentru arhitectura modernistă din anii 1930, fiind inclusă în Patrimoniul Mondial UNESCO. Orașul, numit deseori 'Piccola Roma', reflectă un amestec fascinant de moștenire colonială italiană și cultură eritreeană. Geografie K7 — platouri și așezări.",
    "en": "Asmara, the capital of Eritrea, sits at over 2,300 meters and is famous for its dense collection of 1930s modernist architecture, designated a UNESCO World Heritage site. Often called 'Piccola Roma', the city offers a fascinating blend of Italian colonial legacy and Eritrean culture. Geography K7 — highlands and settlements."
}

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert after facts: { ... },
new_content = re.sub(r'(id: "asmara-cities-v2",[\s\S]*?facts: \{[\s\S]*?\},\n)', 
                     r'\1    descriptionAdvanced: ' + json.dumps(asmara_desc, ensure_ascii=False, indent=6) + ',\n', content)

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
