// i18n leve sem necessidade de recarregar
export const LOCALES = ["pt", "en", "ar"];

const STRINGS = {
  nav: {
    about: { pt: "Sobre", en: "About", ar: "نبذة" },
    menu: { pt: "Menu", en: "Menu", ar: "القائمة" },
    gallery: { pt: "Galeria", en: "Gallery", ar: "الصور" },
    location: { pt: "Localização", en: "Location", ar: "الموقع" },
    contact: { pt: "Contato", en: "Contact", ar: "تواصل" },
    woodfire: { pt: "Fogão a Lenha", en: "Wood-Fire", ar: "الطهي بالحطب" },
    support: { pt: "Suporte", en: "Support", ar: "الدعم" },
    back: { pt: "Voltar", en: "Back", ar: "رجوع" }
  },
  home: {
    h1: {
      pt: "Sabores brasileiros, calor de família",
      en: "Brazilian flavors, family warmth",
      ar: "نكهات برازيلية بدفء عائلي"
    },
    sub: {
      pt: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      en: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      ar: "مطعم عائلي في قطر. أكثر من 20 عاماً في الضيافة والطبخ على الحطب وجذور برازيلية."
    },
    soon: {
      pt: "Inauguração em Novembro — reservas online em breve.",
      en: "Opening in November — online reservations soon.",
      ar: "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريباً."
    },
    viewMenu: { pt: "Ver Menu", en: "View Menu", ar: "عرض القائمة" },
    preview: { pt: "Menu (prévia)", en: "Menu (preview)", ar: "القائمة (لمحة)" }
  },
  menu: {
    filters: {
      all: { pt: "Todos", en: "All", ar: "الكل" },
      mains: { pt: "Pratos Principais", en: "Mains", ar: "الأطباق الرئيسية" },
      sides: { pt: "Acompanhamentos", en: "Sides", ar: "مقبلات" },
      beverages: { pt: "Bebidas", en: "Beverages", ar: "مشروبات" },
      seasonal: { pt: "Sazonal", en: "Seasonal", ar: "موسمي" },
      chef: { pt: "Do Chef", en: "Chef’s", ar: "اختيار الشيف" }
    },
    tags: {
      halal: { pt: "Halal", en: "Halal", ar: "حلال" },
      beef: { pt: "Bovino", en: "Beef", ar: "لحم بقري" },
      sea: { pt: "Mar", en: "Sea", ar: "بحري" },
      gluten: { pt: "Glúten", en: "Gluten", ar: "غلوتين" },
      dairy: { pt: "Lácteo", en: "Dairy", ar: "ألبان" },
      veg: { pt: "Veg", en: "Veg", ar: "نباتي" }
    },
    nutrition: {
      kcal: { pt: "kcal", en: "kcal", ar: "سعرة" },
      carbs: { pt: "Carb", en: "Carb", ar: "كربوهيدرات" },
      protein: { pt: "Prot", en: "Prot", ar: "بروتين" }
    },
    details: {
      more: { pt: "Ver detalhes", en: "View details", ar: "عرض التفاصيل" },
      close: { pt: "Fechar", en: "Close", ar: "إغلاق" }
    }
  },
  gallery: {
    title: { pt: "Galeria", en: "Gallery", ar: "الصور" }
  },
  location: {
    title: { pt: "Localização", en: "Location", ar: "الموقع" },
    address: {
      pt: "Baraha Town, Doha, Qatar",
      en: "Baraha Town, Doha, Qatar",
      ar: "باراحا تاون، الدوحة، قطر"
    },
    mapSoon: {
      pt: "Mapa interativo em breve.",
      en: "Interactive map coming soon.",
      ar: "الخريطة التفاعلية قريباً."
    },
    openMaps: { pt: "Abrir no Google Maps", en: "Open in Google Maps", ar: "افتح في خرائط Google" }
  },
  about: {
    title: { pt: "Panela de Barro: o sabor que veio da terra",
      en: "Panela de Barro: flavor born from the earth",
      ar: "قدر الفخار: نكهة جاءت من الأرض" },
    backToRoots: {
      pt: "Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes da culinária brasileira...",
      en: "More than a restaurant, Panela de Barro is a sensory journey to Brazil’s culinary roots...",
      ar: "أكثر من مجرد مطعم؛ “قدر الفخار” رحلة حسّية إلى جذور المطبخ البرازيلي..."
    },
    whyClay: { pt: "Por que “Panela de Barro”?",
      en: "Why “Panela de Barro”?",
      ar: "لماذا «قدر الفخار»؟" },
    woodfire: { pt: "Fogão a Lenha",
      en: "Wood-Fire",
      ar: "الطهي بالحطب" },
    team: { pt: "Nosso time", en: "Our team", ar: "فريقنا" }
  },
  support: {
    title: { pt: "Suporte", en: "Support", ar: "الدعم" },
    body: {
      pt: "Quer apoiar o restaurante? Deixe uma avaliação e compartilhe com amigos! Em breve: gift cards e eventos privados.",
      en: "Want to support us? Leave a review and share with friends! Coming soon: gift cards and private events.",
      ar: "تود دعم المطعم؟ اترك تقييماً وشارك الأصدقاء! قريباً: بطاقات هدايا وفعاليات خاصة."
    }
  }
};

export function getLang() {
  const url = new URL(window.location.href);
  const q = (url.searchParams.get("lang") || "pt").toLowerCase();
  return LOCALES.includes(q) ? q : "pt";
}

export function setLang(next) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", next);
  window.history.replaceState({}, "", url.toString());
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  window.dispatchEvent(new CustomEvent("langchange", { detail: next }));
}

export function t(path, lang) {
  const parts = path.split(".");
  let obj = STRINGS;
  for (const p of parts) obj = obj?.[p];
  if (!obj) return path;
  return obj[lang] ?? obj["pt"] ?? path;
}

export const STR = STRINGS;