# 05 — مشخصات فنی (استک سایت قبلی)

> ⚠️ فایل‌های کد سایت حذف شده‌اند. فهرست زیر **نقش و ساختار پیشنهادی** برای ساخت دوباره است.

## فایل‌های JS و نقش (پیشنهادی برای بازسازی)

| فایل | نقش |
|------|-----|
| `js/layout.js` | تزریق هدر/سایدبار · آرایه `sections` · prev/next |
| `js/app.js` | تم · زبان · منو · کپی · toast |
| `js/home-fx.js` | افکت لندینگ · چک‌لیست · dock · toTop · ویدیو هیرو |
| `js/video-player.js` | پلیر showcase |
| `js/gallery-manifest.js` | لیست قدیمی گالری (پشتیبان) |

## CSS

| فایل | نقش |
|------|-----|
| `css/style.css` | توکن‌ها · هدر · سایدبار · صفحات آموزش · گالری · پلیر مشترک |
| `css/home.css` | لندینگ · هیرو · bento · FAQ · checklist · ویدیو بلور |

## وابستگی خارجی

- Google Fonts: Vazirmatn + Outfit  
- CDN ویدیو Pure (imgurl)  
- لینک acstuff برای Neck FX  

## بدون

- بیلد استپ اجباری  
- بک‌اند  
- دیتابیس  
- فریم‌ورک SPA  

## اجرای محلی

```bash
python3 -m http.server 8080
# باز کردن http://localhost:8080
```
