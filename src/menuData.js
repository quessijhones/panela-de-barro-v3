// src/menuData.js
export const MENU = [
  {
    id: "vaca-atolada",
    category: ["mains", "chef"],
    image: "/images/vaca-atolada.jpg",
    name: {
      pt: "Vaca Atolada (Ossobuco)",
      en: "Vaca Atolada (Ossobuco)",
      ar: "‏Vaca Atolada (أوسوبوكو)"
    },
    short: {
      pt: "Ossobuco com polenta cremosa e rúcula cítrica.",
      en: "Braised ossobuco with creamy polenta and citrus arugula.",
      ar: "أوسوبوكو مطهو مع بولينتا كريمية وجرجير بنكهة الحمضيات."
    },
    long: {
      pt: "Clássico caipira que ganhou o Brasil. A carne é cozida lentamente até soltar do osso, servida sobre polenta cremosa — técnica trazida por imigrantes italianos — finalizada com rúcula cítrica. Cozimento lento no estilo fogão a lenha.",
      en: "A countryside classic embraced across Brazil. Beef shank is slowly braised until tender, served over creamy polenta — a technique brought by Italian immigrants — finished with citrus arugula. Slow-cooked as on a wood-fire stove.",
      ar: "طبق ريفي تبناه البرازيليون. يُطهى لحم الساق ببطء حتى يذوب ويُقدَّم فوق بولينتا كريمية (تقنية إيطالية) ويُنهى بجرجير حمضي. بطهي بطيء كموقد الحطب."
    },
    nutrition: { kcal: 720, carbs: 48, protein: 42, fat: 36 },
    allergens: ["dairy", "gluten"],
    tags: ["halal"]
  },
  {
    id: "feijoada-costela",
    category: ["mains"],
    image: "/images/feijoada-costela.jpg",
    name: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا بالضلوع" },
    short: {
      pt: "Feijão preto com costela, farofa de banana e vinagrete.",
      en: "Black beans with beef ribs, banana farofa and vinaigrette.",
      ar: "فاصوليا سوداء مع ضلوع البقر وفاروفا الموز وصوص فيناغريت."
    },
    long: {
      pt: "Herança africana que se tornou símbolo do Brasil. Nossa versão usa cortes bovinos halal e técnica de fogo longo para um caldo brilhante e profundo. Acompanha farofa de banana e vinagrete.",
      en: "An African heritage that became a Brazilian icon. Our version uses halal beef cuts and long fire technique for a glossy, deep broth. Served with banana farofa and vinaigrette.",
      ar: "إرث إفريقي أصبح رمزاً للبرازيل. نسختنا بلحم بقر حلال وطهي طويل لنكهة غنية، مع فاروفا الموز وخلّ الفيناغريت."
    },
    nutrition: { kcal: 850, carbs: 65, protein: 55, fat: 38 },
    allergens: [],
    tags: ["halal", "gluten"] // por causa da farofa dependendo da farinha
  },
  {
    id: "picanha-grelhada",
    category: ["mains", "chef"],
    image: "/images/picanha-grelhada.jpg",
    name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
    short: {
      pt: "Com risoto de cogumelos, polenta verde e molho de pimenta do reino.",
      en: "With mushroom risotto, green polenta and black-pepper sauce.",
      ar: "مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    },
    long: {
      pt: "A picanha nasce dos churrascos do Sul do Brasil. Corte nobre com capa de gordura que protege e perfuma a carne na brasa — tradição gaúcha. Aqui, grelhada com crosta, servida com risoto de cogumelos e polenta verde.",
      en: "Picanha is a Southern Brazilian barbecue icon. A noble cut whose fat cap protects and perfumes the meat over fire. Here it’s seared with a crust and served with mushroom risotto and green polenta.",
      ar: "البيكانيا من رموز الشواء في جنوب البرازيل. طبقة الدهن تحمي اللحم وتمنحه عطراً على النار. نقدّمها محمّرة بقشرة مع ريزوتو الفطر وبولينتا خضراء."
    },
    nutrition: { kcal: 780, carbs: 52, protein: 46, fat: 40 },
    allergens: ["dairy"],
    tags: ["halal"]
  },
  {
    id: "pao-de-queijo",
    category: ["sides", "vegetarian"],
    image: "/images/pao-de-queijo.jpg",
    name: { pt: "Pão de Queijo", en: "Cheese Bread", ar: "خبز الجبن" },
    short: {
      pt: "Tradicional, macio e quentinho.",
      en: "Traditional, soft and warm.",
      ar: "تقليدي، طري ودافئ."
    },
    long: {
      pt: "Minas Gerais em forma de pão. Massa de polvilho com queijo curado que estufa e vira casquinha por fora e maciez por dentro.",
      en: "A bite of Minas Gerais. Cassava starch dough with aged cheese — crisp outside, airy inside.",
      ar: "لقمة من ولاية ميناس جيرايس. عجين نشا الكسافا مع الجبن المعتّق — قشرة خفيفة وقلب هاش."
    },
    nutrition: { kcal: 280, carbs: 26, protein: 9, fat: 14 },
    allergens: ["dairy"],
    tags: ["gluten-free", "vegetarian"]
  },
  {
    id: "moqueca-baiana",
    category: ["mains", "seafood"],
    image: "/images/moqueca-baiana.jpg",
    name: { pt: "Moqueca Baiana", en: "Bahian Moqueca", ar: "موكيكا باهيا" },
    short: {
      pt: "Peixe em leite de coco, coentro e dendê. Arroz e farofa.",
      en: "Fish in coconut milk, cilantro and dendê. With rice and farofa.",
      ar: "سمك في حليب جوز الهند وكزبرة ودنْدي. مع الأرز والفاروفا."
    },
    long: {
      pt: "Fusão afro-indígena com leite de coco e azeite de dendê. Cozimento gentil em panela de barro, mantendo o peixe suculento e aromático.",
      en: "Afro-indigenous fusion with coconut milk and dendê oil. Gently cooked in clay pot, keeping the fish juicy and aromatic.",
      ar: "دمج إفريقي-سكان أصليين بحليب جوز الهند وزيت الدنْدي. يُطهى برفق في قدر فخاري ليحافظ على عصارة السمك وعطره."
    },
    nutrition: { kcal: 620, carbs: 44, protein: 38, fat: 28 },
    allergens: ["seafood"],
    tags: ["halal", "seafood"]
  },
  {
    id: "encanto-de-coco",
    category: ["desserts"],
    image: "/images/encanto-de-coco.jpg",
    name: { pt: "Encanto de Coco", en: "Coconut Delight", ar: "حلوى جوز الهند" },
    short: {
      pt: "Pudim de coco com caramelo claro.",
      en: "Coconut custard with light caramel.",
      ar: "كاسترد جوز الهند بكراميل خفيف."
    },
    long: {
      pt: "Sobremesa fresca e cremosa, lembrança das casas do litoral brasileiro. Leve, aromática e final perfeita para o menu.",
      en: "Silky and fresh — a memory of Brazil’s coast homes. Light, aromatic, a perfect finish.",
      ar: "حلوى ناعمة ومنعشة تذكّر ببيوت الساحل البرازيلي — خفيفة وعطرية وخاتمة مثالية."
    },
    nutrition: { kcal: 430, carbs: 50, protein: 7, fat: 22 },
    allergens: ["dairy"],
    tags: []
  },
  {
    id: "sol-do-cerrado",
    category: ["beverages"],
    image: "/images/sol-do-cerrado.jpg",
    name: { pt: "Sol do Cerrado", en: "Savanna Sun", ar: "شمس السافانا" },
    short: {
      pt: "Manga com maracujá, hortelã e toque cítrico.",
      en: "Mango & passionfruit, mint and citrus.",
      ar: "مانجو وباشن فروت مع نعناع ولمسة حمضية."
    },
    long: {
      pt: "Refresco não alcoólico inspirado no bioma do Cerrado. Frutado, aromático e vibrante.",
      en: "Non-alcoholic refresher inspired by the Cerrado biome. Fruity, aromatic and vibrant.",
      ar: "مشروب غير كحولي مستوحى من بيئة السافانا البرازيلية. فواكه وعطر وحيوية."
    },
    nutrition: { kcal: 160, carbs: 38, protein: 1, fat: 0 },
    allergens: [],
    tags: ["vegan", "halal"]
  }
];
