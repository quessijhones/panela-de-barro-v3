import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import menuData from "./menuData";

const LANGS = ["pt", "en", "ar"];

// helpers de i18n
function useI18n() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved || "pt";
  });
  useEffect(() => localStorage.setItem("lang", lang), [lang]);

  const ui = useMemo(
    () => ({
      pt: {
        brand: "Panela de Barro",
        about: "Sobre",
        menu: "Menu",
        gallery: "Galeria",
        location: "Localização",
        contact: "Contato",
        reservations: "Reservas",
        all: "Todos",
        mains: "Pratos Principais",
        sides: "Acompanhamentos",
        desserts: "Sobremesas",
        drinks: "Bebidas",
        seasonal: "Sazonal",
        view: "Ver detalhes",
        close: "Fechar",
        orderSoon: "Pedir (em breve)",
        heroTitle: "Panela de Barro",
        heroSubtitle:
          "Culinária Brasileira de Raiz no Qatar — lançamento em novembro (em breve).",
        storyTitle: "Nossa História",
        storyText:
          "Restaurante familiar brasileiro em Doha. Há 20 anos na gastronomia, trazemos o sabor da lenha e a música do interior. O chef-proprietário Quessi Jhones lidera a cozinha ao lado de sua mãe, Dona Cleuza (mineira, guardiã das tradições), e do irmão, Head Chef com mais de 10 anos em casas brasileiras. Em novembro abriremos nossas portas para receber você com clássicos regionais, hospitalidade generosa e raízes do Brasil.",
        contactTitle: "Contato",
        soon: "Em breve",
        email: "restaurant@paneladebarroqatar.com",
        phone: "+974 3047 5279",
        address: "Barwa Town, Doha, Qatar",
        badge: {
          mains: "Prato",
          sides: "Acomp.",
          desserts: "Sobrem.",
          drinks: "Bebidas",
          seasonal: "Sazonal",
        },
      },
      en: {
        brand: "Panela de Barro",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        location: "Location",
        contact: "Contact",
        reservations: "Reservations",
        all: "All",
        mains: "Mains",
        sides: "Side Dishes",
        desserts: "Desserts",
        drinks: "Beverages",
        seasonal: "Seasonal",
        view: "View details",
        close: "Close",
        orderSoon: "Order (soon)",
        heroTitle: "Panela de Barro",
        heroSubtitle:
          "Brazilian Heritage Cuisine in Qatar — grand opening in November (coming soon).",
        storyTitle: "Our Story",
        storyText:
          "A Brazilian family restaurant in Doha. With 20 years in hospitality, we bring fire-kissed flavors from a wood-fired stove and countryside music. Chef-owner Quessi Jhones leads the kitchen with his mother, Dona Cleuza from Minas Gerais, and his brother, the Head Chef with 10+ years of experience. Opening in November — expect soulful regional classics and generous Brazilian hospitality.",
        contactTitle: "Contact",
        soon: "Coming soon",
        email: "restaurant@paneladebarroqatar.com",
        phone: "+974 3047 5279",
        address: "Barwa Town, Doha, Qatar",
        badge: {
          mains: "Mains",
          sides: "Sides",
          desserts: "Desserts",
          drinks: "Drinks",
          seasonal: "Seasonal",
        },
      },
      ar: {
        brand: "بانيلّا دي بارّو",
        about: "عن المطعم",
        menu: "القائمة",
        gallery: "معرض",
        location: "الموقع",
        contact: "اتصال",
        reservations: "الحجوزات",
        all: "الكل",
        mains: "الأطباق الرئيسية",
        sides: "الأطباق الجانبية",
        desserts: "الحلويات",
        drinks: "المشروبات",
        seasonal: "الموسمي",
        view: "عرض التفاصيل",
        close: "إغلاق",
        orderSoon: "طلب (قريبًا)",
        heroTitle: "بانيلّا دي بارّو",
        heroSubtitle:
          "المطبخ البرازيلي الأصيل في قطر — الافتتاح الكبير في نوفمبر (قريبًا).",
        storyTitle: "قصتنا",
        storyText:
          "مطعم عائلي برازيلي في الدوحة. بخبرة 20 سنة في الضيافة، نقدم نكهات النار من موقد الحطب وموسيقى الريف. يقود المطبخ الشيف المالك كويِسّي جونس مع والدته دونا كليوزا من ميناس جيرايس وأخيه الشيف التنفيذي بخبرة 10+ سنوات. الافتتاح في نوفمبر — أطباق إقليمية أصيلة وضيافة برازيلية كريمة.",
        contactTitle: "اتصال",
        soon: "قريبًا",
        email: "restaurant@paneladebarroqatar.com",
        phone: "+974 3047 5279",
        address: "باروا تاون، الدوحة، قطر",
        badge: {
          mains: "رئيسي",
          sides: "جانبي",
          desserts: "حلويات",
          drinks: "مشروبات",
          seasonal: "موسمي",
        },
      },
    }),
    []
  );

  return { lang, setLang, t: ui[lang] };
}

// Splash animado com o logo
function Splash({ onDone }) {
  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onAnimationComplete={onDone}
    >
      <motion.img
        src="/logo.png"
        alt="Logo Panela de Barro"
        className="splash-logo"
        initial={{ scale: 0.6, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      />
      <motion.div
        className="splash-smoke"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1.2, repeat: 2, repeatType: "reverse" }}
      />
    </motion.div>
  );
}

// Header com seletor de idioma
function Header({ t, lang, setLang }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#hero" className="brand">
          <img src="/logo.png" alt="" />
          <span>{t.brand}</span>
        </a>
        <nav>
          <a href="#about">{t.about}</a>
          <a href="#menu">{t.menu}</a>
          <a href="#gallery">{t.gallery}</a>
          <a href="#location">{t.location}</a>
          <a href="#contact">{t.contact}</a>
          <a href="#reservations">{t.reservations}</a>
        </nav>
        <div className="langs">
          {LANGS.map((l) => (
            <button
              key={l}
              className={l === lang ? "active" : ""}
              onClick={() => setLang(l)}
              aria-label={`set language ${l}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

// Carrossel simples (hero)
function Hero({ t }) {
  const slides = [
    "/images/picanha-grelhada.jpg",
    "/images/feijoada-costela.jpg",
    "/images/moqueca-baiana.jpg",
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="hero">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[i]}
          src={slides[i]}
          alt="hero"
          className="hero-bg"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="hero-content">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {t.heroTitle}
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t.heroSubtitle}
        </motion.p>
        <div className="hero-ctas">
          <a href="#reservations" className="btn primary">
            {t.reservations}
          </a>
          <a href="#menu" className="btn">
            {t.menu}
          </a>
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="about container">
      <h2>{t.storyTitle}</h2>
      <p>{t.storyText}</p>
    </section>
  );
}

// Grid de menu
const FILTERS = ["all", "mains", "sides", "desserts", "drinks", "seasonal"];

function Menu({ t, lang }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const items = useMemo(() => {
    const list = menuData.map((d, idx) => ({ ...d, _id: idx }));
    return filter === "all" ? list : list.filter((d) => d.type === filter);
  }, [filter]);

  const badge = (type) => t.badge[type] || "";

  return (
    <section id="menu" className="menu container">
      <h2>{t.menu}</h2>

      <div className="chips">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={f === filter ? "chip active" : "chip"}
            onClick={() => setFilter(f)}
          >
            {t[f]}
          </button>
        ))}
      </div>

      <div className="grid">
        {items.map((item) => {
          const tr = item.translations[lang];
          const img = `/images/${item.image}`;
          return (
            <article
              key={item._id}
              className="card"
              onClick={() => setOpen(item)}
            >
              <img
                src={img}
                alt={tr.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{tr.name}</h3>
                  <span className="badge">{badge(item.type)}</span>
                </div>
                <p className="muted">{tr.desc}</p>
              </div>
            </article>
          );
        })}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-backdrop"
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <img
                src={`/images/${open.image}`}
                alt={open.translations[lang].name}
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
              />
              <div className="modal-body">
                <h3>{open.translations[lang].name}</h3>
                <p>{open.translations[lang].long || open.translations[lang].desc}</p>
                <div className="modal-actions">
                  <button className="btn" onClick={() => setOpen(null)}>
                    {t.close}
                  </button>
                  <button className="btn primary" disabled>
                    {t.orderSoon}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Gallery({ t }) {
  const imgs = [
    "/images/picanha-grelhada.jpg",
    "/images/feijoada-costela.jpg",
    "/images/moqueca-baiana.jpg",
    "/images/pastel.jpg",
  ];
  return (
    <section id="gallery" className="gallery container">
      <h2>{t.gallery}</h2>
      <div className="grid gallery-grid">
        {imgs.map((src) => (
          <img key={src} src={src} alt="gallery" loading="lazy" />
        ))}
      </div>
    </section>
  );
}

function Location({ t }) {
  return (
    <section id="location" className="location container">
      <h2>{t.location}</h2>
      <p className="muted">{t.address}</p>
      <div className="map-embed">
        <iframe
          title="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Barwa%20Town%2C%20Doha%2C%20Qatar&output=embed"
        />
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section id="contact" className="contact container">
      <h2>{t.contactTitle}</h2>
      <ul className="contact-list">
        <li>📧 {t.email}</li>
        <li>📞 {t.phone}</li>
        <li>📍 {t.address}</li>
      </ul>
      <p className="muted">© 2025 Panela de Barro — {t.soon}</p>
    </section>
  );
}

export default function App() {
  const { lang, setLang, t } = useI18n();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>{showSplash && <Splash onDone={() => setShowSplash(false)} />}</AnimatePresence>

      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Menu t={t} lang={lang} />
        <Gallery t={t} />
        <Location t={t} />
        <section id="reservations" className="reservations container">
          <h2>{t.reservations}</h2>
          <p className="muted">{t.soon}</p>
        </section>
        <Contact t={t} />
      </main>
    </>
  );
}
