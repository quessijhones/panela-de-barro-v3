import React, { useEffect, useMemo, useState } from "react";
import { MENU } from "./menuData";

const T = {
  en: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact", reservations: "Reservations" },
    heroTitle: "Panela de Barro",
    heroSubtitle: "Brazilian Heritage Cuisine in Qatar",
    ctas: { reserve: "Reserve a Table", seeMenu: "See the Menu" },
    ourStory: "Our Story",
    storyText:
      "We celebrate slow cooking, countryside flavors and generous hospitality. Led by Chef Cass, we serve iconic regional classics with fresh halal ingredients.",
    categories: { all: "All", mains: "Mains", sides: "Sides", desserts: "Desserts", drinks: "Drinks" },
    search: "Search dishes...",
    price: "Price",
    details: "Details",
    galleryTitle: "Gallery",
    locationTitle: "Location & Hours",
    contactTitle: "Contact",
    address: "Address",
    hours: "Hours",
    today: "Daily: 12:00–23:00",
    bookFly: "Booking by phone or WhatsApp",
    footer: "© Panela de Barro — Brazilian comfort food crafted with fresh ingredients and lots of love.",
    modalClose: "Close"
  },
  pt: {
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato", reservations: "Reservas" },
    heroTitle: "Panela de Barro",
    heroSubtitle: "Culinária Brasileira de Raiz no Catar",
    ctas: { reserve: "Reservar Mesa", seeMenu: "Ver o Menu" },
    ourStory: "Nossa História",
    storyText:
      "Valorizamos o fogo lento, os sabores do interior e a hospitalidade generosa. Liderados pelo Chef Cass, servimos clássicos regionais icônicos com ingredientes frescos halal.",
    categories: { all: "Todos", mains: "Pratos Principais", sides: "Acompanhamentos", desserts: "Sobremesas", drinks: "Bebidas" },
    search: "Buscar pratos...",
    price: "Preço",
    details: "Detalhes",
    galleryTitle: "Galeria",
    locationTitle: "Localização & Horários",
    contactTitle: "Contato",
    address: "Endereço",
    hours: "Horários",
    today: "Diariamente: 12:00–23:00",
    bookFly: "Reservas por telefone ou WhatsApp",
    footer: "© Panela de Barro — Comida brasileira feita com ingredientes frescos e muito amor.",
    modalClose: "Fechar"
  },
  ar: {
    nav: { about: "نبذة", menu: "القائمة", gallery: "معرض الصور", location: "الموقع", contact: "اتصال", reservations: "الحجوزات" },
    heroTitle: "بانيلّا دي بارّو",
    heroSubtitle: "المطبخ البرازيلي الأصيل في قطر",
    ctas: { reserve: "احجز طاولة", seeMenu: "عرض القائمة" },
    ourStory: "قصتنا",
    storyText:
      "نُجدد طهي النار الهادئة ونكهات الريف والضيافة الكريمة. بإدارة الشيف كاس، نقدم أطباقاً إقليمية أيقونية بمكونات طازجة حلال.",
    categories: { all: "الكل", mains: "الأطباق الرئيسية", sides: "الأطباق الجانبية", desserts: "الحلويات", drinks: "المشروبات" },
    search: "ابحث عن الأطباق...",
    price: "السعر",
    details: "التفاصيل",
    galleryTitle: "المعرض",
    locationTitle: "الموقع & المواعيد",
    contactTitle: "اتصال",
    address: "العنوان",
    hours: "الساعات",
    today: "يومياً: 12:00–23:00",
    bookFly: "الحجز عبر الهاتف أو واتساب",
    footer: "© بانيلّا دي بارّو — أكل برازيلي منزلي بمكونات طازجة وكثير من المحبة.",
    modalClose: "إغلاق"
  }
};

const CATS = ["all", "mains", "sides", "desserts", "drinks"];
const catKey = { mains: "mains", sides: "sides", desserts: "desserts", drinks: "drinks" };

export default function App() {
  const [lang, setLang] = useState("pt"); // padrão PT
  const t = T[lang];
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [modal, setModal] = useState(null);

  // DIR RTL para árabe
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  // Revelar ao rolar
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = useMemo(() => {
    let items = MENU.slice();
    if (cat !== "all") items = items.filter((i) => i.category === catKey[cat] || i.category === cat);
    if (q.trim()) {
      const needle = q.toLowerCase();
      items = items.filter((i) => {
        const name = (i.name[lang] || i.name.en || "").toLowerCase();
        const desc = (i.desc[lang] || i.desc.en || "").toLowerCase();
        return name.includes(needle) || desc.includes(needle);
      });
    }
    return items;
  }, [cat, q, lang]);

  return (
    <div>
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#hero">
            <img src="/logo.png" alt="Panela de Barro logo" />
            <span>Panela de Barro</span>
          </a>
          <nav>
            <a href="#about">{t.nav.about}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#location">{t.nav.location}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="langs">
            <button onClick={() => setLang("pt")} className={lang === "pt" ? "active" : ""}>
              BR PT
            </button>
            <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>
              GB EN
            </button>
            <button onClick={() => setLang("ar")} className={lang === "ar" ? "active" : ""}>
              QA AR
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <h1 className="display">{t.heroTitle}</h1>
          <p className="lead">{t.heroSubtitle}</p>
          <div className="cta">
            <a href="#reservations" className="btn primary">{t.ctas.reserve}</a>
            <a href="#menu" className="btn">{t.ctas.seeMenu}</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container reveal">
        <h2 className="section-title">{t.ourStory}</h2>
        <p className="muted">{t.storyText}</p>
      </section>

      {/* MENU */}
      <section id="menu" className="container reveal">
        <div className="section-head">
          <h2 className="section-title">{t.nav.menu}</h2>
          <input
            className="search"
            placeholder={t.search}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="pills">
          {CATS.map((c) => (
            <button key={c} className={`pill ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
              {t.categories[c]}
            </button>
          ))}
        </div>

        <div className="grid">
          {filtered.map((item) => (
            <article key={item.id} className="card" onClick={() => setModal(item)}>
              <img src={item.image} alt={item.name[lang] || item.name.en} />
              <div className="card-body">
                <h3>{item.name[lang] || item.name.en}</h3>
                <p className="line-clamp">{item.desc[lang] || item.desc.en}</p>
                <div className="price">QAR {item.priceQAR}</div>
              </div>
            </article>
          ))}
          {!filtered.length && <p className="muted">{/* nenhum resultado */}—</p>}
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img src={modal.image} alt={modal.name[lang] || modal.name.en} />
            <div className="modal-body">
              <h3>{modal.name[lang] || modal.name.en}</h3>
              <p>{modal.desc[lang] || modal.desc.en}</p>
              <div className="price">QAR {modal.priceQAR}</div>
              <button className="btn primary" onClick={() => setModal(null)}>{T[lang].modalClose}</button>
            </div>
          </div>
        </div>
      )}

      {/* GALERIA */}
      <section id="gallery" className="container reveal">
        <h2 className="section-title">{t.galleryTitle}</h2>
        <div className="masonry">
          {[
            "https://images.unsplash.com/photo-1520072959219-c595dc870360",
            "https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
            "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
            "https://images.unsplash.com/photo-1498654896293-3f8b81e0f6f3",
            "https://images.unsplash.com/photo-1498654896293-2bfe588b4681",
            "https://images.unsplash.com/photo-1522770179533-24471fcdba45"
          ].map((src, i) => (
            <img key={i} src={`${src}?auto=format&fit=crop&w=1200&q=60`} alt={`gallery ${i+1}`} className="zoomable" onClick={(e)=>openLightbox(src)} />
          ))}
        </div>
      </section>

      {/* LIGHTBOX simples */}
      <div id="lightbox" className="lightbox" onClick={(e)=>{ if(e.target.id==='lightbox') e.currentTarget.classList.remove('show')}}>
        <img alt="preview" />
      </div>

      {/* LOCALIZAÇÃO */}
      <section id="location" className="container reveal">
        <h2 className="section-title">{t.locationTitle}</h2>
        <div className="map-card">
          <iframe
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6637.964!2d51.531!3d25.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzEwLjYiTiA1McKwMzEnNTkuNiJF!5e0!3m2!1sen!2sqa!4v1680000000000"
            allowFullScreen
          ></iframe>
          <div className="map-meta">
            <div><strong>{t.address}:</strong> Doha – Qatar</div>
            <div><strong>{t.hours}:</strong> {t.today}</div>
            <div className="muted">{t.bookFly}</div>
          </div>
        </div>
      </section>

      {/* RESERVAS / CONTATO */}
      <section id="reservations" className="container reveal">
        <h2 className="section-title">{t.nav.reservations}</h2>
        <div className="contact-cta">
          <a className="btn primary" href="https://wa.me/97400000000" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="btn" href="tel:+97400000000">+974 0000 0000</a>
        </div>
      </section>

      <section id="contact" className="container reveal">
        <h2 className="section-title">{t.contactTitle}</h2>
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); window.location.href='mailto:info@paneladebarroqatar.com'}}>
          <input required type="text" placeholder={lang==='ar'?'الاسم':'Nome / Name'} />
          <input required type="email" placeholder="Email" />
          <textarea required rows="4" placeholder={lang==='ar'?'رسالتك':'Sua mensagem / Your message'} />
          <button className="btn primary" type="submit">Send</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>Panela de Barro</span>
          <div className="social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        <p className="tiny muted">{t.footer}</p>
      </footer>
    </div>
  );
}

// Lightbox helper
function openLightbox(src){
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  img.src = `${src}?auto=format&fit=crop&w=1600&q=80`;
  lb.classList.add('show');
}

