/* ============================================================
   UHM — home-fx.js   (landing page only)
   Scroll reveal, count-up stats, prep checklist, sticky dock,
   hero video pause on hidden/scroll, magnetic CTA.
   ============================================================ */
(function () {
  "use strict";
  var LS_CHECKS = "uhm-prep-checks";

  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) document.documentElement.setAttribute("data-reduced", "true");

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window) || reduced) {
      items.forEach(function (i) { i.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Count-up ---------- */
  function initCount() {
    var els = $$("[data-count]");
    if (!els.length) return;
    function run(el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var dur = 1400, start = null;
      var suffix = el.getAttribute("data-suffix") || "";
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        p = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = Math.round(p * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (reduced) {
      els.forEach(function (el) { el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || ""); });
      return;
    }
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Checklist ---------- */
  function initChecklist() {
    var box = $("#prep-checklist");
    if (!box) return;
    var checks = box.querySelectorAll("input[type=checkbox]");
    var fill = $("#cl-fill");
    var count = $("#cl-count");
    var saved = [];
    try { saved = JSON.parse(localStorage.getItem(LS_CHECKS) || "[]"); } catch (e) {}

    function update() {
      var done = box.querySelectorAll("input:checked").length;
      var total = checks.length;
      if (fill) fill.style.width = (done / total * 100) + "%";
      if (count) count.textContent = done + " / " + total;
      checks.forEach(function (c, i) {
        c.closest("label").classList.toggle("done", c.checked);
        c.setAttribute("aria-checked", c.checked ? "true" : "false");
      });
    }
    checks.forEach(function (c, i) {
      c.checked = saved.indexOf(String(i)) > -1;
      c.addEventListener("change", function () {
        var arr = [];
        checks.forEach(function (x, j) { if (x.checked) arr.push(String(j)); });
        try { localStorage.setItem(LS_CHECKS, JSON.stringify(arr)); } catch (e) {}
        update();
      });
    });
    update();
  }

  /* ---------- FAQ ---------- */
  function initFaq() {
    $$(".faq-item").forEach(function (item) {
      var q = item.querySelector(".faq-q");
      var a = item.querySelector(".faq-a");
      if (!q || !a) return;
      q.addEventListener("click", function () {
        var open = item.classList.contains("open");
        $$(".faq-item.open").forEach(function (o) {
          o.classList.remove("open");
          o.querySelector(".faq-a").style.maxHeight = "0";
        });
        if (!open) {
          item.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- Sticky dock + hero video pause ---------- */
  function initDock() {
    var dock = $("#dock");
    var hero = $("#hero");
    var heroVideo = $("#hero-video");
    if (dock) {
      var io = new IntersectionObserver(function (en) {
        var visible = !en[0].isIntersecting;
        if (heroVideo && en[0].isIntersecting) {
          if (document.hidden) heroVideo.pause();
        }
        dock.classList.toggle("show", visible);
        if (heroVideo) { if (en[0].isIntersecting && !document.hidden) heroVideo.play(); else heroVideo.pause(); }
      }, { threshold: 0.05 });
      if (hero) io.observe(hero);
    }
    document.addEventListener("visibilitychange", function () {
      if (!heroVideo) return;
      if (document.hidden) heroVideo.pause();
      else if (dock && !dock.classList.contains("show")) heroVideo.play();
    });
  }

  /* ---------- Magnetic CTA (desktop only) ---------- */
  function initMagnetic() {
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
    var mags = $$("[data-magnetic]");
    if (!mags.length) return;
    mags.forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / 10;
        var y = (e.clientY - r.top - r.height / 2) / 12;
        el.style.transform = "translate(" + x + "px," + y + "px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
    });
  }

  function init() {
    initReveal();
    initCount();
    initChecklist();
    initFaq();
    initDock();
    initMagnetic();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
