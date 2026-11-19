"""Fetchers may import available once, rather than re-fetch offloaded images."""
from functools import lru_cache
from pathlib import Path
import json
ROOT=Path('/home/erik/plizio/shared');STATE=Path('/var/lib/plizio-media-offload')
@lru_cache(maxsize=2)
def catalogue(family):
 p=STATE/(family+'-catalogue.json')
 return json.loads(p.read_text())['files']if p.exists()else{}
def available(family,key):
 if family not in ['poi-images','sight-images']or'..'in key.split('/')or key.startswith('/'):raise ValueError('Invalid image identity')
 t=STATE/'tombstones.json'
 if t.exists()and family+'/'+key in json.loads(t.read_text()).get('keys',[]):return False
 p=ROOT/family/key
 if p.is_file()and p.stat().st_size>0:return True
 proof=catalogue(family).get(key,{})
 return bool(proof.get('verifiedAt')and proof.get('size',0)>0)
