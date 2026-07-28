/* Shared chrome — header + left sidebar on every page */
(function () {
  "use strict";

  const depth = document.body.getAttribute("data-depth") || "0";
  const prefix = depth === "1" ? "../" : "";
  const page = document.body.getAttribute("data-page") || "home";

  const sections = [
    { id: "home", href: prefix + "index.html", num: "⌂", fa: "صفحه اصلی", en: "Home" },
    { id: "csp", href: prefix + "pages/csp.html", num: "1", fa: "CSP Setting", en: "CSP Setting" },
    { id: "pp-filter", href: prefix + "pages/pp-filter.html", num: "2", fa: "PP Filter", en: "PP Filter" },
    { id: "pure-config", href: prefix + "pages/pure-config.html", num: "3", fa: "Pure Config", en: "Pure Config" },
    { id: "video", href: prefix + "pages/video.html", num: "4", fa: "Video Setting", en: "Video Setting" },
    { id: "chaser", href: prefix + "pages/chaser.html", num: "5", fa: "Chaser Camera", en: "Chaser Camera" },
    { id: "hud", href: prefix + "pages/hud.html", num: "6", fa: "HUD", en: "HUD" },
    { id: "spr-light", href: prefix + "pages/spr-light.html", num: "7", fa: "SPR Light", en: "SPR Light" },
    { id: "neck-fx", href: prefix + "pages/neck-fx.html", num: "8", fa: "Neck FX", en: "Neck FX" },
    { id: "graphics-test", href: prefix + "pages/graphics-test.html", num: "9", fa: "تست گرافیک", en: "Graphics Test" },
  ];

  function buildNav(list) {
    return list
      .map(function (s) {
        const active = s.id === page ? " active" : "";
        const homeClass = s.id === "home" ? " nav-home" : "";
        return (
          '<a class="nav-link' +
          homeClass +
          active +
          '" href="' +
          s.href +
          '">' +
          '<span class="nav-num">' +
          s.num +
          "</span>" +
          '<span class="nav-text" data-fa="' +
          s.fa +
          '" data-en="' +
          s.en +
          '">' +
          s.fa +
          "</span>" +
          "</a>"
        );
      })
      .join("");
  }

  const headerHTML =
    '<header class="site-header">' +
    '<div class="header-left">' +
    '<button type="button" class="menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false" aria-controls="sidebar">' +
    "<span></span><span></span><span></span>" +
    "</button>" +
    '<a class="brand" href="' +
    prefix +
    'index.html">' +
    '<img class="brand-logo" src="' +
    prefix +
    'assets/logo.png" alt="UHM" width="46" height="46">' +
    '<span class="brand-text">' +
    '<span class="brand-name">UHM</span>' +
    '<span class="brand-tag" data-fa="پک گرافیکی استو" data-en="AC Graphics Pack">پک گرافیکی استو</span>' +
    "</span></a></div>" +
    '<div class="header-right">' +
    '<div class="lang-switch" role="group" aria-label="Language">' +
    '<button type="button" class="lang-btn active" data-lang="fa">FA</button>' +
    '<button type="button" class="lang-btn" data-lang="en">EN</button>' +
    "</div></div></header>";

  const sidebarHTML =
    '<div class="sidebar-overlay" id="sidebarOverlay"></div>' +
    '<aside class="sidebar" id="sidebar" aria-label="Sections">' +
    '<div class="sidebar-header">' +
    '<img class="sidebar-logo" src="' +
    prefix +
    'assets/logo.png" alt="UHM" width="52" height="52">' +
    "<div>" +
    '<div class="sidebar-title">UHM</div>' +
    '<div class="sidebar-sub" data-fa="راهنمای نصب" data-en="Install Guide">راهنمای نصب</div>' +
    "</div></div>" +
    '<div class="sidebar-hint">' +
    '<span aria-hidden="true">◀</span> ' +
    '<span data-fa="بخش‌ها را از این منوی چپ انتخاب کنید" data-en="Pick a section from this left menu">بخش‌ها را از این منوی چپ انتخاب کنید</span>' +
    "</div>" +
    '<nav class="sidebar-nav">' +
    '<div class="nav-label" data-fa="منو" data-en="Menu">منو</div>' +
    buildNav(sections.slice(0, 1)) +
    '<div class="nav-label" data-fa="آموزش‌ها" data-en="Guides">آموزش‌ها</div>' +
    buildNav(sections.slice(1)) +
    "</nav></aside>";

  const mount = document.getElementById("site-chrome");
  if (mount) {
    mount.innerHTML = headerHTML + sidebarHTML;
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.id = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);

  window.UHM = window.UHM || {};
  window.UHM.sections = sections;
  window.UHM.prefix = prefix;

  window.UHM.getPageNav = function (currentId) {
    const guides = sections.slice(1);
    const idx = guides.findIndex(function (s) {
      return s.id === currentId;
    });
    if (idx < 0) return "";
    const prev = guides[idx - 1];
    const next = guides[idx + 1];
    let html = '<nav class="page-nav" aria-label="Pagination">';
    if (prev) {
      html +=
        '<a href="' +
        prev.href +
        '"><span data-fa="→ قبلی: " data-en="← Prev: ">→ قبلی: </span>' +
        prev.fa +
        "</a>";
    } else {
      html +=
        '<a href="' +
        prefix +
        'index.html"><span data-fa="→ صفحه اصلی" data-en="← Home">→ صفحه اصلی</span></a>';
    }
    if (next) {
      html +=
        '<a href="' +
        next.href +
        '"><span data-fa="بعدی: " data-en="Next: ">بعدی: </span>' +
        next.fa +
        " ←</a>";
    } else {
      html += "<span></span>";
    }
    html += "</nav>";
    return html;
  };

  window.UHM.mountPageNav = function (currentId) {
    const el = document.getElementById("pageNav");
    if (el) el.outerHTML = window.UHM.getPageNav(currentId);
  };
})();
