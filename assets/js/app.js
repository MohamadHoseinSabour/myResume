/* ==========================================================================
   BILINGUAL DICTIONARY (FA / EN)
   ========================================================================== */
const translations = {
    fa: {
        // Navbar
        nav_home: "خانه",
        nav_about: "درباره من",
        nav_skills: "مهارت‌ها",
        nav_experience: "سوابق کاری",
        nav_portfolio: "پورتفولیو",
        nav_contact: "تماس",

        // Hero
        hero_badge: "آماده برای خلق ایده‌های نو",
        hero_greetings: "سلام، من",
        hero_name: "محمدحسین صبور",
        hero_greetings_end: "هستم",
        hero_desc: "طراح گرافیک و توسعه‌دهنده وب، متمرکز بر طراحی رابط‌های کاربری مدرن، مینیمال و کاربرپسند. تبدیل ایده‌های پیچیده به تجربیات دیجیتال فراموش‌نشدنی.",
        hero_cta_projects: "مشاهده نمونه‌کارها",
        hero_cta_contact: "همکاری با من",

        // About
        about_title: "درباره من",
        about_subtitle: "داستان من و مسیر شغلی‌ام",
        about_metric_exp: "سال سابقه",
        about_metric_proj: "پروژه موفق",
        about_header: "خلق هویت بصری متمایز در دنیای دیجیتال",
        about_desc: "من یک طراح و گرافیست وب هستم که همیشه مشتاق روبه‌رو شدن با چالش‌های جدید و خلق تجربه‌های بصری متمایز در دنیای دیجیتالم. باور دارم که ترکیب خلاقیت با یک طراحی هدفمند، تمیز و ساختاریافته، نه‌تنها ظاهر سایت را زیبا می‌کند، بلکه ارتباط موثری بین کاربر و محصول می‌سازد. هدف من تبدیل ایدههای پیچیده به رابطهای کاربری چشمنواز، مینیمال و کاربرپسند است.",
        about_info_edu: "تحصیلات:",
        about_info_edu_val: "کارشناسی مهندسی برق (دانشگاه شهید چمران اهواز - ۱۴۰۲ تا کنون)",
        about_info_lang: "زبان‌ها:",
        about_info_lang_val: "فارسی (زبان مادری) | انگلیسی (آشنایی پایه برای مستندات و پروژه‌ها)",
        about_cta_hire: "دعوت به همکاری",
        about_cta_cv: "دانلود رزومه",

        // Skills
        skills_title: "مهارت‌ها و ابزارها",
        skills_subtitle: "تخصص‌های فنی و نرم‌افزارهای طراحی",
        skills_cat_dev: "توسعه وب",
        skills_cat_design: "طراحی و رابط کاربری",
        skills_cat_tools: "ابزارهای فنی",

        // Timeline
        timeline_title: "مسیر شغلی و تحصیلی",
        timeline_subtitle: "سوابق کاری و تحصیلات دانشگاهی",
        time_present: "اکنون",
        exp1_date: "1404 - اکنون",
        exp2_date: "1403 - اکنون",
        exp3_date: "1403 - 1404",
        edu1_date: "1402 - اکنون",
        exp4_date: "1401 - 1404",
        
        exp1_title: "فریلنسر بین‌المللی (طراحی سایت، برنامه‌نویسی و ادیت ویدیو)",
        exp1_company: "پروژه‌های بین‌المللی و آزادکاری",
        exp1_d1: "طراحی و پیاده‌سازی وب‌سایت‌های مدرن و برنامه‌نویسی تخصصی وب برای پروژه‌های بین‌المللی.",
        exp1_d2: "ادیت و تدوین حرفه‌ای ویدیو، تولید محتوای چندرسانه‌ای و تیزرهای تبلیغاتی با استانداردهای جهانی.",
        exp1_d3: "ارائه خدمات تخصصی فرانت‌اند، بک‌اند و طراحی دیجیتال به صورت دورکاری.",
        
        exp2_title: "طراح و توسعه‌دهنده وب (فریلنسر تخصصی)",
        exp2_company: "پروژه‌های آزادکاری و مستقل",
        exp2_d1: "طراحی و پیاده‌سازی پروژه‌های متنوع وب شامل پلتفرم‌های فروشگاهی، پورتال‌های خبری و وب‌سایت‌های شخصی/رزومه.",
        exp2_d2: "ارائه راهکارهای منعطف از طریق توسعه سیستم‌های مدیریت محتوا (وردپرس) و طراحی اختصاصی بر پایه کدنویسی.",
        exp2_d3: "تمرکز بر خلق رابط کاربری (UI) جذاب و تجربه کاربری (UX) روان در پلتفرم‌های دیجیتال.",
        
        exp3_title: "گرافیست وب",
        exp3_company: "سایت نخل مارکت",
        exp3_d1: "طراحی المان‌های گرافیکی و خلق هویت بصری یکپارچه برای وب‌سایت.",
        exp3_d2: "بهینه‌سازی ظاهر سایت برای ارتقای تعامل کاربران و یکپارچگی بصری.",
        
        edu1_title: "کارشناسی مهندسی برق",
        edu1_school: "دانشگاه شهید چمران اهواز (۱۴۰۲ - تاکنون)",
        edu1_desc: "تحصیل در رشته مهندسی برق به عنوان بستر مناسب تقویت تفکر تحلیلی و حل مسئله در مسائل پیچیده.",

        exp4_title: "متخصص محتوای بصری و هوش مصنوعی",
        exp4_company: "مجموعه اینتاپاسو (۳ سال همکاری)",
        exp4_d1: "بهره‌گیری از ابزارهای هوش مصنوعی و تدوین ویدیو برای خلق محتوای دیجیتال متمایز.",
        exp4_d2: "طراح گرافیک و ادیتور شبکه‌های اجتماعی و طراحی لی‌اوت پیج‌ها بر اساس نیاز مخاطبان دیجیتال.",

        // Portfolio
        portfolio_title: "نمونه‌کارها",
        portfolio_demo: "",
        portfolio_subtitle: "منتخبی از آخرین طراحی‌ها و پروژه‌های من",
        filter_all: "همه",
        filter_ai: "افزونه و هوش مصنوعی",
        filter_web: "توسعه وب و فروشگاهی",
        
        proj1_cat: "افزونه وردپرس و هوش مصنوعی",
        proj1_title: "سایت معرفی و افزونه هوش مصنوعی چت‌نگار",
        proj1_desc: "طراحی و پیاده‌سازی کامل لندینگ‌پیج معرفی محصول و توسعه فنی افزونه هوشمند چت‌بات آنلاین برای وردپرس. این سیستم با اتصال به موتورهای هوش مصنوعی، پاسخ‌گویی خودکار ۲۴/۷، افزایش نرخ تبدیل مشتریان و پشتیبانی سریع در وب‌سایت‌های فروشگاهی را فراهم می‌کند.",
        
        proj2_cat: "افزونه وردپرس و هوش مصنوعی",
        proj2_title: "سایت معرفی و افزونه هوش مصنوعی مقاله‌نگار",
        proj2_desc: "توسعه افزونه پیشرفته هوش مصنوعی مقاله‌نگار و طراحی اختصاصی سایت معرفی آن. این ابزار هوشمند قادر است مقالات کاملاً سئو شده (SEO)، عناوین جذاب، متا دسکریپشن و محصول‌های کامل را با استانداردهای گوگل و به صورت خودکار در وب‌سایت‌های وردپرسی تولید کند.",
        
        proj3_cat: "توسعه وب / استاتیک",
        proj3_title: "سایت رزومه و پورتفولیوی شخصی",
        proj3_desc: "طراحی و فرانت‌اند اختصاصی وب‌سایت رزومه و پورتفولیوی شخصی به صورت استاتیک و دو زبانه (فارسی و انگلیسی). بهره‌گیری از هویت بصری مدرن، افکت‌های گلس‌مورفیسم، انیمیشن‌های تعاملی اسکرول و رابط کاربری شیک برای نمایش جذاب سوابق کاری و نمونه‌کارها.",
        
        proj4_cat: "فروشگاه اینترنتی / E-Commerce",
        proj4_title: "فروشگاه اینترنتی حسینی کالا",
        proj4_desc: "طراحی، چیدمان بصری و توسعه پلتفرم فروشگاهی حسینی کالا در زمینه عرضه آنلاین انواع لوازم خانگی و دستگاه‌های الکترونیکی. تمرکز اصلی بر بهینه‌سازی مسیر خرید کاربر (User Journey)، طراحی بنرهای تبلیغاتی، رابط کاربری روان و دسترسی سریع به کالاها.",

        proj5_cat: "فروشگاه اینترنتی / گیمینگ",
        proj5_title: "فروشگاه اینترنتی نخل مارکت",
        proj5_desc: "همکاری در تیم طراحی پلتفرم نخل مارکت به عنوان یکی از مرجع‌های اصلی و بزرگ فروشگاه‌های اینترنتی کنسول، بازی و تجهیزات گیمینگ در ایران (۲ سال پیش). طراحی المان‌های گرافیکی، هویت بصری صفحات و ارتقای تعامل کاربران در پلتفرم.",

        // Contact
        contact_title: "تماس با من",
        contact_subtitle: "بیایید با هم پروژه جدیدی را شروع کنیم",
        contact_panel_title: "ارتباط مستقیم",
        contact_panel_desc: "برای گفتگو درباره همکاری، استخدام یا فقط گپ زدن در حوزه دیزاین و برنامه‌نویسی با من در تماس باشید.",
        contact_email: "ایمیل",
        contact_phone: "شماره تلفن",
        contact_phone_val: "09039238316",
        contact_location: "موقعیت",
        contact_location_val: "ایران ، خوزستان ، اهواز ، آخرسفالت ، خیابان زارع پلاک 4",
        contact_social: "شبکه‌های اجتماعی",
        
        form_name_lbl: "نام و نام‌خانوادگی",
        form_email_lbl: "آدرس ایمیل",
        form_subject_lbl: "موضوع پیام",
        form_message_lbl: "متن پیام",
        form_submit: "ارسال پیام",
        form_name_placeholder: "نام شما",
        form_email_placeholder: "email@example.com",
        form_subject_placeholder: "موضوع گفتگو",
        form_message_placeholder: "پیام خود را بنویسید...",

        // Footer
        footer_rights: "تمامی حقوق برای محمدحسین محفوظ است. طراحی با عشق."
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",

        // Hero
        hero_badge: "Ready to Create Innovative Ideas",
        hero_greetings: "Hi, I am",
        hero_name: "MohamadHosein Sabour",
        hero_greetings_end: "",
        hero_desc: "Web Developer and Graphic Designer focusing on crafting clean, minimal, and user-centric interfaces. Turning complex concepts into memorable digital experiences.",
        hero_cta_projects: "View My Works",
        hero_cta_contact: "Let's Connect",

        // About
        about_title: "About Me",
        about_subtitle: "My Story & Career Path",
        about_metric_exp: "Years Experience",
        about_metric_proj: "Completed Projects",
        about_header: "Crafting Distinct Visual Identities in the Digital World",
        about_desc: "I am a web designer and graphic artist passionate about tackling new challenges and creating unique visual experiences. I believe blending creativity with a purposeful, structured design not only makes websites look stunning but also forms effective connections between users and products. My goal is to simplify complex ideas into elegant, minimal, and user-friendly user interfaces.",
        about_info_edu: "Education:",
        about_info_edu_val: "B.Sc. in Electrical Engineering (Shahid Chamran University - 2023 to Present)",
        about_info_lang: "Languages:",
        about_info_lang_val: "Persian (Native) | English (Basic / Technical)",
        about_cta_hire: "Hire Me",
        about_cta_cv: "Download CV",

        // Skills
        skills_title: "Skills & Tools",
        skills_subtitle: "Technical expertise and design software",
        skills_cat_dev: "Web Development",
        skills_cat_design: "UI/UX & Design",
        skills_cat_tools: "Technical Tools",

        // Timeline
        timeline_title: "Career & Education",
        timeline_subtitle: "My professional timeline and academic status",
        time_present: "Present",
        exp1_date: "2025 - Present",
        exp2_date: "2024 - Present",
        exp3_date: "2024 - 2025",
        edu1_date: "2023 - Present",
        exp4_date: "2022 - 2025",

        exp1_title: "International Freelancer (Web Design, Programming & Video Editing)",
        exp1_company: "International & Remote Freelance Projects",
        exp1_d1: "Modern web design and specialized programming (frontend & backend) for international clients.",
        exp1_d2: "Professional video editing, multimedia content creation, and high-quality video production.",
        exp1_d3: "Delivering remote digital services and managing end-to-end freelance contracts globally.",
        
        exp2_title: "Web Designer & Developer (Specialized Freelancer)",
        exp2_company: "Freelance & Independent Projects",
        exp2_d1: "Designed and implemented diverse web platforms including e-commerce platforms, news portals, and personal CV sites.",
        exp2_d2: "Provided flexible web solutions via custom CMS setups (WordPress) as well as custom code frontend development.",
        exp2_d3: "Focused on creating visually striking user interfaces (UI) and frictionless user experiences (UX) on digital products.",
        
        exp3_title: "Web Graphic Designer",
        exp3_company: "Nakhl Market E-Commerce",
        exp3_d1: "Created graphic layout elements and established a cohesive brand visual identity for the platform.",
        exp3_d2: "Optimized website layout assets to improve user engagement metrics and visual harmony.",
        
        edu1_title: "B.Sc. in Electrical Engineering",
        edu1_school: "Shahid Chamran University of Ahvaz (2023 - Present)",
        edu1_desc: "Studying Electrical Engineering, fostering solid analytical reasoning and problem-solving structures for complex projects.",

        exp4_title: "Visual Content & AI Specialist",
        exp4_company: "Intapaso Co. (3 Years Collaboration)",
        exp4_d1: "Leveraged advanced artificial intelligence generation tools and video post-production editing for standout digital content.",
        exp4_d2: "Designed visual grids and managed social media layout structures matching specific target audiences behavior.",

        // Portfolio
        portfolio_title: "Portfolio",
        portfolio_demo: "",
        portfolio_subtitle: "A selection of my latest designs and projects",
        filter_all: "All",
        filter_ai: "AI & Plugins",
        filter_web: "Web & E-Commerce",
        
        proj1_cat: "WordPress Plugin & AI",
        proj1_title: "ChatNegar AI Plugin & Landing Site",
        proj1_desc: "End-to-end UI design and technical development of the ChatNegar product landing site and WordPress AI chatbot plugin. It leverages AI models to deliver 24/7 automated customer support, instant query resolution, and enhanced conversion rates for web platforms.",
        
        proj2_cat: "WordPress Plugin & AI",
        proj2_title: "MaghaleNegar AI Content Generator",
        proj2_desc: "Development of the MaghaleNegar AI WordPress plugin and its custom product landing page. Designed to automate SEO-optimized article creation, compelling meta descriptions, and complete WooCommerce product generation aligned with Google search guidelines.",
        
        proj3_cat: "Web Development / Static CV",
        proj3_title: "Personal CV & Interactive Portfolio",
        proj3_desc: "Custom frontend design and development of an interactive, bilingual (Persian & English) static portfolio website. Built with glassmorphism visual aesthetic, fluid scroll micro-animations, and responsive layout to highlight professional timeline and projects.",
        
        proj4_cat: "E-Commerce Storefront",
        proj4_title: "Hosseiny Kala E-Commerce Store",
        proj4_desc: "Design and development of the Hosseiny Kala e-commerce storefront for home appliances and consumer electronics. Focused on streamlining user navigation, custom promotional banner design, smooth Checkout experience, and intuitive product categorization.",

        proj5_cat: "E-Commerce / Gaming Store",
        proj5_title: "Nakhl Market Gaming E-Commerce",
        proj5_desc: "Collaboration with the design team of Nakhl Market (2 years ago), one of Iran's premier e-commerce destinations for gaming consoles and accessories. Created visual graphic elements, UI banners, and user interaction touchpoints for high-volume store traffic.",

        // Contact
        contact_title: "Get In Touch",
        contact_subtitle: "Let's collaborate on your next digital product",
        contact_panel_title: "Direct Channels",
        contact_panel_desc: "Feel free to reach out for design contracts, full-time opportunities, or just code/graphics chit-chat.",
        contact_email: "Email",
        contact_phone: "Phone Number",
        contact_phone_val: "+98 903 923 8316",
        contact_location: "Location",
        contact_location_val: "No. 4, Zare St., Akher Asfalt, Ahvaz, Khuzestan, Iran",
        contact_social: "Social Media",
        
        form_name_lbl: "Full Name",
        form_email_lbl: "Email Address",
        form_subject_lbl: "Subject",
        form_message_lbl: "Message",
        form_submit: "Send Message",
        form_name_placeholder: "Your Name",
        form_email_placeholder: "email@example.com",
        form_subject_placeholder: "Subject of conversation",
        form_message_placeholder: "Write your message here...",

        // Footer
        footer_rights: "All rights reserved for MohamadHosein. Designed with love."
    }
};

/* ==========================================================================
   APP STATE & INITIALIZATION
   ========================================================================== */
let currentLang = localStorage.getItem('portfolio_lang') || 'fa';

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileMenu();
    initCustomCursor();
    initScrollReveal();
    initPortfolioFilters();
    initContactForm();
    initTypewriter();
    initYear();
});

/* ==========================================================================
   BILINGUAL TRANSLATION ENGINE
   ========================================================================== */
const langToggleBtn = document.getElementById('lang-toggle');
const textTypewriter = {
    fa: ['طراح و توسعه‌دهنده وب', 'گرافیست خلاق', 'طراح رابط کاربری UI/UX'],
    en: ['Web Designer & Developer', 'Creative Graphic Designer', 'UI/UX Interface Designer']
};

function initLanguage() {
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            localStorage.setItem('portfolio_lang', currentLang);
            applyLanguage(currentLang);
            
            // Re-trigger typewriter for new language
            resetTypewriter();
        });
    }
}

function applyLanguage(lang) {
    const isRtl = lang === 'fa';
    
    // Set Document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    
    // Set Body class for CSS fonts and styles
    if (isRtl) {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
        if (langToggleBtn) langToggleBtn.querySelector('.lang-label').textContent = 'EN';
    } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
        if (langToggleBtn) langToggleBtn.querySelector('.lang-label').textContent = 'FA';
    }
    
    // Update Title tag
    document.title = isRtl 
        ? "محمدحسین صبور | طراح و توسعه‌دهنده وب & گرافیست" 
        : "MohamadHosein Sabour | Web Developer & Graphic Designer";

    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update Input placeholders
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    if (nameInput) nameInput.placeholder = translations[lang]['form_name_placeholder'];
    if (emailInput) emailInput.placeholder = translations[lang]['form_email_placeholder'];
    if (subjectInput) subjectInput.placeholder = translations[lang]['form_subject_placeholder'];
    if (messageInput) messageInput.placeholder = translations[lang]['form_message_placeholder'];
}

/* ==========================================================================
   TYPEWRITER ANIMATION
   ========================================================================== */
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;
const typedTextSpan = document.getElementById('typed-text');

function initTypewriter() {
    const words = textTypewriter[currentLang];
    const currentWord = words[typeIndex];
    
    if (!typedTextSpan) return;

    if (isDeleting) {
        // Erase character
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Type character
        typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    // Word complete typed
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Wait before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % words.length; // Next word
        typeSpeed = 500; // Wait before starting next word
    }

    typewriterTimeout = setTimeout(initTypewriter, typeSpeed);
}

function resetTypewriter() {
    clearTimeout(typewriterTimeout);
    typeIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typedTextSpan) typedTextSpan.textContent = "";
    initTypewriter();
}

/* ==========================================================================
   SMOOTH CUSTOM CURSOR
   ========================================================================== */
function initCustomCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const outline = document.querySelector('.custom-cursor-outline');
    
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    const speed = 0.16; // Interpolation speed
    let isMoving = false;

    // Track mouse coordinate
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMoving) {
            dot.style.opacity = '1';
            outline.style.opacity = '1';
            isMoving = true;
        }

        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    // Hide cursor when leaving page
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        outline.style.opacity = '0';
        isMoving = false;
    });

    // Smooth outline interpolation loop
    function updateOutline() {
        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;
        
        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';
        
        requestAnimationFrame(updateOutline);
    }
    updateOutline();

    // Elements triggers cursor expand
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .portfolio-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });
}

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    // Open/Close
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close when clicking nav-link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('open');
            navMenu.classList.remove('open');
        }
    });

    // Scroll active link highlight & header scroll effect
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Header background toggle on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link tracking
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link.active')?.classList.remove('active');
                document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If it is the skills section, animate skill meters
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        // Triggers the transition defined in CSS
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

/* ==========================================================================
   PORTFOLIO CATEGORIES FILTER
   ========================================================================== */
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length === 0 || portfolioItems.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active button
            document.querySelector('.filter-btn.active')?.classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || (category && category.includes(filterValue))) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

/* ==========================================================================
   CONTACT FORM HANDLER & MODAL POPUP
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Visual loader inside submit button
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = currentLang === 'fa' ? 'درحال پردازش...' : 'Processing...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Restore button
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
            
            // Show Contact Inactive Modal Popup
            showContactModal();
            
            // Clear inputs
            form.reset();
        }, 600);
    });
}

function showContactModal() {
    let modal = document.getElementById('contact-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'contact-modal';
        modal.className = 'custom-modal';
        document.body.appendChild(modal);
    }
    
    const isFa = currentLang === 'fa';
    
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeContactModal()"></div>
        <div class="modal-card glass">
            <button class="modal-close" onclick="closeContactModal()" aria-label="Close">&times;</button>
            <div class="modal-icon-box">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <h3 class="modal-title">${isFa ? 'بخش تماس در حال حاضر غیرفعال است' : 'Contact Form Currently Inactive'}</h3>
            <p class="modal-text">
                ${isFa 
                    ? 'این بخش در حال حاضر کار نمی‌کند. در عوض می‌توانید از طریق شماره <strong>09039238316</strong> مستقیم با من در ارتباط باشید:' 
                    : 'This contact form is currently unavailable. Instead, you can reach out directly via phone or WhatsApp:'}
            </p>
            <div class="modal-phone-box">
                <a href="tel:09039238316" class="phone-number">09039238316</a>
            </div>
            <div class="modal-actions">
                <a href="tel:09039238316" class="btn btn-primary modal-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>${isFa ? 'تماس تلفنی' : 'Call Now'}</span>
                </a>
                <a href="https://wa.me/989039238316" target="_blank" rel="noopener noreferrer" class="btn btn-outline modal-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <span>${isFa ? 'واتساپ' : 'WhatsApp'}</span>
                </a>
            </div>
        </div>
    `;
    
    setTimeout(() => modal.classList.add('active'), 10);

    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeContactModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function showToast(message) {
    // Check if toast already exists
    let toast = document.querySelector('.toast-notification');
    if (toast) toast.remove();

    // Create element
    toast = document.createElement('div');
    toast.className = 'toast-notification glass';
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        padding: 16px 28px;
        border-radius: 12px;
        color: #fff;
        z-index: 10000;
        text-align: center;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0,242,254,0.2);
        border: 1px solid rgba(0,242,254,0.3);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease;
        font-family: ${currentLang === 'fa' ? 'var(--font-fa)' : 'var(--font-en)'};
        pointer-events: none;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Fade In
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    }, 50);

    // Fade Out after 4 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

/* ==========================================================================
   FOOTER UTILS
   ========================================================================== */
function initYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
