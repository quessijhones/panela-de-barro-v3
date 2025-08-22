// App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { MENU, i18nUI } from "./menuData";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";

// ========= util: tentativa progressiva de imagens =========
function ImageWithFallback({ candidates = [], fallback, alt, ...rest }) {
  const [srcIdx, setSrcIdx] = useState(0);
  const list = candidates && candidates.length ? candidates.map((n) => (n.startsWith("http") ? n : `/images/${n}`)) : [];
  const chain = [...list, fallback];

  return (
    <img
      src={chain[srcIdx]}
      alt={alt}
      onError={() => setSrcIdx((i) => Math.min(i + 1, chain.length - 1))}
      {...rest}
    />
  );
}

// ========= LOGO animado no carregamento =========
function LogoIntro({ onDone }) {
  return (
    <motion.div
      className="logo-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onAnimationComplete={onDone}
    >
      <motion.img
        src="/logo.png"
        alt="Panela de Barro logo"
        initial={{ scale: 0.6, y: 30, rotate: -8, opacity: 0 }}
        animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, duration: 0.8 }}
        className="logo-intro-img"
      />
      <motion.div
        className="logo-intro-title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Panela de Barro
      </motion.div>
    </motion.div>
  );
}

// ========= modal =========
function DishModal({ open, dish, lang, onClose }) {
  if (!open || !dish) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.98 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <ImageWithFallback
            candidates={dish.imageCandidates}
            fallback={dish.fallback}
            alt={dish.names[lang]}
            className="modal-img"
          />
          <div className="modal-body">
            <h3>{dish.names[lang]}</h3>
            <p className="modal-desc">{dish.descriptions[lang]}</p>
            {dish.story?.[lang] && <p className="modal-story">{dish.story[lang]}</p>}
            <button className="btn" onClick={onClose}>✦ {i18nUI[lang].details.close}</button>
          </div>
        </motion.div>
        <div className="modal-clickout" onClick={onClose} />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [lang, setLang] = useState("pt");          // PT padrão
  const [showIntro, setShowIntro] = useState(true);
  const [tab, setTab] = useState("all");
  const [openDish, setOpenDish] = useState(null);

  // rolagem suave para o menu ao clicar CTA
  const goMenu = () => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  // textos de UI
  const t = i18nUI[lang];

  // filtros
  const filtered = useMemo(() => {
    if (tab === "all") return MENU;
    if (tab === "seasonal") return MENU.filter((d) => d.seasonal);
    return MENU.filter((d) => d.category === tab);
  }, [tab]);

  // acessibilidade: direção RTL para árabe
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="app">
      <AnimatePresence>{showIntro && <LogoIntro onDone={() => setShowIntro(false)} />}</AnimatePresence>

      {/* NAV */}
      <header className="nav">
        <div className="brand">
          <img src="/logo.png" alt="logo" />
          <span>{t.brand}</span>
        </div>
        <nav>
          <a href="#about">{t.nav.about}</a>
          <a href="#menu">{t.nav.menu}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#location">{t.nav.location}</a>
          <a href="#contact">{t.nav.contact}</a>
          <a href="#reservations" className="pill">{t.nav.reservations}</a>
        </nav>
        <div className="langs">
          <button className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")}>BR PT</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>GB EN</button>
          <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>QA AR</button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <motion.div
          className="hero-content"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>{t.hero.title}</h1>
          <p className="sub">{t.hero.subtitle}</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#reservations">{t.hero.ctaReserve}</a>
            <button className="btn ghost" onClick={goMenu}>{t.hero.ctaMenu}</button>
          </div>
          <div className="badge-coming">{t.details.coming}</div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="about" className="section">
        <h2>{t.story.title}</h2>
        <p className="lead">{t.story.body}</p>
      </section>

      {/* MENU */}
      <section id="menu" className="section">
        <h2>{t.nav.menu}</h2>

        <div className="tabs">
          {[
            ["all", t.filters.all],
            ["mains", t.filters.mains],
            ["sides", t.filters.sides],
            ["desserts", t.filters.desserts],
            ["drinks", t.filters.drinks],
            ["seasonal", t.filters.seasonal],
          ].map(([key, label]) => (
            <button key={key} className={tab === key ? "active" : ""} onClick={() => setTab(key)}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid">
          {filtered.map((dish) => (
            <motion.article
              key={dish.id}
              className="card"
              whileHover={{ y: -4 }}
              onClick={() => setOpenDish(dish)}
            >
              {dish.seasonal && <span className="tag">{t.seasonalBadge}</span>}
              <ImageWithFallback
                candidates={dish.imageCandidates}
                fallback={dish.fallback}
                alt={dish.names[lang]}
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">{dish.names[lang]}</h3>
                <p className="card-text">{dish.descriptions[lang]}</p>
                <button className="btn tiny">{t.details.view}</button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALERIA – carrossel simples (auto-scroll) */}
      <section id="gallery" className="section">
        <h2>{t.nav.gallery}</h2>
        <div className="marquee">
          {MENU.slice(0, 12).map((d) => (
            <ImageWithFallback
              key={`g-${d.id}`}
              candidates={d.imageCandidates}
              fallback={d.fallback}
              alt={d.names[lang]}
            />
          ))}
          {MENU.slice(0, 12).map((d) => (
            <ImageWithFallback
              key={`g2-${d.id}`}
              candidates={d.imageCandidates}
              fallback={d.fallback}
              alt={d.names[lang]}
            />
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO / RESERVAS / CONTATO */}
      <section id="location" className="section">
        <h2>{t.nav.location}</h2>
        <p><strong>Barwa Town, Doha, Qatar</strong></p>
        <div className="map-embed">
          <iframe
            title="map"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Barwa%20Town%20Doha%20Qatar&output=embed"
          />
        </div>
      </section>

      <section id="reservations" className="section">
        <h2>{t.nav.reservations}</h2>
        <p>{t.details.coming}</p>
      </section>

      <section id="contact" className="section">
        <h2>{t.nav.contact}</h2>
        <ul className="contact">
          <li>📧 {t.contact.email}</li>
          <li>📞 {t.contact.phone}</li>
          <li>📍 {t.contact.address}</li>
        </ul>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} {t.brand}</div>
        <div className="socials">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </footer>

      <DishModal open={!!openDish} dish={openDish} lang={lang} onClose={() => setOpenDish(null)} />
    </div>
  );
}


