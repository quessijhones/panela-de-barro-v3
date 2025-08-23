import React, { useMemo, useState } from "react";
import { HashRouter, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menu from "./menuData.js";
import { t, LOCALES } from "./i18n.js";

function useI18n() {
  const [lang, setLang] = useState("pt");
  const tr = useMemo(() => t[lang], [lang]);
  return { lang, setLang, tr };
}

function Navbar({ i18n }) {
  const { tr, lang, setLang } = i18n;
  return (
    <header className="nav">
      <Link to="/" className="brand">
        <img src="/logo.png" alt="Panela de Barro" />
        <span>Panela de Barro</span>
      </Link>

      <nav className="links">
        <a href="#about">{tr.nav.about}</a>
        <a href="#menu">{tr.nav.menu}</a>
        <a href="#gallery">{tr.nav.gallery}</a>
        <a href="#location">{tr.nav.location}</a>
        <a href="#contact">{tr.nav.contact}</a>
      </nav>

      <div className="langs">
        {LOCALES.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={l === lang ? "active" : ""}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}

function About({ tr }) {
  return (
    <section id="about" className="container">
      <h1>{tr.heroTitle}</h1>
      <p>{tr.heroDesc}</p>
      <p className="soon">{tr.comingSoon}</p>
    </section>
  );
}

function MenuGrid({ i18n }) {
  const { tr, lang } = i18n;
  const [active, setActive] = useState(null);

  return (
    <section id="menu" className="container">
      <h2>{tr.menuPreview}</h2>
      <div className="grid">
        {menu.map((item) => (
          <article key={item.id} className="card" onClick={() => setActive(item)}>
            <div className="card-media">
              <img
                src={`/images/${item.image}`}
                alt={item.title[lang]}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
              />
            </div>
            <div className="card-body">
              <h3>{item.title[lang]}</h3>
              <span className="pill">{tr.category[item.category]}</span>
              <p>{item.short[lang]}</p>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="modal-body"
              initial={{ y: 40, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/images/${active.image}`}
                alt={active.title[lang]}
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
              />
              <h3>{active.title[lang]}</h3>
              <p>{active.long[lang]}</p>
              <button className="btn" onClick={() => setActive(null)}>
                {tr.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Location({ tr }) {
  return (
    <section id="location" className="container">
      <h2>{tr.locationTitle}</h2>
      <p>{tr.locationText}</p>
      <div className="map-placeholder">Mapa fixo – Baraha Town, Doha, Qatar</div>
    </section>
  );
}

function Contact({ tr }) {
  return (
    <section id="contact" className="container">
      <h2>{tr.contactTitle}</h2>
      <ul className="contact">
        <li>
          📧 {tr.email}:{" "}
          <a href="mailto:restaurant@paneladebarroqatar.com">
            restaurant@paneladebarroqatar.com
          </a>
        </li>
        <li>
          📞 {tr.phone}: <a href="tel:+97430475279">+974 3047 5279</a>
        </li>
      </ul>
      <footer className="footer">© 2025 Panela de Barro</footer>
    </section>
  );
}

function ScrollToHash() {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
  return null;
}

export default function App() {
  const i18n = useI18n();
  const { tr } = i18n;

  return (
    <HashRouter>
      <Navbar i18n={i18n} />
      <ScrollToHash />
      <main>
        <About tr={tr} />
        <MenuGrid i18n={i18n} />
        <Location tr={tr} />
        <Contact tr={tr} />
      </main>
    </HashRouter>
  );
}