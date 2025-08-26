// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";

/* =============================
   CONFIGURAÇÃO DE IDIOMA (LOCAL)
   ============================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

const dict = {
  pt: {
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
    },
    about: {
      title: "Sobre",
      p1: "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha.",
      p2: "A panela de barro atravessa a nossa história: dos povos indígenas à criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite que os sabores conversem e imprime um toque terroso inconfundível.",
      p3: "Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto — servidos à mesa.",
      family: "Nossa família",
      people: {
        quessi: {
          name: "Quessi Jones — Proprietária",
          text:
            "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho.",
          img: "/heritage/chef-quessi.jpg",
        },
        alex: {
          name: "Alex — Chef de Cozinha",
          text:
            "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo.",
          img: "/heritage/chef-alex.jpg",
        },
        cleusa: {
          name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas",
          text:
            "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração.",
          img: "/heritage/cleusa.jpg",
        },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" },
      ],
    },
    wood: {
      title: "Fogão a Lenha",
      p1:
        "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado.",
      p2:
        "Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente.",
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
    immersiveLabels: {
      amazonia: "Amazônia",
      cerrado: "Cerrado",
      lencois: "Lençóis",
      litoral: "Litoral",
      serra: "Serra",
    },
  },
  en: {
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
    },
    about: {
      title: "About",
      p1:
        "Panela de Barro is a tribute to Brazilian roots: farm cooking, fresh ingredients and wood fire. Our family brings decades of kitchen memories to Doha.",
      p2:
        "Clay pots cross our history: from indigenous peoples to Afro-Brazilian creativity. Slow cooking lets flavors speak and leaves an unmistakable earthy touch.",
      p3:
        "That’s the taste we seek in every dish. Tradition, calm and affection — served at the table.",
      family: "Our family",
      people: {
        quessi: {
          name: "Quessi Jones — Owner",
          text:
            "Quessi leads the house and preserves the purpose: cook with soul, welcome with care.",
          img: "/heritage/chef-quessi.jpg",
        },
        alex: {
          name: "Alex — Head Chef",
          text:
            "Alex runs the kitchen with technique and memory — perfect doneness and steady fire.",
          img: "/heritage/chef-alex.jpg",
        },
        cleusa: {
          name: "Cleusa Gonçalves — Mother & Recipe Guardian",
          text:
            "Dona Cleusa inspires our flavors: pots on the fire, stories and recipes passed down generations.",
          img: "/heritage/cleusa.jpg",
        },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Handmade clay pots" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Handcrafted, as tradition dictates" },
      ],
    },
    wood: {
      title: "Wood-Fired Stove",
      p1:
        "From Brazil’s countryside: right woods, steady embers and patience — the secret of rich broths.",
      p2:
        "Our kitchen honors this knowledge, uniting tradition and care for the ingredient.",
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
    immersiveLabels: {
      amazonia: "Amazon",
      cerrado: "Cerrado",
      lencois: "Lençóis",
      litoral: "Coast",
      serra: "Highlands",
    },
  },
  ar: {
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
        "مطعم عائلي في قطر. أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
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
    },
    about: {
      title: "نبذة",
      p1:
        "«بانِيلا دي بارّو» تحية للجذور البرازيلية: طبخ ريفي ومكوّنات طازجة ونار الحطب. تنقل عائلتنا عقودًا من الذكريات إلى الدوحة.",
      p2:
        "قدور الطين جزء من تاريخنا: من الشعوب الأصلية إلى إبداع المطابخ الأفرو-برازيلية. الطهي البطيء يترك نكهة ترابية لا تُنسى.",
      p3:
        "هذا ما نبحث عنه في كل طبق: تقليد وهدوء ومودّة — على المائدة.",
      family: "عائلتنا",
      people: {
        quessi: {
          name: "كِوِسّي جونز — المالكة",
          text:
            "تقود كِوِسّي المكان وتحفظ غايته: الطبخ بروح واستقبال بحفاوة.",
          img: "/heritage/chef-quessi.jpg",
        },
        alex: {
          name: "أليكس — الشيف",
          text:
            "يُدير أليكس المطبخ بحرفية وذاكرة ذوقية — نضج مثالي ونار ثابتة.",
          img: "/heritage/chef-alex.jpg",
        },
        cleusa: {
          name: "كلوزا غونشالفِس — الأم وحافظة الوصفات",
          text:
            "تُلهمنا دونا كلوزا: قدور على النار وحكايات ووصفات تتوارثها الأجيال.",
          img: "/heritage/cleusa.jpg",
        },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "قدور طين يدوية الصنع" },
        { src: "/heritage/panela-artesanal.jpg", caption: "صناعة كما تُمليه التقاليد" },
      ],
    },
    wood: {
      title: "موقد الحطب",
      p1:
        "من الأرياف البرازيلية: أخشاب مناسبة وجمر ثابت وصبر — سرّ المرق الغني.",
      p2:
        "نُكرّم هذا الإرث بتقاليدٍ واهتمام بالمكوّن.",
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
    immersiveLabels: {
      amazonia: "الأمازون",
      cerrado: "السِّيرادو",
      lencois: "لِنسويس",
      litoral: "الساحل",
      serra: "الجبال",
    },
  },
};

// util de tradução
const t = (lang, key, fallback = "") => {
  try {
    const val = key.split(".").reduce((o, k) => (o ? o[k] : undefined), dict[lang]);
    return typeof val === "string" ? val : fallback;
  } catch {
    return fallback;
  }
};

/* =============================
   DADOS (HOME / MENU / IMERSÕES)
   ============================= */
const heroImage = "/images/picanha-grelhada.jpg"; // imagem principal do topo

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

/* Menu completo (arquivos da pasta /public/images) */
const MENU_ITEMS = [
  // MAINS
  { id: "picanha", name: "Picanha Grelhada", desc: "Picanha na brasa, ponto perfeito e suculência.", img: "/images/picanha-grelhada.jpg", tags: ["Beef", "Halal"], cat: "mains" },
  { id: "fraldinha", name: "Fraldinha Inteira", desc: "Corte macio servido na tábua, perfeito para compartilhar.", img: "/images/fraldinha-inteira.jpg", tags: ["Beef", "Halal"], cat: "mains" },
  { id: "vaca-atolada", name: "Vaca Atolada (Ossobuco)", desc: "Ossobuco com polenta cremosa e rúcula cítrica.", img: "/images/vaca-atolada.jpg", tags: ["Beef", "Gluten", "Dairy", "Halal"], cat: "mains" },
  { id: "feijoada-costela", name: "Feijoada de Costela", desc: "Feijão preto com costela, farofa de banana e vinagrete.", img: "/images/feijoada-costela.jpg", tags: ["Beef", "Halal"], cat: "mains" },
  { id: "moqueca", name: "Moqueca Baiana", desc: "Peixe no leite de coco, urucum/dendê e coentro.", img: "/images/moqueca-baiana.jpg", tags: ["Sea", "Gluten", "Dairy", "Halal"], cat: "mains" },
  { id: "galinhada", name: "Galinhada Caipira", desc: "Arroz de quintal, frango dourado e cheiro-verde.", img: "/images/galinhada-caipira.jpg", tags: ["Halal"], cat: "mains" },
  { id: "hamburguer-picanha", name: "Hambúrguer de Picanha", desc: "Blend suculento de picanha, pão macio e queijo.", img: "/images/hamburguer-de-picanha.jpg", tags: ["Beef", "Gluten", "Dairy", "Halal"], cat: "mains" },

  // APPETIZERS
  { id: "coxinhas-costela", name: "Coxinhas de Costela", desc: "Clássico brasileiro, recheio suculento de costela.", img: "/images/coxinhas-de-costela.jpg", tags: ["Gluten", "Dairy"], cat: "appetizers" },
  { id: "pasteis", name: "Pastéis Brasileiros", desc: "Pastéis crocantes com recheios variados.", img: "/images/pasteis-brasileiros.jpg", tags: ["Gluten"], cat: "appetizers" },
  { id: "pao-alho", name: "Pão de Alho", desc: "Pão dourado na brasa com manteiga de alho.", img: "/images/pao-de-alho.jpg", tags: ["Gluten", "Dairy"], cat: "appetizers" },
  { id: "polenta-frita", name: "Polenta Frita", desc: "Porção crocante por fora e cremosa por dentro.", img: "/images/polenta-frita.jpg", tags: ["Gluten", "Dairy"], cat: "appetizers" },
  { id: "mandioca-frita", name: "Mandioca Frita", desc: "Raiz brasileira crocante, perfeita para compartilhar.", img: "/images/mandioca-frita.jpg", tags: [], cat: "appetizers" },
  { id: "farofa-castanha", name: "Farofa de Castanha", desc: "Crocrância e sabor para acompanhar os pratos.", img: "/images/farofa-de-castanha.jpg", tags: ["Gluten"], cat: "appetizers" },

  // DESSERTS / SEASONAL
  { id: "mandioca-real", name: "Mandioca Real", desc: "Bolo cremoso de mandioca com coco.", img: "/images/mandioca-real.jpg", tags: ["Dessert", "Dairy", "Gluten"], cat: "desserts" },
  { id: "encanto-coco", name: "Encanto de Coco", desc: "Cocada cremosa servida gelada.", img: "/images/encanto-de-coco.jpg", tags: ["Dessert", "Dairy"], cat: "desserts" },
  { id: "doce-roca-gelo", name: "Doce da Roça com Gelo", desc: "Doce caseiro da fazenda, servido gelado.", img: "/images/doce-da-roca-com-gelo.jpg", tags: ["Dessert"], cat: "desserts" },
  { id: "pamonha", name: "Pamonha Doce (Sazonal)", desc: "Clássico de milho verde — disponível em épocas de safra.", img: "/images/pamonha.jpg", tags: ["Seasonal", "Dessert"], cat: "seasonal" },

  // BEVERAGES
  { id: "caipile", name: "Caipilé Clássico", desc: "Refrescante e cítrico.", img: "/images/caipile-classico.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "uva-limao", name: "Uva, Limão & Gelo", desc: "Doce, ácido e gelado.", img: "/images/uva-limao-gelo.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "blueberry-coco", name: "Blueberry & Coco Fizz", desc: "Frutas e coco em borbulhas tropicais.", img: "/images/blueberry-coco-fizz.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "verao-brasil", name: "Verão Brasil", desc: "Notas cítricas e doçura na medida.", img: "/images/verao-brasil.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "amazonia-breeze", name: "Amazon Breeze", desc: "Ervas e frutas da floresta.", img: "/images/amazon-breeze.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "frescor-amazonia", name: "Frescor da Amazônia", desc: "Suco verde aromático.", img: "/images/frescor-da-amazonia.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "pe-de-serra", name: "Pé de Serra", desc: "Toques de rapadura e limão.", img: "/images/pe-de-serra.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "sol-do-cerrado", name: "Sol do Cerrado", desc: "Manga e maracujá em harmonia.", img: "/images/sol-do-cerrado.jpg", tags: ["Beverage"], cat: "beverages" },
  { id: "vitamina-cerrado", name: "Vitamina do Cerrado", desc: "Cremosa e nutritiva.", img: "/images/vitamina-do-cerrado.jpg", tags: ["Beverage"], cat: "beverages" },
];

/* =============================
   ROTAS (hash)
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
   COMPONENTES BÁSICOS
   ============================= */
const SectionTitle = ({ children }) => <h2 className="title">{children}</h2>;

const Card = ({ children, style }) => (
  <div className="card" style={style}>
    {children}
  </div>
);

const Img = ({ src, alt, ratio = "16/9", round = true }) => (
  <div className={`imgwrap ${round ? "round" : ""}`} style={{ aspectRatio: ratio }}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

const Carousel = ({ items, renderItem, auto = 5000 }) => {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  useEffect(() => {
    if (!auto || items.length <= 1) return;
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
        <div className="modalbody" style={{ maxHeight: "70vh", overflow: "auto" }}>{children}</div>
      </div>
    </div>
  );
};

/* =============================
   PÁGINAS
   ============================= */
const Home = ({ lang }) => {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <Img src={heroImage} alt="Picanha" ratio="21/9" />
        <div className="herooverlay" />
        <div className="heroinfo">
          <h1>{t(lang, "hero.title", "Sabores brasileiros, calor de família")}</h1>
          <p className="sub">
            {t(lang, "hero.subtitle", "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.")}
          </p>
          <p className="soon">{t(lang, "hero.soon", "Inauguração em Novembro — reservas online em breve.")}</p>
          <a className="btn" href="#/menu">{t(lang, "hero.cta", "Ver Menu")}</a>
        </div>
      </div>

      {/* Destaques do Menu (carrossel) */}
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

      {/* Imersões do Brasil (carrossel) */}
      <SectionTitle>{t(lang, "sections.immersive", "Imersões do Brasil")}</SectionTitle>
      <Carousel
        items={immersions}
        renderItem={(item) => (
          <Card>
            <Img src={item.src} alt={item.key} ratio="16/9" />
            <div className="caption">{t(lang, `immersiveLabels.${item.key}`, item.key)}</div>
          </Card>
        )}
        auto={5000}
      />
    </>
  );
};

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

      <div className="tabs">
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
        {filtered.map((item) => (
          <Card key={item.id} style={{ paddingBottom: 12 }}>
            <button className="cardbtn" onClick={() => setOpen(item)}>
              <Img src={item.img} alt={item.name} ratio="16/9" />
              <div className="cardtitle">{item.name}</div>
              <div className="carddesc">{item.desc}</div>
              <div className="tags">
                {item.tags.map((tg) => (
                  <span key={tg} className="tag">{tg}</span>
                ))}
              </div>
            </button>
          </Card>
        ))}
      </div>

      <Modal
        open={!!open}
        onClose={() => setOpen(null)}
        title={open?.name}
      >
        {open && (
          <div>
            <Img src={open.img} alt={open.name} ratio="4/3" round={false} />
            <p style={{ marginTop: 12 }}>{open.desc}</p>
            <div className="tags" style={{ marginTop: 8 }}>
              {open.tags.map((tg) => (
                <span key={tg} className="tag">{tg}</span>
              ))}
            </div>
            <button className="btn" style={{ marginTop: 16 }} onClick={() => setOpen(null)}>
              {t(lang, "menu.modal.close", "Fechar")}
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

const Gallery = ({ lang }) => {
  const imgs = [
    "/heritage/panela-1.jpg",
    "/heritage/panela-artesanal.jpg",
    "/heritage/chef-quessi.jpg",
    "/heritage/chef-alex.jpg",
    "/heritage/cleusa.jpg",
  ];
  return (
    <>
      <SectionTitle>{t(lang, "gallery.title", "Galeria")}</SectionTitle>
      <div className="grid">
        {imgs.map((src, i) => (
          <Card key={i}>
            <Img src={src} alt={`gal-${i}`} ratio="4/3" />
          </Card>
        ))}
      </div>
    </>
  );
};

const WoodFire = ({ lang }) => {
  const { wood } = dict[lang] || dict[DEFAULT_LANG];
  return (
    <>
      <SectionTitle>{wood.title}</SectionTitle>
      <p className="para">{wood.p1}</p>
      <p className="para">{wood.p2}</p>
      <div className="grid">
        {wood.imgs.map((src, i) => (
          <Card key={i}><Img src={src} alt={`fogao-${i}`} ratio="1/1" /></Card>
        ))}
      </div>
    </>
  );
};

const About = ({ lang }) => {
  const { about } = dict[lang] || dict[DEFAULT_LANG];
  const people = about.people;
  return (
    <>
      <SectionTitle>{about.title}</SectionTitle>
      <p className="para">{about.p1}</p>
      <p className="para">{about.p2}</p>
      <p className="para">{about.p3}</p>

      <div className="grid" style={{ marginTop: 12 }}>
        {about.heritageImgs.map((im, i) => (
          <Card key={i}>
            <Img src={im.src} alt={im.caption} ratio="4/3" />
            <div className="caption">{im.caption}</div>
          </Card>
        ))}
      </div>

      <SectionTitle>{about.family}</SectionTitle>
      <div className="grid">
        {[people.quessi, people.alex, people.cleusa].map((p, i) => (
          <Card key={i}>
            {/* quadrado pequeno p/ garantir rosto visível */}
            <Img src={p.img} alt={p.name} ratio="1/1" />
            <div className="cardtitle">{p.name}</div>
            <div className="carddesc">{p.text}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

const Location = ({ lang }) => (
  <>
    <SectionTitle>{t(lang, "nav.location", "Localização")}</SectionTitle>
    <p className="para">Endereço e mapa em breve.</p>
    <a className="link" href="#/home">{t(lang, "sections.back", "Voltar ao início")}</a>
  </>
);

const Support = ({ lang }) => {
  const s = dict[lang]?.support || dict[DEFAULT_LANG].support;
  return (
    <>
      <SectionTitle>{s.title}</SectionTitle>
      <ul className="list">
        {s.items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
      <h3 style={{ marginTop: 16 }}>{s.contactTitle}</h3>
      <p>Tel/WhatsApp: {s.phone}</p>
      <p>Email: {s.email}</p>
      <a className="link" href="#/home" style={{ marginTop: 12, display: "inline-block" }}>
        {t(lang, "sections.back", "Voltar ao início")}
      </a>
    </>
  );
};

/* =============================
   APP (com Navbar + Splash logo)
   ============================= */
export default function App() {
  const [route, go] = useHashRoute();
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [showSplash, setShowSplash] = useState(true);

  // Splash do logo (aparece e some)
  useEffect(() => {
    const id = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    // garante idioma válido
    if (!LANGS.includes(lang)) setLang(DEFAULT_LANG);
  }, [lang]);

  const NavLink = ({ to, children }) => (
    <a
      href={`#/${to}`}
      className={`navlink ${route === to ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        go(to);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="shell">
      {/* Splash */}
      {showSplash && (
        <div className="splash">
          <img src="/logo.png" alt="Panela de Barro" />
        </div>
      )}

      {/* Navbar */}
      <header className="navbar">
        <div className="brand" onClick={() => go("home")} role="button">
          <img src="/logo.png" alt="logo" />
          <span>Panela de Barro</span>
        </div>
        <nav className="nav">
          <NavLink to="about">{t(lang, "nav.about", "Sobre")}</NavLink>
          <NavLink to="menu">{t(lang, "nav.menu", "Menu")}</NavLink>
          <NavLink to="gallery">{t(lang, "nav.gallery", "Galeria")}</NavLink>
          <NavLink to="woodfire">{t(lang, "nav.woodfire", "Fogão a Lenha")}</NavLink>
          <NavLink to="location">{t(lang, "nav.location", "Localização")}</NavLink>
          <NavLink to="support">{t(lang, "nav.support", "Suporte")}</NavLink>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button key={l} className={`chip ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Conteúdo */}
      <main className="content">
        {route === "home" && <Home lang={lang} />}
        {route === "menu" && <Menu lang={lang} />}
        {route === "gallery" && <Gallery lang={lang} />}
        {route === "woodfire" && <WoodFire lang={lang} />}
        {route === "location" && <Location lang={lang} />}
        {route === "support" && <Support lang={lang} />}
        {route === "about" && <About lang={lang} />}
      </main>

      {/* Rodapé */}
      <footer className="footer">© 2025 Panela de Barro</footer>
    </div>
  );
}

/* =============================
   ESTILOS BÁSICOS (inline mínimos)
   -> Usa suas classes existentes; estes mínimos garantem layout ok
   ============================= */
const style = document.createElement("style");
style.innerHTML = `
  :root { --bg:#f1e3d0; --card:#f7efe6; --ink:#2c201a; --muted:#7a5e4e; --brand:#a44a34; }
  body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto; background:var(--bg); color:var(--ink); }
  .shell { min-height:100vh; display:flex; flex-direction:column; }
  .navbar { position:sticky; top:0; z-index:10; background:#fff8f2cc; backdrop-filter:saturate(1.2) blur(6px); display:flex; align-items:center; gap:16px; padding:10px 16px; border-bottom:1px solid #ead9c9; }
  .brand { display:flex; align-items:center; gap:8px; cursor:pointer; font-weight:700; }
  .brand img { width:22px; height:22px; }
  .nav { display:flex; gap:16px; flex-wrap:wrap; }
  .navlink { color:var(--muted); text-decoration:none; }
  .navlink.active { color:var(--ink); font-weight:600; }
  .langs { margin-left:auto; display:flex; gap:6px; }
  .chip { border-radius:999px; border:1px solid #e0cdbc; background:#fff4eb; padding:6px 10px; cursor:pointer; }
  .chip.active { background:var(--brand); color:#fff; border-color:var(--brand); }
  .content { width:min(1100px, 94%); margin:20px auto 40px; }
  .title { font-size:32px; margin:22px 6px; }
  .para { line-height:1.6; color:#4f3b30; margin:8px 6px; }
  .grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap:16px; }
  .card { background:var(--card); border-radius:16px; box-shadow:0 1px 0 #e7d6c7; overflow:hidden; }
  .imgwrap { width:100%; position:relative; overflow:hidden; }
  .imgwrap img { width:100%; height:100%; object-fit:cover; display:block; }
  .imgwrap.round { border-radius:16px 16px 0 0; }
  .caption { padding:10px 12px; color:#2d221c; font-weight:600; }
  .cardbtn { all:unset; cursor:pointer; display:block; }
  .cardtitle { font-size:18px; font-weight:700; padding:10px 12px 0; }
  .carddesc { padding:6px 12px 12px; color:#5f493d; }
  .tags { display:flex; flex-wrap:wrap; gap:6px; padding:0 12px 12px; }
  .tag { font-size:12px; background:#eee2d7; border-radius:999px; padding:4px 8px; color:#6b5449; }
  .btn { display:inline-block; background:var(--brand); color:#fff; padding:10px 18px; border-radius:999px; text-decoration:none; font-weight:700; }
  .link { color:var(--brand); text-decoration:none; }
  .footer { text-align:center; color:#7a5e4e; padding:26px 0 40px; }

  .hero { position:relative; border-radius:20px; overflow:hidden; }
  .herooverlay { position:absolute; inset:0; background:linear-gradient(90deg, #00000066, #00000022 60%, #0000); }
  .heroinfo { position:absolute; inset:auto auto 24px 24px; max-width:min(520px, 90%); color:#fff; }
  .heroinfo h1 { font-size:36px; line-height:1.1; margin:0 0 8px; }
  .heroinfo .sub { margin:0 0 8px; color:#f2e9e4; }
  .heroinfo .soon { margin:0 0 14px; color:#e8d9cf; }

  .carousel { position:relative; }
  .cinner { overflow:hidden; }
  .cbtn { position:absolute; top:50%; transform:translateY(-50%); border:none; background:#00000055; color:#fff; font-size:28px; line-height:1; width:36px; height:36px; border-radius:999px; cursor:pointer; }
  .cbtn.left { left:6px; }
  .cbtn.right { right:6px; }

  .modalbg { position:fixed; inset:0; background:#00000066; display:flex; align-items:center; justify-content:center; padding:16px; z-index:50; }
  .modal { width:min(820px, 96%); background:#fff; border-radius:16px; overflow:hidden; }
  .modalhead { display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:#f6eee6; }
  .modaltitle { font-weight:700; }
  .close { border:none; background:#e9d6c7; border-radius:999px; width:28px; height:28px; cursor:pointer; }
  .modalbody { padding:12px 14px; }

  .splash { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:var(--bg); z-index:100; }
  .splash img { width:56px; height:56px; }
`;
document.head.appendChild(style);