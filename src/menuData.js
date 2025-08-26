// ==========================================================================
// Panela de Barro — Menu completo
// Categorias usadas pelo site: "mains", "seasonal", "beverages"
// O filtro "All" mostra tudo. Sinta-se à vontade para mudar descrições depois.
// ==========================================================================

export const MENU = [
  // ===================== MAINS =====================
  {
    id: "vaca-atolada",
    category: "mains",
    image: "/images/vaca-atolada.jpg",
    name: { pt: "Vaca Atolada (Ossobuco)", en: "Vaca Atolada (Ossobuco)", ar: "فاكا أتولادا (أوسوبوكو)" },
    brief: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Ossobuco with creamy polenta and citrus arugula.",
      ar: "أوسوبوكو مع بولينتا كريمية وجرجير حمضي."
    },
    tags: ["Halal","Beef","Gluten","Dairy"]
  },
  {
    id: "feijoada-costela",
    category: "mains",
    image: "/images/feijoada-costela.jpg",
    name: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا بأضلاع اللحم" },
    brief: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصوليا سوداء مع أضلاع لحم، فاروفا الموز وفيناكريت."
    },
    tags: ["Halal","Beef","Gluten"]
  },
  {
    id: "moqueca-baiana",
    category: "mains",
    image: "/images/moqueca-baiana.jpg",
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موكيكا بايانا" },
    brief: {
      pt: "Peixe no leite de coco, urucum/dendê e coentro.",
      en: "Fish in coconut milk, annatto/dendê oil and cilantro.",
      ar: "سمك بصلصة حليب جوز الهند وزيت الدندِي والكزبرة."
    },
    tags: ["Halal","Sea","Gluten","Dairy"]
  },
  {
    id: "picanha-grelhada",
    category: "mains",
    image: "/images/picanha-grelhada.jpg",
    name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
    brief: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta-do-reino.",
      en: "With mushroom risotto, green polenta and black-pepper sauce.",
      ar: "مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    },
    tags: ["Halal","Beef","Dairy","Gluten"]
  },
  {
    id: "galinhada-caipira",
    category: "mains",
    image: "/images/galinhada-caipira.jpg",
    name: { pt: "Galinhada Caipira", en: "Country-Style Chicken Rice", ar: "غاليِنهادا على الطريقة الريفية" },
    brief: {
      pt: "Arroz de quintal com frango, milho, cheiro-verde e açafrão-da-terra.",
      en: "Farm-style rice with chicken, corn, scallions and turmeric.",
      ar: "أرز منزلي مع دجاج وذرة وبصل أخضر وكركم."
    },
    tags: ["Halal","Gluten-Free"]
  },
  {
    id: "rubacao",
    category: "mains",
    image: "/images/rubacao.jpg",
    name: { pt: "Rubacão", en: "Rubacão (Northeastern rice & beans)", ar: "روباكاأو" },
    brief: {
      pt: "Clássico nordestino: arroz, feijão-de-corda, queijo e carne seca.",
      en: "Northeastern classic of rice, beans, cheese and cured beef.",
      ar: "طبق شمال شرقي: أرز مع فاصوليا وجبن ولحم بقري مجفف."
    },
    tags: ["Halal","Beef","Dairy","Gluten-Free"]
  },
  {
    id: "fraldinha-inteira",
    category: "mains",
    image: "/images/fraldinha-inteira.jpg",
    name: { pt: "Fraldinha Inteira", en: "Whole Flank Steak", ar: "فرالدينها كاملة" },
    brief: {
      pt: "Grelhada lenta, molho de ervas e purê rústico.",
      en: "Slow-grilled with herb sauce and rustic mash.",
      ar: "مشوية ببطء مع صلصة الأعشاب وهريس ريفي."
    },
    tags: ["Halal","Beef","Gluten-Free","Dairy"]
  },
  {
    id: "hamburguer-de-picanha",
    category: "mains",
    image: "/images/hamburguer-de-picanha.jpg",
    name: { pt: "Hambúrguer de Picanha", en: "Picanha Burger", ar: "برغر بيكانيا" },
    brief: {
      pt: "Blend suculento, queijo e molho da casa.",
      en: "Juicy blend, cheese and house sauce.",
      ar: "مزيج عصاري مع جبن وصلصة خاصة."
    },
    tags: ["Halal","Beef","Dairy","Gluten"]
  },
  {
    id: "lasanha-banana",
    category: "seasonal",
    image: "/images/lasanha-banana.jpg",
    name: { pt: "Lasanha de Banana (Sazonal)", en: "Banana Lasagna (Seasonal)", ar: "لازانيا الموز (موسمية)" },
    brief: {
      pt: "Doce-salgado brasileiro — surpreendente e aconchegante.",
      en: "A Brazilian sweet–savory surprise — comforting and unique.",
      ar: "مفاجأة حلوة مالحة على الطريقة البرازيلية."
    },
    tags: ["Veg","Gluten","Dairy"]
  },

  // ===================== ENTRADAS / ACOMPANHAMENTOS (aparecem em All) =====================
  {
    id: "coxinhas-de-costela",
    category: "mains",
    image: "/images/coxinhas-de-costela.jpg",
    name: { pt: "Coxinhas de Costela", en: "Beef Rib Coxinhas", ar: "كوخينيا بأضلاع اللحم" },
    brief: {
      pt: "Clássico de boteco com recheio de costela desfiada.",
      en: "Bar classic stuffed with shredded beef ribs.",
      ar: "حلوى مالحة محشوة بأضلاع اللحم المفرومة."
    },
    tags: ["Halal","Beef","Gluten","Dairy"]
  },
  {
    id: "pasteis-brasileiros",
    category: "mains",
    image: "/images/pasteis-brasileiros.jpg",
    name: { pt: "Pastéis Brasileiros", en: "Brazilian Pastéis", ar: "باستيل برازيلي" },
    brief: {
      pt: "Massa crocante com recheios variados.",
      en: "Crispy pastries with assorted fillings.",
      ar: "عجينة مقرمشة بحشوات منوّعة."
    },
    tags: ["Halal","Gluten","Dairy"]
  },
  {
    id: "pao-de-queijo",
    category: "mains",
    image: "/images/pao-de-queijo.jpg",
    name: { pt: "Pão de Queijo", en: "Cheese Bread (GF)", ar: "خبز الجبن" },
    brief: {
      pt: "Mineiro, 100% sem glúten: polvilho e queijo.",
      en: "Minas classic, naturally gluten-free.",
      ar: "كلاسيكي من ميناس، خالٍ من الغلوتين."
    },
    tags: ["Halal","Dairy","Gluten-Free","Veg"]
  },
  {
    id: "pao-de-alho",
    category: "mains",
    image: "/images/pao-de-alho.jpg",
    name: { pt: "Pão de Alho", en: "Garlic Bread", ar: "خبز بالثوم" },
    brief: {
      pt: "Tostado na brasa, manteiga de alho e ervas.",
      en: "Grilled with garlic butter and herbs.",
      ar: "مشوي مع زبدة الثوم والأعشاب."
    },
    tags: ["Veg","Gluten","Dairy"]
  },
  {
    id: "polenta-frita",
    category: "mains",
    image: "/images/polenta-frita.jpg",
    name: { pt: "Polenta Frita", en: "Crispy Polenta Fries", ar: "بولينتا مقلية مقرمشة" },
    brief: {
      pt: "Porção crocante com parmesão e ervas.",
      en: "Crispy sticks with parmesan and herbs.",
      ar: "قضبان مقرمشة مع بارميزان وأعشاب."
    },
    tags: ["Veg","Gluten-Free","Dairy"]
  },
  {
    id: "mandioca-frita",
    category: "mains",
    image: "/images/mandioca-frita.jpg",
    name: { pt: "Mandioca Frita", en: "Fried Cassava", ar: "كسافا مقلية" },
    brief: {
      pt: "Raiz dourada, por fora crocante e por dentro macia.",
      en: "Golden cassava — crisp outside, tender inside.",
      ar: "كسافا ذهبية مقرمشة من الخارج وطريّة من الداخل."
    },
    tags: ["Veg","Gluten-Free"]
  },
  {
    id: "mandioca-real",
    category: "mains",
    image: "/images/mandioca-real.jpg",
    name: { pt: "Mandioca Real", en: "Creamy Cassava Purée", ar: "هريس الكسافا" },
    brief: {
      pt: "Purê cremoso para acompanhar grelhados.",
      en: "Silky purée to pair with grills.",
      ar: "هريس ناعم يرافق المشاوي."
    },
    tags: ["Veg","Gluten-Free","Dairy"]
  },
  {
    id: "farofa-de-castanha",
    category: "mains",
    image: "/images/farofa-de-castanha.jpg",
    name: { pt: "Farofa de Castanha", en: "Brazil Nut Farofa", ar: "فاروفا الجوز البرازيلي" },
    brief: {
      pt: "Crocrante de mandioca com castanhas.",
      en: "Toasted cassava crumbs with nuts.",
      ar: "فتات مانديوكا محمّصة مع المكسرات."
    },
    tags: ["Veg","Gluten-Free"]
  },
  {
    id: "pe-de-serra",
    category: "seasonal",
    image: "/images/pe-de-serra.jpg",
    name: { pt: "Pé-de-Serra", en: "Pé-de-Serra", ar: "بيه-دي-سيرا" },
    brief: {
      pt: "Doce nordestino (versão da casa).",
      en: "Northeastern sweet (house version).",
      ar: "حلوى من شمال شرق البرازيل (نسخة المطعم)."
    },
    tags: ["Veg","Dairy","Gluten"]
  },
  {
    id: "pamonha",
    category: "seasonal",
    image: "/images/pamonha.jpg",
    name: { pt: "Pamonha (Sazonal)", en: "Pamonha (Seasonal)", ar: "بامونيا (موسمية)" },
    brief: {
      pt: "Clássico de milho verde — doce ou salgado.",
      en: "Green-corn classic — sweet or savory.",
      ar: "طبق الذرة الخضراء الكلاسيكي — حلو أو مالح."
    },
    tags: ["Veg","Gluten-Free","Dairy"]
  },
  {
    id: "doce-da-roca-com-gelo",
    category: "seasonal",
    image: "/images/doce-da-roca-com-gelo.jpg",
    name: { pt: "Doce da Roça com Gelo", en: "Country Sweet on Ice", ar: "حلوى المزرعة مع الثلج" },
    brief: {
      pt: "Sobremesa refrescante, receita de roça.",
      en: "Refreshing farm-style dessert.",
      ar: "تحلية منعشة على طريقة المزارع."
    },
    tags: ["Veg","Dairy","Gluten-Free"]
  },

  // ===================== BEBIDAS =====================
  {
    id: "amazon-breeze",
    category: "beverages",
    image: "/images/amazon-breeze.jpg",
    name: { pt: "Amazon Breeze", en: "Amazon Breeze", ar: "أمازون بريز" },
    brief: {
      pt: "Maracujá, cupuaçu e toque de limão.",
      en: "Passion fruit, cupuaçu and lime.",
      ar: "باشن فروت وكوبواسو ولمسة ليمون."
    },
    tags: ["Veg","Non-Alcoholic"]
  },
  {
    id: "blueberry-coco-fizz",
    category: "beverages",
    image: "/images/blueberry-coco-fizz.jpg",
    name: { pt: "Blueberry Coco Fizz", en: "Blueberry Coco Fizz", ar: "بلوبيري كوكو فيز" },
    brief: {
      pt: "Mirtilo, coco e final cítrico.",
      en: "Blueberry, coconut and citrus finish.",
      ar: "توت أزرق مع جوز الهند ولمسة حمضية."
    },
    tags: ["Veg","Non-Alcoholic","Dairy-Free"]
  },
  {
    id: "caipile-classico",
    category: "beverages",
    image: "/images/caipile-classico.jpg",
    name: { pt: "Caipilé Clássico", en: "Classic Caipilé (non-alcoholic)", ar: "كايبيليه كلاسيكي (بدون كحول)" },
    brief: {
      pt: "Nosso twist sem álcool inspirado na caipirinha.",
      en: "Our alcohol-free twist inspired by caipirinha.",
      ar: "لمستنا بدون كحول مستوحاة من الكايبيرينها."
    },
    tags: ["Veg","Non-Alcoholic"]
  },
  {
    id: "encanto-de-coco",
    category: "beverages",
    image: "/images/encanto-de-coco.jpg",
    name: { pt: "Encanto de Coco", en: "Coconut Charm", ar: "سحر جوز الهند" },
    brief: {
      pt: "Creme de coco, gelo e especiarias.",
      en: "Coconut cream, ice and spices.",
      ar: "كريمة جوز الهند مع الثلج والتوابل."
    },
    tags: ["Veg","Non-Alcoholic","Dairy"]
  },
  {
    id: "uva-limao-gelo",
    category: "beverages",
    image: "/images/uva-limao-gelo.jpg",
    name: { pt: "Uva & Limão no Gelo", en: "Grape & Lime on Ice", ar: "عنب وليمون على الثلج" },
    brief: {
      pt: "Fresco e perfumado.",
      en: "Fresh and fragrant.",
      ar: "منعش وعطِر."
    },
    tags: ["Veg","Non-Alcoholic"]
  },
  {
    id: "verao-brasil",
    category: "beverages",
    image: "/images/verao-brasil.jpg",
    name: { pt: "Verão Brasil", en: "Brazilian Summer", ar: "صيف البرازيل" },
    brief: {
      pt: "Abacaxi, hortelã e toque de rapadura.",
      en: "Pineapple, mint & a touch of raw sugar.",
      ar: "أناناس ونعناع ولمسة سكر خام."
    },
    tags: ["Veg","Non-Alcoholic"]
  },
  {
    id: "vitamina-do-cerrado",
    category: "beverages",
    image: "/images/vitamina-do-cerrado.jpg",
    name: { pt: "Vitamina do Cerrado", en: "Cerrado Smoothie", ar: "سموثي سيرادو" },
    brief: {
      pt: "Frutas do cerrado batidas com leite.",
      en: "Cerrado fruits blended with milk.",
      ar: "فاكهة سيرادو مخفوقة مع الحليب."
    },
    tags: ["Veg","Dairy","Non-Alcoholic"]
  },
  {
    id: "frescor-da-amazonia",
    category: "beverages",
    image: "/images/frescor-da-amazonia.jpg",
    name: { pt: "Frescor da Amazônia", en: "Amazon Fresh", ar: "نَسمة الأمازون" },
    brief: {
      pt: "Cítrico e herbal, super refrescante.",
      en: "Citrusy, herbal and ultra refreshing.",
      ar: "حمضي وعشبي ومنعش للغاية."
    },
    tags: ["Veg","Non-Alcoholic"]
  },
  {
    id: "sol-do-cerrado",
    category: "beverages",
    image: "/images/sol-do-cerrado.jpg",
    name: { pt: "Sol do Cerrado", en: "Cerrado Sun", ar: "شمس السيرادو" },
    brief: {
      pt: "Manga, maracujá, hortelã e cítricos.",
      en: "Mango, passion fruit, mint and citrus.",
      ar: "مانجو وباشن فروت ونعناع وحمضيات."
    },
    tags: ["Veg","Non-Alcoholic"]
  }
];