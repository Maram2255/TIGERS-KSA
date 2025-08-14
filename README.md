<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>TIGERS-KSA 🐅</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --turquoise: #40E0D0;
      --dark: #004d40;
      --white: #ffffff;
      --gray: #f0f0f0;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", sans-serif;
      background: var(--gray);
      color: var(--dark);
      transition: background 0.3s;
    }

    nav {
      background-color: var(--turquoise);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 15px;
    }

    nav a {
      text-decoration: none;
      color: var(--dark);
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 6px;
      background-color: var(--white);
      transition: transform 0.2s;
    }

    nav a:hover {
      transform: scale(1.05);
      background-color: #e0f7fa;
    }

    .page {
      display: none;
      padding: 30px;
      max-width: 800px;
      margin: auto;
      background: var(--white);
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .active {
      display: block;
    }

    .track-status {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }

    .step {
      flex: 1;
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
