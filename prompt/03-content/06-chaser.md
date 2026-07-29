# بخش ۶ — Chaser Camera

| فیلد | مقدار |
|------|--------|
| id | `chaser` |
| صفحه | `pages/chaser.html` |
| عکس‌ها | ۳ عدد در `assets/guides/05-chaser/` |
| بج | با عکس |

## مراحل

### ۱) کپی فایل
```text
...\SteamLibrary\steamapps\common\assettocorsa\extension\lua\chaser-camera
```

### ۲) CSP → Chase
```
SETTINGS → Custom Shaders Patch → CHASE
```

باید:
- Extension = **Active**  
- Alternative script for second camera = **Active**  
- Script هر دو = **KirbyCam**  

⚠ اگر KirbyCam نباشد دوربین پک درست کار نمی‌کند.

### ۳) زاویه سوم‌شخص
```
SETTINGS → Assetto Corsa → Chase Camera
```

| دوربین | نمونه مقادیر از اسکرین |
|--------|-------------------------|
| First camera | Distance ≈ 3.35 m · Height ≈ 1.1 m · Pitch ≈ -1.6° |
| Second camera | Distance ≈ 4.31 m · Height ≈ 1.7 m · Pitch ≈ -0.4° |

## عکس‌ها

| فایل | کپشن |
|------|------|
| `chaser-camera-setting.jpg` | CSP Chase · Active + KirbyCam |
| `first-camera-angle.jpg` | Assetto Corsa → Chase Camera → First |
| `second-camera-angle.jpg` | Assetto Corsa → Chase Camera → Second |
