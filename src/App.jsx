import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";

/* ----------------------------------------------------------
   Helpers
---------------------------------------------------------- */

// rota via hash (#/rota)
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

// idioma atual
const useLang = () => {
  const [lang, set] = useState(getLang());
  useEffect(() => {
    const onLang = () => set(getLang());
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);
  return [lang, setLang];
};

// fallback de tradução: se a chave aparecer crua (ex.: "home.carousel.dishes"),
// usa o fallback em português
const tr = (lang, key, fallback) => {
  try {
    const v = t(key, lang);
    if (!v || v === key || /\./.test(v)) return fallback;
    return v;
  } catch {
    return fallback;
  }
};

// imagem com boas defaults
const Img = ({ src, alt = "", className = "", style = {}, ...rest }) => (
  <img
    loading="lazy"
    decoding="async"
    src={src}
    alt={alt}
    className={className}
    style={{ display: "block", width: "100%", height: "auto", borderRadius: 16, ...style }}
    {...rest}
  />
);

/* ----------------------------------------------------------
   Error Boundary
---------------------------------------------------------- */
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
        <p style={{ opacity: 0.8, maxWidth: 680 }}>{this.state.msg || "Erro desconhecido."}</p>
        <a href="#/home" style={{ color: "#8b3e2f", fontWeight: 600 }}>
          Voltar ao início
        </a>
      </div>
    );
  }
}

/* ----------------------------------------------------------
   Navbar
---------------------------------------------------------- */
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
      <a href="#/about">{tr(lang, "nav.about", "Sobre")}</a>
      <a href="#/menu">{tr(lang, "nav.menu", "Menu")}</a>
      <a href="#/gallery">{tr(lang, "nav.gallery", "Galeria")}</a>
      <a href="#/woodfire">{tr(lang, "nav.woodfire", "Fogão a Lenha")}</a>
      <a href="#/location">{tr(lang, "nav.location", "Localização")}</a>
      <a href="#/support">{tr(lang, "nav.support", "Suporte")}</a>
    </nav>
    <LangSwitch lang={lang} />
  </header>
);

/* ----------------------------------------------------------
   Home
---------------------------------------------------------- */

// slides de “Imersões do Brasil”
const IMMERSIVE_SLIDES = [
  { title: "Amazônia", src: "/immersive/amazonia.jpg" },
  { title: "Cerrado", src: "/immersive/cerrado.jpg" },
  { title: "Lençóis", src: "/immersive/lencois.jpg" }, // arquivo sem acento
  { title: "Litoral", src: "/immersive/litoral.jpg" },
  { title: "Serra", src: "/immersive/serra.jpg" },
];

const Home = ({ lang }) => {
  // garante que o splash suma
  useEffect(() => {
    const hide = () => {
      try {
        if (window.__hideSplash) window.__hideSplash();
        const el = document.getElementById("splash");
        if (el) {
          el.style.transition = "opacity .35s ease";
          el.style.opacity = "0";
          setTimeout(() => el.remove?.(), 400);
        }
      } catch {}
    };
    hide();
    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
  }, []);

  // pega alguns destaques do MENU
  const featured = useMemo(() => {
    const base = MENU.filter((i) => i.category === "mains");
    const list = (base.length ? base : MENU).slice(0, 8);
    return list.map((i) => ({
      title: i.name,
      src: i.image,
    }));
  }, []);

  return (
    <main className="container">
      {/* HERO com imagem clara e overlay para leitura */}
      <section className="hero">
        <div className="hero-inner" style={{ position: "relative" }}>
          <Img
            src="/images/picanha-grelhada.jpg"
            alt="Picanha grelhada"
            style={{
              borderRadius: 24,
              height: "min(56vh, 520px)",
              objectFit: "cover",
              filter: "brightness(0.78)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              padding: 24,
            }}
          >
            <div style={{ maxWidth: 820 }}>
              <h1 style={{ color: "#fff", textShadow: "0 2px 18px rgba(0,0,0,.35)" }}>
                {tr(lang, "hero.title", "Sabores brasileiros, calor de família")}
              </h1>
              <p
                className="muted"
                style={{
                  color: "rgba(255,255,255,.95)",
                  textShadow: "0 1px 12px rgba(0,0,0,.45)",
                  fontSize: 18,
                  marginTop: 8,
                }}
              >
                {tr(
                  lang,
                  "hero.subtitle",
                  "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras."
                )}
              </p>
              <p
                className="soon"
                style={{
                  color: "rgba(255,255,255,.98)",
                  textShadow: "0 1px 10px rgba(0,0,0,.4)",
                  marginTop: 8,
                }}
              >
                {tr(lang, "hero.soon", "Inauguração em Novembro — reservas online em breve.")}
              </p>
              <a href="#/menu" className="btn" style={{ marginTop: 16 }}>
                {tr(lang, "hero.cta", "Ver Menu")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques do Menu (carrossel simples) */}
      <section className="readable">
        <h2 style={{ marginBottom: 12 }}>{tr(lang, "home.carousel.dishes", "Destaques do Menu")}</h2>
        <div className="carousel">
          {featured.map((s) => (
            <figure key={s.src} className="card" style={{ minWidth: 280, marginRight: 16 }}>
              <Img src={s.src} alt={s.title} style={{ aspectRatio: "16 / 9", objectFit: "cover" }} />
              <figcaption className="overlay">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Imersões do Brasil */}
      <section className="readable">
        <h2 style={{ marginBottom: 12 }}>{tr(lang, "home.carousel.immersive", "Imersões do Brasil")}</h2>
        <div className="carousel">
          {IMMERSIVE_SLIDES.map((s) => (
            <figure key={s.src} className="card" style={{ minWidth: 280, marginRight: 16 }}>
              <Img src={s.src} alt={s.title} style={{ aspectRatio: "16 / 9", objectFit: "cover" }} />
              <figcaption className="overlay">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

/* ----------------------------------------------------------
   Sobre
---------------------------------------------------------- */
const About = ({ lang }) => (
  <main className="container readable">
    <h1>{tr(lang, "about.title", "Sobre")}</h1>

    <p>
      {tr(
        lang,
        "about.p1",
        "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha."
      )}
    </p>

    <h3>{tr(lang, "about.h1", "Por que “Panela de Barro”?")}</h3>
    <p>
      {tr(
        lang,
        "about.p2",
        "A panela de barro atravessa a nossa história: dos povos indígenas à criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite que os sabores conversem e imprime um toque terroso inconfundível."
      )}
    </p>
    <p>
      {tr(
        lang,
        "about.p3",
        "Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto — servidos à mesa."
      )}
    </p>

    <div className="grid-2">
      <figure>
        <Img src="/heritage/panela-1.jpg" alt="" style={{ aspectRatio: "4 / 3", objectFit: "cover" }} />
        <figcaption>{tr(lang, "about.cap.panela", "Panelas artesanais de barro")}</figcaption>
      </figure>
      <figure>
        <Img src="/heritage/panela-mao.jpg" alt="" style={{ aspectRatio: "4 / 3", objectFit: "cover" }} />
        <figcaption>{tr(lang, "about.cap.artesanal", "Feita à mão, como manda a tradição")}</figcaption>
      </figure>
    </div>

    <h3>{tr(lang, "about.team", "Nossa família")}</h3>
    <div className="cards">
      <article className="card person">
        <Img
          src="/heritage/chef-quessi.jpg"
          alt="Quessi"
          style={{ aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center top" }}
        />
        <h4>Quessi Jones — {tr(lang, "about.owner", "Proprietária")}</h4>
        <p>
          {tr(
            lang,
            "about.quessi",
            "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho."
          )}
        </p>
      </article>
      <article className="card person">
        <Img
          src="/heritage/chef-alex.jpg"
          alt="Alex"
          style={{ aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center top" }}
        />
        <h4>Alex — {tr(lang, "about.headchef", "Chef de Cozinha")}</h4>
        <p>
          {tr(
            lang,
            "about.alex",
            "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo."
          )}
        </p>
      </article>
      <article className="card person">
        <Img
          src="/heritage/cleusa.jpg"
          alt="Dona Cleusa"
          style={{ aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center top" }}
        />
        <h4>Cleusa Gonçalves — {tr(lang, "about.mom", "Mãe & Guardiã das Receitas")}</h4>
        <p>
          {tr(
            lang,
            "about.cleusa",
            "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração."
          )}
        </p>
      </article>
    </div>

    <a href="#/home" className="backlink">
      {tr(lang, "nav.back", "Voltar ao início")}
    </a>
  </main>
);

/* ----------------------------------------------------------
   Fogão a Lenha
---------------------------------------------------------- */
const Woodfire = ({ lang }) => (
  <main className="container readable">
    <h1>{tr(lang, "wood.title", "Fogão a Lenha")}</h1>
    <p>
      {tr(
        lang,
        "wood.p1",
        "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado."
      )}
    </p>
    <p>
      {tr(
        lang,
        "wood.p2",
        "Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente."
      )}
    </p>

    <div className="grid-3">
      <Img src="/heritage/fogao-1.jpg" alt="Fogão a lenha com panelas" style={{ aspectRatio: "1 / 1", objectFit: "cover" }} />
      <Img src="/heritage/fogao-2.jpg" alt="Panelas ao fogo" style={{ aspectRatio: "1 / 1", objectFit: "cover" }} />
      <Img src="/heritage/fogao-3.jpg" alt="Cozinha de roça" style={{ aspectRatio: "1 / 1", objectFit: "cover" }} />
    </div>

    <a href="#/home" className="backlink">
      {tr(lang, "nav.back", "Voltar ao início")}
    </a>
  </main>
);

/* ----------------------------------------------------------
   Galeria
---------------------------------------------------------- */
const Gallery = ({ lang }) => (
  <main className="container">
    <h1>{tr(lang, "gallery.title", "Galeria")}</h1>
    <div className="grid-3">
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
        <figure key={n} className="card">
          <Img src={`/images/${n}`} alt="" style={{ aspectRatio: "4 / 3", objectFit: "cover" }} />
        </figure>
      ))}
    </div>
    <a href="#/home" className="backlink">
      {tr(lang, "nav.back", "Voltar ao início")}
    </a>
  </main>
);

/* ----------------------------------------------------------
   Menu + Modal
---------------------------------------------------------- */
const Tag = ({ children }) => <span className="tag">{children}</span>;

const DishModal = ({ open, onClose, item, lang }) => {
  if (!open || !item) return null;
  const close = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.55)",
        zIndex: 50,
        padding: 16,
        overflow: "auto",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="card"
        style={{
          maxWidth: 980,
          margin: "40px auto",
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", padding: "16px 20px" }}>
          <h3 style={{ margin: 0, flex: 1 }}>{item.name}</h3>
          <button
            onClick={onClose}
            className="tag"
            aria-label="Fechar"
            style={{ fontWeight: 600, cursor: "pointer" }}
          >
            × Fechar
          </button>
        </div>
        <Img
          src={item.image}
          alt={item.name}
          style={{ width: "100%", maxHeight: "68vh", objectFit: "cover", borderRadius: 0 }}
        />
        <div style={{ padding: 16 }}>
          <p style={{ marginTop: 0 }}>{item.desc?.[lang] || item.desc?.pt || ""}</p>
          <div className="tags" style={{ marginTop: 8 }}>
            {item.tags?.map((tg) => (
              <Tag key={tg}>{tg}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const [openItem, setOpenItem] = useState(null);

  const items = useMemo(() => {
    if (tab === "all") return MENU;
    if (tab === "seasonal") return MENU.filter((i) => i.seasonal);
    return MENU.filter((i) => i.category === tab);
  }, [tab]);

  const tabs = [
    ["all", tr(lang, "menu.tabs.all", "Todos")],
    ["mains", tr(lang, "menu.tabs.mains", "Pratos")],
    ["seasonal", tr(lang, "menu.tabs.seasonal", "Sazonais")],
    ["beverages", tr(lang, "menu.tabs.beverages", "Bebidas")],
    ["desserts", tr(lang, "menu.tabs.desserts", "Sobremesas")],
  ];

  return (
    <main className="container">
      <h1>{tr(lang, "menu.title", "Menu")}</h1>

      <div className="tabs">
        {tabs.map(([key, label]) => (
          <button key={key} className={tab === key ? "on" : ""} onClick={() => setTab(key)}>
            {label}
          </button>
        ))}
        <a href="#/home" className="backlink" style={{ marginLeft: "auto" }}>
          {tr(lang, "nav.back", "Voltar ao início")}
        </a>
      </div>

      <div className="grid-3">
        {items.map((it) => (
          <article
            key={it.id}
            className="card dish"
            onClick={() => setOpenItem(it)}
            style={{ cursor: "pointer" }}
          >
            <Img src={it.image} alt="" style={{ aspectRatio: "16 / 10", objectFit: "cover" }} />
            <div className="p16">
              <h4>{it.name}</h4>
              <p className="muted" style={{ lineHeight: 1.35 }}>
                {it.desc?.[lang] || it.desc?.pt}
              </p>
              <div className="tags">
                {(it.tags || []).map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <DishModal open={!!openItem} onClose={() => setOpenItem(null)} item={openItem} lang={lang} />
    </main>
  );
};

/* ----------------------------------------------------------
   Localização
---------------------------------------------------------- */
const Location = ({ lang }) => {
  const q = encodeURIComponent("Baraha Town, Doha, Qatar");
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <main className="container">
      <h1>{tr(lang, "loc.title", "Localização")}</h1>
      <p className="muted">{tr(lang, "loc.subtitle", "Estamos em Baraha Town, Doha.")}</p>
      <div className="mapwrap">
        <iframe title="Map" src={src} allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a href="#/home" className="backlink">
        {tr(lang, "nav.back", "Voltar ao início")}
      </a>
    </main>
  );
};

/* ----------------------------------------------------------
   Suporte
---------------------------------------------------------- */
const Support = ({ lang }) => (
  <main className="container readable">
    <h1>{tr(lang, "support.title", "Suporte")}</h1>
    <ul>
      <li>{tr(lang, "support.opt1", "Pedidos e reservas em breve")}</li>
      <li>{tr(lang, "support.opt2", "Eventos e encomendas")}</li>
      <li>{tr(lang, "support.opt3", "Parcerias")}</li>
    </ul>

    <h3 style={{ marginTop: 24 }}>Contato</h3>
    <p>
      WhatsApp/Telefone: <strong>+974 3047 5279</strong>
      <br />
      E-mail:{" "}
      <a href="mailto:restaurant@paneladebarroqatar.com">
        restaurant@paneladebarroqatar.com
      </a>
    </p>

    <a href="#/home" className="backlink">
      {tr(lang, "nav.back", "Voltar ao início")}
    </a>
  </main>
);

/* ----------------------------------------------------------
   404
---------------------------------------------------------- */
const NotFound = ({ lang }) => (
  <main className="container">
    <h1>404</h1>
    <p className="muted">{tr(lang, "notfound", "Página não encontrada.")}</p>
    <a href="#/home" className="backlink">
      {tr(lang, "nav.back", "Voltar ao início")}
    </a>
  </main>
);

/* ----------------------------------------------------------
   App
---------------------------------------------------------- */
export default function App() {
  const [route] = useHashRoute();
  const [lang] = useLang();

  // fail-safe do splash (aparece e some)
  useEffect(() => {
    const hide = () => {
      try {
        if (window.__hideSplash) window.__hideSplash();
        const el = document.getElementById("splash");
        if (el) {
          el.style.transition = "opacity .35s ease";
          el.style.opacity = "0";
          setTimeout(() => el.remove?.(), 400);
        }
      } catch {}
    };
    hide();
    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
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