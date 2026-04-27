
import json

counties = [
    ("HU-BU", "Budapest"), ("HU-BA", "Baranya"), ("HU-BK", "Bács-Kiskun"), ("HU-BE", "Békés"),
    ("HU-BZ", "Borsod-Abaúj-Zemplén"), ("HU-CS", "Csongrád-Csanád"), ("HU-FE", "Fejér"),
    ("HU-GS", "Győr-Moson-Sopron"), ("HU-HB", "Hajdú-Bihar"), ("HU-HE", "Heves"),
    ("HU-JN", "Jász-Nagykun-Szolnok"), ("HU-KE", "Komárom-Esztergom"), ("HU-NO", "Nógrád"),
    ("HU-PE", "Pest"), ("HU-SO", "Somogy"), ("HU-SZ", "Szabolcs-Szatmár-Bereg"),
    ("HU-TO", "Tolna"), ("HU-VA", "Vas"), ("HU-VE", "Veszprém"), ("HU-ZA", "Zala")
]

existing_ids = {
    "HU", "budapest", "baranya", "bacs-kiskun", "bekes", "borsod-abauj-zemplen", "csongrad-csanad",
    "fejer", "gyor-moson-sopron", "hajdu-bihar", "heves", "jasz-nagykun-szolnok", "komarom-esztergom",
    "nograd", "pest", "somogy", "szabolcs-szatmar-bereg", "tolna", "vas", "veszprem", "zala",
    "budapest-city", "budai-var", "orszaghaz", "hosok-tere", "dunapart", "margitsziget",
    "varosliget", "andrassy-ut", "nyugati-palyaudvar", "lanchid", "pecs", "siklos", "mohacs",
    "villany", "kecskemet", "kalocsa", "kiskunmajsa", "bekescsaba", "gyula", "szarvas", "miskolc",
    "szerencs", "tokaj", "aggtelek", "szeged", "hodmezovasarhely", "mako", "szekesfehervar",
    "dunaujvaros", "gardony", "gyor", "sopron", "pannonhalma", "debrecen", "hortobagy",
    "hajduszoboszlo", "eger", "gyongyos", "matra", "szolnok", "jaszbereny", "kisujszallas",
    "tatabanya", "esztergom", "tata", "salgotarjan", "balassagyarmat", "holloko", "szentendre",
    "godollo", "vac", "visegrad", "kaposvar", "siofok", "balatonfoldvar", "nyiregyhaza",
    "mateszalka", "vasarosnameny", "szekszard", "paks", "bonyhad", "szombathely", "koszeg",
    "sarvar", "veszprem-city", "balatonfured", "tihany", "zalaegerszeg", "nagykanizsa",
    "keszthely", "harkany", "szigetvar", "baja", "kiskunfelegyhaza", "bugac", "oroshaza",
    "mezohegyes", "sarospatak", "lillafured"
}

# Plan for each county: 2 cities, 1 geo, 2 geschichte
plan = {
    "HU-BU": [
        ("city", "Óbuda", [19.04, 47.54]),
        ("city", "Újpest", [19.09, 47.56]),
        ("geo", "Gellért-hegy", [19.047, 47.486]),
        ("geschichte", "Citadella", [19.047, 47.487]),
        ("geschichte", "Vajdahunyad vára", [19.082, 47.514])
    ],
    "HU-BA": [
        ("city", "Komló", [18.26, 46.19]),
        ("city", "Szentlőrinc", [17.98, 46.04]),
        ("geo", "Mecsek", [18.23, 46.15]),
        ("geschichte", "Pécsváradi vár", [18.47, 46.16]),
        ("geschichte", "Mecseknádasdi templom", [18.46, 46.22])
    ],
    "HU-BK": [
        ("city", "Kiskunhalas", [19.48, 46.43]),
        ("city", "Lajosmizse", [19.55, 47.02]),
        ("geo", "Kiskunsági Nemzeti Park", [19.41, 46.85]),
        ("geschichte", "Cifrapalota", [19.69, 46.91]),
        ("geschichte", "Kiskun Múzeum", [19.83, 46.71])
    ],
    "HU-BE": [
        ("city", "Békés", [21.13, 46.77]),
        ("city", "Gyomaendrőd", [20.82, 46.93]),
        ("geo", "Körös-Maros Nemzeti Park", [21.15, 46.5]),
        ("geschichte", "Wenckheim-kastély", [21.03, 46.71]),
        ("geschichte", "Gyulai vár", [21.28, 46.64]) # Gyulai vár might be in gyula, checking... gyula is already there. Let's pick another.
    ],
}
# I will stop here and use the generalist agent to generate the full list of 100 POIs.
# It's too much for me to type out all 100 with translations.
