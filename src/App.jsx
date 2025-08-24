import React, { useMemo, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { LOCALES, STRINGS, t } from "./i18n";
import { MENU, CATEGORIES } from "./menuData";

// util simples de locale no hash ?lang=pt
function useLang() {
  const nav = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const cur = params.get("lang") || LOCALES.PT;
  const setLang = (next) => {
    const p = new URLSearchParams(search);
    p.set("lang", next);
    nav({ search: `?${p.toString()}` }, { replace: true });
  };
  return [cur, setLang];
}

function Brand({ lang }) {
  return <span className="brand">{STRINGS.brand[lang]}</span>;
}

function LangSwitcher({ lang, setLang }) {
  return (
    <div className="lang">
      {[LOCALES.PT, LOCALES.EN, LOCALES.AR].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`chip ${lang === l ? "chip--active" : ""}`}
          aria-label={l.toUpperCase()}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navbar({ lang, setLang }) {
  const N = STRINGS.nav;
  return (
    <header className="nav">
      <Link to="/#home" className="logo">
        <img src="/logo.png" alt="logo" />
        <Brand lang={lang} />
      </Link>
      <nav>
        <a href="#about">{N.about[lang]}</a>
        <Link to="/#/menu">{N.menu[lang]}</Link>
        <Link to="/#/gallery">{N.gallery[lang]}</Link>
        <Link to="/#/location">{N.location[lang]}</Link>
        <Link to="/#/contact">{N.contact[lang]}</Link>
      </nav>
      <LangSwitcher lang={lang} setLang={setLang} />
    </header>
  );
}

/* ---------- UI helpers ---------- */
function Badge({ children }) {
  return <span className="badge">{children}</span>;
}
function DishCard({ item, lang, onClick }) {
  return (
    <article className="card" onClick={() => onClick(item)}>
      <img src={item.image} alt={item.title[lang]} loading="lazy" />
      <div className="card__body">
        <h3>{item.title[lang]}</h3>
        <Badge>{labelFor(item.badge, lang)}</Badge>
        <p>{item.short[lang]}</p>
      </div>
    </article>
  );
}
function labelFor(cat, lang) {
  const F = STRINGS.filters;
  switch (cat) {
    case CATEGORIES.MAINS:
      return F.mains[lang];
    case CATEGORIES.SIDES:
      return F.sides[lang];
    case CATEGORIES.DESSERTS:
      return F.desserts[lang];
    case CATEGORIES.BEVERAGES:
      return F.beverages[lang];
    case CATEGORIES.SEASONAL:
      return F.seasonal[lang];
    case CATEGORIES.CHEF:
      return F.chef[lang];
    default:
      return F.all[lang];
  }
}

/* ---------- Pages ---------- */
function Home({ lang }) {
  const [open, setOpen] = useState(null);
  const hero = MENU.slice(0, 3).map((d) => d.image);

  return (
    <main id="home">
      {/* Splash simples */}
      <div className="splash">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* Hero / Carrossel automático */}
      <section className="hero" aria-label="carousel">
        <div className="hero__track">
          {hero.concat(hero).map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden="true" />
          ))}
        </div>
        <div className="hero__text">
          <h1>{t("home.heroTitle", lang)}</h1>
          <p>{t("home.heroSubtitle", lang)}</p>
          <Link className="btn" to="/#/menu">
            {t("home.ctaMenu", lang)}
          </Link>
        </div>
      </section>

      {/* Preview */}
      <section className="section">
        <h2>{t("home.previewTitle", lang)}</h2>
        <div className="grid">
          {MENU.slice(0, 3).map((it) => (
            <DishCard key={it.id} item={it} lang={lang} onClick={setOpen} />
          ))}
        </div>
      </section>

      {open && <DishModal item={open} lang={lang} onClose={() => setOpen(null)} />}
    </main>
  );
}

function MenuPage({ lang }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "all") return MENU;
    return MENU.filter((d) => d.category === filter || d.badge === filter);
  }, [filter]);

  const F = STRINGS.filters;
  const chips = [
    { k: "all", label: F.all[lang] },
    { k: CATEGORIES.MAINS, label: F.mains[lang] },
    { k: CATEGORIES.SIDES, label: F.sides[lang] },
    { k: CATEGORIES.DESSERTS, label: F.desserts[lang] },
    { k: CATEGORIES.BEVERAGES, label: F.beverages[lang] },
    { k: CATEGORIES.SEASONAL, label: F.seasonal[lang] },
    { k: CATEGORIES.CHEF, label: F.chef[lang] },
  ];

  return (
    <main className="section">
      <h1>{STRINGS.nav.menu[lang]}</h1>
      <div className="chips">
        {chips.map((c) => (
          <button
            key={c.k}
            className={`chip ${filter === c.k ? "chip--active" : ""}`}
            onClick={() => setFilter(c.k)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((it) => (
          <DishCard key={it.id} item={it} lang={lang} onClick={setOpen} />
        ))}
      </div>

      {open && <DishModal item={open} lang={lang} onClose={() => setOpen(null)} />}
    </main>
  );
}

function GalleryPage({ lang }) {
  // galeria responsiva (usa mesmas imagens do menu)
  return (
    <main className="section">
      <h1>{STRINGS.gallery.title[lang]}</h1>
      <div className="masonry">
        {MENU.map((d) => (
          <img key={d.id} src={d.image} alt={d.title[lang]} loading="lazy" />
        ))}
      </div>
    </main>
  );
}

function LocationPage({ lang }) {
  return (
    <main className="section">
      <h1>{STRINGS.location.title[lang]}</h1>
      <p>{STRINGS.location.address[lang]}</p>
      <iframe
        className="map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=Baraha%20Town%20Doha%20Qatar&t=&z=14&ie=UTF8&iwloc=&output=embed"
        title="map"
      />
    </main>
  );
}

function ContactPage({ lang }) {
  return (
    <main className="section">
      <h1>{STRINGS.contact.title[lang]}</h1>
      <ul className="list">
        <li>
          <strong>{STRINGS.contact.addressLabel[lang]}: </strong>
          {STRINGS.location.address[lang]}
        </li>
        <li>
          <strong>{STRINGS.contact.phoneLabel[lang]}: </strong>
          +974 3047 5279
        </li>
        <li>
          <strong>{STRINGS.contact.emailLabel[lang]}: </strong>
          restaurant@paneladebarroqatar.com
        </li>
      </ul>
    </main>
  );
}

/* ---------- Dish Modal ---------- */
function Tag({ text }) {
  return <span className="tag">{text}</span>;
}
function DishModal({ item, lang, onClose }) {
  const L = STRINGS.dishLabels;
  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title[lang]} />
        <div className="modal__body">
          <div className="modal__head">
            <h3>{item.title[lang]}</h3>
            <Badge>{labelFor(item.badge, lang)}</Badge>
          </div>
          <p className="lead">{item.short[lang]}</p>
          <p>{item.long[lang]}</p>

          <div className="nutrition">
            <div>
              <strong>{L.kcal[lang]}:</strong> {item.nutrition.kcal}
            </div>
            <div>
              <strong>{L.carbs[lang]}:</strong> {item.nutrition.carbs}g
            </div>
            <div>
              <strong>{L.protein[lang]}:</strong> {item.nutrition.protein}g
            </div>
            <div>
              <strong>{L.fat[lang]}:</strong> {item.nutrition.fat}g
            </div>
          </div>

          <div className="tags">
            {item.tags.map((t) => (
              <Tag key={t} text={t} />
            ))}
            {item.allergens.length > 0 && (
              <Tag text={`${STRINGS.dishLabels.allergens[lang]}: ${item.allergens.join(", ")}`} />
            )}
          </div>

          <button className="btn btn--ghost" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [lang, setLang] = useLang();

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/menu" element={<MenuPage lang={lang} />} />
        <Route path="/gallery" element={<GalleryPage lang={lang} />} />
        <Route path="/location" element={<LocationPage lang={lang} />} />
        <Route path="/contact" element={<ContactPage lang={lang} />} />
      </Routes>
      <footer className="footer">panela-de-barro-v3.vercel.app</footer>
    </>
  );
}
