import React, { useEffect, useMemo, useState } from "react";

/* =========================================
   Idiomas (PT como padrão) + dicionário UI
   ========================================= */
const LANGS = ["pt", "en", "ar"];
const DEFAULT_LANG = "pt";

// --- INCLUINDO OS TEXTOS HISTÓRICOS E TIME ---
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
    about: {
      title: "Sobre",
      p1: "Mais do que um simples recipiente, a panela de barro é um símbolo arquetípico da alimentação brasileira. Sua história se confunde com a própria formação do nosso povo, sendo uma das mais antigas e sagradas tecnologias culinárias das Américas.",
      p2: "Antes da chegada dos europeus, os povos indígenas já dominavam a arte da cerâmica, moldando com as mãos e cozendo no fogo panelas, potes e alguidares que eram o centro de sua vida comunitária. Eram nestas vasilhas de barro que se cozinhava o peixe moqueado, se preparava o beiju e se fermentava a caiçuma. Cada panela carregava a identidade e o saber de seu povo.",
      p3: "Com a colonização, a panela de barro foi adotada e adaptada. Nas senzalas, tornou-se instrumento de resistência e criatividade. Foi no seu bojo quente e generoso que nasceram alguns dos pilares de nossa gastronomia: o feijão guisado, o angu, os ensopados. A ela se atribui a qualidade única de cozinhar os alimentos de forma lenta e uniforme, conservando seus sucos e nutrientes como nenhuma outra panela de metal é capaz. O barro respira, interage com o fogo e com a comida, cedendo minerais e conferindo um sabor terroso e singular, conhecido carinhosamente como \"sabor de roça\".",
      p4: "A panela de barro é, portanto, o útero onde se gestaram os sabores mais autênticos do Brasil. Ela representa a simplicidade, a tradição, a conexão com a terra e a generosidade de compartilhar o alimento.",
      p5: "Foi inspirado por toda essa carga cultural e afetiva que escolhemos o nome Panela de Barro para o nosso restaurante no Qatar. Não é apenas uma referência ao utensílio, mas uma declaração de intenções. Queremos que cada cliente sinta que está sendo servido diretamente daquelas panelas quentes que ecoam séculos de história.",
      heritageImgs: [
        { src: "/heritage/panela-1.jpg", caption: "Panelas artesanais de barro" },
        { src: "/heritage/panela-artesanal.jpg", caption: "Feita à mão, como manda a tradição" }
      ],
      teamTitle: "Nosso Time",
      people: {
        quessi: { name: "Quessi Jones — Proprietário", text: "Conduz a casa, preserva o propósito: cozinhar com alma, acolher com carinho.", img: "/heritage/chef-quessi.jpg" },
        mae: { name: "Cleusa Gonçalves — Mãe & Guardiã das Receitas", text: "Inspiração dos sabores, histórias e receitas passadas de geração em geração.", img: "/heritage/cleusa.jpg" },
        irmao: { name: "Alex — Chef de Cozinha", text: "Técnica e memória afetiva — ponto perfeito e fogo certo.", img: "/heritage/chef-alex.jpg" }
      }
    },
    wood: {
      title: "Fogão a Lenha: A Alma do Brasil em Chamas e Argila",
      intro: "A história do fogão a lenha no Brasil é a própria história da formação do povo brasileiro. Muito antes de ser um ícone da gastronomia afetiva, ele foi uma ferramenta fundamental de sobrevivência e o epicentro da vida doméstica.",
      imgs: ["/heritage/fogao-1.jpg"],
      p1: "Os indígenas, com seu profundo conhecimento do fogo e das madeiras nativas, ensinaram quais eram as melhores lenhas para cada propósito. Os escravizados africanos, forçados a adaptar-se, foram os primeiros alquimistas desses fogões, transformando cortes de carne menos nobres e ingredientes negligenciados em pratos de uma riqueza cultural imensurável.",
      p2: "Assim, o fogão a lenha se ergueu como o coração pulsante da casa brasileira. Era ao seu redor que as famílias se reuniam, as histórias eram contadas, o pão era amassado e o café, coado. Seu calor irregular não é uma falha, mas uma virtude. É essa imprevisibilidade que exige do cozinheiro paciência, sensibilidade e um conhecimento quase espiritual do fogo.",
      p3: "É essa alma ancestral, forjada a fogo e história, que nós do Panela de Barro transplantamos para o Qatar. Nosso fogão a lenha, visível em nossa cozinha aberta, não é uma peça de museu; é o artista principal da nossa cozinha. Cada prato que sai dele é uma carta de amor à tradição brasileira.",
      pratos: [
        { name: "Feijoada de Costela Bovina", desc: "A costela bovina é assada lentamente pela brasa da lenha, até desfiar-se ao toque, conferindo ao caldo do feijão preto uma profundidade e uma riqueza incomparáveis.", img: "/images/feijoada-costela.jpg" },
        { name: "Vaca Atolada", desc: "A mandioca cozinha na brasa branda, absorvendo todo o sabor da carne bovina macia, criando uma harmonia perfeita entre o doce do legume e o savor da carne.", img: "/images/vaca-atolada.jpg" },
        { name: "Farofa de Banana da Terra", desc: "A banana da terra é delicadamente fatiada e dourada, depois misturada à farinha de mandioca torrada no calor do nosso fogão.", img: "/images/farofa-de-castanha.jpg" }
      ],
      outro: "No Panela de Barro, nossa cozinha aberta convida você a testemunhar a magia desse ritual secular. Deixe que o aroma inebriante de lenha queimada e comida caseira transporte os seus sentidos para o interior do Brasil.",
      convite: "Venha. O fogo está aceso."
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
  // -- ENGLISH & ARABIC: Mesma estrutura, apenas mude os textos. Veja resposta anterior para texto completo. --
  // ... EN & AR omitted for brevity, but should follow the same as above.
};

// util de texto
const t = (lang, key, fallback = "") => {
  const value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict[lang]);
  return typeof value === "string" ? value : fallback;
};

/* ... MANTENHA TODO O RESTANTE DA LÓGICA COMO ESTAVA ... */

/* =============================
   EFEITO FUMACA E ANIMAÇÕES
   ============================= */
// Efeito de fumaça SVG animado
const SmokeEffect = () => (
  <div className="smoke-bg">
    <svg viewBox="0 0 800 600" className="smoke-svg" aria-hidden="true">
      <filter id="blurMe">
        <feGaussianBlur stdDeviation="16" />
      </filter>
      <g>
        <ellipse cx="350" cy="180" rx="110" ry="60" fill="#fff" opacity="0.16" filter="url(#blurMe)">
          <animate attributeName="cx" values="350;400;370;340;350" dur="12s" repeatCount="indefinite" />
          <animate attributeName="cy" values="180;210;200;170;180" dur="11s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="500" cy="260" rx="85" ry="50" fill="#fff" opacity="0.14" filter="url(#blurMe)">
          <animate attributeName="cx" values="500;530;520;480;500" dur="14s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="410" cy="340" rx="60" ry="35" fill="#fff" opacity="0.13" filter="url(#blurMe)">
          <animate attributeName="cy" values="340;370;360;320;340" dur="13s" repeatCount="indefinite" />
        </ellipse>
      </g>
    </svg>
  </div>
);

// Animação dos cards/fotos ao entrar (slide/fade)
const AnimatedCard = ({ children, style, delay = 0 }) => (
  <div className="animated-card" style={{ ...style, animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

/* =============================
   Páginas (atualizadas)
   ============================= */
const About = ({ lang }) => {
  const d = dict[lang].about;
  return (
    <>
      <SectionTitle>{d.title}</SectionTitle>
      <SmokeEffect />
      <div className="slide-in">
        <p className="p">{d.p1}</p>
        <p className="p">{d.p2}</p>
        <p className="p">{d.p3}</p>
        <p className="p">{d.p4}</p>
        <p className="p">{d.p5}</p>
      </div>
      <div className="grid2">
        {d.heritageImgs.map((h, i) => (
          <AnimatedCard key={i} delay={150 * i}>
            <Img src={h.src} alt={h.caption} ratio="16/9" />
            <div className="caption">{h.caption}</div>
          </AnimatedCard>
        ))}
      </div>
      <h3 className="subtitle">{d.teamTitle}</h3>
      <div className="familygrid">
        {Object.values(d.people).map((p, idx) => (
          <AnimatedCard key={p.name} delay={180 * idx}>
            <Img src={p.img} alt={p.name} ratio="1/1" />
            <div className="cardtitle">{p.name}</div>
            <div className="carddesc">{p.text}</div>
          </AnimatedCard>
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
      <SmokeEffect />
      <div className="slide-in">
        <p className="p">{d.intro}</p>
      </div>
      <div className="grid3">
        {d.imgs.map((src, i) => (
          <AnimatedCard key={i} delay={120 * i}><Img src={src} alt={`fogao-${i}`} ratio="1/1" /></AnimatedCard>
        ))}
      </div>
      <div className="slide-in">
        <p className="p">{d.p1}</p>
        <p className="p">{d.p2}</p>
        <p className="p">{d.p3}</p>
      </div>
      {/* Pratos destacados do fogão a lenha */}
      <div className="grid2">
        {d.pratos && d.pratos.map((prato, i) => (
          <AnimatedCard key={i} delay={140 * i}>
            <Img src={prato.img} alt={prato.name} ratio="16/9" />
            <div className="cardtitle">{prato.name}</div>
            <div className="carddesc">{prato.desc}</div>
          </AnimatedCard>
        ))}
      </div>
      <div className="slide-in">
        <p className="p">{d.outro}</p>
        <SectionTitle>{d.convite}</SectionTitle>
      </div>
      <a className="back" href="#/home">{t(lang,"sections.back","Voltar ao início")}</a>
    </>
  );
};

/* =============================
   App (nav, splash, rotas)
   ============================= */
const App = () => {
  // ... igual
  const [route] = useHashRoute();
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" && localStorage.getItem("lang");
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });
  const [splash, setSplash] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => { const t = setTimeout(() => setSplash(false), 1100); return () => clearTimeout(t); }, []);
  useEffect(() => { localStorage.setItem("lang", lang); }, [lang]);
  useEffect(() => { setOpenDrawer(false); }, [route]);
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
   CSS embutido (responsivo + efeitos)
   ============================= */
const Styles = () => (
  <style>{`
  /* ... seu CSS anterior ... */
  .smoke-bg {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: lighten;
  }
  .smoke-svg {
    width: 100vw; height: 100vh; display: block;
  }
  .slide-in {
    animation: slideIn 1.2s cubic-bezier(.55,.1,.63,1.16) both;
  }
  @keyframes slideIn {
    0% { opacity:0; transform:translateY(30px);}
    100%{ opacity:1; transform:translateY(0);}
  }
  .animated-card {
    opacity: 0;
    transform: translateY(60px) scale(1.04);
    animation: cardFadeIn 1s cubic-bezier(.55,.1,.63,1.16) both;
  }
  @keyframes cardFadeIn {
    0% { opacity: 0; transform: translateY(60px) scale(1.04);}
    60% { opacity: .85;}
    100%{ opacity: 1; transform: translateY(0) scale(1);}
  }
  /* ... restante do CSS igual ... */
  `}</style>
);

export default App;
