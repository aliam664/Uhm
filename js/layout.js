/* Shared chrome — header + left sidebar on every page */
(function () {
  "use strict";

  const depth = document.body.getAttribute("data-depth") || "0";
  const prefix = depth === "1" ? "../" : "";
  const page = document.body.getAttribute("data-page") || "home";

  const sections = [
    { id: "home", href: prefix + "index.html", num: "⌂", fa: "صفحه اصلی", en: "Home" },
    { id: "pure-install", href: prefix + "pages/pure-install.html", num: "1", fa: "نصب Pure", en: "Pure Install" },
    { id: "csp", href: prefix + "pages/csp.html", num: "2", fa: "CSP Setting", en: "CSP Setting" },
    { id: "pp-filter", href: prefix + "pages/pp-filter.html", num: "3", fa: "PP Filter", en: "PP Filter" },
    { id: "pure-config", href: prefix + "pages/pure-config.html", num: "4", fa: "Pure Config", en: "Pure Config" },
    { id: "video", href: prefix + "pages/video.html", num: "5", fa: "Video Setting", en: "Video Setting" },
    { id: "chaser", href: prefix + "pages/chaser.html", num: "6", fa: "Chaser Camera", en: "Chaser Camera" },
    { id: "hud", href: prefix + "pages/hud.html", num: "7", fa: "HUD", en: "HUD" },
    { id: "spr-light", href: prefix + "pages/spr-light.html", num: "8", fa: "SPR Light", en: "SPR Light" },
    { id: "neck-fx", href: prefix + "pages/neck-fx.html", num: "9", fa: "Neck FX", en: "Neck FX" },
    { id: "graphics-test", href: prefix + "pages/graphics-test.html", num: "10", fa: "تست گرافیک", en: "Graphics Test" },
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
    '<header class="site-header" id="siteHeader">' +
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
    '<div class="header-nav">' +
    '<a href="' + prefix + 'index.html#download" data-fa="دانلود" data-en="Download">دانلود</a>' +
    '<a href="' + prefix + 'index.html#showcase" data-fa="ویدیو" data-en="Video">ویدیو</a>' +
    '<a href="' + prefix + 'index.html#guides" data-fa="آموزش" data-en="Guides">آموزش</a>' +
    '<a href="' + prefix + 'index.html#faq" data-fa="سوالات" data-en="FAQ">سوالات</a>' +
    '</div>' +
    '<div class="header-right">' +
    '<a class="header-tg" href="https://t.me/uhm_009" target="_blank" rel="noopener noreferrer" title="Telegram @uhm_009">@uhm_009</a>' +
    '<button type="button" class="theme-toggle" id="themeToggle" aria-label="Toggle theme" title="Theme">' +
    '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"/></svg>' +
    '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
    "</button>" +
    '<div class="lang-switch" role="group" aria-label="Language">' +
    '<button type="button" class="lang-btn active" data-lang="fa">FA</button>' +
    '<button type="button" class="lang-btn" data-lang="en">EN</button>' +
    '<a class="btnx btnx-primary btnx-sm header-cta" href="' + prefix + 'index.html" data-fa="دانلود" data-en="Download">دانلود</a>' +
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
    "</nav>" +
    '<div class="sidebar-creator">' +
    '<strong>Ali369</strong>' +
    '<span data-fa="سازنده پک UHM · v1.0" data-en="UHM pack creator · v1.0">سازنده پک UHM · v1.0</span><br>' +
    '<a href="https://t.me/uhm_009" target="_blank" rel="noopener noreferrer">t.me/uhm_009</a>' +
    "</div></aside>";

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

  function savedLang() {
    let l = "fa";
    try {
      l = localStorage.getItem("uhm-lang") || "fa";
    } catch (_) {}
    return l === "en" ? "en" : "fa";
  }

  function localizedText(fa, en) {
    return savedLang() === "en" ? en : fa;
  }

  window.UHM.getPageNav = function (currentId) {
    const guides = sections.slice(1);
    const idx = guides.findIndex(function (s) {
      return s.id === currentId;
    });
    if (idx < 0) return "";
    const prev = guides[idx - 1];
    const next = guides[idx + 1];
    const isEn = savedLang() === "en";
    let html = '<nav class="page-nav" aria-label="Pagination">';
    if (prev) {
      html +=
        '<a href="' +
        prev.href +
        '"><span data-fa="→ قبلی: " data-en="← Prev: ">' +
        localizedText("→ قبلی: ", "← Prev: ") +
        '</span><span data-fa="' +
        prev.fa +
        '" data-en="' +
        prev.en +
        '">' +
        (isEn ? prev.en : prev.fa) +
        "</span></a>";
    } else {
      html +=
        '<a href="' +
        prefix +
        'index.html"><span data-fa="→ صفحه اصلی" data-en="← Home">' +
        localizedText("→ صفحه اصلی", "← Home") +
        "</span></a>";
    }
    if (next) {
      html +=
        '<a href="' +
        next.href +
        '"><span data-fa="بعدی: " data-en="Next: ">' +
        localizedText("بعدی: ", "Next: ") +
        '</span><span data-fa="' +
        next.fa +
        '" data-en="' +
        next.en +
        '">' +
        (isEn ? next.en : next.fa) +
        " ←</span></a>";
    } else {
      html += "<span></span>";
    }
    html += "</nav>";
    return html;
  };

  window.UHM.mountPageNav = function (currentId) {
    const el = document.getElementById("pageNav");
    if (!el) return;
    el.outerHTML = window.UHM.getPageNav(currentId);
    // The nav is injected after applyLang() has already run, so sync its text
    // with the saved language here.
    const nav = document.querySelector(".page-nav");
    if (nav) {
      const isEn = savedLang() === "en";
      nav.querySelectorAll("[data-fa]").forEach(function (node) {
        const fa = node.getAttribute("data-fa");
        const en = node.getAttribute("data-en") || fa;
        node.textContent = isEn ? en : fa;
      });
    }
  };
})();
