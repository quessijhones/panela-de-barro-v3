import React, { useMemo, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { LOCALES, STRINGS } from "./i18n";
import { MENU } from "./menuData";

/* ===== helpers de i18n ===== */
const LangContext = React.createContext({ lang: "pt", setLang: () => {} });
const useT = () => {
  const { lang } = React.useContext(LangContext);
  return { lang, tNav: STRINGS.nav[lang], tHero: STRINGS.hero[lang], tAbout: STRINGS.about[lang], tLoc: STRINGS.location[lang], tContact: STRINGS.contact[lang], filters: STRINGS.filters[lang], badges: STRINGS.badges[lang] };
};

/* ===== componentes ===== */

function Navbar() {
  const { lang } = React.useContext(LangContext);
  const { tNav } = useT();
  return (
    <header className="nav">
      <Link to="/" className="brand">
        <img src="/logo.png" alt="logo" />
        <span>Panela de Barro</span>
      </Link>
      <nav>
        <Link to="/about">{tNav.about}</Link>
        <Link to="/menu">{tNav.menu}</Link>
        <Link to="/gallery">{tNav.gallery}</Link>
        <Link to="/location">{tNav.location}</Link>
        <Link to="/contact">{tNav.contact}</Link>
      </nav>
      <LangSwitcher active={lang} />
    </header>
  );
}

function LangSwitcher({ active }) {
  const { setLang } = React.useContext(LangContext);
  return (
    <div className="lang">
      {LOCALES.map((l) => (
        <button key={l} className={active === l ? "pill active" : "pill"} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Hero() {
  const { tHero } = useT();
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="smoke"></div>
      <div className="hero-content">
        <h1>{tHero.title}</h1>
        <p>{tHero.subtitle}</p>
        <button className="cta" onClick={() => navigate("/menu")}>{tHero.cta}</button>
      </div>
      {/* carrossel de fundo: 3 imagens grandes (use seus arquivos existentes) */}
      <div className="hero-slides">
        <div style={{ backgroundImage: 'url(/images/vaca-atolada.jpg)' }} />
        <div style={{ backgroundImage: 'url(/images/feijoada-costela.jpg)' }} />
        <div style={{ backgroundImage: 'url(/images/picanha-grelhada.jpg)' }} />
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <MenuPreview />
    </>
  );
}

function MenuPreview() {
  const { lang, filters, badges } = useT();
  const [filter, setFilter] = useState("all");
  const items = useMemo(() => MENU.filter(m => filter === "all" ? true : m.category === filter), [filter]);

  const FILTER_KEYS = ["all","mains","sides","desserts","beverages","seasonal","chef"];

  return (
    <section className="section">
      <h2>Menu (prévia)</h2>
      <div className="filterbar">
        {FILTER_KEYS.map((key, idx) => (
          <button key={key} className={filter === key ? "chip active" : "chip"} onClick={() => setFilter(key)}>{filters[idx]}</button>
        ))}
      </div>
      <div className="grid">
        {items.slice(0,6).map((d) => <DishCard key={d.id} dish={d} lang={lang} badges={badges} />)}
      </div>
      <div style={{textAlign:"center", marginTop:"16px"}}>
        <Link to="/menu" className="link-more">Ver todos os pratos →</Link>
      </div>
    </section>
  );
}

function DishCard({ dish, lang, badges }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="card" onClick={() => setOpen(true)}>
        <div className="thumb" style={{ backgroundImage: `url(${dish.image})`}} />
        <div className="card-body">
          <h3>{dish.name}</h3>
          <span className="badge">{dish.category}</span>
          <p>{dish.brief[lang]}</p>
        </div>
      </article>
      {open && <DishModal dish={dish} lang={lang} badges={badges} onClose={() => setOpen(false)} />}
    </>
  );
}

function DishModal({ dish, lang, badges, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-inner" onClick={(e)=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={dish.image} alt={dish.name} className="modal-img"/>
        <div className="modal-body">
          <h3>{dish.name}</h3>
          <div className="tags">
            {dish.halal && <span className="tag">{badges.halal}</span>}
            {dish.tags.includes("beef") && <span className="tag">{badges.beef}</span>}
            {dish.tags.includes("vegan") && <span className="tag">{badges.vegan}</span>}
            {dish.tags.includes("shellfish") && <span className="tag">{badges.shellfish}</span>}
          </div>
          <p className="lead">{dish.brief[lang]}</p>
          <p>{dish.description[lang]}</p>
          <div className="nutri">
            <div><strong>kcal</strong><span>{dish.nutrition.kcal}</span></div>
            <div><strong>carbs</strong><span>{dish.nutrition.carbs}g</span></div>
            <div><strong>protein</strong><span>{dish.nutrition.protein}g</span></div>
            <div><strong>fat</strong><span>{dish.nutrition.fat}g</span></div>
          </div>
          {dish.allergens.length > 0 && (
            <p className="allergen">⚠️ Alérgenos: {dish.allergens.join(", ")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===== Páginas ===== */

function MenuPage(){ return (<section className="section"><MenuPreview/></section>); }

function Gallery(){
  // use as mesmas imagens para exemplo; pode adicionar mais
  const pics = [
    "/images/vaca-atolada.jpg","/images/feijoada-costela.jpg","/images/picanha-grelhada.jpg",
    "/images/pao-de-queijo.jpg","/images/polenta-frita.jpg","/images/encanto-de-coco.jpg"
  ];
  return (
    <section className="section">
      <h2>Galeria</h2>
      <div className="gallery">
        {pics.map((src,i)=>(
          <img key={i} src={src} alt={`gal-${i}`} loading="lazy"/>
        ))}
      </div>
    </section>
  );
}

function About(){
  const { tAbout } = useT();
  return (
    <section className="section">
      <h2>{tAbout.heading}</h2>
      <p>{tAbout.text[0]}</p>
      <p>{tAbout.text[1]}</p>
      <p>{tAbout.text[2]}</p>

      <div className="team">
        {tAbout.team.map(m=>(
          <div className="member" key={m.name}>
            <img src={m.img} alt={m.name}/>
            <h4>{m.name}</h4>
            <span className="role">{m.role}</span>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Location(){
  const { tLoc } = useT();
  return (
    <section className="section">
      <h2>{tLoc.title}</h2>
      <p><strong>{tLoc.address}</strong></p>
      <p>{tLoc.note}</p>
      <div className="mapbox">
        <!-- Substitua por um embed real de mapa quando quiser -->
        <img src="/images/placeholder.jpg" alt="map" />
      </div>
    </section>
  );
}

function Contact(){
  const { tContact } = useT();
  return (
    <section className="section">
      <h2>{tContact.title}</h2>
      <p>Email: <a href={`mailto:${tContact.email}`}>{tContact.email}</a></p>
      <p>Phone: <a href="tel:+97430475279">{tContact.phone}</a></p>
      <div className="reviews">
        <h3>Reviews</h3>
        <p>⭐️⭐️⭐️⭐️⭐️ “Comida incrível no coração de Doha.”</p>
        <p>⭐️⭐️⭐️⭐️ “Feijoada halal perfeita para a família.”</p>
      </div>
    </section>
  );
}

function Footer(){
  return <footer className="footer">© {new Date().getFullYear()} Panela de Barro · panela-de-barro-v3.vercel.app</footer>;
}

/* ===== App (Router) ===== */

export default function App(){
  const [lang, setLang] = useState("pt");
  const ctx = useMemo(()=>({lang, setLang}),[lang]);

  return (
    <LangContext.Provider value={ctx}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </LangContext.Provider>
  );
}
