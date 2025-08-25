// Lang utils -------------------------------------------------
export const LOCALES = { pt: "pt", en: "en", ar: "ar" };

export function getLang() {
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  const stored = localStorage.getItem("lang");
  const lang = (q || stored || "pt").toLowerCase();
  setLang(lang, false);
  return lang;
}

export function setLang(lang, push = true) {
  const l = ["pt", "en", "ar"].includes(lang) ? lang : "pt";
  localStorage.setItem("lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  if (push) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", l);
    history.replaceState({}, "", url.toString());
  }
}

export function t(key) {
  const lang = getLang();
  return STRINGS[lang][key] ?? STRINGS["pt"][key] ?? key;
}

export function trDish(dish, field = "name") {
  const lang = getLang();
  const obj = dish[field];
  if (!obj) return "";
  return obj[lang] || obj.pt || "";
}

// ----------------------------------------------------------------
export const STRINGS = {
  pt: {
    nav_about: "Sobre",
    nav_menu: "Menu",
    nav_gallery: "Galeria",
    nav_location: "Localização",
    nav_contact: "Contato",
    lang_pt: "PT",
    lang_en: "EN",
    lang_ar: "AR",

    hero_title: "Sabores brasileiros, calor de família",
    hero_sub:
      "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
    hero_cta: "Ver Menu",
    coming_soon: "Inauguração em Novembro — reservas online em breve.",

    menu: "Menu",
    menu_preview: "Menu (prévia)",
    all: "Todos",
    mains: "Pratos Principais",
    sides: "Acompanhamentos",
    desserts: "Sobremesas",
    beverages: "Bebidas",
    seasonal: "Sazonal",
    chefs: "Do Chef",

    details: "Detalhes",
    nutrition: "Ficha técnica (exemplo)",
    kcal: "kcal",
    carbs: "Carboidratos",
    protein: "Proteína",
    fat: "Gorduras",
    allergens: "Selo",
    halal: "Halal",
    beef: "Bovino",
    sea: "Mar",
    dairy: "Lácteo",
    gluten: "Glúten",
    veg: "Veg",
    close: "Fechar",

    gallery: "Galeria",
    location: "Localização",
    where:
      "Baraha Town, Doha, Qatar (Baraha Town)",
    map_soon: "Mapa interativo em breve.",

    contact: "Contato",
    email: "Email",
    phone: "Telefone",
    support: "Apoie o projeto",
    review_title: "Avalie sua experiência",
    review_cta: "Enviar avaliação",
    thanks: "Obrigado! Sua avaliação ajuda muitos brasileiros por aqui.",

    about_title: "Panela de Barro",
    about_long:
      "A Panela de Barro nasce da cozinha de família, do fogo a lenha e da roça brasileira. O chef-proprietário Quessi Jhones cresceu em Rondônia, entre plantações, gado e o respeito ao ingrediente. Com sua mãe, Dona Cleuza (mineira) e o irmão Alex (Head Chef, 10+ anos em cozinha brasileira e italiana), tocou um restaurante caipira em Foz do Iguaçu — experiência que moldou nossa identidade. Agora, trazemos ao Qatar a essência do Brasil: panela de barro, hospitalidade e memória afetiva.\n\nA panela de barro é símbolo de união na América Latina, no mundo árabe e na Índia — guarda calor, textura e afeto. Feita por mãos indígenas e artesãs, ela cozinha devagar, preserva o sabor e valoriza caldos, ensopados e moquecas. Por isso nosso nome.\n\nHistórias dos pratos: a Feijoada de Costela resgata o encontro de técnicas africanas com ingredientes brasileiros; a Farofa nasceu como forma de conservar e dar energia, virando acompanhamento perfeito; a Vaca Atolada vem da roça mineira, ossobuco cozido até se “atolar” no caldo espesso; a Moqueca Baiana equilibra azeite de dendê, leite de coco e coentro — perfume do litoral; a Picanha, corte consagrado no Brasil, celebra o carvão e o ponto certo; doces de coco e abóbora lembram festa de quintal; bebidas de cupuaçu, caju e maracujá homenageiam a Amazônia e o Cerrado.",
  },

  en: {
    nav_about: "About",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_location: "Location",
    nav_contact: "Contact",
    lang_pt: "PT",
    lang_en: "EN",
    lang_ar: "AR",

    hero_title: "Brazilian flavors, family warmth",
    hero_sub:
      "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
    hero_cta: "View Menu",
    coming_soon: "Opening in November — online bookings soon.",

    menu: "Menu",
    menu_preview: "Menu (preview)",
    all: "All",
    mains: "Mains",
    sides: "Sides",
    desserts: "Desserts",
    beverages: "Beverages",
    seasonal: "Seasonal",
    chefs: "Chef’s",

    details: "Details",
    nutrition: "Tech sheet (sample)",
    kcal: "kcal",
    carbs: "Carbs",
    protein: "Protein",
    fat: "Fat",
    allergens: "Badge",
    halal: "Halal",
    beef: "Beef",
    sea: "Sea",
    dairy: "Dairy",
    gluten: "Gluten",
    veg: "Veg",
    close: "Close",

    gallery: "Gallery",
    location: "Location",
    where:
      "Baraha Town, Doha, Qatar (Baraha Town)",
    map_soon: "Interactive map coming soon.",

    contact: "Contact",
    email: "Email",
    phone: "Phone",
    support: "Support the project",
    review_title: "Rate your experience",
    review_cta: "Send review",
    thanks: "Thank you! Your review helps our community.",

    about_title: "Panela de Barro",
    about_long:
      "Panela de Barro is born from a family kitchen, wood-fire cooking and Brazilian countryside roots. Chef-owner Quessi Jhones grew up in Rondônia amid farms and respect for ingredients. Together with his mother, Dona Cleuza (from Minas) and his brother Alex (Head Chef, 10+ years in Brazilian & Italian cuisine), he ran a caipira restaurant in Foz do Iguaçu—experience that forged our identity. Now in Qatar we bring Brazil’s essence: clay pots, hospitality and memory.\n\nThe clay pot unites cultures—Latin America, the Arab world and India. It holds heat, texture and affection, perfect for slow stews and moquecas. That’s our name.\n\nDish stories: Beef-rib Feijoada blends African techniques and Brazilian ingredients; Farofa began as energy food and became the perfect side; Vaca Atolada is a miner’s staple, ossobuco “drowned” in rich broth; Bahian Moqueca balances dendê, coconut milk and cilantro—the scent of the coast; Picanha celebrates charcoal and Brazil’s favorite cut; coconut and pumpkin sweets recall backyard parties; drinks with cupuaçu, cashew and passion fruit honor the Amazon and Cerrado.",
  },

  ar: {
    nav_about: "نبذة",
    nav_menu: "القائمة",
    nav_gallery: "المعرض",
    nav_location: "الموقع",
    nav_contact: "التواصل",
    lang_pt: "PT",
    lang_en: "EN",
    lang_ar: "AR",

    hero_title: "نكهات برازيلية ودفء العائلة",
    hero_sub:
      "مطعم عائلي في قطر. خبرة تزيد على 20 عامًا في الضيافة والطبخ على الحطب والجذور البرازيلية.",
    hero_cta: "عرض القائمة",
    coming_soon: "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريبًا.",

    menu: "القائمة",
    menu_preview: "القائمة (عرض تمهيدي)",
    all: "الكل",
    mains: "الأطباق الرئيسية",
    sides: "الأطباق الجانبية",
    desserts: "الحلويات",
    beverages: "المشروبات",
    seasonal: "موسمي",
    chefs: "طبق الشيف",

    details: "التفاصيل",
    nutrition: "بطاقة غذائية (نموذج)",
    kcal: "سعرة",
    carbs: "كربوهيدرات",
    protein: "بروتين",
    fat: "دهون",
    allergens: "شارة",
    halal: "حلال",
    beef: "لحم بقري",
    sea: "بحري",
    dairy: "ألبان",
    gluten: "غلوتين",
    veg: "نباتي",
    close: "إغلاق",

    gallery: "المعرض",
    location: "الموقع",
    where:
      "باراحا تاون، الدوحة، قطر (Baraha Town)",
    map_soon: "الخريطة التفاعلية قريبًا.",

    contact: "التواصل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    support: "ادعم المشروع",
    review_title: "قيّم تجربتك",
    review_cta: "إرسال التقييم",
    thanks: "شكرًا لك! تقييمك يدعم مجتمعنا.",

    about_title: "Panela de Barro",
    about_long:
      "وُلدت Panela de Barro من مطبخ عائلي ونار الحطب وجذور الريف البرازيلي. نشأ الشيف المالك كِسّي جونس في رونْدونيا بين الحقول واحترام المكونات. مع والدته السيدة كليوزا (من ولاية ميناس) وأخيه أليكس (الطاهي التنفيذي، أكثر من 10 سنوات في المطبخ البرازيلي والإيطالي) أدار مطعمًا ريفيًا في فوز دو إيغواسو. واليوم ننقل جوهر البرازيل إلى قطر: قدور الطين والضيافة والذاكرة.\n\nقدر الطين يجمع ثقافات عديدة — في أمريكا اللاتينية والعالم العربي والهند — يحتفظ بالحرارة والنكهة ويُلائم اليخنات البطيئة والموكيكا. ومن هنا جاء اسمنا.\n\nقصص الأطباق: فيجوادا ضلع البقر تمزج تقنيات إفريقية بمكونات برازيلية؛ الفاروفا بدأت غذاءً للطاقة وصارت طبقًا جانبيًا مثاليًا؛ “ڤاكا أتولادا” طبق من مناجم ميناس، عظم الساق يُطبخ حتى “يغرق” في المرق؛ موكيكا باهيا توازن زيت الدندِه مع حليب جوز الهند والكزبرة؛ “بيكانيا” أشهر قطع اللحم في البرازيل على الجمر؛ حلويات جوز الهند واليقطين تُذكرنا بأفراح الساحات؛ ومشروبات الكوبواçu والكاجو والباشن فروت تُحيّي الأمازون والسِرّادو.",
  },
};
