# 02 — صفحات و شماره‌گذاری

## صفحه اصلی

| فایل | نقش |
|------|-----|
| `index.html` | لندینگ کامل: هیرو، ویدیو، دانلود، چک‌لیست، نسخه‌ها، کارت بخش‌ها، FAQ، سازنده |

## صفحات آموزش (هر کدام جدا — قاطی نشوند)

| # | id (کد) | عنوان UI | فایل |
|---|---------|----------|------|
| 1 | `pure-install` | نصب Pure | `pages/pure-install.html` |
| 2 | `csp` | CSP Setting | `pages/csp.html` |
| 3 | `pp-filter` | PP Filter | `pages/pp-filter.html` |
| 4 | `pure-config` | Pure Config | `pages/pure-config.html` |
| 5 | `video` | Video Setting | `pages/video.html` |
| 6 | `chaser` | Chaser Camera | `pages/chaser.html` |
| 7 | `hud` | HUD | `pages/hud.html` |
| 8 | `spr-light` | SPR Light | `pages/spr-light.html` |
| 9 | `neck-fx` | Neck FX | `pages/neck-fx.html` |
| 10 | `graphics-test` | تست گرافیک | `pages/graphics-test.html` |

> ⚠️ «نصب Pure» (بخش ۱) با «Pure Config» (بخش ۴) فرق دارد.  
> اول خود ماد Pure، بعد کانفیگ پک.

## ناوبری

| عنصر | رفتار |
|------|--------|
| منوی همبرگری | سایدبار از **چپ** باز می‌شود |
| سایدبار | لیست Home + ۱۰ بخش + تگ سازنده |
| کارت‌های صفحه اصلی | لینک به همان صفحات |
| Prev / Next | پایین هر صفحه آموزش |
| Sticky dock (موبایل/اسکرول) | دانلود سریع + لینک ویدیو |
| Back to top | دکمه ↑ |

## انکرهای لندینگ

| id | بخش |
|----|-----|
| `#showcase` | ویدیو نمایش گرافیک |
| `#download` | دانلود پک |
| `#looks` | ریل اسکرین‌شات |
| `#quickstart` | چک‌لیست + قدم‌ها |
| `#guides` | کارت‌های ۱۰ بخش |
| `#faq` | سوالات پرتکرار |
| `#creator` | بنر سازنده |

## قانون ساختار

- هر آموزش = **یک صفحه HTML جدا**  
- متن بخش‌ها قاطی نشود  
- منو همیشه از چپ  
- فارسی پیش‌فرض RTL  
