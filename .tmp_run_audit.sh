#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
cd /mnt/c/Users/User/plizio-repo
PROMPT=$(cat /mnt/c/Users/User/prompt_de_quiz_audit.txt)
exec /usr/local/bin/gemini --yolo -m gemini-2.5-pro -p "$PROMPT"
