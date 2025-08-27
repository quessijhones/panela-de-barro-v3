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
    nav: {
      about: "Sobre",
      menu: "Menu",
      gallery: "Galeria",
      woodfire: "Fogão a Lenha",
      location: "Localização",
      support: "Suporte",
    },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle:
        "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      soon: "Inauguração em Novembro — reservas online em breve.",
    },
    sections: {
      menuHighlights: "Destaques do Menu",
      immersive: "Imersões do Brasil",
      back: "Voltar ao início",
    },
    menu: {
      title: "Menu",
      tabs: {
        all: "Todos",
        mains: "Pratos",
        appetizers: "Entradas",
        seasonal: "Sazonais",
        beverages: "Bebidas",
        desserts: "Sobremesas",
      },
      modal: { close: "Fechar" },
      tags: {
        Halal: "Halal",
        Beef: "Carne",
        Dairy: "Laticínio",
        Gluten: "Glúten",
        Sea: "Peixe",
        Dessert: "Sobremesa",
        Beverage: "Bebida",
        Seasonal: "Sazonal",
      },
    },
    about: {
      title: "Sobre",
      p1: "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha.",
      p2: "A panela de barro atravessa a nossa história: dos povos indígenas à criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite que os sabores conversem e imprime um toque terroso inconfundível.",
      p3: "Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto — servidos à mesa.",
      family: "Nossa família",
      people: {
        quessi: {
          name: "Quessi Jones — Proprietário",
          text:
            "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho.",
          img: "/heritage/chef-quessi.jpg",
        },
        alex: {
          name: "Alex — Chef de Cozinha",
          text:
            "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo.",
          img: "/heritage/chef-alex.jpg",
        },
        cleusa: {
          name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas",
          text:
            "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração.",
          img: "/heritage/cleusa.jpg",
        },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" },
      ],
    },
    wood: {
      title: "Fogão a Lenha",
      p1:
        "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado.",
      p2:
        "Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente.",
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
    location: {
      title: "Localização",
      addr: "Baraha Town — Doha, Qatar",
      map: "Ver no mapa",
    },
    immersiveLabels: {
      amazonia: "Amazônia",
      cerrado: "Cerrado",
      lencois: "Lençóis",
      litoral: "Litoral",
      serra: "Serra",
    },
    drawer: {
      menu: "Menu",
      social: "Redes sociais",
      languages: "Idiomas",
      close: "Fechar",
    },
  },
  en: {
    brand: "Panela de Barro",
    nav: {
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      woodfire: "Wood-Fired Stove",
      location: "Location",
      support: "Support",
    },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle:
        "Family-run restaurant in Qatar. 20+ years of hospitality, wood fire and Brazilian roots.",
      cta: "View Menu",
      soon: "Opening in November — online reservations soon.",
    },
    sections: {
      menuHighlights: "Menu Highlights",
      immersive: "Brazil Immersions",
      back: "Back to start",
    },
    menu: {
      title: "Menu",
      tabs: {
        all: "All",
        mains: "Mains",
        appetizers: "Appetizers",
        seasonal: "Seasonal",
        beverages: "Beverages",
        desserts: "Desserts",
      },
      modal: { close: "Close" },
      tags: {
        Halal: "Halal",
        Beef: "Beef",
        Dairy: "Dairy",
        Gluten: "Gluten",
        Sea: "Fish",
        Dessert: "Dessert",
        Beverage: "Beverage",
        Seasonal: "Seasonal",
      },
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
    location: {
      title: "Location",
      addr: "Baraha Town — Doha, Qatar",
      map: "Open map",
    },
    immersiveLabels: {
      amazonia: "Amazon",
      cerrado: "Cerrado",
      lencois: "Lençóis",
      litoral: "Coast",
      serra: "Highlands",
    },
    drawer: {
      menu: "Menu",
      social: "Social",
      languages: "Languages",
      close: "Close",
    },
  },
  ar: {
    brand: "بانِيلا دي بارّو",
    nav: {
      about: "نبذة",
      menu: "القائمة",
      gallery: "المعرض",
      woodfire: "موقد الحطب",
      location: "الموقع",
      support: "الدعم",
    },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle:
        "مطعم عائلي في قطر — أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
      cta: "عرض القائمة",
      soon: "الافتتاح في نوفمبر — الحجوزات قريبًا.",
    },
    sections: {
      menuHighlights: "مختارات القائمة",
      immersive: "جولات برازيلية",
      back: "العودة للبداية",
    },
    menu: {
      title: "القائمة",
      tabs: {
        all: "الكل",
        mains: "الأطباق الرئيسية",
        appetizers: "المقبلات",
        seasonal: "موسمية",
        beverages: "المشروبات",
        desserts: "الحلويات",
      },
      modal: { close: "إغلاق" },
      tags: {
        Halal: "حلال",
        Beef: "لحم بقر",
        Dairy: "ألبان",
        Gluten: "غلوتين",
        Sea: "سمك",
        Dessert: "حلوى",
        Beverage: "مشروب",
        Seasonal: "موسمي",
      },
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
    wood: {
      title: "موقد الحطب",
      p1: "من الأرياف البرازيلية: أخشاب مناسبة وجمر ثابت وصبر.",
      p2: "نُكرّم هذا الإرث بعنايةٍ بالمكوّن.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
    },
    gallery: { title: "المعرض" },
    support: {
      title: "الدعم",
      items: ["الطلبات والحجوزات قريبًا", "الفعاليات والولائم", "شراكات"],
      contactTitle: "التواصل",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: {
      title: "الموقع",
      addr: "باراها تاون — الدوحة، قطر",
      map: "افتح الخريطة",
    },
    immersiveLabels: {
      amazonia: "الأمازون",
      cerrado: "السِّيرادو",
      lencois: "لِنسويس",
      litoral: "الساحل",
      serra: "الجبال",
    },
    drawer: {
      menu: "القائمة",
      social: "التواصل الاجتماعي",
      languages: "اللغات",
      close: "إغلاق",
    },
  },
};

// util de texto
const t = (lang, key, fallback = "") => {
  const value = key
    .split(".")
    .reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* ===================================================
   Dados de Home (carrosséis) e Imersões do Brasil
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
  // MAINS
  { id: "picanha", name: "Picanha Grelhada", desc: "Picanha na brasa, ponto perfeito e suculência.", img: "/images/picanha-grelhada.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "fraldinha", name: "Fraldinha Inteira", desc: "Corte macio servido na tábua, perfeito para compartilhar.", img: "/images/fraldinha-inteira.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "vaca-atolada", name: "Vaca Atolada (Ossobuco)", desc: "Ossobuco com polenta cremosa e rúcula cítrica.", img: "/images/vaca-atolada.jpg", tags: ["Halal","Beef","Gluten","Dairy"], cat: "mains" },
  { id: "feijoada-costela", name: "Feijoada de Costela", desc: "Feijão preto com costela, farofa de banana e vinagrete.", img: "/images/feijoada-costela.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "moqueca", name: "Moqueca Baiana", desc: "Peixe no leite de coco, urucum/dendê e coentro.", img: "/images/moqueca-baiana.jpg", tags: ["Halal","Sea","Dairy"], cat: "mains" },
  { id: "galinhada", name: "Galinhada Caipira", desc: "Arroz de quintal, frango dourado e cheiro-verde.", img: "/images/galinhada-caipira.jpg", tags: ["Halal"], cat: "mains" },
  { id: "hamburguer-picanha", name: "Hambúrguer de Picanha", desc: "Blend de picanha, pão macio e queijo.", img: "/images/hamburguer-de-picanha.jpg", tags: ["Halal","Beef","Gluten","Dairy"], cat: "mains" },
  { id: "lasanha-banana", name: "Lasanha de Banana-da-Terra", desc: "Camadas de banana-da-terra, queijo e molho caseiro.", img: "/images/lasanha-banana.jpg", tags: ["Dairy","Gluten"], cat: "mains" },
  { id: "rubacao", name: "Rubacão", desc: "Arroz, feijão verde e queijo coalho — sertão no prato.", img: "/images/rubacao.jpg", tags: ["Dairy"], cat: "mains" },

  // APPETIZERS
  { id: "coxinhas-costela", name: "Coxinhas de Costela", desc: "Clássico brasileiro com recheio de costela.", img: "/images/coxinhas-de-costela.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "pasteis", name: "Pastéis Brasileiros", desc: "Pastéis crocantes com recheios variados.", img: "/images/pasteis-brasileiros.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-alho", name: "Pão de Alho", desc: "Pão dourado na brasa com manteiga de alho.", img: "/images/pao-de-alho.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "polenta-frita", name: "Polenta Frita", desc: "Crocante por fora, cremosa por dentro.", img: "/images/polenta-frita.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "mandioca-frita", name: "Mandioca Frita", desc: "Aipim crocante para compartilhar.", img: "/images/mandioca-frita.jpg", tags: [], cat: "appetizers" },
  { id: "farofa-castanha", name: "Farofa de Castanha", desc: "Crocrância e sabor para acompanhar.", img: "/images/farofa-de-castanha.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-queijo", name: "Pão de Queijo da Casa", desc: "Mineiro, quentinho e puxando no queijo.", img: "/images/pao-de-queijo.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },

  // DESSERTS
  { id: "mandioca-real", name: "Mandioca Real", desc: "Bolo cremoso de mandioca com coco.", img: "/images/mandioca-real.jpg", tags: ["Dessert","Dairy","Gluten"], cat: "desserts" },
  { id: "encanto-coco", name: "Encanto de Coco", desc: "Cocada cremosa servida gelada.", img: "/images/encanto-de-coco.jpg", tags: ["Dessert","Dairy"], cat: "desserts" },
  { id: "doce-roca-gelo", name: "Doce da Roça com Gelo", desc: "Docinho de fazenda, servido gelado.", img: "/images/doce-da-roca-com-gelo.jpg", tags: ["Dessert"], cat: "desserts" },
  { id: "pamonha", name: "Pamonha Doce (Sazonal)", desc: "Clássico de milho verde — disponível em épocas de safra.", img: "/images/pamonha.jpg", tags: ["Dessert","Seasonal"], cat: "seasonal" },

  // BEVERAGES
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
    typeof window !== "undefined"
      ? window.location.hash.replace("#/", "") || "home"
      : "home"
  );
  useEffect(() => {
    const onChange = () =>
      setRoute(window.location.hash.replace("#/", "") || "home");
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
  const next = () =>