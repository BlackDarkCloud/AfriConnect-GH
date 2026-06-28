/* ============================================================
   AfriConnect GH — Premium Travel & Tour Website
   Main JavaScript — v2 redesign
   ============================================================ */

const WHATSAPP_NUMBER = "233597154822";

const whatsappIcon = `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" style="width:18px;height:18px;flex-shrink:0"><path fill="currentColor" d="M16.04 3.2A12.7 12.7 0 0 0 5.26 22.63L3.6 28.8l6.31-1.61A12.72 12.72 0 1 0 16.04 3.2Zm0 2.29a10.43 10.43 0 1 1-.01 20.86c-1.82 0-3.6-.47-5.17-1.37l-.37-.21-3.75.96 1-3.66-.24-.38a10.42 10.42 0 0 1 8.54-16.2Zm-4.47 5.54c-.23 0-.6.09-.91.43-.31.34-1.2 1.18-1.2 2.87 0 1.69 1.23 3.33 1.4 3.56.17.23 2.38 3.8 5.86 5.17 2.9 1.14 3.49.91 4.12.85.63-.06 2.03-.83 2.32-1.64.29-.8.29-1.49.2-1.64-.09-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.77-1.69-1.02-.91-1.72-2.04-1.92-2.38-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.59Z"/></svg>`;

const arrowIcon = `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style="width:14px;height:14px"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ─── TRANSLATIONS ─────────────────────────────────────────── */
const translations = {
  en: {
    "nav.welcome": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.showcase": "Showcase",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "cta.whatsapp": "Chat on WhatsApp",
    "hero.kicker": "Travel & Tour Support in Ghana",
    "hero.title": "Your <em>bilingual</em> partner for Ghana.",
    "hero.copy": "AfriConnect GH supports visitors, students, families, business travellers and Ghanaians moving across English and French-speaking West Africa.",
    "hero.primary": "Plan my trip",
    "hero.secondary": "View services",
    "home.servicesTitle": "Every service you need in Ghana",
    "home.servicesCopy": "From airport arrival to settlement, translation, tours, and payment guidance — we handle it all.",
    "home.destKicker": "Curated experiences",
    "home.destTitle": "Explore Ghana's finest destinations",
    "home.destCopy": "From coastal heritage to northern savannahs — guided routes tailored to your time, language and budget.",
    "home.infoTitle": "Ready to plan your trip?",
    "home.infoCopy": "Send your travel date, destination, language, group size and budget. We reply with a clear plan, timeline and quote.",
    "home.processKicker": "Simple process",
    "home.process": "How it works",
    "home.processCopy": "Three steps to a seamless Ghana experience.",
    "services.kicker": "What we handle",
    "services.title": "Travel, tour & settlement services",
    "services.copy": "Choose one service or combine everything into a full support package.",
    "about.kicker": "About AfriConnect GH",
    "about.title": "A trusted bridge between people, language and place",
    "about.copy": "We are a Ghana-based bilingual support company helping visitors, students, families, entrepreneurs and travellers communicate, settle and move safely.",
    "border.kicker": "Cross-border support",
    "border.title": "Support across English and French-speaking West Africa",
    "border.copy": "AfriConnect GH helps French-speaking visitors feel confident in Ghana and helps Ghanaians communicate, travel and settle smoothly in neighbouring francophone countries.",
    "destinations.kicker": "Curated routes",
    "destinations.title": "Premium Ghana destinations",
    "destinations.copy": "From heritage castles and canopy walks to waterfalls, beaches, city landmarks and national parks — routes tailored to your time, budget and language.",
    "offers.kicker": "Current packages",
    "offers.title": "Travel packages & offers",
    "gallery.kicker": "Visual stories",
    "gallery.title": "Client moments & Ghana experiences",
    "gallery.copy": "Real moments from our clients' journeys across Ghana. Add your own photos via the admin panel.",
    "contact.kicker": "Get in touch",
    "contact.title": "Talk to AfriConnect GH today",
    "contact.copy": "Send your arrival date, language, destination, budget and the type of help you need. We guide you before and during your stay.",
    "form.name": "Full name",
    "form.service": "Service needed",
    "form.date": "Travel date",
    "form.message": "Trip details",
    "form.send": "Send via WhatsApp",
    "money.title": "Money transfer assistance",
    "money.cta": "Ask about transfers",
    "money.copy": "We guide clients through reliable money transfer options, local payment steps, mobile money support and safe payment coordination during their stay.",
    "feedback.kicker": "Client feedback",
    "feedback.title": "What travellers say",
    "faq.title": "Common questions",
    "faq.copy": "Everything you need to know before booking with AfriConnect GH.",
    "metrics.support": "Travel support",
    "metrics.languages": "Core languages",
    "metrics.countries": "West African routes",
    "metrics.sites": "Ghana experiences",
    "footer.tagline": "Bilingual travel, tours, settlement and money transfer support in Ghana.",
    "modal.title": "Choose your language",
    "modal.copy": "We'll remember your preference for your next visit.",
    "modal.en": "Continue in English",
    "modal.fr": "Continuer en français",
    "float.language": "Language",
    "footer.admin": "Admin"
  },
  fr: {
    "nav.welcome": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.showcase": "Vitrine",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "cta.whatsapp": "WhatsApp",
    "hero.kicker": "Voyage et tourisme au Ghana",
    "hero.title": "Votre partenaire <em>bilingue</em> au Ghana.",
    "hero.copy": "AfriConnect GH accompagne visiteurs, étudiants, familles, voyageurs d'affaires et Ghanéens entre l'Afrique de l'Ouest anglophone et francophone.",
    "hero.primary": "Planifier mon voyage",
    "hero.secondary": "Voir les services",
    "home.servicesTitle": "Tous les services dont vous avez besoin au Ghana",
    "home.servicesCopy": "De l'arrivée à l'aéroport jusqu'à l'installation, traduction, visites et paiements — nous gérons tout.",
    "home.destKicker": "Expériences sélectionnées",
    "home.destTitle": "Les plus belles destinations du Ghana",
    "home.destCopy": "Du patrimoine côtier aux savanes du nord — itinéraires adaptés à votre temps, langue et budget.",
    "home.infoTitle": "Prêt à planifier votre voyage ?",
    "home.infoCopy": "Envoyez votre date, destination, langue, groupe et budget. Nous répondons avec un plan clair, le timing et le devis.",
    "home.processKicker": "Processus simple",
    "home.process": "Comment ça marche",
    "home.processCopy": "Trois étapes pour une expérience Ghana sans stress.",
    "services.kicker": "Ce que nous gérons",
    "services.title": "Services voyage, tourisme et installation",
    "services.copy": "Choisissez un service ou combinez tout dans un package complet.",
    "about.kicker": "À propos d'AfriConnect GH",
    "about.title": "Un pont de confiance entre les personnes, la langue et le lieu",
    "about.copy": "Nous sommes une société bilingue basée au Ghana aidant visiteurs, étudiants, familles, entrepreneurs et voyageurs à communiquer, s'installer et se déplacer en sécurité.",
    "border.kicker": "Soutien transfrontalier",
    "border.title": "Soutien en Afrique de l'Ouest anglophone et francophone",
    "border.copy": "AfriConnect GH aide les francophones à se sentir à l'aise au Ghana et aide les Ghanéens à communiquer, voyager et s'installer dans les pays francophones voisins.",
    "destinations.kicker": "Itinéraires sélectionnés",
    "destinations.title": "Destinations premium au Ghana",
    "destinations.copy": "Châteaux du patrimoine, promenades dans la canopée, cascades, plages, monuments et parcs nationaux — routes adaptées à vos besoins.",
    "offers.kicker": "Offres actuelles",
    "offers.title": "Forfaits et offres de voyage",
    "gallery.kicker": "Histoires visuelles",
    "gallery.title": "Moments clients et expériences au Ghana",
    "gallery.copy": "Moments réels des voyages de nos clients au Ghana.",
    "contact.kicker": "Contactez-nous",
    "contact.title": "Parlez à AfriConnect GH aujourd'hui",
    "contact.copy": "Envoyez votre date d'arrivée, langue, destination, budget et le type d'aide dont vous avez besoin.",
    "form.name": "Nom complet",
    "form.service": "Service souhaité",
    "form.date": "Date de voyage",
    "form.message": "Détails du voyage",
    "form.send": "Envoyer via WhatsApp",
    "money.title": "Assistance transfert d'argent",
    "money.cta": "Renseignements transferts",
    "money.copy": "Nous guidons les clients dans les options fiables de transfert d'argent, paiements locaux, mobile money et coordination sécurisée.",
    "feedback.kicker": "Avis clients",
    "feedback.title": "Ce que disent les voyageurs",
    "faq.title": "Questions fréquentes",
    "faq.copy": "Tout ce que vous devez savoir avant de réserver avec AfriConnect GH.",
    "metrics.support": "Soutien voyage",
    "metrics.languages": "Langues principales",
    "metrics.countries": "Routes ouest-africaines",
    "metrics.sites": "Expériences Ghana",
    "footer.tagline": "Soutien bilingue pour voyage, tourisme, installation et transfert d'argent au Ghana.",
    "modal.title": "Choisissez votre langue",
    "modal.copy": "Nous mémoriserons votre choix pour votre prochaine visite.",
    "modal.en": "Continue in English",
    "modal.fr": "Continuer en français",
    "float.language": "Langue",
    "footer.admin": "Admin"
  }
};

/* ─── DATA ─────────────────────────────────────────────────── */
const images = {
  cape:    "/assets/tourism/cape-coast-castle.jpg",
  elmina:  "/assets/tourism/elmina-castle.jpg",
  wli:     "/assets/tourism/wli-waterfalls.jpg",
  mole:    "/assets/tourism/mole-national-park.jpg",
  accra:   "/assets/tourism/independence-square.jpg",
  nkrumah: "/assets/tourism/kwame-nkrumah.jpg",
  beach:   "/assets/tourism/labadi-beach.jpg",
  north:   "/assets/tourism/larabanga-mosque.jpg"
};

const slideshow = [
  { img: images.accra,  region: "Greater Accra",   en: "Arrive with confidence in Accra",   fr: "Arrivez en confiance à Accra" },
  { img: images.cape,   region: "Central Region",  en: "Discover Ghana's coastal heritage",  fr: "Découvrez le patrimoine côtier" },
  { img: images.wli,    region: "Volta Region",    en: "Explore nature's finest waterfalls", fr: "Explorez les cascades naturelles" },
  { img: images.mole,   region: "Savannah Region", en: "Safari adventures await up north",   fr: "Des aventures safari vous attendent" },
  { img: images.beach,  region: "Greater Accra",   en: "Unwind on Ghana's golden beaches",   fr: "Détendez-vous sur les plages dorées" }
];

const heroTags = [
  { en: "Airport Pickup", fr: "Accueil Aéroport" },
  { en: "Guided Tours",   fr: "Visites Guidées"  },
  { en: "Translation",    fr: "Traduction"        },
  { en: "24/7 Support",   fr: "Support 24/7"      }
];

const serviceItems = [
  { icon: "✈", en: ["Airport pickup & transfer", "Meet-and-greet, luggage assistance, SIM card support, hotel transfer and first-day orientation in Ghana."], fr: ["Accueil aéroport & transfert", "Accueil, aide bagages, carte SIM, transfert hôtel et orientation du premier jour."] },
  { icon: "🗣", en: ["Translation & interpretation", "French-English support for appointments, documents, schools, markets, hospitals and meetings."], fr: ["Traduction & interprétation", "Assistance français-anglais pour rendez-vous, documents, écoles, marchés et réunions."] },
  { icon: "🗺", en: ["Tours & guided visits", "Accra city tours, heritage trips, waterfall hikes, beach days, safari planning and cultural experiences."], fr: ["Tours & visites guidées", "Visites d'Accra, patrimoine, cascades, plages, safari et expériences culturelles."] },
  { icon: "🏠", en: ["Accommodation support", "Hotels, apartments, student housing, neighbourhood guidance and move-in coordination across Accra."], fr: ["Aide au logement", "Hôtels, appartements, logements étudiants, conseils de quartier et installation."] },
  { icon: "🎓", en: ["School & student support", "Admissions guidance, campus visits, registration errands and student arrival support across Ghana."], fr: ["Assistance scolaire", "Admissions, visites de campus, inscriptions et accompagnement des étudiants."] },
  { icon: "💼", en: ["Business & investment", "Market visits, supplier meetings, office search, local introductions and business coordination."], fr: ["Affaires & investissements", "Visites de marché, fournisseurs, bureaux, mises en relation et coordination locale."] },
  { icon: "💳", en: ["Money transfer assistance", "Guidance for mobile money, local payments and safe transfer coordination while in Ghana."], fr: ["Transfert d'argent", "Conseils mobile money, paiements locaux et coordination de transferts sécurisés."] },
  { icon: "🌍", en: ["Cross-border support", "Help for Ghanaians and visitors moving between Ghana, Côte d'Ivoire, Togo and Benin."], fr: ["Assistance transfrontalière", "Aide entre le Ghana, la Côte d'Ivoire, le Togo et le Bénin."] }
];

const destinations = [
  { image: images.accra,   title: "Accra City Orientation",    region: "Greater Accra",   en: "Airport arrival, Independence Square, Makola Market, mobile money and city navigation.", fr: "Arrivée aéroport, Independence Square, marchés, mobile money et orientation.", tag: "city" },
  { image: images.cape,    title: "Cape Coast Heritage Route", region: "Central Region",  en: "Cape Coast Castle, Elmina, Kakum National Park canopy walk, transport and translation.", fr: "Cape Coast Castle, Elmina, Kakum, transport et traduction.", tag: "heritage" },
  { image: images.wli,     title: "Volta Nature Escape",       region: "Volta Region",    en: "Wli Waterfalls, mountain routes, local guide coordination and flexible timing.", fr: "Wli Waterfalls, montagnes, guide local et horaires flexibles.", tag: "nature" },
  { image: images.mole,    title: "Mole Safari Planning",      region: "Savannah Region", en: "Northern Ghana travel, safari timing, transport and cultural village stops.", fr: "Organisation nord Ghana, safari, transport et étapes culturelles.", tag: "safari" },
  { image: images.beach,   title: "Beach & Weekend Trips",     region: "Greater Accra",   en: "Labadi, Ada Estuary, relaxation days, group transport and simple itinerary planning.", fr: "Labadi, Ada, détente, transport de groupe et itinéraire simple.", tag: "beach" },
  { image: images.north,   title: "Northern Culture Route",    region: "Savannah Region", en: "Larabanga Mosque, Mole National Park, Tamale orientation and regional travel.", fr: "Mosquée Larabanga, visites culturelles et coordination régionale.", tag: "heritage" }
];

const processSteps = [
  { num: "01", en: ["Share your needs", "Send your destination, date, group size, language and budget via WhatsApp. The more detail, the better we can plan."], fr: ["Partagez vos besoins", "Envoyez destination, date, groupe, langue et budget via WhatsApp."] },
  { num: "02", en: ["Receive your plan", "We respond within hours with a personalised itinerary, recommended services, timing and cost estimate."], fr: ["Recevez votre plan", "Nous répondons en quelques heures avec un itinéraire personnalisé, services, timing et devis."] },
  { num: "03", en: ["Travel with support", "We coordinate pickup, translation, tours, errands and payment guidance throughout your stay in Ghana."], fr: ["Voyagez avec soutien", "Nous coordonnons accueil, traduction, visites, démarches et paiements pendant votre séjour."] }
];

const testimonials = [
  { stars: 5, en: "AfriConnect made my first visit to Ghana completely stress-free. Airport pickup, translation at meetings — all flawless.", fr: "AfriConnect a rendu ma première visite au Ghana sans stress. Accueil aéroport, traduction — tout était parfait.", name: "Jean-Pierre M.", role_en: "Business traveller, Abidjan", role_fr: "Voyageur d'affaires, Abidjan" },
  { stars: 5, en: "As a student from Senegal, navigating Ghanaian admin was daunting. AfriConnect handled everything for my university registration.", fr: "En tant qu'étudiant du Sénégal, naviguer les formalités ghanéennes était intimidant. AfriConnect a tout géré.", name: "Fatou D.", role_en: "Student, University of Ghana", role_fr: "Étudiante, Université du Ghana" },
  { stars: 5, en: "The Cape Coast heritage tour was incredibly organised. Our guide was knowledgeable, bilingual and everything ran on time.", fr: "Le tour du patrimoine de Cape Coast était incroyablement bien organisé. Guide bilingue et ponctuel.", name: "Marie-Claire T.", role_en: "Tourist, Lyon, France", role_fr: "Touriste, Lyon, France" }
];

const faqs = [
  { q: "What information should I send?",       en: "Travel date, arrival point, destination, number of people, language preference, budget range and services needed.",            fr: "Date, arrivée, destination, nombre de personnes, langue, budget et services souhaités." },
  { q: "Do you speak French and English?",      en: "Yes. AfriConnect GH is fully bilingual and supports French-speaking visitors throughout Ghana.",                              fr: "Oui. AfriConnect GH est bilingue et accompagne les francophones au Ghana." },
  { q: "Can you help with money transfer?",     en: "Yes. We guide clients through reliable local payment and mobile money coordination throughout their stay.",                    fr: "Oui. Nous guidons les clients pour paiements locaux et mobile money." },
  { q: "Can I book only one service?",          en: "Absolutely. You can book any single service — airport pickup, translation, a tour, accommodation support — or a full package.", fr: "Oui. Vous pouvez réserver un seul service ou un package complet." },
  { q: "How quickly do you respond?",           en: "We typically respond within 2–4 hours on WhatsApp. For urgent bookings, we aim to reply within the hour.",                   fr: "Nous répondons généralement en 2 à 4 heures sur WhatsApp. Pour les réservations urgentes, nous visons une réponse dans l'heure." }
];

const marqueeItems = [
  { en: "Airport Pickup", fr: "Accueil Aéroport" },
  { en: "Guided Tours", fr: "Visites Guidées" },
  { en: "French · English", fr: "Français · Anglais" },
  { en: "Cape Coast", fr: "Cape Coast" },
  { en: "Wli Waterfalls", fr: "Chutes de Wli" },
  { en: "Mole National Park", fr: "Parc de Mole" },
  { en: "Mobile Money Support", fr: "Aide Mobile Money" },
  { en: "24/7 Support", fr: "Support 24/7" },
  { en: "Accra City Tours", fr: "Tours d'Accra" },
  { en: "Student Assistance", fr: "Aide Étudiants" }
];

/* ─── STATE ────────────────────────────────────────────────── */
let content = {};
let lang = localStorage.getItem("afc_lang") || ((navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en");
let currentSlide = 0;
let slideTimer = null;

function t(key) { return translations[lang]?.[key] || translations.en[key] || key; }
function qs(s) { return document.querySelector(s); }
function qsa(s) { return document.querySelectorAll(s); }

/* ─── HEADER SCROLL EFFECT ─────────────────────────────────── */
function initHeaderScroll() {
  const header = qs(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ─── NAV RENDER ───────────────────────────────────────────── */
function renderShell() {
  const header = qs(".site-header");
  if (header) {
    header.innerHTML = `
      <div class="nav-shell">
        <a class="brand" href="/"><img src="/assets/africonnect-logo.png" alt="AfriConnect GH"></a>
        <nav class="nav">
          <a href="/" data-i18n="nav.welcome"></a>
          <a href="/services.html" data-i18n="nav.services"></a>
          <a href="/about.html" data-i18n="nav.about"></a>
          <a href="/showcase.html" data-i18n="nav.showcase"></a>
          <a href="/gallery.html" data-i18n="nav.gallery"></a>
          <a href="/contact.html" data-i18n="nav.contact"></a>
        </nav>
        <div class="nav-actions">
          <div class="lang-switch">
            <button type="button" data-lang="en">EN</button>
            <button type="button" data-lang="fr">FR</button>
          </div>
          <a class="btn primary whatsapp-btn nav-cta" href="https://wa.me/${WHATSAPP_NUMBER}">
            ${whatsappIcon}<span data-i18n="cta.whatsapp"></span>
          </a>
        </div>
      </div>`;
    initHeaderScroll();
  }

  const footer = qs(".site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
          <p>${t("footer.tagline")}</p>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <a href="/services.html" data-i18n="nav.services"></a>
          <a href="/about.html" data-i18n="nav.about"></a>
          <a href="/showcase.html" data-i18n="nav.showcase"></a>
          <a href="/gallery.html" data-i18n="nav.gallery"></a>
          <a href="/contact.html" data-i18n="nav.contact"></a>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <a href="/services.html">Airport Pickup</a>
          <a href="/services.html">Tours & Guides</a>
          <a href="/services.html">Translation</a>
          <a href="/services.html">Accommodation</a>
          <a href="/services.html">Money Transfer</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="tel:+233597154822">+233 597 154 822</a>
          <a href="mailto:africonnectgh@gmail.com">africonnectgh@gmail.com</a>
          <a href="https://wa.me/${WHATSAPP_NUMBER}">WhatsApp</a>
          <span>Accra, Ghana</span>
          <a href="/admin.html" data-i18n="footer.admin"></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} AfriConnect GH. All rights reserved.</p>
        <a href="/admin.html" data-i18n="footer.admin"></a>
      </div>`;
  }

  const floating = qs(".floating-actions");
  if (floating) {
    floating.innerHTML = `
      <button type="button" class="fab fab-lang" id="languageFab">🌐 ${t("float.language")}</button>
      <a class="fab fab-wa whatsapp-btn" href="https://wa.me/${WHATSAPP_NUMBER}">
        ${whatsappIcon}<span data-i18n="cta.whatsapp"></span>
      </a>`;
  }
}

/* ─── LANGUAGE MODAL ─────────────────────────────────────────── */
function renderLanguageModal(force = false) {
  const modal = qs("#languageModal");
  if (!modal) return;
  const open = force || !localStorage.getItem("afc_lang_confirmed");
  modal.classList.toggle("open", open);
  modal.innerHTML = `
    <div class="language-card">
      <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
      <h2>${t("modal.title")}</h2>
      <p>${t("modal.copy")}</p>
      <div class="lang-btns">
        <button type="button" data-pick-lang="en" class="${lang === "en" ? "lang-active" : ""}">${t("modal.en")}</button>
        <button type="button" data-pick-lang="fr" class="${lang === "fr" ? "lang-active" : ""}">${t("modal.fr")}</button>
      </div>
    </div>`;
}

/* ─── HERO SLIDESHOW ─────────────────────────────────────────── */
function renderHero() {
  const slideshow_el = qs("#heroSlideshow");
  if (!slideshow_el) return;

  slideshow_el.innerHTML = slideshow.map((s, i) => `
    <article class="${i === 0 ? "active" : ""}">
      <img src="${s.img}" alt="${s[lang] || s.en}" loading="${i === 0 ? "eager" : "lazy"}">
    </article>`).join("");

  const nav = qs("#heroNav");
  if (nav) {
    nav.innerHTML = slideshow.map((_, i) => `<button class="hero-dot ${i === 0 ? "active" : ""}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
  }

  const headline = qs("#heroHeadline");
  if (headline) headline.innerHTML = t("hero.title");

  const tagsEl = qs("#heroTags");
  if (tagsEl) {
    tagsEl.innerHTML = heroTags.map(tag => `<span class="hero-tag">${tag[lang] || tag.en}</span>`).join("");
  }

  const statsEl = qs("#heroStats");
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="hero-stat-card"><strong>24/7</strong><span>${t("metrics.support")}</span></div>
      <div class="hero-stat-card"><strong>4+</strong><span>${t("metrics.countries")}</span></div>
      <a class="hero-quick-link" href="/services.html">${t("nav.services")} ${arrowIcon}</a>
      <a class="hero-quick-link" href="/contact.html">${t("contact.kicker")} ${arrowIcon}</a>`;
  }

  startSlideshow();
}

function goToSlide(idx) {
  const slides = qsa("#heroSlideshow article");
  const dots = qsa("#heroNav .hero-dot");
  slides.forEach((s, i) => s.classList.toggle("active", i === idx));
  dots.forEach((d, i) => d.classList.toggle("active", i === idx));
  currentSlide = idx;
}

function startSlideshow() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    goToSlide((currentSlide + 1) % slideshow.length);
  }, 5200);
}

/* ─── MARQUEE ─────────────────────────────────────────────────── */
function renderMarquee() {
  const track = qs("#marqueeTrack");
  if (!track) return;
  const items = [...marqueeItems, ...marqueeItems];
  track.innerHTML = items.map(item => `
    <span class="marquee-item">
      ${item[lang] || item.en}
      <span class="marquee-sep">✦</span>
    </span>`).join("");
}

/* ─── SERVICES ─────────────────────────────────────────────────── */
function renderServices() {
  const grid = qs("#serviceGrid");
  if (!grid) return;
  grid.innerHTML = serviceItems.map(item => `
    <article class="service-card">
      <div class="service-icon">${item.icon}</div>
      <h3>${item[lang][0]}</h3>
      <p>${item[lang][1]}</p>
    </article>`).join("");
}

/* ─── DESTINATIONS ─────────────────────────────────────────────── */
function renderDestinations() {
  const grid = qs("#destGrid");
  if (grid) {
    grid.innerHTML = destinations.slice(0, 5).map((d, i) => `
      <article class="dest-card ${i === 0 ? "large" : ""}">
        <img src="${d.image}" alt="${d.title}" loading="lazy">
        <div class="dest-info">
          <p class="t-eyebrow">${d.region}</p>
          <h3>${d.title}</h3>
          <p>${d[lang] || d.en}</p>
          <a class="dest-book" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("I'm interested in: " + d.title)}">Book this route ${arrowIcon}</a>
        </div>
      </article>`).join("");
  }

  const destFull = qs("#destinationGrid");
  if (destFull) {
    destFull.innerHTML = destinations.map((d, i) => `
      <article class="dest-card ${i === 0 ? "large" : ""}">
        <img src="${d.image}" alt="${d.title}" loading="lazy">
        <div class="dest-info">
          <p class="t-eyebrow">${d.region}</p>
          <h3>${d.title}</h3>
          <p>${d[lang] || d.en}</p>
          <a class="dest-book" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("I'm interested in: " + d.title)}">Book this route ${arrowIcon}</a>
        </div>
      </article>`).join("");
  }

  const filters = qs("#destinationFilters");
  if (filters) {
    const tags = ["All", ...new Set(destinations.map(d => d.tag))];
    filters.innerHTML = tags.map((tag, i) => `
      <button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</button>`).join("");
  }
}

/* ─── PROCESS ─────────────────────────────────────────────────── */
function renderProcess() {
  const grid = qs("#processGrid");
  if (!grid) return;
  grid.innerHTML = processSteps.map(step => `
    <div class="how-card">
      <div class="how-num">${step.num}</div>
      <h3>${step[lang][0]}</h3>
      <p>${step[lang][1]}</p>
    </div>`).join("");
}

/* ─── GALLERY ─────────────────────────────────────────────────── */
function renderGallery() {
  const grid = qs("#galleryGrid");
  if (!grid) return;
  const fallback = destinations.map((d, i) => ({
    image: d.image,
    title: d.title,
    caption: d.region,
    wide: i === 0 || i === 3,
    tall: false
  }));
  const items = (content.gallery?.length ? content.gallery.map((item, i) => ({
    image: item.image,
    title: item.title?.[lang] || item.title?.en || "",
    caption: item.caption?.[lang] || item.caption?.en || "",
    wide: i % 5 === 0
  })) : fallback);

  grid.innerHTML = items.map(item => `
    <article class="gallery-card ${item.wide ? "wide" : ""}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <p class="t-eyebrow">${item.caption}</p>
        <strong>${item.title}</strong>
      </div>
    </article>`).join("");
}

/* ─── OFFERS ─────────────────────────────────────────────────── */
function renderOffers() {
  const grid = qs("#offerGrid");
  if (!grid) return;
  const items = content.offers || [];
  if (!items.length) { grid.innerHTML = `<p style="color:var(--muted);font-size:0.95rem">No packages available yet. <a href="/contact.html" style="color:var(--forest2)">Contact us</a> for a custom quote.</p>`; return; }
  grid.innerHTML = items.map(item => `
    <article class="service-card">
      <div class="service-icon">★</div>
      <h3>${item.title?.[lang] || item.title?.en || ""}</h3>
      <p>${item.body?.[lang] || item.body?.en || ""}</p>
      ${item.price ? `<p style="color:var(--gold);font-weight:700;margin-top:10px">${item.price}</p>` : ""}
    </article>`).join("");
}

/* ─── TESTIMONIALS ─────────────────────────────────────────────── */
function renderTestimonials() {
  const grid = qs("#testimonialGrid");
  if (!grid) return;
  const items = content.testimonials?.length ? content.testimonials : testimonials;
  grid.innerHTML = items.map(item => `
    <article class="testimonial-card">
      <div class="stars">${"★".repeat(Number(item.stars || item.rating || 5))}</div>
      <blockquote>"${item[lang] || item.en || item.quote?.[lang] || item.quote?.en || ""}"</blockquote>
      <div class="t-author">
        <strong>${item.name || "Client"}</strong>
        <span>${item["role_" + lang] || item["role_en"] || item.role?.[lang] || item.role?.en || ""}</span>
      </div>
    </article>`).join("");
}

/* ─── FAQ ─────────────────────────────────────────────────────── */
function renderFaqs() {
  const grid = qs("#faqGrid");
  if (!grid) return;
  grid.innerHTML = faqs.map(item => `
    <details class="faq-item">
      <summary>${item.q}</summary>
      <div class="faq-body">${item[lang] || item.en}</div>
    </details>`).join("");
}

/* ─── CONTACT CHANNELS ─────────────────────────────────────────── */
function renderContactChannels() {
  const el = qs("#contactChannels");
  if (!el) return;
  el.innerHTML = `
    <a class="channel-row" href="https://wa.me/${WHATSAPP_NUMBER}">
      <div class="channel-icon">${whatsappIcon}</div>
      <div><strong>WhatsApp</strong><br><span style="color:var(--muted);font-size:0.82rem">+233 597 154 822 — fastest response</span></div>
    </a>
    <a class="channel-row" href="tel:+233597154822">
      <div class="channel-icon">📞</div>
      <div><strong>Phone</strong><br><span style="color:var(--muted);font-size:0.82rem">+233 597 154 822</span></div>
    </a>
    <a class="channel-row" href="mailto:africonnectgh@gmail.com">
      <div class="channel-icon">✉</div>
      <div><strong>Email</strong><br><span style="color:var(--muted);font-size:0.82rem">africonnectgh@gmail.com</span></div>
    </a>
    <div class="channel-row">
      <div class="channel-icon">📍</div>
      <div><strong>Location</strong><br><span style="color:var(--muted);font-size:0.82rem">Accra, Ghana</span></div>
    </div>`;
}

/* ─── MONEY SECTION ────────────────────────────────────────────── */
function renderMoney() {
  const title = qs("#moneyTitle");
  const body = qs("#moneyBody");
  const money = content.settings?.moneyTransfer;
  if (title) title.textContent = money?.title?.[lang] || t("money.title");
  if (body) body.textContent = money?.body?.[lang] || t("money.copy");
}

/* ─── TRANSLATE STATIC ──────────────────────────────────────────── */
function translateStatic() {
  qsa("[data-i18n]").forEach(node => { node.innerHTML = t(node.dataset.i18n); });
  qsa("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
}

/* ─── SCROLL REVEAL ─────────────────────────────────────────────── */
function initReveal() {
  const items = qsa(".reveal, .service-card, .dest-card, .gallery-card, .how-card, .testimonial-card, .faq-item, .metric");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });
  items.forEach(item => observer.observe(item));
}

/* ─── FILTER ────────────────────────────────────────────────────── */
function initFilters() {
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    qsa("[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    const grid = qs("#destinationGrid");
    if (!grid) return;
    qsa("#destinationGrid .dest-card").forEach((card, i) => {
      const d = destinations[i];
      const show = filter === "All" || d?.tag === filter;
      card.style.display = show ? "" : "none";
    });
  });
}

/* ─── LANG ─────────────────────────────────────────────────────── */
function setLang(next, confirmed = true) {
  lang = next;
  localStorage.setItem("afc_lang", lang);
  if (confirmed) localStorage.setItem("afc_lang_confirmed", "1");
  document.documentElement.lang = lang;
  renderAll();
}

/* ─── RENDER ALL ────────────────────────────────────────────────── */
function renderAll() {
  renderShell();
  translateStatic();
  renderLanguageModal(false);
  renderHero();
  renderMarquee();
  renderServices();
  renderDestinations();
  renderProcess();
  renderGallery();
  renderOffers();
  renderTestimonials();
  renderFaqs();
  renderContactChannels();
  renderMoney();
  initReveal();
  initFilters();
}

/* ─── EVENTS ────────────────────────────────────────────────────── */
document.addEventListener("click", e => {
  const langBtn = e.target.closest("[data-lang]");
  if (langBtn) setLang(langBtn.dataset.lang);

  const pick = e.target.closest("[data-pick-lang]");
  if (pick) setLang(pick.dataset.pickLang);

  if (e.target.closest("#languageFab")) renderLanguageModal(true);

  const dot = e.target.closest("[data-slide]");
  if (dot) { goToSlide(parseInt(dot.dataset.slide)); startSlideshow(); }

  if (e.target.closest(".language-modal") === qs(".language-modal") && !e.target.closest(".language-card")) {
    qs(".language-modal")?.classList.remove("open");
  }
});

document.addEventListener("submit", e => {
  const form = e.target.closest("#quoteForm");
  if (!form) return;
  e.preventDefault();
  const data = new FormData(form);
  const message = `Hello AfriConnect GH,\nMy name is ${data.get("name") || ""}.\nService needed: ${data.get("service") || ""}.\nTravel date: ${data.get("date") || ""}.\nDetails: ${data.get("message") || ""}`;
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

/* ─── INIT ──────────────────────────────────────────────────────── */
async function loadContent() {
  try {
    const res = await fetch("/api/content");
    content = await res.json();
  } catch { content = {}; }
  renderAll();
}

renderShell();
setLang(lang, false);
loadContent();
