
import re
import os

file_path = 'lib/visualLab/data/austriaPoi.ts'

with open(file_path, 'rb') as f:
    content = f.read().decode('utf-8')

# Define the updates
updates = {
    "at-tulln-an-der-donau": {
        "descriptionAdvanced": {
            "hu": "Tulln an der Donau Ausztria egyik legrégebbi városa, amely már a római korban is fontos erődítmény volt Comagena néven. A Duna partján fekvő település ma leginkább 'virágvárosként' és a kertek fővárosaként ismert, köszönhetően a világhírű 'DIE GARTEN TULLN' kiállításnak, amely Európa első ökológiai mintakertje. A város főterén álló Nibelung-szökőkút a Nibelung-ének egyik fontos jelenetét idézi meg, emlékeztetve arra, hogy a monda szerint itt találkozott Attila hun király és Kriemhild. Tulln nemcsak kulturális és történelmi látnivalókban gazdag, hanem fontos gazdasági és oktatási központ is, híres vásárairól és cukorgyáráról. A Duna-parti sétány és a kerékpárút a turisták kedvenc helyszíne, ahol a folyó látványa és a modern művészeti alkotások, mint az Egon Schiele-múzeum, különleges hangulatot teremtenek."
        },
        "factsAdvanced": {
            "hu": [
                "Tulln már 1159-ben városi rangot kapott, így egyike Ausztria legrégebbi városainak.",
                "A város szülötte a híres expresszionista festő, Egon Schiele, akinek múzeuma az egykori börtönben kapott helyet.",
                "A 'DIE GARTEN TULLN' területén több mint 70 különböző bemutatókert található 7 hektáron.",
                "A római kori Comagena lovas erőd maradványai, mint a Salz- és a Römerturm, ma is láthatóak.",
                "Tullnban található Ausztria egyik legnagyobb és legfontosabb kiállítási és vásárközpontja.",
                "A város mellett fekszik Európa egyik legmodernebb és legnagyobb cukorgyára.",
                "A Nibelung-emlékmű egy hatalmas bronz szoborcsoport, amely a középkori eposz egyik jelenetét ábrázolja.",
                "A Duna-parti vízi színpad nyaranta számos koncertnek és kulturális eseménynek ad otthont."
            ]
        }
    },
    "at-neunkirchen-niederoesterreich": {
        "descriptionAdvanced": {
            "hu": "Neunkirchen városa Alsó-Ausztria egyik legrégebbi települése, amely már a római korban is lakott volt, nevét pedig az 1094-ben említett 'Novenchirchun' után kapta. A város a Schwarza folyó mentén fekszik, és a 19. században az osztrák textilipar egyik legfontosabb központjává vált, ami mély nyomot hagyott a település szerkezetén és kultúráján. Bár az egykori gyárak nagy része ma már nem üzemel, az ipari örökség ma is felfedezhető a városi múzeumban és a felújított munkásnegyedekben. Neunkirchen főtere Ausztria egyik legnagyobbja, ahol a barokk Szentháromság-oszlop és a városháza impozáns épülete látható. A város ma a déli Bécsi-medence kereskedelmi központja, ahol a modern bevásárlóutcák és a hagyományos kézműves boltok jól megférnek egymás mellett."
        },
        "factsAdvanced": {
            "hu": [
                "A város neve szó szerint 'kilenc templomot' vagy 'új templomot' jelent, utalva a középkori fatemplom helyére épült kőtemplomra.",
                "Neunkirchen főtere mintegy 1,5 hektáros területével az egyik legnagyobb Ausztriában.",
                "A 18. században a város az állandó török veszély miatt erődített hely volt.",
                "A helyi városi múzeum részletesen bemutatja a régió gazdag textilipari múltját.",
                "Az 1850-es években épült Déli Vasútvonal (Südbahn) döntő szerepet játszott a város iparosodásában.",
                "A neunkircheni plébániatemplom gótikus eredetű, de barokk stílusban építették újjá egy nagy tűzvész után.",
                "A város melletti Schwarza folyó egykor számos gyárat és fűrésztelepet látott el energiával.",
                "Neunkirchen fontos regionális közlekedési csomópont, ahol az S6-os autóút és a B17-es főút találkozik."
            ]
        }
    },
    "at-hollabrunn": {
        "descriptionAdvanced": {
            "hu": "Hollabrunn, az alsó-ausztriai Weinviertel szívében fekvő járási székhely, nevét először 1135-ben említették írásban. A város történelmének egyik legfontosabb eseménye az 1805-ös hollabrunni csata volt, ahol Napóleon seregei és az orosz-osztrák szövetségesek csaptak össze; ez az esemény Lev Tolsztoj 'Háború és béke' című regényében is helyet kapott. Ma Hollabrunn elsősorban mint 'iskolaváros' ismert, mivel lakosságához képest rendkívül sok közép- és felsőfokú oktatási intézménnyel rendelkezik. A város környéke a bortermelés fellegvára, ahol a jellegzetes Weinviertel DAC borok készülnek. A látogatókat hangulatos pincefalvak és kiterjedt kerékpárutak várják."
        },
        "factsAdvanced": {
            "hu": [
                "A város neve a 'Hollunder' (bodza) és a 'Brunnen' (kút) szavakból ered.",
                "A hollabrunni csata emlékére Párizsban utcát neveztek el a városról (Rue de Hollebrun).",
                "A város főterén álló Mária-oszlopot az 1683-as pestisjárvány után hálából emelték.",
                "Hollabrunn Ausztria egyik legrégebbi gimnáziumával büszkélkedhet, amelyet 1865-ben alapítottak.",
                "Az 'Alte Hofmühle' múzeum egy gyönyörűen felújított reneszánsz malomépületben mutatja be a régió történelmét.",
                "A város környéki erdőkben számos túraútvonal és egy erdei tanösvény is található.",
                "A település fontos megállója a Bécsből északra, Csehország felé tartó vasútvonalnak.",
                "Minden évben megrendezik a tökfesztivált, amely a régió egyik legnépszerűbb őszi eseménye."
            ]
        }
    },
    "at-zwettl-niederoesterreich": {
        "descriptionAdvanced": {
            "hu": "Zwettl városa a Waldviertel régió spirituális és gazdasági központja, amely a Kamp folyók összefolyásánál fekszik. A település neve szláv eredetű, és 'irtást' jelent, utalva az egykori sűrű erdőségekre. A város legfőbb vonzereje a tőle néhány kilométerre található Zwettli Apátság, amelyet 1138-ban alapítottak, és amely a ciszterci építészet egyik legszebb példája Ausztriában. Zwettl azonban nemcsak a hitről, hanem a sörről is híres: a Zwettler sörfőzde több mint 300 éves múltra tekint vissza. Az óvárosban sétálva felfedezhetjük a jó állapotban fennmaradt városfalakat és a különleges 'Hundertwasser-szökőkutat' a főtéren."
        },
        "factsAdvanced": {
            "hu": [
                "A Zwettli Apátság Ausztria második legrégebbi ciszterci kolostora.",
                "A város főterén álló szökőkutat Friedensreich Hundertwasser tervezte 1994-ben.",
                "Zwettl a Waldviertel 'mák-régiójának' szélén fekszik, ahol a híres szürkemákot termesztik.",
                "A zwettli sörfőzde Ausztria egyik utolsó nagy családi tulajdonban lévő sörgyára.",
                "A középkori városfalak hat toronnyal ma is szinte teljesen körbeveszik az óvárost.",
                "A 'Propstei' negyedben található a város legrégebbi lakóháza a 13. századból.",
                "Minden évben megrendezik a 'Zwettler Brauhausfest'-et, a sörfőzés ünnepi eseményét.",
                "A Kamp folyó mentén vezető túraútvonalak érintik a várost."
            ]
        }
    },
    "at-bischofshofen": {
        "descriptionAdvanced": {
            "hu": "Bischofshofen a salzburgi Pongau régió egyik legfontosabb városa, amely látványos alpesi környezetben, a Salzach folyó völgyében fekszik. A város neve szorosan összefonódott a síugrással, hiszen itt található a Paul-Ausserleitner-sánc, amely a legendás Négysáncverseny döntőjének helyszíne minden év januárjában. A település történelme azonban jóval messzebbre nyúlik vissza: már az 5. században fontos vallási központ volt. A város szívében álló gótikus Szent Miksa-plébániatemplom és a mellette lévő Szent Anna-kápolna a középkori építészet remekei. Bischofshofen ma fontos közlekedési csomópont és ipari központ, de kiváló kiindulópont a környező hegyek, például a Hochkönig felfedezéséhez is."
        },
        "factsAdvanced": {
            "hu": [
                "A Négysáncverseny záróversenyét 1953 óta minden évben vízkereszt napján tartják itt.",
                "A Paul-Ausserleitner-sánc az egyik legnagyobb természetes sánc a világon.",
                "A városban őrzik a 8. századi Szent Rupert-keresztet, amely a keresztény művészet egyik legértékesebb emléke.",
                "Bischofshofen fontos vasúti csomópont, ahol a salzburgi és a karintiai vonalak találkoznak.",
                "A környező hegyekben található a világ egyik legnagyobb jégbarlangja, az Eisriesenwelt közelsége vonzza a túrázókat.",
                "A település rézbányászata a bronzkorig nyúlik vissza, amiről a helyi bányamúzeum mesél.",
                "A város neve a salzburgi püspökhöz ('Bischof') kötődik, akinek itt volt az egyik birtoka.",
                "A Geopark Erz der Alpen interaktív módon mutatja be a régió geológiai kincseit."
            ]
        }
    }
}

for poi_id, data in updates.items():
    # Find the POI block
    # Matches: id: "poi_id", ... facts: { ... },
    pattern = r'(id:\s*\"' + re.escape(poi_id) + r'\"[\s\S]*?facts:\s*\{[\s\S]*?\n\s*\},)'
    match = re.search(pattern, content)
    if match:
        block = match.group(1)
        
        desc_hu = data['descriptionAdvanced']['hu'].replace('"', '\\"')
        facts_hu_list = ",\n        ".join(f'"{f.replace('"', '\\"')}"' for f in data['factsAdvanced']['hu'])
        
        injection = f"""\n    descriptionAdvanced: {{
      de: "",
      hu: "{desc_hu}",
      ro: "",
      en: ""
    }},
    factsAdvanced: {{
      de: [],
      hu: [
        {facts_hu_list}
      ],
      ro: [],
      en: []
    }},"""
        
        new_block = block + injection
        content = content.replace(block, new_block)
    else:
        print(f"POI {poi_id} not found")

with open(file_path, 'wb') as f:
    f.write(content.encode('utf-8'))

print("Success")
