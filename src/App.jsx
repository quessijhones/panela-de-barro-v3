import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";

/* =========================================================
   Utilitários
========================================================= */
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

// Fallback de tradução (se a chave não existir, mostra o fallback)
const useTr = (lang) => (key, fallback) => {
  const v = t(key, lang);
  return v && v !== key ? v : fallback;
};

const Img = ({ src, alt = "", style, className = "", ...rest }) => (
  <img
    loading="lazy"
    decoding="async"
    src={src}
    alt={alt}
    className={className}
    style={{ display: "block", width: "100%", height: "auto", ...style }}
    {...rest}
  />
);

/* =========================================================
   Error Boundary
========================================================= */
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

/* =========================================================
   Layout / Navbar
========================================================= */
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

/* =========================================================
   Componentes auxiliares
========================================================= */
const SectionTitle = ({ children }) => (
  <h2 style={{ margin: "24px 0 12px" }}>{children}</h2>
);

// Carrossel simples (um item por vez)
const Carousel = ({ title, items = [], captionKey = "label" }) => {
  const [idx, setIdx] = useState(0);
  const safeIdx = ((idx % items.length) + items.length) % items.length;
  const cur = items[safeIdx];

  if (!items.length) return null;

  return (
    <section className="container">
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      <div
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
        }}
      >
        <Img
          src={cur.src}
          alt={cur[captionKey] || ""}
          // mantém proporção agradável no mobile
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
        />
        {cur[captionKey] ? (
          <div
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              color: "#fff",
              fontWeight: 600,
              textShadow: "0 1px 3px rgba(0,0,0,.7)",
            }}
          >
            {cur[captionKey]}
          </div>
        ) : null}

        {items.length > 1 && (
          <>
            <button
              aria-label="Anterior"
              onClick={() => setIdx((v) => v - 1)}
              style={navBtnStyle("left")}
            >
              ‹
            </button>
            <button
              aria-label="Próximo"
              onClick={() => setIdx((v) => v + 1)}
              style={navBtnStyle("right")}
            >
              ›
            </button>
          </>
        )}
      </div>
    </section>
  );
};

const navBtnStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: 8,
  transform: "translateY(-50%)",
  width: 36,
  height: 36,
  borderRadius: 18,
  background: "rgba(0,0,0,.55)",
  color: "#fff",
  border: "none",
  fontSize: 22,
  lineHeight: "36px",
  cursor: "pointer",
});

/* =========================================================
   Páginas
========================================================= */
const Home = ({ lang }) => {
  const tr = useTr(lang);

  useEffect(() => {
    if (window.__hideSplash) window.__hideSplash();
  }, []);

  // Carrossel 1 — pratos (use nomes que existem em /public/images/)
  const dishSlides = [
    { src: "/images/fraldinha-inteira.jpg", label: "Fraldinha Inteira" },
    { src: "/images/picanha-grelhada.jpg", label: "Picanha Grelhada" },
    { src: "/images/feijoada-costela.jpg", label: "Feijoada de Costela" },
  ];

  // Carrossel 2 — imersivas (mantenho amazonia, que já existe)
  const immersiveSlides = [
    { src: "/immersive/amazonia.jpg", label: tr("home.immersive", "Amazônia") },
  ];

  return (
    <main>
      {/* HERO com overlay para leitura */}
      <section
        className="container"
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          marginTop: 12,
        }}
      >
        <Img
          src="/images/fraldinha-inteira.jpg"
          alt=""
          style={{ aspectRatio: "21/9", objectFit: "cover", filter: "brightness(.7)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.0) 70%)",
          }}
        />
        <div
          className="hero-inner"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 24,
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,.55)",
          }}
        >
          <h1 style={{ margin: 0 }}>{t("hero.title", lang)}</h1>
          <p className="muted" style={{ color: "rgba(255,255,255,.92)" }}>
            {t("hero.subtitle", lang)}
          </p>
          <p className="soon" style={{ color: "rgba(255,255,255,.92)" }}>
            {t("hero.soon", lang)}
          </p>
          <div>
            <a href="#/menu" className="btn">
              {t("hero.cta", lang)}
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel de pratos */}
      <Carousel title={tr("home.carousel.dishes", "Destaques do Menu")} items={dishSlides} />

      {/* Carrossel de imagens imersivas */}
      <Carousel
        title={tr("home.carousel.immersive", "Brasil em Imagens")}
        items={immersiveSlides}
      />
    </main>
  );
};

const About = ({ lang }) => {
  const tr = useTr(lang);
  return (
    <main className="container readable">
      <h1>{t("about.title", lang)}</h1>
      <p>{t("about.p1", lang)}</p>

      <h3>{t("about.h1", lang)}</h3>
      <p>{t("about.p2", lang)}</p>
      <p>{t("about.p3", lang)}</p>

      {/* Imagens proporcionais e contidas */}
      <div className="grid-2">
        <figure className="card">
          <Img
            src="/heritage/panelas.jpg"
            alt=""
            style={{ maxHeight: 260, objectFit: "contain" }}
          />
          <figcaption>{t("about.cap.panela", lang)}</figcaption>
        </figure>
        <figure className="card">
          <Img
            src="/heritage/panela-mao.jpg"
            alt=""
            style={{ maxHeight: 260, objectFit: "contain" }}
          />
          <figcaption>{t("about.cap.artesanal", lang)}</figcaption>
        </figure>
      </div>

      <h3>{t("about.team", lang)}</h3>
      <div className="cards">
        <article className="card person">
          <Img
            src="/heritage/chef-quessi.jpg"
            alt=""
            style={{ height: 160, objectFit: "cover" }}
          />
          <div className="p16">
            <h4>Quessi Jones — {t("about.owner", lang)}</h4>
            <p>{t("about.quessi", lang)}</p>
          </div>
        </article>

        <article className="card person">
          <Img
            src="/heritage/chef-alex.jpg"
            alt=""
            style={{ height: 160, objectFit: "cover" }}
          />
          <div className="p16">
            <h4>Alex — {t("about.headchef", lang)}</h4>
            <p>{t("about.alex", lang)}</p>
          </div>
        </article>

        <article className="card person">
          <Img
            src="/heritage/cleusa.jpg"
            alt=""
            style={{ height: 160, objectFit: "cover" }}
          />
          <div className="p16">
            <h4>Cleusa Gonçalves — {t("about.mom", lang)}</h4>
            <p>{t("about.cleusa", lang)}</p>
          </div>
        </article>
      </div>

      <a href="#/home" className="backlink">
        {t("nav.back", lang)}
      </a>
    </main>
  );
};

const Woodfire = ({ lang }) => (
  <main className="container readable">
    <h1>{t("wood.title", lang)}</h1>
    <p>{t("wood.p1", lang)}</p>
    <p>{t("wood.p2", lang)}</p>

    {/* Fotos proporcionais */}
    <div className="grid-3">
      <Img src="/heritage/fogao-1.jpg" alt="" style={{ height: 220, objectFit: "cover" }} />
      <Img src="/heritage/fogao-2.jpg" alt="" style={{ height: 220, objectFit: "cover" }} />
      <Img src="/heritage/fogao-3.jpg" alt="" style={{ height: 220, objectFit: "cover" }} />
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
          <Img
            src={`/images/${n}`}
            alt=""
            style={{ aspectRatio: "4/3", objectFit: "cover" }}
          />
        </figure>
      ))}
    </div>
    <a href="#/home" className="backlink">
      {t("nav.back", lang)}
    </a>
  </main>
);

const Tag = ({ children }) => <span className="tag">{children}</span>;

// Modal simples
const DishModal = ({ open, onClose, item, lang }) => {
  if (!open || !item) return null;
  const text =
    item.longDesc?.[lang] ||
    item.longDesc?.pt ||
    item.desc?.[lang] ||
    item.desc?.pt ||
    "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        zIndex: 50,
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: 900,
          width: "100%",
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ margin: "12px 16px" }}>{item.name}</h3>
          <button
            onClick={onClose}
            aria-label="Fechar"
            style={{
              marginLeft: "auto",
              marginRight: 12,
              padding: "6px 10px",
              border: 0,
              borderRadius: 999,
              background: "#ead9cd",
              cursor: "pointer",
            }}
          >
            × {t("menu.modal.close", lang) || "Fechar"}
          </button>
        </div>

        <Img
          src={item.image}
          alt=""
          style={{ width: "100%", maxHeight: 520, objectFit: "cover" }}
        />
        <div className="p16" style={{ fontSize: 16 }}>
          {text}
        </div>
      </div>
    </div>
  );
};

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(null);

  const items = useMemo(() => {
    if (tab === "all") return MENU;
    return MENU.filter((i) => i.category === tab);
  }, [tab]);

  const tabs = [
    ["all", t("menu.tabs.all", lang)],
    ["mains", t("menu.tabs.mains", lang)],
    ["seasonal", t("menu.tabs.seasonal", lang)],
    ["beverages", t("menu.tabs.beverages", lang)],
    ["desserts", t("menu.tabs.desserts", lang) || "Sobremesas"],
  ];

  const openItem = (it) => {
    setCur(it);
    setOpen(true);
  };

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
            onClick={() => openItem(it)}
            style={{ cursor: "pointer" }}
          >
            <Img src={it.image} alt="" style={{ aspectRatio: "4/3", objectFit: "cover" }} />
            <div className="p16">
              <h4>{it.name}</h4>
              <p className="muted">{(it.desc && (it.desc[lang] || it.desc.pt)) || ""}</p>
              <div className="tags">
                {(it.tags || []).map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <DishModal open={open} onClose={() => setOpen(false)} item={cur} lang={lang} />
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

/* =========================================================
   App
========================================================= */
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