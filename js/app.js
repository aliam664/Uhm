/* ============================================================
   UHM — app.js
   Theme (dark/light), language (fa/en), sidebar menu,
   copy-path toast, scroll progress bar.
   ============================================================ */
(function () {
  "use strict";

  var LS_THEME = "uhm-theme";
  var LS_LANG = "uhm-lang";

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  /* ---------- Theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var btn = $("#theme-toggle");
    if (btn) btn.textContent = t === "dark" ? "☾" : "☀";
    try { localStorage.setItem(LS_THEME, t); } catch (e) {}
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(LS_THEME); } catch (e) {}
    var t = saved || "dark";
    applyTheme(t);
    var btn = $("#theme-toggle");
    if (btn) btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(cur);
    });
  }

  /* ---------- Language ---------- */
  function applyLang(lang) {
    document.body.setAttribute("data-lang", lang);
    document.documentElement.lang = lang;
    var btns = $$("[data-lang-btn]");
    btns.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
    });
    /* toggle visible text elements that carry data-fa / data-en */
    $$("[data-fa][data-en]").forEach(function (el) {
      var shown = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-fa");
      /* only replace text, keep any HTML inside like <strong> */
      el.innerHTML = shown;
    });
    try { localStorage.setItem(LS_LANG, lang); } catch (e) {}
  }
  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(LS_LANG); } catch (e) {}
    applyLang(saved === "en" ? "en" : "fa");
    $$("[data-lang-btn]").forEach(function (b) {
      b.addEventListener("click", function () {
        applyLang(b.getAttribute("data-lang-btn"));
      });
    });
  }

  /* ---------- Sidebar ---------- */
  function initSidebar() {
    var toggle = $("#menu-toggle");
    var overlay = $("#sidebar-overlay");
    var sidebar = $("#sidebar");
    var close = $("#sidebar-close");
    function open() {
      if (!sidebar || !overlay) return;
      sidebar.classList.add("open");
      overlay.classList.add("open");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      if (!sidebar || !overlay) return;
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    if (toggle) toggle.addEventListener("click", open);
    if (close) close.addEventListener("click", closeMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    $$(".sidebar-nav a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Copy path + toast ---------- */
  var toastTimer = null;
  function toast(msg, ico) {
    var t = $("#toast");
    if (!t) return;
    t.innerHTML = '<span class="t-ico">' + (ico || "✓") + '</span><span>' + msg + "</span>";
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }
  function initCopy() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-copy]");
      if (!btn) return;
      var target = document.querySelector(btn.getAttribute("data-copy"));
      if (!target) return;
      var text = target.getAttribute("data-full") || target.textContent.trim();
      var done = function () {
        btn.classList.add("copied");
        var old = btn.innerHTML;
        btn.innerHTML = "✓ Copied";
        setTimeout(function () { btn.classList.remove("copied"); btn.innerHTML = old; }, 1800);
        toast("مسیر کپی شد", "📋");
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text, done); });
      } else {
        fallback(text, done);
      }
    });
  }
  function fallback(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  /* ---------- Scroll progress + header state ---------- */
  function initScrollFx() {
    var bar = $("#scroll-progress");
    var header = $("#site-header");
    var toTop = $("#to-top");
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      var sc = h.scrollTop || document.body.scrollTop;
      var max = h.scrollHeight - h.clientHeight;
      if (bar) bar.style.transform = "scaleX(" + (max > 0 ? sc / max : 0) + ")";
      if (header) header.classList.toggle("scrolled", sc > 12);
      if (toTop) toTop.classList.toggle("show", sc > 600);
    }, { passive: true });
    if (toTop) toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initTheme();
    initLang();
    initSidebar();
    initCopy();
    initScrollFx();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
