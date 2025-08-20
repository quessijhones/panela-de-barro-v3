import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { categories, dishes } from "./menuData";

const translations = {
  pt: {
    brpt: "BR PT", gben: "GB EN", jaar: "QA AR",
    nav: { about:"Sobre", menu:"Menu", gallery:"Galeria", location:"Localização", contact:"Contato", reservations:"Reservas" },
    heroTitle: "Panela de Barro",
    heroSubtitle: "Culinária Brasileira de Raiz no Qatar",
    reserve: "Reservar Mesa",
    seeMenu: "Ver o Menu",
    ourStory: "Nossa História",
    aboutText: "Sabores autênticos, hospitalidade generosa e pratos regionais brasileiros de raiz.",
    categories: "Categorias",
    price: "Preço",
    details: "Detalhes",
    close: "Fechar",
    all: "Todos",
    address: "Endereço",
    hours: "Horários",
    phone: "Telefone",
    bookNow: "Reservar Agora",
    contactUs: "Fale Conosco",
  },
  en: {
    brpt: "BR PT", gben: "GB EN", jaar: "QA AR",
    nav: { about:"About", menu:"Menu", gallery:"Gallery", location:"Location", contact:"Contact", reservations:"Reservations" },
    heroTitle: "Panela de Barro",
    heroSubtitle: "Brazilian Heritage Cuisine in Qatar",
    reserve: "Reserve a Table",
    seeMenu: "See the Menu",
    ourStory: "Our Story",
    aboutText: "Authentic Brazilian flavors, generous hospitality, and regional classics cooked slow.",
    categories: "Categories",
    price: "Price",
    details: "View Details",
    close: "Close",
    all: "All",
    address: "Address",
    hours: "Hours",
    phone: "Phone",
    bookNow: "Book Now",
    contactUs: "Contact Us",
  },
  ar: {
    brpt: "BR PT", gben: "GB EN", jaar: "QA AR",
    nav: { about:"نبذة عنا", menu:"القائمة", gallery:"معرض الصور", location:"الموقع", contact:"اتصال", reservations:"الحجوزات" },
    heroTitle: "بانيلّا دي بارّو",
    heroSubtitle: "المطبخ البرازيلي التقليدي في قطر",
    reserve: "احجز طاولة",
    seeMenu: "عرض القائمة",
    ourStory: "قصتنا",
    aboutText: "نكهات برازيلية أصيلة وضيافة كريمة وأطباق إقليمية مطهية على مهل.",
    categories: "الفئات",
    price: "السعر",
    details: "التفاصيل",
    close: "إغلاق",
    all: "الكل",
    address: "العنوان",
    hours: "الساعات",
    phone: "الهاتف",
    bookNow: "احجز الآن",
    contactUs: "اتصل بنا",
  },
};

function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");
  useEffect(() => localStorage.setItem("lang", lang), [lang]);
  return [lang, setLang];
}

function Header({ lang, setLang, t }) {
  const location = useLocation();
  const isAR = lang === "ar";

  return (
    <header className={`nav ${isAR ? "rtl" : ""}`}>
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <img className="brand-logo" src="/logo.png" alt="Panela de Barro" />
          <span className="brand-text">Panela de Barro</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/menu">{t.nav.menu}</NavLink>
          <NavLink to="/gallery">{t.nav.gallery}</NavLink>
          <NavLink to="/location">{t.nav.location}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
          <NavLink to="/reservations">{t.nav.reservations}</NavLink>
        </nav>

        <div className="lang-switch">
          <button className={lang==="pt"?"active":""} onClick={()=>setLang("pt")}>{t.brpt}</button>
          <button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>{t.gben}</button>
          <button className={lang==="ar"?"active":""} onClick={()=>setLang("ar")}>{t.jaar}</button>
        </div>
      </div>
    </header>
  );
}

function Hero({ t, lang }) {
  return (
    <section className={`hero ${lang==="ar"?"rtl":""}`}>
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">{t.heroTitle}</h1>
        <p className="hero-sub">{t.heroSubtitle}</p>
        <div className="hero-actions">
          <a className="btn primary" href="/reservations">{t.reserve}</a>
          <a className="btn ghost" href="/menu">{t.seeMenu}</a>
        </div>
      </div>
    </section>
  );
}

function DishCard({ item, lang, onClick }) {
  return (
    <div className="card" onClick={()=>onClick(item)}>
      <div className="card-img" style={{backgroundImage:`url(${item.image})`}}/>
      <div className="card-body">
        <h4>{item.name[lang]}</h4>
        <div className="price">{item.price} {item.currency}</div>
      </div>
    </div>
  );
}

function Modal({ open, onClose, children, lang }) {
  if(!open) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className={`modal-content ${lang==="ar"?"rtl":""}`} onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

function Home({ t, lang }) {
  const [open, setOpen] = useState(null);
  const mains = dishes.filter(d=>d.category==="mains").slice(0,3);

  return (
    <>
      <Hero t={t} lang={lang}/>
      <section className={`section about ${lang==="ar"?"rtl":""}`}>
        <div className="container">
          <h2>{t.ourStory}</h2>
          <p>{t.aboutText}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>{t.nav.menu}</h3>
          <div className="grid">
            {mains.map(m => (
              <DishCard key={m.id} item={m} lang={lang} onClick={setOpen}/>
            ))}
          </div>
        </div>
      </section>

      <Modal open={!!open} onClose={()=>setOpen(null)} lang={lang}>
        {open && (
          <>
            <div className="modal-hero" style={{backgroundImage:`url(${open.image})`}}/>
            <h3>{open.name[lang]}</h3>
            <p>{open.description[lang]}</p>
            <div className="price big">{open.price} {open.currency}</div>
          </>
        )}
      </Modal>
    </>
  );
}

function MenuPage({ t, lang }) {
  const [cat, setCat] = useState("all");
  const filtered = useMemo(()=>{
    return cat==="all" ? dishes : dishes.filter(d=>d.category===cat);
  },[cat]);

  return (
    <section className={`section ${lang==="ar"?"rtl":""}`}>
      <div className="container">
        <div className="menu-top">
          <h2>{t.nav.menu}</h2>
          <div className="pills">
            <button className={cat==="all"?"active":""} onClick={()=>setCat("all")}>{t.all}</button>
            {categories.map(c=>(
              <button key={c.id} className={cat===c.id?"active":""} onClick={()=>setCat(c.id)}>
                {c.label[lang]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid">
          {filtered.map(item=>(
            <div key={item.id} className="card card--menu">
              <div className="card-img" style={{backgroundImage:`url(${item.image})`}}/>
              <div className="card-body">
                <h4>{item.name[lang]}</h4>
                <p className="muted">{item.description[lang]}</p>
                <div className="price">{item.price} {item.currency}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ t, lang }) {
  const imgs = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562158070-4b4a2f5a64fb?q=80&w=1200&auto=format&fit=crop",
  ];
  const [i,setI]=useState(0);
  useEffect(()=>{
    const id=setInterval(()=>setI(v=>(v+1)%imgs.length),3500);
    return ()=>clearInterval(id);
  },[]);
  return (
    <section className="section">
      <div className="container">
        <h2>{t.nav.gallery}</h2>
        <div className="carousel">
          <img key={i} src={imgs[i]} alt="" />
        </div>
      </div>
    </section>
  );
}

function Location({ t, lang }) {
  return (
    <section className={`section ${lang==="ar"?"rtl":""}`}>
      <div className="container">
        <h2>{t.nav.location}</h2>
        <div className="info">
          <p><strong>{t.address}:</strong> Doha, Qatar – Souq Waqif (exemplo)</p>
          <p><strong>{t.hours}:</strong> 12:00–23:00 (Diariamente)</p>
          <p><strong>{t.phone}:</strong> +974 0000 0000</p>
        </div>
        <div className="map">
          <iframe
            title="map"
            loading="lazy"
            src="https://maps.google.com/maps?q=Souq%20Waqif%20Doha&t=&z=14&ie=UTF8&iwloc=&output=embed">
          </iframe>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  return (
    <section className={`section ${lang==="ar"?"rtl":""}`}>
      <div className="container">
        <h2>{t.contactUs}</h2>
        <form className="form">
          <input placeholder="Nome / Name" />
          <input placeholder="Email" type="email" />
          <textarea placeholder="Mensagem / Message" rows="5"></textarea>
          <button className="btn primary" type="button">Enviar</button>
        </form>
      </div>
    </section>
  );
}

function Reservations({ t, lang }) {
  return (
    <section className={`section ${lang==="ar"?"rtl":""}`}>
      <div className="container">
        <h2>{t.nav.reservations}</h2>
        <p className="muted">Integração de reservas (SevenRooms / OpenTable / formulário WhatsApp) — placeholder por enquanto.</p>
        <a className="btn primary" href="https://wa.me/97400000000" target="_blank" rel="noreferrer">{t.bookNow}</a>
      </div>
    </section>
  );
}

export default function App(){
  const [lang,setLang] = useLang();
  const t = translations[lang];

  return (
    <div className={`app ${lang==="ar"?"rtl":""}`}>
      <Header lang={lang} setLang={setLang} t={t}/>
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} lang={lang}/>}/>
          <Route path="/about" element={<Home t={t} lang={lang}/>}/>
          <Route path="/menu" element={<MenuPage t={t} lang={lang}/>}/>
          <Route path="/gallery" element={<Gallery t={t} lang={lang}/>}/>
          <Route path="/location" element={<Location t={t} lang={lang}/>}/>
          <Route path="/contact" element={<Contact t={t} lang={lang}/>}/>
          <Route path="/reservations" element={<Reservations t={t} lang={lang}/>}/>
        </Routes>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="logo"/>
            <span>Panela de Barro</span>
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
