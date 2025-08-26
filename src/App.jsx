// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";

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

const Img = (p) => <img loading="lazy" decoding="async" {...p} />;

/* ------------ Error Boundary ------------ */
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
        <p style={{ opacity: 0.8, maxWidth: 680 }}>{this.state.msg}</p>
        <a href="#/home" style={{ color: "#8b3e2f", fontWeight: 600 }}>
          Voltar ao início
        </a>
      </div>
    );
  }
}

/* ------------ Navbar / Lang ------------ */
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
      <a href="#/about">{t("nav.about", lang)}</a>
      <a href="#/menu">{t("nav.menu", lang)}</a>
      <a href="#/gallery">{t("nav.gallery", lang)}</a>
      <a href="#/woodfire">{t("nav.woodfire", lang)}</a>
      <a href="#/location">{t("nav.location", lang)}</a>
      <a href="#/support">{t("nav.support", lang)}</a>
    </nav>
    <LangSwitch lang={lang} />
  </header>
);

/* ------------ Pages ------------ */
const HERO = [
  "/immersive/amazonia.jpg",
  "/immersive/litoral.jpg",
  "/immersive/lencois.jpg",
  "/immersive/cerrado.jpg",
  "/immersive/serra.jpg",
];

const Home = ({ lang }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // some splash (se existir)
    if (window.__hideSplash) window.__hideSplash();
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % HERO.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <Img className="hero-img" src={HERO[idx]} alt="" />
        <div className="hero-inner">
          <h1>{t("hero.title", lang)}</h1>
          <p className="muted">{t("hero.subtitle", lang)}</p>
          <p className="soon">{t("hero.soon", lang)}</p>
          <a href="#/menu" className="btn">
            {t("hero.cta", lang)}
          </a>
        </div>
      </section>

      <section className="immersive">
        <Img src="/immersive/amazonia.jpg" alt="" />
      </section>
    </main>
  );
};

const About = ({ lang }) => (
  <main className="container readable">
    <h1>{t("about.title", lang)}</h1>

    <p>{t("about.p1", lang)}</p>
    <h3>{t("about.h1", lang)}</h3>
    <p>{t("about.p2", lang)}</p>
    <p>{t("about.p3", lang)}</p>

    <div className="grid-2">
      <figure>
        <Img src="/heritage/panela-1.jpg" alt="" />
        <figcaption>{t("about.cap.panela", lang)}</figcaption>
      </figure>
      <figure>
        <Img src="/heritage/panela-mao.jpg" alt="" />
        <figcaption>{t("about.cap.artesanal", lang)}</figcaption>
      </figure>
    </div>

    <h3>{t("about.team", lang)}</h3>
    <div className="cards">
      <article className="card person">
        <Img src="/heritage/chef-quessi.jpg" alt="" />
        <h4>Quessi Jones — {t("about.owner", lang)}</h4>
        <p>{t("about.quessi", lang)}</p>
      </article>
      <article className="card person">
        <Img src="/heritage/chef-alex.jpg" alt="" />
        <h4>Alex — {t("about.headchef", lang)}</h4>
        <p>{t("about.alex", lang)}</p>
      </article>
      <article className="card person">
        <Img src="/heritage/cleusa.jpg" alt="" />
        <h4>Cleusa Gonçalves — {t("about.mom", lang)}</h4>
        <p>{t("about.cleusa", lang)}</p>
      </article>
    </div>

    <a href="#/home" className="backlink">
      {t("nav.back", lang)}
    </a>
  </main>
);

const Woodfire = ({ lang }) => (
  <main className="container readable">
    <h1>{t("wood.title", lang)}</h1>
    <p>{t("wood.p1", lang)}</p>
    <p>{t("wood.p2", lang)}</p>

    <div className="grid-3">
      <Img src="/heritage/fogao-1.jpg" alt="" />
      <Img src="/heritage/fogao-2.jpg" alt="" />
      <Img src="/heritage/fogao-3.jpg" alt="" />
    </div>

    <a href="#/home" className="backlink">
      {t("nav.back", lang)}
    </a>
  </main>
);

const Gallery = ({ lang }) => (
  <main className="container">
    <h1>{t("gallery.title", lang)}</h1>
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
          <Img src={`/images/${n}`} alt="" className="fit" />
        </figure>
      ))}
    </div>
    <a href="#/home" className="backlink">
      {t("nav.back", lang)}
    </a>
  </main>
);

const Tag = ({ children }) => <span className="tag">{children}</span>;

const DishModal = ({ open, onClose, dish, lang }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !dish) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={t("menu.modal.close", lang)}>
          × {t("menu.modal.close", lang)}
        </button>
        <h3 style={{ marginTop: 0 }}>{dish.name}</h3>
        <Img src={dish.image} alt="" className="modal-img" />
        <p className="muted">{dish.desc[lang] || dish.desc.pt}</p>
      </div>
    </div>
  );
};

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(false);
  const [dish, setDish] = useState(null);

  const items = useMemo(() => {
    if (tab === "all") return MENU;
    return MENU.filter((i) => i.category === tab);
  }, [tab]);

  const tabs = [
    ["all", t("menu.tabs.all", lang)],
    ["mains", t("menu.tabs.mains", lang)],
    ["seasonal", t("menu.tabs.seasonal", lang)],
    ["beverages", t("menu.tabs.beverages", lang)],
    ["desserts", t("menu.tabs.desserts", lang)],
  ];

  return (
    <main className="container">
      <h1>{t("menu.title", lang)}</h1>

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
          {t("nav.back", lang)}
        </a>
      </div>

      <div className="grid-3">
        {items.map((it) => (
          <article
            key={it.id}
            className="card dish"
            onClick={() => {
              setDish(it);
              setOpen(true);
            }}
          >
            <Img src={it.image} alt="" className="fit" />
            <div className="p16">
              <h4>{it.name}</h4>
              <p className="muted desc">{it.desc[lang] || it.desc.pt}</p>
              <div className="tags">
                {it.tags.map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <DishModal open={open} onClose={() => setOpen(false)} dish={dish} lang={lang} />
    </main>
  );
};

const Location = ({ lang }) => {
  const q = encodeURIComponent("Baraha Town, Doha, Qatar");
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <main className="container">
      <h1>{t("loc.title", lang)}</h1>
      <p className="muted">{t("loc.subtitle", lang)}</p>
      <div className="mapwrap">
        <iframe
          title="Map"
          src={src}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a href="#/home" className="backlink">
        {t("nav.back", lang)}
      </a>
    </main>
  );
};

const Support = ({ lang }) => (
  <main className="container readable">
    <h1>{t("support.title", lang)}</h1>
    <p>{t("support.p1", lang)}</p>
    <ul>
      <li>{t("support.opt1", lang)}</li>
      <li>{t("support.opt2", lang)}</li>
      <li>{t("support.opt3", lang)}</li>
    </ul>
    <a href="#/home" className="backlink">
      {t("nav.back", lang)}
    </a>
  </main>
);

const NotFound = ({ lang }) => (
  <main className="container">
    <h1>404</h1>
    <p className="muted">{t("notfound", lang)}</p>
    <a href="#/home" className="backlink">
      {t("nav.back", lang)}
    </a>
  </main>
);

/* ------------ App ------------ */
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