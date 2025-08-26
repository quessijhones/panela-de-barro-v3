import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";

/* --------------------------
   Utils / Hooks
--------------------------- */
const useHashRoute = () => {
  const parse = () => {
    const h = window.location.hash || "#/home";
    const path = h.replace(/^#\/?/, "").split("?")[0] || "home";
    return path.toLowerCase();
  };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => (window.location.hash = `#/${r}`)];
};

const useLang = () => {
  const [lang, set] = useState(getLang());
  useEffect(() => {
    const onLang = () => set(getLang());
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);
  return [lang, setLang];
};

/** Img com fallback se a imagem não existir (evita quadradinho azul no iPhone) */
const Img = ({ src, alt = "", className = "", style, ...rest }) => {
  const [err, setErr] = useState(false);
  const finalSrc = err ? "/images/placeholder.jpg" : src;
  return (
    <img
      loading="lazy"
      decoding="async"
      src={finalSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErr(true)}
      {...rest}
    />
  );
};

/* --------------------------
   Error Boundary
--------------------------- */
class ErrorBoundary extends React.Component {
  constructor(p) {
    super(p);
    this.state = { hasError: false, msg: "" };
  }
  static getDerivedStateFromError(e) {
    return { hasError: true, msg: e?.message || String(e) };
  }
  componentDidCatch(e, info) {
    console.error("App error:", e, info);
  }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div style={{ padding: 24 }}>
        <h2 style={{ marginTop: 0 }}>Ops… algo quebrou aqui.</h2>
        <p style={{ opacity: 0.8, maxWidth: 680 }}>
          {this.state.msg || "Erro desconhecido."}
        </p>
        <a href="#/home" style={{ color: "#8b3e2f", fontWeight: 600 }}>
          Voltar ao início
        </a>
      </div>
    );
  }
}

/* --------------------------
   Layout / Navbar
--------------------------- */
const LangSwitch = ({ lang }) => (
  <div className="lang-switch">
    {Object.keys(LOCALES).map((k) => (
      <button
        key={k}
        onClick={() => setLang(k)}
        aria-pressed={lang === k}
        className={lang === k ? "on" : ""}
        title={LOCALES[k].label}
      >
        {LOCALES[k].short}
      </button>
    ))}
  </div>
);

const Nav = ({ lang }) => (
  <header className="nav">
    <a className="brand" href="#/home" aria-label="Panela de Barro">
      <img src="/logo.png" alt="" />
      <span>Panela de Barro</span>
    </a>
    <nav className="links">
      <a href="#/about">{t("nav.about", lang) || "Sobre"}</a>
      <a href="#/menu">{t("nav.menu", lang) || "Menu"}</a>
      <a href="#/gallery">{t("nav.gallery", lang) || "Galeria"}</a>
      <a href="#/woodfire">{t("nav.woodfire", lang) || "Fogão a Lenha"}</a>
      <a href="#/location">{t("nav.location", lang) || "Localização"}</a>
      <a href="#/support">{t("nav.support", lang) || "Suporte"}</a>
    </nav>
    <LangSwitch lang={lang} />
  </header>
);

/* --------------------------
   Reutilizáveis
--------------------------- */
const Tag = ({ children }) => <span className="tag">{children}</span>;

const Arrow = ({ dir = "left", onClick }) => (
  <button
    className={`carousel-arrow ${dir}`}
    aria-label={dir === "left" ? "Anterior" : "Próxima"}
    onClick={onClick}
  >
    {dir === "left" ? "‹" : "›"}
  </button>
);

const SimpleCarousel = ({ items, captionKey = "caption" }) => {
  const [i, setI] = useState(0);
  const go = (d) => setI((v) => (v + d + items.length) % items.length);
  const it = items[i];
  return (
    <div className="carousel">
      <div className="carousel-frame">
        <Img src={it.src} alt={it[captionKey] || ""} />
        {it[captionKey] && <div className="carousel-cap">{it[captionKey]}</div>}
        <Arrow dir="left" onClick={() => go(-1)} />
        <Arrow dir="right" onClick={() => go(+1)} />
      </div>
    </div>
  );
};

/* --------------------------
   Páginas
--------------------------- */
const Home = ({ lang }) => {
  useEffect(() => {
    if (window.__hideSplash) window.__hideSplash();
  }, []);

  // Carrossel de pratos (usa imagens existentes em /public/images)
  const dishHighlights = [
    { src: "/images/fraldinha-inteira.jpg", caption: "Fraldinha Inteira" },
    { src: "/images/picanha-grelhada.jpg", caption: "Picanha Grelhada" },
    { src: "/images/feijoada-costela.jpg", caption: "Feijoada de Costela" },
    { src: "/images/moqueca-baiana.jpg", caption: "Moqueca Baiana" },
  ];

  // Carrossel imersivo (paisagens que você já subiu)
  const immersive = [
    { src: "/images/pe-de-serra.jpg", caption: "Pé de Serra" },
    { src: "/immersive/amazonia.jpg", caption: "Amazônia" },
  ];

  return (
    <main className="container">
      {/* HERO com overlay mais forte para leitura */}
      <section className="hero readable-on-image">
        <div className="hero-img-wrap">
          <Img src="/images/fraldinha-inteira.jpg" alt="" />
          <div className="hero-overlay" />
        </div>

        <div className="hero-inner">
          <h1>Sabores brasileiros, calor de família</h1>
          <p className="muted">
            Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a
            lenha e raízes brasileiras.
          </p>
          <p className="soon">
            Inauguração em Novembro — reservas online em breve.
          </p>
          <a href="#/menu" className="btn">
            Ver Menu
          </a>
        </div>
      </section>

      {/* CARROSSEL DE PRATOS */}
      <section className="home-block">
        <h2>{t("home.carousel.dishes", lang) || "Destaques do Menu"}</h2>
        <SimpleCarousel items={dishHighlights} />
      </section>

      {/* CARROSSEL IMERSIVO */}
      <section className="home-block">
        <h2>{t("home.carousel.immersive", lang) || "Brasil Imersivo"}</h2>
        <SimpleCarousel items={immersive} />
      </section>
    </main>
  );
};

const About = ({ lang }) => (
  <main className="container readable">
    <h1>Sobre</h1>

    <p>
      Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda,
      ingredientes frescos e fogo de lenha. Nossa família acumula décadas de
      cozinha — e traz essa memória para Doha.
    </p>

    <p>
      A panela de barro atravessa a nossa história: dos povos indígenas à
      criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite
      que os sabores conversem e imprime um toque terroso inconfundível.
    </p>

    <p>
      Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto —
      servidos à mesa.
    </p>

    <div className="grid-2 about-figs">
      <figure className="tile-figure">
        {/* confirme o nome do arquivo EXATO: /public/heritage/panela-1.jpg */}
        <Img src="/heritage/panela-1.jpg" alt="" />
        <figcaption>Panelas artesanais de barro</figcaption>
      </figure>
      <figure className="tile-figure">
        {/* confirme o nome do arquivo EXATO: /public/heritage/panela-mao.jpg */}
        <Img src="/heritage/panela-mao.jpg" alt="" />
        <figcaption>Feita à mão, como manda a tradição</figcaption>
      </figure>
    </div>

    <h3>Nossa família</h3>

    <div className="cards">
      <article className="card person">
        <div className="person-media">
          <Img src="/heritage/chef-quessi.jpg" alt="Quessi Jones" />
        </div>
        <div className="p16">
          <h4>Quessi Jones — Proprietária</h4>
          <p>
            Quessi conduz a casa e preserva o propósito: cozinhar com alma,
            acolher com carinho.
          </p>
        </div>
      </article>

      <article className="card person">
        <div className="person-media">
          <Img src="/heritage/chef-alex.jpg" alt="Alex" />
        </div>
        <div className="p16">
          <h4>Alex — Chef de Cozinha</h4>
          <p>
            Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito
            e fogo certo.
          </p>
        </div>
      </article>

      <article className="card person">
        {/* foco no rosto da Dona Cleusa */}
        <div className="person-media focus-top">
          <Img src="/heritage/cleusa.jpg" alt="Dona Cleusa" />
        </div>
        <div className="p16">
          <h4>Cleusa Gonçalves — Mãe & Guardiã das Receitas</h4>
          <p>
            Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e
            receitas passadas de geração em geração.
          </p>
        </div>
      </article>
    </div>

    <a href="#/home" className="backlink">
      Voltar ao início
    </a>
  </main>
);

const Woodfire = ({ lang }) => (
  <main className="container readable">
    <h1>Fogão a Lenha</h1>
    <p>
      Do interior do Brasil ao mundo: madeiras corretas, brasa constante e
      paciência — o segredo do caldo encorpado.
    </p>
    <p>
      Nossa cozinha honra esse saber, unindo tradição e cuidado com o
      ingrediente.
    </p>

    <div className="grid-3 wood-figs">
      <figure className="tile-figure">
        <Img src="/heritage/fogao-1.jpg" alt="" />
      </figure>
      <figure className="tile-figure">
        <Img src="/heritage/fogao-2.jpg" alt="" />
      </figure>
      <figure className="tile-figure">
        <Img src="/heritage/fogao-3.jpg" alt="" />
      </figure>
    </div>

    <a href="#/home" className="backlink">
      Voltar ao início
    </a>
  </main>
);

const Gallery = ({ lang }) => (
  <main className="container">
    <h1>Galeria</h1>
    <div className="grid-3 about-figs">
      {[
        "picanha-grelhada.jpg",
        "moqueca-baiana.jpg",
        "feijoada-costela.jpg",
        "galinhada-caipira.jpg",
        "rubacao.jpg",
        "pamonha.jpg",
        "pasteis-brasileiros.jpg",
        "pao-de-queijo.jpg",
        "mandioca-frita.jpg",
      ].map((n) => (
        <figure key={n} className="tile-figure">
          <Img src={`/images/${n}`} alt="" />
        </figure>
      ))}
    </div>
    <a href="#/home" className="backlink">
      Voltar ao início
    </a>
  </main>
);

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const items = useMemo(() => {
    if (tab === "all") return MENU;
    return MENU.filter((i) => i.category === tab);
  }, [tab]);

  const tabs = [
    ["all", t("menu.tabs.all", lang) || "Todos"],
    ["mains", t("menu.tabs.mains", lang) || "Pratos"],
    ["seasonal", t("menu.tabs.seasonal", lang) || "Sazonais"],
    ["beverages", t("menu.tabs.beverages", lang) || "Bebidas"],
    ["desserts", t("menu.tabs.desserts", lang) || "Sobremesas"],
  ];

  const [modal, setModal] = useState(null);

  return (
    <main className="container">
      <h1>Menu</h1>

      <div className="tabs">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            className={tab === key ? "on" : ""}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
        <a href="#/home" className="backlink" style={{ marginLeft: "auto" }}>
          Voltar ao início
        </a>
      </div>

      <div className="grid-3">
        {items.map((it) => (
          <article
            key={it.id}
            className="card dish"
            onClick={() => setModal(it)}
          >
            <Img src={it.image} alt={it.name} />
            <div className="p16">
              <h4>{it.name}</h4>
              <p className="muted">{it.desc?.[lang] || it.desc?.pt || ""}</p>
              <div className="tags">
                {it.tags.map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal do prato com descrição completa */}
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <header className="modal-head">
              <h3>{modal.name}</h3>
              <button className="chip" onClick={() => setModal(null)}>
                × Fechar
              </button>
            </header>
            <div className="modal-body">
              <Img src={modal.image} alt={modal.name} />
              <p className="mt12">
                {modal.longDesc?.[lang] ||
                  modal.longDesc?.pt ||
                  modal.desc?.[lang] ||
                  modal.desc?.pt ||
                  ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

const Location = ({ lang }) => {
  const q = encodeURIComponent("Baraha Town, Doha, Qatar");
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <main className="container">
      <h1>Localização</h1>
      <p className="muted">Em breve, endereço e horários completos.</p>
      <div className="mapwrap">
        <iframe title="Map" src={src} allowFullScreen />
      </div>
      <a href="#/home" className="backlink">
        Voltar ao início
      </a>
    </main>
  );
};

const Support = ({ lang }) => (
  <main className="container readable">
    <h1>Suporte</h1>
    <ul>
      <li>Pedidos e reservas em breve</li>
      <li>Eventos e encomendas</li>
      <li>Parcerias</li>
    </ul>
    <a href="#/home" className="backlink">
      Voltar ao início
    </a>
  </main>
);

const NotFound = ({ lang }) => (
  <main className="container">
    <h1>404</h1>
    <p className="muted">Página não encontrada.</p>
    <a href="#/home" className="backlink">
      Voltar ao início
    </a>
  </main>
);

/* --------------------------
   App
--------------------------- */
export default function App() {
  const [route] = useHashRoute();
  const [lang] = useLang();

  useEffect(() => {
    if (window.__hideSplash) window.__hideSplash();
  }, []);

  const Page = (() => {
    switch (route) {
      case "home":
        return <Home lang={lang} />;
      case "about":
        return <About lang={lang} />;
      case "menu":
        return <MenuPage lang={lang} />;
      case "gallery":
        return <Gallery lang={lang} />;
      case "woodfire":
        return <Woodfire lang={lang} />;
      case "location":
        return <Location lang={lang} />;
      case "support":
        return <Support lang={lang} />;
      default:
        return <NotFound lang={lang} />;
    }
  })();

  return (
    <ErrorBoundary>
      <Nav lang={lang} />
      {Page}
      <footer className="footer">
        <small>© {new Date().getFullYear()} Panela de Barro</small>
      </footer>
    </ErrorBoundary>
  );
}