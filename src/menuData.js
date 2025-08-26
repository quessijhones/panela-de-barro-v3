// src/menuData.js
// Export nomeado: { MENU }
export const MENU = [
  // -------- PRATOS (MAINS) --------
  {
    id: "vaca-atolada",
    category: "mains",
    name: "Vaca Atolada (Ossobuco)",
    image: "/images/vaca-atolada.jpg",
    desc: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Beef ossobuco with creamy polenta and citrus arugula.",
      ar: "عظم لحم بقري مع بولينتا كريمية وجرجير حمضي.",
    },
    tags: ["Halal", "Beef", "Gluten", "Dairy"],
  },
  {
    id: "feijoada-costela",
    category: "mains",
    name: "Feijoada de Costela",
    image: "/images/feijoada-costela.jpg",
    desc: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصولياء سوداء مع ضلوع بقري وفاروفا الموز وصلصة فيناغريت.",
    },
    tags: ["Halal", "Beef", "Gluten"],
  },
  {
    id: "moqueca-baiana",
    category: "mains",
    name: "Moqueca Baiana",
    image: "/images/moqueca-baiana.jpg",
    desc: {
      pt: "Peixe no leite de coco, urucum/dendê e coentro.",
      en: "Fish in coconut milk with annatto/palm oil and cilantro.",
      ar: "سمك بحليب جوز الهند مع الأناطو وزيت النخيل والكزبرة.",
    },
    tags: ["Halal", "Sea", "Gluten", "Dairy"],
  },
  {
    id: "picanha-grelhada",
    category: "mains",
    name: "Picanha Grelhada",
    image: "/images/picanha-grelhada.jpg",
    desc: {
      pt: "Picanha no ponto, risoto de cogumelos e molho verde.",
      en: "Grilled picanha, mushroom risotto and green sauce.",
      ar: "بيكانيا مشوية مع ريزوتو الفطر وصلصة خضراء.",
    },
    tags: ["Halal", "Beef", "Dairy", "Gluten"],
  },
  {
    id: "fraldinha-inteira",
    category: "mains",
    name: "Fraldinha Inteira",
    image: "/images/fraldinha-inteira.jpg",
    desc: {
      pt: "Fraldinha na brasa, mandioca cozida e manteiga de garrafa.",
      en: "Flank steak over embers, cassava and brown butter.",
      ar: "لحم فلات ستيك على الجمر مع كسافا وزبدة بنية.",
    },
    tags: ["Halal", "Beef"],
  },
  {
    id: "galinhada-caipira",
    category: "mains",
    name: "Galinhada Caipira",
    image: "/images/galinhada-caipira.jpg",
    desc: {
      pt: "Arroz de quintal com frango, açafrão e cheiro-verde.",
      en: "Country-style chicken rice with turmeric and herbs.",
      ar: "أرز ريفي بالدجاج والزعفران والأعشاب.",
    },
    tags: ["Halal", "Gluten-Free"],
  },
  {
    id: "rubacao",
    category: "mains",
    name: "Rubacão",
    image: "/images/rubacao.jpg",
    desc: {
      pt: "Arroz de leite com feijão verde, queijo coalho e jerimum.",
      en: "Milk rice with fresh beans, curd cheese and pumpkin.",
      ar: "أرز بالحليب مع فاصولياء طازجة وجبن ومقرونة القرع.",
    },
    tags: ["Vegetarian", "Dairy", "Gluten-Free"],
  },
  {
    id: "pao-de-queijo",
    category: "mains",
    name: "Pão de Queijo da Casa",
    image: "/images/pao-de-queijo.jpg",
    desc: {
      pt: "Clássico mineiro — crocante por fora e macio por dentro.",
      en: "Cheesy cassava rolls — crisp outside, soft inside.",
      ar: "خبز الجبن البرازيلي من الكسافا.",
    },
    tags: ["Vegetarian", "Gluten-Free", "Dairy"],
  },
  {
    id: "pao-de-alho",
    category: "mains",
    name: "Pão de Alho na Brasa",
    image: "/images/pao-de-alho.jpg",
    desc: {
      pt: "Pão tostado com manteiga de alho e salsa.",
      en: "Charred garlic-butter bread.",
      ar: "خبز بالثوم والزبدة على الجمر.",
    },
    tags: ["Vegetarian", "Gluten", "Dairy"],
  },
  {
    id: "mandioca-frita",
    category: "mains",
    name: "Mandioca Frita",
    image: "/images/mandioca-frita.jpg",
    desc: {
      pt: "Clássica — por fora crocante, por dentro macia.",
      en: "Golden cassava fries — crunchy outside, tender inside.",
      ar: "كسافا مقلية مقرمشة.",
    },
    tags: ["Vegan", "Gluten-Free"],
  },

  // -------- SAZONAIS (ex.: pode aparecer nas abas “Sazonais” e “Sobremesas”) --------
  {
    id: "pamonha-doce",
    category: "desserts", // queremos que apareça em “Sobremesas”
    name: "Pamonha Doce",
    image: "/images/pamonha.jpg",
    desc: {
      pt: "Clássico de milho verde — doce e perfumado.",
      en: "Sweet green-corn classic.",
      ar: "حلوى الذرة الخضراء التقليدية.",
    },
    tags: ["Seasonal", "Veg", "Dairy", "Gluten-Free"],
  },

  // -------- BEBIDAS --------
  {
    id: "amazon-breeze",
    category: "beverages",
    name: "Amazon Breeze",
    image: "/images/amazon-breeze.jpg",
    desc: {
      pt: "Maracujá, limão e ervas da casa.",
      en: "Passion fruit, lime and house herbs.",
      ar: "عصير ماراكويا مع ليمون وأعشاب.",
    },
    tags: ["Veg"],
  },
  {
    id: "blueberry-coco-fizz",
    category: "beverages",
    name: "Blueberry Coco Fizz",
    image: "/images/blueberry-coco-fizz.jpg",
    desc: {
      pt: "Mirtilo, coco e gás — leve e refrescante.",
      en: "Blueberry, coconut and fizz — light & refreshing.",
      ar: "توت أزرق وجوز هند ومشروب فوار منعش.",
    },
    tags: ["Veg"],
  },
  {
    id: "caipile-classico",
    category: "beverages",
    name: "Caipilé Clássico (sem álcool)",
    image: "/images/caipile-classico.jpg",
    desc: {
      pt: "Nosso ‘geladinho’ de limão em versão caipira.",
      en: "Lime ‘pop-ice’ in a caipirinha-style mocktail.",
      ar: "مثلجات ليمون بنكهة كايبيرينيا بدون كحول.",
    },
    tags: ["Veg"],
  },
  {
    id: "sol-do-cerrado",
    category: "beverages",
    name: "Sol do Cerrado",
    image: "/images/sol-do-cerrado.jpg",
    desc: {
      pt: "Manga, maracujá e hortelã.",
      en: "Mango, passion fruit and mint.",
      ar: "مانغو وماراكويا ونعناع.",
    },
    tags: ["Veg"],
  },
  {
    id: "uva-limao-gelo",
    category: "beverages",
    name: "Uva, Limão & Gelo",
    image: "/images/uva-limao-gelo.jpg",
    desc: {
      pt: "Clássico roxinho — azedinho bom.",
      en: "Grape & lime over ice — tart and bright.",
      ar: "عنب وليمون مع ثلج.",
    },
    tags: ["Veg"],
  },
  {
    id: "verao-brasil",
    category: "beverages",
    name: "Verão Brasil",
    image: "/images/verao-brasil.jpg",
    desc: {
      pt: "Abacaxi batido com ervas e um toque cítrico.",
      en: "Pineapple shaken with herbs and citrus.",
      ar: "أناناس مع أعشاب ولمسة حمضية.",
    },
    tags: ["Veg"],
  },
  {
    id: "vitamina-do-cerrado",
    category: "beverages",
    name: "Vitamina do Cerrado",
    image: "/images/vitamina-do-cerrado.jpg",
    desc: {
      pt: "Batida cremosa de frutas do Brasil.",
      en: "Creamy Brazilian fruit shake.",
      ar: "كوكتيل كريمي من فواكه برازيلية.",
    },
    tags: ["Veg", "Dairy"],
  },

  // -------- SOBREMESAS --------
  {
    id: "mandioca-real",
    category: "desserts",
    name: "Mandioca Real",
    image: "/images/mandioca-real.jpg",
    desc: {
      pt: "Bolo cremoso de mandioca com coco.",
      en: "Creamy cassava cake with coconut.",
      ar: "كيك الكسافا مع جوز الهند.",
    },
    tags: ["Dessert", "Dairy", "Gluten"],
  },
  {
    id: "encanto-de-coco",
    category: "desserts",
    name: "Encanto de Coco",
    image: "/images/encanto-de-coco.jpg",
    desc: {
      pt: "Cocada cremosa servida gelada.",
      en: "Silky coconut pudding served chilled.",
      ar: "بودينغ جوز الهند البارد.",
    },
    tags: ["Dessert", "Dairy"],
  },
  {
    id: "doce-da-roca-gelo",
    category: "desserts",
    name: "Doce da Roça com Gelo",
    image: "/images/doce-da-roca-com-gelo.jpg",
    desc: {
      pt: "Doce caseiro da fazenda, servido gelado.",
      en: "Farm-style homemade sweet, served cold.",
      ar: "حلوى منزلية على طريقة المزرعة تُقدّم باردة.",
    },
    tags: ["Dessert"],
  },
];