#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
cd /mnt/c/Users/User/plizio-repo
PROMPT=$(cat /mnt/c/Users/User/prompt_hu_poi_expand.txt)
exec /usr/local/bin/gemini --yolo -m gemini-3-flash-preview -p "$PROMPT"
