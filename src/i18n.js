export const LOCALES = { pt: "PT", en: "EN", ar: "AR" };

const getSearch = () => new URLSearchParams(window.location.search);
export const getLang = () => {
  const q = getSearch();
  const urlLang = q.get("lang");
  const saved = localStorage.getItem("lang");
  const lang = urlLang || saved || "pt";
  // normaliza e repõe na URL uma vez
  if (!urlLang) {
    const hash = window.location.hash || "";
    const sp = new URLSearchParams(window.location.search);
    sp.set("lang", lang);
    history.replaceState(null, "", `/?${sp.toString()}${hash}`);
  }
  return ["pt", "en", "ar"].includes(lang) ? lang : "pt";
};

export const setLang = (next) => {
  const hash = window.location.hash || "";
  const sp = new URLSearchParams(window.location.search);
  sp.set("lang", next);
  history.replaceState(null, "", `/?${sp.toString()}${hash}`);
  localStorage.setItem("lang", next);
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: next } }));
};

export const STRINGS = {
  pt: {
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato", support: "Apoie", back: "Voltar" },
    home: {
      headline: "Sabores brasileiros, calor de família",
      sub: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      coming: "Inauguração em Novembro — reservas online em breve.",
      cta: "Ver Menu"
    },
    menu: { title: "Menu", preview: "Menu (prévia)", all: "Todos", mains: "Pratos Principais", sides: "Acompanhamentos", desserts: "Sobremesas", beverages: "Bebidas", seasonal: "Sazonal", chefs: "Do Chef" },
    tags: { halal: "Halal", beef: "Bovino", sea: "Mar", veg: "Veg", dairy: "Lácteo", gluten: "Glúten" },
    location: { title: "Localização", address: "Baraha Town, Doha, Qatar (Baraha Town)", mapsSoon: "Mapa interativo em breve." },
    gallery: { title: "Galeria" },
    contact: { title: "Contato", email: "Email", phone: "Telefone" },
    support: { title: "Apoie o Panela de Barro", blurb: "Ajude compartilhando, seguindo e deixando sua avaliação." },
    about: {
      title: "Panela de Barro: o sabor que veio da terra",
      long: `
Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes da culinária brasileira. 
A panela de barro — usada por povos indígenas e perpetuada por influências africanas e mineiras — é símbolo de paciência, mistura e resistência. 
No calor suave do fogão a lenha, os ingredientes conversam e ganham profundidade: feijoada, moqueca, vaca atolada, farofa e tantos clássicos.
Nossos fundadores cresceram na roça, entre café, feijão, milho e mandioca. Cleusa (mãe), cozinheira há 25+ anos, e Alex (Head Chef), com 10+ anos de cozinha brasileira e italiana, conduzem a casa com o Chef-owner Quessi Jhones, que traz 6+ anos de experiência como chef em Abu Dhabi e no Qatar. 
O Panela de Barro nasce para homenagear essa herança — e servi-la, quente, com afeto.
`
    },
  },
  en: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact", support: "Support", back: "Back" },
    home: {
      headline: "Brazilian flavors, family warmth",
      sub: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      coming: "Opening in November — online reservations soon.",
      cta: "View Menu"
    },
    menu: { title: "Menu", preview: "Menu (preview)", all: "All", mains: "Mains", sides: "Sides", desserts: "Desserts", beverages: "Beverages", seasonal: "Seasonal", chefs: "Chef’s" },
    tags: { halal: "Halal", beef: "Beef", sea: "Sea", veg: "Veg", dairy: "Dairy", gluten: "Gluten" },
    location: { title: "Location", address: "Baraha Town, Doha, Qatar (Baraha Town)", mapsSoon: "Interactive map coming soon." },
    gallery: { title: "Gallery" },
    contact: { title: "Contact", email: "Email", phone: "Phone" },
    support: { title: "Support Panela de Barro", blurb: "Help by sharing, following and leaving a review." },
    about: {
      title: "Panela de Barro: flavor born from the earth",
      long: `
More than a restaurant, Panela de Barro is a sensory trip to Brazil’s culinary roots.
Clay pots — crafted by Indigenous peoples and enriched by African and mineiro traditions — symbolize patience, fusion and resilience.
Over wood-fire, ingredients slowly mingle into depth: feijoada, moqueca, vaca atolada, farofa and more.
Raised on a farm among coffee, beans, corn and cassava, our family cooks what we lived. Cleusa (mother) has cooked for 25+ years; Alex (Head Chef) brings 10+ years in Brazilian/Italian kitchens; Chef-owner Quessi Jhones has 6+ years as a chef in Abu Dhabi and Qatar.
Panela de Barro honors this heritage — served hot, with affection.
`
    },
  },
  ar: {
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", location: "الموقع", contact: "تواصل", support: "الدعم", back: "رجوع" },
    home: {
      headline: "نكهات برازيلية ودفء العائلة",
      sub: "مطعم عائلي في قطر. أكثر من 20 عامًا في الضيافة وطهي الحطب وجذور برازيلية.",
      coming: "الافتتاح في نوفمبر — الحجوزات عبر الإنترنت قريبًا.",
      cta: "عرض القائمة"
    },
    menu: { title: "القائمة", preview: "القائمة (نظرة سريعة)", all: "الكل", mains: "الأطباق الرئيسية", sides: "المقبلات", desserts: "الحلويات", beverages: "المشروبات", seasonal: "موسمي", chefs: "طبق الشيف" },
    tags: { halal: "حلال", beef: "لحم بقر", sea: "بحري", veg: "نباتي", dairy: "ألبان", gluten: "غلوتين" },
    location: { title: "الموقع", address: "باراها تاون، الدوحة، قطر", mapsSoon: "خريطة تفاعلية قريبًا." },
    gallery: { title: "المعرض" },
    contact: { title: "تواصل", email: "البريد", phone: "الهاتف" },
    support: { title: "ادعم Panela de Barro", blurb: "ادعمنا بالمشاركة والمتابعة وترك تقييم." },
    about: {
      title: "قدر الطين: نكهة من الأرض",
      long: `
أكثر من مطعم؛ إنها رحلة إلى جذور المطبخ البرازيلي. 
قدر الطين يرمز للصبر والامتزاج والصمود. على نار الحطب تمتزج المكونات ببطء فتولد العمق: الفيجوادا، الموكّيكا، وفاكا أتولادا… 
عائلتنا نشأت في المزارع؛ كليوزا بطهي يتجاوز 25 عامًا، وأليكس (الشيف التنفيذي) خبرة 10+ سنوات، وكيسي (المالك الشيف) 6+ سنوات في أبوظبي وقطر. 
Panela de Barro يكرّم هذا الإرث — ويقدّمه بمحبة.
`
    },
  },
};