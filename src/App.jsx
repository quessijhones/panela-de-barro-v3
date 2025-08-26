import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";

/* -------------------- helpers -------------------- */
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

const Img = ({ src, alt = "", className = "", ...rest }) => (
  <img loading="lazy" decoding="async" src={src} alt={alt} className={className} {...rest} />
);

/* -------------------- error boundary -------------------- */
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
        <a href="#/home" style={{ color: "#8b3e2f", fontWeight: 600 }}>Voltar ao início</a>
      </div>
    );
  }
}

/* -------------------- layout -------------------- */
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

/* -------------------- reusable carousel -------------------- */
/** Carousel simples: scroll horizontal + botões prev/next */
const Carousel = ({ items, render, ariaLabel }) => {
  const ref = useRef(null);
  const scrollBy = (dir) => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  const wrapStyle = {
    position: "relative",
    marginTop: 12,
  };
  const railStyle = {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "85%",
    gap: "16px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
    paddingBottom: 4,
  };
  const btnStyle = (side) => ({
    position: "absolute",
    top: "45%",
    [side]: 8,
    transform: "translateY(-50%)",
    border: 0,
    borderRadius: 999,
    padding: "8px 10px",
    background: "rgba(0,0,0,.35)",
    color: "#fff",
    cursor: "pointer",
  });
  return (
    <div style={wrapStyle} aria-label={ariaLabel}>
      <button onClick={() => scrollBy(-1)} style={btnStyle("left")} aria-label="Anterior">‹</button>
      <div ref={ref} style={railStyle}>
        {items.map((it, idx) => (
          <div key={idx} style={{ scrollSnapAlign: "start" }}>
            {render(it)}
          </div>
        ))}
      </div>
      <button onClick={() => scrollBy(1)} style={btnStyle("right")} aria-label="Próximo">›</button>
    </div>
  );
};

/* -------------------- pages -------------------- */
const Home = ({ lang }) => {
  useEffect(() => {
    if (window.__hideSplash) window.__hideSplash();
  }, []);

  // Títulos fixos para evitar chaves i18n faltando
  const hDishes = { pt: "Destaques do Menu", en: "Menu Highlights", ar: "الأطباق المميزة" };
  const hImmersive = { pt: "Imersões do Brasil", en: "Immersions of Brazil", ar: "مناظر من البرازيل" };

  const dishSlides = [
    { img: "/images/vaca-atolada.jpg", title: "Vaca Atolada (Ossobuco)" },
    { img: "/images/feijoada-costela.jpg", title: "Feijoada de Costela" },
    { img: "/images/moqueca-baiana.jpg", title: "Moqueca Baiana" },
    { img: "/images/galinhada-caipira.jpg", title: "Galinhada Caipira" },
    { img: "/images/rubacao.jpg", title: "Rubacão" },
    { img: "/images/pao-de-queijo.jpg", title: "Pão de Queijo da Casa" },
  ];

  const immersiveSlides = [
    { img: "/immersive/amazonia.jpg", title: "Amazônia" },
    { img: "/immersive/cerrado.jpg", title: "Cerrado" },
    { img: "/immersive/lencois.jpg", title: "Lençóis" },
    { img: "/immersive/litoral.jpg", title: "Litoral" },
    { img: "/immersive/serra.jpg", title: "Serra" },
  ];

  return (
    <main className="container">
      {/* HERO — picanha, mais clara + overlay para leitura */}
      <section className="hero">
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            minHeight: 320,
            backgroundImage: "url(/images/picanha-grelhada.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.35) 35%, rgba(0,0,0,.10) 100%)",
            }}
          />
          <div className="hero-inner" style={{ position: "relative" }}>
            <h1>{t("hero.title", lang)}</h1>
            <p className="muted" style={{ color: "rgba(255,255,255,.95)" }}>
              {t("hero.subtitle", lang)}
            </p>
            <p className="soon" style={{ color: "rgba(255,255,255,.95)" }}>
              {t("hero.soon", lang)}
            </p>
            <a href="#/menu" className="btn">
              {t("hero.cta", lang)}
            </a>
          </div>
        </div>
      </section>

      {/* Destaques do Menu — CARROSSEL */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 8 }}>{hDishes[lang] || hDishes.pt}</h2>
        <Carousel
          ariaLabel="Destaques do Menu"
          items={dishSlides}
          render={(s) => (
            <figure className="card" style={{ overflow: "hidden", borderRadius: 20, margin: 0 }}>
              <Img
                src={s.img}
                alt={s.title}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <figcaption style={{ padding: "10px 14px", fontWeight: 600 }}>{s.title}</figcaption>
            </figure>
          )}
        />
      </section>

      {/* Imersões do Brasil — CARROSSEL */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 8 }}>{hImmersive[lang] || hImmersive.pt}</h2>
        <Carousel
          ariaLabel="Imersões do Brasil"
          items={immersiveSlides}
          render={(s) => (
            <figure className="card" style={{ overflow: "hidden", borderRadius: 20, margin: 0 }}>
              <Img
                src={s.img}
                alt={s.title}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <figcaption style={{ padding: "10px 14px", fontWeight: 600 }}>{s.title}</figcaption>
            </figure>
          )}
        />
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
      <figure className="card">
        <Img src="/heritage/panela-1.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 260 }} />
        <figcaption>{t("about.cap.panela", lang)}</figcaption>
      </figure>
      <figure className="card">
        <Img src="/heritage/panela-mao.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 260 }} />
        <figcaption>{t("about.cap.artesanal", lang)}</figcaption>
      </figure>
    </div>

    <h3>{t("about.team", lang)}</h3>
    <div className="cards">
      <article className="card person">
        <Img src="/heritage/chef-quessi.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
        <h4>Quessi Jones — {t("about.owner", lang)}</h4>
        <p>{t("about.quessi", lang)}</p>
      </article>
      <article className="card person">
        <Img src="/heritage/chef-alex.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
        <h4>Alex — {t("about.headchef", lang)}</h4>
        <p>{t("about.alex", lang)}</p>
      </article>
      <article className="card person">
        <Img src="/heritage/cleusa.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
        <h4>Cleusa Gonçalves — {t("about.mom", lang)}</h4>
        <p>{t("about.cleusa", lang)}</p>
      </article>
    </div>

    <a href="#/home" className="backlink">{t("nav.back", lang)}</a>
  </main>
);

const Woodfire = ({ lang }) => (
  <main className="container readable">
    <h1>{t("wood.title", lang)}</h1>
    <p>{t("wood.p1", lang)}</p>
    <p>{t("wood.p2", lang)}</p>

    <div className="grid-3">
      <Img src="/heritage/fogao-1.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
      <Img src="/heritage/fogao-2.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
      <Img src="/heritage/fogao-3.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
    </div>

    <a href="#/home" className="backlink">{t("nav.back", lang)}</a>
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
          <Img src={`/images/${n}`} alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
        </figure>
      ))}
    </div>
    <a href="#/home" className="backlink">{t("nav.back", lang)}</a>
  </main>
);

const Tag = ({ children }) => <span className="tag">{children}</span>;

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null); // modal

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
          <button key={key} className={tab === key ? "on" : ""} onClick={() => setTab(key)}>
            {label}
          </button>
        ))}
        <a href="#/home" className="backlink" style={{ marginLeft: "auto" }}>
          {t("nav.back", lang)}
        </a>
      </div>

      <div className="grid-3">
        {items.map((it) => (
          <article key={it.id} className="card dish" onClick={() => setOpen(it)} style={{ cursor: "pointer" }}>
            <Img src={it.image} alt="" style={{ objectFit: "cover", width: "100%", height: 220 }} />
            <div className="p16">
              <h4>{it.name}</h4>
              <p className="muted">{it.desc?.[lang] || it.desc?.pt}</p>
              <div className="tags">
                {it.tags?.map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal de prato */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.6)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 50,
          }}
        >
          <div
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(940px, 100%)", maxHeight: "90vh", overflow: "auto" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16 }}>
              <h3 style={{ margin: 0 }}>{open.name}</h3>
              <button onClick={() => setOpen(null)} className="tag" aria-label="Fechar">× Fechar</button>
            </div>
            <Img src={open.image} alt={open.name} style={{ width: "100%", height: "auto", display: "block" }} />
            <div style={{ padding: 16 }}>
              <p>{open.desc?.[lang] || open.desc?.pt}</p>
              {open.tags?.length ? (
                <div className="tags" style={{ marginTop: 8 }}>
                  {open.tags.map((tg) => (
                    <Tag key={tg}>{tg}</Tag>
                  ))}
                </div>
              ) : null}
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
      <h1>{t("loc.title", lang)}</h1>
      <p className="muted">{t("loc.subtitle", lang)}</p>
      <div className="mapwrap">
        <iframe title="Map" src={src} allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a href="#/home" className="backlink">{t("nav.back", lang)}</a>
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

    <h3>Contato</h3>
    <p>
      WhatsApp/Telefone: <a href="tel:+97430475279">+974 3047-5279</a><br />
      E-mail: <a href="mailto:restaurant@paneladebarroqatar.com">restaurant@paneladebarroqatar.com</a>
    </p>

    <a href="#/home" className="backlink">{t("nav.back", lang)}</a>
  </main>
);

const NotFound = ({ lang }) => (
  <main className="container">
    <h1>404</h1>
    <p className="muted">{t("notfound", lang)}</p>
    <a href="#/home" className="backlink">{t("nav.back", lang)}</a>
  </main>
);

/* -------------------- app -------------------- */
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