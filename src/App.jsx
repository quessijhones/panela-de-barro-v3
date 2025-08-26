// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";

/* ======================================================
   I18N BÁSICO
   ====================================================== */
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
    gallery: { title: "Galeria (Somente pratos)" },
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
    location: {
      title: "Localização",
      addressLabel: "Endereço",
      back: "Voltar ao início",
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
      p1: "Panela de Barro is a tribute to Brazilian roots: farm cooking, fresh ingredients and wood fire. Our family brings decades of kitchen memories to Doha.",
      p2: "Clay pots cross our history: from indigenous peoples to Afro-Brazilian creativity. Slow cooking lets flavors speak and leaves an unmistakable earthy touch.",
      p3: "That’s the taste we seek in every dish. Tradition, calm and affection — served at the table.",
      family: "Our family",
      people: {
        quessi: { name: "Quessi Jones — Owner", text: "Quessi leads the house and preserves the purpose: cook with soul, welcome with care.", img: "/heritage/chef-quessi.jpg" },
        alex:   { name: "Alex — Head Chef",       text: "Alex runs the kitchen with technique and memory — perfect doneness and steady fire.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "Cleusa Gonçalves — Mother & Recipe Guardian", text: "Dona Cleusa inspires our flavors: pots on the fire, stories and recipes passed down generations.", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Handmade clay pots" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Handcrafted, as tradition dictates" },
      ],
    },
    wood: {
      title: "Wood-Fired Stove",
      p1: "From Brazil’s countryside: right woods, steady embers and patience — the secret of rich broths.",
      p2: "Our kitchen honors this knowledge, uniting tradition and care for the ingredient.",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
    },
    gallery: { title: "Gallery (Dishes only)" },
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
    location: {
      title: "Location",
      addressLabel: "Address",
      back: "Back to start",
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
      subtitle: "مطعم عائلي في قطر. أكثر من 20 عامًا من الضيافة ونار الحطب والجذور البرازيلية.",
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
      p1: "«بانِيلا دي بارّو» تحية للجذور البرازيلية: طبخ ريفي ومكوّنات طازجة ونار الحطب.",
      p2: "قدور الطين جزء من تاريخنا…",
      p3: "هذا ما نبحث عنه في كل طبق…",
      family: "عائلتنا",
      people: {
        quessi: { name: "كِوِسّي جونز — المالكة", text: "تقود كِوِسّي المكان وتحفظ غايته: الطبخ بروح واستقبال بحفاوة.", img: "/heritage/chef-quessi.jpg" },
        alex:   { name: "أليكس — الشيف", text: "يُدير أليكس المطبخ بحرفية وذاكرة ذوقية — نضج مثالي ونار ثابتة.", img: "/heritage/chef-alex.jpg" },
        cleusa: { name: "كلوزا غونشالفِس — الأم وحافظة الوصفات", text: "تُلهمنا دونا كلوزا…", img: "/heritage/cleusa.jpg" },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "قدور طين يدوية الصنع" },
        { src: "/heritage/panela-artesanal.jpg", caption: "صناعة كما تُمليه التقاليد" },
      ],
    },
    wood: {
      title: "موقد الحطب",
      p1: "من الأرياف البرازيلية…",
      p2: "نُكرّم هذا الإرث…",
      imgs: ["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"],
    },
    gallery: { title: "المعرض (أطباق فقط)" },
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
    location: {
      title: "الموقع",
      addressLabel: "العنوان",
      back: "العودة للبداية",
    },
  },
};

const t = (lang, key, fallback) => {
  const path = key.split(".");
  let cur = dict?.[lang];
  for (const k of path) cur = cur?.[k];
  return typeof cur === "string" ? cur : fallback;
};

/* ======================================================
   DADOS
   ====================================================== */
const heroImage = "/images/picanha-grelhada.jpg";

const highlights = [
  { label: "Fraldinha Inteira", src: "/images/fraldinha-inteira.jpg" },
  { label: "Galinhada Caipira", src: "/images/galinhada-caipira.jpg" },
  { label: "Rubacão", src: "/images/rubacao.jpg" },
  { label: "Pão de Queijo da Casa", src: "/images/pao-de-queijo.jpg" },
];

const immersions = [
  { key: "amazonia", src: "/immersive/amazonia.jpg" },
  { key: "cerrado",  src: "/immersive/cerrado.jpg" },
  { key: "lencois",  src: "/immersive/lencois.jpg" },
  { key: "litoral",  src: "/immersive/litoral.jpg" },
  { key: "serra",    src: "/immersive/serra.jpg" },
];

const MENU_ITEMS = [
  // mains
  { id:"picanha", name:"Picanha Grelhada", desc:"Picanha na brasa, ponto perfeito e suculência.", img:"/images/picanha-grelhada.jpg", tags:["Halal","Beef"], cat:"mains" },
  { id:"fraldinha", name:"Fraldinha Inteira", desc:"Corte macio servido na tábua, perfeito para compartilhar.", img:"/images/fraldinha-inteira.jpg", tags:["Halal","Beef"], cat:"mains" },
  { id:"vaca-atolada", name:"Vaca Atolada (Ossobuco)", desc:"Ossobuco com polenta cremosa e rúcula cítrica.", img:"/images/vaca-atolada.jpg", tags:["Halal","Beef","Gluten","Dairy"], cat:"mains" },
  { id:"feijoada-costela", name:"Feijoada de Costela", desc:"Feijão preto com costela, farofa de banana e vinagrete.", img:"/images/feijoada-costela.jpg", tags:["Halal","Beef"], cat:"mains" },
  { id:"moqueca", name:"Moqueca Baiana", desc:"Peixe no leite de coco, urucum/dendê e coentro.", img:"/images/moqueca-baiana.jpg", tags:["Halal","Gluten","Dairy"], cat:"mains" },
  { id:"galinhada", name:"Galinhada Caipira", desc:"Arroz de quintal, frango dourado e cheiro-verde.", img:"/images/galinhada-caipira.jpg", tags:["Halal"], cat:"mains" },
  { id:"hamburguer-picanha", name:"Hambúrguer de Picanha", desc:"Blend suculento de picanha, pão macio e queijo.", img:"/images/hamburguer-de-picanha.jpg", tags:["Halal","Beef","Gluten","Dairy"], cat:"mains" },

  // appetizers
  { id:"coxinhas-costela", name:"Coxinhas de Costela", desc:"Clássico brasileiro, recheio suculento de costela.", img:"/images/coxinhas-de-costela.jpg", tags:["Gluten","Dairy"], cat:"appetizers" },
  { id:"pasteis", name:"Pastéis Brasileiros", desc:"Pastéis crocantes com recheios variados.", img:"/images/pasteis-brasileiros.jpg", tags:["Gluten"], cat:"appetizers" },
  { id:"pao-alho", name:"Pão de Alho", desc:"Pão dourado na brasa com manteiga de alho.", img:"/images/pao-de-alho.jpg", tags:["Gluten","Dairy"], cat:"appetizers" },
  { id:"polenta-frita", name:"Polenta Frita", desc:"Porção crocante por fora e cremosa por dentro.", img:"/images/polenta-frita.jpg", tags:["Gluten","Dairy"], cat:"appetizers" },
  { id:"mandioca-frita", name:"Mandioca Frita", desc:"Raiz brasileira crocante, perfeita para compartilhar.", img:"/images/mandioca-frita.jpg", tags:[], cat:"appetizers" },
  { id:"farofa-castanha", name:"Farofa de Castanha", desc:"Crocrância e sabor para acompanhar os pratos.", img:"/images/farofa-de-castanha.jpg", tags:["Gluten"], cat:"appetizers" },

  // desserts
  { id:"mandioca-real", name:"Mandioca Real", desc:"Bolo cremoso de mandioca com coco.", img:"/images/mandioca-real.jpg", tags:["Dessert","Dairy","Gluten"], cat:"desserts" },
  { id:"encanto-coco", name:"Encanto de Coco", desc:"Cocada cremosa servida gelada.", img:"/images/encanto-de-coco.jpg", tags:["Dessert","Dairy"], cat:"desserts" },
  { id:"doce-roca-gelo", name:"Doce da Roça com Gelo", desc:"Doce caseiro da fazenda, servido gelado.", img:"/images/doce-da-roca-com-gelo.jpg", tags:["Dessert"], cat:"desserts" },
  { id:"pamonha", name:"Pamonha Doce (Sazonal)", desc:"Clássico de milho verde — disponível em épocas de safra.", img:"/images/pamonha.jpg", tags:["Seasonal","Dessert"], cat:"seasonal" },

  // beverages
  { id:"caipile", name:"Caipilé Clássico", desc:"Refrescante e cítrico.", img:"/images/caipile-classico.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"uva-limao", name:"Uva, Limão & Gelo", desc:"Doce, ácido e gelado.", img:"/images/uva-limao-gelo.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"blueberry-coco", name:"Blueberry & Coco Fizz", desc:"Frutas e coco em borbulhas tropicais.", img:"/images/blueberry-coco-fizz.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"verao-brasil", name:"Verão Brasil", desc:"Notas cítricas e doçura na medida.", img:"/images/verao-brasil.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"amazonia-breeze", name:"Amazon Breeze", desc:"Ervas e frutas da floresta.", img:"/images/amazon-breeze.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"frescor-amazonia", name:"Frescor da Amazônia", desc:"Suco verde aromático.", img:"/images/frescor-da-amazonia.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"pe-de-serra", name:"Pé de Serra", desc:"Toques de rapadura e limão.", img:"/images/pe-de-serra.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"sol-do-cerrado", name:"Sol do Cerrado", desc:"Manga e maracujá em harmonia.", img:"/images/sol-do-cerrado.jpg", tags:["Beverage"], cat:"beverages" },
  { id:"vitamina-cerrado", name:"Vitamina do Cerrado", desc:"Cremosa e nutritiva.", img:"/images/vitamina-do-cerrado.jpg", tags:["Beverage"], cat:"beverages" },
];

/* ====== Endereço (edite quando tiver o final) ====== */
const ADDRESS_LINES = {
  pt: ["Doha, Qatar"],
  en: ["Doha, Qatar"],
  ar: ["الدوحة، قطر"],
};
// ajuste o query do mapa quando souber o endereço exato
const MAP_QUERY = "Doha, Qatar";

/* ======================================================
   UTILS / COMPONENTES
   ====================================================== */
const useHashRoute = () => {
  const [route, setRoute] = useState(
    typeof window !== "undefined"
      ? window.location.hash.replace("#/", "") || "home"
      : "home"
  );
  useEffect(() => {
    const onChange = () =>
      setRoute(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return [route, (r) => (window.location.hash = `#/${r}`)];
};

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
    if (!auto || !items?.length) return;
    const id = setInterval(next, auto);
    return () => clearInterval(id);
  }, [auto, items?.length]);
  if (!items?.length) return null;
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

/* ======================================================
   PÁGINAS
   ====================================================== */
const Home = ({ lang }) => (
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

    {/* Destaques do Menu */}
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

    {/* Imersões */}
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

const Menu = ({ lang }) => {
  const tabs = useMemo(
    () => [
      { key: "all",        label: t(lang, "menu.tabs.all", "Todos") },
      { key: "mains",      label: t(lang, "menu.tabs.mains", "Pratos") },
      { key: "appetizers", label: t(lang, "menu.tabs.appetizers", "Entradas") },
      { key: "seasonal",   label: t(lang, "menu.tabs.seasonal", "Sazonais") },
      { key: "beverages",  label: t(lang, "menu.tabs.beverages", "Bebidas") },
      { key: "desserts",   label: t(lang, "menu.tabs.desserts", "Sobremesas") },
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
        title={open?.name || ""}
      >
        {open && (
          <>
            <Img src={open.img} alt={open.name} ratio="4/3" />
            <p style={{ marginTop: 12 }}>{open.desc}</p>
            <div className="tags" style={{ marginTop: 8 }}>
              {open.tags.map((tg) => (
                <span key={tg} className="tag">{tg}</span>
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

const About = ({ lang }) => {
  const p = dict[lang].about;
  // imagens de família em tamanho menor/quadrado conforme pedido
  const people = [
    p.people.quessi,
    p.people.alex,
    p.people.cleusa,
  ];
  return (
    <>
      <SectionTitle>{p.title}</SectionTitle>
      <p>{p.p1}</p>
      <p>{p.p2}</p>
      <p>{p.p3}</p>

      <div className="heritage">
        {p.heritageImgs.map((h) => (
          <Card key={h.src}>
            <Img src={h.src} alt={h.caption} ratio="4/3" />
            <div className="caption">{h.caption}</div>
          </Card>
        ))}
      </div>

      <SectionTitle>{p.family}</SectionTitle>
      <div className="people">
        {people.map((pp) => (
          <Card key={pp.name}>
            <Img src={pp.img} alt={pp.name} ratio="1/1" />
            <div className="cardtitle">{pp.name}</div>
            <div className="carddesc">{pp.text}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

const WoodFire = ({ lang }) => {
  const w = dict[lang].wood;
  return (
    <>
      <SectionTitle>{w.title}</SectionTitle>
      <p>{w.p1}</p>
      <p>{w.p2}</p>
      <div className="heritage">
        {w.imgs.map((src) => (
          <Card key={src}>
            <Img src={src} alt="Fogão a lenha" ratio="1/1" />
          </Card>
        ))}
      </div>
    </>
  );
};

const Gallery = ({ lang }) => {
  // SOMENTE FOTOS DOS PRATOS (pego de MENU_ITEMS)
  const pics = Array.from(
    new Map(MENU_ITEMS.map((i) => [i.img, { src: i.img, name: i.name }])).values()
  );
  return (
    <>
      <SectionTitle>{t(lang, "gallery.title", "Galeria")}</SectionTitle>
      <div className="heritage">
        {pics.map((p) => (
          <Card key={p.src}>
            <Img src={p.src} alt={p.name} ratio="4/3" />
            <div className="caption">{p.name}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

const Location = ({ lang }) => {
  const addrLabel = t(lang, "location.addressLabel", "Endereço");
  const title = t(lang, "location.title", "Localização");
  const back = t(lang, "sections.back", "Voltar ao início");
  const lines = ADDRESS_LINES[lang] || ADDRESS_LINES.pt;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`;
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <h3 style={{ marginTop: 8 }}>{addrLabel}</h3>
      <p>{lines.join(" • ")}</p>
      <div className="mapwrap">
        <iframe
          src={mapSrc}
          title="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a href="#/home" className="backlink">{back}</a>
    </>
  );
};

const Support = ({ lang }) => {
  const s = dict[lang].support;
  return (
    <>
      <SectionTitle>{s.title}</SectionTitle>
      <ul className="bullets">
        {s.items.map((it) => <li key={it}>{it}</li>)}
      </ul>
      <h3 style={{ marginTop: 24 }}>{s.contactTitle}</h3>
      <p>WhatsApp: {s.phone}</p>
      <p>E-mail: {s.email}</p>
      <a href="#/home" className="backlink">{t(lang, "sections.back", "Voltar ao início")}</a>
    </>
  );
};

/* ======================================================
   APP
   ====================================================== */
export default function App() {
  const [route, nav] = useHashRoute();
  const [lang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    const hashLang = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(hashLang)) setLang(hashLang);
  }, []);

  const NavLink = ({ r, children }) => (
    <a
      href={`#/${r}`}
      className={`navlink ${route === r ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        nav(r);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="page">
      <header className="topbar">
        <a href="#/home" className="brand">
          <span className="emoji">🥘</span> Panela de Barro
        </a>
        <nav className="nav">
          <NavLink r="about">{t(lang, "nav.about", "Sobre")}</NavLink>
          <NavLink r="menu">{t(lang, "nav.menu", "Menu")}</NavLink>
          <NavLink r="gallery">{t(lang, "nav.gallery", "Galeria")}</NavLink>
          <NavLink r="woodfire">{t(lang, "nav.woodfire", "Fogão a Lenha")}</NavLink>
          <NavLink r="location">{t(lang, "nav.location", "Localização")}</NavLink>
          <NavLink r="support">{t(lang, "nav.support", "Suporte")}</NavLink>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button key={l} className={`chip ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="content">
        {route === "home" && <Home lang={lang} />}
        {route === "about" && <About lang={lang} />}
        {route === "menu" && <Menu lang={lang} />}
        {route === "gallery" && <Gallery lang={lang} />}
        {route === "woodfire" && <WoodFire lang={lang} />}
        {route === "location" && <Location lang={lang} />}
        {route === "support" && <Support lang={lang} />}
      </main>

      <footer className="foot">© 2025 Panela de Barro</footer>

      {/* CSS mínimo para manter o layout que você já está usando */}
      <style>{`
        :root {
          --bg:#f2e6d7; --card:#f7efe7; --ink:#2b2019; --muted:#6b5a50;
          --accent:#a4563b; --chip:#eadfd5;
        }
        * { box-sizing:border-box; }
        body, html, #root { height:100%; }
        .page { min-height:100%; background:var(--bg); color:var(--ink); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; }
        a { color: var(--accent); text-decoration: none; }
        .topbar{position:sticky;top:0;z-index:10;background:#fff9;backdrop-filter:saturate(180%) blur(10px);display:flex;gap:16px;align-items:center;padding:10px 16px;border-bottom:1px solid #0001}
        .brand{font-weight:700;color:var(--ink);display:flex;align-items:center;gap:8px}
        .emoji{font-size:18px}
        .nav{display:flex;gap:14px;flex-wrap:wrap}
        .navlink{padding:6px 8px;border-radius:8px}
        .navlink.active{background:var(--chip)}
        .langs{margin-left:auto;display:flex;gap:6px}
        .chip{border:0;background:var(--chip);padding:6px 10px;border-radius:999px;color:var(--ink)}
        .chip.active{background:var(--accent);color:#fff}
        .content{max-width:1080px;margin:24px auto;padding:0 16px}
        .title{font-size:28px;margin:18px 0}
        .card{background:var(--card); border-radius:18px; padding:10px; box-shadow: 0 2px 6px #00000014;}
        .imgwrap{width:100%; overflow:hidden;}
        .imgwrap.round{border-radius:16px}
        .imgwrap img{width:100%; height:100%; object-fit:cover; display:block;}
        .caption{margin-top:8px; color:var(--muted)}
        .grid{display:grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap:16px; margin-top:14px}
        .cardbtn{all:unset; display:block; cursor:pointer}
        .cardtitle{font-weight:700; margin-top:10px}
        .carddesc{color:var(--muted); margin-top:4px}
        .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
        .tag{background:#00000010;padding:4px 8px;border-radius:999px;font-size:12px;color:var(--muted)}
        .bullets{margin:8px 0 0 18px}
        .heritage{display:grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap:16px}
        .people{display:grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap:16px}
        .hero{position:relative}
        .herooverlay{position:absolute;inset:0;background:linear-gradient(180deg, #0000 30%, #0005 100%);border-radius:16px}
        .heroinfo{position:absolute; left:24px; bottom:24px; color:#fff; max-width:640px}
        .heroinfo .sub{opacity:.9}
        .heroinfo .soon{opacity:.9;margin:6px 0 14px}
        .btn{background:var(--accent);color:#fff;padding:10px 16px;border-radius:999px}
        .carousel{position:relative;margin:8px 0 18px}
        .cinner{overflow:hidden}
        .cbtn{position:absolute; top:50%; transform:translateY(-50%); width:36px;height:36px;border:0;border-radius:50%; background:#fff; box-shadow:0 2px 6px #0002; cursor:pointer}
        .cbtn.left{left:6px} .cbtn.right{right:6px}
        .modalbg{position:fixed; inset:0; background:#0008; display:grid; place-items:center; padding:16px}
        .modal{background:#fff; max-width:860px; width:100%; border-radius:16px; overflow:hidden}
        .modalhead{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid #0001}
        .modaltitle{font-weight:700}
        .close{border:0;background:#0000;font-size:22px;cursor:pointer}
        .modalbody{padding:12px 14px}
        .mapwrap{margin:12px 0; height:360px; border-radius:16px; overflow:hidden; box-shadow:0 2px 6px #0001}
        .mapwrap iframe{width:100%; height:100%; border:0}
        .backlink{display:inline-block;margin-top:12px}
        .foot{opacity:.7; text-align:center; padding:28px 0}
        @media (max-width:600px){
          .heroinfo h1{font-size:28px}
          .title{font-size:24px}
        }
      `}</style>
    </div>
  );
}