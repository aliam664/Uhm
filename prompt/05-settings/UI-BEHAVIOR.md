# 05 — رفتار UI و تنظیمات

## تم

| مورد | مقدار |
|------|--------|
| پیش‌فرض | Dark |
| سوییچ | دکمه خورشید/ماه در هدر |
| ذخیره‌سازی | `localStorage['uhm-theme']` = `dark` \| `light` |
| بدون فلش | اسکریپت کوچک در `<head>` قبل از CSS کامل |

## زبان

| مورد | مقدار |
|------|--------|
| پیش‌فرض | FA · RTL |
| سوییچ | FA / EN در هدر |
| ذخیره‌سازی | `localStorage['uhm-lang']` |
| پیاده‌سازی | attributes: `data-fa` / `data-en` روی عناصر |
| وضعیت EN | فعلاً ناقص — خیلی از رشته‌ها همان FA یا خلاصه EN |

## منو

- همیشه از **چپ**  
- Overlay تیره  
- Escape و کلیک بیرون = بستن  
- موبایل: با انتخاب لینک بسته شود  

## کپی مسیر

- باکس path + دکمه «کپی مسیر»  
- Toast موفقیت  
- Path همیشه LTR  

## ویدیو Showcase (پلیر اصلی)

- Custom controls: play/pause · seek · mute · fullscreen  
- Overlay بزرگ قبل از پخش  
- Keyboard: Space/K · M · F · Arrow  
- فایل: `assets/media/uhm-showcase.mp4`  

## ویدیو Hero پس‌زمینه

- muted · loop · autoplay · playsinline  
- blur حدود **7px** (قابل تنظیم 5–9)  
- روشن‌تر از نسخه اولیه  
- position متمایل به لوگو  
- pause در hidden tab / اسکرول دور  

## چک‌لیست

- کلید: `localStorage['uhm-prep-checks']`  
- ۵ چک‌باکس · نوار progress  

## گالری

- Lightbox · prev/next · Escape  
- عکس‌ها embed در HTML صفحه ۱۰  

## انیمیشن‌های مجاز (متناسب، نه شلوغ)

- scroll reveal / stagger  
- count-up اعداد  
- word reveal هیرو  
- magnetic CTA (دسکتاپ)  
- tilt ملایم کارت  
- spotlight موس روی هیرو  
- sticky download dock  
- scroll progress bar  
- marquee  
- `prefers-reduced-motion` = خاموش کردن انیمیشن‌ها  

## موبایل

- CTA تمام‌عرض در هیرو  
- سایدبار max ~88vw  
- ریل اسکرین افقی اسکرول  
- dock چسبان پایین  
- touch: tilt/magnetic خاموش  

## SEO / متا

- title شامل UHM + Assetto Corsa + Ali369  
- description فارسی  
- og:title / og:description / og:image=logo  
- theme-color هماهنگ تم  
