/* i18n minimal, 3 idiomas, sem libs externas */

const DICTS = {
  pt: {
    meta: { short: "PT", label: "Português (BR)", dir: "ltr" },
    dict: {
      // NAV
      "nav.about": "Sobre",
      "nav.menu": "Menu",
      "nav.gallery": "Galeria",
      "nav.woodfire": "Fogão a Lenha",
      "nav.location": "Localização",
      "nav.support": "Suporte",
      "nav.back": "Voltar ao início",

      // HERO
      "hero.title": "Sabores brasileiros, calor de família",
      "hero.subtitle":
        "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      "hero.soon":
        "Inauguração em Novembro — reservas online em breve.",
      "hero.cta": "Ver Menu",

      // MENU
      "menu.title": "Menu",
      "menu.tabs.all": "Todos",
      "menu.tabs.mains": "Pratos",
      "menu.tabs.seasonal": "Sazonais",
      "menu.tabs.beverages": "Bebidas",

      // ABOUT
      "about.title": "Panela de Barro: o sabor que veio da terra",
      "about.p1":
        "Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes da culinária brasileira. Cada prato celebra tradições passadas de geração em geração, no calor do fogão a lenha e no aconchego da cerâmica que dá nome à nossa casa.",
      "about.h1": "Por que “Panela de Barro”? A história por trás do sabor",
      "about.p2":
        "A panela de barro está na base da nossa formação culinária: dos povos indígenas que moldavam o barro com as próprias mãos, aos saberes afro-brasileiros que enriqueceram técnicas e temperos. Nela, a comida cozinha devagar — os sabores conversam, o caldo encorpa, nasce a autenticidade.",
      "about.p3":
        "Aqui, honramos essa herança com panelas artesanais e ingredientes selecionados, valorizando produtores locais e a simplicidade que acolhe. É comida de verdade, feita para reunir e celebrar.",
      "about.cap.panela": "Panela de barro — calor suave e sabor profundo",
      "about.cap.artesanal": "Feita à mão — tradição que atravessa gerações",

      "about.team": "Nossa equipe",
      "about.owner": "Proprietário & Chef",
      "about.headchef": "Head Chef",
      "about.mom": "Matriarca & Guardiã das Receitas",

      "about.quessi":
        "Quessi Jones: 10 anos de cozinha brasileira (6 anos entre Abu Dhabi e Qatar). Cresceu em Rondônia, na fazenda da família — gado, feijão, café, milho, mandioca. Da roça aprendeu a essência dos ingredientes e o respeito ao tempo do fogo. Teve restaurante em Foz do Iguaçu com a mãe Cleusa e o irmão Alex; a família decidiu trazer a verdadeira gastronomia brasileira para o Qatar — no fogão a lenha, como sempre foi.",
      "about.alex":
        "Alex: mais de 10 anos de cozinha brasileira e italiana. Mão firme no fogão, técnica apurada e coração de comida de casa. Head Chef do Panela de Barro.",
      "about.cleusa":
        "Cleusa Gonçalves: cozinheira desde a infância, aos 12 já dominava o fogão a lenha com a avó (de descendência italiana). Mineira de alma, guardiã das panelas e do tempero que abraça. 25+ anos de cozinha.",

      // WOODFIRE
      "wood.title": "O fogão a lenha",
      "wood.p1":
        "O fogão a lenha atravessa o Brasil: da roça mineira aos quintais do interior. Chama branda, fumaça perfumada, tempo paciente — é assim que o sabor fica fundo.",
      "wood.p2":
        "No Panela de Barro, a lenha não é nostalgia: é técnica. Controle de calor, ponto perfeito, sabores que só o fogo vivo entrega.",

      // GALLERY
      "gallery.title": "Galeria",

      // LOCATION
      "loc.title": "Localização",
      "loc.subtitle": "Baraha Town, Doha — mapa interativo",

      // SUPPORT
      "support.title": "Suporte",
      "support.p1":
        "Quer apoiar o restaurante e a cultura brasileira no Qatar? Aqui vão algumas ideias:",
      "support.opt1": "Deixe sua avaliação quando abrirmos",
      "support.opt2": "Indique para amigos e família",
      "support.opt3": "Siga e compartilhe nas redes",

      // 404
      notfound: "Página não encontrada."
    }
  },

  en: {
    meta: { short: "EN", label: "English", dir: "ltr" },
    dict: {
      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.gallery": "Gallery",
      "nav.woodfire": "Wood-Fire",
      "nav.location": "Location",
      "nav.support": "Support",
      "nav.back": "Back to home",

      "hero.title": "Brazilian flavors, family warmth",
      "hero.subtitle":
        "Family-run in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      "hero.soon":
        "Opening in November — online reservations soon.",
      "hero.cta": "View Menu",

      "menu.title": "Menu",
      "menu.tabs.all": "All",
      "menu.tabs.mains": "Mains",
      "menu.tabs.seasonal": "Seasonal",
      "menu.tabs.beverages": "Beverages",

      "about.title": "Panela de Barro: flavor born from the earth",
      "about.p1":
        "More than a restaurant, Panela de Barro is a sensory journey to Brazil’s culinary roots. Each dish honors traditions kept alive around wood-fire stoves and clay pots.",
      "about.h1": "Why “Panela de Barro”? The story behind the flavor",
      "about.p2":
        "Clay pots anchor our cuisine: from Indigenous origins to Afro-Brazilian mastery. Slow heat lets ingredients talk — broths turn rich, flavors deepen, authenticity shines.",
      "about.p3":
        "We cook with handcrafted clay pots, local produce and warmth. Simple, welcoming, made to gather.",
      "about.cap.panela": "Clay pot — gentle heat, deep flavor",
      "about.cap.artesanal": "Handmade — tradition across generations",

      "about.team": "Our team",
      "about.owner": "Owner & Chef",
      "about.headchef": "Head Chef",
      "about.mom": "Matriarch & Recipe Guardian",

      "about.quessi":
        "Quessi Jones: 10 years cooking Brazilian cuisine (6 years between Abu Dhabi and Qatar). Raised on a family farm in Rondônia — cattle, beans, coffee, corn, cassava — he learned ingredient honesty and fire timing. Ran a restaurant in Foz do Iguaçu with his mother Cleusa and brother Alex; now brings true Brazilian gastronomy to Qatar — on wood-fire, as always.",
      "about.alex":
        "Alex: 10+ years in Brazilian and Italian kitchens. Precise technique, soul of home cooking. Head Chef at Panela de Barro.",
      "about.cleusa":
        "Cleusa Gonçalves: cooking since childhood; by 12 she already ruled the wood-fire stove with her Italian-descendant grandmother. A Minas-born heart, 25+ years of cooking.",

      "wood.title": "The wood-fire stove",
      "wood.p1":
        "A living Brazilian icon: gentle flame, perfumed smoke, patient time. That’s how flavor gets depth.",
      "wood.p2":
        "For us it’s technique, not nostalgia: heat control and true fire flavor.",

      "gallery.title": "Gallery",

      "loc.title": "Location",
      "loc.subtitle": "Baraha Town, Doha — interactive map",

      "support.title": "Support",
      "support.p1":
        "Want to support the restaurant and Brazilian culture in Qatar? Try:",
      "support.opt1": "Leave a review when we open",
      "support.opt2": "Recommend us to friends and family",
      "support.opt3": "Follow & share on social",

      notfound: "Page not found."
    }
  },

  ar: {
    meta: { short: "AR", label: "العربية", dir: "rtl" },
    dict: {
      "nav.about": "حول",
      "nav.menu": "القائمة",
      "nav.gallery": "المعرض",
      "nav.woodfire": "موقد الحطب",
      "nav.location": "الموقع",
      "nav.support": "الدعم",
      "nav.back": "العودة إلى البداية",

      "hero.title": "نكهات برازيلية ودفء عائلي",
      "hero.subtitle":
        "مطعم عائلي في قطر. أكثر من 20 عامًا من الضيافة والطبخ على الحطب وجذور برازيلية.",
      "hero.soon": "الافتتاح في نوفمبر — الحجز عبر الإنترنت قريبًا.",
      "hero.cta": "عرض القائمة",

      "menu.title": "القائمة",
      "menu.tabs.all": "الكل",
      "menu.tabs.mains": "الأطباق الرئيسية",
      "menu.tabs.seasonal": "الموسمية",
      "menu.tabs.beverages": "المشروبات",

      "about.title": "قدر الطين: نكهة ولِدت من الأرض",
      "about.p1":
        "أكثر من مجرد مطعم، إنها رحلة حسية إلى جذور المطبخ البرازيلي. كل طبق تكريم لتقاليد انتقلت عبر الأجيال مع دفء موقد الحطب.",
      "about.h1": "لماذا «قدر الطين»؟ القصة وراء النكهة",
      "about.p2":
        "يُبطِّن قدر الطين تاريخنا: من الشعوب الأصلية إلى الإرث الأفرو-برازيلي. الحرارة الهادئة تسمح للمكونات بأن تمتزج ببطء فتتعاظم النكهات وتزداد العمق.",
      "about.p3":
        "نطهو في قدور يدوية وبمكونات محلية مختارة. بساطة ودفء يرحّبان بالجميع.",
      "about.cap.panela": "قدر طين — حرارة لطيفة ونكهة عميقة",
      "about.cap.artesanal": "مصنوع يدويًا — تقليد عبر الأجيال",

      "about.team": "فريقنا",
      "about.owner": "المالك والطاهي",
      "about.headchef": "الشيف التنفيذي",
      "about.mom": "الأم وحافظة الوصفات",

      "about.quessi":
        "كيسي جونز: 10 سنوات في المطبخ البرازيلي (6 سنوات بين أبوظبي وقطر). نشأ في مزرعة العائلة في روندونيا وتعلم جوهر المكوّنات وتوقيت النار. أدار مطعمًا في فوز دو إيغواسو مع والدته كليوزا وأخيه أليكس، واليوم يجلب المذاق البرازيلي الأصيل إلى قطر.",
      "about.alex":
        "أليكس: أكثر من 10 سنوات في المطبخ البرازيلي والإيطالي. تقنية دقيقة وروح طعام البيت. الشيف التنفيذي.",
      "about.cleusa":
        "كليوزا غونزالفس: تطهو منذ الطفولة؛ مع خبرة تتجاوز 25 عامًا على موقد الحطب برفقة جدتها من أصول إيطالية.",

      "wood.title": "موقد الحطب",
      "wood.p1":
        "رمز حي في البرازيل: لهب هادئ ودخان عطِر ووقت صبور يمنحان عمق النكهة.",
      "wood.p2":
        "بالنسبة لنا هو تقنية وليست حنينًا: تحكم بالحرارة ونكهة نار حقيقية.",

      "gallery.title": "المعرض",

      "loc.title": "الموقع",
      "loc.subtitle": "باراحة تاون، الدوحة — خريطة تفاعلية",

      "support.title": "الدعم",
      "support.p1":
        "تريد دعم المطعم والثقافة البرازيلية في قطر؟ جرّب:",
      "support.opt1": "اترك تقييماً عند الافتتاح",
      "support.opt2": "انصح به الأصدقاء والعائلة",
      "support.opt3": "تابعنا وشارك على الشبكات",

      notfound: "الصفحة غير موجودة."
    }
  }
};

// Export básico para o App.jsx
export const LOCALES = Object.fromEntries(
  Object.entries(DICTS).map(([k, v]) => [k, v.meta])
);

export function getLang() {
  const url = new URL(window.location.href);
  const q = (url.searchParams.get("lang") || "").toLowerCase();
  const stored = (localStorage.getItem("lang") || "").toLowerCase();
  const guess = q || stored || "pt";
  return DICTS[guess] ? guess : "pt";
}

export function setLang(code) {
  const lang = DICTS[code] ? code : "pt";
  localStorage.setItem("lang", lang);

  // Ajusta <html>
  applyDocumentLang(lang);

  // Atualiza ?lang= sem recarregar
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  history.replaceState({}, "", url.toString());

  // Notifica a App.jsx (useLang)
  window.dispatchEvent(new Event("langchange"));
}

export function t(key, lang) {
  const k = String(key);
  const L = DICTS[lang]?.dict?.[k];
  if (L) return L;
  const Fallback = DICTS.pt.dict[k];
  return Fallback || k; // se faltar, mostra a chave
}

export function initLangFromURL() {
  const url = new URL(window.location.href);
  const q = (url.searchParams.get("lang") || "").toLowerCase();
  if (DICTS[q]) {
    setLang(q);
  } else {
    // garante html correto ao primeiro load
    applyDocumentLang(getLang());
  }
}

export function applyDocumentLang(lang) {
  const meta = DICTS[lang]?.meta || DICTS.pt.meta;
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", meta.dir || "ltr");
}