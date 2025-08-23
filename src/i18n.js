// i18n.js — UI strings + controle de locale reativo (sem reload)

export const SUPPORTED_LOCALES = ["pt", "en", "ar"];

/** ---------------- UI STRINGS ---------------- */
export const UI = {
  brand: { pt: "Panela de Barro", en: "Panela de Barro", ar: "‏Panela de Barro" },
  nav: {
    about: { pt: "Sobre", en: "About", ar: "نبذة" },
    menu: { pt: "Menu", en: "Menu", ar: "القائمة" },
    gallery: { pt: "Galeria", en: "Gallery", ar: "المعرض" },
    location: { pt: "Localização", en: "Location", ar: "الموقع" },
    contact: { pt: "Contato", en: "Contact", ar: "اتصال" },
  },
  home: {
    headline: {
      pt: "Cozinha brasileira com raízes e afeto",
      en: "Brazilian cuisine with roots and heart",
      ar: "مطبخ برازيلي بأصالة ودفء",
    },
    sub: {
      pt: "Mais de 20 anos de hospitalidade — sabores no fogão a lenha e calor do interior.",
      en: "20+ years of hospitality — wood-fired flavors and countryside warmth.",
      ar: "أكثر من 20 عامًا من الضيافة — نكهات من موقد الحطب ودفء الريف.",
    },
    ctaMenu: { pt: "Ver Menu", en: "View Menu", ar: "عرض القائمة" },
    preview: { pt: "Menu (prévia)", en: "Menu (preview)", ar: "لمحة عن القائمة" },
  },
  filters: {
    all: { pt: "Todos", en: "All", ar: "الكل" },
    mains: { pt: "Pratos Principais", en: "Mains", ar: "الأطباق الرئيسية" },
    sides: { pt: "Acompanhamentos", en: "Side Dishes", ar: "الأطباق الجانبية" },
    desserts: { pt: "Sobremesas", en: "Desserts", ar: "الحلويات" },
    beverages: { pt: "Bebidas", en: "Beverages", ar: "المشروبات" },
    seasonal: { pt: "Sazonal", en: "Seasonal", ar: "موسمي" },
    chef: { pt: "Do Chef", en: "Chef’s", ar: "اختيار الشيف" },
  },
  modal: {
    close: { pt: "Fechar", en: "Close", ar: "إغلاق" },
    orderSoon: { pt: "Pedir (em breve)", en: "Order (soon)", ar: "طلب (قريبًا)" },
    nutrition: { pt: "Ficha técnica", en: "Nutrition", ar: "القيم الغذائية" },
    kcal: { pt: "kcal", en: "kcal", ar: "كيلو كالوري" },
    carbs: { pt: "Carboidratos", en: "Carbs", ar: "كربوهيدرات" },
    protein: { pt: "Proteínas", en: "Protein", ar: "بروتين" },
    fat: { pt: "Gorduras", en: "Fat", ar: "دهون" },
    allergens: { pt: "Alergênicos", en: "Allergens", ar: "مسببات الحساسية" },
  },
  gallery: { title: { pt: "Galeria", en: "Gallery", ar: "المعرض" } },
  location: {
    title: { pt: "Localização", en: "Location", ar: "الموقع" },
    address: {
      pt: "Baraha Town, Doha, Qatar",
      en: "Baraha Town, Doha, Qatar",
      ar: "‏باراحة تاون، الدوحة، قطر",
    },
  },
  contact: {
    title: { pt: "Contato", en: "Contact", ar: "اتصال" },
    email: "restaurant@paneladebarroqatar.com",
    phone: "+974 3047 5279",
  },
};

/** ---------------- Controle de locale ---------------- */
export function currentLocale() {
  const url = new URL(window.location.href);
  const q = (url.searchParams.get("lang") || "").toLowerCase();
  if (SUPPORTED_LOCALES.includes(q)) return q;
  const saved = (localStorage.getItem("lang") || "").toLowerCase();
  if (SUPPORTED_LOCALES.includes(saved)) return saved;
  return "pt";
}

export function setLocale(lang) {
  if (!SUPPORTED_LOCALES.includes(lang)) return;
  // persiste e atualiza URL sem recarregar
  localStorage.setItem("lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
  // avisa a app para re-renderizar
  window.dispatchEvent(new Event("langchange"));
}

// helper para pegar string traduzida com fallback EN
export function t(obj, lang = currentLocale()) {
  return obj?.[lang] ?? obj?.en ?? "";
}