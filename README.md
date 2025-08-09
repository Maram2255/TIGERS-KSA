# TIGERS-KSA
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>النمور السعودية</title>
  <style>
    :root {
      --turquoise: #40E0D0;
      --white: #FFFFFF;
    }

    body {
      margin: 0;
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(135deg, var(--white), var(--turquoise));
      color: #004d40;
    }

    header {
      text-align: center;
      padding: 60px 20px;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
      color: #00796b;
    }

    .subtitle {
      font-size: 1.2rem;
      margin: 0;
    }

    .robot {
      width: 200px;
      margin: 40px auto;
      display: block;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      padding: 40px 20px;
    }

    .card {
      background: var(--white);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
    }

    .card h3 {
      margin-top: 0;
      color: #00796b;
    }

    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9rem;
      color: #00695c;
    }
  </style>
</head>
<body>

  <header>
    <h1>النمور السعودية</h1>
    <p class="subtitle">منصة متكاملة للمتاجر والمصانع السعودية</p>

    <!-- روبوت SVG -->
    <svg class="robot" viewBox="0 0 200 200">
      <polygon points="100,10 130,60 170,70 140,110 150,160 100,135 50,160 60,110 30,70 70,60"
               fill="none" stroke="#40E0D0" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="75" cy="75" r="5" fill="#40E0D0"/>
      <circle cx="125" cy="75" r="5" fill="#40E0D0"/>
    </svg>
  </header>

  <section class="features">
    <div class="card">
      <h3>إدارة المخزون</h3>
      <p>تتبع ذكي للمخزون وتنبيهات فورية.</p>
    </div>
    <div class="card">
      <h3>المبيعات والتحصيل</h3>
      <p>لوحة تحكم لحظية للفواتير والتحصيل.</p>
    </div>
    <div class="card">
      <h3>إنتاج المصانع</h3>
      <p>جدولة مرنة وخطط إنتاج مخصصة.</p>
    </div>
    <div class="card">
      <h3>تحليلات وتقارير</h3>
      <p>رسوم بيانية وتقارير تشغيلية ذكية.</p>
    </div>
  </section>

  <footer>
    © 2025 النمور السعودية — بدون رسوم، بدون اشتراكات.
  </footer>

</body>
</html>
