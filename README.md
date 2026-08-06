# UHM — Graphics Pack for Assetto Corsa

> 📦 آرشیو کامل و مرجع این پروژه. کد سایت (HTML/CSS/JS) حذف شده و اینجا فقط
> **محتوا، مدیا، و اطلاعات ساخت** باقی مانده تا هر وقت خواستی سایت را دوباره بسازی، همه‌چیز جلوی چشمت باشد.

---

## 🔑 اطلاعات کلیدی (همیشه سر دست)

| فیلد | مقدار |
|------|--------|
| 🏷️ برند | **UHM** |
| 👤 سازنده | **Ali369** |
| ✈️ تلگرام | [@uhm_009](https://t.me/uhm_009) |
| 🎮 بازی | Assetto Corsa |
| 📀 نسخه پک | **v1.0** |
| 🗂️ فایل پک | `assets/download/uhm-graphics-pack.rar` (~4.4 MB) |
| 🎬 ویدیوی نمایش | `assets/media/uhm-showcase.mp4` |
| 🧩 لینک Neck FX | https://acstuff.ru/s/VRDXD1 |
| 📺 ویدیوی آموزش Pure (CDN) | https://cdn.imgurl.ir/uploads/d525560_VID_20260729_234305_584.mp4 |
| 🖼️ لوگو | `assets/logo.png` |

---

## 📁 ساختار فعلی این ریپو

```
Uhm/
├── README.md              ← همین مرجع (همه‌چیز سر دست)
├── content/               ← متن‌های خام راهنماها (۸ فایل txt)
├── assets/
│   ├── logo.png           ← لوگوی UHM
│   ├── media/             ← ویدیوها (showcase و آموزش Pure)
│   ├── download/          ← فایل پک (rar)
│   └── guides/            ← عکس‌های آموزشی هر بخش (شماره‌دار)
└── prompt/                ← آرشیو کامل طراحی برای بازسازی سایت ★
    ├── 00-INDEX.md           نقشه سریع + چک‌لیست
    ├── 01-brand/             برند، رنگ، تایپوگرافی
    ├── 02-structure/         صفحات، منو، ناوبری
    ├── 03-content/           متن هر بخش + مسیرها + هشدارها
    ├── 04-media/             نقشه مدیا + کپشن‌ها
    ├── 05-settings/          رفتار UI، تم، زبان
    └── 06-redesign/          پرامپت آماده AI برای ساخت دوباره
```

> **کار حذف شده:** فایل‌های `index.html`، `pages/`، `css/`، `js/`، `BUG-REPORT.md`
> و نسخه‌های تکراری ریشه‌ی `نصب *.txt` حذف شدند. این ریپو دیگر کد ندارد — فقط آرشیو است.

---

## 🧭 ۱۰ بخش آموزش (۱ → ۱۰)

هر بخش یک پوشه عکس در `assets/guides/` و یک فایل مستند در `prompt/03-content/` دارد.

| # | بخش (id) | متن خام `content/` | مستند کامل `prompt/03-content/` | عکس‌ها در `assets/guides/` |
|---|----------|--------------------|-------------------------------|---------------------------|
| 1 | نصب Pure (`pure-install`) | — | `01-pure-install.md` | `10-pure-install/` (فعلاً خالی — ویدیو دارد) |
| 2 | CSP Setting (`csp`) | `نصب (csp).txt` | `02-csp.md` | `01-csp/csp-setting.jpg` |
| 3 | PP Filter (`pp-filter`) | `نصب (PP Filter).txt` | `03-pp-filter.md` | `02-pp-filter/` (فعلاً خالی) |
| 4 | Pure Config (`pure-config`) | `نصب (pure config).txt` | `04-pure-config.md` | `03-pure-config/` (۲ عکس) |
| 5 | Video Setting (`video`) | `نصب (Video).txt` | `05-video.md` | `04-video/video-setting.jpg` |
| 6 | Chaser Camera (`chaser`) | `نصب chase camera.txt` | `06-chaser.md` | `05-chaser/` (۳ عکس) |
| 7 | HUD (`hud`) | `نصب HUD.txt` | `07-hud.md` | `06-hud/hud-setting.jpg` |
| 8 | SPR Light (`spr-light`) | `نصب (SPR Light).txt` | `08-spr-light.md` | `07-spr-light/` (فعلاً خالی) |
| 9 | Neck FX (`neck-fx`) | `نصب (Neck Fx).txt` | `09-neck-fx.md` | `08-neck-fx/neck-fx-setting.jpg` |
| 10 | تست گرافیک (`graphics-test`) | — | `10-graphics-test.md` | `09-graphics-test/` (۹ اسکرین‌شات) |

> ⚠️ **نصب Pure** (بخش ۱) با **Pure Config** (بخش ۴) فرق دارد — اول خود ماد Pure، بعد کانفیگ پک.
> ⚠️ شماره پوشه‌های `assets/guides/` با شماره UI بخش **یکی نیست** (تاریخچه) — جدول بالا مرجع است.

---

## 🗂️ موجودی کامل مدیا

### تصاویر آموزشی (`assets/guides/`)

| پوشه | بخش | فایل‌ها | وضعیت |
|------|-----|---------|--------|
| `01-csp/` | CSP | `csp-setting.jpg` | ✅ |
| `02-pp-filter/` | PP Filter | — | ❌ خالی |
| `03-pure-config/` | Pure Config | `01-click-import.jpg`، `02-select-uhm-config.jpg` | ✅ |
| `04-video/` | Video | `video-setting.jpg` | ✅ |
| `05-chaser/` | Chaser | `chaser-camera-setting.jpg`، `first-camera-angle.jpg`، `second-camera-angle.jpg` | ✅ |
| `06-hud/` | HUD | `hud-setting.jpg` | ✅ |
| `07-spr-light/` | SPR Light | — | ❌ خالی |
| `08-neck-fx/` | Neck FX | `neck-fx-setting.jpg` | ✅ |
| `09-graphics-test/` | گالری | ۹ × jpg | ✅ |
| `10-pure-install/` | نصب Pure | — | ❌ خالی (ویدیو دارد) |

### ویدیوها (`assets/media/`)

| فایل | کاربرد |
|------|--------|
| `uhm-showcase.mp4` | نمایش گرافیک (هیرو + پلیر اصلی) |
| `pure-install-tutorial.mp4` | آموزش نصب Pure — اختیاری/لوکال (اگر نبود، از CDN پخش می‌شود) |

### سایر

| فایل | مسیر |
|------|------|
| پک گرافیکی | `assets/download/uhm-graphics-pack.rar` |
| لوگو | `assets/logo.png` |

---

## 📄 متن‌های خام راهنما (`content/`)

۸ فایل txt که منبع متن بخش‌ها هستند:

- `نصب (csp).txt`
- `نصب (PP Filter).txt`
- `نصب (pure config).txt`
- `نصب (Video).txt`
- `نصب chase camera.txt`
- `نصب HUD.txt`
- `نصب (SPR Light).txt`
- `نصب (Neck Fx).txt`

---

## 🛠️ نسخه‌های گرافیکی پک

| نسخه | پیشنهاد |
|------|---------|
| Low End PC | سیستم ضعیف |
| Low | کیفیت پایین، روان |
| **Medium** | **پیشنهادی برای RX 580** |
| High | سیستم نسبتاً قوی |
| Ultra | سیستم قدرتمند |

### پیش‌نیازهای کلی (قبل از نصب پک)

1. Content Manager
2. Custom Shaders Patch (CSP) — آخرین نسخه
3. **Pure** — آخرین نسخه (بخش ۱)
4. Light Patch — آخرین نسخه
5. بکاپ از فایل‌های بازی

---

## 🔗 لینک‌های ثابت

| نام | مقدار |
|-----|--------|
| تلگرام پشتیبانی | https://t.me/uhm_009 |
| سازنده | Ali369 |
| Neck FX acstuff | https://acstuff.ru/s/VRDXD1 |
| ویدیوی آموزش Pure (CDN) | https://cdn.imgurl.ir/uploads/d525560_VID_20260729_234305_584.mp4 |

---

## ♻️ چطور سایت را دوباره بسازم؟

همه‌چیز لازم از قبل آماده است. مراحل:

1. **`prompt/README.md`** را اول بخوان (نقشه آرشیو).
2. **`prompt/06-redesign/AI-PROMPT.md`** را کپی کن و به یک AI بده تا سایت را بسازد — قبلاً به آن بگو کل پوشه `prompt/` را بخواند.
3. اطلاعات برند/رنگ/تایپوگرافی ← `prompt/01-brand/`
4. ساختار صفحات/منو ← `prompt/02-structure/`
5. متن هر بخش + مسیرهای ویندوز ← `prompt/03-content/`
6. نقشه و کپشن مدیا ← `prompt/04-media/`
7. رفتار UI/تم/زبان ← `prompt/05-settings/`
8. قوانین نبایدها ← `prompt/06-redesign/DO-NOT.md`

### مشخصات فنی هدف (استک سایت قبلی)

- استاتیک: HTML / CSS / JS — بدون فریم‌ورک
- فارسی پیش‌فرض RTL + سوییچ EN
- تم Dark / Light
- فونت: Vazirmatn (FA) + Outfit (EN/برند)
- اجرای محلی: `python3 -m http.server 8080`
- جزئیات کامل: `prompt/05-settings/TECH-STACK.md` و `UI-BEHAVIOR.md`
