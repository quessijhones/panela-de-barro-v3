import React, { useEffect, useMemo, useRef, useState } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";
import menu from "./menuData";

/** =========================
 *  i18n básico (labels gerais)
 *  ========================= */
const I18N = {
  en: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", location: "Location", contact: "Contact", reservations: "Reservations" },
    heroTitle: "Panela de Barro",
    heroSubtitle: "Brazilian Heritage Cuisine in Qatar",
    ctaReserve: "Reserve a Table",
    ctaSeeMenu: "See the Menu",
    comingSoon: "Opening in November — Coming Soon",
    curated: "Curated by Chef-owner Quessi Jhones and family",
    categories: { all: "All", mains: "Mains", sides: "Side Dishes", desserts: "Desserts", beverages: "Beverages", seasonal: "Seasonal" },
    view: "View Details",
    orderSoon: "Order (soon)",
    contact: { title: "Contact", email: "restaurant@paneladebarroqatar.com", phone: "+974 3047 5279", address: "Barwa Town, Doha, Qatar" },
    regions: {
      amazonia: { title: "North — Amazon", text: "River, forest and smoke. Fish stews, nuts and herbs. The breath of the rainforest." },
      nordeste: { title: "Northeast — Lençóis & Sea", text: "Sun and dunes, dendê and coconut milk. Moquecas, farofas, vibrant spices." },
      sudeste: { title: "Southeast — Serra", text: "Mountains, wood-fired stoves and Minas comfort. Beans, cheese, corn and love." },
      litoral: { title: "Coast — Rio", text: "Salt spray and samba breeze. Grills, caipis and fresh markets." },
      cerrado: { title: "Cerrado — Heartland", text: "Country fields and long tables. Rice & beans, cassava, and warm hospitality." }
    },
    audio: { on: "Sound on", off: "Sound off" },
    footer: "© 2025 Panela de Barro"
  },
  pt: {
    nav: { about: "Sobre", menu: "Menu", gallery: "Galeria", location: "Localização", contact: "Contato", reservations: "Reservas" },
    heroTitle: "Panela de Barro",
    heroSubtitle: "Culinária Brasileira de Raiz no Catar",
    ctaReserve: "Reservar Mesa",
    ctaSeeMenu: "Ver o Menu",
    comingSoon: "Abertura em Novembro — Em Breve",
    curated: "Assinado pelo Chef-proprietário Quessi Jhones e família",
    categories: { all: "Todos", mains: "Pratos Principais", sides: "Acompanhamentos", desserts: "Sobremesas", beverages: "Bebidas", seasonal: "Sazonal" },
    view: "Ver Detalhes",
    orderSoon: "Pedir (em breve)",
    contact: { title: "Contato", email: "restaurant@paneladebarroqatar.com", phone: "+974 3047 5279", address: "Barwa Town, Doha, Qatar" },
    regions: {
      amazonia: { title: "Norte — Amazônia", text: "Rio, floresta e fumaça. Caldos, peixes, castanhas e ervas. O sopro da mata." },
      nordeste: { title: "Nordeste — Lençóis & Mar", text: "Sol e dunas, dendê e coco. Moquecas, farofas e temperos vibrantes." },
      sudeste: { title: "Sudeste — Serra", text: "Montanhas, fogão a lenha e conforto mineiro. Feijão, queijo, milho e afeto." },
      litoral: { title: "Litoral — Rio", text: "Brisa salgada e samba leve. Grelhas, caipis e feira fresca." },
      cerrado: { title: "Cerrado — Coração do Brasil", text: "Campos e mesa farta. Arroz com feijão, mandioca e hospitalidade." }
    },
    audio: { on: "Som ligado", off: "Som desligado" },
    footer: "© 2025 Panela de Barro"
  },
  ar: {
    nav: { about: "نبذة", menu: "القائمة", gallery: "معرض", location: "الموقع", contact: "اتصال", reservations: "الحجوزات" },
    heroTitle: "بانيلّا دي بارّو",
    heroSubtitle: "المطبخ البرازيلي التقليدي في قطر",
    ctaReserve: "احجز طاولة",
    ctaSeeMenu: "عرض القائمة",
    comingSoon: "الافتتاح في نوفمبر — قريبًا",
    curated: "بإشراف الشيف والمالك كويزي جونز وعائلته",
    categories: { all: "الكل", mains: "الأطباق الرئيسية", sides: "الأطباق الجانبية", desserts: "الحلويات", beverages: "المشروبات", seasonal: "الموسمية" },
    view: "عرض التفاصيل",
    orderSoon: "قريبًا (طلب)",
    contact: { title: "اتصال", email: "restaurant@paneladebarroqatar.com", phone: "+974 3047 5279", address: "Barwa Town, Doha, Qatar" },
    regions: {
      amazonia: { title: "الشمال — الأمازون", text: "نهر وغابة ودخان. يخنات السمك والمكسرات والأعشاب. أنفاس الغابة." },
      nordeste: { title: "الشمال الشرقي — اللنْسُويش والبحر", text: "شمس وكثبان، دِنْدي وحليب جوز الهند. موكيكا وفاروفا وتوابل حية." },
      sudeste: { title: "الجنوب الشرقي — الجبال", text: "جبال ومواقد خشبية ودفء ميناس. فاصوليا وجبن وذرة ومودة." },
      litoral: { title: "الساحل — ريو", text: "نسيم مالح وسامبا ناعمة. مشويات وكيبيرينها وأسواق طازجة." },
      cerrado: { title: "السيرادو — قلب البرازيل", text: "حقول ومائدة عامرة. أرز وفاصوليا وكسافا وضيافة." }
    },
    audio: { on: "الصوت يعمل", off: "الصوت مغلق" },
    footer: "© 2025 بانيلّا دي بارّو"
  }
};

/** =========================
 *  Header + linguagem
 *  ========================= */
function Header({ lang, setLang }) {
  return (
    <header className="nav">
      <Link to="/" className="brand">
        <img src="/logo.png" alt="Panela de Barro" className="brand-logo" />
        <span className="brand-title">Panela de Barro</span>
      </Link>

      <nav className="nav-links">
        <Link to="/about">{I18N[lang].nav.about}</Link>
        <Link to="/menu">{I18N[lang].nav.menu}</Link>
        <Link to="/gallery">{I18N[lang].nav.gallery}</Link>
        <Link to="/location">{I18N[lang].nav.location}</Link>
        <Link to="/contact">{I18N[lang].nav.contact}</Link>
        <a href="#reservations">{I18N[lang].nav.reservations}</a>
      </nav>

      <div className="lang">
        <button className={lang==="pt"?"active":""} onClick={()=>setLang("pt")}>BR PT</button>
        <button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>GB EN</button>
        <button className={lang==="ar"?"active":""} onClick={()=>setLang("ar")}>QA AR</button>
      </div>
    </header>
  );
}

/** =========================
 *  Splash de abertura (logo -> fade)
 *  ========================= */
function Splash({ onDone }) {
  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
      onAnimationComplete={onDone}
    >
      <motion.img
        src="/logo.png"
        alt=""
        className="splash-logo"
        initial={{ scale: 1.4, y: 0, opacity: 0 }}
        animate={{ scale: 1, y: -10, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: .2 }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5 }}
      >
        Panela de Barro
      </motion.h1>
    </motion.div>
  );
}

/** =========================
 *  Botão de áudio (user-gesture)
 *  ========================= */
function AudioToggle({ lang }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    ref.current = new Audio("/immersive/bossa.mp3");
    ref.current.loop = true;
    ref.current.volume = 0.25;
    return () => { ref.current?.pause(); ref.current = null; };
  }, []);

  const toggle = async () => {
    if (!ref.current) return;
    try {
      if (on) { ref.current.pause(); setOn(false); }
      else { await ref.current.play(); setOn(true); }
    } catch (e) { /* autoplay blocked until user taps */ }
  };

  return (
    <button className={`audio ${on?"on":"off"}`} onClick={toggle} title={on?I18N[lang].audio.off:I18N[lang].audio.on}>
      {on ? "🔊" : "🔈"}
    </button>
  );
}

/** =========================
 *  Parallax layer helper
 *  ========================= */
function ParallaxLayer({ src, speed = 120, className }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, speed]);
  return <motion.img style={{ y }} className={`layer ${className||""}`} src={src} alt="" />;
}

/** =========================
 *  Hero imersivo com parallax
 *  ========================= */
function ImmersiveHero({ lang }) {
  return (
    <section className="hero">
      <div className="parallax">
        <ParallaxLayer src="/immersive/serra.jpg" speed={180} className="mountains"/>
        <ParallaxLayer src="/immersive/litoral.jpg" speed={260} className="sea"/>
        <ParallaxLayer src="/immersive/amazonia.jpg" speed={120} className="forest"/>
        <img className="layer pattern" src="/immersive/azulejo.png" alt="" />
      </div>

      <div className="hero-inner">
        <motion.h1 initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          {I18N[lang].heroTitle}
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          {I18N[lang].heroSubtitle}
        </motion.p>
        <div className="hero-ctas">
          <a className="btn primary" href="#reservations">{I18N[lang].ctaReserve}</a>
          <Link className="btn ghost" to="/menu">{I18N[lang].ctaSeeMenu}</Link>
        </div>
        <p className="soon">{I18N[lang].comingSoon}</p>
      </div>
    </section>
  );
}

/** =========================
 *  Marquee de azulejos
 *  ========================= */
function AzulejoMarquee() {
  return (
    <div className="tile-marquee" aria-hidden="true">
      <div className="tile-track">
        {Array.from({length:16}).map((_,i)=>(
          <div className="tile" key={i}><img src="/immersive/azulejo.png" alt=""/></div>
        ))}
      </div>
    </div>
  );
}

/** =========================
 *  Scroll Narrativa por regiões
 *  ========================= */
function RegionSection({ bg, title, text, align="right" }) {
  return (
    <section className={`region ${align}`}>
      <img src={bg} alt="" className="region-bg" />
      <div className="region-box">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

/** =========================
 *  Home (com tudo do início)
 *  ========================= */
function Home({ lang }) {
  const R = I18N[lang].regions;

  return (
    <>
      <ImmersiveHero lang={lang}/>
      <AzulejoMarquee/>

      <section className="story container paper">
        <h3>{I18N[lang].curated}</h3>
        <p>
          Um restaurante de família: 20 anos de estrada, fogão a lenha, sertanejo e viola na trilha sonora.
          O chef-proprietário <strong>Quessi Jhones</strong> cozinha com a mãe, Dona <strong>Cleuza</strong>, mineira que traz tradição e afeto,
          e com o irmão, Head Chef, com mais de 10 anos de experiência em casas brasileiras.
        </p>
        <img className="hero-dish" src="/immersive/hero-dish.jpg" alt="" />
      </section>

      {/* Scroll narrativa */}
      <RegionSection bg="/immersive/amazonia.jpg" title={R.amazonia.title} text={R.amazonia.text} align="right" />
      <RegionSection bg="/immersive/lencois.jpg"   title={R.nordeste.title}  text={R.nordeste.text}  align="left"  />
      <RegionSection bg="/immersive/serra.jpg"     title={R.sudeste.title}   text={R.sudeste.text}   align="right" />
      <RegionSection bg="/immersive/litoral.jpg"   title={R.litoral.title}   text={R.litoral.text}   align="left"  />
      <RegionSection bg="/immersive/cerrado.jpg"   title={R.cerrado.title}   text={R.cerrado.text}   align="right" />

      {/* Âncora de reservas */}
      <section id="reservations" className="reservations container paper">
        <h2>{I18N[lang].nav.reservations}</h2>
        <p>Em breve você poderá reservar mesas direto por aqui.</p>
        <Link to="/contact" className="btn primary">Fale conosco</Link>
      </section>
    </>
  );
}

/** =========================
 *  Páginas simples
 *  ========================= */
const BasicSection = ({ title, children }) => (
  <section className="basic">
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  </section>
);

function About({ lang }) {
  return (
    <BasicSection title={I18N[lang].nav.about}>
      <p>
        Casa brasileira no Catar. Cozinha de raiz com hospitalidade generosa.
        Música brasileira, fogão a lenha e ingredientes frescos.
      </p>
    </BasicSection>
  );
}

function Gallery() {
  return (
    <BasicSection title="Gallery">
      <div className="gallery-grid">
        {["/immersive/amazonia.jpg","/immersive/lencois.jpg","/immersive/litoral.jpg","/immersive/serra.jpg","/immersive/cerrado.jpg"].map((src,i)=>(
          <img key={i} src={src} alt="" />
        ))}
      </div>
    </BasicSection>
  );
}

function Location({ lang }) {
  return (
    <BasicSection title={I18N[lang].nav.location}>
      <p>Barwa Town, Doha, Qatar</p>
      <iframe
        title="map"
        className="map"
        src="https://www.google.com/maps?q=Barwa%20Town%20Doha%20Qatar&output=embed"
        loading="lazy"
      />
    </BasicSection>
  );
}

function Contact({ lang }) {
  const c = I18N[lang].contact;
  return (
    <BasicSection title={c.title}>
      <ul className="contact">
        <li>📧 {c.email}</li>
        <li>📞 {c.phone}</li>
        <li>📍 {c.address}</li>
      </ul>
    </BasicSection>
  );
}

/** =========================
 *  Página de Menu (grid)
 *  ========================= */
function MenuPage({ lang }) {
  const tCat = I18N[lang].categories;
  const [tab, setTab] = useState("all");
  const filtered = useMemo(() => {
    if (tab === "all") return menu;
    return menu.filter((i) => i.category === tab);
  }, [tab]);

  return (
    <section className="menu-page">
      <div className="container">
        <h1>Menu</h1>
        <div className="tabs">
          {[
            { id: "all", label: tCat.all },
            { id: "mains", label: tCat.mains },
            { id: "sides", label: tCat.sides },
            { id: "desserts", label: tCat.desserts },
            { id: "beverages", label: tCat.beverages },
            { id: "seasonal", label: tCat.seasonal }
          ].map(b => (
            <button key={b.id} className={tab===b.id?"active":""} onClick={()=>setTab(b.id)}>{b.label}</button>
          ))}
        </div>

        <div className="grid">
          {filtered.map(item => {
            const tr = item.translations?.[lang];
            return (
              <motion.article key={item.id} className="card" whileHover={{ y: -4 }}>
                <div className="thumb">
                  <img
                    src={`/images/${item.image}`}
                    alt={tr?.name || item.name}
                    onError={(e)=>{e.currentTarget.src="/images/placeholder.jpg"}}
                  />
                  <span className={`badge ${item.category}`}>{tCat[item.category] || ""}</span>
                </div>
                <div className="card-text">
                  <h3>{tr?.name || item.name}</h3>
                  <p>{tr?.short || ""}</p>
                  <details>
                    <summary>{I18N[lang].view}</summary>
                    <p>{tr?.long || tr?.short || ""}</p>
                    <div className="actions">
                      <button className="btn small disabled">{I18N[lang].orderSoon}</button>
                    </div>
                  </details>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** =========================
 *  App com Router + Splash + Audio
 *  ========================= */
export default function App() {
  const [lang, setLang] = useState("pt");
  const [ready, setReady] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <Home lang={lang} /> },
    { path: "/about", element: <About lang={lang} /> },
    { path: "/menu", element: <MenuPage lang={lang} /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/location", element: <Location lang={lang} /> },
    { path: "/contact", element: <Contact lang={lang} /> }
  ]);

  return (
    <div className="app">
      {!ready && <Splash onDone={() => setReady(true)} />}
      <Header lang={lang} setLang={setLang} />
      <AudioToggle lang={lang} />
      <RouterProvider router={router} />
      <footer className="footer">{I18N[lang].footer}</footer>
    </div>
  );
}
