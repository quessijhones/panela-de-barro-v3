// i18n.js
export const LOCALES = {
  pt: { short: "PT", label: "Português" },
  en: { short: "EN", label: "English" },
  ar: { short: "AR", label: "العربية" },
};

const M = {
  pt: {
    "nav.about": "Sobre",
    "nav.menu": "Menu",
    "nav.gallery": "Galeria",
    "nav.woodfire": "Fogão a Lenha",
    "nav.location": "Localização",
    "nav.support": "Suporte",
    "nav.back": "Voltar ao início",

    "hero.title": "Sabores brasileiros, calor de família",
    "hero.subtitle":
      "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
    "hero.soon": "Inauguração em Novembro — reservas online em breve.",
    "hero.cta": "Ver Menu",

    "menu.title": "Menu",
    "menu.tabs.all": "Todos",
    "menu.tabs.mains": "Pratos",
    "menu.tabs.seasonal": "Sazonais",
    "menu.tabs.beverages": "Bebidas",
    "menu.tabs.desserts": "Sobremesas",
    "menu.modal.close": "Fechar",

    "gallery.title": "Galeria",

    "loc.title": "Localização",
    "loc.subtitle": "Mapa interativo do Panela de Barro — Baraha Town, Doha.",

    "support.title": "Suporte",
    "support.p1":
      "Quer apoiar o restaurante? Você pode deixar uma avaliação, compartilhar com amigos ou participar do clube de fundadores.",
    "support.opt1": "Avaliar no Google quando estivermos abertos",
    "support.opt2": "Seguir e compartilhar nas redes",
    "support.opt3": "Clube de fundadores (em breve)",

    notfound: "Página não encontrada.",
  },

  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.woodfire": "Wood-Fire",
    "nav.location": "Location",
    "nav.support": "Support",
    "nav.back": "Back to home",

    "hero.title": "Brazilian flavors, family warmth",
    "hero.subtitle":
      "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
    "hero.soon": "Opening in November — online reservations soon.",
    "hero.cta": "View Menu",

    "menu.title": "Menu",
    "menu.tabs.all": "All",
    "menu.tabs.mains": "Mains",
    "menu.tabs.seasonal": "Seasonal",
    "menu.tabs.beverages": "Beverages",
    "menu.tabs.desserts": "Desserts",
    "menu.modal.close": "Close",

    "gallery.title": "Gallery",

    "loc.title": "Location",
    "loc.subtitle": "Interactive map — Baraha Town, Doha.",

    "support.title": "Support",
    "support.p1":
      "Want to support us? Leave a review, share with friends, or join the founders club.",
    "support.opt1": "Rate on Google when we open",
    "support.opt2": "Follow & share on social",
    "support.opt3": "Founders club (soon)",

    notfound: "Page not found.",
  },

  ar: {
    "nav.about": "نبذة",
    "nav.menu": "القائمة",
    "nav.gallery": "المعرض",
    "nav.woodfire": "الطبخ بالحطب",
    "nav.location": "الموقع",
    "nav.support": "الدعم",
    "nav.back": "العودة إلى البداية",

    "hero.title": "نكهات برازيلية ودفء عائلي",
    "hero.subtitle":
      "مطعم عائلي في قطر، أكثر من 20 عامًا من الضيافة والطبخ على الحطب والجذور البرازيلية.",
    "hero.soon": "الافتتاح في نوفمبر — الحجوزات قريبًا.",
    "hero.cta": "عرض القائمة",

    "menu.title": "القائمة",
    "menu.tabs.all": "الكل",
    "menu.tabs.mains": "الأطباق الرئيسية",
    "menu.tabs.seasonal": "الموسمية",
    "menu.tabs.beverages": "المشروبات",
    "menu.tabs.desserts": "الحلويات",
    "menu.modal.close": "إغلاق",

    "gallery.title": "المعرض",

    "loc.title": "الموقع",
    "loc.subtitle": "خريطة تفاعلية — باراحة تاون، الدوحة.",

    "support.title": "الدعم",
    "support.p1":
      "هل تريد دعمنا؟ اترك تقييمًا، شارك الموقع مع الأصدقاء أو انضم إلى نادي المؤسسين.",
    "support.opt1": "قيّمنا على جوجل عند الافتتاح",
    "support.opt2": "تابع وشارك على السوشيال",
    "support.opt3": "نادي المؤسسين (قريبًا)",

    notfound: "الصفحة غير موجودة.",
  },
};

export const getLang = () => {
  const q = new URLSearchParams(window.location.search);
  const u = (q.get("lang") || "").toLowerCase();
  if (u && LOCALES[u]) return u;
  const saved = localStorage.getItem("lang");
  if (saved && LOCALES[saved]) return saved;
  return "pt";
};

export const setLang = (l) => {
  if (!LOCALES[l]) return;
  localStorage.setItem("lang", l);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", l);
  history.replaceState({}, "", url);
  window.dispatchEvent(new Event("langchange"));
};

export const t = (key, lang = getLang()) => M[lang]?.[key] ?? key;
// --- acrescente isto no FINAL de src/i18n.js ---

/**
 * Lê ?lang= tanto na URL normal (location.search) quanto dentro do hash (#/rota?lang=)
 * e aplica se for um código suportado (pt, en, ar).
 */
export function initLangFromURL() {
  try {
    let lang = null;

    // 1) procura em location.search
    if (typeof window !== "undefined" && window.location && window.location.search) {
      const p = new URLSearchParams(window.location.search);
      lang = p.get("lang");
    }

    // 2) se não achou, procura depois do ? dentro do hash (#/rota?lang=xx)
    if (!lang && typeof window !== "undefined" && window.location && window.location.hash) {
      const hash = window.location.hash; // ex: "#/menu?lang=en"
      const qIndex = hash.indexOf("?");
      if (qIndex !== -1) {
        const qs = hash.slice(qIndex + 1);
        const p2 = new URLSearchParams(qs);
        lang = p2.get("lang");
      }
    }

    // valida e aplica
    if (lang && typeof setLang === "function") {
      // só aplica se for um dos idiomas suportados
      const supported = (typeof LOCALES === "object") ? Object.keys(LOCALES) : ["pt", "en", "ar"];
      if (supported.includes(lang)) {
        setLang(lang);
      }
    }
  } catch (e) {
    // não quebra o app se algo der errado
    console.warn("initLangFromURL falhou:", e);
  }
}

/**
 * Ajusta <html lang=".."> e a direção (dir) para RTL no árabe.
 */
export function applyDocumentLang(l) {
  try {
    const lang = l || (typeof getLang === "function" ? getLang() : "pt");
    if (typeof document !== "undefined") {
      const el = document.documentElement;
      el.setAttribute("lang", lang);
      el.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    }
  } catch (e) {
    console.warn("applyDocumentLang falhou:", e);
  }
}