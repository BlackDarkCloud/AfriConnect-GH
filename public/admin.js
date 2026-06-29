/* ====================================================
   AfriConnect GH — Admin Panel
   Standalone (no module) — localStorage persistence
   ==================================================== */
const DB_KEY = 'afc_cms';
const AUTH_KEY = 'afc_auth';
const MSGS_KEY = 'afc_msgs';

function db() {
  try { return JSON.parse(localStorage.getItem(DB_KEY)) || {}; } catch { return {}; }
}
function save(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); }
function getSection(k) { return db()[k] || []; }
function saveSection(k, arr) { const d = db(); d[k] = arr; save(d); }
function getCreds() {
  const d = db();
  return { user: d.auth_user || 'admin', pass: d.auth_pass || 'africonnect2024' };
}

function status(id, msg, type='ok') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = 'adm-status ' + type;
  setTimeout(() => { el.textContent = ''; el.className = 'adm-status'; }, 4000);
}
function qs(s) { return document.querySelector(s); }

// ── AUTH ──
function checkAuth() {
  const s = sessionStorage.getItem(AUTH_KEY);
  if (s) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('adminUser').textContent = s;
    loadAll();
  }
}

document.getElementById('loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  const c = getCreds();
  if (u === c.user && p === c.pass) {
    sessionStorage.setItem(AUTH_KEY, u);
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('adminUser').textContent = u;
    loadAll();
  } else {
    status('loginStatus', 'Invalid username or password.', 'err');
  }
});

document.getElementById('logoutBtn')?.addEventListener('click', () => {
  sessionStorage.removeItem(AUTH_KEY);
  location.reload();
});

// ── TABS ──
document.querySelectorAll('.adm-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.adm-tab').forEach(b => b.classList.remove('on'));
    document.querySelectorAll('.adm-panel').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    const panel = document.getElementById('panel-' + btn.dataset.tab);
    if (panel) panel.classList.add('on');
  });
});

// ── GALLERY ──
function renderGalItems() {
  const items = getSection('gallery');
  const el = document.getElementById('galItems');
  document.getElementById('statGallery').textContent = items.length;
  if (!items.length) { el.innerHTML = '<div class="adm-empty">No gallery photos yet.</div>'; return; }
  el.innerHTML = items.map((it, i) => `
    <div class="adm-item">
      ${it.image ? `<img src="${it.image}" alt="${it.title_en}" onerror="this.style.display='none'">` : ''}
      <div class="adm-item-info">
        <strong>${it.title_en || 'Untitled'}</strong>
        <span>${it.category || ''} · ${it.caption || ''}</span>
      </div>
      <button class="btn red sm" onclick="delGal(${i})">✕</button>
    </div>`).join('');
}
window.delGal = function(i) {
  if (!confirm('Delete this photo?')) return;
  const arr = getSection('gallery'); arr.splice(i,1); saveSection('gallery', arr); renderGalItems();
};
document.getElementById('galForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const item = { title_en: fd.get('title_en'), title_fr: fd.get('title_fr'), caption: fd.get('caption'), category: fd.get('category'), image: fd.get('image'), wide: fd.get('wide') === 'true' };
  const arr = getSection('gallery'); arr.push(item); saveSection('gallery', arr);
  status('gal-status', 'Photo added!', 'ok'); e.target.reset(); renderGalItems();
});

// ── OFFERS ──
function renderOfferItems() {
  const items = getSection('offers');
  const el = document.getElementById('offerItems');
  document.getElementById('statOffers').textContent = items.length;
  if (!items.length) { el.innerHTML = '<div class="adm-empty">No offers yet.</div>'; return; }
  el.innerHTML = items.map((it, i) => `
    <div class="adm-item">
      <div class="adm-item-info">
        <strong>${it.title_en || 'Untitled'}</strong>
        <span>${it.price || ''} · ${it.duration || ''}</span>
      </div>
      <button class="btn red sm" onclick="delOffer(${i})">✕</button>
    </div>`).join('');
}
window.delOffer = function(i) {
  if (!confirm('Delete this offer?')) return;
  const arr = getSection('offers'); arr.splice(i,1); saveSection('offers', arr); renderOfferItems();
};
document.getElementById('offerForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const item = { title_en: fd.get('title_en'), title_fr: fd.get('title_fr'), body_en: fd.get('body_en'), body_fr: fd.get('body_fr'), price: fd.get('price'), duration: fd.get('duration'), image: fd.get('image') };
  const arr = getSection('offers'); arr.push(item); saveSection('offers', arr);
  status('offer-status', 'Offer added!', 'ok'); e.target.reset(); renderOfferItems();
});

// ── REVIEWS ──
function renderRevItems() {
  const items = getSection('reviews');
  const el = document.getElementById('revItems');
  document.getElementById('statReviews').textContent = items.length;
  if (!items.length) { el.innerHTML = '<div class="adm-empty">No testimonials yet.</div>'; return; }
  el.innerHTML = items.map((it, i) => `
    <div class="adm-item">
      <div class="adm-item-info">
        <strong>${it.name || 'Anonymous'} ${'★'.repeat(Number(it.stars||5))}</strong>
        <span>${it.role_en || ''}</span>
      </div>
      <button class="btn red sm" onclick="delRev(${i})">✕</button>
    </div>`).join('');
}
window.delRev = function(i) {
  if (!confirm('Delete this testimonial?')) return;
  const arr = getSection('reviews'); arr.splice(i,1); saveSection('reviews', arr); renderRevItems();
};
document.getElementById('revForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const item = { name: fd.get('name'), stars: fd.get('stars'), role_en: fd.get('role_en'), role_fr: fd.get('role_fr'), en: fd.get('quote_en'), fr: fd.get('quote_fr') };
  const arr = getSection('reviews'); arr.push(item); saveSection('reviews', arr);
  status('rev-status', 'Testimonial added!', 'ok'); e.target.reset(); renderRevItems();
});

// ── SETTINGS ──
function loadSettings() {
  const d = db();
  const s = d.settings || {};
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  setVal('setWA', s.whatsapp || '233591754822');
  setVal('setPhone', s.phone || '+233 591 754 822');
  setVal('setEmail', s.email || 'africonnectgh@gmail.com');
  setVal('setWeb', s.website || 'www.africonnectgh.com');
  const m = d.moneyTransfer || {};
  setVal('mTitleEn', m.title_en || '');
  setVal('mTitleFr', m.title_fr || '');
  setVal('mBodyEn', m.body_en || '');
  setVal('mBodyFr', m.body_fr || '');
}
document.getElementById('setForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const d = db();
  d.settings = { whatsapp: fd.get('whatsapp'), phone: fd.get('phone'), email: fd.get('email'), website: fd.get('website') };
  save(d); status('set-status', 'Settings saved!', 'ok');
});
document.getElementById('moneyForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const d = db();
  d.moneyTransfer = { title_en: fd.get('title_en'), title_fr: fd.get('title_fr'), body_en: fd.get('body_en'), body_fr: fd.get('body_fr') };
  save(d); status('money-status', 'Money section saved!', 'ok');
});
document.getElementById('pwForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const c = getCreds();
  const cur = document.getElementById('pwCurrent').value;
  const nw = document.getElementById('pwNew').value;
  const cf = document.getElementById('pwConfirm').value;
  if (cur !== c.pass) { status('pw-status', 'Current password incorrect.', 'err'); return; }
  if (nw.length < 6) { status('pw-status', 'Password must be at least 6 characters.', 'warn'); return; }
  if (nw !== cf) { status('pw-status', 'Passwords do not match.', 'err'); return; }
  const d = db(); d.auth_pass = nw; save(d);
  status('pw-status', 'Password updated!', 'ok'); e.target.reset();
});

// ── MESSAGES ──
function renderMsgs() {
  const msgs = JSON.parse(localStorage.getItem(MSGS_KEY) || '[]');
  const el = document.getElementById('msgItems');
  document.getElementById('statMsgs').textContent = msgs.length;
  if (!msgs.length) { el.innerHTML = '<div class="adm-empty">No messages yet. Messages from the contact form will appear here.</div>'; return; }
  el.innerHTML = msgs.map((m, i) => `
    <div class="adm-item" style="flex-direction:column;align-items:flex-start">
      <div style="display:flex;justify-content:space-between;width:100%;gap:12px">
        <strong>${m.name || '—'} · ${m.service || '—'} · ${m.date ? new Date(m.date).toLocaleDateString() : '—'}</strong>
        <button class="btn red sm" onclick="delMsg(${i})">✕</button>
      </div>
      <p style="color:var(--muted);font-size:.85rem;margin-top:6px">${m.message || ''}</p>
      <span style="color:var(--muted);font-size:.78rem">${m.lang || ''} · ${m.timestamp || ''}</span>
    </div>`).join('');
}
window.delMsg = function(i) {
  const msgs = JSON.parse(localStorage.getItem(MSGS_KEY) || '[]');
  msgs.splice(i, 1);
  localStorage.setItem(MSGS_KEY, JSON.stringify(msgs));
  renderMsgs();
};

function loadAll() {
  renderGalItems();
  renderOfferItems();
  renderRevItems();
  loadSettings();
  renderMsgs();
}

checkAuth();
