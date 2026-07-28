/* Modern landing FX — count-up, magnetic CTA, scroll progress, sticky bar, word reveal */
(function () {
  "use strict";

  if (!document.body.classList.contains("home-v3") && !document.body.classList.contains("page-home")) {
    return;
  }

  var reduce =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll progress bar ---------- */
  var prog = document.getElementById("scrollProgress");
  if (!prog) {
    prog = document.createElement("div");
    prog.id = "scrollProgress";
    prog.className = "scroll-progress";
    prog.setAttribute("aria-hidden", "true");
    document.body.appendChild(prog);
  }

  function onScrollProgress() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
    prog.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)) + ")";
  }

  /* ---------- Sticky download dock ---------- */
  var dock = document.getElementById("stickyDock");
  if (!dock) {
    dock = document.createElement("div");
    dock.id = "stickyDock";
    dock.className = "sticky-dock";
    dock.innerHTML =
      '<div class="sticky-dock-inner">' +
      '<div class="sticky-dock-copy">' +
      '<strong>UHM Pack</strong>' +
      '<span data-fa="آماده دانلود · ~4.4MB" data-en="Ready · ~4.4MB">آماده دانلود · ~4.4MB</span>' +
      "</div>" +
      '<a class="btnx btnx-primary btnx-sm" href="assets/download/uhm-graphics-pack.rar" download="uhm-graphics-pack.rar">' +
      '<span class="btnx-shine" aria-hidden="true"></span>' +
      '<span data-fa="دانلود پک" data-en="Download">دانلود پک</span>' +
      "</a>" +
      '<a class="sticky-dock-vid" href="#showcase" data-fa="ویدیو" data-en="Video">ویدیو</a>' +
      "</div>";
    document.body.appendChild(dock);
  }

  var hero = document.querySelector(".hx");
  function onDock() {
    var y = window.scrollY || 0;
    var show = y > (hero ? hero.offsetHeight * 0.55 : 420);
    dock.classList.toggle("is-on", show);
    document.body.classList.toggle("has-dock", show);
  }

  /* ---------- Count-up metrics ---------- */
  function animateCount(el, target, suffix, duration) {
    if (reduce) {
      el.textContent = target + (suffix || "");
      return;
    }
    var start = 0;
    var t0 = null;
    function frame(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(start + (target - start) * eased);
      el.textContent = val + (suffix || "");
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var countEls = document.querySelectorAll("[data-count]");
  if (countEls.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          if (el.dataset.done) return;
          el.dataset.done = "1";
          var target = parseInt(el.getAttribute("data-count"), 10) || 0;
          var suffix = el.getAttribute("data-suffix") || "";
          animateCount(el, target, suffix, 1200);
          cio.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    countEls.forEach(function (el) {
      cio.observe(el);
    });
  }

  /* ---------- Word / line reveal on hero title ---------- */
  function splitWords(el) {
    if (!el || el.dataset.split) return;
    var text = el.textContent.trim();
    if (!text) return;
    el.dataset.split = "1";
    el.setAttribute("aria-label", text);
    var words = text.split(/\s+/);
    el.textContent = "";
    words.forEach(function (w, i) {
      var span = document.createElement("span");
      span.className = "wrd";
      span.style.setProperty("--i", String(i));
      var inner = document.createElement("span");
      inner.className = "wrd-i";
      inner.textContent = w;
      span.appendChild(inner);
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }

  document.querySelectorAll(".hx-title-line, .hx-title-grad, .hx-kicker").forEach(splitWords);
  requestAnimationFrame(function () {
    document.querySelector(".hx")?.classList.add("hx-in");
  });

  /* ---------- Magnetic primary buttons ---------- */
  if (!reduce && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".btnx-primary, .hx-logo-wrap").forEach(function (btn) {
      var strength = btn.classList.contains("hx-logo-wrap") ? 12 : 10;
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform =
          "translate(" + (x / strength) + "px," + (y / strength) + "px)";
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- Tilt cards (subtle 3D) ---------- */
  if (!reduce && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".gcard, .step-card, .preset, .dl-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(900px) rotateY(" +
          px * 6 +
          "deg) rotateX(" +
          -py * 6 +
          "deg) translateY(-4px)";
      });
      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---------- Parallax hero orbs ---------- */
  var orbA = document.querySelector(".hx-orb-a");
  var orbB = document.querySelector(".hx-orb-b");
  var stage = document.querySelector(".hx-stage");
  function onParallax() {
    if (reduce) return;
    var y = window.scrollY || 0;
    if (y > 900) return;
    if (orbA) orbA.style.translate = "0 " + y * 0.12 + "px";
    if (orbB) orbB.style.translate = "0 " + y * -0.08 + "px";
    if (stage) stage.style.translate = "0 " + y * 0.05 + "px";
  }

  /* ---------- Spotlight follow on hero ---------- */
  var hx = document.querySelector(".hx");
  if (hx && !reduce && window.matchMedia("(pointer:fine)").matches) {
    hx.addEventListener("pointermove", function (e) {
      var r = hx.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width) * 100;
      var y = ((e.clientY - r.top) / r.height) * 100;
      hx.style.setProperty("--spot-x", x + "%");
      hx.style.setProperty("--spot-y", y + "%");
    });
  }

  /* ---------- Smooth anchor for #showcase ---------- */
  document.querySelectorAll('a[href="#showcase"], a[href="#download"], a[href="#guides"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });

  /* bind scroll */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      onScrollProgress();
      onDock();
      onParallax();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Hero blurred video background ---------- */
  var heroVid = document.getElementById("heroBgVideo");
  var hxRoot = document.querySelector(".hx");
  if (heroVid) {
    heroVid.muted = true;
    heroVid.defaultMuted = true;
    heroVid.playsInline = true;
    heroVid.setAttribute("muted", "");
    heroVid.setAttribute("playsinline", "");

    function tryPlayHero() {
      var p = heroVid.play();
      if (p && p.catch) {
        p.catch(function () {
          // Autoplay blocked — keep still first frame if available
          hxRoot && hxRoot.classList.add("hx-video-blocked");
        });
      }
    }

    heroVid.addEventListener("loadeddata", function () {
      hxRoot && hxRoot.classList.add("hx-video-ready");
      tryPlayHero();
    });
    heroVid.addEventListener("canplay", tryPlayHero);
    heroVid.addEventListener("error", function () {
      hxRoot && hxRoot.classList.add("hx-video-missing");
    });

    // Pause background video when tab hidden / far scrolled (perf)
    function syncHeroVid() {
      if (!heroVid) return;
      var y = window.scrollY || 0;
      var hide = document.hidden || y > (hero ? hero.offsetHeight + 80 : 700);
      if (hide) {
        if (!heroVid.paused) heroVid.pause();
      } else if (heroVid.paused) {
        tryPlayHero();
      }
    }
    document.addEventListener("visibilitychange", syncHeroVid);
    window.addEventListener("scroll", function () {
      if (!ticking) {
        /* reuse scroll rAF below — also call sync lightly */
      }
      syncHeroVid();
    }, { passive: true });

    // Kick load
    try {
      heroVid.load();
      tryPlayHero();
    } catch (_) {}
  }

  /* ---------- Prep checklist ---------- */
  var checks = document.querySelectorAll("#prepChecklist input[data-check]");
  var checkBar = document.getElementById("checkBar");
  var checkProgress = document.getElementById("checkProgress");
  var checkHint = document.getElementById("checkHint");
  var CHECK_KEY = "uhm-prep-checks";

  function loadChecks() {
    try {
      var saved = JSON.parse(localStorage.getItem(CHECK_KEY) || "[]");
      checks.forEach(function (input, i) {
        input.checked = !!saved[i];
      });
    } catch (_) {}
  }

  function saveChecks() {
    var arr = [];
    checks.forEach(function (input) {
      arr.push(!!input.checked);
    });
    try {
      localStorage.setItem(CHECK_KEY, JSON.stringify(arr));
    } catch (_) {}
  }

  function renderChecks() {
    var total = checks.length || 1;
    var done = 0;
    checks.forEach(function (input) {
      if (input.checked) done += 1;
    });
    var pct = Math.round((done / total) * 100);
    if (checkBar) checkBar.style.width = pct + "%";
    if (checkProgress) checkProgress.textContent = done + "/" + total;
    if (checkHint) {
      var isFa = (document.documentElement.getAttribute("lang") || "fa") !== "en" &&
        (document.body.getAttribute("lang") || "fa") !== "en" &&
        document.body.classList.contains("rtl");
      if (done === total) {
        checkHint.textContent = isFa
          ? "عالی — آماده‌ای بری سراغ نصب."
          : "Great — you're ready to install.";
        checkHint.classList.add("is-done");
      } else {
        checkHint.textContent = isFa
          ? "هر مورد را بعد از انجام تیک بزن."
          : "Tick each item after you finish it.";
        checkHint.classList.remove("is-done");
      }
    }
  }

  if (checks.length) {
    loadChecks();
    renderChecks();
    checks.forEach(function (input) {
      input.addEventListener("change", function () {
        saveChecks();
        renderChecks();
      });
    });
  }

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById("toTop");
  function onToTop() {
    if (!toTop) return;
    var y = window.scrollY || 0;
    toTop.classList.toggle("is-on", y > 700);
  }
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* hook to-top into existing scroll rAF if possible */
  var _origOnScroll = null;
  // enhance passive scroll listener already registered: add another light one
  window.addEventListener(
    "scroll",
    function () {
      onToTop();
    },
    { passive: true }
  );
  onToTop();

  /* FAQ: only one open at a time for cleaner UX */
  var faqItems = document.querySelectorAll("#faqList details.faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* Re-apply FA/EN on injected dock if lang system exists */
  try {
    var lang = localStorage.getItem("uhm-lang") || "fa";
    if (window.UHM && typeof window.UHM.applyLang === "function") {
      /* no-op if not exported */
    } else {
      document.querySelectorAll("#stickyDock [data-fa]").forEach(function (el) {
        var fa = el.getAttribute("data-fa");
        var en = el.getAttribute("data-en") || fa;
        el.textContent = lang === "en" ? en : fa;
      });
    }
  } catch (_) {}
})();
