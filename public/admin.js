const loginView = document.querySelector("#loginView");
const adminView = document.querySelector("#adminView");
const contentList = document.querySelector("#contentList");

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

function showAdmin(show) {
  loginView.classList.toggle("hidden", show);
  adminView.classList.toggle("hidden", !show);
}

function text(item, key) {
  return item?.[key]?.en || item?.[key]?.fr || "";
}

function renderContent(content) {
  const groups = [
    ["announcements", "Announcements"],
    ["offers", "Offers"],
    ["banners", "Banners"]
  ];
  contentList.innerHTML = groups.map(([key, label]) => `
    <div class="content-group">
      <h3>${label}</h3>
      ${(content[key] || []).map((item) => `
        <article>
          <div>
            <strong>${text(item, "title")}</strong>
            <p>${text(item, "body")}</p>
            ${item.image ? `<img src="${item.image}" alt="">` : ""}
          </div>
          <button class="btn danger small" data-delete="${key}" data-id="${item.id}">Delete</button>
        </article>
      `).join("") || "<p>No items yet.</p>"}
    </div>
  `).join("");
}

async function loadContent() {
  renderContent(await api("/api/content"));
}

async function checkSession() {
  const session = await api("/api/session");
  showAdmin(session.authenticated);
  if (session.authenticated) await loadContent();
}

function formJson(form) {
  return Object.fromEntries(new FormData(form).entries());
}

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  try {
    await api("/api/login", { method: "POST", body: JSON.stringify(formJson(form)) });
    form.reset();
    showAdmin(true);
    await loadContent();
  } catch (error) {
    alert(error.message);
  }
});

document.querySelector("#logoutButton").addEventListener("click", async () => {
  await api("/api/logout", { method: "POST", body: "{}" });
  showAdmin(false);
});

document.querySelector("#announcementForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  await api("/api/admin/announcements", { method: "POST", body: JSON.stringify(formJson(form)) });
  form.reset();
  await loadContent();
});

document.querySelector("#offerForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  await api("/api/admin/offers", { method: "POST", body: JSON.stringify(formJson(form)) });
  form.reset();
  await loadContent();
});

document.querySelector("#bannerForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  await api("/api/admin/banners", { method: "POST", body: new FormData(form) });
  form.reset();
  await loadContent();
});

contentList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;
  await api(`/api/admin/${button.dataset.delete}/${button.dataset.id}`, { method: "DELETE" });
  await loadContent();
});

checkSession();
