// src/i18n.js
const KEY = "pdblang";

export const LOCALES = {
  pt: { label: "Português", short: "PT", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  ar: { label: "العربية", short: "AR", dir: "rtl" },
};

let current = (localStorage.getItem(KEY) || "pt").toLowerCase();
if (!LOCALES[current]) current = "pt";

export function getLang() {
  return current;
}

export function setLang(l) {
  if (!LOCALES[l]) return;
  current = l;
  localStorage.setItem(KEY, l);
  applyDocumentLang(l);
  window.dispatchEvent(new Event("langchange"));
}

export function applyDocumentLang(l = current) {
  const html = document.documentElement;
  html.lang = l;
  html.dir = LOCALES[l]?.dir || "ltr";
}

/**
 * Lê ?lang= no hash (ex.: #/menu?lang=ar) ou na query normal (?lang=ar)
 * e aplica antes de montar o app.
 */
export function initLangFromURL() {
  const fromHash = (h) => {
    const q = (h.split("?")[1] || "").split("&");
    const found = q.find((p) => p.startsWith("lang="));
    return found ? decodeURIComponent(found.split("=")[1]) : null;
  };
  const hLang = fromHash(window.location.hash || "");
  const sLang = new URLSearchParams(window.location.search).get("lang");
  const cand = (hLang || sLang || "").toLowerCase();
  if (cand && LOCALES[cand]) setLang(cand);
}

// -------------------- TRADUÇÕES --------------------
const dict = {
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

    "about.title": "Sobre",
    "about.p1":
      "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha.",
    "about.h1": "Por que “Panela de Barro”?",
    "about.p2":
      "A panela de barro atravessa a nossa história: dos povos indígenas à criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite que os sabores conversem e imprime um toque terroso inconfundível.",
    "about.p3":
      "Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto — servidos à mesa.",
    "about.cap.panela": "Panelas artesanais de barro",
    "about.cap.artesanal": "Feita à mão, como manda a tradição",
    "about.team": "Nossa família",
    "about.owner": "Proprietária",
    "about.headchef": "Chef de Cozinha",
    "about.mom": "Mãe & Guardiã das Receitas",
    "about.quessi":
      "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho.",
    "about.alex":
      "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo.",
    "about.cleusa":
      "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração.",

    "wood.title": "Fogão a Lenha",
    "wood.p1":
      "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado.",
    "wood.p2":
      "Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente.",
    "gallery.title": "Galeria",

    "loc.title": "Onde estamos",
    "loc.subtitle": "Baraha Town — Doha, Qatar",

    "support.title": "Suporte",
    "support.p1": "Como podemos ajudar?",
    "support.opt1": "Reservas (em breve)",
    "support.opt2": "Eventos e grupos",
    "support.opt3": "Parcerias",

    "notfound": "Página não encontrada.",
    "menu.title": "Menu",
    "menu.tabs.all": "Todos",
    "menu.tabs.mains": "Pratos",
    "menu.tabs.seasonal": "Sazonais",
    "menu.tabs.beverages": "Bebidas",
    "menu.tabs.desserts": "Sobremesas",
    "menu.modal.close": "Fechar",
  },

  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.woodfire": "Wood-Fired Stove",
    "nav.location": "Location",
    "nav.support": "Support",
    "nav.back": "Back to home",

    "hero.title": "Brazilian flavors, family warmth",
    "hero.subtitle":
      "Family restaurant in Qatar. 20+ years of hospitality, wood-fire and Brazilian roots.",
    "hero.soon": "Opening in November — online reservations soon.",
    "hero.cta": "View Menu",

    "about.title": "About",
    "about.p1":
      "Panela de Barro celebrates Brazilian roots: farm cooking, fresh ingredients and wood-fire. Our family brings decades of kitchen memories to Doha.",
    "about.h1": "Why “Panela de Barro”?",
    "about.p2":
      "Clay pots tell our story — from indigenous peoples to Afro-Brazilian kitchens. Slow cooking lets flavors mingle and creates a unique earthy taste.",
    "about.p3":
      "That’s what we chase in every dish: tradition, patience and affection at the table.",
    "about.cap.panela": "Handmade clay pots",
    "about.cap.artesanal": "Crafted by hand",
    "about.team": "Our family",
    "about.owner": "Owner",
    "about.headchef": "Head Chef",
    "about.mom": "Mother & Keeper of Recipes",
    "about.quessi":
      "Quessi leads the house and keeps the purpose alive: soulful food, warm hospitality.",
    "about.alex":
      "Alex runs the kitchen with technique and memory — perfect doneness, steady fire.",
    "about.cleusa":
      "Dona Cleusa inspires our flavors: pots on the stove, stories and recipes passed down.",

    "wood.title": "Wood-Fired Stove",
    "wood.p1":
      "From Brazil’s countryside to the world: proper wood, steady embers and patience — the secret to rich broths.",
    "wood.p2":
      "We honor this craft, uniting tradition with care for each ingredient.",
    "gallery.title": "Gallery",

    "loc.title": "Where we are",
    "loc.subtitle": "Baraha Town — Doha, Qatar",

    "support.title": "Support",
    "support.p1": "How can we help?",
    "support.opt1": "Reservations (soon)",
    "support.opt2": "Events & groups",
    "support.opt3": "Partnerships",

    "notfound": "Page not found.",
    "menu.title": "Menu",
    "menu.tabs.all": "All",
    "menu.tabs.mains": "Mains",
    "menu.tabs.seasonal": "Seasonal",
    "menu.tabs.beverages": "Beverages",
    "menu.tabs.desserts": "Desserts",
    "menu.modal.close": "Close",
  },

  ar: {
    "nav.about": "نبذة",
    "nav.menu": "القائمة",
    "nav.gallery": "المعرض",
    "nav.woodfire": "الطهي على الحطب",
    "nav.location": "الموقع",
    "nav.support": "الدعم",
    "nav.back": "العودة للصفحة الرئيسية",

    "hero.title": "نكهات برازيلية ودفء العائلة",
    "hero.subtitle":
      "مطعم عائلي في قطر. أكثر من 20 عامًا من الضيافة والطهي على الحطب وجذور برازيلية.",
    "hero.soon": "الافتتاح في نوفمبر — الحجوزات عبر الإنترنت قريبًا.",
    "hero.cta": "عرض القائمة",

    "about.title": "نبذة",
    "about.p1":
      "بانِيلا دي بارّو يحتفي بالجذور البرازيلية: مطبخ ريفي ومكونات طازجة ونار الحطب. تحمل عائلتنا عقودًا من الذكريات إلى الدوحة.",
    "about.h1": "لماذا «قدَر الطين»؟",
    "about.p2":
      "قدور الطين جزء من حكايتنا — من الشعوب الأصلية إلى مطابخ أفرو-برازيلية. طهي بطيء يمزج النكهات ويمنح طعمًا ترابيًا مميزًا.",
    "about.p3":
      "هذا ما نسعى إليه في كل طبق: تقليد وصبر ومودة على المائدة.",
    "about.cap.panela": "قدور طينية يدوية",
    "about.cap.artesanal": "مصنوعة يدويًا",
    "about.team": "عائلتنا",
    "about.owner": "المالكة",
    "about.headchef": "الشيف الرئيسي",
    "about.mom": "الأم وحافظة الوصفات",
    "about.quessi":
      "كِيسي تقود المكان بقلبها: طعام بروح وضيافة دافئة.",
    "about.alex":
      "أليكس يدير المطبخ بإتقان وذكريات — نضج مثالي ونار ثابتة.",
    "about.cleusa":
      "دونا كليوزا تُلهم نكهاتنا: قدور على النار وحكايات ووصفات متوارثة.",

    "wood.title": "الطهي على الحطب",
    "wood.p1":
      "من ريف البرازيل إلى العالم: خشب مناسب وجمر ثابت وصبر — سرّ المرق الغني.",
    "wood.p2":
      "نُكرّم هذا الإرث ونعتني بكل مكوّن.",
    "gallery.title": "المعرض",

    "loc.title": "موقعنا",
    "loc.subtitle": "باراحة تاون — الدوحة، قطر",

    "support.title": "الدعم",
    "support.p1": "كيف نساعدك؟",
    "support.opt1": "الحجوزات (قريبًا)",
    "support.opt2": "الفعاليات والمجموعات",
    "support.opt3": "شراكات",

    "notfound": "الصفحة غير موجودة.",
    "menu.title": "القائمة",
    "menu.tabs.all": "الكل",
    "menu.tabs.mains": "الأطباق",
    "menu.tabs.seasonal": "الموسمية",
    "menu.tabs.beverages": "المشروبات",
    "menu.tabs.desserts": "الحلويات",
    "menu.modal.close": "إغلاق",
  },
};

export function t(key, l = current) {
  return dict[l]?.[key] ?? dict["pt"][key] ?? key;
}