# UHM — راهنمای نصب پک گرافیکی

سایت استاتیک راهنمای نصب پک گرافیکی **Assetto Corsa** با برند **UHM**.

**سازنده:** Ali369 · **تلگرام:** [@uhm_009](https://t.me/uhm_009) · **نسخه پک:** v1.0

## اجرا

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## بازطراحی / آرشیو طراحی

همهٔ اطلاعات مرتب برای طراحی دوباره اینجاست:

### 👉 [`prompt/`](./prompt/)

شامل برند، رنگ، ساختار ۱۰ بخش، متن‌ها، مسیرها، توضیح عکس/ویدیو، تنظیمات UI و **پرامپت آماده AI**.

قبل از redesign فقط همان پوشه را بخوان.

## ساختار کد

```
index.html              لندینگ
pages/                  آموزش‌ها (۱۰ صفحه جدا)
css/                    style.css + home.css
js/                     layout, app, home-fx, video-player
assets/
  logo.png
  media/                ویدیوها
  download/             پک rar
  guides/               عکس‌های هر بخش
content/                txt خام
prompt/                 مستند طراحی ★
```

## بخش‌های آموزش (۱→۱۰)

1. نصب Pure (+ ویدیو)  
2. CSP Setting  
3. PP Filter  
4. Pure Config  
5. Video Setting  
6. Chaser Camera  
7. HUD  
8. SPR Light  
9. Neck FX  
10. تست گرافیک  

## زبان / تم

- پیش‌فرض فارسی RTL  
- سوییچ EN و Dark/Light در هدر  
