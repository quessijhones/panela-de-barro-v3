// menuData.js
// Categoria: 'mains' | 'sides' | 'desserts' | 'beverages' | 'seasonal'

export const dishes = [
  // ----- Pratos Principais -----
  {
    id: 'vaca-atolada',
    category: 'mains',
    image: 'Mandioca-Real.jpg', // use uma foto que tenha (substitua se quiser)
    name: {
      pt: 'Vaca Atolada (Ossobuco)',
      en: 'Vaca Atolada (Ossobuco)',
      ar: 'ڤاكا أتولادا (أوسّوبوكو)'
    },
    short: {
      pt: 'Ossobuco cozido lentamente com polenta cremosa de milho verde e rúcula cítrica.',
      en: 'Slow-cooked ossobuco with creamy green-corn polenta and citrus arugula.',
      ar: 'أوسّوبوكو مطهو ببطء مع بولينتا الذرة الخضراء وكركله حمضية.'
    },
    long: {
      pt: 'Clássico de Minas Gerais: carne macia que se desfaz, caldo rico e polenta cremosa de milho verde, equilibrados por rúcula cítrica fresquinha.',
      en: 'A Minas Gerais classic — fall‑apart tender beef in a rich broth over silky green‑corn polenta, brightened with fresh citrus arugula.',
      ar: 'طبق كلاسيكي من ميناس جيرايس — لحم طري جدًا بمرق غني فوق بولينتا الذرة الخضراء، مع جرجير حمضي طازج.'
    }
  },
  {
    id: 'feijoada-costela',
    category: 'mains',
    image: 'feijoada.jpg', // se tiver com outro nome, troque
    name: {
      pt: 'Feijoada de Costela',
      en: 'Beef Rib Feijoada',
      ar: 'فيجوادا ضلع البقر'
    },
    short: {
      pt: 'Feijoada de costela servida com farofa de banana, laranja, vinagrete e arroz.',
      en: 'Rib feijoada with banana farofa, orange, vinaigrette, and rice.',
      ar: 'فيجوادا الأضلاع مع فاروفا الموز والبرتقال وخليط الخل والأرز.'
    },
    long: {
      pt: 'Nosso feijão preto de cozimento lento com costela suculenta, servido com farofa de banana da terra, rodelas de laranja, vinagrete e arroz branco soltinho.',
      en: 'Slow‑cooked black beans with succulent beef ribs, served with plantain farofa, orange slices, vinaigrette, and fluffy white rice.',
      ar: 'فاصوليا سوداء مطهوة ببطء مع أضلاع بقريّة طرية، تُقدَّم مع فاروفا الموز والبرتقال والفيـناغريت والأرز الأبيض.'
    }
  },
  {
    id: 'picanha-chef',
    category: 'mains',
    image: 'picanha.jpg',
    name: {
      pt: 'Picanha Grelhada (Prato do Chef)',
      en: "Grilled Picanha (Chef's Signature)",
      ar: 'بيكانيا مشوية (توقيع الشيف)'
    },
    short: {
      pt: 'Servida com risoto de cogumelos, polenta cremosa de milho verde e molho de pimenta do reino.',
      en: 'With mushroom risotto, green‑corn polenta, and peppercorn sauce.',
      ar: 'مع ريزوتو الفطر وبولينتا الذرة الخضراء وصلصة الفلفل.'
    },
    long: {
      pt: 'Corte nobre na brasa, suculento e defumado, finalizado com risoto cremoso de cogumelos, polenta de milho verde e um toque de pimenta‑do‑reino.',
      en: 'Prime cut grilled over fire — juicy and lightly smoky — finished with creamy mushroom risotto, green‑corn polenta and peppercorn sauce.',
      ar: 'قطعة فاخرة على الجمر — عصيرية بلمسة دخانية — مع ريزوتو الفطر الكريمي وبولينتا الذرة الخضراء وصلصة الفلفل.'
    }
  },
  {
    id: 'fraldinha',
    category: 'mains',
    image: 'fraldinha-inteira.jpg',
    name: { pt:'Fraldinha Inteira para Compartilhar', en:'Whole Flank Steak to Share', ar:'فرالدينيا كاملة للمشاركة' },
    short: {
      pt:'Servida com chimichurri, vinagrete e molho de pimenta. Perfeita para dividir.',
      en:'With chimichurri, vinaigrette and pepper sauce — made for sharing.',
      ar:'مع تشيميشوري وفيناغريت وصلصة الفلفل — مثالية للمشاركة.'
    },
    long: {
      pt:'Carne suculenta, grelhada na brasa e fatiada, acompanhada de molhos clássicos da casa.',
      en:'Juicy, fire‑grilled and sliced, with our classic house sauces.',
      ar:'لحم مشوي على النار ومقطّع مع صلصات البيت الكلاسيكية.'
    }
  },
  {
    id:'galinhada',
    category:'mains',
    image:'Galinahda.jpg',
    name:{ pt:'Galinhada Caipira', en:'Country Chicken & Rice Stew', ar:'جالينهادا ريفية' },
    short:{
      pt:'Frango e arroz no caldo, com aioli de cúrcuma. Conforto de casa.',
      en:'Traditional chicken‑and‑rice stew with turmeric aioli — comforting.',
      ar:'طبق دجاج مع أرز بمرق، مع آيولي الكركم — مريح.'
    },
    long:{
      pt:'Arroz de quintal perfumado, frango macio e aioli de cúrcuma: sabor de fogão a lenha.',
      en:'Backyard rice, tender chicken and turmeric aioli — flavors of a wood‑fired stove.',
      ar:'أرز وحدات ودجاج طري وآيولي كركم — نكهات موقد الحطب.'
    }
  },
  {
    id:'hamburguer-picanha',
    category:'mains',
    image:'hamburguer.jpg',
    name:{ pt:'Hambúrguer de Picanha', en:'Picanha Burger', ar:'برغر بيكانيا' },
    short:{
      pt:'Com cogumelos, pimenta verde, queijo derretido, bacon, batatas rústicas e maionese da casa.',
      en:'With mushrooms, green peppercorn, melted cheese, bacon, rustic fries and house mayo.',
      ar:'مع فطر وفلفل أخضر وجبن مذاب وبايكون وبطاطا ريفية ومايونيز البيت.'
    },
    long:{
      pt:'Burger generoso de picanha grelhada, suculento e defumado, no melhor estilo brasileiro.',
      en:'A generous, juicy, lightly‑smoked picanha burger — Brazilian style.',
      ar:'برغر بيكانيا غني وعصير بلمسة دخانية — على الطريقة البرازيلية.'
    }
  },
  {
    id:'lasanha-banana',
    category:'mains',
    image:'Lasanha-de-banana.jpg',
    name:{ pt:'Lasanha de Carne com Banana da Terra', en:'Beef Lasagna with Plantain', ar:'لازانيا لحم مع موز الجنة' },
    short:{
      pt:'Camadas de carne, muçarela e parmesão, equilibradas com banana da terra crocante na manteiga.',
      en:'Beef, mozzarella and parmesan layered, balanced with buttery, crispy plantain.',
      ar:'طبقات لحم وجبن مع موز الجنة المقلي بالزبدة.'
    },
    long:{
      pt:'Clássico da casa que une o salgado e o doce, textura crocante por fora e cremosa por dentro.',
      en:'House classic blending savory and sweet — crispy edges, creamy center.',
      ar:'كلاسيكي يجمع المالح والحلو — حواف مقرمشة وقلب كريمي.'
    }
  },
  {
    id:'coxinha-costela',
    category:'mains',
    image:'coxinha-de-costela.jpg',
    name:{ pt:'Coxinha de Costela (4 pcs)', en:'Beef Rib Coxinha (4 pcs)', ar:'كوشينيا ضلع (٤ قطع)' },
    short:{
      pt:'Recheio de costela desfiada com toque cremoso de queijo. Acompanha molho BBQ defumado.',
      en:'Shredded rib filling with a creamy cheese touch. Smoked BBQ dip on the side.',
      ar:'حشوة ضلع مبشور مع لمسة جبن كريمية. صوص شواء مدخن جانبًا.'
    },
    long:{
      pt:'Crosta dourada e crocante, interior macio e suculento — nosso salgado mais pedido.',
      en:'Golden crisp outside, soft and juicy inside — our most‑ordered snack.',
      ar:'قشرة ذهبية مقرمشة، داخل طري وعصير — الأكثر طلبًا لدينا.'
    }
  },
  {
    id:'moqueca',
    category:'mains',
    image:'Moqueca-baiana.jpg',
    name:{ pt:'Moqueca Baiana', en:'Bahian Fish Stew', ar:'موقتشة بايانا' },
    short:{
      pt:'Peixe com leite de coco, azeite de dendê e pimentões. Servida com arroz e farofa.',
      en:'Fish with coconut milk, dendê oil and peppers. Served with rice and farofa.',
      ar:'سمك مع حليب جوز الهند وزيت دنْدي والفلفل. يُقدّم مع الأرز والفاروفا.'
    },
    long:{
      pt:'Doce tropical e leve picância — mar, calor e alma baiana em um prato.',
      en:'Tropical sweetness with a gentle heat — Bahia’s sea and soul in one dish.',
      ar:'حلاوة استوائية مع حرارة لطيفة — روح باهيا في طبق.'
    }
  },
  {
    id:'pasteis',
    category:'mains',
    image:'PasteI.jpg',
    name:{ pt:'Pastéis Brasileiros (4 pcs)', en:'Brazilian Pastéis (4 pcs)', ar:'باستييس برازيلي (٤ قطع)' },
    short:{
      pt:'Recheios à escolha: carne, queijo, frango ou palmito. Com vinagrete apimentado.',
      en:'Choice of beef, cheese, chicken or hearts of palm. Spicy vinaigrette.',
      ar:'اختيار لحم أو جبن أو دجاج أو قلوب نخيل. فيناغريت حار.'
    },
    long:{
      pt:'Casquinhas crocantes por fora, suculentas por dentro — cada mordida estala.',
      en:'Crispy shells outside, juicy inside — a satisfying crack at every bite.',
      ar:'قِشرة مقرمشة من الخارج وعصير من الداخل — طقطقة ممتعة مع كل لقمة.'
    }
  },

  // ----- Acompanhamentos -----
  {
    id:'mandioca-frita', category:'sides', image:'Mandioca-frita.jpg',
    name:{ pt:'Mandioca Frita', en:'Fried Cassava', ar:'كسافا مقلية' },
    short:{ pt:'Palitos dourados, sequinhos e crocantes.', en:'Golden, crisp cassava sticks.', ar:'أعواد كسافا ذهبية مقرمشة.' },
    long:{ pt:'Clássico da mesa brasileira: textura perfeita por fora e maciez por dentro.', en:'Brazilian classic: crisp outside, fluffy inside.', ar:'كلاسيكي برازيلي: مقرمش من الخارج وهشّ من الداخل.' }
  },
  {
    id:'polenta-frita', category:'sides', image:'Polenta-frita.jpg',
    name:{ pt:'Polenta Frita', en:'Fried Polenta', ar:'بولينتا مقلية' },
    short:{ pt:'Palitos crocantes de fubá.', en:'Crispy cornmeal sticks.', ar:'أعواد دقيق الذرة المقرمشة.' },
    long:{ pt:'Levemente salgada, perfeita para petiscar.', en:'Lightly salted — perfect for snacking.', ar:'مالحة قليلاً — مثالية للتسالي.' }
  },
  {
    id:'pao-alho', category:'sides', image:'Pao-de-alho.jpg',
    name:{ pt:'Pão de Alho', en:'Garlic Bread', ar:'خبز بالثوم' },
    short:{ pt:'Crocante por fora, cremoso por dentro, com ervas.', en:'Crunchy outside, creamy garlic‑herb center.', ar:'مقرمش من الخارج وحشوة كريم الثوم بالأعشاب.' },
    long:{ pt:'Vai à grelha e chega perfumado à mesa.', en:'Grilled and aromatic to the table.', ar:'يُشوى ويصل عطِرًا إلى المائدة.' }
  },
  {
    id:'pao-queijo', category:'sides', image:'Pao-de-queijo.jpg',
    name:{ pt:'Pão de Queijo', en:'Cheese Bread', ar:'خبز الجبن' },
    short:{ pt:'Macio e quentinho, tradicional de Minas.', en:'Soft and warm, straight from Minas.', ar:'طري ودافئ — تقليدي من ميناس.' },
    long:{ pt:'Casamento perfeito com café… e com tudo.', en:'Perfect with coffee… and with everything.', ar:'مثالي مع القهوة… ومع كل شيء.' }
  },
  {
    id:'farofa-castanha', category:'sides', image:'farofa-de-castanha.jpg',
    name:{ pt:'Farofa de Castanha/Banana', en:'Cashew/Banana Farofa', ar:'فاروفا كاجو/موز' },
    short:{ pt:'Tostada, crocante, opção com banana da terra salteada.', en:'Toasted and crunchy; option with sautéed plantain.', ar:'محمصة ومقرمشة؛ خيار مع موز الجنة السوتيه.' },
    long:{ pt:'Textura que vicia — dá vontade de comer pura.', en:'Addictive texture — dangerously snackable.', ar:'قوام مُدمن — يجعلك تأكلها وحدها.' }
  },
  { id:'rubacao', category:'sides', image:'Rubacao.jpg',
    name:{ pt:'Rubacão', en:'Rubacão', ar:'روباكاو' },
    short:{ pt:'Arroz cremoso com feijão e queijo coalho grelhado.', en:'Creamy rice & beans with grilled queijo coalho.', ar:'أرز كريمي مع فاصوليا وجبن كوالهو مشوي.' },
    long:{ pt:'Conforto nordestino, cremosidade na medida certa.', en:'Northeastern comfort — just‑right creaminess.', ar:'راحة شمالية شرقية بقوام كريمي متزن.' }
  },

  // ----- Sobremesas -----
  { id:'encanto-coco', category:'desserts', image:'Encanto-de-Coco.jpg',
    name:{ pt:'Encanto de Coco', en:'Coconut Flan', ar:'فلان جوز الهند' },
    short:{ pt:'Pudim de coco aveludado com caramelo dourado.', en:'Silky coconut flan topped with golden caramel.', ar:'فلان جوز الهند حريري مع كراميل ذهبي.' },
    long:{ pt:'Clássico brasileiro repaginado com leveza e brilho.', en:'A classic, reimagined with lightness and glow.', ar:'كلاسيكي مُعاد بتجديد خفيف وبريق.' }
  },
  { id:'doce-roca', category:'desserts', image:'Doce-da-Roca-com-Gelo.jpg',
    name:{ pt:'Doce da Roça com Gelo', en:'Pumpkin Compote à la Mode', ar:'قرع بالحلو مع مثلجات' },
    short:{ pt:'Abóbora cozida com especiarias, sorvete de creme artesanal.', en:'Spiced pumpkin compote, warm, with vanilla ice cream.', ar:'قرع متبّل دافئ مع آيس كريم فانيلا.' },
    long:{ pt:'Sobremesa de alma caipira — quente, perfumada, aconchegante.', en:'Countryside soul — warm, aromatic, cozy.', ar:'روح ريفية — دافئة وعطرة ودافئة.' }
  },
  { id:'mandioca-real', category:'desserts', image:'Mandioca-Real.jpg',
    name:{ pt:'Mandioca Real', en:'Cassava Cake “Real”', ar:'كعكة الكسافا' },
    short:{ pt:'Bolo de mandioca com doce de leite e farofa crocante de mandioca caramelizada.', en:'Rustic cassava cake with dulce de leche and crispy cassava crumble.', ar:'كعكة كسافا ريفية مع دولسي دي ليتشي وكرامبل كسافا مقرمش.' },
    long:{ pt:'Texturas que se encontram — cremoso, crocante e nostálgico.', en:'Textures meeting: creamy, crunchy, nostalgic.', ar:'قوامات تلتقي — كريمي ومقرمش وحالم بالذكريات.' }
  },
  { id:'beijo-roca', category:'desserts', image:'Beijo-da-Roca.jpg',
    name:{ pt:'Beijo da Roça', en:'Coconut‑Cashew Truffle', ar:'ترافل جوز الهند والكاجو' },
    short:{ pt:'Trufa cremosa sobre mini bolo de milho verde levemente úmido.', en:'Creamy truffle over moist green‑corn cake.', ar:'ترافل كريمي فوق كعكة ذرة خضراء رطبة.' },
    long:{ pt:'Doçura na medida certa com perfume de campo.', en:'Just‑right sweetness with countryside perfume.', ar:'حلاوة متوازنة بعطر ريفي.' }
  },

  // ----- Bebidas -----
  { id:'sol-cerrado', category:'beverages', image:'Sol-do-Cerrado.jpg',
    name:{ pt:'Sol do Cerrado', en:'Sun of the Cerrado', ar:'شمس السيرادو' },
    short:{ pt:'Manga com maracujá, hortelã e toque cítrico.', en:'Mango with passion fruit, mint and a citrus touch.', ar:'مانجو مع ماراكوجا ونعناع ولمسة حمضية.' },
    long:{ pt:'Refrescante como pôr do sol brasileiro.', en:'Refreshing like a Brazilian sunset.', ar:'منعش كغروب شمس برازيلي.' }
  },
  { id:'frescor-amazonia', category:'beverages', image:'Frescor-da-Amazônia.jpg',
    name:{ pt:'Frescor da Amazônia', en:'Amazon Fresh', ar:'نسيم الأمازون' },
    short:{ pt:'Abacaxi batido com hortelã e limão.', en:'Pineapple blended with mint and lime.', ar:'أناناس مخفوق مع نعناع وليمون.' },
    long:{ pt:'Tropical, vibrante e verde.', en:'Tropical, vibrant, green.', ar:'استوائي نابض بالحياة.' }
  },
  { id:'pe-serra', category:'beverages', image:'Pé-de-Serra.jpg',
    name:{ pt:'Pé de Serra', en:'Mountain Mate', ar:'متة الجبل' },
    short:{ pt:'Chá‑mate gelado com limão, mel e gengibre.', en:'Iced yerba mate with lime, honey and ginger.', ar:'متة باردة مع ليمون وعسل وزنجبيل.' },
    long:{ pt:'Energia natural, elegante e leve.', en:'Natural energy — light and elegant.', ar:'طاقة طبيعية خفيفة أنيقة.' }
  },
  { id:'caipile', category:'beverages', image:'Caipilé-Clássico.jpg',
    name:{ pt:'Caipilé Clássico (sem álcool)', en:'Classic Caipilé (NA)', ar:'كايپيلي كلاسيكي' },
    short:{ pt:'Limão fresco, gelo e água com gás.', en:'Fresh lime, ice and sparkling water.', ar:'ليمون طازج وثـلج ومياه غازية.' },
    long:{ pt:'A alma da caipirinha, numa versão sem álcool.', en:'The soul of caipirinha, alcohol‑free.', ar:'روح الكايبيرينيا بدون كحول.' }
  },
  { id:'blueberry-coco', category:'beverages', image:'Blueberry-&-Coco-Fizz.jpg',
    name:{ pt:'Blueberry & Coco Fizz', en:'Blueberry & Coco Fizz', ar:'بلوبيري وكوكو فيز' },
    short:{ pt:'Mirtilo batido com leite de coco e toque de baunilha.', en:'Blueberries blended with coconut milk and a hint of vanilla.', ar:'توت أزرق مع حليب جوز الهند ولمسة فانيلا.' },
    long:{ pt:'Leve, cremoso e perfumado.', en:'Light, creamy and fragrant.', ar:'خفيف وكريمي وعطر.' }
  },
  { id:'amazon-breeze', category:'beverages', image:'Amazon-Breeze.jpg',
    name:{ pt:'Amazon-Breeze', en:'Amazon‑Breeze', ar:'أمازون بريز' },
    short:{ pt:'Milkshake de cupuaçu com leite e leite condensado.', en:'Creamy cupuaçu shake with milk & condensed milk.', ar:'ميلكشيك كوبواسو كريمي مع حليب وحليب مكثف.' },
    long:{ pt:'Sobremesa tropical no copo.', en:'A tropical dessert in a glass.', ar:'حلوى استوائية في كوب.' }
  },
  { id:'vitamina', category:'beverages', image:'Vitamina-do-Cerrado.jpg',
    name:{ pt:'Vitamina do Cerrado', en:'Cerrado Smoothie', ar:'ڤيتامينا دو سيرادو' },
    short:{ pt:'Banana com leite de coco e mel.', en:'Banana with coconut milk and honey.', ar:'موز مع حليب جوز الهند وعسل.' },
    long:{ pt:'Cremoso, energético e acolhedor.', en:'Creamy, energizing, cozy.', ar:'كريمي ومنشّط.'. }
  },
  { id:'verao-brasil', category:'beverages', image:'Verão-Brasil.jpg',
    name:{ pt:'Verão Brasil', en:'Brazilian Summer', ar:'صيف البرازيل' },
    short:{ pt:'Suco de manga, hortelã fresca e água com gás.', en:'Mango juice, fresh mint and sparkling water.', ar:'عصير مانجو ونعناع طازج وماء غازي.' },
    long:{ pt:'Leve, elegante e refrescante.', en:'Light, elegant and refreshing.', ar:'خفيف أنيق منعش.' }
  },
  { id:'uva-limao', category:'beverages', image:'Uva-&-Limão-Gelo.jpg',
    name:{ pt:'Uva & Limão Gelo', en:'Grape & Lime on Ice', ar:'عنب وليمون بالثلج' },
    short:{ pt:'Suco de uva integral com limão e hortelã.', en:'Pure grape juice with lime and mint.', ar:'عصير عنب نقي مع ليمون ونعناع.' },
    long:{ pt:'Equilíbrio perfeito entre doce e cítrico.', en:'Perfect balance of sweet and citrus.', ar:'توازن مثالي بين الحلو والحامض.' }
  },
  { id:'agua-aromatica', category:'beverages', image:'Água-Aromática-Panela-de-Barro.jpg',
    name:{ pt:'Água Aromática Panela de Barro', en:'Aromatic Water', ar:'ماء عطِر' },
    short:{ pt:'Laranja, pepino, limão siciliano e hortelã — servida bem gelada.', en:'Orange, cucumber, lemon and mint — served chilled.', ar:'برتقال وخيار وليمون ونعناع — بارد جدًا.' },
    long:{ pt:'Refresco leve da casa.', en:'House light refresher.', ar:'منعش خفيف خاص بنا.' }
  },

  // ----- Sazonal -----
  { id:'pamonha', category:'seasonal', image:'pamonha.jpg',
    name:{ pt:'Pamonha Mineira (Sazonal)', en:'Pamonha (Seasonal)', ar:'بامونيا موسمية' },
    short:{ pt:'Clássico de milho verde, doce e cremoso.', en:'Classic green‑corn sweet, silky and creamy.', ar:'حلوى الذرة الخضراء الكلاسيكية كريمية.' },
    long:{ pt:'Receita de família, embrulhada na palha, que chega quentinha e perfumada à mesa.', en:'Family recipe, wrapped in husk, served warm and fragrant.', ar:'وصفة عائلية تُقدَّم دافئة وعطرة داخل قشر الذرة.' }
  }
];

