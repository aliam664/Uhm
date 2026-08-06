/* ============================================================
   UHM — layout.js
   Single source for header, sidebar, footer and the 10-section
   navigation. Edit SECTIONS below to update everywhere at once.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- The 10 guide sections (edit here) ---------- */
  var SECTIONS = [
    { id: "pure-install",  num: "01", fa: "نصب Pure",        en: "Install Pure",       badge: "video",  thumb: null },
    { id: "csp",           num: "02", fa: "CSP Setting",     en: "CSP Setting",        badge: "photo",  thumb: "assets/guides/01-csp/csp-setting.jpg" },
    { id: "pp-filter",     num: "03", fa: "PP Filter",       en: "PP Filter",          badge: "",       thumb: null },
    { id: "pure-config",   num: "04", fa: "Pure Config",     en: "Pure Config",        badge: "photo",  thumb: "assets/guides/03-pure-config/01-click-import.jpg" },
    { id: "video",         num: "05", fa: "Video Setting",   en: "Video Setting",      badge: "photo",  thumb: "assets/guides/04-video/video-setting.jpg" },
    { id: "chaser",        num: "06", fa: "Chaser Camera",   en: "Chaser Camera",      badge: "photo",  thumb: "assets/guides/05-chaser/chaser-camera-setting.jpg" },
    { id: "hud",           num: "07", fa: "HUD",             en: "HUD",                badge: "photo",  thumb: "assets/guides/06-hud/hud-setting.jpg" },
    { id: "spr-light",     num: "08", fa: "SPR Light",       en: "SPR Light",          badge: "",       thumb: null },
    { id: "neck-fx",       num: "09", fa: "Neck FX",         en: "Neck FX",            badge: "photo",  thumb: "assets/guides/08-neck-fx/neck-fx-setting.jpg" },
    { id: "graphics-test", num: "10", fa: "تست گرافیک",      en: "Graphics Test",      badge: "photo",  thumb: "assets/guides/09-graphics-test/0ea7455c-d514-4a10-8627-ba7c14bbf21e.jpg" }
  ];

  var BASE = window.UHM_BASE || "";
  var HOME_FA = "خانه", HOME_EN = "Home";
  var TG = "@uhm_009", TG_URL = "https://t.me/uhm_009";

  /* page prefix for assets */
  function asset(p) { return BASE + p; }
  function pageUrl(id) { return BASE + "pages/" + id + ".html"; }

  /* ---------- header ---------- */
  function headerHTML() {
    return (
      '<header class="site-header" id="site-header">' +
        '<div class="header-inner">' +
          '<button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-label="منو">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
          '<a class="brand-logo" href="' + BASE + 'index.html">' +
            '<img src="' + asset("assets/logo.png") + '" alt="UHM">' +
            '<span>UHM<span class="uhm-sub">GRAPHICS PACK</span></span>' +
          '</a>' +
          '<div class="header-spacer"></div>' +
          '<div class="header-actions">' +
            '<div class="lang-switch" id="lang-switch">' +
              '<button data-lang-btn="fa" class="active">فا</button>' +
              '<button data-lang-btn="en">EN</button>' +
            '</div>' +
            '<button class="icon-btn" id="theme-toggle" aria-label="تغییر تم" title="Dark / Light">☾</button>' +
          '</div>' +
        '</div>' +
      '</header>'
    );
  }

  /* ---------- sidebar ---------- */
  function sidebarHTML() {
    var nav = '<nav class="sidebar-nav">';
    nav += '<p class="nav-title" data-fa="فهرست" data-en="MENU"></p>';
    nav += '<a href="' + BASE + 'index.html" data-nav="home"><span class="num">🏠</span><span data-fa="' + HOME_FA + '" data-en="' + HOME_EN + '"></span></a>';
    SECTIONS.forEach(function (s) {
      nav += '<a href="' + pageUrl(s.id) + '" data-nav="' + s.id + '">' +
        '<span class="num">' + s.num + '</span>' +
        '<span data-fa="' + s.fa + '" data-en="' + s.en + '"></span></a>';
    });
    nav += '</nav>';

    return (
      '<div class="sidebar-overlay" id="sidebar-overlay"></div>' +
      '<aside class="sidebar" id="sidebar" aria-label="منو">' +
        '<div class="sidebar-head">' +
          '<a class="brand-logo" href="' + BASE + 'index.html">' +
            '<img src="' + asset("assets/logo.png") + '" alt="UHM"><span>UHM</span>' +
          '</a>' +
          '<button class="sidebar-close" id="sidebar-close" aria-label="بستن">✕</button>' +
        '</div>' +
        nav +
        '<div class="sidebar-foot">' +
          '<div data-fa="سازنده: <strong>Ali369</strong>" data-en="Creator: <strong>Ali369</strong>"></div>' +
          '<a href="' + TG_URL + '" target="_blank" rel="noopener" class="en">' + TG + '</a>' +
        '</div>' +
      '</aside>'
    );
  }

  /* ---------- footer ---------- */
  function footerHTML() {
    var links = "";
    SECTIONS.forEach(function (s) {
      links += '<a href="' + pageUrl(s.id) + '" data-fa="' + s.fa + '" data-en="' + s.en + '"></a>';
    });
    return (
      '<footer class="site-footer">' +
        '<div class="footer-inner">' +
          '<div class="footer-top">' +
            '<div class="footer-brand">' +
              '<img src="' + asset("assets/logo.png") + '" alt="UHM">' +
              '<div><div class="fb-name">UHM</div><div class="fb-sub" data-fa="پک گرافیکی Assetto Corsa" data-en="Assetto Corsa Graphics Pack"></div></div>' +
            '</div>' +
            '<div class="chip blue">v1.0 · <span class="en">RAR</span></div>' +
          '</div>' +
          '<div class="footer-links">' +
            '<div class="fl"><h4 data-fa="بخش‌ها" data-en="Sections"></h4>' + links + '</div>' +
            '<div class="fl"><h4 data-fa="سازنده" data-en="Creator"></h4>' +
              '<a href="' + TG_URL + '" target="_blank" rel="noopener" class="en">Telegram ' + TG + '</a>' +
              '<a href="https://acstuff.ru/s/VRDXD1" target="_blank" rel="noopener" data-fa="Neck FX (لینک نصب)" data-en="Neck FX install link"></a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span data-fa="© UHM Graphics Pack — طراحی و توسعه Ali369" data-en="© UHM Graphics Pack — designed by Ali369"></span>' +
            '<span data-fa="همه حقوق محفوظ است." data-en="All rights reserved."></span>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  /* ---------- inject ---------- */
  function inject(el, html) {
    if (el) el.outerHTML = html;
  }
  function mount() {
    inject(document.getElementById("header-mount"), headerHTML());
    inject(document.getElementById("sidebar-mount"), sidebarHTML());
    inject(document.getElementById("footer-mount"), footerHTML());

    /* active nav */
    var page = document.body.getAttribute("data-page");
    var navEl = document.querySelector('[data-nav="' + page + '"]');
    if (navEl) navEl.classList.add("active");
    else document.querySelector('[data-nav="home"]').classList.add("active");
  }

  /* ---------- pagination (guide pages) ---------- */
  function pagination() {
    var mountEl = document.getElementById("pager-mount");
    if (!mountEl) return;
    var cur = document.body.getAttribute("data-page");
    var idx = SECTIONS.findIndex(function (s) { return s.id === cur; });
    if (idx < 0) return;

    var prev = idx > 0 ? SECTIONS[idx - 1] : null;
    var next = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;

    function block(s, label, dir) {
      if (!s) return '<span class="hidden"></span>';
      var arrow = dir === "next" ? "←" : "→";
      return (
        '<a href="' + pageUrl(s.id) + '" class="p-' + dir + '">' +
          '<span class="p-label">' + label + '</span>' +
          '<span class="p-title en">' + s.num + ' · ' + s.fa + '</span>' +
        '</a>'
      );
    }

    mountEl.innerHTML =
      '<div class="pager">' +
        block(prev, "قبلی", "prev") +
        block(next, "بعدی", "next") +
      '</div>';
  }

  /* ---------- init ---------- */
  function init() {
    mount();
    pagination();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.UHM_SECTIONS = SECTIONS;
})();
