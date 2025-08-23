// src/menuData.js
export const menu = [
  {
    id: "vaca-atolada",
    cat: "mains",
    title: {
      pt: "Vaca Atolada (Ossobuco)",
      en: "Vaca Atolada (Ossobuco)",
      ar: "وزة مطهية (أوسوبوكو)",
    },
    img: "/images/vaca-atolada.jpg",
    short: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Slow-cooked ossobuco with creamy polenta and citrus arugula.",
      ar: "أوسوبوكو مطهو ببطء مع بولينتا كريمية وجرجير بنكهة الحمضيات.",
    },
    long: {
      pt: "Clássico de Minas. Carne macia, polenta de milho verde e vinagrete de rúcula para trazer frescor. Receita de família, fogo baixo e paciência.",
      en: "A Minas Gerais classic. Tender meat, green-corn polenta and a citrus-arugula vinaigrette. Family recipe, low fire and patience.",
      ar: "طبق تقليدي من ميناس جيرايس. لحم طري مع بولينتا الذرة الخضراء وصلصة جرجير حمضية. وصفة عائلية على نار هادئة.",
    },
    badges: ["chef", "mains"],
  },
  {
    id: "feijoada-costela",
    cat: "mains",
    title: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا أضلاع" },
    img: "/images/feijoada-costela.jpg",
    short: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصولياء سوداء مع أضلاع البقر وفاروڤا الموز وصلصة فينيجريت.",
    },
    long: {
      pt: "Feijoada com costela suculenta, acompanhada de arroz, farofa de banana e rodelas de laranja.",
      en: "Feijoada with succulent ribs, served with rice, banana farofa and orange slices.",
      ar: "فيجوادا بأضلاع طرية تُقدّم مع الأرز وفاروڤا الموز وشرائح البرتقال.",
    },
    badges: ["mains"],
  },
  {
    id: "picanha-grelhada",
    cat: "mains",
    title: { pt: "Picanha Grelhada", en: "Grilled Picanha (Chef’s)", ar: "بيكانيا مشوية (طبق الشيف)" },
    img: "/images/picanha-grelhada.jpg",
    short: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta do reino.",
      en: "With mushroom risotto, green-corn polenta and peppercorn sauce.",
      ar: "مع ريزوتو الفطر وبولينتا الذرة الخضراء وصلصة الفلفل.",
    },
    long: {
      pt: "Assinatura da casa. Ponto perfeito, crosta saborosa e acompanhamentos cremosos.",
      en: "House signature: perfect doneness, savory crust and creamy sides.",
      ar: "طبق التوقيع: درجة نضج مثالية وقشرة لذيذة ومرافِقات كريمية.",
    },
    badges: ["chef", "mains"],
  },

  // Sides
  {
    id: "pao-de-queijo",
    cat: "sides",
    title: { pt: "Pão de Queijo", en: "Pão de Queijo", ar: "خبز الجبن البرازيلي" },
    img: "/images/pao-de-queijo.jpg",
    short: {
      pt: "Tradicional, macio e quentinho.",
      en: "Traditional, soft and warm.",
      ar: "تقليدي، طري ودافئ.",
    },
    long: {
      pt: "Receita mineira com queijo curado. Crocante por fora e macio por dentro.",
      en: "Minas-style with aged cheese. Crisp outside, tender inside.",
      ar: "على طريقة ميناس مع جبن معتّق. مقرمش من الخارج وطري من الداخل.",
    },
    badges: ["sides"],
  },
  {
    id: "polenta-frita",
    cat: "sides",
    title: { pt: "Polenta Frita", en: "Fried Polenta Sticks", ar: "أصابع بولينتا مقلية" },
    img: "/images/polenta-frita.jpg",
    short: {
      pt: "Dourada por fora, cremosa por dentro.",
      en: "Golden outside, creamy inside.",
      ar: "ذهبية من الخارج وكريمية من الداخل.",
    },
    long: {
      pt: "Feita com fubá fino. Acompanha molho de pimenta leve.",
      en: "Made with fine cornmeal. Comes with a mild pepper sauce.",
      ar: "مصنوعة بدقيق الذرة الناعم. تُقدّم مع صلصة فلفل خفيفة.",
    },
    badges: ["sides"],
  },

  // Desserts
  {
    id: "encanto-de-coco",
    cat: "desserts",
    title: { pt: "Encanto de Coco", en: "Coconut Flan", ar: "بودينغ جوز الهند" },
    img: "/images/encanto-de-coco.jpg",
    short: {
      pt: "Pudim de coco com caramelo claro.",
      en: "Silky coconut flan with light caramel.",
      ar: "فلان جوز الهند الحريري مع كراميل خفيف.",
    },
    long: {
      pt: "Assado lentamente, textura aveludada, final doce e leve.",
      en: "Slow-baked, velvety texture and a delicate sweet finish.",
      ar: "مخبوز ببطء بقوام مخملي ونهاية حلوة رقيقة.",
    },
    badges: ["desserts"],
  },
  {
    id: "doce-da-roca",
    cat: "desserts",
    title: { pt: "Doce da Roça com Gelo", en: "Country Pumpkin & Ice Cream", ar: "حلوى اليقطين مع الآيس كريم" },
    img: "/images/doce-da-roca-com-gelo.jpg",
    short: {
      pt: "Abóbora cremosa com especiarias e sorvete artesanal.",
      en: "Spiced creamy pumpkin compote with artisan ice cream.",
      ar: "قرع كريمي متبّل مع آيس كريم مصنوع يدوياً.",
    },
    long: {
      pt: "Sobremesa afetiva de interior, morna e perfumada.",
      en: "Warm, aromatic countryside favorite.",
      ar: "حلوى ريفية دافئة وعطرية.",
    },
    badges: ["desserts"],
  },

  // Drinks
  {
    id: "sol-do-cerrado",
    cat: "drinks",
    title: { pt: "Sol do Cerrado", en: "Sun of Cerrado", ar: "شمس السيرادو" },
    img: "/images/sol-do-cerrado.jpg",
    short: {
      pt: "Manga com maracujá, hortelã e toque cítrico.",
      en: "Mango, passion fruit, mint and a citrus touch.",
      ar: "مانجو وباشن فروت ونعناع ولمسة حمضية.",
    },
    long: {
      pt: "Refrescante como um pôr do sol no Brasil.",
      en: "Refreshing like a Brazilian sunset.",
      ar: "منعش كغروب شمس برازيلي.",
    },
    badges: ["drinks"],
  },
  {
    id: "uva-limao-gelo",
    cat: "drinks",
    title: { pt: "Uva & Limão Gelo", en: "Grape-Lime Ice", ar: "عنب وليمون مثلّج" },
    img: "/images/uva-limao-gelo.jpg",
    short: {
      pt: "Suco de uva integral com limão espremido e hortelã.",
      en: "Pure grape juice with squeezed lime and mint.",
      ar: "عصير عنب طبيعي مع ليمون طازج ونعناع.",
    },
    long: {
      pt: "Vibrante, doce-ácido e muito perfumado.",
      en: "Vibrant, sweet-tart and fragrant.",
      ar: "منعش، متوازن الحلاوة والحموضة وعطِر.",
    },
    badges: ["drinks"],
  },

  // Seasonal (ex.: pamonha)
  {
    id: "pamonha",
    cat: "seasonal",
    title: { pt: "Pamonha (Sazonal)", en: "Pamonha (Seasonal)", ar: "بامونيا (موسمية)" },
    img: "/images/pamonha.jpg",
    short: {
      pt: "Clássico de milho verde – doce ou salgada.",
      en: "Green-corn classic — sweet or savory.",
      ar: "كلاسيك الذرة الخضراء — حلوة أو مالحة.",
    },
    long: {
      pt: "Milho ralado fresco, envolto na palha e cozido. Sabor de roça.",
      en: "Fresh grated corn wrapped in husk and cooked. Pure countryside soul.",
      ar: "ذرة طازجة مبشورة تُلف بالقش وتُطهى. نكهة ريفية أصيلة.",
    },
    badges: ["seasonal"],
  },
];

export const categories = [
  { key: "all", label: { pt: "Todos", en: "All", ar: "الكل" } },
  { key: "mains", label: { pt: "Pratos Principais", en: "Mains", ar: "الأطباق الرئيسية" } },
  { key: "sides", label: { pt: "Acompanhamentos", en: "Side Dishes", ar: "أطباق جانبية" } },
  { key: "desserts", label: { pt: "Sobremesas", en: "Desserts", ar: "حلويات" } },
  { key: "drinks", label: { pt: "Bebidas", en: "Beverages", ar: "مشروبات" } },
  { key: "seasonal", label: { pt: "Sazonal", en: "Seasonal", ar: "موسمي" } },
];