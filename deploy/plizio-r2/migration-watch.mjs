import fs from 'node:fs';import cp from 'node:child_process';import path from 'node:path';import {fileURLToPath}from'node:url';
import {enqueueWorkerPrompt}from'../migration-prep/worker-bridge-client.mjs';
const root=path.dirname(fileURLToPath(import.meta.url)),file=path.join(root,'plizio-r2-migration-watch.json');
const prior=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
if(prior.completedNoticeAccepted)process.exit(0);
const r=cp.spawnSync('C:/Program Files/Git/usr/bin/ssh.exe',['-T','-o','BatchMode=yes','-o','ConnectTimeout=10','erik@100.111.54.55','sudo -n python3 /opt/plizio-media-offload/watch-status.py'],{windowsHide:true,encoding:'utf8',timeout:30000,maxBuffer:1024*1024});
if(r.status!==0)throw Error('Plizio R2 read-only status transport unavailable; no shipping/media action performed');
const state=JSON.parse(r.stdout),complete=!!state.initialComplete,error=state.status?.phase==='error-local-retained'||!complete&&(['failed','inactive'].includes(state.service?.ActiveState)||state.secondsWithoutLogActivity>3600);
if(!complete&&!error)process.exit(0);
const kind=complete?'complete':'error';
const prompt=complete?
'Automatikus Plizio R2 migracioertesites. A user 2026-11-19 kifejezetten engedelyezte a meglevo POI/sight kepek R2-re masolasat, ellenorzeset, ujkepek feltolteset, build-kepjegyzek atallitasat es csak igazolt masolatok helyi eltavolitasat. A korlatozott masolas es teljes letolteses byte-egyezes elkeszult. Folytasd a mar jovahagyott migraciot: eloszor olvasd a VPS /var/lib/plizio-media-offload/status.json, initial/complete.json, mindket csalad *-verified.json es *-matched.txt riportjat, routing-verified.json es build-compatibility.json fajljait, /opt/plizio-media-offload/ kodot es a repo deploy/plizio-r2 dokumentaciojat. Ellenorizd ujra az elo R2/eredeti URL kiszolgalast es az ujkepek incremental timer/build-manifest mukodeset. Ezutan csak a pontos, teljesen ellenorzott, azota valtozatlan inode/meret/mtime kepfajlok torolhetok helyben, elotte R2-re is mentett recovery-manifesttel, kozos copy.lock alatt. Ujabb vagy megvaltozott kepet orizz meg; egy bizonytalan tetel miatt ne kovetkeztess nullara. Nem engedelyezett teljes build/deploy, mas projektadat vagy webshopkep torlese, mas futo feladat ujrainditasa. Ha minden helyi tisztitas kesz, az eredeti URL-eket es a szabad helyet olvasd vissza es rovid magyar eredmenyt adj ebbe a Bridge-szalba. Ne kerj ismetelt engedelyt a mar jovahagyott szuk scope-ra.':
'Automatikus Plizio R2 migraciohiba. A VPS /var/lib/plizio-media-offload/status.json hibas fazist jelez; helyi kepet nem torolt a masolo. Ellenorizd a konkret copy/check naplot es az elo plizio-r2-initial-copy.service folyamatot, a megorzott scope-ot es riportokat. A mar jovahagyott technikai masolast lehet folytatni, de ne indits parhuzamos peldanyt, ne torolj kepet bizonytalan riportbol, ne indits teljes build/deployt. Rovid magyar eredmenyt adj a Bridge-ben.';
const reply=await enqueueWorkerPrompt(prompt,{idempotencyKey:'plizio-r2-initial-20261119-'+kind});
const next={...prior,checkedAt:new Date().toISOString(),kind,receipt:reply.body,...(complete?{completedNoticeAccepted:true}:{} )};
fs.writeFileSync(file+'.tmp',JSON.stringify(next,null,2));fs.renameSync(file+'.tmp',file);
if(complete)cp.spawnSync('powershell.exe',['-NoProfile','-NonInteractive','-Command',"Disable-ScheduledTask -TaskName 'Plizio R2 Migration Followup 20261119' | Out-Null"],{windowsHide:true,encoding:'utf8',timeout:15000});
console.log(JSON.stringify({kind,accepted:true}));
