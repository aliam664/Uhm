# 🧠 پرامپت حرفه‌ای ساخت سایت UHM (نسخه هوشمند + مبتنی بر جستجو)

> این پرامپت را کپی کن و به هر AI ای که می‌خواهی سایت را بسازد بده.
> این نسخه با نسخه ساده (AI-PROMPT.md) فرق دارد: **AI ابتدا اینترنت را می‌گردد**،
> چند استایل را بررسی می‌کند، روانشناسی طراحی را مطالعه می‌کند و بعد سایت را می‌سازد.

---

## ⚙️ اطلاعاتی که باید قبل از استفاده جایگزین کنی

| جایگزین | مقدار پیش‌فرض (این پروژه) |
|---------|---------------------------|
| آدرس ریپو (repo URL) | `https://github.com/aliam664/Uhm.git` |
| مسیر محلی (لوکال) | `/home/user/Uhm` |
| کامیت کامل (کد قبلی) | `7df3b87` (`Add files via upload`) — این کامیت شامل `index.html`, `pages/`, `css/`, `js/` است |

> به AI بگو **یک‌بار مرجع را بخواند** (از آدرس ریپو یا مسیر محلی) و سپس جستجوها را انجام دهد.

---

## ✂️ --- متن پرامپت (از اینجا کپی کن) ---

```text
You are a senior front-end designer and developer building a professional,
hand-crafted marketing site from scratch. You have full web access (browsing
and web search). You must actually USE it.

## STEP 0 — Read the source of truth (required before anything)
Read the repository at https://github.com/aliam664/Uhm.git (or the local path
/home/user/Uhm). The folder /prompt inside it is the SINGLE SOURCE OF TRUTH.
Read ALL of it before designing:
  - prompt/README.md and prompt/00-INDEX.md   (map + checklist)
  - prompt/01-brand/    (identity, logo, colors, typography, tone)
  - prompt/02-structure/ (sections, pages, navigation, anchors)
  - prompt/03-content/  (exact step text, Windows paths, warnings for all 10 guides)
  - prompt/04-media/    (media map + image captions)
  - prompt/05-settings/ (UI behavior, theme, language, animations)
  - prompt/06-redesign/ (do-not rules + previous brief)
Do NOT invent brand facts, paths, media filenames, the creator name, or the
Telegram handle. Everything real is in /prompt.

## STEP 1 — Research phase (do this BEFORE designing, and actually search)
Use web search and open real articles. Synthesize them into concrete design
rules you will follow. Cover ALL of the following:

1. "How to make a website NOT look AI-generated"
   - Read multiple articles on what makes AI sites feel generic (overused glass
     gradient blobs, generic hero copy, samey bento grids, fake "About us",
     stocky purple gradients, robotic microcopy).
   - Extract a concrete list of "AI tells" to AVOID, and the human touches to
     ADD (specific copy, real asymmetry, intentional imperfections, bespoke
     details that only make sense for THIS product).

2. Web design psychology / UX psychology
   - Read about visual hierarchy, Hick's law, F-pattern vs Z-pattern reading,
     color psychology, contrast and accessibility (WCAG), cognitive load,
     social proof, and how trust is built on a download/guide site.
   - Turn these into concrete decisions: where the primary CTA goes, how many
     options to show, how to make a download button feel trustworthy, etc.

3. Reference styles (study at least 4–6 real sites/templates)
   - Look at modern gaming/mod-pack landing pages and premium SaaS landing pages
     from 2025–2026. Note real patterns in layout rhythm, spacing, type scale,
     hover/motion, and section transitions. Do NOT copy them verbatim —
     adapt ideas into a coherent system for THIS brand.

4. Typography & color
   - Briefly research pairing best practices for a bilingual Persian/English
     site (RTL + LTR mixing) and for a dark premium gaming theme.
   - Keep UHM's electric-blue-on-void identity (from prompt/01-brand/COLORS.md).

## STEP 2 — Present your design plan first
Before writing code, output a short plan to me with:
  - 3 moodboard keywords (e.g. "industrial premium, dark cockpit, neon precision")
  - Your typography stack and type scale
  - Your color tokens (reuse UHM's, extend carefully)
  - The research takeaways you applied (cite the ideas, not just the links)
  - The section blueprint for the landing page and the 10 guide pages

## STEP 3 — Build (all the requirements that MUST be kept)
- Static site: separate HTML per guide (10 sections) + home landing. No build step.
- FA default RTL + EN switch. Dark/Light theme (default Dark), saved in localStorage.
- Fonts: Vazirmatn (FA) + Outfit (EN/brand). Copyable Windows paths (always LTR).
- Red warnings for risks/disclaimers. Full disclaimer kept. Backup reminder kept.
- Download button → assets/download/uhm-graphics-pack.rar (~4.4MB).
- Showcase video → assets/media/uhm-showcase.mp4 (blurred hero background + clear #showcase player).
- Pure install tutorial video → the CDN URL in prompt (optional local file too).
- Neck FX link → https://acstuff.ru/s/VRDXD1
- Creator credit Ali369 / @uhm_009 visible on header/sidebar/footer/home.
- "با عکس" badge ONLY on sections that actually have images (see MEDIA-MAP.md).
- Pure Install (#1) is DIFFERENT from Pure Config (#4). Do not merge them.
- Photo gallery lightbox on section 10 (images already embedded in assets).
- Mobile-first: left sidebar menu (max ~88vw), full-width hero CTAs, sticky
  download dock, horizontal screenshot rail, prefers-reduced-motion respected.

## STEP 4 — Design quality bar (make it look human and premium)
- Aim for a "designed by a person who loves this niche" feel, NOT a generic AI
  template. Apply every lesson from STEP 1.
- Clean information design: path boxes, step numbering, warning callouts that
  are easy to scan.
- Motion: reveal/stagger, count-up, subtle magnetic/tilt (desktop only), scroll
  progress, sticky dock — controlled, never cluttered. Honor prefers-reduced-motion.
- Accessible and fast: semantic HTML, alt text, keyboard-friendly, no heavy
  framework, lazy-loaded images/video.

## Deliverable
- A working static site (HTML/CSS/JS) at the repo root that opens with:
    python3 -m http.server 8080   # then open http://localhost:8080
- Home landing + 10 guide pages + working download, showcase video, gallery.
- Keep existing media filenames. If you must change any, update prompt/ docs too.

## Hard do-NOT (from prompt/06-redesign/DO-NOT.md)
- Do not mix guide texts between pages. Sidebar always opens from the LEFT.
- Do not mark PP Filter or SPR Light with "با عکس" (they have no images yet).
- Do not use a different primary brand color than the logo's electric blue.
- Do not remove the disclaimer, the backup/pre-requisite notes, or the creator.
- Do not lose the Neck FX link. Keep the pack as RAR (not zip) unless it changes.
- Do not over-blur the hero video. Do not make the mobile experience laggy.
- Do not skip updating the prompt/ folder if you add or rename any media.
```

## 📋 --- بعد از تحویل ---

- [ ] سایت را باز کن و دانلود/ویدیو/گالری/۱۰ بخش را تست کن
- [ ] اگر فایلی عوض شد → `prompt/04-media/MEDIA-MAP.md` را آپدیت کن
- [ ] نسخه پک را در برند + UI چک کن
