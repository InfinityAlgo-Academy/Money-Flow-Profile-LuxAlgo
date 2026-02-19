# 🚀 تعليمات رفع المشروع على GitHub و Vercel

## 📤 الخطوة 1: رفع المشروع على GitHub

### الطريقة الأولى: سحب وإضافة (Recommandée)

```bash
# 1. افتح Terminal في المجلد
cd /home/z/my-project

# 2. أضف remote للمستودع
git remote add origin https://github.com/InfinityAlgo-Academy/Arbitrage-Matrix-LuxAlgo.git

# 3. ارفع المشروع (سيطلب منك اسم المستخدم وكلمة المرور)
git push -u origin main
```

### الطريقة الثانية: استخدام Personal Access Token

1. **إنشاء Token:**
   - اذهب إلى GitHub.com
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - اضغط "Generate new token"
   - اختر صلاحيات `repo`
   - انسخ الـ Token

2. **الرفع باستخدام Token:**
```bash
git remote add origin https://<YOUR_TOKEN>@github.com/InfinityAlgo-Academy/Arbitrage-Matrix-LuxAlgo.git
git push -u origin main
```

### الطريقة الثالثة: استخدام GitHub Desktop

1. افتح GitHub Desktop
2. File → Add Local Repository
3. اختر مجلد `/home/z/my-project`
4. Publish repository
5. أدخل اسم المستودع: `Arbitrage-Matrix-LuxAlgo`

---

## 🌐 الخطوة 2: النشر على Vercel

### الطريقة الأولى: من موقع Vercel (الأسهل)

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "Sign Up" أو "Log In" باستخدام GitHub
3. اضغط "Add New Project"
4. اختر المستودع `InfinityAlgo-Academy/Arbitrage-Matrix-LuxAlgo`
5. اضغط "Deploy"
6. انتظر دقيقة واحدة وستحصل على رابط موقعك!

### الطريقة الثانية: من Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
cd /home/z/my-project
vercel

# للنشر في بيئة الإنتاج
vercel --prod
```

---

## ✅ بعد الرفع

- ستكون صفحة البيع متاحة على رابط Vercel
- يمكنك ربط نطاق مخصص من إعدادات Vercel
- التطبيق جاهز للاستخدام!

---

## 🔗 روابط مهمة

- المنتج المجاني: https://infinityalgoacademy.net/item/arbitrage-matrix-luxalgo/
- صفحة الشراء: https://infinityalgoacademy.net/checkout/?fct_cart_hash=1fcbdc7ffe6b87adbad87e142879d8a3
- المتجر: https://infinityalgoacademy.net/
