// src/menuData.js
// Lista de pratos. Traduzidos e com tags/nutrição (exemplo).

const L = (pt, en, ar) => ({ pt, en, ar });

export const MENU = [
  {
    id:"vaca-atolada",
    img:"/images/vaca-atolada.jpg",
    cat:"mains",
    flags:["mains"],
    tags:["halal","beef","gluten","dairy"],
    i18n:L(
      {name:"Vaca Atolada (Ossobuco)", desc:"Ossobuco com polenta cremosa e rúcula cítrica.", long:"Clássico caipira cozido lentamente; a polenta faz par com o colágeno do ossobuco."},
      {name:"Beef Shank with Polenta", desc:"Ossobuco with creamy polenta and citrus arugula.", long:"Slow-braised shank, creamy polenta and bright arugula."},
      {name:"عظم بقري مع بولينتا", desc:"عظم بقري مطهو ببطء مع بولينتا كريمية وجرجير حمضي.", long:"نَضج بطيء يذيب النكهات؛ مزيج دسم ومنعش."}
    ),
    nutrition:{ kcal:720, carbs:38, protein:45, fat:40, sodium:980 }
  },
  {
    id:"feijoada-costela",
    img:"/images/feijoada-costela.jpg",
    cat:"mains",
    flags:["mains"],
    tags:["halal","beef","gluten"],
    i18n:L(
      {name:"Feijoada de Costela", desc:"Feijão preto com costela, farofa de banana e vinagrete.", long:"Versão moderna sem porco: costela bovina, feijão preto e guarnições clássicas."},
      {name:"Beef Rib Feijoada", desc:"Black beans with beef ribs, banana farofa and vinaigrette.", long:"Pork-free feijoada with beef ribs and traditional sides."},
      {name:"فيجوادا بلحم البقر", desc:"فاصولياء سوداء مع أضلاع بقرية وفاروفا الموز وفيناغريت.", long:"فيجوادا بدون لحم خنزير."}
    ),
    nutrition:{ kcal:680, carbs:52, protein:39, fat:32, sodium:900 }
  },
  {
    id:"picanha-grelhada",
    img:"/images/picanha-grelhada.jpg",
    cat:"mains",
    flags:["chef"],
    tags:["halal","beef","dairy","gluten"],
    i18n:L(
      {name:"Picanha Grelhada", desc:"Com risoto de cogumelos, polenta verde e molho de pimenta do reino.", long:"Corte símbolo do churrasco brasileiro, com risoto e cremosidade de milho verde."},
      {name:"Grilled Picanha", desc:"With mushroom risotto, green polenta and black-pepper sauce.", long:"Iconic Brazilian cut, seared and paired with creamy sides."},
      {name:"بيكانيا مشوية", desc:"مع ريزوتو الفطر وبولينتا خضراء وصلصة الفلفل الأسود.", long:"قطعة برازيلية أيقونية مشوية بإتقان."}
    ),
    nutrition:{ kcal:790, carbs:44, protein:48, fat:46, sodium:920 }
  },
  {
    id:"moqueca-baiana",
    img:"/images/moqueca-baiana.jpg",
    cat:"mains",
    flags:["mains"],
    tags:["halal","sea","gluten","dairy"],
    i18n:L(
      {name:"Moqueca Baiana", desc:"Peixe no leite de coco, urucum/dendê e coentro.", long:"Cozido ancestral em panela de barro — perfume de coco, pimentas e ervas."},
      {name:"Bahian Moqueca", desc:"Fish in coconut milk, annatto/dendê and cilantro.", long:"Clay-pot stew with deep, perfumed broth."},
      {name:"موكيكا بايانا", desc:"سمك بحليب جوز الهند وزيت الدنديه والكزبرة.", long:"حساء طاجن طيني بعطر استوائي."}
    ),
    nutrition:{ kcal:560, carbs:24, protein:41, fat:32, sodium:780 }
  },
  {
    id:"pamonha",
    img:"/images/pamonha.jpg",
    cat:"mains",
    flags:["seasonal"],
    tags:["veg","gluten","dairy"],
    i18n:L(
      {name:"Pamonha (Sazonal)", desc:"Clássico de milho verde — doce ou salgado.", long:"Receita de roça, envolta na própria palha do milho."},
      {name:"Pamonha (Seasonal)", desc:"Green-corn classic — sweet or savory.", long:"Farm-style recipe wrapped in corn husk."},
      {name:"بامونيا (موسمية)", desc:"ذرة خضراء — حلوة أو مالحة.", long:"وصفة ريفية ملفوفة بورق الذرة."}
    ),
    nutrition:{ kcal:420, carbs:60, protein:9, fat:15, sodium:260 }
  },
  {
    id:"polenta-frita",
    img:"/images/polenta-frita.jpg",
    cat:"sides",
    flags:["sides"],
    tags:["gluten"],
    i18n:L(
      {name:"Polenta Frita", desc:"Dourada por fora, cremosa por dentro.", long:"Acompanhamento perfeito para carnes e molhos."},
      {name:"Fried Polenta", desc:"Golden outside, creamy inside.", long:"Comfort side for meats and sauces."},
      {name:"بولينتا مقلية", desc:"مقرمشة من الخارج وكريمية من الداخل.", long:"مقبل لذيذ للأطباق الرئيسية."}
    ),
    nutrition:{ kcal:320, carbs:42, protein:6, fat:14, sodium:340 }
  },
  {
    id:"pao-de-queijo",
    img:"/images/pao-de-queijo.jpg",
    cat:"sides",
    flags:["sides"],
    tags:["dairy","gluten"],
    i18n:L(
      {name:"Pão de Queijo", desc:"Tradicional, macio e quentinho.", long:"Clássico mineiro que abraça o café passado na hora."},
      {name:"Cheese Bread", desc:"Soft, warm and cheesy.", long:"Minas classic to pair with fresh coffee."},
      {name:"خبز الجبن", desc:"طري ودافئ وغني بالجبن.", long:"كلاسيكي من ميناس."}
    ),
    nutrition:{ kcal:260, carbs:22, protein:7, fat:15, sodium:330 }
  },
  {
    id:"encanto-de-coco",
    img:"/images/encanto-de-coco.jpg",
    cat:"desserts",
    flags:["desserts"],
    tags:["dairy","gluten"],
    i18n:L(
      {name:"Encanto de Coco", desc:"Pudim de coco com caramelo claro.", long:"Textura sedosa com doçura equilibrada."},
      {name:"Coconut Delight", desc:"Coconut flan with light caramel.", long:"Silky texture and balanced sweetness."},
      {name:"بودينج جوز الهند", desc:"بودينج جوز الهند مع كراميل خفيف.", long:"قوام ناعم وحلاوة متوازنة."}
    ),
    nutrition:{ kcal:380, carbs:48, protein:7, fat:16, sodium:180 }
  },
  {
    id:"doce-da-roca",
    img:"/images/doce-da-roca-com-gelo.jpg",
    cat:"desserts",
    flags:["desserts"],
    tags:["dairy","gluten"],
    i18n:L(
      {name:"Doce da Roça com Gelo", desc:"Abóbora cremosa com especiarias e sorvete.", long:"Memória de quintal com toque de especiarias."},
      {name:"Farm Pumpkin & Ice", desc:"Spiced creamy pumpkin with ice-cream.", long:"Backyard memories in a bowl."},
      {name:"حلوى القرع المنزلية", desc:"قرع كريمي متبّل مع آيس كريم.", long:"دفء النكهات المنزلية."}
    ),
    nutrition:{ kcal:420, carbs:55, protein:6, fat:18, sodium:160 }
  },
  {
    id:"cerrado-sun",
    img:"/images/sol-do-cerrado.jpg",
    cat:"beverages",
    flags:["beverages"],
    tags:["veg"],
    i18n:L(
      {name:"Sol do Cerrado", desc:"Manga, maracujá, hortelã e toque cítrico.", long:"Refresco tropical sem álcool."},
      {name:"Cerrado Sun", desc:"Mango, passion fruit, mint, citrus.", long:"Tropical, alcohol-free."},
      {name:"شمس السيرادو", desc:"مانجو وماراكوجا ونعناع ولمسة حمضية.", long:"منعش بدون كحول."}
    ),
    nutrition:{ kcal:140, carbs:34, protein:1, fat:0, sodium:12 }
  },
  {
    id:"amazon-breeze",
    img:"/images/amazon-breeze.jpg",
    cat:"beverages",
    flags:["beverages"],
    tags:["veg"],
    i18n:L(
      {name:"Brisa da Amazônia", desc:"Caju, cupuaçu e limão.", long:"Amazônico, perfumado e sem álcool."},
      {name:"Amazon Breeze", desc:"Cashew, cupuaçu and lime.", long:"Amazon-inspired and alcohol-free."},
      {name:"نسيم الأمازون", desc:"كاجو وكوبواسو وليمون.", long:"من دون كحول."}
    ),
    nutrition:{ kcal:130, carbs:30, protein:1, fat:1, sodium:10 }
  }
];