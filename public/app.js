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
    "services.title": "A premium local partner for every step in Ghana",
    "services.copy": "We reduce stress for visitors who do not speak the local language and support Ghanaians travelling or doing business in nearby French-speaking countries.",
    "destinations.kicker": "Tour Ghana with local guidance",
    "destinations.title": "Major tourist sites and experiences",
    "destinations.copy": "From heritage castles and canopy walks to waterfalls, beaches, city landmarks and national parks, we help you plan routes that fit your time, budget and language needs.",
    "border.kicker": "Ghana, Cote d'Ivoire, Togo and Benin",
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
    "hero.lead": "Votre passerelle de confiance pour le tourisme, les etudes, les affaires, la traduction et l'accompagnement entre le Ghana anglophone et l'Afrique de l'Ouest francophone.",
    "hero.whatsapp": "Ecrivez-nous",
    "hero.explore": "Decouvrir le Ghana",
    "trust.airport": "Accueil aeroport",
    "trust.translation": "Traduction",
    "trust.tours": "Visites guidees",
    "trust.business": "Appui affaires",
    "announcements.kicker": "Actualites AfriConnect GH",
    "announcements.title": "Annonces",
    "services.kicker": "Ce que nous gerons",
    "services.title": "Un partenaire local premium pour chaque etape au Ghana",
    "services.copy": "Nous reduisons le stress des visiteurs qui ne parlent pas la langue locale et accompagnons les Ghaneens qui voyagent ou travaillent dans les pays francophones voisins.",
    "destinations.kicker": "Visitez le Ghana avec un guide local",
    "destinations.title": "Grands sites touristiques et experiences",
    "destinations.copy": "Des chateaux historiques aux passerelles en foret, cascades, plages, monuments urbains et parcs nationaux, nous preparons des itineraires adaptes a votre temps, budget et langue.",
    "border.kicker": "Ghana, Cote d'Ivoire, Togo et Benin",
    "border.title": "Accompagnement entre l'Afrique de l'Ouest anglophone et francophone",
    "border.copy": "AfriConnect GH aide les visiteurs francophones a se sentir confiants au Ghana et aide les Ghaneens a communiquer, voyager et s'installer dans les pays francophones voisins.",
    "offers.kicker": "Forfaits actuels",
    "offers.title": "Offres et packages de voyage",
    "contact.kicker": "Commencez votre voyage avec confiance",
    "contact.title": "Parlez a AfriConnect GH aujourd'hui",
    "contact.copy": "Envoyez-nous votre date d'arrivee, langue, destination, budget et le type d'aide souhaitee. Nous vous guiderons avant et pendant votre sejour.",
    "footer.admin": "Admin"
  }
};

const images = {
  capeCoast: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG/1200px-Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG",
  elmina: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Elmina_Castle_2010.jpg/1200px-Elmina_Castle_2010.jpg",
  kakum: "https://traveljewels.net/wp-content/uploads/2024/01/IMG_9420-1024x768.jpg",
  mole: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Elephants_in_Mole_National_Park.jpg/1200px-Elephants_in_Mole_National_Park.jpg",
  wli: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wli_Lower_Fall-4.jpg/900px-Wli_Lower_Fall-4.jpg",
  nkrumah: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kwame_nkrumah_grave_accra_ghana.jpg/900px-Kwame_nkrumah_grave_accra_ghana.jpg",
  accra: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Independence_Arch_-_Accra%2C_Ghana.JPG/1200px-Independence_Arch_-_Accra%2C_Ghana.JPG",
  kente: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Kente_weaving_Ghana.jpg/1200px-Kente_weaving_Ghana.jpg",
  bosomtwe: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Lake_Bosumtwi.jpg/1200px-Lake_Bosumtwi.jpg",
  nzulezu: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nzulezo%2C_Ghana.jpg/1200px-Nzulezo%2C_Ghana.jpg",
  beach: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Labadi_Beach_Accra_Ghana.jpg/1200px-Labadi_Beach_Accra_Ghana.jpg",
  aburi: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Aburi_Botanical_Gardens.JPG/1200px-Aburi_Botanical_Gardens.JPG",
  larabanga: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Larabanga_Mosque_Ghana.jpg/1200px-Larabanga_Mosque_Ghana.jpg"
};

const services = [
  { icon: "✈", en: ["Airport welcome and transfer", "Warm pickup, safe transfer, SIM support and first-day orientation."], fr: ["Accueil aeroport et transfert", "Accueil chaleureux, transfert securise, aide SIM et orientation le premier jour."] },
  { icon: "⌂", en: ["Accommodation support", "Hotels, apartments, student housing and neighbourhood advice."], fr: ["Aide au logement", "Hotels, appartements, logements etudiants et conseils de quartier."] },
  { icon: "A", en: ["Translation and interpretation", "French, English and local communication support for appointments and documents."], fr: ["Traduction et interpretation", "Assistance francais, anglais et communication locale pour rendez-vous et documents."] },
  { icon: "◈", en: ["School and university help", "Admissions guidance, campus visits, registration support and student errands."], fr: ["Accompagnement scolaire", "Admissions, visites de campus, inscriptions et demarches etudiantes."] },
  { icon: "▣", en: ["Business and investment errands", "Market visits, supplier meetings, office search and local coordination."], fr: ["Affaires et investissements", "Visites de marche, rendez-vous fournisseurs, recherche de bureaux et coordination locale."] },
  { icon: "◉", en: ["Tourism and guided visits", "Custom Ghana tours with language support, transport planning and local tips."], fr: ["Tourisme et visites guidees", "Circuits personnalises avec appui linguistique, transport et conseils locaux."] },
  { icon: "✓", en: ["Visa and immigration guidance", "Document preparation support, appointment planning and follow-up reminders."], fr: ["Visa et immigration", "Aide aux documents, preparation de rendez-vous et rappels de suivi."] },
  { icon: "↔", en: ["Cross-border travel support", "Help for trips to Cote d'Ivoire, Togo, Benin and other regional routes."], fr: ["Voyage transfrontalier", "Aide pour la Cote d'Ivoire, le Togo, le Benin et autres trajets regionaux."] }
];

const heroSlides = [
  { image: images.capeCoast, place: "Cape Coast Castle", region: "Central Region", en: "Heritage journeys on Ghana's Atlantic coast", fr: "Voyages de memoire sur la cote atlantique" },
  { image: images.kakum, place: "Kakum National Park", region: "Central Region", en: "Rainforest canopy walks with guided support", fr: "Passerelles en foret avec accompagnement" },
  { image: images.wli, place: "Wli Waterfalls", region: "Volta Region", en: "Waterfalls, mountain routes and nature escapes", fr: "Cascades, montagnes et sorties nature" },
  { image: images.accra, place: "Independence Square", region: "Accra", en: "City landmarks, culture and first-day orientation", fr: "Monuments, culture et orientation a Accra" }
];

const destinations = [
  { cat: "heritage", image: images.capeCoast, place: "Cape Coast Castle", region: "Central Region", en: "UNESCO-listed coastal heritage site and powerful history stop.", fr: "Site historique cotier classe UNESCO et etape de memoire importante." },
  { cat: "heritage", image: images.elmina, place: "Elmina Castle", region: "Central Region", en: "One of Ghana's most visited historic castles near Cape Coast.", fr: "L'un des chateaux historiques les plus visites du Ghana pres de Cape Coast." },
  { cat: "nature", image: images.kakum, place: "Kakum National Park", region: "Central Region", en: "Rainforest canopy walkway, hiking and nature education.", fr: "Passerelle en foret tropicale, randonnee et decouverte de la nature." },
  { cat: "wildlife", image: images.mole, place: "Mole National Park", region: "Savannah Region", en: "Ghana's leading safari destination for elephants, antelopes and birdlife.", fr: "Grande destination safari du Ghana pour elephants, antilopes et oiseaux." },
  { cat: "waterfalls", image: images.wli, place: "Wli Waterfalls", region: "Volta Region", en: "Tall waterfall experience with mountain scenery and village routes.", fr: "Grande cascade avec paysages de montagne et parcours villageois." },
  { cat: "waterfalls", image: images.wli, place: "Kintampo Waterfalls", region: "Bono East Region", en: "Refreshing waterfall stop on north-south travel routes.", fr: "Cascade rafraichissante sur les trajets entre le sud et le nord." },
  { cat: "city", image: images.nkrumah, place: "Kwame Nkrumah Memorial Park", region: "Accra", en: "Iconic Accra landmark honouring Ghana's first president.", fr: "Lieu emblematique d'Accra dedie au premier president du Ghana." },
  { cat: "city", image: images.accra, place: "Independence Square", region: "Accra", en: "National landmark for photos, city tours and Ghanaian history.", fr: "Monument national pour photos, visites d'Accra et histoire ghaneenne." },
  { cat: "culture", image: images.kente, place: "Bonwire Kente Village", region: "Ashanti Region", en: "Traditional kente weaving, craft shopping and Ashanti culture.", fr: "Tissage traditionnel du kente, artisanat et culture ashanti." },
  { cat: "nature", image: images.bosomtwe, place: "Lake Bosomtwe", region: "Ashanti Region", en: "Scenic natural lake for relaxation, canoeing and quiet retreats.", fr: "Lac naturel ideal pour repos, pirogue et sejour calme." },
  { cat: "eco", image: images.nzulezu, place: "Nzulezu Stilt Village", region: "Western Region", en: "Unique village on water reached by canoe through wetlands.", fr: "Village unique sur pilotis accessible en pirogue a travers les zones humides." },
  { cat: "wildlife", image: images.mole, place: "Paga Crocodile Pond", region: "Upper East Region", en: "Cultural wildlife stop in northern Ghana.", fr: "Etape culturelle et animaliere dans le nord du Ghana." },
  { cat: "beach", image: images.beach, place: "Ada Foah", region: "Greater Accra Region", en: "Beach, river estuary, boat rides and weekend escapes.", fr: "Plage, embouchure, balades en bateau et week-ends detente." },
  { cat: "nature", image: images.aburi, place: "Aburi Botanical Gardens", region: "Eastern Region", en: "Cool mountain garden, picnic space and family-friendly walks.", fr: "Jardin de montagne frais, pique-nique et promenades familiales." },
  { cat: "wildlife", image: images.aburi, place: "Tafi Atome Monkey Sanctuary", region: "Volta Region", en: "Community ecotourism and guided wildlife encounter.", fr: "Ecotourisme communautaire et rencontre guidee avec la faune." },
  { cat: "heritage", image: images.larabanga, place: "Larabanga Mosque", region: "Savannah Region", en: "Historic mosque and cultural stop near Mole National Park.", fr: "Mosquee historique et etape culturelle pres du parc de Mole." }
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
  ["eco", "Eco tour", "Ecotourisme"]
];

let lang = detectLanguage();
let content = { announcements: [], offers: [], banners: [] };
let activeFilter = "all";
let heroSlide = 0;

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

function renderHeroGallery() {
  const heroMedia = document.querySelector("#heroGallery");
  if (!heroMedia) return;
  heroMedia.innerHTML = heroSlides.map((slide, index) => `
    <article class="hero-slide ${index === heroSlide ? "active" : ""}" aria-hidden="${index === heroSlide ? "false" : "true"}">
      <img src="${slide.image}" alt="${slide.place}" loading="${index === 0 ? "eager" : "lazy"}">
      <div>
        <span>${slide.region}</span>
        <strong>${slide.place}</strong>
        <p>${slide[lang]}</p>
      </div>
    </article>
  `).join("") + `
    <div class="hero-dots">
      ${heroSlides.map((_, index) => `<button type="button" class="${index === heroSlide ? "active" : ""}" data-slide="${index}" aria-label="Show destination ${index + 1}"></button>`).join("")}
    </div>
  `;
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
      <div class="destination-art ${item.cat}" style="background-image: linear-gradient(180deg, rgba(6, 63, 36, 0.04), rgba(6, 63, 36, 0.64)), url('${item.image}')"></div>
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

function renderAll() {
  renderServices();
  renderHeroGallery();
  renderFilters();
  renderDestinations();
  renderContent();
}

async function loadContent() {
  const response = await fetch("/api/content");
  content = await response.json();
  renderContent();
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

document.querySelector("#heroGallery").addEventListener("click", (event) => {
  const button = event.target.closest("[data-slide]");
  if (!button) return;
  heroSlide = Number(button.dataset.slide);
  renderHeroGallery();
});

setInterval(() => {
  heroSlide = (heroSlide + 1) % heroSlides.length;
  renderHeroGallery();
}, 5200);

setLanguage(lang);
loadContent();
