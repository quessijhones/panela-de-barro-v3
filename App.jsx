import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "./menuData";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop";

const t = {
  pt: {
    about: "Sobre",
    menu: "Menu",
    gallery: "Galeria",
    location: "Localização",
    contact: "Contato",
    reservations: "Reservas",
    heroTitle: "Panela de Barro",
    heroSubtitle: "Culinária Brasileira de Raiz no Qatar",
    reserve: "Reservar Mesa",
    seeMenu: "Ver o Menu",
    all: "Todos",
    mains: "Pratos Principais",
    sides: "Acompanhamentos",
    desserts: "Sobremesas",
    drinks: "Bebidas",
    ourStory: "Nossa História",
    address: "Endereço",
    hours: "Horários",
    phone: "Telefone"
  },
  en: {
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    location: "Location",
    contact: "Contact",
    reservations: "Reservations",
    heroTitle: "Panela de Barro",
    heroSubtitle: "Brazilian Heritage Cuisine in Qatar",
    reserve: "Reserve a Table",
    seeMenu: "See the Menu",
    all: "All",
    mains: "Mains",
    sides: "Sides",
    desserts: "Desserts",
    drinks: "Drinks",
    ourStory: "Our Story",
    address: "Address",
    hours: "Hours",
    phone: "Phone"
  },
  ar: {
    about: "نبذة عنا",
    menu: "القائمة",
    gallery: "معرض",
    location: "الموقع",
    contact: "اتصال",
    reservations: "الحجوزات",
    heroTitle: "بانيلّا دي بارّو",
    heroSubtitle: "المطبخ البرازيلي الأصيل في قطر",
    reserve: "احجز طاولة",
    seeMenu: "عرض القائمة",
    all: "الكل",
    mains: "الأطباق الرئيسية",
    sides: "الأطباق الجانبية",
    desserts: "الحلويات",
    drinks: "المشروبات",
    ourStory: "قصتنا",
    address: "العنوان",
    hours: "الساعات",
    phone: "الهاتف"
  }
};

const LANGS = ["pt", "en", "ar"];

export default function App() {
  const [lang, setLang] = useState("pt");
  const L = t[lang];

  // Splash do logo
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setSplash(false), 1700);
    return () => clearTimeout(id);
  }, []);

  // Filtro do menu
  const [filter, setFilter] = useState("all");
  const categories = [
    { id: "all", label: L.all },
    { id: "mains", label: L.mains },
    { id: "sides", label: L.sides },
    { id: "desserts", label: L.desserts },
    { id: "drinks", label: L.drinks }
  ];
  const items = useMemo(
    () => (filter === "all" ? MENU : MENU.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <div className="app">
      {/* Splash do logo */}
      <AnimatePresence>
        {splash && (
          <motion.div
            className="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src="/logo.png"
              alt="Panela de Barro"
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="splash-logo"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#hero" className="brand">
            <img src="/logo.png" alt="logo" />
            <span>Panela de Barro</span>
          </a>

          <nav>
            <a href="#about">{L.about}</a>
            <a href="#menu">{L.menu}</a>
            <a href="#gallery">{L.gallery}</a>
            <a href="#location">{L.location}</a>
            <a href="#contact">{L.contact}</a>
            <a href="#reservations" className="btn secondary">
              {L.reservations}
            </a>
          </nav>

          <div className="lang">
            <button
              className={lang === "pt" ? "active" : ""}
              onClick={() => setLang("pt")}
            >
              BR PT
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              GB EN
            </button>
            <button
              className={lang === "ar" ? "active" : ""}
              onClick={() => setLang("ar")}
            >
              QA AR
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <motion.div
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>{L.heroTitle}</h1>
          <p>{L.heroSubtitle}</p>
          <div className="cta">
            <a href="#reservations" className="btn">
              {L.reserve}
            </a>
            <a href="#menu" className="btn ghost">
              {L.seeMenu}
            </a>
          </div>
        </motion.div>
      </section>

      {/* SOBRE / ABOUT */}
      <section id="about" className="section">
        <div className="container narrow">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {L.ourStory}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Celebração da cozinha brasileira de raiz: fogo, barro e acolhimento.
            Liderado pelo Chef Cass, servimos clássicos regionais com ingredientes frescos
            e toques contemporâneos. Experiência autêntica, saborosa e memorável.
          </motion.p>
        </div>
      </section>

      {/* MENU com filtros */}
      <section id="menu" className="section">
        <div className="container">
          <h2>{L.menu}</h2>

          <div className="filters">
            {categories.map((c) => (
              <button
                key={c.id}
                className={filter === c.id ? "chip active" : "chip"}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <motion.div
            className="grid cards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {items.map((item) => (
              <motion.article key={item.id} className="card" variants={{ hidden: {opacity: 0, y: 12}, show: {opacity: 1, y: 0} }}>
                <img
                  src={item.image || FALLBACK_IMG}
                  onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
                  alt={item.name[lang]}
                  className="menu-img"
                />
                <div className="card-body">
                  <div className="card-top">
                    <h3>{item.name[lang]}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="muted">{item.desc[lang]}</p>
                  <div className="tags">
                    <span className={`tag ${item.category}`}>
                      {L[item.category]}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALERIA – carrossel 3D */}
      <section id="gallery" className="section alt">
        <div className="container">
          <h2>{L.gallery}</h2>

          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2, slideShadows: false }}
            className="swiper-cover"
          >
            {[
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop"
            ].map((src, i) => (
              <SwiperSlide key={i} className="slide">
                <img src={src} alt={`gallery-${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="location" className="section">
        <div className="container narrow">
          <h2>{L.location}</h2>
          <div className="info-grid">
            <div>
              <h4>{L.address}</h4>
              <p>Doha, Qatar – Rua Exemplo, 123</p>
            </div>
            <div>
              <h4>{L.hours}</h4>
              <p>Seg–Qui: 12:00–22:00 • Sex–Sáb: 12:00–23:30</p>
            </div>
            <div>
              <h4>{L.phone}</h4>
              <p>+974 0000 0000</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVAS */}
      <section id="reservations" className="section highlight">
        <div className="container callout">
          <h3>{L.reservations}</h3>
          <p>
            Reserve sua mesa e viva uma experiência brasileira autêntica no Qatar.
          </p>
          <a className="btn" href="#contact">{L.reserve}</a>
        </div>
      </section>

      {/* CONTATO */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div className="brandline">
            <img src="/logo.png" alt="logo" />
            <span>Panela de Barro</span>
          </div>
          <p>info@paneladebarroqatar.com • Instagram / Facebook</p>
          <small>© {new Date().getFullYear()} Panela de Barro. Todos os direitos reservados.</small>
        </div>
      </footer>
    </div>
  );
}

