// menuData.js
// ATENÇÃO: os nomes abaixo precisam existir em /public/images exatamente assim (minúsculo + hífen)
const menu = [
  // === MAINS ===
  {
    type: "mains",
    image: "vaca-atolada.jpg",
    translations: {
      pt: {
        name: "Vaca Atolada (Ossobuco)",
        desc:
          "Ossobuco cozido lentamente com polenta cremosa de milho verde e rúcula cítrica.",
        long:
          "Clássico de Minas: carne macia, colágeno na medida e creme de milho bem sedoso. A rúcula cítrica equilibra com frescor o prato de fogo baixo.",
      },
      en: {
        name: "Vaca Atolada (Ossobuco)",
        desc:
          "Slow-cooked ossobuco with silky green-corn polenta and citrus arugula.",
        long:
          "A countryside Minas Gerais classic: tender beef shank and a velvety green-corn polenta. Citrus arugula brings brightness and balance.",
      },
      ar: {
        name: "ڤاكا أتولادا (عظم اللحم)",
        desc:
          "عظم لحم مطهو ببطء مع بولينتا ذرة خضراء حريرية وجرجير حمضي.",
        long:
          "طبق ريفي من ميناس جيرايس: لحم طري وبولينتا كريمية. جرجير بحموضة لطيفة يضيف توازناً وانتعاشاً.",
      },
    },
  },
  {
    type: "mains",
    image: "feijoada-costela.jpg",
    translations: {
      pt: {
        name: "Feijoada de Costela",
        desc:
          "Feijoada de costela bovina servida com farofa de banana, laranja, vinagrete e arroz.",
        long:
          "Feijoada encorpada, com costela suculenta e caldo brilhante. A farofa de banana e os cítricos fecham o ciclo de sabores brasileiros.",
      },
      en: {
        name: "Beef Rib Feijoada",
        desc:
          "Rich beef-rib feijoada served with banana farofa, orange slices, vinaigrette, and rice.",
        long:
          "Deep, smoky notes and succulent ribs. Banana farofa and citrus garnishes deliver balance and texture.",
      },
      ar: {
        name: "فيجوادا من أضلاع البقر",
        desc:
          "يقدم مع فاروڤا الموز وشرائح البرتقال وصلصة الخل والأرز.",
        long:
          "مرق غني بنكهات مدخنة وأضلاع طرية. فاروڤا الموز والحمضيات يضيفان توازناً رائعاً.",
      },
    },
  },
  {
    type: "mains",
    image: "picanha-grelhada.jpg",
    translations: {
      pt: {
        name: "Picanha Grelhada (Assinatura do Chef)",
        desc:
          "Com risoto de cogumelos, polenta cremosa de milho verde e molho de pimenta-do-reino.",
        long:
          "A carne favorita do Brasil, rosada e suculenta, encontra cremosidade e notas defumadas no acompanhamento.",
      },
      en: {
        name: "Grilled Picanha (Chef's Signature)",
        desc:
          "With mushroom risotto, green-corn polenta and peppercorn sauce.",
        long:
          "Brazil’s beloved cut — pink and juicy — paired with creamy sides and a bold peppercorn sauce.",
      },
      ar: {
        name: "بيكانيا مشوية (توقيع الشيف)",
        desc:
          "مع ريزوتو الفطر وبولينتا ذرة خضراء وصلصة الفلفل.",
        long:
          "قطعة لحم برازيلية محبوبة، طرية وعصيرية مع قوام كريمي وصلصة فلفل قوية.",
      },
    },
  },
  {
    type: "mains",
    image: "fraldinha-inteira.jpg",
    translations: {
      pt: {
        name: "Fraldinha Inteira para Compartilhar",
        desc:
          "Com chimichurri, vinagrete e molho de pimenta. Perfeita para dividir.",
        long:
          "Corte defumado e suculento servido em fatias. Para reunir amigos à mesa com sotaque brasileiro.",
      },
      en: {
        name: "Whole Flank Steak to Share",
        desc:
          "Served with chimichurri, vinaigrette and pepper sauce. Perfect to share.",
        long:
          "Smoky, juicy flank steak sliced for the table — a convivial Brazilian moment.",
      },
      ar: {
        name: "قطعة لحم فلات للّتقاسم",
        desc:
          "مع تشيميتشوري وصلصة الخل وصلصة الفلفل — مثالي للمشاركة.",
        long:
          "طعْم مدخّن وقوام عصيري يقدّم على شرائح للمائدة بأجواء برازيلية دافئة.",
      },
    },
  },
  {
    type: "mains",
    image: "galinhada-caipira.jpg",
    translations: {
      pt: {
        name: "Galinhada Caipira",
        desc:
          "Arroz de galinha caipira com aioli de cúrcuma, aromático e reconfortante.",
        long:
          "Receita de quintal, cheiro de infância e afeto no prato — arroz úmido, frango macio e toque de açafrão-da-terra.",
      },
      en: {
        name: "Country Chicken & Rice Stew",
        desc:
          "Traditional chicken-and-rice stew with turmeric aioli — comforting and aromatic.",
        long:
          "Moist rice, tender chicken and earthy turmeric — slow-fire food that hugs.",
      },
      ar: {
        name: "أرز بالدجاج الريفي",
        desc:
          "يقدم مع أيولي الكركم — دافئ وعطِر.",
        long:
          "أرز طري ودجاج طري ولمسة كركم ترابي — طعام نار هادئة يعانق الروح.",
      },
    },
  },
  {
    type: "mains",
    image: "lasanha-banana.jpg",
    translations: {
      pt: {
        name: "Lasanha de Carne com Banana da Terra",
        desc:
          "Camadas com muçarela fresca, parmesão e banana da terra dourada na manteiga.",
        long:
          "Clássico com sotaque brasileiro: creme, doçura sutil e crocância da banana — união irresistível.",
      },
      en: {
        name: "Beef Lasagna with Plantain",
        desc:
          "Mozzarella & parmesan layered, finished with buttery, crispy plantain.",
        long:
          "A Brazilian-accent classic: creamy layers with a sweet-savory crunch from ripe plantain.",
      },
      ar: {
        name: "لازانيا لحم مع موز الجنة",
        desc:
          "طبقات من الموتزاريلا والبارميزان مع موز الجنة المقلي بالزبدة.",
        long:
          "كلاسيكي بلمسة برازيلية — كريمي مع قرمشة حلوة-مالحة من الموز الناضج.",
      },
    },
  },

  // === SIDES ===
  {
    type: "sides",
    image: "mandioca-frita.jpg",
    translations: {
      pt: {
        name: "Mandioca Frita",
        desc: "Palitos de mandioca dourados e crocantes.",
        long:
          "Fritura clara e crosta crocante — o aperitivo que abre caminho para os pratos principais.",
      },
      en: {
        name: "Cassava Fries",
        desc: "Golden and crispy cassava sticks.",
        long:
          "Lightly fried with a shattering crust — the perfect warm-up to mains.",
      },
      ar: {
        name: "كاسافا مقلية",
        desc: "عيدان كاسافا ذهبية ومقرمشة.",
        long:
          "قلي خفيف وقشرة هشة — افتتاحية مثالية للأطباق الرئيسية.",
      },
    },
  },
  {
    type: "sides",
    image: "polenta-frita.jpg",
    translations: {
      pt: {
        name: "Polenta Frita",
        desc: "Palitos crocantes de polenta.",
        long:
          "Milho, textura e crocância — acompanhamento querido do Brasil.",
      },
      en: {
        name: "Fried Polenta",
        desc: "Crispy cornmeal sticks.",
        long:
          "Corn comfort with a crunchy jacket — Brazil’s favorite side bite.",
      },
      ar: {
        name: "بولينتا مقلية",
        desc: "أعواد بولينتا مقرمشة.",
        long:
          "ذرة مريحة بقوام مقرمش — لقمة جانبية محبوبة في البرازيل.",
      },
    },
  },
  {
    type: "sides",
    image: "pao-de-alho.jpg",
    translations: {
      pt: {
        name: "Pão de Alho",
        desc: "Pão crocante recheado com creme de alho e ervas.",
        long:
          "Perfume que invade a mesa: manteiga, alho e pão quentinho por dentro.",
      },
      en: {
        name: "Garlic Bread",
        desc: "Crispy bread filled with garlic-herb cream.",
        long:
          "Buttery, garlicky and warm in the center — a crowd-pleaser.",
      },
      ar: {
        name: "خبز بالثوم",
        desc: "خبز مقرمش محشو بكريمة الثوم والأعشاب.",
        long:
          "زبدة وثوم ودفء داخلي — محبوب الجميع.",
      },
    },
  },
  {
    type: "sides",
    image: "pao-de-queijo.jpg",
    translations: {
      pt: {
        name: "Pão de Queijo",
        desc: "Queijinho brasileiro — macio e quentinho.",
        long:
          "Clássico mineiro elástico por dentro e dourado por fora.",
      },
      en: {
        name: "Pão de Queijo",
        desc: "Brazilian cheese bread — soft and warm.",
        long:
          "Minas classic — stretchy inside, golden outside.",
      },
      ar: {
        name: "خبز الجبن البرازيلي",
        desc: "خبز جبن برازيلي — طري ودافئ.",
        long:
          "كلاسيكي من ميناس — مطاطي من الداخل وذهبي من الخارج.",
      },
    },
  },
  {
    type: "sides",
    image: "farofa-de-castanha.jpg",
    translations: {
      pt: {
        name: "Farofa de Castanha/Banana",
        desc: "Farinha de mandioca tostada com castanha de caju ou banana da terra.",
        long:
          "Texturas e perfume de quintal — escolha sua versão favorita.",
      },
      en: {
        name: "Toasted Cassava Farofa",
        desc: "With cashew nuts or sautéed sweet plantain.",
        long:
          "Crunch, aroma and nostalgia — pick your favorite version.",
      },
      ar: {
        name: "فاروفا من دقيق الكاسافا",
        desc: "مع الكاجو أو موز الجنة المقلي.",
        long:
          "قرمشة وعطر وحنين — اختر نسختك المفضلة.",
      },
    },
  },
  {
    type: "sides",
    image: "rubacao.jpg",
    translations: {
      pt: {
        name: "Rubacão",
        desc: "Arroz cremoso com feijão e queijo coalho grelhado.",
        long:
          "Conforto nordestino no prato — cremosidade e queijo tostado.",
      },
      en: {
        name: "Rubacão",
        desc: "Creamy rice & beans with grilled queijo coalho.",
        long:
          "Northeastern comfort — creamy grains and toasty cheese.",
      },
      ar: {
        name: "روباكان",
        desc: "أرز كريمي مع الفاصوليا وجبن كواليّو مشوي.",
        long:
          "دفء شمال شرقي البرازيل — كريم وقوام جبن محمّر.",
      },
    },
  },

  // === DESSERTS ===
  {
    type: "desserts",
    image: "encanto-de-coco.jpg",
    translations: {
      pt: {
        name: "Encanto de Coco",
        desc: "Pudim de coco assado com caramelo dourado.",
        long:
          "Clássico reinventado: textura aveludada e cobertura brilhante.",
      },
      en: {
        name: "Coconut Flan",
        desc: "Silky coconut flan with golden caramel.",
        long:
          "A delicate twist on a beloved classic — velvety and bright.",
      },
      ar: {
        name: "بودينغ جوز الهند",
        desc: "بودينغ كريمي مع كاراميل ذهبي.",
        long:
          "لمسة رقيقة على كلاسيك محبوب — قوام مخملي ولمعان ذهبي.",
      },
    },
  },
  {
    type: "desserts",
    image: "doce-da-roca-com-gelo.jpg",
    translations: {
      pt: {
        name: "Doce da Roça com Gelo",
        desc: "Abóbora com especiarias e sorvete de baunilha artesanal.",
        long:
          "Sobremesa de fazenda: morna, perfumada e cremosa — abraço doce.",
      },
      en: {
        name: "Country Pumpkin & Ice Cream",
        desc: "Spiced pumpkin compote served warm with vanilla ice cream.",
        long:
          "Warm, fragrant and creamy — a sweet countryside hug.",
      },
      ar: {
        name: "حلوى القرع مع آيس كريم",
        desc: "قرع متبّل دافئ يقدم مع آيس كريم فانيلا.",
        long:
          "دافئة ومعطّرة وكريمية — عناق حلو من الريف.",
      },
    },
  },
  {
    type: "desserts",
    image: "mandioca-real.jpg",
    translations: {
      pt: {
        name: "Mandioca Real",
        desc: "Bolo de mandioca com doce de leite e farofa crocante.",
        long:
          "Texturas que se encontram: maciez, doçura caramelizada e crocância de roça.",
      },
      en: {
        name: "Cassava Royale",
        desc: "Rustic cassava cake with dulce de leche & crunchy crumble.",
        long:
          "Soft crumb, caramel sweetness and country crunch.",
      },
      ar: {
        name: "كعكة الكسافا الملكية",
        desc: "كعكة كسافا مع دولسي دي ليتشي وقرمشة.",
        long:
          "طراوة وحلاوة كراميلية وقرمشة ريفية.",
      },
    },
  },
  {
    type: "desserts",
    image: "beijo-da-roca.jpg",
    translations: {
      pt: {
        name: "Beijo da Roça",
        desc: "Trufa cremosa de coco e castanha sobre bolo de milho verde.",
        long:
          "Beijinho clássico, textura cremosa e aroma de milho fresco.",
      },
      en: {
        name: "Countryside Kiss",
        desc: "Creamy coconut-cashew truffle on green-corn cake.",
        long:
          "A sweet countryside kiss with fresh-corn aroma.",
      },
      ar: {
        name: "قبلة الريف",
        desc: "ترفل كريمي بجوز الهند والكاجو على كعكة ذرة خضراء.",
        long:
          "قبلة ريفية حلوة بعطر الذرة الطازجة.",
      },
    },
  },

  // === DRINKS ===
  {
    type: "drinks",
    image: "sol-do-cerrado.jpg",
    translations: {
      pt: {
        name: "Sol do Cerrado",
        desc: "Manga com maracujá, hortelã e toque cítrico.",
      },
      en: {
        name: "Sun of the Cerrado",
        desc: "Mango with passion fruit, mint and a citrus touch.",
      },
      ar: {
        name: "شمس السيرادو",
        desc: "مانجو مع باشن فروت ونعناع ولمسة حمضية.",
      },
    },
  },
  {
    type: "drinks",
    image: "frescor-da-amazonia.jpg",
    translations: {
      pt: {
        name: "Frescor da Amazônia",
        desc: "Abacaxi batido com hortelã e limão.",
      },
      en: {
        name: "Amazon Fresh",
        desc: "Pineapple blended with mint and lime.",
      },
      ar: {
        name: "انتعاش الأمازون",
        desc: "أناناس مخفوق مع النعناع والليمون.",
      },
    },
  },
  {
    type: "drinks",
    image: "pe-de-serra.jpg",
    translations: {
      pt: {
        name: "Pé de Serra",
        desc: "Chá-mate gelado com limão, mel e gengibre.",
      },
      en: {
        name: "Foot of the Hills",
        desc: "Iced yerba-mate tea with lemon, honey and ginger.",
      },
      ar: {
        name: "قدم الجبل",
        desc: "شاي يربا ماتيه بارد مع الليمون والعسل والزنجبيل.",
      },
    },
  },
  {
    type: "drinks",
    image: "caipile-classico.jpg",
    translations: {
      pt: {
        name: "Caipilé Clássico (sem álcool)",
        desc: "Limão, gelo e água com gás.",
      },
      en: {
        name: "Classic Caipilé (non-alcoholic)",
        desc: "Lime, ice and sparkling water.",
      },
      ar: {
        name: "كايبيليه كلاسيكي (بدون كحول)",
        desc: "ليمون وثلج ومياه فوّارة.",
      },
    },
  },
  {
    type: "drinks",
    image: "blueberry-coco-fizz.jpg",
    translations: {
      pt: {
        name: "Blueberry & Coco Fizz",
        desc: "Mirtilo batido com leite de coco e toque de baunilha.",
      },
      en: {
        name: "Blueberry & Coco Fizz",
        desc: "Blueberries with coconut milk and a hint of vanilla.",
      },
      ar: {
        name: "بلو بيري وكوكو فيز",
        desc: "توت مع حليب جوز الهند ولمسة فانيلا.",
      },
    },
  },
  {
    type: "drinks",
    image: "amazon-breeze.jpg",
    translations: {
      pt: {
        name: "Amazon-Breeze",
        desc: "Cupuaçu cremoso batido com leite e leite condensado.",
      },
      en: {
        name: "Amazon-Breeze",
        desc: "Creamy cupuaçu shake with milk and condensed milk.",
      },
      ar: {
        name: "نسيم الأمازون",
        desc: "مشروب كوبواسو كريمي بالحليب والحليب المكثف.",
      },
    },
  },
  {
    type: "drinks",
    image: "verao-brasil.jpg",
    translations: {
      pt: {
        name: "Verão Brasil",
        desc: "Suco de manga, hortelã fresca e água com gás — leve e elegante.",
      },
      en: {
        name: "Brazilian Summer",
        desc: "Mango, fresh mint and sparkling water — light & elegant.",
      },
      ar: {
        name: "صيف البرازيل",
        desc: "مانجو مع نعناع طازج ومياه فوّارة — خفيف وأنيق.",
      },
    },
  },

  // === SEASONAL ===
  {
    type: "seasonal",
    image: "pamonha.jpg",
    translations: {
      pt: {
        name: "Pamonha (Sazonal)",
        desc: "Clássico de milho verde — doce ou salgada, cremosidade de roça.",
        long:
          "Feita na palha e servida fumegante — memória afetiva e sabor de festa do interior.",
      },
      en: {
        name: "Pamonha (Seasonal)",
        desc: "Green-corn classic — sweet or savory, creamy countryside soul.",
        long:
          "Steamed in the husk and served warm — a festive taste of Brazil’s heartland.",
      },
      ar: {
        name: "بامونيا (موسمية)",
        desc: "كلاسيك الذرة الخضراء — حلوة أو مالحة بقوام كريمي.",
        long:
          "مطهوة في قشور الذرة وتقدم دافئة — طعم احتفالي من قلب البرازيل.",
      },
    },
  },
];

export default menu;

