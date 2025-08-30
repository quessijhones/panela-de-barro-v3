// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";

/* =========================================
   Idiomas (PT como padrão) + dicionário UI
   ========================================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

const dict = {
  pt: {
    brand: "Panela de Barro",
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", woodfire: "Fogão a Lenha", location: "Localização", support: "Suporte" },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      soon: "Inauguração em Novembro — reservas online em breve.",
    },
    sections: { menuHighlights: "Destaques do Menu", immersive: "Imersões do Brasil", back: "Voltar ao início" },
    menu: {
      title: "Menu",
      tabs: { all: "Todos", mains: "Pratos", appetizers: "Entradas", seasonal: "Sazonais", beverages: "Bebidas", desserts: "Sobremesas" },
      modal: { close: "Fechar" },
      tags: { Halal: "Halal", Beef: "Carne", Dairy: "Laticínio", Gluten: "Glúten", Sea: "Peixe", Dessert: "Sobremesa", Beverage: "Bebida", Seasonal: "Sazonal" },
    },
    about: {
      title: "Sobre",
      p1: "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha.",
      p2: "A panela de barro atravessa a nossa história: dos povos indígenas à criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite que os sabores conversem e imprime um toque terroso inconfundível.",
      p3: "Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto — servidos à mesa.",
      family: "Nossa família",
      people: {
        quessi: { name: "Quessi Jones — Proprietário", text: "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho.", img: "/heritage/chef-quessi.jpg" },
        alex: { name: "Alex — Chef de Cozinha", text: "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas", text: "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração.", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" },
      ],
    },
    wood: {
      title: "Fogão a Lenha",
      p1: "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado.",
      p2: "Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
    },
    gallery: { title: "Galeria" },
    support: {
      title: "Suporte",
      items: ["Pedidos e reservas em breve", "Eventos e encomendas", "Parcerias"],
      contactTitle: "Contato",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: { title: "Localização", addr: "Baraha Town — Doha, Qatar", map: "Ver no mapa" },
    immersiveLabels: { amazonia: "Amazônia", cerrado: "Cerrado", lencois: "Lençóis", litoral: "Litoral", serra: "Serra" },
    drawer: { menu: "Menu", social: "Redes sociais", languages: "Idiomas", close: "Fechar" },
  },
  en: {
    brand: "Panela de Barro",
    nav: { about: "About", menu: "Menu", gallery: "Gallery", woodfire: "Wood-Fired Stove", location: "Location", support: "Support" },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle: "Family-run restaurant in Qatar. 20+ years of hospitality, wood fire and Brazilian roots.",
      cta: "View Menu",
      soon: "Opening in November — online reservations soon.",
    },
    sections: { menuHighlights: "Menu Highlights", immersive: "Brazil Immersions", back: "Back to start" },
    menu: {
      title: "Menu",
      tabs: { all: "All", mains: "Mains", appetizers: "Appetizers", seasonal: "Seasonal", beverages: "Beverages", desserts: "Desserts" },
      modal: { close: "Close" },
      tags: { Halal: "Halal", Beef: "Beef", Dairy: "Dairy", Gluten: "Gluten", Sea: "Fish", Dessert: "Dessert", Beverage: "Beverage", Seasonal: "Seasonal" },
    },
    about: {
      title: "About",
      p1: "Panela de Barro is a tribute to Brazilian roots: farm cooking, fresh ingredients and wood fire. Our family brings decades of kitchen memories to Doha.",
      p2: "Clay pots cross our history: from indigenous peoples to Afro-Brazilian creativity. Slow cooking lets flavors speak and leaves an unmistakable earthy touch.",
      p3: "That’s the taste we seek in every dish — tradition, calm and affection at the table.",
      family: "Our family",
      people: {
        quessi: { name: "Quessi Jones — Owner", text: "Quessi leads the house with soul and warmth.", img: "/heritage/chef-quessi.jpg" },
        alex: { name: "Alex — Head Chef", text: "Technique and memory — perfect doneness and steady fire.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "Cleusa Gonçalves — Mother & Recipe Guardian", text: "Stories and recipes passed down generations.", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Handmade clay pots" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Handcrafted, as tradition dictates" },
      ],
    },
    wood: {
      title: "Wood-Fired Stove",
      p1: "From Brazil’s countryside: the right woods, steady embers and patience — the secret of rich broths.",
      p2: "We honor this know-how, uniting tradition and care for the ingredient.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
    },
    gallery: { title: "Gallery" },
    support: {
      title: "Support",
      items: ["Orders & reservations soon", "Events & catering", "Partnerships"],
      contactTitle: "Contact",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: { title: "Location", addr: "Baraha Town — Doha, Qatar", map: "Open map" },
    immersiveLabels: { amazonia: "Amazon", cerrado: "Cerrado", lencois: "Lençóis", litoral: "Coast", serra: "Highlands" },
    drawer: { menu: "Menu", social: "Social", languages: "Languages", close: "Close" },
  },
  ar: {
    brand: "بانِيلا دي بارّو",
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", woodfire: "موقد الحطب", location: "الموقع", support: "الدعم" },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle: "مطعم عائلي في قطر — أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
      cta: "عرض القائمة",
      soon: "الافتتاح في نوفمبر — الحجوزات قريبًا.",
    },
    sections: { menuHighlights: "مختارات القائمة", immersive: "جولات برازيلية", back: "العودة للبداية" },
    menu: {
      title: "القائمة",
      tabs: { all: "الكل", mains: "الأطباق الرئيسية", appetizers: "المقبلات", seasonal: "موسمية", beverages: "المشروبات", desserts: "الحلويات" },
      modal: { close: "إغلاق" },
      tags: { Halal: "حلال", Beef: "لحم بقر", Dairy: "ألبان", Gluten: "غلوتين", Sea: "سمك", Dessert: "حلوى", Beverage: "مشروب", Seasonal: "موسمي" },
    },
    about: {
      title: "نبذة",
      p1: "«بانِيلا دي بارّو» تحية للجذور البرازيلية: طبخ ريفي ومكوّنات طازجة ونار الحطب. تنقل عائلتنا عقودًا من الذكريات إلى الدوحة.",
      p2: "قدور الطين جزء من تاريخنا — الطهي البطيء يترك لمسة ترابية لا تُنسى.",
      p3: "هذا ما نبحث عنه في كل طبق: تقليد وهدوء ومودّة على المائدة.",
      family: "عائلتنا",
      people: {
        quessi: { name: "كِوِسّي جونز — المالك", text: "يقود المكان بروحٍ دافئة.", img: "/heritage/chef-quessi.jpg" },
        alex: { name: "أليكس — الشيف", text: "حرفية ونار ثابتة.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "كلوزا غونشالفِس — الأم وحافظة الوصفات", text: "حكايات ووصفات تتوارثها الأجيال.", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "قدور طين يدوية الصنع" },
        { src: "/heritage/panela-artesanal.jpg", caption: "صناعة تقليدية" },
      ],
    },
    wood: { title: "موقد الحطب", p1: "من الأرياف البرازيلية: أخشاب مناسبة وجمر ثابت وصبر.", p2: "نُكرّم هذا الإرث بعنايةٍ بالمكوّن.", imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"] },
    gallery: { title: "المعرض" },
    support: { title: "الدعم", items: ["الطلبات والحجوزات قريبًا", "الفعاليات والولائم", "شراكات"], contactTitle: "التواصل", phone: "974 3047 5279", email: "restaurant@paneladebarroqatar.com" },
    location: { title: "الموقع", addr: "باراها تاون — الدوحة، قطر", map: "افتح الخريطة" },
    immersiveLabels: { amazonia: "الأمازون", cerrado: "السِّيرادو", lencois: "لِنسويس", litoral: "الساحل", serra: "الجبال" },
    drawer: { menu: "القائمة", social: "التواصل الاجتماعي", languages: "اللغات", close: "إغلاق" },
  },
};

// util de texto
const t = (lang, key, fallback = "") => {
  const value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* ===================================================
   Dados de Home e Imersões
   =================================================== */
const heroImage = "/images/picanha-grelhada.jpg";

const highlights = [
  { label: "Fraldinha Inteira", src: "/images/fraldinha-inteira.jpg" },
  { label: "Galinhada Caipira", src: "/images/galinhada-caipira.jpg" },
  { label: "Rubacão", src: "/images/rubacao.jpg" },
  { label: "Pão de Queijo da Casa", src: "/images/pao-de-queijo.jpg" },
];

const immersions = [
  { key: "amazonia", src: "/immersive/amazonia.jpg" },
  { key: "cerrado", src: "/immersive/cerrado.jpg" },
  { key: "lencois", src: "/immersive/lencois.jpg" },
  { key: "litoral", src: "/immersive/litoral.jpg" },
  { key: "serra", src: "/immersive/serra.jpg" },
];

/* ===================================================
   MENU — lista base (PT) + traduções EN/AR por item
   =================================================== */
const MENU_ITEMS = [
  { id: "picanha", name: "Picanha Grelhada", desc: "Picanha na brasa, ponto perfeito e suculência.", img: "/images/picanha-grelhada.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "fraldinha", name: "Fraldinha Inteira", desc: "Corte macio servido na tábua, perfeito para compartilhar.", img: "/images/fraldinha-inteira.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "vaca-atolada", name: "Vaca Atolada (Ossobuco)", desc: "Ossobuco com polenta cremosa e rúcula cítrica.", img: "/images/vaca-atolada.jpg", tags: ["Halal","Beef","Gluten","Dairy"], cat: "mains" },
  { id: "feijoada-costela", name: "Feijoada de Costela", desc: "Feijão preto com costela, farofa de banana e vinagrete.", img: "/images/feijoada-costela.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "moqueca", name: "Moqueca Baiana", desc: "Peixe no leite de coco, urucum/dendê e coentro.", img: "/images/moqueca-baiana.jpg", tags: ["Halal","Sea","Dairy"], cat: "mains" },
  { id: "galinhada", name: "Galinhada Caipira", desc: "Arroz de quintal, frango dourado e cheiro-verde.", img: "/images/galinhada-caipira.jpg", tags: ["Halal"], cat: "mains" },
  { id: "hamburguer-picanha", name: "Hambúrguer de Picanha", desc: "Blend de picanha, pão macio e queijo.", img: "/images/hamburguer-de-picanha.jpg", tags: ["Halal","Beef","Gluten","Dairy"], cat: "mains" },
  { id: "lasanha-banana", name: "Lasanha de Banana-da-Terra", desc: "Camadas de banana-da-terra, queijo e molho caseiro.", img: "/images/lasanha-banana.jpg", tags: ["Dairy","Gluten"], cat: "mains" },
  { id: "rubacao", name: "Rubacão", desc: "Arroz, feijão verde e queijo coalho — sertão no prato.", img: "/images/rubacao.jpg", tags: ["Dairy"], cat: "mains" },

  { id: "coxinhas-costela", name: "Coxinhas de Costela", desc: "Clássico brasileiro com recheio de costela.", img: "/images/coxinhas-de-costela.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "pasteis", name: "Pastéis Brasileiros", desc: "Pastéis crocantes com recheios variados.", img: "/images/pasteis-brasileiros.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-alho", name: "Pão de Alho", desc: "Pão dourado na brasa com manteiga de alho.", img: "/images/pao-de-alho.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "polenta-frita", name: "Polenta Frita", desc: "Crocante por fora, cremosa por dentro.", img: "/images/polenta-frita.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "mandioca-frita", name: "Mandioca Frita", desc: "Aipim crocante para compartilhar.", img: "/images/mandioca-frita.jpg", tags: [], cat: "appetizers" },
  { id: "farofa-castanha", name: "Farofa de Castanha", desc: "Crocrância e sabor para acompanhar.", img: "/images/farofa-de-castanha.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-queijo", name: "Pão de Queijo da Casa", desc: "Mineiro, quentinho e puxando no queijo.", img: "/images/pao-de-queijo.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },

  { id: "mandioca-real", name: "Mandioca Real", desc: "Bolo cremoso de mandioca com coco.", img: "/images/mandioca-real.jpg", tags: ["Dessert","Dairy","Gluten"], cat: "desserts" },
  { id: "encanto-coco", name: "Encanto de Coco", desc: "Cocada cremosa servida gelada.", img: "/images/encanto-de-coco.jpg", tags: ["Dessert","Dairy"], cat: "desserts" },
  { id: "doce-roca-gelo", name: "Doce da Roça com Gelo", desc: "Docinho de fazenda, servido gelado.", img: "/images/doce-da-roca-com-gelo.jpg", tags: ["Dessert"], cat: "desserts" },
  { id: "pamonha", name: "Pamonha Doce (Sazonal)", desc: "Clássico de milho verde — disponível em épocas de safra.", img: "/images/pamonha.jpg", tags: ["Dessert","Seasonal"], cat: "seasonal" },

  { id: "caipile", name: "Caipilé Clássico", desc: "Refrescante e cítrico.", img: "/images/caipile-classico.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "uva-limao", name: "Uva, Limão & Gelo", desc: "Doce, ácido e gelado.", img: "/images/uva-limao-gelo.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "blueberry-coco", name: "Blueberry & Coco Fizz", desc: "Frutas e coco em borbulhas tropicais.", img: "/images/blueberry-coco-fizz.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "verao-brasil", name: "Verão Brasil", desc: "Notas cítricas e doçura na medida.", img: "/images/verao-brasil.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "amazonia-breeze", name: "Amazon Breeze", desc: "Ervas e frutas da floresta.", img: "/images/amazon-breeze.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "frescor-amazonia", name: "Frescor da Amazônia", desc: "Suco verde aromático.", img: "/images/frescor-da-amazonia.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "pe-de-serra", name: "Pé de Serra", desc: "Rapadura e limão em harmonia.", img: "/images/pe-de-serra.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "sol-do-cerrado", name: "Sol do Cerrado", desc: "Manga e maracujá vibrantes.", img: "/images/sol-do-cerrado.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "vitamina-cerrado", name: "Vitamina do Cerrado", desc: "Cremosa e nutritiva.", img: "/images/vitamina-do-cerrado.jpg", tags: ["Beverage"], cat: "beverages" },
];

const MENU_I18N = {
  en: {
    picanha: { name: "Grilled Picanha", desc: "Char-grilled picanha, perfect doneness and juiciness." },
    fraldinha: { name: "Whole Flank Steak", desc: "Tender cut on the board, great for sharing." },
    "vaca-atolada": { name: "Ossobuco with Creamy Polenta", desc: "Rich ossobuco with citrus arugula." },
    "feijoada-costela": { name: "Beef Rib Feijoada", desc: "Black beans, rib, banana farofa and vinaigrette." },
    moqueca: { name: "Bahian Moqueca", desc: "Fish in coconut milk, annatto/dendê and cilantro." },
    galinhada: { name: "Country Chicken Rice", desc: "Backyard-style rice, golden chicken and herbs." },
    "hamburguer-picanha": { name: "Picanha Burger", desc: "Juicy picanha blend, soft bun and cheese." },
    "lasanha-banana": { name: "Plantain Lasagna", desc: "Layers of plantain, cheese and house sauce." },
    rubacao: { name: "Rubacão", desc: "Rice, green beans and grilled cheese." },

    "coxinhas-costela": { name: "Beef Rib Coxinhas", desc: "Brazilian classic with rib filling." },
    pasteis: { name: "Brazilian Pastéis", desc: "Crispy pastries with assorted fillings." },
    "pao-alho": { name: "Garlic Bread", desc: "Grilled bread with garlic butter." },
    "polenta-frita": { name: "Fried Polenta", desc: "Crispy outside, creamy inside." },
    "mandioca-frita": { name: "Fried Cassava", desc: "Perfect to share." },
    "farofa-castanha": { name: "Chestnut Farofa", desc: "Crunch and flavor to pair." },
    "pao-queijo": { name: "House Pão de Queijo", desc: "Cheesy, fresh from the oven." },

    "mandioca-real": { name: "Royal Cassava Cake", desc: "Creamy cassava cake with coconut." },
    "encanto-coco": { name: "Coconut Delight", desc: "Creamy coconut pudding served cold." },
    "doce-roca-gelo": { name: "Farm Sweet on Ice", desc: "Homestyle sweet, served cold." },
    pamonha: { name: "Sweet Corn Pamonha (Seasonal)", desc: "Green-corn classic — available in harvest season." },

    caipile: { name: "Classic Caipilé", desc: "Refreshing and citrusy." },
    "uva-limao": { name: "Grape, Lime & Ice", desc: "Sweet, tangy and icy." },
    "blueberry-coco": { name: "Blueberry & Coco Fizz", desc: "Bubbles with fruit and coconut." },
    "verao-brasil": { name: "Brazilian Summer", desc: "Citrusy notes with balanced sweetness." },
    "amazonia-breeze": { name: "Amazon Breeze", desc: "Forest herbs and fruits." },
    "frescor-amazonia": { name: "Amazon Fresh", desc: "Aromatic green juice." },
    "pe-de-serra": { name: "Pé de Serra", desc: "Rapadura sugar with lime." },
    "sol-do-cerrado": { name: "Cerrado Sun", desc: "Mango & passion-fruit harmony." },
    "vitamina-cerrado": { name: "Cerrado Smoothie", desc: "Creamy and nourishing." },
  },
  ar: {
    picanha: { name: "بيكانيا مشوية", desc: "بيكانيا على الفحم بدرجة نضج مثالية." },
    fraldinha: { name: "فلانك كامل", desc: "قطعة طرية للتقديم والمشاركة." },
    "vaca-atolada": { name: "عظم الساق مع بولِنتا كريمية", desc: "نكهة غنية مع جرجير حمضي." },
    "feijoada-costela": { name: "فيجوادا ضلع بقر", desc: "فاصولياء سوداء مع ضلع وفاروفا بالموز." },
    moqueca: { name: "موكيكا باهية", desc: "سمك مع حليب جوز الهند وزيت الدندِه." },
    galinhada: { name: "أرز الدجاج الريفي", desc: "دجاج ذهبي مع أعشاب." },
    "hamburguer-picanha": { name: "برغر بيكانيا", desc: "خليط لحم طري مع خبز طري وجبن." },
    "lasanha-banana": { name: "لازانيا الموز البلدي", desc: "طبقات موز وجبن وصلصة." },
    rubacao: { name: "روباكان", desc: "أرز مع فاصولياء خضراء وجبن مشوي." },

    "coxinhas-costela": { name: "كوكسينيا ضلع", desc: "طبق برازيلي محشو بالضلوع." },
    pasteis: { name: "فطائر باستيل", desc: "مقرمشة بحشوات متنوعة." },
    "pao-alho": { name: "خبز بالثوم", desc: "مشوي مع زبدة الثوم." },
    "polenta-frita": { name: "بولِنتا مقلية", desc: "مقرمشة من الخارج كريمية من الداخل." },
    "mandioca-frita": { name: "كسافا مقلية", desc: "مثالية للمشاركة." },
    "farofa-castanha": { name: "فاروٙفا بالبندق", desc: "قرمشة ونكهة مرافقة." },
    "pao-queijo": { name: "خبز جبن منزلي", desc: "ساخن وطري." },

    "mandioca-real": { name: "كيك الكسافا الملكي", desc: "كريمي مع جوز الهند." },
    "encanto-coco": { name: "لذّة جوز الهند", desc: "حلوى كريمية باردة." },
    "doce-roca-gelo": { name: "حلوى ريفية باردة", desc: "حلوى منزلية على الثلج." },
    pamonha: { name: "بامونيا حلوة (موسمية)", desc: "ذرة خضراء — متاحة بموسم الحصاد." },

    caipile: { name: "كايبيلي كلاسيكي", desc: "منعش وحامضي." },
    "uva-limao": { name: "عنب وليمون وثلج", desc: "حلو وحامضي وبارد." },
    "blueberry-coco": { name: "بلو بيري مع جوز الهند فِز", desc: "فقاعات فاكهية بجوز الهند." },
    "verao-brasil": { name: "صيف البرازيل", desc: "نَفَحات حمضية متوازنة." },
    "amazonia-breeze": { name: "نسيم الأمازون", desc: "أعشاب وفواكه الغابة." },
    "frescor-amazonia": { name: "نضارة الأمازون", desc: "عصير أخضر عطِر." },
    "pe-de-serra": { name: "پي دي سيرا", desc: "رابدورا مع ليمون." },
    "sol-do-cerrado": { name: "شمس السيرادو", desc: "مانغا وماراكويا." },
    "vitamina-cerrado": { name: "سموثي السيرادو", desc: "كريمي ومغذٍ." },
  },
};

const menuT = (lang, id, field, fallback) => {
  const pack = MENU_I18N[lang] && MENU_I18N[lang][id];
  const val = pack ? pack[field] : undefined;
  return typeof val === "string" ? val : fallback;
};

/* =============================
   Navegação por hash simples
   ============================= */
const useHashRoute = () => {
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.hash.replace("#/", "") || "home" : "home"
  );
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return [route, (r) => (window.location.hash = `#/${r}`)];
};

/* =============================
   Componentes básicos
   ============================= */
const SectionTitle = ({ children }) => <h2 className="title">{children}</h2>;
const Card = ({ children, style }) => <div className="card" style={style}>{children}</div>;
const Img = ({ src, alt, ratio = "16/9", round = true }) => (
  <div className={`imgwrap ${round ? "round" : ""}`} style={{ aspectRatio: ratio }}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

const Carousel = ({ items, renderItem, auto = 5000 }) => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  useEffect(() => { if (!auto) return; const id = setInterval(next, auto); return () => clearInterval(id); }, [auto, items.length]);
  return (
    <div className="carousel">
      <button className="cbtn left" onClick={prev} aria-label="prev">‹</button>
      <div className="cinner">{renderItem(items[i], i)}</div>
      <button className="cbtn right" onClick={next} aria-label="next">›</button>
    </div>
  );
};

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="modalbg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modalhead">
          <div className="modaltitle">{title}</div>
          <button className="close" onClick={onClose} aria-label="close">×</button>
        </div>
        <div className="modalbody">{children}</div>
      </div>
    </div>
  );
};

/* =============================
   Drawer (menu lateral)
   ============================= */
const Drawer = ({ open, onClose, lang, setLang }) => {
  const go = (to) => { window.location.hash = `#/${to}`; onClose(); };
  return (
    <div className={`drawerWrap ${open ? "open" : ""}`} onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawerhead">
          <div className="dbrand">
            <img src="/logo.png" alt="logo" />
            <span>Panela de Barro</span>
          </div>
          <button className="dclose" onClick={onClose} aria-label="close">×</button>
        </div>

        <nav className="dlinks">
          <button onClick={() => go("about")}>{t(lang,"nav.about")}</button>
          <button onClick={() => go("menu")}>{t(lang,"nav.menu")}</button>
          <button onClick={() => go("gallery")}>{t(lang,"nav.gallery")}</button>
          <button onClick={() => go("wood")}>{t(lang,"nav.woodfire")}</button>
          <button onClick={() => go("location")}>{t(lang,"nav.location")}</button>
          <button onClick={() => go("support")}>{t(lang,"nav.support")}</button>
        </nav>

        <div className="dsection">
          <div className="dtitle">{t(lang,"drawer.languages","Idiomas")}</div>
          <div className="dlangs">
            {LANGS.map((l) => (
              <button key={l} className={`chip ${l===lang?"active":""}`} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>

        <div className="dsection">
          <div className="dtitle">{t(lang,"drawer.social","Redes sociais")}</div>
          <div className="dsocial">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="TikTok">TikTok</a>
          </div>
        </div>
      </aside>
    </div>
  );
};

/* =============================
   Páginas
   ============================= */
const Home = ({ lang }) => (
  <>
    <div className="hero">
      <Img src={heroImage} alt="Picanha" ratio="21/9" />
      <div className="herooverlay" />
      <div className="heroinfo">
        <h1>{t(lang,"hero.title","Sabores brasileiros, calor de família")}</h1>
        <p className="sub">{t(lang,"hero.subtitle","Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.")}</p>
        <p className="soon">{t(lang,"hero.soon","Inauguração em Novembro — reservas online em breve.")}</p>
        <a className="btn" href="#/menu">{t(lang,"hero.cta","Ver Menu")}</a>
      </div>
    </div>

    <SectionTitle>{t(lang,"sections.menuHighlights","Destaques do Menu")}</SectionTitle>
    <Carousel
      items={highlights}
      renderItem={(item) => (
        <Card>
          <Img src={item.src} alt={item.label} ratio="16/9" />
          <div className="caption">{item.label}</div>
        </Card>
      )}
      auto={4500}
    />

    <SectionTitle>{t(lang,"sections.immersive","Imersões do Brasil")}</SectionTitle>
    <Carousel
      items={immersions}
      renderItem={(item) => (
        <Card>
          <Img src={item.src} alt={item.key} ratio="16/9" />
          <div className="caption">{t(lang,`immersiveLabels.${item.key}`, item.key)}</div>
        </Card>
      )}
      auto={5200}
    />
  </>
);

const Menu = ({ lang }) => {
  const tabs = useMemo(() => ([
    { key: "all", label: t(lang,"menu.tabs.all","Todos") },
    { key: "mains", label: t(lang,"menu.tabs.mains","Pratos") },
    { key: "appetizers", label: t(lang,"menu.tabs.appetizers","Entradas") },
    { key: "seasonal", label: t(lang,"menu.tabs.seasonal","Sazonais") },
    { key: "beverages", label: t(lang,"menu.tabs.beverages","Bebidas") },
    { key: "desserts", label: t(lang,"menu.tabs.desserts","Sobremesas") },
  ]), [lang]);

  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null);

  const filtered = tab === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.cat === tab);

  return (
    <>
      <SectionTitle>{t(lang,"menu.title","Menu")}</SectionTitle>

      {/* Abas sticky */}
      <div className="tabs sticky">
        {tabs.map(tb => (
          <button key={tb.key} className={`chip ${tab===tb.key?"active":""}`} onClick={() => setTab(tb.key)}>
            {tb.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((item) => {
          const name = menuT(lang, item.id, "name", item.name);
          const desc = menuT(lang, item.id, "desc", item.desc);
          return (
            <Card key={item.id} style={{ paddingBottom: 12 }}>
              <button className="cardbtn" onClick={() => setOpen({ ...item, name, desc })}>
                <Img src={item.img} alt={name} ratio="16/9" />
                <div className="cardtitle">{name}</div>
                <div className="carddesc">{desc}</div>
                <div className="tags">
                  {item.tags.map((tg) => (
                    <span className="tag" key={tg}>{t(lang,`menu.tags.${tg}`,tg)}</span>
                  ))}
                </div>
              </button>
            </Card>
          );
        })}
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={open ? open.name : ""}>
        {open && (
          <>
            <Img src={open.img} alt={open.name} ratio="16/9" />
            <p className="mdesc">{open.desc}</p>
            <div className="tags" style={{marginTop:8}}>
              {open.tags.map((tg) => (
                <span className="tag" key={tg}>{t(lang,`menu.tags.${tg}`,tg)}</span>
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

const About = ({ lang }) => {
  const d = dict[lang].about;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <p className="p">{d.p1}</p>
      <p className="p">{d.p2}</p>
      <p className="p">{d.p3}</p>

      <h3 className="subtitle">{d.family}</h3>
      <div className="familygrid">
        {Object.values(d.people).map((p) => (
          <Card key={p.name}>
            <Img src={p.img} alt={p.name} ratio="1/1" />
            <div className="cardtitle">{p.name}</div>
            <div className="carddesc">{p.text}</div>
          </Card>
        ))}
      </div>

      <div className="grid2">
        {d.heritageImgs.map((h, i) => (
          <Card key={i}>
            <Img src={h.src} alt={h.caption} ratio="16/9" />
            <div className="caption">{h.caption}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

const WoodFire = ({ lang }) => {
  const d = dict[lang].wood;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <p className="p">{d.p1}</p>
      <p className="p">{d.p2}</p>
      <div className="grid3">
        {d.imgs.map((src, i) => (
          <Card key={i}><Img src={src} alt={`wood-${i}`} ratio="1/1" /></Card>
        ))}
      </div>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

const Gallery = ({ lang }) => {
  const photos = MENU_ITEMS.map(i => ({ src: i.img, alt: i.name }));
  return (
    <>
      <SectionTitle>{t(lang,"gallery.title","Galeria")}</SectionTitle>
      <div className="gallery">
        {photos.map((p, i) => (
          <Card key={i}><Img src={p.src} alt={p.alt} ratio="1/1" /></Card>
        ))}
      </div>
    </>
  );
};

const Location = ({ lang }) => {
  const d = dict[lang].location;
  const mapsQ = encodeURIComponent(d.addr);
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <Card>
        <div className="mapwrap">
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="p">
          {d.addr} —{" "}
          <a className="link" href={`https://maps.google.com/?q=${mapsQ}`} target="_blank" rel="noreferrer">
            {d.map}
          </a>
        </p>
      </Card>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

const Support = ({ lang }) => {
  const d = dict[lang].support;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <ul className="list">
        {d.items.map((it, i) => (<li key={i}>{it}</li>))}
      </ul>
      <h3 className="subtitle">{d.contactTitle}</h3>
      <p className="p">WhatsApp: <a className="link" href="https://wa.me/97430475279">+{d.phone}</a></p>
      <p className="p">Email: <a className="link" href="mailto:restaurant@paneladebarroqatar.com">{d.email}</a></p>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

/* =============================
   App (nav, splash, rotas)
   ============================= */
const App = () => {
  const [route] = useHashRoute();
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });
  const [splash, setSplash] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => { const t = setTimeout(() => setSplash(false), 1100); return () => clearTimeout(t); }, []);
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  useEffect(() => { setOpenDrawer(false); }, [route]); // fecha drawer ao mudar rota

  // mede a altura real do header e salva em --navh (corrige sticky em PT/EN no mobile)
  useEffect(() => {
    const setNavHeight = () => {
      const el = document.querySelector('.nav');
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--navh', `${h}px`);
    };
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, [lang]);

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Styles />
      {splash && <div className="splash"><img src="/logo.png" alt="Panela de Barro" /></div>}

      <header className="nav">
        <button className="hamb" onClick={() => setOpenDrawer(true)} aria-label="menu">☰</button>
        <a className="brand" href="#/home">
          <img src="/logo.png" alt="logo" />
          <span>{t(lang,"brand","Panela de Barro")}</span>
        </a>
        <nav className="links">
          <a href="#/about">{t(lang,"nav.about","Sobre")}</a>
          <a href="#/menu">{t(lang,"nav.menu","Menu")}</a>
          <a href="#/gallery">{t(lang,"nav.gallery","Galeria")}</a>
          <a href="#/wood">{t(lang,"nav.woodfire","Fogão a Lenha")}</a>
          <a href="#/location">{t(lang,"nav.location","Localização")}</a>
          <a href="#/support">{t(lang,"nav.support","Suporte")}</a>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`chip ${l===lang?"active":""}`}>{l.toUpperCase()}</button>
          ))}
        </div>
      </header>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} lang={lang} setLang={setLang} />

      <main className="container">
        {route === "home" && <Home lang={lang} />}
        {route === "about" && <About lang={lang} />}
        {route === "menu" && <Menu lang={lang} />}
        {route === "gallery" && <Gallery lang={lang} />}
        {route === "wood" && <WoodFire lang={lang} />}
        {route === "location" && <Location lang={lang} />}
        {route === "support" && <Support lang={lang} />}
      </main>

      <footer className="foot">© 2025 Panela de Barro</footer>
    </div>
  );
};

/* =============================
   CSS embutido (responsivo)
   ============================= */
const Styles = () => (
  <style>{`
  :root{
    --bg:#f0e2cf; --paper:#f6eadb; --ink:#2d241c; --muted:#7b6a5c;
    --pill:#b8644e; --pill-ghost:#e7d6c5; --shadow: 0 8px 24px rgba(0,0,0,.08);
    --radius:18px; --navh:64px;
    --safeTop: env(safe-area-inset-top, 0px);
  }
  *{box-sizing:border-box}
  body,html,#root{height:100%}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Noto Sans",sans-serif}
  a{color:var(--pill)}
  .app{min-height:100%}

  /* Nav */
  .nav{
    position:sticky; top:0; z-index:30;
    background:rgba(246,234,219,.88);
    backdrop-filter:saturate(140%) blur(8px);
    display:flex; gap:16px; align-items:center; justify-content:space-between;
    padding: calc(8px + var(--safeTop)) 14px 8px 14px; /* respeita a área segura do iPhone */
    border-bottom:1px solid #e5d5c2; 
    min-height:64px; /* o valor real é medido em runtime e aplicado em --navh */
  }
  .hamb{display:none;border:0;background:var(--pill-ghost);width:40px;height:36px;border-radius:10px;font-size:20px;cursor:pointer}
  .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-weight:800}
  .brand img{width:28px;height:28px}
  .brand span{font-size:20px;letter-spacing:.2px;white-space:nowrap} /* "Panela de Barro" sempre em uma linha */
  .links a{margin:0 10px;text-decoration:none;color:var(--ink)}
  .langs .chip{margin-left:6px}

  /* Desktop vs mobile */
  @media (max-width:920px){
    .links{display:none !important;} /* esconde links no celular */
    .hamb{display:inline-block}

    /* Centraliza a marca no cabeçalho, logo maior */
    .brand{flex:1;min-width:0;justify-content:center}
    .brand img{width:34px;height:34px}
    .brand span{font-size:clamp(18px,5.2vw,22px);white-space:nowrap}

    /* Idiomas na direita em coluna, menores */
    .langs{display:flex;flex-direction:column;gap:6px;align-items:flex-end;margin-left:6px}
    .langs .chip{padding:6px 10px;font-size:12px;margin:0}
  }

  .container{max-width:1100px;margin:0 auto;padding:18px}

  .title{font-size:32px;margin:26px 6px}
  .subtitle{margin:10px 6px 12px 6px}

  .card{background:var(--paper);border-radius:var(--radius);box-shadow:var(--shadow);padding:10px}
  .imgwrap{width:100%;overflow:hidden}
  .imgwrap.round{border-radius:var(--radius)}
  .imgwrap img{width:100%;height:100%;object-fit:cover;display:block}

  .caption{padding:8px 10px 10px 10px;color:var(--ink);font-weight:600}
  .p{margin:8px 6px 12px 6px;line-height:1.65;color:var(--ink)}
  .list{margin:0 6px 18px 28px}
  .link{color:var(--pill);text-decoration:underline}

  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
  .grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
  .grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
  @media (max-width:720px){ .grid2{grid-template-columns:1fr} .grid3{grid-template-columns:1fr 1fr} }
  .familygrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}

  .tabs{display:flex;flex-wrap:wrap;gap:10px;margin:6px}
  .tabs.sticky{
    position:-webkit-sticky; /* iOS Safari */
    position:sticky;
    top: calc(var(--safeTop) + var(--navh) + 6px); /* usa altura real medida no JS */
    z-index:20;
    background:linear-gradient(#f6eadb,#f6eadb);
    padding:8px 6px;border-radius:14px;box-shadow:var(--shadow)
  }
  .chip{border:0;background:var(--pill-ghost);color:var(--ink);padding:8px 14px;border-radius:999px;cursor:pointer}
  .chip.active{background:var(--pill);color:#fff}

  .cardbtn{all:unset;display:block;cursor:pointer}
  .cardtitle{font-weight:800;font-size:18px;margin:8px 6px 4px}
  .carddesc{color:var(--muted);margin:0 6px 8px}
  .tags{display:flex;gap:6px;flex-wrap:wrap;margin:0 6px 6px}
  .tag{background:#eee;border-radius:999px;padding:4px 8px;font-size:12px;color:#5a4b3f}

  /* Hero */
  .hero{position:relative}
  .hero .imgwrap{border-radius:var(--radius)}
  .herooverlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.25),rgba(0,0,0,.45));border-radius:var(--radius)}
  .heroinfo{position:absolute;inset:auto 18px 18px 18px;color:#fff}
  .heroinfo h1{font-size:clamp(22px,3.6vw,40px);margin:0 0 8px 0}
  .heroinfo .sub{margin:0 0 6px 0;max-width:820px}
  .heroinfo .soon{opacity:.95;margin:0 0 10px 0}
  .btn{display:inline-block;background:var(--pill);color:#fff;text-decoration:none;padding:12px 18px;border-radius:14px;font-weight:700}

  /* HERO mobile legível */
  @media (max-width: 480px) {
    .hero .imgwrap { height: 58vh !important; aspect-ratio: auto !important; }
    .hero img { object-fit: cover; object-position: center; }
    .herooverlay {
      background: linear-gradient(180deg, rgba(0,0,0,0.05) 12%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.62) 100%);
    }
    .heroinfo { left: 16px; right: 16px; bottom: 18px; top: auto; transform: none; gap: 8px; padding: 0; max-width: 100%; }
    .heroinfo h1 { font-size: clamp(20px, 6vw, 26px); line-height: 1.2; margin: 0; }
    .heroinfo .sub { font-size: clamp(13px, 3.8vw, 15px); line-height: 1.35; margin: 0; }
    .heroinfo .soon { font-size: clamp(12px, 3.5vw, 14px); line-height: 1.35; }
    .heroinfo .btn { padding: 10px 16px; font-size: 14px; border-radius: 14px; }
  }

  /* Carousel */
  .carousel{position:relative;margin:12px 6px}
  .cinner{overflow:hidden}
  .cbtn{position:absolute;top:50%;transform:translateY(-50%);border:0;background:rgba(0,0,0,.35);color:#fff;width:40px;height:40px;border-radius:50%;cursor:pointer}
  .cbtn.left{left:8px}.cbtn.right{right:8px}

  /* Modal */
  .modalbg{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:18px;z-index:50}
  .modal{background:#fff;color:#111;border-radius:18px;max-width:820px;width:100%;box-shadow:var(--shadow);max-height:85vh;display:flex;flex-direction:column}
  .modalhead{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #eee}
  .modaltitle{font-weight:800}
  .close{border:0;background:#eee;border-radius:10px;width:36px;height:32px;cursor:pointer}
  .modalbody{padding:12px 14px;overflow:auto}
  .modalbody .imgwrap{margin-bottom:10px}
  .mdesc{margin:6px 2px 10px 2px}

  /* Gallery */
  .gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}

  /* Map */
  .mapwrap{position:relative;width:100%;aspect-ratio:16/9;border-radius:14px;overflow:hidden}
  .mapwrap iframe{position:absolute;inset:0;border:0;width:100%;height:100%}

  .back{display:inline-block;margin:14px 6px 0;color:var(--pill);text-decoration:none;font-weight:700}

  .foot{padding:30px 18px;color:#7a6b5c;text-align:center}

  /* Splash (logo ao abrir) */
  .splash{position:fixed;inset:0;background:var(--bg);display:flex;align-items:center;justify-content:center;z-index:100}
  .splash img{width:72px;height:72px;filter:drop-shadow(0 6px 18px rgba(0,0,0,.18))}

  /* Drawer */
  .drawerWrap{position:fixed;inset:0;background:rgba(0,0,0,.25);opacity:0;pointer-events:none;transition:.2s;z-index:60}
  .drawerWrap.open{opacity:1;pointer-events:auto}
  .drawer{position:absolute;top:0;bottom:0;left:0;width:84%;max-width:360px;background:var(--paper);box-shadow:var(--shadow);transform:translateX(-100%);transition:.22s;border-top-right-radius:16px;border-bottom-right-radius:16px;display:flex;flex-direction:column}
  .drawerWrap.open .drawer{transform:translateX(0)}
  .drawerhead{display:flex;align-items:center;justify-content:space-between;padding:14px;border-bottom:1px solid #e6d7c8}
  .dbrand{display:flex;align-items:center;gap:10px;font-weight:800}
  .dbrand img{width:28px;height:28px}
  .dclose{border:0;background:#eee;border-radius:10px;width:36px;height:32px;cursor:pointer}
  .dlinks{display:flex;flex-direction:column;padding:10px}
  .dlinks button{all:unset;padding:12px 10px;border-radius:10px;cursor:pointer}
  .dlinks button:hover{background:#efdfcf}
  .dsection{padding:10px}
  .dtitle{font-weight:800;margin:8px 0}
  .dlangs{display:flex;gap:8px;flex-wrap:wrap}
  .dsocial{display:flex;gap:12px}
  `}</style>
);

/* =============================
   export
   ============================= */
export default App;
