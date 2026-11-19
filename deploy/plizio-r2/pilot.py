from pathlib import Path
import subprocess,urllib.request,urllib.error,urllib.parse,hashlib,json,time
out=[]
for family in ['poi-images','sight-images']:
 p=next((Path('/home/erik/plizio/shared')/family).glob('*.webp'))
 key=family+'/'+p.name
 subprocess.run(['rclone','copyto',str(p),'r2:plizio-media-prod/'+key,'--config','/etc/erepairshop-media-offload/rclone.conf','--bwlimit','2M','--ignore-existing','--retries','1'],check=True,timeout=90)
 started=time.monotonic()
 with urllib.request.urlopen('http://127.0.0.1:8691/'+urllib.parse.quote(key),timeout=30)as r:
  raw=r.read();headers=dict(r.headers);assert r.status==200 and r.headers['X-Plizio-Media-Source']=='r2'
 sha=hashlib.sha256(p.read_bytes()).hexdigest();assert hashlib.sha256(raw).hexdigest()==sha
 assert headers.get('Content-Type','').startswith('image/')
 out.append({'family':family,'path':str(p),'url':'/'+key,'sha256':sha,'bytes':len(raw),'gatewaySeconds':round(time.monotonic()-started,3)})
 try:urllib.request.urlopen('http://127.0.0.1:8691/'+family+'/missing-object-owner-test-20261119.webp',timeout=30);raise AssertionError('Missing image must be 404')
 except urllib.error.HTTPError as e:assert e.code==404
Path('/var/lib/plizio-media-offload/gateway-pilot.json').write_text(json.dumps({'at':time.time(),'verified':True,'samples':out},indent=2))
print(json.dumps(out))
