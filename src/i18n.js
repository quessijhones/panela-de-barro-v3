export const LOCALES = { pt: "pt", en: "en", ar: "ar" };

// ---- idioma: salvar/aplicar e avisar o app sem F5
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
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: l } }));
}
export function getLang() {
  const url = new URL(window.location.href);
  const param = url.searchParams.get("lang");
  const stored = localStorage.getItem("lang");
  const lang = (param || stored || "pt").toLowerCase();
  setLang(lang, false);
  return lang;
}
export function t(key) {
  const lang = getLang();
  return STRINGS[lang][key] ?? STRINGS["pt"][key] ?? key;
}
export function trDish(d, field = "name") {
  const lang = getLang();
  const obj = d[field];
  return (obj && (obj[lang] || obj.pt)) || "";
}

// ---- textos
export const STRINGS = {
  pt: {
    nav_about:"Sobre", nav_menu:"Menu", nav_gallery:"Galeria", nav_location:"Localização", nav_contact:"Contato", nav_wood:"Fogão a Lenha",
    lang_pt:"PT", lang_en:"EN", lang_ar:"AR",
    hero_title:"Sabores brasileiros, calor de família",
    hero_sub:"Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
    hero_cta:"Ver Menu", coming_soon:"Inauguração em Novembro — reservas online em breve.",
    back_home:"Voltar ao início",

    menu:"Menu", menu_preview:"Menu (prévia)",
    all:"Todos", mains:"Pratos Principais", sides:"Acompanhamentos", desserts:"Sobremesas", beverages:"Bebidas", seasonal:"Sazonal", chefs:"Do Chef",

    details:"Detalhes", nutrition:"Ficha técnica (exemplo)",
    kcal:"kcal", carbs:"Carboidratos", protein:"Proteína", fat:"Gorduras",
    allergens:"Selo", halal:"Halal", beef:"Bovino", sea:"Mar", dairy:"Lácteo", gluten:"Glúten", veg:"Veg", close:"Fechar",

    gallery:"Galeria",

    location:"Localização",
    where:"Baraha Town, Doha, Qatar (Baraha Town)",
    map_soon:"Mapa interativo em breve.", open_maps:"Abrir no Google Maps",

    contact:"Contato", email:"Email", phone:"Telefone", support:"Apoie o projeto",
    review_title:"Avalie sua experiência", review_cta:"Enviar avaliação", thanks:"Obrigado! Sua avaliação ajuda a comunidade.",

    about_title:"Panela de Barro",
    about_long:
`Panela de Barro: O Sabor que Veio da Terra

Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes mais autênticas da culinária brasileira. Um lugar onde cada garfada é uma homenagem às tradições passadas de geração em geração — lentamente, no calor do fogão a lenha e no aconchego da cerâmica que dá nome à nossa casa.

Por que "Panela de Barro"?
A panela de barro é um dos instrumentos culinários mais antigos do Brasil. Nossos povos originários moldavam o barro da terra e cozinhavam peixes, pirões e mingaus. Com a diáspora africana, a técnica se expandiu nas senzalas e nasceu a cozinha de resistência: caldos, ensopados, feijoadas; o dendê encontrou o peixe e a moqueca ganhou alma. A panela de barro simboliza mistura, criatividade e memória.

Ela não apressa a comida: permite que os ingredientes “conversem” e os caldos ganhem corpo e profundidade — um sabor levemente terroso e inconfundível. Esse é o sabor que queremos servir.

Nossa casa
• Cardápio raiz — moquecas, feijoadas, ensopados e clássicos de quintal.
• Ingredientes selecionados — respeito à sazonalidade e a quem planta.
• Ambiente acolhedor — elegância simples, jeito de casa de família.

Equipe
Chef-proprietário Quessi Jhones, nascido em Rondônia. Cresceu na fazenda entre café, milho, feijão e mandioca, aprendendo a valorizar o ingrediente e o fogão a lenha. Com a mãe Dona Cleusa e o irmão Alex (Head Chef, 10+ anos na cozinha brasileira e italiana), comandou um restaurante caipira em Foz do Iguaçu. Hoje, trazem ao Qatar a essência do Brasil: hospitalidade e panela de barro.`,
    wood_title:"Fogão a Lenha",
    wood_long:
`O fogão a lenha moldou o paladar brasileiro. No campo, era centro da casa: aquecia, reunia e dava tempo para os sabores amadurecerem. A lenha queima lenta, as panelas vibram com calor constante e suave — feijões ficam cremosos, carnes se rendem, farofas ganham perfume.

No Panela de Barro, mantemos essa tradição: cozimentos de paciência, fumaça sutil e toque de brasa quando precisa. É técnica ancestral, afeto e respeito à natureza.`
  },

  en: {
    nav_about:"About", nav_menu:"Menu", nav_gallery:"Gallery", nav_location:"Location", nav_contact:"Contact", nav_wood:"Wood-Fire",
    lang_pt:"PT", lang_en:"EN", lang_ar:"AR",
    hero_title:"Brazilian flavors, family warmth",
    hero_sub:"Family-run restaurant in Qatar. 20+ years in hospitality, wood-fire cooking and Brazilian roots.",
    hero_cta:"View Menu", coming_soon:"Opening in November — online bookings soon.",
    back_home:"Back to Home",

    menu:"Menu", menu_preview:"Menu (preview)",
    all:"All", mains:"Mains", sides:"Sides", desserts:"Desserts", beverages:"Beverages", seasonal:"Seasonal", chefs:"Chef’s",

    details:"Details", nutrition:"Tech sheet (sample)",
    kcal:"kcal", carbs:"Carbs", protein:"Protein", fat:"Fat",
    allergens:"Badge", halal:"Halal", beef:"Beef", sea:"Sea", dairy:"Dairy", gluten:"Gluten", veg:"Veg", close:"Close",

    gallery:"Gallery",

    location:"Location",
    where:"Baraha Town, Doha, Qatar (Baraha Town)",
    map_soon:"Interactive map coming soon.", open_maps:"Open in Google Maps",

    contact:"Contact", email:"Email", phone:"Phone", support:"Support the project",
    review_title:"Rate your experience", review_cta:"Send review", thanks:"Thank you! Your review helps our community.",

    about_title:"Panela de Barro",
    about_long:
`Panela de Barro is a sensorial trip to Brazil’s countryside roots. Clay pots, slow fire and hospitality define our kitchen.

Why “Panela de Barro”?
Clay pots predate Brazil itself: indigenous peoples shaped earth into vessels; with the African diaspora, slow stews and feijoadas flourished; dendê met fish and moqueca was born. Clay is a symbol of mixture, creativity and memory. It doesn’t rush food — it lets flavors talk.

Team
Chef-owner Quessi Jhones, from Rondônia, raised on a farm among coffee, corn, beans and cassava. With his mother Dona Cleusa and brother Alex (Head Chef), he ran a caipira restaurant in Foz do Iguaçu. Now we bring Brazil’s essence to Qatar.`,
    wood_title:"Wood-Fire",
    wood_long:
`Wood-fire shaped Brazilian taste. It keeps a steady, gentle heat — beans turn creamy, meats relax, farofas get perfumed. We cook with patience and respect for the ingredient, with a subtle kiss of smoke.`
  },

  ar: {
    nav_about:"نبذة", nav_menu:"القائمة", nav_gallery:"المعرض", nav_location:"الموقع", nav_contact:"التواصل", nav_wood:"الطهي بالحطب",
    lang_pt:"PT", lang_en:"EN", lang_ar:"AR",
    hero_title:"نكهات برازيلية ودفء العائلة",
    hero_sub:"مطعم عائلي في قطر — أكثر من 20 عامًا في الضيافة والطبخ على الحطب.",
    hero_cta:"عرض القائمة", coming_soon:"الافتتاح في نوفمبر — الحجز قريبًا عبر الإنترنت.",
    back_home:"العودة للبداية",

    menu:"القائمة", menu_preview:"القائمة (عرض تمهيدي)",
    all:"الكل", mains:"الأطباق الرئيسية", sides:"مرافقة", desserts:"حلويات", beverages:"مشروبات", seasonal:"موسمي", chefs:"طبق الشيف",

    details:"التفاصيل", nutrition:"بطاقة غذائية (نموذج)",
    kcal:"سعرة", carbs:"كربوهيدرات", protein:"بروتين", fat:"دهون",
    allergens:"شارة", halal:"حلال", beef:"بقري", sea:"بحري", dairy:"ألبان", gluten:"غلوتين", veg:"نباتي", close:"إغلاق",

    gallery:"المعرض",

    location:"الموقع",
    where:"باراحا تاون، الدوحة، قطر", map_soon:"الخريطة التفاعلية قريبًا.", open_maps:"افتح في خرائط جوجل",

    contact:"التواصل", email:"البريد", phone:"الهاتف", support:"ادعم المشروع",
    review_title:"قيّم تجربتك", review_cta:"إرسال التقييم", thanks:"شكرًا لمساهمتك!",

    about_title:"Panela de Barro",
    about_long:
`Panela de Barro رحلة إلى جذور المطبخ البرازيلي — قدور من الطين ونار هادئة وضيافة.
القدر الطيني رمز للامتزاج والذاكرة؛ لا يسرّع الطعام بل يمنحه وقتًا ليتناغم.`,
    wood_title:"الطهي بالحطب",
    wood_long:
`النار الخشبية تمنح حرارة ثابتة ولطيفة — فتصبح الفاصوليا كريمية واللحوم طرية. نطبخ بصبر واحترام للمكوّن.`
  }
};
