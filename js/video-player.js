/* ============================================================
   UHM — video-player.js
   Custom cinematic player for showcase & guide videos.
   Works on any element with data-player="true".
   ============================================================ */
(function () {
  "use strict";
  function $(s) { return document.querySelector(s); }

  function fmt(sec) {
    if (!isFinite(sec)) return "0:00";
    sec = Math.floor(sec);
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function initPlayer(wrap) {
    var video = wrap.querySelector("video");
    var overlay = wrap.querySelector(".player-overlay");
    var playBtn = wrap.querySelector(".pc-play");
    var muteBtn = wrap.querySelector(".pc-mute");
    var fsBtn = wrap.querySelector(".pc-fs");
    var seek = wrap.querySelector(".pc-seek");
    var fill = wrap.querySelector(".pc-fill");
    var timeEl = wrap.querySelector(".pc-time");

    if (!video) return;

    function updateTime() {
      if (fill && video.duration) fill.style.width = ((video.currentTime / video.duration) * 100) + "%";
      if (timeEl) timeEl.textContent = fmt(video.currentTime) + " / " + fmt(video.duration);
    }
    function play() {
      video.play();
      if (overlay) overlay.classList.add("hidden");
    }
    function pause() {
      video.pause();
      if (overlay) overlay.classList.remove("hidden");
    }
    function toggle() { video.paused ? play() : pause(); }

    if (overlay) overlay.addEventListener("click", play);
    if (playBtn) playBtn.addEventListener("click", toggle);
    if (muteBtn) muteBtn.addEventListener("click", function () {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? "🔇" : "🔊";
    });
    if (fsBtn) fsBtn.addEventListener("click", function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (wrap.requestFullscreen) wrap.requestFullscreen();
    });
    if (seek) {
      seek.addEventListener("click", function (e) {
        var r = seek.getBoundingClientRect();
        var ratio = (e.clientX - r.left) / r.width;
        if (video.duration) video.currentTime = ratio * video.duration;
      });
    }
    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateTime);
    video.addEventListener("ended", function () {
      if (overlay) overlay.classList.remove("hidden");
    });
    /* keyboard */
    wrap.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "k" || e.key === "K") { e.preventDefault(); toggle(); }
      if (e.key === "m" || e.key === "M") { video.muted = !video.muted; if (muteBtn) muteBtn.textContent = video.muted ? "🔇" : "🔊"; }
      if (e.key === "f" || e.key === "F") fsBtn.click();
    });
    wrap.tabIndex = 0;
    updateTime();
  }

  function init() {
    document.querySelectorAll("[data-player]").forEach(initPlayer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
