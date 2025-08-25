export const CATS = {
  MAINS: "mains",
  SIDES: "sides",
  DESSERTS: "desserts",
  BEV: "beverages",
  SEASONAL: "seasonal",
  CHEF: "chefs",
};

// helper para criar campos de texto por idioma
const tr = (pt, en, ar) => ({ pt, en, ar });

export const MENU = [
  // === PRINCIPAIS (histórias) ===
  {
    id: "vaca-atolada",
    image: "/images/vaca-atolada.jpg",
    category: CATS.MAINS,
    badge: ["halal", "beef", "gluten", "dairy"],
    name: tr(
      "Vaca Atolada (Ossobuco)",
      "Vaca Atolada (Ossobuco)",
      "ڤاكا أتولادا (عظم ساق البقر)"
    ),
    short: tr(
      "Ossobuco com polenta cremosa e rúcula cítrica.",
      "Ossobuco with creamy polenta and citrus arugula.",
      "عظم الساق مع بولينتا كريمية وجرجير ليموني."
    ),
    long: tr(
      "Clássico das cozinhas mineiras da roça. O ossobuco cozinha devagar até o tutano perfumar o caldo — ‘atolado’ num molho espesso que pede colher. Nossa versão vem com polenta cremosa e toque cítrico para equilibrar a untuosidade.",
      "A countryside classic from Minas. Beef shank braised low and slow until bone marrow perfumes the broth — ‘drowned’ in a rich sauce. Served with creamy polenta and a citrus note to balance richness.",
      "طبق ريفي من ولاية ميناس. يُطهى عظم الساق ببطء حتى يعطّر النخاع المرق — وكأنه “غارق” في صلصة غنية. يُقدّم مع بولينتا كريمية ولمسة حمضية للتوازن."
    ),
    nutri: { kcal: 780, carbs: 38, protein: 48, fat: 46 },
  },
  {
    id: "feijoada-costela",
    image: "/images/feijoada-costela.jpg",
    category: CATS.MAINS,
    badge: ["halal", "beef", "gluten"],
    name: tr("Feijoada de Costela", "Beef Rib Feijoada", "فيجوادا ضلع البقر"),
    short: tr(
      "Feijão preto com costela, farofa de banana e vinagrete.",
      "Black beans with beef ribs, banana farofa and vinaigrette.",
      "فاصوليا سوداء مع ضلع بقري وفاروفا بالموز وسلطة."
    ),
    long: tr(
      "A feijoada reúne o encontro de povos no Brasil: técnica africana, ingredientes indígenas e tempero português. Aqui, costela bovina cozida ao ponto, farofa de banana e vinagrete refrescante.",
      "Feijoada tells Brazil’s history: African technique, native ingredients and Portuguese seasoning. Our version features tender beef ribs, banana farofa and a fresh vinaigrette.",
      "فيجوادا تحكي تاريخ البرازيل: تقنيات إفريقية ومكونات محلية وتتبيل برتغالي. نقدمها بضلع بقري طري وفاروفا بالموز وسلطة منعشة."
    ),
    nutri: { kcal: 890, carbs: 66, protein: 52, fat: 42 },
  },
  {
    id: "moqueca-baiana",
    image: "/images/moqueca-baiana.jpg",
    category: CATS.MAINS,
    badge: ["halal", "sea", "gluten", "dairy"],
    name: tr("Moqueca Baiana", "Bahian Moqueca", "موكيكا باهيا"),
    short: tr(
      "Peixe no leite de coco, urucum/dendê e coentro.",
      "Fish in coconut milk, annatto/dendê and cilantro.",
      "سمك بحليب جوز الهند مع دندِه وأناتو وكزبرة."
    ),
    long: tr(
      "Símbolo do litoral baiano. Cozimento gentil em panela de barro, perfume de leite de coco, urucum/dendê e coentro — caldo dourado e exuberante.",
      "Icon of Bahia’s coast. Gentle clay-pot cooking in coconut milk, annatto/dendê and cilantro — a golden, exuberant broth.",
      "أيقونة ساحل باهيا. يُطهى بلطف في قدر الطين مع حليب جوز الهند والدندِه والأناتو والكزبرة — مرق ذهبي غني."
    ),
    nutri: { kcal: 640, carbs: 24, protein: 44, fat: 38 },
  },
  {
    id: "picanha-grelhada",
    image: "/images/picanha-grelhada.jpg",
    category: CATS.CHEF,
    badge: ["halal", "beef", "dairy", "gluten"],
    name: tr("Picanha Grelhada", "Grilled Picanha", "بيكانيا مشوية"),
    short: tr(
      "Com risoto de cogumelos, polenta verde e molho de pimenta do reino.",
      "With mushroom risotto, green polenta and black-pepper sauce.",
      "مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    ),
    long: tr(
      "A picanha é o corte-símbolo do churrasco brasileiro — maciez, suculência e capa de gordura equilibrada. Servimos em ponto perfeito, com risoto de cogumelos e polenta verde.",
      "Picanha is Brazil’s iconic cut — tenderness, juiciness and a balanced fat cap. We grill it to the perfect doneness, served with mushroom risotto and green polenta.",
      "البيكانيا قطعة لحم أيقونية في البرازيل — طرية وعصّارية مع طبقة دهن متوازنة. تُشوى للنضج المثالي وتقدَّم مع ريزوتو الفطر وبولينتا خضراء."
    ),
    nutri: { kcal: 820, carbs: 36, protein: 50, fat: 52 },
  },
  {
    id: "pamonha",
    image: "/images/pamonha.jpg",
    category: CATS.SEASONAL,
    badge: ["veg", "gluten", "dairy"],
    name: tr("Pamonha (Sazonal)", "Pamonha (Seasonal)", "بامونيا (موسمي)"),
    short: tr(
      "Clássico de milho verde — doce ou salgado.",
      "Green-corn classic — sweet or savory.",
      "ذرة خضراء كلاسيكية — حلوة أو مالحة."
    ),
    long: tr(
      "Milho ralado, embrulhado na palha e cozido — técnica ancestral presente de Norte a Sul. Textura cremosa e sabor de festa junina.",
      "Grated green corn steamed in its husk — an ancestral technique found across Brazil. Creamy texture and festa-junina nostalgia.",
      "ذرة خضراء مبشورة تُطهى داخل قشرتها — تقنية قديمة من شمال البرازيل إلى جنوبها. قوام كريمي ومذاق المهرجانات الشعبية."
    ),
    nutri: { kcal: 420, carbs: 68, protein: 10, fat: 12 },
  },

  // === DEMAIS ITENS (todos da sua pasta) ===
  {
    id: "galinhada-caipira",
    image: "/images/galinhada-caipira.jpg",
    category: CATS.MAINS,
    badge: ["halal", "gluten"],
    name: tr("Galinhada Caipira", "Country Chicken Rice", "جالينهادَا ريفية"),
    short: tr(
      "Arroz de quintal com frango, açafrão e cheiro-verde.",
      "Country-style chicken rice with turmeric and herbs.",
      "أرز ريفي بالدجاج والكركم والأعشاب."
    ),
    long: tr(
      "Receita de fogão a lenha — arroz soltinho com frango e açafrão-da-terra.",
      "Wood-fire recipe — fluffy rice with chicken and turmeric.",
      "وصفة موقد الحطب — أرز مفلفل مع الدجاج والكركم."
    ),
    nutri: { kcal: 610, carbs: 62, protein: 29, fat: 24 },
  },
  {
    id: "hamburguer-de-picanha",
    image: "/images/hamburguer-de-picanha.jpg",
    category: CATS.MAINS,
    badge: ["halal", "beef", "gluten", "dairy"],
    name: tr("Hambúrguer de Picanha", "Picanha Burger", "برغر بيكانيا"),
    short: tr("Blend de picanha, macio e suculento.", "Picanha blend, juicy and tender.", "مزيج بيكانيا طري وعصاري."),
    long: tr(
      "Sanduíche de casa com blend de picanha e pão macio.",
      "House burger with picanha blend and soft bun.",
      "برغر محلي بمزيج بيكانيا وخبز طري."
    ),
    nutri: { kcal: 780, carbs: 45, protein: 36, fat: 48 },
  },

  // Sides
  {
    id: "farofa-de-castanha",
    image: "/images/farofa-de-castanha.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "veg"],
    name: tr("Farofa de Castanha", "Nut Farofa", "فاروفا بالجوز"),
    short: tr(
      "Torrada na manteiga com castanhas do Brasil.",
      "Toasted cassava flour with Brazil nuts.",
      "دقيق كسافا محمّص مع مكسرات برازيلية."
    ),
    long: tr(
      "Energia da roça: farofa crocante que acompanha tudo.",
      "Country energy: crunchy farofa that goes with everything.",
      "طاقة ريفية: فاروفا مقرمشة تناسب كل الأطباق."
    ),
    nutri: { kcal: 280, carbs: 24, protein: 4, fat: 18 },
  },
  {
    id: "pao-de-queijo",
    image: "/images/pao-de-queijo.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "dairy", "veg"],
    name: tr("Pão de Queijo", "Cheese Bread", "خبز الجبن"),
    short: tr(
      "Tradicional, macio e quentinho.",
      "Traditional, soft and warm.",
      "تقليدي وطري وساخن."
    ),
    long: tr(
      "Receita mineira com polvilho e queijo curado.",
      "Minas recipe with cassava starch and aged cheese.",
      "وصفة ميناس بنشا الكسافا والجبن المعتّق."
    ),
    nutri: { kcal: 210, carbs: 22, protein: 6, fat: 10 },
  },
  {
    id: "pao-de-alho",
    image: "/images/pao-de-alho.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "dairy", "veg"],
    name: tr("Pão de Alho", "Garlic Bread", "خبز بالثوم"),
    short: tr("Crocante por fora, cremoso por dentro.", "Crispy outside, creamy inside.", "مقرمش من الخارج وكريمي من الداخل."),
    long: tr(
      "Clássico do churrasco — manteiga de alho e ervas.",
      "Brazilian BBQ classic — garlic-herb butter.",
      "كلاسيكي الشواء — زبدة الثوم والأعشاب."
    ),
    nutri: { kcal: 260, carbs: 28, protein: 6, fat: 12 },
  },
  {
    id: "polenta-frita",
    image: "/images/polenta-frita.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "dairy", "veg"],
    name: tr("Polenta Frita", "Fried Polenta", "بولينتا مقلية"),
    short: tr("Dourada por fora, cremosa por dentro.", "Golden outside, creamy inside.", "ذهبية من الخارج وكريمية من الداخل."),
    long: tr(
      "Milho amarelo em bastões, perfeito para compartilhar.",
      "Golden corn sticks, perfect to share.",
      "عيدان ذرة ذهبية مثالية للمشاركة."
    ),
    nutri: { kcal: 320, carbs: 40, protein: 6, fat: 14 },
  },
  {
    id: "mandioca-frita",
    image: "/images/mandioca-frita.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "veg"],
    name: tr("Mandioca Frita", "Fried Cassava", "كاسافا مقلية"),
    short: tr("Cremosa por dentro, crocante por fora.", "Creamy inside, crispy outside.", "كريمية من الداخل ومقرمشة من الخارج."),
    long: tr(
      "Clássico de boteco — mandioca real, bem temperada.",
      "Pub classic — real cassava, well seasoned.",
      "كلاسيكية الحانات — كاسافا حقيقية متبّلة جيدًا."
    ),
    nutri: { kcal: 340, carbs: 54, protein: 4, fat: 12 },
  },
  {
    id: "mandioca-real",
    image: "/images/mandioca-real.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "veg"],
    name: tr("Mandioca Real", "Slow-Cooked Cassava", "كاسافا مطهية ببطء"),
    short: tr("Cozida lentamente, manteiga de garrafa.", "Slow-cooked, clarified butter.", "مطهية ببطء مع زبدة مصفّاة."),
    long: tr(
      "Textura que desmancha: cozinha longa e paciência.",
      "Melt-in-mouth texture from patient cooking.",
      "قوام يذوب في الفم بفضل صبر الطهي."
    ),
    nutri: { kcal: 300, carbs: 50, protein: 3, fat: 10 },
  },

  // Doces
  {
    id: "encanto-de-coco",
    image: "/images/encanto-de-coco.jpg",
    category: CATS.DESSERTS,
    badge: ["dairy", "gluten", "veg"],
    name: tr("Encanto de Coco", "Coconut Delight", "سحر جوز الهند"),
    short: tr("Pudim de coco com caramelo claro.", "Coconut pudding with light caramel.", "بودينغ جوز الهند بكراميل خفيف."),
    long: tr(
      "Doce de infância: leve e perfumado.",
      "Light, fragrant childhood dessert.",
      "حلوى طفولة خفيفة وعطرة."
    ),
    nutri: { kcal: 290, carbs: 42, protein: 6, fat: 10 },
  },
  {
    id: "doce-da-roca-com-gelo",
    image: "/images/doce-da-roca-com-gelo.jpg",
    category: CATS.DESSERTS,
    badge: ["dairy", "gluten", "veg"],
    name: tr("Doce da Roça com Gelo", "Farmhouse Sweet & Ice", "حلوى الريف مع مثلجات"),
    short: tr("Abóbora cremosa e sorvete artesanal.", "Creamy pumpkin & ice cream.", "يقطين كريمي مع آيس كريم."),
    long: tr("Cheiro de canela e fazenda.", "Cinnamon & farmhouse scent.", "عبق القرفة والريف."),
    nutri: { kcal: 330, carbs: 48, protein: 5, fat: 12 },
  },

  // Bebidas (todas da sua lista)
  {
    id: "sol-do-cerrado",
    image: "/images/sol-do-cerrado.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Sol do Cerrado", "Cerrado Sun", "شمس السِرّادو"),
    short: tr("Manga, maracujá, hortelã e toque cítrico.", "Mango, passion fruit, mint and citrus.", "مانجو وباشن فروت ونعناع ولمسة حمضية."),
    long: tr(
      "Refresco brasileiro, vibrante e perfumado.",
      "Vibrant, fragrant Brazilian refresher.",
      "منعش برازيلي نابض بالعطر."
    ),
    nutri: { kcal: 160, carbs: 38, protein: 2, fat: 0 },
  },
  {
    id: "uva-limao-gelo",
    image: "/images/uva-limao-gelo.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Uva & Limão Gelo", "Grape & Lime Ice", "عنب وليمون مثلّج"),
    short: tr("Suco de uva integral com limão e hortelã.", "Whole-grape juice with lime & mint.", "عصير عنب كامل مع ليمون ونعناع."),
    long: tr("Ácido, doce, equilibrado.", "Sweet-tart balance.", "توازن حلو لاذع."),
    nutri: { kcal: 150, carbs: 35, protein: 1, fat: 0 },
  },
  {
    id: "amazon-breeze",
    image: "/images/amazon-breeze.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Brisa da Amazônia", "Amazon Breeze", "نسيم الأمازون"),
    short: tr("Caju, cupuaçu e maracujá (sem álcool).", "Cashew, cupuaçu & passion fruit (non-alcoholic).", "كاجو وكوبواصو وباشن فروت (بدون كحول)."),
    long: tr("Aroma tropical da floresta.", "Tropical rainforest aroma.", "عطر الغابة الاستوائية."),
    nutri: { kcal: 170, carbs: 39, protein: 1, fat: 1 },
  },
  {
    id: "blueberry-coco-fizz",
    image: "/images/blueberry-coco-fizz.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Mirtilo & Coco Fizz", "Blueberry Coco Fizz", "بلو بيري وجوز الهند فوّار"),
    short: tr("Mirtilo, água de coco e limão.", "Blueberry, coconut water and lime.", "توت أزرق وماء جوز الهند وليمون."),
    long: tr("Leve e refrescante.", "Light & refreshing.", "خفيف ومنعش."),
    nutri: { kcal: 120, carbs: 28, protein: 1, fat: 0 },
  },
  {
    id: "caipile-classico",
    image: "/images/caipile-classico.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Caipilé Clássico", "Classic Caipilé (non-alcoholic)", "آيس بوب لايم كلاسيكي (بدون كحول)"),
    short: tr("Limão, açúcar mascavo, hortelã.", "Lime, brown sugar, mint.", "ليمون وسكر بني ونعناع."),
    long: tr("Versão sem álcool, geladinha.", "Non-alcoholic iced version.", "نسخة مثلّجة بدون كحول."),
    nutri: { kcal: 110, carbs: 27, protein: 0, fat: 0 },
  },
  {
    id: "frescor-da-amazonia",
    image: "/images/frescor-da-amazonia.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Frescor da Amazônia", "Amazon Fresh", "انتعاش الأمازون"),
    short: tr("Cupuaçu, ervas, notas cítricas.", "Cupuaçu, herbs, citrus hints.", "كوبواصو وأعشاب ولمسات حمضية."),
    long: tr("Cremosidade e perfume de mata.", "Creamy, forest-like aroma.", "قوام كريمي وعطر الغابة."),
    nutri: { kcal: 180, carbs: 40, protein: 2, fat: 2 },
  },
  {
    id: "pe-de-serra",
    image: "/images/pe-de-serra.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Pé-de-Serra", "Pe-de-Serra", "بي دي سِهرا"),
    short: tr("Caju, limão e toque de rapadura.", "Cashew, lime and raw sugar.", "كاجو وليمون وسكر خام."),
    long: tr("Sertão no copo.", "The backlands in a glass.", "طعم السهوب في كوب."),
    nutri: { kcal: 160, carbs: 37, protein: 1, fat: 0 },
  },
  {
    id: "verao-brasil",
    image: "/images/verao-brasil.jpg",
    category: CATS.BEV,
    badge: ["veg"],
    name: tr("Verão Brasil", "Brazilian Summer", "صيف البرازيل"),
    short: tr("Caju, manga, gelo picado.", "Cashew, mango, crushed ice.", "كاجو ومانجو وثلج مجروش."),
    long: tr("Doçura tropical.", "Tropical sweetness.", "حلاوة استوائية."),
    nutri: { kcal: 170, carbs: 39, protein: 1, fat: 0 },
  },
  {
    id: "vitamina-do-cerrado",
    image: "/images/vitamina-do-cerrado.jpg",
    category: CATS.BEV,
    badge: ["veg", "dairy"],
    name: tr("Vitamina do Cerrado", "Cerrado Smoothie", "سموثي السِرّادو"),
    short: tr("Caju, banana e leite (opção vegetal).", "Cashew, banana & milk (plant option).", "كاجو وموز وحليب (خيار نباتي)."),
    long: tr("Cremoso e nutritivo.", "Creamy and nutritious.", "كريمي ومغذٍ."),
    nutri: { kcal: 220, carbs: 42, protein: 6, fat: 5 },
  },

  // Petiscos/mais
  {
    id: "coxinhas-de-costela",
    image: "/images/coxinhas-de-costela.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "dairy", "beef"],
    name: tr("Coxinhas de Costela", "Beef-Rib Coxinhas", "كوشينيا ضلع بقري"),
    short: tr("Massa leve, recheio suculento.", "Light dough, juicy filling.", "عجين خفيف وحشو عصاري."),
    long: tr(
      "Clássico brasileiro com recheio de costela bovina.",
      "Brazilian classic filled with beef rib.",
      "كلاسيكي برازيلي محشو بضلع بقري."
    ),
    nutri: { kcal: 340, carbs: 32, protein: 12, fat: 18 },
  },
  {
    id: "lasanha-banana",
    image: "/images/lasanha-banana.jpg",
    category: CATS.CHEF,
    badge: ["gluten", "dairy", "veg"],
    name: tr("Lasanha de Banana", "Banana Lasagna", "لازانيا الموز"),
    short: tr("Camadas salgadas e adocicadas.", "Savory-sweet layers.", "طبقات مالحة حلوة."),
    long: tr(
      "Receita autoral inspirada na cozinha caipira.",
      "Authorial recipe inspired by countryside cuisine.",
      "وصفة مبتكرة مستوحاة من مطبخ الريف."
    ),
    nutri: { kcal: 520, carbs: 64, protein: 14, fat: 22 },
  },
  {
    id: "pasteis-brasileiros",
    image: "/images/pasteis-brasileiros.jpg",
    category: CATS.SIDES,
    badge: ["gluten", "dairy"],
    name: tr("Pastéis Brasileiros", "Brazilian Pastéis", "فطائر برازيلية"),
    short: tr("Massa crocante, recheios variados.", "Crispy pastry, assorted fillings.", "عجين مقرمش بحشوات متنوعة."),
    long: tr(
      "De feira: queijo, carne e opções do dia.",
      "Street-market style: cheese, beef and daily options.",
      "على طريقة الأسواق الشعبية: جبن ولحم وخيارات يومية."
    ),
    nutri: { kcal: 330, carbs: 34, protein: 9, fat: 18 },
  },
  {
    id: "rubacao",
    image: "/images/rubacao.jpg",
    category: CATS.MAINS,
    badge: ["halal", "gluten"],
    name: tr("Rubacão", "Rubacão", "روباكان"),
    short: tr("Arroz, feijão e queijo coalho.", "Rice, beans & queijo coalho.", "أرز وفاصوليا وجبن كويلهو."),
    long: tr("Nordeste no prato: conforto imediato.", "Northeast comfort dish.", "طبق راحة من الشمال الشرقي."),
    nutri: { kcal: 690, carbs: 76, protein: 24, fat: 26 },
  },
];
