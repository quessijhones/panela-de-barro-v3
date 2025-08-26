// src/i18n.js
export const LOCALES = ["pt", "en", "ar"];

// util: normaliza lang
export function getLang() {
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  if (LOCALES.includes(q)) return q;
  return "pt";
}
export function setLang(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
  // disparamos um evento para a App reagir sem F5
  window.dispatchEvent(new CustomEvent("langchange"));
}

// dicionário
export const STRINGS = {
  pt: {
    brand: "Panela de Barro",
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato", firewood: "Fogão a Lenha", back: "Voltar" },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      soon: "Inauguração em Novembro — reservas online em breve."
    },
    preview: "Menu (prévia)",
    tags: { mains: "Pratos Principais", sides: "Acompanhamentos", desserts: "Sobremesas", beverages: "Bebidas", seasonal: "Sazonal", chef: "Do Chef" },
    diet: { halal: "Halal", beef: "Bovino", dairy: "Lácteo", gluten: "Glúten", sea: "Mar", veg: "Veg" },
    gallery: { title: "Galeria" },
    location: { title: "Localização", addr: "Baraha Town, Doha, Qatar (Baraha Town)", soon: "Mapa interativo em breve." },
    contact: { title: "Contato", phone: "Telefone", email: "E-mail", backHome: "Voltar ao início" },
    about: {
      title: "Panela de Barro: o sabor que veio da terra",
      owner: "Proprietário & Chef: Quessi Jhones",
      section1:
        "Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes da culinária brasileira. Cada garfada homenageia tradições passadas de geração em geração, no calor do fogão a lenha e na cerâmica que dá nome à casa.",
      why: "Por que “Panela de Barro”?",
      section2:
        "A panela de barro é símbolo ancestral de mistura, resistência e criatividade. Dos povos indígenas moldando o barro à mão, às cozinhas afro-brasileiras que transformaram o simples em extraordinário, ela preserva calor e imprime um sabor terroso único. É o coração de moquecas, caldos e ensopados cozidos lentamente.",
      teamTitle: "Nossa equipe",
      team:
        "Quessi Jhones comanda a cozinha ao lado do irmão Alex (Head Chef, 10+ anos de cozinha brasileira e italiana) e de sua mãe, Cleusa Gonçalves, cozinheira há mais de 25 anos. A família nasceu e cresceu na roça, entre café, milho, mandioca e gado — aprendendo a essência dos ingredientes e o respeito ao tempo do fogo.",
      cultureTitle: "Cultura & pratos",
      culture:
        "Do Brasil profundo vêm histórias como a da Feijoada, que uniu cortes simples a saberes africanos; da Moqueca, símbolo da costa com dendê e leite de coco; da Vaca Atolada, que é roça em forma de prato; da Farofa, parceira de todas as mesas; e dos frutos nativos como o cupuaçu. Em cada receita, celebramos a terra e quem a cultiva."
    },
    firewood: {
      title: "Fogão a Lenha",
      text:
        "O fogão a lenha conta a história das cozinhas brasileiras: ferro, barro e brasa. Ele aquece devagar, concentra sabores e reúne a família em volta do cheiro que sai da chaminé. No Panela de Barro, adotamos o fogo vivo — com tempo e respeito — para entregar comida com alma."
    },
    ui: { comingSoon: "Em breve", loading: "Carregando..." }
  },
  en: {
    brand: "Panela de Barro",
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact", firewood: "Wood-Fire", back: "Back" },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle: "Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
      cta: "View Menu",
      soon: "Opening in November — online reservations soon."
    },
    preview: "Menu (preview)",
    tags: { mains: "Mains", sides: "Sides", desserts: "Desserts", beverages: "Beverages", seasonal: "Seasonal", chef: "Chef’s" },
    diet: { halal: "Halal", beef: "Beef", dairy: "Dairy", gluten: "Gluten", sea: "Sea", veg: "Veg" },
    gallery: { title: "Gallery" },
    location: { title: "Location", addr: "Baraha Town, Doha, Qatar (Baraha Town)", soon: "Interactive map coming soon." },
    contact: { title: "Contact", phone: "Phone", email: "Email", backHome: "Back to home" },
    about: {
      title: "Panela de Barro: flavor born from the earth",
      owner: "Owner & Chef: Quessi Jhones",
      section1:
        "More than a restaurant, Panela de Barro is a sensory journey to Brazil’s roots. Each bite honors traditions passed down by families, cooked slowly over wood-fire and in clay cookware.",
      why: "Why “Panela de Barro”?",
      section2:
        "Clay pots symbolize mixture, resilience and creativity. From indigenous techniques to Afro-Brazilian kitchens, clay preserves heat and adds an earthy signature — the soul of moquecas, stews and broths.",
      teamTitle: "Our team",
      team:
        "Chef-owner Quessi Jhones leads with his brother Alex (Head Chef, 10+ years in Brazilian & Italian cuisine) and their mother, Cleusa Gonçalves, a cook for 25+ years. Raised on a farm, they learned respect for ingredients, seasons and time.",
      cultureTitle: "Culture & dishes",
      culture:
        "Feijoada’s story blends humble cuts with African knowledge; Moqueca brings the coast with dendê and coconut milk; Vaca Atolada tastes like the countryside; Farofa pairs with everything; and Amazon fruits like cupuaçu tell where we come from."
    },
    firewood: {
      title: "Wood-Fire Cooking",
      text:
        "Cast iron, clay and embers: the Brazilian wood-stove concentrates flavor and gathers people around the aroma. At Panela de Barro we embrace live fire — time and care — to serve food with soul."
    },
    ui: { comingSoon: "Coming soon", loading: "Loading..." }
  },
  ar: {
    brand: "بانِلا دي بارّو",
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", location: "الموقع", contact: "اتصال", firewood: "موقد الحطب", back: "رجوع" },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle: "مطعم عائلي في قطر بخبرة تتجاوز 20 عاماً في الضيافة وطبخ الحطب وجذور برازيلية.",
      cta: "عرض القائمة",
      soon: "الافتتاح في نوفمبر — الحجوزات عبر الإنترنت قريباً."
    },
    preview: "القائمة (مقتطف)",
    tags: { mains: "الأطباق الرئيسية", sides: "المقبلات", desserts: "الحلويات", beverages: "المشروبات", seasonal: "موسمي", chef: "طبق الشيف" },
    diet: { halal: "حلال", beef: "لحم بقري", dairy: "ألبان", gluten: "غلوتين", sea: "بحري", veg: "نباتي" },
    gallery: { title: "المعرض" },
    location: { title: "الموقع", addr: "باراهـا تاون، الدوحة، قطر", soon: "الخريطة التفاعلية قريباً." },
    contact: { title: "اتصال", phone: "هاتف", email: "بريد إلكتروني", backHome: "العودة للرئيسية" },
    about: {
      title: "بانِلا دي بارّو: نكهة من الأرض",
      owner: "المالك والشيف: Quessi Jhones",
      section1:
        "أكثر من مطعم — رحلة حسّية لجذور المطبخ البرازيلي. كل لقمة تحيي التقاليد المطهية ببطء على نار الحطب وفي أواني الفخار.",
      why: "لماذا «بانِلا دي بارّو»؟",
      section2:
        "قدر الفخار رمزٌ للمزج والصمود والإبداع. يحفظ الحرارة ويمنح الطعام بصمة ترابية تُميّز اليخنات والموكيكا.",
      teamTitle: "فريقنا",
      team:
        "يقود الشيف Quessi مع أخيه Alex (شيف تنفيذي) ووالدتهما Cleusa ذات خبرة تتجاوز 25 عاماً. نشأوا في المزارع وتعلموا احترام المكونات والزمن.",
      cultureTitle: "الثقافة والأطباق",
      culture:
        "تحكي الفيجوادا والموكيكا وفاكا أتولادا والـ«فاروْفا» وقصص فواكه الأمازون مثل الكوبواسو حكاية البرازيل."
    },
    firewood: {
      title: "موقد الحطب",
      text:
        "حديد، فخار وجمر — موقد الحطب يركّز النكهة ويجمع العائلة. في بانِلا دي بارّو نعانق لهباً حيّاً لنقدّم طعاماً بروح."
    },
    ui: { comingSoon: "قريباً", loading: "جارٍ التحميل…" }
  }
};

export function t(lang, path) {
  const parts = path.split(".");
  let obj = STRINGS[lang] || STRINGS.pt;
  for (const p of parts) obj = obj?.[p];
  return obj ?? path;
}