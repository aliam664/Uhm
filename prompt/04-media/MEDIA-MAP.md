# 04 — نقشه کامل مدیا

## لوگو

| فایل | مسیر | استفاده |
|------|------|---------|
| logo.png | `assets/logo.png` | همه جا |

---

## ویدیوها

| نقش | مسیر / URL | استفاده |
|-----|------------|---------|
| Showcase گرافیک | `assets/media/uhm-showcase.mp4` | هیرو (بلور پشت) + پلیر `#showcase` |
| آموزش Pure | CDN: `https://cdn.imgurl.ir/uploads/d525560_VID_20260729_234305_584.mp4` | صفحه `pure-install` |
| آموزش Pure (لوکال اختیاری) | `assets/media/pure-install-tutorial.mp4` | اگر آپلود شود اولویت لوکال |

### قوانین ویدیو Showcase

- muted + loop + autoplay در **پس‌زمینه هیرو**  
- بلور ملایم (حدود 5–8px) نه خیلی زیاد  
- ویدیو متمایل به سمت لوگو (`object-position` حدود 65–70% افقی)  
- veil قوی‌تر روی سمت متن  
- pause وقتی تب مخفی / اسکرول دور از هیرو  
- پلیر پایین: واضح، بدون بلور، کنترلر سفارشی  

---

## پک دانلود

| فایل | مسیر | فرمت | حجم تقریبی |
|------|------|------|------------|
| پک اصلی | `assets/download/uhm-graphics-pack.rar` | RAR | ~4.4 MB |

دکمه‌های دانلود همه به **همین RAR** اشاره کنند (نه zip مگر فایل عوض شود).

---

## عکس‌های آموزش (guides)

پایه: `assets/guides/`

| پوشه | بخش | فایل‌ها | وضعیت |
|------|-----|---------|--------|
| `01-csp/` | CSP | `csp-setting.jpg` | ✅ |
| `02-pp-filter/` | PP Filter | — | ❌ خالی |
| `03-pure-config/` | Pure Config | `01-click-import.jpg`, `02-select-uhm-config.jpg` | ✅ |
| `04-video/` | Video | `video-setting.jpg` | ✅ |
| `05-chaser/` | Chaser | `chaser-camera-setting.jpg`, `first-camera-angle.jpg`, `second-camera-angle.jpg` | ✅ |
| `06-hud/` | HUD | `hud-setting.jpg` | ✅ |
| `07-spr-light/` | SPR Light | — | ❌ خالی |
| `08-neck-fx/` | Neck FX | `neck-fx-setting.jpg` | ✅ |
| `09-graphics-test/` | گالری | ۹× jpg | ✅ |
| `10-pure-install/` | نصب Pure | — | ❌ خالی (ویدیو دارد) |

> شماره پوشه guides با شماره UI بخش **یکی نیست** (تاریخچه).  
> جدول بالا مرجع است. موقع بازطراحی می‌توانی یک‌به‌یک‌سازی کنی ولی همزمان کد را آپدیت کن.

---

## بج روی کارت‌ها

| شرط | بج |
|-----|-----|
| بخش عکس دارد | `با عکس` |
| بخش فقط ویدیو آموزشی دارد (Pure Install) | `ویدیو` |
| هیچ مدیایی ندارد | بدون بج |

---

## کپشن‌نویسی

- کپشن = توضیح **چه چیزی در اسکرین مشخص شده**  
- مسیر UI را با `→` بنویس  
- اسم دقیق دکمه/تیک را داخل chip نگه دار  
