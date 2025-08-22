// menuData.js
// Categoria: 'mains' | 'sides' | 'desserts' | 'beverages' | 'seasonal'

export const dishes = [
  // --- Pratos Principais (Mains) ---
  { id:'vaca-atolada', category:'mains', image:'Mandioca-Real.jpg',
    name:{ pt:'Vaca Atolada (Ossobuco)', en:'Vaca Atolada (Ossobuco)', ar:'ڤاكا أتولادا (أوسّوبوكو)' },
    short:{ pt:'Ossobuco lento com polenta cremosa e rúcula cítrica.', en:'Slow-cooked ossobuco with silky green-corn polenta and citrus arugula.', ar:'أوسّوبوكو بطيء مع بولينتا الذرة الخضراء والجرجير الحمضي.' },
    long:{ pt:'Clássico de Minas: carne macia que se desfaz, caldo rico e polenta cremosa — equilibrados por rúcula cítrica.', en:'A Minas classic — fall-apart tender beef over creamy green-corn polenta, brightened with citrus arugula.', ar:'طبق كلاسيكي من ميناس جيرايس مع لحم طري جدًا وبولينتا كريمية.' } },

  { id:'feijoada-costela', category:'mains', image:'feijoada.jpg',
    name:{ pt:'Feijoada de Costela', en:'Beef Rib Feijoada', ar:'فيجوادا ضلع البقر' },
    short:{ pt:'Com farofa de banana, laranja, vinagrete e arroz.', en:'With banana farofa, orange, vinaigrette and rice.', ar:'مع فاروفا الموز والبرتقال والفيناغريت والأرز.' },
    long:{ pt:'Feijão preto de cozimento lento com costela suculenta e acompanhamentos clássicos.', en:'Slow-cooked black beans with succulent ribs and classic sides.', ar:'فاصوليا سوداء مطهوة ببطء مع أضلاع طرية ومرافِقات كلاسيكية.' } },

  { id:'picanha-chef', category:'mains', image:'picanha.jpg',
    name:{ pt:'Picanha Grelhada (Prato do Chef)', en:"Grilled Picanha (Chef's Signature)", ar:'بيكانيا مشوية (توقيع الشيف)' },
    short:{ pt:'Com risoto de cogumelos, polenta de milho verde e molho de pimenta.', en:'With mushroom risotto, green-corn polenta and peppercorn sauce.', ar:'مع ريزوتو الفطر وبولينتا الذرة وصلصة الفلفل.' },
    long:{ pt:'Corte nobre na brasa — suculento e levemente defumado — finalização cremosa e picante.', en:'Prime cut over fire — juicy, lightly smoky — finished creamy and peppery.', ar:'قطعة فاخرة على الجمر بعصيرية ولمسة دخانية.' } },

  { id:'fraldinha', category:'mains', image:'fraldinha-inteira.jpg',
    name:{ pt:'Fraldinha Inteira para Compartilhar', en:'Whole Flank Steak to Share', ar:'فرالدينيا كاملة للمشاركة' },
    short:{ pt:'Com chimichurri, vinagrete e molho de pimenta.', en:'With chimichurri, vinaigrette and pepper sauce.', ar:'مع تشيميشوري وفيناغريت وصلصة الفلفل.' },
    long:{ pt:'Grelhada, fatiada e servida com molhos da casa — perfeita para dividir.', en:'Fire-grilled, sliced and served with house sauces — made for sharing.', ar:'مشوية على النار ومقطعة مع صلصات البيت.' } },

  { id:'galinhada', category:'mains', image:'Galinahda.jpg',
    name:{ pt:'Galinhada Caipira', en:'Country Chicken & Rice Stew', ar:'جالينهادا ريفية' },
    short:{ pt:'Caldo de frango com arroz e aioli de cúrcuma.', en:'Chicken-and-rice stew with turmeric aioli.', ar:'حساء دجاج مع أرز وآيولي كركم.' },
    long:{ pt:'Sabor de fogão a lenha — comida que abraça.', en:'Wood-stove soul — food that hugs.', ar:'نكهة موقد الحطب — طعام يحتضن.' } },

  { id:'hamburguer-picanha', category:'mains', image:'hamburguer.jpg',
    name:{ pt:'Hambúrguer de Picanha', en:'Picanha Burger', ar:'برغر بيكانيا' },
    short:{ pt:'Cogumelos, pimenta verde, queijo, bacon, batatas rústicas, maionese da casa.', en:'Mushrooms, green peppercorn, melted cheese, bacon, rustic fries, house mayo.', ar:'فطر وفلفل أخضر وجبن وبايكون وبطاطا ومايونيز.' },
    long:{ pt:'Suculento com leve defumado — brasileiro de verdade.', en:'Juicy with a gentle smoke — truly Brazilian.', ar:'عصير بلمسة دخانية — برازيلي بحق.' } },

  { id:'lasanha-banana', category:'mains', image:'Lasanha-de-banana.jpg',
    name:{ pt:'Lasanha de Carne com Banana da Terra', en:'Beef Lasagna with Plantain', ar:'لازانيا لحم مع موز الجنة' },
    short:{ pt:'Carne, muçarela e parmesão com banana crocante na manteiga.', en:'Beef, mozzarella and parmesan with buttery, crispy plantain.', ar:'لحم وجبن مع موز الجنة المقرمش بالزبدة.' },
    long:{ pt:'Salgado + doce na medida, bordas crocantes e centro cremoso.', en:'Sweet-savory, crispy edges and creamy center.', ar:'مالح-حلو بحواف مقرمشة وقلب كريمي.' } },

  { id:'coxinha-costela', category:'mains', image:'coxinha-de-costela.jpg',
    name:{ pt:'Coxinha de Costela (4 pcs)', en:'Beef Rib Coxinha (4 pcs)', ar:'كوشينيا ضلع (٤ قطع)' },
    short:{ pt:'Recheio de costela com toque de queijo; dip BBQ defumado.', en:'Rib filling with a cheesy touch; smoked BBQ dip.', ar:'حشوة ضلع مع جبن؛ صوص شواء مدخن.' },
    long:{ pt:'Dourada por fora, macia por dentro — nosso hit.', en:'Golden outside, soft inside — a house hit.', ar:'ذهبية من الخارج، طرية من الداخل — طبقنا الأشهر.' } },

  { id:'moqueca', category:'mains', image:'Moqueca-baiana.jpg',
    name:{ pt:'Moqueca Baiana', en:'Bahian Fish Stew', ar:'موقتشة بايانا' },
    short:{ pt:'Peixe, leite de coco, dendê e pimentões. Com arroz e farofa.', en:'Fish, coconut milk, dendê and peppers. With rice and farofa.', ar:'سمك مع حليب جوز الهند ودندي وفلفل. مع الأرز والفاروفا.' },
    long:{ pt:'Mar, calor e alma baiana em um prato.', en:'Sea, heat and Bahia’s soul on a plate.', ar:'بحر وحرارة وروح باهيا في طبق.' } },

  { id:'pasteis', category:'mains', image:'PasteI.jpg',
    name:{ pt:'Pastéis Brasileiros (4 pcs)', en:'Brazilian Pastéis (4 pcs)', ar:'باستييس برازيلي (٤ قطع)' },
    short:{ pt:'Carne, queijo, frango ou palmito. Vinagrete apimentado.', en:'Beef, cheese, chicken or palm heart. Spicy vinaigrette.', ar:'لحم أو جبن أو دجاج أو قلب نخيل. فيناغريت حار.' },
    long:{ pt:'Crocantes por fora, suculentos por dentro.', en:'Crispy outside, juicy inside.', ar:'مقرمش خارجًا وعصير داخلاً.' } },

  // --- Acompanhamentos (Sides) ---
  { id:'mandioca-frita', category:'sides', image:'Mandioca-frita.jpg',
    name:{ pt:'Mandioca Frita', en:'Fried Cassava', ar:'كسافا مقلية' },
    short:{ pt:'Palitos dourados e crocantes.', en:'Golden, crisp cassava sticks.', ar:'أعواد كسافا ذهبية مقرمشة.' },
    long:{ pt:'Textura perfeita por fora e maciez por dentro.', en:'Crisp outside, fluffy inside.', ar:'مقرمش من الخارج وهشّ من الداخل.' } },

  { id:'polenta-frita', category:'sides', image:'Polenta-frita.jpg',
    name:{ pt:'Polenta Frita', en:'Fried Polenta', ar:'بولينتا مقلية' },
    short:{ pt:'Clássica de fubá, levemente salgada.', en:'Cornmeal sticks, lightly salted.', ar:'أعواد دقيق الذرة مالحة قليلاً.' },
    long:{ pt:'Perfeita para petiscar.', en:'Perfect for snacking.', ar:'مثالية للتسالي.' } },

  { id:'pao-alho', category:'sides', image:'Pao-de-alho.jpg',
    name:{ pt:'Pão de Alho', en:'Garlic Bread', ar:'خبز بالثوم' },
    short:{ pt:'Crocante por fora e cremoso por dentro, com ervas.', en:'Crunchy outside, creamy inside — garlic & herbs.', ar:'مقرمش خارجيًا وكريمي داخليًا بالأعشاب.' },
    long:{ pt:'Vai à grelha e chega perfumado.', en:'Grilled, arrives aromatic.', ar:'مشوي ويصل عطِرًا.' } },

  { id:'pao-queijo', category:'sides', image:'Pao-de-queijo.jpg',
    name:{ pt:'Pão de Queijo', en:'Cheese Bread', ar:'خبز الجبن' },
    short:{ pt:'Macio e quentinho, tradicional de Minas.', en:'Soft and warm, Minas classic.', ar:'طري ودافئ — كلاسيكي مينيرو.' },
    long:{ pt:'Imbatível com café (e com tudo).', en:'Unbeatable with coffee (and everything).', ar:'لا يُقاوَم مع القهوة.' } },

  { id:'farofa-castanha', category:'sides', image:'farora-de-castanha.jpg',
    name:{ pt:'Farofa de Castanha/Banana', en:'Cashew/Banana Farofa', ar:'فاروفا كاجو/موز' },
    short:{ pt:'Tostada e crocante; opção com banana da terra.', en:'Toasted & crunchy; plantain option.', ar:'محمصة ومقرمشة؛ خيار موز الجنة.' },
    long:{ pt:'Dá vontade de comer pura.', en:'Addictive on its own.', ar:'مدمنة وحدها.' } },

  { id:'rubacao', category:'sides', image:'Rubacao.jpg',
    name:{ pt:'Rubacão', en:'Rubacão', ar:'روباكاو' },
    short:{ pt:'Arroz cremoso com feijão e queijo coalho.', en:'Creamy rice & beans with grilled queijo coalho.', ar:'أرز كريمي مع فاصوليا وجبن كوالهو مشوي.' },
    long:{ pt:'Conforto nordestino na medida.', en:'Northeastern comfort, just right.', ar:'راحة شمالية شرقية متزنة.' } },

  // --- Sobremesas (Desserts) ---
  { id:'encanto-coco', category:'desserts', image:'Encanto-de-Coco.jpg',
    name:{ pt:'Encanto de Coco', en:'Coconut Flan', ar:'فلان جوز الهند' },
    short:{ pt:'Pudim aveludado com caramelo dourado.', en:'Silky coconut flan with golden caramel.', ar:'فلان حريري مع كراميل ذهبي.' },
    long:{ pt:'Clássico com leveza e brilho.', en:'Classic, lighter and glowing.', ar:'كلاسيكي بلمسة خفيفة وبريق.' } },

  { id:'doce-roca', category:'desserts', image:'Doce-da-Roca-com-Gelo.jpg',
    name:{ pt:'Doce da Roça com Gelo', en:'Pumpkin Compote à la Mode', ar:'قرع بالحلو مع مثلجات' },
    short:{ pt:'Abóbora com especiarias e sorvete artesanal.', en:'Spiced pumpkin compote with vanilla ice cream.', ar:'قرع متبّل مع آيس كريم فانيلا.' },
    long:{ pt:'Alma caipira, aconchego na colherada.', en:'Countryside soul, comfort by the spoon.', ar:'روح ريفية ودفء في كل ملعقة.' } },

  { id:'mandioca-real', category:'desserts', image:'Mandioca-Real.jpg',
    name:{ pt:'Mandioca Real', en:'Cassava Cake “Real”', ar:'كعكة الكسافا' },
    short:{ pt:'Bolo de mandioca, doce de leite e crumble crocante.', en:'Cassava cake, dulce de leche, crispy crumble.', ar:'كعكة كسافا مع دولسي دي ليتشي وكرامبل مقرمش.' },
    long:{ pt:'Cremoso + crocante + memória afetiva.', en:'Creamy + crunchy + nostalgia.', ar:'كريمي ومقرمش ومليء بالذكريات.' } },

  { id:'beijo-roca', category:'desserts', image:'Beijo-da-Roca.jpg',
    name:{ pt:'Beijo da Roça', en:'Coconut-Cashew Truffle', ar:'ترافل جوز الهند والكاجو' },
    short:{ pt:'Trufa cremosa sobre mini bolo de milho.', en:'Creamy truffle over green-corn cake.', ar:'ترافل كريمي على كعكة ذرة.' },
    long:{ pt:'Doce na medida e perfume de campo.', en:'Just-right sweet with countryside perfume.', ar:'حلاوة متوازنة بعطر ريفي.' } },

  // --- Bebidas (Beverages) ---
  { id:'sol-cerrado', category:'beverages', image:'Sol-do-Cerrado.jpg',
    name:{ pt:'Sol do Cerrado', en:'Sun of the Cerrado', ar:'شمس السيرادو' },
    short:{ pt:'Manga com maracujá, hortelã e toque cítrico.', en:'Mango, passion fruit, mint and citrus.', ar:'مانجو وماراكوجا ونعناع وحمضيات.' },
    long:{ pt:'Refrescante como um pôr do sol brasileiro.', en:'Refreshing like a Brazilian sunset.', ar:'منعش كغروب شمس برازيلي.' } },

  { id:'frescor-amazonia', category:'beverages', image:'Frescor-da-Amazônia.jpg',
    name:{ pt:'Frescor da Amazônia', en:'Amazon Fresh', ar:'نسيم الأمازون' },
    short:{ pt:'Abacaxi batido com hortelã e limão.', en:'Pineapple blended with mint and lime.', ar:'أناناس مع نعناع وليمون.' },
    long:{ pt:'Tropical e vibrante.', en:'Tropical and vibrant.', ar:'استوائي نابض.' } },

  { id:'pe-serra', category:'beverages', image:'Pé-de-Serra.jpg',
    name:{ pt:'Pé de Serra', en:'Mountain Mate', ar:'متة الجبل' },
    short:{ pt:'Chá-mate gelado com limão, mel e gengibre.', en:'Iced mate with lime, honey & ginger.', ar:'متة باردة مع ليمون وعسل وزنجبيل.' },
    long:{ pt:'Energia natural e elegante.', en:'Natural, elegant energy.', ar:'طاقة طبيعية أنيقة.' } },

  { id:'caipile', category:'beverages', image:'Caipilé-Clássico.jpg',
    name:{ pt:'Caipilé Clássico (sem álcool)', en:'Classic Caipilé (NA)', ar:'كايپيلي كلاسيكي' },
    short:{ pt:'Limão, gelo e água com gás.', en:'Lime, ice and sparkling water.', ar:'ليمون وثـلج ومياه غازية.' },
    long:{ pt:'A alma da caipirinha sem álcool.', en:'The soul of caipirinha, alcohol-free.', ar:'روح الكايبيرينيا بدون كحول.' } },

  { id:'blueberry-coco', category:'beverages', image:'Blueberry-&-Coco-Fizz.jpg',
    name:{ pt:'Blueberry & Coco Fizz', en:'Blueberry & Coco Fizz', ar:'بلوبيري وكوكو فيز' },
    short:{ pt:'Mirtilo com leite de coco e toque de baunilha.', en:'Blueberries with coconut milk & vanilla.', ar:'توت أزرق مع حليب جوز الهند وفانيلا.' },
    long:{ pt:'Leve e cremoso.', en:'Light and creamy.', ar:'خفيف وكريمي.' } },

  { id:'amazon-breeze', category:'beverages', image:'Amazon-Breeze.jpg',
    name:{ pt:'Amazon-Breeze', en:'Amazon-Breeze', ar:'أمازون بريز' },
    short:{ pt:'Milkshake de cupuaçu cremoso.', en:'Creamy cupuaçu milkshake.', ar:'ميلكشيك كوبواسو كريمي.' },
    long:{ pt:'Sobremesa no copo.', en:'Dessert in a glass.', ar:'حلوى في كوب.' } },

  { id:'vitamina', category:'beverages', image:'Vitamina-do-Cerrado.jpg',
    name:{ pt:'Vitamina do Cerrado', en:'Cerrado Smoothie', ar:'ڤيتامينا دو سيرادو' },
    short:{ pt:'Banana com leite de coco e mel.', en:'Banana with coconut milk & honey.', ar:'موز مع حليب جوز الهند وعسل.' },
    long:{ pt:'Cremoso e acolhedor.', en:'Creamy and cozy.', ar:'كريمي ودافئ.' } },

  { id:'verao-brasil', category:'beverages', image:'Verão-Brasil.jpg',
    name:{ pt:'Verão Brasil', en:'Brazilian Summer', ar:'صيف البرازيل' },
    short:{ pt:'Suco de manga, hortelã fresca e gás.', en:'Mango juice, fresh mint & bubbles.', ar:'عصير مانجو ونعناع طازج وغاز.' },
    long:{ pt:'Leve e refrescante.', en:'Light and refreshing.', ar:'خفيف ومنعش.' } },

  { id:'uva-limao', category:'beverages', image:'Uva-&-Limão-Gelo.jpg',
    name:{ pt:'Uva & Limão Gelo', en:'Grape & Lime on Ice', ar:'عنب وليمون بالثلج' },
    short:{ pt:'Suco de uva integral com limão e hortelã.', en:'Pure grape juice with lime & mint.', ar:'عصير عنب نقي مع ليمون ونعناع.' },
    long:{ pt:'Equilíbrio doce-cítrico perfeito.', en:'Perfect sweet-citrus balance.', ar:'توازن مثالي بين الحلو والحامض.' } },

  { id:'agua-aromatica', category:'beverages', image:'Água-Aromática-Panela-de-Barro.jpg',
    name:{ pt:'Água Aromática Panela de Barro', en:'Aromatic Water', ar:'ماء عطِر' },
    short:{ pt:'Laranja, pepino, limão siciliano e hortelã.', en:'Orange, cucumber, lemon & mint.', ar:'برتقال وخيار وليمون ونعناع.' },
    long:{ pt:'Refresco leve da casa.', en:'Light house refresher.', ar:'منعش خفيف من البيت.' } },

  // --- Sazonal (Seasonal) ---
  { id:'pamonha', category:'seasonal', image:'pamonha.jpg',
    name:{ pt:'Pamonha Mineira (Sazonal)', en:'Pamonha (Seasonal)', ar:'بامونيا موسمية' },
    short:{ pt:'Clássico de milho verde, doce e cremoso.', en:'Green-corn classic, sweet and creamy.', ar:'حلوى الذرة الخضراء الكلاسيكية كريمية.' },
    long:{ pt:'Receita de família embrulhada na palha.', en:'Family recipe wrapped in husk.', ar:'وصفة عائلية داخل قشر الذرة.' } },
];