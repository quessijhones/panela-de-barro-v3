import React, { useEffect, useMemo, useState } from "react";
import { MENU } from "./menuData";
import { UI, t, currentLocale, setLocale } from "./i18n";

const routes = ["home", "menu", "gallery", "location", "contact"];

function useHashRoute() {
  const [route, setRoute] = useState(() => (window.location.hash.replace("#/", "") || "home"));
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function useLocale() {
  const [lang, setLang] = useState(currentLocale());
  useEffect(() => {
    const onLang = () => setLang(currentLocale());
    window.addEventListener("langchange", onLang);
    window.addEventListener("popstate", onLang);
    return () => {
      window.removeEventListener("langchange", onLang);
      window.removeEventListener("popstate", onLang);
    };
  }, []);
  return lang;
}

function Nav() {
  const lang = useLocale();
  return (
    <header className="nav">
      <div className="brand" onClick={() => (window.location.hash = "/home")}>
        <img src="/images/placeholder.jpg" alt="" className="brand-logo" />
        <span>{t(UI.brand, lang)}</span>
      </div>
      <nav>
        <a href="#/home">{t(UI.nav.about, lang)}</a>
        <a href="#/menu">{t(UI.nav.menu, lang)}</a>
        <a href="#/gallery">{t(UI.nav.gallery, lang)}</a>
        <a href="#/location">{t(UI.nav.location, lang)}</a>
        <a href="#/contact">{t(UI.nav.contact, lang)}</a>
      </nav>
      <div className="lang">
        {["pt", "en", "ar"].map((L) => (
          <button
            key={L}
            className={`chip ${lang === L ? "active" : ""}`}
            onClick={() => setLocale(L)}
          >
            {L.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}

/* ---------------- HOME ---------------- */
function Home() {
  const lang = useLocale();
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-overlay">
          <h1>{t(UI.home.headline, lang)}</h1>
          <p>{t(UI.home.sub, lang)}</p>
          <a href="#/menu" className="btn">{t(UI.home.ctaMenu, lang)}</a>
        </div>
        <div className="hero-carousel">
          {["vaca-atolada.jpg", "feijoada-costela.jpg", "picanha-grelhada.jpg"].map((f, i) => (
            <div className="hero-slide" style={{ "--i": i }} key={f}>
              <img src={`/images/${f}`} alt="" />
            </div>
          ))}
        </div>
      </section>

      <h2 className="mt-6">{t(UI.home.preview, lang)}</h2>
      <div className="grid">
        {MENU.slice(0, 3).map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

/* ---------------- MENU ---------------- */
const FILTERS = [
  { id: "all", label: UI.filters.all },
  { id: "mains", label: UI.filters.mains },
  { id: "sides", label: UI.filters.sides },
  { id: "desserts", label: UI.filters.desserts },
  { id: "beverages", label: UI.filters.beverages },
  { id: "seasonal", label: UI.filters.seasonal },
  { id: "chef", label: UI.filters.chef },
];

function MenuPage() {
  const lang = useLocale();
  const [filter, setFilter] = useState("all");
  const list = useMemo(() => (filter === "all" ? MENU : MENU.filter((m) => m.category === filter)), [filter]);
  return (
    <main className="container">
      <h1>{t(UI.nav.menu, lang)}</h1>
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`chip ${filter === f.id ? "active" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {t(f.label, lang)}
          </button>
        ))}
      </div>
      <div className="grid">
        {list.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

function MenuCard({ item }) {
  const lang = useLocale();
  const [open, setOpen] = useState(false);
  const L = (o) => (o?.[lang] ?? o?.en ?? "");
  return (
    <>
      <article className="card" onClick={() => setOpen(true)}>
        <div className="card-media">
          <img src={item.image} alt={L(item.title)} loading="lazy" />
        </div>
        <div className="card-body">
          <div className="pill-row"><span className="pill">{prettyCategory(item.category, lang)}</span></div>
          <h3>{L(item.title)}</h3>
          <p className="muted">{L(item.summary)}</p>
        </div>
      </article>
      {open && <DishModal item={item} onClose={() => setOpen(false)} lang={lang} />}
    </>
  );
}

function prettyCategory(cat, lang) {
  switch (cat) {
    case "mains": return t(UI.filters.mains, lang);
    case "sides": return t(UI.filters.sides, lang);
    case "desserts": return t(UI.filters.desserts, lang);
    case "beverages": return t(UI.filters.beverages, lang);
    case "seasonal": return t(UI.filters.seasonal, lang);
    case "chef": return t(UI.filters.chef, lang);
    default: return "";
  }
}

function DishModal({ item, onClose, lang }) {
  const L = (o) => (o?.[lang] ?? o?.en ?? "");
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-media">
          <img src={item.image} alt={L(item.title)} />
        </div>
        <div className="modal-body">
          <div className="modal-top">
            <h3>{L(item.title)}</h3>
            <button className="chip" onClick={onClose}>{t(UI.modal.close, lang)}</button>
          </div>

          <div className="pill-row mt-1"><span className="pill">{prettyCategory(item.category, lang)}</span></div>
          <p className="mt-2">{L(item.description)}</p>

          <div className="meta">
            <div><strong>{t(UI.modal.allergens, lang)}:</strong> {renderAllergens(item.allergens || [])}</div>
          </div>

          <h4 className="mt-3">{t(UI.modal.nutrition, lang)}</h4>
          <table className="nutri">
            <tbody>
              <tr><td>{t(UI.modal.kcal, lang)}</td><td>{item.nutrition.kcal}</td></tr>
              <tr><td>{t(UI.modal.carbs, lang)}</td><td>{item.nutrition.carbs} g</td></tr>
              <tr><td>{t(UI.modal.protein, lang)}</td><td>{item.nutrition.protein} g</td></tr>
              <tr><td>{t(UI.modal.fat, lang)}</td><td>{item.nutrition.fat} g</td></tr>
            </tbody>
          </table>

          <div className="modal-actions">
            <button className="btn ghost" onClick={onClose}>{t(UI.modal.close, lang)}</button>
            <button className="btn">{t(UI.modal.orderSoon, lang)}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderAllergens(list) {
  if (!list.length) return <span>—</span>;
  const icons = { dairy: "🧀", eggs: "🥚", gluten: "🌾", "gluten-free": "🚫🌾" };
  return (
    <span>
      {list.map((k, i) => (
        <span key={k} className="allergen">
          {icons[k] || "⚠️"} {k}{i < list.length - 1 ? " · " : ""}
        </span>
      ))}
    </span>
  );
}

/* ---------------- GALLERY / LOCATION / CONTACT ---------------- */
function Gallery() {
  const lang = useLocale();
  const photos = [
    "/images/vaca-atolada.jpg","/images/feijoada-costela.jpg","/images/picanha-grelhada.jpg",
    "/images/pasteis-brasileiros.jpg","/images/polenta-frita.jpg","/images/pao-de-queijo.jpg",
    "/images/encanto-de-coco.jpg","/images/doce-da-roca-com-gelo.jpg","/images/amazon-breeze.jpg","/images/uva-limao-gelo.jpg",
  ];
  const [big, setBig] = useState(null);
  return (
    <main className="container">
      <h1>{t(UI.gallery.title, lang)}</h1>
      <div className="gallery">
        {photos.map((src) => (
          <button key={src} className="gallery-item" onClick={() => setBig(src)}>
            <img src={src} loading="lazy" alt="" />
          </button>
        ))}
      </div>
      {big && (
        <div className="modal-backdrop" onClick={() => setBig(null)}>
          <div className="lightbox" onClick={(e) => e.stopPropagation()}><img src={big} alt="" /></div>
        </div>
      )}
    </main>
  );
}

function Location() {
  const lang = useLocale();
  return (
    <main className="container">
      <h1>{t(UI.location.title, lang)}</h1>
      <p className="muted">{t(UI.location.address, lang)}</p>
      <div className="mapBox">
        <iframe title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Baraha%20Town,%20Doha,%20Qatar&output=embed"></iframe>
      </div>
    </main>
  );
}

function Contact() {
  const lang = useLocale();
  return (
    <main className="container">
      <h1>{t(UI.contact.title, lang)}</h1>
      <p className="muted">Email: {UI.contact.email}</p>
      <p className="muted">Phone: {UI.contact.phone}</p>
    </main>
  );
}

/* ---------------- APP ROOT ---------------- */
export default function App() {
  const route = useHashRoute();
  useEffect(() => {
    if (!routes.includes(route)) window.location.hash = "/home";
  }, [route]);

  return (
    <>
      <Nav />
      {route === "home" && <Home />}
      {route === "menu" && <MenuPage />}
      {route === "gallery" && <Gallery />}
      {route === "location" && <Location />}
      {route === "contact" && <Contact />}
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Panela de Barro</div>
      <div className="muted">Doha – Qatar · Halal</div>
    </footer>
  );
}