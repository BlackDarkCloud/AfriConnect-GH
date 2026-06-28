const translations = {
  en: {
    "nav.services": "Services",
    "nav.destinations": "Destinations",
    "nav.offers": "Offers",
    "nav.contact": "Contact",
    "hero.eyebrow": "Bilingual travel and settlement support",
    "hero.title": "AfriConnect GH",
    "hero.lead": "Your trusted bridge for Ghana travel, tourism, studies, business, translation and cross-border support across English and French-speaking West Africa.",
    "hero.whatsapp": "WhatsApp us",
    "hero.explore": "Explore Ghana",
    "trust.airport": "Airport pickup",
    "trust.translation": "Translation",
    "trust.tours": "Guided tours",
    "trust.business": "Business support",
    "announcements.kicker": "Latest from AfriConnect GH",
    "announcements.title": "Announcements",
    "services.kicker": "What we handle",
    "services.title": "One partner for every step in Ghana",
    "services.copy": "We reduce stress for visitors who do not speak the local language and support Ghanaians travelling or doing business in nearby French-speaking countries.",
    "destinations.kicker": "Tour Ghana with local guidance",
    "destinations.title": "Major tourist sites and experiences",
    "destinations.copy": "From heritage castles and canopy walks to waterfalls, beaches, city landmarks and national parks, we help you plan routes that fit your time, budget and language needs.",
    "border.kicker": "Ghana, Côte d'Ivoire, Togo and Benin",
    "border.title": "Support across English and French-speaking West Africa",
    "border.copy": "AfriConnect GH helps French-speaking visitors feel confident in Ghana and helps Ghanaians communicate, travel and settle smoothly in neighbouring francophone countries.",
    "offers.kicker": "Current packages",
    "offers.title": "Offers and travel packages",
    "contact.kicker": "Start your trip with confidence",
    "contact.title": "Talk to AfriConnect GH today",
    "contact.copy": "Send us your arrival date, language, destination, budget and the type of help you need. We will guide you before and during your stay.",
    "footer.admin": "Admin"
  },
  fr: {
    "nav.services": "Services",
    "nav.destinations": "Destinations",
    "nav.offers": "Offres",
    "nav.contact": "Contact",
    "hero.eyebrow": "Assistance bilingue pour voyager et s'installer",
    "hero.title": "AfriConnect GH",
    "hero.lead": "Votre passerelle de confiance pour le tourisme, les études, les affaires, la traduction et l'accompagnement entre le Ghana anglophone et l'Afrique de l'Ouest francophone.",
    "hero.whatsapp": "Écrivez-nous",
    "hero.explore": "Découvrir le Ghana",
    "trust.airport": "Accueil aéroport",
    "trust.translation": "Traduction",
    "trust.tours": "Visites guidées",
    "trust.business": "Appui affaires",
    "announcements.kicker": "Actualités AfriConnect GH",
    "announcements.title": "Annonces",
    "services.kicker": "Ce que nous gérons",
    "services.title": "Un seul partenaire pour chaque étape au Ghana",
    "services.copy": "Nous réduisons le stress des visiteurs qui ne parlent pas la langue locale et accompagnons les Ghanéens qui voyagent ou travaillent dans les pays francophones voisins.",
    "destinations.kicker": "Visitez le Ghana avec un guide local",
    "destinations.title": "Grands sites touristiques et expériences",
    "destinations.copy": "Des châteaux historiques aux passerelles en forêt, cascades, plages, monuments urbains et parcs nationaux, nous préparons des itinéraires adaptés à votre temps, budget et langue.",
    "border.kicker": "Ghana, Côte d'Ivoire, Togo et Bénin",
    "border.title": "Accompagnement entre l'Afrique de l'Ouest anglophone et francophone",
    "border.copy": "AfriConnect GH aide les visiteurs francophones à se sentir confiants au Ghana et aide les Ghanéens à communiquer, voyager et s'installer dans les pays francophones voisins.",
    "offers.kicker": "Forfaits actuels",
    "offers.title": "Offres et packages de voyage",
    "contact.kicker": "Commencez votre voyage avec confiance",
    "contact.title": "Parlez à AfriConnect GH aujourd'hui",
    "contact.copy": "Envoyez-nous votre date d'arrivée, langue, destination, budget et le type d'aide souhaitée. Nous vous guiderons avant et pendant votre séjour.",
    "footer.admin": "Admin"
  }
};

const services = [
  { icon: "✈", en: ["Airport welcome and transfer", "Warm pickup, safe transfer, SIM support and first-day orientation."], fr: ["Accueil à l'aéroport et transfert", "Accueil chaleureux, transfert sécurisé, aide SIM et orientation le premier jour."] },
  { icon: "🏠", en: ["Accommodation support", "Hotels, apartments, student housing and neighbourhood advice."], fr: ["Aide au logement", "Hôtels, appartements, logements étudiants et conseils de quartier."] },
  { icon: "🗣", en: ["Translation and interpretation", "French, English and local communication support for appointments and documents."], fr: ["Traduction et interprétation", "Assistance français, anglais et communication locale pour rendez-vous et documents."] },
  { icon: "🎓", en: ["School and university help", "Admissions guidance, campus visits, registration support and student errands."], fr: ["Accompagnement scolaire", "Admissions, visites de campus, inscriptions et démarches étudiantes."] },
  { icon: "💼", en: ["Business and investment errands", "Market visits, supplier meetings, office search and local coordination."], fr: ["Affaires et investissements", "Visites de marché, rendez-vous fournisseurs, recherche de bureaux et coordination locale."] },
  { icon: "📸", en: ["Tourism and guided visits", "Custom Ghana tours with language support, transport planning and local tips."], fr: ["Tourisme et visites guidées", "Circuits personnalisés avec appui linguistique, transport et conseils locaux."] },
  { icon: "🛂", en: ["Visa and immigration guidance", "Document preparation support, appointment planning and follow-up reminders."], fr: ["Visa et immigration", "Aide aux documents, préparation de rendez-vous et rappels de suivi."] },
  { icon: "🚌", en: ["Cross-border travel support", "Help for trips to Côte d'Ivoire, Togo, Benin and other regional routes."], fr: ["Voyage transfrontalier", "Aide pour la Côte d'Ivoire, le Togo, le Bénin et autres trajets régionaux."] }
];

const destinations = [
  { cat: "heritage", place: "Cape Coast Castle", region: "Central Region", en: "UNESCO-listed coastal heritage site and powerful history stop.", fr: "Site historique côtier classé UNESCO et étape de mémoire importante." },
  { cat: "heritage", place: "Elmina Castle", region: "Central Region", en: "One of Ghana's most visited historic castles near Cape Coast.", fr: "L'un des châteaux historiques les plus visités du Ghana près de Cape Coast." },
  { cat: "nature", place: "Kakum National Park", region: "Central Region", en: "Rainforest canopy walkway, hiking and nature education.", fr: "Passerelle en forêt tropicale, randonnée et découverte de la nature." },
  { cat: "wildlife", place: "Mole National Park", region: "Savannah Region", en: "Ghana's leading safari destination for elephants, antelopes and birdlife.", fr: "Grande destination safari du Ghana pour éléphants, antilopes et oiseaux." },
  { cat: "waterfalls", place: "Wli Waterfalls", region: "Volta Region", en: "Tall waterfall experience with mountain scenery and village routes.", fr: "Grande cascade avec paysages de montagne et parcours villageois." },
  { cat: "waterfalls", place: "Kintampo Waterfalls", region: "Bono East Region", en: "Refreshing waterfall stop on north-south travel routes.", fr: "Cascade rafraîchissante sur les trajets entre le sud et le nord." },
  { cat: "city", place: "Kwame Nkrumah Memorial Park", region: "Accra", en: "Iconic Accra landmark honouring Ghana's first president.", fr: "Lieu emblématique d'Accra dédié au premier président du Ghana." },
  { cat: "city", place: "Independence Square", region: "Accra", en: "National landmark for photos, city tours and Ghanaian history.", fr: "Monument national pour photos, visites d'Accra et histoire ghanéenne." },
  { cat: "culture", place: "Bonwire Kente Village", region: "Ashanti Region", en: "Traditional kente weaving, craft shopping and Ashanti culture.", fr: "Tissage traditionnel du kente, artisanat et culture ashanti." },
  { cat: "nature", place: "Lake Bosomtwe", region: "Ashanti Region", en: "Scenic natural lake for relaxation, canoeing and quiet retreats.", fr: "Lac naturel idéal pour repos, pirogue et séjour calme." },
  { cat: "eco", place: "Nzulezu Stilt Village", region: "Western Region", en: "Unique village on water reached by canoe through wetlands.", fr: "Village unique sur pilotis accessible en pirogue à travers les zones humides." },
  { cat: "wildlife", place: "Paga Crocodile Pond", region: "Upper East Region", en: "Cultural wildlife stop in northern Ghana.", fr: "Étape culturelle et animalière dans le nord du Ghana." },
  { cat: "beach", place: "Ada Foah", region: "Greater Accra Region", en: "Beach, river estuary, boat rides and weekend escapes.", fr: "Plage, embouchure, balades en bateau et week-ends détente." },
  { cat: "nature", place: "Aburi Botanical Gardens", region: "Eastern Region", en: "Cool mountain garden, picnic space and family-friendly walks.", fr: "Jardin de montagne frais, pique-nique et promenades familiales." },
  { cat: "wildlife", place: "Tafi Atome Monkey Sanctuary", region: "Volta Region", en: "Community ecotourism and guided wildlife encounter.", fr: "Écotourisme communautaire et rencontre guidée avec les singes." },
  { cat: "heritage", place: "Larabanga Mosque", region: "Savannah Region", en: "Historic mosque and cultural stop near Mole National Park.", fr: "Mosquée historique et étape culturelle près du parc de Mole." }
];

const filters = [
  ["all", "All", "Tous"],
  ["heritage", "Heritage", "Patrimoine"],
  ["nature", "Nature", "Nature"],
  ["wildlife", "Wildlife", "Faune"],
  ["waterfalls", "Waterfalls", "Cascades"],
  ["city", "Accra city", "Accra"],
  ["culture", "Culture", "Culture"],
  ["beach", "Beach", "Plage"],
  ["eco", "Eco tour", "Écotourisme"]
];

let lang = detectLanguage();
let content = { announcements: [], offers: [], banners: [] };
let activeFilter = "all";

function detectLanguage() {
  const saved = localStorage.getItem("afc_lang");
  if (saved) return saved;
  const language = navigator.language?.toLowerCase() || "en";
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const frenchZones = ["Abidjan", "Lome", "Porto", "Cotonou", "Paris"];
  if (language.startsWith("fr") || frenchZones.some((zone) => timeZone.includes(zone))) return "fr";
  return "en";
}

function t(key) {
  return translations[lang][key] || translations.en[key] || key;
}

function localized(item, key) {
  return item?.[key]?.[lang] || item?.[key]?.en || "";
}

function setLanguage(next) {
  lang = next;
  localStorage.setItem("afc_lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  renderAll();
}

function renderServices() {
  document.querySelector("#serviceGrid").innerHTML = services.map((service) => {
    const [title, body] = service[lang];
    return `<article class="service-card"><span>${service.icon}</span><h3>${title}</h3><p>${body}</p></article>`;
  }).join("");
}

function renderFilters() {
  document.querySelector("#destinationFilters").innerHTML = filters.map(([id, en, fr]) => (
    `<button class="${activeFilter === id ? "active" : ""}" data-filter="${id}">${lang === "fr" ? fr : en}</button>`
  )).join("");
}

function renderDestinations() {
  const shown = destinations.filter((item) => activeFilter === "all" || item.cat === activeFilter);
  document.querySelector("#destinationGrid").innerHTML = shown.map((item) => `
    <article class="destination-card">
      <div class="destination-art ${item.cat}">${item.place.split(" ").map((word) => word[0]).slice(0, 2).join("")}</div>
      <div>
        <p>${item.region}</p>
        <h3>${item.place}</h3>
        <span>${item[lang]}</span>
      </div>
    </article>
  `).join("");
}

function renderContent() {
  const announcements = content.announcements.slice(0, 3);
  document.querySelector("#announcementList").innerHTML = announcements.length ? announcements.map((item) => `
    <article>
      <time>${item.date || ""}</time>
      <strong>${localized(item, "title")}</strong>
      <p>${localized(item, "body")}</p>
    </article>
  `).join("") : `<p>${lang === "fr" ? "Aucune annonce pour le moment." : "No announcements yet."}</p>`;

  document.querySelector("#offerGrid").innerHTML = content.offers.map((item) => `
    <article class="offer-card">
      <span>${localized(item, "tag")}</span>
      <h3>${localized(item, "title")}</h3>
      <p>${localized(item, "body")}</p>
      <strong>${item.price || ""}</strong>
    </article>
  `).join("");
}

function renderBanner() {
  const banner = content.banners?.[0];
  if (!banner) return;
  const heroMedia = document.querySelector(".hero-media");
  heroMedia.innerHTML = `<img src="${banner.image}" alt="${localized(banner, "title")}">`;
}

function renderAll() {
  renderServices();
  renderFilters();
  renderDestinations();
  renderContent();
  renderBanner();
}

async function loadContent() {
  const response = await fetch("/api/content");
  content = await response.json();
  renderAll();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#destinationFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderDestinations();
});

setLanguage(lang);
loadContent();
