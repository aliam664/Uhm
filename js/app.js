/* UHM site interactions — theme, motion, chrome */
(function () {
  "use strict";

  const body = document.body;
  const root = document.documentElement;
  const toggle = document.getElementById("menuToggle");
  const overlay = document.getElementById("sidebarOverlay");
  const sidebar = document.getElementById("sidebar");

  // ===== Theme (dark / light) =====
  const THEME_KEY = "uhm-theme";
  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }
  function applyTheme(theme) {
    const t = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", t);
    body.setAttribute("data-theme", t);
    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.setAttribute("aria-label", t === "light" ? "Switch to dark" : "Switch to light");
      btn.title = t === "light" ? "Dark" : "Light";
    }
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch (_) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#f3f6fb" : "#050508");
  }
  applyTheme(getPreferredTheme());
  document.addEventListener("click", function (e) {
    const btn = e.target.closest && e.target.closest("#themeToggle");
    if (!btn) return;
    const cur = root.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  });

  // Header shadow on scroll
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal, .stagger");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

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

  // Set the visible text of an element without destroying its inner markup
  // (chips / <strong> / <em>). For rich elements, each child's keyword text is
  // language-neutral and appears in both the FA and EN strings, so we keep the
  // children and re-wrap their keywords inside the translated sentence.
  function setLocalized(el, fa, en, isFa) {
    const target = isFa ? fa : en;
    const children = Array.prototype.slice.call(el.children);
    if (!children.length) {
      el.textContent = target;
      return;
    }
    let rebuilt = target;
    let allPlaced = true;
    children.forEach(function (child) {
      const kw = child.textContent.trim();
      if (kw && rebuilt.indexOf(kw) !== -1) {
        rebuilt = rebuilt.replace(kw, child.outerHTML);
      } else {
        allPlaced = false;
      }
    });
    if (allPlaced) {
      el.innerHTML = rebuilt;
    } else {
      // Fallback: keep the children, translated text around them.
      const frag = document.createDocumentFragment();
      while (el.firstChild) frag.appendChild(el.firstChild);
      el.textContent = target;
      el.appendChild(frag);
    }
  }

  function applyLang(lang) {
    const isFa = lang !== "en";
    // Keep the <html> root in sync with <body> for screen readers / a11y + css.
    root.setAttribute("lang", isFa ? "fa" : "en");
    root.setAttribute("dir", isFa ? "rtl" : "ltr");
    body.classList.toggle("rtl", isFa);
    body.classList.toggle("ltr", !isFa);
    body.setAttribute("dir", isFa ? "rtl" : "ltr");
    body.setAttribute("lang", isFa ? "fa" : "en");

    document.querySelectorAll("[data-fa]").forEach(function (el) {
      const fa = el.getAttribute("data-fa");
      const en = el.getAttribute("data-en") || fa;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return;
      // keep split-word hero spans intact after first paint
      if (el.dataset.split === "1") {
        el.setAttribute("aria-label", isFa ? fa : en);
        // rebuild simple text if language changes
        el.textContent = isFa ? fa : en;
        el.dataset.split = "";
        return;
      }
      setLocalized(el, fa, en, isFa);
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

})();
