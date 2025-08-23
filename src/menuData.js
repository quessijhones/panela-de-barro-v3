// menuData.js
// ATENÇÃO: imagens servidas a partir de /public, então o caminho público é /images/arquivo.jpg
// Se algum arquivo mudar de nome, é só ajustar o campo "image" correspondente.

export const CATEGORIES = {
  mains: { id: "mains", label: { en: "Mains", pt: "Pratos Principais", ar: "الأطباق الرئيسية" } },
  sides: { id: "sides", label: { en: "Side Dishes", pt: "Acompanhamentos", ar: "الأطباق الجانبية" } },
  desserts: { id: "desserts", label: { en: "Desserts", pt: "Sobremesas", ar: "الحلويات" } },
  beverages: { id: "beverages", label: { en: "Beverages", pt: "Bebidas", ar: "المشروبات" } },
  seasonal: { id: "seasonal", label: { en: "Seasonal", pt: "Sazonal", ar: "موسمي" } },
};

// Helper para fallback elegante se uma imagem quebrar
export const PLACEHOLDER = "/images/placeholder.jpg";

export const MENU = [
  // --------- MAINS ---------
  {
    id: "vaca-atolada",
    category: "mains",
    title: { en: "Vaca Atolada (Ossobuco)", pt: "Vaca Atolada (Ossobuco)", ar: "ڤاكا أتولادا" },
    short: {
      en: "Slow-cooked ossobuco with silky green-corn polenta and citrus arugula.",
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      ar: "عظم عجل مطهو ببطء مع بولينتا كريمية وجرجير حمضي.",
    },
    long: {
      en: "A Minas Gerais classic: fork-tender ossobuco simmered low and slow, served with creamy green-corn polenta and a bright arugula salad.",
      pt: "Clássico de Minas: ossobuco macio cozido lentamente, servido com polenta cremosa de milho verde e salada de rúcula cítrica.",
      ar: "طبق مينيرو كلاسيكي بطبخ العظم على نار هادئة مع بولينتا الذرة الخضراء وسلطة جرجير منعشة.",
    },
    // nome REAL do arquivo na sua pasta
    image: "/images/vaca-atolada.jpg",
    badge: "Mains",
  },
  {
    id: "feijoada-de-costela",
    category: "mains",
    title: { en: "Beef Rib Feijoada", pt: "Feijoada de Costela", ar: "فيجوادا ضلع بقري" },
    short: {
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      ar: "فاصوليا سوداء مع ضلوع البقر وفاروفا بالموز وفينجريت.",
    },
    long: {
      en: "A hearty regional take on Brazil’s beloved stew, slow-cooked with ribs and served with classic sides.",
      pt: "Versão farta do clássico brasileiro, cozida lentamente com costela e acompanhamentos tradicionais.",
      ar: "طبق غني مطهو ببطء مع ضلوع ولوازم برازيلية تقليدية.",
    },
    // ATENÇÃO: seu arquivo é feijoada-costela.jpg (sem “de”)
    image: "/images/feijoada-costela.jpg",
    badge: "Mains",
  },
  {
    id: "picanha-grelhada",
    category: "mains",
    title: { en: "Grilled Picanha (Chef’s Signature)", pt: "Picanha Grelhada (Prato do Chef)", ar: "بيكانيا مشوية (توقيع الشيف)" },
    short: {
      en: "With mushroom risotto, green-corn polenta and peppercorn sauce.",
      pt: "Com risoto de cogumelos, polenta de milho verde e molho de pimenta-do-reino.",
      ar: "مع ريزوتو الفطر وبولينتا الذرة الخضراء وصلصة الفلفل.",
    },
    long: {
      en: "Our signature cut grilled for a smoky crust and juicy center, paired with earthy risotto and velvety polenta.",
      pt: "Nosso corte assinatura, grelhado ao ponto, com risoto terroso e polenta aveludada.",
      ar: "قطعة توقيعنا مشوية بعناية تقدم مع ريزوتو غني وبولينتا ناعمة.",
    },
    image: "/images/picanha-grelhada.jpg",
    badge: "Chef’s",
  },

  // --------- SIDES ---------
  {
    id: "pao-de-queijo",
    category: "sides",
    title: { en: "Pão de Queijo", pt: "Pão de Queijo", ar: "خبز الجبن البرازيلي" },
    short: {
      en: "Traditional Brazilian cheese bread, soft and warm.",
      pt: "Tradicional pão de queijo brasileiro, macio e quentinho.",
      ar: "خبز الجبن البرازيلي التقليدي، طري ودافئ.",
    },
    long: {
      en: "Baked fresh with Minas cheese for an airy, chewy bite.",
      pt: "Assado na hora com queijo mineiro para uma mordida leve e elástica.",
      ar: "يخبز طازجًا بجبنة ميناس لقوام هوائي مطاطي.",
    },
    image: "/images/pao-de-queijo.jpg",
    badge: "Side",
  },
  {
    id: "polenta-frita",
    category: "sides",
    title: { en: "Polenta Frita", pt: "Polenta Frita", ar: "بولينتا مقلية" },
    short: {
      en: "Golden cornmeal sticks — crisp outside, creamy inside.",
      pt: "Palitos dourados de fubá — crocantes por fora, cremosos por dentro.",
      ar: "عيدان دقيق الذرة ذهبية — مقرمشة من الخارج وكريمية من الداخل.",
    },
    long: {
      en: "A countryside favorite to dip, share and crave.",
      pt: "Queridinha da roça para mergulhar, compartilhar e desejar sempre.",
      ar: "مفضلة ريفية مثالية للمشاركة.",
    },
    image: "/images/polenta-frita.jpg",
    badge: "Side",
  },
  {
    id: "pao-de-alho",
    category: "sides",
    title: { en: "Pão de Alho", pt: "Pão de Alho", ar: "خبز بالثوم" },
    short: {
      en: "Crunchy bread with garlic cream and herbs.",
      pt: "Pão crocante com creme de alho e ervas.",
      ar: "خبز مقرمش بكريمة الثوم والأعشاب.",
    },
    long: {
      en: "Char-toasted and brushed with buttery garlic.",
      pt: "Tostado na brasa e pincelado com alho amanteigado.",
      ar: "يُحمّص على الجمر ويُدهن بزبدة الثوم.",
    },
    image: "/images/pao-de-alho.jpg",
    badge: "Side",
  },

  // --------- DESSERTS ---------
  {
    id: "encanto-de-coco",
    category: "desserts",
    title: { en: "Encanto de Coco", pt: "Encanto de Coco", ar: "سحر جوز الهند" },
    short: {
      en: "Silky coconut flan with golden caramel.",
      pt: "Pudim aveludado de coco com caramelo dourado.",
      ar: "بودينغ جوز هند حريري مع كاراميل ذهبي.",
    },
    long: {
      en: "A delicate twist on a beloved classic—slow baked for a satiny finish.",
      pt: "Leve e clássico — assado lentamente para acabamento sedoso.",
      ar: "لمسة رقيقة على كلاسيك محبوب — يخبز ببطء لقوام مخملي.",
    },
    image: "/images/encanto-de-coco.jpg",
    badge: "Dessert",
  },
  {
    id: "doce-da-roca-com-gelo",
    category: "desserts",
    title: { en: "Doce da Roça com Gelo", pt: "Doce da Roça com Gelo", ar: "حلوى المزرعة مع مثلجات" },
    short: {
      en: "Creamy spiced pumpkin compote, warm, with artisan vanilla ice cream.",
      pt: "Abóbora cremosa com especiarias, servida quente e sorvete artesanal de creme.",
      ar: "قرع كريمي متبّل يقدم دافئًا مع آيس كريم فانيلا حرفي.",
    },
    long: {
      en: "Grandma’s-style comfort finished with cool creaminess.",
      pt: "Conforto de casa de vó com final gelado e cremoso.",
      ar: "دفء منزل الجدّة بلمسة باردة كريمية.",
    },
    image: "/images/doce-da-roca-com-gelo.jpg",
    badge: "Dessert",
  },
  {
    id: "mandioca-real",
    category: "desserts",
    title: { en: "Mandioca Real", pt: "Mandioca Real", ar: "مانديوكا ريال" },
    short: {
      en: "Rustic cassava cake with dulce de leche and crunchy cassava crumble.",
      pt: "Bolo rústico de mandioca com doce de leite e farofinha crocante.",
      ar: "كيكة يوكا ريفية مع دولسي دي ليتشي وقرمشة كاسافا.",
    },
    long: {
      en: "Tradition meets texture — perfect harmony of moist cake and crunch.",
      pt: "Tradição e textura em harmonia perfeita.",
      ar: "تقاليد ونكهات بملمس متناغم.",
    },
    image: "/images/mandioca-real.jpg",
    badge: "Dessert",
  },

  // --------- BEVERAGES ---------
  {
    id: "sol-do-cerrado",
    category: "beverages",
    title: { en: "Sol do Cerrado", pt: "Sol do Cerrado", ar: "شمس السيرادو" },
    short: {
      en: "Mango with passion fruit, mint and citrus touch.",
      pt: "Manga com maracujá, hortelã e toque cítrico.",
      ar: "مانجو مع فاكهة العاطفة ونعناع ولمسة حامضية.",
    },
    long: {
      en: "Refreshing as a Brazilian sunset.",
      pt: "Refrescante como um pôr do sol brasileiro.",
      ar: "منعش كغروب شمس برازيلي.",
    },
    image: "/images/sol-do-cerrado.jpg",
    badge: "Bebidas",
  },
  {
    id: "frescor-da-amazonia",
    category: "beverages",
    title: { en: "Frescor da Amazônia", pt: "Frescor da Amazônia", ar: "انتعاش الأمازون" },
    short: {
      en: "Pineapple blended with mint and lime.",
      pt: "Abacaxi batido com hortelã e limão.",
      ar: "أناناس ممزوج مع نعناع وليمون.",
    },
    long: {
      en: "Tropical and vibrant.",
      pt: "Tropical e vibrante.",
      ar: "استوائي ونابض بالحياة.",
    },
    image: "/images/frescor-da-amazonia.jpg",
    badge: "Bebidas",
  },
  {
    id: "pe-de-serra",
    category: "beverages",
    title: { en: "Pé de Serra", pt: "Pé de Serra", ar: "بي دي سيرا" },
    short: {
      en: "Iced yerba mate with lime, honey and ginger zest.",
      pt: "Chá-mate gelado com limão, mel e raspas de gengibre.",
      ar: "شاي ماتيه مثلج مع ليمون وعسل وبشر زنجبيل.",
    },
    long: {
      en: "Natural energy, smooth and bright.",
      pt: "Energia natural, leve e brilhante.",
      ar: "طاقة طبيعية منعشة.",
    },
    image: "/images/pe-de-serra.jpg",
    badge: "Bebidas",
  },
  {
    id: "caipile-classico",
    category: "beverages",
    title: { en: "Caipilé Clássico (non-alcoholic)", pt: "Caipilé Clássico (sem álcool)", ar: "كايبيلي كلاسيكو (بدون كحول)" },
    short: {
      en: "Lime, ice and sparkling water.",
      pt: "Limão, gelo e água com gás.",
      ar: "ليمون، ثلج وماء فوار.",
    },
    long: {
      en: "The classic Brazilian profile—fresh and zesty.",
      pt: "Clássico brasileiro — fresco e cítrico.",
      ar: "نكهة برازيلية كلاسيكية منعشة.",
    },
    image: "/images/caipile-classico.jpg",
    badge: "Bebidas",
  },
  {
    id: "blueberry-coco-fizz",
    category: "beverages",
    title: { en: "Blueberry & Coco Fizz", pt: "Blueberry & Coco Fizz", ar: "بلوبيري وكوكو فيز" },
    short: {
      en: "Blueberries with coconut milk and a hint of vanilla.",
      pt: "Mirtilo com leite de coco e toque de baunilha.",
      ar: "توت أزرق مع حليب جوز الهند ولمسة فانيلا.",
    },
    long: {
      en: "Creamy, fruity and lightly sparkling.",
      pt: "Cremoso, frutado e levemente frisante.",
      ar: "كريمي وفوّار بخفة.",
    },
    image: "/images/blueberry-coco-fizz.jpg",
    badge: "Bebidas",
  },
  {
    id: "amazon-breeze",
    category: "beverages",
    title: { en: "Amazon Breeze", pt: "Amazon Breeze", ar: "نسيم الأمازون" },
    short: {
      en: "Cupuaçu shake with milk and condensed milk.",
      pt: "Milkshake de cupuaçu com leite e leite condensado.",
      ar: "كوكتيل كوبواسو مع الحليب والحليب المكثف.",
    },
    long: {
      en: "A tropical dessert in a glass.",
      pt: "Uma sobremesa tropical no copo.",
      ar: "حلوى استوائية في كوب.",
    },
    image: "/images/amazon-breeze.jpg",
    badge: "Bebidas",
  },

  // --------- SEASONAL ---------
  {
    id: "pamonha",
    category: "seasonal",
    title: { en: "Pamonha (Seasonal)", pt: "Pamonha (Sazonal)", ar: "بامونيا (موسمية)" },
    short: {
      en: "Fresh sweet-corn pamonha wrapped in husk, steamed to perfection.",
      pt: "Pamonha de milho verde fresca, cozida na palha.",
      ar: "بامونيا من الذرة الخضراء تُطهى في القشرة حتى الكمال.",
    },
    long: {
      en: "Street-fair nostalgia with countryside soul.",
      pt: "Memória de quermesse com alma da roça.",
      ar: "ذكريات مهرجانات الشوارع بروح ريفية.",
    },
    image: "/images/pamonha.jpg",
    badge: "Seasonal",
  },
];