// ===== الترجمات / Translations =====
const i18n = {
  ar: {
    meta_desc: "الملف الشخصي لمعتصم عبد الرحمن عمر - مبرمج Backend متخصص في Laravel.",
    nav_about: "نبذة", nav_exp: "الخبرات", nav_projects: "المشاريع", nav_skills: "المهارات", nav_contact: "تواصل",
    hero_greeting: "مرحباً، أنا", hero_name: "معتصم عبد الرحمن حسين", hero_role: "مبرمج Backend",
    hero_desc: "متخصص في تطوير تطبيقات الويب والأنظمة المتكاملة باستخدام إطار العمل Laravel، مع خبرة في تصميم قواعد البيانات، أتمتة العمليات، وربط الأنظمة البرمجية.",
    hero_cta1: "استعرض مشاريعي", hero_cta2: "تواصل معي",
    stat1: "الإطار الأساسي", stat2: "قواعد البيانات", stat3: "الأتمتة",
    about_title: "نبذة شخصية",
    about_p1: "مبرمج Backend متخصص في تطوير تطبيقات الويب والأنظمة المتكاملة باستخدام إطار العمل Laravel. أمتلك خبرة واسعة في تصميم قواعد البيانات وإدارة النظم الخلفية، مع تركيز خاص على أتمتة العمليات وربط الأنظمة البرمجية.",
    about_p2: "أتمتع بقدرة عالية على العمل ضمن فرق برمجية لتطوير حلول تقنية متكاملة، بدءاً من المتاجر الإلكترونية والمواقع التعريفية وصولاً إلى لوحات التحكم المعقدة للتطبيقات التقنية.",
    edu_title: "بكالوريوس تقنية الحاسوب (تخصص برمجة)", edu_sub: "كلية تقنية الحاسوب - طرابلس · التخرج 2025",
    exp_title: "الخبرات العملية",
    exp_role: "مبرمج Backend", exp_company: "شركة رقمنة للخدمات التقنية", exp_period: "العمل الحالي",
    exp_li1: "بناء تكاملات برمجية (API Integrations) بين أنظمة متعددة لضمان تبادل البيانات بسلاسة.",
    exp_li2: "تكامل واجهة WhatsApp API لربط خدمات العملاء والتواصل الآلي.",
    exp_li3: "تكامل نظام إدارة الموارد Dolibarr مع الأنظمة الأخرى.",
    exp_li4: "تكامل نظام تذاكر الدعم الفني Zammad لتحسين خدمة العملاء.",
    exp_li5: "أتمتة سير العمل (Workflows) باستخدام أداة n8n لزيادة كفاءة العمليات وتقليل المهام اليدوية.",
    exp2_role: "مشرف ومطوّر Backend", exp2_company: "شركة قادر للبرمجيات", exp2_period: "متعاون",
    exp2_li1: "الإشراف على تطوير منصة \"توريستا\" لحجز الاستراحات والشاليهات (التطبيق ولوحة التحكم).",
    exp2_li2: "تطوير وصيانة الأنظمة الخلفية باستخدام إطار العمل Laravel.",
    exp2_li3: "تصميم وهيكلة وإدارة قواعد البيانات (MySQL) لضمان كفاءة الأداء.",
    exp2_li4: "بناء وربط واجهات برمجة التطبيقات (APIs) بين مكوّنات النظام.",
    projects_title: "المشاريع المميزة",
    proj_toresta: "الإشراف على تطوير منصة توريستا لحجز الاستراحات والشاليهات (التطبيق ولوحة التحكم) مع شركة قادر، بما يشمل الأنظمة الخلفية بـ Laravel وإدارة قواعد البيانات وربط واجهات APIs.",
    proj_view_play: "عرض على Google Play ↗",
    proj_ecom_t: "المتاجر الإلكترونية", proj_ecom_d: "تطوير وبناء متاجر إلكترونية متكاملة للشركات والأفراد، تشمل إدارة المنتجات والطلبات وأنظمة الدفع.",
    proj_web_t: "المواقع التعريفية", proj_web_d: "تصميم وتطوير مواقع تعريفية احترافية للشركات والأفراد لإبراز هويتهم وخدماتهم.",
    proj_int_t: "تكامل الأنظمة (Integrations)", proj_int_d: "بناء تكاملات برمجية بين أنظمة متعددة لتبادل البيانات بسلاسة، تشمل نظام Dolibarr لإدارة الموارد، نظام Zammad للدعم الفني، وواجهة WhatsApp API.",
    proj_auto_t: "أتمتة سير العمل", proj_auto_d: "تصميم وأتمتة سير العمل (Workflows) باستخدام أداة n8n لزيادة كفاءة العمليات التقنية وتقليل المهام اليدوية.",
    proj_admin_t: "لوحات التحكم الإدارية", proj_admin_d: "تطوير لوحات تحكم معقدة للتطبيقات التقنية تتيح إدارة شاملة للبيانات والمستخدمين والعمليات.",
    skills_title: "المهارات التقنية",
    skill_backend: "🖥️ تطوير الـ Backend", skill_db: "🗄️ قواعد البيانات", skill_db_design: "تصميم القواعد",
    skill_auto: "⚡ الأتمتة والتكامل", skill_proj: "🚀 تطوير المشاريع",
    chip_ecom: "المتاجر الإلكترونية", chip_web: "المواقع التعريفية", chip_dash: "لوحات التحكم",
    skill_office: "📄 أدوات مكتبية", skill_lang: "🌍 اللغات", chip_ar: "العربية (الأم)", chip_en: "الإنجليزية (جيد)",
    contact_title: "تواصل معي", contact_lead: "هل لديك مشروع أو فرصة عمل؟ يسعدني التواصل معك. اختر الطريقة الأنسب لك:",
    contact_email: "البريد الإلكتروني", contact_phone: "رقم الهاتف", contact_wa: "مراسلة مباشرة",
    footer_by: "صُمم وطُوّر بواسطة"
  },
  en: {
    meta_desc: "Portfolio of Moatsam Abdulrahman Hussein - Backend Developer specialized in Laravel.",
    nav_about: "About", nav_exp: "Experience", nav_projects: "Projects", nav_skills: "Skills", nav_contact: "Contact",
    hero_greeting: "Hi, I'm", hero_name: "Moatsam Abdulrahman Hussein", hero_role: "Backend Developer",
    hero_desc: "Specialized in building web applications and integrated systems with the Laravel framework, with strong experience in database design, process automation, and API integration.",
    hero_cta1: "View My Projects", hero_cta2: "Get In Touch",
    stat1: "Core Framework", stat2: "Databases", stat3: "Automation",
    about_title: "About Me",
    about_p1: "Backend Developer specialized in building web applications and integrated systems using the Laravel framework. I have extensive experience in database design and backend systems management, with a strong focus on process automation and API integration.",
    about_p2: "I work effectively within development teams to build complete technical solutions — from e-commerce stores and corporate websites to complex admin dashboards for technical applications.",
    edu_title: "B.Sc. in Computer Technology (Programming)", edu_sub: "College of Computer Technology - Tripoli · Graduated 2025",
    exp_title: "Work Experience",
    exp_role: "Backend Developer", exp_company: "Raqmana Technical Services", exp_period: "Present",
    exp_li1: "Building API integrations between multiple systems for seamless data exchange.",
    exp_li2: "Integrating the WhatsApp API to connect customer services and automated communication.",
    exp_li3: "Integrating the Dolibarr ERP system with other systems.",
    exp_li4: "Integrating the Zammad support-ticket system to improve customer service.",
    exp_li5: "Automating workflows with n8n to boost efficiency and reduce manual tasks.",
    exp2_role: "Supervisor & Backend Developer", exp2_company: "Qader Tech", exp2_period: "Collaborator",
    exp2_li1: "Supervising the development of \"Toresta\" for booking rest houses and chalets (app and admin dashboard).",
    exp2_li2: "Developing and maintaining backend systems using the Laravel framework.",
    exp2_li3: "Designing, structuring, and managing databases (MySQL) for optimal performance.",
    exp2_li4: "Building and connecting APIs between system components.",
    projects_title: "Featured Projects",
    proj_toresta: "Supervised the development of Toresta, a platform for booking rest houses and chalets (app and admin dashboard) with Qader Tech, including Laravel backend systems, database management, and API integrations.",
    proj_view_play: "View on Google Play ↗",
    proj_ecom_t: "E-Commerce Stores", proj_ecom_d: "Building complete e-commerce stores for businesses and individuals, including product, order, and payment management.",
    proj_web_t: "Corporate Websites", proj_web_d: "Designing and developing professional corporate and personal websites to showcase identity and services.",
    proj_int_t: "System Integrations", proj_int_d: "Building API integrations between multiple systems for seamless data exchange, including Dolibarr (ERP), Zammad (support tickets), and the WhatsApp API.",
    proj_auto_t: "Workflow Automation", proj_auto_d: "Designing and automating workflows using n8n to increase operational efficiency and reduce manual tasks.",
    proj_admin_t: "Admin Dashboards", proj_admin_d: "Developing complex admin dashboards for technical applications, enabling full management of data, users, and operations.",
    skills_title: "Technical Skills",
    skill_backend: "🖥️ Backend Development", skill_db: "🗄️ Databases", skill_db_design: "DB Design",
    skill_auto: "⚡ Automation & Integration", skill_proj: "🚀 Project Development",
    chip_ecom: "E-Commerce", chip_web: "Corporate Sites", chip_dash: "Dashboards",
    skill_office: "📄 Office Tools", skill_lang: "🌍 Languages", chip_ar: "Arabic (Native)", chip_en: "English (Good)",
    contact_title: "Get In Touch", contact_lead: "Have a project or a job opportunity? I'd be happy to connect. Pick the channel that works best for you:",
    contact_email: "Email", contact_phone: "Phone", contact_wa: "Direct message",
    footer_by: "Designed & built by"
  }
};

// ===== تخزين آمن (يتجاهل القيود داخل إطار المعاينة) =====
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

function applyLang(lang) {
  const dict = i18n[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;
    if (el.tagName === "META") el.setAttribute("content", dict[key]);
    else el.textContent = dict[key];
  });
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "ع";
  store.set("lang", lang);
}

const savedLang = store.get("lang") || "ar";
applyLang(savedLang);

document.getElementById("langToggle").addEventListener("click", () => {
  const next = document.documentElement.lang === "ar" ? "en" : "ar";
  applyLang(next);
});

// ===== السنة =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== شريط التنقل =====
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20));

// ===== قائمة الجوال =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ===== تبديل الوضع =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
if (store.get("theme") === "light") { root.classList.add("light"); themeToggle.textContent = "☀️"; }
themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  const isLight = root.classList.contains("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  store.set("theme", isLight ? "light" : "dark");
});

// ===== حركة الظهور =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".section, .hero-inner, .project-card, .skill-box, .timeline-card")
  .forEach(el => { el.classList.add("reveal"); observer.observe(el); });
