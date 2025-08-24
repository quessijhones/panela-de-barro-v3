// imagens já em /public/images/*.jpg
export const CATEGORIES = {
  MAINS: "mains",
  SIDES: "sides",
  DESSERTS: "desserts",
  BEVERAGES: "beverages",
  SEASONAL: "seasonal",
  CHEF: "chef"
};

export const MENU = [
  {
    id: "vaca-atolada",
    category: CATEGORIES.MAINS,
    labelKey: "badges.mains",
    img: "/images/vaca-atolada.jpg",
    tags: ["halal", "beef", "gluten", "dairy"],
    nutrition: { kcal: 820, carbs: 62, protein: 48, fat: 42 },
    name: { pt: "Vaca Atolada (Ossobuco)", en: "Vaca Atolada (Ossobuco)", ar: "فاسا أتولادا (عظم النخاع)" },
    short: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Ossobuco with creamy polenta and citrus arugula.",
      ar: "عظم النخاع مع بولينتا كريمية وجرجير بالحمضيات."
    },
    long: {
      pt: "Clássico caipira: ossobuco cozido lentamente, suculento, servido com polenta cremosa. A receita celebra a cozinha de fogão a lenha do interior — paciência, caldo rico e tempero verde.",
      en: "Countryside classic: slow-cooked shank over creamy polenta. Wood-fire spirit — patience, rich stock and green herbs.",
      ar: "طبق ريفي برازِيلي: لحم الساق المطهو ببطء مع بولينتا كريمية. نَفَس نار الحطب وصبر المرق العميق."
    }
  },
  {
    id: "feijoada-costela",
    category: CATEGORIES.MAINS,
    labelKey: "badges.mains",
    img: "/images/feijoada-costela.jpg",
    tags: ["halal", "beef", "gluten"],
    nutrition: { kcal: 740, carbs: 68, protein: 40, fat: 30 },
    name: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا بالضلوع" },
    short: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصوليا سوداء مع ضلوع البقر وفاروفا الموز والصلصة."
    },
    long: {
      pt: "Nossa feijoada conta a história do Brasil mestiço: técnicas portuguesas, ingredientes indígenas e toque africano. Feita sem porco — 100% halal — e cozida devagar até o feijão brilhar.",
      en: "Our feijoada tells Brazil’s story: Portuguese craft, native ingredients and African soul. Pork-free and halal, simmered until the beans shine.",
      ar: "تحكي الفيـجوادا قصّة البرازيل المتنوعة. بدون لحم خنزير — حلال — تُطهى ببطء حتى يلمع الفاصوليا."
    }
  },
  {
    id: "picanha",
    category: CATEGORIES.CHEF,
    labelKey: "badges.chef",
    img: "/images/picanha-grelhada.jpg",
    tags: ["halal", "beef", "dairy", "gluten"],
    nutrition: { kcal: 900, carbs: 45, protein: 55, fat: 55 },
    name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
    short: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta do reino.",
      en: "With mushroom risotto, green polenta and black-pepper sauce.",
      ar: "مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    },
    long: {
      pt: "A picanha é o corte-símbolo do churrasco brasileiro. Popularizada no século XX, ganhou fama pelo equilíbrio entre maciez e capa de gordura que derrete ao fogo. Nossa versão respeita o ponto e realça o sabor com pimenta moída na hora.",
      en: "Picanha is Brazil’s iconic steak, prized for tenderness and its flavorful fat cap. We grill it gently and finish with fresh-ground black pepper.",
      ar: "البيكانيا قطعة لحم أيقونية في البرازيل بفضل غطائها الدهني ونُعومتها. تُشوَى بعناية وتُنهى بفلفل أسود طازج."
    }
  },
  {
    id: "moqueca",
    category: CATEGORIES.MAINS,
    labelKey: "badges.mains",
    img: "/images/moqueca-baiana.jpg",
    tags: ["halal", "seafood", "gluten", "dairy"],
    nutrition: { kcal: 620, carbs: 38, protein: 36, fat: 32 },
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موكيكا باهية" },
    short: {
      pt: "Peixe no leite de coco, urucum e coentro — perfume de mar.",
      en: "Fish in coconut milk, annatto and cilantro — ocean perfume.",
      ar: "سمك بحليب جوز الهند والأناتو والكزبرة — عطر البحر."
    },
    long: {
      pt: "A moqueca une saberes indígenas e afro-brasileiros. Cozida em panela de barro, realça coco, dendê e ervas, símbolo da Bahia e do barro que nos batiza.",
      en: "An indigenous and Afro-Brazilian stew, traditionally cooked in clay pots — the soul behind our name.",
      ar: "طاجن سمك تاريخي يُطهى في قدر فخار — روح اسم مطعمنا."
    }
  },
  {
    id: "pamonha",
    category: CATEGORIES.SEASONAL,
    labelKey: "badges.seasonal",
    img: "/images/pamonha.jpg",
    tags: ["veg", "gluten", "dairy"],
    nutrition: { kcal: 360, carbs: 58, protein: 6, fat: 12 },
    name: { pt: "Pamonha (Sazonal)", en: "Pamonha (Seasonal)", ar: "بامونيا (موسمي)" },
    short: {
      pt: "Clássico de milho verde — doce ou salgada.",
      en: "Green-corn classic — sweet or savory.",
      ar: "ذرة خضراء كلاسيكية — حلوة أو مالحة."
    },
    long: {
      pt: "Feita de milho ralado e embrulhada na própria palha, a pamonha é memória afetiva do interior do Brasil.",
      en: "Grated corn wrapped in its own husk — countryside comfort.",
      ar: "مصنوعة من الذرة المبشورة وملفوفة بقشورها — دفء الريف."
    }
  },
  {
    id: "sol-do-cerrado",
    category: CATEGORIES.BEVERAGES,
    labelKey: "badges.beverages",
    img: "/images/sol-do-cerrado.jpg",
    tags: ["veg"],
    nutrition: { kcal: 180, carbs: 42, protein: 1, fat: 0 },
    name: { pt: "Sol do Cerrado", en: "Cerrado Sun", ar: "شمس السيرادو" },
    short: {
      pt: "Manga, maracujá, hortelã e toque cítrico.",
      en: "Mango, passion fruit, mint and citrus.",
      ar: "مانجو وباشن فروت ونعناع ولمسة حمضية."
    },
    long: {
      pt: "Bebida refrescante, sem álcool — **tudo halal**.",
      en: "Refreshing and alcohol-free — **fully halal**.",
      ar: "منعش وخالٍ من الكحول — **حلال**."
    }
  }
];
