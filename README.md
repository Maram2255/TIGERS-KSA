<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TIGERS-KSA</title>
  <style>
    /*======================
      المتغيرات الأساسية
    ======================*/
    :root {
      --brand-gold: #d4af37;
      --brand-dark: #1a1a1a;
      --brand-light: #f5f5f5;
      --text-dark: #333333;
      --text-light: #f0f0f0;
      --transition: 0.3s ease-in-out;
    }

    /*======================
      قواعد عامة
    ======================*/
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Segoe UI", sans-serif;
      background: var(--brand-light);
      color: var(--text-dark);
      transition: background var(--transition), color var(--transition);
      line-height: 1.6;
    }
    img {
      max-width: 100%;
      display: block;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    button {
      cursor: pointer;
      transition: background var(--transition);
    }

    /*======================
      الوضع الليلي
    ======================*/
    body.dark-mode {
      background: var(--brand-dark);
      color: var(--text-light);
    }
    body.dark-mode header,
    body.dark-mode nav {
      background: var(--brand-dark);
    }
    body.dark-mode .cta {
      background: var(--brand-gold);
      color: var(--brand-dark);
    }

    /*======================
      رأس الصفحة والتنقل
    ======================*/
    header {
      background: linear-gradient(135deg, var(--brand-gold), var(--brand-light));
      padding: 1rem 2rem;
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 100;
      transition: background var(--transition);
    }
    header h1 {
      font-size: 2rem;
      letter-spacing: 2px;
    }
    nav {
      background: var(--brand-gold);
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 0.8rem 0;
      transition: background var(--transition);
    }
    nav a {
      color: #fff;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    nav a:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /*======================
      زر تبديل الوضع
    ======================*/
    #toggle-mode {
      position: fixed;
      top: 1rem;
      left: 1rem;
      background: var(--brand-gold);
      border: none;
      padding: 0.6rem;
      border-radius: 50%;
      font-size: 1.2rem;
      color: #fff;
      z-index: 200;
    }

    /*======================
      الأقسام الرئيسية
    ======================*/
    .section {
      display: none;
      padding: 3rem 2rem;
      max-width: 900px;
      margin: auto;
      text-align: center;
    }
    .section.active {
      display: block;
    }
    .section h2 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
    .section p,
    .section ul {
      margin-bottom: 1.5rem;
    }
    .section ul {
      list-style: none;
      display: inline-flex;
      flex-direction: column;
      gap: 0.8rem;
      text-align: right;
    }
    .section ul li {
      position: relative;
      padding-right: 1.5rem;
    }
    .section ul li::before {
      content: "✔";
      position: absolute;
      right: 0;
      color: var(--brand-gold);
    }

    /*======================
      زر الإجراء الرئيسي
    ======================*/
    .cta {
      display: inline-block;
      background: var(--brand-dark);
      color: #fff;
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: bold;
      transition: background var(--transition);
    }
    .cta:hover {
      background: var(--brand-gold);
    }

    /*======================
      نموذج التواصل وتسجيل الدخول
    ======================*/
    form {
      max-width: 500px;
      margin: auto;
      text-align: right;
    }
    input, textarea {
      width: 100%;
      padding: 0.6rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    textarea {
      resize: vertical;
    }

    /*======================
      الهوية البصرية
    ======================*/
    .colors {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;
    }
    .color-box {
      width: 100px;
      height: 100px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #fff;
    }
    .color-gold { background: var(--brand-gold); color: var(--brand-dark); }
    .color-white { background: #fff; color: var(--brand-dark); border: 1px solid #ccc; }
    .color-dark { background: var(--brand-dark); }

    /*======================
      التذييل
    ======================*/
    footer {
      background: #eee;
      padding: 1rem 0;
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
    }
    body.dark-mode footer {
      background: #222;
      color: #aaa;
    }
  </style>
</head>
<body>

  <!-- زر تبديل الوضع -->
  <button id="toggle-mode" onclick="toggleDarkMode()">🌙</button>

  <!-- الرأس والتنقل -->
  <header>
    <h1>TIGERS-KSA</h1>
  </header>
  <nav>
    <a href="#home"    onclick="navigate('home')">الرئيسية</a>
    <a href="#about"   onclick="navigate('about')">من نحن</a>
    <a href="#vision"  onclick="navigate('vision')">رؤيتنا</a>
    <a href="#identity"onclick="navigate('identity')">الهوية</a>
    <a href="#contact" onclick="navigate('contact')">تواصل</a>
    <a href="#login"   onclick="navigate('login')">دخول</a>
    <a href="#dash"    onclick="navigate('dash')">لوحة التحكم</a>
  </nav>

  <!-- الأقسام -->
  <section id="home" class="section active">
    <h2>ابتكار رقمي بهوية سعودية</h2>
    <p>منصة TIGERS-KSA تجمع بين القوة والسرعة والفخر الوطني في تجربة واحدة متكاملة.</p>
    <button class="cta" onclick="navigate('about')">اكتشف المزيد</button>
  </section>

  <section id="about" class="section">
    <h2>من نحن</h2>
    <p>نحن فريق رقمي سعودي نهدف لصنع تجارب مبتكرة تناسب روح العصر وتمثل هويتنا الوطنية.</p>
  </section>

  <section id="vision" class="section">
    <h2>رؤيتنا</h2>
    <ul>
      <li>تمثيل الهوية السعودية في كل تفصيل</li>
      <li>سرعة أداء لا مثيل لها</li>
      <li>تصميم بصري يمزج الحداثة بالتراث</li>
      <li>أمان وموثوقية رفيعة المستوى</li>
    </ul>
  </section>

  <section id="identity" class="section">
    <h2>الهوية البصرية</h2>
    <div class="colors">
      <div class="color-box color-gold">ذهبي</div>
      <div class="color-box color-white">أبيض</div>
      <div class="color-box color-dark">أسود</div>
    </div>
    <p>الماسكوت "نمر" يرمز للقوة والسرعة وهو تجسيد بصري لعراقة التراث السعودي.</p>
  </section>

  <section id="contact" class="section">
    <h2>تواصل معنا</h2>
    <form onsubmit="submitContact(event)">
      <input type="text"    placeholder="الاسم الكامل" required />
      <input type="email"   placeholder="البريد الإلكتروني" required />
      <textarea rows="4"   placeholder="رسالتك..." required></textarea>
      <button type="submit" class="cta">إرسال</button>
    </form>
    <p id="contact-msg"></p>
  </section>

  <section id="login" class="section">
    <h2>تسجيل الدخول</h2>
    <form onsubmit="login(event)">
      <input type="text"     id="user" placeholder="اسم المستخدم" required />
      <input type="password" id="pass" placeholder="كلمة المرور" required />
      <button type="submit" class="cta">دخول</button>
    </form>
    <p id="login-msg"></p>
  </section>

  <section id="dash" class="section">
    <h2>لوحة التحكم</h2>
    <p>مرحبًا بك في لوحة إدارة TIGERS-KSA!</p>
    <ul>
      <li>عرض الإحصائيات</li>
      <li>تحرير المحتوى</li>
      <li>إدارة المستخدمين</li>
      <li>إعدادات النظام</li>
    </ul>
  </section>

  <!-- التذييل -->
  <footer>
    © 2025 TIGERS-KSA. جميع الحقوق محفوظة.
  </footer>

  <script>
    // التنقل بين الأقسام
    function navigate(id) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      window.location.hash = id;
    }

    // تبديل الوضع الليلي
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    // إرسال نموذج التواصل
    function submitContact(e) {
      e.preventDefault();
      document.getElementById('contact-msg').textContent = '✅ تم إرسال رسالتك بنجاح!';
    }

    // تسجيل الدخول التجريبي
    function login(e) {
      e.preventDefault();
      const u = document.getElementById('user').value;
      const p = document.getElementById('pass').value;
      if (u === 'admin' && p === '1234') {
        document.getElementById('login-msg').textContent = '✅ تم تسجيل الدخول!';
        navigate('dash');
      } else {
        document.getElementById('login-msg').textContent = '❌ بيانات غير صحيحة!';
      }
    }

    // عند التحميل: إظهار القسم الذي في العنوان
    window.addEventListener('load', () => {
      const section = window.location.hash.replace('#', '');
      if (section) navigate(section);
    });
  </script>
</body>
</html>
