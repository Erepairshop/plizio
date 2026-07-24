type Copy = {
  cta: string;
  title: string;
  lead: string;
  choose: string;
  name: string;
  email: string;
  rights: string;
  send: string;
  cancel: string;
  thanks: string;
  error: string;
  selected: string;
};

const COPY: Record<string, Copy> = {
  de: {
    cta: "Eigenes Foto beitragen",
    title: "Foto zu diesem Ort hochladen",
    lead: "Hilf anderen Reisenden mit einem eigenen, passenden Foto. Jede Einsendung wird vor der Veröffentlichung geprüft.",
    choose: "Foto auswählen",
    name: "Name (optional)",
    email: "E-Mail (optional)",
    rights: "Ich habe das Foto selbst aufgenommen und erlaube Plizio, es auf dieser Seite zu veröffentlichen.",
    send: "Zur Prüfung senden",
    cancel: "Abbrechen",
    thanks: "Danke! Das Foto wird nun geprüft.",
    error: "Upload fehlgeschlagen. Bitte prüfe Dateityp, Größe und Auflösung.",
    selected: "Ausgewählt",
  },
  hu: {
    cta: "Saját fotó feltöltése",
    title: "Fotó feltöltése ehhez a helyhez",
    lead: "Segíts más utazóknak egy saját, ideillő fotóval. Minden beküldést megjelenés előtt ellenőrzünk.",
    choose: "Fotó kiválasztása",
    name: "Név (opcionális)",
    email: "E-mail (opcionális)",
    rights: "A fotót én készítettem, és engedélyezem, hogy a Plizio ezen az oldalon közzétegye.",
    send: "Küldés ellenőrzésre",
    cancel: "Mégse",
    thanks: "Köszönjük! A fotó ellenőrzésre vár.",
    error: "A feltöltés sikertelen. Ellenőrizd a fájltípust, méretet és felbontást.",
    selected: "Kiválasztva",
  },
  ro: {
    cta: "Încarcă fotografia ta",
    title: "Încarcă o fotografie pentru acest loc",
    lead: "Ajută alți călători cu o fotografie proprie și relevantă. Fiecare trimitere este verificată înainte de publicare.",
    choose: "Alege fotografia",
    name: "Nume (opțional)",
    email: "E-mail (opțional)",
    rights: "Am realizat fotografia și permit Plizio să o publice pe această pagină.",
    send: "Trimite pentru verificare",
    cancel: "Anulează",
    thanks: "Mulțumim! Fotografia așteaptă verificarea.",
    error: "Încărcarea a eșuat. Verifică tipul, dimensiunea și rezoluția fișierului.",
    selected: "Selectat",
  },
  en: {
    cta: "Contribute your photo",
    title: "Upload a photo for this place",
    lead: "Help other travellers with your own relevant photo. Every submission is reviewed before publication.",
    choose: "Choose photo",
    name: "Name (optional)",
    email: "Email (optional)",
    rights: "I took this photo and allow Plizio to publish it on this page.",
    send: "Send for review",
    cancel: "Cancel",
    thanks: "Thank you! The photo is awaiting review.",
    error: "Upload failed. Check the file type, size and resolution.",
    selected: "Selected",
  },
  fr: {
    cta: "Ajouter votre photo",
    title: "Téléverser une photo de ce lieu",
    lead: "Aidez les autres voyageurs avec une photo personnelle et pertinente. Chaque envoi est vérifié avant publication.",
    choose: "Choisir une photo",
    name: "Nom (facultatif)",
    email: "E-mail (facultatif)",
    rights: "J'ai pris cette photo et j'autorise Plizio à la publier sur cette page.",
    send: "Envoyer pour validation",
    cancel: "Annuler",
    thanks: "Merci ! La photo est en attente de validation.",
    error: "Échec du téléversement. Vérifiez le type, la taille et la résolution.",
    selected: "Sélectionné",
  },
  tr: {
    cta: "Fotoğrafını ekle",
    title: "Bu yer için fotoğraf yükle",
    lead: "Kendi çektiğin uygun bir fotoğrafla diğer gezginlere yardımcı ol. Her gönderi yayımlanmadan önce incelenir.",
    choose: "Fotoğraf seç",
    name: "Ad (isteğe bağlı)",
    email: "E-posta (isteğe bağlı)",
    rights: "Bu fotoğrafı ben çektim ve Plizio'nun bu sayfada yayımlamasına izin veriyorum.",
    send: "İncelemeye gönder",
    cancel: "İptal",
    thanks: "Teşekkürler! Fotoğraf inceleme bekliyor.",
    error: "Yükleme başarısız. Dosya türünü, boyutunu ve çözünürlüğünü kontrol et.",
    selected: "Seçildi",
  },
  hr: {
    cta: "Dodaj svoju fotografiju",
    title: "Prenesi fotografiju ovog mjesta",
    lead: "Pomogni drugim putnicima vlastitom prikladnom fotografijom. Svaka se prijava provjerava prije objave.",
    choose: "Odaberi fotografiju",
    name: "Ime (neobavezno)",
    email: "E-pošta (neobavezno)",
    rights: "Ja sam snimio/la ovu fotografiju i dopuštam Pliziju da je objavi na ovoj stranici.",
    send: "Pošalji na provjeru",
    cancel: "Odustani",
    thanks: "Hvala! Fotografija čeka provjeru.",
    error: "Prijenos nije uspio. Provjeri vrstu, veličinu i rezoluciju datoteke.",
    selected: "Odabrano",
  },
};

function esc(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char] || char);
}

export function renderPoiImageContribution(poiId: string, poiName: string, lang: string): string {
  const t = COPY[lang] || COPY.en;
  const domId = `plz-imgup-${poiId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return `<div class="plz-imgup" id="${domId}">
  <button type="button" class="plz-imgup-cta"><span aria-hidden="true">＋</span>${esc(t.cta)}</button>
  <div class="plz-imgup-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="${esc(t.title)}">
    <form class="plz-imgup-card">
      <button type="button" class="plz-imgup-x" aria-label="${esc(t.cancel)}">×</button>
      <p class="plz-imgup-kicker">Plizio Community</p>
      <h3>${esc(t.title)}</h3>
      <p class="plz-imgup-lead">${esc(t.lead)}</p>
      <label class="plz-imgup-file"><input type="file" name="image" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" required><span>${esc(t.choose)}</span><small>JPG · PNG · WebP · HEIC · max. 10 MB</small></label>
      <p class="plz-imgup-selected" aria-live="polite"></p>
      <div class="plz-imgup-fields"><input name="display_name" maxlength="120" placeholder="${esc(t.name)}" autocomplete="name"><input type="email" name="email" maxlength="200" placeholder="${esc(t.email)}" autocomplete="email"></div>
      <label class="plz-imgup-rights"><input type="checkbox" name="rights" value="yes" required><span>${esc(t.rights)}</span></label>
      <input class="plz-imgup-hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="plz-imgup-actions"><button type="button" class="plz-imgup-cancel">${esc(t.cancel)}</button><button type="submit" class="plz-imgup-send">${esc(t.send)}</button></div>
      <p class="plz-imgup-status" aria-live="polite"></p>
    </form>
  </div>
</div>
<style>
.plz-imgup{position:absolute;left:12px;bottom:12px;z-index:7}
.plz-imgup-cta{display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(255,255,255,.72);border-radius:999px;padding:9px 14px;background:rgba(47,38,30,.82);color:#fff;font:700 13px/1.1 Georgia,serif;box-shadow:0 3px 14px rgba(0,0,0,.28);backdrop-filter:blur(7px);cursor:pointer}
.plz-imgup-cta:hover{background:var(--accent-deep)}.plz-imgup-cta span{font:400 21px/12px system-ui,sans-serif}
.plz-imgup-modal{position:fixed;inset:0;z-index:10002;display:none;align-items:center;justify-content:center;background:rgba(37,29,21,.62);padding:16px}.plz-imgup-modal.open{display:flex}
.plz-imgup-card{position:relative;width:min(100%,520px);max-height:calc(100vh - 32px);overflow:auto;box-sizing:border-box;background:var(--paper);color:var(--ink);border:1px solid var(--rule);border-radius:18px;padding:24px 22px 19px;box-shadow:0 20px 65px rgba(32,24,17,.34)}
.plz-imgup-kicker{margin:0 0 4px;color:var(--accent);font:800 11px/1.2 system-ui,sans-serif;text-transform:uppercase;letter-spacing:.14em}.plz-imgup-card h3{margin:0 28px 8px 0;font-size:1.3rem}.plz-imgup-lead{margin:0 0 16px;color:var(--ink-soft);font-size:.93rem}
.plz-imgup-x{position:absolute;right:11px;top:9px;border:0;background:none;color:var(--ink-faint);font-size:1.75rem;cursor:pointer}
.plz-imgup-file{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:116px;border:2px dashed var(--rule);border-radius:14px;background:var(--paper-2);cursor:pointer;text-align:center;padding:12px}.plz-imgup-file:hover{border-color:var(--accent)}
.plz-imgup-file input{position:absolute;width:1px;height:1px;opacity:0}.plz-imgup-file span{font-weight:800;color:var(--accent)}.plz-imgup-file small{margin-top:5px;color:var(--ink-faint)}
.plz-imgup-selected{min-height:1.2em;margin:7px 0;color:var(--ink-soft);font-size:.82rem;overflow-wrap:anywhere}.plz-imgup-fields{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.plz-imgup-fields input{width:100%;box-sizing:border-box;border:1px solid var(--rule);border-radius:10px;padding:10px 11px;background:#fff;color:var(--ink);font:400 .9rem system-ui,sans-serif}
.plz-imgup-rights{display:flex;gap:9px;align-items:flex-start;margin:13px 0;color:var(--ink-soft);font-size:.82rem}.plz-imgup-rights input{margin-top:3px;accent-color:var(--accent)}
.plz-imgup-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}.plz-imgup-actions{display:flex;justify-content:flex-end;gap:9px}
.plz-imgup-actions button{border:0;border-radius:999px;padding:10px 16px;font:700 .88rem system-ui,sans-serif;cursor:pointer}.plz-imgup-cancel{background:var(--paper-2);color:var(--ink-soft)}.plz-imgup-send{background:var(--accent);color:#fff}.plz-imgup-send[disabled]{opacity:.55}
.plz-imgup-status{min-height:1.2em;margin:10px 0 0;font-size:.88rem}.plz-imgup-status.ok{color:#1d7d43}.plz-imgup-status.bad{color:#b32d2d}
@media(max-width:560px){.plz-imgup{left:8px;bottom:8px}.plz-imgup-cta{padding:8px 11px;font-size:11px}.plz-imgup-card{padding:21px 16px 16px}.plz-imgup-fields{grid-template-columns:1fr}}
</style>
<script>(function(){var root=document.getElementById(${JSON.stringify(domId)});if(!root)return;var hero=document.getElementById('plz-user-hero');function hasUserImage(){return hero&&hero.dataset.userImageLoaded==='1';}if(hasUserImage()){root.remove();return;}if(hero)hero.addEventListener('load',function(){if(hasUserImage())root.remove();});var modal=root.querySelector('.plz-imgup-modal'),form=root.querySelector('form'),file=form.elements.image,selected=root.querySelector('.plz-imgup-selected'),status=root.querySelector('.plz-imgup-status'),send=root.querySelector('.plz-imgup-send');function open(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');}function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}root.querySelector('.plz-imgup-cta').addEventListener('click',open);root.querySelector('.plz-imgup-x').addEventListener('click',close);root.querySelector('.plz-imgup-cancel').addEventListener('click',close);modal.addEventListener('click',function(ev){if(ev.target===modal)close();});document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&modal.classList.contains('open'))close();});file.addEventListener('change',function(){selected.textContent=file.files&&file.files[0]?${JSON.stringify(t.selected)}+': '+file.files[0].name:'';});form.addEventListener('submit',function(ev){ev.preventDefault();if(!form.reportValidity())return;var fd=new FormData(form);fd.append('poi_id',${JSON.stringify(poiId)});fd.append('poi_name',${JSON.stringify(poiName)});fd.append('lang',${JSON.stringify(lang)});fd.append('page_url',location.href);send.disabled=true;status.className='plz-imgup-status';status.textContent='…';fetch('/poi-image.php',{method:'POST',body:fd,credentials:'same-origin'}).then(function(r){return r.ok?r.json():r.json().catch(function(){return{};}).then(function(j){throw j;});}).then(function(){status.className='plz-imgup-status ok';status.textContent=${JSON.stringify(t.thanks)};form.reset();selected.textContent='';setTimeout(close,2200);}).catch(function(){status.className='plz-imgup-status bad';status.textContent=${JSON.stringify(t.error)};}).finally(function(){send.disabled=false;});});})();</script>`;
}
