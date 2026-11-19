"""Build the POI filename index from local files and byte-verified R2 objects.

No network calls or image downloads. Offloaded filenames must remain visible to
all HTML generators; rebuilding this index from local files alone loses them.
"""
import argparse,hashlib,json,os,tempfile
from pathlib import Path,PurePosixPath

def image_names(shared,r2_state):
    names=set()
    directory=shared/'poi-images'
    if directory.exists():
        names.update(p.name for p in directory.iterdir() if p.is_file() and p.suffix=='.webp' and p.stat().st_size>0)
    catalogue=r2_state/'poi-images-catalogue.json'
    tombstone_path=r2_state/'tombstones.json'
    removed=set(json.loads(tombstone_path.read_text()).get('keys',[])) if tombstone_path.exists() else set()
    if catalogue.exists():
        data=json.loads(catalogue.read_text())
        if data.get('version')!=1 or data.get('family')!='poi-images' or not isinstance(data.get('files'),dict):
            raise ValueError('Invalid verified R2 catalogue; existing manifest retained')
        for key,proof in data['files'].items():
            p=PurePosixPath(key)
            if p.is_absolute() or '..' in p.parts:
                raise ValueError('Unsafe R2 catalogue key')
            if len(p.parts)==1 and p.suffix=='.webp' and proof.get('verifiedAt') and proof.get('size',0)>0:
                names.add(key)
    names={name for name in names if 'poi-images/'+name not in removed}
    return sorted(names)

def refresh(shared,r2_state,output,min_count=1000):
    names=image_names(Path(shared),Path(r2_state))
    if len(names)<min_count:
        raise ValueError('Image coverage below minimum; existing manifest retained')
    output=Path(output)
    if output.exists():
        raw=output.read_bytes();backups=Path(tempfile.gettempdir())/'plizio-image-manifest-backups';backups.mkdir(exist_ok=True)
        backup=backups/(hashlib.sha256(raw).hexdigest()+'.json')
        if not backup.exists():backup.write_bytes(raw)
    output.parent.mkdir(parents=True,exist_ok=True)
    temporary=output.with_name(output.name+'.tmp')
    temporary.write_text(json.dumps(names,ensure_ascii=False)+'\n',encoding='utf8')
    os.replace(temporary,output)
    return len(names)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--shared-root',type=Path,default=Path('/home/erik/plizio/shared'))
    parser.add_argument('--r2-state',type=Path,default=Path('/var/lib/plizio-media-offload'))
    parser.add_argument('--output',type=Path,default=Path('public/data/_image-manifest.json'))
    args=parser.parse_args()
    print('image manifest rebuilt (local + verified R2):',refresh(args.shared_root,args.r2_state,args.output))
