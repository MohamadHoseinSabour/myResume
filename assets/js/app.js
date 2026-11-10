/* ==========================================================================
   MOHAMADHOSEIN SABOUR - INTERACTIVE SCRIPT SYSTEM 2026
   Bilingual Engine • Mobile Auto-Scroll • Lightbox • UX Micro-Interactions
   ========================================================================== */

/* ==========================================================================
   BILINGUAL TRANSLATION DICTIONARY (FA / EN)
   ========================================================================== */
const translations = {
    fa: {
        // Navigation
        nav_menu_title: "منوی دسترسی",
        nav_designer_dev: "طراح و توسعه‌دهنده وب",
        nav_home: "خانه",
        nav_about: "درباره من",
        nav_skills: "مهارت‌ها",
        nav_experience: "سوابق کاری",
        nav_portfolio: "پورتفولیو",
        nav_contact: "تماس",
        btn_call_direct: "تماس مستقیم",

        // Hero
        hero_status: "آماده برای خلق ایده‌های نو و پروژه‌های فریلنسری",
        hero_badge: "آماده برای خلق ایده‌های نو",
        hero_greetings: "سلام، من",
        hero_name: "محمدحسین صبور",
        hero_greetings_end: "هستم",
        hero_desc: "طراح گرافیک و توسعه‌دهنده وب، متمرکز بر خلق رابط‌های کاربری مدرن، مینیمال و کاربرپسند. تبدیل ایده‌های پیچیده به تجربیات دیجیتال فراموش‌نشدنی با تلفیق هنر بصری و استانداردهای مهندسی وب.",
        hero_cta_projects: "مشاهده نمونه‌کارها",
        hero_cta_contact: "همکاری با من",
        about_metric_exp: "سال سابقه تخصصی",
        about_metric_proj: "پروژه موفق وب",
        stat_satisfaction: "تعهد و کیفیت تحویل",
        scroll_down: "اسکرول کنید",

        // About
        about_title: "درباره من",
        about_subtitle: "داستان من، دیدگاه دیزاین و مسیر حرفه‌ای",
        about_badge: "خلق تمایز دیجیتال",
        about_header: "خلق هویت بصری متمایز در دنیای دیجیتال",
        about_desc: "من یک طراح و گرافیست وب هستم که همیشه مشتاق روبه‌رو شدن با چالش‌های جدید و خلق تجربه‌های بصری متمایز در دنیای دیجیتالم. باور دارم که ترکیب خلاقیت با یک طراحی هدفمند، تمیز و ساختاریافته، نه‌تنها ظاهر سایت را زیبا می‌کند، بلکه ارتباط موثری بین کاربر و محصول می‌سازد. هدف من تبدیل ایده‌های پیچیده به رابط‌های کاربری چشم‌نواز، مینیمال و کاربرپسند است.",
        about_info_edu: "تحصیلات آکادمیک",
        about_info_edu_val: "کارشناسی مهندسی برق (دانشگاه شهید چمران اهواز - ۱۴۰۲ تا کنون)",
        about_info_lang: "زبان‌های ارتباطی",
        lang_persian: "فارسی (زبان مادری)",
        lang_native: "بومی ۱۰۰٪",
        lang_english: "انگلیسی (فنی و مستندات)",
        lang_technical: "روان و کاری",
        about_connect_title: "آماده شروع همکاری هستید؟",
        about_connect_desc: "می‌توانید نسخه خلاصه رزومه من را دریافت کنید یا بلافاصله پیام بفرستید.",
        about_cta_hire: "دعوت به همکاری",
        about_cta_cv: "دانلود رزومه",

        // Skills
        skills_title: "مهارت‌ها و ابزارها",
        skills_subtitle: "تخصص‌های فنی، نرم‌افزارهای طراحی و ابزارهای هوش مصنوعی",
        skills_cat_dev: "توسعه وب",
        skills_cat_design: "طراحی و رابط کاربری",
        skills_cat_tools: "ابزارها و استانداردها",

        // Timeline
        timeline_title: "مسیر شغلی و تحصیلی",
        timeline_subtitle: "سوابق کاری تخصصی و تحصیلات دانشگاهی",
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
        exp3_d1: "طراحی المان‌های گرافیکی و خلق هویت بصری یکپارچه برای پلتفرم فروشگاهی.",
        exp3_d2: "بهینه‌سازی ظاهر سایت برای ارتقای تعامل کاربران، بهبود نرخ کلیک و یکپارچگی بصری.",
        
        edu1_title: "کارشناسی مهندسی برق",
        edu1_school: "دانشگاه شهید چمران اهواز",
        edu1_desc: "تحصیل در گرایش مهندسی برق به عنوان بستر مناسب تقویت تفکر تحلیلی و حل مسئله در مسائل پیچیده مهندسی و نرم‌افزاری.",

        exp4_title: "متخصص محتوای بصری و هوش مصنوعی",
        exp4_company: "مجموعه اینتاپاسو (۳ سال همکاری)",
        exp4_d1: "بهره‌گیری از ابزارهای پیشرفته هوش مصنوعی و تدوین ویدیو برای خلق محتوای دیجیتال متمایز و پیشرو.",
        exp4_d2: "طراحی چیدمان بصری و ادیتور شبکه‌های اجتماعی با شناخت دقیق از رفتار و نیازهای مخاطبان دیجیتال.",

        // Portfolio
        portfolio_title: "نمونه‌کارها",
        portfolio_subtitle: "منتخبی از آخرین طراحی‌ها، افزونه‌ها و پروژه‌های وب من",
        filter_all: "همه",
        filter_ai: "افزونه و هوش مصنوعی",
        filter_web: "توسعه وب و فروشگاهی",
        badge_live: "پروژه فعال",
        hint_touch_scroll: "لمس و اسکرول برای مشاهده کل صفحه",
        btn_autoscroll: "اسکرول خودکار",
        btn_autoscroll_stop: "توقف اسکرول",
        btn_fullscreen: "نمای کامل",
        view_project: "مشاهده آنلاین",
        lightbox_scroll_hint: "برای مشاهده کل پروژه به پایین اسکرول کنید",
        
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
        contact_subtitle: "بیایید گفتگوی خلاقانه را شروع کنیم؛ آماده همکاری و اجرای پروژه‌های نو",
        contact_panel_title: "ارتباط مستقیم",
        contact_panel_desc: "برای گفتگو درباره همکاری، استخدام یا فقط گپ زدن در حوزه دیزاین و برنامه‌نویسی با من در تماس باشید.",
        contact_email: "آدرس ایمیل",
        contact_phone: "شماره تلفن مستقیم",
        contact_phone_val: "09039238316",
        btn_copy: "کپی",
        btn_copied: "کپی شد! ✓",
        toast_copied: "شماره با موفقیت کپی شد!",
        toast_code_copied: "کانتکست کد کپی شد!",
        contact_location: "موقعیت کاری",
        contact_location_val: "اهواز، ایران (فعال در پروژه‌های دورکاری)",
        contact_social: "شبکه‌های اجتماعی و پیام‌رسان‌ها",
        
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
        footer_rights: "تمامی حقوق برای محمدحسین صبور محفوظ است. طراحی با عشق و کدنویسی استاندارد."
    },
    en: {
        // Navigation
        nav_menu_title: "Navigation",
        nav_designer_dev: "Web Designer & Developer",
        nav_home: "Home",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        btn_call_direct: "Direct Call",

        // Hero
        hero_status: "Open for innovative ideas & freelance projects",
        hero_badge: "Ready to Create Innovative Ideas",
        hero_greetings: "Hi, I am",
        hero_name: "MohamadHosein Sabour",
        hero_greetings_end: "",
        hero_desc: "Web Developer and Graphic Designer focusing on crafting clean, minimal, and user-centric interfaces. Turning complex concepts into memorable digital experiences by combining visual artistry with web engineering standards.",
        hero_cta_projects: "View My Works",
        hero_cta_contact: "Let's Connect",
        about_metric_exp: "Years Experience",
        about_metric_proj: "Completed Web Projects",
        stat_satisfaction: "Commitment & Quality Delivery",
        scroll_down: "Scroll Down",

        // About
        about_title: "About Me",
        about_subtitle: "My Story, Design Philosophy & Professional Journey",
        about_badge: "Digital Differentiation",
        about_header: "Crafting Distinct Visual Identities in the Digital World",
        about_desc: "I am a web designer and graphic artist passionate about tackling new challenges and creating unique visual experiences. I believe blending creativity with a purposeful, structured design not only makes websites look stunning but also forms effective connections between users and products. My goal is to simplify complex ideas into elegant, minimal, and user-friendly user interfaces.",
        about_info_edu: "Academic Education",
        about_info_edu_val: "B.Sc. in Electrical Engineering (Shahid Chamran University - 2023 to Present)",
        about_info_lang: "Languages & Communication",
        lang_persian: "Persian (Native)",
        lang_native: "Native 100%",
        lang_english: "English (Technical & Docs)",
        lang_technical: "Professional & Fluent",
        about_connect_title: "Ready to Start Collaboration?",
        about_connect_desc: "Feel free to download my CV summary or drop me a line right away.",
        about_cta_hire: "Hire Me",
        about_cta_cv: "Download CV",

        // Skills
        skills_title: "Skills & Tools",
        skills_subtitle: "Technical expertise, UI/UX software & modern AI generation tools",
        skills_cat_dev: "Web Development",
        skills_cat_design: "UI/UX & Design",
        skills_cat_tools: "Tools & Methodologies",

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
        exp3_d2: "Optimized website layout assets to improve user engagement metrics, CTR and visual harmony.",
        
        edu1_title: "B.Sc. in Electrical Engineering",
        edu1_school: "Shahid Chamran University of Ahvaz",
        edu1_desc: "Studying Electrical Engineering, fostering solid analytical reasoning and problem-solving structures for complex projects.",

        exp4_title: "Visual Content & AI Specialist",
        exp4_company: "Intapaso Co. (3 Years Collaboration)",
        exp4_d1: "Leveraged advanced artificial intelligence generation tools and video post-production editing for standout digital content.",
        exp4_d2: "Designed visual grids and managed social media layout structures matching specific target audiences behavior.",

        // Portfolio
        portfolio_title: "Portfolio",
        portfolio_subtitle: "A selection of my latest designs, plugins and web projects",
        filter_all: "All",
        filter_ai: "AI & Plugins",
        filter_web: "Web & E-Commerce",
        badge_live: "Live Project",
        hint_touch_scroll: "Touch & scroll to explore full page",
        btn_autoscroll: "Auto Scroll",
        btn_autoscroll_stop: "Stop Scroll",
        btn_fullscreen: "Fullscreen",
        view_project: "View Live",
        lightbox_scroll_hint: "Scroll down to view entire project preview",
        
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
        contact_subtitle: "Let's start a creative discussion; open for collaboration & fresh projects",
        contact_panel_title: "Direct Channels",
        contact_panel_desc: "Feel free to reach out for design contracts, full-time opportunities, or just code/graphics chit-chat.",
        contact_email: "Email Address",
        contact_phone: "Direct Phone Number",
        contact_phone_val: "+98 903 923 8316",
        btn_copy: "Copy",
        btn_copied: "Copied! ✓",
        toast_copied: "Phone number copied to clipboard!",
        toast_code_copied: "Code context copied to clipboard!",
        contact_location: "Working Location",
        contact_location_val: "Ahvaz, Iran (Active in Remote Projects)",
        contact_social: "Social Media & Messengers",
        
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
        footer_rights: "All rights reserved for MohamadHosein Sabour. Crafted with passion & clean code."
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
    initPortfolioTouchAndAutoScroll();
    initLightbox();
    initClipboardCopy();
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
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update Input placeholders
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    if (nameInput && translations[lang]['form_name_placeholder']) nameInput.placeholder = translations[lang]['form_name_placeholder'];
    if (emailInput && translations[lang]['form_email_placeholder']) emailInput.placeholder = translations[lang]['form_email_placeholder'];
    if (subjectInput && translations[lang]['form_subject_placeholder']) subjectInput.placeholder = translations[lang]['form_subject_placeholder'];
    if (messageInput && translations[lang]['form_message_placeholder']) messageInput.placeholder = translations[lang]['form_message_placeholder'];
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
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2200; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % words.length;
        typeSpeed = 400;
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
   SMOOTH CUSTOM CURSOR (DESKTOP)
   ========================================================================== */
function initCustomCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const outline = document.querySelector('.custom-cursor-outline');
    
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    const speed = 0.16;
    let isMoving = false;

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

    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        outline.style.opacity = '0';
        isMoving = false;
    });

    function updateOutline() {
        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;
        
        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';
        
        requestAnimationFrame(updateOutline);
    }
    updateOutline();

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .portfolio-item, .bento-card, .skill-tile');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

/* ==========================================================================
   MOBILE MENU DRAWER & NAVIGATION
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navBackdrop = document.getElementById('nav-backdrop');
    const drawerClose = document.getElementById('drawer-close');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    function openMenu() {
        menuToggle.classList.add('open');
        navMenu.classList.add('open');
        if (navBackdrop) navBackdrop.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
        if (navBackdrop) navBackdrop.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu(e) {
        if (e) e.stopPropagation();
        if (navMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    if (drawerClose) drawerClose.addEventListener('click', closeMenu);
    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // Header scroll background toggle & active link tracking
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 140;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link.active')?.classList.remove('active');
                document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   PORTFOLIO FILTERS
   ========================================================================== */
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length === 0 || portfolioItems.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
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
   PORTFOLIO TOUCH-SCROLL & AUTO-SCROLL CONTROLLER
   Fixes: Images now scroll effortlessly on Mobile touch & via Auto-Scroll!
   ========================================================================== */
const activeScrollAnimations = new Map();

function initPortfolioTouchAndAutoScroll() {
    const imgBoxes = document.querySelectorAll('.project-img-box');
    const autoscrollBtns = document.querySelectorAll('.btn-autoscroll');

    // 1. Hide scroll hint once user manually scrolls inside the preview window
    imgBoxes.forEach(box => {
        const hint = box.querySelector('.mobile-scroll-hint');
        box.addEventListener('scroll', () => {
            if (box.scrollTop > 20 && hint && !hint.classList.contains('hidden')) {
                hint.classList.add('hidden');
            }
        }, { passive: true });

        // Stop any active auto-scroll if user touches or wheels the preview box
        box.addEventListener('touchstart', () => stopAutoScroll(box), { passive: true });
        box.addEventListener('wheel', () => stopAutoScroll(box), { passive: true });
    });

    // 2. Auto-Scroll Controller button
    autoscrollBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const boxId = btn.getAttribute('data-box');
            const targetBox = document.getElementById(boxId);
            if (!targetBox) return;

            if (activeScrollAnimations.has(targetBox)) {
                // If currently running, stop it
                stopAutoScroll(targetBox);
            } else {
                // Start smooth auto-scrolling
                startAutoScroll(targetBox, btn);
            }
        });
    });
}

function startAutoScroll(box, btn) {
    // Hide hint if visible
    const hint = box.querySelector('.mobile-scroll-hint');
    if (hint) hint.classList.add('hidden');

    btn.classList.add('active-autoscroll');
    const btnSpan = btn.querySelector('span');
    if (btnSpan) {
        btnSpan.textContent = translations[currentLang]['btn_autoscroll_stop'] || 'توقف اسکرول';
    }

    let direction = 1; // 1 = scrolling down, -1 = scrolling up
    let speed = 2.5; // pixels per frame
    let isPaused = false;
    let pauseTimer = null;

    function step() {
        if (isPaused) {
            const animId = requestAnimationFrame(step);
            activeScrollAnimations.set(box, { animId, btn });
            return;
        }

        const maxScroll = box.scrollHeight - box.clientHeight;

        if (direction === 1) {
            box.scrollTop += speed;
            if (box.scrollTop >= maxScroll - 2) {
                // Reached bottom, pause then reverse
                isPaused = true;
                pauseTimer = setTimeout(() => {
                    direction = -1;
                    speed = 4.0; // scroll back up a bit faster
                    isPaused = false;
                }, 1400);
            }
        } else {
            box.scrollTop -= speed;
            if (box.scrollTop <= 2) {
                // Reached top again, finish animation
                stopAutoScroll(box);
                return;
            }
        }

        const animId = requestAnimationFrame(step);
        activeScrollAnimations.set(box, { animId, btn, pauseTimer });
    }

    const animId = requestAnimationFrame(step);
    activeScrollAnimations.set(box, { animId, btn, pauseTimer });
}

function stopAutoScroll(box) {
    if (activeScrollAnimations.has(box)) {
        const { animId, btn, pauseTimer } = activeScrollAnimations.get(box);
        cancelAnimationFrame(animId);
        if (pauseTimer) clearTimeout(pauseTimer);
        activeScrollAnimations.delete(box);

        if (btn) {
            btn.classList.remove('active-autoscroll');
            const btnSpan = btn.querySelector('span');
            if (btnSpan) {
                btnSpan.textContent = translations[currentLang]['btn_autoscroll'] || 'اسکرول خودکار';
            }
        }
    }
}

/* ==========================================================================
   FULLSCREEN LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
    const lightbox = document.getElementById('preview-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const openButtons = document.querySelectorAll('.btn-open-lightbox');

    if (!lightbox || !lightboxImg) return;

    function openLightbox(imgSrc, title) {
        lightboxImg.src = imgSrc;
        if (lightboxTitle) lightboxTitle.textContent = title || (currentLang === 'fa' ? 'پیش‌نمایش کامل' : 'Full Preview');
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300);
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = btn.getAttribute('data-img');
            const title = btn.getAttribute('data-title');
            if (imgSrc) {
                openLightbox(imgSrc, title);
            }
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* ==========================================================================
   CLIPBOARD & TOAST NOTIFICATION
   ========================================================================== */
function initClipboardCopy() {
    const copyPhoneBtn = document.getElementById('copy-phone-btn');
    const copyCodeBtn = document.getElementById('copy-code-btn');

    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', () => {
            const phone = "09039238316";
            navigator.clipboard.writeText(phone).then(() => {
                const span = copyPhoneBtn.querySelector('span');
                const orig = span ? span.textContent : "";
                if (span) span.textContent = translations[currentLang]['btn_copied'] || "کپی شد! ✓";
                showToast(translations[currentLang]['toast_copied'] || "شماره با موفقیت کپی شد!");
                setTimeout(() => {
                    if (span) span.textContent = orig;
                }, 2000);
            }).catch(() => {
                showToast("09039238316");
            });
        });
    }

    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const codeSnippet = `const creator = {
  name: 'MohamadHosein Sabour',
  role: 'Web Developer & Graphic Designer',
  stack: ['React', 'WordPress', 'Figma', 'AI Tools'],
  focus: 'Clean Code & High-Impact UI',
  openToWork: true,
  getInTouch: () => '09039238316'
};`;
            navigator.clipboard.writeText(codeSnippet).then(() => {
                showToast(translations[currentLang]['toast_code_copied'] || "کانتکست کد کپی شد!");
            });
        });
    }
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3200);
}

/* ==========================================================================
   CONTACT FORM & FALLBACK MODAL
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const span = submitBtn ? submitBtn.querySelector('span') : null;
        const originalText = span ? span.textContent : "";

        if (span) span.textContent = currentLang === 'fa' ? 'درحال پردازش...' : 'Processing...';
        if (submitBtn) {
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;
        }

        setTimeout(() => {
            if (span) span.textContent = originalText;
            if (submitBtn) {
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }
            showContactModal();
            form.reset();
        }, 500);
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
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <h3 class="modal-title">${isFa ? 'بخش تماس فرم در حال حاضر غیرفعال است' : 'Contact Form Inactive'}</h3>
            <p class="modal-text">
                ${isFa 
                    ? 'برای ارتباط سریع‌تر و مستقیم، می‌توانید از طریق تماس یا واتساپ با من در ارتباط باشید:' 
                    : 'For immediate response, please connect directly via phone call or WhatsApp:'}
            </p>
            <div class="modal-phone-box">
                <a href="tel:09039238316" class="phone-number">09039238316</a>
            </div>
            <div class="modal-actions">
                <a href="tel:09039238316" class="btn btn-primary modal-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>${isFa ? 'تماس مستقیم' : 'Call Directly'}</span>
                </a>
                <a href="https://wa.me/989039238316" target="_blank" rel="noopener noreferrer" class="btn btn-outline modal-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <span>${isFa ? 'واتساپ' : 'WhatsApp'}</span>
                </a>
            </div>
        </div>
    `;
    
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   FOOTER UTILS
   ========================================================================== */
function initYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

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
