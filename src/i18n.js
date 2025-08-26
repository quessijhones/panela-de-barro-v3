// src/i18n.js
// -------------------------------------------------
// i18n super simples com PT/EN/AR + helpers públicos
// -------------------------------------------------

const STORAGE_KEY = "lang";

export const LOCALES = {
  pt: { label: "Português", short: "PT", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  ar: { label: "العربية", short: "AR", dir: "rtl" },
};

// textos (mantive curtos para caber aqui; pode alongar depois)
const STR = {
  // nav
  "nav.about": { pt: "Sobre", en: "About", ar: "حول" },
  "nav.menu": { pt: "Menu", en: "Menu", ar: "القائمة" },
  "nav.gallery": { pt: "Galeria", en: "Gallery", ar: "المعرض" },
  "nav.woodfire": { pt: "Fogão a Lenha", en: "Wood-Fire", ar: "الطهي بالحطب" },
  "nav.location": { pt: "Localização", en: "Location", ar: "الموقع" },
  "nav.support": { pt: "Suporte", en: "Support", ar: "الدعم" },
  "nav.back": { pt: "Voltar ao início", en: "Back to home", ar: "العودة إلى البداية" },

  // hero
  "hero.title": {
    pt: "Sabores brasileiros, calor de família",
    en: "Brazilian flavors, family warmth",
    ar: "نكهات برازيلية ودفء عائلي",
  },
  "hero.subtitle": {
    pt: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
    en: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
    ar: "مطعم عائلي في قطر. أكثر من 20 سنة من الضيافة وطهي الحطب والجذور البرازيلية.",
  },
  "hero.soon": {
    pt: "Inauguração em Novembro — reservas online em breve.",
    en: "Opening in November — online reservations soon.",
    ar: "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريبًا.",
  },
  "hero.cta": { pt: "Ver Menu", en: "View Menu", ar: "عرض القائمة" },

  // menu
  "menu.title": { pt: "Menu", en: "Menu", ar: "القائمة" },
  "menu.tabs.all": { pt: "Todos", en: "All", ar: "الكل" },
  "menu.tabs.mains": { pt: "Pratos", en: "Mains", ar: "الأطباق" },
  "menu.tabs.seasonal": { pt: "Sazonais", en: "Seasonal", ar: "موسمية" },
  "menu.tabs.beverages": { pt: "Bebidas", en: "Beverages", ar: "المشروبات" },
  "menu.tabs.desserts": { pt: "Sobremesas", en: "Desserts", ar: "الحلويات" },

  // about (resumo; pode ampliar depois)
  "about.title": { pt: "Sobre", en: "About", ar: "حول" },
  "about.p1": {
    pt: "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha.",
    en: "Panela de Barro is a tribute to Brazilian roots: farm cooking, fresh ingredients and wood-fire. Our family brings decades of kitchen memories to Doha.",
    ar: "بانِيلا دي بارّو هو تكريم للجذور البرازيلية: طبخ ريفي ومكوّنات طازجة ونار الحطب. عائلتنا تجلب خبرة عقود إلى الدوحة.",
  },
  "about.h1": {
    pt: "Por que “Panela de Barro”?",
    en: "Why “Panela de Barro”?",
    ar: "لماذا «قدر الطين»؟",
  },
  "about.p2": {
    pt: "A panela de barro representa mistura, resistência e criatividade na culinária brasileira — da herança indígena às influências africanas e portuguesas.",
    en: "Clay pots symbolize the blend, resilience and creativity of Brazilian cuisine — from Indigenous heritage to African and Portuguese influences.",
    ar: "قدر الطين يرمز إلى المزج والصلابة والإبداع في المطبخ البرازيلي — من الإرث الأصلي إلى التأثيرات الأفريقية والبرتغالية.",
  },
  "about.p3": {
    pt: "Cozimento lento, caldos encorpados e sabor terroso: é o que buscamos servir todos os dias.",
    en: "Slow cooking, rich broths and an earthy flavor — that’s what we serve every day.",
    ar: "الطهي البطيء والمرق الغني والنكهة الترابية — هذا ما نقدمه يوميًا.",
  },
  "about.team": { pt: "Nossa Família", en: "Our Family", ar: "عائلتنا" },
  "about.cap.panela": {
    pt: "Panela de barro em uso",
    en: "Clay pot in use",
    ar: "قدر طيني أثناء الاستخدام",
  },
  "about.cap.artesanal": {
    pt: "Artesanato feito à mão",
    en: "Hand-made craft",
    ar: "حِرَف يدوية",
  },
  "about.owner": { pt: "fundadora", en: "founder", ar: "المؤسِّسة" },
  "about.headchef": { pt: "chef executivo", en: "head chef", ar: "الطاهي الرئيسي" },
  "about.mom": { pt: "mãe e inspiração", en: "mother & inspiration", ar: "الأم والإلهام" },
  "about.quessi": {
    pt: "Quessi lidera a visão e a hospitalidade da casa.",
    en: "Quessi leads the vision and hospitality of the house.",
    ar: "تقود كيسي رؤية المكان وضيافته.",
  },
  "about.alex": {
    pt: "Alex assina os sabores do fogão a lenha.",
    en: "Alex develops the wood-fire flavors.",
    ar: "أليكس يبدع نكهات الطهي على الحطب.",
  },
  "about.cleusa": {
    pt: "Dona Cleusa guarda as receitas de família que nos trouxeram até aqui.",
    en: "Mrs. Cleusa keeps the family recipes that brought us here.",
    ar: "السيدة كليوزا تحفظ وصفات العائلة التي أوصلتنا إلى هنا.",
  },

  // woodfire
  "wood.title": { pt: "Fogão a Lenha", en: "Wood-Fire", ar: "الطهي بالحطب" },
  "wood.p1": {
    pt: "No Brasil, o fogão a lenha é memória afetiva e técnica: calor constante e fumaça aromática que abraçam o alimento.",
    en: "In Brazil, wood-fire is memory and technique: steady heat and fragrant smoke that embrace the food.",
    ar: "في البرازيل، طهي الحطب ذاكرة وتقنية: حرارة ثابتة ودخان عطِر يعانق الطعام.",
  },
  "wood.p2": {
    pt: "Em breve publicaremos histórias, fotos e receitas dessa tradição.",
    en: "Soon we’ll publish stories, photos and recipes from this tradition.",
    ar: "سننشر قريبًا قصصًا وصورًا ووصفات من هذا التراث.",
  },

  // others
  "gallery.title": { pt: "Galeria", en: "Gallery", ar: "المعرض" },
  "loc.title": { pt: "Localização", en: "Location", ar: "الموقع" },
  "loc.subtitle": {
    pt: "Baraha Town, Doha, Qatar",
    en: "Baraha Town, Doha, Qatar",
    ar: "براها تاون، الدوحة، قطر",
  },
  "support.title": { pt: "Suporte", en: "Support", ar: "الدعم" },
  "support.p1": {
    pt: "Quer apoiar nosso restaurante? Veja algumas formas simples:",
    en: "Want to support our restaurant? Here are some simple ways:",
    ar: "تود دعم مطعمنا؟ إليك بعض الطرق البسيطة:",
  },
  "support.opt1": { pt: "Siga e compartilhe nas redes sociais", en: "Follow & share on social media", ar: "المتابعة والمشاركة على الشبكات الاجتماعية" },
  "support.opt2": { pt: "Avalie quando abrirmos", en: "Leave a review once we open", ar: "اترك تقييماً عند الافتتاح" },
  "support.opt3": { pt: "Indique para amigos", en: "Recommend to friends", ar: "انصح به الأصدقاء" },
  notfound: { pt: "Página não encontrada.", en: "Page not found.", ar: "الصفحة غير موجودة." },

  // modal de prato
  "dish.more": { pt: "Ver detalhes", en: "View details", ar: "عرض التفاصيل" },
  "dish.close": { pt: "Fechar", en: "Close", ar: "إغلاق" },
};

// ---------- helpers ----------
export function getLang() {
  const k = localStorage.getItem(STORAGE_KEY);
  return LOCALES[k] ? k : "pt";
}

export function setLang(k) {
  const nk = LOCALES[k] ? k : "pt";
  localStorage.setItem(STORAGE_KEY, nk);
  applyDocumentLang(nk);
  window.dispatchEvent(new Event("langchange"));
}

export function t(key, lang) {
  const k = lang || getLang();
  const v = STR[key];
  if (!v) return key;
  return v[k] ?? v["pt"] ?? key;
}

export function applyDocumentLang(lang = getLang()) {
  const meta = LOCALES[lang] || LOCALES.pt;
  document.documentElement.lang = lang;
  document.documentElement.dir = meta.dir || "ltr";
}

// pega ?lang= em window.location.search ou no hash (#/rota?lang=xx)
export function initLangFromURL() {
  const fromSearch = (window.location.search || "").match(/[?&]lang=(pt|en|ar)/i);
  let lang = fromSearch && fromSearch[1];

  if (!lang && window.location.hash.includes("?")) {
    const qs = window.location.hash.split("?")[1] || "";
    const m = qs.match(/(?:^|&)lang=(pt|en|ar)/i);
    lang = m && m[1];
  }
  if (lang) setLang(lang.toLowerCase());
  else applyDocumentLang(getLang());
}