/* UHM cinematic showcase player */
(function () {
  "use strict";

  var video = document.getElementById("showcaseVideo");
  var frame = document.getElementById("mediaFrame");
  var overlay = document.getElementById("videoOverlay");
  var bar = document.getElementById("videoBar");
  var btnPlay = document.getElementById("vPlay");
  var btnMute = document.getElementById("vMute");
  var btnFs = document.getElementById("vFs");
  var seek = document.getElementById("vSeek");
  var fill = document.getElementById("vFill");
  var buf = document.getElementById("vBuf");
  var timeEl = document.getElementById("vTime");
  if (!video || !frame) return;

  var icoPlay = btnPlay ? btnPlay.querySelector(".ico-play") : null;
  var icoPause = btnPlay ? btnPlay.querySelector(".ico-pause") : null;
  var icoVol = btnMute ? btnMute.querySelector(".ico-vol") : null;
  var icoMute = btnMute ? btnMute.querySelector(".ico-mute") : null;
  var hideTimer = null;
  var seeking = false;

  function fmt(t) {
    if (!isFinite(t) || t < 0) t = 0;
    var m = Math.floor(t / 60);
    var s = Math.floor(t % 60);
    return m + ":" + String(s).padStart(2, "0");
  }

  function setPlaying(on) {
    frame.classList.toggle("is-playing", on);
    frame.classList.toggle("is-paused", !on);
    if (overlay) overlay.hidden = on;
    if (icoPlay) icoPlay.hidden = on;
    if (icoPause) icoPause.hidden = !on;
  }

  function setMuted(on) {
    video.muted = on;
    if (icoVol) icoVol.hidden = on;
    if (icoMute) icoMute.hidden = !on;
  }

  function updateProgress() {
    var d = video.duration || 0;
    var c = video.currentTime || 0;
    var p = d ? (c / d) * 100 : 0;
    if (fill) fill.style.width = p + "%";
    if (timeEl) timeEl.textContent = fmt(c) + " / " + fmt(d);

    if (buf && video.buffered && video.buffered.length) {
      try {
        var end = video.buffered.end(video.buffered.length - 1);
        buf.style.width = d ? (end / d) * 100 + "%" : "0%";
      } catch (_) {}
    }
  }

  function play() {
    // Video is lazy-loaded (preload="none"); ensure a source is ready before
    // the first play so the seek bar gets a real duration right away.
    if (video.readyState < 2 && video.querySelector("source")) {
      video.load();
    }
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }

  function togglePlay() {
    if (video.paused) play();
    else video.pause();
  }

  function showBar() {
    frame.classList.add("show-bar");
    clearTimeout(hideTimer);
    if (!video.paused) {
      hideTimer = setTimeout(function () {
        frame.classList.remove("show-bar");
      }, 2600);
    }
  }

  function seekToClientX(clientX) {
    if (!seek || !video.duration) return;
    var rect = seek.getBoundingClientRect();
    var ratio = (clientX - rect.left) / rect.width;
    // RTL page: still left-to-right seek feels natural for video
    ratio = Math.min(1, Math.max(0, ratio));
    video.currentTime = ratio * video.duration;
    updateProgress();
  }

  // Events
  if (overlay) {
    overlay.addEventListener("click", function () {
      play();
      showBar();
    });
  }

  if (btnPlay) btnPlay.addEventListener("click", function (e) {
    e.stopPropagation();
    togglePlay();
    showBar();
  });

  if (btnMute) btnMute.addEventListener("click", function (e) {
    e.stopPropagation();
    setMuted(!video.muted);
    showBar();
  });

  if (btnFs) btnFs.addEventListener("click", function (e) {
    e.stopPropagation();
    var el = frame;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    showBar();
  });

  video.addEventListener("play", function () { setPlaying(true); showBar(); });
  video.addEventListener("pause", function () {
    setPlaying(false);
    frame.classList.add("show-bar");
    clearTimeout(hideTimer);
  });
  video.addEventListener("ended", function () {
    setPlaying(false);
    if (overlay) overlay.hidden = false;
    frame.classList.add("show-bar");
  });
  video.addEventListener("timeupdate", updateProgress);
  video.addEventListener("progress", updateProgress);
  video.addEventListener("loadedmetadata", updateProgress);
  video.addEventListener("click", function () {
    togglePlay();
    showBar();
  });

  frame.addEventListener("mousemove", showBar);
  frame.addEventListener("touchstart", showBar, { passive: true });

  // Keyboard when focused
  frame.tabIndex = 0;
  frame.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "k" || e.key === "K") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "m" || e.key === "M") {
      setMuted(!video.muted);
    } else if (e.key === "f" || e.key === "F") {
      btnFs && btnFs.click();
    } else if (e.key === "ArrowRight") {
      video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
    } else if (e.key === "ArrowLeft") {
      video.currentTime = Math.max(0, video.currentTime - 5);
    }
    showBar();
  });

  if (seek) {
    seek.addEventListener("pointerdown", function (e) {
      seeking = true;
      seek.setPointerCapture(e.pointerId);
      seekToClientX(e.clientX);
      showBar();
    });
    seek.addEventListener("pointermove", function (e) {
      if (!seeking) return;
      seekToClientX(e.clientX);
    });
    seek.addEventListener("pointerup", function () { seeking = false; });
    seek.addEventListener("pointercancel", function () { seeking = false; });
  }

  // Initial state
  setPlaying(false);
  setMuted(false);
  frame.classList.add("show-bar");
  video.load();
})();
