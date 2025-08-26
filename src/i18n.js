// i18n básico com persistência em URL (?lang=) e localStorage

export const LOCALES = {
  pt: { short: "PT", label: "Português", t: {} },
  en: { short: "EN", label: "English", t: {} },
  ar: { short: "AR", label: "العربية", t: {} },
};

const DICT = {
  nav: {
    about: { pt: "Sobre", en: "About", ar: "نبذة عنا" },
    menu: { pt: "Menu", en: "Menu", ar: "القائمة" },
    gallery: { pt: "Galeria", en: "Gallery", ar: "المعرض" },
    location: { pt: "Localização", en: "Location", ar: "الموقع" },
    woodfire: { pt: "Fogão a Lenha", en: "Wood-fire", ar: "الطهي على الحطب" },
    support: { pt: "Suporte", en: "Support", ar: "الدعم" },
    back: { pt: "Voltar ao início", en: "Back to home", ar: "العودة إلى البداية" },
  },
  hero: {
    title: {
      pt: "Sabores brasileiros, calor de família",
      en: "Brazilian flavors, family warmth",
      ar: "نكهات برازيلية ودفء العائلة",
    },
    subtitle: {
      pt: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      en: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      ar: "مطعم عائلي في قطر. أكثر من 20 سنة في الضيافة، وطبخ على الحطب وجذور برازيلية.",
    },
    soon: {
      pt: "Inauguração em Novembro — reservas online em breve.",
      en: "Opening in November — online reservations soon.",
      ar: "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريباً.",
    },
    cta: { pt: "Ver Menu", en: "View Menu", ar: "عرض القائمة" },
  },
  about: {
    title: { pt: "Panela de Barro: O Sabor que Veio da Terra", en: "Panela de Barro: Flavor Born from the Earth", ar: "قدر الفخار: نكهة ولدت من الأرض" },
    p1: {
      pt: "Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes da culinária brasileira — passada de geração em geração, no calor do fogão a lenha e no aconchego da cerâmica.",
      en: "More than a restaurant, Panela de Barro is a sensory journey to Brazil’s culinary roots—passed down through generations, slow-cooked over wood-fire and served in clay.",
      ar: "أكثر من مجرد مطعم، «قدر الفخار» رحلة حسية إلى جذور المطبخ البرازيلي — توارثتها الأجيال، بطهي بطيء على الحطب وتقديم في الفخار.",
    },
    h1: { pt: "Por que “Panela de Barro”?", en: "Why “Panela de Barro”?", ar: "لماذا «قدر الفخار»؟" },
    p2: {
      pt: "A panela de barro é símbolo de mistura, resistência e criatividade. Dos povos indígenas aos africanos escravizados, ela cozinhou histórias: feijoada, moqueca, caldos encorpados. A cerâmica não apressa a comida — dá tempo para os ingredientes conversarem.",
      en: "Clay pots symbolize blend, resilience and creativity. From Indigenous peoples to enslaved Africans, they cooked history: feijoada, moqueca, rich stews. Clay doesn’t rush food — it lets ingredients talk.",
      ar: "قدر الفخار رمز للمزج والصمود والإبداع. من السكان الأصليين إلى الأفارقة المستعبدين، طهت التاريخ: الفيجوادا والموكيكا والحساء الغني. الفخار لا يستعجل الطعام — يمنح المكونات وقتاً لتتآلف.",
    },
    p3: {
      pt: "No Panela de Barro, honramos essa herança com receitas de raiz, ingredientes selecionados e ambiente acolhedor — simples, brasileiro e familiar.",
      en: "At Panela de Barro we honor this heritage with root recipes, selected ingredients and a cozy, family-style atmosphere.",
      ar: "في «قدر الفخار» نكرّم هذا الإرث بوصفات أصيلة ومكوّنات مختارة وأجواء عائلية دافئة.",
    },
    cap: {
      panela: { pt: "Sabores que nascem no barro.", en: "Flavors born in clay.", ar: "نكهات تولد في الفخار." },
      artesanal: { pt: "Feita à mão, cuidadosamente.", en: "Hand-crafted with care.", ar: "مصنوعة يدوياً بعناية." },
    },
    team: { pt: "Nossa Equipe", en: "Our Team", ar: "فريقنا" },
    owner: { pt: "Proprietário", en: "Owner", ar: "المالك" },
    headchef: { pt: "Head Chef", en: "Head Chef", ar: "الشيف التنفيذي" },
    mom: { pt: "Matriarca e cozinheira", en: "Matriarch & Cook", ar: "الأم والطاهية" },
    quessi: {
      pt: "Quessi Jones — 10 anos na cozinha brasileira, seis como chef em Abu Dhabi e Qatar. Cresceu em Rondônia, na fazenda da família, aprendendo a essência dos ingredientes e o valor do fogão a lenha.",
      en: "Quessi Jones — 10 years in Brazilian cuisine; six as a chef in Abu Dhabi and Qatar. Grew up in Rondônia on the family farm, learning the essence of ingredients and wood-fire cooking.",
      ar: "كيسي جونز — 10 سنوات في المطبخ البرازيلي، ست منها شيفاً في أبوظبي وقطر. نشأ في روندونيا بمزرعة العائلة، وتعلّم جوهر المكونات والطهي على الحطب.",
    },
    alex: {
      pt: "Alex — Head Chef. Mais de 10 anos entre cozinhas brasileira e italiana. Experiência sólida e mãos de quem nasceu junto à lenha.",
      en: "Alex — Head Chef. 10+ years across Brazilian and Italian kitchens. Solid craft and wood-fire soul.",
      ar: "أليكس — الشيف التنفيذي. أكثر من 10 سنوات بين المطبخين البرازيلي والإيطالي. حرفة راسخة وروح الطهي على الحطب.",
    },
    cleusa: {
      pt: "Cleusa Gonçalves — 25+ anos de fogão. Desde os 12 cozinhando no fogão a lenha com a mãe, de origem italiana. Mineira, mistura de culturas. A base do nosso sabor.",
      en: "Cleusa Gonçalves — 25+ years cooking. Since age 12 on wood-fire with her Italian-descendant mother. From Minas, a blend of cultures — the base of our flavor.",
      ar: "كلوزا غونسالفِس — أكثر من 25 سنة طبخاً. منذ سن 12 على الحطب مع أمها ذات الأصول الإيطالية. من ميناس، مزيج ثقافات — قاعدة نكهاتنا.",
    },
  },
  wood: {
    title: { pt: "Fogão a lenha: calor que abraça", en: "Wood-fire: heat that hugs", ar: "الطهي على الحطب: دفء يحتضن" },
    p1: {
      pt: "O fogão a lenha é memória afetiva do interior do Brasil. O calor homogêneo e a fumaça sutil criam sabores profundos — arroz soltinho, caldos encorpados, carnes macias.",
      en: "In Brazil’s countryside, wood-fire is comfort and craft. Gentle heat and subtle smoke build deep flavors — fluffy rice, rich broths, tender meats.",
      ar: "في ريف البرازيل، الحطب ذاكرة وحنين. حرارة متوازنة ودخان رقيق يصنعان نكهات عميقة — أرزاً منفوشاً ومرقاً غنياً ولحوماً طرية.",
    },
    p2: {
      pt: "Na nossa casa, a lenha é técnica e respeito à tradição — sem pressa, com alma.",
      en: "At our house, wood-fire is technique and tradition — never rushed, always soulful.",
      ar: "لدينا، الحطب تقنية وتقاليد — بلا استعجال وبكثير من الروح.",
    },
  },
  gallery: { title: { pt: "Galeria", en: "Gallery", ar: "المعرض" } },
  menu: {
    title: { pt: "Menu", en: "Menu", ar: "القائمة" },
    tabs: {
      all: { pt: "All", en: "All", ar: "الكل" },
      mains: { pt: "Mains", en: "Mains", ar: "الأطباق الرئيسية" },
      seasonal: { pt: "Seasonal", en: "Seasonal", ar: "موسمي" },
      beverages: { pt: "Beverages", en: "Beverages", ar: "المشروبات" },
    },
  },
  loc: {
    title: { pt: "Localização", en: "Location", ar: "الموقع" },
    subtitle: {
      pt: "Baraha Town, Doha, Qatar.",
      en: "Baraha Town, Doha, Qatar.",
      ar: "بارها تاون، الدوحة، قطر.",
    },
  },
  support: {
    title: { pt: "Como nos apoiar", en: "How to support us", ar: "كيف تدعمنا" },
    p1: {
      pt: "Queremos construir um lar brasileiro no Qatar. Você pode nos apoiar de várias formas:",
      en: "Help us build a Brazilian home in Qatar. You can support us in many ways:",
      ar: "نريد أن نبني بيتاً برازيلياً في قطر. يمكنك دعمنا بطرق مختلفة:",
    },
    opt1: { pt: "Siga e compartilhe nas redes sociais", en: "Follow & share on social media", ar: "تابع وشارك على الشبكات الاجتماعية" },
    opt2: { pt: "Avalie quando abrirmos", en: "Leave a review when we open", ar: "اترك تقييماً عند الافتتاح" },
    opt3: { pt: "Indique para amigos", en: "Recommend us to friends", ar: "انصح الأصدقاء بزيارتنا" },
  },
  notfound: { pt: "Página não encontrada.", en: "Page not found.", ar: "الصفحة غير موجودة." },
};

// injeta traduções nos locais
for (const k of Object.keys(LOCALES)) LOCALES[k].t = DICT;

const STORAGE = "pdb_lang";

function readParamFromUrl(key) {
  // pega ?lang= tanto antes quanto depois do #
  const full = window.location.href;
  const [base, hashPart = ""] = full.split("#");
  const searchA = new URL(base).searchParams.get(key);
  if (searchA) return searchA;
  const qIndex = hashPart.indexOf("?");
  if (qIndex >= 0) {
    const sp = new URLSearchParams(hashPart.slice(qIndex));
    return sp.get(key);
  }
  return null;
}

function setParamInUrl(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  const hash = window.location.hash;
  window.history.replaceState({}, "", url.toString().split("#")[0] + hash);
}

export function getLang() {
  const urlLang = readParamFromUrl("lang");
  const stored = localStorage.getItem(STORAGE);
  const code = (urlLang || stored || "pt").toLowerCase();
  return LOCALES[code] ? code : "pt";
}

export function setLang(code) {
  const c = LOCALES[code] ? code : "pt";
  localStorage.setItem(STORAGE, c);
  setParamInUrl("lang", c);
  window.dispatchEvent(new Event("langchange"));
}

function deepGet(obj, path) {
  return path.split(".").reduce((a, k) => (a && a[k] != null ? a[k] : null), obj);
}

export function t(key, lang = getLang()) {
  const v = deepGet(LOCALES[lang].t, key) ?? deepGet(LOCALES.pt.t, key);
  return typeof v === "string" ? v : key;
}