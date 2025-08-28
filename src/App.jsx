// src/App.jsx (ou App.jsx na raiz)
import React, { useEffect, useMemo, useState } from "react";

/* =========================================
   Idiomas (PT como padrão) + dicionário UI
   ========================================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

const dict = {
  pt: {
    brand: "Panela de Barro",
    nav: {
      about: "Sobre",
      menu: "Menu",
      gallery: "Galeria",
      woodfire: "Fogão a Lenha",
      location: "Localização",
      support: "Suporte",
    },
    hero: {
      title: "Sabores brasileiros, calor de família",
      subtitle:
        "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
      cta: "Ver Menu",
      soon: "Inauguração em Novembro — reservas online em breve.",
    },
    sections: {
      menuHighlights: "Destaques do Menu",
      immersive: "Imersões do Brasil",
      back: "Voltar ao início",
    },
    menu: {
      title: "Menu",
      tabs: {
        all: "Todos",
        mains: "Pratos",
        appetizers: "Entradas",
        seasonal: "Sazonais",
        beverages: "Bebidas",
        desserts: "Sobremesas",
      },
      modal: { close: "Fechar" },
      tags: {
        Halal: "Halal",
        Beef: "Carne",
        Dairy: "Laticínio",
        Gluten: "Glúten",
        Sea: "Peixe",
        Dessert: "Sobremesa",
        Beverage: "Bebida",
        Seasonal: "Sazonal",
      },
    },

    /* ======================
       SOBRE — história (PT)
       ====================== */
    about: {
      title: "Panela de Barro: o útero da culinária brasileira",
      blocks: [
        {
          type: "para",
          text:
            "Mais do que um utensílio, a panela de barro é um símbolo da nossa cultura alimentar. Dos povos indígenas — mestres da cerâmica — às cozinhas afro-brasileiras, ela cozinhou devagar os sabores que formaram o Brasil.",
        },
        {
          type: "para",
          text:
            "O barro respira, conversa com o fogo e com o alimento. Cozinha por igual, preserva sucos e imprime um toque terroso inconfundível — o nosso ‘sabor de roça’.",
        },
        {
          type: "para",
          text:
            "É desse legado que nasce o Panela de Barro em Doha. Não é só um nome; é uma declaração: servir herança, memória e aconchego em cada receita.",
        },
      ],
      familyTitle: "Nossa família",
      people: [
        {
          name: "Quessi Jhones — Proprietário & Chef",
          text:
            "Conduz a casa preservando o propósito: cozinhar com alma, acolher com carinho.",
          img: "/heritage/chef-quessi.jpg",
        },
        {
          name: "Dona Cleuza — Mãe & Guardiã das Receitas (mineira)",
          text:
            "Inspira nossos sabores: panelas no fogo, histórias e receitas de gerações.",
          img: "/heritage/cleuza.jpg",
        },
        {
          name: "Head Chef — Irmão",
          text:
            "10+ anos de experiência em casas brasileiras; técnica, ponto perfeito e fogo certo.",
          img: "/heritage/chef-alex.jpg",
        },
      ],
      gallery: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, tradição viva" },
      ],
    },

    /* ==================================
       FOGÃO A LENHA — história (PT)
       ================================== */
    wood: {
      title: "O Fogão a Lenha: a alma do Brasil em chamas e argila",
      story: [
        {
          type: "para",
          text:
            "A história do fogão a lenha no Brasil acompanha a formação do nosso povo. Dos colonizadores portugueses às sabedorias indígena e africana, ele virou coração da casa brasileira — calor, sustento e encontro.",
          img: "/heritage/fogao-1.jpg",
        },
        {
          type: "para",
          text:
            "O calor irregular não é falha: é virtude. Ele exige paciência, sensibilidade e um conhecimento quase espiritual do fogo. O ‘fumê’ natural não se adiciona; nasce do encontro entre carvão, madeira e tempo.",
          img: "/heritage/fogao-2.jpg",
        },
        {
          type: "para",
          text:
            "No Panela de Barro, nosso fogão a lenha (cozinha aberta) é protagonista. Cada prato é uma carta de amor à tradição brasileira.",
          img: "/heritage/fogao-3.jpg",
        },
      ],
      dishesTitle: "Pratos nascidos do fogo",
      dishes: [
        {
          id: "feijoada-costela",
          name: "Feijoada de Costela Bovina",
          desc:
            "Costela lenta na brasa até desfiar; caldo de feijão preto profundo e aromático. Cada colher conta a história do Brasil.",
          img: "/images/feijoada-costela.jpg",
        },
        {
          id: "vaca-atolada",
          name: "Vaca Atolada",
          desc:
            "Ossobuco e mandioca em brasa mansa: doçura do legume e sabor da carne numa harmonia que só o fogo lento entrega.",
          img: "/images/vaca-atolada.jpg",
        },
        {
          id: "farofa-banana",
          name: "Farofa de Banana-da-Terra",
          desc:
            "Banana dourada, farinha de mandioca tostada no calor do fogão e perfume de lenha. Crocância e maciez num contraste celestial.",
          img: "/images/farofa-de-castanha.jpg", // use esta como placeholder
        },
      ],
    },

    gallery: { title: "Galeria" },
    support: {
      title: "Suporte",
      items: ["Pedidos e reservas em breve", "Eventos e encomendas", "Parcerias"],
      contactTitle: "Contato",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: {
      title: "Localização",
      addr: "Baraha Town — Doha, Qatar",
      map: "Ver no mapa",
    },
    immersiveLabels: {
      amazonia: "Amazônia",
      cerrado: "Cerrado",
      lencois: "Lençóis",
      litoral: "Litoral",
      serra: "Serra",
    },
    drawer: { menu: "Menu", social: "Redes sociais", languages: "Idiomas", close: "Fechar" },
  },

  /* ==========================
     EN (resumo equivalente)
     ========================== */
  en: {
    brand: "Panela de Barro",
    nav: {
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      woodfire: "Wood-Fired Stove",
      location: "Location",
      support: "Support",
    },
    hero: {
      title: "Brazilian flavors, family warmth",
      subtitle:
        "Family-run restaurant in Qatar. 20+ years of hospitality, wood fire and Brazilian roots.",
      cta: "View Menu",
      soon: "Opening in November — online reservations soon.",
    },
    sections: {
      menuHighlights: "Menu Highlights",
      immersive: "Brazil Immersions",
      back: "Back to start",
    },
    menu: {
      title: "Menu",
      tabs: {
        all: "All",
        mains: "Mains",
        appetizers: "Appetizers",
        seasonal: "Seasonal",
        beverages: "Beverages",
        desserts: "Desserts",
      },
      modal: { close: "Close" },
      tags: {
        Halal: "Halal",
        Beef: "Beef",
        Dairy: "Dairy",
        Gluten: "Gluten",
        Sea: "Fish",
        Dessert: "Dessert",
        Beverage: "Beverage",
        Seasonal: "Seasonal",
      },
    },

    about: {
      title: "Panela de Barro: the womb of Brazilian cuisine",
      blocks: [
        {
          type: "para",
          text:
            "Clay pots are a living symbol of our food culture — from Indigenous mastery to Afro-Brazilian kitchens — slowly cooking the flavors that shaped Brazil.",
        },
        {
          type: "para",
          text:
            "Clay ‘breathes’, speaks with fire and food, preserving juices and adding an unmistakable earthy note — our countryside soul.",
        },
        {
          type: "para",
          text:
            "This legacy inspires Panela de Barro in Doha — not just a name, but a promise to serve heritage, memory and comfort in every recipe.",
        },
      ],
      familyTitle: "Our family",
      people: [
        {
          name: "Quessi Jhones — Owner & Chef",
          text: "Leads the house with soul and warmth.",
          img: "/heritage/chef-quessi.jpg",
        },
        {
          name: "Dona Cleuza — Mother & Recipe Guardian",
          text: "Stories and recipes passed through generations.",
          img: "/heritage/cleuza.jpg",
        },
        {
          name: "Head Chef — Brother",
          text: "10+ years in Brazilian kitchens; craft, timing and steady fire.",
          img: "/heritage/chef-alex.jpg",
        },
      ],
      gallery: [
        { src: "/heritage/panela-1.jpg", caption: "Handmade clay pots" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Handcrafted, living tradition" },
      ],
    },

    wood: {
      title: "The Wood-Fired Stove: Brazil’s soul in flame and clay",
      story: [
        {
          type: "para",
          text:
            "From Portuguese hearths to Indigenous and African knowledge, the wood stove became Brazil’s home heart — heat, sustenance and gathering.",
          img: "/heritage/fogao-1.jpg",
        },
        {
          type: "para",
          text:
            "Irregular heat is a virtue: patience, sensitivity, and near-spiritual fire control. The natural smoky flavor is born from wood, ember and time.",
          img: "/heritage/fogao-2.jpg",
        },
        {
          type: "para",
          text:
            "At Panela de Barro, our open kitchen’s wood stove is the lead artist. Each dish is a love letter to Brazilian tradition.",
          img: "/heritage/fogao-3.jpg",
        },
      ],
      dishesTitle: "Dishes from the fire",
      dishes: [
        {
          id: "feijoada-costela",
          name: "Beef Rib Feijoada",
          desc:
            "Ribs slow-roasted over embers; a deep, aromatic black-bean broth — a spoonful of history.",
          img: "/images/feijoada-costela.jpg",
        },
        {
          id: "vaca-atolada",
          name: "Vaca Atolada (Ossobuco)",
          desc:
            "Ossobuco and cassava over gentle embers: sweetness meets savory in true slow fire harmony.",
          img: "/images/vaca-atolada.jpg",
        },
        {
          id: "farofa-banana",
          name: "Plantain Farofa",
          desc:
            "Golden plantain and toasted mandioca flour — crunch and tenderness perfumed by wood fire.",
          img: "/images/farofa-de-castanha.jpg",
        },
      ],
    },

    gallery: { title: "Gallery" },
    support: {
      title: "Support",
      items: ["Orders & reservations soon", "Events & catering", "Partnerships"],
      contactTitle: "Contact",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: {
      title: "Location",
      addr: "Baraha Town — Doha, Qatar",
      map: "Open map",
    },
    immersiveLabels: {
      amazonia: "Amazon",
      cerrado: "Cerrado",
      lencois: "Lençóis",
      litoral: "Coast",
      serra: "Highlands",
    },
    drawer: { menu: "Menu", social: "Social", languages: "Languages", close: "Close" },
  },

  /* ==========================
     AR (resumo equivalente)
     ========================== */
  ar: {
    brand: "بانِيلا دي بارّو",
    nav: {
      about: "نبذة",
      menu: "القائمة",
      gallery: "المعرض",
      woodfire: "موقد الحطب",
      location: "الموقع",
      support: "الدعم",
    },
    hero: {
      title: "نكهات برازيلية ودفء العائلة",
      subtitle:
        "مطعم عائلي في قطر — أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
      cta: "عرض القائمة",
      soon: "الافتتاح في نوفمبر — الحجوزات قريبًا.",
    },
    sections: {
      menuHighlights: "مختارات القائمة",
      immersive: "جولات برازيلية",
      back: "العودة للبداية",
    },
    menu: {
      title: "القائمة",
      tabs: {
        all: "الكل",
        mains: "الأطباق الرئيسية",
        appetizers: "المقبلات",
        seasonal: "موسمية",
        beverages: "المشروبات",
        desserts: "الحلويات",
      },
      modal: { close: "إغلاق" },
      tags: {
        Halal: "حلال",
        Beef: "لحم بقر",
        Dairy: "ألبان",
        Gluten: "غلوتين",
        Sea: "سمك",
        Dessert: "حلوى",
        Beverage: "مشروب",
        Seasonal: "موسمي",
      },
    },

    about: {
      title: "«بانيلا دي بارّو»: رحم المطبخ البرازيلي",
      blocks: [
        {
          type: "para",
          text:
            "القدور الفخارية رمز حي في ثقافتنا الغذائية — من حرفة السكان الأصليين إلى مطابخ الأفرو-برازيليين — تطبخ ببطء نكهات شكّلت البرازيل.",
        },
        {
          type: "para",
          text:
            "الطين «يتنفس» ويتفاعل مع النار والطعام، محافظًا على العصارة ومضيفًا لمسة ترابية لا تُنسى.",
        },
        {
          type: "para",
          text:
            "هذا الإرث يلهم «بانيلا دي بارّو» في الدوحة — وعدٌ بتقديم التراث والدفء في كل وصفة.",
        },
      ],
      familyTitle: "عائلتنا",
      people: [
        {
          name: "كِوِسّي جونز — المالك والشيف",
          text: "يقود المكان بروحٍ دافئة.",
          img: "/heritage/chef-quessi.jpg",
        },
        {
          name: "دونا كليوزا — الأم وحافظة الوصفات",
          text: "حكايات ووصفات تتوارثها الأجيال.",
          img: "/heritage/cleuza.jpg",
        },
        {
          name: "الشيف التنفيذي — الأخ",
          text: "أكثر من 10 سنوات خبرة في المطابخ البرازيلية.",
          img: "/heritage/chef-alex.jpg",
        },
      ],
      gallery: [
        { src: "/heritage/panela-1.jpg", caption: "قدور طين يدوية الصنع" },
        { src: "/heritage/panela-artesanal.jpg", caption: "حرفة حية" },
      ],
    },

    wood: {
      title: "موقد الحطب: روح البرازيل في اللهب والطين",
      story: [
        {
          type: "para",
          text:
            "من مواقد البرتغاليين إلى معرفة السكان الأصليين والأفارقة، صار موقد الحطب قلب البيت — دفءٌ وطعامٌ ولمّة.",
          img: "/heritage/fogao-1.jpg",
        },
        {
          type: "para",
          text:
            "حرارته غير المنتظمة فضيلة: صبر وحسّ ومعرفة بالنار. نكهة الدخان تولد من الخشب والجمر والزمن.",
          img: "/heritage/fogao-2.jpg",
        },
        {
          type: "para",
          text:
            "في «بانيلا دي بارّو» موقدنا بطل المطبخ المفتوح، وكل طبق رسالة حب للتقليد.",
          img: "/heritage/fogao-3.jpg",
        },
      ],
      dishesTitle: "أطباق من نار الحطب",
      dishes: [
        {
          id: "feijoada-costela",
          name: "فيجوادا بأضلاع البقر",
          desc:
            "أضلاع تُشوى ببطء على الجمر ومرق فاصولياء أسود عميق — لقمة من التاريخ.",
          img: "/images/feijoada-costela.jpg",
        },
        {
          id: "vaca-atolada",
          name: "فاكا أتولادا (عظم الساق)",
          desc:
            "عظم ساق مع كسافا على جمر لطيف — حلاوة الخضار مع طعم اللحم بتناغم النار البطيئة.",
          img: "/images/vaca-atolada.jpg",
        },
        {
          id: "farofa-banana",
          name: "فاروفا بموز الجنة",
          desc:
            "موز ذهبي ودقيق كسافا مُحمّص — قرمشة ونعومة بعبير نار الحطب.",
          img: "/images/farofa-de-castanha.jpg",
        },
      ],
    },

    gallery: { title: "المعرض" },
    support: {
      title: "الدعم",
      items: ["الطلبات والحجوزات قريبًا", "الفعاليات والولائم", "شراكات"],
      contactTitle: "التواصل",
      phone: "974 3047 5279",
      email: "restaurant@paneladebarroqatar.com",
    },
    location: {
      title: "الموقع",
      addr: "باراها تاون — الدوحة، قطر",
      map: "افتح الخريطة",
    },
    immersiveLabels: {
      amazonia: "الأمازون",
      cerrado: "السِّيرادو",
      lencois: "لِنسويس",
      litoral: "الساحل",
      serra: "الجبال",
    },
    drawer: { menu: "القائمة", social: "التواصل", languages: "اللغات", close: "إغلاق" },
  },
};

// util de texto
const t = (lang, key, fallback = "") => {
  const value = key
    .split(".")
    .reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* ===================================================
   Dados de Home e Imersões (mantidos)
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
   MENU — base (mantida) + i18n (mantido do seu setup)
   =================================================== */
const MENU_ITEMS = [
  { id: "picanha", name: "Picanha Grelhada", desc: "Picanha na brasa, ponto perfeito e suculência.", img: "/images/picanha-grelhada.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "fraldinha", name: "Fraldinha Inteira", desc: "Corte macio servido na tábua, perfeito para compartilhar.", img: "/images/fraldinha-inteira.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "vaca-atolada", name: "Vaca Atolada (Ossobuco)", desc: "Ossobuco com polenta cremosa e rúcula cítrica.", img: "/images/vaca-atolada.jpg", tags: ["Halal","Beef","Gluten","Dairy"], cat: "mains" },
  { id: "feijoada-costela", name: "Feijoada de Costela", desc: "Feijão preto com costela, farofa de banana e vinagrete.", img: "/images/feijoada-costela.jpg", tags: ["Halal","Beef"], cat: "mains" },
  { id: "moqueca", name: "Moqueca Baiana", desc: "Peixe no leite de coco, urucum/dendê e coentro.", img: "/images/moqueca-baiana.jpg", tags: ["Halal","Sea","Dairy"], cat: "mains" },
  { id: "galinhada", name: "Galinhada Caipira", desc: "Arroz de quintal, frango dourado e cheiro-verde.", img: "/images/galinhada-caipira.jpg", tags: ["Halal"], cat: "mains" },
  { id: "hamburguer-picanha", name: "Hambúrguer de Picanha", desc: "Blend de picanha, pão macio e queijo.", img: "/images/hamburguer-de-picanha.jpg", tags: ["Halal","Beef","Gluten","Dairy"], cat: "mains" },
  { id: "lasanha-banana", name: "Lasanha de Banana-da-Terra", desc: "Camadas de banana-da-terra, queijo e molho caseiro.", img: "/images/lasanha-banana.jpg", tags: ["Dairy","Gluten"], cat: "mains" },
  { id: "rubacao", name: "Rubacão", desc: "Arroz, feijão verde e queijo coalho — sertão no prato.", img: "/images/rubacao.jpg", tags: ["Dairy"], cat: "mains" },

  { id: "coxinhas-costela", name: "Coxinhas de Costela", desc: "Clássico brasileiro com recheio de costela.", img: "/images/coxinhas-de-costela.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "pasteis", name: "Pastéis Brasileiros", desc: "Pastéis crocantes com recheios variados.", img: "/images/pasteis-brasileiros.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-alho", name: "Pão de Alho", desc: "Pão dourado na brasa com manteiga de alho.", img: "/images/pao-de-alho.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "polenta-frita", name: "Polenta Frita", desc: "Crocante por fora, cremosa por dentro.", img: "/images/polenta-frita.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },
  { id: "mandioca-frita", name: "Mandioca Frita", desc: "Aipim crocante para compartilhar.", img: "/images/mandioca-frita.jpg", tags: [], cat: "appetizers" },
  { id: "farofa-castanha", name: "Farofa de Castanha", desc: "Crocrância e sabor para acompanhar.", img: "/images/farofa-de-castanha.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-queijo", name: "Pão de Queijo da Casa", desc: "Mineiro, quentinho e puxando no queijo.", img: "/images/pao-de-queijo.jpg", tags: ["Gluten","Dairy"], cat: "appetizers" },

  { id: "mandioca-real", name: "Mandioca Real", desc: "Bolo cremoso de mandioca com coco.", img: "/images/mandioca-real.jpg", tags: ["Dessert","Dairy","Gluten"], cat: "desserts" },
  { id: "encanto-coco", name: "Encanto de Coco", desc: "Cocada cremosa servida gelada.", img: "/images/encanto-de-coco.jpg", tags: ["Dessert","Dairy"], cat: "desserts" },
  { id: "doce-roca-gelo", name: "Doce da Roça com Gelo", desc: "Docinho de fazenda, servido gelado.", img: "/images/doce-da-roca-com-gelo.jpg", tags: ["Dessert"], cat: "desserts" },
  { id: "pamonha", name: "Pamonha Doce (Sazonal)", desc: "Clássico de milho verde — disponível em épocas de safra.", img: "/images/pamonha.jpg", tags: ["Dessert","Seasonal"], cat: "seasonal" },

  { id: "caipile", name: "Caipilé Clássico", desc: "Refrescante e cítrico.", img: "/images/caipile-classico.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "uva-limao", name: "Uva, Limão & Gelo", desc: "Doce, ácido e gelado.", img: "/images/uva-limao-gelo.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "blueberry-coco", name: "Blueberry & Coco Fizz", desc: "Frutas e coco em borbulhas tropicais.", img: "/images/blueberry-coco-fizz.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "verao-brasil", name: "Verão Brasil", desc: "Notas cítricas e doçura na medida.", img: "/images/verao-brasil.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "amazonia-breeze", name: "Amazon Breeze", desc: "Ervas e frutas da floresta.", img: "/images/amazon-breeze.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "frescor-amazonia", name: "Frescor da Amazônia", desc: "Suco verde aromático.", img: "/images/frescor-da-amazonia.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "pe-de-serra", name: "Pé de Serra", desc: "Rapadura e limão em harmonia.", img: "/images/pe-de-serra.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "sol-do-cerrado", name: "Sol do Cerrado", desc: "Manga e maracujá vibrantes.", img: "/images/sol-do-cerrado.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "vitamina-cerrado", name: "Vitamina do Cerrado", desc: "Cremosa e nutritiva.", img: "/images/vitamina-do-cerrado.jpg", tags: ["Beverage"], cat: "beverages" },
];

const MENU_I18N = {
  en: {
    picanha: { name: "Grilled Picanha", desc: "Char-grilled picanha, perfect doneness and juiciness." },
    fraldinha: { name: "Whole Flank Steak", desc: "Tender cut on the board, great for sharing." },
    "vaca-atolada": { name: "Ossobuco with Creamy Polenta", desc: "Rich ossobuco with citrus arugula." },
    "feijoada-costela": { name: "Beef Rib Feijoada", desc: "Black beans, rib, banana farofa and vinaigrette." },
    moqueca: { name: "Bahian Moqueca", desc: "Fish in coconut milk, annatto/dendê and cilantro." },
    galinhada: { name: "Country Chicken Rice", desc: "Backyard-style rice, golden chicken and herbs." },
    "hamburguer-picanha": { name: "Picanha Burger", desc: "Juicy picanha blend, soft bun and cheese." },
    "lasanha-banana": { name: "Plantain Lasagna", desc: "Layers of plantain, cheese and house sauce." },
    rubacao: { name: "Rubacão", desc: "Rice, green beans and grilled cheese." },

    "coxinhas-costela": { name: "Beef Rib Coxinhas", desc: "Brazilian classic with rib filling." },
    pasteis: { name: "Brazilian Pastéis", desc: "Crispy pastries with assorted fillings." },
    "pao-alho": { name: "Garlic Bread", desc: "Grilled bread with garlic butter." },
    "polenta-frita": { name: "Fried Polenta", desc: "Crispy outside, creamy inside." },
    "mandioca-frita": { name: "Fried Cassava", desc: "Perfect to share." },
    "farofa-castanha": { name: "Chestnut Farofa", desc: "Crunch and flavor to pair." },
    "pao-queijo": { name: "House Pão de Queijo", desc: "Cheesy, fresh from the oven." },

    "mandioca-real": { name: "Royal Cassava Cake", desc: "Creamy cassava cake with coconut." },
    "encanto-coco": { name: "Coconut Delight", desc: "Creamy coconut pudding served cold." },
    "doce-roca-gelo": { name: "Farm Sweet on Ice", desc: "Homestyle sweet, served cold." },
    pamonha: { name: "Sweet Corn Pamonha (Seasonal)", desc: "Green-corn classic — available in harvest season." },

    caipile: { name: "Classic Caipilé", desc: "Refreshing and citrusy." },
    "uva-limao": { name: "Grape, Lime & Ice", desc: "Sweet, tangy and icy." },
    "blueberry-coco": { name: "Blueberry & Coco Fizz", desc: "Bubbles with fruit and coconut." },
    "verao-brasil": { name: "Brazilian Summer", desc: "Citrusy notes with balanced sweetness." },
    "amazonia-breeze": { name: "Amazon Breeze", desc: "Forest herbs and fruits." },
    "frescor-amazonia": { name: "Amazon Fresh", desc: "Aromatic green juice." },
    "pe-de-serra": { name: "Pé de Serra", desc: "Rapadura sugar with lime." },
    "sol-do-cerrado": { name: "Cerrado Sun", desc: "Mango & passion-fruit harmony." },
    "vitamina-cerrado": { name: "Cerrado Smoothie", desc: "Creamy and nourishing." },
  },
  ar: {
    picanha: { name: "بيكانيا مشوية", desc: "بيكانيا على الفحم بدرجة نضج مثالية." },
    fraldinha: { name: "فلانك كامل", desc: "قطعة طرية للتقديم والمشاركة." },
    "vaca-atolada": { name: "عظم الساق مع بولِنتا كريمية", desc: "نكهة غنية مع جرجير حمضي." },
    "feijoada-costela": { name: "فيجوادا ضلع بقر", desc: "فاصولياء سوداء مع ضلع وفاروفا بالموز." },
    moqueca: { name: "موكيكا باهية", desc: "سمك مع حليب جوز الهند وزيت الدندِه." },
    galinhada: { name: "أرز الدجاج الريفي", desc: "دجاج ذهبي مع أعشاب." },
    "hamburguer-picanha": { name: "برغر بيكانيا", desc: "خليط لحم طري مع خبز طري وجبن." },
    "lasanha-banana": { name: "لازانيا الموز البلدي", desc: "طبقات موز وجبن وصلصة." },
    rubacao: { name: "روباكان", desc: "أرز مع فاصولياء خضراء وجبن مشوي." },

    "coxinhas-costela": { name: "كوكسينيا ضلع", desc: "طبق برازيلي محشو بالضلوع." },
    pasteis: { name: "فطائر باستيل", desc: "مقرمشة بحشوات متنوعة." },
    "pao-alho": { name: "خبز بالثوم", desc: "مشوي مع زبدة الثوم." },
    "polenta-frita": { name: "بولِنتا مقلية", desc: "مقرمشة من الخارج كريمية من الداخل." },
    "mandioca-frita": { name: "كسافا مقلية", desc: "مثالية للمشاركة." },
    "farofa-castanha": { name: "فاروٙفا بالبندق", desc: "قرمشة ونكهة مرافقة." },
    "pao-queijo": { name: "خبز جبن منزلي", desc: "ساخن وطري." },

    "mandioca-real": { name: "كيك الكسافا الملكي", desc: "كريمي مع جوز الهند." },
    "encanto-coco": { name: "لذّة جوز الهند", desc: "حلوى كريمية باردة." },
    "doce-roca-gelo": { name: "حلوى ريفية باردة", desc: "حلوى منزلية على الثلج." },
    pamonha: { name: "بامونيا حلوة (موسمية)", desc: "ذرة خضراء — متاحة بموسم الحصاد." },

    caipile: { name: "كايبيلي كلاسيكي", desc: "منعش وحامضي." },
    "uva-limao": { name: "عنب وليمون وثلج", desc: "حلو وحامضي وبارد." },
    "blueberry-coco": { name: "بلو بيري مع جوز الهند فِز", desc: "فقاعات فاكهية بجوز الهند." },
    "verao-brasil": { name: "صيف البرازيل", desc: "نَفَحات حمضية متوازنة." },
    "amazonia-breeze": { name: "نسيم الأمازون", desc: "أعشاب وفواكه الغابة." },
    "frescor-amazonia": { name: "نضارة الأمازون", desc: "عصير أخضر عطِر." },
    "pe-de-serra": { name: "پي دي سيرا", desc: "رابدورا مع ليمون." },
    "sol-do-cerrado": { name: "شمس السيرادو", desc: "مانغا وماراكويا." },
    "vitamina-cerrado": { name: "سموثي السيرادو", desc: "كريمي ومغذٍ." },
  },
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
    typeof window !== "undefined"
      ? window.location.hash.replace("#/", "") || "home"
      : "home"
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

// Img agora tem fallback automático
const Img = ({ src, alt, ratio = "16/9", round = true }) => (
  <div className={`imgwrap ${round ? "round" : ""}`} style={{ aspectRatio: ratio }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        if (e.currentTarget.src.endsWith("placeholder.jpg")) return;
        e.currentTarget.src = "/images/placeholder.jpg";
      }}
    />
  </div>
);

const Carousel = ({ items, renderItem, auto = 5000 }) => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, auto);
    return () => clearInterval(id);
  }, [auto, items.length]);
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
  const go = (to) => {
    window.location.hash = `#/${to}`;
    onClose();
  };
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
          <button onClick={() => go("about")}>{t(lang, "nav.about")}</button>
          <button onClick={() => go("menu")}>{t(lang, "nav.menu")}</button>
          <button onClick={() => go("gallery")}>{t(lang, "nav.gallery")}</button>
          <button onClick={() => go("wood")}>{t(lang, "nav.woodfire")}</button>
          <button onClick={() => go("location")}>{t(lang, "nav.location")}</button>
          <button onClick={() => go("support")}>{t(lang, "nav.support")}</button>
        </nav>

        <div className="dsection">
          <div className="dtitle">{t(lang, "drawer.languages", "Idiomas")}</div>
          <div className="dlangs">
            {LANGS.map((l) => (
              <button
                key={l}
                className={`chip ${l === lang ? "active" : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="dsection">
          <div className="dtitle">{t(lang, "drawer.social", "Redes sociais")}</div>
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
        <h1>{t(lang, "hero.title", "Sabores brasileiros, calor de família")}</h1>
        <p className="sub">
          {t(
            lang,
            "hero.subtitle",
            "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras."
          )}
        </p>
        <p className="soon">
          {t(lang, "hero.soon", "Inauguração em Novembro — reservas online em breve.")}
        </p>
        <a className="btn" href="#/menu">
          {t(lang, "hero.cta", "Ver Menu")}
        </a>
      </div>
    </div>

    <SectionTitle>{t(lang, "sections.menuHighlights", "Destaques do Menu")}</SectionTitle>
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

    <SectionTitle>{t(lang, "sections.immersive", "Imersões do Brasil")}</SectionTitle>
    <Carousel
      items={immersions}
      renderItem={(item) => (
        <Card>
          <Img src={item.src} alt={item.key} ratio="16/9" />
          <div className="caption">{t(lang, `immersiveLabels.${item.key}`, item.key)}</div>
        </Card>
      )}
      auto={5200}
    />
  </>
);

const Menu = ({ lang }) => {
  const tabs = useMemo(
    () => [
      { key: "all", label: t(lang, "menu.tabs.all", "Todos") },
      { key: "mains", label: t(lang, "menu.tabs.mains", "Pratos") },
      { key: "appetizers", label: t(lang, "menu.tabs.appetizers", "Entradas") },
      { key: "seasonal", label: t(lang, "menu.tabs.seasonal", "Sazonais") },
      { key: "beverages", label: t(lang, "menu.tabs.beverages", "Bebidas") },
      { key: "desserts", label: t(lang, "menu.tabs.desserts", "Sobremesas") },
    ],
    [lang]
  );

  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null);

  const filtered = tab === "all" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.cat === tab);

  return (
    <>
      <SectionTitle>{t(lang, "menu.title", "Menu")}</SectionTitle>

      {/* Abas sticky */}
      <div className="tabs sticky">
        {tabs.map((tb) => (
          <button
            key={tb.key}
            className={`chip ${tab === tb.key ? "active" : ""}`}
            onClick={() => setTab(tb.key)}
          >
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
                    <span className="tag" key={tg}>
                      {t(lang, `menu.tags.${tg}`, tg)}
                    </span>
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
            <div className="tags" style={{ marginTop: 8 }}>
              {open.tags.map((tg) => (
                <span className="tag" key={tg}>
                  {t(lang, `menu.tags.${tg}`, tg)}
                </span>
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

/* ============================
   SOBRE — usando seu novo texto
   ============================ */
const About = ({ lang }) => {
  const d = dict[lang].about;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>

      {d.blocks.map((b, i) => (
        <p className="p" key={i}>{b.text}</p>
      ))}

      <h3 className="subtitle">{d.familyTitle}</h3>
      <div className="familygrid">
        {d.people.map((p) => (
          <Card key={p.name}>
            <Img src={p.img} alt={p.name} ratio="1/1" />
            <div className="cardtitle">{p.name}</div>
            <div className="carddesc">{p.text}</div>
          </Card>
        ))}
      </div>

      <div className="grid2" style={{ marginTop: 12 }}>
        {d.gallery.map((h, i) => (
          <Card key={i}>
            <Img src={h.src} alt={h.caption} ratio="16/9" />
            <div className="caption">{h.caption}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

/* ==============================================
   FOGÃO A LENHA — texto + fotos + pratos com foto
   ============================================== */
const WoodFire = ({ lang }) => {
  const d = dict[lang].wood;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>

      {d.story.map((s, i) => (
        <Card key={i} style={{ display: "grid", gap: 12 }}>
          {s.img && <Img src={s.img} alt={`wood-${i}`} ratio="16/9" />}
          <p className="p" style={{ margin: 0 }}>{s.text}</p>
        </Card>
      ))}

      <h3 className="subtitle" style={{ marginTop: 18 }}>{d.dishesTitle}</h3>
      <div className="grid">
        {d.dishes.map((dish) => (
          <Card key={dish.id}>
            <Img src={dish.img} alt={dish.name} ratio="16/9" />
            <div className="cardtitle">{dish.name}</div>
            <div className="carddesc">{dish.desc}</div>
          </Card>
        ))}
      </div>

      <a className="back" href="#/home">{t(lang, "sections.back", "Voltar ao início")}</a>
    </>
  );
};

const Gallery = ({ lang }) => {
  const photos = MENU_ITEMS.map((i) => ({ src: i.img, alt: i.name }));
  return (
    <>
      <SectionTitle>{t(lang, "gallery.title", "Galeria")}</SectionTitle>
      <div className="gallery">
        {photos.map((p, i) => (
          <Card key={i}>
            <Img src={p.src} alt={p.alt} ratio="1/1" />
          </Card>
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
          <a
            className="link"
            href={`https://maps.google.com/?q=${mapsQ}`}
            target="_blank"
            rel="noreferrer"
          >
            {d.map}
          </a>
        </p>
      </Card>
      <a className="back" href="#/home">{t(lang, "sections.back", "Voltar ao início")}</a>
    </>
  );
};

const Support = ({ lang }) => {
  const d = dict[lang].support;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <ul className="list">
        {d.items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
      <h3 className="subtitle">{d.contactTitle}</h3>
      <p className="p">
        WhatsApp:{" "}
        <a className="link" href="https://wa.me/97430475279">
          +{d.phone}
        </a>
      </p>
      <p className="p">
        Email:{" "}
        <a className="link" href="mailto:restaurant@paneladebarroqatar.com">
          {d.email}
        </a>
      </p>
      <a className="back" href="#/home">{t(lang, "sections.back", "Voltar ao início")}</a>
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

  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 1100);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  useEffect(() => {
    setOpenDrawer(false);
  }, [route]);

  // mede altura do header e salva em --navh (corrige sticky no mobile)
  useEffect(() => {
    const setNavHeight = () => {
      const el = document.querySelector(".nav");
      if (!el) return;
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--navh", `${h}px`);
    };
    setNavHeight();
    window.addEventListener("resize", setNavHeight);
    return () => window.removeEventListener("resize", setNavHeight);
  }, [lang]);

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Styles />
      {splash && (
        <div className="splash">
          <img src="/logo.png" alt="Panela de Barro" />
        </div>
      )}

      <header className="nav">
        <button className="hamb" onClick={() => setOpenDrawer(true)} aria-label="menu">
          ☰
        </button>
        <a className="brand" href="#/home">
          <img src="/logo.png" alt="logo" />
          <span>{t(lang, "brand", "Panela de Barro")}</span>
        </a>
        <nav className="links">
          <a href="#/about">{t(lang, "nav.about", "Sobre")}</a>
          <a href="#/menu">{t(lang, "nav.menu", "Menu")}</a>
          <a href="#/gallery">{t(lang, "nav.gallery", "Galeria")}</a>
          <a href="#/wood">{t(lang, "nav.woodfire", "Fogão a Lenha")}</a>
          <a href="#/location">{t(lang, "nav.location", "Localização")}</a>
          <a href="#/support">{t(lang, "nav.support", "Suporte")}</a>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`chip ${l === lang ? "active" : ""}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        lang={lang}
        setLang={setLang}
      />

      <main className="container">
        {route === "home" && <Home lang={lang} />}
        {route === "about" && <About lang={lang} />}
        {route === "menu" && <Menu lang={lang} />}
        {route === "gallery" && <Gallery lang={lang} />}
        {route === "wood" && <WoodFire lang={lang} />}
        {route === "location" && <Location lang={lang} />}
        {route === "support" && <Support lang={lang} />}
      </main>

      <footer className="foot">© {new Date().getFullYear()} Panela de Barro</footer>
    </div>
  );
};

/* =============================
   CSS embutido (mantido)
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
    padding: calc(8px + var(--safeTop)) 14px 8px 14px;
    border-bottom:1px solid #e5d5c2; 
    min-height:64px;
  }
  .hamb{display:none;border:0;background:var(--pill-ghost);width:40px;height:36px;border-radius:10px;font-size:20px;cursor:pointer}
  .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-weight:800}
  .brand img{width:28px;height:28px}
  .brand span{font-size:20px;letter-spacing:.2px;white-space:nowrap}
  .links a{margin:0 10px;text-decoration:none;color:var(--ink)}
  .langs .chip{margin-left:6px}

  @media (max-width:920px){
    .links{display:none !important;}
    .hamb{display:inline-block}
    .brand{flex:1;min-width:0;justify-content:center}
    .brand img{width:34px;height:34px}
    .brand span{font-size:clamp(18px,5.2vw,22px);white-space:nowrap}
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
    position:-webkit-sticky;
    position:sticky;
    top: calc(var(--safeTop) + var(--navh) + 6px);
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

  .carousel{position:relative;margin:12px 6px}
  .cinner{overflow:hidden}
  .cbtn{position:absolute;top:50%;transform:translateY(-50%);border:0;background:rgba(0,0,0,.35);color:#fff;width:40px;height:40px;border-radius:50%;cursor:pointer}
  .cbtn.left{left:8px}.cbtn.right{right:8px}

  .modalbg{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:18px;z-index:50}
  .modal{background:#fff;color:#111;border-radius:18px;max-width:820px;width:100%;box-shadow:var(--shadow);max-height:85vh;display:flex;flex-direction:column}
  .modalhead{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid #eee}
  .modaltitle{font-weight:800}
  .close{border:0;background:#eee;border-radius:10px;width:36px;height:32px;cursor:pointer}
  .modalbody{padding:12px 14px;overflow:auto}
  .modalbody .imgwrap{margin-bottom:10px}
  .mdesc{margin:6px 2px 10px 2px}

  .gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}
  .mapwrap{position:relative;width:100%;aspect-ratio:16/9;border-radius:14px;overflow:hidden}
  .mapwrap iframe{position:absolute;inset:0;border:0;width:100%;height:100%}

  .back{display:inline-block;margin:14px 6px 0;color:var(--pill);text-decoration:none;font-weight:700}
  .foot{padding:30px 18px;color:#7a6b5c;text-align:center}

  .splash{position:fixed;inset:0;background:var(--bg);display:flex;align-items:center;justify-content:center;z-index:100}
  .splash img{width:72px;height:72px;filter:drop-shadow(0 6px 18px rgba(0,0,0,.18))}

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
