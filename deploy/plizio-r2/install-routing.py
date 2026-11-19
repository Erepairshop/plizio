from pathlib import Path
import subprocess,json,re,hashlib,time,urllib.request,urllib.error
state=Path('/var/lib/plizio-media-offload');pilot=json.loads((state/'gateway-pilot.json').read_text());assert pilot['verified']
p=Path('/etc/nginx/sites-enabled/plizio.conf');old=p.read_bytes();text=old.decode();assert'location @plizio_r2_media'not in text
start=text.index('    location ^~ /poi-images/ {');end=text.index('\n    }',start)+6
block=text[start:end];assert block.count('try_files $uri =404;')==1
block=block.replace('try_files $uri =404;','try_files $uri @plizio_r2_media;')
extra='''
    # Local first; direct R2 lookup avoids cold directory-listing stalls.
    location ^~ /sight-images/ {
        root /home/erik/plizio/shared;
        access_log off;
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri @plizio_r2_media;
    }
    location @plizio_r2_media {
        proxy_pass http://127.0.0.1:8691;
        proxy_set_header Host $host;
        proxy_connect_timeout 3s;
        proxy_read_timeout 30s;
        proxy_buffering on;
    }
'''
new=(text[:start]+block+extra+text[end:]).encode();backup=state/'plizio.conf.before-r2'
if backup.exists():assert backup.read_bytes()==old,'Prior backup differs; inspect concurrent config'
else:backup.write_bytes(old)
samples=[]
for sample in pilot['samples']:
 key=sample['family']+'/owner-r2-route-probe-20261119.webp'
 subprocess.run(['rclone','copyto',sample['path'],'r2:plizio-media-prod/'+key,'--config','/etc/erepairshop-media-offload/rclone.conf','--bwlimit','2M','--retries','1'],check=True,timeout=60)
 samples.append({**sample,'probeKey':key})
try:
 assert p.read_bytes()==old,'Concurrent nginx edit';tmp=p.with_name(p.name+'.r2-new');tmp.write_bytes(new);tmp.replace(p)
 subprocess.run(['nginx','-t'],check=True,capture_output=True)
 subprocess.run(['systemctl','reload','nginx'],check=True,timeout=25)
 # Graceful reload returns before new workers necessarily accept requests.
 time.sleep(2)
 results=[]
 for sample in samples:
  proof={}
  for origin in [True,False]:
   url=('http://127.0.0.1/'if origin else'https://plizio.com/')+sample['probeKey'];headers={'Host':'plizio.com','User-Agent':'Mozilla/5.0'}
   started=time.monotonic()
   print(json.dumps({'testing':url,'origin':origin}),flush=True)
   with urllib.request.urlopen(urllib.request.Request(url,headers=headers),timeout=30)as r:
    raw=r.read();assert r.status==200;assert hashlib.sha256(raw).hexdigest()==sample['sha256']
    if origin:assert r.headers['X-Plizio-Media-Source']=='r2'
    proof['origin'if origin else'public']={'status':r.status,'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),'seconds':round(time.monotonic()-started,3),'source':r.headers.get('X-Plizio-Media-Source')}
  results.append({'family':sample['family'],**proof})
 with urllib.request.urlopen(urllib.request.Request('http://127.0.0.1/',headers={'Host':'plizio.com','User-Agent':'Mozilla/5.0'}),timeout=20)as r:assert r.status==200
 result={'verifiedAt':time.time(),'urlPreserved':True,'nginxBackup':str(backup),'samples':results,'localImagesDeleted':0}
 (state/'routing-verified.json').write_text(json.dumps(result,indent=2));print(json.dumps(result))
except Exception:
 p.write_bytes(old);subprocess.run(['nginx','-t'],check=True,capture_output=True);subprocess.run(['systemctl','reload','nginx'],check=True);raise
finally:
 for sample in samples:subprocess.run(['rclone','deletefile','r2:plizio-media-prod/'+sample['probeKey'],'--config','/etc/erepairshop-media-offload/rclone.conf','--retries','1'],capture_output=True,timeout=40)
