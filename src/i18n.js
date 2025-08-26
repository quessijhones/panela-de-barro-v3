// src/i18n.js
// Pequeno i18n reativo (sem libs). Atualiza a UI sem precisar dar F5.

export const LOCALES = { pt: "pt", en: "en", ar: "ar" };

const listeners = new Set();
const qs = new URLSearchParams(location.search);
const initial = (qs.get("lang") || localStorage.getItem("lang") || "pt").toLowerCase();
let current = LOCALES[initial] ? initial : "pt";

function notify() { listeners.forEach((fn) => fn(current)); }

export function getLang() { return current; }

export function setLang(lang) {
  const next = LOCALES[lang] ? lang : "pt";
  if (next === current) return;
  current = next;
  const sp = new URLSearchParams(location.search);
  sp.set("lang", next);
  history.replaceState(null, "", `${location.pathname}?${sp.toString()}${location.hash}`);
  localStorage.setItem("lang", next);
  notify();
}

// assina mudanças de idioma (usado no App.jsx)
export function onLangChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// helper: t('a.b.c')
export function t(path) {
  const parts = path.split(".");
  let node = STRINGS[current];
  for (const p of parts) node = node?.[p];
  return node ?? path;
}

/* ===================== TEXTOS ===================== */
export const STRINGS = {
  pt: {
    brand: "Panela de Barro",
    nav: { about:"Sobre", menu:"Menu", gallery:"Galeria", woodfire:"Fogão a Lenha", location:"Localização", contact:"Contato", home:"Início", back:"Voltar ao início" },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      comingSoon: "Inauguração em Novembro — reservas online em breve."
    },
    menu: {
      title: "Menu",
      preview: "Menu (prévia)",
      filters: { all:"Todos", mains:"Pratos Principais", sides:"Acompanhamentos", desserts:"Sobremesas", beverages:"Bebidas", seasonal:"Sazonal", chef:"Do Chef" },
      badges: { halal:"Halal", beef:"Bovino", sea:"Mar", dairy:"Lácteo", gluten:"Glúten", veg:"Veg" },
      modal: { nutrition:"Ficha técnica (exemplo)", kcals:"kcal", carbs:"Carbs", protein:"Proteína", fat:"Gorduras", sodium:"Sódio", close:"Fechar" }
    },
    gallery: { title:"Galeria" },
    location: { title:"Localização", address:"Baraha Town, Doha, Qatar", mapSoon:"Mapa interativo em breve." },
    contact: { title:"Contato", email:"E-mail", phone:"Telefone", support:"Apoie & Avaliações", supportCta:"Fale no WhatsApp" },
    about: {
      title: "Panela de Barro: O Sabor que Veio da Terra",
      blocks: [
        "Mais do que um restaurante, o Panela de Barro é uma viagem às raízes da culinária brasileira. Cada garfada homenageia tradições cozidas lentamente no fogão a lenha e no aconchego da cerâmica que dá nome à nossa casa.",
        "A panela de barro é símbolo de mistura, resistência e criatividade. Dos povos indígenas aos saberes africanos, dela nasceram moquecas, feijoadas e caldos profundos — sabores que respeitam o tempo.",
        "O Chef-proprietário Quessi Jhones, nascido em Rondônia, cresceu na roça, plantando e colhendo. Ao lado da mãe, Dona Cleusa, e do irmão Alex (Head Chef, mais de 10 anos de cozinha brasileira e italiana), comandou um restaurante caipira em Foz do Iguaçu. Hoje, trazemos essa memória afetiva ao Qatar: ingredientes honestos, fogo de lenha e hospitalidade brasileira."
      ],
      teamTitle: "Equipe",
      team: {
        quessi: { name:"Quessi Jhones — Chef & Proprietário", blurb:"10+ anos de cozinha brasileira entre Abu Dhabi e Qatar." },
        alex: { name:"Alex — Head Chef", blurb:"Mais de 10 anos na cozinha brasileira e italiana; comando de praça e grelha." },
        cleusa: { name:"Dona Cleusa — Cozinheira", blurb:"25+ anos de fogão; aprendizados com a mãe (nossa nonna mineira de raízes italianas)." }
      }
    },
    woodfire: {
      title:"Fogão a Lenha",
      text:[
        "O fogão a lenha moldou o paladar do Brasil. Do café coado ao feijão de panela, o fogo baixo destaca aromas e texturas que o gás não replica.",
        "No Panela de Barro usamos panelas de barro e ferro, e lenha selecionada, para extrair do alimento sua doçura natural e camadas de sabor."
      ]
    },
    footer: { rights:"" }
  },

  en: {
    brand: "Panela de Barro",
    nav: { about:"About", menu:"Menu", gallery:"Gallery", woodfire:"Wood-Fire", location:"Location", contact:"Contact", home:"Home", back:"Back to Home" },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      cta: "View Menu",
      comingSoon: "Opening in November — online booking soon."
    },
    menu: {
      title: "Menu",
      preview: "Menu (preview)",
      filters: { all:"All", mains:"Mains", sides:"Sides", desserts:"Desserts", beverages:"Beverages", seasonal:"Seasonal", chef:"Chef’s" },
      badges: { halal:"Halal", beef:"Beef", sea:"Sea", dairy:"Dairy", gluten:"Gluten", veg:"Veg" },
      modal: { nutrition:"Tech sheet (sample)", kcals:"kcal", carbs:"Carbs", protein:"Protein", fat:"Fat", sodium:"Sodium", close:"Close" }
    },
    gallery: { title:"Gallery" },
    location: { title:"Location", address:"Baraha Town, Doha, Qatar", mapSoon:"Interactive map coming soon." },
    contact: { title:"Contact", email:"Email", phone:"Phone", support:"Support & Reviews", supportCta:"WhatsApp us" },
    about: {
      title:"Panela de Barro: Flavor Born from Earth",
      blocks:[
        "More than a restaurant, Panela de Barro is a journey to Brazil’s culinary roots — slow-cooked over wood-fire in clay pots.",
        "The clay pot symbolizes mixture, resilience and creativity — where moquecas and feijoadas were born.",
        "Chef-owner Quessi Jhones grew up on a farm in Rondônia. With his mother Dona Cleusa and his brother Alex (Head Chef, 10+ years in Brazilian & Italian kitchens), he ran a caipira restaurant in Foz do Iguaçu. Now we bring that memory to Qatar."
      ],
      teamTitle:"Team",
      team: {
        quessi:{ name:"Quessi Jhones — Chef & Owner", blurb:"10+ years in Brazilian cuisine across Abu Dhabi and Qatar." },
        alex:{ name:"Alex — Head Chef", blurb:"Over a decade in Brazilian & Italian kitchens." },
        cleusa:{ name:"Dona Cleusa — Cook", blurb:"25+ years at the stove; wood-fire traditions from Minas and Italian roots." }
      }
    },
    woodfire: {
      title:"Wood-Fire",
      text:[
        "Wood-fire shaped Brazil’s palate. Low heat unlocks aromas and textures gas can’t mimic.",
        "We use clay & cast-iron with selected wood to bring out natural sweetness and depth."
      ]
    },
    footer: { rights:"" }
  },

  ar: {
    brand: "بانيلّا دي بارّو",
    nav: { about:"من نحن", menu:"القائمة", gallery:"المعرض", woodfire:"الطهي على الحطب", location:"الموقع", contact:"تواصل", home:"الرئيسية", back:"العودة إلى الرئيسية" },
    hero: {
      title:"نكهات برازيلية ودفء عائلي",
      subtitle:"مطعم عائلي في قطر، أكثر من 20 سنة في الضيافة والطهي على الحطب وجذور برازيلية.",
      cta:"استعرض القائمة",
      comingSoon:"الافتتاح في نوفمبر — الحجز عبر الإنترنت قريباً."
    },
    menu: {
      title:"القائمة",
      preview:"القائمة (نموذج)",
      filters:{ all:"الكل", mains:"أطباق رئيسية", sides:"مقبلات", desserts:"حلويات", beverages:"مشروبات", seasonal:"موسمي", chef:"طبق الشيف" },
      badges:{ halal:"حلال", beef:"لحم بقر", sea:"بحر", dairy:"ألبان", gluten:"غلوتين", veg:"نباتي" },
      modal:{ nutrition:"المعلومات الغذائية (مثال)", kcals:"سعرة", carbs:"كربوهيدرات", protein:"بروتين", fat:"دهون", sodium:"صوديوم", close:"إغلاق" }
    },
    gallery:{ title:"المعرض" },
    location:{ title:"الموقع", address:"باراحا تاون، الدوحة، قطر", mapSoon:"خريطة تفاعلية قريباً." },
    contact:{ title:"تواصل", email:"البريد الإلكتروني", phone:"الهاتف", support:"الدعم والتقييمات", supportCta:"واتساب" },
    about:{
      title:"بانيلّا دي بارّو: نكهة من الأرض",
      blocks:[
        "أكثر من مطعم — رحلة إلى جذور المطبخ البرازيلي بطهو بطيء في أواني الطين على الحطب.",
        "قدر الطين رمزٌ للمزج والصمود والإبداع — منه ولدت الموكّيكا والفَيجوادا.",
        "الطاهي والمالك كويِسّي جونس نشأ في مزرعة بروندونيا. مع والدته دونا كليوسا وأخيه أليكس (شيف تنفيذي)، أدار مطعماً ريفياً في فوز دو إيغواسو. اليوم ننقل تلك الذاكرة إلى قطر."
      ],
      teamTitle:"الفريق",
      team:{
        quessi:{ name:"كويِسّي جونس — الشيف والمالك", blurb:"أكثر من 10 سنوات في المطبخ البرازيلي." },
        alex:{ name:"أليكس — الشيف التنفيذي", blurb:"خبرة واسعة في المطبخين البرازيلي والإيطالي." },
        cleusa:{ name:"دونا كليوسا — طاهية", blurb:"أكثر من 25 سنة على الموقد." }
      }
    },
    woodfire:{
      title:"الطهي على الحطب",
      text:[
        "النار الهادئة تصنع نكهات لا يحققها الغاز.",
        "نستخدم قدور الطين والحديد مع حطب مختار لنُبرز طعم المكونات."
      ]
    },
    footer:{ rights:"" }
  }
};