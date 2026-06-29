/* ================================================================
   AfriConnect GH — Main App v3
   Ghana Flag Colors · Bilingual EN/FR · Admin-synced content
   ================================================================ */

const WA = '233591754822';
const DB_KEY = 'afc_cms';
const MSGS_KEY = 'afc_msgs';

const waIcon = `<svg viewBox="0 0 32 32" aria-hidden="true" style="width:17px;height:17px;flex-shrink:0"><path fill="currentColor" d="M16.04 3.2A12.7 12.7 0 0 0 5.26 22.63L3.6 28.8l6.31-1.61A12.72 12.72 0 1 0 16.04 3.2Zm0 2.29a10.43 10.43 0 1 1-.01 20.86c-1.82 0-3.6-.47-5.17-1.37l-.37-.21-3.75.96 1-3.66-.24-.38a10.42 10.42 0 0 1 8.54-16.2Zm-4.47 5.54c-.23 0-.6.09-.91.43-.31.34-1.2 1.18-1.2 2.87 0 1.69 1.23 3.33 1.4 3.56.17.23 2.38 3.8 5.86 5.17 2.9 1.14 3.49.91 4.12.85.63-.06 2.03-.83 2.32-1.64.29-.8.29-1.49.2-1.64-.09-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.77-1.69-1.02-.91-1.72-2.04-1.92-2.38-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.59Z"/></svg>`;
const arrowR = `<svg viewBox="0 0 20 20" fill="none" style="width:13px;height:13px"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ── FLAGS HTML ── */
const FLAGS = {
  gh: `<div class="flag-mini gh"><b></b><b>★</b><b></b></div>`,
  ci: `<div class="flag-mini ci"><b></b><b></b><b></b></div>`,
  tg: `<div class="flag-mini tg"><b></b><b></b><b></b></div>`,
  bj: `<div class="flag-mini bj"><b></b><b></b><b></b></div>`,
};

/* ── CMS helper ── */
function cms() { try { return JSON.parse(localStorage.getItem(DB_KEY)) || {}; } catch { return {}; } }
function cmsSection(k) { return cms()[k] || []; }

/* ── TRANSLATIONS ── */
const T = {
  en: {
    'nav.home':'Home','nav.services':'Services','nav.about':'About','nav.showcase':'Showcase','nav.gallery':'Gallery','nav.contact':'Contact',
    'hero.kicker':'Your Trusted Partner in Ghana & West Africa',
    'hero.title':'Travel. <em>Invest.</em> Succeed.',
    'hero.sub':'AfriConnect GH provides end-to-end bilingual support for travel, relocation, business and everyday needs across Ghana and West Africa.',
    'hero.cta1':'Book on WhatsApp','hero.cta2':'Our Services',
    'sv.kicker':'What we handle','sv.title':'12 Services. One trusted partner.',
    'sv.sub':'From airport arrival to settlement — tourism, translation, immigration, money transfer, education and more.',
    'dest.kicker':'Curated routes','dest.title':'Discover Ghana\'s finest destinations',
    'dest.sub':'Heritage coastlines, wildlife safaris, waterfalls, beaches and city landmarks — tailored to your budget and language.',
    'how.kicker':'Simple process','how.title':'How it works','how.sub':'Three steps to a seamless Ghana experience.',
    'rev.kicker':'Client feedback','rev.title':'What travellers say',
    'faq.title':'Frequently asked questions','faq.sub':'Everything you need to know before booking with AfriConnect GH.','faq.cta':'Ask us directly →',
    'cta.kicker':'Get started today','cta.title':'Ready to experience Ghana with confidence?',
    'cta.sub':'Send us your travel date, language, group size, destination and budget. We reply with a personalised plan within hours.',
    'cta.btn1':'Chat on WhatsApp','cta.btn2':'View Services',
    'info.title':'Plan your trip today','info.sub':'Send your date, destination, group size, language and budget. We reply with a clear plan and quote.','info.cta':'Chat on WhatsApp',
    'money.kicker':'Money transfer','money.title':'Safe & reliable money transfer assistance',
    'money.sub':'We guide clients through mobile money, local payments and safe transfer coordination throughout their stay in Ghana.',
    'money.cta':'Ask about transfers',
    'abt.kicker':'About AfriConnect GH','abt.title':'A trusted bridge between people, language and place',
    'abt.sub':'Ghana-based bilingual company helping visitors, students, families, entrepreneurs and travellers succeed in West Africa.',
    'abt.story.kicker':'Our story','abt.story.title':'Built for travellers who need trusted local support',
    'abt.story.p1':'AfriConnect GH was built to solve a real problem — navigating a new country is hard enough without a language barrier. We bridge that gap with bilingual support across English and French.',
    'abt.story.p2':'Whether you\'re arriving at Kotoka for the first time or a Ghanaian heading to Abidjan, we handle the logistics so you can focus on what matters.',
    'cross.kicker':'Cross-border support','cross.title':'English & French speaking West Africa',
    'cross.sub':'We support travellers and settlers moving between Ghana, Côte d\'Ivoire, Togo and Benin — in your language, at every step.',
    'gal.kicker':'Visual stories','gal.title':'Client moments & Ghana experiences','gal.sub':'Real moments from our clients\' journeys across Ghana.',
    'cnt.kicker':'Get in touch','cnt.title':'Talk to AfriConnect GH today',
    'cnt.sub':'Fastest response via WhatsApp. We\'re here 24/7 before, during and after your Ghana visit.',
    'cnt.reach':'Reach us','cnt.avail':'We\'re available 24/7','cnt.avail.sub':'Fastest response via WhatsApp. Call, email or fill the form below.',
    'cnt.form.title':'Send your trip details',
    'form.name':'Full name','form.service':'Service needed','form.date':'Travel date','form.lang':'Preferred language',
    'form.msg':'Trip details','form.send':'Send via WhatsApp',
    'footer.tag':'Bilingual travel, tours, settlement and money transfer support across Ghana and West Africa.',
    'modal.title':'Choose your language','modal.sub':'We\'ll remember your preference.','modal.en':'Continue in English','modal.fr':'Continuer en français',
    'float.lang':'Language',
  },
  fr: {
    'nav.home':'Accueil','nav.services':'Services','nav.about':'À propos','nav.showcase':'Vitrine','nav.gallery':'Galerie','nav.contact':'Contact',
    'hero.kicker':'Votre Partenaire de Confiance au Ghana et en Afrique de l\'Ouest',
    'hero.title':'Voyagez. <em>Investissez.</em> Réussissez.',
    'hero.sub':'AfriConnect GH offre un accompagnement bilingue complet pour vos voyages, déménagements, affaires et besoins quotidiens au Ghana et en Afrique de l\'Ouest.',
    'hero.cta1':'Réserver sur WhatsApp','hero.cta2':'Nos Services',
    'sv.kicker':'Ce que nous gérons','sv.title':'12 services. Un seul partenaire de confiance.',
    'sv.sub':'De l\'arrivée à l\'aéroport jusqu\'à l\'installation — tourisme, traduction, immigration, transfert d\'argent, études et plus.',
    'dest.kicker':'Itinéraires sélectionnés','dest.title':'Découvrez les plus belles destinations du Ghana',
    'dest.sub':'Patrimoine côtier, safaris, cascades, plages et monuments — adaptés à votre budget et votre langue.',
    'how.kicker':'Processus simple','how.title':'Comment ça marche','how.sub':'Trois étapes pour une expérience Ghana sans stress.',
    'rev.kicker':'Avis clients','rev.title':'Ce que disent nos voyageurs',
    'faq.title':'Questions fréquentes','faq.sub':'Tout ce que vous devez savoir avant de réserver avec AfriConnect GH.','faq.cta':'Contactez-nous →',
    'cta.kicker':'Commencer dès aujourd\'hui','cta.title':'Prêt à vivre le Ghana en toute confiance ?',
    'cta.sub':'Envoyez-nous votre date, langue, groupe, destination et budget. Nous vous répondons avec un plan personnalisé en quelques heures.',
    'cta.btn1':'WhatsApp','cta.btn2':'Voir les services',
    'info.title':'Planifiez votre voyage','info.sub':'Envoyez votre date, destination, groupe, langue et budget. Réponse rapide avec devis.','info.cta':'WhatsApp',
    'money.kicker':'Transfert d\'argent','money.title':'Aide au transfert d\'argent sécurisé',
    'money.sub':'Nous guidons les clients dans le mobile money, paiements locaux et coordination de transferts sécurisés au Ghana.',
    'money.cta':'Renseignements transferts',
    'abt.kicker':'À propos d\'AfriConnect GH','abt.title':'Un pont de confiance entre les personnes, la langue et le lieu',
    'abt.sub':'Société bilingue basée au Ghana aidant visiteurs, étudiants, familles, entrepreneurs et voyageurs à réussir en Afrique de l\'Ouest.',
    'abt.story.kicker':'Notre histoire','abt.story.title':'Créé pour les voyageurs qui ont besoin d\'un soutien local de confiance',
    'abt.story.p1':'AfriConnect GH a été créé pour résoudre un problème réel — naviguer dans un nouveau pays est déjà difficile sans barrière linguistique. Nous comblons cette lacune avec un soutien bilingue.',
    'abt.story.p2':'Que vous arriviez à Kotoka pour la première fois ou que vous soyez Ghanéen à destination d\'Abidjan, nous gérons la logistique pour que vous puissiez vous concentrer sur l\'essentiel.',
    'cross.kicker':'Soutien transfrontalier','cross.title':'Afrique de l\'Ouest anglophone et francophone',
    'cross.sub':'Nous accompagnons voyageurs et résidents entre le Ghana, la Côte d\'Ivoire, le Togo et le Bénin — dans votre langue, à chaque étape.',
    'gal.kicker':'Histoires visuelles','gal.title':'Moments clients et expériences au Ghana','gal.sub':'Moments réels des voyages de nos clients au Ghana.',
    'cnt.kicker':'Contactez-nous','cnt.title':'Parlez à AfriConnect GH aujourd\'hui',
    'cnt.sub':'Réponse la plus rapide via WhatsApp. Disponibles 24h/24 avant, pendant et après votre séjour au Ghana.',
    'cnt.reach':'Nous contacter','cnt.avail':'Disponible 24h/24, 7j/7','cnt.avail.sub':'Réponse la plus rapide via WhatsApp. Appelez, écrivez ou remplissez le formulaire ci-dessous.',
    'cnt.form.title':'Envoyez vos détails de voyage',
    'form.name':'Nom complet','form.service':'Service souhaité','form.date':'Date de voyage','form.lang':'Langue préférée',
    'form.msg':'Détails du voyage','form.send':'Envoyer via WhatsApp',
    'footer.tag':'Soutien bilingue pour voyage, tourisme, installation et transfert d\'argent au Ghana et en Afrique de l\'Ouest.',
    'modal.title':'Choisissez votre langue','modal.sub':'Nous mémoriserons votre choix.','modal.en':'Continue in English','modal.fr':'Continuer en français',
    'float.lang':'Langue',
  }
};

/* ── DATA ── */
const SERVICES = [
  { icon:'🌴', en:['Tourism & Tours','City tours, beach days, heritage sites, waterfall hikes, safari planning and cultural experiences across Ghana.'], fr:['Tourisme & Circuits','Visites de villes, plages, patrimoine, randonnées cascades, safari et expériences culturelles au Ghana.'] },
  { icon:'💱', en:['Money Transfer','Fast, secure, affordable money transfer guidance and coordination between countries.'], fr:['Transfert d\'argent','Transferts rapides, sécurisés et abordables entre pays avec coordination locale.'] },
  { icon:'📋', en:['Immigration Assistance','Visa support, document guidance, immigration procedures and official appointment accompaniment.'], fr:['Assistance immigration','Visa, documents, procédures d\'immigration et accompagnement aux rendez-vous officiels.'] },
  { icon:'🎓', en:['Education & Studies','School admissions, university placement, student registration support and campus orientation.'], fr:['Études','Admissions, placement universitaire, inscription et orientation sur les campus.'] },
  { icon:'💼', en:['Business & Purchase','Market visits, supplier meetings, business setup, product sourcing and negotiation support.'], fr:['Affaires & Achats','Visites de marché, fournisseurs, création d\'entreprise, approvisionnement et négociation.'] },
  { icon:'🏠', en:['Accommodation','Apartment and house search, booking coordination, installation and neighbourhood guidance in Accra.'], fr:['Logement','Recherche d\'appartements, réservation, installation et conseils de quartier à Accra.'] },
  { icon:'🚗', en:['Transportation','Airport transfers, car rental, private rides and intercity travel coordination.'], fr:['Transport','Transferts aéroport, location de voitures, trajets privés et voyages intercités.'] },
  { icon:'✈️', en:['Ticketing','Flight, bus and other transport ticket reservations at competitive prices.'], fr:['Billetterie','Réservation de billets d\'avion, bus et autres transports à des prix compétitifs.'] },
  { icon:'🎧', en:['Concierge Services','Personalised assistance for a smooth and stress-free stay in Ghana.'], fr:['Conciergerie','Assistance personnalisée pour un séjour fluide et sans stress au Ghana.'] },
  { icon:'🤝', en:['Accompaniment & Translation','24/7 bilingual (FR/EN) support, interpretation, guidance and orientation throughout your stay.'], fr:['Accompagnement & Traduction','Soutien bilingue FR/EN 24h/24, interprétariat, conseils et orientation pendant le séjour.'] },
  { icon:'🎉', en:['Events & Leisure','Event organisation, entertainment booking, recreation planning and group activities.'], fr:['Événements & Loisirs','Organisation d\'événements, divertissement, planification de loisirs et activités de groupe.'] },
  { icon:'🛍️', en:['Shopping Assistance','Help with shopping, product sourcing, deliveries and market visits in Ghana.'], fr:['Assistance shopping','Aide aux achats, approvisionnement, livraisons et visites de marchés au Ghana.'] },
];

const WHY = [
  { icon:'🛡️', en:['Trusted & Professional','Reliable service you can count on'], fr:['Fiable & Professionnel','Service de confiance sur lequel vous pouvez compter'] },
  { icon:'👥', en:['Local Experts','Deep knowledge of Ghana & West Africa'], fr:['Experts Locaux','Connaissance profonde du Ghana et de l\'Afrique de l\'Ouest'] },
  { icon:'💰', en:['Competitive Prices','Transparent & fair pricing always'], fr:['Prix Compétitifs','Tarifs transparents et équitables'] },
  { icon:'🕐', en:['Available 24/7','Around-the-clock support'], fr:['Disponible 24h/24','Soutien à toute heure'] },
  { icon:'🌐', en:['Reliable West Africa Network','Connections across the region'], fr:['Réseau Fiable','Connexions dans toute la région'] },
];

const DESTINATIONS = [
  { img:'/assets/tourism/independence-square.jpg', region:'Greater Accra', tag:'city', title:'Accra City Orientation', en:'Independence Square, Makola Market, Kotoka Airport, mobile money setup and city navigation support.', fr:'Independence Square, marché Makola, aéroport, mobile money et navigation dans la ville.' },
  { img:'/assets/tourism/cape-coast-castle.jpg', region:'Central Region', tag:'heritage', title:'Cape Coast Heritage Route', en:'Cape Coast Castle, Elmina, Kakum National Park canopy walk, transport and bilingual guide.', fr:'Cape Coast Castle, Elmina, canopée Kakum, transport et guide bilingue.' },
  { img:'/assets/tourism/wli-waterfalls.jpg', region:'Volta Region', tag:'nature', title:'Volta Nature Escape', en:'Wli Waterfalls, mountain routes, local guide coordination and flexible timing for all group sizes.', fr:'Chutes de Wli, routes de montagne, guide local et horaires flexibles.' },
  { img:'/assets/tourism/mole-national-park.jpg', region:'Savannah Region', tag:'safari', title:'Mole Safari Planning', en:'Northern Ghana travel, safari timing, wildlife encounters, transport and cultural village stops.', fr:'Organisation nord Ghana, safari, faune, transport et étapes culturelles de village.' },
  { img:'/assets/tourism/labadi-beach.jpg', region:'Greater Accra', tag:'beach', title:'Beach & Weekend Trips', en:'Labadi, Ada Estuary, relaxation days, group transport and simple itinerary planning.', fr:'Labadi, Ada, journées de détente, transport de groupe et itinéraire simple.' },
  { img:'/assets/tourism/larabanga-mosque.jpg', region:'Savannah Region', tag:'heritage', title:'Northern Culture Route', en:'Larabanga Mosque, Mole National Park, Tamale orientation and regional cultural visits.', fr:'Mosquée Larabanga, Mole, Tamale et visites culturelles régionales.' },
];

const SLIDES = [
  { img:'/assets/tourism/independence-square.jpg', en:'Arrive with confidence in Ghana', fr:'Arrivez en confiance au Ghana' },
  { img:'/assets/tourism/cape-coast-castle.jpg', en:'Discover Ghana\'s coastal heritage', fr:'Découvrez le patrimoine côtier' },
  { img:'/assets/tourism/wli-waterfalls.jpg', en:'Explore nature\'s finest waterfalls', fr:'Explorez les plus belles cascades' },
  { img:'/assets/tourism/mole-national-park.jpg', en:'Safari adventures await up north', fr:'Des aventures safari vous attendent' },
  { img:'/assets/tourism/labadi-beach.jpg', en:'Unwind on Ghana\'s golden beaches', fr:'Détendez-vous sur les plages dorées' },
];

const STEPS = [
  { n:'01', en:['Share your needs','Send your destination, date, group size, language and budget via WhatsApp. The more detail, the better we can plan.'], fr:['Partagez vos besoins','Envoyez destination, date, groupe, langue et budget via WhatsApp. Plus de détails = meilleur plan.'] },
  { n:'02', en:['Receive your plan','We respond within hours with a personalised itinerary, services, timing and cost estimate.'], fr:['Recevez votre plan','Nous répondons en quelques heures avec itinéraire, services, timing et devis personnalisés.'] },
  { n:'03', en:['Travel with support','We coordinate pickup, translation, tours, errands and payment guidance throughout your Ghana stay.'], fr:['Voyagez accompagné','Nous coordonnons accueil, traduction, visites, démarches et paiements pendant votre séjour.'] },
];

const REVIEWS_DEFAULT = [
  { stars:5, en:'AfriConnect made my first Ghana visit completely stress-free. Airport pickup, meetings translation — all flawless. Will use again.', fr:'AfriConnect a rendu ma première visite au Ghana sans stress. Accueil aéroport, traduction — parfait. Je recommande.', name:'Jean-Pierre M.', role_en:'Business traveller, Abidjan', role_fr:'Voyageur d\'affaires, Abidjan' },
  { stars:5, en:'As a student from Senegal, Ghanaian admin was daunting. AfriConnect handled my entire university registration process effortlessly.', fr:'En tant qu\'étudiant du Sénégal, AfriConnect a géré toute mon inscription universitaire sans effort. Excellent soutien.', name:'Fatou D.', role_en:'Student, University of Ghana', role_fr:'Étudiante, Université du Ghana' },
  { stars:5, en:'The Cape Coast heritage tour was incredibly well organised. Bilingual guide, on-time transport, knowledgeable explanations. Fantastic.', fr:'Le tour de Cape Coast était incroyablement bien organisé. Guide bilingue, transport à l\'heure, excellentes explications.', name:'Marie-Claire T.', role_en:'Tourist, Lyon, France', role_fr:'Touriste, Lyon, France' },
];

const FAQS = [
  { q:'What information should I send?', en:'Your travel date, arrival point, destination, number of people, language preference, budget and services needed. The more details, the better we can plan.', fr:'Date, arrivée, destination, nombre de personnes, langue, budget et services souhaités. Plus de détails = meilleur plan.' },
  { q:'Do you support French speakers?', en:'Yes. AfriConnect GH is fully bilingual. All our services are available in both English and French.', fr:'Oui. AfriConnect GH est totalement bilingue. Tous nos services sont disponibles en anglais et en français.' },
  { q:'Can you help with money transfer?', en:'Yes. We guide clients through reliable mobile money and local payment options and safe transfer coordination throughout their Ghana stay.', fr:'Oui. Nous guidons les clients pour les options de mobile money et paiements locaux au Ghana.' },
  { q:'Can I book only one service?', en:'Absolutely. Any single service — airport pickup, a tour, translation, accommodation — or a full combined package. We adapt to you.', fr:'Absolument. Un seul service ou un package complet. Nous nous adaptons à vos besoins.' },
  { q:'How quickly do you reply?', en:'Typically within 2–4 hours on WhatsApp. For urgent requests, we aim to reply within the hour.', fr:'En général dans les 2 à 4 heures sur WhatsApp. Pour les urgences, nous visons une réponse dans l\'heure.' },
  { q:'Which countries do you cover?', en:'Ghana is our home base. We also support travellers between Ghana, Côte d\'Ivoire, Togo and Benin.', fr:'Le Ghana est notre base. Nous soutenons aussi les voyageurs entre le Ghana, la Côte d\'Ivoire, le Togo et le Bénin.' },
];

const MARQUEE_ITEMS = [
  { en:'Tourism & Tours', fr:'Tourisme & Circuits', flag:'gh' },
  { en:'Money Transfer', fr:'Transfert d\'argent', flag:'gh' },
  { en:'Immigration Assistance', fr:'Assistance Immigration', flag:'gh' },
  { en:'Ghana 🇬🇭', fr:'Ghana 🇬🇭', flag:null },
  { en:'Education Support', fr:'Soutien Études', flag:'gh' },
  { en:'Côte d\'Ivoire 🇨🇮', fr:'Côte d\'Ivoire 🇨🇮', flag:null },
  { en:'Business & Investment', fr:'Affaires & Investissement', flag:'gh' },
  { en:'Togo 🇹🇬', fr:'Togo 🇹🇬', flag:null },
  { en:'Accommodation', fr:'Logement', flag:'gh' },
  { en:'Benin 🇧🇯', fr:'Bénin 🇧🇯', flag:null },
  { en:'24/7 Bilingual Support', fr:'Soutien Bilingue 24h/24', flag:'gh' },
  { en:'Transportation', fr:'Transport', flag:'gh' },
];

const COUNTRIES = [
  { flag:'gh', en:'Ghana',         fr:'Ghana' },
  { flag:'ci', en:'Côte d\'Ivoire', fr:'Côte d\'Ivoire' },
  { flag:'tg', en:'Togo',          fr:'Togo' },
  { flag:'bj', en:'Benin',         fr:'Bénin' },
];

/* ── STATE ── */
let lang = localStorage.getItem('afc_lang') || ((navigator.language||'en').toLowerCase().startsWith('fr') ? 'fr' : 'en');
let slide = 0;
let slideInterval = null;

function t(k) { return T[lang]?.[k] || T.en[k] || k; }
function qs(s) { return document.querySelector(s); }
function qsa(s) { return document.querySelectorAll(s); }
function getWA() { return cms().settings?.whatsapp || WA; }

/* ── NAV HEADER ── */
function renderHeader() {
  const h = qs('#siteHeader');
  if (!h) return;
  h.innerHTML = `
    <div class="nav-wrap">
      <a class="brand" href="/"><img src="/assets/africonnect-logo.png" alt="AfriConnect GH"></a>
      <nav class="nav-links">
        <a href="/" data-i18n="nav.home"></a>
        <a href="/services.html" data-i18n="nav.services"></a>
        <a href="/about.html" data-i18n="nav.about"></a>
        <a href="/showcase.html" data-i18n="nav.showcase"></a>
        <a href="/gallery.html" data-i18n="nav.gallery"></a>
        <a href="/contact.html" data-i18n="nav.contact"></a>
      </nav>
      <div class="nav-end">
        <div class="lang-sw">
          <button type="button" data-lang="en">EN</button>
          <button type="button" data-lang="fr">FR</button>
        </div>
        <a class="btn gold wa-btn hide-sm" href="https://wa.me/${WA}">
          ${waIcon}<span data-i18n="hero.cta1"></span>
        </a>
      </div>
    </div>`;
  // scroll effect
  const onScroll = () => h.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* ── FOOTER ── */
function renderFooter() {
  const f = qs('#siteFooter');
  if (!f) return;
  const s = cms().settings || {};
  f.innerHTML = `
    <div class="footer-inner">
      <div class="fb-brand">
        <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
        <p data-i18n="footer.tag"></p>
        <div class="footer-flag"><b></b><b>★</b><b></b></div>
        <div style="display:flex;gap:8px;margin-top:14px">
          ${COUNTRIES.map(c=>`<div class="flag-mini ${c.flag}" title="${c[lang]}">${c.flag==='gh'?'<b></b><b>★</b><b></b>':'<b></b><b></b><b></b>'}</div>`).join('')}
        </div>
      </div>
      <div class="fc">
        <h4>Navigation</h4>
        <a href="/services.html" data-i18n="nav.services"></a>
        <a href="/about.html" data-i18n="nav.about"></a>
        <a href="/showcase.html" data-i18n="nav.showcase"></a>
        <a href="/gallery.html" data-i18n="nav.gallery"></a>
        <a href="/contact.html" data-i18n="nav.contact"></a>
      </div>
      <div class="fc">
        <h4>Services</h4>
        ${SERVICES.slice(0,6).map(sv=>`<a href="/services.html">${sv[lang][0]}</a>`).join('')}
      </div>
      <div class="fc">
        <h4>Contact</h4>
        <a href="https://wa.me/${getWA()}">${waIcon} WhatsApp</a>
        <a href="tel:+${getWA()}">${s.phone || '+233 591 754 822'}</a>
        <a href="mailto:${s.email || 'africonnectgh@gmail.com'}">${s.email || 'africonnectgh@gmail.com'}</a>
        <span>📍 Accra, Ghana</span>
        <span>🌐 ${s.website || 'www.africonnectgh.com'}</span>
        <a href="/admin.html" style="margin-top:8px;opacity:.5">Admin</a>
      </div>
    </div>
    <div class="kente"></div>
    <div class="footer-bot">
      <p>© ${new Date().getFullYear()} AfriConnect GH. All rights reserved.</p>
      <div style="display:flex;gap:6px;align-items:center">
        ${COUNTRIES.map(c=>`<span title="${c[lang]}" style="font-size:.8rem;color:rgba(255,255,255,.35)">${c.flag==='gh'?'🇬🇭':c.flag==='ci'?'🇨🇮':c.flag==='tg'?'🇹🇬':'🇧🇯'} ${c[lang]}</span>`).join('')}
      </div>
    </div>`;
}

/* ── FLOATING ── */
function renderFloating() {
  const f = qs('#floating');
  if (!f) return;
  f.innerHTML = `
    <button class="fab fab-lang" id="fabLang">🌐 ${t('float.lang')}</button>
    <a class="fab fab-wa wa-btn" href="https://wa.me/${getWA()}">${waIcon}<span data-i18n="hero.cta1"></span></a>`;
}

/* ── LANG MODAL ── */
function renderModal(force=false) {
  const m = qs('#langModal');
  if (!m) return;
  const open = force || !localStorage.getItem('afc_lang_set');
  m.classList.toggle('open', open);
  m.innerHTML = `
    <div class="lm-card">
      <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
      <h2>${t('modal.title')}</h2>
      <p>${t('modal.sub')}</p>
      <div class="lm-btns">
        <button type="button" data-pick="en" class="${lang==='en'?'on':''}">${t('modal.en')}</button>
        <button type="button" data-pick="fr" class="${lang==='fr'?'on':''}">${t('modal.fr')}</button>
      </div>
    </div>`;
}

/* ── HERO ── */
function renderHero() {
  const sl = qs('#heroSlides');
  if (!sl) return;
  sl.innerHTML = SLIDES.map((s,i)=>`
    <article class="${i===0?'on':''}">
      <img src="${s.img}" alt="${s[lang]}" loading="${i===0?'eager':'lazy'}">
    </article>`).join('');

  const dotsEl = qs('#heroDots');
  if (dotsEl) dotsEl.innerHTML = SLIDES.map((_,i)=>`<button class="hero-dot ${i===0?'on':''}" data-slide="${i}" aria-label="Slide ${i+1}"></button>`).join('');

  const hd = qs('#heroHead');
  if (hd) hd.innerHTML = t('hero.title');

  const hc = qs('#heroCountries');
  if (hc) hc.innerHTML = COUNTRIES.map(c=>`
    <span class="flag-pill">${FLAGS[c.flag] || ''}${c[lang]}</span>`).join('');

  const hr = qs('#heroRight');
  if (hr) hr.innerHTML = `
    <div class="hstat"><strong>24/7</strong><span>${t('metrics.support')||'Travel support'}</span></div>
    <div class="hstat"><strong>4+</strong><span>${lang==='fr'?'Pays couverts':'Countries covered'}</span></div>
    <a class="hlink" href="/services.html">${t('nav.services')} ${arrowR}</a>
    <a class="hlink" href="/contact.html">${t('nav.contact')} ${arrowR}</a>`;

  startSlides();
}

function goSlide(i) {
  qsa('#heroSlides article').forEach((a,j)=>a.classList.toggle('on',j===i));
  qsa('#heroDots .hero-dot').forEach((d,j)=>d.classList.toggle('on',j===i));
  slide = i;
}
function startSlides() {
  clearInterval(slideInterval);
  slideInterval = setInterval(()=>goSlide((slide+1)%SLIDES.length), 5400);
}

/* ── MARQUEE ── */
function renderMarquee() {
  const m = qs('#marquee');
  if (!m) return;
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  m.innerHTML = items.map(it=>`
    <span class="mi">
      ${it.flag ? FLAGS[it.flag] || '' : ''}
      ${it[lang]||it.en}
      <span class="msep">✦</span>
    </span>`).join('');
}

/* ── SERVICES ── */
function renderServices() {
  const g = qs('#svGrid');
  if (!g) return;
  const custom = cmsSection('offers');
  g.innerHTML = SERVICES.map(sv=>`
    <article class="sv-card">
      <div class="sv-icon">${sv.icon}</div>
      <h3>${sv[lang][0]}</h3>
      <p>${sv[lang][1]}</p>
    </article>`).join('');
  // append custom offers if any
  if (custom.length) {
    custom.forEach(o=>{
      const card = document.createElement('article');
      card.className = 'sv-card';
      card.innerHTML = `<div class="sv-icon">★</div><h3>${o['title_'+lang]||o.title_en||''}</h3><p>${o['body_'+lang]||o.body_en||''}</p>${o.price?`<p style="color:var(--gold-d);font-weight:700;margin-top:8px">${o.price}</p>`:''}`;
      g.appendChild(card);
    });
  }
}

/* ── WHY ── */
function renderWhy() {
  qsa('#whyGrid').forEach(g=>{
    g.innerHTML = WHY.map(w=>`
      <div class="why-item">
        <div class="why-icon">${w.icon}</div>
        <strong>${w[lang][0]}</strong>
        <span>${w[lang][1]}</span>
      </div>`).join('');
  });
}

/* ── DESTINATIONS ── */
function renderDests() {
  qsa('#destGrid').forEach(g=>{
    g.innerHTML = DESTINATIONS.map((d,i)=>`
      <article class="dc ${i===0?'big':''}" data-tag="${d.tag}">
        <img src="${d.img}" alt="${d.title}" loading="${i<2?'eager':'lazy'}">
        <div class="dc-info">
          <p class="eyebrow">${d.region}</p>
          <h3>${d.title}</h3>
          <p>${d[lang]||d.en}</p>
          <a class="dc-book" href="https://wa.me/${getWA()}?text=${encodeURIComponent('I\'m interested in: '+d.title)}">Book ${arrowR}</a>
        </div>
      </article>`).join('');
  });

  // filter buttons on showcase page
  const fr = qs('#filterRow');
  if (fr) {
    const tags = ['All',...new Set(DESTINATIONS.map(d=>d.tag))];
    fr.innerHTML = tags.map((tag,i)=>`<button class="fb2 ${i===0?'on':''}" data-filter="${tag}">${tag.charAt(0).toUpperCase()+tag.slice(1)}</button>`).join('');
  }
}

/* ── HOW ── */
function renderHow() {
  const g = qs('#howGrid');
  if (!g) return;
  g.innerHTML = STEPS.map(s=>`
    <div class="hw">
      <div class="hw-num">${s.n}</div>
      <h3>${s[lang][0]}</h3>
      <p>${s[lang][1]}</p>
    </div>`).join('');
}

/* ── METRICS ── */
function renderMetrics() {
  qsa('#metricsGrid').forEach(g=>{
    const metrics = [
      {v:'24/7', l:lang==='fr'?'Soutien voyage':'Travel support'},
      {v:'12',  l:lang==='fr'?'Services offerts':'Services offered'},
      {v:'4+',  l:lang==='fr'?'Pays couverts':'Countries covered'},
      {v:'FR+EN',l:lang==='fr'?'Langues':'Languages'},
    ];
    g.innerHTML = metrics.map(m=>`<div class="met"><strong>${m.v}</strong><span>${m.l}</span></div>`).join('');
  });
}

/* ── TESTIMONIALS ── */
function renderReviews() {
  const g = qs('#testGrid');
  if (!g) return;
  const custom = cmsSection('reviews');
  const items = custom.length ? custom : REVIEWS_DEFAULT;
  g.innerHTML = items.map(r=>`
    <article class="tc">
      <div class="stars">${'★'.repeat(Number(r.stars||r.rating||5))}</div>
      <blockquote>"${r[lang]||r.en||r['quote_'+lang]||r.quote_en||''}"</blockquote>
      <div class="ta">
        <strong>${r.name||'Client'}</strong>
        <span>${r['role_'+lang]||r.role_en||''}</span>
      </div>
    </article>`).join('');
}

/* ── FAQ ── */
function renderFaq() {
  const g = qs('#faqList');
  if (!g) return;
  g.innerHTML = FAQS.map(f=>`
    <details class="fi">
      <summary>${f.q}</summary>
      <div class="fi-body">${f[lang]||f.en}</div>
    </details>`).join('');
}

/* ── GALLERY ── */
function renderGallery() {
  const g = qs('#galGrid');
  if (!g) return;
  const custom = cmsSection('gallery');
  const fallback = DESTINATIONS.map((d,i)=>({
    image:d.img, title_en:d.title, title_fr:d.title, caption:d.region, wide:i===0||i===3, category:'nature'
  }));
  const items = custom.length ? custom : fallback;
  g.innerHTML = items.map(it=>`
    <article class="gc ${it.wide?'w2':''}">
      <img src="${it.image||''}" alt="${it['title_'+lang]||it.title_en||''}" loading="lazy" onerror="this.src='/assets/tourism/independence-square.jpg'">
      <div class="go">
        <p class="eyebrow">${it.caption||it.category||''}</p>
        <strong>${it['title_'+lang]||it.title_en||''}</strong>
      </div>
    </article>`).join('');
}

/* ── CONTACT CHANNELS ── */
function renderChannels() {
  const g = qs('#chList');
  if (!g) return;
  const s = cms().settings || {};
  const wa = getWA();
  g.innerHTML = `
    <a class="ch" href="https://wa.me/${wa}">
      <div class="ch-icon">${waIcon}</div>
      <div><strong>WhatsApp</strong><br><span style="color:var(--muted);font-size:.8rem">+${s.phone?.replace(/\s/g,'')||wa} — fastest response</span></div>
    </a>
    <a class="ch" href="tel:+${wa}">
      <div class="ch-icon">📞</div>
      <div><strong>${lang==='fr'?'Téléphone':'Phone'}</strong><br><span style="color:var(--muted);font-size:.8rem">${s.phone||'+233 591 754 822'}</span></div>
    </a>
    <a class="ch" href="mailto:${s.email||'africonnectgh@gmail.com'}">
      <div class="ch-icon">✉️</div>
      <div><strong>Email</strong><br><span style="color:var(--muted);font-size:.8rem">${s.email||'africonnectgh@gmail.com'}</span></div>
    </a>
    <div class="ch">
      <div class="ch-icon">📍</div>
      <div><strong>${lang==='fr'?'Localisation':'Location'}</strong><br><span style="color:var(--muted);font-size:.8rem">Accra, Ghana 🇬🇭</span></div>
    </div>`;
}

/* ── ABOUT VALS ── */
function renderAboutVals() {
  const g = qs('#aboutVals');
  if (!g) return;
  const vals = lang==='fr' ? [
    ['Expertise bilingue','Soutien complet français-anglais pour chaque service.'],
    ['Connaissance locale','Implantés au Ghana avec des réseaux dans toute l\'Afrique de l\'Ouest.'],
    ['Service personnalisé','Chaque client est différent. Nous planifions selon vos besoins.'],
  ] : [
    ['Bilingual expertise','Full French-English support across every service we offer.'],
    ['Local knowledge','Deep roots in Ghana with networks across West Africa.'],
    ['Personal service','Every client is different. We plan around your specific needs.'],
  ];
  g.innerHTML = vals.map(v=>`<div class="val"><div class="vdot"></div><p><strong>${v[0]}</strong> — ${v[1]}</p></div>`).join('');
}

/* ── COUNTRY PILLS ── */
function renderCountryPills() {
  const g = qs('#countryPills');
  if (!g) return;
  g.innerHTML = COUNTRIES.map(c=>`
    <div class="cpill">
      ${FLAGS[c.flag]||''} ${c[lang]}
    </div>`).join('');
}

/* ── STATIC i18n ── */
function translateStatic() {
  qsa('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    const val = t(k);
    if (val !== k) el.innerHTML = val;
  });
  qsa('[data-lang]').forEach(b=>b.classList.toggle('on', b.dataset.lang===lang));
}

/* ── REVEAL ── */
function initReveal() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('vis'); obs.unobserve(e.target); } });
  },{threshold:.06,rootMargin:'0px 0px -36px 0px'});
  qsa('.reveal,.sv-card,.dc,.hw,.tc,.fi,.met,.why-item,.gc').forEach(el=>obs.observe(el));
}

/* ── FILTER ── */
function initFilter() {
  document.addEventListener('click', e=>{
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    qsa('[data-filter]').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.filter;
    qsa('.dc').forEach((card,i)=>{
      const d = DESTINATIONS[i];
      card.style.display = (f==='All' || d?.tag===f) ? '' : 'none';
    });
  });
}

/* ── CONTACT FORM ── */
function initForm() {
  const form = qs('#quoteForm');
  if (!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(form);
    const msg = `Hello AfriConnect GH!\n\nName: ${fd.get('name')||''}\nService: ${fd.get('service')||''}\nDate: ${fd.get('date')||''}\nLanguage: ${fd.get('lang')||''}\n\nDetails:\n${fd.get('message')||''}`;
    // save to local messages
    const msgs = JSON.parse(localStorage.getItem(MSGS_KEY)||'[]');
    msgs.unshift({name:fd.get('name'),service:fd.get('service'),date:fd.get('date'),lang:fd.get('lang'),message:fd.get('message'),timestamp:new Date().toLocaleString()});
    localStorage.setItem(MSGS_KEY, JSON.stringify(msgs));
    window.location.href = `https://wa.me/${getWA()}?text=${encodeURIComponent(msg)}`;
  });
}

/* ── SET LANG ── */
function setLang(l, confirmed=true) {
  lang = l;
  localStorage.setItem('afc_lang', l);
  if (confirmed) localStorage.setItem('afc_lang_set','1');
  document.documentElement.lang = l;
  renderAll();
}

/* ── EVENTS ── */
document.addEventListener('click', e=>{
  const lb = e.target.closest('[data-lang]');
  if (lb) { setLang(lb.dataset.lang); return; }
  const pick = e.target.closest('[data-pick]');
  if (pick) { setLang(pick.dataset.pick); qs('#langModal')?.classList.remove('open'); return; }
  const fab = e.target.closest('#fabLang');
  if (fab) { renderModal(true); return; }
  const dot = e.target.closest('[data-slide]');
  if (dot) { goSlide(parseInt(dot.dataset.slide)); startSlides(); return; }
  // close modal on backdrop
  if (e.target === qs('#langModal')) qs('#langModal')?.classList.remove('open');
});

/* ── RENDER ALL ── */
function renderAll() {
  renderHeader();
  renderFooter();
  renderFloating();
  renderModal(false);
  renderHero();
  renderMarquee();
  renderServices();
  renderWhy();
  renderDests();
  renderHow();
  renderMetrics();
  renderReviews();
  renderFaq();
  renderGallery();
  renderChannels();
  renderAboutVals();
  renderCountryPills();
  translateStatic();
  initReveal();
  initFilter();
  initForm();
}

renderAll();
