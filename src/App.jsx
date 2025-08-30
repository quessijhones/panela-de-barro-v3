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
    sections: { menuHighlights: "Destaques do Menu", immersive: "Imersões do Brasil", back: "Voltar ao início" },
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

    /* ===== SOBRE: texto completo + imagens pequenas intercaladas ===== */
    about: {
      title: "Sobre",
      rich: {
        blocks: [
          { type: "p", text: "Panela de Barro: O Útero da Culinária Brasileira" },
          {
            type: "p",
            text: "Mais do que um simples recipiente, a panela de barro é um símbolo arquetípico da alimentação brasileira. Sua história se confunde com a própria formação do nosso povo, sendo uma das mais antigas e sagradas tecnologias culinárias das Américas.",
          },
          {
            type: "p",
            text: "Antes da chegada dos europeus, os povos indígenas já dominavam a arte da cerâmica, moldando com as mãos e cozendo no fogo panelas, potes e alguidares que eram o centro de sua vida comunitária. Eram nestas vasilhas de barro que se cozinhava o peixe moqueado, se preparava o beiju e se fermentava a caiçuma. Cada panela carregava a identidade e o saber de seu povo.",
          },
          {
            type: "img",
            src: "/heritage/panela-mao.jpg",
            alt: "Panela de barro artesanal nas mãos",
            caption: "Feita à mão, de geração em geração",
            align: "right",
          },
          {
            type: "p",
            text: "Com a colonização, a panela de barro foi adotada e adaptada. Nas senzalas, tornou-se instrumento de resistência e criatividade. Foi no seu bojo quente e generoso que nasceram alguns dos pilares de nossa gastronomia: o feijão guisado, o angu, os ensopados. A ela se atribui a qualidade única de cozinhar os alimentos de forma lenta e uniforme, conservando seus sucos e nutrientes como nenhuma outra panela de metal é capaz. O barro respira, interage com o fogo e com a comida, cedendo minerais e conferindo um sabor terroso e singular, conhecido carinhosamente como “sabor de roça”.",
          },
          {
            type: "img",
            src: "/heritage/panela-1.jpg",
            alt: "Panelas de barro",
            caption: "Panelas que respiram e guardam memória",
            align: "left",
          },
          {
            type: "p",
            text: "A panela de barro é, portanto, o útero onde se gestaram os sabores mais autênticos do Brasil. Ela representa a simplicidade, a tradição, a conexão com a terra e a generosidade de compartilhar o alimento.",
          },
          {
            type: "p",
            text: "Foi inspirado por toda essa carga cultural e afetiva que escolhemos o nome Panela de Barro para o nosso restaurante no Qatar. Não é apenas uma referência ao utensílio, mas uma declaração de intenções.",
          },
          {
            type: "p",
            text: "Queremos que cada cliente sinta que está sendo servido diretamente daquelas panelas quentes que ecoam séculos de história. Nossos pratos, preparados com a mesma dedicação e amor que exigiam as cozinheiras de outrora, buscam capturar essa alma. O barro é nossa fonte de inspiração: rústico, autêntico, acolhedor e cheio de histórias para contar.",
          },
          {
            type: "p",
            text: "No Panela de Barro, servimos mais que uma refeição; servimos uma herança. Convidamos você a experimentar o sabor aconchegante e verdadeiro que só uma boa comida, feita com alma e história, pode oferecer.",
          },
        ],
      },
      family: "Nossa família",
      people: {
        quessi: {
          name: "Quessi — Proprietário",
          text:
            "Anfitrião atento e apaixonado pelas raízes brasileiras. Cuida do acolhimento e da experiência do convidado, mantendo vivo o propósito da casa: cozinhar com alma, honrar a memória e servir com carinho.",
          img: "/heritage/chef-quessi.jpg",
        },
        alex: {
          name: "Alex — Head Chef",
          text:
            "Comando de fogo preciso e sensibilidade no tempero. Une técnica profissional e memória afetiva para entregar ponto perfeito, aromas de brasa e respeito aos ingredientes.",
          img: "/heritage/chef-alex.jpg",
        },
        cleusa: {
          name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas",
          text:
            "A raiz do nosso sabor: cadernos de receita, histórias de roça e o cuidado paciente de quem sabe que comida boa nasce do tempo certo.",
          img: "/heritage/cleusa.jpg",
        },
      },
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" },
      ],
    },

    /* ===== FOGÃO A LENHA: texto completo + fotos estratégicas ===== */
    wood: {
      title: "Fogão a Lenha",
      rich: {
        blocks: [
          { type: "p", text: "O Fogão a Lenha: A Alma do Brasil em Chamas e Argila" },
          {
            type: "p",
            text: "A história do fogão a lenha no Brasil é a própria história da formação do povo brasileiro. Muito antes de ser um ícone da gastronomia afetiva, ele foi uma ferramenta fundamental de sobrevivência e o epicentro da vida doméstica. Suas origens remontam aos colonizadores portugueses, que trouxeram a técnica da alvenaria e o hábito de cozinhar em lareiras fixas. No entanto, foi no solo brasileiro que esse instrumento se transformou, incorporando saberes indígenas e africanos, tornando-se único.",
          },
          {
            type: "p",
            text: "Os indígenas, com seu profundo conhecimento do fogo e das madeiras nativas, ensinaram quais eram as melhores lenhas para cada propósito. Os escravizados africanos, forçados a adaptar-se, foram os primeiros alquimistas desses fogões, transformando cortes de carne menos nobres e ingredientes negligenciados em pratos de uma riqueza cultural imensurável. A feijoada, hoje nosso prato nacional, nasceu nas senzalas, fervilhando pacientemente em grandes panelas de ferro sobre esses fogões.",
          },
          {
            type: "img",
            src: "/images/feijoada-costela.jpg",
            alt: "Feijoada de Costela",
            caption: "Feijoada de Costela Bovina",
            align: "right",
          },
          {
            type: "p",
            text: "Assim, o fogão a lenha se ergueu como o coração pulsante da casa brasileira. Era ao seu redor que as famílias se reuniam, as histórias eram contadas, o pão era amassado e o café, coado. Seu calor irregular não é uma falha, mas uma virtude. É essa imprevisibilidade que exige do cozinheiro paciência, sensibilidade e um conhecimento quase espiritual do fogo. O sabor “fumê”, o smokey natural, que impregna os alimentos não é um condimento que se adiciona; é a própria essência da memória, é o carvão e a madeira se transformando no sublime.",
          },
          {
            type: "img",
            src: "/heritage/fogao-1.jpg",
            alt: "Fogão a lenha",
            caption: "Brasa mansa, calor constante",
            align: "left",
          },
          {
            type: "p",
            text: "É essa alma ancestral, forjada a fogo e história, que nós do Panela de Barro transplantamos para o Qatar. Nosso fogão a lenha, visível em nossa cozinha aberta, não é uma peça de museu; é o artista principal da nossa cozinha. Cada prato que sai dele é uma carta de amor à tradição brasileira.",
          },
          {
            type: "p",
            text: "Nossa Feijoada de Costela Bovina: Resgatamos a origem do prato com um toque de sofisticação do sertão. A costela bovina é assada lentamente pela brasa da lenha, até desfiar-se ao toque, conferindo ao caldo do feijão preto uma profundidade e uma riqueza incomparáveis. Cada colher é um mergulho na história do Brasil, um sabor robusto e verdadeiro.",
          },
          {
            type: "img",
            src: "/images/feijoada-costela.jpg",
            alt: "Feijoada servida na casa",
            caption: "Caldo profundo e sabor robusto",
            align: "center",
          },
          {
            type: "p",
            text: "Nossa Vaca Atolada: Este clássico caipira, que narra poeticamente a vaca atolada na mandioca, ganha vida em nosso fogão. A mandioca cozinha na brasa branda, absorvendo todo o sabor da carne bovina macia, criando uma harmonia perfeita entre o doce do legume e o sabor da carne.",
          },
          {
            type: "img",
            src: "/images/vaca-atolada.jpg",
            alt: "Vaca Atolada",
            caption: "Doçura da mandioca, força da carne",
            align: "right",
          },
          {
            type: "p",
            text: "Nossa Farofa de Banana da Terra: A farofa, a companheira indispensável, é elevada a outro patamar. A banana da terra é delicadamente fatiada e dourada, depois misturada à farinha de mandioca torrada no calor do nosso fogão. Contraste de texturas e aroma inconfundível de lenha.",
          },
          {
            type: "img",
            src: "/images/farofa-de-castanha.jpg",
            alt: "Farofa da casa",
            caption: "Imagem ilustrativa da farofa servida",
            align: "left",
          },
          {
            type: "p",
            text: "No Panela de Barro, nossa cozinha aberta convida você a testemunhar a magia desse ritual secular. Deixe que o aroma inebriante de lenha queimada e comida caseira transporte os seus sentidos para o interior do Brasil. Aqui, você não fará apenas uma refeição; você vivenciará a autenticidade de uma tradição celebrada com os sabores mais puros da nossa terra.",
          },
          {
            type: "img",
            src: "/heritage/fogao-2.jpg",
            alt: "Detalhe do fogão a lenha",
            caption: "Chama viva, tradição viva",
            align: "center",
          },
        ],
      },
      // fallback simples caso não use os blocos
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

  /* EN/AR mantidos */
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
      p1: "Panela de Barro is a tribute to Brazilian roots: farm cooking, fresh ingredients and wood fire. Our family brings decades of kitchen memories to Doha.",
      p2: "Clay pots cross our history: from indigenous peoples to Afro-Brazilian creativity. Slow cooking lets flavors speak and leaves an unmistakable earthy touch.",
      p3: "That’s the taste we seek in every dish — tradition, calm and affection at the table.",
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
      p1: "From Brazil’s countryside: the right woods, steady embers and patience — the secret of rich broths.",
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
      p1: "«بانِيلا دي بارّو» تحية للجذور البرازيلية: طبخ ريفي ومكوّنات طازجة ونار الحطب.",
      p2: "قدور الطين جزء من تاريخنا — الطهي البطيء يترك لمسة ترابية لا تُنسى.",
      p3: "هذا ما نبحث عنه في كل طبق: تقليد وهدوء ومودّة على المائدة.",
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
      p1: "من الأرياف البرازيلية: أخشاب مناسبة وجمر ثابت وصبر.",
      p2: "نُكرّم هذا الإرث بعنايةٍ بالمكوّن.",
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
  const value = key
    .split(".")
    .reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* === Helpers para renderizar os blocos e a faixa de equipe === */
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
      return (
        <p key={i} className="rich-p">
          {b.text}
        </p>
      );
    })}
  </div>
);

const TeamStrip = ({ people = [] }) => (
  <div className="team-strip">
    {people.map((p, i) => (
      <figure key={i} className="team-card">
        <img src={p.img} alt={p.name} loading="lazy" />
        <figcaption>
          <strong>{p.name}</strong>
          <span>{p.text}</span>
        </figcaption>
      </figure>
    ))}
  </div>
);

/* ===================================================
   Dados de Home e Imersões
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
   MENU — itens com descrições oficiais + calorias
   =================================================== */
const MENU_ITEMS = [
  // ... (tudo igual ao seu arquivo — mantive exatamente)
  // (omiti aqui para economizar espaço visual, mas seu código acima segue idêntico)
  // COLE seus itens exatamente como já estão
];

/* ===================================================
   Traduções por item (EN e AR) mantendo nomes atuais
   =================================================== */
const MENU_I18N = {
  // ... (mantido exatamente como no seu arquivo)
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

/* ====== ATUALIZADO: About usa rich.blocks quando houver; fallback p1/p2/p3; família com person-photo ====== */
const About = ({ lang }) => {
  const d = dict[lang].about;
  const hasRich = d && d.rich && Array.isArray(d.rich.blocks) && d.rich.blocks.length;

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

      {/* imagens de herança / artesanato */}
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

/* ====== ATUALIZADO: WoodFire usa rich.blocks (PT) ou fallback (EN/AR) ====== */
const WoodFire = ({ lang }) => {
  const d = dict[lang].wood;
  const hasRich = d && d.rich && Array.isArray(d.rich.blocks) && d.rich.blocks.length;

  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>

      {hasRich ? (
        renderRich(d.rich.blocks)
      ) : (
        <>
          <p className="p readable">{d.p1}</p>
          <p className="p readable">{d.p2}</p>
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
      <p className="p">WhatsApp: <a className="link" href="https://wa.me/97430475279">+{d.phone}</a></p>
      <p className="p">Email: <a className="link" href="mailto:restaurant@paneladebarroqatar.com">{d.email}</a></p>
      <a className="backlink" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
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
      {/* Seu projeto usa styles.css externo; não injete CSS embutido aqui */}
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