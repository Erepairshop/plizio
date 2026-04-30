import json

cities = [
    {"id": "asuncion-cities-v2", "type": "state-capital", "parent": "PY-AS", "lon": -57.6359, "lat": -25.2865, "name": "Asunción"},
    {"id": "concepcion-cities-v2", "type": "state-capital", "parent": "PY-1", "lon": -57.4323, "lat": -23.4082, "name": "Concepción"},
    {"id": "san-pedro-ycuamandiyu-cities-v2", "type": "state-capital", "parent": "PY-2", "lon": -57.0764, "lat": -24.0917, "name": "San Pedro de Ycuamandiyú"},
    {"id": "caacupe-cities-v2", "type": "state-capital", "parent": "PY-3", "lon": -57.1422, "lat": -25.3858, "name": "Caacupé"},
    {"id": "villarrica-cities-v2", "type": "state-capital", "parent": "PY-4", "lon": -56.4387, "lat": -25.7486, "name": "Villarrica"},
    {"id": "coronel-oviedo-cities-v2", "type": "state-capital", "parent": "PY-5", "lon": -56.4403, "lat": -25.4444, "name": "Coronel Oviedo"},
    {"id": "caazapa-cities-v2", "type": "state-capital", "parent": "PY-6", "lon": -56.3686, "lat": -26.1800, "name": "Caazapá"},
    {"id": "encarnacion-cities-v2", "type": "state-capital", "parent": "PY-7", "lon": -55.8666, "lat": -27.3306, "name": "Encarnación"},
    {"id": "san-juan-bautista-cities-v2", "type": "state-capital", "parent": "PY-8", "lon": -57.1458, "lat": -26.6694, "name": "San Juan Bautista"},
    {"id": "paraguari-cities-v2", "type": "state-capital", "parent": "PY-9", "lon": -57.1472, "lat": -25.6208, "name": "Paraguarí"},
    {"id": "ciudad-del-este-cities-v2", "type": "state-capital", "parent": "PY-10", "lon": -54.6111, "lat": -25.5097, "name": "Ciudad del Este"},
    {"id": "aregua-cities-v2", "type": "state-capital", "parent": "PY-11", "lon": -57.3847, "lat": -25.3125, "name": "Areguá"},
    {"id": "pilar-cities-v2", "type": "state-capital", "parent": "PY-12", "lon": -58.3044, "lat": -26.8672, "name": "Pilar"},
    {"id": "pedro-juan-caballero-cities-v2", "type": "state-capital", "parent": "PY-13", "lon": -55.7333, "lat": -22.5472, "name": "Pedro Juan Caballero"},
    {"id": "salto-del-guaira-cities-v2", "type": "state-capital", "parent": "PY-14", "lon": -54.3069, "lat": -24.0625, "name": "Salto del Guairá"},
    {"id": "villa-hayes-cities-v2", "type": "state-capital", "parent": "PY-15", "lon": -57.5236, "lat": -25.0931, "name": "Villa Hayes"},
    {"id": "fuerte-olimpo-cities-v2", "type": "state-capital", "parent": "PY-16", "lon": -57.8736, "lat": -21.0361, "name": "Fuerte Olimpo"},
    {"id": "filadelfia-cities-v2", "type": "state-capital", "parent": "PY-17", "lon": -60.0333, "lat": -22.3333, "name": "Filadelfia"},
    
    {"id": "san-lorenzo-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5083, "lat": -25.3397, "name": "San Lorenzo"},
    {"id": "luque-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.4872, "lat": -25.2725, "name": "Luque"},
    {"id": "capiata-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.4167, "lat": -25.3500, "name": "Capiatá"},
    {"id": "lambare-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.6083, "lat": -25.3408, "name": "Lambaré"},
    {"id": "fernando-de-la-mora-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5458, "lat": -25.3217, "name": "Fernando de la Mora"},
    {"id": "limpio-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.4856, "lat": -25.1706, "name": "Limpio"},
    {"id": "nemby-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5333, "lat": -25.3956, "name": "Ñemby"},
    {"id": "itaugua-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.3333, "lat": -25.3833, "name": "Itauguá"},
    {"id": "mariano-roque-alonso-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5333, "lat": -25.2167, "name": "Mariano Roque Alonso"},
    {"id": "villa-elisa-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5833, "lat": -25.3667, "name": "Villa Elisa"},
    {"id": "san-antonio-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5500, "lat": -25.4167, "name": "San Antonio"},
    {"id": "ypane-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5333, "lat": -25.4500, "name": "Ypané"},
    {"id": "villeta-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.5667, "lat": -25.5000, "name": "Villeta"},
    {"id": "guarambare-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.4500, "lat": -25.4833, "name": "Guarambaré"},
    {"id": "ypacarai-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.2833, "lat": -25.4000, "name": "Ypacaraí"},
    {"id": "j-augusto-saldivar-cities-v2", "type": "city", "parent": "PY-11", "lon": -57.4000, "lat": -25.4333, "name": "J. Augusto Saldívar"},
    
    {"id": "presidente-franco-cities-v2", "type": "city", "parent": "PY-10", "lon": -54.6167, "lat": -25.5500, "name": "Presidente Franco"},
    {"id": "minga-guazu-cities-v2", "type": "city", "parent": "PY-10", "lon": -54.7667, "lat": -25.4667, "name": "Minga Guazú"},
    {"id": "hernandarias-cities-v2", "type": "city", "parent": "PY-10", "lon": -54.6333, "lat": -25.4000, "name": "Hernandarias"},
    {"id": "santa-rita-cities-v2", "type": "city", "parent": "PY-10", "lon": -55.0667, "lat": -25.7833, "name": "Santa Rita"},
    {"id": "san-alberto-cities-v2", "type": "city", "parent": "PY-10", "lon": -54.9000, "lat": -24.9667, "name": "San Alberto"},
    {"id": "doctor-juan-leon-mallorquin-cities-v2", "type": "city", "parent": "PY-10", "lon": -55.2333, "lat": -25.4000, "name": "Doctor Juan León Mallorquín"},
    
    {"id": "cambyreta-cities-v2", "type": "city", "parent": "PY-7", "lon": -55.8333, "lat": -27.3000, "name": "Cambyretá"},
    {"id": "coronel-bogado-cities-v2", "type": "city", "parent": "PY-7", "lon": -56.2333, "lat": -27.1667, "name": "Coronel Bogado"},
    {"id": "san-pedro-del-parana-cities-v2", "type": "city", "parent": "PY-7", "lon": -56.2000, "lat": -26.8333, "name": "San Pedro del Paraná"},
    {"id": "tomas-romero-pereira-cities-v2", "type": "city", "parent": "PY-7", "lon": -55.2333, "lat": -26.5833, "name": "Tomás Romero Pereira"},
    {"id": "hohenau-cities-v2", "type": "city", "parent": "PY-7", "lon": -55.6500, "lat": -27.0833, "name": "Hohenau"},
    {"id": "capitan-miranda-cities-v2", "type": "city", "parent": "PY-7", "lon": -55.8000, "lat": -27.2000, "name": "Capitán Miranda"},
    {"id": "obligado-cities-v2", "type": "city", "parent": "PY-7", "lon": -55.6333, "lat": -27.0500, "name": "Obligado"},
    {"id": "bella-vista-cities-v2", "type": "city", "parent": "PY-7", "lon": -55.5667, "lat": -27.0333, "name": "Bella Vista"},
    
    {"id": "caaguazu-cities-v2", "type": "city", "parent": "PY-5", "lon": -56.0167, "lat": -25.4500, "name": "Caaguazú"},
    {"id": "j-eulogio-estigarribia-cities-v2", "type": "city", "parent": "PY-5", "lon": -55.6500, "lat": -25.3833, "name": "J. Eulogio Estigarribia"},
    {"id": "repatriacion-cities-v2", "type": "city", "parent": "PY-5", "lon": -55.9500, "lat": -25.5333, "name": "Repatriación"},
    {"id": "san-jose-de-los-arroyos-cities-v2", "type": "city", "parent": "PY-5", "lon": -56.7000, "lat": -25.5333, "name": "San José de los Arroyos"},
    
    {"id": "san-estanislao-cities-v2", "type": "city", "parent": "PY-2", "lon": -56.4333, "lat": -24.6667, "name": "San Estanislao"},
    {"id": "capiibary-cities-v2", "type": "city", "parent": "PY-2", "lon": -56.0333, "lat": -24.8000, "name": "Capiibary"},
    {"id": "chore-cities-v2", "type": "city", "parent": "PY-2", "lon": -56.5833, "lat": -24.1833, "name": "Choré"},
    {"id": "santa-rosa-del-aguaray-cities-v2", "type": "city", "parent": "PY-2", "lon": -56.5000, "lat": -23.8333, "name": "Santa Rosa del Aguaray"},
    
    {"id": "horqueta-cities-v2", "type": "city", "parent": "PY-1", "lon": -57.0500, "lat": -23.3333, "name": "Horqueta"},
    {"id": "yby-yau-cities-v2", "type": "city", "parent": "PY-1", "lon": -56.0000, "lat": -22.9667, "name": "Yby Yaú"},
    {"id": "vallemi-cities-v2", "type": "city", "parent": "PY-1", "lon": -57.9667, "lat": -22.1667, "name": "Vallemí"},
    
    {"id": "capitan-bado-cities-v2", "type": "city", "parent": "PY-13", "lon": -55.5333, "lat": -23.2667, "name": "Capitán Bado"},
    {"id": "bella-vista-norte-cities-v2", "type": "city", "parent": "PY-13", "lon": -56.5167, "lat": -22.1333, "name": "Bella Vista Norte"},
    
    {"id": "curuguaty-cities-v2", "type": "city", "parent": "PY-14", "lon": -55.7000, "lat": -24.4667, "name": "Curuguaty"},
    {"id": "katuete-cities-v2", "type": "city", "parent": "PY-14", "lon": -54.7667, "lat": -24.2333, "name": "Katueté"},
    {"id": "la-paloma-cities-v2", "type": "city", "parent": "PY-14", "lon": -54.6167, "lat": -24.1333, "name": "La Paloma"},
    
    {"id": "eusebio-ayala-cities-v2", "type": "city", "parent": "PY-3", "lon": -56.9667, "lat": -25.3833, "name": "Eusebio Ayala"},
    {"id": "piribebuy-cities-v2", "type": "city", "parent": "PY-3", "lon": -57.0500, "lat": -25.4667, "name": "Piribebuy"},
    {"id": "tobati-cities-v2", "type": "city", "parent": "PY-3", "lon": -57.0667, "lat": -25.2667, "name": "Tobatí"},
    {"id": "altos-cities-v2", "type": "city", "parent": "PY-3", "lon": -57.2500, "lat": -25.2667, "name": "Altos"},
    
    {"id": "independencia-cities-v2", "type": "city", "parent": "PY-4", "lon": -56.2667, "lat": -25.7000, "name": "Independencia"},
    
    {"id": "carapegua-cities-v2", "type": "city", "parent": "PY-9", "lon": -57.2333, "lat": -25.8000, "name": "Carapeguá"},
    {"id": "yaguaron-cities-v2", "type": "city", "parent": "PY-9", "lon": -57.2833, "lat": -25.5500, "name": "Yaguarón"},
    {"id": "quiindy-cities-v2", "type": "city", "parent": "PY-9", "lon": -57.2167, "lat": -25.9667, "name": "Quiindy"},
    {"id": "ybycui-cities-v2", "type": "city", "parent": "PY-9", "lon": -57.0500, "lat": -26.0167, "name": "Ybycuí"},
    
    {"id": "san-ignacio-guazu-cities-v2", "type": "city", "parent": "PY-8", "lon": -57.0333, "lat": -26.8667, "name": "San Ignacio Guazú"},
    {"id": "ayolas-cities-v2", "type": "city", "parent": "PY-8", "lon": -56.8167, "lat": -27.4000, "name": "Ayolas"},
    
    {"id": "benjamin-aceval-cities-v2", "type": "city", "parent": "PY-15", "lon": -57.5667, "lat": -24.9667, "name": "Benjamín Aceval"},
    {"id": "loma-plata-cities-v2", "type": "city", "parent": "PY-17", "lon": -59.8333, "lat": -22.3833, "name": "Loma Plata"},
    {"id": "mariscal-estigarribia-cities-v2", "type": "city", "parent": "PY-17", "lon": -60.6333, "lat": -22.0333, "name": "Mariscal Estigarribia"}
]

import urllib.request
import json
import os

# To avoid API calls that might fail, I'll generate the properties using LLM but I'll write the script that formats it.
# Wait, let me just print the data to a json file, and then process it.

print(len(cities))
