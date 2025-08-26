// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { LOCALES, getLang, setLang, t } from "./i18n";
import { MENU } from "./menuData";
import "./styles.css";

// imagens imersivas (public/immersive/*.jpg)
const IMMS = ["amazonia", "cerrado", "lencois", "litoral", "serra"].map(
  (n) => `/immersive/${n}.jpg`
);

function useRoute() {
  const read = () => (location.hash.replace("#", "") || "/home");
  const [route, setRoute] = useState(read());
  useEffect(() => {
    const onHash = () => setRoute(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, setRoute];
}

function LangPills({ lang, onChange }) {
  return (
    <div className="lang-pills">
      {LOCALES.map((lc) => (
        <button
          key={lc}
          aria-label={lc}
          className={`pill ${lang === lc ? "active" : ""}`}
          onClick={() => onChange(lc)}
        >
          {lc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navbar({ lang }) {
  const links = [
    { href: "#/about", label: t(lang, "nav.about") },
    { href: "#/menu", label: t(lang, "nav.menu") },
    { href: "#/gallery", label: t(lang, "nav.gallery") },
    { href: "#/location", label: t(lang, "nav.location") },
    { href: "#/contact", label: t(lang, "nav.contact") },
    { href: "#/firewood", label: t(lang, "nav.firewood") }
  ];
  return (
    <header className="nav">
      <div className="brand">
        <img src="/logo.png" alt="" width="26" height="26" />
        <span>{t(lang, "brand")}</span>
      </div>
      <nav>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ lang }) {
  return (
    <section className="hero">
      <div className="smoke" aria-hidden />
      <div className="hero-inner">
        <h1>{t(lang, "hero.title")}</h1>
        <p>{t(lang, "hero.subtitle")}</p>
        <p className="soon">{t(lang, "hero.soon")}</p>
        <a className="cta" href="#/menu">
          {t(lang, "hero.cta")}
        </a>
      </div>
      <div className="hero-bg" />
    </section>
  );
}

function ImmersiveStripes() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal");
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll(".stripe").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className="immersive">
      {IMMS.map((src, i) => (
        <div key={src} className="stripe" style={{ backgroundImage: `url(${src})` }}>
          <div className="veil" />
        </div>
      ))}
    </section>
  );
}

function MenuGrid({ lang }) {
  const [cat, setCat] = useState("all");
  const cats = [
    { id: "all", label: "All" },
    { id: "mains", label: t(lang, "tags.mains") },
    { id: "sides", label: t(lang, "tags.sides") },
    { id: "desserts", label: t(lang, "tags.desserts") },
    { id: "beverages", label: t(lang, "tags.beverages") },
    { id: "seasonal", label: t(lang, "tags.seasonal") },
    { id: "chef", label: t(lang, "tags.chef") }
  ];

  const list = useMemo(() => {
    return MENU.filter((m) => (cat === "all" ? true : m.category === cat));
  }, [cat]);

  return (
    <section className="container">
      <h2>{t(lang, "preview")}</h2>
      <div className="filters">
        {cats.map((c) => (
          <button
            key={c.id}
            className={`pill ${cat === c.id ? "active" : ""}`}
            onClick={() => setCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map((item) => (
          <article key={item.id} className="card">
            <img src={item.image} alt={item.title[lang]} loading="lazy" />
            <div className="card-body">
              <div className="title-row">
                <h3>{item.title[lang]}</h3>
                {item.badge && <span className="badge">{t(lang, `tags.${item.badge}`)}</span>}
              </div>
              <p>{item.brief[lang]}</p>
              <div className="chips">
                {item.diet?.map((d) => (
                  <span key={d} className="chip">
                    {t(lang, `diet.${d}`)}
                  </span>
                ))}
              </div>
              <a className="more" href={`#/menu/${item.id}`}>
                •••
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery({ lang }) {
  // usa as mesmas imagens do menu para a galeria
  const pics = MENU.slice(0, 12).map((m) => m.image);
  return (
    <section className="container">
      <h2>{t(lang, "gallery.title")}</h2>
      <div className="masonry">
        {pics.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" />
        ))}
      </div>
    </section>
  );
}

function Location({ lang }) {
  const q = encodeURIComponent("Baraha Town, Doha, Qatar");
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <section className="container">
      <h2>{t(lang, "location.title")}</h2>
      <p className="lead">{t(lang, "location.addr")}</p>
      <div className="map-wrap">
        <iframe title="Map" src={src} width="100%" height="380" style={{ border: 0 }} loading="lazy" />
      </div>
      <a className="pill back" href="#/home">
        {t(lang, "nav.back")}
      </a>
    </section>
  );
}

function Contact({ lang }) {
  return (
    <section className="container">
      <h2>{t(lang, "contact.title")}</h2>
      <p>
        <strong>{t(lang, "contact.phone")}:</strong> +974 3047 5279
      </p>
      <p>
        <strong>{t(lang, "contact.email")}:</strong> restaurant@paneladebarroqatar.com
      </p>
      <a className="pill back" href="#/home">
        {t(lang, "contact.backHome")}
      </a>
    </section>
  );
}

function About({ lang }) {
  return (
    <section className="container prose">
      <h2>{t(lang, "about.title")}</h2>
      <p><em>{t(lang, "about.owner")}</em></p>
      <p>{t(lang, "about.section1")}</p>
      <h3>{t(lang, "about.why")}</h3>
      <p>{t(lang, "about.section2")}</p>
      <div className="two-col">
        <img src="/images/moqueca-baiana.jpg" alt="" />
        <img src="/immersive/amazonia.jpg" alt="" />
      </div>
      <h3>{t(lang, "about.teamTitle")}</h3>
      <p>{t(lang, "about.team")}</p>
      <h3>{t(lang, "about.cultureTitle")}</h3>
      <p>{t(lang, "about.culture")}</p>
      <a className="pill back" href="#/home">
        {t(lang, "nav.back")}
      </a>
    </section>
  );
}

function Firewood({ lang }) {
  return (
    <section className="container prose">
      <h2>{t(lang, "firewood.title")}</h2>
      <p>{t(lang, "firewood.text")}</p>
      <div className="two-col">
        <img src="/immersive/serra.jpg" alt="" />
        <img src="/immersive/lencois.jpg" alt="" />
      </div>
      <a className="pill back" href="#/home">
        {t(lang, "nav.back")}
      </a>
    </section>
  );
}

export default function App() {
  const [route] = useRoute();
  const [lang, setLangState] = useState(getLang());

  // reage a mudança de idioma sem F5
  useEffect(() => {
    const onL = () => setLangState(getLang());
    window.addEventListener("langchange", onL);
    return () => window.removeEventListener("langchange", onL);
  }, []);

  const changeLang = (lc) => {
    setLang(lc);         // atualiza URL ?lang=lc
    setLangState(lc);    // re-render imediato
  };

  // splash do logo
  useEffect(() => {
    const splash = document.getElementById("logo-splash");
    if (!splash) return;
    splash.classList.add("show");
    const to = setTimeout(() => splash.classList.add("hide"), 1400);
    return () => clearTimeout(to);
  }, []);

  return (
    <>
      <Navbar lang={lang} />
      <LangPills lang={lang} onChange={changeLang} />

      {route === "/home" && (
        <>
          <Hero lang={lang} />
          <ImmersiveStripes />
          <MenuGrid lang={lang} />
        </>
      )}

      {route === "/menu" && <MenuGrid lang={lang} />}
      {route.startsWith("/menu/") && <MenuGrid lang={lang} />} {/* detalhe futuro */}

      {route === "/gallery" && <Gallery lang={lang} />}
      {route === "/location" && <Location lang={lang} />}
      {route === "/contact" && <Contact lang={lang} />}
      {route === "/about" && <About lang={lang} />}
      {route === "/firewood" && <Firewood lang={lang} />}

      <footer className="foot">
        <a href="#/home" className="pill">{t(lang,"nav.back")}</a>
      </footer>
    </>
  );
}