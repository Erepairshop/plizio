import fcntl,json,os,subprocess,sys,time,hashlib,shutil
from pathlib import Path
STATE=Path('/var/lib/plizio-media-offload');SHARED=Path('/home/erik/plizio/shared');CONFIG='/etc/erepairshop-media-offload/rclone.conf'
STATE.mkdir(parents=True,exist_ok=True)
lock=(STATE/'copy.lock').open('a')
try:fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
except BlockingIOError:sys.exit(0)
def save(p,d):
 if p.name.endswith('-catalogue.json')and p.exists():shutil.copyfile(p,p.with_name(p.name+'.previous'))
 tmp=p.with_suffix(p.suffix+'.tmp');tmp.write_text(json.dumps(d,indent=2));os.chmod(tmp,0o644);tmp.replace(p)
def status(phase,**kw):save(STATE/'status.json',{'phase':phase,'at':time.time(),'bucket':'plizio-media-prod','bandwidthLimitMiB':2,**kw})
def files(family):
 result=[];root=SHARED/family
 for base,dirs,names in os.walk(root,followlinks=False):
  dirs[:]=[d for d in dirs if not d.startswith(('_','.'))and not(Path(base)/d).is_symlink()]
  for name in names:
   p=Path(base)/name
   if p.is_symlink()or p.suffix.lower()not in ['.webp','.jpg','.jpeg','.png','.gif','.avif','.svg']:continue
   relative=p.relative_to(root).as_posix()
   if'\n'in relative or'\r'in relative:raise ValueError('Unsafe filename')
   s=p.stat();result.append({'path':relative,'size':s.st_size,'inode':s.st_ino,'mtimeNs':s.st_mtime_ns})
 return sorted(result,key=lambda r:r['path'])
def metadata(family,rows):
 out=[]
 for r in rows:
  s=(SHARED/family/r['path']).stat();out.append((r['path'],s.st_size,s.st_ino,s.st_mtime_ns))
 return out
def call(args,log):
 with log.open('ab')as out:
  p=subprocess.run(['rclone',*args,'--config',CONFIG,'--bwlimit','2M','--transfers','2','--checkers','2','--tpslimit','6','--tpslimit-burst','2','--contimeout','15s','--timeout','90s','--retries','3','--low-level-retries','5','--stats','30s','--stats-one-line','--log-level','INFO'],stdout=out,stderr=out)
 if p.returncode:raise RuntimeError('rclone failed, retained evidence: '+str(log))
try:
 initial='--initial'in sys.argv;mode='initial'if initial else'incremental';run=STATE/mode;run.mkdir(exist_ok=True)
 if initial and(run/'complete.json').exists():sys.exit(0)
 counts={}
 for family in ['poi-images','sight-images']:
  snapshot=run/(family+'-scope.json')
  if initial and snapshot.exists():rows=json.loads(snapshot.read_text())
  else:
   rows=files(family)
   if not initial:
    cat=STATE/(family+'-catalogue.json');known=json.loads(cat.read_text())['files']if cat.exists()else{}
    rows=[r for r in rows if any(known.get(r['path'],{}).get(k)!=r[k]for k in ['size','inode','mtimeNs'])]
   save(snapshot,rows)
  counts[family]=len(rows)
  listing=run/(family+'-files.txt');listing.write_text(''.join(r['path']+'\n'for r in rows));os.chmod(listing,0o644)
  if not rows:continue
  status('copying',mode=mode,family=family,files=len(rows),counts=counts)
  local=str(SHARED/family);remote='r2:plizio-media-prod/'+family
  call(['copy',local,remote,'--files-from-raw',str(listing),'--checksum','--s3-upload-cutoff','256M'],run/(family+'-copy.log'))
  before=metadata(family,rows);status('verifying',mode=mode,family=family,files=len(rows),counts=counts)
  match=run/(family+'-matched.txt')
  call(['check',local,remote,'--files-from-raw',str(listing),'--download','--one-way','--match',str(match)],run/(family+'-check.log'))
  assert metadata(family,rows)==before,'Source changed during verification; local retained'
  matched=match.read_text().splitlines();assert len(matched)==len(rows)and set(matched)==set(r['path']for r in rows),'Incomplete readback'
  verified=[{'path':r[0],'size':r[1],'inode':r[2],'mtimeNs':r[3]}for r in before]
  save(run/(family+'-verified.json'),{'family':family,'verifiedAt':time.time(),'method':'full-download-byte-comparison','files':verified})
  catalogue=STATE/(family+'-catalogue.json');old=json.loads(catalogue.read_text())if catalogue.exists()else{'version':1,'family':family,'files':{}}
  for r in verified:old['files'][r['path']]={**r,'verifiedAt':time.time()}
  old['updatedAt']=time.time();save(catalogue,old)
 status('verified-local-retained',mode=mode,counts=counts,localDeleted=0,pruneGateRequired=True)
 if initial:save(run/'complete.json',{'verifiedAt':time.time(),'counts':counts,'method':'full-download-byte-comparison','localDeleted':0})
except Exception as e:
 status('error-local-retained',error=str(e),localDeleted=0);raise
