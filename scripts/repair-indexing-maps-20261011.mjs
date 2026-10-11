// Targeted repair. Run plan first on the VPS; apply only a reviewed frozen plan.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import {execFileSync} from 'node:child_process';
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const root=fs.realpathSync('/home/erik/plizio/current');
const mapFile='/etc/nginx/plizio_410.map';
const redirectFile='/etc/nginx/plizio_spain_parent_301.map';
const mode=process.argv[2], planFile=process.argv[3];
const read=p=>fs.readFileSync(p,'utf8');
const keys=s=>new Set([...s.matchAll(/^[ \t]*"([^"\n]+)"/gm)].map(m=>m[1]));
function html(p){
  if(!/^\/[a-z]{2}\/[a-z0-9/-]+\/$/.test(p)||p.includes('..'))return '';
  const f=path.join(root,p,'index.html');
  return fs.existsSync(f)?read(f):'';
}
function canonical(h){const t=(h.match(/<link\b[^>]*>/gi)||[]).find(t=>/rel=["']canonical["']/.test(t));return t?.match(/href=["']([^"']+)["']/)?.[1];}
function indexable(p){const h=html(p);return !!h&&!/<meta\b[^>]*(?:noindex)[^>]*>/i.test(h)&&canonical(h)==='https://plizio.com'+p;}
if(mode==='plan'){
  const old=read(mapFile), redirects=read(redirectFile);
  const already=new Set([...keys(redirects),...keys(read('/etc/nginx/plizio_301.map'))]);
  const remove=[...keys(old)].filter(p=>!already.has(p)&&indexable(p));
  const idx=JSON.parse(read(root+'/data/_poi-url-index.json'));
  const targets=new Map();
  for(const langs of Object.values(idx))for(const p of Object.values(langs)){
    if(typeof p!=='string')continue;
    const m=p.match(/^\/(de|en|hu|ro|es)\/(spanien|spain|spanyolorszag|spania|espana)\/([^/]+)\/([^/]+)\/$/);
    if(!m||m[3].startsWith('es-'))continue;
    const k=m[1]+'/'+m[2]+'/'+m[4]; if(!targets.has(k))targets.set(k,new Set());targets.get(k).add(p);
  }
  const observed=new Set();
  for(const name of fs.readdirSync('/var/log/nginx').filter(n=>/^access\.log(?:\.\d+(?:\.gz)?)?$/.test(n))){
    let b=fs.readFileSync('/var/log/nginx/'+name);if(name.endsWith('.gz'))b=zlib.gunzipSync(b);
    for(const m of b.toString().matchAll(/"(?:GET|HEAD) (\/(?:de|en|hu|ro|es)\/(?:spanien|spain|spanyolorszag|spania|espana)\/es-[a-z0-9-]+\/[^/?\s]+\/)(?:\?[^\s]*)? HTTP\/[^"\s]+" (?:404|410) /g))observed.add(m[1]);
  }
  const additions=[];
  for(const p of observed){
    if(already.has(p)||html(p)||p.includes('/es-vc/'))continue;
    const s=p.split('/'), matches=targets.get(s[1]+'/'+s[2]+'/'+s[4]);
    if(matches?.size!==1)continue;
    const target=[...matches][0];if(!indexable(target)||keys(old).has(target)||already.has(target))continue;
    additions.push({from:p,to:target});
  }
  const plan={root,mapHash:sha(old),redirectHash:sha(redirects),remove,additions};
  fs.writeFileSync(planFile,JSON.stringify(plan,null,2),{flag:'wx'});
  console.log(JSON.stringify({remove:remove.length,redirects:additions.length,examples:additions.slice(0,5)},null,2));
}else if(mode==='apply'){
  const p=JSON.parse(read(planFile)),old=read(mapFile),red=read(redirectFile);
  if(p.root!==root||p.mapHash!==sha(old)||p.redirectHash!==sha(red))throw Error('State drift');
  if(!p.remove.every(indexable)||!p.additions.every(a=>!html(a.from)&&indexable(a.to)))throw Error('Page drift');
  const backup='/home/erik/plizio/indexing-map-backup-'+Date.now();fs.mkdirSync(backup,{mode:0o700});
  fs.copyFileSync(mapFile,backup+'/plizio_410.map');fs.copyFileSync(redirectFile,backup+'/plizio_spain_parent_301.map');fs.copyFileSync(planFile,backup+'/plan.json');
  const remove=new Set(p.remove);
  const next=old.split('\n').filter(line=>!remove.has(line.match(/^[ \t]*"([^"]+)"/)?.[1])).join('\n');
  const nextRed=red+'\n# Verified region-code migrations, 2026-10-11\n'+p.additions.map(a=>`"${a.from}" "${a.to}";`).join('\n')+'\n';
  try{
    fs.writeFileSync(mapFile,next);fs.writeFileSync(redirectFile,nextRed);
    execFileSync('nginx',['-t'],{stdio:'inherit'});execFileSync('systemctl',['reload','nginx'],{stdio:'inherit'});
  }catch(e){fs.copyFileSync(backup+'/plizio_410.map',mapFile);fs.copyFileSync(backup+'/plizio_spain_parent_301.map',redirectFile);execFileSync('nginx',['-t'],{stdio:'inherit'});execFileSync('systemctl',['reload','nginx'],{stdio:'inherit'});throw e;}
  console.log(JSON.stringify({backup,removed:p.remove.length,redirects:p.additions.length}));
}else if(mode==='recover-sitemap'){
  const p=JSON.parse(read(planFile));
  if(p.root!==root||p.remove.some(u=>keys(read(mapFile)).has(u))||!p.remove.every(indexable))throw Error('Repair not applied or page drift');
  const seen=new Set();
  for(const f of fs.readdirSync(root).filter(n=>/^sitemap-(?:\d+|poi-[a-z]+|hubs|beach|sightpages)\.xml$/.test(n))){
    for(const m of read(path.join(root,f)).matchAll(/<loc>([^<]+)<\/loc>/g))seen.add(m[1]);
  }
  const missing=p.remove.filter(u=>!seen.has('https://plizio.com'+u));
  const file=path.join(root,'sitemap-0.xml'),xml=read(file);
  if(!xml.includes('</urlset>')||(xml.match(/<url>/g)||[]).length+missing.length>50000)throw Error('Unexpected sitemap');
  if(!missing.length){console.log('Already recovered');process.exit(0);}
  const backup='/home/erik/plizio/sitemap-recovery-backup-'+Date.now();fs.mkdirSync(backup,{mode:0o700});fs.copyFileSync(file,backup+'/sitemap-0.xml');
  const next=xml.replace('</urlset>',missing.map(u=>'<url><loc>https://plizio.com'+u+'</loc></url>').join('')+'</urlset>');
  fs.writeFileSync(file+'.indexing-repair.tmp',next);fs.renameSync(file+'.indexing-repair.tmp',file);
  console.log(JSON.stringify({backup,added:missing.length}));
}else throw Error('Expected plan|apply|recover-sitemap and plan filename');
