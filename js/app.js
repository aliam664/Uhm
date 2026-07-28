/* UHM site interactions — light animations only */
(function () {
  "use strict";

  const body = document.body;
  const toggle = document.getElementById("menuToggle");
  const overlay = document.getElementById("sidebarOverlay");
  const sidebar = document.getElementById("sidebar");

  function openSidebar() {
    body.classList.add("sidebar-open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    body.classList.remove("sidebar-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function toggleSidebar() {
    if (body.classList.contains("sidebar-open")) closeSidebar();
    else openSidebar();
  }

  if (toggle) toggle.addEventListener("click", toggleSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar();
  });

  // Close sidebar when a nav link is clicked (mobile)
  if (sidebar) {
    sidebar.querySelectorAll("a.nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 900) closeSidebar();
      });
    });
  }

  // Language switch (FA default). Stores preference; English pages not yet filled.
  const LANG_KEY = "uhm-lang";
  const langBtns = document.querySelectorAll(".lang-btn");

  function applyLang(lang) {
    const isFa = lang !== "en";
    body.classList.toggle("rtl", isFa);
    body.classList.toggle("ltr", !isFa);
    body.setAttribute("dir", isFa ? "rtl" : "ltr");
    body.setAttribute("lang", isFa ? "fa" : "en");

    document.querySelectorAll("[data-fa]").forEach(function (el) {
      const fa = el.getAttribute("data-fa");
      const en = el.getAttribute("data-en") || fa;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return;
      el.textContent = isFa ? fa : en;
    });

    document.querySelectorAll("[data-fa-html]").forEach(function (el) {
      const fa = el.getAttribute("data-fa-html");
      const en = el.getAttribute("data-en-html") || fa;
      el.innerHTML = isFa ? fa : en;
    });

    langBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === (isFa ? "fa" : "en"));
    });

    try {
      localStorage.setItem(LANG_KEY, isFa ? "fa" : "en");
    } catch (_) {}
  }

  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  let saved = "fa";
  try {
    saved = localStorage.getItem(LANG_KEY) || "fa";
  } catch (_) {}
  applyLang(saved);

  // Copy path buttons
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 1800);
  }

  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", async function () {
      const targetId = btn.getAttribute("data-copy");
      const el = targetId ? document.getElementById(targetId) : btn.closest(".path-box")?.querySelector(".path-code");
      const text = el ? (el.textContent || el.value || "").trim() : "";
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }

      const isFa = body.classList.contains("rtl");
      const original = btn.textContent;
      btn.classList.add("copied");
      btn.textContent = isFa ? "کپی شد!" : "Copied!";
      showToast(isFa ? "مسیر کپی شد" : "Path copied");
      setTimeout(function () {
        btn.classList.remove("copied");
        btn.textContent = original;
      }, 1500);
    });
  });

  // Auto-load gallery images from assets/graphics-test if list is present
  const gallery = document.getElementById("graphicsGallery");
  if (gallery && gallery.dataset.autoload === "true") {
    // Images dropped into assets/graphics-test/ should be listed in gallery-manifest.js
    // or named via data-images attribute (comma-separated).
    const list = (gallery.dataset.images || "")
      .split(",")
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);

    if (list.length) {
      gallery.innerHTML = "";
      list.forEach(function (src) {
        const a = document.createElement("a");
        a.href = src;
        a.target = "_blank";
        a.rel = "noopener";
        a.className = "gallery-item";
        const img = document.createElement("img");
        img.src = src;
        img.alt = "UHM graphics test";
        img.loading = "lazy";
        a.appendChild(img);
        gallery.appendChild(a);
      });
    }
  }
})();
