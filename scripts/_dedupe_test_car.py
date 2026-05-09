import sys
sys.path.insert(0, r'C:/Users/User/plizio-repo/scripts')
from _dedupe_poi_advanced import process_file
target = r'C:/Users/User/plizio-repo/lib/visualLab/data/poiExtraCentralafricanrepublicCitiesV2.ts'
print(process_file(target))
