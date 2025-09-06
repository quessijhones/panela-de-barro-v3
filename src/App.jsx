// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";

/* =========================================
   Idiomas (PT como padrão) + dicionário UI
   ========================================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

const dict = {
  pt: {
    brand: "Panela de Barro",
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", woodfire: "Fogão a Lenha", location: "Localização", support: "Suporte" },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle: "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      soon: "Inauguração em Novembro — reservas online em breve.",
    },
    sections: { menuHighlights: "Destaques do Menu", immersive: "Imersões do Brasil", back: "Voltar ao início" },
    menu: {
      title: "Menu",
      tabs: { all: "Todos", mains: "Pratos", appetizers: "Entradas", seasonal: "Sazonais", beverages: "Bebidas", desserts: "Sobremesas" },
      modal: { close: "Fechar" },
      tags: { Halal: "Halal", Beef: "Carne", Dairy: "Laticínio", Gluten: "Glúten", Sea: "Peixe", Dessert: "Sobremesa", Beverage: "Bebida", Seasonal: "Sazonal" },
    },
   // ===== PT =====
about: {
  title: "Sobre",
  rich: {
    blocks: [
      { type: "p", text: "Panela de Barro: O Útero da Culinária Brasileira" },
      {
        type: "p",
        text:
          "Mais do que um simples recipiente, a panela de barro é um símbolo arquetípico da alimentação brasileira. Sua história se confunde com a própria formação do nosso povo, sendo uma das mais antigas e sagradas tecnologias culinárias das Américas."
      },
      {
        type: "p",
        text:
          "Antes da chegada dos europeus, os povos indígenas já dominavam a arte da cerâmica, moldando com as mãos e cozendo no fogo panelas e potes que eram o centro da vida comunitária. Nelas se cozinhava o peixe moqueado, se preparava o beiju e se fermentava a caiçuma."
      },
      {
        type: "img",
        src: "/heritage/panela-mao.jpg",
        alt: "Panela de barro artesanal nas mãos",
        caption: "Feita à mão, de geração em geração",
        align: "right"
      },
      {
        type: "p",
        text:
          "Com a colonização, a panela de barro foi adotada e adaptada. Nas senzalas, tornou-se instrumento de resistência e criatividade: nasceram feijões guisados, angu, ensopados. O barro respira e cozinha devagar, preservando sucos e nutrientes e deixando o conhecido “sabor de roça”."
      },
      {
        type: "img",
        src: "/heritage/panela-1.jpg",
        alt: "Panelas de barro",
        caption: "Panelas que respiram e guardam memória",
        align: "left"
      },
      {
        type: "p",
        text:
          "A panela de barro é, portanto, o útero onde se gestaram sabores autênticos do Brasil: simplicidade, tradição, conexão com a terra e generosidade em compartilhar."
      },
      {
        type: "p",
        text:
          "Escolhemos o nome Panela de Barro para o nosso restaurante no Qatar como declaração de intenções: cozinhar com alma, honrar a memória e servir com carinho. Aqui, cada prato quer carregar essa herança."
      }
    ]
  },
  family: "Nossa família",
  people: {
    quessi: {
      name: "Quessi — Proprietário",
      text:
        "Anfitrião atento e apaixonado pelas raízes brasileiras. Zela pela experiência do convidado e pelo propósito da casa.",
      img: "/heritage/chef-quessi.jpg"
    },
    alex: {
      name: "Alex — Head Chef",
      text:
        "Comando de fogo preciso e sensibilidade no tempero. Técnica com memória afetiva.",
      img: "/heritage/chef-alex.jpg"
    },
    cleusa: {
      name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas",
      text:
        "A raiz do nosso sabor: cadernos de receita, histórias de roça e o tempo certo de cada preparo.",
      img: "/heritage/cleusa.jpg"
    }
  },
  heritageImgs: [
    { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
    { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" }
  ]
 },
    wood: {
  title: "Fogão a Lenha",
  p1: "A história do fogão a lenha no Brasil é a própria história da formação do povo brasileiro. Muito antes de ser um ícone da gastronomia afetiva, ele foi uma ferramenta fundamental de sobrevivência e o epicentro da vida doméstica.",
  p2: "Suas origens remontam aos colonizadores portugueses, que trouxeram a técnica da alvenaria e o hábito de cozinhar em lareiras fixas. No entanto, foi no solo brasileiro que esse instrumento se transformou, incorporando saberes indígenas e africanos, tornando-se único.",
  p3: "Os povos indígenas, com profundo conhecimento do fogo e das madeiras nativas, ensinaram quais eram as melhores lenhas para cada propósito. Pessoas escravizadas africanas, forçadas a adaptar-se, foram as primeiras alquimistas desses fogões — transformando cortes de carne menos nobres e ingredientes negligenciados em pratos de riqueza cultural imensa.",
  p4: "A feijoada, hoje prato símbolo nacional, nasceu nas senzalas, fervendo pacientemente em grandes panelas de ferro sobre esses fogões. Assim, o fogão a lenha ergueu-se como o coração pulsante da casa brasileira: da senzala à casa-grande, da tapera cabocla à fazenda bandeirista.",
  p5: "Ao seu redor as famílias se reuniam, histórias eram contadas, o pão era amassado e o café coado. Seu calor irregular não é falha: é virtude. Essa imprevisibilidade exige do cozinheiro paciência, sensibilidade e um conhecimento quase espiritual do fogo.",
  p6: "O sabor defumado que impregna os alimentos não é um condimento que se adiciona; é memória viva: carvão e madeira transformados em sutileza.",
  p7: "É essa alma ancestral, forjada a fogo e história, que nós do Panela de Barro transplantamos para o Qatar. Nosso fogão a lenha, visível na cozinha aberta, não é peça de museu — é protagonista.",
  p8: "Cada prato que sai dele é uma carta de amor à tradição brasileira:",
  dishes: {
    feijoada: {
      title: "Nossa Feijoada de Costela Bovina",
      desc: "Resgatamos a origem do prato com um toque do sertão: costela bovina assada lentamente na brasa até desfiar, dando ao caldo do feijão preto profundidade e riqueza incomparáveis.",
      img: "/images/feijoada-costela.jpg"
    },
    vacaAtolada: {
      title: "Nossa Vaca Atolada",
      desc: "Clássico caipira que narra a vaca ‘atolada’ na mandioca: a raiz cozinha em brasa branda, absorvendo o sabor da carne macia — harmonia entre o doce do legume e o sabor da carne.",
      img: "/images/vaca-atolada.jpg"
    },
    farofa: {
      title: "Nossa Farofa de Banana da Terra",
      desc: "A companheira indispensável elevada: banana da terra fatiada e dourada, depois envolvida na farinha de mandioca tostada no calor do fogão.",
      img: "/images/farofa-de-castanha.jpg"
    }
  },
  conclusion: "No Panela de Barro, nossa cozinha aberta convida você a testemunhar a magia desse ritual secular. Deixe que o aroma de lenha e comida caseira transporte seus sentidos para o interior do Brasil.",
  imgs: ["/heritage/fogao-1.jpg","/heritage/fogao-2.jpg","/heritage/fogao-3.jpg"]
},
    gallery: { title: "Galeria" },
    support: {
      title: "Suporte",
      items: ["Pedidos e reservas em breve", "Eventos e encomendas", "Parcerias"],
      contactTitle: "Contato",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: { title: "Localização", addr: "Baraha Town — Doha, Qatar", map: "Ver no mapa" },
    immersiveLabels: { amazonia: "Amazônia", cerrado: "Cerrado", lencois: "Lençóis", litoral: "Litoral", serra: "Serra" },
    drawer: { menu: "Menu", social: "Redes sociais", languages: "Idiomas", close: "Fechar" },
  },
  en: {
    brand: "Panela de Barro",
    nav: { about: "About", menu: "Menu", gallery: "Gallery", woodfire: "Wood-Fired Stove", location: "Location", support: "Support" },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle: "Family-run restaurant in Qatar. 20+ years of hospitality, wood fire and Brazilian roots.",
      cta: "View Menu",
      soon: "Opening in November — online reservations soon.",
    },
    sections: { menuHighlights: "Menu Highlights", immersive: "Brazil Immersions", back: "Back to start" },
    menu: {
      title: "Menu",
      tabs: { all: "All", mains: "Mains", appetizers: "Appetizers", seasonal: "Seasonal", beverages: "Beverages", desserts: "Desserts" },
      modal: { close: "Close" },
      tags: { Halal: "Halal", Beef: "Beef", Dairy: "Dairy", Gluten: "Gluten", Sea: "Fish", Dessert: "Dessert", Beverage: "Beverage", Seasonal: "Seasonal" },
    },
    // ===== EN =====
about: {
  title: "About",
  p1: "Panela de Barro — the womb of Brazilian cuisine. More than a simple vessel, the clay pot is an archetypal symbol of Brazilian food. Its story blends with the very formation of our people, making it one of the oldest and most sacred culinary technologies in the Americas.",
  p2: "Before the arrival of Europeans, Indigenous peoples already mastered ceramics — shaping clay by hand and firing pots that were at the center of community life. In them, fish moqueca was cooked, beiju was prepared and caiçuma was fermented. With colonization, the clay pot was adopted and adapted; in the senzalas it became a tool of resistance and creativity, giving rise to stews, broths and rich one-pot dishes. Clay breathes and cooks slowly, preserving juices and nutrients and leaving the familiar countryside taste.",
  p3: "The clay pot is, therefore, the cradle where the authentic flavors of Brazil were nurtured: simplicity, tradition, a bond with the land and the generosity of sharing. We chose the name Panela de Barro for our restaurant in Qatar as a declaration of purpose: cook with soul, honor memory and serve with care. Here, every dish carries this heritage.",
  family: "Our family",
  people: {
    quessi: { name: "Quessi Jones — Owner", text: "Warm host who looks after the guest experience and keeps our purpose alive.", img: "/heritage/chef-quessi.jpg" },
    alex:   { name: "Alex — Head Chef", text: "Technique and memory — perfect doneness and steady fire.", img: "/heritage/chef-alex.jpg" },
    cleusa: { name: "Cleusa Gonçalves — Mother & Recipe Guardian", text: "Stories and recipes passed down through generations.", img: "/heritage/cleusa.jpg" },
  },
  heritageImgs: [
    { src: "/heritage/panela-1.jpg",        caption: "Handcrafted, passed down through generations" },
    { src: "/heritage/panela-artesanal.jpg", caption: "Pots that breathe and hold memory" },
  ],
},
    wood: {
  title: "Wood-Fired Stove",
  p1: "The story of Brazil’s wood-fired stove is the story of Brazil itself. Long before it became an icon of comfort cooking, it was a vital tool for survival and the center of home life.",
  p2: "Its roots trace back to Portuguese colonizers who brought masonry know-how and fixed hearths. In Brazil, the stove transformed as it absorbed Indigenous and African knowledge, becoming truly unique.",
  p3: "Indigenous peoples, masters of fire and native woods, taught which logs worked best for each purpose. Enslaved Africans, forced to adapt, became the first alchemists of these stoves — turning humble cuts and overlooked ingredients into dishes of profound cultural richness.",
  p4: "Feijoada — now a national symbol — bubbled patiently in iron pots over these fires in the senzalas. The wood-fired stove rose as the beating heart of the Brazilian home, from senzala to manor house, from simple shacks to countryside farms.",
  p5: "Families gathered around it; stories were told; bread was kneaded; coffee was brewed. Its uneven heat is not a flaw — it’s a virtue. That unpredictability asks for patience, sensitivity, and an almost spiritual knowledge of fire.",
  p6: "The smoky note that permeates the food isn’t a seasoning you add; it’s living memory: charcoal and wood becoming subtlety.",
  p7: "This ancestral soul — forged by fire and history — is what we bring to Qatar. Our wood-fired stove, visible in our open kitchen, isn’t a museum piece; it’s the lead artist.",
  p8: "Every dish that leaves it is a love letter to Brazilian tradition:",
  dishes: {
    feijoada: {
      title: "Our Beef Rib Feijoada",
      desc: "We honor the dish’s origins with a touch from the sertão: beef ribs slow-roasted over embers until they fall apart, lending unmatched depth and richness to the black-bean broth.",
      img: "/images/feijoada-costela.jpg"
    },
    vacaAtolada: {
      title: "Our Vaca Atolada",
      desc: "A countryside classic where cassava ‘embraces’ the beef: it cooks gently over embers, soaking up the flavor of tender meat — a harmony between the root’s natural sweetness and the savoriness of beef.",
      img: "/images/vaca-atolada.jpg"
    },
    farofa: {
      title: "Our Plantain Farofa",
      desc: "The indispensable side, elevated: ripe plantain is thinly sliced and browned, then folded into toasted cassava flour warmed by the stove.",
      img: "/images/farofa-de-castanha.jpg"
    }
  },
  conclusion: "At Panela de Barro, our open kitchen invites you to witness this time-honored ritual. Let the aroma of burning wood and home cooking transport you to Brazil’s countryside.",
  imgs: ["/heritage/fogao-1.jpg","/heritage/fogao-2.jpg","/heritage/fogao-3.jpg"]
},
    gallery: { title: "Gallery" },
    support: {
      title: "Support",
      items: ["Orders & reservations soon", "Events & catering", "Partnerships"],
      contactTitle: "Contact",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: { title: "Location", addr: "Baraha Town — Doha, Qatar", map: "Open map" },
    immersiveLabels: { amazonia: "Amazon", cerrado: "Cerrado", lencois: "Lençóis", litoral: "Coast", serra: "Highlands" },
    drawer: { menu: "Menu", social: "Social", languages: "Languages", close: "Close" },
  },
  ar: {
    brand: "بانِيلا دي بارّو",
    nav: { about: "نبذة", menu: "القائمة", gallery: "المعرض", woodfire: "موقد الحطب", location: "الموقع", support: "الدعم" },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle: "مطعم عائلي في قطر — أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
      cta: "عرض القائمة",
      soon: "الافتتاح في نوفمبر — الحجوزات قريبًا.",
    },
    sections: { menuHighlights: "مختارات القائمة", immersive: "جولات برازيلية", back: "العودة للبداية" },
    menu: {
      title: "القائمة",
      tabs: { all: "الكل", mains: "الأطباق الرئيسية", appetizers: "المقبلات", seasonal: "موسمية", beverages: "المشروبات", desserts: "الحلويات" },
      modal: { close: "إغلاق" },
      tags: { Halal: "حلال", Beef: "لحم بقر", Dairy: "ألبان", Gluten: "غلوتين", Sea: "سمك", Dessert: "حلوى", Beverage: "مشروب", Seasonal: "موسمي" },
    },
   // ===== AR =====
about: {
  title: "نبذة",
  p1: "«بانِيلا دي بارّو» — رَحم المطبخ البرازيلي. أكثر من مجرد وعاء، فـقِدر الطين رمزٌ أصيل لطعام البرازيل. قصته تمتزج بتكوُّن شعبنا نفسه، وهو من أقدم وأقدس التقنيات culinárias في القارتين الأميركيتين.",
  p2: "قبل وصول الأوروبيين كان السكان الأصليون يتقنون صناعة الفخار — يعجنون الطين بأيديهم ويُحرقون القدور التي كانت مركز الحياة المجتمعية. فيها كان يُطهى طبق الموكِيكا من السمك، ويُحضَّر الخبز المسطح «بيجو»، وتُخمَّر «كايصوما». ومع الاستعمار، اعتُمِد القِدر الطيني وتحوّل في المزارع والسَّنزالاس إلى أداة مقاومة وإبداع: ظهرت اليخنات والمرق والأطباق الغنية. الطين «يتنفّس» ويطهو على مهل، فيحفظ العُصارات والمغذّيات ويمنح مذاق الريف المألوف.",
  p3: "لذلك فالقِدر الطيني هو مهد النكهات البرازيلية الأصيلة: البساطة، والتقاليد، والارتباط بالأرض، وسخاء المشاركة. اخترنا اسم «بانِيلا دي بارّو» لمطعمنا في قطر إعلانًا لنيّتنا: نطبخ بروح، نُكرِّم الذاكرة ونخدم بمودّة. هنا يحمل كل طبق هذا الإرث.",
  family: "عائلتنا",
  people: {
    quessi: { name: "كِوِسّي جونز — المالك", text: "مضيف دافئ يعتني بتجربة الضيف ويحفظ غاية المكان.", img: "/heritage/chef-quessi.jpg" },
    alex:   { name: "أليكس — الشيف",         text: "حِرَفية وذاكرة — تسوية مثالية ونار ثابتة.",     img: "/heritage/chef-alex.jpg" },
    cleusa: { name: "كلوزا غونشالفِس — الأم وحافظة الوصفات", text: "حكايات ووصفات تتناقلها الأجيال.", img: "/heritage/cleusa.jpg" },
  },
  heritageImgs: [
    { src: "/heritage/panela-1.jpg",        caption: "مصنوعة يدويًا، تتناقلها الأجيال" },
    { src: "/heritage/panela-artesanal.jpg", caption: "قدور «تتنفّس» وتحفظ الذاكرة" },
  ],
},
    wood: {
  title: "موقد الحطب",
  p1: "قصة موقد الحطب في البرازيل هي جزء من قصة تكوّن الشعب البرازيلي نفسه. قبل أن يصبح رمزًا للمطبخ الدافئ، كان أداةً أساسية للبقاء ومركز الحياة المنزلية.",
  p2: "تعود جذوره إلى البرتغاليين الذين جلبوا معهم فن البناء والعَمَدة الثابتة. لكن في البرازيل تغيّر الموقد وتشكّل بالمعرفة الأصلية والأفريقية فأصبح فريدًا.",
  p3: "عرّفنا السكّان الأصليون على أنواع الأخشاب المناسبة لكل غاية، بخبرتهم بالنار وغاباتهم. وأبدع الأفارقة المُستعبَدون، مكرهين على التكيّف، في تحويل القطع الرخيصة والمكوّنات المتواضعة إلى أطباقٍ غنيّة بالمعنى والثقافة.",
  p4: "نشأت الفيجوادا — طبقنا الوطني اليوم — في «السِنزالات»، تغلي بصبر في قدور الحديد فوق هذه المواقد. وهكذا صار موقد الحطب قلب البيت البرازيلي النابض: من السِنزالة إلى بيوت الأسياد، ومن الأكواخ البسيطة إلى المزارع.",
  p5: "حولَه كانت العائلة تجتمع، والقصص تُروى، والعجين يُعجن والقهوة تُصفّى. حرارته غير المنتظمة ليست عيبًا بل ميزة؛ فهي تطلب صبرًا وحسًّا مرهفًا ومعرفة شبه روحية بالنار.",
  p6: "النَّكهة الدخانية ليست بهارًا يُضاف؛ إنها ذاكرة حية، فحمٌ وخشب يتحوّلان إلى رهافة.",
  p7: "هذه الروح الضاربة في القِدم — المجبولة بالنار والتاريخ — هي ما ننقله إلى قطر. موقدنا، الظاهر في مطبخنا المفتوح، ليس قطعة متحف؛ بل هو بطل المطبخ.",
  p8: "وكل طبق يخرج منه رسالةُ حبٍ للتقليد البرازيلي:",
  dishes: {
    feijoada: {
      title: "فيجوادا ضلع البقر",
      desc: "نُعيد أصل الطبق بلمسة من الريف: أضلاع البقر تُطهى ببطء فوق الجمر حتى تتفتّت، فتمنح مرق الفاصولياء السوداء عمقًا وغِنى لا يُضاهيان.",
      img: "/images/feijoada-costela.jpg"
    },
    vacaAtolada: {
      title: "ڤاكا أتولادا",
      desc: "كلاسيكية ريفية تعانق فيها الكسافا اللحم: تُطهى الكسافا على جمر هادئ لتتشبّع بنكهات اللحم الطري — توازن بين حلاوة الجذر ومِلْحَة اللحم.",
      img: "/images/vaca-atolada.jpg"
    },
    farofa: {
      title: "فاروفا موز الجنة",
      desc: "الصاحبة التي لا تُستغنى عنها لكن بارتقاء: تُقطَّع موزة الجنة وتُحمّر برفق ثم تُخلط بدقيق الكسافا المُحمَّص على حرارة الموقد.",
      img: "/images/farofa-de-castanha.jpg"
    }
  },
  conclusion: "في «بانِيلا دي بارّو»، يدعوك مطبخنا المفتوح لمشاهدة طقسٍ عريق. دَع عطر الحطب والطعام البيتي يأخذك إلى ريف البرازيل.",
  imgs: ["/heritage/fogao-1.jpg","/heritage/fogao-2.jpg","/heritage/fogao-3.jpg"]
},
    gallery: { title: "المعرض" },
    support: { title: "الدعم", items: ["الطلبات والحجوزات قريبًا", "الفعاليات والولائم", "شراكات"], contactTitle: "التواصل", phone: "974 3047 5279", email: "restaurant@paneladebarroqatar.com" },
    location: { title: "الموقع", addr: "باراها تاون — الدوحة، قطر", map: "افتح الخريطة" },
    immersiveLabels: { amazonia: "الأمازون", cerrado: "السِّيرادو", lencois: "لِنسويس", litoral: "الساحل", serra: "الجبال" },
    drawer: { menu: "القائمة", social: "التواصل الاجتماعي", languages: "اللغات", close: "إغلاق" },
  },
};
// Render de blocos ricos (parágrafos + imagens com legenda)
const renderRich = (blocks = []) => (
  <div className="rich">
    {blocks.map((b, i) =>
      b.type === "img" ? (
        <figure key={i} className={`rich-figure ${b.align || "center"}`}>
          <img src={b.src} alt={b.alt || ""} loading="lazy" />
          {b.caption ? <figcaption>{b.caption}</figcaption> : null}
        </figure>
      ) : (
        <p key={i} className="rich-p">{b.text}</p>
      )
    )}
  </div>
);

// util de texto
const t = (lang, key, fallback = "") => {
  const value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* ===================================================
   Dados de Home e Imersões
   =================================================== */
const heroImage = "/images/picanha-grelhada.jpg";

const highlights = [
  { label: "Moqueca Baiana", src: "/images/moqueca-baiana.jpg" },
  { label: "Galinhada Caipira", src: "/images/galinhada-caipira.jpg" },
  { label: "Rubacão", src: "/images/rubacao.jpg" },
  { label: "Pão de Queijo da Casa", src: "/images/pao-de-queijo.jpg" },
];

const immersions = [
  { key: "amazonia", src: "/immersive/amazonia.jpg" },
  { key: "cerrado", src: "/immersive/cerrado.jpg" },
  { key: "lencois", src: "/immersive/lencois.jpg" },
  { key: "litoral", src: "/immersive/litoral.jpg" },
  { key: "serra", src: "/immersive/serra.jpg" },
];

/* ===================================================
   MENU — lista base (PT) + traduções EN/AR por item
   =================================================== */
const MENU_ITEMS = [/* --- (todo o seu array atual, sem mudanças) --- */
// PRINCIPAIS
  { id:"vaca-atolada", name:"Vaca Atolada (Ossobuco)", desc:"Ossobuco cozido lentamente, servido com polenta cremosa de milho verde e salada cítrica de rúcula refrescante. Clássico rústico de Minas Gerais que equilibra carne macia, polenta suave e folhas cítricas.", img:"/images/vaca-atolada.jpg", tags:["Halal","Beef","Gluten","Dairy"], cat:"mains", kcal:780 },
  { id:"feijoada-costela", name:"Feijoada de Costela", desc:"Feijoada de costela suculenta servida com farofa de banana da terra, fatias de laranja, vinagrete e arroz temperado. Prato tradicional com equilíbrio perfeito entre sabores salgados, doces e frescos.", img:"/images/feijoada-costela.jpg", tags:["Halal","Beef"], cat:"mains", kcal:950 },
  { id:"picanha", name:"Picanha Grelhada (Prato do Chef)", desc:"Picanha grelhada servida com rubacão da região Nordeste do Brasil. Arroz cremoso com feijão verde que lembra um risoto, finalizado com queijo coalho grelhado e toque de pimenta do reino. Prato assinatura com sabores defumados, cremosos e picantes.", img:"/images/picanha-grelhada.jpg", tags:["Halal","Beef","Dairy"], cat:"mains", kcal:1100 },
  { id:"fraldinha", name:"Fraldinha Inteira para Compartilhar", desc:"Fraldinha inteira grelhada servida com chimichurri, vinagrete e molho de pimenta. Suculenta, com leve defumado e perfeita para compartilhar.", img:"/images/fraldinha-inteira.jpg", tags:["Halal","Beef"], cat:"mains", kcal:1020 },
  { id:"galinhada", name:"Galinhada Caipira", desc:"Galinhada caipira tradicional servida com aioli de cúrcuma. Conforto e aroma com um toque terroso do aioli.", img:"/images/galinhada-caipira.jpg", tags:["Halal"], cat:"mains", kcal:720 },
  { id:"hamburguer-picanha", name:"Hambúrguer de Picanha", desc:"Hambúrguer de picanha grelhado com molho de cogumelos e pimenta do reino verde, queijo derretido, bacon, batatas rústicas e maionese caseira. Sabor marcante e suculento.", img:"/images/hamburguer-de-picanha.jpg", tags:["Halal","Beef","Gluten","Dairy"], cat:"mains", kcal:980 },
  { id:"lasanha-banana", name:"Lasanha de Carne com Banana da Terra", desc:"Lasanha de carne com mozzarella fresca e parmesão, finalizada com banana da terra dourada na manteiga de garrafa. Combinação rica e única de sabores salgados e doces.", img:"/images/lasanha-banana.jpg", tags:["Dairy","Gluten"], cat:"mains", kcal:860 },
  { id:"moqueca", name:"Moqueca Baiana", desc:"Moqueca de peixe com leite de coco, azeite de dendê e pimentões. Servida com arroz branco e farofa. União de mar, calor e alma com doçura tropical e leve picância.", img:"/images/moqueca-baiana.jpg", tags:["Halal","Sea","Dairy"], cat:"mains", kcal:680 },
  { id:"rubacao", name:"Rubacão", desc:"Arroz cremoso com feijão verde e queijo coalho grelhado. Sertão no prato com textura aveludada e sabor de brasa.", img:"/images/rubacao.jpg", tags:["Dairy"], cat:"mains", kcal:520 },
  // ENTRADAS
  { id:"coxinhas-costela", name:"Coxinha de Costela (4 pcs)", desc:"Coxinhas douradas recheadas com costela cozida lentamente e toque cremoso de queijo. Servidas com molho barbecue defumado. Crocantes por fora e suculentas por dentro.", img:"/images/coxinhas-de-costela.jpg", tags:["Gluten","Dairy"], cat:"appetizers", kcal:560 },
  { id:"pasteis", name:"Pastéis Brasileiros (4 pcs)", desc:"Pastéis crocantes recheados com sua escolha de carne, queijo, frango ou palmito. Acompanhados de molho de vinagrete picante. Mordida crocante e suculenta toda vez.", img:"/images/pasteis-brasileiros.jpg", tags:["Gluten"], cat:"appetizers", kcal:600 },
  { id:"pao-alho", name:"Pão de Alho", desc:"Pão crocante recheado com creme de alho e ervas.", img:"/images/pao-de-alho.jpg", tags:["Gluten","Dairy"], cat:"appetizers", kcal:300 },
  { id:"polenta-frita", name:"Polenta Frita", desc:"Palitos de polenta frita crocante por fora e cremosa por dentro.", img:"/images/polenta-frita.jpg", tags:["Gluten","Dairy"], cat:"appetizers", kcal:420 },
  { id:"mandioca-frita", name:"Mandioca Frita", desc:"Palitos dourados de mandioca crocante.", img:"/images/mandioca-frita.jpg", tags:[], cat:"appetizers", kcal:480 },
  { id:"farofa-castanha", name:"Farofa de Castanha/Banana", desc:"Farofa de mandioca tostada com sua escolha: castanha de caju crocante ou banana da terra salteada.", img:"/images/farofa-de-castanha.jpg", tags:["Gluten"], cat:"appetizers", kcal:340 },
  { id:"pao-queijo", name:"Pão de Queijo da Casa", desc:"Tradicional pão de queijo brasileiro, macio e quentinho.", img:"/images/pao-de-queijo.jpg", tags:["Gluten","Dairy"], cat:"appetizers", kcal:220 },
  // SOBREMESAS
  { id:"encanto-coco", name:"Encanto de Coco", desc:"Pudim de coco sedoso assado lentamente com cobertura dourada de caramelo leve. Um toque delicado em um clássico brasileiro.", img:"/images/encanto-de-coco.jpg", tags:["Dessert","Dairy"], cat:"desserts", kcal:430 },
  { id:"doce-roca-gelo", name:"Doce da Roça com Gelo", desc:"Abóbora cremosa cozida lentamente com especiarias da casa. Servida quente com sorvete de creme artesanal. Doce do interior com alma de sobremesa de chef.", img:"/images/doce-da-roca-com-gelo.jpg", tags:["Dessert"], cat:"desserts", kcal:510 },
  { id:"mandioca-real", name:"Mandioca Real", desc:"Bolo rústico de mandioca servido com doce de leite artesanal e farofa crocante de mandioca caramelizada. Tradição e textura em harmonia perfeita.", img:"/images/mandioca-real.jpg", tags:["Dessert","Dairy","Gluten"], cat:"desserts", kcal:560 },
  { id:"beijo-roca", name:"Beijo da Roça", desc:"Beijinho cremoso de coco com castanha de caju sobre mini bolo de milho verde levemente úmido. Um carinho doce do campo.", img:"/images/beijo-roca.jpg", tags:["Dessert","Dairy"], cat:"desserts", kcal:540 },
  // SAZONAL
  { id:"pamonha", name:"Pamonha Doce (Sazonal)", desc:"Clássico de milho verde disponível em épocas de safra.", img:"/images/pamonha.jpg", tags:["Dessert","Seasonal"], cat:"seasonal", kcal:390 },
  // BEBIDAS
  { id:"sol-do-cerrado", name:"Sol do Cerrado", desc:"Manga com maracujá, hortelã e toque cítrico. Refrescante como um pôr do sol no Brasil.", img:"/images/sol-do-cerrado.jpg", tags:["Beverage"], cat:"beverages", kcal:180 },
  { id:"frescor-amazonia", name:"Frescor da Amazônia", desc:"Suco de abacaxi natural batido com hortelã e limão. Tropical e vibrante.", img:"/images/frescor-da-amazonia.jpg", tags:["Beverage"], cat:"beverages", kcal:140 },
  { id:"pe-de-serra", name:"Pé de Serra", desc:"Chá mate gelado com limão, mel e raspas de gengibre. Energia natural.", img:"/images/pe-de-serra.jpg", tags:["Beverage"], cat:"beverages", kcal:95 },
  { id:"caipile", name:"Caipilé Clássico", desc:"A clássica caipirinha sem álcool com limão fresco, gelo e água com gás.", img:"/images/caipile-classico.jpg", tags:["Beverage"], cat:"beverages", kcal:110 },
  { id:"blueberry-coco", name:"Blueberry & Coco Fizz", desc:"Mirtilo batido com leite de coco e toque de baunilha.", img:"/images/blueberry-coco-fizz.jpg", tags:["Beverage"], cat:"beverages", kcal:220 },
  { id:"amazonia-breeze", name:"Amazon Breeze", desc:"Milkshake de cupuaçu com leite e leite condensado. Sobremesa tropical no copo.", img:"/images/amazon-breeze.jpg", tags:["Beverage"], cat:"beverages", kcal:360 },
  { id:"vitamina-cerrado", name:"Vitamina do Cerrado", desc:"Banana com leite de coco e mel. Cremosa e cheia de energia.", img:"/images/vitamina-do-cerrado.jpg", tags:["Beverage"], cat:"beverages", kcal:240 },
  { id:"verao-brasil", name:"Verão Brasil", desc:"Suco de manga, hortelã fresca e água com gás. Leve, elegante e refrescante.", img:"/images/verao-brasil.jpg", tags:["Beverage"], cat:"beverages", kcal:150 },
  { id:"uva-limao", name:"Uva e Limão Gelo", desc:"Suco de uva integral com limão espremido e hortelã.", img:"/images/uva-limao-gelo.jpg", tags:["Beverage"], cat:"beverages", kcal:160 },
  { id:"agua-aromatica", name:"Água Aromática Panela de Barro", desc:"Água filtrada com laranja, pepino, limão siciliano e hortelã. Servida bem gelada.", img:"/images/placeholder.jpg", tags:["Beverage"], cat:"beverages", kcal:12 },
];

/* ===================================================
   Traduções por item (mantidas)
   =================================================== */
const MENU_I18N = { /* --- (o bloco que você já tinha; mantive igual) --- */
  en: {
    "vaca-atolada": { name: "Vaca Atolada (Ossobuco)", desc: "Slow cooked ossobuco served with creamy green corn polenta and a refreshing citrus arugula salad. A rustic Minas Gerais classic balancing tender meat, smooth polenta and zesty greens." },
    "feijoada-costela": { name: "Beef Rib Feijoada", desc: "Rich beef rib feijoada served with banana farofa, orange slices, tangy vinaigrette and seasoned rice. A traditional dish with a perfect blend of savory, sweet and fresh flavors." },
    picanha: { name: "Grilled Picanha (Chef’s Special)", desc: "Char grilled picanha served with rubacão from Brazil’s Northeast. A creamy rice and green bean dish that feels like a risotto, finished with grilled queijo coalho and a hint of black pepper. Signature plate with smoky, creamy and spicy notes." },
    fraldinha: { name: "Whole Flank Steak for Sharing", desc: "Whole grilled flank steak served with chimichurri, vinaigrette and pepper sauce. Juicy, lightly smoky and perfect for sharing." },
    galinhada: { name: "Galinhada Caipira", desc: "Traditional chicken and rice stew served with turmeric aioli. Comforting and aromatic with a gentle earthy touch." },
    "hamburguer-picanha": { name: "Picanha Burger", desc: "Grilled picanha burger with mushroom and green peppercorn sauce, melted cheese, bacon, rustic fries and homemade mayo. Bold and juicy." },
    "lasanha-banana": { name: "Beef Lasagna with Banana da Terra", desc: "Beef lasagna layered with fresh mozzarella and parmesan, finished with crispy fried banana da terra in butter. A rich and unique blend of savory and sweet." },
    moqueca: { name: "Bahian Moqueca", desc: "Bahian fish stew with coconut milk, dendê oil and peppers. Served with rice and farofa. A fusion of sea, heat and soul with tropical sweetness and a touch of spice." },
    rubacao: { name: "Rubacão", desc: "Creamy rice and green beans with grilled queijo coalho. Countryside comfort with a velvety texture and charcoal kiss." },
    "coxinhas-costela": { name: "Rib Coxinhas (4 pcs)", desc: "Golden croquettes filled with slow cooked rib meat and a creamy touch of cheese. Served with smoky barbecue dip. Crunchy outside and juicy inside." },
    pasteis: { name: "Brazilian Pastéis (4 pcs)", desc: "Crispy stuffed pastries with your choice of beef, cheese, chicken or hearts of palm. Served with spicy vinegar sauce. A crunchy and juicy bite every time." },
    "pao-alho": { name: "Garlic Bread", desc: "Crunchy bread filled with garlic cream and herbs." },
    "polenta-frita": { name: "Fried Polenta", desc: "Crispy fried cornmeal sticks, creamy inside." },
    "mandioca-frita": { name: "Fried Cassava", desc: "Golden and crispy cassava sticks." },
    "farofa-castanha": { name: "Farofa with Cashew or Banana", desc: "Toasted cassava flour with your choice of crunchy cashew nuts or sautéed sweet plantain." },
    "pao-queijo": { name: "House Pão de Queijo", desc: "Traditional Brazilian cheese bread, soft and warm." },
    "encanto-coco": { name: "Encanto de Coco", desc: "Silky coconut flan, slow baked to perfection, topped with golden light caramel. A delicate twist on a beloved Brazilian classic." },
    "doce-roca-gelo": { name: "Farm Sweet on Ice", desc: "Creamy spiced pumpkin compote served warm with homemade vanilla ice cream. A countryside dessert with a gourmet soul." },
    "mandioca-real": { name: "Mandioca Real", desc: "Rustic cassava cake served with artisan dulce de leche and caramelized crispy cassava crumble. Tradition meets texture in perfect harmony." },
    "beijo-roca": { name: "Beijo da Roça", desc: "Creamy coconut cashew truffle served over moist green corn cake. A sweet countryside kiss." },
    pamonha: { name: "Sweet Corn Pamonha (Seasonal)", desc: "Green corn classic available in harvest season." },
    "sol-do-cerrado": { name: "Cerrado Sunset", desc: "Mango with passion fruit, mint and a citrus touch. As refreshing as a Brazilian sunset." },
    "frescor-amazonia": { name: "Amazon Fresh", desc: "Fresh pineapple juice blended with mint and lime. Tropical and vibrant." },
    "pe-de-serra": { name: "Pé de Serra", desc: "Iced yerba mate tea with lime, honey and ginger zest. Natural energy." },
    caipile: { name: "Classic Caipilé", desc: "The classic non alcoholic caipirinha with fresh lime, ice and sparkling water." },
    "blueberry-coco": { name: "Blueberry & Coco Fizz", desc: "Blueberries blended with coconut milk and a hint of vanilla." },
    "amazonia-breeze": { name: "Amazon Breeze", desc: "Creamy cupuaçu shake with milk and condensed milk. A tropical dessert in a glass." },
    "vitamina-cerrado": { name: "Cerrado Smoothie", desc: "Banana with coconut milk and honey. Creamy and energizing." },
    "verao-brasil": { name: "Brazilian Summer", desc: "Mango juice, fresh mint and sparkling water. Light, elegant and refreshing." },
    "uva-limao": { name: "Grape and Lime on Ice", desc: "Pure grape juice with squeezed lime and mint." },
    "agua-aromatica": { name: "Aromatic Water", desc: "Filtered water with orange, cucumber, lemon and mint. Served chilled." }
  },
  ar: {
    "vaca-atolada": { name: "فاكا أتولادا (عظم الساق)", desc: "عظم العجل المطهو ببطء يقدم مع بولينتا الذرة الخضراء الكريمية وسلطة جرجير حمضية منعشة." },
    "feijoada-costela": { name: "فيجوادا ضلع بقر", desc: "فيجوادا غنية من ضلع اللحم البقري تقدم مع فاروفا الموز وشرائح البرتقال وفيناغريت وأرز متبل." },
    picanha: { name: "بيكانيا مشوية (طبق الشيف)", desc: "بيكانيا مشوية تقدم مع روباكَاو من شمال شرق البرازيل." },
    fraldinha: { name: "فلانك كامل للمشاركة", desc: "قطعة فلانك كاملة مشوية مع تشيمي تشوري وفيناغريت وصلصة الفلفل." },
    galinhada: { name: "جالينهاذا ريفية", desc: "طبق دجاج مع أرز تقليدي يقدم مع أيولي الكركم." },
    "hamburguer-picanha": { name: "برغر بيكانيا", desc: "برغر بيكانيا مشوي مع صلصة الفطر والفلفل الأخضر وجبن ذائب وبطاطا ريفية." },
    "lasanha-banana": { name: "لازانيا لحم مع موز", desc: "لازانيا لحم مع موتزاريلا طازجة وبارميزان ولمسة من الموز المقلي في الزبدة." },
    moqueca: { name: "موكيكا باهية", desc: "يخنة سمك باهية مع حليب جوز الهند وزيت الدندِه وفليفلة." },
    rubacao: { name: "روباكاو", desc: "أرز كريمي مع فاصولياء خضراء وجبن كوالهو مشوي." },
    "coxinhas-costela": { name: "كوكسينيا ضلع (٤ قطع)", desc: "كرات مقرمشة محشوة بلحم ضلع مطهو ببطء ولمسة كريمية من الجبن." },
    pasteis: { name: "فطائر باستيل برازيلية (٤ قطع)", desc: "فطائر مقرمشة محشوة باختيارك من اللحم أو الجبن أو الدجاج أو قلوب النخيل." },
    "pao-alho": { name: "خبز بالثوم", desc: "خبز مقرمش محشو بكريمة الثوم والأعشاب." },
    "polenta-frita": { name: "بولينتا مقلية", desc: "أصابع دقيق الذرة المقلية مقرمشة من الخارج وكريمية من الداخل." },
    "mandioca-frita": { name: "كسافا مقلية", desc: "عيدان كسافا ذهبية ومقرمشة." },
    "farofa-castanha": { name: "فاروفا بالكاجو أو الموز", desc: "دقيق كسافا محمص مع كاجو أو موز الجنة." },
    "pao-queijo": { name: "خبز جبن برازيلي", desc: "خبز جبن برازيلي تقليدي طري ودافئ." },
    "encanto-coco": { name: "إنكانتو دي كوكو", desc: "فلان جوز الهند الحريري مع كراميل ذهبي خفيف." },
    "doce-roca-gelo": { name: "حلوى الريف مع المثلج", desc: "كمبوت قرع كريمي يقدم دافئًا مع آيس كريم فانيلا." },
    "mandioca-real": { name: "مانديوكا ريال", desc: "كيك كسافا ريفي مع دولسي دي ليتشي وفتات كسافا مكرمل." },
    "beijo-roca": { name: "بيجو دا هوصا", desc: "ترافل جوز هند وكاجو فوق كيك ذرة خضراء." },
    pamonha: { name: "بامونيا حلوة (موسمية)", desc: "كلاسيكية الذرة الخضراء في موسم الحصاد." },
    "sol-do-cerrado": { name: "شمس السيرادو", desc: "مانجا مع باشن فروت ونعناع ولمسة حمضية." },
    "frescor-amazonia": { name: "نضارة الأمازون", desc: "عصير أناناس طازج ممزوج بالنعناع والليمون." },
    "pe-de-serra": { name: "پي دي سيرا", desc: "شاي يِربا ماتيه مبرد مع ليمون وعسل وزنجبيل." },
    caipile: { name: "كايبيلي كلاسيكي", desc: "كايبيرينها بلا كحول مع ليمون طازج وماء فوار." },
    "blueberry-coco": { name: "بلو بيري مع جوز الهند", desc: "توت أزرق ممزوج بحليب جوز الهند ولمسة فانيلا." },
    "amazonia-breeze": { name: "نسيم الأمازون", desc: "ميلك شيك كوبواسو كريمي." },
    "vitamina-cerrado": { name: "فيتامين السيرادو", desc: "موز مع حليب جوز الهند والعسل." },
    "verao-brasil": { name: "صيف البرازيل", desc: "عصير مانجا مع نعناع وماء فوار." },
    "uva-limao": { name: "عنب وليمون على الثلج", desc: "عصير عنب صافي مع ليمون ونعناع." },
    "agua-aromatica": { name: "ماء عطري", desc: "ماء مفلتر مع برتقال وخيار وليمون ونعناع." }
  }
};

const menuT = (lang, id, field, fallback) => {
  const pack = MENU_I18N[lang] && MENU_I18N[lang][id];
  const val = pack ? pack[field] : undefined;
  return typeof val === "string" ? val : fallback;
};

/* =============================
   Navegação por hash simples
   ============================= */
const useHashRoute = () => {
  const [route, setRoute] = useState(
    typeof window !== "undefined" ? window.location.hash.replace("#/", "") || "home" : "home"
  );
  useEffect(() => {
    const onChange = () => setRoute(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return [route, (r) => (window.location.hash = `#/${r}`)];
};

/* =============================
   Componentes básicos
   ============================= */
const SectionTitle = ({ children }) => <h2 className="title">{children}</h2>;
const Card = ({ children, style }) => <div className="card" style={style}>{children}</div>;
const Img = ({ src, alt, ratio = "16/9", round = true }) => (
  <div className={`imgwrap ${round ? "round" : ""}`} style={{ aspectRatio: ratio }}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

const Carousel = ({ items, renderItem, auto = 5000 }) => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  useEffect(() => { if (!auto) return; const id = setInterval(next, auto); return () => clearInterval(id); }, [auto, items.length]);
  return (
    <div className="carousel">
      <button className="cbtn left" onClick={prev} aria-label="prev">‹</button>
      <div className="cinner">{renderItem(items[i], i)}</div>
      <button className="cbtn right" onClick={next} aria-label="next">›</button>
    </div>
  );
};

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="modalbg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modalhead">
          <div className="modaltitle">{title}</div>
          <button className="close" onClick={onClose} aria-label="close">×</button>
        </div>
        <div className="modalbody">{children}</div>
      </div>
    </div>
  );
};

/* =============================
   Drawer (menu lateral)
   ============================= */
const Drawer = ({ open, onClose, lang, setLang }) => {
  const go = (to) => { window.location.hash = `#/${to}`; onClose(); };
  return (
    <div className={`drawerWrap ${open ? "open" : ""}`} onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawerhead">
          <div className="dbrand">
            <img src="/logo.png" alt="logo" />
            <span>Panela de Barro</span>
          </div>
          <button className="dclose" onClick={onClose} aria-label="close">×</button>
        </div>

        <nav className="dlinks">
          <button onClick={() => go("about")}>{t(lang,"nav.about")}</button>
          <button onClick={() => go("menu")}>{t(lang,"nav.menu")}</button>
          <button onClick={() => go("gallery")}>{t(lang,"nav.gallery")}</button>
          <button onClick={() => go("wood")}>{t(lang,"nav.woodfire")}</button>
          <button onClick={() => go("location")}>{t(lang,"nav.location")}</button>
          <button onClick={() => go("support")}>{t(lang,"nav.support")}</button>
        </nav>

        <div className="dsection">
          <div className="dtitle">{t(lang,"drawer.languages","Idiomas")}</div>
          <div className="dlangs">
            {LANGS.map((l) => (
              <button key={l} className={`chip ${l===lang?"active":""}`} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>

        <div className="dsection">
          <div className="dtitle">{t(lang,"drawer.social","Redes sociais")}</div>
          <div className="dsocial">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="TikTok">TikTok</a>
          </div>
        </div>
      </aside>
    </div>
  );
};

/* =============================
   Páginas
   ============================= */
const Home = ({ lang }) => (
  <>
    <div className="hero">
      <Img src={heroImage} alt="Picanha" ratio="21/9" />
      <div className="herooverlay" />
      <div className="heroinfo">
        <h1>{t(lang,"hero.title","Sabores brasileiros, calor de família")}</h1>
        <p className="sub">{t(lang,"hero.subtitle","Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.")}</p>
        <p className="soon">{t(lang,"hero.soon","Inauguração em Novembro — reservas online em breve.")}</p>
        <a className="btn" href="#/menu">{t(lang,"hero.cta","Ver Menu")}</a>
      </div>
    </div>

    <SectionTitle>{t(lang,"sections.menuHighlights","Destaques do Menu")}</SectionTitle>
    <Carousel
      items={highlights}
      renderItem={(item) => (
        <Card>
          <Img src={item.src} alt={item.label} ratio="16/9" />
          <div className="caption">{item.label}</div>
        </Card>
      )}
      auto={4500}
    />

    <SectionTitle>{t(lang,"sections.immersive","Imersões do Brasil")}</SectionTitle>
    <Carousel
      items={immersions}
      renderItem={(item) => (
        <Card>
          <Img src={item.src} alt={item.key} ratio="16/9" />
          <div className="caption">{t(lang,`immersiveLabels.${item.key}`, item.key)}</div>
        </Card>
      )}
      auto={5200}
    />
  </>
);

const Menu = ({ lang }) => {
  const tabs = useMemo(() => ([
    { key: "all", label: t(lang,"menu.tabs.all","Todos") },
    { key: "mains", label: t(lang,"menu.tabs.mains","Pratos") },
    { key: "appetizers", label: t(lang,"menu.tabs.appetizers","Entradas") },
    { key: "seasonal", label: t(lang,"menu.tabs.seasonal","Sazonais") },
    { key: "beverages", label: t(lang,"menu.tabs.beverages","Bebidas") },
    { key: "desserts", label: t(lang,"menu.tabs.desserts","Sobremesas") },
  ]), [lang]);

  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null);

  const filtered = tab === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.cat === tab);

  return (
    <>
      <SectionTitle>{t(lang,"menu.title","Menu")}</SectionTitle>

      {/* Abas sticky */}
      <div className="tabs sticky">
        {tabs.map(tb => (
          <button key={tb.key} className={`chip ${tab===tb.key?"active":""}`} onClick={() => setTab(tb.key)}>
            {tb.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((item) => {
          const name = menuT(lang, item.id, "name", item.name);
          const desc = menuT(lang, item.id, "desc", item.desc);
          return (
            <Card key={item.id} style={{ paddingBottom: 12 }}>
              <button className="cardbtn" onClick={() => setOpen({ ...item, name, desc })}>
                <Img src={item.img} alt={name} ratio="16/9" />
                <div className="cardtitle">{name}</div>
                <div className="carddesc">{desc}</div>
                <div className="tags">
                  {item.tags.map((tg) => (
                    <span className="tag" key={tg}>{t(lang,`menu.tags.${tg}`,tg)}</span>
                  ))}
                </div>
              </button>
            </Card>
          );
        })}
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={open ? open.name : ""}>
        {open && (
          <>
            <Img src={open.img} alt={open.name} ratio="16/9" />
            <p className="mdesc">{open.desc}</p>
            <div className="tags" style={{marginTop:8}}>
              {open.tags.map((tg) => (
                <span className="tag" key={tg}>{t(lang,`menu.tags.${tg}`,tg)}</span>
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

const About = ({ lang }) => {
  const d = dict[lang].about;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>

      {/* se houver blocos ricos, usa; senão cai no p1/p2/p3 que você já tinha */}
      {d.rich ? (
        renderRich(d.rich.blocks)
      ) : (
        <>
          {d.p1 && <p className="p">{d.p1}</p>}
          {d.p2 && <p className="p">{d.p2}</p>}
          {d.p3 && <p className="p">{d.p3}</p>}
        </>
      )}

      <h3 className="subtitle">{d.family}</h3>
      <div className="familygrid">
        {Object.values(d.people).map((p) => (
          <Card key={p.name}>
            <Img src={p.img} alt={p.name} ratio="1/1" />
            <div className="cardtitle">{p.name}</div>
            <div className="carddesc">{p.text}</div>
          </Card>
        ))}
      </div>

      <div className="grid2">
        {d.heritageImgs?.map((h, i) => (
          <Card key={i}>
            <Img src={h.src} alt={h.caption} ratio="16/9" />
            <div className="caption">{h.caption}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

const WoodFire = ({ lang }) => {
  const d = dict[lang].wood;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <p className="p">{d.p1}</p>
      <p className="p">{d.p2}</p>
      <div className="grid3">
        {d.imgs.map((src, i) => (
          <Card key={i}><Img src={src} alt={`wood-${i}`} ratio="1/1" /></Card>
        ))}
      </div>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

const Gallery = ({ lang }) => {
  const photos = MENU_ITEMS.map(i => ({ src: i.img, alt: i.name }));
  return (
    <>
      <SectionTitle>{t(lang,"gallery.title","Galeria")}</SectionTitle>
      <div className="gallery">
        {photos.map((p, i) => (
          <Card key={i}><Img src={p.src} alt={p.alt} ratio="1/1" /></Card>
        ))}
      </div>
    </>
  );
};

const Location = ({ lang }) => {
  const d = dict[lang].location;
  const mapsQ = encodeURIComponent(d.addr);
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <Card>
        <div className="mapwrap">
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="p">
          {d.addr} —{" "}
          <a className="link" href={`https://maps.google.com/?q=${mapsQ}`} target="_blank" rel="noreferrer">
            {d.map}
          </a>
        </p>
      </Card>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

const Support = ({ lang }) => {
  const d = dict[lang].support;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <ul className="list">
        {d.items.map((it, i) => (<li key={i}>{it}</li>))}
      </ul>
      <h3 className="subtitle">{d.contactTitle}</h3>
      <p className="p">WhatsApp: <a className="link" href="https://wa.me/97430475279">+{d.phone}</a></p>
      <p className="p">Email: <a className="link" href="mailto:restaurant@paneladebarroqatar.com">{d.email}</a></p>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

/* =============================
   App (nav, splash, rotas)
   ============================= */
const App = () => {
  const [route] = useHashRoute();
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });
  const [splash, setSplash] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => { const t = setTimeout(() => setSplash(false), 1100); return () => clearTimeout(t); }, []);
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  useEffect(() => { setOpenDrawer(false); }, [route]); // fecha drawer ao mudar rota

  // mede a altura real do header e salva em --navh (corrige sticky em PT/EN no mobile)
  useEffect(() => {
    const setNavHeight = () => {
      const el = document.querySelector('.nav');
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--navh', `${h}px`);
    };
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, [lang]);

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Styles />
      {splash && <div className="splash"><img src="/logo.png" alt="Panela de Barro" /></div>}

      <header className="nav">
        <button className="hamb" onClick={() => setOpenDrawer(true)} aria-label="menu">☰</button>
        <a className="brand" href="#/home">
          <img src="/logo.png" alt="logo" />
          <span>{t(lang,"brand","Panela de Barro")}</span>
        </a>
        <nav className="links">
          <a href="#/about">{t(lang,"nav.about","Sobre")}</a>
          <a href="#/menu">{t(lang,"nav.menu","Menu")}</a>
          <a href="#/gallery">{t(lang,"nav.gallery","Galeria")}</a>
          <a href="#/wood">{t(lang,"nav.woodfire","Fogão a Lenha")}</a>
          <a href="#/location">{t(lang,"nav.location","Localização")}</a>
          <a href="#/support">{t(lang,"nav.support","Suporte")}</a>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`chip ${l===lang?"active":""}`}>{l.toUpperCase()}</button>
          ))}
        </div>
      </header>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} lang={lang} setLang={setLang} />

      <main className="container">
        {route === "home" && <Home lang={lang} />}
        {route === "about" && <About lang={lang} />}
        {route === "menu" && <Menu lang={lang} />}
        {route === "gallery" && <Gallery lang={lang} />}
        {route === "wood" && <WoodFire lang={lang} />}
        {route === "location" && <Location lang={lang} />}
        {route === "support" && <Support lang={lang} />}
      </main>

      <footer className="foot">© 2025 Panela de Barro</footer>
    </div>
  );
};

/* =============================
   CSS embutido (responsivo)
   ============================= */
const Styles = () => (
  <style>{`
  :root{
    --bg:#f0e2cf; --paper:#f6eadb; --ink:#2d241c; --muted:#7b6a5c;
    --pill:#b8644e; --pill-ghost:#e7d6c5; --shadow: 0 8px 24px rgba(0,0,0,.08);
    --radius:18px; --navh:64px;
    --safeTop: env(safe-area-inset-top, 0px);
  }
  *{box-sizing:border-box}
  body,html,#root{height:100%}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Noto Sans",sans-serif}
  a{color:var(--pill)}
  .app{min-height:100%}

  /* Nav */
  .nav{
    position:sticky; top:0; z-index:30;
    background:rgba(246,234,219,.88);
    backdrop-filter:saturate(140%) blur(8px);
    display:flex; gap:16px; align-items:center; justify-content:space-between;
    padding: calc(8px + var(--safeTop)) 14px 8px 14px; /* respeita a área segura do iPhone */
    border-bottom:1px solid #e5d5c2; 
    min-height:64px; /* o valor real é medido em runtime e aplicado em --navh */
  }
  .hamb{display:none;border:0;background:var(--pill-ghost);width:40px;height:36px;border-radius:10px;font-size:20px;cursor:pointer}
  .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-weight:800}
  .brand img{width:28px;height:28px}
  .brand span{font-size:20px;letter-spacing:.2px;white-space:nowrap} /* "Panela de Barro" sempre em uma linha */
  .links a{margin:0 10px;text-decoration:none;color:var(--ink)}
  .langs .chip{margin-left:6px}

  /* Desktop vs mobile */
  @media (max-width:920px){
    .links{display:none !important;} /* esconde links no celular */
    .hamb{display:inline-block}

    /* Centraliza a marca no cabeçalho, logo maior */
    .brand{flex:1;min-width:0;justify-content:center}
    .brand img{width:34px;height:34px}
    .brand span{font-size:clamp(18px,5.2vw,22px);white-space:nowrap}

    /* Idiomas na direita em coluna, menores */
    .langs{display:flex;flex-direction:column;gap:6px;align-items:flex-end;margin-left:6px}
    .langs .chip{padding:6px 10px;font-size:12px;margin:0}
  }

  .container{max-width:1100px;margin:0 auto;padding:18px}

  .title{font-size:32px;margin:26px 6px}
  .subtitle{margin:10px 6px 12px 6px}

  .card{background:var(--paper);border-radius:var(--radius);box-shadow:var(--shadow);padding:10px}
  .imgwrap{width:100%;overflow:hidden}
  .imgwrap.round{border-radius:var(--radius)}
  .imgwrap img{width:100%;height:100%;object-fit:cover;display:block}

  .caption{padding:8px 10px 10px 10px;color:var(--ink);font-weight:600}
  .p{margin:8px 6px 12px 6px;line-height:1.65;color:var(--ink)}
  .list{margin:0 6px 18px 28px}
  .link{color:var(--pill);text-decoration:underline}

  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
  .grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
  .grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
  @media (max-width:720px){ .grid2{grid-template-columns:1fr} .grid3{grid-template-columns:1fr 1fr} }
  .familygrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}

  .tabs{display:flex;flex-wrap:wrap;gap:10px;margin:6px}
  .tabs.sticky{
    position:-webkit-sticky; /* iOS Safari */
    position:sticky;
    top: calc(var(--safeTop) + var(--navh) + 6px); /* usa altura real medida no JS */
    z-index:20;
    background:linear-gradient(#f6eadb,#f6eadb);
    padding:8px 6px;border-radius:14px;box-shadow:var(--shadow)
  }
  .chip{border:0;background:var(--pill-ghost);color:var(--ink);padding:8px 14px;border-radius:999px;cursor:pointer}
  .chip.active{background:var(--pill);color:#fff}

  .cardbtn{all:unset;display:block;cursor:pointer}
  .cardtitle{font-weight:800;font-size:18px;margin:8px 6px 4px}
  .carddesc{color:var(--muted);margin:0 6px 8px}
  .tags{display:flex;gap:6px;flex-wrap:wrap;margin:0 6px 6px}
  .tag{background:#eee;border-radius:999px;padding:4px 8px;font-size:12px;color:#5a4b3f}

  /* Hero */
  .hero{position:relative}
  .hero .imgwrap{border-radius:var(--radius)}
  .herooverlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.25),rgba(0,0,0,.45));border-radius:var(--radius)}
  .heroinfo{position:absolute;inset:auto 18px 18px 18px;color:#fff}
  .heroinfo h1{font-size:clamp(22px,3.6vw,40px);margin:0 0 8px 0}
  .heroinfo .sub{margin:0 0 6px 0;max-width:820px}
  .heroinfo .soon{opacity:.95;margin:0 0 10px 0}
  .btn{display:inline-block;background:var(--pill);color:#fff;text-decoration:none;padding:12px 18px;border-radius:14px;font-weight:700}

  /* HERO mobile legível */
  @media (max-width: 480px) {
    .hero .imgwrap { height: 58vh !important; aspect-ratio: auto !important; }
    .hero img { object-fit: cover; object-position: center; }
    .herooverlay {
      background: linear-gradient(180deg, rgba(0,0,0,0.05) 12%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.62) 100%);
    }
    .heroinfo { left: 16px; right: 16px; bottom: 18px; top: auto; transform: none; gap: 8px; padding: 0; max-width: 100%; }
    .heroinfo h1 { font-size: clamp(20px, 6vw, 26px); line-height: 1.2; margin: 0; }
    .heroinfo .sub { font-size: clamp(13px, 3.8vw, 15px); line-height: 1.35; margin: 0; }
    .heroinfo .soon { font-size: clamp(12px, 3.5vw, 14px); line-height: 1.35; }
    .heroinfo .btn { padding: 10px 16px; font-size: 14px; border-radius: 14px; }
  }

  /* Carousel */
  .carousel{position:relative;margin:12px 6px}
  .cinner{overflow:hidden}
  .cbtn{position:absolute;top:50%;transform:translateY(-50%);border:0;background:rgba(0,0,0,.35);color:#fff;width:40px;height:40px;border-radius:50%;cursor:pointer}
  .cbtn.left{left:8px}.cbtn.right{right:8px}

  /* Modal */
  .modalbg{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:18px;z-index:50}
  .modal{background:#fff;color:#111;border-radius:18px;max-width:820px;width:100%;box-shadow:var(--shadow);max-height:85vh;display:flex;flex-direction:column}
  .modalhead{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #eee}
  .modaltitle{font-weight:800}
  .close{border:0;background:#eee;border-radius:10px;width:36px;height:32px;cursor:pointer}
  .modalbody{padding:12px 14px;overflow:auto}
  .modalbody .imgwrap{margin-bottom:10px}
  .mdesc{margin:6px 2px 10px 2px}

  /* Gallery */
  .gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}

  /* Map */
  .mapwrap{position:relative;width:100%;aspect-ratio:16/9;border-radius:14px;overflow:hidden}
  .mapwrap iframe{position:absolute;inset:0;border:0;width:100%;height:100%}

  .back{display:inline-block;margin:14px 6px 0;color:var(--pill);text-decoration:none;font-weight:700}

  .foot{padding:30px 18px;color:#7a6b5c;text-align:center}

  /* Splash (logo ao abrir) */
  .splash{position:fixed;inset:0;background:var(--bg);display:flex;align-items:center;justify-content:center;z-index:100}
  .splash img{width:72px;height:72px;filter:drop-shadow(0 6px 18px rgba(0,0,0,.18))}

  /* Drawer */
  .drawerWrap{position:fixed;inset:0;background:rgba(0,0,0,.25);opacity:0;pointer-events:none;transition:.2s;z-index:60}
  .drawerWrap.open{opacity:1;pointer-events:auto}
  .drawer{position:absolute;top:0;bottom:0;left:0;width:84%;max-width:360px;background:var(--paper);box-shadow:var(--shadow);transform:translateX(-100%);transition:.22s;border-top-right-radius:16px;border-bottom-right-radius:16px;display:flex;flex-direction:column}
  .drawerWrap.open .drawer{transform:translateX(0)}
  .drawerhead{display:flex;align-items:center;justify-content:space-between;padding:14px;border-bottom:1px solid #e6d7c8}
  .dbrand{display:flex;align-items:center;gap:10px;font-weight:800}
  .dbrand img{width:28px;height:28px}
  .dclose{border:0;background:#eee;border-radius:10px;width:36px;height:32px;cursor:pointer}
  .dlinks{display:flex;flex-direction:column;padding:10px}
  .dlinks button{all:unset;padding:12px 10px;border-radius:10px;cursor:pointer}
  .dlinks button:hover{background:#efdfcf}
  .dsection{padding:10px}
  .dtitle{font-weight:800;margin:8px 0}
  .dlangs{display:flex;gap:8px;flex-wrap:wrap}
  .dsocial{display:flex;gap:12px}
  `}</style>
);

/* =============================
   export
   ============================= */
export default App;
