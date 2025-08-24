// src/menuData.js
export const MENU = [
  /* === PRINCIPAIS / DO CHEF === */
  {
    id: "vaca-atolada",
    category: ["mains", "chef"],
    image: "/images/vaca-atolada.jpg",
    name: { pt:"Vaca Atolada (Ossobuco)", en:"Vaca Atolada (Ossobuco)", ar:"‏Vaca Atolada (أوسوبوكو)" },
    short: {
      pt:"Ossobuco com polenta cremosa e rúcula cítrica.",
      en:"Braised ossobuco with creamy polenta and citrus arugula.",
      ar:"أوسوبوكو مطهو مع بولينتا كريمية وجرجير بنكهة الحمضيات."
    },
    long: {
      pt:"Clássico caipira. Cozimento lento até soltar do osso, servido sobre polenta — herança italiana — finalizado com rúcula cítrica.",
      en:"Countryside classic. Slow-braised beef shank over creamy polenta — an Italian heritage — finished with citrus arugula.",
      ar:"طبق ريفي. يُطهى ببطء حتى يذوب ويُقدَّم مع بولينتا كريمية بأسلوب إيطالي مع جرجير حمضي."
    },
    nutrition:{kcal:720,carbs:48,protein:42,fat:36},
    allergens:["dairy","gluten"],
    tags:["halal"]
  },
  {
    id: "feijoada-costela",
    category: ["mains"],
    image: "/images/feijoada-costela.jpg",
    name:{pt:"Feijoada de Costela",en:"Beef Rib Feijoada",ar:"فيجوادا بالضلوع"},
    short:{
      pt:"Feijão preto com costela, farofa de banana e vinagrete.",
      en:"Black beans with beef ribs, banana farofa and vinaigrette.",
      ar:"فاصوليا سوداء مع ضلوع البقر وفاروفا الموز وفيناغريت."
    },
    long:{
      pt:"Ícone brasileiro de raízes africanas. Usamos cortes bovinos halal e fogo longo para caldo brilhante e profundo.",
      en:"Brazilian icon with African roots. Halal beef cuts and long fire for a glossy, deep broth.",
      ar:"رمز برازيلي بجذور إفريقية. لحم بقر حلال وطهي طويل لمرق غني لامع."
    },
    nutrition:{kcal:850,carbs:65,protein:55,fat:38},
    allergens:[],
    tags:["halal","gluten"]
  },
  {
    id: "picanha-grelhada",
    category:["mains","chef"],
    image:"/images/picanha-grelhada.jpg",
    name:{pt:"Picanha Grelhada",en:"Grilled Picanha",ar:"بيكانيا مشوية"},
    short:{
      pt:"Com risoto de cogumelos, polenta verde e molho de pimenta do reino.",
      en:"With mushroom risotto, green polenta and black-pepper sauce.",
      ar:"مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود."
    },
    long:{
      pt:"Símbolo do churrasco do Sul. Corte com capa de gordura que protege e perfuma a carne. Crosta grelhada, risoto de cogumelos e polenta verde.",
      en:"Southern BBQ icon. Fat-cap cut that protects and perfumes the meat. Seared crust, mushroom risotto and green polenta.",
      ar:"رمز شواء الجنوب. طبقة الدهن تحمي اللحم وتُعطره. قشرة محمّرة مع ريزوتو الفطر وبولينتا خضراء."
    },
    nutrition:{kcal:780,carbs:52,protein:46,fat:40},
    allergens:["dairy"], tags:["halal"]
  },
  {
    id:"galinhada-caipira",
    category:["mains"],
    image:"/images/galinhada-caipira.jpg",
    name:{pt:"Galinhada Caipira",en:"Country Chicken Rice",ar:"جالينهادا ريفية"},
    short:{
      pt:"Arroz de quintal com frango marinado e cheiro-verde.",
      en:"Backyard-style rice with marinated chicken and herbs.",
      ar:"أرز على طريقة البيت مع دجاج متبّل وأعشاب."
    },
    long:{
      pt:"Prato de partilha do Centro-Oeste. Arroz cozido no caldo do frango, açafrão-da-terra e ervas do quintal — sabor de fogão a lenha.",
      en:"Sharing dish from Brazil’s Midwest. Rice cooked in chicken broth with turmeric and garden herbs — wood-fire soul.",
      ar:"طبق اجتماعي من وسط البرازيل. يُطهى الأرز بمرق الدجاج مع الكركم وأعشاب الحديقة — روح موقد الحطب."
    },
    nutrition:{kcal:640,carbs:62,protein:35,fat:22},
    allergens:[], tags:["halal"]
  },

  /* === ACOMPANHAMENTOS === */
  {
    id:"pao-de-queijo",
    category:["sides","vegetarian"],
    image:"/images/pao-de-queijo.jpg",
    name:{pt:"Pão de Queijo",en:"Cheese Bread",ar:"خبز الجبن"},
    short:{pt:"Tradicional, macio e quentinho.",en:"Traditional, soft and warm.",ar:"تقليدي، طري ودافئ."},
    long:{
      pt:"Minas Gerais em forma de pão. Polvilho e queijo curado — casquinha por fora e maciez por dentro.",
      en:"Minas Gerais in a bite. Cassava starch and aged cheese — crisp outside, airy inside.",
      ar:"ولاية ميناس في لقمة. نشا الكسافا مع الجبن المعتّق — قشرة خفيفة وقلب هاش."
    },
    nutrition:{kcal:280,carbs:26,protein:9,fat:14},
    allergens:["dairy"], tags:["gluten-free","vegetarian"]
  },
  {
    id:"polenta-frita",
    category:["sides"],
    image:"/images/polenta-frita.jpg",
    name:{pt:"Polenta Frita",en:"Crispy Polenta",ar:"بولينتا مقلية"},
    short:{pt:"Dourada por fora, cremosa por dentro.",en:"Golden outside, creamy inside.",ar:"ذهبية من الخارج وكريمية من الداخل."},
    long:{
      pt:"Herança italiana que o interior adotou. Frita em cortes espessos para crocância e maciez.",
      en:"Italian heritage embraced by the countryside. Thick-cut and fried for crunch and creaminess.",
      ar:"تراث إيطالي تبنّاه الريف. تُقلى بقطع سميكة لقرمشة مع قوام كريمي."
    },
    nutrition:{kcal:360,carbs:48,protein:6,fat:16}, allergens:[], tags:[]
  },
  {
    id:"farofa-de-castanha",
    category:["sides"],
    image:"/images/farofa-de-castanha.jpg",
    name:{pt:"Farofa de Castanha",en:"Nut Farofa",ar:"فاروفا بالمكسرات"},
    short:{pt:"Crocante e aromática.",en:"Crunchy and aromatic.",ar:"مقرمشة وعطرية."},
    long:{
      pt:"Farinha de mandioca tostada com castanhas brasileiras e ervas. Acompanha bem grelhados e feijoada.",
      en:"Toasted cassava flour with Brazilian nuts and herbs. Great with grills and feijoada.",
      ar:"دقيق الكسافا المحمّص مع مكسرات وأعشاب. مثالي مع المشاوي والفيجوادا."
    },
    nutrition:{kcal:220,carbs:28,protein:4,fat:10}, allergens:["nuts"], tags:[]
  },

  /* === FRUTOS DO MAR === */
  {
    id:"moqueca-baiana",
    category:["mains","seafood"],
    image:"/images/moqueca-baiana.jpg",
    name:{pt:"Moqueca Baiana",en:"Bahian Moqueca",ar:"موكيكا باهيا"},
    short:{pt:"Peixe em leite de coco, coentro e dendê.",en:"Fish in coconut milk, cilantro and dendê.",ar:"سمك في حليب جوز الهند وكزبرة ودنْدي."},
    long:{
      pt:"Fusão afro-indígena. Cozimento gentil em **panela de barro**, mantendo suculência e perfume do dendê.",
      en:"Afro-indigenous fusion. Gently cooked in a **clay pot**, keeping the fish juicy and perfumed with dendê.",
      ar:"دمج إفريقي-سكان أصليين. يُطهى برفق في **قدر فخاري** ليحافظ على العصارة وعطر الدنْدي."
    },
    nutrition:{kcal:620,carbs:44,protein:38,fat:28}, allergens:["seafood"], tags:["halal","seafood"]
  },

  /* === PETISCOS / REGIONAIS === */
  {
    id:"coxinhas-de-costela",
    category:["sides"],
    image:"/images/coxinhas-de-costela.jpg",
    name:{pt:"Coxinhas de Costela",en:"Short-rib Coxinhas",ar:"كوشينيا أضلاع"},
    short:{pt:"Massa leve e recheio de costela desfiada.",en:"Light dough, shredded short-rib filling.",ar:"عجين خفيف وحشوة أضلاع ممزقة."},
    long:{
      pt:"Clássico de boteco em versão bovina halal. Crocante por fora, suculento por dentro.",
      en:"Bar classic in a halal beef version. Crunchy outside, juicy inside.",
      ar:"إصدار حلال من كلاسيكيات الحانات. مقرمش من الخارج وعصير من الداخل."
    },
    nutrition:{kcal:410,carbs:38,protein:16,fat:20}, allergens:["gluten"], tags:["halal"]
  },
  {
    id:"rubacao",
    category:["mains"],
    image:"/images/rubacao.jpg",
    name:{pt:"Rubacão",en:"Rubacão",ar:"روباكان"},
    short:{pt:"Arroz e feijão verde, queijo coalho e carne seca bovina halal.",en:"Rice & green beans, queijo coalho and halal dried beef.",ar:"أرز وفاصوليا خضراء مع جبن كوالهو ولحم بقري حلال مجفف."},
    long:{
      pt:"Clássico do Nordeste. Mistura cremosa que celebra a fartura da casa nordestina.",
      en:"Classic from Brazil’s Northeast. Creamy, hearty mix celebrating home abundance.",
      ar:"طبق شمال شرقي كلاسيكي بقوام كريمي غني يعبّر عن كرم البيت."
    },
    nutrition:{kcal:710,carbs:64,protein:34,fat:30}, allergens:["dairy"], tags:["halal"]
  },
  {
    id:"pamonha",
    category:["desserts","seasonal","vegetarian"],
    image:"/images/pamonha.jpg",
    name:{pt:"Pamonha (Sazonal)",en:"Pamonha (Seasonal)",ar:"بامونيا (موسمية)"},
    short:{pt:"Clássico de milho verde — doce ou salgada.",en:"Green-corn classic — sweet or savory.",ar:"كلاسيك الذرة الخضراء — حلو أو مالح."},
    long:{
      pt:"Receita de roça embrulhada na palha. Textura macia, sabor de milho fresco — lembrança das festas juninas.",
      en:"Farm recipe wrapped in corn husk. Soft texture, fresh-corn flavor — a taste of Brazilian festivities.",
      ar:"وصفة ريفية ملفوفة بقشور الذرة. قوام طري ومذاق الذرة الطازجة — من أجواء الأعياد البرازيلية."
    },
    nutrition:{kcal:330,carbs:58,protein:7,fat:8}, allergens:[], tags:["vegetarian"]
  },

  /* === BEBIDAS === */
  {
    id:"sol-do-cerrado",
    category:["beverages"],
    image:"/images/sol-do-cerrado.jpg",
    name:{pt:"Sol do Cerrado",en:"Savanna Sun",ar:"شمس السافانا"},
    short:{pt:"Manga com maracujá, hortelã e toque cítrico.",en:"Mango & passionfruit, mint and citrus.",ar:"مانجو وباشن فروت مع نعناع ولمسة حمضية."},
    long:{
      pt:"Refresco não alcoólico inspirado no bioma do Cerrado. Frutado e vibrante.",
      en:"Non-alcoholic refresher inspired by the Cerrado biome. Fruity and vibrant.",
      ar:"مشروب غير كحولي مستوحى من بيئة السافانا البرازيلية، فاكهي ومنعش."
    },
    nutrition:{kcal:160,carbs:38,protein:1,fat:0}, allergens:[], tags:["vegan","halal"]
  },
  {
    id:"amazon-breeze",
    category:["beverages"],
    image:"/images/amazon-breeze.jpg",
    name:{pt:"Amazon Breeze",en:"Amazon Breeze",ar:"نسيم الأمازون"},
    short:{pt:"Açaí leve com frutas cítricas. Sem álcool.",en:"Light açaí with citrus. Non-alcoholic.",ar:"أساي خفيف مع حمضيات، بلا كحول."},
    long:{
      pt:"Inspirado no frescor da Amazônia — frutas roxas e cítricas em equilíbrio.",
      en:"Inspired by Amazon freshness — purple fruit and citrus in balance.",
      ar:"مستوحى من نضارة الأمازون — ثمار بنفسجية مع الحمضيات بتوازن."
    },
    nutrition:{kcal:180,carbs:42,protein:2,fat:1}, allergens:[], tags:["vegan","halal"]
  }
];
