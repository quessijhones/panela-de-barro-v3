// menuData.js
export const MENU = [
  // PRATOS PRINCIPAIS
  {
    id: "m1",
    category: "mains",
    price: "QAR 160",
    name: { pt: "Vaca Atolada (Ossobuco)", en: "Slow-cooked Ossobuco", ar: "عظم عجل مطهو ببطء" },
    desc: {
      pt: "Ossobuco cozido lentamente, polenta cremosa e salada cítrica.",
      en: "Slow-cooked ossobuco with creamy polenta and citrus greens.",
      ar: "عظم عجل مطهو ببطء مع بولينتا كريمية وسلطة حمضيات."
    },
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "m2",
    category: "mains",
    price: "QAR 165",
    name: { pt: "Picanha Grelhada (Prato do Chef)", en: "Grilled Picanha (Chef’s special)", ar: "بيكانيا مشوية (طبق الشيف)" },
    desc: {
      pt: "Picanha grelhada com risoto de cogumelos e molho de pimenta-do-reino.",
      en: "Grilled picanha with mushroom risotto and peppercorn sauce.",
      ar: "بيكانيا مشوية مع ريزوتو الفطر وصلصة الفلفل."
    },
    image:
      "https://images.unsplash.com/photo-1604908554027-845e119c3f88?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "m3",
    category: "mains",
    price: "QAR 110",
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موقيكا باهيا" },
    desc: {
      pt: "Peixe com leite de coco, dendê e pimentões. Acompanha arroz e farofa.",
      en: "Fish stew with coconut milk, dendê oil and peppers. Served with rice and farofa.",
      ar: "يخنة سمك بحليب جوز الهند وزيت الدِندِه والفلفل. تُقدم مع الأرز والفاروفا."
    },
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
  },

  // ACOMPANHAMENTOS (SIDES)
  {
    id: "s1",
    category: "sides",
    price: "QAR 22",
    name: { pt: "Polenta Frita", en: "Fried Polenta", ar: "بولينتا مقلية" },
    desc: {
      pt: "Palitos crocantes por fora, macios por dentro.",
      en: "Crispy outside, soft inside.",
      ar: "مقرمشة من الخارج وطرية من الداخل."
    },
    image:
      "https://images.unsplash.com/photo-1604908813112-ae9f94f0f4b3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "s2",
    category: "sides",
    price: "QAR 24",
    name: { pt: "Mandioca Frita", en: "Fried Cassava", ar: "يوكا مقلية" },
    desc: {
      pt: "Palitos dourados de mandioca crocante.",
      en: "Golden crispy cassava sticks.",
      ar: "أعواد يوكا مقرمشة ذهبية."
    },
    image:
      "https://images.unsplash.com/photo-1625944529139-151f77aaa628?q=80&w=1200&auto=format&fit=crop"
  },

  // SOBREMESAS
  {
    id: "d1",
    category: "desserts",
    price: "QAR 18",
    name: { pt: "Brigadeiro Gourmet", en: "Gourmet Brigadeiro", ar: "بريغاديرو فاخر" },
    desc: {
      pt: "Clássico brasileiro com cacau belga.",
      en: "Brazilian classic with Belgian cocoa.",
      ar: "حلوى برازيلية كلاسيكية بكاكاو بلجيكي."
    },
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop"
  },

  // BEBIDAS
  {
    id: "b1",
    category: "drinks",
    price: "QAR 32",
    name: { pt: "Caipilé Clássico (sem álcool)", en: "Classic Caipilé (non-alcoholic)", ar: "كايبيلي كلاسيكي (بدون كحول)" },
    desc: {
      pt: "Limão fresco, hortelã e água com gás.",
      en: "Fresh lime, mint and sparkling water.",
      ar: "ليمون طازج ونعناع وماء غازي."
    },
    image:
      "https://images.unsplash.com/photo-1613478223719-2a55f1a8fb4a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "b2",
    category: "drinks",
    price: "QAR 29",
    name: { pt: "Chá Mate Gelado", en: "Iced Yerba Mate", ar: "شاي يربا متة مثلج" },
    desc: {
      pt: "Com limão, mel e raspas de gengibre.",
      en: "With lime, honey and ginger zest.",
      ar: "مع الليمون والعسل وبرش الزنجبيل."
    },
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop"
  }
];

