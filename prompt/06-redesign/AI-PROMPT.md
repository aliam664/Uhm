# 06 — پرامپت آماده برای بازطراحی با AI

متن زیر را کپی کن و به AI بده. قبلش بگو پوشه `prompt/` را بخواند.

---

## PROMPT

```text
You are redesigning the UHM Graphics Pack website (Assetto Corsa install guide).

FIRST read the entire /prompt folder in this repo. Treat it as the single source of truth.
Do not invent brand facts, paths, or media filenames.

## Product
- Brand: UHM
- Creator: Ali369
- Telegram: https://t.me/uhm_009 (@uhm_009)
- Pack version: v1.0
- Game: Assetto Corsa
- Purpose: download pack + step-by-step install guides + showcase video + screenshots

## Must keep
1. Separate page per guide section (do not mix section texts).
2. Left sidebar navigation (always from the left).
3. FA default RTL + optional EN switch.
4. Dark/Light theme.
5. Red warnings for risks/disclaimers.
6. Copyable Windows paths with FA notes.
7. Download file: assets/download/uhm-graphics-pack.rar
8. Showcase video: assets/media/uhm-showcase.mp4
9. Hero uses the SAME showcase video as a blurred cinematic background behind logo/text (clearer blur ~5–8px, not muddy). Full clear player remains in #showcase.
10. Section order and numbering from prompt/02-structure/PAGES.md (10 sections; Pure Install is #1 and different from Pure Config #4).
11. Photo badge only on sections that actually have images (see prompt/04-media/MEDIA-MAP.md).
12. Pure install tutorial video URL from prompt (CDN + optional local file).
13. Neck FX link: https://acstuff.ru/s/VRDXD1
14. Creator credit Ali369 / @uhm_009 on header/sidebar/footer/home.

## Content sources
- All steps/paths/captions: prompt/03-content/*
- All media mapping/captions: prompt/04-media/*
- UI behavior: prompt/05-settings/*
- Brand/colors/type: prompt/01-brand/*

## Design direction
- Premium gaming / mod-pack landing page (2025–2026).
- Logo-matched electric blue on void black; optional polished light mode.
- Glass cards, strong hierarchy, Vazirmatn + Outfit.
- Modern motion but controlled: reveal, stagger, count-up, subtle magnetic/tilt, sticky download dock, scroll progress. Honor prefers-reduced-motion.
- Mobile-first polish; big CTAs; no clutter.

## Deliverable
- Beautiful static site (HTML/CSS/JS unless repo already uses another stack).
- Home landing + individual guide pages + working video/download/gallery.
- Keep filenames for existing media unless you migrate them and update prompt docs too.

## Do NOT
- Do not remove disclaimers.
- Do not mark empty sections as “with photos”.
- Do not merge Pure Install into Pure Config.
- Do not change Telegram handle or creator name.
- Do not use a different primary brand color than logo blue.
```

---

## بعد از بازطراحی

- [ ] `prompt/04-media/MEDIA-MAP.md` اگر فایل جدید آمد آپدیت شود  
- [ ] اسکرین‌شات واقعی از UI جدید به `prompt/06-redesign/screenshots/` (اختیاری)  
- [ ] نسخه پک اگر عوض شد در brand + UI  
