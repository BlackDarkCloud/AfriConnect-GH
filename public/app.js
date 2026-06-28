const WHATSAPP_NUMBER = "233597154822";
const STORAGE_LANG = "afc_lang";
const STORAGE_CONFIRMED = "afc_lang_confirmed";

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const whatsappIcon = `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.04 3.2A12.7 12.7 0 0 0 5.26 22.63L3.6 28.8l6.31-1.61A12.72 12.72 0 1 0 16.04 3.2Zm0 2.29a10.43 10.43 0 1 1-.01 20.86c-1.82 0-3.6-.47-5.17-1.37l-.37-.21-3.75.96 1-3.66-.24-.38a10.42 10.42 0 0 1 8.54-16.2Zm-4.47 5.54c-.23 0-.6.09-.91.43-.31.34-1.2 1.18-1.2 2.87 0 1.69 1.23 3.33 1.4 3.56.17.23 2.38 3.8 5.86 5.17 2.9 1.14 3.49.91 4.12.85.63-.06 2.03-.83 2.32-1.64.29-.8.29-1.49.2-1.64-.09-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.77-1.69-1.02-.91-1.72-2.04-1.92-2.38-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.59Z"/></svg>`;
const arrowIcon = `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ghanaFlag = `<span class="ghana-flag" aria-label="Ghana flag" role="img"><span></span></span>`;

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
    "home.servicesCopy": "From airport arrival to settlement, translation, tours, and payment guidance - we handle it all.",
    "home.destKicker": "Curated experiences",
    "home.destTitle": "Explore Ghana's finest destinations",
    "home.destCopy": "From coastal heritage to northern savannahs - guided routes tailored to your time, language and budget.",
    "home.infoTitle": "Ready to plan your trip?",
    "home.infoCopy": "Send your travel date, destination, language, group size and budget. We reply with a clear plan, timeline and quote.",
    "home.processKicker": "Simple process",
    "home.process": "How it works",
    "home.processCopy": "Three steps to a seamless Ghana experience.",
    "home.askDirect": "Ask us directly",
    "home.ctaKicker": "Get started today",
    "home.ctaTitle": "Ready to travel Ghana with confidence?",
    "home.ctaCopy": "Send us your trip details and we will build a personalised plan for your stay - in English or French.",
    "home.ctaServices": "View all services",
    "services.kicker": "What we handle",
    "services.title": "Travel, tour & settlement services",
    "services.copy": "Choose one service or combine everything into a full support package. Every journey is different - we adapt to yours.",
    "about.kicker": "About AfriConnect GH",
    "about.title": "A trusted bridge between people, language and place",
    "about.copy": "We are a Ghana-based bilingual support company helping visitors, students, families, entrepreneurs and travellers communicate, settle and move safely.",
    "about.story": "Our story",
    "about.storyTitle": "Built for travellers who need trusted local support",
    "about.storyOne": "We help people communicate, move, pay, settle and enjoy Ghana with less stress. Our work is personal, bilingual and built around real local needs.",
    "about.storyTwo": "Whether you are arriving at Kotoka Airport for the first time or a Ghanaian heading to Abidjan, we bridge the gap between language, culture and practical needs.",
    "about.valueOne": "<strong>Bilingual expertise</strong> - French and English support across every service we offer.",
    "about.valueTwo": "<strong>Local knowledge</strong> - Deep roots in Ghana with networks across West Africa.",
    "about.valueThree": "<strong>Personal service</strong> - Every client is different. We plan around your needs.",
    "border.kicker": "Cross-border support",
    "border.title": "Support across English and French-speaking West Africa",
    "border.copy": "AfriConnect GH helps French-speaking visitors feel confident in Ghana and helps Ghanaians communicate, travel and settle smoothly in neighbouring francophone countries.",
    "destinations.kicker": "Curated routes",
    "destinations.title": "Premium Ghana destinations",
    "destinations.copy": "From heritage castles and canopy walks to waterfalls, beaches, city landmarks and national parks - routes tailored to your time, budget and language.",
    "offers.kicker": "Current packages",
    "offers.title": "Travel packages & offers",
    "offers.empty": "No packages available yet. Contact us for a custom quote.",
    "gallery.kicker": "Visual stories",
    "gallery.title": "Client moments & Ghana experiences",
    "gallery.copy": "Real moments from our clients' journeys across Ghana. Add your own photos via the admin panel.",
    "contact.kicker": "Get in touch",
    "contact.title": "Talk to AfriConnect GH today",
    "contact.copy": "Send your arrival date, language, destination, budget and the type of help you need. We guide you before and during your stay.",
    "contact.reach": "Reach us",
    "contact.available": "We are available 24/7",
    "contact.fast": "Fastest response via WhatsApp. We are here for every question before, during and after your Ghana visit.",
    "contact.formTitle": "Send your trip details",
    "form.name": "Full name",
    "form.service": "Service needed",
    "form.date": "Travel date",
    "form.message": "Trip details",
    "form.send": "Send via WhatsApp",
    "form.namePlaceholder": "Your full name",
    "form.servicePlaceholder": "Airport pickup, guided tour, translation",
    "form.messagePlaceholder": "Tell us your destination, group size, language preference and budget range",
    "money.kicker": "Money transfer",
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
    "ghana.based": "Ghana-based",
    "ghana.identity": "Ghanaian travel support",
    "footer.tagline": "Bilingual travel, tours, settlement and money transfer support in Ghana.",
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.admin": "Admin",
    "footer.rights": "All rights reserved.",
    "modal.title": "Choose your language",
    "modal.copy": "We will remember your preference for your next visit.",
    "modal.en": "Continue in English",
    "modal.fr": "Continuer en francais",
    "float.language": "Language",
    "book.route": "Book this route",
    "channel.fast": "fastest response",
    "channel.location": "Accra, Ghana"
  },
  fr: {
    "nav.welcome": "Accueil",
    "nav.services": "Services",
    "nav.about": "A propos",
    "nav.showcase": "Vitrine",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "cta.whatsapp": "WhatsApp",
    "hero.kicker": "Voyage et tourisme au Ghana",
    "hero.title": "Votre partenaire <em>bilingue</em> au Ghana.",
    "hero.copy": "AfriConnect GH accompagne visiteurs, etudiants, familles, voyageurs d'affaires et Ghaneens entre l'Afrique de l'Ouest anglophone et francophone.",
    "hero.primary": "Planifier mon voyage",
    "hero.secondary": "Voir les services",
    "home.servicesTitle": "Tous les services dont vous avez besoin au Ghana",
    "home.servicesCopy": "De l'arrivee a l'aeroport jusqu'a l'installation, traduction, visites et paiements - nous gerons tout.",
    "home.destKicker": "Experiences selectionnees",
    "home.destTitle": "Les plus belles destinations du Ghana",
    "home.destCopy": "Du patrimoine cotier aux savanes du nord - itineraires adaptes a votre temps, langue et budget.",
    "home.infoTitle": "Pret a planifier votre voyage ?",
    "home.infoCopy": "Envoyez votre date, destination, langue, groupe et budget. Nous repondons avec un plan clair, le timing et le devis.",
    "home.processKicker": "Processus simple",
    "home.process": "Comment ca marche",
    "home.processCopy": "Trois etapes pour une experience Ghana sans stress.",
    "home.askDirect": "Parlez-nous directement",
    "home.ctaKicker": "Commencez aujourd'hui",
    "home.ctaTitle": "Pret a voyager au Ghana avec confiance ?",
    "home.ctaCopy": "Envoyez les details de votre voyage et nous preparons un plan personnalise - en francais ou en anglais.",
    "home.ctaServices": "Voir tous les services",
    "services.kicker": "Ce que nous gerons",
    "services.title": "Services voyage, tourisme et installation",
    "services.copy": "Choisissez un service ou combinez tout dans un package complet. Chaque voyage est different - nous nous adaptons au votre.",
    "about.kicker": "A propos d'AfriConnect GH",
    "about.title": "Un pont de confiance entre les personnes, la langue et le lieu",
    "about.copy": "Nous sommes une societe bilingue basee au Ghana aidant visiteurs, etudiants, familles, entrepreneurs et voyageurs a communiquer, s'installer et se deplacer en securite.",
    "about.story": "Notre histoire",
    "about.storyTitle": "Cree pour les voyageurs qui veulent un soutien local fiable",
    "about.storyOne": "Nous aidons les clients a communiquer, se deplacer, payer, s'installer et profiter du Ghana avec moins de stress. Notre service est personnel, bilingue et adapte aux vrais besoins locaux.",
    "about.storyTwo": "Que vous arriviez a Kotoka Airport pour la premiere fois ou que vous soyez Ghaneen en route vers Abidjan, nous relions langue, culture et besoins pratiques.",
    "about.valueOne": "<strong>Expertise bilingue</strong> - Assistance francais et anglais dans tous nos services.",
    "about.valueTwo": "<strong>Connaissance locale</strong> - Racines solides au Ghana et reseaux en Afrique de l'Ouest.",
    "about.valueThree": "<strong>Service personnel</strong> - Chaque client est different. Nous planifions selon vos besoins.",
    "border.kicker": "Soutien transfrontalier",
    "border.title": "Soutien en Afrique de l'Ouest anglophone et francophone",
    "border.copy": "AfriConnect GH aide les francophones a se sentir a l'aise au Ghana et aide les Ghaneens a communiquer, voyager et s'installer dans les pays francophones voisins.",
    "destinations.kicker": "Itineraires selectionnes",
    "destinations.title": "Destinations premium au Ghana",
    "destinations.copy": "Chateaux du patrimoine, passerelles, cascades, plages, monuments et parcs nationaux - routes adaptees a votre temps, budget et langue.",
    "offers.kicker": "Offres actuelles",
    "offers.title": "Forfaits et offres de voyage",
    "offers.empty": "Aucun forfait disponible pour le moment. Contactez-nous pour un devis sur mesure.",
    "gallery.kicker": "Histoires visuelles",
    "gallery.title": "Moments clients et experiences au Ghana",
    "gallery.copy": "Moments reels des voyages de nos clients au Ghana. Ajoutez vos propres photos depuis le panneau admin.",
    "contact.kicker": "Contactez-nous",
    "contact.title": "Parlez a AfriConnect GH aujourd'hui",
    "contact.copy": "Envoyez votre date d'arrivee, langue, destination, budget et le type d'aide souhaite. Nous vous guidons avant et pendant votre sejour.",
    "contact.reach": "Nous joindre",
    "contact.available": "Nous sommes disponibles 24/7",
    "contact.fast": "Reponse la plus rapide via WhatsApp. Nous sommes la avant, pendant et apres votre visite au Ghana.",
    "contact.formTitle": "Envoyez les details du voyage",
    "form.name": "Nom complet",
    "form.service": "Service souhaite",
    "form.date": "Date de voyage",
    "form.message": "Details du voyage",
    "form.send": "Envoyer via WhatsApp",
    "form.namePlaceholder": "Votre nom complet",
    "form.servicePlaceholder": "Accueil aeroport, visite guidee, traduction",
    "form.messagePlaceholder": "Indiquez destination, groupe, langue preferee et budget",
    "money.kicker": "Transfert d'argent",
    "money.title": "Assistance transfert d'argent",
    "money.cta": "Renseignements transferts",
    "money.copy": "Nous guidons les clients dans les options fiables de transfert d'argent, paiements locaux, mobile money et coordination securisee pendant leur sejour.",
    "feedback.kicker": "Avis clients",
    "feedback.title": "Ce que disent les voyageurs",
    "faq.title": "Questions frequentes",
    "faq.copy": "Tout ce que vous devez savoir avant de reserver avec AfriConnect GH.",
    "metrics.support": "Soutien voyage",
    "metrics.languages": "Langues principales",
    "metrics.countries": "Routes ouest-africaines",
    "metrics.sites": "Experiences Ghana",
    "ghana.based": "Base au Ghana",
    "ghana.identity": "Assistance voyage ghaneenne",
    "footer.tagline": "Soutien bilingue pour voyage, tourisme, installation et transfert d'argent au Ghana.",
    "footer.company": "Entreprise",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.admin": "Admin",
    "footer.rights": "Tous droits reserves.",
    "modal.title": "Choisissez votre langue",
    "modal.copy": "Nous memoriserons votre choix pour votre prochaine visite.",
    "modal.en": "Continue in English",
    "modal.fr": "Continuer en francais",
    "float.language": "Langue",
    "book.route": "Reserver ce circuit",
    "channel.fast": "reponse rapide",
    "channel.location": "Accra, Ghana"
  }
};

const images = {
  cape: "/assets/tourism/cape-coast-castle.jpg",
  elmina: "/assets/tourism/elmina-castle.jpg",
  wli: "/assets/tourism/wli-waterfalls.jpg",
  mole: "/assets/tourism/mole-national-park.jpg",
  accra: "/assets/tourism/independence-square.jpg",
  nkrumah: "/assets/tourism/kwame-nkrumah.jpg",
  beach: "/assets/tourism/labadi-beach.jpg",
  north: "/assets/tourism/larabanga-mosque.jpg"
};

const slideshow = [
  { image: images.accra, region: "Greater Accra", en: "Arrive with confidence in Accra", fr: "Arrivez en confiance a Accra" },
  { image: images.cape, region: "Central Region", en: "Discover Ghana's coastal heritage", fr: "Decouvrez le patrimoine cotier" },
  { image: images.wli, region: "Volta Region", en: "Explore Ghana's waterfalls", fr: "Explorez les cascades du Ghana" },
  { image: images.mole, region: "Savannah Region", en: "Plan a northern safari", fr: "Organisez un safari au nord" },
  { image: images.beach, region: "Greater Accra", en: "Unwind on Ghana's beaches", fr: "Profitez des plages du Ghana" }
];

const heroTags = [
  { en: "Ghana-based", fr: "Base au Ghana" },
  { en: "Airport pickup", fr: "Accueil aeroport" },
  { en: "Guided tours", fr: "Visites guidees" },
  { en: "Translation", fr: "Traduction" },
  { en: "Money transfer", fr: "Transfert d'argent" },
  { en: "24/7 support", fr: "Support 24/7" }
];

const serviceItems = [
  { icon: "AIR", en: ["Airport pickup & transfer", "Meet-and-greet, luggage help, SIM support, hotel transfer and first-day orientation in Ghana."], fr: ["Accueil aeroport & transfert", "Accueil, aide bagages, carte SIM, transfert hotel et orientation du premier jour."] },
  { icon: "TR", en: ["Translation & interpretation", "French-English support for appointments, documents, schools, markets, hospitals and meetings."], fr: ["Traduction & interpretation", "Assistance francais-anglais pour rendez-vous, documents, ecoles, marches et reunions."] },
  { icon: "TO", en: ["Tours & guided visits", "Accra city tours, heritage trips, waterfall hikes, beach days, safari planning and cultural experiences."], fr: ["Tours & visites guidees", "Visites d'Accra, patrimoine, cascades, plages, safari et experiences culturelles."] },
  { icon: "HOM", en: ["Accommodation support", "Hotels, apartments, student housing, neighbourhood guidance and move-in coordination across Accra."], fr: ["Aide au logement", "Hotels, appartements, logements etudiants, conseils de quartier et installation."] },
  { icon: "EDU", en: ["School & student support", "Admissions guidance, campus visits, registration errands and student arrival support across Ghana."], fr: ["Assistance scolaire", "Admissions, visites de campus, inscriptions et accompagnement des etudiants."] },
  { icon: "BIZ", en: ["Business & investment", "Market visits, supplier meetings, office search, local introductions and business coordination."], fr: ["Affaires & investissements", "Marches, fournisseurs, bureaux, mises en relation et coordination locale."] },
  { icon: "PAY", en: ["Money transfer assistance", "Guidance for mobile money, local payments and safe transfer coordination while in Ghana."], fr: ["Transfert d'argent", "Conseils mobile money, paiements locaux et coordination de transferts securises."] },
  { icon: "WA", en: ["Cross-border support", "Help for Ghanaians and visitors moving between Ghana, Cote d'Ivoire, Togo and Benin."], fr: ["Assistance transfrontaliere", "Aide entre le Ghana, la Cote d'Ivoire, le Togo et le Benin."] }
];

const destinations = [
  { image: images.accra, title: "Accra City Orientation", region: "Greater Accra", tag: "city", en: "Airport arrival, Independence Square, Makola Market, mobile money and city navigation.", fr: "Arrivee aeroport, Independence Square, marches, mobile money et orientation." },
  { image: images.cape, title: "Cape Coast Heritage Route", region: "Central Region", tag: "heritage", en: "Cape Coast Castle, Elmina, Kakum National Park canopy walk, transport and translation.", fr: "Cape Coast Castle, Elmina, Kakum, transport et traduction." },
  { image: images.wli, title: "Volta Nature Escape", region: "Volta Region", tag: "nature", en: "Wli Waterfalls, mountain routes, local guide coordination and flexible timing.", fr: "Wli Waterfalls, montagnes, guide local et horaires flexibles." },
  { image: images.mole, title: "Mole Safari Planning", region: "Savannah Region", tag: "safari", en: "Northern Ghana travel, safari timing, transport and cultural village stops.", fr: "Organisation nord Ghana, safari, transport et etapes culturelles." },
  { image: images.beach, title: "Beach & Weekend Trips", region: "Greater Accra", tag: "beach", en: "Labadi, Ada Estuary, relaxation days, group transport and simple itinerary planning.", fr: "Labadi, Ada, detente, transport de groupe et itineraire simple." },
  { image: images.north, title: "Northern Culture Route", region: "Savannah Region", tag: "heritage", en: "Larabanga Mosque, Mole National Park, Tamale orientation and regional travel.", fr: "Mosquee Larabanga, Mole National Park, Tamale et coordination regionale." }
];

const processSteps = [
  { num: "01", en: ["Share your needs", "Send your destination, date, group size, language and budget via WhatsApp."], fr: ["Partagez vos besoins", "Envoyez destination, date, groupe, langue et budget via WhatsApp."] },
  { num: "02", en: ["Receive your plan", "We respond with a personalised itinerary, recommended services, timing and cost estimate."], fr: ["Recevez votre plan", "Nous repondons avec un itineraire personnalise, les services, le timing et le devis."] },
  { num: "03", en: ["Travel with support", "We coordinate pickup, translation, tours, errands and payment guidance throughout your stay."], fr: ["Voyagez avec soutien", "Nous coordonnons accueil, traduction, visites, demarches et paiements pendant votre sejour."] }
];

const testimonials = [
  { rating: 5, name: "Jean-Pierre M.", role: { en: "Business traveller, Abidjan", fr: "Voyageur d'affaires, Abidjan" }, quote: { en: "AfriConnect made my first visit to Ghana stress-free. Airport pickup, translation at meetings and local guidance were excellent.", fr: "AfriConnect a rendu ma premiere visite au Ghana simple. Accueil aeroport, traduction en reunion et conseils locaux excellents." } },
  { rating: 5, name: "Fatou D.", role: { en: "Student visitor", fr: "Etudiante visiteuse" }, quote: { en: "They helped me understand school registration, housing options and everyday movement around Accra.", fr: "Ils m'ont aidee pour l'inscription, le logement et les deplacements quotidiens a Accra." } },
  { rating: 5, name: "Marie-Claire T.", role: { en: "Tourist, France", fr: "Touriste, France" }, quote: { en: "The Cape Coast heritage tour was organised, bilingual and very comfortable for our family.", fr: "Le tour de Cape Coast etait organise, bilingue et tres confortable pour notre famille." } }
];

const faqs = [
  { q: { en: "What information should I send?", fr: "Quelles informations dois-je envoyer ?" }, a: { en: "Travel date, arrival point, destination, number of people, language preference, budget range and services needed.", fr: "Date, point d'arrivee, destination, nombre de personnes, langue, budget et services souhaites." } },
  { q: { en: "Do you speak French and English?", fr: "Parlez-vous francais et anglais ?" }, a: { en: "Yes. AfriConnect GH is bilingual and supports French-speaking visitors throughout Ghana.", fr: "Oui. AfriConnect GH est bilingue et accompagne les visiteurs francophones au Ghana." } },
  { q: { en: "Can you help with money transfer?", fr: "Pouvez-vous aider avec les transferts d'argent ?" }, a: { en: "Yes. We guide clients through reliable local payment and mobile money coordination during their stay.", fr: "Oui. Nous guidons les clients pour les paiements locaux et mobile money pendant leur sejour." } },
  { q: { en: "Can I book only one service?", fr: "Puis-je reserver un seul service ?" }, a: { en: "Absolutely. You can book one service or combine several into a full support package.", fr: "Bien sur. Vous pouvez reserver un service ou combiner plusieurs services dans un package complet." } },
  { q: { en: "How quickly do you respond?", fr: "A quelle vitesse repondez-vous ?" }, a: { en: "We usually respond quickly on WhatsApp. For urgent travel needs, send complete details in your first message.", fr: "Nous repondons rapidement sur WhatsApp. Pour une urgence, envoyez les details complets dans votre premier message." } }
];

const marqueeItems = [
  { en: "Airport pickup", fr: "Accueil aeroport" },
  { en: "Guided tours", fr: "Visites guidees" },
  { en: "French + English", fr: "Francais + Anglais" },
  { en: "Cape Coast", fr: "Cape Coast" },
  { en: "Wli Waterfalls", fr: "Chutes de Wli" },
  { en: "Mole National Park", fr: "Parc de Mole" },
  { en: "Mobile money support", fr: "Aide mobile money" },
  { en: "24/7 support", fr: "Support 24/7" }
];

let content = {};
let currentSlide = 0;
let slideTimer = null;
let revealObserver = null;

function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_LANG);
  if (saved === "en" || saved === "fr") return saved;
  const browserLang = (navigator.language || "").toLowerCase();
  return browserLang.startsWith("fr") ? "fr" : "en";
}

let lang = getInitialLang();
document.documentElement.lang = lang;

function t(key) {
  return translations[lang]?.[key] || translations.en[key] || key;
}

function localText(value, fallback = "") {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.fr || fallback;
}

function waLink(message = "Hello AfriConnect GH, I need assistance.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderShell() {
  const navLinks = [
    ["/index.html", "nav.welcome", "welcome"],
    ["/services.html", "nav.services", "services"],
    ["/about.html", "nav.about", "about"],
    ["/showcase.html", "nav.showcase", "showcase"],
    ["/gallery.html", "nav.gallery", "gallery"],
    ["/contact.html", "nav.contact", "contact"]
  ];
  const page = document.body.dataset.page || "welcome";
  const header = qs(".site-header");
  if (header) {
    header.innerHTML = `
      <div class="nav-shell">
        <a class="brand" href="/index.html" aria-label="AfriConnect GH home">
          <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
          <span class="brand-country">${ghanaFlag}<span>${t("ghana.based")}</span></span>
        </a>
        <nav class="nav" aria-label="Main navigation">
          ${navLinks.map(([href, key, id]) => `<a class="${page === id ? "active" : ""}" href="${href}">${t(key)}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <div class="lang-switch" aria-label="Language switcher">
            <button type="button" class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
            <button type="button" class="${lang === "fr" ? "active" : ""}" data-lang="fr">FR</button>
          </div>
          <a class="btn primary small nav-cta whatsapp-btn" href="${waLink()}">${whatsappIcon}<span>${t("cta.whatsapp")}</span></a>
        </div>
      </div>`;
  }

  const footer = qs(".site-footer");
  if (footer) {
    const tagline = localText(content.settings?.footer?.tagline, t("footer.tagline"));
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
          <div class="footer-country">${ghanaFlag}<span>${t("ghana.identity")}</span></div>
          <p>${tagline}</p>
        </div>
        <div class="footer-col">
          <h4>${t("footer.company")}</h4>
          <a href="/about.html">${t("nav.about")}</a>
          <a href="/showcase.html">${t("nav.showcase")}</a>
          <a href="/gallery.html">${t("nav.gallery")}</a>
          <a href="/admin.html">${t("footer.admin")}</a>
        </div>
        <div class="footer-col">
          <h4>${t("footer.services")}</h4>
          <a href="/services.html">${serviceItems[0][lang][0]}</a>
          <a href="/services.html">${serviceItems[1][lang][0]}</a>
          <a href="/services.html">${serviceItems[2][lang][0]}</a>
          <a href="/services.html">${serviceItems[6][lang][0]}</a>
        </div>
        <div class="footer-col">
          <h4>${t("footer.contact")}</h4>
          <a href="${waLink()}">+233 597 154 822</a>
          <a href="mailto:africonnectgh@gmail.com">africonnectgh@gmail.com</a>
          <span>${t("channel.location")}</span>
          <a href="/contact.html">${t("nav.contact")}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} AfriConnect GH. ${t("footer.rights")}</p>
        <a href="${waLink()}">${t("cta.whatsapp")}</a>
      </div>`;
  }

  const floating = qs(".floating-actions");
  if (floating) {
    floating.innerHTML = `
      <button class="fab fab-lang" id="languageFab" type="button">${t("float.language")}</button>
      <a class="fab fab-wa whatsapp-btn" href="${waLink()}">${whatsappIcon}<span>WhatsApp</span></a>`;
  }
}

function translateStatic() {
  qsa("[data-i18n]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18n);
  });
  qsa("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  qsa("[data-lang]").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
}

function renderLanguageModal(force = false) {
  const modal = qs("#languageModal");
  if (!modal) return;
  const shouldOpen = force || !localStorage.getItem(STORAGE_CONFIRMED);
  modal.classList.toggle("open", shouldOpen);
  modal.innerHTML = `
    <div class="language-card">
      <img src="/assets/africonnect-logo.png" alt="AfriConnect GH">
      <h2>${t("modal.title")}</h2>
      <p>${t("modal.copy")}</p>
      <div class="lang-btns">
        <button type="button" class="${lang === "en" ? "lang-active" : ""}" data-pick-lang="en">${t("modal.en")}</button>
        <button type="button" class="${lang === "fr" ? "lang-active" : ""}" data-pick-lang="fr">${t("modal.fr")}</button>
      </div>
    </div>`;
}

function renderHero() {
  const slideshowEl = qs("#heroSlideshow");
  if (!slideshowEl) return;
  currentSlide = Math.min(currentSlide, slideshow.length - 1);
  slideshowEl.innerHTML = slideshow.map((slide, index) => `
    <article class="${index === currentSlide ? "active" : ""}">
      <img src="${slide.image}" alt="${slide[lang] || slide.en}" loading="${index === 0 ? "eager" : "lazy"}">
    </article>`).join("");

  const nav = qs("#heroNav");
  if (nav) {
    nav.innerHTML = slideshow.map((_, index) => `
      <button class="hero-dot ${index === currentSlide ? "active" : ""}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>`).join("");
  }

  const headline = qs("#heroHeadline");
  if (headline) headline.innerHTML = t("hero.title");

  const tags = qs("#heroTags");
  if (tags) {
    tags.innerHTML = heroTags.map((tag) => `<span class="hero-tag">${localText(tag)}</span>`).join("");
  }

  const stats = qs("#heroStats");
  if (stats) {
    stats.innerHTML = `
      <div class="hero-stat-card"><strong>24/7</strong><span>${t("metrics.support")}</span></div>
      <div class="hero-stat-card"><strong>4+</strong><span>${t("metrics.countries")}</span></div>
      <div class="hero-stat-card ghana-card">${ghanaFlag}<strong>GH</strong><span>${t("ghana.identity")}</span></div>
      <a class="hero-quick-link" href="/services.html">${t("nav.services")} ${arrowIcon}</a>
      <a class="hero-quick-link" href="/contact.html">${t("contact.kicker")} ${arrowIcon}</a>`;
  }
  startSlideshow();
}

function goToSlide(index) {
  const slides = qsa("#heroSlideshow article");
  const dots = qsa("#heroNav .hero-dot");
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

function startSlideshow() {
  clearInterval(slideTimer);
  if (!qs("#heroSlideshow")) return;
  slideTimer = window.setInterval(() => goToSlide(currentSlide + 1), 5200);
}

function renderMarquee() {
  const track = qs("#marqueeTrack");
  if (!track) return;
  track.innerHTML = [...marqueeItems, ...marqueeItems].map((item) => `
    <span class="marquee-item">${localText(item)}<span class="marquee-sep">+</span></span>`).join("");
}

function renderServices() {
  const grid = qs("#serviceGrid");
  if (!grid) return;
  grid.innerHTML = serviceItems.map((item) => `
    <article class="service-card">
      <div class="service-icon">${item.icon}</div>
      <h3>${item[lang][0]}</h3>
      <p>${item[lang][1]}</p>
    </article>`).join("");
}

function destinationCard(destination, index = 0) {
  const message = `${lang === "fr" ? "Bonjour" : "Hello"} AfriConnect GH, ${lang === "fr" ? "je suis interesse par" : "I am interested in"}: ${destination.title}`;
  return `
    <article class="dest-card ${index === 0 ? "large" : ""}" data-destination-tag="${destination.tag}">
      <img src="${destination.image}" alt="${destination.title}" loading="lazy">
      <div class="dest-info">
        <p class="t-eyebrow">${destination.region}</p>
        <h3>${destination.title}</h3>
        <p>${destination[lang] || destination.en}</p>
        <a class="dest-book" href="${waLink(message)}">${t("book.route")} ${arrowIcon}</a>
      </div>
    </article>`;
}

function renderDestinations() {
  const homeGrid = qs("#destGrid");
  if (homeGrid) {
    homeGrid.innerHTML = destinations.slice(0, 5).map(destinationCard).join("");
  }

  const fullGrid = qs("#destinationGrid");
  if (fullGrid) {
    fullGrid.innerHTML = destinations.map(destinationCard).join("");
  }

  const filters = qs("#destinationFilters");
  if (filters) {
    const filterLabels = {
      all: { en: "All", fr: "Tous" },
      city: { en: "City", fr: "Ville" },
      heritage: { en: "Heritage", fr: "Patrimoine" },
      nature: { en: "Nature", fr: "Nature" },
      safari: { en: "Safari", fr: "Safari" },
      beach: { en: "Beach", fr: "Plage" }
    };
    const tags = ["all", ...new Set(destinations.map((item) => item.tag))];
    filters.innerHTML = tags.map((tag, index) => `
      <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${tag}">${localText(filterLabels[tag], tag)}</button>`).join("");
  }
}

function applyDestinationFilter(filter) {
  qsa("#destinationFilters [data-filter]").forEach((btn) => btn.classList.toggle("active", btn.dataset.filter === filter));
  qsa("#destinationGrid .dest-card").forEach((card) => {
    card.style.display = filter === "all" || card.dataset.destinationTag === filter ? "" : "none";
  });
}

function renderProcess() {
  const grid = qs("#processGrid");
  if (!grid) return;
  grid.innerHTML = processSteps.map((step) => `
    <div class="how-card">
      <div class="how-num">${step.num}</div>
      <h3>${step[lang][0]}</h3>
      <p>${step[lang][1]}</p>
    </div>`).join("");
}

function renderGallery() {
  const grid = qs("#galleryGrid");
  if (!grid) return;
  const fallback = destinations.map((item, index) => ({
    image: item.image,
    title: { en: item.title, fr: item.title },
    caption: { en: item.region, fr: item.region },
    wide: index === 0 || index === 3
  }));
  const source = Array.isArray(content.gallery) && content.gallery.length ? content.gallery : fallback;
  grid.innerHTML = source.map((item, index) => `
    <article class="gallery-card ${(item.wide || index % 5 === 0) ? "wide" : ""}">
      <img src="${item.image}" alt="${localText(item.title, "AfriConnect GH")}" loading="lazy">
      <div class="gallery-overlay">
        <p class="t-eyebrow">${localText(item.caption, "AfriConnect GH")}</p>
        <strong>${localText(item.title, "Ghana experience")}</strong>
      </div>
    </article>`).join("");
}

function renderOffers() {
  const grid = qs("#offerGrid");
  if (!grid) return;
  const items = Array.isArray(content.offers) ? content.offers : [];
  if (!items.length) {
    grid.innerHTML = `<article class="service-card"><div class="service-icon">GH</div><h3>${t("offers.title")}</h3><p>${t("offers.empty")}</p></article>`;
    return;
  }
  grid.innerHTML = items.map((item) => `
    <article class="service-card">
      <div class="service-icon">${localText(item.tag, "GH").slice(0, 3).toUpperCase()}</div>
      <h3>${localText(item.title)}</h3>
      <p>${localText(item.body)}</p>
      ${item.price ? `<p class="offer-price">${item.price}</p>` : ""}
    </article>`).join("");
}

function renderTestimonials() {
  const grid = qs("#testimonialGrid");
  if (!grid) return;
  const items = Array.isArray(content.testimonials) && content.testimonials.length ? content.testimonials : testimonials;
  grid.innerHTML = items.map((item) => {
    const rating = Number(item.rating || item.stars || 5);
    return `
      <article class="testimonial-card">
        <div class="stars">${Array.from({ length: rating }, () => "&#9733;").join("")}</div>
        <blockquote>"${localText(item.quote, item[lang] || item.en || "")}"</blockquote>
        <div class="t-author">
          <strong>${item.name || "Client"}</strong>
          <span>${localText(item.role, item[`role_${lang}`] || item.role_en || "")}</span>
        </div>
      </article>`;
  }).join("");
}

function renderFaqs() {
  const grid = qs("#faqGrid");
  if (!grid) return;
  grid.innerHTML = faqs.map((item) => `
    <details class="faq-item">
      <summary>${localText(item.q)}</summary>
      <div class="faq-body">${localText(item.a)}</div>
    </details>`).join("");
}

function renderContactChannels() {
  const el = qs("#contactChannels");
  if (!el) return;
  el.innerHTML = `
    <a class="channel-row" href="${waLink()}">
      <div class="channel-icon">${whatsappIcon}</div>
      <div><strong>WhatsApp</strong><br><span>+233 597 154 822 - ${t("channel.fast")}</span></div>
    </a>
    <a class="channel-row" href="tel:+233597154822">
      <div class="channel-icon">TEL</div>
      <div><strong>Phone</strong><br><span>+233 597 154 822</span></div>
    </a>
    <a class="channel-row" href="mailto:africonnectgh@gmail.com">
      <div class="channel-icon">MAIL</div>
      <div><strong>Email</strong><br><span>africonnectgh@gmail.com</span></div>
    </a>
    <div class="channel-row">
      <div class="channel-icon">ACC</div>
      <div><strong>Location</strong><br><span>${t("channel.location")}</span></div>
    </div>`;
}

function renderMoney() {
  const title = qs("#moneyTitle");
  const body = qs("#moneyBody");
  const money = content.settings?.moneyTransfer || {};
  if (title) title.textContent = localText(money.title, t("money.title"));
  if (body) body.textContent = localText(money.body, t("money.copy"));
}

function initReveal() {
  if (!("IntersectionObserver" in window)) {
    qsa(".reveal, .service-card, .dest-card, .gallery-card, .how-card, .testimonial-card, .faq-item, .metric").forEach((item) => item.classList.add("visible"));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });
  qsa(".reveal, .service-card, .dest-card, .gallery-card, .how-card, .testimonial-card, .faq-item, .metric").forEach((item) => revealObserver.observe(item));
}

function setLang(next, confirmed = true) {
  if (next !== "en" && next !== "fr") return;
  lang = next;
  localStorage.setItem(STORAGE_LANG, lang);
  if (confirmed) localStorage.setItem(STORAGE_CONFIRMED, "1");
  document.documentElement.lang = lang;
  renderAll();
}

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
}

document.addEventListener("click", (event) => {
  const langBtn = event.target.closest("[data-lang]");
  if (langBtn) setLang(langBtn.dataset.lang);

  const pick = event.target.closest("[data-pick-lang]");
  if (pick) setLang(pick.dataset.pickLang);

  if (event.target.closest("#languageFab")) renderLanguageModal(true);

  const dot = event.target.closest("[data-slide]");
  if (dot) {
    goToSlide(Number(dot.dataset.slide));
    startSlideshow();
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) applyDestinationFilter(filter.dataset.filter);

  const modal = qs("#languageModal");
  if (modal && event.target === modal) modal.classList.remove("open");
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("#quoteForm");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const greeting = lang === "fr" ? "Bonjour AfriConnect GH" : "Hello AfriConnect GH";
  const message = [
    greeting,
    `${t("form.name")}: ${data.get("name") || ""}`,
    `${t("form.service")}: ${data.get("service") || ""}`,
    `${t("form.date")}: ${data.get("date") || ""}`,
    `${t("form.message")}: ${data.get("message") || ""}`
  ].join("\n");
  window.location.href = waLink(message);
});

window.addEventListener("scroll", () => {
  qs(".site-header")?.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

async function loadContent() {
  try {
    const response = await fetch("/api/content", { headers: { Accept: "application/json" } });
    content = response.ok ? await response.json() : {};
  } catch {
    content = {};
  }
  renderAll();
}

renderAll();
loadContent();
