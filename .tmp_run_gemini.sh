#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin:$PATH
cd /mnt/c/Users/User/plizio-repo
PROMPT=$(cat /home/user/gemini_de_quiz/prompt.txt)
exec /usr/local/bin/gemini --yolo -m gemini-3.1-pro-preview -p "$PROMPT"
