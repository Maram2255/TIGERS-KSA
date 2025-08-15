<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TIGERS-KSA</title>
  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(to bottom, #fff, #f5f5f5);
      color: #333;
      transition: background 0.3s, color 0.3s;
    }
    body.dark-mode {
      background-color: #121212;
      color: #f0f0f0;
    }
    header {
      background: linear-gradient(135deg, #d4af37, #ffffff);
      padding: 1rem;
      text-align: center;
      position: relative;
    }
    .dark-mode header {
      background: linear-gradient(135deg, #b8860b, #1a1a1a);
    }
    .mascot {
      width: 80px;
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    nav ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    .section {
      padding: 3rem 2rem;
      text-align: center;
      display: none;
    }
    .section.active {
      display: block;
    }
    .cta-button {
      background-color: #d4af37;
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1.2rem;
      cursor: pointer;
    }
    .dark-mode .cta-button {
      background-color: #ffd700;
      color: #1a1a1a;
    }
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
    footer {
      text-align: center;
      padding: 1rem;
      background-color: #eee;
    }
    .dark-mode footer {
      background-color: #000;
      color: #ccc;
    }
    input, textarea {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
    }
  </style>
</head>
<body>

  <button onclick="toggleDarkMode()" style="position:fixed;top:10px;right:10px;">🌙 تبديل الوضع</button>

  <header>
    <img src="assets/nimr.svg" alt="نمر" class="mascot" />
    <h1>TIGERS-KSA</h1>
    <nav>
      <ul>
        <li><a href="#home" onclick="showSection('home')">الرئيسية</a></li>
        <li><a href="#about" onclick="showSection('about')">من نحن</a></li>
        <li><a href="#vision" onclick="showSection('vision')">الرؤية</a></li>
        <li><a href="#identity" onclick="showSection('identity')">الهوية</a></li>
        <li><a href="#contact" onclick="showSection('contact')">تواصل</a></li>
        <li><a href="#login" onclick="showSection('login')">دخول</a></li>
        <li><a href="#dashboard" onclick="showSection('dashboard')">لوحة التحكم</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="section active">
    <h2>ابتكار رقمي بهوية سعودية</h2>
    <p>منصة تجمع بين القوة، السرعة، والفخر الوطني.</p>
    <button class="cta-button">ابدأ الآن</button>
  </section>

  <section id="about" class="section">
    <h2>من نحن</h2>
    <p>نحن TIGERS-KSA، منصة سعودية رقمية تمزج بين السرعة، القوة، والهوية الثقافية.</p>
  </section>

  <section id="vision" class="section">
    <h2>رؤيتنا</h2>
    <ul>
      <li>🌐 تمثيل الهوية السعودية في كل تفصيلة</li>
      <li>⚡ سرعة الأداء وسلاسة التفاعل</li>
      <li>🎨 تصميم بصري متوازن بين الحداثة والتراث</li>
      <li>🛡️ أمان وموثوقية في كل طبقة تقنية</li>
    </ul>
  </section>

  <section id="identity" class="section">
    <h2>الهوية البصرية</h2>
    <div class="colors">
      <div class="color-box" style="background-color:#d4af37;">ذهبي</div>
      <div class="color-box" style="background-color:#ffffff; color:#000;">أبيض</div>
      <div class="color-box" style="background-color:#000000;">أسود</div>
    </div>
    <p>الماسكوت "نـمـر" يرمز إلى القوة والسرعة والهوية السعودية بأسلوب هندسي مجرد.</p>
  </section>

  <section id="contact" class="section">
    <h2>تواصل معنا</h2>
    <form onsubmit="submitContact(event)">
      <input type="text" placeholder="الاسم" required />
      <input type="email" placeholder="البريد الإلكتروني" required />
      <textarea rows="5" placeholder="رسالتك" required></textarea>
      <button type="submit" class="cta-button">إرسال</button>
    </form>
    <p id="contact-msg"></p>
  </section>

  <section id="login" class="section">
    <h2>تسجيل الدخول</h2>
    <form onsubmit="login(event)">
      <input type="text" id="username" placeholder="اسم المستخدم" required />
      <input type="password" id="password" placeholder="كلمة المرور" required />
      <button type="submit" class="cta-button">دخول</button>
    </form>
    <p id="login-msg"></p>
  </section>

  <section id="dashboard" class="section">
    <h2>لوحة التحكم</h2>
    <p>مرحبًا بك يا ميمو! هذه لوحة إدارة TIGERS-KSA.</p>
    <ul>
      <li>📊 عرض الإحصائيات</li>
      <li>📝 تعديل المحتوى</li>
      <li>👥 إدارة المستخدمين</li>
      <li>⚙️ إعدادات النظام</li>
    </ul>
  </section>

  <footer>
    <p>© 2025 TIGERS-KSA. جميع الحقوق محفوظة.</p>
  </footer>

  <script>
    function showSection(id) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    function submitContact(e) {
      e.preventDefault();
      document.getElementById('contact-msg').textContent = "✅ تم إرسال رسالتك بنجاح!";
    }

    function login(e) {
      e.preventDefault();
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      if (user === "admin" && pass === "1234") {
        document.getElementById('login-msg').textContent = "✅ تم تسجيل الدخول!";
        showSection('dashboard');
      } else {
        document.getElementById('login-msg').textContent = "❌ بيانات غير صحيحة!";
      }
    }
  </script>

</body>
</html>      flex: 1;
      text-align: center;
      position: relative;
    }

    .step::before {
      content: "●";
      color: var(--turquoise);
      font-size: 1.5rem;
    }

    .step::after {
      content: "";
      position: absolute;
      top: 10px;
      left: 50%;
      width: 100%;
      height: 2px;
      background: var(--turquoise);
      z-index: -1;
    }

    .step:last-child::after {
      display: none;
    }

    input, button {
      padding: 10px;
      margin: 10px 0;
      width: 100%;
      max-width: 300px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    button {
      background-color: var(--turquoise);
      color: var(--dark);
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background-color: #30cfcf;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#" onclick="showPage('home')">🏠 الرئيسية</a>
    <a href="#" onclick="showPage('products')">🛍️ المنتجات</a>
    <a href="#" onclick="showPage('cart')">🛒 السلة</a>
    <a href="#" onclick="showPage('checkout')">💳 الدفع</a>
    <a href="#" onclick="showPage('login')">🔐 تسجيل الدخول</a>
    <a href="#" onclick="showPage('signup')">📝 إنشاء حساب</a>
    <a href="#" onclick="showPage('track')">🚚 تتبع الطلب</a>
  </nav>

  <div id="home" class="page active">
    <h1>مرحبًا بكم في TIGERS-KSA 🐅</h1>
    <p>منصة ذكية للمنتجات الرياضية والأنيقة.</p>
  </div>

  <div id="products" class="page">
    <h2>المنتجات</h2>
    <ul>
      <li>👕 تيشيرت النمر - 120 ريال</li>
      <li>🧢 قبعة TIGERS - 80 ريال</li>
      <li>☕ كوب حراري - 60 ريال</li>
    </ul>
  </div>

  <div id="cart" class="page">
    <h2>السلة</h2>
    <p>سلتك فارغة الآن.</p>
  </div>

  <div id="checkout" class="page">
    <h2>الدفع</h2>
    <select>
      <option>مدى</option>
      <option>فيزا / ماستر كارد</option>
      <option>Apple Pay</option>
      <option>STC Pay</option>
    </select>
    <button>إتمام الطلب</button>
  </div>

  <div id="login" class="page">
    <h2>تسجيل الدخول</h2>
    <input type="email" placeholder="البريد الإلكتروني">
    <input type="password" placeholder="كلمة المرور">
    <button>دخول</button>
  </div>

  <div id="signup" class="page">
    <h2>إنشاء حساب جديد</h2>
    <input type="text" placeholder="الاسم الكامل">
    <input type="email" placeholder="البريد الإلكتروني">
    <input type="password" placeholder="كلمة المرور">
    <button>إنشاء حساب</button>
  </div>

  <div id="track" class="page">
    <h2>تتبع الطلب</h2>
    <input type="text" placeholder="رقم الطلب">
    <button>تتبع</button>
    <div class="track-status">
      <div class="step">جارٍ التحضير</div>
      <div class="step">تم الشحن</div>
      <div class="step">في الطريق</div>
      <div class="step">تم التسليم</div>
    </div>
  </div>

  <script>
    function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }
  </script>

</body>
</html>
