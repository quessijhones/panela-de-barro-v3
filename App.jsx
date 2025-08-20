import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiMapPin, FiPhone, FiInstagram, FiFacebook, FiChevronRight } from "react-icons/fi";

// CSS do Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// seu CSS global
import "./styles.css";

/**
 * i18n simples
 */
const tDict = {
  pt: {
    brand: "Panela de Barro",
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato", reservations: "Reservas" },
    heroTitle: "Culinária Brasileira de Raiz no Qatar",
    heroCta1: "Reservar Mesa",
    heroCta2: "Ver o Menu",
    ourStory: "Nossa História",
    storyText:
      "Sabores autênticos, hospitalidade generosa e pratos regionais brasileiros de raiz. Liderados pelo Chef Cass, trazemos clássicos icônicos com ingredientes frescos e toque moderno.",
    carouselTitle: "Destaques do Chef",
    menuTitle: "Menu",
    all: "Todos",
    mains: "Pratos Principais",
    sides: "Acompanhamentos",
    desserts: "Sobremesas",
    drinks: "Bebidas",
    galleryTitle: "Ambiente & Experiência",
    contactTitle: "Contato",
    address: "Endereço",
    phone: "Telefone",
    follow: "Siga-nos",
    price: "Preço",
    details: "Detalhes",
  },
  en: {
    brand: "Panela de Barro",
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact", reservations: "Reservations" },
    heroTitle: "Brazilian Heritage Cuisine in Qatar",
    heroCta1: "Reserve a Table",
    heroCta2: "See the Menu",
    ourStory: "Our Story",
    storyText:
      "Authentic flavors, warm hospitality, and iconic Brazilian regional classics. Led by Chef Cass, we bring fresh ingredients and a modern touch.",
    carouselTitle: "Chef's Specials",
    menuTitle: "Menu",
    all: "All",
    mains: "Mains",
    sides: "Sides",
    desserts: "Desserts",
    drinks: "Drinks",
    galleryTitle: "Ambience & Experience",
    contactTitle: "Contact",
    address: "Address",
    phone: "Phone",
    follow: "Follow us",
    price: "Price",
    details: "Details",
  },
  ar: {
    brand: "بانيلّا دي بارّو",
    nav: { about: "عنّا", menu: "القائمة", gallery: "المعرض", location: "الموقع", contact: "اتصال", reservations: "الحجوزات" },
    heroTitle: "المطبخ البرازيلي الأصيل في قطر",
    heroCta1: "احجز طاولة",
    heroCta2: "عرض القائمة",
    ourStory: "قصتنا",
    storyText:
      "نكهات أصيلة وضيافة دافئة وأطباق برازيلية كلاسيكية. بقيادة الشيف كاس، نقدم مكونات طازجة بلمسة عصرية.",
    carouselTitle: "أطباق الشيف",
    menuTitle: "القائمة",
    all: "الكل",
    mains: "الأطباق الرئيسية",
    sides: "المقبلات",
    desserts: "الحلويات",
    drinks: "المشروبات",
    galleryTitle: "الأجواء والتجربة",
    contactTitle: "تواصل معنا",
    address: "العنوان",
    phone: "الهاتف",
    follow: "تابعنا",
    price: "السعر",
    details: "التفاصيل",
  },
};

/**
 * Carrossel demonstrativo (imagens de stock).
 * Troque depois por imagens reais.
 */
const demoCarousel = [
  { id: "picanha", title: "Picanha Grelhada", img: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1400&auto=format&fit=crop" },
  { id: "feijoada", title: "Feijoada de Costela", img: "https://images.unsplash.com/photo-1604908554049-05853a77e90a?q=80&w=1400&auto=format&fit=crop" },
  { id: "moqueca", title: "Moqueca Baiana", img: "https://images.unsplash.com/photo-1526312426976-593c2d0dfb09?q=80&w=1400&auto=format&fit=crop" },
  { id: "brigadeiro", title: "Brigadeiro Gourmet", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1400&auto=format&fit=crop" },
];

/**
 * Importa seu menu
 * Estrutura esperada de cada item:
 * {
 *   id: string,
 *   name: { pt: string, en: string, ar: string },
 *   description: { pt: string, en: string, ar: string },
 *   price: string,
 *   category: "mains" | "sides" | "desserts" | "drinks",
 *   image?: string
 * }
 */
let menuData = [];
try {
  // eslint-disable-next-line global-require
  menuData = require("./menuData.js").default || require("./menuData.js");
} catch (e) {
  // fallback de exemplo se o arquivo não existir
  menuData = [
    {
      id: "m1",
      name: { pt: "Picanha Grelhada", en: "Grilled Picanha", ar: "بيكانيا مشوية" },
      description: {
        pt: "Servida com risoto de cogumelos e polenta cremosa.",
        en: "Served with mushroom risotto and creamy polenta.",
        ar: "تُقدم مع ريزوتو الفطر وبولنتا كريمية.",
      },
      price: "QAR 165",
      category: "mains",
      image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "m2",
      name: { pt: "Feijoada de Costela", en: "Rib Feijoada", ar: "فيجوادا بالضلوع" },
      description: {
        pt: "Com farofa de banana, arroz e laranja.",
        en: "With banana farofa, rice and orange.",
        ar: "مع فاروفا الموز والأرز والبرتقال.",
      },
      price: "QAR 160",
      category: "mains",
      image: "https://images.unsplash.com/photo-1604908554049-05853a77e90a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "s1",
      name: { pt: "Polenta Frita", en: "Fried Polenta", ar: "بولنتا مقلية" },
      description: {
        pt: "Palitos crocantes de polenta dourada.",
        en: "Crispy sticks of golden polenta.",
        ar: "أصابع بولنتا مقرمشة.",
      },
      price: "QAR 22",
      category: "sides",
      image: "https://images.unsplash.com/photo-1601050690597-9fd781b00a3b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "d1",
      name: { pt: "Brigadeiro Gourmet", en: "Gourmet Brigadeiro", ar: "بريجاديرو فاخر" },
      description: {
        pt: "Clássico brasileiro com toque de cacau belga.",
        en: "Brazilian classic with Belgian cocoa.",
        ar: "حلوى برازيلية تقليدية مع الكاكاو البلجيكي.",
      },
      price: "QAR 18",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "b1",
      name: { pt: "Sol do Cerrado", en: "Cerrado Sun", ar: "شمس السيرايدو" },
      description: {
        pt: "Manga com maracujá, hortelã e toque cítrico.",
        en: "Mango with passion fruit, mint and a citrus touch.",
        ar: "مانجو مع فاكهة العشق والنعناع ولمسة حمضية.",
      },
      price: "QAR 34",
      category: "drinks",
      image: "https://images.unsplash.com/photo-1518081461904-9ac2b4780f36?q=80&w=1200&auto=format&fit=crop",
    },
  ];
}

/**
 * Componente de seção com animação quando entra na viewport
 */
function Reveal({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState("pt");
  const t = useMemo(() => tDict[lang], [lang]);

  // Splash do logo
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Tabs do menu
  const [cat, setCat] = useState("all");

  const filteredMenu = useMemo(() => {
    if (cat === "all") return menuData;
    return menuData.filter((i) => i.category === cat);
  }, [cat]);

  return (
    <div className="app">

      {/* SPLASH – logo aparece ao abrir e some */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "linear-gradient(160deg, #efe3d5, #f6efe6)",
              zIndex: 9999,
              display: "grid",
              placeItems: "center",
            }}
          >
            <motion.img
              src="/logo.png"
              alt="Panela de Barro"
              initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              style={{ width: 140, height: "auto", filter: "drop-shadow(0 10px 20px rgba(0,0,0,.15))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <img src="/logo.png" alt="logo" className="brand-logo" />
            <span className="brand-text">{t.brand}</span>
          </div>

          <nav className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#location">{t.nav.location}</a>
            <a href="#contact">{t.nav.contact}</a>
            <a href="#reservations" className="pill">{t.nav.reservations}</a>
          </nav>

          <div className="lang">
            <button className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")}>BR PT</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>GB EN</button>
            <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>QA AR</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <Reveal>
          <h1 className="hero-title">Panela de Barro</h1>
          <p className="hero-sub">{t.heroTitle}</p>

          <div className="hero-ctas">
            <a href="#reservations" className="btn primary">{t.heroCta1}</a>
            <a href="#menu" className="btn ghost">
              {t.heroCta2} <FiChevronRight />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="section container">
        <Reveal>
          <h2 className="section-title">{t.ourStory}</h2>
          <p className="muted">{t.storyText}</p>
        </Reveal>
      </section>

      {/* CARROSSEL – Destaques */}
      <section className="section container">
        <Reveal>
          <h2 className="section-title">{t.carouselTitle}</h2>
          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={"auto"}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 140, modifier: 1.2, slideShadows: false }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            style={{ paddingBottom: 40 }}
          >
            {demoCarousel.map((card) => (
              <SwiperSlide key={card.id} style={{ width: 320 }}>
                <motion.div whileHover={{ y: -6 }} className="card">
                  <img src={card.img} alt={card.title} className="card-img" />
                  <div className="card-body">
                    <h3 className="card-title">{card.title}</h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </section>

      {/* MENU */}
      <section id="menu" className="section container">
        <Reveal>
          <h2 className="section-title">{t.menuTitle}</h2>

          <div className="tabs">
            <button className={cat === "all" ? "active" : ""} onClick={() => setCat("all")}>{t.all}</button>
            <button className={cat === "mains" ? "active" : ""} onClick={() => setCat("mains")}>{t.mains}</button>
            <button className={cat === "sides" ? "active" : ""} onClick={() => setCat("sides")}>{t.sides}</button>
            <button className={cat === "desserts" ? "active" : ""} onClick={() => setCat("desserts")}>{t.desserts}</button>
            <button className={cat === "drinks" ? "active" : ""} onClick={() => setCat("drinks")}>{t.drinks}</button>
          </div>

          <div className="grid">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                className="menu-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
              >
                <img
                  src={item.image || "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"}
                  alt={item.name[lang]}
                  className="menu-img"
                />
                <div className="menu-content">
                  <div className="menu-row">
                    <h3 className="menu-title">{item.name[lang]}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="muted">{item.description[lang]}</p>
                  <div className="tags">
                    <span className="tag">{item.category}</span>
                    <span className="tag">{t.details}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* GALERIA */}
      <section id="gallery" className="section container">
        <Reveal>
          <h2 className="section-title">{t.galleryTitle}</h2>
          <div className="gallery">
            {[
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1559333083-7d4f3c2d2b0c?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526312426976-593c2d0dfb09?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1200&auto=format&fit=crop",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`gallery-${i}`}
                className="gallery-img"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* LOCALIZAÇÃO / RESERVAS / CONTATO */}
      <section id="location" className="section container">
        <Reveal>
          <h2 className="section-title">{t.nav.location}</h2>
          <p className="muted">
            <FiMapPin style={{ marginRight: 8 }} />
            Al Waab St, Doha, Qatar — Villaggio / Aspire Zone
          </p>
        </Reveal>
      </section>

      <section id="reservations" className="section container">
        <Reveal>
          <h2 className="section-title">{t.nav.reservations}</h2>
          <p className="muted">
            <FiPhone style={{ marginRight: 8 }} />
            +974 0000 0000 · reservas@paneladebarroqatar.com
          </p>
          <a href="#!" className="btn primary" style={{ marginTop: 12 }}>
            {t.heroCta1}
          </a>
        </Reveal>
      </section>

      <section id="contact" className="section container">
        <Reveal>
          <h2 className="section-title">{t.contactTitle}</h2>
          <div className="social">
            <a href="#!" className="icon"><FiInstagram /></a>
            <a href="#!" className="icon"><FiFacebook /></a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <img src="/logo.png" alt="logo" className="brand-logo" />
            <span className="brand-text">{t.brand}</span>
          </div>
          <small>© {new Date().getFullYear()} Panela de Barro — Doha, Qatar</small>
        </div>
      </footer>
    </div>
  );
}

