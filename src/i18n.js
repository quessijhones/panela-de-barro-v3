// NÃO traduza a marca "Panela de Barro".
export const LOCALES = {
  PT: "pt",
  EN: "en",
  AR: "ar",
};

export const STRINGS = {
  brand: {
    [LOCALES.PT]: "Panela de Barro",
    [LOCALES.EN]: "Panela de Barro",
    [LOCALES.AR]: "Panela de Barro",
  },
  nav: {
    about: { pt: "Sobre", en: "About", ar: "حول" },
    menu: { pt: "Menu", en: "Menu", ar: "القائمة" },
    gallery: { pt: "Galeria", en: "Gallery", ar: "المعرض" },
    location: { pt: "Localização", en: "Location", ar: "الموقع" },
    contact: { pt: "Contato", en: "Contact", ar: "اتصال" },
  },
  home: {
    heroTitle: {
      pt: "Sabores brasileiros, calor de família",
      en: "Brazilian flavors, family warmth",
      ar: "نكهات برازيلية ودفء عائلي",
    },
    heroSubtitle: {
      pt: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      en: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fired cooking and Brazilian roots.",
      ar: "مطعم عائلي في قطر، خبرة تفوق 20 عاماً، طبخ على الحطب وجذور برازيلية.",
    },
    ctaMenu: { pt: "Ver Menu", en: "See Menu", ar: "عرض القائمة" },
    previewTitle: { pt: "Menu (prévia)", en: "Menu (preview)", ar: "القائمة (مختصر)" },
  },
  filters: {
    all: { pt: "Todos", en: "All", ar: "الكل" },
    mains: { pt: "Pratos Principais", en: "Mains", ar: "الأطباق الرئيسية" },
    sides: { pt: "Acompanhamentos", en: "Side Dishes", ar: "مقبلات" },
    desserts: { pt: "Sobremesas", en: "Desserts", ar: "حلويات" },
    beverages: { pt: "Bebidas", en: "Beverages", ar: "مشروبات" },
    seasonal: { pt: "Sazonal", en: "Seasonal", ar: "موسمي" },
    chef: { pt: "Do Chef", en: "Chef's", ar: "اختيار الشيف" },
  },
  dishLabels: {
    kcal: { pt: "kcal", en: "kcal", ar: "سعرة" },
    carbs: { pt: "Carboidratos", en: "Carbs", ar: "كربوهيدرات" },
    protein: { pt: "Proteína", en: "Protein", ar: "بروتين" },
    fat: { pt: "Gordura", en: "Fat", ar: "دهون" },
    allergens: { pt: "Alergênicos", en: "Allergens", ar: "مواد مسببة للحساسية" },
  },
  gallery: {
    title: { pt: "Galeria", en: "Gallery", ar: "المعرض" },
  },
  contact: {
    title: { pt: "Contato", en: "Contact", ar: "اتصال" },
    addressLabel: { pt: "Endereço", en: "Address", ar: "العنوان" },
    phoneLabel: { pt: "Telefone", en: "Phone", ar: "الهاتف" },
    emailLabel: { pt: "Email", en: "Email", ar: "البريد الإلكتروني" },
  },
  location: {
    title: { pt: "Localização", en: "Location", ar: "الموقع" },
    address: {
      pt: "Baraha Town, Doha, Qatar",
      en: "Baraha Town, Doha, Qatar",
      ar: "براحة تاون، الدوحة، قطر",
    },
  },
};

export function t(path, locale = LOCALES.PT) {
  // path: "home.heroTitle"
  const parts = path.split(".");
  let cur = STRINGS;
  for (const p of parts) cur = cur?.[p];
  return cur?.[locale] ?? cur?.pt ?? "";
}
