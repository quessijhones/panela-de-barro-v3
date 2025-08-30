// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";

/* =========================================
   Idiomas (PT como padrão) + dicionário UI
   ========================================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

/* ============================================================
   TEXTOS ATUALIZADOS: ABOUT (SOBRE) e WOOD-FIRE (3 idiomas)
   ============================================================ */
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

    /* ======== SOBRE (PT) — texto completo + imagens ======== */
    about: {
      title: "Sobre",
      rich: {
        blocks: [
          { type: "p", text: "Panela de Barro: O Útero da Culinária Brasileira" },
          { type: "p", text: "Mais do que um simples recipiente, a panela de barro é um símbolo arquetípico da alimentação brasileira. Sua história se confunde com a própria formação do nosso povo, sendo uma das mais antigas e sagradas tecnologias culinárias das Américas." },
          { type: "p", text: "Antes da chegada dos europeus, os povos indígenas já dominavam a arte da cerâmica, moldando com as mãos e cozendo no fogo panelas, potes e alguidares que eram o centro de sua vida comunitária. Nelas se preparava peixe moqueado, beiju e caiçuma. Cada panela carregava a identidade e o saber de seu povo." },
          { type: "img", src: "/heritage/panela-mao.jpg", alt: "Panela de barro artesanal nas mãos", caption: "Feita à mão, de geração em geração", align: "right" },
          { type: "p", text: "Com a colonização, a panela de barro foi adotada e adaptada. Nas senzalas, tornou-se instrumento de resistência e criatividade. No seu bojo quente nasceram pilares da nossa gastronomia: feijão guisado, angu, ensopados. O barro cozinha devagar e por igual, preserva sucos e nutrientes, cede minerais e imprime um sabor terroso — o “sabor de roça”." },
          { type: "img", src: "/heritage/panela-1.jpg", alt: "Panelas de barro", caption: "Panelas que respiram e guardam memória", align: "left" },
          { type: "p", text: "A panela de barro é, portanto, o útero onde se gestaram sabores autênticos do Brasil. Representa simplicidade, tradição, conexão com a terra e a generosidade de partilhar." },
          { type: "p", text: "Inspirados por essa herança, escolhemos o nome Panela de Barro para nossa casa no Qatar. Não é só o utensílio: é uma declaração de intenções." },
          { type: "p", text: "Queremos que cada cliente sinta o alimento servido dessas panelas quentes que ecoam séculos de história. Cozinhamos com dedicação e amor para capturar essa alma — rústica, autêntica, acolhedora." },
          { type: "p", text: "Aqui servimos mais que uma refeição: servimos memória. Bem-vindo ao sabor aconchegante e verdadeiro que só comida feita com alma e história pode oferecer." },
        ],
      },
      family: "Nossa família",
      people: {
        quessi: {
          name: "Quessi — Proprietário",
          text: "Anfitrião atento e apaixonado pelas raízes brasileiras. Cuida do acolhimento e da experiência do convidado, mantendo vivo o propósito da casa: cozinhar com alma, honrar a memória e servir com carinho.",
          img: "/heritage/chef-quessi.jpg",
        },
        alex: {
          name: "Alex — Head Chef",
          text: "Comando de fogo preciso e sensibilidade no tempero. Une técnica profissional e memória afetiva para entregar ponto perfeito, aromas de brasa e respeito aos ingredientes.",
          img: "/heritage/chef-alex.jpg",
        },
        cleusa: {
          name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas",
          text: "A raiz do nosso sabor: cadernos de receita, histórias de roça e o cuidado paciente de quem sabe que comida boa nasce do tempo certo.",
          img: "/heritage/cleusa.jpg",
        },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" },
      ],
    },

    /* ======== FOGÃO A LENHA (PT) — texto completo + imagens ======== */
    wood: {
      title: "Fogão a Lenha",
      rich: {
        blocks: [
          { type: "p", text: "O Fogão a Lenha: A Alma do Brasil em Chamas e Argila" },
          { type: "p", text: "A história do fogão a lenha no Brasil acompanha a formação do nosso povo. Chegou com os portugueses, encontrou saberes indígenas e africanos, e se tornou único." },
          { type: "p", text: "Povos indígenas dominaram o fogo e as madeiras; africanos escravizados transformaram cortes simples em pratos grandiosos. A feijoada — fervilhando em grandes panelas — é filha dessa alquimia." },
          { type: "img", src: "/images/feijoada-costela.jpg", alt: "Feijoada de Costela", caption: "Feijoada de Costela Bovina", align: "right" },
          { type: "p", text: "O fogão a lenha virou coração da casa. Calor irregular que exige paciência e sensibilidade; o defumado natural que não se adiciona — nasce da brasa." },
          { type: "img", src: "/heritage/fogao-1.jpg", alt: "Fogão a lenha", caption: "Brasa mansa, calor constante", align: "left" },
          { type: "p", text: "Transplantamos essa alma para o Qatar. Nosso fogão, visível na cozinha aberta, é artista principal: cada prato é uma carta de amor à tradição." },
          { type: "p", text: "Feijoada de Costela Bovina: costela lentamente assada na lenha, que dá profundidade ao caldo do feijão preto — robusto e verdadeiro." },
          { type: "img", src: "/images/feijoada-costela.jpg", alt: "Feijoada servida na casa", caption: "Caldo profundo e sabor robusto", align: "center" },
          { type: "p", text: "Vaca Atolada: mandioca cozinha em brasa branda, absorvendo o sabor da carne macia — doçura e força em harmonia." },
          { type: "img", src: "/images/vaca-atolada.jpg", alt: "Vaca Atolada", caption: "Doçura da mandioca, força da carne", align: "right" },
          { type: "p", text: "Farofa de Banana da Terra: lâminas douradas se unem à farinha torrada no calor da lenha — contraste de textura e aroma inconfundível." },
          { type: "img", src: "/images/farofa-de-castanha.jpg", alt: "Farofa da casa", caption: "Imagem ilustrativa da farofa servida", align: "left" },
          { type: "p", text: "Nossa cozinha aberta convida você a testemunhar esse ritual. Deixe o aroma de lenha e comida caseira transportar seus sentidos para o interior do Brasil." },
          { type: "img", src: "/heritage/fogao-2.jpg", alt: "Detalhe do fogão a lenha", caption: "Chama viva, tradição viva", align: "center" },
        ],
      },
      p1: "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência.",
      p2: "Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
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

  /* ======== EN (com ABOUT/WOOD ricos) ======== */
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
    about: {
      title: "About",
      rich: {
        blocks: [
          { type: "p", text: "Panela de Barro: The womb of Brazilian cooking." },
          { type: "p", text: "More than a vessel, the clay pot is an archetype in Brazilian food culture. It has accompanied our people for centuries as one of the oldest culinary technologies in the Americas." },
          { type: "p", text: "Long before Europeans arrived, Indigenous peoples hand-shaped and fired clay pots that were the center of community life — for smoking fish, making beiju, fermenting caiçuma. Each pot carried identity and knowledge." },
          { type: "img", src: "/heritage/panela-mao.jpg", alt: "Handmade clay pot", caption: "Hand to hand, generation to generation", align: "right" },
          { type: "p", text: "With colonization, clay pots were adopted and re-imagined. In the slave quarters they became tools of resistance and creativity. Clay cooks gently and evenly, keeps juices and nutrients, lends minerals, and leaves that unmistakable earthy touch — the countryside flavor." },
          { type: "img", src: "/heritage/panela-1.jpg", alt: "Clay pots", caption: "Pots that breathe and keep memory", align: "left" },
          { type: "p", text: "A clay pot is the womb where Brazil’s most authentic flavors were nurtured — simplicity, tradition, and generosity shared at the table." },
          { type: "p", text: "That heritage is why we chose the name Panela de Barro in Qatar. It is not only a utensil — it’s our intention." },
          { type: "p", text: "We want every guest to feel served from hot pots that echo centuries of history. We cook with patience and care to capture that rustic, authentic, welcoming soul." },
          { type: "p", text: "Here we serve more than a meal: we serve memory." },
        ],
      },
      family: "Our family",
      people: {
        quessi: { name: "Quessi — Owner", text: "Warm host who looks after the guest experience and keeps our purpose alive.", img: "/heritage/chef-quessi.jpg" },
        alex: { name: "Alex — Head Chef", text: "Steady fire and precise timing. Technique with memory.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "Cleusa Gonçalves — Mother & Recipe Guardian", text: "The living memory behind our menu.", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Handmade clay pots" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Handcrafted, as tradition dictates" },
      ],
    },
    wood: {
      title: "Wood-Fired Stove",
      rich: {
        blocks: [
          { type: "p", text: "The wood-fired stove: Brazil’s living flame in brick and clay." },
          { type: "p", text: "It arrived with the Portuguese, met Indigenous and African wisdom, and became unique. Knowledge of fire, native woods and patient cooking shaped our cuisine." },
          { type: "p", text: "Feijoada was born from this alchemy: transforming humble cuts into deep, soulful food." },
          { type: "img", src: "/images/feijoada-costela.jpg", alt: "Beef rib feijoada", caption: "Beef Rib Feijoada", align: "right" },
          { type: "p", text: "At home the stove is the beating heart: irregular heat that demands sensitivity; the natural smoke that can’t be added — it’s born from embers." },
          { type: "img", src: "/heritage/fogao-1.jpg", alt: "Wood stove", caption: "Gentle embers, steady heat", align: "left" },
          { type: "p", text: "We brought that soul to Qatar. In our open kitchen the stove is the main artist." },
          { type: "p", text: "Our Beef Rib Feijoada simmers slowly; the rib roasts over wood and enriches the black-bean broth with incomparable depth." },
          { type: "img", src: "/images/feijoada-costela.jpg", alt: "Feijoada served", caption: "Deep broth, robust flavor", align: "center" },
          { type: "p", text: "Vaca Atolada balances tender beef and sweet cassava cooked by the embers." },
          { type: "img", src: "/images/vaca-atolada.jpg", alt: "Vaca Atolada", caption: "Cassava’s sweetness, beef’s strength", align: "right" },
          { type: "p", text: "Banana Farofa gains crunch and aroma toasted by wood fire." },
          { type: "img", src: "/images/farofa-de-castanha.jpg", alt: "House farofa", caption: "Illustrative image of our farofa", align: "left" },
          { type: "p", text: "Let the scent of wood and home cooking transport you to Brazil’s countryside." },
          { type: "img", src: "/heritage/fogao-2.jpg", alt: "Wood stove detail", caption: "Living flame, living tradition", align: "center" },
        ],
      },
      p1: "From Brazil’s countryside: the right woods, steady embers and patience.",
      p2: "We honor this know-how, uniting tradition and care for the ingredient.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
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

  /* ======== AR (com ABOUT/WOOD ricos) ======== */
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
    about: {
      title: "نبذة",
      rich: {
        blocks: [
          { type: "p", text: "«قدْر الطين»: رحم المطبخ البرازيلي." },
          { type: "p", text: "أكثر من وعاء؛ إنه رمز متجذّر في ثقافتنا الغذائية. رافق شعبنا قرونًا كأقدم تقنيات الطهي في الأمريكتين." },
          { type: "p", text: "قبل وصول الأوروبيين، صنع السكان الأصليون أواني الطين يدويًا وكانت محور الحياة الجماعية — لشيّ السمك وصنع البيجو وتخمير المشروبات." },
          { type: "img", src: "/heritage/panela-mao.jpg", alt: "قدر طين يدوي", caption: "من يد إلى يد عبر الأجيال", align: "right" },
          { type: "p", text: "ومع الاستعمار، أعيد تخيّل القدر في البيوت والسِنجالات. الطين يطهى ببطء وبشكل متساوٍ ويحفظ العصائر ويمنح لمسة ترابية لا تُنسى — نكهة الريف." },
          { type: "img", src: "/heritage/panela-1.jpg", alt: "قدور طين", caption: "قدور تتنفس وتحفظ الذاكرة", align: "left" },
          { type: "p", text: "هنا نخدم أكثر من وجبة: نخدم ذاكرة. هذا جوهر «بانِيلا دي بارّو» في قطر." },
        ],
      },
      family: "عائلتنا",
      people: {
        quessi: { name: "ڤِسّي — المالك", text: "مضيف دافئ يهتم بتجربة الضيوف ويحفظ هدفنا حيًا.", img: "/heritage/chef-quessi.jpg" },
        alex: { name: "أليكس — الشيف", text: "نار ثابتة وتوقيت دقيق. حِرفة بذاكرة.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "كلوزا غونشالفِس — الأم وحافظة الوصفات", text: "الذاكرة الحيّة لقائمتنا.", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "قدور طين يدوية الصنع" },
        { src: "/heritage/panela-artesanal.jpg", caption: "صناعة تقليدية" },
      ],
    },
    wood: {
      title: "موقد الحطب",
      rich: {
        blocks: [
          { type: "p", text: "موقد الحطب: لهبٌ حيّ من طوبٍ وطين." },
          { type: "p", text: "جاء مع البرتغاليين والتقى بحكمة السكان الأصليين والأفارقة فصار فريدًا. معرفة النار والأخشاب والصبر صاغت مطبخنا." },
          { type: "p", text: "وُلدت الفيجوادا من هذه الخيمياء، فتحوِّل القطع البسيطة إلى طعامٍ عميق الروح." },
          { type: "img", src: "/images/feijoada-costela.jpg", alt: "فيجوادا ضلع بقر", caption: "فيجوادا ضلع بقر", align: "right" },
          { type: "p", text: "هو قلب البيت النابض: حرارة غير منتظمة تتطلب حسًّا، ودخان طبيعي لا يُضاف بل يولد من الجمر." },
          { type: "img", src: "/heritage/fogao-1.jpg", alt: "موقد حطب", caption: "جمر هادئ وحرارة ثابتة", align: "left" },
          { type: "p", text: "نقلنا تلك الروح إلى قطر. في مطبخنا المفتوح الموقد هو الفنان الرئيسي." },
          { type: "p", text: "فيجوادا الضلع لدينا تُطهى ببطء، والضلع المشوي على الحطب يمنح مرق الفاصوليا السوداء عمقًا لا يُضاهى." },
          { type: "img", src: "/images/feijoada-costela.jpg", alt: "فيجوادا مقدّمة", caption: "مرق عميق ونكهة قوية", align: "center" },
          { type: "p", text: "«فاكا أتولادا»: توازن بين لحمٍ طري وكسافا حلوة مطهوة على الجمر." },
          { type: "img", src: "/images/vaca-atolada.jpg", alt: "فاكا أتولادا", caption: "حلاوة الكسافا وقوة اللحم", align: "right" },
          { type: "p", text: "فاروفا الموز تكتسب قرمشة وعطراً مميزاً عند التحميص على الحطب." },
          { type: "img", src: "/images/farofa-de-castanha.jpg", alt: "فاروفا البيت", caption: "صورة توضيحية لفاروفا البيت", align: "left" },
          { type: "p", text: "دع رائحة الحطب والطعام المنزلي تنقلك إلى ريف البرازيل." },
          { type: "img", src: "/heritage/fogao-2.jpg", alt: "تفاصيل الموقد", caption: "شعلة حيّة وتقاليد حيّة", align: "center" },
        ],
      },
      p1: "من الأرياف البرازيلية: أخشاب مناسبة وجمر ثابت وصبر.",
      p2: "نُكرّم هذا الإرث بعناية بالمكوّن.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
    },
    gallery: { title: "المعرض" },
    support: {
      title: "الدعم",
      items: ["الطلبات والحجوزات قريبًا", "الفعاليات والولائم", "شراكات"],
      contactTitle: "التواصل",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: { title: "الموقع", addr: "باراها تاون — الدوحة، قطر", map: "افتح الخريطة" },
    immersiveLabels: { amazonia: "الأمازون", cerrado: "السِّيرادو", lencois: "لِنسويس", litoral: "الساحل", serra: "الجبال" },
    drawer: { menu: "القائمة", social: "التواصل الاجتماعي", languages: "اللغات", close: "إغلاق" },
  },
};

// util de texto
const t = (lang, key, fallback = "") => {
  const value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* === Helper para renderizar blocos ricos (texto + imagens) === */
const renderRich = (blocks = []) => (
  <div className="rich">
    {blocks.map((b, i) => {
      if (b.type === "img") {
        return (
          <figure key={i} className={`rich-figure ${b.align || "center"}`}>
            <img src={b.src} alt={b.alt || ""} loading="lazy" />
            {b.caption ? <figcaption>{b.caption}</figcaption> : null}
          </figure>
        );
      }
      return <p key={i} className="p readable">{b.text}</p>;
    })}
  </div>
);

/* === (mantido) faixa de equipe se precisar em outro lugar === */
const TeamStrip = ({ people = [] }) => (
  <div className="team-strip">
    {people.map((p, i) => (
      <figure key={i} className="card person">
        <img className="person-photo" src={p.img} alt={p.name} loading="lazy" />
        <figcaption className="p16">
          <strong>{p.name}</strong>
          <span className="muted" style={{ display: "block", marginTop: 6 }}>{p.text}</span>
        </figcaption>
      </figure>
    ))}
  </div>
);

/* ===================================================
   Dados de Home e Imersões (sem alterações)
   =================================================== */
const heroImage = "/images/picanha-grelhada.jpg";
const highlights = [
  { label: "Fraldinha Inteira", src: "/images/fraldinha-inteira.jpg" },
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
   MENU (sem alterações)
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
  { id:"beijo-roca", name:"Beijo da Roça", desc:"Beijinho cremoso de coco com castanha de caju sobre mini bolo de milho verde levemente úmido. Um carinho doce do campo.", img:"/images/pao-de-queijo.jpg", tags:["Dessert","Dairy"], cat:"desserts", kcal:540 },
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
const SectionTitle = ({ children }) => <h2 className="section-title">{children}</h2>;
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
      <button className="car-btn prev" onClick={prev} aria-label="prev">‹</button>
      <div className="car-track">
        <div className="car-slide">
          {renderItem(items[i], i)}
        </div>
      </div>
      <button className="car-btn next" onClick={next} aria-label="next">›</button>
    </div>
  );
};

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-head">
          <div className="modaltitle">{title}</div>
          <button className="modal-close" onClick={onClose} aria-label="close">×</button>
        </div>
        <div className="modal-body">{children}</div>
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
    {/* Hero simples (usa seu CSS do styles.css) */}
    <section className="hero readable-on-image">
      <div className="hero-img-wrap">
        <img src={heroImage} alt="Picanha" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-inner">
        <h1>{t(lang,"hero.title","Sabores brasileiros, calor de família")}</h1>
        <p className="soon">{t(lang,"hero.subtitle","Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.")}</p>
        <a className="btn" href="#/menu">{t(lang,"hero.cta","Ver Menu")}</a>
      </div>
    </section>

    <div className="section">
      <SectionTitle>{t(lang,"sections.menuHighlights","Destaques do Menu")}</SectionTitle>
      <Carousel
        items={highlights}
        renderItem={(item) => (
          <figure className="slide-hero">
            <img src={item.src} alt={item.label} />
            <figcaption className="carousel-cap">{item.label}</figcaption>
          </figure>
        )}
        auto={4500}
      />
    </div>

    <div className="section">
      <SectionTitle>{t(lang,"sections.immersive","Imersões do Brasil")}</SectionTitle>
      <Carousel
        items={immersions}
        renderItem={(item) => (
          <figure className="slide-hero">
            <img src={item.src} alt={item.key} />
            <figcaption className="carousel-cap">{t(lang,`immersiveLabels.${item.key}`, item.key)}</figcaption>
          </figure>
        )}
        auto={5200}
      />
    </div>
  </>
);

/* ====== ATUALIZADO: ABOUT ====== */
const About = ({ lang }) => {
  const d = dict[lang].about;
  const hasRich = d?.rich?.blocks?.length > 0;

  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      {hasRich ? (
        renderRich(d.rich.blocks)
      ) : (
        <>
          {d.p1 && <p className="p readable">{d.p1}</p>}
          {d.p2 && <p className="p readable">{d.p2}</p>}
          {d.p3 && <p className="p readable">{d.p3}</p>}
        </>
      )}

      <h3 className="subtitle">{d.family}</h3>
      <div className="grid-3">
        {Object.values(d.people).map((p) => (
          <figure key={p.name} className="card person">
            <img className="person-photo" src={p.img} alt={p.name} loading="lazy" />
            <h4>{p.name}</h4>
            <p className="muted p16">{p.text}</p>
          </figure>
        ))}
      </div>

      {d.heritageImgs?.length ? (
        <div className="grid-2" style={{ marginTop: 16 }}>
          {d.heritageImgs.map((h, i) => (
            <figure key={i} className="card tile-figure">
              <img src={h.src} alt={h.caption} loading="lazy" />
              <figcaption className="p16 muted">{h.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </>
  );
};

/* ====== ATUALIZADO: FOGÃO A LENHA ====== */
const WoodFire = ({ lang }) => {
  const d = dict[lang].wood;
  const hasRich = d?.rich?.blocks?.length > 0;

  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      {hasRich ? (
        renderRich(d.rich.blocks)
      ) : (
        <>
          <p className="p">{d.p1}</p>
          <p className="p">{d.p2}</p>
          <div className="grid-3 wood-figs">
            {d.imgs.map((src, i) => (
              <figure key={i} className="card tile-figure">
                <img src={src} alt={`wood-${i}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </>
      )}
      <a className="backlink" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

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
      <div className="tabs">
        {tabs.map(tb => (
          <button key={tb.key} className={tab===tb.key ? "on" : ""} onClick={() => setTab(tb.key)}>
            {tb.label}
          </button>
        ))}
      </div>

      <div className="grid-3">
        {filtered.map((item) => {
          const name = menuT(lang, item.id, "name", item.name);
          const desc = menuT(lang, item.id, "desc", item.desc);
          return (
            <div className="card" key={item.id}>
              <img src={item.img} alt={name} />
              <div className="p16">
                <div className="cardtitle" style={{ fontWeight: 800 }}>{name}</div>
                <div className="muted">{desc}</div>
                <div className="tags">
                  {item.tags.map((tg) => (<span className="tag" key={tg}>{t(lang,`menu.tags.${tg}`,tg)}</span>))}
                </div>
                <button className="btn" style={{ marginTop: 10 }} onClick={() => setOpen({ ...item, name, desc })}>
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={open ? open.name : ""}>
        {open && (
          <>
            <img src={open.img} alt={open.name} />
            <div className="modal-desc">{open.desc}</div>
            <div className="tags mt12">
              {open.tags.map((tg) => (<span className="tag" key={tg}>{t(lang,`menu.tags.${tg}`,tg)}</span>))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

const Gallery = ({ lang }) => {
  const photos = MENU_ITEMS.map(i => ({ src: i.img, alt: i.name }));
  return (
    <>
      <SectionTitle>{t(lang,"gallery.title","Galeria")}</SectionTitle>
      <div className="grid-3">
        {photos.map((p, i) => (
          <figure className="card gallery-card" key={i}>
            <img src={p.src} alt={p.alt} />
          </figure>
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
      <div className="mapwrap card">
        <iframe title="map" src={`https://www.google.com/maps?q=${mapsQ}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <p className="p">
        {d.addr} —{" "}
        <a className="backlink" href={`https://maps.google.com/?q=${mapsQ}`} target="_blank" rel="noreferrer">
          {d.map}
        </a>
      </p>
      <a className="backlink" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
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
      <p className="p">WhatsApp: <a className="backlink" href="https://wa.me/97430475279">+{d.phone}</a></p>
      <p className="p">Email: <a className="backlink" href="mailto:restaurant@paneladebarroqatar.com">{d.email}</a></p>
      <a className="backlink" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

/* =============================
   App (nav e rotas) — sem splash
   ============================= */
const App = () => {
  const [route] = useHashRoute();
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  useEffect(() => { setOpenDrawer(false); }, [route]);

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
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
        <div className="lang-switch">
          {LANGS.map((l) => (
            <button key={l} onClick={() => setLang(l)} className={l===lang?"on":""}>{l.toUpperCase()}</button>
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

      <footer className="footer">© 2025 Panela de Barro</footer>
    </div>
  );
};

export default App;
