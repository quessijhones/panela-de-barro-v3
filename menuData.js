// menuData.js
// =====================================================
// Cardápio multilíngue com fotos do diretório /public/images
// e textos pensados para PT / EN / AR.
// • "imageCandidates": tentamos vários nomes (com/sem acentos).
// • "seasonal: true" marca os sazonais (ex.: pamonha).
// =====================================================

const fallbackUnsplash = (query) =>
  `https://source.unsplash.com/800x600/?${encodeURIComponent(query)},brazilian,food`;

const img = (...names) => names.filter(Boolean); // util p/ montar candidatos

export const i18nUI = {
  pt: {
    brand: "Panela de Barro",
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato", reservations: "Reservas" },
    hero: {
      title: "Panela de Barro",
      subtitle: "Culinária Brasileira de Raiz no Catar",
      ctaReserve: "Reservar Mesa",
      ctaMenu: "Ver o Menu",
    },
    filters: { all: "Todos", mains: "Pratos Principais", sides: "Acompanhamentos", desserts: "Sobremesas", drinks: "Bebidas", seasonal: "Sazonais" },
    details: { view: "Detalhes", close: "Fechar", coming: "Em breve — inauguração em novembro." },
    contact: {
      title: "Contato",
      email: "restaurant@paneladebarroqatar.com",
      phone: "+974 3047 5279",
      address: "Barwa Town, Doha, Qatar",
    },
    story: {
      title: "Nossa História",
      body:
        "Restaurante familiar brasileiro no Catar. Há 20 anos no ramo de gastronomia, trazemos sabores de fogo e fogão a lenha, música sertaneja e viola. O chef-proprietário Quessi Jhones comanda a cozinha ao lado de sua mãe, Dona Cleuza, mineira, guardiã de técnicas e temperos, e do irmão Head Chef, com mais de 10 anos em casas brasileiras. A proposta é simples: hospitalidade generosa, raízes e pratos regionais preparados com carinho e autenticidade.",
    },
    seasonalBadge: "Sazonal",
    langLabel: "Idioma",
  },
  en: {
    brand: "Panela de Barro",
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact", reservations: "Reservations" },
    hero: {
      title: "Panela de Barro",
      subtitle: "Brazilian Heritage Cuisine in Qatar",
      ctaReserve: "Reserve a Table",
      ctaMenu: "See the Menu",
    },
    filters: { all: "All", mains: "Mains", sides: "Side Dishes", desserts: "Desserts", drinks: "Beverages", seasonal: "Seasonal" },
    details: { view: "View Details", close: "Close", coming: "Coming soon — grand opening in November." },
    contact: {
      title: "Contact",
      email: "restaurant@paneladebarroqatar.com",
      phone: "+974 3047 5279",
      address: "Barwa Town, Doha, Qatar",
    },
    story: {
      title: "Our Story",
      body:
        "A Brazilian family restaurant in Qatar. With 20 years in hospitality, we bring fire-kissed flavors from a wood-fired stove and the warmth of countryside music. Chef-owner Quessi Jhones leads the kitchen with his mother Dona Cleuza, from Minas Gerais, and his brother, the Head Chef with 10+ years of experience. Expect soulful regional classics, generous hospitality, and real Brazilian roots.",
    },
    seasonalBadge: "Seasonal",
    langLabel: "Language",
  },
  ar: {
    brand: "بانيلّا دي بارّو",
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", location: "الموقع", contact: "اتصال", reservations: "الحجوزات" },
    hero: {
      title: "بانيلّا دي بارّو",
      subtitle: "المطبخ البرازيلي الأصيل في قطر",
      ctaReserve: "احجز طاولة",
      ctaMenu: "عرض القائمة",
    },
    filters: { all: "الكل", mains: "الأطباق الرئيسية", sides: "الأطباق الجانبية", desserts: "الحلويات", drinks: "المشروبات", seasonal: "الموسمية" },
    details: { view: "التفاصيل", close: "إغلاق", coming: "قريبًا — الافتتاح في نوفمبر." },
    contact: {
      title: "التواصل",
      email: "restaurant@paneladebarroqatar.com",
      phone: "+974 3047 5279",
      address: "باروا تاون، الدوحة، قطر",
    },
    story: {
      title: "قصتنا",
      body:
        "مطعم عائلي برازيلي في قطر. مع خبرة تمتد 20 عامًا، نقدّم نكهات على نار الحطب وموسيقى ريفية دافئة. يقود المطبخ الشيف والمالك كويِسّي جونِس مع والدته السيدة كليوزا من ميناس جيرايس وشقيقه الشيف الرئيسي ذو الخبرة الطويلة. نحتفي بالكلاسيكيات الإقليمية والضيافة السخية والجذور البرازيلية الأصيلة.",
    },
    seasonalBadge: "موسمي",
    langLabel: "اللغة",
  },
};

// --------------------------
// DADOS DO CARDÁPIO
// --------------------------
export const MENU = [
  // ===== PRATOS PRINCIPAIS (MAINS)
  {
    id: "vaca-atolada",
    category: "mains",
    seasonal: false,
    names: { pt: "Vaca Atolada (Ossobuco)", en: "Vaca Atolada (Ossobuco)", ar: "فاکا أتولادا (عظم لحم العجل)" },
    price: null,
    imageCandidates: img("Vaca-atolada.jpg", "vaca-atolada.jpg", "Ossobuco.jpg"),
    fallback: fallbackUnsplash("ossobuco,beef,stew"),
    descriptions: {
      pt: "Ossobuco cozido lentamente, polenta cremosa de milho verde e salada cítrica de rúcula. Clássico de Minas com equilíbrio entre maciez, cremosidade e frescor.",
      en: "Slow-cooked ossobuco with creamy green-corn polenta and citrus arugula salad — a Minas Gerais classic balancing tender meat and bright freshness.",
      ar: "عظم لحم العجل مطهو ببطء مع بولينتا الذرة الخضراء وسلطة الجرجير بالحمضيات — طبق تقليدي من ميناس يجمع الطراوة والنكهة.",
    },
    story: {
      pt: "Receita de fogão a lenha, onde o tempo e o calor lento fazem a carne se desfazer em fibras suculentas.",
      en: "Born from wood-fire cooking: time and ember heat turn the meat meltingly tender.",
      ar: "وصفة من مطبخ النار الخشبية حيث يمنح الوقت والجمر اللحم نعومة تذوب في الفم.",
    },
  },
  {
    id: "feijoada-costela",
    category: "mains",
    names: { pt: "Feijoada de Costela", en: "Beef Rib Feijoada", ar: "فيجوادا بالأضلاع" },
    price: null,
    imageCandidates: img("Feijoada-de-Costela.jpg", "feijoada-de-costela.jpg"),
    fallback: fallbackUnsplash("feijoada,brazil"),
    descriptions: {
      pt: "Feijoada de costela suculenta servida com farofa de banana, laranja, vinagrete e arroz temperado.",
      en: "Rich beef-rib feijoada served with banana farofa, orange slices, vinaigrette, and seasoned rice.",
      ar: "فيجوادا بأضلاع اللحم تُقدّم مع فاروفا الموز وشرائح البرتقال وصوص الخل والأرز المتبل.",
    },
    story: {
      pt: "Domingo de família em uma panela só: caldo encorpado, defumado e cheio de memória afetiva.",
      en: "A family-Sunday classic where depth and smokiness meet comfort.",
      ar: "طبق أحد عائلي بامتياز — مرق غني بنفحات مدخنة ودفء منزلي.",
    },
  },
  {
    id: "picanha-grelhada",
    category: "mains",
    names: { pt: "Picanha Grelhada (Prato do Chef)", en: "Grilled Picanha (Chef’s Signature)", ar: "بيكانيا مشوية (طبق الشيف)" },
    price: null,
    imageCandidates: img("Picanha-grelhada.jpg", "picanha-grelhada.jpg", "Fraldinha-inteira.jpg"),
    fallback: fallbackUnsplash("picanha,steak,grill"),
    descriptions: {
      pt: "Picanha grelhada com risoto de cogumelos, polenta cremosa de milho verde e molho de pimenta-do-reino.",
      en: "Grilled picanha with mushroom risotto, creamy green-corn polenta and peppercorn sauce.",
      ar: "بيكانيا مشوية مع ريزوتو الفطر وبولينتا الذرة الخضراء وصوص الفلفل الأسود.",
    },
    story: {
      pt: "Nosso corte-ícone, grelhado alto para manter o suco e a crosta perfeita.",
      en: "Our iconic cut — seared hot for a charred crust and juicy center.",
      ar: "قطعتنا الأيقونية تُشوى بحرارة عالية لقشرة متفحمة ومركز كثير العصارة.",
    },
  },
  {
    id: "fraldinha-inteira",
    category: "mains",
    names: { pt: "Fraldinha Inteira para Compartilhar", en: "Whole Flank Steak to Share", ar: "فخذية كاملة للمشاركة" },
    price: null,
    imageCandidates: img("fraldinha-inteira.jpg", "Fraldinha-inteira.jpg"),
    fallback: fallbackUnsplash("flank,steak"),
    descriptions: {
      pt: "Fraldinha na brasa, chimichurri, vinagrete e molho de pimenta. Suculenta, defumada e perfeita para dividir.",
      en: "Char-grilled flank steak with chimichurri, vinaigrette and pepper sauce — smoky, juicy and perfect for sharing.",
      ar: "لحم فخذ مشوي على الفحم مع تشيميشوري وخليط الخل الحار — مدخن وعصاري ومناسب للمشاركة.",
    },
    story: {
      pt: "Corte macio e saboroso, favorito de churrasco de quintal.",
      en: "A backyard-barbecue favorite for its tenderness and bold flavor.",
      ar: "من نجوم الشواء المنزلي لطراوته ونكهته القوية.",
    },
  },
  {
    id: "galinhada",
    category: "mains",
    names: { pt: "Galinhada Caipira", en: "Country Chicken & Rice Stew", ar: "غاليِنهادَا (دجاج وأرز ريفي)" },
    price: null,
    imageCandidates: img("Galinhada.jpg", "galinhada.jpg"),
    fallback: fallbackUnsplash("brazilian,chicken,stew"),
    descriptions: {
      pt: "Galinhada tradicional com aioli de cúrcuma — conforto, caldo rico e toque de quintal.",
      en: "Traditional chicken-and-rice stew with turmeric aioli — comforting and aromatic.",
      ar: "يخنة دجاج مع الأرز بصلصة الأيولي بالكركم — دافئة وعطرة.",
    },
    story: {
      pt: "Prato de reunião — panela grande, fogo manso, comida de abraço.",
      en: "A gathering dish: big pot, slow fire, food that hugs.",
      ar: "طبق اجتماع العائلة — قدر كبير ونار هادئة وطعام يضمّك بحنانه.",
    },
  },
  {
    id: "burger-picanha",
    category: "mains",
    names: { pt: "Hambúrguer de Picanha", en: "Picanha Burger", ar: "برجر بيكانيا" },
    price: null,
    imageCandidates: img("Hamburguer-de-picanha.jpg", "hamburguer-de-picanha.jpg"),
    fallback: fallbackUnsplash("burger"),
    descriptions: {
      pt: "Burger de picanha com cogumelos, pimenta verde, queijo derretido, bacon, batatas rústicas e maionese da casa.",
      en: "Picanha burger with mushrooms, green peppercorn sauce, melted cheese, bacon, rustic fries and house mayo.",
      ar: "برجر بيكانيا مع الفطر وصلصة الفلفل الأخضر وجبن مذاب وباكون وبطاطس ريفية ومايونيز البيت.",
    },
    story: {
      pt: "American burger encontra churrasco brasileiro — suculência e personalidade.",
      en: "An American burger meets Brazilian barbecue — juicy and bold.",
      ar: "برغر أمريكي يلتقي بالشواء البرازيلي — طراوة ونكهة واثقة.",
    },
  },
  {
    id: "lasanha-banana",
    category: "mains",
    names: { pt: "Lasanha de Carne com Banana da Terra", en: "Beef Lasagna with Plantain", ar: "لازانيا لحم مع موز الجنة" },
    price: null,
    imageCandidates: img("Lasanha-de-banana.jpg", "Lasanha-de-carne-com-banana-da-terra.jpg"),
    fallback: fallbackUnsplash("lasagna"),
    descriptions: {
      pt: "Lasanha com muçarela e parmesão, intercalando a cremosidade da carne ao crocante da banana da terra na manteiga.",
      en: "Lasagna layered with mozzarella and parmesan, balanced by buttery, crispy plantain.",
      ar: "لازانيا بطبقات من الموتزاريلا والبارميزان مع توازن رائع بطبقات من الموز المقلي بالزبدة.",
    },
    story: {
      pt: "Clássico com sotaque brasileiro — doce e salgado em harmonia.",
      en: "An Italian classic with a Brazilian accent — sweet-meets-savory harmony.",
      ar: "كلاسيكية إيطالية بلمسة برازيلية — تناغم بين الحلو والمالح.",
    },
  },
  {
    id: "coxinha-costela",
    category: "mains",
    names: { pt: "Coxinha de Costela (4 pcs)", en: "Beef Rib Coxinha (4 pcs)", ar: "كوشينيا بالأضلاع (٤ قطع)" },
    price: null,
    imageCandidates: img("coxinha-de-costela.jpg", "Coxinha-de-costela.jpg"),
    fallback: fallbackUnsplash("coxinha"),
    descriptions: {
      pt: "Massa dourada e crocante, recheio de costela desfiada, toque cremoso de queijo e dip barbecue defumado.",
      en: "Golden, crisp pastries stuffed with pulled beef rib and creamy cheese — served with smoky barbecue dip.",
      ar: "عجينة ذهبية مقرمشة محشوة بأضلاع لحم مبشور مع جبن كريمي — تُقدّم مع صوص شواء مدخّن.",
    },
    story: {
      pt: "Ícone das festas brasileiras — crocante por fora, suculenta por dentro.",
      en: "Brazil’s party icon — crunchy shell, juicy filling.",
      ar: "رمز الحفلات البرازيلية — قشرة مقرمشة وحشوة عصارية.",
    },
  },

  // ===== ACOMPANHAMENTOS (SIDES)
  {
    id: "mandioca-frita",
    category: "sides",
    names: { pt: "Mandioca Frita", en: "Crispy Cassava Sticks", ar: "عيدان الكسافا المقرمشة" },
    price: null,
    imageCandidates: img("Mandioca-frita.jpg", "Mandioca-Frita.jpg"),
    fallback: fallbackUnsplash("cassava,fries"),
    descriptions: {
      pt: "Palitos dourados por fora e macios por dentro — clássico de boteco.",
      en: "Golden on the outside, soft inside — a tavern classic.",
      ar: "مقرمشة من الخارج وطرية من الداخل — كلاسيكيات المقاهي.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "polenta-frita",
    category: "sides",
    names: { pt: "Polenta Frita", en: "Fried Cornmeal Sticks", ar: "أصابع دقيق الذرة المقلية" },
    price: null,
    imageCandidates: img("Polenta-frita.jpg", "polenta-frita.jpg"),
    fallback: fallbackUnsplash("polenta,fries"),
    descriptions: {
      pt: "Porção crocante, perfeita para mergulhar no molho do chefe.",
      en: "Crunchy batons perfect for dipping in the chef’s sauce.",
      ar: "أصابع مقرمشة مثالية للغموس مع صوص الشيف.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "pao-de-alho",
    category: "sides",
    names: { pt: "Pão de Alho", en: "Garlic Bread", ar: "خبز بالثوم" },
    price: null,
    imageCandidates: img("Pao-de-alho.jpg", "pao-de-alho.jpg"),
    fallback: fallbackUnsplash("garlic,bread"),
    descriptions: {
      pt: "Pão crocante recheado com creme de alho e ervas — quentinho e perfumado.",
      en: "Crisp bread filled with creamy garlic-herb spread — warm and fragrant.",
      ar: "خبز مقرمش محشو بكريمة الثوم والأعشاب — دافئ وعطِر.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "pao-de-queijo",
    category: "sides",
    names: { pt: "Pão de Queijo", en: "Brazilian Cheese Bread", ar: "خبز الجبن البرازيلي" },
    price: null,
    imageCandidates: img("pao-de-queijo.jpg", "Pão-de-queijo.jpg", "pao-de-queijo.jpeg"),
    fallback: fallbackUnsplash("pao de queijo"),
    descriptions: {
      pt: "Macio e quentinho, com queijo de verdade — impossível comer um só.",
      en: "Soft and warm, made with real cheese — impossible to eat just one.",
      ar: "خبز جبن طري ودافئ — يستحيل الاكتفاء بواحد.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "farofa-castanha",
    category: "sides",
    names: { pt: "Farofa de Castanha/Banana", en: "Toasted Cassava Flour with Nuts or Plantain", ar: "فاروفا الكسافا بالمكسرات أو موز الجنة" },
    price: null,
    imageCandidates: img("farofa-de-castanha.jpg", "Farofa-de-castanha.jpg"),
    fallback: fallbackUnsplash("farofa"),
    descriptions: {
      pt: "Farofa personalizada: crocante de castanhas ou lâminas douradas de banana da terra.",
      en: "Your pick: crunchy cashew-nut farofa or golden plantain slices.",
      ar: "اختيارك: فاروفا بالمكسرات المقرمشة أو شرائح موز الجنة الذهبية.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "rubacao",
    category: "sides",
    names: { pt: "Rubaçāo", en: "Creamy Rice & Beans with Grilled Queijo Coalho", ar: "أرز وكُرنب مع جبن مشوي" },
    price: null,
    imageCandidates: img("Rubaço.jpg", "Rubacao.jpg", "rubaçao.jpg"),
    fallback: fallbackUnsplash("brazil,rice,beans"),
    descriptions: {
      pt: "Arroz cremoso com feijão e queijo coalho na brasa — potência nordestina.",
      en: "Creamy rice and beans crowned with grilled queijo coalho — Northeastern soul.",
      ar: "أرز كريمي مع الفاصوليا يُتوّج بجبن كوانهو المشوي — روح الشمال الشرقي.",
    },
    story: { pt: "", en: "", ar: "" },
  },

  // ===== SOBREMESAS (DESSERTS)
  {
    id: "encanto-de-coco",
    category: "desserts",
    names: { pt: "Encanto de Coco", en: "Coconut Flan", ar: "بودينغ جوز الهند" },
    price: null,
    imageCandidates: img("Encanto-de-Coco.jpg", "encanto-de-coco.jpg"),
    fallback: fallbackUnsplash("coconut flan"),
    descriptions: {
      pt: "Pudim de coco assado lentamente, textura aveludada e caramelo dourado leve.",
      en: "Silky coconut flan, slow-baked with a light golden caramel.",
      ar: "بودينغ جوز الهند بقوام حريري وخليط كراميل ذهبي خفيف.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "doce-da-roca",
    category: "desserts",
    names: { pt: "Doce da Roça com Gelo", en: "Pumpkin Compote & Ice Cream", ar: "حلوى القرع مع الآيس كريم" },
    price: null,
    imageCandidates: img("Doce-da-Roça-com-Gelo.jpg", "Doce-da-Roca-com-Gelo.jpg"),
    fallback: fallbackUnsplash("pumpkin dessert,ice cream"),
    descriptions: {
      pt: "Compota de abóbora com especiarias da casa, servida quente com sorvete de creme artesanal.",
      en: "Spiced pumpkin compote served warm with artisan vanilla ice cream.",
      ar: "مربى اليقطين بالبهارات يُقدّم ساخناً مع آيس كريم فانيلا منزلي.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "mandioca-real",
    category: "desserts",
    names: { pt: "Mandioca Real", en: "Cassava Cake with Dulce de Leche", ar: "كعكة الكسافا مع دولسي دي ليتشي" },
    price: null,
    imageCandidates: img("Mandioca-Real.jpg", "mandioca-real.jpg"),
    fallback: fallbackUnsplash("cassava cake,dessert"),
    descriptions: {
      pt: "Bolo de mandioca com doce de leite artesanal e crocante de farofa de mandioca caramelizada.",
      en: "Rustic cassava cake with artisan dulce de leche and caramelized cassava crumble.",
      ar: "كيك الكسافا التقليدي مع دولسي دي ليتشي وحبيبات كسافا مكرملة.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "beijo-da-roca",
    category: "desserts",
    names: { pt: "Beijo da Roça", en: "Coconut-Cashew Kiss", ar: "قبلة المزرعة (جوز الهند والكاجو)" },
    price: null,
    imageCandidates: img("Beijo-da-roça.jpg", "Beijo-da-Roca.jpg"),
    fallback: fallbackUnsplash("coconut dessert"),
    descriptions: {
      pt: "Beijinho cremoso de coco e castanha, servido sobre bolo de milho verde levemente úmido.",
      en: "Creamy coconut-cashew truffle served over a moist green-corn cake.",
      ar: "حلوى كريمية من جوز الهند والكاجو فوق كعكة الذرة الخضراء.",
    },
    story: { pt: "", en: "", ar: "" },
  },

  // ===== BEBIDAS (DRINKS)
  {
    id: "sol-do-cerrado",
    category: "drinks",
    names: { pt: "Sol do Cerrado", en: "Cerrado Sunset", ar: "شمس السِيرادو" },
    price: null,
    imageCandidates: img("Sol-do-Cerrado.jpg", "sol-do-cerrado.jpg"),
    fallback: fallbackUnsplash("mango drink"),
    descriptions: {
      pt: "Manga, maracujá, hortelã e toque cítrico — refrescante como um pôr do sol brasileiro.",
      en: "Mango, passion fruit, mint and a citrus lift — refreshing like a Brazilian sunset.",
      ar: "مانجو مع فاكهة العاطفة والنعناع ولمسة حمضية منعشة كغروب برازيلي.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "frescor-da-amazonia",
    category: "drinks",
    names: { pt: "Frescor da Amazônia", en: "Amazon Fresh", ar: "نسمات الأمازون" },
    price: null,
    imageCandidates: img("Frescor-da-Amazônia.jpg", "Frescor-da-Amazonia.jpg"),
    fallback: fallbackUnsplash("pineapple drink, mint,lime"),
    descriptions: {
      pt: "Abacaxi batido com hortelã e limão — tropical e vibrante.",
      en: "Fresh pineapple blended with mint and lime — tropical and vibrant.",
      ar: "أناناس طازج ممزوج بالنعناع والليمون — استوائي ونابض.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "pe-de-serra",
    category: "drinks",
    names: { pt: "Pé de Serra", en: "Iced Yerba Mate with Lemon, Honey & Ginger", ar: "شاي يَربا ماتيه بارد مع ليمون وعسل وزنجبيل" },
    price: null,
    imageCandidates: img("Pé-de-Serra.jpg", "Pe-de-Serra.jpg"),
    fallback: fallbackUnsplash("iced tea"),
    descriptions: {
      pt: "Chá-mate gelado com limão, mel e raspas de gengibre — natural e energizante.",
      en: "Iced yerba-mate tea with lemon, honey and ginger zest — naturally energizing.",
      ar: "شاي يربا ماتيه بارد مع الليمون والعسل وبشر الزنجبيل — منعش وطبيعي.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "caipile-classico",
    category: "drinks",
    names: { pt: "Caipilé Clássico (sem álcool)", en: "Caipilé Classic (non-alcoholic)", ar: "كايبيليه كلاسيك (بدون كحول)" },
    price: null,
    imageCandidates: img("Caípílé-Clássico.jpg", "Caipile-Classico.jpg"),
    fallback: fallbackUnsplash("mocktail,lime"),
    descriptions: {
      pt: "Limão fresco, gelo e água com gás — o clássico em versão não alcoólica.",
      en: "Fresh lime, ice and sparkling water — the classic reimagined without alcohol.",
      ar: "ليمون طازج وجليد وماء فوار — الكلاسيكي بإصدار غير كحولي.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "blueberry-coco-fizz",
    category: "drinks",
    names: { pt: "Blueberry & Coco Fizz", en: "Blueberry & Coco Fizz", ar: "بلوبيري وكوكونَت فِز" },
    price: null,
    imageCandidates: img("Blueberry-&-Coco-Fizz.jpg", "Blueberry-e-Coco-Fizz.jpg"),
    fallback: fallbackUnsplash("blueberry,coconut,drink"),
    descriptions: {
      pt: "Mirtilo batido com leite de coco e toque de baunilha — leve, cremoso e aromático.",
      en: "Blueberries blended with coconut milk and a hint of vanilla — light, creamy and fragrant.",
      ar: "توت أزرق ممزوج بحليب جوز الهند ولمسة فانيلا — خفيف وكريمي وعطِر.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "amazon-breeze",
    category: "drinks",
    names: { pt: "Amazon Breeze", en: "Amazon Breeze", ar: "نسيم الأمازون" },
    price: null,
    imageCandidates: img("Amazon-Breeze.jpg"),
    fallback: fallbackUnsplash("cupuaçu milkshake"),
    descriptions: {
      pt: "Milkshake cremoso de cupuaçu com leite e leite condensado — sobremesa tropical no copo.",
      en: "Creamy cupuaçu milkshake with milk and condensed milk — a tropical dessert in a glass.",
      ar: "ميلك شيك كوبواسو كريمي بالحليب والحليب المكثف — حلوى استوائية في كوب.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "vitamina-do-cerrado",
    category: "drinks",
    names: { pt: "Vitamina do Cerrado", en: "Cerrado Vitamina", ar: "ڤيتامينَا دو سيرادو" },
    price: null,
    imageCandidates: img("Vitamina-do-Cerrado.jpg"),
    fallback: fallbackUnsplash("banana smoothie,honey"),
    descriptions: {
      pt: "Vitamina de banana com leite de coco e mel — cremosa e energizante.",
      en: "Banana smoothie with coconut milk and honey — creamy and energizing.",
      ar: "سموثي الموز بحليب جوز الهند والعسل — كريمي ومنشط.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "verao-brasil",
    category: "drinks",
    names: { pt: "Verão Brasil", en: "Verão Brasil", ar: "صيف البرازيل" },
    price: null,
    imageCandidates: img("Verão-Brasil.jpg", "Verao-Brasil.jpg"),
    fallback: fallbackUnsplash("mango,sparkling,mint"),
    descriptions: {
      pt: "Suco de manga, hortelã fresca e água com gás — leve, elegante e refrescante.",
      en: "Mango juice, fresh mint and sparkling water — light, elegant, refreshing.",
      ar: "عصير مانجو مع نعناع طازج وماء فوار — خفيف وأنيق ومنعش.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "uva-limao-gelo",
    category: "drinks",
    names: { pt: "Uva & Limão Gelo", en: "Grape & Lime on Ice", ar: "عصير العنب والليمون على الثلج" },
    price: null,
    imageCandidates: img("Uva-&-Limão-Gelo.jpg", "Uva-e-Limao-Gelo.jpg"),
    fallback: fallbackUnsplash("grape juice,lime"),
    descriptions: {
      pt: "Suco de uva integral com limão espremido e hortelã — refrescância que abraça.",
      en: "Pure grape juice with squeezed lime and mint — cool and embracing.",
      ar: "عصير عنب نقي مع ليمون معصور ونعناع — برودة منعشة.",
    },
    story: { pt: "", en: "", ar: "" },
  },
  {
    id: "agua-aromatica",
    category: "drinks",
    names: { pt: "Água Aromática Panela de Barro", en: "Panela de Barro Infused Water", ar: "ماء منكه بانيلّا دي بارّو" },
    price: null,
    imageCandidates: img("Agua-Aromatica.jpg", "Agua-Aromatica-Panela.jpg"),
    fallback: fallbackUnsplash("infused water"),
    descriptions: {
      pt: "Água filtrada com laranja, pepino, limão e hortelã — servida bem gelada.",
      en: "Filtered water infused with orange, cucumber, lemon and mint — served chilled.",
      ar: "ماء مفلتر منقوع بالبرتقال والخيار والليمون والنعناع — يُقدّم باردًا.",
    },
    story: { pt: "", en: "", ar: "" },
  },

  // ===== SAZONAIS (SEASONAL)
  {
    id: "pamonha",
    category: "mains",
    seasonal: true,
    names: { pt: "Pamonha de Milho Verde", en: "Green-Corn Pamonha", ar: "بامونيا (ذرة خضراء)" },
    price: null,
    imageCandidates: img("pamonha.jpg", "Pamonha.jpg"),
    fallback: fallbackUnsplash("pamonha,corn,tamale"),
    descriptions: {
      pt: "Clássico caipira de milho verde fresco, cremoso e perfumado, cozido na própria palha.",
      en: "A countryside classic — fresh green-corn dough, creamy and fragrant, steamed in its husk.",
      ar: "كلاسيكية ريفية — عجين الذرة الخضراء الطازجة، كريمي وعطِر، مطهوّ في قشرته.",
    },
    story: {
      pt: "Disponível na época de milho — tradição que perfuma a cozinha e a memória.",
      en: "Available in corn season — a tradition that perfumes both kitchen and memory.",
      ar: "متاح في موسم الذرة — تقليد تفوح رائحته في المطبخ والذاكرة.",
    },
  },
];

