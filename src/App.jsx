import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";

/** =======================
 *  Pequenos utilitários
 *  ======================= */
const tr = (k, lang, fallback) => {
  // Evita mostrar "home.carousel.dishes" etc.
  const s = t(k, lang);
  if (!s || /\w+\.\w+/.test(s)) return fallback;
  return s;
};

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

const Img = ({ src, alt = "", style, className = "", ...rest }) => {
  const [ok, setOk] = useState(true);
  return (
    <img
      loading="lazy"
      decoding="async"
      src={ok ? src : "/images/placeholder.jpg"}
      alt={alt}
      onError={() => setOk(false)}
      style={style}
      className={className}
      {...rest}
    />
  );
};

/** =======================
 *  Error Boundary
 *  ======================= */
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

/** =======================
 *  Splash (logo inicial)
 *  ======================= */
const Splash = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const hide = () => setShow(false);
    window.__hideSplash = hide;
    const id = setTimeout(hide, 1200);
    return () => {
      clearTimeout(id);
      delete window.__hideSplash;
    };
  }, []);
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        display: "grid",
        placeItems: "center",
        zIndex: 9999,
      }}
    >
      <img
        src="/logo.png"
        alt=""
        style={{ width: 96, height: 96, filter: "drop-shadow(0 6px 18px #0002)" }}
      />
    </div>
  );
};

/** =======================
 *  Navbar
 *  ======================= */
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
      <a href="#/about">{tr("nav.about", lang, "Sobre")}</a>
      <a href="#/menu">{tr("nav.menu", lang, "Menu")}</a>
      <a href="#/gallery">{tr("nav.gallery", lang, "Galeria")}</a>
      <a href="#/woodfire">{tr("nav.woodfire", lang, "Fogão a Lenha")}</a>
      <a href="#/location">{tr("nav.location", lang, "Localização")}</a>
      <a href="#/support">{tr("nav.support", lang, "Suporte")}</a>
    </nav>
    <LangSwitch lang={lang} />
  </header>
);

/** =======================
 *  Carrossel simples
 *  ======================= */
const Carousel = ({ slides, ariaLabel }) => {
  const [i, setI] = useState(0);
  const go = (d) => setI((p) => (p + d + slides.length) % slides.length);
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setInterval(() => go(1), 5000);
    return () => clearInterval(timer.current);
  }, [slides.length]);
  if (!slides?.length) return null;
  const s = slides[i];
  return (
    <div
      className="card"
      role="region"
      aria-label={ariaLabel}
      style={{ padding: 0, overflow: "hidden" }}
    >
      <div style={{ position: "relative", height: "46vh", minHeight: 280 }}>
        <Img
          src={s.src}
          alt={s.alt || s.label || ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {s.label && (
          <div
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              color: "white",
              fontWeight: 700,
              textShadow: "0 2px 12px #0009",
              fontSize: "1.25rem",
            }}
          >
            {s.label}
          </div>
        )}
        <button
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="carousel-nav left"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Próxima"
          className="carousel-nav right"
        >
          ›
        </button>
        {s.href && (
          <a
            href={s.href}
            style={{ position: "absolute", inset: 0 }}
            aria-label={s.label || "Abrir"}
          />
        )}
      </div>
    </div>
  );
};

/** =======================
 *  Páginas
 *  ======================= */
const Home = ({ lang }) => {
  useEffect(() => {
    if (window.__hideSplash) window.__hideSplash();
  }, []);

  // Carrossel de pratos: usa alguns itens do MENU
  const dishSlides = useMemo(
    () =>
      MENU.slice(0, 12).map((d) => ({
        src: d.image,
        label: d.name,
        href: "#/menu",
      })),
    []
  );

  // Carrossel imersivo
  const immersiveSlides = [
    { src: "/immersive/chapada.jpg", label: tr("home.imm1", lang, "Brasil: Cerrado") },
    { src: "/immersive/amazonia.jpg", label: tr("home.imm2", lang, "Amazônia") },
    { src: "/immersive/mangue.jpg", label: tr("home.imm3", lang, "Mangues e rios") },
  ];

  return (
    <main className="container">
      {/* HERO legível com overlay */}
      <section className="hero">
        <div
          className="hero-inner"
          style={{
            backgroundImage:
              "linear-gradient( to bottom, #00000066, #00000055 ), url('/images/fraldinha-inteira.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <h1>{tr("hero.title", lang, "Sabores brasileiros, calor de família")}</h1>
            <p className="muted" style={{ color: "#fff", opacity: 0.95 }}>
              {tr(
                "hero.subtitle",
                lang,
                "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras."
              )}
            </p>
            <p className="soon" style={{ color: "#fff", opacity: 0.9 }}>
              {tr("hero.soon", lang, "Inauguração em Novembro — reservas online em breve.")}
            </p>
            <a href="#/menu" className="btn">
              {tr("hero.cta", lang, "Ver Menu")}
            </a>
          </div>
        </div>
      </section>

      {/* Carrosséis */}
      <h2 style={{ marginTop: 24 }}>
        {tr("home.carousel.dishes", lang, "Destaques do Menu")}
      </h2>
      <Carousel slides={dishSlides} ariaLabel="Destaques do Menu" />

      <h2 style={{ marginTop: 24 }}>
        {tr("home.carousel.immersive", lang, "Imersões do Brasil")}
      </h2>
      <Carousel slides={immersiveSlides} ariaLabel="Imersões do Brasil" />
    </main>
  );
};

const About = ({ lang }) => (
  <main className="container readable">
    <h1>{tr("about.title", lang, "Sobre")}</h1>

    <p>
      {tr(
        "about.p1",
        lang,
        "Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha. Nossa família acumula décadas de cozinha — e traz essa memória para Doha."
      )}
    </p>

    <p>
      {tr(
        "about.p2",
        lang,
        "A panela de barro atravessa a nossa história: dos povos indígenas à criatividade das cozinhas afro-brasileiras. Ela cozinha devagar, permite que os sabores conversem e imprime um toque terroso inconfundível."
      )}
    </p>

    <p>
      {tr(
        "about.p3",
        lang,
        "Esse é o sabor que buscamos em cada prato. Tradição, calma e afeto — servidos à mesa."
      )}
    </p>

    <div className="grid-2">
      <figure className="card" style={{ overflow: "hidden" }}>
        <Img
          src="/heritage/panela-1.jpg"
          alt=""
          style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
        />
        <figcaption>{tr("about.cap.panela", lang, "Panelas artesanais de barro")}</figcaption>
      </figure>
      <figure className="card" style={{ overflow: "hidden" }}>
        <Img
          src="/heritage/panela-mao.jpg"
          alt=""
          style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
        />
        <figcaption>{tr("about.cap.artesanal", lang, "Feita à mão, como manda a tradição")}</figcaption>
      </figure>
    </div>

    <h3 style={{ marginTop: 24 }}>{tr("about.team", lang, "Nossa família")}</h3>
    <div className="cards">
      {[
        {
          img: "/heritage/chef-quessi.jpg",
          title: `Quessi Jones — ${tr("about.owner", lang, "Proprietária")}`,
          text: tr(
            "about.quessi",
            lang,
            "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho."
          ),
        },
        {
          img: "/heritage/chef-alex.jpg",
          title: `Alex — ${tr("about.headchef", lang, "Chef de Cozinha")}`,
          text: tr(
            "about.alex",
            lang,
            "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo."
          ),
        },
        {
          img: "/heritage/cleusa.jpg",
          title: `Cleusa Gonçalves — ${tr("about.mom", lang, "Mãe & Guardiã das Receitas")}`,
          text: tr(
            "about.cleusa",
            lang,
            "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração."
          ),
        },
      ].map((p) => (
        <article key={p.title} className="card person" style={{ overflow: "hidden" }}>
          <Img
            src={p.img}
            alt=""
            style={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              objectPosition: "50% 20%", // sobe um pouco para nunca cortar o rosto
              display: "block",
            }}
          />
          <div className="p16">
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        </article>
      ))}
    </div>

    <a href="#/home" className="backlink">
      {tr("nav.back", lang, "Voltar ao início")}
    </a>
  </main>
);

const Woodfire = ({ lang }) => (
  <main className="container readable">
    <h1>{tr("wood.title", lang, "Fogão a Lenha")}</h1>

    <p>
      {tr(
        "wood.p1",
        lang,
        "Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado."
      )}
    </p>
    <p>
      {tr(
        "wood.p2",
        lang,
        "Nosso fogão honra esse saber. Fogo baixo para apurar, panelas pesadas para abraçar o calor e respeito ao ingrediente. Cozinha de memória, aroma de casa."
      )}
    </p>

    <div className="grid-3">
      {["fogonaria-1.jpg", "fogonaria-2.jpg", "fogonaria-3.jpg"].map((n) => (
        <figure key={n} className="card" style={{ overflow: "hidden" }}>
          <Img
            src={`/heritage/${n}`}
            alt=""
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
          />
        </figure>
      ))}
    </div>

    <a href="#/home" className="backlink">
      {tr("nav.back", lang, "Voltar ao início")}
    </a>
  </main>
);

const Gallery = ({ lang }) => (
  <main className="container">
    <h1>{tr("gallery.title", lang, "Galeria")}</h1>
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
        <figure key={n} className="card" style={{ overflow: "hidden" }}>
          <Img
            src={`/images/${n}`}
            alt=""
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
          />
        </figure>
      ))}
    </div>
    <a href="#/home" className="backlink">
      {tr("nav.back", lang, "Voltar ao início")}
    </a>
  </main>
);

const Tag = ({ children }) => <span className="tag">{children}</span>;

/** ========= Modal do Menu ========= */
const DishModal = ({ item, lang, onClose }) => {
  if (!item) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 920, maxHeight: "85vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12 }}>
          <h3 style={{ margin: 0, flex: 1 }}>{item.name}</h3>
          <button className="chip" onClick={onClose}>× {tr("menu.modal.close", lang, "Fechar")}</button>
        </div>
        <div style={{ padding: 0, overflow: "auto" }}>
          <Img
            src={item.image}
            alt=""
            style={{
              width: "100%",
              height: "60vh",
              objectFit: "contain",
              background: "#00000008",
              display: "block",
            }}
          />
          <div className="p16">
            <p style={{ marginTop: 0 }} className="muted">
              {item.desc?.[lang] || item.desc?.pt}
            </p>
            {!!item.tags?.length && (
              <div className="tags">
                {item.tags.map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const [open, setOpen] = useState(null);

  const items = useMemo(() => {
    if (tab === "all") return MENU;
    return MENU.filter((i) => i.category === tab);
  }, [tab]);

  const tabs = [
    ["all", tr("menu.tabs.all", lang, "Todos")],
    ["mains", tr("menu.tabs.mains", lang, "Pratos")],
    ["seasonal", tr("menu.tabs.seasonal", lang, "Sazonais")],
    ["beverages", tr("menu.tabs.beverages", lang, "Bebidas")],
    ["desserts", tr("menu.tabs.desserts", lang, "Sobremesas")],
  ];

  return (
    <main className="container">
      <h1>{tr("menu.title", lang, "Menu")}</h1>

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
          {tr("nav.back", lang, "Voltar ao início")}
        </a>
      </div>

      <div className="grid-3">
        {items.map((it) => (
          <article
            key={it.id}
            className="card dish"
            onClick={() => setOpen(it)}
            style={{ cursor: "pointer" }}
          >
            <Img
              src={it.image}
              alt=""
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
            />
            <div className="p16">
              <h4>{it.name}</h4>
              <p className="muted">{it.desc?.[lang] || it.desc?.pt}</p>
              <div className="tags">
                {it.tags.map((tg) => (
                  <Tag key={tg}>{tg}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <DishModal item={open} lang={lang} onClose={() => setOpen(null)} />
    </main>
  );
};

const Location = ({ lang }) => {
  const q = encodeURIComponent("Baraha Town, Doha, Qatar");
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <main className="container">
      <h1>{tr("loc.title", lang, "Localização")}</h1>
      <p className="muted">{tr("loc.subtitle", lang, "Veja como chegar até nós")}</p>
      <div className="mapwrap">
        <iframe title="Map" src={src} allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a href="#/home" className="backlink">
        {tr("nav.back", lang, "Voltar ao início")}
      </a>
    </main>
  );
};

const Support = ({ lang }) => {
  // 🔁 Troque pelos seus dados reais
  const PHONE = "+974 0000 0000";
  const WHATS = "+974 0000 0000";
  const EMAIL = "contato@paneladebarroqatar.com";
  return (
    <main className="container readable">
      <h1>{tr("support.title", lang, "Suporte")}</h1>
      <ul>
        <li>{tr("support.opt1", lang, "Pedidos e reservas em breve")}</li>
        <li>{tr("support.opt2", lang, "Eventos e encomendas")}</li>
        <li>{tr("support.opt3", lang, "Parcerias")}</li>
      </ul>
      <h3 style={{ marginTop: 16 }}>{tr("support.contact", lang, "Contato")}</h3>
      <p className="muted" style={{ lineHeight: 1.9 }}>
        WhatsApp: <a href={`https://wa.me/${WHATS.replace(/\D/g, "")}`}>{WHATS}</a><br />
        Telefone: <a href={`tel:${PHONE}`}>{PHONE}</a><br />
        E-mail: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <a href="#/home" className="backlink">
        {tr("nav.back", lang, "Voltar ao início")}
      </a>
    </main>
  );
};

const NotFound = ({ lang }) => (
  <main className="container">
    <h1>404</h1>
    <p className="muted">{tr("notfound", lang, "Página não encontrada")}</p>
    <a href="#/home" className="backlink">
      {tr("nav.back", lang, "Voltar ao início")}
    </a>
  </main>
);

/** =======================
 *  App
 *  ======================= */
export default function App() {
  const [route] = useHashRoute();
  const [lang] = useLang();

  useEffect(() => {
    // garante que o splash suma
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
      <Splash />
      <Nav lang={lang} />
      {Page}
      <footer className="footer">
        <small>© {new Date().getFullYear()} Panela de Barro</small>
      </footer>

      {/* ======= estilos específicos que não dependem do seu CSS ======= */}
      <style>{`
        .hero-inner {
          border-radius: 24px;
          padding: 32px;
          min-height: 44vh;
          display: flex;
          align-items: center;
          color: #fff;
        }
        .carousel-nav{
          position:absolute; top:50%; transform:translateY(-50%);
          border:none; background:#0008; color:#fff; width:40px; height:40px;
          border-radius:999px; font-size:24px; line-height:0; cursor:pointer;
        }
        .carousel-nav.left{ left:10px }
        .carousel-nav.right{ right:10px }
        .modal-backdrop{
          position:fixed; inset:0; background:#0007; display:grid; place-items:center; padding:12px; z-index: 50;
        }
        .modal{
          background:var(--paper); border-radius:16px; box-shadow:0 10px 50px #0006; width: min(96vw, 980px);
        }
      `}</style>
    </ErrorBoundary>
  );
}