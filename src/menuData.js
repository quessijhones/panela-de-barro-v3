// menuData.js
// Caminhos das imagens são relativos à pasta /public (ex.: /images/arquivo.jpg)
export const MENU = [
  // ----- PRATOS (mains) -----
  {
    id: "vaca-atolada",
    category: "mains",
    name: "Vaca Atolada (Ossobuco)",
    image: "/images/vaca-atolada.jpg",
    desc: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Braised beef shank with creamy polenta and citrus arugula.",
      ar: "عظم لحم بقري مطهو مع بولينتا كريمية وجرجير حمضي.",
    },
    long: {
      pt: "Corte com tutano cozido lentamente até ficar macio, servido com polenta amanteigada e contraste fresco da rúcula.",
      en: "A marrow-rich cut, slow-cooked until tender, served with buttery polenta and a bright arugula finish.",
      ar: "قطعة غنية بنخاع العظم تُطهى ببطء حتى تصبح طرية، مع بولينتا زبدية ولمسة جرجير منعشة.",
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
      en: "Black bean stew with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصوليا سوداء مع ضلع بقري وفاروفا الموز وصلصة الفينيغريت.",
    },
    long: {
      pt: "Nossa leitura da feijoada: caldo encorpado, costela desmanchando e o trio farofa-banana-vinagrete para equilibrar.",
      en: "Our take on feijoada: rich broth, fall-apart ribs and the classic banana farofa + vinaigrette.",
      ar: "نسختنا من الفيجوادا: مرق غني وأضلاع طرية جدًا مع فاروفا الموز والفينيغريت.",
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
      en: "Fish in coconut milk, annatto/dendê and cilantro.",
      ar: "سمك بحليب جوز الهند وزيت الدندِه والكزبرة.",
    },
    long: {
      pt: "Clássico do litoral: leite de coco fresco, dendê aromático e molho exuberante servido borbulhando.",
      en: "Coastal classic: fresh coconut milk, aromatic dendê and a vibrant, bubbling stew.",
      ar: "طبق ساحلي كلاسيكي بحليب جوز الهند الطازج وزيت الدندِه ونكهة غنية.",
    },
    tags: ["Halal", "Sea", "Gluten", "Dairy"],
  },

  // ----- SAZONAIS -----
  {
    id: "pamonha",
    category: "seasonal",
    name: "Pamonha (Sazonal)",
    image: "/images/pamonha.jpg",
    desc: {
      pt: "Clássico de milho verde — doce ou salgado.",
      en: "Green-corn classic — sweet or savory.",
      ar: "كلاسيك الذرة الخضراء — حلو أو مالح.",
    },
    long: {
      pt: "Feita com milho ralado fresco, cozida na própria palha. Acompanha creme de queijo mineiro.",
      en: "Fresh-grated corn steamed in its husk. Served with a touch of Minas cheese cream.",
      ar: "ذرة طازجة مبشورة تُطهى في قشرتها وتقدم مع كريمة جبن ميناس.",
    },
    tags: ["Veg", "Gluten", "Dairy"],
  },

  // ----- BEBIDAS -----
  {
    id: "sol-do-cerrado",
    category: "beverages",
    name: "Sol do Cerrado",
    image: "/images/sol-do-cerrado.jpg",
    desc: {
      pt: "Manga, maracujá, hortelã e cítricos.",
      en: "Mango, passion fruit, mint and citrus.",
      ar: "مانجو وباشن فروت ونعناع وحمضيات.",
    },
    long: {
      pt: "Refresco natural batido e finalizado com raspas cítricas. Sem álcool.",
      en: "Fresh blended cooler finished with citrus zest. Alcohol-free.",
      ar: "شراب طبيعي مُنعش مع برش الحمضيات. بدون كحول.",
    },
    tags: ["Veg"],
  },

  // ----- SOBREMESAS -----
  {
    id: "mandioca-real",
    category: "desserts",
    name: "Mandioca Real",
    image: "/images/mandioca-real.jpg",
    desc: {
      pt: "Bolo cremoso de mandioca com coco.",
      en: "Creamy cassava cake with coconut.",
      ar: "كيكة الكسافا الكريمية مع جوز الهند.",
    },
    long: {
      pt: "Textura macia que derrete na boca, perfumado com coco e toque de leite condensado.",
      en: "Melt-in-the-mouth cassava pudding cake, perfumed with coconut and condensed milk.",
      ar: "قوام ناعم يذوب في الفم مع عطر جوز الهند ولمسة حليب مكثف.",
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
      en: "Creamy coconut sweet served chilled.",
      ar: "حلوى جوز الهند الكريمية تقدم باردة.",
    },
    long: {
      pt: "Uma cocada de colher, leve e aromática, finalizada com lascas de coco fresco.",
      en: "Spoonable cocada, light and fragrant, topped with fresh coconut shavings.",
      ar: "كوكاادا تؤكل بالملعقة، خفيفة وعطرية مع رقائق جوز هند طازجة.",
    },
    tags: ["Dessert", "Dairy"],
  },
  {
    id: "doce-da-roca",
    category: "desserts",
    name: "Doce da Roça com Gelo",
    image: "/images/doce-da-roca-com-gelo.jpg",
    desc: {
      pt: "Doce caseiro da fazenda, servido gelado.",
      en: "Farm-style homemade sweet, served iced.",
      ar: "تحلية ريفية منزلية تقدَّم باردة مع الثلج.",
    },
    long: {
      pt: "Receita de família, cremosa e fresca — perfeita para depois do fogão a lenha.",
      en: "A family recipe: creamy and refreshing — perfect after wood-fire dishes.",
      ar: "وصفة عائلية كريمية ومنعشة — مثالية بعد أطباق الحطب.",
    },
    tags: ["Dessert"],
  },
  {
    id: "pamonha-doce",
    category: "desserts",
    name: "Pamonha Doce",
    image: "/images/pamonha.jpg",
    desc: {
      pt: "Versão doce com canela.",
      en: "Sweet version with cinnamon.",
      ar: "نسخة حلوة مع القرفة.",
    },
    long: {
      pt: "Milho verde moído, cozido na palha e finalizado com açúcar mascavo e canela.",
      en: "Green-corn dough steamed in husk, finished with brown sugar and cinnamon.",
      ar: "عجين الذرة الخضراء مطهو في القشرة مع سكر أسمر وقرفة.",
    },
    tags: ["Dessert", "Veg", "Gluten"],
  },
];
