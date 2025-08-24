#!/usr/bin/env bash
set -e

# 1. انتقل إلى مجلد المشروع الحقيقي
cd /path/to/your/astro-project

# 2. استنخّ المستودع البعيد (إذا لم تكن قد فعلت)
# gh repo clone Maram2255/TIGERS-KSA
cd TIGERS-KSA

# 3. احذف كل ملفات القالب القديم
git rm -r --cached _app.jsx next.config.js prisma Dockerfile src docker-compose.yml
# أو ببساطة احذف يدوياً من المجلد

# 4. انسخ الكود الحقيقي إلى المستودع
cp -R /path/to/your/astro-project/* .

# 5. تأكد من وجود ملفات الضبط:
cat > package.json << 'EOF'
{
  "name": "tigers-kas",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
EOF

cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to   = "/index.html"
  status = 200
EOF

# 6. أضف ملفات Astro والمكونات
git add .

# 7. ارفع التغييرات
git commit -m "رفع مشروع النمور السعودية: ملفات Astro الحقيقية"
git push origin main

echo "✅ تم رفع الكود إلى المستودع بنجاح. الآن انتقل إلى Netlify لإعادة النشر."
