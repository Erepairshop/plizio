import json
import os
import re

files = [
    "poiExtraSurinameCitiesV2.ts",
    "poiExtraSurinameEconomicV2.ts",
    "poiExtraSurinameHistoryV2.ts",
    "poiExtraSurinameLandmarksV2.ts",
    "poiExtraSurinameNatureV2.ts"
]

# We are skipping missing files in the original request, but we found these 5.
# The user said 7 files. Let me re-verify.
