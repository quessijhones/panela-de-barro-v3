// src/App.jsx
import React, { createContext, useContext, useMemo, useState } from "react";
import { HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { LOCALES, t } from "./i18n";
import { menu, categories } from "./menuData";
import "./styles.css";

const I18nCtx = createContext();
const useI18n = () => useContext(I18nCtx);

function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang">
      {Object.entries(LOCALES).map(([k, v]) => (
        <button key={k} onClick={() => setLang(v)} className={lang === v ? "chip active" : "chip"}>
          {v === "pt" ? "PT" : v === "en" ? "EN" : "AR"}
        </button>
      ))}
    </div>
  );
}

function Navbar() {
  const { lang } = useI18n();
  const nav = t.nav[lang];
  return (
    <header className="nav">
      <Link to="/" className="brand"><img src="/logo.png" alt="logo" /> <span>Panela de Barro</span></Link>
      <nav>
        <Link to="/#about">{nav.about}</Link>
        <Link to="/menu">{nav.menu}</Link>
        <a href="#gallery">{nav.gallery}</a>
        <a href="#location">{nav.location}</a>
        <a href="#contact">{nav.contact}</a>
      </nav>
      <LangSwitch />
    </header>
  );
}

function Hero() {
  const { lang } = useI18n();
  return (
    <section id="about" className="hero">
      <h1>{t.heroTitle[lang]}</h1>
      <p>{t.heroText[lang]}</p>
      <p className="opening">{t.opening[lang]}</p>
    </section>
  );
}

function Card({ item, onOpen, lang }) {
  return (
    <article className="card" onClick={() => onOpen(item)}>
      <img src={item.img} alt={item.title[lang]} loading="lazy" />
      <div className="card-body">
        <div className="card-title">
          <h3>{item.title[lang]}</h3>
          {item.badges?.[0] && <span className="badge">{t.tag[lang][item.badges[0]] || ""}</span>}
        </div>
        <p className="muted">{item.short[lang]}</p>
      </div>
    </article>
  );
}

function Modal({ open, onClose, item, lang }) {
  if (!open || !item) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <img src={item.img} alt={item.title[lang]} />
        <h3>{item.title[lang]}</h3>
        <p className="muted">{item.long[lang]}</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Home() {
  const { lang } = useI18n();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const preview = useMemo(() => menu.filter(m => m.cat === "mains").slice(0, 3), []);
  const openItem = (it) => { setCurrent(it); setOpen(true); };

  return (
    <>
      <Hero />
      <section className="section">
        <div className="section-head">
          <h2>{t.previewTitle[lang]}</h2>
          <button className="link" onClick={() => navigate("/menu")}>{t.nav[lang].menu} →</button>
        </div>
        <div className="grid">
          {preview.map((it) => (
            <Card key={it.id} item={it} lang={lang} onOpen={openItem} />
          ))}
        </div>
      </section>

      <section id="location" className="section">
        <h2>{t.nav[lang].location}</h2>
        <p className="muted">
          {t.footer[lang].address} • {t.footer[lang].phone} • {t.footer[lang].email}
        </p>
        <div className="map">
          <iframe
            title="map"
            loading="lazy"
            src="https://www.google.com/maps?q=Baraha%20Town%20Doha%20Qatar&output=embed"
          />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>{t.nav[lang].contact}</h2>
        <ul className="muted">
          <li>📧 {t.footer[lang].email}</li>
          <li>📞 {t.footer[lang].phone}</li>
          <li>📍 {t.footer[lang].address}</li>
        </ul>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} item={current} lang={lang} />
    </>
  );
}

function MenuPage() {
  const { lang } = useI18n();
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(
    () => (filter === "all" ? menu : menu.filter((m) => m.cat === filter)),
    [filter]
  );
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const openItem = (it) => { setCurrent(it); setOpen(true); };

  return (
    <section className="section">
      <div className="section-head">
        <h2>{t.nav[lang].menu}</h2>
      </div>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c.key}
            className={filter === c.key ? "chip active" : "chip"}
            onClick={() => setFilter(c.key)}
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((it) => (
          <Card key={it.id} item={it} lang={lang} onOpen={openItem} />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} item={current} lang={lang} />
    </section>
  );
}

export default function AppRoot() {
  const [lang, setLang] = useState(LOCALES.PT);
  const ctx = useMemo(() => ({ lang, setLang }), [lang]);
  return (
    <I18nCtx.Provider value={ctx}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </HashRouter>
    </I18nCtx.Provider>
  );
}