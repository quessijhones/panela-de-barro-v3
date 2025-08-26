// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import { MENU } from "./menuData";
import { t as T, getLang as getLangFromI18n } from "./i18n"; // se não existir, usamos fallback abaixo

// -------- util i18n (fallback seguro) ----------
const getLang = () => {
  try {
    return (getLangFromI18n && getLangFromI18n()) || new URLSearchParams(location.search).get("lang") || "pt";
  } catch {
    return new URLSearchParams(location.search).get("lang") || "pt";
  }
};
const tt = (key, fallback, lang) => {
  try {
    if (typeof T === "function") {
      const v = T(key, lang);
      return v || fallback;
    }
  } catch {}
  return fallback;
};

// -------- router simples por hash ----------
const useHashRoute = () => {
  const parse = () => (location.hash.replace(/^#\/?/, "") || "home");
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return [route, (r) => (location.hash = `/${r}`)];
};

// -------- componentes de UI ----------
const Chip = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`chip ${active ? "chip--active" : ""}`}
  >
    {children}
  </button>
);

const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

// Carrossel genérico (auto-rotativo, com setas e swipe)
const Carousel = ({ slides, height = 240, radius = 20, interval = 4500 }) => {
  const [i, setI] = useState(0);
  const n = slides.length;

  // auto play
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => clearInterval(id);
  }, [n, interval]);

  const go = (dir) => setI((x) => (x + dir + n) % n);

  // gestures para mobile
  useEffect(() => {
    let startX = 0;
    const el = document.getElementById("carousel-" + (slides[0]?.id || Math.random()));
    if (!el) return;
    const down = (e) => (startX = e.touches?.[0]?.clientX ?? 0);
    const up = (e) => {
      const dx = (e.changedTouches?.[0]?.clientX ?? 0) - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? +1 : -1);
    };
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchend", up, { passive: true });
    return () => {
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchend", up);
    };
    // eslint-disable-next-line
  }, [slides]);

  const cur = slides[i];

  return (
    <div
      id={"carousel-" + (slides[0]?.id || "generic")}
      className="carousel"
      style={{ height, borderRadius: radius }}
    >
      <img
        src={cur.image}
        alt=""
        loading="lazy"
        decoding="async"
        style={{ height, borderRadius: radius }}
      />
      {cur.caption && <div className="carousel__caption">{cur.caption}</div>}
      <button className="carousel__arrow left" onClick={() => go(-1)} aria-label="Anterior">‹</button>
      <button className="carousel__arrow right" onClick={() => go(+1)} aria-label="Próximo">›</button>
    </div>
  );
};

// -------- Páginas ----------
const HomePage = ({ lang, goto }) => {
  // hero com picanha
  const hero = {
    image: "/images/picanha-grelhada.jpg",
    title: "Sabores brasileiros, calor de família",
    subtitle:
      "Restaurante familiar no Qatar. 20+ anos de hospitalidade, fogão a lenha e raízes brasileiras.",
    cta: "Ver Menu",
  };

  // destaques (use os ids que desejar exibir no carrossel)
  const dishIds = [
    "fraldinha-inteira",
    "galinhada-caipira",
    "rubacao",
    "pao-de-queijo",
    "vaca-atolada",
    "moqueca-baiana",
  ];
  const dishSlides = dishIds
    .map((id) => MENU.find((m) => m.id === id))
    .filter(Boolean)
    .map((m) => ({
      id: m.id,
      image: m.image,
      caption: m.name,
    }));

  // imersões
  const immersive = [
    { id: "amazonia", title: "Amazônia", image: "/immersive/amazonia.jpg" },
    { id: "cerrado", title: "Cerrado", image: "/immersive/cerrado.jpg" },
    { id: "lencois", title: "Lençóis", image: "/immersive/lencois.jpg" },
    { id: "litoral", title: "Litoral", image: "/immersive/litoral.jpg" },
    { id: "serra", title: "Serra", image: "/immersive/serra.jpg" },
  ].map((s) => ({ ...s, caption: s.title }));

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img className="hero__img" src={hero.image} alt="" />
        <div className="hero__scrim" />
        <div className="hero__content">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <button className="btn" onClick={() => goto("menu")}>{hero.cta}</button>
        </div>
      </section>

      {/* Destaques do Menu */}
      <SectionTitle>
        {tt("home.carousel.dishes", "Destaques do Menu", lang)}
      </SectionTitle>
      <Carousel slides={dishSlides} height={260} />

      {/* Imersões do Brasil */}
      <SectionTitle>
        {tt("home.carousel.immersive", "Imersões do Brasil", lang)}
      </SectionTitle>
      <Carousel slides={immersive} height={260} />
    </>
  );
};

const MenuPage = ({ lang }) => {
  const [tab, setTab] = useState("all");
  const items = useMemo(() => (tab === "all" ? MENU : MENU.filter((i) => i.category === tab)), [tab]);

  const tabs = [
    ["all",        tt("menu.tabs.all",        "Todos",     lang)],
    ["mains",      tt("menu.tabs.mains",      "Pratos",    lang)],
    ["appetizers", tt("menu.tabs.appetizers", "Entradas",  lang)],
    ["seasonal",   tt("menu.tabs.seasonal",   "Sazonais",  lang)],
    ["beverages",  tt("menu.tabs.beverages",  "Bebidas",   lang)],
    ["desserts",   tt("menu.tabs.desserts",   "Sobremesas",lang)],
  ];

  const [open, setOpen] = useState(null);

  return (
    <>
      <h1>{tt("nav.menu", "Menu", lang)}</h1>

      <div className="tabs">
        {tabs.map(([val, label]) => (
          <Chip key={val} active={tab === val} onClick={() => setTab(val)}>
            {label}
          </Chip>
        ))}
        <a className="link-back" href="#/home">{tt("nav.back", "Voltar ao início", lang)}</a>
      </div>

      <div className="grid">
        {items.map((it) => (
          <article className="card" key={it.id} onClick={() => setOpen(it)}>
            <img className="card__img" src={it.image} alt="" />
            <div className="card__body">
              <h3>{it.name}</h3>
              <p>{it.desc?.pt}</p>
              <div className="tags">
                {(it.tags || []).map((tg) => (
                  <span key={tg} className="tag">{tg}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal do prato */}
      {!!open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="modal__head">
              <h3>{open.name}</h3>
              <button className="chip" onClick={() => setOpen(null)}>× Fechar</button>
            </div>
            <img className="modal__img" src={open.image} alt="" />
            <div className="p16">
              <p style={{ fontSize: 16 }}>{open.desc?.pt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const AboutPage = ({ lang }) => {
  return (
    <>
      <h1>{tt("nav.about", "Sobre", lang)}</h1>
      <p className="lead">
        Panela de Barro é um tributo às raízes brasileiras: cozinha de fazenda, ingredientes frescos e fogo de lenha.
        Nossa família acumula décadas de cozinha — e traz essa memória para Doha.
      </p>

      {/* duas fotos de contexto */}
      <div className="duo">
        <figure className="figure">
          <img src="/heritage/panela-artesanal.jpg" alt="" />
          <figcaption>Panelas artesanais de barro</figcaption>
        </figure>
        <figure className="figure">
          <img src="/heritage/panela-mao.jpg" alt="" />
          <figcaption>Feita à mão, como manda a tradição</figcaption>
        </figure>
      </div>

      <SectionTitle>{tt("about.team", "Nossa família", lang)}</SectionTitle>

      <div className="cards">
        {[
          { src: "/heritage/chef-quessi.jpg", title: "Quessi Jones — Proprietária", text: "Quessi conduz a casa e preserva o propósito: cozinhar com alma, acolher com carinho." },
          { src: "/heritage/chef-alex.jpg", title: "Alex — Chef de Cozinha", text: "Alex lidera a cozinha com técnica e memória afetiva — ponto perfeito e fogo certo." },
          { src: "/heritage/cleusa.jpg", title: "Cleusa Gonçalves — Mãe & Guardiã das Receitas", text: "Dona Cleusa inspira nossos sabores: panelas no fogo, histórias e receitas passadas de geração em geração." },
        ].map((p) => (
          <article key={p.title} className="card person">
            <img
              src={p.src}
              alt=""
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
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

      <a className="link-back" href="#/home">{tt("nav.back", "Voltar ao início", lang)}</a>
    </>
  );
};

const WoodfirePage = ({ lang }) => {
  return (
    <>
      <h1>{tt("nav.woodfire", "Fogão a Lenha", lang)}</h1>
      <p className="lead">
        Do interior do Brasil ao mundo: madeiras corretas, brasa constante e paciência — o segredo do caldo encorpado.
        Nossa cozinha honra esse saber, unindo tradição e cuidado com o ingrediente.
      </p>

      <div className="duo trio">
        {["/heritage/fogao-1.jpg", "/heritage/fogao-2.jpg", "/heritage/fogao-3.jpg"].map((src) => (
          <figure key={src} className="figure figure--square">
            <img src={src} alt="" />
          </figure>
        ))}
      </div>

      <a className="link-back" href="#/home">{tt("nav.back", "Voltar ao início", lang)}</a>
    </>
  );
};

const GalleryPage = ({ lang }) => {
  // exemplo simples — pode trocar pelas fotos que preferir
  const pics = [
    "/heritage/panela-1.jpg",
    "/heritage/panela-2.jpg",
    "/heritage/panela-artesanal.jpg",
    "/heritage/chef-quessi.jpg",
    "/heritage/chef-alex.jpg",
    "/heritage/cleusa.jpg",
  ];
  return (
    <>
      <h1>{tt("nav.gallery", "Galeria", lang)}</h1>
      <div className="grid grid--masonry">
        {pics.map((p) => (
          <img key={p} className="gallery__img" src={p} alt="" />
        ))}
      </div>
      <a className="link-back" href="#/home">{tt("nav.back", "Voltar ao início", lang)}</a>
    </>
  );
};

const SupportPage = ({ lang }) => {
  return (
    <>
      <h1>{tt("nav.support", "Suporte", lang)}</h1>
      <ul className="bullets">
        <li>Pedidos e reservas em breve</li>
        <li>Eventos e encomendas</li>
        <li>Parcerias</li>
      </ul>

      <div className="contact">
        <p><strong>Contato</strong></p>
        <p>WhatsApp/Telefone: <a href="tel:+97430475279">+974 3047-5279</a></p>
        <p>E-mail: <a href="mailto:restaurant@paneladebarroqatar.com">restaurant@paneladebarroqatar.com</a></p>
      </div>

      <a className="link-back" href="#/home">{tt("nav.back", "Voltar ao início", lang)}</a>
    </>
  );
};

const LocationPage = ({ lang }) => (
  <>
    <h1>{tt("nav.location", "Localização", lang)}</h1>
    <p className="lead">Endereço e mapa em breve.</p>
    <a className="link-back" href="#/home">{tt("nav.back", "Voltar ao início", lang)}</a>
  </>
);

// -------- App (layout + splash + nav + footer) ----------
export default function App() {
  const [route, goto] = useHashRoute();
  const lang = getLang();

  // splash do logo
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setSplash(false), 900);
    return () => clearTimeout(id);
  }, []);

  const nav = [
    ["about", tt("nav.about", "Sobre", lang)],
    ["menu", tt("nav.menu", "Menu", lang)],
    ["gallery", tt("nav.gallery", "Galeria", lang)],
    ["woodfire", tt("nav.woodfire", "Fogão a Lenha", lang)],
    ["location", tt("nav.location", "Localização", lang)],
    ["support", tt("nav.support", "Suporte", lang)],
  ];

  const LangChip = ({ code, label }) => (
    <button
      className={`lang ${lang === code ? "active" : ""}`}
      onClick={() => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", code);
        window.location.href = url.toString();
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="page">
      {/* Splash */}
      {splash && (
        <div className="splash">
          <img src="/logo.png" alt="Panela de Barro" />
        </div>
      )}

      {/* Nav */}
      <header className="nav">
        <div className="brand" onClick={() => goto("home")} role="button">
          <span className="pot" aria-hidden>🍲</span>&nbsp; Panela de Barro
        </div>
        <nav className="links">
          {nav.map(([r, label]) => (
            <a key={r} href={`#/${r}`} className={route === r ? "active" : ""}>
              {label}
            </a>
          ))}
        </nav>
        <div className="langs">
          <LangChip code="pt" label="PT" />
          <LangChip code="en" label="EN" />
          <LangChip code="ar" label="AR" />
        </div>
      </header>

      {/* Conteúdo */}
      <main className="wrap">
        {route === "home" && <HomePage lang={lang} goto={goto} />}
        {route === "menu" && <MenuPage lang={lang} />}
        {route === "about" && <AboutPage lang={lang} />}
        {route === "woodfire" && <WoodfirePage lang={lang} />}
        {route === "gallery" && <GalleryPage lang={lang} />}
        {route === "support" && <SupportPage lang={lang} />}
        {route === "location" && <LocationPage lang={lang} />}
      </main>

      <footer className="foot">© {new Date().getFullYear()} Panela de Barro</footer>

      {/* estilos essenciais */}
      <style>{`
        :root{
          --bg:#ead8bf; --panel:#f2e6d7; --ink:#2b2017; --muted:#6b5a4b;
          --brand:#9a4638; --chip:#e9d6c6;
        }
        *{box-sizing:border-box}
        body,.page{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial}
        .wrap{max-width:1100px;margin:0 auto;padding:16px 20px 32px}
        .nav{position:sticky;top:0;z-index:20;display:flex;gap:12px;align-items:center;justify-content:space-between;background:var(--panel);padding:12px 16px;border-bottom:1px solid #e7d9c6}
        .brand{font-weight:700;cursor:pointer}
        .links a{margin:0 8px;text-decoration:none;color:var(--ink);opacity:.9}
        .links a.active{font-weight:700}
        .langs .lang{border:none;padding:6px 10px;border-radius:999px;background:#eee;margin-left:6px;cursor:pointer}
        .langs .active{background:var(--brand);color:#fff}
        .section-title{font-size:28px;margin:28px 4px 12px}
        .btn{background:var(--brand);color:#fff;border:none;padding:14px 22px;border-radius:999px;font-weight:700;cursor:pointer}
        .chip{background:var(--chip);border:none;border-radius:999px;padding:8px 12px;cursor:pointer}
        .chip--active{background:var(--brand);color:#fff}
        .tabs{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:12px 0 20px}
        .link-back{margin-left:auto;text-decoration:none;color:var(--brand);font-weight:700}
        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}
        .grid--masonry{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}
        .card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,.06);cursor:pointer}
        .card__img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block}
        .card__body{padding:14px}
        .tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
        .tag{background:#efe5db;border-radius:999px;padding:4px 8px;font-size:12px;color:#6b5a4b}
        .lead{max-width:820px}
        .duo{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin:18px 0}
        .trio{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
        .figure{background:#fff;border-radius:20px;overflow:hidden}
        .figure img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover}
        .figure--square img{aspect-ratio:1/1}
        .figure figcaption{padding:8px 12px;font-size:14px;color:var(--muted)}
        .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
        .person{cursor:default}
        .bullets{line-height:1.9}
        .contact p{margin:.2rem 0}

        /* hero */
        .hero{position:relative;border-radius:28px;overflow:hidden;margin:18px 0 6px}
        .hero__img{width:100%;aspect-ratio:21/9;object-fit:cover;display:block;filter:saturate(.98)}
        .hero__scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.25))}
        .hero__content{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:12px;padding:22px;color:#fff;max-width:min(720px,90%)}
        .hero h1{font-size:clamp(28px,4.6vw,44px);margin:0}
        .hero p{font-size:clamp(14px,2.2vw,18px);margin:0 0 6px}

        /* carousel */
        .carousel{position:relative;overflow:hidden;background:#000}
        .carousel img{width:100%;height:100%;object-fit:cover;display:block}
        .carousel__caption{position:absolute;left:14px;bottom:12px;color:#fff;font-weight:700;text-shadow:0 2px 12px rgba(0,0,0,.6)}
        .carousel__arrow{position:absolute;top:50%;transform:translateY(-50%);border:none;background:rgba(0,0,0,.35);color:#fff;font-size:28px;line-height:1;width:36px;height:36px;border-radius:50%;cursor:pointer}
        .carousel__arrow.left{left:10px}
        .carousel__arrow.right{right:10px}

        /* modal */
        .modal{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:14px;z-index:50}
        .modal__box{background:#fff;border-radius:18px;max-width:min(920px,95vw);max-height:90vh;overflow:auto}
        .modal__head{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid #eee}
        .modal__img{width:100%;height:auto;display:block}

        /* splash */
        .splash{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,#f0e7db, #ead8bf);z-index:80;animation:fadeOut .5s ease .6s forwards}
        .splash img{width:84px;height:84px;animation:bob 1.2s ease-in-out infinite}
        @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes fadeOut{to{opacity:0;visibility:hidden}}

        .foot{text-align:center;color:#7b6a5a;padding:28px 12px}
        .p16{padding:16px}
        @media (min-width:900px){
          .hero__content{padding:36px}
        }
      `}</style>
    </div>
  );
}