"""Patch existence checks only; never import or publish the credentialed fetcher."""
from pathlib import Path
import ast,hashlib,os,stat,json,time,types,sys
p=Path('/home/erik/_fetch_images_allsource.py');raw=p.read_bytes();text=raw.decode()
assert text.count('        if os.path.exists(dest) and not OVERWRITE:')==1
assert text.count('def main():')==1 and'def _plizio_media_exists('not in text
helper='''def _plizio_media_exists(dest):
    if os.path.exists(dest):
        return True
    prefix = "/home/erik/plizio/shared/"
    absolute = os.path.abspath(dest)
    if not absolute.startswith(prefix):
        return False
    relative = absolute[len(prefix):].split("/", 1)
    if len(relative) != 2 or relative[0] not in ("poi-images", "sight-images"):
        return False
    try:
        import sys
        if "/opt/plizio-media-offload" not in sys.path:
            sys.path.insert(0, "/opt/plizio-media-offload")
        from availability import available
        return available(relative[0], relative[1])
    except Exception as exc:
        raise RuntimeError("R2 catalogue unavailable; refusing bulk refetch") from exc

'''
new=text.replace('def main():',helper+'def main():').replace('        if os.path.exists(dest) and not OVERWRITE:','        if _plizio_media_exists(dest) and not OVERWRITE:')
ast.parse(new)
scope={'os':os};exec(compile(helper,'<existence-check>','exec'),scope)
assert scope['_plizio_media_exists']('/tmp/definitely-not-an-image-20261119.webp')is False
old_module=sys.modules.get('availability');sys.modules['availability']=types.SimpleNamespace(available=lambda family,key:True)
try:assert scope['_plizio_media_exists']('/home/erik/plizio/shared/poi-images/owner-r2-check-not-local.webp')is True
finally:
 if old_module is None:sys.modules.pop('availability',None)
 else:sys.modules['availability']=old_module
backup=Path('/home/erik/backups/plizio-r2-fetcher-20261119');backup.mkdir(mode=0o700,exist_ok=True);os.chmod(backup,0o700)
target=backup/'fetcher.before';assert not target.exists();target.write_bytes(raw);os.chmod(target,0o600)
st=p.stat();assert p.read_bytes()==raw,'Concurrent fetcher change'
tmp=p.with_name(p.name+'.r2-new');tmp.write_text(new);os.chmod(tmp,stat.S_IMODE(st.st_mode));os.chown(tmp,st.st_uid,st.st_gid);tmp.replace(p)
proof={'at':time.time(),'source':str(p),'beforeSha256':hashlib.sha256(raw).hexdigest(),'afterSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'backup':str(target),'existenceOnly':True,'networkFetchesStarted':0,'tests':'non-public-miss and R2-only-hit passed'}
Path('/var/lib/plizio-media-offload/fetcher-r2-aware.json').write_text(json.dumps(proof,indent=2));print(json.dumps(proof))
