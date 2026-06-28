const loginView = document.querySelector("#loginView");
const adminView = document.querySelector("#adminView");
const contentList = document.querySelector("#contentList");
const adminStatus = document.querySelector("#adminStatus");

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: options.body instanceof FormData ? {} : { "Content-Type": "application/json" },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}

function notify(message, type = "success") {
  adminStatus.textContent = message;
  adminStatus.className = `admin-status ${type}`;
}

function showAdmin(show) {
  loginView.classList.toggle("hidden", show);
  adminView.classList.toggle("hidden", !show);
}

function text(item, key) {
  return item?.[key]?.en || item?.[key]?.fr || "";
}

function formJson(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function fillSettings(content) {
  const money = content.settings?.moneyTransfer;
  if (money) {
    document.querySelector("#moneyForm [name='titleEn']").value = money.title?.en || "";
    document.querySelector("#moneyForm [name='titleFr']").value = money.title?.fr || "";
    document.querySelector("#moneyForm [name='bodyEn']").value = money.body?.en || "";
    document.querySelector("#moneyForm [name='bodyFr']").value = money.body?.fr || "";
  }
  const footer = content.settings?.footer;
  if (footer) {
    document.querySelector("#footerForm [name='taglineEn']").value = footer.tagline?.en || "";
    document.querySelector("#footerForm [name='taglineFr']").value = footer.tagline?.fr || "";
  }
}

function renderContent(content) {
  fillSettings(content);
  const groups = [
    ["announcements", "Announcements"],
    ["offers", "Offers"],
    ["banners", "Banners"],
    ["gallery", "Customer gallery"],
    ["testimonials", "Feedback"]
  ];
  contentList.innerHTML = groups.map(([key, label]) => `
    <div class="content-group">
      <h3>${label}</h3>
      ${(content[key] || []).map((item) => `
        <article>
          <div>
            <strong>${text(item, "title") || item.name || text(item, "quote")}</strong>
            <p>${text(item, "body") || text(item, "caption") || text(item, "quote") || item.price || ""}</p>
            ${item.image ? `<img src="${item.image}" alt="">` : ""}
          </div>
          <button class="btn danger small" data-delete="${key}" data-id="${item.id}">Delete</button>
        </article>
      `).join("") || "<p>No items yet.</p>"}
    </div>
  `).join("");
}

async function loadContent() {
  const content = await api("/api/content");
  renderContent(content);
  return content;
}

async function checkSession() {
  const session = await api("/api/session");
  showAdmin(session.authenticated);
  if (session.authenticated) {
    await loadContent();
    notify("Admin ready. If saving fails on Vercel, set GITHUB_REPO and GITHUB_TOKEN in Environment Variables.", "info");
  }
}

function handleJsonForm(selector, endpoint, success) {
  document.querySelector(selector).addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      notify("Saving...", "info");
      await api(endpoint, { method: "POST", body: JSON.stringify(formJson(form)) });
      if (!["#moneyForm", "#footerForm"].includes(selector)) form.reset();
      await loadContent();
      notify(success);
    } catch (error) {
      notify(error.message, "error");
    }
  });
}

function handleUploadForm(selector, endpoint, success) {
  document.querySelector(selector).addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      notify("Uploading...", "info");
      await api(endpoint, { method: "POST", body: new FormData(form) });
      form.reset();
      await loadContent();
      notify(success);
    } catch (error) {
      notify(error.message, "error");
    }
  });
}

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  try {
    await api("/api/login", { method: "POST", body: JSON.stringify(formJson(form)) });
    form.reset();
    showAdmin(true);
    await loadContent();
    notify("Signed in successfully.");
  } catch (error) {
    alert(error.message);
  }
});

document.querySelector("#logoutButton").addEventListener("click", async () => {
  await api("/api/logout", { method: "POST", body: "{}" });
  showAdmin(false);
});

handleJsonForm("#announcementForm", "/api/admin/announcements", "Announcement published.");
handleJsonForm("#offerForm", "/api/admin/offers", "Offer published.");
handleJsonForm("#testimonialForm", "/api/admin/testimonials", "Feedback published.");
handleJsonForm("#moneyForm", "/api/admin/settings", "Money transfer section updated.");
handleJsonForm("#footerForm", "/api/admin/footer", "Footer updated.");
handleUploadForm("#bannerForm", "/api/admin/banners", "Banner published.");
handleUploadForm("#galleryForm", "/api/admin/gallery", "Gallery image published.");

contentList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;
  try {
    notify("Deleting...", "info");
    await api(`/api/admin/${button.dataset.delete}/${button.dataset.id}`, { method: "DELETE" });
    await loadContent();
    notify("Item deleted.");
  } catch (error) {
    notify(error.message, "error");
  }
});

checkSession().catch((error) => notify(error.message, "error"));
