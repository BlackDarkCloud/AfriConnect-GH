const WHATSAPP_NUMBER = "233597154822";

const whatsappIcon = `
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M16.04 3.2A12.7 12.7 0 0 0 5.26 22.63L3.6 28.8l6.31-1.61A12.72 12.72 0 1 0 16.04 3.2Zm0 2.29a10.43 10.43 0 1 1-.01 20.86c-1.82 0-3.6-.47-5.17-1.37l-.37-.21-3.75.96 1-3.66-.24-.38a10.42 10.42 0 0 1 8.54-16.2Zm-4.47 5.54c-.23 0-.6.09-.91.43-.31.34-1.2 1.18-1.2 2.87 0 1.69 1.23 3.33 1.4 3.56.17.23 2.38 3.8 5.86 5.17 2.9 1.14 3.49.91 4.12.85.63-.06 2.03-.83 2.32-1.64.29-.8.29-1.49.2-1.64-.09-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.77-1.69-1.02-.91-1.72-2.04-1.92-2.38-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.59Z"/>
  </svg>`;

const translations = {
  en: {
    "nav.welcome": "Welcome",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.showcase": "Showcase",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "cta.whatsapp": "Chat on WhatsApp",
    "hero.kicker": "Travel and tour support in Ghana",
    "hero.title": "Your bilingual partner for a smooth stay in Ghana.",
    "hero.copy": "AfriConnect GH supports visitors, students, families, business travellers and Ghanaians moving across English and French-speaking West Africa.",
    "hero.primary": "Plan my trip",
    "hero.secondary": "View services",
    "hero.note": "Airport pickup, translation, tours, accommodation support, money transfer guidance and cross-border assistance.",
    "home.infoTitle": "What customers should know before booking",
    "home.infoCopy": "Send your travel date, destination, language, number of people, budget range and the support you need. We reply with a clear plan, timing and quote.",
    "home.process": "How it works",
    "home.audience": "Who we support",
    "services.kicker": "Services",
    "services.title": "Practical travel, tour and settlement services.",
    "services.copy": "Choose one service or combine everything into a full support package.",
    "about.kicker": "About AfriConnect GH",
    "about.title": "Built for travellers who need trusted local support.",
    "about.copy": "We help people communicate, move, pay, settle and enjoy Ghana with less stress. Our work is personal, bilingual and built around real local needs.",
    "showcase.kicker": "Showcase",
    "showcase.title": "Popular Ghana routes and tourist experiences.",
    "showcase.copy": "These are examples of trips and support routes we can arrange. Every itinerary can be adjusted for time, budget and language.",
    "gallery.kicker": "Gallery",
    "gallery.title": "Customer moments and Ghana experiences.",
    "gallery.copy": "Use the admin panel to add your own customer images, group tours, airport welcome moments and service memories.",
    "contact.kicker": "Contact",
    "contact.title": "Tell us what you need and we will guide you.",
    "contact.copy": "For the fastest response, send us your trip details on WhatsApp.",
    "form.name": "Full name",
    "form.service": "Service needed",
    "form.date": "Travel date",
    "form.message": "What do you need help with?",
    "form.send": "Send request on WhatsApp",
    "money.title": "Money transfer assistance",
    "money.copy": "We guide clients through reliable money transfer options, local payment steps, mobile money support and safe payment coordination during their stay.",
    "feedback.title": "Client feedback",
    "faq.title": "Questions customers ask",
    "footer.tagline": "Bilingual travel, tours, settlement and money transfer support in Ghana.",
    "modal.title": "Choose your language",
    "modal.copy": "We will remember your choice for your next visit.",
    "modal.en": "Continue in English",
    "modal.fr": "Continuer en francais",
    "float.language": "Language",
    "footer.admin": "Admin"
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
    "hero.title": "Votre partenaire bilingue pour un sejour simple au Ghana.",
    "hero.copy": "AfriConnect GH accompagne visiteurs, etudiants, familles, voyageurs d'affaires et Ghaneens entre l'Afrique de l'Ouest anglophone et francophone.",
    "hero.primary": "Planifier mon voyage",
    "hero.secondary": "Voir les services",
    "hero.note": "Accueil aeroport, traduction, visites, logement, aide transfert d'argent et accompagnement transfrontalier.",
    "home.infoTitle": "Ce que les clients doivent savoir avant de reserver",
    "home.infoCopy": "Envoyez votre date de voyage, destination, langue, nombre de personnes, budget et besoin. Nous repondons avec un plan clair, le timing et le devis.",
    "home.process": "Comment ca marche",
    "home.audience": "Qui nous accompagnons",
    "services.kicker": "Services",
    "services.title": "Services pratiques pour voyage, tourisme et installation.",
    "services.copy": "Choisissez un service ou combinez tout dans un package complet.",
    "about.kicker": "A propos d'AfriConnect GH",
    "about.title": "Cree pour les voyageurs qui veulent un accompagnement local fiable.",
    "about.copy": "Nous aidons les personnes a communiquer, se deplacer, payer, s'installer et profiter du Ghana avec moins de stress. Notre travail est personnel, bilingue et adapte aux besoins locaux.",
    "showcase.kicker": "Vitrine",
    "showcase.title": "Routes et experiences touristiques populaires au Ghana.",
    "showcase.copy": "Voici des exemples de voyages et d'accompagnements que nous pouvons organiser. Chaque itineraire peut etre adapte au temps, budget et langue.",
    "gallery.kicker": "Galerie",
    "gallery.title": "Moments clients et experiences au Ghana.",
    "gallery.copy": "Utilisez l'admin pour ajouter vos images clients, groupes, accueils aeroport et souvenirs de service.",
    "contact.kicker": "Contact",
    "contact.title": "Dites-nous ce dont vous avez besoin.",
    "contact.copy": "Pour une reponse rapide, envoyez les details de votre voyage sur WhatsApp.",
    "form.name": "Nom complet",
    "form.service": "Service souhaite",
    "form.date": "Date de voyage",
    "form.message": "De quoi avez-vous besoin ?",
    "form.send": "Envoyer sur WhatsApp",
    "money.title": "Assistance transfert d'argent",
    "money.copy": "Nous guidons les clients dans les options fiables de transfert d'argent, les paiements locaux, le mobile money et la coordination securisee pendant leur sejour.",
    "feedback.title": "Avis clients",
    "faq.title": "Questions frequentes",
    "footer.tagline": "Assistance bilingue pour voyage, tourisme, installation et transfert d'argent au Ghana.",
    "modal.title": "Choisissez votre langue",
    "modal.copy": "Nous garderons votre choix pour votre prochaine visite.",
    "modal.en": "Continue in English",
    "modal.fr": "Continuer en francais",
    "float.language": "Langue",
    "footer.admin": "Admin"
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

const serviceItems = [
  { icon: "AIR", en: ["Airport pickup and transfer", "Meet-and-greet, luggage help, SIM support, hotel transfer and first-day orientation."], fr: ["Accueil aeroport et transfert", "Accueil, aide bagages, carte SIM, transfert hotel et orientation du premier jour."] },
  { icon: "TR", en: ["Translation and interpretation", "French-English support for appointments, errands, documents, schools, markets and meetings."], fr: ["Traduction et interpretation", "Assistance francais-anglais pour rendez-vous, documents, ecoles, marches et reunions."] },
  { icon: "TO", en: ["Tours and guided visits", "Accra tours, heritage trips, waterfalls, beaches, safari planning and cultural experiences."], fr: ["Tours et visites guidees", "Visites d'Accra, patrimoine, cascades, plages, safari et experiences culturelles."] },
  { icon: "HM", en: ["Accommodation support", "Hotels, apartments, student housing, neighbourhood guidance and move-in coordination."], fr: ["Aide au logement", "Hotels, appartements, logements etudiants, conseils de quartier et installation."] },
  { icon: "ED", en: ["School and student support", "Admissions guidance, campus visits, registration errands and student arrival support."], fr: ["Assistance scolaire", "Admissions, visites de campus, inscriptions et accompagnement des etudiants."] },
  { icon: "BZ", en: ["Business and investment errands", "Market visits, supplier meetings, office search, introductions and local coordination."], fr: ["Affaires et investissements", "Visites de marche, fournisseurs, bureaux, mises en relation et coordination locale."] },
  { icon: "MT", en: ["Money transfer assistance", "Guidance for mobile money, local payments and safe transfer coordination while in Ghana."], fr: ["Assistance transfert d'argent", "Conseils mobile money, paiements locaux et coordination de transferts securises au Ghana."] },
  { icon: "WA", en: ["Cross-border support", "Help for Ghanaians and visitors moving between Ghana, Cote d'Ivoire, Togo and Benin."], fr: ["Assistance transfrontaliere", "Aide entre le Ghana, la Cote d'Ivoire, le Togo et le Benin."] }
];

const destinations = [
  { image: images.accra, title: "Accra City Orientation", region: "Accra", en: "Airport arrival, Independence Square, markets, restaurants, mobile money and city navigation.", fr: "Arrivee aeroport, Independence Square, marches, restaurants, mobile money et orientation." },
  { image: images.cape, title: "Cape Coast Heritage Route", region: "Central Region", en: "Cape Coast Castle, Elmina, Kakum options, transport and translation support.", fr: "Cape Coast Castle, Elmina, Kakum, transport et traduction." },
  { image: images.wli, title: "Volta Nature Escape", region: "Volta Region", en: "Wli Waterfalls, mountain routes, local guide coordination and flexible timing.", fr: "Wli Waterfalls, montagnes, guide local et horaires flexibles." },
  { image: images.mole, title: "Mole Safari Planning", region: "Savannah Region", en: "Northern Ghana travel planning, safari timing, transport and cultural stops.", fr: "Organisation nord Ghana, safari, transport et etapes culturelles." },
  { image: images.beach, title: "Beach and Weekend Trips", region: "Greater Accra", en: "Labadi, Ada, relaxation days, group transport and simple itinerary planning.", fr: "Labadi, Ada, detente, transport de groupe et itineraire simple." },
  { image: images.north, title: "Northern Culture Route", region: "Savannah Region", en: "Larabanga Mosque, cultural visits and regional travel coordination.", fr: "Mosquee Larabanga, visites culturelles et coordination regionale." }
];

const processSteps = [
  ["Share your need", "Send your destination, date, group size, language and budget.", "Envoyez destination, date, nombre de personnes, langue et budget."],
  ["Get a clear plan", "We respond with recommended support, timing and estimated cost.", "Nous envoyons le plan, le timing et le cout estime."],
  ["Travel with support", "We coordinate pickup, translation, tours, errands or payment guidance.", "Nous coordonnons accueil, traduction, visites, demarches ou paiements."]
];

const audiences = [
  ["Foreign visitors", "Language and local navigation support.", "Langue et orientation locale."],
  ["Students", "Arrival, campus and registration errands.", "Arrivee, campus et inscriptions."],
  ["Business travellers", "Meetings, suppliers and local coordination.", "Rendez-vous, fournisseurs et coordination."],
  ["Ghanaians travelling abroad", "French-country communication and travel support.", "Assistance vers les pays francophones."]
];

const faqs = [
  ["What information should I send?", "Travel date, arrival point, destination, number of people, language, budget and services needed.", "Date, arrivee, destination, nombre, langue, budget et services souhaites."],
  ["Do you speak French and English?", "Yes. AfriConnect GH is bilingual and supports French-speaking visitors in Ghana.", "Oui. AfriConnect GH est bilingue et accompagne les francophones au Ghana."],
  ["Can you help with money transfer?", "Yes. We guide clients with reliable local payment and mobile money coordination.", "Oui. Nous guidons les clients pour paiements locaux et mobile money."],
  ["Can I book only one service?", "Yes. You can book airport pickup, translation, tours, accommodation support or a full package.", "Oui. Vous pouvez reserver un seul service ou un package complet."]
];

let content = {};
let lang = localStorage.getItem("afc_lang") || (((navigator.language || "en").toLowerCase().startsWith("fr")) ? "fr" : "en");

function t(key) {
  return translations[lang]?.[key] || translations.en[key] || key;
}

function localized(item, key) {
  return item?.[key]?.[lang] || item?.[key]?.en || "";
}

function qs(selector) {
  return document.querySelector(selector);
}

function htmlWhatsapp(labelKey = "cta.whatsapp") {
  return `${whatsappIcon}<span>${t(labelKey)}</span>`;
}

function setLang(next, confirmed = true) {
  lang = next;
  localStorage.setItem("afc_lang", lang);
  if (confirmed) localStorage.setItem("afc_lang_confirmed", "1");
  document.documentElement.lang = lang;
  renderAll();
}

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
          <div class="lang-switch"><button type="button" data-lang="en">EN</button><button type="button" data-lang="fr">FR</button></div>
          <a class="btn primary whatsapp-btn nav-cta" href="https://wa.me/${WHATSAPP_NUMBER}">${htmlWhatsapp()}</a>
        </div>
      </div>`;
  }
  const footer = qs(".site-footer");
  if (footer) {
    footer.innerHTML = `
      <div><strong>AfriConnect GH</strong><p>${localized(content.settings?.footer, "tagline") || t("footer.tagline")}</p></div>
      <nav>
        <a href="/services.html" data-i18n="nav.services"></a>
        <a href="/about.html" data-i18n="nav.about"></a>
        <a href="/showcase.html" data-i18n="nav.showcase"></a>
        <a href="/gallery.html" data-i18n="nav.gallery"></a>
        <a href="/contact.html" data-i18n="nav.contact"></a>
        <a href="/admin.html" data-i18n="footer.admin"></a>
      </nav>
      <div class="footer-contact"><a href="tel:+233597154822">+233 597 154 822</a><a href="mailto:africonnectgh@gmail.com">africonnectgh@gmail.com</a><span>Accra, Ghana</span></div>`;
  }
  const floating = qs(".floating-actions");
  if (floating) floating.innerHTML = `<button type="button" id="languageFab">${t("float.language")}</button><a class="whatsapp-btn" href="https://wa.me/${WHATSAPP_NUMBER}">${htmlWhatsapp("cta.whatsapp")}</a>`;
}

function translateStatic() {
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
  document.querySelectorAll(".whatsapp-btn, a[href*='wa.me']").forEach((node) => {
    if (!node.querySelector("svg")) node.insertAdjacentHTML("afterbegin", whatsappIcon);
  });
}

function renderLanguageModal(force = false) {
  const modal = qs("#languageModal");
  if (!modal) return;
  const open = force || !localStorage.getItem("afc_lang_confirmed");
  modal.classList.toggle("open", open);
  modal.innerHTML = `<div class="language-card"><img src="/assets/africonnect-logo.png" alt="AfriConnect GH"><h2>${t("modal.title")}</h2><p>${t("modal.copy")}</p><div><button type="button" data-pick-lang="en">${t("modal.en")}</button><button type="button" data-pick-lang="fr">${t("modal.fr")}</button></div></div>`;
}

function renderHome() {
  const hero = qs("#heroGallery");
  if (hero) {
    hero.innerHTML = destinations.slice(0, 4).map((item, index) => `<article class="${index === 0 ? "featured" : ""}"><img src="${item.image}" alt="${item.title}"><div><span>${item.region}</span><strong>${item.title}</strong></div></article>`).join("");
  }
  const categories = qs("#categoryRail");
  if (categories) categories.innerHTML = serviceItems.slice(0, 6).map((item) => `<article class="category-card"><span>${item.icon}</span><strong>${item[lang][0]}</strong></article>`).join("");
  const process = qs("#processGrid");
  if (process) process.innerHTML = processSteps.map((step, index) => `<article class="info-card"><span>0${index + 1}</span><h3>${step[0]}</h3><p>${lang === "fr" ? step[2] : step[1]}</p></article>`).join("");
  const audience = qs("#audienceGrid");
  if (audience) audience.innerHTML = audiences.map((item) => `<article class="info-card"><h3>${item[0]}</h3><p>${lang === "fr" ? item[2] : item[1]}</p></article>`).join("");
}

function renderServices() {
  const grid = qs("#serviceGrid");
  if (!grid) return;
  grid.innerHTML = serviceItems.map((item) => `<article class="service-card"><span>${item.icon}</span><h3>${item[lang][0]}</h3><p>${item[lang][1]}</p></article>`).join("");
}

function renderDestinations() {
  const grid = qs("#destinationGrid");
  if (!grid) return;
  grid.innerHTML = destinations.map((item) => `<article class="destination-card"><img src="${item.image}" alt="${item.title}"><div><p>${item.region}</p><h3>${item.title}</h3><span>${item[lang]}</span><a class="mini-link" href="https://wa.me/${WHATSAPP_NUMBER}">${t("actions.book")}</a></div></article>`).join("");
}

function renderGallery() {
  const grid = qs("#galleryGrid");
  if (!grid) return;
  const fallback = destinations.map((item) => ({ image: item.image, title: { en: item.title, fr: item.title }, caption: { en: item.en, fr: item.fr } }));
  const items = content.gallery?.length ? content.gallery : fallback;
  grid.innerHTML = items.map((item, index) => `<article class="gallery-card ${index % 5 === 0 ? "wide" : ""}"><img src="${item.image}" alt="${localized(item, "title")}"><div><span>${localized(item, "caption")}</span><strong>${localized(item, "title")}</strong></div></article>`).join("");
}

function renderOffers() {
  const grid = qs("#offerGrid");
  if (!grid) return;
  grid.innerHTML = (content.offers || []).map((item) => `<article class="offer-card"><span>${localized(item, "tag")}</span><h3>${localized(item, "title")}</h3><p>${localized(item, "body")}</p><strong>${item.price || ""}</strong></article>`).join("");
}

function renderTestimonials() {
  const grid = qs("#testimonialGrid");
  if (!grid) return;
  const items = content.testimonials || [];
  grid.innerHTML = items.length ? items.map((item) => `<article class="testimonial-card"><strong>${Number(item.rating || 5)}/5</strong><p>${localized(item, "quote")}</p><h3>${item.name || "Client"}</h3><span>${localized(item, "role")}</span></article>`).join("") : "";
}

function renderFaqs() {
  const grid = qs("#faqGrid");
  if (!grid) return;
  grid.innerHTML = faqs.map((item) => `<details><summary>${item[0]}</summary><p>${lang === "fr" ? item[2] : item[1]}</p></details>`).join("");
}

function renderMoney() {
  const title = qs("#moneyTitle");
  const body = qs("#moneyBody");
  const money = content.settings?.moneyTransfer;
  if (title) title.textContent = localized(money, "title") || t("money.title");
  if (body) body.textContent = localized(money, "body") || t("money.copy");
}

function renderAll() {
  renderShell();
  translateStatic();
  renderLanguageModal(false);
  renderHome();
  renderServices();
  renderDestinations();
  renderGallery();
  renderOffers();
  renderTestimonials();
  renderFaqs();
  renderMoney();
  reveal();
}

function reveal() {
  const items = document.querySelectorAll(".reveal, .service-card, .destination-card, .gallery-card, .info-card, .offer-card, .testimonial-card");
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }), { threshold: 0.08 });
  items.forEach((item) => observer.observe(item));
}

async function loadContent() {
  try {
    const response = await fetch("/api/content");
    content = await response.json();
  } catch {
    content = {};
  }
  renderAll();
}

document.addEventListener("click", (event) => {
  const langButton = event.target.closest("[data-lang]");
  if (langButton) setLang(langButton.dataset.lang);
  const pick = event.target.closest("[data-pick-lang]");
  if (pick) setLang(pick.dataset.pickLang);
  if (event.target.closest("#languageFab")) renderLanguageModal(true);
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("#quoteForm");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const message = `Hello AfriConnect GH, my name is ${data.get("name") || ""}. I need ${data.get("service") || ""}. Travel date: ${data.get("date") || ""}. Details: ${data.get("message") || ""}`;
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

renderShell();
setLang(lang, false);
loadContent();
