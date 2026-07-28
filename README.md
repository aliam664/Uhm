# UHM — راهنمای نصب پک گرافیکی

سایت استاتیک راهنمای نصب پک گرافیکی **Assetto Corsa** با برند **UHM**.

## اجرا

فایل `index.html` را در مرورگر باز کنید، یا با یک سرور محلی:

```bash
npx serve .
# یا
python3 -m http.server 8080
```

## ساختار

```
index.html                 صفحه اصلی
pages/                     بخش‌های ۱ تا ۹ (هر کدام صفحه جدا)
css/style.css              تم تیره + آبی الکتریک لوگو
js/layout.js               هدر و منوی چپ مشترک
js/app.js                  منو، زبان، کپی مسیر
js/gallery-manifest.js     لیست عکس‌های بخش تست گرافیک
assets/logo.png            لوگو UHM
assets/graphics-test/      ← عکس‌های گالری را اینجا بگذارید
content/                   متن‌های خام راهنما (txt)
```

## بخش‌ها

1. CSP Setting  
2. PP Filter  
3. Pure Config  
4. Video Setting  
5. Chaser Camera  
6. HUD  
7. SPR Light  
8. Neck FX  
9. تست گرافیک  

## گالری (بخش ۹)

1. عکس‌ها را در `assets/graphics-test/` آپلود کنید.  
2. نام فایل‌ها را در `js/gallery-manifest.js` بنویسید:

```js
window.UHM_GALLERY = ["img1.jpg", "img2.png"];
```

## زبان

پیش‌فرض فارسی (RTL). دکمه EN در هدر برای سوییچ است؛ متن کامل انگلیسی بعداً تکمیل می‌شود.
