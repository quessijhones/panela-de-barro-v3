// main/menuData.js
// Todas as imagens devem estar em /public/images com nomes SEM acentos e SEM espaços.

export const categories = {
  all: "All",
  mains: "Mains",
  sides: "Side Dishes",
  desserts: "Desserts",
  drinks: "Beverages",
  seasonal: "Seasonal"
};

export const items = [
  // --- MAINS ---
  {
    id: "vaca-atolada",
    name: {
      en: "Vaca Atolada (Ossobuco)",
      pt: "Vaca Atolada (Ossobuco)",
      ar: "ڤاكا أتولادا (أوسوبوكو)"
    },
    category: "mains",
    image: "/images/vaca-atolada.jpg",
    short: {
      en: "Slow-cooked ossobuco with silky green-corn polenta and citrus arugula.",
      pt: "Ossobuco cozido lentamente com polenta cremosa de milho verde e rúcula cítrica.",
      ar: "أوسوبوكو مطهو ببطء مع بولينتا ذرة خضراء كريمية وجرجير حمضي."
    },
    long: {
      en: "A countryside classic from Minas Gerais: tender beef shank braised to perfection, nestled over a bed of creamy green-corn polenta and served with a refreshing citrus-arugula salad.",
      pt: "Clássico mineiro: músculo bovino cozido lentamente até ficar macio, sobre polenta cremosa de milho verde e salada de rúcula cítrica.",
      ar: "طبق ريفي من ميناس جيرايس: لحم بقر مطهو ببطء حتى يصبح طريًا، مع بولينتا الذرة الخضراء الكريمية وسلطة الجرجير الحمضية."
    }
  },
  {
    id: "feijoada-costela",
    name: {
      en: "Beef Rib Feijoada",
      pt: "Feijoada de Costela",
      ar: "فيجوادا ضلع بقري"
    },
    category: "mains",
    image: "/images/feijoada-costela.jpg",
    short: {
      en: "Rich beef-rib feijoada with banana farofa, orange slices, vinaigrette and rice.",
      pt: "Feijoada de costela com farofa de banana, laranja, vinagrete e arroz.",
      ar: "فيجوادا ضلع بقري مع فاروفا الموز وشرائح البرتقال والصلصة والأرز."
    },
    long: {
      en: "Our signature black beans simmered with succulent beef ribs, served with banana farofa, orange slices, vinaigrette and perfectly seasoned rice.",
      pt: "Feijão preto cozido com suculentas costelas, acompanhado de farofa de banana, laranja, vinagrete e arroz temperado.",
      ar: "فاصوليا سوداء مطهوة مع أضلاع بقري طرية، تقدم مع فاروفا الموز وشرائح البرتقال والصلصة والأرز المتبل."
    }
  },
  {
    id: "picanha",
    name: {
      en: "Grilled Picanha (Chef’s Signature)",
      pt: "Picanha Grelhada (Prato do Chef)",
      ar: "بيكانيا مشوية (توقيع الشيف)"
    },
    category: "mains",
    image: "/images/picanha-grelhada.jpg",
    short: {
      en: "With mushroom risotto, green-corn polenta and peppercorn sauce.",
      pt: "Com risoto de cogumelos, polenta de milho verde e molho de pimenta-do-reino.",
      ar: "مع ريزوتو الفطر وبولينتا الذرة الخضراء وصلصة الفلفل الأسود."
    },
    long: {
      en: "Char-kissed picanha, carved and served with creamy mushroom risotto, delicate green-corn polenta and a fragrant peppercorn sauce.",
      pt: "Picanha selada ao ponto, servida com risoto cremoso de cogumelos, polenta de milho verde e molho perfumado de pimenta-do-reino.",
      ar: "بيكانيا مشوية تقدم مع ريزوتو الفطر الكريمي وبولينتا الذرة الخضراء وصلصة الفلفل العطرية."
    }
  },

  // --- SIDES ---
  {
    id: "mandioca-frita",
    name: { en: "Crispy Cassava Sticks", pt: "Mandioca Frita", ar: "أعواد كاسافا مقرمشة" },
    category: "sides",
    image: "/images/mandioca-frita.jpg",
    short: {
      en: "Golden and crispy cassava.",
      pt: "Palitos dourados e crocantes de mandioca.",
      ar: "كسافا ذهبية مقرمشة."
    },
    long: {
      en: "Hand-cut cassava sticks fried until perfectly crisp outside and soft inside.",
      pt: "Mandioca cortada à mão e frita até ficar crocante por fora e macia por dentro.",
      ar: "أعواد كاسافا مقلية حتى تصبح مقرمشة من الخارج وطرية من الداخل."
    }
  },
  {
    id: "pao-de-queijo",
    name: { en: "Brazilian Cheese Bread", pt: "Pão de Queijo", ar: "خبز الجبن البرازيلي" },
    category: "sides",
    image: "/images/pao-de-queijo.jpg",
    short: {
      en: "Soft and warm, straight from the oven.",
      pt: "Macio e quentinho, saído do forno.",
      ar: "ناعم ودافئ مباشرة من الفرن."
    },
    long: {
      en: "Minas-style cheese puffs made with tapioca — chewy, cheesy and irresistible.",
      pt: "Pãezinhos de queijo à moda mineira, feitos com tapioca — macios e irresistíveis.",
      ar: "خبز جبن على طريقة ميناس باستخدام التابيوكا — مطاطي ولذيذ ولا يقاوم."
    }
  },

  // --- DESSERTS ---
  {
    id: "doce-da-roca",
    name: { en: "Pumpkin & Ice Cream", pt: "Doce da Roça com Gelo", ar: "قرع مع آيس كريم" },
    category: "desserts",
    image: "/images/doce-da-roca-com-gelo.jpg",
    short: {
      en: "Silky spiced pumpkin with vanilla ice cream.",
      pt: "Abóbora cremosa com especiarias e sorvete de baunilha.",
      ar: "قرع كريمي متبل مع آيس كريم الفانيليا."
    },
    long: {
      en: "A countryside favorite reinvented: warm pumpkin compote kissed with spices and topped with artisan vanilla ice cream.",
      pt: "Clássico da roça: doce de abóbora quentinho com especiarias e sorvete artesanal de baunilha.",
      ar: "حلوى ريفية دافئة من اليقطين بالتوابل مع آيس كريم الفانيليا الحرفي."
    }
  },

  // --- DRINKS ---
  {
    id: "sol-do-cerrado",
    name: { en: "Sol do Cerrado", pt: "Sol do Cerrado", ar: "شمس السيرادو" },
    category: "drinks",
    image: "/images/sol-do-cerrado.jpg",
    short: {
      en: "Mango, passion fruit, mint and a citrus touch.",
      pt: "Manga, maracujá, hortelã e toque cítrico.",
      ar: "مانجو مع فاكهة العشق والنعناع ولمسة حمضية."
    },
    long: {
      en: "Tropical and refreshing, inspired by a Brazilian sunset.",
      pt: "Tropical e refrescante, inspirado no pôr do sol brasileiro.",
      ar: "استوائي ومنعش، مستوحى من غروب شمس برازيلي."
    }
  },

  // --- SEASONAL (ex.: pamonha) ---
  {
    id: "pamonha",
    name: { en: "Pamonha Mineira", pt: "Pamonha Mineira", ar: "بامونيا مينيرا" },
    category: "seasonal",
    image: "/images/pamonha.jpg",
    short: {
      en: "Fresh-corn tamale — sweet countryside staple.",
      pt: "Clássico de milho verde — doce, cremoso e da roça.",
      ar: "تامالي من الذرة الخضراء — حلو وكريمي من الريف."
    },
    long: {
      en: "House-made pamonha, wrapped and steamed in the corn husk — celebrating Minas Gerais traditions.",
      pt: "Pamonha da casa, embrulhada e cozida na palha do milho — tradição mineira.",
      ar: "بامونيا منزلية، ملفوفة ومطهية في قشور الذرة — تقليد مينيرو."
    }
  }
];

// ajuda rápida para localizar por categoria
export const byCategory = (cat) =>
  cat === "all" ? items : items.filter((it) => it.category === cat);
