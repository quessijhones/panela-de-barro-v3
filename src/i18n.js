export const locales = {
  pt: {
    code: "pt",
    dir: "ltr",
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato" },
    heroTitle: "Panela de Barro",
    heroSub:
      "Restaurante brasileiro familiar no Qatar. Com mais de 20 anos na hospitalidade, trazemos sabores de fogão a lenha, calor do interior e raízes brasileiras.",
    openingNote: "Inauguração em Novembro — reservas online em breve.",
    menuPreview: "Menu (prévia)",
    seeFullMenu: "Ver menu completo",
    category: {
      mains: "Pratos Principais",
      sides: "Acompanhamentos",
      desserts: "Sobremesas",
      beverages: "Bebidas",
      seasonal: "Sazonal",
      chef: "Do Chef",
      all: "Todos"
    },
    galleryTitle: "Galeria",
    locationTitle: "Localização",
    locationText: "Baraha Town, Doha, Qatar",
    contactTitle: "Contato",
    contactEmail: "Email",
    contactPhone: "Telefone",
    footer: "panela-de-barro-v3.vercel.app"
  },
  en: {
    code: "en",
    dir: "ltr",
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact" },
    heroTitle: "Panela de Barro",
    heroSub:
      "A Brazilian family restaurant in Qatar. With 20+ years in hospitality, we bring wood-fired flavors, countryside warmth and Brazilian roots.",
    openingNote: "Opening in November — online reservations soon.",
    menuPreview: "Menu (preview)",
    seeFullMenu: "See full menu",
    category: {
      mains: "Mains",
      sides: "Side Dishes",
      desserts: "Desserts",
      beverages: "Beverages",
      seasonal: "Seasonal",
      chef: "Chef's",
      all: "All"
    },
    galleryTitle: "Gallery",
    locationTitle: "Location",
    locationText: "Baraha Town, Doha, Qatar",
    contactTitle: "Contact",
    contactEmail: "Email",
    contactPhone: "Phone",
    footer: "panela-de-barro-v3.vercel.app"
  },
  ar: {
    code: "ar",
    dir: "rtl",
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", location: "الموقع", contact: "التواصل" },
    heroTitle: "بانِيلا دي بارّو",
    heroSub:
      "مطعم برازيلي عائلي في قطر. بخبرة تتجاوز 20 عامًا في الضيافة، نقدم نكهات فرن الحطب ودفء الريف وجذور البرازيل.",
    openingNote: "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريبًا.",
    menuPreview: "القائمة (نظرة سريعة)",
    seeFullMenu: "عرض القائمة كاملة",
    category: {
      mains: "الأطباق الرئيسية",
      sides: "الأطباق الجانبية",
      desserts: "الحلويات",
      beverages: "المشروبات",
      seasonal: "موسمي",
      chef: "طبق الشيف",
      all: "الكل"
    },
    galleryTitle: "المعرض",
    locationTitle: "الموقع",
    locationText: "باراحة تاون، الدوحة، قطر",
    contactTitle: "التواصل",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "الهاتف",
    footer: "panela-de-barro-v3.vercel.app"
  }
};

export function applyDir(dir) {
  const html = document.documentElement;
  html.setAttribute("dir", dir);
}