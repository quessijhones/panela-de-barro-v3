// src/i18n.js
export const LOCALES = {
  pt: { label: "Português (BR)", short: "PT", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  ar: { label: "العربية", short: "AR", dir: "rtl" },
};

// ----------------------
// armazenamento de idioma
// ----------------------
const KEY = "pdbar.lang";
export const getLang = () => {
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  if (q && LOCALES[q]) {
    localStorage.setItem(KEY, q);
    return q;
  }
  const saved = localStorage.getItem(KEY);
  return LOCALES[saved] ? saved : "pt";
};

export const setLang = (code) => {
  if (!LOCALES[code]) return;
  localStorage.setItem(KEY, code);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", code);
  // evita precisar de F5
  history.replaceState(null, "", url.toString());
  window.dispatchEvent(new Event("langchange"));
};

const STR = {
  // ---------- Navegação ----------
  "nav.about": { pt: "Sobre", en: "About", ar: "عن المطعم" },
  "nav.menu": { pt: "Menu", en: "Menu", ar: "القائمة" },
  "nav.gallery": { pt: "Galeria", en: "Gallery", ar: "المعرض" },
  "nav.woodfire": { pt: "Fogão a Lenha", en: "Wood-Fire", ar: "الطبخ على الحطب" },
  "nav.location": { pt: "Localização", en: "Location", ar: "الموقع" },
  "nav.support": { pt: "Suporte", en: "Support", ar: "الدعم" },
  "nav.back": { pt: "Voltar ao início", en: "Back to home", ar: "العودة إلى البداية" },

  // ---------- Hero ----------
  "hero.title": {
    pt: "Sabores brasileiros, calor de família",
    en: "Brazilian flavors, family warmth",
    ar: "نَكهات برازيلية بدفء العائلة",
  },
  "hero.subtitle": {
    pt: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
    en: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
    ar: "مطعم عائلي في قطر مع خبرة تتجاوز 20 عاماً، ومطبخ على الحطب وجذور برازيلية.",
  },
  "hero.soon": {
    pt: "Inauguração em Novembro — reservas online em breve.",
    en: "Opening in November — online bookings soon.",
    ar: "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريباً.",
  },
  "hero.cta": { pt: "Ver Menu", en: "View Menu", ar: "عرض القائمة" },

  // ---------- Menu ----------
  "menu.title": { pt: "Menu", en: "Menu", ar: "القائمة" },
  "menu.tabs.all": { pt: "Todos", en: "All", ar: "الكل" },
  "menu.tabs.mains": { pt: "Pratos", en: "Mains", ar: "الأطباق" },
  "menu.tabs.seasonal": { pt: "Sazonais", en: "Seasonal", ar: "الموسمية" },
  "menu.tabs.beverages": { pt: "Bebidas", en: "Beverages", ar: "المشروبات" },
  "menu.tabs.desserts": { pt: "Sobremesas", en: "Desserts", ar: "الحلويات" },

  // ---------- Sobre (texto longo) ----------
  "about.title": { pt: "Sobre", en: "About", ar: "عن المطعم" },
  "about.p1": {
    pt: "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha.",
    en: "Panela de Barro is a tribute to Brazil’s roots: farm-style cooking, fresh ingredients and wood-fire. Our family brings decades of kitchen memories to Doha.",
    ar: "بانِيلا دي بارّو هو تحيّة للجذور البرازيلية: مطبخ ريفي بمكونات طازجة ونار الحطب. عائلتنا تحمل خبرة عقود إلى الدوحة.",
  },
  "about.h1": {
    pt: "Por que “Panela de Barro”?",
    en: "Why “Panela de Barro”?",
    ar: "لماذا «قدْر الطين»؟",
  },
  "about.p2": {
    pt: "A panela de barro acompanha o Brasil desde os povos indígenas. Com a chegada dos africanos, o saber se misturou e dali nasceram feijoadas, moquecas, ensopados profundos. Cozinhar no barro é dar tempo para que os ingredientes conversem — o caldo encorpa, o sabor ganha a marca terrosa da tradição.",
    en: "Clay pots have been used in Brazil since indigenous times. African techniques enriched them, giving birth to feijoada, moqueca and soulful stews. Cooking in clay lets ingredients ‘talk’ slowly, building body and a signature earthy flavor.",
    ar: "تُستعمل قدور الطين في البرازيل منذ الشعوب الأصلية. ومع المعارف الإفريقية وُلدت أطباق كالفَيجوادا والموقيكا. الطهي في الطين يمنح المكوّنات وقتاً لتتمازج وتكسب الطعم الترابي الأصيل.",
  },
  "about.p3": {
    pt: "No Panela de Barro abraçamos essa herança com orgulho: panelas artesanais, produtos frescos e um ambiente acolhedor que convida a comer bem e partilhar momentos.",
    en: "We embrace this heritage with handmade pots, fresh produce and a warm space that invites good food and good moments.",
    ar: "نحتفي بهذه الوراثة عبر قدور مصنوعة يدوياً ومكونات طازجة ومكان دافئ يجمع اللحظات الجميلة.",
  },
  "about.cap.panela": {
    pt: "Panela de barro tradicional",
    en: "Traditional clay pot",
    ar: "قدر طين تقليدي",
  },
  "about.cap.artesanal": {
    pt: "Feita à mão por artesãos",
    en: "Hand-made by artisans",
    ar: "مصنوعة يدوياً",
  },
  "about.team": { pt: "Nossa Família", en: "Our Family", ar: "عائلتنا" },
  "about.owner": { pt: "proprietária", en: "owner", ar: "المالكة" },
  "about.headchef": { pt: "chef executivo", en: "head chef", ar: "الطاهي التنفيذي" },
  "about.mom": { pt: "matriarca", en: "matriarch", ar: "الأم" },
  "about.quessi": {
    pt: "Quessi conduz a casa e a hospitalidade. Cada detalhe — do cardápio ao acolhimento — nasce de suas memórias brasileiras.",
    en: "Quessi leads the house and hospitality. Every detail — from menu to welcome — springs from her Brazilian memories.",
    ar: "تقود كيسي الضيافة والتفاصيل، من القائمة وحتى الترحيب، مستوحاة من ذكرياتها البرازيلية.",
  },
  "about.alex": {
    pt: "Alex comanda a cozinha. Técnica, fogo controlado e respeito ao ingrediente definem seus pratos.",
    en: "Alex runs the kitchen. Technique, controlled fire and respect for the ingredient define his dishes.",
    ar: "أليكس يقود المطبخ بتقنية عالية واحترام للمكوّنات.",
  },
  "about.cleusa": {
    pt: "Dona Cleusa é a memória viva: receitas de família, afeto e o tempero que só a experiência traz.",
    en: "Dona Cleusa is living memory: family recipes, affection and that irreplaceable, seasoned touch.",
    ar: "السيدة كليوزا هي الذاكرة الحيّة: وصفات العائلة ولمسة الخبرة.",
  },

  // ---------- Fogão a Lenha ----------
  "wood.title": { pt: "Fogão a Lenha", en: "Wood-Fire", ar: "الطبخ على الحطب" },
  "wood.p1": {
    pt: "O fogão a lenha moldou a cozinha brasileira. O calor suave da brasa cozinha devagar, concentra sabores e traz aquela fumacinha que abraça.",
    en: "Wood-fire shaped Brazilian cooking. Gentle embers cook slowly, concentrate flavors and add a welcoming smokiness.",
    ar: "شكلت نار الحطب المطبخ البرازيلي؛ جمرٌ هادئ يطهو ببطء ويُكثّف النكهات ويمنح رائحة الدخان المحببة.",
  },
  "wood.p2": {
    pt: "Aqui trabalhamos com lenha de queima limpa e técnicas de controle de calor para preservar textura e suculência.",
    en: "We use clean-burning wood and careful heat control to preserve texture and juiciness.",
    ar: "نستخدم حطباً نظيف الاحتراق وتقنيات دقيقة للتحكم بالحرارة للحفاظ على القوام والعصارة.",
  },

  // ---------- Localização / Suporte / 404 ----------
  "loc.title": { pt: "Localização", en: "Location", ar: "الموقع" },
  "loc.subtitle": {
    pt: "Baraha Town, Doha, Qatar. Mapa interativo abaixo.",
    en: "Baraha Town, Doha, Qatar. Interactive map below.",
    ar: "باراحة تاون، الدوحة، قطر. الخريطة التفاعلية أدناه.",
  },
  "support.title": { pt: "Suporte", en: "Support", ar: "الدعم" },
  "support.p1": {
    pt: "Quer apoiar nosso projeto familiar? Algumas formas simples:",
    en: "Want to support our family project? Here are easy ways:",
    ar: "تريد دعم مشروعنا العائلي؟ طرق بسيطة:",
  },
  "support.opt1": {
    pt: "Compartilhe o site com amigos no Qatar.",
    en: "Share the website with friends in Qatar.",
    ar: "شارك الموقع مع الأصدقاء في قطر.",
  },
  "support.opt2": {
    pt: "Siga-nos e interaja no Instagram.",
    en: "Follow and engage on Instagram.",
    ar: "تابعنا وتفاعل على إنستغرام.",
  },
  "support.opt3": {
    pt: "Avalie quando abrirmos — isso ajuda muito!",
    en: "Leave a review when we open — it helps a lot!",
    ar: "قيّمنا عند الافتتاح — هذا يساعد كثيراً!",
  },
  notfound: {
    pt: "Página não encontrada.",
    en: "Page not found.",
    ar: "الصفحة غير موجودة.",
  },
};

// tradução com fallback
export const t = (key, lang = getLang()) => {
  const dict = STR[key];
  if (!dict) return key;
  return dict[lang] || dict.pt || "";
};