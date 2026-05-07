# -*- coding: utf-8 -*-
"""
Pot-feldolgozas: a fill_mozambique_seo.py altal beirt roman es magyar/nemet
sablon-frazisokba visszailleszti a hianyzo diakritikus jeleket. Csak a sajat
sablonmondatokban definialt karakterlanc-cserek, igy nem rontjuk a meglevo,
mar helyes ekezetes szovegeket.
"""

from __future__ import annotations
import os
import re

REPO = r"C:/Users/User/plizio-repo"
DATA_DIR = os.path.join(REPO, "lib", "visualLab", "data")

FILES = [
    "poiExtraMozambiqueCitiesV2.ts",
    "poiExtraMozambiqueEconomicV2.ts",
    "poiExtraMozambiqueHistoryV2.ts",
    "poiExtraMozambiqueLandmarksV2.ts",
    "poiExtraMozambiqueLifeV2.ts",
    "poiExtraMozambiqueNatureV2.ts",
    "poiExtraMozambiqueReliefV2.ts",
]

# Csak ekezet nelkuli sablon-frazisok -> helyes ekezetes valtozat.
REPLACEMENTS = [
    # RO sablon-frazisok
    ("este un element remarcabil al geografiei si culturii mozambicane",
     "este un element remarcabil al geografiei și culturii mozambicane"),
    ("Asemenea multor locuri importante din Mozambic, acesta imbina particularitatile regionale cu o semnificatie mai larga",
     "Asemenea multor locuri importante din Mozambic, acesta îmbină particularitățile regionale cu o semnificație mai largă"),
    ("Astfel, acest loc contribuie la profilul variat al Mozambicului",
     "Astfel, acest loc contribuie la profilul variat al Mozambicului"),  # mar OK
    # RO topic-text
    ("Acest oras se numara printre asezarile caracteristice ale Mozambicului",
     "Acest oraș se numără printre așezările caracteristice ale Mozambicului"),
    ("Acest loc joaca un rol in economia Mozambicului",
     "Acest loc joacă un rol în economia Mozambicului"),
    ("Acest loc are o importanta deosebita in istoria Mozambicului",
     "Acest loc are o importanță deosebită în istoria Mozambicului"),
    ("Acest reper face parte din patrimoniul cultural al Mozambicului",
     "Acest reper face parte din patrimoniul cultural al Mozambicului"),
    ("Aceasta arie protejata face parte din bogata fauna si flora a Mozambicului",
     "Această arie protejată face parte din bogata faună și floră a Mozambicului"),
    ("Aceasta zona naturala reflecta diversitatea peisajului Mozambicului",
     "Această zonă naturală reflectă diversitatea peisajului Mozambicului"),
    ("Aceasta forma de relief modeleaza topografia Mozambicului",
     "Această formă de relief modelează topografia Mozambicului"),
    # RO generikus tenyek
    ("Se afla pe teritoriul Republicii Mozambic",
     "Se află pe teritoriul Republicii Mozambic"),
    ("Are un rol in identitatea locala a regiunii",
     "Are un rol în identitatea locală a regiunii"),
    ("Este cunoscut pentru semnificatia sa peisagistica sau culturala",
     "Este cunoscut pentru semnificația sa peisagistică sau culturală"),
    ("Este documentat in studii locale si regionale",
     "Este documentat în studii locale și regionale"),
    ("Se afla sub influenta climatului din sud-estul Africii",
     "Se află sub influența climatului din sud-estul Africii"),
    ("Este intretinut de autoritati si comunitati locale",
     "Este întreținut de autorități și comunități locale"),
    ("Este legat de viata cotidiana si de istoria regiunii",
     "Este legat de viața cotidiană și de istoria regiunii"),
    ("Face parte din patrimoniul cultural si natural al tarii",
     "Face parte din patrimoniul cultural și natural al țării"),
    # HU sablon-frazisok
    ("a mozambiki foldrajz es kultura figyelemre melto eleme",
     "a mozambiki földrajz és kultúra figyelemre méltó eleme"),
    ("Mozambik szamos jelentos helyszinehez hasonloan ez is otvozi a regionalis sajatossagokat es az altalanos jelentoseget",
     "Mozambik számos jelentős helyszínéhez hasonlóan ez is ötvözi a regionális sajátosságokat és az általános jelentőséget"),
    ("Ezzel a helyszin hozzajarul Mozambik sokszinu arculatahoz",
     "Ezzel a helyszín hozzájárul Mozambik sokszínű arculatához"),
    # HU topic-text
    ("Ez a varos Mozambik jellegzetes telepulesei koze tartozik",
     "Ez a város Mozambik jellegzetes települései közé tartozik"),
    ("Ez a helyszin szerepet jatszik Mozambik gazdasagaban",
     "Ez a helyszín szerepet játszik Mozambik gazdaságában"),
    ("Ennek a helyszinnek kulonleges jelentosege van Mozambik tortenelmeben",
     "Ennek a helyszínnek különleges jelentősége van Mozambik történelmében"),
    ("Ez a nevezetesseg Mozambik kulturalis orokseg eresze",
     "Ez a nevezetesség Mozambik kulturális örökségének része"),
    ("Ez a vedett terulet Mozambik gazdag elovilaganak resze",
     "Ez a védett terület Mozambik gazdag élővilágának része"),
    ("Ez a termeszeti terulet Mozambik tajai sokszinuseget mutatja",
     "Ez a természeti terület Mozambik tájai sokszínűségét mutatja"),
    ("Ez a domborzati elem Mozambik felszinet alakitja",
     "Ez a domborzati elem Mozambik felszínét alakítja"),
    # HU generikus tenyek
    ("A Mozambiki Koztarsasag teruleten talalhato",
     "A Mozambiki Köztársaság területén található"),
    ("Szerepet jatszik a regio helyi identitasaban",
     "Szerepet játszik a régió helyi identitásában"),
    ("Tajkepi vagy kulturalis jelentosegerol ismert",
     "Tájképi vagy kulturális jelentőségéről ismert"),
    ("Helyi es regionalis tanulmanyok dokumentaljak",
     "Helyi és regionális tanulmányok dokumentálják"),
    ("A delkelet-afrikai eghajlat hatasai ala esik",
     "A délkelet-afrikai éghajlat hatásai alá esik"),
    ("Helyi onkormanyzatok es kozossegek gondoskodnak rola",
     "Helyi önkormányzatok és közösségek gondoskodnak róla"),
    ("Kapcsolodik a regio mindennapjaihoz es tortenelmehez",
     "Kapcsolódik a régió mindennapjaihoz és történelméhez"),
    ("Az orszag kulturalis es termeszeti orokseg eresze",
     "Az ország kulturális és természeti örökségének része"),
    # DE sablon-frazisok (umlaut)
    ("ist ein bemerkenswertes Element der mosambikanischen Geografie und Kultur",
     "ist ein bemerkenswertes Element der mosambikanischen Geografie und Kultur"),  # OK, nem kell
    ("Wie viele bedeutende Orte in Mosambik vereint dieser Ort regionale Eigenheiten und uebergreifende Bedeutung",
     "Wie viele bedeutende Orte in Mosambik vereint dieser Ort regionale Eigenheiten und übergreifende Bedeutung"),
    ("Damit traegt dieser Ort zum vielseitigen Profil Mosambiks bei",
     "Damit trägt dieser Ort zum vielseitigen Profil Mosambiks bei"),
    # DE topic-text
    ("Diese Stadt zaehlt zu den charakteristischen Siedlungen Mosambiks",
     "Diese Stadt zählt zu den charakteristischen Siedlungen Mosambiks"),
    ("Dieser Standort spielt eine Rolle in der Wirtschaft Mosambiks",
     "Dieser Standort spielt eine Rolle in der Wirtschaft Mosambiks"),  # OK
    ("Dieser Ort hat eine besondere Bedeutung in der Geschichte Mosambiks",
     "Dieser Ort hat eine besondere Bedeutung in der Geschichte Mosambiks"),  # OK
    ("Dieses Wahrzeichen ist Teil des kulturellen Erbes Mosambiks",
     "Dieses Wahrzeichen ist Teil des kulturellen Erbes Mosambiks"),  # OK
    ("Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Mosambiks",
     "Dieses Schutzgebiet ist Teil der reichen Tier- und Pflanzenwelt Mosambiks"),  # OK
    ("Dieses Naturgebiet zeigt die landschaftliche Vielfalt Mosambiks",
     "Dieses Naturgebiet zeigt die landschaftliche Vielfalt Mosambiks"),  # OK
    ("Diese Gelaendeform praegt die Topografie Mosambiks",
     "Diese Geländeform prägt die Topografie Mosambiks"),
    # DE generikus tenyek
    ("Spielt eine Rolle in der lokalen Identitaet der Region",
     "Spielt eine Rolle in der lokalen Identität der Region"),
    ("Bekannt fuer seine landschaftliche oder kulturelle Bedeutung",
     "Bekannt für seine landschaftliche oder kulturelle Bedeutung"),
    ("Wird in lokalen und regionalen Studien dokumentiert",
     "Wird in lokalen und regionalen Studien dokumentiert"),  # OK
    ("Faellt unter den Einfluss des suedostafrikanischen Klimas",
     "Fällt unter den Einfluss des südostafrikanischen Klimas"),
    ("Wird durch lokale Behoerden und Gemeinschaften betreut",
     "Wird durch lokale Behörden und Gemeinschaften betreut"),
]


def main():
    total_changes = 0
    for fname in FILES:
        path = os.path.join(DATA_DIR, fname)
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        before = content
        for old, new in REPLACEMENTS:
            if old == new:
                continue
            content = content.replace(old, new)
        if content != before:
            n = sum(1 for old, new in REPLACEMENTS if old != new and old in before)
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"{fname}: ~{n} sablon-frazis javitva")
            total_changes += n
    print(f"\nOSSZESEN ~{total_changes} csere")


if __name__ == "__main__":
    main()
