<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>النمور السعودية - منظومة المتاجر والمصانع</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        turquoise: {
                            100: '#e6fffa',
                            200: '#b2f5ea',
                            300: '#81e6d9',
                            400: '#4fd1c5',
                            500: '#38b2ac',
                            600: '#319795',
                            700: '#2c7a7b',
                            800: '#285e61',
                            900: '#234e52',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap');
        
        body {
            font-family: 'Tajawal', sans-serif;
        }
        
        .chat-bubble {
            border-radius: 20px 20px 0 20px;
        }
        
        .user-bubble {
            border-radius: 20px 20px 20px 0;
        }
        
        .tiger-pattern {
            background-image: radial-gradient(circle, rgba(56, 178, 172, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(56, 178, 172, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(56, 178, 172, 0); }
            100% { box-shadow: 0 0 0 0 rgba(56, 178, 172, 0); }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-2 space-x-reverse">
                <div class="w-12 h-12 bg-turquoise-500 rounded-full flex items-center justify-center text-white text-2xl">
                    <i class="fas fa-paw"></i>
                </div>
                <h1 class="text-2xl font-bold text-turquoise-700">النمور السعودية</h1>
            </div>
            <nav class="hidden md:flex space-x-6 space-x-reverse">
                <a href="#" class="text-turquoise-700 font-medium hover:text-turquoise-500">الرئيسية</a>
                <a href="#" class="text-gray-600 hover:text-turquoise-500">المتاجر</a>
                <a href="#" class="text-gray-600 hover:text-turquoise-500">المصانع</a>
                <a href="#" class="text-gray-600 hover:text-turquoise-500">المنتجات</a>
                <a href="#" class="text-gray-600 hover:text-turquoise-500">التقارير</a>
                <a href="#" class="text-gray-600 hover:text-turquoise-500">الدعم</a>
            </nav>
            <div class="flex items-center space-x-3 space-x-reverse">
                <button class="md:hidden text-gray-600">
                    <i class="fas fa-bars text-xl"></i>
                </button>
                <button class="bg-turquoise-500 hover:bg-turquoise-600 text-white px-4 py-2 rounded-lg">
                    تسجيل الدخول
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-turquoise-50 to-white tiger-pattern">
        <div class="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h2 class="text-4xl md:text-5xl font-bold text-turquoise-800 mb-4">منظومة <span class="text-turquoise-600">النمور السعودية</span> المتكاملة</h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                    نظام متكامل لإدارة المتاجر والمصانع السعودية بأعلى معايير الجودة والكفاءة. نوفر لك جميع الأدوات التي تحتاجها لإدارة عملياتك بسلاسة واحترافية.
                </p>
                <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 space-x-reverse">
                    <button class="bg-turquoise-600 hover:bg-turquoise-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition duration-300">
                        ابدأ الآن مجانًا
                    </button>
                    <button class="border border-turquoise-600 text-turquoise-600 hover:bg-turquoise-50 px-6 py-3 rounded-lg font-medium transition duration-300">
                        شاهد الفيديو التعريفي
                    </button>
                </div>
            </div>
            <div class="md:w-1/2 relative">
                <div class="relative max-w-md mx-auto">
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-turquoise-200 rounded-full opacity-30"></div>
                    <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-turquoise-300 rounded-full opacity-20"></div>
                    <div class="relative bg-white rounded-xl shadow-xl overflow-hidden border border-turquoise-100">
                        <div class="bg-turquoise-500 text-white p-4 flex items-center">
                            <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-turquoise-500 mr-3">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h3 class="font-bold">نمر المساعد</h3>
                                <p class="text-xs opacity-80">متصل - جاهز للمساعدة</p>
                            </div>
                        </div>
                        <div class="p-4 h-64 overflow-y-auto">
                            <div class="flex justify-end mb-3">
                                <div class="bg-turquoise-100 text-gray-800 p-3 max-w-xs chat-bubble">
                                    مرحبا! أنا نمر، كيف يمكنني مساعدتك اليوم؟
                                </div>
                            </div>
                            <div class="flex justify-start mb-3">
                                <div class="bg-gray-100 text-gray-800 p-3 max-w-xs user-bubble">
                                    أريد معرفة المزيد عن نظام إدارة المخزون
                                </div>
                            </div>
                            <div class="flex justify-end mb-3">
                                <div class="bg-turquoise-100 text-gray-800 p-3 max-w-xs chat-bubble">
                                    بالطبع! نظامنا يوفر إدارة مخزون ذكية مع تنبيهات عند نفاذ المنتجات وتقارير مفصلة.
                                </div>
                            </div>
                        </div>
                        <div class="p-3 border-t border-gray-200 flex">
                            <input type="text" placeholder="اكتب رسالتك..." class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent">
                            <button class="bg-turquoise-500 text-white px-4 rounded-r-lg hover:bg-turquoise-600">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-turquoise-800 mb-4">مميزات منظومة النمور السعودية</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">نقدم مجموعة متكاملة من الحلول الذكية لإدارة متاجرك ومصانعك بكفاءة عالية</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-turquoise-300 transition duration-300 hover:shadow-lg">
                    <div class="w-14 h-14 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600 mb-4">
                        <i class="fas fa-store text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-turquoise-700 mb-3">إدارة المتاجر</h3>
                    <p class="text-gray-600">
                        نظام متكامل لإدارة جميع فروع متجرك، متابعة المبيعات، إدارة الموظفين، وتقارير أداء الفروع.
                    </p>
                </div>
                
                <!-- Feature 2 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-turquoise-300 transition duration-300 hover:shadow-lg">
                    <div class="w-14 h-14 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600 mb-4">
                        <i class="fas fa-industry text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-turquoise-700 mb-3">إدارة المصانع</h3>
                    <p class="text-gray-600">
                        تحكم كامل في عمليات الإنتاج، إدارة خطوط التصنيع، متابعة الجودة، وحساب تكاليف الإنتاج بدقة.
                    </p>
                </div>
                
                <!-- Feature 3 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-turquoise-300 transition duration-300 hover:shadow-lg">
                    <div class="w-14 h-14 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600 mb-4">
                        <i class="fas fa-boxes text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-turquoise-700 mb-3">إدارة المخزون</h3>
                    <p class="text-gray-600">
                        نظام مخزون ذكي مع تنبيهات تلقائية، إدارة المشتريات، وتحليل معدل دوران المخزون.
                    </p>
                </div>
                
                <!-- Feature 4 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-turquoise-300 transition duration-300 hover:shadow-lg">
                    <div class="w-14 h-14 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600 mb-4">
                        <i class="fas fa-chart-line text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-turquoise-700 mb-3">التقارير والتحليلات</h3>
                    <p class="text-gray-600">
                        لوحات تحكم تفاعلية مع تقارير مخصصة تساعدك في اتخاذ القرارات بناءً على بيانات دقيقة.
                    </p>
                </div>
                
                <!-- Feature 5 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-turquoise-300 transition duration-300 hover:shadow-lg">
                    <div class="w-14 h-14 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600 mb-4">
                        <i class="fas fa-robot text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-turquoise-700 mb-3">نمر المساعد الذكي</h3>
                    <p class="text-gray-600">
                        مساعد ذكي يعمل بالذكاء الاصطناعي لمساعدتك في إدارة عملياتك والإجابة على استفساراتك.
                    </p>
                </div>
                
                <!-- Feature 6 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-turquoise-300 transition duration-300 hover:shadow-lg">
                    <div class="w-14 h-14 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600 mb-4">
                        <i class="fas fa-mobile-alt text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-turquoise-700 mb-3">تطبيق جوال</h3>
                    <p class="text-gray-600">
                        إدارة عملك من أي مكان عبر تطبيقاتنا الذكية المتوافقة مع جميع الأجهزة المحمولة.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Nimr AI Assistant Section -->
    <section class="py-16 bg-gradient-to-b from-turquoise-50 to-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <div class="relative inline-block">
                        <div class="absolute -top-5 -right-5 w-20 h-20 bg-turquoise-200 rounded-full opacity-30"></div>
                        <div class="relative bg-white p-2 rounded-full shadow-xl pulse">
                            <img src="https://placehold.co/300x300/e5f9f7/38b2ac?text=نمر" alt="نمر المساعد" class="w-64 h-64 rounded-full border-4 border-turquoise-300 object-cover">
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold text-turquoise-800 mb-4">نمر - المساعد الذكي</h2>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        مساعدك الشخصي الذي يعمل بالذكاء الاصطناعي لمساعدتك في إدارة متجرك أو مصنعك. يمكنك سؤاله عن أي شيء متعلق بعملك وسيقوم بتقديم الإجابات الفورية أو تنفيذ المهام نيابة عنك.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-8 h-8 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div class="mr-3">
                                <p class="text-gray-800 font-medium">إجابة على استفساراتك فورًا</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-8 h-8 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div class="mr-3">
                                <p class="text-gray-800 font-medium">تنبيهات ذكية لأهم الأمور</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-8 h-8 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div class="mr-3">
                                <p class="text-gray-800 font-medium">تنفيذ مهام متقدمة بأوامر صوتية</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-8 h-8 bg-turquoise-100 rounded-full flex items-center justify-center text-turquoise-600">
                                    <i class="fas fa-check"></i>
                                </div>
                            </div>
                            <div class="mr-3">
                                <p class="text-gray-800 font-medium">تعلم مستمر ليتكيف مع احتياجات عملك</p>
                            </div>
                        </div>
                    </div>
                    <button class="mt-8 bg-turquoise-600 hover:bg-turquoise-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition duration-300 flex items-center">
                        <i class="fas fa-comment-alt ml-2"></i>
                        تحدث مع نمر الآن
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-turquoise-800 mb-4">آراء عملائنا</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">انضم الآلاف من أصحاب المتاجر والمصانع إلى منظومة النمور السعودية</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-turquoise-100 flex items-center justify-center text-turquoise-600 font-bold text-xl">
                            م
                        </div>
                        <div class="mr-3">
                            <h4 class="font-bold">محمد العتيبي</h4>
                            <p class="text-sm text-gray-500">مالك مصنع أثاث</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "منظومة النمور السعودية غيرت طريقة إدارتنا للمصنع بالكامل. أصبحت لدينا رؤية واضحة لكل العمليات والتكاليف."
                    </p>
                    <div class="flex text-turquoise-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-turquoise-100 flex items-center justify-center text-turquoise-600 font-bold text-xl">
                            س
                        </div>
                        <div class="mr-3">
                            <h4 class="font-bold">سارة القحطاني</h4>
                            <p class="text-sm text-gray-500">مالكة سلسلة متاجر إلكترونية</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "خاصية نمر المساعد وفرت علينا ساعات من العمل يوميًا. يمكننا الآن الحصول على أي معلومة أو تقرير بأمر صوتي بسيط."
                    </p>
                    <div class="flex text-turquoise-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg    }

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
