from pathlib import Path
import json,subprocess,time
p=Path('/var/lib/plizio-media-offload')
def read(name):
 f=p/name
 return json.loads(f.read_text())if f.exists()else None
r=subprocess.run(['systemctl','show','plizio-r2-initial-copy.service','-p','ActiveState','-p','SubState','-p','ExecMainStatus'],capture_output=True,text=True)
service=dict(line.split('=',1)for line in r.stdout.splitlines()if'='in line)
logs=list((p/'initial').glob('*.log'));activity=max((f.stat().st_mtime for f in logs),default=time.time())
print(json.dumps({'status':read('status.json'),'initialComplete':read('initial/complete.json'),'routing':read('routing-verified.json'),'buildCompatibility':read('build-compatibility.json'),'service':service,'secondsWithoutLogActivity':time.time()-activity}))
