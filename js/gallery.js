/* ============================================================
   UHM — gallery.js
   Lightbox for guide screenshots + full gallery grid.
   Images with class="js-lightbox" (or .gallery-grid img)
   become click-to-zoom.
   ============================================================ */
(function () {
  "use strict";

  function build() {
    if (document.getElementById("uhm-lightbox")) return;
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.id = "uhm-lightbox";
    lb.innerHTML =
      '<button class="lightbox-close" aria-label="بستن">✕</button>' +
      '<button class="lightbox-nav prev" aria-label="قبلی">‹</button>' +
      '<img alt="">' +
      '<button class="lightbox-nav next" aria-label="بعدی">›</button>' +
      '<div class="lightbox-caption"></div>';
    document.body.appendChild(lb);
    return lb;
  }

  function init() {
    var lb = build();
    var img = lb.querySelector("img");
    var cap = lb.querySelector(".lightbox-caption");
    var sources = Array.prototype.slice.call(
      document.querySelectorAll(".js-lightbox, .gallery-grid img, figure.guide-shot img")
    ).filter(function (i) { return i.closest(".lightbox") === null; });
    var idx = 0;

    function show(i) {
      if (!sources.length) return;
      idx = (i + sources.length) % sources.length;
      var src = sources[idx];
      img.src = src.getAttribute("data-full") || src.src;
      var c = src.getAttribute("data-caption");
      cap.textContent = c || "";
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }
    function key(e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    }

    sources.forEach(function (s) {
      s.addEventListener("click", function () {
        show(sources.indexOf(s));
      });
    });
    lb.querySelector(".lightbox-close").addEventListener("click", close);
    lb.querySelector(".prev").addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
    lb.querySelector(".next").addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", key);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
