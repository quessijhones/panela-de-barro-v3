// categoria: mains, sides, desserts, beverages, seasonal, chefs
export const MENU = [
  {
    id: "vaca-atolada",
    img: "/images/vaca-atolada.jpg",
    cat: "mains",
    tags: ["halal","beef","gluten","dairy"],
    name: { pt: "Vaca Atolada (Ossobuco)", en: "Vaca Atolada (Ossobuco)", ar: "فاكا أتولادا (عظم الساق)" },
    short: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Ossobuco with creamy polenta and citrus arugula.",
      ar: "عظم الساق مع بولينتا كريمية وجرجير بنكهة حمضية."
    }
  },
  {
    id: "feijoada-costela",
    img: "/images/feijoada-costela.jpg",
    cat: "mains",
    tags: ["halal","beef","gluten"],
    name: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا بالضلوع" },
    short: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصوليا سوداء مع ضلوع البقر وفاروڤا الموز وصلصة فيناغريت."
    }
  },
  {
    id: "picanha-grelhada",
    img: "/images/picanha-grelhada.jpg",
    cat: "chefs",
    tags: ["halal","beef","dairy","gluten"],
    name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
    short: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta do reino.",
      en: "With mushroom risotto, green polenta and black-pepper sauce.",
      ar: "مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    }
  },
  {
    id: "moqueca-baiana",
    img: "/images/moqueca-baiana.jpg",
    cat: "mains",
    tags: ["halal","sea","gluten","dairy"],
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موكيكا باهيا" },
    short: {
      pt: "Peixe no leite de coco, urucum/dendê e coentro.",
      en: "Fish in coconut milk, annatto/dendê and cilantro.",
      ar: "سمك بحليب جوز الهند مع الأناناتو/الدنديه والكزبرة."
    }
  },
  {
    id: "pamonha",
    img: "/images/pamonha.jpg",
    cat: "seasonal",
    tags: ["veg","gluten","dairy"],
    name: { pt: "Pamonha (Sazonal)", en: "Pamonha (Seasonal)", ar: "بامونيا (موسمي)" },
    short: {
      pt: "Clássico de milho verde — doce ou salgado.",
      en: "Green-corn classic — sweet or savory.",
      ar: "طبق الذرة الخضراء الكلاسيكي — حلو أو مالح."
    }
  },
  {
    id: "sol-do-cerrado",
    img: "/images/sol-do-cerrado.jpg",
    cat: "beverages",
    tags: ["veg"],
    name: { pt: "Sol do Cerrado", en: "Cerrado Sun", ar: "شمس السيرادو" },
    short: {
      pt: "Manga, maracujá, hortelã e toque cítrico.",
      en: "Mango, passion fruit, mint and citrus.",
      ar: "مانجو وماراكوجا ونعناع ولمسة حمضية."
    }
  },
  {
    id: "uva-limao-gelo",
    img: "/images/uva-limao-gelo.jpg",
    cat: "beverages",
    tags: ["veg"],
    name: { pt: "Uva & Limão Gelo", en: "Grape & Lime Ice", ar: "عنب وليمون مثلّج" },
    short: {
      pt: "Suco de uva integral com limão e hortelã.",
      en: "Whole grape juice with lime and mint.",
      ar: "عصير عنب كامل مع ليمون ونعناع."
    }
  },
  {
    id: "pao-de-queijo",
    img: "/images/pao-de-queijo.jpg",
    cat: "sides",
    tags: ["veg","gluten","dairy"],
    name: { pt: "Pão de Queijo", en: "Cheese Bread", ar: "خبز الجبن" },
    short: {
      pt: "Tradicional, macio e quentinho.",
      en: "Traditional, soft and warm.",
      ar: "تقليدي، طري ودافئ."
    }
  },
  {
    id: "polenta-frita",
    img: "/images/polenta-frita.jpg",
    cat: "sides",
    tags: ["veg","gluten","dairy"],
    name: { pt: "Polenta Frita", en: "Fried Polenta", ar: "بولينتا مقلية" },
    short: {
      pt: "Crocante por fora, cremosa por dentro.",
      en: "Crispy outside, creamy inside.",
      ar: "مقرمشة من الخارج وكريمية من الداخل."
    }
  },
  {
    id: "encanto-de-coco",
    img: "/images/encanto-de-coco.jpg",
    cat: "desserts",
    tags: ["gluten","dairy","veg"],
    name: { pt: "Encanto de Coco", en: "Coconut Delight", ar: "حلوى جوز الهند" },
    short: {
      pt: "Pudim de coco com caramelo claro.",
      en: "Coconut pudding with light caramel.",
      ar: "بودينغ جوز الهند مع كراميل خفيف."
    }
  },
  {
    id: "doce-da-roca-com-gelo",
    img: "/images/doce-da-roca-com-gelo.jpg",
    cat: "desserts",
    tags: ["gluten","dairy","veg"],
    name: { pt: "Doce da Roça com Gelo", en: "Farm Sweet with Ice", ar: "حلوى المزرعة بالثلج" },
    short: {
      pt: "Abóbora cremosa com especiarias e sorvete artesanal.",
      en: "Creamy pumpkin with spices and artisan ice cream.",
      ar: "قرع كريمي مع بهارات وآيس كريم حرفي."
    }
  },
  {
    id: "farofa-de-castanha",
    img: "/images/farofa-de-castanha.jpg",
    cat: "sides",
    tags: ["veg","gluten"],
    name: { pt: "Farofa de Castanha", en: "Brazil-nut Farofa", ar: "фарوفا بالجوز البرازيلي" },
    short: {
      pt: "Clássica, amanteigada e perfumada.",
      en: "Classic, buttery and fragrant.",
      ar: "كلاسيكية وزبدية وعطرة."
    }
  }
];
// Para adicionar mais: copie um bloco, ajuste id/img/cat/tags/name/short.