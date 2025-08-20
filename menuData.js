// menuData.js
// Imagens provisórias do Unsplash — troque depois pelas suas.
const img = (q) => `https://images.unsplash.com/photo-155${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}-?auto=format&fit=crop&w=1200&q=60&${q}`;

export const MENU = [
  // ===== PRATOS PRINCIPAIS =====
  {
    id: "m1",
    category: "mains",
    priceQAR: 160,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Vaca Atolada (Ossobuco)",
      en: "Vaca Atolada (Ossobuco)",
      ar: "أوسوبوكو برازيلي (ڤاكا أتولادا)"
    },
    desc: {
      pt: "Ossobuco cozido lentamente com polenta cremosa de milho verde e salada cítrica de rúcula.",
      en: "Slow-cooked ossobuco with creamy green-corn polenta and citrus arugula salad.",
      ar: "لحم عجل مطهو ببطء مع بولينتا الذرة الخضراء وكرافة الجرجير بالحمضيات."
    }
  },
  {
    id: "m2",
    category: "mains",
    priceQAR: 165,
    image: "https://images.unsplash.com/photo-1604908176997-431c5f86050e?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Picanha Grelhada (Prato do Chef)",
      en: "Grilled Picanha (Chef’s Signature)",
      ar: "بيكانيا مشوية (طبق الشيف)"
    },
    desc: {
      pt: "Picanha grelhada com risoto de cogumelos, polenta cremosa e molho de pimenta-do-reino.",
      en: "Grilled picanha served with mushroom risotto, creamy polenta and peppercorn sauce.",
      ar: "بيكانيا مشوية مع ريزوتو الفطر وبولينتا كريمية وصلصة الفلفل الأسود."
    }
  },
  {
    id: "m3",
    category: "mains",
    priceQAR: 129,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Moqueca Baiana",
      en: "Moqueca Baiana",
      ar: "موكيكا بايانة"
    },
    desc: {
      pt: "Peixe com leite de coco, dendê e pimentões, servido com arroz e farofa.",
      en: "Fish stew with coconut milk, dendê oil and peppers, served with rice and farofa.",
      ar: "سمك مطهو بحليب جوز الهند وزيت الدنديه والفلفل يقدم مع الأرز والفاروفا."
    }
  },
  {
    id: "m4",
    category: "mains",
    priceQAR: 89,
    image: "https://images.unsplash.com/photo-1544025162-53eacb16bcd1?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Galinhada Caipira",
      en: "Country-Style Chicken & Rice",
      ar: "غاليِنهادا ريفية (دجاج مع أرز)"
    },
    desc: {
      pt: "Clássico de frango com arroz e toque rústico, servido com aioli de cúrcuma.",
      en: "Traditional chicken-and-rice with rustic flavor, served with turmeric aioli.",
      ar: "طبق دجاج مع أرز بنكهات ريفية يقدم مع أيولي الكركم."
    }
  },
  {
    id: "m5",
    category: "mains",
    priceQAR: 68,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Hambúrguer de Picanha",
      en: "Picanha Burger",
      ar: "برغر بيكانيا"
    },
    desc: {
      pt: "Com cogumelos, queijo derretido, bacon e maionese artesanal.",
      en: "With mushrooms, melted cheese, bacon and house mayo.",
      ar: "مع الفطر والجبن الذائب والبايكون ومايونيز منزلي."
    }
  },
  // ===== ACOMPANHAMENTOS =====
  {
    id: "s1",
    category: "sides",
    priceQAR: 24,
    image: "https://images.unsplash.com/photo-1604908554168-4934f36f0b2f?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Mandioca Frita",
      en: "Fried Cassava",
      ar: "كاسافا مقلية"
    },
    desc: {
      pt: "Palitos crocantes de mandioca dourada.",
      en: "Golden, crispy cassava sticks.",
      ar: "عيدان كاسافا مقرمشة ومذهبة."
    }
  },
  {
    id: "s2",
    category: "sides",
    priceQAR: 22,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Polenta Frita",
      en: "Fried Polenta",
      ar: "بولينتا مقلية"
    },
    desc: {
      pt: "Palitos de polenta crocante por fora e macia por dentro.",
      en: "Crispy outside, soft inside cornmeal fries.",
      ar: "شرائح بولينتا مقرمشة من الخارج وناعمة من الداخل."
    }
  },
  {
    id: "s3",
    category: "sides",
    priceQAR: 22,
    image: "https://images.unsplash.com/photo-1604908554254-0bcb926019f4?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Farofa (Castanha/Banana)",
      en: "Toasted Cassava Flour (Cashew or Sweet Plantain)",
      ar: "فاروفا (كاجو أو موز الجنة)"
    },
    desc: {
      pt: "Escolha: crocante de castanha de caju ou banana da terra salteada.",
      en: "Choice: crunchy cashew nuts or sautéed sweet plantain.",
      ar: "اختيار: كاجو مقرمش أو موز الجنة السوتيه."
    }
  },
  // ===== SOBREMESAS =====
  {
    id: "d1",
    category: "desserts",
    priceQAR: 24,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Brigadeiro Gourmet",
      en: "Gourmet Brigadeiro",
      ar: "بريغادييرو فاخر"
    },
    desc: {
      pt: "Clássico brasileiro de chocolate, cremoso e irresistível.",
      en: "Classic Brazilian chocolate truffle, creamy and irresistible.",
      ar: "حلوى برازيلية كلاسيكية من الشوكولاتة، كريمية ولا تُقاوم."
    }
  },
  // ===== BEBIDAS =====
  {
    id: "b1",
    category: "drinks",
    priceQAR: 34,
    image: "https://images.unsplash.com/photo-1567005210103-cb2f2cb49243?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Sol do Cerrado",
      en: "Cerrado Sun",
      ar: "شمس السِيرادو"
    },
    desc: {
      pt: "Manga com maracujá, hortelã e toque cítrico.",
      en: "Mango with passion fruit, mint and citrus touch.",
      ar: "مانغو مع باشن فروت ونعناع ولمسة حمضية."
    }
  },
  {
    id: "b2",
    category: "drinks",
    priceQAR: 32,
    image: "https://images.unsplash.com/photo-1541976076758-347942db197f?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Caipilé Clássico (sem álcool)",
      en: "Classic Caipilé (non-alcoholic)",
      ar: "كايميلي كلاسيكي (بدون كحول)"
    },
    desc: {
      pt: "Limão fresco, hortelã e água com gás.",
      en: "Fresh lime, mint and sparkling water.",
      ar: "ليمون طازج ونعناع وماء غازي."
    }
  },
  {
    id: "b3",
    category: "drinks",
    priceQAR: 36,
    image: "https://images.unsplash.com/photo-1524592814082-8c15a8389ff3?auto=format&fit=crop&w=1200&q=60",
    name: {
      pt: "Blueberry & Coco Fizz",
      en: "Blueberry & Coco Fizz",
      ar: "بلو بيري & كوكو فِز"
    },
    desc: {
      pt: "Mirtilo batido com leite de coco e toque de baunilha.",
      en: "Blueberries blended with coconut milk and a hint of vanilla.",
      ar: "توت أزرق مع حليب جوز الهند ولمسة فانيلا."
    }
  }
];

